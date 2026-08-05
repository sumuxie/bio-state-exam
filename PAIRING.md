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
| 3.1, 3.2 | 九. 酶通论 (pp.47–52) | mapped |
| 3.3.1 – 3.3.3, 3.4, 3.5 | 十. 酶促反应动力学 (pp.53–62) | mapped |
| 3.6, 3.7 | 十一. 酶的作用机理及酶的调节 (pp.63–76) | mapped |

The Chinese notes cover sugars (二) and lipids (三) between the introduction and
amino acids; those correspond to textbook chapters beyond ch. 3 and will attach
to topic nodes added later.

### Nucleic acids / protein synthesis (ch. 4) — pre-scouted, not yet wired up

A background search (2026-08-03) covering notes volumes 4–16 (pp.46–230) found:

| Notes topic | Title | Pages | Likely ch.4 sections |
|---|---|---|---|
| 十三 | 核酸通论 | pp.83–86 | 4.1 |
| 十四 | 核酸的结构 | pp.87–90 | 4.1.2, 4.1.3 |
| 十五 | 核酸的物理化学性质 | pp.91–94 | adjacent/bonus |
| 十六 | 核酸研究方法 | pp.95–98 | adjacent/bonus, likely no CZ counterpart |

Important: **DNA replication, transcription and translation exist in the notes but
carry no Chinese-numeral topic header at all.** The numbered exam-topic list runs
一 through 二十七 and ends around p.180 (二十七 = 核苷酸的降解及核苷酸代谢); everything
from p.181 on (antibiotics, hormones, photosynthesis, DNA recombination,
transposons, and — critically — DNA replication p.211–212, transcription
p.212–217, translation p.223–224) is titled but unnumbered, read as appendix
material the student added beyond the core 27-topic list. Do not invent a
"二十八"-style number for this content — cite it as `{ topic: null, title:
"DNA的复制, 笔记无编号 pp.211–212, 27个主题之外的补充内容", status: "mapped" }`
(or equivalent), honest about the page location without a numeral that was never
written. No dedicated post-translational-modification topic was found anywhere
in the 230 pages — leave §4.3.x `cnNote.status` as `"pending"` rather than force
a match to the scattered, non-general mentions that do exist (covalent
modification under 十一 pp.71–73; ubiquitin-proteasome under 二十五 p.161;
protein trafficking tacked onto the unnumbered translation section p.224).

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
