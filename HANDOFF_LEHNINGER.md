# Handoff — the Lehninger phase

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

**§9 step 6 has started. The first Lehninger node is written and validates: `L-3-4-1` in
`biochemie_pro/data/leh_ch3.js` (§13).** It joins Czech node `2-2-1` through
`topicKey: "protein-primary-structure"` — the Czech book says *why* an amino acid sequence
matters, Lehninger §3.4 says *how* one is determined.

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
> **⛔ Still not built: the topic view** — `topicKey` grouping both books side by side, the
> actual feature `pro` exists for (§4). The data is ready for it: `amino-acids` already joins
> `E-tryptophan`, `2-1-1` and `2-1-2`; `protein-primary-structure` joins `L-3-4-1` and `2-2-1`.
> Nothing in the UI surfaces those groupings yet. **This is now the top remaining item.**

**Working locally — read §14 before assuming the remote is the source of truth.** Since the
2026-08-06 scan-exposure fix the working copy and the remote deliberately hold different things:
~500 MB of textbook page scans are local-only *by design*. §14a is the table of what lives
where, §14b runs the apps, §14c checks the data with no `node` on this machine, §14d looks
things up in Lehninger without opening a 1.1 GB PDF.

**What to ask the user before writing content**, in priority order:

1. **The six regulation sections in §9b that were deliberately left un-ruled** (§14.5, 15.1,
   15.3, 19.4, 19.5, 28.3, 43 pages). They are not new topics; they are the regulation layer of
   pathways the Czech book already teaches, so neither the "work properly" nor the "one line"
   bucket obviously fits.
2. **Any classmate report of a real exam question.** §3 makes these outrank everything in this
   file, and one has already overturned a plan once.
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

`main` = `3ac38e6` (2026-08-06), pushed. Working tree is clean apart from the untracked
`extracted_*/` and `verify_crops/` evidence folders — **which are no longer harmless; see the
exposure section below.**

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

The fix is cheap — for a secondary section, use the key of the Czech section that points at it,
so the depth node lands on the topic it actually deepens. But it makes the key *name* misleading
(a myoglobin/haemoglobin node filed under `amino-acid-derived-molecules`), and §9c's own caveat
already allows renaming a `topicKey` later. **Decide the naming before writing any of the top
three**, and until then prefer a primary — the first node (§13) deliberately did.

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

## 10. Reproducing the measurements

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
- **Spot-check the anchor before cropping.** §13c found `FIGURE 3-24` recorded at A p.104 when
  the figure is near A p.92 — the entry matched a later cross-reference. `lehninger_AB_anchors.json`
  is good to ~1 page (§9 step 2) but individual entries can be wrong, and a wrong anchor here
  crops the wrong page rather than merely citing it. Verify against surrounding text first.
- **PyMuPDF renders a page region directly** — `page.get_pixmap(clip=fitz.Rect(...), dpi=…)`.
  `HANDOFF.md` §9b already documents the crop-and-upscale pattern used to read printed numbers
  off a scan; the same call produces a figure crop. Nothing new needs installing.
