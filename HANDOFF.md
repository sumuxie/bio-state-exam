# Handoff — extending this project

> **A second handoff file now exists: `HANDOFF_LEHNINGER.md`.** It covers the next phase —
> bringing Lehninger 8 in as the teacher-designated review syllabus — and it carries three
> things this file does not: the measured facts about the three Lehninger PDFs, the strategy
> decided for using them, and the user's 2026-08-06 directive to **freeze the current site as
> `biochemie_basic` and do all further work on a copy called `biochemie_pro`**. Read it before
> touching anything. It also records that **chapters 9 and 10 are finished but uncommitted** in
> this working tree — do not `git clean` or `git reset --hard` until that is resolved.

Read this before touching `data/`, `app.js`, `style.css`, or `.github/workflows/pages.yml`.
Written for whoever (human or another Claude session) picks this project up cold — to add
chapters, add a second textbook, or extend the pronunciation/bionic-reading/flashcard
features. `PAIRING.md` covers *why* the Czech textbook and the Chinese notes can't be
aligned page-for-page; this file covers *how the codebase works*, the conventions that came
out of building it, and — this matters — **this file did not exist before 2026-08-04**. An
earlier handoff was passed to a session as injected context only, never committed as a file,
and consequently nobody could `git grep` it, nothing forced it to stay in sync with what
`main` actually contained, and a real feature (see §5) silently regressed as a result. Keep
this file itself committed and current — that is the entire point of it existing.

## 0. Current state as of this handoff (updated 2026-08-06)

> **2026-08-13, `biochemie_pro` only — see §12 before touching its `app.js`, `index.html` or
> `data/`.** Three things are new: a `bank` question layer that attaches extra questions to a
> node by id from separate `data/bank_*.js` files (rules in `BANK_SPEC.md`), per-option
> annotations (`optionRefs`/`optionNotes`) that say what each wrong option is really about,
> and a persistent wrong-answer book (❌ tab). Two headless-browser tools now exist in
> `tools/` because this machine still has no `node`. §12e records what the drafting pass
> found and did NOT fix — chapter 8's `mustKnow` fields are misaligned and that is the most
> visible wrong text in the app.

- **Chapters 1–6 done and live on `main`**: 1 General principles, 2 Amino acids/proteins,
  3 Enzymes, 4 Nucleic acids/protein synthesis, 5 Further protein metabolism/amino acid
  interconversions, 6 Bioenergetika (bioenergetics, incl. the citric acid cycle and the
  respiratory chain/oxidative phosphorylation). 72 topic nodes total. Pushed and merged to
  `main` directly (see the two merge commits around `12c2d9d`/`a4d7499`) — GitHub Actions
  should have deployed it live within a few minutes of that push.
- **Chapter 7 (Sacharidy, pp.148–175): CONTENT IS NOW COMPLETE, INDEPENDENT VERIFICATION IS
  NOT.** `data/ch7.js` has all 42 nodes (`7-1` through `7-12-2`), every one of the 28 pages
  148–175 is covered by at least one node's `pages` field (checked programmatically, no
  gaps), and it validates cleanly against the CI-equivalent browser check (114 total topics
  site-wide, zero schema problems, zero duplicate ids). It got there in two drafting waves
  across two separate turns of this session (see the spend-limit notes below for why) — first
  wave: pp.148–155 (`7-1` through `7-3-2`, 15 nodes); second wave: pp.155(cont.)–175 (`7-4`
  through `7-12-2`, 27 more nodes), including glycolysis split across five nodes (`7-8-1`
  through `7-8-5`) and the pentose phosphate pathway across two (`7-7-1`, `7-7-2`). Two
  genuine page-boundary seams were caught and patched directly (pattern from pipeline step 5):
  node `7-2-6` (Glykosidy) originally stopped mid-sentence at the bottom of p.153 and was
  extended to include p.154's continuation (O-/N-glycoside distinction, aglykon, glucuronoside
  detoxification note); node `7-9` (Glukoneogeneze intro) originally stopped at p.169 and was
  extended to include two paragraphs that open p.170 before the `7.9.1` heading (the
  three-high-energy-phosphates tally and the muscle/liver Cori-cycle explanation, which the
  book describes without ever using that name).
  - **What's still outstanding: the independent verification pass (pipeline step 8) has NOT
    been completed for this chapter.** Three consecutive attempts to dispatch verification
    agents this session failed for two different infrastructure reasons (see the spend-limit
    note below) — one attempt got zero output from two of three agents, a later single-agent
    retry failed on an SSL certificate error partway through. A partial MANUAL spot-check (no
    agent — read pages 165 and cross-checked nodes `7-8-1`/`7-8-2` directly) found the content
    accurate against the scan (enzyme names, mechanism steps, and the exergonic/substrate-
    level-phosphorylation claims all matched p.165's figure and prose exactly), but this
    covers only 2 of 42 nodes. **Do not treat chapter 7 as audited to the same standard as
    chapters 1–6 until a real verification pass covers the rest** — pentose phosphate pathway,
    the other four glycolysis nodes, gluconeogenesis, and all of §7.4–7.6 and §7.9.1–7.12 are
    unverified. Page images for the whole chapter remain at `extracted_full_ch7/page_148.png`
    through `page_175.png` — no re-extraction needed to run this pass.
  - `data/ch7.js`'s own header comment reflects this: content-complete, verification pending.
- **Chapter 8 (Lipidy, pp.176–201): CONTENT IS COMPLETE (40 nodes, `8-1` through `8-5-3-3`),
  INDEPENDENT VERIFICATION HAS NOT BEEN RUN.** Wired into `index.html`/`app.js`/`pages.yml`
  the same way as every prior chapter. All 26 pages covered with no gaps (checked
  programmatically); site-wide total is now 154 topics with zero schema problems. Drafted in
  ONE wave this time — 4 parallel agents (pp.176–179, 180–186, 187–192, 193–201), all 4
  succeeded cleanly with no infra failures (contrast chapter 7, which needed two waves across
  two turns because of spend-limit hits — infra reliability appears to vary turn-to-turn, not
  something to plan around). One id collision needed reconciling by hand: the pp.180–186
  agent didn't know what section-8.2.3 id suffix the pp.176–179 agent had already used, so it
  picked placeholder ids (`8-2-3-9/10/11`) explicitly flagged for renumbering — renamed to
  `8-2-3-2/3/4` before merging. **If you dispatch adjacent-range agents in parallel again,
  either tell each one the previous range's actual last id (impossible before that agent
  finishes) or just accept this renumbering step as routine** — it's cheap to fix after the
  fact, cheaper than serializing the dispatch to avoid it.
  - **One genuine page-boundary content gap was found and patched** (not just an id
    collision): p.193's top half — the HMG-CoA-reductase paragraph, the Phase C
    (terpenoid-modification) description, and the squalene→lanosterol→cholesterol completion
    — fell between the biosynthesis agent (pp.187–192, which explicitly stopped at squalene
    and flagged Phase C as "on p.193, outside my range") and the breakdown agent (pp.193–201,
    which explicitly started at the "8.4" heading and didn't summarize what precedes it on the
    same page). Neither agent was wrong to stop where it did — this is exactly the kind of
    seam pipeline step 5 exists to catch. Patched by reading p.193 directly and adding node
    `8-3-9`. **When two agents' ranges meet mid-page, always check explicitly whether content
    right at that page number was actually claimed by either side, don't assume adjacency
    implies coverage.**
  - Independent verification (pipeline step 8) has not been attempted yet for chapter 8 —
    same outstanding item as chapter 7, now doubled. Page images remain at
    `extracted_full_ch8/page_176.png` through `page_201.png`.
  - Several book-internal issues were flagged by the drafting agents and preserved as-is with
    notes rather than silently corrected — worth checking first during verification: p.185's
    steran ring diagram lacks A/B/C/D ring letters that a later diagram (p.186) does use;
    p.188 prose spells "malonyl-CoA" as "matonyl-CoA" (typo, structural equation is
    unambiguous); p.188's acetyl-CoA-carboxylase equation specifies Mn²⁺, not the Mg²⁺ most
    general references give; p.191's own diagram routes the mevalonate pathway's first
    condensation "via malonyl-SCoA" with CO2 released, contradicting the simple
    thiolase-catalyzed Claisen condensation standard references describe for this step — this
    one in particular is flagged as a real, unresolved mechanism discrepancy worth a second
    look, not a typo; p.196's beta-oxidation diagram labels the thiolytic-cleavage enzyme
    "β-ketokinasa," which contradicts its own drawn (non-phosphate, non-ATP) chemistry —
    standard "thiolase" was used instead, flagged; Tab. 8.1 misspells "ethanolamin" as
    "etnanolamin"; p.179 prints cetyl alcohol as "C₁₁" (should be C16).
- **Chapter 9 (Fotosyntéza a další biosyntetické pochody fotoautotrofů, pp.202–217): CONTENT
  IS COMPLETE (27 nodes, `9-1` through `9-27`).** Written 2026-08-06. All 16 pages covered
  with no gaps (checked programmatically), balanced-bracket and required-key checks clean.
  Page images at `extracted_full_ch9/page_202.png` … `page_217.png`.
  - **Drafted WITHOUT agents** — every page was read directly and the nodes written in one
    pass, because this session was operating under an instruction not to dispatch subagents.
    That is a real difference from chapters 4–8 and it matters for the verification pass: no
    agent ever produced an independent structural self-report to cross-check against, so
    the *only* record of what is on each page is the `coverageNote` fields themselves. If
    you verify this chapter, verify against the scans, not against these notes.
  - **Four book-internal / book-vs-standard discrepancies were found and are flagged in the
    content rather than silently corrected** (see §8 for why): (a) node `9-20` — the book
    calls the third photorespiration enzyme *glykolátoxygenasa* (oxyGENase) in both its text
    and its Obr. 9.7 label, yet the reaction it draws is `glycolate + O₂ → glyoxylate +
    H₂O₂` with catalase mopping up, which is oxiDASE chemistry (standard name: glycolate
    oxidase); (b) node `9-21` — the book dates the Hatch & Slack C-4 discovery to **1970**,
    where standard references give 1966 for the original publication; (c) node `9-23` — the
    book's nitrogenase stoichiometry is 6 e⁻ / 6 ATP / no H₂ by-product, internally
    consistent with its own "1 ATP per electron transferred" statement but different from
    the modern N₂ + 8H⁺ + 8e⁻ + 16 ATP → 2NH₃ + H₂; (d) node `9-25` — the denitrification
    products are printed as (N₂O, N₂, **N₂H₂**), and diimide is not a recognised
    denitrification product. (a) and (c) are the two worth a second look during verification.
  - Two content points come from figures only and are *not* in the running text — worth
    checking first if a verifier flags them as unsupported: Obr. 9.8's carbonate dehydratase
    step (CO₂ → HCO₃⁻ before PEP-carboxylase) and its labelling of the decarboxylating malate
    dehydrogenase as the "jablečný enzym" (malic enzyme). Both are in node `9-22`.
  - `cnNote` for the whole chapter points at the Chinese notes' unnumbered 光合作用 topic,
    pp.197–203, with `status: "partial"` — that page range is still title-match-only per §11
    and has never actually been read. Node `9-27` (secondary metabolites) is `"pending"`:
    the notes have no topic covering it.
- **Chapter 10 (Vzájemné vztahy v intermediárním metabolismu a regulační mechanismy, incl.
  §10.3 Hormony, pp.218–228): CONTENT IS COMPLETE (26 nodes, `10-1` through `10-26`).**
  Written 2026-08-06, same single-pass no-agent method as chapter 9. All 11 pages covered
  with no gaps. Page images at `extracted_full_ch10/page_218.png` … `page_228.png`.
  - This is the **last chapter of the book** — p.228 ends with the icosanoid structures and
    the literature list follows outside the page range. Nothing remains to draft.
  - Structurally the chapter is three unequal parts and the node ids follow that: `10-1`…
    `10-11` are §10.1 (intermediary metabolism: the three-phase catabolism/anabolism schemes,
    the acetyl-CoA pool, carbohydrate/lipid/citrate-cycle interrelations), `10-12`…`10-16`
    are §10.2 (the eight regulatory mechanisms), `10-17`…`10-26` are §10.3 Hormony — which is
    half the chapter, including two nodes (`10-21`, `10-22`) that transcribe all 27 rows of
    Tab. 10.1 with all four columns.
  - **Watch out for two different four-part divisions in §10.3** that do NOT correspond one
    to one: four *mechanisms of hormone action* (adenylate cyclase, phosphoinositide,
    receptor tyrosine kinase, nuclear steroid/thyroid) and four *chemical classes* (steroid,
    amino-acid-derived, peptide/protein, icosanoid). The book announces "4 hlavní mechanismy"
    but never numbers them; the enumeration in node `10-18` is inferred from the text and is
    labelled as such. A verifier should not treat that inference as the book's own wording.
  - Book-internal items flagged rather than corrected: Obr. 10.1's caption is printed
    "Aceyl-CoA" (typo for Acetyl-CoA, confirmed by zoomed re-read, node `10-5`); the
    serotonin row of Tab. 10.1 has its ORGAN cell blank in the book (node `10-21`); the
    ketone-body sentence on p.220 names only acetoacetate and acetone, omitting
    β-hydroxybutyrate and compressing the acetone step (node `10-8`); the fatty-acid
    activation cost is given as "1 ATP", literally true but understating it since the
    reaction goes to AMP + PPᵢ (node `10-8`).
- **Wiring for BOTH chapters 9 and 10 is already done** (2026-08-06) in all three places §3
  step 2 lists: `index.html` has the two `<script>` tags, `app.js` has both new
  `CHAPTER_TITLES` entries and both `[1 … 10]` chapter-list literals updated, and
  `pages.yml`'s `validate` job requires both data files. Do not redo this.
- **Verification status after 2026-08-06 — read this before claiming any chapter is audited.**
  A PARTIAL verification pass was run this session, by hand, without agents. What it actually
  covered, precisely:
  - **Chapters 9 and 10: every quantitative and attribution claim was re-read against the
    scans**, by cropping the relevant passage out of the page PNG and upscaling it ~2× so the
    digits are unambiguous (script pattern in §9). Eleven items were checked and **all eleven
    matched the book exactly**: ΔG°′ = +2 867 kJ·mol⁻¹ (p.203); plastocyanin Mr 1–2 × 10⁴ /
    ~597 nm / E°′ 370 mV / Cu²⁺ (p.206); antenna ratio "Chl celkový : Chl v RC = cca 200"
    (p.207); E°′ O₂/H₂O = 820 mV and NADP⁺/NADPH = −320 mV plus the functional definitions of
    PS I and PS II (p.208); "V r. 1970 M. Hatch a C. Slack" (p.212); the nitrogenase scheme's
    6 e⁻ / 6 ATP / 6 H⁺ / 2 NH₃ and "1 ATP pro každý přenesený elektron" (p.215); "70 kg ATP"
    per 24 h and the mmol/l order of magnitude (p.219); the citrate-cycle tally 1 FADH₂
    (succinate→fumarate) + 3 NADH (isocitrate, α-oxoglutarate, malate) + 1 GTP (p.220); and
    every Mr value in the peptide/protein hormone paragraph (p.228). **The two flags in nodes
    `9-21` and `9-23` are therefore confirmed as accurate reports of what the book prints,
    not as transcription errors.**
  - **What this did NOT cover for chapters 9 and 10**: the prose, the summaries, the quiz
    explanations and the oral models were not re-read line by line by a second reader. A real
    step-8 pass is still owed on those. Treat the numbers as verified and the prose as not.
  - **Chapter 8: two of the previously-flagged items were re-checked and both confirmed.**
    p.196's β-oxidation scheme really does label the thiolytic-cleavage enzyme
    "β-ketokinasa" (step D), which contradicts its own non-phosphate chemistry — the earlier
    session's flag stands. p.191's mevalonate scheme really does annotate the first
    condensation with "+ CO₂" above the arrow and "via malonyl-SCoA" below it, releasing
    CoASH — so the discrepancy is real and can now be stated precisely: **the figure is
    internally coherent (it depicts the malonyl-CoA route) but it is not the thiolase-
    catalysed Claisen condensation that standard references give for acetoacetyl-CoA
    formation in the mevalonate pathway.** That is a substantive difference, not a typo, and
    it remains the most interesting open question in chapter 8. p.188's Mn²⁺-vs-Mg²⁺ item was
    NOT re-checked.
  - **Chapter 7: still entirely unverified. Nothing in it has been checked by a second
    reader against the scans.** This is now the single largest outstanding item in the
    project and it has been outstanding since the chapter was drafted. 42 nodes, 28 pages,
    images already sitting in `extracted_full_ch7/`. Start here.
- **New Chinese-notes pairing found this session (2026-08-05): topics 二 and 三 are now
  located.** Previously "not yet pinned down to exact pages" in the table below. A search
  agent confirmed by reading the actual note pages: **二 糖类 (carbohydrates) = true pages
  5–10**, **三 脂质 (lipids) = true pages 11–16**, and as a bonus, confirmed **四 氨基酸
  starts exactly at true page 17** (previously only known as "before p.47"). See the updated
  §11 table for the subtopic lists — 二 covers monosaccharide stereochemistry, oligo/poly-
  saccharide structure, glycoconjugates and blood-group sugars; 三 covers fatty
  acid/eicosanoid chemistry, lipid peroxidation, phospho-/sphingo-/glyco-lipids, and
  lipoprotein classes. Both were read at a topic-overview level (confirmed page range +
  subtopic list) but NOT yet cross-checked point-by-point against the CZ chapter 7/8
  subsections that will eventually cite them — the `cnNote.status` on the chapter-7 nodes
  drafted so far is `"mapped"` for the page range itself, with a note in the title that
  point-level cross-checking is still outstanding. Do the same point-level pass whenever you
  next touch a node that cites topic 二 or 三, rather than treating today's finding as the
  final word.
- **Operational note (recurrence, 2026-08-05 evening): the account hit its monthly spend
  limit again**, this time mid-dispatch of 5 parallel agents (4 chapter-7 drafters + 1 CN-
  notes search agent) for chapter 7. This is the same non-content, account-level constraint
  documented below from the chapter 5/6 work — nothing new about the failure mode itself, but
  a new wrinkle in how to recover from it was learned: **the harness's "Agent terminated
  early due to an API error" wrapper message is not proof the agent's actual work was lost.**
  Of the 4 chapter-7 drafters, one (`pp.148–153`) had in fact FULLY completed all 13 of its
  assigned nodes and only got cut off while composing its final prose report back to the
  orchestrator — its scratch file was complete and immediately usable as-is. A second
  (`pp.154–161`) had only gotten 2 of its ~9 expected nodes written before the same cutoff.
  The other two drafters (`pp.162–169` glycolysis/PPP, and `pp.170–175`) left no scratch file
  at all — their assigned page ranges are the ones still owed on chapter 7 (see above). The
  practical upshot: after ANY multi-agent dispatch that hits this error, always check the
  scratch dir for every agent in the batch individually rather than writing off the whole
  batch — completion is decided per-agent by how far into its own work it had gotten when the
  account-wide cutoff landed (all 4 drafters + the search agent were cut at within ~1–2
  minutes of each other, i.e. it is a wall-clock account event, not something tied to any one
  agent's task complexity), not by the wrapper message, which is identical and equally scary
  for an agent that finished and one that barely started.
  - **This session stopped here and pushed what existed rather than continuing to retry**,
    at the user's explicit instruction, because retrying immediately after a monthly-limit
    hit reliably fails again (see the ch5/6 note below) and burns the same limit on a
    different account would need to pick up — check claude.ai/settings/usage before
    resuming, and re-read this section plus `data/ch7.js`'s own header comment before
    dispatching new chapter-7 drafting agents so you don't accidentally re-draft pp.148–155
    (already done) instead of the pp.156–175 that's actually still missing.
  - **Update, same session, next turn: it was NOT actually done for the account** — a second
    dispatch of 3 parallel drafting agents for pp.155–175 (issued after the user said to
    continue) succeeded 3-for-3 with zero errors, drafting all 27 remaining nodes cleanly in
    one pass. So a spend-limit hit is not a reliable predictor of the next attempt failing —
    it can clear within the same session/turn, not just after a account switch. **Don't
    conclude a whole session is blocked from one failed batch; a retry a turn or two later is
    worth trying before giving up and asking the user to switch accounts.**
  - **A second, different infrastructure failure mode showed up later the same session**: a
    subsequent attempt to dispatch 3 parallel verification agents for chapter 7 got a
    "monthly spend limit" error again (two of three agents produced zero output at all, the
    third got partway through with 34 tool calls before dying — consistent with the earlier
    finding that concurrent agents share one exhaustible budget and whichever one is mid-flight
    when it runs out just stops). A follow-up attempt with a single (non-concurrent) agent for
    the same task failed differently: `API Error: Unable to connect to API: SSL certificate
    verification failed. Check your proxy or corporate SSL certificates` — a transient
    network/proxy error, NOT a spend-limit message, that also killed the agent partway through
    (20 tool calls in). **Lesson: don't assume every "agent terminated early" failure is the
    same root cause just because the symptom (task incomplete) looks the same — read the
    actual error text.** A spend-limit message means stop and wait/switch accounts; an SSL or
    other transient network error is worth one immediate retry, since it may not recur.
  - Net effect: chapter 7's independent verification pass was never completed this session
    despite three attempts across two different failure modes. It remains the single most
    important open item for whoever picks this up next — see above.
- **Pronunciation + bionic reading**: implemented, fixed, and on `main` — merged TWICE
  independently (once via a manual `git apply` of the orphaned commits' diff during this
  session, once via the user properly merging PR #2 on GitHub at almost the same time),
  which produced a real merge conflict in `app.js` when the two lineages met — resolved in
  favor of the flashcard EN-first fix (§5a) over the old CZ-first version PR #2's code still
  had. See §5 and §7 for the full story and how to not repeat the original mistake.
- **Flashcard/glossary language priority**: changed 2026-08-04/05, see §5a. Front of
  flashcard is now English, not Czech. This was a deliberate, user-requested change — do not
  revert it under the assumption the original CZ-first design was intentional.
- **Operational note — this session hit "monthly spend limit" API errors repeatedly** while
  running background verification/drafting agents for chapters 5 and 6 (error message points
  to claude.ai/settings/usage). It is NOT a content problem and not something code can fix.
  What worked: (1) retry the same agent call — sometimes succeeds immediately, sometimes
  fails again; (2) if an agent fails mid-task, check whether it had already written its
  output file before dying (`ls` the scratch dir) — several ch6 agents had fully written
  valid, complete scratch files moments before the fatal error, and those were reused as-is
  rather than re-running the whole drafting pass. Always check for a recoverable file before
  assuming a failed agent's work is lost.
- **Chapter 6's independent verification passes all completed and all fixes are applied** —
  chapter 6 is now audited to the same standard as chapters 1–5. Three real issues were
  found and fixed: node `6-2-3`'s summary/oral overstated "sole carbon source" where the
  book, and the node's own `points`, correctly say "acetate or other acetyl-CoA-producing
  compounds"; and node `6-1-3` claimed the pyruvate→acetyl-CoA arrow in Obr. 6.2 was
  uniquely one-way (it isn't — same double-headed glyph as every other arrow) and that
  glycerol enters the pathway near glyceraldehyde-3-phosphate (it actually enters near
  phosphoenolpyruvate, one step later) — both claims had propagated into a quiz question and
  an oral checklist item, not just the prose, so check for that pattern (an error
  duplicated across `points`/`summary`/`quiz`/`oral` rather than confined to one field) when
  reviewing future verification findings.
- **A second textbook has, in fact, already been built — see §4, which used to be pure
  speculation and now describes a real, working example.** A directory `PESB/` (Protein
  Engineering & Synthetic Biology, a different course entirely) appeared in this working tree
  during this session — a self-contained fork of this exact app (own `index.html`/`app.js`/
  `style.css`/`data/`, own `window.PESB.topics` namespace) built from lecture-slide notes
  rather than a textbook. **It is currently UNTRACKED — not committed to this git repo at
  all.** Nobody in this session's chat asked for it and it wasn't built by this conversation;
  it was simply found sitting on disk. Do not delete it, and do not commit it without asking
  the user first (per this project's own standing rule: only commit/push what's been asked
  for). Flag its existence and ask what they want done with it — at minimum it represents
  real work that isn't yet safely version-controlled.
- **An orphaned, superseded handoff document was also found**: commit `15fd05e` ("Add
  HANDOFF.md for future chapters and additional textbooks") sits unmerged on
  `origin/claude/biochem-chapters-1-3-notes-1g3f2a`, dated 2026-08-03 — a different session's
  attempt at exactly this file, written before chapters 4–7 existed. This is precisely the
  failure mode §5 warns about (a handoff that isn't on `main` can't be trusted or kept in
  sync). Compared line-by-line against the current file: everything in it is now either
  superseded (chapters 4–7 status, PDF/notes sourcing, the pronunciation bug list) or actively
  wrong for this session's environment (its §9 testing section assumes a Linux container with
  Playwright and a pre-installed Chromium at a fixed path — this session's environment is
  Windows and uses the Browser MCP tool instead, per §9 below). **Nothing needed merging from
  it.** The branch is safe to delete once the user confirms — it's fully superseded, but
  deleting a branch is exactly the kind of action to ask about first rather than just do.

## 1. What this is

A static (no build step, no backend) exam trainer: `index.html` + `style.css` + `app.js`,
content-free by design. All subject matter lives in `data/ch1.js` … `data/ch10.js` (all ten
now exist — the book's main text is content-complete), each of which pushes plain objects
("topic nodes") onto a shared array, `window.BIOCHEM.topics`. As of 2026-08-06 that array
holds **207 topics covering book pages 8–228 with no gaps anywhere**.
`app.js` reads that array and renders four modes — Study, Flashcards, Quiz, Oral — entirely
generically. **Nothing about a specific chapter or textbook is hardcoded in `app.js` except
the chapter-title lookup and one `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` chapter-list literal that
appears twice** (see §3) — everything else falls out of whatever's in the data files.

Live site: https://sumuxie.github.io/bio-state-exam/ (deploys from `main` only — see §7).

## 2. The topic-node schema

One object per section of the textbook. This is the entire data contract; every render
function in `app.js` reads only these fields.

```js
{
  id: "5-2-1-1",                 // stable key — used in localStorage progress, scope selects. Never reuse or change once a node exists.
  chapter: 5,                    // integer, matches a key in app.js's CHAPTER_TITLES
  section: "5.2.1",              // the textbook's own section number, shown as-is in the UI. If you split one book heading into multiple nodes because it's unusually dense, give both the SAME section number and distinguish only by id suffix (e.g. "4-1-3-1"/"4-1-3-2" both section "4.1.3") — don't invent a section number the book doesn't have.
  czTitle: "...", enTitle: "...", cnTitle: "...",   // section heading in all three languages

  pages: [118, 119, 120],        // page range this node covers in the source book
  coverage: "full" | "partial",  // "full" = every page above was read from an actual scan image
  coverageNote: "...",           // REQUIRED. Say exactly what was verified. If a book page's own text and its own figure/table contradict each other (this has happened in every chapter so far — see §8), say so explicitly here or in the relevant point, name which side you trust and why, and DON'T silently pick one.

  cnNote: { topic: "十四", title: "核酸的结构 (笔记 pp.87–90)", status: "mapped" | "partial" | "pending" },
                                  // link to the Chinese notes' own numbering (一, 二, 三... 二十七, then an unnumbered tail — see PAIRING.md and §11 below).
                                  // topic: null is valid and expected for content the notes cover but never numbered (see §11's "unnumbered tail" note) — cite the page range in `title` instead of inventing a number.
                                  // status "mapped" = the specific page range was actually read and confirmed. "partial" = a topic number is a good-confidence GUESS from title/context alone, not read. "pending" = searched and genuinely not found; don't force a match.

  summary: { en: "...", cn: "..." },              // both languages required

  points: [                       // the section's content, one array entry per idea
    { cz: "short anchor term, NOT a sentence", en: "...", cn: "..." }
  ],

  gapPoints: [                    // OPTIONAL — only when some pages in `pages` were NOT in the extracted scan set
    { en: "...", cn: "..." }      // content here is standard course material, NOT read from this book — rendered in a visually distinct dashed block, never mixed into `points`
  ],

  terms: [                        // glossary — feeds Flashcards AND the pronunciation buttons
    { cz: "...", en: "...", cn: "...", def_en: "...", def_cn: "..." }
  ],

  quiz: [                         // feeds the Quiz mode question bank
    // multiple choice:
    { type: "mcq", q_en, q_cn, options: [...], answer: 2, why_en, why_cn },
    // written / short answer, graded by keyword match:
    { type: "short", q_en, q_cn, accept: ["keyword", ...], answer_en, answer_cn }
  ],

  oral: {                         // feeds the Oral exam simulator — OPTIONAL but every node should have one
    q_en, q_cn,
    model_en: "...",              // a single flowing spoken-register paragraph, not bullet points
    checklist: ["...", "..."]     // self-check items shown as tick-boxes while the candidate talks
  }
}
```

Everything else — sidebar navigation, search, flashcard Leitner boxes, quiz scoring, speaker
buttons, bionic-reading transform — derives from this shape automatically.

### Language priority — read this before writing content for any chapter

The user commissioning this project was explicit and repeated it multiple times: **the
Czech book's content and structure matter because that's what the exam is based on, but the
Czech language itself does not matter.** The user is a native Chinese speaker actively
studying English. Concretely:

- `cz` fields are SHORT ANCHOR TERMS ONLY (a word or short phrase identifying which book
  term a point is about) — never a translated sentence.
- `en` is the primary, most-detailed language. Write real exam-ready explanatory prose here.
- `cn` carries the same substance as `en`, naturally phrased for a native reader — not a
  stilted gloss.
- In the UI, this means English-first, Czech-demoted-to-a-small-reference-tag. See §5a — do
  not build a new UI surface that puts Czech text in the most prominent visual slot.

## 3. Adding a chapter to the Czech textbook

> **This book is finished.** Chapters 1–10 all exist as of 2026-08-06 and the main text ends
> at p.228. Keep this section because it is the proven pipeline and a second textbook (§4)
> would follow it — but do not go looking for a chapter 11 to apply it to.


**You cannot calibrate a new chapter without the actual page images.** This whole project's
value proposition is "checked against the real book," not "plausible-sounding biochemistry."
See §8 for what that means in practice.

The pipeline below is proven across chapters 1–5 (chapters 4–5 specifically used the
multi-agent version; do the same for 6–10):

1. **Get page images.** `Biochemie.pdf` is gitignored and never committed whole. Extract
   only the pages you're about to calibrate:
   ```
   python3 -c "
   import fitz
   doc = fitz.open('Biochemie.pdf')
   import os
   os.makedirs('extracted_full_chN', exist_ok=True)
   for p in range(START, END+1):
       doc[p-1].get_pixmap(dpi=250).save(f'extracted_full_chN/page_{p}.png')
   "
   ```
   This local-only folder (all pages, for reading) is gitignored implicitly by not being
   added — don't commit it. Separately, after content is calibrated, hand-pick a
   representative ~40–60% subset and `git add -f` them into `extracted_raw/` (that dir *is*
   force-tracked despite `extracted_raw/*.png` being in `.gitignore` — see §7). Bias the
   selection toward pages that anchor a table, a disputed figure, or a verified number.

2. **Wire the chapter into three files FIRST** (small, mechanical, do this before content
   exists so validation/rendering don't silently no-op while you draft):
   - `index.html` — add `<script src="data/chN.js"></script>` after the previous chapter's.
   - `app.js` — add chapter N to `CHAPTER_TITLES` (~line 13), and append `N` to **both**
     `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` literals (`fillScopeSelect` and `renderSidebar`).
     There is now a one-command check that all four wiring points agree — see §9a; run it
     instead of eyeballing, because missing either spot
     means the chapter's topics exist in data but don't appear in the sidebar or scope
     dropdowns — an easy, silent bug, and the exact kind of thing a browser smoke test with
     a REAL server (not the file:// preview — see §9) will catch and a glance at the JS
     source won't.
   - `.github/workflows/pages.yml` — add `require('./data/chN.js');` to the `validate` job.

3. **Dispatch parallel drafting agents, one per page sub-range.** For an 18–50 page chapter,
   2–4 agents split roughly evenly by page count, each producing a self-contained JS array
   literal to a scratch file (NOT touching the real repo). Each agent's prompt must include,
   verbatim or adapted: the node schema (§2), the language-priority rules (§2), the honesty
   rules (§8), the exact page-image paths, and instructions to study `data/ch5.js` (the most
   recently finished chapter at time of writing) as a live style/granularity reference rather
   than pasting the whole schema inline. Explicitly ask each agent to report, in its final
   message: which nodes it produced, exactly what's on the first/last page of its range (so
   you can catch content split across a boundary between two agents — this happened twice in
   ch4, zero times in ch5, it's not predictable), and anything it flagged as ambiguous or a
   book-internal inconsistency.

   **Chapters 9 and 10 were drafted WITHOUT agents** (2026-08-06), reading every page directly
   and writing the nodes in one pass, because that session was operating under an instruction
   not to dispatch subagents. It works, and it has two real advantages worth knowing about:
   there are no page-boundary seams to reconcile (step 5 became a no-op) and no id collisions
   to renumber (the chapter-8 problem), because one reader holds the whole chapter's numbering
   in view. The cost is wall-clock — 27 pages read serially — and, more importantly, **the
   loss of the independent structural self-report**: with agents you get a second description
   of what is on each page to cross-check the merged content against, and drafting solo you
   do not. That is precisely why the `coverageNote` fields in chapters 9 and 10 were written
   unusually specifically (naming which figure labels were read off the scan versus which came
   from running text). If you verify those chapters, verify against the scans, never against
   those notes.

4. **Merge**: concatenate the scratch files' array contents into `data/chN.js` with the
   standard header/footer (copy the pattern from any existing `data/ch*.js`). Do this via a
   small Python script that strips outer brackets and joins with `,\n\n` — do NOT read every
   line of every scratch file into your own context first if you don't need to; you already
   have each agent's own structural self-report.

5. **Reconcile any page-boundary seams** the agents flagged (content whose sentence or
   figure genuinely spans the cut between two agents' ranges). Read just the 1–2 relevant
   pages yourself and patch the affected node(s) directly — extend `pages`, update
   `coverageNote`, add the missing points/terms. Don't spin up a whole new agent for a
   one-page patch.

6. **Fill in `cnNote`** using PAIRING.md's mapping table (§11 below has it pre-populated
   through chapter 5 and has several chapters' worth of pages already located for 6–10 —
   check there before dispatching a fresh 16-volume search). Where you do need to search,
   the pattern is: render the relevant `生物化学笔记_分卷/*.pdf` volumes to PNG, skim for
   large handwritten Chinese-numeral headers before reading closely, and report back a
   topic-number → page-range → confidence table rather than guessing.

7. **Validate.** No `node` binary is available in this environment — don't rely on the CI
   script's exact invocation locally. Instead: start a REAL local HTTP server
   (`python3 -m http.server PORT`, not `file://`) and load the page in the Browser tool (see
   §9 for why file:// specifically is unreliable for this). Run a JS snippet that replicates
   the CI validator's checks (required keys, valid mcq answer indices, no duplicate ids,
   full page-range coverage with no gaps) against `window.BIOCHEM.topics`, then click through
   Study/Cards/Quiz/Oral for the new chapter and check `read_console_messages` for errors.

8. **Independent verification pass — do this every time, no exceptions.** Dispatch fresh
   agents (same page-range split as drafting, or coarser) whose ONLY job is to re-read the
   same page images against the FINAL merged content and report factual discrepancies. This
   has found at least one real, fixable error in every single chapter attempted so far
   (chapters 4 and 5 both had 2–3 genuine issues surface this way, including one internal
   contradiction *within a single node* — point 6 and point 8 of the same node disagreeing
   with each other). Apply the fixes directly. If an agent's API call fails with a spend/rate
   limit error mid-task, that's an account-level stop, not a content problem — don't
   silently mark the chapter verified anyway; surface it and retry once explicit
   confirmation is given.

9. **Report and confirm before pushing.** Pushing, opening a PR, and committing are all
   actions the user gets to decide the timing of — do the work, validate it thoroughly, then
   ask, rather than assuming "finish it" extends to "and publish it" (those are different
   permissions even when the user is clearly asking for the content work to be finished
   end-to-end).

## 4. Adding a second, different textbook or course entirely

This used to be pure speculation ("never done here"). It has now actually happened once —
see §0's note on `PESB/` — so this section describes the real approach taken plus the
alternative that's still available if you'd rather integrate than fork.

### 4a. What was actually done: fork into a fully separate app (the `PESB/` precedent)

`PESB/` is a complete, independent copy of this app's architecture — its own `index.html`,
`app.js`, `style.css`, `data/ch*.js` — living in a subdirectory, covering an entirely
different course (Protein Engineering & Synthetic Biology, built from lecture-slide notes
rather than a textbook page-image pipeline). It is NOT wired into the root `index.html` in
any way; it's a second, standalone site that happens to share a git working tree with this
one. Concretely, per its own `app.js` header comment (which documents its deltas from this
app for anyone porting a fix between the two — read that comment before touching either
file):

- Namespace `window.PESB.topics` instead of `window.BIOCHEM.topics`; localStorage keys
  prefixed `pesb.` instead of `bio.`, so the two apps coexist in the same browser without
  clobbering each other's progress.
- No Czech layer at all — this course has no third source language. `cz` becomes `term`
  (a short headword, same *role* as `cz` — a compact anchor for a point — but not tied to any
  particular language), and the glossary is EN/CN only.
- `pages` (a book page range) becomes `slides` (a lecture-and-slide-number range like
  `"L1 s.1–4"` — the schema field name changed because the underlying source material is
  structurally different, not interchangeable with a page number.
- `gapPoints` (this app's "pages we could not read from a scan, use with caution" concept)
  becomes `beyondPoints` — a DIFFERENT meaning: not a gap in verification, but supplementary
  material deliberately added because the lecture slides never covered it. Both render as a
  dashed block in the UI for the same reason (visually mark "this isn't the primary verified
  source"), but don't assume they're interchangeable if you ever port a rendering fix — check
  which meaning the render code actually needs.
- Added a `figures` field as a first-class block, which this app doesn't have.

**Trade-off to understand before choosing this path again**: forking means `app.js` and
`style.css` now exist in two places. A bug fixed in one (e.g. a future fifth pronunciation or
bionic-reading bug beyond the four already documented in §5) does NOT automatically fix the
other — someone has to notice and manually port it, the same way PESB's own header comment
exists specifically so a human/session porting a fix knows what's different and what to leave
alone. If you're maintaining both going forward, treat that header comment as a living
changelog and update it if you add a third divergence.

**Housekeeping**: `PESB/` is currently untracked in this repo (see §0) — resolve that with
the user (commit it, gitignore it, or move it elsewhere) before it's at risk of being lost to
a stray `git clean`.

### 4b. The alternative not taken: integrate into one shared app

Still a valid option for a *closely related* second book (e.g. a second textbook on the same
subject, or a revised edition) where sharing one sidebar/search/progress-tracking surface is
more valuable than the isolation forking gives you. Current hardcoded assumptions this
approach would need to break:

- `CHAPTER_TITLES` in `app.js` is a flat `{1: {...}, ..., 7: {...}}` map — chapter numbers
  are the only identity a topic has. **Fix**: add a `book` field to every topic node, key
  `CHAPTER_TITLES` by `book + ":" + chapter`, add a book selector to the sidebar.
- `fillScopeSelect()`/`inScope()` assume `scope` is `"all" | "ch:N" | topicId` — extend the
  grammar to `"book:X"` for per-book scoping.
- `cnNote` is specific to *this* book's pairing with *these* Chinese notes. A second book
  needs its own equivalent field or `cnNote` needs to become keyed by note-source.
- None of `style.css`, pronunciation, bionic reading, or the flashcard front/back split
  reference chapter or book identity — zero changes needed there either way, fork or
  integrate.

## 5. Pronunciation (speaker buttons) — and the branch that got lost

Browser-synthesised speech via the Web Speech API — **not a recording**. Say this to users
plainly; a static site with no backend can't host real audio for hundreds of terms across
three languages, and the button label says so explicitly (`title="...synthesised speech, not
a recording"`) rather than overclaiming.

**What happened before this handoff existed, as a cautionary tale**: a prior session
implemented pronunciation + bionic reading, fixed four real regressions in it (stuck CSS
state, duplicate event listeners, a keyboard-shortcut conflict, a mobile topbar overflow —
commits `5965c2c` and `8957220`), and wrote a detailed handoff describing all of it as
already live. But those two commits were pushed to
`origin/claude/biochem-chapters-1-3-notes-1g3f2a` **after** that branch's PR #1 had already
merged — so they were never in `main` at all. A later, unrelated session did more work
directly on `main` (the page-numbering/splitter commit) with no idea the feature existed on
a sibling branch, and the handoff text describing it was passed along as injected context
rather than a committed file, so nothing forced anyone to notice the mismatch. The next
session (this one) built two full chapters on `main` genuinely believing pronunciation and
bionic reading didn't exist, until the user reported flashcards defaulting to Czech and
bionic reading "missing" — at which point `git log --all --source` on `app.js`/`style.css`
immediately showed the orphaned commits.

**The fix, and the general lesson**: before trusting ANY doc (including this one) about what
feature exists, grep the actual committed file (`git show HEAD:app.js | grep -i whatever`),
and if a described feature is missing, check `git log --all --oneline -- <file>` and
`git branch -a --contains <commit>` before assuming it was removed — it may simply be
sitting unmerged on another ref. To bring in a diff cleanly:
`git diff <merge-base> <other-branch-tip> -- <files> | git apply --check` first; if clean,
`git apply` it directly rather than fighting a full `git merge` against a working tree that
already has uncommitted changes of its own.

Core functions in `app.js` (search "pronunciation" in file header comments):

- `speakBtn(text, lang)` → `<button class="say-btn">` HTML string, or `''` if the browser
  lacks `speechSynthesis` or `text` is empty. `lang` is BCP-47 — `'cs-CZ'`, `'en-US'`,
  `'zh-CN'`.
- `speakPairBtn(en, cn)` → picks EN or CN based on `state.lang`; use for anything rendered
  through the `bi()` helper.
- `speak(text, lang, btn)` → does the synthesis, chunked on sentence boundaries (Chrome
  truncates one very long utterance). Re-clicking a speaking button cancels it, with the
  `speaking` class cleared explicitly rather than relying on `onend`.
- `wireSayButtons(root)` → **must be called at the end of every render function that injects
  new `.say-btn` markup**, scoped to the smallest container that changed. Idempotent via a
  `data-wired` guard.

**If you add a new place that should have a speaker icon**: call `speakBtn`/`speakPairBtn`
when building that block's HTML, then call `wireSayButtons()` after it lands in the DOM.
`wireSayButtons()` already does `preventDefault()`/`stopPropagation()` — don't add a second
click handler on the same button.

### 5a. Flashcard / glossary front-language fix (2026-08-04)

Originally, both the flashcard front face and the study-view glossary put Czech in the most
prominent slot (`#fc-cz`, biggest font on the flashcard front; `.term-cz` first and bold in
the glossary grid) — a vocabulary-recall design where you're tested on the Czech word. Per
§2's language-priority note, this is backwards for this user. Fixed by:

- Flashcard front (`.fc-face.fc-front`) now shows `term.en` in a class renamed
  `.fc-primary` (was `.fc-cz`, no longer tied to a language). Back shows `term.cn`
  (`.fc-cn`) prominently, plus the Czech term demoted into a small `.cz-anchor` pill (the
  same reusable class already used for the `cz` field in the Study view's `points` list —
  reuse it, don't invent a new small-tag style) inside a new `#fc-cz-ref` div, plus the
  bilingual definition (`.fc-def`, unchanged).
- Study-view glossary (`.term-grid` in `renderStudy()`): reordered to English first
  (`.term-en`, now carrying the bold/prominent styling that `.term-cz` used to have), then
  Chinese (`.term-cn`), then the Czech anchor as a `cz-anchor` pill only if `term.cz` is
  non-empty — no dedicated `.term-cz` CSS rule anymore.

If you add another UI surface that shows a `terms[]` entry, follow this same
EN-prominent → CN-secondary → CZ-as-small-pill pattern, not the old CZ-first one.

## 6. Bionic reading

A toggle (`#bionic-toggle`, persisted to `localStorage`) that bolds the leading half of each
Latin-script word as a scanning aid. Implemented as a fully reversible DOM transform:
`bionicApply(root)` walks text nodes and wraps a prefix of each Latin word in
`<b class="bionic-b">`; `bionicRemove(root)` unwraps those `<b>` tags by splicing their
children back into the parent — no character is ever added or removed, so toggling never
needs a fresh render.

- **`bionicRefresh()` must be called at the end of every render function**, exactly like
  `wireSayButtons()`. Already wired into `renderStudy`, `renderCard`, `renderQuestion`,
  `answerMcq`, `answerShort`, `finishQuiz`, and `nextOral`.
- Deliberately **skips Chinese text entirely** — the technique doesn't transfer to a
  logographic script.
- Skips UI metadata via `BIONIC_SKIP_CLASSES` (badges, section numbers, option letters,
  keyword chips) — add a new short label-like element's class there rather than
  special-casing it elsewhere.

### 6a. The `display: flex` blockification bug (found + fixed 2026-08-04)

**Never put `display: flex` directly on an element whose text content can be
bionic-transformed.** `.block > h2` (every Study-view section heading — "Summary",
"Point by point", "Glossary", etc.) had `display: flex; gap: 0.5rem; align-items: center;`
to lay out the heading text + a `.muted` CN label + a speaker button in a row. This is a
real, spec-defined CSS trap: a `<b class="bionic-b">` injected as a **direct child** of a
flex container gets "blockified" per the CSS Display spec — its computed `display` becomes
`block` regardless of what's specified — which visually snaps the bolded word-prefix onto
its own line, breaking "Summary" into "Summ" / "ary" on two lines. This is invisible from
reading the CSS or the JS; it only shows up by actually toggling bionic reading on a real
heading and looking (or, better, checking `getComputedStyle(b).display` programmatically —
see §9).

**Fix pattern**: never use `display: flex` on a container whose direct children include a
raw text run that bionic reading might touch. Fake the row layout instead with normal
inline flow + margins on the *specific* child elements that need spacing
(`.block > h2 .muted, .block > h2 .say-btn { margin-left: 0.5rem; vertical-align: middle; }`)
so nothing inside the heading is ever a flex item. If you add a new heading/label pattern
elsewhere that mixes running text with badges/buttons, check it the same way before shipping
— a working diff and a clean read of the CSS won't catch this class of bug; only toggling
the feature and inspecting computed styles will.

- **For reversible transforms, assert text-content parity** — not just "some `<b>` tags
  appeared." Compare `innerText` (not `textContent` — `innerText` respects layout, which is
  exactly what catches the bug above) before applying, after applying, and after removing;
  all three should be byte-identical. A `firstDiffIndex` scan pinpoints exactly which word
  broke if they're not.

## 7. Git / CI conventions

- **This repo's `github-pages` environment only permits deployments from `main`.**
  `.github/workflows/pages.yml` has a `validate` job (every branch listed in the trigger) and
  a `deploy` job (`main` only, `needs: validate`).
- **The branch trigger list is a hardcoded array of exact branch names, not a glob.** If you
  open a new feature branch, add its exact name to `on.push.branches` or CI silently won't
  validate it — or switch this to a `claude/**` glob so every future branch is covered
  without editing this file per-chapter (worth doing; hasn't been done as of this handoff).
- **Before building on `main`, sanity-check it's not missing something**: `git log --all
  --oneline --graph` and look for sibling lineages off an old merge point (see §5's cautionary
  tale). A branch merged once can still grow orphaned commits afterward if someone keeps
  pushing to it post-merge without opening a second PR.
- **If your designated branch's PR has already merged**, rebase onto current `main` first
  rather than stacking on old history:
  ```
  git fetch origin main
  git checkout -B <branch-name> origin/main   # safe once `git diff HEAD origin/main` is empty
  ```
  then commit and `git push --force-with-lease`.
- Commit messages and PR bodies explain **why**, not what. Code comments: none, unless
  something is genuinely non-obvious (a browser quirk, a cross-function invariant).
- Only commit/push/open a PR when the user has actually asked for that specific action —
  "finish the remaining chapters" is not implicitly "and publish them," per the Bash tool's
  own operating rules. Do the work, validate it, then ask.

## 8. Calibration & the copyright boundary

- **Never trust the raw OCR text file on its own** — every chapter has needed page-image
  re-reads that caught real errors. A background verification pass (fresh agents re-reading
  pages against the FINAL written content, reporting only material discrepancies) is not
  optional busywork: it found genuine, fixable errors in 100% of chapters attempted so far
  (4 and 5), including at least one case where two points *within the same node*
  contradicted each other.
- **When the book itself is internally inconsistent** (running text says one thing, its own
  figure or heading says another — this has now happened multiple times: an ATP-requirement
  claim contradicted by its own diagram in ch4, a "20S" vs "30S" prose/figure mismatch in
  ch4, a "DNA polymerasy" that context makes clear should say "RNA polymerasy" in ch4, a
  "2-oxoglutarát" label that's almost certainly a mislabelled "2-oxobutyrát" in ch5, an
  "acetoacetyl-CoA" sentence contradicted by its own heading and diagram in ch5): **say so
  explicitly in the content**, state which side you trust and the reasoning, and never
  silently pick one without a trace. This is what `coverageNote` and inline flags in `points`
  are for.
- **Content is paraphrased, not translated.** The Czech textbook is copyrighted. What's in
  `data/ch*.js` is original explanation following the book's own structure and terminology,
  with short direct quotes (under ~15 words, term/formula calibration only) rather than
  translated prose.
- **`coverage` and `gapPoints` exist to keep this honest, not to look thorough.** Never
  upgrade a node's `coverage` to `"full"` because the content sounds plausible.

## 9. Testing conventions

No test framework is wired up. Verification happens by scripting the Browser tool directly.

- **Use a real local HTTP server, not the `file://` preview, for anything you need a
  genuinely fresh reload for.** The `file://` preview pane in this environment does not
  reliably re-execute scripts / re-render the DOM on repeat navigations to the *same* URL
  within one long session — `window.BIOCHEM.topics` can look correct via a manual
  `fetch()+eval()` sanity check while the actual rendered sidebar is still showing a stale
  DOM from hours earlier, with no error and no obvious signal that anything is wrong. A
  `python3 -m http.server PORT` + `http://localhost:PORT/...` target does not have this
  problem and is also more representative of how GitHub Pages actually serves the site.
- **Force clicks on anything with a CSS animation** (e.g. a pulsing `.say-btn.speaking`) —
  use `{ force: true }` rather than fighting Playwright's actionability check.
- **Count actual listeners directly** (instrument `EventTarget.prototype.addEventListener`
  via a `WeakMap`) rather than inferring duplication indirectly — an indirect signal (like
  counting `speechSynthesis.speak()` calls) can coincidentally look fine even when a listener
  really did double up.
- **For reversible transforms, assert `innerText` parity** before/after apply and
  before/after remove — see §6a for why `innerText` specifically (not `textContent`) is the
  right check, and how it caught a real layout bug that a naive "does it look bold" check
  would have missed entirely.
- **Test every viewport you claim to support** — 320px, 390px, 768px, 1280px at minimum — by
  checking `document.documentElement.scrollWidth` against `window.innerWidth`.
- **Replicate the CI validator's checks client-side** (required keys, valid mcq answer
  bounds, no duplicate ids, full page-range coverage with no gaps) since no `node` binary is
  available in this environment to just run the CI script directly.

### 9a. Validate the data WITHOUT a browser — `esprima` is installed (found 2026-08-06)

There is no `node`, `deno` or `bun` on this machine (checked), but **Python's `esprima`
package IS installed**, and it is a real JavaScript parser. That turns out to be strictly
better than the browser route for validating `data/ch*.js`, and it should be the first thing
you reach for:

```python
import esprima, io
tree = esprima.parseScript(io.open('data/ch9.js', encoding='utf-8').read())
```

Walk the AST for `CallExpression`s whose callee property is `push`, convert each
`ObjectExpression` argument into a Python dict (`Literal` → value, `ArrayExpression` → list,
`ObjectExpression` → dict), and you have every topic node as data, offline, in about 40 lines.
Then assert everything the CI validator asserts, plus whatever else you want. A full run over
all ten chapters takes a couple of seconds.

Why this beats the browser check:

- **It catches syntax errors precisely.** A naive brace/bracket balance count does NOT work —
  braces and brackets inside string literals (`"(a)"`, `"[1,2]"`, `"§10.2"`) throw the count
  off, and chapter 9 happened to balance by pure coincidence while chapter 10 did not, even
  though both files were perfectly valid. Do not use a counting heuristic; parse.
- It needs no server, no browser tool, and no manual clicking, so it can't be fooled by the
  stale-DOM problem described above.
- It can check things the CI script does not: that every `points[]` entry has both `en` and
  `cn`, that every `terms[]` entry has all four of `en`/`cn`/`def_en`/`def_cn`, that every
  `short` quiz has a non-empty `accept` list, that every `oral` has a `model_en` and a
  `checklist`, and that page coverage has no gaps *within* a chapter as well as against the
  TOC range.
- **Also verify the wiring the same way**, by parsing `app.js`/`index.html`/`pages.yml` with
  regex and asserting that the set of chapters on disk equals the set in `CHAPTER_TITLES`,
  in BOTH `[1 … 10]` literals, in the `<script>` tags, and in the `validate` job. This is the
  check that would have caught the silent-missing-chapter bug §3 step 2 warns about, and it
  takes one command.

The browser is still the right tool for the things that are genuinely visual — the bionic
`innerText` parity check (§6a), viewport overflow, listener counting. Use it for those and
use `esprima` for the data.

### 9b. Verifying numbers against a scan — crop and upscale

When you need to check a printed figure (a molecular mass, a redox potential, a stoichiometric
coefficient), do not squint at the full page. Crop the passage and upscale it, then read that:

```python
from PIL import Image
im = Image.open('extracted_full_ch10/page_228.png'); W, H = im.size
c = im.crop((int(0.08*W), int(0.35*H), int(0.95*W), int(0.63*H)))
c.resize((c.width*2, c.height*2), Image.LANCZOS).save('verify_crops/v_228.png')
```

At 250 dpi a ~2× upscale makes digits unambiguous that are genuinely ambiguous at full-page
scale — which matters, because the numbers are exactly what a reader will be marked on and
exactly what is easiest to mis-transcribe. This is how the eleven numeric claims of chapters
9 and 10 were verified (see §0). `verify_crops/` is a scratch directory; don't commit it.

## 10. Legacy files — safe to ignore, not yet cleaned up

`Biochemistry_Chapters_1_3_Detailed.md`, `Biochemistry_Master_Guide_CN_EN.md`, and the entire
`oral_prep_app/` directory predate the `data/ch*.js` + topic-node architecture. They're
superseded and unreferenced by `index.html`/`app.js`. Left in place rather than deleted
unprompted.

`extract_chapters.py`, `ocr_full_chapters.py`, `ocr_run.log`, `extracted_full_ch1_3/` are
untracked working files from the original chapters-1–3 build (predate this handoff's
existence too). Harmless to leave, fine to clean up in a dedicated commit if anyone wants the
tree tidier — not part of the chapter-4/5 or bionic-reading work.

## 11. Open items and the Chinese-notes map, as of this handoff

**Chapters 7–10: CONTENT NOW COMPLETE** (all four drafted; 7 and 8 in earlier sessions,
9 and 10 on 2026-08-06). Page ranges, all confirmed against the book's own TOC pages 4–6 and
all covered with no gaps:

| Ch | Title | Pages | Nodes | Content | Independently verified? |
|---|---|---|---|---|---|
| 7 | Sacharidy | 148–175 | 42 | done | **NO — nothing checked** |
| 8 | Lipidy | 176–201 | 40 | done | partial — 2 flagged items re-checked 2026-08-06 |
| 9 | Fotosyntéza a další biosyntetické pochody fotoautotrofů | 202–217 | 27 | done | partial — all quantitative claims re-read |
| 10 | Vzájemné vztahy v intermediárním metabolismu a regulační mechanismy (incl. 10.3 Hormony) | 218–228 | 26 | done | partial — all quantitative claims re-read |

The book's main text ends at p.228; what follows is the literature list, deliberately outside
every chapter's page range. **There is no eleventh chapter to draft. The only work left on
this textbook is verification.**

**Chapter 6 is done** (Bioenergetika, pp.130–147, 19 nodes). Its drafting agents mostly
self-served their `cnNote` pairings straight from this table after being told to read this
whole file — keep instructing future drafting agents to do that, it works. Two things
chapter 6 could NOT confidently pair and correctly left `status: "pending"`: §6.2.3
(glyoxylate cycle — no notes topic found covering it) and all three §6.3 porphyrin-protein
nodes (十二's actual content was never verified by reading it — see below).

**Pages 1–46 have now been read page by page** (2026-08-06, two agents rendering at 150 dpi and
re-cropping to 300–500 dpi where the handwriting was tight). Those rows below are marked
**read** and carry what is actually on the page. Everything from p.47 on is still at the
confidence level its own row states. **Pages 28, 36 and 46 are blank** — the notebook leaves a
gap between topics, so a blank page is not a scanning failure.

**Chinese notes (`生物化学笔记.pdf`, 230 handwritten pages, pre-split into 16 volumes of 15
pages each in `生物化学笔记_分卷/`, page footers preserve true page numbers)** — mapping
confirmed so far. Rows marked "mapped" have actually been read and used by a chapter; rows
marked "title-match only" are an inference from the topic's title/starting page, never
actually opened and read — treat those as a strong hint, not a citation, and verify by
actually reading the pages before upgrading a node's `cnNote.status` past `"partial"`:

| Notes topic | Title | Pages | Likely textbook match | Status |
|---|---|---|---|---|
| 一 | 序论 | pp.1–4 | ch.1 | mapped (pages **read** 2026-08-06: p.1 生命的属性/细胞/生命的起源 incl. Miller 1953 + RNA世界 + 生化发展史, p.2 生命元素/非共价力, pp.3–4 水、依数性、渗透、pH/pKa/缓冲. No creationism or intelligent design anywhere — CZ §1.6's three-groups framing is the Czech book's own) |
| 二 | 糖类 | pp.5–10 | ch.7 Sacharidy §7.1–7.6ish | mapped, **read** 2026-08-06 (p.5 存在/命名/分类, p.6 结构异构体·变旋·Fehling/Benedict, p.7 还原·成脎·**成酯（Pi酯、硫酸酯）**·成苷·Molisch/Bial/Seliwanoff, p.8 寡糖+多糖 incl. 肽聚糖, p.9 脂多糖·磷壁酸·**糖胺聚糖**（透明质酸/硫酸角质素/硫酸软骨素/肝素，结构画全）, p.10 蛋白聚糖·糖蛋白·ABO 血型). **CZ §7.2.1 的对应只是笼统的「Pi酯」，没有 G6P、没有 PRPP** — 磷酸酯那半边要靠 Lehninger §22.4 |
| 三 | 脂质 | pp.11–16 | ch.8 Lipidy | mapped, **read** 2026-08-06 (p.11 分类+脂肪酸, p.12 必需脂肪酸·前列腺素·油脂皂化值/碘值, p.13 脂质过氧化, p.14 甘油磷脂+磷脂酶 A1/A2/B/C/D, p.15 鞘磷脂·糖脂·萜类固醇·脂蛋白, p.16 脂类提取·固醇·**细胞膜的不对称性**·流动镶嵌模型/脂筏模型). **没有「膜的化学组成」这一节，也没有蛋白质:脂质比例** — CZ §8.5.1 要靠 Lehninger §11.1 |
| 四 | 氨基酸 | pp.17–22 | ch.2 §2.1.x | mapped (**read** 2026-08-06. p.21–22 is the 化学反应 block: 茚三酮 with mechanism + **570 nm 紫色**, Pro/Hyp 亮黄色; DNFB/Sanger; PITC/Edman; Van Slyke 亚硝酸; 甲醛滴定 pKa₂ 9.6→7. p.19 side-chain colour reactions. This is the source for CZ §2.1.3 — Lehninger has **no** ninhydrin at all) |
| 五 | 蛋白质的共价结构 | pp.23–27 | ch.2 §2.2.1, ch.4 §4.2.1 | mapped (**read** 2026-08-06: 肽键共振, 双缩脲, 一级结构测定 N/C 端法, CNBr, 生物质谱/串联质谱, 片段重叠法) |
| 六 | 蛋白质的三维结构 | pp.29–35 | ch.2 §2.2.2–2.2.4 | mapped (**read** 2026-08-06: 二面角 φ/ψ, α-helix, β-sheet, β-turn, collagen, 超二级结构, 结构域, 折叠, Levinthal, PDI/HSP70/HSP60, 四级结构) |
| 七 | 蛋白质结构与功能的关系 | pp.37–40 | ch.2 (no direct CZ section) | mapped (**read** 2026-08-06: 同源pro, 镰刀形贫血, 肌红/血红蛋白, O₂ 结合曲线, T/R 态, 2,3-BPG, Bohr 效应. **Note:** node `2-2-6` currently cites this topic and should cite 八 instead) |
| 八 | 蛋白质的分离、纯化、表征 | pp.41–45 | ch.2 §2.2.6 | mapped (**read** 2026-08-06. pp.41–43 是 CZ §2.2.6 的对应: 胶体性质 1–100 nm, 丁达尔效应, 超速离心, **沉降系数 1 S = 10⁻¹³ 秒**, `Mr = RTS/(D(1−ρV))`, 凝胶过滤 Sephadex, SDS-PAGE. Mr 范围写 6×10³–1×10⁶，CZ 书写 10⁴–10⁶（病毒 10⁷）— 两者不一致，写内容时注明) |
| 九–十一 | 酶 (general/kinetics/mechanism) | pp.47–76 | ch.3 | mapped |
| 十二 | 维生素和辅酶 | p.77 | ch.6 §6.3 porphyrin proteins, OR ch.3 coenzymes | title-match only, still unconfirmed after ch.6 — actually read pp.77-82ish and settle this |
| 十三–十六 | 核酸 (general/structure/physicochem/methods) | pp.83–98 | ch.4 | mapped |
| 十七 | 代谢总论 | p.99 | ch.6 §6.1.3 Katabolické a anabolické děje | title-match only, used by ch.6 as "partial" |
| 十八 | 生物能学 | p.103 | ch.6 §6.1/§6.1.1/§6.1.2.x/§6.2.1 | title-match only, used by ch.6 as "partial" |
| 十九 | 糖酵解 | p.105 | ch.7 §7.8 Glykolýza | title-match only, not yet consumed |
| 二十 | 柠檬酸循环 | p.119 | ch.6 §6.2.2 (all 4 nodes) | title-match only, used by ch.6 as "partial" |
| 二十一 | 氧化磷酸化作用 | p.127 | ch.6 §6.2.4 (all 5 nodes) | title-match only, used by ch.6 as "partial" |
| 二十二 | 戊糖磷酸途径和糖的其它代谢途径 | p.139 | ch.7 §7.7 Dvě cesty k pentosafosfátům, and/or other ch.7 sugar-interconversion sections | title-match only, not yet consumed |
| 二十三 | 脂类的分解 | p.147 | ch.8 §8.4 Odbourávání lipidů | title-match only, not yet consumed |
| 二十四 | 脂类的生物合成 | p.153 | ch.8 §8.3 Biosyntéza lipidů | title-match only, not yet consumed |
| 二十五 | 蛋白质的降解及氨基酸的分解代谢 | pp.161–170 | ch.5 | mapped |
| 二十六 | 氨基酸及其重要衍生物的生物合成 | p.171 | no obvious ch.1–10 match — the CZ book's TOC doesn't show a dedicated amino-acid-biosynthesis section; possibly not paired to anything | unmatched |
| 二十七 | 核苷酸的降解及核苷酸代谢 | ~p.180 (title match only, not read) | ch.4 §4.1.1.1/.2, §4.1.5 | title-match only, used by ch.4 as "partial" |
| *(unnumbered)* | 抗生素 Antibiotics | p.181 | no CZ match found | unmatched |
| *(unnumbered)* | 激素 Hormones | p.183 | ch.10 §10.3 Hormony — strong title match | not yet consumed |
| *(unnumbered)* | 光合作用 Photosynthesis | pp.197–203 | ch.9 Fotosyntéza | title-match only — strong match, used by ch.9 as `"partial"`; these pages have NOT been read (the 2026-08-06 read covered pp.1–46 only) |
| *(unnumbered)* | DNA重组 / 转座子 Recombination/transposons | pp.205–210 | no CZ ch.1–10 match found | unmatched |
| *(unnumbered)* | DNA的复制 Replication | pp.211–212 | ch.4 §4.1.3 | mapped — no numeral exists, so cite the pages, not a number |
| *(unnumbered)* | DNA转录产生mRNA Transcription | pp.212–217 | ch.4 §4.1.4/§4.2.4 | mapped — no numeral |
| *(unnumbered)* | RNA的复制/反转录病毒 | pp.219–221 | no CZ ch.1–10 match found | unmatched |
| *(unnumbered)* | mRNA翻译产生蛋白质 Translation | pp.223–224 | ch.4 §4.2.1–4.2.3, §4.3.2 partially | mapped — no numeral |
| *(unnumbered)* | English reading-comprehension notes | pp.225–230 | — | not biochemistry, ignore |

The numbered list (一–二十七) is the core 27-topic oral-exam syllabus; everything from p.181
on is titled but carries no Chinese-numeral header at all — treat that as a genuine,
permanent feature of the source (the student's own appendix), not a gap to fill by inventing
a "二十八". No dedicated post-translational-modification topic exists anywhere in the notes
(checked exhaustively for ch.4 §4.3.x) — leave that `cnNote.status` as `"pending"`.

## 12. The bank layer and the wrong-answer book (added 2026-08-13, `biochemie_pro` only)

Two features and three tools, all in `biochemie_pro`. `biochemie_basic` is untouched and
stays that way — it is the frozen copy (§0).

### 12a. `bank` — a second question layer that never reopens a verified file

`app.js` has cycled three question sources for a while (`core` / `bank` / `terms`), but no
node carried a `bank` array, so that middle level shipped inert. It is live now, and the
questions do NOT live inside the nodes:

```js
// data/bank_ch7a.js
window.BIOCHEM.bank = window.BIOCHEM.bank || {};
Object.assign(window.BIOCHEM.bank, { '7-8-1': [ {…}, {…} ], … });
```

`app.js` merges that registry onto the matching topic (`t.bank`) at load. **Why by id
instead of inside the node**: every `data/ch*.js` was calibrated page by page against the
scans, and appending several hundred questions into those files means editing verified
content for a reason that has nothing to do with verification. A bank file is additive, it
can be deleted without leaving a mark, and a whole chapter's extras can be reviewed as one
diff. The cost is one new failure mode — a key that matches no node — which is invisible at
run time, so it is reported in the Quiz tab AND fails `tools/validate-data.js`.

As of 2026-08-13 the layer holds **638 questions (432 mcq + 206 short) across all 207 Czech
nodes**, written by nine agents working one chapter-range each, against the 797 `core`
questions already there. Every wrong option in all 432 is annotated (see 12b) — that was the
brief, and it is what makes the layer worth more than its count.

The rules for writing them are in **`BANK_SPEC.md`**, and the load-bearing one is: *a bank
question may only restate what its node already says*. The node's `points`, `summary`,
`mustKnow`, `terms` and `coverageNote` are the entire fact universe. Nobody re-reads a bank
question against the book, so a fact imported from general knowledge would sit in the app
looking exactly as verified as everything around it.

`gapPoints` is deliberately NOT in that universe — it is flagged in the data as standard
course material that was never read from this book. One consequence, raised by the agent
that wrote chapters 1–3 and still open: `3-3-1`, `3-5`, `3-7` and `2-2-2` carry a lot of
their substance in `gapPoints` (the Michaelis–Menten derivation, the inhibition types), so
those nodes support fewer bank questions than their size suggests. Whether bank questions
may draw on `gapPoints` is a decision for Ruojin, not a default to quietly change.

### 12b. `optionRefs` / `optionNotes` — the wrong options carry the teaching

Ported from `pesbpro` (its `app.js` had it; this app did not). Both are keyed by option
index and annotate WRONG options only:

- `optionRefs: { 0: '7-7-1' }` — this option describes something the course teaches
  elsewhere; renders as a button that jumps to that node.
- `optionNotes: { 1: { en, cn } }` — this option encodes a real misconception; name it
  (which two things are swapped, which direction is reversed, which condition was dropped).

An option with neither renders as "nothing in the course corresponds to this one", which is
honest and also marks the question as weak. **The 800 pre-existing `core` questions carry no
annotations**, so answering an old question wrong shows that message for every distractor —
not a bug, just the layer that has not been written yet. Annotating `core` is the obvious
next content job if it is wanted.

### 12c. The wrong-answer book (❌ tab, `state.wrong`, `biopro.wrong`)

Every missed question is stored whole — the question object, which option was picked or what
was typed, how many times it has been missed, and how many times it has been answered
correctly since. **Stored whole, not as a pointer**, because generated term-drill questions
have no stable identity, their options are shuffled at generation time so a stored index
would mean nothing later, and a stored copy survives an edit to the data file behind it.

`ok` counts CONSECUTIVE correct answers and any wrong answer resets it; at `WRONG_CLEAR = 2`
the entry leaves the book. One correct answer is what a lucky guess looks like too. Note the
shape this gives: a drill asks each entry once, so the countdown can only be completed in a
second sitting — that is intended, and the first version of the smoke test failed because it
assumed otherwise.

### 12d. Two tools, because this machine has no `node`

CI runs `tools/validate-data.js` and stays authoritative. Locally there has never been a
`node` binary (§3 step 7, §9), which left "click around and see" as the only local check.
Both new tools drive a real browser instead, headless:

```
python -m http.server 8137
msedge --headless=new --virtual-time-budget=30000 --dump-dom \
  "http://localhost:8137/tools/check-in-browser.html?app=biochemie_pro"     # data
msedge --headless=new --dump-dom \
  "http://localhost:8137/tools/smoke-wrongbook.html?app=biochemie_pro"      # interaction
```

- `tools/check-in-browser.html` — a twin of the node validator: required keys, duplicate ids,
  mcq answer indices, every `optionRefs` target resolving, every bank key matching a node. It
  reads the app's own `index.html` for the file list, so an untagged data file shows up.
- `tools/smoke-wrongbook.html` — drives the real app in a same-origin iframe and clicks
  through quiz → wrong answer → book → drill → countdown → removal, asserting on the DOM and
  on `localStorage`.

**Kill stray headless browsers between runs.** A second launch against a `--user-data-dir`
that a previous (possibly hung) process still holds attaches to that instance and exits
immediately, producing a zero-byte dump. That looks exactly like "the page is broken" or
"the data got too big", and it cost an hour of chasing the wrong cause here — the fix is
`taskkill //F //IM msedge.exe` and a fresh profile directory, not a change to the page.

Two more mechanics worth knowing before editing either, both learned the hard way:
**`--dump-dom` prints at the outer load event**, so a test deferred by even one `rAF` is
dumped before it runs — the smoke test therefore runs synchronously inside the iframe's load
handler. And **`--virtual-time-budget` hangs on the app page** (the speech-synthesis handlers
keep the queue from draining), so it is used only on the data validator, which loads no
`app.js`. `check-in-browser.html` does need it, since it injects its script tags after a
fetch and they would otherwise not have run by dump time.

### 12e. What was found while writing the questions, and is NOT fixed

The drafting agents read every node closely, which is the most thorough pass this content has
had since it was written. Two findings stand out:

1. **`mustKnow` in chapter 8 is systematically misaligned.** `8-5` (biological membranes)
   carries bile-acid and gallbladder text; `8-3-4` (the 8-acetyl-CoA balance) carries "Step IV
   dehydration"; `8-3-5` (phosphatidic acid) carries "Step V reduces the double bond" — the
   whole `8-3-3` step sequence has slid. Some also assert facts no node in the chapter
   contains (a carnitine shuttle the chapter's own `lehNotes` says never appears in the Czech
   text; ATP-dependent flippases where `8-5-2-1` says flip-flop's significance is undefined).
   A word-overlap scan of all 207 nodes puts 15 of the 17 worst offenders in chapter 8
   (chapter mean 0.48 against 0.74–0.78 for chapters 5, 6, 9, 10), and three were confirmed by
   reading. **The scan has false positives** — `2-1-3` and `7-2-3` score low purely on
   vocabulary and are correct — so it locates the problem, it does not license a bulk edit.
   `mustKnow` is always visible in the UI, so this is the highest-visibility wrong text in the
   app. The page images are still in `extracted_full_ch8/`; fixing it means rewriting those
   ~20 lines against the scans, not paraphrasing what is there.
2. **Chapter 7 and 8 nodes where the book itself does not close.** `8-3-8` gives GPP + IPP as
   producing both the C15 FPP and the C20 GGPP; `8-5-3-1` defines simple diffusion as needing
   no membrane protein and then lists protein channels as one of its routes; `7-4-2`'s general
   GAG rule (acetylated amino sugar, 1→4) does not fit its own heparin entry. No bank question
   is built on any of them — they are flagged for the verification pass chapters 7 and 8 have
   still never had (§0).
