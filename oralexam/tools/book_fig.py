# -*- coding: utf-8 -*-
"""从 Biochemie.pdf 里取图，裁成卡上能用的图片。

为什么有这个工具（2026-09-14 Ruojin）：「其实书里有图就不用画了」。
书有图就用书的图——那是老师手里那本书上的样子，她考场上认的就是这个。
书里没有的才自己画（内联 SVG，见 app/index.html 的 figBody）。

页码约定：pNNN.txt 就是 PDF 的第 NNN 页（1 基），见 tools/ocr_book.py。

跑法：
    python tools/book_fig.py 73                      # 整页渲染到 scratch，先看
    python tools/book_fig.py 73 --box 0.08,0.34,0.62,0.68 --out p073_obr48_grooves.jpg
        --box 是页面比例 x0,y0,x1,y1，左上角是 0,0
        --out 只给文件名，落到 app/img/
    python tools/book_fig.py 73 --dpi 300            # 要更清楚就加 dpi
"""
import os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import fitz

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PDF = os.path.abspath(os.path.join(ROOT, '..', 'Biochemie.pdf'))
IMG = os.path.join(ROOT, 'app', 'img')

def main():
    a = sys.argv[1:]
    if not a:
        print(__doc__); return 1
    page = int(a[0])
    dpi = 200
    box = None
    out = None
    for i, x in enumerate(a):
        if x == '--dpi': dpi = int(a[i+1])
        if x == '--box': box = [float(v) for v in a[i+1].split(',')]
        if x == '--out': out = a[i+1]
    if not os.path.exists(PDF):
        print('找不到 %s' % PDF); return 1
    d = fitz.open(PDF)
    if not (1 <= page <= d.page_count):
        print('页码超范围，PDF 共 %d 页' % d.page_count); return 1
    p = d[page-1]
    r = p.rect
    clip = None
    if box:
        x0, y0, x1, y1 = box
        clip = fitz.Rect(r.x0 + x0*r.width, r.y0 + y0*r.height,
                         r.x0 + x1*r.width, r.y0 + y1*r.height)
    pix = p.get_pixmap(dpi=dpi, clip=clip)
    if out:
        os.makedirs(IMG, exist_ok=True)
        path = os.path.join(IMG, out)
        if out.lower().endswith(('.jpg', '.jpeg')):
            pix.pil_save(path, quality=88, optimize=True)
        else:
            pix.save(path)
        print('写好 %s · %d×%d · %.0f KB' % (path, pix.width, pix.height,
                                            os.path.getsize(path)/1024))
    else:
        scratch = os.environ.get('SCRATCH') or os.path.join(ROOT, '..', '_scratch')
        os.makedirs(scratch, exist_ok=True)
        path = os.path.join(scratch, 'page%03d.png' % page)
        pix.save(path)
        print('整页写到 %s · %d×%d' % (path, pix.width, pix.height))
    return 0

if __name__ == '__main__':
    sys.exit(main())
