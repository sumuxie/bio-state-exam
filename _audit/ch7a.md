# Audit — ch7a

Nodes read: 21 (7-1, 7-1-1, 7-1-2-1, 7-1-2-2, 7-1-3-1, 7-1-3-2, 7-1-4, 7-2-1, 7-2-2, 7-2-3,
7-2-4, 7-2-5, 7-2-6, 7-3-1, 7-3-2, 7-4, 7-4-1-1, 7-4-1-2, 7-4-2, 7-5, 7-6)

Every field of every node was read: `mustKnow`, `summary`, all `points`, `terms`, the three
`trace` blocks (7-1-3-1, 7-1-4, 7-3-2), `quiz`, `oral`, `coverageNote`, `cnNote`. No node in
this range carries `gapPoints` or `lehNotes`.

Findings: **12** — CONTRADICTS-NODE 4, UNSOURCED 5, INTERNAL-NUMBERS 1, NON-BOOK-IN-POINTS 1,
LANGUAGE 1 (reported as one line, as instructed)
Clean: 7 outright, 4 more clean on placement with a low-severity `mustKnow` note listed
separately at the end and **not** counted above.

Shape of what was found: **there is no WRONG-NODE in this range.** Every `mustKnow` is about
its own node's subject — nothing here resembles chapter 8's sliding/misplaced-`mustKnow`
failure. What chapter 7's `mustKnow` fields do instead is **over-generalise**: they take a rule
that holds for the node's headline example and state it as a rule for the whole class, in
cases where the node's own remaining points are the counterexamples. That is the pattern in
7-1-3-1, 7-4, 7-4-1-1 and 7-4-2, and it is worth naming because a word-overlap scan cannot see
it either.

---

## Findings

### 7-1-3-1 — CONTRADICTS-NODE — severity: high

Two related defects; they are the same defect seen from two fields.

**(a) The `mustKnow` states the aldose case as the universal case.**

**The field says:** "In water a sugar is a ring, not a chain: C-1 attacks the C-5 hydroxyl and
closes a hemiacetal, which makes C-1 a NEW asymmetric carbon — and that is the entire origin of
the α and β anomers."

**The node says** (`points[5]`): "The same α/β anomer situation occurs for the furanose ring,
but there α and β refer to the configuration of the HYDROXYL GROUP AT C-2 — because in a ketose
like fructose, the original carbonyl (and hence the new stereocenter upon cyclization) is at
C-2, not C-1."
and (`terms[3]`, anomeric carbon): "The new asymmetric carbon created by ring closure (**C-1
for aldoses, C-2 for ketoses like fructose**)".

**Why these cannot both hold:** "that is the entire origin of the α and β anomers" is an
exhaustive claim about all sugars, and the node's own `points[5]` and `terms[3]` give a case it
excludes. `mustKnow` is the always-visible field, so the reader meets the false universal first
and the exception only if they expand `points`.

**(b) The node states the α/β rule on two different axes in two different fields — ring size
in `points`, carbonyl type in `terms` and in the quiz explanation.**

**The field says** (`points[4]`, and identically in `summary`): "Cyclization of **hexoses and
pentoses** generates a NEW asymmetric carbon **at C-1**, so two cyclic forms can arise."

**The node says** (`points[5]`): "The same α/β anomer situation occurs **for the furanose ring**,
but there α and β refer to the configuration of the HYDROXYL GROUP AT C-2"
and (`points[7]`): "**Pentoses** such as D-ribose or 2-deoxy-D-ribose, when bound in nucleic
acids, form **FURANOSE rings**".

**Why these cannot both hold:** compose `points[5]` with `points[7]` and ribose-in-RNA — a
pentose in a furanose ring — has its anomeric carbon at C-2. `points[4]` says every cyclising
pentose gets it at C-1. One of the two must be wrong, and the node contains the resolution
itself: `terms[3]` and the quiz's own `why_en` ("because fructose is a ketose whose carbonyl
sits at C-2 in the open chain") both key the rule to **aldose vs ketose**, not to **pyranose vs
furanose**. `points[5]` is the only field that keys it to ring size, and it is the one that
generates the contradiction. The node's own `trace` also separates the two axes correctly
("按闭出来的环有多大又分两类——六元环叫 pyranose…五元环叫 furanose"), i.e. ring size is
presented there as an independent variable from which carbonyl reacted.

**Resolvable from the node alone?** The internal inconsistency, yes — `terms[3]`, the quiz
`why_en` and the `trace` already state the correct criterion, so only `points[5]` and the
matching `summary` sentence are out of step. Whether the **book** phrases its rule by ring size
or by carbonyl type needs page 150; the node's `coverageNote` says that paragraph was read in
full, so the check is cheap.

---

### 7-4-2 — CONTRADICTS-NODE — severity: medium

**The field says** (`points[2]`): "GAG molecules are built of disaccharide units where one
uronic-acid residue bonds glycosidically to an **acetylated amino sugar predominantly at
POSITION 3**; these units join by a **1→4 bond** into a linear macromolecule."

**The node says** (`points[6]`): "HEPARIN: **similar structure to GAGs** … (Obr. 7.10:
D-glucurono-2-sulfate OR L-idurono-2-sulfate, **α(1→4)-bonded to N-sulfo-D-glucosamine-6-
sulfate**)."

**Why these cannot both hold:** the node's own heparin entry breaks the general rule on both of
its clauses. The amino sugar is **N-sulfo**-glucosamine, not an acetylated amino sugar; and the
uronic acid is bonded **1→4**, not at position 3 — the 1→4 bond that the rule reserves for
joining one disaccharide unit to the next is, in heparin, the bond *inside* the unit. The two
other named GAGs fit the rule (hyaluronic acid and chondroitin-6-sulfate), so this is not a
typo in the rule; it is a rule stated without its exception, three sentences before the
exception is printed. The node hedges heparin only on **location** ("NOT a typical component of
connective tissue"), never on structure, and `terms` repeats the unqualified rule
("A heteropolysaccharide of repeating uronic-acid/**acetylated**-amino-sugar disaccharide
units").

**Severity is medium rather than low because the node's own quiz tests the rule:** quiz item 1
asks "At which position of the acetylated amino sugar does the uronic-acid residue typically
attach within a glycosaminoglycan's repeating disaccharide?" with answer "Position 3" — a
candidate who then reads the heparin entry has no way to reconcile the two.

**Resolvable from the node alone?** No — needs pp. 157–158 to see whether the book states the
position-3/1→4 rule as universal or as "u většiny", and whether it flags heparin as the
exception. The repair is most likely a hedge word plus a note, not a content change.

---

### 7-4-1-1 — CONTRADICTS-NODE — severity: medium

**The field says:** "**Storage polysaccharides are α(1→4) chains with α(1→6) branch points**,
and the branching is the point: every branch is another free end, so the store can be mobilised
from many places at once instead of unzipped from one."

**The node says:** `points[1]` "AMYLOSA: long, **unbranched** α(1→4)-linked D-glucose chains";
`points[4]` "DEXTRANY: storage polysaccharides of yeasts and bacteria, D-glucose units
**predominantly joined by α(1→6) bonds**; … with branch points at **(1→2), (1→3), or (1→4)**";
`points[5]` "INULIN: a plant polysaccharide of **D-fructose** units joined by **β(2→1)** bonds";
`points[6]` "MANNANY: homopolysaccharides built of **D-mannose** units".

**Why these cannot both hold:** the node lists six storage polysaccharides and the `mustKnow`
describes two of them (amylopectin, glycogen). Amylose is unbranched; dextran inverts the
main-chain/branch bonds; inulin is neither a glucan nor α-linked. The node's title itself is
"A. Zásobní polysacharidy (škrob, glykogen, dextrany, inulin, mannany)" — the counterexamples
are advertised in the node's own heading.

**Resolvable from the node alone?** Yes — the `mustKnow` needs to be scoped to starch/glycogen,
which is what the rest of the sentence is actually about. No page needed.

*Second, separate defect in the same field:* "every branch is another free end, so the store can
be mobilised from many places at once instead of unzipped from one" is **UNSOURCED** — nothing
in this node mentions mobilisation, free ends, degradative enzymes, or any functional
consequence of branching. The node gives branching only as a structural/numerical fact
(every 12th residue vs every 8th–10th). Severity low on its own.

---

### 7-4 — CONTRADICTS-NODE — severity: medium

**The field says:** "Most carbohydrate in nature is not free sugar but polysaccharide, and
hydrolysing almost any of it gives back D-glucose. **The monomer is nearly always the same; what
differs is how it is joined.**"

**The node says** (`points[1]`): "D-glucose is by far the most common monosaccharide unit of
polysaccharides, **but polysaccharides built from D-mannose, D- AND L-galactose, D-xylose, and
D-arabinose units also occur commonly in nature**."
and (`points[3]`): "Polysaccharides, also called GLYKANY (glycans), **differ from one another in
the identity of their monosaccharide residue**, in chain length, and in degree of branching."

**Why these cannot both hold:** `points[3]` names residue identity as the **first** of the three
things that distinguish one glycan from another, and `points[4]`–`points[5]` build the node's
entire structural classification on it (homoglycan vs heteroglycan; glucan vs mannan). The
`mustKnow` asserts the opposite — that residue identity is the constant and linkage the
variable. "By far the most common" compressed to "nearly always" would be an allowed
simplification on its own; "what differs is how it is joined" is not, because it denies the
node's classification scheme.

**Severity is medium because the node's own quiz turns on exactly what the `mustKnow` denies:**
quiz item 2 asks which monosaccharide the book names in **both** its D- and L- forms, answer
"D- and L-galactose" — unanswerable by a reader who has taken "the monomer is nearly always the
same" as the takeaway.

**Resolvable from the node alone?** Yes. No page needed.

---

### 7-2-2 — UNSOURCED — severity: medium

**The field says:** "Which carbon gets oxidised is what names the acid: the carbonyl C-1 gives
an aldonic acid, the terminal C-6 gives a uronic acid, and **both ends together give an aldaric
acid**."

**The node says:** nothing whatever about aldaric acids. The string "aldaric" occurs exactly
once in the node — on the `mustKnow` line itself. `summary`, all seven `points`, all five
`terms`, both quiz items and the `oral` model answer name **two** classes only: aldonic acids
(carbonyl oxidation) and uronic acids (terminal primary-alcohol oxidation), then move to
ascorbic acid. The `oral` prompt is explicitly "Describe **the two classes** of sugar acids the
book introduces".

**Why this matters:** a third named compound class, presented in the always-visible field as
though it were part of the same book-derived triad. A candidate could reasonably answer an oral
question with "the book gives three classes of sugar acid" on the strength of it.

**Resolvable from the node alone?** No — needs pp. 152–153 to see whether the book mentions
aldaric/saccharic acids at all. If it does not, the clause belongs in a note, not in `mustKnow`.

---

### 7-2-1 — UNSOURCED — severity: medium

**The field says:** "Esterifying a sugar with phosphate turns a neutral molecule into an ion,
and **that charge is why a phosphorylated sugar cannot drift back out through the membrane.
Nearly every pathway starts by paying an ATP for exactly that.**"

**The node says** (`points[0]`): "forming the ester bond with a POLYBASIC (polyprotic) acid
converts the electroneutral sugar molecule into an ION, **which affects how it behaves in the
cellular environment**."

**Why this matters:** the node stops at "affects how it behaves in the cellular environment"
and never says how. Membrane retention, membrane permeability and ATP appear nowhere in this
node — "membrane" and "ATP" each occur exactly once in the whole node, both on the `mustKnow`
line. The node's own account of *why* phosphate esters matter is different and is stated twice:
they are the near-exclusive metabolised form, and they are reactive intermediates for
glycosidic-bond formation (PRPP). The `mustKnow` substitutes a mechanism and an energetic cost
that the node does not carry.

**Resolvable from the node alone?** No — needs p. 152, and probably a forward check to 7.7/7.8,
which the node cross-references for exactly this material. It may well be supported *there*, in
which case the sentence still does not belong in *this* node's `mustKnow`.

---

### 7-2-5 — UNSOURCED — severity: medium

**The field says:** "Removing a single hydroxyl changes what the sugar is for: 2-deoxy-D-ribose
is ribose minus one oxygen, and **that one missing oxygen is the whole difference between RNA
and DNA**."

**The node says** (`points[0]`, the node's entire statement on the subject): "Among the
biochemically most important deoxy sugars is 2-DEOXY-D-RIBOSE, **a component of DNA**."

**Why this matters:** "RNA" occurs exactly once in the node — on the `mustKnow` line. The node
never mentions D-ribose as a compound, never mentions RNA, and never compares the two nucleic
acids; it is a three-point node about deoxy sugars (2-deoxy-D-ribose, L-fucose, L-rhamnose).
The comparison is asserted as this node's headline and rests entirely on material that lives in
7-1 (`points[2]`), a different node.

**Resolvable from the node alone?** No. Two things to check on p. 153: whether the book makes
the ribose/deoxyribose comparison here at all, and — see "needs the book" below — whether "the
whole difference" survives contact with the uracil/thymine difference.

---

### 7-4-1-2 — UNSOURCED — severity: medium

**The field says:** "Change α(1→4) to β(1→4) and the chain straightens instead of coiling, so
strands lie flat and **hydrogen-bond into sheets**. That one difference in bond geometry is why
cellulose is a fibre — **and why we cannot digest it**."

**The node says** (`points[1]`): "Each successive residue is rotated 180° relative to the
previous one; **the ring oxygen hydrogen-bonds with the C-3 hydroxyl of the following residue**
(Obr. 7.9)."
and (`points[2]`): "The straight cellulose chains enable FIBRIL formation; cellulose fibrils are
firmly bound together **by hemicelulosy … pektiny … and 'extension' protein**."

**Why this matters:** the node has exactly one hydrogen bond in it and it runs **along** a
single chain — ring oxygen to the C-3 hydroxyl of the *next residue of the same chain* — where
it stabilises the straight conformation. The `mustKnow` re-points that hydrogen bond *between*
chains and has it building sheets, which the node does not state; and what the node does say
holds neighbouring cellulose units together is a set of accessory macromolecules, not hydrogen
bonding. A reader who learns "the H-bond makes sheets" and then answers Obr. 7.9 will describe
the wrong bond. Separately, "why we cannot digest it" is nowhere in the node — "digest" occurs
exactly once, on the `mustKnow` line. (It is in 7-3-2's `trace`, a different node.)

**Resolvable from the node alone?** Partly — the H-bond direction is settled by `points[1]` and
Obr. 7.9, both of which the `coverageNote` records as verified. Whether the book itself
mentions interchain sheets or indigestibility needs p. 157.

---

### 7-4-2 — UNSOURCED — severity: medium

*(second, independent finding on this node — see the CONTRADICTS entry above)*

**The field says:** "These are built from amino sugars and uronic acids rather than plain
sugars, so the chain carries fixed negative charge. **It holds water — and that is what makes
connective-tissue ground substance a gel rather than a solution.**"

**The node says** (`points[1]`): "The intercellular ground substance of connective tissue is
composed of fibrous proteins, glycoproteins, and proteoglycans"; and (`points[2]`) that sulfate
esterification "makes GAGs very acidic".

**Why this matters:** "fixed negative charge" is a fair reading of "very acidic". Water binding
and the gel state are not: "water" and "gel" each occur exactly once in the node, on the
`mustKnow` line. The node's account of ground substance is purely compositional, and its only
functional statements are about *where* each GAG is found (umbilical cord, vitreous humor,
synovial fluid) and heparin's anticoagulant action. The gel explanation — true biochemistry,
and the obvious thing to say about synovial fluid — is supplied from outside.

**Resolvable from the node alone?** No — needs pp. 157–158. If the book does not say it, it
belongs in a note rather than in the field a reader meets first.

---

### 7-1-2-2 — INTERNAL-NUMBERS — severity: low

**The field says** (`oral.model_en`, in one sentence): "you get four stereoisomers of
ketopentose and **eight of ketohexose**, which the book's own figure lays out as a tree:
dihydroxyacetone branches to D-erythrulose, which branches to the two ketopentoses D-ribulose
and D-xylulose, and those in turn branch into **the four ketohexoses**".

**The node says** (`points[3]`): "Analogously, 4 stereoisomers of KETOPENTOSES and **8
stereoisomers of KETOHEXOSES** can be derived (Obr. 7.2). The tree runs: … from D-ribulose,
D-psicose and D-fructose; from D-xylulose, D-sorbose and D-tagatose (ketohexoses)."
and (`coverageNote`): "Obr. 7.2 printed at the top of page 150 (**the complete ketose family
tree** — dihydroxyacetone, D-erythrulosa, D-ribulosa/D-xylulosa, D-psikosa/D-fruktosa/
D-sorbosa/D-tagatosa)".

**Why these cannot both hold:** the count says 8 (and 4 ketopentoses), the enumeration gives 4
(and 2). The reconciliation is that the figure draws only the D-branch — every name carries a
D- prefix — but this node never says so, and its `coverageNote` says the opposite by calling
the figure "the complete ketose family tree". The sibling node handles the identical situation
correctly: **7-1-2-1**'s `coverageNote` states "Obr. 7.1 draws out only the D-branch of the tree
in full structural detail; the L-series (mirror-image at every step) is stated numerically in
the text … but not separately drawn". Low severity because every listed name is explicitly
D-prefixed, so an attentive reader recovers it; flagged because the two sibling nodes describe
the same figure convention in incompatible words.

**Resolvable from the node alone?** Yes — copy 7-1-2-1's D-branch qualifier. Confirming the
figure's scope needs p. 150, which the `coverageNote` already records as verified.

---

### 7-2-3 — NON-BOOK-IN-POINTS — severity: low

**The field says** (`points[2]`, in `points`, not in a note or `gapPoints`): "FLAG: reduction of
D-fructose (as one of two epimeric products alongside D-mannitol, **since reducing a ketone
creates a new, non-selectively formed stereocenter**) and of L-sorbose (**a well-documented
relationship, used industrially in vitamin-C synthesis**) both plausibly give D-glucitol — but
working through the stereochemistry using this SAME book's own Obr. 7.1 Fischer-projection data
… gives the configuration of D-GULITOL, not D-glucitol."

**Why this is raised:** the mechanism of ketone reduction and the industrial vitamin-C route are
outside-the-book material, and the stereochemical derivation is this project's own reasoning,
all sitting inside a `points` entry. The same content is repeated in `terms`, in the quiz's
`answer_en`, and in three `oral` checklist lines.

**Deliberately raised at low severity, and it may not be worth acting on:** the entry is clearly
labelled "FLAG:", it says outright "the book's literal wording is 'L-glukosy'", and it is doing
exactly what rule 10 (flag rather than pass through) asks for. This is a placement question —
`points` vs a note — not a truth question, and the honesty of the entry is not in doubt. Listed
so the placement decision is visible rather than implicit.

---

### LANGUAGE — severity: low

**9 instances of the English adverb "specifically" stranded inside Chinese prose in this range**
(pattern `D-/L-符号specifically指的是…`), in 5 nodes: **7-1-1** ×3 (`summary.cn`;
`points[5].cn`; short-answer `answer_cn`), **7-1-3-1** ×1 (quiz 2 `why_cn`), **7-2-4** ×1
(`oral.q_cn`), **7-2-5** ×1 (quiz 1 `why_cn`), **7-3-2** ×3 (`summary.cn`; `points[3].cn`;
quiz 1 `q_cn`). No other stranded English adverb occurs in this range — every remaining
Latin-script run inside Chinese text is either a chemical abbreviation (DNA, RNA, PRPP, HCOH,
GlcNAc, NeuAc…), a deliberately quoted Czech term (`poloacetal`, `glykany`, `pojivo`,
`L-glukosy`), or a book term the node keeps in quotes (`'extension'` protein). The remaining
~6 chapter-7 instances are at lines 1777, 2870, 3066, 3079, 3102, 3301 — outside this range,
in the 7-6-1-onward agent's scope.

One related item, not an adverb: **7-4-1-1** `points[6].cn` ends "（关于其归类位置见本节点
coverageNote）" — an app-internal field name in reader-facing prose. The English half says the
same thing ("see this node's coverageNote"), so the `en`/`cn` pair is consistent; it is a
register slip, not a different claim.

---

## Low-severity `mustKnow` assertions — listed for completeness, not counted above

Each of these is a claim that this node's own fields do not carry. All are true biochemistry
and all follow from a sibling node, so none is repair work; they are here so the count of
"assertions arriving only in `mustKnow`" is visible.

- **7-2-3** — "an alditol has **no reducing end and no anomers**". "Anomer" occurs once in the
  node, on the `mustKnow` line; the reducing-sugar sense of "reducing" nowhere (the node's other
  uses are the verb, "Reducing D-glucose gives D-glucitol"). A direct corollary of the node's
  own "reduction of the carbonyl group", but stated in vocabulary the node does not introduce.
- **7-2-4** — "These are the units structural polymers are built from — **they are not fuel**."
  Energy metabolism appears nowhere in the node; and of the node's own contexts only chitin is a
  structural polymer — glycolipids, glycoproteins, heteroglycans and blood-group substances,
  which is where the node puts its emphasis, are not.
- **7-2-6** — "so a glycoside **neither mutarotates nor reduces**." Both words occur once, on
  the `mustKnow` line. Sourced by 7-1-4 and 7-3-1, not by this node.
- **7-5** — "A sugar chain on a protein is not fuel — **it is an address** … the chain is what
  something else recognises." Recognition appears nowhere in 7-5, whose points are all linkage
  chemistry and figure content. Sourced by 7-1 `points[4]`.
- **7-6** — "**shift a hydroxyl (epimerisation or isomerisation)**". The node defines the two
  separately: epimerace as "change of steric arrangement/OH position at one carbon",
  izomerace as "aldose⇌ketose interconversion". Collapsing both into "shift a hydroxyl"
  mislabels the second. Also "Every interconversion **in this chapter** is one of the three" is
  slightly stronger than the node's "the book names three types of reaction serving this
  purpose".
- **7-4-1-1** — the branching-as-mobilisation rationale, detailed under the CONTRADICTS entry.

---

## Clean

**Clean outright — `mustKnow` belongs to its node, is supported by it, and nothing else in the
node contradicts itself:**

`7-1`, `7-1-1`, `7-1-2-1`, `7-1-3-2`, `7-1-4`, `7-3-1`, `7-3-2`

Worth naming individually, because the clean ones cluster in a way that is itself informative:

- **`7-1-4` (mutarotation)** is the strongest node in the range. All three rotation values
  (+112°, +18.4°, +52.7°) agree across `mustKnow`, `summary`, `points[2]`/`points[3]`, `terms`,
  both quiz items, the short answer and the `trace` `numbers` field — eight independent
  restatements, no drift.
- **`7-1-3-2`** not only is clean but does the audit's own job on itself: `points[3]` flags that
  Obr. 7.5(b)'s glucofuranose panels are never revisited by the book's equilibrium discussion,
  and refuses to read them as a claim about free glucose.
- **`7-3-1`/`7-3-2`** are a matched pair — the reducing/non-reducing criterion is defined once
  in 7-3-1 and used, without restatement drift, across all seven disaccharides in both nodes.
- **`7-1-2-1`** carries the 2ⁿ rule and its four instantiations (2/4/8/16) consistently in five
  places.

**Clean on placement, with a low-severity `mustKnow` note above:** `7-2-4`, `7-2-6`, `7-5`,
`7-6`.

---

## Already flagged by the node itself — not findings

- `7-1` — the "7.1 Monosacharidy" heading carries no independent text; 7.1.1 begins beneath it.
- `7-1-2-1` — Obr. 7.1 draws only the D-branch in full; the L-series is given numerically only.
- `7-1-2-2` — Obr. 7.2 floats to p.150, after the 7.1.3 heading has already begun on p.149
  (the book's print flow, not a re-ordering).
- `7-1-3-2` — Obr. 7.5(b) shows glucofuranose forms the running text never quantifies.
- `7-2-1` — same no-independent-text pattern for the "7.2" heading.
- `7-2-3` — the book prints "L-glukosy" where its own Obr. 7.1 stereochemistry gives L-gulose;
  re-verified by zoomed crop as the book's wording, flagged rather than corrected.
- `7-2-4`, `7-2-5` — forward cross-references to Obr. 7.12, outside the drafted page range, not
  themselves verified.
- `7-2-6` — node patched during chapter-7 reconciliation; a drafting agent's range had cut off
  mid-sentence on p.153 and the p.154 continuation was folded in later.
- `7-3-1` — material above the 7.3 heading on p.154 belongs to §7.2; flagged for reconciliation.
- `7-4-1-1` — "Mannany" is placed under "A. Zásobní polysacharidy" following the book's physical
  layout, though mannans are not purely a reserve polysaccharide.
- `7-4-1-2` — lignin appears in the cellulose paragraph but the book itself calls it polymerised
  aromatic alcohols, i.e. not a carbohydrate.
- `7-5` — Obr. 7.12 is printed on p.160 after the text has moved to 7.6.1, but p.158 cross-
  references it as belonging to §7.5.

Twelve. None is raised as new above.

---

## Needs the book (not internal-consistency findings)

Clearly separated, as instructed. Chapter 7 has never had a verification pass against the
scans, so these are the places where the internal read alone cannot settle the question.

**Highest value, in order:**

1. **p.150 — 7-1-3-1, the α/β criterion.** Does the book key α/β to *ring size* (pyranose vs
   furanose) or to *which carbonyl cyclised* (aldose vs ketose)? The node states it both ways in
   different fields. If the book itself says "for the furanose ring", that is a book error worth
   a `coverageNote` line rather than a silent fix, because it is wrong for ribofuranose — whose
   anomeric carbon is C-1 — and the node's own `points[7]` puts ribose in a furanose ring two
   points later.
2. **pp.157–158 — 7-4-2, the GAG repeat rule.** Is "acetylated amino sugar, position 3, 1→4"
   printed as universal, and is heparin flagged as the exception? Note that heparin's glucosamine
   is N-sulfated, and its uronate→glucosamine bond is 1→4 — so as written the rule describes the
   hyaluronan/chondroitin pattern only. The node's `points[2]` already concedes half of this
   ("or the amino sugar's amino group may be esterified with sulfuric acid") without noticing
   that it undoes the word "acetylated" three clauses earlier.
3. **pp.152–153 — 7-2-2, aldaric acids.** Does the book name a both-ends-oxidised class at all?
   If not, the `mustKnow` clause is an import.
4. **p.153 — 7-2-5.** Does the book compare DNA and RNA here? Separately, and this is my own
   chemistry rather than an internal-consistency point: "that one missing oxygen is the whole
   difference between RNA and DNA" is not true as stated — the base sets differ too (thymine vs
   uracil). Worth softening to "the difference the sugar makes" regardless of what the book says.
5. **p.150 — 7-1-2-2.** Confirm Obr. 7.2 draws the D-branch only, then align its `coverageNote`
   with 7-1-2-1's wording.

**One naming note, low value:** 7-2-1 gives PRPP as "5-phosphoribosyl-1-**bis**phosphate",
faithfully transcribing the Czech "5-fosforibosyl-1-bisfosfát". Standard English is
5-phosphoribosyl-1-**pyro**phosphate (5-phospho-α-D-ribose 1-diphosphate). The node is
transcribing correctly, so this is a glossing decision, not an error — noted only so a future
reader does not "fix" it into a mismatch with the scan.

---

## What this does NOT cover

The `points`, `summary` and `coverageNote` prose of these 21 nodes has been read against
**itself** only. Nothing here has been compared to the page images; chapter 7's file header
says so in its own opening comment ("The independent verification pass … has not been run yet"),
and that remains true after this pass. In particular, every figure-derived claim in this range
— Obr. 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12 — rests on a single
reader's transcription, and two of the findings above (7-1-3-1, 7-4-2) cannot be closed without
going back to the scan.
