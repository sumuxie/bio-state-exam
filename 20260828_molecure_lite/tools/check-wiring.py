# -*- coding: utf-8 -*-
"""Does what the app loads actually join up?

Three failures here are all SILENT — the page renders, nothing errors, and the
content is simply not there:

  ORPHAN SPINE   a spine keyed on an id that no node in nodes.js carries. app.js
                 looks a spine up BY node, so this chain can never be reached. One
                 mistyped character does it, and the sidebar looks completely normal.
  NO SPINE       a node with no spine yet. Not an error — the app renders its source
                 pages instead — but it is the work-remaining number, and it should
                 be a count somebody reads, not a thing discovered by clicking.
  UNLOADED FILE  a data/*.js file the entry page never <script>-tags, or a tag
                 pointing at a file that is not there. The first loses content with
                 no symptom at all; the second is a 404 in a console nobody has open.
  ORPHAN AREA    a topicKey on a node that no AREAS block in app.js lists. app.js
                 falls these through to a final 其他 block, so it shows up — but at
                 the bottom, away from its subject, which is not what was intended.

    python tools/check-wiring.py
"""
import io, json, pathlib, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

APP = pathlib.Path(__file__).resolve().parent.parent
DATA = APP / "data"

# ---- nodes -----------------------------------------------------------------
raw = (DATA / "nodes.js").read_text(encoding="utf-8")
m = re.search(r"=\s*(\[.*\]);", raw, re.S)
if not m:
    sys.exit("could not find the array in nodes.js")
body = m.group(1)
stripped = re.sub(r"/\*.*?\*/", "", body, flags=re.S)
assert "/*" not in stripped, "a string in nodes.js contains '/*'; the strip would corrupt it"
nodes = json.loads(stripped)
node_ids = [n["id"] for n in nodes]
assert len(node_ids) == len(set(node_ids)), "duplicate node id in nodes.js"

# ---- spines ----------------------------------------------------------------
spine_files = sorted(DATA.glob("spine_*.js"))
if not spine_files:
    sys.exit(f"NO SPINE FILES under {DATA}")
spine_of = {}
for f in spine_files:
    for k in re.findall(r'BIOLITE_SPINE\[\s*"([^"]+)"\s*\]\s*=', f.read_text(encoding="utf-8")):
        spine_of.setdefault(k, []).append(f.name)

# ---- questions -------------------------------------------------------------
q_of = {}
for f in sorted(DATA.glob("questions*.js")):
    for k in re.findall(r'BIOLITE_Q\[\s*"([^"]+)"\s*\]\s*=', f.read_text(encoding="utf-8")):
        q_of.setdefault(k, []).append(f.name)

# ---- what the entry page loads ---------------------------------------------
# The entry file is NOT hardcoded to index.html. These apps are double-click
# file:// pages and get named after the app and its date (20260828_molecure_lite.html,
# the way 20260828_pesbexplain.html is), so a hardcoded name breaks on the next
# rename — and it broke on this one. Find the single HTML file instead.
pages = sorted(APP.glob("*.html"))
if not pages:
    sys.exit(f"NO .html entry page in {APP} — nothing loads the data files.")
if len(pages) > 1:
    sys.exit("more than one .html in the app root, so which one is the entry page is "
             "ambiguous: " + ", ".join(p.name for p in pages))
entry = pages[0]
html = entry.read_text(encoding="utf-8")
tagged = set(re.findall(r'<script src="data/([^"]+)"', html))
on_disk = {p.name for p in DATA.glob("*.js")}

problems = []
for k, files in spine_of.items():
    if k not in node_ids:
        problems.append(f"ORPHAN SPINE   {k} (in {', '.join(files)}) has no node in nodes.js")
    if len(files) > 1:
        problems.append(f"DUPLICATE      {k} is defined in {', '.join(files)} — last one wins")
for k, files in q_of.items():
    if k not in node_ids:
        problems.append(f"ORPHAN QUESTIONS {k} (in {', '.join(files)}) has no node in nodes.js")
for f in sorted(on_disk - tagged):
    problems.append(f"UNLOADED FILE  data/{f} exists but {entry.name} never loads it")
for f in sorted(tagged - on_disk):
    problems.append(f"MISSING FILE   {entry.name} loads data/{f}, which is not on disk")

areas = set(re.findall(r"'([a-z0-9-]+)'", re.search(
    r"const AREAS = \[(.*?)\n  \];", (APP / "app.js").read_text(encoding="utf-8"), re.S).group(1)))
for n in nodes:
    if n.get("topicKey") and n["topicKey"] not in areas:
        problems.append(f"ORPHAN AREA    node {n['id']} has topicKey '{n['topicKey']}', "
                        f"which no AREAS block lists — it will fall into 其他")

spined = [n for n in nodes if n["id"] in spine_of]
print(f"{len(nodes)} node(s), {len(spine_files)} spine file(s), "
      f"{len(spine_of)} spine(s), {len(q_of)} node(s) with questions")
print(f"spined: {len(spined)}/{len(nodes)}")
missing = [n["id"] for n in nodes if n["id"] not in spine_of]
if missing:
    print("no spine yet: " + ", ".join(missing))
print()
for p in problems:
    print("  " + p)
print(f"\n{len(problems)} problem(s)" if problems else "\nno problems")
sys.exit(1 if problems else 0)
