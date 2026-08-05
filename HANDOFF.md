# Handoff — extending this project

Read this before touching `data/`, `app.js`, `style.css`, or `.github/workflows/pages.yml`.
Written for whoever (human or another Claude session) picks this project up cold — to add
chapters, add a second textbook, or extend the pronunciation/bionic-reading/flashcard
features. `PAIRING.md` covers *why* the Czech textbook and the Chinese notes can't be
aligned page-for-page; this file covers *how the codebase works*, the conventions that came
out of building it, and — this matters — **this file did not exist before 2026-08-04**. An
earlier handoff was passed to a session as injected context only, never committed as a file,
and consequently nobody could `git grep` it, nothing forced it to stay in sync with what
`main` actually contained, and a real feature (see §5) silently regressed as a result. Keep
this file itself committed and current — that is the entire point of it existing.

## 0. Current state as of this handoff (updated 2026-08-05, evening)

- **Chapters 1–6 done and live on `main`**: 1 General principles, 2 Amino acids/proteins,
  3 Enzymes, 4 Nucleic acids/protein synthesis, 5 Further protein metabolism/amino acid
  interconversions, 6 Bioenergetika (bioenergetics, incl. the citric acid cycle and the
  respiratory chain/oxidative phosphorylation). 72 topic nodes total. Pushed and merged to
  `main` directly (see the two merge commits around `12c2d9d`/`a4d7499`) — GitHub Actions
  should have deployed it live within a few minutes of that push.
- **Chapter 7 (Sacharidy, pp.148–175) IS STARTED BUT ONLY PARTIALLY DRAFTED — read this
  before assuming it's done.** `data/ch7.js` exists and is wired into `index.html`, `app.js`
  (both `CHAPTER_TITLES` and both `[1,2,...,7]` scope arrays), and `pages.yml`'s validate
  list — all of that mechanical wiring is complete and correct. But of the chapter's 28 pages
  (148–175), only **pp.148–155 are actually drafted** (15 nodes: `7-1` through `7-3-2`,
  covering §7.1 Monosacharidy through the first half of §7.3 Oligosacharidy). **Sections
  7.3(cont.)/7.4–7.12, pp.156–175, are NOT YET WRITTEN** — this includes polysaccharides
  (7.4), glycoproteins (7.5), sugar interconversions (7.6), the pentose phosphate pathway
  (7.7), **glycolysis (7.8)** and its pyruvate fates (7.8.1), gluconeogenesis (7.9/7.9.1),
  and glycoside/polysaccharide enzymology (7.10–7.12). Glycolysis in particular is one of the
  most exam-critical topics in the whole book and has not been touched yet.
  - The full chapter's page images are ALREADY EXTRACTED to `extracted_full_ch7/page_148.png`
    through `page_175.png` (all 28 pages) — a follow-up session does not need to re-run the
    PyMuPDF extraction step, just dispatch drafting agents directly against the existing PNGs
    for pp.156–175.
  - `data/ch7.js`'s own header comment states this partial status explicitly — read it before
    doing anything else with this file.
  - The independent verification pass (pipeline step 8) has NOT been run on the pp.148–155
    content that does exist — do it once the rest of the chapter is drafted, covering the
    whole chapter in one pass, rather than twice.
- **Chapters 8–10 not started at all**: 8 Lipidy (pp.176–201, lipids — fatty acids,
  membranes), 9 Fotosyntéza (pp.202–217, photosynthesis), 10 Vzájemné vztahy v intermediárním
  metabolismu a regulační mechanismy, incl. §10.3 Hormony (pp.218–228, metabolic
  integration + hormones). Page ranges confirmed directly against the book's own TOC
  (pp.4–6) on 2026-08-05 — see §11 for the Chinese notes' page ranges, several of which were
  newly located this session (see below). No page images extracted yet for these three
  chapters, no wiring done in `index.html`/`app.js`/`pages.yml` yet. This is roughly 61 more
  pages across 3 chapters (plus the ~20 pages still owed on chapter 7) — it will not fit in
  one session's context window done to full verification depth; expect to split it, as this
  session itself was forced to.
- **New Chinese-notes pairing found this session (2026-08-05): topics 二 and 三 are now
  located.** Previously "not yet pinned down to exact pages" in the table below. A search
  agent confirmed by reading the actual note pages: **二 糖类 (carbohydrates) = true pages
  5–10**, **三 脂质 (lipids) = true pages 11–16**, and as a bonus, confirmed **四 氨基酸
  starts exactly at true page 17** (previously only known as "before p.47"). See the updated
  §11 table for the subtopic lists — 二 covers monosaccharide stereochemistry, oligo/poly-
  saccharide structure, glycoconjugates and blood-group sugars; 三 covers fatty
  acid/eicosanoid chemistry, lipid peroxidation, phospho-/sphingo-/glyco-lipids, and
  lipoprotein classes. Both were read at a topic-overview level (confirmed page range +
  subtopic list) but NOT yet cross-checked point-by-point against the CZ chapter 7/8
  subsections that will eventually cite them — the `cnNote.status` on the chapter-7 nodes
  drafted so far is `"mapped"` for the page range itself, with a note in the title that
  point-level cross-checking is still outstanding. Do the same point-level pass whenever you
  next touch a node that cites topic 二 or 三, rather than treating today's finding as the
  final word.
- **Operational note (recurrence, 2026-08-05 evening): the account hit its monthly spend
  limit again**, this time mid-dispatch of 5 parallel agents (4 chapter-7 drafters + 1 CN-
  notes search agent) for chapter 7. This is the same non-content, account-level constraint
  documented below from the chapter 5/6 work — nothing new about the failure mode itself, but
  a new wrinkle in how to recover from it was learned: **the harness's "Agent terminated
  early due to an API error" wrapper message is not proof the agent's actual work was lost.**
  Of the 4 chapter-7 drafters, one (`pp.148–153`) had in fact FULLY completed all 13 of its
  assigned nodes and only got cut off while composing its final prose report back to the
  orchestrator — its scratch file was complete and immediately usable as-is. A second
  (`pp.154–161`) had only gotten 2 of its ~9 expected nodes written before the same cutoff.
  The other two drafters (`pp.162–169` glycolysis/PPP, and `pp.170–175`) left no scratch file
  at all — their assigned page ranges are the ones still owed on chapter 7 (see above). The
  practical upshot: after ANY multi-agent dispatch that hits this error, always check the
  scratch dir for every agent in the batch individually rather than writing off the whole
  batch — completion is decided per-agent by how far into its own work it had gotten when the
  account-wide cutoff landed (all 4 drafters + the search agent were cut at within ~1–2
  minutes of each other, i.e. it is a wall-clock account event, not something tied to any one
  agent's task complexity), not by the wrapper message, which is identical and equally scary
  for an agent that finished and one that barely started.
  - **This session stopped here and pushed what existed rather than continuing to retry**,
    at the user's explicit instruction, because retrying immediately after a monthly-limit
    hit reliably fails again (see the ch5/6 note below) and burns the same limit on a
    different account would need to pick up — check claude.ai/settings/usage before
    resuming, and re-read this section plus `data/ch7.js`'s own header comment before
    dispatching new chapter-7 drafting agents so you don't accidentally re-draft pp.148–155
    (already done) instead of the pp.156–175 that's actually still missing.
- **Pronunciation + bionic reading**: implemented, fixed, and on `main` — merged TWICE
  independently (once via a manual `git apply` of the orphaned commits' diff during this
  session, once via the user properly merging PR #2 on GitHub at almost the same time),
  which produced a real merge conflict in `app.js` when the two lineages met — resolved in
  favor of the flashcard EN-first fix (§5a) over the old CZ-first version PR #2's code still
  had. See §5 and §7 for the full story and how to not repeat the original mistake.
- **Flashcard/glossary language priority**: changed 2026-08-04/05, see §5a. Front of
  flashcard is now English, not Czech. This was a deliberate, user-requested change — do not
  revert it under the assumption the original CZ-first design was intentional.
- **Operational note — this session hit "monthly spend limit" API errors repeatedly** while
  running background verification/drafting agents for chapters 5 and 6 (error message points
  to claude.ai/settings/usage). It is NOT a content problem and not something code can fix.
  What worked: (1) retry the same agent call — sometimes succeeds immediately, sometimes
  fails again; (2) if an agent fails mid-task, check whether it had already written its
  output file before dying (`ls` the scratch dir) — several ch6 agents had fully written
  valid, complete scratch files moments before the fatal error, and those were reused as-is
  rather than re-running the whole drafting pass. Always check for a recoverable file before
  assuming a failed agent's work is lost.
- **Chapter 6's independent verification passes all completed and all fixes are applied** —
  chapter 6 is now audited to the same standard as chapters 1–5. Three real issues were
  found and fixed: node `6-2-3`'s summary/oral overstated "sole carbon source" where the
  book, and the node's own `points`, correctly say "acetate or other acetyl-CoA-producing
  compounds"; and node `6-1-3` claimed the pyruvate→acetyl-CoA arrow in Obr. 6.2 was
  uniquely one-way (it isn't — same double-headed glyph as every other arrow) and that
  glycerol enters the pathway near glyceraldehyde-3-phosphate (it actually enters near
  phosphoenolpyruvate, one step later) — both claims had propagated into a quiz question and
  an oral checklist item, not just the prose, so check for that pattern (an error
  duplicated across `points`/`summary`/`quiz`/`oral` rather than confined to one field) when
  reviewing future verification findings.

## 1. What this is

A static (no build step, no backend) exam trainer: `index.html` + `style.css` + `app.js`,
content-free by design. All subject matter lives in `data/ch1.js` … `data/ch5.js`, each of
which pushes plain objects ("topic nodes") onto a shared array, `window.BIOCHEM.topics`.
`app.js` reads that array and renders four modes — Study, Flashcards, Quiz, Oral — entirely
generically. **Nothing about a specific chapter or textbook is hardcoded in `app.js` except
the chapter-title lookup and one `[1, 2, 3, 4, 5]` chapter-list literal that appears twice**
(see §3) — everything else falls out of whatever's in the data files.

Live site: https://sumuxie.github.io/bio-state-exam/ (deploys from `main` only — see §7).

## 2. The topic-node schema

One object per section of the textbook. This is the entire data contract; every render
function in `app.js` reads only these fields.

```js
{
  id: "5-2-1-1",                 // stable key — used in localStorage progress, scope selects. Never reuse or change once a node exists.
  chapter: 5,                    // integer, matches a key in app.js's CHAPTER_TITLES
  section: "5.2.1",              // the textbook's own section number, shown as-is in the UI. If you split one book heading into multiple nodes because it's unusually dense, give both the SAME section number and distinguish only by id suffix (e.g. "4-1-3-1"/"4-1-3-2" both section "4.1.3") — don't invent a section number the book doesn't have.
  czTitle: "...", enTitle: "...", cnTitle: "...",   // section heading in all three languages

  pages: [118, 119, 120],        // page range this node covers in the source book
  coverage: "full" | "partial",  // "full" = every page above was read from an actual scan image
  coverageNote: "...",           // REQUIRED. Say exactly what was verified. If a book page's own text and its own figure/table contradict each other (this has happened in every chapter so far — see §8), say so explicitly here or in the relevant point, name which side you trust and why, and DON'T silently pick one.

  cnNote: { topic: "十四", title: "核酸的结构 (笔记 pp.87–90)", status: "mapped" | "partial" | "pending" },
                                  // link to the Chinese notes' own numbering (一, 二, 三... 二十七, then an unnumbered tail — see PAIRING.md and §11 below).
                                  // topic: null is valid and expected for content the notes cover but never numbered (see §11's "unnumbered tail" note) — cite the page range in `title` instead of inventing a number.
                                  // status "mapped" = the specific page range was actually read and confirmed. "partial" = a topic number is a good-confidence GUESS from title/context alone, not read. "pending" = searched and genuinely not found; don't force a match.

  summary: { en: "...", cn: "..." },              // both languages required

  points: [                       // the section's content, one array entry per idea
    { cz: "short anchor term, NOT a sentence", en: "...", cn: "..." }
  ],

  gapPoints: [                    // OPTIONAL — only when some pages in `pages` were NOT in the extracted scan set
    { en: "...", cn: "..." }      // content here is standard course material, NOT read from this book — rendered in a visually distinct dashed block, never mixed into `points`
  ],

  terms: [                        // glossary — feeds Flashcards AND the pronunciation buttons
    { cz: "...", en: "...", cn: "...", def_en: "...", def_cn: "..." }
  ],

  quiz: [                         // feeds the Quiz mode question bank
    // multiple choice:
    { type: "mcq", q_en, q_cn, options: [...], answer: 2, why_en, why_cn },
    // written / short answer, graded by keyword match:
    { type: "short", q_en, q_cn, accept: ["keyword", ...], answer_en, answer_cn }
  ],

  oral: {                         // feeds the Oral exam simulator — OPTIONAL but every node should have one
    q_en, q_cn,
    model_en: "...",              // a single flowing spoken-register paragraph, not bullet points
    checklist: ["...", "..."]     // self-check items shown as tick-boxes while the candidate talks
  }
}
```

Everything else — sidebar navigation, search, flashcard Leitner boxes, quiz scoring, speaker
buttons, bionic-reading transform — derives from this shape automatically.

### Language priority — read this before writing content for any chapter

The user commissioning this project was explicit and repeated it multiple times: **the
Czech book's content and structure matter because that's what the exam is based on, but the
Czech language itself does not matter.** The user is a native Chinese speaker actively
studying English. Concretely:

- `cz` fields are SHORT ANCHOR TERMS ONLY (a word or short phrase identifying which book
  term a point is about) — never a translated sentence.
- `en` is the primary, most-detailed language. Write real exam-ready explanatory prose here.
- `cn` carries the same substance as `en`, naturally phrased for a native reader — not a
  stilted gloss.
- In the UI, this means English-first, Czech-demoted-to-a-small-reference-tag. See §5a — do
  not build a new UI surface that puts Czech text in the most prominent visual slot.

## 3. Adding chapter 6 (or 7, 8, 9, 10...) to the Czech textbook

**You cannot calibrate a new chapter without the actual page images.** This whole project's
value proposition is "checked against the real book," not "plausible-sounding biochemistry."
See §8 for what that means in practice.

The pipeline below is proven across chapters 1–5 (chapters 4–5 specifically used the
multi-agent version; do the same for 6–10):

1. **Get page images.** `Biochemie.pdf` is gitignored and never committed whole. Extract
   only the pages you're about to calibrate:
   ```
   python3 -c "
   import fitz
   doc = fitz.open('Biochemie.pdf')
   import os
   os.makedirs('extracted_full_chN', exist_ok=True)
   for p in range(START, END+1):
       doc[p-1].get_pixmap(dpi=250).save(f'extracted_full_chN/page_{p}.png')
   "
   ```
   This local-only folder (all pages, for reading) is gitignored implicitly by not being
   added — don't commit it. Separately, after content is calibrated, hand-pick a
   representative ~40–60% subset and `git add -f` them into `extracted_raw/` (that dir *is*
   force-tracked despite `extracted_raw/*.png` being in `.gitignore` — see §7). Bias the
   selection toward pages that anchor a table, a disputed figure, or a verified number.

2. **Wire the chapter into three files FIRST** (small, mechanical, do this before content
   exists so validation/rendering don't silently no-op while you draft):
   - `index.html` — add `<script src="data/chN.js"></script>` after the previous chapter's.
   - `app.js` — add chapter N to `CHAPTER_TITLES` (~line 13), and append `N` to **both**
     `[1, 2, 3, 4, 5]` literals (`fillScopeSelect` and `renderSidebar`). Missing either spot
     means the chapter's topics exist in data but don't appear in the sidebar or scope
     dropdowns — an easy, silent bug, and the exact kind of thing a browser smoke test with
     a REAL server (not the file:// preview — see §9) will catch and a glance at the JS
     source won't.
   - `.github/workflows/pages.yml` — add `require('./data/chN.js');` to the `validate` job.

3. **Dispatch parallel drafting agents, one per page sub-range.** For an 18–50 page chapter,
   2–4 agents split roughly evenly by page count, each producing a self-contained JS array
   literal to a scratch file (NOT touching the real repo). Each agent's prompt must include,
   verbatim or adapted: the node schema (§2), the language-priority rules (§2), the honesty
   rules (§8), the exact page-image paths, and instructions to study `data/ch5.js` (the most
   recently finished chapter at time of writing) as a live style/granularity reference rather
   than pasting the whole schema inline. Explicitly ask each agent to report, in its final
   message: which nodes it produced, exactly what's on the first/last page of its range (so
   you can catch content split across a boundary between two agents — this happened twice in
   ch4, zero times in ch5, it's not predictable), and anything it flagged as ambiguous or a
   book-internal inconsistency.

4. **Merge**: concatenate the scratch files' array contents into `data/chN.js` with the
   standard header/footer (copy the pattern from any existing `data/ch*.js`). Do this via a
   small Python script that strips outer brackets and joins with `,\n\n` — do NOT read every
   line of every scratch file into your own context first if you don't need to; you already
   have each agent's own structural self-report.

5. **Reconcile any page-boundary seams** the agents flagged (content whose sentence or
   figure genuinely spans the cut between two agents' ranges). Read just the 1–2 relevant
   pages yourself and patch the affected node(s) directly — extend `pages`, update
   `coverageNote`, add the missing points/terms. Don't spin up a whole new agent for a
   one-page patch.

6. **Fill in `cnNote`** using PAIRING.md's mapping table (§11 below has it pre-populated
   through chapter 5 and has several chapters' worth of pages already located for 6–10 —
   check there before dispatching a fresh 16-volume search). Where you do need to search,
   the pattern is: render the relevant `生物化学笔记_分卷/*.pdf` volumes to PNG, skim for
   large handwritten Chinese-numeral headers before reading closely, and report back a
   topic-number → page-range → confidence table rather than guessing.

7. **Validate.** No `node` binary is available in this environment — don't rely on the CI
   script's exact invocation locally. Instead: start a REAL local HTTP server
   (`python3 -m http.server PORT`, not `file://`) and load the page in the Browser tool (see
   §9 for why file:// specifically is unreliable for this). Run a JS snippet that replicates
   the CI validator's checks (required keys, valid mcq answer indices, no duplicate ids,
   full page-range coverage with no gaps) against `window.BIOCHEM.topics`, then click through
   Study/Cards/Quiz/Oral for the new chapter and check `read_console_messages` for errors.

8. **Independent verification pass — do this every time, no exceptions.** Dispatch fresh
   agents (same page-range split as drafting, or coarser) whose ONLY job is to re-read the
   same page images against the FINAL merged content and report factual discrepancies. This
   has found at least one real, fixable error in every single chapter attempted so far
   (chapters 4 and 5 both had 2–3 genuine issues surface this way, including one internal
   contradiction *within a single node* — point 6 and point 8 of the same node disagreeing
   with each other). Apply the fixes directly. If an agent's API call fails with a spend/rate
   limit error mid-task, that's an account-level stop, not a content problem — don't
   silently mark the chapter verified anyway; surface it and retry once explicit
   confirmation is given.

9. **Report and confirm before pushing.** Pushing, opening a PR, and committing are all
   actions the user gets to decide the timing of — do the work, validate it thoroughly, then
   ask, rather than assuming "finish it" extends to "and publish it" (those are different
   permissions even when the user is clearly asking for the content work to be finished
   end-to-end).

## 4. Adding a second, different textbook entirely

Never done here — treat this as a starting point, not a tested path. Current hardcoded
assumptions a second book would break:

- `CHAPTER_TITLES` in `app.js` is a flat `{1: {...}, ..., 5: {...}}` map — chapter numbers
  are the only identity a topic has. **Fix**: add a `book` field to every topic node, key
  `CHAPTER_TITLES` by `book + ":" + chapter`, add a book selector to the sidebar.
- `fillScopeSelect()`/`inScope()` assume `scope` is `"all" | "ch:N" | topicId` — extend the
  grammar to `"book:X"` for per-book scoping.
- `cnNote` is specific to *this* book's pairing with *these* Chinese notes. A second book
  needs its own equivalent field or `cnNote` needs to become keyed by note-source.
- None of `style.css`, pronunciation, bionic reading, or the flashcard front/back split
  reference chapter or book identity — zero changes needed there.

## 5. Pronunciation (speaker buttons) — and the branch that got lost

Browser-synthesised speech via the Web Speech API — **not a recording**. Say this to users
plainly; a static site with no backend can't host real audio for hundreds of terms across
three languages, and the button label says so explicitly (`title="...synthesised speech, not
a recording"`) rather than overclaiming.

**What happened before this handoff existed, as a cautionary tale**: a prior session
implemented pronunciation + bionic reading, fixed four real regressions in it (stuck CSS
state, duplicate event listeners, a keyboard-shortcut conflict, a mobile topbar overflow —
commits `5965c2c` and `8957220`), and wrote a detailed handoff describing all of it as
already live. But those two commits were pushed to
`origin/claude/biochem-chapters-1-3-notes-1g3f2a` **after** that branch's PR #1 had already
merged — so they were never in `main` at all. A later, unrelated session did more work
directly on `main` (the page-numbering/splitter commit) with no idea the feature existed on
a sibling branch, and the handoff text describing it was passed along as injected context
rather than a committed file, so nothing forced anyone to notice the mismatch. The next
session (this one) built two full chapters on `main` genuinely believing pronunciation and
bionic reading didn't exist, until the user reported flashcards defaulting to Czech and
bionic reading "missing" — at which point `git log --all --source` on `app.js`/`style.css`
immediately showed the orphaned commits.

**The fix, and the general lesson**: before trusting ANY doc (including this one) about what
feature exists, grep the actual committed file (`git show HEAD:app.js | grep -i whatever`),
and if a described feature is missing, check `git log --all --oneline -- <file>` and
`git branch -a --contains <commit>` before assuming it was removed — it may simply be
sitting unmerged on another ref. To bring in a diff cleanly:
`git diff <merge-base> <other-branch-tip> -- <files> | git apply --check` first; if clean,
`git apply` it directly rather than fighting a full `git merge` against a working tree that
already has uncommitted changes of its own.

Core functions in `app.js` (search "pronunciation" in file header comments):

- `speakBtn(text, lang)` → `<button class="say-btn">` HTML string, or `''` if the browser
  lacks `speechSynthesis` or `text` is empty. `lang` is BCP-47 — `'cs-CZ'`, `'en-US'`,
  `'zh-CN'`.
- `speakPairBtn(en, cn)` → picks EN or CN based on `state.lang`; use for anything rendered
  through the `bi()` helper.
- `speak(text, lang, btn)` → does the synthesis, chunked on sentence boundaries (Chrome
  truncates one very long utterance). Re-clicking a speaking button cancels it, with the
  `speaking` class cleared explicitly rather than relying on `onend`.
- `wireSayButtons(root)` → **must be called at the end of every render function that injects
  new `.say-btn` markup**, scoped to the smallest container that changed. Idempotent via a
  `data-wired` guard.

**If you add a new place that should have a speaker icon**: call `speakBtn`/`speakPairBtn`
when building that block's HTML, then call `wireSayButtons()` after it lands in the DOM.
`wireSayButtons()` already does `preventDefault()`/`stopPropagation()` — don't add a second
click handler on the same button.

### 5a. Flashcard / glossary front-language fix (2026-08-04)

Originally, both the flashcard front face and the study-view glossary put Czech in the most
prominent slot (`#fc-cz`, biggest font on the flashcard front; `.term-cz` first and bold in
the glossary grid) — a vocabulary-recall design where you're tested on the Czech word. Per
§2's language-priority note, this is backwards for this user. Fixed by:

- Flashcard front (`.fc-face.fc-front`) now shows `term.en` in a class renamed
  `.fc-primary` (was `.fc-cz`, no longer tied to a language). Back shows `term.cn`
  (`.fc-cn`) prominently, plus the Czech term demoted into a small `.cz-anchor` pill (the
  same reusable class already used for the `cz` field in the Study view's `points` list —
  reuse it, don't invent a new small-tag style) inside a new `#fc-cz-ref` div, plus the
  bilingual definition (`.fc-def`, unchanged).
- Study-view glossary (`.term-grid` in `renderStudy()`): reordered to English first
  (`.term-en`, now carrying the bold/prominent styling that `.term-cz` used to have), then
  Chinese (`.term-cn`), then the Czech anchor as a `cz-anchor` pill only if `term.cz` is
  non-empty — no dedicated `.term-cz` CSS rule anymore.

If you add another UI surface that shows a `terms[]` entry, follow this same
EN-prominent → CN-secondary → CZ-as-small-pill pattern, not the old CZ-first one.

## 6. Bionic reading

A toggle (`#bionic-toggle`, persisted to `localStorage`) that bolds the leading half of each
Latin-script word as a scanning aid. Implemented as a fully reversible DOM transform:
`bionicApply(root)` walks text nodes and wraps a prefix of each Latin word in
`<b class="bionic-b">`; `bionicRemove(root)` unwraps those `<b>` tags by splicing their
children back into the parent — no character is ever added or removed, so toggling never
needs a fresh render.

- **`bionicRefresh()` must be called at the end of every render function**, exactly like
  `wireSayButtons()`. Already wired into `renderStudy`, `renderCard`, `renderQuestion`,
  `answerMcq`, `answerShort`, `finishQuiz`, and `nextOral`.
- Deliberately **skips Chinese text entirely** — the technique doesn't transfer to a
  logographic script.
- Skips UI metadata via `BIONIC_SKIP_CLASSES` (badges, section numbers, option letters,
  keyword chips) — add a new short label-like element's class there rather than
  special-casing it elsewhere.

### 6a. The `display: flex` blockification bug (found + fixed 2026-08-04)

**Never put `display: flex` directly on an element whose text content can be
bionic-transformed.** `.block > h2` (every Study-view section heading — "Summary",
"Point by point", "Glossary", etc.) had `display: flex; gap: 0.5rem; align-items: center;`
to lay out the heading text + a `.muted` CN label + a speaker button in a row. This is a
real, spec-defined CSS trap: a `<b class="bionic-b">` injected as a **direct child** of a
flex container gets "blockified" per the CSS Display spec — its computed `display` becomes
`block` regardless of what's specified — which visually snaps the bolded word-prefix onto
its own line, breaking "Summary" into "Summ" / "ary" on two lines. This is invisible from
reading the CSS or the JS; it only shows up by actually toggling bionic reading on a real
heading and looking (or, better, checking `getComputedStyle(b).display` programmatically —
see §9).

**Fix pattern**: never use `display: flex` on a container whose direct children include a
raw text run that bionic reading might touch. Fake the row layout instead with normal
inline flow + margins on the *specific* child elements that need spacing
(`.block > h2 .muted, .block > h2 .say-btn { margin-left: 0.5rem; vertical-align: middle; }`)
so nothing inside the heading is ever a flex item. If you add a new heading/label pattern
elsewhere that mixes running text with badges/buttons, check it the same way before shipping
— a working diff and a clean read of the CSS won't catch this class of bug; only toggling
the feature and inspecting computed styles will.

- **For reversible transforms, assert text-content parity** — not just "some `<b>` tags
  appeared." Compare `innerText` (not `textContent` — `innerText` respects layout, which is
  exactly what catches the bug above) before applying, after applying, and after removing;
  all three should be byte-identical. A `firstDiffIndex` scan pinpoints exactly which word
  broke if they're not.

## 7. Git / CI conventions

- **This repo's `github-pages` environment only permits deployments from `main`.**
  `.github/workflows/pages.yml` has a `validate` job (every branch listed in the trigger) and
  a `deploy` job (`main` only, `needs: validate`).
- **The branch trigger list is a hardcoded array of exact branch names, not a glob.** If you
  open a new feature branch, add its exact name to `on.push.branches` or CI silently won't
  validate it — or switch this to a `claude/**` glob so every future branch is covered
  without editing this file per-chapter (worth doing; hasn't been done as of this handoff).
- **Before building on `main`, sanity-check it's not missing something**: `git log --all
  --oneline --graph` and look for sibling lineages off an old merge point (see §5's cautionary
  tale). A branch merged once can still grow orphaned commits afterward if someone keeps
  pushing to it post-merge without opening a second PR.
- **If your designated branch's PR has already merged**, rebase onto current `main` first
  rather than stacking on old history:
  ```
  git fetch origin main
  git checkout -B <branch-name> origin/main   # safe once `git diff HEAD origin/main` is empty
  ```
  then commit and `git push --force-with-lease`.
- Commit messages and PR bodies explain **why**, not what. Code comments: none, unless
  something is genuinely non-obvious (a browser quirk, a cross-function invariant).
- Only commit/push/open a PR when the user has actually asked for that specific action —
  "finish the remaining chapters" is not implicitly "and publish them," per the Bash tool's
  own operating rules. Do the work, validate it, then ask.

## 8. Calibration & the copyright boundary

- **Never trust the raw OCR text file on its own** — every chapter has needed page-image
  re-reads that caught real errors. A background verification pass (fresh agents re-reading
  pages against the FINAL written content, reporting only material discrepancies) is not
  optional busywork: it found genuine, fixable errors in 100% of chapters attempted so far
  (4 and 5), including at least one case where two points *within the same node*
  contradicted each other.
- **When the book itself is internally inconsistent** (running text says one thing, its own
  figure or heading says another — this has now happened multiple times: an ATP-requirement
  claim contradicted by its own diagram in ch4, a "20S" vs "30S" prose/figure mismatch in
  ch4, a "DNA polymerasy" that context makes clear should say "RNA polymerasy" in ch4, a
  "2-oxoglutarát" label that's almost certainly a mislabelled "2-oxobutyrát" in ch5, an
  "acetoacetyl-CoA" sentence contradicted by its own heading and diagram in ch5): **say so
  explicitly in the content**, state which side you trust and the reasoning, and never
  silently pick one without a trace. This is what `coverageNote` and inline flags in `points`
  are for.
- **Content is paraphrased, not translated.** The Czech textbook is copyrighted. What's in
  `data/ch*.js` is original explanation following the book's own structure and terminology,
  with short direct quotes (under ~15 words, term/formula calibration only) rather than
  translated prose.
- **`coverage` and `gapPoints` exist to keep this honest, not to look thorough.** Never
  upgrade a node's `coverage` to `"full"` because the content sounds plausible.

## 9. Testing conventions

No test framework is wired up. Verification happens by scripting the Browser tool directly.

- **Use a real local HTTP server, not the `file://` preview, for anything you need a
  genuinely fresh reload for.** The `file://` preview pane in this environment does not
  reliably re-execute scripts / re-render the DOM on repeat navigations to the *same* URL
  within one long session — `window.BIOCHEM.topics` can look correct via a manual
  `fetch()+eval()` sanity check while the actual rendered sidebar is still showing a stale
  DOM from hours earlier, with no error and no obvious signal that anything is wrong. A
  `python3 -m http.server PORT` + `http://localhost:PORT/...` target does not have this
  problem and is also more representative of how GitHub Pages actually serves the site.
- **Force clicks on anything with a CSS animation** (e.g. a pulsing `.say-btn.speaking`) —
  use `{ force: true }` rather than fighting Playwright's actionability check.
- **Count actual listeners directly** (instrument `EventTarget.prototype.addEventListener`
  via a `WeakMap`) rather than inferring duplication indirectly — an indirect signal (like
  counting `speechSynthesis.speak()` calls) can coincidentally look fine even when a listener
  really did double up.
- **For reversible transforms, assert `innerText` parity** before/after apply and
  before/after remove — see §6a for why `innerText` specifically (not `textContent`) is the
  right check, and how it caught a real layout bug that a naive "does it look bold" check
  would have missed entirely.
- **Test every viewport you claim to support** — 320px, 390px, 768px, 1280px at minimum — by
  checking `document.documentElement.scrollWidth` against `window.innerWidth`.
- **Replicate the CI validator's checks client-side** (required keys, valid mcq answer
  bounds, no duplicate ids, full page-range coverage with no gaps) since no `node` binary is
  available in this environment to just run the CI script directly.

## 10. Legacy files — safe to ignore, not yet cleaned up

`Biochemistry_Chapters_1_3_Detailed.md`, `Biochemistry_Master_Guide_CN_EN.md`, and the entire
`oral_prep_app/` directory predate the `data/ch*.js` + topic-node architecture. They're
superseded and unreferenced by `index.html`/`app.js`. Left in place rather than deleted
unprompted.

`extract_chapters.py`, `ocr_full_chapters.py`, `ocr_run.log`, `extracted_full_ch1_3/` are
untracked working files from the original chapters-1–3 build (predate this handoff's
existence too). Harmless to leave, fine to clean up in a dedicated commit if anyone wants the
tree tidier — not part of the chapter-4/5 or bionic-reading work.

## 11. Open items and the Chinese-notes map, as of this handoff

**Chapters 7–10**: not started. Page ranges (confirm against the book's own TOC pages 4–6
before trusting this table, since it's hand-transcribed and could have a typo):

| Ch | Title | Pages |
|---|---|---|
| 7 | Sacharidy | 148–175 |
| 8 | Lipidy | 176–201 |
| 9 | Fotosyntéza a další biosyntetické pochody fotoautotrofů | 202–217 |
| 10 | Vzájemné vztahy v intermediárním metabolismu a regulační mechanismy (incl. 10.3 Hormony) | 218–228 |

**Chapter 6 is done** (Bioenergetika, pp.130–147, 19 nodes). Its drafting agents mostly
self-served their `cnNote` pairings straight from this table after being told to read this
whole file — keep instructing future drafting agents to do that, it works. Two things
chapter 6 could NOT confidently pair and correctly left `status: "pending"`: §6.2.3
(glyoxylate cycle — no notes topic found covering it) and all three §6.3 porphyrin-protein
nodes (十二's actual content was never verified by reading it — see below).

**Chinese notes (`生物化学笔记.pdf`, 230 handwritten pages, pre-split into 16 volumes of 15
pages each in `生物化学笔记_分卷/`, page footers preserve true page numbers)** — mapping
confirmed so far. Rows marked "mapped" have actually been read and used by a chapter; rows
marked "title-match only" are an inference from the topic's title/starting page, never
actually opened and read — treat those as a strong hint, not a citation, and verify by
actually reading the pages before upgrading a node's `cnNote.status` past `"partial"`:

| Notes topic | Title | Pages | Likely textbook match | Status |
|---|---|---|---|---|
| 一 | 序论 | — | ch.1 | mapped |
| 二 | 糖类 | pp.5–10 | ch.7 Sacharidy §7.1–7.6ish | mapped (page range read + subtopic list confirmed 2026-08-05: monosaccharide stereochem/mutarotation, oligo/polysaccharide structure incl. starch/glycogen/cellulose/chitin/peptidoglycan, glycoconjugates incl. N-/O-glycoproteins/proteoglycans/GAGs/ABO sugars, bacterial LPS/teichoic acid — NOT yet cross-checked point-by-point against individual CZ subsections) |
| 三 | 脂质 | pp.11–16 | ch.8 Lipidy | mapped (page range read + subtopic list confirmed 2026-08-05: FA nomenclature/eicosanoids, lipid peroxidation, triglycerides, phospho-/sphingo-/glyco-lipids, sterols, membrane asymmetry, lipoprotein classes — NOT yet cross-checked point-by-point against individual CZ subsections) |
| 四–八 | 氨基酸 / 蛋白质结构 | starts p.17 (start page confirmed 2026-08-05) | ch.2 | mapped |
| 九–十一 | 酶 (general/kinetics/mechanism) | pp.47–76 | ch.3 | mapped |
| 十二 | 维生素和辅酶 | p.77 | ch.6 §6.3 porphyrin proteins, OR ch.3 coenzymes | title-match only, still unconfirmed after ch.6 — actually read pp.77-82ish and settle this |
| 十三–十六 | 核酸 (general/structure/physicochem/methods) | pp.83–98 | ch.4 | mapped |
| 十七 | 代谢总论 | p.99 | ch.6 §6.1.3 Katabolické a anabolické děje | title-match only, used by ch.6 as "partial" |
| 十八 | 生物能学 | p.103 | ch.6 §6.1/§6.1.1/§6.1.2.x/§6.2.1 | title-match only, used by ch.6 as "partial" |
| 十九 | 糖酵解 | p.105 | ch.7 §7.8 Glykolýza | title-match only, not yet consumed |
| 二十 | 柠檬酸循环 | p.119 | ch.6 §6.2.2 (all 4 nodes) | title-match only, used by ch.6 as "partial" |
| 二十一 | 氧化磷酸化作用 | p.127 | ch.6 §6.2.4 (all 5 nodes) | title-match only, used by ch.6 as "partial" |
| 二十二 | 戊糖磷酸途径和糖的其它代谢途径 | p.139 | ch.7 §7.7 Dvě cesty k pentosafosfátům, and/or other ch.7 sugar-interconversion sections | title-match only, not yet consumed |
| 二十三 | 脂类的分解 | p.147 | ch.8 §8.4 Odbourávání lipidů | title-match only, not yet consumed |
| 二十四 | 脂类的生物合成 | p.153 | ch.8 §8.3 Biosyntéza lipidů | title-match only, not yet consumed |
| 二十五 | 蛋白质的降解及氨基酸的分解代谢 | pp.161–170 | ch.5 | mapped |
| 二十六 | 氨基酸及其重要衍生物的生物合成 | p.171 | no obvious ch.1–10 match — the CZ book's TOC doesn't show a dedicated amino-acid-biosynthesis section; possibly not paired to anything | unmatched |
| 二十七 | 核苷酸的降解及核苷酸代谢 | ~p.180 (title match only, not read) | ch.4 §4.1.1.1/.2, §4.1.5 | title-match only, used by ch.4 as "partial" |
| *(unnumbered)* | 抗生素 Antibiotics | p.181 | no CZ match found | unmatched |
| *(unnumbered)* | 激素 Hormones | p.183 | ch.10 §10.3 Hormony — strong title match | not yet consumed |
| *(unnumbered)* | 光合作用 Photosynthesis | pp.197–203 | ch.9 Fotosyntéza — strong title match, not yet consumed |
| *(unnumbered)* | DNA重组 / 转座子 Recombination/transposons | pp.205–210 | no CZ ch.1–10 match found |
| *(unnumbered)* | DNA的复制 Replication | pp.211–212 | ch.4 §4.1.3 (mapped, no numeral exists — cite pages, not a number) |
| *(unnumbered)* | DNA转录产生mRNA Transcription | pp.212–217 | ch.4 §4.1.4/§4.2.4 (mapped, no numeral) |
| *(unnumbered)* | RNA的复制/反转录病毒 | pp.219–221 | no CZ ch.1–10 match found |
| *(unnumbered)* | mRNA翻译产生蛋白质 Translation | p.223–224 | ch.4 §4.2.1–4.2.3, §4.3.2 partially (mapped, no numeral) |
| p.225–230 | English reading-comprehension notes | — | not biochemistry, ignore |

The numbered list (一–二十七) is the core 27-topic oral-exam syllabus; everything from p.181
on is titled but carries no Chinese-numeral header at all — treat that as a genuine,
permanent feature of the source (the student's own appendix), not a gap to fill by inventing
a "二十八". No dedicated post-translational-modification topic exists anywhere in the notes
(checked exhaustively for ch.4 §4.3.x) — leave that `cnNote.status` as `"pending"`.
