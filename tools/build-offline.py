"""Build a single self-contained HTML file for offline use.

    python tools/build-offline.py biochemie_pro

Writes `biochemie_pro_offline.html` next to the repo root: every data file, the
stylesheet and app.js inlined, so the file can be copied anywhere, double-clicked,
and used with no server and no network.

WHY A BUILD RATHER THAN "just open index.html":
opening the folder's own index.html does work in Chrome and Edge, but it depends
on a directory full of 70 sibling files staying next to it. A single file cannot
half-arrive, cannot lose a data file to a sync client, and can be mailed to
yourself. It also cannot go stale silently -- the stamp below says when it was
built and from which commit.

WHAT THE READER MUST KNOW, and the built page says it too:
localStorage is per ORIGIN. The offline file, the local http server and the
GitHub Pages site are three different origins, so progress, stars, the
wrong-answer book and the notebook do NOT travel between them. Notes can be
carried across with the notebook's own Export/Import; the rest cannot yet.
"""
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app = sys.argv[1] if len(sys.argv) > 1 else 'biochemie_pro'
src = os.path.join(ROOT, app)

html = io.open(os.path.join(src, 'index.html'), encoding='utf-8').read()


def inline_js(path):
    """A </script> inside a string literal would close the tag we are writing."""
    body = io.open(path, encoding='utf-8').read()
    return body.replace('</script', '<\\/script')


# stylesheet
css = io.open(os.path.join(src, 'style.css'), encoding='utf-8').read()
html = re.sub(r'<link rel="stylesheet" href="style\.css">',
              '<style>\n' + css + '\n</style>', html, count=1)

# every script tag, in the order the page lists them
count = 0
for m in list(re.finditer(r'<script src="([^"]+)"></script>', html)):
    rel = m.group(1)
    p = os.path.join(src, rel.replace('/', os.sep))
    if not os.path.exists(p):
        print('MISSING', rel); continue
    html = html.replace(m.group(0), '<script>\n' + inline_js(p) + '\n</script>', 1)
    count += 1

try:
    sha = subprocess.check_output(['git', '-C', ROOT, 'rev-parse', '--short', 'HEAD']).decode().strip()
except Exception:
    sha = 'unknown'

banner = (
    '<!-- Offline build of %s, commit %s.\n'
    '     Self-contained: %d scripts and the stylesheet are inlined.\n'
    '     Progress lives in this file\'s own localStorage and does NOT share with\n'
    '     the online copy. Use the notebook\'s Export to carry notes between them. -->\n'
    % (app, sha, count))
html = banner + html

out = os.path.join(ROOT, app + '_offline.html')
io.open(out, 'w', encoding='utf-8', newline='').write(html)
print('wrote %s  (%.1f MB, %d scripts inlined, commit %s)'
      % (out, os.path.getsize(out) / 1048576.0, count, sha))

# The one failure this build can have is a script that did not get inlined and
# would 404 offline. Assert there are none left.
left = re.findall(r'<script src="', html)
print('remaining external <script src>: %d' % len(left))
assert not left, 'some scripts were not inlined'
