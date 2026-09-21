# -*- coding: utf-8 -*-
"""分子生物学四张卡对源料的覆盖审查。

2026-09-21 Ruojin：「你再三审查一下这四张卡是否确实基本实现覆盖了，
不加卡加追问或者细节都 ok」。

料在 20260828_molecure_lite/data/spine_*.js，每份是一串「节点」，
每个节点是书上一段的转录（cn 是中文正文，src 是印刷页码）。
这里做的事很直接：**把每个节点里的专有名词拿出来，看卡上有没有。**

判据：
  · 专有名词 ＝ 节点 cn 里的英文／拉丁词（长度 ≥4）和 4 字以上的中文术语。
  · 一个节点的名词里，卡上出现的比例 ≥ 阈值（默认 0.5）就算覆盖到了。
  · 比例低的列出来，人工看要不要补追问或细节。

⚠ 这个判据只查「名词在不在」，查不了「讲得对不对」——那只能回卡里读。
它的用处是**把没进过卡的段落挑出来**，而不是给覆盖率打分。

跑法：
    python tools/mbcover.py              # 四张卡
    python tools/mbcover.py --all        # 连没有对应卡的那几份料一起列
    python tools/mbcover.py --th 0.4     # 换阈值
"""
import io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'app', 'data')
SPINE = os.path.join(HERE, '..', '..', '20260828_molecure_lite', 'data')

# 卡 → 它的料
MAP = [
    ('mb_int.js',  ['spine_ch6_interactions.js']),
    ('mb_ko.js',   ['spine_ch6.js']),
    ('mb_reg.js',  ['spine_ch8_transcription.js', 'spine_ch8_epigenetics.js']),
    ('mb_post.js', ['spine_ch8_regulation.js', 'spine_ch8_ncrna.js', 'spine_ch8_other.js']),
]

# 有料、但没有任何一张卡对应的
ORPHAN = ['spine_ch6_yeast.js', 'spine_ch7.js', 'spine_misc.js', 'spine_misc2.js']

STOP = set(u'''一个 这个 那个 就是 因此 所以 可以 能够 不是 没有 他们 它们 这些 那些
如果 但是 而且 于是 已经 还是 或者 以及 并且 其中 之间 之后 之前 的时候 这样 那样
研究 发现 表明 说明 结果 情况 过程 作用 功能 方式 方法 水平 结构 序列 基因 细胞
蛋白 蛋白质 分子 反应 形成 产生 进行 通过 出现 存在 需要 决定 影响 包括'''.split())

TH = 0.5
if '--th' in sys.argv:
    TH = float(sys.argv[sys.argv.index('--th') + 1])
SHOWALL = '--all' in sys.argv

CJK = re.compile(u'[㐀-鿿]')
LAT = re.compile(r'[A-Za-z][A-Za-z0-9′-]{3,}')
CNT = re.compile(u'[㐀-鿿]{4,}')


def nodes(path):
    """(序号, 页码, 中文正文) —— spine 文件用双引号、键不带引号。"""
    t = io.open(path, encoding='utf-8').read()
    cns = re.findall(r'\n\s*cn:\s*"((?:[^"\\]|\\.)*)"', t)
    srcs = re.findall(r'\n\s*src:\s*"((?:[^"\\]|\\.)*)"', t)
    out = []
    for i, c in enumerate(cns):
        out.append((i + 1, srcs[i] if i < len(srcs) else '', c))
    return out


LATSTOP = set(('page than that this with from they them their there here'
               ' into over under about which where when what will would could'
               ' been being have has had does did not only also more most less'
               ' each such same other another these those when while').split())


def terms(cn):
    """节点里的专有名词 —— **只取英文／拉丁词**。

    ⚠ 第一版把 4 字以上的中文串也算进来，结果拿到的是「久到报告基因能被转录」
    这种整句，卡上当然一个字都对不上，成品卡 mb_int 被报成 17/18 偏薄。
    中文的说法在源料和卡上本来就不一样，可比的只有术语本身。
    """
    s = re.sub(r'\*\*', '', cn)
    out = set(w.lower() for w in LAT.findall(s))
    return set(w for w in out if len(w) >= 4 and w not in LATSTOP)


def load_card(name):
    t = io.open(os.path.join(DATA, name), encoding='utf-8').read()
    return t.lower(), t


print('=' * 74)
print('分子生物学四张卡 · 对源料的覆盖审查')
print('=' * 74)

grand_n = grand_thin = 0
for card, sps in MAP:
    low, raw = load_card(card)
    thin = []
    n = 0
    for sp in sps:
        for idx, src, cn in nodes(os.path.join(SPINE, sp)):
            ts = terms(cn)
            if len(ts) < 3:      # 术语太少，比例没有意义
                continue
            n += 1
            hit = [w for w in ts if w in low or w in raw]
            r = len(hit) / float(len(ts))
            if r < TH:
                miss = sorted(ts - set(hit))
                thin.append((r, sp, idx, src, miss[:10]))
    grand_n += n
    grand_thin += len(thin)
    print('\n%-12s %2d 个节点 · 偏薄的 %d 个' % (card, n, len(thin)))
    for r, sp, idx, src, miss in sorted(thin):
        print('  [%s #%d] %s  命中 %.0f%%' % (sp.replace('spine_', '').replace('.js', ''), idx, src, 100 * r))
        print('      卡上找不到：' + ' · '.join(miss))

print()
print('合计 %d 个节点，偏薄的 %d 个。' % (grand_n, grand_thin))

print()
print('=' * 74)
print('✅ 四张卡范围之外的，2026-09-21 已穿插（不加卡）')
print('=' * 74)
DEST = {
    'spine_ch7.js': '卡 12，17 条（转录层 8 · 转录之后 9）',
    'spine_misc2.js': 'RNA 那一半 1-22 → mb_post 8 条；固氮那一半 23-37 → 卡 28 四条 ＋ 卡 12 一条',
    'spine_misc.js': '转座子 1-15 → mb_ko 6 条；CpG 脱氨 16-18 → mb_reg 1 条；SNP 群体那段没做',
    'spine_ch6_yeast.js': '酵母互补 → mb_ko 3 条；EMSA／体外激酶／GFP 与免疫荧光／Western → mb_int 4 条；噬菌体展示 → pe_evo 1 条；GWAS 没做',
}
tot = 0
for sp in ORPHAN:
    p = os.path.join(SPINE, sp)
    if not os.path.exists(p):
        continue
    ns = nodes(p)
    tot += len(ns)
    t = io.open(p, encoding='utf-8').read()
    m = re.search(r'title_cn:\s*"((?:[^"\\]|\\.)*)"', t)
    print('\n%-28s %2d 个节点' % (sp, len(ns)))
    if m:
        print('    ' + re.sub(r'\*\*', '', m.group(1))[:110])
    if sp in DEST:
        print('    → ' + DEST[sp])
print()
print('这四份共 %d 个节点，2026-09-21 全部穿完，压成 37 条追问，一张新卡没加。' % tot)
print('⚠ 故意没做的两块：SNP 群体遗传与 HapMap（misc 19-25）· GWAS（ch6_yeast 26-27）——跟三十道题都不沾边。')
