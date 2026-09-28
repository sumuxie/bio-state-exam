"""Do the links between the two apps actually resolve?

    python tools/check-lite-links.py

A cross-app link is the quietest thing that can break. The lite app was emitting
`../biochemie_pro/index.html#<id>` while the full app routes on `#/t/<id>`, so every
"详见 📖" opened the right app on the wrong node — no error, no console warning,
nothing to notice unless you happened to know which node you had asked for.

So: drive both apps in a browser, follow a link out of the lite app, and assert the
full app lands on the node that was asked for. Both directions, no trust.
"""
import functools, http.server, json, pathlib, re, socketserver, subprocess, sys, threading, time, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from cdp_client import CDP

PORT, CDP_PORT = 8953, 9353
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PROFILE = ROOT / ".chrome-dump-profile"

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
class Reuse(socketserver.TCPServer):
    allow_reuse_address = True; daemon_threads = True

srv = Reuse(("127.0.0.1", PORT), functools.partial(Quiet, directory=str(ROOT)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
proc = subprocess.Popen(
    [CHROME, "--headless=new", f"--remote-debugging-port={CDP_PORT}",
     f"--user-data-dir={PROFILE}", "--no-first-run", "--disable-gpu", "about:blank"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
fail = 0
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

    # ---- collect every outbound link the lite app renders
    p.call("Page.navigate", url=f"http://127.0.0.1:{PORT}/biochemie_lite/index.html")
    time.sleep(5)
    expr = r"""
    (async () => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      const out = [];
      const items = Array.from(document.querySelectorAll('.topic-item:not(.no-spine)'));
      for (const it of items) {
        it.click(); await sleep(250);
        document.querySelectorAll('#panel-study a[href]').forEach(a => {
          const h = a.getAttribute('href');
          if (h && h.indexOf('biochemie_pro') !== -1) out.push(h);
        });
      }
      return JSON.stringify({ spined: items.length, links: Array.from(new Set(out)) });
    })()
    """
    r = p.call("Runtime.evaluate", expression=expr, returnByValue=True, awaitPromise=True)
    got = json.loads(r["result"]["value"])
    print(f"{got['spined']} spined node(s), {len(got['links'])} distinct outbound link(s)\n")

    for href in got["links"]:
        m = re.search(r"#/t/(.+)$", href)
        if not m:
            print(f"  BAD FORMAT  {href}")
            print(f"              the full app routes on #/t/<id>; this will open the wrong node")
            fail += 1
            continue
        want = urllib.request.unquote(m.group(1))
        url = f"http://127.0.0.1:{PORT}/biochemie_pro/index.html#/t/{m.group(1)}"
        p.call("Page.navigate", url=url)
        time.sleep(3.5)
        r2 = p.call("Runtime.evaluate",
                    expression="(document.querySelector('#panel-study .th-sec')||{}).innerText || ''",
                    returnByValue=True)
        sec = (r2.get("result", {}).get("value") or "").strip()
        r3 = p.call("Runtime.evaluate",
                    expression="(document.querySelector('.topic-item.current')||{}).dataset"
                               " ? document.querySelector('.topic-item.current').dataset.id : ''",
                    returnByValue=True)
        landed = (r3.get("result", {}).get("value") or "").strip()
        ok = landed == want
        if not ok:
            fail += 1
        print(f"  {'ok  ' if ok else 'FAIL'} {want:12s} -> landed on {landed or '(nothing)':12s} §{sec}")
finally:
    try: proc.terminate()
    except Exception: pass
    srv.shutdown()

print(f"\n{fail} broken link(s)" if fail else "\nevery cross-app link resolves")
sys.exit(1 if fail else 0)
