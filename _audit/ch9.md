# Audit — ch9 (all 27 nodes)

Nodes read: 27 (9-1 … 9-27), every field of every node: `mustKnow`, `summary`, `points`,
`terms`, `quiz`, `oral` (including `why_en/cn`, `answer_en/cn`, `model_en`, `checklist`),
`coverageNote`, `cnNote`.

Findings: **9** — CONTRADICTS-NODE 5, INTERNAL-NUMBERS 3, UNSOURCED 1
Nodes carrying a finding: 7 (`9-1`, `9-4`, `9-8`, `9-17`, `9-18`, `9-19`, `9-20`)
Clean: **20**

Context: chapters 9 and 10 were drafted in one pass with no second reader, so this is the first
independent reading of the prose. The two findings that matter are both in the Calvin-cycle
pair (`9-18`/`9-19`) and are the same defect twice; everything else is low or medium.

---

## Findings

### 9-18 — INTERNAL-NUMBERS — severity: high

**The field says** (`oral.model_en`, closing sentence): "Two ATP per turn, one NADPH."

**The node says** (`summary`, and `points[7]`): "So the cycle has exactly two ATP-consuming
steps — the kinase at the start of the reductive part and the kinase at the regeneration step —
and one NADPH-consuming step." And, in the node this one continues from, `9-17` `points[6]`: "A
six-carbon intermediate arises … which very rapidly hydrolyses with formation of **TWO**
molecules of 3-phosphoglycerate (PG)."

**Why these cannot both hold:** one carboxylation yields two PG, so one turn of the cycle runs
the PG → 1,3-BPG → GAP pair **twice**: 2 ATP and 2 NADPH there, plus 1 ATP at
phosphoribulokinase = **3 ATP + 2 NADPH per CO₂ fixed**. The `summary` sentence is defensible
read strictly as a count of *steps* (there are indeed two ATP-consuming steps and one
NADPH-consuming step in the cycle's step list), but the `oral` converts that count of steps into
a count of molecules and states the wrong stoichiometry outright. This is the number a candidate
is most likely to be asked for, and the wrong version is the last thing the model answer says.

Note also that nothing in `coverageNote` claims this tally came off the page: p.210 is recorded
as giving the two-step scheme, the enzyme names and the four fates of GAP. The tally is the
node's own arithmetic, so it is also unsourced against the book.

**Resolvable from the node alone?** Yes — `9-19` `points[0]` supplies the missing factor of two
("ribulosebisphosphate carboxylase adds CO₂ giving **2 ×** 3-phosphoglycerate"). No page needed.

---

### 9-19 — INTERNAL-NUMBERS — severity: high

**The field says** (`oral.model_en`): "phosphoglycerate kinase spends **an** ATP to make
one-three-bisphosphoglycerate, and glyceraldehyde phosphate dehydrogenase spends NADPH to reduce
it … Then phosphoribulokinase spends **the second ATP** to remake ribulose-one-five-bisphosphate
and the cycle closes."

**The node says** (`points[0]`): "(2) ribulosebisphosphate carboxylase adds CO₂ giving **2 ×**
3-phosphoglycerate; (3) phosphoglycerate kinase (ATP) gives 1,3-bisphosphoglycerate; (4)
glyceraldehyde-3-phosphate dehydrogenase (NADPH, releasing Pᵢ) gives GAP."

**Why these cannot both hold:** the same defect as `9-18`, and here it sits inside the node that
states the factor of two. If step 2 makes two PG, steps 3 and 4 each run twice, so
phosphoribulokinase spends the *third* ATP, not the second. The `checklist` item "Gave both
reduction steps with their cofactors (ATP, NADPH)" carries the same singular framing.

**Resolvable from the node alone?** Yes — entirely from `points[0]` of this node.

---

### 9-19 — CONTRADICTS-NODE — severity: medium

**The field says** (`mustKnow`): "Only **four** of the cycle's thirteen steps actually fix and
reduce carbon; the other **nine** exist solely to rebuild the acceptor."

**The node says** (`oral.model_en`): "The fixation phase is **one step** … The reduction phase is
**two steps** … The third phase is regeneration, and it is the long one: … and finally either
phosphopentose epimerase or ribose phosphate isomerase … Then phosphoribulokinase spends the
second ATP to remake ribulose-one-five-bisphosphate and the cycle closes."

**Why these cannot both hold:** step 1, phosphoribulokinase, converts Ru5P into RuBP. It fixes no
carbon and reduces no carbon — it rebuilds the acceptor, which is exactly the job the `mustKnow`
assigns to "the other nine". `points[0]` groups it with the fixation/reduction half ("Steps 1-4
are the fixation and reduction half"), following the figure's numbering; the `oral` puts the same
enzyme at the *end* of the regeneration phase, which is where its chemistry belongs. The counts
that follow are 4 + 9 on one reading and 3 + 10 on the other. The arithmetic closes either way
(both sum to 13), which is why a numeric scan would not catch it.

**Resolvable from the node alone?** Yes — the node's own thirteen-step list settles which bucket
step 1 belongs to. This is a wording choice, not a page question.

---

### 9-8 — CONTRADICTS-NODE — severity: medium

**The field says** (`quiz[1]`, short): q_en "Which accessory pigments fill the **middle (roughly
500–600 nm)** of the visible spectrum, where the chlorophylls absorb poorly?" answer_en "The
carotenoids (supplementing the yellow-green part) and, in cyanobacteria and red algae, the
**biliproteins/phycobilins** — phycoerythrin and phycocyanin in Obr. 9.4."

**The node says** (`oral.model_en`): "Cyanobacteria and red algae add the biliproteins, the
phycobilins — phycoerythrin and phycocyanin — which push the effective range **into the blue and
the red**." Same in `checklist`: "Gave carotenoids the yellow-green region and phycobilins the
**blue/red** extension." And `points[3]` carries both claims in one sentence pair: "…biliproteins,
i.e. phycobilins, which extend the photosynthetically effective radiation into the blue and the
red regions. Obr. 9.4 shows phycoerythrin and phycocyanin as the two curves occupying the
**500-650 nm middle ground**."

**Why these cannot both hold:** 500–650 nm is green through orange. By this chapter's own
numbers (`9-7` `points[1]`, `points[2]`) chlorophyll's two bands are 415–440 nm and 640–700 nm,
i.e. the blue and the red are precisely where chlorophyll already absorbs, and 500–650 nm is
precisely the gap. This node's `mustKnow` describes that gap ("chlorophyll alone leaves a hole
right in the middle … the accessory pigments exist to fill that hole in"). So the book's prose
("blue and red") and the node's own figure reading ("500-650 nm middle ground") place the same two
pigments in opposite parts of the spectrum, and the node then splits: the quiz answers with the
figure, the oral and checklist answer with the prose. A candidate who learns the oral will fail
the quiz in the same node.

What makes this a finding rather than a preserved book quirk is that it is **not flagged**. Four
other nodes in this chapter carry an explicit `FLAG:` point for exactly this kind of clash
(`9-20`, `9-21`, `9-23`, `9-25`); here the two incompatible readings are simply printed next to
each other in `points[3]` with no comment, and `coverageNote` repeats the prose version without
noting the figure disagrees with it.

**Resolvable from the node alone?** No, not for which reading is right — needs p.205/206 and
Obr. 9.4. But the repair is a `FLAG` point and a `coverageNote` line of the same form the other
four nodes already use, not a content change; and the quiz/oral split can be made consistent now.

---

### 9-4 — CONTRADICTS-NODE — severity: low

**The field says** (`mustKnow`): "the fastest steps (10⁻¹⁵ to 10⁻⁸ s) are physics and therefore
temperature-independent, while everything slower is enzyme chemistry and therefore is not."

**The node says** (`points[2]`): "In the thylakoid membranes and their submembrane particles: the
whole complex of electron- and proton-transfer processes including water photolysis, yielding ATP
and NADPH, at **10⁻¹⁰ to 10⁻²** s."

**Why these cannot both hold:** the physics window (10⁻¹⁵–10⁻⁸ s) and the biochemistry window
(10⁻¹⁰–10⁻² s) overlap across two decades, so there is no boundary at 10⁻⁸ s at which
temperature-independence stops. In the 10⁻¹⁰–10⁻⁸ s decade the node assigns the same events to
both disciplines. The book's ranges overlap as printed (the physiology 1–10⁴ s and ecology 10³ s+
pair overlaps too), so the overlap is not the node's doing; the `mustKnow` is what turns the
book's soft boundary into a hard one and hangs a testable claim on it. Low because a careful
reader takes "everything slower" loosely.

**Resolvable from the node alone?** Yes — soften the `mustKnow` to the book's own claim, which is
only that the physics-level events are temperature-independent.

---

### 9-17 — CONTRADICTS-NODE — severity: low

**The field says** (`coverageNote`): "FLAG: the book's own subunit wording gives 8 S and 8 L in
total, **whereas** the mechanism paragraph immediately below speaks of EIGHT active sites; both
readings were checked against the scan and both are as printed — see the points below, where this
is **discussed rather than silently reconciled**."

**The node says** (`points[4]`): "Note that the book's own subunit description (a dimer of 4S+4L
monomers) totals 8 large subunits, which is **consistent with** eight catalytic sites, since it is
the large subunits that carry them."

**Why these cannot both hold:** the `coverageNote` presents 8S+8L versus eight active sites as a
tension ("whereas", "FLAG"), and `points[4]` then shows there is no tension at all — 2 × 4 L = 8 L,
which is exactly eight sites. The arithmetic in `points[4]` is right; it is the `coverageNote`
that is wrong to file this under the same heading as the chapter's four real book-vs-reference
flags, and it promises an unresolved conflict that the node then resolves. A reader who trusts the
FLAG will go looking for a discrepancy that is not there.

**Resolvable from the node alone?** Yes — the numbers close inside the node; only the
`coverageNote`'s framing is at fault. `terms`, `quiz` and `oral` all hedge correctly ("the
mechanism section speaks of eight active sites").

---

### 9-18 — CONTRADICTS-NODE — severity: low

**The field says** (`coverageNote`): "note the book says GAP is processed by four possible
**pathways** and then lists four **reaction types**, which are related but not the same statement;
both are reproduced as printed **rather than merged**."

**The node says** (`summary`, and `points[4]` identically): "It is further processed by four
possible pathways, but the book stresses that these are always only modification and internal
conversion of variously phosphorylated saccharides — isomerisation, i.e. aldose–ketose conversion;
epimerisation; dephosphorylation; and phosphorylation."

**Why these cannot both hold:** the em-dash construction reads as apposition, i.e. as saying the
four pathways *are* the four reaction types — which is exactly the merge the `coverageNote` says
was avoided. The `oral.checklist` then asks only for "the four reaction types". Whatever
separation was intended is invisible to the reader. Low: nothing false is asserted, but the
distinction the note was written to protect has been lost.

**Resolvable from the node alone?** Yes — one sentence separating the two statements.

---

### 9-20 — INTERNAL-NUMBERS — severity: low

**The field says** (`summary`): "Photorespiration takes place in **three compartments** —
chloroplast, peroxisome and mitochondrion — and Obr. 9.7 shows the traffic between them: …; and,
**in the cytosol**, glycerate kinase spending ATP to return glycerate to the chloroplast pool."
`quiz[1]` likewise asks "In which **three** compartments does photorespiration take place…?"

**The node says** (`points[6]`): "Chloroplast: … Peroxisome: … Mitochondrion: … **Cytosol:**
glycerate kinase (ATP → ADP) returning glycerate as PG to the chloroplast."

**Why these cannot both hold:** the same sentence states three compartments and then names a
fourth location. Three organelles is defensible (the cytosol is not an organelle) and "three" is
presumably the book's count, but the node reads a cytosolic step off Obr. 9.7 and never says that
the figure adds a location the running text does not count. A candidate answering the node's own
quiz correctly would omit the glycerate kinase step.

**Resolvable from the node alone?** Yes — say "three organelles plus a cytosolic step", or note
that the fourth location is figure-only, as `9-22` `points[8]` already does for its two
figure-only details.

---

### 9-1 — UNSOURCED — severity: low

**The field says** (`oral.model_en`): "And the fifth is the production of secondary metabolites —
**the alkaloids, terpenes and phenolics** that plants make and animals largely do not."

**The node says:** nothing. `points[4]` and `terms` give only "formation of secondary plant
metabolites" and "A product of an anabolic pathway specific to plants and apparently not required
for the plant's own life; §9.5 develops this."

**Why this is a finding:** the three compound classes appear nowhere in this node — and, checked,
nowhere in `9-27` either, which is the node that actually covers §9.5 and which names no examples
at all. So the one place in chapter 9 where a candidate is handed concrete examples of secondary
metabolites is an aside in a model answer, unsupported by any node. True biochemistry, but not the
book's, and the `checklist` does not ask for it.

**Resolvable from the node alone?** No — needs p.202 (and p.216–217) to know whether the book
names any classes. Cheap to check; the scans are in `extracted_full_ch9/`.

---

## The specific checks requested — results

**Silent standard-version leakage into `mustKnow` / `quiz` explanations / `oral` model answers on
the four flagged nodes: none found.** Checked field by field:

| node | flagged conflict | where the book's version appears | any leak of the standard version? |
|---|---|---|---|
| `9-20` | glycolate oxy**gen**ase vs oxi**dase** | `summary`, `points[3]` | **No.** `quiz` never names the enzyme; `oral.model_en` writes "glycolate is converted to glyoxylate", avoiding the name; `checklist` says only "Named all three enzymes". The `terms` entry for peroxisome says "site of glycolate **oxidation**", but that describes the chemistry, not the enzyme's name. |
| `9-21` | 1970 vs 1966 | `summary`, `points[0]` | **No.** No date appears in `mustKnow`, `quiz`, `oral.model_en` or `checklist` — the oral says only "Hatch and Slack found". |
| `9-23` | 6 e⁻ / 6 ATP / no H₂ vs 8 e⁻ / 16 ATP / + H₂ | `summary`, `points[2]`, `points[6]` | **No.** `quiz[1]` asks explicitly "as the book gives it" and answers 6H⁺/6e⁻; `oral.model_en` gives six electrons and "six ATP **in the book's scheme**" — attributed, not asserted. |
| `9-25` | denitrification products (N₂O, N₂, **N₂H₂**) | `summary`, `points[2]` | **No.** `mustKnow` names no products; `terms` says only "gaseous nitrogen products"; `oral.model_en` says "reducing nitrate to gaseous products". |

The `9-17` check (dimer of 4S+4L monomers vs eight active sites) and the `9-18`/`9-19` check (two
ATP-consuming steps against a carboxylation yielding two PG) are written up as findings above. The
`9-8` check (biliproteins blue-and-red vs 500–650 nm) is the largest finding in the chapter.

One further cross-node pair was checked and is **not** a finding: `9-25` `points[2]` starts
denitrification from NO₃⁻ (the printed equation) while `9-26` `points[4]` reads an NO₂⁻ → N₂ arrow
off Obr. 9.9. Those are consistent — the real pathway runs NO₃⁻ → NO₂⁻ → … → N₂, so a figure arrow
leaving the nitrite box is compatible with an equation starting at nitrate. Also checked and
rejected: `9-21`'s `mustKnow` ("not an alternative to the Calvin cycle") against its `summary`'s
opening ("The Calvin cycle is not the only mechanism of CO₂ assimilation"). The `summary` itself
reconciles these ("a carbon shuttle rather than a carbon-fixing cycle in its own right"), the
`oral` signposts forward ("as the next part of the section explains"), and `9-22` `points[5]`
settles it ("CO₂ is in effect CONCENTRATED for the activity of RuBP carboxylase").

---

## Clean — every field belongs to its node and is supported by it

`9-2`, `9-3`, `9-5`, `9-6`, `9-7`, `9-9`, `9-10`, `9-11`, `9-12`, `9-13`, `9-14`, `9-15`, `9-16`,
`9-21`, `9-22`, `9-23`, `9-24`, `9-25`, `9-26`, `9-27` — **20 of 27**.

Nothing resembling chapter 8's defect was found anywhere in this chapter: **no `mustKnow`
describes another node's subject**, and no two adjacent nodes have swapped content. Chapter 9's
`mustKnow` fields are on-topic throughout and are, with the exceptions listed above, compressions
of their own node's `points` rather than additions to them. The `en`/`cn` halves agree in every
node checked; the bracketed English glosses inside the Chinese (`基质 (stroma)`,
`质体蓝素 (plastocyanin)`) are the project's own convention, not stranded English.

Two runs are particularly solid: **the light reactions (`9-9` … `9-14`)**, where the notation,
the Obr. 9.5 legend, the topology and the reversed ATP-synthase orientation are consistent across
six nodes and consistent with each other; and **the nitrogen section (`9-23` … `9-27`)**, where
every quantitative claim is attributed to the book, every deviation from standard references is
flagged, and the Mo/Fe motif is drawn correctly across nitrogenase and nitrate reductase.

---

## Already flagged by the node itself — not findings

- `9-20` — glycolate oxy**gen**ase (book) vs glycolate oxi**dase** (standard); the reaction the
  book's own figure draws is oxidase chemistry. `points[7]` + `coverageNote`.
- `9-21` — Hatch & Slack dated 1970 in the book, 1966 in standard references. `points[1]` +
  `coverageNote`.
- `9-23` — nitrogenase as 6 e⁻ / 6 ATP / no H₂, against the modern 8 e⁻ / 16 ATP / obligatory H₂.
  `points[7]` + `coverageNote`.
- `9-25` — denitrification products printed as (N₂O, N₂, **N₂H₂**); diimide is not a recognised
  product. `points[3]` + `coverageNote`.
- `9-24` — a **fifth** flag not in the brief: the book writes "glutaminsynthasa" where standard
  references say glutamine **synthetase**, and the node notes that the chemistry the book prints
  (ATP → AMP + 2Pᵢ) is a synthetase's. `points[6]` + `coverageNote`.
- `9-19` — `coverageNote` pre-empts a false positive: aldolase is numbered twice (6, 9) and
  transketolase twice (8, 11), and this is correct, not a misreading.
- `9-22` — `coverageNote` marks two details as figure-only, absent from the running text:
  carbonate dehydratase making HCO₃⁻ before PEP-carboxylase acts, and the decarboxylating enzyme
  labelled "jablečný enzym" (malic enzyme).

---

## Needs the book (not internal-consistency findings)

Two places where I am confident the content disagrees with standard references and the node does
**not** flag it. Both are cheap to check — the scans are already on disk in `extracted_full_ch9/`.

1. **`9-7` — "the 415–440 nm band is not significant for photosynthesis."** The node reproduces
   the book's reason (excitation to the 2nd singlet state, whose lifetime is too short) and builds
   the `mustKnow` on it: "that energy is thrown away as heat". In standard photophysics S₂ → S₁
   internal conversion is very fast and the electron arrives in the usable S₁ state anyway, with
   only the *excess* energy lost as heat; action spectra of photosynthesis show a clear blue peak.
   A candidate who answers "blue light does not drive photosynthesis" would be marked wrong in most
   courses. Worth reading the Czech sentence on p.205 closely — the book may be saying that the
   excess energy is degraded, which the node has hardened into the whole quantum being wasted. The
   `coverageNote` already says this passage "is often taught wrongly", so the node's author was
   aware the claim is unusual; what is missing is a flag of the kind `9-20`/`9-23` carry.

2. **`9-22` — succulents listed among C-4 plants.** `points[0]`: "they are above all tropical
   grasses (e.g. sugar cane) and **cactus-like plants (succulents)**". Cacti and succulents are the
   standard textbook example of **CAM**, not C-4, and this chapter has no CAM section at all — so
   the classification is never corrected downstream. If p.212 reads as printed here, this deserves a
   `FLAG` point of exactly the same form as the four the chapter already carries.

---

## What this does NOT cover

Internal consistency only. The `points`, `summary` and `coverageNote` prose of chapter 9 has still
never been checked against the page images by a second reader — the header of `ch9.js` says so
itself ("Independent verification pass … has NOT been run yet"). The eleven quantitative claims
re-checked in the later partial pass are unaffected by anything above; the two high-severity
findings are both arithmetic the nodes performed themselves, not numbers read off a scan.
