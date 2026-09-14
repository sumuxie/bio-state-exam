# -*- coding: utf-8 -*-
"""全局审查：现在到底有多少要背的，有多少「听懂问题」的训练，覆盖了哪些题。"""
import io, os, re, glob, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(ROOT, 'app', 'data')

def count(path):
    s = io.open(path, encoding='utf-8').read()
    def n(rx):
        return len(re.findall(rx, s))
    # cram 里的点（有 n: 的是点，有 g: 的是组标题）
    cram_pts = n(r"\{n:'\d+', t:")
    cram_grp = n(r"\{g:'[^']+', gn:")
    # 兄弟页
    sib = 0
    m = re.search(r"sib:\[(.*?)\n\],", s, re.S)
    if m: sib = len(re.findall(r"^\['", m.group(1), re.M))
    # 逐字稿段
    segs = n(r"\{tag:'段")
    # why 三层
    rungs = 0
    m = re.search(r"rungs:\[(.*?)\n \],", s, re.S)
    if m: rungs = len(re.findall(r"\['", m.group(1)))
    # 识别表
    recog = 0; odd = 0
    m = re.search(r"recog:\[(.*?)\n\],", s, re.S)
    if m:
        recog = len(re.findall(r"^\{q:'", m.group(1), re.M))
        odd = len(re.findall(r"odd:1", m.group(1)))
    # 追问
    ask = n(r"\{r:'(?:实测|高|中)'")
    real = n(r"\{r:'实测'")
    figs = n(r"\{k:'(?:画|认)'")
    # 英文句子总数（要出声说的）
    en = n(r"\ben:'") + n(r"\bsay:'")
    # 题号
    mm = re.search(r"\bn:(\d+),", s)
    qid = mm.group(1) if mm else '横向'
    mq = re.search(r"\bq:'([^']+)'", s)
    return dict(qid=qid, q=(mq.group(1) if mq else ''), cram=cram_pts, grp=cram_grp,
                sib=sib, segs=segs, rungs=rungs, recog=recog, odd=odd,
                ask=ask, real=real, figs=figs, en=en, kb=len(s.encode())/1024)

rows = []
for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
    b = os.path.basename(f)
    if b.startswith('_'): continue
    r = count(f); r['file'] = b
    rows.append(r)

print('=' * 72)
print('一 · 现在有多少「要背的」')
print('=' * 72)
print('%-13s %5s %5s %5s %5s %6s %5s %5s' % ('卡', '必背点', '兄弟点', '逐字段', 'why层', '英文句', '问法', '追问'))
tot = dict(cram=0, sib=0, segs=0, rungs=0, en=0, recog=0, odd=0, ask=0, real=0, figs=0)
for r in rows:
    print('%-13s %5d %5d %5d %5d %6d %5d %5d'
          % (r['file'].replace('.js',''), r['cram'], r['sib'], r['segs'], r['rungs'],
             r['en'], r['recog'], r['ask']))
    for k in tot: tot[k] += r[k]
print('-' * 72)
print('%-13s %5d %5d %5d %5d %6d %5d %5d'
      % ('合计', tot['cram'], tot['sib'], tot['segs'], tot['rungs'],
         tot['en'], tot['recog'], tot['ask']))
print()
print('  必背点 %d 个 —— 这是「要背的」的全部，其余都是查阅和挡追问的。' % tot['cram'])
print('  英文句 %d 句 —— 出声练的对象。按每句 12 秒算，全部说一遍约 %d 分钟。'
      % (tot['en'], round(tot['en'] * 12 / 60)))
print('  逐字稿 %d 段，每张卡 4 段，主干说完约 90 秒/张。' % tot['segs'])

print()
print('=' * 72)
print('二 · 有多少「听懂问题」的训练（这是第二个恐惧的解药）')
print('=' * 72)
print('  同一答案的不同问法   %3d 条' % tot['recog'])
print('    其中「便装问题」   %3d 条（听起来不像生化题的）' % tot['odd'])
print('  追问条目             %3d 条' % tot['ask'])
print('    其中标「实测」     %3d 条（真考过或同一考试传统里出现过）' % tot['real'])
print('  可能让你画/认的图     %3d 张' % tot['figs'])
print()
print('  → 平均每张卡有 %.1f 种问法 + %.1f 条追问。' % (tot['recog']/len(rows), tot['ask']/len(rows)))
print('    「背了但听不懂他在问什么」这件事，就是靠这 %d 条问法挡的。' % (tot['recog'] + tot['ask']))

print()
print('=' * 72)
print('三 · 覆盖了哪些题')
print('=' * 72)
raw = io.open(os.path.join(DATA, '_index.js'), encoding='utf-8').read()
QI = json.loads(raw[raw.index('=', raw.index('window.QINDEX')) + 1:raw.rindex(';')])
done = {r['qid'] for r in rows if r['qid'] != '横向'}
cov = [q for q in QI if str(q['n']) in done]
rest = [q for q in QI if str(q['n']) not in done]
covered_merged = sum(1 + len(q['merged']) for q in cov)
print('  题库 32 题 → 合并后 30 题')
print('  已有卡 %d 题（含合并进来的，等于覆盖原始 %d 题）' % (len(cov), covered_merged))
print('  横向卡 %d 张（不对应具体题目，但跨很多题共用）'
      % len([r for r in rows if r['qid'] == '横向']))
print()
print('  已覆盖：')
for q in sorted(cov, key=lambda x: x['n']):
    mg = ' ＋#' + '、#'.join(map(str, q['merged'])) if q['merged'] else ''
    print('    #%-2d%-8s bw%-4d %s' % (q['n'], mg, q['bw'], q['en'][:52]))
print()
print('  未覆盖 %d 题，按「她说没学过 > 他写过两遍 > 书本投入度」排：' % len(rest))
def key(q):
    g = 2 if q['gap'] == 'gap!' else (1 if q['gap'] == 'gap' else 0)
    return (-g, -q['rep'], -q['bw'])
for q in sorted(rest, key=key)[:12]:
    flag = []
    if q['gap'].startswith('gap'): flag.append('没学过')
    if q['rep'] == 2: flag.append('写过两遍')
    if q['bw'] == 0: flag.append('书里没有')
    print('    #%-2d bw%-4d %-46s %s' % (q['n'], q['bw'], q['en'][:46], '·'.join(flag)))

print()
print('=' * 72)
print('四 · 书的覆盖')
print('=' * 72)
PAGES = {'01':(26,35), '02':(54,62), '03':(66,75), '13':(108,115), '24':(134,141)}
seen = set()
for k, (a, b) in PAGES.items():
    seen |= set(range(a, b + 1))
print('  已经挖过的书页：%d 页 / 全书 229 页（%.0f%%）' % (len(seen), len(seen)/229*100))
print('  但这 %d 页是**挑过的**——它们是 30 道题真正落在的地方，不是随便 %d 页。'
      % (len(seen), len(seen)))
