# START HERE — the Lehninger phase

**Read this file in full. Do NOT read `HANDOFF_LEHNINGER.md` in full** — it is 145 KB ≈ 36k
tokens and reading it triggers a compaction before you have done any work. That file is now an
**archive you grep into**, one section at a time, using the index at the bottom of this page.
`HANDOFF.md` (70 KB, the Czech app) is the same: grep, never read whole.

Rewritten 2026-08-07 because a session was told to read the archive and spent its whole context
doing it.

---

## The project in six lines

A biochemistry oral-exam trainer for a Czech state exam, three apps in one repo.

- **`biochemie_basic/`** — FROZEN. The user revises from it daily. Never modify.
- **`biochemie_pro/`** — where all work happens. Czech textbook (207 nodes, ch1–10, complete)
  **plus** a Lehninger 8 depth layer (9 nodes) joined by `topicKey`.
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

## ✅ `L-8-3-1` is finished and verified (2026-08-07)

Rank 2 of the depth queue, §8.3 Nucleic Acid Chemistry — written, wired, **every citation
verified**, validator clean, documented in archive §13k. Nothing is outstanding on it.

**It is worth knowing what it cost, because the same trap is waiting for the next node.** Three
bugs in `verify_citations.py` surfaced while finishing it, all of one family — *the checker
reporting its own limitation as a finding*:

- a weak probe could short-circuit a strong one, which made it demand a "fix" to a **correct**
  citation (BOX 8-1's title lives inside the box graphic, so the only occurrences of the string
  "Box 8-1" in A are the three cross-references *to* it);
- apostrophes were parsed as quote delimiters, so the regex spanned `'s` to `'s` and manufactured
  probes out of the node author's own prose;
- in a long multi-citation field, one quote was offered to every citation in it, condemning two
  that it said nothing about.

All three are fixed and commented in the script. The audit went **107 OK / 1 ELSEWHERE / 37
UNCHECKED → 114 OK / 0 ELSEWHERE / 30 UNCHECKED**, with nothing downgraded.

**The lesson to carry: an `ELSEWHERE` verdict is a hypothesis, not a verdict.** Open the page
before you edit a citation. Two of the three "errors" this checker reported on this node were the
checker's, not the data's.

---

## Where things stand

| | |
|---|---|
| Czech layer | 207 nodes, ch1–10, complete. **Never audited** — see "what to ask" below |
| Lehninger depth layer | **9 nodes**: `L-1-3-1` `L-3-4-1` `L-5-1-1` `L-8-3-1` `L-11-3-1` `L-17-2-1` `L-19-1-1` `L-21-1-1` `L-22-3-1` |
| `topicKey`s | **63** distinct over **217** nodes (207 cz + 9 lehninger + 1 entity), counted from the app data 2026-08-07. **Exactly 9 keys join more than one source**, which is the whole point of `pro`: `amino-acid-derived-molecules` `amino-acids` `bioenergetics-basics` `fatty-acid-biosynthesis` `fatty-acid-oxidation` `membrane-transport` `oxygen-binding-proteins` `protein-primary-structure` `respiratory-chain`. `nucleic-acid-chemistry` is deliberately **not** among them — `L-8-3-1` is Lehninger-only |
| Entity cards | 1 (`E-tryptophan`). The headline feature, still barely started — archive §4, §12 |
| UI | Done. Two books render, sidebar **By book / By topic** toggle, "Same topic" strip, `lehNotes` blocks. Nothing more needs building |
| Live site | https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

**The remaining work is content, not plumbing.**

### Next pick: rank 20, §25.1 DNA Replication

`lehninger_index/depth_queue.tsv` ranks Lehninger sections by how much more Lehninger says than
the Czech book. Top 20, with the 9 done ones struck through:

~~1 §5.1~~ · ~~2 §8.3~~ · 3 §6.4 · ~~4 §11.3~~ · ~~5 §21.1~~ · ~~6 §19.1~~ · 7 §23.2 ·
8 §16.2 · ~~9 §17.2~~ · 10 §19.2 · 11 §11.2 · ~~12 §1.3~~ · 13 §2.2 · ~~14 §3.4~~ · 15 §8.2 ·
16 §26.2 · ~~17 §22.3~~ · 18 §3.3 · 19 §23.3 · 20 §25.1

**Rank 20 (§25.1 DNA Replication) is the recommended next node**: its `topicKey`
(`dna-replication`) already exists and already holds 2 waiting Czech nodes, so it joins the topic
view with no data surgery; it carries no organic-chemistry hazard; and it continues straight on
from the nucleic-acid ground `L-8-3-1` just covered. Rank 7 (§23.2) and rank 18 (§3.3) are the
only other ready-to-write primaries.

Every other rank above needs a `topicKey` decision first — see the two failure modes below.

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

   **⚠️ `step4_topickeys.py` regenerates these files from `master_map.tsv` and would silently
   revert every hand edit.** That is what the `manual_note` fields are defending against.
3. **Read the whole Lehninger section in B**, every subheading plus any Box, end to end.
4. **Write the node** in `biochemie_pro/data/leh_chN.js`, following `L-5-1-1` in `leh_ch5.js` as
   the template (archive §13j explains its choices). State plainly in `coverageNote` **what the
   Czech node already has**, so nothing is presented as new when it is not.
5. **Add `lehNotes` on the Czech side** only where revising from the Czech node alone would
   *mislead in an exam* — `conflict`, `gap` or `cz-stronger`. Six exist. **Keep them rare**; a
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
3. **Are the six `lehNotes` right in tone and length?** They are the template for every later one
   and the user has not seen them rendered.

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
| 9f | `lehNotes` — the format, the bar, the six that exist |
| 12 | the tryptophan entity card — a finished dossier, nothing written yet |
| 13–13j | one section per Lehninger node written. `13j` (`L-5-1-1`) is the best template |
| 14 | working locally: what is local-only, how to run and check with no `node` |
| 15, 16, 16c | figures; **citation verification**; caption-vs-cross-reference ambiguity |
