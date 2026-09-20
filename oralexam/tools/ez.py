# -*- coding: utf-8 -*-
"""R14 的进度表：哪些开口段还没有最短版，以及已有的合不合规。

**为什么要有这个工具。** 2026-09-20 Ruojin：「对就是这样，而且之前我就让你这么干过，
需要审查文字，语言，不然我真的背不动」。查了一下，上次的产物是 `plain.py`——
但它的判据只抓「读起来会卡壳」（插入语套插入语、比较结构、要回头重读），
**不抓「句子结构复杂」**，所以它在一万四千句里报 0 句要改。
**工具一直在，判据错了。** 这一份补的就是那个判据。

**R14 的硬线**（见 `PREMISES.md`）：
  · 每句 ≤ 12 词
  · 不许有从句引导词（that / which / who / because 放句中 / so 放句中 …）
  · 不许有破折号插入语、分号
  · 句子多没关系，她自己说的「哪怕话多」

跑法：
    python tools/ez.py            # 进度 ＋ 还差哪些
    python tools/ez.py --check    # 只查已写的合不合规，有问题退出码 1
"""
import io, os, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
try:
    import esprima
except ImportError:
    esprima = None

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')
MAXW = 12
# 从句引导词。**只在「逗号 ＋ 引导词」的形状下才算**——那才是靠语法结构承载关系的句子。
# 她的原话：「我甚至不知道你的句式我改了是不是他们的关系也就不成立了」。
# ⚠ 第一版写成了裸 \b(which|…)\b，把 "It means which atoms are bonded together" 和
# 句首的 "Which form of the enzyme does the inhibitor bind" 都报成了违规，
# 抽检发现两条都是误报。同 LOGIC §18：拿窄匹配器数完就信那个数。**报数之前先抽检两条。**
CLAUSE = re.compile(r',\s*(which|who|whose|whereas|although|while|unless)\b', re.I)
PUNCT = re.compile(r'[;—–]')


def ev(n):
    t = n.type
    if t == 'Literal': return n.value
    if t == 'ObjectExpression':
        d = {}
        for p in n.properties:
            k = p.key.name if p.key.type == 'Identifier' else p.key.value
            d[k] = ev(p.value)
        return d
    if t == 'ArrayExpression': return [ev(e) for e in n.elements if e is not None]
    if t == 'BinaryExpression' and n.operator == '+':
        a, b = ev(n.left), ev(n.right)
        if isinstance(a, str) and isinstance(b, str): return a + b
        return None
    return None


def load(path):
    tree = esprima.parseScript(io.open(path, encoding='utf-8').read(), {'tolerant': True})
    for st in tree.body:
        e = getattr(st, 'expression', None)
        if e is not None and e.type == 'CallExpression' and e.arguments:
            return ev(e.arguments[0])
    return None


def opening(c):
    """开口段 ＝ 第一个组标题之后、第二个组标题之前的那些点。"""
    out, seen = [], 0
    for p in (c.get('cram') or []):
        if p.get('g') is not None:
            seen += 1
            if seen == 2: break
            continue
        if seen == 1: out.append(p)
    return out


# 为了让语音念对，缩写在 ez 里是拆成单个字母写的：N A D H、d A T P、P C R。
# 数词数的时候要把连着的单字母收回成一个词，不然「N A D H」算成四个词，
# 会把完全简单的句子报成超长。⚠ 这是第二次栽在同一个形状上：
# 拿一个窄匹配器去数，数完就信那个数（LOGIC §18）。
LETTERS = re.compile(r'(?<![A-Za-z])(?:[A-Za-z]\s+){1,9}[A-Za-z](?![A-Za-z])')

def sentences(t):
    body = re.sub(r'<[^>]+>', ' ', t or '')
    body = body.replace('“', ' ').replace('”', ' ')
    return [x.strip() for x in re.split(r'[.?!]', body) if x.strip()]


def main():
    if esprima is None:
        print('要先装 esprima：pip install esprima'); return 2
    check_only = '--check' in sys.argv
    files = [f for f in sorted(glob.glob(os.path.join(D, '*.js')))
             if not os.path.basename(f).startswith('_')]
    done_pts = todo_pts = 0
    ask_tot = ask_done = rec_tot = rec_done = 0
    todo_cards = []
    problems = []
    for f in files:
        c = load(f)
        if not c: continue
        name = os.path.basename(f)[:-3]
        op = opening(c)
        miss = [p for p in op if p.get('en') and not p.get('ez')]
        done_pts += len(op) - len(miss)
        todo_pts += len(miss)
        if miss: todo_cards.append((name, len(miss), len(op)))
        # 追问和「换个问法」也算进来。2026-09-20 她说：「但是还有追问题也需要吧
        # 最短版 最无语法版」「我觉得你最好都出 我能保证每个都搂一眼」。
        for g in (c.get('ask') or []):
            for it in (g.get('items') or []):
                if not it.get('en'): continue
                ask_tot += 1
                if it.get('ez'): ask_done += 1
        for x in (c.get('recog') or []):
            if not x.get('say'): continue
            rec_tot += 1
            if x.get('ez'): rec_done += 1
        for p in op:
            if not p.get('ez'): continue
            for s in sentences(p['ez']):
                w = len(LETTERS.sub('X', s).split())
                if w > MAXW: problems.append((name, p.get('n'), '%d 词' % w, s[:64]))
                elif CLAUSE.search(s): problems.append((name, p.get('n'), '有从句', s[:64]))
            if PUNCT.search(re.sub(r'<[^>]+>', '', p['ez'])):
                problems.append((name, p.get('n'), '破折号或分号', p['ez'][:64]))
            if not p.get('ezcn'):
                problems.append((name, p.get('n'), '缺中文那一行', ''))

    tot = done_pts + todo_pts
    print('=' * 70)
    print('R14 · 开口段最短版')
    print('=' * 70)
    print('共 %d 个点，已写 %d 个（%.0f%%），还差 %d 个' %
          (tot, done_pts, 100.0 * done_pts / max(tot, 1), todo_pts))
    print('追问   %d 条，已写 %d 条（%.0f%%）' % (ask_tot, ask_done, 100.0*ask_done/max(ask_tot,1)))
    print('换问法 %d 条，已写 %d 条（%.0f%%）' % (rec_tot, rec_done, 100.0*rec_done/max(rec_tot,1)))
    if problems:
        print('\n不合规 %d 处（每句 ≤ %d 词 · 不许从句 · 不许破折号分号 · 要有中文那行）：' % (len(problems), MAXW))
        for p in problems[:30]:
            print('  %-10s %-4s %-14s %s' % p)
    else:
        print('\n已写的全部合规。')
    if not check_only and todo_cards:
        print('\n还差的卡，按缺口大小：')
        for n, m, o in sorted(todo_cards, key=lambda x: -x[1]):
            print('  %-10s 缺 %d / %d' % (n, m, o))
    return 1 if (check_only and problems) else 0


if __name__ == '__main__':
    sys.exit(main())
