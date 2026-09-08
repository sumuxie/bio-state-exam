"""Slice a lecture into inputs for the pre-read glossary.

    python make_term_inputs.py <lecture no> [parts]

The glossary answers one question: what does this lecture use without stopping
to explain? So the agent needs the lecture's own words — the points, and the
extra cards, which is where a term often first turns up used rather than
defined. Titles come along to fix the order.

Output goes to work/terms/, kept apart from work/read/ so the two pipelines
cannot overwrite each other's part files.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "work", "terms")

no = int(sys.argv[1])
parts = int(sys.argv[2]) if len(sys.argv) > 2 else 2

topics = json.load(open(os.path.join(HERE, "data", f"{no:02d}", "topics.json"),
                        encoding="utf-8"))
os.makedirs(OUT, exist_ok=True)

per = (len(topics) + parts - 1) // parts
written = 0
for k in range(parts):
    lo, hi = k * per, min((k + 1) * per, len(topics))
    if lo >= hi:
        continue
    rows = [{
        "index": i,
        "title_en": topics[i]["title_en"], "title_zh": topics[i]["title_zh"],
        "points": topics[i].get("points", []),
        "extra": topics[i].get("extra", []),
    } for i in range(lo, hi)]
    p = os.path.join(OUT, f"L{no:02d}_terms_{k:02d}.json")
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"lecture": no, "part": k, "first_topic": lo,
                   "last_topic": hi - 1, "topics": rows}, f,
                  ensure_ascii=False, indent=1)
    print(f"  {os.path.basename(p)}  topics {lo}..{hi-1}  "
          f"{os.path.getsize(p)/1000:.0f} kB")
    written += 1

print(f"{written} part file(s) in {OUT}")
