# ORAL_PHRASINGS_RESEARCH

**Source material for a question-side data layer in `biochemie_pro`.**
Research date: **2026-08-13**. Every retrieval date in this document is 2026-08-13.

The problem this document addresses is not biochemistry. It is that a question arrives as
**spoken English in a phrasing the candidate has never met**, and the content that would
answer it never gets triggered. So this catalogues the **question side**: how examiners
phrase things, what each phrasing demands, which topics enough independent institutions
publish that they can be called key points, and where a non-native listener loses the thread.

---

## 0. Evidence classes — used throughout, never mixed

| tag | meaning |
|---|---|
| **[A]** | **Published wording, fetched and read** — the actual page or PDF was downloaded and its text extracted. Quoted verbatim. |
| **[A*]** | **Fetched by a research agent in this session, not re-read by me.** Same status as [A] in principle, but I did not personally open the file. Listed separately in §10 so it can be spot-checked. |
| **[B]** | **Second-hand** — students, forums, blogs, coaching sites, search-engine summaries. Real phrasing, weaker provenance. |
| **[C]** | **My reconstruction** — a typical phrasing written to illustrate a pattern. **No institution said this.** |

**Rule for the app: nothing tagged [C] may ever be displayed as "a real exam question."**

---

## 1. Headline findings

### 1.1 Two different exam-writing traditions, and the candidate is caught between them

I parsed **436 numbered items** from four published **English-language** biochemistry exam
lists at three Central-European universities (Plzeň, 1. LF UK Prague, Comenius Bratislava).

> **0 of 436 items is phrased as a question or an imperative.**
> Not one begins with *what / why / how / which / describe / explain / discuss / compare /
> state / define / name / give / write / account*. Every item is a **noun phrase**.

**[A]** examples of the actual published form:

- `"Glycolysis and its regulation"` — Plzeň, item 15
- `"Citric acid cycle, amphibolic character, course, regulation."` — 1. LF UK, II.7
- `"Significance of citric acid cycle for energy metabolism, energy yield and regulation of Krebs cycle"` — Comenius GM, item 9

Even a document *explicitly titled* `ORAL QUESTIONS FOR EXAMINATION IN MEDICAL BIOCHEMISTRY`
(Comenius Bratislava) **[A]** contains no questions — 95 noun phrases.

Now compare the Anglophone and Indian traditions, from papers fetched in this same session
**[A*]**:

- `"Describe TCA cycle. Discuss in detail its energetics, regulation and its role"` — RGUHS
- `"Explain the amphibolic role of TCA cycle"` — RGUHS
- `"Give an account of the ß-oxidation of palmitic acid and its energetics"` — RGUHS
- `"The most likely cause of this patient's condition is accumulation of intermediates during which of the following processes?"` — USMLE Step 1 sample
- `"What action do you take?"` — RCPath FRCPath Part 2 oral

**The finding is the mismatch.** The candidate studies from a syllabus written as **noun
phrases in the Central-European tradition**, and is then examined orally in **English, whose
exam grammar is verb-first**. Nobody publishes the mapping between the two, nobody teaches it,
and it is the first thing to fail under time pressure in a second language.

> **Design consequence:** the useful drill is not *topic → answer*. It is
> **spoken stem → recognise which memorised topic this is → produce the demanded answer shape**.
> A stems layer must sit *in front of* the existing content layer.

Nuance worth keeping: the Indian descriptive papers are **not** uniformly verb-led either.
Of ~509 parsed RGUHS items, only ~31% open with a verb; the rest are bare noun phrases
(`"Zymogens"`, `"Lac operon"`, `"Plasma buffers"`) under a section header, where **the header
and the mark value carry the instruction** **[A*]**. So the real skill is: *recognise what is
being demanded when the demand is not in the words of the item itself*.

### 1.2 The Czech and English lists are the same list

Faculty of Medicine in Pilsen publishes both. I fetched both PDFs and compared **[A]**:

| | Czech programme | English programme |
|---|---|---|
| document | `Otázky ke zkoušce — Lékařská chemie a biochemie II, všeobecné lékařství, 2025/26` | `Final Exam Questions — Medical Chemistry and Biochemistry II, General Medicine, 2025/26` |
| items | 100 | 100 |
| item 15 | `Glykolýza a její regulace` | `Glycolysis and its regulation` |
| item 38 | `Biosyntéza močoviny` | `Biosynthesis of urea` |
| item 100 | `Faktor V Leiden` | `Factor V Leiden` |

**Same 100 items, same order, item for item.** Two consequences:

1. The far more numerous **Czech** lists can safely be mined for topic coverage — they are not
   a different syllabus.
2. The examiner is very often a **Czech native speaker examining in English**, working from a
   Czech-authored topic list. Their spoken stems will tend to be translations of Czech phrasing
   habits, delivered in a Czech accent whose properties are documented in §6.5 — and those
   properties break exactly the listening strategy that is normally taught.

### 1.3 The oral is a drawn-topic exam with preparation time, then probing

Verified formats **[A]**:

- **Comenius University Bratislava** (English programme, Medical Biochemistry final): written
  test of *"50 questions with four answer options each (variable number of correct answers:
  0–4)"*, 60 min, ≥151/200 (>75%) to proceed. Then: *"In the oral part of the exam, the
  students will draw 2 questions, to which they will answer after approximately 15 minutes of
  preparation."*
- **1. LF UK Prague** (English programme): *"The final examination from Medical Chemistry and
  Biochemistry consists of two parts: written and oral."* Written weighting: calculations
  ~16%, general chemistry ~8%, **biochemistry ~55%**, molecular biology ~20%. *"In order to
  continue to the oral part of the exam at least 57 % from the maximal number of points must
  be obtained in this test."*
- **RCPath FRCPath Part 2** (UK, consultant-level clinical biochemistry oral) **[A*]**:
  *"Candidates are given half an hour to prepare their answers to a management problem and a
  laboratory scenario or clinical case."*
- **Charles University Code of Study and Examination**, Art. 8(9) **[A]**: *"The forms of
  examination are oral, written, practical, or combined."* Art. 8(14): three attempts maximum.

So the comprehension failure happens in **two distinct places**, needing different drills:

- **(a) The drawn topic** — written, in front of you, in English, from a list you already have,
  with ~15 minutes to prepare. Low listening load. Failure here is a *scope* problem: not
  knowing how much the noun phrase is asking for.
- **(b) The follow-up probes** — spoken, unscripted, no preparation time. **This is where the
  reported failure mode lives.** §3, §4 and §6 are about (b).

### 1.4 There is no single canonical meaning for the command words

**[A*]** The same exam board defines the same word differently at different levels. AQA's GCSE
science glossary gives *Describe* = *"Students may be asked to recall some facts, events or
process in an accurate way"*; AQA's A-level psychology glossary gives *Describe* = *"Give an
account of."* Bloom's-taxonomy verb charts disagree too: the University of Arkansas places
*Compare* at **Understand**, Ohio State places it at **Analyze**.

**Consequence for the app:** teach **the action each verb names** (list / narrate / weigh /
judge / justify), not one institution's definition. §2 gives the verbatim definitions so the
overlap can be seen; §3 gives the action.

---

## 2. Command-word dictionary — verbatim official definitions

All **[A*]**, fetched in this session. This is the raw dictionary; §3 turns it into stems.

### 2.1 AQA, GCSE Sciences
`https://www.aqa.org.uk/resources/science/gcse/teach/command-words`

| word | AQA's exact definition |
|---|---|
| Compare | "This requires the student to describe the similarities and/or differences between things, not just write about one." |
| Define | "Specify the meaning of something." |
| Describe | "Students may be asked to recall some facts, events or process in an accurate way." |
| Determine | "Use given data or information to obtain and answer." |
| Estimate | "Assign an approximate value." |
| Evaluate | "Students should use the information supplied, as well as their knowledge and understanding, to consider evidence for and against when making a judgement." |
| Explain | "Students should make something clear, or state the reasons for something happening." |
| Give | "Only a short answer is required, not an explanation or a description." |
| Identify | "Name or otherwise characterise." |
| Justify | "Use evidence from the information supplied to support an answer." |
| Predict | "Give a plausible outcome." |
| Show | "Provide structured evidence to reach a conclusion." |
| Suggest | "This term is used in questions where students need to apply their knowledge and understanding to a new situation." |
| Use | "The answer must be based on the information given in the question. Unless the information given in the question is used, no marks can be given." |

**Three high-yield readings.** *Give / Name / State* = one phrase, then **stop talking**.
*Suggest* = "I do not expect you to know this — reason it out." *Use* = "your own knowledge is
not the answer; the data I just gave you is."

### 2.2 AQA, A-level (a *different* definition set from the same board)
`https://www.aqa.org.uk/resources/psychology/as-and-a-level/psychology/teach/command-words`

| word | definition |
|---|---|
| Analyse | "Separate information into components and identify their characteristics." |
| Comment | "Present an informed opinion." |
| Compare | "Identify similarities and/or differences." |
| Describe | "Give an account of." |
| Discuss | "Present key points about different ideas or strengths and weaknesses." |
| **Distinguish** | **"Explain ways in which two things differ."** |
| Evaluate | "Judge from available evidence." |
| Explain | "Set out purposes or reasons." |
| **Explain how** | **"Give a detailed account of a process or way of doing something."** |
| **Explain why** | **"Give a detailed account of reasons in relation to a situation."** |
| Justify | "Provide reasons, reasoned argument to support, possibly evidence." |
| Name | "Identify using a recognised technical term." |
| Outline | "Set out main characteristics." |
| State | "Express in clear terms." |
| **What is meant by** | **"Give a definition."** |

**"Explain how" vs "Explain why" is the single highest-yield distinction for a biochemistry
oral.** *How* = the process. *Why* = the reasons. And *"What is meant by X?"* is officially
just *Define X* — not an invitation to a five-minute answer.

### 2.3 University of Portsmouth — the only verified definition of *Account for*
`https://myport.port.ac.uk/study-skills/written-assignments/essays-task-words`

- **Account for**: *"Similar to 'explain' but with a heavier focus on reasons why something is or is not the way it is."*
- **Compare**: *"Show how two or more things are similar."* · **Contrast**: *"Show how two or more things are different."* · **Compare and contrast**: *"Show similarities and differences between two or more things."*
- **Assess**: *"Measure or evaluate one or more aspect of something (for example, the effectiveness, significance or 'truth' of something)."*
- **Critically evaluate**: *"Showing how judgments vary from different perspectives and how some judgments are stronger than others."*
- **Describe**: *"Say what something is like. Give its relevant qualities."*
- **Discuss**: *"Provide details about and evidence for or against two or more different views or ideas."*
- **Illustrate**: *"Give selected examples of something to help describe or explain it."*
- **Justify**: *"Explain the reasons for something being done or believed."*
- **Outline**: *"Provide the main points or ideas, normally without going into detail."*
- **State**: *"Express briefly and clearly."*
- **Summarise**: *"State the most important parts of something so that it is represented 'in miniature'."*

### 2.4 University of Birmingham
`https://libguides.bham.ac.uk/c.php?g=679274&p=5310871`

- **Comment on**: *"Identify and write about the main issues; give your reactions based on what you've read/heard in lectures. Avoid just personal opinion."*
- **Compare**: *"Look for the similarities between two things. Show the relevance or consequences of these similarities concluding which is preferable."*
- **Contrast**: *"Identify the differences between two items or arguments. Show whether the differences are significant."*
- **Critically evaluate**: *"Weigh arguments for and against something, assessing the strength of the evidence on both sides."*
- **Describe**: *"Give an observational account of something and would deal with what happened, where it happened, when it happened and who was involved."*
- **Discuss**: *"Investigate or examine by argument; sift and debate; give reasons for and against; examine the implications."*
- **Explain**: *"Offer a detailed and exact rationale behind an idea or principle... Make clear how and why something happens."*
- **Outline**: *"Give the main points/features/general principles; show the main structure and interrelations; omit details and examples"*
- **To what extent…**: *"Consider how far something is true, or contributes to a final outcome. Consider also ways in which it is not true."*

### 2.5 Cal Poly SLO — the best definition of *Define* for a biochemistry oral
`https://writingandlearning.calpoly.edu/content/gwr/wpe/tips/directive_words`

- **DEFINE**: *"Give the meaning of a word or concept; **place it in the class to which it belongs and set it off from other items in the same class.**"*
- **TRACE**: *"Follow the course of; follow the trail of; give a description of progress."*
- **INTERPRET**: *"Make plain; give the meaning of; give your thinking about; translate."*
- **PROVE**: *"Establish the truth of something by giving factual evidence or logical reasons."*
- **ILLUSTRATE**: *"Use a word picture, a diagram, a chart, or a concrete example to clarify a point."*
- **JUSTIFY**: *"Show good reasons for; give your evidence; present facts to support your position."*

Cal Poly's *Define* is a **fixed English sentence frame**, and it should be drilled as one:
**"X is a [class] that [distinguishing property]."** *"Hexokinase is a kinase that phosphorylates
glucose at C6 and, unlike glucokinase, has a low Km and is inhibited by its product."*

### 2.6 CSU Northridge — the only verified definition of *Enumerate*
`http://www.csun.edu/~hcpas003/DirectiveVerbs.html`

- **ENUMERATE**: *"Write in list or outline form, giving points concisely one by one."*
- **LIST**: *"Write an itemized series of concise statements or terms."*
- **DESCRIBE**: *"Bring facts together to give a picture or model of a certain concept."*
- **EXPLAIN**: *"Make a concept plain or understandable, give reasons and causes."*
- **STATE**: *"Present the main points in a brief, clear sequence."*

---

## 3. The stems catalogue

For each stem: **what it demands**, the **answer shape** that satisfies it, and the
**confusable neighbour** — the stem that sounds similar but wants something else.

Evidence tags apply to the *stem wording*. **The "what it demands" and "answer shape" columns
are my analysis throughout [C]** — a design proposal for the app, not a quotation.

### 3.1 Group NARRATE — produce a pathway or mechanism, in order

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"Describe…"** **[A*]** — 21 occurrences in the RGUHS corpus; `"Describe TCA cycle. Discuss in detail its energetics, regulation and its role"` | An accurate account of *what it is / what happens*. No judgement required. | Structured factual account, ordered. Draw if you can. | **"Explain…"** — wants *why/how*. **The most-confused pair in exam command words.** |
| **"Explain…"** **[A*]** — `"Explain the amphibolic role of TCA cycle"` | The **causal mechanism** or the **reasons**. Every step joined by a *because*. | Chain of causation. "X binds Y, which changes the conformation, which exposes the site, which…" | "Describe" (facts only); "Why does…" (purpose, not mechanism). |
| **"Explain how…"** vs **"Explain why…"** **[A*]**, AQA definitions in §2.2 | *how* = the process. *why* = the reasons. | *how*: ordered steps. *why*: because-chain ending in a purpose. | Each other. One word apart, entirely different answer. |
| **"Give an account of…"** **[A*]** — `"Give an account of the metabolism of glycine and outline the synthesis of different important substances from glycine"` | A fuller, **headed survey** than "describe". Almost exclusively Indian phrasing. | Headings, then content under each. | "Outline" (skeleton only). |
| **"Outline…"** **[A*]** — `"Outline the steps for synthesis of cholesterol. Discuss the rate limiting step…"` | Main points **only**. Deliberately not the detail. Portsmouth: *"normally without going into detail."* | 4–6 sentences. Named steps, no intermediates. | "Describe" — same content, full detail. Over-delivering here eats your clock. |
| **"Take me through…" / "Walk me through…" / "Talk me through…"** **[C]** | The whole sequence, start to finish, nothing skipped. | Ordered narration: where the substrate enters → each step's enzyme → where the product leaves. Explicit "first… then… and that gives…". | **"Tell me about…"** — *not* ordered; wants an overview with the important thing first. |
| **"Tell me about…" / "What can you say about…"** **[C]** | A structured overview, most important first. | Headline sentence, then 3–5 organised points: definition → location → purpose → regulation → clinical hook. | "Take me through…" |
| **"Trace…"** **[A*]** (Cal Poly) — *"Follow the course of… give a description of progress."* | Follow one entity through a system. | Follow the **atom or the molecule**, not the pathway: "the carbon enters as… and leaves as…" | "Describe the pathway" (the pathway, not the entity). |

### 3.2 Group PURPOSE — tell me why the cell bothers

This group most reliably breaks a memorised-pathway answer, because the correct answer is
**not on the pathway diagram**.

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"What is the significance of…"** **[A]** — *significance* appears in 55 of 436 CE items; `"Significance of nucleotides for metabolism"` (Comenius 45); **[A*]** `"Describe pentose phosphate pathway & its significance"` (RGUHS) | Why it matters to the organism. **Teleology is expected and wanted.** | "It matters because…" + 2–3 consequences at cell / organ / organism level + what fails without it. | "What is the mechanism of…" — how, not why. Students routinely answer one with the other. |
| **"What is the role of X in Y?"** **[A]** — *role* in 55 of 436; `"role of cAMP in regulation of metabolism"` | X's **job inside the named system Y**. Scope is fixed by Y. | "In Y, X does Z." One sentence, then evidence. **Stay inside Y.** | "What is X?" — identity/definition. |
| **"Why does the cell bother to…" / "What's the point of…" / "Why doesn't the cell just…"** **[C]** | A **teleological/economic** justification: energetic cost, control, compartmentation. | "Because otherwise…" — name the alternative and say why it is worse. | "How does the cell…" (mechanism). This stem *sounds* like small talk. It is usually the highest-scoring question in the exam. |
| **"Explain why:"** as a section header, followed by a bare assertion **[A*]** — BFUHS: `"Iron is called a 'one-way element'"`, `"Vitamin C is required in synthesis of collagen."`, `"Topoisomerase is required during DNA replication."` | Justify a statement the examiner has asserted. **The statement is given — do not re-state it.** | "That is because…" → one causal chain → back to the assertion. | "Describe…" — the trap is re-telling the assertion instead of justifying it. |
| **"Account for…"** **[A*]** (Portsmouth: *"heavier focus on reasons why something is or is not the way it is"*) | Reasons for an observation the examiner has just stated. | As above. Never re-describe the observation. | "Describe" / "Explain". Most-failed command word in written exams; behaves the same spoken. |
| **"What is the advantage of…" / "Why is it useful that…"** **[C]** | Comparison against a counterfactual. | "Compared with doing it the other way, this gives…" | "What is the function of…" — the job, not the benefit over an alternative. |
| **"What would happen if there were no…"** **[C]** | Consequence of removal — often a disease question in disguise. | Immediate biochemical consequence → downstream → named clinical picture. | "What happens in…" (normal-state description). |

### 3.3 Group COMPARE

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"Compare and contrast X and Y"** **[A*]** — `"Compare and contrast various kidney function tests in renal failure"` (BFUHS); Portsmouth: *"Show similarities and differences"* | **Both** similarities and differences. | **Interleaved, dimension by dimension** — location, enzymes, cofactors, regulation, energetics. **Never "all of X, then all of Y."** Use *whereas / in contrast / similarly*. | **"Contrast X and Y"** — differences **only**. |
| **"Differentiate between…"** **[A*]** — `"Differentiate between saturated and unsaturated fatty acids"` (Meru); `"What is protein energy malnutrition? In a tabular form explain the differences between Marasmus and Kwashiorkor"` (BFUHS — the paper **commands the table**) | Differences only. | **A table.** In speech, verbalise the table: "On location — X is cytosolic, Y is mitochondrial. On cofactor — …" | "Compare and contrast" (needs similarities too). |
| **"Distinguish X from Y"** **[A*]** (AQA: *"Explain ways in which two things differ"*) | Differences, and usually the **diagnostic** one first. | Lead with the single decisive difference, then the rest by dimension. | "Compare". |
| **"What do X and Y have in common?"** **[C]** | Similarities only. Often tests whether you see a shared mechanism. | Name the shared principle first, then instances. | "How do they differ" — the mirror image. *differ* and *in common* are short and unstressed. **High listening risk.** |
| **"Where else in metabolism do you see this?"** **[C]** | Transfer — the same principle in a second place. | "Yes — the same thing happens in…", then draw the parallel explicitly. | Sounds like a yes/no question. **Never answer "yes."** |
| **"Which is more…?" / "Which is faster / more efficient / rate-limiting?"** **[C]** | A **choice plus a justification**. | Name it, then one sentence of why. Do not hedge. | "Compare…" — open, no choice required. |

### 3.4 Group ENUMERATE — bare lists, no prose

**These are where over-answering costs most.** AQA: *Give* = *"Only a short answer is
required, not an explanation or a description."*

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"Enumerate…"** **[A*]** — `"Enumerate three functions of the liver and three tests with reference ranges to assess them"`; CSUN: *"Write in list or outline form, giving points concisely one by one."* | A bare list. | Say the count first, then the items. "Three: one… two… three." **Nothing else.** | "Describe" (prose + detail). |
| **"Name the…"** **[A*]** — `"Name the coenzyme forms of Niacin and their biochemical role."`; `"Name four synthetic analogues of nucleotides."` | Retrieval only. AQA: *Name* = *"Identify using a recognised technical term."* | The proper nouns. **Count discipline: "any three" means exactly three.** | "Describe the…" |
| **"Classify…"** **[A*]** — `"Classify enzymes with two examples of each class."`; `"Classify transport mechanisms across cell membranes. Define uniport, symport and antiport. Give an example of each"` | A **taxonomy** with one example per class. | Name the classifying principle → the classes → one example each. | "List the types of" — no organising principle required. |
| **"Define…"** **[A*]** — `"Define Km value. What is its significance?"`; Cal Poly's genus+differentia framing | One sentence. Then stop, unless a follow-on clause was attached. | **"X is a [class] that [distinguishing property]."** | "What is meant by X?" = the same thing (AQA). "Explain X" = far longer. |
| **"State…"** **[A*]** (AQA: *"Express in clear terms"*) | One clause. | One clause. | "Discuss…" |
| **"Write short notes on…"** / bare noun-phrase items **[A*]** — RGUHS: `"Zymogens"`, `"Lac operon"`, `"Plasma buffers"`, `"Malate-aspartate shuttle"` | Whatever the section header and mark value say. | **Read the marks:** 5 marks ≈ half a page + a diagram; 3 marks ≈ 4–6 lines; 2 marks ≈ definition + one example. | Nothing — this is exactly the Central-European noun-phrase form (§1.1), and the same skill applies. |
| **"Add a note on…" / "Write a note on…"** **[A*]** — `"Give an account of Citric acid cycle. Add a note on its energetics and its importance"` | An **appended sub-topic**, ~2–3 of the marks. Never the main answer. | Two or three sentences at the end. Signpost it: "And on its energetics —" | The main clause of the question. Spending the answer on the "note" is a classic loss. |

### 3.5 Group LOCATE AND QUANTIFY — short factual probes

Usually *checks*. They want a short answer immediately; narration reads as not knowing.

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"Where in the cell does this happen?"** **[C]** | A compartment. | Three words. "Mitochondrial matrix." **Then stop.** | **"Where in the body…"** — an **organ**. One unstressed word apart. Classic mishearing. |
| **"In which tissue / which organ?"** **[C]** | An organ, plus why it is that organ. | "Liver — because it has glucose-6-phosphatase." | "Where in the cell" (organelle). |
| **"What is the rate-limiting step?"** **[A*]** — `"Outline the steps for synthesis of cholesterol. Discuss the rate limiting step and regulation…"` (RGUHS) | **One enzyme name**, then its regulation. | Enzyme → reaction it catalyses → activators and inhibitors. | **"What is the committed step?"** — often but **not always** the same enzyme (= first irreversible step past the branch point). Also "the first step" (literally first, often not regulatory). |
| **"What regulates it?" / "How is it controlled?"** **[A]** — *regulation* appears in 69 of 436 CE items | The full regulation inventory. | Four channels, **in this order**: **allosteric → covalent/phosphorylation → hormonal → transcriptional**. Say the headings aloud; it proves completeness even if an example escapes you. | "What activates it?" — narrower, activators only. |
| **"Under what conditions…" / "When does this happen?"** **[C]** | A physiological state: fed, fasting, starvation, exercise, hypoxia, stress. | State → hormone that signals it → effect. | "Under which conditions in the assay…" — a lab question (pH, temperature, [S]). Same words, different world. |
| **"How much ATP…?" / "What is the energy yield?"** **[A]** — Comenius 13, 27: `"energy yield of glycolysis…"`, `"energy yield of β-oxidation"` | **A number**, with the arithmetic if challenged. | Number first. Then the breakdown. Then the P/O-ratio caveat only if pressed. | "Is it energetically favourable?" — wants the sign of ΔG, not a count. |
| **"Which coenzyme / which vitamin?"** **[A]** — Comenius 74 | A name. | Coenzyme → its vitamin → what it carries. | "Which cofactor?" — may want a metal ion, not a vitamin-derived coenzyme. |

### 3.6 Group PERTURB — suppose I inhibit…

Where knowing the pathway is necessary and not sufficient. The examiner is testing whether the
pathway is a **model** in your head or a **picture**.

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"What would happen if I inhibited X?" / "Suppose I block…"** **[C]**; the concept is published — `"Describe the components of electron transport chain. Write a note on uncouplers & inhibitors"` (RGUHS) **[A*]** | Reason forward through the pathway. | **Four moves, always in this order:** directly upstream accumulates → downstream falls → what the cell does instead → measurable or clinical consequence. | **"What inhibits X?"** — the inverse: a list. One phrase of difference, completely different answer. **High listening risk.** |
| **"What happens in a patient who lacks…?"** **[A]** — the frame is published: `"defects in metabolism of phenylalanine and tyrosine"` (Comenius 40); `"Catabolism of aromatic amino acids, disorders."` (1. LF UK II.13) | Named deficiency → biochemical block → clinical picture. | Enzyme → substrate accumulates → named metabolite → named disease → named lab finding. | "What happens if the substrate is absent?" — nutritional, not genetic. |
| **"Suppose the patient is fasting / starving / exercising — what changes?"** **[C]** | Re-run the same pathway under a different hormonal state. | State → hormone → the two or three enzymes whose activity flips → net flux direction. | "What is the normal state?" |
| **"What if I add an uncoupler?"** **[A]** — the concept is published, UPOL SZZ item 12: `"Rozpojovače a inhibitory oxidativní fosforylace"` | Distinguish **uncoupler** from **inhibitor**. | Uncoupler: electron transport speeds **up**, ATP synthesis stops, heat. Inhibitor: everything stops. Say both and name which is which. | "What if I inhibit ATP synthase?" — opposite behaviour. The two words are the entire question. |
| **"Would this drug likely be effective if given orally?"** **[A*]** — MSU BMB 514: `"A new drug… has a critical amino group and a carboxyl group with pKa values of ~9 and ~4. In order to be active, both groups need to be in their acid (HA) form. Would this drug likely be effective if given orally? (The typical pH of the stomach is ~2.)"` | **A closed choice plus reasoning.** The MIT/MSU signature. | Answer the closed question in one word, then *"because…"* in two sentences. **The marks are in the reasoning, not the choice.** | An open "discuss" — here, hedging loses. |
| **"Propose a hypothesis for why…"** **[A*]** — MIT 7.05 | Invent a plausible mechanism for a scenario you have never seen. AQA's *Suggest*: *"apply their knowledge and understanding to a new situation."* | "One possibility is that… which would predict…" Offer a testable consequence. | "Explain why" — assumes a known answer exists. Here it may not. |

### 3.7 Group CLINICAL — the bridge question

Every Central-European and Anglophone list carries clinically flavoured items (§5). The spoken
version bridges from the drawn topic into a disease.

| stem | what it demands | answer shape | confusable neighbour |
|---|---|---|---|
| **"How is this measured in the laboratory?"** **[A]** — `"…possibilities of biochemical diagnostics of hepatocyte damage and liver functions"` (1. LF UK III.8); `"Enzymes in blood plasma and their significance for biochemical diagnosis"` (Comenius 93) | Analyte, method, reference direction. | Analyte → sample type → method → what a raised/lowered value means. | "How does the body measure it?" — a sensing/regulation question. |
| **"Why is this enzyme used as a marker?"** **[C]** | Tissue specificity + release kinetics. | "Because it is concentrated in tissue T and leaks when the membrane is damaged; it rises at N hours, peaks at M." | "What does this enzyme do?" (catalytic function). |
| **"What would you expect the lab values to be?"** **[C]** | Direction of change for 2–4 named analytes. | Speak the table: "Bilirubin up, conjugated fraction up, urine bilirubin present, urobilinogen down." | "What are the normal values?" — wants numbers. |
| **"Give me an example of a drug that…"** **[A]** — `"Use of enzyme inhibitors in medicine"` (1. LF UK II.4); `"Antimetabolites"` (Plzeň 10) | One named drug and its target. | Drug → target enzyme → consequence → what it treats. | "Give me an example of an inhibitor" — may want a physiological metabolite, not a drug. |
| **"What action do you take?" / "What further information would you require?" / "What steps would you take?"** **[A*]** — RCPath FRCPath Part 2 oral, verbatim | A **management plan**, in the second person and the conditional. | "First I would… then I would… and I would document…" Numbered actions, safety first. | "What is the diagnosis?" — a noun, not a plan. **Oral stems in UK professional exams are overwhelmingly second-person and hypothetical: *would* and *might*, not *is*.** |

### 3.8 The US clinical-vignette stem — one invariant shape

**[A*]** In the US MCQ tradition the stem is a patient narrative with numbers, then a single
lead-in, and the lead-in is nearly always *"Which of the following…"*:

> `"A 40-year-old man comes to the office because of a 1-day history of severe pain in his right great toe… Three days ago, he attended a wedding at which he ate lobster and drank multiple bottles of beer… The most likely cause of this patient's condition is accumulation of intermediates during which of the following processes?"` — USMLE Step 1 sample, Q32

RCPath's sample paper **[A*]** even labels the architecture and states its own design rule
verbatim:

> `"Stem of the Question: Serum protein electrophoresis can identify changes in the patterns of serum proteins. Lead-in: Which regions are likely to increase during an acute phase response?"`
> `"The question will be worded so that the candidate should be able to answer it without the requirement to consult the answer options."`

**That last sentence explains why English exam stems are so long**, and it is worth teaching
directly: the preamble is not decoration and it is not a trap — it is *the whole question*,
and the final clause only tells you which part of it to answer. Which leads to §3.9.

### 3.9 The preamble trap

**[C] for the example, but this is the structural pattern behind the reported failure mode.**
Examiners frequently embed the real question at the **end** of a long preamble:

> "So — you've told me about the citric acid cycle, and you mentioned it runs in the
> mitochondrial matrix, which is right, and of course the NADH has to get its electrons to
> the respiratory chain, and there's a question about how the cytosolic NADH does that,
> because it can't cross — **so how does it?**"

Everything before the final six words is scaffolding. A listener decoding word by word spends
all attention on the preamble and reaches the actual question with no capacity left.

**Drill implication:** present some items as a long spoken preamble with a short question at
the end, and score **only** whether the final demand was identified.

### 3.10 The negative-stem trap

**[A*]** The NBME item-writing guide states the problem outright:

> *"A negative phrasing in the lead-in asks the test-taker to find the least accurate option, with the rest being accurate, rather than to find the most accurate option. If most of the items on a test are positively phrased, the inclusion of a negatively phrased item carries the risk that the test-taker will miss the word 'except,' **even when it is set in bold and/or capitalized**."*

Real published negative stems **[A*]**: `"The following are hydrophilic amino acids EXCEPT;"`
and `"The following statements about DNA structure are correct EXCEPT"` (Meru Univ.);
`"Which of these statements about enzyme-catalyzed reactions that obey Michaelis-Menten
kinetics is false?"` (Boston University).

**The reasoning that matters here [C]:** NBME says a *bold, capitalised* EXCEPT is still missed
by native readers of a printed page. In a spoken oral there is no bold and no capitalisation
at all — the negation survives only as an unstressed, often contracted syllable. **The risk is
strictly worse orally than the NBME warning describes.**

---

## 4. Probing moves — what the follow-up actually signals

The highest-value section for the stated failure mode, and the one where a non-native speaker
most often misreads the *social* signal rather than the words.

### 4.1 The structural fact

**[B]** Classroom and exam talk runs on a three-move exchange — teacher **I**nitiates, student
**R**esponds, teacher **F**ollows up / **E**valuates (Sinclair & Coulthard 1975; Mehan 1979).
The reported characterisation: *"the teacher rarely asked a question because he or she
genuinely wanted to know the answer. Instead, the teacher wanted to know whether the student
knew 'the answer'."*

**[C]** The consequence for a candidate: **whether you passed the last answer is encoded in
the examiner's next utterance, not in their face.** Read the third move, not the expression.

### 4.2 The verified probe taxonomy

**[A*]** Georgia Highlands College tutor training publishes a four-way taxonomy of probing
questions with example wordings. This maps directly onto exam probes, and it is the decoding
key:

| family | source's description | verbatim example stems | **what it signals** |
|---|---|---|---|
| **Prompting** | *"Generally follows an 'I don't know' response"* | *"Rephrase the question in different terms."* · *"Provide a partial answer"* · *"Refer to material already mastered"* | **You were wrong or stuck.** The examiner is scaffolding you back. |
| **Clarification** | *"Ask for more information"* | *"Can you rephrase that?"* · *"Can you be more specific?"* · *"Can you elaborate on your response?"* · *"Can you explain it to me?"* | **Right but underspecified.** Add detail. **Do not change the answer.** |
| **Critical awareness** | *"Require justification and deeper thinking"*; reveal *"whether they're reciting memorized content or truly understanding"* | *"What are you assuming?"* · *"Why do you think that is so?"* · *"What is the opposite point of view?"* · *"What are some examples you can include?"* | **Your recall is accepted; understanding is now being tested.** |
| **Refocusing** | *"Move discussion forward **after strong responses**"* | *"What effects will this have on ___?"* · *"How does this idea relate to…?"* · *"What similarities/difference do you find between these two…?"* · *"Can you summarize our discussion?"* | **You were right and the examiner is moving up a level.** |

This is the single most useful published finding in the whole document, because it inverts the
intuitive reading. **"Let me put it another way" = you are in trouble. "And what effect does
that have on…?" = you are doing well.** A candidate who reads escalation as hostility will
retract correct answers.

### 4.3 Examiner-side guidance

**[A*]** "12 Tips for Effective Questioning in Medical Education", Michigan State OMERAD:

- **Tip 3** — use all Bloom levels; *"Questions should advance in complexity with learner
  proficiency."* → **[C]** escalation is deliberate examiner *design*; harder questions are
  evidence you are doing well.
- **Tip 6 — "Break from Initiate-Respond-Evaluate Pattern"**: *"use 'third-turn responses' to
  prompt further thinking through follow-up questions, requests for explanation, or invitations
  to challenge ideas."* → **"And then?" / "Go on" is documented examiner technique, not
  dissatisfaction.**
- **Tip 8 — "Give Think-Time After Questions"**: *"waiting at least 3 seconds after asking
  questions, **and more time for English language learners**, had significant benefits"*
  including longer responses and increased cognitive complexity.
- **Tip 9 — "Know When to Stop Questioning"** → **[C]** if the examiner supplies the answer and
  moves on, that item is closed. Do not chase it.

**[B]** Rowe's wait-time research: ideal wait time 3–5 s; untrained teachers leave under a
second; doubling 1.5 s → 3 s increases response length, correctness and confidence.

**Practical:** a 3-second silence after your answer is **normal examiner behaviour**, not
disapproval. Do not fill it by retracting a correct answer.

### 4.4 The probe table for the app

Signals in the middle column are **[C]** except where the row cites §4.2/§4.3.

| probe | what it usually means | what to do | what it does **not** mean |
|---|---|---|---|
| "And then?" / "Go on." / "Continue." | You are **right** and stopped too early — OMERAD Tip 6 **[A*]** | Keep going down the same path. Do not restart, do not change topic. | Not a correction. |
| "What effect does that have on…?" / "How does that relate to…?" | **Refocusing** — you were strong, level is going up **[A*]** | Answer at the new level. Take it as a good sign. | Not a trap. |
| "Can you be more specific?" | **Clarification** — you gave a category where a **name** was wanted **[A*]** | Give the proper noun: enzyme, metabolite, compartment, number. | Not "say more words", and not "you are wrong". |
| "Let me put it another way." / "Think about the liver…" | **Prompting** — you were wrong or stuck **[A*]** | Take the scaffold. Use the hint literally; it is the answer's location. | Not politeness. |
| "Anything else?" | Your list is **incomplete** — a specific item is missing | Search out loud by category: "allosteric, covalent, hormonal, transcriptional…" | Not "you are wrong". |
| "Are you sure?" / "Really?" | **Ambiguous by design.** A Cambridge University Press exam-skills book reportedly puts it as: *"it is not to trip you up but because the answer you gave is not the one they expected"* **[B — snippet only, PDF unreadable; do not present as verified]** | **Re-derive, don't retract.** *"Let me restate my reasoning — I said X because Y. If you're pointing at Z, then…"* | Not automatically "you are wrong". |
| "Why is that so?" | **Critical awareness** — your last statement was accepted and now needs a mechanism **[A*]** | Answer only the last thing you said. Do not re-narrate. | Not "start again". |
| "What are you assuming?" | **Critical awareness [A*]** | Name the assumption explicitly, then say whether it holds. | Not an accusation. |
| "In other words…?" / "So what you're saying is…" | Examiner is rephrasing to rescue you, or checking you meant it | The rephrasing usually contains the answer's shape. Confirm or correct **explicitly**. | Not agreement. |
| "Let's move on." / "Fine, next." | Either satisfied, or has given up on this branch — OMERAD Tip 9 **[A*]** | Reset for the new topic. | Not a grade. |
| silence, ~3 s | Normal think-time; often note-taking — OMERAD Tip 8 **[A*]** | Wait. Then continue, or ask *"shall I go into the regulation?"* | Not disapproval. |
| "That's one. What about the others?" | You gave 1 of N and the examiner has a number in mind | Ask for the frame: *"Do you mean the hormonal ones as well?"* | — |
| "Do you know…?" / "Have you heard of…?" | **Not** a yes/no question. It **is** the question. | Never answer "yes". Answer the content immediately. | — |

**[A*]** Practitioner advice from a viva survival guide worth keeping verbatim:
*"answer the question they ask not the one you'd prefer"*; *"If you don't know the answer
please just say so, it's OK."*; and it is legitimate to say you are having a blank and would
prefer to come back to a question later.

### 4.5 Structured vs unstructured oral — why the phrasing varies so much

**[A*]** Systematic review, BMC Medical Education 2023: *"Cronbach alpha of structured viva was
α = 0.80 compared to α = 0.50 to the conventional viva"*; traditional viva has *"poor content
validity, low inter-rater and inter-case reliability, inconsistency in marking, and lack of
standardization."*

**[A]** Loomba & Jindal 2024 (*Korean J Med Educ*), on undergraduate **biochemistry**
specifically: their structured design used three tiers — recall (2 marks), *"why"* /
biochemical basis of disease (4 marks), clinical correlation and application (6 marks).
Documented failings of the conventional viva: *"unplanned"*, *"examiner temperament affects
scoring"*, *"converts into confrontation between examiner and student"*, carryover effect,
poor inter-examiner agreement. **The paper contains no verbatim example questions.**

**[C] Reading for the candidate:** the three tiers correspond exactly to stem groups
§3.4 (ENUMERATE = recall), §3.2 (PURPOSE = the "why" tier) and §3.7 (CLINICAL = application).
Being moved up the tiers is being marked up.

---

## 5. Topic frequency across independent institutions

### 5.1 Central-European English-language lists — matrix

Computed by keyword scan over the full text of four lists I fetched myself **[A]**.
**P** = Plzeň GM 2025/26 (100 items) · **L** = 1. LF UK ÚLBLD 2024/25 (152) ·
**G** = Comenius GM 2025/26 (95) · **D** = Comenius Dentistry 2025/26 (89). Sources in §9.

| topic | n | P | L | G | D |
|---|:--:|:--:|:--:|:--:|:--:|
| Enzyme structure, kinetics, regulation | 4/4 | Y | Y | Y | Y |
| Respiratory chain / oxidative phosphorylation | 4/4 | Y | Y | Y | Y |
| Citric acid (Krebs) cycle | 4/4 | Y | Y | Y | Y |
| Glycolysis and its regulation | 4/4 | Y | Y | Y | Y |
| Gluconeogenesis | 4/4 | Y | Y | Y | Y |
| Glycogen synthesis and breakdown | 4/4 | Y | Y | Y | Y |
| Pentose phosphate pathway | 4/4 | Y | Y | Y | Y |
| Fatty-acid oxidation | 4/4 | Y | Y | Y | Y |
| Ketone bodies | 4/4 | Y | Y | Y | Y |
| Cholesterol and bile acids | 4/4 | Y | Y | Y | Y |
| Lipoproteins | 4/4 | Y | Y | Y | Y |
| Deamination / transamination | 4/4 | Y | Y | Y | Y |
| Ammonia handling / urea cycle | 4/4 | Y | Y | Y | Y |
| Aromatic amino acids (Phe/Tyr) and their defects | 4/4 | Y | Y | Y | Y |
| One-carbon units (THF, B12) | 4/4 | Y | Y | Y | Y |
| Purine and pyrimidine nucleotides | 4/4 | Y | Y | Y | Y |
| Heme synthesis and degradation / porphyrins | 4/4 | Y | Y | Y | Y |
| Haemoglobin | 4/4 | Y | Y | Y | Y |
| Blood plasma proteins | 4/4 | Y | Y | Y | Y |
| Vitamins as coenzymes | 4/4 | Y | Y | Y | Y |
| Buffers / acid–base balance | 4/4 | Y | Y | Y | Y |
| Kidney function, clearance, urine | 4/4 | Y | Y | Y | Y |
| Liver function and biotransformation | 4/4 | Y | Y | Y | Y |
| Membrane structure and transport | 4/4 | Y | Y | Y | Y |
| Hormone mechanisms / hormonal regulation | 4/4 | Y | Y | Y | Y |
| Digestion and absorption of nutrients | 4/4 | Y | Y | Y | Y |
| Diabetes mellitus / blood-glucose regulation | 4/4 | Y | Y | Y | Y |
| Clinical enzyme diagnostics | 4/4 | Y | Y | Y | Y |
| Connective tissue / collagen | 4/4 | Y | Y | Y | Y |
| Jaundice / icterus | 3/4 | Y | · | Y | Y |
| Uric acid / gout | 3/4 | Y | · | Y | Y |
| Signal transduction, second messengers, G proteins | 3/4 | · | Y | Y | Y |
| DNA structure and replication | 3/4 | Y | Y | Y | · |
| RNA and transcription | 3/4 | Y | Y | Y | · |
| Translation / proteosynthesis | 3/4 | Y | Y | Y | · |
| Genetic code | 3/4 | Y | Y | Y | · |
| Fatty-acid / lipid biosynthesis | 3/4 | Y | Y | Y | · |
| Muscle contraction | 3/4 | Y | Y | Y | · |
| Iron metabolism | 3/4 | Y | Y | Y | · |
| Enzyme inhibition (as its own item) | 2/4 | Y | Y | · | · |
| PCR and molecular methods | 2/4 | Y | Y | · | · |
| Immunoglobulins | 2/4 | Y | Y | · | · |
| Reactive oxygen species / antioxidants | 2/4 | Y | Y | · | · |
| Cell cycle / apoptosis / oncogenes | 1/4 | · | Y | · | · |

**Reading.** The 29 topics at 4/4 are the defensible key-point set: three institutions, two
countries. The **molecular-biology block** is where the lists genuinely diverge — Comenius
Dentistry drops it almost entirely; 1. LF UK devotes a full quarter of its list (38 of 152)
to it. **If the exam is 1. LF UK, molecular biology is 25% of the list and is not peripheral.**

### 5.2 Anglophone / Indian papers — independent corroboration

**[A*]** Computed by a research agent over 11 machine-read papers (MSU BMB 514 ×2, USMLE Step 1
sample, RCPath Part 1 sample, MIT 7.05 Exam 4, RGUHS 2007–13 compilation, Meru Univ. 2021,
Boston Univ. 1998, VMRF 2018, BFUHS CBME sample).

| topic | papers | which |
|---|:--:|---|
| Lipids / fatty acids / lipoproteins | 9 | MSU×2, USMLE, RCPath, MIT, RGUHS, Meru, BU, VMRF |
| Vitamins & minerals | 9 | MSU×2, USMLE, RCPath, RGUHS, Meru, BU, VMRF, BFUHS |
| Haem / haemoglobin / bilirubin / porphyria | 9 | MSU×2, USMLE, RCPath, RGUHS, Meru, BU, VMRF, BFUHS |
| Glycolysis / gluconeogenesis | 7 | MSU×2, USMLE, RCPath, MIT, RGUHS, VMRF |
| Enzyme kinetics & inhibition | 6 | MSU×2, USMLE, RGUHS, Meru, BU |
| Amino acid / urea cycle | 6 | MSU, USMLE, RCPath, RGUHS, BU, VMRF |
| Acid–base, buffers, blood gases | 6 | MSU, USMLE, RCPath, RGUHS, BU, BFUHS |
| Purine/pyrimidine & gout | 6 | MSU, USMLE, RCPath, MIT, RGUHS, BFUHS |
| Diabetes / blood-glucose regulation | 6 | MSU×2, USMLE, RCPath, RGUHS, BFUHS |
| Protein structure | 5 | MSU, USMLE, RGUHS, Meru, BU |
| Clinical chemistry / organ-function tests | 5 | MSU, USMLE, RCPath, RGUHS, BFUHS |
| Nucleic acids / replication / transcription | 4 | RGUHS, Meru, BU, BFUHS |
| TCA cycle | 3 | MSU×2, RGUHS |
| ETC / oxidative phosphorylation | 3 | MSU, MIT, RGUHS |

**The two tables agree on the core.** Every topic at 6+ papers here is also 4/4 in §5.1.
Combined, the intersection across **7 institutions in 5 countries** is:

> enzymes and their regulation · glycolysis/gluconeogenesis · citric acid cycle ·
> respiratory chain and oxidative phosphorylation · fatty acids and lipoproteins ·
> amino acids and the urea cycle · purines/pyrimidines and gout · haem and bilirubin ·
> vitamins as coenzymes · acid–base balance · diabetes and blood-glucose regulation ·
> clinical enzyme diagnostics

**Gout is the best single item for studying how phrasing differs** **[A*]** — it appears as a
US clinical vignette ("lobster and beer"), an Indian long essay (`"Enumerate the reactions of
purine degradation and add a note on Gout"`), and a CBME clinical case with a lab panel: the
same biochemistry through three completely different question grammars.

### 5.3 Czech-language lists

| list | items | status |
|---|---|---|
| LF Plzeň, `Lékařská chemie a biochemie II`, VL, 2025/26 | 100 | **[A]** full text; item-for-item translation of the English list |
| Palacký University Olomouc, Faculty of Science — `Okruhy ze Základů biochemie k SZZ – bakalářské studium BIOCHEMIE` | 29 | **[A]** full text. A genuine **státní závěrečná zkouška** list |
| LF Hradec Králové (via WikiSkripta, 2019/20) | 98 in 3 blocks | **[A]** for the 45 items quoted; rest summarised |
| 2. LF UK, `Otázky ke státní závěrečné zkoušce`, Zdravotnický laborant | 30 + 20 | **[A]**; **health laboratory technician** SZZ, not General Medicine |
| 1. LF UK, `Biochemie a patobiochemie` | 16 + specials | **[A]**; **doctoral** state exam. Format: 10-min presentation + 4–6 commission questions |
| 3. LF UK, `Biochemie a patobiochemie` | ~17 + specials | **[A]**; also **doctoral** |

**Warning for the app.** Two of the pages that rank first for "biochemie … státní zkouška"
(1. LF and 3. LF `Biochemie a patobiochemie`) are **PhD** lists, and one (2. LF) is the
**laboratory technician** programme. They are not the undergraduate medical biochemistry exam.
Do not blend them into one topic pool without a label.

A *science-faculty* biochemistry state exam differs from a *medical* one predictably: Olomouc
**adds** photosynthesis, RUBISCO, the Calvin–Benson cycle and C3/C4/CAM plants (items 21–23
**[A]**) and **drops** the clinical block entirely — no acid–base, no jaundice, no lab
diagnostics.

### 5.4 What the phrasing statistics themselves say

Counted over the 436 Central-European English items, **[A], computed by me from fetched text**:

| word appearing anywhere in the item | items | % |
|---|---:|---:|
| metabolism | 87 | 20.0% |
| synthesis | 78 | 17.9% |
| **regulation** | 69 | 15.8% |
| **significance** | 55 | 12.6% |
| **role(s)** | 55 | 12.6% |
| function | 40 | 9.2% |
| degradation | 33 | 7.6% |
| structure | 29 | 6.7% |
| mechanism | 26 | 6.0% |
| biosynthesis | 21 | 4.8% |
| transport | 21 | 4.8% |
| formation | 18 | 4.1% |
| examples | 17 | 3.9% |
| utilization | 12 | 2.8% |
| properties | 12 | 2.8% |
| energy yield | 10 | 2.3% |
| diagnos* | 10 | 2.3% |
| disorders / defects | 15 | 3.4% |
| **comparison / difference** | **1** | **0.2%** |

And the stem-verb tally over ~509 RGUHS items **[A*]**: `What is` 23 · `Write` 21 ·
`Describe` 21 · `Define` 14 · `What are` 14 · `Name the` 13 · `Name` 10 ·
`Give an account of` 8 · `Explain` 8 · `How…?` 5 · `Classify` 5 · `List` 4 · `Outline` 4 ·
`Enumerate` 3 · `Mention` 2 · `Differentiate` 1 · `Discuss` 1 · **`Justify` 0**.

Three conclusions:

1. **`regulation` + `significance` + `role` together touch ~40% of all Central-European
   items.** The three commonest demands are *how is it controlled*, *why does it matter*,
   *what job does it do*. A candidate who can reliably produce those three answer shapes on
   demand covers most of the list.
2. **Comparison is essentially absent from the published lists (1 of 436) — and from the Indian
   papers (`Differentiate` 1, `Compare` 0 as an opening stem).** But "compare and contrast" is
   a standard *spoken* probe. **Comparison is almost entirely a follow-up phenomenon, invisible
   in the material students study from.** That is a blind spot the app can close cheaply.
3. `Justify` never appears as a stem, in any corpus. Its work is done by
   **"Explain why:"** + a bare assertion (§3.2).

---

## 6. Listening traps for a non-native speaker

### 6.1 Published confusable lists

**[A*]** Two medical-transcription sound-alike lists were fetched. Entries relevant here,
verbatim where quoted:

From **2Ascribe**, `https://www.2ascribe.com/articles/general-interest/sound-alike-words-part-1-a-c`:

- **afferent** *"toward a center"* / **efferent** *"outward from a center"*
- **accept** *"to receive willingly"* / **except** *"other than; to leave out or exclude"* — **this pair is a trap inside the question itself**
- **acetic** *"sour"* / **acidic** *"acid-forming"*
- **alkalosis** / **ankylosis**
- **allude / elude / elute** (*"extract or remove"* — a lab verb the candidate will actually use)
- **cite / -cyte** (*"cell"*) **/ sight / site**
- **complement** *"that which completes or makes perfect"* / **compliment** — *the complement system*
- **creatine** *"high-energy phosphate"* / **creatinine** *"product excreted in urine; diagnostic indicator of kidney function"*
- **keratan** *"a sulfate found in the cornea and skeletal tissues"* / **keratin**
- **cholic** *"an acid; relating to bile"* / **colic**
- **cilium** / **psyllium** · **carotid** / **parotid** · **cecal / fecal / thecal** · **clonus / conus** · **mucous / mucus**
- **continual** *"recurring frequently"* / **continuous** *"going on without interruption"*

From **Accuscribers**, `https://accuscribers.com/confusing-sound-alike-medical-terms/`:
**abduct/adduct** · **agonist/antagonist** · **apophysis/epiphysis** · **dysphagia/dysphasia** ·
**humeral/humoral** · **ileum/ilium** · **infra-/intra-/inter-** (*"Infra– means below or
within"*; *"Intra– means on the inside"*; *"Inter– means between"*) · **metaphysis/metastasis** ·
**perfuse/profuse** · **radical/radicle** · **vesical/vesicle** · **villous/villus** ·
**viscous/viscus**.

**A negative result worth recording [A*]: no published confusable-pairs list for *biochemistry*
appears to exist.** The look-alike/sound-alike literature (ISMP, WHO) is about **drug names**;
the transcription lists are about **clinical terminology**. The list in §6.2 is therefore
assembled, not cited.

### 6.2 The biochemistry confusables — assembled, not cited

**[C] for the pairing and the disambiguation cue; the terms themselves are standard.**

**Class 1 — one phoneme apart, both plausible in the same sentence**

| heard as | could be | disambiguation cue |
|---|---|---|
| cytosine | cysteine | base vs amino acid. "pyrimidine / pairing / DNA" → cytosine; "sulfur / disulfide / protein" → cysteine |
| cytosine | cytidine | *-ine* = base; *-idine* = nucleoside |
| ketose | ketosis / ketogenesis | *-ose* = a sugar class; *-osis* = a clinical state |
| lipase | lyase / ligase | *lipase* has /p/; *lyase* does not. Digestion vs EC class 4 vs EC class 6 |
| **amylase** | **amylose** | enzyme vs polysaccharide — **the /-ase/ vs /-ose/ contrast is the highest-frequency trap in the subject** |
| aldose | aldolase | sugar class vs enzyme |
| protease | proteasome | the enzyme vs the machine |
| glucagon | glycogen / glycogenin | "hormone / secreted / alpha cells" vs "granules / stored / liver and muscle" |
| glucose | glucagon | in fast speech the first two syllables are identical |
| dehydrogenase | dehydratase | *-genase* removes H **to a carrier**; *-dratase* removes **water** |
| oxidase | oxygenase | oxidase → water or H₂O₂; oxygenase → O **incorporated into the substrate**. Also mono- vs di-oxygenase |
| **phosphorylase** | **phosphatase / phosphorylase kinase** | phosphorylase **adds** Pi by phosphorolysis; phosphatase **removes** it hydrolytically; phosphorylase kinase is a third thing |
| **synthase** | **synthetase** | *synthase* does **not** use ATP; *synthetase* (ligase) does. Deliberately tested |
| carboxylase | decarboxylase / carboxykinase | adds CO₂ / removes CO₂ / both-with-GTP |
| mutase | mutant / mutagen | *-ase* is always an enzyme |
| isomerase | isomer | enzyme vs substrate class |
| kinase | kinesin | phosphotransferase vs motor protein |
| enolase | enol | — |
| nuclease | nucleoside / nucleotide | — |
| guanine | guanosine / guanidino | base / nucleoside / functional group |
| adenine | adenosine | base / nucleoside |
| chaperone | chaperonin | — |
| **anabolic** | **catabolic** | initial /æ/ vs /kæ/. One consonant carries the whole meaning |
| **hyper-** | **hypo-** | **highest-consequence pair in the subject.** Differ in the second, unstressed syllable only |
| intra- | inter- / infra- | inside / between / below |
| -emia | -uria | in the blood vs in the urine |
| carnitine | carnosine / creatine | fatty-acid shuttle / dipeptide / phosphagen |
| tyrosine | thyroxine | related, not the same; both occur in the same answer |
| glycine | glycerol / glycerine | amino acid vs alcohol |
| ilium | ileum | bone vs bowel |
| afferent | efferent | classic even for natives |

**Class 2 — same root, different word class, different answer**

*glycolysis / glycogenolysis / glycogenesis / gluconeogenesis* — four words, one root, and in
fast speech the interior syllables carry the whole meaning. **The single highest-value listening
drill in the subject.** Discriminate by **length pattern**, not by sound:
`gly-CO-ly-sis` (4) · `gly-co-ge-NO-ly-sis` (6) · `gly-co-GE-ne-sis` (5) ·
`glu-co-neo-GE-ne-sis` (7). Same for *lipolysis/lipogenesis*, *proteolysis/proteosynthesis*,
*ketogenesis/ketolysis*.

**⚠ But see §6.5 — this length-and-stress strategy is exactly what a Czech-accented speaker
does not produce.** The fallback is the surrounding syntax, not the word's own shape.

**Class 3 — the function words that carry the whole question**

Short, unstressed, reduced in connected speech, and each one flips the required answer:

| word | flips | note |
|---|---|---|
| **not** | the entire polarity | reduces to /nt/ or a nasal |
| **except** | inclusion → exclusion | near-identical to *accept* **[A*]** |
| **least / most** | direction of the ranking | — |
| **cell / body** | organelle vs organ | — |
| **inhibit** vs **what inhibits** | forward prediction vs a list | see §3.6 |
| **would / will / does** | hypothetical vs factual | /wəd/, /l/, /dəz/ |
| **can / can't** | possibility flip; *can't* often loses its /t/ | — |
| **also / only** | additive vs restrictive | — |
| **rather than / as well as** | exclusive vs inclusive | — |
| **before / after** | order in a pathway | — |
| **into / out of** | direction of transport | — |
| **increase / decrease** | direction | *decrease* can reduce very close to *increase* in rapid speech |

**Drill implication:** a listening item should sometimes differ from its twin by exactly one of
these words, with everything else identical.

### 6.3 Question words that get swallowed

**[C]**

- "…and *what* regulates it?" → "…and regulates it?"
- "So *why* is it irreversible?" → "So's it irreversible?" (heard as a yes/no question)
- "*Where* does it happen?" vs "*When* does it happen?" — one consonant; compartment vs
  physiological state

**Countermeasures, in this order:**

1. **Repeat the stem back.** *"So — where in the cell. Right."* Universally acceptable, buys
   2 seconds, and eliminates the polarity, question-word and negative-stem traps at a stroke.
   It is also a **legitimate use of think-time**, which OMERAD explicitly recommends extending
   for English-language learners **[A*]**.
2. **Ask for the frame, not the answer.** *"Do you mean in the liver or in the muscle?"* Reads
   as precision, not weakness.
3. **Never answer yes/no to "Do you know…" or "Can you tell me…".**

### 6.4 Chinese-L1 listening load — and why "guess from context" does not work

**[A*]** The most important finding in this section. A study of the perception of reduced forms
in English by non-native users (PMC):

- Reduced forms are *"phonetic and phonological deviations from citation forms"* — e.g.
  *I do not know* → /dənəʊ/. **Note that the negation is inside the reduction.**
- L2 learners scored ~**50% accuracy without context and ~48% with context**; *"the presence
  of context did not significantly aid accuracy."* Native speakers scored far higher.
- *"reduced forms cannot be looked up in a dictionary by learners"*; they create *"considerable
  processing difficulties."*

**[C] Consequence:** the usual coping strategy — *"I'll infer it from context"* — is
**empirically ineffective** against reduced forms. The fix has to be at the perception level:
learn the reduced pronunciations of the exam's function-word inventory (*can/can't, is/isn't,
does/doesn't, would/wouldn't, and then, what about, how about, what if, suppose, apart from,
other than, rather than, instead of, as opposed to*).

**[B]** On Chinese ESL learners specifically (Chen et al., *System* 2021 — abstract 403'd,
snippet only): *"Chinese ESL learners' most persistent listening errors were directly tied to
connected speech processes—not vocabulary gaps or grammar confusion"*; *"Elision and intrusion
proved to be the most difficult aspects of connected speech."*

**[A*]** Mandarin-L1 production errors, which predict the perception collisions
(Pronunciation Studio): **/l/ vs /r/**; **final /n/ → /ŋ/** ("sun", "ban", "mine");
**/v/ absent** → /w/ or /f/; **th absent** → /s/, /z/, /t/, /d/; **consonant clusters
simplified** ("asked" → /as/); **/iː/ vs /ɪ/** ("bit"/"beat"); **/ɒ/ absent**; intonation at
syllable rather than phrase level; **all syllables stressed equally**.

**[C]** The exam-relevant collisions this predicts, in order of danger:

- `/n/~/ŋ/` → **thin/thing**, **-in/-ing** endings that carry aspect
- `/iː/~/ɪ/` → **-in/-ine** (glycin/glycine), **leak/lick**
- `/l/~/r/` → **glycolysis / glycerolysis**, **collagen**
- `/v/~/w/~/f/` → **valine**, **valence**
- `/θ/` → **thymine / simine**, **thiol / siol**, **methyl / mesyl**
- **cluster reduction in listening** → the *-ed* past tense is lost, so
  *"what **happened** when you added…"* collapses into *"what **happens** when you add…"* —
  a factual question and a hypothetical question become the same sound

### 6.5 The examiner's own accent — and why the standard listening advice fails here

**[A*]** Documented features of Czech-accented English (Sandy Millin, a teacher in the Czech
Republic; Intonetic accent coaching — both practitioner sources, not peer-reviewed):

- Czech has **5 vowels vs ~20 in English**; **no schwa /ə/ exists**; *"All Czech vowels are
  pronounced with equal strength."* Confusions across /æ/, /e/, /ʌ/ → **bad/bed, cap/cup**
- **/θ/ and /ð/ absent** → /t/, /d/, /f/ or /s/. *"this"→"dis"*, *"think"→"sink"*
- **/w/ ↔ /v/** in both directions (including hypercorrection): *"very"→"wery"*, *"wine"→"vine"*
- **Final-obstruent devoicing**: *"bad"→"bat"*, *"bag"→"back"*, *"She hat a goot time"*
- **-ing endings**: confusion among /ŋ/, /g/, /k/ — *"thing/think"*, *"sing/sink"*
- **/s/ vs /z/** confusion — *"bus/buzz"*
- **First-syllable stress transferred to every English word**; difficulty with weak forms;
  *"Czech is a syllable-timed language, while English is stress-timed"*; flat intonation

**[C] — the interaction, which is the most actionable finding in this section, and which I
could find no source for:**

The Czech examiner and the Chinese candidate have error systems that **partly cancel and partly
compound**.

**It helps that:** the Czech examiner has **no vowel reduction**, so function words
(*not, and, what, if, except*) arrive in **full strong forms** — easier to hear than a British
examiner's /nət/, /ən/, /wət/. **The reduced-forms research in §6.4 is therefore *less*
applicable to this particular examiner than it would be to a native English one.** That is
genuinely good news and should be said to the candidate.

**It hurts that:**

- **Czech first-syllable stress lands on the wrong syllable of long Latinate biochemical
  words** — `ˈdehydrogenase`, `ˈcarboxylase`, `ˈglycogen`, `ˈmetabolism`. **This destroys
  exactly the stress cue recommended in §6.2 Class 2 for separating
  glycolysis / glycogenolysis / glycogenesis / gluconeogenesis.**
- **Czech final devoicing collapses `-ase` /eɪz/ toward `-ace` /eɪs/**, blurring the
  enzyme-vs-sugar contrast (`amylase`/`amylose`) that §6.2 calls the highest-frequency trap.
- **/θ/→/s/** makes `thymine`→*symine*, `thiol`→*siol*, `methyl`→*mesyl*, and merges
  `synthase`/`syntase`.
- **/ŋ/~/g/~/k/** makes any `-ing` unreliable.
- **/w/↔/v/** makes `valine`↔*whaline*, `wild-type`↔*vild-type*.

> **The strategic conclusion.** The standard advice for hearing English questions — *listen for
> the stressed content words and ignore the weak ones* — **fails against a Czech accent,
> because there are no weak ones and the stress is on the wrong syllable.** The compensating
> strategy must be **syntactic and lexical**: recognise the *stem template* from its first two
> or three words and its word order, not from its prosody.
>
> **That is precisely what a stems catalogue is for, and it is the strongest argument for
> building this data layer at all.**

---

## 7. Verbatim question corpus — raw material for the app

All **[A*]** unless marked. Use these as the app's *real* examples; everything else in §3 that
is tagged **[C]** must be visually distinguished.

### 7.1 The only institutionally published biochemistry **oral** bank found anywhere
RCPath, *FRCPath Part 2 Clinical Biochemistry — Sample Oral Questions* (25 pp, with examiners'
notes). Consultant level, but the **stem grammar** is exactly what the app needs to teach.

> `"You are the most senior person in the laboratory when, at 5.15 pm on a Monday evening, the MLSO in your automated section brings you the following results on a 26 year old woman on a gynaecology ward. [Na 108, K 4.2, Urea 21, Creatinine 130, Glucose 6.2, TSH <0.1, Free T4 >50]… You find the request form: the clinical details are 'hyperemesis gravidarum, agitated'… What action do you take?"`
> `"What difference, if any will this make to the way you clinically validate results?"`
> `"What further information would you require about the current situation?"`
> `"What steps would you take to ensure that the same problem did not happen again?"`
> `"You will be asked to advise on her immediate and longer-term management… You may further be asked how this management would differ from that of a patient who has had a jejunostomy constructed."`

**Note the grammar: second person, conditional, plan-shaped. *would* and *might*, not *is*.**

### 7.2 Indian descriptive — the richest stem corpus (RGUHS 2007–2013)

> `"Describe TCA cycle. Discuss in detail its energetics, regulation and its role"`
> `"Describe in detail the steps of urea cycle. How is it linked to TCA cycle? Write the causes of Uremia"`
> `"Describe the steps of Glycolysis. What is the significance of Rapoport Leubering cycle?"`
> `"Describe the process of ketogenesis and ketolysis. Write a note on Ketosis"`
> `"Give an account of the ß-oxidation of palmitic acid and its energetics"`
> `"Give an account on chemistry, sources, daily requirement, and biochemical functions, Manifestations of deficiency and toxic effects of vitamin A."`
> `"Enumerate the reactions of purine degradation and add a note on Gout"`
> `"Enumerate three functions of the liver and three tests with reference ranges to assess them"`
> `"Explain the amphibolic role of TCA cycle"`
> `"Explain competitive inhibition. Mention significance of competitive inhibition with examples."`
> `"Explain the mechanism of action of Allosteric Enzymes? Name the Allosteric Inhibitor and Allosteric Activator for Phosphofructokinase and Acetyl CoA - Carboxylase"`
> `"Explain the metabolism of iron under the following headings. a) Absorption and transport b) Biochemical functions c) Hemosiderosis"`
> `"Define genetic code. What are the salient features of genetic code?"`
> `"Define Isoenzymes. Mention the principles used for separation of Isoenzymes. Write about the clinical importance of Isoenzymes"`
> `"Define Km value. What is its significance?"`
> `"Classify enzymes with two examples of each class."`
> `"Classify transport mechanisms across cell membranes. Define uniport, symport and antiport. Give an example of each"`
> `"Name the coenzyme forms of Niacin and their biochemical role."`
> `"Outline the steps for synthesis of cholesterol. Discuss the rate limiting step and regulation of synthesis of cholesterol"`
> `"Outline the de novo synthesis of fatty acid. What are the advantages of having a multifunctional enzyme complex?"`
> `"How is heme synthesis regulated?"`
> `"How does insulin regulate blood glucose?"`
> `"What is the normal fasting blood glucose level? Why does it need to be regulated? Describe the various mechanisms of its regulation"`
> `"Differentiate between ICF and ECF"`

**The vitamin questions are a fixed six-slot template**: chemistry → sources → RDA →
functions → deficiency → toxicity. Worth drilling as a template, because the same six slots
appear under *Give an account of*, *Describe* and *Explain*.

Bare noun-phrase items from the same papers (identical in form to the Czech lists):
`"Protein energy malnutrition"` · `"Malate-aspartate shuttle"` · `"Pyruvate-dehydrogenase
complex"` · `"Tumor markers"` · `"Lac operon"` · `"Plasma buffers"` · `"Competitive
inhibition"` · `"Uncouplers of oxidative phosphorylation"` · `"Zymogens"` · `"Ninhydrin
reaction"` · `"Transamination reaction"` · `"Rate limiting reaction in pyrimidine
biosynthesis"` · `"Beer-Lambert's law"`.

Standing rubric worth memorising: `"Your answers should be specific to the questions asked.
Draw neat labeled diagrams wherever necessary."`

### 7.3 Indian CBME (post-2019) — new Bloom-flavoured stems
BFUHS official sample paper:

> `"Summarise clinical applications of the antioxidant defense systems in the body"`
> `"Enumerate various tumour markers and describe one of these in detail."`
> `"Explain steps and enumerate applications of Polymerase chain reaction (PCR)"`
> `"Compare and contrast various kidney function tests in renal failure"`
> `"What is protein energy malnutrition? In a tabular form explain the differences between Marasmus and Kwashiorkor"`
> `"Discuss the involvement of extracellular matrix components in health and disease"`
> **"Explain why:"** followed by bare assertions — `"Vitamin C is required in synthesis of collagen."` · `"Rifampicin is inhibitor of transcription."` · `"Iron is called a 'one-way element'"` · `"Topoisomerase is required during DNA replication."`

### 7.4 US free-response — the "closed choice + reasoning" signature
MIT 7.05 and Boston University:

> `"Rank the following electron carriers involved in this electron transfer from 1 to 3 where '1' is the carrier with the lowest standard reduction potential (E°')…"`
> `"Is the amount of ATP that can be generated from complete oxidation of pyruvate in the mitochondria by S. cerevisiae the same, less, or more than what can be generated by human mitochondria?… Circle your answer and briefly explain your reasoning."`
> `"Propose a hypothesis for why this photosynthetic organism that lives in particularly well-oxygenated water might benefit from using the above enzyme complex instead of ACC."`
> `"What can you conclude about the relative demand of these cells for NADPH versus ribose? Briefly explain your answer."`
> `"Describe the differences between a proteoglycan and a glycoprotein. (10 pts)"`
> `"Write the complete reaction for the hydrolysis of ATP to ADP and inorganic phosphate. Briefly name three chemical differences between reactants and products that explain the high ΔG for the reaction in the cell. (10 pts)"`

**The recurring formula: [a scenario you have never seen] + [a closed choice] + "briefly explain
your reasoning."** The marks are in the reasoning. Hedging the closed choice loses.

### 7.5 US MCQ vignettes
> `"A patient comes into clinic suffering from lack of energy and very low hemoglobin levels… his red blood cells have a high level of phosphoenolpyruvate with little pyruvate produced and decreased ATP levels. You quickly deduce that he has a mutation in which glycolytic enzymes?"` — MSU BMB 514
> `"A patient suffering from glucose 6-phosphate dehydrogenase deficiency would be expected to have which of the following phenotypes?"` — MSU
> `"An adjunct therapy designed to inhibit which of the following enzymes is most likely indicated in this patient?"` — USMLE
> `"Treatment with which of the following enzymes is most likely to be beneficial in this patient?"` — USMLE
> `"Fructose intolerance and galactose intolerance are similar in that they both:"` — MSU *(sentence-completion stem, no question mark)*
> `"The most efficient substrate of an enzyme is usually considered to be the substrate with the ________."` — BU *(blank-completion stem)*

### 7.6 The only corpus of what examiners actually **said out loud** — second-hand
**[B]** KemUnited (King Edward Medical University, Lahore), students' transcription of 2014
biochemistry vivas, compiled by Unsa Athar:

> `"Is conversion of Acetyl coA to pyruvate possible"` · `"how cofee keeps u active"` ·
> `"What will be the effect of Thyroxin deficiency in tadpole?"` · `"how will u make serine"` ·
> `"how will u make creatine"` · `"why is it high density"` ·
> `"which enzyme is deficient in orotic aciduria"` ·
> `"difference btwn hypothyroidism and dwarfism"` · `"cysteine source"` · `"folate trap hypothesis"`

**Why this is worth keeping despite the provenance:** it is the only record of *spoken*
examiner language I found, and it confirms §1.1 from the other side. The printed Central-European
lists contain **zero** questions; the spoken record contains **almost nothing but** questions —
short, informal, and starting with *is / how / what / why / which*, **not** with
*describe / discuss*.

---

## 8. Proposed data-layer shape

The app loads plain globals via `<script>` tags (`data/ch*.js`, `data/bank_*.js`,
`window.BIOCHEM.*`). A stems layer fits the same pattern: `data/stems.js` assigning
`window.BIOCHEM.stems`.

```js
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.stems = [
  {
    id: 'purpose-significance',
    group: 'PURPOSE',
    stem_en: 'What is the significance of …?',
    variants_en: [
      'Why does it matter that …?',
      'What is the importance of … for …?',
      'Why is … significant?'
    ],
    stem_cn: '……有什么意义 / 为什么重要？',
    demands_cn: '要的是"对机体有什么用"，不是机制。允许并且期待目的论式回答。',
    answer_shape_cn: [
      '一句话点题："它之所以重要，是因为……"',
      '2–3 条后果，层级 细胞 → 器官 → 整体',
      '缺了它会怎样（疾病/表型）'
    ],
    confusable_with: 'mechanism-how',
    confusable_note_cn: '"significance" 要"为什么重要"，"mechanism" 要"怎么发生"。听错这一个词，整段答案方向就错了。',
    evidence: 'A',                 // A | A* | B | C, per §0
    source: 'S7',                  // key into §9
    example_verbatim: 'Significance of citric acid cycle for energy metabolism, energy yield and regulation of Krebs cycle',
    example_is_spoken: false       // published list item, NOT a spoken question
  }
];
```

Four fields carry the whole design:

- **`evidence`** — so the app can never present a **[C]** reconstruction as a real question.
- **`example_is_spoken`** — the §1.1 distinction, machine-readable. A published noun phrase and
  a spoken question must look different in the UI.
- **`confusable_with`** — the drill. Show two stems that sound alike; ask which answer shape is
  required. This addresses the stated failure mode directly.
- **`group`** — NARRATE / PURPOSE / COMPARE / ENUMERATE / LOCATE / PERTURB / CLINICAL / PROBE,
  matching §3.

Two companion arrays:

- `window.BIOCHEM.probes` for §4.4: `{ probe_en, signal_cn, do_cn, not_cn, evidence, source }`.
  **Highest-value single table in the document** — it inverts the intuitive reading of
  escalation.
- `window.BIOCHEM.listening` for §6: `{ heard, could_be, cue_cn, class, evidence }`,
  where `class` ∈ `phoneme-pair | root-family | function-word`.

**A drill worth building explicitly:** the *preamble* item (§3.9) — a long spoken run-up with a
short question at the end, scored **only** on whether the final demand was identified.

---

## 9. Sources

All retrieved **2026-08-13**.

### 9.1 Central-European exam question lists — fetched by me **[A]**

| # | institution / document | URL |
|---|---|---|
| S1 | **Charles Univ., Faculty of Medicine in Pilsen** — `Otázky ke zkoušce – Lékařská chemie a biochemie II, všeobecné lékařství, 2025/26` (100 items, Czech) | https://biochemie.lfp.cuni.cz/wp-content/uploads/sites/9/2025/09/Otazky-ke-zkousce_2VS_2025_26.pdf |
| S2 | same, **English programme** — `Final Exam Questions – Medical Chemistry and Biochemistry II, General Medicine, 2025/26` (100 items) | https://biochemie.lfp.cuni.cz/wp-content/uploads/sites/9/2025/09/Final-Exam-Questions_2GM_2025_26.pdf |
| S3 | index pages for S1/S2 | https://biochemie.lfp.cuni.cz/zkouskove-otazky/ · https://biochemie.lfp.cuni.cz/en/exam-questions/ |
| S4 | **Charles Univ., 1st Faculty of Medicine, ÚLBLD** — `Medical Chemistry and Biochemistry, Exam Questions 2024/2025` (152 items, 4 sections, English) | https://ulbld.lf1.cuni.cz/file/6176/questions2024-2r-list.pdf |
| S5 | same — `Announcement for Summer Term 2024/2025, 2nd year GENERAL MEDICINE, Exam Test` (written/oral structure, 57% threshold, topic weightings) | https://ulbld.lf1.cuni.cz/file/6276/annc2425-2r-6-exam-test.pdf |
| S6 | same — course page | https://ulbld.lf1.cuni.cz/en/medical-chemistry-and-biochemistry |
| S7 | **Comenius Univ. Bratislava, Faculty of Medicine** — `ORAL QUESTIONS FOR EXAMINATION IN MEDICAL BIOCHEMISTRY FOR GENERAL MEDICINE` 2025/26 (95 items, English) | https://zona.fmed.uniba.sk/fileadmin/lf/sucasti/Teoreticke_ustavy/Ustav_lekarskej_chemie__biochemie_a_klinickej_biochemie/Biochemia/GM/Info_GM_25-26/SS_2025-2026/ORAL_QUESTIONS_for_Medical_Biochemistry_final_exam_GM_2025-2026.pdf |
| S8 | same — Dentistry (89 items, English) | https://zona.fmed.uniba.sk/fileadmin/lf/sucasti/Teoreticke_ustavy/Ustav_lekarskej_chemie__biochemie_a_klinickej_biochemie/Biochemia/D/Info_D_25-26/SS_2025-2026_D/ORAL_QUESTIONS_for_Medical_Biochemistry_final_exam_D_2025-2026.pdf |
| S9 | same — exam-format pages (draw 2 questions, ~15 min preparation; 50-item test, ≥151/200) | https://zona.fmed.uniba.sk/en/departments/institutes/institute-of-medical-chemistry-biochemistry-and-clinical-biochemistry/medical-biochemistry/general-medicine/ |
| S10 | **Palacký Univ. Olomouc, Faculty of Science, Dept. of Biochemistry** — `Okruhy ze Základů biochemie k SZZ – bakalářské studium BIOCHEMIE` (29 items). A genuine *státní závěrečná zkouška* list | https://www.prf.upol.cz/fileadmin/userdata/PrF/katedry/biochemie/Dokumenty/SZZ/Biochemie/Okruhy_ze_Zakladu_biochemie_k_SZZ.pdf |
| S11 | same — SZZ index (master's lists: Biochemistry, Molecular Biology and Genetics, Methods, Clinical Biochemistry) | https://www.prf.upol.cz/katedra-biochemie/studium/statni-zaverecne-zkousky/ |
| S12 | **Charles Univ., Faculty of Medicine in Hradec Králové** — biochemistry exam questions 2019/20, via WikiSkripta | https://www.wikiskripta.eu/w/Průvodce:Zkouškové_otázky_z_biochemie_(LF_HK,_VL) |
| S13 | **Charles Univ., 2nd Faculty of Medicine** — `Otázky ke státní závěrečné zkoušce`, **Zdravotnický laborant** | https://www.lf2.cuni.cz/ustav-lekarske-chemie-a-klinicke-biochemie/otazky-ke-statni-zaverecne-zkousce |
| S14 | **Charles Univ., 1st Faculty of Medicine** — `Biochemie a patobiochemie`, **doctoral** state exam | https://www.lf1.cuni.cz/biochemie-a-patobiochemie |
| S15 | **Charles Univ., 3rd Faculty of Medicine** — `Biochemie a patobiochemie`, **doctoral** | https://www.lf3.cuni.cz/3LF-2000.html |
| S16 | **WikiSkripta**, 1. LF UK General Medicine biochemistry portal (2025/26) **[B]** — student wiki; declined to serve full verbatim text | https://www.wikiskripta.eu/w/Portál:Otázky_z_biochemie_(1._LF_UK,_VL) |
| S17 | **Charles Univ., Code of Study and Examination** — Art. 8(9), 8(14) | https://cuni.cz/UKEN-626.html |
| S18 | **Masaryk Univ., Faculty of Science, Dept. of Biochemistry** — SZZ structure **[B]**, search summary only | https://ubch.sci.muni.cz/pro-studenty/zaver-studia |
| S19 | **UCT Prague (VŠCHT), FCHT** — bachelor SZZ index, no biochemistry list opened | https://fcht.vscht.cz/studium/bakalarske-studium/okruhy-szz |

### 9.2 Anglophone / Indian exam papers — fetched by a research agent **[A*]**

| # | institution / exam | URL |
|---|---|---|
| E1 | Michigan State Univ., **BMB 514 Medical Biochemistry**, Exam #1 (2011) | https://bmb.natsci.msu.edu/sites/_bmb/assets/File/BMB514/B514ExamIA%2011W.pdf |
| E2 | MSU BMB 514, Exam #2 (2011) | https://bmb.natsci.msu.edu/sites/_bmb/assets/File/BMB514/B514ExamIIA_11W.pdf |
| E3 | MSU BMB 514, Exam #3 (2010) | https://bmb.natsci.msu.edu/sites/_bmb/assets/File/BMB514/B514ExamIIIA%2010.pdf |
| E4 | **NBME / USMLE Step 1 Sample Test Questions** (119 items) | https://www.usmle.org/sites/default/files/2021-10/Step_1_Sample_Items.pdf |
| E5 | **RCPath, FRCPath Clinical Biochemistry Part 1 MCQ** sample paper (Feb 2023) | https://www.rcpath.org/static/aa8c3fcc-057f-4ffc-b7076c65a5c9003a/Sample-Paper-FRCPath-Part-1-MCQ.pdf |
| E6 | **RCPath, FRCPath Part 2 Clinical Biochemistry — Sample Oral Questions** (25 pp, examiners' notes) | https://www.rcpath.org/resourceLibrary/clinical-biochemistry-oral---sample-questions.html |
| E7 | **MIT 7.05 General Biochemistry**, Exam #4, 23 May 2019 (OCW) | https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/b2b9b9f94d05de934c09f0927c6d36eb_MIT7_05S20_Exam_4_2019.pdf |
| E8 | **RGUHS (Karnataka) MBBS Biochemistry papers, Aug 2007 – Dec 2013**, 24 pp compiled | https://rrmch.org/cms/pdf/question-bank/UG-Biochemistry-QP-Jan-2008-Dec-2013.pdf |
| E9 | **Meru Univ. of Science & Technology (Kenya)**, NND 3113 Medical Biochemistry 1, Nov 2021 | https://exampapers.must.ac.ke/wp-content/uploads/2022/02/NNU-3113-MEDICAL-BIOCHEMISTRY-I.pdf |
| E10 | **Boston University** BI/CH421 Biochemistry I Final, 19 Dec 1998 | https://www.bu.edu/aldolase/biochemistry/html_docs/EXAM98_5.pdf |
| E11 | **Baba Farid Univ. of Health Sciences**, MBBS 1st Prof Biochemistry sample paper (CBME) | https://www.bfuhs.ac.in/examination/oldquespapers/12-7-21/Sample%20Paper%20MBBS%201st%20New%20Regulations.docx |
| E12 | **Vinayaka Mission's Research Foundation, Salem**, B.Sc.(N) Nutrition & Biochemistry, Aug 2018 | https://www.vmrfdu.edu.in/files/Questions/Nursing/BSC/NUTRITION%20AND%20BIOCHEMISTRY.pdf |
| E13 | RGUHS MBBS Phase I Biochemistry Paper I, 17-Apr-2025 (QP 1079) — tool-transcribed | https://firstranker.com/fr/frdA130725A1635810/download-rguhs-mbbs-first-year-2025-april-1079-biochemistry-paper-i-rs3-question-paper |
| E14 | RGUHS MBBS Phase I Biochemistry Paper II, 17-Apr-2025 (QP 1080) — tool-transcribed | https://firstranker.com/fr/frdA130725A1635811/download-rguhs-mbbs-first-year-2025-april-1080-biochemistry-paper-ii-rs3-question-paper |
| E15 | Univ. of Cambridge, Dept. of Biochemistry — **exam format only; past papers are Moodle-only** | https://www.bioc.cam.ac.uk/teaching/third-year/biochemistry/examinations |

### 9.3 Command words **[A*]**

| # | source | URL |
|---|---|---|
| C1 | AQA, GCSE Sciences command words | https://www.aqa.org.uk/resources/science/gcse/teach/command-words |
| C2 | AQA, A-level Psychology command words | https://www.aqa.org.uk/resources/psychology/as-and-a-level/psychology/teach/command-words |
| C3 | University of Portsmouth, essay task words (**only verified source for *Account for***) | https://myport.port.ac.uk/study-skills/written-assignments/essays-task-words |
| C4 | University of Birmingham, assignment instruction words | https://libguides.bham.ac.uk/c.php?g=679274&p=5310871 |
| C5 | Open University / OpenLearn, key words in essay titles | https://www.open.edu/openlearn/education-development/university-ready/academic-skills-key-words-essay-titles |
| C6 | Cal Poly SLO, Directive Words | https://writingandlearning.calpoly.edu/content/gwr/wpe/tips/directive_words |
| C7 | CSU Northridge, Directive Verbs (**only verified source for *Enumerate***) | http://www.csun.edu/~hcpas003/DirectiveVerbs.html |
| C8 | Univ. of Arkansas TIPS, Bloom's taxonomy verb chart | https://tips.uark.edu/blooms-taxonomy-verb-chart/ |
| C9 | Ohio State TLRC, sample Bloom's verbs | https://teaching.resources.osu.edu/examples/sample-blooms-verbs |

### 9.4 Oral-examination method, probing, item writing

| # | source | status |
|---|---|---|
| M1 | Loomba R, Jindal NM. *Improving process aspect of oral examination as assessment tool in undergraduate biochemistry by introducing structured oral examination.* **Korean J Med Educ** 2024, DOI 10.3946/kjme.2024.310 — https://pmc.ncbi.nlm.nih.gov/articles/PMC11625900/ | **[A]** |
| M2 | Georgia Highlands College, tutor training — types of questions / probing taxonomy — https://sites.highlands.edu/tutorial-center/tutor-resources/online-tutor-training/module-4/types-of-questions/ | **[A*]** |
| M3 | Michigan State OMERAD, *12 Tips for Effective Questioning in Medical Education* — https://omerad.msu.edu/endowments/jack-l-maatsch-visiting-scholar-in-medical-education-fund?view=article&id=237&catid=2 | **[A*]** |
| M4 | *Structured viva validity, reliability, and acceptability… systematic review and meta-analysis*, BMC Med Educ 2023 — https://pmc.ncbi.nlm.nih.gov/articles/PMC10369684/ | **[A*]** |
| M5 | NBME, *Constructing Written Test Questions for the Health Sciences* — official PDF https://www.nbme.org/sites/default/files/2021-02/NBME_Item%20Writing%20Guide_R_6.pdf ; text obtained from HTML mirror https://www.readkong.com/page/nbme-item-writing-guide-constructing-written-test-5281377 | **[A*]** via mirror |
| M6 | ANZCA exam-prep vivas guide — https://libguides.anzca.edu.au/examprep/vivas — **negative result: contains no examiner-probing guidance, only simulated-viva videos** | **[A*]** |
| M7 | *Surviving your viva — my top 10 tips for oral exams* — https://girlymicrobiologist.com/2022/09/16/surviving-your-viva-my-top-10-tips-for-oral-exams/ | **[A*]**, practitioner blog |
| M8 | Sinclair & Coulthard IRF / Mehan IRE — https://www.studysmarter.co.uk/explanations/english/language-and-social-groups/sinclair-and-coulthard/ | **[B]** |
| M9 | Rowe, wait time — https://www.colorincolorado.org/teaching-ells/ell-classroom-strategy-library/wait-time · https://www.kent.edu/ctl/wait-time-making-space-authentic-learning | **[B]** |

### 9.5 Confusables, L2 listening, accent

| # | source | status |
|---|---|---|
| L1 | 2Ascribe, *Sound-Alike Words Part 1 A–C* — https://www.2ascribe.com/articles/general-interest/sound-alike-words-part-1-a-c | **[A*]** |
| L2 | Accuscribers, *Confusing Sound-Alike Medical Terms* — https://accuscribers.com/confusing-sound-alike-medical-terms/ | **[A*]** |
| L3 | *Perception of reduced forms in English by non-native users of English* — https://pmc.ncbi.nlm.nih.gov/articles/PMC11076711/ | **[A*]** |
| L4 | Chen et al., *Chinese ESL learners' perceptual errors of English connected speech*, **System** 2021 — https://www.sciencedirect.com/science/article/abs/pii/S0346251X21000348 | **[B]** — 403, snippet only |
| L5 | Pronunciation Studio, *10 English Pronunciation Errors by Mandarin Speakers* — https://pronunciationstudio.com/mandarin-speakers-english-pronunciation-errors/ | **[A*]** |
| L6 | Millin S., *Pronunciation problems for Czech speakers of English* — https://sandymillin.wordpress.com/2011/06/18/pronunciation-problems-for-czech-speakers-of-english/ | **[A*]**, practitioner blog |
| L7 | Intonetic, *How to reduce a Czech accent…* — https://intonetic.com/how-to-lose-a-czech-accent-and-speak-clear-natural-english/ | **[A*]**, commercial |
| L8 | Charles Univ. Institute of Phonetics, *Assimilation of voicing in Czech speakers* — https://fonetika.ff.cuni.cz/wp-content/uploads/sites/104/2015/10/SkaStu14-assimilation.pdf | **[B]** — located, not read |
| L9 | Charles Univ. MFF, *Czech–English pronunciation* — https://iuuk.mff.cuni.cz/~andrew/CzechEnglishPronunciation.pdf | **[B]** — located, not read |
| L10 | Wikipedia, *-ase* / *-ose* suffix conventions — https://en.wikipedia.org/wiki/-ase | **[A*]** |

### 9.6 Second-hand spoken corpus

| # | source | status |
|---|---|---|
| F1 | KemUnited (King Edward Medical Univ., Lahore), *2nd Year Biochemistry Viva Questions 2014*, compiled by Unsa Athar, 13 Dec 2014 — https://www.kemunited.com/2014/12/2nd-year-biochemistry-viva-questions.html | **[B]** |

---

## 10. What I could not verify

Stated plainly, because a confident-sounding unverified claim is the failure mode this project
exists to avoid.

### 10.1 The biggest gap

**There is no published corpus of real spoken oral-exam questions from any Czech or Slovak
faculty. Not one.** Every published Central-European document is a topic list. The entire §3
stems catalogue is therefore **[C] reconstruction** except where a stem word is attested inside
a published *written* item, or inside an Anglophone paper (§7).

The only institutional biochemistry **oral** bank found anywhere on the open web is
**RCPath FRCPath Part 2** (E6) — UK, consultant level, clinical chemistry, not undergraduate.

**The cheapest way to close this gap is not more searching.** It is for the candidate (or
classmates) to write down the examiner's exact words immediately after each exam. Ten real
transcribed probes would be worth more than everything in §3.

### 10.2 Provenance caveats on my own work

1. **Everything tagged [A\*] was fetched by a research agent in this session and not re-read by
   me.** I am relying on that agent's transcription. Spot-check anything before it goes into
   the app as a quotation, particularly the RGUHS items (E8), which come from a **degraded
   OCR'd scan** — the agent flagged two characters it had to interpret (`"election transport
   chain"` reproduced as printed for *electron*; `"qluconeoqc.x-crs"` reconstructed as
   *gluconeogenesis*).
2. **E13/E14 (RGUHS 2025 papers) were tool-transcribed**, not text-extracted. Punctuation and
   capitalisation may drift.
3. **The 0/436 result depends on my parser.** I split on a leading `N.` and rejoined wrapped
   lines; item counts came out at exactly the documents' own totals (100, 152, 95, 89), which is
   a good check, but a mis-split could in principle hide an item. The claim is robust in
   substance — no Central-European list I read contains anything resembling a spoken question —
   but re-derive the exact figure before printing it in the app.
4. **§5.1 is n = 4 lists from 3 institutions.** Treat "4/4" as "all the lists I could actually
   read", not as a population statistic. §5.2 adds 8 more papers from 4 more countries, which
   is what makes the §5.2-plus-§5.1 intersection defensible.
5. **§4.4's "what it means" column is my analysis**, except the four rows citing M2/M3. There is
   no examiner handbook stating what "Are you sure?" signals. Treat as heuristic.

### 10.3 Institutions I could not get a list from

6. **Masaryk University Brno** — both the medical faculty's biochemistry pages and the science
   faculty's SZZ page either 404'd or returned only navigation. Search-summary only. **Not in
   the §5.1 matrix.**
7. **Palacký Olomouc Faculty of Medicine** — I found the Faculty of *Science* SZZ lists
   (S10/S11) but **not** the Faculty of Medicine's biochemistry questions.
8. **UCT Prague (VŠCHT)** — reached the SZZ index (S19), did not open a biochemistry list. No
   VŠCHT content is used in any claim.
9. **2. LF UK General Medicine biochemistry** — found only the health-laboratory-technician SZZ
   (S13). The medical programme's own list was not located.
10. **1. LF UK ÚBEO** — search returned PDF URLs for both Czech and English lists, but every
    direct fetch 404'd (file IDs appear site-scoped and the search-surfaced URLs are stale).
11. **1. LF UK count discrepancy** — the official ÚLBLD English PDF (S4) has 4 × 38 = 152 items;
    WikiSkripta (S16) reports the Czech list with different section counts (~129–138). Not
    reconciled: WikiSkripta refused full text, and 1. LF UK has **two** institutes teaching
    biochemistry (ÚLBLD and ÚBEO). **Do not quote a total for 1. LF UK's Czech list.**
12. **Semmelweis, Pécs, Debrecen** — confirmed they publish biochemistry material for their
    English programmes; could not open an actual exam-topic list for any. **No Hungarian
    institution is counted anywhere.** The Semmelweis PDF located is an **entrance-exam** topic
    list, not a course exam.
13. **University of Cambridge** — format verified verbatim (Section I/II structure, 3¼-hour
    papers, a 3,000-word prepared essay on "Science that affects Society"), but **past papers
    are Moodle-only. No Cambridge question wording obtained.**
14. **Oxford** past-paper host no longer resolves; **UCC** and **Univ. of Galway** are
    login-gated; **RGUHS's own portal** refused connections (the RRMCH and FirstRanker copies
    are mirrors); **TN Dr. M.G.R. Medical University** returned 404; **Shyam Shah Medical
    College Rewa's** official biochemistry question bank downloaded but is a **scanned image PDF
    with no text layer** — real, official, and **unread**. Listed so none of them disappears
    silently.

### 10.4 Method and literature caveats

15. **Cambridge International's official command-word glossary could not be opened** (PDF text
    extraction failed). Search summaries gave plausible definitions; they are **not** used in §2.
    Same for **OxfordAQA**'s biology command words.
16. **The NBME quotation in §3.10 comes from an HTML mirror, not the official PDF.** The wording
    should be re-checked against `nbme.org` before being printed.
17. **"Are you sure?" = "not the answer they expected"** rests on a search snippet from a
    Cambridge University Press book excerpt whose PDF could not be read. **Do not present as
    verified.**
18. **ISMP's confused-drug-name list and WHO's LASA solution could not be read** (PDF failures);
    the ECRI landing page carries no examples. Neither contributes anything to §6.
19. **No published confusable-pairs list for *biochemistry* appears to exist.** §6.2 is
    assembled by me from standard terminology. Each half of each pair is a standard term; the
    *pairing* and the *disambiguation cue* are mine.
20. **No royal-college examiner handbook** with question-phrasing or probing rules is publicly
    available. Every SOE "prompt card" description found is a third-party account.
21. **No study exists of Chinese-L1 listeners comprehending Czech-accented English.** The
    interaction argued in §6.5 — the strongest strategic claim in this document — is **my
    reasoning from two separately-sourced phonologies, not a cited finding.** The individual
    features (Czech: no /θ/, final devoicing, fixed initial stress, syllable timing; Mandarin:
    /l/–/r/, /n/–/ŋ/, cluster reduction, /iː/–/ɪ/) are well attested; the claim that they
    combine as described is not.
22. **The Czech-accent sources (L6, L7) are a teacher's blog and a commercial accent-coaching
    page.** The two academic sources (L8, L9) were located but not read in full.
23. **Commercial viva textbooks** (Chatterjea *Viva in Biochemistry*, Kavitha *Viva Voce in
    Biochemistry*) exist and circulate on piracy sites. They were **not** fetched and nothing is
    quoted from them. They may be worth buying legitimately — they are the closest thing to a
    spoken-question corpus in print.
