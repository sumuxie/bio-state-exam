"""Validate and merge the integrated read-through parts for one lecture.

    python merge_read.py <lecture no>

Checks that every topic is present exactly once, that the two languages run
paragraph for paragraph, and that nothing points back at the recording — the
read-through is meant to stand on its own, so a stray "as shown in the video"
is a defect, not a stylistic quibble.
"""
import glob
import json
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "work", "read")

# Phrases that tie the text back to the recording it replaces.
LEAKS = [
    r"\bthe (video|lecture|lecturer|teacher|recording)\b",
    r"\bin (this|the) (video|lecture|clip|section of the video)\b",
    r"\bas (mentioned|shown|said|explained) (in|at|above)\b",
    r"\bhe (said|says|mentioned|explained|noted|claimed)\b",
    r"\bslide\b", r"\b\d{1,2}:\d{2}(:\d{2})?\b",
    r"视频", r"这节课", r"老师", r"课上(说|讲|提到)", r"上课时",
]

no = int(sys.argv[1])
topics = json.load(open(os.path.join(HERE, "data", f"{no:02d}", "topics.json"),
                       encoding="utf-8"))

parts = sorted(glob.glob(os.path.join(SRC, f"out_L{no:02d}_part_*.json")))
if not parts:
    raise SystemExit(f"no out_L{no:02d}_part_*.json in {SRC}")

# Agents keep editing their file after it first looks finished — twice now a
# merge run on "all the files exist" shipped a stale part. A recent mtime is
# not proof of anything, but it is the cheap warning that the completion
# signal is the thing to wait for.
FRESH = 180
recent = [(os.path.basename(q), int(time.time() - os.path.getmtime(q)))
          for q in parts if time.time() - os.path.getmtime(q) < FRESH]

secs, problems = {}, []
for p in parts:
    name = os.path.basename(p)
    try:
        d = json.load(open(p, encoding="utf-8"))
    except Exception as e:
        problems.append(f"{name}: will not parse — {e}")
        continue
    for t in d.get("topics", []):
        i = t.get("index")
        if i is None or not (0 <= i < len(topics)):
            problems.append(f"{name}: index {i!r} out of range")
            continue
        if i in secs:
            problems.append(f"{name}: topic {i} appears twice")
        en, zh = t.get("en", []), t.get("zh", [])
        if not en:
            problems.append(f"{name}: topic {i} has no English")
        if len(en) != len(zh):
            problems.append(f"{name}: topic {i} has {len(en)} en vs {len(zh)} zh paragraphs")
        if not t.get("heading_en") or not t.get("heading_zh"):
            problems.append(f"{name}: topic {i} is missing a heading")
        blob = " ".join([t.get("heading_en", ""), t.get("heading_zh", "")] + en + zh)
        for pat in LEAKS:
            m = re.search(pat, blob, re.I)
            if m:
                problems.append(f"{name}: topic {i} points back at the recording "
                                f"({m.group(0)!r})")
                break
        secs[i] = t

missing = [i for i in range(len(topics)) if i not in secs]
if missing:
    problems.append(f"topics with no read-through: {missing}")

words = sum(len(" ".join(secs[i].get("en", [])).split()) for i in secs)
print(f"L{no}: {len(secs)}/{len(topics)} topics, ~{words} English words, "
      f"{sum(len(secs[i].get('en', [])) for i in secs)} paragraphs")

if recent:
    print()
    print("  WAIT: these were edited in the last few minutes — is that"
          " agent really finished?")
    for name, age in recent:
        print(f"    {name}  {age}s ago")

if problems:
    print(f"\n{len(problems)} problem(s):")
    for x in problems[:30]:
        print("   " + x)
    raise SystemExit(1)

out = os.path.join(HERE, "data", f"{no:02d}", "read.json")
ordered = [secs[i] for i in range(len(topics))]
with open(out, "w", encoding="utf-8", newline="\n") as f:
    json.dump(ordered, f, ensure_ascii=False, indent=1)
print(f"wrote {out}  ({os.path.getsize(out)/1000:.0f} kB)")
