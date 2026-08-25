# -*- coding: utf-8 -*-
"""Append node fragments to a chapter data file.

    python splice.py data/ch2.js frag_2_23.js [frag_2_45.js ...]

Each fragment is one or more complete node objects, written WITHOUT the
trailing comma and without the enclosing concat([...]) wrapper. The target
file must already end with the `]);` closer; this splits it off, joins the
new nodes on with a comma, and puts the closer back.

Refuses to run if the target does not end as expected, so a half-written
file is never silently appended to.
"""
import io, os, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

SCRATCH = os.path.dirname(os.path.abspath(__file__))
target = sys.argv[1]
frags = sys.argv[2:]
if not frags:
    sys.exit('no fragments given')

src = open(target, encoding='utf-8').read()
body = src.rstrip()
if not body.endswith(']);'):
    sys.exit('%s does not end with "]);" — refusing to append' % target)
body = body[:-3].rstrip()
if not body.endswith('}'):
    sys.exit('%s does not end with a node object — refusing to append' % target)

added = 0
for f in frags:
    path = f if os.path.isabs(f) else os.path.join(SCRATCH, f)
    node = open(path, encoding='utf-8').read().strip()
    if node.endswith(','):
        node = node[:-1].rstrip()
    body += ',\n\n' + node
    added += node.count('\n  id: ') + (1 if node.startswith('{\n  id: ') else 0)

open(target, 'w', encoding='utf-8').write(body + '\n\n]);\n')
print('appended %d fragment(s) to %s' % (len(frags), target))
