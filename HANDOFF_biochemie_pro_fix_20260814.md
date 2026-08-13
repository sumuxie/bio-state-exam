# HANDOFF — biochemie_pro, 2026-08-13/14

One session's work, `biochemie_pro` only. `biochemie_basic` and `PESB/` were not touched.
Read `HANDOFF.md` §12 for the architecture of what is described here; this file is the record
of what changed, what was checked, and what is still owed.

## What was asked for, in order

1. more questions;
2. a wrong-answer book, with each wrong option annotated with the knowledge it stands for;
3. an assessment of whether the app is deep enough (report only, no changes);
4. research on how oral examiners actually phrase questions;
5. a content-trustworthiness audit, and then the fixes;
6. a per-chapter notebook;
7. commit and push.

## 1. The bank layer — 638 new questions

`data/bank_ch1_3.js` … `data/bank_ch10.js`, nine files, attached to nodes **by id** so the
page-verified `ch*.js` files are never reopened to append a question. Rules in `BANK_SPEC.md`,
architecture in `HANDOFF.md` §12a.

- **638 items (432 mcq + 206 short) across all 207 Czech nodes.** Core was 797, so the bank is
  the same order of magnitude as everything written before it.
- **Every wrong option in all 432 mcq is annotated** — `optionNotes` (bilingual prose naming
  the misconception) and/or `optionRefs` (the node id where that concept actually lives,
  rendered as a jump button). Zero filler distractors.
- Written by nine agents, one chapter-range each, each told that the node's own
  `points`/`summary`/`mustKnow`/`terms`/`coverageNote` are the entire universe of facts it may
  use. Four items were spot-checked by hand against their nodes afterwards and all four were
  sourced.
- **`gapPoints` was excluded** as a source, on the reading that BANK_SPEC lists it nowhere and
  the data itself flags it as non-book material. Consequence, still open: `3-3-1`, `3-5`,
  `3-7` and `2-2-2` carry much of their substance there (the Michaelis-Menten derivation, the
  inhibition types), so those nodes have fewer bank questions than their size suggests.
  Whether bank questions may draw on `gapPoints` is Ruojin's call, not a default to change.

**The stale-`qsrc` bug, and why it matters more than it looks.** The Quiz tab kept reporting
797 after all this landed. The `bank` level had been empty for months, so every browser that
had ever opened the app held `qsrc: 'core'` in localStorage — not as a preference between core
and bank, but as the only value there was to store. `app.js` now promotes that stale `'core'`
to `'bank'` once and records `qsrcPromoted`, so a later deliberate switch back to core sticks.
Anything that adds a new level to an existing persisted setting has this problem; look for it.

## 2. Wrong-answer book, and per-option annotations

Full description in `HANDOFF.md` §12b/§12c. Shape:

- A missed question is stored **whole** — the question object, the option picked or the text
  typed, how many times missed, how many times right since. Not a pointer: generated term-drill
  questions have no stable identity and their options are shuffled at generation time.
- `ok` counts CONSECUTIVE correct answers, any wrong answer resets it, and the entry leaves the
  book at `WRONG_CLEAR = 2`. A drill asks each entry once, so the countdown can only complete
  in a second sitting — intended, and the first version of the smoke test failed because it
  assumed otherwise.
- The 797 pre-existing `core` questions carry **no** annotations, so answering an old question
  wrong prints "nothing in the course corresponds to this one" for every distractor. Not a bug;
  an unwritten layer. Annotating core is the obvious next content job.

## 3. Depth assessment (no changes made)

Measured, not guessed. Per-node the Czech layer is not thin — 11.8 points, 4.9 terms, 2.9 core
questions, `oral` and `mustKnow` on all 207. The ceiling is the source book: 221 pages for the
whole of biochemistry.

The felt unevenness is real and localised: **47 of 78 `topicKey`s have a Lehninger depth node,
31 do not**, and the 31 include enzyme-kinetics (5 nodes), gluconeogenesis, the pentose
phosphate pathway, the urea cycle, glycogen metabolism, amino-acid degradation and
bioenergetics-and-thermodynamics. A Lehninger node averages 17.9 points and ~50 kB against a
Czech node's ~12 kB, so a topic with depth has 4–5× the material. glycolysis has one;
gluconeogenesis does not. That is the whole explanation for "sometimes it feels shallow".

`trace` (the 追根溯源 chain) exists on only 33 of 207 nodes, and chapters 5, 8 and 9 have none.

## 4. Oral-phrasing research — `ORAL_PHRASINGS_RESEARCH.md`

1,242 lines, ~30 searches, ~45 documents, evidence-tagged throughout ([A] fetched and read,
[A*] fetched by a sub-agent and not re-read, [B] second-hand, [C] reconstruction).

The central finding, **independently re-verified here** by downloading the Plzeň English list
and parsing it: 436 numbered items across four published Central-European exam lists, and **not
one is a question** — all noun phrases ("Regulation of enzyme activity"), including the document
titled *ORAL QUESTIONS FOR EXAMINATION IN MEDICAL BIOCHEMISTRY*. The spoken exam meanwhile runs
on verb-first stems (Describe / Explain / Account for / Compare and contrast). **The student
revises a noun-phrase syllabus and is examined in a verb-first language, and nobody publishes
the mapping.** §8 of that file proposes a `data/stems.js` layer for it. Not built.

Second most useful result, and it is published rather than reconstructed: the probe taxonomy —
"let me put it another way" means *you are wrong*, "can you be more specific" means *right but
underspecified*, "what effect does that have on…" means *right, and I am raising the level*.

Biggest gap, stated as such in the file: **no corpus of real spoken Czech/Slovak oral questions
exists anywhere on the open web.** Ten probes written down straight after a real exam would be
worth more than all of §3's reconstruction.

## 5. The content audit, and the fixes

### How the problem was found

Not by looking for it. Two agents writing bank questions reported that chapter 8's `mustKnow`
fields describe other nodes' content. `mustKnow` is **authored**, not transcribed — it is a
teaching layer added on top of the book-derived `points`/`summary`, and it is always visible in
the UI, so it is the most expensive text in the app to get wrong.

### What was measured

- **Word-overlap scan, all 270 nodes** (`mustKnow` vocabulary against the rest of its own node):
  median 0.68; 15 of the 17 worst scores in chapter 8; chapter mean 0.48 there against 0.74–0.78
  for chapters 5, 6, 9, 10.
- **Numeric scan, all 270 nodes**: 6 nodes whose `mustKnow` carries a number the rest of the
  node does not.
- **Chapter 8 read node by node** (all 40) — `_audit/ch8.md`.
- **Seven lowest-scoring non-ch8 nodes read** (`1-6`, `3-2`, `3-4`, `4-1`, `7-2-1`, `7-4-1-2`,
  `7-8-2`): **all clean**. The automated pass's best remaining suspects are all false positives.

**An agent's claim was overturned in the process.** "17 of 20 nodes in 8-3-6…8-5-3-3 have a
misplaced mustKnow" was an overstatement; reading gives 9 misplaced + 1 unsourced, 6 clean, and
the clean ones cluster (membrane transport `8-5-3-*` is entirely sound). Numbers that go into a
repair list have to be ones somebody checked.

**And the scan's blind spot is now proven.** `5-2-1-1` claims in `mustKnow` that only oxidative
deamination releases free ammonia, while its own `points[0]` (histidine → urocanic acid + NH4⁺)
and `points[1]` (serine dehydration) both release it. That node scores *fine* on word overlap —
the vocabulary matches perfectly, because the claim is on-topic and simply false. Only a reader
finds this class. **Its extent outside chapters 5 and 8 is unknown.**

### What was fixed

**23 `mustKnow` fields rewritten**, each derived only from its own node's `points`/`summary`:

- Chapter 8, misplaced (15): `8-2-3`, `8-2-4-1`, `8-2-4-3`, `8-3-4`, `8-3-5`, `8-3-6`, `8-4-1`,
  `8-4-3`, `8-4-4-3`, `8-4-4-4`, `8-5`, `8-5-1`, `8-5-2-1`, `8-5-2-2`, `8-5-2-3`. Two runs:
  the fatty-acid-synthesis step sequence had slid off `8-3-3` onto its neighbours, and the whole
  membrane section carried other sections' text. `8-4-4-3`/`8-4-4-4` were a clean swap.
- Chapter 8, unsourced (7): `8-1` (a "400+" that counts carotenoids in `8-2-4-6`), `8-2-2-1`
  (an energy-density figure the node does not contain), `8-2-3-2`, `8-2-3-3`, `8-2-4-2` (a
  photon "sending electrons down a wire toward an opsin" — absent from the node and garbled
  besides: light isomerises retinal), `8-3-1`, `8-4-4-1` (a carnitine shuttle this book never
  mentions, as the chapter's own `lehNotes` records).
- Chapter 5 (1): `5-2-1-1`, rewritten to state the trap rather than repeat it.

**Two book errors flagged, not corrected** — both confirmed against the page scans on
2026-08-14, so the transcription was faithful and the incoherence is the book's:

- **`8-3-8`** — p.192's figure runs a right-hand column GPP → GGPP → phytoene, making
  geranylgeranyl-PP the product of one head-to-tail condensation from geranyl-PP. C10 + C5 = C15,
  not C20. A `FLAG` point now says so and tells the candidate to answer FPP + IPP in an exam.
- **`8-5-3-1`** — p.200 prints, in one sentence, that simple diffusion happens *"bez jakékoliv
  účasti membránových proteinů"* and then lists *"kanálky vytvořenými integrálními membránovými
  proteiny"* as one of its routes; Obr. 8.3's route (B) draws exactly that. Flagged with the
  Czech quoted verbatim and the standard usage given.

Left alone deliberately: five low-severity `mustKnow` embellishments (`8-2-2-2` "oils
evaporate", `8-2-4-4` naming estrogen where the node gives progesterone and testosterone,
`8-3-7`'s "30+", `8-2-1-2`, `8-4-2-2`), and every book oddity the nodes already flag.

### What is still owed

- **167 Czech nodes and 60 Lehninger nodes have had no reading pass.** Nine audit agents were
  dispatched for the Czech chapters and all nine died instantly on an account session limit,
  having read nothing. Re-dispatch them: `AUDIT_SPEC.md` is the entire brief, one agent per
  chapter range, output to `_audit/<range>.md`.
- **Chapters 7 and 8 have still never been verified against the page images** by a second
  reader — the oldest open item in the project (HANDOFF.md §0). This audit checked internal
  consistency only; it cannot tell you whether a node matches the book. `extracted_full_ch7/`
  and `extracted_full_ch8/` hold every page.
- 20 English adverbs stranded inside Chinese prose (`D-/L-符号specifically指的是…`): 12 in ch7,
  6 in ch6, 2 fixed in `bank_ch7a.js`. Cosmetic, untouched in the verified files.

## 6. The notebook (new)

📝 tab. One free-text note per chapter, saved as you type, in localStorage under
`biopro.notes`.

- **Per chapter, not per node.** 270 boxes is a filing system; what a reader wants while
  revising is one page they keep adding to, and the chapter is the unit the exam draws on.
- **Notes are the only thing in this app the reader cannot regenerate.** Progress, Leitner
  boxes and the wrong-answer book all rebuild themselves from use; notes do not. Hence a
  permanent (not dismissible) warning that they live in this browser only, an **Export all**
  button producing plain Markdown that reads fine with no app at all, and an **Import** that
  round-trips it.
- **Import merges, never overwrites.** A chapter that already has a note gets the imported text
  appended under a dated rule. Losing written words to a well-meaning import would be the same
  bug as losing them to a cleared browser.
- Saving is debounced 400 ms while typing and forced on blur, on chapter switch, and on
  `pagehide` — a phone backgrounding the tab must not eat the last sentence.

**The smoke test earned its keep here.** The chapter-switch handler saves the old text and then
loads the new chapter, but by the time it runs the `<select>` already reads the NEW value — so
saving against `select.value` filed the previous chapter's note under the chapter being opened,
and loaded it straight back. Every chapter switch would have duplicated notes forward. It looks
correct in the source and it is invisible unless you actually switch chapters and look; the
test caught it on the first run. `app.js` now tracks `noteCurrentKey` — the chapter the textarea
is *showing* — separately from the select's value.

## 7. How it was checked, with no `node` on this machine

CI still runs `tools/validate-data.js` and stays authoritative; it now also validates the bank
layer and the option annotations. Locally:

- `tools/check-in-browser.html` — data validator. Final run: **RESULT OK**, 253 topics, 797 core
  + 638 bank on 207/207 Czech nodes, no problems.
- `tools/smoke-app.html` (was `smoke-wrongbook.html`) — drives the real app in a same-origin
  iframe: quiz → wrong answer → book → drill → countdown → removal, and now the notebook.
- A three-line `new Function(source)` check in the browser for syntax, since `app.js` and the
  CI validator cannot be parsed by anything else here (`cscript //E:JScript` exists but is ES3 —
  no `JSON`, no `Object.keys`, no arrow functions).

Three mechanics that cost real time and are worth knowing before touching those tools:
`--dump-dom` prints at the load event, so a test deferred by even one `rAF` is dumped before it
runs; `--virtual-time-budget` hangs on the app page because the speech-synthesis handlers keep
the queue from draining, so it is used only on the data validator; and **a stray headless
browser still holding a `--user-data-dir` makes the next launch attach to it and exit with a
zero-byte dump**, which looks exactly like "the page is broken".

## 8. Files

New: `BANK_SPEC.md`, `AUDIT_SPEC.md`, `ORAL_PHRASINGS_RESEARCH.md`, `_audit/`,
`biochemie_pro/data/bank_*.js` (9), `tools/check-in-browser.html`, `tools/smoke-app.html`.
Changed: `biochemie_pro/{app.js,index.html,style.css}`, `biochemie_pro/data/{ch5.js,ch8.js}`,
`tools/validate-data.js`, `HANDOFF.md` (§0 pointer + §12).
