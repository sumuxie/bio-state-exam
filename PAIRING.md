# How the Czech textbook and the Chinese notes get paired

## The problem

The two source documents are organised on incompatible principles, so neither
page numbers nor chapter numbers can align them.

| | `Biochemie.pdf` (Czech textbook) | `生物化学笔记.pdf` (Chinese notes) |
|---|---|---|
| Structure | Textbook order: general principles → amino acids/proteins → enzymes → … | Exam-question order, numbered 一、二、三… |
| Granularity | Numbered sections (1.1, 2.2.3, 3.3.1) | One block per exam topic |
| Sequence | Amino acids in ch. 2; sugars and lipids much later | 二.糖类 and 三.脂质 come *before* 四.氨基酸 |
| Text layer | None — scanned, needs OCR | None — scanned handwriting, OCR is useless on it |

Because the Chinese notes were written against the *oral exam question list* and
the textbook was written as a textbook, a page-to-page or chapter-to-chapter
mapping does not exist. Sugars sit at position 2 in the notes and somewhere in
the second half of the book.

## The solution: one topic index, two sources hanging off it

Neither document is the spine. The spine is a list of **topic nodes**, and both
sources attach to it:

```
topic node  ──┬── czRef   : chapter, section number, page range, coverage flag
              ├── cnNote  : which numbered Chinese topic covers this
              ├── notes   : CN + EN summary, point-by-point, glossary
              └── practice: quiz bank, oral model answer, checklist
```

That lives in `data/ch1.js`, `data/ch2.js`, `data/ch3.js` as
`window.BIOCHEM.topics`. The app reads nothing else — add a topic there and it
appears in the sidebar, the flashcard deck, the question bank and the oral
simulator automatically.

### Node shape

```js
{
  id: "3-5",                    // stable key, used by localStorage progress
  chapter: 3, section: "3.5",
  czTitle / enTitle / cnTitle,  // Czech section heading + both translations
  pages: [59, 60, 61],
  coverage: "full" | "partial", // is every page verified against a scan?
  coverageNote: "...",          // names the exact gap when partial
  cnNote: { topic: "四", title: "氨基酸", status: "mapped"|"partial"|"pending" },
  summary: { en, cn },
  points:    [ { cz?, en, cn } ],   // cz = the Czech term the point anchors to
  gapPoints: [ { en, cn } ],        // NOT from the book — see below
  terms:     [ { cz, en, cn, def_en, def_cn } ],
  quiz:      [ mcq | short ],
  oral:      { q_en, q_cn, model_en, checklist[] }
}
```

## Current mapping

| CZ sections | Chinese note topic | Status |
|---|---|---|
| 1.1 – 1.6 | 一. 序论 | mapped |
| 2.1.1 – 2.1.3 | 四. 氨基酸 | mapped |
| 2.1.4, 2.2.1 | 五. 蛋白质一级结构 | mapped |
| 2.2.2 – 2.2.4 | 六. 蛋白质三维结构 | mapped |
| 2.2.5 – 2.2.6 | 七. 结构与功能关系 | partial |
| 3.1 – 3.7 | *number not yet confirmed* | pending |

The Chinese notes cover sugars (二) and lipids (三) between the introduction and
amino acids; those correspond to textbook chapters beyond ch. 3 and will attach
to topic nodes added later.

## The honesty rule

Content is never presented as coming from the textbook unless it was read off a
page image. Three mechanisms enforce this:

- **`coverage: "full"`** — every page in `pages` was verified against its scan.
- **`coverage: "partial"`** + `coverageNote` — names exactly which pages were
  missing from the extraction.
- **`gapPoints`** — standard course material filling a gap. Rendered in a
  separate dashed block badged *verify against the book*, never mixed into the
  verified points.

Of 25 topics, 13 are fully verified and 12 are partial, with 10 gap-flagged
points in total.

### Why this matters — OCR was materially wrong

Content was calibrated by reading the page PNGs directly rather than trusting
`extracted_raw/ch1_3_summary.txt`. Errors the raw OCR contained:

| Page | OCR said | Book actually says |
|---|---|---|
| 61 | urease accelerates urea hydrolysis **10×** | **10¹⁴×** |
| 11 | Tab. 1.2 body/crust composition — **entire table missing** | full O/C/H/Ca/Si/Al figures in mass % and atomic % |
| 58 | `1 kat = 6 + 10 U` | **1 kat = 6·10⁷ U** |
| 37 | protein M_r ranges garbled | 10⁴–10⁶, **viruses to 10⁷** |
| 36 | phosvitin `10*` phosphate residues | **10²** |
| 24 | pI formula mangled beyond recovery | pI = (pK₁ + pK₂)/2 |
| 43 | Tab. 3.1 coenzyme/vitamin pairs garbled | re-read in full from the image |
| 10 | Obr. 1.1 scale markers all rendered `10? m` | 10⁻⁹, 10⁻⁶, 10⁻³, 10³ m |

A 13-order-of-magnitude error on a classic exam fact is the kind of thing that
costs marks, which is why nothing goes in unverified.

## Textbook-specific conventions worth memorising

This book differs from most English texts, and the exam follows *this* book:

- Kinetics uses **V_lim**, not V_max, and **[A]** for substrate; the scheme is
  **E + A ⇌ EA → E + X**, so product is X, not P.
- **Macrobiogenic elements are H, O, C, N, P** — sulfur is *oligobiogenic*.
  The CHNOPS mnemonic gives the wrong answer here.
- **Primary structure includes the placement of disulfide bridges.**
- Proteins are chains of **more than 100 residues**; oligopeptide ≤ 10.

These are flagged inline in the quiz explanations where a student trained on
English textbooks would otherwise answer wrongly.

## Adding the Chinese notes

The handwritten notes are **not** in this repository — `.gitignore` excludes
`*.pdf`, and at 501 MB the file would not belong in git anyway. They also
cannot be OCR'd: the pages are handwriting, which defeats OCR entirely. They
*can* be read directly as page images by a vision model, which is how the topic
index above was derived.

To attach note content to a topic node:

1. Render the relevant note pages to PNG.
2. Read them and transcribe into the node's `cnNote` block, adding
   `pages: [...]` and setting `status: "mapped"`.
3. Where the notes contradict the textbook, keep both and mark the difference —
   the notes are a student's reconstruction and the textbook is what the
   examiner set.

## Running it

Plain static files, no build step and no dependencies. Open `index.html`
directly, or serve the folder:

```
python3 -m http.server 8000
```

Progress (topics studied, Leitner boxes, best quiz scores) lives in
`localStorage`, so it is per-browser and survives reloads.
