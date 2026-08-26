"""Build the combined study app: every finished lecture in one local HTML file.

    python build_app_all.py [<no> ...]      default: every lecture that has topics

Written into the folder holding most of the videos. Lecture 1's video lives
elsewhere, so it is referenced by relative path from there; if a browser refuses
that, copying meeting_01.mp4 into the video folder fixes it, and the app says so
on screen rather than showing a silent black rectangle.

Only lectures that have both cues and topics are included. A lecture still being
processed is listed in the picker as "处理中" and cannot be selected, so the app
never implies work is finished when it is not.
"""
import json
import os
import sys

from lectures import LECTURES, VIDEO_DIR, get

OUT = os.path.join(VIDEO_DIR, "生物化学课_学习台.html")


def rel_video(L):
    """Path from the app's folder to this lecture's video, as a URL."""
    rel = os.path.relpath(L.video, VIDEO_DIR)
    return rel.replace("\\", "/")


def cues_path(L):
    return (os.path.join(os.path.dirname(os.path.abspath(__file__)), "cues.json")
            if L.no == 1 else L.path("cues.json"))


def topics_path(L):
    return (os.path.join(os.path.dirname(os.path.abspath(__file__)), "topics.json")
            if L.no == 1 else L.path("topics.json"))


wanted = [get(n) for n in sys.argv[1:]] if len(sys.argv) > 1 else LECTURES
lectures, pending = [], []
for L in wanted:
    cp, tp = cues_path(L), topics_path(L)
    if not (os.path.exists(cp) and os.path.exists(tp)):
        pending.append({"no": L.no, "date": L.date, "title_zh": L.title_zh,
                        "title_en": L.title_en})
        continue
    with open(cp, encoding="utf-8") as f:
        cues = json.load(f)
    with open(tp, encoding="utf-8") as f:
        topics = json.load(f)
    lectures.append({
        "no": L.no, "date": L.date, "title_zh": L.title_zh, "title_en": L.title_en,
        "video": rel_video(L),
        "cues": [{"s": round(c["start"], 2), "e": round(c["end"], 2),
                  "zh": c["text"], "en": c.get("en", "")} for c in cues],
        "topics": topics,
    })

assert lectures, "no lecture has both cues.json and topics.json yet"

src = os.path.join(os.path.dirname(os.path.abspath(__file__)), "app_template.html")
with open(src, encoding="utf-8") as f:
    html = f.read()
payload = {"lectures": lectures, "pending": pending}

# The cross-lecture integration material, if it has been built. It belongs to no
# single lecture and has no timestamps, so it rides alongside rather than inside.
integration = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "data", "integration.json")
if os.path.exists(integration):
    with open(integration, encoding="utf-8") as f:
        payload["integration"] = json.load(f)
    n = payload["integration"]["sections"]
    print(f"  integration: {len(n)} sections, "
          f"{sum(len(x['cards']) for x in n)} cards, "
          f"{sum(len(x['quiz']) for x in n)} questions")

html = html.replace("__DATA__", json.dumps(payload, ensure_ascii=False,
                                           separators=(",", ":")))
with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

for L in lectures:
    print(f"  L{L['no']:2d} {L['date']}  {len(L['topics']):3d} topics  "
          f"{sum(len(t.get('points', [])) for t in L['topics']):4d} points  "
          f"{sum(len(t.get('extra', [])) for t in L['topics']):4d} extra  "
          f"{sum(len(t.get('quiz', [])) for t in L['topics']):4d} quiz  "
          f"{len(L['cues']):5d} cues  {L['title_zh']}")
for p in pending:
    print(f"  L{p['no']:2d} {p['date']}  处理中 pending          {p['title_zh']}")
print(f"\n{len(lectures)} lectures, {os.path.getsize(OUT)/1e6:.1f} MB -> {OUT}")

for L in lectures:
    vid = os.path.normpath(os.path.join(VIDEO_DIR, L["video"]))
    assert os.path.exists(vid), f"L{L['no']} video not found at {vid}"
