# -*- coding: utf-8 -*-
"""细胞地图 —— 把全部 41 张卡按「这件事发生在哪个房间」重新索引一遍。

**为什么要有这个工具。** 2026-09-23 Ruojin：

  「我还在想再写一个很大的全部穿起来的内容，你不用加新东西，而是把他们都地图化，
   就是比如一个细胞，xx 发生了什么，然后这里就是一张小卡，或者追问内容，
   这样，要写很全面」

⚠ 关键在「**你不用加新东西**」。所以这一份**一个字都不写**，
它只做一件事：**扫全部卡，把提到某个区室的每一格挑出来，按房间重排。**
地图是**推出来的**，不是编出来的 —— 所以它不会跟卡漂移，
卡改了重跑一次就对了。

`x_mem` 速背 15 已经有一张九行的房间表（带书页），但它**只指到「哪张卡」**；
她要的是指到「**哪一格**」—— 哪一个速背点、哪一条追问。这一份补的就是那一层。

判据很钝：**在这一格的英文正文里出现了区室的名字**。
所以它会漏（那一格讲的是这个房间但没点名）也会多（只是顺口提了一句）。
⚠ 它的用处是**把散在 41 张卡里的同一个房间聚到一起**，不是给覆盖率打分。

跑法：
    python tools/cellmap.py              # 打表
    python tools/cellmap.py --js         # 输出可以贴进卡里的 tbl rows
    python tools/cellmap.py --room 基质   # 只看一个房间
"""
import io, os, re, sys, glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
try:
    import esprima
except ImportError:
    esprima = None

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'data')

# 房间 → 认它的词。顺序要紧：先匹配窄的，再匹配宽的
# （matrix 之前必须先试 mitochondrial matrix，不然叶绿体基质 stroma 会被吃掉）。
ROOMS = [
    ('线粒体基质',   r'mitochondrial matrix|in the matrix|matrix of the mitochond'),
    ('线粒体内膜',   r'inner (mitochondrial )?membrane|respiratory chain|electron transport chain'),
    ('线粒体膜间隙', r'intermembrane space'),
    ('细胞核',       r'\bnucleus\b|\bnuclear\b|nucleolus|nucleoli'),
    ('内质网',       r'endoplasmic reticulum|\bE R membrane\b|rough E R'),
    ('高尔基体',     r'Golgi'),
    ('溶酶体',       r'lysosom'),
    ('过氧化物酶体', r'peroxisom'),
    ('类囊体',       r'thylakoid'),
    ('叶绿体基质',   r'\bstroma\b|chloroplast'),
    ('周质',         r'periplasm'),
    ('核糖体',       r'\bribosom'),
    ('细胞壁 / 膜外', r'cell wall|extracellular|secreted|outside the cell|into the medium'),
    ('质膜',         r'plasma membrane|cytoplasmic membrane|cell membrane'),
    ('胞质',         r'cytosol|cytoplasm|cytosolic'),
]
ROOMPAT = [(n, re.compile(p, re.I)) for n, p in ROOMS]


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


def strip(h):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', str(h or ''))).strip()


def rooms_in(text):
    t = strip(text)
    out = []
    for name, pat in ROOMPAT:
        if pat.search(t):
            out.append(name)
    return out


def snippet(text, room):
    """把点到这个房间的那一句拎出来。"""
    t = strip(text).replace('“', '').replace('”', '')
    pat = dict(ROOMPAT)[room]
    for s in re.split(r'(?<=[.?!])\s+', t):
        if pat.search(s):
            return s[:150]
    return t[:150]


def main():
    if esprima is None:
        print('要先装 esprima：pip install esprima')
        return 2
    only = None
    if '--room' in sys.argv:
        only = sys.argv[sys.argv.index('--room') + 1]
    hits = {}
    for f in sorted(glob.glob(os.path.join(D, '*.js'))):
        b = os.path.basename(f)[:-3]
        if b.startswith('_'):
            continue
        c = load(f)
        if not c:
            continue
        cid = c.get('id', b)
        # 速背
        for p in (c.get('cram') or []):
            if not isinstance(p, dict) or not p.get('n'):
                continue
            body = (p.get('en') or '') + ' ' + (p.get('big') or '')
            for r in rooms_in(body):
                hits.setdefault(r, []).append(
                    (cid, '速背 ' + str(p['n']), p.get('t', ''), snippet(body, r)))
        # 追问
        for g in (c.get('ask') or []):
            for x in (g.get('items') or []):
                if not isinstance(x, dict) or not x.get('en'):
                    continue
                for r in rooms_in(x['en']):
                    hits.setdefault(r, []).append(
                        (cid, '追问', strip(x.get('q', ''))[:56], snippet(x['en'], r)))

    order = [n for n, _ in ROOMS if n in hits]
    if '--js' in sys.argv:
        for r in order:
            if only and only not in r:
                continue
            seen, cells = set(), []
            for cid, kind, title, _ in hits[r]:
                k = cid + kind
                if k in seen:
                    continue
                seen.add(k)
                cells.append('<b>' + cid + '</b> ' + kind)
            print("    ['" + r + "','" + ' · '.join(cells[:14]) + "'],")
        return 0

    print('=' * 74)
    print('细胞地图 —— 每个房间里，全部 41 张卡讲过的事都在哪一格')
    print('=' * 74)
    print('⚠ 判据：这一格的英文正文里点了这个区室的名字。会漏也会多，用来聚拢，不用来打分。')
    print()
    tot = 0
    for r in order:
        rows = hits[r]
        if only and only not in r:
            continue
        print('── %s（%d 格）' % (r, len(rows)))
        seen = set()
        for cid, kind, title, snip in rows:
            k = (cid, kind, title)
            if k in seen:
                continue
            seen.add(k)
            print('   %-10s %-8s %s' % (cid, kind, title[:52]))
        print()
        tot += len(seen)
    print('合计 %d 格，分布在 %d 个房间。' % (tot, len(order)))
    return 0


if __name__ == '__main__':
    sys.exit(main())
