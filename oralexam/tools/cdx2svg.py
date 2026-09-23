# -*- coding: utf-8 -*-
"""ChemDraw 的 .cdxml → 卡里能直接嵌的 SVG 结构式。

2026-09-23 她：「你能不能用 **chemdraw 的风格**画一下各反应的化学式？
特别是需要把它**反应的关键位置标一下，比如 c2 啥的**。
不知道你能不能看这个文件。`C:\\Users\\Admin\\Downloads\\EMP.cdxml`」
接着：「**按这个风格把文档里所有都画一下**」

—— 读得了。cdxml 是纯 XML：
  <n id p="x y">            一个原子，p 是坐标；里面有 <t> 就是显式标签（O / OH / P …）
  <b B="起" E="止" Order>   一根键，Order="2" 是双键；没有 Order 就是单键
  <fragment>                一个分子
所以不用重画，**把它渲染出来就行**，而且能在同一张图上叠我自己的编号（C1 / C2 …）。

为什么做成 SVG 而不是图片：
· 卡里本来就支持内嵌 SVG（`.svgwrap svg`，index.html 里有样式）；
· 矢量，放大不糊，深色模式下描边颜色能跟着主题走（用 currentColor）；
· 文件小，能进 git，不用走 img/ 那套 300 dpi 原图流程。

跑法：
    python tools/cdx2svg.py "C:\\Users\\Admin\\Downloads\\EMP.cdxml" --out app/img/emp
    python tools/cdx2svg.py <文件> --list          # 只看里面有哪些片段
"""
import io, os, re, sys, math
import xml.etree.ElementTree as ET

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BOND = 22.0          # ChemDraw 的标准键长，用来定比例
PAD = 14.0
FS = 13.0            # 标签字号（SVG 用户单位）
GAP = 13.0           # 有标签的原子，键要留出来的空档（跟着 SCALE 一起放大过）


def label_of(n):
    t = n.find('t')
    if t is None:
        return ''
    return ''.join((s.text or '') for s in t.findall('s')).strip()


def parse(path):
    root = ET.parse(path).getroot()
    out = []
    for fr in root.findall('.//fragment'):
        atoms, bonds = {}, []
        for n in fr.findall('n'):
            p = (n.get('p') or '').split()
            if len(p) != 2:
                continue
            atoms[n.get('id')] = {'x': float(p[0]), 'y': float(p[1]), 'lab': label_of(n)}
        for b in fr.findall('b'):
            B, E = b.get('B'), b.get('E')
            if B in atoms and E in atoms:
                bonds.append({'a': B, 'b': E, 'o': int(b.get('Order') or 1),
                              'd': b.get('Display') or ''})
        if atoms:
            out.append({'atoms': atoms, 'bonds': bonds})
    return out


def shrink(x1, y1, x2, y2, g1, g2):
    """两端各缩进一点，免得线压在字上。"""
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy) or 1.0
    ux, uy = dx / L, dy / L
    return (x1 + ux * g1, y1 + uy * g1, x2 - ux * g2, y2 - uy * g2)


SCALE = 1.75        # ⚠ 2026-09-23 看了第一版截图之后加的：原尺寸下开链分子的标签糊成一团


def label_dir(fr, aid):
    """这个原子上所有键的**平均方向**，标签要往它的**反方向**挪 —— 不然压在键上。"""
    A = fr['atoms']
    a = A[aid]
    dx = dy = 0.0
    for b in fr['bonds']:
        other = b['b'] if b['a'] == aid else (b['a'] if b['b'] == aid else None)
        if other is None:
            continue
        o = A[other]
        L = math.hypot(o['x'] - a['x'], o['y'] - a['y']) or 1.0
        dx += (o['x'] - a['x']) / L
        dy += (o['y'] - a['y']) / L
    L = math.hypot(dx, dy)
    if L < 1e-6:
        return (0.0, 0.0)
    return (-dx / L, -dy / L)


# ⚠ 2026-09-23 她：「最重要的还是那种**标上了颜色的成键**，不然我记不住。」
# 所以键不能全是黑的 —— 要让「这一步动了哪儿」用颜色说出来。
# 先做能**自动判**的两层（不靠我猜，靠连接关系判）：
#   · 磷酸基 P 以及它身上的键、还有 C–O–P 那根酯键  → 橙
#     （糖酵解整条线的故事就是「磷酸往哪跑」，这一层一上颜色，六张图立刻能串起来）
#   · 羰基 C=O                                    → 蓝
#     （醛还是酮、在 C1 还是 C2，决定它是葡萄糖还是果糖）
# 剩下「这一步断了哪根键」需要逐步指定，那是下一层，不自动猜。
COL_P = '#d35400'      # 橙 · 磷酸与磷酸酯键
COL_CO = '#1f6feb'     # 蓝 · 羰基
COL_DEF = 'currentColor'


def classify(fr):
    """每根键该是什么颜色 —— 只用连接关系判，不猜。"""
    A = fr['atoms']
    col = {}
    for k, b in enumerate(fr['bonds']):
        l1 = A[b['a']]['lab'].upper()
        l2 = A[b['b']]['lab'].upper()
        labs = {l1, l2}
        if 'P' in labs:
            col[k] = COL_P                      # 直接连在 P 上的键
        elif b['o'] == 2 and ('O' in labs):
            col[k] = COL_CO                     # C=O
        else:
            col[k] = COL_DEF
    # C–O–P：氧一边连 P、一边连碳，那根 C–O 也算磷酸酯的一部分
    onP = set()
    for b in fr['bonds']:
        if A[b['a']]['lab'].upper() == 'P':
            onP.add(b['b'])
        if A[b['b']]['lab'].upper() == 'P':
            onP.add(b['a'])
    for k, b in enumerate(fr['bonds']):
        if col[k] != COL_DEF:
            continue
        if (b['a'] in onP and A[b['a']]['lab'].upper() == 'O') or            (b['b'] in onP and A[b['b']]['lab'].upper() == 'O'):
            col[k] = COL_P
    return col


def to_svg(fr, title='', numbers=None):
    """numbers: {原子id: '1'} —— 她要的「标出 C2」就是靠这个叠上去。"""
    A = fr['atoms']
    for a in A.values():
        a['x'] *= SCALE
        a['y'] *= SCALE
    xs = [a['x'] for a in A.values()]
    ys = [a['y'] for a in A.values()]
    w = max(xs) - min(xs) + 2 * PAD
    h = max(ys) - min(ys) + 2 * PAD + (18 if title else 0)
    ox, oy = min(xs) - PAD, min(ys) - PAD + (18 if title else 0)
    P = []
    COL = classify(fr)
    if title:
        P.append('<text x="%.1f" y="12" class="ttl">%s</text>' % (PAD, esc(title)))
    for bi, b in enumerate(fr['bonds']):
        c = COL[bi]
        # ⚠ 必须用内联 style，不能用 stroke= —— <style> 里的 line{stroke:currentColor}
        # 优先级高于 presentation attribute，会把颜色盖掉。第一版就栽在这儿。
        sty = '' if c == COL_DEF else (' style="stroke:%s"' % c)
        a1, a2 = A[b['a']], A[b['b']]
        g1 = GAP if a1['lab'] else 1.5
        g2 = GAP if a2['lab'] else 1.5
        x1, y1, x2, y2 = shrink(a1['x'] - ox, a1['y'] - oy, a2['x'] - ox, a2['y'] - oy, g1, g2)
        if b['o'] == 2:
            dx, dy = x2 - x1, y2 - y1
            L = math.hypot(dx, dy) or 1.0
            nx, ny = -dy / L * 1.9, dx / L * 1.9
            for s in (1, -1):
                P.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"%s/>'
                         % (x1 + nx * s, y1 + ny * s, x2 + nx * s, y2 + ny * s, sty))
        elif b['o'] == 3:
            P.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"%s/>' % (x1, y1, x2, y2, sty))
            dx, dy = x2 - x1, y2 - y1
            L = math.hypot(dx, dy) or 1.0
            nx, ny = -dy / L * 2.6, dx / L * 2.6
            for s in (1, -1):
                P.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"%s/>'
                         % (x1 + nx * s, y1 + ny * s, x2 + nx * s, y2 + ny * s, sty))
        elif b['d'] in ('WedgeBegin', 'WedgedHashBegin', 'Wedge', 'Hash'):
            dx, dy = x2 - x1, y2 - y1
            L = math.hypot(dx, dy) or 1.0
            nx, ny = -dy / L * 2.8, dx / L * 2.8
            P.append('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f" class="wg"/>'
                     % (x1, y1, x2 + nx, y2 + ny, x2 - nx, y2 - ny))
        else:
            P.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"%s/>' % (x1, y1, x2, y2, sty))
    for aid, a in A.items():
        if a['lab']:
            ux, uy = label_dir(fr, aid)
            px = a['x'] - ox + ux * 4.5
            py = a['y'] - oy + uy * 4.5 + FS * 0.35
            anc = 'middle'
            if ux > 0.45:
                anc = 'start'
            elif ux < -0.45:
                anc = 'end'
            fill = ''
            lu = a['lab'].upper()
            if lu == 'P' or (lu in ('O', 'OH') and any(
                    (A[b['a']]['lab'].upper() == 'P' and b['b'] == aid) or
                    (A[b['b']]['lab'].upper() == 'P' and b['a'] == aid)
                    for b in fr['bonds'])):
                fill = ' fill="%s"' % COL_P
            P.append('<text x="%.1f" y="%.1f" class="at" text-anchor="%s"%s>%s</text>'
                     % (px, py, anc, fill, esc(a['lab'])))
        if numbers and aid in numbers:
            P.append('<text x="%.1f" y="%.1f" class="num">%s</text>'
                     % (a['x'] - ox + 6, a['y'] - oy - 6, esc(numbers[aid])))
    css = ('line{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}'
           '.wg{fill:currentColor}'
           '.at{font:600 %.0fpx system-ui,sans-serif;fill:currentColor}'
           '.ttl{font:600 12px system-ui,sans-serif;fill:currentColor;opacity:.75}'
           '.num{font:700 10px system-ui,sans-serif;fill:#c0392b}') % FS
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %.0f %.0f" '
            'width="%.0f" height="%.0f" role="img"><style>%s</style>%s</svg>'
            % (w, h, w, h, css, ''.join(P)))


def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    if not args:
        print(__doc__)
        return 2
    src = args[0]
    frs = parse(src)
    only = '--list' in sys.argv
    outdir = None
    if '--out' in sys.argv:
        outdir = sys.argv[sys.argv.index('--out') + 1]
    print('%s：%d 个片段' % (os.path.basename(src), len(frs)))
    made = 0
    for k, fr in enumerate(frs):
        labs = [a['lab'] for a in fr['atoms'].values() if a['lab']]
        kind = '文字' if len(fr['atoms']) == 1 else '结构'
        print('  #%-2d %-4s 原子 %-3d 键 %-3d  %s'
              % (k, kind, len(fr['atoms']), len(fr['bonds']), ' '.join(labs[:8])))
        if only or not outdir or len(fr['atoms']) < 3:
            continue
        os.makedirs(outdir, exist_ok=True)
        p = os.path.join(outdir, '%02d.svg' % k)
        io.open(p, 'w', encoding='utf-8', newline='\n').write(to_svg(fr))
        made += 1
    if outdir and not only:
        print('写了 %d 个 SVG 到 %s' % (made, outdir))
    return 0


if __name__ == '__main__':
    sys.exit(main())
