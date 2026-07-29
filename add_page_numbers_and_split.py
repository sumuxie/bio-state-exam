# -*- coding: utf-8 -*-
"""
给《生物化学笔记.pdf》每页右下角加页码，并按 15 页一份切分。

原始 PDF 是 230 页手写笔记扫描件（每页一张 ~600 DPI 的 JPEG，没有文字层）。
部分页面的笔迹一直写到右下角，所以页码不直接盖在页面上，而是在每页下方
新增一条白色页脚条，页码写在页脚条右侧 —— 这样保证 230 页里没有任何一笔
笔记被遮住。

页码使用整本书的连续编号（1–230），切分后依然保留原始页号，方便交叉引用。
输出的 PDF 复用原始 JPEG 数据，不重新编码，因此不损失画质。

用法：
    python add_page_numbers_and_split.py
"""
import os
import sys
import io

import fitz  # PyMuPDF

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "生物化学笔记.pdf")
OUT_DIR = os.path.join(HERE, "生物化学笔记_分卷")

PAGES_PER_FILE = 15
STRIP = 24          # 页脚条高度 (pt)
FONT = "helv"
FONT_SIZE = 11


def add_footer(new_page, label):
    """在页脚条右侧写页码，并画一条淡灰色分隔线。"""
    r = new_page.rect
    new_page.draw_line(
        fitz.Point(r.x0 + 18, r.y1 - STRIP + 6),
        fitz.Point(r.x1 - 18, r.y1 - STRIP + 6),
        color=(0.80, 0.80, 0.80), width=0.6,
    )
    tw = fitz.get_text_length(label, fontname=FONT, fontsize=FONT_SIZE)
    new_page.insert_text(
        (r.x1 - 20 - tw, r.y1 - 7), label,
        fontname=FONT, fontsize=FONT_SIZE, color=(0.15, 0.15, 0.15),
    )


def main():
    if not os.path.exists(SRC):
        sys.exit("找不到源文件: %s" % SRC)

    os.makedirs(OUT_DIR, exist_ok=True)
    src = fitz.open(SRC)
    total = src.page_count
    n_chunks = (total + PAGES_PER_FILE - 1) // PAGES_PER_FILE
    print("源文件 %d 页 -> 每 %d 页一份, 共 %d 份" % (total, PAGES_PER_FILE, n_chunks))
    print("输出目录: %s\n" % OUT_DIR)

    written = []
    for idx in range(n_chunks):
        first = idx * PAGES_PER_FILE            # 0-based
        last = min(first + PAGES_PER_FILE, total) - 1
        out = fitz.open()

        for pno in range(first, last + 1):
            r = src[pno].rect
            page = out.new_page(width=r.width, height=r.height + STRIP)
            # 把原页整页贴到新页顶部，底部留出页脚条
            page.show_pdf_page(fitz.Rect(0, 0, r.width, r.height), src, pno)
            add_footer(page, str(pno + 1))      # 连续页码，1-based

        # 让 PDF 阅读器的页码框也显示原书页号
        try:
            out.set_page_labels([{"startpage": 0, "prefix": "", "style": "D",
                                  "firstpagenum": first + 1}])
        except Exception:
            pass  # 旧版 PyMuPDF 没有这个 API，不影响页面上的页码

        name = "生物化学笔记_%02d_p%03d-%03d.pdf" % (idx + 1, first + 1, last + 1)
        path = os.path.join(OUT_DIR, name)
        out.save(path, garbage=4, deflate=True)
        out.close()

        mb = os.path.getsize(path) / 1024 / 1024
        written.append((name, last - first + 1, mb))
        print("  [%2d/%d] %s  (%d 页, %.1f MB)" % (idx + 1, n_chunks, name,
                                                   last - first + 1, mb))

    src.close()
    total_mb = sum(m for _, _, m in written)
    total_pages = sum(p for _, p, _ in written)
    print("\n完成: %d 个文件, 共 %d 页, %.1f MB" % (len(written), total_pages, total_mb))


if __name__ == "__main__":
    main()
