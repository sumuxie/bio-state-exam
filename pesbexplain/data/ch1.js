/* =========================================================================
   PESB — Batch 1 · Lectures 1–2 · From Gene to Clone
   Source: notes/md/01_lec1-2_gene-to-clone.md (Lecture 1, 29 slides;
   Lecture 2, 43 slides).

   `points` are from the slides. `beyondPoints` are the md's "Beyond the
   slides" blocks — material the lecture did not put up, added to close a
   gap. Keep that separation; it is the one thing that makes this file
   trustworthy.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

/* ------------------------------------------------------------- logistics */
{
  id: '1-0',
  chapter: 1,
  lecture: 'Course',
  section: '1.0',
  enTitle: 'Course logistics and how you are graded',
  cnTitle: '课程安排与评分方式',
  slides: 'L1 s.1–4',
  coverage: 'full',
  coverageNote: 'Straight off the course-information slides. Worth a node of its own only because the weighting decides how you should revise — half the marks are one spoken conversation.',
  summary: {
    en: 'Twelve lectures, 3 credits, taught by Klára Hlouchová (synthetic biology) and Cyril Bařinka (structural biology). Marks come from two assignments (25 + 25), snap quizzes during lectures, and a 50-point oral final. You need ≥60 points overall AND ≥10 from the oral, so the oral is not something you can compensate your way past.',
    cn: '12 讲、3 学分，由 Klára Hlouchová（合成生物学）和 Cyril Bařinka（结构生物学）授课。分数来自两次作业（25+25 分）、课堂随堂小测、以及 50 分的口试。总分要 ≥60 分，**并且**口试至少拿到 10 分——口试不及格是没法靠平时分补回来的。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.2', src: 'img/figures/L1_s02_1.webp' },
    { slide: 'L1 s.2', src: 'img/figures/L1_s02_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '总分 ≥60 **并且**口试 ≥10，两个条件要同时成立。口试那 10 分是**没法用平时分补回来**的。',
  skipIt: '两位老师的所属单位和实验室网址不用背。这是判断，不是老师的话——老师在第 2 讲开头给第 1 讲做 RECAP 时列的全是内容要点，没有课务信息。',
  explain: [
    {
      q: '「≥60 分**并且**口试 ≥10」，这个「并且」有多要命？',
      a: '算一遍就明白了。作业两次各 25 分，加上随堂小测，平时最多也就 50 分出头。\n\n' +
         '假设你平时**拿满 50 分**，口试考了 9 分：总分 59，第一个条件不过。\n\n' +
         '再假设你总分刚好 60，但口试只有 9 分：总分够了，**第二个条件仍然不过**。\n\n' +
         '也就是说，口试的 10 分是一道**独立的闸门**，跟你平时多努力毫无关系。整门课里唯一必须单独准备的，就是「能不能开口把一节内容讲成一段话」。',
      takeaway: '口试 10 分是硬门槛，不是分数的一部分。平时分补不了它。'
    },
    {
      q: '随堂小测为什么只有第一个答对的人得分？',
      a: '因为它奖励的不是「复习到位」，而是「人在教室、脑子在线」。每讲 3–5 题，第一个答对得 1 分，答慢了就没了。\n\n' +
         '所以它**不值得专门准备**——你没法为一个「谁先举手」的机制复习。把它当成上课别走神的提醒就够了。',
      takeaway: '小测考的是注意力，不是准备度。别为它花复习时间。'
    },
    {
      q: '口试占了一半分数，它到底在考什么？',
      a: '口试的题面通常是「讲一讲 X」，不是填空、也不是选择。它要的是**你能不能把一节内容连成一段能说出口的话**。\n\n' +
         '这两件事的差别比看上去大：你可能记得住 Golden Gate 用 Type IIS 酶，却讲不出「为什么非要 Type IIS 不可」。前者选择题能过，后者口试才过得去。\n\n' +
         '这也是为什么每一节都配了一个口试题和一串提示卡——那串提示卡是**说话的顺序**，不是知识点清单。',
      takeaway: '口试考的是串成线的能力。背得住 ≠ 讲得出。'
    }
  ],
  points: [
    { term: 'Format', en: '12 lectures, 3 credits. Lectures and slides may be in Czech or English; tests, assignments and the exam can be answered in either language.', cn: '12 讲、3 学分。讲课和幻灯片可能是捷克语或英语；测验、作业和考试用英语或捷克语作答都可以。' },
    { term: 'Assignments', en: 'Two assignments, set after lecture 6 and lecture 12, roughly 4–6 hours each, worth 25 points each.', cn: '两次作业，分别在第 6 讲和第 12 讲之后布置，每次约 4–6 小时工作量，各 25 分。' },
    { term: 'Snap quizzes', en: '3–5 per lecture. The first correct answer scores 1 point — they reward being awake, not being prepared.', cn: '每讲 3–5 道随堂小测，第一个答对的人得 1 分。考的是有没有在听，不是有没有预习。' },
    { term: 'Final exam', en: 'Oral, 50 points — half of the total available marks come out of one spoken conversation.', cn: '期末为口试，50 分——总分的一半来自一次口头对话。' },
    { term: 'Passing rule', en: '≥60 points in total AND ≥10 points from the oral. Both conditions, not either.', cn: '总分 ≥60 分**且**口试 ≥10 分。两个条件同时满足，不是二选一。' },
    { term: 'Instructors', en: 'Klára Hlouchová — Synthetic Biology group, Dept. of Cell Biology, Charles University (khlab.org). Cyril Bařinka — Structural Biology, Institute of Biotechnology, CAS (lsb.avcr.cz).', cn: 'Klára Hlouchová——查理大学细胞生物学系合成生物学组（khlab.org）。Cyril Bařinka——捷克科学院生物技术研究所结构生物学组（lsb.avcr.cz）。' }
  ],
  terms: [
    { en: 'Oral exam', cn: '口试', def_en: 'The 50-point spoken final. You must score at least 10 on it to pass regardless of your other marks.', def_cn: '50 分的口头期末考试。不管平时分多高，口试至少要拿 10 分才能及格。' },
    { en: 'Snap quiz', cn: '随堂小测', def_en: 'A short in-lecture question; the first correct answer earns 1 point.', def_cn: '课堂上的简短提问，第一个答对的人得 1 分。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What are the two conditions you must satisfy to pass this course?',
      q_cn: '通过这门课需要同时满足哪两个条件？',
      options: ['≥60 points total only', '≥60 points total AND ≥10 points from the oral exam', '≥50 points from the oral exam only', '≥60 points total OR ≥10 points from the oral exam'],
      answer: 1,
      optionNotes: {
        3: { en: 'This swaps AND for OR. The 10 points from the oral are a separate gate, not an alternative route to the same pass: 65 points overall with 9 from the oral still fails, because both conditions are checked independently.', cn: '这是把「并且」记成了「或者」。口试那 10 分是一道独立的闸门，不是另一条可选的路：总分 65 分、口试只拿 9 分，照样不及格，因为两个条件是分开验的。' }
      },
      why_en: 'Both conditions apply simultaneously. A strong assignment score cannot compensate for an oral below 10 points.',
      why_cn: '两个条件必须同时满足。作业分再高也补不了口试低于 10 分。' },
    { type: 'mcq',
      q_en: 'How many points does the oral exam carry?',
      q_cn: '口试占多少分？',
      options: ['25', '50', '10', '100'],
      answer: 1,
      optionNotes: {
        2: { en: '10 is the minimum you must clear on the oral, not what the oral is worth. The exam carries 50 points and 10 of them is the floor — this mixes up a pass threshold with a total.', cn: '10 分是口试的及格下限，不是口试的总分。口试满分 50 分，其中至少要拿到 10 分——这是把「门槛」和「总值」两个数记混了。' }
      },
      why_en: '50 points — about half of the ~100 available, from a single spoken conversation.',
      why_cn: '50 分——约占总分 100 分的一半，全部来自一次口头对话。' },
    { type: 'mcq',
      q_en: 'When are the two assignments set?',
      q_cn: '两次作业分别在什么时候布置？',
      options: ['After lectures 3 and 9', 'After lectures 6 and 12', 'At the start and end of the semester', 'After every lecture'],
      answer: 1,
      why_en: 'After lecture 6 and after lecture 12, roughly 4–6 hours of work each, 25 points each.',
      why_cn: '第 6 讲和第 12 讲之后各一次，每次约 4–6 小时工作量，各 25 分。' },
    { type: 'short',
      q_en: 'Given the mark distribution, what should your revision strategy prioritise, and why?',
      q_cn: '根据分数分布，你的复习策略应该优先做什么？为什么？',
      accept: ['oral', 'speaking', 'explain out loud', '50 points', 'mechanism'],
      answer_en: 'Prioritise being able to explain mechanisms out loud. The oral is 50 of ~100 points and carries a hard 10-point minimum, so recognising a slide is worth far less than being able to talk through a mechanism unprompted.',
      answer_cn: '优先练习「把机制讲出来」。口试占 100 分里的 50 分，还有 10 分的硬门槛，所以「看到幻灯片能认出来」的价值远低于「能主动把一个机制完整讲清楚」。' }
  ],
  oral: {
    q_en: 'How is this course assessed, and what does that tell you about how to prepare?',
    q_cn: '这门课怎么考核？这对你的复习方式有什么提示？',
    model_en: 'The course runs over twelve lectures for three credits. Assessment has three parts: two assignments after lectures six and twelve, worth twenty-five points each; snap quizzes during lectures, where the first correct answer scores a point; and an oral final worth fifty points. To pass you need at least sixty points overall and at least ten from the oral — both conditions, so the oral cannot be compensated for. Since half the marks come from one spoken conversation, the sensible preparation is to practise explaining mechanisms aloud rather than recognising slides.',
    checklist: ['12 lectures, 3 credits', 'Two assignments, 25 + 25 points', 'Snap quizzes, first correct answer scores', 'Oral final worth 50 points', '≥60 total AND ≥10 from the oral', 'Therefore: practise speaking, not recognition']
  }
},

/* ==================== PART I — LECTURE 1 ==================== */

{
  id: '1-1',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.1',
  enTitle: 'What protein engineering actually is',
  cnTitle: '什么是蛋白质工程',
  slides: 'L1 s.5–8',
  coverage: 'full',
  coverageNote: 'The definition, the three target classes and the five-step pipeline are all given verbatim on the slides. The pipeline is the spine of the whole course — every later lecture is one of its steps.',
  summary: {
    en: 'Protein engineering is the production of proteins with desired superior characteristics — stability, activity, enhanced biological function. Targets fall into three classes: natural proteins made recombinantly, modified natural proteins, and artificial proteins designed de novo. Two motives drive it: securing a reliable supply, and economics. The canonical five-step pipeline (isolate DNA → clone → express → purify → use) is the skeleton the entire course hangs on.',
    cn: '蛋白质工程就是生产具有理想优越性质的蛋白——稳定性、活性、增强的生物学功能。目标蛋白分三类：重组生产的天然蛋白、改造过的天然蛋白、以及从头设计的人工蛋白。两个驱动力：保证稳定供应，以及经济性。那条经典的五步流程（分离 DNA → 克隆 → 表达 → 纯化 → 使用）是整门课的骨架。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.7', src: 'img/figures/L1_s07_1.webp' },
    { slide: 'L1 s.7', src: 'img/figures/L1_s07_2.webp' },
    { slide: 'L1 s.8', src: 'img/figures/L1_s08_1.webp' },
    { slide: 'L1 s.8', src: 'img/figures/L1_s08_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这门课的骨架是五步：**分离 DNA → 克隆 → 表达 → 纯化 → 使用**。\n\n' +
            '后面每一讲都是其中某一步的展开，能把一个技术**放回它所属的那一步**，比记住技术名字有用得多。',
  explain: [
    {
      q: '三类目标蛋白，怎么一眼分清？',
      a: '判据只有一条：**跟自然界里那条序列比，你改了没有**。\n\n' +
         '**没改**——只是换个地方生产它，这是第一类（natural proteins）。你解决的是**供应问题**，不是设计问题。\n\n' +
         '**在天然骨架上改**——突变几个残基、砍掉一段、接上一个标签，这是第二类（modified natural proteins）。\n\n' +
         '**根本没有天然祖先**——序列是设计出来的，这是第三类（de novo / artificial proteins）。\n\n' +
         '下一节的胰岛素正好把前两类演了一遍：1982 年的 Humulin 是第一类（序列一个字母没动，只是搬到 E. coli 里生产），而 Lispro、Glargine 那些类似物是第二类。',
      takeaway: '分类看的是「序列改没改」，不是「难不难做」。'
    },
    {
      q: '「保证供应」和「经济性」不就是一回事吗？',
      a: '不是，而且考试里问「为什么要重组表达」，只答一个是不完整的。\n\n' +
         '**供应**回答的是「能不能拿到」。杀 6000 头猪才出 300 克胰岛素——这不是贵不贵的问题，是**这条路本身有天花板**，全世界的猪也不够用。\n\n' +
         '**经济性**回答的是「拿得起吗」。产率多高、纯化要几步、发酵罐多大——就算路走得通，成本压不下来照样做不成药。\n\n' +
         '这两件事经常被同一个技术同时解决，但它们是**两个理由**，不是一个理由的两种说法。',
      takeaway: '供应 = 能不能拿到；经济性 = 拿不拿得起。两个都要说。'
    },
    {
      q: 'heterologous expression（异源表达）里的「异源」是相对谁说的？',
      trace: {
        what: '把 A 物种的基因，放进 B 物种的细胞里去生产蛋白。「异源」的意思就是：**这个基因不是这个细胞自己家的**。人的胰岛素基因放进 E. coli 里表达，对 E. coli 来说就是异源的。',
        from: '为什么要这么干？因为原来的来源要么不够（猪胰腺），要么太贵，要么根本拿不到。换一个长得快、好养、好操作的细胞替你生产。',
        to: '「换哪个细胞」这一个问题，就是**整个第 3 讲**。E. coli、酵母、昆虫细胞、哺乳动物细胞各有各的代价，而选错宿主可以让一个序列完全正确的蛋白毫无活性——下一节的 EPO 就是这个例子。',
        family: '对应的说法是 homologous / native expression，即在它本来的物种里表达。另外还有一个相关但不同的词 in vitro（cell-free）expression，干脆不用活细胞，那是第 7 讲。'
      },
      takeaway: '异源 = 基因不是这个细胞自己家的。选哪个「别人家」，就是第 3 讲。'
    },
    {
      q: '那五步流程为什么值得单独背下来？',
      a: '因为**整门课就是这五步的展开**：第 1 讲是第 1 步（拿到编码 DNA），第 2 讲是第 2 步（克隆），第 3 讲是第 3 步（表达），第 4–5 讲是第 4 步（纯化）。\n\n' +
         '这条骨架在口试里的用处很实际：被问到任何一个技术，先说一句「这属于第几步、解决那一步的什么问题」，再讲细节。**同样的知识量，听起来是理解，不是背诵。**\n\n' +
         '反过来，如果一个技术你说不出它在哪一步，那多半是你还没真的懂它要解决什么。',
      takeaway: '先定位在第几步，再讲细节。这是口试里最省力的一个习惯。'
    }
  ],
  points: [
    { term: 'Definition', en: 'The process of producing proteins with desired superior characteristics or functionality — specifically stability, activity, and enhanced biological function.', cn: '生产具有理想的优越特性或功能的蛋白质的过程——具体指稳定性、活性和增强的生物学功能。' },
    { term: 'Natural proteins', en: 'Class 1: produced recombinantly with the sequence unchanged. You are solving a supply problem, not a design problem.', cn: '第一类：重组生产，序列不变。你解决的是供应问题，不是设计问题。' },
    { term: 'Modified natural proteins', en: 'Class 2: a natural scaffold carrying deliberate mutations, truncations, fusions or chemical modifications.', cn: '第二类：以天然骨架为基础，加上有意设计的突变、截短、融合或化学修饰。' },
    { term: 'Artificial proteins', en: 'Class 3: designed de novo, with no natural ancestor.', cn: '第三类：从头设计，没有天然的来源蛋白。' },
    { term: 'Motive 1 — supply', en: 'Secure a reliable source of a target protein. You cannot farm 6,000 pig pancreases every time you want insulin.', cn: '动机一——供应。保证目标蛋白有可靠来源。你不可能每次要胰岛素就去养 6000 头猪取胰腺。' },
    { term: 'Motive 2 — economics', en: 'High yields and low production costs. These are different from supply and are often the harder constraint.', cn: '动机二——经济性。高产量、低成本。这和「有没有来源」是两回事，而且往往是更难的约束。' },
    { term: 'The pipeline', en: 'Step 1 prepare/isolate coding DNA (Lec 1) → Step 2 clone and manipulate DNA (Lec 2) → Step 3 express heterologously in a suitable host (Lec 3) → Step 4 purify and characterise (Lec 4–5) → Step 5 use it, in research or industry.', cn: '第一步 制备/分离编码 DNA（第 1 讲）→ 第二步 克隆与遗传操作（第 2 讲）→ 第三步 在合适宿主中异源表达（第 3 讲）→ 第四步 纯化与表征（第 4–5 讲）→ 第五步 应用于科研或工业。' },
    { term: 'Memorise the pipeline', en: 'Learn these five steps as a unit. Every subsequent lecture is an expansion of one of them, and an oral answer that locates a technique in the pipeline reads as understanding rather than recall.', cn: '把这五步当成一个整体记牢。后面每一讲都是其中某一步的展开；口试时能把一项技术定位到流程的哪一步，听起来就是「理解」而不是「背诵」。' }
  ],
  terms: [
    { en: 'Protein engineering', cn: '蛋白质工程', def_en: 'Producing proteins with desired superior characteristics — stability, activity, enhanced biological function.', def_cn: '生产具有理想优越特性的蛋白质——稳定性、活性、增强的生物学功能。' },
    { en: 'Heterologous expression', cn: '异源表达', def_en: 'Expressing a gene in a species other than the one it came from, e.g. the human insulin gene in E. coli. Contrast homologous expression, which is overexpression in the original species.', def_cn: '把某个物种的基因放到另一个物种的细胞里表达，例如人胰岛素基因在大肠杆菌里表达。与之相对的 homologous expression 是在原物种中过表达。' },
    { en: 'De novo design', cn: '从头设计', def_en: 'Designing a protein sequence with no natural ancestor, rather than modifying an existing scaffold.', def_cn: '设计一条没有天然来源的蛋白序列，而不是在已有骨架上改造。' },
    { en: 'Recombinant protein', cn: '重组蛋白', def_en: 'A protein produced from DNA that has been assembled or introduced by molecular cloning rather than expressed from its native locus.', def_cn: '由分子克隆组装或导入的 DNA 表达出的蛋白，而非从天然基因座表达。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which of the following is NOT one of the three classes of target protein named in the definition?',
      q_cn: '以下哪一项**不属于**定义中列出的三类目标蛋白？',
      options: ['Natural proteins produced recombinantly with the sequence unchanged', 'Modified natural proteins carrying deliberate sequence changes', 'Artificial proteins designed de novo', 'Proteins purified directly from their native tissue source'],
      answer: 3,
      why_en: 'Purifying from native tissue is the pre-recombinant approach the field exists to replace — it is the supply problem, not a class of engineered target.',
      why_cn: '从天然组织直接纯化恰恰是重组技术要取代的老办法——那是供应问题本身，不是一类工程改造的目标蛋白。' },
    { type: 'mcq',
      q_en: 'In the canonical pipeline, at which step does heterologous expression sit?',
      q_cn: '在经典流程中，异源表达位于第几步？',
      options: ['Step 1 — prepare coding DNA', 'Step 2 — clone and manipulate DNA', 'Step 3 — express in a suitable host', 'Step 4 — purify and characterise'],
      answer: 2,
      why_en: 'Step 3, covered by Lecture 3. Steps 1 and 2 are Lectures 1 and 2; step 4 is Lectures 4–5.',
      why_cn: '第三步，对应第 3 讲。第一、二步是第 1、2 讲，第四步是第 4–5 讲。' },
    { type: 'mcq',
      q_en: 'The two stated reasons to engineer a protein are supply and economics. What distinguishes them?',
      q_cn: '蛋白质工程的两个动机是供应和经济性。它们的区别是什么？',
      options: ['They are one requirement stated twice, with no practical difference', 'Supply is whether a reliable source exists at all; economics is yield and cost', 'Supply is the concern for industrial enzymes, while economics only matters for therapeutic proteins', 'Economics applies only to proteins designed de novo, not to natural ones'],
      answer: 1,
      why_en: 'Supply asks "can I get this protein at all, reproducibly?"; economics asks "can I make enough of it cheaply enough?" A process can solve the first and still fail the second.',
      why_cn: '供应问的是「我能不能可重复地拿到这个蛋白」；经济性问的是「能不能足够便宜地做到足够多」。一个工艺可能解决了前者却仍然过不了后者。' },
    { type: 'short',
      q_en: 'State the five steps of the canonical protein engineering pipeline in order.',
      q_cn: '按顺序说出蛋白质工程经典流程的五个步骤。',
      accept: ['isolate DNA', 'clone', 'express', 'purify', 'use'],
      answer_en: 'One, prepare or isolate the coding DNA. Two, clone it and carry out any genetic manipulation. Three, express it heterologously in a suitable host. Four, purify and characterise the protein. Five, use it in research or industry.',
      answer_cn: '一、制备或分离编码 DNA；二、克隆并进行遗传操作；三、在合适的宿主中异源表达；四、纯化并表征目标蛋白；五、用于科研或工业。'
    }
  ],
  oral: {
    q_en: 'Define protein engineering and outline the workflow it follows.',
    q_cn: '定义蛋白质工程，并概述它的工作流程。',
    model_en: 'Protein engineering is the production of proteins with desired superior characteristics — typically improved stability, activity or biological function. The targets fall into three classes: natural proteins produced recombinantly with the sequence unchanged, modified natural proteins where a natural scaffold carries deliberate mutations or fusions, and artificial proteins designed de novo with no natural ancestor. There are two motives, and they are distinct: securing a reliable supply, since you cannot farm six thousand pig pancreases every time you need insulin, and economics, meaning high yield at low cost. The workflow has five steps. First, prepare or isolate the coding DNA. Second, clone it and perform any genetic manipulation. Third, express it heterologously in a suitable host. Fourth, purify and characterise the protein. Fifth, use it. Each of the remaining lectures in this course expands one of those steps.',
    checklist: ['Definition: superior characteristics — stability, activity, function', 'Three target classes: natural, modified natural, artificial de novo', 'Motive 1: reliable supply', 'Motive 2: economics — yield and cost', 'Five-step pipeline in order', 'Note that later lectures expand individual steps']
  },
  // Extra questions beyond the required four. Same item shape as `quiz`, no
  // count rule — the "exactly 4" check stays on `quiz` alone so it can still
  // catch an under-written node. Off by default; the Quiz tab has a toggle.
  bank: [
    { type: 'mcq',
      q_en: 'Insulin produced recombinantly in E. coli with the human sequence unchanged belongs to which class of target?',
      q_cn: '在大肠杆菌中重组生产、序列与人源完全一致的胰岛素，属于哪一类目标蛋白？',
      options: ['Natural protein', 'Modified natural protein', 'Artificial protein designed de novo', 'It does not fall into any of the three classes'],
      answer: 0,
      optionNotes: {
        1: { en: 'Modified means a deliberate change to the amino-acid sequence, not the fact that the protein is made in a foreign host. Recombinant expression in E. coli leaves the sequence untouched; Lispro and Glargine, which carry designed mutations, are the class-two examples.', cn: 'Modified 指的是氨基酸序列被刻意改动，不是指蛋白换了个宿主来生产。在 E. coli 里重组表达并没有动序列；带着设计突变的 Lispro 和 Glargine 才属于第二类。' }
      },
      why_en: 'Class one is a natural protein produced recombinantly with the sequence unchanged. The problem being solved is supply, not design. Lispro and Glargine, which carry deliberate mutations, would be class two.',
      why_cn: '第一类就是序列不变、以重组方式生产的天然蛋白。这里解决的是供应问题，不是设计问题。带有刻意突变的 Lispro 和 Glargine 才属于第二类。' },
    { type: 'mcq',
      q_en: 'The lecture gives two motives for protein engineering. Which pair is correct?',
      q_cn: '课程给出了蛋白质工程的两个动机。哪一组是正确的？',
      options: ['Speed and reproducibility', 'Reliable supply and economics', 'Safety and regulatory approval', 'Patentability and scale'],
      answer: 1,
      why_en: 'Supply comes first — you cannot farm six thousand pig pancreases every time insulin is needed. Economics is the second and separate motive: high yield at low cost. The other pairs are real concerns in industry but are not what the slide lists.',
      why_cn: '首先是供应——总不能每次要用胰岛素就去养 6000 头猪取胰腺。第二个、也是独立的动机是经济性：高产量、低成本。其他几组在工业上确实是现实问题，但不是幻灯片列出的那两个。' },
    { type: 'short',
      q_en: 'Give one example of a class-2 target (modified natural protein) and say what the modification achieves.',
      q_cn: '举一个第二类目标蛋白（改造过的天然蛋白）的例子，并说明这个改造达到了什么效果。',
      accept: ['Lispro', 'Glargine', 'Detemir', 'mutation', 'fusion', 'truncation'],
      answer_en: 'The insulin analogues are the cleanest examples. Lispro carries a swap of two residues in the B-chain C-terminus that blocks the self-association surface, so the drug stays monomeric and is absorbed fast — a rapid-acting insulin. Glargine shifts the isoelectric point so the protein precipitates at the neutral pH of tissue and redissolves slowly, giving a long, flat action profile. Detemir is myristoylated so it binds serum albumin and is released gradually. All three are natural scaffolds carrying deliberate modifications, which is exactly what class two means: not a supply problem, a design problem.',
      answer_cn: '胰岛素类似物是最干净的例子。Lispro 把 B 链 C 端的两个残基互换，破坏了自缔合表面，因此药物保持单体状态、吸收很快——这是速效胰岛素。Glargine 改变了等电点，使蛋白在组织的中性 pH 下沉淀、再缓慢重新溶解，给出平缓而持久的作用曲线。Detemir 则经过豆蔻酰化，能结合血清白蛋白并被逐渐释放。这三者都是在天然骨架上加了刻意的修饰，这正是第二类的定义：解决的不是供应问题，而是设计问题。'
    },
    { type: 'mcq',
      q_en: 'Which step of the five-step pipeline does the rest of Lecture 2 expand on?',
      q_cn: '第 2 讲的其余内容展开的是五步流程中的哪一步？',
      options: ['Isolate the coding DNA by PCR from cDNA or genomic DNA', 'Clone it and perform genetic manipulation', 'Express it heterologously', 'Purify and characterise'],
      answer: 1,
      optionRefs: { 2: '2-1' },
      why_en: 'Lecture 2 is plasmids, antibiotics and selection, restriction enzymes and the whole family of cloning systems — that is step two. Expression is Lecture 3, and purification is Lectures 4 to 5. Knowing which lecture sits on which step is the fastest way to organise the whole course in your head.',
      why_cn: '第 2 讲讲的是质粒、抗生素与选择、限制酶，以及各种克隆系统——这就是第二步。表达在第 3 讲，纯化在第 4–5 讲。搞清楚哪一讲对应哪一步，是把整门课在脑子里理顺的最快办法。' }
  ]
},

{
  id: '1-2-1',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.1',
  enTitle: 'Case study — insulin: the supply problem, then the kinetics problem',
  cnTitle: '案例——胰岛素：先是供应问题，后是动力学问题',
  slides: 'L1 s.9–11',
  coverage: 'full',
  coverageNote: 'The timeline, production figures and analogue names are on the slides. The mechanism of each analogue is NOT — that is in the "beyond the slides" block, and it is where the three generic half-life tricks come from.',
  summary: {
    en: 'Insulin is the field\'s founding story told twice. First a supply problem: 6,000 pig pancreases yielded 300 g of insulin, until Humulin in 1982 became the world\'s first recombinant DNA drug and one 50,000-litre batch covered a thousand people for a year. Then a kinetics problem: native insulin self-associates into hexamers that must dissociate before absorption, so the modern analogues are all physical-chemistry tricks to speed that up or slow it down.',
    cn: '胰岛素把这个领域的故事讲了两遍。先是供应问题：6000 个猪胰腺才出 300 克胰岛素，直到 1982 年的 Humulin 成为世界上第一个重组 DNA 药物，一个 5 万升发酵罐的批次就够 1000 人用一年。然后是动力学问题：天然胰岛素会自聚成六聚体，必须解聚才能吸收，所以现代类似物全都是用物理化学手段把这个过程加快或减慢。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.9', src: 'img/figures/L1_s09_1.webp' },
    { slide: 'L1 s.10', src: 'img/figures/L1_s10_1.webp' },
    { slide: 'L1 s.11', src: 'img/figures/L1_s11_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '天然蛋白要当药，先后要过两关：**先是造不出来（供应），再是性质不合用（动力学）**。胰岛素这一节把两关都演了一遍。\n\n' +
            '后面那一长串类似物只用了**三种手法**：挡住自聚、挪动 pI、挂脂肪酸搭白蛋白的便车。',
  skipIt: '商品名（Humalog、Lantus、Levemir…）、具体突变位点的编号、起效小时数——这些是药代动力学的细节。老师在第 2 讲开头给第 1 讲做 RECAP 时，一个药名都没提。要记的是那**三种手法**本身，因为它们在 EPO 和 GLP-1 那两节还会原样再来一遍。',
  explain: [
    {
      q: '为什么天然胰岛素「自己会粘成一团」，这有什么问题？',
      a: '天然胰岛素在注射液里不是一个个单独的分子，它会**自聚成六聚体（hexamer）**。\n\n' +
         '而能被吸收进血液的只有**单体**。所以你打进皮下之后，药得先等六聚体一点点散开，才谈得上起效。\n\n' +
         '问题就在这里：散开得**慢，而且不好预测**。吃饭时打的针，你希望它快；睡前打的针，你希望它平稳撑一整夜。天然分子这两件事都做不好。\n\n' +
         '记住这一句，下面每一个类似物你都能自己推出来它在干嘛——**它们全都在动「自聚—解聚」这一件事**，要么让它别聚（起效快），要么让它更难散（作用长）。',
      takeaway: '一句话：天然胰岛素不是没活性，是聚散的节奏不合用。'
    },
    {
      q: 'pI（等电点）是个什么东西？',
      trace: {
        what: '一个 pH 数值：当环境 pH **正好等于**这个值时，蛋白的净电荷为零。你可以把它想成**这个蛋白最不「带电」的那个酸碱度**。',
        from: '蛋白表面那些氨基酸侧链有的能带正电、有的能带负电，带不带取决于周围的 pH。把 pH 从低往高扫，净电荷会从正走到负，中间必然经过零——那个点就是 pI。',
        to: '净电荷为零，分子之间就不再互相排斥，于是**最容易挤在一起沉淀出来**。Glargine 玩的就是这个：把 pI 从约 5.4 挪到约 6.7，药瓶里是 pH 4（离 pI 远，溶得好），一打进 pH 7.4 的组织就贴近 pI，**当场微沉淀**，再慢慢溶回去，一放就是 24 小时。整个过程**没碰受体结合**——纯粹是物理化学。',
        family: 'pI 不是只在这里出现。第 4–5 讲的离子交换层析（ion-exchange chromatography）靠的就是同一个量：pH 决定蛋白带什么电，带什么电决定它挂不挂得住柱子。等电聚焦（IEF）同理。',
        numbers: '天然胰岛素 pI ≈ 5.4；Glargine ≈ 6.7；人体组织 pH ≈ 7.4；Glargine 制剂 pH = 4。'
      },
      takeaway: 'pI = 净电荷为零的那个 pH，也就是最容易沉淀的 pH。'
    },
    {
      q: 'Lispro 只是把两个氨基酸对调了一下，凭什么就能变快？',
      a: '关键在于**调换的是哪两个**。B 链第 28 位的 Pro 和第 29 位的 Lys，正好落在**两个胰岛素分子互相贴合的那个界面上**（dimerisation interface）。\n\n' +
         '对调之后，**成分一个没变，形状变了**。界面对不上，两个分子贴不牢，也就聚不成六聚体。药留在单体状态，打进去直接吸收。\n\n' +
         '「Lis-Pro」这个名字就是这么来的：**Lys-Pro 的顺序**。名字本身就是答案。\n\n' +
         'Aspart 走的是同一个目的、不同的手段：把 B28 的 Pro 换成 Asp，靠这个负电荷让两个分子**互相推开**。一个是形状不合，一个是电荷排斥。',
      takeaway: '不改成分、只改装配。同一个目标（别聚），可以用形状办，也可以用电荷办。'
    },
    {
      q: '为什么「挂一条脂肪酸」就能延长半衰期？',
      a: '因为你挂的不是重量，是**一张搭车券**。\n\n' +
         '血液里有一种含量极高的蛋白叫**白蛋白（albumin）**，它自己的半衰期是 **19–22 天**——大到肾脏滤不掉，也不容易被清除。\n\n' +
         '脂肪酸链的作用就是**去结合白蛋白**。药一旦挂上白蛋白，就跟着它在血液里循环，变成一个缓慢释放的「储库」。Detemir（C14 肉豆蔻酸）和 Degludec 走的都是这条路。\n\n' +
         '值得单独记一笔的是：**这个手法根本不是胰岛素专用的**。后面 GLP-1 那一节的 liraglutide（C16）和 semaglutide（C18）用的是**完全一样的招**。看到「挂脂肪酸」，就该直接想到「它要去抱白蛋白的大腿」。',
      takeaway: '挂脂肪酸 = 结合白蛋白 = 借用白蛋白 19–22 天的半衰期。跨药物类别通用。'
    },
    {
      q: '为什么位点要写成 B28、A21 这种样子？',
      a: '这一条跟生物学无关，**纯粹是记号问题**，但看不懂就会卡住。\n\n' +
         '胰岛素不是一条链，是**两条**：A 链 21 个氨基酸，B 链 30 个，靠二硫键连在一起。既然有两条链，光说「第 28 位」就没有意义了——**必须说清是哪条链的第 28 位**。\n\n' +
         '所以 **B28-Pro** = B 链第 28 位是脯氨酸；**A21-Asn → Gly** = A 链第 21 位由天冬酰胺换成甘氨酸。字母是链，数字是位置。\n\n' +
         '顺带一提，Detemir 里写的「B30 removed」也就看得懂了：B 链一共 30 位，删掉 B30 就是**把 B 链的最后一个氨基酸剪掉**，腾出位置好在 B29 上挂脂肪酸。',
      takeaway: '字母是链，数字是位置。胰岛素有两条链，所以必须两样都写。'
    },
    {
      q: '这么多类似物，到底该记什么？',
      a: '**记三种手法，不记药名。**\n\n' +
         '**手法一：挡住自聚。**改动 dimer 界面上的残基（Lispro 换顺序、Aspart 加负电荷），让分子保持单体 → 吸收**快**。\n\n' +
         '**手法二：挪动 pI。**让蛋白在生理 pH 下正好处于等电点，注射后就地微沉淀再慢慢溶解（Glargine）→ 作用**长**。\n\n' +
         '**手法三：挂脂肪酸。**借白蛋白的半衰期（Detemir、Degludec）→ 作用**长**。\n\n' +
         '注意方向：**手法一是加速，手法二和三是减速。**这正好对应两种临床需求——吃饭时要快的，过夜要平稳的。\n\n' +
         '把这三条记住，EPO 那一节和 GLP-1 那一节你会发现**又是这几招**（EPO 加糖链和 PEG，本质上跟手法三一样是加大流体力学半径）。',
      takeaway: '三种手法：挡自聚（快）、挪 pI（慢）、挂脂肪酸（慢）。药名会忘，手法不会。'
    }
  ],
  points: [
    { term: '1920s', en: 'Isolated from pig and cow pancreas — differing from human insulin by one and three amino acids respectively. 6,000 pig pancreas glands yielded 300 g of purified insulin.', cn: '20 世纪 20 年代：从猪和牛的胰腺中分离，分别与人胰岛素相差 1 个和 3 个氨基酸。6000 个猪胰腺才纯化出 300 克胰岛素。' },
    { term: '1963', en: 'Insulin becomes the first human protein to be chemically synthesised.', cn: '1963 年：胰岛素成为第一个被化学合成的人类蛋白。' },
    { term: '1982 — Humulin', en: 'Genentech and Eli Lilly launch Humulin, the world\'s first recombinant DNA drug. This is the moment the whole field becomes real.', cn: '1982 年——Humulin：Genentech 与 Eli Lilly 推出 Humulin，世界上第一个重组 DNA 药物。整个领域从这一刻起变成现实。' },
    { term: 'Scale today', en: 'Produced in E. coli in 50,000-litre fermenters. One batch equals one year\'s supply for 1,000 people. Market value roughly $30 billion (2023).', cn: '今天的规模：在大肠杆菌中用 5 万升发酵罐生产，一个批次等于 1000 人一年的用量。市场规模约 300 亿美元（2023 年）。' },
    { term: 'Structure', en: '51 amino acids in two chains, A and B, held together by disulfide bonds.', cn: '结构：51 个氨基酸，分 A、B 两条链，由二硫键连接。' },
    { term: '1990s–2000s', en: 'Engineered analogues with deliberately tuned pharmacokinetics — Lispro, Aspart, Glargine, Detemir, Degludec.', cn: '1990–2000 年代：药代动力学经过刻意调整的工程化类似物——Lispro、Aspart、Glargine、Detemir、Degludec。' }
  ],
  beyondPoints: [
    { term: 'The underlying problem', en: 'Native insulin self-associates into hexamers. Those hexamers must dissociate before absorption, which makes onset slow and unpredictable. Every analogue below attacks that one fact.', cn: '根本问题：天然胰岛素会自聚成六聚体，必须先解聚才能被吸收，所以起效慢且不可预测。下面每一个类似物针对的都是这同一件事。' },
    { term: 'Lispro (Humalog)', en: 'B28-Pro and B29-Lys are swapped — hence "Lis-Pro". That pair sits in the dimerisation interface, and swapping them sterically blocks dimer formation, so the drug stays monomeric and absorbs fast. Rapid-acting mealtime insulin.', cn: 'Lispro（优泌乐）：把 B28-Pro 和 B29-Lys 互换位置（名字就是这么来的）。这一对残基正好在二聚化界面上，互换后从空间上阻断二聚体形成，药物保持单体状态、吸收快。属于餐时速效胰岛素。' },
    { term: 'Aspart (NovoLog)', en: 'Same idea by a different route: B28-Pro → Asp. The negative charge causes electrostatic repulsion between monomers.', cn: 'Aspart（诺和锐）：思路相同、手段不同——B28-Pro 换成 Asp，引入的负电荷让单体之间静电排斥。' },
    { term: 'Glargine (Lantus)', en: 'A21-Asn → Gly plus two extra Arg on the B-chain C-terminus. Those arginines shift the pI from ~5.4 up to ~6.7. Formulated at pH 4 it is soluble; injected into pH 7.4 tissue it is at its pI, microprecipitates, and redissolves slowly over ~24 h. Pure physical chemistry — receptor binding is untouched.', cn: 'Glargine（来得时）：A21-Asn 换成 Gly，再在 B 链 C 端加两个 Arg。这些精氨酸把 pI 从约 5.4 推到约 6.7。药物配在 pH 4 的针剂里是溶的，打进 pH 7.4 的组织后正好处于等电点，微沉淀，再在约 24 小时内缓慢重新溶解。纯粹的物理化学把戏——受体结合完全没动。' },
    { term: 'Detemir (Levemir)', en: 'B30 removed and a myristic acid (C14) attached to B29-Lys. The fatty acid binds serum albumin, which acts as a circulating depot — half-life extension by albumin hitch-hiking.', cn: 'Detemir（诺和平）：去掉 B30，在 B29-Lys 上挂一个肉豆蔻酸（C14）。脂肪酸结合血清白蛋白，白蛋白就成了一个循环中的「储库」——靠搭白蛋白的便车延长半衰期。' },
    { term: 'Degludec (Tresiba)', en: 'Hexadecanedioic acid via a γGlu spacer; forms multi-hexamer chains at the injection site. Action lasts over 40 hours.', cn: 'Degludec（诺和达）：通过 γGlu 连接臂挂十六烷二酸，在注射部位形成多六聚体长链，作用超过 40 小时。' },
    { term: 'The three generic tricks', en: 'Worth memorising separately, because they recur in EPO and GLP-1 and are a favourite oral thread: (i) block self-association; (ii) shift the pI so the drug precipitates at physiological pH; (iii) attach a fatty acid to borrow albumin\'s 19–22 day half-life. Trick (i) speeds absorption up; (ii) and (iii) slow it down.', cn: '三招通用手法（值得单独背下来，EPO 和 GLP-1 会反复出现，是口试的常考主线）：① 破坏自聚；② 移动等电点，让药物在生理 pH 下析出；③ 挂脂肪酸，借用白蛋白 19–22 天的半衰期。① 是**加快**，②③ 是**减慢**——同一个蛋白，用不同的物理化学手段把药代动力学往两个方向调。这正是「蛋白质工程」四个字的含义。' }
  ],
  terms: [
    { en: 'Humulin', cn: '人胰岛素（重组）', def_en: 'Recombinant human insulin launched 1982 by Genentech/Eli Lilly — the world\'s first recombinant DNA drug.', def_cn: '1982 年由 Genentech/Eli Lilly 推出的重组人胰岛素，世界上第一个重组 DNA 药物。' },
    { en: 'Isoelectric point (pI)', cn: '等电点', def_en: 'The pH at which a protein carries no net charge and is least soluble. Glargine exploits this: shifting pI to ~6.7 makes it precipitate at tissue pH.', def_cn: '蛋白质净电荷为零、溶解度最低时的 pH。Glargine 正是利用这一点：把 pI 移到约 6.7，药物就会在组织 pH 下析出。' },
    { en: 'Albumin hitch-hiking', cn: '白蛋白搭便车', def_en: 'Attaching a fatty acid so the drug binds serum albumin, borrowing albumin\'s 19–22 day half-life as a circulating depot.', def_cn: '挂上脂肪酸使药物结合血清白蛋白，借用白蛋白 19–22 天的半衰期，把它当作循环储库。' },
    { en: 'Self-association', cn: '自聚', def_en: 'Reversible oligomerisation of a protein with itself. Native insulin forms hexamers that must dissociate before absorption.', def_cn: '蛋白质与自身可逆地寡聚。天然胰岛素形成六聚体，必须解聚后才能吸收。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does swapping B28-Pro and B29-Lys make Lispro fast-acting?',
      q_cn: '为什么把 B28-Pro 和 B29-Lys 互换就让 Lispro 变成速效？',
      options: ['It binds the insulin receptor more tightly than native insulin does', 'The pair sits in the dimerisation interface, so the drug stays monomeric', 'It shifts the isoelectric point above physiological pH, keeping it soluble', 'It adds a fatty acid side chain that binds serum albumin in tissue'],
      answer: 1,
      optionNotes: {
        2: { en: 'This is Glargine\'s mechanism attached to the wrong analogue. Glargine gains two arginines that raise the pI to about 6.7, so it precipitates in tissue and acts slowly; Lispro touches no charge at all, it breaks the dimerisation interface so absorption is faster. The two are engineered in opposite directions.', cn: '这是把 Glargine 的机制安到了 Lispro 头上。Glargine 多出两个 arginine，把 pI 抬到约 6.7，在组织里析出、起效变慢；Lispro 完全没有动电荷，它破坏的是 dimer 界面，让吸收变快。两者的工程方向正好相反。' }
      },
      why_en: 'Native insulin must dissociate from hexamers before absorption. Blocking dimerisation removes that delay. Receptor binding is unchanged.',
      why_cn: '天然胰岛素必须先从六聚体解聚才能吸收。阻断二聚化就去掉了这个延迟环节。受体结合完全没变。' },
    { type: 'mcq',
      q_en: 'Glargine is formulated at pH 4 and injected into tissue at pH 7.4. What happens, and why?',
      q_cn: 'Glargine 配制在 pH 4、注射进 pH 7.4 的组织。会发生什么？为什么？',
      options: ['The rise in pH unfolds it irreversibly at the injection site', 'Extra arginines put its pI near 6.7, so it microprecipitates in tissue', 'The pH change activates a protease that trims the propeptide', 'It binds serum albumin more tightly once it reaches neutral pH'],
      answer: 1,
      optionNotes: {
        3: { en: 'Albumin hitch-hiking is Detemir and Degludec, which carry a fatty acid for exactly that purpose. Glargine has no fatty acid — its depot is a physical precipitate at the injection site, formed because its pI now sits at tissue pH.', cn: '借白蛋白搭便车的是 Detemir 和 Degludec，它们身上专门挂了脂肪酸。Glargine 没有脂肪酸，它的储库是注射部位的物理沉淀——因为 pI 已经被抬到组织 pH 附近，蛋白在那里最不溶。' }
      },
      why_en: 'The two extra B-chain arginines raise the pI from ~5.4 to ~6.7. Soluble at pH 4, at its pI in tissue, so it precipitates and dissolves slowly — a 24 h basal insulin by pure physical chemistry.',
      why_cn: 'B 链上多出的两个精氨酸把 pI 从约 5.4 提到约 6.7。在 pH 4 时可溶，进入组织后正好在等电点，于是析出并缓慢溶解——纯靠物理化学做出的 24 小时基础胰岛素。' },
    { type: 'mcq',
      q_en: 'Which of the three generic half-life tricks SPEEDS UP absorption rather than slowing it?',
      q_cn: '三招通用手法中，哪一招是**加快**吸收而不是减慢？',
      options: ['Shifting the pI to precipitate at physiological pH', 'Attaching a fatty acid to bind albumin', 'Blocking self-association', 'All three slow absorption down'],
      answer: 2,
      why_en: 'Blocking self-association removes the dissociation step that delays absorption. Shifting the pI and albumin binding both extend duration.',
      why_cn: '破坏自聚去掉了延迟吸收的解聚步骤。移动等电点和结合白蛋白都是延长作用时间的。' },
    { type: 'short',
      q_en: 'Name the three generic strategies for tuning a protein drug\'s pharmacokinetics, and say which direction each moves it.',
      q_cn: '说出调节蛋白类药物药代动力学的三招通用策略，并说明每一招把它往哪个方向调。',
      accept: ['self-association', 'pI', 'isoelectric', 'fatty acid', 'albumin', 'faster', 'slower'],
      answer_en: 'One, block self-association — this speeds absorption up, as in Lispro and Aspart. Two, shift the isoelectric point so the drug precipitates at physiological pH — this slows it down, as in Glargine. Three, attach a fatty acid so the drug borrows albumin\'s nineteen-to-twenty-two-day half-life — this also slows it down, as in Detemir and Degludec. The same protein, pushed in two opposite directions by physical chemistry alone.',
      answer_cn: '① 破坏自聚——加快吸收，如 Lispro 和 Aspart；② 移动等电点，让药物在生理 pH 下析出——减慢，如 Glargine；③ 挂脂肪酸借用白蛋白 19–22 天的半衰期——同样减慢，如 Detemir 和 Degludec。同一个蛋白，仅靠物理化学手段就能往两个相反方向调。' }
  ],
  oral: {
    q_en: 'Use insulin to illustrate what protein engineering can do.',
    q_cn: '用胰岛素为例说明蛋白质工程能做什么。',
    model_en: 'Insulin tells the story twice. The first problem was supply. In the nineteen-twenties it was isolated from pig and cow pancreas, differing from the human protein by one and three amino acids, and it took six thousand pig pancreas glands to yield three hundred grams. In nineteen eighty-two Humulin, from Genentech and Eli Lilly, became the world\'s first recombinant DNA drug; today it is made in E. coli in fifty-thousand-litre fermenters, where one batch covers a thousand people for a year. The second problem was kinetics. Native insulin self-associates into hexamers which must dissociate before absorption, making onset slow and unpredictable. Lispro swaps B28-proline and B29-lysine, which sit in the dimerisation interface, so the drug stays monomeric and acts fast. Glargine adds two arginines that shift the isoelectric point from about five point four to six point seven, so it is soluble in the pH four formulation but microprecipitates at tissue pH and redissolves over twenty-four hours. Detemir attaches myristic acid, which binds serum albumin as a circulating depot. Those are the three generic tricks — block self-association, shift the pI, or borrow albumin\'s half-life — and none of them touches receptor binding.',
    checklist: ['Supply problem: 6,000 pancreases → 300 g', 'Humulin 1982 — first recombinant DNA drug', 'Scale today: one batch = 1,000 people for a year', 'Kinetics problem: hexamer must dissociate first', 'Lispro — swap at the dimerisation interface', 'Glargine — pI shift, precipitates at tissue pH', 'Detemir — fatty acid, albumin depot', 'All three are physical chemistry, not receptor changes']
  }
},

{
  id: '1-2-2',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.2',
  enTitle: 'Case study — erythropoietin: the glycosylation lesson',
  cnTitle: '案例——促红细胞生成素：糖基化的教训',
  slides: 'L1 s.12',
  coverage: 'full',
  coverageNote: 'The slide gives the size, market value and the Darbepoetin mutation count. Why sugars extend half-life, and the E. coli consequence, are in the beyond-the-slides block — but that consequence is the entire argument of Lecture 3, so it is not optional material.',
  summary: {
    en: 'EPO is 165 amino acids, heavily glycosylated, and — this is the point — glycosylation is required for activity. Darbepoetin carries five mutations that create two extra N-linked glycosylation sites, extending in vivo half-life about threefold. The consequence that matters for this course is that EPO cannot be made in E. coli at all, because prokaryotes do not glycosylate. It is the clearest single example of the host determining whether your protein works.',
    cn: 'EPO 有 165 个氨基酸，高度糖基化——关键在于，**糖基化是活性所必需的**。Darbepoetin 带有 5 个突变，创造出 2 个额外的 N-连接糖基化位点，体内半衰期延长约 3 倍。对这门课真正重要的后果是：EPO 根本不能在大肠杆菌里生产，因为原核生物不做糖基化。这是「宿主决定你的蛋白能不能工作」最清楚的一个例子。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'EPO 的糖链**不是装饰，是活性的一部分**。而糖是宿主挂上去的，原核生物不挂糖——所以 **EPO 根本不能在 E. coli 里做**。\n\n' +
            '这是全课最干脆的一个例子：**选错宿主，序列完全正确的蛋白照样是废的**。',
  skipIt: '市场规模、半衰期延长几倍这些数字不用背。老师在第 2 讲开头给第 1 讲做 RECAP 时，一个药名、一个数字都没提。要记的是那条因果链：糖基化必需 → 宿主决定糖基化 → 宿主决定成败。',
  explain: [
    {
      q: '「糖基化是活性所必需的」，为什么这句话这么要紧？',
      a: '因为它把问题从**蛋白质**挪到了**生产它的细胞**。\n\n' +
         '一般你会觉得，蛋白的性质写在序列里：序列对了，蛋白就对了。EPO 说：不一定。\n\n' +
         '糖链**不是基因编码的**。基因只编码 165 个氨基酸，糖是蛋白合成完之后由**细胞的酶系统**一段段加上去的（这叫 post-translational modification，翻译后修饰）。哪个细胞、有没有这套酶、挂什么样的糖，全由**宿主**说了算。\n\n' +
         '所以如果糖是活性必需的，那么「序列正确」就不再等于「蛋白能用」。你在 E. coli 里能表达出一条氨基酸顺序**一个字母都不差**的 EPO——它没有活性，而且**没有任何纯化步骤能救它**，因为缺的东西压根不在纯化这一步丢的。',
      takeaway: '序列由基因决定，糖由宿主决定。糖必需，宿主就成了成败条件。'
    },
    {
      q: 'N-linked glycosylation（N-连接糖基化）是个什么东西？',
      trace: {
        what: '在蛋白上**挂糖链**的一种方式。「N-连接」指的是挂的位置：糖接在**天冬酰胺（Asn，N）**这个氨基酸的侧链氮原子上。所以「N」不是编号，是那个氨基酸的单字母缩写。',
        from: '不是随便哪个 Asn 都能挂。细胞的酶认一个**序列信号**：Asn-X-Ser/Thr（X 不能是 Pro）。凑齐这三个位置，酶就会来挂糖；凑不齐，就不挂。这解释了 Darbepoetin 的做法——**5 个突变，目的就是在序列里人为拼出 2 个新的这种信号**，让宿主自己多挂两条糖链上去。',
        to: '真核细胞（酵母、昆虫、哺乳动物）有这套机器，原核细胞（E. coli）没有。**这一条直接决定了第 3 讲怎么选宿主**，也是第 3 讲整讲的中心论点。',
        family: '另一种是 O-linked glycosylation，挂在 Ser/Thr 的氧上。两者合称糖基化，都属于翻译后修饰（PTM）这个大类——二硫键、磷酸化也在这一类里。'
      },
      takeaway: 'N 指的是挂在 Asn 上。信号是 Asn-X-Ser/Thr，凑出信号就能让宿主多挂糖。'
    },
    {
      q: '糖链凭什么能延长半衰期？',
      a: '两件事同时起作用，答题时最好都说。\n\n' +
         '**第一，体积。**糖链很占地方，把蛋白的**流体力学半径**撑大了。肾小球滤过是按大小筛的，撑大了就滤不下去，排不掉。\n\n' +
         '**第二，电荷。**糖链末端带着**唾液酸（sialic acid）**，是负电的。除了进一步增加有效体积，它还**遮住了肝脏上那些负责清除蛋白的受体**（asialoglycoprotein receptor，字面意思就是「去唾液酸糖蛋白受体」——它专抓丢了唾液酸的糖蛋白）。\n\n' +
         '看出来了吗：**这跟胰岛素挂脂肪酸是同一个思路**——把分子做大、让肾滤不掉。手段不同（一个借白蛋白，一个靠糖链），物理目标完全一样。\n\n' +
         'Mircera 更是把这一点挑明了：它不加糖，改**挂 PEG（聚乙二醇）**。PEG 什么生物功能都没有，纯粹是个占地方的大分子。**同一个物理目标，化学手段替代生物手段。**',
      takeaway: '把分子做大 → 肾滤不掉。糖链、PEG、白蛋白，三条路一个目的。'
    },
    {
      q: '这一节的「工程改造对象」跟前面几节不一样，差在哪？',
      a: '差在**你改的东西和你想要的东西之间隔了一层**。\n\n' +
         '胰岛素那一节，你改残基是为了改**蛋白自己的行为**（别聚、挪 pI）。改哪里，哪里就变。\n\n' +
         'EPO 这一节，Darbepoetin 那 5 个突变**本身不干什么**——它们既不参与折叠，也不碰受体。它们唯一的作用是**造出一个信号，让宿主的酶来加糖**。真正起效的是糖，不是突变。\n\n' +
         '换句话说：**你改的是序列，你要的是修饰，中间的执行者是细胞。**这种「借宿主之手」的改造思路，是这一节独有的东西，也是它值得单独当一个案例的原因。',
      takeaway: '突变本身不起效，它只是给宿主下的一道指令。执行者是细胞。'
    }
  ],
  points: [
    { term: 'Size and modification', en: '165 amino acids, highly glycosylated, and glycosylation is critical for activity — not decorative.', cn: '165 个氨基酸，高度糖基化，而且糖基化对活性至关重要——不是可有可无的装饰。' },
    { term: 'Market', en: 'Approximately $12 billion (2019).', cn: '市场规模约 120 亿美元（2019 年）。' },
    { term: 'Darbepoetin (Aranesp)', en: 'Five mutations that create two extra N-linked glycosylation sites, giving extended in vivo half-life.', cn: 'Darbepoetin（Aranesp）：5 个突变，创造出 2 个额外的 N-连接糖基化位点，从而延长体内半衰期。' },
    { term: 'The engineering lesson', en: 'Here the engineering target is not the protein\'s fold or its receptor contact — it is the post-translational modification. You mutate the sequence in order to change what the host attaches to it.', cn: '工程学教训：这里改造的对象既不是蛋白的折叠，也不是受体接触面，而是**翻译后修饰**。你突变序列，是为了改变宿主往上面挂什么。' }
  ],
  beyondPoints: [
    { term: 'Why sugars extend half-life', en: 'N-glycans are bulky and negatively charged because of sialic acid. They increase hydrodynamic radius, which slows glomerular filtration, and they mask the protein from hepatic asialoglycoprotein receptors. Darbepoetin\'s half-life is roughly three times native EPO.', cn: '糖链为什么能延长半衰期：N-糖链体积大，而且因为唾液酸而带负电。它们增大流体力学半径，减慢肾小球滤过；同时把蛋白从肝脏去唾液酸糖蛋白受体面前遮挡起来。Darbepoetin 的半衰期约为天然 EPO 的 3 倍。' },
    { term: 'The E. coli consequence', en: 'Because activity depends on glycosylation, EPO cannot be made in E. coli — prokaryotes do not glycosylate. This is the single clearest example of "the host determines whether your protein works", which is the entire argument of Lecture 3.', cn: '大肠杆菌的后果：因为活性依赖糖基化，EPO **不能**在大肠杆菌中生产——原核生物不做糖基化。这是「宿主决定你的蛋白能不能工作」最清楚的一个例子，而这正是第 3 讲的全部论点。' },
    { term: 'Mircera — the alternative route', en: 'PEGylated EPO, which uses polyethylene glycol instead of sugar chains to increase hydrodynamic radius. Same physical goal, chemical rather than biological means.', cn: 'Mircera——另一条路线：PEG 化的 EPO，用聚乙二醇代替糖链来增大流体力学半径。物理目标相同，但手段是化学的而不是生物的。' }
  ],
  terms: [
    { en: 'Erythropoietin (EPO)', cn: '促红细胞生成素', def_en: 'A 165-residue glycoprotein hormone stimulating red blood cell production; its activity depends on glycosylation.', def_cn: '一种 165 个残基的糖蛋白激素，刺激红细胞生成；其活性依赖糖基化。' },
    { en: 'N-linked glycosylation', cn: 'N-连接糖基化', def_en: 'Attachment of a glycan to the amide nitrogen of an asparagine side chain, installed by the host cell, not by the engineer.', def_cn: '把聚糖连接到天冬酰胺侧链的酰胺氮上，由宿主细胞完成，不是工程师做的。' },
    { en: 'Sialic acid', cn: '唾液酸', def_en: 'A negatively charged terminal sugar on N-glycans; its charge and bulk slow glomerular filtration and mask hepatic clearance receptors.', def_cn: 'N-糖链末端带负电的糖基；它的电荷和体积减慢肾小球滤过，并遮蔽肝脏清除受体。' },
    { en: 'PEGylation', cn: 'PEG 化', def_en: 'Covalent attachment of polyethylene glycol to increase hydrodynamic radius and extend half-life — a chemical alternative to added glycans.', def_cn: '共价连接聚乙二醇以增大流体力学半径、延长半衰期——是增加糖链之外的化学替代方案。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can erythropoietin not be produced in E. coli?',
      q_cn: '为什么促红细胞生成素不能在大肠杆菌中生产？',
      options: ['The gene is too large to fit on a standard bacterial plasmid', 'Its activity requires glycosylation, and prokaryotes do not glycosylate', 'E. coli proteases would degrade it before it could be purified', 'It requires a mammalian-specific signal peptide to be processed'],
      answer: 1,
      why_en: 'Glycosylation is critical for EPO activity and prokaryotes have no glycosylation machinery. This is the clearest case of the host determining whether the protein works.',
      why_cn: '糖基化对 EPO 活性至关重要，而原核生物没有糖基化机器。这是「宿主决定蛋白能否工作」最清楚的例子。' },
    { type: 'mcq',
      q_en: 'What does Darbepoetin\'s set of five mutations actually accomplish?',
      q_cn: 'Darbepoetin 的那 5 个突变实际上做到了什么？',
      options: ['It raises the affinity of the hormone for the EPO receptor about fivefold, one fold per mutation introduced', 'It creates two extra N-linked glycosylation sites, extending in vivo half-life', 'It removes two protease cleavage sites, so the hormone survives longer in serum', 'It shifts the isoelectric point to precipitate at tissue pH'],
      answer: 1,
      optionRefs: { 3: '1-2-1' },
      why_en: 'The mutations do not change the fold or the receptor contact — they create new sequons for the host to glycosylate. The engineering target is the post-translational modification.',
      why_cn: '这些突变既没改折叠，也没改受体接触面——它们创造了新的糖基化序列子供宿主加糖。工程改造的对象是翻译后修饰。' },
    { type: 'mcq',
      q_en: 'By what mechanism do extra N-glycans extend a protein\'s circulating half-life?',
      q_cn: '额外的 N-糖链通过什么机制延长蛋白的循环半衰期？',
      options: ['They stabilise the folded protein against thermal denaturation, so less of it unfolds in plasma', 'Their bulk and charge slow renal filtration and mask clearance receptors', 'They block the EPO receptor so the drug is never internalised', 'They are re-attached enzymatically each time they are cleaved off'],
      answer: 1,
      optionNotes: {
        0: { en: 'This confuses stability in the tube with survival in the bloodstream. Circulating half-life is set by clearance — glomerular filtration plus hepatic clearance receptors — not by thermal unfolding. The proof is PEGylation, which does nothing for the fold and extends half-life just as well.', cn: '这是把「试管里稳不稳」和「在血液里能待多久」搞混了。循环半衰期由清除决定——肾小球滤过，加上肝脏的清除受体——而不是由热变性决定。最好的反证是 PEG 化：它对折叠毫无贡献，却能达到同样的延长效果。' }
      },
      why_en: 'Bulk plus sialic-acid negative charge slows renal filtration; the glycans also hide the protein from hepatic asialoglycoprotein receptors. PEGylation achieves the same physical effect chemically.',
      why_cn: '体积加上唾液酸的负电荷减慢肾脏滤过；糖链还把蛋白从肝脏去唾液酸糖蛋白受体前遮住。PEG 化用化学手段达到同样的物理效果。' },
    { type: 'short',
      q_en: 'Explain why EPO is the course\'s cleanest argument for taking host choice seriously.',
      q_cn: '解释为什么 EPO 是这门课里「必须认真对待宿主选择」最干净的论据。',
      accept: ['glycosylation', 'activity', 'prokaryote', 'E. coli', 'host'],
      answer_en: 'Because EPO\'s activity depends on glycosylation, and glycosylation is installed by the host, not by the engineer. Prokaryotes do not glycosylate at all, so expressing EPO in E. coli gives you a correctly sequenced protein that simply does not work. No amount of downstream purification fixes it. The host is therefore not a convenience choice but a functional requirement — which is the entire argument of Lecture 3.',
      answer_cn: '因为 EPO 的活性依赖糖基化，而糖基化是**宿主**装上去的，不是工程师加的。原核生物完全不做糖基化，所以在大肠杆菌里表达 EPO，你会得到一个序列完全正确、但根本没有活性的蛋白，后续再怎么纯化也救不回来。所以宿主不是「方便与否」的选择，而是**功能上的硬性要求**——这正是第 3 讲的全部论点。' }
  ],
  oral: {
    q_en: 'What does erythropoietin teach about the relationship between host and product?',
    q_cn: '促红细胞生成素在宿主与产物的关系上给了我们什么教训？',
    model_en: 'Erythropoietin is a hundred and sixty-five amino acids and heavily glycosylated, and the crucial fact is that the glycosylation is required for activity — it is not decorative. Darbepoetin, the engineered version, carries five mutations whose only job is to create two additional N-linked glycosylation sites; the half-life roughly triples. The mechanism is physical: N-glycans are bulky and negatively charged because of sialic acid, so they increase hydrodynamic radius and slow glomerular filtration, and they mask the protein from hepatic asialoglycoprotein receptors. Now the consequence for this course. Since glycosylation is installed by the host and prokaryotes do not glycosylate, EPO cannot be produced in E. coli at all. You would get a protein of the correct sequence that does not work, and no purification step would rescue it. That makes host choice a functional requirement rather than a convenience, which is the whole argument of Lecture 3. The alternative route is Mircera, PEGylated EPO, which uses polyethylene glycol to achieve the same increase in hydrodynamic radius chemically.',
    checklist: ['165 aa, heavily glycosylated', 'Glycosylation is required for activity', 'Darbepoetin: five mutations → two extra N-glycosylation sites', 'Mechanism: bulk + sialic acid charge → slower filtration, masked clearance receptors', 'Therefore cannot be made in E. coli — prokaryotes do not glycosylate', 'Host choice is functional, not cosmetic', 'Mircera / PEGylation as the chemical alternative']
  }
},

{
  id: '1-2-3',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.3',
  enTitle: 'Case study — GLP-1 agonists: the current frontier',
  cnTitle: '案例——GLP-1 激动剂：当前的前沿',
  slides: 'L1 s.13–14',
  coverage: 'full',
  coverageNote: 'The slide gives the dosing-interval ladder and the tissue-effects figure. What each modification chemically does is beyond the slides — including that semaglutide contains Aib, a non-proteinogenic residue, which is the forward link to Lectures 7–8.',
  summary: {
    en: 'Native GLP-1 has a half-life of about two minutes, and the drug ladder from two minutes to once-weekly is a case study in stacking half-life tricks. It dies fast for two reasons — DPP-4 cleaves it right after Ala8, and the small peptide is cleared renally — and every drug in the series fixes both. The endpoint of the arc is Orforglipron, approved April 2026: an oral, non-peptide, small-molecule agonist that leaves peptides behind entirely.',
    cn: '天然 GLP-1 的半衰期只有约 2 分钟，而从 2 分钟一路做到一周一次的药物阶梯，正是「半衰期延长手法叠加」的教科书案例。它消失得快有两个原因——DPP-4 在 Ala8 之后切断它，以及小肽被肾脏清除——系列里每个药都同时解决这两点。这条弧线的终点是 2026 年 4 月获批的 Orforglipron：口服、非肽类的小分子激动剂，彻底告别了肽。'
  },
  figures: [
    { src: 'img/glp1-tissue-effects.webp',
      alt: 'Diagram of GLP-1 physiological effects across the brain, kidney, adipose tissue, heart, pancreas, muscle and GI tract',
      caption_en: 'GLP-1 receptors sit on far more tissues than the pancreas — brain (appetite, satiety), heart (cardioprotection), kidney, fat, muscle and gut. That is why GLP-1 agonists affect appetite and gastric emptying, not only insulin secretion. Source: PESB Lecture 1.',
      caption_cn: 'GLP-1 受体分布远不止胰腺——大脑（食欲、饱腹感）、心脏（心脏保护）、肾、脂肪、肌肉和消化道都有。这就是为什么 GLP-1 激动剂影响的不只是胰岛素分泌，还有食欲和胃排空。来源：PESB 第 1 讲。' }
  ],
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.13', src: 'img/figures/L1_s13_1.webp' },
    { slide: 'L1 s.14', src: 'img/figures/L1_s14_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '天然蛋白常常**活性没问题、但活不够久**。蛋白质工程在这里做的事，就是**在不破坏活性的前提下延长半衰期**。\n\n' +
            'exenatide 还多说明一件事：这种改造**有时候不用自己设计，自然界里已经有现成的**。',
  skipIt: '具体药名、半衰期数字、脂肪酸链长度、给药间隔——这些是药代动力学的细节。老师在第 2 讲开头给第 1 讲做 RECAP 时，一个药名都没提。',
  // 解释层：每条都是一个「为什么」，用来把上面那句话和下面 points 里压缩过的
  // 结论拆开。与 points（幻灯片说了什么）和 beyondPoints（幻灯片没说的补充）
  // 分开，这样永远能分清哪句是考点、哪句是为了让你看懂而写的。
  explain: [
    {
      q: 'DPP-4 是个什么东西？',
      trace: {
        what: '一种酶，全名 dipeptidyl peptidase-4。你可以把它想成血液里的**一把剪刀**：它专门在肽链的固定位置剪一刀，把肽剪断、剪失活。',
        from: '它不是为了跟药作对才存在的。人体本来就需要一套机制**让激素信号及时关掉**——信号开着不关，比不开还危险。DPP-4 就是负责关掉 GLP-1 这类信号的。所以它对你有害，只是因为你想让药多留一会儿，而它在做它的本职工作。',
        to: '你在这一节看到的每一个药，本质上都在解决同一个问题：**怎么躲开这把剪刀**。躲的方式不同，就成了不同的药。',
        family: '同类的还有 NEP（中性内肽酶）等等。另外还有一整类糖尿病药叫「DPP-4 抑制剂」（西格列汀那些），走的是相反的思路——不改造 GLP-1，而是**直接把剪刀按住**。',
        numbers: '被它剪过之后，GLP-1 的半衰期只剩**约 2 分钟**。'
      },
      takeaway: 'DPP-4 = 血液里的剪刀。后面所有药都在躲它。'
    },
    {
      q: '为什么天然 GLP-1 明明有用，却做不成药？',
      a: '因为它在体内活不过两分钟——**半衰期只有约 2 分钟**。你打进去，还没来得及起作用就没了。\n\n' +
         '它死得快有**两个**原因，答题时两个都要说，只说一个是不完整的：\n\n' +
         '第一，血液里有一种叫 **DPP-4** 的酶，像一把剪刀，专门在 GLP-1 的第 8 位丙氨酸（Ala8）后面剪一刀，一剪就失活。\n\n' +
         '第二，就算躲过剪刀，GLP-1 是个**很小的肽**，肾脏会直接把它滤出去排掉。\n\n' +
         '记住这两条，下面每一个药你都能自己推出来它在解决什么——因为**它们全都是同时解决这两件事**。',
      takeaway: '一句话：天然 GLP-1 不是不好用，是活不够久。后面所有的药都在跟这两个死法较劲。'
    },
    {
      q: '为什么说艾塞那肽是「找到的」，不是「设计的」？',
      a: '常规的药物开发是这样：科学家先研究清楚人体里的 GLP-1 和 DPP-4 酶，然后像搭积木一样，在实验室里改造出一个新分子去对付它们。**这叫设计。**\n\n' +
         '艾塞那肽（exenatide）不是这么来的。科学家**没有做任何人工改造**。他们是在自然界里找，结果在**希拉毒蜥（Gila monster）的毒液**里发现了一种天然肽，叫 **exendin-4**。它的结构恰好就是人们想要的，于是直接拿来当药用了。\n\n' +
         '所以「找到的」是字面意思：这个分子不是人造的，是蜥蜴自己进化出来的，人类只是发现了它。',
      takeaway: '考点形式：exenatide 就是 exendin-4，天然来源，未经改造。'
    },
    {
      q: '那它凭什么天生就不怕 DPP-4？',
      a: '因为**它的第 2 位是甘氨酸（Gly），不是丙氨酸（Ala）**。\n\n' +
         'DPP-4 这把剪刀认的是特定的位置和特定的残基。人的 GLP-1 在那个位置是 Ala，正好合剪刀的口，所以两分钟就被剪断。毒蜥的 exendin-4 在同一个位置是 Gly——**形状对不上，剪刀咬不住**。\n\n' +
         '结果就是：同样是激动 GLP-1 受体，人的版本撑 2 分钟，蜥蜴的版本能在人体内撑**几个小时**。\n\n' +
         '关键在于，**这个抗剪刀的结构是毒蜥自己进化出来的**，不是科学家用基因工程改出来的。人类想破头要怎么让药不被 DPP-4 破坏，回头一看，蜥蜴的口水里几千万年前就自带了答案。',
      takeaway: '大自然本身就是一个设计库——有时候不用当设计师，当个眼尖的寻找者就够了。'
    },
    {
      q: '为什么同一个位置，一会儿叫「第 8 位」一会儿叫「第 2 位」？',
      a: '这一点是本节最容易把人搞晕的地方，而且它跟生物学无关，**纯粹是编号习惯的问题**。\n\n' +
         'GLP-1 是从一个更长的前体切出来的，成熟的活性形式写作 **GLP-1(7-36)** 或 **GLP-1(7-37)**——也就是说它从前体的第 7 位才开始。\n\n' +
         '于是同一个氨基酸就有了两个名字：按**前体的编号**数是第 8 位，按**成熟肽自己**从头数是第 2 位。**它们指的是同一个残基。**\n\n' +
         '所以你会看到「DPP-4 cleaves after Ala8」和「exendin-4 has Gly at position 2」写在同一页上，讲的其实是同一个位置。看到这种地方先别怀疑自己，先确认它在用哪套编号。',
      takeaway: 'Ala8（前体编号）= position 2（成熟肽编号）。同一个位置，两种数法。'
    },
    {
      q: '利拉鲁肽和司美格鲁肽又是怎么撑更久的？',
      a: '如果说 exenatide 是「换个不怕剪刀的骨架」，那这两个走的是另一条路：**挂个大东西上去，让肾脏滤不掉、也让剪刀不好下手**。\n\n' +
         '**利拉鲁肽（Liraglutide）**：把第 34 位的 Lys 换成 Arg，然后在第 26 位的 Lys 上、通过一个 γGlu 连接臂挂一条 **C16 棕榈酸**。这条脂肪酸链会去结合血液里的**白蛋白**——白蛋白是个大分子，肾脏滤不出去。药物就这样「搭便车」留在体内，半衰期约 **13 小时**，一天打一次。\n\n' +
         '**司美格鲁肽（Semaglutide）**：三个改动叠在一起。第一，把 Ala8 换成 **Aib**（一种非天然氨基酸），直接用位阻把 DPP-4 挡住；第二，Lys34→Arg；第三，挂一条更长的 **C18 二元脂肪酸**，连接臂也更长（γGlu-2×OEG）。三招叠加，半衰期约 **160 小时**——**一周打一次**。\n\n' +
         '看出规律了吗：**抗酶 + 抗肾清除，两件事一起做，做得越彻底，间隔越长。**',
      takeaway: 'exenatide 靠天然骨架，liraglutide 和 semaglutide 靠脂肪酸结合白蛋白。目标都是同两件事。'
    },
    {
      q: 'Aib 又是什么？为什么它值得单独记一笔？',
      trace: {
        what: '一个氨基酸的缩写，全名 α-aminoisobutyric acid（α-氨基异丁酸）。关键性质：**它不是那 20 种标准氨基酸之一**。',
        from: '不是天然蛋白里的成分，是化学家合成出来的。用它是因为它比丙氨酸多一个甲基，**多出来的那块把 DPP-4 这把剪刀挡住了**——纯粹是形状上挡路。',
        to: '这是本课最重要的一根线：**Aib 没法用基因编码**，细胞的翻译机器只认那 20 种。所以司美格鲁肽只能靠化学合成，不能靠细胞表达。而**第 7–8 讲整整两讲，讲的就是怎么改造翻译机器让它能装非天然氨基酸**。看到 Aib 就该想到第 7–8 讲。',
        family: '「非天然氨基酸」（non-canonical amino acid，ncAA）这一大类里的一个。这一类在第 7–8 讲会正式登场。'
      },
      a: '为什么这一点值得单独记：因为 **Aib 没法用基因编码**。\n\n' +
         '细胞里的翻译机器只认那 20 种标准氨基酸，Aib 不在其中。**所以司美格鲁肽不能靠细胞表达出来，只能用化学方法一步步合成。**\n\n' +
         '这一点是整门课里最漂亮的一个前后呼应：**第 7–8 讲的遗传密码重编程，讲的就是怎么突破这个限制**——怎么改造翻译机器，让它能把非天然氨基酸装进蛋白里。\n\n' +
         '换句话说，司美格鲁肽是「现在还做不到、所以只能用化学硬造」的活例子，而第 7–8 讲告诉你人类正在怎么把它变成「以后可以生物合成」。口试里能把这条线串起来，比单独背哪个药是几小时值钱得多。',
      takeaway: 'Aib 不可编码 → 只能化学合成 → 这正是第 7–8 讲要解决的问题。'
    },
    {
      q: '为什么这类药会影响食欲，而不只是降血糖？',
      a: '因为 **GLP-1 受体根本不只长在胰腺上**。\n\n' +
         '大脑、心脏、肾脏、脂肪、肌肉、消化道——全都有。所以当你激动 GLP-1 受体时，你不是只在对胰腺说话，你是在同时对这一整套器官说话。\n\n' +
         '大脑上的受体管**食欲和饱腹感**，消化道上的受体让**胃排空变慢**。这就是为什么同一个药既是降糖药（Ozempic）又是减重药（Wegovy）——**同一个分子，同一个受体，只是看你盯着哪个器官的效果**。\n\n' +
         '这也解释了为什么心血管获益会出现在这类药的临床数据里：心脏上本来就有受体。',
      takeaway: '受体分布决定副作用，也决定适应症。看到「为什么会影响 X」，先问「X 上有没有受体」。'
    }
  ],
  points: [
    { term: 'Native GLP-1', en: 'Half-life of approximately 2 minutes. Useless as a drug in its own right.', cn: '天然 GLP-1：半衰期约 2 分钟。作为药物本身完全没法用。' },
    { term: 'Exenatide', en: 'Dosing interval 2 hours, extended to 2 weeks in an extended-release formulation.', cn: 'Exenatide：给药间隔 2 小时，缓释制剂可延长到 2 周。' },
    { term: 'Liraglutide', en: 'Victoza / Saxenda — once daily.', cn: 'Liraglutide（Victoza / Saxenda）：每日一次。' },
    { term: 'Semaglutide', en: 'Ozempic / Wegovy — once every 7 days.', cn: 'Semaglutide（Ozempic / Wegovy）：每 7 天一次。' },
    { term: 'Tissue distribution', en: 'GLP-1 receptors are present far beyond the pancreas — brain, heart, kidney, adipose, muscle and gut — which is why these drugs affect appetite and gastric emptying, not just insulin secretion.', cn: '组织分布：GLP-1 受体远不止在胰腺——大脑、心脏、肾、脂肪、肌肉、消化道都有。这就是这类药物不只影响胰岛素分泌，还影响食欲和胃排空的原因。' }
  ],
  beyondPoints: [
    { term: 'Two death mechanisms', en: 'Native GLP-1 dies fast for two reasons and a good answer names both: DPP-4 cleaves it right after Ala8, and renal clearance removes the small peptide. Every drug below fixes both.', cn: '两条消亡途径：天然 GLP-1 消失快有两个原因，好的回答必须都说到——DPP-4 在 Ala8 之后把它切断，以及肾脏清除这个小肽。下面每个药都同时解决这两点。' },
    { term: 'Exenatide — found, not designed', en: 'Exenatide is exendin-4, a natural peptide from Gila monster venom that happens to carry Gly at position 2 and is therefore naturally DPP-4 resistant. Not engineered — found. A useful reminder that nature is a design library.', cn: 'Exenatide——是找到的，不是设计的：Exenatide 就是 exendin-4，来自希拉毒蜥毒液的天然肽，恰好第 2 位是 Gly，因而天然抗 DPP-4。不是工程改造出来的，是**找到的**。提醒我们大自然本身就是一个设计库。' },
    { term: 'Liraglutide', en: 'Lys34→Arg plus palmitic acid (C16) on Lys26 via a γGlu spacer → albumin binding → about 13 hours.', cn: 'Liraglutide：Lys34→Arg，再通过 γGlu 连接臂在 Lys26 上挂棕榈酸（C16）→ 结合白蛋白 → 半衰期约 13 小时。' },
    { term: 'Semaglutide — three changes stacked', en: 'Ala8 → Aib (α-aminoisobutyric acid, a non-proteinogenic residue that sterically blocks DPP-4), Lys34 → Arg, and a C18 fatty diacid on Lys26 via a γGlu-2×OEG linker. Half-life about 160 hours, hence once weekly.', cn: 'Semaglutide——三重改动叠加：Ala8 → Aib（α-氨基异丁酸，一个**非蛋白源**残基，从空间上阻断 DPP-4）、Lys34 → Arg、以及通过 γGlu-2×OEG 连接臂在 Lys26 上挂 C18 脂肪二酸。半衰期约 160 小时，所以能做到一周一次。' },
    { term: 'The Aib forward reference', en: 'Aib cannot be encoded genetically, so semaglutide is a chemically synthesised peptide. Lectures 7–8 on genetic code reprogramming are precisely about removing that limitation — this is the cleanest motivating example for that whole batch.', cn: 'Aib 这个前向伏笔：Aib **无法被基因编码**，所以 semaglutide 是化学合成的肽。第 7–8 讲的遗传密码重编程正是为了打破这个限制——这是那一批内容最好的动机示例。' },
    { term: 'Tirzepatide', en: 'Mounjaro / Zepbound — a dual GIP + GLP-1 receptor agonist, C20 diacid, roughly 5-day half-life.', cn: 'Tirzepatide（Mounjaro / Zepbound）：GIP + GLP-1 双受体激动剂，C20 二酸，半衰期约 5 天。' },
    { term: 'Retatrutide', en: 'A triple agonist at GLP-1, GIP and glucagon receptors, built on a GIP backbone with Aib at positions 2 and 20 and α-methyl-Leu at 13.', cn: 'Retatrutide：GLP-1 + GIP + 胰高血糖素三受体激动剂，以 GIP 骨架为基础，第 2 和 20 位是 Aib，第 13 位是 α-甲基亮氨酸。' },
    { term: 'Orforglipron', en: 'Approved April 2026 — the first oral, non-peptide, small-molecule GLP-1 receptor agonist. The endpoint of the arc: once you understand the pharmacophore well enough, you can leave peptides behind entirely.', cn: 'Orforglipron：2026 年 4 月获批——第一个口服、非肽类的小分子 GLP-1 受体激动剂。这条弧线的终点：一旦你把药效团理解得足够透彻，就可以彻底不用肽了。' }
  ],
  terms: [
    { en: 'GLP-1', cn: '胰高血糖素样肽-1', def_en: 'An incretin peptide hormone with a native half-life of about 2 minutes; its receptor is present on brain, heart, kidney, fat, muscle and gut as well as pancreas.', def_cn: '一种肠促胰素肽类激素，天然半衰期约 2 分钟；其受体分布于大脑、心脏、肾、脂肪、肌肉、消化道以及胰腺。' },
    { en: 'DPP-4', cn: '二肽基肽酶-4', def_en: 'The protease that cleaves GLP-1 immediately after Ala8. Every GLP-1 drug is designed to resist it.', def_cn: '在 Ala8 之后立刻切断 GLP-1 的蛋白酶。每个 GLP-1 类药物都是为抵抗它而设计的。' },
    { en: 'Aib (α-aminoisobutyric acid)', cn: 'α-氨基异丁酸', def_en: 'A non-proteinogenic residue used at position 8 of semaglutide to block DPP-4 sterically. It cannot be genetically encoded, so the peptide must be chemically synthesised.', def_cn: '一种非蛋白源残基，用在 semaglutide 第 8 位以空间位阻方式阻断 DPP-4。它无法被基因编码，所以这条肽必须化学合成。' },
    { en: 'Exendin-4', cn: '艾塞那肽-4', def_en: 'A natural Gila monster venom peptide with Gly at position 2, making it inherently DPP-4 resistant. Marketed as exenatide — found in nature, not engineered.', def_cn: '来自希拉毒蜥毒液的天然肽，第 2 位是 Gly，因而天生抗 DPP-4。商品名 exenatide——是在自然界找到的，不是设计出来的。' },
    { en: 'Incretin', cn: '肠促胰素', def_en: 'A gut hormone that potentiates insulin secretion in response to food. GLP-1 and GIP are the two principal ones.', def_cn: '进食后增强胰岛素分泌的肠道激素。GLP-1 和 GIP 是两个主要的。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Native GLP-1 has a half-life of ~2 minutes for two reasons. What are they?',
      q_cn: '天然 GLP-1 半衰期只有约 2 分钟，有两个原因。是哪两个？',
      options: ['Thermal denaturation and aggregation of the peptide at body temperature', 'DPP-4 cleavage after Ala8, and renal clearance of the small peptide', 'Hepatic first-pass metabolism and clearance by receptor-mediated internalisation', 'Disulfide scrambling and deamidation'],
      answer: 1,
      why_en: 'Both must be named for a complete answer — DPP-4 proteolysis and renal clearance. Every drug in the series fixes both, which is why they stack modifications.',
      why_cn: '完整回答必须两个都说到——DPP-4 蛋白水解和肾脏清除。系列里每个药都同时解决这两点，所以才要叠加多重修饰。' },
    { type: 'mcq',
      q_en: 'What is unusual about exenatide compared with the other GLP-1 drugs?',
      q_cn: '与其他 GLP-1 药物相比，exenatide 特别在哪里？',
      options: ['The only one in the series given orally rather than by injection', 'A natural peptide from Gila monster venom rather than an engineered one', 'The only one carrying a fatty acid modification for albumin binding', 'A non-peptide small molecule rather than a peptide analogue'],
      answer: 1,
      optionNotes: {
        0: { en: 'Exenatide is injected. The oral member of the series is Orforglipron, a non-peptide small molecule — the confusion is between the drug that was found in venom and the drug that stopped being a peptide.', cn: 'Exenatide 是注射给药的。这一系列里口服的那个是 Orforglipron，一个非肽类小分子——混淆点在于「从毒液里找到的那个药」和「干脆不再是肽的那个药」。' },
        2: { en: 'The fatty-acid trick belongs to Liraglutide (C16 palmitate) and Semaglutide (C18 diacid), which use it to bind albumin. Exenatide carries no fatty acid at all — it resists DPP-4 because its natural sequence happens to have Gly at position 2.', cn: '挂脂肪酸是 Liraglutide（C16 棕榈酸）和 Semaglutide（C18 二酸）的手法，目的是结合白蛋白。Exenatide 身上根本没有脂肪酸，它能扛住 DPP-4，靠的是天然序列第 2 位恰好是 Gly。' }
      },
      why_en: 'Exenatide is exendin-4, which happens to carry Gly at position 2. It was found, not engineered — a reminder that nature is a design library. Orforglipron is the oral small molecule.',
      why_cn: 'Exenatide 就是 exendin-4，恰好第 2 位是 Gly。它是被**找到**的，不是设计的——提醒我们自然界本身就是设计库。口服小分子是 Orforglipron。' },
    { type: 'mcq',
      q_en: 'Why must semaglutide be chemically synthesised rather than produced recombinantly?',
      q_cn: '为什么 semaglutide 必须化学合成而不能重组生产？',
      options: ['Its C18 fatty-acid chain is too long for a living host cell to tolerate', 'It contains Aib at position 8, a non-proteinogenic residue that cannot be genetically encoded', 'Recombinant production in a host cell would glycosylate the peptide incorrectly', 'The peptide is only 31 residues, which is too short for ribosomal synthesis'],
      answer: 1,
      optionRefs: { 2: '2-25' },
      why_en: 'Aib is not one of the twenty canonical amino acids and has no codon. Removing exactly this limitation is what genetic code reprogramming in Lectures 7–8 is for.',
      why_cn: 'Aib 不属于 20 种标准氨基酸，没有对应的密码子。第 7–8 讲的遗传密码重编程要打破的正是这个限制。' },
    { type: 'short',
      q_en: 'Trace the arc from native GLP-1 to Orforglipron, naming what each step solved.',
      q_cn: '梳理从天然 GLP-1 到 Orforglipron 的发展弧线，说明每一步解决了什么。',
      accept: ['2 minutes', 'DPP-4', 'exenatide', 'fatty acid', 'albumin', 'Aib', 'semaglutide', 'oral', 'small molecule'],
      answer_en: 'Native GLP-1 lasts two minutes because DPP-4 cleaves after Ala8 and the kidney clears the small peptide. Exenatide, found in Gila monster venom, is naturally DPP-4 resistant thanks to a glycine at position two. Liraglutide adds a palmitic acid so it binds albumin, reaching about thirteen hours. Semaglutide stacks three changes — Aib at position eight to block DPP-4 sterically, Lys34 to Arg, and a C18 diacid — reaching a hundred and sixty hours, so weekly dosing. Tirzepatide adds a second receptor, GIP. Orforglipron, approved April twenty twenty-six, abandons the peptide entirely: an oral small-molecule agonist. The arc runs from patching a peptide\'s weaknesses to not needing the peptide at all.',
      answer_cn: '天然 GLP-1 只有 2 分钟，因为 DPP-4 在 Ala8 后切断它、肾脏又清除这个小肽。Exenatide 来自希拉毒蜥毒液，靠第 2 位的甘氨酸天然抗 DPP-4。Liraglutide 挂上棕榈酸结合白蛋白，达到约 13 小时。Semaglutide 叠加三重改动——第 8 位 Aib 空间阻断 DPP-4、Lys34→Arg、C18 二酸——达到 160 小时，一周一次。Tirzepatide 再加上第二个受体 GIP。2026 年 4 月获批的 Orforglipron 干脆抛弃了肽：口服小分子激动剂。整条弧线是从「修补一条肽的弱点」走到「根本不需要这条肽」。' }
  ],
  oral: {
    q_en: 'Walk me through the GLP-1 agonist series and what each modification achieves.',
    q_cn: '讲一遍 GLP-1 激动剂系列，以及每一处修饰达到了什么效果。',
    model_en: 'Native GLP-1 has a half-life of about two minutes, and it dies fast for two reasons: DPP-4 cleaves it immediately after alanine eight, and the kidney clears the small peptide. Every drug in the series has to fix both. Exenatide is interesting because it was not engineered at all — it is exendin-four from Gila monster venom, which happens to have glycine at position two and is therefore naturally DPP-4 resistant. Liraglutide changes lysine thirty-four to arginine and attaches palmitic acid to lysine twenty-six through a gamma-glutamate spacer, so it binds albumin and lasts about thirteen hours. Semaglutide stacks three changes: alanine eight becomes Aib, a non-proteinogenic residue that blocks DPP-4 sterically; lysine thirty-four becomes arginine; and a C18 fatty diacid goes onto lysine twenty-six through a longer linker. That gives a hundred and sixty hours, so weekly dosing. Worth noting that Aib cannot be genetically encoded, so semaglutide is chemically synthesised — removing exactly that limitation is what Lectures seven and eight are about. Tirzepatide adds a second receptor, GIP, and retatrutide a third, glucagon. The endpoint is Orforglipron, approved April twenty twenty-six, an oral non-peptide small molecule — once the pharmacophore is understood well enough, the peptide is no longer needed.',
    checklist: ['Native half-life ~2 min', 'Two death mechanisms: DPP-4 after Ala8, and renal clearance', 'Exenatide — found in venom, not engineered', 'Liraglutide — palmitic acid, albumin binding, ~13 h', 'Semaglutide — Aib + Arg + C18 diacid, ~160 h', 'Aib cannot be genetically encoded → chemical synthesis → forward link to Lec 7–8', 'Tirzepatide dual, retatrutide triple agonist', 'Orforglipron — oral small molecule, April 2026']
  }
},

{
  id: '1-2-4',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.4',
  enTitle: 'Case study — industrial enzymes and the laundry industry',
  cnTitle: '案例——工业酶与洗涤剂产业',
  slides: 'L1 s.15–16',
  coverage: 'full',
  coverageNote: 'The enzyme-class table and the four improvement targets are on the slides. The subtilisin Met222 example is beyond the slides but is the single most-cited case of rational design in the literature, and it connects directly to Lecture 9.',
  summary: {
    en: 'More than half of all industrial enzymes sold globally go into detergents, which makes laundry the largest single application of protein engineering. Proteases, lipases, amylases and cellulases each remove a different stain class, and the four engineering targets are cold activity, alkaline stability, oxidation resistance and reduced autolysis. The textbook case is subtilisin Met222→Ala: one residue, one site-directed mutation, a billion-dollar problem solved.',
    cn: '全球工业酶销量的一半以上进了洗涤剂，这让洗衣成为蛋白质工程最大的单一应用领域。蛋白酶、脂肪酶、淀粉酶、纤维素酶各自去除一类污渍，四个工程改造目标是：低温活性、碱性稳定性、抗氧化、降低自溶。教科书级案例是枯草杆菌蛋白酶的 Met222→Ala：一个残基、一次定点突变，解决一个十亿美元级的问题。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.15', src: 'img/figures/L1_s15_1.webp' },
    { slide: 'L1 s.16', src: 'img/figures/L1_s16_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '蛋白质工程最大的单一应用不是药，是**洗衣粉**——全球工业酶一半以上进了洗涤剂。\n\n' +
            '而这一节真正的考点是 **subtilisin Met222→Ala**：知道该改哪个残基时，一次定点突变就够了。**不知道该改哪里的时候怎么办，是第 9 讲。**',
  skipIt: '四类酶各去哪种污渍（蛋白酶去血渍、脂肪酶去油…）属于对号入座，看一遍就记得，不用专门背。这是判断，不是老师的话——第 1 讲的 RECAP 里没有提到任何一个案例。',
  explain: [
    {
      q: '为什么四个改造目标是**那**四个？',
      a: '因为它们不是从酶学里推出来的，是**从洗衣机里推出来的**。每一个都对应洗涤环境里的一种折磨：\n\n' +
         '**低温活性**——为省电，大家改用 20–30 °C 洗。但酶的活性本来就随温度下降，细菌里那些酶是按体温调好的。要在冷水里干活，得改。\n\n' +
         '**碱性稳定性**——洗涤剂的 pH 是 9–10，比酶习惯的中性环境碱得多，蛋白在那里容易变性。\n\n' +
         '**抗氧化**——洗涤剂里有漂白剂和过氧化物。它们的工作就是氧化东西，而酶也是东西。\n\n' +
         '**降低自溶**——见下一条。\n\n' +
         '**这才是「应用驱动的蛋白质工程」的真正样子**：目标不是「让酶更好」，而是「让酶能在这个具体的地狱里活下来」。换一个应用场景，四个目标就换一批。',
      takeaway: '四个目标 = 洗涤环境的四种折磨。先想环境，再想改造。'
    },
    {
      q: '「自溶（autolysis）」——酶怎么会把自己吃了？',
      a: '因为**蛋白酶自己也是蛋白**。\n\n' +
         '蛋白酶的工作是剪断蛋白质。它不认识「自己人」，它只认底物上的特征。而它旁边那些同类分子，恰好就长着这种特征。\n\n' +
         '所以浓度一高，一锅蛋白酶就开始**互相剪**。这在洗衣粉里是实打实的损失：产品放在货架上，酶自己就慢慢没了。\n\n' +
         '怎么改？两条路：**把表面容易被咬的环（loop）变硬**，让它塞不进别人的活性口袋；或者**直接删掉最容易被剪的那几个位点**。\n\n' +
         '顺带记一句：这也是为什么实验室里配蛋白酶溶液常常要低温、要稀——同一个道理。',
      takeaway: '蛋白酶是自己的底物。浓度越高，自己吃自己越快。'
    },
    {
      q: 'Met222 这个案例凭什么被反复引用？',
      a: '因为它把**理性设计（rational design）**这件事讲得干干净净：一个残基，一次突变，一个十亿美元级的问题。\n\n' +
         '链条是这样的：漂白剂会**氧化甲硫氨酸（Met）**，把它变成**甲硫氨酸亚砜（methionine sulfoxide）**——多一个氧，体积变大、极性变了。\n\n' +
         '而这个 Met222 **就贴在催化用的丝氨酸旁边**。旁边的残基一变形，活性中心就被顶坏了，酶就死了。\n\n' +
         '解法一眼可见：**把它换成一个不能被氧化的残基**。Ala 或 Ser 都行，它们没有那个能被氧化的硫。换完，酶就不怕漂白剂了。\n\n' +
         '注意这里面**每一步都是先知道原因、再动手**——知道是氧化、知道氧化的是哪个残基、知道为什么那个残基要紧。这就叫理性设计。',
      takeaway: 'Met 的硫会被漂白剂氧化 → 它又紧挨着催化位点 → 换掉它。因果链完整。'
    },
    {
      q: '那要是不知道该改哪个残基呢？',
      a: '**这个问题就是第 9 讲。**\n\n' +
         'Met222 是一个幸运案例：机理清楚、位置明确、解法唯一。但绝大多数时候你面对的是「这个酶在冷水里不太行」——**没有哪一个残基写着「问题在我」**。\n\n' +
         '这时候唯一的办法是反过来：**先随机造出一大堆变体（library），再想办法把好的挑出来（screen / select）**。不靠理解，靠数量和筛选。\n\n' +
         '这条岔路——**知道该改哪里 vs 不知道该改哪里**——是整个蛋白质工程的分水岭，也是第 9 讲的全部内容。现在看到 Met222，就该知道它站在岔路的哪一边。',
      takeaway: '知道改哪里 → 理性设计（本节）。不知道 → 建库筛选（第 9 讲）。'
    }
  ],
  points: [
    { term: 'Market share', en: 'More than 50% of all industrial enzymes sold globally go into detergents. They enable low-temperature washing (energy saving) and fabric care.', cn: '市场份额：全球工业酶销量的 50% 以上用于洗涤剂。它们使低温洗涤（节能）和织物护理成为可能。' },
    { term: 'Proteases', en: 'Remove protein stains — blood, sweat, grass, food.', cn: '蛋白酶：去除蛋白类污渍——血渍、汗渍、草渍、食物渍。' },
    { term: 'Lipases', en: 'Remove fats and oils — butter, cosmetics.', cn: '脂肪酶：去除油脂——黄油、化妆品。' },
    { term: 'Amylases', en: 'Remove starch stains — pasta, rice, sauces.', cn: '淀粉酶：去除淀粉类污渍——意面、米饭、酱汁。' },
    { term: 'Cellulases', en: '"Renew" cotton by removing fuzz and greying.', cn: '纤维素酶：通过去除起球和灰化来「翻新」棉织物。' },
    { term: 'Peroxidases', en: 'Bleach boosters — less common today.', cn: '过氧化物酶：漂白增效剂——现在用得较少。' },
    { term: 'Improvement 1 — cold activity', en: 'Active at 20–30 °C for eco-friendly washing.', cn: '改进方向一——低温活性：在 20–30 °C 下有活性，实现环保洗涤。' },
    { term: 'Improvement 2 — alkaline stability', en: 'Survive detergent pH 9–10.', cn: '改进方向二——碱性稳定：在洗涤剂 pH 9–10 的环境下存活。' },
    { term: 'Improvement 3 — oxidation resistance', en: 'Survive bleach and peroxide.', cn: '改进方向三——抗氧化：在漂白剂和过氧化物中存活。' },
    { term: 'Improvement 4 — reduced autolysis', en: 'Mutations that stop proteases digesting themselves.', cn: '改进方向四——降低自溶：通过突变阻止蛋白酶消化自己。' }
  ],
  beyondPoints: [
    { term: 'Subtilisin Met222', en: 'The classic case is subtilisin from Bacillus. Its Met222, right next to the catalytic serine, is oxidised by bleach to methionine sulfoxide, which kills activity. Replacing it — Met222 → Ala, or Ser — gives a bleach-stable protease. One residue, one site-directed mutation, a billion-dollar industrial problem solved. It is one of the earliest and most-cited successes of rational site-directed mutagenesis.', cn: '枯草杆菌蛋白酶 Met222：经典案例是来自芽孢杆菌的 subtilisin。催化丝氨酸旁边的 Met222 会被漂白剂氧化成甲硫氨酸亚砜，酶活直接归零。把它换成 Ala 或 Ser（不可被氧化的残基）就得到耐漂白的蛋白酶——一个残基、一次定点突变，解决一个十亿美元级的工业问题。这是「理性定点突变」最早也最常被引用的成功案例之一。' },
    { term: 'Why it connects to Lecture 9', en: 'Met222 is the case where you already know which residue to change — rational design. When you do not know where to change, you must build a library and screen it. That fork is the whole subject of Lecture 9.', cn: '为什么它连着第 9 讲：Met222 属于「你已经知道该改哪里」的**理性设计**。而不知道该改哪里的时候，才必须建库并筛选。这个分岔正是第 9 讲的全部主题。' },
    { term: 'Autolysis explained', en: 'A protease in solution is itself a protein, so it is its own substrate — at high concentration the molecules digest each other. Engineering usually stiffens surface loops or removes the most accessible cleavage sites.', cn: '自溶的解释：蛋白酶自己就是蛋白，所以它**同时是自己的底物**——浓度一高就互相降解。工程手段通常是加固表面柔性环区，或者去掉最暴露的切割位点。' }
  ],
  terms: [
    { en: 'Subtilisin', cn: '枯草杆菌蛋白酶', def_en: 'A serine protease from Bacillus, the workhorse detergent enzyme and the textbook target of rational site-directed mutagenesis.', def_cn: '来自芽孢杆菌的丝氨酸蛋白酶，洗涤剂酶的主力，也是理性定点突变的教科书靶点。' },
    { en: 'Autolysis', cn: '自溶', def_en: 'A protease digesting itself or other copies of itself, because a protease is also a protein and therefore its own substrate.', def_cn: '蛋白酶消化自己或同类分子，因为蛋白酶本身也是蛋白，所以是自己的底物。' },
    { en: 'Methionine sulfoxide', cn: '甲硫氨酸亚砜', def_en: 'The oxidised form of methionine. Oxidation of Met222 next to subtilisin\'s catalytic serine abolishes activity — the reason bleach-stable variants replace it.', def_cn: '甲硫氨酸的氧化形式。枯草杆菌蛋白酶催化丝氨酸旁的 Met222 被氧化后酶活丧失——这就是耐漂白变体要替换它的原因。' },
    { en: 'Rational design', cn: '理性设计', def_en: 'Making a specific, hypothesis-driven mutation because you already know which residue matters — as opposed to building a library and screening.', def_cn: '因为已经知道哪个残基关键，而做出特定的、假设驱动的突变——与「建库筛选」相对。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What fraction of industrial enzymes sold globally goes into detergents?',
      q_cn: '全球工业酶销量中有多大比例用于洗涤剂？',
      options: ['About 10%', 'About 25%', 'More than 50%', 'Less than 5%'],
      answer: 2,
      why_en: 'More than half. Laundry is the largest single application of industrial protein engineering.',
      why_cn: '超过一半。洗衣是工业蛋白质工程最大的单一应用领域。' },
    { type: 'mcq',
      q_en: 'Why does replacing Met222 with Ala make subtilisin bleach-stable?',
      q_cn: '为什么把 Met222 换成 Ala 能让枯草杆菌蛋白酶耐漂白？',
      options: ['Alanine is smaller, so the active site is left more open to substrate', 'Methionine beside the catalytic serine is oxidised by bleach; alanine is not', 'Alanine raises the thermal stability of the enzyme at wash temperature', 'It deletes a cleavage site that other protease molecules attack'],
      answer: 1,
      optionNotes: {
        0: { en: 'This reads the substitution as a steric change when the problem is chemical. Met222 is replaced because its sulfur is oxidised by bleach to the sulfoxide; Ala or Ser both work, and what they share is not being small but having nothing left to oxidise.', cn: '这是把一次替换读成了体积问题，但问题出在化学上。换掉 Met222 是因为它的硫会被漂白剂氧化成 sulfoxide；Ala 和 Ser 都能用，它们的共同点不是「小」，而是「没有可以被氧化的基团」。' }
      },
      why_en: 'The problem is chemical oxidation of a specific residue adjacent to the catalytic serine. Swapping in a non-oxidisable residue removes the vulnerability entirely.',
      why_cn: '问题在于催化丝氨酸旁边那个特定残基会被化学氧化。换成不可被氧化的残基就彻底消除了这个弱点。' },
    { type: 'mcq',
      q_en: 'Why do detergent proteases need engineering against autolysis?',
      q_cn: '为什么洗涤剂中的蛋白酶需要针对自溶做改造？',
      options: ['The surfactants in the detergent cleave the enzyme backbone', 'A protease is a protein, so protease molecules digest one another', 'The alkaline wash pH hydrolyses the peptide backbone on its own', 'Bleach in the formulation fragments the polypeptide chain'],
      answer: 1,
      optionNotes: {
        3: { en: 'This merges two of the four improvement targets. Bleach attacks side chains by oxidation — Met222 to the sulfoxide — it does not cut the backbone. The only thing breaking peptide bonds in the bottle is the protease itself, which is what autolysis means.', cn: '这是把四个改造目标里的两个搅在了一起。漂白剂的破坏方式是氧化侧链——把 Met222 变成 sulfoxide——它并不切断主链。在瓶子里真正切断肽键的只有蛋白酶自己，这才是 autolysis 的含义。' }
      },
      why_en: 'Self-digestion is intrinsic: any protease in concentrated solution attacks other copies of itself. Fixes stiffen surface loops or remove exposed cleavage sites.',
      why_cn: '自我消化是内在的：任何蛋白酶在高浓度溶液中都会攻击同类分子。解决办法是加固表面环区或去掉暴露的切割位点。' },
    { type: 'short',
      q_en: 'List the four engineering improvements sought in detergent enzymes and the wash condition each addresses.',
      q_cn: '列出洗涤剂酶追求的四项工程改进，以及每一项针对的洗涤条件。',
      accept: ['cold', 'alkaline', 'oxidation', 'autolysis', 'pH', 'bleach'],
      answer_en: 'Cold activity, so the enzyme works at twenty to thirty degrees for energy-saving washing. Alkaline stability, because detergents sit at pH nine to ten. Oxidation resistance, to survive bleach and peroxide. And reduced autolysis, so the protease does not digest itself in the bottle or the wash.',
      answer_cn: '低温活性——让酶在 20–30 °C 下工作，实现节能洗涤；碱性稳定性——因为洗涤剂的 pH 在 9–10；抗氧化——在漂白剂和过氧化物中存活；降低自溶——让蛋白酶不会在瓶子里或洗涤过程中消化掉自己。' }
  ],
  oral: {
    q_en: 'Why are industrial enzymes a good illustration of protein engineering, and what is the textbook example?',
    q_cn: '为什么工业酶是蛋白质工程的好例子？教科书级的案例是什么？',
    model_en: 'Because it is the largest application by volume — more than half of all industrial enzymes sold worldwide go into detergents. Each enzyme class handles a stain class: proteases for blood, sweat, grass and food; lipases for fats and oils; amylases for starch; cellulases to renew cotton by removing fuzz. The engineering targets follow directly from the wash conditions. Cold activity, so the enzyme still works at twenty to thirty degrees and you save energy. Alkaline stability, because detergent is at pH nine to ten. Oxidation resistance, because of bleach. And reduced autolysis, because a protease is itself a protein and therefore its own substrate. The textbook example is subtilisin from Bacillus. Its methionine two-two-two sits right next to the catalytic serine, and bleach oxidises it to methionine sulfoxide, which kills activity. Replacing it with alanine or serine, which cannot be oxidised, gives a bleach-stable protease. One residue, one site-directed mutation, a billion-dollar industrial problem solved. It matters for Lecture nine too, because it is the case where you already know which residue to change — that is rational design, as opposed to building a library when you do not know.',
    checklist: ['>50% of industrial enzymes go to detergents', 'Four enzyme classes and their stain types', 'Four improvement targets tied to wash conditions', 'Subtilisin Met222 next to the catalytic serine', 'Bleach oxidises it to the sulfoxide, killing activity', 'Met222 → Ala or Ser, non-oxidisable', 'Autolysis: a protease is its own substrate', 'Rational design vs library screening — forward link to Lec 9']
  }
},

{
  id: '1-2-5',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.5',
  enTitle: 'Case study — vaccines and monoclonal antibodies',
  cnTitle: '案例——疫苗与单克隆抗体',
  slides: 'L1 s.17–19',
  coverage: 'full',
  coverageNote: 'The vaccine-platform figure and the mAb application list are on the slides. The naming convention, the HAMA rationale and the prefusion-stabilised spike are beyond the slides — the naming suffixes in particular are the kind of detail examiners like.',
  summary: {
    en: 'Four platforms answered the same COVID question — how do you show the immune system a spike protein without an active infection: mRNA-LNP, adenovirus vector, recombinant protein, and inactivated virus. On the antibody side, the traditional hybridoma route gives murine antibodies that must be humanised before therapeutic use, and the drug-name suffix tells you exactly how far that humanisation went. The protein-engineering landmark is the prefusion-stabilised "2P" spike.',
    cn: '四种平台回答了同一个新冠问题——如何在没有活动性感染的情况下把刺突蛋白展示给免疫系统：mRNA-脂质纳米颗粒、腺病毒载体、重组蛋白、灭活病毒。抗体这一侧，传统杂交瘤路线得到的是鼠源抗体，治疗用之前必须人源化，而药名后缀正好告诉你人源化到了哪一步。蛋白质工程的里程碑是「2P」前融合稳定化刺突。'
  },
  figures: [
    { src: 'img/vaccine-platforms.webp',
      alt: 'Diagram of four COVID-19 vaccine platforms: mRNA-LNP, adenovirus vector, recombinant protein, and inactivated virus',
      caption_en: 'The four platforms used for COVID-19 vaccines side by side: mRNA-LNP (Moderna/Pfizer — a lipid nanoparticle carrying mRNA for the spike protein), adenovirus vector (AstraZeneca/Sputnik V — a viral shell carrying spike-encoding DNA), recombinant protein (Novavax — the spike protein itself, made in cell culture), and inactivated virus (Sinopharm/Sinovac — the whole killed virus). Each is a different answer to "how do I show the immune system a spike protein without an active infection?" Source: PESB Lecture 1.',
      caption_cn: '新冠疫苗使用的四种平台并列对比：mRNA-脂质纳米颗粒（Moderna/辉瑞——脂质纳米颗粒携带编码刺突蛋白的 mRNA）、腺病毒载体（阿斯利康/卫星 V——病毒外壳携带编码刺突的 DNA）、重组蛋白（Novavax——细胞培养生产的刺突蛋白本身）、灭活病毒（国药/科兴——整个灭活的病毒）。每一种都是对同一个问题的不同回答：如何在没有活动性感染的情况下把刺突蛋白展示给免疫系统。来源：PESB 第 1 讲。' }
  ],
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.17', src: 'img/figures/L1_s17_1.webp' },
    { slide: 'L1 s.19', src: 'img/figures/L1_s19_1.webp' },
    { slide: 'L1 s.19', src: 'img/figures/L1_s19_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '四种新冠疫苗平台回答的是**同一个问题**：怎么在不感染的前提下，把 spike 蛋白拿给免疫系统看。\n\n' +
            '抗体这边，只要记住两件事：**药名后缀告诉你人源化到哪一步**（-omab / -ximab / -zumab / -umab），以及 **2P** 是用两个脯氨酸把 spike 锁在前融合构象上。',
  skipIt: '各平台的具体厂商、上市时间不用记。这是判断，不是老师的话——第 1 讲的 RECAP 里案例一个没提。抗体后缀那一串**建议记**，理由不是老师说的，而是它本身就是一个把「结构差异」编码进名字的现成记忆钩子。',
  explain: [
    {
      q: '四种疫苗平台看着完全不像，共同点到底在哪？',
      a: '共同点是它们**都在回答同一个问题**：怎么让免疫系统见到 spike 蛋白，同时不让人真的被感染。\n\n' +
         '区别只在于「**把 spike 送到哪一步为止，剩下的交给谁**」：\n\n' +
         '**mRNA-LNP**——只送**图纸**（mRNA），用脂质纳米颗粒包着送进细胞，蛋白由**你自己的细胞**造。\n\n' +
         '**腺病毒载体**——也是送图纸，但用一个改造过的病毒当快递员，送的是 DNA。\n\n' +
         '**重组蛋白**——干脆在工厂里把蛋白造好，直接打成品。**这一条正好是本课的五步流程走完全程**。\n\n' +
         '**灭活病毒**——最老派的做法：把整个病毒杀死了打进去，什么都不用设计。\n\n' +
         '排一下就看出一条轴：**从「全交给自己的身体造」到「全在工厂造好」**。越靠前越快、越灵活；越靠后越传统、越可控。',
      takeaway: '四个平台 = 同一个目标的四个分工点：图纸 vs 成品，谁来造那个蛋白。'
    },
    {
      q: '为什么鼠源抗体不能直接给人用？',
      trace: {
        what: 'HAMA = human anti-mouse antibody，人抗鼠抗体反应。说白了：**你的免疫系统把这个药本身当成了外来入侵者**，开始生产抗体去打它。',
        from: '传统做法是免疫小鼠、再做杂交瘤（hybridoma）来拿单抗，所以拿到的东西整个是鼠的蛋白。对人体来说，它跟别的外来蛋白没有区别。',
        to: '后果有两层：**药被中和掉，失效**；严重时还会引起血清病（serum sickness）。所以治疗用抗体必须先**人源化**——把鼠的成分尽量换成人的，只留下非留不可的那部分。',
        family: '同类的问题在所有异源蛋白治疗里都存在，统称免疫原性（immunogenicity）。绕开它的另一条路是**一开始就拿到全人源抗体**：噬菌体展示（phage display）和携带人 Ig 基因座的转基因小鼠——**噬菌体展示是第 9 讲的内容**，这里先记个伏笔。'
      },
      takeaway: 'HAMA = 免疫系统攻击这个药本身。人源化就是为了躲开它。'
    },
    {
      q: '那串后缀（-omab / -ximab / -zumab / -umab）怎么记才不混？',
      a: '别当四个词背，**当成一把尺子上的四个刻度**：从「全是鼠的」滑到「全是人的」。\n\n' +
         '**-omab**：全鼠源。什么都没换（ibritum**omab**）。\n\n' +
         '**-ximab**：嵌合体（chimeric，x = chi）。**可变区是鼠的，恒定区换成人的**（ritu**ximab**）。\n\n' +
         '**-zumab**：人源化（humanized，z = 人源化那步）。只把**鼠的 CDR** 移植到人的框架上——CDR 就是真正接触抗原的那几个环（trastu**zumab**）。\n\n' +
         '**-umab**：全人源（human）（adalim**umab**）。\n\n' +
         '记忆钩子：**x 想成 chimeric（嵌合），z 想成中间那一档，u 想成 human。**换掉的越多，鼠的成分越少，HAMA 风险越低。\n\n' +
         '也可以按「保留了多少鼠的东西」倒着数：整只鼠 → 只留可变区 → 只留 CDR → 一点不留。',
      takeaway: '一把尺子四个刻度：omab 全鼠 → ximab 换恒定区 → zumab 只留 CDR → umab 全人。'
    },
    {
      q: '「2P」只是换了两个脯氨酸，凭什么算蛋白质工程的里程碑？',
      a: '因为它解决的不是「蛋白够不够多」，而是「**蛋白摆的姿势对不对**」。\n\n' +
         '病毒的融合蛋白（spike 就是一种）有两个构象：**融合前（prefusion）**和**融合后（postfusion）**。它的工作方式就是在侵入细胞时从前者「弹」到后者，像一个上了劲的弹簧突然松开。\n\n' +
         '麻烦在于：**真正能激发有效中和抗体的表位，长在前融合那个构象上**。而前融合构象是**亚稳态**的——你把它做出来，它自己就塌到融合后去了。于是你辛辛苦苦做的疫苗抗原，展示的是一个免疫系统学了也没用的形状。\n\n' +
         '**2P 就是往铰链处插两个脯氨酸（proline）。**脯氨酸的环状侧链让主链在那里拐不动、僵住，弹簧就弹不出去了，构象被**锁**在前融合态。\n\n' +
         '这个办法先是为 RSV 做出来的，然后**原样搬到了 SARS-CoV-2 上**——两款 mRNA 新冠疫苗编码的都是 2P 稳定化的 spike。\n\n' +
         '值得记住的是这条逻辑：**先解结构，知道哪个构象有用，再定点改两个残基去固定它。**这是结构指导设计（structure-guided design）改变了一次全球结局的最干净的例子。',
      takeaway: '抗原不只要「有」，还要「摆对姿势」。两个 Pro 把亚稳态锁住。'
    },
    {
      q: '为什么脯氨酸能「锁住」构象，别的氨基酸不行？',
      a: '因为脯氨酸在 20 种氨基酸里是个**结构上的异类**。\n\n' +
         '别的氨基酸，侧链只有一头连在主链上，主链在那一点还能自由转动。脯氨酸的侧链**绕回去，两头都接在主链上**，形成一个五元环。\n\n' +
         '结果就是：**主链在这个位置被环焊住了，转不动。**\n\n' +
         '所以往一个需要「弯折才能变形」的铰链位置插脯氨酸，等于在那里打了一根销子。构象想变，先得在这里拐弯，拐不了就变不了。\n\n' +
         '这个性质在后面还会遇到——凡是看到「用 Pro 来固定/破坏某个二级结构」，背后都是这同一件事。',
      takeaway: 'Pro 的侧链绕回主链成环 → 那一点转不动 → 用它当销子固定构象。'
    }
  ],
  points: [
    { term: 'mAb — research uses', en: 'ELISA, Western blot, flow cytometry.', cn: '单抗的科研用途：ELISA、Western blot、流式细胞术。' },
    { term: 'mAb — diagnostic uses', en: 'Immunohistochemistry, lateral-flow assays, microchips.', cn: '单抗的诊断用途：免疫组化、侧向流层析试纸、微阵列芯片。' },
    { term: 'mAb — therapeutic uses', en: 'Antibody–drug conjugates, radiotherapeutics, immunomodulators.', cn: '单抗的治疗用途：抗体偶联药物、放射治疗药物、免疫调节剂。' },
    { term: 'Traditional route', en: 'Immunise mice → hybridoma fusion → selection. But murine antibodies must be humanised before therapeutic use.', cn: '传统路线：免疫小鼠 → 杂交瘤融合 → 筛选。但鼠源抗体在用于治疗前必须人源化。' },
    { term: 'Newer technologies', en: 'Faster, and give fully human antibodies directly, bypassing the humanisation step.', cn: '新技术：更快，而且直接得到全人源抗体，跳过人源化这一步。' },
    { term: 'Vaccine platforms', en: 'Four distinct answers to the same problem: mRNA-LNP, adenovirus vector, recombinant protein, and inactivated whole virus.', cn: '疫苗平台：对同一问题的四种不同回答——mRNA-脂质纳米颗粒、腺病毒载体、重组蛋白、灭活全病毒。' }
  ],
  beyondPoints: [
    { term: 'The naming convention', en: 'The stem of a therapeutic antibody name tells you its source, and examiners like this. "-omab" = fully murine (ibritumomab); "-ximab" = chimeric, murine V region on human constant (rituximab); "-zumab" = humanised, only murine CDRs grafted onto a human framework (trastuzumab); "-umab" = fully human (adalimumab).', cn: '命名规则：治疗性抗体名称的词干告诉你它的来源，考官很喜欢考这个。「-omab」＝全鼠源（ibritumomab）；「-ximab」＝嵌合，鼠源可变区＋人源恒定区（rituximab）；「-zumab」＝人源化，只把鼠源 CDR 移植到人源框架上（trastuzumab）；「-umab」＝全人源（adalimumab）。' },
    { term: 'Why humanise', en: 'Murine antibodies trigger a HAMA response — human anti-mouse antibodies. The patient\'s immune system neutralises the drug and can cause serum sickness.', cn: '为什么要人源化：鼠源抗体会引发 HAMA 反应（人抗鼠抗体）。患者的免疫系统会中和药物，还可能引起血清病。' },
    { term: 'The "novel technologies"', en: 'The slide alludes to phage display and transgenic mice carrying human Ig loci. Phage display is Lecture 9\'s display-technology section, so this is a forward reference worth flagging now.', cn: '幻灯片提到的「新技术」：指的是噬菌体展示和携带人源 Ig 基因座的转基因小鼠。噬菌体展示属于第 9 讲的展示技术部分，值得现在就标记这个前向联系。' },
    { term: 'Prefusion-stabilised spike ("2P")', en: 'The protein-engineering landmark in vaccines: two proline substitutions lock a viral fusion glycoprotein in its metastable pre-fusion conformation, which is the one displaying the neutralising epitopes. Developed first for RSV, then applied to SARS-CoV-2 — both mRNA COVID vaccines encode a 2P-stabilised spike. The cleanest modern example of structure-guided design changing a global outcome.', cn: '前融合稳定化刺突（「2P」）：疫苗领域的蛋白质工程里程碑。两个脯氨酸替换把病毒融合糖蛋白锁定在亚稳的**前融合**构象上，而正是这个构象展示中和表位。最早为 RSV 开发，随后用于 SARS-CoV-2——两款 mRNA 新冠疫苗编码的都是 2P 稳定化刺突。这是「结构导向设计改变全球结局」最干净的现代例证。' }
  ],
  terms: [
    { en: 'Hybridoma', cn: '杂交瘤', def_en: 'A fusion of an antibody-producing B cell with a myeloma cell, giving an immortal line secreting one monoclonal antibody.', def_cn: '产抗体的 B 细胞与骨髓瘤细胞融合形成的永生细胞系，分泌单一的单克隆抗体。' },
    { en: 'Humanisation', cn: '人源化', def_en: 'Replacing murine antibody framework with human sequence, keeping only the CDRs, to avoid a HAMA response.', def_cn: '把鼠源抗体的框架区换成人源序列、只保留 CDR，以避免 HAMA 反应。' },
    { en: 'HAMA response', cn: '人抗鼠抗体反应', def_en: 'Human anti-mouse antibodies raised against a murine therapeutic antibody; they neutralise the drug and can cause serum sickness.', def_cn: '针对鼠源治疗性抗体产生的人抗鼠抗体；它们会中和药物，还可能引起血清病。' },
    { en: 'Prefusion stabilisation (2P)', cn: '前融合构象稳定化', def_en: 'Two proline substitutions that lock a viral fusion glycoprotein in the pre-fusion conformation displaying neutralising epitopes.', def_cn: '两个脯氨酸替换，把病毒融合糖蛋白锁在展示中和表位的前融合构象上。' },
    { en: 'mRNA-LNP', cn: 'mRNA-脂质纳米颗粒', def_en: 'A lipid nanoparticle delivering mRNA encoding an antigen, which the recipient\'s own cells then translate.', def_cn: '递送编码抗原的 mRNA 的脂质纳米颗粒，由接种者自己的细胞完成翻译。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'A therapeutic antibody is named "trastuzumab". What does the "-zumab" stem tell you?',
      q_cn: '一个治疗性抗体叫 "trastuzumab"，词干「-zumab」告诉你什么？',
      options: ['Fully murine — the whole antibody comes straight from the hybridoma', 'Chimeric — murine variable region on a human constant region', 'Humanised — only the murine CDRs grafted onto a human framework', 'Fully human — no murine sequence left anywhere in the molecule'],
      answer: 2,
      optionNotes: {
        1: { en: 'That is -ximab, one notch lower on the same ruler (x for chimeric). A chimeric antibody keeps the whole murine variable domain and swaps only the constant region; -zumab goes one step further and keeps only the murine CDRs on a human framework.', cn: '那是 -ximab，在同一把尺子上低一格（x 记成 chimeric）。嵌合抗体保留了整个鼠源可变区，只把恒定区换成人的；-zumab 再往前走一步，只把鼠源的 CDR 留在人源框架上。' },
        3: { en: 'Fully human is -umab, with no murine sequence left at all, and it comes from phage display or transgenic mice rather than from humanising a mouse antibody. The z is precisely the mark that murine CDRs are still present.', cn: '全人源是 -umab，一点鼠源序列都不剩，而且它通常来自 phage display 或转基因小鼠，不是把鼠源抗体人源化改出来的。那个 z 标记的正是「鼠源 CDR 还在」。' }
      },
      why_en: '-omab is fully murine, -ximab chimeric, -zumab humanised, -umab fully human. The stem encodes how far humanisation went.',
      why_cn: '-omab 全鼠源，-ximab 嵌合，-zumab 人源化，-umab 全人源。词干编码了人源化进行到哪一步。' },
    { type: 'mcq',
      q_en: 'Why must murine therapeutic antibodies be humanised?',
      q_cn: '为什么鼠源治疗性抗体必须人源化？',
      options: ['Murine antibodies cannot bind human antigens with useful affinity', 'They provoke a human anti-mouse antibody response against the drug', 'They are too large to leave the circulation and reach the tumour', 'Mouse hybridoma cells cannot be cultured at manufacturing scale'],
      answer: 1,
      optionNotes: {
        0: { en: 'This confuses two different recognition events. A murine antibody raised against a human antigen binds that antigen perfectly well — that is how it was selected. The problem runs the other way: the patient\'s immune system sees the mouse protein as foreign and raises HAMA against the drug.', cn: '这里混了两个方向的识别。用人源抗原免疫小鼠得到的抗体，结合人的抗原当然没问题——它本来就是这么筛出来的。麻烦出在反方向：患者的免疫系统把这个鼠源蛋白当成外来物，产生 HAMA 去中和这个药。' }
      },
      why_en: 'Human anti-mouse antibodies neutralise the therapeutic and can cause serum sickness. Humanisation, or fully human antibodies from phage display or transgenic mice, avoids this.',
      why_cn: '人抗鼠抗体会中和治疗性抗体，还可能引起血清病。人源化，或者用噬菌体展示、转基因小鼠直接得到全人源抗体，可以避开这个问题。' },
    { type: 'mcq',
      q_en: 'What do the two proline substitutions in the "2P" spike accomplish?',
      q_cn: '「2P」刺突中的两个脯氨酸替换起到什么作用？',
      options: ['They raise expression yield in mammalian cells by replacing rare codons in the construct', 'They lock the fusion glycoprotein in its pre-fusion conformation, which displays the neutralising epitopes', 'They remove a protease cleavage site so the spike can no longer be activated by furin', 'They add two N-glycosylation sequons, extending the half-life of the antigen in vivo'],
      answer: 1,
      optionRefs: { 3: '1-2-2' },
      why_en: 'The pre-fusion conformation is metastable but is the one bearing the neutralising epitopes. 2P locks it there. Developed for RSV, then applied to SARS-CoV-2.',
      why_cn: '前融合构象是亚稳的，但正是它携带中和表位。2P 把它锁在那个状态。最早为 RSV 开发，之后应用于 SARS-CoV-2。' },
    { type: 'short',
      q_en: 'Name the four COVID-19 vaccine platforms and what each delivers.',
      q_cn: '说出四种新冠疫苗平台，以及每一种递送的是什么。',
      accept: ['mRNA', 'lipid nanoparticle', 'adenovirus', 'recombinant protein', 'inactivated'],
      answer_en: 'mRNA in a lipid nanoparticle, as in Moderna and Pfizer, delivering mRNA that the recipient\'s cells translate into spike. Adenovirus vector, as in AstraZeneca and Sputnik V, delivering spike-encoding DNA inside a viral shell. Recombinant protein, as in Novavax, delivering the spike protein itself made in cell culture. And inactivated whole virus, as in Sinopharm and Sinovac. Four different answers to the same question — how do you show the immune system a spike protein without an active infection.',
      answer_cn: 'mRNA-脂质纳米颗粒（Moderna、辉瑞）——递送 mRNA，由接种者自己的细胞翻译成刺突蛋白；腺病毒载体（阿斯利康、卫星 V）——病毒外壳内递送编码刺突的 DNA；重组蛋白（Novavax）——直接递送细胞培养生产的刺突蛋白本身；灭活全病毒（国药、科兴）。这是对同一个问题的四种不同回答：如何在没有活动性感染的情况下把刺突蛋白展示给免疫系统。' }
  ],
  oral: {
    q_en: 'Compare the COVID-19 vaccine platforms, and explain what protein engineering contributed.',
    q_cn: '比较各种新冠疫苗平台，并说明蛋白质工程在其中贡献了什么。',
    model_en: 'All four platforms answer the same question: how do you show the immune system a spike protein without an active infection. The mRNA-lipid-nanoparticle vaccines, Moderna and Pfizer, deliver mRNA that the recipient\'s own cells translate. Adenovirus-vector vaccines, AstraZeneca and Sputnik V, deliver spike-encoding DNA inside a viral shell. Novavax delivers the recombinant spike protein itself, made in cell culture. And Sinopharm and Sinovac use whole inactivated virus. The specifically protein-engineering contribution is the prefusion-stabilised spike. The fusion glycoprotein is metastable and it is the pre-fusion conformation that displays the neutralising epitopes, so two proline substitutions — the so-called 2P design — lock it there. That was developed first for RSV and then transferred to SARS-CoV-2, and both mRNA vaccines encode a 2P spike. It is the cleanest modern case of structure-guided design changing a global outcome. On the antibody side, the traditional hybridoma route gives murine antibodies which must be humanised to avoid a HAMA response, and the drug-name suffix records how far that went — omab murine, ximab chimeric, zumab humanised, umab fully human.',
    checklist: ['Four platforms, one shared problem', 'mRNA-LNP, adenovirus vector, recombinant protein, inactivated virus', '2P prefusion stabilisation — two prolines', 'Pre-fusion conformation displays neutralising epitopes', 'Developed for RSV, applied to SARS-CoV-2', 'mAbs: hybridoma route gives murine antibodies', 'HAMA response requires humanisation', 'Naming suffixes: -omab / -ximab / -zumab / -umab']
  }
},

{
  id: '1-2-6',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.2.6',
  enTitle: 'Case study — synthetic biology applications',
  cnTitle: '案例——合成生物学的应用',
  slides: 'L1 s.20',
  coverage: 'full',
  coverageNote: 'Definition and three examples straight from the slide. The parenthetical connections to later lectures (Pichia as an expression host, PHB as metabolic engineering) are my annotations, flagged as such.',
  summary: {
    en: 'Synthetic biology is defined on the slide as the (re-)design of whole biological systems that do not already exist in nature. Three examples: biosensors that detect toxins or metabolise pesticides; plant-based meat using yeast-synthesised heme, which cuts water use by 75%, land by 95% and greenhouse emissions by 87%; and bioplastics such as PHB produced by microbial fermentation of corn sugar instead of from petroleum.',
    cn: '幻灯片上对合成生物学的定义是：对自然界中尚不存在的**整个生物系统**进行（重新）设计。三个例子：检测毒素或代谢农药的生物传感器；使用酵母合成血红素的植物基肉类，比牛肉少用 75% 的水、95% 的土地、少排 87% 的温室气体；以及用玉米糖微生物发酵生产的 PHB 等生物塑料，取代石油来源。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.20', src: 'img/figures/L1_s20_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '幻灯片给合成生物学的定义里，重点在 **whole biological systems**——改的是**整个系统**，不是单个蛋白。这是它跟前面所有案例的分界线。',
  skipIt: '75% / 95% / 87% 这三个环保数字，以及 Metabolix 这个公司名，不用背。这是判断，不是老师的话——第 1 讲的 RECAP 里案例一个都没提到。',
  explain: [
    {
      q: '合成生物学和蛋白质工程，到底差在哪？',
      a: '差在**改动的单位**。\n\n' +
         '前面几节改的都是**一个蛋白**：换两个残基让胰岛素别自聚、换一个残基让蛋白酶不怕漂白剂。改完，那个蛋白性质变了，细胞其他部分照旧。\n\n' +
         '合成生物学改的是**一整套系统**：一条代谢通路、一个「检测到毒素就发光」的回路、一个原本不生产某种聚合物的细菌让它大量生产。改完的是**细胞的行为**，不是某个分子的性质。\n\n' +
         '幻灯片定义里那句 **do not already exist in Nature**（自然界中尚不存在）也要注意：重点不在「新分子」，而在「**新组合**」。用的零件全是天然的，拼法是自然界没有的。',
      takeaway: '蛋白质工程改一个分子，合成生物学改一整套系统的行为。'
    },
    {
      q: 'leghemoglobin（豆血红蛋白）是个什么东西？',
      trace: {
        what: '一种含**血红素（heme）**的蛋白，跟你血液里的血红蛋白是同一个家族。它天然长在**豆科植物的根瘤**里，负责在那里调控氧气。',
        from: '为什么植物肉要用它？因为「牛肉味」很大程度上来自**血红素**——加热时它催化的反应产生了那些肉香的挥发性分子。植物里恰好有一个含血红素的蛋白可以借用。',
        to: '关键在于最后一步：这个蛋白**不是从大豆根瘤里提取的**（那样根本不可能有量），而是把它的基因放进**毕赤酵母（Pichia pastoris）**里表达出来的。也就是说，这个「合成生物学」的头条新闻，落地时靠的是一个非常普通的**宿主选择**决定——那正是第 3 讲。',
        family: '同族的还有血红蛋白（hemoglobin）、肌红蛋白（myoglobin）。共同点是都靠血红素结合氧。'
      },
      takeaway: '肉味来自 heme。豆血红蛋白是在酵母里表达出来的——又回到宿主选择。'
    },
    {
      q: '这三个例子看着都很「未来」，为什么说它们其实是本课后面的内容？',
      a: '因为每一个的真正难点，都落在这门课后面某一讲里。\n\n' +
         '**植物肉**——难点不是想到用 heme，是**怎么把豆血红蛋白大量做出来**。选宿主、优化表达，第 3 讲。\n\n' +
         '**生物塑料 PHB**——难点是让一个细菌把碳流**改道**，去大量堆积一种它平时不怎么攒的聚合物。这就是**代谢工程**的定义，第 12 讲。\n\n' +
         '**生物传感器**——难点是设计一个「检测到 X 就输出 Y」的回路，也就是把天然的调控元件重新连线。\n\n' +
         '所以这一节的作用其实是**广告页**：先让你看见成品，后面几讲再一件件教你怎么做。看到 PHB 想到第 12 讲，看到 heme 想到第 3 讲，这条线比记住百分比有用得多。',
      takeaway: '合成生物学的头条，落地时都是宿主选择和代谢改道这些「本课内容」。'
    }
  ],
  points: [
    { term: 'Definition', en: 'The (re-)design of whole biological systems that do not already exist in Nature. The emphasis is on systems, not single proteins.', cn: '定义：对自然界中尚不存在的**整个生物系统**进行（重新）设计。重点在「系统」，不是单个蛋白。' },
    { term: 'Biosensors', en: 'Reprogrammed microorganisms that detect toxins in the environment, or metabolise chemicals such as pesticides.', cn: '生物传感器：经过重编程的微生物，用于检测环境中的毒素，或代谢农药等化学品。' },
    { term: 'New foods', en: 'Plant-based burgers using yeast-synthesised heme for beef flavour. Uses 75% less water, 95% less land and 87% fewer greenhouse gas emissions than beef.', cn: '新型食品：使用酵母合成的血红素来产生牛肉风味的植物基汉堡。相比牛肉少用 75% 的水、95% 的土地，温室气体排放少 87%。' },
    { term: 'Sustainable materials', en: 'Bioplastics from bacteria. Polyhydroxybutyrate (PHB) is normally petroleum-derived; from the 1990s Metabolix produced PHB-like polymers by microbial fermentation of corn sugar.', cn: '可持续材料：来自细菌的生物塑料。聚羟基丁酸酯（PHB）通常来自石油；从 1990 年代起 Metabolix 公司通过玉米糖的微生物发酵生产 PHB 类聚合物。' }
  ],
  beyondPoints: [
    { term: 'The heme is an expression-host story', en: 'The heme protein in plant-based meat is soy leghemoglobin expressed in Pichia pastoris. That is an expression-host choice, i.e. Lecture 3 again — the synthetic-biology headline rests on a mundane host-selection decision.', cn: '血红素其实是个表达宿主的故事：植物基肉里的血红素蛋白是在毕赤酵母（Pichia pastoris）中表达的大豆血红蛋白。这是一个表达宿主的选择，也就是第 3 讲的内容——合成生物学的头条新闻，底下压着的是一个平淡无奇的宿主选择决定。' },
    { term: 'PHB is metabolic engineering', en: 'Producing PHB by fermentation means rerouting a microbe\'s carbon flux towards a polymer it does not normally accumulate in quantity. That is precisely metabolic engineering — Lecture 12.', cn: 'PHB 属于代谢工程：通过发酵生产 PHB，意味着把微生物的碳流重新导向一个它通常不会大量积累的聚合物。这正是代谢工程——第 12 讲的内容。' }
  ],
  terms: [
    { en: 'Synthetic biology', cn: '合成生物学', def_en: 'The (re-)design of whole biological systems that do not already exist in nature — systems-level, not single-protein, engineering.', def_cn: '对自然界中尚不存在的整个生物系统进行（重新）设计——是系统层面的工程，而不是单个蛋白的工程。' },
    { en: 'Biosensor', cn: '生物传感器', def_en: 'A reprogrammed organism or biological component that reports the presence of a target chemical, e.g. an environmental toxin.', def_cn: '经过重编程的生物体或生物元件，用来报告某种目标化学物质（如环境毒素）的存在。' },
    { en: 'Leghemoglobin', cn: '豆血红蛋白', def_en: 'A plant heme protein, expressed recombinantly in Pichia pastoris, that gives plant-based meat its beef-like flavour.', def_cn: '一种植物血红素蛋白，在毕赤酵母中重组表达，赋予植物基肉类似牛肉的风味。' },
    { en: 'Polyhydroxybutyrate (PHB)', cn: '聚羟基丁酸酯', def_en: 'A bacterial polyester used as a bioplastic; normally petroleum-derived, it can be made by microbial fermentation of corn sugar.', def_cn: '一种细菌来源的聚酯类生物塑料；通常从石油生产，也可以通过玉米糖的微生物发酵制得。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How does the slide define synthetic biology?',
      q_cn: '幻灯片如何定义合成生物学？',
      options: ['The chemical synthesis of proteins in the laboratory without using any living cell', 'The (re-)design of whole biological systems that do not already exist in nature', 'The use of computers to predict a protein structure from its sequence, as AlphaFold does', 'The synthesis of genes from scratch rather than their isolation from an organism'],
      answer: 1,
      optionRefs: { 3: '1-4-3' },
      why_en: 'The emphasis is on whole systems that do not exist in nature, which distinguishes it from engineering a single protein.',
      why_cn: '重点在于自然界中不存在的**整个系统**，这正是它与改造单个蛋白的区别。' },
    { type: 'mcq',
      q_en: 'The heme that gives plant-based burgers their beef flavour is produced how?',
      q_cn: '植物基汉堡中产生牛肉风味的血红素是怎么生产的？',
      options: ['Extracted at scale from the root nodules of soybean plants grown for the purpose', 'Soy leghemoglobin expressed recombinantly in Pichia pastoris', 'Chemically synthesised from porphyrin precursors', 'Recovered as a by-product of beef processing'],
      answer: 1,
      why_en: 'It is soy leghemoglobin made in the yeast Pichia pastoris — a synthetic-biology headline resting on an ordinary expression-host decision.',
      why_cn: '是在毕赤酵母中生产的大豆血红蛋白——一个合成生物学的头条，底下是一个平常的表达宿主决定。' },
    { type: 'mcq',
      q_en: 'Producing PHB by microbial fermentation rather than from petroleum is an example of which discipline?',
      q_cn: '用微生物发酵而非石油来生产 PHB，属于哪个学科的例子？',
      options: ['Structural biology — solving the structures of the pathway enzymes', 'Metabolic engineering — rerouting carbon flux to a chosen product', 'Directed evolution — iterative rounds of mutation and selection', 'Cell-free protein synthesis — making the product in a cell extract'],
      answer: 1,
      optionRefs: { 2: '4-1', 3: '3-1' },
      why_en: 'Rerouting a cell\'s carbon flux towards a chosen product is the definition of metabolic engineering, which is Lecture 12.',
      why_cn: '把细胞的碳流重新导向某个目标产物，正是代谢工程的定义，属于第 12 讲。' },
    { type: 'short',
      q_en: 'Give the environmental figures quoted for plant-based meat versus beef.',
      q_cn: '说出讲义引用的植物基肉相对牛肉的环境数据。',
      accept: ['75', 'water', '95', 'land', '87', 'greenhouse'],
      answer_en: 'Seventy-five percent less water, ninety-five percent less land, and eighty-seven percent fewer greenhouse gas emissions than beef.',
      answer_cn: '比牛肉少用 75% 的水、95% 的土地，温室气体排放少 87%。' }
  ],
  oral: {
    q_en: 'What is synthetic biology, and how does it differ from protein engineering?',
    q_cn: '什么是合成生物学？它和蛋白质工程有什么区别？',
    model_en: 'The slide defines synthetic biology as the re-design of whole biological systems that do not already exist in nature. The key word is systems: protein engineering improves one molecule, whereas synthetic biology assembles pathways, circuits and whole organisms. Three examples were given. Biosensors are reprogrammed microorganisms that detect environmental toxins or metabolise chemicals such as pesticides. New foods include plant-based burgers flavoured with yeast-synthesised heme, which use seventy-five percent less water, ninety-five percent less land and produce eighty-seven percent fewer greenhouse emissions than beef. And sustainable materials include bioplastics such as polyhydroxybutyrate, normally petroleum-derived, made instead by microbial fermentation of corn sugar. It is worth noticing that each of these actually rests on an earlier lecture: the heme is soy leghemoglobin expressed in Pichia pastoris, which is an expression-host decision from Lecture three, and rerouting carbon flux to PHB is metabolic engineering from Lecture twelve.',
    checklist: ['Definition: whole systems not existing in nature', 'Systems-level, contrasted with single-protein engineering', 'Biosensors — toxin detection, pesticide metabolism', 'New foods — yeast heme; 75% water, 95% land, 87% emissions', 'Bioplastics — PHB from corn sugar fermentation', 'Each example rests on an earlier lecture\'s technique']
  }
},

{
  id: '1-3',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.3',
  enTitle: 'Why go through a DNA/RNA middleman?',
  cnTitle: '为什么要绕道 DNA/RNA？',
  slides: 'L1 s.21',
  coverage: 'full',
  coverageNote: 'The Crick quotation and the "marked absence of tools" phrasing are verbatim from the slides — use that phrasing in the oral, it is the lecturer\'s own. The slide poses the protein-level-modification question with no text answer; the honest answer is in the beyond-the-slides block.',
  summary: {
    en: 'This is the conceptual keystone of the course and a very likely oral question. The end product is a protein, so why bother with recombinant DNA technology at all? The answer has two layers. The central dogma says information cannot flow from protein to protein or protein to nucleic acid, so proteins cannot be templated or amplified. And practically there is a marked absence of tools for targeted manipulation at the protein level. Therefore the only way to make a specific change reproducibly and at scale is to make it in the DNA.',
    cn: '这是整门课的概念基石，也是极可能出现的口试题。最终产物是蛋白，那为什么还要绕这么大一圈用重组 DNA 技术？答案分两层。中心法则说信息不能从蛋白流向蛋白、也不能从蛋白流向核酸，所以蛋白**没有模板、无法扩增**。而现实层面，蛋白水平上**明显缺乏定点操作的工具**。因此，要精确、可重复、可放大地做一个改动，唯一的办法就是在 DNA 上做。'
  },
  figures: [
    { src: 'img/protein-level-modification.webp',
      alt: 'Diagram showing four protein-level operations — fusion, mutagenesis, amplification, synthesis — with fusion, mutagenesis and amplification crossed out as not directly possible on a protein',
      caption_en: 'The slide\'s own framing of the argument: starting from a folded protein (centre), fusion, mutagenesis and amplification are all marked impossible to do directly at the protein level (✕) — the only arrow left open runs from synthesis, i.e. building the protein from a sequence in the first place. That is the whole argument in one picture. Source: PESB Lecture 1, "Modifications at the protein level?"',
      caption_cn: '幻灯片自己给出的论证框架：从一个折叠好的蛋白出发（中央），融合、突变、扩增三项都被标记为无法在蛋白水平直接完成（✕）——唯一还开着的箭头来自「合成」，也就是一开始就从序列把蛋白造出来。整个论证浓缩在一张图里。来源：PESB 第 1 讲，"Modifications at the protein level?"' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这题几乎一定会考，而且完整答案有**三层**：中心法则 → 蛋白水平缺乏定点操作工具 → **所以只能在 DNA 这一层动手**。\n\n' +
            '大多数人只答第一层。**考官在等的是第二层。**',
  skipIt: 'NHS 酯、maleimide、Sortase A、SpyTag 这些具体试剂的名字不必逐个背下来，能说出「化学和酶法修饰确实存在，但都不够定点、而且都还得先在 DNA 上装标签」就够了。老师在第 2 讲开头给第 1 讲做 RECAP 时，写的正是那两条——中心法则、以及蛋白水平缺乏定点操作工具——**一个试剂名都没有**。',
  explain: [
    {
      q: '「蛋白没法被扩增」到底是什么意思？',
      a: '意思是：**你有多少就是多少，它不会自己变多。**\n\n' +
         '为什么 DNA 可以？因为 DNA 是**双链互补**的——A 对 T、G 对 C。一条链就是另一条链的完整说明书，所以一台聚合酶照着抄就能复制。PCR 能做到几小时扩增上百万倍，靠的就是这条规则。\n\n' +
         '蛋白没有这种规则。**20 种氨基酸之间不存在互相配对的关系**，一条肽链无法当另一条肽链的模板。所以：**没有 protein polymerase，没有 protein PCR。**\n\n' +
         '中心法则说的正是这件事：信息可以 DNA → RNA → 蛋白，但**不能蛋白 → 蛋白，也不能蛋白 → 核酸**。\n\n' +
         '实际后果很具体：你手里那 1 微克稀有蛋白，永远只有 1 微克。想要更多，唯一的办法是回到 DNA，把基因扩出来、放进细胞里让它替你造。',
      takeaway: 'DNA 能被抄是因为有互补配对；蛋白没有配对规则，所以没有模板、没有扩增。'
    },
    {
      q: '中心法则这一层谁都会说，为什么还不够？',
      a: '因为中心法则只回答了「**为什么不能扩增**」，没回答「**为什么不能改**」。\n\n' +
         '完全可以想象这样一个世界：蛋白确实没法扩增，但我有一把镊子，能精准地把第 222 位的甲硫氨酸夹出来换成丙氨酸。那样的话，重组 DNA 技术就没那么不可替代了。\n\n' +
         '**第二层说的就是：这把镊子不存在。**幻灯片的原话是 marked absence of tools for targeted manipulation at the protein level——蛋白水平上明显缺乏定点操作的工具。\n\n' +
         '两层加在一起，第三层才成立：**既造不多，又改不准，那就只能退到 DNA 那一层去动手**——因为 DNA 那一层要什么工具有什么工具：聚合酶、核酸酶、连接酶、化学合成，又准又便宜又可编程。\n\n' +
         '答题时按这三句走，一句不落。',
      takeaway: '第一层解释「造不多」，第二层解释「改不准」。缺一层，结论就不成立。'
    },
    {
      q: 'NHS 酯、maleimide 是什么？既然它们能改蛋白，为什么不算「工具」？',
      trace: {
        what: '两类**化学试剂**，专门跟蛋白表面某种氨基酸侧链反应，把一个东西（染料、药物、PEG…）接上去。NHS 酯认**赖氨酸（Lys）的氨基**，maleimide 认**半胱氨酸（Cys）的巯基**。',
        from: '它们来自有机化学，不是生物学。挑这两种侧链是因为它们反应活性高、条件温和，在水里、接近中性 pH 下就能反应。',
        to: '问题出在**专一性**上。一个典型蛋白表面往往有**几十个赖氨酸**，NHS 酯不会挑，见一个接一个。你得到的不是一个产物，是**一锅混合物**——接了 3 个的、接了 5 个的、接在不同位置的，活性各不相同。作为药物，这是不能接受的。',
        family: 'Cys 天然含量低得多，所以 maleimide 定点性好很多——但代价是：**你得先在 DNA 上给它装一个 Cys 进去**。绕了一圈，还是回到 DNA。'
      },
      takeaway: '能改 ≠ 能定点改。化学修饰给你的是一锅混合物，不是一个分子。'
    },
    {
      q: 'Sortase、SpyTag 这些酶法方法更专一，为什么还是不算反例？',
      a: '因为它们**每一个都需要一段基因编码的识别标签**。\n\n' +
         'Sortase A 认的是 **LPXTG** 这五个残基的序列；SpyTag/SpyCatcher 是一对互相认识的肽段和蛋白。它们确实又准又干净——**前提是你的蛋白上得先有那段序列**。\n\n' +
         '那段序列哪来的？**你在 DNA 上加进去的。**\n\n' +
         '所以这些方法非但不是反例，反而是最好的佐证：**连所谓的「蛋白水平工程」，第一步也几乎总是一次 DNA 层面的改动。**\n\n' +
         '翻译后修饰（PTM）更是如此——糖基化、磷酸化是**宿主装的，不是你装的**。你能做的只有两件事：改序列造出信号（EPO 那一节），或者换个宿主（第 3 讲整讲）。\n\n' +
         '口试里能把这句话说出来——「即便是蛋白水平的操作，也要从 DNA 改起」——比背诵中心法则显得懂得多，因为它说明你真的想过这个问题，而不是在复述。',
      takeaway: '专一的酶法都要一个编码好的标签。绕一圈还是 DNA 先动手。'
    }
  ],
  points: [
    { term: 'The question', en: 'In protein engineering the end product is a protein — so why bother with all of recombinant DNA technology?', cn: '问题：蛋白质工程的最终产物是**蛋白**，那为什么还要动用整套重组 DNA 技术？' },
    { term: 'Crick\'s central dogma', en: 'As quoted on the slide: information transfer from nucleic acid to nucleic acid, or nucleic acid to protein, may be possible; transfer from protein to protein, or protein to nucleic acid, is impossible. "Information" here means the precise determination of sequence.', cn: '克里克的中心法则（幻灯片原文）：信息可以从核酸传向核酸、或从核酸传向蛋白；但从蛋白传向蛋白、或从蛋白传向核酸，是不可能的。这里的「信息」指的是序列的精确决定。' },
    { term: 'The consequence', en: 'Proteins cannot be templated and cannot be amplified. There is no protein equivalent of PCR and no polymerase that copies an amino-acid sequence.', cn: '推论：蛋白**无法被模板化**，也**无法被扩增**。不存在蛋白版的 PCR，也不存在能复制氨基酸序列的聚合酶。' },
    { term: 'The practical corollary', en: 'There is a marked absence of tools for targeted manipulation at the protein level. This is the Lecture 2 recap slide\'s own phrasing — use it.', cn: '现实推论：蛋白水平上**明显缺乏定点操作的工具**。这是第 2 讲回顾幻灯片的原话——照用。' },
    { term: 'The conclusion', en: 'The only way to make a specific change reproducibly and at scale is to make it in the DNA and let the cell\'s transcription and translation machinery do the manufacturing. DNA is the only layer with precise, cheap, programmable editing tools — polymerases, nucleases, ligases and synthesis.', cn: '结论：想要**精确、可重复、可放大**地做一个改动，唯一的办法是在 DNA 上改，然后让细胞的转录翻译机器替你生产。DNA 是唯一拥有精确、廉价、可编程编辑工具的层面——聚合酶、核酸酶、连接酶和化学合成。' },
    { term: 'Answer in three layers', en: 'A complete oral answer has three layers, and most people give only the first: (1) the central dogma; (2) the absence of protein-level tools; (3) therefore we can only act at the DNA layer. Layer 2 is what the examiner is actually waiting for.', cn: '三层作答框架：完整的口试回答有三层，而大多数人只说第一层——① 中心法则；② 蛋白层面缺乏工具；③ 所以我们**只能**在 DNA 这一层动手。第二层才是考官真正在等的。' }
  ],
  beyondPoints: [
    { term: 'What you CAN do at the protein level', en: 'The slide poses the question with no text answer. The honest answer is that chemical and enzymatic modification do exist, but they are poorly site-specific.', cn: '蛋白层面**能**做什么：幻灯片提了问题但没给文字答案。诚实的回答是：化学修饰和酶促修饰确实存在，但**定点性很差**。' },
    { term: 'Chemical modification', en: 'NHS esters target lysine ε-amines; maleimides target cysteine thiols. The problem is that a typical protein has many lysines, so you get a heterogeneous mixture. Cysteine is rarer and so engineered-cysteine conjugation is more controlled — but you had to engineer that cysteine in the DNA first.', cn: '化学修饰：NHS 酯靶向赖氨酸 ε-氨基，马来酰亚胺靶向半胱氨酸巯基。问题是典型蛋白有**很多**赖氨酸，结果是一堆不均一的混合物。半胱氨酸比较少见，所以「工程化半胱氨酸偶联」可控性更好——但那个半胱氨酸得先在 DNA 上做出来。' },
    { term: 'Enzymatic modification', en: 'Sortase A (recognises LPXTG), transglutaminase, SpyTag/SpyCatcher. More specific, but they all need a genetically encoded recognition tag. Again: DNA first.', cn: '酶促修饰：Sortase A（识别 LPXTG）、转谷氨酰胺酶、SpyTag/SpyCatcher。特异性更好，但它们都需要一个**基因编码的识别标签**。还是那句话：先动 DNA。' },
    { term: 'Post-translational modifications', en: 'Glycosylation and phosphorylation are installed by the host, not by you. Which is why host choice is a whole lecture.', cn: '翻译后修饰：糖基化、磷酸化是**宿主**装上去的，不是你加的。这就是为什么宿主选择要占一整讲。' },
    { term: 'The honest complete answer', en: 'Even "protein-level" engineering almost always begins with a DNA-level change. That is the complete answer, and saying it shows you understood the question rather than reciting the dogma.', cn: '完整而诚实的答案：即便是所谓「蛋白层面」的工程，几乎总是从一个 DNA 层面的改动开始。把这句说出来，表明你理解了问题，而不是在背中心法则。' }
  ],
  terms: [
    { en: 'Central dogma', cn: '中心法则', def_en: 'Crick\'s statement that sequence information can flow nucleic acid → nucleic acid and nucleic acid → protein, but never protein → protein or protein → nucleic acid.', def_cn: '克里克的论断：序列信息可以从核酸流向核酸、核酸流向蛋白，但绝不能从蛋白流向蛋白或蛋白流向核酸。' },
    { en: 'Templated synthesis', cn: '模板化合成', def_en: 'Copying a sequence from a pre-existing template. DNA and RNA have it; proteins have no mechanism for it, which is why they cannot be amplified.', def_cn: '按照已有模板复制序列。DNA 和 RNA 有这种机制，蛋白没有——所以蛋白无法扩增。' },
    { en: 'Sortase A', cn: '分选酶 A', def_en: 'A bacterial transpeptidase recognising the LPXTG motif, used for site-specific protein conjugation — but the motif must be genetically encoded first.', def_cn: '识别 LPXTG 基序的细菌转肽酶，用于定点蛋白偶联——但那个基序必须先在基因上编码进去。' },
    { en: 'NHS ester', cn: 'NHS 酯', def_en: 'A chemical reagent targeting lysine ε-amines. Poorly site-specific, because a typical protein has many lysines.', def_cn: '靶向赖氨酸 ε-氨基的化学试剂。定点性差，因为典型蛋白含有很多赖氨酸。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'According to the central dogma, which information transfer is impossible?',
      q_cn: '根据中心法则，哪种信息传递是不可能的？',
      options: ['DNA → RNA (sequence information copied into a transcript)', 'RNA → DNA (a transcript sequence copied back into double-stranded DNA)', 'RNA → protein (sequence information read out as a peptide)', 'Protein → nucleic acid (peptide sequence written into a gene)'],
      answer: 3,
      optionRefs: { 1: '1-5-2' },
      why_en: 'Protein → protein and protein → nucleic acid are both impossible. RNA → DNA is possible in retroviruses via reverse transcriptase.',
      why_cn: '蛋白→蛋白 和 蛋白→核酸 都不可能。RNA→DNA 在逆转录病毒中通过逆转录酶是可以的。' },
    { type: 'mcq',
      q_en: 'Which phrase does the lecture use for the practical half of the argument?',
      q_cn: '讲义用哪个说法来表述这个论证的现实一半？',
      options: ['"Proteins are thermodynamically unstable"', '"A marked absence of tools for targeted manipulation at the protein level"', '"Protein synthesis is energetically expensive for the cell"', '"Post-translational modifications differ from one expression host to the next"'],
      answer: 1,
      optionRefs: { 3: '2-1' },
      why_en: 'That is the slide\'s own phrasing and worth quoting. Most students recite only the central dogma and omit this second layer, which is what the examiner is waiting for.',
      why_cn: '这是幻灯片的原话，值得直接引用。大多数学生只背中心法则、漏掉这第二层，而这正是考官在等的。' },
    { type: 'mcq',
      q_en: 'Why is chemical modification with NHS esters a poor substitute for DNA-level engineering?',
      q_cn: '为什么用 NHS 酯做化学修饰不能替代 DNA 层面的工程改造？',
      options: ['The coupling conditions irreversibly denature the target protein', 'NHS esters label every accessible lysine, giving a heterogeneous product', 'The coupling chemistry only proceeds at pH 4 and below', 'The resulting amide linkage is not stable in human serum'],
      answer: 1,
      why_en: 'Poor site-specificity is the core problem. Engineered-cysteine conjugation is more controlled — but that cysteine had to be introduced in the DNA first.',
      why_cn: '核心问题是定点性差。工程化半胱氨酸偶联可控性更好——但那个半胱氨酸必须先在 DNA 上引入。' },
    { type: 'short',
      q_en: 'Give the three-layer answer to "why does protein engineering need recombinant DNA technology?"',
      q_cn: '用三层框架回答「蛋白质工程为什么需要重组 DNA 技术？」',
      accept: ['central dogma', 'template', 'amplif', 'absence of tools', 'DNA level', 'reproducib'],
      answer_en: 'Layer one, the central dogma: information cannot flow from protein to protein or protein to nucleic acid, so proteins cannot be templated or amplified — there is no protein PCR. Layer two, the practical reality: there is a marked absence of tools for targeted manipulation at the protein level; chemical and enzymatic methods exist but are poorly site-specific, and the specific ones need a genetically encoded tag anyway. Layer three, the conclusion: the only way to make a specific change reproducibly and at scale is to make it in the DNA and let the cell\'s transcription and translation machinery manufacture the product.',
      answer_cn: '第一层，中心法则：信息不能从蛋白流向蛋白、也不能从蛋白流向核酸，所以蛋白没有模板、无法扩增——不存在蛋白版的 PCR。第二层，现实：蛋白层面明显缺乏定点操作的工具；化学法和酶法虽然存在，但定点性差，而特异性好的那些又都需要一个基因编码的标签。第三层，结论：要精确、可重复、可放大地做一个改动，唯一的办法就是在 DNA 上改，让细胞的转录翻译机器替你生产。' }
  ],
  oral: {
    q_en: 'Why does protein engineering require recombinant DNA technology at all, when the product is a protein?',
    q_cn: '既然产物是蛋白，蛋白质工程为什么还需要重组 DNA 技术？',
    model_en: 'There are three layers to this and the second one is the one people forget. The first layer is the central dogma. Crick\'s formulation is that information transfer from nucleic acid to nucleic acid, or nucleic acid to protein, may be possible, but transfer from protein to protein or protein to nucleic acid is impossible — where information means the precise determination of sequence. The consequence is that proteins cannot be templated and cannot be amplified. There is no protein equivalent of PCR and no polymerase that copies an amino-acid sequence. The second layer is practical: there is a marked absence of tools for targeted manipulation at the protein level. Chemical methods do exist — NHS esters on lysines, maleimides on cysteines — but a typical protein has many lysines, so you get a heterogeneous mixture. Enzymatic methods like sortase A or SpyTag are more specific, but every one of them needs a genetically encoded recognition tag, so you are back at the DNA. And post-translational modifications such as glycosylation are installed by the host, not by the engineer. The third layer is the conclusion: the only way to make a specific change reproducibly and at scale is to make it in the DNA and let transcription and translation do the manufacturing. DNA is the only layer where we have precise, cheap, programmable tools — polymerases, nucleases, ligases and chemical synthesis.',
    checklist: ['Layer 1 — central dogma, quote Crick', 'No protein templating, no protein PCR', 'Layer 2 — "marked absence of tools at the protein level"', 'Chemical methods exist but are poorly site-specific', 'Enzymatic methods need a genetically encoded tag — DNA first', 'PTMs are installed by the host', 'Layer 3 — therefore act at the DNA level', 'DNA has polymerases, nucleases, ligases, synthesis']
  }
},

{
  id: '1-4-1',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.4.1',
  enTitle: 'DNA sources — literature, asking, and clone repositories',
  cnTitle: 'DNA 来源——查文献、写信要、以及质粒库',
  slides: 'L1 s.22–23',
  coverage: 'full',
  coverageNote: 'Straight from the slides, including the Addgene figures. Listed cheapest-first, which is the useful ordering: the first two routes cost you an email and postage.',
  summary: {
    en: 'Before you clone anything, check whether somebody has already done it. Authors are in principle obligated to send you a published clone — it is a condition of publishing in most journals — which saves you cloning, sequencing, host optimisation and purification development. Failing that, Addgene holds around 100,000 reagents at roughly $80 a clone, mostly shipping and handling.',
    cn: '在你动手克隆之前，先查有没有人已经做过了。作者原则上**有义务**把已发表的克隆寄给你——这是大多数期刊的发表条件之一——这能省掉你克隆、测序、宿主优化和纯化方法开发的全部工作。如果拿不到，Addgene 有约 10 万种试剂，每个克隆约 80 美元，主要是邮费和手续费。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.22', src: 'img/figures/L1_s22_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '动手克隆之前先问一句：**这一步能不能不做**。别人发表过的克隆，原则上问作者要就有；要不到就去 **Addgene**。',
  skipIt: 'Addgene 约 10 万种试剂、约 $80 一个克隆、以及 plasmids.eu 这个网址，属于查得到的细节，不用背。反过来说，老师在第 2 讲开头给第 1 讲做 RECAP 时，Sources of DNA 第一个列的就是 colleagues 和 repositories——**概念本身是被点过名的**，别整节跳过；只是 RECAP 里一个数字都没有。',
  explain: [
    {
      q: '「作者原则上有义务寄给你」——这话能当真吗？',
      a: '要注意幻灯片的措辞是 **in principle obligated**——**原则上**有义务。\n\n' +
         '这个义务的来源是**期刊的发表政策**：大多数期刊要求作者在论文发表后，把文章里用到的材料（质粒、菌株、细胞系）提供给提出合理请求的同行。它是发表的**条件**，不是法律。\n\n' +
         '所以现实里它的强制力有限，回不回信、多久回信都不好说。**正因如此，这一节把三条路并列**：查文献、写信要、去资源库。资源库存在的意义，恰恰就是不用等别人回信。\n\n' +
         '（这一段是对幻灯片措辞的解读，不是老师的原话——但 in principle 这个限定词是幻灯片自己写的。）',
      takeaway: '「原则上」= 期刊政策，不是法律。所以才需要 Addgene 这条备用路。'
    },
    {
      q: 'Addgene 到底是个什么东西？',
      trace: {
        what: '一个**非营利的质粒共享平台**。研究者把自己发表过的质粒存进去，别人交个手续费就能拿到实物——寄来的是真的 DNA，不是序列文件。',
        from: '它的存在是为了解决上一条那个问题：材料共享义务在纸面上有，执行起来靠人品。把质粒集中存到一个机构，索取就变成了下单。',
        to: '拿到一个现成克隆，等于**整条流程的前两步直接跳过**：不用设计引物、不用克隆、不用测序验证，还常常附带别人已经踩过的表达条件。这一节真正教的就是这个动作——先查有没有现成的。',
        family: '欧洲的对应物是 plasmids.eu（European Plasmid Repository）。同类思路的还有各种菌株库、细胞库、抗体库。',
        numbers: '约 10 万种试剂，一个克隆大约 $80，主要是邮费和手续费。'
      },
      takeaway: 'Addgene = 把「问作者要」变成「下单」。也可以把自己的克隆存进去。'
    },
    {
      q: '省下来的到底是什么？为什么值得单独讲一节？',
      a: '因为省下的**不只是克隆那一步**。\n\n' +
         '幻灯片列的是四样：克隆、测序、**表达宿主优化**、**纯化方法开发**。前两样是几天的事，后两样常常是**几个月**。\n\n' +
         '也就是说，你拿到的不是一管 DNA，是**别人替你趟过的整条路**——这个蛋白在哪个宿主里表达得动、要不要低温、用什么柱子纯化，这些经验往往跟着质粒一起过来。\n\n' +
         '这一节看起来最不像知识点，但它教的是一个工程习惯：**每一步动手之前，先问这一步能不能不做。**这跟后面选克隆策略、选宿主时的思路是同一个。',
      takeaway: '省下的是宿主优化和纯化开发——那才是吃掉几个月的地方。'
    }
  ],
  points: [
    { term: 'Literature search', en: 'Somebody may already have cloned and expressed your protein. Check first — this is the cheapest route by a wide margin.', cn: '查文献：可能已经有人克隆并表达过你的蛋白了。先查——这是成本最低的一条路，而且差距很大。' },
    { term: 'Just ask', en: 'Write a polite e-mail to the lab requesting the DNA. In principle they are obligated to send you the clone — this is a condition of publishing in most journals.', cn: '直接写信要：给那个实验室发一封礼貌的邮件索要 DNA。原则上他们**有义务**寄给你——这是大多数期刊的发表条件之一。' },
    { term: 'What you save', en: 'You skip cloning, sequencing, expression-host optimisation and purification development — often months of work that has already been done once.', cn: '省下什么：跳过克隆、测序、表达宿主优化和纯化方法开发——通常是好几个月的工作，而且别人已经做过一遍了。' },
    { term: 'Addgene', en: 'addgene.org — a non-profit plasmid-sharing platform holding roughly 100,000 reagents. You mostly pay shipping and handling, around $80 per clone. You can also deposit your own clones for others.', cn: 'Addgene（addgene.org）：非营利的质粒共享平台，约 10 万种试剂。主要支付邮费和手续费，每个克隆约 80 美元。你也可以把自己的克隆存进去供他人使用。' },
    { term: 'European Plasmid Repository', en: 'plasmids.eu — the European equivalent.', cn: '欧洲质粒库（plasmids.eu）：欧洲的对应机构。' }
  ],
  terms: [
    { en: 'Addgene', cn: 'Addgene 质粒库', def_en: 'A non-profit plasmid repository holding ~100,000 reagents; researchers deposit published constructs and others order them for shipping cost.', def_cn: '非营利质粒库，收藏约 10 万种试剂；研究者存入已发表的构建体，其他人按邮费成本订购。' },
    { en: 'Clone repository', cn: '克隆资源库', def_en: 'A curated collection of plasmids or genes available to order, avoiding the need to build a construct from scratch.', def_cn: '经过整理、可供订购的质粒或基因收藏库，让你不必从零构建。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Roughly how many reagents does Addgene hold, and what do you typically pay?',
      q_cn: 'Addgene 大约有多少种试剂？通常需要付多少钱？',
      options: ['~1,000 reagents, free of charge', '~100,000 reagents, roughly $80 per clone covering shipping and handling', '~10,000 reagents, each priced at the full commercial rate set by the depositing lab', '~1,000,000 reagents, available only to labs holding a subscription'],
      answer: 1,
      why_en: 'Around 100,000 reagents; the fee is essentially shipping and handling rather than a commercial price.',
      why_cn: '约 10 万种试剂；费用基本上是邮费和手续费，而不是商业定价。' },
    { type: 'mcq',
      q_en: 'Why is a published author in principle obligated to send you their clone?',
      q_cn: '为什么已发表论文的作者原则上有义务把克隆寄给你？',
      options: ['It is required by national funding law', 'It is a condition of publishing in most journals', 'Addgene enforces it contractually', 'There is no such obligation — it is purely a courtesy'],
      answer: 1,
      why_en: 'Most journals make material sharing a condition of publication. It costs you an email and is by far the cheapest route to a construct.',
      why_cn: '大多数期刊把材料共享作为发表条件。你只需要花一封邮件，这是拿到构建体最便宜的途径。' },
    { type: 'mcq',
      q_en: 'What development work does obtaining an existing clone let you skip?',
      q_cn: '拿到一个现成的克隆可以让你跳过哪些开发工作？',
      options: ['Only the cloning step, everything downstream still has to be developed', 'Cloning, sequencing, expression-host optimisation and purification development', 'Only sequencing and purification, the cloning must still be repeated', 'Nothing at all, since every step has to be redeveloped from scratch'],
      answer: 1,
      why_en: 'All four, which is often months of work. You should still sequence-verify what arrives, but the optimisation has been done.',
      why_cn: '这四项全部，通常是好几个月的工作。收到后你仍然应该测序验证，但优化工作已经有人做过了。' },
    { type: 'short',
      q_en: 'List the DNA-sourcing routes in order of increasing cost, and say what determines when you must move to the next one.',
      q_cn: '按成本从低到高列出获取 DNA 的途径，并说明什么情况下必须换到下一种。',
      accept: ['literature', 'ask', 'repository', 'Addgene', 'RT-PCR', 'synthesis'],
      answer_en: 'First, a literature search plus a polite email — nearly free, and works if somebody has published the clone. Second, a repository such as Addgene, around eighty dollars, if the construct was deposited. Third, RT-PCR from mRNA, which you need when the exact sequence is unknown or nobody has cloned it. Fourth, gene synthesis, the most expensive, but it gives you a defined, sequence-verified, codon-optimised construct with whatever restriction sites you specify.',
      answer_cn: '第一，查文献加一封礼貌的邮件——几乎免费，前提是有人发表过这个克隆。第二，Addgene 这类资源库，约 80 美元，前提是构建体被存进去了。第三，从 mRNA 做 RT-PCR，当你不知道确切序列、或者没人克隆过时就得走这条路。第四，基因合成，最贵，但你能得到一个序列确定、100% 验证过、密码子优化过、还带着你指定的限制酶位点的构建体。' }
  ],
  oral: {
    q_en: 'You need DNA encoding a protein you want to engineer. What are your options?',
    q_cn: '你需要一段编码目标蛋白的 DNA，有哪些选择？',
    model_en: 'Four routes, and it is worth taking them cheapest first. The first is a literature search — somebody may already have cloned and expressed the protein. If so, write to the lab and ask for the DNA; in principle they are obligated to send it, because material sharing is a condition of publishing in most journals. That saves you cloning, sequencing, expression-host optimisation and purification development, which is often months of work. The second is a clone repository. Addgene is the main one, a non-profit holding around a hundred thousand reagents where you mostly pay shipping and handling, roughly eighty dollars a clone; there is also the European Plasmid Repository. The third is RT-PCR, which you need when the exact sequence is unknown. And the fourth is gene synthesis, which is the most expensive but gives you complete control over the sequence.',
    checklist: ['Take the routes cheapest-first', 'Literature search — has it been done?', 'Ask the authors — obligated as a publishing condition', 'What you save: cloning, sequencing, host optimisation, purification', 'Addgene — ~100,000 reagents, ~$80', 'European Plasmid Repository as an alternative', 'RT-PCR and gene synthesis as the paid fallbacks']
  }
},

{
  id: '1-4-2',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.4.2',
  enTitle: 'RT-PCR and the intron argument',
  cnTitle: 'RT-PCR 与内含子论证',
  slides: 'L1 s.24',
  coverage: 'full',
  coverageNote: 'The slide calls RT-PCR "old-fashioned but still widely used" and notes it is indispensable when you do not know the exact sequence. The intron reasoning is the mechanism block — it is a classic oral question and worth having word-perfect.',
  summary: {
    en: 'RT-PCR is old-fashioned but still widely used, and it is indispensable when you do not know the exact sequence of your target. The reason it matters more generally is the intron argument: eukaryotic genomic DNA contains introns, E. coli cannot splice, so a gene PCR-amplified from genomic DNA and expressed in bacteria gives nonsense. Starting from mature spliced mRNA and reverse-transcribing it gives cDNA that is intron-free by construction.',
    cn: 'RT-PCR 是「老办法」但仍然广泛使用，而且在你**不知道目标确切序列**时不可替代。它更普遍的重要性在于内含子论证：真核基因组 DNA 含有内含子，大肠杆菌不会剪接，所以从基因组 DNA 扩增出来的基因放进细菌表达就是一堆乱码。从成熟的（已剪接的）mRNA 出发做逆转录，得到的 cDNA **在构造上就不含内含子**。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.24', src: 'img/figures/L1_s24_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '真核基因组 DNA 里有**内含子**，而细菌**不会剪接**——所以直接从基因组扩出来的真核基因，放进 E. coli 表达出来是废的。\n\n' +
            '从**成熟 mRNA** 逆转录得到的 cDNA **天生就不含内含子**，这才是 RT-PCR 在这门课里的位置。',
  skipIt: 'AMV、M-MuLV 这些逆转录酶的来源病毒名字属于第 1-5-2 节的目录内容，这一节不用背。老师在第 2 讲开头给第 1 讲做 RECAP 时，Sources of DNA 里明确写了 Reverse Transcriptase-PCR (RT-PCR)——**这一节本身是被点名的**，别跳过。',
  explain: [
    {
      q: '内含子留在里面，到底会出什么事？',
      a: '不是「多带了一段没用的」这么轻描淡写。**是阅读框整个乱掉。**\n\n' +
         '真核细胞的流程是：基因组 DNA 转录成前体 RNA → **剪接体（spliceosome）把内含子剪掉、把外显子接起来** → 成熟 mRNA → 翻译。内含子从来没被翻译过。\n\n' +
         'E. coli **没有剪接体**。它拿到这条 RNA，会老老实实从头读到尾，**把内含子当成编码序列一起翻译**。\n\n' +
         '内含子的长度基本上不是 3 的倍数，所以从内含子开始，**后面所有密码子都错位了**；而且内含子序列没有任何避开终止密码子的压力，往往读不了多远就撞上一个 TAA/TAG/TGA。\n\n' +
         '结果就是：一段前面正确、后面乱码、然后戛然而止的短肽。**不是活性低，是根本不是那个蛋白。**',
      takeaway: '细菌没有剪接体 → 内含子被当成编码序列读 → 移码 + 提前终止。'
    },
    {
      q: 'cDNA 是个什么东西？',
      trace: {
        what: 'complementary DNA，互补 DNA。**以 RNA 为模板、反着抄回来的 DNA。**注意方向：平时是 DNA → RNA，这里是 RNA → DNA，所以叫「逆」转录。',
        from: '干这件事的酶叫**逆转录酶（reverse transcriptase）**，来自逆转录病毒——它们的生活方式本来就是把自己的 RNA 基因组抄成 DNA 塞进宿主基因组。人类只是把这个酶借来用。',
        to: '关键结论：因为模板用的是**成熟 mRNA**，而内含子在成为成熟 mRNA 之前就已经被剪掉了，所以 **cDNA 不含内含子这件事是「构造上必然」，不是运气好**。这正是幻灯片那句 intron-free by construction 的意思。',
        family: '跟它对照着记的是 genomic DNA（含内含子、含启动子和调控区）。把一个细胞里所有 mRNA 都逆转录一遍存起来，就是 cDNA library。'
      },
      takeaway: 'cDNA = 从成熟 mRNA 抄回来的 DNA。内含子早就被剪掉了，所以它天生干净。'
    },
    {
      q: '既然基因合成什么都能做，RT-PCR 为什么还没被淘汰？',
      a: '因为**合成的前提是你已经知道序列**。你得先能把序列打进订购页面，人家才能给你做。\n\n' +
         'RT-PCR 不需要。只要你手里有细胞或组织，有一对能结合上去的引物（哪怕是根据同源物设计的简并引物），你就能把那条转录本钓出来——**然后再去测它的序列**。\n\n' +
         '所以两条路的适用场合是反的：**知道序列 → 合成最省事；不知道序列 → 只能 RT-PCR**。幻灯片写 indispensable when you do not know exact sequence，说的就是这个。\n\n' +
         '顺带一提，RT-PCR 还有一个合成给不了的东西：它告诉你**这个基因在这个组织、这个时刻确实被表达了**。cDNA 里出现的，就是当时正在转录的。',
      takeaway: '合成要先知道序列，RT-PCR 不用。这就是它没被淘汰的全部理由。'
    }
  ],
  points: [
    { term: 'Status', en: '"Old-fashioned" but still widely used.', cn: '定位：「老办法」，但仍然广泛使用。' },
    { term: 'When it is indispensable', en: 'When you do not know the exact sequence of your target. Synthesis requires a sequence to order; RT-PCR does not.', cn: '什么时候不可替代：当你不知道目标的确切序列时。基因合成需要有序列才能下单，RT-PCR 不需要。' },
    { term: 'The intron problem', en: 'Eukaryotic genomic DNA contains introns. If you PCR the gene from genomic DNA and express it in E. coli, the bacterium cannot splice — you get a nonsense product.', cn: '内含子问题：真核基因组 DNA 含有内含子。如果你从基因组 DNA 扩增基因再放到大肠杆菌里表达，细菌**不会剪接**——你得到的是无意义的产物。' },
    { term: 'The solution', en: 'Start from mature (spliced) mRNA, reverse-transcribe it to cDNA, and clone that. The cDNA is intron-free by construction, not by luck.', cn: '解决办法：从成熟的（已剪接的）mRNA 出发，逆转录成 cDNA，克隆那个。cDNA **在构造上**就不含内含子，不是碰运气。' },
    { term: 'Classic oral question', en: '"Why can a eukaryotic gene not simply be PCR-amplified from genomic DNA and expressed in E. coli?" The answer is introns — prokaryotes have no spliceosome.', cn: '经典口试题：「为什么真核基因不能直接从基因组 DNA 扩增后放进大肠杆菌表达？」答案就是内含子——原核生物没有剪接体（spliceosome）。' }
  ],
  terms: [
    { en: 'RT-PCR', cn: '逆转录 PCR', def_en: 'Reverse transcription of RNA to cDNA followed by PCR. Indispensable when the exact target sequence is unknown.', def_cn: '先把 RNA 逆转录成 cDNA，再做 PCR。在不知道目标确切序列时不可替代。' },
    { en: 'cDNA', cn: '互补 DNA', def_en: 'DNA reverse-transcribed from mature mRNA, and therefore intron-free by construction.', def_cn: '从成熟 mRNA 逆转录得到的 DNA，因而在构造上不含内含子。' },
    { en: 'Intron', cn: '内含子', def_en: 'A non-coding sequence removed from pre-mRNA by splicing. Present in eukaryotic genomic DNA; prokaryotes cannot remove them.', def_cn: '前体 mRNA 中通过剪接被去除的非编码序列。存在于真核基因组 DNA 中；原核生物无法去除它们。' },
    { en: 'Spliceosome', cn: '剪接体', def_en: 'The eukaryotic RNA–protein machine that removes introns. Prokaryotes do not have one, which is the whole reason cDNA is needed.', def_cn: '真核细胞中去除内含子的 RNA-蛋白复合机器。原核生物没有它——这正是需要 cDNA 的全部原因。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can a eukaryotic gene not simply be PCR-amplified from genomic DNA and expressed in E. coli?',
      q_cn: '为什么真核基因不能直接从基因组 DNA 扩增后在大肠杆菌中表达？',
      options: ['Bacterial RNA polymerase cannot recognise a eukaryotic promoter and so never starts transcription', 'Genomic DNA contains introns and E. coli has no spliceosome, so the product is nonsense', 'The gene would be far too long to fit into a bacterial plasmid', 'Eukaryotic codons cannot be read by bacterial ribosomes, which use a different genetic code'],
      answer: 1,
      optionRefs: { 3: '1-4-3' },
      optionNotes: {
        0: { en: 'The statement is true but it is not the obstacle here. In an expression construct you clone only the coding sequence and put it behind a bacterial or T7 promoter, so the gene\'s own eukaryotic promoter is never used. What you cannot supply is a spliceosome.', cn: '这句话本身没错，但不是这里的问题。做表达构建时你只克隆编码序列，把它接在细菌自己的或 T7 promoter 后面，基因原本的真核 promoter 根本用不上。你补不上的那样东西是 spliceosome。' }
      },
      why_en: 'Introns are the answer. Prokaryotes have no splicing machinery, so the unspliced transcript is translated as garbage. The fix is to start from mature mRNA and make cDNA.',
      why_cn: '答案是内含子。原核生物没有剪接机器，所以未剪接的转录本翻译出来是乱码。解决办法是从成熟 mRNA 出发做 cDNA。' },
    { type: 'mcq',
      q_en: 'In what situation is RT-PCR indispensable rather than merely old-fashioned?',
      q_cn: '在什么情况下 RT-PCR 不只是「老办法」，而是不可替代？',
      options: ['When the protein is toxic to the host and cannot be cloned directly', 'When you do not know the exact sequence of your target', 'When the gene exceeds 8 kbp', 'When you need the sequence codon-optimised for your expression host'],
      answer: 1,
      optionRefs: { 2: '1-4-3', 3: '1-4-3' },
      why_en: 'Gene synthesis needs a sequence to order. If you do not have one, RT-PCR from the source organism\'s mRNA is how you get the coding sequence at all.',
      why_cn: '基因合成需要有序列才能下单。如果你没有序列，从来源生物的 mRNA 做 RT-PCR 才是拿到编码序列的唯一办法。' },
    { type: 'mcq',
      q_en: 'Why is cDNA described as "intron-free by construction"?',
      q_cn: '为什么说 cDNA「在构造上」就不含内含子？',
      options: ['Reverse transcriptase actively excises the introns as it copies the transcript into DNA', 'It is copied from mature mRNA, from which the cell has already removed the introns', 'The PCR primers are designed to skip the intronic regions during amplification', 'Introns are degraded by RNase H during the reverse-transcription reaction'],
      answer: 1,
      optionRefs: { 3: '1-5-3' },
      optionNotes: {
        0: { en: 'This credits the enzyme with work the cell already did. Splicing is performed by the spliceosome in the nucleus, before mature mRNA exists; reverse transcriptase copies faithfully whatever RNA it is handed. That is what by construction means — the intron removal is inherited, not performed.', cn: '这是把细胞早就做完的事记在了酶头上。剪接由细胞核里的 spliceosome 完成，发生在成熟 mRNA 出现之前；reverse transcriptase 只是忠实照抄给它的那条 RNA。这正是 by construction 的意思——不含内含子是继承来的，不是它做的。' }
      },
      why_en: 'The cell did the splicing before you started. Reverse transcriptase simply copies whatever mRNA it is given — the intron removal is inherited, not performed.',
      why_cn: '剪接是细胞在你动手之前就做完的。逆转录酶只是照抄给它的 mRNA——内含子的去除是**继承来的**，不是逆转录酶做的。' },
    { type: 'short',
      q_en: 'Explain the intron argument and how RT-PCR resolves it.',
      q_cn: '解释内含子论证，以及 RT-PCR 如何解决它。',
      accept: ['intron', 'splice', 'spliceosome', 'mRNA', 'cDNA', 'E. coli'],
      answer_en: 'Eukaryotic genomic DNA contains introns, which the eukaryotic cell removes by splicing before translation. Prokaryotes have no spliceosome, so if you PCR a eukaryotic gene straight out of genomic DNA and express it in E. coli, the introns are transcribed and translated and the product is nonsense. RT-PCR avoids this by starting from the mature, already-spliced mRNA and reverse-transcribing it into cDNA. The cDNA is intron-free by construction, because the cell did the splicing before you started.',
      answer_cn: '真核基因组 DNA 含有内含子，真核细胞在翻译前通过剪接把它们去掉。原核生物没有剪接体，所以如果你直接从基因组 DNA 扩增一个真核基因、放到大肠杆菌里表达，内含子会被一并转录翻译，产物是乱码。RT-PCR 从**成熟的、已经剪接过的 mRNA** 出发，逆转录成 cDNA，就避开了这个问题。cDNA 在构造上就不含内含子，因为剪接是细胞在你动手之前完成的。' }
  ],
  oral: {
    q_en: 'What is RT-PCR used for in this context, and why is the intron argument important?',
    q_cn: 'RT-PCR 在这里用来做什么？为什么内含子论证很重要？',
    model_en: 'RT-PCR is described as old-fashioned but it is still widely used, and it is indispensable in one specific situation: when you do not know the exact sequence of your target. Gene synthesis needs a sequence you can type into an order form, whereas RT-PCR only needs the source tissue. The more important reason it matters is the intron argument. Eukaryotic genomic DNA contains introns, which the eukaryotic cell removes by splicing. Prokaryotes have no spliceosome. So if you amplify a eukaryotic gene directly from genomic DNA and express it in E. coli, the introns are transcribed and translated along with the exons, and the product is nonsense. RT-PCR solves this by starting from mature, already-spliced mRNA and reverse-transcribing it into cDNA. The cDNA is intron-free by construction — the cell did the splicing before you touched it. This is a classic exam question and the one-line answer is: introns, because prokaryotes have no spliceosome.',
    checklist: ['Old-fashioned but still widely used', 'Indispensable when the exact sequence is unknown', 'Eukaryotic genomic DNA contains introns', 'E. coli has no spliceosome', 'Direct genomic PCR → nonsense product in bacteria', 'Start from mature mRNA → reverse transcribe → cDNA', 'cDNA is intron-free by construction']
  }
},

{
  id: '1-4-3',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.4.3',
  enTitle: 'Gene synthesis and codon optimisation',
  cnTitle: '基因合成与密码子优化',
  slides: 'L1 s.25–26',
  coverage: 'full',
  coverageNote: 'The pros/cons table, providers and the two service tiers are on the slides. What codon optimisation actually changes — and the important nuance that naive optimisation is not always best — is beyond the slides but makes the difference between a recited and a discussed answer.',
  summary: {
    en: 'Gene synthesis gives you virtually any gene, defined down to the restriction sites and overhangs you specify, 100% sequence verified, and codon-optimised for your expression host — for a price, and typically under 8 kbp. Two service tiers exist: cloned sequence-verified genes, which are more expensive and ready to use, and cheaper DNA strings that are not 100% correct and must be sequenced yourself. Codon optimisation exploits the degeneracy of the genetic code to swap rare codons for abundant ones without changing the protein.',
    cn: '基因合成能给你几乎任何基因，限制酶位点和黏性末端都按你的要求定义，100% 序列验证，并针对你的表达宿主做密码子优化——代价是钱，而且通常在 8 kbp 以内。有两档服务：已克隆、序列验证过的基因，更贵但拿来即用；以及更便宜的 DNA 片段（strings），**不保证 100% 正确**，你得自己测序。密码子优化利用遗传密码的简并性，把稀有密码子换成常用密码子，而不改变蛋白序列。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L1 s.25', src: 'img/figures/L1_s25_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '密码子优化之所以可能，唯一的理由是**遗传密码是简并的**——换同义密码子，蛋白序列一个字母都不变。',
  skipIt: 'GenScript / ThermoFisher / IDT 这几家供应商的名字、8 kbp 这个上限、以及密码子频率表的网址，不用背。RECAP 里写的是 gene synthesis、codon degeneration 这两个概念，没有任何公司名或数字。',
  explain: [
    {
      q: '「简并性（degeneracy）」到底是什么意思？',
      trace: {
        what: '**一个氨基酸对应好几个密码子**这件事。密码子有 64 个，要编码的东西只有 20 种氨基酸加一个终止信号——数量对不上，所以多数氨基酸分到了不止一个密码子。',
        from: '这是遗传密码本身的冗余，不是谁设计的。同一个氨基酸的几个密码子通常只差第三位碱基（所谓 wobble 位置）。',
        to: '**整个密码子优化就架在这一条上**：既然 GGT / GGC / GGA / GGG 都编码甘氨酸，那我换哪个都行——DNA 序列变了，**蛋白一个字母没变**。所谓优化是「无声（silent）」的，指的就是这个。',
        family: '相关概念：wobble（摆动配对）、tRNA 库、codon usage bias（密码子偏好）。物种不同，偏好不同，而且它的 tRNA 数量正好跟偏好匹配。',
        numbers: '64 个密码子 / 20 种氨基酸。Leu、Ser、Arg 各有 6 个密码子；Met 和 Trp 各只有 1 个——**这两个没得优化**。'
      },
      takeaway: '64 对 20，所以有富余。有富余，才能换密码子而不动蛋白。'
    },
    {
      q: '不优化会出什么问题？',
      a: '问题出在**tRNA 的库存上**。\n\n' +
         '每种生物偏好用哪些同义密码子，是长期形成的，而且它体内**对应的 tRNA 数量正好跟这个偏好匹配**：常用密码子对应的 tRNA 多，罕用密码子对应的 tRNA 少。\n\n' +
         '现在你把一条人的基因原封不动放进 E. coli。这条序列里有些密码子在人那里很常用，**在 E. coli 里却是冷门货**。核糖体翻译到那里，得**停下来等**一个稀缺的 tRNA 漂过来。\n\n' +
         '停顿带来三个后果，答题时最好都提：\n\n' +
         '**产量低**——核糖体大量时间花在等待上。\n\n' +
         '**截短产物**——停太久，核糖体干脆脱落，得到半截蛋白。\n\n' +
         '**移码**——停顿时核糖体在 mRNA 上「滑」一格的概率上升，后面就全错了。',
      takeaway: '罕用密码子 = 稀缺 tRNA = 核糖体停顿 → 产量低、截短、移码。'
    },
    {
      q: '那为什么不干脆「全部换成最常用的密码子」？',
      a: '这一条最反直觉，也最容易在口试里加分：**天真的全量优化不一定最好。**\n\n' +
         '**第一，有些停顿是故意的。**蛋白是一边被合成一边折叠的（co-translational folding，共翻译折叠）。某些位置的罕用密码子造成的短暂停顿，恰好给了前面那一段**先折好再往下走**的时间。你把它们全换成飞快的密码子，蛋白出来得更快，却可能折得更差。\n\n' +
         '**第二，序列上还有别的东西要躲：**\n\n' +
         '换密码子会顺手改变序列，可能**无意中造出一个限制酶位点**——而你后面正要用那个酶来克隆。\n\n' +
         '核糖体结合位点附近如果形成很强的 **mRNA 二级结构**，核糖体上不去，翻译起始就被卡住。\n\n' +
         '还有**重复序列**：太多重复会让 DNA 化学合成这一步本身就失败。\n\n' +
         '所以优化软件其实是在同时满足好几个约束，不是简单查一张频率表。',
      takeaway: '优化不是「查表取最高频」。停顿有用、位点要躲、二级结构要防。'
    },
    {
      q: '两档服务（cloned gene 和 DNA string）该怎么选？',
      a: '差别有两条，而且**它们互相关联**。\n\n' +
         '**cloned, sequence-verified gene**：已经装进载体了，而且 **100% 测序验证**。贵，但拿到就能用。\n\n' +
         '**DNA string / fragment**：一段**线性双链 DNA**，没有载体。便宜，但供应商**不保证 100% 正确**——测序验证这一步得你自己做。\n\n' +
         '选哪个，取决于你后面打算怎么克隆。注意 string 是**线性双链、末端可以按你的要求定义**——这正好是第 2 讲里 Gibson、LIC、In-Fusion 这些方法要的输入形式。而如果你只是想赶紧表达一下看看，cloned 那一档省事得多。\n\n' +
         '还有一句值得记：幻灯片说 virtually any gene available，但明确排除**毒素和生物战剂**——供应商会做序列筛查，这类订单不接。',
      takeaway: 'cloned = 贵但验证过、拿来即用；string = 便宜的线性双链，自己测序，正好喂给 Gibson/LIC。'
    }
  ],
  points: [
    { term: 'Pro — availability', en: 'Virtually any gene is available. The exception is toxins and biowarfare agents, which providers screen for and will not synthesise.', cn: '优点——可得性：几乎任何基因都能做。例外是毒素和生物战剂，供应商会筛查并拒绝合成。' },
    { term: 'Pro — defined sequence', en: 'You specify the restriction sites and overhangs you want, so the fragment arrives ready for your chosen cloning method.', cn: '优点——序列确定：你可以指定想要的限制酶位点和黏性末端，片段到手就适配你选定的克隆方法。' },
    { term: 'Pro — verification', en: '100% sequence verified (in the cloned tier).', cn: '优点——验证：100% 序列验证（限已克隆的那一档服务）。' },
    { term: 'Pro — codon optimisation', en: 'The sequence can be codon-optimised for your expression host before it is ever made.', cn: '优点——密码子优化：序列在合成之前就能针对你的表达宿主做密码子优化。' },
    { term: 'Pro — size', en: 'In principle unlimited size, though typically under 8 kbp in practice.', cn: '优点——长度：原则上无长度限制，不过实践中通常在 8 kbp 以内。' },
    { term: 'Con — price', en: 'Price is the single stated disadvantage.', cn: '缺点——价格：这是幻灯片列出的唯一缺点。' },
    { term: 'Providers', en: 'GenScript, ThermoFisher, IDT.', cn: '供应商：GenScript、ThermoFisher、IDT。' },
    { term: 'Tier 1 — cloned genes', en: 'Cloned, sequence-verified genes. More expensive, ready to use.', cn: '第一档——已克隆基因：已克隆、序列验证过。更贵，拿来即用。' },
    { term: 'Tier 2 — DNA strings', en: 'DNA strings or fragments — double-stranded linear DNA. Cheaper, but not 100% correct, so you must sequence them yourself.', cn: '第二档——DNA 片段（strings）：双链线性 DNA。更便宜，但**不保证 100% 正确**，必须自己测序确认。' },
    { term: 'Workflow', en: 'Back-translate the protein sequence → codon-optimise → order. Codon usage tables are at genscript.com/tools/codon-frequency-table.', cn: '流程：把蛋白序列反向翻译 → 密码子优化 → 下单。密码子使用频率表见 genscript.com/tools/codon-frequency-table。' }
  ],
  beyondPoints: [
    { term: 'Why optimisation is possible at all', en: 'The genetic code is degenerate — most amino acids have several codons. Different organisms prefer different synonymous codons, and their tRNA pools match that preference.', cn: '为什么优化是可能的：遗传密码是**简并的**——大多数氨基酸有多个密码子。不同生物偏好不同的同义密码子，而它们的 tRNA 库与这种偏好相匹配。' },
    { term: 'What goes wrong without it', en: 'A human gene expressed in E. coli may contain codons that are rare in E. coli. The ribosome stalls waiting for scarce tRNAs, giving low yield, truncations and frameshifting.', cn: '不优化会出什么问题：人源基因在大肠杆菌里表达时可能含有大肠杆菌罕用的密码子。核糖体会停下来等稀缺的 tRNA，结果是产量低、截短产物和移码。' },
    { term: 'Why it is silent', en: 'Optimisation swaps rare codons for abundant ones without changing the protein sequence. This is only possible because the change is silent at the amino-acid level.', cn: '为什么是沉默的：优化把稀有密码子换成常用密码子，**不改变蛋白序列**。这只有在氨基酸层面是沉默突变时才可能。' },
    { term: 'The nuance worth having ready', en: 'Naive "use the most frequent codon everywhere" is not always best. Rare codons sometimes create deliberate translational pauses that help co-translational folding. Optimisers must also avoid introducing unwanted restriction sites, strong mRNA secondary structure near the ribosome binding site, and repeats that make synthesis fail.', cn: '值得准备的细致之处：天真地「到处用最高频密码子」并不总是最好。稀有密码子有时会制造**有意的翻译暂停**，帮助共翻译折叠。优化算法还必须避免引入不需要的限制酶位点、避免核糖体结合位点附近形成强 mRNA 二级结构、以及避免会让化学合成失败的重复序列。' }
  ],
  terms: [
    { en: 'Gene synthesis', cn: '基因合成', def_en: 'Chemically building a gene to a specified sequence rather than isolating it, allowing codon optimisation and designed restriction sites.', def_cn: '按指定序列化学合成一个基因，而不是去分离它；这样可以做密码子优化并设计好限制酶位点。' },
    { en: 'Codon degeneracy', cn: '密码子简并性', def_en: 'Most amino acids are encoded by more than one codon, which is what makes silent codon swaps possible.', def_cn: '大多数氨基酸由不止一个密码子编码——这正是沉默的密码子替换得以可能的原因。' },
    { en: 'Codon optimisation', cn: '密码子优化', def_en: 'Replacing rare codons with ones abundant in the expression host, without changing the encoded protein.', def_cn: '把稀有密码子替换成表达宿主中丰富的密码子，同时不改变编码的蛋白。' },
    { en: 'DNA string', cn: 'DNA 线性片段', def_en: 'A cheaper synthesis tier: double-stranded linear DNA that is not 100% sequence-guaranteed and must be verified by the user.', def_cn: '更便宜的一档合成服务：双链线性 DNA，不保证 100% 序列正确，需要用户自行验证。' },
    { en: 'Co-translational folding', cn: '共翻译折叠', def_en: 'Folding that occurs while the chain is still being synthesised; deliberate ribosome pauses at rare codons can assist it.', def_cn: '在肽链还在合成过程中就发生的折叠；稀有密码子处有意的核糖体暂停可以帮助它。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What does codon optimisation change, and what does it deliberately NOT change?',
      q_cn: '密码子优化改变了什么？又刻意**不**改变什么？',
      options: ['It changes the encoded protein sequence while leaving the overall length of the DNA unchanged', 'It changes which synonymous codons are used, but not the encoded amino-acid sequence', 'It changes the promoter driving the gene but not the coding sequence itself', 'It changes the tRNA pool of the host to match the gene'],
      answer: 1,
      optionRefs: { 3: '2-5' },
      why_en: 'It swaps rare codons for abundant ones. Because the swap is synonymous, the protein is identical — that silence is precisely what makes it legitimate.',
      why_cn: '它把稀有密码子换成常用密码子。因为替换是同义的，蛋白完全相同——这种「沉默」正是它站得住脚的原因。' },
    { type: 'mcq',
      q_en: 'What goes wrong when a human gene with E. coli-rare codons is expressed in E. coli?',
      q_cn: '当一个含有大肠杆菌罕用密码子的人源基因在大肠杆菌里表达时会出什么问题？',
      options: ['The wrong amino acid is inserted at each rare codon, so the protein misfolds', 'Ribosomes stall waiting for scarce tRNAs, truncating the product', 'The bacterial host silences the foreign gene by DNA methylation', 'Host RNA polymerase cannot initiate transcription on the rare codons'],
      answer: 1,
      optionNotes: {
        0: { en: 'Rare codons are synonymous codons: they specify exactly the same amino acid, so the protein sequence cannot come out wrong this way. What is scarce is the matching tRNA, so the cost is paid in speed — stalling, truncation, occasional frameshifts — not in amino-acid identity.', cn: '稀有密码子是同义密码子：编码的氨基酸完全一样，所以蛋白序列不会因为这个而出错。稀缺的是配套的 tRNA，代价付在速度上——核糖体停顿、产物截短、偶尔移码——而不是付在氨基酸种类上。' }
      },
      why_en: 'Codon usage bias is matched by tRNA abundance. Rare codons mean scarce tRNAs, and a stalled ribosome produces truncated or frameshifted product.',
      why_cn: '密码子使用偏好与 tRNA 丰度是匹配的。稀有密码子意味着 tRNA 稀缺，停滞的核糖体会产生截短或移码的产物。' },
    { type: 'mcq',
      q_en: 'Why is "use the most frequent codon everywhere" not always the best strategy?',
      q_cn: '为什么「到处都用最高频密码子」并不总是最佳策略？',
      options: ['The optimised gene becomes too long for a synthesis provider to make', 'Rare codons create translational pauses that assist co-translational folding', 'The most frequent codon in the host turns out to be a stop codon', 'Swapping synonymous codons would change the encoded protein sequence at every position that was altered'],
      answer: 1,
      why_en: 'Uniform optimisation can abolish pauses that help the nascent chain fold. Optimisers must also avoid new restriction sites, mRNA secondary structure near the RBS, and repeats that break synthesis.',
      why_cn: '一刀切的优化可能消除那些帮助新生肽链折叠的暂停。优化还必须避免产生新的限制酶位点、RBS 附近的 mRNA 二级结构，以及会让合成失败的重复序列。' },
    { type: 'short',
      q_en: 'Compare the two gene-synthesis service tiers and say when you would choose each.',
      q_cn: '比较基因合成的两档服务，说明什么时候该选哪一档。',
      accept: ['cloned', 'sequence verified', 'string', 'fragment', 'cheaper', 'sequence yourself'],
      answer_en: 'The first tier is cloned, sequence-verified genes: more expensive, but a hundred percent verified and ready to use straight away. The second tier is DNA strings or fragments — linear double-stranded DNA, cheaper, but not guaranteed a hundred percent correct, so you have to sequence them yourself. Choose the cloned tier when you want to start experiments immediately or the construct is going into something expensive downstream; choose strings when you are cost-constrained, ordering many variants, or would be sequencing anyway.',
      answer_cn: '第一档是已克隆、序列验证过的基因：更贵，但 100% 验证，拿到就能直接用。第二档是 DNA 线性片段（strings）——线性双链 DNA，更便宜，但不保证 100% 正确，你得自己测序。什么时候选哪档：想立刻开始实验、或者这个构建体后面要投入昂贵的下游实验时，选已克隆那档；预算紧张、要订很多个变体、或者反正都要测序时，选片段那档。' }
  ],
  oral: {
    q_en: 'Discuss gene synthesis as a DNA source, including what codon optimisation does.',
    q_cn: '讨论基因合成作为 DNA 来源，包括密码子优化的作用。',
    model_en: 'Gene synthesis makes virtually any gene available, with the exception of toxins and biowarfare agents which providers screen out. Its advantages are that you define the sequence completely — you specify the restriction sites and overhangs you want — it is a hundred percent sequence verified, it can be codon-optimised for your host before it is ever made, and size is in principle unlimited although in practice under about eight kilobases. The disadvantage is price. Providers are GenScript, ThermoFisher and IDT, and there are two tiers: cloned sequence-verified genes, which are more expensive and ready to use, and cheaper DNA strings which are not guaranteed correct and which you must sequence yourself. Codon optimisation exploits the degeneracy of the genetic code. Most amino acids have several codons, organisms prefer different synonymous ones, and their tRNA pools match that preference. A human gene in E. coli may contain codons that are rare there, so the ribosome stalls waiting for scarce tRNAs, giving low yield, truncations and frameshifting. Optimisation swaps rare codons for abundant ones without changing the protein — it is legitimate precisely because it is silent. One nuance worth adding: naive optimisation is not always best, because rare codons sometimes create deliberate pauses that help co-translational folding, and the optimiser also has to avoid creating unwanted restriction sites or strong mRNA structure near the ribosome binding site.',
    checklist: ['Virtually any gene, except toxins/biowarfare agents', 'You define restriction sites and overhangs', '100% sequence verified; codon-optimised; typically <8 kbp', 'Disadvantage: price', 'Two tiers: cloned verified vs cheaper unverified strings', 'Degeneracy makes synonymous swaps possible', 'Rare codons → ribosome stalls → low yield, truncation, frameshift', 'Nuance: pauses can aid folding; avoid new sites and mRNA structure']
  }
},

{
  id: '1-5-1',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.5.1',
  enTitle: 'DNA polymerases — Taq versus the proofreaders',
  cnTitle: 'DNA 聚合酶——Taq 与校对酶的对比',
  slides: 'L1 s.27–28',
  coverage: 'full',
  coverageNote: 'The mesophilic/thermostable tables are on the slides. The PCR cycle itself is NOT — slide 22 shows only "Kary Mullis (1985; Nobel Prize 1993)" over a figure, so the cycle parameters and primer rules are in the beyond-the-slides block. The Taq-vs-Pfu comparison is the single most likely question in this section.',
  summary: {
    en: 'All the enzymes in this toolbox were identified, and often engineered, from phages, viruses and bacteria. The polymerase question that gets asked is Taq versus Phusion/Pfu, and the key insight is that the three differences are not three facts but one: whether the enzyme has 3′→5′ proofreading exonuclease. Proofreading gives high fidelity AND blunt ends; no proofreading gives low fidelity AND a 3′-A overhang. The rule that follows is simple — if the product will be translated, use a proofreading enzyme.',
    cn: '这个工具箱里所有的酶都是从噬菌体、病毒和细菌中**发现**（并常常经过工程改造）的。聚合酶部分最常考的是 Taq 对比 Phusion/Pfu，关键在于：那三个差别不是三个知识点，而是同一个原因导出来的——酶有没有 3′→5′ 校对外切活性。有校对 → 高保真**且**平末端；没校对 → 低保真**且** 3′-A 突出。由此得到的规则很简单——产物如果最后要被翻译成蛋白，就用校对酶。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'Taq 和 Phusion/Pfu 的三个差别**不是三个知识点，是一个原因**：有没有 3′→5′ 校对活性。\n\n' +
            '由此得到的规则只有一句：**产物最后要被翻译成蛋白，就用校对酶。**',
  skipIt: 'NEB / TaKaRa / Qiagen 这一串供应商名字不用背。这是判断，不是老师的话——老师在第 2 讲开头给第 1 讲做 RECAP 时，Techniques 那一栏只写了 PCR、RT-PCR、Sanger sequencing 三个词，没有酶名也没有厂商。',
  explain: [
    {
      q: '「3′→5′ 外切」这几个符号到底在说什么？',
      trace: {
        what: '**一个方向 + 一种活性。**5′ 和 3′ 是 DNA 链两端的名字（按糖环上碳原子编号来的），一条链永远有一个 5′ 端和一个 3′ 端。「3′→5′ 外切」= 从 3′ 那一头开始，**一个一个往回啃**掉核苷酸。',
        from: '为什么是 3′ 端？因为聚合酶合成 DNA 的方向是 5′→3′，新碱基永远加在 3′ 端上。所以**刚刚接错的那个碱基，一定就在 3′ 端**——往回啃一个，正好啃掉它。',
        to: '所以「校对（proofreading）」的物理动作就是：**接错了 → 退一格 → 重接**。跟打字时按退格键完全一样。高保真就是这么来的，没有别的玄机。',
        family: '外切酶还有 5′→3′ 方向的（比如 T5 exonuclease，第 2 讲 Gibson 组装的主角）。跟外切酶相对的是内切酶（endonuclease），从中间切——限制酶就是内切酶。'
      },
      takeaway: '校对 = 退格键。因为新碱基加在 3′ 端，所以往回啃的方向必然是 3′→5′。'
    },
    {
      q: '为什么「没有校对」会让末端多出一个 A？这两件事有关系吗？',
      a: '有，而且这正是本节最值得记的那一层。\n\n' +
         'Taq 有一个附带的**末端转移酶活性**：合成到模板尽头之后，它会**不照模板**再往 3′ 端塞一个 A。这个 A 是凭空多出来的，所以两条链各多一个 A，就成了 **3′-A 突出末端**。\n\n' +
         '关键是下一句：**校对酶也会多加那个 A 吗？不重要——因为它自己会把它啃掉。**\n\n' +
         '3′→5′ 外切活性的判据是「这个碱基跟模板配得上吗」。多出来的那个 A 对面**没有模板碱基**，在校对酶眼里就是一个错误，于是被切掉。切干净了，末端就是**平的（blunt）**。\n\n' +
         '所以「Taq 给黏末端、Pfu 给平末端」**不是一条独立的性质，是校对活性的副产品**。三个差别（保真度、末端形状、用途）都从「有没有校对」这一个开关推出来。\n\n' +
         '而这个多出来的 A 后来还成了一个特性：第 2 讲的 **TA cloning** 就是专门利用它来配对的。**同一个「缺陷」，换个场合就是设计。**',
      takeaway: '多加的 A 在校对酶眼里是个错误，所以被啃掉 → 平末端。黏/平是校对的副产品。'
    },
    {
      q: '热启动（hot start）在解决什么问题？',
      trace: {
        what: '一种让聚合酶**在升温之前不干活**的做法。酶本身没变，是被临时堵住了。',
        from: '问题出在**配反应的那几分钟**。这时候管子是室温，引物有大把机会**歪歪扭扭地贴到不该贴的地方**，而 Taq 在室温下虽然慢，却不是完全不工作——它照样会去延伸这些错误配对，还会把两条引物互相延伸成引物二聚体。这些错误产物一旦生成，后面每一轮都会跟着被扩增。',
        to: '解法是往酶上挂一个**热不稳定的抑制剂**（抗体或适配体 aptamer）把活性位点堵住。第一步 95 °C 变性时，抑制剂被破坏，酶才被释放出来——**而此时温度很高，错误配对的引物早就掉光了**。',
        family: '同类思路还有化学修饰型热启动（可逆修饰活性位点）和物理隔离（用蜡把酶和反应体系分开）。共同点都是「推迟开工」。'
      },
      takeaway: '热启动 = 让酶在升温前干不了活，避开配反应时的非特异延伸和引物二聚体。'
    },
    {
      q: 'Klenow fragment 是怎么来的？（顺便：这里有个出入要注意）',
      a: '**DNA polymerase I** 是一个多面手：既能聚合，又带 **5′→3′** 和 **3′→5′** 两种外切活性。那个 5′→3′ 外切在细胞里有用（切除引物、切口平移），但在体外做很多反应时是**破坏性的**——它会把你想留下的那条链从前面啃掉。\n\n' +
         '**Klenow fragment 就是把 Pol I 切开、只留下大的那一块**，去掉带 5′→3′ 外切活性的 N 端结构域。名字里的 Large fragment 就是这个意思。\n\n' +
         '**这里有一处出入，值得知道：**幻灯片写的是 Klenow **两种外切活性都没有**（lacks both），本节的 points 忠实照抄了幻灯片。而大多数教科书和试剂厂商的说法是：经典 Klenow **保留 3′→5′ 校对活性**，只丢了 5′→3′；两种都没有的那个叫 **Klenow exo−**，是另一个产品。\n\n' +
         '**考试按老师的写法答**——这里记下来只是免得你日后看试剂目录时以为自己记错了。',
      takeaway: 'Klenow = Pol I 去掉 5′→3′ 外切的大片段。幻灯片和教科书在 3′→5′ 这一条上说法不一致，答题从老师。'
    },
    {
      q: '为什么规则是「要翻译的就用校对酶」，而不是「越准越好」？',
      a: '因为**错误的后果不对称**。\n\n' +
         '你做菌落 PCR、做诊断——那些产物**看完就扔**。里面有几个碱基错了不影响你判断「这条带在不在」。Taq 便宜、耐用、快，正合适。\n\n' +
         '但如果这段 PCR 产物要被克隆进载体、被表达成蛋白，那么**它会被永久固定下来**：一个错误的碱基进了你的构建体，之后每一次转化、每一次培养、每一批蛋白，都带着这个突变。\n\n' +
         '更糟的是 PCR 的放大特性：**越早出现的错误，被复制的代数越多**。第 3 轮出现的一个错误，到第 30 轮时已经占了产物的相当一部分——你测序时甚至可能直接读到它。\n\n' +
         '所以规则不是「保真度越高越好」，而是「**这个产物会不会被永久保留**」。会，就用校对酶；不会，Taq 足够。',
      takeaway: '看完就扔的用 Taq，要被克隆保存下来的用校对酶。判据是后果，不是精度本身。'
    }
  ],
  points: [
    { term: 'Where they come from', en: 'All identified, and often engineered, from phages, viruses and bacteria. Available from NEB, Clontech/TaKaRa, Thermo Fisher, Qiagen, Roche, Merck-Millipore — as stand-alone products or as more expensive ready-to-use kits.', cn: '来源：全部是从噬菌体、病毒和细菌中发现（并常经工程改造）的。供应商有 NEB、Clontech/TaKaRa、Thermo Fisher、Qiagen、Roche、Merck-Millipore——可以买单独的酶，也可以买更贵但省时间的即用型试剂盒。' },
    { term: 'T7 DNA polymerase', en: 'Mesophilic. Synthesises 5′→3′, requires template plus primer. No 5′→3′ exonuclease.', cn: 'T7 DNA 聚合酶：嗜温酶。5′→3′ 合成，需要模板加引物。**没有** 5′→3′ 外切活性。' },
    { term: 'DNA polymerase I', en: 'Mesophilic. A DNA-dependent DNA polymerase carrying BOTH 5′→3′ and 3′→5′ exonuclease activity.', cn: 'DNA 聚合酶 I：嗜温酶。DNA 依赖的 DNA 聚合酶，**同时**具有 5′→3′ 和 3′→5′ 外切活性。' },
    { term: 'Klenow fragment', en: 'The large fragment of Pol I: retains polymerase activity but lacks both exonuclease activities.', cn: 'Klenow 大片段：保留聚合酶活性，但**两种外切活性都没有**。' },
    { term: 'Thermostable polymerases', en: 'Isolated from thermophiles such as Thermus aquaticus; withstand ~100 °C for extended periods and have very low activity at 37 °C.', cn: '耐热聚合酶：分离自水生栖热菌等嗜热生物；能在约 100 °C 下长时间耐受，而在 37 °C 下活性很低。' },
    { term: 'Hot-start variants', en: 'Mixed with heat-labile inhibitors — aptamers or antibodies — that release the enzyme only after the initial denaturation step, preventing non-specific extension during setup.', cn: '热启动变体：与不耐热的抑制剂（适配体或抗体）混合，只有在最初的变性步骤之后才释放酶，避免在配液阶段发生非特异性延伸。' },
    { term: 'Taq polymerase', en: 'The workhorse. Lower fidelity, and it leaves 3′-A overhangs — which is exactly what makes TA cloning possible.', cn: 'Taq 聚合酶：主力酶。保真度较低，产物末端留 3′-A 突出——这正是 TA 克隆得以成立的原因。' },
    { term: 'Proofreading polymerases', en: 'Pfu from Pyrococcus furiosus, and Phusion — an engineered enzyme, a polymerase fused to a single-stranded-DNA-binding protein. High fidelity comes from 3′→5′ exonuclease activity, and they produce blunt ends.', cn: '校对聚合酶：来自激烈火球菌的 Pfu，以及 Phusion——一个工程改造的酶，即聚合酶融合了单链 DNA 结合蛋白。高保真来自 3′→5′ 外切活性，产物是**平末端**。' },
    { term: 'The three linked differences', en: 'Taq has no 3′→5′ exo, fidelity around 1 error per 10⁴–10⁵ nt, and leaves a 3′-A overhang; Pfu/Phusion have the exo, up to ~50× better fidelity, and leave blunt ends. Use Taq for colony PCR, diagnostics and TA cloning; use a proofreader for anything that will be expressed.', cn: '三个相互关联的差别：Taq 没有 3′→5′ 外切，保真度约每 10⁴–10⁵ 个核苷酸一个错误，末端留 3′-A 突出；Pfu/Phusion 有外切活性，保真度最多高约 50 倍，末端为平末端。Taq 用于菌落 PCR、诊断和 TA 克隆；凡是要表达的，都用校对酶。' },
    { term: 'The causal chain', en: 'These are not three independent facts. Proofreading removes mismatched bases (high fidelity) and also trims the extra terminal base (blunt ends). No proofreading leaves the mismatch (low fidelity) and lets terminal transferase activity add a non-templated A (sticky end). "Taq gives sticky ends, Pfu gives blunt ends" is a by-product of proofreading, not a separate property.', cn: '因果链：这不是三个互不相干的知识点。有校对 → 错配碱基被切掉（高保真），末端多余碱基也被修平（平末端）；没校对 → 错配留着（低保真），末端转移酶活性还会多加一个非模板的 A（黏末端）。「Taq 出黏末端、Pfu 出平末端」是校对活性的**副产物**，不是另一条独立性质。' },
    { term: 'The rule', en: 'If the PCR product will end up being translated into protein, use a proofreading polymerase. An unproofread error becomes a permanent mutation in your construct.', cn: '判断口诀：产物最后要翻译成蛋白的，一律用校对酶。PCR 引入的一个错配会**永久**留在你的构建体里。' }
  ],
  beyondPoints: [
    { term: 'The PCR cycle', en: 'Denaturation at ~95 °C for 15–30 s separates the strands. Annealing at ~50–65 °C for 15–30 s lets primers bind. Extension at 72 °C for ~15–60 s per kb lets the polymerase synthesise 5′→3′. Repeat 25–35 times.', cn: 'PCR 循环：变性，约 95 °C、15–30 秒，双链分开；退火，约 50–65 °C、15–30 秒，引物结合；延伸，72 °C、每 kb 约 15–60 秒，聚合酶 5′→3′ 合成。重复 25–35 次。' },
    { term: 'Setting the annealing temperature', en: 'Set from the primer Tm, typically Tm − 5 °C. Too low gives non-specific products; too high gives no product at all.', cn: '退火温度怎么定：根据引物的 Tm 来定，通常是 Tm − 5 °C。**太低会出非特异产物，太高则完全没有产物。**' },
    { term: 'Amplification arithmetic', en: 'Product grows as 2ⁿ, so 30 cycles is roughly 10⁹-fold amplification in theory. Only from cycle 3 onward do you get the discrete "target-length" product defined by both primers.', cn: '扩增的算术：产物按 2ⁿ 增长，所以 30 个循环理论上约 10⁹ 倍扩增。**只有从第 3 个循环开始**才出现由两条引物共同界定的、长度确定的目标产物。' },
    { term: 'Primer design rules of thumb', en: 'About 18–25 nt; Tm of the two primers within 5 °C of each other; GC content 40–60%; end with a G or C (the "GC clamp") for a stable 3′ end; avoid self-complementarity that gives hairpins, and avoid primer-dimers. These reappear in the Lecture 2 cloning exercise.', cn: '引物设计经验规则：长约 18–25 nt；两条引物的 Tm 相差不超过 5 °C；GC 含量 40–60%；3′ 末端以 G 或 C 结尾（「GC 钳」）以保证末端稳定；避免自身互补形成发夹，避免引物二聚体。这些规则会在第 2 讲的克隆练习里再次用到。' }
  ],
  terms: [
    { en: 'Proofreading (3′→5′ exonuclease)', cn: '校对活性', def_en: 'The activity that excises a misincorporated base, giving high fidelity; it also trims terminal overhangs, which is why proofreading enzymes give blunt ends.', def_cn: '切除错误掺入碱基的活性，带来高保真；它同时也修平末端多余碱基，这就是校对酶产生平末端的原因。' },
    { en: 'Taq polymerase', cn: 'Taq 聚合酶', def_en: 'The thermostable workhorse from Thermus aquaticus. No proofreading, so low fidelity, and its terminal transferase activity adds a non-templated 3′-A.', def_cn: '来自水生栖热菌的耐热主力酶。没有校对活性，所以保真度低；其末端转移酶活性会多加一个非模板的 3′-A。' },
    { en: 'Phusion', cn: 'Phusion 聚合酶', def_en: 'An engineered high-fidelity polymerase — a polymerase fused to a single-stranded-DNA-binding protein. Proofreads, gives blunt ends.', def_cn: '工程改造的高保真聚合酶——聚合酶与单链 DNA 结合蛋白融合。有校对活性，产生平末端。' },
    { en: 'Hot start', cn: '热启动', def_en: 'A polymerase held inactive by a heat-labile aptamer or antibody until the first denaturation step, preventing non-specific extension during reaction setup.', def_cn: '聚合酶被不耐热的适配体或抗体封住活性，直到第一次变性步骤才释放，避免配液阶段的非特异性延伸。' },
    { en: 'Klenow fragment', cn: 'Klenow 大片段', def_en: 'The large fragment of DNA polymerase I, retaining polymerase activity but lacking both exonuclease activities.', def_cn: 'DNA 聚合酶 I 的大片段，保留聚合酶活性但缺失两种外切活性。' },
    { en: 'GC clamp', cn: 'GC 钳', def_en: 'A G or C at a primer\'s 3′ end, giving a more stable terminal base pair and better priming.', def_cn: '引物 3′ 末端的 G 或 C，使末端碱基对更稳定，起始延伸更好。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Taq leaves 3′-A overhangs while Pfu leaves blunt ends. Why are these two facts causally linked to fidelity?',
      q_cn: 'Taq 留 3′-A 突出而 Pfu 留平末端。为什么这两件事和保真度是因果相关的？',
      options: ['They are unrelated enzyme properties that merely happen to co-occur', 'Both follow from one switch: the 3′→5′ proofreading exonuclease Pfu has and Taq lacks', 'Both follow from the different optimal extension temperatures of the two enzymes', 'Both follow from Taq being thermostable while Pfu is not heat stable and has to be added again after every cycle'],
      answer: 1,
      optionNotes: {
        3: { en: 'Pfu is thermostable too — it comes from Pyrococcus furiosus as Taq comes from Thermus aquaticus. Thermostability is the precondition for using an enzyme in PCR at all; both have it, so it cannot explain any difference between them. The one switch that does is 3′→5′ proofreading.', cn: 'Pfu 同样是耐热酶——它来自 Pyrococcus furiosus，正如 Taq 来自 Thermus aquaticus。耐热是一个酶能用在 PCR 里的前提，两者都有，所以它解释不了两者之间的任何差别。真正的那个开关是 3′→5′ 校对活性。' }
      },
      why_en: 'One cause, three consequences. Without proofreading the mismatch stays (low fidelity) and terminal transferase adds an A (sticky end); with it, both are removed.',
      why_cn: '一个原因，三个后果。没有校对活性时错配留着（低保真），末端转移酶还加一个 A（黏末端）；有校对活性时两者都被去掉。' },
    { type: 'mcq',
      q_en: 'You are amplifying a gene that will be cloned into an expression vector and translated. Which polymerase?',
      q_cn: '你要扩增一个将要克隆进表达载体并被翻译的基因。用哪种聚合酶？',
      options: ['Taq, because it is cheaper and gives sticky ends for easy ligation', 'A proofreading polymerase such as Pfu or Phusion', 'Klenow fragment, because it lacks exonuclease activity', 'T7 DNA polymerase, because it has no 5′→3′ exonuclease'],
      answer: 1,
      optionRefs: { 0: '1-16' },
      optionNotes: {
        2: { en: 'The reason given is the reason to avoid it: proofreading is an exonuclease activity, so an enzyme advertised as lacking one is exactly what you must not use when the product will be translated. Klenow is also mesophilic and would not survive PCR cycling in the first place.', cn: '这里给出的理由，恰好是「不该选它」的理由：校对本身就是一种外切活性，产物最后要被翻译时，没有外切活性的酶正是要避开的那一类。何况 Klenow 不耐热，本来就撑不过 PCR 的温度循环。' }
      },
      why_en: 'Any unproofread misincorporation becomes a permanent mutation in the expressed protein. The rule: if it will be translated, proofread it.',
      why_cn: '任何未被校对的错误掺入都会变成表达蛋白中的永久突变。规则就是：要被翻译的，就用校对酶。' },
    { type: 'mcq',
      q_en: 'What does a hot-start polymerase prevent?',
      q_cn: '热启动聚合酶防止的是什么？',
      options: ['Irreversible denaturation of the polymerase during the 95 °C steps', 'Non-specific primer extension during setup, before the first denaturation', 'Primer dimers forming during the annealing step of every cycle', 'Loss of the non-templated 3′-A overhang from the finished product'],
      answer: 1,
      why_en: 'A heat-labile aptamer or antibody keeps the enzyme inactive until the initial denaturation, so nothing is extended while you are pipetting at room temperature.',
      why_cn: '不耐热的适配体或抗体让酶保持无活性，直到最初的变性步骤，这样你在室温下移液时不会发生任何延伸。' },
    { type: 'short',
      q_en: 'Give the three axes on which Taq and Phusion differ, and the single underlying cause.',
      q_cn: '说出 Taq 和 Phusion 的三个差异维度，以及它们背后的同一个原因。',
      accept: ['exonuclease', 'proofreading', 'fidelity', 'blunt', 'overhang', '3\'-A'],
      answer_en: 'The three axes are proofreading, fidelity and product ends. Taq has no three-prime-to-five-prime exonuclease, its fidelity is around one error per ten-to-the-four to ten-to-the-five nucleotides, and it leaves a three-prime-A overhang. Phusion and Pfu have the exonuclease, up to about fifty times better fidelity, and blunt ends. The single underlying cause is the proofreading exonuclease: it removes mismatched bases, which is the fidelity, and it also trims the non-templated terminal adenine, which is the blunt end. So the end chemistry is a by-product of proofreading, not a separate property.',
      answer_cn: '三个维度是：校对活性、保真度、产物末端。Taq 没有 3′→5′ 外切活性，保真度约每 10⁴–10⁵ 个核苷酸一个错误，末端留 3′-A 突出。Phusion 和 Pfu 有外切活性，保真度最多高约 50 倍，末端是平的。背后唯一的原因就是校对外切活性：它切掉错配碱基（这是保真度），同时也修掉末端非模板加上的腺嘌呤（这是平末端）。所以末端的化学性质是校对活性的副产物，不是一条独立的性质。' }
  ],
  oral: {
    q_en: 'Compare Taq and Phusion polymerase, and say when you would use each.',
    q_cn: '比较 Taq 和 Phusion 聚合酶，说明各自的使用场景。',
    model_en: 'They differ on three axes, and the important thing is that all three follow from one cause. Taq has no three-prime-to-five-prime exonuclease — no proofreading. Phusion and Pfu do. From that single difference everything else follows. Without proofreading, a misincorporated base is never removed, so fidelity is low, around one error per ten thousand to a hundred thousand nucleotides; with proofreading, fidelity is up to about fifty times better. And without proofreading, Taq\'s terminal transferase activity adds a non-templated adenine to each three-prime end, giving a three-prime-A overhang; a proofreading enzyme trims that off, giving blunt ends. So "Taq gives sticky ends, Pfu gives blunt ends" is not a separate fact to memorise, it is a by-product of the exonuclease. As for use: Taq for colony PCR, diagnostics, and TA cloning, which actually requires that A overhang. A proofreading polymerase for cloning, mutagenesis, and anything that will be expressed — because an unproofread error becomes a permanent mutation in your construct.',
    checklist: ['Three axes: proofreading, fidelity, product ends', 'One cause: the 3′→5′ exonuclease', 'Taq: no exo, ~1 error per 10⁴–10⁵ nt, 3′-A overhang', 'Pfu/Phusion: exo present, up to ~50× fidelity, blunt', 'End chemistry is a by-product, not a separate property', 'Taq for colony PCR, diagnostics, TA cloning', 'Proofreader for anything that will be translated', 'Phusion is engineered — polymerase fused to an ssDNA-binding protein']
  }
},

{
  id: '1-5-2',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.5.2',
  enTitle: 'Reverse transcriptases, RNA polymerases and template-independent polymerases',
  cnTitle: '逆转录酶、RNA 聚合酶与不依赖模板的聚合酶',
  slides: 'L1 s.28',
  coverage: 'full',
  coverageNote: 'Complete list from the slide. The note that T7 RNA polymerase recurs in Lectures 3 and 7–8 is my annotation — but it is worth making, because a single enzyme carries an unusual amount of this course.',
  summary: {
    en: 'Beyond DNA-dependent DNA polymerases there are three other families in the toolbox. Reverse transcriptases are RNA-dependent DNA polymerases used for cDNA synthesis — AMV and M-MuLV. RNA polymerases T7 and SP6 produce transcripts from DNA templates and are strictly specific for their own promoters, which is exactly what makes the T7 expression system and cell-free synthesis work. Template-independent polymerases add untemplated homopolymer tails.',
    cn: '除了 DNA 依赖的 DNA 聚合酶之外，工具箱里还有三类。逆转录酶是 RNA 依赖的 DNA 聚合酶，用于 cDNA 合成——AMV 和 M-MuLV。RNA 聚合酶 T7 和 SP6 从 DNA 模板产生转录本，而且**严格只识别自己的启动子**——这正是 T7 表达系统和无细胞合成能成立的原因。不依赖模板的聚合酶则添加非模板的同聚物尾巴。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这一节真正要记的只有一个酶：**T7 RNA 聚合酶只认 T7 启动子，对宿主上千个启动子视而不见**。\n\n' +
            '第 3 讲的 T7 表达系统和第 7–8 讲的无细胞合成，靠的都是这一条专一性。',
  skipIt: 'AMV、M-MuLV 背后那两个病毒的全名，以及 poly(A) / poly(U) polymerase 的细节，不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时，写的是 promoters、**T7 system**——点名的是 T7 这套系统，不是酶的来源目录。',
  explain: [
    {
      q: '「RNA 依赖的 DNA 聚合酶」这种名字该怎么读？',
      a: '这一条纯粹是命名规则，跟生物学无关，但读不顺就会一直卡。\n\n' +
         '**规则：「X 依赖的 Y 聚合酶」= 照着 X 当模板，做出 Y。**前面那个是**读的**，后面那个是**写的**。\n\n' +
         '套一遍，四类酶自己就排好了：\n\n' +
         '**DNA 依赖的 DNA 聚合酶** = 读 DNA 写 DNA。普通复制，上一节那些都是。\n\n' +
         '**RNA 依赖的 DNA 聚合酶** = 读 RNA 写 DNA。这就是**逆转录酶**，「逆」的是中心法则的常规方向。\n\n' +
         '**DNA 依赖的 RNA 聚合酶** = 读 DNA 写 RNA。这就是**转录**，T7 和 SP6 属于这一类。\n\n' +
         '**不依赖模板的聚合酶** = 不读，只写。见下面那条。\n\n' +
         '看到一个陌生的酶名，先按这个规则拆一遍，它干什么就已经写在名字里了。',
      takeaway: '前面的是模板，后面的是产物。名字拆开，功能就出来了。'
    },
    {
      q: 'T7 RNA 聚合酶凭什么撑起后面两门课的内容？',
      trace: {
        what: '来自**噬菌体 T7** 的一个 RNA 聚合酶。跟细菌自己那个由好几个亚基拼成的 RNA 聚合酶不同，它是**单独一条多肽**就能干活——不需要 sigma 因子，不需要任何宿主帮手。',
        from: '噬菌体感染 E. coli 之后要抢班夺权：它得让细菌的机器去表达自己的基因，而且要压过宿主原有的转录。**自带一套完全独立、互不干涉的转录系统**是最干脆的解法。所以这个酶的「六亲不认」不是巧合，是它的生存策略。',
        to: '两个后果，正好是本课后面两大块：\n\n把它放进 E. coli 里，它**只转录 T7 启动子后面的东西**，对宿主基因组上千个启动子一概不理。于是你想大量表达谁，就把谁放在 T7 启动子后面——这就是第 3 讲的 **T7 / pET 表达系统**。\n\n而在试管里，你只要加**这一个酶 + 一段带 T7 启动子的模板 + 四种 NTP**，转录就跑起来了，不需要任何细胞——这就是第 7–8 讲的**无细胞蛋白合成**。',
        family: 'SP6 和 T3 是同类，来自别的噬菌体，各认各的启动子。所以你可以在同一管里用不同的酶分别转录两条不同的模板，互不干扰。'
      },
      takeaway: '一个不需要帮手、只认自己启动子的酶。专一性 = 可控性，两讲内容都建在这上面。'
    },
    {
      q: '「不依赖模板的聚合酶」听起来像自相矛盾，它到底在干嘛？',
      a: '它确实不照着谁抄。它做的事是：**抓住一条 RNA 的 3′ 端，一个劲儿地往上接同一种核苷酸**，接出一条尾巴。接 A 就是 poly(A) polymerase，接 U 就是 poly(U) polymerase。\n\n' +
         '因为没有模板告诉它「接到这里为止」，**产物长度是不确定的**——这跟前面所有聚合酶都不一样，那些酶的产物长度由模板决定。\n\n' +
         '顺带把上一节串起来：**Taq 在产物末端多加的那个 A，本质上就是这类活性的一个小规模版本**——不照模板、凭空加一个。区别只在于它加一个就停了，而 poly(A) polymerase 会一直加下去。',
      takeaway: '不读模板，只往 3′ 端堆同一种碱基。所以长度不定——Taq 多加那个 A 是它的迷你版。'
    }
  ],
  points: [
    { term: 'Reverse transcriptases', en: 'RNA-dependent DNA polymerases. They synthesise a complementary DNA strand from an RNA template (cDNA synthesis) or from ssDNA, starting from a primer.', cn: '逆转录酶：RNA 依赖的 DNA 聚合酶。从 RNA 模板（cDNA 合成）或单链 DNA 出发，在引物起始下合成互补 DNA 链。' },
    { term: 'RT examples', en: 'AMV RT from Avian Myeloblastosis Virus, and M-MuLV / MMLV from Moloney Murine Leukemia Virus.', cn: '逆转录酶实例：来自禽成髓细胞瘤病毒的 AMV RT，以及来自莫洛尼鼠白血病病毒的 M-MuLV / MMLV。' },
    { term: 'RNA polymerases T7 and SP6', en: 'They produce RNA transcripts from DNA templates and are specific for their respective promoters — T7 RNA polymerase only initiates at a T7 promoter.', cn: 'RNA 聚合酶 T7 和 SP6：从 DNA 模板产生 RNA 转录本，而且**各自只识别自己的启动子**——T7 RNA 聚合酶只在 T7 启动子处起始。' },
    { term: 'Why T7 RNA polymerase matters so much', en: 'This one enzyme is the engine of the T7 expression system in Lecture 3 and of cell-free protein synthesis in Lectures 7–8. Its promoter specificity — it ignores all host promoters — is precisely the property both systems exploit.', cn: '为什么 T7 RNA 聚合酶如此重要：这一个酶既是第 3 讲 T7 表达系统的引擎，也是第 7–8 讲无细胞蛋白合成的引擎。它的启动子专一性——完全无视宿主的所有启动子——正是这两个系统所依赖的性质。' },
    { term: 'Template-independent polymerases', en: 'No template needed; they generate untemplated homoribopolymeric tails on RNA 3′ ends. Examples: E. coli poly(A) polymerase and poly(U) polymerase.', cn: '不依赖模板的聚合酶：不需要模板；在 RNA 的 3′ 末端生成非模板的同聚核糖核苷酸尾巴。例如大肠杆菌的 poly(A) 聚合酶和 poly(U) 聚合酶。' }
  ],
  terms: [
    { en: 'Reverse transcriptase', cn: '逆转录酶', def_en: 'An RNA-dependent DNA polymerase that synthesises cDNA from an RNA template, primed as any polymerase is.', def_cn: 'RNA 依赖的 DNA 聚合酶，以 RNA 为模板、在引物起始下合成 cDNA。' },
    { en: 'T7 RNA polymerase', cn: 'T7 RNA 聚合酶', def_en: 'A single-subunit phage RNA polymerase that initiates only at the T7 promoter, ignoring host promoters entirely. The engine of both the T7 expression system and cell-free synthesis.', def_cn: '单亚基的噬菌体 RNA 聚合酶，只在 T7 启动子处起始，完全无视宿主启动子。既是 T7 表达系统也是无细胞合成的引擎。' },
    { en: 'Promoter specificity', cn: '启动子专一性', def_en: 'The property that a polymerase initiates only at its own promoter sequence — what allows an orthogonal transcription system inside a host cell.', def_cn: '聚合酶只在自己的启动子序列处起始的性质——正是它使得在宿主细胞内建立正交转录系统成为可能。' },
    { en: 'Poly(A) polymerase', cn: 'poly(A) 聚合酶', def_en: 'A template-independent polymerase that adds an untemplated adenosine tail to an RNA 3′ end.', def_cn: '不依赖模板的聚合酶，在 RNA 的 3′ 末端添加非模板的腺苷尾巴。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What makes T7 RNA polymerase so useful for building expression systems?',
      q_cn: 'T7 RNA 聚合酶为什么特别适合用来构建表达系统？',
      options: ['It remains catalytically active at temperatures up to 100 °C', 'It initiates only at the T7 promoter and ignores every host promoter', 'It carries a proofreading exonuclease and so makes error-free transcripts', 'It starts transcription anywhere, needing no promoter at all'],
      answer: 1,
      optionRefs: { 2: '1-5-1' },
      why_en: 'Strict promoter specificity means it transcribes your gene and nothing else. That orthogonality is what both the T7 expression system (Lec 3) and cell-free synthesis (Lec 7–8) are built on.',
      why_cn: '严格的启动子专一性意味着它只转录你的基因、不碰别的。这种正交性正是 T7 表达系统（第 3 讲）和无细胞合成（第 7–8 讲）的基础。' },
    { type: 'mcq',
      q_en: 'Which enzyme family would you use to convert mRNA into a clonable DNA fragment?',
      q_cn: '要把 mRNA 转换成可克隆的 DNA 片段，该用哪一类酶？',
      options: ['RNA polymerase — a DNA-dependent RNA polymerase such as T7', 'Reverse transcriptase — an RNA-dependent DNA polymerase', 'Poly(A) polymerase — a template-independent RNA tailing enzyme', 'Klenow fragment — the large fragment of DNA polymerase I'],
      answer: 1,
      optionRefs: { 3: '1-5-1' },
      optionNotes: {
        0: { en: 'A polymerase is named for what it writes, and in the full form the template comes first: a DNA-dependent RNA polymerase reads DNA and writes RNA. You need the reverse — read RNA, write DNA — which is the RNA-dependent DNA polymerase, reverse transcriptase.', cn: '聚合酶的名字标的是它「写」出什么；写全了则是「模板在前、产物在后」：DNA-dependent RNA polymerase 读 DNA、写 RNA。你要的是反过来——读 RNA、写 DNA——那就是 RNA-dependent DNA polymerase，也就是 reverse transcriptase。' }
      },
      why_en: 'Reverse transcriptase makes cDNA from an RNA template. AMV and M-MuLV are the two named examples.',
      why_cn: '逆转录酶以 RNA 为模板合成 cDNA。讲义列出的两个例子是 AMV 和 M-MuLV。' },
    { type: 'mcq',
      q_en: 'What is distinctive about template-independent polymerases such as E. coli poly(A) polymerase?',
      q_cn: '像大肠杆菌 poly(A) 聚合酶这样不依赖模板的聚合酶有什么特别之处？',
      options: ['They need no primer at all, only a template to copy from', 'They need no template, and add homopolymer tails to RNA 3′ ends', 'They synthesise in the 3′→5′ direction instead of 5′→3′', 'They read a protein sequence and write the matching RNA'],
      answer: 1,
      optionRefs: { 3: '1-3' },
      optionNotes: {
        0: { en: 'Primer and template are swapped here. These enzymes still need a free 3′ end to build on, namely an existing RNA terminus. What they do without is the template — and that is why the tail they add is a homopolymer of undefined length: nothing is dictating the sequence.', cn: '这里把 primer 和 template 换反了。这类酶仍然需要一个可以往上接的 3′ 末端，也就是现成的 RNA 3′ 端；它们不需要的是 template。正因为没有模板在规定序列，加上去的尾巴才是同聚物，长度也不确定。' }
      },
      why_en: 'No template is involved — the added tail is homopolymeric because nothing is dictating the sequence.',
      why_cn: '完全不涉及模板——加上的尾巴是同聚物，正是因为没有任何东西在规定序列。' },
    { type: 'short',
      q_en: 'Name the three non-DNA-dependent polymerase families in the toolbox and one use of each.',
      q_cn: '说出工具箱里三类非「DNA 依赖 DNA 聚合酶」的酶，以及每类的一个用途。',
      accept: ['reverse transcriptase', 'cDNA', 'RNA polymerase', 'T7', 'template-independent', 'poly(A)'],
      answer_en: 'Reverse transcriptases, which are RNA-dependent DNA polymerases, used for cDNA synthesis from mRNA — AMV and M-MuLV are the examples. RNA polymerases T7 and SP6, which make RNA transcripts from a DNA template and are strictly specific for their own promoters — T7 RNA polymerase drives both the T7 expression system and cell-free protein synthesis. And template-independent polymerases such as E. coli poly(A) and poly(U) polymerase, which add untemplated homopolymer tails to RNA three-prime ends.',
      answer_cn: '逆转录酶——RNA 依赖的 DNA 聚合酶，用于从 mRNA 合成 cDNA，例子是 AMV 和 M-MuLV。RNA 聚合酶 T7 和 SP6——从 DNA 模板产生 RNA 转录本，严格只识别各自的启动子；T7 RNA 聚合酶同时驱动 T7 表达系统和无细胞蛋白合成。以及不依赖模板的聚合酶，如大肠杆菌 poly(A) 和 poly(U) 聚合酶，在 RNA 的 3′ 末端添加非模板的同聚物尾巴。' }
  ],
  oral: {
    q_en: 'What polymerases other than DNA-dependent DNA polymerases are in the molecular biology toolbox?',
    q_cn: '除了 DNA 依赖的 DNA 聚合酶，分子生物学工具箱里还有哪些聚合酶？',
    model_en: 'Three families. First, reverse transcriptases, which are RNA-dependent DNA polymerases. They synthesise a complementary DNA strand from an RNA template, or from single-stranded DNA, starting from a primer — this is how cDNA is made. The two named examples are AMV reverse transcriptase from avian myeloblastosis virus and M-MuLV from Moloney murine leukemia virus. Second, RNA polymerases: T7 and SP6 produce RNA transcripts from DNA templates and are specific for their respective promoters. That specificity is the important part — T7 RNA polymerase initiates only at a T7 promoter and ignores every host promoter, which makes transcription of your gene orthogonal to the host. That single property is what the T7 expression system in Lecture three and cell-free protein synthesis in Lectures seven and eight are both built on. Third, template-independent polymerases, which need no template at all and generate untemplated homoribopolymeric tails on RNA three-prime ends — E. coli poly-A polymerase and poly-U polymerase are the examples.',
    checklist: ['Reverse transcriptases — RNA-dependent DNA polymerases', 'AMV and M-MuLV as examples; cDNA synthesis', 'RNA polymerases T7 and SP6', 'Promoter specificity → orthogonality to the host', 'T7 RNA pol drives both the T7 system and CFPS', 'Template-independent polymerases add untemplated tails', 'E. coli poly(A) and poly(U) polymerase']
  }
},

{
  id: '1-5-3',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.5.3',
  enTitle: 'Nucleases — specific, non-specific and exonucleases',
  cnTitle: '核酸酶——特异性、非特异性与外切酶',
  slides: 'L1 s.28',
  coverage: 'full',
  coverageNote: 'The three-way classification is from the slide. The parenthetical forward references — λ Int/Xis as the enzymes Gateway commercialises, T5 exonuclease as the chew-back enzyme in Gibson — are my annotations, and they are worth making because these enzymes reappear as named components of cloning kits later in the same lecture batch.',
  summary: {
    en: 'Nucleases divide three ways. Specific endonucleases are the restriction enzymes plus phage λ integrase and excisionase — the latter two are exactly what Gateway cloning sells you in a tube. Non-specific endonucleases include RNase H, which cuts RNA only when it is hybridised to DNA, DNase I, and micrococcal nuclease. Exonucleases chew from an end, and T5 exonuclease is the chew-back enzyme that makes Gibson assembly work.',
    cn: '核酸酶分三类。**特异性内切酶**是限制酶，加上噬菌体 λ 的整合酶和切除酶——后两个正是 Gateway 克隆装在管子里卖给你的东西。**非特异性内切酶**包括 RNase H（只切与 DNA 杂交的 RNA）、DNase I 和微球菌核酸酶。**外切酶**从末端开始啃，其中 T5 外切酶正是让 Gibson 组装得以成立的那个「啃回去」的酶。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**内切（endo）从中间切，外切（exo）从末端啃。**\n\n' +
            '这一节看着像目录，其实是在给第 2 讲发零件：**T5 exonuclease** 是 Gibson 组装的引擎，**λ Integrase / Excisionase** 就是 Gateway 装在管子里卖的东西。',
  skipIt: 'DNase I、micrococcal nuclease、Exonuclease I 这几条属于清单式条目，认得出是什么就行。这是判断，不是老师的话——不过可以参考：老师在第 3 讲开头给第 2 讲做 RECAP 时，列的是 **Restriction enzymes (Type IIP and IIS)**、Gateway cloning、Gibson assembly 这些**应用**，一个通用核酸酶的名字都没有。',
  explain: [
    {
      q: '内切酶和外切酶，一个字之差，怎么才不混？',
      a: '**endo = 内，exo = 外。**内切酶在链的**中间**切一刀，外切酶从**末端**一个一个往里啃。\n\n' +
         '这个区别有一个很实用的后果，值得单独记：**外切酶必须有一个自由末端才能开工。**\n\n' +
         '所以**环状质粒对外切酶基本免疫**——它根本没有末端可以下嘴。而一条线性 DNA 两头都露着，外切酶随时能开始。\n\n' +
         '细菌就是拿这一点当防御用的：外源线性 DNA 一进来就被外切酶降解，而自己的环状质粒和环状基因组安然无恙。你在实验室里转化时如果转的是线性片段，效率低得多，也是同一个原因。\n\n' +
         '外切酶还要再分方向：**5′→3′** 还是 **3′→5′**——从哪一头啃。上一节的校对活性就是 3′→5′ 外切。',
      takeaway: '外切酶要有自由末端才能开工。环状 DNA 没有末端，所以对它免疫。'
    },
    {
      q: 'RNase H 为什么专挑「跟 DNA 杂交上的 RNA」下手？这规矩哪来的？',
      a: '因为这就是它在细胞里的**本职工作**：清理 **RNA:DNA 杂合体**。\n\n' +
         '细胞里什么时候会出现 RNA 贴在 DNA 上？两个典型场合：DNA 复制时用的**RNA 引物**（用完要拆掉），以及**逆转录**产生的中间体（RNA 模板上已经抄出了 DNA 链，那条 RNA 该退场了）。\n\n' +
         '所以 RNase H 的识别对象不是「RNA」，而是「**RNA 跟 DNA 配上的那种双螺旋形状**」。单独的 RNA 它不管，单链或双链 DNA 它更不碰。\n\n' +
         '实验室里正好借这一点：做完 cDNA 合成之后，管子里是 RNA:DNA 杂合体。加 RNase H，**RNA 模板被清掉，DNA 留下**，而且不会伤到你辛苦做出来的 cDNA。识别的是形状，所以选择性天然就有。',
      takeaway: '它认的是「RNA 和 DNA 配成的双链」这个形状，不是 RNA 本身。'
    },
    {
      q: 'T5 exonuclease 是什么？为什么它值得在这里就认脸？',
      trace: {
        what: '一个 **5′→3′ 外切酶**，从双链或单链 DNA 的 **5′ 端**开始啃。',
        from: '来自噬菌体 T5。跟本节其它酶一样，是从噬菌体/细菌里**找到**的，不是设计的。',
        to: '**它是 Gibson 组装的第一步。**把两个末端有同源序列的片段丢在一起，T5 exo 把每条链的 5′ 端啃掉一截，于是**露出 3′ 单链尾巴**；两个片段的单链尾巴靠碱基互补自己配上，剩下的缺口由聚合酶补、连接酶封。整个过程一管、一个温度、一次完成。\n\n还有一个第 2 讲会追问的性质：**T5 exo 不耐热。**反应在 50 °C 跑，它一边干活一边失活，所以啃到一定程度就自然停了——**不会把片段整条吃光**。「一管里同时放三个酶还不打架」靠的就是这个。',
        family: 'Exonuclease I 也是 5′→3′，但只作用于**单链** DNA，常用来清理反应里剩下的引物。跟它们方向相反的是聚合酶的 3′→5′ 校对活性。'
      },
      takeaway: 'T5 exo 啃出单链尾巴 → Gibson 靠尾巴自己配对。它不耐热，所以会自己停下来。'
    },
    {
      q: '为什么 λ Integrase 和 Excisionase 会跟限制酶列在同一栏？',
      a: '因为它们都是**特异性内切酶**——都认一段特定的序列然后动刀。区别在于它们**认的序列和干的活更复杂**。\n\n' +
         '限制酶认 4–8 个碱基，切开就完事。λ 的整合酶（Integrase, Int）**认的是 attB / attP 这样的位点，切开之后还负责把两条 DNA 重新接起来**——它是噬菌体 λ 用来把自己整合进 E. coli 基因组的工具。切除酶（Excisionase, Xis）负责反向操作，把它再切出来。\n\n' +
         '**Gateway 克隆卖的就是这两个酶。**你买的那管 LR Clonase、BP Clonase，本质上就是 λ 的重组酶混合物。所以第 2 讲讲 Gateway 时，那些 attB / attP / attL / attR 的名字不是凭空冒出来的——**它们是噬菌体 λ 的零件，人类只是把它包装成了试剂盒**。\n\n' +
         '这跟 exenatide 是同一个故事：**不是设计出来的，是找到的。**',
      takeaway: 'Int / Xis 认位点、切开、再接上。Gateway 卖的就是这两个酶——又一次「找到的，不是设计的」。'
    }
  ],
  points: [
    { term: 'Specific endonucleases', en: 'Restriction enzymes, plus phage λ Integrase and phage λ Excisionase. Int and Xis are exactly the enzymes Gateway cloning commercialises.', cn: '特异性内切酶：限制酶，加上噬菌体 λ 整合酶（Integrase）和 λ 切除酶（Excisionase）。Int 和 Xis 正是 Gateway 克隆商业化的那两个酶。' },
    { term: 'RNase H', en: 'Hydrolyses the phosphodiester bonds of RNA only when the RNA is hybridised to DNA. It does not digest single- or double-stranded DNA.', cn: 'RNase H：**只有**当 RNA 与 DNA 杂交时才水解 RNA 的磷酸二酯键。它不消化单链或双链 DNA。' },
    { term: 'DNase I', en: 'Degrades both double- and single-stranded DNA.', cn: 'DNase I：降解双链和单链 DNA。' },
    { term: 'Micrococcal nuclease', en: 'Degrades double- and single-stranded DNA and RNA, leaving oligonucleotides with terminal 3′-phosphates.', cn: '微球菌核酸酶：降解双链和单链 DNA 以及 RNA，留下带 3′-磷酸末端的寡核苷酸。' },
    { term: 'Exonucleases in general', en: 'Can be 5′→3′ or 3′→5′, acting on ssDNA, dsDNA or RNA. This category includes the proofreading activity of DNA polymerases.', cn: '外切酶总论：方向可以是 5′→3′ 或 3′→5′，作用于单链 DNA、双链 DNA 或 RNA。这一类也包含 DNA 聚合酶的校对活性。' },
    { term: 'T5 exonuclease', en: 'Hydrolyses 5′ ends of double- and single-stranded DNA. This is the chew-back enzyme in Gibson assembly.', cn: 'T5 外切酶：水解双链和单链 DNA 的 5′ 末端。这就是 Gibson 组装里那个「啃回去」的酶。' },
    { term: 'Exonuclease I', en: 'Hydrolyses single-stranded DNA in the 5′→3′ direction.', cn: '外切酶 I：以 5′→3′ 方向水解单链 DNA。' }
  ],
  terms: [
    { en: 'Endonuclease', cn: '内切酶', def_en: 'A nuclease that cuts within a nucleic acid chain, as opposed to chewing from an end.', def_cn: '在核酸链**内部**切割的核酸酶，与从末端啃的外切酶相对。' },
    { en: 'Exonuclease', cn: '外切酶', def_en: 'A nuclease that removes nucleotides from an end, 5′→3′ or 3′→5′. Includes polymerase proofreading activity.', def_cn: '从末端逐个去除核苷酸的核酸酶，方向可为 5′→3′ 或 3′→5′。也包括聚合酶的校对活性。' },
    { en: 'RNase H', cn: '核糖核酸酶 H', def_en: 'Cuts RNA only within an RNA:DNA hybrid, leaving pure DNA and free RNA untouched — used to remove the RNA strand after reverse transcription.', def_cn: '只在 RNA:DNA 杂合双链中切割 RNA，不动纯 DNA 和游离 RNA——用于逆转录后去除 RNA 链。' },
    { en: 'T5 exonuclease', cn: 'T5 外切酶', def_en: 'A 5′-end-hydrolysing exonuclease; the enzyme that exposes single-stranded overhangs in Gibson assembly, and heat-labile so it self-destructs early.', def_cn: '水解 5′ 末端的外切酶；Gibson 组装中暴露单链黏性末端的酶，而且不耐热，会在反应早期自行失活。' },
    { en: 'λ Integrase / Excisionase', cn: 'λ 整合酶 / 切除酶', def_en: 'Phage λ site-specific recombination enzymes acting on att sites; commercialised as Gateway\'s BP and LR clonase mixes.', def_cn: '噬菌体 λ 作用于 att 位点的位点特异性重组酶；被商业化为 Gateway 的 BP 和 LR clonase 试剂。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is distinctive about RNase H\'s substrate requirement?',
      q_cn: 'RNase H 的底物要求特别在哪里？',
      options: ['It cuts any single-stranded RNA it encounters, whatever it is paired with', 'It hydrolyses RNA only when the RNA is hybridised to DNA', 'It cuts DNA only when hybridised to RNA', 'It degrades both DNA and RNA indiscriminately'],
      answer: 1,
      optionNotes: {
        2: { en: 'The two strands of the hybrid are swapped. The name already says half of it: an RNase cuts RNA. In an RNA:DNA hybrid it destroys the RNA and leaves the DNA intact, which is exactly why it is used after reverse transcription — to clear the template away without touching the cDNA you just made.', cn: '这是把杂合双链的两条链弄反了。名字已经说明了一半：RNase 切的是 RNA。在 RNA:DNA 杂合体里它降解 RNA、留下 DNA——这正是逆转录之后用它的理由：清掉模板，而不碰你刚做出来的 cDNA。' }
      },
      why_en: 'It requires an RNA:DNA hybrid. Free RNA and pure DNA, single- or double-stranded, are untouched — which is why it is used to remove the RNA strand after reverse transcription.',
      why_cn: '它需要 RNA:DNA 杂合双链。游离 RNA 和纯 DNA（不论单双链）都不受影响——这就是它被用来在逆转录后去除 RNA 链的原因。' },
    { type: 'mcq',
      q_en: 'Which nuclease is the chew-back enzyme in Gibson assembly?',
      q_cn: 'Gibson 组装中负责「啃回去」的核酸酶是哪一个？',
      options: ['DNase I', 'Exonuclease I', 'T5 exonuclease', 'Micrococcal nuclease'],
      answer: 2,
      optionNotes: {
        1: { en: 'Exonuclease I acts on single-stranded DNA and is the enzyme used to mop up leftover primers after a reaction. Gibson has to chew back the ends of double-stranded fragments to expose single-stranded overhangs, which is T5 exonuclease\'s job — and T5 being heat-labile is what stops it eating the whole product.', cn: 'Exonuclease I 作用的是单链 DNA，实验里常用来清掉反应剩下的引物。Gibson 要啃的是双链片段的末端、好露出单链尾巴，那是 T5 exonuclease 的活；而 T5 不耐热，正好保证它啃到一半就自己失活。' }
      },
      why_en: 'T5 exonuclease hydrolyses 5′ ends of dsDNA to expose the single-stranded 3′ overhangs that anneal. Being heat-labile, it then self-destructs before it can damage the product.',
      why_cn: 'T5 外切酶水解双链 DNA 的 5′ 末端，暴露出用于退火的单链 3′ 突出。因为不耐热，它随后会自行失活，不会破坏拼好的产物。' },
    { type: 'mcq',
      q_en: 'Phage λ Integrase and Excisionase appear in the nuclease list. Where do you meet them again?',
      q_cn: '噬菌体 λ 整合酶和切除酶出现在核酸酶列表里。你在哪里会再次遇到它们？',
      options: ['As the recombinases that carry out the cut-and-join steps of Golden Gate assembly', 'As the enzymes Gateway cloning commercialises in its BP and LR clonase mixes', 'As the proofreading component of the Phusion polymerase blend', 'As the restriction enzymes used in TA cloning'],
      answer: 1,
      optionRefs: { 0: '1-14', 3: '1-16' },
      why_en: 'Gateway is phage λ site-specific recombination sold in a tube: BP clonase is Int plus IHF, LR clonase is Xis plus Int plus IHF.',
      why_cn: 'Gateway 就是把噬菌体 λ 的位点特异性重组装进管子里卖：BP clonase 是 Int 加 IHF，LR clonase 是 Xis 加 Int 加 IHF。' },
    { type: 'short',
      q_en: 'Classify the nucleases into three groups and give an example of each.',
      q_cn: '把核酸酶分成三类，每类举一个例子。',
      accept: ['specific endonuclease', 'restriction', 'non-specific', 'DNase', 'RNase H', 'exonuclease', 'T5'],
      answer_en: 'Specific endonucleases, which cut at defined sequences — the restriction enzymes, plus phage lambda integrase and excisionase. Non-specific endonucleases, which cut within a chain without sequence specificity — RNase H, which needs an RNA-DNA hybrid; DNase one, which degrades both single- and double-stranded DNA; and micrococcal nuclease, which degrades DNA and RNA leaving three-prime phosphates. And exonucleases, which chew from an end in either direction — T5 exonuclease on five-prime ends, exonuclease one on single-stranded DNA, and the proofreading activity of DNA polymerases.',
      answer_cn: '**特异性内切酶**，在确定的序列处切割——限制酶，加上噬菌体 λ 整合酶和切除酶。**非特异性内切酶**，在链内部切但不认序列——RNase H（需要 RNA:DNA 杂合双链）、DNase I（降解单双链 DNA）、微球菌核酸酶（降解 DNA 和 RNA，留下 3′-磷酸）。**外切酶**，从末端往里啃，方向可正可反——T5 外切酶作用于 5′ 末端，外切酶 I 作用于单链 DNA，以及 DNA 聚合酶的校对活性。' }
  ],
  oral: {
    q_en: 'Classify the nucleases available in the molecular cloning toolbox.',
    q_cn: '把分子克隆工具箱里的核酸酶分类说明。',
    model_en: 'They fall into three groups. First, specific endonucleases, which cut at defined recognition sequences: these are the restriction enzymes, and also phage lambda integrase and excisionase — worth noting because those two are exactly what Gateway cloning sells you as the BP and LR clonase mixes. Second, non-specific endonucleases. RNase H is the interesting one: it hydrolyses RNA only when the RNA is hybridised to DNA, so it leaves free RNA and pure DNA alone, which is how you remove the RNA strand after reverse transcription. DNase one degrades both double- and single-stranded DNA. Micrococcal nuclease degrades DNA and RNA and leaves oligonucleotides with terminal three-prime phosphates. Third, exonucleases, which remove nucleotides from an end rather than cutting internally; they can run five-prime to three-prime or the other way, and this category includes the proofreading activity of DNA polymerases. T5 exonuclease hydrolyses five-prime ends of double- and single-stranded DNA and is the chew-back enzyme in Gibson assembly, and exonuclease one hydrolyses single-stranded DNA five-prime to three-prime.',
    checklist: ['Three groups: specific endo, non-specific endo, exo', 'Specific: restriction enzymes, λ Int and Xis', 'λ Int/Xis are what Gateway commercialises', 'RNase H needs an RNA:DNA hybrid', 'DNase I degrades ds and ssDNA', 'Micrococcal nuclease leaves 3′-phosphates', 'Exonucleases include polymerase proofreading', 'T5 exonuclease is Gibson\'s chew-back enzyme']
  }
},

{
  id: '1-5-4',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.5.4',
  enTitle: 'Ligases, phosphatases and kinases — the phosphate bookkeeping',
  cnTitle: '连接酶、磷酸酶与激酶——磷酸账',
  slides: 'L1 s.28',
  coverage: 'full',
  coverageNote: 'Enzyme descriptions are from the slide. The "phosphate bookkeeping" framing is the mechanism block, and it is the single highest-value idea in this section — half the otherwise arbitrary-looking steps in later cloning protocols fall out of it.',
  summary: {
    en: 'T4 DNA ligase forms a phosphodiester bond between juxtaposed 5′-phosphate and 3′-hydroxyl termini. That one requirement is worth tracking carefully, because half of what looks arbitrary in cloning protocols follows from it: restriction enzymes leave a 5′-phosphate so cut fragments ligate directly; synthetic oligos have a 5′-OH so PCR products cannot ligate at that end; and dephosphorylating a vector is how you stop it self-ligating.',
    cn: 'T4 DNA 连接酶在**紧邻的 5′-磷酸和 3′-羟基**之间形成磷酸二酯键。这一条要求值得仔细记住，因为克隆流程里一半看起来莫名其妙的步骤都是从它推出来的：限制酶切出来的末端自带 5′-磷酸，所以能直接连；合成的引物是 5′-羟基，所以 PCR 产物那一端连不上；而把载体去磷酸化，就是阻止它自连的办法。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '连接酶要的是 **5′-磷酸 + 3′-羟基，两个都得在场**。缺哪一个，那个接口就连不上。\n\n' +
            '克隆流程里一半看着莫名其妙的步骤，都是从这一条推出来的。',
  skipIt: 'SAP / CIP / Antarctic phosphatase 这几个产品的名字不用背，知道「碱性磷酸酶把 5′-磷酸拿掉」就够了。老师在第 3 讲开头给第 2 讲做 RECAP 时，明确列了 **T4 ligase、phosphatases、kinase、T4 polymerase**——**这一节整体是被点名的**，别跳过，只是不必记具体产品。',
  explain: [
    {
      q: '为什么连接酶偏偏要 5′-磷酸和 3′-羟基？',
      a: '因为它要形成的那根键，就长这个样子。\n\n' +
         '**磷酸二酯键**的本质是：**一个磷酸，两头分别连着两个糖**。DNA 骨架就是靠这根键一节一节串起来的。\n\n' +
         '现在看一个待连接的缺口：上游片段的 3′ 端露着一个**羟基（OH）**，下游片段的 5′ 端带着一个**磷酸**。连接酶做的事是把这个磷酸和那个羟基缝在一起——**磷酸必须已经在现场**。\n\n' +
         '连接酶**不负责去搬一个磷酸来**。它是个焊工，不是供货商。所以：\n\n' +
         '**5′ 端没有磷酸 → 无米之炊 → 这个接口连不上。**\n\n' +
         '把这句话记住，下面几条推论就全是自动的了。',
      takeaway: '连接酶是焊工不是供货商。磷酸不在场，它就干不了活。'
    },
    {
      q: '为什么限制酶切出来自带磷酸，而合成的引物却是 5′-OH？',
      a: '这两件事各有各的原因，而且都不是谁的选择。\n\n' +
         '**限制酶那边是化学决定的。**它切的就是磷酸二酯键，而切开时那个磷酸**留在 5′ 那一侧**（切的是 3′ 侧的那根连接）。所以任何限制酶切出来的末端，**5′ 端天生带磷酸**。这就是为什么酶切完的载体和插入片段可以直接连，不用做任何额外处理。\n\n' +
         '**合成引物那边是工艺决定的。**化学合成寡核苷酸是一个碱基一个碱基往上接的，接完最后一个（也就是 5′ 端那一个），**没有下一步再给它加磷酸了**，出厂就是一个裸露的 OH。\n\n' +
         '于是就有了那个经典的坑：**用普通引物做出来的 PCR 产物，两端都是 5′-OH，直接拿去连接会失败**——而且失败得很安静，你只会看到没有菌落。\n\n' +
         '两条解法：订购时直接要 **5′-磷酸化引物**（加钱），或者拿 **T4 PNK** 把磷酸补上（PNK 干的正是「从 ATP 搬一个磷酸到 5′-OH 上」这件事）。',
      takeaway: '限制酶末端自带磷酸（化学上如此），合成引物没有（工艺上如此）。PCR 产物要连，先补磷酸。'
    },
    {
      q: '「去磷酸化载体」到底在防什么？为什么去掉了插入片段还连得上？',
      a: '**防的是空载体背景菌落**——克隆失败最常见的一种失败。\n\n' +
         '用一个酶切开载体后，它自己的两个末端是互相配套的。**它完全可以首尾相接、原样长回去**（self-ligation）。这种自连产物转化效率还特别高，结果你挑十个菌落，九个是空载体。\n\n' +
         '解法：用 **SAP 或 CIP** 把载体两端的 5′-磷酸拿掉。现在载体的两个 5′ 端都没有磷酸，**自连时两个接口都缺磷酸，连不上**。\n\n' +
         '**那插入片段为什么还能进去？**因为插入片段自己的 5′-磷酸还在（它是刚酶切下来的）。看一个「载体—插入」的接口：一侧是载体的 3′-OH，另一侧是插入片段的 5′-磷酸——**齐了，能连**。\n\n' +
         '注意这里最漂亮的一点：每个接口**只有一条链被连上**，另一条链因为载体那侧缺磷酸而留着一个**缺口（nick）**。这样的分子照样能转化进细菌，而**细菌自己的修复系统会把这两个缺口补好**。\n\n' +
         '所以去磷酸化不是「让载体连不上」，而是**让载体只连得上带磷酸的那一方，也就是你的插入片段**。',
      takeaway: '去磷酸化让载体自连不了，但插入片段自带磷酸仍能连上一条链——缺口交给细菌修。'
    },
    {
      q: 'T4 PNK 为什么还有个「不带 3′-磷酸酶活性」的改造版？',
      a: '因为原版**顺手多干了一件事**。\n\n' +
         'T4 多核苷酸激酶（PNK）的主业是**把磷酸从 ATP 搬到 5′-OH 上**，这是你要的。但它同时还带一个**3′-磷酸酶活性**，会把 DNA **3′ 端的磷酸拿掉**。\n\n' +
         '大多数时候这没坏处，有时候甚至是好事（3′ 端要留 OH 才能被连接酶接、才能被聚合酶延伸）。但如果你的实验恰好需要**保留 3′ 端的磷酸**，原版 PNK 就会把它洗掉。\n\n' +
         '所以厂商做了一个改造版：**激酶活性完整，3′-磷酸酶活性去掉**。要的留下，不要的删掉——这本身就是一个很小但很典型的蛋白质工程例子。',
      takeaway: '原版 PNK 会顺手拿掉 3′ 磷酸。改造版只保留你要的那个活性。'
    }
  ],
  points: [
    { term: 'T4 DNA ligase', en: 'Forms the phosphodiester bond between juxtaposed 5′-phosphate and 3′-hydroxyl termini in duplex DNA or RNA.', cn: 'T4 DNA 连接酶：在双链 DNA 或 RNA 中**紧邻的 5′-磷酸和 3′-羟基**末端之间形成磷酸二酯键。' },
    { term: 'DNA phosphatases', en: 'SAP (Shrimp Alkaline Phosphatase), CIP (Calf Intestinal Phosphatase) and Antarctic phosphatase. Non-specific dephosphorylation of 5′ and 3′ ends of DNA/RNA phosphomonoesters; they also hydrolyse NTPs and dNTPs.', cn: 'DNA 磷酸酶：SAP（虾碱性磷酸酶）、CIP（小牛肠碱性磷酸酶）和南极磷酸酶。非特异性地去除 DNA/RNA 磷酸单酯的 5′ 和 3′ 末端磷酸；它们也水解 NTP 和 dNTP。' },
    { term: 'DNA/RNA kinases', en: 'Transfer phosphate from ATP to the 5′-hydroxyl terminus of polynucleotides. T4 polynucleotide kinase (PNK) is the standard; a modified version has full kinase activity with no 3′-phosphatase activity.', cn: 'DNA/RNA 激酶：把磷酸从 ATP 转移到多核苷酸的 5′-羟基末端。T4 多核苷酸激酶（PNK）是标准试剂；有一个改造版本保留完整激酶活性但**没有** 3′-磷酸酶活性。' },
    { term: 'The ligase requirement', en: 'Ligase needs a 5′-phosphate AND a 3′-OH. Track the phosphates and several otherwise arbitrary-looking protocol steps become obvious.', cn: '连接酶的要求：必须**同时**有 5′-磷酸和 3′-羟基。把磷酸的来去记清楚，好几个看起来莫名其妙的流程步骤就一目了然了。' },
    { term: 'Consequence 1 — restriction ends', en: 'Restriction enzymes leave a 5′-phosphate, so freshly cut vector and insert can be ligated directly with no extra treatment.', cn: '推论一——酶切末端：限制酶切出来的末端自带 5′-磷酸，所以刚切好的载体和插入片段可以直接连接，不需要额外处理。' },
    { term: 'Consequence 2 — synthetic oligos', en: 'Synthetic oligonucleotides have a 5′-OH, not a phosphate. So a PCR product made with ordinary primers cannot be ligated at that end unless you order 5′-phosphorylated primers or treat the product with T4 PNK.', cn: '推论二——合成引物：合成的寡核苷酸是 5′-羟基，**不是**磷酸。所以用普通引物做出来的 PCR 产物在那一端**连不上**，除非你订购 5′-磷酸化的引物，或者用 T4 PNK 处理产物。' },
    { term: 'Consequence 3 — vector dephosphorylation', en: 'Dephosphorylating the vector with SAP or CIP removes its 5′-phosphates so it cannot self-ligate — which is the single biggest source of empty-vector background colonies.', cn: '推论三——载体去磷酸化：用 SAP 或 CIP 把载体去磷酸化，去掉它的 5′-磷酸，它就无法自连——而空载体自连正是背景菌落最大的来源。' },
    { term: 'The one-line memory aid', en: 'Ligase needs 5′-phosphate plus 3′-OH, both present. Remove the phosphate and nothing can be joined at that end — used deliberately on vectors, and a nuisance on PCR products.', cn: '一句话记法：连接酶要「5′ 磷酸 + 3′ 羟基」凑齐才能干活。把磷酸去掉，那一端就接不上任何东西——这在载体上是**故意的**，在 PCR 产物上则是个麻烦。' }
  ],
  terms: [
    { en: 'T4 DNA ligase', cn: 'T4 DNA 连接酶', def_en: 'Forms a phosphodiester bond between a juxtaposed 5′-phosphate and 3′-hydroxyl. Joins blunt and cohesive ends and repairs nicks.', def_cn: '在紧邻的 5′-磷酸和 3′-羟基之间形成磷酸二酯键。可连接平末端和黏性末端，并修复缺口。' },
    { en: 'SAP / CIP', cn: '虾碱性磷酸酶 / 小牛肠碱性磷酸酶', def_en: 'Phosphatases used to strip a vector\'s 5′-phosphates so it cannot self-ligate.', def_cn: '用于剥掉载体 5′-磷酸的磷酸酶，使载体无法自连。' },
    { en: 'T4 polynucleotide kinase (PNK)', cn: 'T4 多核苷酸激酶', def_en: 'Transfers phosphate from ATP to a 5′-hydroxyl — used to phosphorylate PCR products made with ordinary primers so they can be ligated.', def_cn: '把磷酸从 ATP 转移到 5′-羟基上——用于磷酸化由普通引物制备的 PCR 产物，使其可以被连接。' },
    { en: '5′-phosphate', cn: '5′-磷酸', def_en: 'The phosphate group ligase requires on one side of every nick it seals. Present on restriction-cut ends, absent on synthetic oligos.', def_cn: '连接酶封每个缺口时在一侧所必需的磷酸基团。限制酶切出的末端有，合成的寡核苷酸没有。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'A PCR product made with ordinary unmodified primers will not ligate. Why?',
      q_cn: '用普通未修饰引物做出的 PCR 产物连不上，为什么？',
      options: ['PCR products are always blunt ended, and ligase cannot join two blunt ends together', 'Synthetic oligonucleotides carry a 5′-OH rather than a 5′-phosphate, which ligase requires', 'The polymerase remains bound to the ends of the product and physically blocks ligase', 'Residual dNTPs carried over from the PCR inhibit T4 ligase'],
      answer: 1,
      optionNotes: {
        0: { en: 'Both halves are wrong, and together they hide the real rule. T4 ligase does join blunt ends, only less efficiently, and a Taq product is not blunt anyway — it carries a 3′-A overhang. What blocks the reaction is chemistry: ligase is a welder, not a supplier, so with no 5′-phosphate already present nothing can be joined.', cn: '两半都不对，而且正好挡住了真正的规则。T4 ligase 是能连平末端的，只是效率低；而 Taq 的产物也不是平末端，它带一个 3′-A 突出。真正卡住反应的是化学：ligase 是焊工不是供货商，5′-磷酸不在现场，这个接口就连不上。' }
      },
      why_en: 'Ligase needs a 5′-phosphate plus a 3′-OH. Synthetic primers supply a 5′-OH, so you must either order phosphorylated primers or treat the product with T4 PNK.',
      why_cn: '连接酶需要 5′-磷酸加 3′-羟基。合成引物提供的是 5′-羟基，所以你要么订购磷酸化引物，要么用 T4 PNK 处理产物。' },
    { type: 'mcq',
      q_en: 'Why does dephosphorylating a vector reduce background colonies?',
      q_cn: '为什么把载体去磷酸化能减少背景菌落？',
      options: ['It prevents the vector from being taken up by non-recombinant host cells', 'It removes the 5′-phosphates from the vector so it cannot self-ligate into an empty circle', 'It degrades any residual uncut vector left behind by the digest', 'It inactivates the restriction enzymes carried over from the digestion step'],
      answer: 1,
      optionNotes: {
        0: { en: 'The phosphatase acts in the ligation tube, on DNA ends, long before any cell is involved — it cannot change what a cell takes up. The background is not stray uptake but self-ligated empty vector, which transforms extremely efficiently; stripping the 5′-phosphates stops that circle from ever closing.', cn: '磷酸酶作用在连接管里的 DNA 末端上，早在细胞出场之前——它管不了细胞吸收什么。背景菌落也不是「误吸收」，而是自连成环的空载体，这种分子转化效率极高；把 5′-磷酸拿掉，那个环就根本闭不上。' }
      },
      why_en: 'Self-ligated empty vector transforms very efficiently and swamps the plate. Without 5′-phosphates the vector cannot close on itself, while the insert still supplies phosphates for the vector–insert junctions.',
      why_cn: '自连的空载体转化效率极高，会淹没整个平板。没有 5′-磷酸，载体就无法自己首尾相接；而插入片段仍然带着磷酸，可以完成载体–插入片段的连接。' },
    { type: 'mcq',
      q_en: 'Why can freshly restriction-digested vector and insert be ligated with no extra treatment?',
      q_cn: '为什么刚用限制酶切好的载体和插入片段可以不做任何额外处理就直接连接？',
      options: ['T4 ligase can join ends that carry a 5′-OH as long as those ends are cohesive rather than blunt', 'Restriction enzymes leave a 5′-phosphate, which is exactly what ligase requires', 'The restriction enzyme itself catalyses the ligation as a reverse reaction', 'The cell repairs both nicks after transformation regardless'],
      answer: 1,
      optionRefs: { 3: '1-17' },
      optionNotes: {
        0: { en: 'Cohesive ends and the phosphate requirement are two separate things. Overhangs only hold the two fragments in register by base pairing; the bond ligase then forms still needs a 5′-phosphate on one side and a 3′-OH on the other. A 5′-OH end fails whether it is sticky or blunt.', cn: '黏性末端和磷酸要求是两件事。突出末端只是靠碱基配对把两个片段对齐、按在一起；ligase 接下来要形成的那根键，仍然需要一侧有 5′-磷酸、另一侧有 3′-OH。只要 5′ 端是羟基，黏末端和平末端一样连不上。' }
      },
      why_en: 'Restriction-cut ends are 5′-phosphorylated by definition, so both requirements — 5′-phosphate and 3′-OH — are already met.',
      why_cn: '限制酶切出来的末端按定义就是 5′-磷酸化的，所以两个要求——5′-磷酸和 3′-羟基——已经同时满足。' },
    { type: 'short',
      q_en: 'State the ligase requirement and derive three practical consequences from it.',
      q_cn: '陈述连接酶的要求，并由此推出三条实际后果。',
      accept: ['5\' phosphate', '3\' hydroxyl', 'restriction', 'oligo', 'PNK', 'dephosphorylat', 'self-ligat'],
      answer_en: 'Ligase needs a juxtaposed five-prime phosphate and three-prime hydroxyl. First consequence: restriction enzymes leave a five-prime phosphate, so freshly cut vector and insert ligate directly. Second: synthetic oligonucleotides carry a five-prime hydroxyl rather than a phosphate, so a PCR product made with ordinary primers cannot ligate at that end unless you order phosphorylated primers or treat it with T4 polynucleotide kinase. Third: stripping the vector\'s phosphates with SAP or CIP makes self-ligation impossible, which removes the biggest source of empty-vector background, while the insert still supplies the phosphates needed for the real junctions.',
      answer_cn: '连接酶需要紧邻的 5′-磷酸和 3′-羟基。第一条后果：限制酶切出来的末端带 5′-磷酸，所以刚切好的载体和插入片段可以直接连。第二条：合成的寡核苷酸带的是 5′-羟基而不是磷酸，所以用普通引物做的 PCR 产物在那一端连不上，除非订磷酸化引物或用 T4 PNK 处理。第三条：用 SAP 或 CIP 剥掉载体的磷酸，载体就无法自连，这去掉了空载体背景最大的来源；而插入片段仍然提供真正连接处所需的磷酸。' }
  ],
  oral: {
    q_en: 'Explain the phosphate requirement of DNA ligase and why it matters in practice.',
    q_cn: '解释 DNA 连接酶对磷酸的要求，以及它在实践中为什么重要。',
    model_en: 'T4 DNA ligase forms a phosphodiester bond between juxtaposed five-prime phosphate and three-prime hydroxyl termini. Both must be present, and if you track the phosphates through a protocol, several steps that otherwise look arbitrary become obvious. First, restriction enzymes leave a five-prime phosphate on the ends they generate, so a freshly cut vector and insert can be ligated directly with no extra treatment. Second, synthetic oligonucleotides are made with a five-prime hydroxyl, not a phosphate — so a PCR product amplified with ordinary primers cannot be ligated at that end at all. You fix that either by ordering five-prime phosphorylated primers or by treating the product with T4 polynucleotide kinase, which transfers a phosphate from ATP onto the five-prime hydroxyl. Third, and this is the deliberate use of the same rule, dephosphorylating the vector with shrimp alkaline phosphatase or calf intestinal phosphatase removes its five-prime phosphates so it cannot self-ligate into an empty circle. Empty self-ligated vector transforms extremely efficiently and is the single biggest source of background colonies, so removing that possibility is worth a step. The insert still carries its own phosphates, so the real vector–insert junctions still form, leaving two nicks that the cell repairs after transformation.',
    checklist: ['Ligase needs 5′-phosphate AND 3′-OH', 'Restriction ends carry a 5′-phosphate — ligate directly', 'Synthetic oligos have 5′-OH — PCR products will not ligate', 'Fix with phosphorylated primers or T4 PNK', 'Dephosphorylate vector with SAP/CIP to block self-ligation', 'Self-ligated empty vector is the main background source', 'Insert supplies the phosphates for real junctions', 'The cell repairs the remaining nicks after transformation']
  }
},

{
  id: '1-6',
  chapter: 1,
  lecture: 'Lecture 1',
  section: '1.6',
  enTitle: 'Sanger sequencing, and why the read length is what it is',
  cnTitle: 'Sanger 测序，以及读长为何如此',
  slides: 'L1 s.29',
  coverage: 'full',
  coverageNote: 'The service parameters and the Edman comparison are on the slide. How chain termination actually works, and the two practical consequences for primer placement, are beyond the slides — but the primer-placement point is the kind of thing that costs people weeks in the lab.',
  summary: {
    en: 'A standard overnight Sanger reaction takes 500 ng of template plus a sequencing primer, costs about €5, and returns 1000–1200 bp. Protein sequencing by Edman degradation reads only 20–30 residues and is expensive — a contrast that is really another face of the central-dogma argument, since it explains why we sequence DNA and infer protein rather than the reverse. Two practical consequences: place your sequencing primer 50–100 bp upstream of what you care about, and design internal primers for long genes.',
    cn: '标准过夜 Sanger 反应需要 500 ng 模板加一条测序引物，约 5 欧元，返回 1000–1200 bp。蛋白测序用 Edman 降解法只能读 20–30 个残基而且很贵——这个对比其实是中心法则论证的另一个侧面，它解释了为什么我们测 DNA 再推蛋白，而不是反过来。两条实用结论：测序引物要放在目标区上游 50–100 bp；长基因必须设计内部引物。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '一次 Sanger 反应读 **1000–1200 bp**，而且**开头 20–40 个碱基读不出来**。\n\n' +
            '所以测序引物要放在你关心的位点**上游 50–100 bp**——很多人把引物贴着位点设计，结果关键突变正好落在读不出来的那一段。',
  skipIt: '500 ng、5 欧元这两个数字是行情，不是考点。但**读长 1000–1200 bp 建议记住**，因为长基因要不要设计内部引物是从它推出来的。老师在第 2 讲开头给第 1 讲做 RECAP 时，Techniques 一栏明确写了 Sanger sequencing——**这一节本身是被点名的**。',
  explain: [
    {
      q: 'ddNTP 是个什么东西？为什么它一进去链就断了？',
      trace: {
        what: '**双脱氧核苷三磷酸**。跟普通的 dNTP 比，它**少了 3′ 位上的那个羟基（OH）**。名字里的「双脱氧」就是这个意思：2′ 位本来就脱氧了（DNA 都是），3′ 位再脱一个。',
        from: '化学合成的类似物，不是天然的。测序反应里放的是**大量普通 dNTP + 少量 ddNTP**，比例调得让 ddNTP 偶尔才被掺进去一个。',
        to: '为什么掺进去就停？因为聚合酶接下一个核苷酸时，靠的是**前一个核苷酸 3′ 端的 OH 去进攻新来那个的磷酸**。没有 OH，这一步没法发生，链**就在这里终止**。\n\n因为掺入是随机的，你会得到一整套**在每一个位置分别终止**的片段——把它们按长度排开，每一档的最后一个碱基是什么，序列就读出来了。',
        family: '注意跟第 1-5-4 节呼应：连接酶也要 3′-OH 才能成键。**「没有 3′-OH 就接不上下一个」是同一个化学**，一处用来终止链，一处用来阻止连接。'
      },
      takeaway: 'ddNTP 缺 3′-OH → 接不上下一个 → 链终止。随机掺入，就得到每个位置都终止一次的一套片段。'
    },
    {
      q: '为什么读长偏偏卡在 1000–1200 bp？',
      a: '**不是化学的问题，是分离的问题。**\n\n' +
         '化学上，那套终止片段可以一直生成下去，几千个碱基也没问题。卡住的是后面那一步：**毛细管电泳要把长度只差一个核苷酸的两条片段分开**。\n\n' +
         '想一想比例就明白了。100 和 101 个碱基的片段，长度差 1%，分得开。1000 和 1001 差 0.1%，勉强。到了 1200 往上，两条带在图谱上就叠在一起了，读不出先后。\n\n' +
         '所以读长是**分离手段的分辨率上限**，不是反应能力的上限。知道这一点的实际用处是：这个数字**不会因为你换个更好的酶、加更多模板就变长**——想读更长的基因，唯一的办法是**多设计几条内部引物，分段读、让区段互相重叠**。',
      takeaway: '限制来自毛细管电泳的分辨率，不是化学。所以长基因只能分段读。'
    },
    {
      q: '为什么开头那几十个碱基读不出来？',
      a: '因为图谱最前面那一段被两样东西糊住了。\n\n' +
         '**一是引物本身。**测序引物就坐在那儿，它对应的位置本来就没有信息可读。\n\n' +
         '**二是「染料伪峰」（dye blob）。**没有被掺进链里的荧光标记 ddNTP 也会跟着跑，而且它们体积小、跑得快，全挤在图谱的最前面，堆成几个又肥又乱的假峰。\n\n' +
         '结果就是开头 **20–40 个碱基基本不可读**。\n\n' +
         '这条的实际后果比它听起来严重得多：假设你做了一个定点突变，想验证它成没成。你很自然地把测序引物设计得**紧贴突变位点**——然后就会发现，**你最想看的那个碱基，正好落在读不出来的那一段里**。\n\n' +
         '所以规矩是：**引物放在目标上游 50–100 bp**。让不可读的那一段浪费在你不关心的序列上。',
      takeaway: '引物 + 染料伪峰糊住开头几十个碱基。所以引物要退后 50–100 bp。'
    },
    {
      q: '为什么我们测 DNA 再推蛋白，而不是直接测蛋白？',
      a: '把两个数字并排放，答案就自己出来了：**一次 Sanger 读 1000–1200 个碱基（约 350 个密码子），一次 Edman 降解读 20–30 个氨基酸**，而且后者还更贵。\n\n' +
         'Edman 的机制决定了它的天花板：它从蛋白的 **N 端**开始，用苯异硫氰酸酯（phenyl isothiocyanate）**一次切下一个残基**去鉴定。每一轮都有一点效率损失，累积几十轮之后信号就淹没在噪音里了。\n\n' +
         '更要命的是：**N 端一旦被修饰，Edman 直接读不动**。乙酰化、焦谷氨酸（pyroglutamate）这些天然的 N 端封闭，让第一步的化学反应根本发生不了——**不是读得少，是一个都读不到**。\n\n' +
         '这跟第 1-3 节是同一个论证的另一面：**DNA 那一层什么都好办（能扩增、能测、能定点改），蛋白那一层什么都难办。**所以整门课的策略才是「在 DNA 上动手，让细胞去造蛋白」。',
      takeaway: '1000+ 碱基 vs 20–30 残基，还可能一个都读不到。又一次：DNA 层好办，蛋白层难办。'
    }
  ],
  points: [
    { term: 'Service', en: '"Standard overnight" is the usual commercial service tier.', cn: '服务类型：通常的商业服务是「标准过夜」。' },
    { term: 'Template', en: '500 ng of template DNA per reaction.', cn: '模板：每个反应 500 ng 模板 DNA。' },
    { term: 'Primer', en: 'You must also supply a sequencing primer.', cn: '引物：还必须自己提供一条测序引物。' },
    { term: 'Cost', en: 'About €5 per reaction — cheap enough that sequencing to verify is never the expensive step.', cn: '成本：每个反应约 5 欧元——便宜到「测序验证」从来不是流程里贵的那一步。' },
    { term: 'Read length', en: '1000–1200 bp per reaction.', cn: '读长：每个反应 1000–1200 bp。' },
    { term: 'Protein sequencing by contrast', en: 'Edman degradation is chemical, uses phenyl isothiocyanate, reads only 20–30 amino acids, and is expensive.', cn: '蛋白测序作为对比：Edman 降解是化学方法，使用苯异硫氰酸酯，只能读 20–30 个氨基酸，而且昂贵。' }
  ],
  beyondPoints: [
    { term: 'Chain termination', en: 'The reaction contains normal dNTPs plus a small fraction of dideoxy-NTPs. A ddNTP lacks the 3′-OH, so once incorporated the polymerase cannot add the next nucleotide and the chain terminates. Because incorporation is random, you generate a nested set of fragments terminating at every position.', cn: '链终止原理：反应中含有正常的 dNTP，加上一小部分双脱氧 NTP（ddNTP）。ddNTP 缺少 3′-羟基，一旦被掺入，聚合酶就无法再加下一个核苷酸，链就终止了。因为掺入是随机的，你会得到一整套在每个位置终止的、长度递增的片段。' },
    { term: 'How it is read', en: 'Modern versions label the four ddNTPs with four different fluorophores, separate the fragments by capillary electrophoresis, and read the colour order.', cn: '如何读出：现代方法用四种不同的荧光基团标记四种 ddNTP，通过毛细管电泳分离片段，然后读取颜色顺序。' },
    { term: 'Why ~1000 bp', en: 'Capillary electrophoresis loses the ability to resolve fragments differing by a single nucleotide as they get longer. That resolution limit, not the chemistry, sets the read length.', cn: '为什么是约 1000 bp：随着片段变长，毛细管电泳逐渐失去分辨相差一个核苷酸的能力。设定读长上限的是这个**分辨率极限**，而不是化学反应本身。' },
    { term: 'Why the first 20–40 bases are unreadable', en: 'Primer and dye-blob artefacts dominate the start of the trace.', cn: '为什么开头 20–40 个碱基读不出来：图谱起始段被引物峰和染料信号（dye blob）伪迹淹没。' },
    { term: 'Practical consequence 1', en: 'Place your sequencing primer 50–100 bp upstream of the region you actually care about. Many people design the primer right up against the site of interest, and the critical mutation then falls in the unreadable stretch.', cn: '实用结论一：测序引物要放在目标区**上游 50–100 bp**。很多人把引物设计得紧贴目标位点，结果最关键的突变位点正好落在读不出来的那一段里。' },
    { term: 'Practical consequence 2', en: 'Since one reaction reads only 1000–1200 bp, a long gene needs multiple internal sequencing primers covering it in overlapping segments.', cn: '实用结论二：一次只能读 1000–1200 bp，所以长基因必须设计**多条内部测序引物**，分段覆盖并留出重叠区。' },
    { term: 'The Edman contrast', en: 'Edman reads the protein N-terminus directly, one residue at a time, and is blocked entirely by N-terminal modifications such as acetylation or pyroglutamate. Twenty to thirty residues versus a thousand-plus bases is the whole reason we sequence DNA and infer protein — another face of the central-dogma argument.', cn: 'Edman 的对比：Edman 直接读蛋白的 N 端，一次一个残基，而且 N 端一旦被乙酰化或环化成焦谷氨酸就**完全读不动**。20–30 个残基对上 1000 多个碱基，这就是「读 DNA 再推蛋白」而不是反过来的全部原因——中心法则论证的又一个侧面。' }
  ],
  terms: [
    { en: 'Sanger sequencing', cn: 'Sanger 测序', def_en: 'Chain-termination sequencing using dideoxy-NTPs, read by capillary electrophoresis; ~1000–1200 bp per reaction, about €5.', def_cn: '使用双脱氧 NTP 的链终止测序法，通过毛细管电泳读取；每反应约 1000–1200 bp，约 5 欧元。' },
    { en: 'ddNTP', cn: '双脱氧核苷三磷酸', def_en: 'A dideoxynucleotide lacking the 3′-OH; once incorporated the chain cannot be extended, which is what terminates it.', def_cn: '缺少 3′-羟基的双脱氧核苷酸；一旦掺入，链就无法再延伸——这正是终止的原因。' },
    { en: 'Edman degradation', cn: 'Edman 降解', def_en: 'Chemical sequencing of a protein N-terminus using phenyl isothiocyanate; reads only 20–30 residues and fails on a blocked N-terminus.', def_cn: '用苯异硫氰酸酯对蛋白 N 端进行化学测序；只能读 20–30 个残基，N 端一旦被封闭就完全失效。' },
    { en: 'Dye blob', cn: '染料伪峰', def_en: 'An artefact from unincorporated fluorescent terminators that obscures the first 20–40 bases of a Sanger trace.', def_cn: '未掺入的荧光终止子造成的伪迹，会遮蔽 Sanger 图谱起始的 20–40 个碱基。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does a ddNTP terminate the growing chain?',
      q_cn: '为什么 ddNTP 会终止正在延伸的链？',
      options: ['It is not recognised as a substrate by the polymerase at all', 'It lacks the 3′-OH, so no further phosphodiester bond can be formed', 'It carries a fluorophore too bulky for the polymerase active site to accommodate', 'It base-pairs incorrectly and stalls the enzyme'],
      answer: 1,
      optionNotes: {
        0: { en: 'Termination needs the opposite of non-recognition: the polymerase accepts a ddNTP as an ordinary substrate and incorporates it, and only then is the chain stuck, because there is no 3-prime OH to accept the next phosphate. An analogue the enzyme refused would give no ladder of fragments at all.', cn: '这里方向反了。ddNTP 恰恰要被 polymerase 当成普通底物掺进去，掺进去之后因为没有 3-prime OH 接不上下一个磷酸，链才停住。如果酶根本不认它，就不会有任何终止片段，那套长度阶梯也就不存在。' }
      },
      why_en: 'No 3′-OH means no acceptor for the next nucleotide\'s phosphate. Random incorporation across many molecules generates a nested fragment set covering every position.',
      why_cn: '没有 3′-羟基就没有下一个核苷酸磷酸的受体。在大量分子中随机掺入，就产生了覆盖每个位置的、长度递增的片段集合。' },
    { type: 'mcq',
      q_en: 'Where should you place a sequencing primer relative to a mutation you want to verify?',
      q_cn: '要验证一个突变，测序引物应该放在相对于突变位点的什么位置？',
      options: ['Directly adjacent to the site, so the signal at the mutation is as strong as possible', '50–100 bp upstream, because the first 20–40 bases of the trace are unreadable', '1000 bp upstream, at the very limit of a single read', 'Downstream of the mutation, since the trace is cleanest at the end of a read'],
      answer: 1,
      optionNotes: {
        0: { en: 'Signal strength is not what limits the start of a trace. The first 20 to 40 bases sit under the primer peak and the unincorporated dye blobs, so they are unreadable no matter how good the sample is. A primer placed against the site puts the mutation exactly into that dead zone.', cn: '限制 trace 开头的不是信号强弱，而是前 20 到 40 个碱基被 primer 峰和未掺入的染料 blob 盖住，样品再好也读不出来。把 primer 贴着位点设计，正好把突变放进这段死区。' }
      },
      why_en: 'Primer and dye-blob artefacts swamp the start of the trace. A primer designed right against the site puts the mutation in the unreadable stretch — a mistake that costs weeks.',
      why_cn: '引物峰和染料伪迹淹没了图谱的起始段。引物紧贴目标位点会让突变正好落在读不出来的那一段——这个错误会浪费好几周。' },
    { type: 'mcq',
      q_en: 'What sets the ~1000–1200 bp Sanger read length?',
      q_cn: '是什么决定了 Sanger 约 1000–1200 bp 的读长？',
      options: ['The polymerase falls off the template after about 1000 nucleotides, so no longer fragment is ever synthesised', 'Capillary electrophoresis can no longer resolve a one-nucleotide difference', 'The ddNTPs in the reaction are used up after about 1000 incorporations', 'The fluorescent dye labels photobleach on the longer fragments'],
      answer: 1,
      optionNotes: {
        0: { en: 'This confuses enzyme processivity with the separation step. Cycle sequencing does make fragments much longer than 1000 nucleotides; what fails is capillary electrophoresis, where a 1000 nt and a 1001 nt fragment differ in length by only one part in a thousand and stop resolving into separate peaks.', cn: '这是把酶的 processivity 和分离步骤搞混了。cycle sequencing 本身做得出远长于 1000 nt 的片段，出问题的是 capillary electrophoresis：1000 nt 和 1001 nt 的长度只差千分之一，峰就分不开了。' }
      },
      why_en: 'It is an electrophoretic resolution limit, not a chemical one. Longer fragments differ proportionally less in size and cease to separate cleanly.',
      why_cn: '这是**电泳分辨率**的极限，不是化学反应的极限。片段越长，相差一个核苷酸的相对差异越小，就分不开了。' },
    { type: 'short',
      q_en: 'Contrast Sanger sequencing with Edman degradation, and say what the contrast implies.',
      q_cn: '对比 Sanger 测序与 Edman 降解，并说明这个对比意味着什么。',
      accept: ['1000', 'Edman', '20', '30', 'N-terminus', 'blocked', 'DNA', 'infer'],
      answer_en: 'Sanger reads a thousand to twelve hundred bases per reaction for about five euros. Edman degradation is chemical, uses phenyl isothiocyanate, reads the protein N-terminus one residue at a time for only twenty to thirty residues, is expensive, and fails completely if the N-terminus is blocked by acetylation or pyroglutamate. The implication is that we sequence DNA and infer the protein sequence rather than the other way round — which is another face of the central-dogma argument, since the nucleic acid layer is again the only one with cheap, scalable tools.',
      answer_cn: 'Sanger 一个反应读 1000–1200 个碱基，约 5 欧元。Edman 降解是化学方法，用苯异硫氰酸酯，从蛋白 N 端一次读一个残基，只能读 20–30 个，价格昂贵，而且 N 端一旦被乙酰化或环化成焦谷氨酸封闭就彻底失效。这个对比说明：我们是**测 DNA 再推蛋白**，而不是反过来——这又是中心法则论证的另一个侧面，因为核酸这一层再一次成为唯一拥有廉价、可放大工具的层面。' }
  ],
  oral: {
    q_en: 'Describe Sanger sequencing, its practical parameters, and how it compares with protein sequencing.',
    q_cn: '描述 Sanger 测序、它的实际参数，以及它与蛋白测序的比较。',
    model_en: 'Sanger sequencing is chain termination. The reaction contains normal dNTPs plus a small fraction of dideoxy-NTPs, which lack the three-prime hydroxyl; once one is incorporated the polymerase cannot extend further, so the chain stops. Because incorporation is random across many template molecules, you generate a nested set of fragments terminating at every position. Modern versions label the four ddNTPs with four fluorophores, separate the fragments by capillary electrophoresis, and read the colour order. Practically, a standard overnight service takes five hundred nanograms of template plus your own sequencing primer, costs about five euros, and returns a thousand to twelve hundred base pairs. The read length is set by electrophoretic resolution — as fragments get longer, a one-nucleotide difference stops separating cleanly. Two consequences matter in the lab. The first twenty to forty bases are unreadable because of primer and dye-blob artefacts, so place your sequencing primer fifty to a hundred base pairs upstream of the region you care about; and since one read covers only about a kilobase, a long gene needs several internal primers giving overlapping coverage. By contrast, protein sequencing by Edman degradation is chemical, uses phenyl isothiocyanate, reads only twenty to thirty residues, is expensive, and is blocked entirely by N-terminal modifications. Twenty residues against a thousand bases is precisely why we sequence DNA and infer protein rather than the reverse.',
    checklist: ['Chain termination with ddNTPs lacking 3′-OH', 'Nested fragment set, four fluorophores, capillary electrophoresis', '500 ng template + your own primer, ~€5, 1000–1200 bp', 'Read length set by electrophoretic resolution', 'First 20–40 bases unreadable — primer and dye blobs', 'Place primer 50–100 bp upstream of the target', 'Long genes need overlapping internal primers', 'Edman: 20–30 residues, expensive, blocked N-terminus fails', 'Hence sequence DNA and infer protein']
  }
},

/* ==================== PART II — LECTURE 2 ==================== */

{
  id: '1-7',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.7',
  enTitle: 'A historical aside — purifying insulin in 1922',
  cnTitle: '历史插曲——1922 年的胰岛素纯化',
  slides: 'L2 s.2',
  coverage: 'full',
  coverageNote: 'The five-step sequence is exactly as the slide walks through it. The forward links to protease inhibitors, ammonium-sulfate precipitation and the need for a functional assay are the note block, and are the reason this old anecdote earns its own node.',
  summary: {
    en: 'Before any recombinant technology existed, insulin was purified from fresh bovine pancreas by acid-ethanol extraction, debris removal, fractional precipitation, and bioassay in diabetic dogs — ending with the first human treatment, Leonard Thompson, in 1922. It is a genuinely good teaching example: two of its steps reappear by name in Lecture 4, and its bioassay step makes a point about functional verification that gel-based purity checks alone cannot make.',
    cn: '在任何重组技术出现之前，胰岛素是通过酸性乙醇提取、去除组织碎片、分级沉淀、再在糖尿病犬身上做生物测定，从新鲜牛胰腺中纯化出来的——最终在 1922 年用于第一例人体治疗，患者是 Leonard Thompson。这是一个真正好的教学案例：其中两步在第 4 讲会以同样的名字再次出现；而它的生物测定步骤说明了一个道理——单靠跑胶看纯度是说明不了功能的。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这一节只有一句话要带走：**跑胶看到的是纯度，不是活性。**1922 年靠糖尿病犬做生物测定来确认这一点，今天换了手段，道理没变。',
  skipIt: '1922 这个年份、Leonard Thompson 这个人名、以及 75% 乙醇 / pH 2–3 这些具体数值，不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时，列的九条全是克隆方法（plasmids、restriction enzymes、Gateway、LIC、Gibson…），**这一节一个字都没出现**。要留意的是**分级沉淀**和**生物测定**这两个概念本身，它们在第 4 讲会再遇到。',
  explain: [
    {
      q: '为什么用「酸性乙醇」，随便一种缓冲液不行吗？',
      a: '因为这一步**同时干了两件事**，而且两件都非干不可。\n\n' +
         '**第一，pH 2–3 让蛋白酶失活。**这一点特别关键：胰腺是全身**消化酶最多的器官**——胰蛋白酶、胰凝乳蛋白酶，全在里面。你要提取的胰岛素，正泡在一锅专门用来降解蛋白的酶里。组织一磨碎，这些酶立刻开始工作。**不先把它们按住，你什么都提不到。**\n\n' +
         '**第二，乙醇做选择性沉淀。**大量杂蛋白在 75% 乙醇里析出来了，而胰岛素**仍然溶得住**。\n\n' +
         '所以这不是「随便找个溶剂把东西泡出来」，而是一个**同时灭活干扰、又做初步分离**的设计。在没有柱层析、没有蛋白酶抑制剂的年代，用一步溶剂条件解决两个问题。',
      takeaway: '酸灭活蛋白酶（胰腺全是消化酶），醇做选择性沉淀。一步两用。'
    },
    {
      q: '「分级沉淀」怎么能分开东西？',
      a: '靠的是**不同蛋白的溶解度在不同条件下变化的幅度不一样**。\n\n' +
         '调什么？**pH、温度、乙醇浓度**这三样。每调到一组条件，就有一批蛋白的溶解度降到析出为止，另一批还溶着。\n\n' +
         '于是操作变成两步，**方向相反**：\n\n' +
         '先调到一组「**杂质沉、胰岛素留**」的条件，把沉淀滤掉，扔掉的是沉淀。\n\n' +
         '再调到一组「**胰岛素也沉**」的条件，这次留下的是沉淀，扔掉的是上清。\n\n' +
         '同一个手段用两次，一次扔沉淀一次留沉淀，纯度就上去了。\n\n' +
         '底层的物理跟 Glargine 那一节是同一套：**蛋白在某个 pH 附近溶解度最低**（净电荷接近零，分子之间不再互相排斥）。1922 年的人不用「等电点」这个词，但用的就是这件事。',
      takeaway: '先让杂质沉、扔沉淀；再让目标沉、留沉淀。溶解度差异被用了两次。'
    },
    {
      q: '为什么非要在糖尿病犬身上试一遍？',
      a: '因为**没有任何化学指标能告诉你「它还管不管用」**。\n\n' +
         '1922 年当然没有 SDS-PAGE。但就算有，跑胶告诉你的也只是「样品里有几种蛋白、各有多少」——**它测的是纯度，是一个化学量**。而你真正想知道的是「打进去能不能降血糖」，**那是一个功能量**。\n\n' +
         '一个变性了的胰岛素，跑胶的位置跟活性胰岛素一模一样。\n\n' +
         '所以那个年代的做法是最直接的：**每一个组分都拿去给糖尿病犬打一针，看血糖降不降。**这就是生物测定（bioassay）。\n\n' +
         '这条道理今天完全没有过时。回想 EPO 那一节：在 E. coli 里做出来的 EPO，**序列一个字母不差，跑胶又纯又漂亮，活性是零**——因为缺的是糖链，而糖链在胶上看不出来。\n\n' +
         '所以这一节留在课里，不是为了讲历史，是为了讲这一句：**纯度和活性是两件事，必须分别验证。**',
      takeaway: '胶测纯度，生物测定测功能。EPO 那个例子就是「很纯但完全没活性」。'
    }
  ],
  points: [
    { term: 'Step 1 — extraction', en: 'Fresh or frozen bovine pancreas was minced and extracted in ~75% ethanol at pH 2–3. The acidic alcohol inactivated proteases and kept insulin soluble.', cn: '第一步——提取：新鲜或冷冻的牛胰腺切碎后用约 75% 乙醇、pH 2–3 提取。酸性乙醇能灭活蛋白酶，同时让胰岛素保持溶解。' },
    { term: 'Step 2 — removal of debris', en: 'Filtration and centrifugation removed insoluble tissue and fats.', cn: '第二步——去除碎片：过滤和离心去除不溶的组织和脂肪。' },
    { term: 'Step 3 — fractional precipitation', en: 'Adjusting pH, temperature and ethanol concentration precipitated contaminants while insulin stayed in solution; insulin was then itself precipitated in purer form.', cn: '第三步——分级沉淀：调节 pH、温度和乙醇浓度，让杂质沉淀而胰岛素留在溶液中；随后再把胰岛素本身以更纯的形式沉淀出来。' },
    { term: 'Step 4 — bioassay testing', en: 'Each fraction was tested in diabetic dogs to confirm hypoglycaemic activity.', cn: '第四步——生物测定：每个组分都在糖尿病犬身上测试，确认降血糖活性。' },
    { term: 'Step 5 — outcome', en: 'Safe, injectable insulin; the first human treatment was Leonard Thompson, 1922.', cn: '第五步——结果：得到安全可注射的胰岛素；第一例人体治疗是 1922 年的 Leonard Thompson。' }
  ],
  points2: null,
  terms: [
    { en: 'Fractional precipitation', cn: '分级沉淀', def_en: 'Purification by exploiting differential solubility under changing pH, temperature or solvent concentration — the ancestor of ammonium-sulfate precipitation.', def_cn: '利用不同物质在 pH、温度或溶剂浓度变化下溶解度不同来纯化——是硫酸铵沉淀法的前身。' },
    { en: 'Bioassay', cn: '生物测定', def_en: 'A functional test of activity in a living system, as opposed to a purity check such as a gel — necessary to confirm you have the right, active protein.', def_cn: '在活体系统中测试功能活性，区别于跑胶这类纯度检测——用来确认你拿到的是正确且有活性的蛋白。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why was the pancreas extracted in acidic ethanol specifically?',
      q_cn: '为什么胰腺要专门用酸性乙醇提取？',
      options: ['To denature and remove the insulin so that only the contaminating proteins remained', 'The acidic alcohol inactivated proteases while keeping insulin soluble', 'To precipitate insulin immediately for easy filtration', 'To sterilise the tissue and kill any bacteria before extraction began'],
      answer: 1,
      optionNotes: {
        2: { en: 'This moves a later step of the procedure to the front. Acidic ethanol is chosen to keep insulin in solution while proteases are inactivated and much of the other protein is left behind; deliberately precipitating insulin comes afterwards, by differential solubility, which is the ancestor of ammonium-sulfate precipitation.', cn: '这是把后面的步骤搬到了第一步。acidic ethanol 的作用是让 insulin 留在溶液里，同时让 proteases 失活、把大部分杂蛋白甩掉；主动把 insulin 沉下来是后面靠 differential solubility 做的，也就是 ammonium-sulfate precipitation 的前身。' }
      },
      why_en: 'Protease inactivation was the point — insulin is a small protein and would otherwise be degraded during extraction. This foreshadows Lecture 4\'s protease inhibitors.',
      why_cn: '灭活蛋白酶才是关键——胰岛素是个小蛋白，不然提取过程中会被降解掉。这正是第 4 讲蛋白酶抑制剂的伏笔。' },
    { type: 'mcq',
      q_en: 'What does the bioassay-in-dogs step demonstrate about purification in general?',
      q_cn: '在犬身上做生物测定这一步，对纯化这件事总体说明了什么？',
      options: ['That purity measured by mass is sufficient proof that the product is correct', 'That a functional assay, not just a purity check, confirms you have the right active protein', 'That animal testing is required by law for every protein purification', 'That insulin activity cannot be measured in any way other than in a living animal'],
      answer: 1,
      why_en: 'A gel shows purity, not function. The dog bioassay is the point that a functional readout is what actually confirms success.',
      why_cn: '跑胶只能看纯度，看不出功能。犬的生物测定说明的正是：真正确认成功的是**功能读数**。' },
    { type: 'mcq',
      q_en: 'Which two later-course techniques does this 1922 procedure prefigure?',
      q_cn: '这套 1922 年的流程为后面课程中的哪两项技术埋下了伏笔？',
      options: ['PCR and Sanger sequencing', 'Protease inhibitors and ammonium-sulfate precipitation', 'Golden Gate cloning and Gateway cloning', 'SDS-PAGE and Western blotting'],
      answer: 1,
      optionRefs: { 0: '1-6', 2: '1-14', 3: '2-43' },
      why_en: 'Step 1 (protease inactivation) and step 3 (differential solubility) reappear by name in Lecture 4 as protease inhibitors and ammonium-sulfate precipitation.',
      why_cn: '第一步（灭活蛋白酶）和第三步（差异溶解度）在第 4 讲会以同样的名字再次出现——蛋白酶抑制剂和硫酸铵沉淀。' },
    { type: 'short',
      q_en: 'Summarise the five steps of the 1922 insulin purification and name the patient who first received it.',
      q_cn: '概述 1922 年胰岛素纯化的五个步骤，并说出第一位接受治疗的患者姓名。',
      accept: ['ethanol', 'pH 2', 'precipitation', 'bioassay', 'dogs', 'Leonard Thompson'],
      answer_en: 'Extraction of minced pancreas in acidic ethanol at pH two to three, which inactivated proteases and kept insulin soluble; removal of debris by filtration and centrifugation; fractional precipitation by adjusting pH, temperature and ethanol concentration; bioassay in diabetic dogs to confirm activity; and the outcome, safe injectable insulin first given to Leonard Thompson in 1922.',
      answer_cn: '在 pH 2–3 的酸性乙醇中提取切碎的胰腺，灭活蛋白酶同时保持胰岛素溶解；过滤离心去除碎片；调节 pH、温度和乙醇浓度做分级沉淀；在糖尿病犬身上做生物测定确认活性；最终得到安全可注射的胰岛素，1922 年首次用于患者 Leonard Thompson。' }
  ],
  oral: {
    q_en: 'Describe the original 1922 insulin purification and what it still teaches.',
    q_cn: '描述 1922 年最初的胰岛素纯化流程，以及它留给我们的教训。',
    model_en: 'Fresh or frozen bovine pancreas was minced and extracted in about seventy-five percent ethanol at pH two to three; the acidic alcohol inactivated proteases and kept insulin soluble. Filtration and centrifugation removed insoluble tissue and fat. Fractional precipitation, adjusting pH, temperature and ethanol concentration, removed contaminants while insulin stayed in solution, and insulin was then itself precipitated in purer form. Each fraction was tested in diabetic dogs to confirm hypoglycaemic activity, and the outcome was safe injectable insulin, first given to a human patient, Leonard Thompson, in 1922. Two of these steps are not just historical colour: protease inactivation reappears in Lecture four as protease inhibitors, and differential solubility reappears as ammonium-sulfate precipitation. And the bioassay step makes a point that still holds — a gel shows you purity, not function, so a functional assay is what actually confirms you have the right, active protein.',
    checklist: ['Acid-ethanol extraction inactivates proteases', 'Filtration/centrifugation removes debris', 'Fractional precipitation via pH/temp/ethanol', 'Bioassay in diabetic dogs', 'First patient: Leonard Thompson, 1922', 'Foreshadows Lec 4: protease inhibitors, ammonium sulfate', 'Lesson: functional assay ≠ purity check']
  }
},

{
  id: '1-8',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.8',
  enTitle: 'Cloning design software',
  cnTitle: '克隆设计软件',
  slides: 'L2 s.3',
  coverage: 'full',
  coverageNote: 'The commercial/freeware split and tool names are from the slide. The note on Benchling and free SnapGene Viewer is flagged as such — it is the practical version of the slide for someone doing the §22 assignment today.',
  summary: {
    en: 'Commercial suites bundle primer design, cloning, sequencing-trace analysis and vector databases into one interconnected workflow, at a price. Freeware covers the basics — NEBcutter is enough to find restriction sites in a given sequence, which is all the worked exercise in §1.20 actually needs. Benchling has become the de-facto free academic standard, and SnapGene Viewer is free to view designs even though saving your own costs money.',
    cn: '商业套件把引物设计、克隆、测序图谱分析和载体数据库整合成一套互联的工作流，代价是价格。免费软件能覆盖基本需求——NEBcutter 足以在给定序列中找限制酶位点，这正是 §1.20 那道课后练习全部需要的功能。Benchling 已经成为事实上的免费学术标准，而 SnapGene Viewer 查看设计免费，只是保存自己的设计要付费。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '做 §1.20 那道练习，你**只需要一个功能：在给定序列里找限制酶位点**。NEBcutter 免费，够用。',
  skipIt: '这一串软件名单和网址不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时，列的九条全是克隆方法，**没有任何软件名**。但注意：不用背 ≠ 不用会，作业是真要动手用的。',
  explain: [
    {
      q: '这么多软件，做作业到底要用到哪个功能？',
      a: '**一个：在一段给定的序列里，找出哪些限制酶能切、切在哪。**别的都是锦上添花。\n\n' +
         '§1.20 那道练习的核心动作，就是把这个功能**用两次再取差集**：\n\n' +
         '第一次，在**载体的 MCS**（多克隆位点）上找有哪些酶切位点可用。\n\n' +
         '第二次，在**你的插入片段**里找哪些酶会切。\n\n' +
         '然后挑**「MCS 里有、插入片段里没有」**的那些——因为一个在插入片段内部也切的酶，会把你的基因拦腰切断。\n\n' +
         '这就是全部。NEBcutter 把一段序列贴进去就能给你这张表，不用装软件、不用注册。',
      takeaway: '找位点 → 载体上找一次、插入片段上找一次 → 取差集。NEBcutter 就够。'
    },
    {
      q: '那商业套件贵在哪？它多给了什么？',
      a: '多给的不是功能，是**互联**。\n\n' +
         '免费工具是一个个**孤立的功能**：这里查酶切位点，那里算引物 Tm，测序结果再拿到第三个地方去比对。中间的搬运和对齐全靠你自己，而且每搬一次就多一次出错的机会。\n\n' +
         '商业套件把这些**串成一条工作流**：设计好的引物直接在构建图上虚拟 PCR、虚拟酶切、虚拟连接，做出来的测序图谱能直接贴回同一张图上比对，载体数据库里几千个常用质粒随时调用。\n\n' +
         '所以它的价值跟**使用频率**成正比。为一次作业买它显然不值；对一个每周都在建构建体的实验室，省下的时间和避免的错误就值回票价了。\n\n' +
         '这跟第 1-4-1 节买现成克隆是同一个判断：**你在为「别人已经替你做过的整合工作」付钱。**',
      takeaway: '贵在把孤立功能串成一条流水线。值不值取决于你用得有多频繁。'
    },
    {
      q: 'Benchling 和 SnapGene Viewer 的「免费」，免费到什么程度？',
      a: '**SnapGene Viewer：看免费，存要钱。**你可以打开、浏览、检查任何 `.dna` 文件的图谱和注释，一分钱不花。要**保存你自己的设计**才需要付费版。所以拿它读别人给的构建图完全没问题。\n\n' +
         '**Benchling：学术用户免费，而且已经是事实上的标准。**它除了克隆设计，还兼做电子实验记录本（ELN），所以很多实验室干脆整个搬上去。\n\n' +
         '实用建议：**做这门课的作业，NEBcutter 找位点 + Benchling 或 SnapGene Viewer 看图，就够了。**不用为此花钱。',
      takeaway: 'SnapGene Viewer 看免费存收费；Benchling 学术免费。作业用这两个加 NEBcutter 足够。'
    }
  ],
  points: [
    { term: 'Commercial suites', en: 'Many helpful features and an interconnected workflow — primer design, cloning, sequencing traces, sequence analysis — plus vector databases, predefined cloning strategies, and multiple modules covering molecular biology, genomics, transcriptomics, and protein analysis and modelling. Expensive.', cn: '商业套件：功能丰富、工作流互联——引物设计、克隆、测序图谱、序列分析——加上载体数据库、预设的克隆策略，以及覆盖分子生物学、基因组学、转录组学、蛋白分析和建模的多个模块。价格昂贵。' },
    { term: 'Named commercial suites', en: 'SnapGene (snapgene.com), DNAStar Lasergene, Vector NTI (ThermoFisher).', cn: '几个具名的商业套件：SnapGene（snapgene.com）、DNAStar Lasergene、Vector NTI（ThermoFisher）。' },
    { term: 'Freeware', en: 'NEBcutter (nc3.neb.com/NEBcutter/) is very good and aimed preferentially at NEB products. Webcutter (heimanlab.com/cut2.html). Expasy (expasy.org). A comprehensive list lives at polysom.verilite.de/science/DNARNACloning.html.', cn: '免费软件：NEBcutter（nc3.neb.com/NEBcutter/）很好用，偏向 NEB 产品。Webcutter（heimanlab.com/cut2.html）。Expasy（expasy.org）。完整列表见 polysom.verilite.de/science/DNARNACloning.html。' }
  ],
  beyondPoints: [
    { term: 'Benchling and SnapGene Viewer', en: 'Benchling is now the de-facto free academic standard for cloning design and lab notebooks, and SnapGene Viewer is free — you only pay to save your own designs. For the worked assignment in §1.20 you will need one of these, and NEBcutter alone is enough to find restriction sites in a given sequence.', cn: 'Benchling 和 SnapGene Viewer：Benchling 现在是克隆设计和实验记录事实上的免费学术标准，而 SnapGene Viewer 免费——只有保存自己的设计才要付费。要做 §1.20 那道练习题，你需要用到其中一个，而单靠 NEBcutter 就足以在给定序列中找到限制酶位点。' }
  ],
  terms: [
    { en: 'NEBcutter', cn: 'NEBcutter', def_en: 'A free web tool that finds restriction sites in a given DNA sequence, biased toward NEB\'s enzyme catalogue.', def_cn: '一个免费的网页工具，用于在给定 DNA 序列中查找限制酶位点，偏向 NEB 的酶目录。' },
    { en: 'Benchling', cn: 'Benchling', def_en: 'A free, web-based platform for cloning design and electronic lab notebooks; the current academic standard.', def_cn: '免费的网页版克隆设计与电子实验记录平台；目前的学术标准工具。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the key advantage a commercial suite like SnapGene offers over free tools?',
      q_cn: 'SnapGene 这类商业套件相对免费工具的关键优势是什么？',
      options: ['It is the only software able to find restriction sites in a sequence', 'One interconnected workflow plus vector databases and predefined strategies', 'It is required by journals when you publish a construct', 'It is the only one of these tools that runs without internet access'],
      answer: 1,
      why_en: 'The value is workflow integration and databases, not any single capability free tools lack — NEBcutter alone covers basic restriction-site finding.',
      why_cn: '价值在于工作流的整合和数据库，而不是某个免费工具做不到的单项能力——单靠 NEBcutter 就能满足基本的限制酶位点查找。' },
    { type: 'mcq',
      q_en: 'For the worked cloning exercise (finding usable restriction sites), which free tool is sufficient?',
      q_cn: '对于课后的克隆练习（找可用的限制酶位点），哪个免费工具就够用？',
      options: ['Only a paid SnapGene licence', 'NEBcutter', 'Vector NTI', 'DNAStar Lasergene'],
      answer: 1,
      why_en: 'NEBcutter alone is enough to find restriction sites in a given sequence, which is exactly what the assignment needs.',
      why_cn: '单靠 NEBcutter 就足以在给定序列里找到限制酶位点，这正是这道练习题所需要的全部功能。' },
    { type: 'mcq',
      q_en: 'What is true about SnapGene Viewer\'s cost model?',
      q_cn: 'SnapGene Viewer 的收费模式是怎样的？',
      options: ['It is entirely free including saving your own designs', 'Viewing is free; you only pay to save your own designs', 'It requires a subscription for any use', 'It is free only for the first 30 days'],
      answer: 1,
      why_en: 'SnapGene Viewer costs nothing to view designs — only saving your own work requires payment.',
      why_cn: 'SnapGene Viewer 查看设计不要钱——只有保存自己的作品才需要付费。' },
    { type: 'short',
      q_en: 'Name the commercial and free software options given, and say which is enough for finding restriction sites.',
      q_cn: '说出讲义列出的商业和免费软件选项，并说明哪一个足以用来查找限制酶位点。',
      accept: ['SnapGene', 'Vector NTI', 'Lasergene', 'NEBcutter', 'Benchling'],
      answer_en: 'Commercial suites are SnapGene, DNAStar Lasergene and Vector NTI — expensive but interconnected workflows. Freeware includes NEBcutter, Webcutter and Expasy, and Benchling has become the de-facto free academic standard for design plus lab notebooks. NEBcutter alone is enough to find restriction sites in a given sequence.',
      answer_cn: '商业套件有 SnapGene、DNAStar Lasergene 和 Vector NTI——贵，但工作流是互联的。免费软件有 NEBcutter、Webcutter 和 Expasy，而 Benchling 已经成为设计加实验记录事实上的免费学术标准。单靠 NEBcutter 就足以在给定序列中找到限制酶位点。' }
  ],
  oral: {
    q_en: 'What software options exist for cloning design, and what is the practical minimum you need?',
    q_cn: '有哪些克隆设计软件可选？实际所需的最低配置是什么？',
    model_en: 'Commercial suites like SnapGene, DNAStar Lasergene and Vector NTI bundle primer design, cloning, sequencing-trace analysis and sequence analysis into one interconnected workflow, with vector databases and predefined cloning strategies — useful, but expensive. On the free side, NEBcutter, Webcutter and Expasy cover the basics, and in practice Benchling has become the de-facto free academic standard for both cloning design and lab notebooks, while SnapGene Viewer is free to view designs even though saving your own costs money. For the practical minimum — say, the worked cloning exercise where you need to find restriction sites in a given sequence — NEBcutter alone is enough.',
    checklist: ['Commercial: SnapGene, Lasergene, Vector NTI — interconnected workflow', 'Freeware: NEBcutter, Webcutter, Expasy', 'Benchling — de-facto free academic standard', 'SnapGene Viewer — free to view, paid to save', 'NEBcutter alone suffices for finding restriction sites']
  }
},

{
  id: '1-9',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.9',
  enTitle: 'Plasmids — cloning vs expression, and the origin of replication',
  cnTitle: '质粒——克隆型与表达型，以及复制起点',
  slides: 'L2 s.4–6',
  coverage: 'full',
  coverageNote: 'The size range, the cloning/expression comparison table and the ORI/copy-number table are on the slides. Why cloning plasmids want high copy number and expression plasmids do not — the metabolic-burden argument — is a note block but is the reasoning that makes the whole table make sense rather than something to memorise as a list.',
  summary: {
    en: 'A plasmid is a small circular DNA molecule replicating independently of chromosomal DNA, typically 1,500–20,000 bp, smaller is better, and the minimum viable plasmid is just an origin of replication plus an antibiotic resistance gene. Cloning plasmids want high copy number because their only job is yield; expression plasmids are usually lower copy because high copy number imposes a metabolic burden that hurts expression. The ORI sets copy number, is rich in A and T for easier strand separation, and same-ORI plasmids are incompatible in one cell.',
    cn: '质粒是一个能独立于染色体 DNA 复制的小型环状 DNA 分子，一般 1500–20000 bp，越小越好；能存活的最简质粒就是一个复制起点加一个抗生素抗性基因。克隆质粒希望拷贝数高，因为它唯一的任务就是产量；表达质粒通常拷贝数较低，因为高拷贝数会带来**代谢负担**，反而损害表达。复制起点（ORI）决定拷贝数、富含 A/T 便于链分离，而**相同 ORI 的质粒在同一个细胞里不相容**。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.4', src: 'img/figures/L2_s04_1.webp' },
    { slide: 'L2 s.4', src: 'img/figures/L2_s04_2.webp' },
    { slide: 'L2 s.4', src: 'img/figures/L2_s04_3.webp' },
    { slide: 'L2 s.6', src: 'img/figures/L2_s06_1.webp' },
    { slide: 'L2 s.6', src: 'img/figures/L2_s06_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**ORI 决定拷贝数**，而且**相同 ORI 的两个质粒不能共存于一个细胞**。\n\n' +
            '还有一个反直觉的事实要记牢：**表达质粒是低拷贝的**（pET 只有 15–20 份，pUC 有 500–700），原因是代谢负担。',
  skipIt: 'ColE1 / pMB1 / F1 这些 ORI 的名字不必逐个背，但**「pET 低拷贝、pUC 高拷贝」这个对比要记**。老师在第 3 讲开头给第 2 讲做 RECAP 时，第一条写的就是 **Plasmids – definition, ORI, positive/negative selection**——ORI 是被点名的。',
  explain: [
    {
      q: 'ORI（复制起点）到底是个什么东西？',
      trace: {
        what: '质粒上的**一段序列**，复制从这里开工。注意它**不是一个酶，也不是一台机器**，它只是一个位置标记加一小套调控元件。',
        from: '关键的一句：**质粒不编码自己的复制机器**。真正干活的是**宿主细菌的蛋白**——聚合酶、解旋酶全是借来的。质粒能做的只是在自己身上放一个宿主认得的「从这里开始」的信号。这也解释了为什么质粒能这么小：把复制机器全带上就不可能只有几千 bp 了。',
        to: '两个后果，都要记：\n\n**ORI 决定这个质粒在一个细胞里能有几份**（拷贝数），因为拷贝数的调控元件就在 ORI 里。\n\n**相同 ORI 的两个质粒不相容**——见下一条。想在一个细胞里同时表达两个蛋白，两个质粒必须选**不同的 ORI**（而且是不同的抗性基因）。',
        family: '常见的几个：ColE1、pMB1（及其突变版）、pBR322、F1。名字不用背，但要知道它们对应的拷贝数差得非常远。',
        numbers: 'pUC（突变 pMB1）500–700 份；pBluescript（突变 ColE1）300–500 份；**pET 和 pGEX（pBR322）只有 15–20 份**。'
      },
      takeaway: 'ORI = 一个位置标记 + 拷贝数调控。复制的活是宿主干的，质粒只负责发号施令。'
    },
    {
      q: '为什么 ORI 富含 A 和 T？这看起来很随意。',
      a: '一点都不随意，是**氢键数**决定的。\n\n' +
         '**A-T 之间是 2 个氢键，G-C 之间是 3 个。**所以一段 AT 富集的序列，把两条链拉开所需要的能量比 GC 富集的序列低——熔点（Tm）更低。\n\n' +
         '而复制的第一个动作就是**把双链解开**。把这个动作安排在整条质粒上最容易解开的地方，显然最省力，也最好控制。\n\n' +
         '这条规律在这门课里会反复出现：**引物设计**要算 GC 含量和 Tm、**PCR 的变性温度**、**核酸杂交的严谨度**，背后全是同一件事——**GC 多则结合牢、要更高温度才分得开**。\n\n' +
         '看到「AT 富集」四个字，第一反应应该是「这里容易打开」。',
      takeaway: 'A-T 两个氢键，G-C 三个。AT 富集 = 熔点低 = 好解链，所以复制从这里起步。'
    },
    {
      q: '「质粒不相容」到底是怎么个不相容法？',
      a: '不是它们互相打架，而是**细胞分不清谁是谁**。\n\n' +
         '质粒的份数不是随便涨的，它靠 ORI 区域里的一套负反馈来数数：数目多了就抑制复制，少了就放开。**而这套调控认的是序列，不是分子的身份。**\n\n' +
         '现在你把两个 ORI 相同的质粒放进同一个细胞。调控系统一数：「有 20 份，够了。」——它根本不知道这 20 份里有 12 份是 A、8 份是 B。\n\n' +
         '接下来细菌分裂时，这些分子是**随机分配**到两个子细胞里的。既然总数被压在上限，两种质粒实际上在争夺同一个固定的名额，几代之后必然有一方在某个细胞谱系里被挤到零。这就叫不相容。\n\n' +
         '**实际后果很具体**：如果你要在一个细菌里同时表达两个蛋白（比如一个复合物的两个亚基），两个质粒必须**既是不同的 ORI，又是不同的抗生素抗性**——前者保证它们能共存，后者保证你能同时筛住它们。',
      takeaway: '拷贝数调控认序列不认身份，所以同 ORI 的质粒抢同一个名额。共表达要不同 ORI + 不同抗性。'
    },
    {
      q: '为什么克隆质粒要高拷贝，表达质粒反而要低拷贝？',
      a: '因为**这两种质粒的任务根本不一样**。\n\n' +
         '**克隆质粒的唯一任务是产量。**你养一管菌、做个 miniprep，想尽可能多地拿到 DNA。拷贝数越高，抽出来的 DNA 越多。这里没有任何权衡，**高就是好**。\n\n' +
         '**表达质粒的任务是让细胞好好造蛋白，而细胞的资源是有限的。**500 份质粒意味着 500 份 DNA 要复制、500 个基因在转录，核苷酸、氨基酸、ATP 全被这件事吃掉。细胞长得慢，**结果反而是蛋白更少**。这就叫**代谢负担（metabolic burden）**。\n\n' +
         '所以数字是反直觉的，很多人第一次看到会以为搞错了：**pET 这种专门用来大量表达蛋白的载体，只有 15–20 份**，比克隆用的 pUC 少了三十倍。\n\n' +
         '「更多的基因拷贝 ≠ 更多的蛋白」——这个权衡在第 12 讲的代谢工程里会以更大的规模再出现一次：**逼细胞多生产你要的东西，代价永远是它自己长得更差。**',
      takeaway: '克隆要 DNA 产量，越多越好；表达要细胞状态，太多反而伤产量。'
    },
    {
      q: 'recA⁻ 和 endA⁻ 这两个标记在防什么？',
      a: '两个都属于「**不用就会出事，而且出了事你多半不会立刻发现**」的那一类。\n\n' +
         '**recA⁻ —— 防的是你的构建体被悄悄改掉。**RecA 蛋白负责同源重组。如果你的质粒里有**重复序列**（两个相同的启动子、两份相同的标签、重复的接头），在 recA⁺ 的细胞里它可以自己跟自己重组，**把两段重复之间的东西整个删掉**。\n\n' +
         '可怕之处在于：删完的质粒更短、复制更快，还会在培养里逐渐占上风。你什么异常都看不到，**直到测序才发现少了一大段**。\n\n' +
         '**endA⁻ —— 防的是你的 miniprep 变成一管糊。**内切核酸酶 A 长在周质里。做质粒抽提时细胞被裂解，这个酶就跟你的质粒混在一起开始降解它。结果是产量低、跑胶拖尾、测序图谱质量差。敲掉它，抽出来的 DNA 干净得多。\n\n' +
         'DH5α、TOP10、DH10b、XL1-Blue 这些常用克隆菌株，都是同时带这两个标记的。**记这两个字母的含义比记菌株名有用。**',
      takeaway: 'recA⁻ 防重复序列被重组删掉（悄无声息），endA⁻ 防 miniprep 时质粒被降解。'
    }
  ],
  points: [
    { term: 'What a plasmid is', en: 'A small circular DNA molecule that replicates independently of chromosomal DNA in the cytoplasm of a bacterium. Found mainly in bacteria, archaea, and eukaryotes such as yeast and plants.', cn: '质粒是什么：一个能在细菌细胞质中独立于染色体 DNA 复制的小型环状 DNA 分子。主要存在于细菌、古菌，以及酵母、植物等真核生物中。' },
    { term: 'Size', en: '1,500–20,000 bp — the smaller the better.', cn: '大小：1500–20000 bp——越小越好。' },
    { term: 'Minimalistic plasmid', en: 'ORI plus an antibiotic resistance gene. Nothing else is strictly required.', cn: '最简质粒：复制起点加一个抗生素抗性基因。除此之外没有严格必需的其他元件。' },
    { term: 'Cloning plasmids', en: 'High-copy, more than 500 copies per cell. Carry an ORI, resistance gene, multiple cloning site, and often a LacZ reporter. No expression cassette.', cn: '克隆质粒：高拷贝，每细胞超过 500 份。带有复制起点、抗性基因、多克隆位点，通常还有 LacZ 报告基因。**没有**表达盒。' },
    { term: 'Expression plasmids', en: 'Usually lower copy number. Same core elements plus an expression cassette: promoter (inducible or constitutive), enhancer, ribosome binding site, purification tags, polyadenylation site, selectable marker, reporter marker.', cn: '表达质粒：通常拷贝数较低。核心元件相同，另加一个表达盒：启动子（诱导型或组成型）、增强子、核糖体结合位点、纯化标签、polyA 位点、可筛选标记、报告标记。' },
    { term: 'What ORI does', en: 'The position where plasmid replication begins. Replication is mediated by host bacterial proteins — the plasmid does not encode its own replisome. Rich in A and T, giving a lower melting temperature so strands separate more easily.', cn: '复制起点的作用：质粒复制开始的位置。复制由**宿主**（细菌）蛋白介导——质粒本身不编码自己的复制体。富含 A 和 T，熔点较低，链更容易分开。' },
    { term: 'ORI defines copy number', en: 'The number of plasmid copies per cell is delicately balanced and set by the ORI.', cn: 'ORI 决定拷贝数：每个细胞的质粒拷贝数是精细调控的，由 ORI 决定。' },
    { term: 'Plasmid incompatibility', en: 'Plasmids with the same ORI compete for the same cellular machinery and are deemed "incompatible" — you cannot stably maintain two same-ORI plasmids in one cell. This matters when co-expressing two proteins.', cn: '质粒不相容性：相同 ORI 的质粒会争夺同一套细胞机器，因而被判定为「不相容」——同一个细胞里无法稳定维持两个相同 ORI 的质粒。这在共表达两个蛋白时很重要。' },
    { term: 'Cloning strains', en: 'Best propagated in recA⁻ endA⁻ cells: DH5α, TOP10, DH10b, XL1-Blue.', cn: '克隆用菌株：最好在 recA⁻ endA⁻ 菌株中扩增：DH5α、TOP10、DH10b、XL1-Blue。' },
    { term: 'ORI/copy-number table', en: 'pBluescript uses mutated ColE1 and F1, giving 300–500 copies. pUC uses mutated pMB1, giving 500–700 copies. pET and pGEX both use pBR322, giving only 15–20 copies.', cn: 'ORI/拷贝数对照表：pBluescript 用突变的 ColE1 和 F1，300–500 拷贝。pUC 用突变的 pMB1，500–700 拷贝。pET 和 pGEX 都用 pBR322，只有 15–20 拷贝。' }
  ],
  beyondPoints: [
    { term: 'Why cloning wants high copy, expression does not', en: 'A cloning plasmid\'s only task is yield — you want to extract as much DNA as possible, so higher copy number is strictly better. An expression plasmid is different: too high a copy number creates metabolic burden — the cell spends its resources replicating the plasmid and transcribing the foreign gene, and grows poorly, expresses less, or even loses the plasmid entirely. This trade-off reappears in Lecture 12.', cn: '为什么克隆质粒要高拷贝、表达质粒不要：克隆质粒的唯一任务就是产量——你要从菌液里抽出尽可能多的 DNA，所以拷贝数越高越好。表达质粒则不同：拷贝数太高会造成**代谢负担**——细胞把资源都用来复制质粒和转录外源基因，结果长不好、表达量下降，甚至丢质粒。这条权衡在第 12 讲会再次出现。' },
    { term: 'recA⁻ — why', en: 'RecA drives homologous recombination. In a recA⁺ strain, a plasmid with repeated sequences can recombine with itself and delete the region between repeats, silently changing your construct. Cloning strains are therefore recombination-deficient.', cn: '为什么要 recA⁻：RecA 驱动同源重组。在 recA⁺ 菌株里，带有重复序列的质粒会自己发生重组，**删掉**重复序列之间的区域，你的构建体在不知不觉中就变短了。所以克隆用菌株要是重组缺陷的。' },
    { term: 'endA⁻ — why', en: 'Endonuclease A is a periplasmic nuclease that degrades DNA during plasmid miniprep, giving low yield and smeary, poor-quality DNA that sequences badly. Knocking it out gives clean, high-quality prep DNA.', cn: '为什么要 endA⁻：核酸内切酶 A 是一种周质核酸酶，会在抽质粒时把 DNA 降解掉，结果是得率低、跑胶拖尾、测序读不出来。敲掉它就能得到干净、高质量的抽提 DNA。' },
    { term: 'The copy-number surprise', en: 'pET has only 15–20 copies while pUC has 500–700 — students often assume expression vectors are high-copy. They are not, and the metabolic-burden argument explains why.', cn: '拷贝数上的反直觉：pET 只有 15–20 拷贝，pUC 却有 500–700——很多人直觉上以为表达载体应该拷贝数高，其实正相反，代谢负担的论证解释了原因。' }
  ],
  terms: [
    { en: 'Origin of replication (ORI)', cn: '复制起点', def_en: 'The site where plasmid replication begins, mediated by host proteins; it sets copy number and determines plasmid compatibility.', def_cn: '质粒复制开始的位点，由宿主蛋白介导；它决定拷贝数，也决定质粒之间的相容性。' },
    { en: 'Plasmid incompatibility', cn: '质粒不相容性', def_en: 'Two plasmids sharing the same ORI compete for the same replication machinery and cannot be stably co-maintained in one cell.', def_cn: '两个共用同一个复制起点的质粒会争夺同一套复制机器，无法在同一细胞中稳定共存。' },
    { en: 'Metabolic burden', cn: '代谢负担', def_en: 'The cost to a cell of maintaining and expressing a plasmid — high copy number or strong expression can divert enough resources to slow growth or cause plasmid loss.', def_cn: '细胞维持和表达一个质粒所付出的代价——高拷贝数或强表达会分走足够多的资源，导致生长变慢甚至丢失质粒。' },
    { en: 'recA⁻ / endA⁻', cn: 'recA⁻ / endA⁻', def_en: 'Genotype markers of standard cloning strains: recA⁻ prevents unwanted recombination between repeats; endA⁻ prevents a periplasmic nuclease from degrading prepped plasmid DNA.', def_cn: '标准克隆菌株的基因型标记：recA⁻ 防止重复序列间的意外重组；endA⁻ 防止周质核酸酶降解抽提出来的质粒 DNA。' },
    { en: 'Expression cassette', cn: '表达盒', def_en: 'The set of elements an expression plasmid adds beyond the minimal plasmid: promoter, enhancer, ribosome binding site, tags, polyadenylation site and markers.', def_cn: '表达质粒在最简质粒基础上额外加入的一套元件：启动子、增强子、核糖体结合位点、标签、polyA 位点和标记基因。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does a cloning plasmid benefit from high copy number while an expression plasmid does not?',
      q_cn: '为什么克隆质粒受益于高拷贝数，而表达质粒不是？',
      options: ['High copy number is always better; expression vectors simply lack optimisation', 'Cloning wants only DNA yield; high copy number burdens an expression host', 'An expression plasmid cannot physically replicate to a high copy number', 'High copy number destabilises only expression cassettes, not MCS regions'],
      answer: 1,
      optionNotes: {
        2: { en: 'Copy number is a property of the origin of replication, not of what the plasmid is used for. Nothing prevents putting an expression cassette on a high-copy origin, and people do; pET sits at fifteen to twenty copies because a low-copy origin was chosen on purpose to limit the metabolic burden.', cn: '拷贝数是 origin of replication 的性质，和质粒拿来干什么无关。把表达盒放到高拷贝的 ori 上完全做得到，也确实有人这么做；pET 只有 15 到 20 个拷贝，是因为有意选了低拷贝的 ori 来压住 metabolic burden。' }
      },
      why_en: 'Cloning wants maximum extractable DNA. Expression plasmids pay a metabolic cost for high copy number that can reduce yield or cause plasmid loss — this is why pET sits at only 15–20 copies.',
      why_cn: '克隆要的是尽可能多能抽出来的 DNA。表达质粒在高拷贝数下要付出代谢代价，可能降低产量甚至丢质粒——这正是 pET 只有 15–20 拷贝的原因。' },
    { type: 'mcq',
      q_en: 'Two plasmids share the same ORI. What happens if you try to co-maintain them in one cell?',
      q_cn: '两个质粒共用同一个复制起点。如果你想在同一个细胞里同时维持它们，会发生什么？',
      options: ['They replicate independently and both stay stable indefinitely', 'They are incompatible and cannot be stably co-maintained in one cell', 'One of the two always integrates into the bacterial chromosome', 'The two always recombine into a single larger plasmid'],
      answer: 1,
      why_en: 'Same-ORI plasmids are deemed incompatible. This matters directly when you need to co-express two proteins from separate plasmids in Lecture 3.',
      why_cn: '相同 ORI 的质粒被判定为不相容。这在第 3 讲需要从两个不同质粒共表达两个蛋白时会直接产生影响。' },
    { type: 'mcq',
      q_en: 'Why are cloning strains such as DH5α specifically recA⁻ and endA⁻?',
      q_cn: '为什么 DH5α 这类克隆用菌株特意要 recA⁻ 和 endA⁻？',
      options: ['To raise competence, since both mutations increase transformation efficiency', 'recA⁻ blocks recombination between repeats; endA⁻ removes a DNA-degrading nuclease', 'To allow blue-white screening of recombinants on X-gal plates', 'To enable ccdB counter-selection against the empty parent vector'],
      answer: 1,
      optionRefs: { 2: '1-13', 3: '1-10-2' },
      why_en: 'recA⁻ keeps your construct\'s sequence stable against self-recombination; endA⁻ keeps miniprep DNA clean and high-yield rather than degraded and smeary.',
      why_cn: 'recA⁻ 让你的构建体序列不会因自身重组而改变；endA⁻ 让抽提出来的质粒 DNA 干净、高产，而不是被降解、拖尾。' },
    { type: 'short',
      q_en: 'Compare cloning and expression plasmids on copy number and cassette content, and explain the copy-number difference.',
      q_cn: '从拷贝数和元件构成比较克隆质粒与表达质粒，并解释拷贝数差异的原因。',
      accept: ['high-copy', 'low-copy', 'metabolic burden', 'expression cassette', 'MCS'],
      answer_en: 'Cloning plasmids are high-copy, often over five hundred copies per cell, and carry an origin of replication, a resistance gene, a multiple cloning site and often a LacZ reporter, but no expression cassette. Expression plasmids are usually lower copy — pET sits at only fifteen to twenty — and add a full expression cassette: promoter, enhancer, ribosome binding site, tags, polyadenylation site and markers. The copy-number difference exists because cloning\'s only goal is DNA yield, so more copies is strictly better, whereas high copy number in an expression plasmid imposes a metabolic burden that can reduce growth, lower expression, or cause plasmid loss.',
      answer_cn: '克隆质粒是高拷贝，常常每细胞超过 500 份，带有复制起点、抗性基因、多克隆位点，通常还有 LacZ 报告基因，但**没有**表达盒。表达质粒通常拷贝数较低——pET 只有 15–20 份——并加入完整的表达盒：启动子、增强子、核糖体结合位点、标签、polyA 位点和标记基因。拷贝数差异的原因是：克隆的唯一目标是 DNA 产量，所以拷贝数越多越好；而表达质粒的高拷贝数会带来代谢负担，可能降低生长速度、降低表达量，甚至导致丢失质粒。' }
  ],
  oral: {
    q_en: 'Explain what a plasmid\'s origin of replication does, and why cloning and expression plasmids differ in copy number.',
    q_cn: '解释质粒复制起点的作用，以及为什么克隆质粒和表达质粒的拷贝数不同。',
    model_en: 'A plasmid is a small circular DNA molecule, typically fifteen hundred to twenty thousand base pairs, replicating independently of the chromosome. The minimal viable plasmid is just an origin of replication plus an antibiotic resistance gene. The origin of replication is the site where replication begins; it is rich in A and T for easier strand separation, replication itself is carried out by host proteins rather than anything the plasmid encodes, and critically, the origin sets the copy number. Plasmids sharing the same origin compete for the same replication machinery and are incompatible — you cannot stably maintain two of them in one cell, which matters when co-expressing two proteins. Now the copy-number difference. Cloning plasmids are high copy, often over five hundred copies, because their only job is yield — more copies means more DNA when you miniprep. Expression plasmids are usually lower copy; pET, for instance, sits at only fifteen to twenty copies using the pBR322 origin, against pUC\'s five hundred to seven hundred. That is because high copy number in an expression context creates metabolic burden — the cell spends its resources replicating plasmid and transcribing the foreign gene rather than growing, which lowers expression or causes plasmid loss outright.',
    checklist: ['Plasmid basics: size, minimal = ORI + resistance gene', 'ORI: host-mediated, A/T-rich, sets copy number', 'Plasmid incompatibility — same ORI cannot co-exist', 'Cloning plasmids: high copy, yield is the only goal', 'Expression plasmids: lower copy — metabolic burden', 'pET (15–20) vs pUC (500–700) as the concrete numbers', 'recA⁻ endA⁻ strains for propagation']
  }
},

{
  id: '1-10-1',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.10.1',
  enTitle: 'Antibiotic selection — resistance mechanisms and the satellite-colony trap',
  cnTitle: '抗生素筛选——抗性机制与卫星菌落陷阱',
  slides: 'L2 s.7–8',
  coverage: 'full',
  coverageNote: 'The antibiotic table (mode of action, working concentrations, host range) and resistance-mechanism table are on the slides. The satellite-colony problem, the two-clue reading of the table, and why kanamycin does not share it are the beyond-the-slides block.',
  summary: {
    en: 'An antibiotic inhibits or kills microorganisms, and the standard panel — ampicillin, kanamycin, tetracycline, spectinomycin, chloramphenicol, gentamicin, hygromycin, blasticidin, zeocin — divides cleanly by two clues: most target the bacterial ribosome or cell wall and work only in E. coli, while hygromycin, blasticidin and zeocin work across prokaryotes and eukaryotes, which is why they are used for mammalian stable lines. Ampicillin\'s secreted β-lactamase creates a specific practical trap: satellite colonies growing in the drug-cleared halo around a real colony.',
    cn: '抗生素能抑制或杀死微生物，而标准那一套抗生素——氨苄、卡那、四环素、壮观、氯霉素、庆大、潮霉素、杀稻瘟素、Zeocin——可以靠两条线索干净地分成两类：大多数打细菌**核糖体或细胞壁**，只对大肠杆菌有效；而潮霉素、杀稻瘟素、Zeocin 能**原核真核通杀**，这就是它们被用来做哺乳动物稳定株的原因。氨苄西林的 β-内酰胺酶会被分泌出来，造成一个具体的实操陷阱：在真菌落周围药物被清空的光晕里长出「卫星菌落」。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.7', src: 'img/figures/L2_s07_1.webp' },
    { slide: 'L2 s.7', src: 'img/figures/L2_s07_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '那张抗生素表只有一条线索要记：**靶点决定适用范围。**打细菌核糖体或细胞壁的，只对原核有效；**hygromycin、blasticidin、zeocin 原核真核通杀**，所以做哺乳动物稳定株只能用这三个。',
  skipIt: '每种抗生素的工作浓度（µg/mL）不用背，用的时候查手册。这是判断，不是老师的话——不过可以参考：老师在第 3 讲开头给第 2 讲做 RECAP 时，写的是 **positive/negative selection** 这个概念，**没有任何一个抗生素的名字或浓度**。',
  explain: [
    {
      q: '那张表怎么读才不用死背？',
      a: '按**靶点**分，范围就自动跟着出来了。\n\n' +
         '**第一类：打细菌独有的结构 → 只对原核有效。**\n\n' +
         '打**核糖体**的：卡那、四环素、壮观、庆大打 **30S**；氯霉素打 **50S**。为什么这些对你自己的细胞没事？因为**细菌核糖体是 70S（30S+50S），真核是 80S（40S+60S）**——结构不一样，药认不出来。\n\n' +
         '打**细胞壁**的：氨苄。真核细胞**根本没有肽聚糖细胞壁**，自然也就打不着。\n\n' +
         '**第二类：靶点不是细菌独有的 → 原核真核通杀。**\n\n' +
         'hygromycin、blasticidin 干扰的是蛋白合成里更通用的环节，zeocin 干脆**直接嵌进 DNA 里**——DNA 谁都有。\n\n' +
         '**所以做哺乳动物稳定细胞株时，能用的就只有这三个。**这不是习惯，是唯一的选择：你必须找一个能杀死哺乳动物细胞的药，才能筛出带抗性基因的那些。\n\n' +
         '记住这条因果，整张表就不用背了：**看靶点 → 推范围 → 推用途。**',
      takeaway: '打 70S 核糖体或细胞壁 = 只杀细菌；打 DNA 或通用翻译环节 = 通杀 = 能做哺乳动物筛选。'
    },
    {
      q: '卫星菌落是怎么冒出来的？',
      a: '关键在于**氨苄的抗性酶是被分泌出去的**。\n\n' +
         'β-内酰胺酶（β-lactamase）不待在细胞质里，它被送到**周质**，并且会**漏进培养基**。它的作用方式是**把氨苄的 β-内酰胺环切开**——也就是说，它在**销毁药物本身**。\n\n' +
         '于是一个真正带质粒的菌落长起来之后，会在自己周围**清出一圈没有药的光晕**。\n\n' +
         '而板子上那些**没拿到质粒的细菌**，本来是被氨苄按住不长的。现在光晕里没药了，它们就在那一圈里长了起来——个头小、贴着大菌落一圈，这就是**卫星菌落**。\n\n' +
         '**挑到一个，你手里就是一管什么质粒都没有的细菌**，而且你要到 miniprep 出来空空如也才会发现。\n\n' +
         '**为什么卡那没有这个毛病？**因为它的抗性机制完全不同：抗性酶在**细胞内**，而且它做的是**给药物加一个磷酸把它改废**，不是在培养基里大批销毁。药物在细胞外面**照样有效**，光晕不存在。\n\n' +
         '这也是为什么很多 pET 载体用卡那做标记——**省心**。',
      takeaway: '氨苄的抗性酶被分泌出去销毁药物 → 周围清出无药光晕 → 没质粒的细菌在里面长起来。'
    },
    {
      q: '两个解法各解决什么？',
      a: '**换羧苄青霉素（carbenicillin）——从源头解决。**它跟氨苄是同一类药、同一个靶点，抗性基因也认，但它**对 β-内酰胺酶更稳定**，被降解得慢得多。药不被大量销毁，光晕就形不成。代价是贵一些。\n\n' +
         '**别把板子放太久 + 只挑孤立的菌落——从操作解决。**光晕是**随时间扩大**的：培养 12 小时可能还没事，过夜到 20 小时就一圈卫星。而且卫星菌落总是**紧贴着大菌落**长，所以挑一个**周围干干净净、离得远**的菌落，基本就避开了。这条不花钱。\n\n' +
         '实践里两条常常一起用。但要理解它们不是同一件事：**一个减少药物被破坏，一个避开已经被破坏的区域。**',
      takeaway: '羧苄让药更难被降解；短培养 + 挑孤立菌落避开已形成的光晕。'
    },
    {
      q: 'Zeocin 那一条为什么读起来跟别的都不一样？',
      trace: {
        what: '一种**嵌入 DNA（intercalation）**的抗生素——它插进碱基对之间，进而造成 DNA 断裂。**它不打核糖体，也不打细胞壁。**',
        from: '属于博来霉素（bleomycin）家族。这类分子本来是微生物之间竞争用的天然产物。',
        to: '因为靶点是 **DNA**，而 DNA 是所有生物都有的，所以它**原核真核通杀**——细菌、酵母、昆虫细胞、哺乳动物细胞都拦得住。这正是它能用来做哺乳动物稳定株筛选的原因。',
        family: '同族的还有 bleomycin、phleomycin。抗性蛋白叫 **Sh ble**。'
      },
      a: '真正特别的是它的**抗性机制**：**Sh ble 蛋白按 1:1 的比例把 Zeocin 结合住、扣在手里**。\n\n' +
         '对比一下前面两种：β-内酰胺酶是**销毁**药物（一个酶能销毁很多分子），磷酸转移酶是**改造**药物（同样是催化，一个酶能改很多个）。**它们都是酶，能反复使用。**\n\n' +
         '**Sh ble 不是酶，它是个「保险箱」**——绑住一个就占用一个，绑住的分子不会释放。\n\n' +
         '这带来一个实际推论：**抗性水平跟抗性蛋白的表达量成正比**，是个化学计量的关系，而不是酶那种「一点点就够」。所以 Zeocin 的工作浓度范围写得特别宽（哺乳动物 50–1000 µg/mL），需要按细胞类型自己滴定。\n\n' +
         '还有一个小机关：Zeocin 跟 **Cu²⁺** 结合时是**没有活性**的（所以能安全保存），进了细胞之后 Cu²⁺ 被还原掉，药才被激活。',
      takeaway: 'Zeocin 嵌 DNA 所以通杀；抗性靠 1:1 绑住而不是酶解，所以抗性水平跟蛋白量成正比。'
    }
  ],
  points: [
    { term: 'Ampicillin', en: 'Inhibits cell wall synthesis. E. coli working concentration 100 µg/mL. Resistance: β-lactamase degrades the β-lactam ring.', cn: '氨苄西林：抑制细胞壁合成。大肠杆菌工作浓度 100 µg/mL。抗性机制：β-内酰胺酶降解 β-内酰胺环。' },
    { term: 'Kanamycin', en: 'Binds the 30S ribosomal subunit, causing mistranslation. E. coli working concentration 50 µg/mL. Resistance: aminoglycoside-3′-phosphotransferase phosphorylates the drug.', cn: '卡那霉素：结合 30S 核糖体亚基，导致误翻译。大肠杆菌工作浓度 50 µg/mL。抗性机制：氨基糖苷-3′-磷酸转移酶使药物磷酸化。' },
    { term: 'Tetracycline', en: 'Binds 30S, inhibits elongation. E. coli working concentration 10 µg/mL.', cn: '四环素：结合 30S，抑制延伸。大肠杆菌工作浓度 10 µg/mL。' },
    { term: 'Spectinomycin', en: 'Binds 30S, interrupts protein synthesis. E. coli working concentration 10–50 µg/mL. Resistance: adenylation by adenylyltransferases (shared with streptomycin).', cn: '壮观霉素：结合 30S，中断蛋白合成。大肠杆菌工作浓度 10–50 µg/mL。抗性机制：腺苷酸转移酶催化的腺苷化（与链霉素共用）。' },
    { term: 'Chloramphenicol', en: 'Binds the 50S subunit, inhibits peptidyl translocation. E. coli working concentration 40 µg/mL.', cn: '氯霉素：结合 50S 亚基，抑制肽基转位。大肠杆菌工作浓度 40 µg/mL。' },
    { term: 'Gentamicin', en: 'Binds 30S, interrupts protein synthesis. E. coli working concentration 7 µg/mL.', cn: '庆大霉素：结合 30S，中断蛋白合成。大肠杆菌工作浓度 7 µg/mL。' },
    { term: 'Hygromycin B', en: 'Inhibits protein synthesis. Works across E. coli (50 µg/mL), yeast (400 µg/mL), and mammalian cells (100–1000 µg/mL).', cn: '潮霉素 B：抑制蛋白合成。在大肠杆菌（50 µg/mL）、酵母（400 µg/mL）和哺乳动物细胞（100–1000 µg/mL）中均有效。' },
    { term: 'Blasticidin', en: 'Inhibits protein synthesis. Works across E. coli (100 µg/mL), insect (10–50 µg/mL), and mammalian cells (10–50 µg/mL).', cn: '杀稻瘟素：抑制蛋白合成。在大肠杆菌（100 µg/mL）、昆虫细胞（10–50 µg/mL）和哺乳动物细胞（10–50 µg/mL）中均有效。' },
    { term: 'Zeocin', en: 'DNA intercalation. Works across E. coli (25 µg/mL), yeast (50–300 µg/mL) and mammalian cells (50–1000 µg/mL). Resistance: the Cu²⁺-complexed form is inactive; Cu²⁺ is reduced inside the cell, activating the drug, and the Sh ble protein binds Zeocin 1:1 and sequesters it.', cn: 'Zeocin：DNA 嵌入。在大肠杆菌（25 µg/mL）、酵母（50–300 µg/mL）和哺乳动物细胞（50–1000 µg/mL）中均有效。抗性机制：Cu²⁺ 络合形式是失活的；Cu²⁺ 在细胞内被还原后药物被激活，而 Sh ble 蛋白与 Zeocin 以 1:1 结合并将其螯合隔离。' }
  ],
  beyondPoints: [
    { term: 'Two clues for reading the antibiotic table', en: 'Clue one — target: most antibiotics hit the bacterial ribosome (30S: kanamycin, tetracycline, spectinomycin, gentamicin; 50S: chloramphenicol) or the cell wall (ampicillin), and are therefore prokaryote-only. Clue two — cross-kingdom range: hygromycin, blasticidin and zeocin do not rely on a structure unique to bacteria, so they work across prokaryotes and eukaryotes and are used for making mammalian stable cell lines.', cn: '读这张抗生素表的两条线索：线索一——靶点：绝大多数抗生素打的是细菌**核糖体**（30S：卡那、四环素、壮观、庆大；50S：氯霉素）或**细胞壁**（氨苄），所以只对原核有效。线索二——跨界范围：潮霉素、杀稻瘟素、Zeocin **不依赖细菌特有结构**，所以原核真核通杀，被用来构建哺乳动物稳定细胞株。' },
    { term: 'The satellite-colony problem', en: 'β-lactamase is secreted into the periplasm and leaks into the medium. It therefore destroys ampicillin in the agar around a growing colony, letting non-resistant "satellite colonies" grow in that halo. Picking one gives you no plasmid.', cn: '卫星菌落问题：β-内酰胺酶被分泌到周质并渗进培养基。它因此会把生长中的菌落周围琼脂里的氨苄降解掉，让**不带质粒**的「卫星菌落」在那圈光晕里长出来。挑到一个就等于白做。' },
    { term: 'Two fixes', en: 'Use carbenicillin, which is more stable to β-lactamase; or do not incubate plates too long and pick only well-isolated colonies.', cn: '两个解决办法：换用对 β-内酰胺酶更稳定的**羧苄青霉素**；或者别把板子孵化太久、只挑孤立的大菌落。' },
    { term: 'Why kanamycin has no such problem', en: 'The resistance enzyme is intracellular and modifies the drug rather than destroying it in bulk in the medium. This is one practical reason kanamycin-marked vectors — like most pET plasmids — are popular.', cn: '为什么卡那没有这个问题：它的抗性酶在**胞内**修饰药物，不会把培养基里的药物大量清空。这是 pET 系列等载体多用卡那作为标记的实际原因之一。' }
  ],
  terms: [
    { en: 'β-lactamase', cn: 'β-内酰胺酶', def_en: 'The ampicillin-resistance enzyme, secreted into the periplasm; it degrades the β-lactam ring and can leak into the medium, causing satellite colonies.', def_cn: '氨苄抗性酶，分泌到周质中；降解 β-内酰胺环，并可能渗入培养基，引起卫星菌落。' },
    { en: 'Satellite colony', cn: '卫星菌落', def_en: 'A non-resistant colony growing in the antibiotic-cleared halo around a resistant colony, caused by secreted β-lactamase depleting local ampicillin.', def_cn: '在抗性菌落周围抗生素被清空的光晕中长出的不带抗性的菌落，由分泌的 β-内酰胺酶清除局部氨苄所致。' },
    { en: 'Carbenicillin', cn: '羧苄青霉素', def_en: 'A β-lactam antibiotic more resistant to β-lactamase degradation than ampicillin, used to reduce satellite colonies.', def_cn: '一种对 β-内酰胺酶降解更稳定的 β-内酰胺类抗生素，用于减少卫星菌落。' },
    { en: 'Zeocin', cn: 'Zeocin', def_en: 'A DNA-intercalating antibiotic active across prokaryotes and eukaryotes, activated intracellularly by copper reduction and neutralised by the Sh ble binding protein.', def_cn: '一种嵌入 DNA 的抗生素，对原核和真核都有效，在细胞内通过铜还原被激活，可被 Sh ble 结合蛋白中和。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why do most antibiotics on the standard panel work only in E. coli and not in yeast, insect or mammalian cells?',
      q_cn: '为什么标准抗生素面板里大多数药只对大肠杆菌有效，对酵母、昆虫或哺乳动物细胞无效？',
      options: ['They are unstable outside bacterial culture medium', 'They target the bacterial ribosome (30S/50S) or cell wall, structures unique to prokaryotes', 'Eukaryotic cells actively pump them straight back out again', 'Eukaryotic cells lack the specific membrane transporter needed to carry these compounds into the cytoplasm'],
      answer: 1,
      why_en: 'Kanamycin, tetracycline, spectinomycin and gentamicin hit 30S; chloramphenicol hits 50S; ampicillin hits the cell wall. All are prokaryote-specific structures.',
      why_cn: '卡那、四环素、壮观、庆大打 30S；氯霉素打 50S；氨苄打细胞壁。这些都是原核生物特有的结构。' },
    { type: 'mcq',
      q_en: 'You see hundreds of tiny colonies surrounding a few large ones on an ampicillin plate. What happened?',
      q_cn: '你在氨苄平板上看到几个大菌落周围有几百个小菌落。发生了什么？',
      options: ['A resistant fungal contaminant growing across the whole plate', 'Beta-lactamase leaking from resistant colonies cleared ampicillin locally', 'The plate was incubated at too high a temperature overnight', 'The ampicillin stock had degraded with age, leaving too little active drug anywhere on the plate'],
      answer: 1,
      optionNotes: {
        3: { en: 'Aged ampicillin would fail across the whole plate at once, giving a uniform lawn or an even background. Satellites have spatial structure, tiny colonies only in a ring around each large one, because the drug is destroyed locally by beta-lactamase leaking out of a resistant colony.', cn: '如果是 ampicillin 放久了失效，整块板会同时失去选择性，长出来的是均匀的 lawn 或均匀背景。satellite colonies 的特点是有空间结构：小菌落只围着每个大菌落长一圈，因为药是被抗性菌落漏出来的 beta-lactamase 就地降解掉的。' }
      },
      why_en: 'β-lactamase is secreted into the periplasm and leaks out, destroying ampicillin locally. Picking a satellite colony gives you no plasmid at all.',
      why_cn: 'β-内酰胺酶被分泌到周质并渗漏出来，在局部把氨苄降解掉。挑到卫星菌落等于完全没有质粒。' },
    { type: 'mcq',
      q_en: 'Why is kanamycin resistance not vulnerable to the satellite-colony problem the way ampicillin is?',
      q_cn: '为什么卡那抗性不像氨苄那样容易出现卫星菌落问题？',
      options: ['Kanamycin cannot be inactivated by any enzyme, resistant or not', 'The resistance enzyme modifies the drug inside the cell, not in the agar', 'Kanamycin plates are removed from the incubator before satellites form', 'E. coli exports nothing into the medium when grown on kanamycin'],
      answer: 1,
      optionNotes: {
        0: { en: 'Kanamycin is enzymatically inactivated too: the resistance gene is an aminoglycoside phosphotransferase that phosphorylates the drug. The difference from ampicillin is where this happens, not whether it happens. The enzyme stays in the cytoplasm, so the drug in the surrounding agar is untouched and no protective halo forms.', cn: 'kanamycin 同样会被酶灭活，抗性基因就是一个 aminoglycoside phosphotransferase，把药磷酸化掉。它和 ampicillin 的差别在于灭活发生在哪里，而不是有没有发生：这个酶待在 cytoplasm 里，周围 agar 中的药一点没动，所以形不成保护性的 halo。' }
      },
      why_en: 'Intracellular modification does not clear the drug from the surrounding agar, so no protective halo forms for non-resistant cells.',
      why_cn: '胞内修饰不会把周围琼脂里的药物清空，所以不会给不带抗性的细胞形成保护性的光晕。' },
    { type: 'short',
      q_en: 'Give the two "clues" for reading the antibiotic table, and name which antibiotics fall in the cross-kingdom group.',
      q_cn: '说出读这张抗生素表的两条「线索」，并说出哪些抗生素属于跨界通用组。',
      accept: ['ribosome', 'cell wall', 'hygromycin', 'blasticidin', 'zeocin', 'cross-kingdom'],
      answer_en: 'Clue one is the target: most antibiotics hit the bacterial ribosome, thirty-S or fifty-S, or the cell wall, structures unique to bacteria, so they only work in E. coli. Clue two is cross-kingdom range: hygromycin B, blasticidin and zeocin do not rely on a bacteria-specific structure, so they are active in prokaryotes and eukaryotes alike, which is why they show values across the yeast, insect and mammalian columns and are the ones used to build mammalian stable cell lines.',
      answer_cn: '线索一是靶点：大多数抗生素打的是细菌**核糖体**（30S 或 50S）或**细胞壁**，都是细菌特有的结构，所以只对大肠杆菌有效。线索二是跨界范围：潮霉素 B、杀稻瘟素和 Zeocin 不依赖细菌特有结构，所以原核真核都有效，这就是表里只有它们在酵母、昆虫、哺乳动物这几列都有数值，也是它们被用来构建哺乳动物稳定细胞株的原因。' }
  ],
  oral: {
    q_en: 'Explain how the standard antibiotic-selection panel divides by mechanism, and describe the satellite-colony problem.',
    q_cn: '解释标准抗生素筛选面板如何按机制分类，并描述卫星菌落问题。',
    model_en: 'The panel divides cleanly along two lines. First, target: most of these antibiotics hit the bacterial ribosome — kanamycin, tetracycline, spectinomycin and gentamicin bind the thirty-S subunit, chloramphenicol the fifty-S — or the cell wall, which is what ampicillin does. All of those are prokaryote-specific structures, so they only work in E. coli. Second, cross-kingdom range: hygromycin B, blasticidin and zeocin do not depend on anything bacteria-specific, so they work across prokaryotes and eukaryotes, and that is exactly why they are the antibiotics used to select mammalian stable cell lines. Now the satellite-colony trap, which is specifically an ampicillin problem. Beta-lactamase, the resistance enzyme, is secreted into the periplasm and leaks into the surrounding medium, where it destroys ampicillin in a halo around each resistant colony. Non-resistant cells can then grow as tiny satellite colonies inside that cleared halo, and if you pick one you get no plasmid at all. The fix is either to use carbenicillin, which resists beta-lactamase degradation better, or to avoid over-incubating plates and only pick well-isolated colonies. Kanamycin does not have this problem because its resistance enzyme works intracellularly, modifying the drug rather than clearing it from the medium — one practical reason kanamycin-marked vectors like most pET plasmids are popular.',
    checklist: ['Clue 1: ribosome (30S/50S) or cell wall target — prokaryote-only', 'Clue 2: hygromycin/blasticidin/zeocin — cross-kingdom', 'β-lactamase is secreted, leaks into medium', 'Satellite colonies grow in the cleared halo, carry no plasmid', 'Fix: carbenicillin, or pick only isolated colonies promptly', 'Kanamycin resistance is intracellular — no such halo']
  }
},

{
  id: '1-10-2',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.10.2',
  enTitle: 'Negative selection with ccdB, and positive vs negative selection',
  cnTitle: 'ccdB 负选择，以及正选择与负选择',
  slides: 'L2 s.8',
  coverage: 'full',
  coverageNote: 'The ccdB biology and the cell lines that propagate or naturally tolerate it are on the slide. The crisp positive/negative distinction and its consequence for Gateway\'s >95% efficiency is the mechanism block — this is one of the most reliably asked distinctions in the whole batch.',
  summary: {
    en: 'Type II topoisomerase is essential for cell survival and cuts both strands to relax supercoiled DNA — which makes it a chemotherapy target in humans and an antibacterial target in bacteria. ccdB, a toxin from the E. coli F plasmid\'s toxin–antitoxin system, inhibits exactly this enzyme, and cloning exploits that as negative selection: any colony still carrying unmodified vector still expresses ccdB and dies. The crisp distinction — positive selection keeps what you want, negative selection kills what you don\'t — is worth having exactly right, because Gateway stacks both to reach its >95% efficiency.',
    cn: 'II 型拓扑异构酶是细胞存活所必需的，通过切开两条链来松弛超螺旋 DNA——这使它既是人类的化疗靶点，也是细菌的抗菌靶点。ccdB 是大肠杆菌 F 质粒毒素-抗毒素系统里的一个毒素，正好抑制这个酶，克隆技术把它用作**负选择**：任何还带着未修饰载体的菌落，仍然表达 ccdB，于是自己把自己毒死。「正选择留下想要的、负选择杀掉不想要的」这个清晰的区分值得完全说对，因为 Gateway 正是靠叠加两层选择才达到 >95% 的效率。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**正选择 = 想要的活下来**（没质粒就没抗性，死在抗生素上）；**负选择 = 不想要的死掉**（空载体还在表达 ccdB，自己毒死自己）。\n\n' +
            'Gateway 能到 >95% 阳性率，就是因为它**两层一起用**。',
  skipIt: 'DB3.1 / ccdB Survival 这两个菌株的型号，以及 JM109 / XL1-Blue / XL10-Gold 天然带 F 质粒这一条，用到时查即可。老师在第 3 讲开头给第 2 讲做 RECAP 时，第一条写的是 Plasmids – definition, ORI, **positive/negative selection**——**正选择/负选择这个概念是被点名的**，菌株型号不是。',
  explain: [
    {
      q: '正选择和负选择，一句话怎么才不混？',
      a: '看**这一层作用在谁身上**。\n\n' +
         '**正选择（positive selection）——只有你想要的能活。**抗生素抗性就是标准例子：没拿到质粒 → 没有抗性基因 → 在含药平板上死掉。**筛子作用在「没有你要的东西」的细胞上。**\n\n' +
         '**负选择（negative / counter-selection）——你不想要的会死。**载体没反应成功、原样长回去的那些，**身上还带着 ccdB 这个毒素基因**，一表达就把自己毒死。**筛子作用在「带着你不要的东西」的细胞上。**\n\n' +
         '为什么两层都要？因为它们各自漏掉的东西不一样：\n\n' +
         '光有抗生素，**空载体也带着抗性基因**，照样长得欢——这正是「挑了十个菌落九个是空载体」的来源。\n\n' +
         '光有 ccdB，那些**根本没拿到任何质粒**的细菌不受影响（它们没有 ccdB，也就不会死）。\n\n' +
         '**两层叠在一起，两种失败都被堵住**——这就是 Gateway >95% 阳性率的全部秘密。',
      takeaway: '正选择淘汰「没有你要的」，负选择淘汰「带着你不要的」。两个漏洞不同，所以要叠加。'
    },
    {
      q: 'ccdB 是个什么东西？',
      trace: {
        what: '一个**毒素蛋白**，编码在 E. coli 的 **F 质粒**（性因子）上的 ccd 操纵子里。它的毒性来自抑制 **DNA 旋转酶（gyrase，也就是 II 型拓扑异构酶）**。',
        from: '这里有个很妙的来历：它本来是一套**毒素-抗毒素系统**的一半。F 质粒同时编码毒素 **CcdB** 和抗毒素 **CcdA**，两个一起表达时相安无事。\n\n关键在于 **CcdA 降解得比 CcdB 快得多**。所以一旦某个细胞在分裂时**把 F 质粒弄丢了**，它体内的抗毒素先消失，而毒素还在——**这个细胞就被自己体内残留的毒素杀死了**。\n\n换句话说，这是**质粒逼宿主不许把自己弄丢**的手段。ccdB 不是为了给人做克隆而存在的，人类只是又一次**捡了个现成的**。',
        to: '克隆里的用法：把 **ccdB 放在载体上你将要替换掉的那一段**。\n\n反应**成功** → ccdB 被你的插入片段顶掉 → 细胞活。\n\n反应**失败** → 载体原样 → 还在表达 ccdB → 细胞死。\n\n于是「空载体背景」这个克隆里最常见的失败模式，被从根上消掉了。',
        family: '毒素-抗毒素系统在细菌质粒里很常见，ccdB 只是被商业化得最成功的一个。**Gateway 卖的就是它**（第 1-15 节）。'
      },
      takeaway: 'ccdB 本是质粒防止自己被丢弃的自杀装置。克隆把它放在待替换的位置上，反应不成功就自杀。'
    },
    {
      q: '为什么打拓扑异构酶这个靶点这么致命？',
      a: '因为它管的是**DNA 的打结问题**，而这个问题是躲不掉的。\n\n' +
         'DNA 是双螺旋。复制或转录时机器沿着链往前走，**前方的螺旋会被越拧越紧**（正超螺旋累积），就像你把一根绳子的一头固定住、另一头不停地转。拧到一定程度，机器就推不动了。\n\n' +
         '**II 型拓扑异构酶的解法很暴力：把两条链都切断，让 DNA 从缺口穿过去解开缠绕，然后再接回来。**\n\n' +
         '所以它是**存活必需的（essential）**——没有它，复制和转录都会卡死。\n\n' +
         '正因为必需，它成了各方争抢的靶点：**人类的化疗药和抗菌药里都有打这个靶点的**。ccdB 只是说明**自然界早在几亿年前就发现了这个靶点好用**。\n\n' +
         '顺带一提，第 1-16 节的 TOPO TA 克隆用的也是拓扑异构酶，但用的是它**切开再接上**的本事，而不是毒它。**同一个酶，一处当靶子，一处当工具。**',
      takeaway: '它负责解开复制时越拧越紧的超螺旋，所以是必需酶。必需 = 好靶点。'
    },
    {
      q: '既然 ccdB 会杀死细菌，这个载体本身怎么保存和扩增？',
      a: '这是个必然会遇到的现实问题：**你得先有大量的空载体，才能拿它去做克隆。**\n\n' +
         '答案是用**特殊菌株**：**DB3.1** 或 **ccdB Survival**。它们带一个**突变过的 DNA 旋转酶**——功能正常，但 **ccdB 抓不住它**。于是毒素在这些细胞里完全无效，载体可以正常扩增和抽提。\n\n' +
         '还有一件事值得留意，而且很容易踩坑：**JM109、XL1-Blue、XL10-Gold 这些常用菌株天然带着 F 质粒**，也就自带抗毒素 CcdA，因此**对 ccdB 部分抗性**。\n\n' +
         '推论是：如果你把 Gateway 反应产物转进这些菌株，**负选择那一层会打折甚至失效**，背景菌落立刻变多——而你会以为是自己的连接反应没做好。\n\n' +
         '所以规矩是：**扩增 ccdB 载体用 DB3.1；转化反应产物用普通的 DH5α / TOP10 那一类，别用带 F 的。**两步用两种菌，理由正好相反。',
      takeaway: '扩增载体要用 ccdB 抗性菌（DB3.1）；转化产物要用不带 F 质粒的菌，否则负选择失效。'
    }
  ],
  points: [
    { term: 'Type II topoisomerase', en: 'Ubiquitous and indispensable for cell survival. Cuts both strands of the DNA helix and relaxes positively supercoiled DNA. A chemotherapy target in humans and an antibacterial target (gyrase) in bacteria.', cn: 'II 型拓扑异构酶：普遍存在，对细胞存活不可或缺。切开 DNA 双螺旋的两条链，松弛正超螺旋的 DNA。是人类的化疗靶点，也是细菌的抗菌靶点（旋转酶 gyrase）。' },
    { term: 'ccdB — the toxin', en: 'A component of a toxin–antitoxin system encoded by the ccd operon of the E. coli F sex-factor plasmid. CcdB inhibits DNA gyrase (topoisomerase II).', cn: 'ccdB——毒素：大肠杆菌 F 性因子质粒 ccd 操纵子编码的毒素-抗毒素系统的组分。CcdB 抑制 DNA 旋转酶（II 型拓扑异构酶）。' },
    { term: 'CcdA — the antitoxin', en: 'Actively dissociates CcdB:gyrase complexes.', cn: 'CcdA——抗毒素：主动解离 CcdB:旋转酶复合物。' },
    { term: 'What it is used for', en: 'Limiting the number of "negative" colonies during cloning: cells that harbour a plasmid still expressing CcdB will die.', cn: '用途：在克隆过程中限制「阴性」菌落的数量——带有仍表达 CcdB 的质粒的细胞会死亡。' },
    { term: 'Propagating a ccdB plasmid', en: 'Special cells are needed: DB3.1 or ccdB Survival (Invitrogen), which express a mutated DNA gyrase that CcdB cannot inhibit.', cn: '扩增 ccdB 质粒：需要特殊细胞——DB3.1 或 ccdB Survival（Invitrogen），它们表达 CcdB 无法抑制的突变型 DNA 旋转酶。' },
    { term: 'Naturally partial resistance', en: 'Some common lab strains naturally harbour the F plasmid and are therefore partially resistant to CcdB: JM109, XL1-Blue, XL10-Gold.', cn: '天然的部分抗性：一些常见实验室菌株天然携带 F 质粒，因而对 CcdB 有部分抗性：JM109、XL1-Blue、XL10-Gold。' }
  ],
  beyondPoints: [
    { term: 'Positive selection, defined crisply', en: 'Positive selection means only the cells you want survive. Antibiotic resistance is the example: no plasmid means no resistance gene means death on the antibiotic.', cn: '正选择的精确定义：只有你想要的细胞才能存活。抗生素抗性就是例子：没有质粒就没有抗性基因，遇到抗生素就会死。' },
    { term: 'Negative selection, defined crisply', en: 'Negative (counter-)selection means the cells you do NOT want die. The empty/unreacted vector still carries ccdB, so any colony that took up unmodified vector is killed. Only vectors where ccdB has been replaced by your insert survive.', cn: '负选择（反向选择）的精确定义：**不想要**的细胞会死。空的/未反应的载体上还挂着 ccdB，所以任何仍是原样空载体的菌落都会被杀死。只有 ccdB 被你的插入片段替换掉的载体才能存活。' },
    { term: 'Why Gateway stacks both', en: 'This is why Gateway (§1.15) achieves >95% positive clones — it uses both layers at once: a different antibiotic AND ccdB counter-selection.', cn: '为什么 Gateway 要叠加两层：这正是 Gateway（§1.15）能达到 >95% 阳性率的原因——它**同时**用了两层选择：不同的抗生素**加上** ccdB 负选择。' }
  ],
  terms: [
    { en: 'ccdB', cn: 'ccdB', def_en: 'A toxin from the E. coli F plasmid that inhibits DNA gyrase; used as negative selection so unmodified vector kills its own host cell.', def_cn: '来自大肠杆菌 F 质粒的毒素，抑制 DNA 旋转酶；用作负选择，使未修饰的载体毒死自己的宿主细胞。' },
    { en: 'Positive selection', cn: '正选择', def_en: 'A selection scheme in which only desired cells survive — e.g. antibiotic resistance requiring the plasmid.', def_cn: '一种筛选方案，只有想要的细胞才能存活——例如需要质粒才有的抗生素抗性。' },
    { en: 'Negative (counter-) selection', cn: '负选择 / 反向选择', def_en: 'A selection scheme in which undesired cells are actively killed — e.g. ccdB killing cells that retain unmodified vector.', def_cn: '一种筛选方案，不想要的细胞会被主动杀死——例如 ccdB 杀死仍保留未修饰载体的细胞。' },
    { en: 'DB3.1 / ccdB Survival', cn: 'DB3.1 / ccdB Survival', def_en: 'Special E. coli strains carrying a mutated gyrase resistant to CcdB, required to propagate any ccdB-containing plasmid.', def_cn: '携带 CcdB 无法抑制的突变型旋转酶的特殊大肠杆菌菌株，是扩增任何含 ccdB 质粒所必需的。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What does CcdB actually inhibit, and why does that kill the cell?',
      q_cn: 'CcdB 究竟抑制什么？为什么这会杀死细胞？',
      options: ['The bacterial ribosome, shutting down protein synthesis entirely', 'DNA gyrase, the essential type II topoisomerase that relaxes supercoiled DNA', 'RNA polymerase, so transcription stops across the whole genome', 'Cell wall synthesis, so the cell swells and lyses osmotically as it does under ampicillin'],
      answer: 1,
      optionRefs: { 0: '1-10-1', 3: '1-10-1' },
      why_en: 'Type II topoisomerase is indispensable — it cuts both strands to relax supercoiling. Inhibiting it is lethal, which is exactly why it works as a counter-selection toxin.',
      why_cn: 'II 型拓扑异构酶是不可或缺的——它切开两条链来松弛超螺旋。抑制它是致命的，这正是它能作为负选择毒素起作用的原因。' },
    { type: 'mcq',
      q_en: 'Which statement correctly distinguishes positive from negative selection?',
      q_cn: '哪一句正确区分了正选择和负选择？',
      options: ['Positive selection kills unwanted cells; negative selection keeps wanted cells', 'Positive lets only the wanted cells survive; negative actively kills the rest', 'The two terms describe one and the same mechanism under different names', 'Negative selection works only in eukaryotic cells, never in bacteria'],
      answer: 1,
      optionNotes: {
        0: { en: 'The two definitions are swapped. The sign refers to the cells you want: positive selection acts for them, so only they grow, while negative selection acts against everything else and kills it outright. A quick anchor is that ccdB, the killer, is the negative one.', cn: '两个定义对调了。正负是相对于你想要的细胞说的：positive selection 是替它们说话，只有它们能长；negative selection 是冲着其余细胞去的，直接把它们杀掉。一个好用的锚点是负责杀的 ccdB 对应 negative。' }
      },
      why_en: 'Positive = "only what I want survives." Negative = "what I don\'t want dies." Getting this backwards is a common mistake worth avoiding explicitly.',
      why_cn: '正选择＝「只有我要的活下来」。负选择＝「我不要的会死」。把这两个说反是一个常见错误，值得特别注意避免。' },
    { type: 'mcq',
      q_en: 'Why does a ccdB-containing plasmid require special host cells such as DB3.1 to propagate?',
      q_cn: '为什么含 ccdB 的质粒需要 DB3.1 这类特殊宿主细胞才能扩增？',
      options: ['DB3.1 takes up plasmid DNA at a much higher transformation efficiency', 'DB3.1 carries a mutated gyrase that CcdB can no longer inhibit', 'Lacking the F plasmid entirely is what lets DB3.1 tolerate ccdB', 'DB3.1 expresses extra CcdA antitoxin that neutralises the CcdB'],
      answer: 1,
      optionRefs: { 0: '2-6' },
      optionNotes: {
        2: { en: 'The direction is backwards. Strains that do carry F, such as JM109 and XL1-Blue, are the partly ccdB-resistant ones, because F itself encodes the antitoxin CcdA. Lacking F makes a strain more sensitive, not less; DB3.1 survives on account of a mutation in its own gyrase.', cn: '方向反了。带 F 质粒的菌株，比如 JM109 和 XL1-Blue，才是对 ccdB 部分抗性的那一类，因为 F 本身就编码抗毒素 CcdA。没有 F 只会让菌株更敏感，而不是更耐受；DB3.1 能活下来靠的是它自己 gyrase 上的突变。' },
        3: { en: 'CcdA really is the antitoxin of this module and really does rescue cells, which is exactly why F-carrying strains such as JM109 are partly ccdB-resistant and must not be used for the transformation step. But DB3.1 works from the other side: a mutated gyrase that CcdB can no longer hold on to.', cn: 'CcdA 确实是这个模块的 antitoxin，也确实能救细胞，这正是带 F 的菌株比如 JM109 对 ccdB 有部分抗性、因而转化那一步不能用它们的原因。但 DB3.1 走的是另一条路：gyrase 突变以后 CcdB 抓不住它。' }
      },
      why_en: 'The plasmid itself carries and expresses ccdB. Any ordinary strain would kill itself. DB3.1\'s mutated gyrase is resistant to CcdB inhibition, so it survives to make copies.',
      why_cn: '质粒本身携带并表达 ccdB。任何普通菌株都会自己毒死自己。DB3.1 的突变型旋转酶对 CcdB 抑制有抗性，所以能存活下来复制质粒。' },
    { type: 'short',
      q_en: 'Explain how ccdB counter-selection works, and why Gateway combines it with antibiotic selection.',
      q_cn: '解释 ccdB 负选择如何起作用，以及为什么 Gateway 要把它和抗生素筛选结合起来。',
      accept: ['ccdB', 'gyrase', 'topoisomerase', 'negative selection', 'positive selection', 'Gateway'],
      answer_en: 'CcdB is a toxin from the E. coli F plasmid that inhibits DNA gyrase, which is essential for cell survival because it relaxes supercoiled DNA. In cloning, the destination vector carries ccdB in the slot your gene will occupy. Any colony that took up unreacted, unmodified vector still expresses ccdB and dies — that is negative selection, killing the cells you do not want. Antibiotic resistance is the complementary positive selection, keeping only cells that have a plasmid at all. Gateway stacks both filters at once — a different antibiotic on the destination vector, plus ccdB counter-selection — which is why it reaches over ninety-five percent positive clones instead of relying on one filter alone.',
      answer_cn: 'ccdB 是大肠杆菌 F 质粒的一种毒素，抑制 DNA 旋转酶，而旋转酶对细胞存活是必需的，因为它负责松弛超螺旋 DNA。在克隆中，目标载体在你的基因将要占据的位置上带着 ccdB。任何拿到未反应、未修饰载体的菌落仍然表达 ccdB，于是死亡——这就是负选择，杀掉你不想要的细胞。抗生素抗性是互补的正选择，只留下**有质粒**的细胞。Gateway 同时叠加两层过滤——目标载体上不同的抗生素，加上 ccdB 负选择——这正是它能达到超过 95% 阳性克隆率、而不是只靠一层过滤的原因。' }
  ],
  oral: {
    q_en: 'What is ccdB, and how does Gateway use it to reach over 95% positive clones?',
    q_cn: '什么是 ccdB？Gateway 如何用它达到超过 95% 的阳性克隆率？',
    model_en: 'CcdB is the toxin half of a toxin-antitoxin system encoded by the ccd operon of the E. coli F plasmid. It inhibits DNA gyrase, the bacterial type-two topoisomerase, which is indispensable because it cuts both DNA strands to relax supercoiling — inhibiting it kills the cell, and it is also a human chemotherapy target for the same reason. Cloning exploits this as negative, or counter, selection. The key distinction to get right: positive selection means only the cells you want survive, which is what antibiotic resistance does — no plasmid, no resistance gene, dead on the antibiotic. Negative selection means the cells you do not want are actively killed — the destination vector carries ccdB in the slot your gene will occupy, so any colony that retained unreacted, unmodified vector still expresses the toxin and dies. Only vectors where recombination replaced ccdB with your insert survive. Gateway stacks both filters simultaneously — a different antibiotic resistance on the destination vector, plus ccdB counter-selection — and that double filter is exactly why it reaches over ninety-five percent positive clones. One more detail: propagating the destination vector itself requires special cells like DB3.1 or ccdB Survival, which carry a mutated gyrase that CcdB cannot inhibit, because an ordinary strain would simply kill itself.',
    checklist: ['Type II topoisomerase — essential, cuts both strands', 'ccdB inhibits gyrase; CcdA is the antitoxin', 'Positive selection: only wanted cells survive', 'Negative selection: unwanted cells are killed', 'Destination vector carries ccdB until replaced by insert', 'Gateway stacks antibiotic + ccdB → >95%', 'DB3.1/ccdB Survival needed to propagate the vector itself']
  }
},

{
  id: '1-11',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.11',
  enTitle: 'Restriction enzymes — history, methylation, and Type IIP vs Type IIS',
  cnTitle: '限制酶——历史、甲基化，以及 IIP 型与 IIS 型',
  slides: 'L2 s.9–10',
  coverage: 'full',
  coverageNote: 'History, methylase table and the IIP/IIS comparison are on the slides. The Dam/Dcm methylation trap is flagged as a pitfall on the slide itself; the three-item digest-troubleshooting checklist is my synthesis of that pitfall plus material from §1.12, useful enough to state as its own point.',
  summary: {
    en: 'Restriction endonucleases were described 1971–1973 and enabled recombinant DNA as a field; over 3,000 are known, recognising about 350 motifs, originally as bacterial defence against phage with the bacterium\'s own DNA protected by methylation. That same host methylation can silently block a digest in a cloning strain — a classic exam trap. And the Type IIP versus Type IIS distinction is the single fact that makes Golden Gate cloning possible: cutting outside the recognition site means the site is removed from the product and the overhang sequence is yours to choose.',
    cn: '限制性内切酶在 1971–1973 年间被描述出来，让重组 DNA 成为一个学科；目前已知超过 3000 种，识别约 350 种基序，最初是细菌用来防御噬菌体的手段，而细菌自己的 DNA 靠甲基化受到保护。同样的宿主甲基化会在克隆菌株里悄悄让酶切失败——这是一个经典的考试陷阱。而 IIP 型与 IIS 型的区别，正是让 Golden Gate 克隆得以成立的**唯一**关键事实：切在识别位点外面，意味着位点会从产物中被切除，而黏性末端序列可以由你自己来定。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.9', src: 'img/figures/L2_s09_1.webp' },
    { slide: 'L2 s.9', src: 'img/figures/L2_s09_2.webp' },
    { slide: 'L2 s.10', src: 'img/figures/L2_s10_1.webp' },
    { slide: 'L2 s.10', src: 'img/figures/L2_s10_2.webp' },
    { slide: 'L2 s.10', src: 'img/figures/L2_s10_3.webp' },
    { slide: 'L2 s.10', src: 'img/figures/L2_s10_4.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**IIP 型切在识别位点里面，IIS 型切在位点外面。**就这一条差别撑起了整个 Golden Gate。\n\n' +
            '另外记住甲基化这个陷阱：质粒图上位点明明在，酶就是切不动——因为图看不见甲基。',
  skipIt: '「3000 多种酶、约 350 种基序」这两个数字，以及 EcoKI 那种 AAC(N6)GTGC 式的识别序列，不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时写的是 **Restriction enzymes (Type IIP and IIS), methylation**——**类型区分和甲基化这两个概念是被点名的**，数字不是。',
  explain: [
    {
      q: '细菌为什么会有限制酶？「限制」限制的是什么？',
      a: '**限制的是噬菌体的地盘。**这个词来自最早的观察：某个噬菌体能在这株细菌里疯长，换一株就长不起来——它的宿主范围被「限制」住了。\n\n' +
         '机制是一对配套的酶，合称**限制-修饰系统**：\n\n' +
         '**限制酶**：见到某一段特定序列就切断。\n\n' +
         '**甲基化酶**：在自己基因组上**同样的那段序列**上打一个甲基标记。\n\n' +
         '于是敌我识别就成立了：**细菌自己的 DNA 带标记，切酶不动它；噬菌体的 DNA 没标记，进来就被剁碎。**\n\n' +
         '这里有个很值得欣赏的设计：**细菌并不「认得」自己的 DNA。**它认的是「有没有盖过章」。这比逐段比对序列便宜得多，而且新序列只要盖了章就自动受保护。\n\n' +
         '记住这个机制，下面那个甲基化陷阱就不是一条要背的怪规则，而是**这套系统在你的实验里继续正常工作**的自然后果。',
      takeaway: '限制-修饰系统靠「盖章」而不是「认脸」区分敌我。甲基化本来就是自我保护。'
    },
    {
      q: 'DNA 里说的「回文」，跟中文里那个回文不是一回事吧？',
      a: '不是，而且这一点纯粹是记号问题，卡住很多人。\n\n' +
         '中文的回文是「正着读反着读一样」。**DNA 的回文不是这个意思**——EcoRI 的位点 `GAATTC` 倒过来读是 `CTTAAG`，明显不一样。\n\n' +
         '**DNA 回文说的是：两条链各自按 5′→3′ 方向读出来，结果一样。**\n\n' +
         '把双链写出来就一目了然：\n\n' +
         '上链 5′-**GAATTC**-3′\n\n' +
         '下链 3′-CTTAAG-5′，而按 5′→3′ 读，就是 **GAATTC**。\n\n' +
         '**两条链读出来是同一个词。**这才是这里说的回文。\n\n' +
         '为什么重要？因为回文意味着**这个酶在两条链上看到的是同一个东西**，所以它可以用两个完全相同的亚基组成一个对称的二聚体，一边一个，同时下刀——切出来的两个末端也就天然对称、互相配套。\n\n' +
         '反过来也就懂了 IIS 型为什么是**非回文**的：它的识别位点两条链读出来不一样，所以它有方向性，**知道该往哪一边数几个碱基去下刀**。',
      takeaway: 'DNA 回文 = 两条链各自 5′→3′ 读出来相同。对称 → 酶可以是对称二聚体 → 末端互相配套。'
    },
    {
      q: 'Type IIS 是个什么东西？为什么就这一条能撑起 Golden Gate？',
      trace: {
        what: '一类限制酶。跟常见的 IIP 型比，只有两点不同：**识别位点是非回文的**，而且**它切在识别位点的外面**，隔一段固定的距离下刀。例子：BsaI、BbsI、BsmBI。',
        from: '这不是人设计的，是自然界里本来就有的一类酶。人类做的只是发现了「切在外面」这件事在克隆上有多好用。',
        to: '「切在外面」推出两个后果，Golden Gate 全部建在这两条上：\n\n**后果一：识别位点不进入产物。**因为刀落在位点外面，位点留在了被切掉的那一侧。于是产物里**没有这个酶的位点了**——你可以把酶和连接酶放在同一管里，切开、连上、连错的再被切开，而**连对的产物因为不含位点，从此免疫**，反应就朝着正确方向单向积累。\n\n**后果二：黏性末端的序列由你自己定。**IIP 型切在位点里面，所以末端序列就是位点序列的一部分，**是死的**——用 EcoRI 就只能得到 AATT。IIS 型的末端在位点外面，那几个碱基**是你自己写进去的**。于是你可以设计一组**彼此都不配对**的末端，让五个、十个片段各自只认自己的邻居，**一次反应按唯一顺序全部拼好**。',
        family: '相对的是 Type IIP（回文、切在位点内），占日常使用的约 90%，EcoRI、BamHI、HindIII、NotI 都是。'
      },
      takeaway: '切在位点外 → 产物不含位点（可以边切边连）+ 末端序列自己定（可以一次拼很多片段）。'
    },
    {
      q: '甲基化陷阱是怎么坑人的？为什么它最难查？',
      a: '因为**质粒图和 NEBcutter 都只看序列，看不见甲基**。\n\n' +
         '标准克隆菌株 DH5α、TOP10 都是 **Dam⁺ Dcm⁺** 的。你的质粒在里面长了一夜，早就被盖满了章：Dam 在每一个 **GATC** 的腺嘌呤上加甲基，Dcm 在 **CCAGG / CCTGG** 的第二个胞嘧啶上加甲基。\n\n' +
         '而有些限制酶**被甲基挡住就切不动**——XbaI、ClaI、MboI 是经典例子。\n\n' +
         '**最阴的一点是它跟上下文有关。**Dam 的位点是 GATC，而 XbaI 的位点是 TCTAGA。两者本身不重叠——但如果你的序列恰好是 **TCTAGATC**，里面就藏了一个 GATC，甲基就盖在这儿了。\n\n' +
         '结果是：**同一个酶，在这个质粒上切得好好的，换一个质粒就完全不切**，取决于位点旁边碰巧是什么碱基。\n\n' +
         '**排查顺序：**\n\n' +
         '**（1）甲基化**——排在第一位不是因为最常见，而是因为**最隐蔽**：图上位点明明在，软件也说能切，一切看起来都对。\n\n' +
         '**（2）切得离末端太近**——限制酶在线性片段的尽头切不动，需要 §1.12 那些填充碱基。\n\n' +
         '**（3）缓冲液 / 盐浓度，或条件不当引起的 star activity。**\n\n' +
         '**解法：**把质粒转进 **dam⁻ dcm⁻ 菌株**里重新抽一遍，章就没了。',
      takeaway: '质粒图看不见甲基。位点旁边碰巧多几个碱基，就可能凑出一个 GATC 把酶挡住。'
    }
  ],
  points: [
    { term: 'History', en: 'Restriction endonucleases were described 1971–1973. The discovery enabled easy manipulation of DNA and the creation of recombinant DNA as a field.', cn: '历史：限制性内切酶在 1971–1973 年间被描述出来。这项发现让 DNA 的操作变得容易，也催生了「重组 DNA」这个领域。' },
    { term: 'Origin and scale', en: 'Originally mostly bacterial enzymes involved in defence against foreign (phage) DNA. The bacterium\'s own DNA is protected by methylation. Over 3,000 enzymes recognising approximately 350 specific sequence motifs are known.', cn: '起源与规模：最初主要是细菌用来防御外源（噬菌体）DNA 的酶。细菌自身的 DNA 靠甲基化受到保护。目前已知超过 3000 种酶，识别约 350 种特定序列基序。' },
    { term: 'Host protection methylases', en: 'Dam methylase methylates adenine in GATC. Dcm methyltransferase methylates the second cytosine in CCAGG and CCTGG. EcoKI methylase methylates adenine in AAC(N6)GTGC and GCAC(N6)GTT.', cn: '宿主保护甲基化酶：Dam 甲基化酶甲基化 GATC 中的腺嘌呤。Dcm 甲基转移酶甲基化 CCAGG 和 CCTGG 中的第二个胞嘧啶。EcoKI 甲基化酶甲基化 AAC(N6)GTGC 和 GCAC(N6)GTT 中的腺嘌呤。' },
    { term: 'Type IIP — ~90% of use', en: 'Recognise palindromic sequences and cut within the recognition site. Products have blunt or sticky ends, 5′-phosphorylated. Examples: EcoRI, BamHI, HindIII, NotI.', cn: 'IIP 型——约占使用量的 90%：识别回文序列，在识别位点**内部**切割。产物是平末端或黏性末端，5′-磷酸化。例子：EcoRI、BamHI、HindIII、NotI。' },
    { term: 'Type IIS — the basis of Golden Gate', en: 'Non-palindromic recognition site, cutting outside it at a fixed distance. Examples: BsaI, BbsI, BsmBI.', cn: 'IIS 型——Golden Gate 的基础：非回文识别序列，在**固定距离外**切割。例子：BsaI、BbsI、BsmBI。' },
    { term: 'Practical catalogue parameters', en: 'Check optimum temperature, salt concentration, heat inactivation, and whether high-fidelity variants exist.', cn: '实用的目录参数：检查最适温度、盐浓度、热灭活条件，以及是否有高保真变体。' }
  ],
  beyondPoints: [
    { term: 'Dam/Dcm methylation as an exam trap', en: 'Some restriction enzymes are blocked by Dam or Dcm methylation. Classic examples: XbaI, ClaI and MboI are blocked by Dam methylation when their site overlaps a GATC. Since standard cloning strains (DH5α, TOP10) are Dam⁺ Dcm⁺, plasmid DNA prepared from them carries these methyl marks and the enzyme simply will not cut. Fix: propagate the plasmid in a dam⁻ dcm⁻ strain before digesting.', cn: 'Dam/Dcm 甲基化作为考试陷阱：一些限制酶会被 Dam 或 Dcm 甲基化阻断。经典例子：XbaI、ClaI、MboI 在识别位点与 GATC 重叠时会被 Dam 甲基化阻断。由于标准克隆菌株（DH5α、TOP10）是 Dam⁺ Dcm⁺，从它们那里抽出的质粒 DNA 带有这些甲基标记，酶就是切不动。解决办法：先在 dam⁻ dcm⁻ 菌株中扩增质粒，再做酶切。' },
    { term: 'Three-item digest troubleshooting checklist', en: 'When a digest inexplicably fails, check three things in order: (1) methylation — the plasmid map shows the site exists and NEBcutter agrees, but neither knows whether your DNA was actually methylated; (2) cutting too close to a fragment end — restriction enzymes cut poorly right at a linear terminus, needing the stuffer bases from §1.12; (3) buffer/salt concentration or star activity from suboptimal conditions. Methylation is the most hidden cause precisely because the map looks fine.', cn: '酶切失败排查三件事：① **甲基化**——质粒图谱显示位点存在，NEBcutter 也认同，但它们都不知道你的 DNA 实际上有没有被甲基化；② **切太靠边**——限制酶在线性片段末端附近切割效率很差，需要 §1.12 讲的填充碱基；③ **缓冲液/盐浓度或星号活性**——次优条件导致的非特异切割。甲基化是最隐蔽的原因，正因为图谱看起来完全没问题。' }
  ],
  terms: [
    { en: 'Type IIP restriction enzyme', cn: 'IIP 型限制酶', def_en: 'A restriction enzyme recognising a palindromic sequence and cutting within it, leaving a fixed overhang sequence dictated by the enzyme.', def_cn: '识别回文序列并在其内部切割的限制酶，留下的黏性末端序列由酶本身决定，是固定的。' },
    { en: 'Type IIS restriction enzyme', cn: 'IIS 型限制酶', def_en: 'A restriction enzyme recognising a non-palindromic sequence and cutting outside it at a fixed distance, so the recognition site is removed from the product and the overhang sequence is user-defined.', def_cn: '识别非回文序列、在固定距离外切割的限制酶，因而识别位点会从产物中被切除，黏性末端序列由用户自行定义。' },
    { en: 'Dam methylase', cn: 'Dam 甲基化酶', def_en: 'Methylates adenine within GATC sequences; can block digestion by Dam-sensitive enzymes when their site overlaps a GATC.', def_cn: '甲基化 GATC 序列中的腺嘌呤；当对 Dam 敏感的酶的位点与 GATC 重叠时，可能阻断酶切。' },
    { en: 'Dam⁻ Dcm⁻ strain', cn: 'Dam⁻ Dcm⁻ 菌株', def_en: 'An E. coli strain lacking Dam and Dcm methylases, used to propagate plasmid DNA that must remain cuttable by methylation-sensitive enzymes.', def_cn: '缺失 Dam 和 Dcm 甲基化酶的大肠杆菌菌株，用于扩增必须能被甲基化敏感酶切开的质粒 DNA。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the defining structural difference between Type IIP and Type IIS restriction enzymes?',
      q_cn: 'IIP 型和 IIS 型限制酶在结构上的定义性区别是什么？',
      options: ['IIP enzymes need ATP to cut, while IIS enzymes need only Mg2+', 'IIP cut inside their palindromic site, IIS outside it at a fixed distance', 'IIS enzymes leave blunt ends, IIP enzymes leave sticky ends', 'IIP enzymes can only cut DNA that has been methylated at the site'],
      answer: 1,
      optionNotes: {
        0: { en: 'The ATP requirement belongs to Type I and Type III enzymes, not to either half of Type II. Every Type II enzyme, IIP and IIS alike, needs only Mg2+ and cuts at a fixed position. What splits IIP from IIS is where the cut falls relative to the recognition site.', cn: '需要 ATP 的是 Type I 和 Type III enzymes，不是 Type II 里的任何一类。所有 Type II，无论 IIP 还是 IIS，都只需要 Mg2+，切点也都是固定的。区分 IIP 和 IIS 的是切点落在 recognition site 的里面还是外面。' },
        3: { en: 'This inverts the restriction-modification system. Methylation is how the host protects its own DNA from its own enzyme, so a methylated site is normally the one that does not get cut. That is precisely why a plasmid prepped from a Dam-plus Dcm-plus strain can refuse to cut with a methylation-sensitive enzyme.', cn: '这把 restriction-modification 系统的方向弄反了。methylation 是宿主用来保护自家 DNA 不被自家酶切的，所以被甲基化的位点通常恰恰是切不动的那个。这也正是从 Dam-plus Dcm-plus 菌株抽出来的质粒，会被 methylation-sensitive 的酶拒切的原因。' }
      },
      why_en: 'This single distinction — cutting inside versus outside the recognition site — is what determines everything downstream: whether the site survives in the product and whether the overhang is fixed or user-chosen.',
      why_cn: '这一个区别——切在识别位点内还是外——决定了后面的一切：位点是否会留在产物里，以及黏性末端是固定的还是用户可选的。' },
    { type: 'mcq',
      q_en: 'A digest of your plasmid inexplicably fails even though NEBcutter confirms the site is present. What is the most likely hidden cause?',
      q_cn: '你的质粒酶切莫名其妙失败了，尽管 NEBcutter 确认位点存在。最可能的隐藏原因是什么？',
      options: ['The enzyme stock passed its expiry date and has lost all activity', 'The plasmid is from a Dam+ Dcm+ strain and the site is blocked by methylation', 'NEBcutter found the site in an outdated version of the reference', 'The reaction buffer was diluted to the wrong final concentration'],
      answer: 1,
      why_en: 'A sequence map cannot show methylation status. Standard cloning strains are Dam⁺ Dcm⁺, so a methylation-sensitive enzyme like XbaI, ClaI or MboI may simply refuse to cut.',
      why_cn: '序列图谱看不出甲基化状态。标准克隆菌株是 Dam⁺ Dcm⁺，所以像 XbaI、ClaI、MboI 这类对甲基化敏感的酶可能就是切不动。' },
    { type: 'mcq',
      q_en: 'Why do restriction enzymes leave the bacterium\'s own DNA alone while destroying invading phage DNA?',
      q_cn: '为什么限制酶不动细菌自己的 DNA，却会破坏入侵的噬菌体 DNA？',
      options: ['Phage DNA lacks the recognition site entirely, so the enzyme has nothing to bind', 'The bacterial DNA is protected by methylation at the same sites the enzyme recognises', 'Restriction enzymes only act on circular DNA', 'Phage DNA is single-stranded and therefore more vulnerable to cleavage than the host chromosome'],
      answer: 1,
      optionNotes: {
        3: { en: 'Being single-stranded would make phage DNA harder to attack, not easier. A Type II enzyme binds a double-stranded recognition site and cuts both strands, so single-stranded phage genomes such as M13 are largely immune. Self and invader are told apart by methylation, not by strandedness.', cn: '单链只会让 phage DNA 更难被切，而不是更容易。Type II enzyme 结合的是双链的 recognition site，并把两条链一起切开，所以像 M13 这种单链噬菌体基因组基本切不动。区分自己和入侵者靠的是 methylation，不是链数。' }
      },
      why_en: 'This is the restriction-modification system: the host methylates its own recognition sites, and its cognate restriction enzyme will not cut methylated DNA.',
      why_cn: '这就是限制-修饰系统：宿主把自己的识别位点甲基化，而配对的限制酶不会切甲基化的 DNA。' },
    { type: 'short',
      q_en: 'Explain why the Type IIP/IIS distinction is what makes Golden Gate cloning possible.',
      q_cn: '解释为什么 IIP/IIS 的区别正是让 Golden Gate 克隆得以成立的关键。',
      accept: ['outside', 'recognition site', 'removed', 'overhang', 'scarless', 'directional'],
      answer_en: 'Type IIS enzymes cut outside their recognition sequence, at a fixed distance. Two consequences follow directly. First, the recognition site itself is cut away and does not appear in the final product, which is what makes the assembly scarless. Second, because the enzyme does not care what sequence sits in the four-base overhang it creates, you can design that overhang to be whatever you like — so different fragments get different, non-cross-reactive overhangs, allowing directional, multi-part, one-pot assembly. A Type IIP enzyme cannot do either, because its overhang sequence is fixed by the enzyme itself.',
      answer_cn: 'IIS 型酶在识别序列**外面**、固定距离处切割。由此直接产生两个后果：第一，识别位点本身被切掉，不会出现在最终产物中，这就是组装「无疤」的原因。第二，因为酶不管它切出来的那 4 个碱基黏性末端是什么序列，你可以把这个黏性末端设计成任何你想要的序列——于是不同片段可以拿到互不配对的黏性末端，实现定向、多片段、一锅式组装。IIP 型酶两点都做不到，因为它的黏性末端序列是被酶本身写死的。' }
  ],
  oral: {
    q_en: 'Compare Type IIP and Type IIS restriction enzymes, and explain the significance of the Dam/Dcm methylation trap.',
    q_cn: '比较 IIP 型和 IIS 型限制酶，并说明 Dam/Dcm 甲基化陷阱的意义。',
    model_en: 'Type IIP enzymes, which are about ninety percent of what gets used, recognise a palindromic sequence and cut within it, leaving blunt or sticky ends with a fixed overhang sequence dictated entirely by the enzyme — EcoRI, BamHI, HindIII, NotI. Type IIS enzymes recognise a non-palindromic sequence and cut outside it, at a fixed distance — BsaI, BbsI, BsmBI. That one difference, cutting outside the recognition site, is what makes Golden Gate cloning possible: because the site is cut away, it does not appear in the final product, so the assembly is scarless, and because the enzyme does not care what the four-base overhang sequence is, you can design each fragment\'s overhang to be unique, enabling directional multi-fragment one-pot assembly. On the methylation side: restriction enzymes originally evolved as bacterial defence against phage, and the bacterium protects its own DNA by methylating it at the same recognition sites — Dam methylase on GATC, Dcm on CCAGG or CCTGG. The trap is that some enzymes, like XbaI, ClaI and MboI, are blocked by that same methylation when their site overlaps a GATC. Standard cloning strains are Dam-plus Dcm-plus, so plasmid prepared from them carries these marks, and a methylation-sensitive digest will simply fail — with the plasmid map showing the site is present the whole time. The fix is to propagate the plasmid in a dam-minus dcm-minus strain first.',
    checklist: ['IIP: palindromic, cuts within, ~90% of use', 'IIS: non-palindromic, cuts outside at fixed distance', 'IIS → site removed from product → scarless', 'IIS → user-defined overhang → directional multi-part assembly', 'Restriction-modification: host methylates its own DNA', 'Dam (GATC) and Dcm (CCAGG/CCTGG) methylases', 'XbaI/ClaI/MboI blocked by Dam methylation', 'Fix: propagate in dam⁻ dcm⁻ strain before digesting']
  }
},

{
  id: '1-12',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.12',
  enTitle: 'Classical restriction cloning',
  cnTitle: '经典限制酶克隆',
  slides: 'L2 s.15',
  coverage: 'full',
  coverageNote: 'The seven-step workflow, the ligase conditions and the two primer design points are on the slide. When NOT to dephosphorylate is not, and it matters because dephosphorylation and directional double digestion are two solutions to the same problem — using both wastes efficiency.',
  summary: {
    en: 'Seven steps: amplify the gene by PCR adding restriction sites in the primer tails, cleave the insert, cleave the plasmid with complementary enzymes, optionally dephosphorylate the plasmid, ligate, transform, and select positive colonies. T4 DNA ligase joins 5-prime phosphate to 3-prime hydroxyl termini, at 16 degrees overnight or room temperature for 10 minutes. Two design points govern the primer tails: add stuffer bases, and mind the reading frame.',
    cn: '七个步骤：用 PCR 扩增基因并在引物尾部加上限制酶位点、酶切插入片段、用互补的酶切质粒、（可选）对质粒去磷酸化、连接、转化、筛选阳性菌落。T4 DNA 连接酶把 5′ 磷酸与 3′ 羟基末端连接起来，条件是 16 度过夜或室温 10 分钟。引物尾部的设计有两个要点：加填充碱基，以及注意阅读框。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.15', src: 'img/figures/L2_s15_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '经典酶切克隆的两个设计要点全在**引物尾巴**上：**加填充碱基**（否则酶切不动末端），**看阅读框**（否则融合标签接不上）。\n\n' +
            '去磷酸化只在载体可能自连时才需要——**能用双酶切定向克隆，就别去磷酸化**。',
  skipIt: '16 °C 过夜 / 室温 10 分钟这些具体条件，以及 NEB 那张「每个酶需要几个填充碱基」的表，不用背，用的时候查。老师在第 3 讲开头给第 2 讲做 RECAP 时写的是 **RE cloning – standard**——流程本身是被点名的，参数不是。',
  explain: [
    {
      q: '为什么酶切位点可以「加在引物尾巴上」？这在物理上是怎么回事？',
      a: '因为 **PCR 只要求引物的 3′ 端配得上模板。**\n\n' +
         '聚合酶是从引物的 3′ 端往下延伸的。所以只要 3′ 那一段跟模板配对牢靠，引物的 **5′ 端可以挂任何东西**——酶切位点、填充碱基、标签序列、同源臂，模板上有没有对应序列完全不重要。\n\n' +
         '过程是这样的：**第一轮**，引物 5′ 那截尾巴悬在外面，配不上，但延伸照常进行；**第二轮**开始，上一轮的产物成了模板，那截尾巴就**被抄进产物里了**。从此它就是这个片段的一部分。\n\n' +
         '**这是 PCR 最重要的一个可编程性**，值得单独记住：它让你可以给任意一段 DNA **两端换上你想要的序列**。\n\n' +
         '后面几乎所有「现代」克隆方法都建在这一条上：LIC 在尾巴上加特定序列，Gibson 在尾巴上加同源臂，Gateway 在尾巴上加 attB 位点。**方法各异，动作是同一个。**',
      takeaway: '3′ 端配上就能延伸，5′ 端随便挂。这是所有现代克隆方法共同的地基。'
    },
    {
      q: '填充碱基（stuffer bases）为什么非加不可？',
      a: '因为**限制酶需要抓住位点两侧的 DNA 才能切得动**。\n\n' +
         '限制酶不是一把悬空落下的刀。它要先结合到 DNA 上，而结合面比识别位点本身要宽——它的蛋白表面还压着位点两侧的骨架。\n\n' +
         '现在想象位点**正好在线性片段的最末端**：一侧根本没有 DNA 可抓。酶结合不稳，切割效率极低，有时干脆是零。\n\n' +
         '所以要在位点的 **5′ 侧再加几个碱基当把手**。加几个？每个酶不一样，NEB 有一张表专门列这个（有的酶 1 个就够，有的要 6 个以上）。\n\n' +
         '**而这几个碱基正是 §1.20 那道题埋雷的地方。**它们是「随便加的」，所以人很容易不看它们——但它们**照样会被翻译**。那道题里，填充碱基 `TA` 加在 `GATATC` 前面，拼出来就是 `TAGATATC`，里面藏着一个 **TAG 终止密码子**，蛋白在 His 标签之前就被截断了。\n\n' +
         '**教训：填充碱基不是空白，它是序列。加完要连着阅读框一起读一遍。**',
      takeaway: '酶要抓住位点两侧才切得动，所以末端要垫几个碱基。但那几个碱基照样会被翻译。'
    },
    {
      q: '什么时候该给载体去磷酸化，什么时候不该？',
      a: '判据只有一句：**这个载体自己能不能长回去。**\n\n' +
         '**该做的情况**：你用**一个酶**切开载体，或者用两个酶但切出来的末端**互相兼容**。这时载体的两个末端配套，它可以首尾相接原样长回去（self-ligation），而且效率还很高——板子上一堆空载体菌落就是这么来的。用 SAP / CIP 把它的 5′-磷酸拿掉，自连就不可能了。\n\n' +
         '**不该做的情况**：你做的是**双酶切定向克隆**，两端由两个不同的酶切出、**彼此不兼容**。这时载体**本来就自连不了**（两个末端对不上），再去磷酸化，唯一的效果就是**白白降低连接效率**。\n\n' +
         '所以优先级很清楚：**能用双酶切就用双酶切。**它不但解决了同一个问题，还顺手多解决一个——**插入片段的方向被固定住了**。单酶切的话，插入片段正着进反着进各占一半，你还得再筛一轮方向。\n\n' +
         '把这三件事排成一句话：**双酶切 > 去磷酸化 > 什么都不做。**',
      takeaway: '载体自己配得上就去磷酸化；双酶切不兼容末端本来就自连不了，再做只是降效率。'
    },
    {
      q: '为什么连接可以「16 °C 过夜」，也可以「室温 10 分钟」？',
      a: '因为这里有**两个方向相反的温度依赖**在拔河。\n\n' +
         '**连接酶的活性随温度升高而升高**——酶都这样，温度高反应快。这一头希望你把温度调上去。\n\n' +
         '**但黏性末端的退火随温度升高而不稳定。**两个片段要连上，得先靠那 4 个突出碱基**碱基配对贴在一起**。4 个碱基的配对本来就很弱，温度一高立刻散开——**没贴上，酶再快也没用可焊的**。这一头希望你把温度调下去。\n\n' +
         '**16 °C 就是这两条曲线的折中点**：酶还有相当的活性，末端也还粘得住。代价是慢，所以要过夜。\n\n' +
         '**室温 10 分钟**走的是另一条路：温度高、酶快，虽然每一对末端贴住的时间很短，但靠**高浓度**和**大量的碰撞机会**照样能连上足够的分子——你只需要几个成功的分子就能转化出菌落。\n\n' +
         '顺带一条推论：**平末端连接更依赖低温长时间**。因为平末端根本没有退火这一步帮忙固定，两个片段纯粹靠随机碰在一起的那一瞬间被焊住，成功率低得多。',
      takeaway: '酶要高温，退火要低温。16 °C 是折中；室温快反应靠浓度硬顶。平末端最难，所以最需要低温过夜。'
    }
  ],
  points: [
    { term: 'The workflow', en: 'Amplify your gene of interest by PCR, adding restriction sites in the primer tails. Cleave the gene with restriction enzymes. Cleave the plasmid with complementary enzymes. Dephosphorylate the plasmid, optionally. Ligate. Transform bacteria. Select positive colonies.', cn: '用 PCR 扩增目的基因，在引物尾部加上限制酶位点。用限制酶切割基因。用互补的酶切割质粒。（可选）对质粒去磷酸化。连接。转化细菌。筛选阳性菌落。' },
    { term: 'T4 DNA ligase', en: 'Catalyses formation of the phosphodiester bond between juxtaposed 5-prime phosphate and 3-prime hydroxyl termini in duplex DNA or RNA. It joins blunt and cohesive termini, and repairs single-stranded nicks in duplex DNA and DNA/RNA hybrids.', cn: '催化双链 DNA 或 RNA 中相邻的 5′ 磷酸与 3′ 羟基末端之间形成磷酸二酯键。它能连接平末端和黏性末端，也能修复双链 DNA 及 DNA/RNA 杂合体中的单链缺口。' },
    { term: 'Ligation conditions', en: '16 degrees overnight, or room temperature for 10 minutes. Engineered variants and optimised kits exist.', cn: '16 度过夜，或者室温 10 分钟。也有改造过的变体和优化的试剂盒。' },
    { term: 'Dephosphorylation enzymes', en: 'SAP, CIP and Antarctic phosphatase — non-specific removal of 5-prime and 3-prime phosphomonoesters from DNA and RNA.', cn: 'SAP、CIP 和南极磷酸酶——非特异性地去除 DNA 和 RNA 上的 5′ 和 3′ 磷酸单酯。' },
    { term: 'Design point — stuffer bases', en: 'Restriction enzymes cut poorly at the very end of a linear DNA fragment, so add a few stuffer bases 5-prime of the restriction site. NEB publishes a table of exactly how many each enzyme needs.', cn: '限制酶在线性 DNA 片段的最末端切得很差，所以要在限制酶位点的 5′ 侧加几个填充碱基。NEB 发布了每种酶具体需要多少个碱基的表格。' },
    { term: 'Design point — reading frame', en: 'Keep the reading frame in mind if you are making a fusion, such as with a tag or a signal peptide.', cn: '如果你要做融合蛋白（带标签或信号肽），必须注意阅读框。' }
  ],
  beyondPoints: [
    { term: 'Why you dephosphorylate the vector', en: 'A vector cut with one enzyme, or with two enzymes giving compatible ends, has two complementary ends that can simply re-ligate to itself. Self-ligated empty vector transforms very efficiently and swamps the plate with background colonies.', cn: '用一个酶切开的载体（或者用两个产生兼容末端的酶），两端是互补的，可以自己首尾相接。自连的空载体转化效率非常高，会让平板上长满背景菌落。' },
    { term: 'How it works', en: 'Removing the vector\'s 5-prime phosphates makes self-ligation impossible, because ligase needs a 5-prime phosphate on at least one side of each nick. The insert still has its phosphates, so vector and insert can ligate, leaving two nicks which the cell repairs after transformation.', cn: '去掉载体的 5′ 磷酸就让自连变得不可能，因为连接酶需要每个缺口至少一侧有 5′ 磷酸。插入片段仍带着磷酸，所以载体和插入片段能连上，留下两个缺口，由细胞在转化后修复。' },
    { term: 'When not to bother', en: 'If you did a directional double digest with two non-compatible enzymes, the vector cannot self-ligate anyway, so dephosphorylation only costs you efficiency. Directional cloning is the better solution to the same problem, and it has the additional benefit of fixing the insert orientation.', cn: '如果你用两个不兼容的酶做了双酶切定向克隆，载体本来就自连不了，这时去磷酸化纯属多此一举，还会白白降低连接效率。定向克隆是解决同一个问题的更好办法，而且顺便还保证了插入方向唯一。' }
  ],
  terms: [
    { en: 'T4 DNA ligase', cn: 'T4 DNA 连接酶', def_en: 'The enzyme forming a phosphodiester bond between a 5-prime phosphate and a 3-prime hydroxyl. Joins blunt and cohesive ends and repairs nicks.', def_cn: '在 5′ 磷酸与 3′ 羟基之间形成磷酸二酯键的酶。能连接平末端和黏性末端，也能修复缺口。' },
    { en: 'Dephosphorylation', cn: '去磷酸化', def_en: 'Removing 5-prime phosphates from a cut vector with SAP, CIP or Antarctic phosphatase, so that it cannot self-ligate.', def_cn: '用 SAP、CIP 或南极磷酸酶去除切开的载体上的 5′ 磷酸，使其无法自连。' },
    { en: 'Stuffer bases', cn: '填充碱基', def_en: 'Extra bases added 5-prime of a restriction site in a primer tail, because enzymes cut poorly at the very end of a linear fragment.', def_cn: '在引物尾部限制酶位点 5′ 侧添加的额外碱基，因为酶在线性片段的最末端切得很差。' },
    { en: 'Directional cloning', cn: '定向克隆', def_en: 'Using two non-compatible enzymes so the insert can only go in one way, which also prevents vector self-ligation without needing dephosphorylation.', def_cn: '使用两个不兼容的酶，使插入片段只能以一个方向进入；这同时也阻止了载体自连，无需去磷酸化。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is a cut vector dephosphorylated?',
      q_cn: '为什么要对切开的载体去磷酸化？',
      options: ['To raise transformation efficiency, since phosphates left on the vector ends hinder uptake by competent cells', 'To stop the cut vector ligating to itself instead of to the insert', 'To strip contaminating RNA from the digested vector preparation', 'To make certain that every plasmid molecule is fully linearised'],
      answer: 1,
      optionRefs: { 0: '2-6' },
      why_en: 'Self-ligated empty vector transforms very efficiently and fills the plate with background. The insert keeps its own phosphates, so vector-plus-insert still ligates, leaving nicks the cell repairs after transformation.',
      why_cn: '自连的空载体转化效率极高，会让平板上全是背景菌落。插入片段保留着自己的磷酸，所以「载体+插入」仍然能连上，留下的缺口由细胞在转化后修复。' },
    { type: 'mcq',
      q_en: 'When is dephosphorylation unnecessary?',
      q_cn: '什么时候不需要去磷酸化？',
      options: ['When both vector ends are blunt, since with no overhang to anneal the vector rarely recircularises', 'After a double digest that leaves two non-compatible ends on the vector', 'When the insert is very long compared with the vector backbone', 'When the ligation is run with T4 ligase at room temperature'],
      answer: 1,
      optionNotes: {
        0: { en: 'Blunt ends are the case where dephosphorylation matters most, not least. With no overhang to constrain them, the two vector ends recircularise readily and the background is at its worst. Dephosphorylation becomes unnecessary only when the two ends are incompatible and cannot anneal to each other at all.', cn: 'blunt ends 恰恰是最需要 dephosphorylation 的情形，而不是最不需要。没有 overhang 约束，载体两端很容易自己环化，背景最严重。只有当两端互不兼容、根本退火不到一起时，dephosphorylation 才可以省掉。' }
      },
      why_en: 'Two non-compatible ends cannot anneal to each other, so self-ligation is already impossible and dephosphorylating only costs ligation efficiency. Directional cloning solves the same problem better, and fixes the orientation too.',
      why_cn: '两个不兼容的末端无法互相退火，所以自连本来就不可能，再去磷酸化只会白白损失连接效率。定向克隆更好地解决了同一个问题，而且还顺便固定了方向。' },
    { type: 'mcq',
      q_en: 'Why add stuffer bases to a primer tail?',
      q_cn: '为什么要在引物尾部加填充碱基？',
      options: ['To raise the melting temperature of the primer during annealing', 'Restriction enzymes cut poorly right at the end of a linear fragment', 'To stop the two primers annealing to each other as primer dimers', 'To hold the tag and the coding sequence in the same reading frame'],
      answer: 1,
      optionRefs: { 2: '1-5-1' },
      optionNotes: {
        0: { en: 'A 5-prime tail does not pair with the template in the first cycles, so it contributes nothing to the annealing temperature; the Tm of a tailed primer is calculated from the template-complementary part alone. The stuffer is there for the enzyme, not for the thermodynamics.', cn: 'primer 5-prime 端的尾巴在前几轮循环里并不与模板配对，所以对退火温度没有贡献；带尾 primer 的 Tm 只按与模板互补的那一段来算。stuffer 是为酶加的，不是为热力学加的。' },
        3: { en: 'Two different sets of extra bases are being merged. Frame-adjusting bases, the spacer, sit between the recognition site and your coding sequence and stay in the final construct; stuffer bases sit outside the site, on the far side from the gene, and are thrown away with the cut-off end. Their only job is to give the enzyme DNA to grip.', cn: '这里把两类额外碱基混成了一类。调 reading frame 的碱基是 spacer，位于 recognition site 和你的编码序列之间，最后会留在构建体里；stuffer 碱基在 site 的外侧、远离基因的那一头，酶切时随切下来的末端一起丢掉。它们唯一的作用是让酶有 DNA 可抓。' }
      },
      why_en: 'The enzyme needs DNA on both sides of its recognition site to bind properly. NEB publishes a table giving the exact number of extra bases each enzyme requires for efficient cleavage near an end.',
      why_cn: '酶需要在识别位点两侧都有 DNA 才能正常结合。NEB 发布了一张表，给出每种酶在靠近末端时高效切割所需的确切额外碱基数。' },
    { type: 'short',
      q_en: 'Walk through classical restriction cloning, and explain the dephosphorylation decision.',
      q_cn: '讲一遍经典限制酶克隆，并解释去磷酸化这个决定。',
      accept: ['PCR', 'cleave', 'ligate', 'transform', 'self-ligat', 'directional'],
      answer_en: 'Seven steps. Amplify your gene of interest by PCR, adding restriction sites in the primer tails. Cleave the gene with the restriction enzymes. Cleave the plasmid with complementary enzymes. Optionally dephosphorylate the plasmid. Ligate with T4 DNA ligase, either overnight at sixteen degrees or ten minutes at room temperature. Transform bacteria. Then select positive colonies. On dephosphorylation: the problem it solves is that a vector cut with one enzyme, or with two enzymes giving compatible ends, has complementary ends and can simply re-ligate to itself, and that empty self-ligated vector transforms very efficiently and swamps your plate with background. Removing the vector\'s five-prime phosphates makes self-ligation impossible, because ligase needs a five-prime phosphate on at least one side of each nick; the insert keeps its own phosphates so vector plus insert still ligates, leaving two nicks the cell repairs after transformation. But if you performed a directional double digest with two non-compatible enzymes, the vector cannot self-ligate in the first place, and dephosphorylating then only costs you ligation efficiency. Directional cloning is the better answer to the same problem, and it fixes the insert orientation as a bonus.',
      answer_cn: '七个步骤。用 PCR 扩增目的基因，在引物尾部加上限制酶位点。用限制酶切割基因。用互补的酶切割质粒。（可选）对质粒去磷酸化。用 T4 DNA 连接酶连接，16 度过夜或室温 10 分钟。转化细菌。然后筛选阳性菌落。关于去磷酸化：它解决的问题是——用一个酶切开的载体（或用两个产生兼容末端的酶），两端互补，可以自己首尾相接，而这种自连的空载体转化效率极高，会让平板上全是背景菌落。去掉载体的 5′ 磷酸就让自连不可能，因为连接酶需要每个缺口至少一侧有 5′ 磷酸；插入片段保留着自己的磷酸，所以「载体+插入」仍能连上，留下两个缺口由细胞在转化后修复。但如果你做的是用两个不兼容的酶的双酶切定向克隆，载体本来就自连不了，这时去磷酸化只会白白损失连接效率。定向克隆是同一个问题的更好答案，而且还顺带固定了插入方向。'
    }
  ],
  oral: {
    q_en: 'Talk me through classical restriction cloning.',
    q_cn: '讲一遍经典的限制酶克隆。',
    model_en: 'Seven steps. First, amplify your gene of interest by PCR, adding restriction sites in the primer tails. Second, cleave the gene with those restriction enzymes. Third, cleave the plasmid with complementary enzymes. Fourth, optionally dephosphorylate the plasmid. Fifth, ligate. Sixth, transform bacteria. Seventh, select positive colonies. The ligation uses T4 DNA ligase, which catalyses formation of the phosphodiester bond between juxtaposed five-prime phosphate and three-prime hydroxyl termini; it will join both blunt and cohesive ends and repair single-stranded nicks, and you run it either overnight at sixteen degrees or for ten minutes at room temperature. The dephosphorylation step is worth understanding rather than doing by rote. The problem is that a vector cut with a single enzyme — or with two enzymes that happen to give compatible ends — has two complementary ends and can simply re-ligate to itself. Self-ligated empty vector transforms extremely efficiently, so it swamps your plate with background colonies. Removing the vector\'s five-prime phosphates with SAP, CIP or Antarctic phosphatase makes that impossible, because ligase requires a five-prime phosphate on at least one side of each nick. Your insert still carries its phosphates, so vector plus insert ligates fine, leaving two nicks which the cell repairs after transformation. But there is a case where you should not do it: if you performed a directional double digest with two non-compatible enzymes, the vector could not self-ligate anyway, and dephosphorylating just costs you efficiency for nothing. Directional cloning is the better solution to the same problem, and it has the additional benefit of guaranteeing the insert goes in one way round. Finally, two design points for the primer tails: add a few stuffer bases five-prime of the restriction site, because enzymes cut poorly at the very end of a linear fragment, and keep the reading frame in mind whenever you are making a fusion with a tag or signal peptide.',
    checklist: ['Seven steps: PCR with sites, cut insert, cut vector, dephosphorylate, ligate, transform, select', 'T4 ligase: 5-prime phosphate to 3-prime hydroxyl, blunt or cohesive, repairs nicks', 'Conditions: 16 C overnight or RT 10 minutes', 'Dephosphorylation enzymes: SAP, CIP, Antarctic phosphatase', 'The problem: single-cut vector self-ligates and swamps the plate', 'Ligase needs a 5-prime phosphate on at least one side of a nick', 'Insert keeps its phosphates, so vector plus insert still joins', 'Cell repairs the two remaining nicks after transformation', 'Do NOT dephosphorylate after a non-compatible double digest', 'Directional cloning solves it better and fixes orientation', 'Primer tails: stuffer bases, because enzymes cut poorly at fragment ends', 'Primer tails: mind the reading frame for fusions']
  }
},

{
  id: '1-13',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.13',
  enTitle: 'Which colony is correct? Blue-white screening',
  cnTitle: '哪个菌落是对的？蓝白斑筛选',
  slides: 'L2 s.16–17',
  coverage: 'full',
  coverageNote: 'The alpha-complementation mechanism is on the slides in full. The point worth adding is what a white colony does and does not prove, since it is easy to over-read as confirmation of success.',
  summary: {
    en: 'Cloning is not 100 per cent efficient, so you must identify colonies carrying the correct clone, either by colony PCR or by preparing DNA and doing a restriction digest or sequencing. Blue-white screening is the rapid convenient option: it works by alpha-complementation of beta-galactosidase, where the large omega fragment is chromosomal and the small alpha fragment is on the plasmid, so an insert disrupting the alpha fragment gives white recombinant colonies.',
    cn: '克隆的效率不是 100%，所以必须识别出携带正确克隆的菌落，可以用菌落 PCR，也可以抽提 DNA 后做酶切或测序。蓝白斑筛选是快速便捷的选项：它依靠 β-半乳糖苷酶的 α 互补——大的 ω 片段在染色体上，小的 α 片段在质粒上，所以破坏 α 片段的插入片段会给出白色的重组菌落。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.16', src: 'img/figures/L2_s16_1.webp' },
    { slide: 'L2 s.16', src: 'img/figures/L2_s16_2.webp' },
    { slide: 'L2 s.17', src: 'img/figures/L2_s17_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**蓝色 = 空载体，白色 = 有插入。**\n\n' +
            '但白色**只证明 lacZ-α 被破坏了**——方向对不对、序列对不对，它一个字都没说。白斑之后仍然要菌落 PCR 或测序。',
  skipIt: 'α 片段是 59 个残基这个数字不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时，写的是 **RE cloning – standard, Golden gate, selection of positive colonies**——**「怎么筛出阳性菌落」这件事是被点名的**，具体残基数不是。',
  explain: [
    {
      q: 'α 互补是什么意思？一个酶被拆成两半，怎么还能工作？',
      trace: {
        what: '**把一个蛋白拆成两段分别表达，两段在细胞里自己找到对方、拼回一个有活性的酶。**这里拆的是 β-半乳糖苷酶（β-gal），小的那段叫 **α 片段**，大的那段叫 **ω 片段**。',
        from: '为什么能拆？因为 β-gal 要形成**四聚体**才有活性，而负责让四条链聚起来的，是蛋白 **N 端**那一小段。\n\n把 N 端这一小段（α 片段）单独切出去，剩下的 ω 片段**自己聚不起来，没有活性**。但如果细胞里同时存在游离的 α 片段，它能贴回到 ω 上，把缺的那块补齐，**四聚体形成，酶活恢复**。这就叫互补。',
        to: '妙处在于这两段被**放在了两个不同的地方**：**ω 片段在细菌染色体上，α 片段在质粒上**。\n\n于是「质粒上那个 α 片段完不完整」就变成了一个**肉眼可见的开关**——而多克隆位点（MCS）就藏在 α 片段的基因里面。插入片段一进去，α 片段的阅读框被打断，互补失败，酶没了，菌落就是白的。',
        family: '「把蛋白拆成两半、靠重新拼合来报告某件事发生了」是一个很通用的套路，在别处还会以各种形式出现（split-protein 类的报告系统）。这里是它最古老也最好用的一个应用。'
      },
      takeaway: 'β-gal 要四聚才有活性，负责四聚的 N 端被单独放到质粒上当开关。'
    },
    {
      q: '蓝色是怎么来的？为什么还要加 IPTG？',
      a: '**蓝色来自 X-gal。**X-gal 是一个人工合成的底物，长得像 β-gal 的天然底物。β-gal 把它切开之后，释放出的产物在空气里氧化，变成一种**蓝色的不溶物**，沉积在菌落里出不去——所以整个菌落是蓝的。不溶这一点很关键，否则颜色早就扩散到整块板子上了。\n\n' +
         '**IPTG 的角色最容易被搞混，值得单独记。**\n\n' +
         '质粒上的 lacZ-α 是放在 **lac 启动子**下面的，而 lac 启动子平时是被阻遏蛋白关着的。不诱导，就不表达 α 片段；没有 α 片段，**空载体的菌落也是白的**——整个筛选直接失效。\n\n' +
         'IPTG 就是那个诱导剂，把 lac 启动子打开。\n\n' +
         '**所以在这一节里，IPTG 是给报告基因用的，不是给你的目的基因用的。**\n\n' +
         '这一点特别容易跟第 3 讲混：那里 IPTG 诱导的是 **T7 系统去表达你要的蛋白**。**同一个试剂，两个完全不同的角色。**看到 IPTG 先问一句：这里它在诱导谁？',
      takeaway: 'X-gal 被切开后氧化成蓝色不溶物。IPTG 在这里诱导的是报告基因 lacZ-α，不是你的目的基因。'
    },
    {
      q: '为什么强调「质粒和菌株必须配套」？',
      a: '因为这套系统是**故意拆开放在两个地方**的，缺哪一半都不成立。\n\n' +
         '**菌株那一半：**染色体上必须有能被互补的 ω 片段——也就是 lacZΔM15 那一类背景（DH5α、XL1-Blue）。如果你用的菌株**根本没有 lacZ**，或者 lacZ 是完整的，那么：没有 ω 可补 → **不管质粒空不空，全是白的**；或者 β-gal 本来就完整 → **全是蓝的**。两种情况下你都拿到一块毫无信息的板子。\n\n' +
         '**质粒那一半：**MCS 必须**坐落在 lacZ-α 基因里面**（pUC19 那一类）。如果你用的是 pET 这种表达载体，MCS 附近根本没有 lacZ-α，**蓝白斑无从谈起**。\n\n' +
         '所以「配套」不是一句客套话，是**这个方法能不能用**的前提。实际的判断很简单：**先看载体图上 MCS 是不是画在 lacZ-α 里，再看菌株说明里有没有 lacZΔM15。**两个都有才做得成。',
      takeaway: 'ω 在菌株染色体上，α 在质粒上，MCS 必须在 α 里面。缺任何一环，板子上要么全蓝要么全白。'
    },
    {
      q: '白色菌落到底证明了什么？',
      a: '**只证明一件事：lacZ-α 的阅读框被破坏了。**其他什么都没证明。\n\n' +
         '具体来说，一个白色菌落**不能**告诉你：\n\n' +
         '**插入片段的方向对不对**——单酶切的情况下正反各一半，两种都会让菌落变白。\n\n' +
         '**插入片段的序列对不对**——PCR 引入的点突变不会影响颜色。\n\n' +
         '**插进去的到底是不是你的片段**——任何能打断阅读框的东西都行，包括载体自连时多带进去的几个碱基、或者一段乱七八糟的副产物。\n\n' +
         '所以正确的定位是：**蓝白斑是一个预筛，不是验证。**它的价值在于把你要检查的菌落数从几十个砍到几个——省的是后面菌落 PCR 和测序的工作量。\n\n' +
         '**最后拍板的永远是测序。**这跟第 1-7 节那条道理是一路的：**一个便宜的指标能帮你排除大部分错的，但它不能替你确认那个对的。**',
      takeaway: '白色只说明阅读框被打断了。方向、序列、是不是你的片段，全都还没验证。'
    }
  ],
  points: [
    { term: 'The problem', en: 'Cloning is not 100 per cent efficient, so you need to identify colonies carrying the correct clone.', cn: '克隆效率不是 100%，所以你需要识别出携带正确克隆的菌落。' },
    { term: 'Two routes', en: 'Direct assay of bacterial colonies by colony PCR, or DNA preparation followed by restriction digest or sequencing.', cn: '直接用菌落 PCR 检测细菌菌落，或者抽提 DNA 后做酶切或测序。' },
    { term: 'The basis', en: 'Alpha-complementation of beta-galactosidase, the product of lacZ. Tetramerisation of beta-gal is required for activity, mediated by the N-terminal part of the protein.', cn: 'lacZ 产物 β-半乳糖苷酶的 α 互补。β-半乳糖苷酶必须四聚化才有活性，而这由蛋白的 N 端部分介导。' },
    { term: 'The split', en: 'The large omega fragment is on the chromosome; the small alpha fragment, 59 residues, is on the plasmid.', cn: '大的 ω 片段在染色体上；小的 α 片段（59 个残基）在质粒上。' },
    { term: 'The plates', en: 'Transformed cells are spread on X-gal plus IPTG agar.', cn: '转化后的细胞铺在含 X-gal 和 IPTG 的琼脂平板上。' },
    { term: 'Blue means empty', en: 'An intact alpha fragment means empty vector, so alpha and omega complement, beta-gal is active, and colonies are blue.', cn: 'α 片段完好意味着空载体，于是 α 和 ω 互补，β-半乳糖苷酶有活性，菌落呈蓝色。' },
    { term: 'White means recombinant', en: 'An insert disrupts the alpha fragment, so there is no complementation and colonies stay white.', cn: '插入片段破坏了 α 片段，于是没有互补，菌落保持白色。' },
    { term: 'The requirement', en: 'The correct combination of plasmid, for example pUC19, and cells with mutated LacZ such as DH5-alpha or XL1-Blue, is essential.', cn: '必须使用正确的质粒（例如 pUC19）与 LacZ 突变细胞（如 DH5α 或 XL1-Blue）的组合。' }
  ],
  beyondPoints: [
    { term: 'Say it in one breath', en: 'The multiple cloning site sits inside the lacZ-alpha gene. Empty vector gives an intact alpha fragment, which complements the chromosomal omega fragment, giving functional beta-galactosidase, which cleaves X-gal into a blue insoluble product. An insert in the MCS disrupts the reading frame of lacZ-alpha, so there is no complementation, no beta-gal, and the colony stays white. IPTG is there to induce the lac promoter driving lacZ-alpha.', cn: '多克隆位点位于 lacZα 基因内部。空载体的 α 片段完整，能与染色体上的 ω 片段互补，产生有功能的 β-半乳糖苷酶，把 X-gal 切成蓝色的不溶产物。插入到 MCS 的片段破坏了 lacZα 的阅读框，于是没有互补、没有 β-半乳糖苷酶，菌落保持白色。IPTG 的作用是诱导驱动 lacZα 的 lac 启动子。' },
    { term: 'What white does not prove', en: 'A white colony only tells you the alpha fragment was disrupted. It says nothing about whether the insert is in the right orientation or has the right sequence, and both still have to be confirmed by colony PCR or sequencing.', cn: '白斑不代表一定成功——白色只说明 α 片段被破坏了，插入片段的方向、序列是否正确仍然必须靠菌落 PCR 或测序来确认。' }
  ],
  terms: [
    { en: 'Alpha-complementation', cn: 'α 互补', def_en: 'Reconstituting active beta-galactosidase from a chromosomal omega fragment and a plasmid-borne alpha fragment — the basis of blue-white screening.', def_cn: '由染色体上的 ω 片段和质粒上的 α 片段重构出有活性的 β-半乳糖苷酶——蓝白斑筛选的原理。' },
    { en: 'X-gal', cn: 'X-gal', def_en: 'A chromogenic beta-galactosidase substrate cleaved into a blue insoluble product, which is what makes non-recombinant colonies blue.', def_cn: '一种显色的 β-半乳糖苷酶底物，被切割后生成蓝色不溶产物，正是它让非重组菌落显蓝色。' },
    { en: 'Colony PCR', cn: '菌落 PCR', def_en: 'PCR run directly on bacterial colonies to check for the insert, without preparing plasmid DNA first.', def_cn: '直接以细菌菌落为模板做 PCR 来检查插入片段，无需先抽提质粒 DNA。' },
    { en: 'IPTG in this context', cn: '此处的 IPTG', def_en: 'Present on the plate to induce the lac promoter driving lacZ-alpha, without which no beta-gal would be made and every colony would look white.', def_cn: '加在平板中用于诱导驱动 lacZα 的 lac 启动子；没有它就不会合成 β-半乳糖苷酶，所有菌落都会是白色。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In blue-white screening, what does a white colony indicate?',
      q_cn: '蓝白斑筛选中，白色菌落说明什么？',
      options: ['The vector is empty, with nothing cloned into the polylinker', 'The lacZ alpha fragment is disrupted, consistent with an insert', 'The cell has lost the plasmid entirely during overnight growth', 'Beta-galactosidase is being overexpressed from the plasmid'],
      answer: 1,
      optionNotes: {
        0: { en: 'The two colours are the wrong way round. The colour reads out beta-gal activity, so a blue colony is the one where lacZ-alpha is intact and still complements the chromosomal omega fragment, which is the empty vector. Loss of colour is what reports that something has landed in the alpha fragment.', cn: '两种颜色反了。颜色读的是 beta-gal 活性，所以蓝色菌落才是 lacZ-alpha 完整、还能和染色体上的 omega fragment 互补的那一类，也就是空载体。颜色消失才说明 alpha fragment 里插进了东西。' }
      },
      why_en: 'An insert in the MCS disrupts the lacZ-alpha reading frame, so there is no complementation with the chromosomal omega fragment and no active beta-gal. Blue means the alpha fragment is intact, that is, empty vector.',
      why_cn: '插入 MCS 的片段破坏了 lacZα 的阅读框，所以无法与染色体上的 ω 片段互补，也就没有活性的 β-半乳糖苷酶。蓝色意味着 α 片段完好，也就是空载体。' },
    { type: 'mcq',
      q_en: 'Why is IPTG on the plate?',
      q_cn: '为什么平板里要加 IPTG？',
      options: ['To select for transformants', 'To induce the lac promoter driving lacZ-alpha', 'To act as the chromogenic substrate that beta-gal cleaves to blue', 'To prevent satellite colonies'],
      answer: 1,
      optionRefs: { 0: '1-10-1', 3: '1-10-1' },
      optionNotes: {
        2: { en: 'IPTG and X-gal have been swapped. X-gal is the colourless substrate that beta-gal cleaves into the blue product; IPTG is a gratuitous inducer that is not hydrolysed at all and only lifts LacI off the operator so that lacZ-alpha gets transcribed in the first place.', cn: 'IPTG 和 X-gal 换位了。X-gal 才是无色底物，被 beta-gal 切开后生成蓝色产物；IPTG 是 gratuitous inducer，本身完全不被水解，它只把 LacI 从 operator 上拉下来，让 lacZ-alpha 有机会被转录。' }
      },
      why_en: 'X-gal is the chromogenic substrate; IPTG is the inducer. Without it lacZ-alpha would not be expressed, no beta-gal would form even in empty-vector cells, and every colony would appear white.',
      why_cn: 'X-gal 是显色底物，IPTG 是诱导剂。没有它 lacZα 不会表达，即使是空载体的细胞也不会形成 β-半乳糖苷酶，所有菌落都会显白色。' },
    { type: 'mcq',
      q_en: 'What does a white colony NOT prove?',
      q_cn: '白色菌落**不能**证明什么？',
      options: ['That the lacZ alpha fragment has stopped complementing the chromosomal omega fragment', 'That the insert went in the right way round and has the right sequence', 'That the cell took up DNA at all, which the antibiotic selection has already shown', 'That the colony has no functional beta-galactosidase activity'],
      answer: 1,
      why_en: 'White only reports disruption of the alpha fragment. Orientation and sequence must still be confirmed by colony PCR or sequencing — over-reading white as success is a common mistake.',
      why_cn: '白色只反映 α 片段被破坏了。方向和序列仍然必须靠菌落 PCR 或测序确认——把白色直接当成成功是常见的错误。' },
    { type: 'short',
      q_en: 'Explain blue-white screening, including why IPTG is needed.',
      q_cn: '解释蓝白斑筛选，包括为什么需要 IPTG。',
      accept: ['alpha', 'omega', 'complement', 'X-gal', 'IPTG', 'MCS'],
      answer_en: 'The multiple cloning site sits inside the lacZ-alpha gene on the plasmid. Beta-galactosidase requires tetramerisation for activity, mediated by its N-terminal region, and the enzyme is split between two sources: the large omega fragment is encoded on the bacterial chromosome, and the small alpha fragment of fifty-nine residues is on the plasmid. With an empty vector the alpha fragment is intact, so it complements the chromosomal omega fragment, functional beta-galactosidase forms, and it cleaves X-gal into a blue insoluble product — a blue colony. An insert in the MCS disrupts the reading frame of lacZ-alpha, so there is no complementation, no beta-gal, and the colony stays white. IPTG is on the plate because the lac promoter drives lacZ-alpha and needs inducing; without it no beta-gal would be made at all and every colony would look white regardless. You also need the right combination of plasmid, such as pUC19, and cells with a mutated LacZ, such as DH5-alpha or XL1-Blue. And one caution: white only proves the alpha fragment was disrupted. Whether the insert is in the correct orientation and has the correct sequence still has to be confirmed by colony PCR or sequencing.',
      answer_cn: '多克隆位点位于质粒上 lacZα 基因的内部。β-半乳糖苷酶必须四聚化才有活性，这由其 N 端区域介导，而这个酶被拆成两部分：大的 ω 片段由细菌染色体编码，小的 α 片段（59 个残基）在质粒上。空载体时 α 片段完整，能与染色体的 ω 片段互补，形成有功能的 β-半乳糖苷酶，把 X-gal 切成蓝色不溶产物——菌落呈蓝色。插入 MCS 的片段破坏了 lacZα 的阅读框，于是没有互补、没有酶，菌落保持白色。平板里加 IPTG 是因为驱动 lacZα 的是 lac 启动子、需要诱导；没有它就完全不会合成 β-半乳糖苷酶，所有菌落无论如何都会显白色。此外还需要正确的组合：质粒（如 pUC19）配 LacZ 突变的细胞（如 DH5α 或 XL1-Blue）。还有一点要注意：白色只能证明 α 片段被破坏了。插入片段的方向和序列是否正确，仍然必须靠菌落 PCR 或测序来确认。'
    }
  ],
  oral: {
    q_en: 'How do you tell which colonies carry your construct?',
    q_cn: '怎么判断哪些菌落带有你的构建体？',
    model_en: 'The premise is that cloning is not a hundred per cent efficient, so you always have to identify which colonies carry the correct clone. There are two general routes: direct assay of the bacterial colonies by colony PCR, or preparing DNA and doing a restriction digest or sequencing. Blue-white screening is the rapid, convenient front-line method, and it is based on alpha-complementation of beta-galactosidase, the product of lacZ. Beta-galactosidase needs to tetramerise to be active, and that is mediated by the N-terminal part of the protein — which is what makes splitting it possible. The large omega fragment is encoded on the bacterial chromosome, and the small alpha fragment, fifty-nine residues, is carried on the plasmid, with the multiple cloning site sitting inside it. You plate transformed cells on agar containing X-gal and IPTG. With an empty vector the alpha fragment is intact, so it complements the chromosomal omega fragment, active beta-galactosidase forms, and that cleaves X-gal into a blue insoluble product — you get blue colonies. But an insert in the MCS disrupts the reading frame of lacZ-alpha, so no complementation happens, no beta-gal is made, and the colony stays white. White colonies are therefore your recombinants. IPTG is there because the lac promoter drives lacZ-alpha and has to be induced; without it nothing would be expressed and every colony would be white regardless of what it carried. It is also essential to have the correct combination of plasmid and host — pUC19 with cells carrying a mutated LacZ such as DH5-alpha or XL1-Blue. The caution I would add is that white does not mean success. It only tells you the alpha fragment was disrupted; the orientation of your insert and its sequence still have to be confirmed by colony PCR or sequencing.',
    checklist: ['Cloning is not 100% efficient, so colonies must be checked', 'Two routes: colony PCR, or DNA prep plus digest or sequencing', 'Basis: alpha-complementation of beta-galactosidase', 'Beta-gal needs tetramerisation, mediated by the N-terminal region', 'Omega fragment on the chromosome, alpha fragment (59 aa) on the plasmid', 'The MCS sits inside lacZ-alpha', 'Plate on X-gal plus IPTG', 'Empty vector: intact alpha, complementation, active beta-gal, blue colony', 'Insert disrupts the alpha reading frame: no complementation, white colony', 'IPTG induces the lac promoter driving lacZ-alpha', 'Needs the right plasmid and LacZ-mutant host (pUC19, DH5-alpha, XL1-Blue)', 'White proves disruption only — orientation and sequence still need confirming']
  }
},

{
  id: '1-14',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.14',
  enTitle: 'Golden Gate cloning',
  cnTitle: 'Golden Gate 克隆',
  slides: 'L2 s.20–21',
  coverage: 'full',
  coverageNote: 'Slides 20–21 in full. The one-tube thermodynamic ratchet, what domestication actually requires, and overhang-set fidelity are added in beyondPoints — the slides state the facts but not the reasoning.',
  summary: {
    en: 'Golden Gate exploits type IIS restriction enzymes, which cleave outside their own recognition sequence and therefore leave a four-base overhang whose sequence you choose. With 256 possible overhangs, many fragments can be assembled directionally in a single tube together with T4 ligase, scarlessly and cheaply. The price of admission is domestication — removing every internal site for the enzyme from each part beforehand.',
    cn: 'Golden Gate 利用 type IIS restriction enzyme：这类酶在自己的识别序列之外切割，因此留下的 4 碱基 overhang 序列由你自己指定。4 个碱基共有 256 种组合，所以多个片段可以和 T4 ligase 一起在同一个管子里定向组装，无疤痕且便宜。代价是 domestication——事先把每个部件内部所有该酶的位点都去掉。'
  },
  figures: [
    { src: 'img/golden-gate-plasmid-legos.webp',
      alt: 'Diagram of a yeast Golden Gate toolkit showing a plasmid built from standardised interchangeable parts: insert-up, marker, promoter, gene, terminator, ori',
      caption_en: 'A real Golden Gate parts kit, here one built for the yeast Yarrowia lipolytica. The bricks are marker, promoter, gene and terminator parts, each flanked by a standard four-base overhang — the row of letter codes along the bottom. Any promoter part can be swapped for any other without redesigning the rest of the plasmid, which is what "standardised bricks" concretely means. Source: PESB Lecture 2, "Plasmid LEGOs".',
      caption_cn: '一套真实的 Golden Gate 部件工具箱，这里是为酵母 Yarrowia lipolytica 建立的。所谓「积木」就是 marker、promoter、gene、terminator 这些部件，每个两侧都带有标准化的 4 碱基 overhang——也就是图下方那一排字母代号。任何一个 promoter 部件都可以换成另一个，而不必重新设计质粒的其余部分，这就是「标准化砖块」的具体含义。来源：PESB 第 2 讲，"Plasmid LEGOs"。' }
  ],
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.20', src: 'img/figures/L2_s20_1.webp' },
    { slide: 'L2 s.20', src: 'img/figures/L2_s20_2.webp' },
    { slide: 'L2 s.21', src: 'img/figures/L2_s21_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'Golden Gate 的一切都来自一件事：**Type IIS 酶切在识别位点外面**。\n\n' +
            '于是位点不会进入产物（无疤痕、可以边切边连），而 4 碱基末端的序列**由你自己定**（可以一次定向拼多个片段）。代价是 **domestication**。',
  skipIt: 'MoClo / GoldenBraid 2.0 / Mobius / EMMA 这几个标准的名字，以及 NEB 那篇保真度矩阵论文的出处，不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时，只写了 **Golden gate** 这两个词——但它确实被点名了，所以机制要会讲。',
  explain: [
    {
      q: '一管里同时放限制酶和连接酶，不会切了连、连了切，永远循环吗？',
      a: '会循环，**但这个循环是不对称的**——而这正是整个方法的精髓。\n\n' +
         '看两种产物各自的下场：\n\n' +
         '**接对了的接口**：因为酶切在识别位点**外面**，那段含位点的小片段在切开时就被丢掉了。所以正确拼好的接口上**根本没有这个酶的识别位点**。酶再也认不出它——**它一旦形成，就永久退出循环。**\n\n' +
         '**接错了的、或者原样长回去的载体**：识别位点被**重新拼了回来**。酶认得，一刀切开，材料回到池子里重来。\n\n' +
         '所以这不是一个来回震荡的平衡，而是一个**单向棘轮（ratchet）**：错的会被反复回收再试，对的只进不出。\n\n' +
         '反应在约 **37 °C（切）和 16 °C（连）之间循环 20–40 次**，每一轮都把一部分材料永久锁进正确产物里。跑到最后，即使是五到十个片段的组装，正确率也常常在 **90% 以上**。\n\n' +
         '**记住这个不对称在哪儿**：它完全来自「切在位点外面」。IIP 型酶做不到——它切在位点里面，接回去位点就还在，正确产物照样会被再切开，永远没法富集。',
      takeaway: '对的接口不含位点，退出循环；错的重建位点，被回收重来。单向棘轮，越跑越对。'
    },
    {
      q: 'domestication（驯化）到底在干什么？为什么叫「驯化」？',
      trace: {
        what: '一次性的**序列清洗**：把一个部件（载体或插入片段）**内部**所有 BsaI / BbsI / BsmBI 位点全部去掉。',
        from: '为什么非做不可：反应管里那个 IIS 酶**不认「哪个位点是我要用的」**，它见一个切一个。你的基因中间要是碰巧藏着一个 BsaI 位点，反应时它会被**拦腰切断**，拼出来的是一堆截短的东西——而且你会以为是组装失败。',
        to: '去掉的办法是**同义突变**：换一个密码子、氨基酸不变。这一步之所以做得到，靠的正是第 1-4-3 节那条——**遗传密码是简并的**。（位点如果落在非编码区，就更自由，随便改一两个碱基即可。）\n\n**关键在于这是一次性成本。**驯化过一次，这个部件从此永远可用、可以被反复重组进任何构建体——**这就是「零件标准」的全部意义**，也是为什么 Golden Gate 主要用在合成生物学里：同一批零件要被拼上几百次。',
        family: 'MoClo、GoldenBraid 2.0、Mobius Assembly、EMMA 这些「标准」，本质上就是**一批已经驯化好的载体 + 一套约定好的 overhang 序列**。所谓「质粒乐高」，乐高的意思就是接口统一。'
      },
      takeaway: '驯化 = 用同义突变把部件内部的酶位点抹掉。一次性成本，换来永久可复用。'
    },
    {
      q: '4 碱基有 256 种组合——那真的能一次拼 256 个片段吗？',
      a: '**不能。256 是理论上限，实际能同时用的远少于这个数。**两个原因：\n\n' +
         '**第一，回文的末端会自己跟自己连。**比如一个自身互补的 4 碱基突出端，两个相同的片段可以头对头接起来——你得到的是二聚体，不是你要的构建体。这类末端必须直接排除。\n\n' +
         '**第二，只差一个碱基的两个末端会错配。**4 个碱基里错配 1 个，剩下 3 个照样配得上，连接酶在一定频率下就会把它焊住。频率不高，但当你一次拼十个片段、有二十个接口时，**任何一个接错，整个分子就废了**。\n\n' +
         '所以现在的做法是查表：NEB 实测过**全部 4 碱基末端两两之间的连接保真度矩阵**，设计工具按这个矩阵挑一组「互相之间几乎不串味」的末端。\n\n' +
         '结论是：**能一次拼几个，不取决于 256，取决于你挑的是哪一组。**选得好的话，二十个以上片段一次拼成是可以做到的。\n\n' +
         '实践上的规矩只有一条：**接口序列用工具挑，别自己拍脑袋定。**',
      takeaway: '256 是上限不是可用数。回文的会自连，差一个碱基的会错配，所以要用保真度矩阵挑一组。'
    },
    {
      q: '一句话说清 Golden Gate 和经典酶切克隆的差别？',
      a: '**四条差别，而且四条全部来自同一个原因——切在位点外面。**\n\n' +
         '**疤痕**：经典方法的酶切位点留在产物里，成了永久的疤（那 6 个碱基会被翻译成 2 个残基）。Golden Gate 的位点被丢掉了，**无疤痕**。\n\n' +
         '**末端序列**：经典方法的末端就是位点序列的一部分，**是死的**（用 EcoRI 就只能是 AATT）。Golden Gate 的末端在位点外面，**由你写**。\n\n' +
         '**片段数**：末端序列固定，就意味着不同接口互相不可区分，所以经典方法基本一次只能连一个片段。末端可自选，就可以让每个接口只认自己的邻居——**一次拼十个也行**。\n\n' +
         '**步骤**：经典方法必须先切、纯化、再连（因为连上了还会被切）。Golden Gate **切和连同管同时进行**，靠棘轮跑到正确产物。\n\n' +
         '所以复习时不要背这四条，**背那一个原因**：切在位点外面。四条都能自己推出来。',
      takeaway: '无疤、末端自选、一次多片段、单管反应——四条全部是「切在位点外」的推论。'
    }
  ],
  points: [
    { term: 'Where it is used', en: 'Mostly in synthetic biology projects, where the same standardised parts are reassembled many times.', cn: '主要用于 synthetic biology 项目，因为同一批标准化部件会被反复重新组装。' },
    { term: 'The enzymes', en: 'Type IIS restriction enzymes — BsaI, BbsI, BsmBI — which cleave outside their recognition sequence.', cn: 'Type IIS restriction enzyme——BsaI、BbsI、BsmBI——它们在自己的识别序列之外切割。' },
    { term: 'The consequence', en: 'Cleaving outside the site creates four-base flanking overhangs whose sequence is not dictated by the enzyme.', cn: '在位点之外切割会产生 4 碱基的侧翼 overhang，其序列不由酶决定。' },
    { term: 'The arithmetic', en: 'Four bases give 256 unique overhang sequences, which is what makes directional assembly possible.', cn: '4 个碱基给出 256 种独特的 overhang 序列，这正是定向组装成为可能的原因。' },
    { term: 'One tube', en: 'Plasmid, inserts — up to ten — and T4 ligase all go into a single reaction together.', cn: '质粒、插入片段（最多 10 个）和 T4 ligase 全部放进同一个反应里。' },
    { term: 'The selling points', en: 'Scarless, cheap and quick.', cn: '无疤痕、便宜、快。' },
    { term: 'The cost', en: 'Domestication of both vectors and inserts is required before they can be used.', cn: '载体和插入片段在使用前都必须先经过 domestication。' },
    { term: 'The standards', en: 'MoClo, GoldenBraid 2.0, Mobius Assembly and EMMA — collections of domesticated vectors with standardised overlap sequences, the "plasmid LEGOs" of standardised bricks plus a domesticated vector.', cn: 'MoClo、GoldenBraid 2.0、Mobius Assembly、EMMA——这些是带有标准化重叠序列的 domesticated 载体集合，也就是「plasmid LEGOs」：标准化砖块加上一个 domesticated 载体。' }
  ],
  beyondPoints: [
    { term: 'Why one tube works — the thermodynamic ratchet', en: 'Digestion and ligation happen simultaneously, cycling between about 37 degrees to cut and 16 degrees to ligate. A correctly assembled junction destroys the recognition site, because the enzyme cuts outside it and that outside piece is discarded, so the product cannot be re-cut and is trapped. An incorrect junction, or a re-ligated original vector, regenerates the recognition site, gets cut again and returns to the pool. Over twenty to forty cycles the reaction is driven irreversibly toward the fully correct assembly, routinely above ninety per cent even for five to ten fragments.', cn: '一句话：接对了就再也切不开，接错了就会被切回去重来。酶切和连接在同一个管子里反复循环（37 度切、16 度连）。正确的接头因为识别位点已经被切走而变成死胡同被锁死，错误产物和自连载体则重新生成识别位点，被切开放回反应池。循环几十次之后产物只能往正确方向累积——这是一个热力学棘轮，靠的不是反应选择性高，而是错误可逆、正确不可逆。' },
    { term: 'What domestication actually requires', en: 'Domestication means removing every internal BsaI, BbsI or BsmBI site from your part before use. Any internal site would be cut during the reaction, fragmenting the part and producing truncated assemblies. You remove them with silent mutations — change the codon, keep the amino acid — which is only possible because the genetic code is degenerate. It is a one-time cost per part; afterwards the part is reusable forever, which is the entire point of a parts standard.', cn: 'Domestication 的意思是：在使用之前把部件内部所有的 BsaI、BbsI、BsmBI 位点都去掉。任何一个内部位点都会在反应中被切开，把部件打成碎片、产生截短的组装产物。去除的办法是 silent mutation——换密码子、保留氨基酸——这之所以可行，是因为遗传密码有简并性。这是每个部件一次性的成本；之后该部件就可以永久复用，而这正是建立部件标准的全部意义。' },
    { term: 'Overhang choice is not arbitrary', en: 'The figure of 256 is a theoretical maximum; you cannot use all of them together. Palindromic overhangs self-ligate, and overhangs differing by a single base mis-ligate at measurable rates. Potapov and colleagues at NEB (2018, ACS Synthetic Biology 7:2665) measured the full ligation-fidelity matrix for all four-base overhangs, and modern design tools such as the NEBridge Golden Gate Assembly Tool use that matrix to pick high-fidelity overhang sets. This is why junction sequences should be chosen with a tool rather than by eye, and it is the detail to have ready if the examiner asks how many fragments can really be assembled at once — above twenty with a well-chosen set.', cn: '256 是理论上限，实际上不可能同时全用。回文式的 overhang 会自连，只差一个碱基的 overhang 会以可测量的比例错连。NEB 的 Potapov 等人（2018, ACS Synthetic Biology 7:2665）测定了所有 4 碱基 overhang 的完整连接保真度矩阵，现在的设计工具（如 NEBridge Golden Gate Assembly Tool）就是用这个矩阵来挑选高保真的 overhang 组合。所以接头序列应该用工具选而不是用眼睛看。如果考官追问「一次到底能组装多少个片段」，答案是：用挑选过的 overhang 组合可以超过 20 个。' }
  ],
  terms: [
    { en: 'Type IIS restriction enzyme', cn: 'Type IIS 限制酶', def_en: 'A restriction enzyme that cleaves outside its recognition sequence, at a fixed distance from it — BsaI, BbsI, BsmBI.', def_cn: '在自身识别序列之外、固定距离处切割的限制酶——BsaI、BbsI、BsmBI。' },
    { en: 'Domestication', cn: '驯化（去除内部位点）', def_en: 'Removing all internal type IIS sites from a part by silent mutation, so the part survives the assembly reaction intact.', def_cn: '用 silent mutation 把部件内部所有 type IIS 位点去掉，使该部件能完整地熬过组装反应。' },
    { en: 'Four-base overhang', cn: '4 碱基黏性末端', def_en: 'The user-defined single-stranded end left by a type IIS enzyme; 256 possible sequences make assembly directional and specific.', def_cn: 'Type IIS 酶留下的、由使用者自行指定的单链末端；256 种可能序列使组装既定向又特异。' },
    { en: 'MoClo / GoldenBraid 2.0', cn: 'MoClo / GoldenBraid 2.0', def_en: 'Golden Gate parts standards — libraries of domesticated vectors sharing one agreed set of overlap sequences.', def_cn: 'Golden Gate 的部件标准——共用同一套约定重叠序列的 domesticated 载体库。' },
    { en: 'Scarless cloning', cn: '无疤痕克隆', def_en: 'Joining fragments without leaving extra bases at the junction, so no unintended residues are added to the encoded protein.', def_cn: '连接片段时不在接头处留下多余碱基，因此不会给编码的蛋白加上计划外的残基。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which property of type IIS enzymes is what makes Golden Gate possible?',
      q_cn: 'Type IIS 酶的哪一个性质使 Golden Gate 成为可能？',
      options: ['They recognise a palindromic site, as every type II enzyme does', 'They cleave outside the recognition site, so you choose the overhang', 'They leave blunt ends, so fragments ligate in any orientation', 'They cut only DNA that has been methylated at the recognition site'],
      answer: 1,
      optionRefs: { 0: '1-11', 3: '1-11' },
      optionNotes: {
        2: { en: 'Ligating in any orientation is the opposite of what Golden Gate needs. The assembly enzymes, BsaI, BbsI and BsmBI, leave four-base single-stranded overhangs, and it is the sequence of those overhangs that makes each junction unique and directional. Blunt ends would make every fragment interchangeable.', cn: '能以任意方向连接，恰恰是 Golden Gate 最不想要的。用于组装的 BsaI、BbsI、BsmBI 留下的是四碱基单链 overhang，正是这些 overhang 的序列让每个接口既唯一又有方向。如果是平末端，所有片段就都可以互换了。' }
      },
      why_en: 'Because the cut falls outside the recognition site, the sequence of the resulting four-base overhang is dictated by your design rather than by the enzyme. That is what gives 256 distinguishable junctions and hence directional, multi-fragment assembly — and it is also why the site disappears from the correct product.',
      why_cn: '因为切点落在识别位点之外，产生的 4 碱基 overhang 序列由你的设计决定，而不是由酶决定。这就带来了 256 种可区分的接头，从而实现定向的多片段组装——同时也正是识别位点在正确产物中消失的原因。' },
    { type: 'mcq',
      q_en: 'Why can digestion and ligation be run in the same tube without the enzyme destroying the product?',
      q_cn: '为什么酶切和连接可以在同一个管子里进行，而酶不会把产物切掉？',
      options: ['T4 ligase inhibits the restriction enzyme once ligation starts', 'A correct junction destroys the recognition site, while an incorrect one regenerates it', 'The restriction enzyme is heat-inactivated after the first cycle', 'The inserts are added one at a time in a fixed order during the cycling'],
      answer: 1,
      optionRefs: { 2: '1-18' },
      why_en: 'The recognition site sits on the piece that is cut away, so a correctly assembled junction cannot be re-cut and is trapped as a dead end. An incorrect junction or a re-ligated empty vector rebuilds the site, is cut again and returns to the pool. Over twenty to forty temperature cycles this ratchets the reaction irreversibly toward the correct assembly.',
      why_cn: '识别位点位于被切掉的那一小段上，所以正确组装的接头无法被再次切开，成为死胡同被锁死。错误接头或自连的空载体则重新生成了识别位点，会被再切开放回反应池。经过二三十次温度循环，反应就被棘轮式地不可逆地推向正确产物。' },
    { type: 'mcq',
      q_en: 'How many unique overhang sequences does a four-base overhang give in theory?',
      q_cn: '理论上 4 碱基 overhang 能给出多少种独特序列？',
      options: ['16', '64', '256', '1024'],
      answer: 2,
      why_en: 'Four positions with four possible bases each gives 4 to the fourth power, 256. In practice you cannot use all of them together — palindromic overhangs self-ligate and near-identical ones mis-ligate — so high-fidelity subsets are chosen with a design tool.',
      why_cn: '4 个位置、每个位置 4 种碱基，即 4 的 4 次方等于 256。实际上不能同时全用——回文式的 overhang 会自连，几乎相同的会错连——所以要用设计工具挑出高保真的子集。' },
    { type: 'short',
      q_en: 'What is domestication in Golden Gate cloning, and why is it unavoidable?',
      q_cn: 'Golden Gate 克隆里的 domestication 是什么，为什么无法避免？',
      accept: ['internal', 'BsaI', 'silent', 'codon', 'site'],
      answer_en: 'Domestication means removing every internal recognition site for the type IIS enzyme you are using — BsaI, BbsI or BsmBI — from the part before you put it into the assembly. It is unavoidable because digestion and ligation run simultaneously in the same tube: any site inside your part would be cut during the reaction, fragmenting the part and giving truncated assemblies rather than the construct you designed. The sites are removed by silent mutation, changing the codon while keeping the amino acid, which is only possible because the genetic code is degenerate. It is a one-time cost per part. Once domesticated, the part can be reused in every future assembly, and that reusability is the whole point of a parts standard such as MoClo or GoldenBraid.',
      answer_cn: 'Domestication 指的是：在把一个部件放进组装反应之前，先把它内部所有你要用的 type IIS 酶（BsaI、BbsI 或 BsmBI）的识别位点都去掉。之所以无法避免，是因为酶切和连接在同一个管子里同时进行——部件内部只要还有位点，就会在反应过程中被切开，把部件打成碎片，得到的是截短的组装产物而不是你设计的构建体。去除的方法是 silent mutation，即改变密码子但保留氨基酸，这之所以可行是因为遗传密码具有简并性。这是每个部件一次性的成本。一旦完成 domestication，该部件在以后的每一次组装中都可以复用，而这种可复用性正是 MoClo、GoldenBraid 这类部件标准的全部意义所在。'
    }
  ],
  oral: {
    q_en: 'Explain Golden Gate cloning and why the whole reaction can run in one tube.',
    q_cn: '解释 Golden Gate 克隆，以及为什么整个反应可以在一个管子里完成。',
    model_en: 'Golden Gate is used mostly in synthetic biology projects, and it exploits type IIS restriction enzymes — BsaI, BbsI and BsmBI. The key property of these enzymes is that they cleave outside their own recognition sequence. That has two consequences. First, the four-base overhang that is left behind has a sequence you choose, not one dictated by the enzyme, and four bases give 256 unique possibilities, which is what makes assembly directional and specific. Second, because the enzyme cuts outside the site, the site itself sits on the little piece that is discarded. So the plasmid, up to ten inserts and T4 ligase all go into a single tube together, and digestion and ligation run simultaneously, cycling between about 37 degrees to cut and 16 degrees to ligate. A correctly assembled junction has destroyed the recognition site, so it cannot be re-cut and is trapped as a dead end. An incorrect junction, or a vector that has simply re-ligated to itself, regenerates the recognition site, is cut again and goes back into the pool. Over twenty to forty cycles that drives the reaction irreversibly toward the fully correct product — it is a thermodynamic ratchet, and it works not because the chemistry is selective but because errors are reversible and the correct product is not. Efficiencies above ninety per cent are routine even for five to ten fragments. The method is scarless, cheap and quick, but there is a price of admission: domestication. Every internal site for that enzyme has to be removed from both vector and inserts first, using silent mutations, because otherwise those internal sites would be cut during the reaction and fragment your parts. That is a one-time cost, and once paid the part is reusable forever, which is why there are established parts standards — MoClo, GoldenBraid 2.0, Mobius Assembly, EMMA — collections of domesticated vectors with agreed overlap sequences, the plasmid LEGOs. One refinement worth adding: 256 is a theoretical maximum. Palindromic overhangs self-ligate and overhangs differing by one base mis-ligate, so in practice you choose a high-fidelity set with a design tool, and with a well-chosen set you can assemble more than twenty fragments at once.',
    checklist: ['Used mostly in synthetic biology', 'Type IIS enzymes: BsaI, BbsI, BsmBI', 'Key property: they cleave OUTSIDE the recognition sequence', 'So the four-base overhang is user-defined — 256 possibilities, directional', 'Single tube: plasmid + up to 10 inserts + T4 ligase', 'Cut and ligate simultaneously, cycling 37 and 16 degrees', 'Correct junction destroys the site — cannot be re-cut, trapped', 'Wrong junction or self-ligated vector regenerates the site — cut again', 'Thermodynamic ratchet over 20–40 cycles, above 90 per cent', 'Scarless, cheap, quick', 'Price of admission: domestication by silent mutation', 'Standards: MoClo, GoldenBraid 2.0, Mobius Assembly, EMMA', 'Caveat: pick a high-fidelity overhang set with a tool, not by eye']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Your part has one internal BsaI site. What is the consequence if you skip domestication?',
      q_cn: '你的部件内部有一个 BsaI 位点。如果跳过 domestication，会有什么后果？',
      options: ['Nothing — the site is only cut when T4 ligase is absent, and here ligation outcompetes it', 'The part is cut during the reaction and you get truncated assemblies', 'The overhangs become palindromic', 'The reaction simply runs more slowly but still gives the correct assembly'],
      answer: 1,
      why_en: 'Digestion and ligation run simultaneously for twenty to forty cycles, so any internal site is exposed to the enzyme the whole time. The part is fragmented and the assemblies you recover are truncated. That is why domestication is a precondition, not an optimisation.',
      why_cn: '酶切和连接同时进行二三十个循环，所以任何内部位点全程都暴露在酶面前。部件会被打成碎片，你拿到的组装产物是截短的。这正是 domestication 属于前提条件而不是优化步骤的原因。' },
    { type: 'mcq',
      q_en: 'Why does Golden Gate suit synthetic biology in particular, rather than one-off cloning?',
      q_cn: '为什么 Golden Gate 特别适合合成生物学，而不是一次性的克隆？',
      options: ['It is the only assembly method that leaves no scar in the product', 'Domestication is a one-time cost per part that pays back only on reuse', 'It is the fastest assembly method from digest to transformation', 'It needs no restriction enzyme at all, since the parts are joined through sequence overlap'],
      answer: 1,
      optionRefs: { 0: '1-19' },
      why_en: 'Removing every internal site by silent mutation is real work. For a construct you build once it is overhead; for a parts library reassembled in many combinations it is amortised over every future build. That is exactly what standards such as MoClo and GoldenBraid formalise.',
      why_cn: '用 silent mutation 去掉所有内部位点是实打实的工作量。对只做一次的构建体来说这是纯开销；对要反复重组的部件库来说，这个成本会被之后每一次组装摊薄。MoClo、GoldenBraid 这类标准正是把这件事制度化了。' },
    { type: 'mcq',
      q_en: 'You want to assemble eight fragments at once and are choosing junction overhangs. What is the risk of picking them by eye?',
      q_cn: '你想一次组装 8 个片段，正在挑选接头 overhang。凭眼睛挑有什么风险？',
      options: ['You may need more junctions than the 256 possible overhangs allow', 'Palindromic or near-identical overhangs mis-ligate and fidelity collapses', 'The type IIS enzyme will re-cut inside the finished junction', 'T4 ligase cannot join more than four fragments in one tube'],
      answer: 1,
      why_en: 'The 256 figure is a theoretical maximum, not a usable set. Potapov and colleagues measured the full ligation-fidelity matrix at NEB, and design tools use it to select mutually high-fidelity sets. With a well-chosen set, more than twenty fragments is achievable; with a badly chosen one, even five will misassemble.',
      why_cn: '256 是理论上限，不是可用集合。NEB 的 Potapov 等人测定了完整的连接保真度矩阵，设计工具就用它来挑选彼此高保真的组合。用挑选过的组合可以做到 20 个片段以上；组合选得差，5 个都会错接。' },
    { type: 'short',
      q_en: 'An examiner says: "Golden Gate uses restriction enzymes, so surely the product gets cut too." Answer them.',
      q_cn: '考官说：「Golden Gate 用的是限制酶，那产物不也会被切吗？」回答他。',
      accept: ['outside', 'recognition site', 'discarded', 'cannot be re-cut', 'ratchet'],
      answer_en: 'No, and the reason is the defining property of type IIS enzymes: they cleave outside their own recognition sequence. The recognition site therefore sits on the small piece that is cut away and discarded, not on the piece that ends up in the assembly. So once two fragments have joined correctly, there is no recognition site left at that junction and the enzyme cannot cut it again — the correct product is a dead end. The converse is what makes the reaction work: an incorrect junction, or a vector that has simply re-ligated to itself, does regenerate the recognition site, gets cut again and returns to the pool. Over twenty to forty cycles of 37 and 16 degrees, that asymmetry drives the reaction irreversibly toward the fully correct assembly. It is a thermodynamic ratchet — the selectivity comes not from the chemistry preferring the right product, but from errors being reversible while the correct product is not.',
      answer_cn: '不会，原因正是 type IIS 酶的定义性性质：它们在自己的识别序列之外切割。因此识别位点位于被切掉、被丢弃的那一小段上，而不在进入组装产物的那一段上。所以两个片段一旦正确连接，那个接头处就不再有识别位点，酶也就无法再切它——正确产物成了死胡同。反过来正是反应能工作的原因：错误的接头，或者自己连回去的空载体，会重新生成识别位点，被再次切开、放回反应池。在 37 度与 16 度之间循环二三十次，这种不对称性把反应不可逆地推向完全正确的组装产物。这是一个热力学棘轮——选择性并非来自化学反应偏好正确产物，而是来自错误可逆、正确不可逆。'
    }
  ]
},

{
  id: '1-15',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.15',
  enTitle: 'Gateway cloning',
  cnTitle: 'Gateway 克隆',
  slides: 'L2 s.22–25',
  coverage: 'full',
  coverageNote: 'Slides 22–25 in full, including the phage lambda life-cycle slide the system is borrowed from. How the double selection actually reaches 95 per cent, and when the 8-residue scar genuinely matters, are added in beyondPoints.',
  summary: {
    en: 'Gateway borrows the site-specific recombination machinery of phage lambda to move a gene between plasmids without any restriction enzyme or ligase. BP clonase converts attB and attP into attL and attR, and LR clonase runs the reaction back the other way. Double selection — a different antibiotic plus the ccdB toxin gene — is what pushes it above ninety-five per cent correct clones. The cost is money and an eight-residue scar left in the final protein.',
    cn: 'Gateway 借用 phage lambda 的位点特异性重组机制，在质粒之间搬运基因，完全不需要限制酶或连接酶。BP clonase 把 attB 和 attP 变成 attL 和 attR，LR clonase 则把反应反向跑回去。双重选择——换一种抗生素再加上 ccdB 毒素基因——是它能达到 95% 以上正确克隆率的原因。代价是价格，以及在最终蛋白里留下 8 个残基的疤痕。'
  },
  figures: [
    { src: 'img/phage-lambda-cycle.webp',
      alt: 'Diagram of the phage lambda lytic and lysogenic life cycles showing attachment, DNA circularisation, integration into the bacterial chromosome, and lysis or normal cell division',
      caption_en: 'The full lambda life cycle that Gateway borrows from. After the phage injects its DNA and it circularises, the cell takes one of two paths: the lytic cycle makes new phage and bursts the cell, while the lysogenic cycle integrates the phage DNA into the bacterial chromosome as a prophage, where it rides along through ordinary cell division until something triggers it to excise and switch back to lytic. The BP and LR clonases are the integration and excision machinery of that lysogenic branch, repurposed to swap DNA fragments between plasmids instead of into a chromosome. Source: PESB Lecture 2, "Phage lambda".',
      caption_cn: 'Gateway 所借用的 lambda 噬菌体完整生活周期。噬菌体注入 DNA 并环化之后，细胞会走两条路之一：lytic cycle 制造新噬菌体并裂解细胞；lysogenic cycle 则把噬菌体 DNA 整合进细菌染色体成为 prophage，随普通细胞分裂一起传下去，直到某个信号触发它切出并转回裂解途径。BP 与 LR clonase 就是溶原分支里的整合与切出机器，被改造成在质粒之间交换 DNA 片段，而不是整合进染色体。来源：PESB 第 2 讲，"Phage lambda"。' }
  ],
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.22', src: 'img/figures/L2_s22_1.webp' },
    { slide: 'L2 s.23', src: 'img/figures/L2_s23_1.webp' },
    { slide: 'L2 s.24', src: 'img/figures/L2_s24_1.webp' },
    { slide: 'L2 s.25', src: 'img/figures/L2_s25_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'Gateway **不用限制酶、不用连接酶**，它借的是 λ 噬菌体的位点特异性重组。\n\n' +
            '两个要点：**双重选择（换抗生素 + ccdB）**让它到 >95%；**8 个残基的疤痕**是它的死穴——题目里一提「真实 N 端」，Gateway 就是要被排除的那个。',
  skipIt: 'attB 25 nt / attP 243 nt / attL 100 nt / attR 168 nt 这四个长度数字，以及 pDONR221 这个载体型号，不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时只写了 **Gateway cloning** 两个词——方法被点名了，数字没有。',
  explain: [
    {
      q: 'attB / attP / attL / attR——这四个名字有办法不搞混吗？',
      trace: {
        what: '四段特定的 DNA 序列，是 λ 噬菌体做**位点特异性重组**时互相识别的位点。它们本身不编码什么，就是「接头」。',
        from: '**字母就是来历，记住这一点就再也不会反：**\n\n**attB 的 B = Bacteria**，它长在**细菌染色体**上。\n\n**attP 的 P = Phage**，它长在**噬菌体**上。\n\nλ 要整合进细菌基因组时，就是让这两个位点重组：**attB × attP**。重组完，噬菌体的 DNA 被插进了染色体，而原来的两个位点变成了插入片段**两侧**的新接口——\n\n**attL 的 L = Left，attR 的 R = Right**，就是插入位点的左右两边。',
        to: 'Gateway 做的事就是**把这个天然反应的正反两个方向都商业化**：\n\n**BP clonase** 跑 **attB × attP → attL + attR**（正向，λ 整合的方向）。\n\n**LR clonase** 跑 **attL × attR → attB + attP**（反向，λ 切除自己的方向）。\n\n**两个酶的名字就是它们的底物。**BP 作用于 attB 和 attP，LR 作用于 attL 和 attR。不用背，读名字就行。',
        family: '干活的酶就是第 1-5-3 节列过的 **λ Integrase（Int）和 Excisionase（Xis）**，加上宿主的 Integration Host Factor（IHF）。BP clonase = Int + IHF；LR clonase = Xis + Int + IHF——**多了个 Xis，因为「切除」这个方向需要它。**'
      },
      takeaway: 'B=Bacteria、P=Phage、L=Left、R=Right。酶的名字就是它作用的两个位点。'
    },
    {
      q: 'BP 和 LR，实际工作里各在什么时候用？',
      a: '**BP 是「入库」，LR 是「出库」。**\n\n' +
         '**BP clonase**：把你的基因（两端由 PCR 引物带上 attB 位点）搬进 **donor vector**，做成一个 **entry clone**。这一步一个基因**只做一次**。\n\n' +
         '**LR clonase**：把 entry clone 里的基因搬进 **destination vector**——也就是各种真正要用的表达载体。\n\n' +
         '**日常跑得最多的是 LR，而这正是 Gateway 真正的卖点。**\n\n' +
         '想一下这个场景：你要把同一个基因分别做成 His 标签版、GST 标签版、GFP 融合版、哺乳动物表达版、昆虫细胞版……用经典酶切克隆，这是**五次独立的克隆**，每次都要重新设计引物、重新考虑位点冲突和阅读框。\n\n' +
         '用 Gateway：**做一次 entry clone，然后开五个 LR 反应，一个下午全搞定**，而且每一个的接口都保证正确。\n\n' +
         '所以 Gateway 的适用场景很明确：**同一个基因要进很多个载体的时候。**只做一个构建体的话，它的价格不值。',
      takeaway: 'BP 入库做 entry clone（一次），LR 出库进各种表达载体（很多次）。一对多才是它的主场。'
    },
    {
      q: '>95% 的正确率具体是怎么堆出来的？',
      a: '因为**「失败」有两个来源，双重选择正好一样堵一个**。\n\n' +
         '**失败来源一：entry clone 没反应，原样转进去了。**\n\n' +
         '堵它的办法是**换抗生素**：entry clone 和 destination vector 带的是**不同的抗性基因**。转化后铺在 **destination 的抗生素**上，没反应的 entry clone 因为不带这个抗性，**长不出来**。\n\n' +
         '**失败来源二：destination vector 没反应，自己长回来了。**\n\n' +
         '堵它的办法是 **ccdB**：destination vector 上你的基因将要占据的那个位置，原本放的就是 **ccdB 毒素基因**。没反应的载体还在表达 CcdB，**细胞自杀**。只有重组成功、基因把 ccdB 顶替掉的，才活得下来。\n\n' +
         '**两个漏洞各堵一个，剩下的就基本只有正确产物了。**这正是第 1-10-2 节说的「正选择 + 负选择叠加」的实例。\n\n' +
         '顺带解释一个必然会遇到的问题：**既然 destination vector 上带着 ccdB，它自己怎么扩增？**答案还是那个——用 **DB3.1 / ccdB Survival** 这类带突变旋转酶的菌株。这不是 Gateway 的怪癖，是任何用 ccdB 的系统都逃不掉的配套要求。',
      takeaway: '换抗生素堵住「entry 没反应」，ccdB 堵住「destination 没反应」。两个失败模式，两把锁。'
    },
    {
      q: '八个残基的疤痕，为什么说它是死穴而不是小毛病？',
      a: '先说清楚**疤痕是怎么来的**：重组的接口 **attB1 和 attB2 会留在最终构建体里**，而且它们落在阅读框内，**会被翻译**。于是你的蛋白在融合接口处多了大约 **8 个本不该有的氨基酸**。\n\n' +
         '**这是重组类方法的必然代价。**酶切克隆好歹能把切下来的东西丢掉；重组是「两段 DNA 交换并接上」，接口**不可能不留下**。\n\n' +
         '大多数时候这确实无所谓——多 8 个残基，蛋白照样折叠、照样有活性。\n\n' +
         '**但下面这几种情况它是致命的：**\n\n' +
         '**需要真实 N 端**：你在研究信号肽怎么被切、或者某个蛋白酶在 N 端切哪一刀——多 8 个残基，你研究的就不是那个分子了。\n\n' +
         '**解晶体结构**：多出来的柔性尾巴会干扰结晶，或者在电子密度图里糊成一团。\n\n' +
         '**任何对 N 端敏感的定量实验。**\n\n' +
         '这些场合必须换**无疤痕的方法**：Golden Gate、Gibson、LIC、In-Fusion。\n\n' +
         '**应试提示：题干里只要出现 authentic / native N-terminus 这类字眼，Gateway 就是那个要被划掉的选项。**这几乎是这一节唯一一个可以「条件反射」作答的地方。',
      takeaway: 'attB 留在构建体里并被翻译 → 多 8 个残基。需要真实 N 端时，Gateway 直接出局。'
    }
  ],
  points: [
    { term: 'The inspiration', en: 'Gateway is inspired by phage lambda. In its lysogenic phase lambda integrates into the E. coli chromosome by site-specific recombination.', cn: 'Gateway 的灵感来自 phage lambda。在溶原期，lambda 通过位点特异性重组整合进大肠杆菌染色体。' },
    { term: 'The natural sites', en: 'Recombination occurs between attB, 25 nucleotides, on the bacterial chromosome and attP, 243 nucleotides, on the phage.', cn: '重组发生在细菌染色体上的 attB（25 个核苷酸）与噬菌体上的 attP（243 个核苷酸）之间。' },
    { term: 'The products', en: 'That reaction generates attL, 100 nucleotides, and attR, 168 nucleotides, flanking the integrated prophage.', cn: '该反应产生 attL（100 个核苷酸）和 attR（168 个核苷酸），位于整合的 prophage 两侧。' },
    { term: 'The commercial system', en: 'Commercialised by Invitrogen, now ThermoFisher, transferring DNA fragments using the att recombination sequences and two proprietary enzyme mixes.', cn: '由 Invitrogen（现属 ThermoFisher）商业化，利用 att 重组序列和两种专利酶混合物来转移 DNA 片段。' },
    { term: 'BP clonase', en: 'Phage Integrase plus E. coli Integration Host Factor. Reaction: attB times attP gives attL plus attR.', cn: 'BP clonase 含噬菌体 Integrase 加大肠杆菌 Integration Host Factor。反应：attB × attP → attL + attR。' },
    { term: 'LR clonase', en: 'Phage Excisionase plus Integrase plus Integration Host Factor. Reaction: attL times attR gives attB plus attP.', cn: 'LR clonase 含噬菌体 Excisionase 加 Integrase 加 Integration Host Factor。反应：attL × attR → attB + attP。' },
    { term: 'The vectors', en: 'The donor vector is pDONR221. Donor and destination vectors both use double selection — different antibiotics plus the ccdB gene.', cn: 'Donor vector 是 pDONR221。Donor 和 destination 载体都使用双重选择——不同的抗生素，再加上 ccdB 基因。' },
    { term: 'Pros', en: 'Highly efficient, above ninety-five per cent positive clones; quick; simple parallel transfer of one gene of interest into many different expression vectors; multi-site cloning available, similar in spirit to Golden Gate.', cn: '优点：效率高，阳性克隆超过 95%；快；能简单地把同一个目的基因平行转入许多不同的表达载体；也有 multi-site cloning，思路上类似 Golden Gate。' },
    { term: 'Cons', en: 'Price, and cloning artefacts — scars encoding eight amino acids.', cn: '缺点：价格，以及克隆产生的人工痕迹——编码 8 个氨基酸的疤痕。' }
  ],
  beyondPoints: [
    { term: 'How the double selection gives above 95 per cent', en: 'Two independent filters act at once. First, an antibiotic swap: the entry clone and the destination vector carry different resistance genes, so plating on the destination antibiotic means only recombined products grow. Second, ccdB counter-selection: the destination vector carries ccdB in the slot your gene will occupy, so unreacted destination vector still expresses CcdB and kills the cell. Only vectors in which recombination has replaced ccdB with your gene survive. This is also why Gateway needs special DB3.1 or ccdB Survival cells to propagate the destination vector in the first place.', cn: '两个互相独立的过滤器同时起作用。第一，抗生素互换：entry clone 与 destination vector 携带不同的抗性基因，所以铺在 destination 的抗生素上时，只有发生了重组的产物才能长出来。第二，ccdB 反向选择：destination vector 在你的基因将要占据的位置上带着 ccdB，所以未反应的 destination vector 仍然表达 CcdB 并杀死细胞。只有那些通过重组把 ccdB 换成你的基因的载体才能存活。这也解释了为什么 Gateway 一开始要用 DB3.1 或 ccdB Survival 这类特殊菌株来扩繁 destination vector。' },
    { term: 'The eight-residue scar is a real problem, not a footnote', en: 'The attB1 and attB2 sites remain in the final construct and are translated, adding about eight extra residues at the fusion junction. For most applications that is harmless. It is not harmless when you need an authentic N-terminus, when you are solving a crystal structure, or when you are studying a signal peptide or a protease cleavage site. For those, use a scarless method — Golden Gate, Gibson, LIC or In-Fusion. In practice: if the question mentions an authentic or native N-terminus, Gateway is the option to eliminate.', cn: 'attB1 和 attB2 位点会留在最终构建体里并被翻译，在融合接头处多加约 8 个残基。对多数应用无害。但在以下情况下有害：需要天然 N 端（研究 N 端修饰、N 端规则或做 Edman 测序）；解晶体结构（多出来的柔性残基会干扰结晶）；研究信号肽或蛋白酶切位点（多加残基直接改变了识别序列）；设计短连接子的融合蛋白时，8 个残基可能已经超过你设计的间距。除此之外日常表达纯化基本无所谓。反过来说，题目里一旦出现 authentic 或 native N-terminus 这类字眼，Gateway 就是要被排除掉的那个选项。' }
  ],
  terms: [
    { en: 'Site-specific recombination', cn: '位点特异性重组', def_en: 'Exchange of DNA between two defined short sequences, catalysed by a dedicated recombinase rather than by general homology.', def_cn: '在两段确定的短序列之间交换 DNA，由专门的重组酶催化，而不是依靠一般的同源性。' },
    { en: 'attB / attP / attL / attR', cn: 'att 位点', def_en: 'The lambda recombination sites: attB is 25 nt on the bacterial chromosome, attP 243 nt on the phage, and recombination between them yields attL at 100 nt and attR at 168 nt.', def_cn: 'Lambda 的重组位点：attB 在细菌染色体上，25 nt；attP 在噬菌体上，243 nt；两者重组产生 attL（100 nt）和 attR（168 nt）。' },
    { en: 'BP clonase', cn: 'BP clonase', def_en: 'Integrase plus IHF; drives attB times attP to attL plus attR — the reaction that makes an entry clone.', def_cn: 'Integrase 加 IHF；驱动 attB × attP → attL + attR，也就是制备 entry clone 的反应。' },
    { en: 'LR clonase', cn: 'LR clonase', def_en: 'Excisionase plus Integrase plus IHF; drives attL times attR to attB plus attP — the reaction that moves the gene into a destination vector.', def_cn: 'Excisionase 加 Integrase 加 IHF；驱动 attL × attR → attB + attP，也就是把基因搬进 destination vector 的反应。' },
    { en: 'ccdB counter-selection', cn: 'ccdB 反向选择', def_en: 'Placing a toxin gene in the slot the insert will occupy, so any vector that failed to recombine kills its own host cell.', def_cn: '把毒素基因放在插入片段将要占据的位置上，于是任何没有发生重组的载体都会杀死自己的宿主细胞。' },
    { en: 'Cloning scar', cn: '克隆疤痕', def_en: 'Extra bases left at a junction by the cloning method itself; in Gateway the retained attB sites are translated into about eight extra residues.', def_cn: '克隆方法本身在接头处留下的多余碱基；在 Gateway 中，保留下来的 attB 位点会被翻译成约 8 个额外残基。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which clonase mix moves your gene from an entry clone into a destination vector?',
      q_cn: '哪一种 clonase 混合物把你的基因从 entry clone 搬进 destination vector？',
      options: ['BP clonase, converting attB times attP into attL plus attR inside the donor vector', 'LR clonase, converting attL times attR into attB plus attP', 'T4 ligase, using the att sites themselves as sticky overhangs', 'BsaI plus T4 ligase'],
      answer: 1,
      optionRefs: { 3: '1-14' },
      optionNotes: {
        0: { en: 'The two reactions are swapped. What this option describes, attB times attP giving attL plus attR, is correct chemistry, but that is BP, the step that builds the entry clone. Moving the gene onward out of an entry clone starts from attL and attR instead, which is LR.', cn: '两个反应对调了。这个选项描述的 attB 乘 attP 得到 attL 加 attR 本身是对的，但那是 BP，是造 entry clone 的那一步。要把基因从 entry clone 往下游搬，起点是 attL 和 attR，也就是 LR。' }
      },
      why_en: 'The entry clone carries attL sites and the destination vector carries attR sites, so the reaction that joins them is attL times attR giving attB plus attP — that is LR clonase, which contains Excisionase, Integrase and IHF. BP clonase runs the opposite direction and is what creates the entry clone in the first place.',
      why_cn: 'Entry clone 带 attL 位点，destination vector 带 attR 位点，所以把它们连起来的反应是 attL × attR → attB + attP，这就是 LR clonase，含 Excisionase、Integrase 和 IHF。BP clonase 跑的是相反方向，是一开始用来制备 entry clone 的。' },
    { type: 'mcq',
      q_en: 'What gives Gateway its above-95-per-cent rate of positive clones?',
      q_cn: 'Gateway 阳性克隆率超过 95% 靠的是什么？',
      options: ['The recombinase is inherently error-free and leaves no unreacted vector behind', 'Two independent filters: an antibiotic swap plus ccdB counter-selection', 'Blue-white screening on the destination plate', 'A gel purification step between the two reactions that removes unreacted vector'],
      answer: 1,
      optionRefs: { 2: '1-13' },
      why_en: 'Entry clone and destination vector carry different resistance genes, so plating on the destination antibiotic already excludes unreacted entry clone. On top of that the destination vector carries ccdB in the slot your gene will occupy, so any vector that did not recombine still makes the toxin and kills its host. Two independent filters acting together, not enzyme perfection.',
      why_cn: 'Entry clone 与 destination vector 带不同的抗性基因，所以铺在 destination 的抗生素上就已经排除了未反应的 entry clone。在此之上，destination vector 在你的基因将要占据的位置带着 ccdB，任何没有重组的载体仍会产生毒素并杀死宿主。是两个互相独立的过滤器叠加，而不是酶本身完美。' },
    { type: 'mcq',
      q_en: 'In which situation should Gateway specifically be avoided?',
      q_cn: '在哪种情况下应该特别避免使用 Gateway？',
      options: ['When you need to move one gene into many different expression vectors from a single entry clone', 'When you need an authentic native N-terminus, or are solving a crystal structure', 'When you have no restriction enzymes available for the cloning step', 'When the insert is longer than three kilobases'],
      answer: 1,
      optionNotes: {
        0: { en: 'This is the case Gateway exists for, read as an argument against it. One entry clone feeding many destination vectors through the same LR reaction is the main selling point. What actually rules Gateway out is the attB scar of about eight residues left at the junction.', cn: '这正是 Gateway 存在的理由，却被当成了不该用它的理由。一个 entry clone 用同一个 LR 反应转进许多 destination vectors，是它最主要的卖点。真正让人放弃它的是接口处 attB 留下的大约八个残基的 scar。' }
      },
      why_en: 'The attB sites remain in the construct and are translated, adding about eight residues at the junction. That is harmless for routine expression but not when the N-terminus itself is the object of study, when extra flexible residues would interfere with crystallisation, or when a signal peptide or protease site would be altered. Use a scarless method instead — Golden Gate, Gibson, LIC or In-Fusion.',
      why_cn: 'attB 位点会留在构建体里并被翻译，在接头处多加约 8 个残基。对常规表达无害，但当 N 端本身就是研究对象、当多余的柔性残基会干扰结晶、或当信号肽或蛋白酶切位点会被改变时就不行。这时应改用无疤痕方法——Golden Gate、Gibson、LIC 或 In-Fusion。' },
    { type: 'short',
      q_en: 'Explain how Gateway cloning works, from the phage biology to the two clonase reactions.',
      q_cn: '解释 Gateway 克隆的工作原理，从噬菌体生物学讲到两个 clonase 反应。',
      accept: ['lambda', 'attB', 'attP', 'attL', 'attR', 'BP', 'LR', 'ccdB'],
      answer_en: 'Gateway is inspired by phage lambda. In its lysogenic phase, lambda integrates into the E. coli chromosome by site-specific recombination between attB, a 25-nucleotide site on the bacterial chromosome, and attP, a 243-nucleotide site on the phage. That reaction generates attL, 100 nucleotides, and attR, 168 nucleotides, flanking the integrated prophage. Invitrogen commercialised this as two enzyme mixes. BP clonase contains the phage Integrase and E. coli Integration Host Factor and runs attB times attP to attL plus attR; you use it to move your gene into the donor vector, pDONR221, making an entry clone. LR clonase contains Excisionase as well as Integrase and IHF, and runs attL times attR back to attB plus attP; you use it to move the gene from the entry clone into whichever destination expression vector you want. No restriction enzyme and no ligase is involved at any point. The efficiency, above ninety-five per cent positive clones, comes from double selection: the entry clone and destination vector carry different antibiotic resistances, and the destination vector carries the ccdB toxin gene in the slot your gene will occupy, so unreacted vector kills its own host. That is also why the destination vector has to be propagated in ccdB-resistant DB3.1 cells. The advantages are speed and the ease of transferring one gene of interest into many different expression vectors in parallel. The disadvantages are price and a cloning artefact: the attB sites remain in the final construct and are translated, adding about eight amino acids at the junction, which matters whenever you need an authentic N-terminus, are solving a structure, or are studying a signal peptide or protease site.',
      answer_cn: 'Gateway 的灵感来自 phage lambda。在溶原期，lambda 通过位点特异性重组整合进大肠杆菌染色体：重组发生在细菌染色体上 25 个核苷酸的 attB 与噬菌体上 243 个核苷酸的 attP 之间，产生位于整合 prophage 两侧的 attL（100 nt）和 attR（168 nt）。Invitrogen 把它商业化为两种酶混合物。BP clonase 含噬菌体 Integrase 和大肠杆菌 Integration Host Factor，跑 attB × attP → attL + attR；用它把你的基因搬进 donor vector（pDONR221），得到 entry clone。LR clonase 含 Excisionase 以及 Integrase 和 IHF，跑 attL × attR → attB + attP；用它把基因从 entry clone 搬进你想要的任何 destination 表达载体。全程不涉及任何限制酶和连接酶。95% 以上的阳性率来自双重选择：entry clone 和 destination vector 带不同的抗生素抗性；同时 destination vector 在你的基因将要占据的位置带着 ccdB 毒素基因，所以未反应的载体会杀死自己的宿主。这也是为什么 destination vector 必须在抗 ccdB 的 DB3.1 细胞里扩繁。优点是快，以及可以很方便地把同一个目的基因平行转入许多不同的表达载体。缺点是价格，以及一个克隆人工痕迹：attB 位点留在最终构建体里并被翻译，在接头处多加约 8 个氨基酸——只要你需要天然 N 端、要解结构、或者在研究信号肽或蛋白酶切位点，这就会成为问题。'
    }
  ],
  oral: {
    q_en: 'Describe Gateway cloning, including where the biology comes from and what its drawbacks are.',
    q_cn: '描述 Gateway 克隆，包括它的生物学来源和缺点。',
    model_en: 'Gateway is inspired by phage lambda, and specifically by what lambda does in its lysogenic phase, where it integrates into the E. coli chromosome by site-specific recombination. That recombination happens between attB, a 25-nucleotide site on the bacterial chromosome, and attP, a 243-nucleotide site on the phage, and the reaction generates attL, 100 nucleotides, and attR, 168 nucleotides, flanking the integrated prophage. Invitrogen, now ThermoFisher, commercialised exactly this chemistry as two proprietary enzyme mixes. BP clonase contains the phage Integrase together with E. coli Integration Host Factor, and it drives attB times attP to attL plus attR. That is the reaction you use to put your gene into the donor vector, pDONR221, creating an entry clone. LR clonase contains Excisionase in addition to Integrase and IHF, and it drives attL times attR back to attB plus attP. That is the reaction that transfers your gene from the entry clone into a destination expression vector. Notice that no restriction enzyme and no ligase appears anywhere in this. The efficiency is remarkable — above ninety-five per cent positive clones — and that comes from double selection working on two independent axes. The first is an antibiotic swap: the entry clone and the destination vector carry different resistance genes, so plating on the destination antibiotic already removes anything unreacted. The second is ccdB counter-selection: the destination vector carries the ccdB toxin gene in exactly the slot your gene will occupy, so any destination vector that did not recombine still expresses CcdB and poisons its own host by trapping DNA gyrase. Only vectors where recombination has replaced ccdB with your gene survive. Incidentally that is also why the destination vector itself has to be propagated in a special ccdB-resistant strain, DB3.1 or ccdB Survival. The advantages are that it is highly efficient, it is quick, and it makes parallel transfer of one gene of interest into many different expression vectors trivial; multi-site versions exist too. The disadvantages are the price, and a cloning artefact that I would not treat as a footnote: the attB sites stay in the final construct and are translated, adding about eight amino acids at the fusion junction. For routine expression and purification that is usually irrelevant. It is not irrelevant if you need an authentic N-terminus, if you are trying to solve a crystal structure where extra flexible residues interfere, or if you are studying a signal peptide or a protease cleavage site, because there the added residues change the very sequence you are studying. In those cases you should choose a scarless method instead — Golden Gate, Gibson, LIC or In-Fusion.',
    checklist: ['Inspired by phage lambda, lysogenic phase, site-specific recombination', 'attB 25 nt on chromosome times attP 243 nt on phage', 'Gives attL 100 nt and attR 168 nt flanking the prophage', 'Commercialised by Invitrogen / ThermoFisher', 'BP clonase = Integrase + IHF: attB x attP to attL + attR', 'LR clonase = Excisionase + Integrase + IHF: attL x attR to attB + attP', 'Donor vector pDONR221 makes the entry clone', 'No restriction enzyme, no ligase anywhere', 'Above 95 per cent from double selection', 'Filter 1: different antibiotic on entry vs destination', 'Filter 2: ccdB in the slot your gene will occupy kills unreacted vector', 'Hence destination vector needs DB3.1 / ccdB Survival cells', 'Pros: quick, easy parallel transfer into many expression vectors', 'Cons: price, and an 8-residue scar from the retained attB sites', 'Scar matters for authentic N-terminus, crystallography, signal peptides — use a scarless method there']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why must a Gateway destination vector be propagated in DB3.1 or ccdB Survival cells?',
      q_cn: '为什么 Gateway 的 destination vector 必须在 DB3.1 或 ccdB Survival 细胞中扩繁？',
      options: ['These strains maintain the plasmid at a much higher copy number', 'The vector carries ccdB and only these strains resist the toxin', 'These strains lack the restriction systems that would cut the att sites', 'These strains supply the BP and LR clonase enzymes themselves'],
      answer: 1,
      optionRefs: { 0: '1-9' },
      why_en: 'The destination vector carries ccdB in the slot the gene will occupy, and CcdB poisons DNA gyrase. In an ordinary strain the vector kills its own host, so it cannot be amplified. DB3.1 carries a gyrase mutation that makes it insensitive. This is a direct practical consequence of the counter-selection that gives the method its efficiency.',
      why_cn: 'Destination vector 在基因将要占据的位置带着 ccdB，而 CcdB 毒害 DNA gyrase。在普通菌株里这个载体会杀死自己的宿主，因此无法扩增。DB3.1 带有 gyrase 突变而对其不敏感。这正是让该方法高效的反向选择所带来的直接实际后果。' },
    { type: 'mcq',
      q_en: 'You need to express one gene in E. coli, insect cells and mammalian cells, each with a different tag. Why is Gateway attractive here?',
      q_cn: '你需要把同一个基因在大肠杆菌、昆虫细胞和哺乳动物细胞中表达，各带不同的标签。为什么这里 Gateway 有吸引力？',
      options: ['It costs less per reaction than restriction cloning or Gibson', 'One entry clone moves into every destination vector by the same LR reaction', 'It is the only cloning method that works with eukaryotic hosts', 'It removes the need for antibiotic selection after transformation'],
      answer: 1,
      why_en: 'Everything downstream of the entry clone uses the same attL times attR reaction. Restriction cloning would need a fresh site survey and fresh primers for every vector; Gateway needs none. That parallel transfer is the specific thing the system is for, and it is why people accept the price and the scar.',
      why_cn: 'Entry clone 之后的所有步骤都用同一个 attL × attR 反应。用限制酶克隆的话，每换一个载体都要重新查位点、重新设计引物；Gateway 完全不用。这种平行转移正是该系统存在的意义，也是人们愿意接受它的价格和疤痕的原因。' },
    { type: 'mcq',
      q_en: 'Which reaction produces an entry clone, and from what?',
      q_cn: '哪一个反应产生 entry clone，原料是什么？',
      options: ['LR clonase, from a destination vector and an expression clone that already carries the gene', 'BP clonase, from an attB-flanked PCR product and the attP-carrying donor vector pDONR221', 'T4 ligase, from a digested insert and donor vector', 'BP clonase, from two entry clones recombining through their attL sites'],
      answer: 1,
      optionRefs: { 2: '1-12' },
      why_en: 'BP runs attB times attP to attL plus attR. Your PCR product carries attB sites added by the primers; pDONR221 carries attP. The product is the entry clone, flanked by attL, which is then the substrate for LR into any destination vector.',
      why_cn: 'BP 跑的是 attB × attP → attL + attR。你的 PCR 产物带有引物加上的 attB 位点，pDONR221 带 attP。产物就是 entry clone，两侧为 attL，随后作为 LR 反应的底物进入任意 destination vector。' },
    { type: 'short',
      q_en: 'A colleague wants to use Gateway to make a construct for crystallography. What do you tell them?',
      q_cn: '同事想用 Gateway 做一个用于晶体学的构建体。你会怎么说？',
      accept: ['attB', 'eight', 'scar', 'N-terminus', 'scarless', 'Gibson'],
      answer_en: 'I would tell them not to, and give the reason rather than just the rule. The attB1 and attB2 sites do not disappear when the LR reaction completes — they remain in the final construct and they are translated, which adds about eight extra amino acids at the fusion junction. For routine expression and purification that is genuinely harmless, which is why the method is popular. For a crystallography target it is not, because those extra residues are flexible and unstructured, and flexible termini interfere with crystal packing and are a common reason a construct will not crystallise. The same objection applies whenever the terminus itself is the object of study: an authentic N-terminus, a signal peptide, or a protease cleavage site, where added residues change the very sequence you are asking about. For those cases the answer is a scarless method — Gibson, LIC, In-Fusion or Golden Gate. It is worth adding that this is not a small footnote; you can lose months to a construct that expresses beautifully and never crystallises.',
      answer_cn: '我会劝他别用，并且给出理由而不只是结论。LR 反应完成后 attB1 和 attB2 位点并不会消失——它们留在最终构建体里并且被翻译，在融合接头处多加约 8 个氨基酸。对常规表达纯化来说这确实无害，这也是该方法流行的原因。但对晶体学目标就不行，因为这些多出来的残基是柔性的、无固定结构，而柔性末端会干扰晶体堆积，是构建体长不出晶体的常见原因。只要末端本身就是研究对象，同样的反对意见都成立：天然 N 端、信号肽、蛋白酶切位点——多加的残基直接改变了你要研究的那段序列。这些情况的答案是无疤方法：Gibson、LIC、In-Fusion 或 Golden Gate。还值得补一句：这不是一条小注脚，一个表达得很漂亮却永远长不出晶体的构建体，可以让你白花几个月。'
    }
  ]
},

{
  id: '1-16',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.16',
  enTitle: 'TA cloning and TOPO TA',
  cnTitle: 'TA 克隆与 TOPO TA',
  slides: 'L2 s.26–28',
  coverage: 'full',
  coverageNote: 'Slides 26–28 in full. Why the polymerase choice is forced, and where the energy for the five-minute TOPO reaction comes from, are added in beyondPoints.',
  summary: {
    en: 'TA cloning exploits an accident of Taq polymerase: it adds a single 3-prime A overhang to each end of a PCR product, which can be ligated straight into a vector carrying single 3-prime T overhangs, with no restriction digest at all. TOPO TA replaces the ligase with vaccinia topoisomerase I, supplied already covalently attached to the linearised vector, so the reaction takes five minutes at room temperature.',
    cn: 'TA 克隆利用了 Taq polymerase 的一个副产物特性：它会在 PCR 产物两端各加一个 3′-A overhang，可以直接连进带 3′-T overhang 的载体，完全不需要酶切。TOPO TA 则用 vaccinia topoisomerase I 取代连接酶，这个酶在试剂盒里已经共价结合在线性化载体上，所以反应在室温下只需 5 分钟。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.26', src: 'img/figures/L2_s26_1.webp' },
    { slide: 'L2 s.26', src: 'img/figures/L2_s26_2.webp' },
    { slide: 'L2 s.27', src: 'img/figures/L2_s27_1.webp' },
    { slide: 'L2 s.28', src: 'img/figures/L2_s28_1.webp' },
    { slide: 'L2 s.28', src: 'img/figures/L2_s28_2.webp' },
    { slide: 'L2 s.28', src: 'img/figures/L2_s28_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'TA 克隆把 **Taq 多加的那个 3′-A** 直接当黏性末端用，所以**全程不需要酶切**。\n\n' +
            '代价有两个：**不定向**，而且**你被迫用低保真的 Taq**。',
  skipIt: 'vaccinia topoisomerase I 认的那段 5′-(C/T)CCTT-3′、以及「5 分钟」这个时间，不用死背。老师在第 3 讲开头给第 2 讲做 RECAP 时写的是 **Topoisomerase, TA, TA TOPO cloning**——**三个都被点名了**，所以机制要会讲，参数可以查。',
  explain: [
    {
      q: 'TA 克隆凭什么可以完全不用酶切？',
      a: '因为**黏性末端已经现成地在那儿了，而且是免费的**。\n\n' +
         '回到第 1-5-1 节：Taq 有末端转移酶活性，合成到模板尽头之后会**不照模板多加一个 A**，于是 PCR 产物两端各带一个 **3′-A 突出**。\n\n' +
         '载体那边，厂商预先把它做成线性、两端各带一个 **3′-T 突出**。\n\n' +
         '**A 配 T，贴上，T4 连接酶焊住。完。**\n\n' +
         '值得停一下欣赏这个设计：**Taq 的这个「缺陷」，在别的场合是要被校对酶啃掉的多余碱基，在这里成了整个方法的接口。**同一个性质，换个用途就从 bug 变成 feature——这跟 exenatide、ccdB、λ 整合酶是同一类故事：**不是设计出来的，是发现某个现成的东西正好能用。**\n\n' +
         '不用酶切带来的实际好处也很直接：**不用担心你的基因内部有没有那个酶的位点**——这是经典酶切克隆最烦人的约束，在这里根本不存在。',
      takeaway: 'Taq 免费送的 3′-A 配上载体的 3′-T。缺陷变接口，而且完全绕开了「内部位点」这个老问题。'
    },
    {
      q: '「被迫用 Taq」这件事，代价有多大？',
      a: '代价直接落在**保真度**上，而且这是个**结构性**的绑定，不是可以商量的。\n\n' +
         '**校对酶（Pfu、Phusion）给的是平末端**——因为它们会把那个多余的 A 当作错误啃掉（第 1-5-1 节）。平末端配不上 3′-T 载体，**TA 克隆直接不工作**。\n\n' +
         '所以选了 TA，就等于选了**低保真的酶**。\n\n' +
         '**这什么时候可以接受？**当你只是想把一个片段先「存起来」——反正后面要测序确认，测出错了大不了换一个克隆。\n\n' +
         '**什么时候不可以？**当这个构建体要拿去表达蛋白。回到那条规则：**未被校对的错误会永久留在构建体里**，之后每一批蛋白都带着它。\n\n' +
         '**折中办法叫 A-tailing**：用 Phusion 高保真扩增，拿到平末端产物之后，**再加 Taq 和 dATP 短暂孵育一下**，把 A 补上去。这样既拿到了高保真序列，又拿到了 TA 克隆要的末端。\n\n' +
         '记这一条的价值在于：它说明「方法的限制」常常**不是不可逾越的**，只要你知道限制的来源在哪。',
      takeaway: 'TA 强制绑定 Taq，因为校对酶把 A 啃掉了。要高保真就先用 Phusion 扩，再用 Taq 补 A。'
    },
    {
      q: 'TOPO 为什么 5 分钟就够，而普通连接要 16 °C 过夜？',
      trace: {
        what: '**vaccinia（痘苗病毒）拓扑异构酶 I**，认 5′-(C/T)CCTT-3′ 这段序列。它取代了反应里的连接酶。',
        from: '拓扑异构酶的本职是**切开一条链、放松超螺旋、再接回去**。注意「再接回去」这四个字——它意味着这个酶**必须想办法把切断那根磷酸二酯键时释放的能量保存下来**，否则它拿什么把键重新接上？',
        to: '**它的保存方式，就是本节最漂亮的地方：**\n\n酶切开 DNA 的同时，用自己活性位点上的**酪氨酸**跟 DNA 的 **3′-磷酸**形成一个**共价的磷酸酪氨酸键**。断键的能量没有散掉，而是**存在这根酶-DNA 共价键里**。\n\n试剂盒卖给你的，就是**已经被酶抓在手上、能量已经上好膛的线性化载体**。\n\n你的插入片段一加进去，它的 **5′-羟基**去进攻那个磷酸，酶随即把自己释放掉，磷酸二酯键**当场重新形成**。\n\n**所以不需要 ATP，不需要连接酶，也不需要等**——能量早就准备好了，反应只差最后一步。',
        family: '对照第 1-10-2 节：ccdB 毒的是 **II 型**拓扑异构酶（切两条链）。这里用的是 **I 型**（切一条链）。**同一类酶，一处当靶子毒它，一处当工具用它。**',
        numbers: '室温 5 分钟，效率还很高。对比普通连接：16 °C 过夜。'
      },
      takeaway: '断键的能量被存进酶-DNA 共价键里，载体是「上好膛」的。所以不用 ATP、不用等。'
    },
    {
      q: '「不定向」到底有多麻烦？',
      a: '因为**两端一模一样**：产物两端都是 3′-A，载体两端都是 3′-T。所以插入片段**正着进和反着进的机会各占一半**。\n\n' +
         '实际后果是你得**再筛一轮方向**。常用的判法是菌落 PCR 时用**一条载体上的引物 + 一条插入片段内部的引物**——方向对了才出条带，反了就没有。多做一步，不难，但是多做一步。\n\n' +
         '再加上另外两个缺点（**连接效率偏低**，以及**线性化载体得花钱买**），TA 的定位就很清楚了：\n\n' +
         '**它适合「先把这个 PCR 产物存进一个质粒里」**——测序、保存、当模板。\n\n' +
         '**它不适合直接做表达构建体**——方向要筛、序列有 Taq 的错误风险、还有阅读框要对。\n\n' +
         '厂商也知道这一点，所以出了**定向版的 TOPO**：办法是在正向引物的 5′ 端加一小段特定序列，让载体的突出端**只跟一个方向配得上**，另一个方向配不上。**又一次是「在引物尾巴上做文章」**（第 1-12 节那条）。',
      takeaway: '两端一样所以方向随机，得再筛一轮。TA 适合暂存片段，不适合直接做表达构建体。'
    }
  ],
  points: [
    { term: 'The trick', en: 'The terminal transferase activity of Taq polymerase adds a single 3-prime A overhang to each end of the PCR product.', cn: 'Taq polymerase 的末端转移酶活性会在 PCR 产物两端各加上一个 3′-A overhang。' },
    { term: 'The vector', en: 'The product is ligated directly into a linearised vector carrying single 3-prime T overhangs, using T4 ligase.', cn: '产物用 T4 ligase 直接连进一个带 3′-T 单碱基突出末端的线性化载体。' },
    { term: 'The advantage', en: 'No restriction digest is needed at any point.', cn: '整个过程完全不需要酶切。' },
    { term: 'Disadvantages', en: 'Not directional; lower ligation efficiency; and you have to buy the linearised vector.', cn: '缺点：不定向；连接效率较低；而且线性化载体必须购买。' },
    { term: 'Topoisomerase I', en: 'A ubiquitous enzyme that cuts one of the two strands of double-stranded DNA, relaxes it, and re-anneals the strand.', cn: 'Topoisomerase I 是一种普遍存在的酶，它切开双链 DNA 中的一条链，使其松弛，然后重新接上。' },
    { term: 'TOPO TA', en: 'Marketed by ThermoFisher; uses vaccinia virus topoisomerase I, which recognises the sequence 5-prime (C or T) CCTT 3-prime.', cn: 'TOPO TA 由 ThermoFisher 销售，使用 vaccinia 病毒的 topoisomerase I，识别序列 5′-(C/T)CCTT-3′。' },
    { term: 'What the kit supplies', en: 'A linearised vector with topoisomerase I already covalently bound to each 3-prime phosphate.', cn: '试剂盒提供的是一个线性化载体，其每个 3′ 磷酸上都已经共价结合了 topoisomerase I。' },
    { term: 'The speed', en: 'Ligation takes five minutes at room temperature, with high efficiency; several modifications exist, including directional cloning.', cn: '连接在室温下 5 分钟完成，效率很高；还有若干改良版本，包括可以定向克隆的版本。' }
  ],
  beyondPoints: [
    { term: 'The polymerase choice is forced', en: 'TA cloning requires Taq. A proofreading polymerase such as Pfu or Phusion gives blunt ends and simply will not work. So TA cloning inherently commits you to the low-fidelity enzyme, which is fine for subcloning a fragment you will sequence anyway but bad for a construct you intend to express. If you must combine them, you can add A-overhangs to a blunt Phusion product afterwards by a short incubation with Taq and dATP, known as A-tailing.', cn: 'TA 克隆必须用 Taq。带校对活性的聚合酶（Pfu、Phusion）产生平末端，根本无法使用。所以 TA 克隆天然地把你绑定在低保真度的酶上——对于反正要测序的亚克隆片段没问题，但对于打算表达的构建体就不好。如果一定要兼顾，可以先用 Phusion 扩增得到平末端产物，再用 Taq 加 dATP 短暂孵育补上 A 突出末端，这一步叫 A-tailing。' },
    { term: 'Where the energy comes from', en: 'Vaccinia topoisomerase I cleaves at CCCTT and forms a covalent phosphotyrosyl bond between the active-site tyrosine of the enzyme and the 3-prime phosphate of the DNA. The energy of the cleaved phosphodiester bond is stored in that protein-DNA linkage rather than being lost. When the 5-prime hydroxyl of the insert attacks, the enzyme releases itself and the bond re-forms, so no ATP and no ligase are required. That stored energy is exactly why the reaction takes five minutes at room temperature instead of an overnight incubation at 16 degrees.', cn: '能量是「存」在酶和 DNA 之间的共价键里的。Vaccinia topoisomerase I 在 CCCTT 处切开，并在酶活性位点的酪氨酸与 DNA 的 3′ 磷酸之间形成共价的磷酸酪氨酸键。被切开的磷酸二酯键的能量没有被浪费掉，而是储存在这个蛋白与 DNA 的连接里。当插入片段的 5′-OH 发起进攻时，酶就「松手」，键顺势重新形成——既不需要 ATP，也不需要连接酶。正是这份储存的能量，让反应只要室温 5 分钟，而不是 16 度过夜。' }
  ],
  terms: [
    { en: 'Terminal transferase activity', cn: '末端转移酶活性', def_en: 'The template-independent addition of a single nucleotide, almost always A, to the 3-prime end of a product by Taq polymerase.', def_cn: 'Taq polymerase 不依赖模板地在产物 3′ 端加上单个核苷酸（几乎总是 A）的活性。' },
    { en: 'TA cloning', cn: 'TA 克隆', def_en: 'Ligating a Taq PCR product with 3-prime A overhangs into a vector with 3-prime T overhangs, without any restriction digest.', def_cn: '把带 3′-A 突出末端的 Taq PCR 产物连进带 3′-T 突出末端的载体，完全不需要酶切。' },
    { en: 'A-tailing', cn: 'A 加尾', def_en: 'Adding 3-prime A overhangs to a blunt high-fidelity PCR product afterwards, by brief incubation with Taq and dATP.', def_cn: '事后用 Taq 加 dATP 短暂孵育，给高保真聚合酶产生的平末端产物补上 3′-A 突出末端。' },
    { en: 'Vaccinia topoisomerase I', cn: 'Vaccinia 拓扑异构酶 I', def_en: 'The enzyme used in TOPO cloning; recognises 5-prime (C/T)CCTT 3-prime and stores the bond energy as a covalent phosphotyrosyl linkage.', def_cn: 'TOPO 克隆所用的酶；识别 5′-(C/T)CCTT-3′，并把键能以共价磷酸酪氨酸键的形式储存起来。' },
    { en: 'Phosphotyrosyl bond', cn: '磷酸酪氨酸键', def_en: 'The covalent enzyme-DNA link that holds the energy of the cleaved phosphodiester bond, allowing re-ligation without ATP or ligase.', def_cn: '把被切开的磷酸二酯键的能量保存下来的酶–DNA 共价连接，使得重新连接不需要 ATP 也不需要连接酶。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does TA cloning force you to use Taq rather than a proofreading polymerase?',
      q_cn: '为什么 TA 克隆迫使你使用 Taq 而不是带校对活性的聚合酶？',
      options: ['Taq is much cheaper per reaction than a proofreading enzyme', 'Only Taq adds the 3-prime A overhang; Pfu and Phusion leave blunt ends', 'Proofreading polymerases cannot amplify a long template at all', 'Taq is the only polymerase that stays active at room temperature'],
      answer: 1,
      optionRefs: { 2: '1-5-1' },
      why_en: 'The whole method depends on the single 3-prime A that Taq adds template-independently. Pfu and Phusion leave blunt ends, which will not anneal to the 3-prime T overhangs of the vector. So TA cloning commits you to the low-fidelity enzyme — acceptable for a fragment you will sequence anyway, poor for a construct you intend to express. A-tailing with Taq and dATP afterwards is the workaround.',
      why_cn: '整个方法依赖于 Taq 不依赖模板加上的那一个 3′-A。Pfu 和 Phusion 留下平末端，无法与载体的 3′-T 突出末端退火。所以 TA 克隆把你绑定在低保真度的酶上——对反正要测序的片段可以接受，对打算表达的构建体就不好。变通办法是事后用 Taq 加 dATP 做 A-tailing。' },
    { type: 'mcq',
      q_en: 'Where does the energy for the TOPO ligation reaction come from?',
      q_cn: 'TOPO 连接反应的能量从哪里来？',
      options: ['ATP supplied in the reaction buffer, just as in a T4 ligation', 'The phosphotyrosyl bond linking the enzyme to the DNA 3-prime phosphate', 'T4 DNA ligase supplied ready-mixed in the TOPO reaction kit', 'Thermal energy from the room-temperature incubation itself'],
      answer: 1,
      optionRefs: { 0: '1-5-4' },
      why_en: 'When vaccinia topoisomerase I cleaves at CCCTT it does not waste the bond energy — it holds it in a covalent link between its own active-site tyrosine and the DNA 3-prime phosphate. The 5-prime hydroxyl of the insert then attacks, the enzyme releases itself, and the bond re-forms. No ATP and no ligase are needed, which is exactly why five minutes at room temperature is enough.',
      why_cn: 'Vaccinia topoisomerase I 在 CCCTT 处切开时并没有浪费键能，而是把它保存在自身活性位点酪氨酸与 DNA 3′ 磷酸之间的共价连接里。随后插入片段的 5′-OH 发起进攻，酶松手，键重新形成。既不需要 ATP 也不需要连接酶，这正是室温 5 分钟就够的原因。' },
    { type: 'mcq',
      q_en: 'What is the main practical disadvantage of plain TA cloning?',
      q_cn: '普通 TA 克隆最主要的实际缺点是什么？',
      options: ['It requires two compatible restriction enzymes', 'It is not directional, so the insert can go in either way round', 'It only works reliably with inserts under 500 base pairs', 'It leaves an eight-residue scar in the final construct'],
      answer: 1,
      optionRefs: { 0: '1-12', 3: '1-15' },
      why_en: 'Both ends of the product carry the same single A overhang and both vector ends carry the same T, so nothing distinguishes the two orientations and you have to screen for the right one. Ligation efficiency is also lower, and the linearised vector has to be bought. The eight-residue scar belongs to Gateway, not TA.',
      why_cn: '产物两端带的都是同样的单个 A 突出末端，载体两端也都是 T，没有任何东西能区分两种方向，所以必须再筛选出正确的那一个。此外连接效率也偏低，线性化载体还必须购买。8 个残基的疤痕是 Gateway 的问题，不是 TA 的。' },
    { type: 'short',
      q_en: 'Explain TOPO TA cloning and why it is so much faster than a conventional ligation.',
      q_cn: '解释 TOPO TA 克隆，以及它为什么比常规连接快这么多。',
      accept: ['vaccinia', 'topoisomerase', 'CCTT', 'covalent', 'tyrosyl', 'ATP', '5 min'],
      answer_en: 'TOPO TA, marketed by ThermoFisher, is TA cloning with the ligase replaced by an enzyme that carries its own energy. It uses vaccinia virus topoisomerase I, which recognises the sequence 5-prime C-or-T CCTT 3-prime. The kit supplies a linearised vector that already has topoisomerase I covalently bound to each 3-prime phosphate. The reason that matters is where the energy sits. When the topoisomerase cleaved the DNA it formed a covalent phosphotyrosyl bond between its own active-site tyrosine and the 3-prime phosphate, and the energy of the cleaved phosphodiester bond is stored in that protein-DNA linkage rather than being dissipated. So when the 5-prime hydroxyl of your PCR insert attacks, the enzyme simply releases itself and the phosphodiester bond re-forms. No ATP is consumed and no ligase is involved. That is why the reaction takes five minutes at room temperature instead of an overnight incubation at sixteen degrees, and why the efficiency is high. Several modifications exist, including directional versions that overcome the main weakness of ordinary TA cloning, which is that the single A overhangs are identical at both ends and so give no control over orientation.',
      answer_cn: 'TOPO TA 由 ThermoFisher 销售，本质上就是把连接酶换成一个自带能量的酶之后的 TA 克隆。它使用 vaccinia 病毒的 topoisomerase I，识别序列为 5′-(C/T)CCTT-3′。试剂盒提供的线性化载体，其每个 3′ 磷酸上都已经共价结合了 topoisomerase I。关键在于能量存在哪里：拓扑异构酶切开 DNA 的时候，在自身活性位点的酪氨酸与 3′ 磷酸之间形成了共价的磷酸酪氨酸键，被切开的磷酸二酯键的能量就储存在这个蛋白–DNA 连接里，而不是被耗散掉。因此当你的 PCR 插入片段的 5′-OH 发起进攻时，酶只需松手，磷酸二酯键就顺势重新形成。不消耗 ATP，也不涉及连接酶。这就是为什么反应只需室温 5 分钟，而不是 16 度过夜，而且效率很高。此外还有若干改良版本，包括定向版本，克服了普通 TA 克隆最主要的弱点——两端的单个 A 突出末端完全相同，因此无法控制插入方向。'
    }
  ],
  oral: {
    q_en: 'Explain TA cloning and TOPO TA cloning, and say what each is good and bad for.',
    q_cn: '解释 TA 克隆和 TOPO TA 克隆，并说明各自的优缺点。',
    model_en: 'TA cloning exploits a side activity of Taq polymerase. Taq has a terminal transferase activity, which means that in a template-independent way it adds a single three-prime A overhang to each end of the PCR product. That lets you ligate the product directly into a linearised vector that carries single three-prime T overhangs, using T4 ligase, with no restriction digest at any point. The convenience is obvious, but there are three disadvantages. It is not directional — both ends carry the same A and both vector ends the same T, so the insert can go in either way round and you have to screen. Ligation efficiency is lower than for a designed sticky end. And you have to buy the linearised vector rather than making it. There is also a constraint people often miss: TA cloning requires Taq specifically. A proofreading polymerase such as Pfu or Phusion produces blunt ends and simply will not work, so the method commits you to the low-fidelity enzyme. That is fine for subcloning a fragment you are going to sequence anyway, but poor for a construct you intend to express. If you need both, you can amplify with Phusion and then add the A-overhangs afterwards by a short incubation with Taq and dATP, which is called A-tailing. TOPO TA is the improved version. Topoisomerase I in general is a ubiquitous enzyme that cuts one of the two strands of double-stranded DNA, relaxes it, and re-anneals the strand. TOPO cloning uses the vaccinia virus topoisomerase I, which recognises five-prime C-or-T CCTT three-prime, and the kit supplies a linearised vector with that enzyme already covalently bound to each three-prime phosphate. The elegance is in where the energy is kept. When the enzyme cleaved the DNA, it formed a covalent phosphotyrosyl bond between its own active-site tyrosine and the three-prime phosphate, and the energy of the broken phosphodiester bond is stored in that protein-DNA linkage instead of being lost. So when the five-prime hydroxyl of your insert attacks, the enzyme releases itself and the bond re-forms spontaneously. No ATP, no ligase. That is exactly why the ligation takes five minutes at room temperature rather than overnight at sixteen degrees, and why the efficiency is high. Several modifications exist, including directional TOPO cloning, which removes the orientation problem that plain TA cloning has.',
    checklist: ['TA cloning uses the terminal transferase activity of Taq', 'Single 3-prime A overhang added to each end of the PCR product', 'Ligated with T4 ligase into a vector with 3-prime T overhangs', 'No restriction digest needed', 'Disadvantages: not directional, lower efficiency, vector must be bought', 'Hidden constraint: requires Taq — Pfu and Phusion give blunt ends', 'So you are committed to the low-fidelity enzyme; A-tailing is the workaround', 'Topoisomerase I cuts one strand, relaxes, re-anneals', 'TOPO TA uses vaccinia topoisomerase I, recognising (C/T)CCTT', 'Kit vector has the enzyme covalently bound to each 3-prime phosphate', 'Energy stored in the covalent phosphotyrosyl bond', 'Insert 5-prime OH attacks, enzyme releases, bond re-forms', 'No ATP and no ligase needed — 5 minutes at room temperature', 'Directional modifications exist']
  },
  bank: [
    { type: 'mcq',
      q_en: 'You amplified your gene with Phusion and now want to TA-clone it. What is wrong, and what fixes it?',
      q_cn: '你用 Phusion 扩增了基因，现在想做 TA 克隆。问题出在哪，怎么补救？',
      options: ['Nothing is wrong, since Phusion also leaves a 3-prime A overhang', 'Phusion leaves blunt ends; A-tail the product with Taq and dATP first', 'Phusion products are too long for TA cloning to work at all', 'The PCR product has to be dephosphorylated before ligation'],
      answer: 1,
      optionRefs: { 3: '1-5-4' },
      why_en: 'The single 3-prime A comes from the terminal transferase activity of Taq, which proofreading enzymes do not have — their 3-prime to 5-prime exonuclease trims the extra base off, leaving blunt ends that will not anneal to the vector T overhangs. A short incubation with Taq and dATP afterwards, called A-tailing, adds the overhangs and lets you keep the high-fidelity amplification.',
      why_cn: '那个单一的 3′-A 来自 Taq 的末端转移酶活性，而带校对活性的酶没有这个活性——它们的 3′→5′ 外切酶会把多出来的碱基修掉，留下平末端，无法与载体的 T 突出末端退火。之后用 Taq 加 dATP 短暂孵育（即 A-tailing）补上突出末端，就能保住高保真扩增的好处。' },
    { type: 'mcq',
      q_en: 'Why is TOPO TA ligation complete in five minutes at room temperature when a T4 ligation needs overnight at sixteen degrees?',
      q_cn: '为什么 TOPO TA 的连接在室温 5 分钟就完成，而 T4 连接需要 16 度过夜？',
      options: ['The TOPO vector is supplied at a far higher DNA concentration', 'The bond energy is already stored in the enzyme-DNA phosphotyrosyl link', 'Room temperature favours annealing of the single A overhang', 'Topoisomerase is simply a much faster enzyme than T4 ligase'],
      answer: 1,
      optionNotes: {
        2: { en: 'Annealing of a short overhang is favoured by cold, not by warmth, which is exactly why a T4 ligation is run at sixteen degrees. Room temperature is good enough for TOPO because there is nothing to wait for: the bond energy is already stored in the enzyme.', cn: '短 overhang 的退火是低温有利、而不是温度高有利，T4 ligation 之所以放在 16 度过夜就是这个道理。TOPO 之所以室温就够，是因为根本没有需要等的步骤：键能已经存在酶身上了。' }
      },
      why_en: 'This is a thermodynamic difference, not a kinetic one. When vaccinia topoisomerase I cleaved the vector at CCCTT it kept the energy of the broken phosphodiester bond in a covalent link to its own active-site tyrosine. The insert 5-prime hydroxyl attacks, the enzyme lets go, and the bond re-forms — no ATP, no ligase, and nothing to wait for.',
      why_cn: '这是热力学差别而不是动力学差别。Vaccinia topoisomerase I 在 CCCTT 处切开载体时，把断裂的磷酸二酯键的能量保存在与自身活性位点酪氨酸的共价连接里。插入片段的 5′-OH 一进攻，酶就松手，键顺势重新形成——不需要 ATP，不需要连接酶，也没有什么要等的。' },
    { type: 'mcq',
      q_en: 'Plain TA cloning gives you white colonies with the right insert size, but half your clones express nothing. What is the most likely explanation?',
      q_cn: '普通 TA 克隆得到了插入片段大小正确的白色菌落，但一半的克隆什么都不表达。最可能的原因是什么？',
      options: ['The vector was not dephosphorylated before the ligation was set up', 'TA cloning is not directional, so about half the inserts went in backwards', 'Taq misincorporation put a frameshift into every second clone', 'The single A overhangs had degraded before ligation was set up'],
      answer: 1,
      optionRefs: { 0: '1-5-4', 2: '1-5-1' },
      why_en: 'Both ends of the product carry the same single A and both vector ends the same T, so nothing distinguishes the two orientations and you expect roughly a fifty-fifty split. Insert size looks correct either way, which is why a size check alone does not catch it. Directional TOPO variants exist precisely to remove this.',
      why_cn: '产物两端都是同一个 A、载体两端都是同一个 T，没有任何东西区分两种方向，所以预期大致是一半一半。两种方向的插入片段大小看起来都正确，这就是为什么只查大小抓不出来。定向版本的 TOPO 存在的意义正是消除这一点。' },
    { type: 'short',
      q_en: 'Compare TA cloning and TOPO TA: what is the same, what is different, and what does each cost you?',
      q_cn: '比较 TA 克隆与 TOPO TA：哪些相同、哪些不同、各自的代价是什么？',
      accept: ['Taq', 'overhang', 'topoisomerase', 'ligase', 'directional', 'fidelity'],
      answer_en: 'What is the same is the front end. Both depend on the terminal transferase activity of Taq adding a single 3-prime A overhang to each end of the PCR product, and both put that product into a linearised vector with matching 3-prime T overhangs, with no restriction digest anywhere. That means both inherit the same constraint: you have to amplify with Taq, a low-fidelity enzyme, or A-tail a proofread product afterwards. What differs is how the joint is made. Plain TA cloning uses T4 ligase, so it is a conventional ATP-dependent ligation — slow, and with a lower efficiency than a designed sticky end because a single base overhang is a weak annealing interaction. TOPO TA replaces the ligase entirely with vaccinia virus topoisomerase I, supplied already covalently attached to each 3-prime phosphate of the vector, holding the energy of the cleaved bond in a phosphotyrosyl link. The insert attacks, the enzyme releases, the bond re-forms; five minutes at room temperature, no ATP, high efficiency. The costs: plain TA is cheap but not directional, has lower efficiency, and the linearised vector must be bought. TOPO is fast and efficient but noticeably more expensive, and only the directional variants solve the orientation problem that both plain versions share.',
      answer_cn: '相同的是前半段。两者都依赖 Taq 的末端转移酶活性在 PCR 产物两端各加一个 3′-A 突出末端，也都把产物放进带相应 3′-T 突出末端的线性化载体，全程不需要酶切。这意味着两者继承了同一个约束：要么用低保真的 Taq 扩增，要么事后对高保真产物做 A-tailing。不同的是连接方式。普通 TA 克隆用 T4 ligase，是常规的、依赖 ATP 的连接——慢，而且效率低于设计好的黏性末端，因为单碱基突出末端的退火作用很弱。TOPO TA 则完全用 vaccinia 病毒的 topoisomerase I 取代连接酶，该酶在试剂盒里已经共价结合在载体每个 3′ 磷酸上，把切开的键能保存在磷酸酪氨酸连接里。插入片段一进攻，酶松手，键重新形成；室温 5 分钟、不用 ATP、效率高。代价方面：普通 TA 便宜，但不定向、效率较低，而且线性化载体必须购买；TOPO 快且高效，但明显更贵，而且只有定向版本才解决了两种普通版本共有的方向问题。'
    }
  ]
},

{
  id: '1-17',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.17',
  enTitle: 'Ligation-independent cloning (LIC)',
  cnTitle: '非连接依赖克隆（LIC）',
  slides: 'L2 s.29–30',
  coverage: 'full',
  coverageNote: 'Slides 29–30, including In-Fusion. The single-dNTP trick that makes the long overhang is the mechanism the slide states but does not explain; it is in beyondPoints.',
  summary: {
    en: 'LIC makes single-stranded overhangs about fifteen bases long by running T4 DNA polymerase in exonuclease mode and stalling it at a designed position with a single dNTP. Overhangs that long anneal stably enough that no ligase is needed at all — the annealed product is transformed directly and the cell repairs the two nicks. It is cheap and scarless, but the junction sequence is constrained: the tails must lack one of the four bases.',
    cn: 'LIC 用 T4 DNA polymerase 的外切酶活性，配合只加一种 dNTP 让它停在设计好的位置，从而做出约 15 个碱基长的单链突出末端。这么长的末端退火已经足够稳定，完全不需要连接酶——退火产物直接转化，由细胞去修补那两个 nick。它便宜、无疤痕，但接头序列受限：尾巴必须缺少四种碱基中的一种。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.29', src: 'img/figures/L2_s29_1.webp' },
    { slide: 'L2 s.30', src: 'img/figures/L2_s30_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'LIC 做出约 **15 个碱基**的单链末端——**这么长的退火本身就够稳，所以完全不需要连接酶**，直接转化，两个 nick 交给细胞修。\n\n' +
            '代价是接头序列**不自由**：LIC 尾巴里必须整段缺少四种碱基中的一种。',
  skipIt: 'In-Fusion 用的那个菌株型号（Stellar / BW23474）不用背。老师在第 3 讲开头给第 2 讲做 RECAP 时写了 **Ligation independent cloning (LIC)** 和 **In-fusion cloning** 两条——**两个都被点名了**，所以原理要会讲。',
  explain: [
    {
      q: '只加一种 dNTP，怎么就能让酶停在你指定的那个碱基上？',
      a: '这是本节最漂亮的一步，值得慢慢走一遍。\n\n' +
         '**先记住 T4 DNA 聚合酶身上有两个方向相反的活性：**\n\n' +
         '**聚合活性**（5′→3′）：往前接碱基，但它**需要 dNTP 供货**。\n\n' +
         '**外切活性**（3′→5′）：往回啃碱基，而且**很强**。\n\n' +
         '**谁占上风，完全取决于管子里有什么。**dNTP 齐全时聚合占上风；一个 dNTP 都没有时，它就只能往回啃。\n\n' +
         '**现在看这个把戏。**假设你设计的尾巴里，前 15 个碱基**一个 G 都没有**。你把 PCR 产物和 T4 DNA 聚合酶放在一起，**只加 dGTP，别的三种一概不给**。\n\n' +
         '**第一步：**没有 dATP、dCTP、dTTP 可用，聚合活性开不了工，外切活性一路往回啃。\n\n' +
         '**第二步：**啃啊啃，啃到第 16 位——**这里是一个 G**。它把这个 G 也啃掉了。\n\n' +
         '**第三步：**就在这一瞬间，管子里**恰好有 dGTP**。聚合活性立刻把这个 G **补了回去**。\n\n' +
         '**第四步：**补回去之后，下一个要啃的又是它，于是再啃掉、再补上、再啃掉、再补上——酶在这个碱基上进入了一个**无效循环（futile cycle）**，卡住不动了。\n\n' +
         '**结果：一个位置精确、长约 15 个核苷酸的单链 5′ 突出末端。**位置由你在设计尾巴时「把第一个 G 放在哪里」决定。\n\n' +
         '换句话说：**你不是让酶停下来，你是给它设了一个它永远走不出去的死循环。**',
      takeaway: '缺三种 dNTP 所以只能往回啃；啃到第一个 G 就被补回来，酶卡在原地。停的位置由你设计。'
    },
    {
      q: '15 个碱基的末端和 4 个碱基的黏性末端，差别到底有多大？',
      a: '**差好几个数量级，而且这就是 LIC 敢不用连接酶的全部理由。**\n\n' +
         '每多一对碱基配对，两条链结合的自由能就多一份，而结合的稳定性跟自由能是**指数关系**——不是线性。所以从 4 个碱基到 15 个碱基，稳定性不是涨了不到四倍，是涨了好几个数量级。\n\n' +
         '**具体后果对比一下：**\n\n' +
         '**4 个碱基（限制酶给的黏性末端）**：室温下贴一下就散，所以必须 16 °C 压着让它多贴一会儿，还得靠**连接酶赶紧焊住**——不焊住就白贴了。这就是第 1-12 节那个「酶要高温、退火要低温」的拉锯。\n\n' +
         '**15 个碱基**：贴上就**基本不再分开**。既然不会散，那就**根本不需要焊**。\n\n' +
         '所以 LIC 的做法是：退火完直接拿去转化。分子上留着**两个 nick**（每个接口一条链没接上），细菌进去之后自己就把它们修好了——这一点跟第 1-12 节去磷酸化载体后留下 nick 是同一个道理。\n\n' +
         '**「ligation-independent」是字面意思：真的没有连接这一步。**',
      takeaway: '结合稳定性随配对数指数上升。15 个碱基贴上就不散，所以焊接这一步可以整个省掉。'
    },
    {
      q: '这么好，为什么后来 Gibson 把 LIC 挤掉了？',
      a: '**因为那个漂亮的把戏是有代价的，而且代价正好卡在最要紧的地方。**\n\n' +
         '回想停位是怎么造出来的：**靠「尾巴里缺一种碱基」**。这意味着 LIC 的接头序列**不是自由的**——整段十几个碱基的尾巴里，某一种碱基一次都不能出现。\n\n' +
         '**而 Gibson 对接头序列没有任何约束。**你想让接缝是什么就是什么。\n\n' +
         '这一条是分水岭。其余的差别都是次要的：\n\n' +
         '**载体要求**：LIC 需要载体带兼容的 LIC 序列；Gibson **接受任何线性化载体**。\n\n' +
         '**片段数**：LIC 通常连两个；Gibson 常规五六个。\n\n' +
         '**操作**：LIC 载体和插入片段要**分开反应再混合**；Gibson **全在一管**。\n\n' +
         '两者都是无疤痕的，所以在「要真实 N 端」这类题目里它们是同一类答案。但在通用克隆场景下，**灵活性赢了精巧**。',
      takeaway: '停位靠缺一种碱基造出来，所以接头序列受限。Gibson 零约束——这一条就是胜负手。'
    },
    {
      q: 'In-Fusion 跟 LIC 是什么关系？',
      a: '**同一个思路的商业版**，由 Clontech / TaKaRa 卖。\n\n' +
         '核心动作完全一样：**把两端做出长长的单链突出，靠退火而不是连接酶把片段接起来。**\n\n' +
         '换掉的是那个酶——**In-Fusion 用的是痘苗病毒的 3′→5′ 外切酶**，而不是 T4 DNA 聚合酶。配套还卖自己的感受态细胞（Stellar，菌株 BW23474）。\n\n' +
         '顺带留意一个巧合：**痘苗病毒（vaccinia）在这一章出现了两次**——TOPO 用的是它的拓扑异构酶 I，In-Fusion 用的是它的外切酶。病毒的工具箱确实好用。\n\n' +
         '考试里的归类很清楚：**In-Fusion 跟 LIC、Gibson 属于同一阵营**——无疤痕、不依赖限制酶位点。题目里问「需要真实 N 端怎么办」，这三个都是可以给的答案。',
      takeaway: 'In-Fusion = LIC 的商业版，换成痘苗病毒外切酶。归类上跟 LIC、Gibson 同阵营。'
    }
  ],
  points: [
    { term: 'When', en: 'Developed in the 1990s.', cn: '20 世纪 90 年代发展起来。' },
    { term: 'Advantages', en: 'Lower cost, and no extra bases between the joined fragments — it is scarless.', cn: '优点：成本较低，连接处不引入多余碱基——无疤痕。' },
    { term: 'Step 1', en: 'PCR-amplify your gene of interest, adding LIC sequences at both ends.', cn: '第一步：PCR 扩增目的基因，在两端加上 LIC 序列。' },
    { term: 'Step 2', en: 'Linearise the plasmid, by restriction digest or by inverse PCR. It must carry compatible LIC sequences.', cn: '第二步：把质粒线性化，用酶切或反向 PCR 都可以。质粒必须带有相容的 LIC 序列。' },
    { term: 'Step 3', en: 'Run separate reactions for vector and insert, then mix them.', cn: '第三步：载体和插入片段分开反应，然后混合。' },
    { term: 'In-Fusion', en: 'The commercial equivalent, marketed by Clontech/TaKaRa. LIC-like cloning that uses vaccinia 3-prime to 5-prime exonuclease instead of T4 DNA polymerase.', cn: 'In-Fusion 是其商业化版本，由 Clontech/TaKaRa 销售。原理与 LIC 类似，但用 vaccinia 的 3′→5′ 外切酶代替 T4 DNA polymerase。' },
    { term: 'In-Fusion cells', en: 'Uses competent Stellar cells, E. coli strain BW23474.', cn: 'In-Fusion 使用 Stellar 感受态细胞，即大肠杆菌 BW23474 菌株。' }
  ],
  beyondPoints: [
    { term: 'The single-dNTP trick', en: 'T4 DNA polymerase has two activities: a 5-prime to 3-prime polymerase that needs template, primer and dNTPs, and a strong template-independent 3-prime to 5-prime exonuclease. Which one dominates depends entirely on what nucleotides are in the tube. Design the LIC tails, about twelve to eighteen bases, so that they lack one of the four bases — say no G in the top-strand tail. Incubate the PCR product with T4 DNA polymerase and only dGTP. With no other dNTPs available the exonuclease chews back the 3-prime end, until it reaches the first position where it would have to remove a G. There the polymerase activity immediately re-adds it from the dGTP present, and the enzyme stalls in a futile cycle at that exact base. The result is a precisely defined single-stranded 5-prime overhang about fifteen nucleotides long.', cn: 'T4 DNA polymerase 有两种活性：需要模板、引物和 dNTP 的 5′→3′ 聚合酶活性，以及强的、不依赖模板的 3′→5′ 外切酶活性。哪一种占上风，完全取决于管子里有哪些核苷酸。把 LIC 尾巴（约 12–18 bp）设计成缺少四种碱基中的一种——比如上链尾巴里不含 G。然后把 PCR 产物与 T4 DNA polymerase 和唯一的 dGTP 一起孵育。由于没有其他 dNTP 可用，外切酶开始从 3′ 端往回啃，一直啃到第一个「需要移除 G」的位置。在那里聚合酶活性立刻用管中的 dGTP 把它补回去，酶就在这个碱基上陷入无效循环、停住了。结果是一个位置精确定义的、约 15 nt 的单链 5′ 突出末端。' },
    { term: 'Why no ligase is needed', en: 'Do the same to the vector with the complementary design. Two fifteen-base overhangs anneal so stably that no ligase is required — you transform the annealed product directly and the cell repairs the two nicks. That is the literal meaning of ligation-independent. Compared with the four-nucleotide sticky ends left by a restriction enzyme, a fifteen-nucleotide overhang is several orders of magnitude more stable on annealing.', cn: '对载体做同样的处理，只是设计成互补的。两条 15 个碱基的突出末端退火后极其稳定，稳定到根本不需要连接酶——直接把退火产物转化进细胞，由细胞去修补那两个 nick。这正是 ligation-independent 的字面含义。与限制酶产生的 4 nt 黏性末端相比，15 nt 末端的退火强度要高出几个数量级。' },
    { term: 'The price of the trick', en: 'Because the stall position is created by omitting one base, the junction sequence is not free — the LIC tails must lack one of the four bases throughout. That constraint is the single most important practical difference from Gibson, which imposes none, and it is the reason Gibson largely displaced LIC for general cloning.', cn: '因为「停住」的位置是靠省略某一种碱基造出来的，接头序列并不自由——LIC 尾巴全程都必须缺少四种碱基中的一种。这个限制是它与 Gibson 之间最重要的实际差别（Gibson 完全没有这个约束），也是 Gibson 在通用克隆中基本取代 LIC 的原因。' }
  ],
  terms: [
    { en: 'Ligation-independent cloning', cn: '非连接依赖克隆', def_en: 'Joining vector and insert through overhangs long enough to anneal stably without a ligase; the cell repairs the nicks after transformation.', def_cn: '通过足够长、能够稳定退火的突出末端连接载体与插入片段，不使用连接酶；nick 在转化后由细胞修补。' },
    { en: 'T4 DNA polymerase exo mode', cn: 'T4 DNA 聚合酶外切模式', def_en: 'Running the enzyme with a single dNTP so its 3-prime to 5-prime exonuclease dominates and stalls at the first position requiring that base.', def_cn: '只提供一种 dNTP，使该酶的 3′→5′ 外切酶活性占主导，并在第一个需要该碱基的位置停住。' },
    { en: 'Nick', cn: '缺口（切口）', def_en: 'A break in one strand of a duplex with both bases still present; repaired by the host cell after transformation in LIC and In-Fusion.', def_cn: '双链中一条链上的断裂，两侧碱基都还在；在 LIC 和 In-Fusion 中由宿主细胞在转化后修补。' },
    { en: 'In-Fusion', cn: 'In-Fusion 克隆', def_en: 'The Clontech/TaKaRa commercial LIC-like system, using vaccinia 3-prime to 5-prime exonuclease and Stellar cells.', def_cn: 'Clontech/TaKaRa 的商业化 LIC 类系统，使用 vaccinia 的 3′→5′ 外切酶和 Stellar 细胞。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In LIC, what stops the T4 DNA polymerase exonuclease at a defined position?',
      q_cn: 'LIC 中，是什么让 T4 DNA polymerase 的外切酶活性停在一个确定的位置？',
      options: ['A blocking group is built into the primer at the intended stop point', 'Only one dNTP is supplied, so the enzyme idles at the first matching base', 'The enzyme is heat-inactivated after a fixed incubation time', 'A restriction site in the tail blocks the exonuclease from going further'],
      answer: 1,
      optionNotes: {
        2: { en: 'Stopping by the clock would leave every molecule at a slightly different position and give a spread of end points rather than one defined overhang. The stall is written into the sequence: the exonuclease reaches the first base matching the single supplied dNTP, the polymerase puts it straight back, and the enzyme idles there on every molecule.', cn: '靠时间来喊停，只会让每个分子停在略微不同的位置，得到一段长度分布，而不是一个确定的 overhang。停点是写在序列里的：exonuclease 退到第一个对应那个唯一提供的 dNTP 的碱基，polymerase 立刻又把它补回去，酶就在每个分子的同一个碱基上空转。' }
      },
      why_en: 'The tail is designed to lack one base, say G, and the reaction contains only dGTP. The exonuclease chews back until the first position where a G would have to be removed; there the polymerase activity puts it straight back, and the enzyme stalls in a futile cycle at exactly that base. The stall position is therefore set by the sequence design, not by timing.',
      why_cn: '尾巴被设计成缺少某一种碱基（比如 G），而反应里只有 dGTP。外切酶往回啃，直到第一个需要移除 G 的位置；在那里聚合酶活性立刻把它补回去，酶就在这个碱基上陷入无效循环停住了。所以停住的位置是由序列设计决定的，而不是靠控制时间。' },
    { type: 'mcq',
      q_en: 'Why is no ligase needed in LIC?',
      q_cn: '为什么 LIC 不需要连接酶？',
      options: ['T4 DNA polymerase carries its own ligase activity alongside the exonuclease, so it seals both nicks before transformation', 'The overhangs are fifteen bases long, so the annealing survives transformation', 'The fragments are joined by blunt-end ligation once inside the cell', 'The vector is supplied with the insert already ligated into it'],
      answer: 1,
      optionNotes: {
        0: { en: 'Two different phage T4 enzymes are being merged into one. T4 DNA polymerase has a 5-prime to 3-prime polymerase activity and a 3-prime to 5-prime exonuclease activity and nothing else; T4 DNA ligase is a separate protein, and the whole point of the method is that it is not used.', cn: '这是把噬菌体 T4 的两个不同的酶合成了一个。T4 DNA polymerase 只有 5-prime 到 3-prime 的聚合活性和 3-prime 到 5-prime 的 exonuclease 活性，此外什么都没有；T4 DNA ligase 是另一个蛋白，而这个方法的要点恰恰是不用它。' }
      },
      why_en: 'A fifteen-nucleotide overhang anneals orders of magnitude more stably than the four-nucleotide sticky end a restriction enzyme leaves. The annealed product holds together well enough to be transformed directly, and the host cell repairs the two remaining nicks. That is literally what ligation-independent means.',
      why_cn: '15 nt 的突出末端退火稳定性比限制酶留下的 4 nt 黏性末端高出几个数量级。退火产物本身就足够牢固，可以直接转化，剩下的两个 nick 由宿主细胞修补。这就是 ligation-independent 的字面意思。' },
    { type: 'mcq',
      q_en: 'What is the main sequence constraint that LIC imposes and Gibson does not?',
      q_cn: 'LIC 施加而 Gibson 没有的主要序列限制是什么？',
      options: ['The junction must be GC-rich', 'The LIC tails must lack one of the four bases throughout', 'The insert must be under one kilobase', 'The vector must carry a type IIS recognition site outside the insertion point'],
      answer: 1,
      optionRefs: { 3: '1-14' },
      why_en: 'The stall position only exists because one base is absent from the tail, so the tail sequence is not free. Gibson imposes no sequence requirement on the overlap at all, and that flexibility is why it largely displaced LIC for general cloning.',
      why_cn: '「停住」的位置之所以存在，正是因为尾巴里缺少某一种碱基，所以尾巴序列并不自由。Gibson 对重叠序列没有任何序列要求，正是这种灵活性让它在通用克隆中基本取代了 LIC。' },
    { type: 'short',
      q_en: 'Explain the mechanism of LIC, from primer design to transformation.',
      q_cn: '解释 LIC 的机制，从引物设计一直讲到转化。',
      accept: ['T4', 'exonuclease', 'dNTP', 'overhang', 'anneal', 'nick', 'ligase'],
      answer_en: 'You PCR-amplify the gene of interest with primers that add LIC sequences of about twelve to eighteen bases at both ends, and you linearise a plasmid carrying compatible LIC sequences, either by restriction digest or by inverse PCR. The trick is in what happens next. T4 DNA polymerase has two activities: a 5-prime to 3-prime polymerase that needs template, primer and dNTPs, and a strong template-independent 3-prime to 5-prime exonuclease. Which one dominates depends entirely on what nucleotides are present. The LIC tails are designed to lack one of the four bases — say there is no G in the top-strand tail — and the reaction contains T4 DNA polymerase and only dGTP. With no other nucleotides available the exonuclease chews back the 3-prime end, until it reaches the first position where it would have to remove a G. There the polymerase activity immediately re-adds it, and the enzyme stalls in a futile cycle at that exact base. The result is a precisely defined single-stranded 5-prime overhang about fifteen nucleotides long. Vector and insert are treated in separate reactions, with complementary designs, and then simply mixed. Fifteen-base overhangs anneal so stably that no ligase is needed at all — you transform the annealed product directly, and the host cell repairs the two nicks. The advantages are low cost and a scarless junction. The limitation is that the tail sequence must lack one base, which is the constraint Gibson does not have.',
      answer_cn: '先用带有 LIC 序列（约 12–18 个碱基）的引物 PCR 扩增目的基因，同时把带有相容 LIC 序列的质粒线性化，用酶切或反向 PCR 都可以。关键在下一步。T4 DNA polymerase 有两种活性：需要模板、引物和 dNTP 的 5′→3′ 聚合酶活性，以及强的、不依赖模板的 3′→5′ 外切酶活性；哪一种占上风完全取决于管子里有哪些核苷酸。LIC 尾巴被设计成缺少四种碱基中的一种——比如上链尾巴里没有 G——而反应中只有 T4 DNA polymerase 和 dGTP。由于没有其他核苷酸，外切酶从 3′ 端往回啃，直到第一个需要移除 G 的位置；在那里聚合酶活性立刻把它补回去，酶就在这个碱基上停住，陷入无效循环。结果是一个位置精确、约 15 nt 的单链 5′ 突出末端。载体和插入片段在各自的反应里分别处理，设计互补，然后直接混合。15 个碱基的突出末端退火极其稳定，完全不需要连接酶——退火产物直接转化，剩下的两个 nick 由宿主细胞修补。优点是成本低、接头无疤痕。局限是尾巴序列必须缺少一种碱基，而这正是 Gibson 没有的限制。'
    }
  ],
  oral: {
    q_en: 'What is ligation-independent cloning, and how does it work without a ligase?',
    q_cn: '什么是非连接依赖克隆，它在没有连接酶的情况下是怎么工作的？',
    model_en: 'LIC was developed in the 1990s, and its two selling points are lower cost and a scarless junction — no extra bases between the joined fragments. The protocol has three steps. You PCR-amplify your gene of interest with primers that add LIC sequences at both ends. You linearise your plasmid, either by restriction digest or by inverse PCR, and it has to carry compatible LIC sequences. And you run separate reactions for the vector and the insert, then mix them. The interesting part is how the overhangs are made, because no enzyme that cuts is involved at all. T4 DNA polymerase has two activities: a 5-prime to 3-prime polymerase that requires template, primer and dNTPs, and a strong 3-prime to 5-prime exonuclease that is template-independent. Which activity dominates depends entirely on what nucleotides are in the tube. So you design the LIC tails, about twelve to eighteen bases, to lack one of the four bases — let us say the top-strand tail contains no G. Then you incubate the PCR product with T4 DNA polymerase and only dGTP. With no other dNTPs available, the exonuclease chews back the 3-prime end, and it keeps going until it reaches the first position where it would have to remove a G. At that point the polymerase activity immediately re-adds it from the dGTP that is present, so the enzyme stalls in a futile cycle at that exact base. What you get is a precisely defined single-stranded 5-prime overhang of about fifteen nucleotides. You do the same to the vector with the complementary design, and then you just mix them. Two fifteen-base overhangs anneal so stably — orders of magnitude more stably than the four-nucleotide sticky end from a restriction enzyme — that no ligase is needed at all. You transform the annealed product directly and the cell repairs the two nicks. That is what ligation-independent literally means. There is a commercial equivalent, In-Fusion from Clontech or TaKaRa, which is LIC-like but uses vaccinia 3-prime to 5-prime exonuclease instead of T4 DNA polymerase, and comes with competent Stellar cells, E. coli strain BW23474. The one limitation I would flag is that because the stall position is created by omitting a base, the tail sequence is not free — it must lack one of the four bases. Gibson has no such constraint, and that is essentially why Gibson displaced LIC for general cloning.',
    checklist: ['Developed in the 1990s; cheap and scarless', 'Step 1: PCR the insert adding LIC sequences both ends', 'Step 2: linearise a vector with compatible LIC sequences', 'Step 3: separate reactions, then mix', 'T4 DNA polymerase has polymerase AND 3-prime to 5-prime exonuclease', 'Which one wins depends on the dNTPs present', 'Tails designed to lack one base, e.g. no G', 'Incubate with only dGTP', 'Exonuclease chews back until it must remove a G', 'Polymerase re-adds it — futile cycle, enzyme stalls exactly there', 'Result: defined 15-nt single-stranded 5-prime overhang', 'Same for the vector, complementary design', '15-base overhangs anneal stably — no ligase needed', 'Transform directly; the cell repairs the nicks', 'In-Fusion: same idea, vaccinia exonuclease, Stellar cells', 'Limitation: tail sequence must omit one base — Gibson does not']
  },
  bank: [
    { type: 'mcq',
      q_en: 'If you supplied all four dNTPs to the T4 DNA polymerase step in LIC, what would happen?',
      q_cn: '如果在 LIC 的 T4 DNA polymerase 步骤里加入全部四种 dNTP，会发生什么？',
      options: ['Nothing changes, because the exonuclease chews back the 3-prime end regardless of which nucleotides are supplied', 'No overhang forms, since the polymerase fills in behind the exonuclease', 'The overhang comes out roughly twice as long as designed', 'The enzyme switches over from polymerase to ligase activity'],
      answer: 1,
      why_en: 'Which of the two activities dominates is decided entirely by what nucleotides are available. With all four present the polymerase can always re-add whatever the exonuclease removes, so the enzyme idles and no single-stranded end accumulates. The whole method depends on withholding three of the four.',
      why_cn: '哪一种活性占主导，完全由可用的核苷酸决定。四种都在的时候，聚合酶总能把外切酶去掉的碱基补回去，酶就空转，不会积累出单链末端。整个方法依赖于故意不给其中三种。' },
    { type: 'mcq',
      q_en: 'Why must the LIC tail be designed to lack one of the four bases?',
      q_cn: '为什么 LIC 的尾巴必须设计成缺少四种碱基中的一种？',
      options: ['To keep the single-stranded overhang free of secondary structure', 'The first occurrence of that base is what stalls the exonuclease', 'To hold the melting temperature of the long overhang down', 'T4 DNA polymerase is unable to read that base on the template'],
      answer: 1,
      why_en: 'The exonuclease chews back until it reaches the first position requiring the one nucleotide that is present in the tube, and there the polymerase re-adds it in a futile cycle. If that base occurred earlier in the tail the stall would happen earlier and the overhang would be the wrong length; if it never occurred the exonuclease would not stop at all. The design constraint and the mechanism are the same thing.',
      why_cn: '外切酶一路往回啃，直到遇到第一个需要「管子里那种核苷酸」的位置，聚合酶在那里把它补回去、陷入无效循环。如果那种碱基在尾巴里出现得更早，停住的位置就会提前、突出末端长度就不对；如果它根本不出现，外切酶就完全不会停。设计约束和机制本来就是同一件事。' },
    { type: 'mcq',
      q_en: 'In-Fusion differs from classic LIC in which respect?',
      q_cn: 'In-Fusion 与经典 LIC 的区别在哪里？',
      options: ['It relies on a ligase to seal the junction rather than on annealing', 'It uses a vaccinia exonuclease in place of T4 DNA polymerase', 'It joins the fragments isothermally at fifty degrees with a three-enzyme mix', 'It leaves an eight-residue scar behind in the final protein'],
      answer: 1,
      optionRefs: { 0: '1-18', 2: '1-18', 3: '1-15' },
      why_en: 'In-Fusion, from Clontech/TaKaRa, is the same idea with a different exonuclease. It still relies on long complementary overhangs annealing without a ligase, and the nicks are still repaired by the cell after transformation. Isothermal fifty degrees and an internal ligase belong to Gibson; the eight-residue scar belongs to Gateway.',
      why_cn: 'Clontech/TaKaRa 的 In-Fusion 是同一个思路换了一种外切酶。它同样依靠长互补末端在没有连接酶的情况下退火，nick 同样在转化后由细胞修补。50 度等温和自带连接酶是 Gibson 的特征；8 个残基的疤痕是 Gateway 的。' },
    { type: 'short',
      q_en: 'Why is a fifteen-base overhang enough to skip the ligase, when a four-base sticky end is not?',
      q_cn: '为什么 15 个碱基的突出末端就足以省掉连接酶，而 4 个碱基的黏性末端不行？',
      accept: ['anneal', 'stable', 'orders of magnitude', 'nick', 'transform'],
      answer_en: 'It is a question of how stable the annealed intermediate is, not of whether a covalent bond eventually forms. A four-nucleotide sticky end of the kind a restriction enzyme leaves is a very weak interaction — the two fragments come apart again readily at room temperature, so the ligase has to trap the joint covalently before it dissociates. A fifteen-nucleotide overhang has roughly four times the base pairing and its annealing is orders of magnitude more stable; the joined molecule simply stays together. That is stable enough to survive handling and transformation as a nicked circle, and once inside, the host cell repairs the two nicks with its own ligase. So the ligation still happens — it just happens in the cell rather than in the tube, which is why the method is called ligation-independent rather than ligation-free. The same logic explains why Gibson uses twenty to forty base pairs of overlap: more overlap, more stability, more fragments joinable at once.',
      answer_cn: '这是退火中间体有多稳定的问题，而不是最终会不会形成共价键的问题。限制酶留下的那种 4 个核苷酸的黏性末端相互作用非常弱——两个片段在室温下很容易又分开，所以必须靠连接酶在它解离之前把接头共价固定住。15 个核苷酸的突出末端碱基配对数是它的近四倍，退火稳定性高出几个数量级；连好的分子就是不会散开。这个稳定程度足以熬过操作和转化过程，以带 nick 的环状形式存在；进入细胞后，宿主用自己的连接酶把两个 nick 修补好。所以连接仍然发生了——只是发生在细胞里而不是管子里，这也是它叫 ligation-independent 而不是 ligation-free 的原因。同样的逻辑解释了 Gibson 为什么用 20–40 bp 的重叠：重叠越长越稳定，一次能接的片段也越多。'
    }
  ]
},

{
  id: '1-18',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.18',
  enTitle: 'Gibson assembly',
  cnTitle: 'Gibson 组装',
  slides: 'L2 s.31–32',
  coverage: 'full',
  coverageNote: 'Slides 31–32 including the LIC vs Gibson comparison figure. The three-enzyme choreography and why the enzymes do not fight each other are in beyondPoints — that is the point most likely to be pushed on.',
  summary: {
    en: 'Gibson assembly joins several overlapping DNA fragments in one isothermal reaction at fifty degrees, using three enzymes at once: T5 exonuclease to expose single strands, Phusion to fill the gaps, and Taq ligase to seal the nicks. It eliminates restriction digestion entirely and the joins are seamless. The reason the three enzymes do not destroy each other’s work is that T5 exonuclease is heat-labile and dies early in the incubation.',
    cn: 'Gibson 组装在 50 度的等温反应中一次连接多个带重叠序列的 DNA 片段，同时用三种酶：T5 exonuclease 露出单链、Phusion 补齐缺口、Taq ligase 封住 nick。它完全免去了酶切步骤，接头无缝。三种酶之所以不会互相拆台，是因为 T5 exonuclease 不耐热，在孵育早期就自己失活了。'
  },
  figures: [
    { src: 'img/lic-vs-gibson.webp',
      alt: 'Diagram comparing Gibson assembly and In-Fusion cloning step by step: exonuclease direction, gap filling, nick sealing, and clone status before transformation',
      caption_en: 'The slide’s own comparison — technically Gibson against In-Fusion, the commercial LIC-like method, but the mechanism is the same idea worked through visually. Which exonuclease chews back which end is the top row; how the resulting gaps get filled is the second; and the key difference is whether the nicks are sealed before transformation, as in Gibson via its own ligase, or left for the cell to repair after transformation, as in In-Fusion and LIC. Source: PESB Lecture 2, "LIC vs Gibson".',
      caption_cn: '幻灯片自己给出的对比——严格说是 Gibson 与 In-Fusion（§1.17 提到的那个商业化 LIC 类方法）的对比，但机制是同一个思路的可视化展开。第一行是哪种外切酶啃掉哪一端；第二行是产生的缺口怎么补上；而关键差别在于 nick 是在转化之前就封好（Gibson，用它自带的连接酶），还是留给细胞在转化之后修补（In-Fusion 和 LIC）。来源：PESB 第 2 讲，"LIC vs Gibson"。' }
  ],
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.31', src: 'img/figures/L2_s31_1.webp' },
    { slide: 'L2 s.32', src: 'img/figures/L2_s32_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '三个酶在同一管、同一个 50 °C 下工作，靠的是**热稳定性的差异**排出先后：**T5 exonuclease 不耐热，造完单链末端就自己失活退场**，剩下 Phusion 补缺口、Taq ligase 封 nick。\n\n' +
            '注意连接酶是 **Taq 不是 T4**——T4 在 50 °C 会变性。',
  skipIt: 'NEBuilder HiFi 这个商品名、以及「15 kb、90%」这些数字，不用死背。老师在第 3 讲开头给第 2 讲做 RECAP 时写了 **Gibson assembly**——方法被点名了，机制要会讲。',
  explain: [
    {
      q: '三个酶丢在同一管里，为什么不互相拆台？',
      a: '**因为它们的先后顺序不是靠你分步加样排出来的，是靠「谁先死」排出来的。**\n\n' +
         '走一遍这管反应：\n\n' +
         '**T5 exonuclease** 从每个片段的 **5′ 端往里啃**，露出单链的 3′ 突出。两个片段末端设计好的 **20–40 bp 同源序列**就此互补配上，自己贴在一起。\n\n' +
         '**然后 T5 必须消失。**因为它接下来会继续啃——啃到已经退火好的产物上，把你刚拼好的东西拆掉。\n\n' +
         '**它确实消失了：T5 exonuclease 不耐热。**在 50 °C 下它一边干活一边失活，干完该干的就自己退场了。\n\n' +
         '**留下来的两个都是耐热的**：Phusion 把单链区补齐，Taq ligase 把剩下的 nick 封住。\n\n' +
         '**所以这里的「顺序」是一个热力学性质，不是一个操作步骤。**这是整个方法最聪明的地方——它把「什么时候该停」这件事**写进了酶的性质里**，而不是交给操作者。\n\n' +
         '**反过来想一下就更清楚了：如果 T5 exonuclease 是耐热的会怎样？**它不会退场，会继续把已经退火好的双链啃开，反应永远到不了终点——你什么都拿不到。\n\n' +
         '**还有一个容易漏的细节：连接酶是 Taq DNA ligase，不是 T4 DNA ligase。**原因很简单：T4 在 50 °C 会变性。前面所有章节里的连接酶都是 T4，只有这里换了，就是因为温度。',
      takeaway: 'T5 不耐热 → 造完末端自己死掉 → 不会拆自己的成果。顺序来自热稳定性差异。'
    },
    {
      q: '为什么重叠区要 20–40 bp，不能像限制酶那样 4 个碱基就行？',
      a: '因为 **Gibson 没有人在旁边帮它固定中间态，而且温度还高。**\n\n' +
         '限制酶那 4 个碱基的黏性末端之所以够用，是因为**连接酶会立刻赶来焊住**——只要贴住那么一瞬间就行，而且反应跑在 16 °C。\n\n' +
         'Gibson 里两个片段必须**靠这段同源序列自己找到对方、自己稳定地贴住**，等 Phusion 慢慢补完、Taq ligase 慢慢封完。**而这一切发生在 50 °C。**\n\n' +
         '50 °C 下，4 个碱基的双链一秒都待不住。要在这个温度下稳定存在，配对长度得上到 20 个碱基以上。\n\n' +
         '**所以有一条通用规律值得记：温度越高，需要的重叠越长。**这一条在引物设计（Tm）、杂交实验、PCR 退火温度里都是同一件事。\n\n' +
         '（NEBuilder HiFi 能容忍到 16–20 bp 的较短重叠、以及 GC 富集的接缝，靠的是优化过的酶配方，不是推翻了这条规律。）',
      takeaway: '50 °C 下要靠自己贴住，所以配对必须够长。温度越高，需要的重叠越长。'
    },
    {
      q: '幻灯片为什么特意提醒「接缝要测序」？',
      a: '因为**接缝上的碱基不是你提供的，是酶补出来的**。\n\n' +
         '想清楚这一点：T5 exonuclease 把一段 5′ 端**啃掉了**，那些碱基是真的没了。后来 Phusion **重新把它们填回去**——填的依据是对面那条链。\n\n' +
         '所以整个接缝区域，经历了一次「拆掉—重建」。重建时是可能出错的。\n\n' +
         '**而这个位置恰恰是你最容易忘记检查的地方。**你会去测你的基因（那是你关心的），但接缝在基因的边界上，可能落在你测序引物覆盖不到的地方，或者你觉得「那里又没有编码信息」。\n\n' +
         '**问题在于接缝往往正好在阅读框里**——如果它连着一个标签、一个信号肽，那里少一个碱基就是整段移码。\n\n' +
         '还有一点：**菌落 PCR 查不出来。**菌落 PCR 只告诉你长度对不对，而少一个碱基在胶上根本看不出来。\n\n' +
         '所以规矩是：**Gibson 之后，测序要覆盖每一条接缝，而不只是覆盖你的基因。**',
      takeaway: '接缝碱基是被啃掉后重新填回去的，可能出错。而且菌落 PCR 看不出来，只能测序。'
    },
    {
      q: 'Gibson 和 LIC 并排放，真正的分水岭是哪一条？',
      a: '**序列约束。其余全是次要的。**\n\n' +
         '**LIC**：尾巴里必须整段缺少某一种碱基（那是它造停位的手段）。**接缝序列不自由。**\n\n' +
         '**Gibson**：对接缝序列**没有任何要求**。\n\n' +
         '其它差别列一下，但都排在这一条后面：重叠长度 12–18 vs 20–40 bp；片段数通常 2 个 vs 常规 5–6 个；LIC 载体和插入要分开反应、Gibson 一管到底；LIC 室温、Gibson 恒温 50 °C；LIC 需要载体自带兼容序列、Gibson **接受任何线性化载体**。\n\n' +
         '**两者都是无疤痕的**，所以在「要真实 N 端」这类题里它们是同一类答案（连同 In-Fusion）。\n\n' +
         '而正是那条灵活性，让 Gibson 能干 LIC 干不了的活：**组装很长的片段、很多个片段，一直到整个基因组**。Venter 研究所做合成基因组用的就是它——**这条线在第 11 讲还会回来**。',
      takeaway: '分水岭是接缝序列自不自由。Gibson 零约束，所以能一路做到合成基因组。'
    }
  ],
  points: [
    { term: 'Origin', en: 'Described by Gibson and colleagues in 2009, in Nature Methods.', cn: '由 Gibson 等人于 2009 年在《Nature Methods》上发表。' },
    { term: 'What it does', en: 'Joins multiple overlapping DNA fragments in a single isothermal reaction, in one tube.', cn: '在单一等温反应中、在一个管子里连接多个带重叠序列的 DNA 片段。' },
    { term: 'What it removes', en: 'Eliminates restriction digest steps entirely.', cn: '完全免去酶切步骤。' },
    { term: 'Seamless', en: 'No extra bases are left between the joined fragments.', cn: '无缝：连接的片段之间不留任何多余碱基。' },
    { term: 'The caution on the slide', en: 'Sequence the seams between assembled parts — errors are possible.', cn: '幻灯片上的提醒：一定要对组装部件之间的接缝测序——是可能出错的。' }
  ],
  beyondPoints: [
    { term: 'Three enzymes, one temperature', en: 'Everything happens at fifty degrees in one tube. T5 exonuclease chews back 5-prime ends, exposing single-stranded 3-prime overhangs. Phusion polymerase fills in the remaining gaps. Taq DNA ligase seals the nicks. Note that the ligase is Taq, not T4, because T4 would denature at fifty degrees.', cn: '一切都在 50 度、同一个管子里发生。T5 exonuclease 啃掉 5′ 端，露出单链的 3′ 突出末端；Phusion polymerase 补齐剩下的缺口；Taq DNA ligase 封住 nick。注意连接酶用的是 Taq 而不是 T4——因为 T4 在 50 度会变性。' },
    { term: 'Why they do not fight each other', en: 'This is the point most likely to be pushed on. T5 exonuclease chews 5-prime to 3-prime, exposing complementary single strands; the homologous overhangs, twenty to forty base pairs of designed overlap, then anneal. The key is that T5 exonuclease is heat-labile and dies early in the incubation. It creates the overhangs and then removes itself before it can destroy the annealed product. Phusion fills the gaps and Taq ligase, which is thermostable, seals the nicks. The ordering in time comes from a difference in thermal stability between the enzymes, not from adding reagents in steps.', cn: '这是最容易被追问的一点。T5 exonuclease 沿 5′→3′ 方向啃，露出互补单链；设计好的 20–40 bp 同源突出末端随后退火。关键在于 T5 exonuclease 不耐热，在孵育早期就失活了。它啃出单链末端之后就自己「退场」，来不及反过来破坏已经退火好的产物。接着 Phusion 补齐缺口，耐热的 Taq ligase 封口。也就是说，时间上的先后是靠酶之间热稳定性的差异实现的，而不是靠分步加样。' },
    { term: 'Numbers and variants', en: 'Efficiency is roughly ninety per cent for plasmids up to fifteen kilobases. NEBuilder HiFi is NEB’s optimised version with a modified enzyme mix, more tolerant of short overlaps around sixteen to twenty base pairs and of GC-rich junctions.', cn: '对 15 kb 以内的质粒效率约为 90%。NEBuilder HiFi 是 NEB 优化过的版本，酶配比经过修改，对较短的重叠序列（约 16–20 bp）和 GC 含量高的接头更宽容。' },
    { term: 'LIC versus Gibson, side by side', en: 'LIC uses T4 DNA polymerase in exonuclease mode, overlaps of twelve to eighteen base pairs, requires the tails to omit one base, typically joins two fragments, needs separate reactions for vector and insert, and runs at room temperature. Gibson uses T5 exonuclease with Phusion and Taq ligase, overlaps of twenty to forty base pairs, imposes no sequence constraint, routinely joins five or six fragments, runs everything in one tube, and is isothermal at fifty degrees. Both are scarless; but LIC needs a vector carrying a compatible LIC sequence, while Gibson accepts any linearised vector. The headline difference is the sequence constraint, and that flexibility is why Gibson largely displaced LIC for general cloning — and why it underpins synthetic-genome work, being the method the Venter Institute used.', cn: 'LIC 用 T4 DNA polymerase 的外切模式，重叠 12–18 bp，要求尾巴省略一种碱基，通常只接 2 个片段，载体和插入片段要分开反应，室温进行。Gibson 用 T5 exonuclease 加 Phusion 加 Taq ligase，重叠 20–40 bp，对序列没有任何限制，常规就能接 5–6 个片段，全部在一个管子里，50 度等温。两者都是无疤痕的；但 LIC 需要载体本身带有相容的 LIC 序列，Gibson 则接受任何线性化载体。最核心的差别就是序列限制这一条，正是这种灵活性让 Gibson 在通用克隆中基本取代了 LIC，也让它成为合成基因组工作的基础——Venter 研究所用的就是这个方法（见第 11 讲）。' }
  ],
  terms: [
    { en: 'Gibson assembly', cn: 'Gibson 组装', def_en: 'One-tube isothermal joining of overlapping fragments using T5 exonuclease, Phusion polymerase and Taq ligase at fifty degrees.', def_cn: '在 50 度下用 T5 exonuclease、Phusion polymerase 和 Taq ligase，在一个管子里等温连接带重叠序列的片段。' },
    { en: 'T5 exonuclease', cn: 'T5 外切酶', def_en: 'Chews back 5-prime ends to expose single-stranded 3-prime overhangs; heat-labile, so it inactivates itself early in the reaction.', def_cn: '啃掉 5′ 端以露出单链 3′ 突出末端；不耐热，因此在反应早期就自行失活。' },
    { en: 'Isothermal', cn: '等温', def_en: 'Run at one constant temperature throughout, with no cycling — here fifty degrees.', def_cn: '全程保持单一恒定温度、不做循环——此处是 50 度。' },
    { en: 'Taq DNA ligase', cn: 'Taq DNA 连接酶', def_en: 'A thermostable ligase used instead of T4 because T4 would denature at the fifty degrees Gibson runs at.', def_cn: '耐热的连接酶，用来代替 T4——因为 T4 在 Gibson 所用的 50 度下会变性。' },
    { en: 'NEBuilder HiFi', cn: 'NEBuilder HiFi', def_en: 'NEB’s optimised Gibson mix, tolerant of shorter overlaps around sixteen to twenty base pairs and of GC-rich junctions.', def_cn: 'NEB 优化过的 Gibson 混合酶，对约 16–20 bp 的较短重叠序列和高 GC 接头更宽容。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Three enzymes act in one tube at one temperature in Gibson assembly. What stops T5 exonuclease from destroying the assembled product?',
      q_cn: 'Gibson 组装中三种酶在同一温度、同一管子里作用。是什么阻止 T5 exonuclease 破坏已经组装好的产物？',
      options: ['An inhibitor of the exonuclease supplied in the reaction buffer', 'T5 exonuclease is heat-labile and dies early in the fifty-degree step', 'It is added first and removed by a column step before the fill-in', 'Taq ligase outcompetes it for the same single-stranded substrate'],
      answer: 1,
      why_en: 'The ordering in time is achieved by a difference in thermal stability, not by adding reagents in steps. T5 exonuclease works in the first few minutes, exposes the single strands, and then dies at fifty degrees. By the time the fragments have annealed and Phusion and Taq ligase are finishing the job, it is no longer active.',
      why_cn: '时间上的先后是靠酶热稳定性的差异实现的，不是靠分步加样。T5 exonuclease 只在最初几分钟工作，啃出单链末端，然后在 50 度下失活。等到片段退火、Phusion 和 Taq ligase 收尾时，它已经没有活性了。' },
    { type: 'mcq',
      q_en: 'Why does Gibson assembly use Taq DNA ligase rather than T4 DNA ligase?',
      q_cn: '为什么 Gibson 组装用的是 Taq DNA ligase 而不是 T4 DNA ligase？',
      options: ['Taq ligase is cheaper than T4 ligase at the amounts used here', 'Taq ligase stays folded at fifty degrees, where T4 would denature', 'T4 ligase would seal the nicks before the gaps are filled in', 'Taq ligase needs no ATP, so the buffer is simpler to make up'],
      answer: 1,
      optionNotes: {
        3: { en: 'This is true and still not the reason. Taq DNA ligase, like other bacterial ligases, uses NAD-plus instead of ATP as its cofactor, but that only decides what goes into the buffer. The constraint that actually picks the enzyme is temperature: fifty degrees is above where T4 ligase stays folded, and Taq ligase comes from a thermophile.', cn: '这句话是对的，但仍然不是理由。Taq DNA ligase 和其他细菌 ligase 一样，用 NAD-plus 而不是 ATP 做辅因子，可那只决定缓冲液里放什么。真正决定选谁的是温度：50 度已经超过 T4 ligase 能维持折叠的范围，而 Taq ligase 来自嗜热菌。' }
      },
      why_en: 'The whole reaction is isothermal at fifty degrees, which is well above where T4 DNA ligase is stable. Taq ligase comes from a thermophile and works at that temperature, which is what lets all three enzymes share one tube and one temperature.',
      why_cn: '整个反应在 50 度等温进行，这个温度远高于 T4 DNA ligase 的稳定范围。Taq ligase 来自嗜热菌，在该温度下能正常工作，这正是三种酶得以共用一个管子、一个温度的前提。' },
    { type: 'mcq',
      q_en: 'What is the practical advantage of Gibson over LIC?',
      q_cn: 'Gibson 相对于 LIC 的实际优势是什么？',
      options: ['It costs less per reaction, since it uses fewer enzymes than LIC', 'It puts no constraint on the overlap sequence and joins five or six fragments', 'It does not require a linearised vector, so a circular plasmid can go straight into the reaction', 'It leaves a short scar at each junction that stabilises the join'],
      answer: 1,
      optionNotes: {
        2: { en: 'Gibson is being confused with the methods that carry a restriction enzyme in the tube. In Golden Gate the destination vector goes in circular and is opened by BsaI during the reaction; Gibson contains no restriction enzyme at all, so the vector has to arrive already linearised, exactly as in LIC.', cn: '这是把 Gibson 和那些管子里自带酶切的方法搞混了。Golden Gate 的 destination vector 是以环状加进去、反应过程中被 BsaI 切开的；Gibson 里根本没有 restriction enzyme，所以载体必须事先线性化，这一点和 LIC 一模一样。' }
      },
      why_en: 'LIC needs its tails to omit one of the four bases, which constrains the junction sequence, and it typically joins only two fragments in separate reactions. Gibson has no sequence requirement, takes any linearised vector, and does five or six fragments together. Both are scarless, and both still need a linearised vector.',
      why_cn: 'LIC 要求尾巴省略四种碱基之一，这就限制了接头序列，而且通常只能在分开的反应里接两个片段。Gibson 对序列没有要求、接受任何线性化载体，而且一次能接 5–6 个片段。两者都是无疤痕的，而且都仍然需要线性化的载体。' },
    { type: 'short',
      q_en: 'Describe Gibson assembly, naming the three enzymes and explaining the sequence of events.',
      q_cn: '描述 Gibson 组装，说出三种酶并解释事件发生的先后顺序。',
      accept: ['T5', 'Phusion', 'Taq', 'exonuclease', 'anneal', 'heat-labile', '50'],
      answer_en: 'Gibson assembly was described by Gibson and colleagues in 2009 in Nature Methods. It joins multiple overlapping DNA fragments in a single isothermal reaction in one tube, eliminating restriction digest steps and producing seamless joins with no extra bases. Everything happens at fifty degrees, with three enzymes present together. T5 exonuclease chews back the 5-prime ends, exposing single-stranded 3-prime overhangs. The homologous overhangs — twenty to forty base pairs of designed overlap — anneal. Phusion polymerase fills in the remaining gaps. Taq DNA ligase, which is thermostable unlike T4, seals the nicks. The obvious question is why the enzymes do not undo each other, and the answer is that T5 exonuclease is heat-labile and dies early in the incubation. It creates the overhangs in the first few minutes and then removes itself before it can destroy the annealed product, so the ordering in time comes from a difference in thermal stability rather than from stepwise addition. Efficiency is around ninety per cent for plasmids up to fifteen kilobases, and NEBuilder HiFi is an optimised version tolerant of shorter overlaps and GC-rich junctions. The one caution from the slide is that you should sequence the seams between assembled parts, because errors are possible.',
      answer_cn: 'Gibson 组装由 Gibson 等人于 2009 年发表在《Nature Methods》上。它在单一等温反应中、在一个管子里连接多个带重叠序列的 DNA 片段，免去了酶切步骤，接头无缝、不留多余碱基。一切都在 50 度下进行，三种酶同时存在。T5 exonuclease 啃掉 5′ 端，露出单链的 3′ 突出末端；设计好的 20–40 bp 同源重叠序列随之退火；Phusion polymerase 补齐剩下的缺口；耐热的 Taq DNA ligase（不是 T4）封住 nick。显而易见的问题是这些酶为什么不互相拆台，答案是 T5 exonuclease 不耐热，在孵育早期就失活了。它在最初几分钟啃出单链末端，然后自己「退场」，来不及破坏已经退火好的产物——所以时间上的先后来自酶之间热稳定性的差异，而不是分步加样。对 15 kb 以内的质粒效率约 90%，NEBuilder HiFi 是优化版本，对更短的重叠和高 GC 接头更宽容。幻灯片上的一条提醒是：一定要对组装部件之间的接缝测序，因为是可能出错的。'
    }
  ],
  oral: {
    q_en: 'Explain Gibson assembly and compare it with LIC.',
    q_cn: '解释 Gibson 组装，并与 LIC 作比较。',
    model_en: 'Gibson assembly was described by Gibson and colleagues in 2009 in Nature Methods. What it does is join multiple overlapping DNA fragments in a single isothermal reaction, all in one tube. It eliminates restriction digest steps entirely, and the joins are seamless — no extra bases between the fragments. Everything happens at fifty degrees, and there are three enzymes in the tube at the same time. T5 exonuclease chews back the 5-prime ends, exposing single-stranded 3-prime overhangs. Phusion polymerase fills in the gaps that are left. And Taq DNA ligase seals the nicks — Taq specifically, not T4, because T4 would denature at fifty degrees. The obvious question is how three enzymes with opposing jobs coexist without undoing each other, and the answer is elegant: T5 exonuclease is heat-labile. It works in the first few minutes of the incubation, chews 5-prime to 3-prime and exposes complementary single strands, the homologous overhangs of twenty to forty base pairs anneal, and by then the exonuclease has inactivated itself and cannot destroy the annealed product. Phusion then fills the gaps and the thermostable Taq ligase seals the nicks. So the sequence in time is created by a difference in thermal stability between the enzymes, not by adding things in steps. Efficiency is about ninety per cent for plasmids up to fifteen kilobases, and NEBuilder HiFi is NEB’s optimised mix, more tolerant of shorter overlaps around sixteen to twenty base pairs and of GC-rich junctions. One practical caution from the slide: sequence the seams between assembled parts, because errors do happen. Comparing it with LIC: LIC uses T4 DNA polymerase in exonuclease mode with overlaps of twelve to eighteen base pairs, requires separate reactions for vector and insert, runs at room temperature, and typically joins two fragments — and crucially, the tails must lack one of the four bases, which constrains the junction sequence. Gibson has no sequence constraint at all, takes any linearised vector, does five or six fragments routinely, and runs everything together. Both are scarless. That freedom over sequence is the headline difference, and it is why Gibson largely displaced LIC for general cloning, and why it is the method that underpins synthetic-genome work — it is what the Venter Institute used, which comes back in Lecture 11.',
    checklist: ['Gibson et al. 2009, Nature Methods', 'Multiple overlapping fragments, one isothermal reaction, one tube', 'No restriction digest; seamless joins', 'All at 50 degrees', 'T5 exonuclease chews back 5-prime ends', 'Phusion fills the gaps', 'Taq ligase seals the nicks — Taq not T4, because T4 dies at 50 degrees', 'Overlap is 20–40 bp of designed homology', 'Key point: T5 exonuclease is heat-labile and dies early', 'So the order in time comes from thermal stability, not stepwise addition', 'About 90 per cent for plasmids up to 15 kb', 'NEBuilder HiFi tolerates shorter overlaps and GC-rich junctions', 'Sequence the seams — errors are possible', 'Versus LIC: no sequence constraint, 5–6 fragments, any linearised vector', 'That flexibility is why Gibson displaced LIC and underpins synthetic genomes']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Suppose T5 exonuclease were thermostable. What would go wrong?',
      q_cn: '假如 T5 exonuclease 是耐热的，会出什么问题？',
      options: ['Nothing — the ligase would still seal the nicks first', 'It would keep chewing after annealing and degrade the assembled product', 'The overlaps would anneal at the wrong position on the vector', 'Phusion would be unable to extend from the annealed ends'],
      answer: 1,
      why_en: 'The reaction has no separation in space and none in time from stepwise addition — all three enzymes sit in one tube at one temperature throughout. The only thing that stops the exonuclease attacking the finished assembly is that it inactivates itself. A thermostable version would go on exposing single strands indefinitely, and the product would be consumed as fast as it formed.',
      why_cn: '这个反应既没有空间上的分隔，也没有靠分步加样得到的时间分隔——三种酶自始至终都在同一个管子、同一个温度下。唯一阻止外切酶去攻击已完成产物的，就是它自己会失活。耐热版本会无限制地继续露出单链，产物形成多快就被消耗多快。' },
    { type: 'mcq',
      q_en: 'Your Gibson assembly of four fragments gives colonies, but sequencing shows point mutations at two junctions. What does the slide advise, and why is this expected?',
      q_cn: '你用 Gibson 组装 4 个片段，长出了菌落，但测序显示两个接头处有点突变。幻灯片的建议是什么，为什么这是可以预期的？',
      options: ['Repeat the assembly with more T5 exonuclease in the reaction', 'Sequence the seams between the assembled parts before trusting them', 'Reduce the overlap to sixteen base pairs to limit chew-back', 'Switch from Taq ligase to T4 ligase to seal the junctions'],
      answer: 1,
      why_en: 'The seam is the only region that is not simply copied from an intact template: the exonuclease removes it and Phusion re-synthesises it. That makes junctions the place errors concentrate, which is exactly why the slide says to sequence the seams between assembled parts rather than assuming a colony is correct.',
      why_cn: '接缝是唯一不是直接从完整模板照抄过来的区域：外切酶把它去掉，Phusion 再重新合成。这就使接头成为错误集中的地方，也正是幻灯片强调要对组装部件之间的接缝测序、而不是默认长出菌落就没问题的原因。' },
    { type: 'mcq',
      q_en: 'You are joining six fragments with GC-rich junctions and only sixteen base pairs of overlap available. What is the sensible move?',
      q_cn: '你要连接 6 个片段，接头 GC 含量高，可用的重叠只有 16 bp。合理的做法是什么？',
      options: ['Switch to LIC, whose short tails put no sequence constraint on a GC-rich junction', 'Use NEBuilder HiFi, the mix optimised for short GC-rich overlaps', 'Run the reaction at sixty-five degrees to melt the GC-rich ends', 'Assemble two fragments at a time and ligate each pair with T4 ligase'],
      answer: 1,
      optionRefs: { 0: '1-17' },
      why_en: 'Standard Gibson is specified for twenty to forty base pairs of overlap and gets unreliable below that, especially where GC content raises the risk of the exonuclease running past the intended overlap. NEBuilder HiFi is the optimised mix for exactly this case. LIC would be worse, not better, since its tails carry a sequence constraint.',
      why_cn: '标准 Gibson 的规格是 20–40 bp 重叠，低于这个范围就不可靠，尤其在高 GC 含量下外切酶更容易啃过预定的重叠区。NEBuilder HiFi 正是针对这种情况优化的酶配比。改用 LIC 只会更糟，因为它的尾巴还带有序列限制。' },
    { type: 'short',
      q_en: 'Gibson and LIC both rely on an exonuclease and both are scarless. Why did Gibson largely replace LIC?',
      q_cn: 'Gibson 和 LIC 都依赖外切酶、也都是无疤痕的。为什么 Gibson 基本取代了 LIC？',
      accept: ['sequence', 'constraint', 'one tube', 'fragments', 'any linearised vector'],
      answer_en: 'The decisive difference is sequence freedom. LIC creates its overhang by withholding one nucleotide, which means the tail sequence must lack one of the four bases along its whole length. That is a real constraint on where you can put a junction, and it also means the vector has to carry a matching LIC sequence in the first place, so you cannot simply use any plasmid you happen to have. Gibson imposes nothing on the overlap sequence at all, and takes any linearised vector. On top of that the practicalities favour Gibson: LIC needs separate reactions for vector and insert which are then annealed, and typically joins two fragments, whereas Gibson runs everything in one tube at one temperature and routinely joins five or six. So Gibson does strictly more with strictly fewer conditions, and the only thing LIC retains is slightly lower cost. That flexibility is also why Gibson is the method behind synthetic-genome work — it is what the Venter Institute used, which returns in Lecture 11.',
      answer_cn: '决定性的差别是序列自由度。LIC 靠「不给某一种核苷酸」来造出突出末端，这意味着尾巴序列全程都必须缺少四种碱基中的一种。这是对接头位置的实实在在的限制；而且载体本身必须先带有相配的 LIC 序列，你不能随手拿一个现成质粒来用。Gibson 对重叠序列没有任何要求，也接受任何线性化载体。此外实际操作上也偏向 Gibson：LIC 需要载体和插入片段分开反应再退火，通常只接两个片段；Gibson 则全部在一个管子、一个温度下进行，常规就能接 5–6 个。所以 Gibson 用更少的条件做到了更多的事，LIC 剩下的唯一优势只是成本略低。这种灵活性也是 Gibson 成为合成基因组工作背后方法的原因——Venter 研究所用的就是它，第 11 讲会再讲到。'
    }
  ]
},

{
  id: '1-19',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.19',
  enTitle: 'Which cloning system should I use?',
  cnTitle: '该选哪一种克隆系统',
  slides: 'L2 s.33',
  coverage: 'full',
  coverageNote: 'Slide 33 is short and unusually honest — the real answer is "whatever your lab already runs". The decision table in beyondPoints is the exam-answer form of the same question, built from the properties established in sections 1.12 to 1.18.',
  summary: {
    en: 'The slide gives the honest answer rather than the tidy one. Some uses are obvious, such as Golden Gate for synthetic biology, but in practice you use the system already implemented in your lab, because that is where the optimised protocols, the know-how, the reagents and the standard plasmid sets are. Large research centres run core facilities that do cloning at high throughput, which saves cost and frees you for the non-trivial work.',
    cn: '幻灯片给的是诚实的答案而不是漂亮的答案。有些用途是明摆着的，比如合成生物学用 Golden Gate；但实际上你用的就是你实验室已经在用的那套系统，因为优化好的方案、经验、试剂和标准化质粒集都在那里。大型研究中心会设 core facility 专门做高通量克隆，既省成本，也让你能把精力放在真正不平凡的工作上。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这题的完整答法是**两段**：先给技术上的决策规则，**再说一句「现实里通常是用实验室已经在跑的那套」**。\n\n' +
            '幻灯片自己给的就是后面这个答案。只背决策表，反而答得不完整。',
  skipIt: '没有可以引用的 RECAP——老师在第 3 讲开头给第 2 讲做 RECAP 时，列的是九种具体方法，**没有「怎么选」这一条**。所以这一节该背什么完全是判断题：建议记住「关键词 → 方法」那几条对应，以及最后那句现实考量。',
  explain: [
    {
      q: '这一节看起来最「没内容」，为什么反而要认真答？',
      a: '因为幻灯片在这里给的是**诚实的答案，不是漂亮的答案**——而考官问这题，多半正是在看你认不认这个账。\n\n' +
         '漂亮的答案是一张决策表：什么场景用什么方法。这个你背得出来，人人都背得出来。\n\n' +
         '**诚实的答案是：你用的是你实验室已经在用的那一套。**因为优化好的方案在那儿、踩过的坑在那儿、试剂（比如某一批限制酶）已经买了、标准化的表达质粒集也已经在冰箱里了。换一套方法的成本，往往高过它带来的好处。\n\n' +
         '所以完整答案是**两段**：\n\n' +
         '**第一段给技术规则**——证明你知道每个方法解决什么问题。\n\n' +
         '**第二段给现实约束**——「不过实际上，多数实验室用的是自己已经跑熟的那套，因为方案、经验、试剂和标准载体都在那边。」\n\n' +
         '**只答第一段，是一个学生的答案；两段都答，是一个做过实验的人的答案。**而这道题问的就是后者。',
      takeaway: '技术规则 + 现实约束，两段都要说。幻灯片自己的答案就是第二段。'
    },
    {
      q: '那张决策表怎么才能不靠死背？',
      a: '**别记表，记每个方法的那一句话。**记住之后，表会自己长出来。\n\n' +
         '**经典酶切连接** —— 最便宜、人人都会。→ 所以常规的单片段克隆默认用它。\n\n' +
         '**Golden Gate** —— 零件可复用、一次拼很多个。→ 所以合成生物学、标准化部件。\n\n' +
         '**Gateway** —— 一个基因并行进很多个载体。→ 所以「同一个基因要做五个版本」。代价是 8 个残基的疤。\n\n' +
         '**TOPO TA** —— 五分钟，不用酶切。→ 所以「先把这个 PCR 产物存起来」。\n\n' +
         '**Gibson / LIC / In-Fusion** —— 无疤痕，而且不依赖任何限制酶位点。→ 所以「要真实 N 端」和「找不到可用位点」这两类题都归它们。\n\n' +
         '**Gibson 另外还有一条**：能拼很长、很多。→ 所以整个基因组那种活儿只有它。\n\n' +
         '这样一来，题干里的关键词自然就指过来了：看到 **synthetic biology / 标准零件 / 多片段** → Golden Gate；看到 **一个基因进多个表达载体** → Gateway（并主动说出你接受那 8 个残基）；看到 **authentic / native N-terminus 或 scarless** → Gibson / LIC / In-Fusion，**并且明确排除 Gateway**；看到 **没有可用的酶切位点** → Gibson 或 LIC；看到 **快速暂存** → TOPO TA；看到 **合成基因组 / 超长片段** → Gibson。\n\n' +
         '**七句话，代替一整张表。**',
      takeaway: '每个方法记一句「它到底解决什么」，题干关键词自然就指过去了。'
    },
    {
      q: 'core facility 是个什么东西？',
      trace: {
        what: '大型研究机构里的**共享技术平台**——一个专门做某一类标准化工作的部门，供全所各个实验室下单使用。这里说的是专做克隆和表达的那种。',
        from: '为什么会有这种东西：像克隆这类工作**高度标准化、重复性极强**。每个实验室各自买一套试剂、各自摸索一遍、各自踩一遍坑，是巨大的浪费。集中起来做，单价降下来，熟练度还上去了。',
        to: '对你的实际意义：你把序列和要求交过去，拿回构建体。**省钱、省时间，而且把你的精力腾出来放在真正不平凡的部分上**——幻灯片原话是 frees you to focus on the non-trivial tasks。\n\n这也呼应第 1-4-1 节那个习惯：**动手之前先问一句，这一步能不能不由我来做。**',
        family: '同样模式的还有测序平台、质谱平台、显微成像平台、结构生物学平台。凡是「设备贵 + 操作标准化 + 需求分散」的活儿，都会长出一个 core facility。'
      },
      takeaway: 'core facility = 集中做标准化工作的共享平台。判据：设备贵、活儿标准、需求分散。'
    },
    {
      q: '如果考官追问「那你自己会选哪个」，怎么答才有分？',
      a: '**给一个明确的选择，然后说清你为什么排除了另外几个。**——被排除的理由才是真正的得分点。\n\n' +
         '示范三句：\n\n' +
         '**「常规做一个构建体，位点也够用」** → 经典酶切连接。因为最便宜、实验室现成，Golden Gate 那套驯化成本对单次任务不划算。\n\n' +
         '**「同一个基因要进五个不同的表达载体」** → Gateway。因为做一次 entry clone 就能并行五个 LR 反应，不用为每个载体重新设计引物；**我接受它留下的 8 个残基疤痕**，因为这几个构建体只用来测表达量。\n\n' +
         '**「要研究这个蛋白的信号肽被切在哪」** → Gibson（或 LIC / In-Fusion）。因为需要真实 N 端，**Gateway 在这里直接出局**。\n\n' +
         '注意每一句的结构都是一样的：**选择 + 理由 + 主动交代代价或排除项。**\n\n' +
         '这跟只说「我会用 Gibson，因为它无疤痕」的差别在于：后者只证明你记得一个特性，前者证明你在**比较**。口试考的是后者。',
      takeaway: '答「选什么」不得分，答「为什么排除了别的、以及我接受什么代价」才得分。'
    }
  ],
  points: [
    { term: 'Some uses are obvious', en: 'For example Golden Gate for synthetic biology, where standardised reusable parts are the whole point.', cn: '有些用途是明摆着的，例如合成生物学用 Golden Gate——标准化、可复用的部件正是它的意义所在。' },
    { term: 'The real answer', en: 'You typically use the system already implemented in your lab.', cn: '真正的答案是：你通常用的就是实验室里已经建立起来的那一套。' },
    { term: 'Why', en: 'Because of optimised protocols, accumulated lab know-how, the reagents already available such as a particular selection of restriction enzymes, and standardised sets of expression plasmids.', cn: '原因：已经优化好的操作流程、实验室积累的经验、手头现成的试剂（比如某一批限制酶），以及标准化的表达质粒集合。' },
    { term: 'Core facilities', en: 'Large research centres have core facilities specialised in cloning and expression.', cn: '大型研究中心设有专门做克隆与表达的 core facility。' },
    { term: 'What a core facility buys you', en: 'High-throughput cloning and DNA manipulation, cost saving, and it frees you to focus on the non-trivial tasks.', cn: 'Core facility 带来的是：高通量的克隆与 DNA 操作、成本节约，以及把你解放出来去做真正不平凡的工作。' }
  ],
  beyondPoints: [
    { term: 'A decision table you can reproduce under pressure', en: 'Routine single insert, sites available, lab has the enzymes: restriction and ligation, because it is cheapest and everyone knows it. Multi-part assembly with standardised parts in synthetic biology: Golden Gate, one-pot, scarless, reusable part libraries. One gene into many expression vectors in parallel: Gateway, above ninety-five per cent efficient with no redesign per vector. Just need the PCR product parked somewhere fast: TOPO TA, five minutes, no digest. Scarless junction or authentic N-terminus needed: Gibson, LIC or In-Fusion, because Gateway would add eight residues. Assembling several large fragments or a whole genome: Gibson, long overlaps, fifteen kilobases and more, multi-fragment. No restriction site anywhere is usable: Gibson or LIC, both sequence-independent.', cn: '常规单片段插入、有可用位点、实验室有酶：restriction/ligation，最便宜、人人都会。多片段组装、标准化元件、合成生物学：Golden Gate，一锅法、无疤痕、部件库可复用。一个基因平行转入多个表达载体：Gateway，效率超过 95%，换载体不用重新设计。只是想把 PCR 产物先快速存起来：TOPO TA，5 分钟、不用酶切。需要无疤接头或天然 N 端：Gibson、LIC 或 In-Fusion，因为 Gateway 会多加 8 个残基。组装多个大片段或整个基因组：Gibson，重叠长、可达 15 kb 以上、支持多片段。基因内部到处都是位点、哪里都不能切：Gibson 或 LIC，两者都不依赖序列。' },
    { term: 'Keywords in the question map to a method', en: 'If the question says synthetic biology, multi-fragment or standardised parts, answer Golden Gate. If it says one gene into several expression vectors, answer Gateway, but say you accept the eight-residue scar. If it says authentic N-terminus or scarless, answer Gibson, LIC or In-Fusion and explicitly rule Gateway out. If it says there is no usable restriction site anywhere, answer Gibson or LIC, since neither depends on restriction enzymes. If it says park it quickly and subclone later, answer TOPO TA. If it says assemble a whole genome or very long fragments, answer Gibson — that is what the Venter Institute used, which comes back in Lecture 11.', cn: '题目里的关键词直接对应方法。出现「synthetic biology / 多片段 / 标准化元件」→ Golden Gate。出现「一个基因转到多个表达载体」→ Gateway，但要主动说明接受 8 个氨基酸的疤。出现「天然 N 端 / 无疤 / scarless」→ Gibson、LIC、In-Fusion，并且明确排除 Gateway。出现「基因内部到处都是限制酶位点 / 找不到可用位点」→ Gibson 或 LIC，两者完全不依赖限制酶。出现「先快速存起来、之后再亚克隆」→ TOPO TA。出现「组装整个基因组 / 超长片段」→ Gibson，Venter 所做的合成基因组用的就是它，见第 11 讲。' },
    { term: 'Do not answer only with the table', en: 'The slide’s own answer is that you use what your lab runs, and an examiner asking this question is partly checking whether you understand that constraints are practical as well as technical. Give the technical decision rule, then say that in a real lab the availability of protocols, reagents and standard vectors usually decides it — that is the complete answer, and it is the one the slide actually gives.', cn: '不要只背表格。幻灯片自己的答案是「用你实验室已有的那一套」，考官问这个问题，有一部分是在看你是否明白约束条件既是技术的也是现实的。先给出技术上的判断规则，然后说明在真实实验室里，通常是操作方案、试剂和标准载体的可得性决定了选择——这才是完整的答案，也正是幻灯片给出的答案。' }
  ],
  terms: [
    { en: 'Core facility', cn: '核心平台（core facility）', def_en: 'A shared specialist unit in a large research centre doing cloning and expression at high throughput, so individual labs do not have to.', def_cn: '大型研究中心内共享的专业单元，高通量地承担克隆与表达工作，使各实验室不必自行完成。' },
    { en: 'Standardised expression plasmid set', cn: '标准化表达质粒集', def_en: 'A lab’s established collection of vectors with known tags, promoters and cloning sites; a strong practical reason to keep using one cloning system.', def_cn: '实验室已建立的一套载体，标签、启动子和克隆位点都已知；这是继续沿用某一套克隆系统的重要现实理由。' },
    { en: 'Scarless method', cn: '无疤方法', def_en: 'Golden Gate, Gibson, LIC and In-Fusion — the methods to choose when the junction sequence or the N-terminus must be authentic.', def_cn: 'Golden Gate、Gibson、LIC 和 In-Fusion——当接头序列或 N 端必须是天然的时候应该选的方法。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'The question says you need an authentic native N-terminus. Which method must you rule out?',
      q_cn: '题目说你需要天然的 N 端。必须排除哪一种方法？',
      options: ['Golden Gate', 'Gateway', 'Gibson', 'LIC'],
      answer: 1,
      optionRefs: { 0: '1-14', 2: '1-18', 3: '1-17' },
      why_en: 'Gateway leaves the attB sites in the final construct, and they are translated, adding about eight residues at the fusion junction. Golden Gate, Gibson and LIC are all scarless. Authentic or native N-terminus in a question is effectively an instruction to eliminate Gateway.',
      why_cn: 'Gateway 会把 attB 位点留在最终构建体里，而它们会被翻译，在融合接头处多加约 8 个残基。Golden Gate、Gibson 和 LIC 都是无疤痕的。题目里出现 authentic 或 native N-terminus，实际上就是让你排除 Gateway。' },
    { type: 'mcq',
      q_en: 'Your insert contains internal sites for every enzyme in the vector MCS. Which methods still work?',
      q_cn: '你的插入片段内部含有载体 MCS 中每一种酶的位点。哪些方法仍然可行？',
      options: ['Restriction and ligation, using a partial digestion that leaves the internal sites intact', 'Gibson or LIC, because neither depends on restriction enzymes', 'TA cloning only', 'None — you must resynthesise the gene with the internal sites removed'],
      answer: 1,
      optionRefs: { 0: '1-12', 2: '1-16', 3: '1-4-3' },
      why_en: 'Gibson and LIC join fragments through designed homologous overlaps, so no restriction enzyme touches the insert at any point. Golden Gate would not help here either, since it would require domesticating the insert first — removing all the internal type IIS sites by silent mutation.',
      why_cn: 'Gibson 和 LIC 通过设计好的同源重叠序列连接片段，全程没有任何限制酶接触插入片段。Golden Gate 在这里也帮不上忙，因为它要求先对插入片段做 domestication——用 silent mutation 去掉所有内部的 type IIS 位点。' },
    { type: 'mcq',
      q_en: 'According to the slide, what actually decides which cloning system a lab uses?',
      q_cn: '按照幻灯片的说法，实际上是什么决定了一个实验室使用哪套克隆系统？',
      options: ['Whichever method has the best published efficiency figures', 'The system already running in that lab, with its protocols and reagents', 'The cost per reaction, compared across the available kits before any other factor', 'Whichever method was published most recently in the literature'],
      answer: 1,
      why_en: 'The slide is unusually honest here. Some choices are technically obvious, such as Golden Gate for synthetic biology, but the practical determinant is what the lab already runs: optimised protocols, accumulated know-how, the reagents on the shelf, and standardised expression plasmid sets. Give the technical rule in an exam, then say this.',
      why_cn: '幻灯片在这一点上格外诚实。有些选择在技术上是明摆着的，比如合成生物学用 Golden Gate；但现实中的决定因素是实验室已经在用什么：优化好的流程、积累的经验、架子上现成的试剂、标准化的表达质粒集。考试时先给技术规则，然后补上这一句。' },
    { type: 'short',
      q_en: 'How would you choose a cloning method for a new construct? Give the reasoning, not just a list.',
      q_cn: '要为一个新构建体选择克隆方法，你会怎么决定？给出推理过程，不要只列清单。',
      accept: ['scarless', 'Gateway', 'Golden Gate', 'Gibson', 'lab', 'sites'],
      answer_en: 'I would work through three questions. First, does the junction have to be clean? If I need an authentic N-terminus, a crystal structure, or an intact signal peptide or protease site, then Gateway is out, because the retained attB sites add about eight residues, and I would use Gibson, LIC, In-Fusion or Golden Gate. Second, what is the shape of the assembly? A routine single insert where the MCS has sites that do not cut inside my gene is a case for plain restriction and ligation — cheapest, and everybody in the lab knows it. Multi-part assembly from standardised reusable parts is Golden Gate. One gene that has to go into many different expression vectors in parallel is Gateway, precisely because you do not redesign anything per vector. Several large fragments, or a whole genome, is Gibson. And if I just need the PCR product parked somewhere while I think, TOPO TA takes five minutes with no digest. Third, is there a hard constraint? If every enzyme in the MCS also cuts inside my insert, restriction cloning is impossible and I go to Gibson or LIC, which are sequence-independent. But I would add the answer the slide itself gives, which is the honest one: in practice you use the system already implemented in your lab, because that is where the optimised protocols, the know-how, the available reagents and the standardised plasmid sets are. And in a large research centre, cloning is often done by a core facility, which is cheaper, higher throughput, and leaves you free for the non-trivial work.',
      answer_cn: '我会依次问三个问题。第一，接头必须干净吗？如果需要天然 N 端、要解结构、或者信号肽和蛋白酶切位点必须完整，那么 Gateway 出局——因为保留下来的 attB 位点会多加约 8 个残基——我会用 Gibson、LIC、In-Fusion 或 Golden Gate。第二，组装的形态是什么？常规的单片段插入、且 MCS 里有不会切到基因内部的位点，那就用普通的 restriction/ligation——最便宜，实验室人人都会。用标准化可复用元件做多片段组装，就是 Golden Gate。一个基因要平行转入许多不同的表达载体，就是 Gateway，正因为换载体完全不用重新设计。要组装多个大片段或整个基因组，就是 Gibson。如果只是想先把 PCR 产物存起来再慢慢想，TOPO TA 五分钟搞定、不用酶切。第三，有没有硬性约束？如果 MCS 里每一种酶都会切到插入片段内部，那么限制酶克隆就不可能了，我会转向 Gibson 或 LIC，它们不依赖序列。但我还会补上幻灯片自己给出的、也是最诚实的答案：实际上你用的就是实验室已经建立起来的那套系统，因为优化好的流程、经验、现成的试剂和标准化质粒集都在那里。而在大型研究中心，克隆往往由 core facility 完成——更便宜、通量更高，也让你能腾出手来做真正不平凡的工作。'
    }
  ],
  oral: {
    q_en: 'You have a new gene to clone. Talk me through how you would choose the method.',
    q_cn: '你有一个新基因要克隆。说说你会怎么选择方法。',
    model_en: 'I would work through it in three questions, and then add the practical answer. The first question is whether the junction has to be clean. If I need an authentic native N-terminus, or I am going to solve a crystal structure where extra flexible residues interfere, or I am studying a signal peptide or a protease cleavage site, then Gateway is ruled out immediately, because the attB sites remain in the construct and are translated, adding about eight amino acids at the junction. In those cases I would use a scarless method — Golden Gate, Gibson, LIC or In-Fusion. The second question is the shape of the assembly. For a routine single insert, where the vector MCS offers sites that do not also cut inside my gene, plain restriction and ligation is the answer: it is the cheapest and everyone in the lab already knows it. For multi-part assembly from standardised, reusable parts — which is what synthetic biology looks like — it is Golden Gate, one-pot, scarless, with a parts library that pays back the domestication cost. For one gene of interest that has to go into many different expression vectors in parallel, it is Gateway, because above ninety-five per cent efficiency and no redesign per vector is exactly what that system is for. For several large fragments, or a whole genome, it is Gibson, with its long overlaps and multi-fragment capacity. And if I simply need the PCR product parked somewhere quickly before subcloning, TOPO TA does it in five minutes with no digest at all. The third question is whether there is a hard constraint. The classic one is that every enzyme in the MCS also cuts inside my insert — I would have found that by running the insert through NEBcutter. Then restriction cloning is impossible and I go to Gibson or LIC, because both are sequence-independent. But I would finish with the answer the slide itself gives, which I think is the honest one. Some uses are obvious, but in practice you use the system already implemented in your lab, because that is where the optimised protocols are, that is where the know-how is, those are the reagents on the shelf, and those are the standardised expression plasmids you already have. And in a large research centre there is often a core facility specialising in cloning and expression, which gives high-throughput DNA manipulation, saves cost, and frees you to concentrate on the non-trivial parts of the project.',
    checklist: ['Question 1: does the junction have to be clean?', 'Authentic N-terminus, crystallography, signal peptide → rule out Gateway', 'Scarless options: Golden Gate, Gibson, LIC, In-Fusion', 'Question 2: what shape is the assembly?', 'Routine single insert with usable sites → restriction/ligation', 'Standardised multi-part, synthetic biology → Golden Gate', 'One gene into many expression vectors → Gateway', 'Large fragments or a genome → Gibson', 'Park it fast → TOPO TA, 5 minutes', 'Question 3: any hard constraint?', 'No usable site anywhere (check with NEBcutter) → Gibson or LIC', 'Then the honest answer: you use what your lab already runs', 'Why: protocols, know-how, reagents, standard plasmid sets', 'Large centres: core facilities, high throughput, cost saving']
  },
  bank: [
    { type: 'mcq',
      q_en: 'You must clone one gene into twelve different expression vectors, and the N-terminus does not matter. Best method?',
      q_cn: '你要把一个基因克隆进 12 个不同的表达载体，N 端无所谓。最佳方法？',
      options: ['Restriction and ligation, with a fresh site survey and primer pair per vector', 'Gateway — one entry clone, then the same LR reaction into each destination', 'Golden Gate, after domesticating all twelve destination vectors first', 'TOPO TA cloning of the same PCR product into each of the twelve'],
      answer: 1,
      optionRefs: { 0: '1-12', 2: '1-14', 3: '1-16' },
      why_en: 'This is the case Gateway exists for. Restriction cloning would need a separate site survey and primer pair per vector. Golden Gate would mean domesticating twelve vectors first. The eight-residue scar is the price, and the question has explicitly said the N-terminus does not matter, so it is not a price you are paying.',
      why_cn: '这正是 Gateway 存在的场景。限制酶克隆要为每个载体单独查位点、设计引物；Golden Gate 要先对 12 个载体做 domestication。8 个残基的疤痕是它的代价，而题目已经明说 N 端无所谓，所以这个代价你并没有付。' },
    { type: 'mcq',
      q_en: 'A gene has internal sites for every enzyme in the MCS, and you also need an authentic N-terminus. Which method survives both constraints?',
      q_cn: '一个基因内部含有 MCS 中每一种酶的位点，同时你还需要天然的 N 端。哪种方法同时满足这两个约束？',
      options: ['Golden Gate', 'Gibson or LIC', 'Gateway', 'TOPO TA'],
      answer: 1,
      optionRefs: { 0: '1-14', 2: '1-15', 3: '1-16' },
      why_en: 'The first constraint eliminates every restriction-based route, including Golden Gate, which would require domesticating the insert by silent mutation before it could be used. The second eliminates Gateway, which adds eight residues. Gibson and LIC survive because neither depends on restriction enzymes and both are scarless; of the two, Gibson also has no sequence constraint on the junction.',
      why_cn: '第一个约束排除了所有基于限制酶的路线，包括 Golden Gate——它要求先用 silent mutation 对插入片段做 domestication 才能使用。第二个约束排除了 Gateway，因为它会多加 8 个残基。Gibson 和 LIC 存活下来，因为两者都不依赖限制酶且都无疤痕；两者之中 Gibson 对接头序列还没有任何限制。' },
    { type: 'mcq',
      q_en: 'The slide gives a reason labs do not simply pick the technically best method each time. What is it?',
      q_cn: '幻灯片给出了实验室不每次都挑技术上最优方法的理由。是什么？',
      options: ['Every method newer than restriction cloning is patented, so academic labs are barred from using them', 'Optimised protocols, know-how, reagents and plasmid sets already in place', 'Regulatory approval is required before a lab may adopt a new method', 'Only one of them works for eukaryotic genes, the rest only for bacteria'],
      answer: 1,
      why_en: 'This is the honest answer the slide gives, and it is worth saying out loud in an oral because it shows you understand that constraints are practical as well as technical. Give the technical decision rule first, then this — that combination is the complete answer.',
      why_cn: '这是幻灯片给出的诚实答案，而且在口试里值得主动说出来，因为它表明你理解约束条件既是技术的也是现实的。先给技术上的判断规则，再补这一条——两者合起来才是完整的答案。' },
    { type: 'short',
      q_en: 'Rank restriction cloning, Golden Gate, Gateway and Gibson by how much freedom each leaves you over the junction sequence, and say what you give up in exchange.',
      q_cn: '按「对接头序列留下多少自由度」给 restriction cloning、Golden Gate、Gateway 和 Gibson 排序，并说明每一种换来了什么、付出了什么。',
      accept: ['Gibson', 'Golden Gate', 'Gateway', 'domestication', 'scar', 'site'],
      answer_en: 'Gibson is the freest. The overlap can be any sequence at all, it takes any linearised vector, and the join is seamless — what you give up is cost and the need to sequence the seams, since the junction is re-synthesised by the polymerase and is where errors concentrate. Golden Gate comes next: the four-base overhang is user-defined, so the junction sequence is yours, but only after you have domesticated every part by silent mutation to remove internal type IIS sites, and only if you choose a high-fidelity overhang set rather than picking by eye. That is a real up-front cost, repaid only if the parts are reused. Restriction cloning is more constrained still — you cannot choose your junction, you can only choose among sites that exist in both the MCS and, crucially, are absent from your insert, and the site itself ends up in the construct and may add residues. Gateway is the least free in one specific sense: the junction is fixed by the att sites, and they remain in the product and are translated as about eight extra amino acids. What you buy with that is the thing none of the others offer — above ninety-five per cent efficiency and trivially parallel transfer of one gene into many destination vectors with no redesign at all. So the ranking is really a trade of sequence freedom against convenience, and the right answer depends entirely on whether the terminus matters for what you are doing.',
      answer_cn: 'Gibson 最自由。重叠可以是任意序列，接受任何线性化载体，接头无缝——代价是成本，以及必须对接缝测序，因为接头是由聚合酶重新合成的，也是错误集中的地方。其次是 Golden Gate：4 碱基 overhang 由使用者指定，所以接头序列是你的，但前提是先用 silent mutation 对每个部件做 domestication 去掉内部 type IIS 位点，并且要用工具挑高保真的 overhang 组合而不是凭眼睛选。这是实打实的前期成本，只有部件会被复用才划算。Restriction cloning 更受限——你无法选择接头，只能在「既存在于 MCS、又（关键）不存在于插入片段内部」的位点中挑，而且位点本身会留在构建体里、可能加上额外残基。Gateway 在某一个特定意义上最不自由：接头由 att 位点固定，它们留在产物里并被翻译成约 8 个额外氨基酸。换来的是其他方法都给不了的东西——95% 以上的效率，以及把一个基因平行转入多个 destination 载体、完全不用重新设计。所以这个排序本质上是「序列自由度」和「便利性」之间的交换，正确答案完全取决于末端对你要做的事重不重要。'
    }
  ]
},

{
  id: '1-20',
  chapter: 1,
  lecture: 'Lecture 2',
  section: '1.20',
  enTitle: 'Worked exercise — the pSecTag2 cloning assignment',
  cnTitle: '习题精讲 —— pSecTag2 克隆作业',
  slides: 'L2 s.35–43',
  coverage: 'full',
  coverageNote: 'Nine slides worked through end to end. This is the one node where the marks are itemised on the slide itself: plasmid 2, restriction sites 2, forward primer 3, reverse primer 3. The reading-frame argument and the TAG trap are the parts that decide whether the design works at all.',
  summary: {
    en: 'Design a restriction-based cloning strategy for secreted expression in HEK293T with a C-terminal His tag, using pSecTag2/Hygro. Four decisions carry the marks: pick variant A so the insert is in frame with both the Igk leader upstream and the myc-His tag downstream; pick AscI and EcoRV, the only MCS sites that do not also cut inside the gene; add stuffer bases outside each site so the enzymes can cut a linear end; and choose the spacer before EcoRV so it does not create a stop codon across the junction. The classic failure is a TA spacer, which builds a TAG amber stop and truncates the protein before the tag.',
    cn: '为在 HEK293T 中分泌表达、并带 C 端 His 标签的蛋白设计基于限制酶的克隆策略，载体用 pSecTag2/Hygro。四个决定对应全部分数：选 A 版本，使插入片段与上游的 Igκ leader 和下游的 myc-His 标签都同框；选 AscI 与 EcoRV——MCS 中唯二不会切到基因内部的位点；在每个位点外侧加 stuffer 碱基，让酶能在线性末端切开；以及选好 EcoRV 之前的间隔碱基，使接头处不会形成终止密码子。经典的失败是间隔用了 TA，拼出一个 TAG 琥珀终止密码子，把蛋白在标签之前就截断了。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L2 s.37', src: 'img/figures/L2_s37_1.webp' },
    { slide: 'L2 s.39', src: 'img/figures/L2_s39_1.webp' },
    { slide: 'L2 s.40', src: 'img/figures/L2_s40_1.webp' },
    { slide: 'L2 s.41', src: 'img/figures/L2_s41_1.webp' },
    { slide: 'L2 s.42', src: 'img/figures/L2_s42_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这道题四个决定拿全部的分，而贯穿始终的只有一件事：**阅读框**。\n\n' +
            '你的基因是被夹在中间的（Igκ leader → 你的基因 → myc-His → 终止），**两端都必须同框**，而且中间不能凭空冒出终止密码子。',
  skipIt: '这一节没有可以引用的 RECAP——老师在第 3 讲开头给第 2 讲做 RECAP 时，列的是九种克隆方法，**作业题不在里面**。所以这里不存在「不用背」的问题：**这一节不是拿来背的，是拿来做一遍的**。做过一遍，四个决定自然记得住；只读不做，考场上一定卡在 spacer 那一步。',
  explain: [
    {
      q: '为什么载体必须是 pSecTag2？',
      a: '因为题目提了**三个要求，每一个都对应载体上的一个元件**。这是先想清楚要求、再去挑载体，而不是反过来。\n\n' +
         '**要求一：分泌表达。**蛋白要被送出细胞，就必须在 N 端带一段**分泌信号肽**。pSecTag2 自带**鼠源 Igκ leader**，正好在 MCS 的上游。\n\n' +
         '**要求二：C 端 His 标签。**pSecTag2 的 MCS **下游**接着一个 **myc-His 标签**。你的基因插进 MCS，读通了就自带标签。\n\n' +
         '**要求三：在 HEK293T 里表达。**这是哺乳动物细胞，所以需要**哺乳动物启动子（CMV）**和**哺乳动物筛选标记（hygromycin）**。细菌的启动子和氨苄抗性在这里一点用都没有。\n\n' +
         '**顺带把前面的内容串起来：为什么筛选标记偏偏是 hygromycin？**回到第 1-10-1 节——hygromycin 是那三个**原核真核通杀**的抗生素之一。做哺乳动物稳定株，能用的本来就只有那几个。**这不是巧合，是那张表的直接后果。**\n\n' +
         '答题时按这个结构走：**先列三个要求，再逐条指出载体上的哪个元件满足它。**这比说「因为老师给的就是 pSecTag2」值钱得多。',
      takeaway: '三个要求 → 三个元件：分泌要 Igκ leader，标签要下游 myc-His，HEK293T 要 CMV + hygromycin。'
    },
    {
      q: '为什么说整道题其实只有「阅读框」一件事？',
      a: '把最终产物摊开写一遍就明白了：\n\n' +
         '**Igκ leader → 你的基因 → myc → 6×His → 终止密码子**\n\n' +
         '**你的基因是被夹在中间的**，所以它的两端都要跟邻居对上。三个后果，各自都会丢分：\n\n' +
         '**跟上游 leader 不同框** → 信号肽后面接的是一串乱码 → **根本不分泌**。\n\n' +
         '**跟下游 myc-His 不同框** → 标签的密码子全错位 → **没有 His 标签，纯化不了**。\n\n' +
         '**基因自带的终止密码子没去掉** → 翻译在标签之前就停 → **同样纯化不了**。（这道题里给的基因末尾恰好没有终止密码子，所以反向引物可以直接读通。）\n\n' +
         '**现在看 A / B / C 三个版本的设计，会觉得很漂亮。**\n\n' +
         '三个版本的 MCS **只差一到两个核苷酸**。差 1 个碱基就把下游的框移 1 位，差 2 个就移 2 位——**三个版本正好覆盖了三种可能的读框**。\n\n' +
         '换句话说，厂商不是做了三个功能不同的载体，而是**替你把「框对不上」这个问题的全部三种情况都预先备好了一个解**。你要做的只是**算清楚自己的基因需要哪一种**，然后挑对应的那个版本（这道题的答案是 A）。\n\n' +
         '**最实在的检查动作**：把最终序列**从 leader 的起始密码子开始，每三个碱基切一刀**，一路读到 His 标签。读得通，框就对了。别用眼睛估。',
      takeaway: '基因被夹在 leader 和标签中间，两端都要同框。A/B/C 三版正好对应三种可能的框。'
    },
    {
      q: '为什么 11 个位点最后只活下来 3 个？',
      a: '因为要**同时满足两个条件**，而大多数人只查了第一个。\n\n' +
         '**条件一：这个酶在载体的 MCS 里有位点。**（不然你切不开载体。）\n\n' +
         '**条件二：这个酶在你的基因内部没有位点。**（不然……见下。）\n\n' +
         '**条件二被漏掉的后果很严重**：假设你选了一个在基因内部也切的酶。酶切那一步，你的 PCR 产物会被**拦腰切成两截**。你手里从此没有完整的基因可以连——而这在设计图上看起来完全正常。\n\n' +
         '**所以正确的动作顺序是：**先把你的基因序列丢进 NEBcutter 跑一遍，看哪些酶会切它；再拿 MCS 那 11 个位点的列表来**取交集**。\n\n' +
         '这道题里，交集只剩 **SfiI、AscI、EcoRV** 三个。**11 个里活下来 3 个**——比例低得超出多数人的预期，这正是这一步值分的原因。\n\n' +
         '**然后从 3 个里挑 2 个，一头一个：AscI 在 5′ 端，EcoRV 在 3′ 端。**\n\n' +
         '为什么要用**两个不同的酶**而不是同一个切两刀？回到第 1-12 节：两个不同的酶给出**互不兼容的末端**，于是（一）载体自己连不回去，不用去磷酸化；（二）**插入片段的方向被锁死了**，不用再筛方向。这就是定向克隆。',
      takeaway: '在 MCS 里 ∩ 不在基因内部切。先跑 NEBcutter 查基因，再取交集——这一步 11 个只剩 3 个。'
    },
    {
      q: 'stuffer 碱基和 spacer 碱基是同一个东西吗？',
      a: '**不是，而且把它们搞混正是这道题最容易翻车的地方。**看引物的写法：\n\n' +
         '正向：`XXXXX GGCGCGCC acctcaacc...`\n\n' +
         '反向（sense 方向写）：`...aaggca XX GATATC XXXXX`\n\n' +
         '**两处 X，位置不同，作用完全不同：**\n\n' +
         '**stuffer（那 5 个 X，在酶切位点的外侧）**\n\n' +
         '作用：给酶当**把手**。限制酶在线性片段的最末端切不动，需要外侧多几个碱基让它抓住（第 1-12 节）。\n\n' +
         '关键性质：**酶切之后，它连同外面那一小截一起被丢掉，不会进入最终构建体。**\n\n' +
         '所以：**序列基本可以随便填**，只要够长（每个酶要几个，查厂商那张 cleavage close to the end 的表）。\n\n' +
         '**spacer（那 2 个 X，在基因和酶切位点之间）**\n\n' +
         '作用：**调阅读框**——把下游的 myc-His 推到正确的框上。\n\n' +
         '关键性质：**它留在最终构建体里，而且会被翻译。**\n\n' +
         '所以：**绝对不能随便填**。它必须既把框调对，又不能跟旁边的序列凑出终止密码子。\n\n' +
         '**一句话记住这个区别：一个被扔掉，一个被翻译。**被扔掉的可以随便，被翻译的一个碱基都不能马虎。',
      takeaway: 'stuffer 在位点外侧、酶切后被丢掉，可以随便填；spacer 在基因和位点之间、会被翻译，必须算。'
    },
    {
      q: '那两个 spacer 碱基填 TA 会怎样？',
      trace: {
        what: '**TAG，一个终止密码子**，俗名叫 **amber（琥珀）密码子**。（这个名字来自早年的一个实验室玩笑，跟琥珀本身没关系，不用深究。）三个终止密码子分别是 **TAA（ochre）、TAG（amber）、TGA（opal）**。',
        from: '它是**跨界凭空长出来的**——这才是这个陷阱阴险的地方。把三段接起来读：\n\n基因末尾 `...aag gca` + spacer `TA` + 酶切位点 `GATATC`\n\n按阅读框每三个切一刀：`...aag gca TAG atc ...`\n\n**TAG 出现了。**而你单看基因末尾没问题，单看 spacer 没问题，单看 GATATC 也没问题——**三段各自都干净，接起来才出事。**',
        to: '后果特别隐蔽：翻译在这里停下，**蛋白照样被合成、照样被分泌**——因为信号肽和基因本身都在终止之前，一切正常。\n\n**只是它后面什么都没有：没有 myc，没有 His 标签。**\n\n你要等到做纯化那天，Ni-NTA 柱上什么都挂不住，才会发现问题。**中间可能已经过去几周。**',
        family: '**同一个 TAG，在第 7–8 讲里是主角而不是灾难。**遗传密码重编程正是把 TAG 这个密码子**重新分配**，用来插入非天然氨基酸——回想第 1-2-3 节的 Aib：司美格鲁肽只能化学合成，就是因为 Aib 没有密码子；而第 7–8 讲要解决的正是这件事，用的就是这个 amber 密码子。\n\n**这里它是 bug，那里它是 feature。**口试里能把这条线说出来，比单独答对这道题值钱。'
      },
      a: '**所以正确的检查动作是：不要只看 spacer 本身，要把「基因末尾 + spacer + 酶切位点」连成一串，按阅读框读一遍。**\n\n' +
         '要同时满足两个条件：\n\n' +
         '**（1）把下游标签推到正确的读框上；**\n\n' +
         '**（2）跨界不能凑出 TAA、TAG 或 TGA 中的任何一个。**\n\n' +
         '第（2）条是绝大多数人漏掉的，因为它要求你**跨过三段边界去读**，而人的眼睛习惯一段一段地看。',
      takeaway: '基因末尾 + spacer + 位点要连起来按框读一遍。终止密码子是跨界长出来的，分开看永远看不见。'
    },
    {
      q: '反向引物写出来是那样，为什么订购时还要反向互补一次？',
      a: '**因为写给人看和写给合成仪看，是两回事。**\n\n' +
         '题目里的反向引物写成 `...aaggca XX GATATC XXXXX`，用的是 **sense 链（上链）方向**。这么写是为了**让逻辑读得懂**：你能依次看见基因末尾、spacer、酶切位点、stuffer，一目了然它在干什么。\n\n' +
         '但真正的反向引物必须**退火到上链上**（它要沿着基因往回延伸）。所以实际合成的那条寡核苷酸，是上面这串序列的**反向互补**。\n\n' +
         '**把 sense 序列直接抄到订购单上，你会拿到一条什么都结合不上的引物**——PCR 完全不出产物，而你会先怀疑聚合酶、怀疑退火温度、怀疑模板，最后才想到引物本身写反了。\n\n' +
         '**这是整道题里最容易白丢的分**，因为它跟你的设计思路对不对完全无关，纯粹是最后一步的机械操作。\n\n' +
         '**一个能当场自检的办法：看引物的 3′ 端指向哪里。**\n\n' +
         '引物是从 **3′ 端**开始延伸的，而反向引物要往**基因内部**的方向延伸。所以正确的反向引物，它的 **3′ 端必须落在基因序列那一侧**。\n\n' +
         '**如果你写出来的东西 3′ 端是 stuffer 那几个 X，那就是搞反了。**',
      takeaway: '写给人看用 sense 方向，订购要反向互补。自检：反向引物的 3′ 端必须落在基因那一侧。'
    }
  ],
  points: [
    { term: 'The task', en: 'Design a restriction-enzyme-based cloning strategy for secreted expression of your protein in HEK293T cells, fused to a C-terminal His tag, showing the sequence detail at the 5-prime and 3-prime ends of the target gene as cloned into the vector. Use a pSecTag2/Hygro vector.', cn: '题目：为你的蛋白设计基于限制酶的克隆策略，要求在 HEK293T 细胞中分泌表达，并融合 C 端 His 标签；要给出目的基因克隆进载体后 5′ 端和 3′ 端的序列细节。载体使用 pSecTag2/Hygro。' },
    { term: 'The marks', en: 'Plasmid 2 points, restriction sites 2, forward primer 3, reverse primer 3.', cn: '分值分配：质粒 2 分、限制酶位点 2 分、正向引物 3 分、反向引物 3 分。' },
    { term: 'Why pSecTag2 — secretion', en: 'Secreted expression needs an N-terminal secretion signal, and pSecTag2 carries the murine Igk leader.', cn: '分泌表达需要 N 端的分泌信号肽，pSecTag2 带有鼠源 Igκ leader。' },
    { term: 'Why pSecTag2 — the tag', en: 'The C-terminal His tag requirement is met by the myc-His tag sitting downstream of the MCS.', cn: 'C 端 His 标签的要求由位于 MCS 下游的 myc-His 标签满足。' },
    { term: 'Why pSecTag2 — the host', en: 'Expression in HEK293T, a mammalian line, needs a mammalian promoter — CMV — and a mammalian selection marker, hygromycin.', cn: '在哺乳动物细胞系 HEK293T 中表达，需要哺乳动物启动子（CMV）和哺乳动物选择标记（hygromycin）。' },
    { term: 'Variants A, B and C', en: 'pSecTag2 comes in three variants differing by one or two nucleotides in the MCS, which shifts the reading frame. You pick the one that puts your insert in frame with both the leader and the tag. The answer uses pSecTag2 A.', cn: 'pSecTag2 有 A、B、C 三个版本，MCS 里差一两个碱基，把读框错开。你要挑出那个正好让插入片段与 leader 和标签都同框的版本。标准答案用的是 pSecTag2 A。' },
    { term: 'Sites available in the MCS', en: 'SfiI, AscI, HindIII, KpnI, BamHI, BstXI, EcoRV, NotI, XhoI, DraII, ApaI.', cn: 'MCS 中可用的位点：SfiI、AscI、HindIII、KpnI、BamHI、BstXI、EcoRV、NotI、XhoI、DraII、ApaI。' },
    { term: 'Analyse the insert', en: 'Run your gene through NEBcutter for those same sites. You need sites that are in the MCS but do not cut inside your gene. Only SfiI, AscI and EcoRV satisfy both conditions.', cn: '用 NEBcutter 分析你的基因是否含有这些位点。你需要的是「在 MCS 里、但不切基因内部」的位点。同时满足两个条件的只有 SfiI、AscI 和 EcoRV。' },
    { term: 'Sites selected', en: 'AscI at the 5-prime end and EcoRV at the 3-prime end. Two different enzymes, which makes the cloning directional.', cn: '最终选择：5′ 端用 AscI，3′ 端用 EcoRV。两种不同的酶，使克隆成为定向的。' },
    { term: 'Forward primer', en: 'The gene 5-prime end is acctcaaccggccaggattccacc. Add the AscI site GGCGCGCC upstream, then stuffer bases outside that: 5-prime XXXXX GGCGCGCC acctcaaccggccaggattccacc 3-prime. The slide notes that here we are lucky, the N-terminus is already in frame with the restriction site.', cn: '基因 5′ 端是 acctcaaccggccaggattccacc。在上游加上 AscI 位点 GGCGCGCC，再在其外侧加 stuffer 碱基：5′-XXXXX GGCGCGCC acctcaaccggccaggattccacc-3′。幻灯片写道，这里我们很走运，N 端本来就和限制酶位点同框。' },
    { term: 'Primer design rules', en: 'About twenty to twenty-four nucleotides of overlap with your sequence, and terminate with C or G — a GC clamp.', cn: '引物设计规则：与你的序列约 20–24 个核苷酸重叠，并以 C 或 G 结尾——即 GC clamp。' },
    { term: 'Reverse primer', en: 'The gene 3-prime end is ctaagttggtcaccaagaaggca. Add the EcoRV site GATATC, a blunt cutter cutting GAT then ATC, with a spacer between gene and site to fix the reading frame, and stuffer bases outside: ctaagttggtcaccaagaaggca XX GATATC XXXXX.', cn: '基因 3′ 端是 ctaagttggtcaccaagaaggca。加上 EcoRV 位点 GATATC（平末端酶，切在 GAT 与 ATC 之间），在基因与位点之间加间隔碱基来校正读框，外侧再加 stuffer：ctaagttggtcaccaagaaggca XX GATATC XXXXX。' },
    { term: 'The final answer as written', en: 'Forward 5-prime XXXXXGGCGCGCCacctcaaccggccaggattccacc 3-prime; reverse 5-prime ctaagttggtcaccaagaaggcaXXGATATCXXXXX 3-prime, written in the sense orientation.', cn: '最终答案（书写形式）：Forward 5′-XXXXXGGCGCGCCacctcaaccggccaggattccacc-3′；Reverse 5′-ctaagttggtcaccaagaaggcaXXGATATCXXXXX-3′，按正义链方向书写。' },
    { term: 'The last warning on the slide', en: 'If you order the reverse primer, it has to be reversed and complemented before ordering.', cn: '幻灯片最后一条警告：反向引物在订购之前必须先做反向互补。' }
  ],
  beyondPoints: [
    { term: 'The frame constraint is the whole exercise', en: 'Your gene is sandwiched: Igk leader, then MCS with your gene, then myc, then six-His, then stop. Both ends must be in frame. Three consequences, each worth marks. One, the insert must be in frame with the leader, or the signal peptide is followed by garbage and nothing is secreted. Two, the insert must also be in frame with the myc-His tag, or there is no His tag and you cannot purify. Three, the insert own stop codon must be removed, or translation terminates before ever reaching the tag. In this exercise the gene as given has no terminal stop, which is why the reverse primer can read straight through.', cn: '这道题真正考的就是「读框」。你的基因被夹在中间：Igκ leader — MCS 里的你的基因 — myc — 6×His — 终止密码子，两头都必须对齐。由此有三条推论，每一条都值分。第一，插入片段必须与 leader 同框，否则信号肽后面接的是乱码，蛋白根本分泌不出去。第二，插入片段还必须与 myc-His 标签同框，否则没有 His 标签，镍柱纯化直接失败。第三，基因自带的终止密码子必须去掉，否则翻译在标签之前就停了。本题给出的基因末端没有终止密码子，这正是反向引物可以直接读通的原因。' },
    { term: 'Why the stuffer bases exist', en: 'Restriction enzymes cut inefficiently at the very end of a linear fragment; AscI needs several extra bases 5-prime of its site to cut well. Every supplier publishes a table called cleavage close to the end of DNA fragments giving the exact requirement per enzyme. Leaving the stuffer out is a design that looks correct on paper and fails at the bench, because the PCR product will not be cut.', cn: '限制酶在线性片段的最末端切得很差；AscI 需要在其位点 5′ 侧多出几个碱基才能有效切开。每家供应商都会公布一张叫「cleavage close to the end of DNA fragments」的表，给出每种酶的具体要求。漏掉 stuffer 的设计在纸上看着没问题，到台面上就失败——因为 PCR 产物根本切不开。' },
    { term: 'The TA trap on slide 42', en: 'The marked question is whether the spacer XX can be any bases. It cannot. If XX is TA, look across the junction: the gene ends aag gca, then TA, then GATATC. Reading in frame that gives TAG, an amber stop codon, sitting right at the junction. Translation terminates before the myc-His tag. Your protein is made, it is secreted, and it is completely unpurifiable — and you would waste weeks before finding out. So the spacer must both put the downstream tag in the correct reading frame and avoid creating TAA, TAG or TGA across the junction, checking not just the spacer itself but the sequence it forms together with the flanking gene end and the restriction site.', cn: '第 42 张幻灯片上被标出来的问题是：间隔碱基 XX 可以是任意碱基吗？不可以。如果 XX 取 TA，看接头处：基因末尾 aag gca，接 TA，再接 GATATC。按读框读出来就是 TAG——一个琥珀终止密码子，正好卡在接头上。翻译在 myc-His 标签之前就终止了。蛋白被做出来、也分泌出去了，但完全无法纯化——而你要浪费好几周才会发现。所以间隔碱基必须同时做到两件事：把下游标签放进正确读框，并且避免在接头处拼出 TAA、TAG 或 TGA；检查时不能只看间隔本身，要看它与基因末端和限制酶位点连起来形成的序列。' },
    { term: 'The amber codon comes back later', en: 'TAG is exactly the codon reassigned to incorporate non-canonical amino acids in Lectures 7 and 8. Here it is a bug that destroys your construct; there it is the entire feature. Being able to say that in an oral shows you are reading the course as one thing rather than twelve.', cn: 'TAG 正是第 7–8 讲里被重新指派用来引入非天然氨基酸的那个密码子。在这里它是毁掉你构建体的 bug，在那里它是整个技术的核心。口试时能说出这一点，说明你把整门课当成一个整体在读，而不是十二个互不相干的部分。' },
    { term: 'The most common way to lose the site marks', en: 'Students pick sites from the MCS without checking the insert. If your chosen enzyme also cuts inside your gene, the digest fragments your own insert and the cloning cannot work. Always run the insert through NEBcutter first, then intersect that result with the MCS list — that intersection is the answer, and it is why only three of eleven MCS sites survive here.', cn: '丢掉位点分数最常见的方式：直接从 MCS 里挑位点、不检查插入片段。如果你选的酶也切基因内部，酶切就会把你自己的插入片段打成碎片，克隆根本无法完成。永远先用 NEBcutter 跑一遍插入片段，再与 MCS 的清单取交集——这个交集就是答案，也正是本题中 11 个 MCS 位点只剩 3 个的原因。' },
    { term: 'Why the reverse-complement warning matters', en: 'The reverse primer above is written in the sense, top-strand orientation so that the logic is readable — you can see the gene end, the spacer, the site and the stuffer in order. A real reverse primer must anneal to the top strand, so it is synthesised as the reverse complement of what is written. Copying the sense strand onto an order form gives you an oligonucleotide that binds nothing, and it is the easiest mark on the whole question to throw away.', cn: '上面写出的反向引物是按正义链（上链）方向写的，为的是让逻辑可读——你能依次看到基因末端、间隔、位点、stuffer。但真正的反向引物必须与上链退火，所以合成时要用它的反向互补序列。把正义链直接抄到订购单上，得到的寡核苷酸什么都结合不上——这也是整道题里最容易白丢的一分。' }
  ],
  terms: [
    { en: 'pSecTag2/Hygro', cn: 'pSecTag2/Hygro', def_en: 'A mammalian expression vector with a CMV promoter, a murine Igk secretion leader upstream of the MCS, a C-terminal myc-His tag downstream, and hygromycin selection.', def_cn: '哺乳动物表达载体，带 CMV 启动子、MCS 上游的鼠源 Igκ 分泌信号肽、下游的 C 端 myc-His 标签，以及 hygromycin 选择标记。' },
    { en: 'Igk leader', cn: 'Igκ 信号肽', def_en: 'The murine immunoglobulin kappa secretion signal that directs the fusion protein into the secretory pathway; it must be in frame with the insert.', def_cn: '鼠源免疫球蛋白 κ 链的分泌信号，引导融合蛋白进入分泌途径；必须与插入片段同框。' },
    { en: 'Vector variants A / B / C', cn: '载体 A/B/C 版本', def_en: 'The same vector supplied in three reading frames, differing by one or two nucleotides in the MCS; you choose the frame your insert needs.', def_cn: '同一载体的三种读框版本，MCS 中差一两个碱基；你按插入片段的需要选择读框。' },
    { en: 'Stuffer bases', cn: 'Stuffer 碱基', def_en: 'Extra bases added outside a restriction site in a primer, because enzymes cut poorly at the very end of a linear fragment.', def_cn: '在引物中加在限制酶位点外侧的额外碱基，因为酶在线性片段的末端切割效率很低。' },
    { en: 'GC clamp', cn: 'GC 钳', def_en: 'Ending a primer with C or G so the 3-prime end binds tightly and extension starts cleanly.', def_cn: '让引物以 C 或 G 结尾，使 3′ 端结合牢固、延伸起始干净。' },
    { en: 'Amber codon TAG', cn: '琥珀密码子 TAG', def_en: 'A stop codon; created accidentally here by a TA spacer, and deliberately reassigned in Lectures 7 to 8 to incorporate non-canonical amino acids.', def_cn: '一种终止密码子；本题中因 TA 间隔而被意外拼出，而在第 7–8 讲中被刻意重新指派用于引入非天然氨基酸。' },
    { en: 'NEBcutter', cn: 'NEBcutter', def_en: 'The tool used to list every restriction site present inside your own sequence, so you can exclude those enzymes.', def_cn: '用来列出你自己序列内部所有限制酶位点的工具，据此排除相应的酶。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does the answer specify pSecTag2 variant A rather than B or C?',
      q_cn: '为什么答案指定用 pSecTag2 的 A 版本而不是 B 或 C？',
      options: ['A carries a stronger promoter than the B and C variants do', 'A is the variant that puts the insert in frame with both leader and tag', 'A is the only one of the three carrying hygromycin resistance', 'B and C are missing the Igk secretion leader, so nothing they express is exported'],
      answer: 1,
      why_en: 'All three variants have the same promoter, leader, tag and marker. They exist purely to offer three reading frames, and the gene is sandwiched between an upstream leader and a downstream tag that must both be in frame. Picking the variant is the reading-frame decision, which is what this exercise is really testing.',
      why_cn: '三个版本的启动子、信号肽、标签和标记完全相同，它们存在的唯一目的就是提供三种读框。而基因夹在上游 leader 和下游标签之间，两头都必须同框。选版本就是在做读框判断，这正是这道题真正在考的东西。' },
    { type: 'mcq',
      q_en: 'The MCS offers eleven sites, but only AscI and EcoRV are used. What is the criterion?',
      q_cn: 'MCS 提供了 11 个位点，但只用了 AscI 和 EcoRV。判断标准是什么？',
      options: ['They are the cheapest two enzymes in the catalogue for this digest', 'They are in the MCS, absent from the insert, and different from each other', 'They are the only two blunt cutters anywhere in the MCS list, so the ends join cleanly', 'They are the two sites lying closest to the promoter in the MCS'],
      answer: 1,
      optionNotes: {
        2: { en: 'Only one of the two is blunt. EcoRV cuts GAT-ATC in the middle and leaves blunt ends, while AscI leaves a four-base overhang. And if both were blunt the design would lose the very property it was chosen for, since two blunt ends cannot force the insert in one orientation.', cn: '这两个里只有一个是平末端。EcoRV 在 GAT-ATC 正中间切，留平末端；AscI 留的是四碱基 overhang。再说，如果两端都是平末端，这个设计恰好会失去当初选它们的理由，因为两个平末端锁不住插入片段的方向。' }
      },
      why_en: 'Running the insert through NEBcutter and intersecting with the MCS list leaves only SfiI, AscI and EcoRV. An enzyme that also cuts inside your gene would fragment the insert during the digest. Using two different enzymes at the two ends is what forces the insert in one orientation rather than either way round.',
      why_cn: '把插入片段跑一遍 NEBcutter，再与 MCS 清单取交集，只剩 SfiI、AscI 和 EcoRV。如果所选的酶也切基因内部，酶切时就会把插入片段打碎。两端用两种不同的酶，才能迫使插入片段只能以一个方向进去，而不是任意方向。' },
    { type: 'mcq',
      q_en: 'In the reverse primer, what happens if the spacer XX before GATATC is chosen as TA?',
      q_cn: '反向引物中，如果 GATATC 之前的间隔碱基 XX 取为 TA，会发生什么？',
      options: ['The EcoRV recognition site is destroyed by the added bases, so the digest cannot cut', 'A TAG amber stop is created across the junction with the EcoRV site', 'The melting temperature of the primer drops too far to anneal', 'The insert ends up cloned in the reverse orientation'],
      answer: 1,
      why_en: 'The gene ends aag gca; add TA and then GATATC and the in-frame reading gives TAG at the junction. The protein is still made and still secreted, but translation stops before the tag, so there is no His tag and it cannot be purified — a failure you would only discover after weeks. The spacer must both fix the frame and avoid creating TAA, TAG or TGA in combination with the flanking sequence.',
      why_cn: '基因末尾是 aag gca，接上 TA 再接 GATATC，按读框读出来接头处就是 TAG。蛋白仍然会被合成、也仍然会分泌，但翻译在标签之前就停了，于是没有 His 标签、无法纯化——而这个失败你要好几周后才会发现。间隔碱基必须同时校正读框并避免与相邻序列一起拼出 TAA、TAG 或 TGA。' },
    { type: 'short',
      q_en: 'Work through the whole design: plasmid, sites, forward primer, reverse primer, and the two traps.',
      q_cn: '完整走一遍这个设计：质粒、位点、正向引物、反向引物，以及两个陷阱。',
      accept: ['pSecTag2', 'frame', 'AscI', 'EcoRV', 'NEBcutter', 'stuffer', 'TAG', 'reverse complement'],
      answer_en: 'The plasmid first. Secreted expression requires an N-terminal secretion signal, and pSecTag2 carries the murine Igk leader. The C-terminal His requirement is met by the myc-His tag downstream of the MCS. Expression in HEK293T needs a mammalian promoter, CMV, and a mammalian marker, hygromycin. The vector comes as variants A, B and C differing by one or two nucleotides in the MCS, which shifts the reading frame, and I pick A because it is the one that puts my insert in frame with both the leader upstream and the tag downstream. That frame constraint is the core of the exercise: if the insert is out of frame with the leader nothing is secreted, if it is out of frame with the tag there is no His tag and no purification, and the insert own stop codon has to be removed or translation ends before the tag — here the gene has no terminal stop, so the reverse primer reads straight through. Next the sites. The MCS offers SfiI, AscI, HindIII, KpnI, BamHI, BstXI, EcoRV, NotI, XhoI, DraII and ApaI. I run the insert through NEBcutter and keep only sites that are in the MCS and absent from the gene, which leaves SfiI, AscI and EcoRV. I take AscI at the 5-prime end and EcoRV at the 3-prime end — two different enzymes, so the cloning is directional. The forward primer: the gene begins acctcaaccggccaggattccacc, I put the AscI site GGCGCGCC in front of it, and then stuffer bases in front of that, because restriction enzymes cut poorly at the very end of a linear fragment and AscI needs several extra bases 5-prime of its site. About twenty to twenty-four nucleotides of gene overlap, ending in C or G. Here the N-terminus happens already to be in frame with the site. The reverse primer: the gene ends ctaagttggtcaccaagaaggca, I add a spacer, then the EcoRV site GATATC, which is a blunt cutter, then stuffer bases. The spacer has two jobs: put the downstream tag in the right frame, and not create a stop codon. That is the trap — if the spacer is TA, the junction reads aag gca TA GATATC and you have built TAG, an amber stop, right before the tag. The protein would be made and secreted and be completely unpurifiable. And the last trap: the reverse primer as written is in the sense orientation for readability, so it must be reversed and complemented before ordering, or the oligonucleotide binds nothing.',
      answer_cn: '先说质粒。分泌表达需要 N 端分泌信号肽，pSecTag2 带有鼠源 Igκ leader；C 端 His 的要求由 MCS 下游的 myc-His 标签满足；在 HEK293T 中表达需要哺乳动物启动子 CMV 和哺乳动物标记 hygromycin。该载体有 A、B、C 三个版本，MCS 里差一两个碱基、把读框错开，我选 A，因为只有它能让插入片段与上游的 leader 和下游的标签同时同框。读框正是这道题的核心：与 leader 不同框则什么都分泌不出去；与标签不同框则没有 His 标签、无法纯化；基因自带的终止密码子必须去掉，否则翻译在标签之前就停——本题的基因末端没有终止密码子，所以反向引物可以直接读通。接着是位点。MCS 提供 SfiI、AscI、HindIII、KpnI、BamHI、BstXI、EcoRV、NotI、XhoI、DraII、ApaI。我把插入片段跑一遍 NEBcutter，只保留「在 MCS 里且基因内部没有」的位点，剩下 SfiI、AscI、EcoRV。我在 5′ 端用 AscI、3′ 端用 EcoRV——两种不同的酶，因此是定向克隆。正向引物：基因起始为 acctcaaccggccaggattccacc，在它前面加 AscI 位点 GGCGCGCC，再在更前面加 stuffer 碱基——因为限制酶在线性片段末端切得很差，AscI 需要其位点 5′ 侧多几个碱基。与基因重叠约 20–24 个核苷酸，以 C 或 G 结尾。本题里 N 端正好已经与位点同框。反向引物：基因末端为 ctaagttggtcaccaagaaggca，加间隔碱基，再加平末端酶 EcoRV 的位点 GATATC，最后加 stuffer。间隔碱基有两个任务：把下游标签放进正确读框，以及不要拼出终止密码子。这就是陷阱——如果间隔取 TA，接头处读作 aag gca TA GATATC，你就在标签之前造出了一个 TAG 琥珀终止密码子。蛋白会被合成、会分泌，但完全无法纯化。还有最后一个陷阱：上面写出的反向引物是按正义链方向写的，便于阅读，所以订购之前必须先反向互补，否则合成出来的寡核苷酸什么都结合不上。'
    }
  ],
  oral: {
    q_en: 'Walk me through your cloning strategy for secreted, His-tagged expression in HEK293T.',
    q_cn: '把你为 HEK293T 中分泌型、带 His 标签表达设计的克隆策略讲一遍。',
    model_en: 'I will take the plasmid, the sites, then the two primers. The task asks for secreted expression in HEK293T with a C-terminal His tag, and each of those requirements maps onto a vector feature. Secreted means I need an N-terminal secretion signal, and pSecTag2 carries the murine immunoglobulin kappa leader. The C-terminal His tag is provided by the myc-His tag sitting downstream of the multiple cloning site. And HEK293T is a mammalian line, so I need a mammalian promoter, which is CMV, and a mammalian selection marker, which is hygromycin. That is why the vector is pSecTag2 slash Hygro. But which variant matters. It comes as A, B and C, which differ by only one or two nucleotides in the MCS, and the effect of that is to shift the reading frame. My gene is sandwiched: leader, then MCS with my gene, then myc, then six-His, then stop. It has to be in frame with the leader, or the signal peptide is followed by nonsense and nothing is secreted; and it has to be in frame with the tag, or I get no His tag and cannot purify. So I choose the variant that satisfies both, which here is pSecTag2 A. A third consequence of the same argument: the insert own stop codon has to be removed, otherwise translation terminates before the tag. In this exercise the gene as given has no terminal stop, so the reverse primer can read straight through. Now the restriction sites. The MCS offers SfiI, AscI, HindIII, KpnI, BamHI, BstXI, EcoRV, NotI, XhoI, DraII and ApaI. The step people skip is checking the insert — I run my gene through NEBcutter and look for those same sites inside it, because an enzyme that cuts inside my gene would fragment my own insert during the digest. Intersecting the two lists leaves only SfiI, AscI and EcoRV, and I take AscI at the 5-prime end and EcoRV at the 3-prime end. Two different enzymes, which makes the cloning directional. The forward primer. The gene starts acctcaaccggccaggattccacc. I add the AscI site GGCGCGCC immediately upstream — and here we are lucky, the N-terminus is already in frame with the restriction site. Then I add stuffer bases outside the site, because restriction enzymes cut inefficiently at the very end of a linear fragment and AscI in particular needs several extra bases 5-prime of its recognition sequence; the supplier publishes a table for exactly this. General primer rules apply: about twenty to twenty-four nucleotides of overlap with the gene, and terminate with C or G. The reverse primer. The gene ends ctaagttggtcaccaagaaggca. I add a short spacer, then the EcoRV site GATATC, which is a blunt cutter, then stuffer bases. The spacer is doing two jobs and both are examinable. It fixes the reading frame so the downstream tag is read correctly, and it must not create a stop codon. That is the trap on the slide: if the spacer were TA, then reading across the junction you get aag gca, TA, GATATC — and in frame that spells TAG, an amber stop codon, sitting immediately before the tag. The protein would still be made and still be secreted, but it would be completely unpurifiable, and you would waste weeks before working out why. So the spacer has to be checked in combination with the gene end and the restriction site, not on its own, and TAA and TGA have to be avoided as well. Incidentally, that same amber codon TAG is the one deliberately reassigned to incorporate non-canonical amino acids in Lectures 7 and 8 — here it is the bug, there it is the whole feature. And finally, the warning that ends the slide: the reverse primer as I have written it is in the sense orientation so the logic is readable. Before ordering it, it has to be reversed and complemented, otherwise the oligonucleotide binds nothing.',
    checklist: ['Secreted → N-terminal signal → pSecTag2 has the murine Igk leader', 'C-terminal His → myc-His tag downstream of the MCS', 'HEK293T → CMV promoter, hygromycin marker', 'Variants A/B/C differ by 1–2 nt, shifting the frame — pick A', 'Insert must be in frame with the leader, or nothing is secreted', 'Insert must be in frame with the tag, or no purification', 'Insert own stop must be removed — here there is none', 'MCS sites: SfiI, AscI, HindIII, KpnI, BamHI, BstXI, EcoRV, NotI, XhoI, DraII, ApaI', 'Run the insert through NEBcutter and intersect — only SfiI, AscI, EcoRV survive', 'Take AscI 5-prime and EcoRV 3-prime — two enzymes, so directional', 'Forward: stuffer + GGCGCGCC + acctcaaccggccaggattccacc', 'Stuffer needed because enzymes cut poorly at a linear end', '20–24 nt overlap, end on C or G', 'Reverse: ctaagttggtcaccaagaaggca + spacer + GATATC + stuffer', 'Spacer fixes the frame AND must not create a stop', 'The trap: TA spacer builds TAG, an amber stop before the tag', 'TAG is the codon reassigned in Lectures 7–8 — bug here, feature there', 'Reverse-complement the reverse primer before ordering']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Your insert already ends in its own stop codon. What must change in this design?',
      q_cn: '你的插入片段自带终止密码子。这个设计里必须改什么？',
      options: ['Nothing, since the tag lies downstream and is transcribed anyway', 'The reverse primer must be redesigned so that the stop codon is removed', 'You must switch to the C variant of pSecTag2 for this insert', 'The forward primer needs a longer stuffer outside its restriction site'],
      answer: 1,
      optionNotes: {
        2: { en: 'The A, B and C variants are a reading-frame tool, and a stop codon inside your own gene is not a frame problem. The variants shift the frame of everything downstream of the leader together, so a different one does not delete the stop, it only misreads the whole insert relative to the Igk leader. The stop has to be removed by the reverse primer.', cn: 'A、B、C 三个版本是用来调 reading frame 的工具，而基因自带的终止密码子不是 frame 的问题。三个版本是把 leader 下游的序列整体移框，所以换一个版本并不会去掉那个终止密码子，只会让整个插入片段相对 Igκ leader 被错读。终止密码子只能靠 reverse primer 去掉。' }
      },
      why_en: 'A C-terminal tag only exists if ribosomes reach it. An internal stop terminates translation at the end of your own coding sequence, so the protein is secreted but untagged and unpurifiable. In the exercise as given the gene has no terminal stop, which is why the reverse primer can read straight through — that is a property of this particular gene, not a general rule.',
      why_cn: 'C 端标签只有在核糖体能读到它的前提下才存在。一个内部终止密码子会让翻译在你自己的编码序列末尾就停止，于是蛋白分泌出去了却没有标签、无法纯化。本题给出的基因末端没有终止密码子，这才让反向引物可以直接读通——这是这个特定基因的性质，不是通则。' },
    { type: 'mcq',
      q_en: 'Why is it not enough to check that the spacer bases themselves are not a stop codon?',
      q_cn: '为什么只检查间隔碱基本身不是终止密码子还不够？',
      options: ['Because stop codons must also be checked on the reverse strand', 'Because the codon can straddle the gene end, the spacer and the site', 'Because the spacer is cut away again during the restriction digest', 'Because EcoRV leaves a four-base overhang that adds extra bases at the junction'],
      answer: 1,
      optionNotes: {
        2: { en: 'That is true of the stuffer bases, not of the spacer. The stuffer sits outside the recognition site, on the far side from the gene, and is discarded with the cut-off end, which is why it can be anything. The spacer sits between the gene and the site, ends up in the plasmid and is translated, which is exactly why it can build a stop codon.', cn: '被切掉的是 stuffer 碱基，不是 spacer。stuffer 在 recognition site 的外侧、远离基因的那一头，随着切下来的末端一起丢掉，所以它填什么都行。spacer 在基因和 site 之间，会留在质粒里并被翻译，这正是它可能拼出终止密码子的原因。' }
      },
      why_en: 'Reading frame does not respect the boundaries you drew on paper. In the marked example the gene contributes nothing, the spacer TA contributes two bases and the EcoRV site GATATC contributes the G, and together they read TAG. You have to translate the whole junction in frame, not inspect the pieces separately.',
      why_cn: '读框并不理会你在纸上画的分界。在被标出的例子里，基因贡献零个碱基、间隔 TA 贡献两个、EcoRV 位点 GATATC 贡献那个 G，合起来读出 TAG。你必须把整个接头按读框翻译一遍，而不是分开检查每一段。' },
    { type: 'mcq',
      q_en: 'What is the specific consequence of forgetting to reverse-complement the reverse primer before ordering it?',
      q_cn: '订购反向引物之前忘记做反向互补，具体后果是什么？',
      options: ['The primer anneals normally but extends in the wrong direction', 'The oligo has the top-strand sequence, so it cannot pair with that strand', 'The EcoRV site is scrambled and lost from the amplified product', 'The product is amplified, but the insert ends up in the wrong frame'],
      answer: 1,
      optionNotes: {
        0: { en: 'A polymerase can only extend from a 3-prime OH in the 5-prime to 3-prime direction, so no primer ever extends the wrong way. The failure happens one step earlier: an oligonucleotide with the same sequence as the top strand cannot base-pair with the top strand, so it never anneals and primes nothing.', cn: 'polymerase 只能从 3-prime OH 出发、沿 5-prime 到 3-prime 方向延伸，所以任何 primer 都不可能朝错误方向延伸。问题出在更早一步：一条序列与上链相同的寡核苷酸没办法和上链配对，它根本退不上去，也就引发不了任何合成。' }
      },
      why_en: 'A reverse primer must base-pair with the top strand, so it has to be the reverse complement of it. Writing the sense strand onto the order form gives you an oligonucleotide identical to the region it is supposed to bind, which pairs with nothing. The PCR simply fails, with no product and no obvious clue why.',
      why_cn: '反向引物必须与上链碱基配对，所以它必须是上链的反向互补序列。把正义链抄到订购单上，得到的寡核苷酸与它本该结合的那段区域完全相同，什么都配不上。PCR 直接失败，没有产物，也没有明显线索指出原因。' },
    { type: 'short',
      q_en: 'The exercise awards 2 marks for the plasmid and 2 for the restriction sites. What reasoning earns each pair?',
      q_cn: '这道题质粒占 2 分、限制酶位点占 2 分。各自靠什么推理拿到分？',
      accept: ['leader', 'myc-His', 'CMV', 'frame', 'NEBcutter', 'directional'],
      answer_en: 'The two plasmid marks are for mapping each stated requirement onto a vector feature and then choosing the right variant. Secreted expression requires an N-terminal secretion signal, which is the murine Igk leader; a C-terminal His tag requires the myc-His cassette downstream of the MCS; and HEK293T requires a mammalian promoter, CMV, with hygromycin selection. That identifies pSecTag2/Hygro. The second half of the mark is the reading frame: the variants A, B and C differ by one or two nucleotides in the MCS precisely so that one of them puts your insert in frame with both the leader upstream and the tag downstream, and you have to say which and why. The two restriction-site marks are for the intersection, not for naming enzymes. You list what the MCS offers, then run the insert through NEBcutter and discard every enzyme that also cuts inside your gene, because that digest would fragment your own insert. Here that leaves only SfiI, AscI and EcoRV out of eleven. Then you take two different enzymes, AscI at the 5-prime end and EcoRV at the 3-prime end, because using two different ones is what makes the cloning directional rather than letting the insert go in either way round. Naming sites without showing you checked the insert is the standard way to lose those two marks.',
      answer_cn: '质粒的 2 分，是把题目里每一条要求映射到载体的一个特性上，然后选对版本。分泌表达要求 N 端分泌信号，即鼠源 Igκ leader；C 端 His 标签要求 MCS 下游的 myc-His 盒；HEK293T 要求哺乳动物启动子 CMV 加 hygromycin 选择。这样就确定了 pSecTag2/Hygro。这一分的后半是读框：A、B、C 三个版本在 MCS 里差一两个碱基，正是为了让其中一个能使你的插入片段与上游 leader 和下游标签同时同框，你必须说出是哪一个、为什么。限制酶位点的 2 分，考的是取交集而不是报酶名。先列出 MCS 提供了什么，再把插入片段跑一遍 NEBcutter，把所有也切基因内部的酶剔除——那样的酶切会把你自己的插入片段打碎。这里 11 个位点最后只剩 SfiI、AscI、EcoRV。然后选两种不同的酶，5′ 端用 AscI、3′ 端用 EcoRV，因为用两种不同的酶才能让克隆定向、而不是让插入片段随便哪个方向都能进去。只报位点、不展示你检查过插入片段，就是丢掉这 2 分的标准方式。'
    }
  ]
}

]);
