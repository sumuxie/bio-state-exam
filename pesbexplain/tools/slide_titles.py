# -*- coding: utf-8 -*-
"""Print the first line of every slide in a deck, to check `slides:` citations.

    python tools/slide_titles.py L9A
    python tools/slide_titles.py            # list the known decks

This is the tool that caught the citation errors recorded in §11. The `slides:`
field in every node was assumed correct until 2026-08-06; it turned out that
**L2, L7/L8, L11 and L12 are right, while L1, L3, L4, L5, L9-A and L9-B are
wrong** — drifting by up to 9 slides. Because attach_figures.py reads that field
to decide which pictures to attach, wrong citations put wrong figures on nodes.

Run this against the deck before trusting any citation in a chapter you are
about to work on, and read the output against the node titles.
"""
import io, os, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

PDF_DIR = r'C:\Users\Admin\Downloads\PESB\pdf'
DECKS = {
    'L1':  'PESB_#1.pdf',
    'L2':  'PESB_#2.pdf',
    'L3':  'PESB_#3.pdf',
    'L4':  'PESB_#4.pdf',
    'L5':  'PESB_#5.pdf',
    'L78': 'PESB_2025_#78.pdf',            # Lectures 7 and 8 share one deck
    'L9A': 'PEPSB_#9_Diversity.pdf',
    'L9B': 'PESB_#9_screenselect (1).pdf',
    'L11': 'PESB_#11_minimal cells.pdf',
    'L12': 'PESB_#12_metabolic engineering.pdf',
}

if len(sys.argv) < 2:
    print('known decks:', ', '.join(DECKS))
    print(__doc__)
    sys.exit(0)

try:
    import fitz  # PyMuPDF
except ImportError:
    sys.exit('PyMuPDF (fitz) is required: pip install pymupdf')

for label in sys.argv[1:]:
    if label not in DECKS:
        print(f'unknown deck {label!r}; known: {", ".join(DECKS)}')
        continue
    path = os.path.join(PDF_DIR, DECKS[label])
    doc = fitz.open(path)
    print('=' * 24, label, DECKS[label], doc.page_count, 'pages')
    for p in range(doc.page_count):
        lines = [x.strip() for x in doc[p].get_text().split('\n') if x.strip()]
        head = lines[0] if lines else '(no text)'
        rest = ' / '.join(x for x in lines[1:6] if x != '•')
        print('%-4s %s%s' % (p + 1, head[:52], (' | ' + rest[:60]) if rest else ''))
