# Handoff — the Lehninger phase

Written 2026-08-06 at the end of a session that ran out of context. Companion to `HANDOFF.md`
(which covers the Czech-textbook app itself). **Read `HANDOFF.md` §0 and §11 first**, then this.

This file exists because the previous phase of this project already lost a handoff once by
passing it as chat context instead of committing it as a file — see `HANDOFF.md` §5. Keep this
file committed and current.

---

## 0. URGENT — uncommitted work is sitting in this repo right now

`git log -1` says `d93f68d Finish chapter 8 content`. But the working tree contains a whole
finished chapter 9 and chapter 10 that are **NOT committed**:

```
 M .github/workflows/pages.yml     <- ch9+ch10 added to the validate job
 M HANDOFF.md                      <- ~200 lines of new status, §9a, §9b
 M app.js                          <- CHAPTER_TITLES 9+10, both [1..10] literals
 M index.html                      <- two new <script> tags
?? data/ch9.js                     <- 27 nodes, pp.202-217, ~4000 lines
?? data/ch10.js                    <- 26 nodes, pp.218-228, ~4000 lines
?? verify_crops/                   <- scratch, do NOT commit
?? extracted_toc/, extracted_full_ch*/  <- page images, do NOT commit
```

**Do not `git clean`, do not `git checkout .`, do not `git reset --hard`.** Two chapters of
work are only in the working tree. The user was asked whether to commit and had not answered
when the session ended, so committing is still **their** decision — ask before you push
(`HANDOFF.md` §7: publishing is a separate permission from doing the work).

State of that work: **validated, not committed.** 207 topics site-wide, book pages 8–228
covered with no gaps, 0 schema problems, 0 duplicate ids, wiring consistent across all four
files. Method in `HANDOFF.md` §9a.

Outstanding debt from that phase, unchanged: **chapter 7 has never been verified by a second
reader against the scans** (42 nodes, 28 pages, images in `extracted_full_ch7/`). That is
still the single largest open item on the Czech book.

---

## 0a. DIRECTIVE (user, 2026-08-06): freeze the finished site, work on a copy

Verbatim instruction: **"现在做好的网站不要动，命名为 biochemie_basic，复制一个网站命名为
biochemie_pro，在这个网站上动手"**.

So:

- **`biochemie_basic`** = the current, finished Czech-textbook site (chapters 1–10, 207 nodes).
  **Frozen. Do not modify it.** It is the working revision the user can rely on for the exam.
- **`biochemie_pro`** = a copy, and **all Lehninger work happens there**. Everything in §3–§6 of
  this file targets `biochemie_pro`, not the original.

### Do this in the right order, and mind the `.git` trap

1. **Commit chapters 9–10 first** (§0), once the user approves. Copying a dirty tree gives you
   two dirty trees and it becomes impossible to tell which copy is authoritative.
2. Only then make the copy.

**The trap:** this is a git repo with a live remote — `https://github.com/sumuxie/bio-state-exam.git`
— and GitHub Pages deploys the live site from `main` (`HANDOFF.md` §7). A naive
`cp -r bio-state-exam biochemie_pro` copies `.git` too, so **both folders would push to the same
remote and could clobber each other**. Decide the hosting model deliberately:

| option | how | trade-off |
|---|---|---|
| **(a) two separate GitHub repos** | `git remote set-url` in the copy, new repo for pro | cleanest; two independent live URLs; recommended if both should be visitable |
| (b) one repo, two branches | pro on its own branch | **Pages only deploys `main`** per §7 — pro would not be live without changing the workflow |
| (c) one repo, two subdirectories | `biochemie_basic/` and `biochemie_pro/` side by side | one deploy, two subpaths; simplest to keep in sync; but the two `app.js` copies then diverge inside one repo |

**Do not choose this silently — ask the user.** The question to put to them is just: *should
both sites be live on the internet, or is `biochemie_pro` a local working copy for now?* That
answer picks the option.

Whichever is chosen, note the cost already documented at `HANDOFF.md` §4a from the `PESB/` fork:
once `app.js` and `style.css` exist in two places, a fix in one does **not** propagate to the
other, and someone has to port it by hand. If `biochemie_pro` is where all future work happens,
that cost is acceptable — but write down which file is the source of truth for shared code.

---

## 1. Where the files are

```
repo / app          C:\Users\Admin\Downloads\bio-state-exam\
Czech textbook      C:\Users\Admin\Downloads\bio-state-exam\Biochemie.pdf   (gitignored)
Chinese notes       C:\Users\Admin\Downloads\bio-state-exam\生物化学笔记.pdf  (+ _分卷\)
Lehninger PDFs      C:\Users\Admin\Downloads\lehninger书\
```

Three PDFs in `lehninger书\`, and **they are not interchangeable** — each has a different job:

| ref | filename | size / pages |
|---|---|---|
| **A** | `LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf` | 1135 MB / **1252 p** |
| **B** | `LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf` | 52 MB / 4893 p |
| **C** | `Lehninger生物化学原理（第3版）(DavidL.NelsonMichaelM.Cox).pdf` | 138 MB / 1080 p |

There is also a stray duplicate of **B** at `C:\Users\Admin\Downloads\` (same file, moved not
copied at some point — check before assuming which one is canonical).

---

## 2. Verified facts about the three PDFs — measured, do not re-derive

All of this was measured with PyMuPDF this session. Reproduce with the snippet in §7 if you
doubt it, but do not spend a session rediscovering it.

| | A (1252 p) | B (4893 p) | C (1080 p) |
|---|---|---|---|
| page size | 612×792 pt = 8.5×11 in (US Letter, **real print layout**) | 595×842 pt = A4 (reflowed ebook) | 595×842 pt = A4 |
| text layer | ✅ median **4555 chars/page** | ✅ median **1020 chars/page**, clean digital text | ❌ **median 0 — none at all** |
| figures | ✅ 1252 images, **all ≥600×400 px** (one full-page image per page) | ❌ 3558 image objects but median **43×28 px** (inline glyphs); **only 2** ≥600×400 | ✅ 1080 full-page scans |
| outline | 29 entries (chapter level only) | ✅ **879 entries, three levels** (chapter → section → sub-heading) | ❌ 0 |
| total text | — | **5,803,906 chars ≈ 967,000 words** | — |

### The three findings that matter

**(a) "4893 pages" is an artefact, not a workload.** B is a reflowed ebook: A4 pages at large
font, ~170 words per page against a real textbook page's ~800. 967k words total = the complete
text of a ~1250-page book. A confirms it: 1252 pages at 4555 chars each. **The book is ~1250
pages, not 4893.** The user was badly demoralised by that number; it is wrong.

**(b) B has no figures at all.** This is why an earlier version of the advice ("read Lehninger
figures first") was briefly retracted. With A now available, **that advice is back on** — A has
every figure. But note what survived in B: the **figure legends are present in full as text**,
and they are unusually rich. Sampled legend from p.2401 of B (FIGURE 19-16, respiratory chain):
it gives the electron path through all four complexes, QH₂ as mobile carrier, proton efflux,
*and* the bovine-heart Complex I:II:III:IV ratio 1.1:1.3:3.0:6.7, *and* the PDB IDs. Roughly
1900 `FIGURE n` references across the book (237 counted in a 600-page sample).

**(c) A and B can be bridged automatically, because both have text layers.** Verified with a
single probe string:

> `FIGURE 19-16` → **A page 708**, **B page 2401**

So a page-correspondence table between the two PDFs can be generated mechanically by matching
text. This is the key enabling fact for the whole plan, and it is what makes the two-file setup
better than either file alone.

### Correction the user should know about

**C is the 3rd edition, not the 4th.** The user believed it was Lehninger 4 Chinese; the
filename says 第3版. English 3rd ed is **2000**, so the translation is ~25 years old — one
edition older than assumed. Combined with having **no text layer** (unsearchable,
un-extractable, eye-navigation only), C's value is much lower than it first appeared.

---

## 3. Strategy already decided (with the reasoning, so it can be overturned on purpose)

**The central reframe.** The teacher designated Lehninger 8 as 复习目录 — a *review syllabus*.
A syllabus's job is to define **scope**, i.e. to tell you what is out of scope. It is not a
reading assignment. Treating it as scope rather than content is what makes this tractable.

**Division of labour between the sources:**

- **Czech `Biochemie` (228 p)** — the exam's structure and the examiner's vocabulary. Already
  fully digested into the app: 207 nodes, chapters 1–10.
- **Lehninger 8 (A + B)** — scope, depth, and modern correctness where the Czech book is dated.
- **Chinese Lehninger 3rd (C)** — emergency comprehension aid only.

**Reading method for Lehninger: figures first.** For each in-scope section read (1) figures +
legends, (2) the chapter-end summary bullets, (3) worked examples, and drop into running text
**only when a figure doesn't make sense**. That is ~25–30 % of the page volume for ~80 % of the
exam value, and it matches what an oral exam actually asks for — you draw on a board.

**Read A, extract from B.** A is the reading surface (real layout, figures). B is the
extraction source (clean digital text, 879-entry outline). A's text layer is OCR/scan-derived
and would need proofing; B's is clean. Do not extract from A.

**Use C only where the content hasn't aged.** Safe: thermodynamics, enzyme kinetics,
glycolysis, TCA, oxidative phosphorylation, fatty-acid oxidation, amino-acid metabolism.
**Never** for signal transduction, metabolic regulation, information pathways, or structural
methods — those are effectively a different book since 2000.

**Three-tier triage, not uniform effort:**
- **A-tier** — the ~27 oral topics: speak 3 minutes unaided + draw the diagram from memory.
- **B-tier** — recognise and place: "that's X, it belongs to pathway Y, its role is Z."
- **C-tier** — know the term exists; zero recall obligation.
Treating everything as A-tier is the standard way this kind of revision fails.

**The existing discrepancy list is an asset, not a problem.** Six places where the Czech book
disagrees with modern references are already flagged in the node data: nitrogenase 6 e⁻/6 ATP
(modern: 8 e⁻/16 ATP + H₂), Hatch–Slack dated 1970 (original 1966), glycolate *oxygenase* vs
oxidase, β-ketokinasa vs thiolase, mevalonate condensation drawn via malonyl-CoA rather than
thiolase, and N₂H₂ among denitrification products. These are exactly the points where an
examiner can probe and where knowing both versions scores. Details in `HANDOFF.md` §0.

---

## 4. What NOT to do

- **Do not build a second app for Lehninger.** The existing app already does everything the
  user asked for when they described wanting "一段英文一段中文 + 朗读": the node schema has
  `summary:{en,cn}`, `points:[{en,cn}]`, `terms:[{en,cn,def_en,def_cn}]`, and `speakBtn` /
  `speakPairBtn` TTS on all of it. The right move is to **feed the existing pipeline**, not
  fork it. This project already forked once (`PESB/`, `HANDOFF.md` §4a) and pays the cost in
  duplicated `app.js`/`style.css`. The realistic failure mode for this whole phase is spending
  the semester building tools instead of studying.
- **Do not mass-translate the book.** 967k words. The argument that settles it: *an unproofed
  biochemistry translation cannot be trusted, and proofing it costs the same as reading the
  book*. Machine translation of biochem fails in a specific dangerous way — fluent enough that
  the error isn't visible (committed step, reducing equivalents, coupling, upstream/downstream).
  A parallel bilingual text also **doubles** the reading volume rather than halving it.
- **Do not treat TTS as a learning channel.** The app uses Web Speech API (browser synthesis),
  which mispronounces exactly the words that matter — phosphoenolpyruvate, ubiquinone,
  glyceraldehyde, sphingomyelin. It is good for **reviewing material already learned** (walking,
  commuting) and bad for first-pass acquisition. Position it as review only.
- **Do not use B for figures or C for anything modern.** See §2.

---

## 5. Open decisions — need the user, do not decide these alone

1. **Is the exam question list the 27 Chinese-notes topics, or the Lehninger TOC?** The user was
   asked to confirm this with the teacher and had not reported back. It changes what goes in
   A-tier. Everything else is optimisation; this is the one structural unknown.
2. **What language is the exam conducted in?** Determines whether the Czech anchor terms matter
   at all or are pure reference. The app currently demotes Czech to a small pill (`HANDOFF.md`
   §5a) on the assumption it does not matter much.
3. **Commit and push chapters 9–10?** See §0. Asked, not answered.
4. **Should both `biochemie_basic` and `biochemie_pro` be live on the internet, or is `pro` a
   local working copy?** This single answer picks the hosting option in §0a and must be settled
   before the copy is made, because it decides what happens to `.git` and the remote.
5. **Where does the Lehninger material live in the data model?** Two options, not yet chosen:
   add a `lehninger: {ch, section, pageA, pageB}` cross-reference field to *existing* nodes
   (cheap, mechanical, keeps one corpus), versus creating new nodes for Lehninger-only content.
   Probably both, but the split hasn't been decided. `HANDOFF.md` §4b discusses the related
   `book` field idea.

---

## 6. Next concrete steps (agreed, not yet started)

All three are **read-only** — nothing is written to the repo, so they are safe to run before
the commit question in §0 is resolved.

1. **Generate the A↔B page-correspondence table.** Match text between the two PDFs (probe
   strings like `FIGURE n-m` work; verified). Output: for any location, the page in A to look
   at the figure and the page in B to extract clean text from.
2. **Export B's 879-entry outline as a structured TOC** — chapter / section / sub-heading /
   page in B / page in A. This is nearly free; the structure already exists in the PDF.
3. **Overlay the exam scope** to produce the master mapping table:
   `27 topic × Czech book § × Lehninger 8 chapter+section × page in A × page in B`.
   The 27-topic list and the Czech `cnNote` pairings are already tabulated in `HANDOFF.md` §11 —
   start from that table, do not re-derive it.

The payoff of step 3 is the thing the user actually needs: **a defensible list of what can be
skipped**, plus an index telling them where to look when stuck.

Only after those three should anything be written, translated, or added to `data/`.

---

## 7. Reproducing the measurements

No `node`/`deno`/`bun` on this machine, but **PyMuPDF (`fitz`) and `esprima` are both installed
in Python 3.12**, and PIL. Console is cp1252 — **printing extracted PDF text to stdout will
crash with `UnicodeEncodeError`**. Write to a UTF-8 file and `cat` it instead:

```python
import fitz, io, os, statistics
d = fitz.open(r'C:\Users\Admin\Downloads\lehninger书\<file>.pdf')
print(d.page_count, d.get_toc().__len__())
pg = d[707]                                  # A p.708 == B p.2401 == FIGURE 19-16
print(round(pg.rect.width), round(pg.rect.height), len(pg.get_text()))
big = sum(1 for i in range(d.page_count) for x in d[i].get_images(full=True)
          if x[2] >= 600 and x[3] >= 400)    # usable-resolution figures
```

For anything that prints extracted text:
```python
out = io.open(r'C:\Users\Admin\AppData\Local\Temp\claude\probe.txt', 'w', encoding='utf-8')
```

Also relevant: `HANDOFF.md` **§9a** (validate `data/ch*.js` with `esprima` — and why brace
counting silently lies) and **§9b** (crop-and-upscale a scan region to read printed numbers
reliably).

---

## 8. Working with this user

From `CLAUDE.md` and this session:

- Biology PhD. **Explain in plain Chinese; keep technical terms, code, filenames and parameter
  names in English.**
- Native Chinese speaker actively studying English → in the app, **EN is primary and most
  detailed, CN carries the same substance naturally phrased, CZ is a short anchor tag only**
  (`HANDOFF.md` §2). Do not invert this.
- The exam is **oral**. Optimise for spoken production, not recognition. The app's Oral mode
  (`model_en` + `checklist`) is the target artefact.
- Working style observed this session: **wants judgement before action.** Said "先判断别着急做"
  and then again "还是先判断啊别着急做" when work started too early. Diagnose, present the
  reasoning and a recommendation, then wait for a go-ahead. Read-only probing to establish
  facts is welcome; writing files is not, until asked.
- Gets discouraged by raw volume numbers. The 4893-page figure caused real distress and was
  wrong by ~4×. When a number looks frightening, **check what it actually measures before
  reacting to it.**
