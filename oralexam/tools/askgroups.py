# -*- coding: utf-8 -*-
"""追问的「组」齐不齐 —— 哪张卡缺哪一类问题。

**为什么要有这个工具。** 2026-09-21 Ruojin：

  「我们一直在聊的，我说他们会问：人们最初到底是怎么发现可以用质粒的，
   这种问题，我没找到，大概是在哪里？」
  「我不理解我一开始就拿这个当例子，然后你不加进去。」

她说得对。她一开始就把「怎么发现的」当成考官会问的那一类的**例子**，
于是我在 20 张卡上建了这一组——**唯独没建在她那个例子所属的那张卡上**（`pe_clone`）。
而这件事**没有任何一个检查器能看见**：`check_cards` 查语法、`shape` 查结构、
`ez`/`plain`/`lead` 查句子、`coldstart`/`nodef` 查词，
`mbcover` 只查四张分子生物学卡对五份 spine 的术语覆盖。
**「这张卡该有的那类问题在不在」，一个工具都没查过。**

所以这一份查的是**组**，不是句子：每张真题卡上，六类追问齐不齐。

⚠ 判据很钝，它只看组标题里有没有那几个词。
它查不了「这一组里的问题问得好不好」——那只能回卡里读。
它的用处是**把整类缺失挑出来**，而不是打分。

横向卡（`x_*`）不算在内：那八张是跨卡的参考卡，不对应题目单上的题，
本来就不需要「相邻考点」和「桥回主场」。

跑法：
    python tools/askgroups.py          # 只列有缺的
    python tools/askgroups.py --all    # 列全部
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

# 横向卡：跨卡参考，不对应题目单上的题。
CROSS = set('x_bonds x_cur x_fg x_mem x_meta x_ph x_rxn x_trans'.split())

# 六类。键是组标题里要出现的字，值是这一类回答的是什么问题。
KINDS = [
    ('定义类',   '他挑一个词问「那是什么」'),
    ('为什么类', '他问「为什么会这样」'),
    ('怎么发现的', '他问「人们最初怎么知道的」'),
    ('陷阱',     '说错了听起来还挺对的地方'),
    ('相邻考点', '他从这道题走出去会走到哪'),
    ('桥',       '把话拉回她自己真正做的事'),
]

GRP = re.compile(r"\{g:'([^']*)', gn:'[^']*', items:\[")


def groups(path):
    s = io.open(path, encoding='utf-8').read()
    return GRP.findall(s)


def main():
    show_all = '--all' in sys.argv
    rows = []
    for f in sorted(glob.glob(os.path.join(D, '*.js'))):
        b = os.path.basename(f)[:-3]
        if b.startswith('_'):
            continue
        titles = ' '.join(groups(f))
        miss = [k for k, _ in KINDS if k not in titles]
        rows.append((b, b in CROSS, miss, len(groups(f))))

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
            print('  %-10s %d 组' % (b, n))

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
