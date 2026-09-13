# -*- coding: utf-8 -*-
"""书里哪些区域没有任何一道题落在上面 —— 那是追问可能走进去、而我们没准备的地方。"""
import io, os, re, glob, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
BD = os.path.join(ROOT, 'book', 'pages')

# 30 道题各自落在的书页（tools/topic_weight.py 里的同一份映射）
TOPIC = {
 1:(21,26), 2:(164,170), 3:(66,75), 4:(54,62), 6:(148,152),
 8:(110,112), 9:(110,112), 11:(26,35), 12:(102,107), 13:(108,115),
 15:(66,91), 16:(76,85), 17:(39,42), 18:(42,53), 19:(59,62),
 20:(54,58), 21:(54,57), 22:(148,160), 23:(176,197), 24:(136,141),
 25:(141,146), 26:(141,146), 27:(202,212), 28:(212,215), 29:(26,38),
 31:(43,53), 32:(218,224),
}
covered = set()
for a, b in TOPIC.values():
    covered |= set(range(a, b + 1))

BODY = set(range(8, 230))          # p008 起是正文，p003–p007 是目录和前言
un = sorted(BODY - covered)

# 把连续页合成区段
segs, cur = [], [un[0], un[0]]
for n in un[1:]:
    if n == cur[1] + 1: cur[1] = n
    else: segs.append(tuple(cur)); cur = [n, n]
segs.append(tuple(cur))

# 每段里的小节标题
CAP = 'A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ'
HEAD = re.compile(r'^\s*\|?\s*(\d{1,2}(?:\.\d{1,2}){1,2})\s+([%s][^\n]{3,60})$' % CAP, re.M)
pages = {}
for f in sorted(glob.glob(os.path.join(BD, 'p*.txt'))):
    n = int(re.search(r'p(\d+)', f).group(1))
    pages[n] = io.open(f, encoding='utf-8').read()

print('正文 %d 页 · 有题落在的 %d 页（%.0f%%）· 没有任何题的 %d 页（%.0f%%）'
      % (len(BODY), len(BODY & covered), len(BODY & covered)/len(BODY)*100,
         len(un), len(un)/len(BODY)*100))
print()
print('%-12s %4s  %s' % ('区段', '页数', '这一段里的小节'))
print('-' * 78)
big = []
for a, b in segs:
    hs = []
    for n in range(a, b + 1):
        for m in HEAD.finditer(pages.get(n, '')):
            t = re.sub(r'\s*[|:;,.]+\s*$', '', m.group(2)).strip()
            if not re.match(r'^(Obr|Tab)\b', t):
                hs.append('%s %s' % (m.group(1), t[:34]))
    n_pg = b - a + 1
    if n_pg >= 3:
        big.append((n_pg, a, b, hs))
    print('p%03d–p%03d %4d  %s' % (a, b, n_pg, ' · '.join(hs[:3]) if hs else '—'))

print()
print('=' * 78)
print('值得注意的大段（≥ 3 页，且有小节标题）')
print('=' * 78)
for n_pg, a, b, hs in sorted(big, reverse=True):
    if not hs: continue
    print()
    print('p%03d–p%03d（%d 页）' % (a, b, n_pg))
    for h in hs:
        print('    %s' % h)
