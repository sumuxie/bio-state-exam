"""Fold the per-section takeaways into a lecture's read.json.

    python merge_keys.py <lecture no>

The takeaway belongs with the section it summarises, so it is merged into
read.json rather than shipped alongside it: one file, one place the app looks.
"""
import glob
import json
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "work", "keys")

no = int(sys.argv[1])
out = os.path.join(HERE, "data", f"{no:02d}", "read.json")
doc = json.load(open(out, encoding="utf-8"))

parts = sorted(glob.glob(os.path.join(SRC, f"out_L{no:02d}_keys_*.json")))
if not parts:
    raise SystemExit(f"no out_L{no:02d}_keys_*.json in {SRC}")

recent = [(os.path.basename(q), int(time.time() - os.path.getmtime(q)))
          for q in parts if time.time() - os.path.getmtime(q) < 180]

keys, problems = {}, []
for p in parts:
    name = os.path.basename(p)
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        problems.append(f"{name}: will not parse — {e}")
        continue
    for k in d.get("keys", []):
        i = k.get("index")
        if i is None or not (0 <= i < len(doc)):
            problems.append(f"{name}: index {i!r} out of range")
            continue
        if i in keys:
            problems.append(f"{name}: section {i} appears twice")
        if not k.get("key_en", "").strip():
            problems.append(f"{name}: section {i} has no English takeaway")
            continue
        w = len(k["key_en"].split())
        if w > 70:
            problems.append(f"{name}: section {i} takeaway is {w} words — that is a paragraph")
        keys[i] = k

missing = [i for i in range(len(doc)) if i not in keys]
if missing:
    problems.append(f"sections with no takeaway: {missing}")

words = [len(keys[i]["key_en"].split()) for i in keys]
print(f"L{no}: {len(keys)}/{len(doc)} takeaways, "
      f"{min(words)}–{max(words)} words (median {sorted(words)[len(words)//2]})")

if recent:
    print()
    print("  WAIT: these were edited in the last few minutes — is that agent"
          " really finished?")
    for name, age in recent:
        print(f"    {name}  {age}s ago")

if problems:
    print(f"\n{len(problems)} problem(s):")
    for x in problems[:30]:
        print("   " + x)
    raise SystemExit(1)

for i, sec in enumerate(doc):
    sec["key_en"] = keys[i]["key_en"]
    sec["key_zh"] = keys[i].get("key_zh", "")
with open(out, "w", encoding="utf-8", newline="\n") as f:
    json.dump(doc, f, ensure_ascii=False, indent=1)
print(f"merged into {out}")
