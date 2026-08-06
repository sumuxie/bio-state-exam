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

**Next up: §9 step 6 — writing content.** Everything mechanical is finished; from here on the
work is judgement, and the pieces that need a human are listed below rather than buried.

**What to ask the user before writing content**, in priority order:

1. **The six regulation sections in §9b that were deliberately left un-ruled** (§14.5, 15.1,
   15.3, 19.4, 19.5, 28.3, 43 pages). They are not new topics; they are the regulation layer of
   pathways the Czech book already teaches, so neither the "work properly" nor the "one line"
   bucket obviously fits.
2. **Any classmate report of a real exam question.** §3 makes these outrank everything in this
   file, and one has already overturned a plan once.
3. **Which topic to start with.** The user has chosen to work the whole high-ratio set (§8), but
   not an order. §9a's queue is the natural one; the first integration card (tryptophan, §4) is
   the natural alternative because it exposes the card shape early.

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

## 0. Current state — everything is committed and live

Nothing is left dangling. `main` = `585664c` (2026-08-06), pushed, working tree clean apart
from the long-standing untracked `extracted_*/` evidence folders. Chapters 9 and 10 are
committed, merged, and deployed.

| | |
|---|---|
| stable revision site (chapters 1–10, 207 nodes) | https://sumuxie.github.io/bio-state-exam/ → redirects to `biochemie_basic/` |
| local, same content | `file:///C:/Users/Admin/Downloads/bio-state-exam/biochemie_basic/index.html` |
| **where you work** | `biochemie_pro/` — https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

### Known pending item — a cosmetic deploy optimisation has not landed

**The site is fully functional. This is performance only; do not let it block content work.**

The last deployment that actually reached production is `c9f9eb2`, and it contains everything
that matters: chapters 9–10, `biochemie_basic/`, `biochemie_pro/`, `PESB/`.

What has not landed is a change narrowing the Pages artifact. The deploy job used to upload the
repository root, which meant shipping `extracted_raw/` — roughly 117 MB of textbook page scans
kept as an evidence trail — to serve a 9 MB site, and deploys were taking 7.5 minutes. The job
now stages only `index.html` and the three app directories into `_site`. That change is
committed but its deploys have not succeeded:

- `807eb90` — `validate` passed, `Stage only the site files` and `Upload site` both passed,
  then `actions/deploy-pages@v4` failed with **`Timeout reached, aborting!`**. So the artifact
  was built and uploaded correctly; the failure is on the Pages side.
- `3cba8e0` — ran `in_progress` for over six minutes, then the unauthenticated GitHub API rate
  limit (60 requests/hour) cut off the polling. Outcome unknown at the time of writing.

**How to tell which artifact is live, without the API:** request
`https://sumuxie.github.io/bio-state-exam/HANDOFF.md`. A **200** means the old repo-root
artifact is still being served; a **404** means `_site` has taken effect. Checked again
2026-08-06 after the step 4/5 push: still **200**, and `biochemie_pro/` also returns 200 — so
the site is serving fine, from the old wide artifact. Unchanged, still cosmetic.

If it keeps timing out, the thing to question is whether Pages is struggling with the large
repository checkout rather than the artifact — `actions/checkout@v4` still pulls all 117 MB
before the staging step runs, so the narrowing helped the upload but not the checkout. Adding
`with: { sparse-checkout: ... }` to the deploy job's checkout would address that. Not urgent.

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

**The two hardest are the two Lehninger cannot rescue — but the Chinese notes can.** §6 records
that ninhydrin, sedimentation coefficient, colloid and Tyndall are all absent from Lehninger 8,
so §2.1.3 and §2.2.6 are the user's weakest ground *and* unsupported by the designated depth
source. They are **not** unsupported overall: the handwritten Chinese notes were read on
2026-08-06 (§6a) and cover both, in places more fully than the Czech book does.

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

**Absent from the entire book.** All re-confirmed 2026-08-06 with the section bounds fixed, so
Glossary and Index hits no longer masquerade as coverage — use `lehninger_index/scripts/locate.py`,
which reports those separately as `(outside chapters)`:

| | | why it matters |
|---|---|---|
| `Beer-Lambert`, `Beer's law` | **0** | the A→concentration step |
| `molar extinction coefficient` / `molar absorption coefficient` | **0** | same |
| `ninhydrin` | **0** | Czech §2.1.3's headline reaction |
| `Merrifield`, solid-phase peptide synthesis | **0** | Czech §2.1.3's protecting-group chemistry |
| `sedimentation coefficient`, `colloid` | **0** | Czech §2.2.6's whole method set |
| `Tyndall` | index only | same |
| `Svedberg` | 1 in-chapter hit (ribosome sizes) | not the Svedberg *equation* |
| `creationism`, `intelligent design` | **0** | Czech §1.6 frames origin-of-life around them |

So Lehninger says Trp absorbs at 280 nm but never closes the loop to *how you turn an
absorbance into a concentration*. That practical last step is genuinely missing from the source.

**Two Czech sections are stranded by this**, and it is not a search artefact — see §5a. §2.1.3
(amino-acid derivatization chemistry) and §2.2.6 (colloid behaviour, ultracentrifugation, the
Svedberg equation) have essentially no Lehninger counterpart, because Lehninger 8 answers the
same questions with a later generation of methods: size-exclusion chromatography (15 pages,
§3.3), SDS-PAGE and mass spectrometry (45 pages, §3.4). The *question* "how do you measure a
protein's Mr" is shared; only the answers differ by era. Teach the Czech book's answer, because
that is what the exam is based on; the modern one is context.

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

**Ask about these six specifically.** Do not fold them into either bucket by default.

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
