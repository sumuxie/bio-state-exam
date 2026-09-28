"""Validate and merge the pre-read glossary parts for one lecture.

    python merge_terms.py <lecture no>

The halves are written independently, so the same term can turn up in both. It
is kept once, at the earlier `first` — the point of the list is to be read in
the order the chapter will need it, and the place that matters is where the
reader first meets the term, not where it is eventually explained.
"""
import glob
import json
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "work", "terms")

no = int(sys.argv[1])
topics = json.load(open(os.path.join(HERE, "data", f"{no:02d}", "topics.json"),
                        encoding="utf-8"))

parts = sorted(glob.glob(os.path.join(SRC, f"out_L{no:02d}_terms_*.json")))
if not parts:
    raise SystemExit(f"no out_L{no:02d}_terms_*.json in {SRC}")

FRESH = 180
recent = [(os.path.basename(q), int(time.time() - os.path.getmtime(q)))
          for q in parts if time.time() - os.path.getmtime(q) < FRESH]


def key(t):
    return re.sub(r"[^a-z0-9]+", "", t["en"].lower())


terms, problems, dropped = {}, [], 0
for p in parts:
    name = os.path.basename(p)
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        problems.append(f"{name}: will not parse — {e}")
        continue
    for t in d.get("terms", []):
        for k in ("en", "zh", "gloss_en", "gloss_zh", "first"):
            if k not in t:
                problems.append(f"{name}: {t.get('en','?')!r} is missing {k}")
                break
        else:
            if not t["en"].strip() or not t["gloss_en"].strip():
                problems.append(f"{name}: {t['en']!r} has an empty term or gloss")
                continue
            if not (0 <= t["first"] < len(topics)):
                problems.append(f"{name}: {t['en']!r} first={t['first']} out of range")
                continue
            k = key(t)
            if k in terms:
                dropped += 1
                if t["first"] < terms[k]["first"]:
                    terms[k] = t          # keep the earlier encounter
            else:
                terms[k] = t

out_list = sorted(terms.values(), key=lambda t: (t["first"], t["en"].lower()))
print(f"L{no}: {len(out_list)} terms"
      + (f" ({dropped} duplicate(s) collapsed)" if dropped else "")
      + f", first appearance spans topics {out_list[0]['first']}–{out_list[-1]['first']}"
      if out_list else "")

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

out = os.path.join(HERE, "data", f"{no:02d}", "terms.json")
with open(out, "w", encoding="utf-8", newline="\n") as f:
    json.dump(out_list, f, ensure_ascii=False, indent=1)
print(f"wrote {out}  ({os.path.getsize(out)/1000:.0f} kB)")
