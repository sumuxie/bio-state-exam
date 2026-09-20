# -*- coding: utf-8 -*-
"""冷启动审查：某一格开口就用了一个几格之前才立起来的词，中间又一次都没再出现。

起因：2026-09-20 Ruojin 在卡 06 上说——

    「我没搞懂怎么突然就开始聊半缩醛的 OH 换成 OR → 缩醛 = 糖苷……
     前面还在聊 mutarotation，哪里都没聊到半缩醛突然就开始说糖苷键了」

查下来卡上其实有那一格：速背 06 就是「成环 · 半缩醛」。断的是**中间那根线**——
06 立起 hemiacetal，07 画 Haworth、08 果糖、09 变旋，三格里一次都没再提它，
到了 10 又直接拿它开口。**她背的时候那根线已经断了。**

所以这个脚本查的是一个很具体的形状：

    一个词 T 在第 Q 格被加粗立起来（<b>T</b>），
    到第 P 格又出现在**开口第一句**里，
    而 P − Q ≥ GAP，且 Q 与 P 之间的每一格都没有提过 T。

判据故意窄：**必须是开口第一句**（她一格一格背，开口那句最吃力），
**必须中间完全断掉**（中间提过一次就不算断），**必须够远**（隔一格不算）。
宽一点就全是噪声——像 DNA、glucose 这种词到处都是，报出来没有意义。

跑法：
    python tools/coldstart.py           # 全部卡
    python tools/coldstart.py 06 gly    # 只看这两张
    python tools/coldstart.py --gap 2   # 放宽到隔两格
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

GAP = 3                      # 隔几格才算「断了」

# 到处都是的词，立不起来，报了也没用
STOP = set('''dna rna mrna trna rrna atp adp amp gtp nadh nadph fad ph pka pi km kd
glucose water carbon oxygen nitrogen hydrogen protein enzyme cell membrane gene
acid base sugar bond energy reaction group chain ring form structure'''.split())

# 这些词本身立不起来，谁先说谁后说都无所谓
VAGUE = set(('both types different group one carbon two carbons same carbon '
             'support recognition storage structural free other '
             'first second third').split()) | set(
            ['one carbon', 'different group', 'two or more', 'same carbon'])


def blocks(src):
    """把 cram 里的格子按顺序切出来：[(n, t, 整格原文), ...]"""
    i = src.find('cram:[')
    if i < 0:
        return []
    j = len(src)
    for k in ("\nend:", "\nsib:", "\nsegs:"):
        m = src.find(k, i)
        if m > -1:
            j = min(j, m)
    body = src[i:j]
    out, parts = [], re.split(r"\n\s*\{n:'", body)
    for p in parts[1:]:
        n = p[:p.find("'")]
        t = ''
        mt = re.search(r"t:'((?:[^'\\]|\\.)*)'", p)
        if mt:
            t = mt.group(1)
        out.append((n, t, p))
    return out


def field(blk, name):
    m = re.search(name + r":'((?:[^'\\]|\\.)*)'", blk)
    return m.group(1) if m else ''


def plain(s):
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s)


def first_sentence(en):
    """开口第一句。en 是 “ … ” 包着的，先剥引号。"""
    s = plain(en).strip().lstrip('“').strip()
    m = re.search(r'[.!?](\s|$)', s)
    return s[:m.start() + 1] if m else s


def terms_of(blk):
    """这一格里被加粗立起来的词。只取 en 和 big——note 是给她看的，不是说的。"""
    out = set()
    for f in ('en', 'big'):
        for b in re.findall(r'<b>(.*?)</b>', field(blk, f), re.S):
            w = plain(b).strip(' ,.;:·—-()（）').strip()
            if not w or len(w) < 4:
                continue
            if len(w.split()) > 3:
                continue
            if not re.search(r'[A-Za-z]', w):          # 纯中文的先不查
                continue
            if w.lower() in STOP:
                continue
            out.add(w)
    return out


def uses(blk, term):
    """这一格有没有提过这个词（整格，包括 note）。"""
    return term.lower() in plain(blk).lower()


def rebolds(blk, term):
    """这一格自己有没有把这个词交代一遍。两种算数：

    ① 它以加粗出现过——**整段加粗短语里包含它就算**（卡上的约定：加粗＝这里立这个词）。
       卡 17 第 10 格开口 "Specificity has two sides."，下一句就是
       "<b>Substrate specificity</b> means…"，词在更长的加粗短语里立住了。
    ② 这一格用 is / are / means 当场给了定义。
       卡 16 第 04 格自己就写着 "Five-prime and three-prime are the two sugar carbons…"。
    """
    tl = term.lower()
    for f in ('en', 'big'):
        for b in re.findall(r'<b>(.*?)</b>', field(blk, f), re.S):
            if tl in plain(b).lower():
                return True
    say = plain(field(blk, 'en')).lower()
    if re.search(re.escape(tl) + r'\w*\s+(is|are|means)\b', say):
        return True
    return False


def early_uses(bl, intro):
    """第二类：一个词在第 Q 格才被立起来，可第 P 格（P < Q）已经拿它说话了。

    这一类是 2026-09-20 真正咬到她的那一类，而上面那个检查抓不到：
    卡 06 第 01 格开口就说 "monosaccharides joined by glycosidic bonds"，
    而这个词要到第 10 格才有定义，hemiacetal 更要到第 06 格才第一次出现。
    ——「她听到这个词的时候，后面什么都没有。」
    只看 en 和 big（她真正说出口的两栏），note 里提前用一下不算。
    """
    out = []
    for w_l, (qi, w, qn) in intro.items():
        if w_l in VAGUE:
            continue
        for i in range(qi):
            # 只看她真正开口说的那一句：big 那一行，和 en 的第一句
            said = (plain(field(bl[i][2], 'big')) + ' '
                    + first_sentence(field(bl[i][2], 'en'))).lower()
            if w_l in said:
                if rebolds(bl[i][2], w):   # 那一格自己就交代了，不算裸用
                    break
                out.append((bl[i][0], bl[i][1], w, qn, bl[qi][1], qi - i))
                break
    return out



# 2026-09-20 把 66 处逐条对着卡看过。补了 11 处线，剩下的记在这里。
# 两类：① 被 <b> 包住的加粗片段，本来就不是术语；
#       ② 本格自己已经交代了，只是句式躲过了上面的豁免——例如
#          卡 23 第 10 格 a nonpolar hydrophobic one, the fatty acids（当场解释）、
#          卡 32 第 15 格 The outermost layer is hormonal. A hormone is…（下一句就是定义）、
#          卡 14 第 01 格那三个词（那一格说的就是「这些词书里没有」，是元陈述）。
# 基线是手工核过的，不是自动忽略：这些地方一旦改动，仍然会照报。
CHECKED_ITEMS = [
    # 第 06 格已经当场补了 meaning the shape that stretch of chain settles into，
    # 只是句式不是 X is / means，上面的豁免认不出来
    ('01.js', '06', 'conformation'),
    ('01.js', '10', 'side chains'),
    ('06.js', '14', 'Support'),
    ('06.js', '14', 'recognition'),
    ('08.js', '17', 'irreversible'),
    ('08.js', '03', 'Golgi'),
    ('13.js', '02', 'asparagine'),
    ('14.js', '01', 'bacteriophage'),
    ('14.js', '01', 'transformation'),
    ('14.js', '01', 'transduction'),
    ('16.js', '05', '拆 primer'),
    ('16.js', '10', 'ligase'),
    ('16.js', '07', 'pol I'),
    ('17.js', '09', 'catalysis'),
    ('17.js', '03', '稀溶液、低温、中性 pH'),
    ('18.js', '09', 'substrate'),
    ('23.js', '09', 'types'),
    ('23.js', '10', 'nonpolar'),
    ('23.js', '05', 'carboxyl'),
    ('23.js', '09', 'complex lipids'),
    ('23.js', '09', 'phospholipid'),
    ('23.js', '08', 'Glycerol'),
    ('24.js', '01', 'NAD⁺'),
    ('24.js', '01', 'matrix'),
    ('24.js', '05', 'succinate dehydrogenase'),
    ('24.js', '05', 'inner membrane'),
    ('25.js', '06', 'pump'),
    ('25.js', '04', 'with'),
    ('25.js', '08', 'Ubiquinone'),
    ('25.js', '11', 'cytochrome c'),
    ('27.js', '01', 'into'),
    ('27.js', '04', 'NADP-plus'),
    ('27.js', '16', 'Five'),
    ('27.js', '09', 'Three'),
    ('27.js', '03', 'ATP ＋ NADPH'),
    ('28.js', '01', 'rate'),
    ('32.js', '15', 'hormonal'),
    ('aa.js', '13', 'phenol'),
    ('aa.js', '16', 'different group'),
    ('aa.js', '06', 'asymmetric carbon'),
    ('aa.js', '02', 'genetic code'),
    ('gly.js', '01', '2 ATP'),
    ('taq.js', '05', 'Read'),
    ('x_rxn.js', '06', 'trans'),
]
CHECKED = set((a, b, c.lower()) for a, b, c in CHECKED_ITEMS)

want = [a for a in sys.argv[1:] if not a.startswith('--')]
if '--gap' in sys.argv:
    GAP = int(sys.argv[sys.argv.index('--gap') + 1])

print('=' * 74)
print('冷启动审查 · 开口第一句用了一个 %d 格以前立的词，中间一次都没再提' % GAP)
print('=' * 74)

total, files, skipped = 0, 0, [0]
SHOWALL = '--all' in sys.argv    # 连已核过的一起列出来
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    b = os.path.basename(f)
    if b.startswith('_'):
        continue
    if want and not any(w in b for w in want):
        continue
    bl = blocks(io.open(f, encoding='utf-8').read())
    if not bl:
        continue
    files += 1
    intro = {}                                   # 词 → 第一次被加粗立起来的格号
    for i, (n, t, p) in enumerate(bl):
        for w in terms_of(p):
            intro.setdefault(w.lower(), (i, w, n))
    hits = []
    for i, (n, t, p) in enumerate(bl):
        head = first_sentence(field(p, 'en')).lower()
        if not head:
            continue
        for w_l, (qi, w, qn) in intro.items():
            if qi >= i or i - qi < GAP:
                continue
            if w_l not in head:
                continue
            if any(uses(bl[k][2], w) for k in range(qi + 1, i)):
                continue
            if rebolds(p, w):        # 本格自己又立了一遍，不算赖账
                continue
            hits.append((n, t, w, qn, bl[qi][1], i - qi))
    early = early_uses(bl, intro)
    if not SHOWALL:
        hits = [h for h in hits if (b, h[0], h[2].lower()) not in CHECKED]
        early = [h for h in early if (b, h[0], h[2].lower()) not in CHECKED]
        skipped[0] += 1
    if hits or early:
        print('\n%s' % b)
        for n, t, w, qn, qt, gap in hits:
            print('  [%s %s] 开口就用 <%s>' % (n, t, w))
            print('      它是第 %s 格「%s」立的，中间隔 %d 格没再提过' % (qn, qt, gap))
        for n, t, w, qn, qt, gap in early:
            print('  [%s %s] \u26a0 \u8bf4\u51fa\u53e3\u7528\u4e86 <%s>\uff0c\u53ef\u5b83\u8981\u5230\u7b2c %s \u683c\u300c%s\u300d\u624d\u7acb\u8d77\u6765' % (n, t, w, qn, qt))
            print('      \u65e9\u4e86 %d \u683c\u2014\u2014\u542c\u5230\u8fd9\u4e2a\u8bcd\u7684\u65f6\u5019\uff0c\u540e\u9762\u4ec0\u4e48\u90fd\u6ca1\u6709' % gap)
        total += len(hits) + len(early)

print()
print('查了 %d 张卡，%d 处冷启动。' % (files, total))
if not SHOWALL:
    print('另有 %d 条 2026-09-20 逐条核过、判为不是问题的（加粗片段，或本格自己已经交代了）。--all 看全部。' % len(CHECKED))
if total:
    print('修法不是删，是在开口那句前面补一根线——一句话说清它是哪一格来的。')
