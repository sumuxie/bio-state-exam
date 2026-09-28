# How to write a spine · 速通简洁版

One chain per node. Each step is **one claim**, in order, readable straight through.
The full app keeps the detail; this app is the thread.

Before you write anything, understand what this is fixing. Measured over the corpus:

- a node carries five or more layers restating the same material — 必背 411 characters
  median, 概要 1,479, 逐条要点 1,955, plus terms and an oral answer — and **not one of
  them is short**, so there is no way in;
- **one body sentence in five** is about the textbook rather than about biochemistry;
- **409 glossary terms are used before the node that defines them**, a median of 30
  nodes early, one of them 249 nodes early.

Every complaint the reader has made is the same defect in a different coat: *a concept
used before it is established.* "很模糊", "突然冒出来一个前面也没讲过的概念",
"the model 指的是什么模型", "配上对是和谁配", "为啥突然开始说内含子". Five reports, one bug.

---

## The seven rules

**1. State the thing.** No "not X, but Y", no rhetorical inversion.
- ✗ 双螺旋不是谁宣布的，是四组实验逼出来的
- ✓ 双螺旋是从四组实验推出来的

**2. No unbound "the".** Never a definite reference to something not yet named.
- ✗ The x-ray pattern had two spacings, and **the model** had to produce both.
  （"这里指的模型是什么模型？"）
- ✓ Franklin and Wilkins' x-ray pattern had two spacings: 3.4 Å and 34 Å.

**3. Name the actual objects.** S bacteria, a capsule, sulfur-35, a kitchen blender.
An experiment described in the abstract is neither memorable nor examinable.

**4. No commentary about the textbook.** Nothing about what the Czech node says, what
this section supplies, or what an examiner might ask. That is the other app's job.

**5. Introduce every noun you use.** A step that names a thing for the first time says
what it is in the same breath. Do not assume the reader met it in another node.
- ✗ 要记住三个：I/II 型内含子自己剪自己…
- ✓ 先说清转录本比需要的长、被剪掉的那段叫内含子，再说有些内含子会自己剪自己

**6. State the scope.** If a claim is about part of a thing, say which part — and say
it concretely. "配上对的那些片段" states a scope without stating it.
- ✓ 一条 RNA 只有两种情况会变成双链：折回来和自己配（发夹），或者和 DNA 模板配（杂合链）

**7. Reach back.** When a step is the parallel, the same class, or the opposite of
something earlier in this spine, say so and point at it with `recall_en` / `recall_cn`.
A claim attached to one you already hold costs almost nothing to learn.

**And say what it is for.** A step that states a structure and stops leaves the reader
holding something with no idea why. 「这些东西一般有啥用？」 Every structural claim gets
its consequence: a triplex sits in a gene's regulatory region; a hairpin is the signal
that stops transcription; a G-tetraplex is how a telomere caps itself.

---

## The shape of a step

```js
{
  link_en: "so if not hydrogen bonds, then what?",   // optional connector, see below
  link_cn: "那如果不是氢键，是什么？",
  recall_en: "the opposite of the DNA case two steps up",   // optional, rule 7
  recall_cn: "和上面 DNA 那步正好相反",
  en: "One claim. **Bold the part that must survive.**",
  cn: "一个结论。**必须记住的部分加粗。**",
  src: "A p.271",                       // required: where it was read
  beyond: true,                          // optional, see below
  beyondNote: "why this is not on the cited pages",
  openQuestion_en: "…is a separate question, and not a settled one.",
  see: [{ id: "L-26-2-1", en: "splicing in full", cn: "剪接的完整机制" }]
}
```

**`link_*` — the connector between steps.** Write one only where a step genuinely
forces the next. Where the relation is merely "and another thing", leave it out: a
connective invented to make a list look like an argument tells the reader a causal
claim that is not there. In the ch8 spine, 13 of 15 steps have one and two do not.

**`beyond: true`** marks detail that is standard and commonly examined but is **not on
the pages the node cites**. Griffith's S/R strains are the case: §8.2 opens at Avery.
Flag it; never pass it off as read off the page.

**`openQuestion_*`** for a question the subject has not settled — "why introns exist at
all". Say so. Inventing an answer is the worst thing this app can do.

**`see`** points at the nodes that actually develop the subject. Choose them by
searching the corpus and ranking by how much each node says, not by guessing: a
cross-reference to a node that mentions the word once is worse than none.

**`assumed`** on the spine declares what the reader is taken to have already — the
linter honours it. Declare it rather than leaving it implicit.

---

## Workflow

```bash
python tools/dump-topics.py biochemie_pro     # refresh the source data
# write biochemie_lite/data/spine_chN.js
python tools/check-spine.py L-8-2-1           # MUST be clean before you show it
python tools/build-lite-index.py              # if the node list changed
python tools/build-lite-questions.py          # pull in that node's questions
```

`tools/check-spine.py` flags cold starts, circular definitions, rules 1/2/4/6, `**`
parity, missing `src`, and `see` targets that do not exist. **Run it — do not
re-read.** It found `phage`, used three times in one sentence and never called a
virus, and `stacking`, defined as "the stacked bases hold each other by stacking",
in a spine that had been read four times.

## Length

Ten to fifteen steps. The ch8 spine has 15, ranging 83–344 characters per step,
against a mean of 1,452 for a point in the full app.
