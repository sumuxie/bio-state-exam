# START HERE — ⛔ SUPERSEDED, 2026-08-08

> # This is no longer the entry point. Open [`CORE_HANDOFF.md`](CORE_HANDOFF.md).
>
> The work was split into three tracks with a file each — `CORE1_APP.md`, `CORE2_LEHNINGER.md`,
> `CORE3_STRUCTURES.md` — and `CORE_HANDOFF.md` routes between them. **Read only the one track
> you are working on.** This file predates that split; everything below it that is still true
> has been carried across, and where the two disagree, **CORE wins**.
>
> It is kept because its per-node history and its archive index are not duplicated anywhere else.
> **Grep it, do not read it.** The title above says START HERE only because renaming the file
> would break the links pointing at it.

**Do NOT read `HANDOFF_LEHNINGER.md` in full** — it is 302 KB ≈ 69k tokens and reading it burns
the whole session. It is an archive you **grep by section number**; the index is at the bottom of
this page. `HANDOFF.md` (68 KB, the Czech app) is the same: grep, never read whole. Both sizes
are re-checked by `audit_handoff.py`.

**Corpus.** The layers run over **270** nodes (207 Czech + 60 lehninger + 3 entity), grouped
under **78** distinct `topicKey` values. Exactly 31 keys join both books — that join is what
`biochemie_pro` exists to show. `audit_handoff.py` re-checks these four numbers against the live
data, so it complains if they drift.

This file was 553 lines on 2026-08-08 and sessions were dying part-way through. **Cut to ~150.
Keep it there.** A finished node gets a row in a table, never a section. Detail belongs in the
archive.

---

## Start a session

> 读 `C:\Users\Admin\Downloads\bio-state-exam\LEHNINGER_START.md`，全文读完，然后按「当前状态」
> 那一节继续。不要整读 `HANDOFF_LEHNINGER.md`，只按章节号 grep。写完一批就 commit + push。

**Sessions get cut off by a biosecurity classifier.** Confirmed 2026-08-10 against the
transcripts themselves: **510 refusal records, `apiRefusalCategory: "bio"`, 510 of 510, no
exceptions.** They live in `~/.claude/projects/*/*.jsonl` as
`{"type":"system","subtype":"model_refusal_no_fallback"|"model_refusal_fallback"}` — **not in
this repo, which is why an earlier search concluded there was no evidence.** Output-length
truncation is a different and much rarer thing: `stop_reason:"max_tokens"` occurs **5** times in
the whole history against **1031** refusals. **The trigger is the subject matter** — refusals ran
188/133/128 per day on 2026-08-06/07/08 and fell to 6 and 14 on 08-09/10 as the work moved to the
textbook app — **so no wording avoids it.** Reply `继续` and carry on.

⚠️ **Model choice changes whether a refusal is survivable, and this reverses the old advice.**
A refusal is retried on a *higher* tier, and the only fallback path in the data is
**`claude-fable-5 → claude-opus-5`**. If you are already on Opus there is nothing above it, so
every refusal is a hard stop:

| originalModel | refused | auto-rescued | hard stop | hard/turn |
|---|---:|---:|---:|---:|
| `claude-opus-5` | 209 | **0** | 209 | 0.75 % |
| `claude-sonnet-5` | 173 | **0** | 173 | 2.75 % |
| `claude-opus-5[1m]` | 42 | **0** | 42 | — |
| `claude-fable-5` | 86 | **75** | 11 | — |

**Prefer Fable 5.** 75 of its 86 refusals (87 %) were rescued and the turn continued; **0 of the
382 refusals originating on Opus or Sonnet were.** Watched live on 2026-08-10: five hard stops on
`opus-5[1m]` between 18:35 and 19:13, then a refusal at 19:29 on `fable-5` that fell back to Opus
and finished normally. ⚠️ **Two limits.** This does not reduce refusals, only makes most of them
recoverable — 13 % of Fable 5's still stop hard. And **Fable 5's refusal *rate* is unmeasurable
here**: assistant turns are not tagged with that model id, so the `hard/turn` cell is blank on
purpose. The old advice ("prefer Opus, avoid Sonnet", 6.3 % vs 1.4 %) had the Opus-vs-Sonnet
direction right but the magnitudes wrong, and it ignored recoverability entirely.

**Commit and push after every batch** — that is still the defence that has never lost anything.

⚠️ After any mid-write interruption, check the file parses before building on it.

---

## Current state — 2026-08-08

| Layer | Done | Left |
|---|---|---|
| `mustKnow` | **270 / 270 ✅ closed** (230/230 when this table was written; re-measured 2026-08-12) | — |
| `trace` 追根溯源 | 34 cards | open-ended; see below |
| Structures — amino acids | **20 / 20 drawn ✅** | — |
| Structures — sugars | **5 drawn** (Fischer + Haworth) | more sugars, then nucleotides / coenzymes / lipids |
| App features | 6 shipped | 3 parked |

**`trace` by chapter** (nodes → cards): ch1 6→2 · ch2 10→7 · ch3 9→5 · ch4 18→4 · **ch5 10→0** ·
ch6 19→6 · ch7 42→7 · **ch8 40→0** · **ch9 27→0** · ch10 26→3.
ch5/ch8/ch9 at zero is **Ruojin's decision** (densify what she is reading, do not spread thin) —
not a gap to fill.

**Shipped features:** term drill (1,226 generated questions) · quiz source cycling · ranked
reading voices · folded coverage note · highlighting with four pens · URL deep links `#/t/<id>`.
**Parked:** 只看必背 filter · notes + IndexedDB · Terms-tab card drill.

---

## Next

1. **Draw the next structure group** in `biochemie_struct`. Amino acids are done (20/20).
   Ruojin has settled the open question — **draw everything, sugars included**; she already has
   the sugars memorised, so Haworth layout is no longer a blocker. Suggested order: sugars →
   nucleotides/bases → coenzymes (ATP, NAD⁺, FAD, CoA, TPP, PLP) → lipids → pathway intermediates.
2. **More `trace`**, in the chapters she is reading.

⚠️ **The two sentences that used to stand here are dead — they said "all 20 depth nodes exist,
the queue's top 20 are done, none carries `trace` yet". Measured 2026-08-12: there are 60
Lehninger nodes (44 deep + 16 brief), the depth queue's top 28 are done (33 of 85 in total), and
all 44 deep nodes carry `trace`.** For live progress read `CORE_HANDOFF.md`, never this file.
The archive used to say five high-value subjects remained (genetic code, protein synthesis, gene
regulation, urea cycle, amino acid degradation); **measured 2026-08-08, the Czech book covers all
five** — `4-2-1`…`4-2-4-2` and the whole of ch5. Correction is in the archive next to the original
claim. That correction still stands: `L-27-1-1` (§27.1) was later written over `4-2-1` as a
**depth layer on covered material**, which is a different thing from filling a gap.

⚠️ **Grep the Czech layer before believing any coverage claim**, including ones in the handoffs.
This has now produced a wrong answer twice — photosynthesis, then these five.

---

## The rules that actually bite

1. **Organic chemistry must land on a consequence.** Her words: 我的有机化学几乎说是没有根基…
   一定不要讲完全化学，我听不懂的. Not "a delocalised π system satisfying 4n+2" but "the ring is
   flat, so it absorbs at 280 nm, so you can measure protein concentration".
2. **The Czech textbook sets scope.** The Chinese notes are a comprehension aid and never define
   what is examinable. A classmate's report of a real exam question outranks everything.
3. **Never write a reference from memory.** Fetch it, store it with provenance, assert it before
   use. This has already caught real errors.
4. **No silent failures.** Every script asserts its own output and prints what it opened.
5. **`trace` register:** answer *why this thing exists* out loud before saying what it is. Her
   brief: 像科普一样，有温度，把我当傻子来教. The highest-yield card is one where the textbook
   **contradicts a picture the reader already holds** (`6-1-2-1` high-energy ≠ strong bond,
   `3-6` lock-and-key is wrong, `6-2-4-5` protons pay to *release* ATP).
6. **`mustKnow` is not a summary.** It is what you would still want after forgetting the node.

---

## Traps — each fails silently, none throws

- **An author `display` rule defeats `hidden`.** `.voice-panel { display: grid }` meant the voice
  panel could never be closed, by any button, for its whole life. Fixed globally with
  `[hidden] { display: none !important; }`. Keep the `!important`.
- **The Pages deploy stages a whitelist.** A new app 404s on every URL while the workflow reports
  success. `biochemie_struct` hit this. There is now an assertion; keep it.
- **`esprima` cannot parse `biochemie_pro/app.js`** and never could — a pre-existing
  `/\p{Script=Latin}/u` at line 466. Use `jsbalance.py`, calibrated on a known-good copy first.
  Do not read that failure as damage you caused.
- **Backticks in `git commit -m "…"` are command substitution** and silently delete every
  identifier. Use `-F` with a file or a quoted heredoc.
- **`chapter` is book-local** (Czech ch7 ≠ Lehninger ch7). Bucket on **book+chapter**.
- **Entity cards have no `chapter`/`section`.** Guard on `kind` first.
- **`cardKey` differs between apps.** Always reuse biochem's `topic.id + '::' + (term.cz||term.en)`.
- **Cross-app links rot silently** — no sync tooling exists. `check_links.py` asserts them.
- **Calibrate every checker by injecting a known error first.** This session that caught two real
  holes in a checker that was reporting a clean pass.

---

## Apps and commands

| Directory | Role | Storage prefix |
|---|---|---|
| `biochemie_basic/` | **frozen**, she revises from it | `bio.` |
| `biochemie_pro/` | active trainer, 270 nodes (2026-08-12) | `biopro.` |
| `biochemie_struct/` | structure formulas | `biostruct.` |

Live: **https://sumuxie.github.io/bio-state-exam/biochemie_pro/**
(the site root redirects to the frozen app — changing that is still Ruojin's call).

```bash
python lehninger_index/scripts/step5_check.py        # data + schema
python lehninger_index/scripts/verify_citations.py   # page citations
python lehninger_index/scripts/audit_handoff.py      # this file vs reality
cd biochemie_struct && python tools/check_structures.py && python tools/check_links.py
python -c "import esprima,glob;[esprima.parseScript(open(f,encoding='utf-8').read()) for f in glob.glob('biochemie_pro/data/*.js')];print('parse OK')"
```

**Writing a batch:** read nodes with `parse_nodes` (never regex the data files), write the lines,
insert with a script **written to a file and run by path** (a heredoc eats backslashes here),
assert every id was found and that nothing was inserted twice, then parse-check and commit.
~3 items per batch.

---

## Grep index for `HANDOFF_LEHNINGER.md`

Grep by section number, never read whole. `§1` scope · `§2` sources · `§3` Chinese-notes policy ·
`§5` organic-chemistry rule · `§5a` per-chapter organic load · `§6a` data defects · `§7`
book-local chapters · `§8` settled decisions (do not reopen) · `§9c` depth queue · `§11`
EN/CN policy · `§13*` per-node write-ups (23 of them) · `§15` figures plan · `§16` numbers rule.

Cut from this file on 2026-08-08 and preserved in the archive under **`§20 START-file history`**:
the full AUP measurement tables, the trace rollout narrative, the depth-queue post-mortem, the
photosynthesis correction, and the app-port inventory.
