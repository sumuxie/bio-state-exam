# EXAMBANK — scope

**Decided 2026-08-22 with Ruojin, after the previous session's scope was found reversed.**

## What this app is

A question bank covering **all** of the supervisor's three question sheets, organised by his
own three headings (Basic Lab Techniques / Microbiology / Biochemistry), with the content
**imported from** the existing corpora:

- `biochemie` — the bio-state-exam repo (`biochemie_pro`, `biochemie_basic`,
  `biochemie_struct`, 68 `leh_*.js`, `exam30`), 11.9 MB
- `PESB` — `pesbexplain/` + `pesbpro/` in this repo, 2.2 MB
- `molecular biology` — the applied-molecular-biology strand, largely unwritten

Plus `labhandbook/`, which is the format template rather than a source (see below).

## What it is NOT

**It is not a supplement of only the uncovered topics.** The previous session read the scope
that way and built `molbio/` around a four-tier "nothing in 13 MB is titled after these, write
these first / do not spend time on the rest" frame. That is a patch, not a bank. `molbio/` has
an empty `data/`, so nothing was lost — but its HANDOFF's tier table must not be used as the
scope. Its *verification findings* are still good and are kept as an appendix.

## Why full coverage does not break the no-new-facts rule

`BANK_DESIGN.md` and `bio-state-exam/BANK_SPEC.md` forbid adding a fact from the model's own
knowledge to an already-covered topic, because nobody will re-check it against the book.
Importing from a biochemie or PESB node does not violate that: those facts were already
verified there. So every imported entry carries `sourceNode`, and the source node's
`points` / `summary` / `mustKnow` / `terms` remain the permitted fact set.

The rule only bites where there is no source node — the GAP topics — and there the fact has to
be written fresh and marked as such.

## The 84 topics, and where each one's content comes from

From `GAP_REPORT.md` (98 sheet questions deduped to 84 coverage verdicts):

| verdict | n | content source | new facts allowed |
|---|---|---|---|
| COVERED | 63 | import from biochemie / PESB / labhandbook nodes | no — `sourceNode` required |
| PARTIAL | 12 | import what exists, write the rest | only the named shortfall |
| THIN | 5 | mostly new | yes |
| GAP | 4 | all new, nothing to import | yes |

Only the GAP row is a hard finding. THIN/PARTIAL/COVERED boundaries sit on a continuous slope
(`GAP_REPORT.md` §方法的边界), so an import that turns out thin gets promoted, not argued over.

## The two hard measurements that still hold

Both are reproducible and neither is affected by the scope correction:

1. **Biochemistry has zero "how do you" (DO) questions; Lab has 10 and Micro 7.**
   So Biochem entries are recall/explain shaped, Lab and Micro entries need a procedure.
2. **All 11 cross-sheet repeats include Sheet 1.** Sheet 1 has 19 questions to the others 30 and 60, yet takes every repeat, and is the only sheet with a practical task. Weight: Sheet 1 x3, Sheet 2 x2, Sheet 3 x1.
