# Audit — ch7b

Nodes read: 21 (7-6-1, 7-6-2, 7-6-3, 7-7-1, 7-7-2, 7-8-1, 7-8-2, 7-8-3, 7-8-4, 7-8-5, 7-9,
7-9-1, 7-10-1, 7-10-2, 7-10-3, 7-11-1-1, 7-11-1-2, 7-11-2-1, 7-11-2-2, 7-12-1, 7-12-2)

Findings: **20** — CONTRADICTS-NODE 2, WRONG-NODE 2, INTERNAL-NUMBERS 1, UNSOURCED 13, LANGUAGE 2
Clean on every class: **4** (7-7-1, 7-10-3, 7-11-1-1, 7-11-2-2)
Nodes whose only findings are low-severity: 10. Nodes with a high/medium finding: 7.

Every node was read in full — `mustKnow`, `summary`, `points`, `terms`, `trace`, `quiz`, `oral`,
`coverageNote`, `lehNotes` — and checked against itself only.

## Headline results on the two classes you weighted

**INTERNAL-NUMBERS — essentially clean.** Every repeated figure in this half was traced across
`points` → `summary` → `terms` → `quiz` → `oral` → `trace`, and all of them agree:

| figure | node | appears in | verdict |
|---|---|---|---|
| 89% hexose / 11% trioses (aldolase) | 7-8-1 | coverageNote, summary ×2, points[6], terms, quiz why ×2, oral, checklist | consistent |
| 96% DHAP / 4% G3P (triose-P isomerase) | 7-8-1 | same 8 places | consistent |
| 30% F6P (/70% G6P) (hexose-P isomerase) | 7-8-1 | 7 places | consistent |
| −1 −1 +2 +2 = net +2 ATP, gross +4 | 7-8-3 | points[3], summary, terms, quiz why, oral, checklist | consistent |
| 2 NADPH per G6P, oxidative branch | 7-7-1 | summary, points[2], terms, quiz why | consistent |
| 2×6 + 3 = 15 = 3×5 (non-oxidative PPP) | 7-7-2 | coverageNote, points[4], summary | consistent, and I re-derived each of the three transfers: 6+3=4+5, 4+6=7+3, 7+3=5+5 |
| ~3 ATP per NADH via the chain | 7-8-5 | coverageNote, summary, points[6], oral, checklist | consistent |
| glucose : galactose = 1 : 3 | 7-10-3 | coverageNote, summary, points[2], terms, quiz, oral, checklist | consistent |
| 4 residues short / 3-residue block / 1 left / ~10% free glucose | 7-11-2-2 | trace (incl. its `numbers` line), summary, points ×4, quiz, oral | consistent, and 4 − 3 = 1 closes |
| 2 phosphorylations in, 1 recovered → "less than half" | 7-11-2-2 | points[5], summary, quiz | consistent — "less than half" rather than "exactly half" is justified in place by the branch-point glucose coming out unphosphorylated |

One figure does **not** close; it is finding 5 below (7-7-2, the 12-NADPH pentose cycle).

**UNSOURCED, the deliberately-unnamed enzymes — clean. No leak.** I grepped the whole file for
every spelling of the three names and read every hit in context:

- **6-phosphogluconate → ribulose-5-phosphate.** `7-7-1` withholds it correctly everywhere. The
  name `6-fosfoglukonátdehydrogenasa` occurs exactly once in the file, inside 7-7-1's
  `coverageNote`, in a sentence saying the book never prints it. `points[5]` is a standing
  honesty note; the quiz option and explanation say "unnamed enzyme"; the oral checklist carries
  "noted the book leaves this enzyme unnamed". Nothing in `mustKnow`, `quiz` or `oral` supplies a
  name.
- **Both closing hydrolyses of gluconeogenesis.** `7-9` withholds them in `mustKnow` ("bypassed by
  a different enzyme", no names), in `summary`, in the quiz explanations and in the oral model
  answer — whose checklist even carries the line *"Did not claim enzyme names for the two
  hydrolysis steps, since the book never gives them."* The names
  `fructose-1,6-bisphosphatase` / `glucose-6-phosphatase` appear only inside `coverageNote` and
  inside `points[5]`'s explicitly-labelled "Honesty note", both saying the book never prints them.
- Same for `pyruvate carboxylase` in 7-9: it appears only in a `terms` entry hedged as "(implied
  by the figure's CO2~biotin/ATP labeling) … enzyme name itself not spelled out in the p.169
  running prose", and the oral answer describes the step without naming it.

The one asymmetry: 7-7-1 keeps its withheld name out of `points` entirely, while 7-9 prints both
withheld names inside a `points` honesty note. Both are disclaimed in place, so I have listed this
under "already flagged" rather than raising it as NON-BOOK-IN-POINTS.

## Findings

### 7-6-3 — WRONG-NODE — severity: high
**The field says:** (`mustKnow`) "Aldolase splits one hexose into two triose phosphates … **Transketolase moves two-carbon fragments**, which is how chain lengths get reshuffled without any oxidation."
**The node says:** (`points[2]`) "**TRANSALDOLASA**, by contrast, transfers a **dihydroxyacetone residue** onto OTHER aldoses"; (`points[3]`) "The book explicitly notes that transaldolase has NO COENZYME"; (`coverageNote`) "the **Transaldolasa** paragraph immediately after. **Page 161 is the last page of this drafting pass's assigned range**; whatever text follows on page 162 is out of scope for this node."
**Why these cannot both hold:** The node's two enzymes are aldolase and transaldolase. Transketolase is named nowhere in its `summary`, `points`, `terms`, `quiz` or `oral`, and its fragment is three carbons (a dihydroxyacetone residue), not two. Worse, the node's own `coverageNote` puts p.162 out of scope, and 7-7-1's `coverageNote` locates the book's one-sentence definition of transketolase precisely there ("Dvouuhlíkový fragment - 'aktivní glykolaldehyd' se přenáší transketolasou"). So the always-visible headline of this node names the one enzyme the node explicitly excludes, and omits the one it actually teaches. A reader meeting only the `mustKnow` would answer the node's own second MCQ ("What key difference does the book draw between aldolase and transaldolase?") from the wrong enzyme.
**Belongs to:** 7-7-2 (which uses transketolase twice), or to whichever node eventually claims the §7.6 tail on p.162.
**Resolvable from the node alone?** yes — this is internal, no page needed.

### 7-11-1-2 — CONTRADICTS-NODE — severity: high
**The field says:** (`mustKnow`) "Digestion stops at maltose and isomaltose, **not at glucose**." (cn bolds the negation: "消化的终点是麦芽糖与异麦芽糖，**不是**葡萄糖")
**The node says:** (`points[0]`) "The final products … are MALTOSE and ISOMALTOSE …, **plus PARTLY some free glucose**, arising from cleavage of oligosaccharides with an ODD number of glucose residues." (`points[1]`) "**Maltose is split to glucose** by ALPHA-D-GLUCOSIDASE (i.e. MALTASE) **in the intestine**." (`quiz[1]` model answer) "Maltose …, isomaltose …, **and partly free glucose**."
**Why these cannot both hold:** The node lists free glucose among the final products twice and then gives the intestinal enzyme that finishes the job. The `mustKnow`'s explicit negation is denied by the node's own quiz answer key. The charitable reading — *the amylases* stop at disaccharides, and a separate disaccharidase goes the rest of the way — is a real and useful point and is exactly what the node supports; as written the qualifier is missing and the sentence is false against the node.
**Resolvable from the node alone?** yes — adding "the amylases stop at…" would close it.

### 7-12-2 — CONTRADICTS-NODE — severity: high
**The field says:** (`mustKnow`) "**One protein kinase does both halves at once**: it switches synthase off **and phosphorylase on**."
**The node says:** (`points[4]`) "**Active phosphorylase kinase (a) then phosphorylates PHOSPHORYLASE ITSELF**, b to a … So phosphorylase activation is a **two-tier cascade**; glycogen synthase inactivation is a single direct step from protein kinase." (`quiz[1]`) the *wrong* option B is "**Protein kinase directly phosphorylates phosphorylase**", and its `why_en` says "**protein kinase does not act on phosphorylase directly**".
**Why these cannot both hold:** The entire teaching point of the node is the asymmetry — one step down to the synthase, two steps down to the phosphorylase — and the node builds an MCQ distractor out of exactly the belief the `mustKnow` instils. "Both halves at once" can be defended as "at the top of the cascade", but the always-visible field is what a reader meets before the points, and it points straight at the wrong MCQ option in the same node.
**Resolvable from the node alone?** yes.

### 7-8-4 — WRONG-NODE — severity: medium
**The field says:** (`mustKnow`) "It exists to regenerate NAD⁺, because **without it glycolysis stops dead at glyceraldehyde-3-phosphate and no ATP is made at all**."
**The node says:** (`coverageNote`) "read directly … **up to, but not including, the 'Regenerace NAD+…' paragraph and point 3, which belong to node 7-8-5**." And 7-8-5 `points[0]`, near-verbatim: "without it, glycolysis could not proceed past glyceraldehyde-3-phosphate and ATP could not form or regenerate."
**Why these cannot both hold:** The claim is true and it is the next node's opening sentence; this node's own `coverageNote` assigns that paragraph elsewhere. NAD⁺ regeneration as such *is* supported here (both `terms` entries say alcohol dehydrogenase and LDH regenerate NAD⁺), so only the halt-point clause is imported. The cost is that 7-8-4 and 7-8-5 now open with the same headline and 7-8-5's own `mustKnow` has moved on to a different subject.
**Resolvable from the node alone?** yes.

### 7-7-2 — INTERNAL-NUMBERS — severity: medium
**The field says:** (`points[6]`) "closes a full PENTOSE CYCLE … yielding **12 NADPH per glucose-6-phosphate**. Glucose-6-phosphate must be oxidized **SIX times (2 NADPH each turn)** to obtain **6 ribose-5-phosphate**, from which **2 glyceraldehyde-3-phosphate** molecules arise."
**The node says:** (same point, and `summary`) the cycle is closed by "isomerizing fructose-6-phosphate back to glucose-6-phosphate" — but no count of regenerated hexoses is ever given.
**Why this does not close:** Six oxidations at 2 NADPH each is 2 NADPH *per hexose oxidised*; "12 per glucose-6-phosphate" only works if five of the six are regenerated rather than consumed, which the node gestures at but never quantifies. The carbon does not close either: 6 ribose-5-phosphate is 30 C, and the node accounts for only the 2 G3P (6 C); the remaining 24 C must come back as 4 fructose-6-phosphate, a number the node never states. The `quiz[1]` explanation patches the NADPH half by inserting "per **(net)** glucose-6-phosphate" — an acknowledgement that the figure as printed needs a qualifier — but `points[6]`, `summary` and the `oral` model answer all carry it unqualified.
**Resolvable from the node alone?** **no** — needs p.163. The `coverageNote` says the prose was followed exactly, so this is plausibly the book's own loose accounting faithfully transcribed; if so, the project rule is that it gets said out loud in the node, and here it is not.

### 7-9-1 — UNSOURCED — severity: medium
**The field says:** (`mustKnow`) "That one condition is what divides amino acids into **glucogenic and ketogenic**."
**The node says:** (`terms[2]`) the entry for "glucogenic amino acid" is tagged **"(pojem odvozen z textu, kniha jej takto nenazývá)"** — the term is derived from the text, *the book does not call it that* — and adds "The book describes exactly this property **without using this exact umbrella term**."
**Why these cannot both hold:** The node states, in its own `terms`, that the book does not use even the *first* half of the dichotomy; "ketogenic" occurs nowhere in the node at all — not in `points`, `summary`, `terms`, `quiz` or `oral`. The always-visible field therefore presents as the book's classification something the node explicitly says the book does not make. The same import shows up in `quiz[0].why_en`, which explains a distractor with "acetyl-CoA/ketone bodies (**which cannot support net gluconeogenesis**)" — also stated nowhere in the node.
**Resolvable from the node alone?** yes — the node already carries the honesty tag that contradicts it.

### 7-11-2-1 — UNSOURCED — severity: medium
**The field says:** (`mustKnow`) "The product leaves already phosphorylated, so it **cannot escape the cell** — and **the ATP that phosphorylating it would have cost is saved**."
**The node says:** `points` cover only: intracellular breakdown is phosphorolysis not hydrolysis; non-reducing end; transfer onto phosphoric acid; glucose-1-phosphate; reversible arrow; the enzyme is phosphorylase. Neither membrane impermeability nor any ATP accounting appears anywhere in the node, including `terms` and `oral`.
**Why this is flagged:** both halves are the node's entire stated *rationale* for phosphorolysis and neither is supported by it. The ATP saving is stated in 7-8-1 `points[3]` and in 7-11-2-2 `points[4]`; the impermeability claim is stated in no node of this range at all (it recurs in 7-8-1's `mustKnow` and `trace`, equally unsourced there).
**Resolvable from the node alone?** no for the impermeability half — it needs the book; the ATP half could be cross-referenced to 7-11-2-2.

### Low-severity UNSOURCED — listed for completeness, not as repair work

Each is a claim in `mustKnow` (or, where noted, a quiz/oral field) that appears nowhere else in
its own node. All of them are, as far as I can tell, true biochemistry; the test here is only
whether the node supports them.

- **7-6-2** — "its NADPH is **not for making ATP** — it is the **reducing power that biosynthesis spends**." The node traces the C-1 and C-6 oxidations and never says what any NADPH is for. (Supported in 7-7-1 `points[0]`.) The node also never names "pentose phosphate pathway" outside a forward cross-reference.
- **7-8-1** — "a doubly charged molecule that **cannot leak back out of the cell**." No membrane-permeability statement anywhere in the node; repeated in the node's `trace` ("葡萄糖一旦被磷酸化就漏不出细胞了").
- **7-8-2** — "This is **the only oxidation in the whole of glycolysis**." A pathway-wide scope claim; the node covers one step and makes no statement about the rest of glycolysis. Repeated in the `trace`.
- **7-8-3** — "Net for one glucose: 2 ATP **and 2 NADH**." The node's subject is the book's ATP-balance table, which is ATP-only; **NADH appears nowhere in this node** (`points`, `summary`, `terms`, `quiz`, `oral`). The figure is right and derivable from 7-8-2, but not from here. Also "it needs **no oxygen** whatsoever" — no oxygen content in this node.
- **7-8-5** — "that single fact is **why fat cannot be turned back into glucose**." Fat, fatty acids and the word "irreversible" appear nowhere in the node; the node has only the one-way arrow of the overall equation.
- **7-9** — "which is also what lets the two directions **be regulated independently**." No regulation content in the node.
- **7-10-1** — "**that is why we digest starch but not cellulose**, though both are nothing but glucose." Starch and cellulose are named nowhere in the node, which is purely about glycosidase specificity, emulsin, and the atypical transfer reaction.
- **7-11-1-2** — "**we make no cellulase at all**, so the **β(1→4)** bonds of cellulose pass through us untouched — that is what **dietary fibre** is." The node says cellulases are "mainly in microorganisms and **rare in animals**", not absent; neither "β(1→4)" nor "dietary fibre" occurs anywhere in the node.
- **7-12-1** — "A separate branching enzyme **lifts a block of residues off and re-attaches it** as an α(1→6)." The node describes the branching enzyme only as one that "converts SOME alpha-1→4 bonds into alpha-1→6 bonds" — a bond conversion, with no block transfer, in `points[3]`, `terms`, `summary`, `quiz` and `oral` alike.
- **7-12-2** — "and **burn ATP in a futile cycle**." No futile-cycle argument and no ATP cost anywhere in the node; the node states reciprocity but never explains why it matters.
- **7-6-1** — "it **does not happen to the free sugar**, it happens on the UDP-sugar." The node says only that the book names UDP as the reaction's "coenzyme" (`points[1]`, with the book's own scare quotes). The node's `trace` goes further and attributes the mechanism to the book — "**教材点出**…葡萄糖 ⇌ 半乳糖这个差向异构，不发生在游离的糖身上，而发生在 UDP-糖上". The claim is confirmed by the book itself later, in 7-10-3 (`UDP-glukosa ⇌ UDP-galaktosa` via UDP-glucose-4-epimerase), so only the *attribution inside 7-6-1* is unsupported.

### LANGUAGE — severity: low

**(a) Stranded English inside Chinese prose — 6 instances in 4 of my nodes.** This is the exact
pattern the spec names (`为什么教材specifically指出…`):

| line | node | field | text |
|---|---|---|---|
| 1777 | 7-6-1 | `quiz[1].why_cn` | "而将异构化**specifically**定义为羰基向相邻碳原子的转移" |
| 2870 | 7-10-2 | `quiz[0].why_cn` | "但甘露糖**specifically**用GDP" |
| 3066 | 7-11-1-2 | `summary.cn` | "异麦芽糖**specifically**来自分支区域" |
| 3079 | 7-11-1-2 | `terms[3].def_cn` | "**specifically**来自α-1,6分支点" |
| 3102 | 7-11-1-2 | `quiz[1].answer_cn` | "异麦芽糖（**specifically**来自分支区域）" |
| 3301 | 7-12-1 | `quiz[0].q_cn` | "糖原合酶**specifically**转移什么？" |

Not confined to my range — nine more instances sit in 7-1…7-6 (lines 112, 120, 164, 412, 921,
971, 1173, 1179, 1192), so this is a chapter-wide artefact and should probably be fixed in one
pass rather than node by node.

**(b) 7-8-1 `points[7]`, en/cn pair says different things.**
**en:** "the enzyme the text calls '**triosafosfátizomerasa**' (figure: '**fosfotriosaisomerasa**' — same enzyme, **reversed word order**)"
**cn:** "由正文中称为「**磷酸丙糖异构酶**」的酶加速（插图标注为「**磷酸丙糖异构酶**」——同一种酶，**词序不同**）"
The Chinese prints the identical term twice while asserting the two differ in word order, so the
sentence defeats itself. The parallel `points[4]` in the same node does it correctly
(「己糖磷酸异构酶」 vs 「磷酸己糖异构酶」); the intended first form here is presumably
「丙糖磷酸异构酶」.

## Clean

**Clean on every class — `mustKnow` belongs to its node, is supported by it, numbers agree,
no leaks, no language defects:** `7-7-1`, `7-10-3`, `7-11-1-1`, `7-11-2-2`.

Worth saying which ones these are, because they cluster: **7-7-1 is the node that had the most
opportunity to leak and did not** (it withholds an enzyme name through five separate fields), and
**7-11-2-2 is the most number-dense node in the half** (4 residues / 3-residue block / 1 residue /
~10% free glucose / 2 phosphorylations / less than half) with every figure agreeing across
`trace`, `summary`, `points`, `quiz` and `oral`, including a `numbers` line in the trace that
restates all three and matches.

**Clean on placement, with only the low-severity notes above:** `7-6-1`, `7-6-2`, `7-8-1`,
`7-8-2`, `7-8-3`, `7-8-5`, `7-9`, `7-10-1`, `7-10-2`, `7-12-1`. In particular `7-9`, the node most
at risk of an enzyme-name leak, is clean on that count in all seven fields.

## Already flagged by the node itself — not findings

- `7-6-1` — the book gives its two isomerisation examples at different phosphorylation states (plain glucose ⇌ fructose vs. G3P ⇌ DHAP); transcribed as printed rather than normalised.
- `7-6-2` — the book's figure labels a branch "při pentosurii v moči" but the prose never explains the enzymatic defect; the node reports only what the figure shows.
- `7-6-3` / `7-9-1` — both flag §-boundary spillover onto a page the node does not claim (p.162, p.170), with an explicit request for reconciliation.
- `7-7-1` — the book names only two of the three enzymes in the oxidative-branch figure; the third is left unnamed, flagged as the book's own choice.
- `7-7-2` — the crossed transketolase/transaldolase arrows in the p.163 figure are too dense to adjudicate at scan resolution; the node states it follows the prose instead of guessing pixels.
- `7-8-1` — prose vs figure enzyme naming: `hexosafosfátizomerasa`/`fosfohexosaisomerasa` and `triosafosfátizomerasa`/`fosfotriosaisomerasa`.
- `7-8-2` — the p.165 figure calls the triose "3-fosfoglyceraldehyd" where the text says "glyceraldehyd-3-fosfát".
- `7-8-3` — the phosphoglycerate-mutase mechanism arrow cannot be traced atom-by-atom at scan resolution; the node reports the net, textually-stated transformation.
- `7-9` — the two closing hydrolyses are unnamed by the book; the Cori cycle is described but never named.
- `7-9` `points[5]` — the standard names `fructose-1,6-bisphosphatase` / `glucose-6-phosphatase` do sit inside `points`, but inside an explicitly labelled "Honesty note" that states the book never prints them. Listed here rather than raised as NON-BOOK-IN-POINTS; noting only that 7-7-1 handles the same situation by keeping its withheld name out of `points` entirely, so the two nodes use different conventions.
- `7-10-1` — the book sources emulsin from *sweet* almonds where standard biochemistry says bitter; reproduced as printed and flagged for a second source.
- `7-11-1-2` — the book states there is no reason for the label "gamma" beyond it being the third amylase discovered.
- `7-12-2` — the book labels its central enzyme "the kinase of phosphorylase-kinase, i.e. protein kinase"; and it never says what I/D or a/b abbreviate, which the node declines to invent. The `coverageNote` also records mirror-reversed show-through on the p.175 scan and states it was not used.
- `7-12-2` `lehNotes` — an existing gap note: the node writes adrenalin/glucagon as one undifferentiated pair and never names a target organ, which would invite the wrong answer on "which hormone mobilises muscle glycogen".
- `7-8-3` `lehNotes` — an existing gap note: 2,3-bisphosphoglycerate appears here only as the mutase's cofactor, never as haemoglobin's allosteric effector.

## What this does NOT cover

Nothing here was checked against the page images — the scans are out of scope for this pass and
chapter 7 still has never had a verification pass against them. Only one finding (7-7-2's
12-NADPH accounting) actually needs the book; every other finding above is decidable from the
node's own text.
