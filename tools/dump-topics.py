"""Dump window.BIOCHEM.topics to JSON by loading the app in headless Chrome.

    python tools/dump-topics.py [app] [out.json]

The data files are 78 `window.BIOCHEM.topics.push({...})` calls with comments,
trailing commas and template literals in them. Re-implementing a JS parser to read
them has been tried in this repo and is how `tools/validate-data.js` ended up needing
a browser too. Letting the browser do it is exact by construction.
"""
import functools, http.server, json, pathlib, socketserver, subprocess, sys, threading, time, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP = sys.argv[1] if len(sys.argv) > 1 else "biochemie_pro"
OUT = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else ROOT / "tools" / "topics.json")
PORT, CDP_PORT = 8951, 9351
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

    sys.path.insert(0, str(ROOT / "tools"))
    from cdp_client import CDP                      # tiny websocket/CDP helper
    b = CDP(ws)
    tgt = b.call("Target.createTarget", url="about:blank")["targetId"]
    lst = json.load(urllib.request.urlopen(f"http://127.0.0.1:{CDP_PORT}/json/list"))
    p = CDP(next(t["webSocketDebuggerUrl"] for t in lst if t.get("id") == tgt))
    p.call("Page.enable"); p.call("Runtime.enable")
    # The profile is persistent, so Chrome will happily serve data/*.js from its disk
    # cache and this tool then reports 284 topics from the PREVIOUS text. A
    # verification that cannot see your edit is worse than no verification, because
    # it passes. Turn the cache off for the session rather than trusting a reload.
    p.call("Network.enable"); p.call("Network.setCacheDisabled", cacheDisabled=True)
    p.call("Page.navigate", url=f"http://127.0.0.1:{PORT}/{APP}/index.html")
    time.sleep(7)
    r = p.call("Runtime.evaluate",
               expression="JSON.stringify((window.BIOCHEM||{}).topics||[])",
               returnByValue=True)
    val = r["result"]["value"]
    topics = json.loads(val)
    if not topics:
        sys.exit("no topics loaded — did the app throw?")
    OUT.write_text(json.dumps(topics, ensure_ascii=False), encoding="utf-8")
    print(f"{len(topics)} topics -> {OUT}")
finally:
    try: proc.terminate()
    except Exception: pass
    srv.shutdown()
