"""Attach the English subtitle line to each cue.

The translations are keyed by cue index; a translation whose index is out of
range, or which arrives twice, is rejected rather than guessed at. Cues left
without a translation are counted and reported - a silently half-translated
subtitle track is worse than a visibly incomplete one.
"""
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUTDIR = r"C:\Users\Admin\Documents\VooVMeeting\2026-06-27 14.10.06.350"
SRT_EN = os.path.join(OUTDIR, "meeting_01.en.srt")

with open(os.path.join(HERE, "cues.json"), encoding="utf-8") as f:
    cues = json.load(f)

got, rejected, seen = 0, [], set()
for path in sorted(glob.glob(os.path.join(HERE, "translations", "*.json"))):
    with open(path, encoding="utf-8") as f:
        rows = json.load(f)
    print(f"{os.path.basename(path):18s} {len(rows):4d}")
    for r in rows:
        i = r.get("index")
        if not isinstance(i, int) or not 0 <= i < len(cues):
            rejected.append((r, "index out of range"))
        elif i in seen:
            rejected.append((r, "duplicate index"))
        elif not str(r.get("en", "")).strip():
            rejected.append((r, "empty translation"))
        else:
            seen.add(i)
            cues[i]["en"] = r["en"].strip()
            got += 1

with open(os.path.join(HERE, "cues.json"), "w", encoding="utf-8") as f:
    json.dump(cues, f, ensure_ascii=False)


def ts(x):
    h, r = divmod(x, 3600)
    m, s = divmod(r, 60)
    return f"{int(h):02d}:{int(m):02d}:{int(s):02d},{int(round((s % 1) * 1000)):03d}"


with open(SRT_EN, "w", encoding="utf-8-sig") as f:
    for n, c in enumerate(cues, 1):
        f.write(f"{n}\n{ts(c['start'])} --> {ts(c['end'])}\n{c.get('en','') or c['text']}\n\n")

missing = [i for i, c in enumerate(cues) if not c.get("en")]
print(f"\ntranslated {got} of {len(cues)} cues")
print(f"rejected   {len(rejected)}")
for r, why in rejected[:20]:
    print(f"  idx={r.get('index')}  {why}")
if missing:
    print(f"{len(missing)} cues have no English line; the English .srt falls back to Chinese there")
print(f"-> {SRT_EN}")
assert got > len(cues) * 0.9, f"only {got}/{len(cues)} cues translated"
