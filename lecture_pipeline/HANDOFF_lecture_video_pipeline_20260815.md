# HANDOFF — lecture video pipeline, 2026-08-15

Built in one session. Lecture 1 is finished end to end; lectures 2–11 are in
progress. This file is what a new session needs in order to continue without
repeating the measurements.

---

## What exists

11 recordings, ordered by the `creation_time` inside each mp4 — **not** by
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
| 5 酶各论·脂溶性维生素 | ✅ 2251 | ✅ 539 | running | — |
| 6 维生素·核酸结构 | ✅ 2456 | — | — | — |
| 7 核酸·代谢序章 | ✅ 2374 | — | — | — |
| 8 糖酵解途径 | ✅ 1956 | — | — | — |
| 9 TCA·电子传递链（上） | ✅ 1856 | — | — | — |
| 10 TCA·电子传递链（下） | ✅ 238 | — | — | — |
| 11 脂质代谢·氨基酸代谢开头 | ✅ 2362 | — | — | — |

2121 corrections applied across lectures 1–5, none rejected by the exact-quote
verifier.

The combined app is built (`build_app_all.py` + `app_template.html`) and lives at
`~/Downloads/生物化学课 视频/生物化学课_学习台.html`. It carries a lecture picker,
four resizable modules, dark/light themes, subtitles overlaid on the video, an
index-everything search with per-category filters and a this-lecture / all-lectures
scope switch, and English text-to-speech. Lectures still in progress appear in the
picker as 处理中 and cannot be selected, so the app never implies work is finished
when it is not.

Still to do: lectures 6–11 through `chunks → applyfix → outline → topics → quizpos`,
and per-line English subtitle translation (the cue schema already carries an `en`
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
