# Audit — ch6

Nodes read: 19 (`6-1`, `6-1-1`, `6-1-2-1`, `6-1-2-2`, `6-1-3`, `6-2-1-1`, `6-2-2-1`, `6-2-2-2`,
`6-2-2-3`, `6-2-2-4`, `6-2-3`, `6-2-4-1`, `6-2-4-2`, `6-2-4-3`, `6-2-4-4`, `6-2-4-5`, `6-3-1`,
`6-3-2`, `6-3-3`) — every node in `biochemie_pro/data/ch6.js`, read in full including
`coverageNote`, `trace` and `lehNotes`.

Findings: **12** — QUIZ-BEYOND-NODE 1, NON-BOOK-IN-POINTS 1, WRONG-NODE 1, INTERNAL-NUMBERS 3,
CONTRADICTS-NODE 1, UNSOURCED 1, LANGUAGE 4
Clean: **7** (`6-1-1`, `6-1-3`, `6-2-2-1`, `6-2-2-4`, `6-2-4-3`, `6-3-1`, `6-3-3`)

**Headline: chapter 6 has no misplaced `mustKnow`.** The defect family that motivated this audit
— a `mustKnow` carrying another node's content — does not occur here. All 19 `mustKnow` fields
are on their own node's subject and supported by their own `points`. The findings below are of
other kinds, and most are lower-severity than chapter 8's.

The chapter's arithmetic is in good shape. Every number I could close, closed: 13.8 + (−30.5) =
−16.7 (`6-1-1`); 3×3 NADH + 2×1 FADH2 + 1 GTP = 12 ATP, 8 + 6 + 24 = 38, 38 × 30.5 ≈ 1159,
1159/2870 ≈ 40 % (`6-2-2-3`); H₂/2H⁺ at −0.42 V matching the −420 mV biological hydrogen
electrode (`6-2-1-1`); 2 H⁺ (I) + 4 H⁺ (III) + 0 (IV) = 6 vs 4 for the succinate route
(`6-2-4-4`); 6 H⁺→3 ATP and 4 H⁺→2 ATP (`6-2-4-5`); 8 carboxyls → −4 CO₂ → −2 CO₂ (`6-3-2`);
7 of Tab. 6.4's 9 entries valence-changing (`6-3-1`). The ATP-yield equation in `6-2-2-3`
(`CH3CO~S-CoA + 2 O2 + 12 ADP + 12 Pi → 2 CO2 + CoA-SH + 12 ATP + 13 H2O`) balances atom for
atom, as does the overall NADH equation in `6-2-4-5`. The three genuine numeric findings are all
about *counts of things described in figures and tables*, not about the biochemistry.

## Findings

### `6-2-3` — QUIZ-BEYOND-NODE — severity: high

**The node's own honesty note says:** `points[6]`, `cz` anchor `"proč zvířata tuto dráhu nemají —
teze odvozená, ne doslovná věta knihy"` — "HONESTY NOTE: the book's own wording restricts the
pathway to 'some microorganisms and plants' but **never explicitly states in so many words that
animals lack it or names the missing enzymes**. Standard biochemistry attributes animals'
inability to run this pathway to their genomes not encoding isocitrate lyase or malate
synthase… This explanatory sentence is standard biochemical knowledge supplementing the book's
implicit scoping, **not a direct quotation or paraphrase of a book sentence**." The
`coverageNote` repeats it: "Honesty flag: the book's text restricts this pathway's occurrence to
'u některých mikroorganismů a rostlin' … without ever explicitly stating in these words that
animals lack it or naming the missing enzymes as the reason."

**The quiz then asks:** `quiz[1]`, a core `short` item — "Why can't animals achieve net synthesis
of carbohydrate from fatty-acid-derived acetyl-CoA, based on this pathway?" / "根据这条途径，为什
么动物无法从脂肪酸来源的乙酰辅酶A净合成糖类？"

**And `mustKnow` states it flatly, with no hedge:** "That is the entire reason plants and some
bacteria can turn fat, or acetate, into carbohydrate — **and why animals, lacking its two extra
enzymes, cannot**." The `trace` does the same: "动物为什么不行？因为**缺这两个额外的酶**".

**Why these cannot both hold:** The node states in two places that the book does not contain the
animals-lack-it claim or the enzyme reason, and then makes that same claim the subject of a core
quiz question and the closing sentence of the always-visible `mustKnow`. A candidate revising
from `mustKnow` meets the non-book claim first and unmarked; the hedge sits in `points[6]`, which
is collapsed in the UI.

**Note in fairness:** the `quiz[1]` *answer* is correctly hedged ("The book restricts the
glyoxylate cycle to some microorganisms and plants. **Standard biochemistry explains this as**
animals' genomes not encoding…"), and the `oral` model answer closes with an explicit paragraph
distinguishing book from supplement, with a matching checklist line. So three of five surfaces
handle it correctly. The two that do not — `mustKnow` and the quiz *question* — are the two a
reader hits first.

**Resolvable from the node alone?** Yes — the node already contains the correct hedge; it just is
not applied in `mustKnow` or in the question stem.

---

### `6-2-4-5` — NON-BOOK-IN-POINTS — severity: medium

**The field says:** `points[7]`, the last point, `cz` anchor `"orientační pojem: poměr protonů na
ATP **(mimo text knihy)**"` — "As a general orientation note (not the book's own terminology):
both ratios reduce to the same 2 protons per ATP (6÷3 = 4÷2 = 2) — this 3-ATP-per-NADH vs
2-ATP-per-succinate relationship is what other textbooks commonly call the '**P/O ratio**.'"

**Why this is a finding:** the point's own Czech anchor marks it "(mimo text knihy)" — outside
the book's text — yet it sits in `points`, which is where the node's book-derived content lives,
rather than in `gapPoints` or a note. Every other point in this node is transcribed book content
(Obr. 6.10's labels, Obr. 6.11's caption, the prose stoichiometry). This one introduces a framing
and a term the book never uses. Compare `6-2-2-4`, which handles the identical situation
correctly: it flags "the book does not use the word 'amphibolic'" *inside* the point that uses it
and repeats the flag in `coverageNote` and the `oral` checklist — but that point is otherwise
book content, whereas this one is entirely supplementary.

**Secondary observation on the same point:** the sentence runs two different ratios together. "2
protons per ATP" is an H⁺/ATP ratio; the "P/O ratio" label properly attaches to the 3-vs-2 ATP
figures named in the second half of the sentence. As written, a reader can come away thinking
"P/O ratio = 2 protons per ATP." Low severity, but it is the kind of conflation a supplementary
note is supposed to prevent rather than create.

**Resolvable from the node alone?** Yes — this is a placement decision, not a content question.

---

### `6-2-3` — WRONG-NODE (metadata) — severity: medium

**The field says:** `topicKey: "starch-sucrose-biosynthesis"` on the glyoxylate-cycle node.

**The node says:** `czTitle: "Glyoxylátový cyklus"`, `section: "6.2.3"`, and its entire content is
the citrate-cycle variant — isocitrate lyase, malate synthase, net 4-carbon gain. Starch and
sucrose appear nowhere in the node.

**Why this matters, and why it is not cosmetic:** `topicKey` is load-bearing in the app.
`biochemie_pro/app.js` uses it twice — to build the "Same topic 同一主题" cross-link panel on
every node (`TOPICS.filter((x) => x.topicKey === t.topicKey && x.id !== t.id)`) and to drive the
whole `nav: 'topic'` browsing mode. I checked every data file: `starch-sucrose-biosynthesis`
occurs in exactly two places in the entire dataset — this node, and `L-20-6-1` in `leh_ch20.js`,
"Starch, sucrose and cellulose — one polymer chemistry, three different answers…". So the
glyoxylate cycle's only "same topic" neighbour anywhere in the app is a polysaccharide-polymer
node, and it is absent from `citric-acid-cycle`, which is where its actual neighbours live
(`6-2-2-1/-2/-3`, five `ch7` nodes, and Lehninger's `L-16-2-1`, the citric-acid-cycle reactions
node that `6-2-2-3` already cross-references in its own `lehNotes`).

**Resolvable from the node alone?** Yes — no book page is involved; this is a key assignment.

*Lower-confidence, listed but not counted as a finding:* `6-3-1` carries
`topicKey: "oxygen-binding-proteins"` (shared with `leh_ch5`/`leh_ch22`). Hemoglobin is genuinely
row 1 of its Tab. 6.4, so this is defensible, but 7 of the table's 9 entries are redox enzymes,
not oxygen-binding proteins, and it separates `6-3-1` from `6-3-2`/`6-3-3`
(`amino-acid-derived-molecules`), which are the same 6.3 section. Worth a second opinion rather
than a change.

---

### `6-2-2-3` — LANGUAGE — severity: high

**The field says:** the `cn` half of the node's single `lehNotes` entry is byte-corrupted and
renders as nothing readable. It begins:

```
cn: "æ¬èç¹ç ATP æ»è´¦å¹¶ä¸æ¯ç°ä»£æç§ä¹¦ç»çé£ä¸ªï¼ …"
```

This is UTF-8 text stored as if it were Latin-1 — the whole field, ~700 characters, is
unrecoverable by a reader. The `en` half of the same entry is intact and readable, but carries
the same corruption in its punctuation: "reports that **â**as many as 32 atp are obtained per
glucose**â â** a range of 30 to 32".

**Why it matters more than a typo:** this is the chapter's only `lehNotes` entry (I checked —
`lehNotes` appears exactly once in the file), and it is a `kind: "conflict"` note doing real
work: it warns that the node's 38-ATP total is the old integer convention and that Lehninger
gives 30–32, closing with "ANSWER 38 IN THIS COURSE, but be able to say why." A reader working in
Chinese gets none of that warning and is left with 38 unqualified.

**Resolvable from the node alone?** Yes — re-encoding, no book page needed. The `en` half
preserves the full content to re-derive the `cn` from.

---

### `6-2-4-2` vs `6-2-4-4` — INTERNAL-NUMBERS — severity: low

*This is the item flagged for particular attention. My verdict: the two figures are reconcilable
and their totals agree, but neither node reconciles them, and a reader of `6-2-4-2` alone will
infer the wrong per-complex split.*

**`6-2-4-2` says** (`points[4]`, describing Obr. 6.6): "…two 'b'-type cytochromes, cytochrome c1,
cytochromes a/a3 with Cu, and **three separate '2H+' arrows** pointing out to the C side at
different points along the chain".

**`6-2-4-4` says** (`points[5]`, describing Obr. 6.9): "cytosolic-side proton-release arrows
appear **ONLY beneath Complex III (4 H+) and beneath Complex I (2 H+)** — NONE appear beneath
Complex II or beneath Complex IV, visually confirming that only I and III contribute to the
transmembrane proton gradient in this book's scheme."

**Why this needs saying:** three 2H⁺ arrows reads as 2/2/2, and the natural assignment of "three
points along the chain" is Complexes I, III and IV — which is exactly the attribution `6-2-4-4`
then denies, in a sentence whose whole rhetorical weight is "NONE appear beneath … Complex IV,
visually confirming". Both total 6, and the two are reconcilable if two of Obr. 6.6's arrows sit
at the two proton-releasing steps *within* Complex III — which is precisely what `6-2-4-3`
describes mechanistically (one H⁺ released at the bT step, a second at the c1 step, "1 e⁻ → cyt c
⇒ 2 H⁺"). So the figures are compatible.

**But no node says so.** `6-2-4-2` describes its three arrows only as "at different points along
the chain" and never assigns them; `6-2-4-4` asserts the 4/2/0 split with no reference to Obr.
6.6 one node earlier; `6-2-4-5`'s Obr. 6.10 description ("summing Complex III's 4H+ plus Complex
I's 2H+") follows `6-2-4-4` without acknowledging the third reading. One clause in `6-2-4-2`
naming which complexes those three arrows belong to would close it.

**Resolvable from the node alone?** Partly — the reconciliation is derivable from `6-2-4-3`'s
mechanism, but confirming which complexes Obr. 6.6's three arrows actually sit under needs
page 142.

---

### `6-2-4-4` — INTERNAL-NUMBERS — severity: low

**The `coverageNote` says:** "…plus Obr. 6.9 (zoomed across three overlapping crops — left half
with Complex II/III, middle boundary region, and right half with Complex I/IV — specifically to
resolve which proton-count labels, **4H+/4H+/2H+**, belong to which complex; this was
cross-checked against, and fully resolved by, the explicit prose on p.145)."

**`points[5]` says:** arrows appear "ONLY beneath Complex III (**4 H+**) and beneath Complex I
(**2 H+**)".

**Why these cannot both hold as written:** the `coverageNote` inventories **three** proton-count
labels in Obr. 6.9 (4, 4, 2 — summing to 10); `points[5]` inventories **two** (4 and 2 — summing
to 6, the figure the node's own `points[6]` and the p.145 prose require). The `coverageNote`
declares the question "fully resolved" but never says what became of the second `4H+`. The most
likely explanation is that `4H+` is printed twice in the figure — once as Complex III's release
and once as the succinate-route total — but the node does not say that, so its own audit trail
does not add up to its own conclusion. Everything downstream (`points[6]`, `points[7]`, the quiz,
the `oral`) is consistent at 6 and 4; only the `coverageNote` is loose.

**Resolvable from the node alone?** No — needs page 144 to say what the third label is.

---

### `6-1-2-2` — INTERNAL-NUMBERS — severity: low

**`summary` says** (both halves): "TAB. 6.1 then ranks **eleven phosphorylated (plus, for
comparison, one thioester) compounds** by their ΔG⁰′ of hydrolysis" / "表6.1随后按水解ΔG⁰′对
**11种磷酸化合物（外加一种硫酯以作比较）**进行排序".

**The node says:** `points[5]` — "Table 6.1 places '(acetylkoenzym A)' uniquely in parentheses
**among its eleven rows**. **Every other entry** is an actual phosphorylated compound". The
`coverageNote` agrees twice over: "Tab. 6.1's **full 11-row table**" and "**unlike the other ten
entries**, this one is not actually a phosphorylated compound". And `points[2]` lists the table
out in full — I counted it: PEP, 1,3-BPG, creatine phosphate, acetylphosphate, inorganic
diphosphate, (acetyl-CoA), ATP, glucose-1-P, fructose-6-P, glucose-6-P, 1-glycerol-3-P =
**11 rows, of which 10 are phosphorylated**.

**Why these cannot both hold:** the summary's "eleven phosphorylated … plus one thioester"
implies a 12-row table; every other field in the node says 11 rows total, 10 + 1. Off by one.

**Resolvable from the node alone?** Yes — `points[2]`'s enumerated list settles it; the summary
is simply miscounted.

---

### `6-2-2-2` — CONTRADICTS-NODE — severity: low

**`points[4]` says:** "This is the cycle's SECOND and LAST CO2-releasing step — **every reaction
from here to the end of the cycle (succinyl-CoA → succinate → fumarate → malate → oxaloacetate)
is redox or hydration chemistry only**, with no further loss of carbon."

**The node's own `mustKnow` says:** "everything **from succinate onward** is redox and hydration
chemistry, with no more carbon lost."

**Why these cannot both hold:** they place the start of the "redox or hydration only" stretch one
step apart, and the step in dispute — succinyl-CoA → succinate — is neither. `6-2-2-3`'s
`points[0]` spells this out: "It converts to succinate **NOT by simple hydrolysis** but by
reaction with GDP and inorganic phosphate… The direct product is GTP, not ATP." A substrate-level
phosphorylation is not redox and not hydration, so `points[4]`'s list is wrong at its first
member while `mustKnow` is right.

**Mitigating:** the load-bearing half of both sentences — no further loss of carbon — is correct
in both, and that is what the quiz and `oral` checklist test. This is a low-severity slip in an
incidental clause, listed because the parent audit asked for the numbers-and-boundaries pass, not
because it would cost an exam answer.

**Resolvable from the node alone?** Yes — `mustKnow`'s wording is already the correct one.

---

### `6-2-4-1` — UNSOURCED — severity: low

**`mustKnow` says:** "Strip Complex I down to one sentence: it takes the electrons NADH is
carrying and hands them to ubiquinone, **releasing protons along the way**."

**The node says:** `points[5]` gives Complex I's defining equation as "NADH + H+ + 2 QH• ⇌ NAD+ +
2 QH2" — a proton is **consumed** on the left, and none is released. No other field of this node
mentions Complex I releasing or translocating protons; `points[3]` refers only to the general
principle that membrane embedding "enables mutual interconversion of chemical energy (ΔG') and
osmotic work (transport of H+ AGAINST its concentration gradient)".

**Why it is flagged:** the mechanism arrives only in `mustKnow`, and the node's own equation for
the same complex points the other way. It is nevertheless correct biochemistry and is properly
sourced one node later — `6-2-4-2` `points[1]` ("releases PROTONS into the cytosolic … space")
and `points[3]` ("a VECTORIAL, apparent transfer of 2 protons"). So this is a sourcing gap across
a node boundary, not an error. Severity low precisely because `6-2-4-1` is itself a declared
gap-fill node covering only the section opening.

**Resolvable from the node alone?** Yes — one clause pointing forward to `6-2-4-2` would close it.

---

### `6-1`, `6-1-2-1`, `6-1-2-2`, `6-2-1-1` — LANGUAGE — severity: medium

**Six occurrences of the English adverb "specifically" stranded inside Chinese prose** — the exact
pattern AUDIT_SPEC names as its class-7 example. Verbatim, with field:

| node | field | text |
|---|---|---|
| `6-1` | `quiz[1].q_cn` | "为什么教材**specifically**指出Gibbs自由能（ΔG）是描述生命系统能量变化的合适状态函数？" |
| `6-1-2-1` | `points[0].cn` | "尽管习惯上仍会**specifically**指出其中断裂后能使分子稳定并释放能量的那一个键" |
| `6-1-2-1` | `points[6].cn` | "脊椎动物中**specifically**称为磷酸肌酸，无脊椎动物中称为磷酸精氨酸" |
| `6-1-2-1` | `quiz[1].why_cn` | "教材**specifically**指出，脊椎动物中的磷酸原是磷酸肌酸" |
| `6-1-2-2` | `quiz[2].q_cn` | "乙酰辅酶A中的硫酯键为什么是高能键？其结构原因**specifically**是什么？" |
| `6-2-1-1` | `points[1].cn` | "在有机化合物领域，氧化很常**specifically**是指脱氢" |

**Why it is a finding and not style:** the project convention keeps *technical terms* in English
inside Chinese prose, and the chapter does that correctly and often (hexokinase, anhydride,
phosphagen, isocitrate lyase, anaplerotic, mitochondrial matrix — all glossed in parentheses
alongside the Chinese). "specifically" is not a technical term; it is an ordinary adverb sitting
where a Chinese word should be, and it reads as an unfinished edit. Two of the six are in
question stems, which are read under time pressure.

**Resolvable from the node alone?** Yes.

---

### `6-2-4-2` — LANGUAGE — severity: medium

**Two half-translated words in the same node.**

**`terms[1].def_cn`:** "黄素单核苷酸，复合物I第一个接受电子/质子的**辅factor**；在基质侧被NADH还原
为FMNH2。" — `辅factor` is "cofactor" translated halfway: the Chinese morpheme 辅 followed by the
English "factor". The intended word is 辅因子, which the same file uses correctly elsewhere
(e.g. `6-2-2-1` `points[2]`: "其酶、EC编号和**辅因子**"). This one is in a `terms` definition, which
is glossary text.

**`summary.cn`:** "FMNH2的电子接着依次传递给一个Fe4S4簇（位于偏**cytosol**侧的位置，使FMNH2再氧
化，并向膜间/**胞质**侧释放质子）" — "cytosol" left in English and then, nine characters later in
the same parenthesis, correctly rendered 胞质. The English `summary` at the same point reads
"positioned toward the cytosolic side".

**Resolvable from the node alone?** Yes — both have their correct rendering elsewhere in the same
file, one of them in the same sentence.

---

### `6-2-1-1`, `6-3-2` — LANGUAGE — severity: low

**An authoring field name leaking into reader-facing Chinese prose**, twice:

- `6-2-1-1` `points[7].cn`: "至于其数量级，正文在本节点覆盖的页面范围内尚未说完（见**coverageNote**）。"
- `6-3-2` `points[0].cn`: "已在本节**coverageNote**中标注，几乎可以肯定是排版错误"

`coverageNote` is a data-schema field name, not something the reader can see or navigate to — the
UI renders point text, not field identifiers. Both sentences are otherwise fine and both English
counterparts do the same thing ("flagged in this node's coverageNote", "see coverageNote"), so
this is consistent authoring rather than a slip, but it addresses the editor rather than the
candidate. Lowest severity of anything here; listed for completeness.

**Resolvable from the node alone?** Yes.

## Clean — no findings

`6-1-1` (exergonic/endergonic coupling), `6-1-3` (catabolism/anabolism, Obr. 6.2), `6-2-2-1`
(citrate cycle intro + citrate synthase), `6-2-2-4` (biosynthetic role + anaplerosis), `6-2-4-3`
(Complex III + Q cycle), `6-3-1` (porphyrin proteins, Tab. 6.4), `6-3-3` (porphyrin degradation).

Worth naming what is clean, because it clusters usefully:

- **The whole 6.3 porphyrin section is sound.** `6-3-1`/`6-3-2`/`6-3-3` are internally consistent
  end to end — Tab. 6.4's 7-of-9 valence-change count, the 8 → −4 CO₂ → −2 CO₂ carboxyl
  bookkeeping through uroporphyrinogen III → coproporphyrinogen III → protoporphyrin IX, the
  `-nogen` = –CH₂– vs methine =CH– naming rule, and the three-step degradation order all agree
  across `mustKnow`, `summary`, `points`, `terms`, `quiz` and `oral`. The only entry against them
  is `6-3-2`'s `coverageNote` leak above, which is cosmetic, and the `6-` / `δ-` typesetting slip,
  which the node already flags four separate times.
- **`6-2-2-3`'s energy bookkeeping is the most heavily cross-checked passage in the chapter and
  it holds.** 12 ATP/turn, 8+6+24 = 38, 1159 kJ/mol, ~40 % — all reproduce, and the balanced
  ATP-yield equation closes atom for atom including its 13 H₂O. Its only finding is the corrupted
  `lehNotes.cn`.
- **`6-2-4-3` is the densest node in the chapter** (Q cycle, bT/bK, per-electron proton
  accounting) and is entirely self-consistent.

## Already flagged by the node itself — not findings

- `6-1-2-2` — Tab. 6.1's uniquely parenthesised "(acetylkoenzym A)" row, a thioester in a table of
  phosphorylated compounds; the node reasons about why and says so.
- `6-1-3` — two self-corrections: the pyruvate→acetyl-CoA arrow is *not* uniquely one-way (an
  earlier pass's claim, retracted in `points[6]` and `coverageNote`), and glycerol's entry point
  is PEP, not glyceraldehyde-3-phosphate.
- `6-2-1-1` — p.135 ends mid-sentence ("…jen v určitých kvantech, řádově"); the node says the
  order of magnitude is not stated within its page range. `6-2-2-1`'s `coverageNote` confirms the
  continuation is "30 kJ·mol⁻¹" on p.136.
- `6-2-2-1` — Tab. 6.3 rows 3 and 5 printed without EC numbers; "2-oxoglutarátoxidasa" in the
  book's own quotation marks; no ΔG printed for the citrate-synthase step, and the node refuses
  to invent one.
- `6-2-2-3` — `lehNotes` `kind: "conflict"`: the book's 38 ATP/glucose vs Lehninger's 30–32, the
  ~3/~2 vs 2.5/1.5 convention, and the 40 % vs 34 % efficiency figure. Deliberately preserved.
- `6-2-2-4` — the book does not use the word "amphibolic"; flagged in `coverageNote`, in
  `points[0]`, and in the `oral` checklist.
- `6-2-3` — the honesty flag on animals and the glyoxylate cycle (raised as a finding above only
  because `mustKnow` and the quiz stem do not carry the hedge).
- `6-2-4-1` — declares itself a GAP-FILL node closing a range no other node covered.
- `6-2-4-2`, `6-2-4-5` — NODE-SPLIT NOTE: "Komplex I", "Komplex II" etc. are bold run-in phrases,
  not numbered sub-headings; the one-node-per-complex split is editorial.
- `6-2-4-5` — Obr. 6.11's caption names no 'c' subunit or c-ring, though small membrane structures
  are drawn; the node says so rather than supplying the modern subunit list.
- `6-3-2` — the book prints "6-aminolevulátsynthasa" (digit 6) where δ- is meant; flagged in
  `coverageNote`, in `points[0]`, in a dedicated quiz item, and in the `oral` checklist.

## Needs the book (not internal-consistency findings)

- **`6-2-3`, p.140 — the glyoxylate cycle's overall equation writes one H⁺ for two NADH.** As
  given (identically in `summary` and `points[5]`): `2 CH3CO~S-CoA + 2 NAD⁺ + FAD + 3 H2O →
  ⁻OOC-CO-CH2-COO⁻ + 2 NADH + H⁺ + FADH2 + 2 CoA-SH`. Compare `6-2-2-3`'s citrate-cycle equation,
  which pairs them correctly: "3 NADH + **3 H⁺**". Two NADH formed from two NAD⁺ should release
  two H⁺, and the charges do not balance as written (+2 on the left from 2 NAD⁺, −1 on the right).
  Because the node transcribes this consistently in two places and presents it as the book's own
  summary equation, I have **not** raised it as a finding — it is most likely a faithful
  transcription, and possibly the book's own slip. **What I would check:** whether p.140 prints
  "H⁺" or "2 H⁺". If the book prints one, the node should carry a flag the way `6-3-2` does for
  the `6-`/`δ-` slip; if the book prints two, this is a transcription error.
- **`6-2-4-4`, p.144 — what the third `4H+` label in Obr. 6.9 actually is.** See the
  INTERNAL-NUMBERS finding above; the `coverageNote` names three labels and `points[5]` reports
  two. **What I would check:** whether `4H+` appears twice in the figure (once as Complex III's
  release, once as the succinate-route total), which is my best guess and would make both fields
  correct.
- **`6-2-4-2`, p.142 — which complexes Obr. 6.6's three `2H+` arrows sit under.** Needed to close
  the Obr. 6.6 vs Obr. 6.9 item cleanly rather than by inference from `6-2-4-3`'s mechanism.

## Scope of this pass

Every field of all 19 nodes was read, not just `mustKnow`: `summary`, `points`, `terms`, `trace`
(present on 5 nodes), `quiz` including all explanations, `oral` including model answers and
checklists, `coverageNote`, `cnNote`, and the single `lehNotes` entry. Numeric claims were
cross-checked between fields within each node and, where a quantity recurs (ATP-per-NADH ratios,
proton counts, ΔG values, the 30.5 kJ/mol figure), across nodes. Two mechanical scans were run
over the file: one for English words stranded in Chinese prose, one for encoding corruption. The
book's page images were not consulted — that is out of scope, and the three items that need them
are listed above.
