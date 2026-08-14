# Core-question repair — rewriting distractors so the bank stops giving itself away

Read this before touching a `quiz` array. It is the whole contract.

## What is wrong

Measured over the Czech chapters on 2026-08-14, with a real string scanner rather than a
regex:

- **387 multiple-choice questions. In 301 of them (78%) the correct answer is the longest
  option.** Chance would be 25%. A reader who always picks the longest option scores about
  79% without knowing any biochemistry.
- The mean answer runs 121 characters against 63 for its distractors — the true statement
  is nearly twice the length of the false ones.
- **Not one of the 387 carries `optionRefs` or `optionNotes`.** Answer one wrong and the app
  says, correctly, that none of the wrong options corresponds to anything in the course.

The cause is a drafting habit, not ignorance: the answer gets written first, in full, with
the qualifying clause that makes it true — and then three short false things are appended
after it. The reader learns to spot the careful sentence.

Option ORDER is already fixed. `app.js` permutes options at run time and remaps `answer`,
`optionRefs` and `optionNotes` with them, so the old position bias (answer in slot B two
thirds of the time) is gone. **Length is what remains, and only rewriting can fix it.**

## What you change, and what you must not

You are editing `quiz` arrays inside files that were calibrated page by page against the
book's scans. The `quiz` block is authored content, not transcription — but it lives in the
same file as the transcription, so the blast radius of a mistake is a whole chapter.

**Change only these:**

- the TEXT of wrong options, and
- `optionRefs` / `optionNotes`, which you add.

**Do not change, for any reason:**

- `q_en`, `q_cn` — the question itself,
- the text of the correct option,
- `answer` — the index (the app shuffles anyway; changing it here only creates a chance to
  get it wrong),
- `why_en`, `why_cn`, `type`, `accept`, `answer_en`, `answer_cn`,
- anything outside `quiz`: `points`, `summary`, `mustKnow`, `terms`, `coverageNote`, `oral`.

A diff of your work should touch nothing but distractor strings and new annotation objects.
That is what makes it reviewable at this scale.

## The rewrite itself

A good distractor is the same length, the same register and the same grammatical shape as
the answer, and it is wrong for a reason a reader can name afterwards.

- **Match the answer's length to within about 15%.** If the answer carries a qualifying
  clause ("…, but only when oxygen is limited"), the distractors need one too — a wrong
  condition, a wrong tissue, a wrong direction. Do not pad with filler words; find a real
  qualification that happens to be false.
- **Never lengthen the answer to hide the tell.** The answer is verified content; leave it
  alone and bring the distractors up to it.
- **Do not make the answer the SHORTEST option either.** That is the same tell inverted, and
  an agent on this project produced exactly that when it over-corrected. Aim for a spread
  where the answer's length is unremarkable.
- Keep the book's own terms. If the node calls the enzyme `thiokinasa`, the distractor may
  not silently switch to the standard name.

## The annotations, which are the point

Every wrong option gets `optionNotes` (bilingual prose naming the misconception) and/or
`optionRefs` (the node id where that concept actually lives, rendered as a jump button).

```js
{ type: "mcq",
  q_en: "…", q_cn: "…",
  options: ["…", "…", "…", "…"],
  answer: 2,
  optionRefs:  { 0: "7-7-1", 3: "7-9" },
  optionNotes: { 1: { en: "…", cn: "…" } },
  why_en: "…", why_cn: "…" }
```

Distractors in rough order of teaching value: the neighbouring concept (the enzyme one step
along, the other member of the pair) with a ref to where it lives; the reversed direction;
the dropped condition; and last and weakest, the plausible number from the adjacent table
row. **Every fact you put in a distractor or a note must already exist in this node or in
the node you point at.** Nobody re-checks these against the book.

Language rules are HANDOFF.md §2: `en` carries the full explanation, `cn` says the same
substance naturally for a native reader, technical terms stay in English.

## Working safely in a live data file

1. **One agent per file.** If your range names three files, you own all three; nobody else
   is in them.
2. **Never put a double quote inside a double-quoted value.** This exact mistake silently
   dropped all 26 nodes of chapter 10 from the app on 2026-08-14, and the only symptom was
   an unrelated-looking error elsewhere.
3. **After every batch of edits, re-parse the whole file** with a string-aware scan — not a
   regex — and confirm the node count is unchanged. If the count moved, you broke something.
4. Work in batches and leave the file valid between them. Two batches of agents on this
   project were killed mid-write by an account limit; only those whose file was already
   valid kept their work.

## Report back

Per file: how many mcq you rewrote, the before/after longest-option rate (compute it, do not
estimate), how many wrong options now carry a ref, a note, or both, and the node count before
and after. Also report any question you found to be **wrong** rather than merely badly
built — a bad answer key matters more than a bad distractor, and it is the one thing here
you must not fix silently.
