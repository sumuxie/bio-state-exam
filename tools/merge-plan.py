"""What is left to do to get from 281 node spines to 78 topic spines?

    python tools/merge-plan.py            # the whole plan
    python tools/merge-plan.py --ready    # only topics whose parts are all written

The two books are not two subjects. 281 nodes resolve into 78 topicKeys, and the app
can key a spine by topic (`key:<topicKey>`) instead of by node. This works out, per
topic, whether the material for a merge exists yet:

  READY     every member node already has a spine — an agent can merge them now
  PARTIAL   some members have spines, some do not — write the rest first
  EMPTY     nothing written for this topic yet
  MERGED    a `key:` spine already exists; nothing to do
"""
import collections, importlib.util, json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LITE = ROOT / "biochemie_lite"

spec = importlib.util.spec_from_file_location("cs", ROOT / "tools" / "check-spine.py")
cs = importlib.util.module_from_spec(spec)
_argv, sys.argv = sys.argv, ["check-spine.py"]
try:
    spec.loader.exec_module(cs)
except SystemExit:
    pass
sys.argv = _argv

spines, bad = cs.load_spines()
nodes = json.loads(re.search(r"=\s*(\[.*\]);",
                   (LITE / "data" / "nodes.js").read_text(encoding="utf-8"), re.S).group(1))
sections = [n for n in nodes if n.get("kind") != "entity"]

groups = collections.defaultdict(list)
for n in sections:
    groups[n.get("topicKey") or ("_" + n["id"])].append(n)

def steps_of(nid):
    sp = spines.get(nid)
    return len(sp.get("steps") or []) if sp else 0

rows = []
for key, members in groups.items():
    if ("key:" + key) in spines:
        state = "MERGED"
    else:
        have = [m for m in members if m["id"] in spines]
        if len(have) == len(members):
            state = "READY"
        elif have:
            state = "PARTIAL"
        else:
            state = "EMPTY"
    leh = [m for m in members if m["book"] == "lehninger"]
    cz = [m for m in members if m["book"] != "lehninger"]
    rows.append({
        "key": key, "state": state, "n": len(members),
        "leh": len(leh), "cz": len(cz),
        "written": sum(1 for m in members if m["id"] in spines),
        "steps": sum(steps_of(m["id"]) for m in members),
        "chapters": sorted({m["chapter"] for m in members if m.get("chapter")}),
        "ids": [m["id"] for m in members],
    })

order = {"MERGED": 0, "READY": 1, "PARTIAL": 2, "EMPTY": 3}
rows.sort(key=lambda r: (order[r["state"]], -r["n"]))

want_ready = "--ready" in sys.argv
counts = collections.Counter(r["state"] for r in rows)
print(f"{len(sections)} section nodes -> {len(groups)} topics\n")
for s in ("MERGED", "READY", "PARTIAL", "EMPTY"):
    print(f"  {s:8s} {counts[s]:3d} topic(s)")
print(f"\n{'state':8s} {'n':>3s} {'LEH':>4s} {'CZ':>4s} {'writ':>5s} {'steps':>6s}  topic")
for r in rows:
    if want_ready and r["state"] != "READY":
        continue
    print(f"{r['state']:8s} {r['n']:3d} {r['leh']:4d} {r['cz']:4d} {r['written']:5d} "
          f"{r['steps']:6d}  {r['key']}")

if not want_ready:
    ready = [r for r in rows if r["state"] == "READY"]
    tot = sum(r["steps"] for r in ready)
    print(f"\n{len(ready)} topic(s) ready to merge now, holding {tot} steps between them")
    print("a merge takes the Lehninger spine as the backbone and folds the Czech")
    print("material into it, because the reader said Lehninger is the better source.")
