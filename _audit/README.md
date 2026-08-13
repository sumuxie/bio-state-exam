# Content audit — status

Started 2026-08-13. Read-only: nothing in `biochemie_pro/data/` has been changed by this audit.
Rules and finding classes: `../AUDIT_SPEC.md`.

## Why

Three defects of one family surfaced by accident while writing bank questions, all of them in
`mustKnow` — the field that is always visible and read first. The question the audit answers is
not "is the biochemistry right" (that needs the book) but "**can this node be true against
itself**".

## Done

| range | nodes | how | result |
|---|---|---|---|
| ch8 | 40 | read directly (`ch8.md`) | **22 findings**: 15 WRONG-NODE, 5 UNSOURCED, 1 INTERNAL-NUMBERS, 1 unflagged book self-contradiction. 18 clean. |
| spot-check outside ch8 | 7 | read directly | `1-6`, `3-2`, `3-4`, `4-1`, `7-2-1`, `7-4-1-2`, `7-8-2` — **all clean**. These were the lowest word-overlap scores outside chapter 8, i.e. the automated pass's best remaining suspects, and every one of them is a false positive. |
| all 270 nodes | — | word-overlap scan | 15 of the 17 worst scores are in ch8; chapters 5, 6, 9, 10 have none below 40%. Script: `../../scratchpad` (not kept). |
| all 270 nodes | — | numeric scan | 6 nodes whose `mustKnow` carries a number the rest of the node does not: `4-1-5`, `5-2-2-2`, `7-8-1`, `7-8-5` (all the harmless "0.5" of a written "half"), `8-1` (the 400+), `8-3-7` (the 30+). |

## What the two automated passes cannot see

`5-2-1-1` is the proof. Its `mustKnow` says only oxidative deamination releases free ammonia,
while its own `points[0]` (histidine → urocanic acid **+ NH4⁺**) and `points[1]` (serine
dehydration) both release it. That node scores **fine** on word overlap — the vocabulary
matches perfectly, because the claim is on-topic and simply wrong. Only a reader finds this
class, and it is the class most likely to be believed, since it sounds like the node's own
headline.

## Not done

Chapters 1–7, 9, 10 (167 nodes) and the Lehninger layer (60 nodes) have had no reading pass.
Nine agents were dispatched for the Czech chapters on 2026-08-13 and all nine died immediately
on an account session limit, having read nothing. Re-dispatch them; the prompts are one per
chapter range, and `AUDIT_SPEC.md` is the whole brief.

Separately and unchanged: **chapters 7 and 8 have never been verified against the page images**
by a second reader (HANDOFF §0). This audit does not touch that. `extracted_full_ch7/` and
`extracted_full_ch8/` still hold every page.
