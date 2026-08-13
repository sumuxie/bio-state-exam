# Content audit — status

Started 2026-08-13. Read-only: nothing in `biochemie_pro/data/` has been changed by this audit.
Rules and finding classes: `../AUDIT_SPEC.md`.

## Why

Three defects of one family surfaced by accident while writing bank questions, all of them in
`mustKnow` — the field that is always visible and read first. The question the audit answers is
not "is the biochemistry right" (that needs the book) but "**can this node be true against
itself**".

## The shape of the result, now that seven chapters have been read

**The chapter-8 defect does not repeat anywhere.** Chapters 1–3, 6, 7, 9 and 10 contain **not
one** `mustKnow` that describes a different node's subject. Whatever went wrong in chapter 8 —
a step sequence sliding across three nodes, an entire membrane section carrying other sections'
text, two adjacent nodes swapping summaries — happened once, in one chapter, and is now fixed.

What the other chapters have instead is a **different and quieter failure**: the always-visible
`mustKnow` states something the node's own `points` deny. Chapter 7 does it by over-generalising
(a rule true of the headline example asserted for the whole class); chapter 3 did it by naming
the wrong one of three roles; chapter 9 did it by converting a step count into a molecule count.
Every one of these scores *well* on word overlap, because the vocabulary matches — the claim is
on-topic and simply false. **This is the class the automated passes cannot see, and it is spread
across every chapter, not concentrated in one.**

## Done

| range | nodes | how | result |
|---|---|---|---|
| ch8 | 40 | read directly (`ch8.md`) | **22 findings**: 15 WRONG-NODE, 5 UNSOURCED, 1 INTERNAL-NUMBERS, 1 unflagged book self-contradiction. 18 clean. |
| spot-check outside ch8 | 7 | read directly | `1-6`, `3-2`, `3-4`, `4-1`, `7-2-1`, `7-4-1-2`, `7-8-2` — **all clean**. These were the lowest word-overlap scores outside chapter 8, i.e. the automated pass's best remaining suspects, and every one of them is a false positive. |
| all 270 nodes | — | word-overlap scan | 15 of the 17 worst scores are in ch8; chapters 5, 6, 9, 10 have none below 40%. Script: `../../scratchpad` (not kept). |
| all 270 nodes | — | numeric scan | 6 nodes whose `mustKnow` carries a number the rest of the node does not: `4-1-5`, `5-2-2-2`, `7-8-1`, `7-8-5` (all the harmless "0.5" of a written "half"), `8-1` (the 400+), `8-3-7` (the 30+). |
| ch1_3 | 25 | agent (`ch1_3.md`) | 7 findings, 19 clean. No WRONG-NODE. One high: `3-2`'s `trace` gives the third role of a metal ion as an electron relay where the node's points, glossary and answer key all say *stabilising the spatial structure*. gapPoints leaks unmarked into `terms`/`quiz`/`oral` in `3-3-1` and `3-5`. |
| ch6 | 19 | agent (`ch6.md`) | 12 findings, 7 clean. No WRONG-NODE. `6-2-3`'s `mustKnow` and quiz stem state flat what the node twice records the book never says. `6-2-2-3`'s `lehNotes.cn` was 927 characters of mojibake — the 38-vs-30 ATP warning reached no Chinese reader at all. |
| ch7a | 21 | agent (`ch7a.md`) | 12 findings, 7 clean. No WRONG-NODE; the failure here is over-generalisation — a rule true of the headline example asserted for the whole class (`7-1-3-1`, `7-4`, `7-4-1-1`, `7-4-2`). |
| ch7b | 21 | agent (`ch7b.md`) | 20 findings, 4 clean. Three high, all in `mustKnow`: `7-6-3` named transketolase where the node's enzyme is transaldolase moving a *three*-carbon residue; `7-11-1-2` said digestion stops "not at glucose" where the node's own next point has maltase producing glucose; `7-12-2` collapsed the two-tier cascade into one kinase — which is literally its own MCQ distractor. |
| ch9 | 27 | agent (`ch9.md`) | 9 findings, 20 clean. No WRONG-NODE. `9-18`'s oral model closed by converting the node's *step* counts into *molecule* counts: "two ATP per turn, one NADPH", where one carboxylation gives two 3-phosphoglycerates, so it is 3 ATP + 2 NADPH per CO2. |
| ch10 | 26 | agent (`ch10.md`) | 8 findings, 13 clean. No WRONG-NODE. `10-21` gave cortisol "sustained stress" where the node records that only adrenalin's "short-term" is the table's own word. |
| ch4_5 | 28 | agent () | 12 findings, 16 clean. No WRONG-NODE. One high, and new:   says the trp leader is never translated into peptide *and generalises it*, while , the  and  all require a ribosome translating that leader peptide — which IS the attenuation mechanism. Also: the Chinese renders **nucleosidase** with the characters for **nucleotidase**, the same word the previous point uses for a different enzyme; and English *committed step* is translated 限速 (rate-limiting) in four places. |

## What the two automated passes cannot see

`5-2-1-1` is the proof. Its `mustKnow` says only oxidative deamination releases free ammonia,
while its own `points[0]` (histidine → urocanic acid **+ NH4⁺**) and `points[1]` (serine
dehydration) both release it. That node scores **fine** on word overlap — the vocabulary
matches perfectly, because the claim is on-topic and simply wrong. Only a reader finds this
class, and it is the class most likely to be believed, since it sounds like the node's own
headline.

## Fixed so far

Chapter 8: 23 `mustKnow` rewritten, 2 book errors flagged against the scans (see
`HANDOFF_biochemie_pro_fix_20260814.md`). Then, from this round and each verified by reading
the node before touching it:

| node | was | now |
|---|---|---|
| `3-2` `trace` | metal ion's third role = "当电子的中转站" | stabilising the spatial structure, as its own points say |
| `6-2-2-3` `lehNotes.cn` | 927 chars of mojibake | recovered losslessly (UTF-8 read as Latin-1) |
| `7-6-3` | "Transketolase moves two-carbon fragments" | transaldolase, three-carbon dihydroxyacetone residue, no coenzyme |
| `7-11-1-2` | "Digestion stops at maltose…, not at glucose" | the AMYLASES stop there; maltase finishes to glucose |
| `7-12-2` | one protein kinase switches synthase off and phosphorylase on | the two-tier cascade: protein kinase → phosphorylase KINASE → phosphorylase |
| `9-18` oral | "Two ATP per turn, one NADPH" | two ATP *steps*, but 3 ATP + 2 NADPH per CO2 fixed |
| `10-21` | cortisol "for sustained stress" | its row says only "stress" |

**The validator caught a bug of my own while doing this**, and it is the reason the tool exists:
the `10-21` repair put a double quote inside a double-quoted JS string, which silently dropped
all 26 nodes of chapter 10 from the app — topics fell 253 → 227 and the only visible symptom was
a bank key "pointing at an unknown node". Re-run `tools/check-in-browser.html` after every data
edit, not just after a batch of them.

## Not done

Chapters 1–7, 9, 10 (167 nodes) and the Lehninger layer (60 nodes) have had no reading pass.
Nine agents were dispatched for the Czech chapters on 2026-08-13 and all nine died immediately
on an account session limit, having read nothing. Re-dispatch them; the prompts are one per
chapter range, and `AUDIT_SPEC.md` is the whole brief.

Separately and unchanged: **chapters 7 and 8 have never been verified against the page images**
by a second reader (HANDOFF §0). This audit does not touch that. `extracted_full_ch7/` and
`extracted_full_ch8/` still hold every page.
