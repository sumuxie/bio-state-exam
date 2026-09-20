# -*- coding: utf-8 -*-
"""每个术语有没有被定义过 —— 直接查她那条规矩。

2026-09-21 Ruojin：「我说了啊 任何东西都先定义 你现在这些卡都是没什么定义的」。

她是对的，而且这一天之内她已经逮到三个：Southern blot · 酵母单杂交／SPR 的位置 ·
Pmin。三次都是她读的时候发现的，不是检查发现的。原因很具体——

  · lead.py 查的是「**答案的第一句**是不是定义」。那是顺序，不是有无。
  · nodef.py 查的是「**加粗的词**有没有定义」。而加粗与否是我写卡时的随手决定，
    Southern blot、one-hybrid、surface plasmon resonance、Pmin 在用到的地方
    都没加粗，所以两个检查都报 0。

这一个不看加粗。**术语清单直接取自词库 `_gloss.js`**——那张表本来就是
make_gloss.py 从卡上出现过的词生成的，所以「卡上有哪些词」它最清楚。

判据：一个术语算「被定义过」，要在材料里找得到下面任意一种——
  ① X is / X are / X means / X refers to …        （正面定义）
  ② X, a … / X, the …                             （同位语定义）
  ③ 它出现在某一格的标题里，或某道问题问的就是它
找不到的就报出来：**她要背这个词，而全套材料没有一处告诉她它是什么。**

⚠ 判据是粗的，会有假阳性（复合词、拼写变体）。它的用处是**把没被定义过的词挑出来
让人看一眼**，不是给覆盖率打分。

跑法：
    python tools/defcheck.py              # 全部
    python tools/defcheck.py --min 6      # 只看长度 ≥6 的词（默认 5）
    python tools/defcheck.py mb_int       # 只看某几张卡
"""
import io, json, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'app', 'data')

MINLEN = 5
argv = sys.argv[1:]
if '--min' in argv:
    i = argv.index('--min')
    MINLEN = int(argv[i + 1])
    argv = argv[:i] + argv[i + 2:]
want = [a for a in argv if not a.startswith('--')]

# 普通英语词，不是术语。词库里混着大量这类。
COMMON = set('''about above after again against along among another around because
before behind below between beyond during either enough every except further
happen having however indeed inside instead itself least likely little maybe
merely might mostly namely neither never nothing often other otherwise ought
perhaps rather really since something sometimes still such taken their
themselves there these those through together toward under until upon usually
various very whether which while whole whose within without would yourself
first second third fourth fifth sixth seventh eighth ninth tenth
always rarely simple simply single double triple small large short long wide
narrow thick thin begin begins began start starts started stop stops stopped
make makes made take takes taken give gives given think thinks thought know
knows known thing things part parts kind kinds sort sorts number numbers amount
amounts level levels point points place places time times work works working
used using usable called named termed different similar same equal possible
impossible necessary important useful helpful study studies studied research
result results outcome example examples instance question questions answer
answers problem problems issue method methods approach system systems process
processes change changes changed changing increase increases decrease decreases
higher lower faster slower almost nearly roughly approximately'''.split())


def plain(s):
    s = re.sub(r"'\s*\+\s*'", ' ', s)
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).replace('“', '').replace('”', '')


files = [f for f in sorted(glob.glob(os.path.join(DATA, '*.js')))
         if not os.path.basename(f).startswith('_')]
if want:
    files = [f for f in files if any(w in os.path.basename(f) for w in want)]

parts, allsrc = [], []
for f in files:
    t = io.open(f, encoding='utf-8').read()
    allsrc.append(t)
    for m in re.finditer(r"\b(en|say|ez)\s*:\s*'((?:[^'\\]|\\.)*)'", t):
        parts.append(plain(m.group(2)))
spoken = '\n'.join(parts)
allsrc = '\n'.join(allsrc)

# ── 术语清单：词库里不是「纯通用英汉词典」的那些 ─────────────────────────
src = io.open(os.path.join(DATA, '_gloss.js'), encoding='utf-8').read()
G = json.loads(src[src.index('{'):src.rindex('}') + 1])
# ⚠ 收紧了两次。第一版取「不是通用词典」的全部，报出 1601 个，
# 里面全是 sequenced / screens / transformants 这类词形变化，
# 和 sentence / slide / waste 这类普通英语——那个数字是假的。
# 现在：只取**她自己的生化词库**（s 1/4/5，s3 是词库词+词典中文，混着大量常用词），
# 而且词形要像术语（学术后缀、带连字符或数字、或者够长）。
SUFFIX = ('ase ases ose oses ide ides ate ates ine ines yl yls tion tions'
          ' some somes plasm plasms mer mers meric lysis genesis'
          ' ergic otic osis itis emia phate phates amide amides amine amines').split()


def techy(w):
    if re.search(r'[0-9′-]', w):
        return True
    if any(w.endswith(s) for s in SUFFIX):
        return True
    return len(w) >= 9


terms = sorted(k for k, v in G.items()
               if v.get('s') in (1, 4, 5) and len(k) >= MINLEN and k not in COMMON
               and re.match(r'^[a-z][a-z0-9′-]*$', k) and techy(k))

# ── 把语料扫一遍，收集「被定义过的东西」──────────────────────────────────
WORD = r"[A-Za-z][A-Za-z0-9′-]{2,}"
SUBJ = re.compile('(' + WORD + r'(?:\s+[a-z]' + WORD[1:] + r'){0,3})'
                  r'\s+(?:is|are|was|were|means|denotes|refers)\b', re.I)
APPO = re.compile('(' + WORD + r'),\s+(?:a|an|the)\b')
TITLE = re.compile(r"(?:t|q):'((?:[^'\\]|\\.)*)'")

DEFINED = set()
SPOKEN_WORDS = set()


def grams(text, bag):
    ws = [w for w in re.split(r"[^A-Za-z0-9′-]+", text.lower()) if w]
    for k, w in enumerate(ws):
        bag.add(w)
        if k + 1 < len(ws):
            bag.add(w + ' ' + ws[k + 1])


for m in SUBJ.finditer(spoken):
    grams(m.group(1), DEFINED)
for m in APPO.finditer(spoken):
    grams(m.group(1), DEFINED)
for m in TITLE.finditer(allsrc):
    grams(re.sub(r'<[^>]+>', ' ', m.group(1)), DEFINED)
grams(spoken, SPOKEN_WORDS)


def lemmas(w):
    """词形变化折一折：单复数、-ed、-ing、-ly、-ation。"""
    out = {w}
    for suf, rep in (('s', ''), ('es', ''), ('ed', ''), ('ed', 'e'),
                     ('ing', ''), ('ing', 'e'), ('ly', ''), ('ation', 'e'),
                     ('ation', ''), ('ants', 'ant'), ('ants', ''), ('ant', '')):
        if w.endswith(suf) and len(w) - len(suf) >= 4:
            out.add(w[:-len(suf)] + rep)
    out |= {w + 's', w + 'es', w + 'ing', w + 'ed'}
    return out


def has(bag, w):
    return any(x in bag for x in lemmas(w))


used = [w for w in terms if has(SPOKEN_WORDS, w)]
miss = [w for w in used if not has(DEFINED, w)]

print('=' * 74)
print('每个术语有没有被定义过。词库 %d 条 · 出声英文里用到的 %d 个'
      % (len(terms), len(used)))
print('=' * 74)
print()
for i in range(0, len(miss), 5):
    print('  ' + ' · '.join(miss[i:i + 5]))
print()
print('没有任何一处定义过的：**%d 个**（占用到的 %.0f%%）'
      % (len(miss), 100.0 * len(miss) / max(len(used), 1)))
