# -*- coding: utf-8 -*-
"""Check ** markup in the data files.

WHAT THIS TOOL USED TO DO, AND WHY IT CHANGED — read before editing.

It used to enforce "only mustKnow / explain[].a / trace.* may contain **,
because everything else renders through esc() and the stars reach the screen
literally". That was an accurate description of the engine at the time, and it
was the wrong fix. The source corpora author ** throughout, in both languages
— 251 fields in the generated ch6.js alone, and 165 in pesbexplain — so the
rule was asking the data to apologise for the renderer.

app.js now has mdBold() (esc() first, then **x** -> <strong>), and every prose
field goes through it: bi(), paras(), pointLi(), coverageNote, skipIt,
explain[].q, explain[].takeaway. Verified in headless Chrome across all 53
nodes in all three language modes: 0 literal ** on screen, 1396 <strong>.

So the field whitelist is gone. What remains worth checking is markup that
cannot render no matter which function handles it:

    unbalanced   an odd count of ** in one field, so one star has no partner.
                 mdBold() renders such a field verbatim rather than guessing
                 where the emphasis closes, which means every star shows.

'****' is NOT an error and is deliberately not flagged: the corpora write
adjacent bold runs with no separator, and mdBold() splits rather than
regex-pairs precisely so that case renders. An earlier version of this file
called it "always a typo" and produced one false positive on L-27-2-1.

Usage:  python tools/check_asterisks.py data/ch4.js [more.js ...]
Exits non-zero if anything would render wrong.

The authoritative check is still the browser sweep, not this file: this
reasons about the text, the browser reports what a reader sees.
"""
import io
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Every field that carries prose. All of these render through mdBold() now,
# so ** is legal in each; they are listed so the scan knows where to look.
PROSE = (
    'mustKnow', 'skipIt', 'coverageNote', 'a', 'q', 'takeaway',
    'what', 'from', 'to', 'family', 'numbers',
    'en', 'cn', 'def_en', 'def_cn', 'term',
    'q_en', 'q_cn', 'why_en', 'why_cn', 'answer_en', 'answer_cn',
    'caption_en', 'caption_cn', 'model_en', 'model_cn',
)

FIELD = re.compile(r'(\w+):\s*(.*)$')
NODE = re.compile(r"^\s*id:\s*[\"']([^\"']+)[\"']")


def scan(path):
    hits = []
    node = '?'
    field = None
    buf = []

    def flush():
        if not field or field not in PROSE:
            return
        text = ' '.join(buf)
        n = text.count('**')
        if n and n % 2:
            hits.append((node, field, 'unbalanced (%d marks)' % n, text))

    for raw in open(path, encoding='utf-8'):
        m = NODE.match(raw)
        if m:
            flush()
            field, buf = None, []
            node = m.group(1)
            continue
        s = raw.strip()
        m = FIELD.match(s)
        if m and m.group(1) in PROSE:
            flush()
            field, buf = m.group(1), [m.group(2)]
            continue
        if field and (s.startswith("'") or s.startswith('"') or s.startswith('+')):
            buf.append(s)
            continue
        flush()
        field, buf = None, []
    flush()
    return hits


total = 0
for path in sys.argv[1:]:
    hits = scan(path)
    total += len(hits)
    for node, field, why, text in hits:
        clean = re.sub(r"['\"]\s*\+?", '', text)
        print('%-10s %-14s %-22s %s...' % (node, field, why, clean[:80]))
    print('%s: %d field(s) with broken ** markup' % (path, len(hits)))

sys.exit(1 if total else 0)
