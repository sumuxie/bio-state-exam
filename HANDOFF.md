# Handoff — extending this project

Read this before touching `data/`, `app.js`, `style.css`, or `.github/workflows/pages.yml`.
It's written for whoever (human or another Claude session) picks this project up cold —
to add chapters 4+, to add a second textbook, or to extend the pronunciation/bionic-reading
features. `PAIRING.md` covers *why* the Czech textbook and the Chinese notes can't be
aligned page-for-page; this file covers *how the codebase works* and the conventions that
came out of building it.

## 1. What this is

A static (no build step, no backend) exam trainer: `index.html` + `style.css` + `app.js`,
content-free by design. All subject matter lives in `data/ch1.js`, `data/ch2.js`,
`data/ch3.js`, each of which pushes plain objects ("topic nodes") onto a shared array,
`window.BIOCHEM.topics`. `app.js` reads that array and renders four modes — Study,
Flashcards, Quiz, Oral — entirely generically. **Nothing about a specific chapter or
textbook is hardcoded in `app.js` except the chapter-title lookup and the `[1, 2, 3]`
chapter list** (see §3) — everything else falls out of whatever's in the data files.

Live site: https://sumuxie.github.io/bio-state-exam/ (deploys from `main` only — see §7).

## 2. The topic-node schema

One object per section of the textbook. This is the entire data contract; every render
function in `app.js` reads only these fields.

```js
{
  id: "3-5",                    // stable key — used in localStorage progress, URLs-by-convention, scope selects. Never reuse or change once a node exists.
  chapter: 3,                   // integer, matches a key in app.js's CHAPTER_TITLES
  section: "3.5",                // the textbook's own section number, shown as-is in the UI
  czTitle: "...", enTitle: "...", cnTitle: "...",   // section heading in all three languages

  pages: [59, 60, 61],           // page range this node covers in the source book
  coverage: "full" | "partial",  // "full" = every page above was read from an actual scan image
  coverageNote: "...",           // REQUIRED when coverage is "partial" — name exactly which pages are missing and why

  cnNote: { topic: "四", title: "氨基酸", status: "mapped" | "partial" | "pending" },
                                  // link to the Chinese notes' own numbering (一, 二, 三...) — see PAIRING.md

  summary: { en: "...", cn: "..." },              // both languages required

  points: [                       // the section's content, one array entry per idea
    { cz: "optional CZ term/anchor", en: "...", cn: "..." }
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

Everything else — sidebar navigation, search, flashcard Leitner boxes, quiz scoring,
speaker buttons, bionic-reading transform — derives from this shape automatically.

## 3. Adding chapter 4 (or 5, 6, 7...) to the Czech textbook

**You cannot calibrate a new chapter without the actual page images.** This whole
project's value proposition is "checked against the real book," not "plausible-sounding
biochemistry." See §6 for what that means in practice and why raw OCR isn't good enough
on its own — every prior chapter needed page-image re-reads to catch OCR errors.

1. Get page images into the repo. `Biochemie.pdf` is gitignored (copyright + size) and
   never gets committed whole. What gets committed is small per-page PNGs, the same
   pattern already in `extracted_raw/page_8.png` … `page_62.png` — extract only the pages
   you're about to calibrate, not the whole book.
2. Read every page image directly (not the OCR text file) before writing a single topic
   node. Use the OCR text only as a first-pass skeleton to save typing, then verify every
   number, formula, and list against the image.
3. Write topic nodes in `data/ch4.js` following the exact schema in §2. Mark `coverage`
   honestly per node — if even one page in that node's range wasn't in your extracted set,
   it's `"partial"` with a `coverageNote` naming the gap, not `"full"`.
4. **Three places need a one-line edit, or the new chapter is invisible to half the app:**
   - `index.html` — add `<script src="data/ch4.js"></script>` alongside the existing three.
   - `app.js` — add chapter 4 to `CHAPTER_TITLES` (line ~13), **and** to both `[1, 2, 3]`
     literals (`fillScopeSelect`, line ~253, and `renderSidebar`, line ~305). Missing either
     `[1,2,3]` spot means the chapter's topics exist in data but don't appear in the
     sidebar or the scope dropdowns — an easy, silent bug.
   - `.github/workflows/pages.yml` — add `require('./data/ch4.js');` to the `validate` job's
     inline script, or CI will pass while silently not checking the new file.
5. Run the same check CI runs, locally, before pushing:
   ```
   node -e "global.window={}; require('./data/ch1.js'); require('./data/ch2.js'); require('./data/ch3.js'); require('./data/ch4.js'); console.log(window.BIOCHEM.topics.length)"
   ```
6. Smoke-test in a real browser (see §9) — at minimum, open the app, click into a chapter-4
   topic, run a quiz question, flip a flashcard, and check a speaker button before pushing.

## 4. Adding a second, different textbook entirely

This has never been done here, so treat the following as a design starting point, not a
tested path. Current hardcoded assumptions that a second book would break:

- `CHAPTER_TITLES` in `app.js` is a flat `{1: {...}, 2: {...}, 3: {...}}` map — chapter
  numbers are the only identity a topic has. Two books both having a "chapter 3" would
  collide. **Fix**: add a `book` field to every topic node (`book: "biochemie-cz"`), key
  `CHAPTER_TITLES` by `book + ":" + chapter` instead of bare chapter number, and add a
  book selector alongside (or instead of) the chapter list in the sidebar.
- `fillScopeSelect()` and `inScope()` in `app.js` assume `scope` is `"all" | "ch:N" | topicId`
  — extend the scope grammar to `"book:X"` if you want per-book quiz/flashcard/oral scoping.
- The `cnNote` field is specific to *this* book's pairing with *these* Chinese notes (see
  PAIRING.md). A second book studied against different notes needs its own equivalent
  field, or `cnNote` needs to become a keyed object if the same book is paired against
  multiple note sources.
- None of `style.css`, the pronunciation feature, or the bionic-reading feature reference
  chapter or book identity — they operate on rendered DOM text and need zero changes.

## 5. Pronunciation (speaker buttons)

Browser-synthesised speech via the Web Speech API — **not a recording**. Say this to users
plainly wherever the feature is described; a static site with no backend has no way to
host real audio for hundreds of terms across three languages, and overclaiming it as
"real voice" is the one thing to actively avoid here.

Core functions in `app.js` (search for "pronunciation" in the file header comments):

- `speakBtn(text, lang)` → returns a `<button class="say-btn">` HTML string, or `''` if
  the browser lacks `speechSynthesis` or `text` is empty. `lang` is a BCP-47 tag —
  `'cs-CZ'`, `'en-US'`, `'zh-CN'` are the three in use.
- `speakPairBtn(en, cn)` → picks EN or CN automatically based on the current language
  toggle (`state.lang`); use this for anything rendered through the `bi()` helper.
- `speak(text, lang, btn)` → does the actual synthesis. Splits long text on sentence
  boundaries before queuing (Chrome silently truncates one very long utterance). Clicking
  the button that's *already* speaking cancels it — this path explicitly clears the
  `speaking` CSS class rather than relying on the `onend` event, because `cancel()`
  doesn't reliably fire `onend` in every browser.
- `wireSayButtons(root)` → **must be called at the end of every render function that
  injects new `.say-btn` markup**, scoped to the smallest container that changed (e.g.
  `wireSayButtons($('#qcard'))`, not the whole document). It's idempotent — guarded by a
  `data-wired` attribute — specifically because some render paths (answering a quiz
  question) rewire a container without rebuilding every node in it, and re-wiring an
  already-wired button used to silently add a second click listener.

**If you add a new place that should have a speaker icon**: call `speakBtn(...)` or
`speakPairBtn(...)` when building that block's HTML, then make sure `wireSayButtons()` is
called after that HTML lands in the DOM. If the button sits inside something else that
also reacts to clicks (a `<details>`/`<summary>`, a flashcard's flip-on-click container),
`wireSayButtons()` already does `preventDefault()` + `stopPropagation()` for you — don't
add a second, competing click handler on the same button.

**Bugs already found and fixed once — don't reintroduce them** (full detail in the
`8957220` commit and the PR #2 thread):
1. Stuck `speaking` class after a second click → fixed by clearing state explicitly on
   that path instead of trusting `onend`.
2. Duplicate listeners from calling `wireSayButtons()` twice on overlapping DOM → fixed by
   the `data-wired` guard.
3. The flashcard's Space-to-flip keyboard shortcut hijacked Space on a *focused* speaker
   button instead of letting it activate normally → fixed by adding `BUTTON` to the
   existing `INPUT|TEXTAREA|SELECT` focus exclusion.
4. A narrow mobile topbar (320px) overflowed once the bionic toggle was added → fixed with
   a tighter breakpoint. **Any new topbar icon button needs the same check** — see §9 for
   how to test it.

## 6. Bionic reading

A toggle (`#bionic-toggle`, persisted to `localStorage`) that bolds the leading half of
each Latin-script word as a scanning aid. Implemented as a fully reversible DOM transform:
`bionicApply(root)` walks text nodes and wraps a prefix of each Latin word in
`<b class="bionic-b">`; `bionicRemove(root)` unwraps those `<b>` tags by splicing their
children back into the parent — no character is ever added or removed, so toggling never
needs a fresh render.

- **`bionicRefresh()` must be called at the end of every render function**, exactly the
  way `wireSayButtons()` must be. It's already wired into `renderStudy`, `renderCard`,
  `renderQuestion`, `answerMcq`, `answerShort`, `finishQuiz`, and `nextOral` — if you add a
  new render path, add the call there too.
- Deliberately **skips Chinese text entirely** — the technique doesn't transfer to a
  logographic script, and applying it would just add visual noise.
- Skips UI metadata via `BIONIC_SKIP_CLASSES` (badges, section numbers, option letters,
  keyword chips, etc.) — if you add a new short label-like element that shouldn't get
  bolded mid-word, add its class to that array rather than special-casing it elsewhere.

## 7. Git / CI conventions

- **This repo's `github-pages` environment only permits deployments from `main`.**
  `.github/workflows/pages.yml` is split into a `validate` job (runs on every branch listed
  in the trigger, checks the data files parse and are well-formed) and a `deploy` job
  (`if: github.ref == 'refs/heads/main'`, `needs: validate`). Don't try to make a feature
  branch deploy directly — publishing happens on merge, by design.
- **If your designated branch's PR has already merged**, don't stack new commits on the
  old merged history. Rebase the branch pointer onto the current `main` first:
  ```
  git fetch origin main
  git checkout -B <branch-name> origin/main   # safe once you've confirmed `git diff HEAD origin/main` is empty
  ```
  then commit and `git push --force-with-lease`. This came up twice in this project's
  history (PRs #1 and #2) and will come up again for chapter 4+.
- Commit messages and PR bodies in this repo explain **why**, not what — the diff already
  shows what changed. Look at the existing commits for the register to match.
- Comments in the code itself follow the same rule: none, unless something is genuinely
  non-obvious (a browser quirk, a cross-function invariant like the `wireSayButtons` /
  `bionicRefresh` call requirement above).

## 8. Calibration & the copyright boundary

- **Never trust the raw OCR text file on its own.** Every chapter built so far needed
  page-image re-reads that caught real errors the OCR silently introduced — a dropped
  exponent turning `10¹⁴×` into `10×`, an entire data table (Tab. 1.2) vanishing outright,
  `6·10⁷` becoming `6+10`. A background verification pass (spawn an agent to re-read pages
  against the OCR and report only material discrepancies — wrong numbers, wrong formulae,
  garbled lists/tables) caught things a single pass missed; worth doing for every new
  chapter, not just the first one.
- **Content is paraphrased, not translated.** The Czech textbook is copyrighted; producing
  a section-by-section English/Chinese translation of it would be an unauthorized
  derivative work, not fair use. What's actually in `data/ch*.js` is original explanation
  following the book's own structure, section order, and terminology — with short direct
  quotes (under ~15 words, for term/definition calibration only) rather than translated
  prose. Keep doing that for new chapters; don't drift into translating full paragraphs.
- **`coverage` and `gapPoints` exist to keep this honest, not to look thorough.** If a page
  wasn't read from a scan, that content either doesn't go in `points` at all, or goes in
  `gapPoints` clearly marked as standard course material pending verification against the
  book. Never upgrade a node's `coverage` to `"full"` because the content sounds plausible.

## 9. Testing conventions

No test framework is wired up — verification happened by scripting Playwright directly
against `file://.../index.html` (Chromium is pre-installed at
`/opt/pw-browsers/chromium`, no `playwright install` needed). Patterns worth reusing:

- **Force clicks on anything with a CSS animation.** A pulsing `.say-btn.speaking` element
  never satisfies Playwright's "stable" actionability check, since its `transform` is
  continuously changing — use `{ force: true }` rather than fighting the animation.
- **Count actual listeners, don't infer them indirectly.** The duplicate-listener bug
  (§5, item 2) didn't show up when measured through `speechSynthesis.speak()` call counts,
  because the test's example text happened to produce exactly one sentence chunk either
  way. Instrumenting `EventTarget.prototype.addEventListener` directly, keyed by a
  `WeakMap`, gave an unambiguous answer instead.
- **For reversible transforms, assert text-content parity**, not just "some `<b>` tags
  appeared." The bionic-reading test checks `innerText` is byte-identical before applying,
  after applying, and after removing.
- **Test every viewport you claim to support** — 320px, 390px, 768px, 1280px at minimum —
  by checking `document.documentElement.scrollWidth` against `window.innerWidth`. This is
  how the mobile topbar overflow (§5, item 4) was caught before shipping.

## 10. Legacy files — safe to ignore, not yet cleaned up

`Biochemistry_Chapters_1_3_Detailed.md`, `Biochemistry_Master_Guide_CN_EN.md`, and the
entire `oral_prep_app/` directory predate the `data/ch*.js` + topic-node architecture — an
early single-file prototype with five hardcoded questions. They're superseded by
everything described above and aren't referenced by `index.html` or `app.js` at the repo
root. Left in place rather than deleted unprompted; a good candidate for cleanup in a
dedicated commit if anyone wants the tree tidier.

## 11. Open items, as of this handoff

- **Chapters 4–7**: blocked on source material. `Biochemie.pdf` isn't in any remote
  session's container (correctly gitignored) — someone needs to push either page-range PNGs
  (same pattern as `extracted_raw/page_8.png`…) or at minimum the table-of-contents pages
  so the real chapter list is known rather than inferred from cross-references.
- **Chinese notes pairing**: `add_page_numbers_and_split.py` (root) now splits and
  page-stamps `生物化学笔记.pdf` locally into 16 volumes of 15 pages each (see
  `生物化学笔记_分卷/README.md`) — but the split PDFs are deliberately gitignored (~444 MB) and
  never cross into a remote session. The next step is the same pattern as chapters 1–3:
  extract a handful of page-range PNGs from one volume and push those, so a session can
  read the handwriting directly and fill in the `cnNote` fields currently marked
  `"pending"` (all of chapter 3) or `"partial"` (§2.2.5–2.2.6 of chapter 2).
