"""Open every spined node in the 速通简洁版 and report what is actually on screen.

    python tools/check-lite-render.py

check-spine.py reads the data; this reads the PAGE. They fail differently: the data
can be perfect while a render path drops it, and a `**` that survives to the screen
as two asterisks is invisible to a data checker but is the first thing a reader sees.

Reports per node: steps, connectors, 详见 links, bold count, and any literal `**`.
Anything that renders zero steps, or shows an asterisk, is a defect.
"""
import functools, http.server, json, pathlib, socketserver, subprocess, sys, threading, time, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from cdp_client import CDP

PORT, CDP_PORT = 8954, 9355
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PROFILE = ROOT / ".chrome-dump-profile"

class Quiet(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      ".m4a": "audio/mp4"}
    def log_message(self, *a): pass
class Reuse(socketserver.TCPServer):
    allow_reuse_address = True; daemon_threads = True

srv = Reuse(("127.0.0.1", PORT), functools.partial(Quiet, directory=str(ROOT)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
proc = subprocess.Popen(
    [CHROME, "--headless=new", f"--remote-debugging-port={CDP_PORT}",
     f"--user-data-dir={PROFILE}", "--no-first-run", "--disable-gpu",
     "--window-size=1400,1400", "about:blank"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
bad = 0
try:
    ws = None
    for _ in range(60):
        try:
            with urllib.request.urlopen(f"http://127.0.0.1:{CDP_PORT}/json/version", timeout=2) as r:
                ws = json.load(r)["webSocketDebuggerUrl"]
            break
        except Exception:
            time.sleep(0.5)
    if not ws:
        sys.exit("chrome devtools never came up")
    b = CDP(ws)
    tgt = b.call("Target.createTarget", url="about:blank")["targetId"]
    lst = json.load(urllib.request.urlopen(f"http://127.0.0.1:{CDP_PORT}/json/list"))
    p = CDP(next(t["webSocketDebuggerUrl"] for t in lst if t.get("id") == tgt))
    p.call("Page.enable"); p.call("Runtime.enable")
    p.call("Network.enable"); p.call("Network.setCacheDisabled", cacheDisabled=True)
    p.call("Runtime.evaluate",
           expression="window.__errs=[];window.onerror=(m)=>window.__errs.push(String(m));")
    p.call("Page.navigate", url=f"http://127.0.0.1:{PORT}/biochemie_lite/index.html")
    time.sleep(6)

    expr = r"""
    (async () => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      const rows = [];
      const items = Array.from(document.querySelectorAll('.topic-item:not(.no-spine)'));
      for (const it of items) {
        it.click(); await sleep(140);
        const pane = document.querySelector('#panel-study');
        const txt = pane.innerText || '';
        rows.push({
          id: it.dataset.id,
          steps: pane.querySelectorAll('ol.chain > li:not(.ch-link)').length,
          links: pane.querySelectorAll('ol.chain > li.ch-link').length,
          see: pane.querySelectorAll('.see-link').length,
          recall: pane.querySelectorAll('.ch-recall').length,
          beyond: pane.querySelectorAll('.beyond-flag').length,
          open: pane.querySelectorAll('.ch-open').length,
          bold: pane.querySelectorAll('strong').length,
          say: pane.querySelectorAll('.say-btn').length,
          stars: (txt.match(/\*\*/g) || []).length,
          chars: txt.length
        });
      }
      return JSON.stringify({ errors: window.__errs || [], total: items.length, rows });
    })()
    """
    r = p.call("Runtime.evaluate", expression=expr, returnByValue=True,
               awaitPromise=True, _timeout=600)
    got = json.loads(r["result"]["value"])
finally:
    try: proc.terminate()
    except Exception: pass
    srv.shutdown()

rows = got["rows"]
print(f"{got['total']} spined node(s) rendered, {len(got['errors'])} JS error(s)\n")
for e in got["errors"][:10]:
    print("  ERROR", e)

print(f"{'node':12s} {'steps':>5s} {'link':>4s} {'see':>4s} {'rcl':>4s} {'byd':>4s} "
      f"{'open':>4s} {'bold':>5s} {'🔊':>4s} {'**':>3s}")
for r_ in sorted(rows, key=lambda x: x["id"]):
    flag = ""
    if r_["steps"] == 0:
        flag = "  <-- NO STEPS RENDERED"; bad += 1
    if r_["stars"]:
        flag += "  <-- LITERAL ASTERISKS ON SCREEN"; bad += 1
    print(f"{r_['id']:12s} {r_['steps']:5d} {r_['links']:4d} {r_['see']:4d} {r_['recall']:4d} "
          f"{r_['beyond']:4d} {r_['open']:4d} {r_['bold']:5d} {r_['say']:4d} {r_['stars']:3d}{flag}")

tot = lambda k: sum(x[k] for x in rows)
print(f"\ntotals: {tot('steps')} steps, {tot('links')} connectors, {tot('see')} cross-refs, "
      f"{tot('recall')} recalls, {tot('beyond')} beyond-flags, {tot('open')} open questions")
print(f"        {tot('bold')} bold spans, {tot('say')} read buttons, {tot('stars')} literal **")
if got["errors"]:
    bad += len(got["errors"])
print(f"\n{bad} problem(s)" if bad else "\nevery spined node renders")
sys.exit(1 if bad else 0)
