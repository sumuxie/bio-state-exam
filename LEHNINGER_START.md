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

**Corpus.** The layers run over **241** nodes (207 Czech + 31 lehninger + 3 entity), grouped
under **70** distinct `topicKey` values. Exactly 20 keys join both books — that join is what
`biochemie_pro` exists to show. `audit_handoff.py` re-checks these four numbers against the live
data, so it complains if they drift.

This file was 553 lines on 2026-08-08 and sessions were dying part-way through. **Cut to ~150.
Keep it there.** A finished node gets a row in a table, never a section. Detail belongs in the
archive.

---

## Start a session

> 读 `C:\Users\Admin\Downloads\bio-state-exam\LEHNINGER_START.md`，全文读完，然后按「当前状态」
> 那一节继续。不要整读 `HANDOFF_LEHNINGER.md`，只按章节号 grep。写完一批就 commit + push。

**Sessions get cut off by a biosecurity classifier.** Every refusal record carries
`category: "bio"` — 415 of 415, no exceptions. **The trigger is the subject matter**, so no
wording avoids it and it is not worth investigating; two sessions burned their whole window
trying. Reply `继续` and carry on. **Prefer Opus 5, avoid Sonnet 5** (measured: 6.3 % vs 1.4 %
of turns refused, over 24 deduplicated conversations). **Commit and push after every batch** —
that is the entire defence and nothing has ever been lost.

⚠️ After any mid-write interruption, check the file parses before building on it.

---

## Current state — 2026-08-08

| Layer | Done | Left |
|---|---|---|
| `mustKnow` | **230 / 230 ✅ closed** | — |
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

**No new Lehninger depth nodes are needed.** All 20 exist and the depth queue's top 20 are done.
The archive used to say five high-value subjects remained (genetic code, protein synthesis, gene
regulation, urea cycle, amino acid degradation); **measured 2026-08-08, the Czech book covers all
five** — `4-2-1`…`4-2-4-2` and the whole of ch5. Correction is in the archive next to the original
claim. The 20 existing nodes now all carry `mustKnow`; none carries `trace` yet, and that is the
only layer still open on the depth nodes.

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
| `biochemie_pro/` | active trainer, 230 nodes | `biopro.` |
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
