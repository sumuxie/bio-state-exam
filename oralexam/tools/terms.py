# -*- coding: utf-8 -*-
"""跨卡术语检查 —— 出声念的英文里，有没有从来没人解释过的词。

起因（2026-09-13 Ruojin）：
  「不要有卡片里面用的词，另外一个卡片里面并没有提及，除非是特别 general 的东西。
    因为你想我如果看到一个不认识的单词，我肯定会想说这是什么。」

做法：
  1. 从所有卡的 “ ” 里抽出**像术语的词**（-ase/-ose/-ide/-yl 结尾、带数字或希腊字母、
     句中大写的专名、连字符化合物名……）。
  2. 看这个词在整套卡里有没有被**解释过**：
     · 有正面定义 —— 出现在 “What is X”「X is a/the…」「X means…」里
     · 有就地交代 —— 第一次出现时后面跟了逗号从句或破折号解释
     · 中文里说过 —— 至少中文笔记里出现过，她能查
  3. 三样都没有的，列出来。那就是「她会想问这是什么，但卡上没人答」的词。

跑法：
    python tools/terms.py              # 只列没解释过的
    python tools/terms.py --all        # 连「只有中文解释」的也列
    python tools/terms.py --term rubisco   # 查一个词在哪些卡出现、怎么解释的
"""
import io, os, re, sys, glob
from collections import defaultdict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DATA = os.path.join(D, 'app', 'data')

# 常见英语 —— 这些不算术语，不用解释
COMMON = set("""
a an the of and or to in on at for with by is are was were be been being it its this that these those
what how why when where which who whom whose not no nor but so than then there here all any both each
few more most other some such own same very can will just should now do does did doing have has had
having i you he she they we them his her their our your my me him us as if into onto up down out off
over under again further once about between among from only also after before during while because
during above below through against within without upon per via
opposite purpose decide decides decided increase increases increased decrease decreases
certain choose chooses chosen analysis analyse alongside associate associates associated
deliberate deliberately titrate titrates titrated coincide coincides greek prize nobel
hormone hormones donate donates donated hydrolysis alone together across apart
open opens opened close closes closed break breaks broken form forms formed
carry carries carried hold holds held join joins joined split splits leave leaves
rest read reads reading write writes written name names named count counts counted
measure measures measured report reports reported explain explains explained
answer answers answered follow follows followed matter matters mattered
happen happens happened mention mentions mentioned attach attaches attached
release releases released remove removes removed replace replaces replaced
produce produces produced provide provides provided require requires required
result results resulted return returns returned change changes changed
stable unstable simple single double triple whole entire either neither
english czech textbook chapter figure table section

say says said tell told give gives given take takes taken make makes made come comes came go goes went
get gets got put puts see sees seen know knows known think thinks thought want wants wanted use uses used
work works worked look looks looked find finds found ask asks asked need needs needed keep keeps kept
mean means meant show shows shown call calls called turn turns turned move moves moved run runs ran
part parts side sides way ways thing things point points place places time times number numbers
first second third fourth last next one two three four five six seven eight nine ten twenty hundred
thousand million half whole both either neither every much many little less least more most
high higher low lower big small large short long fast slow fastest slowest good better best bad worse
same different other another new old real true false right wrong left free full empty open closed
question questions answer answers exam examiner textbook book page pages card cards word words sentence
english general generally strictly exactly simply really actually probably usually often always never
sometimes still yet already almost enough quite rather even ever also too again once twice
because since although though unless until while whereas therefore however moreover furthermore
""".split())

TECH_SUFFIX = ('ase', 'ose', 'oside', 'ide', 'yl', 'yne', 'ene', 'amine',
               'philic', 'phobic', 'genic', 'lysis', 'lytic', 'phosphate',
               'hydrase', 'ferase', 'merase', 'nine', 'cine', 'tide')


def spoken(src):
    return re.findall(r'“(.*?)”', src, re.S)


def strip_tags(t):
    return re.sub(r'<[^>]+>', ' ', t or '')


def looks_technical(w):
    """判据要严。宁可漏，也不要把 opposite、purpose、four-carbon 这种算成术语。"""
    lw = w.lower().strip('.,;:!?’\'"()')
    if len(lw) < 5 or lw in COMMON: return False
    if '-' in lw:
        parts = [x for x in lw.split('-') if x]
        # 两半都是普通英语 → 不是术语（four-carbon、side-chain、free-energy）
        if all(q in COMMON or q.isdigit() or len(q) <= 2 for q in parts): return False
        if not any(q.endswith(TECH_SUFFIX) or re.search(r'[0-9α-ω′]', q)
                   for q in parts): return False
        return True
    if re.search(r'[0-9α-ωΔ′]', w): return True
    if lw.endswith(TECH_SUFFIX) and len(lw) > 6: return True
    if w[:1].isupper() and len(lw) > 3: return True
    return False


def norm(w):
    return w.lower().strip('.,;:!?’\'"()[]').rstrip('s') or w.lower()


cards = {}
for f in sorted(glob.glob(os.path.join(DATA, '*.js'))):
    b = os.path.basename(f)
    if b == '_index.js': continue
    src = io.open(f, encoding='utf-8').read()
    cards[b[:-3]] = {
        'src': src,
        'spoken': ' '.join(strip_tags(x) for x in spoken(src)),
        'zh': strip_tags(re.sub(r'“.*?”', ' ', src, flags=re.S)),
    }

ALL_SPOKEN = ' '.join(c['spoken'] for c in cards.values())
ALL_ZH = ' '.join(c['zh'] for c in cards.values())

# 每个术语出现在哪些卡
where = defaultdict(set)
forms = {}
for name, c in cards.items():
    # 句首大写的词不算专名，先把每句首字母降格
    txt = re.sub(r'(^|[.!?]\s+)([A-Z])', lambda m: m.group(1) + m.group(2).lower(), c['spoken'])
    for w in re.findall(r"[A-Za-zα-ωΑ-Ω][A-Za-z0-9α-ωΑ-Ω′’\-]*", txt):
        if looks_technical(w):
            k = norm(w)
            where[k].add(name)
            forms.setdefault(k, w)


def defined_how(k, w):
    """这个词在整套卡里被怎么解释的。"""
    pat = re.escape(w.rstrip('s'))
    # 1 · 正面定义：What is X / X is a / X means
    if re.search(r'(?i)what (?:is|are)[^“”]{0,40}\b%s' % pat, ALL_SPOKEN): return '正面定义'
    if re.search(r'(?i)\b%s\w*\s+(?:is|are)\s+(?:a|an|the|what|one|that|two|three|any)\b' % pat, ALL_SPOKEN): return '正面定义'
    if re.search(r'(?i)\b%s\w*\s+means\b' % pat, ALL_SPOKEN): return '正面定义'
    # 2 · 就地交代：X, the … / X — the … / called X
    if re.search(r'(?i)\b%s\w*\s*[,—]\s+(?:the|a|an|that|which|where|meaning)\b' % pat, ALL_SPOKEN): return '就地交代'
    if re.search(r'(?i)\bcalled\s+(?:the\s+)?%s\b' % pat, ALL_SPOKEN): return '就地交代'
    # 3 · 只在中文里
    if re.search(r'(?i)%s' % pat, ALL_ZH): return '只有中文'
    return ''


show_all = '--all' in sys.argv
if '--term' in sys.argv:
    i = sys.argv.index('--term')
    q = sys.argv[i + 1].lower()
    k = norm(q)
    print('术语：%s' % q)
    print('出现在：%s' % ('、'.join(sorted(where.get(k, []))) or '（出声念的英文里没有）'))
    print('解释：%s' % (defined_how(k, forms.get(k, q)) or '没有'))
    for name, c in cards.items():
        for m in re.finditer(r'(?i)[^.!?]*\b%s\b[^.!?]*[.!?]' % re.escape(q), c['spoken']):
            print('  [%s] %s' % (name, m.group(0).strip()[:160]))
    sys.exit(0)

rows = []
for k, names in where.items():
    w = forms[k]
    how = defined_how(k, w)
    if how == '正面定义' or how == '就地交代': continue
    if how == '只有中文' and not show_all: continue
    rows.append((len(names), sorted(names), w, how))

rows.sort(key=lambda r: (-r[0], r[2].lower()))
print('=' * 78)
print('出声念的英文里，没被解释过的术语')
print('=' * 78)
print('抽出术语 %d 个，其中 %d 个没有正面定义也没有就地交代。' %
      (len(where), sum(1 for k in where if defined_how(k, forms[k]) not in ('正面定义', '就地交代'))))
print()
for n, names, w, how in rows:
    print('%-28s %-10s %s' % (w, how or '没解释', '、'.join(names[:6]) + ('…' if len(names) > 6 else '')))
print()
print('%d 个。' % len(rows))
