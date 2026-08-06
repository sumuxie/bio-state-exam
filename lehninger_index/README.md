# `lehninger_index/` — the Lehninger 8 index

Output of `HANDOFF_LEHNINGER.md` §9 steps 1–3. All read-only with respect to the two apps:
nothing in `biochemie_pro/` or `biochemie_basic/` was touched. Regenerate with
`scripts/step1_outline.py` → `step2_bridge.py` → `step2b_verify.py` → `step3_czech.py` →
`step3_master.py` (Python 3.12, PyMuPDF + esprima, both already installed).

| file | what it is |
|---|---|
| `lehninger_toc.tsv` | **step 1+2.** All 879 outline entries: chapter, section, sub-heading, printed page in A, pdf page in B. This is the day-to-day lookup file. |
| `lehninger_B_toc.json` | same, plus a per-chapter block |
| `lehninger_AB_anchors.json` | the 713 FIGURE/TABLE/BOX anchors the A↔B map is built from |
| `master_map.tsv` / `.json` | **step 3.** One row per Czech section (113): its pages, its node ids, the Lehninger sections it corresponds to, and where to read them in A and in B. |
| `depth_queue.tsv` / `.json` | Lehninger sections ranked by how much more they say than the Czech book. Read `HANDOFF_LEHNINGER.md` §9a before using the ratio. |
| `lehninger_only_scope.tsv` | the 32 Lehninger sections with no Czech counterpart, each tagged `full` / `brief` / `depth-layer-ASK` per the user's 2026-08-06 ruling (§9b) |
| `cz_organic_load.json` | organic-chemistry vocabulary density per Czech section — which sections §5's rule has to carry (§5a) |
| `cz_skeleton.json` | the 113 Czech sections — the skeleton settled in §8 |
| `cz_nodes.json` | the 207 existing Czech nodes, parsed out of `biochemie_pro/data/ch*.js` |
| `cz_to_lehninger_proposed.json` | the automatic matcher's independent proposal, kept as the cross-check evidence for `master_map` |
| `scripts/locate.py` | reusable: given a phrase, says which Lehninger section it lives in and which page of A to open |
| `_step*.txt` | the run reports, including every check and its result |

The Czech→Lehninger column in `master_map.tsv` was written by hand and then cross-checked
against `step3_match.py`, which proposes the same mapping from term-hit density and heading
overlap with no knowledge of it. **The two agree on 74 of 113 sections (65 %).** Every
disagreement is listed in `_step3_report.txt`; 15 of them had a confident automatic proposal
and are the ones worth a second opinion. Treat the column as good but not audited.

**`_B_text.pkl` is a 5.7 MB cache of Lehninger's full text — do not commit it.** It is a
search index for `locate.py` and nothing else reads it. Delete it freely; it rebuilds in ~60 s.

## Facts established here — do not re-derive

- **A's printed page = A's pdf page − 36.** Constant, measured on 612 pages.
- **B's outline is not shaped the way `HANDOFF_LEHNINGER.md` §9 assumed.** Level 1 holds the
  three *Parts* (plus chapter 1 and the back matter); chapters 2–28 sit at level 2. Reading
  level 1 as "chapter" gives 11 chapters, not 28.
- **A's text layer is OCR of a scan**, not digital text — `dehy:Jrogenase`, `lnternembrane`.
  Never string-match prose against A. Search B, then convert the page.
- **The A↔B map is accurate to about one page**: 113 of 114 numbered section headings were
  found in A within ±3 pages of where the map predicted, 79 % exactly and 99 % within ±1.
  Leave-one-out error on the anchors themselves: median 0.40 pages, p99 2.24, max 3.
- **The glyoxylate cycle is in §20.6 in the 8th edition** (A pp.735–736, "…in Germinating
  Seeds"), not in chapter 16. This is the pairing Czech §6.2.3 has had as `"pending"`.
- **Lehninger never names Hatch or Slack.** Czech node `9-21`'s flagged 1970 date cannot be
  arbitrated from this book.
- **Lehninger says "isoprenoid", never "terpene"** (0 in-chapter hits). Czech §8.2.4's
  "terpeny (isoprenoidy)" maps to §21.4.
- **§6's documented absences re-confirmed, and five more found:** `Beer-Lambert`, `Beer's law`,
  `molar extinction coefficient`, `molar absorption coefficient`, **`ninhydrin`**, `Merrifield`,
  **`sedimentation coefficient`**, `colloid`, `creationism` / `intelligent design` — 0 hits each.
  `Tyndall` appears in the index only. This strands Czech §2.1.3 and §2.2.6; see
  `HANDOFF_LEHNINGER.md` §5a and §6.
- **`locate.py` reports Glossary/Index hits separately as `(outside chapters)`.** It has to:
  the back matter is 460 pages of a 1252-page file, and before the section upper bound was
  added, every single query appeared to have a large hit in §28.3.

## Known limitations

- **The mapping is proposed, not verified.** 65 % agreement between the hand map and the
  automatic matcher is reassuring, not proof. Nobody has opened a Lehninger page and confirmed
  it discusses what the Czech section discusses. Do that for a section before writing depth
  content against it.
- **`depth_queue`'s ratio is relative.** See `HANDOFF_LEHNINGER.md` §9a. The Czech sections'
  page ranges overlap, so it is a ranking, never a page count.
- **Five Czech sections have no glossary term that appears anywhere in Lehninger** — 1.6
  Origin and evolution of life, 2.1.3 Chemical reactions of amino acids, 2.2.6 Properties of
  proteins, 7.2.1 Sugar esters, 8.5.1 Chemical composition. Their rows rest on the title match
  alone and are the weakest in the table.
- An earlier `master_topic_map.tsv` built on the 27 Chinese-notes topics was **deleted**, not
  kept: the user settled the skeleton as the Czech TOC (§8), and leaving two master tables with
  different row spaces around is how a later session picks the wrong one.
