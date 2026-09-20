# -*- coding: utf-8 -*-
"""C1 审查：每段出声的话是不是**以定义开头**。

**为什么要有这个。** 2026-09-20 Ruojin：「审查所有卡片，特别是最近新加上这些，
有些卡没有以我们的准则开启：先下定义」，范围是「除了 bioche 的所有卡／所有短问题／所有内容」。
规矩本身是 `PREMISES.md` 的 **C1**：说出口的顺序四段 —— **定义 → general → 稍展开 → 留口子**。

查的是**第一句**：它得是一句「X 是 Y」。不是就报出来。

三件事不算违规：
  · **出处限定**打头（“Generally”、“Not in the textbook”、“I should say…”）——
    LOGIC §11 要求先标出处，所以跳过这种句子，去查它后面那一句。
  · **为什么类**的追问以 “Because …” 开头——那本来就是答案。
  · **陷阱类**以 “No.” / “Not necessarily.” 开头——先纠正前提也是规定动作。

跑法：
    python tools/lead.py            # 除生化卡之外的全部
    python tools/lead.py --all      # 连生化卡一起
    python tools/lead.py --show     # 连合格的也打印出来，用来抽检判据
"""
import io, os, re, sys, glob

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ez as EZ                      # 复用它的 esprima 读卡

OUT = io.TextIOWrapper(io.FileIO(1, 'w', closefd=False), encoding='utf-8', newline='\n')


def say(s=''):
    OUT.write(s + '\n')


# 生化那三十二题的卡：数字卡 ＋ aa ＋ gly。其余都算「最近新加的」。
BIOCHEM = re.compile(r'^(\d\d|aa|gly)$')

STRIP = re.compile(r'<[^>]+>')
QUOTES = u'“”‘’"'

# 可以跳过的开场：出处限定、纠正前提、以及「我先说清楚范围」。
SKIP = re.compile(
    r'^(generally|in general|broadly|strictly'
    r'|i should say|i should add|one thing before'
    r'|the textbook does not|this textbook does not|that is general knowledge'
    r'|not in the textbook|the names are not in the textbook'
    r'|no|not necessarily|not quite|not the one|not in general|yes)\b', re.I)

# 一句定义长什么样。两种都算：
#   ① 系词句：「X is / are / means …」
#   ② 名词短语句：「The set of all sequences …」「A protein that helps …」
# ⚠ 第一版只认 ①，把 255 段里的绝大多数名词短语式定义报成了违规。
#    抽检两条（What is sequence space? / What is a chaperone?）都是误报。
#    同 LOGIC §18：拿窄匹配器数完就信那个数。**报数之前先抽检两条。**
DEF = re.compile(
    r'^(a|an|the|it|they|that|this|these|those|there)?\s*'
    r'[\w’\'\-]+(\s+[\w’\'\-]+){0,6}\s+'
    r'(is|are|means|meant|refers to|stands for|describes)\b', re.I)

# 不是定义的开场：讨论的铺垫、先谈自己、先谈条件、先谈关系。
# 这些才是她说的「没有以先下定义开启」。
NOT_DEF = re.compile(
    r'^(both (?!are\b|is\b)|let me|so let|i (?!mean\b)\w|we \w|you \w|my \w'
    r'|there (are|is|were)\b|it depends|that depends'
    # ⚠「They are two layers of different cells.」「They are two stages of one thing.」
    #    都是定义，只是主语用了代词。抽检 28 和 08 两条都是误报，撤掉 they 这一条。
    r'|same\b|these two'
    r'|first,|second,|one axis|two things|three things|four\.|five\.'
    r'|in my (own )?work|in the cell|in practice'
    r'|when |if |before |after |by |with |from |for |at |on |through )', re.I)

# 「为什么类」的追问用 Because 开头是对的。
BECAUSE = re.compile(r'^(because|it is because)\b', re.I)
WHYQ = re.compile(r'^(why|how (come|does|do|is|are)|what (makes|causes))\b', re.I)

# 只有这些地方要求「先下定义」：卡的开口段、定义类的追问、以及问 What is 的题面。
DEFQ = re.compile(r'^\s*(what (is|are|do you mean by)\b|what does .*\bmean\b'
                  r'|define\b|describe the activities)', re.I)
# ⚠「A 和 B 有什么区别」问的是对比，不是定义。这类题**先给轴**是卡上有意教的形状
#    （「先给轴，再让其余差别从这根轴上长出来」），所以不算违规，排除掉。
DIFFQ = re.compile(r'what (is|are) the difference', re.I)   # 题面里任何位置都算


def sentences(t):
    body = STRIP.sub(' ', t or '')
    for q in QUOTES:
        body = body.replace(q, ' ')
    return [x.strip() for x in re.split(r'(?<=[.?!])\s+', body) if x.strip()]


# 「按书的说法，……」这种出处状语是限定，不是铺垫，判断之前先剥掉。
LEADIN = re.compile(r'^(by|in|on|under|according to)\s+(the|this)\s+'
                    r'(textbook|book|convention)[^,]{0,40},?\s*', re.I)  # 逗号可有可无


def lead(t):
    """跳过出处限定之后的第一句实质句子。"""
    ss = sentences(t)
    for s in ss[:3]:
        core = s.rstrip('.')
        if SKIP.match(core) and len(core.split()) <= 8:
            continue
        return s
    return ss[0] if ss else ''


def wanted(where, question):
    """这一段该不该以定义开头。"""
    q = question or ''
    if DIFFQ.search(q):
        return False
    if where.startswith('开口段'):
        return True
    # ⚠「定义类」这一组里也有问数字、问为什么的题（「Give me a number」
    #    「Why is denaturation sometimes reversible」），那些不该要求先下定义。
    #    第一版按组名一刀切，两条抽检都是误报。只认真的在问「X 是什么」的题面。
    return bool(DEFQ.match(q))


ART = re.compile(r'^(a|an|the|one|any|every|each|two|three|four|five)\b', re.I)


def term_of(q):
    """从题面里取出被问的那个词。What is a chaperone? → chaperone"""
    s = STRIP.sub(' ', q or '').strip().rstrip('?').strip()
    s = re.sub(r'^\s*(what (is|are|do you mean by)|what does|define)\s+', '', s, flags=re.I)
    s = re.sub(r'\s+mean\s*$', '', s, flags=re.I)
    s = re.sub(r'^(a|an|the)\s+', '', s, flags=re.I)
    s = re.sub(r',.*$', '', s)                     # “, in this sense” 之类的尾巴
    s = re.sub(r'\s+and\s+what.*$', '', s, flags=re.I)
    return s.strip().lower()


def is_def_sentence(s, term):
    """这一句是不是在给 term 下定义。"""
    if DEF.match(s) and not NOT_DEF.match(s):
        return True
    if term:
        # 「X is …」「An X is …」，term 可能带复数或连字符
        head = re.escape(term.rstrip('s'))
        if re.search(r'\b' + head + r's?\b[^.]{0,30}?\b(is|are|means|refers to|stands for)\b',
                     s, re.I):
            return True
    return False


def judge(en, question, where):
    """返回 (结论, 第一句)。结论：ok / 没有定义 / 定义不在开头"""
    ss = sentences(en)
    if not ss:
        return 'ok', ''
    first = LEADIN.sub('', lead(en))
    term = term_of(question) if not where.startswith('开口段') else ''
    if BECAUSE.match(first) and WHYQ.match((question or '').strip()):
        return 'ok', first
    # ⚠ 缩写在 ez 里拆成单个字母写（为了让语音念对），于是「I P T G is …」
    #    会被当成「I 怎样怎样」那种开场。它其实是最标准的一句定义。
    if re.match(r'^(?:[A-Z]\s+){1,9}[A-Z]\b', first):
        return 'ok', first
    # 判据最后收到这里：**第一句是不是从「那个东西」本身开始的**。
    # 系词句算（X is …），名词短语算（A protein that helps …），
    # 光秃秃的名词也算（Change in the frequency …／Asparagine, then any residue …）——
    # ⚠ 第二版把后两种都报成了违规，抽检 What is drift? 和
    #    What is the N-glycosylation consensus sequence? 两条都是误报。
    # 真正的违规只有一种形状：第一句先讲「我怎么想」「有几个」「两者如何」「如果…」。
    if not NOT_DEF.match(first):
        return 'ok', first
    # 第一句不是。那后面有没有？
    for s in ss[1:6]:
        if is_def_sentence(s, term):
            return '定义不在开头', first
    return '没有下定义', first


def opening(c):
    out, seen = [], 0
    for p in (c.get('cram') or []):
        if p.get('g') is not None:
            seen += 1
            if seen == 2:
                break
            continue
        if seen == 1:
            out.append(p)
    return out


def main():
    everything = '--all' in sys.argv
    show = '--show' in sys.argv
    bad = []
    n = 0
    files = sorted(glob.glob(os.path.join(EZ.D, '*.js')))
    for f in files:
        base = os.path.basename(f)[:-3]
        if base in ('_index', '_gloss', '_qbank'):
            continue
        if not everything and BIOCHEM.match(base):
            continue
        c = EZ.load(f)
        if not c:
            continue
        rows = []
        op = opening(c)
        for i, p in enumerate(op):
            rows.append(('开口段 ' + str(p.get('n') or i), c.get('q') or '', p))
        for g in (c.get('ask') or []):
            for it in (g.get('items') or []):
                rows.append(('追问 · ' + str(g.get('g') or ''), it.get('q') or '', it))
        for x in (c.get('recog') or []):
            rows.append(('换问法', x.get('q') or '', x))
        for it in (c.get('items') or []):          # _ans_* 那四份出声短答
            rows.append(('出声短答', it.get('q') or '', it))
        for where, q, obj in rows:
            if not wanted(where, q):
                continue
            # 两版都查：`en` 是完整版，`ez` 是她真正先看见的那一版。
            for tag, body in (('', obj.get('en') or obj.get('say') or ''),
                              (' · 最短版', obj.get('ez') or '')):
                if not body:
                    continue
                n += 1
                verdict, first = judge(body, q, where)
                if verdict != 'ok':
                    bad.append((base, where + tag, q, first, verdict))
                if show:
                    say('%-4s %-10s %s' % (verdict[:4], base, first[:90]))
    say('=' * 74)
    say('C1 审查 · 第一句是不是定义    范围：%s' % ('全部卡' if everything else '除生化卡以外'))
    say('=' * 74)
    none = [b for b in bad if b[4] == '没有下定义']
    late = [b for b in bad if b[4] == '定义不在开头']
    say('查了 %d 段该下定义的：%d 段整段没有定义，%d 段定义不在开头。'
        % (n, len(none), len(late)))
    for title, group in (('整段没有下定义', none), ('定义不在开头', late)):
        if not group:
            continue
        say('')
        say('=' * 74)
        say(title + '（%d）' % len(group))
        say('=' * 74)
        cur = None
        for base, where, q, first, _ in group:
            if base != cur:
                say('')
                say('### ' + base)
                cur = base
            say('  [%s] %s' % (where, (q or '')[:70]))
            say('      → %s' % first[:110])
    return 0


if __name__ == '__main__':
    sys.exit(main() or 0)
