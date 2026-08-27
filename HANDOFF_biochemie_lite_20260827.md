# HANDOFF — biochemie_lite (速通简洁版), 2026-08-27

Read this file and `biochemie_lite/SPINE_SPEC.md`. Do not read the whole repo.

The app is `biochemie_lite/` — a merged, ultra-minimal rewrite of `biochemie_pro/`.
**`biochemie_pro/` is frozen** by the reader's instruction ("现在这个app就不动了"). Do not edit it.

---

## Where the work stands

```
44 / 78 topics merged        0 READY    24 PARTIAL    10 EMPTY
161 spines   1016 steps   929 connectors   206 recalls   0 JS errors   0 literal ** on screen
check-spine.py (every spine) -> no problems      check-lite-render.py -> every spined node renders
```

**The open defect of the previous handoff — the 极简 wall of text — is fixed, and every
topic that was READY is merged.** What is left is the 24 PARTIAL and 10 EMPTY topics, which
need a Czech node spine written before they can be merged.

**Nothing is committed.** `biochemie_lite/` is entirely untracked, and so is this file, so a
bad batch still cannot be recovered with `git checkout`. **Make a fresh copy of
`biochemie_lite/data/` before any bulk edit, or ask the reader whether to commit.** A
snapshot taken before this session's edits made the byte-level verification below possible
and is the reason a 310-field edit could be trusted.

---

## The defect is closed: 极简 now shows a claim, not a paragraph

The 极简 view renders only the bold span of a step. In the eight `spine_merged_*.js` files
that span was routinely a whole sentence-paragraph. Every `en` field over 180 characters was
re-marked by hand to a shorter contiguous span that still stands alone as a claim. **Chinese
was not touched** — it was already inside its own budget, as the previous handoff established.

| file | en median before → after | max | over 250 |
|---|---|---|---|
| spine_merged_proteins.js | 283 → **145** | 402 → 243 | 58 → **0** |
| spine_merged_energy.js | 259 → **137** | 411 → 233 | 34 → **0** |
| spine_merged_enzymes.js | 244 → **166** | 419 → 240 | 24 → **0** |
| spine_merged_foundations.js | 229 → **146** | 389 → 212 | 25 → **0** |
| spine_merged_proteinsynth.js | 205 → **167** | 320 → 218 | 9 → **0** |
| spine_merged_methods.js | 200 → **156** | 258 → 213 | 6 → **0** |
| spine_merged_lipids.js | 185 → **175** | 216 → 201 | 0 → 0 |
| spine_merged_nucleic.js | 183 → **147** | 453 → 198 | 10 → **0** |
| — reference: ch8 (reader-approved) | 139 | 344 | 3 |
| — reference: ch13_15 (re-marked earlier) | 138 | 240 | 0 |

310 of the 479 `en` fields were re-marked; the 166 spans over 250 characters are gone, and
every field in all thirteen merged files now carries **exactly one** bold run.

The previous handoff's finding that a code fix cannot do this still stands and was not
revisited: 163 of the 166 over-long spans were a single sentence, so trimming in `claimOf()`
moves nothing. The markers had to move, and they did.

A last pass caught spans that opened on an unbound "It" / "That" and read as a dangling
fragment with everything else hidden — four were re-marked to start at a self-contained
clause. **When choosing a span, read it alone.** That is the only test that matters.

---

## How to re-mark: it is now mechanical, not a promise

`tools/spine_spans.py` enforces the `**`-only rule in code instead of trusting the editor.

```
python tools/spine_spans.py stats                                    # bold-length distribution per file
python tools/spine_spans.py dump <file.js> <out.txt> [limit] [lo] [hi]  # fields over `limit`, markers left in place
python tools/spine_spans.py apply <edits.json>                       # anchor pair -> exactly one bold run
```

`edits.json` is a list of `{"file","i","start","end"}`. `start` and `end` are short verbatim
anchors into the field with its `**` stripped; the tool locates them, asserts each occurs
exactly once, removes the old markers and inserts one run. Before writing it asserts
`original.replace("**","") == new.replace("**","")`, then re-reads from disk and asserts it
again, then asserts every step field on disk has exactly two `**`. A mistyped anchor fails
loudly and changes nothing.

Strings are found by **brace/bracket depth**, never a flat regex: only a string whose
enclosing-key path is exactly `["steps","en"]` is a candidate, so `link_*`, `recall_*`,
`title_*`, `beyond*`, `openQuestion_*`, the `terms[]` definitions and the short labels inside
`see:` entries are structurally out of reach. Nothing is hand-retyped, so Greek letters,
subscripts and em-dashes cannot be corrupted in transcription.

`tools/dump-spine.py <id|key:topic> ...` prints a spine as readable text through
check-spine's own parser. Use it before a merge instead of reading the `.js` by eye.

---

## What was merged this session

Twelve topics, 151 steps, in five new files. All twelve were single- or few-node topics whose
member spines already existed, so eleven of them were conversions — same substance, rewritten
to one claim and one bold span per step — and one was a real four-node merge.

| file | topics | steps |
|---|---|---|
| `spine_merged_dnastructure.js` | dna-supercoiling 14 · chromosome-structure 16 | 30 |
| `spine_merged_dnarepair.js` | dna-repair 15 · dna-recombination 16 · rna-dependent-synthesis 11 | 42 |
| `spine_merged_biosynthesis.js` | nucleotide-metabolism 16 · amino-acid-biosynthesis 15 | 31 |
| `spine_merged_cellcontrol.js` | motor-proteins 12 · cell-cycle-control 7 · oncogenes-and-apoptosis 8 | 27 |
| `spine_merged_metabolicdisease.js` | obesity-and-body-mass 11 · diabetes-mellitus 10 | 21 |

**Five of those nodes are marked 只作科普性了解 in the node list** — motor-proteins,
cell-cycle-control, oncogenes-and-apoptosis, obesity-and-body-mass, diabetes-mellitus, plus
rna-dependent-synthesis. That is the reader's own scope decision, so they were kept at the
source's own 7–12 steps and deliberately **not** padded to 14–16. Do not "fill them out" later.

**Lehninger chapters 22–26 are not extracted anywhere in this repo**, so for those topics the
existing per-node spine was the only source. Nothing was invented; where a chain genuinely
needed a bridging statement it is `beyond`-flagged with a note.

### The three returns from the one real merge (nucleotide-metabolism)

1. **A fact one book has and the other omits.** Lehninger says free bases "arrive constantly
   from nucleotide turnover" and never names the machinery; the Czech node `4-1-5` supplies the
   whole disassembly — nucleases under three naming schemes, alkaline (pH 7–8) and acid (pH 5)
   nucleotidases, and nucleosidase acting by phosphorolysis, which is the reverse of joining a
   base to PRPP, so the base survives intact and can be salvaged. In the other direction
   Lehninger carries the entire regulation-and-drug half the Czech nodes lack.
2. **A contradiction, resolved.** `4-1-5` routes mammalian purine degradation "through uric acid
   and on down to urea". Lehninger's species ladder contradicts it: urate is the excreted end
   product in primates, birds, reptiles and insects, and only animals with urate oxidase go on to
   allantoin and beyond. The human case settles it — no working urate oxidase, ~0.6 g uric acid
   excreted a day, and gout existing precisely because the chain stops at the least soluble
   molecule on it. The merged step states Lehninger's ladder; the urea-cycle cross-reference was
   dropped from that step and kept only on the carbamoyl-phosphate step, where it is real.
3. **Czech `beyond` flags that went away — all four**, because Lehninger explains what the Czech
   nodes could only assert: the committed step and its actual inhibitors (IMP, AMP, GMP acting
   synergistically), the cross-wired GTP/ATP balance, dUMP→dTMP as an anticancer target, and gout
   as a consequence of urate's own insolubility. **The merged file carries no `beyond` flags at all.**

---

## Merging with agents works; re-marking with agents does not

Unchanged from the previous handoff and confirmed again: five merge agents were launched in
parallel and all five completed. The `[bio]` AUP filter kills **re-marking** agents at a high
rate (4 launched, 3 killed, on both Opus and Sonnet) and leaves merge agents alone — the
likely reason being task shape, since re-marking copies large blocks of biochemistry text
verbatim into and out of context while merging reads it and rewrites it. This session's
re-marking was therefore done in the main loop rather than delegated, which is the safe choice.

If you do delegate re-marking: one agent at a time, writing per slice.

**Never write off a batch on the wrapper error.** In the previous session three agents
reported `failed` *after* they had written and verified their files. Always diff the target
files before concluding anything was lost.

Give every agent its own scratchpad subdirectory. Agents share one scratchpad and a previous
session lost drafts to another agent writing generic filenames (`p1.js`, `p2.js`).

---

## Do NOT re-bold the per-node spine files

Unchanged, and now more true than before: a merged topic **shadows** the per-node spines it
covers — `spineOf()` prefers `SPINE['key:' + topicKey]` — so once a topic merges, nobody ever
sees those nodes' bold again. With 44 of 78 topics merged, per-node re-marking is worth less
every session. Merged spines are born one-claim-per-step.

Re-marked already (leave alone): `ch1_3`, `ch5_6`, `ch11_12`, `ch7_9`, `ch13_15`.
Deliberately not re-marked: `ch2_5`, `ch9_10`, `ch16_19`, `ch20_22`, `ch23_25`, `ch26_28`.
`spine_ch8.js` is **frozen** — the reader approved that chain.

All of these were verified byte-identical after this session's work.

---

## What a merge is

Each topic covers several section nodes, some Lehninger (`L-27-1-1`), some Czech (`4-2-1`).
Take **the Lehninger spine as the backbone** — the reader said Lehninger is better and more
modern ("l的书更先进也更重要") — and fold the Czech material into it. One thread the reader can
follow start to finish, not two accounts stitched together.

Output: `window.BIOLITE_SPINE["key:<topicKey>"] = {...}` in a new `spine_merged_<name>.js`.
The `key:` prefix is what makes the app treat it as merged. **Never edit a per-node spine file.**
Aim 14–16 steps, unless the node is marked 只作科普性了解, in which case keep it short.
Every step needs `en`, `cn`, `src`.
**Bold exactly one contiguous span per `en` and per `cn`, 60–200 chars, that asserts something
and reads correctly with everything else hidden.**

`see:` entries take **node ids**, never a `key:` name; the linter rejects an id that does not exist.

The return on a merge is: a fact one book has and the other omits; a contradiction resolved
with the evidence that settles it; and a Czech `beyond` flag that goes away because Lehninger
actually explains what the Czech node could only assert. Report all three.

### Verify before reporting
```
python tools/check-spine.py <your key: topics>     # must print "no problems"
python tools/build-lite-index.py                   # registers a new data file in index.html
python tools/build-lite-questions.py
python tools/check-lite-render.py                  # "every spined node renders", 0 JS errors
```
A full `check-spine.py` over every spine takes about 15 minutes and buffers its output, so run
it to a file in the background; a targeted run on a few keys takes a second.

**A falling node count in the render report is not necessarily a loss.** The app lists a merged
topic as one entry covering all its members, so merging four nodes into one topic removes three
rows. This session went 76 → 73 rows and 1045 → 1016 steps, which is exactly the 48 steps of the
four nucleotide-metabolism nodes collapsing to 16, plus three single-step gains from splitting
double-claim steps. Check the arithmetic before believing something disappeared.

---

## Remaining topics

**PARTIAL (24)** — a Czech node in the topic has no spine yet; write it, then merge.
Biggest: `hormone-structure-and-action` (13 nodes, 3 written), `fatty-acid-biosynthesis` (11, 1),
`membrane-architecture` (7, 2), `photochemical-reaction-centers` (7, 1),
`biochemical-reaction-logic` (7, 1), `co2-assimilation` (6, 1), `membrane-transport` (5, 2),
`nitrogen-metabolism` (5, 1), `fatty-acid-oxidation` (5, 1), `amino-acid-degradation` (5, 1),
`citric-acid-cycle` (4, 1), `photorespiration-c4-cam` (4, 1), `amino-group-metabolism` (4, 1).

**EMPTY (10)** — no spine at all yet, all Czech-only. `monosaccharides` (15 nodes) and
`polysaccharides` (4) remain the notable gap: the app still has no carbohydrate structure
thread. Then `photosynthetic-pigments` (8), `feeder-pathways-glycolysis` (7),
`pentose-phosphate-pathway` (4).

`python tools/merge-plan.py --ready` prints the live version of this list.

---

## Audio — deliberately deferred, do not start it

`biochemie_lite/audio/manifest.js` holds 55 clips rendered for node 1.1, and they are stale for
any text that has been rewritten.

Clip key = `fnv1a32(lang + U+001F + norm(text))`, `norm()` = NFC, strip `**`, collapse
whitespace, trim. **Adding or moving bold does not change the key**, so this session's
re-marking did not invalidate a single clip; rewording does, so the merges did.

So: **finish the content before rendering audio.** The full job is roughly 6 hours with
Kokoro-82M (Apache-2.0, chosen over capturing Chrome's Google voice because this repo is
public and served from GitHub Pages — do not revisit that). `tools/render-audio.py`,
`render-audio-bulk.py`, `render-spine-audio.py`. espeak-ng wants `cmn`, not `zh`.

---

## Two linter checks that were tried and must NOT be re-added

Recorded in `tools/check-spine.py`'s header. An `OVERBOLD` check (>75% of a step bolded) and a
`**A** **B**` adjacency check produced **696 false positives** — `**A** **B**` renders
correctly, and a mostly-bold step is the house style. Three agents de-bolded 171 fields on
their say-so before this was caught.

Note that the one-bold-run-per-field rule is a rule for **merged** spines, checked by
`spine_spans.py` on demand. It is deliberately not in the linter, because the per-node spines
legitimately carry several runs and always will.

---

## Windows gotchas that cost time this session

- The console is cp1252. Any tool that prints spine text needs `PYTHONIOENCODING=utf-8`, or
  write to a file and read the file.
- Python's `pathlib` cannot open a Git-Bash `/c/Users/...` path — it silently resolves to a
  non-existent `\c\Users\...` and a glob returns nothing, so a verification script can "pass"
  having checked zero files. Convert with `cygpath -w` first.
- `Path.read_text(newline="")` needs Python 3.13; this machine has 3.12. Use
  `open(..., encoding="utf-8", newline="")` to keep line endings byte-exact.

---

## Content findings worth keeping

- Node `1-6` (origin of life) said pages 19–20 were never extracted. **They are in the repo**,
  in `extracted_full_ch1_3/full_text_ch1_3.txt` after the `PAGE 19` marker. The topic went
  3 steps → 13. Other nodes carrying a "not extracted" `coverageNote` may be wrong the same
  way — check the extracted text before trusting one.
- `2-2-2` (protein structure overview): pp.28–32 genuinely are missing from the extracted set;
  the α-helix/β-structure material was pulled from the full app's `gapPoints` and each such
  step is `beyond`-flagged with a note. That is the honest pattern to copy.
- Lehninger chapters 22–26 are **not** extracted at all. For any topic in that range the
  per-node spine is the only source in the repo, so a merge there cannot add facts — only
  restructure them.
