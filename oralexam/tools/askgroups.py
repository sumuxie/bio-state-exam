# -*- coding: utf-8 -*-
"""追问的「组」齐不齐 —— 哪张卡缺哪一类问题。

**为什么要有这个工具。** 2026-09-21 Ruojin：

  「我们一直在聊的，我说他们会问：人们最初到底是怎么发现可以用质粒的，
   这种问题，我没找到，大概是在哪里？」
  「我不理解我一开始就拿这个当例子，然后你不加进去。」

她说得对。她一开始就把「怎么发现的」当成考官会问的那一类的**例子**，
于是我在二十张卡上建了这一组——**唯独没建在她那个例子所属的那张卡上**（`pe_clone`）。
而这件事**没有任何一个检查器能看见**：`check_cards` 查语法、`shape` 查结构、
`ez`/`plain`/`lead` 查句子、`coldstart`/`nodef` 查词，
`mbcover` 只查四张分子生物学卡对五份 spine 的术语覆盖。
**「这张卡该有的那类问题在不在」，一个工具都没查过。**

⚠ **这一份的第一版是用正则写的，当场就报错了数。** 那一版要求
`{g:'…', gn:` 出现在同一行，而有好几张卡的组标题和 `gn` 是分两行写的
（`mb_int` 整张卡的五个组全被漏掉，报成「缺定义类、缺为什么类」，其实都有）。
同一个坑 `LOGIC §18` 早就写过：**拿窄匹配器数完就信那个数。报数之前先抽检两条。**
所以这一版改成 **esprima 解析**，读的是真的 `ask` 数组，不是文本形状。

⚠ 判据仍然很钝：它只看组标题里有没有那几个字。
它查不了「这一组里的问题问得好不好」——那只能回卡里读。
它的用处是**把整类缺失挑出来**，而不是打分。

横向卡（`x_*`）不算在内：那八张是跨卡的参考卡，不对应题目单上的题，
本来就不需要「相邻考点」和「桥回主场」。

跑法：
    python tools/askgroups.py          # 只列有缺的
    python tools/askgroups.py --all    # 连齐的和横向卡一起列
"""
import io, os, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
try:
    import esprima
except ImportError:
    esprima = None

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

# 横向卡：跨卡参考，不对应题目单上的题。
CROSS = set('x_bonds x_cur x_fg x_mem x_meta x_ph x_rxn x_trans'.split())

# 六类。键是组标题里要出现的字，值是这一类回答的是什么问题。
KINDS = [
    ('定义类',    '他挑一个词问「那是什么」'),
    ('为什么类',  '他问「为什么会这样」'),
    ('怎么发现的', '他问「人们最初怎么知道的」'),
    ('陷阱',      '说错了听起来还挺对的地方'),
    ('相邻考点',  '他从这道题走出去会走到哪'),
    ('桥',        '把话拉回她自己真正做的事'),
]


def ev(n):
    t = n.type
    if t == 'Literal':
        return n.value
    if t == 'ObjectExpression':
        d = {}
        for p in n.properties:
            k = p.key.name if p.key.type == 'Identifier' else p.key.value
            d[k] = ev(p.value)
        return d
    if t == 'ArrayExpression':
        return [ev(e) for e in n.elements if e is not None]
    if t == 'BinaryExpression' and n.operator == '+':
        a, b = ev(n.left), ev(n.right)
        if isinstance(a, str) and isinstance(b, str):
            return a + b
    return None


def load(path):
    tree = esprima.parseScript(io.open(path, encoding='utf-8').read(), {'tolerant': True})
    for st in tree.body:
        e = getattr(st, 'expression', None)
        if e is not None and e.type == 'CallExpression' and e.arguments:
            return ev(e.arguments[0])
    return None


def ask_titles(card):
    """只数真的追问组：ask 数组里带 items 的那些。"""
    out = []
    for g in (card.get('ask') or []):
        if isinstance(g, dict) and g.get('items') is not None and g.get('g'):
            out.append(g['g'])
    return out


def main():
    if esprima is None:
        print('要先装 esprima：pip install esprima')
        return 2
    show_all = '--all' in sys.argv
    rows = []
    for f in sorted(glob.glob(os.path.join(D, '*.js'))):
        b = os.path.basename(f)[:-3]
        if b.startswith('_'):
            continue
        c = load(f)
        if not c:
            continue
        titles = ask_titles(c)
        joined = ' '.join(titles)
        miss = [k for k, _ in KINDS if k not in joined]
        rows.append((b, b in CROSS, miss, len(titles)))

    print('=' * 74)
    print('追问的组齐不齐 —— 哪张卡缺哪一类问题')
    print('=' * 74)
    print('六类：' + ' · '.join(k for k, _ in KINDS))
    print()

    exam = [r for r in rows if not r[1]]
    cross = [r for r in rows if r[1]]
    bad = [r for r in exam if r[2]]

    for b, _, miss, n in sorted(bad, key=lambda x: (-len(x[2]), x[0])):
        print('  %-10s %d 组 · 缺 %s' % (b, n, ' · '.join(miss)))
    if show_all:
        print()
        for b, _, miss, n in exam:
            if not miss:
                print('  %-10s %d 组 · 齐' % (b, n))
        print()
        print('横向卡（不算在内）：')
        for b, _, miss, n in cross:
            print('  %-10s %d 组%s' % (b, n, ('' if not miss else ' · 缺 ' + ' · '.join(miss))))

    print()
    print('真题卡 %d 张，其中 %d 张缺至少一类。' % (len(exam), len(bad)))
    for k, why in KINDS:
        m = [b for b, _, miss, _ in exam if k in miss]
        if m:
            print('  缺「%s」（%s）：%d 张 —— %s' % (k, why, len(m), ' '.join(m)))
    print()
    print('⚠ 这个判据只看组标题在不在，看不了组里问得好不好。')
    return 0


if __name__ == '__main__':
    sys.exit(main())
