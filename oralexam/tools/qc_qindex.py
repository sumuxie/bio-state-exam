# -*- coding: utf-8 -*-
"""QC pass over jiri_bank/_qindex.json — the source everything downstream depends on."""
import json, io, sys, re, collections, difflib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

P = r'C:\Users\Admin\Downloads\bio-state-exam\jiri_bank\_qindex.json'
d = json.load(io.open(P, encoding='utf-8'))

def hdr(t): print('\n' + '=' * 4, t)

hdr('1 · 权重到底是什么意思')
ok = bad = 0
for x in d:
    sheets = {r.split()[0] for r in x['refs']}
    exp = 3 if 'S1' in sheets else (2 if 'S2' in sheets else 1)
    if exp == x['weight']: ok += 1
    else:
        bad += 1
        print('   不符  w%d  %s  %s' % (x['weight'], sorted(sheets), x['en'][:52]))
print('   规则「S1→3, 否则 S2→2, 否则 1」符合 %d / %d 条' % (ok, len(d)))
print('   → 所以 w3 的意思是**出现在第一张卷子上**，不是「三张卷子都出现」')

hdr('2 · 卷面题数 vs 索引条数')
refs = [r for x in d for r in x['refs']]
per = collections.Counter(r.split()[0] for r in refs)
print('   三张卷子原始题数:', dict(per), '合计', len(refs))
print('   索引条数:', len(d), ' → 合并了', len(refs) - len(d), '条')
print('   ⚠ SCOPE.md 写的是「98 道题去重成 84」，与此不符')

hdr('3 · 卷内编号有没有缺号或重号')
for s in ('S1', 'S2', 'S3'):
    bysec = collections.defaultdict(list)
    for r in refs:
        m = re.match(r'^(%s) (.+) (\d+)$' % s, r)
        if m: bysec[m.group(2)].append(int(m.group(3)))
    for sec, nums in sorted(bysec.items()):
        nums.sort()
        miss = [i for i in range(1, max(nums) + 1) if i not in nums]
        dup = [i for i, c in collections.Counter(nums).items() if c > 1]
        flag = ''
        if miss: flag += '  缺号 ' + str(miss)
        if dup: flag += '  重号 ' + str(dup)
        print('   %-3s %-22s 1–%-3d 共 %2d%s' % (s, sec, max(nums), len(nums), flag))

hdr('4 · 有没有该合并却没合并的（题面高度相似）')
n = 0
for i in range(len(d)):
    for j in range(i + 1, len(d)):
        a, b = d[i]['en'].lower().rstrip('.?'), d[j]['en'].lower().rstrip('.?')
        r = difflib.SequenceMatcher(None, a, b).ratio()
        if r > 0.72:
            n += 1
            same = '同节' if d[i]['section'] == d[j]['section'] else '**跨节**'
            print('   %.2f %s' % (r, same))
            print('        #%-2d w%d %s' % (i + 1, d[i]['weight'], d[i]['en'][:74]))
            print('        #%-2d w%d %s' % (j + 1, d[j]['weight'], d[j]['en'][:74]))
if not n: print('   没有')

hdr('5 · 分节有没有明显放错')
KEY = {
 'Biochemistry': r'enzyme|protein|amino|glycol|lipid|carbohydr|DNA|RNA|nucleic|metabol|photosynth|citric|vitamin|kinetic|Michaelis|dissociation|glucose|operon|translation|replicat|polymerase|peptide',
 'Microbiology': r'bacteri|microb|Gram|strain|E\. ?coli|virus|viral|phage|antibiot|sterili|culture|colon|yeast|fung',
 'Basic Lab Techniques': r'how do you|pipett|centrifug|concentration of|spectroph|electrophor|chromatograph|safety|calibrat|buffer|prepare|measure|dilut',
}
for i, x in enumerate(d, 1):
    hits = [s for s, rx in KEY.items() if re.search(rx, x['en'], re.I)]
    if hits and x['section'] not in hits:
        print('   标为 %-20s 但像 %-20s | %s' % (x['section'], '/'.join(hits), x['en'][:58]))

hdr('6 · 题面有没有转录残缺')
for i, x in enumerate(d, 1):
    e = x['en']
    prob = []
    if len(e) < 18: prob.append('太短')
    if not re.search(r'[.?]$', e.strip()): prob.append('无句末标点')
    if re.search(r'\s{2,}', e): prob.append('多空格')
    if re.search(r'[^\x00-\x7F\u2018\u2019\u201c\u201d\u2013\u2014]', e): prob.append('非 ASCII')
    if not x.get('cn'): prob.append('缺中文')
    if prob:
        print('   %-22s | %s' % (','.join(prob), e[:64]))

hdr('7 · Biochemistry 的 32 题，w 与卷子来源')
for i, x in enumerate([y for y in d if y['section'] == 'Biochemistry'], 1):
    print('   #%-2d w%d  %-26s %s' % (i, x['weight'], ','.join(x['refs']), x['en'][:52]))
