# -*- coding: utf-8 -*-
"""内容审查 —— 把 Ruojin 提过的每一条要求跑成一个检查。

为什么要这个：审查需要看内容，但**不需要把整个卡文件读进对话**。
一张卡 30–94 KB，读一次 12000–36000 tokens；这个脚本把全部卡跑一遍，
只输出需要人判断的那几行，两千 tokens 上下。

跑法：
    python tools/review.py           # 全部卡
    python tools/review.py 18 19     # 只看这两张
"""
import io, os, re, glob, sys, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(D, 'app', 'data')

STOP = set("""a an the of and or to in on for with by is are was were be been being
that this these those which what how why when where who whom whose it its as at from
into onto up down out off over under again further then once here there all any both
each few more most other some such no nor not only own same so than too very can will
just should now do does did doing have has had having i you he she they we them his her
their our your my me him us describe explain name list give tell about between among""".split())

def words(q):
    return [w for w in re.findall(r"[A-Za-z][A-Za-z'’-]+", q.lower()) if w not in STOP and len(w) > 2]

def strip(x):
    return re.sub(r'<[^>]+>', '', x or '')

def load(path):
    s = io.open(path, encoding='utf-8').read()
    g = lambda rx, d='': (re.search(rx, s, re.S).group(1) if re.search(rx, s, re.S) else d)
    card = dict(
        raw=s, kb=len(s.encode()) / 1024,
        id=g(r"id:'([^']*)'"), q=g(r"\nq:'(.*?)',\n"), n=g(r"\bn:(\d+),", ''),
        cross=("cross:1" in s),
    )
    # 开口：cram 第一组（到第二个 {g: 为止）＋ 段 1
    cram = g(r"cram:\[(.*?)\n\],")
    first = cram.split("{g:'", 2)
    card['open_cram'] = strip(first[1]) if len(first) > 1 else strip(cram[:1500])
    seg1 = g(r"segs:\[\s*\{tag:'[^']*', h:'[^']*',\s*\n\s*p:\[(.*?)\],")
    card['open_seg'] = strip(seg1)
    card['cram_pts'] = len(re.findall(r"\{n:'\d+', t:", cram))
    card['has_seg'] = 'segs:[' in s
    card['has_why'] = 'why:{' in s
    card['has_stop'] = 'stop:{' in s
    card['has_recog'] = 'recog:[' in s
    card['has_ask'] = 'ask:[' in s
    card['has_ledger'] = ('投入' in s and '产出' in s and ('总结' in s or '净账' in s))
    # recog 第一行
    r1 = g(r"recog:\[\s*\n?\{q:'([^']*)'")
    card['recog1'] = r1
    rblock = g(r"recog:\[(.*?)\n\],")
    # 便装题（odd:1）按设计就是短句，不算这道题的问法，比最短时排除
    rq = [q for q, body in re.findall(r"(?ms)^\{q:'([^']*)'(.*?)(?=^\{q:'|\Z)", rblock) if 'odd:1' not in body]
    card['recog_qs'] = rq
    # 追问是否两层（en ＋ cn）
    ask = g(r"ask:\[(.*?)\n\]\n\}\);")
    items = re.findall(r"\{r:'[^']*',\s*q:'[^']*',\s*\n\s*en:'.*?'(.*?)(?=\},\s*\n?\{r:'|\}\s*\n?\]\})", ask, re.S)
    card['ask_n'] = len(re.findall(r"\{r:'", ask))
    card['ask_no_cn'] = sum(1 for it in items if "cn:'" not in it)
    # 英文句长
    ens = re.findall(r"\ben:'(.*?)'(?=,\s*\n)", s, re.S)
    lens = [len(strip(e).split()) for e in ens] or [0]
    card['en_n'] = len(ens); card['en_avg'] = sum(lens) / len(lens); card['en_max'] = max(lens)
    # 图
    card['figs'] = re.findall(r"\{k:'([^']*)'", s)
    return card

def review(card):
    out = []
    q, ocr, osg = card['q'], card['open_cram'], card['open_seg']
    opening = (ocr + ' ' + osg).lower()

    # 1 · 题干实词是否都在开口段出现并被界定
    if not card['cross']:
        miss = [w for w in words(q) if w[:6] not in opening and w.rstrip('s')[:6] not in opening]
        if miss:
            out.append(('高', '题干实词没出现在开口段：**%s**' % '、'.join(miss)))

    # 2 · 结构完整性
    if not card['has_seg']:  out.append(('高', '没有四段逐字稿'))
    if not card['has_why']:  out.append(('中', '没有 why 三层'))
    if not card['has_stop']: out.append(('高', '没有停止句'))
    if not card['has_recog']:out.append(('高', '没有「同一个答案，不同问法」'))
    if not card['has_ask']:  out.append(('中', '没有追问'))

    # 3 · recog 第一行必须是最短问法（便装题除外）
    if card['recog_qs']:
        shortest = min(card['recog_qs'], key=len)
        if card['recog1'] != shortest:
            out.append(('中', 'recog 第一行不是最短问法（最短的是「%s」）' % shortest[:52]))

    # 4 · 追问两层
    if card['ask_no_cn']:
        out.append(('中', '%d 条追问只有英文没有中文第二层' % card['ask_no_cn']))

    # 5 · 代谢卡要有账
    META = ('cycle', 'glycol', 'metabol', 'phosphoryl', 'photosynth', 'oxidation', 'respirat')
    if any(k in q.lower() for k in META) and not card['has_ledger']:
        out.append(('高', '代谢题但没有「投入 / 产出 / 总结」三行账'))

    # 6 · 图只收「画」「认」
    bad = [k for k in card['figs'] if k not in ('画', '认')]
    if bad: out.append(('中', '图的类型不是「画」或「认」：%s' % bad))

    # 7 · 体量
    if card['kb'] > 45:      out.append(('中', '文件 %.0f KB，偏大（编辑贵，也超过一张卡该有的量）' % card['kb']))
    if card['cram_pts'] > 20:out.append(('中', '必背点 %d 个，超过 20' % card['cram_pts']))
    if card['en_avg'] > 45:  out.append(('低', '英文句平均 %.0f 词（目标 25–40）' % card['en_avg']))

    return out

want = set(sys.argv[1:])
files = sorted(glob.glob(os.path.join(DATA, '*.js')))
reg = set(re.findall(r'data/([a-z0-9_]+\.js)',
                     io.open(os.path.join(D, 'app', 'index.html'), encoding='utf-8').read()))

tot = 0
print('=' * 78)
print('内容审查 —— 每条对应 Ruojin 提过的一个要求')
print('=' * 78)
for f in files:
    b = os.path.basename(f)
    if b.startswith('_'): continue
    if want and not any(w in b for w in want): continue
    c = load(f)
    issues = review(c)
    mark = '' if b in reg else '   ⚠ 没在 index.html 里注册'
    head = '%-10s %-4s %-52s %.0f KB%s' % (b, ('#' + c['n']) if c['n'] else '横向',
                                           c['q'][:52], c['kb'], mark)
    if not issues and b in reg:
        print('✓ ' + head)
        continue
    print()
    print('● ' + head)
    for lv, msg in issues:
        print('    [%s] %s' % (lv, msg))
        tot += 1
    if b not in reg: tot += 1

print()
print('=' * 78)
print('%d 个问题。高 = 违反明确定过的规矩；中 = 结构缺件；低 = 风格。' % tot)
print('改的时候写 python 补丁脚本，不要把卡 Read 进对话——一张卡 12000–36000 tokens。')
