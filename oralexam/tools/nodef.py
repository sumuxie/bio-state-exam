# -*- coding: utf-8 -*-
"""有没有「完全没定义」的词 —— 她背不动的那一类。

2026-09-20 Ruojin：「其实我让你检查的主要是有没有完全没定义很难背的内容」。

前面两个检查都没查这件事：
  · lead.py 查的是「答案的第一句是不是定义」——那是**顺序**。
  · coldstart.py 查的是「这个词的定义离它的用处有多远」——那是**距离**。
  · 这一个查的是**有没有**：卡上加粗立起来的词，全套材料里到底有没有人给过它一句定义。

判据（一个词要算「有定义」，三条满足任意一条）：
  ① 词库 `_gloss.js` 里有它，而且 s 是 1（她自己的生化词库）。
     ⚠ s 是 2 的不算——那是通用英汉词典，词库自己的抬头就写着「要打折听」。
  ② 全套卡里任何一处用 X is / X are / X means 给过它一句正面定义。
  ③ 它自己就是某一格的标题，或者某个换问法问的就是 "What is X"。

报出来的就是：**她要背这个词，可全套材料里没有任何一处告诉她这个词是什么。**

跑法：
    python tools/nodef.py            # 全部
    python tools/nodef.py --weak     # 连「只有通用词典释义」的一起列
    python tools/nodef.py 06 aa      # 只看这几张
"""
import io, json, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

# ⚠ 只取英文那几栏。big 那一行是中文，里面的加粗是「这里要重读」的强调，
# 不是术语——第一版把它算进来，642 个硬伤里六百多个是「那块 —NH₂ 叫氨基」这种。
SPOKEN = ('en', 'say', 'ez')
CJK = __import__('re').compile(u'[㐀-鿿　-〿＀-￯]')

# 这些加粗的东西不是术语，是句子里的强调
NOTTERM = set('''both all none one two three four five six seven eight nine ten
first second third last only not no yes and or but so the a an
up down left right above below inside outside more less same different
on off open closed high low fast slow big small long short'''.split())


def plain(s):
    s = re.sub(r"'\s*\+\s*'", ' ', s)
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).replace('“', '').replace('”', '').strip()


def load_gloss():
    src = io.open(os.path.join(D, '_gloss.js'), encoding='utf-8').read()
    i = src.index('{')
    j = src.rindex('}')
    g = json.loads(src[i:j + 1])
    # make_gloss.py 的来源码：1 = 她自己的生化词库；3 = 也是她的词库，只是中文
    # 借了词典；4 = 连字符复合词按段拼出来的；5 = 人工补的。这四类都算真定义。
    # ⚠ 只有 2 不算——那是纯通用英汉词典，词库抬头自己写着「要打折听」。
    own = set(k for k, v in g.items() if v.get('s') in (1, 3, 4, 5))
    any_ = set(g.keys())
    return own, any_


def field(blk, name):
    m = re.search(name + r":'((?:[^'\\]|\\.)*)'", blk)
    return m.group(1) if m else ''


def norm(w):
    w = plain(w).strip(' ,.;:·—-()（）「」“”').strip()
    return w


def is_term(w):
    if not w or len(w) < 4 or len(w.split()) > 3:
        return False
    if not re.search(r'[A-Za-z]', w):
        return False
    if CJK.search(w):          # 中英混排的是强调，不是术语
        return False
    if w.lower() in NOTTERM:
        return False
    # ⚠ en 里的加粗也大量用于**语气强调**：gets stuck / keep the winners /
    # where you start / many, not one。第二版把它们全当术语报了出来。
    # 所以改成看词形：短语里出现动词或功能词的一律不算，
    # 而且至少要有一个词长得像术语（学术后缀、带数字或连字符、或者够长）。
    low = w.lower()
    if any(x in VERBISH for x in re.findall(r'[a-z]+', low)):
        return False
    return any(techy(x) for x in w.split())


VERBISH = set(('is are was were has have do does not never only just precisely'
               ' get gets got keep keeps make makes made take takes stop stops'
               ' start starts go goes come comes where when why how what which'
               ' you your it its they their we our he she his her'
               ' more less most least same different opposite very many few'
               ' early late first second third last next another other each'
               ' happen happens work works run runs give gives put puts'
               ' turn turns hold holds move moves stay stays one two three'
               ' single equal free deep biased directed neutral stuck').split())

SUFFIX = ('ase ose ide ate ine yls tion sion ome ins amine amide'
          ' phate lysis genesis meric mers plasm somes ution'
          ' ergic otic osis itis emia').split()


def techy(x):
    x = x.strip('.,:;()').lower()
    if len(x) < 3:
        return False
    if re.search(r'[0-9\u2032-]', x):        # 带数字、撇号或连字符
        return True
    if any(x.endswith(s) for s in SUFFIX):
        return True
    return len(x) >= 9                              # 够长的单词，多半是术语


# 数字加量纲不是术语：370 millivolts / 597 nanometres / 640 to 700 / minus 320。
NUMWORD = set(('millivolts millivolt nanometres nanometre nanometers volts volt'
               ' minus plus percent degrees kilojoules kilodaltons picoseconds'
               ' micrometres milliseconds microseconds seconds minutes hours').split())


def is_number_phrase(w):
    ws = [x.strip('.,:;()').lower() for x in w.split()]
    if not ws:
        return False
    return all(re.fullmatch(r'[-–—.,0-9]+', x) or x in NUMWORD or x == 'to' for x in ws)


# 2026-09-20 逐条回卡里看过的。结论是：**没有一条是真的从没被解释过**。
# 要么是系统命名（NADH:ubiquinone oxidoreductase 就跟在「复合物 I」旁边），
# 要么是上下文里当场解释了，只是句式不是 X is / X are：
#   the GAL1 promoter, which is switched on by galactose
#   C four plants were found by Hatch and Slack in nineteen seventy
#   Sec61 转运子——在中文笔记里交代的，英文正则看不见
# 留在这里是为了让**新加的卡**里真出现没定义的词时能冒出来。
CHECKED = set('''peptidyl-prolyl cis,trans-isomerases | α-linked glucose | β-linked |
Sec61 translocon | enzyme–substrate complex | enoic, -dienoic, -trienoic |
ferrocytochrome c:oxygen oxidoreductase | NADH:ubiquinone oxidoreductase |
succinate:ubiquinone oxidoreductase | ubiquinol:cytochrome c oxidoreductase |
3-phosphoglycerates | carbon-14 dioxide | cytochrome b6f complex | iron–sulfur protein |
oxygen-18 | oxygen-18 labelling experiment | P700 | ribulose-1,5-bisphosphate |
ribulose-1,5-bisphosphate carboxylase/oxygenase | ribulose-5-phosphate | β-carotene |
carboxylase/oxygenase | Hatch–Slack pathway | GAL1 | 1-Fluoro-2,4-dinitrobenzene'''
              .replace(chr(10), ' ').split('|'))
CHECKED = set(x.strip().lower() for x in CHECKED if x.strip())

want = [a for a in sys.argv[1:] if not a.startswith('--')]
WEAK = '--weak' in sys.argv

own, any_ = load_gloss()

files = [f for f in sorted(glob.glob(os.path.join(D, '*.js')))
         if not os.path.basename(f).startswith('_')]
srcs = {os.path.basename(f): io.open(f, encoding='utf-8').read() for f in files}
allspoken = '\n'.join(plain(s) for s in srcs.values())
alltitles = '\n'.join(srcs.values())


def defined_in_place(term):
    """全套卡里有没有 X is / X are / X means 这样的一句。"""
    t = re.escape(term)
    return bool(re.search(t + r'\w*\s+(is|are|means|refers)\b', allspoken, re.I))


def is_a_heading(term):
    """它自己是不是某一格的标题，或者某个换问法问的就是 What is X。"""
    t = re.escape(term)
    if re.search(r"t:'[^']*" + t, alltitles, re.I):
        return True
    return bool(re.search(r"q:'[^']*[Ww]hat (is|are)[^']*" + t, alltitles, re.I))


rows = []
for b, src in srcs.items():
    if want and not any(w in b for w in want):
        continue
    seen = {}
    for m in re.finditer(r"\b(" + '|'.join(SPOKEN) + r")\s*:\s*'((?:[^'\\]|\\.)*)'", src):
        for raw in re.findall(r'<b>(.*?)</b>', m.group(2), re.S):
            w = norm(raw)
            if is_term(w) and not is_number_phrase(w):
                seen.setdefault(w.lower(), w)
    for wl, w in sorted(seen.items()):
        if wl in CHECKED and '--all' not in sys.argv:
            continue
        # ⚠ 词库是按**单词**索引的——她在 app 里点的是一个词，不是一个短语。
        # 所以多词术语要逐词查：每个实词都查得到，这个短语就不算「没定义」。
        parts = [x.strip('.,:;()’').lower() for x in w.split()]
        parts = [x for x in parts if len(x) > 2 and x not in VERBISH]
        missing = [x for x in parts if x not in own]
        if not missing:
            continue
        if defined_in_place(w) or is_a_heading(w):
            continue
        if all(defined_in_place(x) or x in any_ for x in missing):
            rows.append((b, w, True))       # 只有通用词典释义 / 卡上就地解释过
        else:
            rows.append((b, w, False))

hard = [r for r in rows if not r[2]]
weak = [r for r in rows if r[2]]

print('=' * 74)
print('完全没定义的词 —— 卡上加粗立起来、全套材料里却没人告诉她它是什么')
print('=' * 74)
cur = ''
for b, w, _ in hard:
    if b != cur:
        print('\n' + b)
        cur = b
    print('  %s' % w)
print()
print('另有 %d 条 2026-09-20 回卡里核过，都是系统命名或上下文就地解释过的。--all 看全部。' % len(CHECKED))
print('硬伤 %d 个（词库里也没有）・只有通用词典释义的 %d 个。'
      % (len(hard), len(weak)))
if WEAK:
    print()
    print('只有通用词典释义的（s:2，词库自己说要打折听）：')
    cur = ''
    for b, w, _ in weak:
        if b != cur:
            print('\n' + b)
            cur = b
        print('  %s' % w)
