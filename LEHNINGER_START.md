# START HERE — the Lehninger phase

**Read this file in full. Do NOT read `HANDOFF_LEHNINGER.md` in full** — it is 259 KB ≈ 59k
tokens and reading it triggers a compaction before you have done any work. That file is now an
**archive you grep into**, one section at a time, using the index at the bottom of this page.
`HANDOFF.md` (69 KB, the Czech app) is the same: grep, never read whole. Both sizes are
re-checked by `lehninger_index/scripts/audit_handoff.py`, which fails if they drift out of date.

Rewritten 2026-08-07 because a session was told to read the archive and spent its whole context
doing it.

---

## ▶️ How to start a session, and what to say when it errors

**To start work, say exactly this:**

> 读 `C:\Users\Admin\Downloads\bio-state-exam\LEHNINGER_START.md`，全文读完，然后按里面
> 「Next pick」继续。不要整读 `HANDOFF_LEHNINGER.md`，只按章节号 grep。
> 写完一个节点就 commit + push，不要攒。

**When it stops with `API Error: ... safeguards flagged this message` or `... can't help with
this`** — which it will, several times per session, and which is **not** caused by anything you or
it did wrong (see the AUP section below) — **just reply:**

> 继续

That recovers it. In the session of 2026-08-07 all **8** such errors were recovered this way and
three complete nodes still got written. Do **not** switch models in response — measured twice,
it does not help. Do **not** start a new session unless `继续` fails repeatedly; the work already
committed is safe either way, because every finished node is committed and pushed before the next
one starts.

**If an error interrupts a file being written**, the next session should check the file parses
before building on it:

```bash
python -c "import esprima,glob; [esprima.parseScript(open(f,encoding='utf-8').read()) for f in glob.glob('biochemie_pro/data/*.js')]; print('all parse OK')"
```

---

## The project in six lines

A biochemistry oral-exam trainer for a Czech state exam, three apps in one repo.

- **`biochemie_basic/`** — FROZEN. The user revises from it daily. Never modify.
- **`biochemie_pro/`** — where all work happens. Czech textbook (207 nodes, ch1–10, complete)
  **plus** a Lehninger 8 depth layer (19 nodes) joined by `topicKey`.
- **`PESB/`** and **`oral_prep_app/`** — separate apps, not this phase, listed so they do not look
  like strays. `PESB/`'s handoff is **not in this repo** — it lives at
  `C:\Users\Admin\Documents\trae_projects\recombinants_trae_independant\HANDOFF_PESB.md`.

**The division of labour, which an early draft got backwards** (`HANDOFF_LEHNINGER.md` §3):
the **Czech book sets scope** (it is what the department teaches), **Lehninger sets depth**
(go deeper where Czech is thin), and the **Chinese notes are a comprehension aid only** — never
scope, never depth. A classmate was examined on photosynthesis, which the notes omit; calibrating
to the notes would have skipped it. **A classmate's report of a real exam question outranks
everything in either handoff.**

---

## 🏁 `L-23-3-1` is finished — rank 19 (§23.3), and with it the TOP-20 QUEUE IS EXHAUSTED (2026-08-07)

**`L-23-3-1` took `topicKey: "hormone-structure-and-action"` and joins the ten Czech nodes
`10-17`…`10-26`. Nothing created, nothing moved, no `manual_note`; topicKey count stayed at 63.**
Seventh instance of the §9g pattern. Decision **§9n**, node **§13w**, in a new
`biochemie_pro/data/leh_ch23b.js` wired into `index.html`; 34 citation rows, all OK; validator
clean. It carries the **fifteenth `lehNote`** (`gap`, on `7-12-2`), taking the total to **15 notes
on 13 nodes**. This was the last unwritten rank in the top 20 — see the Next pick block below for
what replaces it.

**Why it was worth writing.** Czech §10.3 teaches, thoroughly and correctly, *how* a hormone
signals — receptors, cAMP, IP₃/DAG, tyrosine kinases, the nuclear steroid route — and never once
says what that machinery is **for**. Measured across the whole Czech layer: `obesity` 0 hits,
`leptin` 0 hits, `glycaemia` 0 hits, and `diabetes` appears **only** as a cause of acetyl-CoA
flooding. This node supplies the physiological question those ten nodes are the answer to.

**The idea the node is built around, and it is genuinely good exam material:** the pancreatic β
cell has **no glucose receptor** — it measures glucose by *metabolising* it. GLUT2 → glucokinase →
glycolytic flux → ATP → the ATP-gated K⁺ channel closes → the membrane depolarises → Ca²⁺ enters →
insulin is released. **The sensor IS glycolysis.** The step to drill is that *closing* a K⁺ channel
depolarises, because the open channel was what held the membrane negative. And the mechanism is
proved real rather than diagrammatic by the fact that **that one channel is both a drug target and
a disease gene** — sulfonylureas close it on purpose, mutations jamming it open cause neonatal
diabetes, mutations jamming it shut cause hypoglycaemia severe enough to warrant removing part of
the pancreas (A p.862).

**The `lehNote` corrects a live exam trap.** `7-12-2` draws the whole glycogen cascade but writes
`adrenalin/glukagon` as one undifferentiated pair, naming **no target organ**. Lehninger: of
glucagon, *"Although its primary target is the liver"* (A p.862). Glucagon reaches adipose tissue
but **not skeletal muscle**; epinephrine does. A student revising from `7-12-2` alone answers that
glucagon mobilises muscle glycogen — wrong twice, since muscle has no glucagon receptors and muscle
glycogen could not raise blood glucose anyway, lacking glucose 6-phosphatase.

### ✅ The pre-test method, third run: 70 quotes tested, ZERO page errors

§13u made "test the quote before writing the prose" a rule after 21 of 54 came back one page out.
Third application: **70 candidates, 64 resolved on exactly one page, 6 failed — and all six were
OCR damage, not wrong pages**, each replaceable by a fragment of the same sentence on the same
page. **No page was wrong, because every page was searched rather than predicted.** Treat this as
the default, not an optimisation. Also reconfirmed: **OCR damage is per-REGION, not per-page.**

⚠️ **An interpolated TOC range can also be RIGHT — check it, do not assume it is wrong.** §23.3's
`interpolated` range (A pp.859–867) held at **both** ends, after the three checks before it each
found an error. The rule is that such a range is *unreliable*, not *wrong*.

⚠️ **28 UNCHECKED rows on the first citation run, all mechanical, all closed in one pass.** A quote
only becomes a probe if it sits **within 90 characters before its own citation** (`CTX_BACK`).
Three shapes cause it, and §13w gives the fix for each: a short CZ anchor tag carrying a page
number (drop the citation — the CZ half is a tag, the `en` half already cites it); a `def_en` or
`why_en` that paraphrased where it could have quoted (lift the book's wording verbatim into the
spot already next to the citation); and a `coverageNote` list of anchors (wrap each subheading
title in quotes — a subheading *is* verbatim page text and makes a free probe). **Use typographic
`“ ”`, never ASCII `"`, inside a double-quoted JS string** — that is §9m's second bug avoided by
construction instead of discovered by a broken parse.

## ✅ `L-26-2-1` is finished — rank 16 (§26.2) decided AND written, and TWO checker bugs found by a broken parse (2026-08-07)

**`L-26-2-1` took `topicKey: "transcription"` and joins Czech `4-1-4-1`/`4-1-4-2`. Nothing
created, nothing moved, no `manual_note`; topicKey count stayed at 63.** Sixth instance of the §9g
pattern. Decision **§9m**, node **§13v**, in a new `biochemie_pro/data/leh_ch26.js` wired into
`index.html`; 12 citation rows, all OK; validator clean. It carries the **fourteenth `lehNote`**
(`gap`, on `4-2-4-2`), taking the total to **14 notes on 12 nodes**.

**The §9e check was harder than usual.** A *separate* Czech node, `4-2-4-2` (key
`gene-regulation-proteins`), already teaches a slice of §26.2's own material — capping,
polyadenylation, splicing — worked through the ovalbumin gene. This looks exactly like rank 9's
failure mode on first glance. It is not: `4-2-4-2`'s own title and curriculum position are about
**eukaryotic gene regulation** (paired with the lac/trp operon node, both mapping primarily to
§28.1), and it uses capping/splicing as scaffolding for its real subject. Moving it would misfile
genuine regulation content. §13m's third outcome — cross-referenced by name, not re-keyed.

**What the node adds, since both Czech nodes on this subject stop just short of the interesting
part:** RNA itself can be the splicing enzyme — group I/II introns self-splice with **no protein
at all**, discovered by Cech in 1982 transcribing a *Tetrahymena* gene in vitro with *bacterial*
RNA polymerase, no *Tetrahymena* protein present, and the RNA spliced itself out correctly anyway.
The actual two-step chemistry corrects `4-2-4-2`'s overstated "GU...AG is necessary and sufficient"
— the real nucleophile is an internal branch-point adenosine, and ~1% of human introns use a minor
spliceosome with AU...AC instead. Alternative splicing (>95% of human genes, one clause in Czech)
is anchored to nusinersen, an approved drug that corrects one skipped exon in SMN2. Plus tRNA
processing, mRNA half-life and miRNA biogenesis — none of which Czech touches at all.

### ⚠️ Two bugs found writing this node — neither is a wrong page, both will recur

1. **A book quote containing a prime mark (`2'`, `3'`, `5'`) breaks `verify_citations.py`'s own
   quote regex.** Wrapping a whole sentence like *"The 2' OH of a specific adenosine..."* in the
   checker's single-quote delimiters fails, because the regex excludes **every** quote-mark
   character — prime included — from inside a match. The citation silently loses its own probe.
   §9g already warned *"choose quotes with no prime"* — this confirms it a second time, for a
   different reason (there it was OCR; here it is the regex itself). **Fix: never quote a
   prime-bearing sentence whole; paraphrase it and lift a short adjacent phrase without a prime.**
2. **Double quotes inside a `coverageNote` — itself a double-quoted JS string — silently break the
   parse**, not the citation check. `verify_citations.py` never even reaches a file that fails to
   parse, so this produces no diagnostic at all from the normal tool. **Caught only because
   `esprima.parseScript()` was run directly on the file first.** ⚠️ **Run a parse check
   immediately after editing any field that quotes book text, before running the citation
   checker** — a broken parse fails silently downstream in a way that looks unrelated.

## ✅ `L-8-2-1` — rank 15 (§8.2) decided AND written, and the run that proves the pre-test method (2026-08-07)

**`L-8-2-1` took `topicKey: "nucleotides"` and joins Czech `4-1` and `4-1-2`. Nothing created,
nothing moved, no `manual_note`; the topicKey count stayed at 63.** Fifth instance of the §9g
pattern. Decision **§9l**, node **§13u**, in a new `biochemie_pro/data/leh_ch8b.js` (chapter 8's
second file) wired into `index.html`; 17 citation rows, all OK; validator clean. It carries **two
`lehNotes`** on `4-1-2`, taking the total to **13 notes on 11 nodes**.

### 🔴 Read this before writing the next node — 21 of 54 quotes were on the wrong page

§13t suggested testing every candidate quote against A *before* writing the prose. §8.2 turns that
into a rule with a number. Of **54 candidates tested, 31 landed where predicted and 21 did not —
and every one of the 21 was off by exactly one page, always one page earlier, because the pages
had been predicted by scaling from B's layout.** Written first and audited afterwards, that is
**21 ELSEWHERE rows**, each one page out, to chase back through the book by hand.

**Never predict an A page from B's layout — not approximately, not even when the drift has been
consistent so far. Test the quote.** One script run against `verify_citations.py`'s own `norm()`
replaces an entire audit cycle. This is §13l's rule in its purest form yet.

Smaller finding, same run: **OCR damage is per-REGION, not per-page.** A p.278's figure-caption
region fractures words with plain spaces (*variety*, *phenylalanine*) which `norm()` cannot rejoin
— but the body text on that same page is clean and quotes from it verify fine. Do not write off a
page; write off a region.

### The two conflicts, both resolved in Lehninger's favour

Per the user's standing instruction — *"如果捷克语版本有出入可以标记一下，主要针对英语版本为准"* —
§8.2 produced two divergences that clear §9f's bar:

1. **What stabilises the double helix.** `4-1-2` credits the hydrogen bonds. Lehninger:
   *"the hydrogen bonds do not contribute significantly to the stability of the structure"*
   (A p.271). They supply **complementarity**; stability comes from metal cations shielding the
   phosphate charges plus base stacking. ⚠️ **Why the error is so durable:** counting hydrogen
   bonds (3 for G≡C vs 2 for A═T) predicts *exactly the same* observation that settles it — that
   GC-rich DNA is more stable. Wrong mechanism, right prediction, so ordinary revision never
   exposes it.
2. **A-DNA and Z-DNA in cells — the Czech node is wrong in *both* directions.** Lehninger:
   *"Whether A-DNA occurs in cells is uncertain"* (A p.273), because crystallisation reagents
   dehydrate DNA so most short DNA crystallises in the A form regardless; whereas short **Z-DNA
   tracts have been found in both bacteria and eukaryotes**, with a possible role in gene
   regulation or recombination. Z is the one with demonstrated cellular occurrence, not A.

## ✅ `L-2-2-1` — rank 13 (§2.2) decided AND written, and the first clean citation run (2026-08-07)

**`L-2-2-1` took `topicKey: "amino-acids"` and joins Czech `2-1-1`, `2-1-2`, `2-1-3`. Nothing
created, nothing moved, no `manual_note` — the topicKey count did not budge from 63, which is the
proof it was a reuse.** Fourth instance of the §9g pattern. Decision in archive **§9k**, node in
**§13t**, in a new `biochemie_pro/data/leh_ch2.js` wired into `index.html`; 16 citation rows, all
OK; validator clean. It carries the **eleventh `lehNote`**, a `conflict` on `2-1-2`.

Why it was worth writing: Czech `2-1-2` draws glycine's titration curve and reads three points off
it, but **the Czech book has no section on water anywhere** — measured, `pufr` 0 hits, `Henderson`
0, `Kw` 0 — so it never says what pH measures or where a pK comes from. This node is that missing
floor: Kw and why pH 7 is a *measured consequence* rather than a convention, proton hopping, Ka
and pKa, and what a titration curve actually measures. It also supplies **glycine's two pKa
values, 2.34 and 9.60 (Fig. 2-15, A p.57) → pI = 5.97** — the two numbers `2-1-2`'s own formula
asks for and never gives.

⚠️ **Henderson–Hasselbalch is NOT in §2.2** — it is a subheading of §2.3, which §9b records the
user ruling a one-line mention only. The node names buffering and deliberately stops there.

### 🔁 The method worth copying: settle the page evidence BEFORE writing the prose

**Every quote was tested against A before it went into the node**, with a throwaway script that
imports the same `norm()` and the same `printed = pdf − 36` arithmetic `verify_citations.py` uses.
46 candidates tried, 40 passed on exactly the intended page, 6 failed — and **all six failures
were OCR traps, not wrong pages.** Then the node was written using only quotes already known to
verify. Result: 13 of 16 rows OK on the first run, the other three being `coverageNote` citations
that simply had no quote yet. This inverts the usual loop and is much cheaper than chasing
ELSEWHERE rows back into the book afterwards. Details in §13t.

⚠️ **A new OCR trap shape, from A p.58: a figure label can carry a MIDDLE DOT instead of a
hyphen.** The page reads `FIGURE 2· 16`, so a `figure 2-16` probe scores **0 hits on the very page
that carries it** and matches p.59 instead. `norm()` collapses whitespace around a *hyphen*
between digits but a middle dot never reaches that rule. The row survived only because an OK from
any probe outranks an ELSEWHERE from any other, and a verified quote sat in the same field.
Four more traps on these pages are listed in §13t, including **a whole subheading that exists only
in A's front-matter Contents** and `[H+]` rendering as `[W]` throughout.

## ✅ `L-6-4-1` — the first node that needed a `topicKey` decision and cost no data change (2026-08-07)

Rank 3, §6.4 Examples of Enzymatic Reactions, ratio 11 — the highest ratio in the whole queue that
was still unwritten. Decided in §9g, written in §13p, in a new `biochemie_pro/data/leh_ch6.js`
wired into `index.html`; 16 citation rows, all OK on the first run; validator clean. It carries the
**ninth `lehNote`**, a `conflict` on `3-6`: the hexokinase xylose experiment disproves that node's
closing claim that only a true substrate can force the conformational change. `L-3-3-1` (rank 18,
§13n), `L-23-2-1` (rank 7, §13m) and `L-25-1-1` (rank 20, §13l) came just before it and are equally
clean.

### ✅ The `2-2-6` cnNote error is closed

Two earlier sessions flagged it; §2c deferred it **on principle** — *"flagging it is not the same
as guessing it"* — because the fix needed the Chinese notes' own p.41 heading and nobody had
opened it. **It has now been opened.** The notes have no text layer, so pages were rendered from
`生物化学笔记_分卷/…_03_p031-045.pdf` and read as images: p.41 carries a highlighted heading
**八 蛋白质的分离、纯化、表征** whose first item is **① 蛋白质的性质** — literally `2-2-6`'s own
title — and p.46 is **blank**, fixing the topic's end. So topic 八 = pp.41–45, measured at both
ends. `2-2-6` now reads `topic: "八"`, `status: "mapped"`, with the evidence written into its
`coverageNote`. **Topic 八 appears in the data for the first time.**

### ✅ The citation backlog is cleared: 352 OK / 0 ELSEWHERE / 0 UNCHECKED

Every `A p.N` citation in `biochemie_pro` now self-verifies on every run (§13o). This was the
largest known backlog in the project. **Not one of the 34 UNCHECKED citations turned out to be
wrong** — they were gaps in *verifiability*, not errors. Each was closed by reading the cited page
and working a short verbatim quote into the node's own prose.

**Keep it at zero.** `verify_citations.py` must end `0 elsewhere, 0 unchecked`. If a new node
adds an UNCHECKED row, close it in the same commit rather than banking it.

⚠️ **Three probe constraints that silently drop a quote** — check these first when a quote you
just added does not clear its row, because the message you get back is `no searchable phrase`,
which reads as though you had added nothing:

- **18–140 characters** between the quote marks. Three quotes of 157–158 chars were silently
  ignored.
- **at least 4 words**. `'membrane interface anchors'` is 3, so it never became a probe.
- **never quote a phrase in order to say A cannot find it** — the checker adopts it as an
  unfindable probe and condemns the surrounding citations. Name such phrases without quote marks.

### ⚠️ Any audit number written before 2026-08-07 is inflated

**Four bugs in `verify_citations.py` were fixed that day**, two of which had been distorting every
audit ever run. Re-run the script; never compare against a recorded figure.

- **`cited_range()` re-searched the context window** and took the *first* citation in it, not the
  one the row was about — so a row for `A pp.930-940` was silently re-ranged to a nearby
  `A p.919`, found a probe there, and **printed as OK**. It did not drop the citation, it
  **confirmed the wrong one**. 15 rows affected.
- **`probes()` took the first figure label in the window**, not the nearest one *before* the
  citation, and **condemned seven correct citations** in `L-11-3-1`.
- **Spaced figure labels.** A's OCR writes `figure 11 -31`, so a probe built as `figure 11-31`
  never matched — four more correct citations reported as unverifiable. `norm()` now collapses
  whitespace around a hyphen between digits.
- **Label order**, which was a regression from the second fix: section nodes write
  `Fig. 3-28, A p.94` (label first), the entity card writes `A p.75, Fig. 3-6` (label last).
  Cutting the window at the citation broke the second convention. Both are supported now.
  **A change made to stop over-matching quietly under-matched somewhere with a different house
  style** — worth remembering before the next "obvious" tightening.

### Five things the recent nodes learned

- **Never scale a B page into an A page — search A.** In §25.1, ten of 54 candidate quotes were on
  a different A page than B's layout implied, every one off by exactly one.
- **An `interpolated` A range is *unreliable*, not *wrong*.** §25.1's was wrong at the start,
  §23.2's at the end, §3.3's was correct at both. Check the first subheading **and** the SUMMARY;
  it costs two minutes.
- **Do not cite pages in a section you have not read.** Forward-pointers to §23.3, §23.4 and §25.2
  were using interpolated ranges — the exact source shown to be unreliable. They now name the
  section and omit the pages.
- **When documenting an OCR miss, name the phrase WITHOUT quotation marks.** `verify_citations.py`
  treats any quoted span as a probe, so quoting a phrase in order to say it *cannot* be found
  makes the checker adopt an unfindable probe and condemn the surrounding citations. Cost two
  UNCHECKED rows on `L-3-3-1`'s first run.
- **Five OCR traps in A**: `Klenow` reads as `kienow` (the word is not in A's text layer at all),
  arrows vanish into an unmapped replacement character, roman `III` reads as `ill`, primes gain
  a stray space (`3' -hydroxyl`), and **the word SUMMARY can break apart** — A p.213 reads
  `sum ma ry 6.4`, so a probe for that word plus the section number scores 0 hits on the page
  that carries it (§9g). **Choose quotes with no prime, no arrow, no subscript and no roman
  numeral, and locate a SUMMARY by its section title rather than by the word.**

**The lesson, now confirmed three times: an `ELSEWHERE` verdict is a hypothesis, not a verdict.**
Open the page before you edit a citation. Nine of the eleven ELSEWHEREs seen across these nodes
were the checker's fault, not the data's.

---

## Where things stand

| | |
|---|---|
| Czech layer | 207 nodes, ch1–10, complete. **Never audited** — see "what to ask" below |
| Lehninger depth layer | **20 nodes**: `L-1-3-1` `L-2-2-1` `L-3-3-1` `L-3-4-1` `L-5-1-1` `L-6-4-1` `L-8-2-1` `L-8-3-1` `L-11-2-1` `L-11-3-1` `L-16-2-1` `L-17-2-1` `L-19-1-1` `L-19-2-1` `L-21-1-1` `L-22-3-1` `L-23-2-1` `L-23-3-1` `L-25-1-1` `L-26-2-1`. `leh_ch3.js` holds two nodes; chapters 8, 11, 19 and 23 each have two, split across an `a`/`b` file pair |
| `topicKey`s | **63** distinct over **228** nodes (207 cz + 20 lehninger + 1 entity), counted from the app data 2026-08-07. **Exactly 18 keys join more than one source**, which is the whole point of `pro`: `amino-acid-derived-molecules` `amino-acids` `bioenergetics-basics` `citric-acid-cycle` `dna-replication` `enzyme-mechanism` `fatty-acid-biosynthesis` `fatty-acid-oxidation` `hormone-structure-and-action` `membrane-architecture` `membrane-transport` `nucleotides` `oxygen-binding-proteins` `protein-primary-structure` `respiratory-chain` `tissue-specific-metabolism` `transcription` `working-with-proteins`. `amino-acids` is the only one joining **all three** sources — Czech, Lehninger and the entity card. `nucleic-acid-chemistry` is deliberately **not** among them — `L-8-3-1` is Lehninger-only. The key count did **not** move when `L-6-4-1`, `L-2-2-1`, `L-8-2-1`, `L-26-2-1` or `L-23-3-1` was added, which is the point of §9g: they reused a key instead of making one |
| Entity cards | 1 (`E-tryptophan`). The headline feature, still barely started — archive §4, §12 |
| UI | Done. Two books render, sidebar **By book / By topic** toggle, "Same topic" strip, `lehNotes` blocks. Nothing more needs building |
| Live site | https://sumuxie.github.io/bio-state-exam/biochemie_pro/ |

**The remaining work is content, not plumbing.**

## ✅ Rank 3 (§6.4) is decided AND written — `L-6-4-1` (2026-08-07)

**`L-6-4-1` took `topicKey: "enzyme-mechanism"` and joins Czech `3-6`. Nothing was re-keyed,
nothing created, no `manual_note` needed — so `step4_topickeys.py` cannot revert it.** The node
is in `biochemie_pro/data/leh_ch6.js`, wired into `index.html`, 16 citation rows all OK, and it
carries the **ninth `lehNote`** — a `conflict` on `3-6`, because the xylose experiment disproves
that node's closing claim. Decision in archive **§9g**, the node itself in **§13p**; the short
version of the decision:

- §6.4 is a *secondary* mapping of Czech §3.6 (`6.2,6.4`), so §9c's look-up returns no key. Rank
  1's fix — create a key, move the node — does **not** apply, because the key that already exists
  is accurate: `3-6` is literally *Mechanismus působení enzymů*, "Mechanism of enzyme action".
- The §9e check passes cleanly. `enzyme-mechanism` holds exactly one node, `3-6`, and it is
  substantive rather than a stub — and it teaches covalent catalysis *through chymotrypsin*,
  which is §6.4's own first subheading.
- The worked examples are scattered exactly as in §13m, and by that ruling **none of those nodes
  move**: `3-2` has the metal-ion roles, `5-1` the serine proteases and the chymotrypsinogen
  cascade, `6-1-1` hexokinase as energetic coupling, `7-8-1` and `7-8-3` hexokinase and enolase
  as glycolytic steps. Cross-reference them by hand inside the node.
- Already measured, so do not re-derive: **§6.4 = A pp. 203–213, B pp. 823–852**, verified at
  both ends; the five subheadings and the A page each starts on; SUMMARY 6.4 verbatim; and the
  fact that the Czech layer has **0 hits** for transition state, penicillin, HIV protease and
  lysozyme, so those are genuine gaps. **Lysozyme is not in §6.4 of the 8th edition** — that is
  an earlier edition's line-up.
- ⚠️ **§5's organic-chemistry rule bites harder here than anywhere yet** (acyl-enzyme, oxyanion
  hole, tetrahedral intermediates). Anchor every idea on something bench-visible: burst kinetics,
  the pH-rate profile in Fig. 6-26 on A p.205, hexokinase closing over glucose, penicillin as a
  drug that works because of a mechanism.

## ✅ Rank 8 (§16.2) is decided AND written — `L-16-2-1`, `citric-acid-cycle` (2026-08-07)

**`L-16-2-1` took a NEW key `citric-acid-cycle`; `6-2-2-1/2/3` were moved into it and
`6-2-2-4` to the existing `intermediary-metabolism-hub`, leaving `acetyl-coa-production` empty by
design.** The node is in `biochemie_pro/data/leh_ch16.js`, wired into `index.html`, and carries the
**tenth `lehNote`** — a `conflict` on `6-2-2-3`, because Lehninger's ATP total for glucose is 30–32
against the Czech book's 38. Decision in archive **§9h**, node in **§13q**. Unlike §9g this DID cost hand edits — ⚠️ **four of
them, and `step4_topickeys.py` would silently revert all four**; both `topickey_*.json` carry a
`manual_note`.

Why: Czech §6.2.2 maps to `16.1,16.2,16.4`, so the key came from the primary §16.1 and was named
`acetyl-coa-production` — then held four nodes **none of which teaches acetyl-CoA production**,
while the node that does (`7-8-5`, the PDH complex) sits correctly under `fates-of-pyruvate`. That
is rank 1's failure mode and rank 9's at once. `7-8-5` was deliberately **not** moved, so a future
§16.1 node (rank 45) should reuse `fates-of-pyruvate` per §9g rather than revive the empty key.

Already measured, so the writing session need not re-derive: **§16.2 = A pp.578–589**, verified at
both ends; both first subheadings are on A p.580; the first subheading **cannot be probed in
full** (use a fragment); and the Czech coverage of the cycle is already **strong**, so this node
should be narrower than §6.4's — the depth is in the chemical logic, the prochirality of citrate,
and the modern regulation material, not in re-listing the eight steps.

## ✅ Rank 10 (§19.2) is decided AND written — `L-19-2-1` (2026-08-07)

**`L-19-2-1` took `topicKey: "respiratory-chain"` and joins Czech `6-2-4-1` … `6-2-4-5`, sitting
alongside `L-19-1-1` which was already there. Nothing created, nothing moved, no `manual_note`.**
The §9g pattern a second time, and cleaner — the key already joins both books. The node is in
`biochemie_pro/data/leh_ch19b.js` (chapter 19's SECOND file — `leh_ch19.js` was left untouched),
19 citation rows, no new `lehNote`. Decision **§9i**, node **§13r**.
Splitting `6-2-4-5` off into an `atp-synthesis` key was considered and rejected: unlike §9h's case
the key describes its nodes well, and a reader on `6-2-4-5` currently sees **both** depth nodes,
which is the right pairing for a chemiosmotic answer.

⚠️ **Two measured warnings for whoever writes it.** §19.2 is **A pp.674–686, NOT the 675–686 the
TOC gives** — the heading sits on p.674 below SUMMARY 19.1, the second interpolated range caught
wrong at its start after §25.1. And **A p.674's OCR is unusually bad** (`gi.emiosmotic`,
`jeleterious`, `1nderstanding`, `3ynthesis`, `fl.ow` on one page) — do not build probes from it.
A third SUMMARY-break variant lives there too: `summa ry 19. 1`, with the section number split.

## ✅ Rank 11 (§11.2) is decided AND written — `L-11-2-1` (2026-08-07)

**`L-11-2-1` took `topicKey: "membrane-architecture"` and joins Czech `8-5`, `8-5-1`, `8-5-2-1`,
`8-5-2-2`, `8-5-2-3`.** Third instance of the §9g pattern: `8-5-2-1` already lists fluidity and
flip-flop, `8-5-2-2` already lists lateral/rotational protein movement — §11.2's first three
subheadings, named almost word for word inside a node titled "structure". Archive **§9j**, node
**§13s**. The node is in `biochemie_pro/data/leh_ch11b.js` (chapter 11's second file, alongside
`leh_ch11.js`'s `L-11-3-1`), 20 citation rows, no new `lehNote` needed. What is genuinely new:
lipid rafts, caveolae, membrane curvature and the SNARE fusion machinery have no Czech counterpart
at all.

⚠️ One ELSEWHERE row surfaced on the first citation run — the documented false-positive shape from
§13m: two figure labels named together, and the checker matched the SECOND label's own page
instead of the body content's page (both were genuinely on A p.382; `FIGURE 11-25`'s own caption
just happens to sit on p.383). Fixed by giving each figure its own explicit page in the prose
rather than leaving two labels before one citation. Confirms §13m's warning is still live: treat
ELSEWHERE as a hypothesis, open the page first.

### 🏁 Next pick: the top-20 queue is EXHAUSTED — the entity cards are now the obvious choice

`lehninger_index/depth_queue.tsv` ranks Lehninger sections by how much more Lehninger says than
the Czech book. **All twenty of the top 20 are now written:**

~~1 §5.1~~ · ~~2 §8.3~~ · ~~3 §6.4~~ · ~~4 §11.3~~ · ~~5 §21.1~~ ·
~~6 §19.1~~ · ~~7 §23.2~~ ·
~~8 §16.2~~ · ~~9 §17.2~~ · ~~10 §19.2~~ · ~~11 §11.2~~ · ~~12 §1.3~~ ·
~~13 §2.2~~ · ~~14 §3.4~~ · ~~15 §8.2~~ ·
~~16 §26.2~~ · ~~17 §22.3~~ · ~~18 §3.3~~ · ~~19 §23.3~~ · ~~20 §25.1~~

### ⚠️⚠️ PHOTOSYNTHESIS IS THE HIGHEST-PRIORITY UNWRITTEN CONTENT — and the ratio hides it

**This is the only place in the whole project where a REAL EXAM QUESTION is on record**, and it
should outrank the queue order for any content decision. §3 records that **a classmate was examined
on photosynthesis**, and that the Chinese notes omit it entirely — the observation that established
the "notes are a comprehension aid, never scope" rule in the first place.

**Not one photosynthesis section has been written.** All four sit below rank 20 and are therefore
invisible to anyone reading the top-20 list: **§20.2** Photochemical Reaction Centers (rank 32),
**§20.3** Evolution of a Universal Mechanism for ATP Synthesis (rank 58), **§20.4** CO₂-Assimilation
Reactions (rank 54), **§20.6** Biosynthesis of Starch, Sucrose, and Cellulose (rank 39). Their
ratios (2.0–3.0) are unremarkable, which is exactly the point: **the ratio measures depth
differential, not exam importance, and here the two disagree.**

### 🏁 Next pick: the top-20 queue is EXHAUSTED — three live options

So the next session picks between three:

1. **Photosynthesis (§20.2 / §20.4 first).** The only option backed by evidence of a real exam
   question. See the block immediately above.
2. **The entity cards** — archive §4, §12. This is `pro`'s *headline feature*. §12 contains a
   finished tryptophan dossier that was the template for `E-tryptophan`; a second card
   (`E-histidine`) followed on 2026-08-07, see §12e. This is the thing **the user themselves named
   as the point of the app**.
3. **A depth node from outside the top 20.** ⚠️ **Read §9a first, and read the ratio bands below**
   before picking one, because most of what remains is worth less than it looks.

#### What is actually left, measured 2026-08-07 — the queue is smaller than 65

`depth_queue.tsv` holds 85 sections; 20 are written, so 65 remain **on paper**. By ratio band:
**13 at ≥3.0, 25 at 2.0–3.0, 12 at 1.5–2.0, 10 at 1.0–1.5, and 5 BELOW 1.0** — that last group
being sections where **Lehninger says no more than the Czech book already does.** Writing anything
under ~1.5 adds nothing, so the real pool is **about 38**, not 65.

Those 38 fall into three groups, and only one is worth much:

- **Core metabolism the Czech book already covers well** — §14.1 glycolysis, §14.4 gluconeogenesis,
  §16.1 acetyl-CoA, §16.4 citric-acid-cycle regulation, §15.2 glycogen, §19.3 oxidative
  phosphorylation regulation. Czech-level coverage already exists; Lehninger only deepens it.
  **Lowest marginal value for an exam that follows the Czech syllabus.**
- **Whole subjects the Czech book genuinely lacks** — §27.1 the genetic code, §27.2 protein
  synthesis, §28.1/§28.2 gene regulation, §18.2 the urea cycle, §18.3 amino acid degradation, and
  **the photosynthesis group above**. **This is where the real gaps are.**
- **Introductory material** — §1.2, §1.4, §1.5, §3.2, §8.1. Skip.

⚠️ **`depth_queue.tsv`'s ratio is NOT an importance score, and this trips people up.** It is
Lehninger pages ÷ Czech pages allocated — that is, *how much more Lehninger says*. A high ratio can
mean the Czech book is thin on something important, **or** that it is thin because the department
does not examine it, and **the number cannot tell those apart.** §9a says this; it is repeated here
because a session presented the top-20 list as a to-do queue and the user reasonably read the
remaining ranks as outstanding work. What sets importance is a classmate's report of a real exam
question, then the Czech book's own scope.

Either way the `topicKey` decision comes first for any depth node — see the failure modes below.
**The §9g outcome (reuse the primary's key, change nothing) has now fired SEVEN times running**:
rank 3 §9g, rank 10 §9i, rank 11 §9j, rank 13 §9k, rank 15 §9l, rank 16 §9m, rank 19 §9n. **Only
rank 8 (§9h) has ever needed a key created and Czech nodes moved**, and that was because the
inherited key described none of them. Test §9g first, then §13m's third outcome, then the two
failure modes.

~~3. Clear the 34 UNCHECKED citation rows.~~ **Done 2026-08-07 (§13o) — and kept at zero since;
the audit now stands at 408 OK / 0 ELSEWHERE / 0 UNCHECKED.** Keep it there: close any new
UNCHECKED row in the same commit that creates it. §13w records the three mechanical shapes that
produce an UNCHECKED row and the cheap fix for each — worth reading before writing a node, because
it turned a 28-row first run into a zero-row second run in one pass.

---

## ⚠️ Why sessions keep getting cut off — measured 2026-08-07, and it is NOT context

**Sessions are being killed by the API's AUP safeguard classifier, not by running out of
context.** Diagnosed by reading the session transcripts in
`~/.claude/projects/c--Users-Admin-Documents-trae-projects-recombinants-trae-independant/`.
All 8 of the most recent sessions tripped it at least once; 3 were killed outright.

**The proof that it is not running out of context**: the trip point is not the context limit. Two
sessions tripped at **entry 12 of 775 and 12 of 877** — right after the first `Read`, before any
work. Others tripped at 140/584, 403/900, 610/611, 652/658, 669/725. Sessions died at 2.3–3.7 MB
while 25 earlier sessions reached 4–5.2 MB without trouble. Opus 5, Sonnet 5 and Opus 5 (1M) were
all named in the errors, so **switching models does not help**.

⚠️ **Refinement measured 2026-08-07, and it revises the sentence above.** Within a single session
the trips are **not** uniformly distributed — they get denser as the session runs. The session
that wrote §2.2, §8.2 and §26.2 tripped at 1.31 MB, 2.03, 2.06, 2.41, 2.48, 2.57 and 2.76 MB of
transcript: one trip per completed node early on, then **four trips inside eleven minutes** while
writing the third. So the earlier "the trip point is random" is right *across* sessions and wrong
*within* one. The practical consequence is the "one node per session" rule below, which is now
supported rather than merely plausible.

### ⛔ The "toxin vocabulary" hypothesis is DISPROVEN — do not act on it, and do not re-derive it

An earlier draft of this section guessed the trigger was this project's poison-and-mechanism
vocabulary, and advised picking "chemistry-clean" sections to get a quiet run. **That advice was
tested on 2026-08-07 and it does not work.** Recording the disproof so nobody spends another
session optimising against the wrong variable:

- The session that wrote §2.2 (ionization of water — *pure physical chemistry, zero toxin
  content*), §8.2 (DNA/RNA structure) and §26.2 (RNA processing) **tripped the classifier 8
  times.** Three consecutively "clean" sections did not buy a quiet run.
- Measured over `biochemie_pro/data/`, those three new files carry **39 of 984 total
  trigger-vocabulary hits — 4 %.** The bulk sits in `ch4.js` (159), `ch8.js` (135) and `ch5.js`
  (101), all written months ago without incident.
- **Several trips carried no biochemistry at all.** One fired immediately after a `Read` of a
  JSON key-lookup result; another fired while emitting a plain Chinese summary paragraph.
- **Switching models does not help, now confirmed twice.** This session tripped 4× on Opus 5,
  then switched to Sonnet 5 and tripped 4 more times.

**What the data actually shows** is frequency rising with session length — the last 4 of 8 trips
came within an 11-minute window at 2.4–2.8 MB of accumulated transcript — with no relationship to
the content of the request that happens to be in flight. Treat it as an environmental hazard with
a rising hazard rate, not as something the writing can be steered around.

**What actually works — this is the operational part, and it is unchanged:**

- **One node per session, then stop.** The reason is the rising hazard rate, not the vocabulary.
- **Commit and push after every single node.** This is the whole defence, and it has now been
  vindicated repeatedly: across every session killed mid-flow, **nothing has ever been lost**,
  because each finished node was already committed.
- **An interruption is usually recoverable — just say `继续`.** In this session all 8 trips were
  recovered that way and the session still finished three complete nodes.
- **A large `Write` may be worth splitting.** The single case where the *same* action tripped
  twice in a row was a ~55 KB `Write` of a new node file. Weak evidence, one occurrence — but if a
  big file write trips twice, write it in two passes rather than retrying it whole a third time.
- ⚠️ **After any interruption mid-write, check the file is intact before continuing** — run
  `python -c "import esprima; esprima.parseScript(open(PATH,encoding='utf-8').read())"`. One trip
  in this session truncated a `Write` in the middle of a string literal. It was caught, but only
  because the parse was checked.

## The rules that actually bite

**1. No orbitals, no resonance structures.** The user: *"我的有机化学几乎说是没有根基…一定不要讲
完全化学，我听不懂的。"* Every chemical idea must land on something visible or measurable at a
bench. Not "aromaticity is a delocalised π system satisfying 4n+2" but "a benzene ring is flat and
carries no charge, therefore it absorbs UV at 280 nm, therefore it slides between DNA bases,
therefore it hides inside the protein." The load is concentrated in Czech ch7 (sugars), ch8
(lipids) and §2.1.3 — archive §5, §5a. **It is a "write it this way" flag, not an "avoid" flag**;
two nodes hit it and both worked.

**2. Never trust a page citation you did not verify.** Three of six citations in the first entity
card were wrong, one by 21 pages. Run
`python lehninger_index/scripts/verify_citations.py` after writing anything, and hand-check every
`UNCHECKED` row. Archive §16.

**3. Read Lehninger in B, cite pages in A.** Both PDFs have text layers so the same string locates
in both. **A's printed page = A's pdf page − 36.** A's own text layer is OCR of a scan
(`dehy:Jrogenase`), and it breaks subscripts — `O₂` reads as `0 2`, `nH` as `n8` — so a probe
containing a subscript fails on a page where the sentence is verbatim present.
`lehninger_index/scripts/locate.py` does the searching.

**4. B's text layer has a ligature bug, and it produces silent false negatives.** `ff fi fl ffi
ffl` are single glyphs on 66 % of pages; `ft` renders as `×` or `ƞ` on 19 %. `lipid raft`, `cleft`
and `frameshift` all read as **0 hits** before this was fixed. `locate.py` now de-ligatures on
every search and self-heals its cache — but **any "0 hits" claim from a session before 2026-08-06
is unverified.** Archive §6.

**5. Do not port Lehninger page by page.** That is ~680 nodes and produces something worse than
the textbook. Work topic-first: decide the depth a topic needs, then take the two or three
Lehninger sections that supply it. Gaps are the intended outcome — the validator was specifically
changed so Lehninger nodes are exempt from the Czech page-coverage check, because enforcing
coverage there would make someone pad the data. Archive §4, §9d.

**6. `chapter` is book-local.** `leh_ch8.js` is Lehninger's ch8 (nucleic acids); `ch8.js` is the
Czech book's ch8 (lipids). Unrelated. Never compare `chapter` or `pages` across books.

---

## How to write a depth node

1. **Look up the `topicKey`** for your Lehninger section in
   `lehninger_index/topickey_assignment.json`. It is not a judgement call — the key already exists
   and the join happens by itself.
2. **Run the two-minute check** (archive §9e). List the Czech nodes that key actually holds and
   confirm they are the ones *teaching* the subject. This has failed twice, in two different ways:
   - **rank 9's way** — the key held a thin summary node while the substantive Czech nodes sat
     under a different key. Fix: move the Czech nodes, leave a `manual_note` in **both**
     `topickey_*.json` files. Archive §9e.
   - **rank 2's way** — the Czech node holding the mapping did not teach the subject at all, and no
     other node did either. Fix: there is nothing to join, so write it Lehninger-only with an empty
     `nodes: []`. Archive §2e.
   - **rank 3's way** — the check passes and the answer is to change nothing, because the Czech
     section maps to two Lehninger sections that deepen the same node, so the primary's key already
     fits the one you are writing. Archive §9g.

   **⚠️ `step4_topickeys.py` regenerates these files from `master_map.tsv` and would silently
   revert every hand edit.** That is what the `manual_note` fields are defending against.
3. **Read the whole Lehninger section in B**, every subheading plus any Box, end to end.
4. **Write the node** in `biochemie_pro/data/leh_chN.js`, following `L-5-1-1` in `leh_ch5.js` as
   the template (archive §13j explains its choices). State plainly in `coverageNote` **what the
   Czech node already has**, so nothing is presented as new when it is not.
5. **Add `lehNotes` on the Czech side** only where revising from the Czech node alone would
   *mislead in an exam* — `conflict`, `gap` or `cz-stronger`. Fourteen exist, on twelve nodes. **Keep them rare**; a
   warning on every node is a warning nobody reads. Quote the book, never yourself. Archive §9f.
6. **Wire the file into `biochemie_pro/index.html`'s script tags.** The validator checks that
   `index.html` and `data/` agree, so a file nobody loads is a failure, not a silent pass.
7. **Verify, validate, document, commit:**
   - `python lehninger_index/scripts/verify_citations.py` — then **hand-check every `UNCHECKED`
     row** (`no searchable phrase` just means the checker had no probe), and give each one a short
     verbatim book quote so it self-verifies next time. Treat `ELSEWHERE` as a hypothesis and open
     the page before editing anything.
   - `python lehninger_index/scripts/step5_check.py` — **there is no `node` on this machine**, so
     this Python re-implementation is how `tools/validate-data.js` gets run. It must end
     `RESULT: all checks pass`, negative tests included.
   - Write a `§13x` section in the archive, and update the archive's `Start here`, `§9c`'s table,
     and the node count in this file.
   - `python lehninger_index/scripts/audit_handoff.py` — **run this LAST, after the doc edits.**
     It checks the handoffs for malformed tables, truncated paragraphs and unbalanced markup, and
     since 2026-08-07 it also **recomputes the live topic / node / topicKey counts and fails if
     the figures in this file disagree**, plus flags any frozen count written as what a run
     "currently prints". It must end `TOTAL: 3` or fewer — the 3 standing findings are cosmetic
     and pre-existing (one strikethrough with unbalanced `**`, one bullet with no full stop, and
     §16's subsections being ordered a/c/b). Anything above 3 is yours.
   - Commit.

---

## What to ask the user

1. **Any classmate report of a real exam question.** Outranks everything in either handoff. One has
   already overturned a plan.
2. **Has the Czech layer ever been audited?** Still open, and it is the *primary* revision surface
   (the user confirmed on 2026-08-07 that they revise from both layers, Czech first). 207 nodes
   written in an earlier phase, unchecked since. ~~One error is sitting in the open right now:
   node `2-2-6`'s `cnNote`.~~ **That one is CLOSED** — `2-2-6` now reads `topic: "八"`,
   `status: "mapped"`, verified against the notes' own p.41 heading (§13n). It was the only known
   error, and it was found by accident rather than by an audit, which is the actual point: **nobody
   has ever looked systematically.** Archive §2c, §6a.
3. **Are the fourteen `lehNotes` right in tone and length?** They are the template for every later
   one and the user has not seen them rendered. Two are worth looking at first: `4-1-3-1`, the
   only one correcting a plain factual count (Czech says three DNA polymerases, Lehninger says
   five), and `8-4-4-3`, the only one saying the Czech node is not wrong but *half the picture*
   (ketone bodies as pathology only, never as the fuel that keeps a starving brain alive).

---

## Grep index for `HANDOFF_LEHNINGER.md`

Search for the `## N.` or `### Na.` heading, read that section only.

| § | what is in it |
|---|---|
| 0 | deploy state, and the page-scan exposure still readable from git history — needs an explicit decision before any force push |
| 1, 2 | file locations; measured facts about the three Lehninger PDFs (A/B/C) |
| 3 | **the premise** — Czech = scope, Lehninger = depth, notes = aid |
| 4 | what `pro` is for; the integration-card idea |
| 5, 5a | the organic-chemistry rule, and where the load actually sits |
| 6, 6a | what Lehninger does and does not contain (measured); the ligature bug; what the Chinese notes contain |
| 7 | schema: `book`, `topicKey`, `lehNotes` |
| 8 | three decisions settled by the user — do not reopen |
| 9a | what `depth_queue.tsv`'s ratio means, and what it does not |
| 9b | the 32 sections no Czech node claims, and the user's ruling on each |
| 9c | **how `topicKey` was chosen** + the table of ready-to-write ranks |
| 9d | what the validator enforces now |
| 9e | **the two-minute check** and the first `topicKey` correction |
| 9g | **rank 3 (§6.4) decided** — reuse the primary's key, re-key nothing; plus §6.4's verified page range, subheadings, SUMMARY and the four things the Czech layer lacks |
| 9h | **rank 8 (§16.2) decided** — a new key `citric-acid-cycle`, four Czech nodes moved, `acetyl-coa-production` emptied; plus §16.2's verified page range and what the Czech nodes already cover |
| 9j | **rank 11 (§11.2) decided** — reuse `membrane-architecture`; what fluidity and flip-flop already teach vs. the new material (rafts, fusion) |
| 9i | **rank 10 (§19.2) decided** — reuse `respiratory-chain`; plus the corrected page range and A p.674's bad OCR |
| 9k, 9k-i | **rank 13 (§2.2) decided** — reuse `amino-acids`; why a `water-and-ph` key was rejected; §2.2's verified pages, subheadings and glycine's two pKa values; and the Czech book's own "quaternary ammonium" error, checked against the Czech source before the `lehNote` was written |
| 9l, 9l-i | **rank 15 (§8.2) decided** — reuse `nucleotides`; why two other Czech nodes with §8.2's subject in their titles keep their own keys; and the two Czech/Lehninger conflicts (helix stability, A- vs Z-DNA in cells) |
| 13u | **`L-8-2-1`** — the run that proves the pre-test method (21 of 54 quotes one page out); OCR damage is per-region not per-page; and what to add when the Czech node is already good |
| 9m | **rank 16 (§26.2) decided** — reuse `transcription`; why a Czech node whose OWN subject is gene regulation is not rank 9's failure mode even though it teaches capping/splicing; and two citation-checker bugs found by a broken parse (prime marks in a quote, double quotes inside a double-quoted string) |
| 9n | **rank 19 (§23.3) decided** — reuse `hormone-structure-and-action`; the measured proof that no Czech node teaches fuel-metabolism regulation (obesity/leptin/glycaemia all 0 hits); and the verified page range, where an `interpolated` TOC range turned out CORRECT at both ends |
| 13w | **`L-23-3-1`** — the β cell that measures glucose by metabolising it; why closing a K⁺ channel depolarises; the channel as drug target and disease gene; the pre-test method's third run (70 quotes, zero page errors); and **the three mechanical shapes that produce an UNCHECKED row, with the fix for each** |
| 13v | **`L-26-2-1`** — RNA as its own enzyme (Cech 1982); the actual splicing chemistry; nusinersen/SMA as the worked medical example; and the two bugs from §9m in full |
| 13t | **`L-2-2-1`** — the acid-base floor under a titration curve the Czech book draws without explaining; **five OCR traps on A pp.54–59**, one of them a new shape (a figure label with a middle dot); and **the method worth copying — test every quote against A before writing the prose** |
| 13r | **`L-19-2-1`** — the evidence behind a claim the Czech node already makes, and where the non-integral ATP yield comes from |
| 13s | **`L-11-2-1`** — the mechanism behind three facts a thin Czech node states as conclusions, plus lipid rafts and SNARE fusion, which the Czech layer lacks entirely |
| 13q | **`L-16-2-1`** — what a strong Czech chapter leaves out: the chemical argument, the thermodynamic thread, and the ATP-total conflict |
| 9f | `lehNotes` — the format, the bar, the six that exist |
| 12 | the tryptophan entity card — a finished dossier, nothing written yet |
| 13–13o | one per Lehninger node, then two method sections. `13j` (`L-5-1-1`) is the best template for how to *write* a node; `13l` (`L-25-1-1`) for how to *verify* one — page ranges, B-to-A drift, OCR traps; `13m` (`L-23-2-1`) for the two checker bugs that inflated every audit before 2026-08-07; **`13o` for clearing the citation backlog to zero and the three probe constraints that silently drop a quote** |
| 14 | working locally: what is local-only, how to run and check with no `node` |
| 15, 16, 16c | figures; **citation verification**; caption-vs-cross-reference ambiguity |
