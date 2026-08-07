# Handoff — the Lehninger phase

> # ⛔ STOP — do not read this file top to bottom.
>
> **It is 145 KB ≈ 36k tokens.** Reading it whole burns a session's context before any work
> happens, and that has now cost two sessions. **Read [`LEHNINGER_START.md`](LEHNINGER_START.md)
> instead** — it is ~10 KB, holds the current state and the next action, and ends with a grep index
> for this file.
>
> **This file is the archive**, not the entry point. It is worth keeping in full: it records
> measured quantities that are expensive to re-derive (the ligature bug, the A-page offset, what
> Lehninger provably does and does not contain, every ruling the user has given, and the mistakes
> already made). Grep it by section heading, read that section, move on.

## ⚡ Start here (60 seconds)

**The project.** A biochemistry oral-exam trainer for a Czech state exam. A finished app covers
the Czech textbook (207 nodes, chapters 1–10, complete). The next phase brings in Lehninger 8.

**Where to work.** `biochemie_pro/`. Never touch `biochemie_basic/` — that is the frozen
revision tool the user studies from every day.

**The five things that matter most, in order:**

1. **Lehninger 8 is the exam's assigned study material**, not a reference book. The Czech book
   is the course textbook. Do not invert this — an earlier draft of this file did. (§3)
2. **Scope comes from the Czech book, depth from Lehninger, and the Chinese notes are demoted
   to a comprehension aid.** Calibrating to the Chinese notes would skip photosynthesis, which
   a classmate was actually examined on. (§3)
3. **Do not port Lehninger into nodes page by page.** That is ~680 nodes and produces a worse
   artefact than the book. Work topic-first. (§4)
4. **`pro`'s headline feature is the integration card** — one entity (e.g. tryptophan), all its
   properties gathered from wherever they are scattered. (§4)
5. **No orbitals, no resonance structures.** Every chemical idea must land on something the
   reader can see or measure at a bench. The user has almost no organic chemistry — and has
   since said the Czech course leans *harder* on organic chemistry than they can follow:
   *"捷克这边比较注重生物化学里有机化学的内容，而我几乎对这块一窍不通."* §5a measures where that
   load actually sits (chapters 7 and 8, plus §2.1.3) and names the two sections where
   Lehninger offers no help at all. (§5, §5a)

**Where the work stands.** **§9 steps 1–5 are all done.** The Lehninger index, the A↔B page map
and the master table are in `lehninger_index/` (read its `README.md`); all 207 nodes now carry
`book` and `topicKey` (§9c); the validator understands two books (§9d). §8's three open
decisions were answered on 2026-08-06, two of them overturning assumptions this file used to
make, and the scope of the Lehninger-only material was ruled the same day (§9b).

**§9 step 6 is under way — ten Lehninger nodes now exist.** `L-25-1-1` in
`biochemie_pro/data/leh_ch25.js` (§13l, added 2026-08-07) covers §25.1 DNA replication and joins
Czech `4-1-3-1` and `4-1-3-2` through the pre-existing `topicKey: "dna-replication"` — the first
node whose §9e check passed with **no data change of any kind**, and the first into the
molecular-biology half of the book. **Read §13l before writing the next node:** this section's
`interpolated` A page range was wrong at its start by a whole page, and ten of 54 candidate
quotes turned out to be on a different A page than B's layout implied, which together make the
rule *never scale a B page into an A page — search A*. `L-8-3-1` in
`biochemie_pro/data/leh_ch8.js` (§13k, completed 2026-08-07) covers nucleic acid chemistry with no Czech partner node; it joins the new topicKey `nucleic-acid-chemistry` treating Lehninger §8.3 as full-scope depth material (like the §9b listings). `L-3-4-1` in
`biochemie_pro/data/leh_ch3.js` (§13) joins Czech node `2-2-1` through
`topicKey: "protein-primary-structure"` — the Czech book says *why* an amino acid sequence
matters, Lehninger §3.4 says *how* one is determined. `L-11-3-1` in
`biochemie_pro/data/leh_ch11.js` (§13d) joins all three `8-5-3-*` Czech nodes through
`topicKey: "membrane-transport"` — rank 4 of `depth_queue.tsv`. **`L-19-1-1` in
`biochemie_pro/data/leh_ch19.js` (§13e, added 2026-08-06) joins all five `6-2-4-*` Czech
nodes** through `topicKey: "respiratory-chain"` — rank 6, and the largest join yet (5 Czech
nodes at once). Unlike the other two topics, 6.2.4 was already a *deep* Czech section (it names
Complexes I–V and the Q cycle), so this node's whole approach was different: find what a
well-developed Czech account still leaves unnamed (the evidence for the carrier order, the
inhibitor/uncoupler pharmacology, respirasomes, ROS) rather than re-deriving mechanisms already
covered well. **`L-1-3-1` in `biochemie_pro/data/leh_ch1.js` (§13f, added 2026-08-06) joins
Czech nodes `1-4` and `1-5`** through `topicKey: "bioenergetics-basics"` — rank 12, and the
first node where **Lehninger is the weaker source on the topic's own theory**: the Czech book
gives the fuller thermodynamics (G = U + pV − TS, chemical potential, activity, local
equilibrium) and what it lacks is *numbers*. §13f explains how that changed the selection rule,
and records two tooling problems it exposed — a **wrong anchor** and a **silently
under-reporting `verify_citations.py`**, now fixed. **`L-21-1-1` in
`biochemie_pro/data/leh_ch21.js` (§13g) joins all nine `8-3-*` Czech nodes** through
`topicKey: "fatty-acid-biosynthesis"` — rank 5, the highest ratio in the writable set, and
**the §5a organic-chemistry topic, which turned out to be writable**; §13g records the method
that made it work and is worth reading before attempting rank 9. **`L-5-1-1` in
`biochemie_pro/data/leh_ch5.js` (§13j, added 2026-08-07) joins Czech node `6-3-1`** through a
**new** `topicKey: "oxygen-binding-proteins"` — rank 1 of the entire depth queue, ratio 17, the
thinnest place in the whole book, and unwritable until this session because §9c's own rule gave
it no key at all (Czech 6.3's primary Lehninger mapping is 22.3, not 5.1). Resolved the way §9e
resolved β-oxidation: the user chose to move the data. `6-3-1` — the one row of Table 6.4 that
is haemoglobin — moved out of `amino-acid-derived-molecules` into the new key; `L-22-3-1`'s
`coverageNote` (§13i) is updated to match. §13j also adds the session's one `lehNotes` entry, on
Czech `7-8-3`, a `gap`: that node names 2,3-bisphosphoglycerate 31 times as glycolysis's
phosphoglycerate-mutase cofactor and never once as haemoglobin's regulator.

> **⛔ Before writing a second node, read §13b.** `app.js` **never reads `book` or `topicKey`**
> — it filters on `chapter` alone against a hardcoded 1–10 map of *Czech* chapter names. So
> `L-3-4-1` currently renders under "Ch. 3 — **Enzymes**", and any node with `chapter > 10`
> (§22.2, §24–25, ch9 — everything `full`-scope in §9b) **would not render at all**. There is
> also no topic view, so the two-books-side-by-side feature `pro` exists for (§4) does not yet
> exist in the UI. **This — not the entity-card schema — is what has actually been blocking
> the integration.** §12a filed it as an entity-card problem; it applies to every Lehninger node.
>
> **✅ Fixed 2026-08-06 (commit `8b4a064`).** `app.js` now keys on `book + chapter`, derives the
> chapter list from the data instead of a literal `[1..10]`, and shows a book separator in the
> sidebar plus a book pill in the study pane. `L-3-4-1` files under *Lehninger 8 / Ch. 3* and a
> `chapter > 10` node renders. Both new UI elements are suppressed when only one book has nodes,
> so `biochemie_basic` is visually unchanged.
>
> **✅ Also done 2026-08-06 (commit `37ec106`): the entity-card schema and the first card.**
> `E-tryptophan` is written and live, the validator has a separate required-field list for
> `kind: "entity"`, and `app.js` renders cards in their own sidebar group. See §12.
>
> **✅ And the topic view landed 2026-08-06 (commit `f115a96`).** Two surfaces: a sidebar
> **By book / By topic** toggle, and a **"Same topic"** strip at the top of the study pane that
> links a Czech section to the Lehninger node going deeper on the same thing and to any
> integration card gathering it. Verified against the data: of 61 keys, exactly two currently
> join more than one source — `amino-acids` (Czech `2-1-1`/`2-1-2`/`2-1-3` + the tryptophan
> card) and `protein-primary-structure` (Czech `2-2-1` + Lehninger `L-3-4-1`). **Everything
> §13b listed is now done.**
>
> **Updated 2026-08-06: eight joins now, not two.** `L-11-3-1` (§13d) joins `membrane-transport`
> to all three `8-5-3-*` Czech nodes, `L-19-1-1` (§13e) joins `respiratory-chain` to all
> five `6-2-4-*` Czech nodes, `L-1-3-1` (§13f) joins `bioenergetics-basics` to both `1-4` and
> `1-5`, and `L-21-1-1` (§13g) joins `fatty-acid-biosynthesis` to all **nine** `8-3-*` Czech
> nodes — the largest join yet, though §13g explains why only four of those nine are genuinely
> deepened, and why that gap is worth knowing before reading the topic view as a coverage claim.
> Together these are a much stronger topic-view demonstration than the earlier
> single-Czech-node joins.
>
> **One thing that was NOT plumbing got built on 2026-08-06: `lehNotes` (§9f)**, after the user
> asked whether anything was being added to the *Czech* book. Nothing was, by design — but the
> warnings about where the Czech book is wrong, incomplete or simply different were all sitting
> in Lehninger nodes the reader might never open, and the exam is on the Czech book. Czech nodes
> can now carry a rare, colour-coded pointer at the Lehninger correction. Six exist, on five
> nodes, after §13j added the BPG gap note.
>
> **Updated 2026-08-07: the topicKey-naming question §9c raised and never resolved is resolved.**
> The user answered both open questions from the "what to ask" list at once (§2b: revises from
> **both** layers, Czech primary; the topicKey question: **re-key per the §9e precedent**, not
> reuse or rename). That immediately unblocked rank 1 — see `L-5-1-1` above — and the same fix
> now applies mechanically to the other nine secondaries §9c listed; §9c's table is updated.
>
> **What is left is content, not plumbing.** Now 63 `topicKey`s exist (two more than before —
> `oxygen-binding-proteins` and `nucleic-acid-chemistry`) and **exactly 9** of them join more than
> one source — counted from the app data 2026-08-07, not inferred: `amino-acid-derived-molecules`
> `amino-acids` `bioenergetics-basics` `fatty-acid-biosynthesis` `fatty-acid-oxidation`
> `membrane-transport` `oxygen-binding-proteins` `protein-primary-structure` `respiratory-chain`.
> **Adding a Lehninger node does not automatically add a join**: `nucleic-acid-chemistry` is the
> counter-example, deliberately joining one source only (§13k), so the join count did NOT rise with
> the ninth node. Every further node makes the topic view worth more; nothing more needs building
> first. §9a's depth queue (61 writable primaries — 63 now that ranks 1 and 2 have their own keys — 9 done,
> 54 to go — see §9c's table) and §9b's `full`-scope list are the work. §15 (figures) is the
> other open thread. **§2c below is now also worth reading**: while scoping `L-5-1-1` a
> pre-existing data error surfaced in `2-2-6` that §6a flagged in a prior session and nobody has
> fixed yet — see §2c.

**⚠️ Before writing or reusing any `A p.N` citation, read §16.** Three of six citations in the
first integration card were wrong — the quotes were right, the page numbers were not, one by 21
pages. `python lehninger_index/scripts/verify_citations.py` checks them; run it after writing
any node.

**Updated 2026-08-06 (`a0a825c`): that checker was itself only reading half the data** — the
`src` field of entity cards, never the inline prose where a section node writes its citations.
So all six of `L-3-4-1`'s were skipped while the report said `OK 6 | ELSEWHERE 0`. Fixed; the
audit now covers 20 citations, and L-3-4-1's six all verify. **§16c also re-measured the two
things §15 was waiting on and both are sound**: the `−36` offset is constant, and 688 of 713
anchors land exactly. **So the figure work in §15 is no longer blocked on citation trust** —
what it still needs is caption-vs-cross-reference disambiguation (§16c), not a new page map.

**Working locally — read §14 before assuming the remote is the source of truth.** Since the
2026-08-06 scan-exposure fix the working copy and the remote deliberately hold different things:
~500 MB of textbook page scans are local-only *by design*. §14a is the table of what lives
where, §14b runs the apps, §14c checks the data with no `node` on this machine, §14d looks
things up in Lehninger without opening a 1.1 GB PDF.

**What to ask the user before writing content**, in priority order:

1. ~~**The six regulation sections in §9b left un-ruled**~~ → **already answered, 2026-08-06.**
   This item was stale: §9b's own text records the ruling (*merge into the corresponding topic
   and develop normally* — §14.5/15.1/15.3 into glycolysis/glycogen, §19.4/19.5 into oxidative
   phosphorylation, §28.3 into transcription/operons). Nothing to ask. Read §9b, not this line.
2. **Any classmate report of a real exam question.** §3 makes these outrank everything in this
   file, and one has already overturned a plan once.
2b. ~~**⭐ Which nodes does the user actually revise from?**~~ → **answered 2026-08-07: both
   layers, Czech primary.** So effort splits two ways rather than picking one: hardening the
   Czech layer (2c) and more `lehNotes` (§9f) matter because that is the primary revision
   surface, but continuing down §9c's depth queue also matters because the Lehninger nodes are
   genuinely read too. Neither track is now "the wrong one to work on."
2c. **Has the Czech layer ever been audited? Still open — and now has a first concrete finding.**
   The 207 Czech nodes were written in an earlier phase and **nobody has checked them since**;
   this phase has only read a dozen or so of them while writing depth nodes. The exam is on that
   book (§3), and 2b just confirmed it is the *primary* revision surface, which raises this
   question's priority rather than lowering it. Three sub-questions remain open: is the coverage
   actually complete, are there enough quiz/oral items to practise from, and should the many
   `cnNote: status: "pending"` entries be mapped to the Chinese notes? **One concrete instance
   surfaced 2026-08-07 while scoping `L-5-1-1`, unrelated to that node's own content**: §6a
   (written in an earlier session) already flagged that node `2-2-6`'s `cnNote` wrongly points
   at Chinese-notes topic 七 (pp.37–40, myoglobin/haemoglobin/sickle cell — which is what
   `L-5-1-1` deepens) when `2-2-6`'s actual subject, protein properties (Sephadex, SDS-PAGE,
   Svedberg units), belongs to topic 八 (pp.41–45). §6a said this would be fixed "during §9 step
   4, which touches all 207 nodes anyway" — step 4 (adding `book`/`topicKey`) came and went and
   the fix was never made; `2-2-6` still says topic 七 and topic 八 never appears anywhere in
   the data. Left unfixed here because it needs the notes' own p.41 heading, which this session
   did not open — flagging it is not the same as guessing it. If the Czech layer has one
   unaudited error like this sitting in the open, that is itself an argument for auditing it.
2d. **Are §9f's five `lehNotes` right in tone and length?** They are the template for every
   later one, and the user has not seen them rendered yet. Worth confirming before writing more.
2e. **⚠️ Rank 2 (§8.3 Nucleic Acid Chemistry, ratio 16) differs from rank 1 — no §9e fix available.**
   Rank 1's problem: Czech node `6-3-1` existed but was mapped as secondary (22.3, not 5.1). Solution:
   create new key `oxygen-binding-proteins`, move the node, write `L-5-1-1`. Rank 2's problem: Czech
   material is **absent**. `§9e's two-minute check (sweep2.py, 2026-08-07)` found: **methylation of
   DNA** — NO CZECH NODE; **chemical synthesis** — NO CZECH NODE; **PCR** — NO CZECH NODE;
   **sequencing** — 6 false positives (hormone structure, amino acids, photosynthesis, etc.), zero
   genuine coverage. The section's core content (DNA denaturation, nonenzymatic damage, synthesis,
   PCR, sequencing methodology) does not exist in the Czech book. The only meaningful match is
   `4-1-2` (nucleic acid structure), which teaches double helix / complementarity, not §8.3's
   chemistry-of-change territory. **→ ANSWERED by the user 2026-08-07: write `L-8-3-1` as
   Lehninger-only content**, accepting that it has no Czech depth partner. So §8.3 is treated like
   §9b's `full`-scope sections rather than like a depth node: a **new key
   `nucleic-acid-chemistry`** was added to `topickey_assignment.json` under `"8|8.3"` with
   `nodes: []` and a `manual_note` (no Czech node exists to move, so unlike §9e's precedent nothing
   was moved and `topickey_by_node.json` is unchanged). **`L-8-3-1` was then written the same day**
   in `biochemie_pro/data/leh_ch8.js` and wired into `index.html`, covering A pp.278–293 =
   B pp.1078–1122: denaturation and melting, nonenzymatic transformations (deamination,
   depurination, UV photoproducts, oxidative damage), base methylation, automated chemical
   synthesis, PCR, and sequencing (Sanger through next-gen). **✅ Completed 2026-08-07:** all
   citations verified by `step5_check.py`, file validates, `model_en` answer for oral question
   written and integrated, checklist all 15 items, all three checklist systems (points + terms +
   quiz + oral) complete and verified. The general lesson this rank adds to §9c's "third case":** a secondary mapping can
   fail in two different ways — rank 1's way, where the Czech node exists and teaches the subject
   but lost the key to a competing primary (fix: move it, §9e), and rank 2's way, where the Czech
   node holding the mapping does not teach the subject at all and no other node does either (fix:
   there is nothing to join, so write it Lehninger-only). Run the §9e sweep to tell them apart
   before assuming the re-key applies.
3. ~~Which topic to start with~~ → answered 2026-08-06: the first integration card, on
   tryptophan. **Superseded the same day, by the user: *"先尝试最简单的一个小节"* — start with
   the simplest ordinary section instead.** That is why §13's `L-3-4-1` is a depth node and not
   the entity card. The tryptophan card is not cancelled, only re-ordered: it needs both the
   §12a schema decision *and* the §13b UI work first, and §12 remains the finished dossier for
   it — every fact located, with the A page to open, nothing written yet.

---

Written 2026-08-06. Companion to `HANDOFF.md` (which covers the Czech-textbook app itself).
Read `HANDOFF.md` §0 and §11 first, then this.

This file is committed rather than passed as chat context because this project already lost a
handoff once by doing the latter — see `HANDOFF.md` §5. Keep it current.

**This is the second version.** The first was written on a premise the user corrected: it
treated Lehninger as a scope-defining syllabus and the Czech book as the exam's basis. That is
backwards. §3 and §6 have been rewritten; if you are working from a cached copy that says
"Lehninger 8 is scope, not content", discard it.

---

## 0. Current state — the site is live and current; the open problem is exposure, not deploys

`main` = `a0a825c` (2026-08-06), pushed. Working tree is clean apart from the untracked
`extracted_*/` and `verify_crops/` evidence folders — **which are no longer harmless; see the
exposure section below** — plus `extract_chapters.py`, `ocr_full_chapters.py` and `ocr_run.log`,
three leftovers from the original Czech OCR extraction that have never been tracked and are
unrelated to the Lehninger work.

| | |
|---|---|
| stable revision site (chapters 1–10, 207 nodes) | https://sumuxie.github.io/bio-state-exam/ → redirects to `biochemie_basic/` |
| local, same content | `file:///C:/Users/Admin/Downloads/bio-state-exam/biochemie_basic/index.html` |
| **where you work** | `biochemie_pro/` — https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

### The deploy is slow, not broken — the red ✗ is a reporting timeout

Measured 2026-08-06 14:37 UTC. The live site now matches `HEAD`:

| probe | result | means |
|---|---|---|
| live `biochemie_pro/data/ch1.js`, `topicKey` count | **6** | matches local HEAD exactly |
| `https://sumuxie.github.io/bio-state-exam/HANDOFF.md` | **404** | `_site` staging took effect |
| `lehninger_index/README.md` | 404 | correctly excluded from `_site` |

So the `_site` artifact **is** in production, carrying `book`/`topicKey`. In run `ac3c867`,
`Upload site` succeeded in 1 s and `deploy-pages@v4` then reported failure 603 s later — the
action hit its own default 10-minute timeout waiting for Pages to *confirm* a deployment that
had in fact gone through. The HEAD run for `3ac38e6` has likewise been queued/in-progress for
10+ minutes. `validate` has passed on every run; the data is not the problem.

**Raising the `timeout` input on `deploy-pages@v4` is now the indicated fix** (~20 min). An
earlier version of this section rejected that as "treating a symptom the evidence does not
support" — that was written before the live-site probes above, which show the deploy
completing. Until it is raised, the red ✗ is noise and masks any real failure.

Dead hypotheses — do not re-test:

- *"Pages is serving the branch, not the artifact."* No. It serves the artifact, confirmed by
  the 404/200 probes above.
- *"The `github-pages` environment has a wait timer or a required reviewer."* No. Its only
  protection rule is a `branch_policy`, which the deploy satisfies.

What the `_site` change was for: the deploy job used to upload the repository root, shipping
~117 MB of page scans to serve a 9 MB site. It now stages only `index.html` and the three app
directories. `actions/checkout@v4` still pulls the full repo before staging, so if slowness
ever turns out to be checkout-related, `sparse-checkout` on the deploy job is the lever.

### ⚠️ The page scans were publicly downloadable — front of HEAD is fixed 2026-08-06, history is not

`sumuxie/bio-state-exam` is a **public** repo, and `extracted_raw/` was committed before
`.gitignore` was written. **`.gitignore` has no effect on already-tracked files**, so the rule
`extracted_raw/*.png` never applied to them:

- **84 full-page textbook scans plus one file of verbatim OCR'd Czech text (`ch1_3_summary.txt`,
  72 KB, chapters 1–3) were tracked and served publicly**, e.g.
  `raw.githubusercontent.com/sumuxie/bio-state-exam/main/extracted_raw/page_10.png` → HTTP 200,
  1.2 MB, no authentication.
- The Pages site itself never served them (that is what the earlier `_site` change fixed), but
  the **repository** did, which `_site` did not touch.

**The user was asked whether to instead make the repo private** — the simpler, more complete
fix — and confirmed they read the live site from a phone, which needs the public
`sumuxie.github.io` URL to keep working on the free plan. So the repo **stays public**, fixed by
removing the files instead. Done 2026-08-06:

1. **`git rm --cached -r extracted_raw`** — all 85 tracked files (84 pngs + the text file)
   untracked from `HEAD` going forward. Nothing was deleted locally; every file is still on disk
   for the evidence trail. Once this commit is pushed, `raw.githubusercontent.com/…/main/…`
   404s, because that URL serves the tip of the branch.
2. **`.gitignore` broadened**: `extracted_raw/*.png` → `extracted_raw/` (the whole directory,
   catching the text file too), plus `extracted_full_*/`, `extracted_toc/`, `verify_crops/` —
   the second, larger set (229 + 16 files, ~389 MB) that was untracked but matched by no rule at
   all, one `git add -A` away from the same exposure. Used a glob (`extracted_full_*/`) rather
   than one line per chapter so a future chapter's evidence folder is covered automatically.

**What this does not fix, and was not done — needs an explicit decision, not a default:** the 85
files are still readable from **history** — any commit before this one, by SHA
(`raw.githubusercontent.com/…/<old-sha>/extracted_raw/page_10.png` still 200s) or via
`git clone` followed by `git log`. Removing them from history needs `git filter-repo` (or BFG)
and a **force push**, which rewrites `main` and invalidates any existing clone. That is
destructive enough that it should not happen as a side effect of this fix — ask the user
explicitly before doing it, and expect to warn about force-pushing `main` per this project's own
git-safety rule (`HANDOFF.md` intro) when they say yes.

Outstanding content debt, unchanged: **chapter 7 has never been verified against the scans**
(42 nodes, images already in `extracted_full_ch7/`). Chapters 7 and 8 also still lack their
`extracted_raw/` evidence subsets; 9 and 10 got theirs.

---

## 1. Where the files are

```
repo / apps      C:\Users\Admin\Downloads\bio-state-exam\
                   biochemie_basic\   frozen, do not modify
                   biochemie_pro\     all work happens here
                   tools\validate-data.js
Czech textbook   C:\Users\Admin\Downloads\bio-state-exam\Biochemie.pdf   (gitignored)
Chinese notes    C:\Users\Admin\Downloads\bio-state-exam\生物化学笔记.pdf (+ _分卷\)
Lehninger        C:\Users\Admin\Downloads\lehninger书\
```

| ref | filename | size / pages |
|---|---|---|
| **A** | `LehningerPrinciplesofBiochemistry8th(DavidL.Nelson,MichaelCox) (1).pdf` | 1135 MB / **1252 p** |
| **B** | `LehningerPrinciplesofBiochemistry8thedDavidLNel.pdf` | 52 MB / 4893 p |
| **C** | `Lehninger生物化学原理（第3版）(DavidL.NelsonMichaelM.Cox).pdf` | 138 MB / 1080 p |

---

## 2. Measured facts about the three PDFs — do not re-derive

| | A (1252 p) | B (4893 p) | C (1080 p) |
|---|---|---|---|
| page size | 8.5×11 in, **real print layout** | A4, reflowed ebook | A4 |
| text layer | ✅ median 4555 chars/page | ✅ median 1020, clean digital text | ❌ **none, median 0** |
| figures | ✅ 1252 full-page images | ❌ only 2 usable; median image 43×28 px | ✅ 1080 scans |
| outline | 29 entries (chapters only) | ✅ **879 entries, three levels** | ❌ 0 |
| total text | — | **5,803,906 chars ≈ 967k words** | — |

**(a) "4893 pages" is an artefact.** B is a reflowed ebook at ~170 words/page. The book is
~1250 pages (A confirms). Do not let that number frighten anyone; it did real damage once.

**(b) A and B bridge automatically** — both have text layers, so the same string locates a
position in each. Verified: `FIGURE 19-16` → **A p.708, B p.2401**. Read in A, extract from B.

**(c) C is the 3rd edition (2000), not the 4th**, and has no text layer. The user has decided
not to use it — *"我不想看中文那本了因为太旧了"*. Treat it as out of play.

---

## 3. The premise, corrected — read this before deciding anything

The user's own words: **"捷克语这本是他们的教材，但是考试他们叫我复习这本厚的英文的"**. So:

- **Czech `Biochemie`** — the department's course textbook. Already fully in the app (207 nodes,
  chapters 1–10, book pages 8–228, no gaps).
- **Lehninger 8** — what the student was told to review **for the exam**. Not a reference,
  not a syllabus. Actual exam preparation material.
- **Chinese handwritten notes** — see below; demoted.

### The depth ruler, and why the obvious ruler is wrong

The user proposed calibrating depth to the Chinese notes: *"详尽程度按中文的笔记定就行"*. The
instinct — that a ceiling is needed or the volume is unbounded — is right. The ruler is wrong,
and the user supplied the disproof in the same message:

> *"中文笔记虽然有光合作用部分，但是中国是不考的，但是我在捷克也参加国考的同学被考了光合作用"*

The Chinese notes encode **Chinese** curriculum priorities. A classmate sitting the same Czech
state exam **was asked about photosynthesis**. Calibrating to the notes would have skipped
chapter 9 — a chapter that was just built and that the exam demonstrably asks about. The same
pattern appears with bioenergetics: thin in the notes, detailed in the Czech book.

**Use this division instead:**

| source | job |
|---|---|
| **Czech book** | sets **scope** — it is what the department teaches, so it encodes what the department thinks matters |
| **Lehninger 8** | sets **depth** — go deeper wherever the Czech book is thin, dated, or merely asserts something |
| Chinese notes | **comprehension aid only**, plus the 27-topic oral list. Never scope, never depth |
| **classmate reports of real questions** | **highest priority of all** — a remembered real question outranks any inference here |

Actively collect more classmate intel. It costs nothing and outranks everything in this file.

---

## 4. What `biochemie_pro` is actually for

Not "Lehninger ported into nodes." At ~1 node per page the Czech book took 207 nodes for 228
pages; the same density over Lehninger's in-scope ~750 pages would be ~680 nodes, several times
everything built so far, and the result would be a second textbook rendered as flashcards —
less useful than the textbook. Do not do that.

Three things go into `pro`, roughly in this order:

**(1) `topicKey` on the existing 207 nodes.** Pure annotation, no new content. Afterwards you
have a table of which exam topics already have Czech-level coverage — which is what tells you
where work is actually needed. This requires reading nothing.

**(2) Depth nodes where the Czech book is thin.** Written **topic-first, never page-first**.
Decide the depth a topic needs, then take the two or three Lehninger sections that supply it.
Because a Lehninger section carries several Czech pages' worth, in-scope material lands around
**150–200 nodes**, not 680. Gaps are expected and correct — the user's own observation that the
book contains *"很多没必要的内容"* is accurate and skipping it is the job.

**(3) Integration cards — this is `pro`'s headline feature, not a side dish.**

The user's request, worth quoting because it is the clearest statement of what is missing:

> *"比如后面讲到氨基酸的什么性质，就可以查看这个氨基酸的所有性质，应用，结构，一种整合整体性的学习"*

Textbooks are organised by chapter; a chemical entity's properties are therefore scattered
across many of them. An **integration card** inverts that: one entity, everything about it,
gathered. For tryptophan: structure → why it counts as aromatic → therefore absorbs at 280 nm →
therefore you can measure protein concentration → also flat and nonpolar → therefore buried in
the hydrophobic core → therefore enriched at membrane-protein interfaces.

This is precisely where Lehninger is irreplaceable: it **has** all of this, spread across
ch3, ch4, ch8 and beyond, and gathering it is expensive by hand. The Czech book is far too
short to supply it.

Candidate entities: the 20 amino acids; the nucleotide bases; techniques (A280/Nanodrop,
electrophoresis, chromatography); concepts (aromaticity, hydrophobicity, pKa and buffering).

---

## 5. The organic-chemistry rule — non-negotiable

The user: **"我的有机化学几乎说是没有根基… 一定不要讲完全化学，我听不懂的。"**

> **Every chemical concept must land on an observable consequence, or it does not get written.**

No orbitals, no resonance structures, no electron-density arguments. The test: can the reader
see, measure, or meet the consequence at a bench?

| ✗ never | ✓ instead |
|---|---|
| aromaticity = a delocalised π system satisfying 4n+2 | a benzene ring is **flat** and its electrons are smeared over the whole ring. Three consequences: it absorbs UV (so 280 nm measures protein), it is flat (so it slides between DNA bases), it carries no charge (so it avoids water and hides inside the protein) |
| the cis–trans isomerisation energetics of the prolyl peptide bond | proline's side chain loops back onto its own backbone and **locks** it, so a chain cannot run straight through — which is why proline turns up at corners |

### 5a. Where the organic chemistry actually is — measured 2026-08-06

The user, on why this rule exists at all: **"捷克这边比较注重生物化学里有机化学的内容，而我几乎
对这块一窍不通."** That is a statement about the *source*, not just a personal preference, and it
is checkable. Counting organic-chemistry vocabulary per 1000 words of each Czech section's own
text (`lehninger_index/cz_organic_load.json`, keyword proxy — treat as a map, not a verdict):

| per 1k | Czech § | what it is |
|---|---|---|
| 130 | 7.1.1 | Aldoses, ketoses |
| 103 | 7.6.1 | Epimerization and isomerization |
| **96** | **2.1.3** | **Chemical reactions of amino acids** |
| 91 | 7.2.1 | Sugar esters |
| 86 | 7.2.6 | Glycosides |
| 81 | 7.1.2 | Deriving aldoses and ketoses |
| 76 | 8.4.1 | Simple lipids |
| 69 | 7.1.3 | Hemiacetal/hemiketal forms, anomers, Haworth |

**The load is not spread evenly — it is concentrated in chapter 7 (sugars) and chapter 8
(lipids), plus §2.1.3.** That is where §5's rule does the most work, and where writing content
without it will simply fail to land.

**The two hardest are the two Lehninger cannot fully rescue — but the Chinese notes can.**
§6 records that `ninhydrin` and `colloid` are genuinely absent from Lehninger 8 even after a
search bug was fixed (§6, read that fix note first — an earlier version of this claim
over-reached). So §2.1.3 and §2.2.6 are the user's weakest ground *and* thinly supported by the
designated depth source. They are **not** unsupported overall: the handwritten Chinese notes
were read on 2026-08-06 (§6a) and cover both, in places more fully than the Czech book does.

**This is the one narrow, principled exception to §3's "notes are never depth."** §3 demotes
the notes because their *scope* encodes Chinese curriculum priorities — that argument is about
which topics exist, and it still stands. It says nothing about a topic the Czech book already
puts in scope and Lehninger simply does not treat. For those, the notes are the only depth
source in the building. Use them there, cite the note page, and do not generalise the exception
past the sections §6a names.

The sugar-stereochemistry block is a different case: Lehninger §7.1 does cover Fischer
projections, Haworth forms, anomers and mutarotation, but the Czech book spends **more** pages
on it than Lehninger does (depth ratio 0.6, the lowest in the whole queue). So for chapter 7,
Lehninger is a *clarifier*, not a source of additional depth.

---

## 6. What Lehninger does and does not contain — measured, not remembered

Searched in B on 2026-08-06. Present, and far beyond the Czech book:

| topic | hits | where |
|---|---|---|
| Ramachandran | 10 pages | ch4, section *Common Secondary Structures Have Characteristic Dihedral Angles* |
| φ/ψ angles | 2 pages | *The Peptide Bond Is Rigid and Planar* |
| aromatic | 36 pages | from *Amino Acids Can Be Classified by R Group* |
| Trp/Tyr absorbance at 280 nm | 2 pages | same amino-acid section |
| nucleic acid 260 nm | 4 pages | nucleotide properties; DNA denaturation |
| hydrophobic core / interior | 13 pages | ch4 folding sections |
| proline in β turns, **with the reason** | found | B p.506 — *"peptide bonds involving the imino nitrogen of proline readily assume the cis configuration… particularly amenable to a tight turn"* |

**A search bug corrupted this table earlier today — corrected 2026-08-06, read this before
trusting any "0 hits" claim from a session before this one.** B's text layer renders `ff`,
`fi`, `fl`, `ffi`, `ffl` as single Unicode ligature glyphs (U+FB00–FB04) on **66 % of its 4893
pages** — the text literally reads "coeﬀicient", not "coefficient". A plain substring search
silently fails on every affected page, no error, just a false "not found". This was caught
while reading B p.370 for the tryptophan card: **Box 3-1, titled "METHODS: Absorption of Light
by Molecules: The Lambert-Beer Law," sits four sentences after the Trp-280 nm passage** —
directly contradicting what this table said an hour earlier. `locate.py` now de-ligatures
before every search (self-heals the existing pickle cache too), but anything computed by an
earlier run — including `master_map.tsv`'s auto-matcher cross-check — used the buggy version.
Measured impact: of the 895 glossary terms used to build `master_map.tsv`'s cross-check, 36
(4 %) contain a ligature-risk substring and 14 actually changed count after the fix — most are
undercounts (e.g. `induced fit` 5→23 hits), not zero-flips, so the 65 % agreement figure is
approximately right but not exact; do not quote it to more precision than that. Full detail in
`lehninger_index/_ligature_impact.txt`.

**The same bug had a second half, missed the first time and fixed 2026-08-06 while reading
§3.4.** The `ft` ligature is **not** in the U+FB00–FB04 block, so the fix above never touched
it. B renders `ft` as **U+00D7 × ** or **U+019E ƞ**: the text reads `o×en`, `a×er`, `le×`,
`shiƞ`. **1260 occurrences on 927 pages — 19 % of the book.** Unlike the first half, this one
produces **true zero-flips**, measured before → after:

| term | was | is | | term | was | is |
|---|---|---|---|---|---|---|
| `lipid raft` | **0** | 8 | | `often` | 3 | 369 |
| `cleft` | **0** | 16 | | `after` | 6 | 362 |
| `frameshift` | **0** | 9 | | `shift` | 2 | 63 |

`lipid raft` reading as absent was not harmless — it is one of the models the Chinese notes
teach (§6a, 脂筏模型), and this book looked like it never mentioned it.

A blind replace would corrupt real arithmetic (`1.9926 × 10−23 g` is a genuine multiplication
sign). Requiring a **letter immediately before** separates them cleanly: across all 4893 pages,
letter-`×` is followed by a digit **exactly 0 times**. `locate.py` now does this, and because
`_delig` is re-applied on cache load, existing `_B_text.pkl` caches self-heal.

**Re-checked after this second fix, and they survive:** `ninhydrin` **0**, `colloid` **0**,
`tryptophan fluorescence` **0**. So §5a, §6a and §12d's absence claims still stand. Any *other*
"0 hits" result computed before 2026-08-06 that involves a word containing `ft` is still
unverified — `reverify_absences.py` was run against the incomplete fix.

**What is actually present, corrected:**

| term | now | where |
|---|---|---|
| `Lambert-Beer law` (the book's own word order — not "Beer-Lambert") | **present**, Box 3-1 | B p.369–370 = **A p.75–76, still inside §3.1 Amino Acids**, right after the Trp 280 nm passage |
| `molar extinction coefficient` | **present**, 5 pages | defined in the same box: *"ε is the molar extinction coefficient (in units of liters per mole-centimeter)"* |
| `Merrifield` | **present**, 4 pages | **A p.91–100, §3.4** — solid-phase peptide synthesis, not amino-acid protecting-group chemistry |
| `sedimentation coefficient` | **present**, but only for ribosomes | **A p.1006–1040, §27.2** — bacterial ribosome 30S/50S/70S, not a method for protein Mr |

**So the earlier claim was simply wrong: Lehninger *does* close the A→concentration loop, in a
boxed methods section right where the Trp/Tyr 280 nm passage is.** The tryptophan integration
card (§12) uses it. §6a's "Lehninger cannot rescue these" framing needs one correction and one
nuance, not a retraction:

- **§2.1.3's ninhydrin/protecting-group chemistry is still unsupported** — `ninhydrin` remains
  a genuine **0** hits after the fix, and Merrifield's solid-phase method is a different topic
  (whole-peptide synthesis, not single-amino-acid derivatization). §2.1.3 still needs the notes.
- **§2.2.6's colloid framing is still unsupported** (`colloid` remains **0**), but its
  ultracentrifugation half is not as clean a gap as stated: Lehninger uses sedimentation
  coefficients, just for ribosome subunit sizes (27.2), not as a protein-Mr method. Worth a
  one-line aside in the content, not a claim that the concept is absent.

### 6a. What the Chinese notes actually contain — pages 1–46 READ, 2026-08-06

Two agents rendered and visually read notebook pages 1–46 (handwritten, no text layer). This
replaces guesswork for the five Czech sections whose glossary terms appear nowhere in
Lehninger, and it upgrades `HANDOFF.md` §11's "title-match only" rows for topics 一 and 四–八
to actually-read. **Verified topic → page map:**

| topic | pages | | topic | pages |
|---|---|---|---|---|
| 一 序论 | 1–4 | | 五 蛋白质的共价结构 | 23–27 |
| 二 糖类 | 5–10 | | 六 蛋白质的三维结构 | 29–35 |
| 三 脂质 | 11–16 | | 七 蛋白质结构与功能的关系 | 37–40 |
| 四 氨基酸 | 17–22 | | 八 蛋白质的分离、纯化、表征 | 41–45 |

Pages **28, 36 and 46 are blank.** The old §11 row "四–八 starts p.17" is now resolved to these
five separate ranges.

**§2.1.3 Chemical reactions of amino acids — the notes are the source, and they are better
than the Czech book.** Note pp.21–22 carry the ninhydrin reaction with its full mechanism and,
crucially for §5, its *observable*: **570 nm purple, and proline/hydroxyproline give yellow
instead.** Also DNFB/Sanger → yellow DNP-aa, PITC/Edman → PTH, the Van Slyke nitrous-acid
method (measure the N₂ evolved), and formol titration with the pKa₂ shift 9.6 → 7 drawn as a
titration curve. Side-chain colour reactions are on p.19 (坂口/Arg, Pauly/His, 米伦/Tyr,
乙醛酸/Trp). **Still missing from every source: amino-group protection by acylation, and
azides.** Those two Czech points have no support anywhere — flag them, do not invent them.

**§2.2.6 Properties of proteins — the notes cover nearly the whole section.** Note pp.41–43
(topic 八) have the colloid framing (protein particles 1–100 nm, double layer + hydration
shell), the Tyndall effect, ultracentrifugation, **the sedimentation coefficient with 1 S =
10⁻¹³ s**, and the Svedberg-type equation written as `Mr = RTS / (D(1−ρV))`. Also gel filtration
on Sephadex and SDS-PAGE. Two mismatches worth carrying into the content: the notes give the
Mr range as **6×10³–1×10⁶** where the Czech book says **10⁴–10⁶, up to 10⁷ in viruses**; and the
notes never write the name *Svedberg*, only the unit S.

**§1.6 Origin of life** — notes p.1 has it, and like Lehninger it is purely chemical evolution:
Miller 1953, the RNA world (*"RNA既是第一个基因又是第一个催化剂"*), endosymbiosis. **Neither the
notes nor Lehninger contain creationism or intelligent design.** The Czech book's framing —
three groups of explanation, one of which is supernatural intervention — is its own. Report it
as the Czech book's, do not adopt it and do not argue with it.

**§7.2.1 Sugar esters** — split sources, and they complement rather than overlap. The notes
name 成酯 → "Pi酯" and 硫酸酯 only generically on p.7 (no G6P, no PRPP anywhere in the sugar
topic), but p.9 draws the sulfated glycosaminoglycans properly — heparin with its OSO₃⁻ groups,
chondroitin/keratan sulfate, and hyaluronate flagged as the only non-sulfated one. Lehninger
supplies the phosphate-ester half instead: PRPP across 20 pages (§22.4) and glucose 6-phosphate
across 128.

**§8.5.1 Chemical composition of membranes** — **the protein:lipid ratio is absent from the
notes**, and the lipid topic has no membrane-composition heading at all; membrane facts are
scattered as "CM中含量高" annotations on individual phospholipids (pp.14–15). Lehninger §11.1 is
the source here. The notes do add p.16's 细胞膜的不对称性 (six points, glycoproteins and
glycolipids always on the outer face) and 流动镶嵌模型 / 脂筏模型.

**One error found in the existing app data:** node `2-2-6`'s `cnNote` points at topic 七
(结构与功能关系). Topic 七 is pp.37–40 and is myoglobin/haemoglobin/sickle cell. The material
that node is about is topic **八**, pp.41–45. Fix this during §9 step 4, which touches all 207
nodes anyway.

**The user has taken this off the critical path** — *"后期什么Beer–Lambert law我可以另外再整理，
这个没关系"*. Do not spend effort on it now. If such content is ever added, mark it as
not-from-the-book: `PESB/` already has a `beyondPoints` field for exactly this (see
`HANDOFF.md` §4a), distinct from this app's `gapPoints`, which means something else.

---

## 7. Schema changes needed

Additive; nothing existing breaks.

```js
{
  book: "cz" | "lehninger",     // NEW. Required on every node from here on.
  chapter: 7, section: "7.8",   // stays BOOK-LOCAL -- ch7 means different things in each book,
  pages: [163, 164],            // so these must never be compared across books
  topicKey: "glycolysis",       // NEW. The join key. Nodes about the same thing share it.
  lehNotes: [ ... ],            // NEW (2026-08-06), CZECH nodes only, optional and RARE.
                                // Points at the Lehninger node that corrects or completes
                                // this section, without importing its content. See section 9f.
  ...
}
```

`chapter` being book-local is a hard constraint — merging the numbering spaces would make
`chapter: 7` ambiguous and every chapter-scoped UI filter wrong. `topicKey` is what stitches
them together: the UI gains a topic view grouping by `topicKey` and showing both books side by
side, while the existing book view stays for linear reading.

Integration cards need their own shape — probably `kind: "entity"` with `topicKey` but no
`chapter`/`pages`, since they are not anchored to one place in either book.

### The quality metric changes, and `tools/validate-data.js` must follow — **DONE**

For the Czech book the bar was **full page coverage with no gaps**, and the validator enforced
it per chapter. For Lehninger that check is actively wrong — gaps are the intended outcome.
Left as-is, every Lehninger node would have failed CI and someone would have "fixed" it by
padding coverage, which is the opposite of the plan.

**This landed on 2026-08-06 — see §9d for exactly what the validator now does.** The schema
above is also live: all 207 nodes carry `book: "cz"` and a `topicKey` (§9c).

Still outstanding, and it is a design question rather than a code change: the replacement
metric is **topic coverage** — for each exam topic, is there a node deep enough? Nothing
measures that yet. `lehninger_index/depth_queue.tsv` ranks where depth is *owed*; it does not
check whether it has been *delivered*. Wire that up once enough Lehninger nodes exist for the
answer to be non-trivial.

---

## 8. Decisions — settled by the user 2026-08-06, do not reopen

All three were put to the user and answered. The answers are recorded here because two of
them contradict what earlier drafts of this file assumed.

**1. The skeleton is the Czech textbook's own chapter/section TOC** — *not* the 27
Chinese-notes topics, which this file previously nominated as the fallback. So the unit of
work is the Czech section: 113 of them, already carrying all 207 nodes. This is consistent
with §3 ("Czech book sets scope") and removes the awkwardness of a skeleton whose priorities
are Chinese rather than Czech. The 27-topic list keeps exactly the role §3 gives it — a
comprehension aid, reachable through each node's existing `cnNote` — and nothing else.

**2. The exam is conducted in English.** So `cz` stays what §2 of `HANDOFF.md` says it is: a
short anchor term, never a sentence, never a thing to be spoken. All production effort goes to
`model_en` and the Oral checklist. No Czech-language oral models. This retires the worry that
a large Czech-language back-fill might be owed.

**3. Depth: work the high-ratio topics, all of them.** The user chose to take on the whole
high-ratio set rather than pilot one. `lehninger_index/depth_queue.tsv` is that ranking,
computed rather than guessed — see §9a for what the number means and, importantly, what it
does not mean.

Still genuinely open, and worth asking whenever the chance arises: **more classmate reports of
real exam questions.** §3 makes these outrank everything else here, and one of them has
already overturned a plan once.

---

## 9. Concrete first steps

**Steps 1–3 are DONE (2026-08-06).** Everything they produced is in `lehninger_index/`, which
has its own `README.md` listing each file and the facts established. Read that before redoing
any of this. Steps 4–6 are the remaining work.

1. ~~Export B's 879-entry outline~~ → `lehninger_index/lehninger_toc.tsv`. **B's outline is not
   shaped the way this section assumed:** level 1 holds the three *Parts*, and chapters 2–28
   sit at level 2. Reading level 1 as "chapter" yields 11 chapters, not 28.
2. ~~Build the A↔B correspondence~~ → done, and verified: 113 of 114 numbered section headings
   land within ±3 pages of prediction, 79 % exactly. **A's printed page = A's pdf page − 36.**
   Note A's text layer is OCR of a scan (`dehy:Jrogenase`), so never string-match against A —
   search B, then convert. `scripts/locate.py` does this for any phrase.
3. ~~Overlay the exam scope~~ → `lehninger_index/master_map.tsv`, one row per Czech section,
   113 rows, on the skeleton settled in §8.
4. ~~Add `book: "cz"` and `topicKey` to the 207 existing nodes~~ → **done.** 414 pure
   insertions in `biochemie_pro/` only; `biochemie_basic` untouched. See §9c for how
   `topicKey` was chosen — you need that before writing any Lehninger node.
5. ~~Fix the validator~~ → **done**, plus two checks it turned out to be missing. See §9d.
6. **Write content — this is where the work now is.** One topic at a time, no deadline. The
   user has explicitly removed time pressure: *"如果难也没关系慢慢做就好，不需要你一天一夜一个
   session就做完"*.

Do the first integration card early, on a well-understood entity — tryptophan is a good choice
because §6 shows the source material is all there. It will expose the shape faster than
designing it in the abstract.

### 9a. What `depth_queue.tsv` measures — and what it does not

`ratio` = Lehninger printed pages ÷ Czech pages spent on the same material, per Lehninger
section. It ranks where Lehninger has more to say. **It is a relative ranking, not a page
budget**, for two reasons that are easy to forget and that both inflate it:

- Czech section page ranges **overlap** (7.1.3 is pp.149–152, 7.1.4 is p.151), so the section
  page counts sum to 312 over a 221-page book. A ratio is comparable to another ratio; it is
  not "n pages owed".
- A naive per-Czech-section version of this table is actively misleading and was thrown away:
  twelve Czech sections point at Lehninger §7.1, and crediting each with all 12 of its pages
  made "Sugar esters, 1 page → 12 pages" look like a 12× gap. Allocating fractionally shows
  the truth — §7.1 scores **0.6**, i.e. the Czech book already spends *more* on monosaccharides
  than Lehninger does. Same failure mode as the frequency table in `HANDOFF.md`'s mistake list.

The genuinely thin places, top of the queue: §5.1 oxygen-binding proteins (17×), §8.3 nucleic
acid chemistry (16×), §6.4 examples of enzymatic reactions (11×), §11.3 membrane transport
(9.5×), §21.1 fatty acid and eicosanoid biosynthesis (9.1×), §19.1 respiratory chain (7.5×).

### 9b. What the Czech book points at nothing for — and the user's ruling on it

32 of Lehninger's 117 sections are claimed by no Czech section (256 printed pages, 26 %). The
user ruled on these on 2026-08-06. The full table with page numbers is
`lehninger_index/lehninger_only_scope.tsv`; the ruling in short:

**Work these properly** (7 sections, 88 printed pages) — *"主要需要的"*:

| § | A pages | |
|---|---|---|
| 9.1 | 301–316 | Studying Genes and Their Products (cloning, restriction enzymes, vectors, PCR, libraries) |
| 9.2 | 317–326 | Exploring Protein Function (this is where **CRISPR** lives) |
| 22.2 | 805–816 | Biosynthesis of Amino Acids |
| 24.2 | 890–898 | DNA Supercoiling |
| 24.3 | 898–910 | The Structure of Chromosomes |
| 25.2 | 930–940 | DNA Repair |
| 25.3 | 940–956 | DNA Recombination |

§9.3 Genomics (A pp.326–334) is explicitly **brief** — *"基因组学可以简单讲"*.

**One-line mention only** (19 sections, 125 pages) — *"其他的最简单一笔带过就行"*. This includes
the whole of chapter 12 (signal transduction, GPCRs, receptor tyrosine kinases, oncogenes),
§5.2–5.3, §23.4–23.5, §26.3–26.4, §2.1, §2.3, §4.5, §8.4.

**Six sections were pulled out of that ruling and still need a decision** (43 pages). They came
up as "unclaimed" but they are **not new subject matter** — they are the regulation layer of a
pathway the Czech book already teaches, so "brief mention" is probably the wrong bucket and
applying it silently would have thrown away real depth material:

| § | A pages | it regulates something Czech § already covers |
|---|---|---|
| 14.5 | 539–546 | Coordinated Regulation of Glycolysis and Gluconeogenesis — Czech 7.8/7.9 |
| 15.1 | 557–558 | The Structure and Function of Glycogen — Czech 7.4.1 |
| 15.3 | 565–571 | Coordinated Regulation of Glycogen Breakdown and Synthesis — Czech 7.11.2/7.12 |
| 19.4 | 689–691 | Mitochondria in Thermogenesis, Steroid Synthesis, Apoptosis — Czech 6.2.4 |
| 19.5 | 692–696 | Mitochondrial Genes — Czech 6.2.4 |
| 28.3 | 1075–1092 | Regulation of Gene Expression in Eukaryotes — Czech 4.2.4 does the bacterial operons |

**Ruling, 2026-08-06: merge into the corresponding topic and develop normally** — not a
one-line mention. §14.5/15.1/15.3 fold into the glycolysis/glycogen topics; §19.4/19.5 fold
into oxidative phosphorylation; §28.3 folds into the transcription/operon topic. Treat them as
ordinary depth material for a topic already in scope, not as a separate decision each time.

Note the Chinese notes do have a 氨基酸生物合成 topic (二十六) with no Czech counterpart —
consistent with §22.2 being ruled in.

---

### 9c. How `topicKey` was chosen — read before writing a Lehninger node

**`topicKey` is a slug for the *primary Lehninger section*** that the node's Czech section maps
to (the first entry in `master_map.tsv`'s `leh_sections`). 61 distinct keys over 113 Czech
sections and all 207 nodes; the full table is `lehninger_index/topickey_assignment.json`.

The reason it keys on Lehninger and not on the Czech numbering: a Lehninger node will be
written *against a Lehninger section*, so keying on that section makes the join happen by
itself. Keying on Czech §7.8 instead would mean every future Lehninger node needed someone to
remember which Czech section it belonged to — a step that gets skipped, and a topic view that
silently shows one book only.

**So when you write a Lehninger node, its `topicKey` is not a judgement call.** Look up the
Lehninger section you are writing from in `topickey_assignment.json` and use the key already
sitting there. Only invent a new key for a Lehninger section no Czech node points at — the
`full`-scope ones in §9b are exactly that case (ch9, §22.2, §24.2–24.3, §25.2–25.3), and they
have no key yet.

**There is a third case this rule does not cover, found 2026-08-06 — read it before picking a
topic off `depth_queue.tsv`.** The key is built from the **primary** (first) entry of
`master_map`'s `leh_sections`, so a Lehninger section that a Czech section points at only as its
**second** mapping gets no key, even though it is not unclaimed. Measured over the depth queue:

| | |
|---|---|
| top-20 depth-queue sections that are a primary (key exists, joins automatically) | **10** |
| top-20 that are only a secondary (no key — a naive new key would **not** join) | **10** |
| all 85 rows: primaries | 61 |

**Ranks 1, 2 and 3 are all in the second group** — §5.1 oxygen-binding proteins (ratio 17,
cz 6.3), §8.3 nucleic acid chemistry (16, cz 4.1.5), §6.4 examples of enzymatic reactions
(11, cz 3.6). Czech §6.3 maps to `22.3,5.1`: §22.3 took the key
(`amino-acid-derived-molecules`), §5.1 got nothing.

**Rank 1 is resolved — see `L-5-1-1`, §13j, 2026-08-07.** The user answered the naming question
this paragraph raises: **re-key per the §9e precedent** (move the data, create a genuinely new
key), not reuse a misleading existing key and not rename one. `oxygen-binding-proteins` was
created, Czech `6-3-1` moved into it out of `amino-acid-derived-molecules`, and `L-5-1-1` was
written against it. The other nine secondaries below still need the same fix applied
one at a time — see the note after the table.

**So that "prefer a primary" is actionable, here are the ones that are** — computed 2026-08-06
from `depth_queue.tsv` × `topickey_assignment.json`. Every row below needs **no decision**: the
key already exists and the node joins the topic view the moment it is written.

| rank | Lehninger § | ratio | `topicKey` to use | Czech nodes waiting |
|---|---|---|---|---|
| 1 | 5.1 Reversible Binding of a Protein to a Ligand: Oxygen-Binding Proteins | 17.0 | `oxygen-binding-proteins` (new, re-keyed 2026-08-07) | ✅ **done — `L-5-1-1`** |
| 4 | 11.3 Solute Transport across Membranes | 9.5 | `membrane-transport` | ✅ **done — `L-11-3-1`** |
| 5 | 21.1 Biosynthesis of Fatty Acids and Eicosanoids | 9.1 | `fatty-acid-biosynthesis` | ✅ **done — `L-21-1-1`** |
| 6 | 19.1 The Mitochondrial Respiratory Chain | 7.5 | `respiratory-chain` | ✅ **done — `L-19-1-1`** |
| 7 | 23.2 Tissue-Specific Metabolism | 7.3 | `tissue-specific-metabolism` | 1 |
| 9 | 17.2 Oxidation of Fatty Acids | 6.5 | `fatty-acid-oxidation` | ✅ **done — `L-17-2-1`** |
| 12 | 1.3 Physical Foundations | 5.0 | `bioenergetics-basics` | ✅ **done — `L-1-3-1`** |
| 14 | 3.4 Primary Structure | 5.0 | `protein-primary-structure` | ✅ **done — `L-3-4-1`** |
| 17 | 22.3 Molecules Derived from Amino Acids | 4.5 | `amino-acid-derived-molecules` | ✅ **done — `L-22-3-1`** |
| 18 | 3.3 Working with Proteins | 4.0 | `working-with-proteins` | 1 |
| 20 | 25.1 DNA Replication | 3.8 | `dna-replication` | 2 |

Ranks 3, 8, 10, 11, 13, 15, 16, 19 are still secondaries with no key. **Rank 2 (§8.3) left that
group on 2026-08-07 without receiving the §9e treatment** — its key `nucleic-acid-chemistry` exists
now, but with **no Czech nodes under it**, because the §9e sweep found the Czech book does not
teach §8.3's material anywhere (2e has the evidence and the user's ruling). Rank 1 was the tenth
and is now done (`L-5-1-1`, §13j) — the naming question that blocked all ten is answered, so the
remaining nine take the identical mechanical fix rank 1 just did: create a new key, move the
Czech node(s) that actually teach the subject into it, leave a `manual_note` in both
`topickey_assignment.json` and `topickey_by_node.json` (§9e's format), and run §9e's two-minute
check first, because — as rank 9's β-oxidation case showed — the section that is a Czech node's
*primary* is not always the section that *teaches* the subject. **Four of the ten writable
primaries are now done: rank 14 (`L-3-4-1`), rank 4
(`L-11-3-1`, §13d), rank 6 (`L-19-1-1`, §13e) and rank 12 (`L-1-3-1`, §13f), all 2026-08-06.**
`L-11-3-1` covers all of §11.3 (A pp.385-403) and joins all 3 waiting Czech nodes
(`8-5-3-1/2/3`); `L-19-1-1` covers all of §19.1 (A pp.660-674) and joins all 5 waiting Czech
nodes (`6-2-4-1..5`) — the topic view's largest join yet; `L-1-3-1` covers all of §1.3 (A
pp.18-27) and joins both `1-4` and `1-5`.

**Two writable primaries remain in this table.** Rank 17 is done (`L-22-3-1`, §13i), and its
§9e check **passed** — the first time it has, which is what makes the check credible rather than
merely cautious. Ranks 5 and 9 are both done (`L-21-1-1` §13g,
`L-17-2-1` §13h) and **§5a's organic-chemistry warning turned out to be manageable in both** —
§13g records the approach and §13h confirms it holds. Treat the §5a flag as "write it this way",
not "avoid". **Rank 20 (§25.1 DNA replication) is done** (`L-25-1-1`, §13l, 2026-08-07): its §9e
check passed outright — `dna-replication` already held exactly the two Czech nodes that teach the
subject, so it needed no data change at all — and it opened the molecular-biology half of the
book, which the depth layer had not touched. **§13l is the one to read before the next node**, for
two reasons that generalise: this section's `interpolated` A range was wrong at its start by a
page, and ten of 54 candidate quotes proved to be on a different A page than B's layout implied.
What is left: **rank 7** (§23.2 tissue-specific metabolism, 1 waiting) and **rank 18** (§3.3
working with proteins, 1 waiting).

**Raised with the user 2026-08-07 and answered: re-key per §9e, one section at a time.** The
single thinnest place in the whole queue, rank 1 §5.1 Oxygen-Binding Proteins at ratio 17, is
now written (`L-5-1-1`, §13j). The same question still gates ranks 2, 3, 8, 10, 11, 13, 15, 16
and 19 — nine sections, including the two next-highest ratios in the book (§8.3 nucleic acid
chemistry at 16, §6.4 examples of enzymatic reactions at 11) — but it no longer needs asking
again: apply the identical fix rank 1 just received.

**⚠️ Before writing any of them, do §9e's two-minute check:** list the Czech nodes the intended
`topicKey` actually holds and confirm they are the ones teaching the subject. Rank 9 looked
routine and turned out to need a data correction first; nothing in `depth_queue.tsv` warned of
it.

**One lesson from `L-1-3-1` that changes how to pick, not just what to pick (§13f):** the ratio
is computed from page counts and cannot see whether the Czech section is thin on *theory* or
thin on *numbers*. §1.3 scored 5.0, yet the Czech nodes turned out to be the more rigorous
source on the formal thermodynamics — what they lacked was every measured value. Read the Czech
nodes first and decide what kind of gap you are filling before writing; if Lehninger is the
weaker source on some part of the topic, say so in the node rather than restating Czech material
as though it were new.

Czech sections that share a Lehninger section share a key, which is the intended grouping: all
twelve sugar sections join on `monosaccharides`, the five kinetics sections on
`enzyme-kinetics`. 33 of the 61 keys are used by exactly one Czech section.

**Caveat that travels with it:** topicKey inherits the Czech→Lehninger mapping, and that
mapping is proposed, not verified (65 % agreement with an independent matcher — `README` in
`lehninger_index/`). A wrong mapping produces a wrongly-grouped topic, not a broken app.
`topicKey` is not an `id`; unlike `id` it may be corrected later.

### 9d. What the validator now enforces

`tools/validate-data.js`, rewritten 2026-08-06:

- **The page-gap check applies only to `book === "cz"`**, and a node with no `book` counts as
  `cz` — so `biochemie_basic` keeps precisely the check it had. Lehninger gaps are the intended
  outcome (§4); enforcing coverage there would push someone to pad the data until the check
  went quiet, which is the opposite of the plan.
- **Everything that groups by chapter now groups by book *and* chapter**, because `chapter` is
  book-local (§7). Merging the two numbering spaces would union two unrelated page ranges.
- **`book` and `topicKey` are all-or-nothing within an app.** A half-migrated app is exactly the
  state where a topic view silently drops whatever was missed and still looks right on screen.
- **The data files are read from `index.html`'s `<script>` tags and cross-checked against
  `data/` on disk.** A file nobody loads, or a tag pointing at nothing, both used to pass
  silently against the old hardcoded `ch1..ch10` loop. This is the check that would have caught
  the wiring mistakes `HANDOFF.md` §3 step 2 warns about.

**There is still no `node` on this machine, so it cannot be run locally.** It was parsed with
`esprima` and its logic re-implemented against the real data
(`lehninger_index/scripts/step5_check.py`); both apps come out clean. That script also runs
negative tests, because a check that never fails is not a check — and the first version of one
of those tests was itself wrong: it deleted a page that a neighbouring Czech node also covered,
so no gap appeared and the test "passed" without proving anything. **Czech sections overlap**
(§7.1.3 is pp.149–152, §7.1.4 is p.151); anything that reasons about page ownership has to
account for that. It now searches for a uniquely-owned interior page instead.

### 9e. The first `topicKey` correction — β-oxidation, decided by the user 2026-08-06

**§9c said a `topicKey` "may be corrected later". This is the first time it was, and the case is
worth reading before writing any node, because the same shape will recur.**

The problem, found while scoping `L-17-2-1` (§17.2 Oxidation of Fatty Acids) and *not* visible
from `depth_queue.tsv` alone:

| key, before | held | should hold |
|---|---|---|
| `fat-mobilization` | `8-4-1`, **`8-4-4-1`**, `8-4-4-2`, `8-4-4-3`, `8-4-4-4` | `8-4-1`, `8-4-4-1` |
| `fatty-acid-oxidation` | `10-8`, **`10-9`** | `10-8`, `8-4-4-2/3/4` |

The three Czech nodes that actually *teach* β-oxidation — `8-4-4-2` (the four-step cycle),
`8-4-4-3` (acetyl-CoA's fate, ketone bodies) and `8-4-4-4` (unsaturated, odd-chain, branched
special cases) — sat under `fat-mobilization`, because §9c derives the key from the **primary**
(first) Lehninger mapping and Czech §8.4.4's primary is §17.1. Meanwhile `fatty-acid-oxidation`
held only `10-8`, a one-page summary, and `10-9`, which is **about synthesis**, not oxidation.
Writing the §17.2 node under the unmodified key would have joined it to the two wrong nodes and
left it invisible from the three that matter — the topic view failing precisely on the topic it
was built for.

**Put to the user, who chose to move the data rather than bend the node.** Applied:

- `8-4-4-2`, `8-4-4-3`, `8-4-4-4` → `fatty-acid-oxidation`
- `8-4-4-1` (activation and transport) **stays** on `fat-mobilization`, which is genuinely §17.1
  territory — so that key is now coherent rather than a grab-bag, and still has a future §17.1
  node to receive
- `10-9` → `fatty-acid-biosynthesis`, where a node about synthesis belongs

**⚠️ These four are HAND edits and `step4_topickeys.py` would silently revert them**, because it
regenerates from `master_map.tsv`, whose mapping is unchanged. `topickey_by_node.json` and
`topickey_assignment.json` were updated to match the app data, and both carry a `manual_note`
recording the change. **If that script is ever re-run, re-apply this section by hand or teach it
an override table first.** Verify at any time with:

```bash
grep -B2 'topicKey: "fatty-acid-oxidation"' biochemie_pro/data/ch8.js | grep 'id:'
```

**The general lesson, which §9c's own "third case" only half-anticipated.** §9c warned about a
Lehninger section that is a *secondary* everywhere and therefore has no key. This is the mirror
image: a Lehninger section that **is** a primary, but of a *thin summary* Czech section, while
the *substantive* Czech section points at it only as a secondary. The rule "prefer a primary"
does not protect against it. **Before writing any node, list the Czech nodes its key actually
holds and check they are the ones teaching the subject** — a two-minute check that would have
caught this and will catch the next one.

### 9f. `lehNotes` — cross-book warnings ON the Czech node, added 2026-08-06

**The problem, raised by the user.** Six Lehninger nodes in, they asked a question that had a
sharper answer than expected: *"你主要是添加了额外的一本书？捷克语的书里面有没有添加内容？"* The
honest answer was that the depth layer had grown by seven nodes while the Czech nodes had
received **four one-word `topicKey` edits and not one word of content**. That is the intended
architecture (§3: scope from Czech, depth from Lehninger) and the Czech nodes must NOT be
padded with Lehninger material — each carries a `coverageNote` claiming fidelity to specific
Czech textbook pages, and blurring that would destroy the ability to tell which book said what.

**But it exposed a real hole.** By §3 the exam is on the *Czech* book, so the Czech section is
what gets revised — and every warning about where the Czech book is wrong, incomplete or simply
different was sitting in a Lehninger node the reader might never open. Two clear cases had
already been found in §21.1 alone, and one in §17.2.

**The fix, chosen by the user over auditing the whole Czech layer or continuing to add nodes:**
a new optional field on a Czech node that points AT the Lehninger correction without importing
it.

```js
lehNotes: [
  { kind: "conflict" | "gap" | "cz-stronger",
    node: "L-21-1-1",          // must resolve to a real topic id
    en: "...", cn: "..." }
]
```

| kind | means | colour |
|---|---|---|
| `conflict` | the books disagree, or Lehninger qualifies the Czech claim — answering from the Czech section alone risks a **wrong** answer | red |
| `gap` | the Czech book omits something load-bearing | amber |
| `cz-stronger` | the Czech book is the **better** source here; a simpler formula in Lehninger is not a contradiction to worry about | accent |

**Rendered by `app.js` at the top of the study pane, above the Same-topic strip**, in a
bordered block with a `→ L-…` button that jumps to the Lehninger node. CSS lives in
`biochemie_pro/index.html`'s `<style>` block with the other pro-only rules.

**⚠️ Keep these RARE.** This is not "there is more in Lehninger" — the Same-topic strip already
says that for every joined key, and a warning that appears on every node is a warning nobody
reads. The bar is: *would revising from this Czech node alone mislead you in an exam?* Five
notes on four nodes met it:

| node | kind | what |
|---|---|---|
| `8-3-1` | conflict | elongase placed in the mitochondrial matrix; Lehninger's *more active elongation system* is in the smooth ER (A p.753) |
| `8-3-1` | conflict | β-oxidation listed as an acetyl-CoA source for synthesis; Lehninger calls it *not a significant source* in animals (A p.751) |
| `8-3-4` | conflict | repeats the mitochondrial-elongase placement |
| `8-4-4-1` | gap | **carnitine is never mentioned anywhere in the Czech account** — the entire rate-limiting gate of fatty acid oxidation is absent (A p.613) |
| `1-5` | cz-stronger | Czech gives `G = U + pV − TS` plus chemical potential, activity and local equilibrium; Lehninger §1.3 gives only `G = H − TS` (A p.21) |

**Each note embeds a short verbatim Lehninger phrase**, which is why four of the five verify
**OK** in `verify_citations.py` instead of landing as UNCHECKED — the quote acts as the probe.
Note the tension with §13g's warning: quotation marks in a field carrying a citation are
dangerous when the quoted text is *yours*, and useful when it is genuinely the book's. Quote the
book, never yourself.

**Validation, in both places, with negative tests.** `tools/validate-data.js` and
`step5_check.py` both now check every note for both languages, a `kind` in the closed set, and a
`node` that **resolves to a real topic id** — a dangling target still renders, just without its
link, silently losing the reader's route to the correction, which is the one failure this
feature exists to prevent. `step5_check.py` proves all three fire.

**Also added while doing this, and worth knowing independently: `step5_check.py` now
syntax-checks `app.js`.** Nothing ever had, on a machine with no `node`; and unlike a data
error, a broken `app.js` **white-screens the entire site**, which CI would not catch either
because its `validate` job only loads `data/`. One wrinkle: `esprima` predates Unicode property
escapes, so the two `/\p{Script=Latin}/u` literals in the bionic-reading code are legal modern
JavaScript it cannot parse. They are stubbed before parsing so everything else is still checked,
and if a future edit changes them the check **fails loudly** rather than passing silently.

No `node`/`deno`/`bun` on this machine. **PyMuPDF (`fitz`), `esprima` and PIL are installed in
Python 3.12.** The console is cp1252 — **printing extracted PDF text to stdout crashes with
`UnicodeEncodeError`**, and it has cost time twice. Write to a UTF-8 file and `cat` it:

```python
import io, os
dst = r'C:\Users\Admin\AppData\Local\Temp\claude\probe.txt'
os.makedirs(os.path.dirname(dst), exist_ok=True)
out = io.open(dst, 'w', encoding='utf-8')
```

See also `HANDOFF.md` **§9a** (validate `data/ch*.js` with `esprima`, and why brace counting
silently lies) and **§9b** (crop-and-upscale a scan region to read printed numbers reliably).

---

## 11. Working with this user

- Biology PhD. **Explain in plain Chinese; keep technical terms, code, filenames and parameter
  names in English.**
- Native Chinese speaker actively studying English. In the app: **EN primary and most detailed,
  CN carrying the same substance naturally phrased, CZ a short anchor tag only** (`HANDOFF.md`
  §2). Do not invert this. With the Chinese Lehninger dropped, the CN half of each node is now
  the only Chinese support there is — it matters more, not less.
- **The exam is oral.** Optimise for spoken production. The Oral mode (`model_en` + `checklist`)
  is the target artefact.
- **Wants judgement before action.** Has said so three times, twice mid-task: *"先判断别着急做"*,
  *"还是先判断啊别着急做"*, *"还是先判断，不要动手"*. Diagnose, give a recommendation, wait.
  Read-only probing to establish facts is welcome and has been explicitly requested (*"你看看书
  里面"*); writing files is not, until asked.
- Does not want to operate git or GitHub personally — *"我自己不知道怎么弄啊"*. Commit, merge to
  `main` and push directly. Do not leave a PR for them to click. `gh` is not installed; plain
  `git merge` + `git push` is equivalent and sufficient.
- Discouraged by raw volume numbers, and one of them was wrong by 4×. When a number looks
  frightening, **check what it actually measures before reacting to it**.

---

## 12. The tryptophan integration card — **written 2026-08-06**, dossier kept below

**Status: the card is written and validates** — `E-tryptophan` in
`biochemie_pro/data/entity_cards.js`, commit `37ec106`. `biochemie_pro` now reports 209 topics
(207 cz, 1 lehninger, 1 entity). §12a's schema question is settled and implemented; §12b's
dossier is preserved below because it is the evidence behind every claim in the card and the
template for the next entity.

**What the card contains**, so the next one has a shape to copy: three `chains` — a new
entity-card-only field, an ordered causal run where each step carries its source page and ends
on something observable, per §5 — plus four `points`, two `beyondPoints` for what neither book
supplies, five `terms`, three quiz items and a full oral model. The chains are: indole ring →
Nanodrop reading; half-polar → membrane interface anchor; most expensive amino acid → regulated
twice over a 700-fold range.

### 12a. The schema decision — **taken and implemented 2026-08-06**

§7 proposes `kind: "entity"` with a `topicKey` but no `chapter`/`pages`, since an entity card is
not anchored to one place in either book. **That is a proposal, not a decision, and it collides
with the validator**: `REQUIRED` currently includes `chapter`, `section`, `czTitle` and
`coverage`, and `tools/validate-data.js` will reject any node missing them. So either:

- the card carries a synthetic `chapter`/`section` (ugly, and it would pollute the book view and
  the chapter-scoped page-gap check), or
- `REQUIRED` becomes conditional on `kind` — entity cards require `topicKey` + `summary` +
  `points` and are exempt from `chapter`/`section`/`pages`/`coverage`.

**The second was chosen and is now live.** `tools/validate-data.js` splits `REQUIRED` into
`REQUIRED_SECTION` and `REQUIRED_ENTITY` (`id`, `enTitle`, `cnTitle`, `topicKey`, `summary`), and
additionally **forbids** an entity card from carrying `chapter`, `pages` or `book` — a card that
claims a chapter is lying about being unanchored and would land in a book view it does not belong
to. Because an entity card has no single source book, the all-or-nothing `book` check now runs
over section nodes only; `topicKey` is still required on every node, cards included.

The first option is worse than it looks: the check is `if (!t[k])`, a **falsy** test, so
`chapter: 0` fails too. A synthetic chapter would have to be a real non-zero number that
collides with an actual chapter — there is no neutral sentinel value available.

`app.js` gained the entity view at the same time, because a card that validates but renders
nowhere is not done: entity cards get their own sidebar group (rendered **last** — they are the
synthesis and read better after the sections they draw on), the study pane drops
`section`/`coverage`/`pages` for them, and `enTitle` is promoted to `<h1>` since there is no
`czTitle` to head the block. Flashcards, Quiz and Oral needed no change — they read `terms`,
`quiz` and `oral`, none of which are chapter-dependent.

**A trap this exposed, worth remembering for any future tooling:**
`lehninger_index/scripts/step5_check.py` detected nodes by the key set `{id, chapter, section}` —
exactly the three fields an entity card deliberately lacks. It reported 208 topics while a
browser would load 209, silently skipping the card and every check on it. Any script that walks
the data *by shape*, rather than by loading `window.BIOCHEM.topics`, has to know about both node
kinds.

### 12b. The dossier — every fact located, with the page to open in A

> **⚠️ The A page numbers in the table below have NOT all been re-verified, and three of them
> were wrong** (§16). The ones now in the shipped card are correct; this table is the original
> and is kept for its quotes and structure. **Re-check any page here against A before reusing
> it** — `python lehninger_index/scripts/verify_citations.py`.

Read in **A** (printed page numbers below); extract clean text from **B** via
`lehninger_index/scripts/locate.py`. Everything here was verified by reading B's text, not
recalled.

| what | A page | § | the passage |
|---|---|---|---|
| Trp is aromatic, and *why it is not simply hydrophobic* | 72–73 | 3.1 | *"Tyrosine and tryptophan are significantly more polar than phenylalanine because of the tyrosine hydroxyl group and the nitrogen of the tryptophan indole ring."* |
| Trp absorbs UV at 280 nm — **with the number that makes it useful** | 73 | 3.1 | Fig. 3-6: *"The measured absorbance of tryptophan is more than four times that of tyrosine at a wavelength of 280 nm."* Phe contributes little. |
| **A → concentration: the Lambert-Beer law** | 75–76 | 3.1, Box 3-1 | *"ε is the molar extinction coefficient (in units of liters per mole-centimeter), c is the concentration…, l is the path length"*. Note the book's word order is **Lambert-Beer**, not Beer-Lambert. |
| Trp's constants | 71–79 (Table 3-1) | 3.1 | Mr 204, pK₁ 2.38, pK₂ 9.39, pI 5.89. No R-group pKa — the indole N is not ionisable at biological pH, which is *why* Trp is a hydrophobic-effect contributor. |
| Trp at the membrane interface — the payoff fact | 396–397 | 11.1 | Fig. 11-15: *"Tyr and Trp residues… are found predominantly where the nonpolar region of acyl chains meets the polar head-group region"*, acting as **"membrane interface anchors, able to interact simultaneously with the central lipid phase and the aqueous phases on either side."* |
| aromatics at the lipid–protein interface of β-barrels | 396 | 11.1 | *"in β strands of membrane proteins… aromatic side chains are commonly found at the lipid-protein interface."* |
| where the indole ring comes from | 810–812 | 22.2 | chorismate → anthranilate (Gln donates the N that becomes the indole N) → condenses with **PRPP** → indole-3-glycerol phosphate. Final step: **tryptophan synthase**, α₂β₂, dissociable into α and β₂ catalysing the two halves. |
| Trp is the most expensive amino acid to make | 810–812 | 22.2 | the aromatic branch is the longest biosynthetic pathway of the twenty — the reason the cell regulates it so hard, which is the bridge to the next row |
| the trp operon — repression **and** attenuation | 1067–1069 | 28.2 | Trp binds the repressor (a homodimer) → it binds the operator, which overlaps the promoter. Then attenuation fine-tunes on top: *"Different cellular concentrations of tryptophan can vary the rate of synthesis… over a 700-fold range."* mRNA half-life ~3 min. |
| Trp is both ketogenic **and** glucogenic | 640–654 | 18.3 | one of five amino acids that are both. Its indole ring's fate is Fig. 18-21. |
| what Trp becomes | 816–824 | 22.3 | serotonin and the other Trp-derived signalling molecules |

**The Czech book's own coverage of Trp**, for the CZ half of the card: §2.1.1 (structure and
occurrence, book pp.21–23) and §2.1.2 (physico-chemical properties, pp.23–24), nodes `2-1-1`
and `2-1-2`, both `topicKey: "amino-acids"`. The Chinese notes cover Trp's colour reaction
(乙醛酸反应) on note p.19 and the aromatic amino acids on pp.17–19.

### 12c. The chain the card should actually make

§4 sketched this; the dossier above now supports every link with a page. Written as the §5 rule
demands — each step lands on something observable:

indole ring is flat and carries no charge → so it avoids water → so it sits in the hydrophobic
core, **or** at the membrane interface where the acyl chains meet the head groups (A p.397) →
and because it is a conjugated ring it absorbs UV at 280 nm, four times more strongly than Tyr
(A p.73) → so `A₂₈₀ = εcl` turns that absorbance into a protein concentration (A p.75) → which
is the Nanodrop reading on the bench.

Second chain, the regulatory one: Trp is the most expensive amino acid to synthesise (A p.810)
→ so *E. coli* regulates it twice over, by repression and again by attenuation, across a
700-fold range (A p.1068) → which is why the trp operon became the textbook example, and it is
already in the Czech book at §4.2.4.

**No orbitals, no resonance structures, no 4n+2** — see §5. The user has said their organic
chemistry has almost no foundation, and §5a shows this card sits in exactly the vocabulary band
(aromaticity, conjugation, polarity) where that bites hardest. Every claim above already has a
bench consequence attached; keep it that way.

### 12d. What is genuinely missing from the sources

- **The extinction coefficient of tryptophan itself.** Lehninger gives the law and defines ε but
  does not print ε₂₈₀ for Trp (~5,500 M⁻¹cm⁻¹) or the protein rule of thumb. If the card needs a
  worked number, it comes from outside both books — mark it as such. `PESB/` already has a
  `beyondPoints` field for exactly this (see `HANDOFF.md` §4a); this app has only `gapPoints`,
  which means something different, so adding `beyondPoints` here is part of the schema question
  in §12a.
- **Trp fluorescence** — `tryptophan fluorescence` is **0** hits in Lehninger 8 (checked after
  the ligature fix). A real and commonly examined property of Trp, absent from the source.
  Same treatment: outside-the-book, marked.

---

## 13. The first Lehninger node exists — and it exposed the real blocker

**Written 2026-08-06: `biochemie_pro/data/leh_ch3.js`, one node, `id: "L-3-4-1"`.** Validates
clean (208 topics = 207 cz + 1 lehninger; `biochemie_basic` untouched at 207/0; all of
`step5_check.py`'s negative tests still fire). Wired into `index.html` as its own `<script>` tag,
which the validator's index-vs-disk check requires.

### 13a. Why this section, and what "integration" looks like when it works

Czech §2.2.1 *Sekvence aminokyselin* is 2 pages, **4 points, 3 terms, no oral** — one of the
thinnest nodes in the book — and it explains only **why** a sequence matters (4 reasons, ending
in sickle-cell). It never says how anyone **obtains** one. Lehninger §3.4 is that missing half,
at ratio 5.0. Zero overlap, pure complement. It was also chosen because §3.4 **is a primary**
(§9c), so `topicKey: "protein-primary-structure"` joins the two with no rule change:

```
2-2-1     book=cz          chapter=2  section=2.2.1   <-- why sequence matters
L-3-4-1   book=lehninger   chapter=3  section=3.4     <-- how it is determined
                    ^ same topicKey: protein-primary-structure
```

Three-way, and this is the payoff worth aiming at: the Chinese notes (pp.21–22, §6a) give the
**colours** — DNFB/Sanger → yellow DNP-aa, PITC/Edman → PTH — Lehninger gives the modern
MS methods, the Czech book gives the exam framing. None of the three is redundant.

### 13b. ⛔ `app.js` cannot display two books — this is the actual gate, not the entity schema

**`app.js` never reads `book` or `topicKey`. Not once.** §9d taught the *validator* about two
books; nobody taught the UI. Three sites filter on `chapter` alone:

```js
254: if (scope.startsWith('ch:')) return String(topic.chapter) === scope.slice(3);
261: const list = TOPICS.filter((t) => t.chapter === ch);
313: const list = TOPICS.filter((t) => t.chapter === ch && topicMatches(t, needle));
```

and `CHAPTER_TITLES` is a hardcoded 1–10 map of **Czech** chapter names, iterated as a literal
`[1,2,…,10]` array in `fillScopeSelect`. Consequences, both real today:

- `L-3-4-1` has `chapter: 3`, so it renders under **"Ch. 3 — Enzymes"**, the Czech chapter 3,
  next to the enzyme-kinetics nodes. The node's own content displays fine; its *placement* is
  wrong. This is precisely the collision §7 predicted when it made `chapter` book-local.
- **A node with `chapter > 10` would not render at all** — the loop never reaches it, and
  `CHAPTER_TITLES[22].en` would throw. That silently rules out §22.2, §24–25, ch9 and every
  other `full`-scope section in §9b.
- **There is no topic view.** The feature that shows both books side by side under one
  `topicKey` — the thing `pro` exists for (§4) — does not exist in the UI at all.

**§12a framed "renders nowhere" as an entity-card problem. It is not: it applies to every
Lehninger node.** The entity-card schema question is real but downstream of this one.

**So the honest order of work is:**

1. Teach `app.js` about `book`: make the three chapter filters key on `book + chapter`, and
   make `CHAPTER_TITLES` two-level (per book) with Lehninger's own chapter names. Until this
   lands, every Lehninger node is misfiled.
2. Build the topic view (group by `topicKey`, both books side by side). This is the feature,
   and `L-3-4-1` + `2-2-1` is now a real two-book pair to build it against.
3. Then the entity-card schema (§12a) and the tryptophan card (§12).

### 13c. Two schema decisions taken while writing, flagged rather than buried

- **`czTitle` on a Lehninger node.** The validator requires it, and Lehninger has no Czech
  heading. Rather than invent Czech (which §2 of `HANDOFF.md` forbids) or duplicate the English,
  it carries **the Czech section heading this node adds depth to** — here
  *"Sekvence aminokyselin (primární struktura)"*. That is honest (it is a real heading from the
  real book) and useful (§5a demotes `cz` to a small reference tag, so it reads as "this
  deepens that"). `coverageNote` says so explicitly. If a better convention is chosen later,
  this is the node to change.
- **What `coverage: "full"` means for a Lehninger node.** `HANDOFF.md` §2 defines it as "every
  page read from an actual scan image", which does not transfer: B has a real digital text
  layer, so reading it is *better* than a scan read, but the **figures are images in A and were
  not read** — only their captions, which are in the text layer. The node is marked `"full"`
  with `coverageNote` stating exactly that, plus the fact that it covers only A pp.91–95 of
  §3.4 and claims nothing about pp.96–100. **`HANDOFF.md` §2's definition of `coverage` needs a
  Lehninger clause**; this node is the precedent, not a licence to skip the question.

A useful side note for citing pages: A page numbers came from the **measured** anchors in
`lehninger_AB_anchors.json` (TABLE 3-6 → A p.92, FIGURE 3-28 → A p.94, FIGURE 3-29 → A p.95),
not from interpolation. One anchor in that file is wrong — **`FIGURE 3-24` is recorded at A
p.104 / B p.473, but the figure is on B p.420** (≈ A p.92); the entry has almost certainly
matched a later cross-reference. Spot-check an anchor against the surrounding text before
citing it.

### 13d. The second Lehninger node — `L-11-3-1`, §11.3 Solute Transport across Membranes (2026-08-06)

**`biochemie_pro/data/leh_ch11.js`, one node, `id: "L-11-3-1"`, `topicKey: "membrane-transport"`.**
Rank 4 of `depth_queue.tsv` (ratio 9.5), the highest-ratio *writable-today* section at the time
(§9c). Unlike `L-3-4-1`, which covered half of a 10-page section, this node covers **all of
§11.3 end to end** (A pp.385–403, all nine subheadings, `pages: [385..403]`) and joins **all
three** waiting Czech nodes at once (`8-5-3-1` simple diffusion, `8-5-3-2` facilitated diffusion,
`8-5-3-3` active transport) — the topic view's second real multi-source join, and the first
three-way join on the Lehninger side.

**What it adds that the three Czech nodes structurally cannot.** The Czech nodes describe every
carrier and pump anonymously — "a carrier protein," "an ATPase pump," "an ion channel" — because
the Czech textbook page (200–201) never names one. This node names them and gives real numbers:
GLUT1 (Kt ≈ 6 mM, 12-helix alternating-access mechanism), the chloride-bicarbonate exchanger as
a real antiport example, the Na+K+ ATPase (3 Na+ out / 2 K+ in per ATP, ~25% of resting human
energy budget) as the molecule behind "primary active transport," the Na+-glucose symporter with
a worked thermodynamic example (~6,000-fold theoretical concentrating power) behind "secondary
active transport," and aquaporins as the named molecule behind the Czech node's own Obr. 8.3
route B ("water through a micropore in an integral protein"). ABC transporters and CFTR/cystic
fibrosis have **no Czech counterpart at all** — pure addition, not overlap.

**Citation process, and a bug it caught in the checker's own input, not its logic.** Content was
read from B's text layer end to end (`_B_text.pkl`, all pages 1432–1495), and A page numbers for
each subsection were taken from `lehninger_toc.tsv`'s own subheading rows (the step-1 TOC
extraction, itself the book's own printed page numbers) rather than re-derived — that table is
already the authoritative source `depth_queue.tsv` itself is built from. Individual figure/table
citations were cross-checked against the measured anchors in `lehninger_AB_anchors.json`.
Running `verify_citations.py` after a first draft found **4 ELSEWHERE results, all with the same
cause**: the coverageNote listed anchors as `FIGURE 11-28=A p.385, 11-29=A p.386, ...`, dropping
the `FIGURE`/`BOX` keyword after the first item, so the checker's backward-context search
grabbed the wrong label for several page numbers (all four resolved to whichever label came
first in that 90-character lookback window, not the one actually adjacent to each page number).
**Repeating the label keyword on every item, not just the first, fixed all four in one edit** —
worth remembering before writing another dense inline anchor list. A fifth citation
(`Box 11-2` for CFTR) came back genuinely `ELSEWHERE`: the string "Box 11-2" as a *label* only
occurs in A as an in-text cross-reference on p.396 ("...active transporter (Box 11-2)."), one
page before the box's own content (confirmed by hand: "A Defective Ion Channel in Cystic
Fibrosis" heading and the F508del/ivacaftor material are on A p.397–398) — the exact
cross-reference-vs-caption trap §16c already named for figures, now also seen on a Box. Widening
the citation to `A pp.396-398` (true anyway, matching the toc's own 395–398 subheading range)
resolved it correctly rather than moving the citation to the wrong page the checker suggested.
**Final state: 27 OK, 0 ELSEWHERE, 11 UNCHECKED** app-wide (up from the 20/12/0/7 baseline in
§16a). Two of this node's own UNCHECKED items (`FIGURE 11-31`, `FIGURE 11-45`) are checker
artifacts, not errors — A's OCR renders a stray space before the hyphen ("FIGURE 11 -31"), which
the existing de-ligature/de-hyphenation normalization does not catch; both were hand-verified
directly against the PDF and are correct as cited.

Both `step5_check.py` and `verify_citations.py` were run after every edit, per §16a's own rule
("run it after writing any node"); the wiring (`index.html`'s `<script src="data/leh_ch11.js">`,
placed after `leh_ch3.js` and before `entity_cards.js`) was added and re-validated by the same
pass. `biochemie_pro` now reports **210 topics (207 cz, 2 lehninger, 1 entity), 61 topicKeys**.

### 13e. The third Lehninger node — `L-19-1-1`, §19.1 The Mitochondrial Respiratory Chain (2026-08-06)

**`biochemie_pro/data/leh_ch19.js`, one node, `id: "L-19-1-1"`, `topicKey: "respiratory-chain"`.**
Rank 6 of `depth_queue.tsv` (ratio 7.5), chosen over rank 5 (§21.1, fatty acid biosynthesis,
ratio 9.1) specifically to dodge §5a's organic-chemistry warning, which applies to rank 5 and
rank 9 but not this one. Covers all of §19.1 (A pp.660-674, all seven subheadings) and joins
**all five** waiting Czech nodes at once (`6-2-4-1..5`) — the largest join so far, and the
topic view's fourth multi-source pair (after `amino-acids`, `protein-primary-structure`,
`membrane-transport`).

**A genuinely different case: the Czech section here was already deep, not thin.** §11.3's and
§3.4's Czech counterparts were each a page or two of definitions with no named molecules;
6.2.4 is five full nodes that already name Complexes I-V, walk through the Q cycle with its own
proton bookkeeping, and give ATP-synthase's binding-change mechanism. Padding that with a
Lehninger re-explanation of the same mechanisms would have been the exact mistake §9a's ratio
metric exists to catch (crediting a topic with depth it does not lack). So this node was scoped
differently: read all of §19.1 first, then kept only what the five existing Czech nodes state as
fact without naming the underlying molecule, method, evidence, or number. That turned out to be
most of the section anyway -- mitochondrial architecture (porins, the inner membrane's own
impermeability to protons, matrix contents), the NAD(P)+ dehydrogenase catalogue explaining
*where* the electrons Complexes I/II receive actually originate, the THREE independent
experiments that established the carrier order (reduction potential, re-oxidation kinetics,
inhibitor mapping -- Table 19-2, Fig. 19-6), the full inhibitor/uncoupler pharmacology table
(Table 19-4: rotenone, antimycin A, cyanide, oligomycin, DNP, atractyloside), respirasome
supercomplexes (entirely absent from the Czech account), the three OTHER pathways that feed
electrons into the same chain via Q (ETF from fatty-acid oxidation, the glycerol-3-phosphate
shuttle, dihydroorotate dehydrogenase from pyrimidine synthesis -- a genuine cross-topic link),
the actual free-energy numbers (-220 kJ/mol NADH-to-O2, ~190 kJ/mol conserved in the proton
gradient, Worked Example 19-1), and reactive oxygen species with their defense cascade
(superoxide dismutase, glutathione peroxidase/reductase) -- also entirely absent from the Czech
account. It deliberately stops exactly where Complex V/ATP synthase begins (Lehninger's own
section 19.2), both because 19.2 is a separate, still-secondary `depth_queue.tsv` row and
because Czech node `6-2-4-5` already covers that mechanism well.

**A second, more general citation-checker lesson, past the "repeat the label prefix" fix from
§13d.** A first draft packed all thirteen of this range's figure/table anchors into one dense
coverageNote sentence (`TABLE 19-1 = A p.662; FIGURE 19-4 = A p.663; ...`), this time *with* the
label prefix repeated on every item, exactly as §13d's fix prescribed. `verify_citations.py`
still returned false `ELSEWHERE` results, and the pattern of its raw output was strange enough
to be worth recording: the same citation text (`A p.662`) appeared as FIVE separate audit rows,
while several citations in between (`A p.664`, `A p.672-674`) never appeared at all. Cause,
found by re-running the checker's own parsing logic in isolation: its per-citation **context
window is 90 characters back + 15 forward**, and when list items sit roughly 20-25 characters
apart, that window spans three to five neighbouring items at once. The checker then re-searches
*within that window* for a figure/table label to display and to verify against — and because it
takes the **first (leftmost) match**, not the nearest one, a citation's printed row can end up
showing a completely different neighbour's label and page number. Repeating the prefix (§13d's
fix) stops the checker from silently falling through to a wrong label with no prefix; it does
**not** stop it from mismatching between two correctly-prefixed labels that are simply too close
together. **The real rule: keep at least ~100 characters of unrelated prose between any two `A
p.N` citations anywhere in a node — including between a citation and a bare figure mention with
no page number of its own** (this bit twice more, at smaller scale, inside two `points` entries,
once a stray `(Fig. 19-8)` mentioned without a page sat 50-odd characters before an unrelated
`(Table 19-4, A p.667)` and got matched to it instead). The eventual fix was to drop the dense
coverageNote list entirely — a citation is now written inline in the `points` array, next to the
actual content it supports, each one naturally isolated by a paragraph of surrounding prose, the
same pattern `L-3-4-1` and `L-11-3-1`'s later citations already used. **Final state: 34 OK, 0
ELSEWHERE, 12 UNCHECKED** app-wide.

Both `step5_check.py` and `verify_citations.py` were run after every edit; the wiring
(`index.html`'s `<script src="data/leh_ch19.js">`, after `leh_ch11.js` and before
`entity_cards.js`) was added and re-validated by the same pass. `biochemie_pro` now reports
**211 topics (207 cz, 3 lehninger, 1 entity), 61 topicKeys**.

### 13f. The fourth node — `L-1-3-1`, §1.3 Physical Foundations (2026-08-06), and two tooling fixes it forced

**`biochemie_pro/data/leh_ch1.js`, one node, `id: "L-1-3-1"`, `topicKey: "bioenergetics-basics"`.**
Rank 12 of `depth_queue.tsv` (ratio 5.0), covering all of §1.3 (A pp.18–27, all seven
subheadings) and joining both waiting Czech nodes, `1-4` (*Výživa a metabolismus*) and `1-5`
(*Energie a život*).

**⚠️ The most important thing in this entry is not the node. It is that the ratio metric pointed
the wrong way, and §9a says it can.** §11.3 and §3.4 were genuinely thin on the Czech side.
§1.3 is not: Czech node `1-5` gives `G = U + pV − TS` — the fuller form, with `H = U + pV`
derived — where Lehninger §1.3 gives only `G = H − TS`, and `1-5` goes on to chemical potential,
activity, the **principle of local equilibrium**, the primed pH-7 standard state and
non-equilibrium thermodynamics, **none of which appear in Lehninger §1.3 at all**. On the formal
thermodynamics the Czech book is the better source, and a node written on the assumption
"ratio 5.0 means Lehninger has five times more to say" would have padded it with a worse
re-explanation of material already covered better — the exact failure §9a's own frequency-table
analogy warns about.

What the Czech nodes actually lack is **numbers and observables**. They state
`ΔG° = −RT ln K` without a single measured value; they define the stationary state without ever
measuring how far from equilibrium a cell sits; and they justify reaction coupling by arithmetic
(`ΔG₁ + ΔG₂ < 0`) without the **shared-intermediate** mechanism that makes coupling physically
possible — a condition that is necessary but *not sufficient*, and the one place this node
genuinely corrects rather than supplements the Czech account. So the selection rule became:
keep only what turns an existing Czech assertion into something measured or mechanistic. The
node's centrepiece is Worked Example 1-1 — equilibrium constant ≈ 2 × 10⁵ M against a
cellular mass-action ratio ≈ 5 × 10⁻⁴ M, **about nine orders of magnitude apart** — which
supplies at one stroke the missing evidence for three separate Czech claims. It also carries the
two ATP corrections (ATP works because the cell holds it far from equilibrium, not because its
bonds are exotic; and it is *phosphoryl group transfer*, not hydrolysis, that drives coupled
reactions), and the ΔG‡-vs-ΔG separation with the caption's explicit "activation energy is not
related to free-energy change". `coverageNote` states the Czech-is-stronger finding outright
rather than hiding it.

**Tooling fix 1 — a wrong anchor, and §15a's stated remedy for wrong anchors is itself wrong.**
`lehninger_AB_anchors.json` records `BOX 1-3` at A p.20. The box actually begins on **A p.22**
(running to 23); p.20 carries only the cross-reference *"(see Box 1-3, Case 2)"*. `FIGURE 1-26`
has the same shape — cross-referenced on 22, captioned on 24. This is §16c's
caption-vs-cross-reference trap, but note carefully: **§15a tells you to "prefer the earliest
occurrence inside the chapter's own page range", and that heuristic picks the WRONG page in both
cases here**, because the cross-reference comes *first*. That advice is safe for `FIGURE 3-24`
(where the stray hit was later) and unsafe in general. **The reliable test is letter case:**
Lehninger sets captions in full caps (`BOX 1-3`, `FIGURE 1-26`) and cross-references in ordinary
case (`Box 1-3`, `Fig. 1-26`). A case-sensitive search separates them cleanly, and that is how
every label in this node was resolved. Worth applying when §15 finally crops figures, since a
wrong page there silently crops the wrong image.

**Tooling fix 2 — `verify_citations.py` was silently auditing only ⅔ of this node's citations.**
The file contained 9 `A p.N` citations; the audit printed 6 rows, with **no warning that three
had been dropped**. Cause: the dedupe key was `(citation, path.split("[")[0])`, which throws the
array index away, so `points[1]` and `points[4]` both keyed as `"points"` — meaning **any node
citing the same page from two different points had the second silently discarded**. `L-1-3-1`
cites A p.24 twice (Worked Example 1-1 and Fig. 1-26), A p.25 twice and A p.26 twice, so three
citations were never checked at all. This is the **same failure shape as the `chains`-only bug
in `a0a825c`**, and §16a's rule applies unchanged: *a checker that quietly covers part of its
input is worse than no checker, because the clean run gets quoted as evidence.* Fixed by keying
on `path.rsplit(".", 1)[0]` — keeping the index (`points[4]`) while still dropping the final
field name, which preserves the original en/cn de-duplication intent exactly. After the fix all
9 appear; the two recovered figure citations both verify **OK**. **Re-running the fixed checker
against the three earlier nodes produced no new rows at all**, so `L-3-4-1`, `L-11-3-1` and
`L-19-1-1`'s earlier clean verdicts stand — they happened to cite each page only once per field.

**Four citations here are `UNCHECKED` by design, not by omission**, and all four were verified by
hand against A: `verify_citations.py`'s label regex recognises `FIGURE`, `TABLE` and `Box` but
**not `Worked Example`**, so all three Worked Example citations are structurally unverifiable by
the tool (1-1 confirmed on A p.24; 1-2 and 1-3 both on A p.25). The fourth, the feedback-
inhibition citation on A p.27, is real but the phrase is split across an OCR line break
(`"Such feedback \ninhibition keeps…"`), so a naive substring test misses it — the same
hyphenation/whitespace class of problem §16b catalogues. Teaching the regex about
`Worked Example` is an easy future improvement.

`biochemie_pro` now reports **212 topics (207 cz, 4 lehninger, 1 entity), 61 topicKeys**;
citation audit **39 OK, 0 ELSEWHERE, 16 UNCHECKED**.

### 13g. The fifth node — `L-21-1-1`, §21.1 Fatty Acids and Eicosanoids (2026-08-06): the §5a topic, survived

**`biochemie_pro/data/leh_ch21.js`, one node, `id: "L-21-1-1"`,
`topicKey: "fatty-acid-biosynthesis"`.** Rank 5, ratio 9.1 — the highest ratio in the
writable-today set — covering all of §21.1 (A pp.745–760, eleven subheadings). **This is the
topic §5a flagged as the worst organic-chemistry load in the book, and it was writable.** The
approach that made it work is the reusable part, and it applies directly to rank 9 (§17.2).

**How §5's rule was satisfied without gutting the content.** Every chemical statement was routed
to one of four things the reader can hold onto: a **named enzyme**, a **measured quantity**, a
**drug**, or a **clinical consequence**. No reaction mechanism is drawn in prose and no
electronic structure is invoked anywhere. Two examples of the translation. The carboxylase is
described as a *machine* — three domains, a biotin on a flexible arm that physically rotates
between two active sites — rather than as a carboxylation mechanism. Desaturation, which is
where the organic chemistry would normally bite hardest, is given entirely as *what goes in and
what carries the electrons*: two substrates oxidised at once by one O₂, electrons routed through
cytochrome b5 reductase and cytochrome b5, all in the smooth ER. The chemistry is still there;
what is removed is the part the reader cannot check at a bench.

**Scope — the topicKey over-groups here, and this is the first case big enough to matter.**
`fatty-acid-biosynthesis` joins **nine** Czech nodes (`8-3-1..8-3-9`), because Czech §8.3
*Biosyntéza lipidů* is one broad section whose primary Lehninger mapping is §21.1. This node
genuinely deepens only the first four. Czech `8-3-5`/`8-3-6` (phosphatidic acid, DAG,
CDP-derivatives, triglycerides, phospholipids) belong to Lehninger §21.2–21.3, and
`8-3-7..8-3-9` (mevalonate, IPP, squalene, HMG-CoA reductase, cholesterol) to §21.4 — separate
`depth_queue.tsv` rows, none covered. **So the topic view will display this node beside five
Czech nodes it does not deepen.** That is a property of §9c's granularity, not a defect in the
node, but it is worth knowing before someone reads the topic view as a coverage claim.

**What was deliberately NOT repeated.** The Czech nodes are strong here: `8-3-1` already names
biotin *and* Mn²⁺ and gives the malonyl-CoA equation; `8-3-2`/`8-3-3` already walk steps I–VI
with ACP and phosphopantetheine; `8-3-4` already gives the full stoichiometry and CO₂'s
catalytic role. None of that is restated. What Lehninger adds is the **supply, the control and
the destination**: the citrate shuttle (which answers how acetyl-CoA leaves the mitochondrion at
all, and — via malate and malic enzyme — where roughly half of the 14 NADPH come from, a
question the Czech balance sheet raises and never answers); the entire regulatory layer
(citrate as allosteric activator, palmitoyl-CoA feedback, AMPK phosphorylation); and then two
subjects Czech §8.3 never reaches — **essential fatty acids** and **eicosanoids**, the latter
five pages of directly clinical material (COX-1 vs COX-2, aspirin's Ser acetylation, the
Vioxx/Bextra withdrawals, low-dose aspirin, and why NSAIDs do nothing for asthma).

**Two places this node corrects or qualifies the Czech text, both flagged rather than smoothed
over.** (1) Czech `8-3-1` lists β-oxidation as a source of acetyl-CoA for synthesis; Lehninger
states that in animals it is *not* a significant source, precisely because malonyl-CoA inhibits
carnitine acyltransferase I and the two pathways are reciprocally regulated. The Czech statement
is not wrong chemically, but as a description of an animal cell it needs the qualification.
(2) Czech `8-3-1` places the elongase system in the **mitochondrial matrix**; Lehninger places
elongation in **both** the smooth ER and mitochondria and calls the **ER system the more
active** one. Answering from the Czech book alone would name the wrong principal site. Both are
given side by side in the node rather than resolved silently.

**Checker notes.** 13 citations, **11 machine-verified OK, 0 ELSEWHERE**, 2 UNCHECKED and both
hand-verified (`citrate lyase` and `malic enzyme` on A p.752; `carnitine` and `futile` on
A p.753). Two small lessons. First, the case-sensitive caption test from §13f needed a
**word-boundary refinement** here: `FIGURE 21-1` is a prefix of `FIGURE 21-13` and `FIGURE
21-15`, so a plain substring search reports FIGURE 21-1 as captioned on seven different pages.
Require the label not be followed by another digit. Second — **do not use quotation marks for
emphasis or for a rhetorical question in a field that also carries a citation.** The checker
treats any quoted span as a quotation *from the book* and tries to verify it, so a rhetorical
`'can both run at the same time?'` produced a `probe not found` line that reads exactly like a
bad citation. Rewriting it unquoted turned the row into an honest `no searchable phrase`.

`biochemie_pro` now reports **213 topics (207 cz, 5 lehninger, 1 entity), 61 topicKeys**;
citation audit **50 OK, 0 ELSEWHERE, 18 UNCHECKED**, invariant 68 = 50 + 0 + 18.

### 13h. The sixth node — `L-17-2-1`, §17.2 Oxidation of Fatty Acids (2026-08-06)

**`biochemie_pro/data/leh_ch17.js`, one node, `id: "L-17-2-1"`,
`topicKey: "fatty-acid-oxidation"`.** Rank 9, ratio 6.5, covering all of §17.2 (A pp.607–618,
ten subheadings). **Read §9e first** — this node could not be written correctly until the
`topicKey` was fixed, and that fix is the more reusable half of this entry.

**The §5a method held for a second lipid topic.** Same discipline as §13g: every chemical
statement routed to a named enzyme, a measured quantity, or a clinical consequence, no
mechanism drawn in prose. Two topics in, that approach now looks reliable rather than lucky, and
the §5a flag is better read as "write it this way" than as "avoid".

**The single largest gap it fills is a word the Czech book never uses: carnitine.** A text
search of node `8-4-4-1` finds no *carnitine*, *karnitin* or *shuttle*, so the entire regulatory
gate of fatty acid oxidation is absent from the Czech account — even though `8-4-4-1` is the
node about fatty acid activation and transport. The carnitine shuttle is the committed,
rate-limiting step, and it decides whether a cytosolic acyl-CoA is burned or esterified. Adding
it also **closes a loop `L-21-1-1` left open**: that node's reciprocal-regulation point already
said malonyl-CoA inhibits carnitine acyltransferase I, and this node now supplies the other
side. Likewise `L-19-1-1`'s ETF point named ETF as an entry into ubiquinone; this node names the
three acyl-CoA dehydrogenase isozymes that feed it. **Three Lehninger nodes now interlock, which
is the first time the depth layer has behaved like a layer rather than a set of separate
articles.**

Other genuinely additive material, none of it in the Czech nodes: the chain-length division of
labour (VLCAD / MCAD / SCAD, and the trifunctional protein for chains ≥12 C with substrate
channelling); the arithmetic (**108 ATP gross, 106 net**, because activation breaks *both*
phosphoanhydride bonds — and **two** efficiency figures, ~33 % standard versus **>60 %** at real
intracellular concentrations, since quoting only the first understates the pathway); the two
auxiliary enzymes rescuing polyunsaturated chains; coenzyme B12 in the odd-chain route; PPARα as
the slower transcriptional layer, with endurance training as its observable; and five diseases
mapped onto specific steps — propionic acidemia, MCAD deficiency (the commonest inherited
disorder of fatty acid catabolism in northern European populations), TFP defects, Zellweger,
XALD and Refsum.

**Scope:** ketone bodies are **not** covered — they are §17.3, a separate `depth_queue.tsv` row
— even though Czech `8-4-4-3`, now joined here, does discuss them. Stated in `coverageNote` so
the join is not misread as a coverage claim.

**A new page-map caveat, and a citation error it caught.** `lehninger_toc.tsv` places the
*Transcription Factors* subheading on A p.614 and *Genetic Defects* on 615, but direct search
finds PPAR and MCAD only from **616**. The cause: **A pp.614–615 are entirely occupied by the
two-page Box on coenzyme B12**, and the running text resumes on 616. So a TOC row can be
displaced by the length of an interleaved Box. This extends §16's rule — *never take an A page
from prose* — to **never take one from the TOC either when a Box intervenes in the range**. The
same trap then bit this node directly: a first draft cited the propionic-acidemia passage to
`A pp.614-615` on the assumption it sat near the B12 Box, when the whole passage (diagnosis and
all four treatments) is on **A p.613**. `verify_citations.py` could not catch it — the citation
had no figure label, so it reported `UNCHECKED`, not `ELSEWHERE` — and it was found only by
hand-checking every UNCHECKED row, which is exactly why §16a requires that.

Citations: 11 total, **7 machine-verified OK, 0 ELSEWHERE**, 4 UNCHECKED and all four
hand-verified (A p.611 for the ATP arithmetic; A p.613 twice, for the carnitine gate and for
propionic acidemia; A pp.616-617 for MCAD and TFP). `biochemie_pro` now reports **214 topics
(207 cz, 6 lehninger, 1 entity), 61 topicKeys**; audit **57 OK, 0 ELSEWHERE, 22 UNCHECKED**,
invariant 79 = 57 + 0 + 22.

### 13i. The seventh node — `L-22-3-1`, §22.3 Molecules Derived from Amino Acids (2026-08-06)

**`biochemie_pro/data/leh_ch22.js`, one node, `id: "L-22-3-1"`,
`topicKey: "amino-acid-derived-molecules"`.** Rank 17, ratio 4.5, covering all of §22.3
(A pp.816–824, seven subheadings) and joining Czech `6-3-1`, `6-3-2`, `6-3-3`.

**§9e's check was run first and PASSED — the first time it has.** Worth recording, because the
check only earns its place if it sometimes says "go ahead". The key holds three Czech nodes and
two of them (`6-3-2` heme biosynthesis, `6-3-3` porphyrin degradation) are direct matches for
this section's first two subheadings, so no re-keying was needed. **One honest qualification
went into `coverageNote` rather than being glossed:** `6-3-1` is about what porphyrin *proteins*
are, whose real depth partner is **§5.1 Oxygen-Binding Proteins — rank 1 of the entire queue at
ratio 17, still blocked as a topicKey secondary**. So this node deepens two of its three Czech
nodes squarely and the third only at its edges, and the node `6-3-1` actually wants does not
exist yet.

**What it adds.** The Czech nodes give three tidy outlines; Lehninger keeps them and hangs
medicine on them. The branch the Czech account omits: animals build δ-aminolevulinate from
**glycine + succinyl-CoA**, while plants, algae and most bacteria build it from **glutamate via
glutamyl-tRNA** — a tRNA appearing inside a small-molecule pathway, memorable precisely because
it looks misplaced. Then the clinical layer, entirely absent from Czech §6.3: the **porphyrias**
(acute intermittent, suspected in George III; the ferrochelatase deficiency where accumulated
protoporphyrin turns light into free-radical skin damage, treated with an afamelanotide
implant; and the uroporphyrinogen I form behind the vampire legends), **jaundice** with its
newborn phototherapy, and the genuine surprise that **heme degradation is not disposal** — the
CO released is a vasodilator, and bilirubin is the most abundant antioxidant in mammalian
tissue, so jaundice toxicity may simply be bilirubin exceeding available albumin. It then covers
four subjects Czech §6.3 never reaches: creatine and glutathione, D-amino acids as a bacterial
drug target, plant products from aromatic amino acids, the biological amines, and nitric oxide.

**A fourth interlock.** Glutathione peroxidase with its **selenocysteine** is the same enzyme
`L-19-1-1` named in the respiratory chain's ROS defence, met here from the synthetic side; and
heme synthesis consuming **succinyl-CoA** ties back to the citric acid cycle. Counting `L-17-2-1`'s
two, the depth layer now has four cross-references between its own nodes.

**The TOC drift is now a pattern, not an accident — treat `lehninger_toc.tsv` as a finding aid,
never as a citable source.** §13h found it displaced by an interleaved Box; here it is off by
one to two pages *throughout the section*: 'Glycine Is a Precursor' listed at 816 is on **817**,
'Creatine and Glutathione' at 820 is on **819**, 'Aromatic Amino Acids' at 822 is on **820**,
'Biological Amines' at 822 is on **821**, 'Arginine Is the Precursor' at 824 is on **822**.
Every location was re-derived by direct case-sensitive search. A second, subtler wrinkle found
here: **several figures sit one to three pages AFTER the text discussing them** (Fig. 22-31 is
on 823 while the amine text is on 821; Fig. 22-33 on 824 while the NO text is on 822), so a
figure citation and a content citation for the same subject can legitimately differ by pages —
do not "correct" one to match the other.

Citations: 12 total, **7 machine-verified OK, 0 ELSEWHERE**, 5 UNCHECKED and all five
hand-verified (A p.817 heme oxygenase/ferritin/CO; A p.818 jaundice/albumin/urobilin; A p.819
twice, porphyrias and the antioxidant/HO-isozyme material; A p.820 D-amino acids).
`biochemie_pro` now reports **215 topics (207 cz, 7 lehninger, 1 entity), 61 topicKeys**; audit
**64 OK, 0 ELSEWHERE, 27 UNCHECKED**, invariant 91 = 64 + 0 + 27. **8 of 61 topicKeys now join
more than one source.**

### 13j. The eighth node — `L-5-1-1`, §5.1 Oxygen-Binding Proteins (2026-08-07)

**`biochemie_pro/data/leh_ch5.js`, one node, `id: "L-5-1-1"`,
`topicKey: "oxygen-binding-proteins"`.** Rank 1 of `depth_queue.tsv`, ratio 17.0 — the single
thinnest place in the entire queue, and the one §9c flagged but could not resolve on its own.
Covers all of §5.1 end to end (A pp.148–164, every subheading plus Box 5-1) and joins Czech
`6-3-1`, the one row of Table 6.4 that is haemoglobin: function transport of O2, prosthetic
group heme Fe2+, valence change none.

**This node could not be written until a `topicKey` question was answered first, and it took
two decisions from the user to get there, asked together in the same turn.** §9c's own rule
gives a Lehninger section a key only if some Czech section's *primary* mapping points at it;
Czech 6.3 maps to `22.3,5.1`, so §22.3 took the key (`amino-acid-derived-molecules`, written as
`L-22-3-1`, §13i) and §5.1 — ratio 17, rank 1 — got nothing. §9c raised this in the same session
`L-22-3-1` was written and left it unresolved, along with two other things: whether the user
revises from the Czech nodes or the Lehninger ones (§2b), and — once §9e set the precedent — how
to apply it to the nine remaining secondaries. Both were put to the user at once at the start of
this session; the two answers were **"both layers, Czech primary"** and **"re-key per §9e"**,
and they turned out to point at the same node: the topic that is thinnest by page-ratio (Lehninger
§5.1) is also thin on the Czech side (`6-3-1` gives haemoglobin one table row), so it is exactly
where a Czech-primary reader benefits most from a Lehninger node existing at all.

**The §9e check, done first.** Before touching any data, the Czech nodes actually teaching
oxygen-binding content were located by keyword sweep across all 207 nodes (haemoglobin,
myoglobin, cooperativity, allosteric, 2,3-BPG and related terms), not assumed from
`topickey_assignment.json` alone. Two near-misses, both checked and both correctly left alone:
`2-2-4` (protein tertiary/quaternary structure) names myoglobin and haemoglobin only as examples
of alpha-helix-dominated globular proteins — a one-sentence mention, not a natural join, and it
stays on `protein-tertiary-quaternary`. `7-8-3` (glycolysis) names 2,3-bisphosphoglycerate 31
times — but every occurrence is phosphoglycerate mutase's regenerating "coenzyme" in one
glycolytic step; the molecule's role as haemoglobin's oxygen-affinity regulator appears nowhere
in it. That is not a mapping error — `7-8-3` correctly stays on `glycolysis` — but it is exactly
the shape of gap §9f's `lehNotes` exist for, so it became this session's one `lehNotes` entry
rather than a re-key.

**The re-key itself, following §9e's format exactly.** `6-3-1` moved from
`amino-acid-derived-molecules` to a new key `oxygen-binding-proteins` in both
`biochemie_pro/data/ch6.js` and both topickey JSON files, each edit carrying a `manual_note`
recording why and warning that `step4_topickeys.py` would silently revert it (same warning as
§9e's, same reason: the generator rebuilds from `master_map.tsv`, which is unchanged). `6-3-2`
and `6-3-3` (heme biosynthesis and porphyrin degradation) stay on `amino-acid-derived-molecules`
— §13i had already established those two, not `6-3-1`, are what `L-22-3-1` genuinely deepens.
`L-22-3-1`'s own `coverageNote` is updated to say so: it now joins two Czech nodes, not three,
and the paragraph explaining why is kept rather than deleted, because the sequence — flagged as
a gap, then filled two sessions later — is itself the demonstration that §9c's "topicKey may be
corrected later" caveat works in practice.

**What the node adds, once the constraint changes.** Czech `6-3-1`'s valence-change column
records a fact (haemoglobin: none) without explaining why it could not be otherwise. Lehninger
§5.1 supplies the reason first — Fe3+ does not bind oxygen at all, so the entire heme-in-a-globin
architecture exists to prevent that one oxidation state — and everything else follows from it:
the quantitative language of binding (Kd, P50) via myoglobin; a clean demonstration that a
protein is not a passive container for its prosthetic group, via the distal His and the
20,000-fold-to-40-fold carbon monoxide numbers; the T/R mechanism and Perutz's proposed chain of
events from one puckered porphyrin to a subunit interface; why a single binding site
mathematically cannot give a sigmoid curve, with the actual lung and tissue partial pressures
(13.3 and 4 kPa); the Hill coefficient and the trap in it (a measure of interaction, not a site
count, and always less than the true number); both cooperativity models with the book's own
admission that they are hard to distinguish experimentally; the Bohr effect down to the named
residue (His146) and the named salt bridge; 2,3-BPG's binding site, its altitude-adaptation
numbers, and fetal haemoglobin's weaker BPG affinity; and sickle cell anaemia's physical
mechanism — picking up from where Czech `2-2-1` already gives the Glu6Val substitution, not
repeating it. None of `6-3-1`'s own content is contradicted; its one table row is expanded, not
corrected, so no `lehNotes` entry was needed on the Czech side for this join (unlike the BPG gap
in `7-8-3`, which is a different Czech node entirely).

**Citation process.** Content was read from B's text layer end to end
(`_B_text.pkl`, pages 619–680). Every A page number was resolved by **direct search in A's own
OCR text**, never taken from `lehninger_toc.tsv` or from prose, per §16 — a purpose-built script
searched each intended quotation and figure/table/box label against A pp.144–170 individually,
with the earliest in-range page kept where a label appeared more than once. Two OCR traps bit
during this pass, both already named in principle by §13d/§16b but worth recording as fresh
instances: figure labels **FIGURE 5-3**, **FIGURE 5-16** and **FIGURE 5-17** could not be found
by either exact or OCR-tolerant search anywhere in A's text layer, so none of the three is cited
by label in this node — the material they illustrate is cited by content page instead; and **A's
OCR breaks subscripts**, rendering O2 as a zero-space-two and the Hill coefficient nH as `n8`, so
five probe phrases containing either symbol came back as false misses on the first pass before
being traced to this and confirmed present verbatim once the subscript was removed from the
probe. `verify_citations.py` afterward found this node's own citations **19 machine-verified OK,
0 ELSEWHERE, 1 UNCHECKED** (`points[2]`, on the globin family, carries no figure label or long
quotable phrase; hand-verified against A p.149 directly). The `lehNotes` entry on `7-8-3` is a
20th citation and verifies OK.

`biochemie_pro` now reports **216 topics (207 cz, 8 lehninger, 1 entity), 62 topicKeys**;
citation audit **90 OK, 0 ELSEWHERE, 29 UNCHECKED**, invariant 120 = 90 + 0 + 29 + 1 SKIP. **9 of
62 topicKeys now join more than one source.** `step5_check.py` reports all checks passing,
including its `lehNotes` negative tests against the now-six-note, five-node set.

### 13k. The ninth node — `L-8-3-1`, §8.3 Nucleic Acid Chemistry (2026-08-07): the first Lehninger-only depth node, and three checker bugs it exposed

**Rank 2 of the depth queue, ratio 16 — the second-thinnest place in the book, and the first node
with no Czech partner at all.** §2e has the evidence and the user's ruling; the short version is
that the §9e sweep found the Czech book teaches **none** of §8.3's subject matter — DNA
methylation, chemical synthesis and PCR return *no Czech node whatsoever*, and every apparent
"sequencing" hit is a false positive about protein or gene sequencing. Czech §4.1.5, which holds
the mapping, is about the **enzymatic degradation** of nucleic acids to uric acid and β-alanine —
a different subject, not a thinner treatment of the same one. So unlike rank 1 there was nothing
to move: the key `nucleic-acid-chemistry` exists with `nodes: []`, and this node stands alone.

**This is the distinction to carry forward, because §9c's "third case" only described half of it.**
A Lehninger section that is a *secondary* mapping can fail in two ways, and they need opposite
fixes:

| | the Czech node holding the mapping | fix |
|---|---|---|
| **rank 1's shape** | exists and genuinely teaches the subject, but lost the key to a competing primary | move the node (§9e), key joins two sources |
| **rank 2's shape** | does not teach the subject, and no other node does either | nothing to join — write it Lehninger-only, `nodes: []` |

Run the sweep before assuming which one you have.

**⚠️ A trap in `topickey_assignment.json` that cost a revert, 2026-08-07 — read before adding any
key.** Every id in that file is **`<czech chapter>|<czech section>`**, *not* the Lehninger section
the key points at. So filing Lehninger §8.3 under `"8|8.3"` looks obviously right and is
destructive: **`8|8.3` already belongs to CZECH §8.3, lipid biosynthesis, which holds nine nodes
(`8-3-1`…`8-3-9`) under `fatty-acid-biosynthesis`.** Writing there silently overwrote all nine.
Nothing downstream complained — the app data carries `topicKey` inline, so `step5_check.py` still
passed and the topic view still rendered correctly; only the index that *future* sessions and
`step4_topickeys.py` read was wrong. It was caught by reading `git diff` before committing, which
is the only reason it did not ship. **A Lehninger section that no Czech section points at is filed
under a `leh|` prefix instead** (`leh|8.3`), which cannot collide with the Czech numbering, with
`nodes: []` and `cz_pages: null` by design. The general rule: **that file is indexed by the Czech
book, so it has no natural slot for Lehninger-only material — give it a prefixed one, and diff
before you commit.**

**Content**: A pp.278–293 = B pp.1078–1122, all six subheadings plus Worked Examples 8-1/8-2 and
Box 8-1 — denaturation and melting, the nonenzymatic transformations (deamination, depurination,
UV photoproducts, oxidative damage), base methylation, automated chemical synthesis, PCR, and
sequencing from Sanger through Illumina reversible-terminator and PacBio SMRT.

**⚠️ The §5a organic-chemistry rule bites hardest here of any node so far**, because the
phosphoramidite cycle is pure synthetic chemistry. It was handled the §13g way — the cycle is
described by its **observable** (the coloured DMT group followed spectrophotometrically to count
how many chains actually extended) rather than as a reaction mechanism.

**Three separate `verify_citations.py` bugs surfaced while finishing this node, all of the same
family: the checker reporting its own limitation as a finding.** All three are fixed, and the
comments in the script record each case. This matters beyond this node — every count the checker
printed before 2026-08-07 was affected:

1. **First-probe short-circuit.** The verdict loop `break`ed on the first probe that resolved
   *anywhere*, so a weak probe could pre-empt a strong one. **BOX 8-1's own title lives inside the
   box graphic and is not in A's text layer**, so the string "Box 8-1" occurs only in the three
   *cross-references* to it (A pp.286, 328, 334); the label probe therefore reported
   `<-- FIX THE CITATION` against a citation to p.288 that was **correct**. A cross-reference says
   where the book *points at* a box, never where the box *is*. Now an OK from any probe outranks an
   ELSEWHERE from any other. This is the §16c caption-vs-cross-reference problem, and this is its
   fix.
2. **Apostrophes parsed as quote delimiters.** `QUOTED` treated `'` as an opening mark, so on
   English prose it spanned from one `'s` to the next and *manufactured* probes out of the node
   author's own words — `"'s unclaimed sections, per the user'"` was being searched for in
   Lehninger, where it will never appear. **Do not fix this by dropping single quotes**: measured
   here, that costs 12 real verifications (108 OK → 96), because single quotes *are* used as
   genuine book-quote delimiters elsewhere in the data. The discriminator is what precedes the
   mark — an opening quote follows a space or bracket, a possessive follows a letter.
3. **Cross-attributed quotes in multi-citation fields.** Quote probes are searched across the
   whole field while label probes use only the ±90-char window. On a long `coverageNote` carrying
   six citations, one quote gets offered to all six: the single quote proving Box 8-1 sits on
   p.288 was re-used to condemn the note's citations to p.289 and pp.294–296, neither of which is
   about the box. Now a second pass demotes any ELSEWHERE whose probe already proved a *different*
   citation in the same field — **demoted to UNCHECKED, never to OK**, because the page really was
   not verified and saying so is the honest outcome.

**Net effect on the audit: 107 OK / 1 ELSEWHERE / 37 UNCHECKED → 114 OK / 0 ELSEWHERE / 30
UNCHECKED.** Nothing was downgraded from OK; the gain is real verification, not a relaxed test.

**Every one of this node's citations is now verified.** Four rows that the checker could not probe
were hand-checked against A and all four were correct, then given a verbatim quote so they
self-verify from now on: the hypochromic passage (p.279), `“All known DNA methylases use
S-adenosylmethionine as a methyl group donor”` (p.283 — the plain search missed it only because
A's OCR hyphenates it across a line break), the 5-methylcytidine figure (p.283), and the Illumina
reversible-terminator method (p.291). The one remaining UNCHECKED row is the `coverageNote`'s
statement that §8.4 is *out of scope*; §8.4 = A pp.294–296 confirmed directly from
`lehninger_toc.tsv`.

`biochemie_pro` now reports **217 topics (207 cz, 9 lehninger, 1 entity), 63 topicKeys**, with
**9 of them joining more than one source** — unchanged by this node, deliberately, since
`nucleic-acid-chemistry` joins exactly one. `step5_check.py`: all checks pass.

### 13l. The tenth node — `L-25-1-1`, §25.1 DNA Replication (2026-08-07): the first §9e check that cost nothing, and the first node whose page range was *wrong in the index*

Rank 20, ratio 3.8, A pp.915–930, B pp.3200–3250, in
`biochemie_pro/data/leh_ch25.js`, joining Czech `4-1-3-1` and `4-1-3-2` through the
**pre-existing** `topicKey: "dna-replication"`. This is the first node into the
molecular-biology half of the book; everything before it was metabolism, membranes or
bioenergetics.

**The §9e two-minute check passed outright, and this is the first time it has cost nothing.**
`dna-replication` already existed and already held exactly `4-1-3-1` and `4-1-3-2` — which are
precisely the two Czech nodes that teach the subject. No key created, no node moved, no
`manual_note` needed in either `topickey_*.json`. Rank 17 passed the check too but only after
inspection; here the mapping was simply right. **Two of the eleven writable primaries have now
needed surgery (ranks 1 and 9) and two have not (ranks 17 and 20) — the check is worth its two
minutes, but it is not a foregone conclusion that it fails.**

**⚠️ `lehninger_B_toc.json`'s A range for this section is wrong at its start, and the error is
of a kind the file cannot flag.** The entry gives `page_a_print: 914` with
`a_confidence: "interpolated"`. A p.914 is the **chapter 25 opener** — chapter title, the
three-section contents list, and the chapter's introductory prose. §25.1's own first sentence,
*"Long before the structure of DNA was known"*, is on **A p.915**. The node therefore claims
pp.915–930 and the queue's 17-page span is really 16. Worth generalising: **an `interpolated`
A range can be off at either end by a whole page, and the cheapest way to find out is to search
A for the section's first subheading before writing anything.**

**B's page breaks do not line up with A's, and this bit me ten times in one pass.** Of 54
candidate quotes checked before writing, **ten sat on a different A page than B's layout
implied — every one off by exactly one.** All ten were corrected before being written down.
This is now a rule rather than an anecdote: **never derive an A page by scaling a B page.
Search A.** The measured landmark map for this section (subheadings, all 18 figures, all 4
tables) is reproducible with the probe script pattern in §16a.

**Four new OCR traps in A, all the same family as §13j's subscript trap — the checker or the
search reporting its own limitation as a finding.** Each can make a *correct* citation look
wrong:

| what A's OCR does | consequence |
|---|---|
| `Klenow` → `kienow` (lower-case L read as I) | the sentence naming the Klenow fragment is verbatim on p.920, yet a probe containing "Klenow" returns **nothing in the entire book** |
| directional arrows → unmapped replacement character | no quote containing `5′→3′` can ever match |
| roman `III` → `ill` (also `polC` → `po!c`, `dnaE` → `dnoe`) | `DNA polymerase III` is not a safe probe string |
| primes gain a stray space: `3′-hydroxyl` → `3' -hydroxyl` | defeated the first probe of the two-metal-ion sentence |

Every verbatim quote in this node was consequently chosen to contain **no prime, no arrow, no
subscript and no roman numeral**, and each was confirmed present on its cited page *before*
being written. Result: **46 citations, 46 OK, 0 ELSEWHERE, 0 UNCHECKED** — the first node with
no hand-check backlog at all.

**A fifth bug in `verify_citations.py`, and it is the apostrophe bug again in a new disguise
(§16a).** The guard `(?<![A-Za-z])` was added so a possessive `'s` could not open a quote. But a
possessive can follow a **digit** — `Table 25-1's 250 to 1,000 nucleotides per second` — and `1`
is not in `[A-Za-z]`, so that apostrophe was accepted as an opening delimiter. The regex then ran
from it to the next quote character in the field, which was the **opening mark of a real book
quote**, consuming it: the manufactured probe was `"s 250 to 1,000 nucleotides per second for
polymerase III, and the statement that"` and the genuine quote it ate —
`“The rate of movement of the replication fork in eukaryotes”`, verbatim on A p.928 — never
became a probe at all. Two correct citations were reported ELSEWHERE as a result. Fixed to
`(?<![A-Za-z0-9])`. Measured across the whole data set: **159 OK → 161, 32 UNCHECKED → 30,
ELSEWHERE 0 either way, nothing downgraded.** The same bug was already firing on **two older
nodes** without changing their verdict but fabricating their reason: `L-11-3-1` and `L-19-1-1`
read `probe not found even ±40 pages: 's helical-wheel diagram, fig. 11-38'` and
`'s complex i structure, fig. 19-10'` — text assembled out of the node author's own prose after
`Fig. 11-38's` and `Fig. 19-10's`. Both now read `no searchable phrase — verify by hand`, which
is what was actually true. **§13k's lesson holds and should now be treated as settled law: an
ELSEWHERE is a hypothesis. Both of this node's were the checker's fault, not the data's.**

**What the node is for, given that the Czech pair is genuinely good.** `4-1-3-1` and `4-1-3-2`
between them already have the polymerase I mechanism, both nuclease activities, nick translation,
the Klenow split, helicase/SSB/ligase with the full three-step ligase mechanism, the theta
structure, leading and lagging strands, Okazaki fragments and the replisome. **None of that is
restated.** The four things this node adds:

1. **The evidence, not the assertions.** Czech states semiconservative / single origin /
   bidirectional as bare facts. Meselson–Stahl 1957; Cairns's tritium autoradiographs (the source
   of the θ figure Czech prints); and — the good one — **Inman's denaturation mapping**, because a
   loop in a photograph *cannot* show a fixed start point, a circle having no landmarks. That
   needed a second experiment and Czech does not mention it.
2. **The fidelity budget as arithmetic.** Czech says "second proofreader" and stops. Lehninger
   gives three multiplying layers: base selection using **base-pair geometry**, not only hydrogen
   bonds (10⁴–10⁵) × proofreading, which works by a **kinetic pause**, is **not** the reverse
   reaction and costs **three high-energy bonds** (10²–10³) × mismatch repair = the observed
   10⁹–10¹⁰, i.e. one error per 1,000–10,000 copies of the whole chromosome.
3. **Two entire phases Czech does not contain** — initiation at `oriC` (the DnaA wrap introducing
   a *positive supercoil* whose torsional strain, not any enzyme, melts the DUE; two DnaB hexamers
   loaded back to back, which is where bidirectionality actually comes from; the Hda and
   Dam/SeqA once-per-cycle timers) and termination (the directional Ter–Tus trap, and catenanes,
   which no amount of synthesis can resolve because each circle is covalently closed).
4. **Eukaryotic replication**, absent from Czech entirely, justified by its own arithmetic: a fork
   twenty times slower means one origin would take >500 h per chromosome, hence 30,000–50,000
   origins, hence licensing.

**One `lehNote`, kind `conflict`, on `4-1-3-1` — the seventh in the data.** Czech states E. coli
has **three** DNA polymerases and that an in vivo function is known **only** for polymerase III.
Table 25-1 gives **five**; IV (`dinB`) and V (`umuC`) were identified in 1999, are translesion and
mutagenic, are the only two of the five with **no** proofreading exonuclease, and have
processivities of 1 and 6–8 against polymerase III's ≥500,000. Lehninger also assigns an in vivo
role to all five. A student answering "three" states something the current textbook contradicts —
that is §9f's bar. **Nothing else in the section met it**, deliberately: the other differences are
gaps this node fills and the topic view already surfaces, and a warning on every node is a warning
nobody reads.

**Two book-vs-book differences left unflagged and stated inside the points instead**, because a
reader who has both is not misled: Czech attributes the primer to RNA polymerase *and* primase
jointly where Lehninger says DnaG primase working with DnaB; and Czech's replisome has "probably
two polymerase III holoenzyme complexes" where Lehninger describes **one** holoenzyme carrying up
to **three** core sets. Czech is also explicitly named as **the better source for the ligase
mechanism**, which it gives in three steps and Lehninger compresses.

**One thing deliberately not resolved (rule: do not force a plausible answer).** A p.926 says the
replisome adds *"1,000 to 2,000 nucleotides to each strand (leading and lagging)"* and **gives no
time unit**. Table 25-1's 250–1,000 nucleotides/s and the eukaryotic fork being one-twentieth as
fast both imply *per second*, but the sentence does not say so — so the node cites the table and
the comparison and does not put a unit into the book's mouth.

`biochemie_pro` now reports **218 topics (207 cz, 10 lehninger, 1 entity), 63 topicKeys** — the
key count is **unchanged**, which is the point of a check that passes: `dna-replication` now joins
3 nodes across 2 books instead of 2 across 1, so the count of keys joining more than one source
rises from 9 to **10**. 7 lehNotes on 6 nodes. `step5_check.py`: all checks pass, negative tests
included.

---

## 14. Working locally — the local copy is the real one

Added 2026-08-06, at the user's request: *"注重于本地操作"*. Since the scan-exposure fix, the
working copy and the remote deliberately hold **different things**, and that split is now a
design decision rather than an accident. Read this before assuming the remote is the source of
truth.

### 14a. What is local-only, and why

| | on disk | tracked by git / on GitHub |
|---|---|---|
| the three apps (`biochemie_basic`, `biochemie_pro`, `PESB`) | ✅ | ✅ |
| `lehninger_index/` (TOC, A↔B map, master table, scripts) | ✅ | ✅ |
| `extracted_raw/` — 84 page scans + `ch1_3_summary.txt` | ✅ **117 MB** | ❌ removed 2026-08-06 |
| `extracted_full_ch*/`, `extracted_toc/` — 229 files | ✅ **341 MB** | ❌ ignored |
| `verify_crops/` — 16 files | ✅ **48 MB** | ❌ ignored |
| `lehninger_index/_B_text.pkl` — full-text search cache | ✅ 5.7 MB | ❌ ignored |
| the three source PDFs | ✅ | ❌ `*.pdf` ignored |

**Nothing was deleted to achieve this.** `git rm --cached` only stops git tracking a file; the
bytes stay in the working copy. So the evidence trail — every page scan the content was written
against — is fully intact locally and is simply not published any more. **If you clone this repo
fresh on another machine, you get the apps and the index but none of the scans.** That is
intended; re-extract them from the PDFs if they are ever needed elsewhere.

### 14b. Running the apps locally

The apps are static — no build step, no backend, no `npm install`. Two ways in:

**Just reading:** double-click, or open directly.

```
file:///C:/Users/Admin/Downloads/bio-state-exam/biochemie_basic/index.html
file:///C:/Users/Admin/Downloads/bio-state-exam/biochemie_pro/index.html
```

**Testing a change you just made — use a real server instead.** `HANDOFF.md` §9 records why:
the `file://` preview does not reliably re-execute scripts on repeat navigation to the same URL,
so `window.BIOCHEM.topics` can look correct while the rendered sidebar is still a stale DOM from
hours earlier, with no error and no visible signal that anything is wrong.

```bash
cd C:/Users/Admin/Downloads/bio-state-exam
python -m http.server 8000
# then http://localhost:8000/biochemie_pro/
```

This is also closer to how GitHub Pages actually serves the site.

### 14c. Checking the data before pushing — there is no `node` on this machine

CI runs `node tools/validate-data.js biochemie_basic biochemie_pro`, and `deploy` is
`needs: validate`, so a break there silently stops the site updating. **You cannot run that
locally — `node`, `deno` and `bun` are all absent (checked).** Use the Python equivalent, which
parses the validator with `esprima` to catch syntax errors and re-implements its checks against
the real data:

```bash
python "C:/Users/Admin/Downloads/bio-state-exam/lehninger_index/scripts/step5_check.py"
cat  "C:/Users/Admin/Downloads/bio-state-exam/lehninger_index/_step5_report.txt"
```

A clean run currently prints `ok biochemie_basic: 207 topics` and
`ok biochemie_pro: 208 topics (207 cz, 1 lehninger)`. It also runs negative tests, because a
check that never fails is not a check.

### 14d. Looking things up in Lehninger without opening a 1.1 GB PDF

`lehninger_index/scripts/locate.py` takes a phrase, searches **B**'s clean text layer, and
reports which Lehninger section it sits in plus the **printed page in A** to actually open.

```python
exec(open(r"C:\Users\Admin\Downloads\bio-state-exam\lehninger_index\scripts\locate.py",
          encoding="utf-8").read().split("if __name__")[0])
r = find("lipid raft")
```

Three things it handles that a naive search does not, each of which cost a wrong answer first:

- **Ligatures.** B renders `ff/fi/fl/ffi/ffl` as single glyphs on 66 % of pages, and `ft` as
  U+00D7 or U+019E on 19 %. A plain substring search silently returns "absent" for content that
  is plainly there. `locate.py` de-ligatures before indexing; **do not trust any "0 hits" claim
  from before 2026-08-06.**
- **Back matter.** Glossary and Index are 460 pages of a 1252-page file. Hits there are reported
  separately as `(outside chapters)` and are not evidence of coverage.
- **The A page.** B's page numbers are ebook-reflow artefacts and useless on paper.
  `page_a_print` is the number printed in the real book. The rule is
  `printed page = A's pdf page − 36`.

First run rebuilds `_B_text.pkl` (~60 s, 5.7 MB); after that it is instant. Delete the cache
freely — it is gitignored and rebuilds itself.

### 14e. Day-to-day git, given the split

The user does not operate git personally (§11) — commit, merge to `main` and push directly.
Two things to keep in mind now that local ≠ remote:

- **Never `git add -A` without looking.** It is safe *today* because `.gitignore` covers every
  scan folder with globs, but that safety is one new unmatched folder away from lapsing. Run
  `git status --short` and read it.
- **`.gitignore` does not retroactively untrack anything.** That is the exact mistake that
  published the scans in the first place: the rule `extracted_raw/*.png` was written *after* the
  files were committed, so it never applied to them and everyone assumed it had. For an
  already-tracked file you need `git rm --cached`.

---

## 15. Figures — the plan the user set, 2026-08-06

**Not started. This section is the brief, not a report.**

The user's instruction, verbatim: *"图片是从 `…8th(DavidL.Nelson,MichaelCox) (1).pdf` 取得，
你说直接从 `…8thedDavidLNel.pdf` 里找对照就行的，然后这个版本主要在本地运行就行."*

Three decisions in that sentence, all of which fit the machinery that already exists:

**1. Images come from A, not B.** §2 measured why and it is not close: A holds 1252 full-page
images at real print size; B's images are a median 43×28 px and only two are usable at all.
So a figure is cropped out of **A**.

**2. B is how you find it.** Search B's text layer for the figure caption with
`lehninger_index/scripts/locate.py`, convert to A's page with the step-2 anchor map
(**printed page = A pdf page − 36**), then crop from A. This is exactly the read-in-A /
search-in-B split §2(b) established, now used for pixels instead of prose.

**3. The figure-carrying build is local-only.** *"这个版本主要在本地运行就行."* That settles
the copyright and size questions before they are asked — cropped textbook figures are **not**
pushed, exactly like the page scans in §14a. So:

- figures go in a directory matched by `.gitignore` before the first one is written;
- `_site` (the Pages artifact) must not pick them up — check the `cp -r` list in
  `.github/workflows/pages.yml` at the time, not from memory;
- the node schema needs the figure to be **optional**, so a node renders without it. The public
  build then degrades to text and stays honest rather than showing broken images.

### 15a. Before writing the extractor

- **`coverage: "full"` currently over-claims on Lehninger nodes.** §13c flagged it: `L-3-4-1`
  says `"full"` while its `coverageNote` admits the figures were never read as images, only
  their captions. Cropping the figures is what would make `"full"` true. Fix the definition and
  the node together, not separately.
- **⚠️ Resolve the figure's page IN A, do not trust any written page number — see §16.** Three
  of six citations in the tryptophan card were wrong, one by 21 pages, and they came from §12b's
  prose. For cropping this is fatal rather than annoying: a wrong page silently crops the wrong
  figure and nothing downstream notices. **The robust method is to search A's own OCR for the
  caption** (`FIGURE 11-15` is found on printed 376 that way, with a usable rect), which is
  self-verifying and needs neither the anchors file nor the dossier.
- **But the anchors are not the weak link — §16c measured them, 688 of 713 land exactly.** This
  bullet used to end "anchors can be wrong too", implying the file is unreliable; it is not, and
  the offset is constant. The real failure mode is narrower and worth coding against: **an anchor
  cannot tell a caption from a cross-reference**, which is precisely what went wrong with
  `FIGURE 3-24` (recorded 104; the figure is on 92; the label legitimately appears on both).
  176 of 713 labels appear on more than one page. **Prefer the earliest occurrence inside the
  chapter's own page range**, then confirm the crop looks like a figure.
- **A's OCR mangles Greek letters, ligatures and line-break hyphens** — see §16b for all four
  traps. A caption search that does not handle them returns a silent zero.
- **Caption search does not always hit.** Measured 2026-08-06: `FIGURE 3-28` and `FIGURE 11-15`
  were found with rects; `FIGURE 3-6` on p.75 was not matched by a naive `search_for`. Expect to
  fall back to rendering the whole page when the caption cannot be located.
- **PyMuPDF renders a page region directly** — `page.get_pixmap(clip=fitz.Rect(...), dpi=…)`.
  `HANDOFF.md` §9b already documents the crop-and-upscale pattern used to read printed numbers
  off a scan; the same call produces a figure crop. Nothing new needs installing.

---

## 16. ⚠️ Page citations were wrong 3 times out of 6 — verify them, never copy them

**Found 2026-08-06, right after the tryptophan card shipped.** A spot check of six `A p.N`
citations inside `E-tryptophan` found **three wrong**:

| citation | the card said | actually on |
|---|---|---|
| `FIGURE 3-6` | A p.73 | **A p.75** |
| "…more polar than phenylalanine…" | A p.72–73 | **A p.75** |
| `FIGURE 11-15` | A p.396–397 | **A p.375–376** — off by 21 pages |

**Every quoted sentence was accurate. Only the page numbers were wrong.** That is the dangerous
shape of error: nothing about the text reads as suspect, so it survives any review that checks
whether the content is *true* rather than whether the *pointer* is.

**Root cause — and it is not "the anchors file is unreliable".** The anchors were right;
`lehninger_AB_anchors.json` puts `FIGURE 3-6` on printed 75, which is correct. The wrong numbers
came from **§12b's dossier prose**, written earlier, never checked against A, then copied into
the card. So:

> **Never take an A page number from prose — including from this handoff. Look it up in A.**

This also cleared an earlier scare: the `−36` offset was briefly suspected of drifting, because
pages that "should" have carried a figure did not. **The offset is constant at −36** — re-measured
on 23 sample pages spanning pdf 60→1100, every one agreeing. The pages cited were wrong, not the
offset.

**Why this was worth stopping the figure work for:** §15 plans to *crop figures* from these
pages. A wrong page number there silently crops the wrong content into the app, and nothing
downstream would notice. Trustworthy citations are a prerequisite for figures, not a detour.

### 16a. `scripts/verify_citations.py` — run it after writing any node

Checks every `A p.N` in the app data against what that page of A actually contains, using the
quoted text or the figure label in the citation as the probe. Writes
`lehninger_index/_citation_audit.txt`.

```bash
python lehninger_index/scripts/verify_citations.py
```

Three verdicts, and the middle one is the whole point:

- **OK** — probe found inside the cited range.
- **ELSEWHERE** — the quote is real but sits on a different page. **Fix the citation, not the
  quote.** This is the verdict that would have caught all three errors above.
- **UNCHECKED** — no phrase distinctive enough to search on, usually a broad range like
  `A p.71–79, §3.1` with no quotation. Reported honestly rather than passed silently; these
  still need a human.

Current state (2026-08-06, seven Lehninger nodes + one card): **91 citations — 64
machine-verified OK, 0 ELSEWHERE, 27 UNCHECKED**, and the unchecked ones were checked by hand
and all hold. (Was 20 citations when only `L-3-4-1` and `E-tryptophan` existed.)

**⚠️ This tool has now silently under-reported twice, in two different ways. Both are fixed, and
the pattern is worth recognising before trusting any run.**

1. **`a0a825c` — it read only `chains[].src`,** never the inline prose where a section node
   writes its citations, so every citation in the only Lehninger node then existing was skipped
   while the report printed a confident clean run. See the paragraph below.
2. **§13f (2026-08-06) — its dedupe key discarded the array index.** `path.split("[")[0]` mapped
   `points[1]` and `points[4]` both to `"points"`, so **a node citing the same page from two
   different points had the second one silently dropped**. `L-1-3-1` wrote 9 citations and the
   audit printed 6, with no warning. Fixed to `path.rsplit(".", 1)[0]`, which keeps the index
   while still collapsing an `en`/`cn` pair as originally intended.

**Both bugs shared one signature: the printed total was smaller than the number of citations
actually in the data, and nothing said so.** So count them independently before believing any
clean run. The invariant that actually holds is **grep count == OK + ELSEWHERE + UNCHECKED**:

```bash
grep -oE "A pp?\.[0-9]" biochemie_pro/data/*.js | wc -l   # 91
grep "^OK .* | ELSEWHERE" lehninger_index/_citation_audit.txt   # OK 64 | ELSEWHERE 0 | UNCHECKED 27
```

**Do not compare against the report's own `found N citations` line** — it read 56 against a grep
of 55 the first time this was tried, which looks exactly like the bug it is meant to detect. The
discrepancy is benign: that line also counts `chains[].src` entries carrying no `A p.N` at all
(here one, `CZ §4.2.4`), which are then reported as `SKIP`. The three verdict counts exclude
them and are the number to check. One further caveat, so a future mismatch is not misdiagnosed:
grep counts an `en`/`cn` pair twice while the checker de-duplicates it to one row, which happens
not to bite today only because the Chinese halves write the page as `A 第 94 页`, a form the grep
pattern does not match.

**Known structural gaps, reported honestly rather than fixed silently:** the label regex
recognises `FIGURE`, `TABLE` and `Box` but **not `Worked Example`**, so any Worked Example
citation is `UNCHECKED` by construction (three such in `L-1-3-1`); and a probe phrase split
across an OCR line break will not match, which is why `L-1-3-1`'s feedback-inhibition citation
reads UNCHECKED though the text is verbatim on the cited page. Teaching the regex about
`Worked Example` is an easy improvement whenever this is next touched.

**⚠️ That count was 11 until 2026-08-06, because the checker was only reading half the data —
fixed in `a0a825c`, and the failure is worth understanding before trusting any similar tool.**
Citations occur in two shapes. `E-tryptophan` puts them in a dedicated `chains[].steps[].src`
field; `L-3-4-1` writes them inline in its own prose (`coverageNote`, `points[].en` — *"the
fragmentation table (Table 3-6, A p.92)…"*). The collection loop read only `src`, **despite its
own comment saying citations live in prose too** — the comment described the intent, the code
implemented half of it. So every citation in the only Lehninger node that exists was skipped,
while the report printed a confident `found 11 citations` and a clean `OK 6 | ELSEWHERE 0`.

> **A checker that silently covers part of its input is worse than no checker**, because the
> clean run gets quoted as evidence — §16 was written on the strength of exactly that run.

It now walks every string field of every node for an inline `A p.N` and names the field in the
report (`A p.94  points[7].en`), so a finding says which line to edit. The Chinese half of a
bilingual pair writes *"A 第 94 页"*, which the `A p.N` regex does not match, so an en/cn pair
yields one row rather than two — no dedupe needed, but do not "fix" that by matching the Chinese
form without adding one.

**All six of `L-3-4-1`'s citations came back OK** once they were actually checked (Table 3-6 →
A p.92, Fig. 3-28 → A p.94, Fig. 3-29 → A p.95, each confirmed against A's own text layer). So
this was a hole in the tooling, not a second round of §16's content errors.

### 16c. The −36 offset and the anchor file — both re-measured 2026-08-06, both sound

§15a told the next person to distrust `lehninger_AB_anchors.json` and resolve every figure page
by searching A directly. That caution was reasonable but the underlying worry is now measured
and does not hold up — which matters, because it was one of the things blocking §15.

| what was checked | how | result |
|---|---|---|
| the **−36 offset** | read the folio number printed on A's own pages | of 717 pages where a folio was legible, **554 agree exactly** with `printed = pdf page − 36`; the rest are scattered OCR misreads (`−1020`, `−943`, `−76` — figure numbers and data, not folios), **no competing offset drew more than 3 votes** |
| the **713 anchors** | search A's text for each anchor's own label near its claimed page | **688 land exactly on the claimed page.** 22 labels not found within ±8 pages, 3 off by −2/+1/+4 |

So the anchors are ~99 % accurate where they resolve at all, and the offset is genuinely
constant. **`FIGURE 3-24` — the one §13c caught — is still wrong**, and its failure mode is now
named: the label appears on printed **92, 104, 105 and 844**, the anchor recorded 104, and the
figure itself is on 92 (3-25 is on 92, 3-26 and 3-27 on 93). **The anchors do not distinguish a
caption from a cross-reference.** In the first sweep 176 of 713 labels appeared on more than one
page, so this is the failure to guard against — not drift, not a bad offset. When cropping,
prefer the *earliest* occurrence within the chapter's own page range.

**⚠️ The one trap that actually bit, twice, in one session: 0-based vs 1-based.**
`printed = pdf page − 36` is written for the **1-based page number a PDF viewer shows**.
PyMuPDF's `doc[i]` is **0-based**, so in code the rule is `printed = doc_index − 35`.
`verify_citations.py` gets this right (`doc[printed + 36 - 1]`). A probe written during this
session used `doc[i]` with `−36`, and reported two of `L-3-4-1`'s three citations as off by one
— **three false errors, nearly written into this file as real ones.** Both statements of the
rule are correct; only one of them is correct *for your index*. State which you mean.

`lehninger_index/_A_text.pkl` (5.3 MB, ~17 s to build, gitignored like `_B_text.pkl`) now caches
A's de-ligatured text, so any of the above re-runs in seconds.

### 16b. Four OCR realities the checker had to learn

Each was found by the checker reporting a **false negative** on a citation that was in fact
correct. Any future tool that matches text against A needs all four:

| trap | what A's OCR actually produces |
|---|---|
| ligatures | `ff`/`fi`/`fl` as single glyphs; **`ft` as `×` (U+00D7) or `ƞ`** — the same bug as `locate.py` |
| line-break hyphenation | `"sig- nificantly"`, `"trypto- phan"` — rejoin before matching |
| **Greek letters do not survive at all** | β reads as `/3`, `f3`, `,B` or `13`; α as `a`. `"in β strands of membrane proteins"` — verbatim on p.375 — looked absent from the entire book |
| ellipsis in a quote | `"A…B"` is not contiguous text; split on the ellipsis and require every fragment |

The Greek one is the nastiest, because β and α are everywhere in biochemistry and the failure is
always a silent zero-hit rather than an error.
