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

**§9 step 6 is under way — nineteen Lehninger nodes now exist, the depth queue's ready-to-write
primaries are EXHAUSTED, and the citation backlog is CLEARED: 352 OK / 0 ELSEWHERE / 0 UNCHECKED
(§13o).** Every `A p.N` in the app data now self-verifies on every run. **The most recent node is
`L-26-2-1` (rank 16, §26.2 RNA processing), decided in §9m and written in §13v**, preceded by
`L-8-2-1` (rank 15, §9l/§13u) and `L-2-2-1` (rank 13, §9k/§13t). All three resolved by reusing the
primary's key and changing no data. **Read §9m's last two bullets before writing the next node**:
a book quote containing a prime mark (`2'`, `3'`, `5'`) breaks `verify_citations.py`'s own quote
regex when wrapped whole in its delimiters — paraphrase instead and quote a short prime-free
phrase — and a `coverageNote` fix that quotes book text with double quotes inside a
double-quoted JS string silently breaks the parse. **Run `esprima.parseScript()` on the file
immediately after any such edit, before running the citation checker.** `L-3-3-1` (§13n, added 2026-08-07) took rank 18, the last of them,
and also closed the `2-2-6` `cnNote` error that §6a flagged and §2c deferred — the Chinese notes
were finally opened and topic 八 verified at both ends. Every remaining rank needs a `topicKey`
decision first (§9c, §9e), and §13m added a third possible outcome to that check. **The first of
those decisions has been taken AND written: rank 3, §6.4 Examples of Enzymatic Reactions, reuses
`enzyme-mechanism` and re-keys nothing — decision in §9g, node `L-6-4-1` in §13p, the highest
ratio in the whole queue and the first node to clear its citation audit on the first run.**
`L-23-2-1` in
`biochemie_pro/data/leh_ch23.js` (§13m, added 2026-08-07) covers §23.2 tissue-specific metabolism
— the organ axis the Czech book never uses — and joins Czech `10-10`. **§13m is the most
important one to read of the whole 13-series**, because it fixed two bugs in
`verify_citations.py` that had been inflating every audit ever run: one made the checker verify a
DIFFERENT citation than the row was about and report OK, the other condemned seven correct
citations in `L-11-3-1`. Any audit total quoted in this file from before 2026-08-07 is inflated —
re-run rather than compare. `L-25-1-1` in
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
(`amino-acid-derived-molecules`), §5.1 got nothing. **All three are now resolved, by three
different routes — rank 1 §13j, rank 2 §2e, rank 3 §9g.**

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
| 7 | 23.2 Tissue-Specific Metabolism | 7.3 | `tissue-specific-metabolism` | ✅ **done — `L-23-2-1`** |
| 9 | 17.2 Oxidation of Fatty Acids | 6.5 | `fatty-acid-oxidation` | ✅ **done — `L-17-2-1`** |
| 12 | 1.3 Physical Foundations | 5.0 | `bioenergetics-basics` | ✅ **done — `L-1-3-1`** |
| 14 | 3.4 Primary Structure | 5.0 | `protein-primary-structure` | ✅ **done — `L-3-4-1`** |
| 17 | 22.3 Molecules Derived from Amino Acids | 4.5 | `amino-acid-derived-molecules` | ✅ **done — `L-22-3-1`** |
| 18 | 3.3 Working with Proteins | 4.0 | `working-with-proteins` | ✅ **done — `L-3-3-1`** |
| 20 | 25.1 DNA Replication | 3.8 | `dna-replication` | ✅ **done — `L-25-1-1`** |
| 3 | 6.4 Examples of Enzymatic Reactions | 11.0 | `enzyme-mechanism` — **not a primary**, added to this table by the §9g decision | ✅ **done — `L-6-4-1`** |
| 8 | 16.2 Reactions of the Citric Acid Cycle | 7.2 | `citric-acid-cycle` — **not a primary**, key CREATED and four Czech nodes moved by the §9h decision | ✅ **done — `L-16-2-1`** |
| 10 | 19.2 ATP Synthesis | 5.5 | `respiratory-chain` — **not a primary**, added to this table by the §9i decision | ✅ **done — `L-19-2-1`** |
| 11 | 11.2 Membrane Dynamics | 5.3 | `membrane-architecture` — **not a primary**, added to this table by the §9j decision | ✅ **done — `L-11-2-1`** |
| 13 | 2.2 Ionization of Water, Weak Acids, and Weak Bases | 5.0 | `amino-acids` — **not a primary**, added to this table by the §9k decision | ✅ **done — `L-2-2-1`** |
| 15 | 8.2 Nucleic Acid Structure | 5.0 | `nucleotides` — **not a primary**, added to this table by the §9l decision | ✅ **done — `L-8-2-1`** |
| 16 | 26.2 RNA Processing | 4.9 | `transcription` — **not a primary**, added to this table by the §9m decision | ✅ **done — `L-26-2-1`** |

**Rank 19 is the only secondary still without a key.** Six of the seven that were in that group
have since left it by the §9g route — the Czech section's *primary* key was found to fit the
secondary section too, so nothing was created and nothing moved: rank 3 (§6.4, §9g), rank 10
(§19.2, §9i), rank 11 (§11.2, §9j), rank 13 (§2.2, §9k), rank 15 (§8.2, §9l) and rank 16 (§26.2,
§9m). The odd one out, rank 8 (§16.2, §9h), is the only case so far that needed the opposite: a
new key **and** four Czech nodes moved, because the inherited key described none of them. **Rank 2 (§8.3) left that
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
**Ranks 7 and 18 are both done, and this table is now EMPTY of ready-to-write primaries.**
`L-3-3-1` (§13n) took rank 18 (§3.3 working with proteins) and, as predicted here, that was the
natural moment to fix `2-2-6`'s `cnNote` — done, with the notes pages actually opened and read as
images rather than guessed. Rank 7 (§23.2 tissue-specific metabolism) is done too (`L-23-2-1`,
§13m, 2026-08-07); its §9e
check produced a third outcome — no Czech node teaches metabolism by organ at all, while the
material is scattered across pathway nodes that must KEEP their own keys — and the reasoning for
not re-keying them is in §13m.

**What is left is no longer a queue pick.** Every remaining rank above needs the `topicKey`
decision described below, and the two standing alternatives are (a) the **entity cards** — `pro`'s
headline feature, still one card, with a finished tryptophan dossier sitting unused in §12 — and
(b) **auditing the Czech layer**, whose one known error has just been closed but which has never
been checked as a whole. See the `Start here` block for the current recommendation.

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

### 9g. Rank 3 (§6.4) — the `topicKey` decision: reuse `enzyme-mechanism`, re-key nothing (2026-08-07)

**The decision: `L-6-4-1` was written with `topicKey: "enzyme-mechanism"`, joining Czech
`3-6` — see §13p for the node itself. No new key is created, no Czech node moves, and no `manual_note` is needed — so
`step4_topickeys.py` cannot revert this one.** Of the nine ranks still needing a decision, this
is the only one so far that costs no hand edit to the generated files.

**Why it is a decision at all.** §9c: `topicKey` is a slug for the **primary** (first) Lehninger
section of a Czech section's mapping. Czech §3.6 maps to `6.2,6.4`; §6.2 took the key
`enzyme-mechanism`, and §6.4 — rank 3, ratio 11, the highest remaining in the queue — got
nothing. Looking §6.4 up in `topickey_assignment.json` therefore returns no key, which is exactly
the "secondary" case §9c warns about.

**The rank 1 precedent was considered and does not apply.** For §5.1 the user chose to create a
new key and move the Czech node, because the key that held it (`amino-acid-derived-molecules`)
**misdescribed** it — an oxygen-binding node filed under amino-acid derivatives. Here the
existing key describes its node exactly: Czech `3-6` is titled *Mechanismus působení enzymů*,
"Mechanism of enzyme action". Creating `enzymatic-reaction-examples` and moving `3-6` into it
would leave `enzyme-mechanism` empty and misfile the one node that is genuinely about enzyme
mechanism; creating it and leaving `3-6` where it is would throw away a real join. **Reusing the
primary's key is the right move when the primary's key already fits the same Czech node — which
is the case whenever both mapped sections deepen one node's material rather than two.**

**The §9e two-minute check, run against the app data (not the index files):**

| | |
|---|---|
| nodes under `enzyme-mechanism` | exactly one, Czech `3-6` |
| is it a stub? | **no** — 12 points, 7 terms, 5 quiz items, a full oral answer |
| does it teach §6.4's subject? | **yes**, and it names §6.4's own first example: covalent catalysis is taught *through chymotrypsin*, acetyl-enzyme and all |
| rank 9's failure mode (substantive nodes hiding under another key)? | no |
| rank 2's failure mode (nothing teaches it)? | no |

**It is 13m's third outcome for the worked examples only, and the same ruling applies.** The four
examples §6.4 works through are all in the Czech book, but as *pathway steps and drug classes*,
in nodes correctly keyed to their own subjects:

| Czech node | its key | what it holds that §6.4 deepens |
|---|---|---|
| `3-2` | `enzymes-introduction` | metalloenzymes; Mn²⁺ named for hexokinase; the three roles of a metal ion, one of which is "part of the active centre" — the enolase subheading's whole subject |
| `5-1` | `protein-targeting-and-degradation` | serine proteases as a mechanism class, Tab. 5.1, the chymotrypsinogen → π/δ/α cascade |
| `6-1-1` | `bioenergetics-and-thermodynamics` | the hexokinase reaction as *the* worked example of energetic coupling |
| `7-8-1`, `7-8-3` | `glycolysis` | hexokinase/glucokinase and the enolase dehydration, as glycolytic steps |

**Move none of them.** Each teaches its own subject and is keyed correctly, and `glycolysis` is a
working join. Cross-reference by hand inside `L-6-4-1`, naming the Czech node each point stands
next to, exactly as `L-23-2-1` does.

**No future collision.** §6.2 "How Enzymes Work" — the section that owns the key — sits at
**rank 59 of 85, ratio 1.9**, because Czech §3.2 and §3.6 already allocate it 5.3 pages. It is
unlikely ever to be written; if it is, it lands on the same key and the topic view holds three
nodes, which is the feature working, not a clash.

#### Measured for the writing session, so it is not re-derived

- **§6.4 = A pp. 203–213, B pp. 823–852.** The TOC calls the A range `interpolated`, but it is
  **correct at both ends** this time: the §6.4 heading is physically on A p.203, immediately
  below SUMMARY 6.3 on the same page, and SUMMARY 6.4 is on A p.213, with §6.5 opening further
  down that same page. Checked per §13l's rule, first subheading and SUMMARY both.
- ⚠️ **A fifth OCR trap in A, new here: the word SUMMARY can break apart.** A p.213 reads
  `sum ma ry 6.4 examples of enzymatic reactions`, so a probe for the word summary followed by
  the section number finds **0 hits on the very page that carries it**. Pages 188 and 223 render
  the equivalent headings intact, so this is per-page OCR noise rather than a convention.
  **Locate a SUMMARY by its section title, never by the word itself.**
- **The five subheadings, with the A page each actually starts on** — measured, and the TOC's
  per-subheading allocation drifts at the end: chymotrypsin p.204; HIV protease p.208; hexokinase
  induced fit p.209; enolase metal ions p.210; antibiotics p.210, where the TOC says 211.
- **SUMMARY 6.4 in full**, four bullets, verbatim from A p.213 — this is both the section's scope
  and four ready-made citation probes: chymotrypsin is a serine protease with a well-understood
  mechanism, featuring general acid-base catalysis, covalent catalysis, and transition-state
  stabilization; hexokinase provides an excellent example of induced fit as a means of using
  substrate binding energy; the enolase reaction proceeds via metal ion catalysis; understanding
  enzyme mechanism allows for the development of drugs to inhibit enzyme action.
- **Lysozyme is NOT in §6.4 of the 8th edition.** The subheadings are chymotrypsin, HIV protease,
  hexokinase, enolase, antibiotics. Anyone who remembers a lysozyme mechanism here is remembering
  an earlier edition — the reason the subheadings were listed from `lehninger_B_toc.json` rather
  than recalled.
- **What the Czech layer does not have at all**, counted over every file in
  `biochemie_pro/data/`: `transition state` 0 hits, penicillin 0, HIV protease 0, lysozyme 0 in
  either spelling. The transition-state framing, the HIV-protease subheading and the β-lactam
  subheading are therefore genuine gaps, not restatements.

#### Two things to watch while writing it

- **This is the most mechanism-heavy section taken from the queue so far**, and §5's rule bites
  hardest here: acyl-enzyme intermediates, the oxyanion hole, tetrahedral intermediates,
  transition-state stabilisation. Write it from the bench-visible end — chymotrypsin's burst
  kinetics, the bell-shaped pH-rate profile in Fig. 6-26 on A p.205, hexokinase physically
  closing around glucose, penicillin being a drug that works *because* of a mechanism.
- **One `lehNote` candidate, undecided until the section is read end to end.** `3-6` closes by
  deriving inhibition from induced fit: only a true substrate has affinity enough to force the
  conformational change, so molecules that bind without evoking it act as inhibitors. Lehninger's
  frame is complementarity to the **transition state**, not to the substrate. Whether that gap
  clears §9f's bar — would revising from `3-6` alone mislead in an exam? — is a judgement to make
  with the section open, not now.

### 9h. Rank 8 (§16.2) — the `topicKey` decision: a new key `citric-acid-cycle`, and four Czech nodes moved (2026-08-07)

**The decision: `L-16-2-1` is to be written with `topicKey: "citric-acid-cycle"`, a key created
for it. Czech `6-2-2-1`, `6-2-2-2` and `6-2-2-3` were moved into it; `6-2-2-4` was moved to the
existing `intermediary-metabolism-hub`; `acetyl-coa-production` is now EMPTY by design.** This is
rank 1's remedy applied a second time, and unlike §9g it does cost hand edits — ⚠️ **all four are
hand edits that `step4_topickeys.py` would silently revert**, and both `topickey_*.json` files
carry a `manual_note` saying so.

**The §9e check found rank 1's failure mode and rank 9's at the same time, which is new.** Czech
§6.2.2 maps to `16.1,16.2,16.4`, so the generator built the key from the primary §16.1 and named
it `acetyl-coa-production`. That key then held four nodes, and **not one of them teaches acetyl-CoA
production** — all four are titled "The citrate cycle — …". Meanwhile the Czech book *does* teach
§16.1's material perfectly well, in `7-8-5`, the pyruvate dehydrogenase complex on p.168, which
sits under `fates-of-pyruvate` alongside `7-8-4`. So the key was misdescribing everything it held
while the thing it was named for lived somewhere else, correctly keyed.

**The split was made by subject, following §9e's precedent** (where `8-4-4-1` stayed on
`fat-mobilization` while `8-4-4-2/3/4` moved). The match is unusually clean — Lehninger's
subheadings and the Czech nodes line up one for one:

| Lehninger | its subheadings | Czech node now under it |
|---|---|---|
| **§16.2** Reactions of the Citric Acid Cycle | the sequence makes chemical sense; the cycle has eight steps; the energy of oxidations is efficiently conserved | `6-2-2-1` (overview, citrate synthase), `6-2-2-2` (isomerisation, the two oxidative decarboxylations), `6-2-2-3` (substrate-level phosphorylation, oxaloacetate regeneration, the ATP balance) |
| **§16.3** The Hub of Intermediary Metabolism | catabolic and anabolic roles; anaplerotic reactions replenish intermediates; **biotin in pyruvate carboxylase** | `6-2-2-4` (biosynthetic role, anaplerotic reactions, **pyruvate carboxylase with biotin**) — joins `10-11`, which was already there |

**`7-8-5` was NOT moved, and that is deliberate** (§13m's rule). `fates-of-pyruvate` is an accurate
key holding two nodes that belong together, and breaking it to fill an empty key would be exactly
the bad trade §13m warns about. **The consequence for rank 45 (§16.1, ratio 2.4): reuse
`fates-of-pyruvate` per the §9g pattern rather than reviving `acetyl-coa-production`.** The empty
key is left in the assignment file with a `manual_note` explaining why, in the same spirit as
`nucleic-acid-chemistry` (§2e).

**Net effect on the counts: none.** One key created, one emptied — the app data still carries 63
distinct `topicKey`s, and the emptied key simply stops appearing.

#### Measured for the writing session

- **§16.2 = A pp.578–589**, B pp.2103–2133. The TOC calls the A range `interpolated` and it is
  **correct at both ends**: SUMMARY 16.1 and the §16.2 heading are both on A p.578, SUMMARY 16.2
  is on A p.589, and §16.3 opens on A p.590.
- **Both of the first two subheadings are on A p.580**, not 579–580 as the TOC allocates.
- ⚠️ **The first subheading cannot be probed in full.** "the sequence of reactions in the citric
  acid cycle" and the words chemical sense are each found on A p.580, but the whole subheading as
  written is not — something between them is mangled in A's OCR. Probe with a fragment. The word
  SUMMARY, by contrast, is intact throughout chapter 16, so the `sum ma ry` break recorded in §13p
  really is per-page noise rather than a convention.
- **What the Czech nodes already have, so the depth node does not restate it**: all nine steps with
  EC numbers and cofactors from Tab. 6.3, citrate synthase as a regulatory enzyme, aconitase's
  dehydration-rehydration, the two oxidative decarboxylations, succinyl-CoA synthetase making GTP,
  covalently bound FAD in succinate dehydrogenase, and the 12 ATP per acetyl-CoA / 38 ATP per
  glucose bookkeeping. The Czech coverage here is **strong**, so expect this node to be narrower
  than §6.4's — the depth is in the chemical logic of why the sequence is what it is, the
  stereochemical point about citrate being prochiral, and the modern regulation and metabolon
  material, not in the step list.

### 9i. Rank 10 (§19.2) — the `topicKey` decision: reuse `respiratory-chain`, change nothing (2026-08-07)

**The decision: `L-19-2-1` takes `topicKey: "respiratory-chain"`, joining the five Czech nodes
`6-2-4-1` … `6-2-4-5` and sitting alongside `L-19-1-1`, which is already there. Nothing is
created, nothing moves, no `manual_note` is needed.** This is the §9g pattern for the second time,
and it is even cleaner than §6.4's, because the key **already joins both books**.

**The §9e check.** Czech §6.2.4 maps to `19.1,19.2,19.3`; the primary §19.1 created
`respiratory-chain`. So §19.2 has no key of its own — the standard secondary case. But the key
holds the nodes that teach §19.2's subject, because the Czech book treats the chain and ATP
synthase as **one section**: `6-2-4-5` is titled *Complex V (ATP synthase) and the mechanism of
aerobic phosphorylation* and gives the F1 and Fo subunit composition, the proton flow with the
gradient, and — this is the important part — the claim that **ATP stays bound at the active site
until protons passing through Fo change that site's conformation and release it**. That is Boyer's
binding-change idea, stated correctly. So there is no misdescription to fix and no scattered
material to gather.

**Splitting `6-2-4-5` into a new `atp-synthesis` key was considered and rejected.** It would have
been the §9e/§9h move — split a Czech section by subject — but the two situations differ in the
way that matters: there, the key *misdescribed* the nodes it held; here it describes them well,
because Complex V is part of the same apparatus in the Czech book's own framing. Splitting would
also make the "Same topic" strip **less** useful, not more: a reader on `6-2-4-5` currently sees
both depth nodes, the chain and the synthase, which is the correct pairing for a chemiosmotic
answer. §13m's rule applies — do not break a working join to tidy a name.

#### Measured for the writing session, plus a correction to the index

- ⚠️ **§19.2 = A pp.674–686, not 675–686 — the TOC is wrong at the START by one page.** The §19.2
  heading is physically on A p.674, below SUMMARY 19.1 on the same page, and SUMMARY 19.2 is on
  A p.686 with §19.3 opening further down. B pp.2408–2447. This is the second interpolated range
  found wrong at its start, after §25.1 in §13l.
- ⚠️ **A p.674's OCR is unusually bad** — the page contains `gi.emiosmotic`, `jeleterious`,
  `1nderstanding`, `3ynthesis` and `fl.ow` in a single screen. **Do not build probes from that
  page**; cite it only where a figure label or a later page carries the same claim.
- ⚠️ **A third variant of the broken SUMMARY heading.** §13p recorded `sum ma ry 6.4` on A p.213;
  p.674 reads `summa ry 19. 1` — the break falls in a different place AND the section number
  itself is split. Treat the whole heading as unprobeable and locate a SUMMARY by the words that
  follow it.
- **What `6-2-4-5` already has, so the node does not restate it**: Complex V as a phosphorylation
  rather than an oxidoreduction complex, protons moving *with* the gradient back into the matrix,
  the F1 composition (α3β3 plus δ, γ, ε) and Fo (a plus b2), the +30.5 kJ/mol figure, the
  binding-change claim, and the 6 H+ → about 3 ATP / 4 H+ → about 2 ATP bookkeeping.
- **Where the depth is likely to be**, from the subheading list and a first pass: the chemiosmotic
  model as a testable hypothesis rather than a diagram; rotational catalysis and the fact that the
  rotation was **watched directly**; the three β-subunit conformations from the crystal structure;
  the c-ring stoichiometry and why H+/ATP need not be an integer; uncouplers; and the two NADH
  **shuttles**, which are what make the ATP total a range rather than a number — the direct
  continuation of the `lehNote` written on `6-2-2-3` in §13q.

### 9j. Rank 11 (§11.2) — the `topicKey` decision: reuse `membrane-architecture`, change nothing (2026-08-07)

**The decision: `L-11-2-1` takes `topicKey: "membrane-architecture"`, joining Czech `8-5`, `8-5-1`,
`8-5-2-1`, `8-5-2-2` and `8-5-2-3`. Nothing is created, nothing moves, no `manual_note`.** Third
instance of the §9g pattern.

**The §9e check, and why it passes cleanly.** Czech §8.5.2 maps to `11.1,11.2`; the primary §11.1
created `membrane-architecture`. §11.2's own subheadings are, in order: acyl-chain order (i.e.
FLUIDITY), transbilayer movement (FLIP-FLOP), lateral diffusion of lipids and proteins, lipid
rafts, membrane curvature and fusion, and surface adhesion. Look at what `8-5-2-1` already lists
as its own points: `fluidita — určena mastnými kyselinami, sfingosiny, cholesterolem` and
`překlopný mechanismus (flip-flop) — biologický význam nejasný`. Look at `8-5-2-2`:
`pohyb proteinů: rotační, stranový; NE překlopný`. **Those are §11.2's first three subheadings,
named almost word for word**, sitting a few lines deep inside a node whose title says "structure".
This is not rank 9's shape (substantive material scattered elsewhere) or rank 2's (nothing teaches
it) or §9h's (the key misdescribes everything it holds) — it is §9g's and §9i's shape exactly: a
Czech section that maps to two Lehninger sections deepening the *same* material, so the primary's
key already fits the secondary too.

**What is genuinely new**, so the depth node is not padding: lipid RAFTS (§11.2's fourth
subheading) have no Czech counterpart at all, and neither does membrane curvature and fusion. The
node has real content to add even though no re-keying is needed to house it.

#### Measured for the writing session, and the file to create

- **§11.2 = A pp.377–384**, B pp.1403–1431 region (check against `lehninger_toc.tsv`'s B range
  directly when writing). The interpolated range is **correct at both ends** this time: the §11.2
  heading and SUMMARY 11.1 share A p.377, and SUMMARY 11.2 is on A p.384 with §11.3 opening on
  A p.385.
- `chapter` for this node is Lehninger's 11; `leh_ch11.js` already holds `L-11-3-1` (§11.3), so
  this is chapter 11's **second** file — follow the `leh_ch19b.js` naming precedent from §13r.

### 9k. Rank 13 (§2.2) — the `topicKey` decision: reuse `amino-acids`, change nothing (2026-08-07)

**The decision: `L-2-2-1` took `topicKey: "amino-acids"`, joining Czech `2-1-1`, `2-1-2` and
`2-1-3`. Nothing created, nothing moved, no `manual_note` — so `step4_topickeys.py` cannot revert
it.** Fourth instance of the §9g pattern, and the topicKey count stayed at 63 across the write,
which is the check that it really was a reuse. Node in §13t.

**The §9e check, and why it passes.** Czech §2.1.2 maps to `3.1,2.2` and is the **only Czech
section in the entire book that points at any section of Lehninger's chapter 2** — so §2.2 has no
key of its own, the classic secondary case. The primary §3.1 took `amino-acids`, which holds
`2-1-1`, `2-1-2` and `2-1-3` (plus the `E-tryptophan` card). `2-1-2` is titled *Fyzikálně chemické
vlastnosti aminokyselin* and its whole first half is the acid-base behaviour of amino acids: the
cation/anion switch with pH, glycine's titration curve in its Obr. 2.1, the two inflexion points
at the pK of the carboxyl and of the amino group, `pI = (pK₁ + pK₂)/2`, and differing pI values as
the basis of ion-exchange chromatography and electrophoresis. It is substantive, not a stub —
8 points, 5 terms, 4 quiz items, a full oral answer. **Both mapped Lehninger sections deepen that
one node**, which is exactly §9g's condition for reusing the primary's key.

**The two failure modes were checked and neither is present.**

| | |
|---|---|
| rank 9's mode — substantive Czech nodes hiding under another key | **no.** Measured over every file in `biochemie_pro/data/`: the Czech word `pufr` scores **0 hits**, `Henderson` 0, `Hasselbalch` 0, `Kw` 0. The Czech book has **no section on water anywhere** — its ch1 runs cells → biomolecules → nutrition → energy → origin of life, and its ch2 opens directly at amino acids. There is nothing to move because nothing else teaches it |
| rank 2's mode — nothing teaches it, so write it Lehninger-only | **no.** `2-1-2` genuinely teaches the titration curve and the isoelectric point. There is a real join to make |

**Creating a `water-and-ph` key was considered and rejected.** It would describe the node better
than `amino-acids` does, but it would join **nothing** — no Czech node teaches water — and the
node would sit alone in the By-topic view, invisible from the one Czech node whose material it
actually completes. That is the trade §9g already ruled on: reusing the primary's key beats
throwing away a real join. The reader who needs Kw and pKa is precisely the reader on `2-1-2`
trying to work out where `pI = (pK₁ + pK₂)/2` comes from.

**No future collision.** §3.1 Amino Acids — the section that owns the key — sits at **rank 68 of
86, ratio 1.5**, because Czech §2.1.1–2.1.3 already allocate it 6 pages. It is unlikely ever to be
written; if it is, it lands on the same key and the topic holds two Lehninger nodes beside three
Czech ones, which is `respiratory-chain`'s arrangement and the feature working, not a clash.

⚠️ **A scope constraint that shapes the node, and is easy to miss.** The Henderson–Hasselbalch
equation is **not in §2.2** — it is a subheading of **§2.3**, which §9b records the user ruling a
**one-line mention only**, along with §2.1. So the node covers water ionization → Kw → the pH
scale → Ka/pKa → titration curves, and stops. Buffers as a subject, the bicarbonate system and
Henderson–Hasselbalch are named and deliberately not developed.

#### Measured for §2.2's writing session — pages, subheadings, and the two glycine numbers

- **§2.2 body = A pp.54–58; SUMMARY 2.2 is on A p.59**, one page past where `lehninger_toc.tsv`
  ends the section, with §2.3 opening lower on that same page. Checked at both ends per §13l.
  This is the fourth interpolated range to be caught off at one end.
- **The five subheadings, with the A page each starts on**: Pure Water Is Slightly Ionized p.54;
  The Ionization of Water Is Expressed by an Equilibrium Constant p.54–55; The pH Scale p.55;
  Weak Acids and Bases Have Characteristic Acid Dissociation Constants p.57; Titration Curves
  Reveal the pKa of Weak Acids p.58.
- **Glycine is in Fig. 2-15 on A p.57**, listed among the diprotic acids: carboxyl
  Ka = 4.57 × 10⁻³ M, pKa 2.34; amino Ka = 2.51 × 10⁻¹⁰ M, pKa 9.60. **Those are the two numbers
  Czech `2-1-2`'s own formula asks for and never supplies**, giving glycine pI = 5.97. The same
  figure carries acetic acid 4.76, ammonium 9.25, dihydrogen phosphate 6.86, carbonic acid 3.77,
  bicarbonate 10.2 and monohydrogen phosphate 12.4.
- **Cross-source corroboration, from §6a rather than newly read:** the Chinese notes have no water
  or pH topic at all, but note pp.21–22 inside topic 四 carry a formol titration drawn as a
  titration curve with a pKa shift from **9.6**, matching A p.57's glycine amino value.

### 9k-i. The `lehNote` this decision produced — the Czech book's own terminology error

`2-1-2` says that at high pH *"se deprotonizuje **kvartérní amoniová skupina**"* — the quaternary
ammonium group is deprotonated. **This was checked against the Czech source itself**
(`extracted_full_ch1_3/full_text_ch1_3.txt`, the §2.1.2 body) before writing anything, precisely
because the node's `en` field is a translation and the error could have been introduced there. It
was not: the wording is the book's.

It is wrong, and cleanly so. A quaternary ammonium ion carries four substituents on nitrogen and
**no hydrogen at all**, so it has no proton to lose and cannot be deprotonated by definition. What
deprotonates at high pH is the protonated α-amino group, −NH₃⁺, a **primary** ammonium ion.
Lehninger names it plainly in the same breath as the carboxyl: Fig. 2-15 (A p.57) labels glycine's
two groups *carboxyl* and *amino*, and §2.3 opens on "The protonated amino and carboxyl groups of
amino acids" (A p.59).

**This clears §9f's bar** — *would revising from this Czech node alone mislead you in an exam?* —
because saying "quaternary ammonium" out loud in an oral is a chemistry error an examiner can
pick up, and nothing inside the Czech node signals it. It is the **eleventh** `lehNote`, `kind:
"conflict"`, and the first one that corrects a **terminology** error rather than a fact or a
placement. Both of its citations verify OK.

### 9l. Rank 15 (§8.2) — the `topicKey` decision: reuse `nucleotides`, change nothing (2026-08-07)

**The decision: `L-8-2-1` took `topicKey: "nucleotides"`, joining Czech `4-1` and `4-1-2`. Nothing
created, nothing moved, no `manual_note`.** Fifth instance of the §9g pattern; the topicKey count
stayed at 63 across the write. Node in §13u.

**The §9e check.** Czech §4.1.2 maps to `8.1,8.2`; the primary §8.1 took `nucleotides`, which holds
`4-1` and `4-1-2`. `4-1-2` is titled *Struktura nukleových kyselin* — **literally §8.2's own
title** — and is substantive rather than a stub: 8 points, 6 terms, covering the phosphodiester
backbone, the double helix with its grooves, base pairing with the C1′–C1′ distance and glycosidic
angle, complementarity, antiparallel strands, stacking, and the A and Z forms. Both mapped
Lehninger sections deepen that one node, which is §9g's condition exactly.

**Neither failure mode is present**, but the check was NOT routine here and the reason is worth
recording: **two other Czech nodes have §8.2's subject matter in their own titles** —
`4-1-3-1`/`4-1-3-2` ("DNA structure and biosynthesis…", key `dna-replication`) and `4-1-4-1`
("…types and properties of RNA", key `transcription`). Either could have been rank 9's shape. On
inspection neither is:

| node | what it actually holds | verdict |
|---|---|---|
| `4-1-4-1` | mRNA, hnRNA, exons/introns, rRNA sizes with sedimentation coefficients, the tRNA cloverleaf, snRNA | **keep `transcription`** — its subject *is* transcription and its primary is §26.1. This is §13m's third outcome: cross-reference by hand, re-key nothing |
| `4-1-3-1/2` | DNA polymerases and the mechanism of replication | **keep `dna-replication`** — already joined to `L-25-1-1` |

So the RNA half of §8.2 is handled by cross-reference, and the node adds only what is *structural*
about RNA (monocistronic vs polycistronic, the triplet-length floor, A-form-only helices, G·U
pairing, hairpins, ribozymes) rather than re-teaching the RNA types `4-1-4-1` already lists.

**Creating `nucleic-acid-structure` was considered and rejected** on two grounds: `nucleotides`
does not *misdescribe* `4-1-2` (nucleic acid structure is what nucleotides build), which is rank
1's test; and a key of that name would sit confusingly beside the existing
`nucleic-acid-chemistry`, which §8.3 created and which is Lehninger-only.

**No future collision.** §8.1 — the section that owns the key — is **rank 50 of 86, ratio 2.3**.
If it is ever written it lands on the same key, giving the topic two Lehninger nodes beside two
Czech ones.

#### Measured for §8.2's writing session

- **§8.2 = A pp.269–278**, correct at both ends: the heading is on A p.269 below SUMMARY 8.1, and
  §8.3 opens on A p.278. ⚠️ But **SUMMARY 8.2 is on A p.277**, not on the last page of the range —
  locate it by "Many lines of evidence show that DNA bears genetic information".
- **The numbers Czech `4-1-2` omits, all from Fig. 8-17's table on A p.273** — A/B/Z: right,
  right, **left**-handed; diameter ≈26/20/18 Å (so **A is the fat one and Z the thin one**, which
  is the opposite of what "more slender" suggests to most readers); 11/10.5/12 bp per turn; rise
  2.6/3.4/3.7 Å; base tilt 20°/6°/7°. Plus 10.5 bp per turn in solution against the historical
  fibre figure of 10 (A p.271).
- **Two conflicts with the Czech node, both resolved in Lehninger's favour** — see §9l-i.

### 9l-i. Two `lehNotes` on `4-1-2`, and the user's standing instruction behind them

The user's instruction on 2026-08-07 was explicit: *"如果捷克语版本有出入可以标记一下，主要针对
英语版本为准"* — where the Czech book diverges, flag it, and treat the English (Lehninger) as
authoritative. §8.2 produced two divergences that clear §9f's bar, taking the count to **13 notes
on 11 nodes**.

**1. `conflict` — what stabilises the double helix.** `4-1-2` says the helix "is partly stabilised
by HYDROGEN BONDS between bases of the two different strands", listing stacking and electrostatics
afterwards as further contributions. Lehninger inverts the ranking in one sentence: *"the hydrogen
bonds do not contribute significantly to the stability of the structure"* (A p.271). They supply
**complementarity** — which base pairs with which. Stability comes *"primarily [from] metal
cations, which shield the negative charges of backbone phosphates"* plus base stacking.

⚠️ **Why this particular error is so durable, and worth saying out loud in the node:** counting
hydrogen bonds (three for G≡C against two for A═T) predicts *exactly the same* observation that
settles the question — that GC-rich DNA is more stable. The naive explanation and the correct one
agree on the data and differ on the mechanism, so nothing in ordinary revision ever exposes it.

**2. `conflict` — A-DNA and Z-DNA in cells, where the Czech node is wrong in *both* directions.**
It presents the B→A conversion at 75 % relative water content as something DNA does, and dismisses
Z-DNA as having a function "not yet known". Lehninger reverses both: *"Whether A-DNA occurs in
cells is uncertain"* (A p.273) — and there is a methodological reason, since the reagents used to
promote crystallisation dehydrate DNA, so most short DNA crystallises in the A form regardless —
while short **Z-DNA tracts have been found in both bacteria and eukaryotes** and may act *"in
regulating the expression of some genes or in genetic recombination"*. The one with demonstrated
cellular occurrence is Z, not A.

### 9m. Rank 16 (§26.2) — the `topicKey` decision: reuse `transcription`, change nothing (2026-08-07)

**The decision: `L-26-2-1` took `topicKey: "transcription"`, joining Czech `4-1-4-1` and
`4-1-4-2`. Nothing created, nothing moved, no `manual_note`.** Sixth instance of the §9g pattern;
topicKey count stayed at 63. Node in §13v.

**The §9e check.** Czech §4.1.4 maps to `26.1,26.2`; the primary §26.1 took `transcription`, which
holds `4-1-4-1` and `4-1-4-2`, both substantive (RNA types, then the full transcription mechanism —
holoenzyme, promoter, elongation, termination). `4-1-4-2` already names bacterial rRNA
post-transcriptional processing by ribonuclease, so the key is not blind to processing entirely.

**This check was harder than usual, for a reason worth recording.** A completely separate Czech
node, `4-2-4-2` (key `gene-regulation-proteins`, title literally *"eukaryotic genes, the mRNA cap
and splicing"*), already teaches a substantial slice of §26.2's own material — cap-0/1/2, the
AAUAA/poly(A) mechanism, the GU...AG spliceosome — worked through the ovalbumin gene. On the
surface this looks exactly like rank 9's failure mode: the naive key (`transcription`) is thin on
processing while the substantive processing content sits under an unrelated-sounding key.

**It is not rank 9's shape, and the reason generalises.** `4-2-4-2`'s own title and its position in
the Czech curriculum (paired with `4-2-4-1`'s lac/trp operons, both mapping primarily to Lehninger
§28.1, *The Proteins and RNAs of Gene Regulation*) are about **eukaryotic gene regulation**, not
RNA processing as a subject in its own right. Capping and splicing appear in it as necessary
scaffolding on the way to the node's real content — hormonal/cAMP control, selective mRNA
transport, intron retention as a regulatory strategy. Rank 9's fix was to move nodes whose *own*
subject was β-oxidation out from under a key that misdescribed them. Moving `4-2-4-2` would do the
opposite: misfile genuine gene-regulation content under a processing-only key. **This is §13m's
third outcome** — a Czech node correctly keyed to its own subject, with material relevant to the
depth node's topic sitting inside it as a means to a different end. Cross-referenced by name in the
`coverageNote`, not re-keyed.

**No future collision.** §26.1 — the section that owns the key — sits well down the queue (Czech
§4.1.4 already allocates it 6 pages against a 12-page Lehninger section, ratio 2.0). If ever
written it lands on the same key, joining a third node.

#### Measured for §26.2's writing session

- **§26.2 = A pp.972–988**, correct at both ends: the heading and opening sentence are on A p.972,
  immediately after §26.1's rifampin/α-amanitin material, and SUMMARY 26.2 sits on A p.988 with
  §26.3 opening on the same page.
- **Every one of the nine subheading positions was located by direct text search, not trusted from
  the TOC or scaled from B** — §13u's rule, applied a second time on an unrelated section, and it
  caught the same failure shape again: two of the nine were off by exactly one page from the TOC's
  own figures (*Proteins Catalyze Splicing of tRNAs* and *Eukaryotic mRNAs Have a Distinctive 3′
  End Structure*, both TOC-listed at 979, both actually on 980).
- **A citation bug found and fixed while writing this node, not by the checker's own logic but by
  a straightforward parse failure**: a prose sentence quoted verbatim from A contained internal
  prime marks (`2'`, `5'`, `3'`), and wrapping the whole sentence in the single-quote delimiters
  `verify_citations.py` uses for book quotes breaks its `QUOTED` regex — the regex excludes *any*
  of the quote-mark characters from inside a match, so an internal prime terminates the match early
  and the citation loses its own probe. This is the **exact trap §9g's node (`L-6-4-1`) already
  named** — *"Choose quotes with no prime, no arrow, no subscript and no roman numeral"* — now
  confirmed a second time, on a different node, for a different reason (that warning was about
  OCR corrupting a probe; this is about the probe extractor's own quote-delimiter regex). **Fix:
  never quote a sentence containing a prime mark verbatim; paraphrase it and quote a short adjacent
  phrase without one instead.**
- **A second, unrelated bug in the SAME edit pass**: `coverageNote` is a JS string delimited by
  double quotes, and the fix text quoted two book sentences using double quotes *inside* that
  string, which terminates the string literal early and breaks the parse. `esprima.parseScript()`
  on the file, run before `verify_citations.py`, catches this immediately — **always parse-check
  after editing a `coverageNote` or any field that quotes book text, before running the citation
  checker**, because a broken parse makes every downstream check meaningless in a way that looks
  like an unrelated failure.

### 9n. Rank 19 (§23.3) — the `topicKey` decision: reuse `hormone-structure-and-action`, change
nothing (2026-08-07 — decided, and the node `L-23-3-1` written the same session; see §13w)

**The decision: `L-23-3-1` will take `topicKey: "hormone-structure-and-action"`, joining the same
ten Czech nodes the key already holds, `10-17`…`10-26` (Czech §10.3). Nothing created, nothing
moved, no `manual_note` expected.** Seventh instance of the §9g pattern. `depth_queue.tsv` names
Czech `10.3` as §23.3's source row, and `topickey_assignment.json`'s `10|10.3` entry already gives
that same Czech section the key `hormone-structure-and-action` with **primary** `23.1` — so §23.3
is a second Lehninger section deepening the node the primary already owns, exactly like rank 3
(§9g), rank 10 (§9i), rank 11 (§9j), rank 13 (§9k), rank 15 (§9l) and rank 16 (§9m) before it.

**The §9e check, and why this is §13m's third outcome rather than rank 9's.** The ten Czech nodes
under this key (`10-17` hormone definition/gland hierarchy/receptor specificity, `10-18` the
adenylate cyclase/cAMP cascade, `10-19` the phosphoinositide/IP₃/DAG cascade, `10-20` receptor
tyrosine kinases and the nuclear steroid mechanism, `10-21`/`10-22` the four-chemical-class table,
`10-23`–`10-26` steroid/amino-acid-derived/peptide-protein/icosanoid hormones in turn) teach hormone
**signalling mechanisms and structural classification** — legitimate general theory that insulin
and glucagon are worked examples of (`10-18` and `10-20` already name both). **None of the ten
teaches fuel-metabolism regulation itself** — measured by grep, insulin/glucagon appear only as
classification examples (`10-18` ×6, `10-20` ×6, `10-22` ×14, `10-25` ×16 hits, none in a
fasting/feeding or organ-integration context). That is not rank 9's shape (no substantive node is
hiding under the wrong key) and not rank 2's (a genuine, if general-theory, partner exists). It
matches `L-23-2-1`'s own precedent exactly — see that node's `coverageNote`, which already flags
*"this node stops where §23.3 begins… the hormonal regulation of fuel metabolism is §23.3, which
was NOT read"* and separately notes that the Czech hormone material (`10-17`..`10-26`) maps to
§23.1 and is left untouched by that node.

**Where the real pathway-level material sits, scattered, to cross-reference by hand (none of these
move or re-key):** `7-12-2` (key `glycogen-metabolism`, Czech pp.174–175) already gives the full
epinephrine/glucagon → cAMP → protein kinase → phosphorylase-kinase/glycogen-synthase cascade in
diagram-level detail, reciprocal control of glycogen synthase (I⇌D) vs phosphorylase (b⇌a) — this
is the same cascade §23.3 will discuss but at the single-pathway level, not the whole-body
insulin-vs-glucagon integration across liver/muscle/adipose/brain that is §23.3's actual subject.
`L-23-2-1` (`tissue-specific-metabolism`) already covers each organ's normal fuel logic and named
where hormones act without explaining the hormonal switch itself. Czech `10-12`..`10-16`
(`metabolic-regulation`, §13.5) covers regulation in the abstract (Michaelis kinetics, allosteric
feedback, isoenzymes) with no insulin/glucagon content at all, confirmed by grep. **Not yet
checked: whether Czech names diabetes/obesity/leptin anywhere** — do this before writing the node,
since §23.3 (per the B TOC) covers insulin action, glucagon/fasting, diabetes, and obesity/leptin,
and the Czech gap map (§9b) should be consulted for whether any of these were already ruled on.

**Page range — verified: §23.3 = A pp.859–867, and the interpolated TOC range is CORRECT at both
ends this time.** This is worth recording precisely because the three checks before it each found
an error: `lehninger_B_toc.json` gives `page_a_print` 859 and `page_a_print_end` 867 with
`a_confidence: "interpolated"`, and both hold. The heading and opening sentence are on A p.859,
sharing that page with SUMMARY 23.2 (which `L-23-2-1` claims for that summary only); SUMMARY 23.3
spans A pp.866–867 and §23.4 opens on p.867. **So the rule is that an interpolated range is
UNRELIABLE, not WRONG** — it must be checked every time, and sometimes it survives the check.
All six subheadings were located by direct search: 859, 860, 862, 863, 864, 865.

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

### 12e. The second and third cards — `E-histidine` and `E-cysteine` (2026-08-07/08), and how to pick the next entity

**Written and validating.** `E-histidine` in `entity_cards.js`, `topicKey: "amino-acids"` — the
same key as `E-tryptophan`, so the entity group now joins Czech `2-1-1`/`2-1-2`/`2-1-3`, the depth
node `L-2-2-1` and two cards. `biochemie_pro` reports **229 topics (207 cz, 20 lehninger, 2
entity)**; **34 citation rows, all OK**, audit at 434 OK / 0 ELSEWHERE / 0 UNCHECKED.

**The generating fact is sharper than tryptophan's**, which is why this was the right second card:
the imidazole pKa of **6.0** makes histidine *"the only common amino acid having an ionizable side
chain with pKa near neutrality"* (A p.76), so at pH 7 both forms are present at once and one
residue can give a proton and take one back. Four chains come out of that single number, and
**three of them land on a depth node that already exists** — which is the join the topicKey cannot
make and the card does by hand:

1. **pKa 6.0 → general acid-base catalysis → chymotrypsin's catalytic triad** (§6.4, `L-6-4-1`).
   The best step is that the protein does not merely *use* the pKa, it *tunes* it: compressing the
   His57–Asp102 hydrogen bond raises His57's pKa from ~7 to >12. Ends on an observable — the
   bell-shaped pH-rate profile, where the left-hand limb *is* histidine losing its proton.
2. **imidazole nitrogen → coordinates haem iron → proximal and distal His** (§5.1, `L-5-1-1`).
   Ends on the book's own conclusion, that the selectivity *"helps prevent poisoning by the CO that
   is generated in small amounts from metabolism"* (A p.152).
3. **the same pKa → Bohr effect** (§5.1 again). Blood swings pH 7.6 → 7.2, which only an imidazole
   notices; His146 protonates, ion-pairs Asp94, stabilises the T state, oxygen is released exactly
   where metabolism acidified the tissue. **The pKa is the sensor** — no signal needed.
4. **six His in a row → nickel column** (§9.1). The bench payoff, and the same coordination
   chemistry as chain 2 used deliberately.

Plus `points` on histamine and cimetidine (§22.3, `L-22-3-1`) and two `beyondPoints`: histidine's
pI is *not printed* for histidine in the passages read (derive it as (6.0 + 9.2)/2 ≈ 7.6 rather
than quoting from memory), and **how a His-tagged protein is actually eluted** — competing the tag
off with free imidazole — is not in §9.1 either.

#### How to choose the next entity, with the measurement that decides it

Scatter across Lehninger is the criterion, because gathering what is already in one place is worth
nothing. Measured 2026-08-07 with `locate.py` — occurrences / pages / chapters:

| candidate | occ | pages | chapters |
|---|---|---|---|
| glucose | 1880 | 612 | 17 |
| phosphorylation | 597 | 365 | 18 |
| heme | 315 | 189 | 22 |
| glutamate | 245 | 119 | 13 |
| glycine | 185 | 84 | 14 |
| tyrosine | 102 | 68 | 9 |
| disulfide | 98 | 57 | 9 |
| histidine | 86 | 52 | 10 |
| cysteine | 75 | 42 | 9 |

⚠️ **But scatter alone is not the criterion — the card must produce CAUSAL CHAINS from one
structural fact, not a survey.** `glucose` and `phosphorylation` top the table and are the *worst*
fits, because neither reduces to a single generating property; a card on either would be a summary
of half the book. **`heme` is the strongest untouched candidate** (22 chapters, and it does reduce
to one fact: a porphyrin ring holding an iron) with chains running O₂ binding → electron transfer →
catalysis → degradation to bilirubin and jaundice. ~~`cysteine` is the strongest remaining amino
acid~~ — **written 2026-08-08, see §12f.**

### 12f. The third card — `E-cysteine` (2026-08-08), and the amino-acid set is now closed

**Written and validating.** `E-cysteine` in `entity_cards.js`, `topicKey: "amino-acids"` again.
`biochemie_pro` reports **230 topics (207 cz, 20 lehninger, 3 entity)**; **24 citation rows, ALL OK
ON THE FIRST RUN** — the pre-test method's cleanest result yet — audit at 458 OK / 0 ELSEWHERE /
0 UNCHECKED.

**The generating fact is a third KIND of special**, which is what makes the three cards a set
rather than three of a kind. Trp is special **optically** (a flat conjugated ring → 280 nm → the
Nanodrop); His is special **electrostatically** (a pKₐ at 6.0 → catalysis and the Bohr effect); Cys
is special **covalently** — it is *the only side chain that forms an actual covalent bond with
another side chain*. That framing is written into `points[3]` of the cysteine card as the takeaway:
asked why an amino acid matters, decide first which of the three kinds of special it is.

⚠️ **The card opens by rejecting the obvious answer, and this is worth copying.** Lehninger files
cysteine with the polar uncharged R groups and then immediately demotes it — *"cysteine is an
outlier here because its polarity"* is *"contributed by its sulfhydryl group, is quite modest"*
(A p.76). So the textbook's own classification is a red herring; the card says so in step 1 rather
than reciting the class. Four chains follow:

1. **reactivity not polarity → cystine → a covalent staple** (§3.1, §3.4). Ends on insulin, two
   chains that *"are joined by disulfide cross-linkages"* and nothing else (A p.92) — which neither
   Czech `10-25` nor `L-23-3-1` mentions, though both teach insulin.
2. **covalent means you must break it deliberately** (§3.4). Sanger had to break insulin before
   sequencing it; performic acid or DTT, then cap the freed thiols because *"Carboxymethylation by
   iodoacetate serves this purpose"* (A p.93). Ends on reduced-versus-non-reduced SDS-PAGE.
3. **forming the RIGHT pairs is hard** (§4.4). Anfinsen, then protein disulfide isomerase, whose
   job is *"the interchange, or shuffling, of disulfide bonds"* (A p.133). **The observable is the
   enzyme itself** — evolution does not maintain a shuffling enzyme unless mispairing is frequent.
4. **the UNpaired thiol is the cell's reducing power, and it ends in a hospital** (§14.6).
   glutathione → NADPH → pentose phosphate → G6PD → favism (*"erythrocytes begin to lyse 24 to 48
   hours after ingestion of the beans"*, A p.548) → and the deficiency persists in 400 million
   people because *"The parasite is very sensitive to oxidative damage"* (A p.548). **The best
   chain ending written so far**: one sulfhydryl group to a selection pressure in human populations.

⚠️ **A misquote was caught by reading, not by the checker — the citation row was OK.** The CN half
of one chain step had a stray duplicated word inside a book quote (*covalently linked cystine
dimeric amino acid*). `verify_citations.py` passed the row because the **EN** half carried the
correct quote and an OK from any probe satisfies the row. **The checker verifies that a page
supports a citation; it does not verify that every quoted span is quoted accurately.**

The cheap guard, which found 0 further cases across all of `data/` and should be run before any
commit that adds quotes — it groups every typographic-quoted span by its opening and reports any
group whose members are not identical, which is exactly the shape a copy-paste slip makes:

```python
import io, re, glob, collections
spans = collections.defaultdict(set)
for f in glob.glob('biochemie_pro/data/*.js'):
    for q in re.findall(r'“([^“”]{18,140})”', io.open(f, encoding='utf-8').read()):
        spans[q[:40]].add(q)
for k, v in spans.items():
    if len(v) > 1:
        print('DIVERGENT:', k, *sorted(v), sep='
    ')
```

**Two `beyondPoints`, both honest absences** rather than guesses: the compartment rule (oxidising
ER/extracellular versus reducing cytosol, the standard reason secreted proteins carry disulfides)
is **not** in any passage read for this card, so no page is cited for it; and how a disulfide
*pattern* is determined experimentally — peptide-mapping before and after reduction — is likewise
absent from the pages read.

**After this card the amino-acid trio is closed.** The next entity should come from a different
family; on the measurement above that is **`heme`**.

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

### 13m. The eleventh node — `L-23-2-1`, §23.2 Tissue-Specific Metabolism (2026-08-07): a third §9e outcome, and two checker bugs that were inflating every audit

Rank 7, ratio 7.3 — the highest remaining ratio among ready-to-write primaries. A pp.848–859,
B pp.2967–3005, in `biochemie_pro/data/leh_ch23.js`, joining Czech `10-10` through the
pre-existing `topicKey: "tissue-specific-metabolism"`.

**The §9e check produced a THIRD outcome, and the decision needs to be on the record because it
looks like a fail and is not.** The key holds exactly one Czech node, `10-10` — a SINGLE
PARAGRAPH on p.220, "why fats cannot make sugars". That is neither rank 9's way (a substantive
Czech node hiding under another key) nor rank 2's way (nothing teaches it at all). It is:

- **No Czech node teaches metabolism BY ORGAN**, because the Czech book never uses that axis.
  Chapter 10 goes pathway logic → regulation → hormones; an organ appears only as an aside.
- **But the material §23.2 deepens is in the book, scattered** across nodes correctly keyed to
  their own pathways: the Cori cycle in `7-9` (`gluconeogenesis`), ketone bodies in `8-4-4-3`
  (`fatty-acid-oxidation`), fat mobilisation in `8-4-4-1`, adipose as depot in `8-2-2-1`.
- **Moving any of them was rejected**, and this is the reusable part of the reasoning: those
  nodes teach their own pathways and are keyed correctly, and `fatty-acid-oxidation` already
  joins both books (it carries `L-17-2-1`). **Re-keying would break a working join to improve a
  cosmetic one.** The cross-referencing the topicKey cannot do is done by hand in the points,
  each of which names the Czech node it stands next to.

**The TOC range was wrong at its END this time** — the entry says `page_a_print_end` 858, but
SUMMARY 23.2 is on A p.859. Taken with §13l, where the same file was wrong at the START of
§25.1: **treat an `interpolated` range as unreliable at BOTH ends, and search A for the
section's first subheading AND its SUMMARY before setting `pages`.**

**One `lehNote`, kind `gap`, on `8-4-4-3` — the eighth in the data.** The Czech node gives the
ketone-body chemistry completely and correctly but frames it *exclusively* as pathology:
overproduction, acidosis, ketosis, coma, death. §23.2 gives the other half — ketone bodies are a
normal exported fuel, the only lipid-derived fuel that crosses the blood-brain barrier, supplying
up to a third of the heart's energy and 60–70 % of the brain's in prolonged fasting. A student
holding only the Czech framing answers "a pathological product of uncontrolled diabetes" and
misses the mechanism that keeps a starving brain alive. Clears §9f's bar; nothing else in the
section did.

#### ⚠️ Two bugs in `verify_citations.py` that were inflating EVERY audit ever run

Both are the documented family — *the checker quietly covering less than it claims* — and the
second is the worst instance so far, because it does not drop a citation, it **confirms the wrong
one**.

**(1) `cited_range()` and the printed label re-searched the context window.** A row is created
for a specific `CITE` match, but the range and label were then recomputed with
`CITE.search(ctx)` over the ±90-character window, which returns the **first** citation in it, not
the one the row is about. A field ending `...(A p.919), taught in section 25.2 (A pp.930-940) and
not in this node` therefore produced a row for `A pp.930-940` that was silently re-ranged to 919,
found a probe there, and **printed as a second `OK  A p.919` line** — while `A pp.930-940` was
never checked and never reported as skipped. Fixed by carrying the exact citation string on the
row (`cite`) and using it for the range and the label; the window is still the right input for
the label probe, since it is centred on the correct match.

**(2) `probes()` took the FIRST figure label in the window, not the nearest one before the
citation.** Wrong whenever a field lists citations in series. `L-11-3-1`'s coverageNote lists
measured anchors as `FIGURE 11-31 = A p.387; FIGURE 11-32 = A p.388; BOX 11-1 = A p.389; …`, so
the window for `A p.389` reaches back over two earlier labels and returned `FIGURE 11-31`,
condemning a correct citation with `actually on [386] <-- FIX THE CITATION`. **Seven correct
citations in one node were condemned this way.** Fixed by cutting the window at the citation and
taking the last label before it.

**The measured effect, and it goes the honest direction.** Before: `189 OK / 2 ELSEWHERE /
33 UNCHECKED`. Immediately after fix (1): `174 OK / 9 ELSEWHERE / 41 UNCHECKED` — **15 rows had
been verified against the wrong citation**, and 7 of the newly visible ELSEWHEREs were bug (2).
After fix (2): `184 OK / 1 ELSEWHERE / 39 UNCHECKED`. After correcting this node's own four real
citation problems: **`186 OK / 0 ELSEWHERE / 34 UNCHECKED`.**

**The number of OK rows went DOWN and that is the improvement.** Any audit figure quoted in this
file from before 2026-08-07 was inflated; §13k's and §13l's totals were measured with bug (1)
live. Do not compare against them, re-run instead. The 34 UNCHECKED are all pre-existing and now
honestly reported: `E-tryptophan` 8, `L-22-3-1` 5, `L-11-3-1` 5, `L-17-2-1` 4, `L-1-3-1` 4,
`L-8-3-1` 2, `L-21-1-1` 2, and one each on `L-5-1-1`, `L-3-4-1`, `L-19-1-1`, `1-5`. **That is the
biggest concrete backlog in the project and it is now visible for the first time.**

**A rule this node adopted and the next one should keep: do not cite pages in a section you have
not read.** Four rows here were forward-pointers to §23.3 and §23.4 whose ranges came from the
interpolated TOC — exactly the source just shown to be wrong twice. They now name the section and
omit the pages. The same edit was applied retroactively to `L-25-1-1`'s pointer to §25.2.

**`scripts/audit_handoff.py` now checks the handoffs for STALENESS as well as formatting**, added
in the same session and for the same reason as the two checker fixes: the failure that actually
costs a session time is a number that WAS true and no longer is. Two had rotted by this node —
`LEHNINGER_START.md` understated this archive's size by 15 %, weakening the one warning that
stops a session reading 42k tokens of it, and §14c had frozen `208 topics (207 cz, 1 lehninger)`
into the text as what a clean run "currently prints", eleven nodes out of date. The audit now
recomputes the live topic / lehninger / topicKey / multi-source counts from the app data, compares
them against the current-state block in `LEHNINGER_START.md`, re-measures both handoff file sizes,
and flags any count frozen as what a run "currently prints". Per-node counts inside §13a–§13m are
deliberately NOT checked — they are history. Negative-tested: perturbing three figures and one
size makes it fire four findings; restoring them returns it to clean. **Run it LAST, after the doc
edits, and expect `TOTAL: 3`** — three cosmetic pre-existing findings that predate this work.

`biochemie_pro` now reports **219 topics (207 cz, 11 lehninger, 1 entity), 63 topicKeys**, with
**11 joining more than one source**. 8 lehNotes on 7 nodes. `step5_check.py`: all checks pass.
This node's own citations: **all clean, 0 ELSEWHERE, 0 UNCHECKED.**

### 13n. The twelfth node — `L-3-3-1`, §3.3 Working with Proteins (2026-08-07): the last free pick, and the `2-2-6` cnNote error finally fixed with evidence

Rank 18, ratio 4.0, A pp.83–90, B pp.393–415. **Appended to the existing
`biochemie_pro/data/leh_ch3.js`, which is now the first Lehninger data file carrying two nodes**
(`L-3-3-1` §3.3 and `L-3-4-1` §3.4). No `index.html` change was needed. The pairing is real, not
filing convenience: §3.3 ends by cutting a spot out of a two-dimensional gel and identifying it by
mass spectrometry, which is exactly where §3.4 begins.

**§9e check passed** — `working-with-proteins` holds exactly `2-2-6`, which is genuinely the node
teaching the subject. No key created, no node moved.

**The TOC's interpolated range was CORRECT this time, at both ends.** Recorded deliberately next
to §13l (wrong at the start of §25.1) and §13m (wrong at the end of §23.2): **an interpolated
range is *unreliable*, not *wrong*.** It must be checked; it must not be assumed bad. Checking
cost two minutes.

**The two books point the same toolbox at different questions, which is why they do not
overlap.** Czech `2-2-6` spends almost all its length on *determining Mr* — sedimentation, the
Svedberg unit, the Svedberg equation — and merely *names* gel/permeation chromatography and
electrophoresis. §3.3 picks up exactly those two named-but-undeveloped methods and asks the other
question: how do you get one protein out of a cell, and how do you know when you have. The node's
centre of gravity is the purification table read as arithmetic (purification factor 1,500, yield
45 %, and *why specific activity rises while total activity falls*) and the mechanism of SDS.

**No `lehNote`, and the decision is recorded because there was a real candidate.** Czech lists
electrophoresis among the Mr methods without qualification; Lehninger shows mobility is Z/f, so it
answers to shape as well as size, and that SDS rescues it only by pinning both terms — and that
SDS separates *subunits*, so an SDS gel gives subunit mass while Czech's ultracentrifuge weighs
the intact native particle. That is a classic exam question (why do gel filtration and SDS-PAGE
disagree?). It is a **point flagged as a trap**, not a lehNote, because Czech states nothing
false: it is incomplete, not wrong, and §9f's bar is *would mislead*. Eight lehNotes exist and the
two preceding nodes added one each; a third in a row on a weaker case starts diluting them, which
is the failure §9f names. A future session that disagrees has the reasoning in the coverageNote.

#### ✅ The `2-2-6` cnNote error is fixed — flagged by §6a, deferred by §2c, closed here

§6a found it, §2c deferred it **on principle**: *"it needs the notes' own p.41 heading, which this
session did not open — flagging it is not the same as guessing it."* That was the right call and
the fix simply required doing the work. **The notes were opened.** They have no text layer, so
pages were rendered from `生物化学笔记_分卷/生物化学笔记_03_p031-045.pdf` and read as images:

- **notes p.41** carries a highlighted heading reading **八 蛋白质的分离、纯化、表征** (topic 8,
  separation / purification / characterisation of proteins), and its first item is
  **① 蛋白质的性质** — literally `2-2-6`'s own title, *Vlastnosti proteinů*;
- **notes p.46** was rendered and is **blank**, which fixes the topic's end.

So topic 八 = pp.41–45, exactly as §6a predicted, now **measured at both ends instead of
inferred**. `2-2-6`'s `cnNote` changed from `topic: "七"` (myoglobin/haemoglobin/sickle cell,
pp.37–40 — which is what `L-5-1-1` deepens, and which is why two nodes were pointing at one notes
topic) to `topic: "八"` with the verified title and page range, `status` `partial` → `mapped`. The
evidence is written into the node's own `coverageNote` so it never has to be re-derived. **Topic 八
now appears in the data for the first time.**

**One self-inflicted checker trap worth knowing before writing the next coverageNote.** The first
run reported two UNCHECKED rows on this node. Cause: the coverageNote *quoted* the phrase
`conferring on each protein a similar charge-to-mass ratio` in order to record that A's OCR
**cannot** find it — and `verify_citations.py` treats any quoted span as a probe, so it adopted an
unfindable probe and reported the surrounding citations as unverifiable. **When documenting an OCR
miss, name the phrase without quotation marks.** Fixed, and the reason is written into the node.

`biochemie_pro` now reports **220 topics (207 cz, 12 lehninger, 1 entity), 63 topicKeys**, with
**12 joining more than one source**. 8 lehNotes on 7 nodes. `step5_check.py`: all checks pass.
Citation audit **209 OK / 0 ELSEWHERE / 34 UNCHECKED**; this node's own citations are all clean.

### 13o. The citation backlog is cleared — 34 UNCHECKED → 0 (2026-08-07)

**Every `A p.N` citation in `biochemie_pro` now self-verifies: 243 OK / 0 ELSEWHERE / 0
UNCHECKED.** This was the largest known backlog in the project and it had never been worked
through; §13m had just made it visible for the first time by fixing the two bugs that were
inflating every audit.

**Method, and it is repeatable.** `scripts/verify_citations.py` reports a row UNCHECKED when it
can find no phrase to search on — that is a gap in *verifiability*, not evidence of an error. For
each row: read the cited A page, pick a short verbatim phrase that actually supports the claim,
and work it into the node's own prose as a quote. The row then self-verifies on every future run.
A helper that proposes candidates (score verbatim sentences from the cited pages by word overlap
with the node's claim) made this tractable; the scoring is crude but the top-5 list contained a
usable quote almost every time.

**Not one of the 34 citations turned out to be wrong.** Two places where the book's wording beat
the node's paraphrase were adopted while passing through — propionic acidemia symptoms *manifest*
in the first few days of life rather than *appear*, and the porphyrias accumulate specifically
*porphyrin* precursors.

#### ⚠️ Three probe constraints that silently drop a quote

All three were found by adding quotes that looked right and watching the row stay UNCHECKED with
`no searchable phrase` — which reads as though no quote had been added at all. **When a quote you
just added does not clear its row, check these before anything else:**

| constraint | what happens if you break it |
|---|---|
| **18–140 characters** between the quote marks | Three quotes of 157–158 chars were silently not adopted. Keep quotes well under 140. |
| **at least 4 words** | The entity card quoted `'membrane interface anchors'` — 3 words — so it was never a probe. |
| **no unquoted-phrase documentation** | Quoting a phrase *in order to record that A's OCR cannot find it* makes the checker adopt an unfindable probe (§13n). Name such phrases without quote marks. |

#### Two more checker fixes, one of them a regression I had just caused

**(3) Spaced figure labels.** A's OCR frequently puts a space *before* the hyphen in a label, so
the page reads `figure 11 -31` while the probe built from the citation reads `figure 11-31`. The
label never matched and the row was reported `probe not found even ±40 pages` **about a citation
that was perfectly correct** — this alone accounted for four of `L-11-3-1`'s five open rows.
`norm()` now collapses whitespace around a hyphen **between digits**, on both sides of the
comparison, so it is symmetric and cannot make a wrong page match a right one.

**(4) Label order — a regression from §13m's own fix.** Section nodes write the label *before* the
page (`Fig. 3-28, A p.94`), which is why §13m's nearest-label fix cuts the window at the citation.
**The entity card writes it *after*** (`A p.75, Fig. 3-6`), so cutting left nothing and two
`E-tryptophan` rows silently became `no searchable phrase`. `probes()` now falls back to the first
label *following* the citation when none precedes it. **The lesson is general: a change made to
stop over-matching can quietly under-match somewhere with a different house style.** Both
conventions are now supported; neither file needed editing.

**Running totals across the day.** `189 OK / 2 ELSEWHERE / 33 UNCHECKED` (inflated, two bugs live)
→ `186 / 0 / 34` after §13m's fixes → **`243 / 0 / 0`**. The OK count rose by 57 while the
UNCHECKED count went to zero, and nothing was ever downgraded.

**What this does and does not mean.** It means every citation has been checked against the page it
names, by machine, and will be re-checked on every future run. It does **not** mean the prose
around each citation is right — the quote proves the page, not the paraphrase. And `coverage:
"full"` still over-claims on Lehninger nodes, because figures were never read as images (§15a).

### 13p. The thirteenth node — `L-6-4-1`, §6.4 Examples of Enzymatic Reactions (2026-08-07): the first node that needed a `topicKey` decision and still cost no data change

Rank 3, ratio 11 — the highest ratio in the entire queue that was still unwritten, and the first
of the nine "needs a decision" ranks to be taken. A pp.203–213, B pp.823–852, in a new
`biochemie_pro/data/leh_ch6.js`, wired into `index.html`, joining Czech `3-6` through the
**pre-existing** `topicKey: "enzyme-mechanism"`. The decision that made it writable is §9g; this
section is about the node.

**The §9e check passed with no data change of any kind — the third node to manage that**, after
`L-25-1-1` and `L-3-3-1`. Nothing was re-keyed, no key was created, and no `manual_note` was
added, so unlike the §9e and §13j precedents this node is immune to `step4_topickeys.py`.

**What the node actually adds, in one sentence: the experiments.** Czech `3-6` is a good node —
active centre, both kinds of specificity, proximity effect, covalent catalysis *already worked
through chymotrypsin*, general acid-base catalysis with the four residue groups, induced fit. What
it gives are conclusions. §6.4 gives the evidence for each, and that is the whole shape of this
node:

| Czech `3-6` asserts | §6.4 supplies |
|---|---|
| covalent catalysis via a transiently modified enzyme | the 1954 Hartley–Kilby burst — just under one molecule of p-nitrophenol per enzyme molecule, then a slower steady rate |
| histidine and serine are reactive active-centre residues | the catalytic triad Ser195–His57–Asp102, and His57's pKa rising from about 7 to above 12 on substrate binding |
| general acid-base catalysis happens | the bell-shaped pH curve split into kcat and 1/Km halves, each assigned to a named ionisation |
| induced fit: the enzyme adapts to the substrate | hexokinase closing on glucose, and the oxyanion hole showing that the fit that matters is to the **transition state** |
| only a true substrate can force the change | **the xylose experiment, which disproves it** — see the `lehNote` below |

**One `lehNote`, kind `conflict`, on `3-6` — the ninth in the data, and the first to contradict a
piece of *reasoning* rather than a number.** `3-6` closes by deriving inhibition from induced fit:
only a true substrate has affinity enough to force the conformational change, therefore molecules
that bind without evoking it act as inhibitors. Lehninger's classic hexokinase experiment
(A pp.209–210) is the counter-example: xylose, one carbon shorter than glucose, binds where it
cannot be phosphorylated, induces the active conformation anyway, and the enzyme is then tricked
into phosphorylating water — so ATP hydrolysis speeds **up**. The Czech corollary is a reasonable
inference that a named experiment happens to refute, which is exactly §9f's bar: a student holding
only the Czech framing gives a confidently wrong answer.

**The page range was correct at both ends, for once** — §13l and §13m each found an
`interpolated` TOC range wrong at one end, so this was checked the same way and held: the §6.4
heading is physically on A p.203 immediately below SUMMARY 6.3, and SUMMARY 6.4 is on A p.213 with
§6.5 opening further down the same page. The **per-subheading** allocation in the same TOC file is
NOT reliable — it puts the antibiotics subheading on A p.211 when it is on p.210.

**Citations: 16 rows, all OK on the first run, no ELSEWHERE and no UNCHECKED.** That is a first,
and it is not luck — every quote was chosen from a phrase already verified by direct search in A
*before* the prose was written, and every figure label was located the same way. The whole-project
audit stands at **260 OK / 0 ELSEWHERE / 0 UNCHECKED**, up 17 rows with the backlog still at zero.

**Four OCR realities met here, three of them new**, all recorded in the node's own `coverageNote`
so the next reader does not mistake them for bad citations:

- **A flattens exponents.** The billionfold rate enhancement of chymotrypsin and the millionfold
  glucose-over-water preference of hexokinase both read as bare three-digit numbers in A's text
  layer. Neither is quoted anywhere in the node; both are given in words.
- **The word SUMMARY can break apart** — A p.213 reads `sum ma ry 6.4`, so searching for the word
  scores zero on the page that carries it, while pp.188 and 223 render the same heading intact.
  Locate a SUMMARY by its section title.
- **`Ile16` returns no match in A at all**, so that residue is named in prose only and never
  inside a quote.
- **A line-breaks `low-barrier hydrogen bond` and uses an en dash in `enzyme–transition state
  complementarity`**, so neither can be a probe. Both ideas are described without quotation marks,
  per §13n's rule.

**§5's organic-chemistry rule was the real writing constraint, and the section survived it.** This
is the most mechanism-heavy material taken from the queue so far. Every idea is anchored on
something bench-visible: a coloured product appearing in a burst; a bell-shaped curve with two
shoulders that belong to two different residues; a U-shaped protein pinching shut; a sugar that
tricks an enzyme into phosphorylating water; a drug that jams a bacterial enzyme so the cell
bursts. No orbitals, no resonance structures, and the one place where electron density had to be
mentioned — enolase's carboxyl making the C-2 proton removable — lands immediately on a measurable
consequence, a lowered pKa.

**Cross-references done by hand, per §13m**, because the worked examples live in nodes that keep
their own keys: `3-2` (metal-ion roles), `5-1` (the four protease classes in Tab. 5.1, and the
chymotrypsinogen cascade), `6-1-1` (hexokinase as energetic coupling), `7-8-1` and `7-8-3`
(hexokinase and enolase as glycolytic steps). Each is named inside the point that touches it.

### 13q. The fourteenth node — `L-16-2-1`, §16.2 Reactions of the Citric Acid Cycle (2026-08-07): what to write when the Czech chapter is already strong

Rank 8, ratio 7.2. A pp.578–589, B pp.2103–2133, in a new `biochemie_pro/data/leh_ch16.js`,
joining Czech `6-2-2-1`, `6-2-2-2` and `6-2-2-3` through `citric-acid-cycle`, the key created for
it by the §9h decision. **Read §9h before this section** — the node could not be written at all
until four Czech nodes were re-keyed by hand.

**The interesting problem here was the opposite of every previous node's: the Czech coverage is
already very good.** Tab. 6.3 lists all nine steps with EC numbers and cofactors, Obr. 6.3 is a
full structural roadmap, and the three nodes walk every enzyme. A depth node that re-listed the
eight steps would have been pure padding — the failure mode §4 warns about. So the node was
written to supply only what a step list structurally cannot, and that turned out to be four
things, which is a template worth reusing whenever the Czech side is strong:

1. **The argument for the pathway's shape.** Acetate cannot be oxidised directly, because
   decarboxylating a two-carbon acid gives methane and almost nothing can oxidise methane; what
   enzymes handle is a methylene next to a carbonyl; therefore step 1 exists to attach the
   unreactive methyl group to something. Then the general rule: every step is either an oxidation
   or the preparation for the next one. A student who knows this stops memorising an arbitrary
   order.
2. **The thermodynamic thread**, which explains three separate facts at once: oxaloacetate is
   catalytic and micromolar; citrate synthase must therefore be strongly exergonic, and is,
   through the hydrolysis of an enzyme-bound citroyl-CoA; and malate dehydrogenase's badly
   unfavourable equilibrium runs anyway because citrate synthase removes its product.
3. **Mechanism and regulation the list omits**: citrate synthase's ordered binding as a device
   against wasting acetyl-CoA; aconitase moonlighting as iron regulatory protein 1 when it loses
   its iron-sulfur cluster (Box 16-1); two isocitrate dehydrogenases, NAD for the cycle and NADP
   for reductive biosynthesis; the phosphohistidyl intermediate and the two isozymes of
   succinyl-CoA synthetase; and **malonate**, which appears **nowhere in the Czech layer** even
   though `3-5` teaches competitive inhibition — the classic case of one small analogue stopping
   an entire pathway.
4. **Two things that are examinable and absent from the Czech book entirely**: the prochirality of
   citrate, with the 1940s carbon-14 controversy and Ogston's 1948 three-point-attachment
   resolution (Box 16-2) — which is the worked case for the sentence `3-6` states abstractly about
   distinguishing two identical substituents on a non-chiral carbon — and the fact that the two
   carbons leaving as CO2 in a turn are not the two that entered, because succinate and fumarate
   are symmetric.

**One `lehNote`, kind `conflict`, on `6-2-2-3` — the tenth in the data, and the first purely
numerical disagreement between the two books.** Czech `6-2-2-3` gives about 3 ATP per NADH and 2
per FADH2, hence 12 per acetyl-CoA and **38 per glucose** as 8 + 6 + 24. Lehninger uses the
measured non-integer stoichiometries, about 2.5 and 1.5, and reports **30 to 32 per glucose**
(TABLE 16-1, A p.589), the range coming from which shuttle carries cytosolic NADH into the matrix.
Neither book is careless — the difference is the P/O convention, not the biochemistry. **The note
says explicitly to answer 38 in this course** and to be able to explain the discrepancy, which is
the honest advice: this is a case where the depth layer must not be allowed to make the student
contradict their own examiner.

**Citations: 19 rows. 16 were OK on the first run and the 3 UNCHECKED were closed in the same
commit**, per the standing rule. Two of the three were in the `coverageNote` and one was a point
with no quotable phrase; the fix for the third followed §13m's rule — the forward pointer to §16.3
now names the section instead of citing a page in a section this node did not read. Whole-project
audit: **278 OK / 0 ELSEWHERE / 0 UNCHECKED**.

**A `cnNote` was deliberately NOT written, and the reason is worth recording** because the first
draft got it wrong. The draft invented `topic: "十四"` for the citrate cycle. All three Czech
partner nodes carry **no** `cnNote`, and the Chinese notes were never opened for this node — so the
number was a guess, which is exactly what §2c forbids: *flagging a gap is not the same as guessing
it*. The field was removed and the omission explained in the `coverageNote` instead.

### 13r. The fifteenth node — `L-19-2-1`, §19.2 ATP Synthesis (2026-08-07): writing the evidence for a claim the Czech node already makes

Rank 10, ratio 6.0. A pp.674–686, B pp.2408–2447, in **`biochemie_pro/data/leh_ch19b.js`** —
chapter 19's **second** file, because `leh_ch19.js` already holds `L-19-1-1` and was left
untouched. Both carry `respiratory-chain` and join the same five Czech nodes; §9i has the
decision, which cost no data change.

**The shape of the problem, and it is a third distinct one.** §6.4's Czech partner was thin on
evidence; §16.2's was strong on content but silent on argument. Here Czech `6-2-4-5` states the
*mechanism itself correctly* — ATP forms at the F1 site, stays bound, and is released when protons
through Fo change that site's conformation. That is Boyer's binding-change model, and a depth node
that explained it again would add nothing. So this node was written as **the evidence for a
sentence the reader already has**, which turns out to be the most satisfying kind of depth
available:

- **Obligate coupling**, shown by the direction nobody expects: oligomycin binds the *synthase*,
  touches no electron carrier, and stops *respiration*.
- **The artificial-gradient experiment** — mitochondria moved from pH 9 to pH 7 with valinomycin
  make ATP with no oxidisable substrate anywhere. As close to decisive as bioenergetics gets.
- **Racker's stripping and reconstitution**, which separates Fo the channel from F1 the head and
  plug.
- **The heavy-oxygen exchange**: phosphate comes back with three or four labelled atoms, so ATP is
  made and unmade repeatedly while bound, and the equilibrium constant on the enzyme is about 2.4
  against about 100,000 in free solution.
- **The number behind the claim**: ATP is bound with a dissociation constant of a picomolar or
  below and ADP at around ten micromolar — about 40 kJ/mol of binding energy, which pays for the
  bond. So the gradient is spent on **release**, and the reaction-coordinate diagram is unlike a
  normal enzyme's.
- **The rotation was watched**, not inferred: a fluorescent actin filament on the γ subunit,
  turning in discrete 120° jumps at an efficiency close to 100%.

**Where it earns its place in the balance sheet.** The last third of the section closes a loop
opened two nodes earlier. §13q's `lehNote` on `6-2-2-3` says Lehninger's glucose total is 30–32
rather than 38 but does not say *why* the number resists being an integer. §19.2 gives three
independent reasons: the protons needed per revolution equal the number of **c subunits**, which
is 8 in cattle and 10 in yeast; **one proton in four** is spent on the phosphate translocase and
the adenine nucleotide exchange rather than on synthesis; and cytosolic NADH enters at Complex I
or at ubiquinone depending on **which shuttle** the tissue uses, which is exactly the "3 or 5 ATP"
row in `L-16-2-1`'s TABLE 16-1 citation. The three nodes now form a chain, and each names the
others.

**No new `lehNote`, deliberately.** `6-2-4-5`'s proton arithmetic (6 H+ → about 3 ATP) differs from
Lehninger's (10 out, 4 in → 2.5), but that is the same disagreement already flagged on `6-2-2-3`,
and §9f's bar is that a warning appearing everywhere is a warning nobody reads. The point in this
node names `6-2-4-5`'s numbers directly and points at the existing note instead.

**Citations: 19 rows, 17 OK on the first run, 2 UNCHECKED closed in the same commit.** Both were in
the `coverageNote`, at the two pages that are *about* pagination rather than content — A p.674,
whose OCR is bad, and the wrong TOC range. The first instinct was to reword them so they stopped
being citations at all; that would have been gaming the checker. **A direct search showed A p.674's
OCR is bad only in patches — its opening question is perfectly clean**, so both rows were closed
with real quotes. Whole-project audit: **294 OK / 0 ELSEWHERE / 0 UNCHECKED**.

**One §5 note.** The section explains uncoupler chemistry using resonance stabilisation of the
anion, which is precisely what §5 forbids. The point rewrites it as a physical property that can
be stated without orbitals: the molecule is hydrophobic enough to cross the membrane in *both* its
protonated and its charged form, so it shuttles protons back and forth. Nothing is lost, and the
DNP-as-slimming-drug fact makes it stick.

### 13s. The sixteenth node — `L-11-2-1`, §11.2 Membrane Dynamics (2026-08-07): the mechanism behind three facts a thin node states as conclusions, plus two subjects the Czech layer lacks entirely

Rank 11, ratio 5.3. A pp.377–384, B pp.1403–1431, in **`biochemie_pro/data/leh_ch11b.js`** —
chapter 11's second file, alongside `leh_ch11.js`'s `L-11-3-1`, following the `leh_ch19b.js` naming
precedent from §13r. Joins Czech `8-5`, `8-5-1`, `8-5-2-1`, `8-5-2-2`, `8-5-2-3` through the
pre-existing `membrane-architecture` key; §9j has the decision, which cost no data change.

**A fourth shape for "what to write when the Czech partner is thin."** `8-5-2-1` states three
things as bare conclusions, in a handful of words each: fluidity depends on the lipids present,
the two leaflets differ in composition, and flip-flop is rare, for reasons the book calls unclear.
`8-5-2-2` adds that proteins move laterally and rotationally but not by flip-flop. None of that is
wrong, and none of it is explained. This node supplies the physical mechanism behind each claim
rather than restating it:

- **Fluidity** is not one property but a spectrum between a liquid-ordered and a liquid-disordered
  state, tuned by chain length, unsaturation and cholesterol — and cholesterol's own effect runs in
  **opposite directions** depending on its neighbour, ordering unsaturated phospholipids while
  fluidising sphingolipid-rich regions.
- **Flip-flop is rare because of a stated thermodynamic reason** — dragging a charged head group
  through the hydrophobic core costs a large positive free-energy change — and where it is needed
  anyway (asymmetric ER biogenesis, keeping phosphatidylserine off the outer leaflet), the cell pays
  a dedicated ATP-consuming enzyme: flippases, floppases, scramblases. The Czech node's "biological
  significance unclear" for flip-flop is answered directly: exposing phosphatidylserine on the
  outer face **is an apoptotic signal**, read by macrophages carrying its receptor.
- **Lateral movement is measured, not asserted**: FRAP times how fast a bleached patch refills
  (up to 1 μm/s), and single-particle tracking then complicates the picture with hop diffusion —
  lipids corralled by a fence of cytoskeleton-tethered protein, the same spectrin-anchored proteins
  Czech `8-5-3` already names as transporters.

**Two subjects the Czech layer has nothing on at all**: lipid rafts (with the structural reason
short transmembrane helices are excluded and long ones included) and caveolin-driven membrane
curvature; and the SNARE fusion machinery, with its five-step requirement for two membranes to
merge without leaking, and the fact that botulinum and tetanus toxins are precise specifically
*because* the target they cleave — the SNARE/SNAP25 complex — is a single, well-defined molecular
zipper.

**Citations: 20 rows. 19 OK on the first run; one `ELSEWHERE` closed in the same commit,
and it is worth reading because it is the exact §13m failure mode recurring live.** The point on
membrane curvature named two figures together — `FIGURE 11-24, FIGURE 11-25, A p.382` — and the
checker matched the **last label before the citation**, `FIGURE 11-25`, whose own caption sits on
A p.383, and reported the citation wrong. **Both figures' content is genuinely on p.382**; only the
second figure's own label happens to print a page later. Confirmed by direct search before touching
anything, per §13m/§13n's rule: *ELSEWHERE is a hypothesis, not a verdict.* Fixed by giving each
figure its own explicit page in the prose so no two labels sit before one citation. Whole-project
audit: **303 OK / 0 ELSEWHERE / 0 UNCHECKED**.

**No new `lehNote`.** Nothing in this section actually *contradicts* the three Czech nodes it
deepens — it explains them. The bar in §9f is disagreement or a load-bearing gap, not "more detail
exists", and §11.2 clears neither.

### 13t. The seventeenth node — `L-2-2-1`, §2.2 Ionization of Water, Weak Acids, and Weak Bases (2026-08-07): the floor under a curve the Czech book draws without explaining

**Rank 13, ratio 5.0, decided in §9k and written the same session.** In a new
`biochemie_pro/data/leh_ch2.js`, wired into `index.html`; **16 citation rows, all OK**, three of
them only after the `coverageNote`'s citations were given verbatim quotes in the same commit that
created them, per the §13o rule. Audit after the write: **321 OK / 0 ELSEWHERE / 0 UNCHECKED**.
`step5_check.py`: `RESULT: all checks pass`, 225 topics, **63 topicKeys — unchanged**, which is
the proof that the key was reused rather than created.

**What made this node worth writing, in one sentence.** Czech `2-1-2` draws glycine's titration
curve and reads three points off it, but the Czech book has no section on water anywhere, so it
never says what pH measures, where a pK comes from, or why the curve has the shape it has. This
section is that missing floor, and it is unusual in the queue for being almost entirely
*prerequisite* rather than *extension*.

**The four things it supplies that the Czech layer does not have at all:**

- **pH 7 is a measured consequence, not a convention.** Kw = 1.0 × 10⁻¹⁴ M² comes from folding
  water's own 55.5 M into an equilibrium constant of 1.8 × 10⁻¹⁶ M that was obtained by
  *conductivity measurement on pure water*. Neutral therefore means 10⁻⁷ M of each ion. Lehninger
  is explicit that the 7 "is derived from the absolute value of the ion product of water".
- **Proton hopping** (Fig. 2-13, A p.54) — charge crosses a long distance while no particle does,
  which is why acid-base reactions in water are exceptionally fast. This is the §5-compliant
  version of a mechanism: nothing about orbitals, everything about a measurable rate.
- **Glycine's two pKa values, 2.34 and 9.60** (Fig. 2-15, A p.57) → pI = 5.97. The Czech node
  gives the formula and no numbers; this gives the numbers the formula needs.
- **The pK points and the pI are opposite kinds of point on the same curve** — flattest/maximum
  buffering at a pK, steepest/minimum buffering at the pI. Czech `2-1-2` names both in one
  sentence without distinguishing them, which is the exam error this node is really aimed at.
  **Written and flagged in the node as an inference**, because §2.2 never discusses pI (that is
  §3.1); what it supplies is midpoint-equals-pKa plus the marked buffering regions, and the
  contrast follows from setting those beside the Czech sentence.

It also carries the **eleventh `lehNote`**, a `conflict` on `2-1-2` — the "quaternary ammonium"
terminology error, verified against the Czech source before being written. See §9k-i.

#### ⚠️ Five OCR traps in A on pp.54–59, all newly measured here

The first one is a **new shape** and the one most likely to bite again.

- **A figure label can OCR with a MIDDLE DOT instead of a hyphen.** A p.58 reads `FIGURE 2· 16`,
  so a probe built as `figure 2-16` scores **0 hits on the page that carries it** and matches
  p.59 instead — a false ELSEWHERE. `norm()` collapses whitespace around a *hyphen* between
  digits (§13m's fix) but a middle dot never reaches that rule. Safe because the checker takes
  **an OK from any probe over an ELSEWHERE from any other**, so a verified quote in the same
  field rescues the row — which is exactly what happened. **Do not rely on a figure label alone
  when the citation is to A p.58.**
- **`[H+]` renders as `[W]` and `[OH−]` as `[OW]`** throughout pp.54–59. Never build a probe
  containing a bracketed concentration.
- **The middle dot also appears inside ordinary words** on p.54: `reversible · onization`. So the
  sentence "reversible ionization is crucial to the role of water in cellular function" is
  verbatim on the page and unfindable.
- **A whole subheading is missing from A's body text layer.** "The Ionization of Water Is
  Expressed by an Equilibrium Constant" appears **only in the front-matter Contents**, along with
  ~150 words around it (the activities paragraph, and the "two of every 10⁹ molecules" figure).
  A p.55 is the shortest page in the range at 3,421 characters. Locate that subheading by the
  surrounding derivation, never by its own text.
- **`Brønsted` OCRs as `Bnzinsted`** on A p.57; `where` breaks to `w here` in Fig. 2-15's caption;
  `Glycine, carboxyl` breaks to `Glycine, ca rboxyl`.

#### The method that made this the cleanest citation run yet

**Every quote was tested against A before being written into the node**, using a throwaway script
that imports the *same* `norm()` and the same `printed = pdf − 36` arithmetic as
`verify_citations.py`. 46 candidate phrases were tried, each with the A page it was supposed to
prove; 40 passed on exactly the intended page, 6 failed and were discarded — and every one of the
six failures turned out to be one of the OCR traps above rather than a wrong page. Writing then
used only quotes already known to verify.

**This is worth making standard.** It inverts the usual loop: instead of writing the node, running
the audit and chasing ELSEWHERE rows back into the book, the page evidence is settled first and
the prose is built on top of it. The result was 13 of 16 rows OK on the first run, with the other
three being `coverageNote` citations that simply had no quote yet.

### 13u. The eighteenth node — `L-8-2-1`, §8.2 Nucleic Acid Structure (2026-08-07): the section that proves the pre-test method, and two conflicts where the Czech book is simply wrong

**Rank 15, ratio 5.0, decided in §9l and written the same session.** In a new
`biochemie_pro/data/leh_ch8b.js` (chapter 8's SECOND file — `leh_ch8.js` holds `L-8-3-1` and was
left untouched), wired into `index.html`; **17 citation rows, all OK**. Audit after the write:
**340 OK / 0 ELSEWHERE / 0 UNCHECKED**. `step5_check.py`: `RESULT: all checks pass`, 226 topics,
**63 topicKeys — unchanged**.

#### 🔬 §13t's pre-test method, run on a section where it mattered — 21 of 54 quotes were on the wrong page

This is the run that turns §13t's suggestion into a rule. 54 candidate quotes were tested against
A before a word of prose was written, each tagged with the page it was *supposed* to prove.
**Thirty-one landed where expected. Twenty-one did not — and every single one of the 21 was off by
exactly one page, always in the same direction, always one page EARLIER than predicted.** Two were
not found at all, both OCR breakage.

The cause is §13l's rule, seen in its purest form yet: the pages had been predicted by **scaling
from B's layout**, and B's pagination drifts against A's by roughly one page across this section.
Had the node been written first and audited afterwards, it would have produced **21 ELSEWHERE rows
on citations that were each one page out** — the exact failure mode §13l describes, at a scale
that would have taken hours to chase back through the book.

**The rule, stated plainly: never predict an A page from B's layout, not even approximately, and
not even when the drift has been consistent so far. Test the quote.** The test costs one script
run; the alternative costs an audit cycle per citation.

A second, smaller finding from the same run: **OCR damage is per-REGION, not per-page.** A p.278's
figure-caption region fractures words with plain spaces (*variety* and *phenylalanine* both break),
which `norm()` cannot rejoin because it only handles hyphenated breaks — but the running body text
on that same page is clean and quotes from it verify fine. Do not write off a page; write off a
region.

#### What the node adds, given how much Czech `4-1-2` already has

`4-1-2` is one of the better Czech nodes and already carries the helix, the base pairs with the
C1′–C1′ distance, complementarity, antiparallelism, stacking and the existence of A- and Z-DNA. So
the node deliberately supplies only four things:

- **The evidence trail**, which the Czech layer states as a premise: Miescher's nuclein (1869),
  the Avery–MacLeod–McCarty transformation, Hershey–Chase (1952), Chargaff's rules, and the
  Franklin/Wilkins x-ray pattern with its two periodicities. The point of framing it this way is
  that it makes the double helix **a deduction under two constraints** rather than an assertion.
- **The numbers** — 10.5 bp per turn in solution against the fibre's 10, and Fig. 8-17's full
  A/B/Z comparison table (§9l has the figures).
- **Two corrections**, the substance of §9l-i.
- **Two whole subheadings with no Czech counterpart at all**: sequence-dependent structures (bends
  at runs of four or more adenosines, palindromes vs mirror repeats, hairpins and cruciforms,
  Hoogsteen pairing, triplex and G-tetraplex DNA) and RNA structure (monocistronic vs
  polycistronic, A-form-only duplexes, G·U pairing, hairpins, ribozymes).

**One cross-link worth noticing between nodes.** The triplex point records that the cytosine in a
C≡G·C⁺ triplet has its pKa shifted from 4.2 to above 7.5 by the structure around it — which is
exactly the phenomenon `L-2-2-1` (§13t) treats in the abstract. That is the depth layer starting
to reference itself, which is what the `topicKey` architecture was for.

**A note on the palindrome definition:** Lehninger's own wording (*"A palindrome is a word,
phrase, or sentence that is spelled identically"* forward or backward, with ROTATOR and NURSES RUN
as the examples) is borrowed whole into the node, because the distinction that actually gets
tested — a mirror repeat is symmetric but **not self-complementary**, and therefore cannot form a
hairpin or cruciform — only makes sense once the literal meaning is in place.

### 13v. The nineteenth node — `L-26-2-1`, §26.2 RNA Processing (2026-08-07): RNA as its own enzyme, a drug built on one exon, and two citation-checker bugs found by a broken parse rather than a wrong page

**Rank 16, ratio 4.9, decided in §9m and written the same session.** In a new
`biochemie_pro/data/leh_ch26.js`, wired into `index.html`; **12 citation rows, all OK** after two
fixes described below. Audit after the write: **352 OK / 0 ELSEWHERE / 0 UNCHECKED**.
`step5_check.py`: `RESULT: all checks pass`, 227 topics, **63 topicKeys — unchanged**. It carries
the **fourteenth `lehNote`**, a `gap` on `4-2-4-2` — the GU...AG "necessary and sufficient" claim
§9m already covers.

**What made this node worth writing.** Two Czech nodes touch this subject and both stop short:
`4-1-4-2` names bacterial rRNA processing in one sentence and says nothing about eukaryotic
processing; `4-2-4-2` names capping, polyadenylation and splicing as three steps but frames them
only as background to gene regulation, and its own claim that GU and AG are "necessary and
sufficient" to define a splice site overstates what the chemistry requires. The node supplies:

- **RNA as its own catalyst.** Group I and II introns self-splice with no protein enzyme at all,
  discovered by Thomas Cech in 1982 transcribing a *Tetrahymena* rRNA gene in vitro with purified
  *bacterial* RNA polymerase — no *Tetrahymena* protein present — and the RNA spliced itself out
  correctly anyway. The spliceosome, despite needing dozens of proteins, uses a nearly identical
  RNA-based catalytic core, evidence it evolved *from* a ribozyme.
- **The actual chemistry**, correcting `4-2-4-2`: two transesterifications, the real nucleophile a
  branch-point adenosine *inside* the intron, not the GU/AG boundary — and about 1% of human
  introns use a minor spliceosome with AU...AC boundaries instead, so "necessary" was too strong to
  begin with.
- **Alternative splicing as a major phenomenon** (>95% of human genes) rather than Czech's one
  clause, anchored to nusinersen — an antisense drug that corrects one skipped exon in SMN2 and is
  now an approved treatment for a disease once uniformly fatal in infancy.
- **tRNA processing, mRNA half-life, and miRNA biogenesis** — none of which Czech touches at all.
  The CCA-adding enzyme needing no template is the single cleanest bench fact in the node: *"not
  dependent on a DNA or RNA template — the template is the binding site of the enzyme"* itself.

#### ⚠️ Two bugs found while writing this node, neither about a wrong page

Both are documented in full in §9m; the short version, because the next node will hit at least one
of them again:

1. **A book quote containing a prime mark (`2'`, `3'`, `5'`) breaks `verify_citations.py`'s own
   `QUOTED` regex** when wrapped in the checker's single-quote delimiters, because the regex
   excludes *every* quote-mark character from inside a match, prime included. The citation silently
   loses its own probe and piggybacks on a neighbour's, which the checker correctly flags as
   `UNCHECKED` rather than a false `OK` — but the fix is to never quote a prime-bearing sentence
   whole; paraphrase it and lift a short adjacent phrase without a prime instead. This is §9g's
   already-documented warning (*"Choose quotes with no prime..."*) confirmed a second time, for a
   different underlying reason.
2. **Double quotes inside a `coverageNote` that is itself a double-quoted JS string terminate the
   string early**, which is not a citation-checker problem at all — it is a parse failure, and
   `verify_citations.py` reports nothing about it because it never reaches that file. Caught only
   because `esprima.parseScript()` was run on the file first. **The rule going forward: run a parse
   check immediately after editing any field that quotes book text, before running the citation
   checker** — a broken parse fails silently downstream in a way that looks unrelated.

---

### 13w. `L-23-3-1` — the hormone chapter finally gets its physiological question, and the cell
that measures sugar by burning it (2026-08-07)

**Rank 19, §23.3 Hormonal Regulation of Fuel Metabolism, ratio 3.9 — the LAST unwritten rank in
the top 20.** Written into a new `biochemie_pro/data/leh_ch23b.js` (chapter 23's second file;
`leh_ch23.js` was left untouched, the a/b split already used for chapters 8, 11 and 19), wired
into `index.html`. **34 citation rows, all OK; the audit closed at 408 OK / 0 ELSEWHERE /
0 UNCHECKED**, so the zero backlog §13o established is intact. Validator ends `RESULT: all checks
pass`. Decision in §9n. The node carries the **fifteenth `lehNote`**, a `gap` on `7-12-2`, taking
the total to **15 notes on 13 nodes**.

**Why it was worth writing, in one sentence:** Czech §10.3 teaches, thoroughly and correctly, *how*
a hormone signals — receptors, cAMP, IP₃/DAG, tyrosine kinases, the nuclear steroid route — and
never once says what that machinery is *for*. This node supplies the question those ten nodes are
the answer to: hold blood glucose near 4.5 mM, minute by minute, whether the subject has just eaten
or has not eaten for six weeks.

**Measured, so nobody re-derives it:** across the whole Czech layer, `obesity` 0 hits, `leptin` 0
hits, `glycaemia` 0 hits, and `diabetes` appears **only** as a cause of acetyl-CoA flooding, in
`10-8` and `8-4-4-3`. No Czech node states the set point, none contains the well-fed / fasted /
starving framework, none says what insulin switches on enzyme by enzyme — and above all **none
explains how insulin SECRETION is regulated.** The β-cell glucose sensor is absent from the Czech
layer entirely.

**The one idea the node is built around**, and the one an examiner can be walked through: the
pancreatic β cell has **no glucose receptor**. It measures glucose by *metabolising* it. GLUT2 →
glucokinase → glycolytic flux → ATP → ATP-gated K⁺ channel closes → membrane depolarises →
voltage-gated Ca²⁺ channels open → insulin exocytosis. **The sensor IS glycolysis.** The
counterintuitive step worth drilling is that *closing* a K⁺ channel depolarises, because the open
channel is what held the membrane negative. And the feedback closes on the same reaction it opened
on — falling glucose is read as *"a diminished flux through the glucokinase reaction"* (A p.861).
The mechanism is then proved real rather than diagrammatic by the fact that **that one channel is
both a drug target and a disease gene**: sulfonylureas close it deliberately; mutations jamming it
open cause neonatal diabetes; mutations jamming it shut cause hypoglycaemia severe enough that
part of the pancreas may be removed (A p.862). This is §5's organic-chemistry rule satisfied at no
cost — every step is a measurable, bench- or bedside-visible event.

**The `lehNote`, and why it clears §9f's bar.** `7-12-2` (`glycogen-metabolism`) draws the entire
epinephrine/glucagon → cAMP → protein kinase → phosphorylase-kinase cascade at diagram level, and
writes `adrenalin/glukagon` as **a single undifferentiated pair with no target organ named**.
Lehninger is explicit that their reach differs: *"Although its primary target is the liver"*
(A p.862), and Table 23-4 is titled *"Production and Release of Glucose by the Liver"* (A p.863).
Glucagon reaches adipose tissue but **not skeletal muscle**; epinephrine does. A student revising
from `7-12-2` alone answers that glucagon mobilises muscle glycogen — **wrong twice over**, since
muscle carries no glucagon receptors and muscle glycogen could not raise blood glucose anyway,
lacking glucose 6-phosphatase. Nothing else in the section met the bar; the rest are gaps this node
fills, not errors the Czech book makes.

#### The pre-test method, third run, and the number that matters

§13t proposed testing every candidate quote against A before writing prose; §13u turned it into a
rule after 21 of 54 quotes came back one page out. **Third application: 70 candidates tested, 64
resolved on exactly one page, 6 failed — and all six failures were OCR damage, not wrong pages**,
each replaceable by a neighbouring fragment on the very same page. **Zero page errors, because
every page was searched rather than predicted.** That is the whole difference from §8.2's run, and
it should now be treated as the default rather than an optimisation.

The six OCR-damaged spans, named without quotation marks per §13o's rule so the checker cannot
adopt them as unfindable probes: the words sulfonylurea drugs; the phrase activating TAG breakdown;
the clause epinephrine stimulates glucagon secretion; the span four identical SUR1 subunits; the
phrase a tumor on the pituitary gland; and the clause is not metabolized but is eliminated in the
breath. In every case a fragment of the same sentence resolved on the expected page, confirming
§13u's finding that **OCR damage is per-region, not per-page.**

⚠️ **Two label pages are ambiguous and are therefore deliberately UNCITED anywhere in the node:**
`FIGURE 23-24` resolves on both A p.860 and A p.861, and `FIGURE 23-27` on both A p.864 and
A p.865 — the caption-versus-cross-reference ambiguity of §16c. Their material is cited by verbatim
quote on its own page instead. Every figure that *is* cited was given its own explicit page rather
than left in a run of labels, which is §13s's failure shape: Tab. 23-3 = A p.859; Fig. 23-22 =
A p.860; Fig. 23-23 = A p.861; Fig. 23-25 = A p.862; Fig. 23-26 = A p.863; Fig. 23-28 = A p.866.

#### ⚠️ A new UNCHECKED shape, and the cheap fix — 28 rows on the first run

The first citation run returned **0 ELSEWHERE but 28 UNCHECKED**, which looks alarming and was
entirely mechanical. `CTX_BACK` is 90 characters: **a quote only becomes a probe if it sits within
90 characters BEFORE its own citation.** Three shapes produced the 28:

1. **Short CZ anchor tags carrying a page number** — `points[N].cz` is a few Czech words plus
   `(A p.864)`, with no room for a quote. **Fix: drop the citation from the CZ tag entirely.** Per
   §11 the CZ half is a short anchor tag only, and the page is already cited in the `en` half, so
   the row should never have existed. Seven rows closed this way.
2. **`terms[].def_en` and `quiz[].why_en` that paraphrased instead of quoting.** The sentence next
   to the citation said the right thing in the node's own words. **Fix: lift the book's phrasing
   verbatim into the position already adjacent to the citation** — no new claim, just quote marks
   around what was already there. Thirteen rows.
3. **A `coverageNote` list of measured anchors** — `Subheading Name = A p.863` with no quote.
   **Fix: wrap each subheading title in typographic quotes.** A subheading title *is* verbatim page
   text, so it makes an excellent probe at zero cost. Eight rows.

**Use typographic quotes `“ ”`, never ASCII `"`, inside any double-quoted JS string** — this is
§9m's second bug avoided by construction rather than discovered by a broken parse. The whole
28-row backlog closed in one pass and the file parsed on the first attempt afterwards.

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

A clean run must end `RESULT: all checks pass`. It also runs negative tests, because a
check that never fails is not a check. **The topic counts it prints move with every node, so
they are deliberately NOT quoted here** — an earlier version of this paragraph froze
`208 topics (207 cz, 1 lehninger)` into the text and was eleven nodes out of date within a
day, which reads as a failure when it is not. For the current figures see the `Start here`
block at the top of this file, or just run the script; `scripts/audit_handoff.py` now
cross-checks those figures against the live data and fails if they drift.

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
