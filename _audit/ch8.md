# Audit — ch8 (all 40 nodes)

Read directly, not by agent: the audit agents for this range died on a session limit, so this
pass was done by reading every node's `enTitle`, `mustKnow` and the `cz` anchor of every point.
Two earlier agents had reported on this chapter while writing quiz questions; **their claim
that "17 of 20 nodes in 8-3-6…8-5-3-3 have a misplaced mustKnow" is an overstatement** — the
verified count for that range is 9 misplaced plus 1 unsourced, with 6 clean. The corrected
numbers are below. That is the reason for reading rather than forwarding.

Nodes read: 40 (8-1 … 8-5-3-3)
Findings: **22** — WRONG-NODE 15, UNSOURCED 5, INTERNAL-NUMBERS 1, UNFLAGGED-BOOK-CONTRADICTION 1
Clean: 18

`mustKnow` is always visible in the UI and is the first thing read on a node, so every finding
below is text the reader meets before anything else.

## WRONG-NODE — the mustKnow describes a different node's content

Fifteen. Two distinct runs, plus scattered singles.

**Run 1 — the fatty-acid-synthesis step sequence has slid off `8-3-3` onto its neighbours.**
`8-3-3` (steps III–VI) correctly carries "Step III: ketone to hydroxyl with NADPH", and then:

| node | its actual subject | what its mustKnow talks about |
|---|---|---|
| `8-3-4` | overall balance, 8 acetyl-CoA → palmitate | "Step IV dehydration creates a double bond" — belongs to `8-3-3` |
| `8-3-5` | precursor activation, phosphatidic acid | "Step V reduces the double bond" — belongs to `8-3-3` |
| `8-3-6` | CDP-diacylglycerol, head-group lipids, galactolipids | "Basic pathway builds to 16 carbons in cytoplasm; longer chains need mitochondrial/ER machinery" — belongs to `8-3-4` (palmitate's fate) or `8-3-1` (compartments) |

**Run 2 — the whole membrane section carries other sections' text.**

| node | its actual subject | what its mustKnow talks about |
|---|---|---|
| `8-5` | biological membranes, introduction | cholesterol → bile acids, gallbladder, recycled 6–8× daily |
| `8-5-1` | chemical composition (protein:lipid 1:4 to 3:1) | bile acids as rigid detergents, emulsification in the intestine |
| `8-5-2-1` | the lipid bilayer | "phospholipid synthesis uses CDP-intermediates" — belongs to `8-3-6` |
| `8-5-2-2` | membrane proteins, fluid-mosaic model | "sphingolipid synthesis from ceramide, adding different head groups" |
| `8-5-2-3` | functions of membrane proteins (structural / transport / catalytic / receptor) | lipid asymmetry maintained by ATP-dependent flippases — belongs to `8-5-2-1`, and see CONTRADICTS below |

**Scattered singles.**

| node | its actual subject | what its mustKnow talks about |
|---|---|---|
| `8-2-3` | glycoacylglycerols MGDG / DGDG / SL (plant thylakoid lipids) | phospholipids forcing themselves into a bilayer — belongs to `8-2-3-2` / `8-5-2-1` |
| `8-2-4-1` | terpenes and isoprenoids, IPP/DMAPP, phytol | "steroids are the opposite of fatty acids — rigid four-ring cages" — belongs to `8-2-4-3` / `8-2-4-4` |
| `8-2-4-3` | squalene and the steran skeleton | bile acids emulsifying fat droplets |
| `8-4-1` | lipase hydrolysing triacylglycerol | "free fatty acids must be activated to CoA thioesters" — belongs to `8-4-4-1` |
| `8-4-3` | derived lipids are not energy sources; cholesterol → bile acids → excreted | "complex lipids are degraded in the cytoplasm, not mitochondria" — belongs to `8-4-2-1` |
| `8-4-4-3` | fate of acetyl-CoA, **ketone bodies** | odd-chain fatty acids → propionyl-CoA — that is `8-4-4-4` |
| `8-4-4-4` | unsaturated, **odd-chain** and branched-chain cases | ketone bodies forming when acetyl-CoA exceeds cycle capacity — that is `8-4-4-3` |

`8-4-4-3` and `8-4-4-4` are a clean swap of each other's summaries.

## UNSOURCED — asserts something no field of the node supports

Five, and these are the more dangerous class: they read as facts about the node's own subject.

- **`8-4-4-1`** — "transported to mitochondria via the **carnitine shuttle**". The node is the
  two-step acyladenylate/thiokinase activation; carnitine appears nowhere in it, and this
  chapter's own `lehNotes` record that the carnitine shuttle never appears in the Czech text
  at all. Severity **high**: it is a mechanism the source book does not contain, presented as
  this node's headline.
- **`8-2-4-2`** — "a photon hitting the retinoid ring sends electrons down a wire toward an
  opsin". The node has retinol's structure and nothing about phototransduction. It is also
  garbled as biochemistry (a photon isomerises retinal; it does not send electrons anywhere).
- **`8-2-2-1`** — "a gram of fat stores more than twice the energy of a gram of carbohydrate".
  No energy-density figure exists anywhere in the node.
- **`8-2-3-2`** — PC and PE "are also signalling molecules… strip a fatty acid or phosphate and
  trigger a cascade". The node is purely structural (head/tail, amphipathy, R groups).
- **`8-1`** — "the **400+** different lipids". The node says the book gives no exact definition
  and tabulates 11 classes. The 400+ figure belongs to `8-2-4-6`, where it counts **carotenoids**.

Lower-severity, listed for completeness rather than as repair work: `8-2-2-2` ("oils evaporate"
— not in the node, and dubious), `8-2-3-3` (sphingosine "more rigid than glycerol, packs
stiffer" — the node says only that sphingomyelin resembles phosphatidylcholine), `8-2-4-4`
(names **estrogen**; the node gives progesterone and testosterone), `8-3-1` ("why drugs take
weeks to work" — not in the node), `8-3-7` ("30+ carbon" — the C30 figure is in `8-3-8`).

## INTERNAL-NUMBERS

- **`8-3-8`** — the same two reactants are given two different products: "GPP + another IPP
  condense head-to-tail to give the **fifteen-carbon** FARNESYL PYROPHOSPHATE" and, four points
  later, "SEPARATELY, GPP + another IPP condense head-to-tail to give the **twenty-carbon**
  GERANYLGERANYL PYROPHOSPHATE". C10 + C5 = C15, so the second cannot be right as written;
  GGPP is FPP + IPP. **Resolvable from the node alone? No** — the node's `coverageNote` claims
  the scheme was verified by zoomed re-read, so this may faithfully reproduce a book error.
  The page images are already on disk in `extracted_full_ch8/`, so the check is cheap.

## UNFLAGGED BOOK CONTRADICTION

- **`8-5-3-1`** — "SIMPLE diffusion occurs WITHOUT any membrane protein participation: directly
  through the lipid bilayer, through random pores, **or through channels formed by
  membrane-spanning integral proteins**." The sentence denies and asserts protein involvement
  in one breath, and Obr. 8.3's route (B) is explicitly a micropore *in integral proteins*.
  This is probably the book's own incoherence, faithfully transcribed — but the project's rule
  is that a book contradicting itself gets said out loud in the node, and here it is not
  flagged anywhere. Needs page 199 and then a `coverageNote` line, not a content change.

## Clean — mustKnow belongs to its node and is supported by it

`8-2-1-1`, `8-2-1-2`, `8-2-3-4`, `8-2-4-5`, `8-2-4-6`, `8-3-2`, `8-3-3`, `8-3-8`, `8-3-9`,
`8-4-2-1`, `8-4-2-2`, `8-4-4-2`, `8-5-3-1`, `8-5-3-2`, `8-5-3-3` — 15 outright, plus `8-2-2-2`,
`8-2-4-4`, `8-3-7` clean on placement with the low-severity notes above.

Note that the clean ones cluster: **membrane transport (`8-5-3-*`) is entirely sound, and so is
the β-oxidation core (`8-4-2-1`, `8-4-4-2`)**. Whatever produced the misplacements did not touch
those runs.

## Already flagged by the node itself — not findings

`8-1` "etnanolamin" typo · `8-2-2-2` cetyl alcohol printed C11 · `8-2-1-2`/`8-2-3` figure-vs-text
notes · `8-3-1` "matonyl-CoA" typo and the unusual Mn²⁺ cofactor · `8-3-5` the
3-glycerolfosfát / L-α-glycerolfosfát naming drift · `8-3-9`/`8-3-7` the mevalonate scheme
routed "via malonyl-SCoA" · the β-oxidation scheme labelling the thiolytic enzyme
"β-ketokinasa" · `8-2-3` the p.180 continuation the node says it may be missing.

## What this does NOT cover

Only `mustKnow` against the node, plus numbers and one-sentence self-contradictions found on
the way. The `points`, `summary` and `coverageNote` prose of chapter 8 has still never been
read against the page images by a second reader — chapters 7 and 8 remain the two that have
never had the verification pass (HANDOFF §0). Nothing here changes that.
