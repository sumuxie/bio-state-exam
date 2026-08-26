# HANDOFF — lecture video pipeline, 2026-08-15

Built across two sessions. **All 12 lectures are complete end to end.** This file
is what a new session needs in order to extend or rebuild the material without
repeating the measurements.

---

## What exists

12 recordings, ordered by the `creation_time` inside each mp4 — **not** by
filesystem date, which is identical for all of them (they were copied to the disk
in one afternoon, so the filesystem order is meaningless and would scramble the
course sequence).

| # | date | topic | length |
|---|---|---|---|
| 1 | 06-27 | 氨基酸 · 蛋白质结构 · 肌红蛋白与血红蛋白 | 156 min |
| 2 | 07-04 | 酶通论 · 米氏方程（上） | 104 min |
| 3 | 07-04 | 酶通论 · 米氏方程（下） | 40 min |
| 4 | 07-08 | 米氏方程与抑制剂的推论 | 110 min |
| 5 | 07-13 | 酶各论 · 脂溶性维生素 | 133 min |
| 6 | 07-16 | 维生素 · 核酸结构 | 144 min |
| 7 | 07-28 | 核酸 · 代谢序章 | 137 min |
| 8 | 08-04 | 糖酵解途径 | 120 min |
| 9 | 08-08 | TCA 循环与电子传递链（上） | 112 min |
| 10 | 08-08 | TCA 循环与电子传递链（下） | — |
| 11 | 08-15 | 脂质的分解与合成 · 氨基酸代谢开头 | 136 min |
| 12 | 08-17 | 尿素循环 · 核苷酸的代谢 · 光合作用 | 127 min |

Lecture 1 sits in `~/Documents/VooVMeeting/2026-06-27 14.10.06.350/`; the rest in
`~/Downloads/生物化学课 视频/`.

---

## Measured decisions — do not re-derive

Every number below was measured on this audio. Three plausible-sounding
approaches were tried and rejected; the code looks arbitrary without them.

**Transcription: faster-whisper large-v3, batched pipeline, `batch_size=8`,
float16, `vad_filter=True`, `word_timestamps=True`, `language="zh"`.**

- Sequential (non-batched) decoding ran at **1× realtime** — 2.5 h per lecture.
  Batched runs at **13–20×**, about 10 min per lecture.
- `batch_size=16` is **3× slower** than 8, not faster. The 8 GB laptop 4060 starts
  swapping. Do not raise it on this hardware.
- A `hotwords` term list costs **6×** (2× realtime instead of 13×) because it is
  prepended to every 30 s window. Term errors are cheaper to fix afterwards.
- The `.wemta` file VooV writes beside `double_click_to_convert_*.wemtv` is a
  plain AAC track that PyAV opens directly — same audio, a fifth of the size, and
  it skips VooV's manual mp4 conversion. Outputs are still named after the mp4 so
  players find them.

**The transcript has no punctuation at all**, and Whisper's Chinese "words"
average **1.26 characters** — effectively one per character. This drives the cue
splitter, and two natural fixes fail:

- *Restoring punctuation with an `initial_prompt`* was tried
  (`以下是普通话的课堂讲授内容，请使用标点符号。`). It produced punctuation and ran
  faster, but transcribed **720 characters where the unprompted run produced
  2800** for the same 10 minutes, and opened with the
  `请不吝点赞订阅转发` hallucination. The prompt pulls the model toward
  subtitle-site training text. Rejected.
- *Splitting on pauses* sounds principled — nobody pauses inside a word — but
  **97% of the inter-word gaps are exactly 0.000 s**. Only 941 of 31 389 gaps
  exceed 0.02 s, one every ~33 characters, far too sparse for 15-character lines.
  Rejected.
- What works: **jieba word boundaries** as the candidate break points, scored by
  whatever real pause exists there, target 15 chars, hard max 26. Result is
  ~15.0 chars per line with **0 forced cuts**. `TERMS` in `stages.py` is a user
  dictionary because jieba knows 丙氨酸 and 肌红蛋白 but splits 侧链 and 疏水腔.

Punctuation in the `.txt` reading transcript is **inferred from pause length**
(≥0.25 s comma, ≥0.60 s period) and the file says so in its header. The `.srt`
keeps the raw unpunctuated text.

---

## Quiz bias — the reason `quizin` exists

The first generated quiz was guessable without reading the biochemistry:

| | before | after | chance |
|---|---|---|---|
| answer is the strictly longest option (zh) | 69/95 = 72.6% | 1/95 = 1.1% | 25% |
| answer is the strictly longest option (en) | 74/95 = 77.9% | 0/95 = 0% | 25% |
| answer length vs mean option | +9.1 chars | +0.0 | 0 |
| answer position A/B/C/D | 32 / 51 / 9 / 3 | 24 / 24 / 24 / 23 | ~24 each |

Two different fixes, because they are two different problems:

- **Length** can only be fixed by rewriting, and the instruction that matters is
  *match specificity, not length* — padding a distractor with filler, or
  truncating the right answer into something vague, both fail. The hard
  constraint given to reviewers: never let a rewrite create a second defensible
  answer. Reviewers rejected several of their own rewrites on that ground (e.g.
  "glycine is achiral so it has no conformational preference" is arguably true,
  so it cannot be a distractor).
- **Position** needs no rewriting at all. `quizin` deals targets from an evenly
  balanced deck shuffled with a fixed seed, then **rotates** each question's
  options so the answer lands on its target. Rotation preserves relative order;
  the seed makes it reproducible; the shuffle stops an A,B,C,D cycle appearing.

Measure *strictly* longest — a tie must not count. `max()` returns the first
maximum on a tie and would score any four-way tie as "the answer is longest"
whenever the answer happens to sit first.

**The trap this creates:** 53 of the 95 original explanations referred to a
distractor by its slot ("Option B", "选项二", "最后一项"). Rotation makes every one
of those point at the wrong option — and nothing errors, nothing looks broken;
the explanation simply describes an option the reader is not looking at.
`stages.py:POSITIONAL` rejects the merge if any survive. Do not remove it.

One reported collision in that check was **not real**: an agent claimed
`\boption\s*[ABCD1-4]\b` matches ordinary prose like "The option describes"
because *describes* starts with d. It does not — the trailing `\b` requires a
word boundary. Verified empirically. Do not "fix" the pattern.

---

## Two race conditions worth knowing

- **Agents revise their own files after appearing finished.** The first merge ran
  when all six topic files existed, but two were rewritten 30–60 s later, so the
  built app contained superseded content and looked entirely normal. Merge on the
  *completion signal*, not on the file existing. Compare mtimes if unsure.
- **Harvesting reviewer edits into a global term table does not work.** Reducing
  line edits to minimal diffs with `difflib` produced misaligned fragments —
  `保留 -> polyA` (保留 is an ordinary word), `or -> O2`, `态键 -> 肽链` (should be
  肽键). Applied globally these corrupt clean text without erroring. The attempt
  is kept as `harvested_terms.REJECTED.json` in the scratchpad. Re-run the
  reviewers on the corrected boundaries instead.

---

## The app

One self-contained HTML per build, written **next to the video** because it loads
the 690 MB mp4 by relative path — it cannot be a hosted page. All cues, topics,
notes and quizzes are inlined; it opens by double-click with no server.

Four independently resizable modules (topics / video / notes / quiz), dark and
light themes, subtitles overlaid on the picture with size control, a search panel
indexing everything (3248 entries for lecture 1) with per-category filters, and
English text-to-speech.

**Primary language.** The header carries a 正文 body EN / 中 switch, and it
defaults to **EN** because the exam is in English. It flips which language leads
in the topic list, the notes and extra cards, the quiz stems, options and
explanations, the search results, the lecture picker and the timeline label —
the other language stays underneath in small grey type. Nothing is hidden and no
data changes: both languages are always in the DOM, the containers are flex
columns, and `[data-primary="en"]` swaps `order` plus the type sizes. The choice
is remembered in localStorage.

**Subtitles are excluded from that switch, because there is no English to show:**
all 22 672 cues across the twelve lectures have an empty `en` field.
`apply_translations.py` exists and the cue schema carries the field, but the pass
has never been run. The subtitle 中 / 双语 / EN control is a separate, older
switch and setting it to EN yields blank lines.

**Speech:** `speechSynthesis`, ranked by voice rather than hard-coded, because
this machine has **no en-GB voice installed** — only en-US Zira/David/Mark, zh-CN,
and a Czech Jakub. Edge supplies Sonia/Libby (en-GB neural, needs a connection);
Chrome supplies Google UK English Female. If neither is present the app shows an
orange warning explaining the three ways to get one. It is browser synthesis, not
recorded audio — worth saying plainly to anyone expecting 真人发音.

**Content shape for lecture 1** (the standard the rest follow): 41 topics tiling
all 156 min with no gaps, 338 key points, 153 extra notes, 95 quiz questions, all
bilingual. Topics average 3.8 min; extra notes average 3.7 per topic.

The `extra` notes are the part the student asked for by name: what the lecture
skipped, stated loosely, or got wrong. Tags in use: 考点延伸 / 课上说法不同 /
课上未展开 / 定量补充 / 易混淆 / 课上口误. Lecture errors caught so far include
oxygen's outer shell given as 7 electrons, CO carbon called sp3 (it is sp),
Hb and Mb called convergent (they are globin paralogs from gene duplication),
2,3-BPG placed in the TCA cycle, histidine's imidazole treated as protonated at
pH 7 (pKa ≈ 6.0), sickle cell explained as lowered O2 affinity rather than
deoxy-HbS polymerisation, and the α-helix H-bond register given as i→i+3.
These go in `extra`, never into `points` — `points` records what was taught.

---

## State at handoff

**All 11 lectures are transcribed and subtitled.** Every video folder already holds
`<name>.srt`, `.txt`, `_review.txt` and, where the proofreading pass has run,
`_corrections.txt`.

| lecture | subtitles | proofread | topics / notes / quiz | in the app |
|---|---|---|---|---|
| 1 氨基酸·蛋白质结构·血红蛋白 | ✅ 2621 | ✅ 590 | ✅ 41 / 338 / 95 | ✅ |
| 2 酶通论·米氏方程（上） | ✅ 1865 | ✅ 430 | ✅ 38 / 288 / 110 | ✅ |
| 3 酶通论·米氏方程（下） | ✅ 708 | ✅ 161 | ✅ 31 / 226 / 77 | ✅ |
| 4 米氏方程与抑制剂 | ✅ 1944 | ✅ 401 | ✅ 41 / 327 / 108 | ✅ |
| 5 酶各论·脂溶性维生素 | ✅ 2251 | ✅ 539 | ✅ 41 / 330 / 106 | ✅ |
| 6 维生素·核酸结构 | ✅ 2456 | ✅ 598 | ✅ 42 / 351 / 118 | ✅ |
| 7 核酸·代谢序章 | ✅ 2374 | ✅ 498 | ✅ 41 / 294 / 116 | ✅ |
| 8 糖酵解途径 | ✅ 1956 | ✅ 510 | ✅ 47 / 404 / 120 | ✅ |
| 9 TCA·电子传递链（上） | ✅ 1856 | ✅ 431 | ✅ 44 / 382 / 116 | ✅ |
| 10 TCA·电子传递链（下） | ✅ 238 | ✅ 60 | ✅ 7 / 61 / 20 | ✅ |
| 11 脂质代谢·氨基酸代谢开头 | ✅ 2362 | ✅ 646 | ✅ 51 / 449 / 135 | ✅ |
| 12 尿素循环·核苷酸代谢·光合作用 | ✅ 2041 | ✅ 739 | ✅ 48 / 427 / 121 | ✅ |

**All 12 lectures are complete.** 6142 corrections applied across the course,
none rejected by the exact-quote verifier. 472 topics tiling 1416 minutes with
no gaps, 3877 key points, 1748 extra notes, 1267 quiz questions, all bilingual.

### The scratch directory is not storage

Ten days after the course was finished, Windows cleared every loose file out of
`%TEMP%\claude\...\scratchpad` — `stages.py`, `lectures.py`, the template,
every `cues.json` and `topics.json`, and the whole of `series/`. Only empty
directories survived. Nothing was lost that mattered, for two reasons worth
keeping true: the scripts had been committed here, and the built app carries all
of its data inlined.

**The fix is committed: `lecture_pipeline/data/`.** Every lecture's `cues.json`
and `topics.json` was recovered out of the built app and now lives in the repo,
~7 MB, one folder per lecture, alongside the `_corrections.txt` audit logs.
`.gitignore` un-ignores that folder on purpose; the rules above it were written
when these files were assumed regenerable, and they are not.

`restore_work.py` copies them back where `stages.py` and `build_app_all.py`
expect them. Running it and then rebuilding produced an app **byte-identical**
to the one built from the extracted blob, which is what makes the recovery
lossless rather than merely plausible.

Two other routes exist. `build_app_from_data.py` re-injects a whole extracted
blob into the current template — that is how the English-primary change shipped,
with no pipeline run at all. And every subtitle file (`.srt`, `.txt`,
`_corrections.txt`) still sits next to its video in `~/Downloads`, which the
temp sweep never touched.

**What is genuinely gone, and why it does not matter much:** `series/*.raw_words.json`,
the word-level Whisper output. Re-transcribing regenerates it in about ten
minutes a lecture — but it comes back as the RAW text, and the 6142 hand-checked
corrections exist only in the restored `cues.json`. So **do not re-run
`stages.py cues` on lectures 1–12**: it rebuilds cues.json from raw_words and
would replace corrected subtitles with uncorrected ones. Also gone are the agent
intermediates (chunks, per-chunk correction JSON, per-part topic files,
teacher_errors), all of which had already been merged into the two files that
survive. The per-cue `prob` field is absent too; only stage 2's `_review.txt`
low-confidence report ever read it.

### Adding a lecture later

Lecture 12 arrived three days after the other eleven were finished. The whole
addition is: append a row to `_ROWS` in `lectures.py`, run `transcribe_all.py`
(it skips what is already done), then `cues → chunks → proofread → applyfix →
outline → topics → quizpos → build_app_all.py`. Nothing else needs touching.

Date the row from the mp4's `creation_time`, not the file name. Lecture 12's
file is named `20260818_...` but its `creation_time` is `2026-08-17T14:10:33Z`,
and every one of the other eleven rows matches its own `creation_time` date
exactly — so the file name is what is wrong, and following it would have put
the lecture on the wrong day.

**Do not start a second transcription while one is running.** A 0-byte
background output file does not mean the process died: Python buffers stdout
when it is not attached to a terminal, so a healthy run can look dead for
minutes. Check the product's mtime, or a `.part` file, before concluding
anything. Starting a duplicate cost this lecture half its speed (5.7–8.4x
realtime against the usual 13–20x) because the two runs competed for the GPU.
The output was not corrupted — writes go through `.part` + `os.replace`, and
the two runs' cues were verified byte-identical — but nothing was gained.

### Final quiz-bias figures, per lecture

| lecture | answer is strictly longest (zh) | route |
|---|---|---|
| 1 | 72.6% → 1.1% | rewrite pass |
| 2–6 | 14.3–26.4% | as generated |
| 7 | 44.8% → 9.5% | rewrite pass |
| 8 | 1.7% | as generated, overshot |
| 9 | 29.3% | as generated |
| 10 | 25.0% | as generated |
| 11 | 25.9% | as generated |

Chance is 25%. Lectures 9–11 used the calibrated wording and needed no rewrite.

### Errors the teacher makes repeatedly across lectures

Worth knowing before writing notes for any future recording by the same speaker,
because each was logged independently by proofreaders who could not see each
other's work:

- **Soluble matrix enzymes placed on the inner mitochondrial membrane** — the PDH
  complex in lecture 9, β-oxidation in lecture 11 (twice). Of everything in these
  pathways only succinate dehydrogenase is integral to the inner membrane, which
  is precisely why it is the one TCA step wired straight into the respiratory
  chain.
- **NADPH and NADH used interchangeably** — lecture 11, including NADPH said to
  enter mitochondria on the malate-aspartate shuttle and 「NADPH 或者叫 NADH 都可以」
  said three times. He also sources lactate dehydrogenase's NADH from the pentose
  phosphate pathway rather than from GAPDH.
- **The molecule regenerated unchanged each turn of the TCA cycle named as
  乙酰CoA** rather than 草酰乙酸 — lecture 9, in two separate stretches.
- **Ring size confused with carbon count** — glucose, fructose and F-1,6-BP each
  called 五碳糖 in lecture 8, logged by three different proofreaders.
- **Compartment words used loosely** — 细胞膜 for the inner mitochondrial
  membrane, 细胞外膜 / 细胞膜外 for the intermembrane space, 机制 for 基质 (which is
  also a true ASR homophone, so the two failure modes overlap here).

He self-corrects often, sometimes minutes later and sometimes in the same breath.
Every content agent was told to name the time of a self-correction on the card
rather than contradict it, and several declined to card an error for that reason.
Keep that instruction: a note that fights the video is worse than no note.

### Short lectures: collapse the six outline parts into one

`OUTLINE_PARTS = 6` is sized for a two-hour lecture. Lecture 10 is 15 minutes, so
it produced six 2-minute parts — smaller than a single topic, and six agents each
writing one topic would have fragmented a continuous recap. The fix was to
concatenate the parts into `outline_full.txt`, dropping the per-part headers and
de-duplicating the two context paragraphs each part repeats, and give the whole
lecture to one agent. Do the same for anything under about 40 minutes.

### A later lecture can correct an earlier one — check before carding

Lecture 9 states the proton-pump roster exactly backwards. Lecture 10 opens by
recapping the same material and gets it right (I = 4, III = 4, IV = 2 per two
electrons, II pumps none). The lecture-10 agent was told this explicitly so it
would not card a correction the student is about to hear the teacher make on his
own. It still carded the one place where he contradicts his own fresh roster —
oligomycin's back-pressure said to inhibit "复合体 I、II、III" — against the
correct version he had given minutes earlier. That is the right split.

### The quiz-length wording that finally worked

Lecture 9's content agents were told: *option length must carry no information
about which option is correct — read that literally in both directions*, with
both failures quoted at them (lecture 7 at 44.8%, lecture 8 at 1.7%) and an
explicit target of **the answer being longest about a quarter of the time, same
as chance**. Result: 29.3% zh / 27.6% en, answer +1.0 characters against the
mean. `quizpos` accepted it and only had to flatten positions.

That is the wording to reuse. "Must not be the longest" produces 1.7%; naming
the target rate produces the target rate.

### Say "length must carry no information", not "must not be the longest"

Putting the anti-bias constraints back into lecture 8's content-agent prompt
worked — the bank came out at 1.7% zh / 0% en without any rewrite pass, so
`quizpos` accepted it directly. But that overshoots in the other direction:
chance is 25%, lectures 2–6 sit at 14–26%, and at 1.7% a student who notices can
eliminate the longest option and turn a four-way guess into a three-way one.

The wording that produced it was *"the correct option must not be the longest"*,
which agents optimise into *never* longest. Two of the lecture-7 rewrite agents
worked this out unprompted and deliberately left the answer marginally longest in
about a quarter of their questions, saying a flat 0% is itself exploitable. They
were right. Ask for **length that carries no information about correctness**, and
say explicitly that the answer should still be the longest roughly a quarter of
the time.

Lecture 8's bank was left as generated — 1.7% is a much weaker signal than the
44.8% it replaced, and not worth six more agents. It is recorded here so the
number is not mistaken for a clean result.

### Part files: bare array or {"topics": [...]}

Lectures 1–7 were asked for a bare JSON array of topic objects; lecture 8's
prompt asked for `{"topics": [...]}`. `stage_topics` did `topics.extend(_load(p))`,
and extending a list with a dict iterates its **keys** — so all six parts merged
as the single string `"topics"` and the sort died on `t["start"]`. It now accepts
either shape and asserts on anything else. Worth keeping: the failure was loud,
but only by luck; a dict with more keys would have merged several strings and
still crashed somewhere less obvious.

### Lecture 7 needed the quiz rewrite pass — the first since lecture 1

Its generated quiz came out with the correct answer as the strictly longest
option in **44.8%** of 116 questions (English 40.5%), against 14–26% for lectures
2–6, and the answer sat at position 0 in 96 of 116. The cause was mine: the
content-agent prompt for lecture 7 was rewritten to fix a chunk-numbering problem
and the two anti-bias constraints were dropped out of it along the way. Do not
trim that prompt again.

`quizpos` refused the lecture rather than silently rotating a biased set —
`assert zh < 0.40` — which is the assertion doing its job. The fix was the full
`quizout` → 5 rewrite agents → `quizin` route: 44.8% → **9.5%** zh, 40.5% → 8.6%
en, mean excess length +3.5 → +0.1 characters, positions flat at [29, 29, 29, 29].

Note the residual is now *below* chance (9.5% against 25%), so "never pick the
longest" eliminates one option slightly more often than it should. That is a
much weaker signal than what it replaced and it was left alone, but it is a real
property of the lecture-7 bank and not a clean result.

The rewrite agents were told to pad terse distractors into fully specified wrong
claims rather than truncate correct answers, which is what keeps the questions
worth answering. They also caught several genuinely defensible distractors —
phenylalanine does carry a benzene ring and does absorb near 280 nm; live
untreated S-type *Streptococcus* does kill mice; acetyl-CoA does bridge
carbohydrate and amino-acid metabolism — and replaced them. Two marked answers
were factually wrong and were corrected (cap-0 means zero 2′-O-methyl groups, not
"a nucleotide at position 0"; Mg²⁺ coordinates the β/γ phosphate oxygens, not
"hydroxyls between the phosphates").

### On agent failures during quiz/notes generation

Several `agent()` calls have failed mid-run with a session-limit error, always at
the same point: after reading its inputs, right before or during the write of its
output file. In every case so far **the file was actually written** before the
process was torn down — the "failed" status is misleading. Always check
`work/<N>/topics/part_*.json` for the file before assuming a re-run is needed;
`json.load` each one and confirm it parses and its `[start, end]` tiles the range
it was assigned. Only re-dispatch parts that are genuinely missing or broken.

The combined app is built (`build_app_all.py` + `app_template.html`) and lives at
`~/Downloads/生物化学课 视频/生物化学课_学习台.html`. It carries a lecture picker,
four resizable modules, dark/light themes, subtitles overlaid on the video, an
index-everything search with per-category filters and a this-lecture / all-lectures
scope switch, and English text-to-speech. Lectures still in progress appear in the
picker as 处理中 and cannot be selected, so the app never implies work is finished
when it is not.

Still to do: per-line English subtitle translation
(the cue schema already carries an `en`
field; `apply_translations.py` fills it).

### How long this actually takes

Transcription is the cheap part and the only part that runs unattended: it is a
local GPU process, ~13x realtime, no API cost, and it finished all 11 lectures in
one run. Everything after it is agents — roughly 13 per lecture (6-7 proofreading,
6 notes) — and those cost quota and need dispatching. A session limit stopped two
agents mid-run once already. Budget by agent count, not by wall-clock: the stages
are strictly sequential per lecture, so they cannot be compressed by parallelism.

## Conventions to keep

- Corrections must quote the exact line they replace; a mismatch is rejected, not
  guessed at. This is what stops a reviewer's paraphrase rewriting the lecture.
- Reviewers correct mishearings only. They do not tidy phrasing, remove 那么 /
  这个 / 就是, add punctuation, or fix the teacher's science — a disputed claim
  goes in `extra`, so the transcript stays a record of what was actually said.
- Nothing is changed silently: every dropped cue, every substitution and every
  quiz edit is written to a log the student can spot-check.
- Report truncation. Search shows at most 150 transcript hits and says how many
  it withheld.
