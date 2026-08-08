# START HERE — the Lehninger phase

**Read this file in full — it is ~340 lines and that is deliberate.** Do NOT read
`HANDOFF_LEHNINGER.md` in full: it is 267 KB ≈ 61k tokens and reading it triggers a compaction
before you have done any work. It is an **archive you grep into**, one section at a time, using
the index at the bottom of this page. `HANDOFF.md` (68 KB, the Czech app) is the same: grep,
never read whole. Both sizes are re-checked by `lehninger_index/scripts/audit_handoff.py`.

Rewritten 2026-08-07 because a session was told to read the archive and spent its whole context
doing it. **Cut back to ~340 lines on 2026-08-08 for the same reason** — it had grown to 903
lines by accumulating a celebration block per finished node, and had started to contradict
itself. Those per-node writeups all still exist in the archive at `§13*`; nothing was lost.
**Keep this file short. A finished node gets a line in the table, not a section.**

---

## ▶️ How to start a session

> 读 `C:\Users\Admin\Downloads\bio-state-exam\LEHNINGER_START.md`，全文读完，然后按里面
> 「▶️ 当前阶段」那一节继续。不要整读 `HANDOFF_LEHNINGER.md`，只按章节号 grep。
> 写完一批就 commit + push，不要攒。

**When it stops with `API Error: ... safeguards flagged this message`** — which it will, several
times per session, and which is **not** caused by anything you or it did wrong — just reply:

> 继续

That recovers it. **Commit and push after every batch** is the whole defence and it has never
failed — ch7, ch8 and ch9 were each written across sessions that tripped repeatedly, and every
finished batch survived.

### What this actually is — measured 2026-08-08, replacing three wrong claims

**0. It is a biosecurity classifier, and it says so.** Every refusal record carries
`stop_details: {type: "refusal", category: "bio"}` — **415 of 415, no exceptions.** That single
field settles what four sessions of guesswork could not, and it is the one fact to keep:

- **The trigger is the subject matter, not a vocabulary or a phrasing.** This project *is*
  biochemistry, so there is no wording that steers around it. Do not try to find one — an earlier
  session's advice to pick "chemistry-clean" sections was tested and failed, and the reason is now
  clear: the domain is the trigger, not the diction.
- **Nothing is wrong with the content or with what you did.** The harness's own fallback message
  says these safeguards "can sometimes flag legitimate coding, cybersecurity, and biology tasks".
  A Czech state-exam revision app is exactly that. Treat a refusal as weather.
- **It plausibly explains the model gap below** — the same classifier calibrated differently per
  model — and it suggests **smaller batches**, since a shorter reply puts less dense biochemistry
  into one generation. Both interruptions in one session landed just as it was starting the
  largest chapter of the run. That is a hypothesis, not a measurement.

Filter transcripts on the assistant message's own `stop_reason`, **not** on the string
`safeguards flagged` (that also matches a session's own diagnostic output, which inflated an
earlier count here roughly fourfold).

**1. ⚠️ Prefer Opus 5. Avoid Sonnet 5.** This reverses the old advice, which read *"do not switch
models — measured twice, it does not help."* Refusals per assistant turn, over **24 distinct
conversations**:

| model | turns | refusals | rate |
|---|---|---|---|
| **Sonnet 5** | 855 | 54 | **6.3 %** |
| Opus 5 | 4781 | 67 | 1.4 % |
| Haiku 4.5 | 307 | 0 | 0.0 % |

⚠️ **Deduplicate before computing this — 69 of 93 transcripts were forks.** A resumed or forked
session writes a fresh `.jsonl` containing a copy of the shared history, so the same turns are
counted many times over. Group by a hash of the first user prompt and keep the longest transcript
per group. Two earlier attempts at this table, both recorded in this file and both wrong, skipped
that step: they reported Sonnet at 10.1 % and Opus at 3.0 %, off in *both* directions at once.

**The direction is solid, the magnitude is not.** Model choice here is not random — Sonnet turns
are drawn disproportionately from sessions that were already going badly, because switching is
something you do *in response to* trouble. Read this as "Opus is the safe default and Sonnet is a
bad thing to switch to under stress", not as a calibrated 4.5×.

**2. The two symptoms are one mechanism.** A reply that stops dead mid-sentence and a reply
replaced wholesale by an error are both `stop_reason: refusal`. The classifier fires before the
first token (empty content) or partway through the stream (partial content, cut mid-word).
**Do not diagnose them as separate problems** — a session spent its remaining window doing
exactly that.

**3. It is not context size, and not session length.** No `max_tokens` appears anywhere in the
recent transcripts. The largest session measured — 515 entries, 264 tool calls, including a
38k-token read — took **zero** refusals, while sessions of 143–181 entries took 6–11. The old
claim that the hazard rate rises with session length is not supported.

**Retracted, and worth recording as a method error:** a previous edit of this file claimed
*"investigating the trips re-triggers them."* That rested on 27 of 27 refusals occurring in a
context mentioning the safeguard — which is **contamination, not causation**: line 23 above
quotes the error string, so every session carries it from its first Read onward and the
condition is always true. Checking only the *first* refusal in each session, the preceding
entries contain no such wording in any of them. The correlation was an artefact of the test.

⚠️ **After any interruption mid-write, check the file parses before building on it** — one trip
truncated a `Write` inside a string literal:

```bash
python -c "import esprima,glob; [esprima.parseScript(open(f,encoding='utf-8').read()) for f in glob.glob('biochemie_pro/data/*.js')]; print('all parse OK')"
```

---

## ▶️ 当前阶段 — mustKnow 内容铺设 (2026-08-08)

The Lehninger depth queue and the entity cards are both at a natural stopping point. The work now
is a comprehension layer over the nodes that already exist.

### The priority call, made 2026-08-08 — do not silently reopen it

**Stop feature work, do not sweep-translate the coverage notes, put everything into content that
answers an exam question.** The reasoning, so it can be judged rather than inherited:

- **The features that mattered already shipped** — reading voice, 1,226 generated term questions,
  folded coverage note. Highlighting / notes / filters are comfort, and do not change whether she
  passes.
- **`coverageNote` Chinese is low value.** It records *which page the text came from* and never
  appears in an exam answer. Folding it (done) fixed the real complaint. Add Chinese
  opportunistically when touching a node; do not run it as a project.
- **The Czech layer's coverage is already complete** (ch1–10), so the gap is not coverage — it is
  the layer that makes those nodes revisable. Ruojin named which parts she wants: 追根溯源
  (`trace`) and 考点总结 (`takeaway`).

### `mustKnow` — 207 of 230 nodes done (2026-08-08). **The Czech layer is complete.**

### ✅ ANSWERED 2026-08-08 — the three questions below are settled, do not re-ask

Ruojin was asked and answered. **This supersedes the STOP block that follows**, which is kept
because its reasoning is still the record of why the questions existed.

1. **Next is `trace` (追根溯源)** — not `takeaway`, not finishing `mustKnow` first.
2. **Yes, the 20 Lehninger nodes and 3 entity cards do get `mustKnow`, in the same register.**
   23 nodes, still to write. This closes the field at 230/230 when done.
3. **`biochemie_basic` stays frozen** — the remaining Cyrillic word in its `ch1.js` L26
   (`родители`, node `1-1`) is left alone deliberately. `biochemie_pro`'s two copies of that
   defect were fixed in `0771f49`; a sweep of both apps now returns exactly that one hit.

**`trace` is built and one table is live** (`873631e`): render code in `app.js`
(`TRACE_ROWS` + `traceHtml`, called straight after `mustKnowHtml`), styles in `style.css`
(`.trace-card`, `.trace`), and the first table on `7-1-3-1`. Ported from `pesbexplain`'s
`traceTable()` with three differences, all deliberate and all explained in the comment above
`TRACE_ROWS` — read that before writing more:

- **`trace` is an ARRAY on the node**, not a field inside an `explain` item. This app has no
  `explain` layer, and one node can strand more than one opaque term.
- **Each entry is folded behind its own `<details>`**, because the request's second half was
  *「默认折叠起来，想深挖的时候有，不想看的时候不占地方」*.
- **Rows are Chinese prose with technical terms in English, not `{en, cn}` pairs.** `trace` is a
  comprehension aid and never scope or depth (§3), so bilingual rows would double the cost for
  no exam value. This is the one place the app deliberately breaks its EN-primary convention.

**Which term earns a table.** The one a reader freezes at, and preferably the one the rest of the
node depends on. `7-1-3-1` got `hemiacetal` because closing the ring is what makes C-1 a new
asymmetric carbon → which is where α/β anomers come from → and substituting its OH is what makes
a glycosidic bond. One keystone term beats three shallow ones.

⚠️ **Rows are individually optional and `numbers` is usually the one to omit.** `7-1-3-1` has no
`numbers` row because the node states no figure worth memorising. **Never pad it with a number you
have not read off the page** — that is the §16 rule applied to a new field.

⚠️ **`esprima` cannot parse `biochemie_pro/app.js` and never could.** It dies on line 466's
`/\p{Script=Latin}/u`, which the Python port cannot compile; `HEAD` fails identically, so the
data-file parse check in this file has never covered `app.js`. **After editing `app.js`, run
`python <path-to>/pesbexplain/tools/jsbalance.py biochemie_pro/app.js`, calibrated on a
known-good copy first**, then serve the app and confirm 200s. Do not read an esprima failure on
`app.js` as damage you caused.

### ⛔ The original STOP block — kept for its reasoning, now answered above

All 207 Czech nodes (ch1–10) now carry `mustKnow`. That was the whole scope of the priority call
made 2026-08-08 above ("put everything into content that answers an exam question" — the Czech
book, because "the Czech layer sets scope"). **The only things left without `mustKnow` are the 20
Lehninger depth nodes and the 3 entity cards, and extending to them was never decided — it was
explicitly deferred to this point.** Ask Ruojin before writing a single one:

1. Does she want `mustKnow` on the Lehninger depth nodes and entity cards too, or is depth-layer
   content already dense enough (it already carries `coverageNote`, `lehNotes`, full `summary`)?
2. If yes, is the register the same ("what you'd still want after forgetting the node") or does a
   depth node — which exists specifically to add beyond the Czech book — need something different?
3. Is `mustKnow` even the next priority now, or does the app need something else more — `trace`
   (追根溯源) and `takeaway` (考点总结) were the two things she named wanting, back when this
   priority call was made, and only `mustKnow` was started.

The rule that keeps the field worth having, and it is easy to get wrong: **`mustKnow` is NOT a
summary of the node. It is what you would still want in your head after forgetting the node. If
it can be reconstructed from the title, it was not worth writing.** It is bilingual
(`{ en, cn }`), renders at the very top above the warnings, and every line must land on a
consequence rather than on chemistry for its own sake (rule 1 below, non-negotiable).

Worked examples to copy the register from, all in `data/ch7.js`:

- `7-4-1-2` — change α(1→4) to β(1→4) and the chain straightens instead of coiling, so strands
  lie flat and hydrogen-bond into sheets; that one bond geometry decides both that cellulose is a
  fibre and that we cannot digest it.
- `7-8-4` — fermentation is not about making ethanol or lactate, those are waste; it exists to
  regenerate NAD⁺, without which glycolysis stops dead.
- `7-11-2-1` — inside a cell the bond is broken with phosphate, not water, so the product leaves
  already phosphorylated: it cannot escape the cell, and the ATP that phosphorylating it would
  have cost is saved.

### How to write a batch

Read the node summaries with `parse_nodes` (**do NOT regex the data files**), write the lines,
then insert them with a script **written to a file and run by path** — a heredoc eats backslashes
in this environment and will silently corrupt a regex. Match each node's `id:` line, insert
before that node's `summary: {` line at the same indent, and **assert every id was found**.
~14 nodes per batch, then parse-check, then commit.

⚠️ **Assert the inserter did not run twice.** On 2026-08-08 a batch left 14 ch8 nodes carrying
**two** identical `mustKnow` keys. JavaScript keeps the last duplicate silently, so nothing
rendered wrong and no checker complained — it showed up only as 40 nodes reporting 54 fields.
Fixed in `7cad0b3`. **After any batch, assert `mustKnow` count == node count.**

### Measuring

```bash
python -c "
import re,glob,os
for f in sorted(glob.glob('biochemie_pro/data/*.js')):
    s=open(f,encoding='utf-8').read()
    n=len(re.findall(r'^\s*id:\s*[\"\x27]',s,re.M)); m=len(re.findall(r'^\s*mustKnow:',s,re.M))
    if n: print('%-16s nodes=%3d mustKnow=%3d %s'%(os.path.basename(f),n,m,'DUPES!' if m>n else ''))
"
```

### ⛔ BLOCKED ON RUOJIN — the site root redirects away from all of this

`index.html` at the repo root runs `location.replace('biochemie_basic/index.html')`, so opening
the site normally lands on the **frozen** app. **Everything built recently lives in
`biochemie_pro` and is invisible from the default URL** — the voice panel, the term drill,
`mustKnow`, the folded coverage note, all 20 Lehninger nodes and all 3 entity cards. This is why
she reported not being able to find `mustKnow` at all.

The working URL is **https://sumuxie.github.io/bio-state-exam/biochemie_pro/**.

**Three options were put to her and none is chosen yet** — redirect to `pro`; keep `basic` and
bookmark `pro`; or replace the redirect with a two-link chooser. **Do not change the redirect
without her answer**: it decides what she opens every day, and `biochemie_basic` is frozen
precisely because she revises from it.

---

## The project in six lines

A biochemistry oral-exam trainer for a Czech state exam, three apps in one repo.

- **`biochemie_basic/`** — FROZEN. The user revises from it daily. Never modify.
- **`biochemie_pro/`** — where all work happens. Czech textbook (207 nodes, ch1–10, complete)
  **plus** a Lehninger 8 depth layer (20 nodes) joined by `topicKey`, **plus** 3 integration
  cards (`E-tryptophan`, `E-histidine`, `E-cysteine`) — the headline feature, archive §4 and §12.
- **`PESB/`** and **`oral_prep_app/`** — separate apps, not this phase, listed so they do not look
  like strays. `PESB/`'s handoff is **not in this repo** — it is at
  `C:\Users\Admin\Documents\trae_projects\recombinants_trae_independant\HANDOFF_PESB_QUICK.md`.

**The division of labour, which an early draft got backwards** (archive §3): the **Czech book
sets scope** (it is what the department teaches), **Lehninger sets depth** (go deeper where Czech
is thin), and the **Chinese notes are a comprehension aid only** — never scope, never depth.
**A classmate's report of a real exam question outranks everything in either handoff.**

---

## Where things stand

| | |
|---|---|
| Czech layer | 207 nodes, ch1–10, complete. **Never audited** — see "what to ask" below |
| Lehninger depth layer | **20 nodes**: `L-1-3-1` `L-2-2-1` `L-3-3-1` `L-3-4-1` `L-5-1-1` `L-6-4-1` `L-8-2-1` `L-8-3-1` `L-11-2-1` `L-11-3-1` `L-16-2-1` `L-17-2-1` `L-19-1-1` `L-19-2-1` `L-21-1-1` `L-22-3-1` `L-23-2-1` `L-23-3-1` `L-25-1-1` `L-26-2-1`. Chapters 3, 8, 11, 19 and 23 each hold two, split across an `a`/`b` file pair |
| `topicKey`s | **63** distinct over **230** nodes (207 cz + 20 lehninger + 3 entity). **Exactly 18 keys join more than one source**, which is the whole point of `pro`. `amino-acids` is the only one joining all three. The key count did not move for the last five depth nodes — that is the §9g pattern working |
| Entity cards | **3**: `E-tryptophan`, `E-histidine`, `E-cysteine` — optically, electrostatically and covalently special, which closes the amino-acid trio. **The next entity should leave the amino acids; the measurement says `heme`** (archive §12e–§12f) |
| `lehNotes` | 15 notes on 13 nodes. Keep them rare (archive §9f) |
| Citations | 458 OK / 0 ELSEWHERE / 0 UNCHECKED. **Keep it at zero** — close any new UNCHECKED row in the commit that creates it |
| UI | Done. Two books render, sidebar **By book / By topic** toggle, "Same topic" strip, `lehNotes` blocks. Nothing more needs building |
| Live site | https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

**The remaining work is content, not plumbing.**

### The depth queue is exhausted, and what is left is worth less than it looks

All twenty of `depth_queue.tsv`'s top 20 are written. 65 sections remain on paper, but by ratio
band — 13 at ≥3.0, 25 at 2.0–3.0, 12 at 1.5–2.0, 10 at 1.0–1.5, **5 below 1.0** (where Lehninger
says no more than the Czech book already does) — anything under ~1.5 adds nothing, so the real
pool is **about 38**. Of those, the only group with real value is **subjects the Czech book
genuinely lacks**: §27.1 the genetic code, §27.2 protein synthesis, §28.1/§28.2 gene regulation,
§18.2 the urea cycle, §18.3 amino acid degradation. Core metabolism (§14.1, §14.4, §16.1, §15.2,
§19.3) is already covered at Czech level; introductory material (§1.2, §1.4, §1.5, §3.2, §8.1) is
a skip.

⚠️ **`depth_queue.tsv`'s ratio is NOT an importance score.** It is Lehninger pages ÷ Czech pages —
*how much more Lehninger says*. A high ratio can mean the Czech book is thin on something
important, **or** thin because the department does not examine it, and the number cannot tell
those apart. A session once presented the top-20 list as a to-do queue and the user reasonably
read the remaining ranks as outstanding work.

### ✅ Photosynthesis is NOT a coverage gap — an earlier draft of this file said it was

**Measured 2026-08-08.** Czech chapter 9 is photosynthesis end to end: **27 nodes**, `9-1`–`9-27`,
covering photoautotrophy, thylakoid structure, all three pigment classes, the reaction centre and
antenna, cyclic vs linear flow and the Z-scheme, ATP synthase, CO₂ fixation, RubisCO, the Calvin
cycle, photorespiration, C-4 / Hatch–Slack, and on into nitrogen fixation. Five topicKeys already
exist for it.

**Where the wrong claim came from, because the failure mode will recur.** The archive records that
a classmate was examined on photosynthesis *and that the Chinese notes omit it* — the observation
that established "notes are a comprehension aid, never scope". A session read that as "the app is
missing photosynthesis" and promoted four Lehninger §20.x sections to top priority. **It is the
NOTES that omit photosynthesis, not the Czech book and not the app.** Before calling anything a
coverage gap, grep the Czech layer for it — that is one command and it settles the question.

Lehninger depth on §20.x remains a legitimate *optional* pick at the ordinary priority its ratio
gives it. It is not urgent. **But ch9 is the right next `mustKnow` target**, because it is the one
subject with a real exam question on record.

---

## The rules that actually bite

**1. No orbitals, no resonance structures.** The user: *"我的有机化学几乎说是没有根基…一定不要讲
完全化学，我听不懂的。"* Every chemical idea must land on something visible or measurable at a
bench. Not "aromaticity is a delocalised π system satisfying 4n+2" but "a benzene ring is flat and
carries no charge, therefore it absorbs UV at 280 nm, therefore it slides between DNA bases,
therefore it hides inside the protein." The load is concentrated in Czech ch7 (sugars), ch8
(lipids) and §2.1.3 — archive §5, §5a. **It is a "write it this way" flag, not an "avoid" flag.**

**2. Never trust a page citation you did not verify.** Three of six citations in the first entity
card were wrong, one by 21 pages. Run `python lehninger_index/scripts/verify_citations.py` after
writing anything, and hand-check every `UNCHECKED` row. Archive §16.

**3. Read Lehninger in B, cite pages in A.** Both PDFs have text layers so the same string locates
in both. **A's printed page = A's pdf page − 36.** A's text layer is OCR of a scan
(`dehy:Jrogenase`) and it breaks subscripts — `O₂` reads as `0 2` — so a probe containing a
subscript fails on a page where the sentence is verbatim present.
`lehninger_index/scripts/locate.py` does the searching.

**4. B's text layer has a ligature bug producing silent false negatives.** `ff fi fl ffi ffl` are
single glyphs on 66 % of pages; `ft` renders as `×` or `ƞ` on 19 %. `lipid raft`, `cleft` and
`frameshift` all read as **0 hits** before this was fixed. `locate.py` now de-ligatures on every
search — but **any "0 hits" claim from a session before 2026-08-06 is unverified.** Archive §6.

**5. Do not port Lehninger page by page.** That is ~680 nodes and produces something worse than
the textbook. Work topic-first. Gaps are the intended outcome — the validator exempts Lehninger
nodes from the Czech page-coverage check precisely so nobody pads the data. Archive §4, §9d.

**6. `chapter` is book-local.** `leh_ch8.js` is Lehninger's ch8 (nucleic acids); `ch8.js` is the
Czech book's ch8 (lipids). Unrelated. Never compare `chapter` or `pages` across books.

### Method rules earned the hard way — read before writing a depth node

- **Test every quote against A BEFORE writing the prose.** Of 54 candidates in one section, 21
  were one page out, every one because the page had been *predicted* by scaling from B's layout.
  A later run pre-tested 70 quotes and hit **zero** page errors. One script run replaces an entire
  audit cycle. **Never predict an A page from B's layout.**
- **An `ELSEWHERE` verdict is a hypothesis, not a verdict.** Open the page before editing a
  citation — nine of eleven ELSEWHEREs across recent nodes were the checker's fault.
- **An `interpolated` TOC range is *unreliable*, not *wrong*.** Check the first subheading **and**
  the SUMMARY; it costs two minutes and has been wrong at the start, wrong at the end, and right
  at both.
- **Three probe constraints silently drop a quote** (the message is `no searchable phrase`, which
  reads as though you added nothing): 18–140 characters, at least 4 words, and **never quote a
  phrase in order to say A cannot find it** — the checker adopts it as an unfindable probe and
  condemns the surrounding citations.
- **Choose quotes with no prime, no arrow, no subscript, no roman numeral**, and locate a SUMMARY
  by its section title rather than the word — `sum ma ry 6.4` and `summa ry 19. 1` both occur.
  A prime mark also breaks the checker's own quote regex.
- **Run a parse check immediately after editing any field that quotes book text.** Double quotes
  inside a double-quoted `coverageNote` break the parse, and `verify_citations.py` never reaches a
  file that fails to parse — so it produces no diagnostic at all.
- **OCR damage is per-REGION, not per-page.** Do not write off a page; write off a region.
- **The citation checker verifies that a page supports a citation — NOT that a quoted span is
  quoted accurately.** A misquote inside a book quote passed a clean run, because an OK from the
  EN probe satisfied the whole row. Grep each distinctive quote across the file before committing.

---

## How to write a depth node

1. **Look up the `topicKey`** in `lehninger_index/topickey_assignment.json`. Not a judgement call.
2. **Run the two-minute check** (archive §9e): list the Czech nodes that key actually holds and
   confirm they are the ones *teaching* the subject. Four outcomes have occurred:
   - **§9g — change nothing** (reuse the primary's key). This has fired **seven times running**
     and is the one to test first.
   - **§13m — cross-reference by name**, when another node teaches a slice of the material but its
     own subject is different.
   - **§9e — move the Czech nodes**, when the key holds a thin summary while the substantive nodes
     sit elsewhere. Leave a `manual_note` in **both** `topickey_*.json` files.
   - **§2e — write it Lehninger-only** with an empty `nodes: []`, when nothing teaches it.

   ⚠️ **`step4_topickeys.py` regenerates these files from `master_map.tsv` and would silently
   revert every hand edit.** That is what `manual_note` defends against.
3. **Read the whole Lehninger section in B**, every subheading plus any Box, end to end.
4. **Write the node** in `biochemie_pro/data/leh_chN.js`, following `L-5-1-1` (archive §13j) as
   the template. State plainly in `coverageNote` **what the Czech node already has**, so nothing
   is presented as new when it is not.
5. **Add `lehNotes`** only where revising from the Czech node alone would *mislead in an exam* —
   `conflict`, `gap` or `cz-stronger`. Quote the book, never yourself. Archive §9f.
6. **Wire the file into `biochemie_pro/index.html`'s script tags.** The validator checks that
   `index.html` and `data/` agree, so a file nobody loads is a failure, not a silent pass.
7. **Verify, validate, document, commit:**
   - `python lehninger_index/scripts/verify_citations.py` — hand-check every `UNCHECKED` row.
   - `python lehninger_index/scripts/step5_check.py` — **there is no `node` on this machine**, so
     this Python re-implementation is how `tools/validate-data.js` gets run. It prints `done` on
     stdout and must end `RESULT: all checks pass` in `lehninger_index/_step5_report.txt`.
   - Write a `§13x` section **in the archive**, and update the counts in this file's
     "Where things stand" table. **Do not add a section to this file.**
   - `python lehninger_index/scripts/audit_handoff.py` — **run LAST, after the doc edits.** It
     recomputes the live topic / node / topicKey counts and fails if this file disagrees. It must
     end `TOTAL: 3` or fewer; the 3 standing findings are cosmetic and pre-existing.
   - Commit and push.

---

## What to ask the user

1. **Any classmate report of a real exam question.** Outranks everything in either handoff. One
   has already overturned a plan.
2. **Has the Czech layer ever been audited?** Still open, and it is the *primary* revision surface
   (she revises from both layers, Czech first). 207 nodes written in an earlier phase, unchecked
   since. The one known error, `2-2-6`'s `cnNote`, is now closed — and it was found by accident
   rather than by an audit, which is the actual point: **nobody has ever looked systematically.**
3. **Are the fifteen `lehNotes` right in tone and length?** They are the template for every later
   one and she has not seen them rendered. Two are worth looking at first: `4-1-3-1`, the only one
   correcting a plain factual count, and `8-4-4-3`, the only one saying the Czech node is not
   wrong but *half the picture*.

---

## Grep index for `HANDOFF_LEHNINGER.md`

Search for the `## N.` or `### Na.` heading, read that section only.

| § | what is in it |
|---|---|
| 0 | deploy state, and the page-scan exposure still readable from git history — needs an explicit decision before any force push |
| 1, 2 | file locations; measured facts about the three Lehninger PDFs (A/B/C) |
| 3 | **the premise** — Czech = scope, Lehninger = depth, notes = aid |
| 4 | what `pro` is for; the integration-card idea |
| 5, 5a | the organic-chemistry rule, and where the load actually sits |
| 6, 6a | what Lehninger does and does not contain (measured); the ligature bug; what the Chinese notes contain |
| 7 | schema: `book`, `topicKey`, `lehNotes` |
| 8 | three decisions settled by the user — do not reopen |
| 9a | what `depth_queue.tsv`'s ratio means, and what it does not |
| 9b | the 32 sections no Czech node claims, and the user's ruling on each |
| 9c | **how `topicKey` was chosen** + the table of ready-to-write ranks |
| 9d | what the validator enforces now |
| 9e | **the two-minute check** and the first `topicKey` correction |
| 9f | `lehNotes` — the format, the bar, the ones that exist |
| 9g–9n | one per depth-node `topicKey` decision: §6.4, §16.2, §19.2, §11.2, §2.2, §8.2, §26.2, §23.3. Each carries that section's verified page range, subheadings, and what the Czech layer lacks |
| 12, 12e, 12f | the entity cards — the tryptophan dossier that became the template, then `E-histidine` and `E-cysteine`; the measured table for choosing the next entity (`heme`); and the misquote that passed a clean citation run |
| 13–13o | one per Lehninger node, then two method sections. **`13j` (`L-5-1-1`) is the best template for how to *write* a node**; `13l` (`L-25-1-1`) for how to *verify* one; `13m` (`L-23-2-1`) for the two checker bugs that inflated every audit before 2026-08-07; `13o` for clearing the citation backlog to zero |
| 13p–13w | the eight most recent nodes: `L-6-4-1` `L-16-2-1` `L-19-2-1` `L-11-2-1` `L-2-2-1` `L-8-2-1` `L-26-2-1` `L-23-3-1`. `13t` and `13u` carry the pre-test method and the 21-of-54 measurement behind it; `13w` has the three mechanical shapes that produce an UNCHECKED row |
| 14 | working locally: what is local-only, how to run and check with no `node` |
| 15, 16, 16c | figures; **citation verification**; caption-vs-cross-reference ambiguity |
