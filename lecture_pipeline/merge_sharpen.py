"""Apply the sharpening edits to a lecture's read.json.

    python merge_sharpen.py <lecture no> [--apply]

Without --apply it only reports. Every `before` is matched against the current
text character for character; a mismatch means the paragraph has moved on since
the agent read it, and the edit is refused rather than guessed at. This is the
same rule the subtitle corrections used, for the same reason: a near-match
silently rewrites the wrong sentence.
"""
import glob
import json
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "work", "sharpen")

no = int(sys.argv[1])
target = os.path.join(HERE, "data", f"{no:02d}", "read.json")
doc = json.load(open(target, encoding="utf-8"))

parts = sorted(glob.glob(os.path.join(SRC, f"out_L{no:02d}_sh_*.json")))
if not parts:
    raise SystemExit(f"no out_L{no:02d}_sh_*.json in {SRC}")

recent = [(os.path.basename(q), int(time.time() - os.path.getmtime(q)))
          for q in parts if time.time() - os.path.getmtime(q) < 180]

edits, problems = [], []
for p in parts:
    name = os.path.basename(p)
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        problems.append(f"{name}: will not parse — {e}")
        continue
    for e in d.get("edits", []):
        e["_from"] = name
        edits.append(e)


def current(e):
    """The text this edit claims to be replacing, or None if it cannot be found."""
    sec = doc[e["index"]]
    f = e["field"]
    if f in ("key_en", "key_zh"):
        return sec.get(f)
    arr = sec.get("en" if f == "en" else "zh", [])
    i = e.get("para")
    return arr[i] if isinstance(i, int) and 0 <= i < len(arr) else None


applied = rejected = 0
for e in edits:
    for k in ("index", "field", "before", "after"):
        if k not in e:
            problems.append(f"{e.get('_from')}: an edit is missing {k}")
            break
    else:
        if not (0 <= e["index"] < len(doc)):
            problems.append(f"{e['_from']}: index {e['index']} out of range")
            continue
        cur = current(e)
        if cur is None:
            problems.append(f"{e['_from']}: {e['index']}/{e['field']}"
                            f"[{e.get('para')}] does not exist")
            rejected += 1
        elif cur != e["before"]:
            problems.append(f"{e['_from']}: {e['index']}/{e['field']}"
                            f"[{e.get('para')}] no longer matches — refused")
            rejected += 1
        else:
            applied += 1

print(f"L{no}: {len(edits)} edits, {applied} match, {rejected} refused")
by = {}
for e in edits:
    by[e["_from"]] = by.get(e["_from"], 0) + 1
for k in sorted(by):
    print(f"   {k}: {by[k]}")

if recent:
    print()
    print("  WAIT: these were edited in the last few minutes — is that agent"
          " really finished?")
    for name, age in recent:
        print(f"    {name}  {age}s ago")

if problems:
    print(f"\n{len(problems)} problem(s):")
    for x in problems[:25]:
        print("   " + x)

if "--apply" not in sys.argv:
    print("\n(report only — pass --apply to write)")
    raise SystemExit(0)

assert rejected == 0, "refusing to apply a partial set; re-run the agent instead"

for e in edits:
    sec = doc[e["index"]]
    if e["field"] in ("key_en", "key_zh"):
        sec[e["field"]] = e["after"]
    else:
        arr = sec["en" if e["field"] == "en" else "zh"]
        arr[e["para"]] = e["after"]

# The two languages are written as a pair and must stay one.
bad = [i for i, s in enumerate(doc) if len(s["en"]) != len(s["zh"])]
assert not bad, f"paragraph counts drifted apart in sections {bad}"

with open(target, "w", encoding="utf-8", newline="\n") as f:
    json.dump(doc, f, ensure_ascii=False, indent=1)
print(f"\napplied {applied} edits to {target}")
