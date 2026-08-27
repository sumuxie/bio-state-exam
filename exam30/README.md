# exam30 — 期末口试 30 题的满分答案（背诵版）

A static study app for the **final oral exam**: the 30 official topics, each with the two halves the
examiner actually draws (**A** = general biochemistry & metabolism, **B** = special biochemistry),
plus the structures and laboratory-parameter parts of the same exam.

Open `index.html` by double-clicking it. No server, no build step, no `node` needed — the data files
are plain `<script>` tags, exactly like `biochemie_pro/`.

## What is in it

| | |
|---|---|
| `data/t01.js … t30.js` | one file per exam topic, both halves |
| `data/extra.js` | **off-list topics that were really asked** — currently photosynthesis (a classmate was examined on it, 2026-08-16). Add more here with `n: 32, 33 …` and `bonus: true` |
| `data/focus1–3.js`, `focus_eng.js` | the **🧬 重点补充** card attached to every half by topic id (`"7b"`), bilingual, tagged `分子 蛋白 工程 微生物 病毒 化学` |
| `data/labs.js` | laboratory parameters, SI values + what a deviation means |
| `data/structures.js` | structures to be able to draw, with what the examiner checks |
| `app.js`, `style.css` | ~500 lines of vanilla JS, no framework |
| `speech.js` | the 🔊 read-aloud panel (Web Speech API, no network, no key) |

## The 🧬 重点补充 layer

Ruojin's examiners come from the **chemistry faculty**, and the priority he set (2026-08-17) is
**molecular biology > proteins > protein engineering > microbiology/virology > chemistry**, with the
medical/clinical side kept short. So every half carries an extra card of 6–8 tagged, bilingual points
that pull the topic in those directions — inside the scope of the printed 30 topics, nothing invented.
464 entries in total; the clinical card can be collapsed with the **临床** toggle when it is in the way.

`focus1–3.js` assign whole arrays with `Object.assign` (keys must not repeat between files);
`focus_eng.js` was added later and therefore **appends** to the existing arrays instead — copy that
pattern if you add another layer on top.

## Study modes (the point of the app)

- **全文** — read it through: opening sentence → answer spine → fact blocks → numbers / clinical hooks / traps / vocabulary.
- **挖空** — every `**key term**` is blacked out; say it aloud first, click to check.
- **骨架** — only the block headings remain; recite the content, click a heading to compare.
- Tick each spine line once you can say it without help; mark each half `～` (眼熟) or `✓` (会说) —
  the header progress bar counts only `✓`, out of 60.
- **🎲 抽题** draws a topic the way the examiner does and starts a 15-minute timer.
- **中译** collapses or expands every Chinese line at once (block glosses, section headings, the `｜`
  translations in the focus card, the vocabulary chips) — pure-English mode for the actual oral.
  **临床** hides the clinical cards.
- **🔊 read-aloud** (`speech.js`): a speaker button at four levels — the **half**, each **block**,
  each **section** (骨架 / 重点补充 / 数字 / 临床 / 易错 / 词汇) and **every single paragraph**, sitting at
  the end of the line it reads. Click reads that one paragraph; **Shift+click** reads on from there to
  the end of the half. On 检验值 and 结构式 every table row has its own button too.
  A panel in the bottom-left corner sets **accent, gender, voice and speed** (the accent chips are
  built from the voices actually installed, so it lists 美 US / 英 UK / 澳 AU / 印 IN … only if they
  exist), with sentence-by-sentence transport (⏮ ⏯ ⏭ 🔁) and a highlight that follows the voice —
  good for shadowing. The panel collapses to its header and can be hidden completely to a floating 🔊
  button; *每段小喇叭* turns the per-paragraph buttons off if they feel busy.
  It reads the **English only** (Chinese is stripped) unless *也读中文* is ticked and a Chinese voice
  exists — except that a paragraph's own button is an explicit request, so it reads Chinese either way.
  It works in cloze mode too, which is the best drill: hear the sentence, say it, then reveal.
- Keyboard: `J`/`K` next/previous topic, `1`/`2`/`3` switch mode, `Z` 中译, `C` 临床, `S` play/pause,
  `N`/`B` next/previous sentence, `Esc` stop, `R` draw, `/` search.
- State (mastery, ticks, mode, theme, layers, voice settings) is kept in `localStorage` under
  `exam30.*` — per browser, per machine.

### Voices

`speech.js` uses the **Web Speech API**, i.e. the voices installed on the machine — no account, no
network, no API key. Quality therefore depends on the browser: plain Chrome on this machine exposes
only the three legacy SAPI voices (David, Mark, Zira), while **Edge exposes the Microsoft *Natural*
neural voices** (Ava, Andrew, Emma, Sonia…), which are the ones that actually sound human. The panel
marks those with ⭐, sorts them first, and prints a hint when none is found. More can be installed in
Windows → 设置 → 时间和语言 → 语音 → 添加语音.

## Data contract

```js
window.EXAM30.topics.push({
  n: 7,                    // topic number; bonus: true puts it under the 超纲附加 separator
  a: { /* half A */ }, b: { /* half B */ }   // b may be omitted
});
```

Each half:

| field | meaning |
|---|---|
| `titleEN`, `titleCN` | the topic line as printed on the exam list, and its Chinese gloss |
| `opener`, `openerCN` | the first sentence to say — a definition that frames the whole answer |
| `spine[]` | 5–8 items = the order to speak in; each is tickable in the app |
| `blocks[]` | `{h, hcn, points[], cn}` — heading, Chinese heading, dense English facts, Chinese 串讲 |
| `numbers[]`, `clinic[]`, `traps[]` | figures to quote, clinical hooks, and what not to say |
| `terms[]` | `[["en","中文"], …]` vocabulary chips |

Mini-markup inside `points`/`opener`: `**text**` becomes a cloze-able key term, `` `text` `` becomes
monospace. Everything else is escaped, so `<`, `>` and `&` are safe to type literally.

## Known gaps

- **The official `OBLIGATORY` structure list was never supplied** — `data/structures.js` carries the
  standard Czech medical-biochemistry set instead, with a warning banner in the app. Replace it as
  soon as the real column is at hand; that is the one place where this app is guessing.
- Laboratory reference intervals are the usual adult SI ranges and differ between laboratories. The
  exam conditions say the exact range is *not* required — the order of magnitude and **the unit** are.
- The content is written to be recited in English at the oral; it is not a substitute for the
  textbook, and it has not been checked line-by-line against `Biochemie – Základní kurz` the way
  `biochemie_basic`'s chapters were (see `HANDOFF.md` §8 for that verification pipeline).
