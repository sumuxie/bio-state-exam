# `bank` question spec — the second question layer of `biochemie_pro`

Read this before writing a single question. It is the whole contract; a file that
violates it is worse than no file, because a wrong question teaches a wrong fact and
nothing downstream re-checks it.

## What `bank` is, and what it is not

`biochemie_pro/app.js` draws quiz questions from three sources, cycled by one button:

```
core   — the `quiz` array inside each topic node. Written when the node was
         calibrated against the actual book page images. ~800 items.
bank   — THIS layer. Extra questions attached to an existing node by its id.
terms  — generated at run time from the glossary. Not written by hand.
```

`bank` exists so the question count can grow **without touching the calibrated
`data/ch*.js` files**. Those files were verified page by page against the scans;
re-opening them to append questions risks a bad merge into verified content for no
benefit. A bank file is additive, self-contained, and can be deleted without leaving
a mark on anything that was verified.

**A bank question may only restate what its node already says.** The node's
`points`, `summary`, `mustKnow`, `terms` and `coverageNote` are the entire universe of
facts you may use. You may recombine them, compare two points of the same node,
invert a statement to make a distractor — but you may not add a fact from your own
knowledge of biochemistry, however certain you are of it, because nobody will check it
against the book and it will read as though someone did. If a question you want to ask
needs a fact the node does not contain, do not ask it. Write one fewer question.

This is not a style preference. It is the rule that lets the app tell the reader where
every claim came from.

## The file

One file per assigned range, at `biochemie_pro/data/bank_<range>.js`. Never edit an
existing `ch*.js` or another agent's bank file.

```js
/* Bank questions for <range> — the second question layer, see BANK_SPEC.md.
   Every item below is derived from the content already in <source file>; no fact
   here comes from outside that node. Written <date>. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  '7-8-1': [
    { type: 'mcq', ... },
    { type: 'mcq', ... },
    { type: 'short', ... }
  ],

  '7-8-2': [ ... ]

});
```

The key is the node's `id`, copied exactly. A key that matches no node is a silent
failure — the questions load, attach to nothing, and never appear. `app.js` counts
orphan keys and says so in the Quiz tab, so a typo is visible rather than invisible,
but it is still your job not to make one: copy ids out of the data file, never retype
them from memory.

## The item schema

Identical to the `quiz` schema (HANDOFF.md §2) plus two new optional fields that this
layer is expected to use, not skip.

```js
{ type: 'mcq',
  q_en: 'Question in English — the primary language.',
  q_cn: '同一个问题的中文，自然表达，不是硬译。',
  options: ['…', '…', '…', '…'],          // 3–4, exactly one defensibly correct
  answer: 2,                               // 0-based index into options
  optionRefs:  { 0: '7-7-1', 3: '7-9' },   // wrong option index -> the node id that option actually belongs to
  optionNotes: {                           // wrong option index -> what the misconception is
    1: { en: '…', cn: '…' }
  },
  why_en: 'Why the right answer is right. Explain the mechanism, do not restate the option.',
  why_cn: '同样的解释，中文。' }

{ type: 'short',
  q_en: '…', q_cn: '…',
  accept: ['keyword', 'keyword', 'keyword'],   // graded by substring match, half of them = pass
  answer_en: 'A model answer in flowing prose.', answer_cn: '中文范答。' }
```

### `optionRefs` and `optionNotes` — the point of this layer

The app renders a panel under the feedback called **"About the other options ·
其他选项讲的是什么"**, and it is the reason bank questions are worth writing at all.
A distractor that is pure filler teaches nothing. A distractor that names a real
concept from somewhere else in the course turns a wrong answer into a second lesson.

For **every wrong option**, supply at least one of:

- `optionRefs[i]` — the id of the node this option actually describes. Renders as a
  button that takes the reader straight there. Use it whenever the option names
  something the course genuinely teaches elsewhere; check the id exists.
- `optionNotes[i]` — bilingual prose naming the confusion: which two things were
  swapped, which direction was reversed, which condition was dropped. Two sentences at
  most. Say what is true, not only that the option is false.

Both together is the strongest form: the note names the confusion, the ref sends the
reader to the section that fixes it.

An option that corresponds to nothing at all — a number that is simply wrong, a name
invented for the question — gets neither, and the app prints "nothing in the course
corresponds to this one." That is an honest answer, and it is also a signal that the
distractor is weak. **Aim for at most one such filler option per question.** If you
find yourself writing three, the question is testing recall of a single number and
should probably be rewritten to test a distinction instead.

Good distractors, in rough order of teaching value:

1. **The neighbouring concept** — the enzyme one step along the pathway, the other
   member of the pair (NAD⁺ vs NADP⁺, C-3 vs C-4, oxidase vs oxygenase). `optionRefs`
   to where it lives, `optionNotes` for what separates them.
2. **The reversed direction** — a regulatory effect stated backwards, a transport
   direction flipped, product and substrate swapped. `optionNotes` naming the swap.
3. **The dropped condition** — a statement true only under a condition the option
   omits (only in liver, only when NADPH is available, only in the fed state).
4. **The plausible number** — the value from the adjacent table row. Weakest; use
   sparingly and only with a note saying what that number really measures.

## Language

Per HANDOFF.md §2, and it is not negotiable:

- `en` is primary and carries the full explanation, exam-ready prose.
- `cn` carries the same substance, written naturally for a native reader — not a
  word-for-word gloss of the English. Technical terms stay in English inside the
  Chinese (酶 names, pathway names, ATP, NADH) where that is how they are actually
  read and said.
- No Czech in bank questions. The Czech term may appear as an anchor inside an option
  if that is what the node's own `cz` field calls the thing, nothing more.

## How many, and of what kind

- **Three items per node** by default: two `mcq` and one `short`. A node with a long
  `points` array can take four; a thin node (three points, no numbers) takes two, and
  two good questions beat three where the third is padding.
- Do not duplicate a `core` question. Read the node's existing `quiz` array first and
  go somewhere it does not go: if core asks what an enzyme does, ask what happens when
  it is missing, or which of two similar enzymes acts here, or why the cell pays ATP
  for this step.
- Prefer questions that make a **distinction** (this vs that, which one, in which
  direction, under what condition) over questions that ask for a single retrieved
  fact. The exam is oral; the distinctions are what it probes.
- `short` items: 3–5 `accept` keywords, chosen so that a candidate who understands the
  answer will naturally use half of them. Do not include a keyword so generic
  ("energy", "cell") that a wrong answer would contain it.

## Before you report back

Check all of this yourself; the orchestrator will re-check it and hand back anything
that fails.

1. The file parses as JavaScript. Balanced braces and brackets, quotes escaped,
   apostrophes inside single-quoted strings escaped or the string switched to double
   quotes. UTF-8, no BOM.
2. Every key matches a real node id in the source file, character for character.
3. Every `answer` is a valid index into that item's own `options`.
4. Every wrong option index appears in `optionRefs` or `optionNotes`, or is a
   deliberate filler you can name as such.
5. Every `optionRefs` value is a node id that exists somewhere in `biochemie_pro/data/`
   (it does not have to be in your own range — cross-chapter refs are good).
6. Both languages present on every field that takes a pair.
7. No fact that is not in the node you attached it to.

Report: which node ids you covered, how many items, any node you gave fewer than three
(and why), and anything in a node that you found internally inconsistent — the last one
matters more than the count, because it points at content that needs re-verifying
against the book.
