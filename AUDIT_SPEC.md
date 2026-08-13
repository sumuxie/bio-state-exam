# Internal-consistency audit — what to look for, and what not to report

A read-only pass over the topic nodes. **You change nothing.** No data file is edited, no
text is improved, no typo is fixed. The output is a findings file and nothing else.

## Why this exists

Three defects of the same family were found by accident while writing quiz questions, and
each one had been sitting in the app unnoticed:

- `8-5` (Biological membranes, introduction) carries a `mustKnow` about bile acids, the
  gallbladder and enterohepatic recycling — another node's content entirely.
- `8-3-4` (the 8-acetyl-CoA → palmitate balance) carries "Step IV dehydration creates a double
  bond", and `8-3-5` (phosphatidic acid) carries "Step V reduces the double bond": the step
  sequence belonging to `8-3-3` has slid across its neighbours.
- `5-2-1-1` states in `mustKnow` that "only one [route] actually releases free ammonia", while
  its own `points[0]` has histidine's simple deamination giving urocanic acid **+ NH4⁺** and
  `points[1]` has serine dehydration giving **+ NH4⁺**.

The first two are detectable by a word-overlap scan; the third is not, because it is on-topic
and only wrong against the node's own content. A scan over all 270 nodes put 15 of the 17
worst overlap scores in chapter 8 and gave chapter 5 a clean bill — so **the automated pass is
already done and it does not find this class**. That is why a reader is being asked.

`mustKnow` is always visible in the UI and is the first thing read, so a wrong one is the most
expensive wrong text in the app.

## The scope you are given

A range of nodes in one or more `biochemie_pro/data/*.js` files. For each node, read the whole
node — `mustKnow`, `summary`, `points`, `terms`, `trace`, `quiz`, `oral`, `coverageNote`,
`gapPoints`, `lehNotes` — and check it against **itself**. You are not checking it against the
textbook: the page images are not in your scope and most chapters' scans are not the point
here. You are looking for places where the node **cannot be internally true**.

## The seven finding classes

1. **WRONG-NODE** — a field describes content that belongs to a different node (usually
   `mustKnow`, occasionally `trace`). Name the node you think it belongs to if you can.
2. **CONTRADICTS-NODE** — a field asserts something this node's own `points`/`summary` deny.
   Quote both sides. This is the class the automated scan is blind to; look hardest here.
3. **UNSOURCED** — a field asserts a fact that appears **nowhere else in the node**: not in
   `points`, `summary`, `terms` or `coverageNote`. It may well be true biochemistry — that is
   not the test. The test is whether this node supports it. Flag mechanism, numbers, named
   diseases, named proteins and clinical hooks that arrive only in `mustKnow` or only in a
   quiz explanation.
4. **INTERNAL-NUMBERS** — arithmetic or stoichiometry that does not close within the node
   (e.g. `8-3-8` gives GPP + IPP as producing both the C15 FPP and the C20 GGPP).
5. **QUIZ-BEYOND-NODE** — a `quiz` or `oral` item that rests on a fact the node does not
   contain, or that the node explicitly flags as outside the book. A real example: `6-2-3`
   carries an honesty note saying the book never states animals lack the glyoxylate cycle,
   and the node's own core quiz then asks the candidate to explain why animals cannot do it.
6. **NON-BOOK-IN-POINTS** — material that is not from the book sitting in `points` instead of
   `gapPoints` or a note (e.g. a point in `6-2-4-5` marked "(mimo text knihy)" introducing the
   P/O-ratio framing).
7. **LANGUAGE** — an `en`/`cn` pair whose two halves say different things, or English words
   stranded mid-sentence inside Chinese prose (`为什么教材specifically指出…`). A shorter or
   more natural Chinese rendering is NOT a finding; a different claim is.

## What is NOT a finding — read this before you start

The false-positive rate is what decides whether this audit is usable, so be conservative:

- **The book contradicting itself, where the node already says so.** Every chapter has these
  (prose vs figure, a typo, a name the book uses inconsistently) and they are deliberately
  preserved with a note. List them in a separate "already flagged" section, briefly, so the
  count is visible — do not raise them as new.
- **A paraphrase.** `mustKnow` compressing four points into one sentence, in different words,
  is the field working as designed. Different vocabulary is not a contradiction.
- **Something that is merely simplified.** `mustKnow` is allowed to be a simplification. It is
  not allowed to be false against the node.
- **Your own biochemical knowledge disagreeing with the node.** That is a book question, not
  an internal-consistency question. If you are confident and it matters, put it at the end
  under "needs the book", clearly separated, and say what you would check.
- **Style, tone, length, or how the Chinese reads.**

## Output

Write to `C:\Users\Admin\Downloads\bio-state-exam\_audit\<range>.md`, where `<range>` is the
name you were given (e.g. `ch4_5`). Create the `_audit` folder if it does not exist.

```markdown
# Audit — <range>
Nodes read: <n> (<list the ids, comma separated>)
Findings: <n>  (WRONG-NODE x, CONTRADICTS-NODE y, …)

## Findings

### <node-id> — CLASS — severity: high | medium | low
**The field says:** "<verbatim quote>"
**The node says:** "<verbatim quote from points/summary, with which point index>"
**Why these cannot both hold:** <one or two sentences>
**Resolvable from the node alone?** yes / no — needs page <n> of the book

## Already flagged by the node itself
<one line each: node id — what it flags. No detail needed.>

## Needs the book (not internal-consistency findings)
<only if you have them>
```

Severity: **high** = a reader would learn something false, or would answer an exam question
wrongly because of it. **medium** = misleading but a careful reader would catch it. **low** =
cosmetic or ambiguous.

Report every node you read even if it is clean — the count of clean nodes is as much a result
as the findings, and an audit that only lists problems cannot be distinguished from one that
stopped early.
