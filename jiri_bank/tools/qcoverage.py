# -*- coding: utf-8 -*-
"""How many of Jiri's sheet questions have a written answer?

Counts QUESTION ENTRIES in data/q_*.js and data/questions.js, not nodes.
`tools/coverage.py`-style node counting answers a different question — which
topics have a full study node — and will always read lower.

Usage:  python tools/qcoverage.py
"""
import io
import re
import sys
import pathlib

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BANK = pathlib.Path(__file__).resolve().parent.parent
TRAE = pathlib.Path('C:/Users/Admin/Documents/trae_projects/recombinants_trae_independant')

sys.path.insert(0, str(TRAE / 'state_exam'))
import questions_data as Q

sheets = []
for name in dir(Q):
    v = getattr(Q, name)
    if isinstance(v, dict) and 'sections' in v and 'id' in v:
        sheets.append(v)
sheets.sort(key=lambda s: s['id'])

# Sheet 2 numbers its questions CONTINUOUSLY across sections on the printed
# page -- Lab 1-10, Micro 11-20, Biochem 21-30, as its own `note` field says --
# while the data structure restarts at 1 in every section. Entries cite the
# number Ruojin can actually see on the paper, so the offset is applied here.
# Getting this wrong reported 20 correctly-referenced questions as missing.
CONTINUOUS = {'S2'}

questions = {}
for sh in sheets:
    offset = 0
    for sec_name, items in sh['sections']:
        for n, item in enumerate(items, 1):
            stem = item[0] if isinstance(item, (list, tuple)) else item
            questions[(sh['id'], sec_name, n + offset)] = stem
        if sh['id'] in CONTINUOUS:
            offset += len(items)

# ---- what the entries claim, from their `sheets:` field --------------------
CN = {'卷一': 'S1', '卷二': 'S2', '卷三': 'S3'}
SEC = {'Lab': 'Basic Lab Techniques', 'Micro': 'Microbiology', 'Bio': 'Biochemistry'}

claimed = {}
entries = 0
for f in sorted((BANK / 'data').glob('q*.js')):
    src = f.read_text(encoding='utf-8')
    for m in re.finditer(r"id:\s*'([^']+)',\s*\n\s*sheets:\s*'([^']+)'", src):
        entries += 1
        qid, refs = m.group(1), m.group(2)
        for cn, code in CN.items():
            refs = refs.replace(cn, code)
        for mm in re.finditer(r'(S[123])\s*(Lab|Micro|Bio)\s*([\d\s/]+)', refs):
            sheet, sec, nums = mm.group(1), SEC[mm.group(2)], mm.group(3)
            for num in re.findall(r'\d+', nums):
                key = (sheet, sec, int(num))
                if key in questions:
                    claimed.setdefault(key, qid)

by = {}
for (sh, sec, n), stem in sorted(questions.items()):
    by.setdefault((sh, sec), []).append((n, stem, claimed.get((sh, sec, n))))

total = 0
print('%d question entries written\n' % entries)
for (sh, sec), items in sorted(by.items()):
    cov = sum(1 for _, _, c in items if c)
    total += cov
    print('%s %-22s %2d/%2d' % (sh, sec, cov, len(items)))
    for n, stem, c in items:
        if not c:
            print('      MISSING %2d. %s' % (n, stem[:74]))

print('')
print('=' * 58)
print('ANSWERED: %d of %d  (%.0f%%)' % (total, len(questions), 100.0 * total / len(questions)))
print('MISSING:  %d' % (len(questions) - total))
