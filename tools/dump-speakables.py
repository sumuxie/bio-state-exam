"""Harvest the exact text behind every 🔊 button, by rendering nodes in a browser.

    python tools/dump-speakables.py 1-1 1-2        -> tools/speakables.json
    python tools/dump-speakables.py --all

WHY NOT JUST READ THE DATA FILES
The first version of tools/render-audio.py listed the fields it thought carried a
read button — czTitle, summary.en, points[].cn and so on. It missed six of the
thirty-seven buttons on node 1.1 alone, because the app also reads mustKnow, the
Chinese explainers and the coverage note, and because that list has to be kept in
step with app.js by hand for ever.

The app already computes the answer: `speakBtn()` puts the final text in `data-say`,
after stripMd() and after whatever field logic applies. Reading it back out of the
rendered DOM is exact by construction and cannot drift.
"""
import functools, http.server, json, pathlib, socketserver, subprocess, sys, threading, time, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from cdp_client import CDP

APP = "biochemie_pro"
OUT = ROOT / "tools" / "speakables.json"
PORT, CDP_PORT = 8952, 9352
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PROFILE = ROOT / ".chrome-dump-profile"

args = [a for a in sys.argv[1:] if not a.startswith("--")]
ALL = "--all" in sys.argv

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
    # Same disk-cache trap as dump-topics.py: a persistent profile will serve the
    # PREVIOUS data/*.js and the harvest silently describes text that no longer exists.
    p.call("Network.enable"); p.call("Network.setCacheDisabled", cacheDisabled=True)
    p.call("Page.navigate", url=f"http://127.0.0.1:{PORT}/{APP}/index.html")
    time.sleep(7)

    want = "null" if ALL else json.dumps(args)
    expr = """
    (async () => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      const want = %s;
      const items = Array.from(document.querySelectorAll('.topic-item'));
      const ids = want ? want : items.map(b => b.dataset.id);
      const out = [];
      const seen = new Set();
      for (const id of ids) {
        const it = items.find(b => b.dataset.id === id);
        if (!it) { out.push({ id, missing: true }); continue; }
        it.click();
        await sleep(60);
        // Both languages, because bi() only emits the half that is on screen and
        // the read buttons follow it. Two passes is the whole cost.
        for (const lang of ['both', 'en', 'cn']) {
          if (window.__setLang) window.__setLang(lang);
          await sleep(50);
          document.querySelectorAll('#panel-study .say-btn').forEach(btn => {
            const t = btn.dataset.say, l = btn.dataset.lang;
            const k = l + '\\u001f' + t;
            if (!t || seen.has(k)) return;
            seen.add(k);
            // Which block of the page the button sits in. Renders are chosen by
            // this: a 7,700-character coverage note is a note to the editor about
            // what was read off the scan, and nobody listens to one.
            const w = btn.closest('.cov-note') ? 'coverageNote'
                    : btn.closest('.model-answer') ? 'modelAnswer'
                    : btn.closest('.must-know') ? 'mustKnow'
                    : btn.closest('.term') ? 'term'
                    : btn.closest('.leh-notes') ? 'lehNote'
                    : btn.closest('.trace-table, .trace') ? 'trace'
                    : btn.closest('.chain') ? 'chain'
                    : btn.closest('.block-gap') ? 'gapPoint'
                    : btn.closest('ol.points') ? 'point'
                    : btn.closest('.topic-head, .th-cz, .th-en, .th-cn') ? 'title'
                    : btn.closest('.summary, .block') ? 'summary'
                    : 'other';
            out.push({ id, text: t, lang: l, where: w });
          });
        }
      }
      return JSON.stringify(out);
    })()
    """ % want
    r = p.call("Runtime.evaluate", expression=expr, returnByValue=True,
               awaitPromise=True, _timeout=600)
    rows = json.loads(r["result"]["value"])
    missing = [x["id"] for x in rows if x.get("missing")]
    rows = [x for x in rows if not x.get("missing")]
    OUT.write_text(json.dumps(rows, ensure_ascii=False, indent=1), encoding="utf-8")
    by_lang = {}
    for x in rows:
        by_lang[x["lang"]] = by_lang.get(x["lang"], 0) + 1
    print(f"{len(rows)} clips wanted across {len(set(x['id'] for x in rows))} node(s)")
    for k, v in sorted(by_lang.items()):
        print(f"  {k}: {v}")
    if missing:
        print(f"  NOT FOUND in the sidebar: {missing}")
    print(f"wrote {OUT}")
finally:
    try: proc.terminate()
    except Exception: pass
    srv.shutdown()
