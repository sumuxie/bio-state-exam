"""Slice a lecture's topics into per-agent inputs for the integrated read-through.

    python make_read_inputs.py <lecture no> [parts]

Each part gets a self-contained JSON file: the topics it owns in order, the
points (what the lecturer taught, errors included) and the extra cards (which
carry the corrections and the additions). The agent's job is to turn that into
one correct, continuous text — so it needs both halves side by side, and it
needs the tags, because a card tagged 课上口误 contradicts a point while one
tagged 课上未展开 merely extends it.

No timestamps go into these files. The read-through is deliberately decoupled
from the video: it is a document to be read, not an index into a recording, and
a sentence like "as shown at 12:30" would tie it back to the thing it replaces.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "work", "read")


no = int(sys.argv[1])
parts = int(sys.argv[2]) if len(sys.argv) > 2 else 6

src = os.path.join(HERE, "data", f"{no:02d}", "topics.json")
topics = json.load(open(src, encoding="utf-8"))
os.makedirs(OUT, exist_ok=True)

per = (len(topics) + parts - 1) // parts
written = 0
for k in range(parts):
    lo, hi = k * per, min((k + 1) * per, len(topics))
    if lo >= hi:
        continue
    rows = []
    for i in range(lo, hi):
        t = topics[i]
        rows.append({
            "index": i,
            "title_en": t["title_en"], "title_zh": t["title_zh"],
            "points": t.get("points", []),
            "extra": t.get("extra", []),
        })
    p = os.path.join(OUT, f"L{no:02d}_part_{k:02d}.json")
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"lecture": no, "part": k, "topics": rows}, f,
                  ensure_ascii=False, indent=1)
    print(f"  {os.path.basename(p)}  topics {lo}..{hi-1}  "
          f"{sum(len(r['points']) for r in rows)} points  "
          f"{sum(len(r['extra']) for r in rows)} extra  "
          f"{os.path.getsize(p)/1000:.0f} kB")
    written += 1

print(f"{written} part file(s) in {OUT}")
