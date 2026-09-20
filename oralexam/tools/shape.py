# -*- coding: utf-8 -*-
"""卡的**结构**对不对 —— 语法对、结构错的那一类。

2026-09-21 Ruojin：「分子生物学第一张卡死掉了打不开」。

查下来：我把 8 条方法插到了**组外面**——它们直接落在 ask 数组里，
不在任何一个组的 items 里。渲染时读 g.items 拿到 undefined，整张卡就死了。

⚠ `check_cards.py` 报「全部通过」，因为**那是合法的 JS**。它查的是
括号配不配、引号闭不闭、esprima 能不能解析——**语法**。
这一个查**结构**：每一样东西是不是长在它该长的位置上。

判据（照 RECIPE 的字段约定）：
  · ask   每个元素必须是组：有 g，有 items，items 是数组
  · ask.items 每条必须有 q
  · cram  每个元素要么是组（有 g），要么是点（有 n）
  · recog 每条必须有 q
  · sib   每条必须是长度 3 的数组
  · segs  每条必须有 tag 和 p，p 是数组
  · why   要有 rungs，rungs 每条是长度 2 的数组

跑法：python tools/shape.py
"""
import io, os, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
try:
    import esprima
except ImportError:
    print('要装 esprima：pip install esprima')
    raise SystemExit(1)

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')


def obj(node):
    """ObjectExpression → {key: node}"""
    out = {}
    if node.type != 'ObjectExpression':
        return out
    for p in node.properties:
        k = getattr(p.key, 'name', None) or getattr(p.key, 'value', None)
        out[k] = p.value
    return out


def arr(node):
    return node.elements if node and node.type == 'ArrayExpression' else None


def check(path):
    src = io.open(path, encoding='utf-8').read()
    bad = []
    try:
        tree = esprima.parseScript(src)
    except Exception as e:
        return ['解析不了：%s' % str(e)[:60]]
    for st in tree.body:
        try:
            call = st.expression
            if call.type != 'CallExpression':
                continue
            card = obj(call.arguments[0])
        except Exception:
            continue

        cid = 'card'
        if 'id' in card and hasattr(card['id'], 'value'):
            cid = card['id'].value

        a = arr(card.get('ask'))
        if a is not None:
            for i, el in enumerate(a):
                o = obj(el)
                if 'g' not in o or 'items' not in o:
                    who = o.get('q')
                    who = getattr(who, 'value', '?') if who is not None else '?'
                    bad.append('%s ask[%d] 不是组（缺 g 或 items）：%s'
                               % (cid, i, str(who)[:46]))
                    continue
                its = arr(o['items'])
                if its is None:
                    bad.append('%s ask[%d].items 不是数组' % (cid, i))
                    continue
                for j, x in enumerate(its):
                    if 'q' not in obj(x):
                        bad.append('%s ask[%d].items[%d] 缺 q' % (cid, i, j))

        c = arr(card.get('cram'))
        if c is not None:
            for i, el in enumerate(c):
                o = obj(el)
                if 'g' not in o and 'n' not in o:
                    bad.append('%s cram[%d] 既不是组也不是点' % (cid, i))

        r = arr(card.get('recog'))
        if r is not None:
            for i, el in enumerate(r):
                if 'q' not in obj(el):
                    bad.append('%s recog[%d] 缺 q' % (cid, i))

        s = arr(card.get('sib'))
        if s is not None:
            for i, el in enumerate(s):
                e = arr(el)
                if e is None or len(e) != 3:
                    bad.append('%s sib[%d] 不是长度 3 的数组' % (cid, i))

        g = arr(card.get('segs'))
        if g is not None:
            for i, el in enumerate(g):
                o = obj(el)
                if 'tag' not in o or arr(o.get('p')) is None:
                    bad.append('%s segs[%d] 缺 tag 或 p' % (cid, i))

        w = obj(card.get('why')) if card.get('why') is not None else {}
        if w:
            rg = arr(w.get('rungs'))
            if rg is None:
                bad.append('%s why.rungs 不是数组' % cid)
            else:
                for i, el in enumerate(rg):
                    e = arr(el)
                    if e is None or len(e) != 2:
                        bad.append('%s why.rungs[%d] 不是长度 2 的数组' % (cid, i))
    return bad


print('=' * 74)
print('卡的结构 —— 语法对、结构错的那一类')
print('=' * 74)
tot = 0
for f in sorted(glob.glob(os.path.join(D, '*.js'))):
    b = os.path.basename(f)
    if b.startswith('_'):
        continue
    bad = check(f)
    if bad:
        tot += len(bad)
        print('\n' + b)
        for x in bad:
            print('  ' + x)
print()
print('共 %d 处结构问题。' % tot if tot else '结构全部正常。')
