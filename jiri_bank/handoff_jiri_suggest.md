# EXAMBANK — handoff (Jiri's suggested questions)

Sixth trainer. Question bank for the supervisor's three state-exam question sheets.
Scope in `SCOPE.md`; read that second, read the section below **first**.

---

# 1. READ THIS FIRST — this project truncates sessions, plan for it

This is not a warning about a hypothetical. It has now happened at three different levels,
on three different models, in this same body of material:

| level | what happened | recorded in |
|---|---|---|
| subagent | every subagent handed the handbook source text was killed by a provider content filter, on two models — including one whose only sections were sonication, BCA and cell culture | `labhandbook/HANDOFF.md` |
| whole session | session `4eda323f` died mid-sentence writing its summary; four resume attempts died at the identical point; the last fell back to Sonnet and got "start a new session" | this file, §2 |
| single tool call | a `cat >> HANDOFF.md <<'MDEOF'` heredoc was cut off before its terminator, leaving a half-written file and a shell syntax error | while writing this file |

The trigger is the **accumulated context**, not any one sentence. Nobody has seen the
classifier, so do not try to guess which sentence did it and route around that sentence —
that guess cannot be checked and will be wrong in a new way next time.

## The rules that actually work

1. **Write to disk early and often.** Anything that exists only in the conversation is lost
   when the session dies. A decision is not made until it is in a file.
2. **Cap every write at 2-3 k characters** and run `wc -c` on the target immediately after.
   Do not batch five sections into one heredoc because it is tidier.
3. **Prefer `printf` or a short `python - <<PY` over a long heredoc** when the text contains
   markdown tables or backticks — a truncated heredoc leaves an unterminated quote, and the
   shell error that follows looks nothing like the real cause.
4. **Never resume a session that hit the safeguard.** Resuming re-sends the same context and
   re-trips it, deterministically. All four attempts on `4eda323f` proved this. Start fresh
   and seed from this file.
5. **Do not delegate authoring to subagents.** Already measured as failing, see the table.
6. **Keep this file current as you go**, not at the end. It is the only thing that survives.

## The node-size rule, which is a separate problem with the same symptom

Independently of the safeguard, a finished full-depth node runs 37-41 k characters, which
overruns a single file write and a single heredoc alike. Both truncate mid-string and leave an
unterminated quote, and the page goes blank with no useful error.

Write each node as 5-7 appends of roughly 5 k to a scratch fragment file, `wc -c` after each,
and splice only once the fragment ends in a closing `}`:

```bash
python tools/splice.py data/ch1.js /path/to/frag_1_3.js
```

`splice.py` refuses to run unless the target ends in `]);` after a closing `}`, so a
half-written chapter is never silently appended to. `check_strings.py` catches a truncated
append immediately — run it after every splice, not at the end of the chapter.

**Symptom overlap is the trap here.** A safeguard cut and an over-long write both look like
"the file ends in the middle of a string". Tell them apart by whether the *assistant message*
also stopped: safeguard kills the message, size only kills the file.

---

# 2. What happened to the previous session (so it is not re-investigated)

Session `4eda323f` (2026-08-22, 18:11-20:39 UTC) took the supervisor's question sheets, built
`labhandbook/`, then forked `molbio/` from it. At 20:39:18 it was writing its closing summary
and was cut off by `API Error: Opus 5's safeguards flagged this message`. Sessions
`204ac747`, `cc7f1541`, `557a62c8` and `1529c33f` are all resumes of that same conversation —
verified by identical first message and timestamp — and all four died at the same point.

Nothing was corrupted and nothing was lost that had been written. `molbio/` has a complete
engine and an empty `data/`, so **zero question content had been written when it died**.

**`molbio/` is scoped wrong and must not be used as the plan.** It was built around a
four-tier "nothing in 13 MB is titled after these, write these first / do not spend time on
the rest" frame, i.e. a supplement of the uncovered topics only. Ruojin corrected this on
2026-08-22: the bank must cover **all** the sheet questions, in the shape of his sheets,
pulling content in from the neighbouring corpora. See `SCOPE.md`.

Its *verification findings* are still good and worth keeping — in particular that the
handed-over gap list was wrong on CRISPR (305 hits and a titled node `L-9-2-1` in Lehninger),
on PCR (374 hits in pesbexplain), and on ubiquitin/proteasome (26 titled nodes, drop it).
Those came from a title scan that asks "does any node TITLE name this topic", which is a
better question than raw keyword counts and is worth re-running.

---

# 3. Decisions taken 2026-08-22, with Ruojin

| decision | choice |
|---|---|
| coverage | **all 84 topics**, not a supplement |
| organising frame | the supervisor's own three headings: Basic Lab Techniques / Microbiology / Biochemistry |
| depth | **two tiers** — see §4 |
| first batch | **A1**, ordered by sheet weight |
| app | a **new** app in `exambank/`, forked from `labhandbook/` |

Depth was chosen against the alternative of writing all 84 at full `labhandbook` weight
(29 k median characters per node, ~2.4 MB total). Rejected as too slow given that the
material reliably kills sessions; the effort goes where content is actually missing.

---

# 4. The two node tiers

## Tier DEEP — the 21 GAP / THIN / PARTIAL topics

A full `labhandbook`-spec node. Five levels of depth, which is the structure the existing
project already runs, not a new invention:

| level | field | size | role in the oral |
|---|---|---|---|
| T1 | `mustKnow` | 1-2 sentences | the first thing you say; the examiner judges on it |
| T2 | `summary.en` | 150-250 EN words, ~90 s | the full answer when nothing is asked back |
| T3 | `explain[]` | 2-4 q/a | the follow-up chain; each must give a mechanism, not a phenomenon |
| T4 | `trace{}` | what/from/to/family/numbers | where a number came from; only when there is a real number |
| T5 | `skipIt` | 2-3 sentences | what explicitly need not be memorised |

Plus 5 MCQ and 2 written answers. ~29 k characters.

`skipIt` is not optional. The whole reason the covered topics can be de-prioritised is that
somebody wrote the boundary down.

## Tier IMPORT — the 63 COVERED topics

Four fields, no new facts:

```
stem_en     the examiner's wording, copied from the sheet including its typos
model_en    a 90-second model answer, built only from facts already in the source node
followups   3 likely follow-ups, each with a one-sentence answer
sourceNode  the source node id, so every claim is traceable
```

The permitted fact set is the source node's `points` / `summary` / `mustKnow` / `terms`.
**Do not add a fact from your own knowledge to an IMPORT entry** — nobody will re-check it
against the book. If the source turns out too thin to answer the question, do not paper over
it: promote the topic to DEEP and say so in this file.

---

# 5. First batch — A1

Ordered by sheet weight (Sheet 1 x3, Sheet 2 x2, Sheet 3 x1), which is justified by the
measurement that all 11 cross-sheet repeats include Sheet 1.

| node | topic | from | weight | verdict |
|---|---|---|---|---|
| `1-1` | standard curve quantitation **+** preparing a standard solution **+** molarity | S1 Lab1, S3 Lab4/7/18, S2 Lab10 | x3 repeat | GAP |
| `1-2` | protein **fitness** landscape vs protein **folding** landscape | S1 Bio7 | x3, S1 only | GAP |
| `1-3` | isolating and culturing bacteria from a sample (streaking, selective/differential media) | S3 Micro7 | x1 | GAP |
| `1-4` | **RF cloning** — principle only, see the block below | S1 Lab4 | x3, S1 only | GAP |

These four are the only hard findings in the whole coverage analysis: zero hits across all
13 MB. Everything else sits on a continuous slope and its verdict is soft.

`1-2` is worth its weight: it appears on Sheet 1 only, has zero hits anywhere, and lands on
Ruojin's own project. Almost certainly added by the supervisor personally.

## `1-4` is blocked at the sequence level and must stay blocked

It is the only practical task on any sheet, but the gene sequence printed on the paper is a
photo transcription: it translates with 7 internal stop codons in frame +0, so bases were
misread. `state_exam/questions_data.py` marks both sequences UNVERIFIED.

Write the **principle** — the two-part primer, why the stop codon has to go, why the insertion
point must stay in frame with the alpha-mating factor prepro secretion leader that precedes
`-HERE-` in the destination plasmid. **Do not design primers against those bases** until the
digital original is in hand. What is confirmed is only that the sequence left of `-HERE-` is
the S. cerevisiae alpha-factor prepro secretion signal.

---

# 6. Authoring rules the checkers enforce

Carried unchanged from `labhandbook/HANDOFF.md`. The first three are the ones actually tripped
over so far.

1. `mustKnow`, `skipIt` and `explain` sit **before** `points`. `check_structure.py` splits on
   `\n  points:` and throws if they come after.
2. Indentation is load-bearing: node opens `  id: '1-3',` at two spaces, `  explain: [` at
   two, items `    {` at four, item fields `      q: '` at six, `trace` keys at eight.
3. A Latin word must never touch a CJK character — `Tris 缓冲液`, never `Tris缓冲液`. The MIX
   scan fails the build on this and it has already caught one slip.
4. Apostrophes inside single-quoted strings must be escaped (`don\'t`) or the page goes blank.
5. `trace` rows appear in the order what, from, to, family, numbers.
6. `quiz` is exactly 4 items; `bank` has no count rule.
7. Long prose is written as `'part one ' +\n 'part two'`.
8. `optionRefs` must never point at the correct answer, nor at the node's own id.

## The MCQ length-bias gate — re-run after every node

The parent corpus had a measured defect: correct options written as full explanatory
sentences, distractors as short noun phrases, so **89 percent were answerable by picking the
longest option** without reading any biology.

Fix by cutting the correct option down to its bare claim — the reason belongs in `why_en`,
which the app reveals on answering — or by raising a distractor's specificity to match. Never
by padding the correct option. Option order is shuffled at run time by `shuffleOptions()`.

---

# 7. Build state

```
exambank/
  handoff_jiri_suggest.md   this file
  SCOPE.md                  what the bank covers and why full coverage is allowed
  app.js                    forked from labhandbook, reconfigured (see below)
  index.html                rebranded, four script tags
  style.css                 unchanged
  tools/                    check_structure.py check_strings.py jsbalance.py splice.py
  data/                     EMPTY — no nodes written yet
```

## Run

```bash
cd exambank && python -m http.server 8797
# http://localhost:8797/index.html
```

With `data/` empty the page shows "No topic data loaded" rather than a blank screen —
that is the expected state, not a bug.

Validate from inside `exambank/`:

```bash
python tools/check_structure.py       # must end RESULT: PASS
python tools/check_strings.py         # per-chapter string closure
python tools/jsbalance.py data/chN.js
```

## Engine changes made to the fork

- `CHAPTER_TITLES` replaced with four chapters; `CHAPTERS` is `[1,2,3,4]` and still filters to
  chapters that have nodes loaded, so declaring a chapter before its data file exists is safe.
- `PREFIX` is `exambank.` — six trainers now share one origin (`bio.`, `pesb.`, `pesbpro.`,
  `pesbexplain.`, `labhb.`, `exambank.`), so a shared prefix would let each overwrite the
  others' progress.
- `index.html`: title, brand, brand-sub, four script tags.

Nothing else in the engine was touched, so a fix in `pesbexplain/app.js` still ports across.

## Chapter layout, and the one judgement call in it

Chapters 1-3 are the supervisor's own headings, copied off the sheets. **Chapter 4, Applied
molecular biology, is not on any sheet** and was added deliberately.

Reason: `molbio/`'s title scan found five topics that nothing in 13 MB is titled after —
qPCR/RT-qPCR, the RNAi family, protein-protein interaction (Y2H / pull-down / SPR),
transgenic and knockout animals, and telomerase — and the course they belong to
(*Molekulární biologie a genetika II*) is one the supervisor sits on the committee for.
Protein-protein interaction in particular is Konvalinka's own field.

They do not map onto a sheet question, so forcing them under Lab or Micro would misrepresent
where they came from. Chapter 4 keeps that visible. **If the sheets turn out to be the whole
exam, chapter 4 is the first thing to cut** — it is the only part of this bank not traceable
to a printed question.

## Data contract

Data files push onto `window.PESB.topics`, inherited from the fork chain. The name is wrong
for this app but changing it means touching the engine, which would break the "a fix in
`pesbexplain/app.js` still ports across" property. Leave it.

```js
window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([
{
  id: '1-1',
  chapter: 1,
  ...
}
]);
```

Every node carries `chapter:` matching its file, and `slides` carries the sheet references
(e.g. `S1 Lab1`, `S3 Lab4/7/18`) rather than a handbook section — the same convention
`labhandbook/data/ch5.js` uses.

---

# 8. Progress log

Append one line per node as it lands. This is how a fresh session knows where to resume
without re-reading the data files.

| date | node | tier | status |
|---|---|---|---|
| 2026-08-22 | — | — | engine forked and configured |
| 2026-08-22 | 1-1 … 3-2 | DEEP | **8 nodes ported from labhandbook** by `tools/port.py`; all three checkers PASS |
| 2026-08-23 | — | — | design corrected to question-as-unit (§9); `tools/qindex.py` built, 30/98 questions have a confident source (§10) |
| 2026-08-23 | — | — | **moved to `bio-state-exam/jiri_bank/`** and rebranded; it is a separate bank, not a chapter of an existing app (§11) |

## What the port already gave us — read before writing anything

`tools/port.py` is re-runnable and rebuilds `data/ch1-3.js` from `../labhandbook/data/`. Eight
nodes are already in, at full DEEP weight (37-41 k each), because they were written upstream
and answer a printed sheet question:

| new id | ch | topic | was |
|---|---|---|---|
| `1-1` | Lab | standard solution, standard curve, molarity | `5-1` |
| `1-2` | Lab | pH and pKa | `4-1` |
| `1-3` | Lab | buffers and the Tris paradox | `4-2` |
| `1-4` | Lab | the glass electrode, and why calibration is not optional | `4-3` |
| `1-5` | Lab | BCA quantification, and the standard curve again | `3-2` |
| `2-1` | Micro | isolating and culturing bacteria | `5-3` |
| `3-1` | Biochem | fitness landscape versus folding landscape | `5-2` |
| `3-2` | Biochem | the lac operon mirrored against GAL1 | `4-4` |

**Three of batch A1's four nodes were already written** — `1-1`, `2-1` and `3-1` are the
standard-curve, bacterial-culture and landscape GAP nodes. Only RF cloning remains, and it is
sequence-blocked. Check `port.py`'s PORT table against a topic before writing it; the previous
session nearly rewrote 100 k characters that already existed.

**Do not hand-edit `data/ch1.js`, `ch2.js` or `ch3.js`** — `port.py` overwrites them. Nodes
written for this app go in `ch1b.js` / `ch2b.js` / `ch3b.js` with a script tag added.

## Next, in order

1. `1-6` RF cloning principle — DEEP, new, sequence-blocked (see §5)
2. Extend `PORT` with any further labhandbook or PESB node that answers a sheet question
3. Batch A2: SARS-CoV-2 lineage, antibiotic heat stability and satellite colonies, gel
   electrophoresis and DNA staining, DNA/RNA quantitation
4. Then A3, A4, then the 63 IMPORT entries

## Chapter 4 queue — re-measured 2026-08-23, and it corrects the earlier gap list

Scanned all seven corpora (13 MB, 1,884 node titles) in **both languages**, asking both "is any
node titled after this" and "how many raw hits per corpus". Three topics that an earlier
keyword pass called gaps are **not** gaps, and the reason is instructive: that pass read only
`biochemie_pro/data/ch*.js`, the ten main chapter files, and missed the **58 `leh_*.js`
Lehninger files** in the same folder.

| called a gap before | actually | evidence |
|---|---|---|
| CRISPR / Cas9 | **covered** | 193 hits in biochem_pro, titled node |
| DNA repair (BER/NER/MMR) | **covered** | 177 hits, titled node in both EN and CN |
| chromatin / nucleosome | **covered** | 537 hits, titled node |
| ubiquitin / proteasome | **covered** | 48 + 43 hits (already flagged by molbio) |

What survives, in order of emptiness — this is the chapter 4 queue:

| rank | topic | titled? | raw hits | status |
|---|---|---|---|---|
| 1 | SPR / Biacore / ITC | no | **0 anywhere** | **done — node `4-2`** |
| 2 | Southern / Northern blot | no | **0 anywhere** | **done — node `1-7`** |
| 3 | yeast two-hybrid | no | 10, biochem_pro only | done — in `4-2` |
| 4 | microarray / gene chip / RNA-seq | no | 4 | **done — node `4-3`, validated** |
| 5 | agarose gel + DNA staining | no | 12, and PESB's `agarose` is **chromatography resin**, not a gel | done — in `1-7` |
| 6 | telomere / telomerase | no | 40 | **done — node `4-4`, validated** |
| 7 | transgenic / knockout animals | no | 54, mostly `knock-out` in the genome/strain sense | **queued — next** |
| 8 | stem cells / immortalised lines | no | 42 | queued |
| 9 | alternative splicing / RNA editing | no | 23 | queued |

Rank 2 turned out **not** to be a chapter 4 node and is now written as `1-7`: *"Explain the
principle of a Western blot"*, *"What is the principle behind gel electrophoresis?"* and *"What
is the purpose of using a loading control in Western blotting?"* are all printed sheet questions
(S3 Lab 8 / 11 / 12) and all three were among the eight with no candidate source in §10, so the
blotting family belongs in chapter 1 as a sheet-traceable node. It lives in the new
`data/ch1b.js` — `ch1.js` is regenerated by `port.py` — and `1-6` is still free for the RF
cloning node planned above.

Two things learned writing it, worth carrying to the next node:

- **Check what a keyword hit actually says before calling a topic covered.** Every
  `Western blot` hit in pesbexplain (1.2.5, 1.7, 2.10, 2.14, 6.5) is a name-drop in a quiz
  option or a use-case list; none explains what a blot is. Conversely the separation step for a
  protein blot is genuinely covered — pesbexplain `2-43` teaches SDS-PAGE including the
  three-jobs argument — so that was imported by reference rather than rewritten, per SCOPE.md.
- **The length-bias gate catches real regressions, so run it before declaring a node done.**
  See the progress log entry: this node was 6/6 longest-is-correct on first write.

**Node ids are per chapter, not global.** `1-1` above means chapter 1 node 1; a topic that
belongs to Microbiology gets a `2-x` id even if it is in batch A1. The batch letter is a
priority label from `BANK_DESIGN.md`, not part of the id.

---

# 9. The unit is the QUESTION, not the node — corrected 2026-08-22

Ruojin, on seeing the first port: *"主要是逻辑上修改一下就行，因为现在我学的很多东西比较细碎，
但是我老板给的题目明显比较整合性。其实就是新瓶装旧水就行。"*

That is the whole design in one sentence, and it overrules the chapter-of-ported-nodes
structure built earlier the same day.

**The problem is not missing content. It is granularity.** The existing corpora are organised
the way the material was taught — one node per technique, per reagent, per mechanism. The
supervisor's questions are integrative: one question reaches across many of those nodes.

Worked example, Sheet 1 Lab 3, *"Describe protein expression workflow in bacterial cells"* —
a single oral answer that spans at least eight existing `pesbexplain` nodes:

```
2-4  why E. coli          2-6  getting DNA in        2-7  promoters
2-8  the T7 / DE3 system  2-9  IPTG induction        2-10 inclusion bodies
2-26 cell disruption      2-29 chromatography
```

Nobody fails this question for not knowing the facts. They fail it for not having ever said
them in one breath, in that order. **That ordering is the thing this app adds, and it is the
only thing it adds.**

## What this changes

| | before | now |
|---|---|---|
| unit | a ported node | an exam question |
| content | copied wholesale | assembled from several nodes |
| new writing | per node | only where no source node exists |
| what is authored | prose | **the spine: which nodes, in what order, and the joins between them** |

New bottle, old wine. **Do not write new facts into a question that has source nodes.** The
permitted fact set stays what it was in section 4: the source nodes' `points` / `summary` /
`mustKnow` / `terms`. If the assembled answer has a hole, that hole is a finding — record it
in the progress log and promote the topic, do not fill it from memory.

## The entry format

One entry per question. This replaces the DEEP/IMPORT split in section 4 as the primary
layer — the tiers now describe how much of the entry has to be written rather than two kinds
of node.

```
stem_en      the examiner's wording, copied off the sheet including its typos
sheets       where it appears: S1 Lab 3, S2 Micro 20 ... (drives the x3/x2/x1 weight)
spine[]      the ORDER to say it in — one line per beat, each naming its source node
model_en     the 90-second answer, assembled by walking the spine
joins[]      the sentences that carry you from one node to the next; THIS is the new writing
followups[]  3 likely follow-ups, each with a one-sentence answer and a source node
sourceNodes  every node the entry draws on, so any claim can be checked
gaps[]       beats with no source node, named explicitly rather than quietly written
```

`spine` and `joins` are the deliverable. Everything else is either copied or a pointer.

## Where the eight already-ported nodes now sit

They stay. They are the deep reference layer a question links into — `sourceNodes` has to
resolve to something inside this app for the trace to be clickable, and for the eight topics
that are wholly one node (`1-2` pH and pKa answers Sheet 2 Lab 1 almost on its own) the
question entry is thin and the node carries it.

`tools/port.py` therefore keeps running. What changes is that the port is no longer the plan;
it is the substrate. Expect the PORT table to grow to cover every node any question cites.

---

# 10. The question index, and what it can and cannot tell you

`tools/qindex.py` reads the three question sheets and all seven corpora and writes
`_qindex.json`, a worksheet of candidate source nodes per question. Run it with:

```bash
cd exambank && python tools/qindex.py
```

It parses 810 nodes across seven corpora in three different node formats, and asserts both
that every corpus is non-zero **and** that the parsed count equals a raw marker count — an
earlier version silently read 77 of biochem_pro's 284 nodes because `leh_*.js` indents its ids
by four spaces and `bank_*.js` by two.

## What it outputs, and why it is split in two

```
98 unique questions
  30 with a controlled-vocabulary (term) match  <- act on these
  60 with only a fuzzy shortlist                <- needs a human
   8 with nothing at all                        <- candidate gaps
```

**The split is the point.** A candidate found because the question names one of the node's
`terms` is a different kind of evidence from one found by fuzzy title overlap, and ranking them
into one list hides which is which. Roughly 26 of the 30 term matches are right on inspection;
the other four hang on a weak term (`lipids` via 体内, `metabolic regulation` via `regulation`).
So even the confident column is a starting point for confirmation, not an answer.

**The fuzzy column is mostly noise and should be read as such.** Measured failures, kept here
because each one looks plausible until checked: `gram` matched `Reprogramming` (substring
instead of word-boundary matching); 结构与功能 was counted three times as three overlapping
windows and outranked 糖类 on a carbohydrates question; 什么 and 工作 scored as rare-and-
therefore-valuable because they are rare in node *titles* while being pure question phrasing.
Each of those was a separate fix, and the pattern says there are more.

## The one threshold, and where it sits

`GENERIC_TERM_MAX = 2`: a vocabulary term matching more than two of the 98 questions is
suppressed. Measured rather than guessed — only 52 distinct terms match any question at all,
p90 of that distribution is one question, and the only terms above two are `protein` (6),
蛋白质 (4) and 聚合 (3). Those three were pulling three unrelated questions onto one node.

The cut therefore sits in a gap between two separated populations, not on a slope, so the
exact value does not matter. That is the only kind of threshold this project accepts without a
stated caveat, and `generic_terms()` prints what it suppressed on every run so the claim stays
checkable.

## The 8 questions with no candidate at all

| weight | question | GAP_REPORT said |
|---|---|---|
| x2 | What is OD600? | THIN — **done, node `1-8`** (with Lambert-Beer) |
| x2 | Explain the term "propeptide" | — |
| x1 | Explain the principle of a Western blot | PARTIAL — **done, node `1-7`** |
| x1 | How do you ensure accuracy and precision of pipetting | PARTIAL |
| x1 | How do you sterilize lab equipment | THIN |
| x1 | How do you perform a Gram stain | — **done, node `2-2`** |
| x1 | Describe the process of endospore formation | THIN |
| x1 | What are the differences between C3, C4 and CAM plants | — |

Six of the eight were already flagged THIN or PARTIAL by an independent method, which is worth
something: two unrelated paths agreeing is the same kind of corroboration that made the
DO-question finding usable. **It is not proof.** `quorum sensing`, `western blot` and
`auxotrophy` were checked by hand against every node title in every language and genuinely
have none; the others were not checked one by one.

## What to do with it

1. Take the 30 confident matches, confirm each against the named node, and write the question
   entry (section 9 format) from it. This is the fastest real progress available.
2. For the 60 fuzzy ones, do not trust the shortlist — search the corpora directly for the
   concept, in **both** languages. The biochemie layer titles in Chinese, which is why an
   English-only search reported `carbohydrates` as uncovered while 57 nodes are titled 糖类.
3. The 8 with nothing are candidate gaps, not confirmed ones. Check each by hand, in both
   languages, before writing anything new for it.

---

# 11. Where it lives, and why it is branded apart

**`C:\Users\Admin\Downloads\bio-state-exam\jiri_bank\`** — the study-apps repo, alongside
`biochemie_basic`, `biochemie_pro`, `exam30` and `pesbexplain`. It was first built in the
recombinants repo, which is where the analysis pipeline lives, and Ruojin could not find it:
he opens apps from `bio-state-exam/index.html`, and nothing in that repo pointed at it.

That launcher now carries a line for it.

## It must not read as part of an existing app

Ruojin's instruction, verbatim: *"你的新题库要有标识 别和之前的混在一起"*. Four things carry
the separation, and all four matter:

| | |
|---|---|
| folder | `jiri_bank`, matching this file's name rather than a generic `exambank` |
| title / brand | **JIRI BANK — 老板给的三张卷子**, and the brand line says *不是 exam30，不是 biochemie* |
| welcome screen | states outright that it is a separate bank drawing on the others, not a replacement |
| `PREFIX` | **`jiri.`** — seven trainers now share one origin (`bio.` `pesb.` `pesbpro.` `pesbexplain.` `labhb.` `molbio.` `jiri.`); a shared prefix would let each overwrite the others progress |

The `PREFIX` one is the only change that could destroy work rather than merely confuse:
progress, ticks, Leitner boxes and voice settings all key off it, so two apps sharing a
prefix silently overwrite each other in `localStorage`.

## Paths, after the move

The tools reach across both repos and now say so explicitly:

```python
TRAE = 'C:/Users/Admin/Documents/trae_projects/recombinants_trae_independant'
BIO  = 'C:/Users/Admin/Downloads/bio-state-exam'
```

`port.py` reads `TRAE/labhandbook/data`; `qindex.py` reads pesbexplain, pesbpro and labhandbook
from `TRAE` and the biochemie layer and exam30 from `BIO`, and imports the question sheets from
`TRAE/state_exam/questions_data.py`. A relative `../labhandbook/data` broke on the move and
would have broken silently if the port had not asserted its node count.

Note that `pesbexplain` exists in **both** repos. The tools read the recombinants copy, which is
the one being edited. If the two ever diverge, that choice matters and is worth re-checking.
| 2026-08-23 | moved | — | app moved to `bio-state-exam/jiri_bank/`, rebranded, launcher entry added, PREFIX `jiri.` |
| 2026-08-23 | — | — | `bank_import.py`: **1609 distinct questions** importable. pesbpro is 100%% duplicate of pesbexplain; biochem_basic adds **0** on top of biochem_pro. Sources = pesbexplain + labhandbook + biochem_pro |
| 2026-08-23 | 2-2 | DEEP | Gram +/- , Gram stain, capsule — **hand-written**, in `data/ch2b.js`. Covers S1 Micro1, S3 Micro1 (x3 repeat), S3 Micro4, S3 Micro5. 4 quiz + 8 bank, length-bias 1/9 |
| 2026-08-23 | 4-1 | DEEP | PCR and qPCR — **hand-written**, `data/ch4.js`, chapter 4 now exists. Covers S3 Micro19, S2 Lab7, and the molbio Tier-1 qPCR gap. 4 quiz + 9 bank, length-bias 0/10 |
| 2026-08-23 | — | — | totals now: **10 nodes, 80 questions, 176 terms**. All three checkers PASS |
| 2026-08-23 | 5-1 | DEEP | Structural biology — X-ray / cryo-EM / NMR / prediction. **Chapter 5 created.** The emptiest gap measured: 0 of 810 nodes titled after any structure method. Encodes the 6M0J vs AlphaFold ipTM finding from the recombinants project. 4 quiz + 6 bank, length-bias 0/8 |
| 2026-08-23 | — | — | totals: **11 nodes, 90 questions, 203 terms**, chapters 1-5 all populated. All checkers PASS |
| 2026-08-23 | 6-1 … 6-39 | IMPORT | **`bank_emit.py`: 1606 questions imported** into `data/ch6.js` (1.4 MB), chapter 6 created. Sources pesbexplain + labhandbook + biochem_pro, deduped |
| 2026-08-23 | fix | — | `check_strings.py` was single-quote-only and reported the generated ch6.js as broken; now tracks both quote styles |
| 2026-08-23 | fix | — | `despace()` in bank_emit lost its regex backreferences and was DELETING Latin-CJK pairs rather than separating them; the MIX check passed because the offending pair was gone. Fixed and spot-checked |
| 2026-08-23 | 4-2 | DEEP | Protein-protein interaction — two-hybrid / co-IP / pull-down / SPR / ITC. **Hand-written**, `data/ch4.js`, 68 k. The emptiest measured topic after structural biology and the supervisor's own field. 4 quiz + 4 bank, length-bias 0/6, correct-is-longest 0/6. Driven through the real UI in headless Chrome, 17/17 |
| 2026-08-23 | fix | — | `**bold**` in `coverageNote` / `skipIt` / `takeaway` reaches the screen as literal asterisks — those three fields render through `esc()`, not `paras()` (app.js 1170 / 1193 / 1211). Three occurrences fixed: `2-1` skipIt, `4-1` coverageNote, `4-2` coverageNote. New re-runnable gate `tools/check_asterisks.py`, all 7 chapters now 0 |
| 2026-08-23 | note | — | `2-1`'s copy lives upstream in `labhandbook/data/ch5.js` and `port.py` regenerates `ch2.js`, so that fix was applied **upstream as well**; a data-file-only fix would have been silently reverted by the next port |
| 2026-08-23 | 1-7 | DEEP | Gel electrophoresis + the blot family + loading control. **Hand-written**, new file `data/ch1b.js` (55 k), script tag added to `index.html`. Answers **three printed sheet questions** — S3 Lab 8, 11, 12 — all three of which were in the eight with no confident source in §10. 4 quiz + 4 bank. Driven through the real UI in headless Chrome, 17/17 |
| 2026-08-23 | gate | — | `1-7` **failed the length-bias gate on first write: 6/6 correct options were the longest**, 3 of them at ratio ≥ 1.3 — the exact defect §6 documents. Fixed by cutting each correct option to its bare claim (never by padding distractors); now **0/6 at ratio ≥ 1.3 and 0/6 longest**. The gate is not optional and it caught a real regression |
| 2026-08-23 | 4-3 | DEEP | Microarray + RNA-Seq. **Hand-written**, `data/ch4.js`, spliced and structurally complete (quiz/bank/oral all present; `check_structure.py`, `check_strings.py`, `jsbalance.py` all PASS). No sheet question lands here (chapter-4 rule, cuttable). Mixed sourcing: the microarray half is a GAP (4 raw hits anywhere in 13 MB, all four the SAME monoclonal-diagnostic name-drop list, none explaining what a chip is); the RNA-Seq half is NOT a gap and is imported by reference to Lehninger node `L-9-2-1` rather than rewritten. **NOT YET VALIDATED** — length-bias gate and the headless-browser render/grade test have not been run on it. Do that before marking it done, same as `1-7` and `4-2` got. |
| 2026-08-23 | asterisks | — | **RESOLVED, and the fix was the opposite of the one planned.** The 6 hits the previous session logged as unfixed were already fixed by it (file mtimes: upstream `labhandbook` ch4/ch5 08:23-08:24, `port.py` re-run 08:24:17, `ch4`/`ch5` 08:25) — it died before it could log that. See §12 for what replaced the whole approach |
| 2026-08-23 | 4-3 | DEEP | **VALIDATED, now done.** Length-bias 0/6 longest, 0/6 at ratio >= 1.3. Driven through the real UI in headless Chrome, 11/11, in all three language modes |
| 2026-08-23 | **finding** | — | **The imported bank was grading 1156 questions against the wrong option.** See §13. Fixed |
| 2026-08-23 | **finding** | — | **The imported bank showed no explanation at all in CN mode**, all 1156 of them. See §13. Fixed |
| 2026-08-23 | tools | — | Two gates that HANDOFF told you to run but that did not exist as scripts now do: `tools/check_length_bias.py` (was being computed by hand per node) and `tools/check_render.py` (the headless-browser check). `check_asterisks.py` rewritten, its premise inverted — see §12 |


---

# 12. The asterisk bug, and why the whole approach to it was wrong

The previous session's finding was right that the bug was wider than believed
and wrong about which side of the line the fix belonged on. Recorded in full
because the reasoning generalises.

**The old rule.** "Only `mustKnow`, `explain[].a` and `trace.*` render through
`paras()` and may contain `**`. Everything else goes through `esc()`, so `**`
in those fields reaches the screen literally. Therefore: strip `**` from the
data." `check_asterisks.py` enforced exactly that.

**Why that was backwards.** The corpora author `**` throughout, in both
languages, deliberately. Measured: 251 fields in the generated `ch6.js`, and
**165 in `pesbexplain` itself**. The rule was asking a decade of authored
emphasis to apologise for a renderer that only supported it in three fields.
Stripping would also have flattened paragraphs written to carry one bolded
claim into undifferentiated text -- which the old handoff entry itself warned
against, without noticing that its own rule forced it at scale.

**What was done instead.** `app.js` grew one helper, `mdBold()` (escape first,
then markup, so escaping can never be bypassed), and every prose field now
goes through it: `bi()`, `paras()`, `pointLi()`, `coverageNote`, `skipIt`,
`explain[].q`, `explain[].takeaway`. Verified in headless Chrome over all 53
nodes in all three language modes: **0 literal `**` on screen, 1396 `<strong>`
rendered.**

**`mdBold()` splits on `**` rather than regex-pairing, and that is load-bearing.**
The obvious `/\*\*([^*]+)\*\*/g` cannot express adjacent bold runs written with
no separator -- `...对位。****能量是...`, which the corpora do -- because `[^*]+`
fails on the inner `**`. It then re-pairs across the boundary, emphasises the
full stop on its own, and leaves one stray `**`. Alternating over the split has
no boundary to get wrong. An odd marker count means one star has no partner, and
that field is rendered verbatim rather than guessed at.

**`check_asterisks.py` is rewritten and its premise is inverted.** The field
whitelist is gone; `**` is legal everywhere. It now flags only unbalanced
markers. `****` is explicitly NOT an error -- an earlier version of the rewrite
called it "always a typo" and produced a false positive on `L-27-2-1`.

**Still open, and not this app's call:** `pesbexplain` has the same renderer and
**165 fields that display broken today**, 117 of them in `skipIt`. The same
`mdBold()` change fixes it. It is a different repo with uncommitted work in the
tree, so it was left alone rather than edited silently.


---

# 13. The imported bank was teaching wrong answers — found 2026-08-23

This is the most serious defect found in this project so far, it survived every
checker, and it was found only by driving the app in a browser and *reading the
screen*.

## What was wrong

`bank_import.py`'s `field()` reads **quoted strings only**. The correct-answer
index is a bare integer -- `answer: 2` -- so `field(item, 'answer')` returned
`''` for **all 2003 MCQs in every corpus**, without ever failing. `bank_emit.py`
then had `ans if str(ans).isdigit() else '0'`, so every single imported question
was emitted with **option 0 marked correct**.

The real distribution, once the index could be read, is `0:224  1:1467  2:239
3:73`. Index 0 is the *rarest* correct answer. **Roughly 87 percent of the 1156
imported MCQs were grading against the wrong option**, and `shuffleOptions()`
moves the options at run time, so on screen it looked arbitrary rather than
systematic.

Caught by screenshotting one graded question and reading it: the app flagged
"Eukaryotes lack repressor proteins entirely" correct while its own explanation
underneath described a different option.

## The second defect in the same path

`why_cn` was never emitted at all -- `bank_emit.py` wrote `why_en` and stopped.
`bi()` guards on truthiness, so a reader in **中文** mode answering any of the
1156 imported questions got right/wrong and **no explanation whatsoever**. The
source corpora are fully bilingual: all 2003 rows recovered a real `why_cn` and
all 826 written rows a real `answer_cn`. Not one needed a fallback.

The app's own in-browser validator had been reporting this as 1156 problems on
every page load. Nobody had looked, because `check_structure.py` said PASS --
the Python checker does not enforce what the JS validator enforces.

## What was changed

- `bank_import.py`: new `field_num()` for bare integers; extracts `why_cn` and
  `answer_cn` alongside their English counterparts
- `bank_emit.py`: **the `else '0'` fallback is deleted.** An MCQ whose answer
  index cannot be read is now dropped by `main()` and counted on stdout, never
  guessed. There is an assertion on the index being in range for the option list
- both files regenerated; `data/ch6.js` 1.46 MB -> 2.08 MB, same 39 nodes and
  1606 questions

## Verified

In-browser validator **1156 problems -> 0**. 288 questions graded through the
real UI across 24 nodes x 3 languages: exactly one option flagged correct every
time, no literal `**`, no page errors. Length bias in ch6 measured for the first
time: 26 percent longest-is-correct against ~25 percent chance for four options,
so the import did **not** inherit the parent corpus's 89 percent defect.

## The lesson worth carrying

Three separate checkers reported PASS on a bank that graded 87 percent of its
questions against the wrong option and showed no explanation at all in one of
its two languages. **A checker that reads the data cannot see what the renderer
does with it.** `tools/check_render.py` exists now for that and should be run on
any node before it is called done -- it is what caught all three defects.

Corollary, and the reason the fallback was deleted rather than improved: a
silent default is worse than a crash. `else '0'` turned "I could not read this"
into "the answer is A", 1156 times, while printing RESULT: PASS.
| 2026-08-23 | 4-4 | scoping | **Telomerase re-measured before writing, and it is PARTIAL, not the GAP the queue called it.** 38 raw hits, 37 in biochem_pro. Split cleanly on inspection, per the `1-7` lesson: `leh_ch9/9c` are telomere-as-YAC-component name-drops, but **`L-26-3-1` genuinely teaches that telomerase IS a reverse transcriptase carrying its own internal RNA template**, with the Greider/Blackburn citation. That half is imported by reference, not rewritten. What IS a measured gap is the **mechanism**: `end.replication` 0 files, `末端复制` 0, `Hayflick` 0, `端粒.*缩短` 0, `shorten.*telomere` 0, across all corpora in both languages. So the node is scoped to the end-replication problem and what follows from it, and cites `L-26-3-1` for the enzyme's identity |
| 2026-08-23 | 4-4 | DEEP | End-replication problem + telomeres + telomerase. **Hand-written**, `data/ch4.js`, 39 k. Scoped by measurement rather than by the queue's GAP label (see the scoping row above): the enzyme's identity is **imported by reference to `L-26-3-1`**, the mechanism is written fresh. 4 quiz + 4 bank + oral. Length-bias **1/7 longest, 0/7 at ratio >= 1.3**; `check_render.py` PASS in all three language modes, 12 questions graded, 0 stars, 0 errors. All four static checkers PASS |
| 2026-08-23 | — | — | totals: **54 nodes, 216 questions, 235 terms**, chapters 1-6 populated |


---

# 14. The asterisk bug was in every app, and is now fixed in all of them

Found 2026-08-23 when Ruojin said his other apps were "很多星号". Measured across
all six trainers with the pre-rewrite field scan:

| app | fields showing literal ** | worst field |
|---|---|---|
| biochemie_pro | **1127** | `points[].cn` (738) |
| pesbexplain | 165 | `skipIt` (117) |
| biochemie_basic | 73 | `cn` (48) |
| pesbpro | 46 | `cn` (17) |
| labhandbook / exam30 | 0 | — |

Same root cause as §12 and the same `mdBold()` fix, but **the render paths are
NOT the same between apps** — they are different generations of the fork.
`pesbpro`, `biochemie_pro` and `biochemie_basic` have no `paras()` at all, so
they had no bold support anywhere. `biochemie_pro` alone needed eight separate
call sites patched, including three different `ti-title` sites and its
entity-card `chains` renderer.

**Do not fix this by grepping for one call site.** The reliable method, and the
one that finished the job, is to walk the DOM in a browser and ask which
element still holds a `**`:

```js
const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
// ...report parentElement's tag.class path for any node whose text has **
```

That is what found `span.ti-title` (three sites, not one), `.same-topic-link`,
`ol.chain > li > span.ch-cn` and the glossary `def_cn`. Guessing from the source
found roughly half of them and reported success.

## Verified, all five apps

| app | renders | `<strong>` now rendering | literal ** |
|---|---|---|---|
| biochemie_pro | 568 | 40,559 | **0** |
| pesbexplain | 264 | 11,314 | **0** |
| biochemie_basic | 414 | 1,140 | **0** |
| pesbpro | 264 | 520 | **0** |
| jiri_bank | 108 | 980 | **0** |

`tools/sweep_app.py` in the scratchpad does this for any app: it takes a URL,
walks every node in both languages and exits non-zero on any literal marker.

## Two traps found the hard way

1. **A block comment containing the bold regex breaks the file.** The regex text
   contains the characters that close a block comment, so writing it into a
   `/* ... */` explanation truncated the comment and turned the rest of the
   function into loose code — `Unexpected identifier 'corpus'`, whole app blank.
   The comments now say so explicitly. Use `//` if you must write it out.
2. **One genuine data defect surfaced**, and only because `mdBold()` renders an
   unbalanced field verbatim rather than guessing: `leh_ch20c.js` node
   `L-20-4-1` had **39 markers, an odd count**. The alternation showed every
   book quote 「…」 bold except two, so one `**` was missing after `去还原」`.
   Inserted; count is now even and the pattern is consistent. That is the whole
   reason the unbalanced case is not silently repaired.
| 2026-08-23 | 1-8 | DEEP | OD600 **and** Lambert-Beer, 43 k, `data/ch1b.js`. **Two printed sheet questions in one node** — S2 Lab 4 and S2 Lab 5, adjacent on the same sheet, both x2, both in the eight with no confident source in §10. Written as one node on purpose (§9): the OD600 answer is incomplete without Lambert-Beer, and the punchline is that OD600 is the case where Lambert-Beer does NOT apply — it is scattering wearing absorbance units. Length-bias **0/7 longest, 0/7 at ratio >= 1.3 on first write**; `check_render.py` PASS in all three languages. All four static checkers PASS |
| 2026-08-23 | **finding** | — | **Node 1-1 asserted "Lambert-Beer itself is already covered". It was not covered anywhere** — 40 raw hits across all corpora, zero titled nodes, and the only occurrence of the phrase in labhandbook was that sentence citing itself. Fixed **upstream** in `labhandbook/data/ch5.js` (a data-file-only fix would have been reverted by the next port) and a `PROSE_REFS` entry now points the ported copy at `1-8`. See §15 |
| 2026-08-23 | — | — | totals: **55 nodes, 223 questions**, chapters 1-6 populated |


---

# 15. What is actually left, re-measured 2026-08-23

The chapter-4 queue was NOT the right thing to work on next, and the reason is
worth keeping. Chapter 4 is the part of this bank **not traceable to any printed
question**, and §7 already says it is the first thing to cut. Meanwhile §10 lists
eight questions that ARE printed on the sheets and had no source at all. Those
outrank a cuttable chapter-4 node every time.

Measured across all corpora in both languages before choosing:

| sheet question | weight | raw hits | titled nodes | verdict |
|---|---|---|---|---|
| What is OD600? | x2 | 6, all incidental | 0 | GAP — **done, `1-8`** |
| Lambert-Beer law | x2 | 40 | 0 | GAP — **done, `1-8`** |
| Explain the term "propeptide" | x2 | `propeptide` **1**, `前肽` **0** | 0 | see below |
| How do you sterilize lab equipment | x1 | 14 | 0 | GAP |
| Describe endospore formation | x1 | 4 | 0 | GAP |
| Accuracy and precision of pipetting | x1 | 57 | 0 | needs a look at what they say |
| C3, C4 and CAM plants | x1 | **1144** | **17** | **NOT a gap — IMPORT only** |

## Two of these are traps in opposite directions

**C3/C4/CAM is not a gap at all.** 1144 hits and 17 titled nodes in the
biochemie layer. An English-only search would have called it uncovered, which is
the §10 lesson repeating itself. This one needs an IMPORT entry citing existing
nodes, not new writing.

**Propeptide is the mirror image.** The word `propeptide` occurs **once** in
13 MB and `前肽` **zero** times — but the biology around it is everywhere:
`zymogen` 58, `酶原` 160, `proinsulin/胰岛素原` 96, `signal peptide/信号肽` 51.
So the facts exist and the term does not. That is exactly the granularity problem
§9 describes, and it makes propeptide a **question entry, not a new DEEP node**:
the spine assembles what is already written and the new writing is the joins —
specifically the three-way distinction between signal peptide, propeptide and
zymogen, worked through proinsulin. Sources found, with node ids:

- `biochem_pro 4-3-2` "Post-translational modification of the polypeptide chain"
  — 18 proinsulin hits + 6 signal-peptide hits. The core source.
- `biochem_pro 10-16` "Enzyme modification, isoenzymes and compartmentation" — zymogen
- `pesbexplain 2-41` "Tag removal", `1-15` Gateway, `1-20` the pSecTag2 exercise
  — signal peptide in a cloning context, which also links to the blocked `1-6`
  RF-cloning node and its alpha-factor prepro leader

Note that **"Explain the term signal peptide" is the very next question on the
same sheet** (S2 Biochem, right after propeptide). Same pairing logic as `1-8`:
one node, both questions.

## Suggested order from here

1. **propeptide + signal peptide** — x2, two adjacent sheet questions, sources
   already located above
2. **sterilization + endospore formation** — x1 + x1, but they are genuinely one
   answer (you autoclave at 121 °C *because* endospores survive boiling), and
   both are near-empty: 14 and 4 hits
3. **pipetting accuracy and precision** — x1; check the 57 hits first
4. **C3/C4/CAM** — IMPORT entry only, do not write it fresh
5. only then chapter 4 rank 7 (transgenic/knockout), which stays cuttable

---

# 16. BLOCKING (now resolved): the §9 sheet-question layer did not work — found 2026-08-25

**This is the layer that actually answers Jiri's sheets, and its only entry is broken.**

`data/questions.js` holds exactly one entry, `q-lab3-expression-workflow`. Its `spine` names
eight **pesbexplain** ids — `2-4 2-6 2-7 2-8 2-9 2-10 2-26 2-29` — and none of them exist in
this app, whose chapter 2 contains only `2-1` and `2-2`. So `q.spine.map(topicById).filter(Boolean)`
(app.js 1081) returns an **empty array** and no model answer is assembled.

It fails silently, which is why it survived: verified in headless Chrome, the Sheet-questions
panel paints 2168 characters of stem, joins and follow-ups, so it *looks* answered, while
`validateTopics()` writes 19 problems to a console nobody reads.

**`tools/port.py` cannot fix this as written** — it reads only `labhandbook/data`, and these are
pesbexplain nodes.

The fix §9 already anticipated ("expect the PORT table to grow to cover every node any question
cites"):

1. give `port.py` a second source root for `pesbexplain/data`, with its own id-remap table
2. emit those nodes to a new generated `data/ch1c.js`
3. add its `<script>` tag to `index.html`
4. rewrite the `spine` in `questions.js` to the remapped ids
5. re-run the checkers, then confirm in the browser that the assembled model answer is non-empty

Until step 5 passes, **no further question entries should be written**, because every one of them
would inherit the same dangling-spine failure.

## Honest coverage of the sheets, measured the same day

**17 of 109 questions (16%) have a dedicated node. 92 do not.**

| sheet / section | covered |
|---|---|
| S1 Lab / Bio / Micro | 1/6 · 1/7 · 1/6 |
| S2 Lab / Bio / Micro | 4/10 · **0/10** · **0/10** |
| S3 Lab / Bio / Micro | 6/20 · 1/20 · 3/20 |

Reproduce with the scratchpad script `coverage.py`, which reads the sheet refs out of each node's
`slides` field — so keeping `slides` accurate is what keeps this number honest.

Two things that number does **not** say:

- The 15 hand-written nodes are **topic** nodes, not answers. `4-2`, `4-3` and `4-4` map to zero
  printed questions — they came from the MC250P16N syllabus, not from the sheets, and stay
  cuttable under the chapter-4 rule.
- ch6's 1606 items are imported practice MCQs from the other corpora. They are related material,
  not answers to these questions.

## §13 RESOLVED — 2026-08-25

Fixed and verified in the browser: **spine resolves 8/8, model answer assembles, validator clean,
panel content 2168 -> 6126 chars** (the old figure was an empty shell of stem + joins + follow-ups).

What was done, in the order it has to be repeated if another question cites unported nodes:

1. `tools/port.py` gained a **second source root**, `PESB_SRC` = `pesbexplain/data`, with its own
   `PESB_PORT` id-remap table. The 8 cited nodes became `1-9 .. 1-16` in chapter 1 (chapter 1
   because the question is S1 Lab 3, a Lab question).
2. **The two idmaps are kept separate on purpose.** Both corpora contain a node called `4-1`, so
   sharing one map would silently rewrite a pesbexplain ref onto a labhandbook destination. Kept
   apart, a cross-corpus ref cannot resolve, so it is dropped and printed instead — 18 were.
   `PROSE_REFS` is not applied to the pesbexplain pass either; those strings were written against
   labhandbook prose.
3. `load_nodes()` needed a **slicer fix**. pesbexplain puts section banners between nodes
   (`/* ===== PART I ===== */`) where labhandbook packs them back to back, so the slice ended in a
   comment and the `endswith('}')` assertion fired. It now cuts back to the last `
}`.
4. The ported nodes referenced 22 figures; only those 22 were copied into `img/figures/`
   (6.4 MB). `check_structure.py` counts missing figures, so it catches this on its own.
5. `data/questions.js`: `spine`, `sourceNodes`, every `followups[].node`, the prose citations
   inside follow-up answers, and the `// between X and Y` join comments were all remapped. The
   join comments matter — they are the only record of which pair each join sits between.

**These ported nodes are not coverage.** None carries a sheet ref, so `coverage.py` still reports
17/109. They are the reference layer, nothing more.

## Next

The §9 layer now works, so writing question entries is unblocked and is the highest-value work
available — 92 of 109 questions have nothing. Before writing each entry, check whether its spine
nodes exist in this app; if they do not, extend `PESB_PORT` (or `PORT`) and re-run `port.py`
rather than pointing a spine at an id that is not loaded.

---

# 17. All 109 sheet questions answered — 2026-08-25

**`python tools/qcoverage.py` → ANSWERED: 109 of 109 (100%).** 94 entries, because several
answer a question that appears on more than one sheet.

Files, all wired into `index.html`:

| file | covers |
|---|---|
| `data/questions.js` | the original spine entry (S1 Lab 3) |
| `data/q_s1.js` | Sheet 1 |
| `data/q_s2.js` | Sheet 2 |
| `data/q_s3.js` `q_s3b.js` `q_s3c.js` | Sheet 3, Lab / Micro / Biochem |
| `data/q_s4.js` | the last nine, whose content existed only as DEEP nodes |

## The engine change that made this possible

Entries now come in **two shapes**, and `validateTopics()` accepts either:

- **SPINE** — assembles its answer from the `mustKnow` of nodes in this app. Structurally
  cannot contain an unsourced fact. Right whenever those nodes exist; only `q-lab3` uses it.
- **DIRECT** — carries `answer_en` / `answer_cn`. Required for the other 93, because their
  topics have no node here and demanding a spine would mean writing a 40 k node first or
  leaving the question blank.

`app.js` renders whichever is present, labelling the spine version "Assembled answer" and the
direct version "Answer". A direct entry still lists `sourceNodes` where a node exists, so the
trace stays clickable.

## Measurement traps found while doing this

- **`tools/coverage.py` counts NODES, `tools/qcoverage.py` counts QUESTION ENTRIES.** They
  answer different questions and coverage.py will always read lower — it still reports 17/109.
  Do not quote it as question coverage.
- **Sheet 2 numbers continuously across sections** — Lab 1-10, Micro 11-20, Biochem 21-30, as
  its own `note` field says — while the data structure restarts at 1 in each section. Entries
  cite the number printed on the paper. Before `qcoverage.py` accounted for this it reported
  20 correctly-referenced questions as missing.

## Verified

`check_structure.py`, `check_strings.py`, `jsbalance.py` all PASS. Driven through the real UI
in headless Chrome, **12/12**: 94 cards render, no empty answers, 189 follow-up cards, both
languages everywhere, no dangling node references, no duplicate ids, 1488 `<strong>` and zero
literal asterisks, validator console clean.

## One question deliberately not answered as asked

**S1 Lab 4, the RF cloning primer design.** The entry gives the principle — two-part hybrid
primers, megaprimer, DpnI, remove the stop codon, stay in frame with the alpha-factor prepro
leader — and explicitly refuses to design primers against the printed bases, which translate
with seven internal stops in frame +0 and are marked UNVERIFIED in
`state_exam/questions_data.py`. Its `gaps[]` says so. **Needs the digital original sequence.**

---

# 18. Diagrams on the drawing questions — 2026-08-25

Eight sheet questions now carry a hand-drawn SVG. Only one of them actually says *Draw*
(glucose in Fischer and Haworth, S1 Bio 6 / S2 Bio 21); the other seven are questions whose
answer IS a shape, and which an examiner expects to see drawn while you talk.

| entry | figure |
|---|---|
| `s1-bio-6-glucose-fischer-haworth` | Fischer open chain and Haworth pyranose, side by side, with the right-goes-down conversion rule drawn between them |
| `s1-lab-1-standard-curve` | standard curve, the unknown read off the fitted line, extrapolation marked as forbidden |
| `s2-lab-6-stacking-resolving-gel` | the two gels, pH 6.8 / 8.8, and glycine as the switch |
| `s2-micro-11-growth-curve` | four phases, with the induction point marked in mid-exponential |
| `s2-bio-26-lac-and-trp-operons` | lac repressed vs induced, on one axis |
| `s3-bio-6-enzyme-inhibition` | three Lineweaver-Burk plots side by side |
| `s3-bio-7-enzyme-kinetics` | Michaelis-Menten hyperbola with Km and Vmax marked |
| `s-gram-positive-negative` | the two wall architectures, drawn to scale against each other |

## How it works, and the one rule that matters

A question entry may carry `svg` and `svg_caption: {en, cn}`. **`svg` is the only field in
any data file inserted as raw markup rather than escaped** — everything else goes through
`esc()` precisely so an author cannot inject HTML by accident, and this field is the
documented exception. It must only ever hold hand-written SVG. That is stated in the comment
above `figureHtml` in `app.js`; do not widen it.

Constraints every figure follows, enforced by the browser test rather than by a checker:

- **`currentColor` for every stroke and label**, so the figure inverts with the theme instead
  of needing a second dark-mode copy. `.dim` and `.accent` classes are available.
- **A `viewBox` and no `width`/`height` on the `<svg>` tag**, so it scales to the card. A fixed
  width overflows on a phone.
- **An `aria-label`** on the `<svg>`.
- A caption in both languages.

## Verified

Driven through the real UI in headless Chrome, **12/12**: 8 diagrams render as real SVG at a
real size, none overflows its card, all have captions, all use currentColor, none has a fixed
width, validator console clean.

## One correction worth recording

The first Haworth drawing had the **configuration right but the drawing wrong**: C3-OH points
up (correct — it is on the left in Fischer), but the label sat *inside* the ring outline, which
reads as an atom floating in the middle of the ring. In a hexagon C3 sits directly below C5, so
a vertical up-bond from C3 always collides with the C5 vertex; textbooks angle that bond so it
exits through the upper-left edge. Redrawn that way. **The browser test could only confirm the
figure rendered, not that it was drawn correctly — that needed looking at it.**

## Adding another figure

`scratchpad/add_svg.py` attaches an SVG to an entry by id, inserting after its `stem_cn:` line
and refusing if that entry already has one, so it cannot duplicate on a re-run. The three
scripts that used it — `svg_glucose.py`, `svg_curves.py`, `svg_struct.py` — are the worked
examples.

Obvious candidates still undrawn: DNA replication fork, PCR cycle, electron transport chain,
Western blot workflow, chromatography modes.
