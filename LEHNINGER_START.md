# START HERE — the Lehninger phase

**Read this file in full. Do NOT read `HANDOFF_LEHNINGER.md` in full** — it is 192 KB ≈ 48k
tokens and reading it triggers a compaction before you have done any work. That file is now an
**archive you grep into**, one section at a time, using the index at the bottom of this page.
`HANDOFF.md` (69 KB, the Czech app) is the same: grep, never read whole. Both sizes are
re-checked by `lehninger_index/scripts/audit_handoff.py`, which fails if they drift out of date.

Rewritten 2026-08-07 because a session was told to read the archive and spent its whole context
doing it.

---

## The project in six lines

A biochemistry oral-exam trainer for a Czech state exam, three apps in one repo.

- **`biochemie_basic/`** — FROZEN. The user revises from it daily. Never modify.
- **`biochemie_pro/`** — where all work happens. Czech textbook (207 nodes, ch1–10, complete)
  **plus** a Lehninger 8 depth layer (13 nodes) joined by `topicKey`.
- **`PESB/`** and **`oral_prep_app/`** — separate apps, not this phase, listed so they do not look
  like strays. `PESB/`'s handoff is **not in this repo** — it lives at
  `C:\Users\Admin\Documents\trae_projects\recombinants_trae_independant\HANDOFF_PESB.md`.

**The division of labour, which an early draft got backwards** (`HANDOFF_LEHNINGER.md` §3):
the **Czech book sets scope** (it is what the department teaches), **Lehninger sets depth**
(go deeper where Czech is thin), and the **Chinese notes are a comprehension aid only** — never
scope, never depth. A classmate was examined on photosynthesis, which the notes omit; calibrating
to the notes would have skipped it. **A classmate's report of a real exam question outranks
everything in either handoff.**

---

## ✅ `L-6-4-1` is finished — the first node that needed a `topicKey` decision and cost no data change (2026-08-07)

Rank 3, §6.4 Examples of Enzymatic Reactions, ratio 11 — the highest ratio in the whole queue that
was still unwritten. Decided in §9g, written in §13p, in a new `biochemie_pro/data/leh_ch6.js`
wired into `index.html`; 16 citation rows, all OK on the first run; validator clean. It carries the
**ninth `lehNote`**, a `conflict` on `3-6`: the hexokinase xylose experiment disproves that node's
closing claim that only a true substrate can force the conformational change. `L-3-3-1` (rank 18,
§13n), `L-23-2-1` (rank 7, §13m) and `L-25-1-1` (rank 20, §13l) came just before it and are equally
clean.

### ✅ The `2-2-6` cnNote error is closed

Two earlier sessions flagged it; §2c deferred it **on principle** — *"flagging it is not the same
as guessing it"* — because the fix needed the Chinese notes' own p.41 heading and nobody had
opened it. **It has now been opened.** The notes have no text layer, so pages were rendered from
`生物化学笔记_分卷/…_03_p031-045.pdf` and read as images: p.41 carries a highlighted heading
**八 蛋白质的分离、纯化、表征** whose first item is **① 蛋白质的性质** — literally `2-2-6`'s own
title — and p.46 is **blank**, fixing the topic's end. So topic 八 = pp.41–45, measured at both
ends. `2-2-6` now reads `topic: "八"`, `status: "mapped"`, with the evidence written into its
`coverageNote`. **Topic 八 appears in the data for the first time.**

### ✅ The citation backlog is cleared: 260 OK / 0 ELSEWHERE / 0 UNCHECKED

Every `A p.N` citation in `biochemie_pro` now self-verifies on every run (§13o). This was the
largest known backlog in the project. **Not one of the 34 UNCHECKED citations turned out to be
wrong** — they were gaps in *verifiability*, not errors. Each was closed by reading the cited page
and working a short verbatim quote into the node's own prose.

**Keep it at zero.** `verify_citations.py` must end `0 elsewhere, 0 unchecked`. If a new node
adds an UNCHECKED row, close it in the same commit rather than banking it.

⚠️ **Three probe constraints that silently drop a quote** — check these first when a quote you
just added does not clear its row, because the message you get back is `no searchable phrase`,
which reads as though you had added nothing:

- **18–140 characters** between the quote marks. Three quotes of 157–158 chars were silently
  ignored.
- **at least 4 words**. `'membrane interface anchors'` is 3, so it never became a probe.
- **never quote a phrase in order to say A cannot find it** — the checker adopts it as an
  unfindable probe and condemns the surrounding citations. Name such phrases without quote marks.

### ⚠️ Any audit number written before 2026-08-07 is inflated

**Four bugs in `verify_citations.py` were fixed that day**, two of which had been distorting every
audit ever run. Re-run the script; never compare against a recorded figure.

- **`cited_range()` re-searched the context window** and took the *first* citation in it, not the
  one the row was about — so a row for `A pp.930-940` was silently re-ranged to a nearby
  `A p.919`, found a probe there, and **printed as OK**. It did not drop the citation, it
  **confirmed the wrong one**. 15 rows affected.
- **`probes()` took the first figure label in the window**, not the nearest one *before* the
  citation, and **condemned seven correct citations** in `L-11-3-1`.
- **Spaced figure labels.** A's OCR writes `figure 11 -31`, so a probe built as `figure 11-31`
  never matched — four more correct citations reported as unverifiable. `norm()` now collapses
  whitespace around a hyphen between digits.
- **Label order**, which was a regression from the second fix: section nodes write
  `Fig. 3-28, A p.94` (label first), the entity card writes `A p.75, Fig. 3-6` (label last).
  Cutting the window at the citation broke the second convention. Both are supported now.
  **A change made to stop over-matching quietly under-matched somewhere with a different house
  style** — worth remembering before the next "obvious" tightening.

### Five things the recent nodes learned

- **Never scale a B page into an A page — search A.** In §25.1, ten of 54 candidate quotes were on
  a different A page than B's layout implied, every one off by exactly one.
- **An `interpolated` A range is *unreliable*, not *wrong*.** §25.1's was wrong at the start,
  §23.2's at the end, §3.3's was correct at both. Check the first subheading **and** the SUMMARY;
  it costs two minutes.
- **Do not cite pages in a section you have not read.** Forward-pointers to §23.3, §23.4 and §25.2
  were using interpolated ranges — the exact source shown to be unreliable. They now name the
  section and omit the pages.
- **When documenting an OCR miss, name the phrase WITHOUT quotation marks.** `verify_citations.py`
  treats any quoted span as a probe, so quoting a phrase in order to say it *cannot* be found
  makes the checker adopt an unfindable probe and condemn the surrounding citations. Cost two
  UNCHECKED rows on `L-3-3-1`'s first run.
- **Five OCR traps in A**: `Klenow` reads as `kienow` (the word is not in A's text layer at all),
  arrows vanish into an unmapped replacement character, roman `III` reads as `ill`, primes gain
  a stray space (`3' -hydroxyl`), and **the word SUMMARY can break apart** — A p.213 reads
  `sum ma ry 6.4`, so a probe for that word plus the section number scores 0 hits on the page
  that carries it (§9g). **Choose quotes with no prime, no arrow, no subscript and no roman
  numeral, and locate a SUMMARY by its section title rather than by the word.**

**The lesson, now confirmed three times: an `ELSEWHERE` verdict is a hypothesis, not a verdict.**
Open the page before you edit a citation. Nine of the eleven ELSEWHEREs seen across these nodes
were the checker's fault, not the data's.

---

## Where things stand

| | |
|---|---|
| Czech layer | 207 nodes, ch1–10, complete. **Never audited** — see "what to ask" below |
| Lehninger depth layer | **13 nodes**: `L-1-3-1` `L-3-3-1` `L-3-4-1` `L-5-1-1` `L-6-4-1` `L-8-3-1` `L-11-3-1` `L-17-2-1` `L-19-1-1` `L-21-1-1` `L-22-3-1` `L-23-2-1` `L-25-1-1`. `leh_ch3.js` holds two of them |
| `topicKey`s | **63** distinct over **221** nodes (207 cz + 13 lehninger + 1 entity), counted from the app data 2026-08-07. **Exactly 13 keys join more than one source**, which is the whole point of `pro`: `amino-acid-derived-molecules` `amino-acids` `bioenergetics-basics` `dna-replication` `enzyme-mechanism` `fatty-acid-biosynthesis` `fatty-acid-oxidation` `membrane-transport` `oxygen-binding-proteins` `protein-primary-structure` `respiratory-chain` `tissue-specific-metabolism` `working-with-proteins`. `nucleic-acid-chemistry` is deliberately **not** among them — `L-8-3-1` is Lehninger-only. The key count did **not** move when `L-6-4-1` was added, which is the point of §9g: it reused a key instead of making one |
| Entity cards | 1 (`E-tryptophan`). The headline feature, still barely started — archive §4, §12 |
| UI | Done. Two books render, sidebar **By book / By topic** toggle, "Same topic" strip, `lehNotes` blocks. Nothing more needs building |
| Live site | https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

**The remaining work is content, not plumbing.**

## ✅ Rank 3 (§6.4) is decided AND written — `L-6-4-1` (2026-08-07)

**`L-6-4-1` took `topicKey: "enzyme-mechanism"` and joins Czech `3-6`. Nothing was re-keyed,
nothing created, no `manual_note` needed — so `step4_topickeys.py` cannot revert it.** The node
is in `biochemie_pro/data/leh_ch6.js`, wired into `index.html`, 16 citation rows all OK, and it
carries the **ninth `lehNote`** — a `conflict` on `3-6`, because the xylose experiment disproves
that node's closing claim. Decision in archive **§9g**, the node itself in **§13p**; the short
version of the decision:

- §6.4 is a *secondary* mapping of Czech §3.6 (`6.2,6.4`), so §9c's look-up returns no key. Rank
  1's fix — create a key, move the node — does **not** apply, because the key that already exists
  is accurate: `3-6` is literally *Mechanismus působení enzymů*, "Mechanism of enzyme action".
- The §9e check passes cleanly. `enzyme-mechanism` holds exactly one node, `3-6`, and it is
  substantive rather than a stub — and it teaches covalent catalysis *through chymotrypsin*,
  which is §6.4's own first subheading.
- The worked examples are scattered exactly as in §13m, and by that ruling **none of those nodes
  move**: `3-2` has the metal-ion roles, `5-1` the serine proteases and the chymotrypsinogen
  cascade, `6-1-1` hexokinase as energetic coupling, `7-8-1` and `7-8-3` hexokinase and enolase
  as glycolytic steps. Cross-reference them by hand inside the node.
- Already measured, so do not re-derive: **§6.4 = A pp. 203–213, B pp. 823–852**, verified at
  both ends; the five subheadings and the A page each starts on; SUMMARY 6.4 verbatim; and the
  fact that the Czech layer has **0 hits** for transition state, penicillin, HIV protease and
  lysozyme, so those are genuine gaps. **Lysozyme is not in §6.4 of the 8th edition** — that is
  an earlier edition's line-up.
- ⚠️ **§5's organic-chemistry rule bites harder here than anywhere yet** (acyl-enzyme, oxyanion
  hole, tetrahedral intermediates). Anchor every idea on something bench-visible: burst kinetics,
  the pH-rate profile in Fig. 6-26 on A p.205, hexokinase closing over glucose, penicillin as a
  drug that works because of a mechanism.

### Next pick: no free queue picks remain — choose between two

`lehninger_index/depth_queue.tsv` ranks Lehninger sections by how much more Lehninger says than
the Czech book. Top 20, with the 13 done ones struck through:

~~1 §5.1~~ · ~~2 §8.3~~ · ~~3 §6.4~~ · ~~4 §11.3~~ · ~~5 §21.1~~ ·
~~6 §19.1~~ · ~~7 §23.2~~ ·
8 §16.2 · ~~9 §17.2~~ · 10 §19.2 · 11 §11.2 · ~~12 §1.3~~ · 13 §2.2 · ~~14 §3.4~~ · 15 §8.2 ·
16 §26.2 · ~~17 §22.3~~ · ~~18 §3.3~~ · 19 §23.3 · ~~20 §25.1~~

**The first seven ranks are now all written, and every one of the eight that remain needs a
`topicKey` decision before a word can go on the page.** So the next move is again a choice, not
a queue pop:

1. **Take a remaining rank and make its `topicKey` decision.** The highest ratio left is
   **rank 8 (§16.2, reactions of the citric acid cycle, ratio 7.2)**; §13m added a THIRD
   possible outcome to the §9e check and §9g a fourth, on top of the two failure modes below:
   the key's Czech node
   may be a thin-but-legitimate partner while the real material sits *scattered* across pathway
   nodes that must **keep** their own keys. In that case re-key nothing — the multi-source keys are
   working joins and breaking one to tidy another is a bad trade — and cross-reference by hand
   inside the node instead. **§9g adds a fourth outcome**: when the Czech section maps to two
   Lehninger sections that deepen the *same* node, the primary's key already fits, so reuse it and
   change nothing.
2. **The entity cards** — archive §4, §12. This is `pro`'s *headline feature* and it still has
   exactly one card. §12 already contains a finished tryptophan dossier that nothing has been built
   from. Of the three, this is the one the user named as the point of the app.
~~3. Clear the 34 UNCHECKED citation rows.~~ **Done 2026-08-07 (§13o) — the audit is now
   260 OK / 0 ELSEWHERE / 0 UNCHECKED.** Keep it there: close any new UNCHECKED row in the same
   commit that creates it.

Every rank above except 3 needs a `topicKey` decision first — see the two failure modes below.

---

## The rules that actually bite

**1. No orbitals, no resonance structures.** The user: *"我的有机化学几乎说是没有根基…一定不要讲
完全化学，我听不懂的。"* Every chemical idea must land on something visible or measurable at a
bench. Not "aromaticity is a delocalised π system satisfying 4n+2" but "a benzene ring is flat and
carries no charge, therefore it absorbs UV at 280 nm, therefore it slides between DNA bases,
therefore it hides inside the protein." The load is concentrated in Czech ch7 (sugars), ch8
(lipids) and §2.1.3 — archive §5, §5a. **It is a "write it this way" flag, not an "avoid" flag**;
two nodes hit it and both worked.

**2. Never trust a page citation you did not verify.** Three of six citations in the first entity
card were wrong, one by 21 pages. Run
`python lehninger_index/scripts/verify_citations.py` after writing anything, and hand-check every
`UNCHECKED` row. Archive §16.

**3. Read Lehninger in B, cite pages in A.** Both PDFs have text layers so the same string locates
in both. **A's printed page = A's pdf page − 36.** A's own text layer is OCR of a scan
(`dehy:Jrogenase`), and it breaks subscripts — `O₂` reads as `0 2`, `nH` as `n8` — so a probe
containing a subscript fails on a page where the sentence is verbatim present.
`lehninger_index/scripts/locate.py` does the searching.

**4. B's text layer has a ligature bug, and it produces silent false negatives.** `ff fi fl ffi
ffl` are single glyphs on 66 % of pages; `ft` renders as `×` or `ƞ` on 19 %. `lipid raft`, `cleft`
and `frameshift` all read as **0 hits** before this was fixed. `locate.py` now de-ligatures on
every search and self-heals its cache — but **any "0 hits" claim from a session before 2026-08-06
is unverified.** Archive §6.

**5. Do not port Lehninger page by page.** That is ~680 nodes and produces something worse than
the textbook. Work topic-first: decide the depth a topic needs, then take the two or three
Lehninger sections that supply it. Gaps are the intended outcome — the validator was specifically
changed so Lehninger nodes are exempt from the Czech page-coverage check, because enforcing
coverage there would make someone pad the data. Archive §4, §9d.

**6. `chapter` is book-local.** `leh_ch8.js` is Lehninger's ch8 (nucleic acids); `ch8.js` is the
Czech book's ch8 (lipids). Unrelated. Never compare `chapter` or `pages` across books.

---

## How to write a depth node

1. **Look up the `topicKey`** for your Lehninger section in
   `lehninger_index/topickey_assignment.json`. It is not a judgement call — the key already exists
   and the join happens by itself.
2. **Run the two-minute check** (archive §9e). List the Czech nodes that key actually holds and
   confirm they are the ones *teaching* the subject. This has failed twice, in two different ways:
   - **rank 9's way** — the key held a thin summary node while the substantive Czech nodes sat
     under a different key. Fix: move the Czech nodes, leave a `manual_note` in **both**
     `topickey_*.json` files. Archive §9e.
   - **rank 2's way** — the Czech node holding the mapping did not teach the subject at all, and no
     other node did either. Fix: there is nothing to join, so write it Lehninger-only with an empty
     `nodes: []`. Archive §2e.
   - **rank 3's way** — the check passes and the answer is to change nothing, because the Czech
     section maps to two Lehninger sections that deepen the same node, so the primary's key already
     fits the one you are writing. Archive §9g.

   **⚠️ `step4_topickeys.py` regenerates these files from `master_map.tsv` and would silently
   revert every hand edit.** That is what the `manual_note` fields are defending against.
3. **Read the whole Lehninger section in B**, every subheading plus any Box, end to end.
4. **Write the node** in `biochemie_pro/data/leh_chN.js`, following `L-5-1-1` in `leh_ch5.js` as
   the template (archive §13j explains its choices). State plainly in `coverageNote` **what the
   Czech node already has**, so nothing is presented as new when it is not.
5. **Add `lehNotes` on the Czech side** only where revising from the Czech node alone would
   *mislead in an exam* — `conflict`, `gap` or `cz-stronger`. Nine exist, on eight nodes. **Keep them rare**; a
   warning on every node is a warning nobody reads. Quote the book, never yourself. Archive §9f.
6. **Wire the file into `biochemie_pro/index.html`'s script tags.** The validator checks that
   `index.html` and `data/` agree, so a file nobody loads is a failure, not a silent pass.
7. **Verify, validate, document, commit:**
   - `python lehninger_index/scripts/verify_citations.py` — then **hand-check every `UNCHECKED`
     row** (`no searchable phrase` just means the checker had no probe), and give each one a short
     verbatim book quote so it self-verifies next time. Treat `ELSEWHERE` as a hypothesis and open
     the page before editing anything.
   - `python lehninger_index/scripts/step5_check.py` — **there is no `node` on this machine**, so
     this Python re-implementation is how `tools/validate-data.js` gets run. It must end
     `RESULT: all checks pass`, negative tests included.
   - Write a `§13x` section in the archive, and update the archive's `Start here`, `§9c`'s table,
     and the node count in this file.
   - `python lehninger_index/scripts/audit_handoff.py` — **run this LAST, after the doc edits.**
     It checks the handoffs for malformed tables, truncated paragraphs and unbalanced markup, and
     since 2026-08-07 it also **recomputes the live topic / node / topicKey counts and fails if
     the figures in this file disagree**, plus flags any frozen count written as what a run
     "currently prints". It must end `TOTAL: 3` or fewer — the 3 standing findings are cosmetic
     and pre-existing (one strikethrough with unbalanced `**`, one bullet with no full stop, and
     §16's subsections being ordered a/c/b). Anything above 3 is yours.
   - Commit.

---

## What to ask the user

1. **Any classmate report of a real exam question.** Outranks everything in either handoff. One has
   already overturned a plan.
2. **Has the Czech layer ever been audited?** Still open, and it is the *primary* revision surface
   (the user confirmed on 2026-08-07 that they revise from both layers, Czech first). 207 nodes
   written in an earlier phase, unchecked since. **One error is sitting in the open right now**:
   node `2-2-6`'s `cnNote` points at Chinese-notes topic 七 (pp.37–40, myoglobin/haemoglobin) when
   its actual subject — protein properties, Sephadex, SDS-PAGE — is topic 八 (pp.41–45). Flagged in
   two earlier sessions, fixed in neither. Archive §2c, §6a.
3. **Are the nine `lehNotes` right in tone and length?** They are the template for every later
   one and the user has not seen them rendered. Two are worth looking at first: `4-1-3-1`, the
   only one correcting a plain factual count (Czech says three DNA polymerases, Lehninger says
   five), and `8-4-4-3`, the only one saying the Czech node is not wrong but *half the picture*
   (ketone bodies as pathology only, never as the fuel that keeps a starving brain alive).

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
| 9g | **rank 3 (§6.4) decided** — reuse the primary's key, re-key nothing; plus §6.4's verified page range, subheadings, SUMMARY and the four things the Czech layer lacks |
| 9f | `lehNotes` — the format, the bar, the six that exist |
| 12 | the tryptophan entity card — a finished dossier, nothing written yet |
| 13–13o | one per Lehninger node, then two method sections. `13j` (`L-5-1-1`) is the best template for how to *write* a node; `13l` (`L-25-1-1`) for how to *verify* one — page ranges, B-to-A drift, OCR traps; `13m` (`L-23-2-1`) for the two checker bugs that inflated every audit before 2026-08-07; **`13o` for clearing the citation backlog to zero and the three probe constraints that silently drop a quote** |
| 14 | working locally: what is local-only, how to run and check with no `node` |
| 15, 16, 16c | figures; **citation verification**; caption-vs-cross-reference ambiguity |
