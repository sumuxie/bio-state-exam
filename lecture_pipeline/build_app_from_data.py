r"""Rebuild the study app from an already-extracted data blob.

    python build_app_from_data.py <app_data.json> [<out.html>]

`build_app_all.py` is the normal path: it reads each lecture's cues.json and
topics.json out of the working tree. Those live in a scratch directory that the
OS may clear, and did. The built app carries the same data inlined, so this
script goes the other way -- take the blob back out (or a copy of it saved
earlier) and re-inject it into the current template. Use it to change how the
app looks or behaves without re-running the pipeline.

To extract the blob from a built app:
    import re, json
    s = open(app, encoding='utf-8').read()
    d = json.loads(re.search(r'const DATA\s*=\s*(\{.*?\});', s, re.S).group(1))
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_OUT = os.path.join(
    os.path.expanduser("~"), "Downloads", "生物化学课 视频", "生物化学课_学习台.html")

data_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "app_data.json")
out = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_OUT

with open(data_path, encoding="utf-8") as f:
    data = json.load(f)

assert data.get("lectures"), f"{data_path} has no lectures"

with open(os.path.join(HERE, "app_template.html"), encoding="utf-8") as f:
    html = f.read()
assert html.count("__DATA__") == 1, "template does not have exactly one __DATA__ slot"

html = html.replace("__DATA__", json.dumps(data, ensure_ascii=False,
                                           separators=(",", ":")))
with open(out, "w", encoding="utf-8") as f:
    f.write(html)

for L in data["lectures"]:
    print(f"  L{L['no']:2d} {L['date']}  {len(L['topics']):3d} topics  "
          f"{sum(len(t.get('points', [])) for t in L['topics']):4d} points  "
          f"{sum(len(t.get('extra', [])) for t in L['topics']):4d} extra  "
          f"{sum(len(t.get('quiz', [])) for t in L['topics']):4d} quiz  "
          f"{len(L['cues']):5d} cues  {L['title_zh']}")
print(f"\n{len(data['lectures'])} lectures, "
      f"{os.path.getsize(out)/1e6:.1f} MB -> {out}")
