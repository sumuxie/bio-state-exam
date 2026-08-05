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
      why_en: 'Both conditions apply simultaneously. A strong assignment score cannot compensate for an oral below 10 points.',
      why_cn: '两个条件必须同时满足。作业分再高也补不了口试低于 10 分。' },
    { type: 'mcq',
      q_en: 'How many points does the oral exam carry?',
      q_cn: '口试占多少分？',
      options: ['25', '50', '10', '100'],
      answer: 1,
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
      options: ['Natural proteins produced recombinantly', 'Modified natural proteins', 'Artificial proteins designed de novo', 'Proteins purified directly from their native tissue source'],
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
      options: ['They are the same thing described twice', 'Supply is about having any reliable source at all; economics is about yield and cost once you have one', 'Supply applies to enzymes, economics to therapeutics', 'Economics only matters for de novo designed proteins'],
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
  }
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
      options: ['It increases receptor affinity', 'The pair sits in the dimerisation interface, so swapping blocks self-association and the drug stays monomeric', 'It shifts the isoelectric point above physiological pH', 'It adds a fatty acid that binds albumin'],
      answer: 1,
      why_en: 'Native insulin must dissociate from hexamers before absorption. Blocking dimerisation removes that delay. Receptor binding is unchanged.',
      why_cn: '天然胰岛素必须先从六聚体解聚才能吸收。阻断二聚化就去掉了这个延迟环节。受体结合完全没变。' },
    { type: 'mcq',
      q_en: 'Glargine is formulated at pH 4 and injected into tissue at pH 7.4. What happens, and why?',
      q_cn: 'Glargine 配制在 pH 4、注射进 pH 7.4 的组织。会发生什么？为什么？',
      options: ['It denatures irreversibly at the higher pH', 'Extra arginines shift its pI to ~6.7, so at tissue pH it is at its isoelectric point and microprecipitates, redissolving over ~24 h', 'The pH change activates a protease that trims the propeptide', 'It binds albumin more tightly at neutral pH'],
      answer: 1,
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
      options: ['The gene is too large for a bacterial plasmid', 'Its activity requires glycosylation, and prokaryotes do not glycosylate', 'E. coli proteases degrade it immediately', 'It requires a mammalian-specific signal peptide'],
      answer: 1,
      why_en: 'Glycosylation is critical for EPO activity and prokaryotes have no glycosylation machinery. This is the clearest case of the host determining whether the protein works.',
      why_cn: '糖基化对 EPO 活性至关重要，而原核生物没有糖基化机器。这是「宿主决定蛋白能否工作」最清楚的例子。' },
    { type: 'mcq',
      q_en: 'What does Darbepoetin\'s set of five mutations actually accomplish?',
      q_cn: 'Darbepoetin 的那 5 个突变实际上做到了什么？',
      options: ['It increases receptor binding affinity fivefold', 'It creates two extra N-linked glycosylation sites, extending in vivo half-life', 'It removes two protease cleavage sites', 'It shifts the isoelectric point to precipitate at tissue pH'],
      answer: 1,
      why_en: 'The mutations do not change the fold or the receptor contact — they create new sequons for the host to glycosylate. The engineering target is the post-translational modification.',
      why_cn: '这些突变既没改折叠，也没改受体接触面——它们创造了新的糖基化序列子供宿主加糖。工程改造的对象是翻译后修饰。' },
    { type: 'mcq',
      q_en: 'By what mechanism do extra N-glycans extend a protein\'s circulating half-life?',
      q_cn: '额外的 N-糖链通过什么机制延长蛋白的循环半衰期？',
      options: ['They stabilise the fold against thermal denaturation', 'They are bulky and negatively charged, increasing hydrodynamic radius to slow glomerular filtration and masking hepatic clearance receptors', 'They block the receptor so the drug is not internalised', 'They catalyse their own re-attachment after cleavage'],
      answer: 1,
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
    { src: 'img/glp1-tissue-effects.png',
      alt: 'Diagram of GLP-1 physiological effects across the brain, kidney, adipose tissue, heart, pancreas, muscle and GI tract',
      caption_en: 'GLP-1 receptors sit on far more tissues than the pancreas — brain (appetite, satiety), heart (cardioprotection), kidney, fat, muscle and gut. That is why GLP-1 agonists affect appetite and gastric emptying, not only insulin secretion. Source: PESB Lecture 1.',
      caption_cn: 'GLP-1 受体分布远不止胰腺——大脑（食欲、饱腹感）、心脏（心脏保护）、肾、脂肪、肌肉和消化道都有。这就是为什么 GLP-1 激动剂影响的不只是胰岛素分泌，还有食欲和胃排空。来源：PESB 第 1 讲。' }
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
      options: ['Thermal denaturation and aggregation', 'DPP-4 cleavage after Ala8, and renal clearance of the small peptide', 'Hepatic first-pass metabolism and receptor internalisation', 'Disulfide scrambling and deamidation'],
      answer: 1,
      why_en: 'Both must be named for a complete answer — DPP-4 proteolysis and renal clearance. Every drug in the series fixes both, which is why they stack modifications.',
      why_cn: '完整回答必须两个都说到——DPP-4 蛋白水解和肾脏清除。系列里每个药都同时解决这两点，所以才要叠加多重修饰。' },
    { type: 'mcq',
      q_en: 'What is unusual about exenatide compared with the other GLP-1 drugs?',
      q_cn: '与其他 GLP-1 药物相比，exenatide 特别在哪里？',
      options: ['It is the only one given orally', 'It is a natural peptide from Gila monster venom, DPP-4 resistant by accident rather than by design', 'It is the only one with a fatty acid modification', 'It is a small molecule rather than a peptide'],
      answer: 1,
      why_en: 'Exenatide is exendin-4, which happens to carry Gly at position 2. It was found, not engineered — a reminder that nature is a design library. Orforglipron is the oral small molecule.',
      why_cn: 'Exenatide 就是 exendin-4，恰好第 2 位是 Gly。它是被**找到**的，不是设计的——提醒我们自然界本身就是设计库。口服小分子是 Orforglipron。' },
    { type: 'mcq',
      q_en: 'Why must semaglutide be chemically synthesised rather than produced recombinantly?',
      q_cn: '为什么 semaglutide 必须化学合成而不能重组生产？',
      options: ['Its fatty acid chain is too long for a cell to tolerate', 'It contains Aib at position 8, a non-proteinogenic residue that cannot be genetically encoded', 'Recombinant production would glycosylate it incorrectly', 'The peptide is too short for ribosomal synthesis'],
      answer: 1,
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
      options: ['Alanine is smaller, so the active site is more open', 'Methionine next to the catalytic serine is oxidised by bleach to the sulfoxide, killing activity; alanine cannot be oxidised', 'Alanine increases thermal stability at wash temperature', 'It removes an autolysis cleavage site'],
      answer: 1,
      why_en: 'The problem is chemical oxidation of a specific residue adjacent to the catalytic serine. Swapping in a non-oxidisable residue removes the vulnerability entirely.',
      why_cn: '问题在于催化丝氨酸旁边那个特定残基会被化学氧化。换成不可被氧化的残基就彻底消除了这个弱点。' },
    { type: 'mcq',
      q_en: 'Why do detergent proteases need engineering against autolysis?',
      q_cn: '为什么洗涤剂中的蛋白酶需要针对自溶做改造？',
      options: ['Detergent surfactants cleave them', 'A protease is itself a protein, so it is its own substrate and the molecules digest each other', 'High pH hydrolyses the peptide backbone spontaneously', 'Bleach fragments the polypeptide chain'],
      answer: 1,
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
    { src: 'img/vaccine-platforms.png',
      alt: 'Diagram of four COVID-19 vaccine platforms: mRNA-LNP, adenovirus vector, recombinant protein, and inactivated virus',
      caption_en: 'The four platforms used for COVID-19 vaccines side by side: mRNA-LNP (Moderna/Pfizer — a lipid nanoparticle carrying mRNA for the spike protein), adenovirus vector (AstraZeneca/Sputnik V — a viral shell carrying spike-encoding DNA), recombinant protein (Novavax — the spike protein itself, made in cell culture), and inactivated virus (Sinopharm/Sinovac — the whole killed virus). Each is a different answer to "how do I show the immune system a spike protein without an active infection?" Source: PESB Lecture 1.',
      caption_cn: '新冠疫苗使用的四种平台并列对比：mRNA-脂质纳米颗粒（Moderna/辉瑞——脂质纳米颗粒携带编码刺突蛋白的 mRNA）、腺病毒载体（阿斯利康/卫星 V——病毒外壳携带编码刺突的 DNA）、重组蛋白（Novavax——细胞培养生产的刺突蛋白本身）、灭活病毒（国药/科兴——整个灭活的病毒）。每一种都是对同一个问题的不同回答：如何在没有活动性感染的情况下把刺突蛋白展示给免疫系统。来源：PESB 第 1 讲。' }
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
      options: ['Fully murine', 'Chimeric — murine variable region on human constant region', 'Humanised — only murine CDRs grafted onto a human framework', 'Fully human'],
      answer: 2,
      why_en: '-omab is fully murine, -ximab chimeric, -zumab humanised, -umab fully human. The stem encodes how far humanisation went.',
      why_cn: '-omab 全鼠源，-ximab 嵌合，-zumab 人源化，-umab 全人源。词干编码了人源化进行到哪一步。' },
    { type: 'mcq',
      q_en: 'Why must murine therapeutic antibodies be humanised?',
      q_cn: '为什么鼠源治疗性抗体必须人源化？',
      options: ['Murine antibodies cannot bind human antigens', 'They trigger a HAMA response — the patient neutralises the drug and may develop serum sickness', 'They are too large to reach the tumour', 'Mouse cells cannot be cultured at scale'],
      answer: 1,
      why_en: 'Human anti-mouse antibodies neutralise the therapeutic and can cause serum sickness. Humanisation, or fully human antibodies from phage display or transgenic mice, avoids this.',
      why_cn: '人抗鼠抗体会中和治疗性抗体，还可能引起血清病。人源化，或者用噬菌体展示、转基因小鼠直接得到全人源抗体，可以避开这个问题。' },
    { type: 'mcq',
      q_en: 'What do the two proline substitutions in the "2P" spike accomplish?',
      q_cn: '「2P」刺突中的两个脯氨酸替换起到什么作用？',
      options: ['They increase expression yield in mammalian cells', 'They lock the fusion glycoprotein in its pre-fusion conformation, which displays the neutralising epitopes', 'They remove a protease cleavage site so the spike is not activated', 'They add two N-glycosylation sites to extend half-life'],
      answer: 1,
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
      options: ['The chemical synthesis of proteins without cells', 'The (re-)design of whole biological systems that do not already exist in nature', 'The use of computers to predict protein structure', 'The synthesis of genes rather than their isolation'],
      answer: 1,
      why_en: 'The emphasis is on whole systems that do not exist in nature, which distinguishes it from engineering a single protein.',
      why_cn: '重点在于自然界中不存在的**整个系统**，这正是它与改造单个蛋白的区别。' },
    { type: 'mcq',
      q_en: 'The heme that gives plant-based burgers their beef flavour is produced how?',
      q_cn: '植物基汉堡中产生牛肉风味的血红素是怎么生产的？',
      options: ['Extracted from soy roots at scale', 'Soy leghemoglobin expressed recombinantly in Pichia pastoris', 'Chemically synthesised from porphyrin precursors', 'Recovered as a by-product of beef processing'],
      answer: 1,
      why_en: 'It is soy leghemoglobin made in the yeast Pichia pastoris — a synthetic-biology headline resting on an ordinary expression-host decision.',
      why_cn: '是在毕赤酵母中生产的大豆血红蛋白——一个合成生物学的头条，底下是一个平常的表达宿主决定。' },
    { type: 'mcq',
      q_en: 'Producing PHB by microbial fermentation rather than from petroleum is an example of which discipline?',
      q_cn: '用微生物发酵而非石油来生产 PHB，属于哪个学科的例子？',
      options: ['Structural biology', 'Metabolic engineering — rerouting carbon flux to a product the microbe does not normally accumulate', 'Directed evolution', 'Cell-free protein synthesis'],
      answer: 1,
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
    { src: 'img/protein-level-modification.png',
      alt: 'Diagram showing four protein-level operations — fusion, mutagenesis, amplification, synthesis — with fusion, mutagenesis and amplification crossed out as not directly possible on a protein',
      caption_en: 'The slide\'s own framing of the argument: starting from a folded protein (centre), fusion, mutagenesis and amplification are all marked impossible to do directly at the protein level (✕) — the only arrow left open runs from synthesis, i.e. building the protein from a sequence in the first place. That is the whole argument in one picture. Source: PESB Lecture 1, "Modifications at the protein level?"',
      caption_cn: '幻灯片自己给出的论证框架：从一个折叠好的蛋白出发（中央），融合、突变、扩增三项都被标记为无法在蛋白水平直接完成（✕）——唯一还开着的箭头来自「合成」，也就是一开始就从序列把蛋白造出来。整个论证浓缩在一张图里。来源：PESB 第 1 讲，"Modifications at the protein level?"' }
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
      options: ['DNA → RNA', 'RNA → DNA', 'RNA → protein', 'Protein → nucleic acid'],
      answer: 3,
      why_en: 'Protein → protein and protein → nucleic acid are both impossible. RNA → DNA is possible in retroviruses via reverse transcriptase.',
      why_cn: '蛋白→蛋白 和 蛋白→核酸 都不可能。RNA→DNA 在逆转录病毒中通过逆转录酶是可以的。' },
    { type: 'mcq',
      q_en: 'Which phrase does the lecture use for the practical half of the argument?',
      q_cn: '讲义用哪个说法来表述这个论证的现实一半？',
      options: ['"Proteins are thermodynamically unstable"', '"A marked absence of tools for targeted manipulation at the protein level"', '"Protein synthesis is energetically expensive"', '"Post-translational modifications are host-dependent"'],
      answer: 1,
      why_en: 'That is the slide\'s own phrasing and worth quoting. Most students recite only the central dogma and omit this second layer, which is what the examiner is waiting for.',
      why_cn: '这是幻灯片的原话，值得直接引用。大多数学生只背中心法则、漏掉这第二层，而这正是考官在等的。' },
    { type: 'mcq',
      q_en: 'Why is chemical modification with NHS esters a poor substitute for DNA-level engineering?',
      q_cn: '为什么用 NHS 酯做化学修饰不能替代 DNA 层面的工程改造？',
      options: ['NHS esters denature the protein', 'A typical protein has many lysines, so the reaction gives a heterogeneous mixture rather than a defined product', 'NHS esters only work below pH 4', 'The modification is not stable in serum'],
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
      options: ['~1,000 reagents, free of charge', '~100,000 reagents, roughly $80 per clone covering shipping and handling', '~10,000 reagents, at full commercial price', '~1,000,000 reagents, by subscription only'],
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
      options: ['Only the cloning step', 'Cloning, sequencing, expression-host optimisation and purification development', 'Only sequencing and purification', 'Nothing — you must re-verify everything from scratch'],
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
      options: ['Bacterial polymerases cannot read eukaryotic promoters', 'Genomic DNA contains introns and E. coli has no spliceosome, so the product is nonsense', 'The gene would be too long for a plasmid', 'Eukaryotic codons cannot be read by bacterial ribosomes'],
      answer: 1,
      why_en: 'Introns are the answer. Prokaryotes have no splicing machinery, so the unspliced transcript is translated as garbage. The fix is to start from mature mRNA and make cDNA.',
      why_cn: '答案是内含子。原核生物没有剪接机器，所以未剪接的转录本翻译出来是乱码。解决办法是从成熟 mRNA 出发做 cDNA。' },
    { type: 'mcq',
      q_en: 'In what situation is RT-PCR indispensable rather than merely old-fashioned?',
      q_cn: '在什么情况下 RT-PCR 不只是「老办法」，而是不可替代？',
      options: ['When the protein is toxic to the host', 'When you do not know the exact sequence of your target', 'When the gene exceeds 8 kbp', 'When you need codon optimisation'],
      answer: 1,
      why_en: 'Gene synthesis needs a sequence to order. If you do not have one, RT-PCR from the source organism\'s mRNA is how you get the coding sequence at all.',
      why_cn: '基因合成需要有序列才能下单。如果你没有序列，从来源生物的 mRNA 做 RT-PCR 才是拿到编码序列的唯一办法。' },
    { type: 'mcq',
      q_en: 'Why is cDNA described as "intron-free by construction"?',
      q_cn: '为什么说 cDNA「在构造上」就不含内含子？',
      options: ['Reverse transcriptase actively excises introns as it copies', 'It is copied from mature mRNA, from which the cell has already removed the introns', 'The PCR primers are designed to skip intronic regions', 'Introns are degraded by RNase H during the reaction'],
      answer: 1,
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
      options: ['It changes the protein sequence but not the DNA length', 'It changes which synonymous codons are used, but not the encoded amino-acid sequence', 'It changes the promoter but not the coding sequence', 'It changes the tRNA pool of the host'],
      answer: 1,
      why_en: 'It swaps rare codons for abundant ones. Because the swap is synonymous, the protein is identical — that silence is precisely what makes it legitimate.',
      why_cn: '它把稀有密码子换成常用密码子。因为替换是同义的，蛋白完全相同——这种「沉默」正是它站得住脚的原因。' },
    { type: 'mcq',
      q_en: 'What goes wrong when a human gene with E. coli-rare codons is expressed in E. coli?',
      q_cn: '当一个含有大肠杆菌罕用密码子的人源基因在大肠杆菌里表达时会出什么问题？',
      options: ['The protein misfolds because the amino acids are wrong', 'The ribosome stalls waiting for scarce tRNAs, giving low yield, truncations and frameshifting', 'The gene is silenced by methylation', 'RNA polymerase cannot initiate transcription'],
      answer: 1,
      why_en: 'Codon usage bias is matched by tRNA abundance. Rare codons mean scarce tRNAs, and a stalled ribosome produces truncated or frameshifted product.',
      why_cn: '密码子使用偏好与 tRNA 丰度是匹配的。稀有密码子意味着 tRNA 稀缺，停滞的核糖体会产生截短或移码的产物。' },
    { type: 'mcq',
      q_en: 'Why is "use the most frequent codon everywhere" not always the best strategy?',
      q_cn: '为什么「到处都用最高频密码子」并不总是最佳策略？',
      options: ['It makes the gene too long to synthesise', 'Rare codons sometimes create deliberate translational pauses that assist co-translational folding', 'The most frequent codon is often a stop codon', 'It would change the protein sequence'],
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
      options: ['They are unrelated properties that happen to co-occur', 'Both follow from 3′→5′ exonuclease: proofreading removes mismatches (high fidelity) and also trims the non-templated terminal A (blunt ends)', 'Both follow from the enzymes\' different optimal temperatures', 'Both follow from Taq being thermostable and Pfu not being'],
      answer: 1,
      why_en: 'One cause, three consequences. Without proofreading the mismatch stays (low fidelity) and terminal transferase adds an A (sticky end); with it, both are removed.',
      why_cn: '一个原因，三个后果。没有校对活性时错配留着（低保真），末端转移酶还加一个 A（黏末端）；有校对活性时两者都被去掉。' },
    { type: 'mcq',
      q_en: 'You are amplifying a gene that will be cloned into an expression vector and translated. Which polymerase?',
      q_cn: '你要扩增一个将要克隆进表达载体并被翻译的基因。用哪种聚合酶？',
      options: ['Taq, because it is cheaper and gives sticky ends for easy ligation', 'A proofreading polymerase such as Pfu or Phusion', 'Klenow fragment, because it lacks exonuclease activity', 'T7 DNA polymerase, because it has no 5′→3′ exonuclease'],
      answer: 1,
      why_en: 'Any unproofread misincorporation becomes a permanent mutation in the expressed protein. The rule: if it will be translated, proofread it.',
      why_cn: '任何未被校对的错误掺入都会变成表达蛋白中的永久突变。规则就是：要被翻译的，就用校对酶。' },
    { type: 'mcq',
      q_en: 'What does a hot-start polymerase prevent?',
      q_cn: '热启动聚合酶防止的是什么？',
      options: ['Enzyme denaturation at 95 °C', 'Non-specific primer extension during reaction setup, before the first denaturation', 'Primer dimers forming during the annealing step', 'Loss of the 3′-A overhang'],
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
      options: ['It is thermostable up to 100 °C', 'It initiates only at the T7 promoter and ignores host promoters, so transcription of your gene is orthogonal to the host', 'It has proofreading activity and so makes error-free transcripts', 'It works without any promoter at all'],
      answer: 1,
      why_en: 'Strict promoter specificity means it transcribes your gene and nothing else. That orthogonality is what both the T7 expression system (Lec 3) and cell-free synthesis (Lec 7–8) are built on.',
      why_cn: '严格的启动子专一性意味着它只转录你的基因、不碰别的。这种正交性正是 T7 表达系统（第 3 讲）和无细胞合成（第 7–8 讲）的基础。' },
    { type: 'mcq',
      q_en: 'Which enzyme family would you use to convert mRNA into a clonable DNA fragment?',
      q_cn: '要把 mRNA 转换成可克隆的 DNA 片段，该用哪一类酶？',
      options: ['RNA polymerase', 'Reverse transcriptase — an RNA-dependent DNA polymerase', 'Template-independent poly(A) polymerase', 'Klenow fragment'],
      answer: 1,
      why_en: 'Reverse transcriptase makes cDNA from an RNA template. AMV and M-MuLV are the two named examples.',
      why_cn: '逆转录酶以 RNA 为模板合成 cDNA。讲义列出的两个例子是 AMV 和 M-MuLV。' },
    { type: 'mcq',
      q_en: 'What is distinctive about template-independent polymerases such as E. coli poly(A) polymerase?',
      q_cn: '像大肠杆菌 poly(A) 聚合酶这样不依赖模板的聚合酶有什么特别之处？',
      options: ['They require no primer, only a template', 'They need no template at all and add untemplated homopolymer tails to RNA 3′ ends', 'They synthesise 3′→5′ instead of 5′→3′', 'They copy protein sequence into RNA'],
      answer: 1,
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
      options: ['It cuts any single-stranded RNA', 'It hydrolyses RNA only when the RNA is hybridised to DNA', 'It cuts DNA only when hybridised to RNA', 'It degrades both DNA and RNA indiscriminately'],
      answer: 1,
      why_en: 'It requires an RNA:DNA hybrid. Free RNA and pure DNA, single- or double-stranded, are untouched — which is why it is used to remove the RNA strand after reverse transcription.',
      why_cn: '它需要 RNA:DNA 杂合双链。游离 RNA 和纯 DNA（不论单双链）都不受影响——这就是它被用来在逆转录后去除 RNA 链的原因。' },
    { type: 'mcq',
      q_en: 'Which nuclease is the chew-back enzyme in Gibson assembly?',
      q_cn: 'Gibson 组装中负责「啃回去」的核酸酶是哪一个？',
      options: ['DNase I', 'Exonuclease I', 'T5 exonuclease', 'Micrococcal nuclease'],
      answer: 2,
      why_en: 'T5 exonuclease hydrolyses 5′ ends of dsDNA to expose the single-stranded 3′ overhangs that anneal. Being heat-labile, it then self-destructs before it can damage the product.',
      why_cn: 'T5 外切酶水解双链 DNA 的 5′ 末端，暴露出用于退火的单链 3′ 突出。因为不耐热，它随后会自行失活，不会破坏拼好的产物。' },
    { type: 'mcq',
      q_en: 'Phage λ Integrase and Excisionase appear in the nuclease list. Where do you meet them again?',
      q_cn: '噬菌体 λ 整合酶和切除酶出现在核酸酶列表里。你在哪里会再次遇到它们？',
      options: ['As the enzymes in Golden Gate assembly', 'As the enzymes Gateway cloning commercialises in its BP and LR clonase mixes', 'As the proofreading component of Phusion', 'As the restriction enzymes used in TA cloning'],
      answer: 1,
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
      options: ['PCR products are always blunt and ligase cannot join blunt ends', 'Synthetic oligonucleotides carry a 5′-OH rather than a 5′-phosphate, and ligase requires the phosphate', 'The polymerase remains bound to the product and blocks ligase', 'Residual dNTPs inhibit T4 ligase'],
      answer: 1,
      why_en: 'Ligase needs a 5′-phosphate plus a 3′-OH. Synthetic primers supply a 5′-OH, so you must either order phosphorylated primers or treat the product with T4 PNK.',
      why_cn: '连接酶需要 5′-磷酸加 3′-羟基。合成引物提供的是 5′-羟基，所以你要么订购磷酸化引物，要么用 T4 PNK 处理产物。' },
    { type: 'mcq',
      q_en: 'Why does dephosphorylating a vector reduce background colonies?',
      q_cn: '为什么把载体去磷酸化能减少背景菌落？',
      options: ['It prevents the vector from being taken up by non-recombinant cells', 'It removes the vector\'s 5′-phosphates so the vector cannot self-ligate into an empty circle', 'It degrades any residual uncut vector', 'It inactivates the restriction enzyme carried over from the digest'],
      answer: 1,
      why_en: 'Self-ligated empty vector transforms very efficiently and swamps the plate. Without 5′-phosphates the vector cannot close on itself, while the insert still supplies phosphates for the vector–insert junctions.',
      why_cn: '自连的空载体转化效率极高，会淹没整个平板。没有 5′-磷酸，载体就无法自己首尾相接；而插入片段仍然带着磷酸，可以完成载体–插入片段的连接。' },
    { type: 'mcq',
      q_en: 'Why can freshly restriction-digested vector and insert be ligated with no extra treatment?',
      q_cn: '为什么刚用限制酶切好的载体和插入片段可以不做任何额外处理就直接连接？',
      options: ['T4 ligase can join 5′-OH ends when they are cohesive', 'Restriction enzymes leave a 5′-phosphate, which is exactly what ligase requires', 'The restriction enzyme itself catalyses the ligation', 'The cell repairs both nicks after transformation regardless'],
      answer: 1,
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
      options: ['It is not recognised by the polymerase', 'It lacks the 3′-OH, so no further phosphodiester bond can be formed', 'It carries a fluorophore too bulky for the active site', 'It base-pairs incorrectly and stalls the enzyme'],
      answer: 1,
      why_en: 'No 3′-OH means no acceptor for the next nucleotide\'s phosphate. Random incorporation across many molecules generates a nested fragment set covering every position.',
      why_cn: '没有 3′-羟基就没有下一个核苷酸磷酸的受体。在大量分子中随机掺入，就产生了覆盖每个位置的、长度递增的片段集合。' },
    { type: 'mcq',
      q_en: 'Where should you place a sequencing primer relative to a mutation you want to verify?',
      q_cn: '要验证一个突变，测序引物应该放在相对于突变位点的什么位置？',
      options: ['Directly adjacent, to maximise signal at the site', '50–100 bp upstream, because the first 20–40 bases of the trace are unreadable', '1000 bp upstream, at the limit of the read', 'Downstream, reading back towards the site'],
      answer: 1,
      why_en: 'Primer and dye-blob artefacts swamp the start of the trace. A primer designed right against the site puts the mutation in the unreadable stretch — a mistake that costs weeks.',
      why_cn: '引物峰和染料伪迹淹没了图谱的起始段。引物紧贴目标位点会让突变正好落在读不出来的那一段——这个错误会浪费好几周。' },
    { type: 'mcq',
      q_en: 'What sets the ~1000–1200 bp Sanger read length?',
      q_cn: '是什么决定了 Sanger 约 1000–1200 bp 的读长？',
      options: ['The polymerase falls off after 1000 nucleotides', 'Capillary electrophoresis can no longer resolve fragments differing by one nucleotide as they get longer', 'ddNTPs are exhausted after 1000 incorporations', 'The fluorophores photobleach beyond that length'],
      answer: 1,
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
      options: ['To denature and remove insulin so only contaminants remained', 'The acidic alcohol inactivated proteases while keeping insulin soluble', 'To precipitate insulin immediately for easy filtration', 'To sterilise the tissue before extraction'],
      answer: 1,
      why_en: 'Protease inactivation was the point — insulin is a small protein and would otherwise be degraded during extraction. This foreshadows Lecture 4\'s protease inhibitors.',
      why_cn: '灭活蛋白酶才是关键——胰岛素是个小蛋白，不然提取过程中会被降解掉。这正是第 4 讲蛋白酶抑制剂的伏笔。' },
    { type: 'mcq',
      q_en: 'What does the bioassay-in-dogs step demonstrate about purification in general?',
      q_cn: '在犬身上做生物测定这一步，对纯化这件事总体说明了什么？',
      options: ['That purity by mass is sufficient proof of a correct product', 'That a functional assay, not just a purity check, is needed to confirm you have the right, active protein', 'That animal testing is required by law for all purifications', 'That insulin cannot be assayed any other way'],
      answer: 1,
      why_en: 'A gel shows purity, not function. The dog bioassay is the point that a functional readout is what actually confirms success.',
      why_cn: '跑胶只能看纯度，看不出功能。犬的生物测定说明的正是：真正确认成功的是**功能读数**。' },
    { type: 'mcq',
      q_en: 'Which two later-course techniques does this 1922 procedure prefigure?',
      q_cn: '这套 1922 年的流程为后面课程中的哪两项技术埋下了伏笔？',
      options: ['PCR and Sanger sequencing', 'Protease inhibitors and ammonium-sulfate precipitation', 'Golden Gate cloning and Gateway cloning', 'SDS-PAGE and Western blotting'],
      answer: 1,
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
      options: ['It is the only software that can find restriction sites', 'An interconnected workflow — primer design, cloning, sequencing traces and sequence analysis in one place, plus vector databases and predefined strategies', 'It is required by journals for publication', 'It works offline while free tools require internet access'],
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
      options: ['High copy number is always better; expression plasmids just have not been optimised', 'Cloning\'s only job is DNA yield, so more copies is strictly better; expression plasmids suffer metabolic burden at high copy number, hurting growth and expression', 'Expression plasmids cannot physically replicate to high copy number', 'High copy number destabilises only expression cassettes, not MCS regions'],
      answer: 1,
      why_en: 'Cloning wants maximum extractable DNA. Expression plasmids pay a metabolic cost for high copy number that can reduce yield or cause plasmid loss — this is why pET sits at only 15–20 copies.',
      why_cn: '克隆要的是尽可能多能抽出来的 DNA。表达质粒在高拷贝数下要付出代谢代价，可能降低产量甚至丢质粒——这正是 pET 只有 15–20 拷贝的原因。' },
    { type: 'mcq',
      q_en: 'Two plasmids share the same ORI. What happens if you try to co-maintain them in one cell?',
      q_cn: '两个质粒共用同一个复制起点。如果你想在同一个细胞里同时维持它们，会发生什么？',
      options: ['They replicate independently with no issue', 'They are incompatible — they compete for the same replication machinery and cannot be stably co-maintained', 'One will always integrate into the chromosome', 'They will recombine into a single plasmid'],
      answer: 1,
      why_en: 'Same-ORI plasmids are deemed incompatible. This matters directly when you need to co-express two proteins from separate plasmids in Lecture 3.',
      why_cn: '相同 ORI 的质粒被判定为不相容。这在第 3 讲需要从两个不同质粒共表达两个蛋白时会直接产生影响。' },
    { type: 'mcq',
      q_en: 'Why are cloning strains such as DH5α specifically recA⁻ and endA⁻?',
      q_cn: '为什么 DH5α 这类克隆用菌株特意要 recA⁻ 和 endA⁻？',
      options: ['To increase transformation efficiency only', 'recA⁻ prevents recombination-driven deletion between repeated sequences; endA⁻ prevents a periplasmic nuclease from degrading prepped plasmid DNA', 'To allow blue-white screening', 'To enable ccdB counter-selection'],
      answer: 1,
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
      options: ['They are unstable outside bacterial culture medium', 'They target the bacterial ribosome (30S/50S) or cell wall, structures unique to prokaryotes', 'Eukaryotic cells actively pump them out', 'Eukaryotic cells lack the transporter needed to take them up'],
      answer: 1,
      why_en: 'Kanamycin, tetracycline, spectinomycin and gentamicin hit 30S; chloramphenicol hits 50S; ampicillin hits the cell wall. All are prokaryote-specific structures.',
      why_cn: '卡那、四环素、壮观、庆大打 30S；氯霉素打 50S；氨苄打细胞壁。这些都是原核生物特有的结构。' },
    { type: 'mcq',
      q_en: 'You see hundreds of tiny colonies surrounding a few large ones on an ampicillin plate. What happened?',
      q_cn: '你在氨苄平板上看到几个大菌落周围有几百个小菌落。发生了什么？',
      options: ['Contamination with a resistant fungal species', 'Secreted β-lactamase cleared ampicillin in a halo around each real colony, letting non-resistant satellite colonies grow there', 'The plate was incubated at the wrong temperature', 'Ampicillin degraded from age before plating'],
      answer: 1,
      why_en: 'β-lactamase is secreted into the periplasm and leaks out, destroying ampicillin locally. Picking a satellite colony gives you no plasmid at all.',
      why_cn: 'β-内酰胺酶被分泌到周质并渗漏出来，在局部把氨苄降解掉。挑到卫星菌落等于完全没有质粒。' },
    { type: 'mcq',
      q_en: 'Why is kanamycin resistance not vulnerable to the satellite-colony problem the way ampicillin is?',
      q_cn: '为什么卡那抗性不像氨苄那样容易出现卫星菌落问题？',
      options: ['Kanamycin cannot be degraded by any enzyme', 'The kanamycin resistance enzyme acts intracellularly, modifying the drug rather than depleting it in the surrounding medium', 'Kanamycin plates are never incubated long enough for satellites to form', 'E. coli does not secrete anything in response to kanamycin'],
      answer: 1,
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
      options: ['Ribosomal protein synthesis, which is non-essential short-term', 'DNA gyrase (topoisomerase II), which is essential for relaxing supercoiled DNA and therefore for cell survival', 'RNA polymerase, blocking all transcription', 'Cell wall synthesis, causing osmotic lysis'],
      answer: 1,
      why_en: 'Type II topoisomerase is indispensable — it cuts both strands to relax supercoiling. Inhibiting it is lethal, which is exactly why it works as a counter-selection toxin.',
      why_cn: 'II 型拓扑异构酶是不可或缺的——它切开两条链来松弛超螺旋。抑制它是致命的，这正是它能作为负选择毒素起作用的原因。' },
    { type: 'mcq',
      q_en: 'Which statement correctly distinguishes positive from negative selection?',
      q_cn: '哪一句正确区分了正选择和负选择？',
      options: ['Positive selection kills unwanted cells; negative selection keeps wanted cells', 'Positive selection means only desired cells survive (e.g. antibiotic resistance); negative selection means undesired cells are actively killed (e.g. ccdB)', 'They are two names for the same mechanism', 'Negative selection only works in eukaryotic cells'],
      answer: 1,
      why_en: 'Positive = "only what I want survives." Negative = "what I don\'t want dies." Getting this backwards is a common mistake worth avoiding explicitly.',
      why_cn: '正选择＝「只有我要的活下来」。负选择＝「我不要的会死」。把这两个说反是一个常见错误，值得特别注意避免。' },
    { type: 'mcq',
      q_en: 'Why does a ccdB-containing plasmid require special host cells such as DB3.1 to propagate?',
      q_cn: '为什么含 ccdB 的质粒需要 DB3.1 这类特殊宿主细胞才能扩增？',
      options: ['DB3.1 has a higher transformation efficiency', 'Ordinary E. coli would be killed by CcdB expressed from the plasmid; DB3.1 carries a mutated gyrase that CcdB cannot inhibit', 'DB3.1 lacks the F plasmid entirely', 'DB3.1 expresses extra CcdA to neutralise the toxin'],
      answer: 1,
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
      options: ['IIP enzymes need ATP, IIS enzymes do not', 'IIP recognise palindromic sites and cut within them; IIS recognise non-palindromic sites and cut outside them at a fixed distance', 'IIS enzymes only produce blunt ends', 'IIP enzymes require methylated DNA to function'],
      answer: 1,
      why_en: 'This single distinction — cutting inside versus outside the recognition site — is what determines everything downstream: whether the site survives in the product and whether the overhang is fixed or user-chosen.',
      why_cn: '这一个区别——切在识别位点内还是外——决定了后面的一切：位点是否会留在产物里，以及黏性末端是固定的还是用户可选的。' },
    { type: 'mcq',
      q_en: 'A digest of your plasmid inexplicably fails even though NEBcutter confirms the site is present. What is the most likely hidden cause?',
      q_cn: '你的质粒酶切莫名其妙失败了，尽管 NEBcutter 确认位点存在。最可能的隐藏原因是什么？',
      options: ['The enzyme has expired', 'The plasmid, prepared from a Dam⁺ Dcm⁺ strain, is methylated at a site overlapping GATC and the enzyme is methylation-sensitive', 'NEBcutter is using an outdated reference sequence', 'The buffer was diluted incorrectly'],
      answer: 1,
      why_en: 'A sequence map cannot show methylation status. Standard cloning strains are Dam⁺ Dcm⁺, so a methylation-sensitive enzyme like XbaI, ClaI or MboI may simply refuse to cut.',
      why_cn: '序列图谱看不出甲基化状态。标准克隆菌株是 Dam⁺ Dcm⁺，所以像 XbaI、ClaI、MboI 这类对甲基化敏感的酶可能就是切不动。' },
    { type: 'mcq',
      q_en: 'Why do restriction enzymes leave the bacterium\'s own DNA alone while destroying invading phage DNA?',
      q_cn: '为什么限制酶不动细菌自己的 DNA，却会破坏入侵的噬菌体 DNA？',
      options: ['Phage DNA lacks a recognition site entirely', 'The bacterium\'s own DNA is protected by methylation at the same sites the enzyme recognises', 'Restriction enzymes only act on circular DNA', 'Phage DNA is single-stranded and therefore more vulnerable'],
      answer: 1,
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
}

]);
