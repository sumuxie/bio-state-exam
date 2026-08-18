/* =========================================================================
   PESB — Batch 2 · Lectures 3–5 · From Cell to Pure Protein
   Source: notes/md/02_lec3-5_expression-and-purification.md
   (Lecture 3, 50 slides; Lecture 4, 37; Lecture 5, 13 — Lecture 5 s.1–9
   repeat Lecture 4 verbatim, so only its last three slides are new.)

   `points` are from the slides. `beyondPoints` are the md's "beyond the
   slides" blocks (!!! note / !!! mech / !!! pitfall) — material the deck
   did not put up. Keep that separation; it is the one thing that makes
   this file trustworthy.

   WRITTEN SO FAR: Lecture 3 §1–§10 (host choice and E. coli).
   STILL MISSING:  Lecture 3 §11–§14 (yeast, insect, mammalian, glycosylation)
                   and all of Lectures 4–5 (§15–§28, purification).
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

/* ============ PART I — LECTURE 3: HETEROLOGOUS EXPRESSION ============ */

{
  id: '2-1',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.1',
  enTitle: 'The six expression systems side by side',
  cnTitle: '六大表达系统横向对比',
  slides: 'L3 s.2–3, s.34',
  coverage: 'full',
  coverageNote: 'The comparison table and the media costs are straight off the slides. The observation that the table is a single monotonic trade-off is not on them, and it is what makes the table memorable rather than something to be memorised row by row.',
  summary: {
    en: 'Six systems, one trade-off. Moving from E. coli through yeast and insect cells to mammalian cells, post-translational modification becomes more complete and the product more human-like, while time and cost rise and yield falls. There is essentially no fast, cheap, fully-modified option, so choosing a host reduces to one question: does this protein actually need those modifications? Cell-free synthesis is the only system that steps off the curve.',
    cn: '六个系统，一条取舍曲线。从大肠杆菌经酵母、昆虫细胞到哺乳动物细胞，翻译后修饰越来越完整、产物越来越「像人」，但时间越来越长、成本越来越高、产量越来越低。几乎不存在「又快又便宜又有完整修饰」的选项，所以选宿主本质上只归结为一个问题：这个蛋白到底需不需要那些修饰？无细胞体系是唯一跳出这条曲线的。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.2', src: 'img/figures/L3_s02_1.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_1.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_2.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_3.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_4.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_5.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_6.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_7.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_8.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_9.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_10.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_11.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_12.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_13.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_14.webp' },
    { slide: 'L3 s.3', src: 'img/figures/L3_s03_15.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这张表不是六组独立的数字，是**一条曲线**：从 E. coli 往哺乳动物细胞走，**修饰越来越完整，时间和成本越来越高，产量越来越低**。\n\n' +
            '所以选宿主只剩一个问题：**这个蛋白到底需不需要那些修饰？**',
  skipIt: '具体的天数和每升培养基多少钱，知道量级就行，不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时，列的是各个系统本身（prokaryotic、yeast、baculovirus、S2、mammalian），**一个时间和价格数字都没有**。',
  explain: [
    {
      q: '这张六个系统的表，真要一格一格背下来吗？',
      a: '**不用，而且背了也记不住。**因为那些列**不是各自独立变化的**。\n\n' +
         '从左往右（E. coli → yeast → insect → mammalian）看，三件事同时在动，而且方向是锁死的：\n\n' +
         '**翻译后修饰**：从完全没有 → 有但是「不对味」 → 有 → 完整的人源化修饰。**越来越好。**\n\n' +
         '**时间和成本**：2 天 → 7–10 天 → 3–4 周 → 数周。**越来越差。**\n\n' +
         '**产量**：高 → 高 → 高/较低 → 不稳定。**大体上越来越差。**\n\n' +
         '**所以你只需要记住方向，格子可以自己推出来。**被问到「昆虫细胞比酵母怎么样」，你不用回忆表格，只要知道昆虫在酵母右边，就知道答案是「修饰更好一些，但更慢更贵」。\n\n' +
         '把它当曲线看，还有一个好处：**你立刻知道自己在被迫做一个取舍，而不是在挑一个「最好的」系统。**',
      takeaway: '不是六组数字，是一条从左到右「修饰变好、其它变差」的曲线。记方向，不记格子。'
    },
    {
      q: '为什么不存在「又快又便宜又有完整修饰」的选项？',
      a: '因为**修饰是细胞干的活，而能干这活的细胞，本身就是又慢又贵的细胞。**\n\n' +
         '糖基化不是一个反应，是内质网和高尔基体里一整套酶按顺序加工的流水线。**有这套流水线的细胞，就是结构复杂、代谢负担重、长得慢的真核细胞。**\n\n' +
         '把成本摊开看就很直白：培养基每升 **E. coli 约 $3，昆虫细胞约 $40，哺乳动物无血清培养基 $100–200**。再加上哺乳动物细胞要 37 °C 恒温、要 CO₂ 培养箱、要严格无菌，倍增时间以天计而不是分钟计。\n\n' +
         '**你买的不是「修饰」这个功能，你买的是那台能做修饰的机器，而这条曲线就是那台机器的运行成本。**\n\n' +
         '所以这条曲线不是工程上还没优化好，是**物理上的**。指望有人发明一个又快又便宜又能做人源糖基化的系统，方向是错的——真正的研究方向是反过来：**给便宜的细胞装上修饰能力**（比如给 E. coli 装糖基化通路），那才是绕开曲线的办法。',
      takeaway: '修饰要靠真核细胞的整套流水线，而那套流水线本身就慢和贵。曲线是物理的，不是没优化好。'
    },
    {
      q: '无细胞体系为什么说它「跳出了曲线」？',
      a: '因为它**根本不在那条轴上**。\n\n' +
         '看它的位置有多别扭：**最快（1 天）**，但是**产量低、成本高、完全没有修饰**。按曲线的逻辑，「没有修饰」应该配「又快又便宜又高产」（那是 E. coli 的位置），可它偏偏贵而且产量低。\n\n' +
         '**它换了一个维度。**它的存在理由不是在这条取舍线上占一个更好的点，而是去做**别的系统根本做不了的事**：\n\n' +
         '**产物有毒**——没有活细胞可以被毒死。\n\n' +
         '**线性 DNA 直接当模板**——不需要克隆、不需要转化。\n\n' +
         '所以它是**专用工具，不是通用宿主**。判断标准很简单：如果你的问题是「我要多快多便宜地拿到这个蛋白」，答案在曲线上；如果你的问题是「这个东西根本做不出来」，才轮到无细胞。\n\n' +
         '下一节是它的预告，正式内容在第 7–8 讲。',
      takeaway: '它不在取舍线上，它换了维度。用它是因为别的做不了，不是因为它更划算。'
    }
  ],
  points: [
    { term: 'Timeline', en: 'E. coli 2 days · yeast 7–10 days · baculovirus ~3 weeks · insect S2 ~4 weeks · mammalian 2 days to 6 weeks · cell-free 1 day.', cn: '大肠杆菌 2 天 · 酵母 7–10 天 · 杆状病毒约 3 周 · 昆虫 S2 约 4 周 · 哺乳动物 2 天至 6 周 · 无细胞 1 天。' },
    { term: 'Cost', en: 'Low for E. coli and yeast, medium for insect, high for mammalian (incubators, CO2, serum-free media) and high for cell-free.', cn: '大肠杆菌和酵母低，昆虫中等，哺乳动物高（需培养箱、CO2、无血清培养基），无细胞体系也高。' },
    { term: 'Yield', en: 'High in E. coli, yeast and insect S2; lower in baculovirus; variable in mammalian; low in cell-free.', cn: '大肠杆菌、酵母、昆虫 S2 产量高；杆状病毒较低；哺乳动物不稳定；无细胞体系低。' },
    { term: 'Post-translational modifications', en: 'None in E. coli. Yes in yeast, but the glycans are the wrong kind. Yes in insect. Full, human-like in mammalian. None in cell-free.', cn: '大肠杆菌完全没有。酵母有，但糖型不对。昆虫有。哺乳动物有完整的、类人的修饰。无细胞体系没有。' },
    { term: 'Main pain point', en: 'E. coli — insoluble protein and inclusion bodies. Yeast — difficult lysis. Insect — laborious. Baculovirus — lytic system, lower yields. Mammalian — cost and speed. Cell-free — highly variable.', cn: '大肠杆菌——蛋白不可溶、形成包涵体。酵母——难裂解。昆虫——操作繁琐。杆状病毒——裂解性系统、产量偏低。哺乳动物——贵且慢。无细胞——批次间差异大。' },
    { term: 'Special strength', en: 'E. coli — cheap, fast, scalable, and the only practical route to isotope labelling. Yeast — stable transformants, easy culture. S2 — stable transfection with no virus. Baculovirus — high yield for complex proteins. Mammalian — authentic human protein. Cell-free — toxic proteins and linear DNA templates.', cn: '大肠杆菌——便宜、快、易放大，而且是同位素标记唯一现实的路线。酵母——转化子稳定、培养简单。S2——稳定转染、不需要病毒。杆状病毒——复杂蛋白也能高产。哺乳动物——真正的人源蛋白。无细胞——能做毒性蛋白、能直接用线性 DNA。' },
    { term: 'Media cost per litre', en: 'A number worth quoting: E. coli about $3, insect cells about $40, mammalian serum-free $100–200.', cn: '值得记住的一组数字：大肠杆菌约 3 美元，昆虫细胞约 40 美元，哺乳动物无血清培养基 100–200 美元。' },
    { term: 'The most repeated sentence in the lecture', en: 'Plan in advance — expression experiments can take many months. And its companion: every protein has its own personality. Neither is a joke; both are the honest summary.', cn: '整讲重复最多的一句话：提前规划——表达实验可能要花好几个月。配套的另一句：每个蛋白都有自己的脾气。这两句都不是玩笑，而是老实话。' }
  ],
  beyondPoints: [
    { term: 'Read the table as a curve, not as rows', en: 'The columns do not vary independently. Left to right the modifications get better and everything else gets worse. Once you see that, you do not need to memorise the cells — you only need to know where your protein sits on the axis.', cn: '这张表的各列不是独立变化的。从左到右修饰越来越好，其他一切越来越差。看懂这一点之后就不用背表格里每一格，只需要知道你的蛋白落在这条轴的哪个位置。' },
    { term: 'Cell-free is off the curve', en: 'CFPS is fastest of all and uniquely able to make toxic products, yet has low yield and high cost. That is why it is a special-purpose tool rather than a general-purpose host.', cn: '无细胞体系是最快的，而且是唯一能做毒性产物的，但产量低、成本高。所以它是特殊用途工具，不是通用宿主。' }
  ],
  terms: [
    { en: 'Post-translational modification (PTM)', cn: '翻译后修饰', def_en: 'Chemical modification of a protein after translation — glycosylation, phosphorylation, disulfide formation. The single property that most strongly determines which host you must use.', def_cn: '蛋白翻译之后发生的化学修饰——糖基化、磷酸化、二硫键形成。这是决定必须用哪种宿主的最关键性质。' },
    { en: 'Isotope labelling', cn: '同位素标记', def_en: 'Replacing a protein\'s N, C or H with 15N, 13C or 2H, needed for NMR and neutron scattering. Practical only in E. coli, because it requires a minimal medium with a single defined nitrogen and carbon source.', def_cn: '把蛋白中的 N、C、H 换成 15N、13C、2H，做 NMR 和中子散射时需要。只有大肠杆菌可行，因为它要求用只含单一氮源和碳源的极简培养基。' },
    { en: 'Serum-free medium', cn: '无血清培养基', def_en: 'Chemically defined culture medium containing no animal serum. Standard for insect and mammalian production because it simplifies downstream purification, but expensive.', def_cn: '不含动物血清的化学成分明确的培养基。昆虫和哺乳动物生产的标准做法，因为它让下游纯化简单得多，但很贵。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which system is the only one that breaks the general trade-off between modification quality and speed/cost?',
      q_cn: '哪个系统是唯一打破「修饰质量 vs 速度成本」这条取舍关系的？',
      options: ['Yeast (Pichia pastoris)', 'Cell-free protein synthesis', 'Baculovirus in Sf9 cells', 'CHO cells'],
      answer: 1,
      optionRefs: { 0: '2-16', 2: '2-18', 3: '2-20' },
      why_en: 'Cell-free is the fastest system of all (1 day) and can make toxic proteins, yet performs no post-translational modification at all. It sits off the curve rather than on it.',
      why_cn: '无细胞体系是所有系统里最快的（1 天），还能做毒性蛋白，但完全不做翻译后修饰。它不在那条曲线上。' },
    { type: 'mcq',
      q_en: 'Roughly what does one litre of mammalian serum-free medium cost, relative to one litre of E. coli medium?',
      q_cn: '一升哺乳动物无血清培养基的价格大约是一升大肠杆菌培养基的多少倍？',
      options: ['About the same', 'About 3-fold more', 'About 10-fold more', 'About 30- to 70-fold more'],
      answer: 3,
      why_en: 'E. coli medium is about $3 per litre and mammalian serum-free medium $100–200, so roughly 30- to 70-fold. Insect medium sits between at about $40.',
      why_cn: '大肠杆菌培养基约 3 美元/升，哺乳动物无血清培养基 100–200 美元/升，大约 30–70 倍。昆虫培养基居中，约 40 美元。' },
    { type: 'mcq',
      q_en: 'What is the characteristic failure mode of E. coli expression, and of yeast expression?',
      q_cn: '大肠杆菌表达和酵母表达各自的典型失败模式是什么？',
      options: ['E. coli — difficult lysis; yeast — inclusion bodies', 'E. coli — inclusion bodies; yeast — difficult lysis', 'Both form inclusion bodies', 'E. coli — low yield; yeast — cost'],
      answer: 1,
      optionRefs: { 2: '2-10' },
      optionNotes: {
        0: { en: 'The two failure modes are swapped. Inclusion bodies are the E. coli problem, where synthesis outruns folding capacity; difficult lysis is the yeast problem, caused by the tough cell wall, which is why Pichia work is usually done as secreted expression.', cn: '两个失败模式被调换了。包涵体是 E. coli 的问题——合成速度超过折叠能力；难裂解是酵母的问题——细胞壁太硬，所以 Pichia 通常做分泌表达。' }
      },
      why_en: 'E. coli overwhelms its folding capacity and the product aggregates into inclusion bodies. Yeast folds well but has a tough cell wall, so intracellular product is hard to release — which is why Pichia is so often used for secreted expression.',
      why_cn: '大肠杆菌折叠能力被压垮，产物聚集成包涵体。酵母折叠没问题，但细胞壁很硬，胞内产物很难释放——这正是 Pichia 常用于分泌表达的原因。' },
    { type: 'short',
      q_en: 'Your protein is a bacterial enzyme with no disulfide bonds and no glycosylation, and you need tens of milligrams for crystallography. Which host, and why does the comparison table make this an easy call?',
      q_cn: '你的蛋白是一个细菌来源的酶，没有二硫键也没有糖基化，你需要几十毫克做晶体学。选哪个宿主？为什么这张对比表让这个决定很容易？',
      accept: ['E. coli', 'no modifications needed', 'fast', 'cheap', 'high yield'],
      answer_en: 'E. coli. The whole cost of choosing E. coli is that it performs no post-translational modification, and this protein needs none, so you pay nothing for that limitation. In exchange you get the fastest timeline at two days, the cheapest medium at about three dollars a litre, yields of tens to hundreds of milligrams per litre, and the option of isotope labelling if you later want NMR.',
      answer_cn: '大肠杆菌。选大肠杆菌的全部代价就是它不做任何翻译后修饰，而这个蛋白本来就不需要，所以这个缺点对你完全不构成损失。换来的是最快的周期（2 天）、最便宜的培养基（约 3 美元一升）、每升几十到几百毫克的产量，而且如果以后想做 NMR 还能做同位素标记。' }
  ],
  oral: {
    q_en: 'Compare the major heterologous expression systems and explain how you would choose between them.',
    q_cn: '比较主要的异源表达系统，并说明你会如何在它们之间做选择。',
    model_en: 'There are six systems in common use, and the useful way to see them is as a single trade-off rather than as six independent options. Moving from E. coli through yeast and insect cells to mammalian cells, post-translational modification becomes more complete and the product more human-like, but the timeline stretches from two days to several weeks, the medium cost rises from about three dollars a litre to a hundred or two, and the yield falls. There is essentially no system that is simultaneously fast, cheap and fully modifying. So the choice collapses to one question: does my protein actually require those modifications to function? If it does not, I start with E. coli every time, because its only real cost is the one thing I do not need. If it does, I am pushed rightwards along the curve, and how far depends on whether I need human-like glycans specifically or merely folding help. Cell-free synthesis is the exception that does not sit on this curve at all: it is the fastest system of any, one day, and it is the only one that can make a product toxic to a living cell, because there is no cell to poison. Its cost is low yield and high price, so it is a special-purpose tool. And the sentence the lecture repeats more than any other is worth respecting: plan in advance, because expression experiments can take many months, and every protein has its own personality.',
    checklist: ['Six systems, but read them as one trade-off curve', 'Left to right: better PTMs, worse time/cost/yield', 'Timelines: E. coli 2 days to insect ~4 weeks', 'Media cost: $3 vs $40 vs $100–200 per litre', 'The deciding question: does my protein need PTMs?', 'No PTMs needed, so start with E. coli, always', 'PTMs needed, so how far right depends on human-like glycans vs folding help', 'Cell-free is off the curve: fastest, handles toxic proteins, low yield', 'Plan in advance, every protein has its own personality']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Reading the six-system table left to right, what happens to the columns?',
      q_cn: '把六个表达系统的表格从左往右读，各列会怎么变化？',
      options: ['Every column improves together as you move towards the right', 'Modifications get better while speed, cost and yield all get worse', 'Yield rises while post-translational modifications get worse', 'The columns vary independently, with no trend linking them'],
      answer: 1,
      optionNotes: {
        2: { en: 'The anti-correlation is right but pointing the wrong way. E. coli sits at the left end with high yield and no modifications, mammalian cells at the right end with human-like glycans and low yield, so reading left to right the modifications improve and the yield falls.', cn: '两者确实反向相关，但方向反了。E. coli 在最左端，产量高、没有修饰；哺乳动物细胞在最右端，糖型像人但产量低。所以从左往右读是修饰变好、产量变差。' }
      },
      why_en: 'The columns are not independent. Left to right the modification quality rises and everything else — time, cost, yield — deteriorates. Seeing it as one curve rather than a grid of cells means you only have to know where your protein sits on that axis, not memorise the table.',
      why_cn: '各列并不独立。从左往右，修饰质量上升，其他一切——时间、成本、产量——都变差。把它看成一条曲线而不是一堆格子，你只需要知道你的蛋白落在这个轴的哪个位置，而不必背表。' },
    { type: 'mcq',
      q_en: 'Which system sits off that curve, and why?',
      q_cn: '哪个系统脱离了这条曲线，为什么？',
      options: ['Yeast — as cheap and as fast as E. coli yet still adding fully human-type glycans', 'Cell-free — fastest of all and limited by no cell-viability constraint', 'Insect S2 — stably transfected cell lines needing no virus at all', 'Mammalian — the only source of fully human-type glycosylation'],
      answer: 1,
      optionRefs: { 0: '2-16', 2: '2-19', 3: '2-25' },
      why_en: 'Cell-free breaks the trade-off in one direction and pays for it in another. One day to protein and no viability constraint at all, but low yield, high cost and unsolved scale-up. That combination is why it is a special-purpose tool rather than a general-purpose host.',
      why_cn: '无细胞系统在一个方向上打破了权衡，却在另一个方向上付出代价。一天就能拿到蛋白、完全没有活性限制，但产量低、成本高、放大问题未解决。正是这种组合让它成为专用工具而不是通用宿主。' },
    { type: 'mcq',
      q_en: 'Media cost per litre: roughly what is the ratio between E. coli and mammalian serum-free media?',
      q_cn: '每升培养基成本：大肠杆菌与哺乳动物无血清培养基大约相差多少倍？',
      options: ['About 3-fold', 'About 10-fold', 'About 30–70-fold', 'About 500-fold'],
      answer: 2,
      why_en: 'E. coli is about three dollars a litre, insect cells about forty, mammalian serum-free a hundred to two hundred. That is roughly thirty to seventy times, and it is worth quoting as a number because it is the concrete form of "mammalian is expensive" — and it compounds with the longer timeline.',
      why_cn: '大肠杆菌约每升 3 美元，昆虫细胞约 40 美元，哺乳动物无血清培养基 100–200 美元，大约是三十到七十倍。这个数字值得记住，因为它是「哺乳动物系统贵」的具体形式——而且它还会与更长的时间线叠加。' },
    { type: 'short',
      q_en: 'Your target is a human secreted glycoprotein whose activity depends on its glycans, and you need milligrams for a binding assay. Walk through the table to a choice.',
      q_cn: '你的目标是一个人源分泌型糖蛋白，活性依赖糖链，你需要毫克级用于结合实验。用这张表走到一个选择。',
      accept: ['glycosylation', 'E. coli', 'mammalian', 'yeast', 'wrong kind', 'cost'],
      answer_en: 'The deciding column is post-translational modifications, because the question states the activity depends on the glycans. That immediately removes E. coli, which does no glycosylation at all, and cell-free, which likewise does none. Yeast does glycosylate, but the glycans are the wrong kind — high-mannose rather than human-type — so for a protein whose activity depends on the glycan structure it is not a rescue either. Insect cells modify, but again not with fully human glycans. That leaves mammalian, which is the only system in the table giving full human-like modifications, and for a secreted protein it also has the advantage that the product goes into the medium rather than requiring lysis. What I am accepting in exchange is exactly what the curve predicts: high cost, media at a hundred to two hundred dollars a litre against three for E. coli, and a timeline of anywhere from two days to six weeks depending on whether I go transient or stable. Since I only need milligrams for an assay rather than grams, transient transfection is proportionate and I do not need to build a stable line.',
      answer_cn: '起决定作用的是翻译后修饰这一列，因为题目说了活性依赖糖链。这立刻排除完全不做糖基化的大肠杆菌，以及同样不做修饰的无细胞系统。酵母确实会糖基化，但糖链类型不对——是高甘露糖型而不是人源型——所以对一个活性依赖糖链结构的蛋白来说它也不是解法。昆虫细胞会修饰，但同样不是完整的人源糖型。剩下的是哺乳动物系统，它是表中唯一提供完整类人修饰的系统；而且对分泌蛋白来说还有个好处，产物进入培养基，不需要裂解细胞。我为此接受的代价正是曲线所预测的：成本高，培养基每升 100–200 美元对比大肠杆菌的 3 美元，时间从两天到六周不等，取决于走瞬时还是稳定表达。既然只需要毫克级做实验而不是克级，瞬时转染就够了，不必去建稳定细胞系。'
    }
  ]
},

{
  id: '2-2',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.2',
  enTitle: 'Cell-free protein synthesis — the preview',
  cnTitle: '无细胞蛋白合成——预告',
  slides: 'L3 s.5–6',
  coverage: 'full',
  coverageNote: 'Lecture 3 introduces CFPS only briefly; Lectures 7–8 are entirely about it. Kept as its own short node because the advantages are all one idea applied five times, and that idea is worth having straight before Batch 3.',
  summary: {
    en: 'Cell-free protein synthesis grows and lyses cells, prepares crude extracts, then adds substrates, salts, energy sources and a template. Every advantage it has is a direct consequence of there being no living cell: linear DNA works because nothing has to be transformed, and toxic products are fine because there is no viability to protect. The costs are low yield, high price and difficult scale-up.',
    cn: '无细胞蛋白合成的做法是：培养细胞、裂解、制备粗提取物，然后加入底物、盐、能量来源和模板。它的每一条优点都是「没有活细胞」这一件事的直接后果：线性 DNA 能用，是因为不需要转化；产物有毒也没关系，是因为没有细胞活性需要保护。代价是产量低、成本高、放大困难。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.5', src: 'img/figures/L3_s05_1.webp' },
    { slide: 'L3 s.6', src: 'img/figures/L3_s06_1.webp' },
    { slide: 'L3 s.6', src: 'img/figures/L3_s06_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'CFPS 的**每一条优点都是同一条优点**：**没有活细胞**。\n\n' +
            '能把这句话说出来，那张优点清单你就不用背——可以当场推出来。',
  skipIt: '这一节整体只是预告，**正式内容在第 7–8 讲**。老师在第 4 讲开头给第 3 讲做 RECAP 时，**完全没有提到 cell-free**——它不属于第 3 讲要你掌握的那一批。现在只要能说清「优点都来自没有细胞」这一条逻辑即可。',
  explain: [
    {
      q: '为什么说它的五条优点其实是一条？',
      a: '**因为把「细胞」这个前提拿掉之后，那五条是自动掉下来的。**逐条对一遍：\n\n' +
         '**线性 DNA 能用** —— 常规路线里必须先把基因装进质粒，是因为**要转化进细胞、要在细胞里被复制和保留**。既然没有细胞要进，那就没有理由非得是环状质粒，PCR 产物直接就是模板。\n\n' +
         '**产物可以有毒** —— 「有毒」的意思是杀死宿主。**没有宿主，就没有毒性这回事。**\n\n' +
         '**没有结构屏障** —— 底物、模板、产物都不需要跨膜。膜是细胞的东西。\n\n' +
         '**生产和使用解耦** —— 不需要维持任何东西活着，所以两个阶段可以分开设计、分开优化。\n\n' +
         '**一天出蛋白** —— 时间大头本来就花在「等细胞长」和「克隆、转化、挑菌落」上，这两件事都没了。\n\n' +
         '**所以口试里不要背清单，说那一句话，然后现场推。**这比列五条更能说明你懂了。',
      takeaway: '把「细胞」拿掉，五条优点自动成立。说出这一句，比背清单强。'
    },
    {
      q: '「粗提取物」里到底有什么？为什么不用纯化好的成分？',
      a: '**粗提取物就是把细胞裂开之后的可溶部分整锅端过来。**里面有核糖体、tRNA、氨酰-tRNA 合成酶、各种翻译起始和延伸因子——**整套翻译机器**。\n\n' +
         '为什么不把这些一个个纯化出来再拼？两个原因：\n\n' +
         '**贵。**翻译机器有几十个组分，逐个表达纯化是一个大工程。\n\n' +
         '**更要紧的是：你不确定自己有没有漏掉什么。**翻译依赖的辅助因子非常多，其中一些的作用至今没有完全搞清。**整锅端过来，就不会因为「不知道少了什么」而失败。**\n\n' +
         '这是个很典型的工程务实决策：**在还没有完全理解一个系统之前，与其重建它，不如整体借用它。**\n\n' +
         '（确实也有把成分一个个重组起来的做法，好处是背景干净、可控——那属于第 7–8 讲的内容。）\n\n' +
         '顺带一句值得留意的：**提取物本身还是得靠养细胞来做。**所以严格说，CFPS 没有摆脱细胞，只是把细胞挪到了上游、挪出了反应管。',
      takeaway: '整锅端翻译机器，是因为你不确定漏了什么。而提取物本身还是要养细胞才有。'
    },
    {
      q: '「线性 DNA 能直接用」，这件事为什么值得单独强调？',
      a: '因为它**砍掉的不是一步，是一整条流程**。\n\n' +
         '常规路线要走：PCR → 克隆进载体 → 转化 → 铺板过夜 → 挑菌落 → 培养过夜 → miniprep → 测序确认 → 然后才谈得上表达。**这里面至少三个过夜。**\n\n' +
         'CFPS：**PCR 产物直接加进反应管。**\n\n' +
         '对做一个蛋白来说，这只是省几天。但对**一次要试几十上百个变体**的场合，它是决定性的：每个变体一管 PCR、一管反应，当天就能读结果。\n\n' +
         '想一下第 9 讲的文库筛选，或者你想比较二十个截短体哪个可溶——**在常规路线里这是几周，在 CFPS 里这是一天。**\n\n' +
         '这也是为什么这一节被放在第 3 讲里当预告：**它跟其它五个系统不是同类竞争关系，它解锁的是一种不同的实验节奏。**',
      takeaway: '省掉的是克隆-转化-挑菌落-测序整条链。对「一次试很多个变体」是质变，不是省几天。'
    },
    {
      q: '既然这么好，为什么它不是主流？',
      a: '**三个代价，而且都不小：**\n\n' +
         '**产量低。**这是最实在的一条。结构生物学要毫克量，CFPS 通常给不了。\n\n' +
         '**成本高。**你得自己制备提取物，还要加入底物、盐、能量再生系统——按每毫克蛋白算，比养一罐 E. coli 贵得多。\n\n' +
         '**放大困难。**发酵罐可以从摇瓶一路放大到几万升，这条路是成熟的。反应管放大到几升就已经是工程问题了，而且**成本是线性增长的**——CFPS 没有「养得越多越便宜」这种规模效应，因为你消耗的是试剂，不是让细胞自己繁殖。\n\n' +
         '幻灯片列的三个挑战（时间和体积上的放大、成本效率、开发新的平台生物）说的就是这些。\n\n' +
         '**所以定位很清楚：它是解决「做不出来」的工具，不是解决「做得更划算」的工具。**',
      takeaway: '产量低、成本高、没有规模效应。它解决「做不出来」，不解决「做得更便宜」。'
    }
  ],
  points: [
    { term: 'Protocol', en: 'Grow and lyse cells, prepare crude extracts, add substrates, salts and energy sources, add the template, and produce.', cn: '培养并裂解细胞，制备粗提取物，加入底物、盐和能量来源，加入模板，然后合成。' },
    { term: 'Linear DNA can be used', en: 'PCR products work directly as template — no cloning step, no transformation.', cn: 'PCR 产物可以直接当模板——不需要克隆，也不需要转化。' },
    { term: 'Separation of synthetic and utilisation phases', en: 'Production and use are decoupled, because nothing has to stay alive between them.', cn: '合成阶段和使用阶段是分开的，因为中间不需要维持任何东西的存活。' },
    { term: 'No structural boundaries', en: 'There are no membranes for substrates, template or product to cross.', cn: '没有膜结构——底物、模板和产物都不需要跨膜。' },
    { term: 'No viability constraints', en: 'This is the big one: the product is allowed to be toxic, because there is no cell for it to kill.', cn: '这是最重要的一条：产物可以是有毒的，因为没有细胞可以被它毒死。' },
    { term: 'Rapid product development', en: 'One day from template to protein, the fastest of any system.', cn: '从模板到蛋白只要一天，是所有系统里最快的。' },
    { term: 'Challenges', en: 'Scale-up in time and volume, cost efficiency, and the development of new platform organisms.', cn: '挑战在于时间和体积上的放大、成本效益，以及开发新的平台生物。' },
    { term: 'Where it is covered properly', en: 'Lectures 7–8 are entirely about cell-free systems and genetic code reprogramming. This is only the preview.', cn: '第 7–8 讲整个都在讲无细胞体系和遗传密码改写。这里只是预告。' }
  ],
  beyondPoints: [
    { term: 'All five advantages are one advantage', en: 'Every item on the list follows from removing the cell. If you can state that in the oral, you do not need to have memorised the list — you can regenerate it.', cn: '这一串优点全都是「去掉细胞」这一件事的推论。口试时能讲出这一点，就不需要背清单，可以现场推出来。' }
  ],
  terms: [
    { en: 'Cell-free protein synthesis (CFPS)', cn: '无细胞蛋白合成', def_en: 'In vitro transcription and translation in a crude cell extract supplemented with substrates, salts and an energy source. No living cell is involved.', def_cn: '在补加了底物、盐和能量来源的粗细胞提取物中进行的体外转录翻译。全程没有活细胞参与。' },
    { en: 'Crude extract', cn: '粗提取物', def_en: 'The lysate used as the source of ribosomes and translation machinery in CFPS, rather than a purified reconstituted system.', def_cn: 'CFPS 中用作核糖体和翻译机器来源的裂解液，区别于纯化重构体系。' },
    { en: 'Linear DNA template', cn: '线性 DNA 模板', def_en: 'A PCR product used directly for expression. Impossible in a living host, where linear DNA is degraded and must first be cloned into a plasmid.', def_cn: '直接用于表达的 PCR 产物。在活体宿主中不可行——线性 DNA 会被降解，必须先克隆进质粒。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which advantage of cell-free synthesis matters most when the target protein is an antimicrobial or a nuclease?',
      q_cn: '当目标蛋白是抗菌肽或核酸酶时，无细胞体系的哪一条优点最关键？',
      options: ['Linear DNA can be used', 'No viability constraints', 'Rapid product development', 'No structural boundaries'],
      answer: 1,
      why_en: 'A product that would kill a host cell is harmless in a lysate, because there is no viability to protect. This is the advantage no living system can match.',
      why_cn: '会杀死宿主细胞的产物在裂解液里毫无影响，因为根本没有活性需要保护。这是任何活体系统都做不到的优势。' },
    { type: 'mcq',
      q_en: 'Why can cell-free systems use PCR products directly as template?',
      q_cn: '为什么无细胞体系可以直接用 PCR 产物做模板？',
      options: ['PCR products are already circular when they come off the reaction', 'No transformation step, and no host exonucleases to survive', 'The extract re-circularises the product before transcription starts', 'T7 polymerase reads only linear DNA, never a circular template'],
      answer: 1,
      optionNotes: {
        3: { en: 'This turns a habit of in vitro transcription into a requirement. T7 polymerase transcribes circular plasmids perfectly well; a plasmid is linearised beforehand only so the transcript stops at a defined position. What the enzyme needs is a T7 promoter, not a free end.', cn: '这是把体外转录的操作习惯当成了要求。T7 polymerase 转录环状质粒完全没问题；事先把质粒线性化，只是为了让转录本终止在确定的位置。这个酶需要的是 T7 promoter，不是一个游离末端。' }
      },
      why_en: 'In a living host linear DNA must first be cloned into a plasmid so it can be transformed and maintained. With no cell, that requirement disappears and the PCR product is added straight to the reaction.',
      why_cn: '在活体宿主里，线性 DNA 必须先克隆进质粒才能转化和维持。没有细胞，这个要求就消失了，PCR 产物直接加进反应即可。' },
    { type: 'mcq',
      q_en: 'What are the stated challenges of cell-free protein synthesis?',
      q_cn: '无细胞蛋白合成公认的挑战是什么？',
      options: ['Scale-up, cost efficiency, and new platform organisms', 'Glycosylation and disulfide bond formation only, since scale and cost are already solved', 'Codon bias and mRNA stability', 'Cell wall disruption and viscosity'],
      answer: 0,
      why_en: 'Scale-up in both time and volume, cost efficiency, and the development of new platform organisms. Yield is low and the price per milligram is high, which is why it remains a special-purpose tool.',
      why_cn: '时间和体积上的放大、成本效益，以及开发新的平台生物。产量低、每毫克成本高，所以它仍然是特殊用途工具。' },
    { type: 'short',
      q_en: 'State the single underlying reason behind all the advantages of cell-free synthesis, and derive two of them from it.',
      q_cn: '说出无细胞合成所有优点背后那个共同的原因，并由它推出其中两条。',
      accept: ['no cell', 'no living cell', 'no viability', 'no membrane', 'toxic'],
      answer_en: 'Every advantage follows from there being no living cell. Because nothing has to be transformed or maintained, linear PCR product works directly as template. Because there is no viability to protect, the product is allowed to be toxic. The same reasoning also gives you the absence of membrane barriers and the decoupling of the synthesis and utilisation phases.',
      answer_cn: '所有优点都源自「没有活细胞」这一件事。因为不需要转化和维持任何东西，线性 PCR 产物可以直接做模板；因为没有细胞活性需要保护，产物可以有毒。同样的推理还能得出「没有膜屏障」和「合成与使用阶段解耦」这两条。' }
  ],
  oral: {
    q_en: 'What is cell-free protein synthesis, and what can it do that a living host cannot?',
    q_cn: '什么是无细胞蛋白合成？它能做哪些活体宿主做不到的事？',
    model_en: 'Cell-free protein synthesis carries out transcription and translation in vitro. You grow and lyse cells, prepare a crude extract that supplies the ribosomes and translation machinery, then add substrates, salts, an energy source and your template. The point worth making is that all of its advantages are a single advantage restated: there is no living cell. Because nothing has to be transformed or kept alive, a linear PCR product can serve as template directly, with no cloning step. Because there are no membranes, nothing has to cross a boundary. Because there is no viability to protect, the product is allowed to be toxic, and that is the one thing no living host can offer — antimicrobials, nucleases and proteases can be made straightforwardly. And it is the fastest system available, one day from template to protein. The costs are real: yield is low, the price per milligram is high, and scale-up in both time and volume is unsolved, along with the search for new platform organisms. So it is a special-purpose tool rather than a general host. Lectures seven and eight develop this properly, including genetic code reprogramming.',
    checklist: ['In vitro transcription and translation in a crude extract', 'Protocol: grow, lyse, extract, add substrates and energy, add template', 'All advantages reduce to one: there is no living cell', 'Linear PCR product works as template, no cloning', 'No membrane boundaries to cross', 'No viability constraint, so toxic products are fine', 'Fastest of all systems: one day', 'Costs: low yield, high price, scale-up unsolved', 'Special-purpose tool, developed fully in Lectures 7–8']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why can a PCR product be used directly as template in cell-free synthesis?',
      q_cn: '为什么 PCR 产物可以直接作为无细胞合成的模板？',
      options: ['The extract circularises the linear product before transcription begins', 'No cell means no transformation, so the template need not replicate', 'T7 polymerase initiates only on a template with a free linear end', 'Linear DNA is inherently more stable than plasmid DNA in the reaction'],
      answer: 1,
      optionNotes: {
        3: { en: 'Backwards: inside a living cell linear DNA is the less stable form, because exonucleases chew free ends, and that is exactly why a host needs the template as a circular plasmid. Cell-free can use a PCR product in spite of that, not because linear DNA is sturdier.', cn: '方向反了。在活细胞里线性 DNA 才是不稳定的那一种——游离末端会被 exonuclease 降解，这正是宿主必须把模板做成环状质粒的原因。无细胞体系能直接用 PCR 产物，是因为根本没有细胞这一关，不是因为线性 DNA 更结实。' }
      },
      why_en: 'A plasmid is needed when DNA has to be maintained and replicated inside a living cell. Cell-free has no cell, so the template only has to be transcribable. That removes cloning and transformation from the workflow entirely, which is a large part of why one day from template to protein is possible.',
      why_cn: '需要质粒，是因为 DNA 要在活细胞里被维持和复制。无细胞系统没有细胞，模板只需要能被转录就行。这就把克隆和转化整个从流程里去掉了，而这正是「一天从模板到蛋白」得以实现的重要原因。' },
    { type: 'mcq',
      q_en: 'All five listed advantages of cell-free synthesis follow from one fact. Which?',
      q_cn: '无细胞合成列出的五项优势都源于同一件事。是哪一件？',
      options: ['The use of T7 RNA polymerase', 'The cell has been removed', 'The energy source is supplied externally', 'The reaction is run at low temperature'],
      answer: 1,
      optionRefs: { 0: '2-8', 2: '3-4' },
      why_en: 'Linear templates work because there is no transformation; there are no structural boundaries because there are no membranes; toxicity does not matter because there is no cell to kill; and development is fast because none of those steps exist. If you can say that in the oral you can regenerate the list instead of memorising it.',
      why_cn: '线性模板可用，是因为不需要转化；没有结构屏障，是因为没有膜；毒性无所谓，是因为没有细胞可杀；开发快，是因为上述步骤都不存在。口试时能说出这一句，就可以现场推出整个列表，而不必去背。' },
    { type: 'mcq',
      q_en: 'A colleague wants to express a bacterial nuclease that kills every host they try. What does cell-free offer that a tight promoter does not?',
      q_cn: '同事想表达一种细菌核酸酶，试过的每个宿主都被杀死。相比紧密启动子，无细胞系统提供了什么？',
      options: ['A higher yield of protein per millilitre than an induced culture', 'Removal of the viability constraint, not just delayed expression', 'Reliable disulfide bond formation, because a lysate contains no reducing cytoplasm', 'Lower reagent cost per milligram of protein produced'],
      answer: 1,
      optionRefs: { 2: '2-13' },
      why_en: 'A tight promoter such as araBAD manages toxicity in time — you grow the culture first and induce late, hoping to harvest before the cells die. Cell-free removes the constraint rather than managing it, because there is no cell whose viability is at stake. Yield and cost both go the wrong way, which is the trade you accept.',
      why_cn: '像 araBAD 这样的紧密启动子是在时间上管理毒性——先把菌养起来，晚一点再诱导，指望在细胞死掉之前收获。无细胞系统是取消这个约束而不是管理它，因为根本没有细胞的存活可言。产量和成本都会变差，这就是你接受的交换。' },
    { type: 'short',
      q_en: 'What are the challenges that keep cell-free from being a general-purpose host?',
      q_cn: '有哪些挑战使无细胞系统无法成为通用宿主？',
      accept: ['scale', 'cost', 'platform', 'yield'],
      answer_en: 'Three, and they are all consequences of the same thing that gives it its advantages. First, scale-up in both time and volume is unsolved: a cell culture grows its own catalyst, doubling every twenty minutes, whereas a cell-free reaction consumes a fixed amount of extract that you had to prepare in advance, so making more protein means making more extract rather than waiting longer. Second, cost efficiency — energy sources, substrates and the extract itself all have to be supplied rather than made by a living organism, which is why the yield is low and the price per milligram is high. Third, the development of new platform organisms: most systems are based on E. coli extract, and extending the approach to organisms whose translation machinery has different properties is ongoing work. So the honest summary is that cell-free is a special-purpose tool. You reach for it when the specific advantage matters — a toxic product, a one-day turnaround, or the genetic-code reprogramming covered in Lectures 7 and 8 — and not as a default host.',
      answer_cn: '三个，而且都源于赋予它优势的同一件事。第一，时间和体积上的放大问题未解决：细胞培养会自己生产催化剂，每 20 分钟翻一倍；而无细胞反应消耗的是你事先制备好的、数量固定的提取物，所以想做更多蛋白意味着要制备更多提取物，而不是多等一会儿。第二，成本效率——能量来源、底物和提取物本身都必须外部提供，而不是由活体生物制造，这正是产量低、每毫克价格高的原因。第三，新平台生物的开发：大多数系统基于大肠杆菌提取物，把这套方法扩展到翻译机器性质不同的生物上仍在进行中。所以诚实的总结是：无细胞是专用工具。你在它的特定优势真正重要时才用它——有毒产物、一天出结果、或者第 7–8 讲讲的遗传密码重编程——而不是把它当默认宿主。'
    }
  ]
},

{
  id: '2-3',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.3',
  enTitle: 'How to choose a system — the questionnaire and the decision chain',
  cnTitle: '如何选择表达系统——问卷与决策链',
  slides: 'L3 s.4',
  coverage: 'full',
  coverageNote: 'The questionnaire and the databases are on the slide. The ordered decision chain is not — it is the "beyond the slides" material, and it is the thing that actually answers the exam question "you need protein X for purpose Y, what would you choose?"',
  summary: {
    en: 'Before touching a pipette, answer a fixed list of questions about the target: has anyone made it already, where is it naturally expressed, is it secreted or membrane-bound, does it carry modifications or disulfides, is it toxic, and how much do you need. Turning that list into an answer requires an ordered chain, and its first link is always glycosylation, because that single question separates the cheap prokaryotic options from the expensive eukaryotic ones.',
    cn: '动手之前先回答一份固定的问题清单：有没有人已经做过、它天然在哪个生物里表达、是分泌型还是膜蛋白、有没有修饰和二硫键、有没有毒性、你需要多少。把这份清单变成答案需要一条有顺序的决策链，而它的第一环永远是糖基化——因为这一个问题就把便宜的原核方案和昂贵的真核方案彻底分开了。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '决策链的**第一环永远是糖基化**：需要 → E. coli 直接出局，进真核阵营；不需要 → 从 E. coli 开始，永远如此。\n\n' +
            '这一个问题就把便宜快的路和昂贵慢的路彻底分开了。',
  skipIt: 'UniProt、RCSB PDB、Proteopedia、Expasy 这几个数据库的名字知道就行，网址不用背。这是判断，不是老师的话——老师在第 4 讲开头给第 3 讲做 RECAP 时，列的是各个表达系统，**没有「怎么选」这一条**，也没有任何数据库。但决策链本身建议记，因为它是整讲内容的索引。',
  explain: [
    {
      q: '为什么第一个问题是糖基化，而不是别的？',
      a: '因为**它是唯一一个能一刀砍掉半张表的问题。**\n\n' +
         '决策链要按「**区分度**」排序，不是按「重要性」排序——这是这条链最值得学的地方。\n\n' +
         '**需要 PTM → E. coli 立刻出局。**你被推进真核阵营，时间从 2 天变成几周，成本上一个量级。这一步之后，可选项少了一半。\n\n' +
         '而其它问题呢？「有没有毒性」「有几个二硫键」「要多少量」——这些**都是在阵营选定之后才调整细节的**。它们改变的是你在阵营内部怎么做，不改变你在哪个阵营。\n\n' +
         '所以顺序不能换。先问「要多少量」是没用的：不管答案是微克还是吨，你都还不知道该用哪一类宿主。\n\n' +
         '**口试里这条链本身就是答案的骨架**：被问到「你怎么给一个新蛋白选表达系统」，按这五步走一遍，比说一堆各系统的优缺点清楚得多。',
      takeaway: '按区分度排序，不按重要性。糖基化一问就砍掉一半选项，所以它排第一。'
    },
    {
      q: '为什么「翻译后修饰」和「二硫键」要分开问？看上去是一类东西。',
      a: '**因为它们的解法完全不同——一个要换阵营，一个只是在阵营内部换个房间。**\n\n' +
         '**糖基化：E. coli 根本做不了。**它没有那套酶，没有内质网和高尔基体。这不是条件不对，是能力不存在。**唯一的办法是换宿主。**\n\n' +
         '**二硫键：E. coli 做得了，只是环境不对。**二硫键需要**氧化**环境才能形成，而 E. coli 的细胞质是**还原**的（它得保护自己的蛋白不被随便氧化）。\n\n' +
         '所以解法是换环境，不是换宿主：\n\n' +
         '**换个地方**——把蛋白定位到**周质（periplasm）**，那里是氧化环境，还有专门帮忙配对的酶。\n\n' +
         '**换个菌株**——Origami、SHuffle 这类菌株的**细胞质本身被改造成氧化性的**。\n\n' +
         '这个区别在答题时很值钱：把「有二硫键」当成「必须用真核系统」是一个常见的错误答案，而正确答案是「留在 E. coli，换个位置或换个菌株」。\n\n' +
         '（细节在第 2-13 节。）',
      takeaway: '糖基化是能力问题，只能换宿主；二硫键是环境问题，换周质或换菌株就行。'
    },
    {
      q: '「有没有人已经做过」为什么排在整份清单的最前面？',
      a: '跟第 1-4-1 节一模一样的道理：**最省的一步是不做的那一步。**\n\n' +
         '但在表达这件事上，抄别人的作业比在克隆阶段更值钱。原因是：**表达条件是试出来的，不是算出来的。**\n\n' +
         '你从别人那里拿到的不只是一个质粒，而是一整套已经被试错换来的答案：这个蛋白在哪个宿主里能出可溶蛋白、要不要 16 °C 低温诱导、IPTG 加多少、要不要共表达伴侣蛋白、用什么缓冲液才不沉淀。\n\n' +
         '**这些东西没有任何数据库能查到，只能问人或者读方法部分。**而它们往往代表了别人几个月的时间。\n\n' +
         '所以这一步的正确动作是：先查文献、查 Addgene、写封信问。**在你打开移液器之前。**',
      takeaway: '表达条件是试出来的，不是算出来的。所以抄作业在这一步比在克隆那一步更值钱。'
    },
    {
      q: '「每个蛋白都有自己的脾气」——这是句玩笑还是真话？',
      a: '**是真话，而且它是这一整讲的免责声明。**\n\n' +
         '上面所有的规则、决策链、系统对比，给你的都是**先验概率，不是保证**。\n\n' +
         '实际会发生的事情是这样的：两个同源性 90% 的蛋白，一个在 E. coli 里表达得又多又可溶，另一个全部进包涵体。**没有人能事先预测哪个是哪个。**结构相似、序列相似，行为可以完全不同。\n\n' +
         '所以另外那句「**提前计划，表达实验可能要好几个月**」也不是客套。它的意思是：**你必须给试错留出时间**，因为你一定会试错。\n\n' +
         '两句话连起来读，意思是：\n\n' +
         '**决策链帮你选一个好的起点，它不保证终点。**\n\n' +
         '这也解释了为什么第 2-12 节会有「五个可调的杠杆」那样一整节内容——如果第一次就能选对，那一节就不需要存在了。',
      takeaway: '规则给的是先验概率不是保证。所以要给试错留时间——你一定会试错。'
    }
  ],
  points: [
    { term: 'Has anybody already produced it?', en: 'The first question, and the most valuable. If yes, get their clones and their protocols rather than starting over.', cn: '第一个问题，也是最有价值的。如果有，去要他们的克隆和方案，不要从头开始。' },
    { term: 'Natural context', en: 'In which organism is the target naturally expressed? Are there known orthologs you could use instead?', cn: '目标蛋白天然在哪个生物里表达？有没有已知的同源蛋白可以替代？' },
    { term: 'Localisation', en: 'Is it intracellular, secreted, or membrane-bound? This decides the construct as much as the host.', cn: '它是胞内的、分泌的，还是膜结合的？这一点对构建体设计的影响和对宿主选择一样大。' },
    { term: 'Architecture', en: 'Single-domain or multidomain? Multidomain proteins are much more likely to need folding help.', cn: '单结构域还是多结构域？多结构域蛋白需要折叠帮助的可能性高得多。' },
    { term: 'Modifications', en: 'Any post-translational modifications? Any disulfide bonds? These are asked separately because they have different fixes.', cn: '有没有翻译后修饰？有没有二硫键？这两个分开问，因为解决办法不同。' },
    { term: 'Activity and toxicity', en: 'Does it have enzymatic activity, is that activity toxic to the host, and can you detect it? Detection matters as much as production.', cn: '它有没有酶活？这个活性对宿主有没有毒性？你能不能检测它？能否检测和能否生产同样重要。' },
    { term: 'Dependencies', en: 'Does it need cofactors or interaction partners to fold or function?', cn: '它折叠或行使功能时需不需要辅因子或相互作用伙伴？' },
    { term: 'Intended use and scale', en: 'Research or industry, and how much do you actually need? Micrograms and tonnes are different problems.', cn: '用于科研还是工业？到底需要多少？微克级和吨级是完全不同的问题。' },
    { term: 'Databases', en: 'UniProt for general information, RCSB PDB and Proteopedia for structure, Expasy as the bioinformatics portal.', cn: 'UniProt 查一般信息，RCSB PDB 和 Proteopedia 查结构，Expasy 是生物信息学门户。' }
  ],
  beyondPoints: [
    { term: 'Step 1 — does it need PTMs to function?', en: 'If yes, you are out of E. coli immediately, so go to step 2. If no, start with E. coli, always. This one question separates the cheap fast prokaryotic route from the slow expensive eukaryotic one.', cn: '如果需要，立刻排除大肠杆菌，进入第二步。如果不需要，就从大肠杆菌开始，没有例外。这一个问题把便宜快的原核路线和又慢又贵的真核路线彻底分开。' },
    { term: 'Step 2 — does it need human-like glycans?', en: 'If it is a therapeutic and the glycans must be human-like, go mammalian: CHO for production, HEK293 for research. If it only needs folding help, insect or yeast will do.', cn: '如果是治疗性蛋白、糖链必须类人，就上哺乳动物：生产用 CHO，科研用 HEK293。如果只是需要折叠帮助，昆虫或酵母就够了。' },
    { term: 'Step 3 — does it have disulfide bonds?', en: 'In E. coli, target it to the periplasm, or use an Origami or SHuffle strain with an oxidising cytoplasm.', cn: '在大肠杆菌里，把它送到周质，或者用胞质呈氧化性的 Origami / SHuffle 菌株。' },
    { term: 'Step 4 — is it toxic to the host?', en: 'Use a tight promoter such as araBAD, or go cell-free, where there is no viability constraint at all.', cn: '用 araBAD 这类紧密调控的启动子，或者干脆用无细胞体系——那里根本不存在活性约束。' },
    { term: 'Step 5 — how much do you need?', en: 'Micrograms to milligrams for assays, any system will do. Milligrams for structural biology, so E. coli or insect. Grams to tonnes commercially, so E. coli or CHO, and at that point economics dominates the decision.', cn: '做实验用微克到毫克，什么系统都行。做结构生物学要毫克级，选大肠杆菌或昆虫。工业上要克到吨级，选大肠杆菌或 CHO，到这个量级经济性主导决策。' },
    { term: 'Worked example — EPO', en: 'Erythropoietin is the canonical case: its glycosylation determines its activity, so step 1 rules out E. coli outright and no amount of optimisation can rescue it.', cn: '促红细胞生成素是最典型的例子：它的糖基化决定活性，所以第一步就直接排除大肠杆菌，再怎么优化也救不回来。' }
  ],
  terms: [
    { en: 'Ortholog', cn: '直系同源蛋白', def_en: 'The same gene in a different species. Often easier to express than your original target, and sometimes an acceptable substitute.', def_cn: '不同物种中的同一个基因。往往比原目标更容易表达，有时可以作为可接受的替代品。' },
    { en: 'UniProt', cn: 'UniProt 数据库', def_en: 'The general-purpose protein sequence and annotation database — the first place to look for reported modifications, localisation and domain structure.', def_cn: '通用的蛋白序列与注释数据库——查已报道的修饰、定位和结构域组成时第一个去的地方。' },
    { en: 'Expasy', cn: 'Expasy 门户', def_en: 'The SIB bioinformatics resource portal, hosting ProtParam among many other tools used later in this course for pI and extinction coefficient.', def_cn: 'SIB 的生物信息学资源门户，其中的 ProtParam 在本课后面用来算等电点和消光系数。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the first link in the host decision chain?',
      q_cn: '宿主决策链的第一环是什么？',
      options: ['How many milligrams of purified protein does the project need?', 'Does the protein need post-translational modifications to function?', 'Is the protein toxic to the host at high expression levels?', 'Does the protein contain disulfide bonds that must form correctly?'],
      answer: 1,
      optionNotes: {
        3: { en: 'Disulfide bonds are strictly a post-translational modification, but the chain deliberately asks about them later and separately, because they have a fix that stays inside E. coli — the periplasm, or an Origami or SHuffle strain. Glycosylation has no such fix, which is why it is the branch that must be settled first.', cn: '二硫键严格说也是一种 post-translational modification，但决策链故意把它单独放到后面问，因为它在 E. coli 内部就有解——送到 periplasm，或者用 Origami / SHuffle 菌株。糖基化没有这种解，所以它才是必须先定下来的那个分叉。' }
      },
      why_en: 'The PTM question comes first because it alone splits the decision tree into the cheap prokaryotic branch and the expensive eukaryotic branch. Everything else is asked within one of those branches.',
      why_cn: '翻译后修饰这个问题排第一，因为只有它把决策树劈成「便宜的原核分支」和「昂贵的真核分支」。其他所有问题都是在某一个分支内部再问的。' },
    { type: 'mcq',
      q_en: 'A protein needs correct folding help but not human-like glycans. Where does the decision chain send you?',
      q_cn: '一个蛋白需要折叠帮助，但不需要类人糖链。决策链会把你送到哪里？',
      options: ['CHO cells', 'Insect or yeast', 'E. coli with a tight promoter', 'Cell-free'],
      answer: 1,
      optionRefs: { 0: '2-20', 2: '2-7', 3: '2-2' },
      why_en: 'Step 2 distinguishes needing human-like glycans, which forces mammalian cells, from merely needing folding help, which insect or yeast can supply at far lower cost.',
      why_cn: '第二步区分的是「需要类人糖链」（必须上哺乳动物）和「只是需要折叠帮助」（昆虫或酵母就能提供，成本低得多）。' },
    { type: 'mcq',
      q_en: 'Which question on the questionnaire is described as the most valuable to ask first?',
      q_cn: '问卷上哪个问题被认为是最值得先问的？',
      options: ['Is it a membrane protein?', 'Has anybody already produced my protein?', 'What is its molecular weight?', 'Does it need cofactors or interaction partners in order to fold?'],
      answer: 1,
      why_en: 'If someone has already produced it, you can obtain their clones and protocols and skip months of optimisation. Expression experiments take many months, so this question has the largest possible payoff.',
      why_cn: '如果已经有人做出来过，你可以要到他们的克隆和方案，省下几个月的优化。表达实验本来就要好几个月，所以这个问题的回报最大。' },
    { type: 'short',
      q_en: 'Erythropoietin cannot be produced in E. coli. Walk the decision chain to show why, and say where it sends you instead.',
      q_cn: '促红细胞生成素不能用大肠杆菌生产。走一遍决策链说明原因，并说出它会把你送到哪里。',
      accept: ['glycosylation', 'PTM', 'mammalian', 'CHO', 'activity'],
      answer_en: 'Step one asks whether the protein needs post-translational modification to function. For EPO the answer is yes: its glycosylation determines its activity and in vivo half-life, so E. coli, which performs no glycosylation at all, is ruled out immediately and no optimisation can rescue it. Step two then asks whether the glycans must be human-like. EPO is a therapeutic, so they must, which sends you to mammalian cells — CHO for production, HEK293 if you only need research quantities.',
      answer_cn: '第一步问这个蛋白是否需要翻译后修饰才能行使功能。EPO 的答案是需要：它的糖基化决定活性和体内半衰期，所以完全不做糖基化的大肠杆菌立刻被排除，再优化也没用。第二步问糖链是否必须类人。EPO 是治疗性蛋白，必须类人，于是被送到哺乳动物细胞——生产用 CHO，只要科研量的话用 HEK293。' }
  ],
  oral: {
    q_en: 'You need to produce a protein you have never worked with. How do you decide which expression system to use?',
    q_cn: '你要生产一个从没做过的蛋白。你怎么决定用哪个表达系统？',
    model_en: 'I would start with the questionnaire the lecture gives, and the first question is the highest-value one: has anybody already produced this protein? If so I would ask for their clones and protocols rather than spending months rediscovering their conditions. Then I would establish the target\'s properties from UniProt and the PDB — where it is naturally expressed, whether it is intracellular, secreted or membrane-bound, single or multidomain, whether it carries post-translational modifications or disulfide bonds, whether its activity would be toxic to a host, whether it needs cofactors or partners, and how much I actually need and for what. Turning that into a decision needs an ordered chain, and the first link is always glycosylation, because that single question separates the cheap prokaryotic route from the expensive eukaryotic one. If no modifications are needed I start with E. coli, always. If they are, I ask whether the glycans must be human-like: for a therapeutic they must, so CHO for production or HEK293 for research, whereas if the protein merely needs folding help, insect or yeast is far cheaper. Disulfides in E. coli are handled by targeting the periplasm or using an Origami or SHuffle strain. Toxicity is handled by a tight promoter like araBAD, or by going cell-free where viability is not a constraint. Finally scale: micrograms for assays allows anything, milligrams for structural biology points to E. coli or insect, and tonnes commercially means E. coli or CHO with economics dominating. Erythropoietin is the clean example — glycosylation determines its activity, so step one rules out E. coli outright.',
    checklist: ['First and best question: has anyone already made it?', 'Characterise the target: localisation, domains, PTMs, disulfides, toxicity, cofactors, scale', 'Databases: UniProt, RCSB PDB, Proteopedia, Expasy', 'Chain step 1: does it need PTMs? No, so E. coli, always', 'Chain step 2: human-like glycans, so mammalian (CHO/HEK293); folding help only, so insect or yeast', 'Chain step 3: disulfides, so periplasm or Origami/SHuffle', 'Chain step 4: toxic, so araBAD or cell-free', 'Chain step 5: scale decides between remaining options, economics dominates at tonnes', 'Worked example: EPO, glycosylation determines activity, E. coli impossible']
  },
  bank: [
    { type: 'mcq',
      q_en: 'The questionnaire opens with a question that is not about the protein at all. Which, and why first?',
      q_cn: '这份问卷的第一个问题根本不是关于蛋白本身的。是哪一个，为什么排第一？',
      options: ['How much do you need? — because scale dominates cost', 'Has anybody already produced it? — because an existing clone and protocol saves the entire exercise', 'Is it toxic? — because a toxic product kills the host before it can accumulate', 'Where is it localised? — because intracellular, secreted or membrane-bound decides the construct as much as the host'],
      answer: 1,
      why_en: 'It is the most valuable question because a positive answer ends the problem: you ask for their clone and their protocol rather than rediscovering the same failures. Every other question on the list only matters if the answer to this one is no.',
      why_cn: '这是最有价值的问题，因为肯定的答案就终结了整个问题：你去要他们的克隆和方案，而不是把同样的失败重新走一遍。清单上其他所有问题，只有在这一问答案为「否」时才有意义。' },
    { type: 'mcq',
      q_en: 'Step 1 of the decision chain asks whether the protein needs PTMs to function. Why is that the right first branch?',
      q_cn: '决策链第一步问蛋白是否需要翻译后修饰才有功能。为什么这是正确的第一个分叉？',
      options: ['Because post-translational modifications are the most expensive feature to add later', 'Because it alone splits the decision into a prokaryotic branch and a eukaryotic branch', 'Because the answer to it fixes which promoter you will express from', 'Because it decides between secretion into the medium and intracellular expression'],
      answer: 1,
      optionRefs: { 2: '2-7' },
      why_en: 'Everything else in the chain is a problem you can work around inside a chosen host — disulfides with an Origami strain, toxicity with a tight promoter, solubility with temperature or fusion partners. A requirement for genuine PTMs is not workaround-able in E. coli, so it has to be resolved before anything else is decided.',
      why_cn: '链条上其他每一项都是在选定宿主内部可以绕过去的问题——二硫键用 Origami 菌株、毒性用紧密启动子、溶解度用温度或融合标签。而对真正翻译后修饰的需求在大肠杆菌里是绕不过去的，所以必须在其他任何决定之前先解决。' },
    { type: 'mcq',
      q_en: 'The protein has disulfide bonds but no other modifications. What does the chain suggest before abandoning E. coli?',
      q_cn: '蛋白有二硫键但没有其他修饰。在放弃大肠杆菌之前，决策链建议怎么做？',
      options: ['Fuse it to a solubility tag such as maltose binding protein', 'Export it to the periplasm, or use an Origami or SHuffle strain', 'Switch to autoinduction medium for a slower, self-timed induction', 'Lower the induction temperature to 16 degrees overnight'],
      answer: 1,
      optionRefs: { 0: '2-12', 2: '2-9', 3: '2-12' },
      why_en: 'Disulfides are listed separately from PTMs precisely because they have their own fix. The cytoplasm is reducing, so either move the protein somewhere oxidising — the periplasm — or change the cytoplasm itself with a strain engineered for it. Neither of those helps with glycosylation, which is why the two questions are kept apart.',
      why_cn: '二硫键之所以与翻译后修饰分开列，正是因为它有自己的解法。细胞质是还原性的，所以要么把蛋白送到氧化性的环境去——周质空间——要么用专门改造过的菌株改变细胞质本身。这两种做法对糖基化都毫无帮助，这正是把两个问题分开问的原因。' },
    { type: 'short',
      q_en: 'Why is erythropoietin the canonical worked example for this decision chain?',
      q_cn: '为什么促红细胞生成素是这条决策链的经典例题？',
      accept: ['glycosylation', 'activity', 'step 1', 'E. coli', 'optimisation'],
      answer_en: 'Because it fails at step one, and fails absolutely. EPO carries N-linked glycans and those glycans are not decoration — they determine the activity, principally by controlling serum half-life through sialylation. So the answer to "does it need post-translational modifications to function" is yes, and the chain immediately routes you out of E. coli. What makes it the canonical example rather than just an example is that this is not a difficulty you can optimise your way past. If a protein is insoluble you can lower the temperature, change the strain, add a fusion partner, refold from inclusion bodies; there is a ladder of things to try. Here there is no ladder, because E. coli has no glycosylation machinery at all — there is nothing to tune. You could express perfectly soluble, perfectly folded, full-length EPO in E. coli and it would still be therapeutically useless. That distinction, between a problem with a workaround and a problem without one, is exactly what the first step of the chain is testing for.',
      answer_cn: '因为它在第一步就失败，而且是绝对的失败。EPO 带有 N 连接糖链，而这些糖链不是装饰——它们决定活性，主要通过唾液酸化控制血清半衰期。所以「它是否需要翻译后修饰才有功能」的答案是「是」，决策链立刻把你导出大肠杆菌。它之所以是经典例题而不只是一个例子，在于这不是一个可以靠优化绕过去的困难。如果蛋白不溶，你可以降温、换菌株、加融合标签、从包涵体复性——有一整条阶梯可以试。这里没有阶梯，因为大肠杆菌根本没有糖基化机器——没有任何东西可调。你可以在大肠杆菌里表达出完全可溶、完全折叠、全长的 EPO，它在治疗上依然毫无用处。「有解法的问题」与「没有解法的问题」之间的这个区分，正是决策链第一步要检验的东西。'
    }
  ]
},

{
  id: '2-4',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.4',
  enTitle: 'E. coli — why it is still the default after forty years',
  cnTitle: '大肠杆菌——四十年后为什么它仍是默认选择',
  slides: 'L3 s.7–9',
  coverage: 'full',
  coverageNote: 'Both tables are on the slides. The reason isotope labelling is effectively E. coli-only is not, and it matters because it turns "structural biology needs labelled sample" into a hard argument for this host rather than a preference.',
  summary: {
    en: 'E. coli has been the first-choice expression host for over forty years, and the reasons are cumulative rather than any single one: a twenty-minute doubling time, cheap defined media, predictable scale-up, an enormous genetic toolbox, yields of tens to hundreds of milligrams per litre, and a completely characterised organism. Its three weaknesses are equally specific — no post-translational modification, eukaryotic proteins that misfold into inclusion bodies, and codon bias.',
    cn: '大肠杆菌做首选表达宿主已经四十多年，理由不是某一条特别突出，而是累加起来的：20 分钟的倍增时间、便宜且成分明确的培养基、可预测的放大、庞大的遗传工具箱、每升几十到几百毫克的产量，以及一个被彻底研究透的生物体。它的三个弱点同样明确——没有翻译后修饰、真核蛋白错误折叠成包涵体、密码子偏好性。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.9', src: 'img/figures/L3_s09_1.webp' },
    { slide: 'L3 s.9', src: 'img/figures/L3_s09_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'E. coli 的优点没有哪一条特别突出，是**累加**起来的：快、便宜、可放大、工具多、产量高、研究得透。\n\n' +
            '三个弱点里，**只有「没有翻译后修饰」是真正绕不过去的**——另外两个（包涵体、密码子偏好）都有成熟对策。',
  skipIt: '20 分钟、每升几十到几百毫克这些数字知道量级即可。但 **M9 这个培养基名字要记**，因为同位素标记只能靠它。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Procaryotic expression – (dis)advantages**——**优缺点本身是被点名的**，所以这一节要能两边都讲。',
  explain: [
    {
      q: '「20 分钟倍增」为什么是这么关键的一条？',
      a: '因为它决定的不是「快多少」，而是**你一天能试几次**。\n\n' +
         '20 分钟倍增意味着：早上划板，晚上就有单菌落；接种过夜，第二天早上就是饱和培养；诱导几小时，当天下午跑胶。**两天一轮。**\n\n' +
         '哺乳动物细胞的倍增时间以**天**计，一轮完整实验以**周**计。\n\n' +
         '这个差别的真正后果是：**迭代速度本身就是一种能力。**\n\n' +
         '回想上一节那句「每个蛋白都有自己的脾气」——既然结果无法预测，那么**能便宜地试十次的系统，往往比理论上更合适但一个月只能试一次的系统更快到达答案**。\n\n' +
         '所以「先从 E. coli 开始，总是」这条建议不只是因为便宜。**便宜 + 快 = 你负担得起失败**，而这一讲后面所有的排障手段（换菌株、换温度、换启动子、加伴侣蛋白）都建立在「你可以多试几次」这个前提上。',
      takeaway: '快的真正价值是「试错负担得起」。结果不可预测时，迭代速度就是能力。'
    },
    {
      q: '为什么同位素标记基本只能在 E. coli 里做？',
      trace: {
        what: '**同位素标记**：让蛋白里的原子换成重同位素——氮换成 ¹⁵N、碳换成 ¹³C、氢换成 ²H。NMR 和中子散射需要这个，因为普通的 ¹⁴N 在 NMR 里看不见。',
        from: '做法不是「加进去」，而是**断绝其它来源**。用 **M9 极简培养基**：唯一的氮源是 ¹⁵NH₄Cl，唯一的碳源是 ¹³C-葡萄糖。细菌想长，就只能拿这些原子来盖自己的蛋白——**没有别的选择**。\n\n所以关键不在同位素，在**培养基成分完全明确**。LB 和 YT 是复杂培养基（酵母提取物、胰蛋白胨），里面有什么谁也说不全，**正因为说不全，就没法控制原子从哪来**。',
        to: '哺乳动物细胞做不到这件事，三个原因叠在一起：血清成分复杂且必需；细胞没法只靠单一碳源氮源存活；标记试剂在那个培养规模上贵得不现实。\n\n**所以「这个项目要做 NMR / 中子散射」本身就是一条选 E. coli 的硬理由**——不是偏好，是别无选择。这也是为什么结构生物学里那么多蛋白是在 E. coli 里做的。',
        family: '三种常用培养基对照着记：**LB / YT** 是复杂培养基，长得快、成分不明；**M9** 是极简培养基，长得慢、成分完全明确。「明确」是它唯一也是决定性的优点。'
      },
      takeaway: '靠的是「断绝其它来源」，所以必须用成分完全明确的 M9。这是 E. coli 独有的能力。'
    },
    {
      q: '三个弱点里，哪个真正绕不过去？',
      a: '**按「有多难绕」排一下，顺序很清楚：**\n\n' +
         '**密码子偏好——最容易绕。**两条现成的路：换 **Rosetta** 这类补充了稀有 tRNA 的菌株，或者**直接密码子优化你的基因**（第 1-4-3 节）。基本上算是已解决的问题。\n\n' +
         '**包涵体 / 错误折叠——可以打的仗。**这一讲从 2-10 到 2-12 有整整三节在讲怎么对付它：降温、换启动子、换菌株、加融合标签、共表达伴侣蛋白，或者干脆接受它、走复性路线。**办法很多，而且经常有一个能成。**\n\n' +
         '**翻译后修饰——真正绕不过去。**E. coli 没有那套酶系统，这不是条件问题，是能力问题。**只能换宿主。**\n\n' +
         '这个排序在答题和做实验时都有用：\n\n' +
         '看到「**需要糖基化**」→ 立刻跳出 E. coli，别浪费时间。\n\n' +
         '看到「**全进包涵体了**」→ **不要放弃**，这是这一讲后面几节要教你打的仗。\n\n' +
         '很多人的直觉正好反过来——把包涵体当成失败、把糖基化当成小麻烦。两个都错了。',
      takeaway: '密码子偏好已解决，包涵体是可以打的仗，只有翻译后修饰必须换宿主。'
    },
    {
      q: '「被研究得很透」为什么也算一条优点？',
      a: '因为它决定的是：**失败的时候，你能不能查出原因。**\n\n' +
         'E. coli 的基因组、代谢通路、表达行为都是完全清楚的。所以当一件事出了问题，**几乎总有一个已知的解释，和一个对应的已知对策**。\n\n' +
         '这一点直接产出了下一节那张表——「一个菌株解决一个问题」：蛋白被降解了？用缺蛋白酶的菌株。有稀有密码子？用 Rosetta。要二硫键？用 Origami 或 SHuffle。**每一个对策的背后，都是先有人把机制搞清楚了。**\n\n' +
         '换一个研究不充分的宿主，同样的失败你只能盲试，因为没人知道那个宿主里发生了什么。\n\n' +
         '**可诊断性是一种被严重低估的优点。**它不出现在任何「产量」「成本」的对比表里，但它决定了你卡住的时候是查一下手册就解决，还是耗掉三个月。',
      takeaway: '研究得透 = 失败时查得出原因、有现成对策。这是下一节那张菌株表能存在的前提。'
    }
  ],
  points: [
    { term: 'Fast growth', en: 'Doubling time about 20 minutes, which is what makes a two-day timeline possible at all.', cn: '倍增时间约 20 分钟，这才是「两天出结果」这个时间线成立的前提。' },
    { term: 'Low cost', en: 'LB, YT and M9 media, simple cultivation, and crucially M9 makes isotope labelling possible for X-ray and NMR work.', cn: 'LB、YT、M9 培养基，培养简单；关键是 M9 让 X 射线和 NMR 需要的同位素标记成为可能。' },
    { term: 'Easy scale-up', en: 'Test tube to fermenter, and the behaviour is predictable along the way.', cn: '从试管到发酵罐，而且中间的行为是可预测的。' },
    { term: 'Genetically tractable', en: 'A vast toolbox of plasmids, promoters and mutant strains — the subject of the next two nodes.', cn: '庞大的质粒、启动子和突变菌株工具箱——接下来两个小节的内容。' },
    { term: 'High yield', en: 'Often tens to hundreds of milligrams per litre of culture.', cn: '通常每升培养物能得到几十到几百毫克。' },
    { term: 'Well characterised', en: 'Genome, metabolism and expression behaviour are all fully understood, so when something fails there is usually a known explanation.', cn: '基因组、代谢和表达行为都被彻底研究清楚，所以出问题时通常有现成的解释。' },
    { term: 'Weakness — no PTMs', en: 'No glycosylation at all, and disulfide pairing is inefficient because the cytoplasm is reducing.', cn: '完全不做糖基化，而且因为胞质是还原环境，二硫键配对效率很低。' },
    { term: 'Weakness — misfolding', en: 'Eukaryotic proteins frequently misfold and aggregate into inclusion bodies.', cn: '真核蛋白经常错误折叠、聚集成包涵体。' },
    { term: 'Weakness — codon bias', en: 'Rare codons in eukaryotic genes reduce expression efficiency. Fixed with Rosetta strains or by codon-optimising the gene.', cn: '真核基因里的稀有密码子降低表达效率。用 Rosetta 菌株或对基因做密码子优化来解决。' }
  ],
  beyondPoints: [
    { term: 'Why isotope labelling is effectively E. coli-only', en: 'NMR and neutron scattering need the protein built throughout from 15N, 13C or 2H. You do this by growing in M9 minimal medium whose sole nitrogen source is 15NH4Cl and sole carbon source is 13C-glucose, so the bacteria have no alternative but to build with the isotopes.', cn: 'NMR 和中子散射需要蛋白全身都由 15N、13C 或 2H 构成。做法是用 M9 极简培养基，唯一氮源是 15NH4Cl、唯一碳源是 13C-葡萄糖，细菌别无选择只能用这些同位素来造蛋白。' },
    { term: 'Why it cannot be done in mammalian cells', en: 'Serum composition is complex, the cells cannot survive on a single defined carbon and nitrogen source, and the cost of labelled reagents at that scale is unrealistic. So "this project needs a labelled sample" is by itself a hard argument for choosing E. coli.', cn: '血清成分复杂，细胞无法只靠单一的明确碳源氮源存活，而且在那个规模上标记试剂的成本高到不现实。所以「这个项目需要标记样品」本身就是选择大肠杆菌的一个硬理由。' }
  ],
  terms: [
    { en: 'M9 minimal medium', cn: 'M9 极简培养基', def_en: 'A chemically defined medium with a single nitrogen source and a single carbon source. The basis of isotope labelling, because it lets you replace those single sources with labelled ones.', def_cn: '只含单一氮源和单一碳源的化学成分明确的培养基。同位素标记的基础，因为可以把这两个唯一来源换成标记的。' },
    { en: 'Codon bias', cn: '密码子偏好性', def_en: 'Unequal use of synonymous codons between species. A eukaryotic gene full of codons that are rare in E. coli expresses poorly and gives truncated products.', def_cn: '同义密码子在不同物种间使用频率不同。一个充满大肠杆菌稀有密码子的真核基因表达很差，而且会产生截短产物。' },
    { en: 'Doubling time', cn: '倍增时间', def_en: 'The time for a culture to double in cell number. About 20 minutes for E. coli, hours for yeast, roughly a day for mammalian cells.', def_cn: '培养物细胞数翻倍所需的时间。大肠杆菌约 20 分钟，酵母几小时，哺乳动物细胞大约一天。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is E. coli effectively the only practical host for isotope-labelled NMR samples?',
      q_cn: '为什么大肠杆菌实际上是同位素标记 NMR 样品唯一可行的宿主？',
      options: ['Its proteins are smaller, which makes labelling unnecessary', 'Its M9 medium has one N and one C source, both replaceable by labelled forms', 'It incorporates isotopes more efficiently than any other cell type, so less label is needed', 'Only bacterial ribosomes will accept labelled amino acids'],
      answer: 1,
      why_en: 'Labelling requires the cell to have no unlabelled alternative. M9 supplies exactly one nitrogen and one carbon source, so replacing them with 15NH4Cl and 13C-glucose forces full incorporation. Mammalian cells need complex serum and cannot survive this way.',
      why_cn: '标记的前提是细胞没有未标记的替代来源。M9 只提供一种氮源和一种碳源，把它们换成 15NH4Cl 和 13C-葡萄糖就能强制全掺入。哺乳动物细胞需要复杂的血清，无法这样存活。' },
    { type: 'mcq',
      q_en: 'Which is NOT one of the three stated disadvantages of E. coli?',
      q_cn: '以下哪一项**不是**大肠杆菌被列出的三个缺点之一？',
      options: ['No post-translational modifications', 'Eukaryotic proteins misfold into inclusion bodies', 'Codon bias reduces expression efficiency', 'Slow growth requiring long fermentations'],
      answer: 3,
      why_en: 'Fast growth is one of its advantages, not a disadvantage — a doubling time of about 20 minutes. The three real weaknesses are no PTMs, misfolding, and codon bias.',
      why_cn: '快速生长是它的优点而不是缺点——倍增时间约 20 分钟。三个真正的弱点是没有翻译后修饰、错误折叠、密码子偏好性。' },
    { type: 'mcq',
      q_en: 'Approximately what yield does E. coli typically give?',
      q_cn: '大肠杆菌的典型产量大约是多少？',
      options: ['Nanograms per litre', 'Micrograms per litre', 'Tens to hundreds of milligrams per litre', 'Tens of grams per litre'],
      answer: 2,
      why_en: 'Tens to hundreds of milligrams per litre of culture, which comfortably covers structural biology requirements and is why it is the default for crystallography and NMR.',
      why_cn: '每升培养物几十到几百毫克，足够覆盖结构生物学的需求，这也是它成为晶体学和 NMR 默认选择的原因。' },
    { type: 'short',
      q_en: 'E. coli cannot glycosylate and often misfolds eukaryotic proteins. Why is it nevertheless still the first host you try?',
      q_cn: '大肠杆菌不能糖基化，而且经常让真核蛋白错误折叠。为什么它仍然是你第一个尝试的宿主？',
      accept: ['fast', 'cheap', 'high yield', 'toolbox', 'many proteins do not need PTMs'],
      answer_en: 'Because its disadvantages only cost you anything if your particular protein needs what it cannot do. A great many targets — bacterial enzymes, single-domain proteins, anything without glycans or disulfides — need none of it, and for those you get a two-day timeline, three-dollar media, tens to hundreds of milligrams per litre, predictable scale-up and forty years of accumulated strains and plasmids. The misfolding and codon-bias problems also have specific, cheap fixes in the form of specialised strains and codon optimisation, so they are often not fatal even when they do appear.',
      answer_cn: '因为它的缺点只有在你的蛋白恰好需要它做不到的事情时才构成损失。相当多的目标蛋白——细菌来源的酶、单结构域蛋白、任何没有糖链和二硫键的——都不需要那些，对这些蛋白你能得到两天的周期、三美元的培养基、每升几十到几百毫克的产量、可预测的放大，以及四十年积累下来的菌株和质粒。而且错误折叠和密码子偏好都有专门且便宜的解决办法（特化菌株、密码子优化），所以就算出现也常常不致命。' }
  ],
  oral: {
    q_en: 'Why has E. coli remained the default expression host for over forty years?',
    q_cn: '为什么大肠杆菌四十多年来一直是默认的表达宿主？',
    model_en: 'No single reason, but a set that compounds. It doubles in about twenty minutes, which is what makes a two-day timeline possible at all. Its media — LB, YT, M9 — are cheap and cultivation is simple. Scale-up from test tube to fermenter is predictable. There is an enormous genetic toolbox of plasmids, promoters and purpose-built mutant strains. Yields run to tens or hundreds of milligrams per litre, comfortably enough for structural biology. And the organism is completely characterised, so when expression fails there is usually a known explanation and a known fix. One advantage deserves separate mention: because it grows in M9 minimal medium with a single nitrogen source and a single carbon source, you can replace those with 15N-ammonium chloride and 13C-glucose and force full isotope incorporation. That is effectively impossible in mammalian cells, which need complex serum, so any project requiring labelled sample for NMR is pushed to E. coli on that ground alone. The disadvantages are equally specific: no post-translational modification at all, no glycosylation and inefficient disulfide pairing because the cytoplasm is reducing; eukaryotic proteins that misfold and aggregate into inclusion bodies; and codon bias, where rare codons in a eukaryotic gene reduce efficiency. But the last two have cheap fixes in specialised strains and codon optimisation, and the first only costs you if your protein actually needs modification. That is the real answer to why it survives — its weakness is irrelevant for a large fraction of targets.',
    checklist: ['Over forty years as first-choice host', 'Doubling time about 20 minutes', 'Cheap media: LB, YT, M9; simple cultivation', 'Predictable scale-up, test tube to fermenter', 'Vast toolbox of plasmids, promoters, mutant strains', 'Yields of tens to hundreds of mg per litre', 'M9 enables isotope labelling, effectively impossible elsewhere', 'Weakness 1: no PTMs, no glycosylation, poor disulfides', 'Weakness 2: misfolding into inclusion bodies', 'Weakness 3: codon bias, fixed by Rosetta or codon optimisation']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why is E. coli effectively the only practical host for isotope-labelled NMR samples?',
      q_cn: '为什么大肠杆菌实际上是同位素标记 NMR 样品唯一可行的宿主？',
      options: ['Its proteins are smaller, so full labelling is not required', 'It grows on M9, a defined medium with a single carbon and nitrogen source', 'Only E. coli tolerates growth in fully deuterated water', 'Labelled amino acids are sold only for prokaryotic expression, so no other host can be labelled'],
      answer: 1,
      why_en: 'Labelling requires every nitrogen and carbon atom in the protein to come from one defined labelled source. E. coli will grow on M9 with labelled ammonium chloride and glucose. Mammalian cells need complex serum, cannot live on a single defined carbon and nitrogen source, and the cost of labelled reagents at that scale is unrealistic. So "this project needs a labelled sample" is by itself a hard argument for E. coli.',
      why_cn: '标记要求蛋白里每一个氮原子和碳原子都来自单一的、确定的标记源。大肠杆菌能在含标记氯化铵和葡萄糖的 M9 上生长。哺乳动物细胞需要成分复杂的血清，无法靠单一确定的碳源氮源存活，而且在那个规模上标记试剂的成本不现实。所以「这个项目需要标记样品」本身就是选择大肠杆菌的硬理由。' },
    { type: 'mcq',
      q_en: 'What does a Rosetta strain fix, and what does it not?',
      q_cn: 'Rosetta 菌株解决什么问题，不解决什么问题？',
      options: ['It fixes disulfide bond formation but leaves codon bias untouched', 'It supplies tRNAs for rare codons, but nothing for folding or solubility', 'It fixes inclusion bodies by lowering the rate of expression', 'It supplies chaperones that help eukaryotic proteins fold'],
      answer: 1,
      optionRefs: { 0: '2-5', 2: '2-12', 3: '2-12' },
      why_en: 'Rosetta carries extra tRNA genes for codons a eukaryotic gene uses freely and E. coli uses rarely, so ribosomes stop stalling. That raises the amount of full-length protein made. It says nothing about whether that protein folds, dissolves or is modified — those are separate problems with separate strains and strategies.',
      why_cn: 'Rosetta 携带额外的 tRNA 基因，对应那些真核基因常用而大肠杆菌罕用的密码子，于是核糖体不再停顿。这提高了全长蛋白的产量，但完全不涉及这个蛋白是否折叠、是否可溶、是否被修饰——那些是各自独立的问题，有各自的菌株和策略。' },
    { type: 'mcq',
      q_en: 'Codon bias can be fixed by a Rosetta strain or by codon-optimising the gene. What is the practical difference?',
      q_cn: '密码子偏好可以用 Rosetta 菌株解决，也可以对基因做密码子优化。实际差别是什么？',
      options: ['Codon optimisation changes the protein sequence; Rosetta does not', 'Rosetta changes the host and works with any gene; optimisation changes the DNA once and then works in any strain', 'Only Rosetta works for genes with many rare codons, because synonymous recoding cannot remove a codon that the host has no tRNA for', 'Codon optimisation requires a synthetic gene, Rosetta requires a synthetic plasmid'],
      answer: 1,
      optionRefs: { 0: '1-4-3' },
      why_en: 'They attack the same mismatch from opposite ends. Rosetta supplies the missing tRNAs, so the existing clone works unchanged but you are tied to that strain. Optimisation rewrites the gene with synonymous codons, so the protein sequence is identical and the construct then expresses well in ordinary strains — but it needs a synthesised gene up front.',
      why_cn: '两者从相反的两端解决同一个不匹配。Rosetta 补上缺失的 tRNA，现有克隆不用改就能用，但你被绑在那个菌株上。密码子优化用同义密码子重写基因，蛋白序列完全不变，之后在普通菌株里也能好好表达——但前期需要合成基因。' },
    { type: 'short',
      q_en: 'E. coli has three named weaknesses. Which of them can be worked around, and which cannot?',
      q_cn: '大肠杆菌有三个明确的弱点。哪些可以绕过去，哪些不能？',
      accept: ['PTM', 'glycosylation', 'misfolding', 'codon bias', 'periplasm', 'Rosetta'],
      answer_en: 'Two of the three have good workarounds and one does not, and knowing which is which is the whole practical value of the list. Codon bias is the easiest: rare codons in a eukaryotic gene stall the ribosome and lower yield, and you fix it either by using a Rosetta strain that supplies the missing tRNAs, or by codon-optimising the gene with synonymous codons so the protein is unchanged. Misfolding into inclusion bodies is harder but still tractable — lower the induction temperature, use a weaker promoter or less inducer to slow synthesis, co-express chaperones, add a solubility partner such as MBP, or accept the inclusion bodies and refold from them, which is sometimes the highest-yielding route anyway. The one that cannot be worked around is the absence of post-translational modifications. There is no glycosylation machinery in E. coli, so there is nothing to optimise; if the protein needs genuine glycans to function you have to leave the host. The related disulfide problem is a partial exception and is usually listed separately for that reason — the cytoplasm is reducing, but you can target the protein to the oxidising periplasm or use an Origami or SHuffle strain, so that one does have a fix.',
      answer_cn: '三个里有两个有好的解法、一个没有，而分清哪个是哪个正是这份清单的全部实用价值。密码子偏好最容易：真核基因里的稀有密码子让核糖体停顿、降低产量，解决办法要么用 Rosetta 菌株补上缺失的 tRNA，要么用同义密码子对基因做优化，蛋白序列完全不变。错误折叠成包涵体更难一些但仍然可解——降低诱导温度、用更弱的启动子或更少的诱导剂来放慢合成、共表达分子伴侣、加 MBP 之类的助溶标签，或者干脆接受包涵体并从中复性——后者有时反而是产量最高的路线。真正绕不过去的是缺少翻译后修饰。大肠杆菌根本没有糖基化机器，所以没有任何东西可优化；如果蛋白需要真正的糖链才有功能，你只能换宿主。相关的二硫键问题算是部分例外，也正因如此通常被单独列出——细胞质是还原性的，但你可以把蛋白导向氧化性的周质空间，或者用 Origami、SHuffle 菌株，所以这一条是有解法的。'
    }
  ]
},

{
  id: '2-5',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.5',
  enTitle: 'Specialised E. coli strains — one strain per problem',
  cnTitle: '特化大肠杆菌菌株——一个菌株解决一个问题',
  slides: 'L3 s.10',
  coverage: 'full',
  coverageNote: 'The strain table is on the slide. Learn it backwards — examiners ask "your protein is doing X, what do you use?" rather than "what does BL21 lack?" The lacY mechanism is beyond-the-slides and is a favourite detail.',
  summary: {
    en: 'Each specialised E. coli strain exists to solve exactly one named problem: BL21(DE3) lacks two proteases so your product is not degraded, Rosetta supplies tRNAs for rare codons, Origami and SHuffle have an oxidising cytoplasm so disulfides can form, ArcticExpress carries cold-adapted chaperonins for folding at 10–16 degrees, Tuner lacks lac permease so induction is graded rather than all-or-none, and BL21 Star has a mutant RNase E so mRNA lasts longer. The table is only useful learned as problem to solution.',
    cn: '每一个特化的大肠杆菌菌株都只为解决一个明确的问题：BL21(DE3) 敲掉两个蛋白酶所以产物不被降解，Rosetta 补充稀有密码子的 tRNA，Origami 和 SHuffle 的胞质呈氧化性所以能形成二硫键，ArcticExpress 带有耐冷伴侣蛋白可以在 10–16 度折叠，Tuner 缺少乳糖透过酶所以诱导是渐变而非全有全无，BL21 Star 的 RNase E 突变让 mRNA 存活更久。这张表只有按「问题→方案」来记才有用。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这张表要**倒着记**：不是「Rosetta 是什么」，而是「**表达量低还带截短产物 → 想到 Rosetta**」。\n\n' +
            '每个菌株只解决一个明确的症状，考官也是从症状问起的。',
  skipIt: 'Rosetta 补的那六个稀有密码子（AGG、AGA、AUA、CUA、CCC、GGA）具体是哪几个，不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **BL21(DE3) derivatives**——**这一节整体是被点名的**，要能讲每个菌株解决什么问题，但不必记密码子清单。',
  explain: [
    {
      q: 'BL21 敲掉的 Lon 和 OmpT 是什么？为什么正好是这两个？',
      trace: {
        what: '两个**蛋白酶**。**Lon** 在细胞质里，**OmpT** 在外膜上。',
        from: '它们都不是为了跟你作对而存在的。**Lon 的本职工作，就是识别并降解「没折好的、异常的」蛋白**——这是细胞的质量控制系统，避免错误折叠的蛋白堆积成灾。OmpT 在外膜上，负责降解外来的肽。',
        to: '问题在于：**你过量表达出来的外源蛋白，在 Lon 眼里长得就像「异常蛋白」**——它经常来不及折好、经常把疏水面暴露在外。所以**你的产物不是被误伤，是被精确识别、按规矩处理掉的**。\n\nOmpT 的威胁则出现在**裂解细胞的那一刻**：细胞完整时它在外膜上，碰不到胞质里的产物；细胞一破，两者就混在一起了。\n\n把这两个敲掉，产物在**细胞内**和**裂解后**各少一层威胁。这就是为什么 BL21 是几乎所有表达菌株的共同底盘。',
        family: '同类思路还有别的缺蛋白酶菌株。跟它们相对的是「加东西」型菌株（Rosetta 加 tRNA、ArcticExpress 加伴侣蛋白）——**一类做减法，一类做加法。**'
      },
      takeaway: 'Lon 专门降解折叠异常的蛋白，而你过表达的产物正好符合这个描述。不是误伤。'
    },
    {
      q: '「全有全无」的诱导到底哪里不好？一半细胞全开，跟每个细胞开一半，跑胶不是一样吗？',
      a: '**跑胶确实看不出区别**——总量都是一半。但实验结果完全不同，而这正是 Tuner 存在的理由。\n\n' +
         '**全有全无的情况下，那些「全开」的细胞承受的是满负荷。**包涵体、生长停滞、质粒丢失、蛋白被降解，全都发生在它们身上。剩下那些「全关」的细胞则毫发无伤，什么也没贡献。\n\n' +
         '**关键后果是：你没法通过少加 IPTG 来放慢合成速度。**\n\n' +
         '「放慢合成速度、给折叠留时间」是这一讲后面对付不可溶蛋白的核心手段之一。你以为把 IPTG 从 1 mM 降到 0.1 mM 就是在放慢速度——**在全有全无的系统里，你只是把「满速运转的细胞数」从 80% 降到了 20%**，每个开着的细胞还是在满速跑，还是照样进包涵体。\n\n' +
         '**删掉 lacY 之后，IPTG 只能靠被动扩散进来，每个细胞看到的浓度都一样**，这时候降低 IPTG 才真的等于降低速度。\n\n' +
         '所以 Tuner 解决的不是产量问题，是**「让一个旋钮真的成为旋钮」**的问题。',
      takeaway: '全有全无时降低 IPTG 只是减少开着的细胞数，不是减慢速度。想调速度就必须先让诱导变均匀。'
    },
    {
      q: 'Origami / SHuffle 改的 trxB 和 gor 是什么？',
      trace: {
        what: '两个**还原酶**的基因：**trxB** 编码硫氧还蛋白还原酶（thioredoxin reductase），**gor** 编码谷胱甘肽还原酶（glutathione reductase）。',
        from: 'E. coli 的细胞质为什么是还原环境？就靠这两条通路。它们不停地把被氧化的东西还原回去，维持胞内的还原状态——**这是细菌保护自己胞内蛋白不被随便氧化的正常机制**，不是缺陷。',
        to: '把这两条通路都敲掉，还原能力瘫痪，**细胞质就变成氧化性的**，二硫键这才形成得起来。\n\n**注意这是在「破坏一个正常的生理功能」来换取一个非天然的环境**，所以代价是真实的：这类菌株通常长得慢、产量也偏低。它不是免费的升级，是一次交易。',
        family: '解决同一个问题的另一条路是**把蛋白送到周质（periplasm）**——那里天然就是氧化环境，还有专门帮忙配对二硫键的酶。两条路的区别是「改造整个细胞质」还是「换个房间」，细节在第 2-13 节。'
      },
      takeaway: '敲掉两条还原通路，把胞质变成氧化性的。代价是菌长得慢——这是交易不是升级。'
    },
    {
      q: 'ArcticExpress 为什么要专门带「耐冷」的伴侣蛋白？',
      a: '因为它解决的是**低温这个疗法本身带来的副作用**——这一点很容易被忽略。\n\n' +
         '**降温是对付不可溶蛋白最常用的手段**：温度低，合成速度慢，新生肽链有更多时间折叠好再往下走，不至于半路暴露疏水面互相粘住。所以 16 °C 甚至 10 °C 过夜诱导是标准操作。\n\n' +
         '**但是：E. coli 自己的伴侣蛋白在低温下也变慢了。**\n\n' +
         '它是一个中温菌，全套酶都是按 37 °C 调好的。你把温度降到 10–16 °C，一边把合成放慢了（这是你要的），一边**也把负责帮忙折叠的机器冻住了**（这不是你要的）。\n\n' +
         '**ArcticExpress 共表达来自嗜冷菌的 Cpn10 和 Cpn60**——这两个伴侣蛋白本来就是在低温下工作的，10–16 °C 对它们是正常温度。\n\n' +
         '于是你同时得到两件事：**慢的合成 + 仍然工作的折叠帮手**。\n\n' +
         '这个菌株值得单独欣赏一下，因为它体现了一个很有用的思路：**当一个疗法有副作用时，不一定要放弃疗法，可以专门去补上被它损害的那一环。**',
      takeaway: '降温帮折叠，但也冻住了自家的伴侣蛋白。ArcticExpress 补的正是这一环。'
    }
  ],
  points: [
    { term: 'BL21(DE3)', en: 'Lacks the Lon and OmpT proteases. Solves degradation of your product — and Lon is precisely the cytoplasmic protease that targets abnormal and unfolded protein.', cn: '缺失 Lon 和 OmpT 两个蛋白酶。解决产物被降解的问题——而 Lon 正是专门降解异常和未折叠蛋白的胞质蛋白酶。' },
    { term: 'Rosetta(DE3)', en: 'Supplies tRNAs for the rare codons AGG, AGA, AUA, CUA, CCC and GGA. Solves codon bias in eukaryotic genes.', cn: '提供 AGG、AGA、AUA、CUA、CCC、GGA 这些稀有密码子的 tRNA。解决真核基因的密码子偏好问题。' },
    { term: 'Origami / SHuffle', en: 'Mutations in trxB (thioredoxin reductase) and gor (glutathione reductase) give an oxidising cytoplasm. Lets disulfide bonds form in the cytoplasm.', cn: 'trxB（硫氧还蛋白还原酶）和 gor（谷胱甘肽还原酶）突变，使胞质呈氧化性。让二硫键能在胞质中形成。' },
    { term: 'ArcticExpress(DE3)', en: 'Co-expresses the cold-adapted chaperonins Cpn10 and Cpn60, so folding still works at 10–16 degrees.', cn: '共表达耐冷的伴侣蛋白 Cpn10 和 Cpn60，所以在 10–16 度下折叠仍然有效。' },
    { term: 'Tuner(DE3)', en: 'Lacks lac permease (lacY). Gives tunable, homogeneous IPTG induction instead of all-or-none.', cn: '缺失乳糖透过酶（lacY）。给出可调节、均一的 IPTG 诱导，而不是全有全无。' },
    { term: 'BL21 Star(DE3)', en: 'Carries a mutation in RNase E, improving mRNA stability and therefore yield.', cn: '携带 RNase E 突变，提高 mRNA 稳定性，从而提高产量。' },
    { term: 'Learn it backwards', en: 'Examiners ask from the symptom: protein degraded goes to BL21; poor expression with truncations goes to Rosetta or codon optimisation; needs cytoplasmic disulfides goes to Origami or SHuffle; insoluble at 37 goes to lower temperature or ArcticExpress; all-or-none induction killing cells goes to Tuner.', cn: '考试是从症状问起的：蛋白被降解→BL21；表达差且有截短→Rosetta 或密码子优化；需要胞质二硫键→Origami 或 SHuffle；37 度不可溶→降温或 ArcticExpress；诱导全有全无且细胞死亡→Tuner。' }
  ],
  beyondPoints: [
    { term: 'Why deleting lac permease makes induction tunable', en: 'In a normal strain LacY actively pumps IPTG in. The moment a cell starts importing IPTG it induces lacY further and imports faster still — a positive feedback loop. The result is all-or-none: in a partially induced culture some cells are fully on and others completely off, and lowering IPTG changes how many cells switch on, not how much each one expresses.', cn: '正常菌株里 LacY 主动把 IPTG 泵进细胞。一旦某个细胞开始输入 IPTG，就会进一步诱导 lacY，输入得更快——这是正反馈回路。结果就是全有全无：部分诱导的培养物里有些细胞完全开启、有些完全关闭，降低 IPTG 浓度改变的是「有多少细胞被打开」，而不是「每个细胞表达多少」。' },
    { term: 'What the deletion achieves', en: 'Without lacY, IPTG enters only by passive diffusion, which is proportional to the external concentration. Every cell then sees the same internal concentration, giving homogeneous, dose-dependent, genuinely tunable induction — exactly what you want when slowing synthesis down to improve folding.', cn: '没有 lacY，IPTG 只能靠被动扩散进入，而扩散量与外部浓度成正比。于是每个细胞看到的内部浓度都一样，得到均一的、剂量依赖的、真正可调的诱导——这正是你想放慢合成速度来改善折叠时需要的。' }
  ],
  terms: [
    { en: 'Lon protease', cn: 'Lon 蛋白酶', def_en: 'An E. coli cytoplasmic protease that degrades abnormal and unfolded proteins. Deleted in BL21, which is why that strain protects recombinant product.', def_cn: '大肠杆菌的胞质蛋白酶，降解异常和未折叠的蛋白。BL21 里被敲除，这就是该菌株能保护重组产物的原因。' },
    { en: 'lac permease (LacY)', cn: '乳糖透过酶', def_en: 'The membrane transporter that actively imports lactose and IPTG. Its positive feedback on its own expression is what makes wild-type induction all-or-none.', def_cn: '主动输入乳糖和 IPTG 的膜转运蛋白。它对自身表达的正反馈正是野生型诱导呈全有全无的原因。' },
    { en: 'Chaperonin', cn: '伴侣蛋白', def_en: 'A folding machine such as GroEL/GroES or the cold-adapted Cpn10/Cpn60, which provides a protected chamber in which a substrate can fold.', def_cn: '折叠机器，如 GroEL/GroES 或耐冷的 Cpn10/Cpn60，为底物提供一个受保护的折叠腔室。' },
    { en: 'Oxidising cytoplasm', cn: '氧化性胞质', def_en: 'The trxB/gor double-mutant state of Origami and SHuffle strains, in which the normally reducing cytoplasm permits disulfide bond formation.', def_cn: 'Origami 和 SHuffle 菌株的 trxB/gor 双突变状态，使本来还原性的胞质允许二硫键形成。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Your eukaryotic gene expresses poorly and you see truncated products on the gel. Which strain?',
      q_cn: '你的真核基因表达很差，胶上看到截短产物。用哪个菌株？',
      options: ['BL21(DE3)', 'Rosetta(DE3)', 'Origami', 'BL21 Star(DE3)'],
      answer: 1,
      optionNotes: {
        0: { en: 'Truncated bands look like proteolysis, which is what BL21 addresses with its lon and ompT deletions — but those act on protein that has already been made. Here the chain never finishes: the ribosome stalls at codons E. coli uses rarely, so the fix has to supply the missing tRNAs.', cn: '截短的条带看着像被蛋白酶切了，而 BL21 靠敲掉 lon 和 ompT 处理的正是降解——但那作用在已经合成好的蛋白上。这里的链根本没合成完：ribosome 停在 E. coli 很少用的密码子上，所以解决办法必须是补上缺的 tRNA。' }
      },
      why_en: 'Truncation plus poor expression from a eukaryotic gene is the signature of codon bias — the ribosome stalls at rare codons. Rosetta supplies the missing tRNAs. Codon-optimising the gene is the alternative fix.',
      why_cn: '真核基因表达差加上截短产物是密码子偏好的典型特征——核糖体在稀有密码子处停滞。Rosetta 提供缺失的 tRNA。另一个办法是对基因做密码子优化。' },
    { type: 'mcq',
      q_en: 'Why does deleting lacY make IPTG induction tunable?',
      q_cn: '为什么敲除 lacY 能让 IPTG 诱导变得可调？',
      options: ['It slows transcription of the gene so expression never spikes', 'IPTG then enters only by passive diffusion, so all cells see the same level', 'It abolishes LacI repression at lacUV5, so the polymerase gene is on all the time', 'It prevents the cell from hydrolysing IPTG during induction'],
      answer: 1,
      optionRefs: { 2: '2-8', 3: '2-9' },
      why_en: 'With LacY present, importing IPTG induces more LacY, a positive feedback that makes induction all-or-none across the culture. Passive diffusion has no feedback, so induction becomes homogeneous and dose-dependent.',
      why_cn: '有 LacY 时，输入 IPTG 会诱导更多 LacY，这个正反馈让整个培养物的诱导呈全有全无。被动扩散没有反馈，所以诱导变得均一且剂量依赖。' },
    { type: 'mcq',
      q_en: 'Which pair of gene mutations creates an oxidising cytoplasm?',
      q_cn: '哪一对基因突变造就了氧化性的胞质？',
      options: ['lon and ompT', 'trxB and gor', 'lacY and lacZ', 'rne and cpn60'],
      answer: 1,
      optionNotes: {
        0: { en: 'The right two genes attached to the wrong strain: lon and ompT are the protease deletions that define BL21, and they change how fast your product is degraded, not the redox state of the cytoplasm. The redox pair is trxB and gor, the two reductases that actively keep the cytoplasm reduced.', cn: '基因没记错，但配错了菌株：lon 和 ompT 是 BL21 的两个蛋白酶缺失，改变的是产物被降解的速度，不是胞质的氧化还原状态。管氧化还原的是 trxB 和 gor 这两个主动维持还原态的还原酶。' }
      },
      why_en: 'trxB encodes thioredoxin reductase and gor encodes glutathione reductase. These are the two systems that actively maintain a reducing cytoplasm, so knocking both out allows disulfide bonds to form. This is the Origami/SHuffle genotype.',
      why_cn: 'trxB 编码硫氧还蛋白还原酶，gor 编码谷胱甘肽还原酶。这两套系统主动维持胞质的还原环境，把两者都敲掉就允许二硫键形成。这就是 Origami/SHuffle 的基因型。' },
    { type: 'short',
      q_en: 'Name three E. coli strains and the exact problem each one solves.',
      q_cn: '说出三个大肠杆菌菌株，以及各自确切解决的问题。',
      accept: ['BL21', 'Rosetta', 'Origami', 'SHuffle', 'ArcticExpress', 'Tuner', 'protease', 'rare codon', 'disulfide'],
      answer_en: 'BL21(DE3) lacks the Lon and OmpT proteases, so it solves degradation of the recombinant product. Rosetta(DE3) supplies tRNAs for rare codons such as AGG, AGA and AUA, so it solves codon bias in eukaryotic genes. Origami and SHuffle carry trxB and gor mutations that make the cytoplasm oxidising, so they solve the inability to form disulfide bonds in the cytoplasm. ArcticExpress and Tuner would also be acceptable, for folding at low temperature and for graded induction respectively.',
      answer_cn: 'BL21(DE3) 缺失 Lon 和 OmpT 蛋白酶，解决重组产物被降解的问题。Rosetta(DE3) 提供 AGG、AGA、AUA 等稀有密码子的 tRNA，解决真核基因的密码子偏好问题。Origami 和 SHuffle 携带 trxB 和 gor 突变使胞质呈氧化性，解决胞质中无法形成二硫键的问题。ArcticExpress 和 Tuner 也可以算，分别解决低温折叠和渐变诱导。' }
  ],
  oral: {
    q_en: 'What specialised E. coli strains exist, and how would you pick one?',
    q_cn: '有哪些特化的大肠杆菌菌株？你会怎么挑？',
    model_en: 'The useful way to hold this is as problem to solution rather than as a list of strains, because in practice you arrive with a symptom. If the product is being degraded, BL21(DE3), which lacks the Lon and OmpT proteases — and Lon is specifically the cytoplasmic protease that targets abnormal and unfolded protein, so it is exactly the one you want gone. If a eukaryotic gene expresses poorly and gives truncations, that is codon bias and the answer is Rosetta(DE3), which supplies tRNAs for the rare codons AGG, AGA, AUA, CUA, CCC and GGA; codon-optimising the gene achieves the same thing. If the protein needs disulfide bonds but you want it in the cytoplasm, Origami or SHuffle, which carry trxB and gor mutations knocking out thioredoxin reductase and glutathione reductase, the two systems that actively maintain a reducing cytoplasm. If it is insoluble at thirty-seven degrees, lower the temperature, and use ArcticExpress if you need to go to ten or sixteen, since it co-expresses cold-adapted Cpn10 and Cpn60 chaperonins. If induction is all-or-none and the cells are dying, Tuner, which lacks lac permease. That last one is worth explaining: with LacY present, importing IPTG induces more LacY, a positive feedback that makes the culture all-or-none, so lowering IPTG changes how many cells switch on rather than how much each expresses. Without LacY, IPTG enters only by passive diffusion in proportion to the external concentration, so every cell sees the same internal level and induction is genuinely graded. And BL21 Star carries an RNase E mutation that improves mRNA stability and therefore yield.',
    checklist: ['Learn as problem to solution, not as a strain list', 'Degradation, so BL21(DE3), Lon and OmpT deleted', 'Codon bias and truncations, so Rosetta(DE3), rare-codon tRNAs', 'Cytoplasmic disulfides, so Origami/SHuffle, trxB and gor', 'Insoluble at 37, so lower temperature or ArcticExpress, Cpn10/Cpn60', 'All-or-none induction, so Tuner, lacY deleted', 'Low yield from unstable mRNA, so BL21 Star, RNase E mutation', 'LacY mechanism: import induces more import, positive feedback, all-or-none', 'Without LacY: passive diffusion, homogeneous dose-dependent induction']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Your protein appears on a gel at the right size but is heavily degraded by the time you finish purification. Which strain addresses this directly?',
      q_cn: '你的蛋白在胶上大小正确，但纯化结束时已经严重降解。哪种菌株直接针对这个问题？',
      options: ['Rosetta(DE3), the strain for rare codon problems', 'BL21(DE3), which lacks the Lon and OmpT proteases', 'ArcticExpress(DE3), the strain for folding at low temperature', 'Tuner(DE3), the strain for graded induction across the culture'],
      answer: 1,
      why_en: 'BL21 is protease-deficient, and Lon in particular is the cytoplasmic protease that targets abnormal and unfolded protein — exactly the population an overexpressed recombinant belongs to. Rosetta fixes rare codons, ArcticExpress fixes folding at low temperature, Tuner fixes induction homogeneity; none of those is a degradation problem.',
      why_cn: 'BL21 缺乏蛋白酶，尤其是 Lon——那正是靶向异常和未折叠蛋白的胞质蛋白酶，而过表达的重组蛋白恰恰属于这一类。Rosetta 解决稀有密码子，ArcticExpress 解决低温折叠，Tuner 解决诱导的均一性；这些都不是降解问题。' },
    { type: 'mcq',
      q_en: 'What do the trxB and gor mutations in Origami and SHuffle actually change?',
      q_cn: 'Origami 和 SHuffle 里的 trxB 与 gor 突变到底改变了什么？',
      options: ['They delete the disulfide isomerases that work in the periplasm', 'They remove the two reductases that keep the cytoplasm reducing', 'They slow translation, giving each chain more time to fold', 'They remove the Lon and OmpT proteases that degrade misfolded protein'],
      answer: 1,
      optionRefs: { 0: '2-13', 2: '2-12' },
      optionNotes: {
        3: { en: 'That describes BL21, whose lon and ompT deletions remove proteases. trxB and gor encode reductases, not proteases; deleting them changes the chemical environment the protein folds in and leaves degradation exactly as it was.', cn: '这说的是 BL21——它缺失的 lon 和 ompT 才是蛋白酶。trxB 和 gor 编码的是还原酶，不是蛋白酶；敲掉它们改变的是蛋白折叠时所处的化学环境，降解问题一点没动。' }
      },
      why_en: 'The cytoplasm is normally kept reducing by exactly those two pathways. Removing both flips the redox environment, which is what lets disulfides form in the cytoplasm instead of forcing you to export the protein to the periplasm. It is a change of environment, not of the protein or of the rate.',
      why_cn: '细胞质通常正是由这两条通路维持还原状态。同时敲掉两者就翻转了氧化还原环境，从而让二硫键能在细胞质里形成，而不必被迫把蛋白输出到周质空间。这改变的是环境，而不是蛋白本身或速率。' },
    { type: 'mcq',
      q_en: 'Why does deleting lacY in Tuner(DE3) give tunable rather than all-or-none induction?',
      q_cn: '为什么在 Tuner(DE3) 里删除 lacY 能得到可调而不是全有全无的诱导？',
      options: ['Because IPTG is hydrolysed more slowly in a strain that lacks LacY', 'Because IPTG uptake becomes passive diffusion, proportional to the outside level', 'Because the LacY protein binds and represses the T7 promoter until IPTG pulls it off', 'Because it lowers the basal expression of the T7 polymerase gene'],
      answer: 1,
      optionRefs: { 0: '2-9', 2: '2-8', 3: '2-8' },
      why_en: 'With the permease present, the first cells to import IPTG make more permease and import faster still, so the population splits into fully induced and uninduced cells. Passive diffusion has no such positive feedback: uptake tracks the external concentration, giving genuinely dose-dependent and homogeneous expression across the culture.',
      why_cn: '有透性酶存在时，最先摄入 IPTG 的细胞会合成更多透性酶、摄入得更快，于是整个群体分裂成完全诱导和完全未诱导两类。被动扩散没有这种正反馈：摄入量跟随外部浓度，因而在整个培养物中得到真正剂量依赖且均一的表达。' },
    { type: 'short',
      q_en: 'Examiners ask about strains backwards, from the symptom. Give the symptom-to-strain mapping.',
      q_cn: '考官问菌株是倒着问的，从症状出发。给出症状到菌株的对应关系。',
      accept: ['BL21', 'Rosetta', 'Origami', 'SHuffle', 'ArcticExpress', 'Tuner'],
      answer_en: 'Protein is degraded: BL21(DE3), which lacks Lon and OmpT, Lon being the cytoplasmic protease that targets abnormal and unfolded protein. Poor expression, or truncated products on the gel: Rosetta(DE3), which supplies tRNAs for the rare codons AGG, AGA, AUA, CUA, CCC and GGA, or alternatively codon-optimise the gene. The protein needs disulfide bonds and you want them in the cytoplasm: Origami or SHuffle, where trxB and gor mutations make the cytoplasm oxidising. The protein is insoluble and lowering the temperature is the obvious next thing to try: ArcticExpress(DE3), which co-expresses the cold-adapted chaperonins Cpn10 and Cpn60 so folding still works at ten to sixteen degrees. Induction is all-or-none across the culture and you want a graded response: Tuner(DE3), which lacks lac permease so IPTG enters only by passive diffusion. And low yield traced to unstable mRNA: BL21 Star(DE3), carrying an RNase E mutation. The pattern worth stating out loud is that each strain is one specific problem solved by one specific genetic change, so the right way to hold the list is as a fault-finding table rather than as six names.',
      answer_cn: '蛋白被降解：BL21(DE3)，缺失 Lon 和 OmpT，其中 Lon 正是靶向异常与未折叠蛋白的胞质蛋白酶。表达差、或胶上出现截短产物：Rosetta(DE3)，提供 AGG、AGA、AUA、CUA、CCC、GGA 这些稀有密码子的 tRNA；或者改为对基因做密码子优化。蛋白需要二硫键、且希望在细胞质里形成：Origami 或 SHuffle，trxB 与 gor 突变使细胞质呈氧化性。蛋白不溶、下一步顺理成章是降温：ArcticExpress(DE3)，共表达耐冷分子伴侣 Cpn10 和 Cpn60，使折叠在 10–16 度仍能进行。整个培养物的诱导是全有全无、而你想要分级响应：Tuner(DE3)，缺乏 lac 透性酶，IPTG 只能被动扩散进入。产量低且归因于 mRNA 不稳定：BL21 Star(DE3)，带 RNase E 突变。值得主动说出来的规律是：每个菌株都是「一个具体问题由一处具体遗传改造解决」，所以这份清单正确的记忆方式是一张排障表，而不是六个名字。'
    }
  ]
},

{
  id: '2-6',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.6',
  enTitle: 'Getting DNA into E. coli — chemical versus electroporation',
  cnTitle: '把 DNA 送进大肠杆菌——化转与电转',
  slides: 'L3 s.10',
  coverage: 'full',
  coverageNote: 'The two-row table is on the slide. The three specific situations that force electroporation are not, and they are the practical content — the efficiency numbers alone do not tell you when the difference matters.',
  summary: {
    en: 'Two methods, differing by about two to three orders of magnitude in efficiency. Chemical transformation by heat shock gives 10^6 to 10^9 cfu per microgram, needs no equipment and is fine for routine retransformation of an existing plasmid. Electroporation exceeds 10^9 and is required in the three situations where the lower efficiency would leave you with no colonies at all: transforming a ligation directly, transforming a large vector, and co-transforming two or more plasmids.',
    cn: '两种方法，效率相差约两到三个数量级。热激化学转化给出 10^6 到 10^9 cfu/µg，不需要设备，日常重新转化已有质粒完全够用。电转超过 10^9，在三种「效率不够就什么都长不出来」的情况下是必需的：直接转化连接产物、转化大载体、以及共转两个或以上的质粒。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '效率差两三个数量级，但**只有当你已经逼近「一个菌落都长不出来」时才要紧**。\n\n' +
            '三种必须用电转的情况有同一个共同点：**成功事件本来就很少**——连接产物、大质粒、共转两个质粒。',
  skipIt: '10⁶ / 10⁹ cfu/µg 这两个数字知道「差两三个数量级」就够，不必记准。老师在第 4 讲开头给第 3 讲做 RECAP 时，**没有提到转化方法**——这一节属于操作常识，不是那一讲要你掌握的知识点。',
  explain: [
    {
      q: '差两三个数量级，什么时候才真的要紧？',
      a: '**先把问题问对。**「电转是不是更好」这个问法本身有毛病，正确的问法是：**我这一次的成功事件，本来有多少个？**\n\n' +
         '算一笔账：日常重新转化一个已有的质粒，你手上是几百纳克纯质粒。就算效率只有 10⁶ cfu/µg，算下来也是**成千上万个菌落**。\n\n' +
         '而你只需要**一个**。\n\n' +
         '多出来的那三个数量级，全部浪费在「你根本挑不过来的菌落」上。这种情况下电转不但没好处，还多了准备电转杯、脱盐、可能打电弧的麻烦。\n\n' +
         '**所以效率是一个只在边缘才有意义的量。**离边缘远的时候，便宜的方法是真的够用，不是将就。\n\n' +
         '这个思路可以推广：**一个指标好十倍值不值得追求，取决于你现在离失败线有多远。**',
      takeaway: '问题不是「哪个效率高」，是「我这次的成功事件本来有几个」。不接近零，效率就不重要。'
    },
    {
      q: '那三种情况的共同点是什么？其中哪一个最狠？',
      a: '共同点是：**成功事件的数目本来就已经很小了**，再乘一个低效率就归零。\n\n' +
         '**转化连接产物**——连接本身效率就低，成功连上的分子在整管里只占一小部分。低效率叠在低效率上。\n\n' +
         '**转化大载体**——化学转化的效率在大约 10 kb 以上**断崖式下跌**。大分子进不去细胞壁上那些临时孔道。\n\n' +
         '**共转两个质粒**——**这一条最狠，值得单独想清楚。**\n\n' +
         '一个细胞同时拿到两个质粒的概率，是两个独立事件的**乘积**。假设单个质粒进入某个细胞的概率是千分之一，那么同时拿到两个就是**百万分之一**。\n\n' +
         '乘法比加法可怕得多：单转时「效率低一点」只是菌落少一点，共转时**效率低一点就是彻底没有**。\n\n' +
         '（共转在第 2-14 节共表达复合物时会真的用到，那里还要叠加不同 ORI 和不同抗性的要求——第 1-9 节讲过为什么。）',
      takeaway: '三种都是「成功事件本来就少」。共转最狠，因为两个概率是相乘的。'
    },
    {
      q: '为什么电转特别要求 DNA「仔细脱盐」？',
      a: '因为电转的原理就是**往细胞悬液上加一个高压脉冲**，靠电场在膜上瞬间开孔。\n\n' +
         '**盐让溶液导电。**溶液里离子一多，电流就直接从溶液里走掉了——不但脉冲没能有效作用在细胞膜上，还会**发热、打电弧（arcing）**，一声响，样品当场烧掉，什么都不剩。\n\n' +
         '**这条限制有一个很具体的后果：连接反应液不能直接拿去电转。**\n\n' +
         '连接体系里有大量缓冲盐和 ATP，全是离子。所以想电转连接产物，必须先透析、柱纯化或者乙醇沉淀。\n\n' +
         '这就有点讽刺了：**最需要电转的那种场合（转化连接产物），恰恰也是电转最麻烦的场合。**\n\n' +
         '而化学转化完全没有这个负担——直接吸 2 µL 连接液加进感受态细胞就行。**这才是它在日常工作里没有被淘汰的真正原因。**',
      takeaway: '盐会导电、发热、打电弧。所以连接液必须先脱盐——而那正是最想用电转的场合。'
    }
  ],
  points: [
    { term: 'Chemical transformation (heat shock)', en: 'Efficiency 10^6 to 10^9 cfu per microgram. Easy, requires no equipment, and is the routine method for retransforming a plasmid you already have.', cn: '效率 10^6 到 10^9 cfu/µg。简单、不需要设备，是重新转化已有质粒的日常方法。' },
    { term: 'Electroporation', en: 'Efficiency above 10^9 cfu per microgram. Requires an electroporator and carefully desalted DNA, but is the only option when efficiency is limiting.', cn: '效率超过 10^9 cfu/µg。需要电转仪和仔细脱盐的 DNA，但在效率成为瓶颈时是唯一选择。' },
    { term: 'Use electroporation after a ligation', en: 'Ligation efficiency is already low; stacking a low transformation efficiency on top of it leaves you with nothing on the plate.', cn: '连接效率本来就低；再叠加一个低转化效率，平板上就什么都不会长。' },
    { term: 'Use electroporation for large vectors', en: 'Chemical transformation efficiency falls off a cliff above roughly 10 kb.', cn: '超过约 10 kb 之后，化学转化的效率断崖式下降。' },
    { term: 'Use electroporation for co-transformation', en: 'The probability of a cell receiving both plasmids is the product of the individual efficiencies, so every step has to be efficient.', cn: '一个细胞同时拿到两个质粒的概率是各自效率的乘积，所以每一步都必须高效。' }
  ],
  beyondPoints: [
    { term: 'The general rule behind all three', en: 'Each situation is one where the number of successful events is already small — a rare ligation product, a poorly-taken-up large plasmid, or a coincidence of two independent events. Efficiency only matters when you are near the limit of getting any colonies at all; for routine work the cheaper method is genuinely adequate.', cn: '这三种情况的共同点是「成功事件的数量本来就很少」——罕见的连接产物、难以摄取的大质粒、或者两个独立事件的巧合。只有在「能不能长出菌落」的临界点上，效率才有意义；日常操作用便宜的方法完全够。' }
  ],
  terms: [
    { en: 'Transformation efficiency', cn: '转化效率', def_en: 'Colony-forming units obtained per microgram of DNA. The figure that decides whether a difficult construct yields any colonies at all.', def_cn: '每微克 DNA 得到的菌落形成单位数。这个数字决定了一个困难的构建体能否长出菌落。' },
    { en: 'Heat shock', cn: '热激', def_en: 'Chemical transformation: chemically competent cells are incubated with DNA on ice, briefly warmed, and returned to ice. No equipment required.', def_cn: '化学转化：化学感受态细胞与 DNA 在冰上孵育，短暂升温，再回到冰上。不需要任何设备。' },
    { en: 'Co-transformation', cn: '共转化', def_en: 'Introducing two or more different plasmids into the same cell simultaneously. The joint probability is the product of the individual efficiencies, so it demands the highest-efficiency method.', def_cn: '同时把两个或以上不同的质粒导入同一个细胞。联合概率是各自效率的乘积，所以要求用效率最高的方法。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which situation does NOT specifically require electroporation?',
      q_cn: '哪种情况**不**特别需要电转？',
      options: ['Transforming a ligation reaction directly', 'Transforming a vector larger than 10 kb', 'Retransforming a purified plasmid you already have', 'Co-transforming two plasmids into the same cell'],
      answer: 2,
      why_en: 'Retransforming an existing purified plasmid is the routine case where chemical transformation is entirely adequate — you have plenty of intact circular DNA and efficiency is not limiting.',
      why_cn: '重新转化一个已有的纯化质粒是日常情况，化学转化完全够用——你有大量完整的环状 DNA，效率不是瓶颈。' },
    { type: 'mcq',
      q_en: 'Roughly what transformation efficiency does chemical heat shock achieve?',
      q_cn: '热激化学转化的效率大约是多少？',
      options: ['10^2 to 10^4 cfu per microgram', '10^6 to 10^9 cfu per microgram', 'Above 10^12 cfu per microgram', 'It cannot be quantified'],
      answer: 1,
      why_en: '10^6 to 10^9 cfu per microgram, against above 10^9 for electroporation — a difference of roughly two to three orders of magnitude at the low end.',
      why_cn: '10^6 到 10^9 cfu/µg，而电转在 10^9 以上——在低端相差约两到三个数量级。' },
    { type: 'mcq',
      q_en: 'Why does co-transformation specifically demand high efficiency?',
      q_cn: '为什么共转化特别要求高效率？',
      options: ['The plasmids compete for the same origin', 'The joint probability is the product of the individual efficiencies', 'Electroporation selects for larger plasmids, so the smaller of the two is left outside the cell', 'Antibiotics reduce transformation efficiency'],
      answer: 1,
      optionRefs: { 0: '2-14' },
      why_en: 'A cell must take up both plasmids independently, so the probability of a double transformant is the product of the two efficiencies. Two mediocre efficiencies multiply into an unusable one.',
      why_cn: '一个细胞必须独立地摄取两个质粒，所以双转化子的概率是两个效率的乘积。两个中等效率相乘就变成不可用的效率。' },
    { type: 'short',
      q_en: 'You have just set up a ligation of a 12 kb vector and want colonies tomorrow. Which transformation method, and why do two separate reasons point the same way?',
      q_cn: '你刚做完一个 12 kb 载体的连接反应，希望明天就有菌落。用哪种转化方法？为什么有两个独立的理由指向同一个答案？',
      accept: ['electroporation', 'ligation', 'large vector', 'low efficiency'],
      answer_en: 'Electroporation, and two of the three classic indications apply at once. First, this is a ligation product rather than a purified plasmid, and ligation efficiency is already low, so stacking a low transformation efficiency on top would leave the plate empty. Second, the vector is 12 kb, and chemical transformation efficiency drops sharply above about 10 kb. Either reason alone would justify electroporation; together they make it the only sensible choice.',
      answer_cn: '用电转，而且三个经典指征里有两个同时成立。第一，这是连接产物而不是纯化质粒，连接效率本来就低，再叠加低转化效率平板上会是空的。第二，载体有 12 kb，而化学转化效率在约 10 kb 以上急剧下降。任何一个理由单独都足以选电转，两个加起来它就是唯一合理的选择。'
    }
  ],
  oral: {
    q_en: 'How do you get DNA into E. coli, and when does the choice of method matter?',
    q_cn: '怎么把 DNA 送进大肠杆菌？方法的选择什么时候才重要？',
    model_en: 'There are two methods. Chemical transformation by heat shock gives between ten to the six and ten to the nine colony-forming units per microgram, needs no equipment at all, and is the routine choice. Electroporation exceeds ten to the nine but needs an electroporator and carefully desalted DNA. The interesting question is not which is better but when the difference actually matters, and the answer is three specific situations. First, transforming a ligation directly: ligation efficiency is already low, so stacking a low transformation efficiency on top leaves you with an empty plate. Second, large vectors: chemical efficiency falls off a cliff above roughly ten kilobases. Third, co-transformation of two or more plasmids, because a cell has to take up both independently and the joint probability is the product of the individual efficiencies, so two mediocre efficiencies multiply into an unusable one. What unites all three is that the number of successful events is already small, so you are near the threshold of getting any colonies at all. For anything routine — retransforming a plasmid you already have in hand — chemical transformation is genuinely adequate and there is no reason to reach for the electroporator.',
    checklist: ['Two methods: chemical heat shock, and electroporation', 'Chemical: 10^6 to 10^9 cfu/µg, no equipment, routine use', 'Electroporation: above 10^9, needs desalted DNA', 'Indication 1: transforming a ligation directly', 'Indication 2: vectors above about 10 kb', 'Indication 3: co-transformation of two or more plasmids', 'Co-transformation multiplies probabilities, so both steps must be efficient', 'Unifying idea: efficiency matters only near the threshold of any colonies', 'Routine retransformation, so chemical is adequate']
  },
  bank: [
    { type: 'mcq',
      q_en: 'You have just set up a ligation and want colonies tomorrow. Which transformation method, and why?',
      q_cn: '你刚做完连接反应，希望明天就有菌落。用哪种转化方法，为什么？',
      options: ['Chemical, because the salt in a ligation mix damages competent cells at the heat shock', 'Electroporation, because the two low efficiencies multiply and leave no colonies', 'Either, since the ligation itself is the limiting step in both cases', 'Chemical, because electroporation shears the newly ligated plasmid'],
      answer: 1,
      optionNotes: {
        0: { en: 'The salt is real, but it is electroporation that it interferes with, not chemical transformation: a salty sample arcs in the cuvette. That is a sample-preparation problem, solved by drop dialysis or precipitation, not a reason to fall back on the lower-efficiency method.', cn: '盐是真问题，但它妨碍的是 electroporation 而不是化学转化——含盐样品会在 cuvette 里打火。这属于样品处理问题，用 drop dialysis 或沉淀脱盐就行，不构成退回低效率方法的理由。' }
      },
      why_en: 'The two efficiencies multiply. A ligation already yields few correct molecules, so pairing it with a method at ten to the sixth rather than above ten to the ninth can take you from a handful of colonies to none. The salt point is real but is a practicality — you desalt the ligation first — not a reason to choose the weaker method.',
      why_cn: '两个效率是相乘的。连接本身产生的正确分子就少，如果再配上 10^6 而不是 10^9 以上的方法，结果可能从「几个菌落」变成「一个都没有」。盐的问题确实存在，但那是个操作细节——先脱盐即可——而不是选择较弱方法的理由。' },
    { type: 'mcq',
      q_en: 'Above roughly what plasmid size does chemical transformation stop being adequate?',
      q_cn: '质粒大约超过多大之后，化学转化就不够用了？',
      options: ['2 kb', '5 kb', '10 kb', '50 kb'],
      answer: 2,
      why_en: 'Chemical transformation efficiency falls off sharply above about ten kilobases, so large constructs, BAC-scale vectors and multi-cassette plasmids are electroporation territory. It is one of the three standard situations where efficiency is the limiting factor rather than a nicety.',
      why_cn: '化学转化的效率在约 10 kb 以上急剧下降，所以大构建体、BAC 级载体和多表达盒质粒都属于电转化的范围。这是效率成为限制因素（而非锦上添花）的三种标准情形之一。' },
    { type: 'mcq',
      q_en: 'What do the three situations calling for electroporation have in common?',
      q_cn: '需要电转化的三种情形有什么共同点？',
      options: ['They all involve a gene product that is toxic to the host', 'In each, the number of successful events is already very small', 'They all involve DNA that has just come out of an enzymatic reaction', 'They all involve eukaryotic genes that E coli handles poorly'],
      answer: 1,
      why_en: 'A rare ligation product, a large plasmid that is poorly taken up, or a co-transformation requiring two independent events to coincide — in each case you are working at the low end of a probability, and multiplying by a weak transformation efficiency is what turns a small number into zero. When events are plentiful, chemical transformation is entirely adequate and much less work.',
      why_cn: '罕见的连接产物、摄取困难的大质粒、需要两个独立事件同时发生的共转化——每一种情形你都在概率的低端工作，再乘上一个弱的转化效率，就会把「很小的数」变成零。当事件本身很充裕时，化学转化完全够用，而且省事得多。' },
    { type: 'short',
      q_en: 'When is chemical transformation the right choice, and why is it still the routine method?',
      q_cn: '什么时候化学转化是正确的选择，为什么它仍然是常规方法？',
      accept: ['retransform', 'equipment', 'efficiency', 'adequate', 'desalt'],
      answer_en: 'Chemical transformation gives ten to the sixth up to ten to the ninth colony-forming units per microgram, needs no equipment beyond a water bath, and tolerates DNA that has not been carefully desalted. Electroporation gives above ten to the ninth but needs an electroporator and DNA that has been desalted, because residual salt causes arcing. So the question is never which is better in the abstract, it is whether efficiency is the limiting factor in this particular experiment. The routine case where it is not is retransforming a plasmid you already have in hand and have already sequenced: you have plenty of intact circular DNA, you only need a few colonies, and ten to the sixth is more than enough. That is most days in a lab, which is why chemical transformation is the default. You switch to electroporation in the three situations where the number of successful events is already small — straight after a ligation, with a vector above about ten kilobases, or for a co-transformation where two independent uptake events have to coincide. The unifying idea is that efficiency only matters when you are near the bottom of a probability distribution.',
      answer_cn: '化学转化的效率是每微克 10^6 到 10^9 个菌落形成单位，除了水浴不需要任何设备，而且对没有仔细脱盐的 DNA 也宽容。电转化的效率在 10^9 以上，但需要电转仪，而且 DNA 必须脱盐，否则残留的盐会打火。所以问题从来不是抽象地「哪个更好」，而是「在这个具体实验里，效率是不是限制因素」。最常见的「不是」的情形，就是重新转化一个你手上已有、已经测过序的质粒：完整的环状 DNA 有的是，你也只需要几个菌落，10^6 绰绰有余。实验室里大多数日子都是这种情况，这就是化学转化成为默认方法的原因。你会在成功事件本身就很少的三种情形下改用电转化——刚做完连接、载体大于约 10 kb、或者需要两个独立摄取事件同时发生的共转化。统一的思路是：只有当你处在概率分布的底部时，效率才真正重要。'
    }
  ]
},

{
  id: '2-7',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.7',
  enTitle: 'Promoters — strength and tightness are two independent axes',
  cnTitle: '启动子——强度和紧密性是两个独立的轴',
  slides: 'L3 s.11',
  coverage: 'full',
  coverageNote: 'Both promoter tables are on the slides, as is the closing sentence about balancing strength against control. Separating that balance into two named axes is the beyond-the-slides step, and it is what makes the toxic-protein question answerable.',
  summary: {
    en: 'Native promoters are lac (repressed by LacI, induced by IPTG, moderate and somewhat leaky), trp (repressed by tryptophan, tight) and araBAD (arabinose-induced, very tight with a graded response). The synthetic ones are tac and trc, hybrids of trp and lac that are stronger than native lac, and T7, which is very strong but needs T7 RNA polymerase. The key insight is that strength and tightness are separate properties that usually conflict: T7 is strongest but leaks, araBAD is tightest.',
    cn: '天然启动子有 lac（受 LacI 阻遏、IPTG 诱导、强度中等且有些渗漏）、trp（受色氨酸阻遏、调控紧密）和 araBAD（阿拉伯糖诱导、非常紧密且响应呈渐变）。合成启动子有 tac 和 trc（trp 与 lac 的杂合体，比天然 lac 强）以及 T7（非常强，但需要 T7 RNA 聚合酶）。关键在于：强度和紧密性是两个独立的性质，而且通常互相冲突——T7 最强但渗漏，araBAD 最紧。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.11', src: 'img/figures/L3_s11_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**强度和紧密性是两个轴，而且通常互相冲突**：T7 最强但渗漏，araBAD 最紧。\n\n' +
            '所以规则很干脆：**蛋白有毒 → araBAD（或无细胞）；蛋白无害要高产 → T7。**',
  skipIt: '哪个载体用哪个启动子（pGEX/pMAL/pTRC 用 tac 或 trc）不用死记。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **promoters**——**启动子这一节是被点名的**，要能讲清强度与紧密性这两个轴，但载体型号可以查。',
  explain: [
    {
      q: '「强度」和「紧密性」为什么必然是两个轴，而且常常打架？',
      a: '**因为它们问的是两个不同时刻的事。**\n\n' +
         '**强度**问：诱导**之后**，能表达多少。\n\n' +
         '**紧密性**问：诱导**之前**，漏出来多少。\n\n' +
         '一个是开着的时候多大声，一个是关着的时候多安静。逻辑上完全独立。\n\n' +
         '**那为什么实际上它们总是冲突？**因为让启动子变强的那些手段，**在没诱导的时候一样在起作用**：更贴近共识序列的 −35 / −10 区、更容易被聚合酶结合的构象——这些性质不会因为你还没加诱导剂就消失。\n\n' +
         '而阻遏蛋白**并不是把开关拧到零**。它做的是「大部分时间挡在那里」，是一个概率问题。总有那么一小部分时间它没结合上，聚合酶就趁机转录了一次。\n\n' +
         '**基座越高，那「一小部分时间」漏出来的绝对量就越大。**\n\n' +
         '所以强启动子几乎必然更漏。这不是设计得不好，是同一个物理性质的两个面。',
      takeaway: '阻遏是压低概率，不是拧到零。启动子越强，漏掉的那一点点绝对量就越大。'
    },
    {
      q: '渗漏对一个有毒蛋白，具体会造成什么？',
      a: '**它造成的是一种最容易误诊的失败：你以为表达失败了，其实是你选育出了一群不表达的细胞。**\n\n' +
         '过程是这样的：\n\n' +
         '你把质粒转进去，铺板过夜。这一夜里启动子一直在轻微渗漏，少量有毒蛋白在持续产生。**对绝大多数细胞来说，这已经足够要命了。**\n\n' +
         '能长成菌落的，只剩下那些**恰好逃掉了的**：把质粒整个丢了的、启动子突变了的、基因里出现移码的——统称 **escape mutant（逃逸突变体）**。\n\n' +
         '第二天你看到板子上菌落长得挺好，接种、培养、加 IPTG、跑胶——**什么都没有**。\n\n' +
         '**因为你培养的每一个细胞，都是靠「不表达这个蛋白」才活下来的。**\n\n' +
         '这个失败的可怕之处在于它每一步看起来都正常：转化成功了、菌长得好、诱导也做了。要靠测序质粒或者观察「诱导后菌完全不停止生长」这类间接线索才查得出来。\n\n' +
         '**所以对有毒蛋白，紧密性不是「更好」，是「唯一有效」。**这就是 araBAD 存在的理由，也是无细胞系统在这个场景下的杀手锏——**没有细胞可以被选育。**',
      takeaway: '渗漏会在你诱导之前就把会表达的细胞筛掉，留下一群逃逸突变体。菌长得好但什么都不表达。'
    },
    {
      q: 'tac 和 trc 是什么东西？为什么要造一个杂合启动子？',
      trace: {
        what: '**人工合成的杂合启动子**，把 **trp** 启动子和 **lac** 启动子各取一段拼起来。tac 和 trc 是两个非常接近的版本。',
        from: '动机很直接：天然 lac 启动子有一个好处（**IPTG 诱导，逻辑简单可控**）和一个缺点（**不够强**）。而 trp 启动子的核心区更强。**那就把强的那部分拿过来，把好用的调控逻辑留下。**这是典型的「取两个天然元件各自的长处」。',
        to: '结果是：**比天然 lac 强，同时保留 IPTG 诱导**。pGEX、pMAL、pTRC 这些常用载体用的就是它。\n\n**跟 T7 的关键区别值得记住**：tac / trc 是被**宿主自己的 RNA 聚合酶**转录的，不需要 T7 聚合酶。所以**任何 E. coli 菌株都能用，不必是 (DE3) 菌株**。这在实际工作里很实在——你不用为了换个载体去换菌株。',
        family: '排一下强度大致是：lac < tac / trc < T7。而紧密性大致反过来。araBAD 在这条线之外，靠的是另一套调控逻辑。'
      },
      takeaway: 'trp 的强度 + lac 的诱导逻辑。而且用宿主自己的聚合酶，所以不挑 (DE3) 菌株。'
    },
    {
      q: '为什么诱导用 IPTG，而不直接用乳糖？',
      a: '因为 IPTG 有一个乳糖没有的关键性质：**它不会被吃掉。**\n\n' +
         'IPTG 是乳糖的类似物，能像别构效应物一样让 LacI 阻遏蛋白失活，**但 β-半乳糖苷酶不能代谢它**。\n\n' +
         '后果是：**你加进去多少，整个诱导期间就一直是多少。**浓度恒定 → 诱导强度可控 → 实验可重复。\n\n' +
         '如果用乳糖，它一边诱导一边被细菌当营养吃掉，浓度不断下降，诱导强度也跟着衰减——**同样的操作，不同的批次结果可能差很多**。\n\n' +
         '**而下一节的自诱导培养基，恰恰是反过来利用这个性质的。**那里要的就是「某种糖被慢慢消耗掉」这件事，让诱导在细胞长到一定密度时自动发生。\n\n' +
         '所以这两节连起来读：**IPTG 的优点是浓度不变，自诱导的巧妙之处是让浓度按计划改变。**同一个性质，两种用法。',
      takeaway: 'IPTG 不能被代谢，所以浓度恒定、可重复。自诱导反过来利用「会被消耗」这件事。'
    }
  ],
  points: [
    { term: 'lac', en: 'Repressed by LacI, induced by IPTG or allolactose. Classic, moderate expression, and somewhat leaky.', cn: '受 LacI 阻遏，由 IPTG 或别乳糖诱导。经典，表达量中等，有些渗漏。' },
    { term: 'trp', en: 'Repressed by tryptophan, induced by indoleacrylic acid or tryptophan deficiency. Tight repression and tunable.', cn: '受色氨酸阻遏，由吲哚丙烯酸或色氨酸缺乏诱导。阻遏紧密，可调。' },
    { term: 'araBAD', en: 'Induced by arabinose. Very tight control, tunable, with a graded rather than all-or-none response.', cn: '由阿拉伯糖诱导。控制非常紧密，可调，而且是渐变响应而非全有全无。' },
    { term: 'tac and trc', en: 'Synthetic hybrids of the trp and lac promoters, induced by IPTG. Stronger than native lac. Used in pGEX, pMAL and pTRC vectors.', cn: 'trp 与 lac 启动子的合成杂合体，由 IPTG 诱导。比天然 lac 强。用于 pGEX、pMAL、pTRC 载体。' },
    { term: 'T7', en: 'From phage T7. Very strong, but requires T7 RNA polymerase to be supplied by the host, and is induced with IPTG. This is the pET system.', cn: '来自 T7 噬菌体。非常强，但需要宿主提供 T7 RNA 聚合酶，用 IPTG 诱导。这就是 pET 系统。' },
    { term: 'The stated trade-off', en: 'Choice of promoter balances expression strength against control: tighter regulation prevents cell stress, stronger promoters boost yield.', cn: '启动子的选择是在表达强度和调控之间权衡：调控越紧密越能避免细胞压力，启动子越强产量越高。' }
  ],
  beyondPoints: [
    { term: 'Two axes, not one', en: 'Strength is how much is expressed after induction, and T7 wins. Tightness is how little leaks before induction, and araBAD wins while lac is the leakiest. These are independent properties and they usually conflict.', cn: '强度是「诱导后能表达多少」，T7 最强。紧密性是「不诱导时漏多少」，araBAD 最紧、lac 最漏。这是两个独立的性质，而且通常互相冲突。' },
    { term: 'Why leakiness kills a toxic-protein experiment', en: 'T7 is extremely strong but leaks, so with a toxic product the cells are poisoned by basal expression before you ever add inducer. Either the culture never grows, or what grows are escape mutants that have lost or mutated the plasmid.', cn: 'T7 极强但有渗漏，所以对毒性产物来说，还没加诱导剂细胞就已经被基础表达毒死了。结果要么培养物根本长不起来，要么长出来的都是丢失或突变了质粒的逃逸菌。' },
    { term: 'The practical rule', en: 'Toxic protein means araBAD, the tightest, or cell-free where toxicity is meaningless. Very high yield with a harmless protein means T7.', cn: '毒性蛋白就选 araBAD（最紧），或者干脆用无细胞体系（那里毒性无从谈起）。无毒蛋白要极高产量就选 T7。' }
  ],
  terms: [
    { en: 'Leakiness (basal expression)', cn: '渗漏（基础表达）', def_en: 'Expression occurring before any inducer is added. Harmless for most targets, fatal for a toxic one, because the cells are poisoned during growth.', def_cn: '在加入诱导剂之前就发生的表达。对多数目标蛋白无害，但对毒性蛋白是致命的，因为细胞在生长阶段就被毒害了。' },
    { en: 'Promoter tightness', cn: '启动子紧密性', def_en: 'How completely a promoter is repressed in the uninduced state. araBAD is the tightest of those covered; lac is the leakiest.', def_cn: '未诱导状态下启动子被阻遏得有多彻底。所讲的启动子中 araBAD 最紧，lac 最漏。' },
    { en: 'Graded response', cn: '渐变响应', def_en: 'Expression that scales smoothly with inducer concentration across the whole population, as opposed to an all-or-none switch. A property of araBAD and of Tuner cells.', def_cn: '整个群体的表达量随诱导剂浓度平滑变化，而不是全有全无的开关。araBAD 和 Tuner 细胞都有这个性质。' },
    { en: 'pET system', cn: 'pET 系统', def_en: 'The most widely used E. coli expression vector family, placing the gene of interest under a T7 promoter with LacI repression, used with a DE3 lysogen host.', def_cn: '使用最广泛的大肠杆菌表达载体系列，把目的基因置于 T7 启动子之下并加 LacI 阻遏，配合 DE3 溶原宿主使用。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which promoter offers the tightest control, and which the highest strength?',
      q_cn: '哪个启动子调控最紧密？哪个强度最高？',
      options: ['lac tightest, araBAD strongest', 'araBAD tightest, T7 strongest', 'T7 tightest, tac strongest', 'trp tightest, lac strongest'],
      answer: 1,
      optionNotes: {
        0: { en: 'Both halves are attached to the wrong promoter. lac is the leaky one — it is the promoter basal expression is usually measured against — and araBAD is the tight one, chosen for control rather than for output.', cn: '两半都套错了启动子。lac 恰恰是漏的那个，基础表达一般就是拿它做参照；araBAD 才是紧的那个，选它是为了控制而不是为了产量。' }
      },
      why_en: 'araBAD gives very tight control with a graded response; T7 is the strongest but is leaky. They sit at opposite ends of two different axes, which is exactly why the choice is a trade-off.',
      why_cn: 'araBAD 控制非常紧密且响应渐变；T7 最强但有渗漏。它们位于两条不同轴的两端，这正是为什么选择是一种权衡。' },
    { type: 'mcq',
      q_en: 'Your protein is toxic to E. coli. Why is a T7/pET vector a poor first choice?',
      q_cn: '你的蛋白对大肠杆菌有毒。为什么 T7/pET 载体不是好的首选？',
      options: ['T7 polymerase cannot transcribe genes whose products are toxic to the host cell', 'T7 is leaky, so basal expression poisons the cells before induction', 'T7 requires arabinose which inhibits growth', 'T7 gives too low a yield to be worth using for a difficult protein'],
      answer: 1,
      optionNotes: {
        2: { en: 'Arabinose belongs to araBAD, the other promoter in this comparison; a T7/pET system is induced with IPTG. And the problem with a toxic protein is expression that happens before you add any inducer at all, whichever inducer that is.', cn: 'arabinose 是 araBAD 的诱导物，是这道题里的另一个启动子；T7/pET 系统用 IPTG 诱导。而毒性蛋白的问题出在你还没加任何诱导物之前就已经发生的表达，跟用哪种诱导物无关。' }
      },
      why_en: 'Leakiness means some product is made during growth. With a toxic product the culture either fails to grow or is overtaken by escape mutants that have lost or mutated the plasmid. Tightness, not strength, is the property that matters here.',
      why_cn: '渗漏意味着生长期间就有产物生成。对毒性产物来说，培养物要么长不起来，要么被丢失或突变了质粒的逃逸菌占据。这里重要的是紧密性而不是强度。' },
    { type: 'mcq',
      q_en: 'The tac and trc promoters are hybrids of which two native promoters?',
      q_cn: 'tac 和 trc 启动子是哪两个天然启动子的杂合体？',
      options: ['lac and araBAD', 'trp and lac', 'T7 and lac', 'trp and araBAD'],
      answer: 1,
      optionNotes: {
        2: { en: 'There is a real element that fuses those two — the T7lac promoter in many pET vectors, a T7 promoter with a lac operator inserted behind it — but that is not tac. tac is a promoter for the host polymerase, built from the trp minus-35 region and the lac minus-10 region.', cn: '确实存在把这两者拼起来的元件——很多 pET 载体上的 T7lac promoter，就是 T7 promoter 后面插一个 lac operator——但那不是 tac。tac 是给宿主 polymerase 用的启动子，由 trp 的 minus-35 区加 lac 的 minus-10 区拼成。' }
      },
      why_en: 'They combine elements of the trp and lac promoters, are induced by IPTG, and are stronger than native lac. They appear in the pGEX, pMAL and pTRC vector families.',
      why_cn: '它们结合了 trp 和 lac 启动子的元件，由 IPTG 诱导，比天然 lac 强。出现在 pGEX、pMAL、pTRC 系列载体中。' },
    { type: 'short',
      q_en: 'Explain why promoter strength and promoter tightness must be considered separately.',
      q_cn: '解释为什么启动子的强度和紧密性必须分开考虑。',
      accept: ['strength', 'tightness', 'leaky', 'toxic', 'basal'],
      answer_en: 'Strength is how much protein you get after induction, and tightness is how little you get before it. They are independent properties and they usually conflict: T7 is the strongest promoter available but it leaks, while araBAD is the tightest but not the strongest. Which one you optimise for depends entirely on the protein. For a harmless target you want strength and leakiness costs nothing. For a toxic target leakiness is fatal, because the cells are poisoned during growth and you either get no culture or a culture of escape mutants, so you must choose tightness even though it costs yield.',
      answer_cn: '强度是「诱导后能得到多少蛋白」，紧密性是「诱导前漏出多少」。这是两个独立的性质，而且通常冲突：T7 是最强的启动子但会渗漏，araBAD 最紧但不是最强。优化哪一个完全取决于蛋白本身。对无毒的目标你要的是强度，渗漏没有代价。对毒性目标渗漏是致命的，细胞在生长期就被毒害，结果要么没有培养物要么全是逃逸菌，所以哪怕牺牲产量也必须选紧密性。'
    }
  ],
  oral: {
    q_en: 'What promoters are available for E. coli expression, and how do you choose between them?',
    q_cn: '大肠杆菌表达可以用哪些启动子？你怎么在它们之间选择？',
    model_en: 'The native promoters are lac, repressed by LacI and induced with IPTG or allolactose, giving moderate expression but somewhat leaky; trp, repressed by tryptophan and tightly controlled; and araBAD, induced by arabinose, which gives very tight control and a graded response. The synthetic ones are tac and trc, hybrids of trp and lac that are stronger than native lac and appear in the pGEX and pMAL vectors, and T7 from phage T7, which is very strong but requires the host to supply T7 RNA polymerase — that is the pET system. The point I would want to make is that choosing between them means thinking about two independent axes, not one. Strength is how much you express after induction, and T7 wins outright. Tightness is how little leaks before induction, and there araBAD wins while lac is the leakiest. These usually conflict, and which matters depends on the protein. For an ordinary target, strength is what you want and leakiness costs nothing. For a toxic product, leakiness is fatal: with T7 the cells are poisoned by basal expression before you ever add inducer, so either the culture never grows or what grows is a population of escape mutants that have dropped or mutated the plasmid. So a toxic protein pushes you to araBAD for its tightness, or out of living cells altogether into a cell-free system, where toxicity has no meaning because there is nothing alive to poison.',
    checklist: ['Native: lac (IPTG, moderate, leaky), trp (tight), araBAD (very tight, graded)', 'Synthetic: tac/trc (trp+lac hybrid, stronger than lac), T7 (very strong, pET)', 'T7 needs the host to supply T7 RNA polymerase', 'Two independent axes: strength and tightness', 'Strength: T7 wins. Tightness: araBAD wins, lac is leakiest', 'The two axes usually conflict', 'Harmless protein, so choose strength, leakiness costs nothing', 'Toxic protein, so leakiness is fatal: poisoning before induction, escape mutants', 'Toxic protein answer: araBAD, or cell-free']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Strength and tightness are two independent axes. Which promoter wins each?',
      q_cn: '强度和紧密性是两个独立的轴。哪个启动子各自胜出？',
      options: ['T7 is strongest and also tightest', 'T7 is strongest, araBAD is tightest, and lac is the leakiest', 'araBAD is strongest, since arabinose gives the highest yields, and T7 is tightest, since its polymerase appears only after induction', 'tac is strongest, trp is tightest'],
      answer: 1,
      optionNotes: {
        0: { en: 'This is the conflation the whole node exists to break: strength and tightness are separate properties and usually pull against each other. The very features that make T7 strong — a fast dedicated polymerase with nothing to read but your gene — are what make a trace of leaked polymerase so costly.', cn: '这正是这一节要拆开的混淆：强度和紧密度是两个独立性质，而且通常互相拉扯。让 T7 变强的那些特点——一个只有你这个基因可读的专用快速 polymerase——同时也让漏出来的一点点聚合酶代价很大。' }
      },
      why_en: 'Strength is how much protein you get after induction, and T7 wins outright because the polymerase is roughly eight times faster than the host enzyme and has a dedicated promoter. Tightness is how little leaks before induction, and araBAD wins. They are separate properties and usually pull in opposite directions, which is exactly why the slide frames the choice as a balance.',
      why_cn: '强度是诱导之后能拿到多少蛋白，T7 完胜，因为它的聚合酶比宿主酶快约八倍，还配有专属启动子。紧密性是诱导之前漏多少，araBAD 胜出。这是两个彼此独立的性质，而且通常朝相反方向拉扯，这正是幻灯片把选择表述为一种平衡的原因。' },
    { type: 'mcq',
      q_en: 'Your gene product kills the host before you can induce. Which promoter, and what is the fallback?',
      q_cn: '你的基因产物在诱导之前就杀死了宿主。选哪个启动子，退路是什么？',
      options: ['T7, with a weakened ribosome binding site as the fallback', 'araBAD, with cell-free expression as the fallback', 'tac, with a lower induction temperature as the fallback', 'lac, with a richer growth medium as the fallback'],
      answer: 1,
      optionRefs: { 2: '2-12' },
      why_en: 'If cells are dying before induction the problem is leaky basal expression, so you need the tightest promoter available, which is araBAD — it also gives a graded rather than all-or-none response to arabinose. If even that is not tight enough, cell-free removes the viability constraint entirely because there is no cell to kill.',
      why_cn: '如果细胞在诱导之前就死了，问题在于渗漏的基础表达，所以你需要现有最紧密的启动子，也就是 araBAD——它对阿拉伯糖还是分级响应而不是全有全无。如果连它都不够紧，无细胞系统就彻底取消了活性约束，因为根本没有细胞可杀。' },
    { type: 'mcq',
      q_en: 'What are tac and trc, and where do you meet them?',
      q_cn: 'tac 和 trc 是什么，你会在哪里遇到它们？',
      options: ['Natural phage promoters from T3 and T5, requiring a phage polymerase', 'Synthetic trp-lac hybrids, met in pGEX, pMAL and pTRC vectors', 'Arabinose-inducible variants of araBAD, met in the pBAD vectors', 'Constitutive promoters that need no inducer, used for stable expression'],
      answer: 1,
      why_en: 'They combine the strong trp minus-35 region with the lac minus-10 and lac operator, so they are stronger than native lac while still being IPTG-inducible through LacI. Recognising the vector names is worth marks: pGEX is the GST fusion series, pMAL the MBP series.',
      why_cn: '它们把强的 trp −35 区与 lac 的 −10 区和 lac 操纵基因组合起来，因此比天然 lac 更强，同时仍可通过 LacI 用 IPTG 诱导。认得这几个载体名字是能得分的：pGEX 是 GST 融合系列，pMAL 是 MBP 系列。' },
    { type: 'short',
      q_en: 'Why does treating promoter choice as a single ranking from weak to strong lead you to the wrong answer?',
      q_cn: '为什么把启动子选择当成一条从弱到强的单一排序会给出错误答案？',
      accept: ['two axes', 'tight', 'leak', 'araBAD', 'T7', 'toxic'],
      answer_en: 'Because two different questions are being collapsed into one. Strength is how much protein you get after induction. Tightness is how little is made before induction. They are independent properties, and in practice they tend to pull against each other — the strongest promoter available, T7, is also one of the leakier arrangements, because it is two-layered and any basal expression of T7 polymerase gets amplified by the very same machinery it drives. If you hold only a single weak-to-strong ranking, you will answer "T7" to every question, and for a toxic protein that answer is not merely suboptimal, it is the reason your culture never grows. The correct move is to ask which axis the situation is testing. A harmless protein where you want maximum yield is a strength question and the answer is T7. A protein that poisons the host is a tightness question and the answer is araBAD, which gives very tight control and a graded response to arabinose, or cell-free if even that leaks too much. The slide states this as balancing expression strength against control: tighter regulation prevents cell stress, stronger promoters boost yield.',
      answer_cn: '因为两个不同的问题被压缩成了一个。强度是诱导之后能得到多少蛋白；紧密性是诱导之前会产生多少。这是两个独立的性质，而且实际上倾向于互相拉扯——现有最强的启动子 T7，同时也属于比较容易渗漏的架构，因为它是两层的，T7 聚合酶任何基础表达都会被它自己驱动的同一套机器放大。如果你脑子里只有一条从弱到强的排序，你会对每个问题都答「T7」，而对有毒蛋白来说这个答案不只是不够优，它就是你的培养物长不起来的原因。正确的做法是先问：这个情境在考哪一个轴。无害的蛋白、想要最大产量，这是强度问题，答案是 T7。毒害宿主的蛋白，这是紧密性问题，答案是 araBAD——它控制非常严格，对阿拉伯糖还是分级响应；如果连它都漏得太多，就用无细胞系统。幻灯片把这一点表述为在表达强度与控制之间取得平衡：更严格的调控防止细胞压力，更强的启动子提高产量。'
    }
  ]
},

{
  id: '2-8',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.8',
  enTitle: 'The T7 expression system — a two-step architecture',
  cnTitle: 'T7 表达系统——两级串联的架构',
  slides: 'L3 s.11–14',
  coverage: 'full',
  coverageNote: 'The slides spend four slides on this, which tells you it matters. The architecture is on them; the reason for the indirection — orthogonality plus amplification, and leakiness as its inevitable cost — is the beyond-the-slides material and is the standard oral question.',
  summary: {
    en: 'The most widely used inducible system, built on the natural lac logic. DE3 strains are lambda lysogens carrying the T7 RNA polymerase gene under a lacUV5 promoter; your plasmid carries the gene of interest under a T7 promoter with LacI repression. Adding IPTG expresses T7 polymerase, which then drives high-level expression of your gene. The indirection buys orthogonality and amplification, at the cost of leakiness.',
    cn: '使用最广泛的诱导型系统，建立在天然 lac 逻辑之上。DE3 菌株是携带 T7 RNA 聚合酶基因（置于 lacUV5 启动子下）的 λ 溶原菌；你的质粒携带置于 T7 启动子下、受 LacI 阻遏的目的基因。加入 IPTG 后表达 T7 聚合酶，后者再驱动目的基因的高水平表达。这个间接层换来的是正交性和放大，代价是渗漏。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.11', src: 'img/figures/L3_s11_1.webp' },
    { slide: 'L3 s.12', src: 'img/figures/L3_s12_1.webp' },
    { slide: 'L3 s.13', src: 'img/figures/L3_s13_1.webp' },
    { slide: 'L3 s.14', src: 'img/figures/L3_s14_1.webp' },
    { slide: 'L3 s.14', src: 'img/figures/L3_s14_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这是个**两级串联**的系统：IPTG 让宿主先做出 **T7 RNA 聚合酶**，那个酶再去转录你的基因。\n\n' +
            '好处是**正交 + 放大**（产物可达全细胞蛋白的 50%），代价是**渗漏被同一台机器放大了**。',
  skipIt: 'lacUV5 这个启动子名字、以及 pLysS 和 pLysE 谁强谁弱，用到时查即可。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **T7 system**——**这一节是被点名的**，必须能把两级结构和它的代价讲清楚。',
  explain: [
    {
      q: '为什么要绕这道弯？直接把基因放在 lac 启动子后面不就行了？',
      a: '**绕这道弯买到了两样东西，而且都不是小便宜。**\n\n' +
         '**一、正交性（orthogonality）。**\n\n' +
         'T7 RNA 聚合酶只读 T7 启动子；反过来，**E. coli 自己的 RNA 聚合酶完全读不了 T7 启动子**。\n\n' +
         '这意味着两条转录系统**互不干涉**：T7 聚合酶的全部产能都对着你那一个基因，宿主基因组上几千个启动子一个都抢不走它；而宿主自己的日常转录也不受影响。\n\n' +
         '如果直接用 lac 启动子，你的基因是在跟宿主上千个基因**抢同一台 RNA 聚合酶**。\n\n' +
         '**二、放大（amplification）。**\n\n' +
         'T7 RNA 聚合酶的转录速度大约是宿主酶的 **8 倍**。\n\n' +
         '两条叠在一起——一台快 8 倍的机器，而且百分之百为你工作——结果是你的蛋白可以占到**全细胞蛋白的 50%**。跑一张胶，你的目标带比所有宿主蛋白加起来还粗。\n\n' +
         '**这就是为什么值得绕弯。**用一层间接换来一台专属的、更快的转录机器。',
      takeaway: '正交（没人跟你抢这台酶）+ 放大（这台酶快 8 倍）。所以产物能到全细胞蛋白一半。'
    },
    {
      q: '菌株名字后面的「(DE3)」到底是什么意思？',
      trace: {
        what: '它表示这个菌株是 **λ 噬菌体 DE3 的溶原菌（lysogen）**——也就是说，它的**染色体上整合了一段 λ 来源的 DNA**，而那段 DNA 里带着 **T7 RNA 聚合酶基因**，置于 lacUV5 启动子的控制之下。',
        from: '为什么用溶原化的方式塞进染色体，而不是放在一个质粒上？因为**染色体上的东西稳定**：不会因为没加抗生素就丢失，不占用一个质粒和一个抗性标记，也不会跟你的表达质粒抢 ORI（第 1-9 节的不相容问题）。',
        to: '**最实用的一条推论：判断一个菌株能不能用 pET 载体，就看名字里有没有 (DE3)。**\n\n没有 (DE3) → 没有 T7 RNA 聚合酶 → **pET 质粒转进去也一个字都不表达**，因为没人能读 T7 启动子。\n\n这是最常见的低级错误之一：拿 DH5α（克隆菌株，不带 DE3）去做表达，然后困惑于为什么胶上什么都没有。',
        family: '所以上一节那张菌株表里，几乎每个都有**带 (DE3) 和不带**两个版本：**不带的用来克隆和保存质粒，带的用来表达**。BL21(DE3)、Rosetta(DE3)、Origami B(DE3)、ArcticExpress(DE3)、Tuner(DE3) 全是这个规律。'
      },
      takeaway: '(DE3) = 染色体上整合了 T7 聚合酶基因。没有它，pET 载体什么都不表达。'
    },
    {
      q: '为什么「两层结构」必然带来渗漏？',
      a: '因为**第一层漏出来的那一点点，会被第二层照原样放大。**\n\n' +
         '走一遍：lacUV5 启动子并没有被完全关死（上一节讲过，阻遏是概率问题）。所以即使不加 IPTG，细胞里也总有**少量 T7 RNA 聚合酶**被做出来。\n\n' +
         '**而 T7 聚合酶恰恰就是一台放大器。**几个分子就足以转录出可观的 mRNA——它快、它专一、它百分之百对着你的基因。\n\n' +
         '**于是「一点点渗漏」被乘上了同样的放大倍数。**这个系统强在哪里，就漏在哪里，用的是同一个机制。\n\n' +
         '**这就是 pLysS 和 pLysE 存在的理由。**它们编码 **T7 溶菌酶**，那是 T7 RNA 聚合酶的**天然抑制剂**——在第二层的入口再加一道闸，把漏过来的少量聚合酶按住。\n\n' +
         '两者的区别是溶菌酶的表达量：**压得越死，诱导后的产量也越低**。这又是一次强度与紧密性的取舍，只不过换到了另一个层面上。\n\n' +
         '**结论：T7 是有毒蛋白最差的选择之一**，因为它的优点和缺点是同一件事。',
      takeaway: 'T7 聚合酶是放大器，所以它把自己的基础表达也放大了。强和漏来自同一个机制。'
    },
    {
      q: '加进去一颗 IPTG，实际发生的顺序是什么？',
      a: '**关键在于：IPTG 在这里同时解开了两道锁，而且这两道锁在两个不同的 DNA 分子上。**\n\n' +
         '**第一道锁在染色体上。**LacI 压着 lacUV5 启动子，也就是压着 T7 RNA 聚合酶的基因。IPTG 让 LacI 失活 → **T7 聚合酶开始被合成**。\n\n' +
         '**第二道锁在你的质粒上。**T7 启动子旁边通常还放了一个 lac operator，同样被 LacI 压着。IPTG 让它松开 → **T7 聚合酶现在读得到你的基因了**。\n\n' +
         '**两道锁都开，转录才真正跑起来。**\n\n' +
         '这个「双锁」设计不是多此一举——它是为了**把渗漏再压低一层**：即使有少量 T7 聚合酶漏出来，质粒上那道锁还挡着。\n\n' +
         '一个很容易搞混的点：**LacI 管的主要不是你的基因，而是 T7 聚合酶这个开关。**很多人以为 IPTG 是「直接打开我的基因」，其实它打开的是**做那台机器的许可**。\n\n' +
         '（顺带把第 1-13 节串起来：那里 IPTG 诱导的是报告基因 lacZ-α。**同一个试剂，第三种角色**——每次看到 IPTG，先问「它在这里诱导谁」。）',
      takeaway: 'IPTG 同时松开染色体上和质粒上两道 LacI 锁。它开的是「做机器的许可」，不是你的基因本身。'
    }
  ],
  points: [
    { term: 'The natural lac logic it is built on', en: 'In high glucose, bacteria express the LacI repressor. In low glucose, allolactose allosterically inactivates LacI, the lac operon is activated, and lactose is metabolised.', cn: '高葡萄糖时细菌表达 LacI 阻遏蛋白。低葡萄糖时别乳糖以变构方式使 LacI 失活，lac 操纵子被激活，乳糖得以代谢。' },
    { term: 'DE3 strains', en: 'Lysogens of phage lambda carrying the T7 RNA polymerase gene under the control of the lacUV5 promoter. The "(DE3)" in a strain name means exactly this.', cn: 'λ 噬菌体的溶原菌，携带置于 lacUV5 启动子控制下的 T7 RNA 聚合酶基因。菌株名里的「(DE3)」指的就是这个。' },
    { term: 'Orthogonal recognition', en: 'T7 RNA polymerase recognises the T7 promoter, and only the T7 promoter.', cn: 'T7 RNA 聚合酶识别 T7 启动子，而且只识别 T7 启动子。' },
    { term: 'The expression plasmid', en: 'Carries the gene of interest under a T7 promoter, with LacI repression.', cn: '携带置于 T7 启动子下的目的基因，并受 LacI 阻遏。' },
    { term: 'What IPTG does', en: 'Adding IPTG, a lactose derivative, causes T7 polymerase to be expressed, which then drives high-level expression of your gene of interest.', cn: '加入 IPTG（一种乳糖衍生物）后 T7 聚合酶被表达，然后驱动目的基因的高水平表达。' },
    { term: 'The summary sentence', en: 'A two-step system: the host E. coli makes T7 RNA polymerase, and that polymerase drives high-level expression from the T7 promoter.', cn: '一个两步系统：宿主大肠杆菌制造 T7 RNA 聚合酶，该聚合酶再从 T7 启动子驱动高水平表达。' }
  ],
  beyondPoints: [
    { term: 'Orthogonality', en: 'T7 RNA polymerase reads only the T7 promoter, and E. coli\'s own RNA polymerase cannot read a T7 promoter at all. So the entire transcriptional output of the enzyme is aimed at your gene, and no housekeeping transcription competes for it.', cn: 'T7 RNA 聚合酶只读 T7 启动子，而大肠杆菌自己的 RNA 聚合酶完全读不了 T7 启动子。于是这个酶的全部转录产出都对准你的基因，没有任何管家基因的转录来竞争。' },
    { term: 'Amplification', en: 'T7 RNA polymerase is roughly eight times faster than the host enzyme. Combined with a dedicated promoter, your protein can reach fifty per cent of total cell protein.', cn: 'T7 RNA 聚合酶大约比宿主的酶快 8 倍。加上专用的启动子，你的蛋白可以达到细胞总蛋白的 50%。' },
    { term: 'The cost — leakiness', en: 'The system is two-layered, so any basal expression of T7 polymerase gets amplified by the very same machinery. That is why pLysS and pLysE plasmids exist, encoding T7 lysozyme as a natural T7-polymerase inhibitor, and why T7 is a poor choice for toxic proteins.', cn: '这个系统是两级的，所以 T7 聚合酶的任何基础表达都会被同一套机器放大。这就是 pLysS 和 pLysE 质粒存在的原因——它们编码 T7 溶菌酶作为 T7 聚合酶的天然抑制剂——也是 T7 不适合毒性蛋白的原因。' },
    { term: 'The one-sentence version', en: 'LacI controls the T7 polymerase switch, not your gene directly. IPTG relieves LacI repression of lacUV5, T7 polymerase is made, and it transcribes your gene from the T7 promoter. Two stages in series, which is why it is both very strong and leaky.', cn: 'LacI 管的是「T7 聚合酶」这个开关，不是直接管你的基因。IPTG 解除 LacI 对 lacUV5 的抑制，T7 聚合酶被合成，再去转录 T7 启动子下的目的基因。两级串联，所以又强又漏。' }
  ],
  terms: [
    { en: 'DE3 lysogen', cn: 'DE3 溶原菌', def_en: 'An E. coli strain carrying an integrated lambda prophage that encodes T7 RNA polymerase under the lacUV5 promoter. Required for any T7-based expression plasmid.', def_cn: '携带整合的 λ 原噬菌体（编码置于 lacUV5 启动子下的 T7 RNA 聚合酶）的大肠杆菌菌株。任何基于 T7 的表达质粒都需要它。' },
    { en: 'Orthogonality', cn: '正交性', def_en: 'The property that a component interacts only with its intended partner and not with the host system. T7 polymerase and the T7 promoter recognise each other and nothing else.', def_cn: '某个元件只与其预期的搭档相互作用、不与宿主系统交叉的性质。T7 聚合酶和 T7 启动子只互相识别，不识别其他任何东西。' },
    { en: 'pLysS / pLysE', cn: 'pLysS / pLysE 质粒', def_en: 'Plasmids encoding T7 lysozyme, a natural inhibitor of T7 RNA polymerase, used to suppress leaky basal expression in DE3 strains.', def_cn: '编码 T7 溶菌酶（T7 RNA 聚合酶的天然抑制剂）的质粒，用于抑制 DE3 菌株中的渗漏基础表达。' },
    { en: 'lacUV5 promoter', cn: 'lacUV5 启动子', def_en: 'A mutant lac promoter, less sensitive to catabolite repression, that drives T7 RNA polymerase in DE3 strains.', def_cn: '一个突变的 lac 启动子，对分解代谢物阻遏较不敏感，在 DE3 菌株中驱动 T7 RNA 聚合酶。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In a pET/DE3 system, what does LacI directly repress?',
      q_cn: '在 pET/DE3 系统中，LacI 直接阻遏的是什么？',
      options: ['Only your gene of interest, at the lac operator placed beside the T7 promoter', 'The T7 polymerase gene at lacUV5, and the T7 promoter on the plasmid', 'The site where the lambda prophage integrates into the chromosome', 'The host RNA polymerase, leaving only T7 polymerase active'],
      answer: 1,
      optionNotes: {
        0: { en: 'This drops the layer that makes the design work. If LacI only sat on your gene, the DE3 lysogen would be producing T7 polymerase the whole time; the primary switch is on the polymerase gene at lacUV5, and the operator on the plasmid is a second lock, not the only one.', cn: '这漏掉了让整个设计成立的那一层。如果 LacI 只压住你的基因，DE3 溶原菌就会一直在合成 T7 polymerase；主开关在 lacUV5 控制的聚合酶基因上，质粒上的 operator 只是第二道锁，不是唯一一道。' }
      },
      why_en: 'LacI acts on lacUV5 controlling the polymerase gene, and the expression plasmid also carries LacI repression. The essential point is that the primary switch is on the polymerase, not on your gene — the indirection is the whole design.',
      why_cn: 'LacI 作用于控制聚合酶基因的 lacUV5，同时表达质粒本身也带 LacI 阻遏。关键在于主开关是在聚合酶上而不是直接在你的基因上——这个间接层就是整个设计的核心。' },
    { type: 'mcq',
      q_en: 'What does orthogonality give the T7 system?',
      q_cn: '正交性给 T7 系统带来了什么？',
      options: ['Protection of the product from the host proteases Lon and OmpT', 'The polymerase transcribes only your gene and nothing else in the cell', 'Tighter repression before induction, so almost nothing is made until IPTG goes in', 'Insensitivity to rare codons in the gene being expressed'],
      answer: 1,
      optionRefs: { 3: '2-5' },
      optionNotes: {
        2: { en: 'Orthogonality is about specificity, not regulation, and here it makes the leak worse rather than better: the polymerase reads only your gene, so whatever trickle of it exists before induction is aimed entirely at your gene. Tightness comes from the repressor, not from the promoter being exclusive.', cn: 'Orthogonality 说的是专一性，不是调控；在这里它反而让渗漏更糟——polymerase 只读你这个基因，所以诱导前漏出来的那一点点全都对着你的基因。紧密度来自 repressor，不来自启动子的专用性。' }
      },
      why_en: 'T7 polymerase reads only the T7 promoter and host polymerase cannot read it at all, so the enzyme\'s entire output is aimed at your gene. Combined with its roughly eightfold speed advantage, the product can reach half of total cell protein.',
      why_cn: 'T7 聚合酶只读 T7 启动子，而宿主聚合酶完全读不了它，所以这个酶的全部产出都对准你的基因。加上它大约 8 倍的速度优势，产物可以达到细胞总蛋白的一半。' },
    { type: 'mcq',
      q_en: 'Why is the T7 system inherently leaky?',
      q_cn: '为什么 T7 系统天生就有渗漏？',
      options: ['IPTG in the medium is slowly hydrolysed, so control is lost over time', 'Trace T7 polymerase made before induction is amplified by the architecture', 'The host RNA polymerase reads the T7 promoter weakly on its own, with no T7 enzyme', 'LacI is degraded as the culture ages, so repression weakens over the growth curve'],
      answer: 1,
      optionRefs: { 0: '2-9' },
      optionNotes: {
        2: { en: 'If host polymerase could read the T7 promoter at all, even weakly, the system would not be orthogonal — and orthogonality is the reason it works. The leak enters one layer further up, as basal transcription of the polymerase gene from lacUV5, and the architecture then amplifies it.', cn: '如果宿主 polymerase 哪怕能弱弱地读 T7 promoter，这套系统就不 orthogonal 了，而 orthogonality 恰恰是它管用的原因。渗漏是从上一层进来的：lacUV5 对聚合酶基因的基础转录，然后被这个架构放大。' }
      },
      why_en: 'Leakiness is the price of the architecture. A small amount of polymerase made before induction is itself a powerful amplifier, so trace basal expression becomes significant product. pLysS/pLysE plasmids supply T7 lysozyme to suppress it.',
      why_cn: '渗漏是这个架构的代价。诱导前产生的少量聚合酶本身就是强力放大器，所以微量的基础表达会变成可观的产物。pLysS/pLysE 质粒提供 T7 溶菌酶来抑制它。' },
    { type: 'short',
      q_en: 'Explain the T7 system as a two-step architecture, and say what the indirection buys and what it costs.',
      q_cn: '把 T7 系统解释为两级架构，并说明这个间接层带来了什么、代价是什么。',
      accept: ['orthogonal', 'amplification', 'leaky', 'T7 polymerase', 'two-step'],
      answer_en: 'The host DE3 strain is a lambda lysogen carrying the T7 RNA polymerase gene under a lacUV5 promoter, and the expression plasmid carries your gene under a T7 promoter. IPTG relieves LacI repression, T7 polymerase is made, and that polymerase transcribes your gene. The indirection buys two things. Orthogonality: T7 polymerase reads only the T7 promoter and host polymerase cannot read it at all, so the enzyme\'s entire output goes to your gene with no competition. And amplification: T7 polymerase is about eight times faster than the host enzyme, so the product can reach fifty per cent of total cell protein. The cost is leakiness, because any basal polymerase expression is amplified by the same machinery, which is why pLysS and pLysE exist and why T7 is a poor choice for a toxic protein.',
      answer_cn: '宿主 DE3 菌株是 λ 溶原菌，携带置于 lacUV5 启动子下的 T7 RNA 聚合酶基因，而表达质粒携带置于 T7 启动子下的目的基因。IPTG 解除 LacI 阻遏，T7 聚合酶被合成，再由它转录你的基因。这个间接层换来两样东西。正交性：T7 聚合酶只读 T7 启动子，宿主聚合酶完全读不了，所以酶的全部产出都给你的基因，没有竞争。放大：T7 聚合酶比宿主的酶快约 8 倍，产物可达细胞总蛋白的 50%。代价是渗漏，因为任何基础的聚合酶表达都会被同一套机器放大——这就是 pLysS 和 pLysE 存在的原因，也是 T7 不适合毒性蛋白的原因。'
    }
  ],
  oral: {
    q_en: 'Explain the T7 expression system. Why is it built with an extra layer of indirection?',
    q_cn: '解释 T7 表达系统。为什么它要多加一层间接？',
    model_en: 'It is the most widely used inducible system, and it is built on the natural lac logic: in high glucose the cell expresses the LacI repressor, and in low glucose allolactose inactivates LacI allosterically so the lac operon switches on. The architecture has two layers. The host is a DE3 strain, a lambda lysogen carrying the T7 RNA polymerase gene under a lacUV5 promoter. The expression plasmid carries your gene of interest under a T7 promoter, also with LacI repression. You add IPTG, a non-hydrolysable lactose derivative, and T7 RNA polymerase is expressed; that polymerase then drives high-level expression of your gene. So LacI is controlling the polymerase switch, not your gene directly. The reason for the indirection is orthogonality plus amplification. Orthogonality: T7 RNA polymerase recognises only the T7 promoter, and E. coli\'s own RNA polymerase cannot read a T7 promoter at all, so the entire transcriptional output of the enzyme is aimed at your gene and no housekeeping transcription competes for it. Amplification: T7 polymerase is roughly eight times faster than the host enzyme, and combined with a dedicated promoter your protein can reach fifty per cent of total cell protein. The cost is that the system is two-layered and therefore leaky — any basal expression of the polymerase is amplified by the same machinery. That is why pLysS and pLysE plasmids exist, encoding T7 lysozyme as a natural inhibitor of the polymerase, and it is why T7 is a poor choice when the product is toxic.',
    checklist: ['Most widely used inducible system, built on natural lac logic', 'High glucose: LacI expressed. Low glucose: allolactose inactivates LacI', 'Layer 1: DE3 strain, lambda lysogen, T7 polymerase under lacUV5', 'Layer 2: plasmid, gene of interest under T7 promoter, LacI repressed', 'IPTG induces polymerase, polymerase transcribes your gene', 'LacI controls the polymerase switch, not the gene directly', 'Benefit 1 — orthogonality: only T7 pol reads T7 promoter, no competition', 'Benefit 2 — amplification: ~8x faster, product up to 50% of cell protein', 'Cost — leaky, because basal polymerase is self-amplifying', 'Hence pLysS/pLysE with T7 lysozyme; hence bad for toxic proteins']
  },
  bank: [
    { type: 'mcq',
      q_en: 'In the T7 system, what does LacI actually repress?',
      q_cn: '在 T7 系统里，LacI 实际上抑制的是什么？',
      options: ['Your gene of interest and nothing else in the whole system', 'The lacUV5 promoter driving T7 RNA polymerase in the chromosome', 'The lac operator just downstream of the T7 promoter on the plasmid, and nothing else', 'The lac permease gene, which is what turns the T7 polymerase on'],
      answer: 1,
      optionRefs: { 3: '2-5' },
      optionNotes: {
        2: { en: 'That layer does exist in T7lac vectors, but it is the downstream lock. Repressing only the plasmid would leave the host producing T7 polymerase continuously; the primary switch is lacUV5 in the chromosome, one step before your gene.', cn: '在 T7lac 载体里确实有这一层，但它是下游那道锁。只压住质粒的话，宿主还是会不停地生产 T7 polymerase；主开关是染色体上的 lacUV5，比你的基因早一步。' }
      },
      why_en: 'This is the sentence that makes the whole architecture click. LacI controls the polymerase switch, not your gene. IPTG relieves LacI repression of lacUV5, T7 polymerase is made, and that polymerase then transcribes your gene from the T7 promoter. Two stages in series. Most expression plasmids also carry lacI and a lac operator for a second layer, but the primary switch is upstream.',
      why_cn: '这句话能让整个架构一下子说通：LacI 控制的是聚合酶的开关，而不是你的基因。IPTG 解除 LacI 对 lacUV5 的抑制，T7 聚合酶被合成，然后由它从 T7 启动子转录你的基因。两级串联。多数表达质粒也带 lacI 和 lac 操纵基因作为第二层，但主开关在上游。' },
    { type: 'mcq',
      q_en: 'What does "(DE3)" in a strain name tell you?',
      q_cn: '菌株名字里的「(DE3)」告诉你什么？',
      options: ['That lon and ompT have been deleted, so the product is not degraded', 'That the strain carries the T7 RNA polymerase gene in a lambda prophage', 'That the strain carries a plasmid expressing T7 lysozyme to damp leakiness', 'That the cytoplasm has been made oxidising so disulfides can form'],
      answer: 1,
      optionRefs: { 0: '2-5', 3: '2-5' },
      optionNotes: {
        2: { en: 'That is pLysS or pLysE, and it does the opposite job: T7 lysozyme inhibits T7 polymerase in order to damp the leak. DE3 is the chromosomal lambda prophage that supplies the polymerase in the first place, so the two are combined rather than being the same thing.', cn: '那是 pLysS 或 pLysE，而且作用正好相反：T7 溶菌酶抑制 T7 polymerase，用来压住渗漏。DE3 是染色体上提供聚合酶的 lambda 前噬菌体，所以这两样是搭配使用，不是同一件事。' }
      },
      why_en: 'DE3 is the prophage that supplies the polymerase, and without it a pET plasmid produces nothing at all because there is no enzyme that recognises the T7 promoter. It is a property of the host, entirely separate from the protease deletions that BL21 contributes or the redox mutations Origami contributes.',
      why_cn: 'DE3 就是提供聚合酶的那个前噬菌体；没有它，pET 质粒什么都不会产生，因为没有任何酶能识别 T7 启动子。这是宿主的性质，与 BL21 带来的蛋白酶缺失或 Origami 带来的氧化还原突变完全无关。' },
    { type: 'mcq',
      q_en: 'Why does the two-layer architecture make leakiness worse rather than better?',
      q_cn: '为什么两层架构反而让渗漏更严重，而不是更轻？',
      options: ['Because LacI is a weak repressor that falls off the operator on its own', 'Because any basal expression of T7 polymerase is amplified by the very machinery it drives', 'Because the T7 promoter is also recognised by the host RNA polymerase, which transcribes the gene whatever LacI does', 'Because IPTG is present at low levels in rich media'],
      answer: 1,
      optionRefs: { 3: '2-9' },
      why_en: 'A few molecules of T7 polymerase made before induction are not a few molecules of your protein — each one transcribes your gene rapidly and repeatedly, so a small leak upstream becomes a large leak downstream. That amplification is exactly what pLysS and pLysE counter, by supplying T7 lysozyme as a natural inhibitor of T7 polymerase.',
      why_cn: '诱导之前产生的少数几个 T7 聚合酶分子，并不等于少数几个你的蛋白分子——每一个都会快速、反复地转录你的基因，所以上游的小渗漏在下游被放大成大渗漏。pLysS 和 pLysE 对抗的正是这种放大，办法是提供 T7 溶菌酶作为 T7 聚合酶的天然抑制剂。' },
    { type: 'short',
      q_en: 'Explain the T7 system as two stages in series, and say what each stage buys and costs.',
      q_cn: '把 T7 系统解释成两级串联，并说明每一级带来什么、代价是什么。',
      accept: ['lacUV5', 'DE3', 'orthogonal', 'amplif', 'pLysS', 'leak'],
      answer_en: 'Stage one is in the host chromosome. A DE3 strain is a lambda lysogen carrying the T7 RNA polymerase gene under the lacUV5 promoter, which LacI represses. Adding IPTG, a non-hydrolysable lactose analogue, relieves that repression and the cell starts making T7 RNA polymerase. Stage two is on the plasmid: your gene sits under a T7 promoter, and the newly made polymerase transcribes it. The crucial property linking them is orthogonality — T7 RNA polymerase recognises the T7 promoter and only the T7 promoter, and host RNA polymerase does not recognise it at all, so the two transcription systems do not interfere. What that architecture buys is amplification. T7 polymerase is roughly eight times faster than the host enzyme, and it is working on a dedicated promoter with no competition, so the protein can reach fifty per cent of total cell protein. What it costs is leakiness, and for the same structural reason. Because the system is two-layered, any basal expression of the polymerase before induction is amplified by the very machinery it drives — a handful of leaked polymerase molecules become a great deal of leaked protein. That is why pLysS and pLysE plasmids exist, encoding T7 lysozyme as a natural inhibitor of T7 polymerase to mop up that basal activity, and it is why the T7 system is a poor choice for a genuinely toxic product, where araBAD or cell-free is the right answer instead.',
      answer_cn: '第一级在宿主染色体上。DE3 菌株是携带 T7 RNA 聚合酶基因的 lambda 溶原菌，该基因受 lacUV5 启动子控制，而 lacUV5 被 LacI 抑制。加入 IPTG（一种不可水解的乳糖类似物）解除这个抑制，细胞开始合成 T7 RNA 聚合酶。第二级在质粒上：你的基因位于 T7 启动子之下，新合成的聚合酶来转录它。把两级连起来的关键性质是正交性——T7 RNA 聚合酶只识别 T7 启动子，而宿主 RNA 聚合酶完全不识别它，所以两套转录系统互不干扰。这个架构带来的是放大：T7 聚合酶比宿主酶快约八倍，而且在一个没有竞争的专属启动子上工作，因此目标蛋白可以占到全细胞蛋白的 50%。它的代价是渗漏，而且出于同一个结构性原因：因为系统是两层的，诱导之前聚合酶的任何基础表达都会被它自己驱动的机器放大——漏出来的少数几个聚合酶分子，会变成大量漏出来的蛋白。这正是 pLysS 和 pLysE 质粒存在的原因，它们编码 T7 溶菌酶作为 T7 聚合酶的天然抑制剂来清除这部分基础活性；这也是为什么对真正有毒的产物来说 T7 系统是糟糕的选择，那时正确答案是 araBAD 或无细胞系统。'
    }
  ]
},

{
  id: '2-9',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.9',
  enTitle: 'Induction — IPTG, and how autoinduction media induce themselves',
  cnTitle: '诱导——IPTG，以及自诱导培养基如何自我诱导',
  slides: 'L3 s.15',
  coverage: 'full',
  coverageNote: 'The inducers and the four autoinduction media components are listed on the slide. Why that particular combination induces itself at the right moment is not stated, and it is the mechanism question — it is carbon catabolite repression doing your pipetting for you.',
  summary: {
    en: 'Allolactose is the natural inducer, formed by spontaneous isomerisation of lactose. IPTG is a non-hydrolysable lactose analogue used at 50 micromolar to 1 millimolar, and the point of non-hydrolysability is that its concentration stays constant so induction strength does not drift. Autoinduction media combine phosphate buffer, glucose, glycerol and lactose so that the culture induces itself at mid-to-late log phase, overnight, with nobody watching.',
    cn: '别乳糖是天然诱导剂，由乳糖自发异构化产生。IPTG 是不可水解的乳糖类似物，用量 50 µM 到 1 mM；不可水解的意义在于浓度保持恒定，诱导强度不会漂移。自诱导培养基把磷酸缓冲液、葡萄糖、甘油和乳糖组合起来，使培养物在对数期中后期自行诱导，过夜进行，无需有人守着。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.15', src: 'img/figures/L3_s15_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '自诱导的原理是**分解代谢物阻遏**：葡萄糖在场时压着 lac、细胞只管长；**葡萄糖一吃完，乳糖接手，诱导自动发生**——而那个时刻正好是对数期中后期，也正好是你本来会手动加 IPTG 的时刻。',
  skipIt: '50 µM–1 mM 这个 IPTG 用量范围，以及自诱导培养基的具体配方比例，用时查配方即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 promoters 和 T7 system——**诱导逻辑要会讲**，但配方数字不是考点。',
  explain: [
    {
      q: '别乳糖（allolactose）跟乳糖是什么关系？为什么天然诱导剂是它不是乳糖？',
      trace: {
        what: '**乳糖的一个异构体**——同样的原子，连接方式不同。它才是 lac 系统真正的天然诱导剂。',
        from: '它是怎么来的？乳糖进入细胞后，**β-半乳糖苷酶除了分解乳糖，还会顺手把一小部分异构化成别乳糖**。所以「细胞里有乳糖」这个信号，是通过一个副产物传递出去的。',
        to: '真正跑去结合 LacI 阻遏蛋白、让它从 DNA 上松开的，是**别乳糖**，不是乳糖本身。\n\n**这就解释了 IPTG 的设计**：IPTG 常被说成「乳糖类似物」，但它模仿的其实是**别乳糖**——形状够像，所以能结合 LacI；同时**不能被水解**，所以浓度不会掉。',
        family: '三个东西排一下：**乳糖**（营养 + 信号来源）、**别乳糖**（真正的信号分子）、**IPTG**（别乳糖的人工替身，只当信号不当营养）。'
      },
      takeaway: '乳糖要先被异构成别乳糖才是信号。IPTG 模仿的是别乳糖，而且不会被吃掉。'
    },
    {
      q: '自诱导培养基凭什么能「自己」诱导？',
      a: '靠的是 **E. coli 自己的碳源偏好顺序**——也就是**分解代谢物阻遏（catabolite repression）**。\n\n' +
         '培养基里**同时**放了葡萄糖和乳糖，而细菌对这两个不是一视同仁的：\n\n' +
         '**葡萄糖在场时**，它是首选能源，被优先消耗；同时它**主动压着 lac 操纵子**。于是那些乳糖就静静待着，一点作用都没有，细胞只管长。\n\n' +
         '**葡萄糖被吃完的那一刻**，压制解除，细胞转而利用乳糖 → lac 系统被诱导 → T7 聚合酶开始表达 → 你的蛋白开始生产。\n\n' +
         '**最妙的是时机。**葡萄糖耗尽的时间点，取决于你放了多少葡萄糖——而配方被调成让它**正好落在对数期中后期**，也就是你本来会守着 OD 值、等到 0.6 左右手动加 IPTG 的那个时刻。\n\n' +
         '**这个巧合是设计出来的，不是碰巧。**整个配方就是围绕「让开关在正确的密度自动扳下去」配出来的。',
      takeaway: '葡萄糖先被吃并压住 lac，吃完后乳糖接手触发诱导。耗尽的时间被配成正好是该诱导的密度。'
    },
    {
      q: '甘油在里面干什么？为什么不干脆多放点葡萄糖？',
      a: '**不能多放葡萄糖，因为「葡萄糖吃完」正是触发条件。**多放 = 推迟诱导，放太多就整夜都不诱导，你早上回来收获一管什么都没表达的菌。\n\n' +
         '但葡萄糖一旦吃完，问题来了：**细胞还得继续长、继续供能来生产蛋白**，碳源哪来？\n\n' +
         '**这就是甘油的位置。**它是一个**「不阻遏」的碳源**——能被利用，但**不会压制 lac 操纵子**。所以它可以一直在场，不干扰开关。\n\n' +
         '三个碳源各司其职，这样记最清楚：\n\n' +
         '**葡萄糖** —— 负责「**先长、并且压住**」。用量决定诱导时刻。\n\n' +
         '**甘油** —— 负责「**诱导之后继续供能**」。因为它不阻遏，所以可以一直在。\n\n' +
         '**乳糖** —— 负责「**触发**」。等前面那个让位。\n\n' +
         '**理解了这个分工，配方就不用背了。**',
      takeaway: '葡萄糖多放就不诱导了。甘油是不阻遏的碳源，负责诱导之后继续供能。'
    },
    {
      q: '磷酸缓冲液为什么算一个必需组分，而不是可有可无？',
      a: '因为这是一个**过夜的、没有人看着的**过程。\n\n' +
         'E. coli 长起来会产酸——醋酸之类的代谢副产物不断累积，pH 往下掉。掉到一定程度，菌停止生长，你的蛋白也可能已经变性或被降解。\n\n' +
         '有人守着的时候，这不是大问题：看着 pH 补点碱，或者干脆及时收菌。\n\n' +
         '**但自诱导的全部意义就是没有人守着。**所以 pH 必须靠配方自己扛住十几个小时。\n\n' +
         '这一条其实点破了自诱导培养基的真正卖点：\n\n' +
         '**它省的不是 IPTG 的钱，是人。**你晚上接种走人，早上回来菌已经长好、诱导过、蛋白也表达完了。对需要同时跑十几个条件的筛选实验，这个差别是决定性的——**手动诱导意味着你必须在正确的时刻同时守着十几个瓶子。**',
      takeaway: '过夜没人守着，产酸会让 pH 掉下去。缓冲液是「无人值守」这个卖点的前提。'
    }
  ],
  points: [
    { term: 'Allolactose', en: 'The natural inducer, formed by spontaneous isomerisation of lactose.', cn: '天然诱导剂，由乳糖自发异构化形成。' },
    { term: 'IPTG', en: 'Isopropyl-beta-D-1-thiogalactoside, a non-hydrolysable lactose analogue, used at 50 micromolar to 1 millimolar.', cn: '异丙基-β-D-1-硫代半乳糖苷，不可水解的乳糖类似物，用量 50 µM 到 1 mM。' },
    { term: 'Autoinduction media', en: 'Growth and induction in a single step, ideal for overnight, hands-free expression. A complex medium plus four defined components.', cn: '生长和诱导一步完成，适合过夜、无人值守的表达。在复合培养基基础上加四种明确的成分。' },
    { term: 'Phosphate buffer', en: 'Component one: pH control over a long unattended incubation.', cn: '成分一：在长时间无人照看的培养过程中控制 pH。' },
    { term: 'Glucose', en: 'Component two: the preferred energy source, which sustains growth and simultaneously represses the lac operon.', cn: '成分二：优先使用的能量来源，既维持生长又同时阻遏 lac 操纵子。' },
    { term: 'Glycerol', en: 'Component three: supports continued growth without inhibiting T7, because it is a non-repressing carbon source.', cn: '成分三：支持持续生长而不抑制 T7，因为它是非阻遏性的碳源。' },
    { term: 'Lactose', en: 'Component four: used once the glucose is consumed, at which point it induces the lac system.', cn: '成分四：葡萄糖耗尽之后才被利用，此时它诱导 lac 系统。' }
  ],
  beyondPoints: [
    { term: 'The mechanism is carbon catabolite repression', en: 'The medium contains both glucose and lactose, and E. coli has a strict preference order. While glucose is present it is consumed first and actively represses the lac operon, so the lactose sits unused and the cells simply grow.', cn: '培养基里同时有葡萄糖和乳糖，而大肠杆菌有严格的偏好顺序。葡萄糖存在时优先被消耗，并主动阻遏 lac 操纵子，所以乳糖搁在那里没被用，细胞只是生长。' },
    { term: 'The switch happens by itself at the right density', en: 'When glucose runs out — typically at mid-to-late log phase, exactly the moment you would have added IPTG by hand — the cells switch to lactose, which induces the lac system and therefore T7 polymerase. Glycerol is present so growth continues after glucose is gone.', cn: '葡萄糖耗尽时——通常正是对数期中后期，恰好是你本来会亲手加 IPTG 的那一刻——细胞转向乳糖，从而诱导 lac 系统进而诱导 T7 聚合酶。甘油的存在保证葡萄糖耗尽后生长仍能继续。' },
    { term: 'Why the analogue must be non-hydrolysable', en: 'IPTG is not metabolised, so its concentration stays constant and induction strength is stable and controllable. Lactose itself is consumed by beta-galactosidase, so its concentration falls continuously and the induction strength drifts with it.', cn: 'IPTG 不被代谢，所以浓度保持恒定，诱导强度稳定可控。乳糖本身会被 β-半乳糖苷酶消耗，浓度不断下降，诱导强度也随之漂移。' }
  ],
  terms: [
    { en: 'IPTG', cn: 'IPTG（异丙基硫代半乳糖苷）', def_en: 'A non-hydrolysable analogue of allolactose used to induce lac-regulated promoters. Because it is not metabolised, its concentration and therefore the induction strength stay constant.', def_cn: '别乳糖的不可水解类似物，用于诱导受 lac 调控的启动子。因为不被代谢，它的浓度以及由此决定的诱导强度都保持恒定。' },
    { en: 'Catabolite repression', cn: '分解代谢物阻遏', def_en: 'Glucose suppressing the use of alternative carbon sources. The mechanism that makes autoinduction media wait until glucose runs out before switching on.', def_cn: '葡萄糖抑制对其他碳源的利用。这正是自诱导培养基「等葡萄糖耗尽才开启」的机制。' },
    { en: 'Autoinduction medium', cn: '自诱导培养基', def_en: 'A medium containing glucose, glycerol and lactose so that the culture grows on glucose, then induces itself on lactose when glucose is exhausted, without intervention.', def_cn: '同时含葡萄糖、甘油和乳糖的培养基，培养物先靠葡萄糖生长，葡萄糖耗尽后自行用乳糖诱导，无需人为干预。' },
    { en: 'Allolactose', cn: '别乳糖', def_en: 'The natural inducer of the lac operon, formed by spontaneous isomerisation of lactose, which allosterically inactivates LacI.', def_cn: 'lac 操纵子的天然诱导剂，由乳糖自发异构化形成，以变构方式使 LacI 失活。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What makes an autoinduction medium induce at the right moment without intervention?',
      q_cn: '是什么让自诱导培养基能在正确的时刻自行诱导、无需干预？',
      options: ['A slow-release IPTG formulation delivers inducer gradually across the overnight run', 'Glucose represses lac until it is exhausted, and then lactose induces', 'The phosphate buffer shifts the pH once the culture reaches high density', 'Lactose stays undissolved until the culture reaches high density'],
      answer: 1,
      why_en: 'Carbon catabolite repression is doing the timing. Glucose is consumed first and represses lac, so lactose sits unused. When glucose runs out — typically mid-to-late log phase, exactly when you would have pipetted IPTG — the cells switch to lactose and induce themselves.',
      why_cn: '定时是由分解代谢物阻遏完成的。葡萄糖优先被消耗并阻遏 lac，所以乳糖闲置。葡萄糖耗尽时——通常是对数期中后期，正好是你本该加 IPTG 的时刻——细胞转向乳糖并自我诱导。' },
    { type: 'mcq',
      q_en: 'What is glycerol doing in an autoinduction medium?',
      q_cn: '甘油在自诱导培养基里起什么作用？',
      options: ['It induces the lac operon directly, in place of lactose', 'It buffers the pH so the culture survives a long unattended overnight run', 'It is a carbon source that supports growth without repressing lac', 'It inhibits beta-galactosidase so lactose is not consumed'],
      answer: 2,
      optionNotes: {
        1: { en: 'The medium does need buffering to survive an unattended overnight run, but the phosphate is what does that. Glycerol is a carbon source, and the reason it is chosen over more glucose is that it feeds the culture without keeping lac repressed.', cn: '这种培养基确实需要缓冲来撑过无人看管的过夜培养，但做这件事的是 phosphate。glycerol 是碳源；选它而不是继续加 glucose，是因为它能养着菌又不会把 lac 一直压着。' }
      },
      why_en: 'Once glucose is exhausted the culture still needs to grow while expressing. Glycerol supplies carbon without repressing lac, so it supports growth without inhibiting T7 expression.',
      why_cn: '葡萄糖耗尽后培养物还需要一边表达一边生长。甘油提供碳源但不阻遏 lac，所以能支持生长而不抑制 T7 表达。' },
    { type: 'mcq',
      q_en: 'Why use IPTG rather than lactose itself as an inducer?',
      q_cn: '为什么用 IPTG 而不是直接用乳糖做诱导剂？',
      options: ['IPTG costs less per litre of culture than lactose', 'IPTG is not hydrolysed, so the induction strength stays constant', 'Lactose cannot cross the membrane into the cell at all', 'IPTG also inhibits the proteases that degrade the product'],
      answer: 1,
      optionRefs: { 2: '2-5' },
      why_en: 'Lactose is consumed by beta-galactosidase, so its concentration falls continuously and induction strength drifts. IPTG is not metabolised, giving a stable, controllable and reproducible induction.',
      why_cn: '乳糖会被 β-半乳糖苷酶消耗，浓度不断下降，诱导强度随之漂移。IPTG 不被代谢，给出稳定、可控、可重复的诱导。' },
    { type: 'short',
      q_en: 'Explain how an autoinduction medium works and why it is convenient.',
      q_cn: '解释自诱导培养基的工作原理，以及它为什么方便。',
      accept: ['glucose', 'catabolite repression', 'lactose', 'glycerol', 'no IPTG'],
      answer_en: 'The medium contains phosphate buffer for pH control plus three carbon sources: glucose, glycerol and lactose. E. coli has a strict preference order, so while glucose is present it is consumed first and actively represses the lac operon by catabolite repression, leaving the lactose unused while the cells simply grow. When glucose runs out, typically at mid-to-late log phase, which is exactly when you would have added IPTG by hand, the cells switch to lactose, which induces the lac system and therefore T7 polymerase. Glycerol is there as a non-repressing carbon source so growth continues after the glucose is gone. The convenience is that the culture induces itself at the right cell density, overnight, without anyone monitoring the optical density and pipetting at the right moment.',
      answer_cn: '培养基含有控制 pH 的磷酸缓冲液，以及三种碳源：葡萄糖、甘油和乳糖。大肠杆菌有严格的偏好顺序，所以葡萄糖存在时优先被消耗，并通过分解代谢物阻遏主动抑制 lac 操纵子，乳糖闲置不用，细胞只管生长。葡萄糖耗尽时（通常是对数期中后期，正好是你本该亲手加 IPTG 的时刻），细胞转向乳糖，从而诱导 lac 系统进而诱导 T7 聚合酶。甘油作为非阻遏性碳源存在，保证葡萄糖耗尽后生长继续。方便之处在于：培养物会在正确的细胞密度上自行诱导，整夜进行，不需要任何人盯着 OD600 在恰当时刻加样。'
    }
  ],
  oral: {
    q_en: 'How is expression induced in the lac and T7 systems, and how do autoinduction media work?',
    q_cn: 'lac 和 T7 系统怎么诱导表达？自诱导培养基又是怎么工作的？',
    model_en: 'The natural inducer is allolactose, formed by spontaneous isomerisation of lactose, which allosterically inactivates the LacI repressor. In practice we use IPTG, a non-hydrolysable lactose analogue, typically between fifty micromolar and one millimolar. The reason for using a non-hydrolysable analogue is worth stating: IPTG is not metabolised, so its concentration stays constant and induction strength is stable and reproducible, whereas lactose itself is consumed by beta-galactosidase so its concentration falls continuously and the induction drifts with it. Autoinduction media do the same job without anyone present. The medium is a complex base plus four components: phosphate buffer for pH control, glucose, glycerol and lactose. The mechanism is carbon catabolite repression doing your pipetting for you. E. coli has a strict preference order, so while glucose is present it is consumed first and actively represses the lac operon, and the lactose sits there unused while the cells simply grow. When the glucose runs out, typically at mid-to-late log phase, which is precisely the moment you would have added IPTG by hand, the cells switch to lactose, which induces the lac system and therefore T7 polymerase. Glycerol is included as a non-repressing carbon source so that growth continues after the glucose is gone. The whole appeal is that the culture induces itself at the right density, overnight, with nobody having to monitor the optical density.',
    checklist: ['Allolactose is the natural inducer, from spontaneous isomerisation of lactose', 'IPTG is a non-hydrolysable analogue, 50 µM to 1 mM', 'Non-hydrolysable matters: concentration stays constant, no drift', 'Lactose would be consumed by beta-galactosidase and drift', 'Autoinduction: growth and induction in one step, hands-free overnight', 'Four components: phosphate buffer, glucose, glycerol, lactose', 'Glucose consumed first and represses lac (catabolite repression)', 'Glucose exhausted at mid-to-late log, exactly the right induction moment', 'Lactose then induces lac and therefore T7 polymerase', 'Glycerol is a non-repressing carbon source so growth continues']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why does autoinduction medium contain both glucose and glycerol?',
      q_cn: '为什么自诱导培养基里同时含有葡萄糖和甘油？',
      options: ['Glycerol is there only as a spare carbon source, should the glucose run out early', 'Glucose represses lac early, and non-repressing glycerol sustains growth later', 'Glycerol lowers the freezing point and protects cells during storage', 'Glucose is the inducer and glycerol is the repressing carbon source'],
      answer: 1,
      optionNotes: {
        3: { en: 'Exactly reversed, and neither of them is the inducer. Glucose is the repressing carbon source, acting through catabolite repression; glycerol is the one that does not repress; and the inducer is lactose, which only gets used once the glucose is gone.', cn: '正好反了，而且这两个都不是诱导物。glucose 是通过 catabolite repression 起抑制作用的碳源，glycerol 是不抑制的那一个，真正的诱导物是 lactose——它要等 glucose 用完之后才被利用。' }
      },
      why_en: 'The two carbon sources have different regulatory consequences, and that is the whole design. Glucose holds the lac system off while biomass accumulates. Once it is consumed the repression lifts, lactose is taken up and induces, and glycerol keeps the culture growing through that phase because it does not repress. Timing is achieved by metabolic preference rather than by anyone being at the bench.',
      why_cn: '两种碳源的调控后果不同，而这正是整个设计的关键。葡萄糖在菌体积累阶段压住 lac 系统；一旦被耗尽，抑制解除，乳糖被摄入并诱导，而甘油因为不产生抑制，能让培养物在这个阶段继续生长。时序是靠代谢偏好实现的，而不是靠有人守在台边。' },
    { type: 'mcq',
      q_en: 'Why is IPTG used instead of lactose or allolactose for deliberate induction?',
      q_cn: '为什么刻意诱导时用 IPTG 而不是乳糖或异乳糖？',
      options: ['It costs less per litre of culture than lactose does', 'It is not metabolised, so the concentration you set persists', 'It enters every strain by passive diffusion, needing no permease', 'It also inhibits host proteases such as Lon and OmpT'],
      answer: 1,
      optionRefs: { 2: '2-5' },
      optionNotes: {
        0: { en: 'Cost runs the other way: IPTG is one of the expensive components and lactose is nearly free, which is precisely why large-scale and autoinduction protocols use lactose. IPTG is bought for its behaviour, not its price — it is not metabolised, so the dose you set stays set.', cn: '成本正好相反：IPTG 是比较贵的那个组分，lactose 几乎不要钱，这恰恰是大规模培养和 autoinduction 用 lactose 的原因。买 IPTG 买的是它的行为而不是价格——它不被代谢，所以你设定的剂量会一直保持。' }
      },
      why_en: 'Allolactose is the natural inducer, formed by spontaneous isomerisation of lactose, but it is consumed. IPTG is not metabolised, so the level you set is the level that persists — which is what makes a defined fifty micromolar to one millimolar dose meaningful. In Tuner cells, where uptake is passive, that becomes genuinely proportional control.',
      why_cn: '天然诱导物是异乳糖，由乳糖自发异构化而来，但它会被消耗掉。IPTG 不被代谢，所以你设定的浓度就是持续维持的浓度——这正是「50 微摩尔到 1 毫摩尔」这样一个确定剂量有意义的原因。在摄取为被动扩散的 Tuner 细胞里，这就变成了真正的比例控制。' },
    { type: 'mcq',
      q_en: 'What is the phosphate buffer in autoinduction medium for?',
      q_cn: '自诱导培养基里的磷酸缓冲液是干什么的？',
      options: ['It is included mainly as the phosphorus source for nucleotide synthesis', 'It holds the pH steady through an unattended overnight run', 'It chelates divalent cations that would inhibit T7 polymerase', 'It slows lactose uptake so that induction begins later'],
      answer: 1,
      why_en: 'The point of autoinduction is that nobody is watching. Over an overnight culture, metabolic acid would otherwise drift the pH far enough to stall growth or expression before the lactose phase has done its work, so buffering is what makes hands-free operation reliable rather than merely convenient.',
      why_cn: '自诱导的意义就在于没有人盯着。在过夜培养中，代谢产酸会让 pH 漂移到足以在乳糖诱导阶段完成之前就使生长或表达停滞，所以缓冲是让「无人值守」变得可靠、而不只是方便的关键。' },
    { type: 'short',
      q_en: 'Explain how autoinduction medium induces itself, component by component.',
      q_cn: '逐个组分解释自诱导培养基是如何自己完成诱导的。',
      accept: ['glucose', 'glycerol', 'lactose', 'phosphate', 'repress'],
      answer_en: 'It is a complex medium plus four defined components, arranged so that the sequence of events is driven by which carbon source the cells prefer rather than by anyone adding anything. Phosphate buffer holds the pH steady through a long unattended incubation, because acid accumulates overnight and would otherwise stall the culture. Glucose is the preferred energy source, and while it is present it does two things at once: it sustains rapid growth and it represses the lac operon, so no induction happens during the biomass phase. Glycerol is a non-repressing carbon source, so once glucose runs out the cells continue growing on glycerol without holding lac off. And lactose is then taken up, and induces the lac system. So the ordering is metabolic: glucose first and no expression, glucose exhausted and lactose induces, glycerol carrying the growth through. The practical value is growth and induction in a single step with no timed intervention, which makes it ideal for overnight hands-free expression — you set it up and collect protein in the morning rather than waiting to hit a particular optical density and pipetting IPTG in.',
      answer_cn: '它是复合培养基加上四个确定组分，安排成事件顺序由细胞偏好哪种碳源来驱动，而不是靠人去添加什么。磷酸缓冲液在长时间无人值守的孵育中稳住 pH，因为过夜会积累酸，否则培养会停滞。葡萄糖是首选能源，只要它还在，就同时做两件事：维持快速生长，并抑制 lac 操纵子，所以在积累菌体的阶段不会发生诱导。甘油是不产生抑制的碳源，所以葡萄糖耗尽后细胞可以继续靠甘油生长，而不会压住 lac。此时乳糖被摄入，诱导 lac 系统。于是顺序是代谢决定的：先葡萄糖、不表达；葡萄糖耗尽、乳糖诱导；甘油支撑着这段生长。实际价值是生长与诱导一步完成、不需要定时干预，因此非常适合过夜的无人值守表达——你把它配好，早上来收蛋白，而不必守着等某个特定 OD 值再加 IPTG。'
    }
  ]
},

{
  id: '2-10',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.10',
  enTitle: 'Inclusion bodies — not a failure',
  cnTitle: '包涵体——不是失败',
  slides: 'L3 s.16–18',
  coverage: 'full',
  coverageNote: 'The slide is emphatic that the advantages are real, and its take-home message is quoted verbatim in the points. This is a case where the intuitive reading (aggregation equals disaster) is the wrong one, so the framing matters more than the facts.',
  summary: {
    en: 'Inclusion bodies are aggregates of misfolded recombinant protein in the E. coli cytoplasm, formed when overproduction overwhelms the folding machinery or the protein aggregates hydrophobically. The slide insists they are not a failure: because aggregated protein is inactive you can make products that would otherwise kill the cell, purification is as simple as keeping the pellet, and working under denaturing conditions leaves fewer contaminants behind.',
    cn: '包涵体是大肠杆菌胞质中错误折叠的重组蛋白聚集体，形成原因是过量表达压垮了折叠机器，或者蛋白发生疏水聚集。幻灯片强调它们不是失败：因为聚集态的蛋白没有活性，你可以生产那些本来会杀死细胞的产物；纯化只需要留下沉淀；而在变性条件下操作会留下更少的杂质。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.16', src: 'img/figures/L3_s16_1.webp' },
    { slide: 'L3 s.17', src: 'img/figures/L3_s17_1.webp' },
    { slide: 'L3 s.17', src: 'img/figures/L3_s17_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '包涵体**对纯化是好消息，对产量是坏消息**——幻灯片列的三个好处全是关于「怎么便宜干净地把蛋白拿出来」，而复性得率通常只有 **1–5%**。\n\n' +
            '所以「不是失败」这句话要连着下半句一起记。',
  skipIt: '「6 M 盐酸胍」这个具体浓度不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **Inclusion bodies/solubility**——**这一节是被点名的**，包涵体为什么形成、有什么好处和代价都要能讲。',
  explain: [
    {
      q: '包涵体到底是怎么形成的？为什么「表达太多」就会这样？',
      a: '因为**折叠机器的处理能力是有限的，而你把供给开到了最大。**\n\n' +
         '正常情况下：一条新生肽链刚从核糖体出来，伴侣蛋白就接手了，护着它折叠，不让它暴露的疏水面到处乱撞。\n\n' +
         '**过量表达时，新生链的产生速率远远超过伴侣蛋白的处理速率。**于是排队的未折叠链在细胞质里堆积起来。\n\n' +
         '**而未折叠的链是「粘」的。**蛋白折叠好之后，疏水残基被埋在内部、亲水面朝外——这正是它能溶在水里的原因。没折好的链**把疏水面暴露在外**，两条这样的链撞在一起，疏水面互相贴合，就粘住了。粘住的越多，越粘，最后聚成一团致密的固体。\n\n' +
         '**所以包涵体不是「蛋白坏了」，是「排队排崩了」。**\n\n' +
         '这个画面在接下来两节里会反复用到：**下一节讲怎么把已经粘成一团的拆开重折，再下一节讲怎么一开始就别让队排崩。**',
      takeaway: '新生链产生得比伴侣蛋白处理得快 → 未折叠链堆积 → 暴露的疏水面互相粘住。是排队崩了，不是蛋白坏了。'
    },
    {
      q: '幻灯片说包涵体「不是失败」——这话能全信吗？',
      a: '**能信一半，而这一半必须说清楚。**\n\n' +
         '把幻灯片列的三个好处摊开看，你会发现它们**全部是关于同一件事**：\n\n' +
         '可以做有毒的蛋白了 —— 关于**能不能做出来**。\n\n' +
         '离心留沉淀就行 —— 关于**怎么拿出来**。\n\n' +
         '变性条件下杂质更少 —— 关于**拿出来有多干净**。\n\n' +
         '**没有一条是关于「怎么让它重新折好」的。**\n\n' +
         '而那一步的代价写在下一节：**复性得率通常只有 1–5%。**你辛辛苦苦拿到 100 mg 又纯又干净的包涵体，最后可能只剩下 1–5 mg 有活性的蛋白。\n\n' +
         '所以完整的说法是：**包涵体对纯化是好消息，对产量是坏消息。**\n\n' +
         '有一个很直接的证据支持这个判断：**如果包涵体真的没问题，第 2-12 节那一整节（五个避免包涵体的手段）就不需要存在了。**课程本身用一整节教你怎么躲开它，这已经说明了态度。\n\n' +
         '**答题时两句都要说**，只说「不是失败」听起来像没做过实验。',
      takeaway: '三个好处都在讲「拿出来」，没有一个讲「折回去」。而折回去只有 1–5%。'
    },
    {
      q: '为什么「聚集态没有活性」反而算一个优点？',
      a: '因为它**直接解锁了一类原本做不出来的产物**：抗菌肽、DNase、蛋白酶——这些东西只要在细胞里有活性，就会把宿主杀死。\n\n' +
         '包涵体相当于给产物上了一道封印：**一被做出来就立刻失活、并且被隔离在一团固体里**。细胞得以存活、继续生产，你事后再在体外把它解封。\n\n' +
         '**把它跟第 2-7 节那条对照着看，特别有意思：**\n\n' +
         '**第 2-7 节的解法**：用 araBAD 这类很紧的启动子，**根本不让它被做出来**（直到你准备好为止）。\n\n' +
         '**这一节的解法**：让它被大量做出来，但**做出来的东西没有活性**。\n\n' +
         '**两种完全相反的思路，对付同一个问题。**\n\n' +
         '而且它们的适用场合不同：紧启动子适合你最后想要**可溶且有活性**的蛋白；包涵体路线适合你**愿意事后复性**、或者产物本身在体外才需要活性的情况。\n\n' +
         '被问到「怎么表达一个对宿主有毒的蛋白」，能把这两条路加上无细胞系统一起摆出来，就是一个完整的答案。',
      takeaway: '紧启动子是「不让它被做出来」，包涵体是「做出来但没活性」。加上无细胞，三条路对付毒性。'
    },
    {
      q: '为什么在变性条件下纯化，杂质反而更少？直觉上不该更乱吗？',
      a: '因为**变性条件把竞争者清场了，而你的抓手恰好不怕变性。**\n\n' +
         '在 6 M 盐酸胍这种条件下，**几乎所有宿主蛋白都被打开、溶解、洗掉**。它们原有的结构、原有的结合能力全没了。\n\n' +
         '**而 His 标签跟 Ni-NTA 的结合不依赖折叠。**它需要的只是那六个组氨酸侧链上的咪唑环去配位镍离子——**一条完全伸展的肽链上，这六个残基照样露在外面，照样抓得住**。\n\n' +
         '（对比一下：如果你的抓手是一个抗体识别的构象表位，那变性就把它毁了。所以这个优势是 His 标签特有的。）\n\n' +
         '**结果是：你在一个几乎没有竞争者的环境里做亲和纯化。**\n\n' +
         '而天然条件下纯化时，宿主里那些**天然富含组氨酸的蛋白**会一起挂到镍柱上，成为最常见的背景杂质。\n\n' +
         '所以这一条不是安慰奖，是真实的技术优势：**先变性再纯化，可以拿到比天然纯化更干净的起始材料**——代价当然还是那 1–5%。',
      takeaway: '变性把所有竞争者洗掉了，而 His 标签不依赖折叠，照样抓得住。所以背景反而更干净。'
    }
  ],
  points: [
    { term: 'Definition', en: 'Aggregates of misfolded recombinant protein formed in the cytoplasm of E. coli.', cn: '在大肠杆菌胞质中形成的、错误折叠的重组蛋白聚集体。' },
    { term: 'Why they form', en: 'Overproduction overwhelms the cellular folding machinery, or the protein forms hydrophobic aggregates.', cn: '过量表达压垮了细胞的折叠机器，或者蛋白形成疏水聚集体。' },
    { term: 'Advantage — toxic products become possible', en: 'Because aggregated protein is inactive, you can make antimicrobials, DNases and proteases that would otherwise kill the cell.', cn: '因为聚集态的蛋白没有活性，你可以生产抗菌肽、DNA 酶、蛋白酶这些本来会杀死细胞的产物。' },
    { term: 'Advantage — trivially simple purification', en: 'Break the cells, centrifuge, and keep the pellet. The first purification step is essentially free.', cn: '把细胞打碎、离心、留下沉淀。第一步纯化基本上是免费的。' },
    { term: 'Advantage — denaturing purification means fewer contaminants', en: 'Purification under denaturing conditions, for example Ni-NTA in 6 M guanidinium chloride, carries fewer contaminating proteins through.', cn: '在变性条件下纯化（例如在 6 M 盐酸胍中跑 Ni-NTA），带过去的杂蛋白更少。' },
    { term: 'The take-home message', en: 'Quoted from the slide: inclusion bodies are not a failure — they can provide high-purity, stable starting material for refolding into active protein.', cn: '幻灯片原话：包涵体不是失败——它们能提供高纯度、稳定的起始材料，用于复性成有活性的蛋白。' },
    { term: 'What they look like', en: 'Dense white material in the pellet after lysis and centrifugation.', cn: '裂解离心之后，沉淀中致密的白色物质。' }
  ],
  beyondPoints: [
    { term: 'The catch that the advantages do not mention', en: 'Everything above is about getting the protein out cheaply and cleanly. None of it addresses getting it folded again, and refolding typically recovers only 1 to 5 per cent. So inclusion bodies are good news about purification and bad news about yield — which is why the strategies in the next two nodes exist to avoid them in the first place.', cn: '上面这些优点讲的都是「怎么便宜又干净地把蛋白弄出来」，没有一条解决「怎么让它重新折叠」，而复性的得率通常只有 1–5%。所以包涵体是纯化上的好消息、产量上的坏消息——这正是接下来两节那些「一开始就避免包涵体」的策略存在的原因。' }
  ],
  terms: [
    { en: 'Inclusion body', cn: '包涵体', def_en: 'An insoluble aggregate of misfolded recombinant protein in the cytoplasm, visible as dense white material in the pellet after lysis.', def_cn: '胞质中错误折叠的重组蛋白形成的不溶性聚集体，裂解后在沉淀中呈致密的白色物质。' },
    { en: 'Denaturing conditions', cn: '变性条件', def_en: 'Buffers containing a strong chaotrope such as 6 M guanidinium chloride or 8 M urea, which unfold the protein. Only His-tag purification survives these.', def_cn: '含有强离液剂（如 6 M 盐酸胍或 8 M 尿素）的缓冲液，会让蛋白解折叠。只有 His 标签纯化能在这种条件下正常工作。' },
    { en: 'Folding machinery', cn: '折叠机器', def_en: 'The cell\'s chaperones and chaperonins. Overproduction saturates their capacity, which is one of the two routes to inclusion body formation.', def_cn: '细胞的分子伴侣和伴侣蛋白系统。过量表达会使其能力饱和，这是形成包涵体的两条途径之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does expressing a toxic protein into inclusion bodies work?',
      q_cn: '为什么把毒性蛋白表达进包涵体这条路行得通？',
      options: ['Inclusion bodies are secreted from the cell', 'Aggregated protein is inactive, so it cannot harm the host', 'The Lon protease degrades the toxic protein before it can act on the host', 'Inclusion bodies form only in dead cells'],
      answer: 1,
      why_en: 'Aggregation destroys activity, and a nuclease or antimicrobial that cannot act cannot kill its host. The protein accumulates harmlessly and is refolded later, outside the cell.',
      why_cn: '聚集破坏了活性，而一个无法起作用的核酸酶或抗菌肽也就杀不死宿主。蛋白无害地积累起来，之后在细胞外再复性。' },
    { type: 'mcq',
      q_en: 'What are the two stated causes of inclusion body formation?',
      q_cn: '包涵体形成的两个原因是什么？',
      options: ['Protease attack on the nascent chain, or low growth temperature', 'Overproduction overwhelming the folding machinery, or hydrophobic aggregation', 'Rare-codon bias in the gene, or instability of the mRNA transcript', 'Scrambled disulfide pairing, or failure of glycosylation in the host'],
      answer: 1,
      optionRefs: { 2: '2-5' },
      optionNotes: {
        0: { en: 'Low temperature is one of the standard cures for inclusion bodies, not a cause: it slows synthesis more than it slows folding. And proteases destroy protein rather than aggregating it, so a protease problem shows up as missing or clipped product, not as a dense pellet.', cn: '低温是包涵体的标准解法之一，不是原因——它让合成比折叠慢得更多。蛋白酶是把蛋白降解掉而不是让它聚集，所以蛋白酶的问题表现为产物缺失或被切短，而不是一坨致密的沉淀。' }
      },
      why_en: 'Either the rate of synthesis exceeds the cell\'s folding capacity, or the protein\'s own hydrophobic surfaces drive it to aggregate. Both are addressed by slowing synthesis or increasing folding capacity.',
      why_cn: '要么合成速率超过了细胞的折叠能力，要么蛋白自身的疏水表面驱动它聚集。两者都可以通过「放慢合成」或「提高折叠能力」来解决。' },
    { type: 'mcq',
      q_en: 'Why does denaturing purification of inclusion bodies give fewer contaminants?',
      q_cn: '为什么包涵体的变性纯化杂质更少？',
      options: ['Guanidinium kills the bacteria that survive lysis and would contaminate', 'Host protein leaves with the supernatant, and the chaotrope breaks protein-protein binding', 'Denaturing buffers run at a very low pH that host proteins cannot tolerate', 'The His-tag binds nickel more tightly once the protein is denatured and its six histidines are fully exposed'],
      answer: 1,
      optionRefs: { 3: '2-36' },
      why_en: 'The centrifugation step already discards soluble host protein, and running Ni-NTA in 6 M guanidinium prevents contaminants from riding along through protein-protein association. This works because His-tag binding is a coordination bond, not a fold-dependent recognition.',
      why_cn: '离心这一步已经丢掉了可溶的宿主蛋白，而在 6 M 盐酸胍中跑 Ni-NTA 又阻止了杂蛋白通过蛋白间结合被带下来。之所以可行，是因为 His 标签的结合是配位键，而不是依赖折叠的识别。' },
    { type: 'short',
      q_en: 'Your protein has gone into inclusion bodies. Give the argument that this is good news, and then the argument that it is bad.',
      q_cn: '你的蛋白进了包涵体。先说这是好消息的理由，再说这是坏消息的理由。',
      accept: ['inactive', 'toxic', 'simple purification', 'pellet', 'refolding', '1-5', 'yield'],
      answer_en: 'The good news is that the first purification step becomes trivial — break the cells, centrifuge, keep the pellet, and most of the host proteome has already been discarded. Because the aggregated protein is inactive, even a product that would kill the cell can be made this way. And purifying under denaturing conditions such as Ni-NTA in 6 M guanidinium carries fewer contaminants through. The bad news is that none of this has folded the protein. Refolding is a separate, difficult step that typically recovers only one to five per cent of the material, so what you gain in purification simplicity you lose several times over in yield.',
      answer_cn: '好消息是第一步纯化变得极其简单——把细胞打碎、离心、留下沉淀，宿主蛋白组的大部分已经被丢掉了。因为聚集态蛋白没有活性，连会杀死细胞的产物都能这样生产。而且在变性条件下纯化（比如 6 M 盐酸胍里的 Ni-NTA）带过去的杂质更少。坏消息是这一切都没有让蛋白折叠起来。复性是另外一个困难的步骤，得率通常只有 1–5%，所以你在纯化便利上赚到的，在产量上会成倍地赔回去。'
    }
  ],
  oral: {
    q_en: 'What are inclusion bodies, and why does the lecture insist they are not a failure?',
    q_cn: '什么是包涵体？为什么讲义坚持说它们不是失败？',
    model_en: 'Inclusion bodies are aggregates of misfolded recombinant protein that form in the cytoplasm of E. coli, appearing as dense white material in the pellet after lysis. They form for one of two reasons: overproduction overwhelms the cell\'s folding machinery, or the protein\'s own hydrophobic surfaces drive it to aggregate. The instinct is to treat them as a failed experiment, and the slide argues against that on three grounds. First, because aggregated protein is inactive, you can produce things that would otherwise kill the host — antimicrobials, DNases, proteases. Second, purification becomes trivial: break the cells, centrifuge, keep the pellet, and you have already discarded most of the soluble host proteome. Third, you can then purify under denaturing conditions, Ni-NTA in six molar guanidinium chloride for instance, which carries fewer contaminants through because nothing can ride along by protein-protein association. So the take-home message is that inclusion bodies can provide high-purity, stable starting material for refolding into active protein. I would add the qualification the slide does not make, though: all three advantages are about extraction, and none of them addresses folding. Refolding typically recovers only one to five per cent, so this is genuinely good news about purification and bad news about yield, which is exactly why there is a whole set of strategies for avoiding inclusion bodies in the first place.',
    checklist: ['Aggregates of misfolded protein in the E. coli cytoplasm', 'Dense white material in the pellet after lysis', 'Cause 1: overproduction overwhelms folding machinery', 'Cause 2: hydrophobic aggregation', 'Advantage 1: aggregated protein is inactive, so toxic products become possible', 'Advantage 2: purification is break, spin, keep the pellet', 'Advantage 3: denaturing purification leaves fewer contaminants', 'Slide message: not a failure, but high-purity stable starting material', 'The qualification: refolding recovers only 1-5%, so yield is the real cost']
  },
  bank: [
    { type: 'mcq',
      q_en: 'The slide says inclusion bodies are not a failure. What is the positive argument?',
      q_cn: '幻灯片说包涵体不是失败。正面的理由是什么？',
      options: ['The protein inside is already correctly folded and merely insoluble', 'One low-speed spin gives a dense pellet that is largely your protein', 'They shield the protein from unwanted glycosylation by the host', 'The pellet can be resuspended and used directly in activity assays'],
      answer: 1,
      optionNotes: {
        0: { en: 'If that were true you could resuspend the pellet and use it. The entire refolding workflow — 6 M guanidinium, a redox pair, dilution — exists because the chains inside the aggregate are not in their native state; they are held together by the hydrophobic surfaces a folded protein would have buried.', cn: '如果真是这样，把沉淀重悬起来就能用了。之所以还要走整套复性流程——6 M guanidinium、氧化还原对、稀释——正是因为聚集体里的链不是天然构象，它们靠的是本该被埋起来的疏水面互相粘在一起。' }
      },
      why_en: 'A single spin after lysis gives a dense white pellet that is mostly your product, which is a purification step you got for free, and the protein inside the aggregate is protected from proteolysis. What you pay for that is the refolding yield, so the honest framing is a different trade rather than a rescue.',
      why_cn: '裂解后一次离心就得到致密的白色沉淀，其中大部分是你的产物——等于白赚一步纯化，而且聚集体内部的蛋白还免受蛋白酶降解。代价是复性收率，所以诚实的表述是「另一种交换」而不是「一次挽救」。' },
    { type: 'mcq',
      q_en: 'Why do inclusion bodies form in the first place?',
      q_cn: '包涵体一开始为什么会形成？',
      options: ['Toxicity of the product to the host cell drives it into aggregates', 'Overproduction outruns the folding machinery, or hydrophobic surfaces aggregate', 'The promoter is too tightly repressed, so expression starts too late', 'The E. coli cytoplasm is oxidising, so disulfides form too early and lock the chain in the wrong shape'],
      answer: 1,
      optionRefs: { 2: '2-7', 3: '2-13' },
      why_en: 'It is a capacity problem, not a defect in the construct. Unfolded chains appear faster than chaperones can process them, exposed hydrophobic surfaces find each other, and aggregation wins the kinetic race against folding. Framing it that way is what makes the five solubility levers predictable rather than a list to memorise.',
      why_cn: '这是产能问题，不是构建体的缺陷。未折叠的多肽链出现得比分子伴侣处理得快，暴露的疏水表面彼此相遇，聚集在与折叠的动力学竞争中获胜。这样理解，才能把五个溶解度杠杆推导出来，而不是当清单去背。' },
    { type: 'mcq',
      q_en: 'How are inclusion bodies recognised at the bench?',
      q_cn: '在实验台上怎么识别包涵体？',
      options: ['A clear supernatant after the first spin', 'Dense white material in the pellet after lysis and centrifugation', 'A high-molecular-weight smear above the expected size on a reducing SDS-PAGE gel', 'Loss of His-tag signal on a western blot'],
      answer: 1,
      why_en: 'They are visibly dense and white, so the diagnosis is usually made before any gel is run. Confirmation is that the overexpressed band appears in the pellet fraction rather than the soluble fraction on SDS-PAGE.',
      why_cn: '它们呈明显的致密白色，所以通常在跑胶之前就能判断。确认方式是在 SDS-PAGE 上，过表达的那条带出现在沉淀部分而不是可溶部分。' },
    { type: 'short',
      q_en: 'Someone reports "the expression failed, it is all in inclusion bodies". What is wrong with that sentence?',
      q_cn: '有人说「表达失败了，全在包涵体里」。这句话哪里不对？',
      accept: ['expression', 'folding', 'purity', 'refold', 'yield'],
      answer_en: 'Two things are being conflated. Expression did not fail: if the protein is in inclusion bodies then transcription, translation and accumulation all worked, often extremely well, because inclusion bodies are typically a consequence of overproduction. What failed is folding, and that is a different problem with different fixes. Calling it an expression failure sends you off to change the promoter or the strain, when the real question is about the kinetic race between folding and aggregation. The second thing is that it may not be a failure at all. The slide is explicit that inclusion bodies can provide high-purity, stable starting material for refolding into active protein. The aggregate is dense, separates in a single low-speed spin, is largely your product, and is protected from proteolysis, so you have effectively been handed a purification step. The real cost is the refolding yield, typically only one to five per cent of the original amount, and that is what should be weighed against the alternative of chasing solubility in vivo by lowering the temperature, slowing induction, or adding a fusion partner. So the accurate sentence is that folding was outcompeted by aggregation, and the decision now is between improving solubility in the cell and refolding in the tube.',
      answer_cn: '这句话把两件事混为一谈。表达并没有失败：如果蛋白进了包涵体，说明转录、翻译和积累都成功了，而且往往非常成功，因为包涵体通常正是过量生产的结果。失败的是折叠，那是另一个问题，解法也不同。把它称作表达失败，会让你去改启动子或换菌株，而真正的问题是折叠与聚集之间的动力学竞争。第二点是，这未必算失败。幻灯片明确指出，包涵体可以提供高纯度、稳定的起始材料，用于复性成有活性的蛋白。聚集体致密，一次低速离心即可分离，其中大部分是你的产物，还免受蛋白酶降解——等于白得一步纯化。真正的代价是复性收率，通常只有原量的 1–5%，这才是应该拿来与另一条路（在体内靠降温、放慢诱导或加融合标签争取可溶性）作权衡的东西。所以准确的说法是：折叠输给了聚集，现在的决定是在「细胞内改善溶解度」和「试管里复性」之间做选择。'
    }
  ]
},

{
  id: '2-11',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.11',
  enTitle: 'The refolding workflow — everything is a fight about concentration',
  cnTitle: '复性流程——一切都是在跟浓度较劲',
  slides: 'L3 s.19–20',
  coverage: 'full',
  coverageNote: 'The five steps, the three refolding routes and the additives table are on the slides. The unifying reason the three routes differ — folding is intramolecular, aggregation is intermolecular — is not, and it is what makes the three memorable as one idea.',
  summary: {
    en: 'Refolding runs in five steps: overexpress, lyse and isolate the pellet, solubilise in a strong denaturant with reducing agent, refold by one of three routes, then characterise and optimise. The three routes — on-column, dialysis, rapid dilution — look unrelated until you notice that folding is an intramolecular process and aggregation an intermolecular one, so all three are strategies for keeping the effective protein concentration low. Yield is typically only 1 to 5 per cent.',
    cn: '复性分五步：过表达、裂解并分离沉淀、在强变性剂加还原剂的条件下溶解、用三种途径之一复性、最后表征和优化。这三种途径——柱上、透析、快速稀释——看起来毫不相干，直到你注意到折叠是分子内过程而聚集是分子间过程，于是三者都是在设法压低有效蛋白浓度。得率通常只有 1–5%。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.20', src: 'img/figures/L3_s20_1.webp' },
    { slide: 'L3 s.20', src: 'img/figures/L3_s20_2.webp' },
    { slide: 'L3 s.20', src: 'img/figures/L3_s20_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**折叠是分子内的，聚集是分子间的**——所以三条复性途径（柱上、透析、快速稀释）其实在打同一场仗：**把有效浓度压下去**。\n\n' +
            '得率通常只有 **1–5%**。',
  skipIt: '6 M 盐酸胍 / 8 M 尿素 / 10 mM DTT / pH 8.0 / 1 mg/mL 这一串条件，用时查方案即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Inclusion bodies/solubility**——**要会讲复性的逻辑和它的低得率**，但具体浓度不是考点。',
  explain: [
    {
      q: '三条途径看起来毫不相干，凭什么说它们在打同一场仗？',
      a: '**因为折叠和聚集对浓度的敏感程度完全不同，而这个差异就是全部的可乘之机。**\n\n' +
         '**折叠是分子内的**：一条链自己塌缩成型，不需要别人。它的速率跟浓度是**一次方**关系——说白了，每条链自己折自己的，浓度高低不改变单条链折叠的快慢。\n\n' +
         '**聚集是分子间的**：至少要两条链**相遇**才发生。它的速率至少跟浓度的**二次方**成正比。\n\n' +
         '**把浓度降一半会发生什么？**\n\n' +
         '折叠速率降到 1/2，聚集速率降到 **1/4**。\n\n' +
         '**折叠赢了一倍。**再降一半，再赢一倍。\n\n' +
         '所以整个复性技术的核心只有一句话：**想办法让每条链在折叠完成之前，尽量不要遇见另一条链。**\n\n' +
         '三条途径——柱上固定、慢慢透析、快速稀释——都是在实现这同一句话，只是手段不同。**看懂这一点，三条路就不用分开背了。**',
      takeaway: '折叠速率随浓度一次方，聚集随二次方。所以降浓度对折叠有利——三条路都是在做这件事。'
    },
    {
      q: '为什么说柱上复性是最优雅的一条？',
      a: '因为**另外两条是让聚集「不太可能」，而它是让聚集「不可能」。**\n\n' +
         '**透析**：浓度不变，只是慢慢把变性剂换掉。分子还在溶液里自由游动，随时可能撞上。所以浓度必须压在 1 mg/mL 以下，**而且照样很容易聚集**。\n\n' +
         '**快速稀释**：瞬间把浓度降几十倍，折叠这一边赢。代价是**体积巨大**——你为了复性 10 mg 蛋白可能要用掉几升缓冲液，之后还得把它浓缩回来，而浓缩过程本身又把浓度提上去了。\n\n' +
         '**柱上复性**：蛋白通过 His 标签被**一个一个固定在树脂上，彼此在物理上够不着**。这时候「有效浓度」实际上是零——不管你上样多少，两条链就是遇不到。然后你可以慢慢地、彻底地换掉变性剂。\n\n' +
         '**而且它顺带解决了体积问题**：蛋白一直在柱子上，最后一步洗脱下来本身就是浓缩的。\n\n' +
         '**代价是一个在很久以前就得做出的决定：你必须在设计构建体那天就加了 His 标签。**\n\n' +
         '而那一天，你还不知道这个蛋白会不会进包涵体。**这就是为什么「默认加个标签」是一个值得养成的习惯**——它保留的是你后来才会需要的选项。',
      takeaway: '柱上复性让分子物理上够不着，所以聚集不可能而不只是不太可能。前提是当初加了标签。'
    },
    {
      q: 'GSH/GSSG 那一对是干什么的？为什么叫「穿梭」？',
      trace: {
        what: '**还原型谷胱甘肽（GSH）和氧化型谷胱甘肽（GSSG）**，按一定比例**一起**加进复性缓冲液。注意关键在于「一起」——单加任何一个都不行。',
        from: '要理解它，先看二硫键配对是个什么问题：**这是个组合问题**。一个含 6 个半胱氨酸的蛋白，两两配对有 **15 种**方式，而**只有一种是对的**。\n\n如果只给氧化条件，那么**第一次撞上的两个 Cys 就被锁死了**——配错了也改不了。15 种里蒙对一种，得率可想而知。',
        to: '**GSH/GSSG 提供的是「可以反悔」的能力：**\n\n氧化型（GSSG）帮忙**形成**二硫键，还原型（GSH）帮忙**打开**二硫键。两者共存，于是二硫键可以不断地形成、断开、再形成——**一直试到落进能量最低的那个构象，也就是正确的配对为止**。\n\n这就是 redox shuffling（氧化还原穿梭）里「穿梭」的意思：不是一次定型，是反复试错。',
        family: '**细胞里用的是同一个思路。**E. coli 周质中有专门负责「把配错的二硫键拆开重来」的酶——这是第 2-13 节的内容。**体外用小分子，体内用酶，解决的是同一个组合问题。**'
      },
      takeaway: '二硫键配对是个组合问题，一次定型就只能碰运气。GSH/GSSG 给的是反复试错、直到试对的能力。'
    },
    {
      q: '精氨酸为什么算「化学伴侣」，而不是另一种变性剂？',
      a: '**因为它不把蛋白打开。**这是两者的分界线。\n\n' +
         '**变性剂（尿素、盐酸胍）的作用是让蛋白解折叠**——它们削弱维持结构的相互作用，把链拉开。所以复性时你必须**把它们去掉**。\n\n' +
         '**精氨酸不这么干。**它做的是**选择性地压制聚集中间体之间的相互作用**：让两条快要粘在一起的链粘不牢，但**不影响单条链自己折自己的**。\n\n' +
         '把它放回上面那场仗里看，就明白它为什么这么好用了：\n\n' +
         '**「只抑制分子间，不干扰分子内」——这正好是那场仗需要的武器。**降低浓度是间接地做这件事（减少相遇机会），精氨酸是直接地做这件事（相遇了也粘不住）。\n\n' +
         '**而这也正是「伴侣」这个词的含义**：真正的分子伴侣干的也是这件事——护着一条链别去跟别人粘，直到它自己折好。精氨酸用化学的方式做到了类似的效果，所以叫化学伴侣。\n\n' +
         '（甘油、PEG、蔗糖这些也常加，但它们更多是泛泛的稳定作用；精氨酸值得单独记住，是因为它的机制正好对准了问题。）',
      takeaway: '变性剂拆结构，精氨酸只拦分子间的粘连、不碰分子内的折叠。这正是「伴侣」的含义。'
    }
  ],
  points: [
    { term: 'Step 1 — overexpression', en: 'Express hard, so that insoluble aggregates form.', cn: '大力表达，让不溶性聚集体形成。' },
    { term: 'Step 2 — disruption and isolation', en: 'Lyse by French press, sonication or lysozyme, then centrifuge; the inclusion bodies are the dense white pellet. Wash with about 1 M urea and re-spin.', cn: '用法式压碎器、超声或溶菌酶裂解，然后离心；包涵体就是那团致密的白色沉淀。用约 1 M 尿素洗涤，再离心一次。' },
    { term: 'Step 3 — solubilisation', en: '6 M guanidinium chloride or 8 M urea, plus 10 mM DTT, at pH 8.0. Sonication and warming to 60 degrees. Final concentration about 1 mg/mL.', cn: '6 M 盐酸胍或 8 M 尿素，加 10 mM DTT，pH 8.0。配合超声并加热到 60 度。终浓度约 1 mg/mL。' },
    { term: 'Route A — on-column refolding', en: 'Immobilise on Ni-NTA, then slowly remove the denaturant while the protein stays bound.', cn: '固定在 Ni-NTA 上，然后在蛋白保持结合的状态下慢慢去除变性剂。' },
    { term: 'Route B — dialysis', en: 'Gradual removal of denaturant at 0.1 to 1 mg/mL. Prone to aggregation.', cn: '在 0.1–1 mg/mL 下逐渐去除变性剂。容易聚集。' },
    { term: 'Route C — rapid dilution', en: 'Fast mixing into refolding buffer. Effective, but large volumes are required.', cn: '快速混入复性缓冲液。有效，但需要很大的体积。' },
    { term: 'Additive — GSH/GSSG redox pair', en: 'Redox shuffling: allows disulfide bonds to form, break and re-form until the correct pairing is found.', cn: '氧化还原穿梭：让二硫键不断形成、断裂、重组，直到找到正确的配对。' },
    { term: 'Additive — 0.5 M arginine', en: 'Stabilisation; acts as a chemical chaperone.', cn: '起稳定作用；充当化学伴侣。' },
    { term: 'Other additives', en: 'Glycerol, PEG, ions and sucrose, for general stabilisation.', cn: '甘油、PEG、离子和蔗糖，用于一般性的稳定。' },
    { term: 'Yield', en: 'Typically only 1 to 5 per cent of the original amount.', cn: '通常只有原始量的 1–5%。' }
  ],
  beyondPoints: [
    { term: 'The single variable all three routes are fighting', en: 'Folding is intramolecular — one chain collapsing on itself. Aggregation is intermolecular — several chains sticking together. The rate of aggregation depends on concentration far more steeply than the rate of folding does, so the lower the concentration, the more folding wins.', cn: '折叠是分子内过程——一条链自己卷起来。聚集是分子间过程——多条链互相黏。聚集速率对浓度的依赖远比折叠陡峭，所以浓度越低，折叠越占优势。' },
    { term: 'How each route attacks it', en: 'Dialysis removes denaturant slowly but the protein concentration never changes, so it must be kept below 1 mg/mL and still aggregates readily. Rapid dilution drops the concentration tens of fold in an instant so folding wins, at the cost of enormous volumes that must later be concentrated back down. On-column refolding immobilises the molecules physically apart from one another so aggregation is impossible, then exchanges the denaturant slowly.', cn: '透析慢慢去除变性剂，但蛋白浓度全程不变，所以必须压在 1 mg/mL 以下，而且仍然容易聚集。快速稀释瞬间把浓度稀释几十倍，折叠获胜，代价是巨大的体积、之后还得浓缩回来。柱上复性把分子物理性地彼此隔开，聚集不可能发生，然后再慢慢置换变性剂。' },
    { term: 'On-column is the elegant one', en: 'It is the only route that makes aggregation physically impossible rather than merely unlikely — and it is a further reason to have put a His-tag on the construct from the start.', cn: '它是唯一让聚集在物理上不可能发生（而不只是不太可能）的途径——这也是「一开始就该加 His 标签」的又一个理由。' },
    { term: 'Why arginine is worth remembering separately', en: 'Unlike a denaturant it does not unfold the protein. It preferentially suppresses interactions between aggregation intermediates, which is exactly why it is called a chemical chaperone.', cn: '和变性剂不同，它不会让蛋白解折叠。它优先抑制聚集中间体之间的相互作用，这正是它被称为「化学伴侣」的原因。' }
  ],
  terms: [
    { en: 'Refolding (renaturation)', cn: '复性', def_en: 'Recovering native structure from denatured protein by removing the denaturant under conditions that favour folding over aggregation.', def_cn: '在有利于折叠而非聚集的条件下去除变性剂，从变性蛋白恢复天然结构。' },
    { en: 'Chemical chaperone', cn: '化学伴侣', def_en: 'A small molecule such as 0.5 M arginine that suppresses aggregation without denaturing the protein, by disfavouring contacts between aggregation intermediates.', def_cn: '像 0.5 M 精氨酸这样的小分子，通过不利于聚集中间体之间的接触来抑制聚集，同时不使蛋白变性。' },
    { en: 'Redox shuffling', cn: '氧化还原穿梭', def_en: 'Supplying both reduced and oxidised glutathione so disulfide bonds can repeatedly break and re-form until the thermodynamically correct pairing is reached.', def_cn: '同时提供还原型和氧化型谷胱甘肽，使二硫键能反复断裂和重组，直到达成热力学上正确的配对。' },
    { en: 'Chaotrope', cn: '离液剂', def_en: 'A substance such as guanidinium chloride or urea that disrupts the hydrogen-bonded water network and thereby unfolds proteins.', def_cn: '盐酸胍或尿素这类破坏水的氢键网络、从而使蛋白解折叠的物质。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does rapid dilution favour folding over aggregation?',
      q_cn: '为什么快速稀释有利于折叠而不利于聚集？',
      options: ['It raises the temperature of the refolding mixture, so folding finishes before aggregates can form', 'Aggregation is intermolecular and far more concentration-dependent than folding', 'It strips the denaturant away completely in one single step', 'The dilution buffer supplies molecular chaperones that fold the protein'],
      answer: 1,
      optionNotes: {
        2: { en: 'Dialysis removes the denaturant too, and it is the route most prone to aggregation, so denaturant removal cannot be what makes dilution work. The variable dilution changes and dialysis does not is the concentration of unfolded protein, and aggregation is the term that depends on it.', cn: '透析同样能去掉变性剂，而且它恰恰是最容易聚集的那条路，所以让稀释奏效的不可能是去除变性剂本身。稀释改变而透析不改变的量是未折叠蛋白的浓度，而聚集正是依赖这个量的那一项。' }
      },
      why_en: 'Folding involves one chain collapsing on itself and is essentially concentration-independent; aggregation requires several chains to meet. Dropping the concentration tens of fold therefore penalises aggregation far more than folding.',
      why_cn: '折叠是一条链自己卷起来，基本与浓度无关；聚集则需要多条链相遇。把浓度降低几十倍，对聚集的惩罚远大于对折叠的惩罚。' },
    { type: 'mcq',
      q_en: 'What makes on-column refolding the most elegant of the three routes?',
      q_cn: '为什么柱上复性是三种途径中最优雅的？',
      options: ['It is the fastest of the three routes to carry out in practice', 'Immobilisation holds the molecules physically apart so they cannot meet', 'It needs no denaturant at any stage, so the washed pellet can be loaded onto the column directly', 'It recovers close to 100 per cent of the loaded protein'],
      answer: 1,
      why_en: 'Dialysis and dilution both reduce the probability of aggregation. Immobilisation on the resin separates molecules in space, so they cannot meet at all — and it is one more reason to have designed in a His-tag.',
      why_cn: '透析和稀释都只是降低聚集的概率。固定在树脂上是把分子在空间上分开，让它们根本无法相遇——这也是当初就该设计 His 标签的又一个理由。' },
    { type: 'mcq',
      q_en: 'What is the role of the GSH/GSSG pair in a refolding buffer?',
      q_cn: 'GSH/GSSG 这一对在复性缓冲液里起什么作用？',
      options: ['It keeps every cysteine in the chain permanently reduced, so no wrong pairing can ever form', 'It permits redox shuffling until the disulfides are correctly paired', 'It removes the last traces of denaturant from the buffer', 'It acts as the chemical chaperone in the refolding buffer'],
      answer: 1,
      optionNotes: {
        0: { en: 'That is what a plain reducing agent such as DTT does, and with it you get no disulfides at all. The point of supplying both forms is that a bond can be undone: the protein has to be able to leave a wrong pairing, not merely be prevented from making one.', cn: '那是 DTT 这类单纯还原剂干的事，结果是一个二硫键也形成不了。同时给氧化型和还原型，意义在于连上的键还能拆开：蛋白需要能从错误配对里退出来，而不是一开始就被禁止配对。' }
      },
      why_en: 'Supplying both the reduced and oxidised forms lets disulfide bonds exchange repeatedly rather than locking in whichever pairing forms first, so the protein can reach the correct arrangement. Arginine, not glutathione, is the chemical chaperone.',
      why_cn: '同时提供还原型和氧化型，让二硫键能反复交换，而不是锁死在最先形成的那种配对上，蛋白因此能达到正确的排列。化学伴侣是精氨酸，不是谷胱甘肽。' },
    { type: 'short',
      q_en: 'Name the three refolding methods and the single variable they are all fighting.',
      q_cn: '说出三种复性方法，以及它们共同对抗的那个变量。',
      accept: ['concentration', 'dialysis', 'dilution', 'on-column', 'aggregation'],
      answer_en: 'On-column refolding, dialysis and rapid dilution, and the variable is protein concentration. Folding is an intramolecular process, one chain collapsing on itself, whereas aggregation is intermolecular and requires several chains to meet, so the rate of aggregation depends on concentration far more steeply. Dialysis removes denaturant slowly but never changes the concentration, so it must be held below one milligram per millilitre and still aggregates. Rapid dilution drops the concentration tens of fold instantly, at the cost of very large volumes. On-column refolding immobilises the molecules apart from each other so they physically cannot aggregate, then exchanges the buffer slowly.',
      answer_cn: '柱上复性、透析和快速稀释，而那个变量是蛋白浓度。折叠是分子内过程——一条链自己卷起来；聚集是分子间过程，需要多条链相遇，所以聚集速率对浓度的依赖陡峭得多。透析慢慢去除变性剂但浓度全程不变，所以必须压在 1 mg/mL 以下，而且仍会聚集。快速稀释瞬间把浓度降低几十倍，代价是体积非常大。柱上复性把分子彼此隔开，物理上无法聚集，然后再慢慢置换缓冲液。'
    }
  ],
  oral: {
    q_en: 'Walk me through refolding protein from inclusion bodies.',
    q_cn: '讲一遍从包涵体复性蛋白的过程。',
    model_en: 'There are five steps. You overexpress so that insoluble aggregates form. You lyse the cells — French press, sonication or lysozyme — and centrifuge, and the inclusion bodies are the dense white pellet; you wash that with about one molar urea and re-spin. You solubilise in a strong denaturant, six molar guanidinium chloride or eight molar urea, with ten millimolar DTT at pH eight, using sonication and warming to sixty degrees, ending around one milligram per millilitre. Then you refold, by one of three routes, and finally characterise and optimise. The three routes look unrelated but they are one idea. Folding is intramolecular, a single chain collapsing on itself, whereas aggregation is intermolecular and requires several chains to meet, so the rate of aggregation depends on concentration far more steeply than folding does — which means every method is a strategy for keeping the effective concentration low. Dialysis removes the denaturant gradually but the protein concentration never changes, so you must stay below one milligram per millilitre and it still aggregates readily. Rapid dilution drops the concentration tens of fold in an instant so folding wins, but the volumes become enormous and have to be concentrated back down afterwards. On-column refolding immobilises the protein on Ni-NTA so the molecules are physically held apart and cannot aggregate at all, then slowly exchanges out the denaturant — the most elegant of the three, and another reason to have designed in a His-tag. As for additives: a glutathione redox pair allows disulfides to shuffle until correctly paired, and half-molar arginine acts as a chemical chaperone, suppressing contacts between aggregation intermediates without denaturing the protein. Glycerol, PEG and sucrose give general stabilisation. And the honest number is that yield is typically one to five per cent, which tells you how hard this step is and why people would rather find a way to keep the protein soluble in the first place.',
    checklist: ['Five steps: overexpress, isolate pellet, solubilise, refold, characterise', 'Wash inclusion bodies with ~1 M urea, re-spin', 'Solubilise: 6 M GdnHCl or 8 M urea, 10 mM DTT, pH 8, ~1 mg/mL', 'Key idea: folding is intramolecular, aggregation intermolecular', 'So all three routes are fighting concentration', 'Dialysis: slow, concentration unchanged, still aggregates', 'Rapid dilution: instant dilution wins, but huge volumes', 'On-column: molecules held apart, aggregation physically impossible', 'Additives: GSH/GSSG shuffling, 0.5 M arginine as chemical chaperone', 'Yield typically only 1-5%']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why is on-column refolding described as the elegant route?',
      q_cn: '为什么柱上复性被称为最优雅的路线？',
      options: ['It is the fastest of the three routes from pellet to folded protein', 'Immobilisation on the resin keeps unfolded molecules from ever meeting', 'The resin catalyses the folding as an artificial chaperone', 'It removes any need for a glutathione redox pair in the buffer'],
      answer: 1,
      why_en: 'Dialysis and rapid dilution both manage aggregation statistically, by keeping the concentration low enough that collisions are rare. Immobilisation removes the collision itself: each chain is anchored to the matrix and cannot reach another. It is also a further argument for having put a His-tag on the construct from the start.',
      why_cn: '透析和快速稀释都是在统计意义上管理聚集，靠把浓度压低到碰撞很少发生。固定化则消除了碰撞本身：每条链都锚在基质上，够不到另一条。这也是「一开始就该给构建体加 His 标签」的又一个理由。' },
    { type: 'mcq',
      q_en: 'What is the GSH/GSSG redox pair for during refolding?',
      q_cn: '复性过程中 GSH/GSSG 氧化还原对的作用是什么？',
      options: ['It holds every cysteine reduced so that no disulfide can form and none can be mispaired', 'Redox shuffling — disulfides can break and re-form until correctly paired', 'It scavenges the denaturant remaining after solubilisation', 'It acts as a chemical chaperone, in the same way arginine does'],
      answer: 1,
      why_en: 'A purely reducing environment gives no disulfides at all and a purely oxidising one locks in whichever pairing forms first, which for a multi-cysteine protein is usually wrong. A mixed pair keeps the bonds exchangeable, so the protein can search for the native pairing rather than being trapped in the first one it makes. Arginine is the chemical chaperone; that is a separate additive.',
      why_cn: '完全还原的环境根本不形成二硫键，完全氧化的环境会把最先形成的配对锁死——对多半胱氨酸蛋白来说那通常是错的。混合的氧化还原对让二硫键保持可交换，于是蛋白可以去搜索天然配对，而不是被困在第一次形成的那一组里。作为化学分子伴侣的是精氨酸，那是另一个添加剂。' },
    { type: 'mcq',
      q_en: 'Dialysis and rapid dilution both remove denaturant. What is the key difference in how they control aggregation?',
      q_cn: '透析和快速稀释都在去除变性剂。它们控制聚集的方式关键差别是什么？',
      options: ['Dialysis removes the denaturant faster than rapid dilution does', 'Dialysis leaves the protein concentration unchanged; dilution drops it sharply', 'Rapid dilution needs a glutathione redox pair while dialysis does not', 'Dialysis only works for proteins that carry an affinity tag, since the tag is what keeps them apart'],
      answer: 1,
      optionNotes: {
        3: { en: 'The tag requirement belongs to the third route, on-column refolding, where the protein must bind the resin in order to be held apart from its neighbours. Dialysis and dilution both act on free protein in solution and care about nothing but concentration and how fast the denaturant leaves.', cn: '需要标签的是第三条路——on-column 复性，蛋白必须结合到填料上才能跟旁边的分子隔开。透析和稀释处理的都是溶液里游离的蛋白，只关心浓度和变性剂移除的快慢。' }
      },
      why_en: 'Aggregation is second order in unfolded protein, so concentration is the variable that matters. Dialysis changes only the denaturant and leaves you fighting at whatever concentration you started, which is why it is prone to aggregation. Rapid dilution attacks the concentration term directly, which works well but leaves you with a large dilute volume to concentrate again afterwards.',
      why_cn: '聚集对未折叠蛋白是二级反应，所以浓度才是关键变量。透析只改变变性剂浓度，蛋白浓度不变，你只能在起始浓度上硬扛，这就是它容易聚集的原因。快速稀释直接压低浓度项，效果好，但代价是留下一大罐稀溶液需要再浓缩回来。' },
    { type: 'short',
      q_en: 'Walk through the refolding workflow and say what the recurring problem is at every step.',
      q_cn: '走一遍复性流程，并说明每一步反复出现的核心问题是什么。',
      accept: ['concentration', 'aggregat', 'guanidin', 'urea', 'DTT', 'arginine'],
      answer_en: 'The recurring problem is concentration, and once you see that the whole workflow reads as one argument. Step one is to express hard, deliberately, so that insoluble aggregates form. Step two is disruption and isolation: lyse by French press, sonication or lysozyme, spin, and take the dense white pellet, then wash it with about one molar urea and re-spin to remove loosely associated contaminants. Step three is solubilisation in six molar guanidinium chloride or eight molar urea with ten millimolar DTT at pH eight, with sonication and warming to sixty degrees, taking the protein to about one milligram per millilitre. Note that even here the final concentration is specified, because it sets up everything that follows. Then there are three routes. Dialysis removes denaturant gradually but the protein concentration never changes, so it has to be held below one milligram per millilitre and it still aggregates readily. Rapid dilution mixes fast into refolding buffer, which drops the concentration at the critical moment and works well, but you need large volumes and then have to concentrate again. On-column refolding immobilises the protein on Ni-NTA and slowly removes the denaturant while it stays bound, which is the only route where aggregation is physically impossible rather than merely improbable, since two anchored chains cannot meet. Additives all attack the same race: the GSH and GSSG pair allows disulfides to form, break and re-form until the correct pairing is found; half-molar arginine acts as a chemical chaperone; glycerol, PEG, ions and sucrose stabilise generally. And the honest number at the end is that recovery is typically only one to five per cent of what you started with, which is the real cost of the whole approach.',
      answer_cn: '反复出现的问题是浓度，看清这一点之后整个流程就变成了一条连贯的论证。第一步是刻意大量表达，让不溶的聚集体形成。第二步是破碎与分离：用 French press、超声或溶菌酶裂解，离心，取致密的白色沉淀，再用约 1 M 尿素洗涤并重新离心，去掉松散结合的杂质。第三步是溶解：6 M 盐酸胍或 8 M 尿素，加 10 mM DTT，pH 8.0，配合超声并加热到 60 度，把蛋白浓度调到约 1 mg/mL——注意这里连终浓度都写明了，因为它决定了后面的一切。接着有三条路线。透析逐渐去除变性剂，但蛋白浓度始终不变，所以必须压在 1 mg/mL 以下，而且仍然很容易聚集。快速稀释把样品迅速混入复性缓冲液，在关键时刻压低了浓度，效果不错，但需要很大体积，之后还要重新浓缩。柱上复性把蛋白固定在 Ni-NTA 上，在其保持结合的状态下缓慢去除变性剂，这是唯一一条让聚集在物理上不可能（而不只是概率低）的路线，因为两条被锚住的链根本碰不到一起。各种添加剂攻击的是同一场竞赛：GSH/GSSG 对让二硫键能够形成、断开、再形成，直到找到正确的配对；0.5 M 精氨酸作为化学分子伴侣；甘油、PEG、离子和蔗糖起一般性稳定作用。最后一个诚实的数字是：回收率通常只有起始量的 1–5%，这就是整套方法真正的代价。'
    }
  ]
},

{
  id: '2-12',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.12',
  enTitle: 'Solubility problems — five levers, one mechanism',
  cnTitle: '溶解性问题——五个手段，一个机制',
  slides: 'L3 s.21–22',
  coverage: 'full',
  coverageNote: 'The five strategies and their specific parameters are on the slides, including the quoted instruction to adjust conditions rather than abandon the construct. That they all work by lowering the instantaneous concentration of unfolded chains is the beyond-the-slides unification.',
  summary: {
    en: 'When a protein is insoluble or inactive, adjust the expression conditions rather than abandoning the construct. There are five levers: lower the temperature, slow the rate of synthesis, add a folding-promoting fusion partner, co-express chaperones, and only as a last resort change the expression system. All five work for the same reason — folding and aggregation compete kinetically, and every lever either reduces the supply of unfolded chains or increases the capacity to process them.',
    cn: '当蛋白不可溶或没有活性时，应该调整表达条件而不是放弃这个构建体。有五个手段：降低温度、放慢合成速率、加上促进折叠的融合伴侣、共表达分子伴侣，以及作为最后手段更换表达系统。五者起作用的原因相同——折叠和聚集在动力学上竞争，而每一个手段要么减少未折叠链的供给，要么提高处理它们的能力。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.21', src: 'img/figures/L3_s21_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '五个手段只有两类：**让未折叠链来得慢一点**（降温、减 IPTG），或者**提高处理它们的能力**（溶解性标签、共表达伴侣蛋白）。\n\n' +
            '第五个「换表达系统」是换一家店，所以是**最后手段，不是第一步**。',
  skipIt: 'DnaK/DnaJ/GrpE、GroEL/GroES 这些伴侣蛋白组合的名字、以及具体的温度时间组合，用时查即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Inclusion bodies/solubility**——**「不可溶了怎么办」这件事是被点名的**，要能讲出手段和它们的共同机制。',
  explain: [
    {
      q: '五个手段为什么可以归成两类？',
      a: '**想象一个收银台就够了。**\n\n' +
         '**排队的顾客** = 刚从核糖体出来、还没折好的新生肽链。\n\n' +
         '**收银员** = 细胞的折叠机器（伴侣蛋白）。\n\n' +
         '**堵塞** = 包涵体。它发生在**顾客来得比收银员处理得快**的时候（上一节讲过）。\n\n' +
         '**要缓解堵塞，逻辑上只有两个办法：**\n\n' +
         '**一、让顾客来得慢一点** —— 降低温度、减少 IPTG。这两个都在**减少供给**。\n\n' +
         '**二、多开几个收银台** —— 共表达伴侣蛋白（字面意义上的多开收银台）、加溶解性标签（相当于给每个顾客配一个自助结账机）。这两个都在**提高处理能力**。\n\n' +
         '**第五个手段——换表达系统——是换一家店。**所以它当然是最后手段。\n\n' +
         '**这个框架的好处是你可以自己往里填新手段。**看到一个没见过的办法，先问它是在减少供给还是提高能力，位置立刻就定下来了。',
      takeaway: '要么顾客来得慢（降温、减 IPTG），要么收银台多开（伴侣蛋白、溶解性标签）。换系统是换店。'
    },
    {
      q: '为什么降温几乎总是第一个该试的？',
      a: '因为它**一个动作产生两个收益**，而其它手段只有一个。\n\n' +
         '**收益一：减少供给，而且是净减少。**降温会让转录和翻译变慢，也会让折叠变慢——但**它让合成变慢的程度大于让折叠变慢的程度**。净效果是任一时刻堆积的未折叠链更少。\n\n' +
         '**收益二：直接降低聚集速率。**这一条常被忽略。分子运动变慢，相遇的频率下降；而且**疏水作用本身就随温度降低而减弱**——这是疏水效应的一个特点，温度低时它没那么强。所以撞上了也没那么容易粘住。\n\n' +
         '**减少 IPTG 只作用在供给那一边**，对聚集速率本身毫无影响。\n\n' +
         '再加上降温的操作成本几乎为零（把摇床温度调低、改成过夜），**它的性价比在五个手段里是最高的**。\n\n' +
         '所以标准的排障顺序是：**先降温（37 °C 4 h → 30 °C 4 h → 16 °C 过夜），不行再动别的。**如果 16 °C 还不够，ArcticExpress 让你能下到 10–12 °C，而且补上了低温下自家伴侣蛋白失灵这个副作用（第 2-5 节）。',
      takeaway: '降温同时减少供给和降低聚集速率，而且几乎零成本。减 IPTG 只管供给那一边。'
    },
    {
      q: '溶解性标签凭什么能带动整个融合蛋白？还有它的坑在哪？',
      a: '**先说为什么有效，关键在位置。**\n\n' +
         'MBP（43 kDa）和 thioredoxin 都是**高度可溶、折叠很快**的蛋白。把它们融合在**N 端**，就利用了一个时间上的优势：\n\n' +
         '**翻译是从 N 端开始的。**所以标签**先从核糖体出来、先折好**。等你的目标蛋白开始一点点冒出来时，它旁边已经有一块折叠完成、高度亲水的表面在那里了——**相当于一个局部的成核点，把整个融合体拽在溶液里。**\n\n' +
         '**放在 C 端就没有这个「先到」的优势**，效果差很多。这是一个位置决定成败的例子。\n\n' +
         '**现在说坑，而且这个坑很阴：**\n\n' +
         '**标签往往比你的蛋白还大**（MBP 43 kDa，很多目标蛋白才 20–30 kDa）。所以最后你几乎一定要把它切掉（第 2-41 节）。\n\n' +
         '**而切掉之后，蛋白有可能当场沉淀。**\n\n' +
         '因为一直是标签在替它撑着溶解度。你以为自己解决了溶解性问题，其实只是**把问题推迟到了切标签那一天**。\n\n' +
         '**所以用溶解性标签时，一定要在小量下先试一次切割**，确认切完还溶得住，再去做大规模制备。否则你会在整个流程的最后一步、投入最多的时候失败。',
      takeaway: 'N 端标签先折好、当成核点，所以必须放 N 端。坑是切掉标签后蛋白可能当场沉淀。'
    },
    {
      q: '为什么「换表达系统」被明确写成最后手段？',
      a: '因为**成本差了一到两个数量级。**\n\n' +
         '前面四个手段的代价是：**几天时间，几个试管，一个已经在手的构建体。**调个温度、少加点 IPTG、换个菌株、加个标签——最贵的也就是重新克隆一次。\n\n' +
         '换表达系统的代价是：**回到第 2-1 节那条曲线上，往右走一格。**重新设计构建体、换载体系统、建细胞株或者做病毒，时间从 2 天变成几周到几个月，成本上一个量级。\n\n' +
         '**而且换过去并不保证成功。**「每个蛋白都有自己的脾气」（第 2-3 节）在新系统里同样成立——你可能花三个月搬到昆虫细胞，发现它在那里也不表达。\n\n' +
         '所以理性的顺序是：**先把便宜的手段穷尽。**\n\n' +
         '这跟第 2-4 节那条是同一个道理：**E. coli 的真正优势是你负担得起在里面失败很多次。**把这些便宜的尝试做满，本身就是在用最小的代价收集信息——就算最后还是要换系统，你至少已经知道了这个蛋白怕什么。\n\n' +
         '**口试里被问到「蛋白不可溶怎么办」，按成本从低到高排着说**，比随便列五个手段更像一个做过实验的人。',
      takeaway: '前四个手段是几天几个试管，换系统是几周到几个月而且不保证成功。按成本从低到高排。'
    }
  ],
  points: [
    { term: 'The governing instruction', en: 'Quoted from the slide: when your protein is insoluble or inactive, adjust expression conditions rather than abandoning the construct.', cn: '幻灯片原话：当你的蛋白不可溶或没有活性时，调整表达条件，而不是放弃这个构建体。' },
    { term: 'Lower the temperature', en: 'Typical is 37 degrees for 4 hours. Try 30 degrees for 4 hours, 16 degrees overnight, or 12 degrees overnight in ArcticExpress cells.', cn: '常规是 37 度 4 小时。可以试 30 度 4 小时、16 度过夜，或者在 ArcticExpress 细胞里 12 度过夜。' },
    { term: 'Decrease the rate of synthesis', en: 'Lower the IPTG, in the range 50 micromolar to 1 millimolar.', cn: '降低 IPTG 浓度，范围是 50 µM 到 1 mM。' },
    { term: 'The T7 caveat', en: 'The T7 system is not well suited to tunable expression, so use Tuner(DE3) cells, which lack the lac permease, for concentration-dependent homogeneous induction.', cn: 'T7 系统不适合做可调表达，所以要用缺失乳糖透过酶的 Tuner(DE3) 细胞，才能得到浓度依赖的、均一的诱导。' },
    { term: 'Folding-promoting fusions', en: 'Thioredoxin, maltose-binding protein (MBP), and the HALO-tag.', cn: '硫氧还蛋白、麦芽糖结合蛋白（MBP）和 HALO 标签。' },
    { term: 'Co-express chaperones', en: 'DnaK/DnaJ/GrpE and GroEL/GroES, for example via the Takara chaperone plasmid set.', cn: 'DnaK/DnaJ/GrpE 和 GroEL/GroES，例如通过 Takara 的伴侣蛋白质粒套装。' },
    { term: 'Change the expression system', en: 'The last resort, not the first move.', cn: '最后的手段，不是第一步。' }
  ],
  beyondPoints: [
    { term: 'The shared mechanism', en: 'Folding and aggregation compete kinetically. Aggregation wins whenever unfolded chains accumulate faster than they can be folded. Every one of the five levers acts on that race.', cn: '折叠和聚集在动力学上竞争。只要未折叠链积累的速度快于它们被折叠的速度，聚集就获胜。五个手段每一个都作用于这场竞赛。' },
    { term: 'Lower temperature acts on both sides', en: 'It slows transcription and translation more than it slows folding, and it slows aggregation directly. Fewer unfolded chains are present at any one moment.', cn: '它减慢转录和翻译的程度大于减慢折叠的程度，同时还直接减慢聚集。任一时刻存在的未折叠链更少。' },
    { term: 'Less IPTG is the same effect, different lever', en: 'Fewer nascent chains per unit time. It reduces supply rather than increasing capacity.', cn: '单位时间内新生链更少。它减少的是供给，而不是提高处理能力。' },
    { term: 'Why solubility tags work', en: 'MBP and thioredoxin are highly soluble, fast-folding proteins. Fused at the N-terminus they emerge from the ribosome first and fold first, acting as a local nucleus that keeps the whole fusion in solution.', cn: 'MBP 和硫氧还蛋白本身极易溶、折叠很快。融合在 N 端时它们最先从核糖体出来、最先折叠，充当一个局部的成核点，把整个融合蛋白拉在可溶部分里。' },
    { term: 'Chaperones raise capacity', en: 'They increase the cell\'s folding capacity so that the machinery is no longer the bottleneck. Two routes, one goal: temperature and IPTG reduce supply, tags and chaperones raise throughput.', cn: '它们提高细胞的折叠能力，使折叠机器不再是瓶颈。两条路，同一个目标：降温和减 IPTG 是减少供给，融合标签和伴侣蛋白是提高处理能力。' }
  ],
  terms: [
    { en: 'Solubility tag', cn: '溶解性标签', def_en: 'A highly soluble fast-folding fusion partner such as MBP or thioredoxin, placed at the N-terminus so it folds first and keeps the fusion in solution.', def_cn: '像 MBP 或硫氧还蛋白这样极易溶、折叠快的融合伴侣，放在 N 端使其最先折叠，把融合蛋白留在可溶部分。' },
    { en: 'Kinetic competition', cn: '动力学竞争', def_en: 'The race between folding and aggregation. Aggregation wins whenever unfolded chains accumulate faster than the cell can fold them.', def_cn: '折叠与聚集之间的竞赛。只要未折叠链积累得比细胞折叠它们更快，聚集就获胜。' },
    { en: 'Chaperone', cn: '分子伴侣', def_en: 'A protein that assists folding without being part of the final structure. DnaK/DnaJ/GrpE and GroEL/GroES are the two E. coli systems that can be co-expressed.', def_cn: '协助折叠但不属于最终结构一部分的蛋白。DnaK/DnaJ/GrpE 和 GroEL/GroES 是大肠杆菌中可以共表达的两套系统。' },
    { en: 'Nascent chain', cn: '新生肽链', def_en: 'A polypeptide still being synthesised on the ribosome, not yet folded. Its instantaneous concentration is what all five solubility strategies act on.', def_cn: '仍在核糖体上合成、尚未折叠的多肽。它的瞬时浓度正是五种溶解性策略共同作用的对象。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does lowering the expression temperature improve solubility?',
      q_cn: '为什么降低表达温度能改善溶解性？',
      options: ['It denatures the host proteases that would otherwise degrade the folded product', 'It slows synthesis more than it slows folding, and slows aggregation as well', 'It raises the plasmid copy number, so there is more template per cell', 'It shifts the cytoplasm into an oxidising state that favours disulfide bonding'],
      answer: 1,
      optionRefs: { 0: '2-28', 2: '1-9', 3: '2-13' },
      why_en: 'It acts on both sides of the kinetic competition — reducing the supply of nascent chains relative to folding, and slowing the aggregation reaction itself. That is why it is usually the first thing to try.',
      why_cn: '它同时作用于动力学竞争的两端——降低新生链相对于折叠的供给速度，同时直接减慢聚集反应本身。这就是为什么它通常是第一个该试的。' },
    { type: 'mcq',
      q_en: 'Why must a solubility tag such as MBP be fused at the N-terminus?',
      q_cn: '为什么像 MBP 这样的溶解性标签必须融合在 N 端？',
      options: ['Because the stop codon sits at the C-terminus and cannot be moved from there', 'Because it emerges first and is already folded when your protein appears', 'Because amylose resin binds MBP only when the MBP sits at the N-terminus', 'Because proteases attack the N-terminus, so the tag has to occupy it'],
      answer: 1,
      optionRefs: { 2: '2-37' },
      why_en: 'Translation proceeds N to C, so an N-terminal partner is out of the ribosome and folded before your protein appears. A fast-folding highly soluble domain in that position acts as a local solubilising nucleus for the whole fusion.',
      why_cn: '翻译从 N 端向 C 端进行，所以 N 端的伴侣在你的蛋白出现之前就已经出了核糖体并折叠好。一个折叠快、极易溶的结构域在这个位置上，就成了整个融合蛋白的局部增溶成核点。' },
    { type: 'mcq',
      q_en: 'Why are Tuner(DE3) cells recommended when you want to reduce the rate of synthesis in a T7 system?',
      q_cn: '在 T7 系统里想放慢合成速率时，为什么推荐用 Tuner(DE3) 细胞？',
      options: ['They grow faster, so each cell accumulates less of the product overall', 'They lack lac permease, so induction is graded with IPTG instead of all-or-none', 'They carry additional chaperones that raise the folding capacity of the host cell', 'They have an oxidising cytoplasm of the kind Origami and SHuffle strains have'],
      answer: 1,
      optionRefs: { 2: '2-5', 3: '2-5' },
      why_en: 'In an ordinary strain, lowering IPTG changes how many cells switch on rather than how much each expresses, because LacY import is self-amplifying. Deleting lacY makes uptake passive and proportional, so the whole population responds in a graded way.',
      why_cn: '在普通菌株里，降低 IPTG 改变的是「多少细胞被开启」而不是「每个细胞表达多少」，因为 LacY 的输入是自我放大的。敲掉 lacY 之后摄取变成被动且成比例，整个群体的响应就是渐变的。' },
    { type: 'short',
      q_en: 'Give five ways to improve solubility and the one mechanism they share.',
      q_cn: '说出五种改善溶解性的方法，以及它们共有的那个机制。',
      accept: ['temperature', 'IPTG', 'fusion', 'chaperone', 'change system', 'unfolded', 'kinetic'],
      answer_en: 'Lower the temperature, from thirty-seven down to thirty, sixteen or even twelve degrees. Decrease the rate of synthesis by lowering IPTG, using Tuner cells if you are on T7. Use a folding-promoting fusion such as thioredoxin, MBP or the HALO-tag. Co-express chaperones, DnaK/DnaJ/GrpE or GroEL/GroES. And as a last resort change the expression system. The shared mechanism is that folding and aggregation compete kinetically, and aggregation wins whenever unfolded chains accumulate faster than they can be folded. Lowering temperature and IPTG reduce the supply of unfolded chains; fusion tags and chaperones increase the capacity to process them. Two routes, one goal — lowering the instantaneous concentration of unfolded chains.',
      answer_cn: '降低温度，从 37 度降到 30、16 甚至 12 度。通过降低 IPTG 减慢合成速率，如果用的是 T7 系统就配合 Tuner 细胞。使用促进折叠的融合伴侣，如硫氧还蛋白、MBP 或 HALO 标签。共表达分子伴侣，DnaK/DnaJ/GrpE 或 GroEL/GroES。最后的手段是更换表达系统。共有的机制是：折叠和聚集在动力学上竞争，只要未折叠链积累得比折叠更快，聚集就获胜。降温和减 IPTG 减少未折叠链的供给；融合标签和伴侣蛋白提高处理它们的能力。两条路，同一个目标——压低未折叠链的瞬时浓度。'
    }
  ],
  oral: {
    q_en: 'Your protein is expressing but it is all insoluble. What do you do?',
    q_cn: '你的蛋白表达出来了，但全都不可溶。你怎么办？',
    model_en: 'The instruction the lecture gives is to adjust the expression conditions rather than abandon the construct, and there are five levers. First, lower the temperature: the standard thirty-seven degrees for four hours becomes thirty degrees for four hours, or sixteen degrees overnight, or twelve degrees overnight if you move to ArcticExpress cells with their cold-adapted chaperonins. Second, decrease the rate of synthesis by lowering IPTG, anywhere from fifty micromolar to one millimolar — with the caveat that the T7 system is not well suited to tunable expression, so you would move to Tuner cells, which lack lac permease and therefore give homogeneous concentration-dependent induction. Third, use a folding-promoting fusion: thioredoxin, maltose-binding protein or a HALO-tag. Fourth, co-express chaperones — DnaK, DnaJ and GrpE, or GroEL and GroES, available as ready-made plasmid sets. Fifth and last, change the expression system, but that is a last resort rather than a first move. What makes this worth understanding rather than memorising is that all five work for the same reason. Folding and aggregation compete kinetically, and aggregation wins whenever unfolded chains accumulate faster than the cell can fold them. Lowering the temperature slows transcription and translation more than it slows folding, and slows aggregation directly. Less IPTG means fewer nascent chains per unit time. Both of those reduce the supply. Solubility tags work because MBP and thioredoxin are highly soluble and fast-folding, and fused at the N-terminus they emerge from the ribosome first and fold first, acting as a local nucleus that keeps the whole fusion in solution. Chaperones simply raise the cell\'s folding capacity so the machinery stops being the bottleneck. So it is two routes to one goal: reduce the supply of unfolded chains, or increase the throughput for handling them.',
    checklist: ['Adjust conditions, do not abandon the construct', 'Lever 1: lower temperature — 30 C/4 h, 16 C overnight, 12 C in ArcticExpress', 'Lever 2: less IPTG (50 µM to 1 mM); use Tuner cells on T7', 'Lever 3: folding-promoting fusion — thioredoxin, MBP, HALO', 'Lever 4: co-express chaperones — DnaK/DnaJ/GrpE, GroEL/GroES', 'Lever 5: change system, last resort only', 'Shared mechanism: folding and aggregation compete kinetically', 'Temperature and IPTG reduce the supply of unfolded chains', 'Tags and chaperones increase folding capacity', 'N-terminal placement matters: the tag folds first and nucleates solubility']
  },
  bank: [
    { type: 'mcq',
      q_en: 'All five solubility levers act on the same underlying process. What is it?',
      q_cn: '五个溶解度杠杆作用于同一个底层过程。是什么？',
      options: ['The strength of the promoter chosen to drive transcription of the gene', 'A kinetic race between folding and aggregation of the unfolded chains', 'The redox state of the cytoplasm and whether it permits disulfide bonds', 'Proteolytic degradation of the nascent chain before it can fold'],
      answer: 1,
      optionRefs: { 0: '2-7', 2: '2-13', 3: '2-28' },
      why_en: 'Once you state the race, the list stops being five arbitrary tricks. Lowering the temperature and lowering the inducer both reduce the supply of unfolded chains; chaperones and solubility fusions both raise the folding capacity; changing host changes the whole environment. Same race, different terms.',
      why_cn: '一旦把这场竞赛说出来，那份清单就不再是五个随意的技巧。降低温度和减少诱导剂都在减少未折叠链的供给；分子伴侣和助溶融合标签都在提高折叠能力；换宿主则是换掉整个环境。同一场竞赛，不同的项。' },
    { type: 'mcq',
      q_en: 'Why does lowering the temperature help more than you would expect from simply slowing everything down?',
      q_cn: '为什么降低温度带来的帮助，比「只是把一切都放慢」所能预期的更大？',
      options: ['It raises expression of the native folding chaperones that the cell already makes', 'It slows synthesis more than it slows folding, and slows aggregation itself too', 'It stabilises the mRNA so that each transcript goes on yielding more protein', 'It shuts protease activity down completely, so nothing can be degraded'],
      answer: 1,
      optionRefs: { 0: '2-5', 2: '2-5', 3: '2-28' },
      why_en: 'It acts on both sides of the race at once, and asymmetrically. Synthesis drops faster than folding does, so the pool of unfolded chains shrinks; and aggregation, being a collision process with its own activation barrier, slows as well. That is why sixteen degrees overnight is often the single most effective change, and why ArcticExpress exists to push it to twelve.',
      why_cn: '它同时作用于竞赛的两边，而且是不对称的。合成下降得比折叠快，未折叠链的库存因此缩小；同时聚集作为一个有自身活化能垒的碰撞过程也慢下来。这就是为什么「16 度过夜」常常是单一改动里最有效的一招，也是 ArcticExpress 存在、把温度推到 12 度的原因。' },
    { type: 'mcq',
      q_en: 'Why are solubility tags such as MBP and thioredoxin placed at the N-terminus?',
      q_cn: '为什么 MBP、硫氧还蛋白这类助溶标签放在 N 端？',
      options: ['Because the C-terminus has to be left free to carry the His-tag', 'Because they emerge from the ribosome first and are folded before the rest appears', 'Because proteases attack the N-terminus preferentially, so the tag shields it', 'Because only an N-terminal domain is accessible to the chaperone system'],
      answer: 1,
      optionNotes: {
        2: { en: 'There is a real N-terminal effect on stability — the N-end rule, where the identity of the first residue sets the half-life — but it says nothing about which end a solubility partner belongs on. The placement argument is timing: translation runs N to C, so only an N-terminal domain is already folded while the difficult part is still emerging.', cn: 'N 端确实有一个影响稳定性的真实规律——N-end rule，第一个残基决定半衰期——但它跟溶解性伴侣该放哪一端无关。放置的理由是时间：翻译从 N 端到 C 端，只有 N 端的结构域能在难折叠的部分还没出来时就已经折好。' }
      },
      why_en: 'Translation is vectorial, so placement is a timing decision. A highly soluble fast-folding domain that appears first is already folded and holding the nascent chain in solution while the difficult domain is still emerging. Fused at the C-terminus it would arrive too late to influence the moment when aggregation is most likely.',
      why_cn: '翻译是有方向的，所以放在哪一端其实是一个时序决定。一个高度可溶、折叠很快的结构域如果先出现，它在困难的结构域还在合成时就已经折好，把新生链拉在溶液里。融合在 C 端就来得太晚，赶不上最容易发生聚集的那个时刻。' },
    { type: 'short',
      q_en: 'Your protein is insoluble. Give the order in which you would try the five levers, and justify the order.',
      q_cn: '你的蛋白不溶。给出你尝试五个杠杆的顺序，并说明理由。',
      accept: ['temperature', 'IPTG', 'Tuner', 'MBP', 'chaperone', 'last resort'],
      answer_en: 'I would order them by how much work each costs and how likely it is to help, which happens to be roughly the order the slide gives. First, lower the temperature. Typical expression is thirty-seven degrees for four hours; I would try thirty degrees for four hours, then sixteen overnight, and if I have ArcticExpress cells, twelve overnight with their cold-adapted Cpn10 and Cpn60. This is one line in a protocol and it acts on both sides of the folding-versus-aggregation race at once, so it has the best return per unit effort. Second, decrease the rate of synthesis by lowering the IPTG, anywhere in the fifty micromolar to one millimolar range. There is a caveat: the T7 system responds in an all-or-none way, so if I am in a pET vector I should use Tuner cells, which lack lac permease and therefore give genuinely concentration-dependent, homogeneous induction. Third, add a folding-promoting fusion at the N-terminus — thioredoxin, MBP, or the HALO-tag — because they fold fast and first and nucleate solubility for the rest of the chain. That costs a recloning and a later tag-removal step, so it comes after the free options. Fourth, co-express chaperones, DnaK with DnaJ and GrpE, or GroEL with GroES, for instance from the Takara plasmid set; this raises the cell folding capacity rather than lowering demand. And fifth, change the expression system altogether — explicitly the last resort, not the first move, because it restarts the project. The governing instruction on the slide is worth quoting as the frame for all of it: when your protein is insoluble or inactive, adjust the expression conditions rather than abandoning the construct.',
      answer_cn: '我会按「每一招要花多少功夫、以及有多大可能奏效」来排序，这大致也就是幻灯片给出的顺序。第一，降低温度。常规是 37 度 4 小时；我会试 30 度 4 小时，然后 16 度过夜，如果有 ArcticExpress 细胞，就用它们的耐冷 Cpn10/Cpn60 在 12 度过夜。这只是方案里改一行，而且同时作用于折叠与聚集竞赛的两边，所以单位投入的回报最高。第二，降低 IPTG 浓度以减慢合成速率，范围在 50 微摩尔到 1 毫摩尔之间。这里有个前提：T7 系统的响应是全有全无的，所以如果我用的是 pET 载体，就应该换成 Tuner 细胞——它缺乏 lac 透性酶，因而能给出真正剂量依赖、均一的诱导。第三，在 N 端加一个促折叠融合标签——硫氧还蛋白、MBP 或 HALO-tag——因为它们折叠得快、又先出来，为后面的链形成溶解性的成核点。这需要重新克隆并在后面加一步去标签，所以排在免费的选项之后。第四，共表达分子伴侣，DnaK 配 DnaJ 和 GrpE，或 GroEL 配 GroES，例如用 Takara 的伴侣质粒套装；这是提高细胞的折叠能力，而不是降低需求。第五，彻底更换表达系统——幻灯片明确说这是最后手段而不是第一步，因为它等于把项目重启。整段的框架值得引用幻灯片上那句总纲：当你的蛋白不溶或没有活性时，去调整表达条件，而不是放弃这个构建体。'
    }
  ]
},

{
  id: '2-13',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.13',
  enTitle: 'Proteins with disulfide bonds — two ways round a reducing cytoplasm',
  cnTitle: '含二硫键的蛋白——绕过还原性胞质的两条路',
  slides: 'L3 s.23',
  coverage: 'full',
  coverageNote: 'The two solutions and the periplasmic trade-off are on the slide. Why the cytoplasm is reducing and the periplasm oxidising is not, and it turns the periplasmic route from an arbitrary trick into borrowing a system the bacterium already runs.',
  summary: {
    en: 'Many proteins need disulfide bonds for folding and stability, but the E. coli cytoplasm is reducing and will not form them. There are two solutions: mutate away the reducing systems using an Origami or SHuffle strain carrying trxB and gor mutations, or target the protein to the periplasm with a secretion signal such as OmpA, pelB or phoA. The periplasmic route gives low yields but buys easy disruption and far fewer contaminating proteins.',
    cn: '很多蛋白需要二硫键来折叠和维持稳定，但大肠杆菌的胞质是还原性的，不会形成二硫键。有两种解决办法：用带 trxB 和 gor 突变的 Origami 或 SHuffle 菌株把还原系统突变掉，或者用 OmpA、pelB、phoA 这类分泌信号把蛋白送到周质。周质路线产量低，但换来容易的裂解方式和少得多的杂蛋白。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '两条路：**改造整个胞质**（Origami / SHuffle，敲掉 trxB 和 gor）或者**换个房间**（加分泌信号送到周质）。\n\n' +
            '周质是**天然的**氧化环境，所以那条路是**借用细菌现成的装配线**，不是硬逼它做不愿意做的化学。',
  skipIt: 'OmpA / pelB / phoA 这三个信号肽的名字，知道「加一段分泌信号」这个动作就够，不必记全。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **disulfide bonds, periplasmic expression**——**这一节整体是被点名的**。',
  explain: [
    {
      q: '为什么 E. coli 的胞质偏偏是还原性的？这不是给自己找麻烦吗？',
      a: '**对细菌自己来说，这恰恰是保护措施。**\n\n' +
         '胞质的还原状态是**主动维持**出来的：thioredoxin 系统（trxB）和 glutathione 系统（gor）不停地把被氧化的东西还原回去。这要消耗能量，所以它显然是被选择出来的、有用的。\n\n' +
         '**有用在哪？因为细菌自己胞内的蛋白本来就不该有二硫键。**\n\n' +
         '胞质里的半胱氨酸如果随便两两氧化成二硫键，那不是折叠，那是**错误折叠**——蛋白会被锁在错的构象里。所以细胞必须主动把胞质保持在还原态，让这种事不发生。\n\n' +
         '**于是你的需求跟宿主的基本设定正面冲突：**你想要二硫键，而它花力气在防止二硫键。\n\n' +
         '看清这一点，两条解法就都好理解了：\n\n' +
         '**Origami / SHuffle** 是**把那个保护机制拆掉**（所以菌长得慢，代价是真实的）。\n\n' +
         '**周质路线**是**去一个本来就允许二硫键的地方**。',
      takeaway: '还原性胞质是保护机制，不是缺陷——它在防止胞内蛋白乱形成二硫键。你的需求跟它天生冲突。'
    },
    {
      q: '周质为什么天然是氧化性的？那里有什么？',
      trace: {
        what: '周质里有一整套专门做二硫键的酶，叫 **Dsb 系统**：**DsbA、DsbB、DsbC**。',
        from: '为什么细菌要在周质配这套东西？因为**它自己也有含二硫键的蛋白**——外膜蛋白、分泌的毒素——而这些蛋白**就是在周质里折叠的**。所以周质是一条为二硫键而存在的装配线，不是碰巧氧化。',
        to: '分工值得记，因为它跟上一节呼应：\n\n**DsbA 负责接上二硫键**——快，但不太挑，经常配错。\n\n**DsbC 负责校对**——把配错的拆开，让它重来。\n\n**看出来了吗：这跟第 2-11 节体外复性时加 GSH/GSSG 是同一个思路。**一次成型不可靠，所以必须有「能反悔」的机制。**体外用小分子对，体内用一个专门的酶。**',
        family: '所以「送到周质」的准确说法是：**借用细菌现成的二硫键装配线**，而不是硬逼它做违背设定的化学。这也是为什么这条路比改造胞质更「顺」。'
      },
      takeaway: '周质有 Dsb 系统：DsbA 快速接上，DsbC 负责拆错重来。跟体外的 GSH/GSSG 是同一个思路。'
    },
    {
      q: '「渗透压休克」是怎么回事？为什么它算周质路线的一个真实优点？',
      a: '**因为它让第一步纯化又变成免费的。**\n\n' +
         '做法大致是：先把细胞泡在高渗溶液里让它脱水收缩，然后**突然换到低渗**。水猛地涌进来，**外膜被撑破，周质里的东西被挤出去**——而内膜结实得多，保持完整。\n\n' +
         '**结果是：周质的内容物出来了，胞质还锁在细胞里。**\n\n' +
         '这一步顺手就把胞质里那几千种蛋白全部留下了。你的起始材料一下子干净了一个量级。\n\n' +
         '**跟第 2-10 节的包涵体对照着看，会发现是同一个套路：**\n\n' +
         '包涵体：离心，**留沉淀**——分离在裂解那一步就发生了。\n\n' +
         '周质：渗透压休克，**留上清**——分离也在裂解那一步就发生了。\n\n' +
         '**「让分离发生在裂解的同时」，是纯化里最省事的一类设计。**\n\n' +
         '当然代价明确写在幻灯片上：**周质空间小、转运能力有限，所以产量低。**这是一个「干净换产量」的交易。',
      takeaway: '外膜破、内膜完整，所以只放出周质内容物。分离在裂解那一步就完成了——代价是产量低。'
    }
  ],
  points: [
    { term: 'Why it matters', en: 'Many proteins contain disulfide bonds, and they are critical for folding and stability.', cn: '很多蛋白含有二硫键，而且这些键对折叠和稳定性至关重要。' },
    { term: 'The problem', en: 'The cytoplasm of E. coli is reducing and does not support disulfide bond formation.', cn: '大肠杆菌的胞质是还原性的，不支持二硫键形成。' },
    { term: 'Solution 1 — special strains', en: 'SHuffle and Origami carry mutations in trxB (thioredoxin reductase) and gor (glutathione reductase), which create a more oxidising cytoplasm.', cn: 'SHuffle 和 Origami 携带 trxB（硫氧还蛋白还原酶）和 gor（谷胱甘肽还原酶）突变，造就一个更偏氧化的胞质。' },
    { term: 'Solution 2 — target the periplasm', en: 'The periplasm is naturally oxidising. Add a secretion signal — OmpA, pelB or phoA.', cn: '周质天然就是氧化性的。加一个分泌信号——OmpA、pelB 或 phoA。' },
    { term: 'Cost of the periplasmic route', en: 'Typically low expression levels and low yields.', cn: '通常表达水平和产量都很低。' },
    { term: 'Benefits of the periplasmic route', en: 'Easy disruption, and fewer contaminating proteins.', cn: '裂解容易，而且杂蛋白更少。' }
  ],
  beyondPoints: [
    { term: 'Why the cytoplasm is reducing', en: 'Two systems actively maintain it — the thioredoxin system via trxB and the glutathione system via gor. This is a deliberate protective mechanism, keeping the cell\'s own proteins safe from oxidative damage. Knocking out both reductases is what makes the Origami and SHuffle cytoplasm oxidising enough for disulfides to form.', cn: '有两套系统在主动维持它——trxB 代表的硫氧还蛋白系统和 gor 代表的谷胱甘肽系统。这是细胞有意的保护机制，让自身的蛋白免受氧化损伤。把这两个还原酶都敲掉，正是 Origami 和 SHuffle 的胞质变得足够氧化、能形成二硫键的原因。' },
    { term: 'Why the periplasm is oxidising', en: 'It runs a dedicated Dsb system — DsbA, DsbB and DsbC — which actively catalyses disulfide formation and proofreads incorrect pairings. It is there because the bacterium\'s own disulfide-containing proteins, outer membrane proteins and toxins, fold in that compartment.', cn: '它运行着一套专门的 Dsb 系统——DsbA、DsbB、DsbC——主动催化二硫键形成并纠正错误配对。它存在的原因是：细菌自己那些含二硫键的蛋白（外膜蛋白、毒素）本来就在这个区室里折叠。' },
    { term: 'So the periplasmic route is borrowing, not tricking', en: 'Sending your protein to the periplasm means using the bacterium\'s existing disulfide assembly line rather than forcing chemistry that the cell resists.', cn: '把蛋白送到周质，是在使用细菌现成的二硫键装配线，而不是强行推动细胞本来抵抗的化学反应。' },
    { term: 'Where the two benefits come from', en: 'Osmotic shock releases the periplasmic contents gently, without having to break the whole cell open. And the periplasm holds far fewer protein species than the cytoplasm, so your purification starts from a much cleaner mixture. The cost is that the compartment is small and the transport capacity limited, hence the low yield.', cn: '渗透压休克就能温和地释放周质内容物，不必把整个细胞打碎。而且周质里的蛋白种类远少于胞质，所以纯化的起点干净得多。代价是这个区室很小、转运能力有限，产量因此偏低。' }
  ],
  terms: [
    { en: 'Periplasm', cn: '周质', def_en: 'The compartment between the inner and outer membranes of a Gram-negative bacterium. Naturally oxidising, holds far fewer protein species than the cytoplasm, and can be released by osmotic shock.', def_cn: '革兰氏阴性菌内膜与外膜之间的区室。天然呈氧化性，蛋白种类远少于胞质，可以通过渗透压休克释放。' },
    { en: 'Dsb system', cn: 'Dsb 系统', def_en: 'DsbA, DsbB and DsbC — the periplasmic enzymes that catalyse disulfide bond formation and proofread incorrect pairings.', def_cn: 'DsbA、DsbB、DsbC——周质中催化二硫键形成并校对错误配对的酶。' },
    { en: 'Secretion signal', cn: '分泌信号肽', def_en: 'An N-terminal peptide such as OmpA, pelB or phoA that directs a protein across the inner membrane into the periplasm and is then cleaved off.', def_cn: 'OmpA、pelB、phoA 这类 N 端肽段，引导蛋白穿过内膜进入周质，随后被切除。' },
    { en: 'Osmotic shock', cn: '渗透压休克', def_en: 'A gentle lysis method that releases periplasmic contents without disrupting the inner membrane, so the cytoplasm stays intact.', def_cn: '一种温和的裂解方法，释放周质内容物而不破坏内膜，胞质保持完整。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does the E. coli cytoplasm not support disulfide bond formation?',
      q_cn: '为什么大肠杆菌的胞质不支持二硫键形成？',
      options: ['The cytoplasmic pool lacks the cysteine residues needed to form them', 'The thioredoxin (trxB) and glutathione (gor) systems keep it actively reducing', 'The pH of the cytoplasm is too low for a disulfide bond to be stable', 'Any disulfide that does form is cleaved again by the Lon protease'],
      answer: 1,
      optionRefs: { 3: '2-5' },
      why_en: 'Two reductase systems actively keep the cytoplasm reducing, which protects the cell\'s own proteins from oxidative damage. Knocking out both, as in Origami and SHuffle, is what permits disulfides to form there.',
      why_cn: '两套还原酶系统主动维持胞质的还原环境，这保护了细胞自身蛋白免受氧化损伤。把两者都敲掉（如 Origami 和 SHuffle）才允许二硫键在那里形成。' },
    { type: 'mcq',
      q_en: 'What does the periplasm offer that the cytoplasm does not?',
      q_cn: '周质提供了哪些胞质没有的条件？',
      options: ['Higher expression levels than the same construct would ever reach in the cytoplasm', 'A naturally oxidising environment with a dedicated Dsb disulfide-forming system', 'Complete protection from proteolysis, since no proteases at all act in that compartment', 'The machinery for N-linked glycosylation of the protein once exported'],
      answer: 1,
      optionRefs: { 3: '2-25' },
      why_en: 'The periplasm is naturally oxidising and runs DsbA, DsbB and DsbC to form and proofread disulfides, because the bacterium\'s own outer membrane proteins and toxins fold there. Expression levels are lower, not higher.',
      why_cn: '周质天然呈氧化性，并运行 DsbA、DsbB、DsbC 来形成和校对二硫键，因为细菌自己的外膜蛋白和毒素就在那里折叠。表达水平是更低而不是更高。' },
    { type: 'mcq',
      q_en: 'Why does periplasmic targeting give fewer contaminating proteins?',
      q_cn: '为什么周质定位能带来更少的杂蛋白？',
      options: ['The signal peptide keeps the host proteins away from the exported product', 'It holds far fewer protein species, and osmotic shock releases only it', 'Periplasmic proteases selectively digest the host proteins that are present', 'The outer membrane acts as a size filter on the proteins released'],
      answer: 1,
      why_en: 'Two effects combine: the compartment is intrinsically less crowded, and osmotic shock releases its contents without breaking the whole cell, so the cytoplasmic proteome never enters your sample.',
      why_cn: '两个效应叠加：这个区室本身蛋白种类就少，而渗透压休克只释放它的内容物、不打碎整个细胞，所以胞质蛋白组根本不会进入你的样品。' },
    { type: 'short',
      q_en: 'Why can the E. coli cytoplasm not form disulfide bonds, and what are the two fixes?',
      q_cn: '为什么大肠杆菌胞质无法形成二硫键？有哪两种解决办法？',
      accept: ['reducing', 'trxB', 'gor', 'Origami', 'SHuffle', 'periplasm', 'signal'],
      answer_en: 'The cytoplasm is actively kept reducing by two systems, thioredoxin via trxB and glutathione via gor, which exist to protect the cell\'s own proteins from oxidative damage. The first fix is to remove them: Origami and SHuffle strains carry trxB and gor mutations, giving a cytoplasm oxidising enough for disulfides to form. The second is to avoid the cytoplasm altogether by adding a secretion signal such as OmpA, pelB or phoA and targeting the protein to the periplasm, which is naturally oxidising and runs a dedicated Dsb system that both forms and proofreads disulfides. The periplasmic route gives low yields because the compartment is small, but it buys gentle release by osmotic shock and far fewer contaminating proteins.',
      answer_cn: '胞质被两套系统主动维持在还原状态——trxB 代表的硫氧还蛋白系统和 gor 代表的谷胱甘肽系统，它们的存在是为了保护细胞自身蛋白免受氧化损伤。第一种办法是去掉它们：Origami 和 SHuffle 菌株携带 trxB 和 gor 突变，使胞质氧化到足以形成二硫键。第二种是干脆绕开胞质：加上 OmpA、pelB 或 phoA 这类分泌信号，把蛋白送到周质——那里天然呈氧化性，并运行一套专门的 Dsb 系统来形成和校对二硫键。周质路线因为区室小而产量低，但换来渗透压休克的温和释放和少得多的杂蛋白。'
    }
  ],
  oral: {
    q_en: 'Your protein has disulfide bonds and you want to make it in E. coli. What are your options?',
    q_cn: '你的蛋白有二硫键，而你想在大肠杆菌里生产。有哪些选择？',
    model_en: 'The obstacle is that the E. coli cytoplasm is reducing and will not form disulfide bonds, and it is worth saying why: two systems actively maintain that state, thioredoxin through trxB and glutathione through gor, and they exist deliberately, to protect the cell\'s own proteins from oxidative damage. So there are two ways round it. The first is to remove the obstacle: Origami and SHuffle strains carry mutations in both trxB and gor, so the cytoplasm becomes oxidising enough for disulfides to form. The second is to avoid the cytoplasm altogether by adding a secretion signal — OmpA, pelB or phoA — and targeting the protein to the periplasm, which is naturally oxidising. I would frame that second option as borrowing rather than tricking, because the periplasm runs a dedicated Dsb system, DsbA, DsbB and DsbC, which actively catalyses disulfide formation and proofreads incorrect pairings. That machinery is there because the bacterium\'s own disulfide-containing proteins, its outer membrane proteins and toxins, fold in that compartment. So you are using an assembly line the cell already operates. The trade-off is real: the periplasm is a small compartment with limited transport capacity, so expression levels and yields are typically low. In exchange you get two things. Osmotic shock releases the periplasmic contents gently, without having to break the whole cell open, and the periplasm holds far fewer protein species than the cytoplasm, so your purification starts from a much cleaner mixture.',
    checklist: ['Disulfides are critical for folding and stability in many proteins', 'Problem: E. coli cytoplasm is reducing', 'Why: trxB (thioredoxin) and gor (glutathione) actively maintain it, protecting host proteins', 'Fix 1: Origami/SHuffle, trxB and gor mutations, oxidising cytoplasm', 'Fix 2: periplasmic targeting with OmpA, pelB or phoA signal', 'Periplasm is naturally oxidising and runs the Dsb system (DsbA/B/C)', 'Dsb both forms and proofreads disulfides', 'It exists for the bacterium\'s own OMPs and toxins, so you are borrowing it', 'Cost: small compartment, limited transport, low yield', 'Benefits: gentle osmotic shock release, far fewer contaminants']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why is the E. coli cytoplasm reducing in the first place?',
      q_cn: '大肠杆菌的细胞质一开始为什么是还原性的？',
      options: ['It is a passive consequence of how little oxygen ever reaches the cytoplasm', 'Two reductase systems, thioredoxin (trxB) and glutathione (gor), actively maintain it', 'The Dsb system consumes the oxidising equivalents before any of them reach the cytoplasm', 'Ribosomes generate reducing power as a by-product of ongoing protein synthesis'],
      answer: 1,
      optionNotes: {
        0: { en: 'E. coli keeps a reducing cytoplasm while growing perfectly happily in a shaking flask full of air, so oxygen availability is not what sets it. Two reductase systems spend energy holding that state, which is why the fix is to delete both of them rather than to add an oxidant.', cn: 'E. coli 在充满空气的摇瓶里长得好好的，胞质照样是还原性的，所以决定它的不是有没有氧气。有两套还原酶系统在耗能维持这个状态，这也是为什么解法是把它们都敲掉，而不是加氧化剂。' }
      },
      why_en: 'It is maintained, not merely permitted, which is why the fix is to knock out both maintaining pathways rather than to add an oxidant. Knowing it is deliberate also explains why an oxidising cytoplasm is a strain engineering decision with a growth cost rather than a free win.',
      why_cn: '它是被主动维持的，而不只是被动允许的，这就是为什么解决办法是敲掉两条维持通路，而不是加氧化剂。知道它是刻意维持的，也解释了为什么「氧化性细胞质」是一个带有生长代价的菌株工程决定，而不是白得的好处。' },
    { type: 'mcq',
      q_en: 'The periplasm is naturally oxidising. What actively makes it so?',
      q_cn: '周质空间天然是氧化性的。是什么在主动造成这一点？',
      options: ['Direct contact with atmospheric oxygen across the outer membrane', 'The Dsb system: DsbA, DsbB and DsbC, which form and proofread disulfides', 'The absence of glutathione from that compartment, with nothing catalytic needed', 'The trxB and gor gene products being exported into the periplasm'],
      answer: 1,
      optionNotes: {
        0: { en: 'The periplasm is not oxidising merely because it is the compartment nearest the outside — the cytoplasm of that same aerated cell stays reducing. The conditions there are made by enzymes: DsbA hands a disulfide to the substrate, and DsbB re-oxidises DsbA using the respiratory chain.', cn: '周质是氧化性的，并不是因为它离外面最近——同一个通着气的细胞，胞质仍然是还原性的。那里的环境是酶做出来的：DsbA 把二硫键交给底物，DsbB 再借呼吸链把 DsbA 重新氧化。' }
      },
      why_en: 'DsbA introduces disulfides, DsbB re-oxidises DsbA, and DsbC is the isomerase that corrects wrong pairings. That proofreading step is the part worth naming: the periplasm is not merely permissive, it has machinery for getting the pairing right, which is why a protein with many cysteines often does better there than in an engineered cytoplasm.',
      why_cn: 'DsbA 引入二硫键，DsbB 把 DsbA 重新氧化，DsbC 是纠正错误配对的异构酶。值得点名的正是这个校对步骤：周质空间不只是「允许」形成二硫键，它还有一套确保配对正确的机器——这就是为什么半胱氨酸很多的蛋白在周质里往往比在改造过的细胞质里表现更好。' },
    { type: 'mcq',
      q_en: 'Where do the two benefits of the periplasmic route come from?',
      q_cn: '走周质空间路线的两个好处从何而来？',
      options: ['Higher expression levels there, plus more reliable folding of the product', 'Selective release by osmotic shock, plus far fewer protein species there', 'The complete absence of both proteases and nucleases from that compartment', 'A dedicated secretion pump that concentrates the product in that space'],
      answer: 1,
      optionRefs: { 3: '2-27' },
      why_en: 'Both benefits are consequences of the compartment rather than of the protein. A gentle osmotic shock is a selective extraction, so you start purification from a much simpler mixture. What you pay is the thing the slide names explicitly: expression levels and yields are typically low.',
      why_cn: '两个好处都来自这个区室本身，而不是来自蛋白。温和的渗透压休克本身就是一次选择性抽提，所以你从一个简单得多的混合物开始纯化。代价正是幻灯片明确指出的：表达水平和产量通常都低。' },
    { type: 'short',
      q_en: 'Your protein has four disulfide bonds. Compare the two E. coli routes and say which you would try first.',
      q_cn: '你的蛋白有四对二硫键。比较大肠杆菌的两条路线，并说明你会先试哪一条。',
      accept: ['SHuffle', 'Origami', 'trxB', 'gor', 'periplasm', 'OmpA', 'pelB', 'Dsb'],
      answer_en: 'Route one is to change the cytoplasm. SHuffle and Origami carry mutations in trxB, thioredoxin reductase, and gor, glutathione reductase, which are the two systems that actively keep the cytoplasm reducing; knocking both out makes it oxidising so disulfides can form there. SHuffle additionally expresses a cytoplasmic version of DsbC, which matters here. Route two is to change the compartment: add a secretion signal such as OmpA, pelB or phoA and target the protein to the periplasm, which is naturally oxidising because it runs the Dsb system — DsbA introduces disulfides, DsbB re-oxidises DsbA, and DsbC proofreads and corrects incorrect pairings. The periplasmic route costs you expression level and yield, which are typically low, but buys two things: osmotic shock releases the periplasmic contents gently without breaking the whole cell, and the periplasm contains far fewer protein species, so you begin purification from a much cleaner mixture. With four disulfide bonds specifically, I would go to the periplasm first. The number of possible wrong pairings grows steeply with the number of cysteines, so the limiting problem is not whether bonds form but whether they form correctly, and the periplasm has a dedicated isomerase for exactly that. An engineered oxidising cytoplasm makes bonds form but has weaker proofreading unless the strain also supplies DsbC. If yield then turned out to be the binding constraint, SHuffle would be the natural second attempt.',
      answer_cn: '第一条路线是改造细胞质。SHuffle 和 Origami 在 trxB（硫氧还蛋白还原酶）和 gor（谷胱甘肽还原酶）上带突变，这两者正是主动维持细胞质还原状态的系统；同时敲掉就使细胞质变为氧化性，二硫键便能在其中形成。SHuffle 还额外表达胞质版的 DsbC，这一点在这里很关键。第二条路线是换区室：加上 OmpA、pelB 或 phoA 这类分泌信号，把蛋白导向天然氧化性的周质空间——它之所以氧化，是因为运行着 Dsb 系统：DsbA 引入二硫键，DsbB 把 DsbA 重新氧化，DsbC 负责校对并纠正错误配对。周质路线的代价是表达水平和产量通常都低，但换来两点：渗透压休克能温和地释放周质内容物而不必破开整个细胞，而且周质中蛋白种类远少于细胞质，所以你从一个干净得多的混合物开始纯化。具体到四对二硫键，我会先走周质。可能的错误配对数随半胱氨酸数量陡增，所以限制性问题不是「键能不能形成」，而是「能不能形成正确的配对」，而周质恰好有专门的异构酶做这件事。改造过的氧化性细胞质能让键形成，但除非菌株同时提供 DsbC，否则校对能力较弱。如果之后发现产量才是瓶颈，SHuffle 就是顺理成章的第二次尝试。'
    }
  ]
},

{
  id: '2-14',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.14',
  enTitle: 'Co-expressing more than one protein',
  cnTitle: '同时表达多个蛋白',
  slides: 'L3 s.24',
  coverage: 'full',
  coverageNote: 'The three strategies and the pDUET details are on the slide, including the prohibition on sharing an origin. Why that prohibition exists is plasmid incompatibility, carried over from Lecture 2 — and the failure mode it produces is worth stating because it is silent.',
  summary: {
    en: 'Many proteins fold or function only when their binding partners are present, so co-expression is often the only route to an intact complex. Three strategies: express separately and purify together, co-transform multiple plasmids, or put several genes on one bicistronic or polycistronic plasmid. The rule that matters is that you must never co-transform two plasmids sharing an origin of replication, because they will segregate apart and give you two populations rather than one co-expressing one.',
    cn: '很多蛋白只有在其结合伙伴存在时才能折叠或行使功能，所以共表达往往是得到完整复合物的唯一途径。三种策略：分别表达再一起纯化、共转多个质粒、或者把多个基因放在一个双顺反子/多顺反子质粒上。最关键的规则是：绝不能共转两个共享复制起点的质粒，因为它们会分离开，最后给你两群细胞而不是一群共表达的细胞。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**绝对不能共转两个 ORI 相同的质粒**——它们会分开，你最后拿到的是**两群细胞各表达一个**，而不是一群细胞表达两个。\n\n' +
            '而且这个失败**是无声的**：培养看起来完全正常。',
  skipIt: 'pACYCDuet-1 / pCDFDuet-1 / pCOLADuet-1 这些型号不用背，知道「pDUET 是为共表达设计的一套不同 ORI + 不同抗性的质粒」就够。老师在第 4 讲开头给第 3 讲做 RECAP 时写了 **protein complexes**——**共表达这件事是被点名的**。',
  explain: [
    {
      q: '为什么复合物往往必须共表达，不能分别做好再拼？',
      a: '因为**很多亚基单独存在时根本折不起来。**\n\n' +
         '想一想一个复合物的界面是什么：两个亚基贴合的那一面，通常是**疏水的**——疏水面互相贴合正是它们结合的驱动力。\n\n' +
         '**那么当你单独表达其中一个亚基时，那一整片疏水面就暴露在外面。**\n\n' +
         '而暴露的疏水面是什么，第 2-10 节讲过：**那正是聚集的配方。**它会去找任何能贴的东西粘住——通常就是另一个同样孤单的同类分子。\n\n' +
         '**所以单独表达一个复合物亚基，很容易直接进包涵体**，而且这不是条件没调好，是它缺了本该在那里的伙伴。\n\n' +
         '**共表达的意义是让它们在同一个细胞里、同一段时间里一起折叠**——伙伴一出现就把界面盖住了，疏水面从来没有机会暴露太久。\n\n' +
         '这也解释了为什么「策略一：分别表达再一起纯化」排在最弱的位置：**如果亚基单独就能折好，你本来也不太需要共表达。**',
      takeaway: '复合物界面通常是疏水的，单独表达就等于把它暴露出来——那正是聚集的配方。'
    },
    {
      q: '共转两个相同 ORI 的质粒，失败起来是什么样子？',
      a: '**这是本节最该记住的一点，因为它的失败方式是「看不出来」。**\n\n' +
         '机制回到第 1-9 节：相同 ORI 的质粒争夺同一套复制机器、被同一套调控数在一起，分裂时随机分配。**几代之后，大多数细胞就只剩下其中一个了。**\n\n' +
         '**关键在于接下来发生了什么：**\n\n' +
         '你得到的不是「一群什么都不表达的细胞」——那你立刻就会发现。\n\n' +
         '你得到的是**两群细胞，一群表达 A，一群表达 B**。\n\n' +
         '**于是每一个检查点都显示正常：**菌长得好；诱导有反应；裂解之后跑胶，**A 和 B 两条带都在**（因为那是一整锅细胞的混合裂解物）。\n\n' +
         '你甚至会觉得实验很成功——**直到纯化那一步，你拉下 A 却发现 B 完全没跟过来**。因为它们从来就不在同一个细胞里，根本没机会形成复合物。\n\n' +
         '**所以这条规则必须事先知道。**它不是那种「做错了会有报错」的规则，是那种「做错了一切正常、几周后才发现」的规则。',
      takeaway: '你会得到两群细胞各表达一个。混合裂解物跑胶两条带都在，一切正常——直到纯化时拉不出复合物。'
    },
    {
      q: 'pDUET 是怎么专门对着这个问题设计的？',
      trace: {
        what: 'Novagen 的一套质粒（pACYCDuet-1、pCDFDuet-1、pCOLADuet-1 等），专门为共表达而设计。',
        from: '设计的出发点就是上面那个失败：既然问题出在「ORI 相同」和「会随机丢失」，那就把这两件事分别堵死。',
        to: '**三条设计，每一条对应一个具体问题：**\n\n**每个质粒用不同的 ORI** → 不相容性问题消失，它们不再争夺同一套机器。\n\n**每个质粒用不同的抗性标记** → 培养基里**同时加两种抗生素**。这一条是关键：现在**丢掉任何一个质粒的细胞都会死**，随机丢失被转化成了选择压力。\n\n**每个质粒带两个 T7 表达盒** → 一个质粒装两个基因。\n\n于是四个质粒 × 每个两个盒 = **最多 8 个蛋白共表达**。',
        family: '对照第 1-9 节的原则：**共表达的两个质粒必须既是不同 ORI（能共存），又是不同抗性（能同时筛住）。**pDUET 就是把这条原则做成了产品。'
      },
      takeaway: '不同 ORI 解决共存，不同抗性把「随机丢失」变成「丢了就死」。两个盒子再翻倍。'
    },
    {
      q: '多顺反子里「第二个基因表达少」，这重要吗？',
      a: '**很重要，因为复合物往往需要特定的化学计量比。**\n\n' +
         '先说原因：多个基因串在一个启动子下、共用一条 mRNA 时，**核糖体在第一个基因的起始位点效率最高**；后面的基因需要核糖体在 mRNA 内部重新起始（或者读通之后再起始），效率天然更低。\n\n' +
         '**后果不是「第二个少一点、无所谓」。**\n\n' +
         '假设你的复合物是 1:1 的，而第二个亚基只做出了第一个的五分之一。那么**多出来的那 80% 的第一个亚基没有伙伴**——它们的界面暴露着，然后就按第一条里说的，聚集掉了。\n\n' +
         '**所以比例失衡不只是浪费，它会主动制造包涵体。**\n\n' +
         '实用推论有两条：\n\n' +
         '**把预期表达量低的那个放在第一位**，用位置的优势去补它的劣势。\n\n' +
         '或者干脆**用 pDUET 那种每个基因有独立启动子的方案**，把比例这件事从「碰运气」变成「可以分别调」。',
      takeaway: '比例失衡不只是浪费——多出来的那个亚基没伙伴，界面暴露就聚集了。把弱的放第一位。'
    }
  ],
  points: [
    { term: 'Why co-express at all', en: 'Many proteins fold or function only when their binding partners are present, so co-expression helps produce intact complexes.', cn: '很多蛋白只有在结合伙伴存在时才能折叠或行使功能，所以共表达有助于产生完整的复合物。' },
    { term: 'Strategy 1 — express separately, purify together', en: 'Mix the lysates or the pellets before purification.', cn: '在纯化之前把裂解液或沉淀混合起来。' },
    { term: 'Strategy 2 — co-transformation', en: 'Introduce two or more plasmids into the same cell.', cn: '把两个或以上的质粒导入同一个细胞。' },
    { term: 'The prohibition', en: 'You must NOT co-transform two plasmids with the same origin of replication.', cn: '绝对不能共转两个复制起点相同的质粒。' },
    { term: 'The pDUET system', en: 'Novagen plasmids with different origins and different selectable markers — pACYCDuet-1, pCDFDuet-1, pCOLADuet-1. Each carries two T7 expression cassettes, so four plasmids allow co-expression of up to eight proteins.', cn: 'Novagen 的质粒系列，复制起点不同、筛选标记也不同——pACYCDuet-1、pCDFDuet-1、pCOLADuet-1。每个带两个 T7 表达盒，所以四个质粒最多可共表达 8 个蛋白。' },
    { term: 'Strategy 3 — bicistronic or polycistronic plasmids', en: 'Multiple genes under a single promoter, separated by IRES elements or 2A peptides.', cn: '多个基因置于单一启动子之下，用 IRES 元件或 2A 肽分隔。' },
    { term: 'The polycistronic caveat', en: 'The second gene of interest expresses less, because translation initiation is less efficient there.', cn: '第二个目的基因表达量更低，因为那里的翻译起始效率较差。' }
  ],
  beyondPoints: [
    { term: 'Why sharing an origin fails — plasmid incompatibility', en: 'Two plasmids with the same origin compete for the same host replication machinery and are distributed randomly at cell division. After a few generations most cells retain only one of the two.', cn: '两个复制起点相同的质粒争夺同一套宿主复制机器，分裂时随机分配。几代之后大多数细胞只剩下其中一种。' },
    { term: 'The failure mode is silent', en: 'You believe you are co-expressing, but what you actually have is two populations of cells each expressing one protein. Nothing about the culture looks wrong — which is exactly why the rule has to be known in advance rather than discovered.', cn: '你以为在共表达，实际上是两群细胞各自表达一个蛋白。培养物看上去毫无异常——这正是为什么这条规则必须事先知道，而不能靠事后发现。' },
    { term: 'How pDUET is designed against exactly this', en: 'Different origins mean no competition for replication machinery, and different resistance markers mean two selection pressures applied at once, so every surviving cell must carry both plasmids. Two T7 cassettes per plasmid then multiply up: four plasmids times two cassettes gives eight proteins.', cn: '不同的复制起点意味着不争夺复制机器，不同的抗性标记意味着同时施加两种选择压力，所以每一个存活的细胞都必须同时带有两种质粒。每个质粒两个 T7 表达盒再翻倍：四个质粒乘以两个盒 = 8 个蛋白。' }
  ],
  terms: [
    { en: 'Plasmid incompatibility', cn: '质粒不相容性', def_en: 'The inability of two plasmids sharing a replication origin to be stably maintained in the same cell, because they compete for the same replication machinery and segregate randomly.', def_cn: '两个共享复制起点的质粒无法在同一细胞中稳定共存，因为它们争夺同一套复制机器并随机分离。' },
    { en: 'pDUET vectors', cn: 'pDUET 载体', def_en: 'A Novagen plasmid set with mutually compatible origins and distinct resistance markers, each carrying two T7 cassettes, designed for co-expression of up to eight proteins.', def_cn: 'Novagen 的一套质粒，复制起点互相兼容、抗性标记各不相同，每个带两个 T7 表达盒，设计用于共表达最多 8 个蛋白。' },
    { en: '2A peptide', cn: '2A 自剪切肽', def_en: 'A short sequence causing the ribosome to skip peptide bond formation, releasing two separate proteins from one open reading frame. Efficiency is limited.', def_cn: '一段短序列，使核糖体跳过肽键形成，从一个开放阅读框释放出两个独立的蛋白。效率有限。' },
    { en: 'Polycistronic', cn: '多顺反子', def_en: 'One mRNA encoding several proteins. Downstream genes are translated less efficiently, so expression is unequal by design.', def_cn: '一条 mRNA 编码多个蛋白。下游基因的翻译效率较低，所以表达量天然不均等。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why must you not co-transform two plasmids sharing an origin of replication?',
      q_cn: '为什么不能共转两个复制起点相同的质粒？',
      options: ['They would recombine with each other into a single larger plasmid that keeps only one of the two origins', 'They share one copy-number control, so cells end up carrying only one of them', 'The two antibiotics in the medium would interfere with each other', 'Transformation efficiency would be too high for a clean selection'],
      answer: 1,
      optionRefs: { 3: '2-6' },
      optionNotes: {
        0: { en: 'Incompatibility is not a recombination event; the two plasmids stay separate molecules throughout. They share one copy-number control circuit and one partitioning system, so the cell cannot tell them apart, and successive divisions sort the population into cells carrying one or the other.', cn: '不相容性不是重组事件，两个质粒自始至终是各自独立的分子。它们共用同一套拷贝数调控和同一套分配机制，细胞分辨不出谁是谁，于是一代代分裂把群体分成只带这个或只带那个的细胞。' }
      },
      why_en: 'This is plasmid incompatibility. After a few generations most cells retain only one of the two, so you have two populations each expressing one protein rather than one population co-expressing both.',
      why_cn: '这就是质粒不相容性。几代之后大多数细胞只剩其中一种，于是你得到的是两群各表达一个蛋白的细胞，而不是一群共表达两者的细胞。' },
    { type: 'mcq',
      q_en: 'How does the pDUET system allow co-expression of up to eight proteins?',
      q_cn: 'pDUET 系统怎么做到共表达最多 8 个蛋白？',
      options: ['Eight separate T7 promoters arranged along one very large plasmid', 'Four compatible plasmids, different origins and markers, two cassettes each', 'Eight sequential transformations, adding one more plasmid each round', 'A single polycistronic operon carrying all eight of the genes on one long mRNA'],
      answer: 1,
      why_en: 'Different origins avoid incompatibility and different resistance markers let you apply several selection pressures simultaneously, so every cell must keep every plasmid. Two T7 cassettes per plasmid then doubles the count.',
      why_cn: '不同的复制起点避免了不相容性，不同的抗性标记让你能同时施加多重选择压力，所以每个细胞必须保留每一个质粒。每个质粒两个 T7 表达盒再把数量翻倍。' },
    { type: 'mcq',
      q_en: 'In a bicistronic construct, why does the second gene express less?',
      q_cn: '在双顺反子构建体中，为什么第二个基因表达量更低？',
      options: ['The mRNA is degraded from the 3 prime end', 'Translation initiation at the downstream site is less efficient', 'The promoter weakens along its length', 'The second gene is transcribed separately from its own weaker internal promoter'],
      answer: 1,
      why_en: 'Both genes are on one transcript under one promoter, so transcription is not the limitation — initiation of translation at the internal site, whether via an IRES or after a 2A peptide, is simply less efficient than at the first start codon.',
      why_cn: '两个基因在同一条转录本上、由同一个启动子驱动，所以转录不是瓶颈——内部位点的翻译起始（无论通过 IRES 还是 2A 肽之后）本身就不如第一个起始密码子高效。' },
    { type: 'short',
      q_en: 'You co-transformed two plasmids and both antibiotics selected fine, but you never recover an intact complex. What would you check first?',
      q_cn: '你共转了两个质粒，两种抗生素筛选都正常，但始终得不到完整的复合物。你会先检查什么？',
      accept: ['origin', 'ORI', 'incompatibility', 'same origin', 'segregate'],
      answer_en: 'Whether the two plasmids share an origin of replication. If they do, they compete for the same host replication machinery and segregate randomly at division, so after a few generations most cells retain only one. The failure is silent: selection still works because the population as a whole carries both markers, and the culture looks entirely normal, but what you actually have is two populations each expressing one partner rather than one population co-expressing both. The fix is to move to plasmids with genuinely different origins and different markers, which is exactly what the pDUET set is designed for.',
      answer_cn: '先看这两个质粒是不是共享同一个复制起点。如果是，它们会争夺同一套宿主复制机器，分裂时随机分离，几代之后大多数细胞只剩下其中一种。这个失败是无声的：筛选看起来仍然正常，因为整个群体带有两种标记，培养物也完全正常，但你实际拥有的是两群各表达一个伙伴的细胞，而不是一群共表达两者的细胞。解决办法是换成复制起点真正不同、标记也不同的质粒，这正是 pDUET 系列的设计目的。'
    }
  ],
  oral: {
    q_en: 'How would you produce a protein complex whose subunits only fold in each other\'s presence?',
    q_cn: '如果一个复合物的亚基只有彼此存在时才能折叠，你会怎么生产它？',
    model_en: 'Co-expression, because many proteins fold or function only when their binding partners are present, and there are three strategies. The simplest is to express the partners separately and purify them together, mixing the lysates or the pellets before the first column. The second is co-transformation with multiple plasmids, and here there is one rule that matters more than anything else: you must never co-transform two plasmids that share an origin of replication. The reason is plasmid incompatibility — they compete for the same host replication machinery and are distributed randomly at cell division, so after a few generations most cells retain only one of the two. What makes this dangerous is that the failure is silent. Selection still works, because the population as a whole carries both markers, and the culture looks completely normal, but you are not co-expressing at all; you have two populations of cells each making one protein. The pDUET system from Novagen is designed against exactly this — pACYCDuet, pCDFDuet and pCOLADuet have different origins and different selectable markers, so two selection pressures apply at once and every surviving cell must carry both plasmids. Each of them also carries two T7 expression cassettes, so four plasmids times two cassettes gives co-expression of up to eight proteins. The third strategy is a bicistronic or polycistronic plasmid, with several genes under a single promoter separated by IRES elements or 2A peptides. The caveat there is that the second gene of interest expresses less, because translation initiation at the internal site is less efficient — so if you need equal stoichiometry, that is the wrong choice.',
    checklist: ['Many proteins fold or function only with their partners present', 'Strategy 1: express separately, mix lysates or pellets, purify together', 'Strategy 2: co-transformation of multiple plasmids', 'The rule: never co-transform two plasmids with the same origin', 'Why: plasmid incompatibility, random segregation at division', 'The failure is silent — selection passes, but you get two populations', 'pDUET: different origins plus different markers, dual selection', 'Each pDUET plasmid has two T7 cassettes, so up to 8 proteins', 'Strategy 3: bicistronic/polycistronic with IRES or 2A peptides', 'Caveat: the second gene expresses less, poor for equal stoichiometry']
  },
  bank: [
    { type: 'mcq',
      q_en: 'Why must you never co-transform two plasmids sharing an origin of replication?',
      q_cn: '为什么绝对不能共转化两个共用同一复制起点的质粒？',
      options: ['The two origins physically collide when their two replication forks meet', 'Replication and partitioning treat them as one pool, so cells keep one or the other', 'The two antibiotic resistance markers cancel each other out in one cell', 'The combined copy number doubles, and the resulting metabolic burden kills the cell'],
      answer: 1,
      why_en: 'Plasmids with the same origin are regulated by the same copy-number control and segregated by the same machinery, so the cell cannot tell them apart. Over successive divisions the population sorts itself into cells carrying one plasmid or the other. That is why the pDUET series is built on deliberately different origins.',
      why_cn: '同一复制起点的质粒由同一套拷贝数调控管理、由同一套机制分配，细胞根本区分不了它们。经过若干次分裂，群体就会分化成只带其中一种质粒的细胞。这正是 pDUET 系列刻意使用不同复制起点的原因。' },
    { type: 'mcq',
      q_en: 'What makes the failure mode of incompatible co-transformation especially dangerous?',
      q_cn: '不相容共转化的失败模式为什么特别危险？',
      options: ['The culture lyses as soon as both plasmids are taken up together', 'It is silent: the culture looks normal, but each cell expresses only one protein', 'The two plasmids recombine into a single larger, unstable plasmid that then loses one of the two genes', 'Resistance to both antibiotics is lost, so the whole culture dies off'],
      answer: 1,
      why_en: 'Nothing about growth, plating or even a western blot of the whole culture looks wrong: both proteins are present in the lysate. But they were never in the same cell, so no complex ever formed. You discover it only when the co-purification fails, which may be weeks later.',
      why_cn: '生长、铺板、甚至对整个培养物做 western blot 看起来都没有任何异常：两个蛋白都在裂解液里。但它们从来没有出现在同一个细胞里，所以复合物根本没形成过。你只有在共纯化失败时才会发现，而那可能已经是几周之后。' },
    { type: 'mcq',
      q_en: 'How many T7-driven genes can the three pDUET plasmids carry between them, and why does that matter?',
      q_cn: '三个 pDUET 质粒合起来能携带多少个 T7 驱动的基因，为什么这很重要？',
      options: ['Three — one T7 cassette on each plasmid, so one protein from each of them', 'Six — two T7 cassettes per plasmid, and the three origins are compatible', 'Two — only one of the plasmids responds to induction at any one time', 'Eight — four T7 cassettes on the largest plasmid and two on each of the other two'],
      answer: 1,
      why_en: 'pACYCDuet-1, pCDFDuet-1 and pCOLADuet-1 each carry two T7 cassettes, and each has a distinct origin and a distinct selectable marker, so all three can be maintained in one cell simultaneously. That is what makes assembling a genuine multi-subunit complex in vivo practical.',
      why_cn: 'pACYCDuet-1、pCDFDuet-1 和 pCOLADuet-1 各带两个 T7 表达盒，而且各自有不同的复制起点和不同的选择标记，因此三者可以在同一个细胞里同时维持。这才使得在体内组装真正的多亚基复合物成为可行的做法。' },
    { type: 'short',
      q_en: 'You need equal amounts of two subunits. Compare the polycistronic and the two-plasmid routes.',
      q_cn: '你需要等量的两个亚基。比较多顺反子路线和双质粒路线。',
      accept: ['polycistronic', 'translation initiation', 'origin', 'stoichiometry', 'marker'],
      answer_en: 'The polycistronic route puts both genes downstream of one promoter on one plasmid, which guarantees that every cell carrying the plasmid carries both genes — there is no possibility of the population splitting. The problem for equal stoichiometry is that the second gene expresses less, because translation initiation at an internal ribosome binding site is less efficient than at the first one. So you get a reliable ratio, but a reliably unequal one. The two-plasmid route puts each subunit on its own plasmid, each with its own promoter, so in principle you can balance them by choosing plasmids of different copy number. The absolute requirement is that the two plasmids have different origins of replication and different selectable markers; sharing an origin makes them incompatible, and the population then segregates into cells carrying one or the other. That failure is silent, because both proteins still appear in a whole-culture lysate even though no single cell ever made both. The practical answer for a defined complex is usually the pDUET series, which is designed for exactly this: pACYCDuet-1, pCDFDuet-1 and pCOLADuet-1 have deliberately different origins and markers, and each carries two T7 cassettes, so up to six genes can be co-expressed while the compatibility problem is handled for you. If the stoichiometry still comes out wrong, the remaining lever is which subunit goes on which copy-number background.',
      answer_cn: '多顺反子路线把两个基因放在同一个质粒、同一个启动子下游，这就保证了凡是带这个质粒的细胞都同时带有两个基因——群体不可能分裂。但对等比例来说的问题是：第二个基因表达得更少，因为内部核糖体结合位点的翻译起始效率不如第一个。所以你得到的是一个稳定的比例，但稳定地不相等。双质粒路线把每个亚基放在各自的质粒上、各有自己的启动子，原则上你可以通过选择不同拷贝数的质粒来平衡它们。绝对的前提是两个质粒必须有不同的复制起点和不同的选择标记；共用复制起点会使它们不相容，群体随后会分化成只带其中一种的细胞。这个失败是无声的，因为即使没有任何一个细胞同时造出两个蛋白，整体裂解液里两个蛋白仍然都在。对于确定的复合物，实际答案通常是 pDUET 系列，它正是为此设计的：pACYCDuet-1、pCDFDuet-1 和 pCOLADuet-1 刻意使用不同的复制起点和标记，每个又带两个 T7 表达盒，因此最多可以共表达六个基因，而相容性问题已经替你解决了。如果比例仍然不对，剩下的调节手段就是把哪个亚基放在哪个拷贝数背景上。'
    }
  ]
},

{
  id: '2-15',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.15',
  enTitle: 'Yeast plasmids — stability and copy number pull against each other',
  cnTitle: '酵母质粒——稳定性和拷贝数是反着来的',
  slides: 'L3 s.25–26',
  coverage: 'full',
  coverageNote: 'The four-row plasmid table is on the slide. What ARS and CEN each contribute is not, and without it the table is four arbitrary rows instead of one principle with an exception.',
  summary: {
    en: 'The three yeast species used are Pichia pastoris, Kluyveromyces lactis and Saccharomyces cerevisiae, all eukaryotic and therefore capable of most post-translational modifications. Four plasmid types are available, and the table becomes memorable once you see that stability and copy number trade against each other: integrating plasmids are the most stable at one copy, ARS-only plasmids reach 20 to 50 copies but are unstable, and the natural 2-micron plasmid is the one exception that achieves both.',
    cn: '用到的三个酵母物种是 Pichia pastoris、Kluyveromyces lactis 和 Saccharomyces cerevisiae，都是真核生物，因此能做大部分翻译后修饰。有四种质粒类型可选，而这张表一旦看出「稳定性和拷贝数互相牵制」就好记了：整合型最稳定但只有 1 个拷贝，只带 ARS 的能到 20–50 个拷贝但不稳定，而天然的 2µ 质粒是唯一两者兼顾的例外。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.26', src: 'img/figures/L3_s26_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这张表的规律是：**稳定性和拷贝数互相牵制**。整合型最稳但只有 1 个拷贝，只带 ARS 的能到 20–50 个但不稳。\n\n' +
            '**2µ 质粒是唯一的例外**——因为它是天然的酵母质粒，自带一套分配系统。',
  skipIt: 'YIp / YEp / YCp 这三个缩写本身不必死记（能说出「整合型 / 只带 ARS / 带 CEN」就行），拷贝数记量级即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Yeast expression**——**酵母这一块是被点名的**，但没有细到质粒类型。',
  explain: [
    {
      q: 'ARS 和 CEN 分别是什么？为什么加上 CEN 之后拷贝数反而掉到 1？',
      trace: {
        what: '**ARS**（autonomously replicating sequence，自主复制序列）= 酵母的**复制起点**，让质粒能自我复制。\n\n**CEN**（centromere）= **着丝粒**，让染色体能被纺锤体抓住、准确分配。',
        from: '这两个都是**从酵母染色体上借来的零件**。一条真染色体要稳定传给后代，需要两件事：**能被复制**（ARS 管这个）和**能被准确分配**（CEN 管这个）。质粒设计就是在挑要借哪几个零件。',
        to: '**只借 ARS（YEp）**：质粒能大量复制，20–50 个拷贝。但分裂时是**随机分配**的——很容易一大堆都跑进同一个子细胞，另一个一个都没拿到。所以**高拷贝，但不稳定**。\n\n**再借 CEN（YCp）**：现在质粒能被纺锤体像真染色体一样拉开，分配变得精确，**很稳定**。\n\n**但代价是拷贝数被压到 1。**因为它现在表现得像一条染色体，而细胞的染色体分配机制本来就是按「每样东西一份」运作的——**你借来了准确分配的能力，同时也接受了它自带的份数限制。**\n\n这就是为什么加一个元件反而让拷贝数下降：**你不是在叠加优点，你是在换一套规则。**',
        family: '对照第 1-9 节的 E. coli：那里也是 ORI 决定拷贝数，但细菌**没有着丝粒这套东西**——它防丢失的办法是高拷贝加抗生素筛选，靠数量和选择压力，不靠精确分配。'
      },
      takeaway: 'ARS 管复制，CEN 管分配。借了 CEN 就接受了染色体的规矩，所以拷贝数被压到 1。'
    },
    {
      q: '整合型（YIp）为什么最稳定？',
      a: '因为**它根本不是一个质粒了。**\n\n' +
         'YIp **完全没有 ORI**——它不能自我复制。它做的事是**把自己插进宿主基因组里**。\n\n' +
         '一旦整合进去，它的复制和分配就**完全由染色体负责**了。染色体怎么可靠，它就怎么可靠——**跟宿主自己的基因一样稳**。不需要抗生素维持，传上几百代也不会丢。\n\n' +
         '代价有两个：\n\n' +
         '**拷贝数只有 1**（除非专门做多拷贝整合）。\n\n' +
         '**整合本身是低效的**——你要筛更多克隆才能拿到一个成功的。\n\n' +
         '**所以它的用途很明确：长期稳定表达、建生产用的工程菌株。**你愿意在建株时多花力气，换来之后几年都不用操心。\n\n' +
         '这个「一次性投入换长期稳定」的模式，在后面哺乳动物细胞那几节还会再出现（第 2-23、2-24 节的稳定株 vs 瞬时转染）。',
      takeaway: '没有 ORI，直接插进基因组，所以跟宿主基因一样稳。代价是单拷贝且建株麻烦。'
    },
    {
      q: '2µ 质粒凭什么能同时做到高拷贝和稳定？',
      a: '**因为它不是人拼出来的，是酵母自己的东西。**\n\n' +
         '前面三种质粒都是「从染色体上借零件拼起来」的产物，所以受制于那些零件自带的规则。而 **2µ 是一个天然存在于酵母里的质粒**——它已经在酵母细胞里进化了几百万年，而它面对的正是同一个问题：**怎么既保持高拷贝，又不在细胞分裂时被丢掉。**\n\n' +
         '它的解法是**自带一套分配系统（partitioning system）**：不靠着丝粒、不占用染色体那套机制，而是用自己的一套主动机制保证两个子细胞都拿到。\n\n' +
         '**所以它是「例外」，而例外的理由是：这道题自然界已经解过了。**\n\n' +
         '这在这门课里已经是第几次出现了：exendin-4（第 1-2-3 节）、ccdB（第 1-10-2 节）、λ 整合酶（第 1-15 节）、T7 聚合酶（第 1-5-2 节）……\n\n' +
         '**看到一个「怎么两全其美」的问题，先问一句：有没有哪个生物已经解决了？**这是这门课反复在教的一个动作。',
      takeaway: '它是天然酵母质粒，自带分配系统。又一次「不是设计的，是找到的」。'
    },
    {
      q: '这张表实际怎么用？',
      a: '**倒着用：从你的需求推回质粒类型。**\n\n' +
         '**要长期稳定的生产株** → **YIp（整合型）**。建株麻烦，但建好之后不用管。\n\n' +
         '**只是做个实验、要高表达量** → **YEp（只带 ARS）**。不稳定无所谓，反正你只养几天，而且一直加着筛选压力。\n\n' +
         '**要稳定而且拷贝数受控** → **YCp（CEN + ARS）**。适合研究剂量效应，或者表达对细胞有负担的蛋白——**单拷贝在这里是优点不是缺点**。\n\n' +
         '**又要高又要稳** → **2µ**。\n\n' +
         '**跟第 1-9 节那张 E. coli 的表对照着记**，你会发现是同一类取舍换了个说法：\n\n' +
         '**E. coli**：克隆要高拷贝（只求 DNA 产量），表达要低拷贝（代谢负担）。\n\n' +
         '**酵母**：拷贝数高则不稳，稳则拷贝数低。\n\n' +
         '**两边都是「不存在免费的高拷贝」。**',
      takeaway: '从需求倒推：长期生产用整合型，短期高表达用 ARS 型，要受控用 CEN 型，两全用 2µ。'
    }
  ],
  points: [
    { term: 'Species used', en: 'Pichia pastoris (Invitrogen), Kluyveromyces lactis (NEB), and Saccharomyces cerevisiae.', cn: 'Pichia pastoris（Invitrogen）、Kluyveromyces lactis（NEB）和 Saccharomyces cerevisiae。' },
    { term: 'Why yeast at all', en: 'They are eukaryotic cells, so they perform most post-translational modifications — the thing E. coli cannot do.', cn: '它们是真核细胞，所以能进行大部分翻译后修饰——这正是大肠杆菌做不到的。' },
    { term: 'Integrating (YIp)', en: 'No origin of replication at all; it integrates into the genome. Copy number 1, very stable, used for long-term expression.', cn: '完全没有复制起点，直接整合进基因组。拷贝数 1，非常稳定，用于长期表达。' },
    { term: 'Replicating (YEp)', en: 'Carries an ARS sequence. Copy number 20 to 50, but unstable. Used for high but transient expression.', cn: '带 ARS 序列。拷贝数 20–50，但不稳定。用于高水平但短暂的表达。' },
    { term: 'Centromere (YCp)', en: 'Carries both CEN and ARS. Copy number 1, stable, giving balanced expression.', cn: '同时带 CEN 和 ARS。拷贝数 1，稳定，给出均衡的表达量。' },
    { term: 'Episomal (2 micron)', en: 'Derived from a natural yeast plasmid. Copy number 50 or more, and stable — used for high-level expression.', cn: '来自天然的酵母质粒。拷贝数 50 以上，而且稳定——用于高水平表达。' }
  ],
  beyondPoints: [
    { term: 'ARS is an origin of replication', en: 'An autonomously replicating sequence lets the plasmid copy itself. But that alone is not enough, because at cell division the copies are distributed at random and can easily all end up in one daughter, leaving the other with none. That is exactly why YEp has a high copy number but is unstable.', cn: '自主复制序列让质粒能自我复制。但光有它还不够，因为细胞分裂时拷贝是随机分配的，很容易全跑到一个子细胞里，另一个就一个都没有。这正是 YEp 拷贝数高却不稳定的原因。' },
    { term: 'CEN is a centromere', en: 'It lets the plasmid be pulled apart by the spindle like a real chromosome, so segregation becomes accurate. YCp is therefore very stable — but precisely because it behaves like a chromosome, its copy number is held down to one.', cn: '它让质粒像真正的染色体一样被纺锤体牵拉分离，所以分配变得准确。YCp 因此非常稳定——但也正因为它表现得像染色体，拷贝数被压到 1。' },
    { term: 'The principle and its exception', en: 'Stability and copy number pull against each other in yeast. YIp is at the stable extreme with no ORI at all. The 2-micron plasmid is the exception that gets both, because being a natural yeast plasmid it comes with its own partitioning system.', cn: '在酵母里稳定性和拷贝数互相牵制。YIp 处在稳定那一端，连复制起点都没有。2µ 质粒是两者兼得的例外，因为作为天然的酵母质粒，它自带一套分配机制。' }
  ],
  terms: [
    { en: 'ARS (autonomously replicating sequence)', cn: '自主复制序列', def_en: 'A yeast origin of replication. It allows a plasmid to replicate but provides no mechanism for distributing the copies accurately at division.', def_cn: '酵母的复制起点。它让质粒能够复制，但不提供在分裂时准确分配拷贝的机制。' },
    { en: 'CEN (centromere)', cn: '着丝粒', def_en: 'The sequence that lets the spindle attach and segregate a plasmid like a chromosome. It buys stability at the cost of holding copy number at one.', def_cn: '让纺锤体附着并像染色体那样分离质粒的序列。它换来稳定性，代价是拷贝数被限制在 1。' },
    { en: '2-micron plasmid', cn: '2µ 质粒', def_en: 'A natural S. cerevisiae plasmid carrying its own partitioning system, so it achieves both high copy number and stability — the exception to the usual trade-off.', def_cn: '一种天然的酿酒酵母质粒，自带分配系统，因此同时做到高拷贝数和稳定——是通常那条取舍关系的例外。' },
    { en: 'Plasmid stability', cn: '质粒稳定性', def_en: 'The fraction of cells still carrying the plasmid after growth without selection. Determined by how accurately copies are distributed at division, not by how many there are.', def_cn: '不加选择压力生长之后仍携带质粒的细胞比例。它取决于分裂时拷贝分配得有多准确，而不是拷贝有多少。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is a YEp plasmid unstable despite its high copy number?',
      q_cn: '为什么 YEp 质粒拷贝数很高却不稳定？',
      options: ['The ARS sequence is progressively degraded over many successive generations', 'ARS supports replication but not segregation, so copies split at random', 'The many copies recombine with one another and are lost from the cell', 'A high copy number is toxic, so yeast selects against carrying it'],
      answer: 1,
      why_en: 'ARS is only an origin of replication. Without a centromere there is nothing to partition the copies, so they segregate at random and daughter cells can end up with none.',
      why_cn: 'ARS 只是一个复制起点。没有着丝粒就没有东西来分配这些拷贝，于是它们随机分离，子细胞可能一个都拿不到。' },
    { type: 'mcq',
      q_en: 'Why is the copy number of a YCp centromeric plasmid only one?',
      q_cn: '为什么 YCp 着丝粒质粒的拷贝数只有 1？',
      options: ['Because its ARS is defective, so the plasmid replicates only poorly', 'Because the CEN makes it behave like a chromosome, and chromosomes are single copy', 'Because yeast actively degrades any extra copies that are produced', 'Because it integrates into a chromosome and is replicated along with it, so it is present once per genome'],
      answer: 1,
      optionNotes: {
        3: { en: 'Integration is what a YIp does, and the two are easy to confuse because both end up at one copy. A YCp stays an autonomous circular plasmid; it simply carries a CEN, so it is partitioned like a chromosome and is therefore held at chromosome copy number.', cn: '整合是 YIp 的做法，容易混是因为两者最后都是单拷贝。YCp 仍然是一个独立存在的环状质粒，它只是带了 CEN，被当成染色体来分配，所以拷贝数也就被压到染色体的水平。' }
      },
      why_en: 'The centromere is what buys the stability, but it does so by making the plasmid a chromosome-like element — and chromosome-like segregation implies chromosome-like copy number.',
      why_cn: '着丝粒带来了稳定性，但它是通过让质粒变成一个类似染色体的元件来实现的——而染色体式的分离也就意味着染色体式的拷贝数。' },
    { type: 'mcq',
      q_en: 'Which plasmid type achieves both high copy number and stability, and why?',
      q_cn: '哪种质粒同时做到高拷贝数和稳定？为什么？',
      options: ['YIp, because integration gives it stability at a high copy number', 'YCp, because its centromere gives both stability and high copy number', 'The 2-micron plasmid, because it carries its own partitioning system', 'YEp, because its ARS gives both high copy number and stable inheritance'],
      answer: 2,
      why_en: 'It is the exception to the trade-off. Being a natural yeast plasmid, it evolved a dedicated partitioning mechanism, so it gets accurate segregation without having to behave like a single-copy chromosome.',
      why_cn: '它是这条取舍关系的例外。作为天然的酵母质粒，它进化出了专门的分配机制，所以既能准确分离，又不必表现得像单拷贝的染色体。' },
    { type: 'short',
      q_en: 'Explain what ARS and CEN each contribute, and what that implies about the yeast plasmid table.',
      q_cn: '解释 ARS 和 CEN 各自的贡献，以及这对酵母质粒表意味着什么。',
      accept: ['ARS', 'origin', 'CEN', 'centromere', 'segregation', 'copy number', 'stability'],
      answer_en: 'ARS is an origin of replication, so it lets the plasmid copy itself, but it provides no way of distributing those copies at cell division — they segregate randomly, which is why a YEp reaches twenty to fifty copies yet is unstable. CEN is a centromere, which lets the spindle segregate the plasmid accurately like a chromosome; that gives stability, but because it now behaves like a chromosome its copy number is held at one, as in YCp. So the table reduces to one principle: in yeast, stability and copy number pull against each other. YIp sits at the stable extreme with no origin at all, integrated into the genome. The 2-micron plasmid is the single exception that gets both, because as a natural yeast plasmid it brings its own partitioning system.',
      answer_cn: 'ARS 是复制起点，让质粒能自我复制，但它不提供在细胞分裂时分配这些拷贝的办法——拷贝是随机分离的，这就是 YEp 能到 20–50 个拷贝却不稳定的原因。CEN 是着丝粒，让纺锤体像分离染色体那样准确地分离质粒；这带来稳定性，但因为它现在表现得像染色体，拷贝数就被压在 1，也就是 YCp。所以这张表归结为一条原则：在酵母里，稳定性和拷贝数互相牵制。YIp 处在稳定的极端，完全没有复制起点，直接整合进基因组。2µ 质粒是唯一两者兼得的例外，因为作为天然酵母质粒，它自带分配系统。'
    }
  ],
  oral: {
    q_en: 'What plasmid options do you have in yeast, and how would you choose?',
    q_cn: '在酵母里有哪些质粒可选？你会怎么选？',
    model_en: 'There are four types, and the useful thing is that they are not four arbitrary options but one trade-off with an exception. To see it you need to know what two sequences contribute. ARS, an autonomously replicating sequence, is an origin of replication — it lets the plasmid copy itself, but it does nothing about distributing those copies at cell division, so they segregate randomly and a daughter cell can easily end up with none. CEN, a centromere, lets the spindle grab the plasmid and segregate it accurately, exactly like a chromosome. Now the table follows. A replicating plasmid, YEp, has ARS only: copy number twenty to fifty, but unstable, so it suits high transient expression. A centromeric plasmid, YCp, has CEN plus ARS: stable, but because it now behaves like a chromosome its copy number is held at one, giving balanced expression. An integrating plasmid, YIp, has no origin at all and simply integrates into the genome: copy number one and very stable, for long-term expression. So stability and copy number pull against each other. The exception is the episomal two-micron plasmid, derived from a natural yeast plasmid, which reaches fifty copies or more and is still stable — because being a natural plasmid it evolved its own partitioning system, so it gets accurate segregation without having to be a single-copy element. That is the one to reach for when you want high-level expression and do not want to lose it.',
    checklist: ['Species: Pichia pastoris, Kluyveromyces lactis, S. cerevisiae', 'Eukaryotic, so most PTMs are available', 'ARS = origin of replication, but no segregation mechanism', 'CEN = centromere, accurate chromosome-like segregation', 'YEp: ARS only, 20-50 copies, unstable, transient high expression', 'YCp: CEN+ARS, 1 copy, stable, balanced expression', 'YIp: no ORI, integrates, 1 copy, very stable, long-term', 'Principle: stability and copy number pull against each other', '2-micron episomal is the exception: 50+ copies AND stable', 'Because a natural yeast plasmid brings its own partitioning system']
  }
},

{
  id: '2-16',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.16',
  enTitle: 'Yeast in practice — selection, promoters, and the two real disadvantages',
  cnTitle: '酵母的实际操作——筛选、启动子，以及两个真正的缺点',
  slides: 'L3 s.27–28',
  coverage: 'full',
  coverageNote: 'Transformation, markers, promoters, growth conditions and the two disadvantages are all on the slides. The trap worth spelling out is that "eukaryote" is widely misread as "glycosylation solved", when in fact yeast makes the wrong kind of glycan.',
  summary: {
    en: 'Yeast is transformed by electroporation or spheroplast transformation, and selected either with antibiotics such as Zeocin or with auxotrophic markers, where the plasmid supplies a biosynthetic gene the strain is missing. Promoters include the methanol-inducible AOX1 and the constitutive pGAP and pLAC4. Growth is cheap and reaches enormous densities. The two real disadvantages are high-mannose glycosylation, which is immunogenic in humans, and a cell wall that is very difficult to disrupt.',
    cn: '酵母用电转或原生质球转化，筛选可以用 Zeocin 这类抗生素，也可以用营养缺陷型标记——由质粒补上菌株缺失的某个生物合成基因。启动子包括甲醇诱导的 AOX1，以及组成型的 pGAP 和 pLAC4。培养便宜，而且能达到极高的密度。两个真正的缺点是：高甘露糖型糖基化在人体内有免疫原性，以及细胞壁非常难破。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.28', src: 'img/figures/L3_s28_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '酵母的两个真缺点：**糖基化是高甘露糖型的**（跟人的复杂型不一样，有免疫原性），以及**细胞壁极难破**。\n\n' +
            '**「是真核生物所以糖基化没问题」是错的**——有糖 ≠ 有对的糖。',
  skipIt: 'AOX1 / pGAP / pLAC4 这几个启动子名字知道「甲醇诱导的那个是 AOX1」就够。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Yeast expression**——**酵母是被点名的**，要能讲优缺点，但启动子型号不是考点。',
  explain: [
    {
      q: '「营养缺陷型标记」是怎么筛选的？跟抗生素比有什么不同？',
      trace: {
        what: '**用「缺什么补什么」代替「有毒的药」。**菌株本身被敲掉了某个必需物质的合成基因（比如不能自己合成亮氨酸，写作 leu−），而质粒上带着那个基因。',
        from: '培养基里**故意不加**亮氨酸。于是：没拿到质粒的细胞造不出亮氨酸，长不起来；拿到质粒的能自己造，长得起来。**筛选压力来自「缺」，不是来自「毒」。**',
        to: '跟抗生素比，三个实在的好处：\n\n**不用买抗生素**——大规模发酵时这是真金白银。\n\n**没有「抗性酶把药降解掉导致筛选失效」的问题**——回想第 1-10-1 节的卫星菌落，那个坑在这里根本不存在，因为**没有任何机制能凭空造出亮氨酸**。\n\n**不用往产品里引入抗性基因**——做药物生产时，这在监管上是加分项。',
        family: '常用的标记：氨基酸类的 **Leu、His、Trp**，碱基类的 **Ura、Ade**。\n\n**注意这跟第 1-13 节的蓝白斑一样，是一个拆成两半的系统**：菌株必须缺那个基因，质粒必须带那个基因。**用错菌株，筛选完全失效**——而且是「全都长出来」这种失效。'
      },
      takeaway: '压力来自「缺」不是「毒」。所以没有卫星菌落问题，但菌株和质粒必须配套。'
    },
    {
      q: '「酵母是真核生物，所以糖基化没问题」——这句话错在哪？',
      a: '**错在把「有糖」当成了「有对的糖」。**\n\n' +
         '酵母确实做 N-连接糖基化，识别的也是同一个 Asn-X-Ser/Thr 信号（第 1-2-2 节）。但它接下来加工出来的东西**跟人的完全不同**：\n\n' +
         '**酵母做的是高甘露糖型**——一条长长的甘露糖链，有时候几十个甘露糖残基串成一串。\n\n' +
         '**人做的是复杂型**——分支结构，末端带唾液酸。\n\n' +
         '**两个后果：**\n\n' +
         '**免疫原性。**人体的免疫系统认得出高甘露糖是「非人的」东西——那是真菌和某些病原体表面的特征。所以这样的蛋白当药用会引发免疫反应。\n\n' +
         '**药代不同。**糖链结构决定清除速度（第 1-2-2 节 EPO 那节讲过唾液酸的作用），结构不对，半衰期就不对。\n\n' +
         '**所以第 2-3 节决策链第 2 步问的正是这个：**\n\n' +
         '**只是需要糖来帮忙折叠** → 酵母够用。\n\n' +
         '**要做人用的药、糖必须像人的** → 酵母不够，得上哺乳动物细胞。\n\n' +
         '（确实存在「糖基化人源化」的改造酵母株，把它自己的糖基化通路换成人的——但那是一项专门的工程，不是酵母的默认状态。）',
      takeaway: '酵母做高甘露糖型，人做复杂型。有糖不等于有对的糖——这正是决策链第 2 步在问的。'
    },
    {
      q: '「细胞壁很难破」为什么算一个真正的缺点，而不是小麻烦？',
      a: '因为**它把成本推到了下游，而下游的成本更贵。**\n\n' +
         'E. coli 超声一下、或者加点溶菌酶就破了。酵母的细胞壁又厚又韧，需要**玻璃珠研磨、高压均质**这类更暴力的手段。\n\n' +
         '**而暴力手段的副作用是全方位的：**\n\n' +
         '机械剪切会**打碎你的蛋白**；\n\n' +
         '大量做功会**让温度升高**，加速变性；\n\n' +
         '细胞被彻底打烂，**液泡里的蛋白酶全释放出来**了——而酵母的液泡里蛋白酶浓度很高。\n\n' +
         '**所以这条缺点的真正含义是：「酵母表达」的成本不止在表达那一步。**你可能表达得很好，却在裂解这一步损失掉一半。\n\n' +
         '**这也解释了酵母系统为什么特别偏爱分泌表达。**让蛋白自己跑到培养基里去，你就**完全绕开了裂解这个问题**——不用破壁，起始材料还特别干净（培养基里本来没什么蛋白）。\n\n' +
         '代价是要处理很大体积的稀溶液，那是第 2-27 节的内容。',
      takeaway: '暴力破壁会打碎蛋白、升温、释放液泡蛋白酶。所以酵母特别偏爱分泌表达——绕开裂解。'
    },
    {
      q: 'OD600 能到 300，这个数字该怎么理解？',
      a: '**它的意思是：比较系统时不能只看「每个细胞表达多少」。**\n\n' +
         '摇瓶里的 E. coli，OD600 通常就是个位数。而 Pichia 在发酵罐里能到 **300**——幻灯片说是「比 E. coli 高一个数量级」。\n\n' +
         '**后果很直接：即使酵母单个细胞的表达量比 E. coli 低，每升培养液最后拿到的蛋白也可能更多。**\n\n' +
         '因为总产量 = 单细胞产量 × 细胞数，而它在第二项上赢得太多。\n\n' +
         '**这就是 Pichia 在工业生产上有一席之地的原因**，尽管它在「单细胞表达能力」这个指标上并不突出。\n\n' +
         '推广一下：**比较任何两个系统时，要一路算到「每升培养液最终拿到多少毫克可用蛋白」**，而不是停在某一个中间指标上。第 2-1 节那张表里的「产量」一列，指的就是这个终点值，不是单细胞的表达强度。',
      takeaway: '总产量 = 单细胞产量 × 细胞数。酵母在第二项上赢一个数量级，所以工业上有它的位置。'
    }
  ],
  points: [
    { term: 'Transformation', en: 'Electroporation, or spheroplast transformation.', cn: '电转，或者原生质球转化。' },
    { term: 'Antibiotic selection', en: 'Zeocin is the usual choice.', cn: '通常用 Zeocin。' },
    { term: 'Auxotrophic markers', en: 'Grow the yeast on medium missing a critical component that the plasmid-borne marker gene can synthesise — an essential amino acid such as Leu, His or Trp, or a nucleobase such as Ura or Ade.', cn: '把酵母养在缺少某个关键成分的培养基上，而这个成分正好能由质粒上的标记基因合成——必需氨基酸如 Leu、His、Trp，或者碱基如 Ura、Ade。' },
    { term: 'Inducible promoter — AOX1', en: 'From Pichia pastoris, induced with methanol.', cn: '来自 Pichia pastoris，用甲醇诱导。' },
    { term: 'Constitutive promoters', en: 'pGAP from P. pastoris, and pLAC4 from K. lactis — the latter is leaky in E. coli, though an improved version exists.', cn: 'P. pastoris 的 pGAP，以及 K. lactis 的 pLAC4——后者在大肠杆菌中有渗漏，不过有改进版本。' },
    { term: 'Growth conditions', en: 'Cheap media similar to E. coli, chemically defined media are possible, 30 degrees, standard shakers or fermenters.', cn: '培养基便宜，和大肠杆菌相似，可以用成分明确的培养基，30 度，普通摇床或发酵罐即可。' },
    { term: 'Extremely high densities', en: 'OD600 of 300 in fermenters — an order of magnitude beyond what E. coli reaches.', cn: '发酵罐中 OD600 可达 300——比大肠杆菌高一个数量级。' },
    { term: 'Disadvantage — glycosylation', en: 'High-mannose N-linked sugars in S. cerevisiae, which can be immunogenic in humans. Glycoengineered "humanised glycosylation" strains exist.', cn: '酿酒酵母产生高甘露糖型 N-糖链，在人体内可能有免疫原性。有经过糖工程改造的「人源化糖基化」菌株。' },
    { term: 'Disadvantage — lysis', en: 'Intracellular expression is a problem because the cell wall is very difficult to disrupt.', cn: '胞内表达是个麻烦，因为细胞壁非常难破。' }
  ],
  beyondPoints: [
    { term: 'Having glycans is not the same as having the right glycans', en: 'It is commonly assumed that because yeast is eukaryotic, glycosylation is solved. It is not. Yeast does perform N-glycosylation, but it produces high-mannose structures, sometimes dozens of mannose residues in a long chain, which are completely unlike the human complex type.', cn: '常见的误解是「酵母是真核生物，所以糖基化没问题」。并非如此。酵母确实做 N-糖基化，但产生的是高甘露糖结构，有时是几十个甘露糖连成的长链，和人类的复杂型糖链完全不同。' },
    { term: 'Two consequences', en: 'First, immunogenicity in humans — the glycans are recognised as foreign, provoking antibodies and rapid clearance. Second, heterogeneity — glycoforms vary within a single batch, which makes pharmaceutical quality control difficult.', cn: '后果有两个。第一，在人体内有免疫原性——糖链被识别为异物，引发抗体产生和快速清除。第二，异质性——同一批产物的糖型就不一致，给药品质量控制带来很大麻烦。' },
    { term: 'What people actually do', en: 'Therapeutic proteins rarely use wild-type yeast. Either you use a glycoengineered strain, with the mannosyltransferases knocked out and human glycosyltransferases installed, or you go straight to CHO cells.', cn: '治疗性蛋白很少用野生型酵母。要么用糖工程改造株（敲掉甘露糖转移酶、装上人的糖基转移酶），要么直接上 CHO 细胞。' },
    { term: 'Why Pichia is so often used for secretion', en: 'The tough cell wall puts yeast in the hardest tier for lysis, alongside plants. Secreting the protein into the medium sidesteps the disruption problem entirely — which is why secreted expression is the standard Pichia strategy.', cn: '坚硬的细胞壁让酵母和植物一起排在最难裂解的那一档。把蛋白分泌到培养基里就完全绕开了破碎的问题——这正是分泌表达成为 Pichia 标准策略的原因。' }
  ],
  terms: [
    { en: 'Auxotrophic marker', cn: '营养缺陷型标记', def_en: 'Selection by supplying a biosynthetic gene the host strain lacks, then growing on medium missing that nutrient. Requires no antibiotic.', def_cn: '通过补上宿主菌株缺失的某个生物合成基因来筛选，然后在缺少该营养物的培养基上生长。不需要抗生素。' },
    { en: 'AOX1 promoter', cn: 'AOX1 启动子', def_en: 'The alcohol oxidase 1 promoter of Pichia pastoris, induced by methanol. The standard inducible promoter in that host.', def_cn: 'Pichia pastoris 的醇氧化酶 1 启动子，由甲醇诱导。该宿主中标准的诱导型启动子。' },
    { en: 'High-mannose glycan', cn: '高甘露糖型糖链', def_en: 'An N-linked sugar consisting of a long chain of mannose residues, characteristic of yeast. Immunogenic in humans and heterogeneous between molecules.', def_cn: '由一长串甘露糖残基组成的 N-连接糖链，是酵母的特征。在人体内有免疫原性，而且分子之间不均一。' },
    { en: 'Spheroplast', cn: '原生质球', def_en: 'A yeast cell whose wall has been enzymatically removed, making it competent for DNA uptake. One of the two transformation routes.', def_cn: '细胞壁被酶解去除的酵母细胞，因而能够摄取 DNA。两种转化途径之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why are wild-type yeast strains rarely used for therapeutic glycoproteins?',
      q_cn: '为什么治疗性糖蛋白很少用野生型酵母生产？',
      options: ['Yeast cannot attach any glycan to a protein in the first place at all', 'Yeast adds high-mannose glycans, which are immunogenic in humans', 'Yeast grows far too slowly to reach a useful scale of manufacture', 'Yeast cannot secrete a folded protein out into the culture medium'],
      answer: 1,
      optionRefs: { 0: '2-25' },
      why_en: 'Yeast does glycosylate — the problem is that it makes the wrong kind. High-mannose chains are recognised as foreign, provoking antibodies and rapid clearance, and they vary between molecules, which makes quality control hard.',
      why_cn: '酵母确实会糖基化——问题在于做出来的是错的那种。高甘露糖链会被识别为异物、引发抗体和快速清除，而且分子之间还不一致，质量控制很困难。' },
    { type: 'mcq',
      q_en: 'How does an auxotrophic marker select for transformants?',
      q_cn: '营养缺陷型标记是怎么筛选转化子的？',
      options: ['It confers resistance to an antibiotic such as Zeocin that is added to the medium', 'The plasmid supplies a gene the strain lacks, and the medium lacks that nutrient', 'It makes transformed colonies fluoresce so that they can be picked out', 'It produces a toxin that kills off the untransformed cells directly'],
      answer: 1,
      optionRefs: { 0: '1-10-1' },
      why_en: 'The strain cannot make, say, leucine; the plasmid carries the gene that does. Growing on medium without leucine means only plasmid-bearing cells survive, with no antibiotic required.',
      why_cn: '菌株自己不能合成（比如）亮氨酸，而质粒带着那个基因。养在不含亮氨酸的培养基上，就只有带质粒的细胞能活下来，完全不需要抗生素。' },
    { type: 'mcq',
      q_en: 'Why is secreted expression the standard strategy in Pichia pastoris?',
      q_cn: '为什么分泌表达是 Pichia pastoris 的标准策略？',
      options: ['A secreted protein comes out more concentrated than an intracellular one, so no concentration step is needed', 'The yeast cell wall is very hard to break, so secretion avoids lysis altogether', 'Pichia is not able to express a protein intracellularly at all', 'Secretion improves the quality of the glycans added to the product'],
      answer: 1,
      optionNotes: {
        3: { en: 'Secretion routes the protein through the yeast ER and Golgi, which is exactly where the high-mannose outer chains get added — so it is where the glycan problem is created, not where it is fixed. Better glycans need a humanised engineered strain, not a signal sequence.', cn: '分泌意味着蛋白要走一遍酵母的 ER 和 Golgi，而高甘露糖外链正是在那里加上去的——所以这条路是糖型问题产生的地方，不是解决的地方。要糖型更好，需要的是人源化改造的菌株，不是一段信号肽。' }
      },
      why_en: 'Yeast sits in the hardest tier for cell disruption, alongside plants. If the protein is already in the medium, you never have to break the wall — which also means the material starts out much cleaner.',
      why_cn: '酵母和植物一起排在最难裂解的那一档。如果蛋白已经在培养基里，就根本不用破壁——而且这也意味着起始材料本身干净得多。' },
    { type: 'short',
      q_en: 'A colleague says "we will use yeast, it is a eukaryote so glycosylation is taken care of." What is wrong with that?',
      q_cn: '同事说「我们用酵母吧，它是真核生物，糖基化就解决了」。这句话哪里不对？',
      accept: ['high-mannose', 'wrong glycan', 'immunogenic', 'heterogeneous', 'CHO'],
      answer_en: 'Having glycans is not the same as having the right glycans. Yeast does perform N-glycosylation, but it produces high-mannose structures, sometimes dozens of mannose residues in a long chain, which are completely unlike the human complex type. Two things follow. In humans those glycans are immunogenic — recognised as foreign, provoking antibodies and rapid clearance. And they are heterogeneous, varying between molecules within a single batch, which makes pharmaceutical quality control difficult. So for a therapeutic you would either need a glycoengineered strain, with the mannosyltransferases knocked out and human glycosyltransferases installed, or you would go straight to CHO cells.',
      answer_cn: '有糖链不等于有对的糖链。酵母确实做 N-糖基化，但产生的是高甘露糖结构，有时是几十个甘露糖连成的长链，和人类的复杂型糖链完全不同。由此有两个后果。在人体内这些糖链有免疫原性——被识别为异物，引发抗体产生和快速清除。而且它们是异质的，同一批产物的分子之间就不一样，给药品质量控制带来很大麻烦。所以做治疗性蛋白，要么需要糖工程改造株（敲掉甘露糖转移酶、装上人的糖基转移酶），要么直接上 CHO 细胞。'
    }
  ],
  oral: {
    q_en: 'Talk me through using yeast as an expression host — the practicalities and the drawbacks.',
    q_cn: '讲讲用酵母做表达宿主——实际操作和缺点。',
    model_en: 'The species used are Pichia pastoris, Kluyveromyces lactis and Saccharomyces cerevisiae. You transform by electroporation or by spheroplast transformation, and you select either with an antibiotic such as Zeocin, or with an auxotrophic marker — that is, you use a strain that cannot make some essential component, leucine, histidine, tryptophan, uracil or adenine, put the corresponding biosynthetic gene on the plasmid, and grow on medium lacking that nutrient, so only transformants survive without needing any antibiotic. For promoters, the standard inducible one is AOX1 from Pichia, induced with methanol; the constitutive options are pGAP in Pichia and pLAC4 in Kluyveromyces, though pLAC4 is leaky in E. coli and an improved version exists. Growth is attractive: media are cheap and similar to E. coli, chemically defined media are possible, cultivation is at thirty degrees in standard shakers or fermenters, and the densities are extraordinary — OD six hundred of three hundred in a fermenter, an order of magnitude past E. coli. Then there are two real disadvantages. The first is glycosylation, and this is where people get caught. The assumption is that because yeast is eukaryotic, glycosylation is solved, but yeast makes high-mannose N-linked sugars, sometimes dozens of mannoses in a chain, nothing like the human complex type. Those are immunogenic in humans, provoking antibodies and rapid clearance, and they are heterogeneous within a batch, which wrecks pharmaceutical quality control. So for a therapeutic you use a glycoengineered humanised strain or you go to CHO. The second disadvantage is that the cell wall is very tough, putting yeast in the hardest tier for disruption alongside plants — which is precisely why secreted expression is the standard Pichia strategy, since it sidesteps lysis altogether.',
    checklist: ['Transformation: electroporation or spheroplast', 'Selection: Zeocin, or auxotrophic markers (Leu, His, Trp, Ura, Ade)', 'Auxotrophy needs no antibiotic — plasmid supplies the missing gene', 'Inducible: AOX1, methanol-induced. Constitutive: pGAP, pLAC4', 'Cheap media, 30 C, defined media possible', 'Very high density: OD600 = 300 in fermenters', 'Drawback 1: high-mannose glycans, not human complex type', 'Immunogenic and heterogeneous, so bad for therapeutics', 'Fix: glycoengineered humanised strain, or use CHO instead', 'Drawback 2: tough cell wall, hardest tier to lyse, hence secretion in Pichia']
  }
},

{
  id: '2-17',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.17',
  enTitle: 'Insect cells and baculovirus biology',
  cnTitle: '昆虫细胞与杆状病毒生物学',
  slides: 'L3 s.29–31',
  coverage: 'full',
  coverageNote: 'The cell lines, culture conditions, viral properties and gene classes are on the slides. Why the polyhedrin promoter is so strong, and why deleting polyhedrin costs nothing in culture, is the beyond-the-slides explanation for the whole system.',
  summary: {
    en: 'Insect cells bridge the gap between yeast and mammalian systems, supporting complex folding and many post-translational modifications at moderate cost. Two experimental routes exist: transient high-yield baculovirus infection, and slower continuous expression from stably transfected S2 cells. Baculovirus is a large circular double-stranded DNA virus that does not replicate in vertebrates, has many non-essential genes, and carries the extremely powerful very-late promoters p10 and polyhedrin.',
    cn: '昆虫细胞架起了酵母和哺乳动物系统之间的桥梁，能以中等成本支持复杂折叠和多种翻译后修饰。有两条实验路线：瞬时高产的杆状病毒感染，以及稳定转染 S2 细胞后的持续表达。杆状病毒是一种大型环状双链 DNA 病毒，不在脊椎动物中复制，有很多非必需基因，并携带极强的极晚期启动子 p10 和多角体蛋白启动子。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.29', src: 'img/figures/L3_s29_1.webp' },
    { slide: 'L3 s.31', src: 'img/figures/L3_s31_1.webp' },
    { slide: 'L3 s.31', src: 'img/figures/L3_s31_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '杆状病毒系统产量高的根源只有一句话：**你借用了 polyhedrin 启动子**——一个被自然选择打磨到极致的超强启动子，**而它原本驱动的那个产物在实验室里完全没用，所以可以整个删掉**。',
  skipIt: 'Sf9 / Hi5 / S2 各自的密度数字（6M / 2M / 30M per mL）记个相对大小就行。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **Natural baculovirus cycle – very late genes, occlusion bodies (polyhedrin, P10)**——**病毒的天然周期、极晚期基因、包埋体这三样是被点名的**，要能讲。',
  explain: [
    {
      q: 'polyhedrin 是什么？为什么它的启动子会强到这个地步？',
      trace: {
        what: '**一种蛋白**。病毒在感染的最晚期大量表达它，让它结晶，**把自己整个包埋在这些蛋白晶体里**——这就是「包埋体（occlusion body）」。',
        from: '病毒为什么要把自己包起来？因为杆状病毒的生活史需要**在宿主体外存活**：幼虫被感染后死掉、尸体腐烂，病毒粒子就暴露在土壤和阳光里。**包在坚固的蛋白晶体里，它才能撑到下一只幼虫把它吃下去。**\n\n所以 polyhedrin 是病毒的**野外生存装备**，而且要用量极大——包住自己需要海量的蛋白。它的启动子因此**一直处在「越强越好」的选择压力下**。',
        to: '**关键的一步：既然它是野外生存装备，那它在实验室的细胞培养瓶里完全没用。**培养瓶里没有土壤、没有阳光、没有下一只幼虫。\n\n所以标准做法是：**把 polyhedrin 基因整个删掉，把你的基因放在它的启动子后面。**\n\n**病毒在培养里的复制能力一点没受影响，而你继承了生物界最强的启动子之一。**这就是这个系统高产的全部根源。',
        family: '**p10** 是另一个极晚期启动子，同样极强、同样可删，逻辑完全一样。两个一起用还可以同时表达两个蛋白。'
      },
      takeaway: '它是病毒的野外生存装备，所以启动子被选择得极强；而实验室里用不着，所以删了不心疼。'
    },
    {
      q: '「极晚期」是什么意思？为什么最强的启动子都在那个阶段？',
      a: '**因为到了那个阶段，细胞里已经没有竞争者了。**\n\n' +
         '杆状病毒的基因按时间分成四批，注意第三批干了什么：\n\n' +
         '**immediate early（立即早期）** —— 转录调控因子，先把指挥系统建起来。\n\n' +
         '**delayed early（延迟早期）** —— 病毒基因组复制，以及操控宿主。\n\n' +
         '**late（晚期）** —— **关掉宿主自己的 DNA 复制和蛋白合成**。\n\n' +
         '**very late（极晚期）** —— polyhedrin 包埋、几丁质酶降解宿主组织。\n\n' +
         '**看第三步。**病毒在这一步把宿主的蛋白合成关停了。于是到了极晚期，细胞里那整套核糖体和翻译机器**几乎全部空闲下来，专门给病毒用**。\n\n' +
         '**所以极晚期启动子的「强」，是两件事叠加的结果：**\n\n' +
         '**启动子本身被选择得很强**（要造海量的包埋蛋白）；\n\n' +
         '**它工作在一个没有竞争者的环境里**（宿主的转录翻译已经被关掉了）。\n\n' +
         '这跟第 2-8 节 T7 系统的「正交性」其实是同一个收益，只不过 T7 靠的是「别人读不了我的启动子」，杆状病毒靠的是**直接把别人关掉**。',
      takeaway: '晚期基因先关掉宿主的蛋白合成，所以极晚期启动子是在一个没有竞争者的细胞里工作。'
    },
    {
      q: '三种昆虫细胞怎么分工？',
      a: '**前两种配病毒，第三种走另一条路。**\n\n' +
         '**Sf9 / Sf21**（草地贪夜蛾 Spodoptera frugiperda）—— 密度约 600 万/mL，**皮实、好养，是标准选择**。做病毒扩增和常规表达都用它。\n\n' +
         '**Hi5**（粉纹夜蛾 Trichoplusia ni）—— 密度约 200 万/mL，比 Sf9 低，但**分泌型蛋白的产量常常更高**。所以它是「你的蛋白是分泌的，试试换 Hi5」这种场合用的。\n\n' +
         '**S2**（果蝇 Drosophila melanogaster）—— 密度约 3000 万/mL，**比另外两个高一个数量级**。而且它走的完全是另一条路线：**稳定转染，不用病毒**（第 2-19 节）。\n\n' +
         '所以记忆钩子可以这样搭：\n\n' +
         '**Sf9 = 默认；Hi5 = 分泌型的备选；S2 = 不用病毒的那一条路。**\n\n' +
         '顺带一个共同点：昆虫细胞是**半贴壁**的——轻轻贴在塑料上，很容易转成悬浮培养。这一点在放大时很值钱，因为悬浮培养才能放进反应器。',
      takeaway: 'Sf9 是默认，Hi5 换来更高的分泌产量，S2 密度高一个量级且不用病毒。'
    },
    {
      q: '「不在脊椎动物里复制」为什么是这个系统的关键卖点？',
      a: '因为它把**生物安全**这个问题直接消掉了。\n\n' +
         '杆状病毒能感染 600 多种宿主——听起来很吓人，但**全部是昆虫**，而且主要是幼虫期。**它进不了人的细胞，也不能在里面复制。**\n\n' +
         '所以你在实验室里操作大量高滴度的病毒液，防护等级可以很低。这在实际工作中是巨大的便利：普通的细胞房就能做，不需要专门的设施和审批。\n\n' +
         '**跟第 2-24 节的慢病毒对照一下，差别就出来了：**慢病毒基于 HIV，虽然经过了大量安全改造，**但它的本职就是感染人的细胞**——所以它必须在更高等级的实验室里操作，有一整套规程。\n\n' +
         '**所以只要你打算「用病毒当工具」，第一个该问的永远是：它能不能感染我？**\n\n' +
         '这个问题的答案会决定你需要什么样的实验室、多少审批、以及这条路在你的环境里可不可行——**它经常比产量高低更早地把选项砍掉。**',
      takeaway: '它只感染昆虫，所以防护等级低、普通细胞房就能做。用病毒当工具时这总是第一个该问的。'
    }
  ],
  points: [
    { term: 'The positioning', en: 'Insect cells bridge the gap between yeast and mammalian systems — complex folding and many PTMs, at moderate cost.', cn: '昆虫细胞架起酵母和哺乳动物系统之间的桥梁——支持复杂折叠和多种翻译后修饰，成本中等。' },
    { term: 'Two experimental systems', en: 'Baculovirus infection, which is transient and high-yield; and stable transfection of S2 cells, which is slower but gives continuous expression.', cn: '杆状病毒感染，瞬时且高产；以及 S2 细胞稳定转染，较慢但能持续表达。' },
    { term: 'Culture characteristics', en: 'Semi-adherent — they attach weakly to plastic and are easily transferred to suspension. Cultivation at 24 to 27 degrees, media slightly acidic at pH 6.7, serum-free media available.', cn: '半贴壁——与塑料的附着很弱，容易转成悬浮培养。培养温度 24–27 度，培养基略偏酸，pH 6.7，有无血清培养基可用。' },
    { term: 'Sf9 and Sf21', en: 'From Spodoptera frugiperda, density 6 million per mL. Robust, and the standard system.', cn: '来自 Spodoptera frugiperda，密度 6×10⁶/mL。皮实，是标准系统。' },
    { term: 'Hi5', en: 'From Trichoplusia ni, density 2 million per mL. Often gives higher secretion yield.', cn: '来自 Trichoplusia ni，密度 2×10⁶/mL。分泌产量往往更高。' },
    { term: 'Schneider S2', en: 'From Drosophila melanogaster, density 30 million per mL — much higher than the others. Used for stable transfection, with no virus required.', cn: '来自果蝇 Drosophila melanogaster，密度 30×10⁶/mL——远高于其他。用于稳定转染，不需要病毒。' },
    { term: 'Baculovirus genome', en: 'Circular double-stranded DNA, 120 kbp.', cn: '环状双链 DNA，120 kbp。' },
    { term: 'Host range and safety', en: 'Infects over 600 host species, mostly larval forms, but does not replicate in vertebrates — this is the safety argument.', cn: '能感染 600 多个宿主物种，主要是幼虫期，但不在脊椎动物中复制——这就是安全性论据。' },
    { term: 'Non-essential genes', en: 'The genome carries many genes that are dispensable — this is why there is room for your insert.', cn: '基因组带有很多可有可无的基因——这正是能容纳你的插入片段的原因。' },
    { term: 'Gene classes in temporal order', en: 'Immediate early (transregulators), delayed early (replication and host manipulation), late (shutdown of host DNA replication and protein synthesis), very late (polyhedrin occlusion, and host degradation by chitinase).', cn: '按时间顺序：立即早期（转录调控因子）、延迟早期（复制与宿主操纵）、晚期（关闭宿主 DNA 复制和蛋白合成）、极晚期（多角体包埋，以及几丁质酶降解宿主）。' },
    { term: 'The powerful promoters', en: 'The very-late viral promoters p10 and polyhedrin (pOH).', cn: '极晚期病毒启动子 p10 和多角体蛋白启动子（pOH）。' }
  ],
  beyondPoints: [
    { term: 'Why polyhedrin is such a strong promoter', en: 'In nature the virus packages itself inside polyhedrin crystals so it can survive outside a host. That protein is expressed in the very-late phase at enormous levels, becoming the dominant product of the infected cell — so its promoter has been under selection to be as strong as possible.', cn: '在自然界，病毒把自己包裹进多角体蛋白晶体里，以便在宿主之外存活。这个蛋白在极晚期以极高水平表达，成为被感染细胞的主要产物——所以它的启动子一直在被选择压力推向尽可能强。' },
    { term: 'Why deleting it costs nothing', en: 'Polyhedrin is entirely dispensable in cell culture, because the virus does not need to survive in soil. So the standard trick is to delete polyhedrin and put your gene under its promoter: you inherit one of the strongest promoters in biology at no cost to the virus\'s ability to replicate in culture.', cn: '在细胞培养里多角体蛋白完全是多余的，因为病毒不需要在土壤中存活。所以标准做法是删掉多角体蛋白、把你的基因放在它的启动子下：你继承了生物学中最强的启动子之一，而病毒在培养中的复制能力毫发无损。' },
    { term: 'This is the root of the high yield', en: 'The baculovirus system is productive because you are borrowing a promoter that evolved for the virus\'s survival in the wild, while the product it originally drove is useless in the laboratory.', cn: '杆状病毒系统之所以高产，是因为你借用的是一个为病毒在野外生存而进化出来的启动子，而它原本驱动的那个产物在实验室里根本用不着。' }
  ],
  terms: [
    { en: 'Baculovirus', cn: '杆状病毒', def_en: 'A circular double-stranded DNA insect virus, 120 kbp, that infects over 600 mostly larval species and does not replicate in vertebrates.', def_cn: '一种环状双链 DNA 昆虫病毒，120 kbp，能感染 600 多个（主要是幼虫期的）物种，不在脊椎动物中复制。' },
    { en: 'Polyhedrin promoter (pOH)', cn: '多角体蛋白启动子', def_en: 'A very-late baculovirus promoter, among the strongest known. Its natural product is dispensable in culture, so the gene is deleted and replaced with the target.', def_cn: '杆状病毒的极晚期启动子，是已知最强的之一。它的天然产物在培养中是多余的，所以该基因被删除并换成目标基因。' },
    { en: 'Semi-adherent', cn: '半贴壁', def_en: 'Attaching only weakly to plastic, so cells can be transferred to suspension culture easily — a practical advantage of insect lines.', def_cn: '只与塑料弱附着，因此细胞可以轻松转为悬浮培养——昆虫细胞系的一个实际优势。' },
    { en: 'Occlusion body', cn: '包埋体', def_en: 'The polyhedrin crystal in which baculovirus packages itself to survive outside a host. Made in the very-late phase, and unnecessary in cell culture.', def_cn: '杆状病毒把自己包裹进去以便在宿主之外存活的多角体蛋白晶体。在极晚期形成，在细胞培养中并不需要。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is the polyhedrin promoter so strong, and why can its own gene be deleted?',
      q_cn: '为什么多角体蛋白启动子这么强？为什么它自己的基因可以被删掉？',
      options: ['It is a host promoter that the virus borrowed, and its own product is toxic to the cell', 'Vast amounts package the virus for survival outside the host, which culture never needs', 'It is the only promoter in the baculovirus genome, so all output must go there', 'The gene is deleted only to keep the genome small enough to be packaged'],
      answer: 1,
      why_en: 'Selection has driven the promoter to be extremely strong because polyhedrin must dominate the infected cell. In culture the virus never needs to survive in soil, so deleting the gene costs nothing while the promoter remains available for your insert.',
      why_cn: '因为多角体蛋白必须主导被感染的细胞，选择压力把这个启动子推到了极强。在培养中病毒根本不需要在土壤里存活，所以删掉这个基因毫无代价，而启动子仍然可以留给你的插入片段用。' },
    { type: 'mcq',
      q_en: 'Which insect cell line reaches the highest density and is used for stable transfection without virus?',
      q_cn: '哪个昆虫细胞系密度最高，而且用于不需要病毒的稳定转染？',
      options: ['Sf9 cells', 'Sf21 cells', 'Hi5 cells', 'S2 cells'],
      answer: 3,
      why_en: 'S2 cells from Drosophila reach 30 million per mL, against 6 million for Sf9 and 2 million for Hi5, and they are the line used for stable transfection rather than baculovirus infection.',
      why_cn: '来自果蝇的 S2 细胞能达到 30×10⁶/mL，而 Sf9 是 6×10⁶、Hi5 是 2×10⁶；而且它是用于稳定转染而非杆状病毒感染的细胞系。' },
    { type: 'mcq',
      q_en: 'What is the safety argument for using baculovirus?',
      q_cn: '使用杆状病毒的安全性论据是什么？',
      options: ['It has a small genome with too few genes to establish an infection', 'It does not replicate in vertebrates', 'It is inactivated by serum', 'It infects only one insect species'],
      answer: 1,
      optionNotes: {
        3: { en: 'The safety of baculovirus does not rest on a narrow host range. The range is very broad, over 600 species, mostly larval insects. What is narrow is the taxonomic barrier, not the number of hosts: broad inside the insects, zero in vertebrates.', cn: '杆状病毒的安全性不是靠「宿主范围窄」得来的。它的范围其实非常宽，超过 600 个物种，多数是幼虫期的昆虫。窄的是那道分类学界线，不是宿主数目：在昆虫里很宽，在脊椎动物里为零。' }
      },
      why_en: 'Despite a very broad host range across more than 600 mostly larval insect species, it cannot replicate in vertebrates, so it poses no infection risk to the people handling it.',
      why_cn: '尽管它的宿主范围很广（600 多个主要是幼虫期的昆虫物种），它无法在脊椎动物中复制，所以对操作人员没有感染风险。' },
    { type: 'short',
      q_en: 'Why do insect cells occupy a useful middle position between yeast and mammalian systems?',
      q_cn: '为什么昆虫细胞在酵母和哺乳动物系统之间占据一个有用的中间位置？',
      accept: ['folding', 'PTM', 'moderate cost', 'bridge', 'complex'],
      answer_en: 'Because they give you most of what mammalian cells give you, at a fraction of the cost. They are eukaryotic and support complex folding and many post-translational modifications, so proteins that misfold in E. coli or receive the wrong glycans in yeast often work here. But the media are far cheaper than mammalian serum-free medium, around forty dollars a litre against one to two hundred, cultivation is at twenty-four to twenty-seven degrees without a CO2 incubator, and the cells are semi-adherent so they move into suspension easily. The trade-off is that the timeline is weeks rather than days, and for genuinely human-like glycosylation you still have to go to mammalian cells.',
      answer_cn: '因为它们能提供哺乳动物细胞的大部分好处，而成本只有一小部分。它们是真核细胞，支持复杂折叠和多种翻译后修饰，所以那些在大肠杆菌里错误折叠、或者在酵母里得到错误糖链的蛋白，在这里往往能做出来。但培养基比哺乳动物无血清培养基便宜得多，约 40 美元一升对一两百美元，培养温度 24–27 度且不需要 CO2 培养箱，细胞还是半贴壁的、容易转成悬浮。代价是周期以周计而不是以天计，而且如果真的需要类人的糖基化，仍然必须上哺乳动物细胞。'
    }
  ],
  oral: {
    q_en: 'What are insect cell systems, and what makes baculovirus expression so productive?',
    q_cn: '什么是昆虫细胞系统？杆状病毒表达为什么这么高产？',
    model_en: 'Insect cells bridge the gap between yeast and mammalian systems: they support complex folding and many post-translational modifications, but at moderate cost — media around forty dollars a litre rather than one to two hundred, cultivation at twenty-four to twenty-seven degrees with no CO2 incubator needed, and the cells are semi-adherent so they transfer to suspension easily. There are two routes. Baculovirus infection is transient and high-yield. Stable transfection of Schneider S2 cells from Drosophila is slower to set up but gives continuous expression with no virus at all, and those cells reach thirty million per millilitre against six million for Sf9. Sf9 and Sf21 from Spodoptera frugiperda are the robust standard, and Hi5 from Trichoplusia ni often gives higher secretion yields. As for the virus itself: it is a circular double-stranded DNA genome of a hundred and twenty kilobases, it infects over six hundred host species, mostly larval, and crucially it does not replicate in vertebrates, which is the safety argument. It has many non-essential genes, which is why there is room for an insert. Its genes fire in four temporal classes — immediate early, delayed early, late, and very late. The productivity comes from that last class. In nature the virus packages itself into polyhedrin crystals so it can survive outside a host, and polyhedrin is expressed in the very-late phase at enormous levels, becoming the dominant product of the infected cell, so its promoter has been under selection to be as strong as possible. But in cell culture the virus never needs to survive in soil, so polyhedrin is entirely dispensable. The standard trick is therefore to delete polyhedrin and put your gene under its promoter: you inherit one of the strongest promoters in biology at no cost whatsoever to the virus\'s ability to replicate in culture. That is the root of the yield.',
    checklist: ['Bridge between yeast and mammalian: complex folding and PTMs at moderate cost', 'Two routes: baculovirus infection (transient, high yield), S2 stable transfection', 'Semi-adherent, 24-27 C, pH 6.7, serum-free media available', 'Sf9/Sf21 from S. frugiperda, 6 million/mL, the robust standard', 'Hi5 from T. ni, 2 million/mL, higher secretion yield', 'S2 from Drosophila, 30 million/mL, stable transfection, no virus', 'Baculovirus: circular dsDNA, 120 kbp, >600 hosts, larval', 'Safety: does not replicate in vertebrates', 'Many non-essential genes, so room for the insert', 'Four temporal gene classes, ending in very late', 'Polyhedrin is very-late, enormously expressed, packages virus for survival', 'Dispensable in culture, so delete it and inherit its promoter']
  }
},

{
  id: '2-18',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.18',
  enTitle: 'BEVS and the Bac-to-bac workflow',
  cnTitle: 'BEVS 与 Bac-to-bac 流程',
  slides: 'L3 s.32–33',
  coverage: 'full',
  coverageNote: 'The ten-step workflow and the three commercial systems are on the slides, including the warning that some baculoviruses lose the target at P3 or later. Why they lose it — your gene is pure burden to the virus — is the beyond-the-slides explanation, and it is the most common way this system fails.',
  summary: {
    en: 'The baculovirus expression vector system is the second most-used system after E. coli, based on the modified AcMNPV virus developed in the 1980s. In the Bac-to-bac route you clone the cassette between Tn7 sites, transpose it into a bacmid inside DH10Bac cells, screen blue-white, transfect Sf9 cells with the 30 kbp bacmid, harvest P1 virus, then amplify. The critical warning is that virus which has lost your insert outgrows virus that carries it, so later passages express less.',
    cn: '杆状病毒表达载体系统是仅次于大肠杆菌、使用第二广泛的系统，基于 1980 年代开发的改造版 AcMNPV 病毒。走 Bac-to-bac 路线时：把表达盒克隆在 Tn7 位点之间，在 DH10Bac 细胞里转座进杆粒，用蓝白斑筛选，把 30 kbp 的杆粒转染 Sf9 细胞，收获 P1 病毒，然后扩增。最关键的警告是：丢失了你插入片段的病毒会压过携带它的病毒，所以代数越高表达越低。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.32', src: 'img/figures/L3_s32_1.webp' },
    { slide: 'L3 s.32', src: 'img/figures/L3_s32_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '最要命的一条是**代次效应**：你的基因对病毒是纯负担，所以**丢掉它的病毒复制得更快、会占领整个群体**。\n\n' +
            '症状很迷惑人——**滴度很高，表达却越来越低**。对策是只用 P1/P2，并把低代次病毒分装冻存当种子库。',
  skipIt: 'FlashBac / FlexiBac / MultiBac 这几个系统的出处和细节，知道「它们用同源重组或 Cre-Lox 替代 Tn7 转座」就够。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Bac-to-bac vs homologous recombination systems (FlexiBac…)**——**两类路线的对比是被点名的**，具体产品差异不是。',
  explain: [
    {
      q: 'bacmid 是个什么东西？为什么要把病毒基因组放进大肠杆菌里？',
      trace: {
        what: '**一个在 E. coli 里维持的超大质粒，上面编码着制造杆状病毒所需要的全部信息**，大约 30 kbp 甚至更大。',
        from: '动机很实际：**在昆虫细胞里做基因操作又慢又难**（细胞长得慢、没有蓝白斑这类便宜的筛选、拿不到单克隆）。而**在 E. coli 里做克隆又快又便宜**，一整套工具都是现成的。\n\n**所以就把病毒基因组「寄存」在细菌里：在细菌里改好，再送进昆虫细胞去把病毒「救」出来。**',
        to: '它靠 **F 质粒来源的 ORI** 在 E. coli 里维持——回到第 1-9 节：F 质粒的 ORI 是**单拷贝**的。这里正好需要单拷贝，因为 30 kbp 的分子如果按 pUC 那样复制几百份，细胞立刻被压垮。\n\n改造完成后把 bacmid 抽出来，转染 Sf9 细胞，病毒就在昆虫细胞里组装出来了。\n\n**实操提醒：30 kbp 的 DNA 很脆**，剧烈涡旋会把它剪断，所以抽提和吸取时都要非常温和。',
        family: '「**把难操作的东西寄存到好操作的宿主里去改**」是一个很通用的套路。同一个思路在别处也反复出现——凡是看到「在 E. coli 里构建，再转到别处去用」，背后都是这一条。'
      },
      takeaway: '把病毒基因组寄存在 E. coli 里改造，因为细菌里的工具便宜好用。用 F 质粒 ORI 保持单拷贝。'
    },
    {
      q: '为什么这里又出现了蓝白斑？打断的是什么？',
      a: '**打断的是 lacZα，跟第 1-13 节一模一样——只是这次被插进去的位置不同。**\n\n' +
         'bacmid 上的转座靶点 **mini-attTn7，正好被放在 lacZα 基因的里面**。\n\n' +
         '于是：\n\n' +
         '**转座成功** → 你的表达盒插进了 mini-attTn7 → **lacZα 被打断** → 白斑。\n\n' +
         '**没转座** → lacZα 完整 → 蓝斑。\n\n' +
         '**同一个报告系统，换了个场合。**第 1-13 节里被打断的是多克隆位点，这里被打断的是转座靶点，但读出方式完全一样。\n\n' +
         '**而第 1-13 节那条告诫也照样成立：白斑只说明 lacZα 被打断了。**它不保证插进去的是你的基因、不保证方向、不保证序列。所以后面还要做 PCR 验证。\n\n' +
         '顺带一句：这一步幻灯片写的是**要 4 天**。因为 bacmid 很大、DH10Bac 长得慢，蓝色显色也慢——**在杆状病毒这条路上，几乎每一步都比你习惯的 E. coli 工作慢**，这也是为什么整个流程要三周以上。',
      takeaway: 'mini-attTn7 就放在 lacZα 里面，所以转座成功就变白。跟第 1-13 节同一个机制、同样的局限。'
    },
    {
      q: '为什么后面的代次会把你的基因丢掉？',
      a: '**因为这是在你的培养瓶里实时发生的自然选择，而你的基因站在被淘汰的那一边。**\n\n' +
         '站在病毒的角度看：你插进去的那两千个碱基，**要多复制一遍、要消耗资源、要占用包装容量，而对病毒自己的繁殖一点贡献都没有**。它是纯粹的负担。\n\n' +
         '**所以只要有一个病毒粒子在复制时碰巧把这段丢掉了，它就跑得更快。**跑得更快，下一轮它的后代就更多。反复扩增几代之后，**整个病毒群体都是它的后代。**\n\n' +
         '**症状之所以特别迷惑人，是因为两个指标背道而驰：**\n\n' +
         '**病毒滴度很高**——因为病毒确实繁殖得很好，甚至更好了。\n\n' +
         '**蛋白表达很差**——因为那些病毒已经不带你的基因了。\n\n' +
         '**如果你只测滴度，你会以为一切正常。**这个现象叫**代次效应（passage effect）**，涉及所谓的缺陷干扰颗粒。\n\n' +
         '**三条对策，注意它们的逻辑各不相同：**\n\n' +
         '**只用 P1 或 P2 做表达**——不要一路传到 P5。少传几代，选择还来不及起作用。\n\n' +
         '**做一大批低代次病毒，分装冻存当种子库**——这一条最重要，逻辑是**把时间轴切断**：以后每次都从同一管 P2 重新开始，而不是在上一次的基础上继续传。\n\n' +
         '**必要时噬斑纯化单克隆**——从群体回到单个，重新开始。',
      takeaway: '你的基因是纯负担，所以丢掉它的病毒跑得更快。种子库的逻辑是每次都从同一个低代次重新开始。'
    },
    {
      q: 'MOI 是什么？为什么它需要「优化」而不是越高越好？',
      a: '**MOI（multiplicity of infection，感染复数）= 平均每个细胞分到几个病毒粒子。**\n\n' +
         '它需要优化，是因为**两头都会出问题**：\n\n' +
         '**MOI 太低**：一部分细胞根本没被感染，白白浪费。而且病毒需要多轮扩增才能感染到所有细胞，**结果是收获时细胞的感染进度参差不齐**——有的刚开始表达，有的已经裂解了，你没有一个统一的收获时机。\n\n' +
         '**MOI 太高**：所有细胞同时被大量病毒攻击，**很快就被搞垮了**。细胞还没来得及大量表达就死亡、裂解，蛋白被释放到培养基里，暴露在死细胞放出来的蛋白酶里被降解。\n\n' +
         '**所以有一个最优点，幻灯片给的范围是 1:1 到 10:1。**\n\n' +
         '而且这跟「什么时候收获」是同一类问题，可以一起想：\n\n' +
         '**杆状病毒是一个裂解系统——细胞注定要死。你要做的是在它垮掉之前，把蛋白拿到手。**\n\n' +
         '收得太早，表达还不够；收得太晚，细胞已经开始裂解、蛋白开始被降解。**MOI 和收获时间共同决定了你落在这条曲线的哪个位置。**',
      takeaway: '太低则感染不同步，太高则细胞垮得太快。跟收获时机一起，决定你在「垮掉之前拿多少」这条曲线上的位置。'
    }
  ],
  points: [
    { term: 'Position and origin', en: 'The second most-used expression system after E. coli. Based on a modified Autographa californica nuclear polyhedrosis virus (AcMNPV), developed in the 1980s.', cn: '仅次于大肠杆菌、使用第二广泛的表达系统。基于改造的苜蓿银纹夜蛾核多角体病毒（AcMNPV），1980 年代开发。' },
    { term: 'Bac-to-bac (Invitrogen)', en: 'Uses Tn7 transposition between Tn7 donor sites and a mini-attTn7 target.', cn: '利用 Tn7 转座，在 Tn7 供体位点和 mini-attTn7 靶位点之间进行。' },
    { term: 'FlashBac and FlexiBac', en: 'From Oxford and Dresden respectively; both use homologous recombination inside the insect cells rather than in bacteria.', cn: '分别来自牛津和德累斯顿；两者都在昆虫细胞内部而不是细菌里进行同源重组。' },
    { term: 'MultiBac', en: 'Uses Tn7 transposition and/or Cre-Lox, designed for multi-subunit complexes.', cn: '使用 Tn7 转座和/或 Cre-Lox，为多亚基复合物设计。' },
    { term: 'Steps 1–2 — clone and transpose', en: 'Clone the target into a plasmid whose expression cassette is flanked by Tn7 left and right sites, then transform DH10Bac cells, where a helper plasmid supplies the transposases and the cassette moves into the bacmid.', cn: '把目标基因克隆进一个表达盒两侧带 Tn7 左右位点的质粒，然后转化 DH10Bac 细胞——其中的辅助质粒提供转座酶，表达盒被转移进杆粒。' },
    { term: 'What a bacmid is', en: 'DNA encoding everything needed to make baculovirus, maintained in E. coli using an origin from the F plasmid.', cn: '编码制造杆状病毒所需全部信息的 DNA，借助来自 F 质粒的复制起点在大肠杆菌中维持。' },
    { term: 'Steps 3–4 — screen and isolate', en: 'Select positive transformants by blue-white selection, which takes 4 days, then isolate the recombinant bacmids — about 30 kbp, very large DNA that must be handled gently.', cn: '用蓝白斑筛选阳性转化子，需要 4 天，然后分离重组杆粒——约 30 kbp，非常大的 DNA，操作必须轻柔。' },
    { term: 'Steps 5–6 — transfect and harvest P1', en: 'Transfect Sf9 cells with the bacmid, typically by lipofection using Cellfectin or Effectene, and harvest P1 baculovirus after 4 to 7 days.', cn: '用杆粒转染 Sf9 细胞，通常用 Cellfectin 或 Effectene 做脂质体转染，4–7 天后收获 P1 杆状病毒。' },
    { term: 'Steps 7–9 — amplify, optionally purify and titre', en: 'Infect Sf9 with P1 to make P2 at larger volume, and optionally repeat for P3. Plaque assays can isolate a single positive clone or determine titre.', cn: '用 P1 感染 Sf9 制备更大体积的 P2，必要时再做 P3。噬斑实验可以分离单克隆或测定滴度。' },
    { term: 'Step 10 — optimise', en: 'Optimise the multiplicity of infection, typically 1:1 to 10:1, and the harvest time.', cn: '优化感染复数（MOI，通常 1:1 到 10:1）和收获时间。' },
    { term: 'The stated warning', en: 'Some baculoviruses lose your target protein, and this is especially pronounced at P3 or later generations.', cn: '有些杆状病毒会丢失你的目标蛋白，而且在 P3 或更高代数上尤其明显。' }
  ],
  beyondPoints: [
    { term: 'Why later passages lose the insert', en: 'Your gene is pure burden to the virus. It has two extra kilobases to replicate and consumes resources, while contributing nothing to viral reproduction. So during repeated amplification, any virus that happens to drop the insert replicates faster and comes to dominate the population.', cn: '你的基因对病毒来说是纯粹的负担。它要多复制两千个碱基、多消耗资源，却对病毒自身的繁殖毫无贡献。所以在反复扩增的过程中，任何偶然丢掉插入片段的病毒都会复制得更快，最终在群体中占据主导。' },
    { term: 'The name and the symptom', en: 'This is the passage effect, involving defective interfering particles. The characteristic symptom is a high viral titre combined with falling protein expression — which is confusing unless you know to expect it.', cn: '这叫代次效应（passage effect），涉及缺陷干扰颗粒。典型症状是病毒滴度很高但蛋白表达量下降——如果不知道要预期这一点，会非常令人困惑。' },
    { term: 'Three countermeasures', en: 'Use low passages, P1 or P2, for expression rather than working up to P5. Prepare a large batch of low-passage virus and freeze it in aliquots as a seed bank. And plaque-purify a single clone when necessary.', cn: '用低代数（P1、P2）做表达，不要一路传到 P5。大量制备低代数病毒，分装冻存作为种子库。必要时做噬斑纯化挑单克隆。' },
    { term: 'And this is exactly S2\'s selling point', en: 'A stably transfected S2 line does not degrade this way — once established it simply keeps expressing, with no virus to regenerate.', cn: '稳定转染的 S2 细胞系不会这样退化——一旦建好就持续表达，不需要重新制备病毒。' }
  ],
  terms: [
    { en: 'Bacmid', cn: '杆粒', def_en: 'A baculovirus genome maintained as a plasmid in E. coli using an F-plasmid origin, so it can be engineered by bacterial genetics before being transfected into insect cells.', def_cn: '借助 F 质粒复制起点在大肠杆菌中以质粒形式维持的杆状病毒基因组，因此可以先用细菌遗传学手段改造，再转染进昆虫细胞。' },
    { en: 'MOI (multiplicity of infection)', cn: '感染复数', def_en: 'The number of virus particles applied per cell, typically optimised between 1:1 and 10:1 in this system.', def_cn: '每个细胞施加的病毒颗粒数，在这个系统里通常在 1:1 到 10:1 之间优化。' },
    { en: 'Passage effect', cn: '代次效应', def_en: 'Progressive loss of the insert during serial virus amplification, because insert-free virus replicates faster. Symptom: high titre, falling expression.', def_cn: '在病毒连续扩增过程中插入片段的逐步丢失，因为不带插入片段的病毒复制更快。症状是滴度高但表达下降。' },
    { en: 'Plaque assay', cn: '噬斑实验', def_en: 'Plating virus at limiting dilution to isolate a single clone or to determine titre. Used here to rescue a population that has begun losing the insert.', def_cn: '把病毒作极限稀释后铺板，用于分离单克隆或测定滴度。这里用来挽救已经开始丢失插入片段的病毒群体。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why do later baculovirus passages express less of your protein?',
      q_cn: '为什么代数较高的杆状病毒表达量更低？',
      options: ['The virus accumulates mutations in the polyhedrin promoter over passages', 'The insect cells become resistant to infection after repeated rounds', 'Virus that has dropped the insert replicates faster and takes over', 'The bacmid degrades over time, losing the cassette it carries'],
      answer: 2,
      optionNotes: {
        3: { en: 'The bacmid is the molecule you engineer in E. coli before any insect cell is involved; what you passage serially is budded virus in Sf9 cultures. The thing that changes over passages is the composition of a virus population under selection, not the decay of a DNA molecule sitting in bacteria.', cn: 'bacmid 是你在 E. coli 里改造的那个分子，那时还没碰昆虫细胞；一代代传下去的是 Sf9 培养里的出芽病毒。随代次改变的是病毒群体在选择下的组成，不是某个留在细菌里的 DNA 分子慢慢降解。' }
      },
      why_en: 'Your gene is pure cost to the virus — extra DNA to replicate, no benefit to viral reproduction — so selection during amplification actively favours the variants that drop it. The tell-tale sign is high titre with falling expression.',
      why_cn: '你的基因对病毒来说是纯成本——多出来要复制的 DNA，对病毒繁殖毫无好处——所以扩增过程中的选择压力主动偏向那些丢掉它的变体。典型迹象是滴度高而表达下降。' },
    { type: 'mcq',
      q_en: 'What is a bacmid?',
      q_cn: '什么是杆粒？',
      options: ['A baculovirus particle that has been stripped of its capsid', 'A complete baculovirus genome carried as a plasmid in E. coli', 'The polyhedrin crystal in which the virus packages itself', 'A shuttle vector that replicates in both yeast and E. coli, carried on a 2-micron origin'],
      answer: 1,
      optionRefs: { 2: '2-17' },
      why_en: 'It carries everything needed to make baculovirus but is maintained in bacteria, so you can do the engineering and the blue-white screening in E. coli before ever touching insect cells.',
      why_cn: '它携带制造杆状病毒所需的一切，但维持在细菌里，所以你可以先在大肠杆菌中完成改造和蓝白斑筛选，之后才需要碰昆虫细胞。' },
    { type: 'mcq',
      q_en: 'In the Bac-to-bac system, what moves the expression cassette into the bacmid?',
      q_cn: '在 Bac-to-bac 系统中，是什么把表达盒转移进杆粒的？',
      options: ['Homologous recombination inside the insect cells after co-transfection', 'Cre-mediated recombination between loxP sites on the two plasmids', 'Tn7 transposition into a mini-attTn7 target site in the bacmid', 'Restriction digestion and ligation of the cassette into the bacmid'],
      answer: 2,
      optionRefs: { 3: '1-12' },
      optionNotes: {
        0: { en: 'Homologous recombination inside insect cells is a real route into a baculovirus genome — it is exactly what FlashBac and FlexiBac do. Bac-to-bac is defined by the opposite choice: all the engineering and screening happen in bacteria first, and the insect cells only receive the finished bacmid.', cn: '在昆虫细胞里做同源重组确实是一条真实的路线，FlashBac 和 FlexiBac 就是这么做的。Bac-to-bac 的定义恰恰相反：所有改造和筛选都先在细菌里完成，昆虫细胞只负责接收做好的 bacmid。' }
      },
      why_en: 'The cassette is flanked by Tn7 left and right sites and moves into a mini-attTn7 target in the bacmid. FlashBac and FlexiBac instead use homologous recombination inside the insect cells.',
      why_cn: '表达盒两侧带 Tn7 左右位点，转移到杆粒中的 mini-attTn7 靶位点。FlashBac 和 FlexiBac 则是在昆虫细胞内部用同源重组。' },
    { type: 'short',
      q_en: 'Your baculovirus stock has a high titre but expression has dropped since P4. What has happened and what do you do?',
      q_cn: '你的杆状病毒储液滴度很高，但从 P4 开始表达量下降了。发生了什么？你怎么办？',
      accept: ['passage effect', 'lost the insert', 'low passage', 'seed bank', 'plaque'],
      answer_en: 'This is the passage effect. Your gene is pure burden to the virus — an extra two kilobases to replicate with no benefit to viral reproduction — so any virus that happens to lose the insert replicates faster and progressively takes over the population. High titre with falling expression is the characteristic signature, because the virus is thriving precisely by having discarded what you wanted. The fixes are to go back to a low passage, P1 or P2, and express from that rather than continuing to amplify; to prepare a large batch of low-passage virus and freeze it in aliquots as a seed bank so you never have to serially passage again; and if necessary to plaque-purify a single positive clone.',
      answer_cn: '这是代次效应。你的基因对病毒来说是纯负担——多出两千个碱基要复制，对病毒繁殖毫无好处——所以任何偶然丢失插入片段的病毒都复制得更快，逐步占据整个群体。「滴度高、表达降」正是它的典型特征，因为病毒恰恰是靠丢掉你想要的东西才繁盛起来的。解决办法是：回到低代数（P1 或 P2）用它来表达，而不是继续扩增；大量制备低代数病毒、分装冻存做成种子库，这样就再也不需要连续传代；必要时做噬斑纯化挑一个阳性单克隆。'
    }
  ],
  oral: {
    q_en: 'Walk me through making a recombinant baculovirus, and tell me how the system typically fails.',
    q_cn: '讲一遍制备重组杆状病毒的过程，以及这个系统通常是怎么失败的。',
    model_en: 'The baculovirus expression vector system is the second most-used system after E. coli, based on a modified AcMNPV virus from the nineteen-eighties. Taking Bac-to-bac as the example: you clone your target into a plasmid where the expression cassette is flanked by Tn7 left and right sites. You transform DH10Bac cells, a special strain carrying the bacmid and a helper plasmid that supplies the transposases, and the cassette transposes into a mini-attTn7 site in the bacmid — a bacmid being the whole baculovirus genome maintained as a plasmid in E. coli using an F-plasmid origin. You screen by blue-white selection, four days, and isolate the recombinant bacmid, which is about thirty kilobases and needs gentle handling. You transfect Sf9 cells with it, usually by lipofection with Cellfectin or Effectene, and harvest P1 virus after four to seven days. Then you amplify: infect Sf9 with P1 to make P2 at larger volume, and you can repeat for P3. Optionally you run a plaque assay to isolate a single clone or determine titre. Finally you optimise the multiplicity of infection, typically between one and ten to one, and the harvest time. The characteristic failure is the passage effect. Your gene is pure burden to the virus — two extra kilobases to replicate, consuming resources, contributing nothing to viral reproduction — so during repeated amplification any virus that drops the insert replicates faster and comes to dominate. The signature is confusing if you are not expecting it: a high viral titre with falling protein expression, because the virus is thriving by having thrown away exactly what you wanted. It is especially pronounced from P3 onwards. The remedies are to express from low passages, P1 or P2, rather than working up; to make a large low-passage batch and freeze aliquots as a seed bank; and to plaque-purify when necessary. And this is precisely the selling point of stably transfected S2 cells, which do not degrade this way at all.',
    checklist: ['Second most-used system after E. coli; modified AcMNPV, 1980s', 'Bac-to-bac uses Tn7 transposition; FlashBac/FlexiBac use homologous recombination', 'Clone cassette between Tn7 left/right sites', 'Transform DH10Bac; helper plasmid supplies transposases', 'Bacmid = baculovirus genome as a plasmid in E. coli, F-plasmid origin', 'Blue-white selection, 4 days; isolate ~30 kbp bacmid', 'Transfect Sf9 by lipofection; harvest P1 after 4-7 days', 'Amplify P1 to P2, optionally P3; plaque assay for clone or titre', 'Optimise MOI (1:1 to 10:1) and harvest time', 'Failure mode: passage effect, insert is pure burden to the virus', 'Signature: high titre, falling expression, worst from P3', 'Fixes: low passage, frozen seed bank, plaque purification']
  }
},

{
  id: '2-19',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.19',
  enTitle: 'S2-based expression — a stable cell line instead of a virus',
  cnTitle: 'S2 表达系统——用稳定细胞系代替病毒',
  slides: 'L3 s.33',
  coverage: 'full',
  coverageNote: 'Short by design. The whole point of this node is the contrast with the previous one: everything that makes baculovirus fragile is absent here, at the cost of three weeks up front.',
  summary: {
    en: 'S2 expression is simpler than the baculovirus systems and suits secreted proteins in particular. You clone into a vector with either the constitutive pAc promoter or a metallothionein promoter induced by copper, co-transfect with a selection vector at about 10:1, and select a resistant population over roughly three weeks, during which the vectors integrate into the genome in multiple copies. The advantage over baculovirus is a stable cell population, with no need to repeatedly generate virus.',
    cn: 'S2 表达比杆状病毒系统简单，尤其适合分泌型蛋白。把基因克隆进带组成型 pAc 启动子或铜诱导的金属硫蛋白启动子的载体，按约 10:1 的比例与筛选载体共转染，然后用约三周时间筛出抗性细胞群，在此期间载体以多拷贝形式整合进基因组。相对杆状病毒的优势是得到一个稳定的细胞群，不需要反复制备病毒。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**S2 是建株，杆状病毒是感染。**S2 前期花三周建一个稳定细胞群，之后一直可用；杆状病毒拿蛋白更快，但每次都要重新制备病毒，而且会衰减。\n\n' +
            '取舍就是：**前期时间 vs 后期可靠性。**',
  skipIt: '10:1 这个共转比例、三周这个时长，记个量级即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写了 **S2 expression**——**这一节是被点名的**，要能讲清它跟杆状病毒路线的区别。',
  explain: [
    {
      q: 'S2 和杆状病毒，本质上差在哪一件事？',
      a: '**一个是感染，一个是建株——而这决定了细胞死不死。**\n\n' +
         '**杆状病毒**：每次要蛋白，就制备一批病毒去感染细胞。**病毒最终会把细胞杀死**（它是裂解系统），所以每一轮都是一次性的：感染、表达、收获、细胞死掉。下一次从头再来。\n\n' +
         '**S2**：花约三周筛出一群把表达盒**整合进基因组**的细胞。**没有病毒，细胞不死**，它就一直在那里生产。\n\n' +
         '**所以取舍很清楚：**\n\n' +
         '**只做一次这个蛋白** → 杆状病毒更快，前期投入小。\n\n' +
         '**几个月里要反复做** → S2 那三周很快就赚回来了，而且省掉了每次重新制备病毒、重新测滴度、还要担心代次效应（第 2-18 节）的全部麻烦。\n\n' +
         '**这个「一次性投入换长期省事」的模式，你已经见过一次了**——第 2-15 节酵母的整合型质粒（YIp）是同一个逻辑。后面哺乳动物细胞的稳定株 vs 瞬时转染（第 2-23 节）还会再见一次。\n\n' +
         '**看到「稳定 vs 瞬时」这组词，就该想到这条取舍轴。**',
      takeaway: '感染的细胞会死，建株的细胞不死。所以一次性任务用病毒，长期反复用稳定株。'
    },
    {
      q: '为什么共转染要用 10:1 这个比例？',
      a: '**因为你能筛的东西和你想要的东西不在同一个分子上。**\n\n' +
         '这里有两个载体：**表达载体**（带你的基因，但没有抗性）和**筛选载体**（带 hygromycin 或 blasticidin 抗性）。\n\n' +
         '加抗生素之后活下来的，是**拿到了筛选载体**的细胞。但你真正想要的是**拿到了表达载体**的细胞。\n\n' +
         '**这两件事不是一回事。**如果两个载体等量，那么一个拿到筛选载体的细胞，未必拿到了表达载体——你筛出一堆有抗性但不表达的细胞。\n\n' +
         '**解法是让表达载体大量过量（10:1）。**这样一来，任何一个「拿到了那稀少的筛选载体」的细胞，几乎必然也吞进了大量的表达载体。\n\n' +
         '**换句话说：把通行证做成稀缺品，把货物做成充足品。**拿到通行证的，手上一定有货。\n\n' +
         '**这是共转染的通用技巧**，不只用在 S2 上。凡是筛选标记和目标基因分在两个分子上，都是这个思路。\n\n' +
         '（对比第 2-14 节的 pDUET：那里的做法相反，是**把两样东西各自配上自己的抗性**，让两边都被直接筛住。两种解法，看你能不能改造载体。）',
      takeaway: '把筛选标记做成稀缺品、目标载体做成充足品。拿到通行证的细胞几乎一定也拿到了货。'
    },
    {
      q: '「以多拷贝整合进基因组」，这带来什么好处和什么麻烦？',
      a: '**好处是高表达且稳定；麻烦是你拿到的是一个「群」，不是一个克隆。**\n\n' +
         '在筛选的那三周里，转进去的载体会**以多个拷贝、串联的形式整合进 S2 的基因组**。\n\n' +
         '**好处：**拷贝数高 → 表达量高；整合进基因组 → 稳定，跟第 2-15 节的 YIp 一个道理，不会像质粒那样丢失。\n\n' +
         '**麻烦：整合的位置是随机的，拷贝数也是随机的。**\n\n' +
         '所以三周之后你得到的是一个**细胞群（population）**：每个细胞整合的位置不同、份数不同、表达量也不同。有的细胞是高产的，有的几乎不表达，**你拿到的是一个平均值**。\n\n' +
         '**如果你需要更高、更均一的表达，就得再花时间从这个群里挑单克隆**——挑出那个碰巧整合位置好、拷贝数高的细胞，扩成一个纯的细胞系。\n\n' +
         '**这一步在科研里常常被跳过**（群体够用了），但在工业生产里是必做的——因为你需要的是一个可重复、可存档、每一批都一样的细胞系。\n\n' +
         '**这就是「细胞群」和「细胞系」的区别**，也是研究级和 GMP 级之间那道工作量鸿沟的一部分。',
      takeaway: '整合位置随机，所以你拿到的是表达量参差的一个群。要均一就得再挑单克隆。'
    },
    {
      q: '为什么说它「尤其适合分泌型蛋白」？',
      a: '因为**稳定细胞群 + 分泌 = 可以反复收获而不破坏培养。**\n\n' +
         '具体是这样：细胞把蛋白分泌到培养基里 → 你把上清倒出来 → 补上新鲜培养基 → **细胞继续长、继续分泌** → 过几天再收一次。\n\n' +
         '**同一批细胞可以收很多次。**\n\n' +
         '**而这在杆状病毒系统里是不可能的**：那边的细胞注定要被病毒裂解，**你只有一次收获机会**。\n\n' +
         '**所以「可以反复收获」这个优点，只有在细胞不死的系统里才成立。**这一条把这一节的两个特点（稳定 + 分泌）连成了一件事，而不是两个独立的优点。\n\n' +
         '再加上分泌本身的好处（第 2-16 节讲过）：不用裂解细胞，培养基里本来就没什么蛋白，**起始材料非常干净**。\n\n' +
         '代价还是那个：你要处理很大体积的稀溶液——第 2-27 节讲怎么办。',
      takeaway: '细胞不死才谈得上反复收获。稳定 + 分泌是一件事的两半，不是两个独立优点。'
    }
  ],
  points: [
    { term: 'Positioning', en: 'Simpler than the baculovirus systems, and suitable mostly for secreted proteins.', cn: '比杆状病毒系统简单，主要适合分泌型蛋白。' },
    { term: 'Constitutive option', en: 'The pAc promoter, expressing continuously.', cn: 'pAc 启动子，持续表达。' },
    { term: 'Inducible option', en: 'The metallothionein promoter, induced with copper ions.', cn: '金属硫蛋白启动子，用铜离子诱导。' },
    { term: 'Co-transfection', en: 'The expression vector is co-transfected with a separate selection vector, typically at a 10:1 ratio.', cn: '表达载体与一个独立的筛选载体共转染，通常比例为 10:1。' },
    { term: 'The selection vector', en: 'Confers resistance to hygromycin or blasticidin.', cn: '赋予潮霉素或杀稻瘟菌素抗性。' },
    { term: 'Selection period', en: 'Selecting a resistant cell population typically takes about 3 weeks, during which the vectors integrate into the S2 genome in multiple copies.', cn: '筛选出抗性细胞群通常需要约 3 周，在此期间载体以多拷贝形式整合进 S2 基因组。' },
    { term: 'The stated advantage', en: 'A stable cell population, with no need to repeatedly generate baculoviruses.', cn: '得到一个稳定的细胞群，不需要反复制备杆状病毒。' }
  ],
  beyondPoints: [
    { term: 'The trade is time up front against reliability later', en: 'Baculovirus gets you protein sooner but degrades with each passage, so every campaign starts by regenerating or re-titring virus. S2 costs three weeks once, then keeps working — which matters most when you will express the same protein repeatedly over months.', cn: '这是「前期时间」换「后期可靠性」。杆状病毒出蛋白更快，但每传一代都在退化，所以每次实验都要重新制备或重新测定病毒。S2 只在一开始花三周，之后就一直能用——如果你要在好几个月里反复表达同一个蛋白，这一点最重要。' },
    { term: 'Why it suits secreted proteins', en: 'Continuous expression from a stable line pairs naturally with harvesting from the medium, since you can collect repeatedly without destroying the culture.', cn: '稳定细胞系的持续表达天然适合从培养基里收获，因为你可以反复采集而不必毁掉培养物。' }
  ],
  terms: [
    { en: 'Metallothionein promoter', cn: '金属硫蛋白启动子', def_en: 'A copper-inducible Drosophila promoter used in S2 expression vectors when timing of expression matters.', def_cn: '果蝇的一个铜离子诱导型启动子，在需要控制表达时机时用于 S2 表达载体。' },
    { en: 'Stable cell line', cn: '稳定细胞系', def_en: 'A population in which the expression construct has integrated into the genome, so expression continues indefinitely without re-delivery.', def_cn: '表达构建体已整合进基因组的细胞群，因此可以持续表达而无需重新导入。' },
    { en: 'Blasticidin', cn: '杀稻瘟菌素', def_en: 'A selection antibiotic used, alongside hygromycin, to select stably transfected insect and mammalian cells.', def_cn: '一种筛选用抗生素，与潮霉素一起用于筛选稳定转染的昆虫和哺乳动物细胞。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the main advantage of S2 expression over a baculovirus system?',
      q_cn: 'S2 表达相对杆状病毒系统的主要优势是什么？',
      options: ['A higher peak yield of protein per litre than infected insect cells', 'A stable cell population, with no need to regenerate virus each time', 'A shorter time from transfection to the first protein sample', 'Human-like complex glycosylation on the secreted product'],
      answer: 1,
      optionRefs: { 3: '2-25' },
      why_en: 'Baculovirus stocks degrade with passage as insert-free virus outgrows the rest, so each campaign needs fresh virus. A stable S2 line simply keeps expressing, which is why it wins for repeated production of the same protein.',
      why_cn: '杆状病毒储液会随传代退化，因为不带插入片段的病毒会压过其他病毒，所以每次实验都需要新鲜病毒。稳定的 S2 细胞系则持续表达，这就是它在「反复生产同一个蛋白」时胜出的原因。' },
    { type: 'mcq',
      q_en: 'How is the S2 expression vector selected for?',
      q_cn: 'S2 表达载体是怎么被筛选的？',
      options: ['The expression vector itself carries the resistance gene that the S2 cells are selected on', 'Co-transfection with a separate resistance plasmid at about 10:1', 'Blue-white screening on X-gal plates after transformation', 'By induction with methanol on a plate containing no other carbon source'],
      answer: 1,
      optionRefs: { 2: '1-13', 3: '2-16' },
      optionNotes: {
        0: { en: 'Every plasmid carries a resistance gene for its own propagation in E. coli, but a bacterial marker does nothing inside an S2 cell. The eukaryotic marker is deliberately kept off the expression vector, because putting selection on a separate, scarce plasmid is what forces survivors to have swallowed an excess of the one you actually care about.', cn: '每个质粒都带一个抗性基因，用于自己在 E. coli 里扩增，但细菌用的标记在 S2 细胞里毫无作用。真核的筛选标记是被刻意排除在表达载体之外的：把筛选放在另一个稀缺的质粒上，才能逼得活下来的细胞几乎必然也吞进了大量你真正想要的那个载体。' }
      },
      why_en: 'The resistance is on a separate plasmid supplied in tenfold deficit, so cells that took up enough DNA to survive selection have almost certainly taken up a large excess of the expression vector too.',
      why_cn: '抗性在另一个以十倍劣势比例加入的质粒上，所以那些摄取了足够 DNA 以在筛选中存活的细胞，几乎肯定也摄取了大量过量的表达载体。' },
    { type: 'mcq',
      q_en: 'How long does selecting a resistant S2 population typically take?',
      q_cn: '筛选 S2 抗性细胞群通常需要多久？',
      options: ['4 days', 'About 1 week', 'About 3 weeks', 'About 6 months'],
      answer: 2,
      why_en: 'About three weeks, during which the vectors integrate into the genome in multiple copies. That is the up-front cost you pay in exchange for a line that then works indefinitely.',
      why_cn: '大约三周，其间载体以多拷贝形式整合进基因组。这就是你为换取一个此后可长期使用的细胞系而付出的前期成本。' },
    { type: 'short',
      q_en: 'You will need to produce the same secreted protein repeatedly over the next year. Baculovirus or S2, and why?',
      q_cn: '接下来一年里你需要反复生产同一个分泌型蛋白。选杆状病毒还是 S2？为什么？',
      accept: ['S2', 'stable', 'no virus', 'passage', 'repeatedly'],
      answer_en: 'S2. The three weeks needed to select a stable resistant population is a one-time cost, and after that the line simply keeps expressing with no virus to regenerate. Baculovirus would get you protein sooner the first time, but every subsequent campaign means preparing or re-titring virus, and stocks degrade with passage because virus that has lost the insert replicates faster and takes over. Over a year of repeated production that overhead dominates. S2 also suits secreted proteins particularly well, because continuous expression from a stable line pairs naturally with repeatedly harvesting the medium without destroying the culture.',
      answer_cn: '选 S2。筛选稳定抗性细胞群需要的三周是一次性成本，之后这个细胞系就一直能表达，不需要重新制备病毒。杆状病毒第一次出蛋白更快，但此后每一轮都意味着制备或重新测定病毒，而且储液会随传代退化——丢失插入片段的病毒复制更快并占据群体。在一年的反复生产里，这些额外开销会成为主导。S2 也特别适合分泌型蛋白，因为稳定细胞系的持续表达天然契合「反复收集培养基而不毁掉培养物」。'
    }
  ],
  oral: {
    q_en: 'What is the S2 expression system and when would you prefer it to baculovirus?',
    q_cn: '什么是 S2 表达系统？什么时候你会选它而不是杆状病毒？',
    model_en: 'S2 expression uses Schneider two cells from Drosophila, and it is simpler than the baculovirus systems, suiting secreted proteins in particular. You clone into an expression vector carrying either the constitutive pAc promoter or a metallothionein promoter inducible with copper ions if you need control over timing. You then co-transfect that expression vector together with a separate selection vector, typically at a ten to one ratio, the selection vector conferring resistance to hygromycin or blasticidin. Putting the resistance on the deficit plasmid is deliberate: a cell that took up enough DNA to survive selection has almost certainly taken up a large excess of the expression vector too. You select a resistant population over roughly three weeks, during which the vectors integrate into the S2 genome in multiple copies, and then you expand and express. The reason to prefer it is the stability. Baculovirus gets you protein faster the first time, but the stocks degrade with every passage, because your gene is pure burden to the virus and any variant that drops the insert outgrows the rest — so each new campaign begins by regenerating or re-titring virus. An S2 line costs you three weeks once and then simply keeps working. So for a one-off structural biology target where you need milligrams and then you are done, baculovirus is reasonable. For a protein you will produce repeatedly over months, especially a secreted one where you can harvest the medium again and again without destroying the culture, S2 is clearly the better investment.',
    checklist: ['Schneider S2 cells from Drosophila; simpler than baculovirus', 'Suits secreted proteins in particular', 'Constitutive pAc, or copper-inducible metallothionein promoter', 'Co-transfect expression vector with selection vector, ~10:1', 'Selection vector gives hygromycin or blasticidin resistance', 'Resistance on the deficit plasmid, so survivors carry excess expression vector', '~3 weeks to select; vectors integrate in multiple copies', 'Advantage: stable population, no repeated virus generation', 'Baculovirus degrades by passage effect; S2 does not', 'Choose S2 for repeated long-term production, baculovirus for one-off']
  }
},

{
  id: '2-20',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.20',
  enTitle: 'Mammalian expression — cell lines and culture',
  cnTitle: '哺乳动物表达——细胞系与培养',
  slides: 'L3 s.35–36',
  coverage: 'full',
  coverageNote: 'Cell lines, their uses and the culture formats are all on the slides, including the claim that nearly all approved therapeutic antibodies are CHO-derived. This node deliberately stops before transfection, which is the next one.',
  summary: {
    en: 'Mammalian cells are the only systems that produce fully human-like proteins — correct folding, correct disulfide pairing and complex glycosylation. HEK293 transfects easily and gives high transient yields for research; CHO is the industry standard for biotherapeutics and dominates production, with nearly all approved therapeutic antibodies being CHO-derived. The cost is real: 37 degrees with 5 per cent CO2 in special incubators, and serum-free media at 100 to 200 dollars a litre.',
    cn: '哺乳动物细胞是唯一能生产完全类人蛋白的系统——正确折叠、正确的二硫键配对、复杂型糖基化。HEK293 容易转染、瞬时产量高，适合科研；CHO 是生物治疗药物的工业标准并主导生产，几乎所有已获批的治疗性抗体都来自 CHO。代价很实在：37 度、5% CO2、需要专门的培养箱，无血清培养基 100–200 美元一升。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.36', src: 'img/figures/L3_s36_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '哺乳动物细胞是**唯一**能同时做到三件事的：正确折叠、**正确的二硫键配对**、**复杂型糖基化**。\n\n' +
            '分工也要记：**HEK293 做科研**（好转染、瞬时产量高），**CHO 做工业**（稳定株、GMP，几乎所有获批的治疗性抗体都出自它）。',
  skipIt: '$100–200 每升这个价格记个量级即可。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Mammalian expression – (dis)advantages**——**优点和缺点两边都是被点名的**，所以「贵在哪」也要能讲，不能只说「贵」。',
  explain: [
    {
      q: '「唯一能做完全类人蛋白」里，「完全」指的是哪几件事？',
      a: '**三件事同时成立**，而前面每个系统都只能做到其中一部分：\n\n' +
         '**正确折叠**；\n\n' +
         '**正确的二硫键配对**；\n\n' +
         '**复杂型糖基化**。\n\n' +
         '对照一遍就看得很清楚：\n\n' +
         '**E. coli** —— 三件一件都不做。二硫键要专门想办法（第 2-13 节），糖基化根本没有。\n\n' +
         '**酵母** —— 折叠没问题，二硫键可以，**但糖是高甘露糖型的**（第 2-16 节），不是人的复杂型。\n\n' +
         '**昆虫细胞** —— 介于两者之间：能做不少修饰，糖基化仍然不完全等同于人。\n\n' +
         '**哺乳动物细胞** —— **三件事一起做对。**\n\n' +
         '**所以第 2-3 节决策链第 2 步一旦答「需要人源糖基化」，路径就直接落到这里，没有别的选项。**\n\n' +
         '反过来说也成立，而且更重要：**如果你的蛋白不需要这三样，选它就是在为用不上的东西付钱。**',
      takeaway: '折叠 + 二硫键 + 复杂型糖基化，三件同时做对。前面的系统各自只能做到一部分。'
    },
    {
      q: 'HEK293 和 CHO 的分工为什么这么清楚？工业为什么不用人源细胞？',
      a: '**先看分工：**\n\n' +
         '**HEK293**（人胚肾细胞）—— **人源**、容易转染、**瞬时表达产量高**。适合科研：你要几毫克蛋白、要得快、而且要真正的人源修饰。也大量用来生产病毒载体。\n\n' +
         '**CHO**（中国仓鼠卵巢细胞）—— **工业标准**。稳定株、GMP 生产。**几乎所有已获批的治疗性抗体都是 CHO 来源的。**\n\n' +
         '**那问题来了：既然目标是「像人的蛋白」，工业为什么不用人源的 HEK293？**\n\n' +
         '几个理由叠在一起，而且都不是技术性能上的：\n\n' +
         '**监管历史。**CHO 有几十年的申报和审批记录，整条路监管机构都熟。**「审批方熟悉这条路」本身就是一种优势**，它能省下的时间和风险，不是任何产量指标能换来的。\n\n' +
         '**生物安全。**人源细胞系有携带人类病原体的风险，需要更严格的检测和放行标准。仓鼠细胞对人的病毒不敏感，这条风险小得多。\n\n' +
         '**糖基化虽不完全等同于人，但足够接近、而且高度可控。**对绝大多数治疗性抗体，这已经够用了。\n\n' +
         '**这是「工业标准 ≠ 技术最优」的典型例子。**科研问「哪个最像人」，工业问「哪个能顺利获批、稳定生产十年」。',
      takeaway: 'HEK293 更像人所以做科研，CHO 有监管历史和更低的病原风险所以做工业。判据不同。'
    },
    {
      q: '成本具体贵在哪？只是培养基贵吗？',
      a: '**培养基只是最显眼的那一项。**\n\n' +
         '**培养基**：无血清培养基 **$100–200 一升**，对比 E. coli 的约 $3。差了大约两个数量级。\n\n' +
         '**设备**：要 **37 °C + 5% CO₂** 的专门培养箱。CO₂ 用来配合碳酸氢盐缓冲体系维持 pH——这是细菌培养完全不需要的一套装置。\n\n' +
         '**无菌要求**：这一条最容易被低估。哺乳动物细胞**长得比污染的细菌慢得多**，所以一旦污染，细菌几个小时就把培养基吃光了。而且**你几乎没有抗生素可以救**（能杀细菌的浓度往往也伤细胞，何况还有支原体这类难查的污染）。**一次污染，损失的是几周的工作。**\n\n' +
         '**人的持续照料**：细胞要定期传代、换液、看状态。**你不能像细菌那样把它冻在甘油管里、需要时随时复苏就开始干活**——复苏之后还要养上一两周才恢复状态。\n\n' +
         '**所以真实成本是「培养基 + 设备 + 不能中断的人力」。**这才是第 2-1 节那张表里「成本高」三个字的实际内容。',
      takeaway: '培养基贵两个数量级只是一部分。污染没有抗生素可救、细胞要天天照料，这些才是持续成本。'
    },
    {
      q: '这一节该怎么跟第 2-1 节那条曲线连起来？',
      a: '**哺乳动物细胞就是那条曲线的最右端**——修饰最好，其余全部最差。\n\n' +
         '而它同时也**证明了那条曲线是真的，不是人为规定的**：\n\n' +
         '你在这里确实拿到了别处拿不到的东西（**完全人源的修饰**），也确实付出了别处不用付的代价（**成本、时间、无菌、人力**）。**收益和代价都是实打实的。**\n\n' +
         '**所以选哺乳动物细胞的正当理由只有一个：你的蛋白真的需要那些修饰。**\n\n' +
         '「为了保险起见用哺乳动物细胞」是一个昂贵的错误——你为一堆用不上的能力付了两个数量级的成本，还把项目周期从两天拉成了几周。\n\n' +
         '**这也是为什么第 2-3 节那条决策链要把糖基化放在第一个问：**它不是为了显得有条理，是因为**答错这一题的代价，正好就是这一节列的那些。**',
      takeaway: '曲线最右端：收益和代价都真实。所以只有「真的需要那些修饰」才是选它的正当理由。'
    }
  ],
  points: [
    { term: 'The unique capability', en: 'Mammalian cells are the only systems that produce fully human-like proteins — correct folding, correct disulfide pairing, and complex glycosylation.', cn: '哺乳动物细胞是唯一能生产完全类人蛋白的系统——正确折叠、正确的二硫键配对、以及复杂型糖基化。' },
    { term: 'HEK293', en: 'Human embryonic kidney. Easy to transfect with high transient yield; used for research-grade proteins and viral vectors.', cn: '人胚肾细胞。容易转染、瞬时产量高；用于科研级蛋白和病毒载体。' },
    { term: 'CHO', en: 'Chinese hamster ovary. The industry standard for biotherapeutics, used for stable cell lines and GMP production.', cn: '中国仓鼠卵巢细胞。生物治疗药物的工业标准，用于稳定细胞系和 GMP 生产。' },
    { term: 'HeLa and COS', en: 'Human and monkey lines respectively. Broad host range, compatible with BacMam, used for specialised research.', cn: '分别是人源和猴源细胞系。宿主范围广，与 BacMam 兼容，用于特定的研究用途。' },
    { term: 'CHO dominance', en: 'CHO cells dominate industrial production — nearly all approved therapeutic antibodies are CHO-derived.', cn: 'CHO 细胞主导工业生产——几乎所有已获批的治疗性抗体都来自 CHO。' },
    { term: 'Culture formats', en: 'Shakers with Erlenmeyer flasks, spinners, wave bags, bioreactors, roller bottles and microcarriers.', cn: '摇床配三角瓶、转瓶、波浪袋、生物反应器、滚瓶和微载体。' },
    { term: 'Suspension adaptation', en: 'Cells are advantageously suspension-adapted, which is what makes scale-up practical.', cn: '细胞最好适应悬浮培养，这才让规模放大变得可行。' },
    { term: 'Incubation conditions', en: '37 degrees with 5 per cent CO2, requiring special incubators.', cn: '37 度、5% CO2，需要专门的培养箱。' },
    { term: 'Media', en: 'Typically serum-free — Excell-293, Excell-CHO, FreeStyle-293, Expi293 — and very expensive at 100 to 200 dollars per litre.', cn: '通常是无血清培养基——Excell-293、Excell-CHO、FreeStyle-293、Expi293——而且很贵，100–200 美元一升。' }
  ],
  beyondPoints: [
    { term: 'Why the research and production lines differ', en: 'HEK293 is chosen for transient work because it takes up DNA readily and gives high yield quickly, which suits screening and small batches. CHO is chosen for production because what matters at scale is a stable, reproducible, regulator-accepted line running for weeks in a bioreactor, not how fast you can get a first sample.', cn: '选 HEK293 做瞬时表达，是因为它容易摄取 DNA、能快速给出高产量，适合筛选和小批量。选 CHO 做生产，是因为在规模化时重要的是一个稳定、可重复、被监管机构接受、能在生物反应器里连续运行数周的细胞系，而不是「多快能拿到第一个样品」。' },
    { term: 'The cost is structural, not incidental', en: 'Serum-free medium at a hundred to two hundred dollars a litre, against three dollars for E. coli, is a fifty-fold difference before you count the incubators and the CO2. This is why the decision chain puts the glycosylation question first — you only pay this if you must.', cn: '无血清培养基 100–200 美元一升，而大肠杆菌是 3 美元，在还没算培养箱和 CO2 之前就已经差了约五十倍。这正是决策链把糖基化问题放在第一位的原因——只有在必须的时候才付这个代价。' }
  ],
  terms: [
    { en: 'CHO cells', cn: 'CHO 细胞', def_en: 'Chinese hamster ovary cells, the industry standard host for biotherapeutics. Nearly all approved therapeutic antibodies are produced in them.', def_cn: '中国仓鼠卵巢细胞，生物治疗药物的工业标准宿主。几乎所有已获批的治疗性抗体都由它生产。' },
    { en: 'HEK293', cn: 'HEK293 细胞', def_en: 'Human embryonic kidney cells. Transfect easily and give high transient yields, so they are the research workhorse and are also used for viral vector production.', def_cn: '人胚肾细胞。容易转染、瞬时产量高，因此是科研的主力，也用于生产病毒载体。' },
    { en: 'Suspension adaptation', cn: '悬浮驯化', def_en: 'Adapting an anchorage-dependent line to grow freely in liquid, which is what allows culture volumes to scale into bioreactors.', def_cn: '把依赖贴壁的细胞系驯化成能在液体中自由生长，这正是培养体积能放大到生物反应器规模的前提。' },
    { en: 'Wave bag', cn: '波浪袋', def_en: 'A disposable rocking bioreactor bag, one of the standard formats for mid-scale mammalian culture.', def_cn: '一次性摇摆式生物反应器袋，中等规模哺乳动物培养的标准形式之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why are mammalian cells the only option for some therapeutic proteins?',
      q_cn: '为什么某些治疗性蛋白只能用哺乳动物细胞？',
      options: ['They reach the highest cell density in the shortest culture time', 'Only they combine correct folding, disulfide pairing and complex human glycans', 'They are the cheapest host per gram of protein at production scale', 'They tolerate expression of proteins that are toxic to every other host, including nucleases and membrane proteins'],
      answer: 1,
      optionRefs: { 3: '2-2' },
      why_en: 'Yeast and insect cells glycosylate, but not with human complex-type glycans. Where the glycan determines activity, immunogenicity or half-life, only a mammalian host will do — which is why they persist despite the cost.',
      why_cn: '酵母和昆虫细胞会糖基化，但做不出人类的复杂型糖链。当糖链决定活性、免疫原性或半衰期时，只有哺乳动物宿主可行——这就是它们尽管昂贵却依然不可替代的原因。' },
    { type: 'mcq',
      q_en: 'Which line is the industry standard for therapeutic antibody production?',
      q_cn: '哪个细胞系是治疗性抗体生产的工业标准？',
      options: ['HEK293', 'CHO', 'HeLa', 'COS'],
      answer: 1,
      optionNotes: {
        0: { en: 'HEK293 and CHO both dominate, but in different places: HEK293 is the research workhorse and the preferred host for transient expression, CHO is the standard for stable industrial production. Choosing HEK293 here swaps the research line for the manufacturing one.', cn: 'HEK293 和 CHO 都很主流，但主导的场合不同：HEK293 是科研的主力、也是瞬时表达的首选宿主，CHO 才是稳定工业生产的标准。选 HEK293 就是把科研用的细胞系和生产用的那一个对调了。' }
      },
      why_en: 'CHO dominates industrial production and nearly all approved therapeutic antibodies are CHO-derived. HEK293 is the research counterpart, preferred for transient expression.',
      why_cn: 'CHO 主导工业生产，几乎所有已获批的治疗性抗体都来自 CHO。HEK293 是科研上的对应选择，更适合瞬时表达。' },
    { type: 'mcq',
      q_en: 'Roughly what does serum-free mammalian medium cost per litre?',
      q_cn: '无血清哺乳动物培养基大约多少钱一升？',
      options: ['$2–5', '$30–50', '$100–200', '$1,000–2,000'],
      answer: 2,
      why_en: 'One to two hundred dollars a litre, against about forty for insect medium and about three for E. coli — a roughly fiftyfold gap before you even account for CO2 incubators.',
      why_cn: '100–200 美元一升，而昆虫培养基约 40 美元、大肠杆菌约 3 美元——在还没算 CO2 培养箱之前就差了大约五十倍。' },
    { type: 'short',
      q_en: 'Why is HEK293 preferred for research and CHO for production, when both are mammalian?',
      q_cn: '两者都是哺乳动物细胞，为什么科研偏好 HEK293、生产偏好 CHO？',
      accept: ['transient', 'transfection', 'stable', 'GMP', 'reproducible'],
      answer_en: 'They are optimised for different things. HEK293 takes up DNA readily and gives a high transient yield quickly, so it suits screening, small batches and getting a first sample in under a week — which is what research work usually needs. CHO is the production choice because at scale what matters is a stable cell line that runs reproducibly for weeks in a bioreactor and is accepted by regulators, rather than how fast the first sample arrives. That is why nearly all approved therapeutic antibodies are CHO-derived even though HEK293 would give material sooner.',
      answer_cn: '它们优化的目标不同。HEK293 容易摄取 DNA、能快速给出高瞬时产量，适合筛选、小批量以及一周内拿到第一个样品——这正是科研通常需要的。CHO 之所以是生产选择，是因为在规模化时重要的是一个能在生物反应器里可重复运行数周、并被监管机构接受的稳定细胞系，而不是第一个样品来得多快。这就是为什么几乎所有已获批的治疗性抗体都来自 CHO，尽管 HEK293 出材料更快。'
    }
  ],
  oral: {
    q_en: 'When would you use mammalian cells, and which line would you pick?',
    q_cn: '什么时候会用哺乳动物细胞？你会挑哪个细胞系？',
    model_en: 'Mammalian cells are the only systems that produce fully human-like proteins — correct folding, correct disulfide pairing and genuinely complex glycosylation — so you use them when the glycan matters for activity, immunogenicity or half-life, and not otherwise, because they are the most expensive option by a wide margin. Which line depends on what you are doing. HEK293, human embryonic kidney, transfects easily and gives high transient yields, so it is the research workhorse and is also used to produce viral vectors. CHO, Chinese hamster ovary, is the industry standard for biotherapeutics, used for stable cell lines and GMP production — and it dominates so completely that nearly all approved therapeutic antibodies are CHO-derived. HeLa and COS have a broad host range and are compatible with BacMam, used for more specialised research. The division between HEK and CHO is worth explaining rather than just stating: HEK is optimised for getting material quickly, which is what research needs, whereas CHO is optimised for running reproducibly at scale for weeks in a bioreactor under regulatory scrutiny, which is what production needs. As for culture, the cells are advantageously suspension-adapted, which is what makes scale-up practical, and formats range from shaker flasks and spinners through wave bags and bioreactors to roller bottles and microcarriers. Conditions are thirty-seven degrees with five per cent CO2, which requires special incubators, and the media are typically serum-free — Excell, FreeStyle, Expi — at one to two hundred dollars a litre. Set against three dollars a litre for E. coli, that is a fiftyfold difference before you count the equipment, which is exactly why the host decision chain asks about glycosylation first.',
    checklist: ['Only systems giving fully human-like protein: folding, disulfides, complex glycans', 'Use only when the glycan matters — they are the most expensive option', 'HEK293: easy transfection, high transient yield, research and viral vectors', 'CHO: industry standard, stable lines, GMP, nearly all approved antibodies', 'HeLa/COS: broad host range, BacMam, specialised research', 'HEK optimised for speed, CHO for reproducible scale under regulation', 'Suspension-adapted, which enables scale-up', 'Formats: shakers, spinners, wave bags, bioreactors, roller bottles, microcarriers', '37 C, 5% CO2, special incubators', 'Serum-free media, $100-200/L versus $3 for E. coli']
  }
},

{
  id: '2-21',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.21',
  enTitle: 'Mammalian transfection and plasmids',
  cnTitle: '哺乳动物转染与质粒',
  slides: 'L3 s.37–38',
  coverage: 'full',
  coverageNote: 'The delivery methods, promoters and selection antibiotics are on the slides, and so is the instruction that kill curves are needed. What a kill curve actually is, and what goes wrong at each end of the concentration range, is the beyond-the-slides part.',
  summary: {
    en: 'At small scale, lipofection is the most widespread delivery method, alongside electroporation, calcium phosphate and gene guns. At large scale, linear polyethyleneimine is the answer because it is cheap enough to use by the litre. Promoters are CMV and EF1-alpha for constitutive expression, TET and cumate for inducible. Selection uses G418, hygromycin, blasticidin or Zeocin, and because cell lines differ enormously in sensitivity, a kill curve must be run before making a stable line.',
    cn: '小规模下脂质体转染是最常用的递送方法，此外还有电转、磷酸钙沉淀和基因枪。大规模下答案是线性聚乙烯亚胺（PEI），因为它便宜到可以按升用。启动子方面，组成型用 CMV 和 EF1α，诱导型用 TET 和 cumate。筛选用 G418、潮霉素、杀稻瘟菌素或 Zeocin，而由于不同细胞系的敏感度差异巨大，建稳定株之前必须先做杀伤曲线。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.37', src: 'img/figures/L3_s37_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '建稳定株之前**必须先做杀伤曲线**：同一个抗生素在不同细胞系上的有效浓度能差十倍（G418 从 100 到 1000 µg/mL 都有），**协议上的数字不能直接抄**。\n\n' +
            '大规模转染用**线性 PEI**，因为只有它便宜到能按升用。',
  skipIt: 'Lipofectamine / JetPrime / FuGENE 这些商品名，以及 2A 肽那串具体序列，不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时写的是 **Mammalian expression – (dis)advantages**——**哺乳动物表达是被点名的**，但没有细到具体试剂。',
  explain: [
    {
      q: '杀伤曲线是什么？为什么它是「必须做」而不是「最好做」？',
      a: '**因为这个浓度没法从协议里抄——它取决于你的细胞，而不同细胞系能差十倍。**\n\n' +
         '幻灯片给的例子很直白：**G418 的工作浓度在 100 到 1000 µg/mL 之间**，取决于你用的是哪个细胞系。你随便抄一个数字，两头都可能出事：\n\n' +
         '**浓度太低** → 没转染上的细胞也活下来了。你以为自己筛出了一个「稳定株」，其实里面**混着一大批假阳性**。而且这个错误会一路带到下游：你的表达量看起来低，其实是因为大部分细胞根本没有你的基因。\n\n' +
         '**浓度太高** → 把转染成功的细胞也一起杀了。你筛了三周，什么都没长出来，还以为是转染失败。\n\n' +
         '**做法很简单：**拿**没转染的**细胞，铺一排不同浓度，找到**7–10 天内能 100% 杀光的最低那个浓度**。用它。\n\n' +
         '注意两个细节：用**没转染的**细胞（你要测的是「杀光野生型需要多少」）；要**最低的**那个有效浓度（多余的浓度只会伤害你要留下的细胞）。\n\n' +
         '**这是这一讲里少见的、你必须为自己的体系亲手测一次的参数。**它属于第 2-3 节那句「每个蛋白都有自己的脾气」的细胞版本。',
      takeaway: '同一个药在不同细胞系上差十倍。用未转染的细胞测出「7–10 天杀光的最低浓度」，别抄协议。'
    },
    {
      q: '为什么大规模转染非用线性 PEI 不可？',
      a: '**因为在这个尺度上，决定选择的是每升多少钱，而不是效率高多少。**\n\n' +
         'Lipofectamine 这类脂质体试剂效率很好，但**贵**。小规模（一个六孔板、一个 T75 瓶）无所谓；一旦你要转染**几升甚至几十升**的悬浮细胞，试剂成本会直接超过整个实验的预算。\n\n' +
         '**线性聚乙烯亚胺（PEI）是一种便宜的合成聚合物**——它带正电，跟带负电的 DNA 形成复合物，再被细胞吞进去。原理不复杂，效率也比不上最好的脂质体试剂，**但它便宜到可以按升用**。\n\n' +
         '**所以这一条的真正含义是：规模会改变什么叫「最好的方法」。**\n\n' +
         '小规模选效率最高的，大规模选单位成本最低的——这跟第 1-19 节「用你实验室已经在跑的那套」是同一类现实约束，也跟第 2-1 节那张表里的「每升培养基多少钱」呼应。\n\n' +
         '**大规模瞬时表达之所以能成为一个可行的选项，很大程度上就是因为有 PEI 这样一个便宜的递送方式。**没有它，超过几升就只能走稳定株那条路了。',
      takeaway: '大规模时决定因素是每升成本不是效率。PEI 便宜到能按升用，这才让大规模瞬时表达可行。'
    },
    {
      q: '做复合物时，共转两个质粒和用一个双顺反子质粒，差别在哪？',
      a: '**差在你能不能调比例。**\n\n' +
         '**共转两个质粒**：你可以自由调整加进去的**量的比例**——想要 1:1 就等量加，发现某个亚基不够就多加一点。**比例是一个你可以拧的旋钮。**\n\n' +
         '**双顺反子 / 2A 肽**：两个基因在同一条 mRNA 上，**下游那个天然就表达得少**（第 2-14 节讲过原因），而且**你无法控制少多少**。比例是系统给你的，不是你定的。\n\n' +
         '为什么这很要紧，回到第 2-14 节那条：**比例失衡会主动制造包涵体**——多出来的那个亚基没有伙伴，界面暴露，就聚集了。所以「能调比例」不是锦上添花，它直接决定你拿不拿得到完整的复合物。\n\n' +
         '**2A 肽还有一个自身的问题**：它靠的是核糖体在那个序列处「跳过」一个肽键（所以叫自剪切，其实并不是真的剪切）。这个过程**效率有限**——核糖体可能直接读通（得到一条融合蛋白），也可能掉下来（下游完全不表达）。\n\n' +
         '**所以选择很清楚：**要精确控制化学计量比 → 共转多个质粒；要保证每个细胞都同时拿到所有基因（转染效率是瓶颈时）→ 单质粒方案。**两边各解决一个问题，而这两个问题不能同时解决。**',
      takeaway: '共转能调比例但不保证每个细胞都拿全；单质粒保证拿全但比例不由你定。'
    }
  ],
  points: [
    { term: 'Lipofection', en: 'The most widespread small-scale method — Lipofectamine, JetPrime, FuGENE.', cn: '最常用的小规模方法——Lipofectamine、JetPrime、FuGENE。' },
    { term: 'Other small-scale methods', en: 'Electroporation and nucleofection (Amaxa), calcium phosphate precipitation, biolistic particle delivery with a gene gun, and viral delivery.', cn: '电转和核转染（Amaxa）、磷酸钙沉淀、基因枪的微粒轰击，以及病毒递送。' },
    { term: 'Large scale — linear PEI', en: 'Linear polyethyleneimine is cheap enough to use at litre scale, which is what makes large transient production affordable.', cn: '线性聚乙烯亚胺便宜到可以按升使用，这正是大规模瞬时表达在经济上可行的原因。' },
    { term: 'Constitutive promoters', en: 'CMV and EF1-alpha.', cn: 'CMV 和 EF1α。' },
    { term: 'Inducible promoters', en: 'TET and cumate systems.', cn: 'TET 和 cumate 系统。' },
    { term: 'Antibiotics for maintenance', en: 'Penicillin and streptomycin are used for routine culture maintenance — and the slide notes they are not actually needed.', cn: '青霉素和链霉素用于日常培养维持——幻灯片指出其实并不必要。' },
    { term: 'Antibiotics for selection', en: 'G418 (Geneticin), hygromycin, blasticidin and Zeocin. Sensitivities differ between cell lines, so kill curves are needed.', cn: 'G418（遗传霉素）、潮霉素、杀稻瘟菌素和 Zeocin。不同细胞系的敏感度不同，所以需要做杀伤曲线。' },
    { term: 'Protein complexes — co-transfection', en: 'Co-transfect two or more plasmids, and you can vary the ratio to tune relative expression of the subunits.', cn: '共转两个或以上的质粒，而且可以调整比例来调节各亚基的相对表达量。' },
    { term: 'Protein complexes — one plasmid', en: 'Bicistronic plasmids, or 2A self-cleaving peptides with the sequence ATNFSLLKQAGDVEENPGP. Efficiency is limited, because the ribosome may fall off or read through.', cn: '双顺反子质粒，或者序列为 ATNFSLLKQAGDVEENPGP 的 2A 自剪切肽。效率有限，因为核糖体可能脱落或者直接通读。' }
  ],
  beyondPoints: [
    { term: 'What a kill curve is and why it is mandatory', en: 'Cell lines vary enormously in sensitivity to the same antibiotic — G418 is used anywhere from 100 to 1000 micrograms per millilitre depending on the line. So the working concentration cannot be taken from a protocol; it has to be measured for your cells.', cn: '不同细胞系对同一种抗生素的敏感度差异极大——G418 的用量从 100 到 1000 µg/mL 都有，取决于细胞系。所以工作浓度不能照搬方案，必须针对你自己的细胞测出来。' },
    { term: 'What goes wrong at each end', en: 'Too low, and untransfected cells survive, so the population you call a stable line is contaminated with false positives. Too high, and you kill the successfully transfected cells along with everything else.', cn: '浓度太低，未转染的细胞活了下来，你所谓的「稳定细胞系」里混着一堆假阳性。浓度太高，成功转染的细胞也跟着一起被杀掉。' },
    { term: 'How to run one', en: 'Take untransfected cells, apply a series of concentrations, and find the lowest one that kills 100 per cent within 7 to 10 days. Use that concentration for selection.', cn: '取未转染的细胞，施加一系列浓度，找出能在 7–10 天内 100% 杀死细胞的最低浓度，用这个浓度做筛选。' },
    { term: 'Why the ratio trick matters for complexes', en: 'Co-transfecting separate plasmids lets you tune subunit stoichiometry by adjusting how much of each you add — something a bicistronic construct cannot do, since there the downstream gene is simply expressed less and you have no control over by how much.', cn: '共转独立的质粒可以通过调整各自的加入量来调节亚基化学计量比——这是双顺反子构建体做不到的，因为在那里下游基因就是表达得更少，而你无法控制少多少。' }
  ],
  terms: [
    { en: 'Kill curve', cn: '杀伤曲线', def_en: 'A titration on untransfected cells to find the lowest antibiotic concentration killing 100 per cent within 7 to 10 days. Required before selecting any stable line.', def_cn: '在未转染细胞上做的浓度梯度实验，用于找出能在 7–10 天内 100% 杀死细胞的最低抗生素浓度。建立任何稳定细胞系之前都必须做。' },
    { en: 'Lipofection', cn: '脂质体转染', def_en: 'Delivering DNA in cationic lipid complexes that fuse with the cell membrane. The most widespread small-scale mammalian transfection method.', def_cn: '用阳离子脂质复合物包裹 DNA 并与细胞膜融合来递送。哺乳动物小规模转染中最常用的方法。' },
    { en: 'Linear PEI', cn: '线性聚乙烯亚胺', def_en: 'A cationic polymer transfection reagent cheap enough for litre-scale use, making large transient mammalian production economically viable.', def_cn: '一种阳离子聚合物转染试剂，便宜到可用于升级规模，使大规模瞬时哺乳动物表达在经济上可行。' },
    { en: '2A self-cleaving peptide', cn: '2A 自剪切肽', def_en: 'The sequence ATNFSLLKQAGDVEENPGP, which makes the ribosome skip a peptide bond so one ORF yields two proteins. Efficiency is limited by fall-off and read-through.', def_cn: '序列为 ATNFSLLKQAGDVEENPGP，使核糖体跳过一个肽键，从而让一个开放阅读框产生两个蛋白。效率受核糖体脱落和通读的限制。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why must you run a kill curve before selecting a stable mammalian cell line?',
      q_cn: '为什么筛选哺乳动物稳定细胞系之前必须做杀伤曲线？',
      options: ['To measure the transfection efficiency of the chosen delivery method, by counting how many cells survive the drug', 'Sensitivity to the selection antibiotic differs greatly between cell lines', 'To check the culture for mycoplasma contamination before selection', 'To determine how many plasmid copies each cell has integrated'],
      answer: 1,
      optionNotes: {
        0: { en: 'A kill curve is run on untransfected cells, so by construction it cannot report anything about transfection. Transfection efficiency is read from a reporter such as GFP in cells that did receive DNA. The two experiments have opposite subjects: one asks what dose kills cells with no construct, the other asks how many cells got one.', cn: '杀伤曲线是在未转染的细胞上做的，所以它按定义就说明不了任何关于转染的事。转染效率要用 GFP 这类报告基因、在确实拿到 DNA 的细胞里去读。两个实验的对象正好相反：一个问「杀光没有构建体的细胞需要多少药」，另一个问「有多少细胞拿到了构建体」。' }
      },
      why_en: 'G418 for instance is used anywhere between 100 and 1000 micrograms per millilitre depending on the line. Too low leaves untransfected survivors as false positives; too high kills the transfectants you are trying to select.',
      why_cn: '比如 G418 的用量根据细胞系不同可以从 100 到 1000 µg/mL。浓度太低会留下未转染的存活细胞成为假阳性；太高则会把你想筛的转染细胞也杀掉。' },
    { type: 'mcq',
      q_en: 'What makes linear PEI the reagent of choice for large-scale transient transfection?',
      q_cn: '是什么让线性 PEI 成为大规模瞬时转染的首选试剂？',
      options: ['It gives the highest efficiency of any method', 'It is cheap enough to use at litre scale', 'It integrates DNA into the genome', 'It works without serum-free medium'],
      answer: 1,
      optionRefs: { 2: '2-24' },
      why_en: 'Lipofection reagents are effective but far too expensive by the litre. PEI is a cheap cationic polymer, and cost per litre is the binding constraint once you scale a transient production up.',
      why_cn: '脂质体转染试剂效果不错，但按升算太贵了。PEI 是便宜的阳离子聚合物，而一旦把瞬时表达放大，每升成本就成了决定性约束。' },
    { type: 'mcq',
      q_en: 'Why is co-transfecting separate plasmids preferable to a bicistronic construct for a protein complex?',
      q_cn: '对于蛋白复合物，为什么共转独立质粒比双顺反子构建体更好？',
      options: ['A guaranteed one-to-one molar ratio of the two subunits in every transfected cell', 'The plasmid ratio can be varied to tune relative subunit expression', 'It removes the need for any selection marker in the transfection', 'The downstream gene in a bicistronic construct is not translated at all'],
      answer: 1,
      why_en: 'Stoichiometry is controllable when the subunits are on separate plasmids. In a bicistronic construct the downstream gene simply expresses less, through inefficient internal initiation, and you have no lever on how much less.',
      why_cn: '亚基分在不同质粒上时，化学计量比是可控的。在双顺反子构建体里，下游基因就是因为内部起始效率低而表达得更少，而你对「少多少」没有任何调节手段。' },
    { type: 'short',
      q_en: 'Describe how you would run a kill curve, and what happens if you get the concentration wrong in either direction.',
      q_cn: '描述你会怎么做杀伤曲线，以及浓度在两个方向上出错分别会怎样。',
      accept: ['untransfected', 'series of concentrations', 'lowest', '100%', '7-10 days'],
      answer_en: 'Take untransfected cells of the line you intend to use, apply a series of antibiotic concentrations, and find the lowest concentration that kills one hundred per cent of them within seven to ten days. That is the concentration you then use for selection. If you go too low, untransfected cells survive the selection, so what you take to be a stable line is actually contaminated with false positives that carry no construct. If you go too high, you kill the successfully transfected cells along with everything else and recover nothing. The reason this cannot be skipped is that sensitivity varies enormously between lines — G418 is used anywhere from a hundred to a thousand micrograms per millilitre depending on the cells — so a concentration copied from someone else\'s protocol is not transferable.',
      answer_cn: '取你打算使用的那个细胞系的未转染细胞，施加一系列抗生素浓度，找出能在 7–10 天内 100% 杀死它们的最低浓度。这个浓度就是之后用于筛选的浓度。如果浓度太低，未转染的细胞会在筛选中存活，于是你以为的稳定细胞系里其实混着一堆不带构建体的假阳性。如果浓度太高，成功转染的细胞会和其他细胞一起被杀掉，什么都收不回来。这一步不能省的原因是各细胞系敏感度差异极大——G418 的用量根据细胞不同可以从 100 到 1000 µg/mL——所以从别人方案里抄来的浓度是不能直接套用的。'
    }
  ],
  oral: {
    q_en: 'How do you get DNA into mammalian cells, and what goes on the plasmid?',
    q_cn: '怎么把 DNA 送进哺乳动物细胞？质粒上要放什么？',
    model_en: 'Delivery splits by scale. At small scale, lipofection is the most widespread — Lipofectamine, JetPrime, FuGENE — and the alternatives are electroporation or nucleofection with an Amaxa device, calcium phosphate precipitation, biolistic delivery with a gene gun, and viral delivery. At large scale the answer is linear polyethyleneimine, and the reason is purely economic: it is a cheap cationic polymer, cheap enough to use by the litre, and once you scale a transient production up, cost per litre of reagent becomes the binding constraint. On the plasmid, promoters are CMV or EF1-alpha if you want constitutive expression, or TET and cumate systems if you want it inducible. For antibiotics there are two separate uses that should not be confused: penicillin and streptomycin are for routine culture maintenance, and the slides note they are not really needed; the selection antibiotics are G418 or Geneticin, hygromycin, blasticidin and Zeocin. Because sensitivity varies enormously between cell lines — G418 gets used anywhere from a hundred to a thousand micrograms per millilitre — you must run a kill curve before making a stable line. That means taking untransfected cells, applying a range of concentrations, and finding the lowest one that kills a hundred per cent within seven to ten days. Too low and untransfected cells survive, so your stable line is full of false positives; too high and you kill the transfectants too. Finally, for protein complexes you have three options: co-transfect two or more plasmids, which has the real advantage that you can vary the ratio to tune relative subunit expression; use a bicistronic plasmid; or use 2A self-cleaving peptides, sequence ATNFSLLKQAGDVEENPGP, though their efficiency is limited because the ribosome can fall off or read through.',
    checklist: ['Small scale: lipofection most widespread (Lipofectamine, JetPrime, FuGENE)', 'Also electroporation/nucleofection, calcium phosphate, gene gun, viral', 'Large scale: linear PEI, because it is cheap by the litre', 'Constitutive promoters: CMV, EF1-alpha. Inducible: TET, cumate', 'Pen/Strep for maintenance, and not really needed', 'Selection: G418, hygromycin, blasticidin, Zeocin', 'Kill curve mandatory — sensitivity varies hugely between lines', 'Method: untransfected cells, concentration series, lowest killing 100% in 7-10 days', 'Too low gives false positives; too high kills the transfectants', 'Complexes: co-transfection (ratio tunable), bicistronic, or 2A peptides']
  }
},

{
  id: '2-22',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.22',
  enTitle: 'Tet-On and Tet-Off',
  cnTitle: 'Tet-On 与 Tet-Off',
  slides: 'L3 s.39',
  coverage: 'full',
  coverageNote: 'The TRE architecture, the two regulator proteins and the response table are on the slide. The naming mnemonic and the practical reason Tet-On dominates are added, because the two systems are otherwise very easy to confuse in an exam.',
  summary: {
    en: 'Both systems are built on the tetracycline response element, seven copies of the tet operator, recognised by the tetracycline repressor TetR, which releases DNA when it binds tetracycline. Tet-Off uses tTA, TetR fused to the VP16 activation domain, so adding tetracycline switches expression off. Tet-On uses rtTA, a reverse TetR obtained by random mutagenesis that binds DNA only when the drug is present, so adding tetracycline switches expression on.',
    cn: '两个系统都建立在四环素响应元件上——七个拷贝的 tet 操纵基因，被四环素阻遏蛋白 TetR 识别，而 TetR 结合四环素后会从 DNA 上脱落。Tet-Off 用 tTA，即 TetR 融合 VP16 激活域，所以加四环素会关闭表达。Tet-On 用 rtTA，一个通过随机突变得到的反向 TetR，只有在有药时才结合 DNA，所以加四环素会开启表达。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**名字描述的是「加药之后会怎样」，不是静息状态**：Tet-**On** = 加四环素就**开**；Tet-**Off** = 加四环素就**关**。\n\n' +
            '机制上两者只差一件事：**rtTA 是反过来的 TetR——它只有结合了药才结合 DNA。**',
  skipIt: 'VP16 来自 HSV 这个出处、以及 TRE 是七个拷贝这个数字，不用背。老师在第 4 讲开头给第 3 讲做 RECAP 时明确写了 **Tet-Off, Tet-On inducible expression**——**这两个系统是被点名的**，必须能讲清区别。',
  explain: [
    {
      q: 'Tet-On 和 Tet-Off，怎么才能永远不搞反？',
      a: '**记住一句话：名字说的是「加药之后会怎样」。**\n\n' +
         '**Tet-On** = 加四环素 → 表达**打开（On）**。\n\n' +
         '**Tet-Off** = 加四环素 → 表达**关闭（Off）**。\n\n' +
         '**名字描述的是药的作用效果，不是系统的默认状态。**很多人搞反，是因为下意识把「On」理解成「这个系统平时是开着的」——正好相反，Tet-On 平时是关着的，你加药它才开。\n\n' +
         '**再从机制上确认一遍，就彻底不会错了。**两个系统的调控蛋白都融合了 **VP16 激活域**，所以对两者来说，**「结合到 DNA 上」就等于「激活转录」**。区别只在于什么时候结合得上：\n\n' +
         '**tTA（Tet-Off）** 用的是**野生型 TetR** —— 平时结合 DNA（→ 激活），**药一来就掉下去**（→ 关闭）。\n\n' +
         '**rtTA（Tet-On）** 用的是**反向 TetR** —— 平时结合不上（→ 关闭），**结合了药才结合 DNA**（→ 激活）。\n\n' +
         '**所以两者的唯一差别，是那个蛋白对药的反应是「松开」还是「抓紧」。**别的完全一样。',
      takeaway: '名字说的是加药后的结果。机制上两者都靠 VP16，唯一区别是 TetR 遇到药是松开还是抓紧。'
    },
    {
      q: 'rtTA 是怎么来的？「反向」的 TetR 能设计出来吗？',
      a: '**设计不出来，是随机突变筛出来的**——而这一点值得单独记，因为它是这门课后半段的预告。\n\n' +
         '想一想这个要求有多难：你要把一个「结合了配体就松开 DNA」的蛋白，改成「结合了配体才抓住 DNA」的蛋白。**这是把别构效应的方向整个反过来。**\n\n' +
         '**没有人能坐下来算出该改哪几个残基。**别构机制涉及整个蛋白的构象网络，不是某一个位点的事。这正是第 1-2-4 节那条岔路的另一边：\n\n' +
         '**知道该改哪里** → 理性设计（像 subtilisin 的 Met222）。\n\n' +
         '**不知道该改哪里** → **建一个突变库，然后筛。**\n\n' +
         'rtTA 就是后者的产物：**随机突变 TetR，做出一大堆变体，再筛出行为正好反过来的那一个。**\n\n' +
         '**而「怎么建库、怎么筛」正是第 9 讲的全部内容。**\n\n' +
         '所以这一节里有一个很好的口试素材：被问到 Tet 系统时，除了讲机制，还可以补一句「rtTA 是定向进化的产物，因为反转别构方向是理性设计做不到的」——**这说明你把课程当成一个整体在读。**',
      takeaway: '反转别构方向没法理性设计，只能建库筛选。rtTA 是定向进化的产物——第 9 讲的预告。'
    },
    {
      q: '为什么实际上 Tet-On 用得更多？',
      a: '**因为 Tet-Off 要求你一直加着药，只为了把系统摁住。**\n\n' +
         '把两种系统的日常操作摊开对比：\n\n' +
         '**Tet-On**：平时什么都不加，细胞正常培养。**想表达的时候加药。**干净利落。\n\n' +
         '**Tet-Off**：平时**必须持续加着四环素**（否则就一直在表达）。想诱导的时候，你要做的是**把药彻底洗掉**。\n\n' +
         '**「洗掉」这件事比「加进去」难得多：**\n\n' +
         '要反复换液、洗涤，而四环素类会结合到细胞和塑料上，**残留很难彻底清除**；\n\n' +
         '洗的过程慢，所以**诱导的时间点不精确**；\n\n' +
         '长期培养一直加药，**成本高**，而且四环素本身对细胞不是完全无害的。\n\n' +
         '**所以 Tet-On 在几乎所有场合都更实用。**\n\n' +
         '这跟第 2-7 节挑启动子是同一类判断：**不要只看「能不能调控」，要看「日常操作里你要付出什么」。**一个理论上等价的系统，可能在实验室里完全不等价。',
      takeaway: 'Tet-Off 要靠持续加药维持关闭，而诱导要靠彻底洗掉——慢、贵、不精确。所以 Tet-On 更实用。'
    }
  ],
  points: [
    { term: 'The response element', en: 'Seven tetracycline operator (tetO) sequences together form the TRE, originally from E. coli.', cn: '七个四环素操纵基因（tetO）序列共同构成 TRE，最初来自大肠杆菌。' },
    { term: 'The repressor', en: 'TetR, the tetracycline repressor, recognises the TRE. Tetracycline binding releases the repressor from DNA.', cn: '四环素阻遏蛋白 TetR 识别 TRE。四环素结合后会把阻遏蛋白从 DNA 上释放下来。' },
    { term: 'Tet-Off regulator', en: 'tTA — TetR fused to the HSV VP16 transcriptional activation domain.', cn: 'tTA——TetR 融合了 HSV 的 VP16 转录激活域。' },
    { term: 'Tet-Off behaviour', en: 'Tetracycline present gives low expression; tetracycline absent gives high expression.', cn: '有四环素时表达低；没有四环素时表达高。' },
    { term: 'Tet-On regulator', en: 'rtTA — a reverse TetR, obtained by random mutagenesis, fused to VP16.', cn: 'rtTA——通过随机突变得到的反向 TetR，融合了 VP16。' },
    { term: 'Tet-On behaviour', en: 'Tetracycline present gives high expression; tetracycline absent gives low expression.', cn: '有四环素时表达高；没有四环素时表达低。' },
    { term: 'What you need to assemble', en: 'A plasmid with a TRE upstream of your gene of interest, a stable cell line expressing tTA or rtTA (or a plasmid expressing it), and tetracycline or doxycycline.', cn: '一个在目的基因上游带 TRE 的质粒、一个表达 tTA 或 rtTA 的稳定细胞系（或表达它的质粒），以及四环素或强力霉素。' }
  ],
  beyondPoints: [
    { term: 'The naming tells you what the drug does', en: 'Tet-On means adding tetracycline turns expression ON. Tet-Off means adding tetracycline turns it OFF. The name describes the consequence of adding the drug, not the resting state.', cn: 'Tet-On 是「加四环素就打开」，Tet-Off 是「加四环素就关闭」。这个名字描述的是加药之后的结果，而不是不加药时的状态。' },
    { term: 'There is only one mechanistic difference', en: 'Wild-type TetR binds DNA and falls off when the drug binds. The reverse TetR in rtTA does the opposite: it binds DNA only when it has bound the drug. Both are fused to VP16, so in both cases binding DNA means activating transcription.', cn: '野生型 TetR 结合 DNA，结合药物后脱落。rtTA 里的反向 TetR 正好相反：只有结合了药物才能结合 DNA。两者都融合了 VP16，所以在两种情况下「结合 DNA」都等于「激活转录」。' },
    { term: 'Why Tet-On is the more common choice', en: 'With Tet-On you add the drug only when you want expression. Tet-Off requires the drug to be present continuously just to hold the system off, and inducing means washing it out completely, which is slow and expensive.', cn: 'Tet-On 只需要在你想表达的时候加药。Tet-Off 则要求全程加药才能维持关闭状态，而诱导时又必须把药彻底洗干净，既慢又贵。' }
  ],
  terms: [
    { en: 'TRE (tetracycline response element)', cn: '四环素响应元件', def_en: 'Seven tandem tet operator sequences placed upstream of the gene of interest, providing the binding site for tTA or rtTA.', def_cn: '置于目的基因上游的七个串联 tet 操纵基因序列，为 tTA 或 rtTA 提供结合位点。' },
    { en: 'tTA', cn: 'tTA（四环素控制的转录激活因子）', def_en: 'TetR fused to the VP16 activation domain. It binds the TRE in the absence of drug, so adding tetracycline switches expression off.', def_cn: 'TetR 与 VP16 激活域的融合蛋白。无药时结合 TRE，所以加四环素会关闭表达。' },
    { en: 'rtTA', cn: 'rtTA（反向 tTA）', def_en: 'A reverse TetR from random mutagenesis, fused to VP16. It binds the TRE only when tetracycline is bound, so adding the drug switches expression on.', def_cn: '通过随机突变得到的反向 TetR 与 VP16 的融合蛋白。只有结合了四环素才结合 TRE，所以加药会开启表达。' },
    { en: 'Doxycycline', cn: '强力霉素', def_en: 'A tetracycline derivative used in practice to control Tet systems, generally preferred over tetracycline itself.', def_cn: '四环素的衍生物，实际操作中用来控制 Tet 系统，通常比四环素本身更常用。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In a Tet-On system, what happens when you add doxycycline?',
      q_cn: '在 Tet-On 系统里，加入强力霉素会发生什么？',
      options: ['Expression is switched off', 'Expression is switched on', 'The TRE is deleted', 'The regulator is degraded'],
      answer: 1,
      optionNotes: {
        0: { en: 'Switching off when the drug goes in is what Tet-Off does, using tTA. The name always describes what adding the drug does, never the resting state, so this option is the other system under this system name.', cn: '加药就关闭，那是 Tet-Off 的行为，用的是 tTA。名字描述的永远是「加药之后会怎样」，绝不是静息状态，所以这个选项是把另一个系统的行为安在了这个名字下面。' }
      },
      why_en: 'The name describes the effect of adding the drug: Tet-On means adding tetracycline turns expression on. Mechanistically, rtTA binds the TRE only when it has bound drug, and being fused to VP16, binding means activating.',
      why_cn: '名字描述的就是加药的效果：Tet-On 意味着加四环素会开启表达。机制上，rtTA 只有结合了药物才结合 TRE，而它融合了 VP16，所以结合就等于激活。' },
    { type: 'mcq',
      q_en: 'What is the single mechanistic difference between tTA and rtTA?',
      q_cn: 'tTA 和 rtTA 之间唯一的机制差别是什么？',
      options: ['rtTA lacks the VP16 activation domain that tTA carries', 'rtTA is a reverse TetR that binds DNA only when the drug is present', 'rtTA recognises a different operator sequence from the one tTA uses', 'rtTA represses transcription where tTA activates it'],
      answer: 1,
      optionNotes: {
        3: { en: 'Repressing is what wild-type TetR does, and that is precisely the part that was engineered away. Both tTA and rtTA are TetR fused to the VP16 activation domain, which converts a repressor into an activator. What is reversed in rtTA is the drug response, not the choice between repressing and activating.', cn: '「阻遏」是野生型 TetR 的行为，而那恰恰是被改造掉的部分。tTA 和 rtTA 都是 TetR 融合了 VP16 激活域，这一步把 repressor 变成了 activator。rtTA 里被反过来的是对药的响应，不是「阻遏还是激活」这个选择。' }
      },
      why_en: 'Both carry VP16 and both activate when bound to the TRE. The only difference is the direction of the drug response — wild-type TetR falls off DNA when drug binds, the reverse version binds DNA only when drug binds.',
      why_cn: '两者都带 VP16，都在结合 TRE 时激活转录。唯一的区别是药物响应的方向——野生型 TetR 结合药物后从 DNA 脱落，反向版本则只有结合药物才结合 DNA。' },
    { type: 'mcq',
      q_en: 'Why is Tet-On generally preferred to Tet-Off in practice?',
      q_cn: '实践中为什么 Tet-On 通常比 Tet-Off 更受欢迎？',
      options: ['It reaches a higher maximum expression level when fully induced', 'Drug is needed only when expression is wanted, not continuously', 'It works without a separately established regulator cell line', 'It has a tighter off state with less leaky background expression'],
      answer: 1,
      optionRefs: { 3: '2-7' },
      why_en: 'Tet-Off holds the system off by the continuous presence of drug, so inducing means removing it completely — slow, and expensive over a long culture. Tet-On only needs drug at the moment you want expression.',
      why_cn: 'Tet-Off 靠药物持续存在来维持关闭状态，所以诱导意味着必须把药彻底去除——既慢，长期培养下来也贵。Tet-On 只在你想要表达的那一刻才需要加药。' },
    { type: 'short',
      q_en: 'Explain the Tet system and how you would remember which way round Tet-On and Tet-Off work.',
      q_cn: '解释 Tet 系统，以及你会怎么记住 Tet-On 和 Tet-Off 各自的方向。',
      accept: ['add drug', 'ON', 'OFF', 'rtTA', 'tTA', 'VP16', 'reverse'],
      answer_en: 'Both systems put a tetracycline response element — seven tet operator sequences — upstream of the gene of interest, and both use a regulator protein fused to the VP16 activation domain, so that binding the TRE means activating transcription. The mnemonic is that the name describes what happens when you add the drug: Tet-On means adding tetracycline turns expression on, Tet-Off means adding it turns expression off. Mechanistically there is only one difference. Tet-Off uses tTA, which is ordinary TetR: it binds DNA normally and falls off when tetracycline binds it. Tet-On uses rtTA, a reverse TetR obtained by random mutagenesis, which does the opposite — it binds DNA only when it has bound the drug. In practice Tet-On is preferred, because you only add drug at the point you want expression, whereas Tet-Off requires the drug to be present continuously just to keep the system off, and inducing means washing it out completely, which is both slow and expensive.',
      answer_cn: '两个系统都在目的基因上游放一个四环素响应元件（七个 tet 操纵基因序列），也都使用融合了 VP16 激活域的调控蛋白，所以「结合 TRE」就等于「激活转录」。记忆法是：名字描述的是加药之后会怎样——Tet-On 就是加四环素后开启，Tet-Off 就是加四环素后关闭。机制上只有一个区别。Tet-Off 用 tTA，也就是普通的 TetR：正常结合 DNA，四环素结合上去之后脱落。Tet-On 用 rtTA，一个通过随机突变得到的反向 TetR，正好相反——只有结合了药物才能结合 DNA。实践中更常用 Tet-On，因为你只在想表达的时候加药；而 Tet-Off 要求药物持续存在才能维持关闭，诱导时还得把药彻底洗掉，既慢又贵。'
    }
  ],
  oral: {
    q_en: 'How would you build an inducible expression system in mammalian cells?',
    q_cn: '你会怎么在哺乳动物细胞里构建一个诱导型表达系统？',
    model_en: 'The standard answer is a tetracycline system, and both variants are built from the same parts. Upstream of the gene of interest you put a tetracycline response element, which is seven tandem copies of the tet operator sequence, originally from E. coli. That element is recognised by the tetracycline repressor, TetR, and the defining property of TetR is that binding tetracycline releases it from DNA. The regulator you actually use is TetR fused to the VP16 transcriptional activation domain from herpes simplex virus, so that binding the response element does not repress but activates. In the Tet-Off system that fusion is called tTA, and because it is ordinary TetR it sits on the DNA and drives expression until you add tetracycline, at which point it falls off and expression drops. In the Tet-On system the regulator is rtTA, a reverse TetR obtained by random mutagenesis, which behaves in exactly the opposite way: it binds DNA only when it has already bound the drug. So adding tetracycline switches expression on. The way to keep them straight is that the name tells you what adding the drug does — Tet-On, add drug, expression on. To assemble either one you need three things: a plasmid with the TRE upstream of your gene, a source of the regulator, usually a stable line already expressing tTA or rtTA, and tetracycline or more usually doxycycline. In practice Tet-On is the common choice, because you add drug only when you want expression, whereas Tet-Off requires drug continuously just to hold the system off and induction means washing it out completely, which is slow and expensive over a long culture.',
    checklist: ['TRE = seven tet operator sequences, from E. coli, upstream of the GOI', 'TetR recognises the TRE; tetracycline binding releases it from DNA', 'Regulator is TetR fused to HSV VP16 activation domain, so binding activates', 'Tet-Off uses tTA = ordinary TetR + VP16', 'Tet-Off: drug present = low expression, drug absent = high', 'Tet-On uses rtTA = reverse TetR from random mutagenesis + VP16', 'Tet-On: drug present = high expression, drug absent = low', 'Mnemonic: the name says what ADDING the drug does', 'Only mechanistic difference: reverse TetR binds DNA only when drug-bound', 'Need: TRE plasmid, tTA/rtTA source, tetracycline or doxycycline', 'Tet-On preferred: Tet-Off needs continuous drug and washout to induce']
  }
},

{
  id: '2-23',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.23',
  enTitle: 'BacMam, and transient versus stable expression',
  cnTitle: 'BacMam，以及瞬时表达与稳定表达',
  slides: 'L3 s.40–41',
  coverage: 'full',
  coverageNote: 'Both tables are on the slides. Pairing BacMam with the transient/stable comparison in one node is deliberate — BacMam is a transient method, and the comparison table is what tells you when transient is the right category at all.',
  summary: {
    en: 'BacMam vectors are baculoviruses engineered to carry a mammalian promoter. They transduce mammalian cells efficiently across a wide host range and take inserts over 15 kbp, but do not replicate in mammalian cells, which makes them safe. The broader choice is transient versus stable: transient gets you material in under a week with high DNA requirement and volumes below 3 litres, while stable takes weeks to establish but then scales from 0.1 to 10,000 litres with minimal batch variability.',
    cn: 'BacMam 载体是改造成携带哺乳动物启动子的杆状病毒。它们能高效转导多种哺乳动物细胞、可容纳超过 15 kbp 的插入片段，而且不在哺乳动物细胞中复制，因此很安全。更宏观的选择是瞬时还是稳定：瞬时表达一周内就能拿到材料，但需要大量 DNA、体积在 3 升以下；稳定表达要花几周建系，但之后可以从 0.1 升放大到 10000 升，批次间差异极小。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.40', src: 'img/figures/L3_s40_1.webp' },
    { slide: 'L3 s.41', src: 'img/figures/L3_s41_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'BacMam 把杆状病毒**只当成一个递送工具**：病毒负责进哺乳动物细胞，蛋白由**哺乳动物的机器**来做——所以你拿到的是哺乳动物的修饰，不是昆虫的。\n\n' +
            '瞬时 vs 稳定的判据是：**这个蛋白你要做多少次**，而不是这一次要多少。',
  skipIt: 'HeLa / U2-OS / COS 这些细胞系清单不用背。**BacMam 在老师给第 3 讲做的 RECAP 里没有出现**（那里列的是 mammalian expression、Tet-On/Off、PiggyBac、retroviral vectors），所以它的优先级低于同一讲里那几项；但「瞬时 vs 稳定」这条取舍建议记牢，它贯穿整讲。',
  explain: [
    {
      q: 'BacMam 到底改了什么？为什么这一改就绕开了昆虫细胞的问题？',
      a: '**它只改了一件事：把病毒里驱动你基因的那个启动子，从昆虫用的换成哺乳动物用的。**\n\n' +
         '看清这一步带来的转变：\n\n' +
         '**普通杆状病毒表达**：病毒进**昆虫细胞**，蛋白由**昆虫细胞**制造 → 你拿到的是**昆虫的糖基化**。\n\n' +
         '**BacMam**：病毒进**哺乳动物细胞**，那里的极晚期病毒启动子根本不工作（哺乳动物细胞不认它），**但你换上的 CMV 之类的哺乳动物启动子工作得很好** → 蛋白由**哺乳动物的机器**制造 → **哺乳动物的修饰**。\n\n' +
         '**所以 BacMam 把病毒降级成了一个纯粹的快递员。**\n\n' +
         '你保留了杆状病毒的两个长处：**转导效率高**（对很多难转染的细胞系比脂质体好用得多），以及**装货能力极大**（超过 15 kbp，远超普通质粒转染能处理的）。\n\n' +
         '同时你**不再继承昆虫细胞的生化背景**。\n\n' +
         '**而且安全性也顺带解决了**：杆状病毒**不在哺乳动物细胞里复制**（第 2-17 节）。它进得去、把货送到、然后就没有下文了——这正是一个理想递送工具该有的性质。\n\n' +
         '**代价写在幻灯片上：**你还是得先在昆虫细胞里把病毒做出来。所以流程更长，而且你必须同时维持昆虫细胞和哺乳动物细胞两套培养。',
      takeaway: '只换了启动子，于是蛋白由哺乳动物细胞制造。病毒降级成快递员，长处保留、生化背景不继承。'
    },
    {
      q: '瞬时和稳定，到底该怎么选？',
      a: '**判据是「你要做多少次」，不是「这一次要多少」。**这是这张表最容易读错的地方。\n\n' +
         '把两边的成本结构摊开：\n\n' +
         '**瞬时表达** —— 前期投入**零**，一周内拿到材料。但**每一次都要付钱**：大量质粒 DNA、大量转染试剂，而且**批次间差异大**。体积上限约 3 升。\n\n' +
         '**稳定表达** —— 前期投入**几周**（要建细胞系）。但之后**每次运行都很便宜**：DNA 需求低、**批次差异极小**、体积可以从 0.1 升一路放到 **10000 升**。\n\n' +
         '**所以这不是「哪个更好」，是「成本放在前面还是摊在每一次」。**\n\n' +
         '**做一次，或者一次要做二十个不同的构建体去筛** → 瞬时。你根本没打算重复，前期投入永远收不回来。\n\n' +
         '**要做几百次、要求每批一样、要放大到工业规模** → 稳定。几周的投入摊到几百次上可以忽略，而「批次差异极小」这一条在生产上是硬要求。\n\n' +
         '**这条取舍轴你已经见过三次了**：酵母的整合型 vs ARS 型（第 2-15 节）、S2 建株 vs 杆状病毒感染（第 2-19 节）、现在是哺乳动物的稳定 vs 瞬时。**同一个问题，换了三次宿主。**',
      takeaway: '成本放在前面（稳定）还是摊在每一次（瞬时）。所以问「做多少次」，不是「这次要多少」。'
    }
  ],
  points: [
    { term: 'What BacMam is', en: 'A baculovirus engineered to express genes under a mammalian promoter rather than a viral insect promoter.', cn: '一种改造过的杆状病毒，用哺乳动物启动子而不是昆虫的病毒启动子来表达基因。' },
    { term: 'Safety', en: 'BacMam vectors do not replicate in mammalian cells, which is what makes them safe.', cn: 'BacMam 载体不在哺乳动物细胞中复制，这正是它安全的原因。' },
    { term: 'Host range', en: 'Ideal for transient expression across many cell types — HEK293, HeLa, U2-OS, COS and CHO.', cn: '适合在多种细胞类型中做瞬时表达——HEK293、HeLa、U2-OS、COS 和 CHO。' },
    { term: 'Other advantages', en: 'Low toxicity so high titres are possible, high transduction efficiency, wide host range, and very long inserts above 15 kbp.', cn: '毒性低所以能做到高滴度、转导效率高、宿主范围广，而且能容纳 15 kbp 以上的超长插入片段。' },
    { term: 'BacMam disadvantages', en: 'A longer procedure because you must first generate the baculovirus, large virus quantities are needed at large scale, and it requires insect cells.', cn: '流程更长，因为必须先制备杆状病毒；大规模时需要大量病毒；而且需要昆虫细胞。' },
    { term: 'Methodology', en: 'Identical to ordinary baculovirus expression — the same bacmid route, the same amplification.', cn: '与普通杆状病毒表达完全相同——同样的杆粒路线、同样的扩增过程。' },
    { term: 'Transient — timeline and duration', en: 'Under one week to material, but expression is short-term.', cn: '一周内就能拿到材料，但表达是短期的。' },
    { term: 'Stable — timeline and duration', en: 'Weeks, because a cell line has to be generated, but expression is then continuous.', cn: '需要几周，因为必须建立细胞系，但之后表达是持续的。' },
    { term: 'DNA and volume', en: 'Transient has a high DNA requirement and works below 3 litres. Stable has a low DNA requirement and spans 0.1 to 10,000 litres.', cn: '瞬时表达需要大量 DNA，适用于 3 升以下。稳定表达 DNA 需求低，覆盖 0.1 到 10000 升。' },
    { term: 'Batch variability and use', en: 'Transient variability can be high, suiting testing, screening and medium scale. Stable variability is minimal, suiting large-scale production.', cn: '瞬时表达批次间差异可能很大，适合测试、筛选和中等规模。稳定表达差异极小，适合大规模生产。' }
  ],
  beyondPoints: [
    { term: 'BacMam inverts the usual objection to baculovirus', en: 'Ordinary baculovirus expression makes protein in insect cells, so you get insect glycosylation. BacMam uses the virus purely as a delivery vehicle into mammalian cells, so the protein is made by mammalian machinery with mammalian modifications — you keep the virus\'s efficiency and its enormous cargo capacity without inheriting the insect cell\'s biochemistry.', cn: '普通杆状病毒表达是在昆虫细胞里造蛋白，所以得到的是昆虫型糖基化。BacMam 把病毒纯粹当作进入哺乳动物细胞的递送工具，蛋白由哺乳动物的机器合成、带哺乳动物的修饰——你保留了病毒的高效率和巨大载货能力，却不必继承昆虫细胞的生化特性。' },
    { term: 'The transient/stable table is really about where the cost sits', en: 'Transient front-loads nothing and pays per run, in DNA and in variability. Stable pays weeks up front and then runs cheaply and reproducibly at any scale. So the deciding question is how many times you will make this protein, not how much you need on any one occasion.', cn: '瞬时表达前期不花成本，但每一次运行都要付出代价——大量 DNA 和批次差异。稳定表达前期花几周，之后在任何规模上都便宜且可重复。所以真正的决定性问题是「这个蛋白你要做多少次」，而不是「某一次需要多少」。' }
  ],
  terms: [
    { en: 'BacMam', cn: 'BacMam 载体', def_en: 'A baculovirus carrying a mammalian promoter, used to transduce mammalian cells. It cannot replicate in them, so it is safe, and it accepts inserts over 15 kbp.', def_cn: '携带哺乳动物启动子的杆状病毒，用于转导哺乳动物细胞。它无法在其中复制，所以很安全，而且能容纳 15 kbp 以上的插入片段。' },
    { en: 'Transduction', cn: '转导', def_en: 'Virus-mediated delivery of genetic material into a cell, as opposed to transfection by chemical or physical means.', def_cn: '由病毒介导把遗传物质送进细胞，区别于用化学或物理方法进行的转染。' },
    { en: 'Transient expression', cn: '瞬时表达', def_en: 'Expression from non-integrated DNA, giving material in under a week but short-term and with potentially high batch variability.', def_cn: '由未整合的 DNA 进行的表达，一周内就能拿到材料，但持续时间短、批次间差异可能较大。' },
    { en: 'Stable expression', cn: '稳定表达', def_en: 'Expression from genome-integrated DNA. Weeks to establish, then continuous, low DNA requirement, minimal batch variability, and scalable to thousands of litres.', def_cn: '由整合进基因组的 DNA 进行的表达。建系需要数周，之后可持续进行，DNA 需求低、批次差异极小，可放大到数千升。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What makes BacMam vectors safe to use in mammalian cells?',
      q_cn: '是什么让 BacMam 载体在哺乳动物细胞中使用是安全的？',
      options: ['They are replication-competent but non-integrating', 'They do not replicate in mammalian cells', 'They are inactivated by serum', 'They only enter dividing cells'],
      answer: 1,
      optionRefs: { 3: '2-24' },
      why_en: 'A baculovirus can enter mammalian cells and, with a mammalian promoter, express there, but it cannot replicate in them. So it delivers the gene without establishing an infection.',
      why_cn: '杆状病毒可以进入哺乳动物细胞，并在带有哺乳动物启动子的情况下在其中表达，但它无法在其中复制。所以它只是递送基因，不会建立感染。' },
    { type: 'mcq',
      q_en: 'Which is an advantage of BacMam over standard mammalian transfection?',
      q_cn: '相对标准的哺乳动物转染，BacMam 的优势是什么？',
      options: ['A shorter time to first protein than transfecting a plasmid, since no virus stock has to be made first', 'Inserts above 15 kbp, delivered efficiently across a wide host range', 'It avoids insect cells entirely at every stage of the workflow', 'The delivered DNA integrates stably into the host genome'],
      answer: 1,
      optionRefs: { 3: '2-24' },
      why_en: 'The 120 kbp baculovirus genome has room for cargo that ordinary plasmids cannot carry. The disadvantages are the opposite: it takes longer because you must first generate the virus, and it does require insect cells.',
      why_cn: '120 kbp 的杆状病毒基因组能容纳普通质粒装不下的货物。缺点恰好相反：因为必须先制备病毒所以更慢，而且确实需要昆虫细胞。' },
    { type: 'mcq',
      q_en: 'Which combination correctly describes transient expression?',
      q_cn: '哪一组描述正确对应瞬时表达？',
      options: ['Under 1 week to product, low DNA requirement per litre, and scalable to 10,000 L bioreactors', 'Under 1 week, high DNA requirement, under 3 L, variability can be high', 'Weeks to establish, low DNA, minimal variability', 'Under 1 week, continuous expression, minimal variability'],
      answer: 1,
      optionNotes: {
        2: { en: 'Every item in this row belongs to the stable line: weeks to build, then cheap runs with little DNA and little batch-to-batch variation. The two columns are being swapped. Transient buys speed by paying at every run instead of once at the start.', cn: '这一行的每一项都属于稳定细胞系：前期花几周建系，之后每次运行都便宜，DNA 用量少、批次差异也小。这里是把表格的两列对调了。瞬时表达买到的是速度，代价是每跑一次付一次钱，而不是一次性付在开头。' }
      },
      why_en: 'Transient gets material fast but consumes a lot of DNA, is limited to a few litres, and can vary between batches. Continuous expression, low DNA and minimal variability all belong to stable lines.',
      why_cn: '瞬时表达出材料快，但消耗大量 DNA、体积限制在几升以内、批次间可能有差异。持续表达、低 DNA 需求和极小的批次差异都属于稳定细胞系。' },
    { type: 'short',
      q_en: 'What is the real question that decides between transient and stable expression?',
      q_cn: '真正决定选择瞬时还是稳定表达的问题是什么？',
      accept: ['how many times', 'how often', 'repeatedly', 'one-off', 'scale'],
      answer_en: 'How many times you will need to make this protein, rather than how much you need on any single occasion. Transient front-loads nothing and gets you material in under a week, but it pays on every run — a high DNA requirement, a volume ceiling of about three litres, and batch variability that can be high. A stable line costs weeks up front to generate, but then expresses continuously, needs little DNA, scales anywhere from a tenth of a litre to ten thousand litres, and gives minimal batch-to-batch variability. So for testing, screening or a one-off medium-scale prep, transient is right; for anything you will produce repeatedly or at genuine production scale, the up-front weeks pay for themselves.',
      answer_cn: '是「这个蛋白你要做多少次」，而不是「某一次需要多少」。瞬时表达前期不花成本，一周内就能拿到材料，但每一次运行都要付代价——DNA 需求大、体积上限约 3 升、批次间差异可能很大。稳定细胞系前期要花几周去建立，但之后能持续表达、DNA 需求很低、可以从 0.1 升放大到 10000 升，而且批次间差异极小。所以做测试、筛选或者一次性的中等规模制备，选瞬时；而任何需要反复生产、或者真正达到生产规模的情况，前期那几周都能赚回来。'
    }
  ],
  oral: {
    q_en: 'What is BacMam, and how do you decide between transient and stable expression?',
    q_cn: '什么是 BacMam？你怎么在瞬时表达和稳定表达之间做选择？',
    model_en: 'BacMam vectors are baculoviruses engineered to express genes under a mammalian promoter instead of a viral insect one. What makes them clever is that they invert the usual objection to baculovirus: normally you express in insect cells and get insect glycosylation, whereas BacMam uses the virus purely as a delivery vehicle into mammalian cells, so the protein is made by mammalian machinery with mammalian modifications. They do not replicate in mammalian cells, which is the safety argument, and they work across a wide range — HEK293, HeLa, U2-OS, COS, CHO. The advantages are low toxicity so high titres are possible, high transduction efficiency, wide host range, and very long inserts above fifteen kilobases, which a plasmid could not carry. The disadvantages are that the procedure is longer because you must generate the baculovirus first, large virus quantities are needed at scale, and it still requires insect cells to make. The methodology is identical to ordinary baculovirus expression. As for transient versus stable, the table compares them on six things. Transient gives material in under a week but is short-term, has a high DNA requirement, is limited to under three litres, and batch variability can be high — so it suits testing, screening and medium scale. Stable takes weeks because you must generate the cell line, but expression is then continuous, the DNA requirement is low, the volume range runs from a tenth of a litre to ten thousand, and variability is minimal — so it suits large-scale production. The way I would frame the decision is that the real question is not how much protein you need on one occasion, but how many times you will need to make it. Transient pays on every run; stable pays once, up front, and then runs cheaply and reproducibly at any scale.',
    checklist: ['BacMam = baculovirus carrying a mammalian promoter', 'Inverts the usual objection: mammalian machinery, mammalian modifications', 'Does not replicate in mammalian cells, hence safe', 'Wide host range: HEK293, HeLa, U2-OS, COS, CHO', 'Advantages: low toxicity, high transduction, inserts >15 kbp', 'Disadvantages: longer procedure, large virus quantities, needs insect cells', 'Transient: <1 week, short-term, high DNA, <3 L, variable', 'Stable: weeks to build, continuous, low DNA, 0.1-10,000 L, minimal variability', 'Transient for testing and screening; stable for production', 'The real question: how many times will you make this protein?']
  }
},

{
  id: '2-24',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.24',
  enTitle: 'Genome integration — PiggyBac and lentivirus',
  cnTitle: '基因组整合——PiggyBac 与慢病毒',
  slides: 'L3 s.42–43',
  coverage: 'full',
  coverageNote: 'Both advantage/disadvantage tables are on the slides. Why lentivirus can transduce non-dividing cells is not, and it is both the reason it dominates gene therapy and the reason its safety profile matters.',
  summary: {
    en: 'Two routes to permanent integration. PiggyBac is a transposon: a transposase recognises inverted terminal repeats and inserts the cargo at TTAA sites, taking up to 100 kb, though commercial use needs a licence. Lentivirus is HIV-based, reverse-transcribing its RNA into DNA which then integrates. Its distinguishing feature is that it transduces non-dividing cells, which is why it dominates gene therapy — but random integration near a proto-oncogene is a genuine cancer risk, so BSL-2 is required.',
    cn: '实现永久整合的两条路线。PiggyBac 是转座子：转座酶识别反向末端重复序列，把货物插入 TTAA 位点，最多可带 100 kb，但商业使用需要许可。慢病毒基于 HIV，把 RNA 逆转录成 DNA 后整合。它的独特之处是能转导不分裂的细胞，这正是它主导基因治疗的原因——但随机整合到原癌基因附近是真实的致癌风险，所以需要 BSL-2。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L3 s.42', src: 'img/figures/L3_s42_1.webp' },
    { slide: 'L3 s.42', src: 'img/figures/L3_s42_2.webp' },
    { slide: 'L3 s.43', src: 'img/figures/L3_s43_1.webp' },
    { slide: 'L3 s.43', src: 'img/figures/L3_s43_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '慢病毒的独门本事是**能转导不分裂的细胞**（神经元、肝细胞、静息淋巴细胞）——这就是它主导基因治疗的原因。\n\n' +
            '代价也是真的：**整合位点随机**，落在原癌基因附近可以致癌，所以需要 BSL-2。',
  skipIt: 'PiggyBac 商业使用要许可这一条、以及慢病毒那一长串优点清单，不必逐条背。老师在第 4 讲开头给第 3 讲做 RECAP 时写了 **PiggyBac system** 和 **Retroviral vectors**——**两个都被点名了**，要能讲各自的机制和风险。',
  explain: [
    {
      q: '为什么普通逆转录病毒必须等细胞分裂，而慢病毒不用？',
      a: '**因为它们进细胞核的方式不一样——一个要等门开，一个自己有钥匙。**\n\n' +
         '**普通的 γ-逆转录病毒**（比如 MLV）：它把 RNA 逆转录成 DNA 之后，这段前病毒 DNA **必须进到细胞核里**才能整合。但它没有主动穿过核膜的能力。\n\n' +
         '**所以它只能等有丝分裂**——等到细胞分裂时**核膜解体**，染色质暴露出来，它才有机会接触到。\n\n' +
         '**结果是：不分裂的细胞，它完全没辙。**\n\n' +
         '**慢病毒不一样。**它的**前整合复合物（pre-integration complex）带有核定位信号（NLS）**，可以**主动通过核孔进入一个完整的细胞核**。不需要等核膜解体。\n\n' +
         '**这一条差别的后果极大：**神经元、肝细胞、静息的淋巴细胞——这些细胞要么根本不分裂，要么分裂得极慢，**而它们恰恰是基因治疗最想改造的那些细胞**。\n\n' +
         '**这就是慢病毒成为基因治疗主力的原因，包括 CAR-T**（T 细胞在改造时通常处于不怎么分裂的状态）。\n\n' +
         '**记忆钩子：核膜是那道门。γ-逆转录病毒要等门被拆掉，慢病毒自带钥匙。**',
      takeaway: '前整合复合物带核定位信号，能过核孔。所以不用等核膜解体，不分裂的细胞也能转导。'
    },
    {
      q: '「整合位点随机」的风险有多真实？',
      a: '**不是理论风险，是已经发生过的事。**\n\n' +
         '风险链条是这样的：\n\n' +
         '整合位置是随机的 → 有一定概率**落在某个原癌基因（proto-oncogene）附近** → 而载体两端的 **LTR 还残留启动子活性** → 这个残留活性**把旁边的原癌基因激活了** → 细胞开始不受控地增殖。\n\n' +
         '**早期的 X-SCID 基因治疗试验里，确实出现了白血病病例。**那不是假设，是让整个领域停下来重新设计载体的真实事件。\n\n' +
         '**所以有两个后果，都要记住：**\n\n' +
         '**操作上**：慢病毒必须在 **BSL-2** 实验室里做。这跟第 2-17 节的杆状病毒形成鲜明对比——那个只感染昆虫，普通细胞房就行。**「用病毒当工具，先问它能不能感染你」，这里的答案是能。**\n\n' +
         '**设计上**：现代载体用**自失活型 LTR（SIN LTR）**——把 LTR 里的启动子/增强子元件删掉，让它在整合之后**不再有转录活性**，从源头切断「激活邻居」这条路。\n\n' +
         '幻灯片列的另外两个风险也值得一提：**重组出有复制能力的病毒**（所以包装质粒要拆成好几个、把病毒的基因分散开），以及 **LTR 造成的转录干扰**。\n\n' +
         '**这一节是整门课里少见的、代价不是钱和时间而是安全的地方。**',
      takeaway: '随机整合 + LTR 残留启动子活性 → 激活原癌基因。X-SCID 试验出过白血病，所以有 SIN LTR 和 BSL-2。'
    },
    {
      q: 'PiggyBac 和慢病毒都做整合，怎么选？',
      a: '**看你要转的是什么细胞，以及你怕不怕麻烦。**\n\n' +
         '**PiggyBac 是一个转座子系统**：转座酶识别载体两端的**反向末端重复（ITR）**，把中间的货物**插到基因组的 TTAA 位点上**。\n\n' +
         '**它的长处：**\n\n' +
         '**装货量极大（最多 100 kb）**，比慢病毒能带的多得多；\n\n' +
         '**一次转染可以放进多个载体**；\n\n' +
         '**不用做病毒**——只是转染质粒，没有病毒制备、没有 BSL-2。\n\n' +
         '**它的短处：**\n\n' +
         '**很难转进原代细胞**——而原代细胞恰恰是基因治疗和很多研究最关心的对象。因为它依赖普通转染，而原代细胞普遍难转染。\n\n' +
         '**要靠抗生素筛选**才能拿到稳定群体，所以慢。\n\n' +
         '**商业使用要买许可。**\n\n' +
         '**所以分工大致是：**\n\n' +
         '**做细胞系、要放很大的货、不想碰病毒** → PiggyBac。\n\n' +
         '**要转原代细胞或不分裂的细胞、要做治疗** → 慢病毒，接受 BSL-2 和安全设计的负担。\n\n' +
         '**注意 PiggyBac 的短处正好是慢病毒的长处**，反过来也一样。它们不是竞品，是覆盖不同场合的两个工具。',
      takeaway: 'PiggyBac 装得多、不用做病毒，但转不动原代细胞。慢病毒能转原代和不分裂细胞，代价是 BSL-2。'
    }
  ],
  points: [
    { term: 'PiggyBac is a transposon', en: 'A transposable element — a mobile genetic element that can change its position within a genome.', cn: '一种转座元件——能在基因组内改变自身位置的可移动遗传元件。' },
    { term: 'How PiggyBac inserts', en: 'A transposase incorporates the DNA into the genome, recognising transposon-specific inverted terminal repeats (ITRs) and inserting at TTAA chromosomal sites.', cn: '转座酶把 DNA 整合进基因组，它识别转座子特异的反向末端重复序列（ITR），并插入到染色体的 TTAA 位点。' },
    { term: 'PiggyBac advantages', en: 'Stable genome integration, multiple vectors or inserts in a single transfection, and inserts up to 100 kb.', cn: '稳定的基因组整合、一次转染可导入多个载体或插入片段，插入片段最大可达 100 kb。' },
    { term: 'PiggyBac disadvantages', en: 'Difficult to transfect into primary cells, antibiotic selection is needed before large-scale expression, and commercial use requires a licence.', cn: '难以转染原代细胞、大规模表达之前需要抗生素筛选，而且商业使用需要许可。' },
    { term: 'Lentivirus basis', en: 'Based on HIV, a positive-sense single-stranded RNA virus.', cn: '基于 HIV，一种正义单链 RNA 病毒。' },
    { term: 'Lentivirus mechanism', en: 'The RNA is reverse-transcribed into DNA, which is then integrated into the host genome.', cn: 'RNA 被逆转录成 DNA，然后整合进宿主基因组。' },
    { term: 'Lentivirus workflow', en: 'Clone your expression plasmid, co-transfect several plasmids into a packaging cell line, harvest the recombinant viruses, then transduce the host cell.', cn: '克隆表达质粒，把几个质粒共转染进包装细胞系，收获重组病毒，然后转导目标细胞。' },
    { term: 'Lentivirus advantages', en: 'Long-term expression via stable integration, infects both dividing and non-dividing cells, wide cell tropism, lacks immunogenic viral proteins after transduction which is good for therapy, delivers complex elements including intron-containing sequences, and vectors are relatively easy to manipulate and produce.', cn: '通过稳定整合实现长期表达、能感染分裂和不分裂的细胞、细胞嗜性广、转导后不残留免疫原性病毒蛋白（对治疗有利）、能递送含内含子等复杂元件，而且载体相对容易操作和生产。' },
    { term: 'Lentivirus disadvantages', en: 'Safety — BSL-2 laboratories are required. Potential recombination into replication-competent lentivirus. Activation of proto-oncogenes by residual LTR promoter activity. And transcriptional interference or suppression by the LTRs.', cn: '安全性——需要 BSL-2 实验室。可能重组产生具有复制能力的慢病毒。LTR 残余启动子活性可能激活原癌基因。以及 LTR 造成的转录干扰或抑制。' }
  ],
  beyondPoints: [
    { term: 'Why ordinary retroviruses need dividing cells', en: 'A gamma-retrovirus such as MLV must wait for mitosis and the breakdown of the nuclear envelope before its proviral DNA can reach the chromatin. That restricts it to cells that are actively dividing.', cn: '像 MLV 这样的 γ-逆转录病毒必须等到有丝分裂、核膜解体，前病毒 DNA 才能接触到染色质。这就把它限制在正在分裂的细胞上。' },
    { term: 'Why lentivirus does not', en: 'The lentiviral pre-integration complex carries nuclear localisation signals, so it can travel through nuclear pores into an intact nucleus. That is what allows transduction of neurons, hepatocytes and resting lymphocytes, and it is why lentivirus became the mainstay of gene therapy including CAR-T.', cn: '慢病毒的前整合复合物带有核定位信号，能通过核孔进入完整的细胞核。这正是它能转导神经元、肝细胞和静息淋巴细胞的原因，也是慢病毒成为基因治疗（包括 CAR-T）主力的原因。' },
    { term: 'The safety cost is not hypothetical', en: 'Integration is random. If the provirus lands near a proto-oncogene and residual LTR promoter activity activates it, the result can be cancer — early X-SCID gene therapy trials produced leukaemia cases. Hence BSL-2, and hence modern vectors are built with self-inactivating (SIN) LTRs.', cn: '整合是随机的。如果前病毒落在原癌基因附近，而 LTR 的残余启动子活性把它激活，结果可能是癌症——早年的 X-SCID 基因治疗试验就出现过白血病病例。因此需要 BSL-2，也因此现代载体都做了自失活（SIN）LTR 改造。' }
  ],
  terms: [
    { en: 'Transposase', cn: '转座酶', def_en: 'The enzyme that excises a transposon and inserts it elsewhere. In PiggyBac it recognises inverted terminal repeats and targets TTAA sequences.', def_cn: '把转座子切下并插入到别处的酶。在 PiggyBac 中它识别反向末端重复序列，并靶向 TTAA 序列。' },
    { en: 'ITR (inverted terminal repeat)', cn: '反向末端重复序列', def_en: 'The repeated sequences flanking a transposon that the transposase recognises, defining what gets mobilised.', def_cn: '位于转座子两侧、被转座酶识别的重复序列，界定了哪一段会被转移。' },
    { en: 'Pre-integration complex', cn: '前整合复合物', def_en: 'The viral DNA plus associated proteins before genome integration. In lentivirus it carries nuclear localisation signals, allowing entry into an intact nucleus.', def_cn: '整合进基因组之前的病毒 DNA 及其结合蛋白。在慢病毒中它带有核定位信号，因而能进入完整的细胞核。' },
    { en: 'SIN LTR (self-inactivating)', cn: '自失活 LTR', def_en: 'A modified long terminal repeat with its promoter activity deleted, reducing the risk of activating neighbouring proto-oncogenes after integration.', def_cn: '删除了启动子活性的改造版长末端重复序列，降低整合后激活邻近原癌基因的风险。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can lentivirus transduce non-dividing cells when a gamma-retrovirus cannot?',
      q_cn: '为什么慢病毒能转导不分裂的细胞，而 γ-逆转录病毒不能？',
      options: ['It completes its replication cycle faster than a gamma-retrovirus', 'Its pre-integration complex enters an intact nucleus through nuclear pores', 'It does not need to integrate, so it never requires access to chromatin and stays episomal', 'It carries a DNA genome, so no reverse transcription is needed'],
      answer: 1,
      optionNotes: {
        2: { en: 'Lentivirus integrates just as any retrovirus does — random integration is precisely its main safety problem, which the next question is about. Nuclear entry and integration are two separate steps, and only the first one differs from a gamma-retrovirus.', cn: '慢病毒和所有逆转录病毒一样是要整合的，随机整合恰恰是它最主要的安全隐患，下一题问的就是这件事。进核和整合是两个独立的步骤，跟 gamma-retrovirus 不同的只有前面那一步。' }
      },
      why_en: 'A gamma-retrovirus must wait for mitosis to break down the nuclear envelope before its DNA can reach chromatin. The lentiviral complex enters an intact nucleus actively, which is why neurons, hepatocytes and resting lymphocytes can be targeted.',
      why_cn: 'γ-逆转录病毒必须等有丝分裂让核膜解体，它的 DNA 才能接触染色质。慢病毒的复合物能主动进入完整的细胞核，这就是神经元、肝细胞和静息淋巴细胞也能被靶向的原因。' },
    { type: 'mcq',
      q_en: 'Where does the PiggyBac transposase insert its cargo?',
      q_cn: 'PiggyBac 转座酶把货物插入到哪里？',
      options: ['At random double-strand breaks made elsewhere in the genome', 'At TTAA tetranucleotide sites anywhere in the chromosome', 'At centromeric repeat sequences on each chromosome', 'At the LTR repeat sequences found in the host genome'],
      answer: 1,
      optionNotes: {
        3: { en: 'LTRs are the repeats at the ends of a retroviral or lentiviral provirus; the transposon equivalent is the ITR. This mixes up the two systems in this node. And in either case the repeats sit on the vector, marking what gets mobilised — they are never the target site in the chromosome.', cn: 'LTR 是逆转录病毒或慢病毒前病毒两端的重复序列，转座子里对应的是 ITR，这里把这一节的两个系统混在一起了。而且无论哪一种，这些重复序列都长在载体上，标记的是「哪一段会被搬运」，从来不是染色体上的靶位点。' }
      },
      why_en: 'The transposase recognises the ITRs that flank the cargo and inserts at TTAA sequences in the chromosome. The system accepts inserts up to 100 kb, but commercial use requires a licence.',
      why_cn: '转座酶识别货物两侧的 ITR，并插入到染色体上的 TTAA 序列。这个系统能容纳最大 100 kb 的插入片段，但商业使用需要许可。' },
    { type: 'mcq',
      q_en: 'What is the principal safety concern with lentiviral vectors?',
      q_cn: '慢病毒载体主要的安全隐患是什么？',
      options: ['Acute cytotoxicity in the transduced cells within a few days', 'Random integration near a proto-oncogene, which can then be switched on', 'They cannot be produced at the scale a clinical dose requires', 'They provoke a strong innate immune response in the recipient, so a second dose is rapidly cleared'],
      answer: 1,
      why_en: 'Integration site is not controlled. Early X-SCID gene therapy trials produced leukaemia cases by this route, which is why BSL-2 is required and why modern vectors use self-inactivating LTRs.',
      why_cn: '整合位点是不受控的。早年的 X-SCID 基因治疗试验就是通过这条途径出现了白血病病例，这也是为什么需要 BSL-2、以及现代载体使用自失活 LTR 的原因。' },
    { type: 'short',
      q_en: 'Why did lentivirus become the mainstay of gene therapy, and what is the price?',
      q_cn: '为什么慢病毒成了基因治疗的主力？代价是什么？',
      accept: ['non-dividing', 'nuclear localisation', 'integration', 'oncogene', 'BSL-2'],
      answer_en: 'Because it transduces non-dividing cells, which no ordinary gamma-retrovirus can. A retrovirus like MLV must wait for mitosis and nuclear envelope breakdown before its proviral DNA reaches the chromatin, so it is confined to dividing cells. The lentiviral pre-integration complex carries nuclear localisation signals and travels through nuclear pores into an intact nucleus, so neurons, hepatocytes and resting lymphocytes become accessible — which is exactly what therapies such as CAR-T need. It also gives long-term expression through stable integration, has wide tropism, and leaves no immunogenic viral proteins behind. The price is safety. Integration is random, and if the provirus lands near a proto-oncogene which residual LTR promoter activity then activates, the result can be cancer; early X-SCID trials produced leukaemia cases this way. Hence BSL-2 containment, the risk of recombination into replication-competent virus, and the modern use of self-inactivating LTRs.',
      answer_cn: '因为它能转导不分裂的细胞，这是普通 γ-逆转录病毒做不到的。像 MLV 这样的逆转录病毒必须等有丝分裂、核膜解体，前病毒 DNA 才能接触染色质，所以只能作用于分裂中的细胞。慢病毒的前整合复合物带有核定位信号，能通过核孔进入完整的细胞核，于是神经元、肝细胞、静息淋巴细胞都变得可及——而这正是 CAR-T 这类治疗所需要的。它还能通过稳定整合实现长期表达、嗜性广，而且转导后不残留免疫原性的病毒蛋白。代价是安全性。整合是随机的，如果前病毒落在原癌基因附近、又被 LTR 的残余启动子活性激活，结果可能是癌症；早年的 X-SCID 试验就是这样出现了白血病病例。因此需要 BSL-2 防护，存在重组产生可复制病毒的风险，现代载体也因此使用自失活 LTR。'
    }
  ],
  oral: {
    q_en: 'How would you get permanent, integrated expression into mammalian cells?',
    q_cn: '你会怎么在哺乳动物细胞里实现永久的、整合型的表达？',
    model_en: 'There are two routes on the slides. The first is PiggyBac, a transposon system — a transposable element being a mobile genetic element that can change its position within a genome. A transposase recognises the inverted terminal repeats flanking your cargo and inserts it at TTAA sites in the chromosome. Its advantages are stable integration, the ability to deliver multiple vectors or inserts in one transfection, and a very large capacity, inserts up to a hundred kilobases. Against that, it transfects poorly into primary cells, you still need antibiotic selection before large-scale expression, and commercial use requires a licence. The second is lentivirus, based on HIV, a positive-sense single-stranded RNA virus. Its RNA is reverse-transcribed into DNA and integrated into the host genome. The workflow is to clone your expression plasmid, co-transfect several plasmids into a packaging cell line, harvest the recombinant virus, and transduce your target. The defining advantage, and the reason it dominates gene therapy, is that it infects non-dividing cells. A gamma-retrovirus like MLV has to wait for mitosis to break down the nuclear envelope before the proviral DNA can reach the chromatin, so it only works on dividing cells; the lentiviral pre-integration complex carries nuclear localisation signals and travels through the nuclear pore into an intact nucleus, so neurons, hepatocytes and resting lymphocytes are all accessible. That is what CAR-T therapy depends on. It also gives long-term expression, wide tropism, and leaves no immunogenic viral proteins behind after transduction. The price is safety, and it is not hypothetical. Integration is random, and if the provirus lands near a proto-oncogene that residual LTR promoter activity then activates, you can cause cancer — early X-SCID gene therapy trials produced leukaemia cases exactly this way. Hence BSL-2 containment, the concern about recombination into replication-competent lentivirus, and the fact that modern vectors are built with self-inactivating LTRs.',
    checklist: ['Two routes: PiggyBac transposon and lentivirus', 'PiggyBac: transposase, ITRs, inserts at TTAA sites', 'PiggyBac pros: stable, multiple inserts at once, up to 100 kb', 'PiggyBac cons: poor in primary cells, needs selection, licence for commercial use', 'Lentivirus: HIV-based, ssRNA+, reverse-transcribed then integrated', 'Workflow: clone, co-transfect packaging line, harvest, transduce', 'Key advantage: transduces NON-dividing cells', 'Why: pre-integration complex has NLS, enters intact nucleus', 'Gamma-retrovirus must wait for mitosis and nuclear envelope breakdown', 'Enables neurons, hepatocytes, resting lymphocytes; basis of CAR-T', 'Price: random integration near proto-oncogene, activated by residual LTR', 'X-SCID trials caused leukaemia; hence BSL-2 and self-inactivating LTRs']
  }
},

{
  id: '2-25',
  chapter: 2,
  lecture: 'Lecture 3',
  section: '2.25',
  enTitle: 'N-linked glycosylation',
  cnTitle: 'N-连接糖基化',
  slides: 'L3 s.44',
  coverage: 'full',
  coverageNote: 'The consensus sequence, the host differences and the research tools are on the slide. The detail that X cannot be proline is flagged separately because it is a favourite quiz item and is easy to omit when reciting the consensus.',
  summary: {
    en: 'N-linked glycosylation occurs at the consensus Asn-X-Ser/Thr, where X can be any residue except proline. It can be critical for folding and physiological function, as in erythropoietin. E. coli performs none at all, and the pattern differs between every other host, which is why therapeutic proteins need human-like glycosylation and why engineered hosts carrying humanised glycosyltransferases exist. As research tools, lectins purify glycoproteins and endoglycosidases remove the sugars.',
    cn: 'N-连接糖基化发生在共有序列 Asn-X-Ser/Thr 上，其中 X 可以是除脯氨酸以外的任何残基。它可能对折叠和生理功能至关重要，促红细胞生成素就是例子。大肠杆菌完全不做，而其他每种宿主的糖型都不一样，这就是为什么治疗性蛋白需要类人糖基化、以及为什么存在携带人源化糖基转移酶的改造宿主。作为研究工具，凝集素用于纯化糖蛋白，内切糖苷酶用于去除糖链。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '共有序列是 **Asn-X-Ser/Thr**，而 **X 可以是任何残基，除了脯氨酸**——那个例外最常被漏掉。\n\n' +
            '另外记住：**有这个序列只说明「可以被糖基化」，不等于「一定被糖基化」。**',
  skipIt: '这一节在老师给第 3 讲做的 RECAP 里**没有出现**（那里列的是各个表达系统、Tet、PiggyBac、逆转录病毒）。但**不建议跳过**——这是我的判断：糖基化是第 2-3 节整条决策链的第一环，也是第 1-2-2 节 EPO 那个案例的核心，第 3 讲的每一个宿主选择都绕着它转。',
  explain: [
    {
      q: 'Asn-X-Ser/Thr 里的 X 为什么不能是脯氨酸？',
      a: '**因为脯氨酸会把主链的形状锁死，而糖基转移酶需要那一段主链能摆出特定的姿势。**\n\n' +
         '回到第 1-2-5 节讲 2P 稳定化时说过的那件事：**脯氨酸的侧链绕回主链形成一个环，所以主链在那个位置转不动。**\n\n' +
         '糖基转移酶识别这段序列时，需要它折成一个特定的转角构象。脯氨酸卡在中间，那个构象摆不出来，**酶就认不出这是一个糖基化位点**。\n\n' +
         '**所以这个例外不是随便规定的，它跟你已经学过的脯氨酸的性质是同一件事。**\n\n' +
         '**为什么要特别提醒：因为这一条最容易在背诵时被漏掉。**「Asn-X-Ser/Thr」念起来很顺，「X 除了 Pro」是附加条款，一紧张就没了。而它恰恰是很容易出的一个考点。\n\n' +
         '**顺带一个实用推论：**如果你想在一个蛋白上**人为造出**一个糖基化位点（像第 1-2-2 节 Darbepoetin 那样），你不但要凑出 Asn-X-Ser/Thr，**还要确认中间那个位置不是 Pro**；反过来，如果你想**去掉**一个糖基化位点，**把 X 换成 Pro 就是一个办法**——不用动 Asn 本身。',
      takeaway: 'Pro 让主链转不动，酶要的构象摆不出来。同一个性质在 2P 稳定化那里是优点，在这里是禁忌。'
    },
    {
      q: '「有这个序列」和「真的被糖基化」为什么不是一回事？',
      a: '**因为共有序列告诉你「哪里可以」，不告诉你「哪里真的发生了」。**\n\n' +
         '一个位点要真的被修饰，还得满足一个序列本身不包含的条件：**在折叠过程中，那个位点得让酶够得着。**\n\n' +
         '糖基化是**共翻译或翻译后**发生的。如果那段序列在蛋白折叠时很快被埋进内部、或者被别的结构挡住，糖基转移酶就够不到它，**那个位点就是「存在但沉默」的**。\n\n' +
         '**这解释了一个重要现象：为什么同一条序列在不同宿主里的糖基化模式会不一样。**\n\n' +
         '序列是同一条，但不同宿主的折叠速度、伴侣蛋白、酶的丰度都不同，**结果哪些位点来得及被修饰就不同**。这不只是「糖的种类不同」（第 2-16 节讲的高甘露糖 vs 复杂型），**还包括「哪些位点被修饰了」也不同**。\n\n' +
         '**实用后果：你不能靠看序列来预测糖基化，只能测。**质谱是标准手段；而幻灯片提到的**内切糖苷酶（endoglycosidase）**给了你一个更朴素的办法——**把糖切掉，看蛋白在胶上跑的位置有没有变**，变了就说明原来带着糖。同时也能顺便测试糖到底贡献了什么功能。',
      takeaway: '序列说的是「可以」，能不能被修饰还看折叠时够不够得着。所以同一条序列在不同宿主上模式不同。'
    },
    {
      q: '凝集素（lectin）是什么？为什么它能用来纯化糖蛋白？',
      trace: {
        what: '**一类能结合糖的蛋白**。它们不是酶——**不切糖，只是抓住糖**，而且各自认不同的糖结构。',
        from: '它们在自然界里广泛存在（植物种子里特别多），本职工作跟识别细胞表面的糖有关。人类只是发现了「能特异结合某种糖」这个性质好用。',
        to: '**用途一：纯化。**把凝集素固定在树脂上做成柱子，糖蛋白流过时被抓住，不带糖的流走。这是**亲和层析**的一种（第 2-38 节会正式讲），只不过抓手认的不是标签而是糖。\n\n**用途二：诊断。**既然不同的凝集素认不同的糖结构，那么**用一组凝集素去测一个蛋白，就能反推它带的是哪一类糖**——这正好用来检查「我的宿主给它加的糖对不对」。',
        family: '跟它对照的是**内切糖苷酶（endoglycosidase）**：凝集素**抓住**糖，糖苷酶**切掉**糖。一个用来分离和检测，一个用来做减法实验（去掉糖，看还剩什么功能）。'
      },
      takeaway: '凝集素只抓糖不切糖，所以能做亲和纯化和糖型检测。糖苷酶则相反，是用来做减法的。'
    },
    {
      q: '「人源化糖基化」的改造宿主，改的到底是什么？',
      a: '**改的是宿主自己的糖基化通路，而不是你的蛋白。**\n\n' +
         '这一点值得说清楚，因为它跟前面所有的改造都不同方向：\n\n' +
         '**第 1-2-2 节的 Darbepoetin** —— 改的是**蛋白的序列**，造出更多糖基化位点，让宿主多挂几条糖。**宿主没动。**\n\n' +
         '**这里的糖基化人源化宿主** —— **蛋白一个字母不改**，改的是**宿主体内那一整套糖基转移酶**：把酵母自己的那套（做高甘露糖的）敲掉，换上人的那套（做复杂型的）。\n\n' +
         '**于是同一个基因放进去，出来的糖型不一样了。**\n\n' +
         '**这是一件工程量很大的事**——糖基化通路涉及很多个酶，按顺序作用，改一个不够，要整条改。所以它是一项专门的工程，不是酵母的默认状态。\n\n' +
         '**但它的意义正好戳在第 2-1 节那条曲线上：**\n\n' +
         '如果一个便宜快速的宿主（酵母）能做出人源的糖，**那条「修饰越好、越慢越贵」的曲线就被绕开了一段**。第 2-1 节说那条曲线是物理的、不是没优化好——**而这正是唯一真正的破解方向：不是找一个又快又便宜又有修饰的天然宿主，而是给便宜的宿主装上修饰能力。**',
      takeaway: 'Darbepoetin 改蛋白让宿主多挂糖；糖基化人源化宿主不动蛋白，改的是宿主整条通路。'
    }
  ],
  points: [
    { term: 'Consensus sequence', en: 'Asn-X-Ser/Thr — asparagine, then any residue, then serine or threonine.', cn: 'Asn-X-Ser/Thr——天冬酰胺，然后任意残基，然后丝氨酸或苏氨酸。' },
    { term: 'Functional importance', en: 'Can be critical for folding and for physiological function — erythropoietin is the standard example.', cn: '可能对折叠和生理功能至关重要——促红细胞生成素是标准例子。' },
    { term: 'Not in E. coli', en: 'There is no N-glycosylation in E. coli at all.', cn: '大肠杆菌完全不进行 N-糖基化。' },
    { term: 'Host-dependent patterns', en: 'The glycosylation pattern differs among different expression hosts — this is why the host choice is not neutral for a glycoprotein.', cn: '不同表达宿主的糖基化模式各不相同——这就是为什么对糖蛋白来说宿主选择不是中性的。' },
    { term: 'Therapeutic requirement', en: 'Therapeutic proteins require human-like glycosylation.', cn: '治疗性蛋白需要类人的糖基化。' },
    { term: 'Engineered hosts', en: 'Hosts carrying humanised glycosyltransferases exist, which is how yeast and other systems are rescued for therapeutic use.', cn: '存在携带人源化糖基转移酶的改造宿主，酵母等系统正是靠这个才能用于治疗性蛋白。' },
    { term: 'Research tool — lectins', en: 'Purification of glycosylated proteins using lectins, which are carbohydrate-binding proteins.', cn: '用凝集素（碳水化合物结合蛋白）纯化糖基化的蛋白。' },
    { term: 'Research tool — endoglycosidases', en: 'Treatment with endoglycosidases removes the glycans, letting you test what they contribute.', cn: '用内切糖苷酶处理可以去掉糖链，从而检验它们的贡献。' }
  ],
  beyondPoints: [
    { term: 'X cannot be proline', en: 'The consensus is written Asn-X-Ser/Thr, and X can be any amino acid except proline. A proline at that position disrupts the backbone conformation the glycosyltransferase requires. This exception is a frequent quiz item and is easy to leave out when reciting the consensus from memory.', cn: '共有序列写作 Asn-X-Ser/Thr，其中 X 可以是除脯氨酸以外的任何氨基酸。该位置上的脯氨酸会破坏糖基转移酶所需的主链构象。这个例外经常被拿来出小测验，而凭记忆背共有序列时又很容易漏掉。' },
    { term: 'A sequon is not a guarantee', en: 'The consensus tells you where glycosylation can occur, not where it does. Whether a given site is actually modified depends on its accessibility during folding, which is part of why patterns differ between hosts even when the sequence is identical.', cn: '共有序列告诉你糖基化可能发生在哪里，而不是实际发生在哪里。某个位点是否真的被修饰取决于它在折叠过程中的可及性，这也是为什么即使序列相同，不同宿主的糖型仍然不一样。' }
  ],
  terms: [
    { en: 'Sequon', cn: '糖基化共有序列', def_en: 'The Asn-X-Ser/Thr motif marking a potential N-glycosylation site, where X is any residue except proline.', def_cn: '标记潜在 N-糖基化位点的 Asn-X-Ser/Thr 基序，其中 X 是除脯氨酸以外的任何残基。' },
    { en: 'Lectin', cn: '凝集素', def_en: 'A carbohydrate-binding protein used to purify glycoproteins by affinity chromatography, typically eluted with a competing monosaccharide.', def_cn: '一种碳水化合物结合蛋白，用于亲和层析纯化糖蛋白，通常用竞争性的单糖洗脱。' },
    { en: 'Endoglycosidase', cn: '内切糖苷酶', def_en: 'An enzyme that cleaves glycans from a glycoprotein, used to test experimentally what the sugars contribute to folding, activity or stability.', def_cn: '把糖链从糖蛋白上切下来的酶，用于实验检验糖链对折叠、活性或稳定性的贡献。' },
    { en: 'Humanised glycosylation', cn: '人源化糖基化', def_en: 'Engineering a non-human host — typically yeast — by removing its own glycosyltransferases and installing human ones, so the glycans resemble human complex type.', def_cn: '改造非人源宿主（通常是酵母），去掉它自身的糖基转移酶并装上人的，使糖链接近人类的复杂型。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the N-glycosylation consensus sequence?',
      q_cn: 'N-糖基化的共有序列是什么？',
      options: ['Ser-X-Asn/Thr, where X is any residue except proline', 'Asn-X-Ser/Thr, where X is any residue except proline', 'Asn-Pro-Ser/Thr, with proline fixed at the middle position', 'Thr-X-Asn, where X is any residue except proline'],
      answer: 1,
      optionNotes: {
        0: { en: 'This is the sequon read backwards. The sugar is attached to the nitrogen of an asparagine side chain — that is what N-linked means — so Asn has to come first. Ser or Thr sits third and only marks the site; it never carries the glycan.', cn: '这是把 sequon 前后颠倒了。糖是接在 asparagine 侧链的氮上的，这正是 N-linked 的字面含义，所以 Asn 必须排在第一位。Ser 或 Thr 在第三位，只起标记位点的作用，它本身不带糖链。' },
        2: { en: 'Proline is the single residue that cannot occupy X. This option takes the one forbidden residue and writes it into the variable position, turning a working sequon into a dead one — proline rigidifies the backbone into a conformation the glycosyltransferase cannot use.', cn: 'proline 恰恰是 X 位上唯一不能出现的残基。这个选项把唯一被禁止的残基写进了可变位置，等于把一个能用的 sequon 变成了废的：proline 会把主链固定成糖基转移酶用不了的构象。' }
      },
      why_en: 'Asparagine, then any residue except proline, then serine or threonine. Proline at the X position disrupts the backbone conformation the glycosyltransferase needs.',
      why_cn: '天冬酰胺，然后是除脯氨酸以外的任意残基，然后是丝氨酸或苏氨酸。X 位上的脯氨酸会破坏糖基转移酶所需的主链构象。' },
    { type: 'mcq',
      q_en: 'Why can an identical protein sequence carry different glycans in different hosts?',
      q_cn: '为什么完全相同的蛋白序列在不同宿主中会带有不同的糖链？',
      options: ['The consensus sequon itself differs from one host to the next, so a site read in yeast is not a site in insect cells', 'Each host builds its own glycan structures on the same shared sequon', 'Only mammalian cells recognise the consensus sequon at all', 'Glycans are attached at random positions along the chain'],
      answer: 1,
      optionNotes: {
        2: { en: 'Yeast and insect cells read the same Asn-X-Ser/Thr sequon and do glycosylate at it. What differs between hosts is the structure built on the site, high-mannose or paucimannose rather than human complex type. The recognition step is shared; the elaboration step is not.', cn: '酵母和昆虫细胞识别的是同一个 Asn-X-Ser/Thr sequon，也确实会在那里加糖。宿主之间不一样的是在这个位点上造出什么结构：high-mannose 或 paucimannose，而不是人的 complex type。识别这一步是共用的，后面加工那一步才不是。' }
      },
      why_en: 'The sequon says where glycosylation can occur; which sites are actually used and what structures get built depend on the host\'s own enzymes and on folding. That is why host choice is not neutral for a glycoprotein.',
      why_cn: '共有序列决定的是糖基化「可能」发生在哪里；实际用到哪些位点、造出什么结构，取决于宿主自身的酶和折叠过程。这就是为什么对糖蛋白来说宿主选择不是中性的。' },
    { type: 'mcq',
      q_en: 'How are lectins used in this context?',
      q_cn: '在这个语境下凝集素有什么用？',
      options: ['To strip the glycans off a protein before analysis', 'To purify glycoproteins on an immobilised lectin resin', 'To add human-like complex glycans to a protein in vitro', 'To detect a proline sitting at the X position of a sequon'],
      answer: 1,
      optionNotes: {
        0: { en: 'Binding and cleaving are different jobs. A lectin only recognises the sugar and holds on to it, which is why elution uses a competing monosaccharide rather than an enzyme reaction. Cutting the glycan off the protein is what an endoglycosidase does.', cn: '「结合」和「切断」是两件不同的工作。lectin 只是识别糖并抓住它，所以洗脱用的是竞争性的单糖，而不是一个酶反应。把糖链从蛋白上切下来，那是 endoglycosidase 的活。' }
      },
      why_en: 'Lectins are carbohydrate-binding proteins, so immobilised lectin resin captures glycoproteins by their sugars. Removing glycans is the job of endoglycosidases instead.',
      why_cn: '凝集素是碳水化合物结合蛋白，所以固定化的凝集素树脂可以通过糖链捕获糖蛋白。去除糖链则是内切糖苷酶的工作。' },
    { type: 'short',
      q_en: 'Why does N-glycosylation constrain your choice of expression host so strongly?',
      q_cn: '为什么 N-糖基化会如此强烈地约束表达宿主的选择？',
      accept: ['E. coli', 'no glycosylation', 'human-like', 'differs between hosts', 'EPO'],
      answer_en: 'Because it can be critical for folding and physiological function, and because no two hosts do it the same way. E. coli performs no N-glycosylation whatsoever, so any protein that needs glycans to work is ruled out of it immediately — erythropoietin is the standard example, where glycosylation determines activity. Every other host does glycosylate but with a different pattern: yeast produces high-mannose structures, insect cells something else again, and only mammalian cells give genuinely human-like complex glycans. Since therapeutic proteins require human-like glycosylation, this single property drives you either to mammalian cells or to an engineered host carrying humanised glycosyltransferases. That is precisely why the host decision chain asks about post-translational modification first.',
      answer_cn: '因为它可能对折叠和生理功能至关重要，而且没有两个宿主的做法是一样的。大肠杆菌完全不做 N-糖基化，所以任何需要糖链才能起作用的蛋白立刻就被它排除——促红细胞生成素是标准例子，它的糖基化直接决定活性。其他宿主都会糖基化，但模式各不相同：酵母做出高甘露糖结构，昆虫细胞又是另一套，只有哺乳动物细胞能给出真正类人的复杂型糖链。由于治疗性蛋白需要类人糖基化，这一个性质就把你逼向哺乳动物细胞，或者逼向携带人源化糖基转移酶的改造宿主。这正是宿主决策链把翻译后修饰放在第一个问题的原因。'
    }
  ],
  oral: {
    q_en: 'Tell me about N-linked glycosylation and why it matters for choosing an expression system.',
    q_cn: '讲讲 N-连接糖基化，以及它为什么对选择表达系统这么重要。',
    model_en: 'N-linked glycosylation occurs at a consensus sequence, asparagine followed by any residue followed by serine or threonine — and the detail worth getting right is that X can be any amino acid except proline, because a proline there disrupts the backbone conformation the glycosyltransferase requires. It is worth adding that a sequon marks where glycosylation can happen, not where it does; whether a given site is actually occupied also depends on its accessibility during folding. The reason it matters so much is that it can be critical for folding and for physiological function. Erythropoietin is the standard example, where the glycosylation determines the activity and the in vivo half-life. Now, E. coli performs no N-glycosylation at all, so any protein that needs glycans to function is ruled out of the cheapest and fastest host immediately, and no amount of optimisation rescues that. Every other host does glycosylate, but each with a different pattern — yeast makes high-mannose structures, insect cells make something different again, and only mammalian cells produce genuinely human-like complex glycans. Since therapeutic proteins require human-like glycosylation, this one property pushes you either to mammalian cells or to an engineered host carrying humanised glycosyltransferases, which is how yeast can be rescued for therapeutic use. That is exactly why the host decision chain asks about post-translational modification as its very first question. As research tools, there are two worth knowing: lectins, which are carbohydrate-binding proteins, let you purify glycoproteins by affinity, and endoglycosidases let you strip the sugars off so you can test experimentally what they were contributing.',
    checklist: ['Consensus: Asn-X-Ser/Thr', 'X can be anything EXCEPT proline — proline breaks the required conformation', 'A sequon marks a potential site, not a guaranteed one', 'Can be critical for folding and physiological function', 'EPO is the standard example: glycosylation determines activity', 'No N-glycosylation at all in E. coli', 'Patterns differ between every host', 'Therapeutics require human-like glycosylation', 'Engineered hosts with humanised glycosyltransferases exist', 'Why the decision chain asks about PTMs first', 'Tools: lectins to purify glycoproteins, endoglycosidases to remove glycans']
  }
},

/* ======= PART II — LECTURES 4–5: FROM CELLS TO PURE PROTEIN ======= */

{
  id: '2-26',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.26',
  enTitle: 'Cell disruption',
  cnTitle: '细胞破碎',
  slides: 'L4 s.2–4',
  coverage: 'full',
  coverageNote: 'The difficulty ordering and the seven-method table are on the slides. That sonication does two useful things at once, and that this is why high-pressure homogenisation is labelled gentle by contrast, is the beyond-the-slides part.',
  summary: {
    en: 'How hard a cell is to break depends on its wall: mammalian and insect cells are easiest, bacteria are intermediate, and yeasts and plants are hardest. Seven methods span the range, from freeze-thaw for animal cells through enzymatic lysis and mechanical shear to bead mills. The choice is governed by volume and by how much shear the protein will tolerate — French press below 100 mL, high-pressure homogenisation above 200 mL, and sonication anywhere but with a real risk of denaturation.',
    cn: '一个细胞有多难破取决于它的细胞壁：哺乳动物和昆虫细胞最容易，细菌居中，酵母和植物最难。七种方法覆盖了整个范围，从用于动物细胞的冻融，到酶解、机械剪切，再到珠磨。选择主要由体积和蛋白能承受多少剪切力决定——法式压碎器用于 100 mL 以下，高压均质用于 200 mL 以上，超声哪里都能用但有实实在在的变性风险。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.2', src: 'img/figures/L4_s02_1.webp' },
    { slide: 'L4 s.3', src: 'img/figures/L4_s03_1.webp' },
    { slide: 'L4 s.4', src: 'img/figures/L4_s04_1.webp' },
    { slide: 'L4 s.4', src: 'img/figures/L4_s04_2.webp' },
    { slide: 'L4 s.4', src: 'img/figures/L4_s04_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**超声同时干两件事**：打破细胞，以及**打断 DNA**。第二件常被忽略，但它才是裂解液不再黏稠的原因——黏稠会毁掉离心分层、堵死柱子。\n\n' +
            '代价是**局部高温和剧烈剪切**，所以必须冰浴 + 短脉冲间歇，绝不能连续超。',
  skipIt: 'B-PER / Zymolyase / Lyticase / Avestin Emulsiflex C3 这些产品名不用背。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Cell lysis – chemical, enzymatic, mechanical**——**要能按这三类把方法归位**，具体商品名不是考点。',
  explain: [
    {
      q: '为什么裂解液会那么黏？这有什么实际危害？',
      a: '**元凶是被释放出来的基因组 DNA。**\n\n' +
         '细胞一破，那条几百万碱基长的染色体就整条掉进溶液里。**长链分子会让溶液变得极黏**——你吸一下移液器就能感觉到，像糖浆一样。\n\n' +
         '**危害有两条，而且都是硬伤：**\n\n' +
         '**离心分不开。**黏稠的液体里，细胞碎片沉降不下去，上清和沉淀之间没有清晰的界面。你想留上清，结果带走一堆碎片；想留沉淀（包涵体），结果里面混着大量可溶物。\n\n' +
         '**柱子会被堵死。**上样时那些长链 DNA 缠在树脂颗粒之间，压力飙升，跑不动。严重时柱子直接报废。\n\n' +
         '**解法有两条：**\n\n' +
         '**超声**——它在打细胞的同时把 DNA 剪成短片段，**黏度当场就下去了**。这是超声一个常被忽略的价值。\n\n' +
         '**如果你不用超声**（比如用高压均质），就要**另外加 DNase I 或 Benzonase** 把 DNA 消化掉。\n\n' +
         '**所以「用不用超声」这个决定，顺带决定了「要不要额外加核酸酶」。**这两件事是绑在一起的，很多人第一次做高压均质时会忘掉后半句。',
      takeaway: '黏度来自释放的基因组 DNA，它会毁掉离心分层和柱子。超声顺手剪断它；不超声就得加 Benzonase。'
    },
    {
      q: '超声为什么会让蛋白变性？「空化」是怎么回事？',
      trace: {
        what: '**空化（cavitation）**：超声波在液体里制造出微小的气泡，然后这些气泡**猛烈地内爆塌缩**。破细胞靠的就是塌缩瞬间产生的剪切力。',
        from: '声波在液体里传播时，负压相把液体「拉开」形成气泡，正压相又把它压回去。**塌缩是在极短时间内完成的**，局部释放出巨大的能量。',
        to: '**问题就在「局部」两个字。**塌缩点附近瞬间的温度和剪切力都极高——足以打断细胞壁，**也足以把你的蛋白打开甚至打断**。\n\n而且整管液体的温度也会持续上升，因为你在不停地往里输入能量。\n\n**所以标准操作是三条一起用：冰浴、短脉冲、留间歇**（典型是开 10 秒、停 30 秒）。停的那 30 秒不是浪费时间，是**让热量散掉**。\n\n**绝不能连续超**——那是最常见的、把蛋白煮熟了还不自知的做法。',
        family: '对照**高压均质**：同样是靠剪切破细胞，但**没有局部过热的问题**，所以幻灯片上把它标为「对蛋白温和」。这就是为什么大规模纯化偏爱它——**不只是因为能处理大体积，也因为它更不容易伤蛋白。**'
      },
      takeaway: '气泡塌缩产生局部高温高剪切，既破细胞也伤蛋白。所以冰浴 + 短脉冲 + 留间歇，绝不连续超。'
    },
    {
      q: '这七种方法怎么选？有没有一个简单的判据？',
      a: '**两个判据就够了：体积多大，蛋白多娇气。**\n\n' +
         '**先看体积——这一条直接排除掉大部分选项：**\n\n' +
         '**100 mL 以下** → 法式压碎器（French press）。它是分批操作的，装一管压一管。\n\n' +
         '**200 mL 以上** → 高压均质。它是**连续**的，液体一直流过去，所以体积上不封顶。\n\n' +
         '**超声**——小体积很方便，大体积就很痛苦（要分很多管，每管都要冰浴和间歇）。\n\n' +
         '**珠磨**——能处理大体积而且效率很高，但设备贵。\n\n' +
         '**再看蛋白娇不娇气：**\n\n' +
         '怕剪切、怕热 → 高压均质（温和），或者干脆用**酶解**（溶菌酶对 E. coli，Zymolyase 对酵母）——**酶解是最温和的一类，因为它只拆细胞壁，完全不产生机械力**。代价是酶在大规模时很贵。\n\n' +
         '**还有一条前置判据别忘了：细胞本身有多难破**（第 2-16 节讲过）。哺乳动物和昆虫细胞最容易，冻融就够了；细菌居中；**酵母和植物最难**，基本只能上机械手段。\n\n' +
         '**所以完整的判断顺序是：细胞类型 → 体积 → 蛋白耐受度。**',
      takeaway: '先看细胞难不难破，再看体积（100 mL 以下用 French press，200 mL 以上用均质），最后看蛋白耐不耐剪切。'
    }
  ],
  points: [
    { term: 'The difficulty ordering', en: 'Mammalian and insect cells are easiest, then bacteria, then yeasts and plants are hardest — it tracks the toughness of the cell wall.', cn: '哺乳动物和昆虫细胞最容易，然后是细菌，酵母和植物最难——这个顺序跟着细胞壁的坚韧程度走。' },
    { term: 'Freeze-thaw', en: 'Freeze at minus 80 or on dry ice, thaw at room temperature or 37 degrees, repeat three times. Mammalian and insect cells only, may not be efficient, and released DNA makes the sample viscous.', cn: '在 −80 度或干冰上冻结，在室温或 37 度解冻，重复三次。只适用于哺乳动物和昆虫细胞，效率可能不高，而且释放出的 DNA 会让样品变粘稠。' },
    { term: 'Chemical detergents', en: 'Typically a mixture of detergents, mostly sold as commercial kits such as B-PER. Expensive.', cn: '通常是多种去污剂的混合物，主要以 B-PER 这类商品化试剂盒形式出售。价格贵。' },
    { term: 'Enzymatic lysis', en: 'Lysozyme for E. coli, which cleaves peptidoglycan; Zymolyase (a mixture), Lyticase (purified) or Glusulase for yeast. Can be expensive at large scale.', cn: '大肠杆菌用溶菌酶，它切割肽聚糖；酵母用 Zymolyase（混合物）、Lyticase（纯化的）或 Glusulase。大规模时成本较高。' },
    { term: 'French press', en: 'Cell suspension in a metal cylinder, pressure applied by a piston, disruption by shear; repeat several times. Under 100 mL, for bacteria and yeast.', cn: '细胞悬液装在金属缸中，用活塞加压，靠剪切力破碎；重复数次。适用于 100 mL 以下，用于细菌和酵母。' },
    { term: 'High-pressure homogenisation', en: 'The same principle but continuous. Above 200 mL, for high volumes, and notably gentle to proteins — for example the Avestin Emulsiflex C3.', cn: '原理相同但是连续式的。适用于 200 mL 以上的大体积，而且对蛋白特别温和——例如 Avestin Emulsiflex C3。' },
    { term: 'Ultrasonication', en: 'Ultrasound produces cavitation, the violent implosion of bubbles. It can denature proteins, but it also breaks DNA and RNA, reducing viscosity. Mammalian cells need 10 seconds, bacteria and yeast 5 to 20 minutes.', cn: '超声产生空化——气泡的剧烈崩塌。它可能让蛋白变性，但同时会打断 DNA 和 RNA，从而降低粘度。哺乳动物细胞需要 10 秒，细菌和酵母需要 5–20 分钟。' },
    { term: 'Bead mill', en: 'Cells mixed with glass or metal beads. Handles high volumes and is very efficient, but the equipment is expensive.', cn: '细胞与玻璃珠或金属珠混合。能处理大体积、效率很高，但设备昂贵。' }
  ],
  beyondPoints: [
    { term: 'Sonication does two things at once', en: 'It breaks cells, through the shear produced when cavitation bubbles collapse. And it breaks DNA and RNA — which is easy to overlook but matters a great deal.', cn: '它同时做两件事：一是靠空化气泡崩塌产生的剪切力破碎细胞；二是打断 DNA 和 RNA——这一点很容易被忽略，但非常重要。' },
    { term: 'Why the second one matters', en: 'A lysate is viscous, and the culprit is released genomic DNA. Viscosity stops centrifugation separating properly and clogs columns on loading. Sonication shears the DNA into short fragments and the viscosity drops immediately. The alternative, if you are not sonicating, is to add DNase I or Benzonase.', cn: '裂解液很粘稠，罪魁祸首是释放出来的基因组 DNA。粘度会让离心分不开，上样时还会堵柱子。超声把 DNA 剪成短片段，粘度立刻下降。如果不用超声，替代方案是加 DNase I 或 Benzonase。' },
    { term: 'The cost of sonication', en: 'Heat and locally violent shear, so the protein can denature. The standard practice is therefore an ice bath, short pulses and intervals — 10 seconds on, 30 seconds off — and never continuous sonication.', cn: '代价是产热和局部剧烈剪切，蛋白可能因此变性。所以规范操作是冰浴、短脉冲、间歇进行——开 10 秒、停 30 秒——绝不能连续超声。' },
    { term: 'Why homogenisation is called gentle by contrast', en: 'High-pressure homogenisation has no local overheating problem, which is exactly why the table labels it gentle to proteins and why large-scale purification prefers it.', cn: '高压均质没有局部过热的问题，这正是表格把它标为「对蛋白温和」的原因，也是大规模纯化更偏好它的原因。' }
  ],
  terms: [
    { en: 'Cavitation', cn: '空化', def_en: 'The formation and violent implosion of bubbles under ultrasound. The collapse generates the shear that disrupts cells, and also the local heat that can denature protein.', def_cn: '超声作用下气泡的形成与剧烈崩塌。崩塌产生破碎细胞的剪切力，同时也产生可能使蛋白变性的局部热量。' },
    { en: 'Lysozyme', cn: '溶菌酶', def_en: 'An enzyme cleaving the peptidoglycan of the bacterial cell wall, used for gentle enzymatic lysis of E. coli.', def_cn: '切割细菌细胞壁肽聚糖的酶，用于大肠杆菌的温和酶解裂解。' },
    { en: 'Benzonase', cn: 'Benzonase 核酸酶', def_en: 'A broad-specificity nuclease added to lysates to digest DNA and RNA, reducing viscosity when sonication is not used.', def_cn: '一种广谱核酸酶，加入裂解液中消化 DNA 和 RNA，在不使用超声时用来降低粘度。' },
    { en: 'High-pressure homogenisation', cn: '高压均质', def_en: 'Continuous shear disruption by forcing cell suspension through a narrow gap under pressure. Suited to volumes above 200 mL and gentle to proteins.', def_cn: '在压力下把细胞悬液挤过狭窄间隙实现的连续剪切破碎。适用于 200 mL 以上体积，对蛋白温和。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which cells are hardest to disrupt?',
      q_cn: '哪种细胞最难破碎？',
      options: ['Mammalian cells', 'Insect cells', 'Bacteria', 'Yeasts and plants'],
      answer: 3,
      why_en: 'The ordering follows cell wall toughness: mammalian and insect cells have no wall and are easiest, bacteria are intermediate, and yeasts and plants have tough walls. This is also why Pichia is so often used for secreted expression.',
      why_cn: '这个顺序跟着细胞壁的坚韧程度：哺乳动物和昆虫细胞没有细胞壁，最容易；细菌居中；酵母和植物细胞壁很硬。这也是 Pichia 常用于分泌表达的原因。' },
    { type: 'mcq',
      q_en: 'Besides breaking cells, what else does sonication usefully do?',
      q_cn: '除了破碎细胞，超声还顺带做了什么有用的事？',
      options: ['It inactivates the proteases released from the broken cells', 'It shears genomic DNA, which drops the viscosity of the lysate', 'It removes residual detergent from the cleared lysate', 'It refolds protein that has aggregated during lysis'],
      answer: 1,
      optionRefs: { 0: '2-28', 3: '2-11' },
      why_en: 'Released genomic DNA is what makes a lysate viscous, and viscosity prevents clean centrifugation and clogs columns. Sonication shears it into short fragments; the alternative is DNase I or Benzonase.',
      why_cn: '让裂解液变粘稠的正是释放出的基因组 DNA，而粘度会妨碍离心分离、堵塞柱子。超声把它剪成短片段；替代方案是 DNase I 或 Benzonase。' },
    { type: 'mcq',
      q_en: 'Why is high-pressure homogenisation described as gentle to proteins while sonication is not?',
      q_cn: '为什么高压均质被描述为对蛋白温和，而超声不是？',
      options: ['It operates at a much lower pressure than sonication does', 'It shears without the local heating that cavitation produces', 'It breaks the cell wall only partially, releasing less protein', 'It can be applied only to mammalian cells, which have no wall'],
      answer: 1,
      why_en: 'Both work by shear, but cavitation generates intense local heat and shear that can denature protein — hence ice baths and pulsed sonication. Homogenisation shears without that hot spot, which is why large-scale work prefers it.',
      why_cn: '两者都靠剪切，但空化会产生强烈的局部热量和剪切，可能使蛋白变性——所以要冰浴、要脉冲式超声。均质在剪切时没有这个热点，这就是大规模操作偏好它的原因。' },
    { type: 'short',
      q_en: 'Your bacterial lysate is so viscous you cannot pipette it or get a clean centrifugation. What is causing this and what are your two options?',
      q_cn: '你的细菌裂解液粘稠到无法移液、也离心不干净。原因是什么？你有哪两个选择？',
      accept: ['genomic DNA', 'sonication', 'DNase', 'Benzonase', 'shear'],
      answer_en: 'The viscosity comes from released genomic DNA, which is an enormously long molecule. It matters practically because it prevents centrifugation separating the fractions cleanly and it will clog a column when you load. There are two ways to fix it. Sonicate, which shears the DNA into short fragments as a side effect of breaking the cells, and viscosity drops immediately — but do it on ice in short pulses with intervals, ten seconds on and thirty off, because cavitation generates local heat and shear that can denature the protein. Or add a nuclease, DNase I or Benzonase, and digest the DNA enzymatically, which is what you do if the protein will not tolerate sonication.',
      answer_cn: '粘度来自释放出来的基因组 DNA，那是一个极长的分子。它在实际操作上很麻烦，因为会让离心分不干净各个层，上样时还会堵住柱子。有两个解决办法。一是超声，破碎细胞的同时顺带把 DNA 剪成短片段，粘度立刻下降——但必须在冰上、用短脉冲加间歇（开 10 秒停 30 秒），因为空化会产生局部热量和剪切，可能让蛋白变性。二是加核酸酶，DNase I 或 Benzonase，用酶把 DNA 消化掉；如果你的蛋白经不起超声，就走这条路。'
    }
  ],
  oral: {
    q_en: 'How do you break cells open, and what governs the choice of method?',
    q_cn: '怎么把细胞打开？选择方法的依据是什么？',
    model_en: 'The first thing that governs it is what you are breaking, because difficulty follows the cell wall: mammalian and insect cells are easiest since they have no wall, bacteria are intermediate, and yeasts and plants are hardest. Then there are seven methods. Freeze-thaw, three cycles between minus eighty and room temperature, works for mammalian and insect cells only and is not always efficient. Chemical lysis with detergent mixtures, usually bought as kits like B-PER, is convenient but expensive. Enzymatic lysis uses lysozyme for E. coli, which cleaves peptidoglycan, or Zymolyase, Lyticase or Glusulase for yeast — also expensive at scale. Then the mechanical methods. A French press puts the suspension in a metal cylinder and drives a piston, disrupting by shear, and suits under a hundred millilitres of bacteria or yeast. High-pressure homogenisation is the same principle made continuous, for above two hundred millilitres, and it is specifically noted as gentle to proteins. Ultrasonication uses cavitation, the violent implosion of bubbles — ten seconds for mammalian cells, five to twenty minutes for bacteria or yeast. And bead mills, cells shaken with glass or metal beads, are very efficient at high volume but need expensive equipment. The point I would want to add about sonication is that it does two things at once. It breaks the cells, and it shears DNA and RNA. That second effect is easy to overlook and it matters, because a lysate is viscous and the culprit is released genomic DNA — viscosity stops centrifugation separating properly and clogs your column on loading. Sonication fixes that as a side effect; if you are not sonicating you add DNase I or Benzonase instead. The cost is that cavitation generates heat and locally violent shear, so protein can denature, which is why you always work on ice with short pulses and intervals, ten on and thirty off, never continuously. And that is exactly why homogenisation earns the label gentle by contrast — it shears without the hot spot, which is why large-scale purification prefers it.',
    checklist: ['Difficulty follows the wall: mammalian/insect < bacteria < yeast/plants', 'Freeze-thaw: 3 cycles, animal cells only, not always efficient', 'Detergent kits (B-PER): convenient, expensive', 'Enzymatic: lysozyme for E. coli, Zymolyase/Lyticase for yeast', 'French press: piston, shear, <100 mL', 'High-pressure homogenisation: continuous, >200 mL, gentle to proteins', 'Sonication: cavitation, 10 s mammalian, 5-20 min bacteria/yeast', 'Bead mill: high volume, efficient, expensive equipment', 'Sonication also shears DNA/RNA, cutting viscosity', 'Viscosity comes from genomic DNA; blocks centrifugation and columns', 'Alternative: DNase I or Benzonase', 'Cost: heat and shear, so ice, pulses 10 s on / 30 s off, never continuous']
  }
},

{
  id: '2-27',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.27',
  enTitle: 'Secreted proteins, and concentrating a dilute sample',
  cnTitle: '分泌型蛋白，以及稀样品的浓缩',
  slides: 'L4 s.5–6',
  coverage: 'full',
  coverageNote: 'The advantages of secretion and the two concentration methods are on the slides. Why tangential flow beats ordinary filtration is not, and it is the reason TFF exists at all.',
  summary: {
    en: 'Secretion has three real advantages — you get N-glycosylated protein, downstream purification is much simpler especially in serum-free media, and there is less protease contamination — but it leaves you with a dilute sample that must be concentrated. Two methods do this: ammonium sulfate precipitation, which is a purification step in its own right but needs impractically large quantities at industrial scale, and tangential flow filtration, which is the standard for large volumes.',
    cn: '分泌表达有三个实实在在的优势——能得到 N-糖基化的蛋白、下游纯化简单得多（尤其在无血清培养基中）、蛋白酶污染更少——但代价是样品很稀，必须浓缩。有两种方法：硫酸铵沉淀，它本身就算一个纯化步骤，但在工业规模上所需的用量大到不现实；以及切向流过滤，这是处理大体积的标准手段。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.5', src: 'img/figures/L4_s05_1.webp' },
    { slide: 'L4 s.5', src: 'img/figures/L4_s05_2.webp' },
    { slide: 'L4 s.5', src: 'img/figures/L4_s05_3.webp' },
    { slide: 'L4 s.6', src: 'img/figures/L4_s06_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '分泌表达的代价是**样品很稀**，所以必须先浓缩。大体积的标准手段是 **TFF（切向流过滤）**。\n\n' +
            'TFF 跟普通过滤的区别只有一条：**液体是平行掠过膜面的，所以膜不会被糊死。**',
  skipIt: 'TFF 单元、搅拌池、离心浓缩管这些具体形式不用背。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Secreted proteins – media concentration TFF/UF**——**分泌样品要浓缩、以及 TFF/UF 这个手段，都是被点名的**。',
  explain: [
    {
      q: '分泌的三个好处，为什么是「三个」而不是一个？',
      a: '**因为它们来自三条不同的原因，答题时分开说才完整。**\n\n' +
         '**一、拿到 N-糖基化的蛋白。**这是**位置**带来的：分泌途径（内质网→高尔基体）本来就是糖基化发生的地方。蛋白走这条路出去，顺带就被修饰了。\n\n' +
         '**二、下游纯化简单得多。**这是**背景**带来的：培养基里本来蛋白就少（无血清培养基尤其少），而细胞裂解液里有**几千种**宿主蛋白。**你的起点纯度差了好几个量级。**\n\n' +
         '**三、蛋白酶污染更少。**这是**「没有裂解」**带来的：蛋白酶在细胞里面。你从来没把细胞打开，它们就一直待在里面（第 2-28 节讲这有多要紧）。\n\n' +
         '**注意第二和第三条其实是同一个动作的两个好处——「不用裂解细胞」。**\n\n' +
         '**再连回第 2-16 节和第 2-19 节：**酵母偏爱分泌，是因为它的细胞壁极难破；S2 稳定株偏爱分泌，是因为细胞不死就可以反复收获。**「分泌」在这门课里出现过三次，每次解决的是那个系统各自最痛的地方。**',
      takeaway: '糖基化来自「走了分泌途径」，另外两条来自「没有裂解细胞」。三条，两个来源。'
    },
    {
      q: '为什么普通过滤不行，非要「切向流」？',
      a: '**因为普通过滤会被自己截留下来的东西糊死。**\n\n' +
         '**普通过滤（死端过滤，dead-end filtration）**：液体**垂直**冲向膜面。被截留的分子无处可去，**全部堆积在膜上**，越积越厚，形成一层「滤饼」。\n\n' +
         '结果是膜很快就堵了，流速暴跌。**处理几十升培养基？完全不可能。**\n\n' +
         '**切向流过滤（TFF）改的是流动方向**：液体**平行掠过**膜面，速度很快。只有一小部分从膜孔穿过去（**透过液 permeate**），大部分**沿着膜面冲刷过去、循环回来**（**截留液 retentate**）。\n\n' +
         '**那股平行的水流持续把膜面扫干净**，滤饼根本形不成。于是设备可以稳定运行很久，处理很大的体积。\n\n' +
         '**记这三个词的关系最简单的方式：**\n\n' +
         '**Feed（进料）进来 → 分成两股 → Retentate（截留液，你的蛋白在这里，浓缩了）+ Permeate（透过液，水和小分子，扔掉）。**\n\n' +
         '**所以浓缩的原理是「把水放走，把蛋白留下」**——不是把蛋白抓住，而是让别的东西跑掉。这跟后面所有的层析都不一样，值得单独记住。',
      takeaway: '死端过滤会被滤饼糊死；切向流让液体平行掠过、持续扫干净膜面。浓缩靠的是放走水，不是抓住蛋白。'
    },
    {
      q: '硫酸铵沉淀既然「本身就是一个纯化步骤」，为什么工业上不用？',
      a: '**因为用量大到不现实——这是一个纯粹被规模否决掉的方法。**\n\n' +
         '先说它好在哪：**不同蛋白析出所需要的硫酸铵浓度不一样**。所以你可以先加到某个浓度，把一批杂蛋白沉下来扔掉；再加到更高浓度，把你的蛋白沉下来收集。**这就是一次分级分离**——跟第 1-7 节 1922 年提纯胰岛素用的分级沉淀是同一个思路，只是换了试剂。\n\n' +
         '**所以它确实「本身就是一个纯化步骤」，而不只是浓缩。**\n\n' +
         '**问题出在规模上。**硫酸铵要加到接近饱和才有效，那意味着**每升溶液要加几百克盐**。\n\n' +
         '实验室里处理 50 mL，加几十克，没问题。\n\n' +
         '**工业上处理几千升呢？**那是以吨计的盐。买它、运它、溶它、之后还要把它从产品里彻底除掉（否则下游全乱）、以及**处理含高浓度盐的废液**——每一项都是钱和麻烦。\n\n' +
         '**所以工业上用 TFF：它只是把水赶走，不引入任何新东西。**\n\n' +
         '**这是一个很好的例子，说明「实验室里好用」和「工业上可行」是两个不同的判据。**第 1-19 节和第 2-21 节的 PEI 也是同一类道理——规模会改写什么叫最好的方法。',
      takeaway: '它靠溶解度差异分级，确实是纯化步骤。但要加到接近饱和，几千升就是以吨计的盐。'
    }
  ],
  points: [
    { term: 'Advantage — glycosylation', en: 'You obtain N-glycosylated proteins, since the secretory pathway is where glycosylation happens.', cn: '能得到 N-糖基化的蛋白，因为糖基化正是在分泌途径中完成的。' },
    { term: 'Advantage — simpler purification', en: 'Downstream purification is simplified, especially when the culture uses serum-free media, because the medium contains far less protein than a lysate.', cn: '下游纯化更简单，尤其是使用无血清培养基时，因为培养基里的蛋白远少于裂解液。' },
    { term: 'Advantage — fewer proteases', en: 'Less protease contamination, because you never release the cell contents.', cn: '蛋白酶污染更少，因为你从来没有把细胞内容物释放出来。' },
    { term: 'The cost', en: 'Dilute samples — concentration is needed before anything else can be done.', cn: '代价是样品很稀——在做其他任何事之前必须先浓缩。' },
    { term: 'Ammonium sulfate precipitation', en: 'Can serve as a purification step in itself. But large quantities are needed, so it is not used industrially.', cn: '本身就可以充当一个纯化步骤。但需要的用量很大，所以不用于工业生产。' },
    { term: 'Tangential flow filtration', en: 'Also called ultrafiltration. Fluid passes across a semipermeable membrane, driven by pressure differences.', cn: '也叫超滤。液体在压力差驱动下横向流过半透膜。' },
    { term: 'The three streams', en: 'Feed goes in, and splits into retentate — what is held back — and permeate, what passes through.', cn: '进料流进去，分成截留液（被拦下的）和透过液（穿过去的）。' },
    { term: 'Lab-scale formats', en: 'TFF units, stirred cells, and centrifugal devices.', cn: 'TFF 装置、搅拌式超滤杯，以及离心式浓缩装置。' }
  ],
  beyondPoints: [
    { term: 'Why ordinary filtration fails here', en: 'In dead-end filtration the liquid runs perpendicular to the membrane, so retained molecules pile up against it and form a filter cake. The membrane clogs quickly and throughput collapses.', cn: '死端过滤中液体垂直冲向滤膜，被截留的分子堆积在膜面形成滤饼。膜很快堵死，通量随之崩溃。' },
    { term: 'What tangential flow changes', en: 'The liquid flows parallel to the membrane surface at high speed, and only a small fraction passes through as permeate while the rest circulates back as retentate. That parallel flow continuously sweeps the surface clean, so the unit runs stably for a long time and handles large volumes.', cn: '液体高速平行于膜面流过，只有一小部分作为透过液穿膜，其余作为截留液循环回去。这股平行流持续把膜面刷干净，所以装置能长时间稳定运行、处理大体积。' },
    { term: 'Where this sits in a real workflow', en: 'This is the standard way to concentrate tens of litres of medium after a secreted expression, before any chromatography can begin.', cn: '这是分泌表达之后、在任何层析开始之前，把几十升培养基浓缩下来的标准手段。' }
  ],
  terms: [
    { en: 'Tangential flow filtration (TFF)', cn: '切向流过滤', def_en: 'Filtration in which the feed flows parallel to the membrane, sweeping the surface clean, so it does not clog the way dead-end filtration does.', def_cn: '进料平行于膜面流动的过滤方式，持续冲刷膜表面，因而不会像死端过滤那样堵塞。' },
    { en: 'Retentate and permeate', cn: '截留液与透过液', def_en: 'The two output streams of a filtration: retentate is what the membrane holds back and where your protein should be; permeate is what passes through.', def_cn: '过滤的两股输出流：截留液是被膜拦下的部分，你的蛋白应该在其中；透过液是穿过膜的部分。' },
    { en: 'Ammonium sulfate precipitation', cn: '硫酸铵沉淀', def_en: 'Salting out proteins at high ionic strength. Concentrates and partially purifies at once, but needs impractical quantities at industrial scale.', def_cn: '在高离子强度下把蛋白盐析出来。同时实现浓缩和部分纯化，但在工业规模上所需用量不现实。' },
    { en: 'Dead-end filtration', cn: '死端过滤', def_en: 'Conventional filtration with flow perpendicular to the membrane. Retained material forms a cake on the surface and the membrane clogs.', def_cn: '常规过滤，流向垂直于膜面。被截留的物质在膜表面形成滤饼，膜随之堵塞。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does tangential flow filtration outperform ordinary filtration for large volumes?',
      q_cn: '为什么处理大体积时切向流过滤优于普通过滤？',
      options: ['It uses a membrane with a much finer pore size than dead-end units', 'Flow parallel to the membrane keeps a filter cake from building up', 'It needs no applied pressure across the membrane at all', 'It concentrates the sample by evaporating the solvent'],
      answer: 1,
      why_en: 'In dead-end filtration retained molecules pile up into a cake against the membrane and throughput collapses. Tangential flow keeps the surface swept, so the unit runs stably long enough to process tens of litres.',
      why_cn: '死端过滤中被截留的分子会在膜面堆成滤饼，通量随之崩溃。切向流持续冲刷膜面，所以装置能稳定运行足够久，处理几十升的量。' },
    { type: 'mcq',
      q_en: 'What is the main drawback of secreted expression?',
      q_cn: '分泌表达主要的缺点是什么？',
      options: ['More protease contamination than in a cell lysate, since all host proteases are released into the medium', 'The sample is dilute and must be concentrated', 'Proteins are not glycosylated', 'It requires cell disruption'],
      answer: 1,
      optionRefs: { 2: '2-25', 3: '2-26' },
      why_en: 'Everything else about secretion is favourable — glycosylation, simpler purification, fewer proteases, no lysis needed. The price is that your protein is spread through the whole culture volume.',
      why_cn: '分泌表达的其他方面都是有利的——糖基化、纯化更简单、蛋白酶更少、不需要裂解。代价是你的蛋白被摊薄在整个培养体积里。' },
    { type: 'mcq',
      q_en: 'Why is ammonium sulfate precipitation not used industrially?',
      q_cn: '为什么硫酸铵沉淀不用于工业生产？',
      options: ['It denatures the protein it precipitates, so activity is lost', 'The quantity of salt required becomes impractical at that scale', 'It gives no purification, only concentration of everything present', 'It requires a filtration membrane, which does not scale up'],
      answer: 1,
      optionNotes: {
        0: { en: 'Salting out is not denaturation. The protein leaves solution because the salt competes away its hydration shell, and it redissolves in buffer with its fold intact — which is why proteins are routinely stored as ammonium sulfate slurries. What rules the method out industrially is logistics, not damage to the product.', cn: '盐析不是变性。蛋白析出是因为盐把它的水化层抢走了，重新溶进缓冲液后折叠完好，这也正是很多蛋白平时就以硫酸铵浆料形式保存的原因。让这个方法在工业上出局的是物流，不是它伤了产品。' }
      },
      why_en: 'It works well and is a genuine purification step as well as a concentration step, but the amount of salt required scales with volume and becomes impractical industrially.',
      why_cn: '它效果不错，而且既是浓缩步骤也是真正的纯化步骤，但所需盐量随体积等比增长，在工业规模上不现实。' },
    { type: 'short',
      q_en: 'Your protein is secreted into 40 litres of serum-free medium. Describe the advantages you have gained and the immediate problem you must solve.',
      q_cn: '你的蛋白分泌到了 40 升无血清培养基里。说明你因此获得了哪些优势，以及必须先解决的问题。',
      accept: ['dilute', 'concentrate', 'TFF', 'tangential flow', 'fewer proteases', 'simpler purification'],
      answer_en: 'The advantages are substantial. The protein is N-glycosylated, because it has gone through the secretory pathway. Downstream purification is much simpler, particularly with serum-free medium, since the medium contains far less protein than a lysate would and you never had to break the cells. And there is less protease contamination, because the cell contents were never released. The immediate problem is that forty litres is far too dilute to load onto any column, so it must be concentrated first. The method for that volume is tangential flow filtration: the feed runs parallel to a semipermeable membrane so the surface is continuously swept clean, permeate passes through and retentate carrying your protein circulates back. Ammonium sulfate precipitation would also concentrate and partially purify, but the quantity of salt required at this scale makes it impractical.',
      answer_cn: '优势相当可观。蛋白是 N-糖基化的，因为它走过了分泌途径。下游纯化简单得多，尤其在无血清培养基下，因为培养基里的蛋白远少于裂解液，而且你根本不需要破碎细胞。蛋白酶污染也更少，因为细胞内容物从未被释放出来。眼下的问题是 40 升太稀了，任何柱子都上不了，必须先浓缩。这个体积对应的方法是切向流过滤：进料平行于半透膜流动，膜面被持续冲刷干净，透过液穿过去，带着你的蛋白的截留液循环回来。硫酸铵沉淀也能浓缩并部分纯化，但在这个规模上所需的盐量不现实。'
    }
  ],
  oral: {
    q_en: 'What do you gain by having your protein secreted, and what do you then have to deal with?',
    q_cn: '让蛋白分泌出来能得到什么？之后又必须处理什么问题？',
    model_en: 'Three gains, all real. You get N-glycosylated protein, because secretion means the product has travelled through the secretory pathway where glycosylation happens. Downstream purification is much simpler, particularly with serum-free media, because the culture medium contains far less protein than a cell lysate does and you never had to break anything open. And there is less protease contamination, for the same reason — the cell contents were never released, so the cytoplasmic proteases never met your protein. Against that, the sample is dilute, and concentration is needed before you can do anything else. There are two methods. Ammonium sulfate precipitation salts the protein out, and it is worth noting that this is a genuine purification step in its own right, not merely concentration — but the quantities required scale with volume, so it is not used industrially. The other is tangential flow filtration, also called ultrafiltration, where fluid passes across a semipermeable membrane driven by a pressure difference; the feed splits into retentate, which is held back and contains your protein, and permeate, which passes through. Lab-scale formats are TFF units, stirred cells and centrifugal devices. The reason it is tangential is worth explaining. In ordinary dead-end filtration the liquid runs perpendicular to the membrane, so retained molecules pile up against it and form a filter cake, and the membrane clogs almost immediately. In tangential flow the liquid runs parallel to the membrane surface at high speed and only a small fraction passes through, while the rest circulates back. That parallel flow continuously sweeps the surface clean, so it runs stably for a long time and can handle large volumes — which is exactly what you need when you have tens of litres of medium to reduce before any chromatography can start.',
    checklist: ['Gain 1: N-glycosylated protein, via the secretory pathway', 'Gain 2: simpler purification, especially in serum-free media', 'Gain 3: less protease contamination, cell contents never released', 'Cost: dilute sample, must be concentrated first', 'Ammonium sulfate: also a purification step, but not industrial', 'TFF/ultrafiltration: flow across a membrane under pressure', 'Streams: feed splits into retentate (your protein) and permeate', 'Dead-end filtration clogs: perpendicular flow builds a filter cake', 'Tangential flow sweeps the surface clean, so it runs stably', 'Standard way to reduce tens of litres before chromatography']
  }
},

{
  id: '2-28',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.28',
  enTitle: 'Protease inhibitors, and why disordered proteins vanish',
  cnTitle: '蛋白酶抑制剂，以及无序蛋白为什么会消失',
  slides: 'L4 s.7',
  coverage: 'full',
  coverageNote: 'The four countermeasures and the warning about incomplete inhibition are on the slide, as is the claim that disordered proteins are most vulnerable. Why that is true is not, and it connects directly back to the BL21 genotype from Lecture 3.',
  summary: {
    en: 'Cellular proteases degrade your target the moment you lyse the cells, and intrinsically disordered proteins are the most vulnerable of all. Four countermeasures apply: use fresh samples, minimise processing time, work cold, and add protease inhibitors — with the explicit caveat that inhibition is never complete. The reason disordered proteins suffer most is structural: a protease needs an extended segment to feed into its active site, and a disordered protein is already extended everywhere.',
    cn: '细胞裂解的那一刻起，细胞内的蛋白酶就开始降解你的目标蛋白，而天然无序蛋白是最脆弱的。有四条对策：用新鲜样品、尽量缩短处理时间、低温操作、加蛋白酶抑制剂——但明确提醒抑制永远不是 100% 的。无序蛋白受害最深的原因是结构性的：蛋白酶需要一段伸展的肽链才能送进活性位点，而无序蛋白本来就浑身都是伸展的。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.7', src: 'img/figures/L4_s07_1.webp' },
    { slide: 'L4 s.7', src: 'img/figures/L4_s07_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**无序蛋白降解得最快，原因是结构性的**：蛋白酶需要一段**伸展的**肽链才能送进活性口袋，而无序蛋白浑身都是伸展的。\n\n' +
            '四条对策里，幻灯片特意加了一句提醒：**抑制剂永远不是 100% 有效的。**',
  skipIt: '各种蛋白酶抑制剂的具体成分和配方不用背。**这一节在老师给第 4 讲做的 RECAP 里没有出现**（那里列的是裂解、分泌样品浓缩、复性、各类层析）。但四条对策的逻辑非常简单、也非常实用，看一遍就够，不必刻意背。',
  explain: [
    {
      q: '为什么天然无序蛋白（IDP）降解得特别快？',
      a: '**因为蛋白酶下刀需要一个条件，而无序蛋白到处都满足这个条件。**\n\n' +
         '**蛋白酶的活性位点是一个口袋（或一条沟）。**要切断一根肽键，它必须把底物的那一小段**以伸展的构象送进这个口袋里**。弯着、卷着、藏着的肽链，塞不进去。\n\n' +
         '**现在看一个折叠良好的球状蛋白：**它绝大部分潜在的切割位点，要么**埋在疏水核心里**（酶根本够不着），要么**处在二级结构里、构象被固定住了**（伸不开）。**真正暴露又能伸展的位点，通常只有末端和几个柔性环。**\n\n' +
         '**所以折叠本身就是一层保护。**\n\n' +
         '**而天然无序蛋白（IDP）没有这层保护。**它本来就没有固定结构，整条链都是伸展、暴露、柔性的——**每一个潜在位点都是一个现成的底物。**\n\n' +
         '**结果就是降解速度差了一个量级。**这也是为什么研究无序蛋白的人对「全程冰上、动作要快」这件事格外偏执。\n\n' +
         '**这条逻辑还能反过来用：**如果你发现自己的蛋白总是被切成固定大小的几段，那些切点很可能就是它的**柔性接头区**——降解模式本身在告诉你这个蛋白的结构。',
      takeaway: '酶要把底物以伸展构象塞进口袋，而折叠把大部分位点藏起来了。无序蛋白没有这层保护。'
    },
    {
      q: '幻灯片为什么特意写「抑制不是 100%」？',
      a: '**因为这句话改变了你该采取的策略。**\n\n' +
         '如果抑制剂是 100% 有效的，那么正确做法就是：加足抑制剂，然后想慢慢做就慢慢做。\n\n' +
         '**但它不是。**原因很实在：一份混合抑制剂针对的是几大类常见蛋白酶（丝氨酸、半胱氨酸、金属、天冬氨酸蛋白酶），但**细胞里的蛋白酶种类远比这几类多**，而且抑制是竞争性的、有浓度依赖的、会随时间被消耗掉的。\n\n' +
         '**所以剩下三条对策不是「锦上添花」，它们是主力：**\n\n' +
         '**用新鲜样品**——降解是累积的，放过的材料已经有损失了。\n\n' +
         '**缩短处理时间**——从裂解到上第一根柱子之间的每一分钟，蛋白酶都在工作。\n\n' +
         '**低温操作**——酶活随温度下降，这是最省事也最有效的一条。\n\n' +
         '**换句话说：抑制剂负责减慢，而真正决定结果的是你有多快。**\n\n' +
         '**实操上的推论：把第一根亲和柱看成一个「保护步骤」而不只是纯化步骤。**一旦你的蛋白挂到柱子上、杂质（包括蛋白酶）被洗走，降解基本就停止了。**所以「尽快上柱」比「多加抑制剂」更管用。**',
      takeaway: '抑制剂只能减慢，不能停止。所以真正的主力是「快」和「冷」——尽快上第一根柱子。'
    },
    {
      q: '这一节跟第 2-5 节的 BL21 是同一件事吗？',
      a: '**是同一个敌人，但在两个不同的时间点上。**\n\n' +
         '**第 2-5 节（BL21 缺 Lon 和 OmpT）对付的是「细胞还活着的时候」的降解。**\n\n' +
         'Lon 是胞质里的质量控制蛋白酶，专门降解**没折好的、异常的**蛋白——而你过量表达的产物正好符合这个描述。**这个降解在诱导期间就一直在发生。**\n\n' +
         '**这一节对付的是「细胞被裂解之后」的降解。**\n\n' +
         '裂解那一刻，所有区室被打破：溶酶体、液泡、周质里的蛋白酶全部和你的蛋白混在一起。**在细胞里它们本来是被隔开的**，现在没有了。\n\n' +
         '**所以完整的防线有两层：**\n\n' +
         '**表达期** → 选对菌株（BL21 系列）。\n\n' +
         '**裂解后** → 快、冷、加抑制剂、尽早上柱。\n\n' +
         '**被问到「怎么防止你的蛋白被降解」，两层都要说。**只答其中一层，说明你只想到了一个时间点。\n\n' +
         '（顺带一提，酵母那条「细胞壁难破」的缺点在这里又加重了一次：暴力破壁会释放液泡里高浓度的蛋白酶——第 2-16 节。）',
      takeaway: '表达期靠选菌株（BL21 缺 Lon），裂解后靠快冷和抑制剂。两个时间点，两层防线。'
    }
  ],
  points: [
    { term: 'The problem', en: 'Cellular proteases degrade your target, and intrinsically disordered proteins are the most vulnerable.', cn: '细胞内的蛋白酶会降解你的目标蛋白，而天然无序蛋白最为脆弱。' },
    { term: 'Use fresh samples', en: 'Degradation accumulates with time, so material that has been sitting around is already compromised.', cn: '降解随时间累积，所以放置过的材料本身已经受损。' },
    { term: 'Minimise processing time', en: 'Every step between lysis and the first column is time during which proteases are working.', cn: '从裂解到第一根柱子之间的每一步，都是蛋白酶在工作的时间。' },
    { term: 'Work at low temperature', en: 'On ice, or in the cold room. This slows the proteases along with everything else.', cn: '在冰上，或者在冷室里。这会连同其他一切一起减慢蛋白酶的速度。' },
    { term: 'Use protease inhibitors', en: 'But note the explicit warning on the slide: inhibition is not 100 per cent.', cn: '但要注意幻灯片上明确的警告：抑制不是 100% 的。' }
  ],
  beyondPoints: [
    { term: 'Why disordered proteins are degraded fastest', en: 'A protease must feed a stretch of its substrate into the active site pocket in an extended conformation. In a well-folded globular protein most cleavage sites are buried in the interior or conformationally constrained, so the protease simply cannot reach them.', cn: '蛋白酶必须把底物的一段以伸展构象送进活性位点口袋。在一个折叠良好的球状蛋白里，大部分切割位点埋在内部或受构象限制，蛋白酶根本够不着。' },
    { term: 'A disordered protein has no such protection', en: 'It is already extended along its whole length, so every potential site is a ready-made substrate. Degradation is correspondingly fast.', cn: '而无序蛋白全长本来就是伸展的，所以每一个潜在位点都是现成的底物。降解速度也就相应地快。' },
    { term: 'This is why BL21 has the genotype it has', en: 'BL21(DE3) lacks Lon and OmpT, and Lon is precisely the cytoplasmic protease specialised in degrading abnormal and unfolded protein — which is to say, exactly the protease that would attack an overexpressed, partly unfolded recombinant product.', cn: '这正是 BL21(DE3) 基因型的由来：它缺失 Lon 和 OmpT，而 Lon 恰恰是专门降解异常和未折叠蛋白的胞质蛋白酶——也就是最会攻击过表达、部分未折叠的重组产物的那一个。' }
  ],
  terms: [
    { en: 'Intrinsically disordered protein (IDP)', cn: '天然无序蛋白', def_en: 'A protein with no stable folded structure under native conditions. Highly susceptible to proteolysis because it is already in the extended conformation proteases require.', def_cn: '在天然条件下没有稳定折叠结构的蛋白。极易被蛋白酶水解，因为它本来就处于蛋白酶所需的伸展构象。' },
    { en: 'Protease inhibitor cocktail', cn: '蛋白酶抑制剂混合物', def_en: 'A mixture of inhibitors covering several protease classes, added to lysis buffer. Reduces but never eliminates degradation.', def_cn: '覆盖多类蛋白酶的抑制剂混合物，加进裂解缓冲液。能减少但绝不能消除降解。' },
    { en: 'Proteolysis', cn: '蛋白水解', def_en: 'Enzymatic cleavage of peptide bonds. Begins the moment cells are lysed and the compartmentalisation that kept proteases separate is destroyed.', def_cn: '肽键的酶促切割。细胞一裂解、原本把蛋白酶隔开的区室化被破坏，它就开始了。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why are intrinsically disordered proteins the most vulnerable to proteases?',
      q_cn: '为什么天然无序蛋白对蛋白酶最脆弱？',
      options: ['Their sequences are unusually rich in the hydrophobic residues proteases prefer', 'They are already in the extended conformation a protease requires', 'They cannot bind the protease inhibitors added to the buffer', 'They accumulate to higher levels, giving proteases more substrate'],
      answer: 1,
      optionNotes: {
        2: { en: 'Inhibitors act on the protease, not on the substrate — they occupy the enzyme active site, so nothing about your target protein has to bind them. Susceptibility is a property of the substrate conformation, and adding inhibitors does not change that conformation.', cn: '抑制剂作用的对象是 protease，不是底物：它们占住的是酶的活性位点，所以你的目标蛋白根本不需要去结合它们。易感与否取决于底物的构象，而加抑制剂并不会改变这个构象。' }
      },
      why_en: 'A protease must feed an extended stretch into its active site. A folded globular protein keeps most cleavage sites buried or conformationally constrained; a disordered protein offers all of them ready-made.',
      why_cn: '蛋白酶必须把一段伸展的肽链送进活性位点。折叠的球状蛋白把大部分切割位点埋起来或加以构象限制；无序蛋白则把它们全都现成地送上来。' },
    { type: 'mcq',
      q_en: 'What warning does the slide attach to protease inhibitors?',
      q_cn: '幻灯片对蛋白酶抑制剂附了什么警告？',
      options: ['They denature the target protein', 'Inhibition is not 100 per cent', 'They must be added after chromatography', 'They only work at room temperature'],
      answer: 1,
      optionNotes: {
        2: { en: 'The order is the other way round. Inhibitors go into the lysis buffer, because proteolysis starts the instant lysis mixes compartmentalised proteases with your target. By the time the first column has run, the target is bound and the proteases have been washed away — the column is itself a protective step, which is why speed to the first column matters more than dose.', cn: '顺序正好反了。抑制剂是加进 lysis buffer 里的，因为裂解把原本被区室隔开的 protease 和你的蛋白混在一起的那一刻，降解就开始了。等第一根柱子跑完，目标蛋白已经挂在柱上、protease 也被洗走了，那根柱子本身就是一个保护步骤，所以「多快上柱」比「加多少抑制剂」更要紧。' }
      },
      why_en: 'Inhibitors reduce degradation but never abolish it, which is why they are one of four measures rather than a solution on their own — speed and low temperature still matter.',
      why_cn: '抑制剂能减少降解但绝不能消除，这就是为什么它只是四条措施之一而不是单独的解决方案——速度和低温仍然重要。' },
    { type: 'mcq',
      q_en: 'Which E. coli protease is specifically targeted at abnormal and unfolded protein, and deleted in BL21?',
      q_cn: '哪个大肠杆菌蛋白酶专门针对异常和未折叠的蛋白，并且在 BL21 中被敲除？',
      options: ['OmpT', 'Lon', 'DsbA', 'TEV'],
      answer: 1,
      optionRefs: { 0: '2-5', 2: '2-13', 3: '2-41' },
      why_en: 'Lon is the cytoplasmic protease that degrades abnormal and unfolded protein — exactly the class an overexpressed recombinant product falls into. BL21(DE3) lacks both Lon and OmpT.',
      why_cn: 'Lon 是降解异常和未折叠蛋白的胞质蛋白酶——而过表达的重组产物恰好属于这一类。BL21(DE3) 同时缺失 Lon 和 OmpT。' },
    { type: 'short',
      q_en: 'How do you minimise proteolytic degradation during purification, and why is no single measure sufficient?',
      q_cn: '纯化过程中怎样把蛋白水解降到最低？为什么没有任何单一措施是足够的？',
      accept: ['fresh', 'time', 'cold', 'inhibitors', 'not 100%'],
      answer_en: 'Four measures together. Use fresh samples, since degradation accumulates in anything that has been standing. Minimise processing time, because every step between lysis and the first column is time in which proteases are working. Work at low temperature, on ice or in the cold room, which slows the proteases. And add protease inhibitors. No single measure suffices because inhibition is explicitly not one hundred per cent — no cocktail covers every protease class completely — so you are always reducing the rate rather than stopping the reaction. That is why speed and temperature still matter even with inhibitors present. It is also worth remembering that the vulnerability depends on your protein: a well-folded globular target keeps most of its cleavage sites buried, whereas an intrinsically disordered protein is already extended along its whole length and offers every site ready-made, so it can disappear remarkably fast.',
      answer_cn: '四条措施合起来用。用新鲜样品，因为放置过的材料里降解已经在累积。尽量缩短处理时间，因为从裂解到第一根柱子之间的每一步都是蛋白酶在工作的时间。低温操作，冰上或冷室，这会减慢蛋白酶。以及加入蛋白酶抑制剂。没有任何单一措施足够，是因为抑制明确不是 100% 的——没有哪种混合物能完全覆盖所有蛋白酶类别——所以你始终只是在降低速率，而不是让反应停下来。这就是为什么即使加了抑制剂，速度和温度依然重要。还值得记住的是脆弱程度取决于你的蛋白：折叠良好的球状目标把大部分切割位点埋了起来，而天然无序蛋白全长本来就是伸展的、每个位点都是现成的，所以它可以消失得非常快。'
    }
  ],
  oral: {
    q_en: 'How do you stop your protein being degraded during purification?',
    q_cn: '纯化过程中怎么防止蛋白被降解？',
    model_en: 'The problem starts the moment you lyse, because lysis destroys the compartmentalisation that had kept cellular proteases away from your product. There are four measures and they work together rather than individually. Use fresh samples, because degradation accumulates in anything left standing. Minimise processing time, since every step between lysis and the first column is time in which proteases are active. Work at low temperature, on ice or in the cold room. And use protease inhibitors — but the slide is explicit that inhibition is not one hundred per cent, so inhibitors reduce the rate rather than stopping the reaction, and that is precisely why speed and temperature still matter even with a cocktail in the buffer. The other thing worth saying is that vulnerability is not uniform, because intrinsically disordered proteins are by far the most susceptible. The reason is structural: a protease has to feed a stretch of its substrate into the active site pocket in an extended conformation, and in a well-folded globular protein most potential cleavage sites are buried in the interior or conformationally constrained, so the enzyme simply cannot reach them. A disordered protein is already extended along its entire length, so every site is a ready-made substrate and degradation is correspondingly fast. And this connects back to expression: BL21(DE3) is the standard host precisely because it lacks Lon and OmpT, and Lon is the cytoplasmic protease specialised in degrading abnormal and unfolded protein — which is exactly the category an overexpressed, partly unfolded recombinant product falls into.',
    checklist: ['Proteases attack from the moment of lysis, when compartmentalisation is lost', 'Measure 1: use fresh samples', 'Measure 2: minimise processing time', 'Measure 3: work cold, on ice or in the cold room', 'Measure 4: protease inhibitors', 'Explicit caveat: inhibition is NOT 100 per cent', 'So inhibitors reduce the rate; speed and cold still matter', 'Intrinsically disordered proteins are most vulnerable', 'Why: proteases need an extended segment for the active site', 'Folded proteins bury or constrain their cleavage sites; IDPs do not', 'Links back to BL21(DE3): Lon degrades abnormal/unfolded protein']
  }
},

{
  id: '2-29',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.29',
  enTitle: 'Chromatography fundamentals, and how to read a chromatogram',
  cnTitle: '层析基础，以及怎么读一张层析图',
  slides: 'L4 s.8–10',
  coverage: 'full',
  coverageNote: 'The definition, the two formats, the four universal steps and the fraction labels are on the slides. Diagnosing a run from where the protein ended up is the beyond-the-slides material, and it is the practical skill the labels exist to support.',
  summary: {
    en: 'Chromatography separates the components of a mixture using a mobile phase that flows through a fixed porous stationary phase. It runs in either column format, which gives resolution, or batch format, which suits low-capacity resins and high throughput. Every mode follows the same four steps — equilibrate, bind, wash, elute — and produces the same fraction labels. Reading a run starts with the flow-through, because where your protein ended up tells you which step failed.',
    cn: '层析利用流动相流过固定的多孔固定相来分离混合物中的组分。它有两种形式：柱式，分辨率高；批式，适合结合容量低的树脂和高通量操作。所有模式都遵循同样的四步——平衡、结合、洗涤、洗脱——也产生同样的组分标签。读一次跑柱要从穿透液开始，因为蛋白最后待在哪里，就说明哪一步出了问题。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.8', src: 'img/figures/L4_s08_1.webp' },
    { slide: 'L4 s.8', src: 'img/figures/L4_s08_2.webp' },
    { slide: 'L4 s.9', src: 'img/figures/L4_s09_1.webp' },
    { slide: 'L4 s.9', src: 'img/figures/L4_s09_2.webp' },
    { slide: 'L4 s.10', src: 'img/figures/L4_s10_1.webp' },
    { slide: 'L4 s.10', src: 'img/figures/L4_s10_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**所有层析模式都是同样四步：平衡 → 结合 → 洗涤 → 洗脱。**模式之间只差「靠什么结合」。\n\n' +
            '看结果时**先看穿透液（FT）**：蛋白在 FT 里 = 没结合上；FT 干净但洗脱很少 = 结合上了但下不来。**两者原因完全不同。**',
  skipIt: 'INJ / FT / W / E / C 这些标签本身不用背，看图时对照着认就行。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Chromatography – basic definitions, resins, types** 和 **Batch chromatography – paramagnetic beads**——**基本定义、柱式与批式的区别，都是被点名的**。',
  explain: [
    {
      q: '柱式和批式，除了「一个用柱子一个用管子」，本质差别是什么？',
      a: '**本质差别是：柱式让样品和树脂反复相遇很多次，批式只相遇一次。**\n\n' +
         '**柱式**：样品从上往下流过一整根填满树脂的柱子。一个分子在这个过程中会**不断地结合、松开、往下走一点、再结合**……相当于经历了成千上万次小的分离过程。\n\n' +
         '**这就是「分辨率」的来源。**结合能力只差一点点的两种蛋白，一次相遇分不开，但重复一万次之后就分开了。所以**要分辨率就用柱式**。\n\n' +
         '**批式**：树脂直接倒进装样品的管子里，搅一搅，让它们混在一起结合，然后离心（或者用磁铁）把树脂收下来。**只有一次结合机会。**\n\n' +
         '**那批式好在哪？**\n\n' +
         '**适合结合容量低的树脂**——柱式要求样品流过时来得及结合，容量低的树脂在柱子里「抓不住」；泡在管子里慢慢搅，时间充裕，就抓得住了。\n\n' +
         '**适合高通量和自动化**——磁珠尤其方便：加磁铁吸住、倒掉液体、换缓冲液，整个过程可以在 96 孔板上用机械臂做。**几十个样品并行，柱式做不到。**\n\n' +
         '**所以选择很清楚：要把相似的东西分开 → 柱式；要快速处理很多个样品、或者树脂容量低 → 批式。**',
      takeaway: '柱式让样品反复结合上万次，所以有分辨率；批式只结合一次，胜在容量要求低和能并行。'
    },
    {
      q: '为什么看结果要「先看穿透液」？',
      a: '**因为穿透液把两种完全不同的失败区分开了，而它们的解法南辕北辙。**\n\n' +
         '**情况一：你的蛋白出现在 FT 里 → 它根本没结合上。**\n\n' +
         '常见原因有四个，值得记住：\n\n' +
         '**柱子过载了**——上样量超过了树脂的结合容量，多出来的直接流走。\n\n' +
         '**缓冲液条件不对**——比如离子交换时 pH 不对，蛋白没带上应该带的电荷（第 2-32 节）。\n\n' +
         '**标签被埋起来了**——标签长在蛋白内部或者被折叠挡住，树脂够不着。\n\n' +
         '**树脂被搞坏了**——Ni-NTA 对 EDTA 和还原剂尤其敏感（第 2-30 节）。\n\n' +
         '**情况二：FT 很干净，但洗脱峰很小 → 它结合上了，但下不来。**\n\n' +
         '原因完全不同：洗脱条件不够强、或者蛋白在柱子上**沉淀了/被降解了**。\n\n' +
         '**看出来了吗：同一个症状「最后没拿到蛋白」，背后是两类完全不同的问题。**\n\n' +
         '**如果你不看 FT，就只能瞎猜——而猜错方向会让你把时间花在完全无关的调整上。**\n\n' +
         '**还有情况三：洗脱峰很大但杂带很多** → 结合的特异性不够，**要把洗涤做得更严格**（Ni-NTA 就是在洗涤缓冲液里加 20–40 mM 咪唑）。\n\n' +
         '**所以「跑完柱子每一步都留样跑胶」不是多此一举，那是你唯一的诊断依据。**',
      takeaway: 'FT 区分「没结合上」和「下不来」，两者解法完全不同。所以每一步都要留样跑胶。'
    },
    {
      q: '四步里，「平衡」和「洗涤」为什么容易被当成走过场？',
      a: '**因为它们不产生任何你想要的东西——但它们决定了另外两步能不能成。**\n\n' +
         '**平衡（equilibrate）**：让树脂处在跟你上样缓冲液一致的条件下。\n\n' +
         '如果跳过或者做得不够，树脂上还残留着上一次的缓冲液（可能是高盐、可能是洗脱液、可能是保存用的乙醇）。**样品一上去，前面这一段就处在错误的条件下，你的蛋白直接流走。**——而这会表现成「情况一：蛋白在 FT 里」，你还会以为是别的原因。\n\n' +
         '**洗涤（wash）**：在不洗掉目标的前提下，尽量把杂质冲走。\n\n' +
         '这一步是**纯度的主要来源**。洗得不够 → 杂带多；洗得过头 → 目标也开始流失。**幻灯片给的典型量是 10 个柱体积**，而 Ni-NTA 加 20–40 mM 咪唑就是「提高严格度」的标准做法。\n\n' +
         '**注意「严格度递增」这个写法**：洗涤通常不是一个条件，而是**逐步加严的一系列条件**。这样你可以在跑胶时看到杂质是在哪一档被洗掉的、目标是在哪一档开始流失的——**下次就知道该停在哪里。**\n\n' +
         '**一句话：结合和洗脱决定你拿不拿得到，平衡和洗涤决定你拿到的东西干不干净、以及前两步能不能正常工作。**',
      takeaway: '平衡没做好会表现成「蛋白没结合上」，让你诊断错方向。洗涤是纯度的主要来源，要逐级加严。'
    }
  ],
  points: [
    { term: 'Definition and aim', en: 'A process for separating the components of a mixture. The aim is to enrich or isolate your target from contaminating cellular species.', cn: '一种分离混合物中各组分的过程。目的是把目标蛋白从细胞来源的杂质中富集或分离出来。' },
    { term: 'Mobile phase', en: 'Flows through the packed bed or column, carrying the components with it.', cn: '流过填充床或柱子，带着各组分一起移动。' },
    { term: 'Stationary phase', en: 'A solid, typically a porous resin, membrane or gel, which remains fixed.', cn: '固相，通常是多孔树脂、膜或凝胶，保持固定不动。' },
    { term: 'Column format', en: 'Resin packed in glass or plastic columns with the mobile phase applied by pump or gravity; recovery is by flow through the column. Best for resolution.', cn: '树脂装填在玻璃或塑料柱中，流动相由泵或重力驱动；通过柱子的流动来回收。分辨率最好。' },
    { term: 'Batch format', en: 'Resin mixed with the sample in a beaker or Falcon tube; recovery by centrifugation, or by magnets for magnetic beads. Best for low dynamic binding capacity resins, high throughput and robotics.', cn: '树脂在烧杯或离心管中与样品混合；通过离心回收，磁珠则用磁铁。适合动态结合容量低的树脂、高通量操作和自动化。' },
    { term: 'The four universal steps', en: 'Equilibrate the resin, bind the target, wash away contaminants, elute the target. Every mode follows this sequence.', cn: '平衡树脂、结合目标、洗掉杂质、洗脱目标。所有模式都遵循这个顺序。' },
    { term: 'INJ and FT', en: 'INJ is the injection. FT is the flow-through — everything that did not bind.', cn: 'INJ 是上样。FT 是穿透液——所有没有结合上的东西。' },
    { term: 'W and E', en: 'W is the wash fractions, at increasing buffer stringency, typically 10 column volumes. E1 to E7 are the elution fractions, also typically 10 column volumes.', cn: 'W 是洗涤组分，缓冲液的严格程度递增，通常 10 个柱体积。E1 到 E7 是洗脱组分，也通常是 10 个柱体积。' },
    { term: 'C', en: 'C is the clean step, at the end of the run.', cn: 'C 是清洗步骤，在整个流程的最后。' }
  ],
  beyondPoints: [
    { term: 'Read the flow-through first', en: 'Given a chromatogram and a gel, the first thing to look at is the flow-through, because it separates "did not bind" from "bound but would not come off", and those have completely different causes.', cn: '拿到一张层析图和一块胶，第一件要看的是穿透液，因为它能区分「没结合上」和「结合了但下不来」——这两者的原因完全不同。' },
    { term: 'Target in the flow-through means it did not bind', en: 'Usual causes: the column is overloaded beyond its binding capacity; the buffer conditions are wrong, so the protein does not carry the charge it should; the tag is buried inside the folded protein and inaccessible; or the resin has been damaged — Ni-NTA is especially vulnerable to EDTA and reducing agents.', cn: '常见原因：柱子超载、超过了结合容量；缓冲液条件不对，蛋白没带上该带的电荷；标签被埋在折叠好的蛋白内部够不到；或者树脂被破坏了——Ni-NTA 尤其怕 EDTA 和还原剂。' },
    { term: 'Clean flow-through but a small elution peak', en: 'The protein bound but will not come off, or it precipitated or was degraded while on the column.', cn: '蛋白结合上了但洗不下来，或者在柱上沉淀、降解了。' },
    { term: 'Large elution peak but many contaminant bands', en: 'Binding was not specific enough, so the wash needs to be more stringent — for Ni-NTA that means adding 20 to 40 mM imidazole to the wash buffer.', cn: '结合的特异性不够，需要加强洗涤——对 Ni-NTA 来说就是在洗涤缓冲液里加 20–40 mM 咪唑。' }
  ],
  terms: [
    { en: 'Mobile phase', cn: '流动相', def_en: 'The buffer flowing through the column, carrying sample components past the stationary phase.', def_cn: '流过柱子的缓冲液，带着样品组分经过固定相。' },
    { en: 'Flow-through (FT)', cn: '穿透液', def_en: 'The fraction that passed straight through without binding. The first thing to examine when diagnosing a failed run.', def_cn: '没有结合、直接穿过柱子的组分。诊断失败的跑柱时第一个要检查的东西。' },
    { en: 'Column volume (CV)', cn: '柱体积', def_en: 'The volume of the packed bed, used as the unit for wash and elution steps — typically 10 CV for each.', def_cn: '填充床的体积，用作洗涤和洗脱步骤的单位——两者通常各 10 个柱体积。' },
    { en: 'Batch chromatography', cn: '批式层析', def_en: 'Mixing resin with sample in a vessel and recovering by centrifugation or magnet, rather than packing a column. Suits low-capacity resins and automation.', def_cn: '在容器中把树脂与样品混合，用离心或磁铁回收，而不装柱。适合低容量树脂和自动化操作。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'You load your lysate and find most of the target protein in the flow-through. What does this tell you?',
      q_cn: '上样之后你发现大部分目标蛋白在穿透液里。这说明什么？',
      options: ['It bound but eluted too early', 'It did not bind at all', 'The wash was too stringent', 'The resin capacity was too high'],
      answer: 1,
      optionNotes: {
        2: { en: 'A wash that is too stringent loses protein into the wash fraction, which shows up as a peak after loading has finished. The flow-through is collected while the sample is still going on, before any wash buffer has touched the column, so it can only contain material that never bound.', cn: '洗涤过于严苛，蛋白会丢在 wash 组分里，表现为上样结束之后出现的一个峰。而 flow-through 是在上样进行当中收集的，那时洗涤缓冲液还没碰过柱子，所以里面只可能是从来没结合上去的东西。' }
      },
      why_en: 'The flow-through is by definition what did not bind. Common causes are overloading past the binding capacity, wrong buffer conditions, an inaccessible buried tag, or a damaged resin — for Ni-NTA, EDTA or reducing agents.',
      why_cn: '穿透液按定义就是没结合上的部分。常见原因是超载超过结合容量、缓冲液条件不对、标签被埋住够不到、或者树脂被破坏——对 Ni-NTA 来说就是 EDTA 或还原剂。' },
    { type: 'mcq',
      q_en: 'What are the four universal steps of any chromatography run?',
      q_cn: '任何层析跑柱的四个通用步骤是什么？',
      options: ['Load, spin, wash, resuspend', 'Equilibrate, bind, wash, elute', 'Inject, separate, detect, clean', 'Denature, bind, refold, elute'],
      answer: 1,
      optionRefs: { 3: '2-11' },
      why_en: 'Equilibrate the resin, bind the target, wash away contaminants, elute the target. Every mode — ion exchange, affinity, size exclusion, hydrophobic — follows this same sequence.',
      why_cn: '平衡树脂、结合目标、洗掉杂质、洗脱目标。所有模式——离子交换、亲和、分子排阻、疏水——都遵循同一个顺序。' },
    { type: 'mcq',
      q_en: 'When is batch format preferable to a column?',
      q_cn: '什么时候批式比柱式更合适？',
      options: ['When the highest possible resolution between two closely eluting species is needed', 'For low dynamic binding capacity resins and high-throughput screening', 'Only when the sample volume is far too large for a packed column', 'When the protein is too unstable to survive a column run'],
      answer: 1,
      why_en: 'Columns give resolution. Batch trades that away for simplicity and parallelisation, which suits resins whose binding is slow or weak under flow, and screening many conditions at once.',
      why_cn: '柱式给出分辨率。批式牺牲分辨率换取简便和并行化，适合那些在流动状态下结合慢或结合弱的树脂，也适合一次筛选很多条件。' },
    { type: 'short',
      q_en: 'Your elution peak is large but the gel shows many contaminating bands. What went wrong and how do you fix it?',
      q_cn: '你的洗脱峰很大，但胶上有很多杂带。哪里出了问题？怎么解决？',
      accept: ['wash', 'stringency', 'imidazole', 'specificity', '20-40 mM'],
      answer_en: 'Binding was not specific enough, so contaminants came off together with the target. The protein clearly bound, since the elution peak is large, and the problem is therefore in the wash rather than the load or the elution. The fix is a more stringent wash — increase the buffer stringency across the wash fractions so weakly bound species are removed before you elute. On a Ni-NTA column specifically, that means adding twenty to forty millimolar imidazole to the wash buffer, which displaces host proteins that happen to have surface histidines binding weakly, while a genuine hexahistidine tag binds strongly enough to stay put.',
      answer_cn: '结合的特异性不够，杂蛋白和目标一起被洗脱下来了。蛋白显然是结合上了（洗脱峰很大），所以问题出在洗涤这一步，而不是上样或洗脱。解决办法是加强洗涤——提高各洗涤组分的缓冲液严格程度，让弱结合的物种在洗脱之前就被去掉。具体到 Ni-NTA 柱，就是在洗涤缓冲液里加 20–40 mM 咪唑，把那些表面恰好有组氨酸、弱结合上去的宿主蛋白顶掉，而真正的六聚组氨酸标签结合足够强，能留住。'
    }
  ],
  oral: {
    q_en: 'What is chromatography, and how would you diagnose a run that did not work?',
    q_cn: '什么是层析？一次不成功的跑柱你会怎么诊断？',
    model_en: 'Chromatography is a process for separating the components of a mixture, and in this context the aim is to enrich or isolate your target from contaminating cellular species. There are two phases: a mobile phase, the buffer that flows through carrying the components, and a solid stationary phase, typically a porous resin, membrane or gel, which stays fixed. It runs in two formats. Column format packs the resin into a glass or plastic column with the mobile phase driven by pump or gravity, and it is what you use when you want resolution. Batch format mixes resin with sample in a beaker or Falcon tube and recovers by centrifugation, or by magnets for magnetic beads, and it suits resins with low dynamic binding capacity, high throughput work and robotics. Whichever mode you are running, the sequence is always the same four steps: equilibrate the resin, bind the target, wash away contaminants, elute the target. And the fractions are labelled consistently — INJ for injection, FT for flow-through meaning everything that did not bind, W for the wash fractions at increasing stringency over about ten column volumes, E1 through E7 for elution, and C for the final clean. Diagnosing a failed run starts with the flow-through, because that single question separates two completely different failure modes. If your target is sitting in the flow-through, it did not bind, and the usual causes are overloading past the binding capacity, buffer conditions that leave the protein without the charge it needs, a tag buried inside the folded protein where the resin cannot reach it, or a damaged resin — Ni-NTA is destroyed by EDTA and by reducing agents. If instead the flow-through is clean but the elution peak is small, the protein bound and will not come off, or it precipitated or was degraded on the column. And if the elution peak is large but the gel is full of contaminant bands, binding was not specific enough and the wash needs to be more stringent — on Ni-NTA that means twenty to forty millimolar imidazole in the wash buffer.',
    checklist: ['Separating components of a mixture; enrich the target from contaminants', 'Mobile phase flows; solid porous stationary phase stays fixed', 'Column format: pumps or gravity, best resolution', 'Batch format: beaker or tube, centrifuge or magnet, high throughput', 'Four universal steps: equilibrate, bind, wash, elute', 'Labels: INJ, FT, W (10 CV, increasing stringency), E1-E7, C', 'Diagnose by looking at the flow-through first', 'Target in FT means it did not bind: overload, wrong buffer, buried tag, dead resin', 'Ni-NTA is killed by EDTA and reducing agents', 'Clean FT but small elution: bound and stuck, or precipitated/degraded on column', 'Big elution with contaminants: wash not stringent enough, add 20-40 mM imidazole']
  }
},

{
  id: '2-30',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.30',
  enTitle: 'Resins, and the four things to check before you start',
  cnTitle: '树脂，以及开始之前要检查的四件事',
  slides: 'L4 s.11–12',
  coverage: 'full',
  coverageNote: 'The resin materials, the size/pressure relationship and the four-parameter checklist are on the slides, along with the instruction to read the manufacturer booklet. The two buffer components that destroy a Ni-NTA column are singled out because they are routine lysis buffer ingredients.',
  summary: {
    en: 'Resins are beads of 1 to 200 micrometres, or membranes, made from natural polymers such as agarose and dextran, synthetic polymers, silica for HPLC, or polymer-coated iron oxide for magnetic beads. Smaller particles give higher efficiency but higher back pressure. Before any run, check four things: pressure limits, binding capacity, buffer compatibility and stability. The buffer compatibility one is where people lose columns — Ni-NTA tolerates neither EDTA nor reducing agents.',
    cn: '树脂是 1–200 µm 的珠子或者膜，材质包括琼脂糖和葡聚糖这类天然聚合物、合成聚合物、用于 HPLC 的硅胶，或者磁珠用的聚合物包被氧化铁。颗粒越小效率越高，但背压也越高。开始跑柱之前要检查四件事：压力上限、结合容量、缓冲液兼容性、稳定性。人们通常是在缓冲液兼容性这一条上把柱子搞坏的——Ni-NTA 既不耐 EDTA 也不耐还原剂。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.11', src: 'img/figures/L4_s11_1.webp' },
    { slide: 'L4 s.11', src: 'img/figures/L4_s11_2.webp' },
    { slide: 'L4 s.11', src: 'img/figures/L4_s11_3.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_1.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_2.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_3.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_4.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_5.webp' },
    { slide: 'L4 s.12', src: 'img/figures/L4_s12_6.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '开跑之前查四件事：**压力上限、结合容量、缓冲液兼容性、稳定性**。\n\n' +
            '**人几乎都是栽在第三条上**：**Ni-NTA 既不耐 EDTA 也不耐还原剂**，而这两样恰恰是标准裂解缓冲液的常客。',
  skipIt: 'Dynabeads、聚甲基丙烯酸甲酯这类材料名，以及各种容量数字（0.5–200 mg/mL）不用背。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Chromatography – basic definitions, resins, types**——**树脂这一层是被点名的**，但要记的是那四条检查项的逻辑。',
  explain: [
    {
      q: '为什么 EDTA 和还原剂会毁掉一根镍柱？',
      a: '**因为它们攻击的是柱子上那个真正干活的东西——镍离子本身。**\n\n' +
         '**EDTA 是螯合剂。**它的本职就是牢牢抓住金属离子。样品里有 EDTA，它流过柱子时**把镍离子从树脂上整个剥下来带走**。\n\n' +
         '**症状肉眼可见：柱子从蓝绿色变成白色。**变白了就是没救了（要重新充镍）。\n\n' +
         '**还原剂（DTT、β-巯基乙醇）走的是另一条路**：它们把镍还原、并且自己去配位镍，**同样把柱子毁掉**。\n\n' +
         '**这个坑之所以特别阴，是因为那两样东西都是标准裂解缓冲液的常规成分：**\n\n' +
         '**EDTA 被加进去是为了抑制金属依赖的蛋白酶**（第 2-28 节那件事）。\n\n' +
         '**DTT 被加进去是为了防止半胱氨酸被氧化。**\n\n' +
         '**所以你按标准配方配裂解缓冲液，然后按标准流程上镍柱——两个都对，合起来就是灾难。**\n\n' +
         '**解法：**要么一开始就不加（如果蛋白不需要），要么**上柱前换缓冲液**（透析或脱盐柱）。如果蛋白真的离不开还原剂，**低浓度的 TCEP（≤1 mM）相对能被容忍**——它是另一类还原剂，不那么爱配位金属。\n\n' +
         '**同样的逻辑用在 Streptactin 上：它被生物素毁掉。**而昆虫和哺乳动物培养基里生物素浓度很高，会把所有结合位点占满。**所以那种样品必须先透析。**',
      takeaway: 'EDTA 螯走镍、还原剂还原镍——而两者都是标准裂解液成分。上柱前必须换缓冲液。'
    },
    {
      q: '「颗粒越小效率越高，但背压也越高」——这个取舍怎么理解？',
      a: '**效率来自表面积和扩散距离，背压来自颗粒之间的缝隙。**\n\n' +
         '**为什么小颗粒效率高：**\n\n' +
         '同样体积的树脂，颗粒越小，**总表面积越大**（结合位点更多）；而且蛋白要扩散进颗粒内部的孔道再结合，**颗粒越小，这段路越短，达到平衡越快**。\n\n' +
         '于是分离更锐利、峰更窄——这就是 HPLC 用非常细的硅胶颗粒的原因。\n\n' +
         '**为什么小颗粒背压高：**\n\n' +
         '液体是从颗粒之间的缝隙里流过去的。**颗粒越小，缝隙越细，流动阻力越大**，要推动同样的流速就需要更高的压力。\n\n' +
         '**而这就撞上了第一条检查项：树脂珠子是脆的，压力过高会把它们压碎。**压碎之后颗粒更小、缝隙更细、压力更高——**这是一个正反馈，一旦开始就会很快把柱子彻底堵死。**\n\n' +
         '**所以「快流速树脂（fast-flow resin）」是一类专门做过机械强化的产品**：牺牲一点分辨率，换取能承受更高压力和流速。大规模纯化偏爱它们，因为在那个尺度上**跑得完比分得细更要紧**。\n\n' +
         '**这又是一次「规模改变了什么叫最好」**——跟第 2-21 节的 PEI、第 2-27 节的硫酸铵是同一类判断。',
      takeaway: '小颗粒表面积大、扩散路径短所以分辨率高；缝隙细所以背压高。压碎了会正反馈堵死柱子。'
    },
    {
      q: '「结合容量」为什么要区分静态和动态？',
      a: '**因为你实际用的时候，样品是流过去的，不会停下来等结合。**\n\n' +
         '**静态容量**：把树脂泡在样品里足够久，最终能结合多少。这是理论上限。\n\n' +
         '**动态结合容量（dynamic binding capacity）**：样品**以某个流速流过柱子时**，实际能结合多少。\n\n' +
         '**两者的差距取决于结合速度（on-rate）。**\n\n' +
         '如果结合很快，蛋白流过的那几秒就够它抓住了，动态容量接近静态容量。\n\n' +
         '**如果结合很慢，蛋白还没来得及结合就被冲过去了**——它出现在穿透液里，而你会以为「柱子过载了」，其实是「流速太快了」。\n\n' +
         '**幻灯片点名了谷胱甘肽琼脂糖（glutathione Sepharose）动态容量低**——这就是为什么 GST 融合蛋白常常建议**用批式、或者把流速调得很慢**。\n\n' +
         '**这里也解释了第 2-29 节那句「批式适合动态容量低的树脂」**：泡在管子里搅，时间要多久有多久，**动态容量这个概念就不存在了**，你直接拿到静态容量。\n\n' +
         '**实用推论：蛋白跑到 FT 里去了，除了「过载」和「条件不对」，还要想一想「是不是流得太快了」。**',
      takeaway: '动态容量是「流过去时来得及结合多少」。结合慢的树脂要放慢流速或改用批式。'
    }
  ],
  points: [
    { term: 'Format', en: 'Beads of 1 to 200 micrometres, or membranes. Porous or non-porous.', cn: '1–200 µm 的珠子，或者膜。有多孔和无孔之分。' },
    { term: 'The particle size trade-off', en: 'Small particles give high efficiency, but also high back pressure.', cn: '小颗粒效率高，但背压也高。' },
    { term: 'Natural polymer resins', en: 'Cross-linked agarose, dextran and cellulose.', cn: '交联琼脂糖、葡聚糖和纤维素。' },
    { term: 'Other materials', en: 'Synthetic polymers such as polymethylmethacrylate for smaller biomolecules, silica for HPLC, and polymer-coated iron oxide for magnetic beads such as Dynabeads.', cn: '合成聚合物如聚甲基丙烯酸甲酯用于较小的生物分子，硅胶用于 HPLC，聚合物包被的氧化铁用于 Dynabeads 这类磁珠。' },
    { term: 'Scale', en: 'Typical lab bed volumes are 1 to 100 mL, but the range runs from 1 microlitre micropurification to industrial columns above 10 litres.', cn: '实验室常用的床体积是 1–100 mL，但整个范围从 1 µL 的微量纯化一直到 10 升以上的工业柱。' },
    { term: 'Check 1 — pressure limits', en: 'Beads are fragile and easily destroyed by FPLC or HPLC pressures. Fast-flow resins have higher pressure stability.', cn: '珠子很脆弱，容易被 FPLC 或 HPLC 的压力破坏。Fast-flow 类树脂的耐压性更好。' },
    { term: 'Check 2 — binding capacity', en: 'Milligrams of target per millilitre of resin, ranging from 0.5 to 200. Dynamic binding capacity depends on the on-rate, and is low for glutathione Sepharose.', cn: '每毫升树脂能结合多少毫克目标蛋白，范围 0.5–200。动态结合容量取决于结合速率常数，谷胱甘肽琼脂糖的动态容量很低。' },
    { term: 'Check 3 — buffer compatibility', en: 'Ni-NTA tolerates no reducing agents and no EDTA. Streptactin tolerates no biotin.', cn: 'Ni-NTA 不能有还原剂、不能有 EDTA。Streptactin 不能有生物素。' },
    { term: 'Check 4 — stability', en: 'pH stability, especially for cleaning; SEC columns have a limited pH range; storage in 20 per cent ethanol or 0.01 per cent sodium azide.', cn: 'pH 稳定性，尤其是清洗时；SEC 柱的 pH 范围有限；保存在 20% 乙醇或 0.01% 叠氮钠中。' },
    { term: 'The instruction', en: 'Check the manufacturer recommendations in the booklet.', cn: '查阅厂家说明书里的推荐条件。' }
  ],
  beyondPoints: [
    { term: 'Why EDTA kills a Ni-NTA column', en: 'EDTA is a chelator, so it strips the nickel ions straight off the resin. The column turns white and is finished.', cn: 'EDTA 是螯合剂，会把镍离子直接从树脂上夺走。柱子变白，彻底报废。' },
    { term: 'Why reducing agents do too', en: 'DTT and beta-mercaptoethanol reduce the nickel and coordinate to it, destroying the column by a different route.', cn: 'DTT 和 β-巯基乙醇会还原镍并与之配位，通过另一条途径破坏柱子。' },
    { term: 'The trap is that both are standard lysis buffer components', en: 'EDTA is added to inhibit metal-dependent proteases and DTT to stop cysteines oxidising. So you must exchange the buffer before loading a nickel column, or leave them out from the start. If the protein genuinely needs a reducing agent, low-concentration TCEP at 1 mM or below is relatively tolerated.', cn: '陷阱在于这两样恰恰是裂解缓冲液的常规成分：EDTA 用来抑制金属依赖性蛋白酶，DTT 用来防止半胱氨酸氧化。所以上镍柱之前必须换缓冲液，或者一开始就不加。如果蛋白确实需要还原剂，低浓度 TCEP（≤1 mM）相对可以耐受。' },
    { term: 'The same logic applies to Streptactin', en: 'It is destroyed by biotin, and some media — insect and mammalian in particular — contain high biotin concentrations that will occupy every binding site. Dialyse first.', cn: '同样的逻辑适用于 Streptactin：它怕生物素，而某些培养基（尤其是昆虫和哺乳动物培养基）含高浓度生物素，会把所有结合位点占满。必须先透析。' }
  ],
  terms: [
    { en: 'Dynamic binding capacity', cn: '动态结合容量', def_en: 'Capacity measured under flow rather than at equilibrium. It depends on the association rate constant, so a slow-binding resin like glutathione Sepharose performs worse than its static capacity suggests.', def_cn: '在流动条件下而非平衡条件下测得的容量。它取决于结合速率常数，所以像谷胱甘肽琼脂糖这类结合慢的树脂，实际表现比静态容量所示的更差。' },
    { en: 'Back pressure', cn: '背压', def_en: 'The resistance a packed bed offers to flow. Smaller particles improve resolution but raise back pressure, and can exceed what the resin or system tolerates.', def_cn: '填充床对流动产生的阻力。颗粒越小分辨率越好，但背压越高，可能超过树脂或系统能承受的范围。' },
    { en: 'Chelator', cn: '螯合剂', def_en: 'A molecule such as EDTA that binds metal ions with high affinity. Fatal to immobilised metal affinity resins, whose function depends on retaining those ions.', def_cn: '像 EDTA 这样高亲和力结合金属离子的分子。对固定化金属亲和树脂是致命的，因为后者的功能依赖于保住那些离子。' },
    { en: 'TCEP', cn: 'TCEP 还原剂', def_en: 'A reducing agent relatively tolerated by Ni-NTA at 1 mM or below, used when the protein genuinely requires reducing conditions.', def_cn: '一种在 ≤1 mM 时 Ni-NTA 相对可以耐受的还原剂，用于蛋白确实需要还原环境的情况。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Name two buffer components that will destroy a Ni-NTA column.',
      q_cn: '说出两种会破坏 Ni-NTA 柱的缓冲液成分。',
      options: ['NaCl and glycerol', 'EDTA and reducing agents such as DTT', 'Imidazole and Tris, since both compete for the nickel and strip it from the resin', 'Sodium azide and ethanol'],
      answer: 1,
      optionRefs: { 2: '2-36' },
      optionNotes: {
        3: { en: 'These two are what the column is stored in — 20 per cent ethanol or 0.01 per cent sodium azide — chosen precisely because they preserve the resin without attacking it. They are the preservative, not the hazard; the hazard is anything that takes the metal ion away or reduces it.', cn: '这两样恰恰是柱子的保存液：20% 乙醇或 0.01% 叠氮钠，选它们正是因为它们能保住树脂而不攻击它。它们是防腐剂，不是危险品；真正危险的是那些会把金属离子夺走或还原掉的东西。' }
      },
      why_en: 'EDTA chelates the nickel straight off the resin, turning the column white. DTT and beta-mercaptoethanol reduce and coordinate the nickel. Both are routine lysis buffer components, which is what makes this a trap.',
      why_cn: 'EDTA 把镍直接螯合走，柱子变白。DTT 和 β-巯基乙醇会还原镍并与之配位。这两样都是裂解缓冲液的常规成分，这正是它成为陷阱的原因。' },
    { type: 'mcq',
      q_en: 'Why do smaller resin particles create a trade-off?',
      q_cn: '为什么更小的树脂颗粒会带来一个权衡？',
      options: ['They bind less protein because the smaller beads offer less total surface area', 'They give higher efficiency but higher back pressure', 'They cannot be packed into columns', 'They are less chemically stable'],
      answer: 1,
      why_en: 'Smaller particles shorten diffusion paths and sharpen peaks, but they pack more tightly and resist flow, so back pressure rises and can exceed what the fragile beads or the system tolerate.',
      why_cn: '更小的颗粒缩短了扩散路径、让峰更尖锐，但它们堆积得更紧密、阻碍流动，于是背压上升，可能超过脆弱的珠子或整个系统能承受的范围。' },
    { type: 'mcq',
      q_en: 'What does dynamic binding capacity depend on, and which resin is noted as having a low one?',
      q_cn: '动态结合容量取决于什么？哪种树脂被特别指出动态容量低？',
      options: ['The diameter of the beads; Superdex size exclusion resin', 'The association rate constant; glutathione Sepharose', 'The pH stability of the matrix; Ni-NTA agarose', 'The storage conditions of the resin; amylose resin'],
      answer: 1,
      optionNotes: {
        0: { en: 'Superdex is a size-exclusion resin and binds nothing at all, so it has no binding capacity that could be dynamic. Its loading limit is a volume limit, a small percentage of the column volume, which is an entirely different quantity from milligrams bound per millilitre of resin.', cn: 'Superdex 是 size-exclusion 树脂，它根本不结合任何东西，所以谈不上有什么可以「动态」的结合容量。它的上样上限是体积上限，只能占柱体积的百分之几，这跟「每毫升树脂结合多少毫克」完全是两个量。' }
      },
      why_en: 'Under flow there is limited contact time, so a slow on-rate means much of the capacity is never reached. Glutathione Sepharose is specifically flagged for this, which is one reason GST purifications often run in batch.',
      why_cn: '流动状态下接触时间有限，所以结合速率慢就意味着很大一部分容量根本用不上。谷胱甘肽琼脂糖被特别标出这一点，这也是 GST 纯化常用批式操作的原因之一。' },
    { type: 'short',
      q_en: 'Your lysis buffer contains EDTA and 5 mM DTT, and you plan a Ni-NTA step. What is the problem and what are your options?',
      q_cn: '你的裂解缓冲液含 EDTA 和 5 mM DTT，而你打算做 Ni-NTA。问题是什么？有哪些选择？',
      accept: ['chelate', 'strip nickel', 'buffer exchange', 'TCEP', 'omit'],
      answer_en: 'Both components will destroy the column. EDTA is a chelator and will strip the nickel ions straight off the resin, turning it white and finishing it permanently. DTT reduces the nickel and coordinates to it, damaging the column by a different route. The trap is that both are there for good reasons — EDTA to inhibit metal-dependent proteases, DTT to stop cysteines oxidising — so this is a very easy mistake to make. The options are to leave them out of the lysis buffer from the start, or to exchange the buffer before loading. If the protein genuinely requires reducing conditions, low-concentration TCEP at one millimolar or below is relatively tolerated by Ni-NTA and is the usual compromise.',
      answer_cn: '这两个成分都会毁掉柱子。EDTA 是螯合剂，会把镍离子直接从树脂上夺走，柱子变白并永久报废。DTT 会还原镍并与之配位，通过另一条途径破坏柱子。陷阱在于它们的存在都有正当理由——EDTA 抑制金属依赖性蛋白酶，DTT 防止半胱氨酸氧化——所以这个错误非常容易犯。选择是：一开始就不往裂解缓冲液里加，或者上样前先换缓冲液。如果蛋白确实需要还原环境，低浓度 TCEP（≤1 mM）是 Ni-NTA 相对能耐受的，也是通常的折中方案。'
    }
  ],
  oral: {
    q_en: 'What should you check about a resin before running a purification?',
    q_cn: '跑纯化之前应该检查树脂的哪些方面？',
    model_en: 'The instruction on the slide is simply to read the manufacturer booklet, and there are four parameters to look at. First, pressure limits: beads are fragile and easily destroyed by FPLC or HPLC pressures, and this interacts with particle size, because smaller particles give higher efficiency but also higher back pressure. Fast-flow resins are formulated for better pressure stability. Second, binding capacity, expressed as milligrams of target per millilitre of resin and ranging from about half a milligram to two hundred. The important subtlety is that dynamic binding capacity — capacity under flow — depends on the association rate constant, and is specifically low for glutathione Sepharose, so a slow-binding resin underperforms its static figure. Third, buffer compatibility, and this is where people actually lose columns. Ni-NTA tolerates neither EDTA nor reducing agents: EDTA is a chelator and strips the nickel straight off the resin, turning the column white and finishing it, while DTT or beta-mercaptoethanol reduce the nickel and coordinate to it. What makes this a genuine trap is that both are standard lysis buffer components — EDTA to inhibit metal-dependent proteases, DTT to keep cysteines reduced — so you must either leave them out from the start or exchange the buffer before loading, and if the protein really needs reducing conditions, TCEP at one millimolar or below is relatively tolerated. The same logic applies to Streptactin, which is blocked by biotin, and insect and mammalian media contain enough biotin to occupy every site, so those need dialysis first. Fourth, stability: pH range, especially during cleaning, since SEC columns in particular have a limited pH tolerance, and storage conditions, normally twenty per cent ethanol or point-oh-one per cent sodium azide.',
    checklist: ['Read the manufacturer booklet — four parameters', 'Beads 1-200 µm or membranes; porous or non-porous', 'Materials: agarose/dextran/cellulose, synthetic polymers, silica, iron oxide', 'Small particles: higher efficiency, higher back pressure', 'Check 1 pressure: beads fragile; fast-flow resins tolerate more', 'Check 2 capacity: 0.5-200 mg/mL; dynamic capacity depends on on-rate', 'Glutathione Sepharose specifically has low dynamic capacity', 'Check 3 buffers: Ni-NTA no EDTA, no reducing agents; Streptactin no biotin', 'EDTA chelates nickel off the resin; DTT reduces and coordinates it', 'Both are routine lysis buffer components — the real trap', 'TCEP at 1 mM or below is the compromise if reduction is needed', 'Check 4 stability: pH range, SEC limited, store in 20% ethanol or azide']
  }
},

{
  id: '2-31',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.31',
  enTitle: 'The five chromatography modes',
  cnTitle: '五种层析模式',
  slides: 'L4 s.13',
  coverage: 'full',
  coverageNote: 'A single slide, kept as its own node because it is the index for the six that follow. The observation that two different modes both separate by hydrophobicity — and differ in whether they denature — is the thing worth carrying forward.',
  summary: {
    en: 'Five modes, distinguished by the property they exploit. Ion exchange separates by charge, affinity by specific binding, size exclusion by size and shape, and both hydrophobic interaction and reverse phase by hydrophobicity. That last pair is worth noticing immediately: two modes share a separation principle but differ completely in whether the protein survives, which makes them a standard exam comparison.',
    cn: '五种模式，按各自利用的性质区分。离子交换按电荷分离，亲和层析按特异性结合，分子排阻按大小和形状，而疏水相互作用和反相都按疏水性。最后这一对值得立刻注意：两种模式共享同一个分离原理，但在「蛋白能不能活下来」上完全不同，这使它们成为标准的考试对比点。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.13', src: 'img/figures/L4_s13_1.webp' },
    { slide: 'L4 s.13', src: 'img/figures/L4_s13_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '五种模式按「靠什么区分」记：**电荷（IEX）、特异结合（亲和）、大小（SEC）、疏水性（HIC 和 RP）**。\n\n' +
            '**疏水性那一栏有两个，这本身就是考点**：同一个原理，**HIC 保住天然构象，RP 彻底变性**。',
  skipIt: '每种模式下那一长串树脂商品名（Superdex、Sephacryl、DEAE-Sepharose…）不用背，认得出属于哪一类就行。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Chromatography – basic definitions, resins, types**——**五种类型本身是被点名的**。',
  explain: [
    {
      q: '五种模式怎么才能不当成五个孤立的名词？',
      a: '**每一种都对应蛋白的一个性质。列出性质，模式就自己出来了：**\n\n' +
         '**电荷** → 离子交换（IEX）\n\n' +
         '**大小和形状** → 分子排阻（SEC）\n\n' +
         '**疏水性** → 疏水相互作用（HIC）**和**反相（RP）\n\n' +
         '**特异性结合** → 亲和层析\n\n' +
         '**这个排法立刻能看出两件事：**\n\n' +
         '**第一，疏水性那一栏有两个模式。**这不是冗余，是一个必考的对比点（见下一条）。\n\n' +
         '**第二，亲和层析跟其余四个不是一类东西。**电荷、大小、疏水性都是**所有蛋白都有的、程度不同的连续性质**——分离靠的是「程度差异」。而亲和靠的是**有或没有**：带标签的结合，不带的完全不结合。\n\n' +
         '**从「连续变量」变成「二元变量」，这就是亲和层析能一步做到高纯度的根本原因**（第 2-35 节展开）。',
      takeaway: '四种靠连续性质的程度差异，亲和靠有没有。后者是二元的，所以一步就能做到。'
    },
    {
      q: 'HIC 和 RP 共享同一个原理，为什么还要分成两个模式？',
      a: '**因为「蛋白能不能活着出来」这件事，比分离原理更决定你怎么用它。**\n\n' +
         '**HIC**：在**水相 + 高盐**里跑。条件温和，**蛋白保持天然折叠**。\n\n' +
         '**RP**：在 **pH 2 的乙腈 + TFA** 里跑。**这是彻底的变性条件**，跑完的蛋白结构全没了。\n\n' +
         '**所以用途完全分开：**\n\n' +
         '**要拿回有功能的蛋白** → 只能 HIC。这是**制备**用的。\n\n' +
         '**只是要看纯度、要送质谱、或者本来就是短肽** → RP。这是**分析**用的，而且它的分辨率好得多。\n\n' +
         '**这一对是标准的考试对比题**，答的时候三句就够：**同一个分离原理（疏水性）、相反的条件（水相高盐 vs 有机相强酸）、相反的用途（制备 vs 分析）。**\n\n' +
         '顺带一个判据，比记条件更好用：**问问你的样品有没有「结构」可以失去。**\n\n' +
         '球状蛋白有 → 不能用 RP。50 个残基以内的短肽、寡核苷酸、小分子基本没有 → RP 的高分辨率是白捡的。',
      takeaway: '原理相同、条件相反、用途相反。判据是「你的样品有没有结构可失去」。'
    },
    {
      q: '为什么说这五种模式「连位置也不能互换」？',
      a: '**因为它们的结合容量和能上样的体积差得极远，而这决定了谁必须排在前面。**\n\n' +
         '举两个极端：\n\n' +
         '**亲和层析**——容量高，而且**可以上很大的体积**（几百毫升甚至几升的裂解液直接流过去）。\n\n' +
         '**SEC（分子排阻）**——**上样体积必须极小**，通常只有柱体积的百分之几。因为它的分离靠的是分子在柱子里走过的路径长短差异，**样品体积一大，峰就重叠在一起，分辨率直接没了**（第 2-40 节）。\n\n' +
         '**所以顺序是被物理性质定死的：**\n\n' +
         '**体积大、又稀又脏的样品必须先经过一个能吃下它、并且能大幅浓缩它的步骤**（通常是亲和或离子交换），\n\n' +
         '**然后才轮得到 SEC 这种又挑剔又精细的步骤。**\n\n' +
         '把 SEC 放第一步，等于拿一把精密镊子去搬一堆砖——不是效果差，是根本做不了。\n\n' +
         '**这条逻辑在第 2-42 节会被正式写成「捕获 → 中度纯化 → 精修」三段式。**现在先记住这个直觉：**粗的在前，精的在后，因为精的吃不下粗的量。**',
      takeaway: '容量和上样体积差别巨大，所以顺序是被物理定死的：能吃下大体积的排前面，SEC 只能排最后。'
    }
  ],
  points: [
    { term: 'Ion exchange', en: 'Separates by charge. Resins: SP-, CM-, Q- and DEAE-Sepharose.', cn: '按电荷分离。树脂：SP-、CM-、Q-、DEAE-琼脂糖。' },
    { term: 'Affinity', en: 'Separates by specific binding. Resins: Ni-NTA, Streptactin, amylose, glutathione-Sepharose, protein A/G, lectin-Sepharose, streptavidin.', cn: '按特异性结合分离。树脂：Ni-NTA、Streptactin、直链淀粉、谷胱甘肽琼脂糖、protein A/G、凝集素琼脂糖、链霉亲和素。' },
    { term: 'Size exclusion', en: 'Separates by size and shape. Resins: Superdex, Superose, Sephadex, Sephacryl.', cn: '按大小和形状分离。树脂：Superdex、Superose、Sephadex、Sephacryl。' },
    { term: 'Hydrophobic interaction', en: 'Separates by hydrophobicity. Resins: Butyl-, Hexyl- and Phenyl-Sepharose.', cn: '按疏水性分离。树脂：丁基-、己基-、苯基-琼脂糖。' },
    { term: 'Reverse phase', en: 'Also separates by hydrophobicity. Resins: C4, C8 and C18 alkyl chains on silica.', cn: '同样按疏水性分离。树脂：硅胶上的 C4、C8、C18 烷基链。' }
  ],
  beyondPoints: [
    { term: 'Two modes, one principle, opposite consequences', en: 'Hydrophobic interaction and reverse phase both separate by hydrophobicity, but HIC runs in aqueous salt and preserves the native fold, while reverse phase runs in acetonitrile at pH 2 and denatures everything. So HIC is the preparative option for functional protein and reverse phase is for analysis and short peptides.', cn: '疏水层析和反相都按疏水性分离，但 HIC 在水相盐溶液中进行、保留天然构象，而反相在 pH 2 的乙腈中进行、把一切都变性。所以 HIC 是制备有功能蛋白的选项，反相则用于分析和小肽。' },
    { term: 'The modes are not interchangeable in position either', en: 'Capacity and load volume differ enormously between them, which is what fixes their order in a purification train — a point developed later.', cn: '这些模式在流程中的位置也不能互换：它们的容量和上样体积差别极大，这决定了纯化流程中的先后顺序——这一点后面会展开。' }
  ],
  terms: [
    { en: 'Ion exchange chromatography (IEX)', cn: '离子交换层析', def_en: 'Separation by net charge, using a charged resin. Requires no tag but is less specific than affinity.', def_cn: '利用带电树脂按净电荷分离。不需要标签，但特异性不如亲和层析。' },
    { en: 'Hydrophobic interaction chromatography (HIC)', cn: '疏水相互作用层析', def_en: 'Separation by surface hydrophobicity under aqueous high-salt conditions, preserving the native fold.', def_cn: '在水相高盐条件下按表面疏水性分离，保留天然构象。' },
    { en: 'Reverse-phase chromatography (RP)', cn: '反相层析', def_en: 'Separation by hydrophobicity on alkyl-functionalised silica using organic solvent gradients. Denaturing, so used for analysis and peptides.', def_cn: '在烷基化硅胶上用有机溶剂梯度按疏水性分离。属于变性条件，因此用于分析和多肽。' },
    { en: 'Size exclusion chromatography (SEC)', cn: '分子排阻层析', def_en: 'Separation by size and shape, using porous beads that small molecules enter and large ones cannot.', def_cn: '利用小分子能进入、大分子进不去的多孔珠子，按大小和形状分离。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which two modes separate by the same physical property?',
      q_cn: '哪两种模式依据同一个物理性质分离？',
      options: ['Ion exchange and affinity', 'Hydrophobic interaction and reverse phase', 'Size exclusion and ion exchange, which both sort proteins by molecular size', 'Affinity and size exclusion'],
      answer: 1,
      why_en: 'Both exploit hydrophobicity. They differ in conditions: HIC uses aqueous high salt and preserves the fold, while reverse phase uses acetonitrile at pH 2 and denatures the protein.',
      why_cn: '两者都利用疏水性。区别在条件：HIC 用水相高盐、保留构象，反相用 pH 2 的乙腈、使蛋白变性。' },
    { type: 'mcq',
      q_en: 'Which resins belong to ion exchange?',
      q_cn: '哪些树脂属于离子交换？',
      options: ['Superdex and Sephacryl', 'SP-, CM-, Q- and DEAE-Sepharose', 'C4, C8 and C18', 'Ni-NTA and Streptactin'],
      answer: 1,
      optionRefs: { 0: '2-40', 2: '2-34', 3: '2-35' },
      why_en: 'SP and CM are cation exchangers (negatively charged), Q and DEAE are anion exchangers (positively charged). Superdex is SEC, C18 is reverse phase, Ni-NTA is affinity.',
      why_cn: 'SP 和 CM 是阳离子交换剂（带负电），Q 和 DEAE 是阴离子交换剂（带正电）。Superdex 属于 SEC，C18 属于反相，Ni-NTA 属于亲和层析。' },
    { type: 'mcq',
      q_en: 'What does affinity chromatography exploit?',
      q_cn: '亲和层析利用的是什么？',
      options: ['The net charge the protein carries at the working pH, and the opposite charge fixed on the resin', 'Specific binding between the target and an immobilised ligand', 'The size and shape of the folded molecule in solution', 'Hydrophobic patches exposed on the surface of the protein'],
      answer: 1,
      optionRefs: { 0: '2-32', 2: '2-40', 3: '2-33' },
      why_en: 'A specific molecular recognition event — a His-tag for nickel, streptavidin for biotin, protein A for an Fc region. This is what makes it the most selective mode and usually the capture step.',
      why_cn: '一个特异的分子识别事件——His 标签识别镍、链霉亲和素识别生物素、protein A 识别 Fc 区。这使它成为选择性最强的模式，通常用作捕获步骤。' },
    { type: 'short',
      q_en: 'Name the five chromatography modes and the property each separates by.',
      q_cn: '说出五种层析模式，以及各自依据的分离性质。',
      accept: ['ion exchange', 'charge', 'affinity', 'size exclusion', 'hydrophobic', 'reverse phase'],
      answer_en: 'Ion exchange separates by charge, using SP, CM, Q and DEAE Sepharose. Affinity separates by specific binding, using resins such as Ni-NTA, Streptactin, amylose, glutathione Sepharose, protein A or G, lectins and streptavidin. Size exclusion separates by size and shape, using Superdex, Superose, Sephadex or Sephacryl. Hydrophobic interaction separates by hydrophobicity, using butyl, hexyl or phenyl Sepharose. And reverse phase also separates by hydrophobicity, using C4, C8 or C18 alkyl chains on silica. The last two are worth flagging as a pair, because they share a separation principle but differ completely in whether the protein remains folded.',
      answer_cn: '离子交换按电荷分离，用 SP、CM、Q、DEAE 琼脂糖。亲和层析按特异性结合分离，用 Ni-NTA、Streptactin、直链淀粉、谷胱甘肽琼脂糖、protein A/G、凝集素、链霉亲和素等树脂。分子排阻按大小和形状分离，用 Superdex、Superose、Sephadex 或 Sephacryl。疏水相互作用按疏水性分离，用丁基、己基或苯基琼脂糖。反相也按疏水性分离，用硅胶上的 C4、C8、C18 烷基链。最后两个值得作为一对特别指出，因为它们共享分离原理，但在蛋白是否保持折叠上完全不同。'
    }
  ],
  oral: {
    q_en: 'What chromatography modes are available, and what does each one separate by?',
    q_cn: '有哪些层析模式？每一种依据什么分离？',
    model_en: 'There are five. Ion exchange separates by net charge, on SP, CM, Q or DEAE Sepharose. Affinity separates by specific binding, and it has the widest range of resins — Ni-NTA, Streptactin, amylose, glutathione Sepharose, protein A and G, lectin Sepharose, streptavidin. Size exclusion separates by size and shape, on Superdex, Superose, Sephadex or Sephacryl. Hydrophobic interaction separates by hydrophobicity, on butyl, hexyl or phenyl Sepharose. And reverse phase separates by hydrophobicity too, on C4, C8 or C18 alkyl chains bonded to silica. The thing I would draw attention to straight away is that last pair, because two modes sharing a separation principle is unusual and the difference between them is not the principle but the conditions. Hydrophobic interaction runs in aqueous buffer at high salt, so the protein stays folded and the mode is genuinely preparative. Reverse phase runs in a gradient of acetonitrile in water at pH two with trifluoroacetic acid, which is thoroughly denaturing — so it is used for analysis, for mass spectrometry sample preparation and for short peptides, but not for recovering functional protein. That contrast comes up repeatedly. The other thing worth saying at this point is that the modes are not interchangeable in position within a purification either, because their capacities and permissible load volumes differ by orders of magnitude, and that is what fixes the order in which you run them.',
    checklist: ['Five modes total', 'Ion exchange: charge; SP, CM, Q, DEAE Sepharose', 'Affinity: specific binding; Ni-NTA, Streptactin, amylose, glutathione, protein A/G, lectins', 'Size exclusion: size and shape; Superdex, Superose, Sephadex, Sephacryl', 'Hydrophobic interaction: hydrophobicity; butyl, hexyl, phenyl Sepharose', 'Reverse phase: hydrophobicity; C4, C8, C18 on silica', 'HIC and RP share a principle but differ in conditions', 'HIC is aqueous and preserves the fold; RP is denaturing', 'RP therefore for analysis and peptides, not functional protein', 'Capacities differ hugely, which fixes their order in a purification train']
  }
},

{
  id: '2-32',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.32',
  enTitle: 'Ion-exchange chromatography',
  cnTitle: '离子交换层析',
  slides: 'L4 s.14–15',
  coverage: 'full',
  coverageNote: 'The ANEX/CATEX table and the elution strategies are on the slides. The single rule that generates the whole table — pH above pI means negative — is added, because it lets you reconstruct every row instead of memorising four.',
  summary: {
    en: 'Ion exchange separates by overall charge and needs no tag, but is correspondingly less specific than affinity. A protein is negative above its isoelectric point and positive below it, and that one rule generates everything else: anion exchangers such as Q and DEAE are positively charged and bind negative protein at pH above the pI, while cation exchangers such as SP and CM are negatively charged and bind positive protein at pH below the pI. Elution is by raising ionic strength, or step-wise by pH.',
    cn: '离子交换按总电荷分离，不需要标签，但特异性相应地不如亲和层析。蛋白在等电点以上带负电、以下带正电，这一条规则就能推出其余全部：阴离子交换剂（如 Q 和 DEAE）带正电，在 pH 高于 pI 时结合带负电的蛋白；阳离子交换剂（如 SP 和 CM）带负电，在 pH 低于 pI 时结合带正电的蛋白。洗脱靠提高离子强度，或者用阶梯式 pH。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.15', src: 'img/figures/L4_s15_1.webp' },
    { slide: 'L4 s.15', src: 'img/figures/L4_s15_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**一条规则推出全部：pH 高于 pI，蛋白带负电；低于 pI，带正电。**\n\n' +
            '于是：要结合带正电的**阴离子交换剂（Q、DEAE）→ pH 要高于 pI**；要结合带负电的**阳离子交换剂（SP、CM）→ pH 要低于 pI**。',
  skipIt: 'Q / DEAE / SP / CM 这四个缩写本身不必死背（记住「Q 和 DEAE 是一伙、SP 和 CM 是一伙」即可）。老师在第 5 讲开头给第 4 讲做 RECAP 时写了 **Ion-exchange chromatography**——**这一节是被点名的**，那条 pH 与 pI 的规则必须能当场推。',
  explain: [
    {
      q: '「pH 高于 pI 就带负电」——有没有办法一次记牢不再搞反？',
      a: '**把 pH 想成「质子的多少」，方向就固定了。**\n\n' +
         'pH **高** = 溶液里质子**少** = 环境偏碱 = **蛋白身上的质子被拉走** = 蛋白**带负电**。\n\n' +
         'pH **低** = 质子**多** = 环境偏酸 = **质子被塞给蛋白** = 蛋白**带正电**。\n\n' +
         '**pI 就是不多不少、净电荷为零的那个点**（第 1-2-1 节讲 Glargine 时已经用过这个概念）。\n\n' +
         '**记住这一条之后，剩下的全是自动的：**\n\n' +
         '**阴离子交换剂（ANEX：Q、DEAE）本身带正电** → 它要抓的是**负电的**蛋白 → 所以 **pH 要高于 pI**。\n\n' +
         '**阳离子交换剂（CATEX：SP、CM）本身带负电** → 它要抓**正电的**蛋白 → 所以 **pH 要低于 pI**。\n\n' +
         '**注意一个容易混的记号：交换剂的名字是按它「交换什么离子」取的，不是按它自己带什么电。**「阴离子交换剂」的意思是「它身上挂着可以被交换掉的阴离子」，所以**它自己是带正电的**。这个反直觉的命名是这一节最常见的翻车点——**先想「它要抓什么电荷的蛋白」，再倒推名字。**',
      takeaway: 'pH 高 = 质子少 = 蛋白变负。交换剂的名字指它交换什么离子，所以阴离子交换剂自己带正电。'
    },
    {
      q: '为什么要「离 pI 大约一个 pH 单位」，不是越远越好？',
      a: '**因为两头都会出问题，这是一个「够用就好」的参数。**\n\n' +
         '**离得太近**（比如只差 0.2）：蛋白的净电荷太小，**结合太弱**——上样时就被冲走了，出现在穿透液里（第 2-29 节情况一）。\n\n' +
         '**离得太远**（比如差 3 个单位）：你的蛋白确实带上了很强的电荷，结合很牢。**但杂蛋白也是。**\n\n' +
         '**关键在于：大多数蛋白的 pI 集中在 5–7 这个区间。**你把 pH 推得离自己的 pI 越远，就有越多的杂蛋白同时满足「带上了相反电荷」这个条件，**跟着一起结合上来**。\n\n' +
         '**所以离子交换的特异性是靠「精确地卡在一个窗口里」得到的**，不是靠把条件推到极端。\n\n' +
         '**这也正好解释了这一节开头那句「不需要标签，但特异性不如亲和层析」：**\n\n' +
         '电荷是**所有蛋白都有的连续性质**，你只能挑一个让自己的蛋白结合、而尽量多的杂蛋白不结合的窗口——**永远做不到只有你的蛋白结合**。而亲和层析靠的是「有没有标签」这个二元判据，没有这个问题。',
      takeaway: '太近结合不牢，太远杂蛋白也上来。因为大多数蛋白 pI 挤在 5–7，所以要卡窗口而不是推极端。'
    },
    {
      q: '盐洗脱为什么「自带分辨率」？',
      a: '**因为盐是竞争性地屏蔽电荷，而不同蛋白的结合强度不同。**\n\n' +
         '加盐之后，盐离子会**挤到蛋白和树脂之间，把静电吸引屏蔽掉**。\n\n' +
         '**关键是这个屏蔽是渐进的：**盐浓度慢慢升高时，**结合最弱的那些先被挤下来**，结合最强的最后才下来。\n\n' +
         '**所以一个盐梯度是边洗脱边分离的**——你收到的不同管里装着不同的蛋白，而不是「所有东西一起下来」。\n\n' +
         '**这跟亲和层析的洗脱形成鲜明对比：**那边通常是加入竞争配体（比如咪唑），把所有结合上去的东西**一次性全放下来**。亲和的选择性发生在**结合**那一步，离子交换的选择性可以发生在**洗脱**这一步。\n\n' +
         '**实用推论：跑离子交换时，值得用梯度而不是一步到位的高盐**，因为梯度免费送你一次额外的分离。而且从洗脱曲线上你还能读出你的蛋白结合强度如何——下次就知道该把条件往哪调。\n\n' +
         '（pH 梯度理论上也能洗脱，但幻灯片说得很实在：**线性 pH 梯度很难做出来**，所以实践中用阶梯式。）',
      takeaway: '盐渐进屏蔽电荷，结合弱的先下来，所以梯度洗脱边洗边分。亲和层析的选择性只在结合那一步。'
    },
    {
      q: 'pI 怎么知道？计算值靠谱吗？',
      a: '**两条路，而且它们的可靠性不一样。**\n\n' +
         '**等电聚焦（IEF）实测**：把蛋白放在一个 pH 梯度凝胶里通电，它会一直移动到自己净电荷为零的那个位置就停下——**停在哪里，pI 就是多少**。这是实测值。\n\n' +
         '**从序列计算**（Expasy ProtParam）：数一数序列里有多少 Arg、Lys（正）和 Asp、Glu（负），按各自的 pKa 算出净电荷随 pH 的变化曲线，找零点。\n\n' +
         '**计算值的局限在于：它只数数目，不管位置。**\n\n' +
         '真实的蛋白折叠起来之后，**有些可解离残基埋在内部**（对表面电荷没贡献），有些**互相靠得很近影响了彼此的 pKa**。所以实际行为可能跟计算值有明显偏差。\n\n' +
         '**实用做法：用计算值定一个起点，然后实测。**\n\n' +
         '具体就是：算出理论 pI，据此选阴离子还是阳离子交换、以及 pH 定在哪；然后**做一个小规模试验，取几个 pH 各上一点样，看哪个条件下蛋白留在柱子上**。半天就能定下来，比纠结计算值准不准有用得多。\n\n' +
         '**这又是第 2-3 节那句「每个蛋白都有自己的脾气」——理论给起点，实测给答案。**',
      takeaway: 'ProtParam 只数残基数目，不管哪些埋在内部。所以用计算值定起点，用几个 pH 的小试验定答案。'
    }
  ],
  points: [
    { term: 'What it separates by', en: 'Overall charge. No tags are needed, but it is less specific than affinity chromatography.', cn: '按总电荷分离。不需要标签，但特异性不如亲和层析。' },
    { term: 'The charged residues', en: 'Arg and Lys carry positive charge; Asp and Glu carry negative charge, at physiological pH 7.4.', cn: '在生理 pH 7.4 下，Arg 和 Lys 带正电，Asp 和 Glu 带负电。' },
    { term: 'What determines net charge', en: 'The amino acid composition together with the buffer pH — so you control it by choosing the buffer.', cn: '由氨基酸组成和缓冲液 pH 共同决定——所以你通过选择缓冲液来控制它。' },
    { term: 'Isoelectric point', en: 'The pH at which the net charge is zero. Measured by isoelectric focusing, or calculated from sequence with Expasy ProtParam.', cn: '净电荷为零时的 pH。可以用等电聚焦测定，也可以用 Expasy ProtParam 从序列计算。' },
    { term: 'Anion exchange (ANEX)', en: 'Positively charged resin binding negatively charged proteins, at pH above the pI. Q-Sepharose and DEAE-Sepharose.', cn: '带正电的树脂，结合带负电的蛋白，pH 高于 pI。Q-琼脂糖和 DEAE-琼脂糖。' },
    { term: 'Cation exchange (CATEX)', en: 'Negatively charged resin binding positively charged proteins, at pH below the pI. SP-Sepharose and CM-Sepharose.', cn: '带负电的树脂，结合带正电的蛋白，pH 低于 pI。SP-琼脂糖和 CM-琼脂糖。' },
    { term: 'Elution by salt', en: 'Increase the ionic strength.', cn: '提高离子强度。' },
    { term: 'Elution by pH', en: 'A pH gradient is possible but difficult to form linearly, so step-wise elution is used instead.', cn: 'pH 梯度是可行的，但很难做成线性的，所以实际用阶梯式洗脱。' }
  ],
  beyondPoints: [
    { term: 'The one rule you need', en: 'pH above pI means the protein is negative; pH below pI means it is positive. A way to remember it: pH higher than pI means the environment is more basic, protons are pulled off, and the protein goes negative.', cn: 'pH 高于 pI，蛋白带负电；pH 低于 pI，蛋白带正电。记忆法：pH 比 pI 高说明环境偏碱，质子被夺走，蛋白就「负」了。' },
    { term: 'Everything follows from it', en: 'To bind an anion exchanger — Q or DEAE, positively charged — the protein must be negative, so you need pH above pI. To bind a cation exchanger — SP or CM, negatively charged — the protein must be positive, so pH below pI.', cn: '由此推出：要结合阴离子交换柱（Q、DEAE，带正电），蛋白必须带负电，所以需要 pH > pI。要结合阳离子交换柱（SP、CM，带负电），蛋白必须带正电，所以 pH < pI。' },
    { term: 'How far from the pI', en: 'In practice, about one pH unit away. Too close to the pI and the charge is insufficient, so binding is weak; too far and contaminating proteins bind as well.', cn: '实践中大约取 pI ± 1 个 pH 单位。离 pI 太近电荷不足，结合太弱；离得太远，杂蛋白也会一起结合上来。' },
    { term: 'Why salt elution has resolving power built in', en: 'Salt ions competitively shield the charges, so the most weakly bound species come off first. A salt gradient therefore separates as it elutes, rather than simply releasing everything at once.', cn: '盐离子竞争性地屏蔽电荷，所以结合最弱的先被洗下来。因此盐梯度洗脱本身就带有分辨能力，而不是把所有东西一次性放掉。' }
  ],
  terms: [
    { en: 'Isoelectric point (pI)', cn: '等电点', def_en: 'The pH at which a protein carries no net charge. Above it the protein is negative, below it positive — the single fact that determines which exchanger to use.', def_cn: '蛋白净电荷为零时的 pH。高于它蛋白带负电，低于它带正电——这一个事实就决定了该用哪种交换剂。' },
    { en: 'Anion exchanger (ANEX)', cn: '阴离子交换剂', def_en: 'A positively charged resin that binds negatively charged proteins, used at pH above the target pI. Q-Sepharose and DEAE-Sepharose.', def_cn: '带正电的树脂，结合带负电的蛋白，在 pH 高于目标 pI 时使用。Q-琼脂糖和 DEAE-琼脂糖。' },
    { en: 'Cation exchanger (CATEX)', cn: '阳离子交换剂', def_en: 'A negatively charged resin that binds positively charged proteins, used at pH below the target pI. SP-Sepharose and CM-Sepharose.', def_cn: '带负电的树脂，结合带正电的蛋白，在 pH 低于目标 pI 时使用。SP-琼脂糖和 CM-琼脂糖。' },
    { en: 'Isoelectric focusing', cn: '等电聚焦', def_en: 'An electrophoretic method that resolves proteins along a pH gradient until each reaches the pH where its net charge is zero, thereby measuring the pI.', def_cn: '一种电泳方法，让蛋白在 pH 梯度中移动直到到达净电荷为零的 pH，从而测定等电点。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'At what pH, relative to its pI, does a protein bind a Q-Sepharose column?',
      q_cn: '蛋白在相对于其 pI 的什么 pH 下会结合 Q-琼脂糖柱？',
      options: ['pH below the pI', 'pH above the pI', 'pH equal to the pI', 'pH is irrelevant'],
      answer: 1,
      optionNotes: {
        0: { en: 'pH below the pI is the condition for a cation exchanger such as SP or CM, where the protein must be positive. The naming is the trap: an exchanger is named for the ion it exchanges, so an anion exchanger is itself positively charged and needs a negatively charged protein.', cn: 'pH 低于 pI 是阳离子交换剂（SP、CM）的条件，那时蛋白必须带正电。命名是这里的陷阱：交换剂是按「它交换什么离子」命名的，所以阴离子交换剂自己带正电，要抓的是带负电的蛋白。' }
      },
      why_en: 'Q-Sepharose is an anion exchanger and is positively charged, so it binds negatively charged protein. A protein is negative above its pI, so you need pH above pI — in practice about one unit above.',
      why_cn: 'Q-琼脂糖是阴离子交换剂、带正电，所以结合带负电的蛋白。蛋白在 pI 以上带负电，所以需要 pH > pI——实践中大约高 1 个单位。' },
    { type: 'mcq',
      q_en: 'Why does a salt gradient give resolution rather than releasing everything at once?',
      q_cn: '为什么盐梯度能给出分辨率，而不是把所有东西一次性放掉？',
      options: ['Salt unfolds the contaminating proteins before it reaches the target', 'It screens the charge interaction, so weakly bound species elute first', 'Rising salt lowers the buffer pH progressively along the gradient', 'Salt shrinks the resin beads, squeezing the protein off by size'],
      answer: 1,
      optionNotes: {
        2: { en: 'Salt gradients and pH gradients are two separate elution strategies in this node, and this option merges them. NaCl is a neutral salt and leaves the buffer pH where it was. What rises is ionic strength, which screens the interaction rather than changing the charge on the protein.', cn: '盐梯度和 pH 梯度是这一节里两种分开的洗脱策略，这个选项把它们合并了。NaCl 是中性盐，不会移动缓冲液的 pH。升上去的是离子强度，它屏蔽的是相互作用本身，而不是去改变蛋白身上的电荷。' }
      },
      why_en: 'Increasing ionic strength screens the electrostatic interaction progressively, so species are released in order of binding strength. That ordering is what makes gradient elution a separation and not just a release.',
      why_cn: '离子强度逐渐升高会逐步屏蔽静电相互作用，于是各物种按结合强度顺序被释放。正是这个顺序让梯度洗脱成为一次分离，而不只是一次释放。' },
    { type: 'mcq',
      q_en: 'Why is step-wise rather than linear pH elution used in practice?',
      q_cn: '为什么实践中用阶梯式而不是线性 pH 洗脱？',
      options: ['Linear pH gradients are difficult to form', 'pH gradients denature proteins', 'Step-wise gives better resolution', 'pH does not affect binding once the protein is loaded onto the resin'],
      answer: 0,
      optionNotes: {
        2: { en: 'Resolution is what you give up by going step-wise. A linear gradient releases species in order of binding strength, whereas one step releases everything above that threshold together. Step-wise pH elution is used despite being the worse separation, purely because a linear pH gradient cannot be formed reproducibly.', cn: '分辨率恰恰是走阶梯式所牺牲掉的东西。线性梯度按结合强度顺序把各组分依次放下来，而一个阶梯是把阈值以上的东西一次性全放掉。阶梯式 pH 洗脱是在明知分离更差的情况下仍被采用的，纯粹因为线性 pH 梯度做不出可重复的。' }
      },
      why_en: 'Buffering makes a linear pH gradient hard to generate reproducibly across a column, so discrete steps are used instead. Salt gradients do not have this problem, which is why they are the default.',
      why_cn: '缓冲作用使得在整根柱子上可重复地形成线性 pH 梯度很困难，所以改用离散的阶梯。盐梯度没有这个问题，这就是它成为默认选择的原因。' },
    { type: 'short',
      q_en: 'Your protein has a pI of 5.0. Which exchanger would you use and at what pH, and how do you derive that?',
      q_cn: '你的蛋白 pI 是 5.0。你会用哪种交换剂、在什么 pH 下？你怎么推出来的？',
      accept: ['anion', 'Q', 'DEAE', 'pH above pI', 'negative', '6'],
      answer_en: 'An anion exchanger — Q-Sepharose or DEAE-Sepharose — at around pH six, one unit above the pI. The derivation is one rule: a protein is negatively charged at pH above its pI, because the more basic environment strips protons off. At pH six a protein with pI five is therefore negative, and an anion exchanger is positively charged, so it will bind. The choice of one unit above rather than further is a compromise: too close to the pI and the net charge is too small for strong binding, too far and contaminating proteins acquire enough charge to bind as well. Elution would then be by increasing salt, which competitively shields the charges and releases the most weakly bound species first, so the gradient separates as it elutes.',
      answer_cn: '用阴离子交换剂——Q-琼脂糖或 DEAE-琼脂糖——在 pH 6 左右，比 pI 高一个单位。推导只需要一条规则：蛋白在 pH 高于 pI 时带负电，因为偏碱的环境把质子夺走了。所以 pI 为 5 的蛋白在 pH 6 时带负电，而阴离子交换剂带正电，就会结合上去。选高一个单位而不是更远，是一个折中：离 pI 太近净电荷太小、结合不牢，离得太远则杂蛋白也带上足够电荷跟着结合。洗脱用递增的盐，盐竞争性地屏蔽电荷、先释放结合最弱的物种，所以梯度在洗脱的同时完成分离。'
    }
  ],
  oral: {
    q_en: 'Explain ion-exchange chromatography and how you would set one up.',
    q_cn: '解释离子交换层析，以及你会怎么设置一次跑柱。',
    model_en: 'Ion exchange separates proteins by their overall charge. Its attraction is that it needs no tag at all, and its limitation is that it is correspondingly less specific than affinity. The charge comes from arginine and lysine on the positive side and aspartate and glutamate on the negative, and the net charge depends on both the amino acid composition and the buffer pH — which means you control it. The key quantity is the isoelectric point, the pH at which net charge is zero, which you can measure by isoelectric focusing or simply calculate from the sequence using Expasy ProtParam. Then everything follows from a single rule: above the pI a protein is negatively charged, below it positively charged. A way to remember it is that pH above pI means a more basic environment, protons are pulled off, and the protein goes negative. From that rule you can reconstruct the whole table rather than memorising it. To bind an anion exchanger — Q-Sepharose or DEAE-Sepharose, which are positively charged — the protein must be negative, so you work at pH above the pI. To bind a cation exchanger — SP-Sepharose or CM-Sepharose, which are negatively charged — the protein must be positive, so pH below the pI. In practice you go about one pH unit away from the pI, because too close and the net charge is too small for strong binding, while too far and contaminating proteins pick up enough charge to bind as well. For elution you increase the ionic strength. That is worth explaining rather than just stating, because salt ions competitively shield the charges, so the most weakly bound species come off first and a salt gradient therefore separates as it elutes. A pH gradient also works in principle, but linear pH gradients are difficult to form, so step-wise pH elution is used when it is used at all.',
    checklist: ['Separates by overall charge; no tag needed, less specific than affinity', 'Positive residues Arg and Lys; negative Asp and Glu', 'Net charge depends on composition AND buffer pH', 'pI = pH of zero net charge; measure by IEF or calculate in ProtParam', 'The one rule: pH above pI means negative, below means positive', 'ANEX (Q, DEAE) is positive, binds negative protein, so pH > pI', 'CATEX (SP, CM) is negative, binds positive protein, so pH < pI', 'Work about one pH unit from the pI', 'Too close: weak binding. Too far: contaminants bind too', 'Elute with salt: shields charge, weakest binder first, so gradient resolves', 'pH elution possible but linear gradients are hard, so step-wise']
  }
},

{
  id: '2-33',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.33',
  enTitle: 'Hydrophobic interaction chromatography',
  cnTitle: '疏水相互作用层析',
  slides: 'L4 s.16',
  coverage: 'full',
  coverageNote: 'The salt conditions are on the slide. Why they are the exact inverse of ion exchange is the beyond-the-slides part, and it is one of the most frequently examined contrasts in this lecture — with a practical consequence for the order of a purification train.',
  summary: {
    en: 'HIC separates by hydrophobicity, exploiting the nonpolar residues alanine, valine, methionine, leucine, isoleucine, phenylalanine and tryptophan. The conditions are the exact inverse of ion exchange: binding happens at high salt, 1 to 2 molar ammonium acetate or 3 molar sodium chloride, and elution at low salt, around 50 millimolar. The reason is that high salt strips the hydration shell from the protein surface, forcing the hydrophobic patches into contact with the resin.',
    cn: 'HIC 按疏水性分离，利用的是丙氨酸、缬氨酸、甲硫氨酸、亮氨酸、异亮氨酸、苯丙氨酸和色氨酸这些非极性残基。条件与离子交换正好相反：高盐结合（1–2 M 醋酸铵或 3 M 氯化钠），低盐洗脱（约 50 mM）。原因是高盐夺走蛋白表面的水化层，把疏水区块「逼」出来与树脂接触。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.16', src: 'img/figures/L4_s16_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'HIC 的条件跟离子交换**正好相反**：**高盐结合，低盐洗脱**。\n\n' +
            '原因是高盐**夺走蛋白表面的水化层**，把疏水区块逼出来跟树脂接触。',
  skipIt: '1–2 M 醋酸铵 / 3 M NaCl / 50 mM 这些具体浓度记个「高盐 vs 低盐」的量级就行。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Hydrophobic/reverse phase chromatography**——**这一节是被点名的**，那个盐条件反转必须能解释原因。',
  explain: [
    {
      q: '为什么 HIC 的盐条件跟离子交换正好反过来？',
      a: '**因为盐对这两种作用力的影响方向相反。**\n\n' +
         '**离子交换靠静电吸引，而盐屏蔽电荷。**盐离子挤在蛋白和树脂中间，把吸引力削弱。所以：**低盐结合，高盐洗脱。**\n\n' +
         '**HIC 靠疏水效应，而高盐加强疏水效应。**所以：**高盐结合，低盐洗脱。**\n\n' +
         '**为什么高盐会加强疏水效应？这里要澄清一个常见的误解：**\n\n' +
         '**疏水效应其实是「水的效应」，不是「油互相吸引」。**\n\n' +
         '一个疏水残基暴露在水里时，周围的水分子**被迫排成一圈有序的结构**（因为它们没法跟疏水面形成氢键，只好互相之间排好队）。这种有序是**熵上不利**的——水不喜欢这样。这一圈水就是**水化层**。\n\n' +
         '**现在加入大量盐。**盐离子自己也需要水来溶剂化，**它们把水分子抢走了**。蛋白表面的疏水区块失去了那层水的「包裹」，**暴露了出来**。\n\n' +
         '于是它只好去找另一个疏水面贴合——而树脂上的丁基、己基、苯基正好提供了这样的表面。\n\n' +
         '**所以高盐不是「把蛋白推向树脂」，而是「把保护层拿掉，逼它自己贴上去」。**\n\n' +
         '洗脱时把盐降下来，水化层回来，蛋白就松开了。',
      takeaway: '疏水效应是水的效应。高盐抢走水化层，逼疏水区块暴露、去贴树脂。所以高盐结合、低盐洗脱。'
    },
    {
      q: '「硫酸铵沉淀之后直接上 HIC」——为什么这是个好设计？',
      a: '**因为它省掉了一次换缓冲液，而换缓冲液是纯化里最贵的隐性成本之一。**\n\n' +
         '硫酸铵沉淀（第 2-27 节）之后，你的样品**本来就处在高盐状态**。而 HIC 恰恰需要高盐才能结合。\n\n' +
         '**所以两步天然衔接，中间什么都不用做。**\n\n' +
         '**换成离子交换会怎样？**IEX 要**低盐**才能结合。你必须先透析或者过脱盐柱，把盐降下来——而这一步要**几个小时**，还会**丢材料**、**多一次让蛋白沉淀的机会**（浓度和缓冲条件一变，蛋白就可能析出）。\n\n' +
         '**所以设计纯化路线时，一个核心考虑就是：让前一步的输出条件，尽量就是后一步需要的输入条件。**\n\n' +
         '几个常见的衔接关系值得记：\n\n' +
         '**高盐输出 → HIC**（直接进）。\n\n' +
         '**HIC 洗脱是低盐 → 正好接离子交换**（IEX 要低盐）。\n\n' +
         '**离子交换洗脱是高盐 → 又可以接 HIC，或者接 SEC**（SEC 对盐不敏感，还顺便换掉缓冲液）。\n\n' +
         '**这就是第 2-42 节「怎么排顺序」那一节的核心内容之一**——顺序不只关乎纯度，也关乎有没有多余的换液步骤。',
      takeaway: '前一步的输出条件应该就是后一步的输入条件。每次换缓冲液都要花时间、丢材料、冒沉淀的风险。'
    },
    {
      q: '丁基、己基、苯基三种树脂怎么选？',
      a: '**这是一个匹配问题，不是「越强越好」。**\n\n' +
         '三种树脂的区别在于接上去那个基团的疏水性：**烷基链越长越疏水**（丁基 < 己基），而**苯基提供的是另一种选择性**（芳香环之间的相互作用，跟纯烷基链不完全一样）。\n\n' +
         '**匹配的逻辑：**\n\n' +
         '**你的蛋白表面疏水性强** → 用**弱**的树脂。否则它会粘得太牢，**低盐都洗不下来**——你得用有机溶剂或者去污剂才能把它弄下来，而那时蛋白多半已经变性了。\n\n' +
         '**你的蛋白疏水性弱** → 用**强**的树脂，否则根本结合不上。\n\n' +
         '**苯基**通常当成一个「选择性不同」的备选：有时候丁基和己基都不理想，换苯基反而合适。\n\n' +
         '**实操上的做法很朴素：买一套小柱子，同一个样品各上一点，看哪个的结合-洗脱行为最好。**\n\n' +
         '这跟第 2-32 节确定 pI 的做法是一样的思路：**理论帮你缩小范围，最后一步靠小规模实测。**',
      takeaway: '蛋白疏水就用弱树脂（否则洗不下来），蛋白不疏水就用强树脂。跟 pI 一样，最后靠小试验定。'
    }
  ],
  points: [
    { term: 'What it separates by', en: 'Hydrophobicity of the protein surface.', cn: '蛋白表面的疏水性。' },
    { term: 'The nonpolar residues', en: 'Alanine, valine, methionine, leucine, isoleucine, phenylalanine and tryptophan.', cn: '丙氨酸、缬氨酸、甲硫氨酸、亮氨酸、异亮氨酸、苯丙氨酸、色氨酸。' },
    { term: 'Binding conditions', en: 'High salt — 1 to 2 molar ammonium acetate, or 3 molar sodium chloride.', cn: '高盐——1–2 M 醋酸铵，或 3 M 氯化钠。' },
    { term: 'Elution conditions', en: 'Low salt, for example 50 millimolar sodium chloride.', cn: '低盐，例如 50 mM 氯化钠。' },
    { term: 'The resins', en: 'Butyl-, hexyl- and phenyl-Sepharose, differing in the hydrophobicity of the attached group.', cn: '丁基-、己基-、苯基-琼脂糖，区别在于所接基团的疏水性强弱。' }
  ],
  beyondPoints: [
    { term: 'Why the salt requirement inverts', en: 'Ion exchange works by electrostatic attraction, and salt shields charge — so it binds at low salt and elutes at high salt. HIC works by the hydrophobic effect, and high salt strips the hydration shell from the protein surface, forcing the hydrophobic patches to be exposed to the resin — so it binds at high salt and elutes at low salt.', cn: '离子交换靠静电吸引，而盐会屏蔽电荷——所以低盐结合、高盐洗脱。HIC 靠疏水效应，高盐会夺走蛋白表面的水化层，把疏水区块逼出来暴露给树脂——所以高盐结合、低盐洗脱。' },
    { term: 'The practical consequence', en: 'A sample coming off an ammonium sulfate precipitation is already at high salt, so it can go straight onto a HIC column with no buffer exchange. If the next step were ion exchange instead, you would have to desalt first.', cn: '硫酸铵沉淀之后的样品本来就是高盐的，所以可以直接上 HIC 柱，不需要换缓冲液。如果下一步换成离子交换，就必须先脱盐。' },
    { term: 'This is how purification order is designed', en: 'Choosing the sequence of steps is to a large extent about avoiding unnecessary buffer exchanges, since each one costs time and loses material.', cn: '设计纯化步骤的顺序，很大程度上就是在避免不必要的缓冲液置换，因为每一次置换都费时间、也损失材料。' }
  ],
  terms: [
    { en: 'Hydrophobic effect', cn: '疏水效应', def_en: 'The tendency of nonpolar surfaces to associate in water, driven by the entropy of the surrounding water rather than by attraction between the surfaces.', def_cn: '非极性表面在水中互相聚集的倾向，其驱动力来自周围水的熵变，而不是表面之间的吸引力。' },
    { en: 'Hydration shell', cn: '水化层', def_en: 'The ordered water layer around a protein surface. High salt competes for that water, exposing hydrophobic patches and promoting binding to a HIC resin.', def_cn: '蛋白表面有序排列的水层。高盐与之争夺水分子，从而暴露疏水区块、促进与 HIC 树脂的结合。' },
    { en: 'Ionic strength', cn: '离子强度', def_en: 'A measure of total ion concentration in solution. It weakens electrostatic binding in ion exchange but strengthens hydrophobic binding in HIC.', def_cn: '溶液中总离子浓度的量度。它削弱离子交换中的静电结合，却增强 HIC 中的疏水结合。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Under what conditions does a protein bind a HIC column?',
      q_cn: '蛋白在什么条件下结合 HIC 柱？',
      options: ['Low salt', 'High salt', 'Low pH', 'High pH'],
      answer: 1,
      optionRefs: { 0: '2-32' },
      why_en: 'High salt — 1 to 2 molar ammonium acetate or 3 molar NaCl. Salt strips the hydration shell, exposing hydrophobic surface to the resin. Elution is then by lowering the salt, the exact inverse of ion exchange.',
      why_cn: '高盐——1–2 M 醋酸铵或 3 M NaCl。盐夺走水化层，把疏水表面暴露给树脂。洗脱则靠降低盐浓度，与离子交换正好相反。' },
    { type: 'mcq',
      q_en: 'Why do ion exchange and HIC have opposite salt requirements?',
      q_cn: '为什么离子交换和 HIC 对盐的要求正好相反？',
      options: ['Their resin backbones differ chemically, agarose against silica', 'Salt shields electrostatic attraction but strips the hydration shell', 'High salt precipitates the protein onto the resin, as in salting out', 'The ion exchange column is simply run in the reverse direction'],
      answer: 1,
      why_en: 'The two modes rely on different forces, and salt affects them oppositely. It weakens the charge interaction that ion exchange depends on, and strengthens the hydrophobic interaction that HIC depends on.',
      why_cn: '两种模式依赖不同的作用力，而盐对它们的影响正好相反。它削弱离子交换所依赖的电荷相互作用，却增强 HIC 所依赖的疏水相互作用。' },
    { type: 'mcq',
      q_en: 'A sample has just come off an ammonium sulfate precipitation. Which step can follow with no buffer exchange?',
      q_cn: '一个样品刚做完硫酸铵沉淀。哪一步可以不换缓冲液直接接上？',
      options: ['Ion exchange', 'HIC', 'Size exclusion', 'Reverse phase'],
      answer: 1,
      optionRefs: { 0: '2-32', 2: '2-40', 3: '2-34' },
      why_en: 'The sample is already at high salt, which is exactly what HIC needs for binding. Ion exchange would require desalting first, since salt prevents binding there.',
      why_cn: '样品已经是高盐的，而这正是 HIC 结合所需要的条件。离子交换则必须先脱盐，因为盐在那里会阻止结合。' },
    { type: 'short',
      q_en: 'Ion exchange binds at low salt and elutes at high salt; HIC is the opposite. Explain both, and give one practical consequence.',
      q_cn: '离子交换低盐结合、高盐洗脱，HIC 正好相反。解释两者，并给出一个实际推论。',
      accept: ['shield', 'hydration', 'hydrophobic effect', 'ammonium sulfate', 'buffer exchange'],
      answer_en: 'Ion exchange depends on electrostatic attraction between a charged protein and an oppositely charged resin. Salt ions competitively shield those charges, so binding requires low ionic strength and raising the salt releases the protein — with the weakest binders coming off first, which is why a salt gradient resolves. HIC depends on the hydrophobic effect instead. At high salt the water is drawn away from the protein surface, stripping the hydration shell and exposing hydrophobic patches, which then associate with the resin; lowering the salt restores the hydration shell and releases the protein. The practical consequence is that a sample from an ammonium sulfate precipitation is already at high salt and can be loaded directly onto a HIC column with no buffer exchange, whereas ion exchange would require desalting first. Designing the order of a purification train is largely about arranging steps so that each one leaves the sample in a state the next one can accept.',
      answer_cn: '离子交换依赖带电蛋白与带相反电荷的树脂之间的静电吸引。盐离子竞争性地屏蔽这些电荷，所以结合需要低离子强度，而升高盐浓度就会把蛋白释放出来——结合最弱的先出来，这也是盐梯度能分离的原因。HIC 则依赖疏水效应。高盐时水被夺离蛋白表面，水化层被剥去、疏水区块暴露出来并与树脂结合；降低盐浓度则恢复水化层、把蛋白释放。实际推论是：硫酸铵沉淀后的样品本来就是高盐的，可以直接上 HIC 柱而不需要换缓冲液，而离子交换则必须先脱盐。设计纯化流程的顺序，很大程度上就是安排每一步结束时的样品状态正好是下一步能接受的。'
    }
  ],
  oral: {
    q_en: 'Explain hydrophobic interaction chromatography and how it relates to ion exchange.',
    q_cn: '解释疏水相互作用层析，以及它与离子交换的关系。',
    model_en: 'HIC separates by the hydrophobicity of the protein surface, exploiting the nonpolar residues — alanine, valine, methionine, leucine, isoleucine, phenylalanine and tryptophan — and it runs on butyl, hexyl or phenyl Sepharose, which differ in how hydrophobic the attached group is. The striking thing is the salt conditions, because they are the exact inverse of ion exchange: you bind at high salt, one to two molar ammonium acetate or three molar sodium chloride, and you elute at low salt, around fifty millimolar. That inversion is worth explaining because it is a favourite comparison. Ion exchange depends on electrostatic attraction, and salt ions competitively shield charge, so it binds at low salt and elutes at high. HIC depends on the hydrophobic effect, and high salt draws water away from the protein surface, stripping the hydration shell and forcing the hydrophobic patches into the open where the resin can engage them — so it binds at high salt and elutes when you lower it and let the hydration shell reform. There is a practical consequence worth mentioning, because it shows how a purification is actually designed. A sample coming off an ammonium sulfate precipitation is already at high salt, so it can be loaded straight onto a HIC column with no buffer exchange at all. Had the next step been ion exchange, you would have had to desalt first. Choosing the order of steps in a purification train is to a large extent about arranging things so each step leaves the sample in a condition the next step can accept, because every buffer exchange costs time and loses material.',
    checklist: ['Separates by surface hydrophobicity', 'Nonpolar residues: Ala, Val, Met, Leu, Ile, Phe, Trp', 'Binds at HIGH salt: 1-2 M ammonium acetate or 3 M NaCl', 'Elutes at LOW salt: around 50 mM', 'Resins: butyl, hexyl, phenyl Sepharose', 'Exactly inverse to ion exchange', 'IEX: salt shields charge, so low salt binds', 'HIC: high salt strips the hydration shell, exposing hydrophobic patches', 'Consequence: ammonium sulfate sample loads directly onto HIC', 'Ion exchange would need desalting first', 'Purification order is designed to avoid unnecessary buffer exchanges']
  }
},

{
  id: '2-34',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.34',
  enTitle: 'Reverse-phase chromatography',
  cnTitle: '反相层析',
  slides: 'L4 s.17',
  coverage: 'full',
  coverageNote: 'The conditions, resins and applications are on the slide, including the note that the mobile phase is denaturing. Spelling out what that rules out — and why HIC is the alternative — completes the pair started in the previous node.',
  summary: {
    en: 'Reverse phase separates by hydrophobicity on silica functionalised with C4, C8 or C18 alkyl chains, run on HPLC at very high pressure in metal columns. Resolution is extremely good, but the mobile phase is a gradient of acetonitrile in water at pH 2 with trifluoroacetic acid, which is thoroughly denaturing. So it suits short peptides up to about 50 residues, small organics and oligonucleotides, and is used analytically rather than to recover functional protein.',
    cn: '反相在接了 C4、C8 或 C18 烷基链的硅胶上按疏水性分离，用 HPLC 在很高的压力下、以金属柱运行。分辨率极好，但流动相是 pH 2、含三氟乙酸的乙腈水梯度，这是彻底的变性条件。所以它适合 50 个残基以内的短肽、小分子有机物和寡核苷酸，用于分析而不是回收有功能的蛋白。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.17', src: 'img/figures/L4_s17_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**pH 2 的乙腈 + TFA 是彻底的变性条件**，所以 RP 拿不回有功能的球状蛋白。\n\n' +
            '它换来的是**极好的分辨率**，而对短肽、寡核苷酸、小分子来说，变性**根本不是代价**——它们本来就没有三级结构可失去。',
  skipIt: '0.1% TFA、C4/C8/C18 这些具体参数不用背，记住「变性、分析用、适合短肽」这三条就够。老师在第 5 讲开头给第 4 讲做 RECAP 时写的是 **Hydrophobic/reverse phase chromatography**——**它跟 HIC 的对比是被点名的**。',
  explain: [
    {
      q: '为什么叫「反相」？跟什么反？',
      a: '**这是个历史命名，而且跟蛋白、跟疏水性都没有直接关系——纯粹是记号问题，但不知道就一直会觉得这个词莫名其妙。**\n\n' +
         '它是相对**正相（normal phase）**说的。\n\n' +
         '**早期的层析（也就是「正常」的那种）是：极性固定相 + 非极性流动相。**比如硅胶柱配有机溶剂。在这种配置下，**极性的东西被留住**，非极性的先流出来。\n\n' +
         '**反相把两者调过来：**固定相变成**非极性**的（在硅胶上接 C4、C8、C18 烷基链），流动相变成**极性**的（水 / 乙腈）。\n\n' +
         '**结果是保留顺序整个反过来了：非极性（疏水）的东西被留住，极性的先流出来。**\n\n' +
         '**所以「反相」的意思是「跟当年那个常规配置相反」。**知道这一点之后，C4 / C8 / C18 这几个数字也就好懂了——**那是烷基链上碳原子的个数，链越长越疏水、保留越强。**\n\n' +
         '（顺带一提：现在反相远比正相常用，所以「反」的那个反而成了默认——这类命名在科学里很常见，名字记录的是历史，不是现状。）',
      takeaway: '相对「极性固定相 + 非极性流动相」的旧配置说的。C4/C8/C18 是碳链长度，越长越疏水。'
    },
    {
      q: '明知道会变性，为什么还要用它？',
      a: '**因为对它真正的目标对象来说，变性不是代价。**\n\n' +
         '关键在于问一句：**你的样品有没有结构可以失去？**\n\n' +
         '**一条 50 个残基以内的短肽** —— 本来就没有稳定的三级结构。变性对它毫无意义，**你白白拿到了极好的分辨率**。\n\n' +
         '**寡核苷酸、小分子有机物** —— 同理。\n\n' +
         '**一个球状蛋白** —— 有，而且那正是你要的东西。**用了就毁了。**\n\n' +
         '**所以 RP 的定位是分析，不是制备：**测纯度、给质谱做样品前处理、纯化合成肽。\n\n' +
         '**另外解释一下那些条件各自在干什么：**\n\n' +
         '**乙腈梯度**：从水多到乙腈多，逐步降低流动相的极性，把结合在 C18 上的东西按疏水性依次洗下来。\n\n' +
         '**pH 2 + TFA**：TFA 是**离子对试剂**——它让肽段上的可解离基团处在统一的质子化状态，**电荷状态一致，峰形就锐**。这是分辨率好的原因之一，也是变性的原因之一。\n\n' +
         '**同一个条件同时带来了它的长处和它的禁区。**',
      takeaway: '判据是「样品有没有结构可失去」。短肽没有，所以高分辨率是白捡的；球状蛋白有，所以用了就毁了。'
    },
    {
      q: '为什么非要用 HPLC 和金属柱子？',
      a: '**因为它把第 2-30 节那个「颗粒小则效率高、背压也高」的取舍推到了极端。**\n\n' +
         '回顾一下那条：颗粒越小 → 表面积越大、扩散路径越短 → **分辨率越高**；但颗粒之间的缝隙越细 → **背压越高**。\n\n' +
         '**RP 追求的正是极致的分辨率**，所以它用非常细的硅胶颗粒。\n\n' +
         '**代价是背压高到普通柱子扛不住：**\n\n' +
         '玻璃柱会炸，塑料柱会变形——**所以必须用金属柱**。\n\n' +
         '而推动这个流速需要 HPLC 那样的高压泵，这是一整套专门的硬件。\n\n' +
         '**所以「RP 要配 HPLC」不是习惯，是被物理逼出来的。**\n\n' +
         '**反过来也能推：**为什么常规的蛋白纯化（亲和、离子交换）用琼脂糖珠子、跑在低压的蠕动泵或者 FPLC 上？因为那些珠子又大又软，**根本承受不了高压**（第 2-30 节第一条检查项）。它们换来的是**大容量和温和条件**——正好是制备需要的。\n\n' +
         '**一句话：RP 用硬件换分辨率，制备型层析用分辨率换容量和温和。**',
      takeaway: '极细颗粒换极高分辨率，代价是背压高到只能用金属柱和 HPLC。制备型层析走的是相反的取舍。'
    }
  ],
  points: [
    { term: 'What it suits', en: 'Short peptides up to about 50 amino acids, small organic molecules, and oligonucleotides.', cn: '50 个氨基酸以内的短肽、小分子有机物，以及寡核苷酸。' },
    { term: 'Instrumentation', en: 'Typically run on HPLC, at very high pressures, which requires metal columns.', cn: '通常在 HPLC 上运行，压力很高，因此需要金属柱。' },
    { term: 'Resolution', en: 'Extremely good — this is what justifies using it despite the conditions.', cn: '极好——这正是它尽管条件苛刻仍然值得用的原因。' },
    { term: 'Resins', en: 'Functionalised silica gel, bearing C4, C8 or C18 alkyl chains.', cn: '功能化的硅胶，接有 C4、C8 或 C18 烷基链。' },
    { term: 'Mobile phase', en: 'A gradient of acetonitrile in water at pH 2.0 with 0.1 per cent trifluoroacetic acid — explicitly denaturing conditions.', cn: 'pH 2.0、含 0.1% 三氟乙酸的乙腈水梯度——明确是变性条件。' }
  ],
  beyondPoints: [
    { term: 'What denaturing conditions rule out', en: 'A mobile phase of acetonitrile at pH 2 with TFA unfolds proteins completely. For a short peptide that costs nothing, since it has no tertiary structure to lose, but a globular protein is destroyed by the run.', cn: 'pH 2 的乙腈加三氟乙酸这样的流动相会让蛋白彻底解折叠。对短肽来说没有损失，因为它本来就没有三级结构可失去；但球状蛋白跑一趟就废了。' },
    { term: 'So the role of RP is analytical', en: 'Purity assessment and sample preparation for mass spectrometry, plus peptide purification — not preparation of functional protein.', cn: '所以反相的定位是分析：纯度检定、质谱前处理，以及多肽纯化——而不是制备有功能的蛋白。' },
    { term: 'HIC is the non-denaturing counterpart', en: 'If you want to separate by hydrophobicity and keep the native fold, HIC is the option. The two modes share a principle and differ in whether the protein survives, which is exactly why they are a standard exam comparison.', cn: '如果想按疏水性分离又要保住天然构象，HIC 就是那个选项。这两种模式共享原理、区别在于蛋白能否存活，这正是它们成为标准考试对比的原因。' }
  ],
  terms: [
    { en: 'Trifluoroacetic acid (TFA)', cn: '三氟乙酸', def_en: 'A strong acid added at 0.1 per cent to reverse-phase mobile phases to hold the pH near 2 and sharpen peaks. Part of what makes the conditions denaturing.', def_cn: '以 0.1% 加入反相流动相的强酸，用于把 pH 维持在 2 附近并使峰形更尖锐。它也是这套条件属于变性条件的原因之一。' },
    { en: 'C18 resin', cn: 'C18 树脂', def_en: 'Silica bearing eighteen-carbon alkyl chains, the most hydrophobic of the common reverse-phase supports.', def_cn: '接有 18 碳烷基链的硅胶，是常用反相填料中疏水性最强的。' },
    { en: 'HPLC', cn: '高效液相色谱', def_en: 'High-performance liquid chromatography — small particles at high pressure giving high resolution, requiring metal columns and pressure-tolerant hardware.', def_cn: '高效液相色谱——小颗粒、高压力，分辨率很高，需要金属柱和耐压的硬件。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is reverse phase rarely used to purify functional proteins?',
      q_cn: '为什么反相很少用于纯化有功能的蛋白？',
      options: ['Its resolution is too low to separate closely related species', 'The mobile phase, acetonitrile at pH 2 with TFA, is denaturing', 'The silica matrix has almost no binding capacity for protein', 'It requires the protein to carry a purification tag'],
      answer: 1,
      optionRefs: { 3: '2-35' },
      optionNotes: {
        0: { en: 'Reverse phase has the best resolution of any of these modes — small silica particles run at HPLC pressure is exactly what buys it. What rules it out for functional protein is the mobile phase, not the separating power, so this confuses being unusable with being imprecise.', cn: 'Reverse phase 的分辨率其实是这些模式里最高的——小粒径 silica 加 HPLC 高压正是为了这个。让它不能用于有活性的蛋白的是 mobile phase 的变性条件，不是分离能力；这里把「不能用」和「分不开」搞混了。' }
      },
      why_en: 'Resolution is in fact extremely good. The problem is that the conditions unfold globular proteins completely, so it is used analytically and for peptides, where there is no tertiary structure to lose.',
      why_cn: '它的分辨率其实极好。问题在于这套条件会让球状蛋白彻底解折叠，所以它用于分析和多肽——后者本来就没有三级结构可失去。' },
    { type: 'mcq',
      q_en: 'What size of molecule is reverse phase most suitable for?',
      q_cn: '反相最适合多大的分子？',
      options: ['Whole antibodies and other large folded glycoproteins', 'Peptides up to about 50 residues, small organics and oligonucleotides', 'Multi-subunit complexes held together by non-covalent contacts that the solvent leaves intact', 'Membrane proteins kept soluble in detergent micelles'],
      answer: 1,
      why_en: 'Up to about fifty residues. Beyond that you are dealing with a folded protein that the denaturing mobile phase will destroy, so the size limit is really a structure limit.',
      why_cn: '大约 50 个残基以内。超过这个长度就是折叠的蛋白，而变性的流动相会把它毁掉，所以这个尺寸上限实际上是一个结构上限。' },
    { type: 'mcq',
      q_en: 'Why does reverse phase require metal columns?',
      q_cn: '为什么反相需要金属柱？',
      options: ['The solvents corrode plastic, since acetonitrile and TFA attack the polymer', 'It runs at very high pressures on HPLC', 'Silica binds to plastic', 'To maintain temperature'],
      answer: 1,
      why_en: 'Small silica particles at HPLC flow rates generate very high back pressure, which glass or plastic hardware cannot contain. High pressure is also what delivers the exceptional resolution.',
      why_cn: '细小的硅胶颗粒在 HPLC 流速下产生很高的背压，玻璃或塑料硬件承受不住。而高压也正是它能给出极佳分辨率的原因。' },
    { type: 'short',
      q_en: 'Both HIC and reverse phase separate by hydrophobicity. When would you choose each?',
      q_cn: 'HIC 和反相都按疏水性分离。你在什么情况下分别选哪个？',
      accept: ['denaturing', 'native', 'functional', 'peptide', 'analysis'],
      answer_en: 'The separation principle is the same but the conditions decide everything. HIC runs in aqueous buffer at high salt, so the protein stays folded — that is the option when you need functional, natively folded material at the end, and it is a genuinely preparative mode. Reverse phase runs in a gradient of acetonitrile in water at pH two with trifluoroacetic acid, which is thoroughly denaturing. For a short peptide of up to about fifty residues that costs nothing, because there is no tertiary structure to lose, and you gain extremely good resolution. So reverse phase is the choice for peptide purification, for purity assessment and for preparing samples for mass spectrometry, whereas HIC is the choice whenever the protein has to come off the column still working.',
      answer_cn: '分离原理相同，但条件决定一切。HIC 在水相高盐缓冲液中运行，蛋白保持折叠——当你最后需要有功能、天然折叠的材料时就选它，它是真正的制备型模式。反相在 pH 2、含三氟乙酸的乙腈水梯度中运行，属于彻底的变性条件。对 50 个残基以内的短肽来说这没有损失，因为本来就没有三级结构可失去，而你换来了极好的分辨率。所以多肽纯化、纯度检定、质谱样品前处理选反相；而只要蛋白必须带着功能从柱子上下来，就选 HIC。'
    }
  ],
  oral: {
    q_en: 'What is reverse-phase chromatography used for, and what is it not used for?',
    q_cn: '反相层析用来做什么？不用来做什么？',
    model_en: 'Reverse phase separates by hydrophobicity on silica functionalised with alkyl chains — C4, C8 or C18, in increasing order of hydrophobicity. It is typically run on HPLC at very high pressures, which is why it needs metal columns, and the resolution it achieves is extremely good. The defining feature is the mobile phase: a gradient of acetonitrile in water at pH two with a tenth of a per cent trifluoroacetic acid. Those are thoroughly denaturing conditions. That single fact determines what it is for. Short peptides, up to about fifty amino acids, have no tertiary structure to lose, so denaturation costs nothing and you simply gain the resolution — and the same applies to small organic molecules and oligonucleotides. A globular protein, on the other hand, is destroyed by the run. So reverse phase is positioned as an analytical technique — purity assessment, sample preparation for mass spectrometry — and as a preparative method for peptides, but not as a way to recover functional protein. The comparison worth drawing is with hydrophobic interaction chromatography, because the two modes separate by exactly the same property and differ only in conditions. HIC runs in aqueous buffer at high salt and preserves the native fold, so it is the option whenever the protein has to still work at the end. That contrast — same principle, one denaturing and one not — is a standard exam question.',
    checklist: ['Separates by hydrophobicity on alkyl-functionalised silica', 'Resins C4, C8, C18 in increasing hydrophobicity', 'Run on HPLC at very high pressure, hence metal columns', 'Resolution is extremely good', 'Mobile phase: acetonitrile in water, pH 2.0, 0.1% TFA', 'These are denaturing conditions', 'Suits peptides up to ~50 aa, small organics, oligonucleotides', 'A peptide has no tertiary structure to lose; a globular protein does', 'Role: analysis, purity, mass spec prep, peptide purification', 'HIC is the non-denaturing counterpart for the same property']
  }
},

{
  id: '2-35',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.35',
  enTitle: 'Affinity chromatography and the purification tags',
  cnTitle: '亲和层析与纯化标签',
  slides: 'L4 s.18–19',
  coverage: 'full',
  coverageNote: 'The tag table is on the slides, as is the warning that a tag can influence protein function. The three rules for choosing between tags are assembled from scattered facts in the table and are the practically useful form of it.',
  summary: {
    en: 'Affinity chromatography is the most widely used mode: very specific, one step, high yields, and with many commercial resins available. The cost is that you usually have to add a purification tag, and the tag can influence protein function, so removal may be needed. The tags divide into short peptides such as His, Strep and FLAG, and whole proteins such as MBP, HALO, GST and thioredoxin, the latter group doubling as solubility or functional tags.',
    cn: '亲和层析是使用最广的模式：特异性很强、一步完成、产率高，而且有大量商品化树脂。代价是通常必须给蛋白加一个纯化标签，而标签可能影响蛋白功能，所以有时需要切除。标签分成两类：His、Strep、FLAG 这类短肽，以及 MBP、HALO、GST、硫氧还蛋白这类完整蛋白——后者还兼作溶解性标签或功能标签。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.18', src: 'img/figures/L4_s18_1.webp' },
    { slide: 'L4 s.18', src: 'img/figures/L4_s18_2.webp' },
    { slide: 'L4 s.18', src: 'img/figures/L4_s18_3.webp' },
    { slide: 'L4 s.19', src: 'img/figures/L4_s19_1.webp' },
    { slide: 'L4 s.19', src: 'img/figures/L4_s19_2.webp' },
    { slide: 'L4 s.19', src: 'img/figures/L4_s19_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '亲和层析能一步做到高纯度，是因为它靠的是**「有没有」这个二元判据**，而不是电荷、大小、疏水性那种「程度差异」。\n\n' +
            '代价是**你必须改造你的蛋白**——而标签可能影响功能，所以有时要切掉。',
  skipIt: '各种树脂的品牌名不用背。老师在第 5 讲开头给第 4 讲做 RECAP 时写了两条 **Affinity chromatography（His tag、StrepTag）** 和 **（MBP、HALO tag）**——**亲和层析和这几个标签都是被点名的**，所以标签的分类和取舍要能讲。',
  explain: [
    {
      q: '为什么只有亲和层析能「一步做到」？',
      a: '**因为它把一个连续问题变成了二元问题。**\n\n' +
         '看看另外几种模式在做什么：\n\n' +
         '**电荷、大小、疏水性——所有蛋白都有这些性质，区别只在程度。**所以分离时你面对的是一个连续谱：你的蛋白在某个位置，而**总有一批杂蛋白的位置跟它很接近**。你只能挑一个窗口，尽量把大部分杂质排除掉，**但永远排除不干净**（第 2-32 节讲过为什么）。\n\n' +
         '**亲和层析不一样：带标签的结合，不带标签的完全不结合。**\n\n' +
         '这不是「结合得更强一点」，是**根本的有无之别**。宿主的几千种蛋白里，没有一个带你那个 His 标签。\n\n' +
         '**所以一步之内，纯度可以从百分之一跳到百分之九十以上。**其它模式做不到这个跨度，不是因为效率低，是因为**它们利用的性质本身就不具备这种区分度**。\n\n' +
         '**这也解释了为什么亲和层析几乎总是排在纯化路线的第一步**（第 2-42 节）：**在最脏的时候用区分度最高的手段，收益最大。**',
      takeaway: '别的模式分的是程度，亲和分的是有无。二元判据才能一步跨越两个数量级的纯度。'
    },
    {
      q: '代价是什么？为什么标签有时候必须切掉？',
      a: '**代价是：亲和层析是唯一一个要求你先改造蛋白的模式。**\n\n' +
         '离子交换、HIC、SEC 都是拿着你的蛋白原样去分离。**亲和层析要求你先在基因上加一段序列**——回到第 1 讲那条：**又是先在 DNA 上动手。**\n\n' +
         '**而改造的后果是不可预知的：**\n\n' +
         '标签可能**挡住活性位点**或者结合界面；\n\n' +
         '可能**干扰折叠**（尤其是大标签）；\n\n' +
         '可能**影响结晶**（多出来的柔性尾巴让晶体长不好，这跟第 1-15 节 Gateway 那 8 个残基是同一类问题）；\n\n' +
         '可能**改变蛋白的行为**——带正电的 His 标签本身就会影响等电点和相互作用。\n\n' +
         '**所以「要不要切」取决于下游要干什么：**\n\n' +
         '只是做个 Western、跑个胶 → 不用切。\n\n' +
         '要测活性、解结构、做定量的相互作用 → **切**。\n\n' +
         '怎么切是第 2-41 节的内容。这里要记住的是：**切除本身是一个会损失产量、而且可能失败的步骤**，所以「加了标签」这个决定的代价，一直要算到那一步为止。',
      takeaway: '它是唯一要求你先改造蛋白的模式。标签会不会碍事不可预知，所以「要不要切」看下游做什么。'
    },
    {
      q: '短肽标签和整蛋白标签，该怎么选？',
      a: '**按「你除了纯化还想要什么」来选。**\n\n' +
         '**短肽标签**（His 6 个残基、Strep 8 个、FLAG 8 个）：\n\n' +
         '**小，所以干扰小**——很多时候可以不切，直接用。这是它最大的优点。\n\n' +
         '缺点是它**只干纯化这一件事**。\n\n' +
         '**整蛋白标签**（MBP 43 kDa、HALO 36 kDa、GST 26 kDa、thioredoxin）：\n\n' +
         '**大，干扰大**——常常比你的目标蛋白还大，**几乎一定要切**。\n\n' +
         '但它们**兼职**，而这才是选它们的理由：\n\n' +
         '**MBP 和 thioredoxin 提高溶解度**（第 2-12 节那五个手段之一）；\n\n' +
         '**GFP 提供荧光**——你可以肉眼看到蛋白在哪里、跑柱子时直接看到绿色的带，做表达筛选时极其方便；\n\n' +
         '**HALO 提供共价连接**。\n\n' +
         '**所以选择很清楚：**\n\n' +
         '**只想纯化** → 短肽标签，简单、干扰小。\n\n' +
         '**同时还有溶解性问题、或者想在纯化过程中看得见它** → 整蛋白标签，接受一定要切掉的代价。\n\n' +
         '（提醒一次第 2-12 节那个坑：**用 MBP 解决了溶解性，切掉之后蛋白可能当场沉淀**。）',
      takeaway: '短肽小、干扰小、常可不切，但只管纯化；整蛋白大、必须切，但兼职提高溶解度或提供荧光。'
    },
    {
      q: '「两个标签串联使用」，多出来的收益是什么？',
      a: '**不只是更纯——它其实是在筛「完整的分子」。**\n\n' +
         '典型做法是：**N 端放一个标签，C 端放另一个**（比如 N 端 His、C 端 Strep）。先跑镍柱，再跑 Strep 柱。\n\n' +
         '表面上看，这是两轮纯化叠加，杂质当然更少。\n\n' +
         '**但真正的收益在这里：只有两端都完好的分子，才能通过两轮。**\n\n' +
         '想一想你的样品里都有什么不想要的东西：\n\n' +
         '**降解产物**——被蛋白酶切过的，通常丢掉了一端。\n\n' +
         '**提前终止的产物**——翻译没读完的，只有 N 端。\n\n' +
         '**内部起始的产物**——只有 C 端。\n\n' +
         '**这些东西跟全长蛋白在电荷、大小、疏水性上都很接近**，用常规手段很难分开。而且它们**在单标签纯化里会被一起拉下来**——它们身上还有那个标签。\n\n' +
         '**双标签直接把它们全部排除掉了。**\n\n' +
         '**所以双标签的价值不是「纯度再高一点」，而是「保证拿到的是全长的」**——这在需要结构完整性的实验里（结构生物学、定量的相互作用测定）比单纯的纯度重要得多。',
      takeaway: '两端各一个标签，只有全长分子能通过两轮。它筛掉的是降解和截短产物，而那些用常规手段分不开。'
    }
  ],
  points: [
    { term: 'Why it dominates', en: 'The most widely used mode — very specific, one-step, high yields, with many commercial resins available.', cn: '使用最广泛的模式——特异性强、一步完成、产率高，商品化树脂种类繁多。' },
    { term: 'The requirement', en: 'You typically must add a purification tag to your protein sequence.', cn: '通常必须在你的蛋白序列上加一个纯化标签。' },
    { term: 'Two tags in sequence', en: 'Two different tags can be used sequentially for more efficient purification.', cn: '可以串联使用两个不同的标签，让纯化更彻底。' },
    { term: 'Functional tags', en: 'Some tags do more than purify — MBP increases solubility, GFP provides fluorescence.', cn: '有些标签不只用于纯化——MBP 提高溶解性，GFP 提供荧光。' },
    { term: 'The disadvantage', en: 'The tag can influence protein function, so removal may be required.', cn: '标签可能影响蛋白功能，所以有时必须切除。' },
    { term: 'His-tag', en: '6 to 10 histidines, purified on Ni-NTA. High capacity.', cn: '6–10 个组氨酸，用 Ni-NTA 纯化。容量高。' },
    { term: 'Strep-tag', en: 'The peptide WSHPQFEK, purified on Streptactin. Very mild elution.', cn: '肽段 WSHPQFEK，用 Streptactin 纯化。洗脱条件非常温和。' },
    { term: 'FLAG-tag', en: 'The peptide DYKDDDDK, purified on an anti-FLAG monoclonal antibody. Expensive resin.', cn: '肽段 DYKDDDDK，用抗 FLAG 单抗纯化。树脂昂贵。' },
    { term: 'Protein tags', en: 'MBP, 43 kDa on amylose, a solubility chaperone. HALO-tag, 34 kDa on chloroalkane resin, binds irreversibly. GST, 26 kDa on glutathione Sepharose, prone to dimerisation. Thioredoxin, 12 kDa on ThioBond, a solubility chaperone.', cn: 'MBP，43 kDa，用直链淀粉树脂，是溶解性伴侣。HALO 标签，34 kDa，用氯代烷树脂，不可逆结合。GST，26 kDa，用谷胱甘肽琼脂糖，容易二聚。硫氧还蛋白，12 kDa，用 ThioBond，是溶解性伴侣。' }
  ],
  beyondPoints: [
    { term: 'Rule 1 — denaturing purification means His', en: 'MBP, GST and Strep all depend on a native fold or on protein-protein recognition, and all fail in 6 M guanidinium chloride. So the inclusion-body route is committed to a His-tag.', cn: 'MBP、GST 和 Strep 都依赖天然折叠或蛋白–蛋白识别，在 6 M 盐酸胍中全部失效。所以包涵体路线只能绑定 His 标签。' },
    { term: 'Rule 2 — an insoluble protein needs MBP or thioredoxin, not His', en: 'A His-tag is only 6 to 10 residues and does nothing for solubility. MBP at 43 kDa and thioredoxin at 12 kDa are themselves highly soluble and drag the fusion partner into the soluble fraction. The price is a large tag that almost always has to be cut off afterwards.', cn: 'His 标签只有 6–10 个残基，对溶解性毫无帮助。43 kDa 的 MBP 和 12 kDa 的硫氧还蛋白本身极易溶，能把融合伴侣拖进可溶部分。代价是标签很大，之后几乎一定要切掉。' },
    { term: 'Rule 3 — studying oligomeric state means avoiding GST', en: 'GST dimerises in solution, so you would not be able to distinguish a genuinely dimeric target from one that GST has made look dimeric.', cn: 'GST 在溶液中会二聚，所以你分不清「我的蛋白是二聚体」还是「GST 让它看起来像二聚体」。' },
    { term: 'The tandem solution', en: 'A dual tag such as His-MBP is a common answer: capture on nickel for its high capacity, cleave the tag, then use a second column or a reverse nickel step to remove whatever was not cleaved.', cn: '双标签串联（如 His-MBP）是常见解法：先用镍柱靠高容量抓总量，切掉标签，再用第二根柱子或反向镍柱去掉没切完的部分。' }
  ],
  terms: [
    { en: 'Affinity tag', cn: '亲和标签', def_en: 'A peptide or protein fused to the target so it can be captured by a matching immobilised ligand. May influence function, so removal is often planned in.', def_cn: '融合到目标蛋白上的肽段或蛋白，使其能被相匹配的固定化配体捕获。可能影响功能，所以往往一开始就计划切除。' },
    { en: 'Solubility tag', cn: '溶解性标签', def_en: 'A large, highly soluble fusion partner such as MBP or thioredoxin, used when the target aggregates. A His-tag cannot do this job.', def_cn: '像 MBP 或硫氧还蛋白这样体积大、极易溶的融合伴侣，用于目标蛋白聚集的情况。His 标签做不到这一点。' },
    { en: 'Tandem purification', cn: '串联纯化', def_en: 'Using two different tags in sequence, typically capturing on one and polishing on the other, to remove species that survived the first step.', def_cn: '依次使用两个不同的标签，通常一个用于捕获、另一个用于精修，去掉在第一步中残留下来的物种。' },
    { en: 'Reverse nickel step', cn: '反向镍柱', def_en: 'Re-running a cleaved sample over Ni-NTA so that uncleaved fusion and the released His-tagged protease bind while the tag-free target flows through.', def_cn: '把切过标签的样品再过一次 Ni-NTA，让未切完的融合蛋白和带 His 标签的蛋白酶结合上去，而不带标签的目标蛋白从穿透液流出。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'You are purifying from inclusion bodies under denaturing conditions. Which tag must you use?',
      q_cn: '你要在变性条件下从包涵体纯化。必须用哪种标签？',
      options: ['MBP', 'GST', 'His-tag', 'Strep-tag'],
      answer: 2,
      optionRefs: { 0: '2-37', 1: '2-37', 3: '2-37' },
      why_en: 'MBP, GST and Strep all depend on a native fold or protein-protein recognition and fail in 6 M guanidinium. A His-tag binds nickel by coordination chemistry, which a denaturant cannot disrupt.',
      why_cn: 'MBP、GST 和 Strep 都依赖天然折叠或蛋白–蛋白识别，在 6 M 盐酸胍中失效。His 标签靠配位化学结合镍，变性剂破坏不了。' },
    { type: 'mcq',
      q_en: 'Your protein is insoluble. Which tag would help, and why not a His-tag?',
      q_cn: '你的蛋白不可溶。哪种标签有帮助？为什么不用 His 标签？',
      options: ['FLAG, because its highly charged sequence keeps the protein in solution', 'MBP or thioredoxin, because only a large soluble partner confers solubility', 'Strep, because its elution conditions are the mildest available', 'HALO, because its covalent binding to the resin cannot be lost'],
      answer: 1,
      optionRefs: { 0: '2-37', 2: '2-37', 3: '2-37' },
      why_en: 'Solubility has to be conferred by bulk. MBP at 43 kDa and thioredoxin at 12 kDa fold fast and are very soluble, pulling the fusion into the soluble fraction. Six to ten histidines cannot do that.',
      why_cn: '溶解性必须靠体量来赋予。43 kDa 的 MBP 和 12 kDa 的硫氧还蛋白折叠快、极易溶，能把融合蛋白拉进可溶部分。6–10 个组氨酸做不到。' },
    { type: 'mcq',
      q_en: 'Why should you avoid a GST tag when studying oligomeric state?',
      q_cn: '研究寡聚状态时为什么应该避开 GST 标签？',
      options: ['GST is too large for the protein to enter the SEC pores at all', 'GST dimerises in solution, so any dimer you see may be the tag', 'GST cannot be cleaved off the protein before the measurement', 'GST binds non-specifically to the resin used for size exclusion'],
      answer: 1,
      optionRefs: { 2: '2-41' },
      why_en: 'The measurement becomes uninterpretable: a dimer on your SEC trace could be a genuine property of the target or an artefact imposed by the tag, and nothing in the experiment distinguishes them.',
      why_cn: '测量结果变得无法解释：SEC 图上的二聚体既可能是目标蛋白本身的性质，也可能是标签强加的假象，而实验本身区分不了这两者。' },
    { type: 'short',
      q_en: 'Give the three practical rules for choosing an affinity tag.',
      q_cn: '给出选择亲和标签的三条实用规则。',
      accept: ['denaturing', 'His', 'insoluble', 'MBP', 'thioredoxin', 'GST', 'oligomer'],
      answer_en: 'First, if you must purify under denaturing conditions — from inclusion bodies, for instance — you have to use a His-tag, because MBP, GST and Strep all depend on a native fold or on protein-protein recognition and every one of them fails in six molar guanidinium. Second, if the problem is that your protein is insoluble, use MBP or thioredoxin rather than a His-tag, because a His-tag is only six to ten residues and contributes nothing to solubility, whereas MBP at forty-three kilodaltons and thioredoxin at twelve are themselves highly soluble and drag the fusion into the soluble fraction — the price being a large tag you will almost certainly have to cut off. Third, if you are studying oligomeric state, avoid GST, because it dimerises in solution and you would not be able to tell a genuine dimer from one the tag created. A common way to satisfy several constraints at once is a tandem tag such as His-MBP: capture on nickel for the capacity, cleave, then use a second column or a reverse nickel step to remove whatever was not cleaved.',
      answer_cn: '第一，如果必须在变性条件下纯化（比如从包涵体），就只能用 His 标签，因为 MBP、GST 和 Strep 都依赖天然折叠或蛋白–蛋白识别，在 6 M 盐酸胍中无一例外地失效。第二，如果问题是蛋白不可溶，用 MBP 或硫氧还蛋白而不是 His 标签，因为 His 只有 6–10 个残基、对溶解性毫无贡献，而 43 kDa 的 MBP 和 12 kDa 的硫氧还蛋白本身极易溶，能把融合蛋白拖进可溶部分——代价是标签很大，之后几乎肯定要切掉。第三，如果研究寡聚状态，避开 GST，因为它在溶液中会二聚，你分不清是真的二聚体还是标签造出来的。同时满足多个约束的常见做法是串联标签，比如 His-MBP：先用镍柱靠容量抓总量，切掉标签，再用第二根柱子或反向镍柱去掉没切完的部分。'
    }
  ],
  oral: {
    q_en: 'What is affinity chromatography, and how do you choose a tag?',
    q_cn: '什么是亲和层析？怎么选标签？',
    model_en: 'Affinity chromatography is the most widely used mode, because it is very specific, works in a single step, gives high yields, and has an enormous range of commercial resins. The cost is that you typically have to add a purification tag to your protein, and the disadvantage the slides emphasise is that a tag can influence protein function, so removal may be required. The tags split into two groups. Short peptides: the His-tag, six to ten histidines on Ni-NTA with high capacity; the Strep-tag, WSHPQFEK on Streptactin, with very mild elution; and the FLAG-tag, DYKDDDDK, recognised by a monoclonal antibody on an expensive resin. Then whole proteins: MBP at forty-three kilodaltons on amylose, HALO-tag at thirty-four on chloroalkane resin binding irreversibly, GST at twenty-six on glutathione Sepharose, and thioredoxin at twelve on ThioBond. Several of those double as functional tags — MBP and thioredoxin increase solubility, and GFP would give fluorescence. For choosing, I would offer three rules. If you must purify under denaturing conditions, from inclusion bodies say, you are committed to a His-tag, because MBP, GST and Strep all rely on a native fold or protein-protein recognition and fail completely in six molar guanidinium, whereas a His-tag binds nickel by coordination chemistry that a denaturant cannot touch. If the problem is insolubility, use MBP or thioredoxin rather than His, because six to ten residues do nothing for solubility while a large fast-folding soluble domain drags the fusion into solution. And if you are studying oligomeric state, avoid GST, because it dimerises and you would not be able to distinguish a genuine dimer from an artefact. Where constraints conflict, a tandem tag such as His-MBP is the usual answer: capture on nickel for the capacity, cleave the tag, then remove the uncleaved material on a second column or a reverse nickel step.',
    checklist: ['Most widely used mode: specific, one-step, high yield, many resins', 'Requires adding a tag; the tag can influence function, so removal may be needed', 'Two tags can be used sequentially', 'Peptide tags: His (Ni-NTA), Strep WSHPQFEK (Streptactin), FLAG DYKDDDDK (mAb)', 'Protein tags: MBP 43 kDa, HALO 34 kDa, GST 26 kDa, thioredoxin 12 kDa', 'MBP and thioredoxin double as solubility chaperones', 'Rule 1: denaturing purification means His-tag only', 'Rule 2: insoluble protein means MBP or thioredoxin, not His', 'Rule 3: oligomeric state studies mean avoiding GST', 'Tandem His-MBP: capture on nickel, cleave, reverse nickel to polish']
  }
},

{
  id: '2-36',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.36',
  enTitle: 'Ni-NTA — the workhorse',
  cnTitle: 'Ni-NTA——主力树脂',
  slides: 'L4 s.20',
  coverage: 'full',
  coverageNote: 'The capacity, chemistry and elution options are on the slide. Why imidazole works, why the wash buffer also contains it, and why coordination chemistry survives guanidinium are the beyond-the-slides material — and together they explain nearly everything about how a nickel column behaves.',
  summary: {
    en: 'Ni-NTA is the most widely used affinity resin, with a very high capacity of about 50 mg/mL, and it works under both native and denaturing conditions. Nitrilotriacetic acid charged with nickel binds the polyhistidine tag, and elution is with imidazole or by dropping the pH below 5.6. Its weakness is non-specific binding of host proteins that happen to carry several surface histidines — which is exactly what the imidazole in the wash buffer is there to remove.',
    cn: 'Ni-NTA 是使用最广泛的亲和树脂，容量很高（约 50 mg/mL），而且在天然和变性条件下都能用。次氮基三乙酸（NTA）载上镍离子后结合多聚组氨酸标签，洗脱用咪唑或者把 pH 降到 5.6 以下。它的弱点是会非特异性地结合那些表面恰好带几个组氨酸的宿主蛋白——而洗涤缓冲液里的咪唑正是为了去掉这些。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.20', src: 'img/figures/L4_s20_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**咪唑就是组氨酸侧链的「裸版本」**，所以它能竞争性地把 His 标签挤下来——**低浓度（20–40 mM）做洗涤，高浓度（250–500 mM）做洗脱**，同一个试剂两种用法。\n\n' +
            '它的独门本事是**在 6 M 盐酸胍里照样工作**，因为那是配位键，不依赖折叠。',
  skipIt: '250–500 mM、pH 5.6 这些数字记个方向就行（洗涤低、洗脱高；酸能洗但伤蛋白）。老师在第 5 讲开头给第 4 讲做 RECAP 时写了 **Affinity chromatography (His tag, StrepTag)**——**His 标签是被点名的**，机制要能讲。',
  explain: [
    {
      q: '咪唑为什么能洗脱？为什么洗涤缓冲液里也要加？',
      a: '**因为咪唑就是组氨酸侧链本身。**\n\n' +
         'His 标签结合镍，靠的是**组氨酸侧链上那个咪唑环的氮原子去配位镍离子**。而你加进去的游离咪唑，就是**这个侧链的裸版本**——同样的化学基团，只是没有连在蛋白上。\n\n' +
         '**所以它能直接竞争同一个配位位点，把标签挤下来。**\n\n' +
         '**接下来是这一节最漂亮的设计：同一个试剂，两种浓度，两种用途。**\n\n' +
         '**低浓度（20–40 mM）用在洗涤缓冲液里。**宿主里有些蛋白表面碰巧有那么几个组氨酸，会弱弱地挂上来。低浓度咪唑**刚好足以把这些弱结合的挤掉**，而连续 6 个组氨酸的标签结合强得多，扛得住。\n\n' +
         '**高浓度（250–500 mM）用来洗脱。**这时连真标签也顶不住了。\n\n' +
         '**所以你不是「先洗一下再洗脱」，你是在用同一个化学做分级。**\n\n' +
         '**实用推论：如果洗脱峰里杂带很多，第一个该调的就是洗涤缓冲液里的咪唑浓度**（第 2-29 节情况三）。往上加，杂质会先掉下去。加过头，你的蛋白也开始流失——从洗涤组分的胶上就能看出来该停在哪。',
      takeaway: '咪唑是组氨酸侧链的裸版本，所以能竞争。低浓度洗掉弱结合的杂质，高浓度洗脱真标签。'
    },
    {
      q: '为什么低 pH 也能洗脱？跟咪唑是同一个机制吗？',
      a: '**不是，方向正好相反：咪唑是「把标签挤下来」，低 pH 是「让标签失去抓握能力」。**\n\n' +
         '组氨酸侧链上那个咪唑环的 **pKa 大约是 6**。\n\n' +
         '**pH 在 6 以上**：咪唑环上的氮保持中性，**带着一对孤对电子**——正是用这对电子去配位镍离子。抓得住。\n\n' +
         '**pH 降到 5.6 以下**：那个氮**被质子化了，带上正电**，孤对电子被占用。**抓不住了**，而且它现在带正电，跟同样带正电的镍还互相排斥。\n\n' +
         '**所以蛋白就掉下来了——不是被挤掉的，是自己松手了。**\n\n' +
         '**那为什么咪唑仍然是首选？**因为**酸会让蛋白变性**。pH 5.6 对很多蛋白已经接近危险区，更低就更糟。而咪唑洗脱是在中性 pH 下进行的，对蛋白友好得多。\n\n' +
         '**低 pH 洗脱的用武之地**是那些咪唑会干扰下游的场合（比如咪唑会影响你后面的测定），或者你正好需要把蛋白切换到酸性缓冲液里。\n\n' +
         '**顺带把第 1-2-1 节串起来：**那里 Glargine 靠 pI 附近的沉淀实现缓释，这里靠 pKa 附近的质子化实现洗脱——**都是「调 pH 越过某个临界值，行为整个改变」**。这类设计在生化里到处都是。',
      takeaway: 'pH < pKa 时咪唑环被质子化、孤对电子没了，所以抓不住镍。是「松手」不是「被挤掉」。'
    },
    {
      q: '为什么它能在 6 M 盐酸胍里工作？这一点为什么这么重要？',
      a: '**因为 His 标签和镍之间是配位键，不是蛋白之间的构象识别。**\n\n' +
         '变性剂能破坏什么？它破坏的是**折叠**，以及依赖折叠的那些非共价相互作用（疏水核心、氢键网络、构象表位）。\n\n' +
         '**而配位键不依赖任何折叠。**你只需要六个组氨酸的侧链露在外面——**在一条被彻底拉直的肽链上，它们照样露着，照样配位得上镍。**\n\n' +
         '**对比一下 MBP（第 2-37 节）：**MBP 结合麦芽糖，靠的是它**自己折叠好的那个结合口袋**。变性剂一来，口袋没了，**完全失效**。GST、抗体识别的标签同理。\n\n' +
         '**所以结论很硬：变性条件下的纯化，基本只能用 His 标签。**\n\n' +
         '**而这正好把第 2-10 节那条补完了。**那里说包涵体的一个优点是「变性条件下纯化杂质更少」——现在你知道为什么那条能成立了：**因为恰好有一种亲和标签不怕变性。**\n\n' +
         '如果 His 标签也依赖折叠，那整条「包涵体 → 变性溶解 → 变性条件下亲和纯化 → 柱上复性」的路线就不存在了。**第 2-11 节的柱上复性也是建立在同一个性质上的。**',
      takeaway: '配位键不依赖折叠，所以变性剂拆不掉它。第 2-10 节的变性纯化和第 2-11 节的柱上复性都建在这一条上。'
    },
    {
      q: 'NTA 是什么？为什么偏偏用它来载镍？',
      trace: {
        what: '**次氮基三乙酸（nitrilotriacetic acid）**——一个能抓住金属离子的螯合剂，被共价接在树脂上，再用它去载镍离子。',
        from: '关键在于**配位数的算术**。镍离子一共有 **6 个配位位点**。NTA 是**四齿**配体，它自己占掉 **4 个**——**剩下 2 个空着**。',
        to: '**那 2 个空位就是留给你的组氨酸的。**这个数目是经过权衡的：\n\n**留得太少**（比如用五齿配体），组氨酸抓不上去。\n\n**留得太多**（比如 IDA，三齿，留 3 个空位），标签抓得更牢、容量更高，**但镍离子自己也更容易被样品里的东西夺走、从柱子上掉下来**。\n\n**NTA 是「抓得够牢，又不容易掉镍」的那个折中点**，所以成了标准。',
        family: '也可以用**钴**代替镍（比如 TALON 树脂）：结合更弱，但**特异性更高**——那些只有零星几个组氨酸的宿主蛋白抓不住钴。所以「本底太高怎么办」的一个答案是换钴。'
      },
      takeaway: '镍有 6 个配位位点，NTA 占 4 个、留 2 个给组氨酸。留多了镍容易掉，留少了标签抓不住。'
    }
  ],
  points: [
    { term: 'Position', en: 'The most widely used affinity resin, with very high capacity — about 50 mg per mL of resin.', cn: '使用最广泛的亲和树脂，容量很高——约 50 mg/mL 树脂。' },
    { term: 'Works under both conditions', en: 'Suitable for both native and denaturing protocols, for example purification of inclusion bodies.', cn: '天然和变性方案都适用，例如包涵体的纯化。' },
    { term: 'The resin chemistry', en: 'Nitrilotriacetic acid (NTA) charged with nickel ions, or less frequently cobalt.', cn: '次氮基三乙酸（NTA）载上镍离子，也有较少用钴的。' },
    { term: 'What it binds', en: 'The polyhistidine tag.', cn: '多聚组氨酸标签。' },
    { term: 'Elution', en: 'Imidazole, or lowering the pH below 5.6.', cn: '咪唑，或者把 pH 降到 5.6 以下。' },
    { term: 'The weakness', en: 'It can non-specifically bind host proteins that contain several histidines.', cn: '它会非特异性地结合那些含有多个组氨酸的宿主蛋白。' }
  ],
  beyondPoints: [
    { term: 'Why imidazole elutes', en: 'The imidazole side chain of histidine coordinates the nickel through its nitrogen atoms — that is the chemistry of His-tag binding. Free imidazole is simply the bare version of that side chain, so adding it competitively displaces the tag.', cn: '组氨酸的咪唑侧链通过氮原子与镍配位，这就是 His 标签结合的化学本质。游离咪唑就是这个侧链的「裸露版本」，所以加进去就是竞争性地把标签顶下来。' },
    { term: 'Why the wash buffer contains imidazole too', en: 'Some host proteins happen to have a few surface histidines and bind weakly. A low imidazole concentration, 20 to 40 mM, displaces exactly those weakly bound contaminants while a genuine hexahistidine tag binds strongly enough to stay. Elution then uses a high concentration, 250 to 500 mM.', cn: '有些宿主蛋白表面恰好有几个组氨酸，会弱结合上去。20–40 mM 的低浓度咪唑正好把这些弱结合的杂蛋白顶掉，而真正的六聚组氨酸标签结合更强、留得住。洗脱时再用高浓度（250–500 mM）。' },
    { term: 'Why low pH also elutes, by a different mechanism', en: 'The imidazole side chain has a pKa near 6, so below that pH it is protonated and positively charged, losing the lone pair it needs to coordinate nickel. But acid can denature the protein, so imidazole remains the first choice.', cn: '咪唑侧链的 pKa 约为 6，所以 pH 低于它时侧链被质子化带正电，失去了与镍配位所需的孤对电子。但酸性条件可能让蛋白变性，所以咪唑洗脱仍是首选。' },
    { term: 'Why it works in 6 M guanidinium', en: 'Binding is a coordination bond, not a protein-protein recognition event, so a denaturant cannot disrupt it. This is Ni-NTA\'s unique advantage and the reason denaturing inclusion-body purification is essentially limited to His-tags.', cn: '它的结合是配位键，而不是蛋白–蛋白识别事件，所以变性剂破坏不了。这是 Ni-NTA 的独门优势，也是变性条件下的包涵体纯化基本上只能用 His 标签的原因。' }
  ],
  terms: [
    { en: 'NTA (nitrilotriacetic acid)', cn: '次氮基三乙酸', def_en: 'The chelating group on the resin that holds the nickel ion, leaving coordination sites free for the histidine side chains of the tag.', def_cn: '树脂上抓住镍离子的螯合基团，同时留出配位位点给标签的组氨酸侧链。' },
    { en: 'Imidazole', cn: '咪唑', def_en: 'The side-chain group of histidine. Supplied free in buffer, it competes with the tag for nickel — low concentrations wash contaminants off, high concentrations elute the target.', def_cn: '组氨酸的侧链基团。以游离形式加入缓冲液时，它与标签竞争镍——低浓度洗掉杂蛋白，高浓度洗脱目标蛋白。' },
    { en: 'Coordination bond', cn: '配位键', def_en: 'A bond formed by donating a lone electron pair to a metal ion. Because it does not depend on protein folding, it survives denaturants that destroy every other affinity interaction.', def_cn: '通过向金属离子提供孤对电子形成的键。因为它不依赖蛋白折叠，所以能在破坏其他所有亲和相互作用的变性剂中存活。' },
    { en: 'Non-specific binding', cn: '非特异性结合', def_en: 'Capture of host proteins that were not tagged — here, ones that happen to present several surface histidines. Controlled by including imidazole in the wash.', def_cn: '捕获到没有标签的宿主蛋白——这里指那些表面恰好露出几个组氨酸的。通过在洗涤液中加入咪唑来控制。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How does imidazole elute a His-tagged protein?',
      q_cn: '咪唑是怎么把 His 标签蛋白洗脱下来的？',
      options: ['It chelates the nickel ions and carries them off the resin', 'It competes with the tag for the nickel coordination sites', 'It lowers the buffer pH until the tag can no longer bind', 'It denatures the tag so it can no longer hold the nickel'],
      answer: 1,
      optionRefs: { 0: '2-30' },
      optionNotes: {
        2: { en: 'Two different elution routes get merged here. Imidazole elutes by competing for the nickel coordination sites at constant pH — the buffer stays around pH 8. Dropping the pH below 5.6 is a separate route, and it works by protonating the histidine side chain instead.', cn: '这里把两条洗脱路线合并了。Imidazole 是在 pH 不变的条件下竞争 nickel 的配位位点，buffer 一直保持在 pH 8 左右。把 pH 降到 5.6 以下是另一条洗脱路线，靠的是把 histidine 侧链质子化。' }
      },
      why_en: 'Free imidazole is chemically the same group as the histidine side chain, so it competes directly for the nickel coordination sites and displaces the tag. Chelating the nickel off the resin is what EDTA does, and that destroys the column.',
      why_cn: '游离咪唑在化学上就是组氨酸侧链的同一个基团，所以它直接竞争镍的配位位点、把标签顶下来。把镍从树脂上螯合走的是 EDTA，那会毁掉柱子。' },
    { type: 'mcq',
      q_en: 'Why does the wash buffer also contain 20-40 mM imidazole?',
      q_cn: '为什么洗涤缓冲液里也含 20–40 mM 咪唑？',
      options: ['To keep the resin charged with its nickel ions so that none are washed off during the run', 'To displace host proteins that bind weakly through a few surface histidines', 'To lower the pH of the wash so weak binders are released', 'To stop the target protein aggregating while it sits on the resin'],
      answer: 1,
      optionNotes: {
        0: { en: 'Charging an IMAC resin means loading it with Ni2+ ions, which is done with nickel sulfate before the run and has nothing to do with imidazole. Imidazole does the opposite of holding things on the column: it competes for the same coordination sites, which is why 20-40 mM strips only the weakest binders.', cn: '给 IMAC 树脂「充电」指的是上 Ni²⁺ 离子，那是跑柱前用 nickel sulfate 做的，跟 imidazole 没有关系。Imidazole 的作用恰恰相反：它竞争同一批配位位点，所以 20–40 mM 只能把结合最弱的那些蛋白挤下来。' }
      },
      why_en: 'It exploits the difference in binding strength. A few scattered surface histidines bind weakly enough to be displaced by low imidazole, whereas six in a row bind strongly enough to survive until you raise the concentration to 250-500 mM.',
      why_cn: '它利用的是结合强度的差异。零散的几个表面组氨酸结合较弱，低浓度咪唑就能顶掉；而连成一排的六个结合足够强，能撑到你把浓度提高到 250–500 mM 为止。' },
    { type: 'mcq',
      q_en: 'Why does lowering the pH below 5.6 also elute a His-tagged protein?',
      q_cn: '为什么把 pH 降到 5.6 以下也能洗脱 His 标签蛋白？',
      options: ['The nickel ions dissolve out of the resin at low pH', 'The histidine side chain is protonated and loses its lone pair', 'The resin swells at low pH and lets go of the protein', 'Acid cleaves the polyhistidine tag off the protein'],
      answer: 1,
      why_en: 'Protonation removes the electron lone pair that forms the coordination bond. It works, but acidic conditions can denature the protein, which is why imidazole is the first-choice eluent.',
      why_cn: '质子化夺走了形成配位键所需的孤对电子。这个办法有效，但酸性条件可能让蛋白变性，所以咪唑才是首选洗脱剂。' },
    { type: 'short',
      q_en: 'Why can Ni-NTA work in 6 M guanidinium chloride when MBP on amylose cannot?',
      q_cn: '为什么 Ni-NTA 能在 6 M 盐酸胍中工作，而 MBP/直链淀粉不行？',
      accept: ['coordination', 'not protein folding', 'native fold', 'denaturant', 'inclusion bodies'],
      answer_en: 'Because the two interactions are chemically different in kind. Ni-NTA binding is a coordination bond: the nitrogen atoms of the histidine imidazole side chains donate lone pairs to the immobilised nickel ion. That interaction does not depend on the protein being folded at all — an unfolded chain still presents its histidines — so a chaotrope cannot disrupt it. MBP binding to amylose, by contrast, requires the native fold of MBP itself, because the binding site is a structural feature of the folded protein; in six molar guanidinium MBP unfolds and the site no longer exists. The same argument applies to GST on glutathione and to Strep on Streptactin. This is why denaturing purification from inclusion bodies is essentially committed to a His-tag.',
      answer_cn: '因为这两种相互作用在化学性质上根本不同。Ni-NTA 的结合是配位键：组氨酸咪唑侧链的氮原子向固定化的镍离子提供孤对电子。这个相互作用完全不依赖蛋白是否折叠——一条解折叠的链仍然露着它的组氨酸——所以离液剂破坏不了它。相比之下，MBP 与直链淀粉的结合需要 MBP 自身的天然折叠，因为结合位点是折叠蛋白的一个结构特征；在 6 M 盐酸胍中 MBP 解折叠，这个位点就不存在了。同样的论证适用于 GST/谷胱甘肽和 Strep/Streptactin。这就是为什么变性条件下从包涵体纯化基本上只能用 His 标签。'
    }
  ],
  oral: {
    q_en: 'Tell me how a nickel column works.',
    q_cn: '讲讲镍柱是怎么工作的。',
    model_en: 'Ni-NTA is the most widely used affinity resin, with a very high capacity of around fifty milligrams per millilitre of resin, and it is unusual in working under both native and denaturing protocols. The resin is nitrilotriacetic acid charged with nickel ions — occasionally cobalt — and it binds the polyhistidine tag. The chemistry is worth stating because everything else follows from it: the imidazole side chain of histidine coordinates the nickel through its nitrogen atoms. Once you have said that, elution explains itself. Free imidazole is simply the bare version of that same side chain, so adding it competes directly for the nickel and displaces the tag. And that in turn explains a detail people often find puzzling, which is that the wash buffer contains imidazole too. Some host proteins happen to present a few surface histidines and bind weakly; twenty to forty millimolar imidazole in the wash displaces exactly those, while a genuine run of six histidines binds strongly enough to hold on. Then you elute at two hundred and fifty to five hundred millimolar. There is a second elution route, dropping the pH below five point six, and it works by a different mechanism: the imidazole side chain has a pKa near six, so below that it becomes protonated and positively charged and loses the lone pair it needs for coordination. But acid can denature your protein, so imidazole is the first choice. The last point is the important one. Because binding is a coordination bond rather than a protein-protein recognition event, it does not depend on the protein being folded — so Ni-NTA still works in six molar guanidinium chloride, where MBP on amylose, GST on glutathione and Strep on Streptactin all fail because their binding sites are structural features that no longer exist. That is why denaturing purification from inclusion bodies is essentially committed to a His-tag.',
    checklist: ['Most widely used affinity resin; very high capacity ~50 mg/mL', 'Works under native AND denaturing conditions', 'NTA charged with nickel (sometimes cobalt); binds the polyhistidine tag', 'Chemistry: histidine imidazole side chain coordinates nickel via nitrogen', 'Free imidazole is the bare side chain, so it competes and displaces the tag', 'Wash contains 20-40 mM imidazole to remove weakly-bound host proteins', 'Elute at 250-500 mM', 'Low pH below 5.6 also elutes: pKa ~6, side chain protonated, loses lone pair', 'But acid can denature, so imidazole is first choice', 'Coordination bond does not need folding, so it survives 6 M guanidinium', 'Hence inclusion-body purification is committed to His-tags']
  }
},

{
  id: '2-37',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.37',
  enTitle: 'Strep, FLAG, MBP, GST and the covalent tags',
  cnTitle: 'Strep、FLAG、MBP、GST 与共价标签',
  slides: 'L4 s.21–22',
  coverage: 'full',
  coverageNote: 'All five tags and their elution conditions are on the slides. The pattern worth extracting is that each tag has one characteristic liability, and knowing which one it is answers most exam questions about tag choice.',
  summary: {
    en: 'Each remaining tag carries one characteristic liability. Strep elutes with desthiobiotin under very mild conditions but fails in biotin-rich media. FLAG is extremely specific but the antibody resin is expensive and low capacity, and its own sequence is an enterokinase site. MBP and GST are solubility tags too, but MBP needs its native fold so cannot work under denaturants, and GST dimerises. HALO binds covalently, which means the resin is single-use.',
    cn: '剩下的每个标签都有一个特征性的软肋。Strep 用脱硫生物素在极温和条件下洗脱，但在富含生物素的培养基里失效。FLAG 特异性极强，但抗体树脂昂贵、容量低，而且它自身的序列就是肠激酶位点。MBP 和 GST 兼作溶解性标签，但 MBP 需要天然折叠所以不能用于变性条件，GST 会二聚。HALO 是共价结合的，这意味着树脂只能用一次。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.21', src: 'img/figures/L4_s21_1.webp' },
    { slide: 'L4 s.22', src: 'img/figures/L4_s22_1.webp' },
    { slide: 'L4 s.22', src: 'img/figures/L4_s22_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**每个标签记住一条软肋就够了**：Strep 怕生物素、FLAG 贵而且容量低、MBP 不能用于变性条件、GST 会二聚且洗脱液是还原剂、HALO 的树脂只能用一次。\n\n' +
            '考题问「选哪个标签」，基本就是在问「**哪条软肋在你的场景里致命**」。',
  skipIt: 'WSHPQFEK、DYKDDDDK 这两串序列不用背（除非要用 FLAG 那个巧合，见下）。老师在第 5 讲开头给第 4 讲做 RECAP 时写了 **StrepTag** 和 **MBP、HALO tag**——**这几个标签是被点名的**，要能说出各自的取舍。',
  explain: [
    {
      q: 'Strep 系统为什么要「故意把亲和力做低」？',
      a: '**因为最强的不等于最好用的——这是这一节最值得带走的一个工程判断。**\n\n' +
         '它的出发点是天然的**链霉亲和素–生物素**（第 2-38 节）：**K_D = 10⁻¹⁵ M**，已知最强的非共价相互作用之一。\n\n' +
         '听起来完美——**结合牢固意味着你可以洗得任意狠，杂质走得干干净净。**\n\n' +
         '**但同一件事也意味着：你的蛋白也下不来。**要拆开它需要煮沸在 8 M 盐酸胍里，那时蛋白早毁了。\n\n' +
         '**所以 Strep 系统是有意做的一次降级：**\n\n' +
         '**Streptactin** 是**改造过的、亲和力降低的**链霉亲和素；\n\n' +
         '**脱硫生物素（desthiobiotin）** 是**结合力比生物素弱**的类似物。\n\n' +
         '两个弱化叠在一起，结果是：**结合仍然够特异、够牢，但可以在极温和的条件下用脱硫生物素竞争洗脱**——中性 pH、常温、不加变性剂。\n\n' +
         '**这是一次有意识的妥协：牺牲结合强度，换来可逆性。**\n\n' +
         '**顺带解释了 Twin-Strep 的存在**：单个 Strep 标签降级降得有点多，于是**串两个**，靠多价效应（avidity）把亲和力补回来一些——**在「太强不能洗脱」和「太弱抓不住」之间再微调一次。**',
      takeaway: '天然的链霉亲和素太强导致洗不下来，所以 Strep 系统故意降低亲和力换取温和洗脱。Twin-Strep 再补回来一点。'
    },
    {
      q: 'FLAG 那个「自己就是切割位点」是怎么回事？',
      a: '**这是一个很少见的巧合式设计，值得记住。**\n\n' +
         'FLAG 标签的序列是 **DYKDDDDK**。\n\n' +
         '而**肠激酶（enterokinase）识别的序列正好是 DDDDK**——**就藏在 FLAG 标签自己里面。**\n\n' +
         '**所以这个标签可以被「识别它自己」的蛋白酶切掉，不需要另外工程一个切割位点进去。**\n\n' +
         '**对比一下常规做法**（第 2-41 节）：一般的标签，比如 His，你必须在标签和蛋白之间**专门插一段 TEV 或者 3C 蛋白酶位点**。那意味着构建体里要多几个残基，而且切完之后蛋白上还会留下几个残基的疤（跟第 1-15 节 Gateway 那 8 个残基是同一类问题）。\n\n' +
         '**FLAG 省掉了这一步。**\n\n' +
         '**那为什么大家不都用 FLAG？**因为它的软肋很实在：\n\n' +
         '**抗体树脂很贵**（要生产和纯化单克隆抗体）；\n\n' +
         '**容量低**（抗体分子大，单位体积树脂上装不了多少）。\n\n' +
         '**所以它的位置是：小量、需要极高特异性的场合**——pull-down、膜蛋白纯化。**不适合做大量制备**，那种时候 His 的高容量（50 mg/mL）赢得毫无悬念。',
      takeaway: 'DDDDK 就是肠激酶位点，所以 FLAG 能被切自己的酶切掉，不用另外加位点。但树脂贵、容量低。'
    },
    {
      q: 'GST 的洗脱液本身就是个隐患，为什么？',
      a: '**因为洗脱用的是还原型谷胱甘肽，而它是一个还原剂。**\n\n' +
         'GST 结合的是谷胱甘肽，所以洗脱当然是用**游离的还原型谷胱甘肽**去竞争——这一步逻辑上没问题。\n\n' +
         '**问题在于：如果你的蛋白含二硫键，这一步可能把它们还原掉。**\n\n' +
         '想一想你为了让那些二硫键形成付出了多少：第 2-13 节要么改造菌株（Origami/SHuffle，菌长得慢），要么送到周质（产量低）。**结果在纯化的洗脱这一步，一管还原剂就把它们拆了。**\n\n' +
         '**所以 GST 对含二硫键的蛋白是双重不合适：**\n\n' +
         '**第一，洗脱液是还原剂**（这一条）；\n\n' +
         '**第二，GST 自己在溶液里会二聚**——它会强行把你的蛋白也拉成二聚体，干扰你对蛋白真实寡聚状态的判断。这对研究蛋白相互作用或者做结构的人是硬伤。\n\n' +
         '**这条也是一个通用提醒：洗脱条件本身是实验的一部分，不是「最后走个过场」。**\n\n' +
         '每种标签的洗脱条件都要单独想一遍：咪唑会不会干扰下游？低 pH 会不会变性？谷胱甘肽会不会还原？麦芽糖（MBP）倒是最温和的——那也是 MBP 的一个真实优点。',
      takeaway: 'GST 用还原型谷胱甘肽洗脱，会拆掉你辛苦做出来的二硫键。加上它自己会二聚，对这类蛋白是双重不合适。'
    },
    {
      q: 'MBP 为什么「不能用于变性条件」？这跟 His 标签的差别在哪？',
      a: '**因为 MBP 靠的是自己折叠好的那个口袋去抓麦芽糖。**\n\n' +
         'MBP 是一个 **43 kDa 的完整蛋白**，它结合麦芽糖靠的是**天然折叠形成的结合口袋**。\n\n' +
         '**变性剂一来，口袋散了，结合能力完全消失。**\n\n' +
         '**而 His 标签靠的是配位键**（第 2-36 节），**不依赖任何折叠**——一条被拉直的链上，六个组氨酸照样抓得住镍。\n\n' +
         '**所以：**\n\n' +
         '**要在变性条件下纯化（比如包涵体）→ 只能 His。**\n\n' +
         '**MBP、GST、抗体识别的标签，全部出局**，因为它们都依赖某种折叠或构象。\n\n' +
         '**这就是为什么 MBP 常常跟 His 标签配成一对用**（幻灯片提到的 tandem purification）：\n\n' +
         'MBP 负责它擅长的事——**在表达阶段提高溶解度**（第 2-12 节）；\n\n' +
         'His 负责纯化，**而且在任何条件下都能用**。\n\n' +
         '**两个标签分工，各自做自己最擅长的一件事**——这也正好是第 2-35 节双标签那条思路的另一个版本。',
      takeaway: 'MBP 的结合口袋依赖折叠，变性就没了；His 靠配位键不依赖折叠。所以两者常配成一对用。'
    }
  ],
  points: [
    { term: 'Strep-tag', en: 'WSHPQFEK, an uncharged short peptide. Twin-Strep is two copies joined by a linker, giving higher affinity. Capacity up to 5 mg/mL.', cn: 'WSHPQFEK，不带电荷的短肽。Twin-Strep 是用连接子连起来的两个拷贝，亲和力更高。容量最高 5 mg/mL。' },
    { term: 'Streptactin', en: 'A modified streptavidin with lower biotin affinity. Streptactin XT has higher affinity for the tag. Elution is with desthiobiotin, or biotin for XT — very mild conditions.', cn: '一种降低了生物素亲和力的改造链霉亲和素。Streptactin XT 对标签的亲和力更高。用脱硫生物素洗脱，XT 则用生物素——条件非常温和。' },
    { term: 'Strep limitation', en: 'Not suitable for media containing high biotin — dialysis is needed first.', cn: '不适用于含高浓度生物素的培养基——必须先透析。' },
    { term: 'FLAG-tag', en: 'The 8-mer DYKDDDDK, extremely specific, with 3xFLAG available for higher affinity. Recognised by the M1 monoclonal antibody at 100 nM.', cn: '八肽 DYKDDDDK，特异性极强，还有亲和力更高的 3×FLAG 版本。由 M1 单抗识别，亲和力 100 nM。' },
    { term: 'FLAG use and cost', en: 'Widely used for pull-downs and membrane protein purification, less for soluble proteins. Low binding capacity and expensive.', cn: '广泛用于 pull-down 和膜蛋白纯化，较少用于可溶蛋白。结合容量低且昂贵。' },
    { term: 'FLAG elution', en: 'EDTA, since binding is calcium-dependent; 3xFLAG peptide, specific but expensive; or pH 3.0, which can damage the protein. It can also be cleaved off directly by enterokinase, because DDDDK is the enterokinase site.', cn: 'EDTA（因为结合依赖钙离子）；3×FLAG 肽（特异但贵）；或者 pH 3.0（可能损伤蛋白）。它还能被肠激酶直接切掉，因为 DDDDK 本身就是肠激酶位点。' },
    { term: 'MBP', en: 'Maltose-binding protein, 43 kDa, native to E. coli, typically fused at the N-terminus. Increases expression and solubility. Eluted with 10 mM maltose, very mild.', cn: '麦芽糖结合蛋白，43 kDa，大肠杆菌自身的蛋白，通常融合在 N 端。提高表达量和溶解性。用 10 mM 麦芽糖洗脱，非常温和。' },
    { term: 'MBP limitation', en: 'The native fold of MBP is required for binding, so it cannot be used under denaturing conditions. Often paired with a His-tag for tandem purification.', cn: 'MBP 必须保持天然折叠才能结合，所以不能用于变性条件。常与 His 标签配对做串联纯化。' },
    { term: 'GST', en: 'Glutathione S-transferase, 26 kDa, from Schistosoma japonicum. Also a solubility tag. Eluted with reduced glutathione — which can in principle reduce disulfide bonds in your protein. Forms dimers in solution.', cn: '谷胱甘肽 S-转移酶，26 kDa，来自日本血吸虫。也是溶解性标签。用还原型谷胱甘肽洗脱——原则上这可能还原你蛋白里的二硫键。在溶液中会形成二聚体。' },
    { term: 'HALO, SNAP and CLIP', en: 'HALO is 34 to 36 kDa from Promega, forming a covalent link to reactive probes for purification and/or labelling — so the resin is single-use. SNAP and CLIP from NEB are similar in principle but mostly used in cell biology.', cn: 'HALO 是 Promega 的 34–36 kDa 标签，与反应性探针形成共价连接，可用于纯化和/或标记——所以树脂只能用一次。NEB 的 SNAP 和 CLIP 原理类似，但主要用于细胞生物学。' }
  ],
  beyondPoints: [
    { term: 'Each tag has one characteristic liability', en: 'Strep fails in biotin-rich media. FLAG is expensive and low-capacity. MBP cannot survive denaturants. GST dimerises and its eluent is a reducing agent. HALO consumes the resin. Knowing which liability applies is usually enough to answer a tag-choice question.', cn: '每个标签都有一个特征性的软肋：Strep 在富含生物素的培养基里失效；FLAG 贵且容量低；MBP 经不起变性剂；GST 会二聚，而且洗脱剂本身是还原剂；HALO 会消耗树脂。知道是哪一条软肋，通常就足以回答标签选择的问题。' },
    { term: 'The GST eluent is itself a hazard', en: 'Reduced glutathione is a reducing agent, so eluting a disulfide-containing protein from GST risks reducing the bonds you were trying to preserve. That is a second, separate reason to be careful with GST beyond the dimerisation problem.', cn: '还原型谷胱甘肽本身就是还原剂，所以从 GST 柱上洗脱含二硫键的蛋白，有可能把你想保住的键还原掉。这是除二聚问题之外，对 GST 需要谨慎的第二个独立理由。' },
    { term: 'FLAG deserves a second look', en: 'DDDDK being the enterokinase recognition site means the tag can be removed by the protease that recognises the tag itself — an unusually neat arrangement, since no separate cleavage site has to be engineered in.', cn: 'DDDDK 就是肠激酶的识别位点，意味着这个标签可以被识别它自身的蛋白酶切掉——这是一个格外优雅的安排，因为不需要额外设计一个切割位点进去。' }
  ],
  terms: [
    { en: 'Desthiobiotin', cn: '脱硫生物素', def_en: 'A biotin analogue with lower affinity for streptavidin derivatives, used to elute Strep-tagged protein from Streptactin under very mild conditions.', def_cn: '一种对链霉亲和素衍生物亲和力较低的生物素类似物，用于在极温和条件下把 Strep 标签蛋白从 Streptactin 上洗脱下来。' },
    { en: 'Twin-Strep-tag', cn: '双 Strep 标签', def_en: 'Two copies of WSHPQFEK joined by a linker, giving higher affinity than the single tag through avidity.', def_cn: '用连接子连接的两个 WSHPQFEK 拷贝，通过多价效应获得比单标签更高的亲和力。' },
    { en: 'Enterokinase', cn: '肠激酶', def_en: 'A protease recognising DDDDK. Because that sequence is part of the FLAG tag itself, it can remove the tag without a separately engineered cleavage site.', def_cn: '识别 DDDDK 的蛋白酶。因为该序列本身就是 FLAG 标签的一部分，所以不需要额外设计切割位点就能切掉标签。' },
    { en: 'Avidity', cn: '亲合力（多价效应）', def_en: 'The enhanced apparent affinity obtained when multiple binding sites engage at once, as in Twin-Strep or 3xFLAG.', def_cn: '多个结合位点同时作用时获得的表观亲和力增强，如 Twin-Strep 和 3×FLAG。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can a Strep-tag purification fail when working with insect or mammalian culture medium?',
      q_cn: '为什么用昆虫或哺乳动物培养基时 Strep 标签纯化可能失败？',
      options: ['The medium is too acidic for the Streptactin resin to bind', 'Free biotin in the medium occupies the Streptactin binding sites', 'Streptactin denatures at the 37 degrees these cultures are grown at', 'Medium proteases clip the tag off, which is why the sample must be dialysed'],
      answer: 1,
      optionRefs: { 3: '2-28' },
      why_en: 'Streptactin is a modified streptavidin, so free biotin competes directly for its sites. Insect and mammalian media contain enough to saturate the resin, and the sample must be dialysed first.',
      why_cn: 'Streptactin 是改造过的链霉亲和素，所以游离生物素会直接竞争它的结合位点。昆虫和哺乳动物培养基里的含量足以让树脂饱和，样品必须先透析。' },
    { type: 'mcq',
      q_en: 'Why is the FLAG tag unusually convenient to remove?',
      q_cn: '为什么 FLAG 标签特别方便切除？',
      options: ['It falls off the protein spontaneously at neutral pH', 'Its own DDDDK sequence is itself the enterokinase cleavage site', 'It is cleaved by TEV protease without any added linker', 'It is joined to the protein non-covalently rather than by a peptide bond'],
      answer: 1,
      optionRefs: { 2: '2-41' },
      optionNotes: {
        3: { en: 'The tag is translated as part of the same polypeptide, so it is joined to the protein by ordinary peptide bonds — that is precisely why removing it needs a protease at all. What is non-covalent is the tag-to-antibody binding on the resin, which is a different interaction.', cn: '标签是和蛋白一起翻译出来的，跟蛋白之间就是普通的 peptide bond，所以要去掉它才必须动用 protease。非共价的是柱子上「标签–抗体」那一步的结合，那是另一回事。' }
      },
      why_en: 'The tag contains its own protease site, so you get removal without engineering an extra linker sequence. Most other tags require a separately designed TEV or PreScission site.',
      why_cn: '这个标签自带蛋白酶位点，不需要再设计一段额外的连接序列就能切除。大多数其他标签都需要单独设计 TEV 或 PreScission 位点。' },
    { type: 'mcq',
      q_en: 'Why is the GST elution condition itself a potential problem?',
      q_cn: '为什么 GST 的洗脱条件本身就可能是个问题？',
      options: ['The elution buffer is strongly acidic, so the target unfolds unless it is neutralised at once', 'The reduced glutathione can reduce disulfide bonds in the target', 'Elution requires 8 M urea, which unfolds the target', 'The eluent is EDTA, which strips metal ions out of metalloproteins'],
      answer: 1,
      why_en: 'You elute with reduced glutathione, which in principle can reduce disulfides in the target. That is a distinct concern from the better-known problem that GST dimerises in solution.',
      why_cn: '洗脱用的是还原型谷胱甘肽，原则上可能还原目标蛋白中的二硫键。这和更广为人知的「GST 在溶液中二聚」是两个不同的问题。' },
    { type: 'short',
      q_en: 'Why is the HALO-tag resin single-use, and what does that same property buy you?',
      q_cn: '为什么 HALO 标签的树脂只能用一次？同样这个性质换来了什么？',
      accept: ['covalent', 'irreversible', 'labelling', 'probe'],
      answer_en: 'Because the linkage is covalent. The tag forms a genuine chemical bond with the chloroalkane ligand on the resin rather than a reversible non-covalent interaction, so the protein cannot be eluted and the resin cannot be regenerated — every purification consumes it. What the same property buys is that the bond is also used deliberately for labelling: because HALO reacts covalently with reactive probes, the identical chemistry that makes purification single-use lets you attach a fluorophore or other reporter permanently and specifically. So it is a purification tag and a labelling tag using one mechanism.',
      answer_cn: '因为这个连接是共价的。标签与树脂上的氯代烷配体形成真正的化学键，而不是可逆的非共价相互作用，所以蛋白洗不下来、树脂也无法再生——每次纯化都消耗掉它。而同样这个性质换来的好处是：这个键也被有意用于标记。因为 HALO 会与反应性探针共价反应，让纯化变成一次性的那套化学，正好也让你能把荧光基团或其他报告分子永久且特异地接上去。所以它用同一个机制同时充当纯化标签和标记标签。'
    }
  ],
  oral: {
    q_en: 'Compare the common affinity tags other than His.',
    q_cn: '比较 His 之外常见的几种亲和标签。',
    model_en: 'The way I would organise them is that each carries one characteristic liability. The Strep-tag is WSHPQFEK, a short uncharged peptide, purified on Streptactin, which is a modified streptavidin with deliberately lowered biotin affinity; Twin-Strep joins two copies with a linker for higher avidity, and Streptactin XT binds the tag more tightly. Capacity is up to five milligrams per millilitre and elution is with desthiobiotin, or biotin for XT, under very mild conditions — that mildness is its selling point. Its liability is that it fails in media containing high biotin, so insect and mammalian cultures need dialysing first. The FLAG-tag is the eight-mer DYKDDDDK, recognised by the M1 monoclonal antibody at about a hundred nanomolar, and it is extremely specific, with a 3xFLAG version for higher affinity. It is used mainly for pull-downs and membrane proteins. Its liability is cost and low binding capacity. It has three elution routes — EDTA, because binding is calcium-dependent; 3xFLAG peptide, specific but expensive; or pH three, which can damage the protein — and a rather neat fourth option, because DDDDK is itself the enterokinase site, so the tag can be cleaved off by a protease that recognises the tag itself, with no separate site engineered in. MBP is maltose-binding protein, forty-three kilodaltons, native to E. coli, usually fused at the N-terminus, and it increases both expression and solubility, eluting very mildly with ten millimolar maltose. Its liability is that binding requires MBP\'s own native fold, so it cannot be used under denaturing conditions — which is why it is often paired with a His-tag for tandem purification. GST is twenty-six kilodaltons from Schistosoma japonicum, also a solubility tag, and it has two liabilities: it dimerises in solution, which confounds any study of oligomeric state, and it elutes with reduced glutathione, a reducing agent that can in principle reduce disulfides in your own protein. Finally HALO, thirty-four to thirty-six kilodaltons, binds covalently, so purification resins are single-use — but the same covalent chemistry is what lets it attach reactive probes for labelling. SNAP and CLIP tags work similarly but are mostly used in cell biology.',
    checklist: ['Organise by each tag\'s characteristic liability', 'Strep: WSHPQFEK, Streptactin, desthiobiotin elution, very mild', 'Twin-Strep for avidity; Streptactin XT binds tighter', 'Strep liability: fails in high-biotin media, dialyse first', 'FLAG: DYKDDDDK, M1 mAb, extremely specific, 3xFLAG for affinity', 'FLAG liability: expensive, low capacity', 'FLAG elution: EDTA (Ca-dependent), 3xFLAG peptide, or pH 3', 'FLAG bonus: DDDDK is the enterokinase site, so self-cleavable', 'MBP: 43 kDa, N-terminal, solubility tag, 10 mM maltose elution', 'MBP liability: needs its native fold, so no denaturing conditions', 'GST: 26 kDa, solubility tag, but dimerises AND elutes in a reducing agent', 'HALO: covalent, so single-use resin, but doubles as a labelling tag']
  }
},

{
  id: '2-38',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.38',
  enTitle: 'Antibodies, lectins and the streptavidin–biotin problem',
  cnTitle: '抗体、凝集素，以及链霉亲和素–生物素的难题',
  slides: 'L4 s.23',
  coverage: 'full',
  coverageNote: 'The resins and their elution conditions are on the slide. Why the strongest known non-covalent interaction is a liability rather than an advantage is the beyond-the-slides point, and it explains why the Strep system exists at all.',
  summary: {
    en: 'Protein A and protein G bind the antibody Fc fragment and elute at acidic pH, which must be neutralised immediately. Ligand L binds the kappa light chain instead, so it works for scFv and Fab fragments that have no Fc. Lectins bind carbohydrates and purify glycoproteins, eluting competitively with monosaccharides. Streptavidin–biotin has a dissociation constant of 10 to the minus 15 molar, which is so strong that elution under native conditions is essentially impossible.',
    cn: 'Protein A 和 protein G 结合抗体的 Fc 段，在酸性 pH 下洗脱，洗脱后必须立即中和。Ligand L 结合的是 κ 轻链，所以适用于没有 Fc 的 scFv 和 Fab 片段。凝集素结合糖类、用于纯化糖蛋白，用单糖竞争性洗脱。链霉亲和素–生物素的解离常数是 10⁻¹⁵ M，强到在天然条件下基本无法洗脱。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L4 s.23', src: 'img/figures/L4_s23_1.webp' },
    { slide: 'L4 s.23', src: 'img/figures/L4_s23_2.webp' },
    { slide: 'L4 s.23', src: 'img/figures/L4_s23_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**链霉亲和素–生物素的 K_D = 10⁻¹⁵ M，强到基本洗不下来**——而这个「优点」和「缺点」是同一件事。\n\n' +
            '两条出路：用**降低亲和力的改造版**（Streptactin + 脱硫生物素），或者**干脆不洗脱**，把蛋白留在珠子上做下游实验。',
  skipIt: '**这一节没有 RECAP 可以引用。**从幻灯片看，抗体纯化、凝集素、链霉亲和素这几页在 L4 和 L5 两个 deck 里重复出现（L4 尾部 = L5 开头），而**老师给第 4 讲做的 RECAP 停在 MBP / HALO，没有往下列**；第 5 讲则没有 RECAP（RECAP 只做到第 4 讲）。所以这一节的取舍是判断，不是老师的话——建议记那个 K_D 的两面性，那是真正可迁移的道理。',
  explain: [
    {
      q: 'K_D = 10⁻¹⁵ M 到底意味着什么？',
      trace: {
        what: '**解离常数**，衡量结合有多牢——**数值越小，结合越强**。10⁻¹⁵ M（飞摩尔级）是自然界已知最强的**非共价**相互作用之一，强度接近共价键。',
        from: '链霉亲和素是一个**四聚体**，每个亚基抓一个生物素。这个系统在自然界里的作用跟争夺生物素这种维生素有关，被进化打磨得极端牢固。',
        to: '**优点和缺点是同一句话。**\n\n**优点**：结合极牢，所以**你可以洗得任意狠**——高盐、去污剂、随便来，杂质走得干干净净，本底几乎为零。\n\n**缺点**：**你的蛋白也下不来。**要把它拆开，需要在 8 M 盐酸胍里煮沸——到那时蛋白已经废了。\n\n**所以这是一个「结合太好，反而不好用」的例子。**',
        family: '**两条出路：**\n\n**一是降低亲和力**——Streptactin + 脱硫生物素（第 2-37 节），有意做的妥协。也有单体化的链霉亲和素和各种突变体。\n\n**二是不洗脱**——把蛋白就留在珠子上，直接做下游实验：pull-down、固定化酶、体外结合测定。'
      },
      takeaway: '洗得狠和拿不下来是同一件事。出路要么降低亲和力，要么干脆不洗脱、就在珠子上做实验。'
    },
    {
      q: '「不洗脱」这条出路，为什么值得单独记住？',
      a: '**因为它推翻了一个默认假设：纯化不一定要以「拿到溶液里的蛋白」结束。**\n\n' +
         '想一想你接下来到底要做什么：\n\n' +
         '**做 pull-down**（看谁跟你的蛋白结合）→ 蛋白挂在珠子上正好，加细胞裂解液进去孵育、洗、然后直接上样跑胶。**从头到尾不需要它离开珠子。**\n\n' +
         '**做固定化酶**（让它反复催化反应）→ 挂在珠子上反而是优点：反应完把珠子滤出来，酶可以回收再用。\n\n' +
         '**做体外结合测定** → 同理。\n\n' +
         '**所以「洗不下来」只有在你需要游离蛋白时才是缺点。**\n\n' +
         '**这个思路可以反过来用：如果你从一开始就打算做 pull-down，那么选一个「结合极强、洗不下来」的系统反而是最优选择**——你得到的是最低的本底，而你本来就不打算洗脱。\n\n' +
         '**一个技术的「缺点」是不是缺点，取决于你的下游是什么。**这门课里这个道理已经出现过好几次了：包涵体（第 2-10 节）、Taq 多加的那个 A（第 1-16 节）。',
      takeaway: '如果下游是 pull-down 或固定化酶，蛋白留在珠子上正好。「洗不下来」只有在你需要游离蛋白时才是缺点。'
    },
    {
      q: 'Protein A 洗脱后为什么必须「立即」中和？',
      a: '**因为 pH 2.8 对抗体是危险的，而危险的程度取决于停留多久。**\n\n' +
         'Protein A 和 protein G 结合抗体的 **Fc 段**，这个结合很牢，**只能靠酸把它拆开**（典型是 100 mM 甘氨酸、pH 2.8）。\n\n' +
         '**抗体在 pH 2.8 里待着会变性、会聚集。**聚集尤其麻烦，因为它是不可逆的——聚集了就回不来了。\n\n' +
         '**所以做法是：把洗脱液直接滴进已经装好中和缓冲液的收集管里**（比如 1 M Tris pH 9）。\n\n' +
         '这样一来，**低 pH 只存在于「蛋白从柱子上下来」到「滴进中和液」之间的那几秒**。\n\n' +
         '**这是一个很值得学的通用手法：当一个必要的条件同时是有害的，就把暴露时间压到最短，而不是去寻找一个更温和但无效的条件。**\n\n' +
         '同一个思路在别处也见得到：第 2-26 节超声要开 10 秒停 30 秒（把局部高温的暴露切碎），第 2-28 节「尽快上第一根柱子」（把蛋白酶的作用时间压短）。\n\n' +
         '**都是在管理「暴露时间」这个变量，而不是「条件强度」这个变量。**',
      takeaway: '把洗脱液直接收进中和缓冲液里，让低 pH 只存在几秒。管理暴露时间，而不是降低条件强度。'
    },
    {
      q: 'Ligand L 和 Avi-tag 各自补上了什么缺口？',
      a: '**两个都是「前面那个方法用不了的时候怎么办」。**\n\n' +
         '**Ligand L 补的是「没有 Fc」这个缺口。**\n\n' +
         'Protein A / G 认的是**Fc 段**。而 **scFv 和 Fab 这类抗体片段根本没有 Fc**——它们是被特意切掉或者从头就不含 Fc 的工程分子。所以 Protein A 对它们**完全无效**。\n\n' +
         'Ligand L 认的是 **κ 轻链**，那是这些片段仍然保留的部分。**所以选哪个，取决于你手上那个分子还剩哪个部件。**\n\n' +
         '**Avi-tag 补的是「怎么定点装生物素」这个缺口。**\n\n' +
         '它本身不被任何树脂识别。它是一段短肽（GLNDIFEAQKIEWHE），**会被 BirA 连接酶特异地在其中那个赖氨酸上装上一个生物素**。之后你再用链霉亲和素去抓。\n\n' +
         '**为什么不直接用化学方法给蛋白装生物素？**回到第 1-3 节那个问题：化学生物素化用的是 NHS 酯，**它认所有赖氨酸**，而蛋白表面有几十个——你得到的是一锅**标记位置和数量都不一样**的混合物。\n\n' +
         '**Avi-tag 给的是「一个分子，一个生物素，位置确定」。**而且 BirA 可以在细胞内工作，所以能做活细胞里的邻近标记（BioID）。\n\n' +
         '**又一次是那条老规律：定点的办法，都要先在 DNA 上加一段序列。**',
      takeaway: 'Ligand L 认 κ 轻链，所以能抓没有 Fc 的抗体片段。Avi-tag 让生物素定点安装，避开 NHS 那种随机标记。'
    }
  ],
  points: [
    { term: 'Protein A and protein G', en: 'Bacterial proteins binding the Fc fragment of antibodies. Elution is at acidic pH, for example 100 mM glycine at pH 2.8 — and you must neutralise immediately on elution.', cn: '结合抗体 Fc 段的细菌蛋白。在酸性 pH 下洗脱，例如 100 mM 甘氨酸 pH 2.8——洗脱后必须立即中和。' },
    { term: 'Fc as a fusion partner', en: 'Fc fragments are also used as fusion partners specifically to enable this purification route.', cn: 'Fc 段也被用作融合伴侣，正是为了能走这条纯化路线。' },
    { term: 'Ligand L', en: 'Binds the kappa light chain, which makes it suitable for scFv and Fab purification — fragments that have no Fc region at all.', cn: '结合 κ 轻链，因此适合纯化 scFv 和 Fab——这些片段根本没有 Fc 区。' },
    { term: 'Antigen-specific chromatography', en: 'Immobilise the antigen itself and capture the antibody that recognises it.', cn: '把抗原本身固定化，捕获识别它的抗体。' },
    { term: 'Lectins', en: 'Carbohydrate-binding proteins — concanavalin A, lentil lectin, wheat germ lectin. Used to purify glycosylated proteins, typically with competitive elution by monosaccharides.', cn: '碳水化合物结合蛋白——伴刀豆球蛋白 A、扁豆凝集素、麦胚凝集素。用于纯化糖基化蛋白，通常用单糖竞争性洗脱。' },
    { term: 'Streptavidin', en: 'A tetramer, forming one of the strongest known non-covalent interactions, with a dissociation constant of 10 to the minus 15 molar. Proteins must be biotinylated, and elution under native conditions is difficult.', cn: '四聚体，形成已知最强的非共价相互作用之一，解离常数为 10⁻¹⁵ M。蛋白必须先生物素化，而在天然条件下很难洗脱。' },
    { term: 'Lower-affinity variants', en: 'Modified streptavidins exist with reduced affinity — monomeric streptavidin and streptavidin muteins.', cn: '存在亲和力降低的改造版本——单体链霉亲和素和链霉亲和素突变体。' },
    { term: 'Avi-tag', en: 'The short peptide GLNDIFEAQKIEWHE, specifically biotinylated by BirA ligase at the lysine residue, either in vitro or in vivo. Used for proximity labelling such as BioID.', cn: '短肽 GLNDIFEAQKIEWHE，由 BirA 连接酶在其赖氨酸残基上特异性生物素化，可在体外或体内进行。用于 BioID 这类邻近标记。' }
  ],
  beyondPoints: [
    { term: 'What a K_D of 10^-15 M actually means in practice', en: 'It is so strong as to be nearly irreversible. The advantage is that binding is extremely firm and you can wash as harshly as you like, so contaminants come off completely clean. The disadvantage is the same fact: you cannot get the protein off. Dissociating it would need something like boiling in 8 M guanidinium, by which point the protein is ruined.', cn: '强到近乎不可逆。好处是结合极其牢固，你可以随便怎么剧烈地洗，杂质洗得干干净净。坏处是同一件事：你把蛋白弄不下来。要让它解离得用 8 M 盐酸胍煮，而到那时蛋白已经废了。' },
    { term: 'Two ways out', en: 'Either use an affinity-reduced engineered version — Streptactin with desthiobiotin gives mild elution — or do not elute at all, and keep the protein on the beads for the downstream experiment, as in a pull-down or an immobilised enzyme.', cn: '两条出路：要么用亲和力降低的改造版本（Streptactin 配脱硫生物素，温和洗脱），要么干脆不洗脱，把蛋白留在珠子上直接做下游实验，比如 pull-down 或固定化酶。' },
    { term: 'This is exactly why the Strep system exists', en: 'The Strep-tag system is deliberately engineered to lower the affinity — sacrificing some binding strength in exchange for the ability to elute mildly with desthiobiotin. It is a designed compromise, not a weaker accident.', cn: 'Strep 标签系统正是「故意把亲和力调低」的产物——牺牲一部分结合强度，换来用脱硫生物素温和洗脱的能力。这是有意设计的折中，而不是偶然做弱了。' },
    { term: 'Why protein A eluate must be neutralised at once', en: 'Elution at pH 2.8 is harsh, and antibodies left sitting in it will denature or aggregate. Collecting into a neutralising buffer means the low pH exists only for the seconds it takes to release the protein.', cn: 'pH 2.8 的洗脱条件很剧烈，抗体在里面放着会变性或聚集。把洗脱液直接收集到中和缓冲液里，可以让低 pH 只存在于释放蛋白所需的那几秒钟。' }
  ],
  terms: [
    { en: 'Protein A / protein G', cn: 'Protein A / protein G', def_en: 'Bacterial cell-wall proteins that bind the Fc region of immunoglobulins, the standard capture reagents for antibody purification.', def_cn: '结合免疫球蛋白 Fc 区的细菌细胞壁蛋白，是抗体纯化的标准捕获试剂。' },
    { en: 'Lectin', cn: '凝集素', def_en: 'A carbohydrate-binding protein such as concanavalin A, used to purify glycoproteins and eluted competitively with a free monosaccharide.', def_cn: '像伴刀豆球蛋白 A 这样的碳水化合物结合蛋白，用于纯化糖蛋白，用游离单糖竞争性洗脱。' },
    { en: 'Avi-tag', cn: 'Avi 标签', def_en: 'The peptide GLNDIFEAQKIEWHE, site-specifically biotinylated by BirA ligase, allowing controlled attachment of a single biotin.', def_cn: '肽段 GLNDIFEAQKIEWHE，由 BirA 连接酶位点特异性地生物素化，从而可控地只接上一个生物素。' },
    { en: 'Dissociation constant (K_D)', cn: '解离常数', def_en: 'The concentration at which half the binding sites are occupied. A smaller value means tighter binding; streptavidin–biotin at 10^-15 M is among the tightest non-covalent interactions known.', def_cn: '半数结合位点被占据时的浓度。数值越小结合越紧；链霉亲和素–生物素的 10⁻¹⁵ M 是已知最紧的非共价相互作用之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why must protein A eluate be neutralised immediately?',
      q_cn: '为什么 protein A 的洗脱液必须立即中和？',
      options: ['To precipitate the contaminating proteins out of the eluate', 'To limit the time the antibody spends at about pH 2.8, where it unfolds', 'To regenerate the resin for the next round of purification', 'To remove the residual glycine left over from the elution buffer'],
      answer: 1,
      why_en: 'The low pH is what releases the antibody from the Fc-binding site, but it is harsh. Collecting into neutralising buffer limits the exposure to the few seconds needed for release.',
      why_cn: '低 pH 是把抗体从 Fc 结合位点上释放下来的手段，但条件很剧烈。直接收集到中和缓冲液里，可以把暴露时间限制在释放所需的那几秒。' },
    { type: 'mcq',
      q_en: 'Why is the streptavidin-biotin interaction problematic for purification?',
      q_cn: '为什么链霉亲和素–生物素相互作用对纯化来说是个麻烦？',
      options: ['The interaction is too weak for the protein to survive the washes', 'At a K_D of 10^-15 M it cannot be reversed under native conditions', 'Streptavidin binds untagged host proteins just as readily', 'Biotin itself denatures the protein it is attached to'],
      answer: 1,
      optionNotes: {
        0: { en: 'The direction is inverted: at a K_D of 10 to the minus 15 M this is about the strongest non-covalent interaction known, so washing is the one thing it survives effortlessly. The liability is the same number read from the other side — nothing native gets the protein off again.', cn: '方向反了：K_D 是 10⁻¹⁵ M，这是已知最强的非共价相互作用之一，洗涤恰恰是它最不怕的。麻烦的是同一个数字的另一面——在天然条件下根本没法把蛋白洗下来。' }
      },
      why_en: 'Extreme affinity is an advantage for washing and a liability for elution — the same property does both. Getting the protein off would need conditions that destroy it.',
      why_cn: '极高的亲和力对洗涤是优势、对洗脱是负担——同一个性质造成了两个结果。要把蛋白弄下来，所需的条件会把它毁掉。' },
    { type: 'mcq',
      q_en: 'Which resin would you use to purify an scFv fragment?',
      q_cn: '纯化 scFv 片段你会用哪种树脂？',
      options: ['Protein A', 'Protein G', 'Ligand L', 'Concanavalin A'],
      answer: 2,
      optionNotes: {
        0: { en: 'Protein A binds the Fc region, and an scFv is exactly the construct built without one — only the two variable domains joined by a linker. The resin is chosen by which part of the antibody your molecule still has, not by the fact that it came from an antibody.', cn: 'Protein A 认的是 Fc 区，而 scFv 恰恰是把 Fc 去掉、只留两个可变域再用 linker 连起来的分子。选树脂看的是你手上这个分子还保留哪个部件，而不是它来源于抗体。' },
        1: { en: 'Protein G is not the Fc-independent alternative to protein A — it also binds Fc, and the difference between the two is which species and IgG subclasses they cover. On a fragment with no Fc at all they fail together; ligand L works because it reads the kappa light chain.', cn: 'Protein G 并不是「不依赖 Fc」的那个替代品——它同样结合 Fc，它和 protein A 的区别只是覆盖哪些物种和 IgG 亚类。对完全没有 Fc 的片段，两者一起失效；ligand L 能用是因为它认 κ 轻链。' }
      },
      why_en: 'scFv and Fab fragments have no Fc region, so protein A and protein G cannot bind them. Ligand L recognises the kappa light chain instead, which those fragments do have.',
      why_cn: 'scFv 和 Fab 片段没有 Fc 区，所以 protein A 和 protein G 结合不上。Ligand L 识别的是 κ 轻链，而这些片段是有的。' },
    { type: 'short',
      q_en: 'The streptavidin-biotin bond is the strongest known non-covalent interaction. Explain why that is a mixed blessing and how the field works around it.',
      q_cn: '链霉亲和素–生物素是已知最强的非共价相互作用。解释为什么这既是好事也是坏事，以及这个领域是怎么绕过它的。',
      accept: ['irreversible', 'cannot elute', 'Streptactin', 'desthiobiotin', 'on the beads'],
      answer_en: 'With a dissociation constant of ten to the minus fifteen molar it is effectively irreversible, and that single fact is both the advantage and the problem. The advantage is that binding is so firm you can wash as harshly as you like without losing the target, so contaminants are removed completely. The problem is that you cannot get the protein off again — dissociating it would take something like boiling in eight molar guanidinium, and the protein would not survive that. There are two ways around it. One is to use an engineered version with deliberately reduced affinity: that is exactly what the Strep-tag system is, Streptactin being a modified streptavidin with lowered biotin affinity, eluted very mildly with desthiobiotin. It sacrifices some binding strength to buy back the ability to elute. The other is to not elute at all, keeping the protein immobilised on the beads and running the downstream experiment there, which is what a pull-down or an immobilised enzyme does. Monomeric streptavidin and streptavidin muteins exist for the same reason.',
      answer_cn: '解离常数是 10⁻¹⁵ M，实际上不可逆，而这一个事实同时构成了优势和问题。优势是结合极其牢固，你可以随便怎么剧烈地洗都不会丢失目标，杂质被彻底去掉。问题是你没法再把蛋白弄下来——要让它解离得用 8 M 盐酸胍煮，而蛋白撑不过去。有两条绕过的路。一是使用故意降低亲和力的改造版本：Strep 标签系统正是这样，Streptactin 是降低了生物素亲和力的改造链霉亲和素，用脱硫生物素极温和地洗脱。它牺牲一部分结合强度，换回洗脱的能力。二是干脆不洗脱，把蛋白留在珠子上直接在上面做下游实验，pull-down 和固定化酶就是这么做的。单体链霉亲和素和链霉亲和素突变体的存在也是出于同样的理由。'
    }
  ],
  oral: {
    q_en: 'How would you purify an antibody, a glycoprotein, or a biotinylated protein?',
    q_cn: '抗体、糖蛋白、生物素化的蛋白，你分别会怎么纯化？',
    model_en: 'For an antibody, protein A or protein G, which are bacterial proteins that bind the Fc fragment. Elution is at acidic pH, typically a hundred millimolar glycine at pH two point eight, and the important practical detail is that you must neutralise immediately on elution, because that pH is harsh enough to denature or aggregate the antibody if it sits in it. Collecting into neutralising buffer means the low pH exists only for the seconds needed to release the protein. Fc fragments are also used deliberately as fusion partners precisely so that this route becomes available for other proteins. If the antibody fragment has no Fc — an scFv or a Fab — protein A and G will not bind it, and you use ligand L instead, which recognises the kappa light chain. Or you can immobilise the antigen itself and capture the antibody that recognises it. For a glycoprotein, lectins: carbohydrate-binding proteins such as concanavalin A, lentil lectin or wheat germ lectin, eluted competitively with a free monosaccharide. For a biotinylated protein, streptavidin — and here there is a real problem worth discussing. Streptavidin is a tetramer and its interaction with biotin is one of the strongest known non-covalent interactions, with a dissociation constant of ten to the minus fifteen molar. That is effectively irreversible, which is simultaneously the advantage and the liability. You can wash as harshly as you like and lose nothing, so purity is excellent — but you also cannot get the protein off, since dissociation would need something like boiling in eight molar guanidinium and the protein would not survive. So there are two strategies. Use an engineered lower-affinity version — and this is exactly what the Strep-tag system is, Streptactin being modified streptavidin with reduced biotin affinity, eluted mildly with desthiobiotin — or do not elute at all and keep the protein on the beads for the downstream experiment. For controlled biotinylation there is the Avi-tag, GLNDIFEAQKIEWHE, which BirA ligase biotinylates site-specifically at a single lysine, in vitro or in vivo, and that is the basis of proximity labelling methods like BioID.',
    checklist: ['Antibody: protein A or protein G, binding the Fc fragment', 'Elute at pH 2.8 (100 mM glycine) and neutralise IMMEDIATELY', 'Fc also used as a fusion partner to access this route', 'scFv and Fab have no Fc, so use ligand L (kappa light chain)', 'Or immobilise the antigen itself', 'Glycoprotein: lectins — ConA, lentil, wheat germ; elute with monosaccharide', 'Biotinylated: streptavidin, tetramer, K_D 10^-15 M', 'That strength is both the advantage (harsh washing) and the liability (no elution)', 'Workaround 1: engineered lower affinity — Streptactin plus desthiobiotin', 'Workaround 2: do not elute, work on the beads (pull-down, immobilised enzyme)', 'Avi-tag GLNDIFEAQKIEWHE, biotinylated by BirA, used in BioID']
  }
},

{
  id: '2-39',
  chapter: 2,
  lecture: 'Lecture 4',
  section: '2.39',
  enTitle: 'Making your own affinity resin',
  cnTitle: '自己制备亲和树脂',
  slides: 'L4 s.24',
  coverage: 'full',
  coverageNote: 'The four-step procedure and the activated resin chemistries are on the slide. The buffer trap is not, and it is the single most common way a home-made coupling fails — silently, because the resin looks the same either way.',
  summary: {
    en: 'You can immobilise any protein you have purified and turn it into a custom affinity resin. Purify your ligand, buy an activated resin — CNBr-activated, NHS-activated, epoxy or aldehyde — mix the two so the protein couples covalently through its amino, carboxy, thio or hydroxy groups, then wash off what did not bind and calculate the coupling efficiency. Antibody resins, streptavidin resin and TOG resin for tubulin are all made this way.',
    cn: '你可以把任何自己纯化出来的蛋白固定化，做成定制的亲和树脂。纯化你的配体蛋白，买活化树脂——CNBr 活化、NHS 活化、环氧或醛基——把两者混合，让蛋白通过其氨基、羧基、巯基或羟基共价偶联上去，然后洗掉没结合的部分并计算偶联效率。抗体树脂、链霉亲和素树脂、以及纯化微管蛋白用的 TOG 树脂都是这样做出来的。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '把你自己纯化出来的蛋白共价接到活化树脂上，就得到一根**定制的亲和柱**——用来抓那些没有标签、市面上买不到对应树脂的天然蛋白。\n\n' +
            '关键的局限是：**偶联的取向是随机的**，所以要算偶联效率。',
  skipIt: '**这一节没有 RECAP 可以引用**（理由同第 2-38 节：老师给第 4 讲做的 RECAP 停在 MBP / HALO，而第 5 讲没有 RECAP）。所以优先级判断在你：这一节的概念很简单，看懂「为什么取向是随机的」这一条就够了。',
  explain: [
    {
      q: '什么时候需要自己做树脂？买不到吗？',
      a: '**买得到的都是「标准标签」的树脂——问题是你要抓的东西常常没有标签。**\n\n' +
         '商品树脂覆盖的是 His、Strep、FLAG、MBP、GST 这些**你自己加上去的标签**。前提是你能改造那个蛋白。\n\n' +
         '**但有些场合你根本不能改造它：**\n\n' +
         '你要从组织或细胞里纯化一个**内源的天然蛋白**——它就是野生型的样子，身上没有任何标签。\n\n' +
         '你要抓的是某个特定的**相互作用伙伴**。\n\n' +
         '**这时候唯一的办法是：自己造一个能认它的抓手。**\n\n' +
         '幻灯片给的三个例子正好覆盖了不同思路：\n\n' +
         '**抗体树脂**——把你的单抗固定上去，用它来抓抗原。抗体的特异性是现成的，你只是把它安到柱子上。\n\n' +
         '**链霉亲和素树脂**——自己做也可以，不一定要买。\n\n' +
         '**TOG 树脂纯化微管蛋白**——把一个天然结合微管蛋白的结构域固定上去，用天然的相互作用当抓手。\n\n' +
         '**所以这一节真正教的是一个思路：任何一个你有的、特异结合某物的蛋白，都可以变成一根柱子。**',
      takeaway: '商品树脂只认你加的标签。要抓没有标签的天然蛋白，就得把一个能认它的分子自己固定成柱子。'
    },
    {
      q: '「活化树脂」是什么意思？为什么有好几种？',
      trace: {
        what: '**表面已经带好了活性基团、能直接跟蛋白反应的树脂。**你买来的时候它就处在「准备好反应」的状态，混上蛋白就会形成共价键。',
        from: '不同的活化方式认蛋白上不同的基团：**CNBr 活化和 NHS 活化**主要认**氨基**（也就是赖氨酸的侧链和 N 端）；**环氧**和**醛基**各有各的对象（羧基、巯基、羟基等）。所以你可以按自己蛋白上哪种基团方便、以及要避开哪个位置来挑。',
        to: '**关键的局限在这里：你无法控制它接在蛋白的哪个位置。**\n\n以 NHS 为例：它认赖氨酸，而**一个蛋白表面往往有几十个赖氨酸**。哪一个先反应，纯粹是概率问题。\n\n**结果是偶联的取向是随机的：**\n\n有些分子恰好从「背面」被接上，**结合位点朝外**——这些是有用的。\n\n有些分子恰好从结合位点附近被接上，**抓手被埋住或者挡住了**——这些是浪费。\n\n还有些被接了好几个点，**拉扯变形，失活**。\n\n**所以自制树脂的实际容量常常明显低于「接上去多少蛋白」这个数字。**',
        family: '**这跟第 1-3 节 NHS 酯化学修饰蛋白是完全同一个问题：能接上 ≠ 能定点接上。**那里的结论是「所以还得回到 DNA 层面去加标签」；这里的结论是「所以要接受一定的浪费，并且要实测容量」。'
      },
      takeaway: 'NHS 认赖氨酸，而蛋白表面有几十个，所以取向随机。有些分子的抓手被埋住，容量因此打折。'
    },
    {
      q: '为什么第 4 步要「计算偶联效率」？怎么算？',
      a: '**因为你必须知道柱子上到底有多少配体，否则后面每一步都是在猜。**\n\n' +
         '**算法很朴素：**测偶联前蛋白溶液的浓度，测反应后洗出来的**未结合部分**的浓度，**两者的差就是接上去的量**。\n\n' +
         '**这个数字有两个用处：**\n\n' +
         '**估算柱子容量。**你得知道能上多少样，否则很容易过载——而过载表现出来就是「蛋白跑到穿透液里去了」（第 2-29 节情况一），你会误以为是条件不对。\n\n' +
         '**判断这一批树脂做得成不成功。**如果效率低得离谱，说明偶联反应本身出了问题，最常见的原因是**缓冲液不对**。\n\n' +
         '**一个特别经典的坑：缓冲液里含 Tris。**\n\n' +
         'Tris 分子上有一个**伯胺**——而 NHS 活化的树脂认的正是伯胺。**于是 Tris 会抢先跟树脂反应，把活性位点全部消耗掉**，你的蛋白根本接不上去。\n\n' +
         '所以做 NHS 偶联时**必须换成不含伯胺的缓冲液**（比如 HEPES 或磷酸缓冲液）。这就是幻灯片说的「注意缓冲液和 pH」的具体含义。\n\n' +
         '**pH 也要注意**：它决定了氨基的质子化状态，质子化了就不反应了。',
      takeaway: '差值法算接上去多少。低得离谱通常是缓冲液问题——Tris 有伯胺，会抢光 NHS 的活性位点。'
    }
  ],
  points: [
    { term: 'Step 1', en: 'Purify your protein of interest — a monoclonal antibody, an enzyme, or whatever the ligand is.', cn: '先纯化你要用作配体的蛋白——单抗、酶，或者其他任何东西。' },
    { term: 'Step 2', en: 'Buy an activated resin: CNBr-activated, NHS-activated, epoxy, or aldehyde.', cn: '购买活化树脂：CNBr 活化、NHS 活化、环氧或醛基。' },
    { term: 'Step 3', en: 'Mix resin with your protein, being careful about buffers and pH. The protein binds covalently through amino, carboxy, thio or hydroxy groups.', cn: '把树脂与你的蛋白混合，注意缓冲液和 pH。蛋白通过氨基、羧基、巯基或羟基共价结合上去。' },
    { term: 'Step 4', en: 'Wash out unbound protein and calculate the binding efficiency, so you know how much ligand is actually on the resin.', cn: '洗掉未结合的蛋白，计算偶联效率，这样你才知道树脂上实际有多少配体。' },
    { term: 'Examples', en: 'Antibody resins, streptavidin resin, and TOG resin for tubulin purification.', cn: '抗体树脂、链霉亲和素树脂，以及用于纯化微管蛋白的 TOG 树脂。' }
  ],
  beyondPoints: [
    { term: 'The coupling buffer must contain no primary amines', en: 'NHS- and CNBr-activated resins react with primary amines — chiefly the epsilon-amino group of lysine and the protein N-terminus. That is the intended chemistry.', cn: 'NHS 和 CNBr 活化的树脂与伯胺反应——主要是赖氨酸的 ε-氨基和蛋白的 N 端。这就是预期的化学反应。' },
    { term: 'Why Tris and glycine destroy the reaction', en: 'Both are themselves primary amines, so if your protein is sitting in Tris buffer or glycine they will consume every activated group on the resin and the coupling efficiency drops to near zero. The resin looks no different, which is what makes this fail silently.', cn: 'Tris 和甘氨酸本身就是伯胺，所以如果你的蛋白泡在 Tris 缓冲液或甘氨酸里，它们会把树脂上所有活化基团消耗光，偶联效率接近于零。而树脂外观毫无变化，这正是它无声失败的原因。' },
    { term: 'What to use instead', en: 'Exchange into HEPES, phosphate or sodium bicarbonate for the coupling. Then, once the reaction is done, deliberately add Tris or ethanolamine to block whatever activated groups remain — the same chemistry, now used on purpose.', cn: '偶联时换成 HEPES、磷酸或碳酸氢钠缓冲液。反应结束后，再有意加入 Tris 或乙醇胺来封闭剩余的活化基团——同样的化学反应，只是这次是故意的。' },
    { term: 'Why the efficiency calculation in step 4 matters', en: 'It is the only way to find out whether the coupling worked at all, precisely because a failed coupling and a successful one produce visually identical resin.', cn: '这是唯一能查明偶联到底成没成的办法，恰恰因为失败的偶联和成功的偶联做出来的树脂看上去一模一样。' }
  ],
  terms: [
    { en: 'Activated resin', cn: '活化树脂', def_en: 'A chromatography support carrying reactive groups — CNBr, NHS ester, epoxy or aldehyde — ready to form a covalent bond with a ligand protein.', def_cn: '带有反应性基团（CNBr、NHS 酯、环氧或醛基）的层析填料，可以直接与配体蛋白形成共价键。' },
    { en: 'Primary amine', cn: '伯胺', def_en: 'An -NH2 group. On a protein this is the lysine side chain and the N-terminus; in a buffer it is Tris or glycine, which is why those buffers block coupling.', def_cn: '一个 -NH2 基团。在蛋白上是赖氨酸侧链和 N 端；在缓冲液里则是 Tris 或甘氨酸，这就是这些缓冲液会阻断偶联的原因。' },
    { en: 'Blocking', cn: '封闭', def_en: 'Deliberately quenching leftover activated groups after coupling, using Tris or ethanolamine, so they cannot later bind sample proteins non-specifically.', def_cn: '偶联完成后，用 Tris 或乙醇胺有意淬灭剩余的活化基团，防止它们之后非特异性地结合样品蛋白。' },
    { en: 'Coupling efficiency', cn: '偶联效率', def_en: 'The fraction of ligand protein that actually became covalently attached, determined by measuring what was washed off unbound.', def_cn: '实际共价连接上去的配体蛋白比例，通过测量被洗掉的未结合部分来确定。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why must the coupling buffer contain no Tris or glycine?',
      q_cn: '为什么偶联缓冲液里不能有 Tris 或甘氨酸？',
      options: ['They shift the pH too far for the coupling reaction to run', 'They are primary amines and consume the activated groups', 'They precipitate the resin beads out of suspension', 'They denature the ligand protein before it can couple'],
      answer: 1,
      why_en: 'NHS and CNBr chemistry targets primary amines. Tris and glycine are primary amines, so they compete directly with your protein for every activated site and coupling efficiency falls to near zero.',
      why_cn: 'NHS 和 CNBr 的化学反应针对的就是伯胺。Tris 和甘氨酸都是伯胺，所以它们直接与你的蛋白争夺每一个活化位点，偶联效率降到接近零。' },
    { type: 'mcq',
      q_en: 'What are Tris and ethanolamine used for after the coupling reaction?',
      q_cn: '偶联反应结束后，Tris 和乙醇胺用来做什么？',
      options: ['To elute the ligand protein back off the resin', 'To block the activated groups that did not react', 'To set the ionic strength for the first sample run', 'To sterilise the resin before it is stored'],
      answer: 1,
      why_en: 'The same amine chemistry that would have ruined the coupling is now used deliberately, to quench leftover reactive groups so they cannot bind sample proteins non-specifically later.',
      why_cn: '那套本来会毁掉偶联的胺类化学，现在被有意地用上——淬灭剩余的反应性基团，防止它们之后非特异性地结合样品蛋白。' },
    { type: 'mcq',
      q_en: 'Which groups on the ligand protein form the covalent linkage?',
      q_cn: '配体蛋白上的哪些基团形成共价连接？',
      options: ['Only the thiol groups of cysteine side chains', 'Amino, carboxy, thio or hydroxy groups, depending on the resin', 'Only the alpha-amine at the N-terminus, which gives one defined attachment point', 'The aromatic side chains of tryptophan and tyrosine'],
      answer: 1,
      optionNotes: {
        2: { en: 'NHS and CNBr chemistry is directed at primary amines, and every lysine side chain carries one as well as the N-terminal alpha-amine — which is why this coupling gives a randomly oriented ligand. A single defined attachment point needs different chemistry, such as an Avi-tag or thiol-directed coupling.', cn: 'NHS 和 CNBr 的化学针对的是伯胺，而除了 N 端的 α-amine，每一个 lysine 侧链也带一个——这正是这种偶联得到的配体朝向随机的原因。要做到单一确定的连接点，得换别的化学，比如 Avi-tag 或巯基定点偶联。' }
      },
      why_en: 'Different activated chemistries target different groups, which is why several activation types are sold. NHS and CNBr are the amine-directed ones and are the most common.',
      why_cn: '不同的活化化学针对不同的基团，这就是市面上有好几种活化类型的原因。NHS 和 CNBr 是针对氨基的，也是最常用的。' },
    { type: 'short',
      q_en: 'Your home-made antibody resin captures nothing. What would you suspect first and why is this failure hard to spot?',
      q_cn: '你自制的抗体树脂什么都抓不到。你会先怀疑什么？为什么这种失败很难发现？',
      accept: ['Tris', 'glycine', 'primary amine', 'coupling buffer', 'efficiency'],
      answer_en: 'I would suspect the coupling buffer first — specifically whether the antibody was in Tris or glycine when it met the activated resin. NHS- and CNBr-activated resins react with primary amines, and Tris and glycine are themselves primary amines, so they will consume every activated group before the antibody gets a chance and coupling efficiency drops to near zero. What makes this hard to spot is that the resin looks exactly the same whether the coupling worked or not, so nothing about the appearance of the beads warns you. That is precisely why step four of the procedure is to wash out unbound protein and calculate the binding efficiency — measuring how much ligand failed to couple is the only way to know before you waste a sample on it. The fix is to exchange the antibody into HEPES, phosphate or sodium bicarbonate for the coupling reaction, and to add Tris or ethanolamine only afterwards, to block whatever activated groups remain.',
      answer_cn: '我会先怀疑偶联缓冲液——具体说，抗体在遇到活化树脂时是不是泡在 Tris 或甘氨酸里。NHS 和 CNBr 活化的树脂与伯胺反应，而 Tris 和甘氨酸本身就是伯胺，所以它们会在抗体有机会之前就把所有活化基团消耗光，偶联效率降到接近零。难以发现的原因是：不管偶联成没成，树脂看上去完全一样，珠子的外观不会给你任何警示。这正是为什么流程的第四步是洗掉未结合蛋白并计算偶联效率——测量有多少配体没能偶联上，是在浪费样品之前唯一能确认的办法。解决办法是把抗体换到 HEPES、磷酸或碳酸氢钠缓冲液里再做偶联，Tris 或乙醇胺只在反应之后加，用来封闭剩余的活化基团。'
    }
  ],
  oral: {
    q_en: 'How would you make an affinity resin for a target with no commercial option?',
    q_cn: '如果一个目标蛋白没有商品化的树脂，你会怎么自己做一个？',
    model_en: 'You immobilise a ligand of your own onto an activated support, and it is four steps. First, purify the protein you want to use as the ligand — a monoclonal antibody, an enzyme, whatever recognises your target. Second, buy an activated resin: CNBr-activated, NHS-activated, epoxy or aldehyde, the choice depending on which chemical group you want to couple through. Third, mix the resin with your protein, being careful about buffers and pH, and the protein binds covalently through its amino, carboxy, thio or hydroxy groups. Fourth, wash out the unbound protein and calculate the binding efficiency. That fourth step sounds like bookkeeping but it is essential, and the reason connects to the one trap in this procedure. NHS- and CNBr-activated resins react with primary amines, which on a protein means the lysine side chains and the N-terminus. But Tris and glycine are also primary amines. So if your ligand is sitting in Tris buffer when you add it to the resin, the buffer consumes every activated group and the coupling efficiency drops to essentially zero. What makes this dangerous rather than merely annoying is that a failed coupling produces resin that looks identical to a successful one — you find out only when the column captures nothing. Hence the efficiency calculation. The fix is to exchange into HEPES, phosphate or sodium bicarbonate for the coupling reaction, and then, once it is complete, deliberately add Tris or ethanolamine to block whatever activated groups remain, so they cannot bind sample proteins non-specifically later. Antibody resins, streptavidin resin and the TOG resin used for tubulin purification are all made exactly this way.',
    checklist: ['Four steps: purify ligand, buy activated resin, couple, wash and quantify', 'Activated chemistries: CNBr, NHS, epoxy, aldehyde', 'Coupling via amino, carboxy, thio or hydroxy groups', 'The trap: NHS and CNBr react with primary amines', 'Tris and glycine ARE primary amines and consume the activated groups', 'Coupling efficiency then falls to near zero', 'Failure is silent — the resin looks identical either way', 'Hence step 4, calculating binding efficiency, is essential not optional', 'Couple in HEPES, phosphate or sodium bicarbonate instead', 'Afterwards block with Tris or ethanolamine — the same chemistry, used on purpose', 'Examples: antibody resins, streptavidin resin, TOG resin for tubulin']
  }
},

{
  id: '2-40',
  chapter: 2,
  lecture: 'Lecture 5',
  section: '2.40',
  enTitle: 'Size exclusion chromatography',
  cnTitle: '分子排阻层析',
  slides: 'L5 s.5–7',
  coverage: 'full',
  coverageNote: 'The volume terms, resin ranges and four uses are on the slides. Why large molecules elute first is counter-intuitive and is explained here, together with the two reasons SEC has to be the last step.',
  summary: {
    en: 'SEC, also called gel permeation chromatography, separates by size and shape, and counter-intuitively the biggest molecules elute first. Its capacity is low — you may load less than 5 per cent of the column volume — so it is almost always the final polishing step. Its four uses are separating native protein from aggregates, assessing purity, exchanging buffer, and estimating oligomerisation state, the last requiring calibration.',
    cn: 'SEC 又叫凝胶渗透层析，按大小和形状分离，而且反直觉的是最大的分子最先流出。它的容量很低——上样体积不能超过柱体积的 5%——所以几乎总是作为最后的精修步骤。它的四个用途是：把天然蛋白与聚集体分开、评估纯度、置换缓冲液，以及估计寡聚状态（最后一项需要校准）。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L5 s.5', src: 'img/figures/L5_s05_1.webp' },
    { slide: 'L5 s.5', src: 'img/figures/L5_s05_2.webp' },
    { slide: 'L5 s.5', src: 'img/figures/L5_s05_3.webp' },
    { slide: 'L5 s.5', src: 'img/figures/L5_s05_4.webp' },
    { slide: 'L5 s.7', src: 'img/figures/L5_s07_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**大分子先出来**——因为它们进不了珠子上的孔，只能走珠子之间的缝隙，那是最短的路。\n\n' +
            '而 **SEC 必须排在最后**，理由是硬性的：**上样体积不能超过柱体积的 5%**，所以样品必须已经被前面的步骤浓缩过了。',
  skipIt: '**第 5 讲没有 RECAP 可以引用**——老师只在第 2–5 讲开头做过 RECAP，分别回顾第 1–4 讲，第 5 讲之后就没有了。所以这里是我的判断：Superdex 75 / 200 / Superose 6 的具体分离范围不用背，但**「为什么大分子先出来」和「为什么必须排最后」这两条要能讲**，它们都是常考的「说出理由」型问题。',
  explain: [
    {
      q: '为什么大分子反而先出来？直觉上不该是相反吗？',
      a: '**直觉之所以错，是因为你想象的是「筛子」，而它其实是「迷宫」。**\n\n' +
         '如果是筛子，大的过不去、小的漏下来——那大的当然被拦住。\n\n' +
         '**但 SEC 的珠子不是筛网，它是一颗颗布满孔洞的小球。**液体既可以从**珠子之间的缝隙**流过，也可以**钻进珠子里面的孔道**再出来。\n\n' +
         '**现在看不同大小的分子各走哪条路：**\n\n' +
         '**很大的分子**：进不了孔（孔太小），**只能走珠子之间的缝隙**——这是柱子里**最短的一条路**。所以它最先出来，出现在**死体积 V0**里。\n\n' +
         '**很小的分子**：每一个孔都能钻进去。它在柱子里绕了一个巨大的弯路，**走的路最长**，所以最后才出来。\n\n' +
         '**中等大小的分子**：能进一部分孔，路径长度居中，出来的时间也居中。\n\n' +
         '**所以出峰顺序反映的是「路径长短」，而路径长短由「能钻进多少孔」决定。**\n\n' +
         '**换个说法：小分子被迫多走了很多冤枉路，大分子走的是直线。**这样一想就再也不会记反了。',
      takeaway: '珠子是布满孔的球，不是筛网。大分子进不去孔，只能走缝隙——那是最短的路，所以先出来。'
    },
    {
      q: '「排阻极限」是什么？它怎么决定你该买哪根柱子？',
      a: '**排阻极限就是「大到进不了孔」的那个分子量。**\n\n' +
         '超过这个分子量的所有东西，**都只能走缝隙、都在 V0 出来、彼此完全分不开**。\n\n' +
         '**这一条的实际后果很硬：**如果你的蛋白是 300 kDa，而你用了一根排阻极限是 70 kDa 的柱子（Superdex 75），那么你的蛋白、它的二聚体、它的聚集体、还有所有大杂质，**全部一起在 V0 出来，一个都分不开**。柱子跑了，等于没跑。\n\n' +
         '**所以必须按你关心的分子量来选柱子：**\n\n' +
         '**Superdex 75** —— 3 到 70 kDa。适合小蛋白、肽段。\n\n' +
         '**Superdex 200** —— 10 到 650 kDa。最常用的通用型。\n\n' +
         '**Superose 6** —— 20 到 5000 kDa。适合大复合物、病毒颗粒。\n\n' +
         '**选择的原则是：让你要分开的那两个东西，都落在这根柱子的分离范围「中间」，而不是贴着上限。**\n\n' +
         '因为分辨率在范围两端都会变差——贴着上限的两个东西都快进不了孔了，贴着下限的两个都能进所有孔。\n\n' +
         '**这跟第 2-32 节离子交换要「离 pI 一个 pH 单位」是同一类判断：不是把参数推到极端，而是卡在合适的窗口里。**',
      takeaway: '超过排阻极限的东西全在 V0 一起出来、完全分不开。所以要按分子量选柱，而且要落在范围中间。'
    },
    {
      q: '为什么 SEC 必须排在最后？两个理由，都要会说。',
      a: '**理由一（硬性的）：上样体积不能超过柱体积的 5%。**\n\n' +
         '为什么？因为 SEC 的分离靠的是**不同分子走过的路径长短差异**，而这个差异是有限的。**如果样品本身就占了很长一段柱子，那么「同一种分子」在柱子里的分布范围就已经很宽了**——峰变宽，相邻的峰糊在一起，分辨率直接崩掉。\n\n' +
         '**所以你不可能把一升裂解液上到 SEC 柱上。**一根 24 mL 的柱子只能上 1 mL 左右。\n\n' +
         '**这意味着样品必须已经被浓缩过、纯化过了**——也就是说，前面的步骤必须已经发生。**这是物理限制，不是习惯。**\n\n' +
         '**理由二（顺带的好处）：SEC 会附带完成缓冲液置换。**\n\n' +
         '你的蛋白在柱子里走一遍，出来时**已经处在你平衡柱子用的那个缓冲液里**了——原来那些咪唑、盐、还原剂，都跟着小分子跑到后面去了。\n\n' +
         '**而纯化的最后一步，正好需要把蛋白换进最终的保存缓冲液。**\n\n' +
         '**所以 SEC 放最后是「被迫」和「正好」的叠加**：物理上它不能放前面，而它的副作用恰好是最后一步需要的。\n\n' +
         '**这是常考的「说出理由」型问题**——答「因为它是精修步骤」不得分，要答出「上样体积上限」这个硬约束。',
      takeaway: '硬约束是上样体积不能超过柱体积 5%，所以样品必须先被浓缩。附带好处是顺手换成保存缓冲液。'
    },
    {
      q: '用 SEC 估计寡聚状态，为什么「需要校准」？',
      a: '**因为 SEC 分的其实不是分子量，是「流体力学半径」——也就是分子在溶液里占多大地方。**\n\n' +
         '一个分子能不能进某个孔，取决于它的**尺寸和形状**，不是取决于它的分子量。\n\n' +
         '**所以两个分子量相同的蛋白，如果形状不同，出峰位置就不同：**\n\n' +
         '**球状的**紧凑，占的地方小 → 出来得晚。\n\n' +
         '**细长的或者带柔性尾巴的**摊得开，占的地方大 → 出来得早，**看起来「分子量偏大」**。\n\n' +
         '这就是为什么天然无序蛋白（第 2-28 节）在 SEC 上总是显得比实际分子量大得多——**它根本没有紧凑的结构，摊得到处都是。**\n\n' +
         '**所以校准是必须的**：用一组已知分子量的标准品跑同一根柱子、同一个缓冲液，做出「出峰体积 vs 分子量」的曲线，再拿你的样品去比。\n\n' +
         '**但要清楚校准的局限：标准品通常是球状蛋白，所以这条曲线只对球状蛋白准。**\n\n' +
         '**实用推论：**如果 SEC 告诉你「这个 30 kDa 的蛋白看起来像 60 kDa」，那有两种可能——**它真的是二聚体**，或者**它只是形状比较伸展**。SEC 本身分不清这两种。要确认就需要别的手段（比如 SEC 联用光散射，直接测真实分子量）。\n\n' +
         '**所以幻灯片写「需要校准」，其实是在提醒你这是一个估计值，不是测量值。**',
      takeaway: 'SEC 分的是占多大地方，不是分子量。伸展的蛋白看起来偏大——所以二聚体和「形状伸展」分不清。'
    }
  ],
  points: [
    { term: 'What it separates by', en: 'Size and shape. Bigger proteins run faster and elute first.', cn: '按大小和形状分离。较大的蛋白跑得更快、更早流出。' },
    { term: 'Low capacity', en: 'Load less than 5 per cent of the column volume — which is why it is typically the final polishing step.', cn: '上样量必须小于柱体积的 5%——这就是它通常作为最后精修步骤的原因。' },
    { term: 'The volume equation', en: 'Vt equals V0 plus Vg plus Vi.', cn: 'Vt = V0 + Vg + Vi。' },
    { term: 'V0 — void volume', en: 'The space between the particles.', cn: '珠子之间的空隙体积。' },
    { term: 'Vg — gel volume', en: 'The volume occupied by the resin itself.', cn: '树脂本身占据的体积。' },
    { term: 'Vi — interstitial volume', en: 'The volume of solvent inside the pores.', cn: '孔道内溶剂的体积。' },
    { term: 'How separation works', en: 'Very large molecules pass around the beads or are excluded from them and elute in V0. Medium molecules only partially penetrate the pores. Small molecules access most or all pores and elute last.', cn: '很大的分子绕过珠子、或者被排阻在外，在 V0 处流出。中等分子只能部分进入孔道。小分子能进入大部分或全部孔道，最后流出。' },
    { term: 'Exclusion limit', en: 'The upper molecular weight beyond which all molecules elute at the same retention volume. It is defined by the pore size.', cn: '一个分子量上限，超过它的所有分子都在同一个保留体积流出。它由孔径决定。' },
    { term: 'Resin ranges', en: 'Superdex 200 covers 10 to 650 kDa, Superdex 75 covers 3 to 70 kDa, and Superose 6 covers 20 to 5,000 kDa.', cn: 'Superdex 200 覆盖 10–650 kDa，Superdex 75 覆盖 3–70 kDa，Superose 6 覆盖 20–5000 kDa。' },
    { term: 'Four uses', en: 'Separating native protein from aggregates, assessing purity, buffer exchange, and estimating oligomerisation state — the last needing calibration.', cn: '把天然蛋白与聚集体分开、评估纯度、置换缓冲液，以及估计寡聚状态——最后一项需要校准。' }
  ],
  beyondPoints: [
    { term: 'Why large molecules elute first', en: 'The intuition that big molecules should struggle through the column is exactly backwards. The beads are full of pores. Large molecules cannot enter them, so they can only travel through the spaces between beads — the shortest possible path — and come out first, in the void volume. Small molecules enter every pore, take a long detour, and come out last. Medium ones penetrate partially and land in between.', cn: '「大分子应该更难穿过柱子」这个直觉恰好是反的。珠子内部布满孔道。大分子进不去，只能走珠子之间的空隙——最短的路径——所以最先流出，在死体积处。小分子能钻进每一个孔道，绕了远路，最后才出来。中等分子部分渗透，落在两者之间。' },
    { term: 'So the separation range is set entirely by pore size', en: 'Anything larger than the exclusion limit comes out together in V0 and cannot be resolved from anything else that large. That is why you must choose the column by the molecular weight you care about — Superdex 75 or Superdex 200.', cn: '所以分离范围完全由孔径决定。任何大于排阻极限的分子都在 V0 处一起出来，彼此分不开。这就是为什么必须按你关心的分子量来选柱子——Superdex 75 还是 Superdex 200。' },
    { term: 'Reason one for putting it last', en: 'The load volume must be under 5 per cent of the column volume, or the peaks broaden and resolution collapses. So the sample must already have been concentrated, which means earlier steps must already have happened.', cn: '上样体积必须小于柱体积的 5%，否则峰会被拉宽、分辨率崩掉。所以样品必须已经被浓缩过，也就意味着前面的步骤必须已经完成。' },
    { term: 'Reason two', en: 'SEC performs buffer exchange as a side effect, delivering the protein directly into its final storage buffer. That is exactly what you want as the finishing move.', cn: 'SEC 顺带完成缓冲液置换，直接把蛋白交换到最终的保存缓冲液里。这正是收尾时想要的效果。' }
  ],
  terms: [
    { en: 'Void volume (V0)', cn: '死体积', def_en: 'The volume of solvent between the resin beads. Molecules too large to enter any pore elute here, all together, unresolved from one another.', def_cn: '树脂珠子之间的溶剂体积。大到进不了任何孔道的分子都在这里一起流出，彼此无法分辨。' },
    { en: 'Exclusion limit', cn: '排阻极限', def_en: 'The molecular weight above which all molecules co-elute at V0. Set by the pore size, and therefore the property that determines which column you need.', def_cn: '超过它之后所有分子都在 V0 一起流出的分子量。由孔径决定，因此也是决定你该用哪根柱子的性质。' },
    { en: 'Gel permeation chromatography (GPC)', cn: '凝胶渗透层析', def_en: 'Another name for size exclusion chromatography.', def_cn: '分子排阻层析的另一个名称。' },
    { en: 'Polishing step', cn: '精修步骤', def_en: 'The final purification step, removing aggregates, degradation products and residual contaminants while exchanging into the storage buffer.', def_cn: '纯化的最后一步，去除聚集体、降解产物和残余杂质，同时置换到保存缓冲液中。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In SEC, why do large proteins elute first?',
      q_cn: '在 SEC 中，为什么大蛋白最先流出？',
      options: ['They diffuse faster through the liquid than small molecules do', 'They are excluded from the pores and travel only between the beads', 'They bind the resin beads more weakly than small molecules do', 'They are pushed ahead of the smaller molecules by the flow'],
      answer: 1,
      optionNotes: {
        0: { en: 'Large molecules actually diffuse more slowly than small ones. SEC does not separate by how fast anything moves through the liquid — everything travels at the flow rate — but by path length, and the large ones are locked out of the pores so their path is the short one.', cn: '大分子的扩散其实比小分子更慢。SEC 分开的不是「谁在液体里跑得快」——大家都随流速走——而是路径长短：大分子进不了孔道，只能走珠子之间那条最短的路。' },
        2: { en: 'This imports the bind-and-elute model into a method that has none. SEC resin is not meant to bind anything at all; elution order comes from how much of the internal pore volume a molecule can reach. Genuine binding to a SEC matrix is an artefact that tails your peak, not the separation principle.', cn: '这是把「吸附–洗脱」的模型套到了一个没有吸附的方法上。SEC 的树脂本来就不该结合任何东西，出峰顺序取决于分子能进入多少孔内体积。真的跟 SEC 基质发生结合，那是让峰拖尾的假象，不是分离原理。' }
      },
      why_en: 'The beads are porous. Large molecules are excluded from the pores and take the direct route between beads, eluting in the void volume. Small molecules enter every pore, take a long detour, and elute last.',
      why_cn: '珠子是多孔的。大分子被排阻在孔道之外，走珠子之间的直接路径，在死体积处流出。小分子进入每一个孔道、绕了远路，最后才出来。' },
    { type: 'mcq',
      q_en: 'Why must SEC always be the last step in a purification?',
      q_cn: '为什么 SEC 总是纯化流程的最后一步？',
      options: ['The mobile phase is denaturing and unfolds the protein', 'The load volume cannot exceed 5 per cent of the column volume', 'It requires the sample to be already in the final storage buffer', 'It only works on proteins that carry an affinity tag'],
      answer: 1,
      optionRefs: { 0: '2-34', 3: '2-35' },
      why_en: 'You cannot load a litre of lysate onto a SEC column — exceeding 5 per cent of column volume broadens the peaks and destroys resolution. It also conveniently exchanges the protein into its final storage buffer.',
      why_cn: '你不可能把一升裂解液上到 SEC 柱上——超过柱体积的 5% 会让峰变宽、分辨率崩溃。而且它还顺便把蛋白置换到最终的保存缓冲液里。' },
    { type: 'mcq',
      q_en: 'What does the exclusion limit determine?',
      q_cn: '排阻极限决定了什么？',
      options: ['The largest sample volume that may be loaded, capped at 5 per cent of column volume', 'The molecular weight above which all molecules elute at the void volume', 'The maximum back pressure the packed resin bed can withstand', 'The mass of protein the resin can bind per millilitre of bed'],
      answer: 1,
      optionRefs: { 2: '2-30', 3: '2-30' },
      optionNotes: {
        0: { en: 'Two separate SEC limits get swapped. The exclusion limit is a molecular weight, set by pore size, and it decides what can still be resolved. The load-volume rule — under 5 per cent of column volume — is an independent capacity constraint that holds whichever resin you choose.', cn: '这里把 SEC 的两个限制搞混了。排阻极限是一个分子量，由孔径决定，管的是「还分不分得开」。上样体积不超过柱体积 5% 是另一条独立的容量限制，换哪种树脂都一样。' }
      },
      why_en: 'It is set by pore size. Above it, everything is excluded equally and comes out together in the void volume, which is why you choose Superdex 75 versus 200 according to your target size.',
      why_cn: '它由孔径决定。超过它之后所有分子都被同等排阻、在死体积处一起出来，这就是为什么要按目标分子量在 Superdex 75 和 200 之间做选择。' },
    { type: 'short',
      q_en: 'Name the four uses of SEC and explain why it is well suited to being the final step.',
      q_cn: '说出 SEC 的四个用途，并解释为什么它特别适合作为最后一步。',
      accept: ['aggregates', 'purity', 'buffer exchange', 'oligomerisation', '5 per cent'],
      answer_en: 'The four uses are separating native protein from aggregates, assessing purity, exchanging buffer, and estimating oligomerisation state, which requires a calibrated column. It suits the final position for two reasons that reinforce each other. First, its capacity is low: the load volume has to be under five per cent of the column volume, or the peaks broaden and resolution collapses — so the sample must already be concentrated, which means the earlier steps must already have happened. You could not put a litre of lysate on a SEC column. Second, it performs buffer exchange as a side effect, so it delivers the purified protein directly into whatever buffer you want to store it in. Removing aggregates and degradation products while simultaneously setting the final buffer is exactly what a finishing step should do.',
      answer_cn: '四个用途是：把天然蛋白与聚集体分开、评估纯度、置换缓冲液，以及估计寡聚状态（需要校准过的柱子）。它适合放在最后有两个互相强化的理由。第一，容量低：上样体积必须小于柱体积的 5%，否则峰变宽、分辨率崩溃——所以样品必须已经浓缩过，也就意味着前面的步骤必须已经做完。你不可能把一升裂解液上到 SEC 柱上。第二，它顺带完成缓冲液置换，把纯化好的蛋白直接交到你想用的保存缓冲液里。一边去除聚集体和降解产物、一边确定最终缓冲液，这正是收尾步骤该做的事。'
    }
  ],
  oral: {
    q_en: 'Explain size exclusion chromatography and where it belongs in a purification.',
    q_cn: '解释分子排阻层析，以及它在纯化流程中的位置。',
    model_en: 'Size exclusion chromatography, also called gel permeation chromatography, separates by size and shape — and the counter-intuitive part is that bigger proteins elute first. The intuition that a large molecule should have more trouble getting through the column is exactly backwards, and the reason is that the beads are full of pores. Large molecules cannot enter those pores at all, so they can only travel through the spaces between the beads, which is the shortest possible path, and they emerge first, in what is called the void volume. Small molecules access most or all of the pores, take a long detour inside the column, and come out last. Medium-sized molecules penetrate partially and land in between. The total volume is the void volume plus the gel volume, which is the resin itself, plus the interstitial volume, the solvent inside the pores. An important consequence is that the separation range is set entirely by pore size: anything above the exclusion limit is excluded equally, comes out together in the void volume, and cannot be resolved from anything else that large — which is why you choose the column by the size you care about, Superdex 75 for three to seventy kilodaltons, Superdex 200 for ten to six hundred and fifty, Superose 6 for twenty up to five thousand. It has four uses: separating native protein from aggregates, assessing purity, buffer exchange, and estimating oligomerisation state, that last needing a calibrated column. And it is essentially always the last step, for two reasons. Its capacity is low — the load volume must be under five per cent of the column volume, or the peaks broaden and the resolution collapses — so the sample has to be concentrated already, and you plainly cannot put a litre of lysate onto a SEC column. And it exchanges the buffer as a side effect, delivering the protein straight into its final storage conditions. Removing aggregates while setting the final buffer is exactly what you want from a finishing step.',
    checklist: ['Also called gel permeation chromatography; separates by size and shape', 'Counter-intuitive: bigger proteins elute FIRST', 'Beads are porous; large molecules excluded, travel only between beads', 'Shortest path, so they elute in the void volume V0', 'Small molecules enter all pores, detour, elute last', 'Vt = V0 (between beads) + Vg (resin) + Vi (solvent in pores)', 'Exclusion limit set by pore size; above it everything co-elutes at V0', 'Superdex 75: 3-70 kDa; Superdex 200: 10-650; Superose 6: 20-5000', 'Four uses: aggregates, purity, buffer exchange, oligomerisation state', 'Always last: load must be under 5% of column volume', 'Also last because it exchanges into the final storage buffer']
  }
},

{
  id: '2-41',
  chapter: 2,
  lecture: 'Lecture 5',
  section: '2.41',
  enTitle: 'Tag removal',
  cnTitle: '标签切除',
  slides: 'L5 s.8',
  coverage: 'full',
  coverageNote: 'The protease table and the removal strategies are on the slides. Why SUMO protease alone gives a native N-terminus, and why two of the listed proteases are flagged non-specific, are the beyond-the-slides points that decide which one you actually use.',
  summary: {
    en: 'Tags can interfere with downstream applications and are typically removed by protease treatment, weighing cost, specificity, incubation time and efficacy. TEV and PreScission dominate because both can be produced in-house. Factor Xa and thrombin are flagged as non-specific. SUMO protease is unique in recognising a three-dimensional structure rather than a linear sequence, which is what lets it leave a genuinely native N-terminus.',
    cn: '标签可能干扰下游应用，通常用蛋白酶处理来切除，选择时要权衡成本、特异性、孵育时间和切割效率。TEV 和 PreScission 占主导，因为两者都能在自己实验室里生产。Factor Xa 和凝血酶被标注为非特异。SUMO 蛋白酶的独特之处在于它识别的是三维结构而非线性序列，这正是它能留下真正天然 N 端的原因。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L5 s.8', src: 'img/figures/L5_s08_1.webp' },
    { slide: 'L5 s.8', src: 'img/figures/L5_s08_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**普通蛋白酶都会留疤**：它们认一段线性序列、在其中下刀，切点下游的残基就永久留在你的蛋白上（TEV 会留一个 Gly）。\n\n' +
            '**SUMO 蛋白酶是唯一的例外**——它认的是三维结构，切在结构域的末端，所以**留下真正天然的 N 端**。',
  skipIt: '**第 5 讲没有 RECAP 可以引用**——老师只在第 2–5 讲开头做过 RECAP，分别回顾第 1–4 讲。所以这里是我的判断：ENLYFQ、LEVLFQ 这些识别序列不用背，但**「线性序列 vs 三维结构」这个区别要记**，它是这一节唯一真正的机制点。另外**别用 Factor Xa 和 thrombin**——幻灯片自己标了它们非特异。',
  explain: [
    {
      q: '为什么普通蛋白酶「一定会留疤」？',
      a: '**因为它认的是一段线性序列，而刀落在这段序列的内部。**\n\n' +
         '以 TEV 为例：它识别 **ENLYFQ**，然后**在 Q 之后、G 或 S 之前下刀**。\n\n' +
         '把构建体摆出来看：\n\n' +
         '**[标签] — ENLYFQ — G — [你的蛋白]**\n\n' +
         '切开之后，**ENLYFQ 跟着标签走了，但那个 G 留在你的蛋白 N 端上**。\n\n' +
         '**为什么必须留？**因为那个 G 是识别位点的一部分——**酶需要它在场才能正确下刀**。你不能把它删掉，删了酶就不认了。\n\n' +
         '**所以你的蛋白永远比设计的多一个甘氨酸。**\n\n' +
         '**这跟第 1-15 节 Gateway 那 8 个残基的疤是完全同一类问题**，只是这里少一些（1 个 vs 8 个）。\n\n' +
         '**多数时候这一个残基无所谓。**什么时候有所谓，见下一条。\n\n' +
         '**顺带一个实用点：切完之后怎么把蛋白酶弄走？**两个办法——**用带 His 标签的蛋白酶**，切完再过一次镍柱，蛋白酶和切下来的标签一起被留住（这一步很优雅：同一根柱子，第一次抓你的蛋白，第二次抓杂质）；或者用**苯甲脒琼脂糖**这类专门抓丝氨酸蛋白酶的树脂。',
      takeaway: '识别序列跨在切点两侧，所以切点下游那几个残基是酶必需的、删不掉。TEV 永远留一个 Gly。'
    },
    {
      q: 'SUMO 蛋白酶凭什么能不留疤？',
      a: '**因为它识别的是一个「形状」，不是一段「文字」。**\n\n' +
         'SUMO 蛋白酶（Ulp1）不去读线性序列，**它识别的是 SUMO 结构域折叠好之后的三维形状**，然后**精确地切在 SUMO 的 C 端末尾**。\n\n' +
         '**关键差别在这里：**\n\n' +
         '普通蛋白酶的识别信息**跨在切点两侧**，所以下游那几个残基删不掉。\n\n' +
         '**SUMO 的识别信息全部在切点上游**（在 SUMO 结构域自己身上）。切点下游是什么，酶完全不关心。\n\n' +
         '**所以你的蛋白可以从任何一个氨基酸开始——一个残基都不多。**这就是「天然 N 端」的意思。\n\n' +
         '**什么时候这一点真的要紧？**\n\n' +
         '**N 端序列本身有功能时**——信号肽、N-端规则（N-end rule，N 端第一个残基决定蛋白降解速度）、或者你要在 N 端做定点偶联。\n\n' +
         '**做结构生物学时**——多出来的柔性残基会干扰结晶或者在密度图里糊成一团（跟第 1-15 节排除 Gateway 是同一个理由）。\n\n' +
         '**而且 SUMO 还兼作溶解性标签**，所以你一次拿到两个好处（第 2-12 节那五个手段之一）。\n\n' +
         '**代价：酶贵。**这就是它没有取代 TEV 成为默认的原因——**大多数人不需要天然 N 端，一个 Gly 无所谓。**',
      takeaway: '识别信息全在切点上游，下游是什么它不管。所以蛋白可以从任何残基开始，而且 SUMO 兼作溶解性标签。'
    },
    {
      q: '为什么幻灯片特意标出 Factor Xa 和 thrombin「非特异」？',
      a: '**因为它们会在你的蛋白内部乱切，把它剁碎——而这个失败一开始看起来像是「降解」。**\n\n' +
         '问题出在识别序列太短、太常见。以 **thrombin** 为例：它标称识别 LVPR↓GS，**但它实际上倾向于在精氨酸之后切**。\n\n' +
         '**而精氨酸在任何蛋白里都很常见。**所以它跑去切你的目标蛋白内部某个「看起来有点像」的地方，概率相当可观。\n\n' +
         '**你看到的现象是：切完之后跑胶，除了预期的那条带，还多出好几条小的。**你可能会以为是样品被蛋白酶污染了、或者放太久降解了——**而其实就是你自己加进去的那个酶干的。**\n\n' +
         '**Factor Xa（识别 IEGR）同理。**\n\n' +
         '**所以现代的默认选择是 TEV 和 PreScission，而且理由是双重的：**\n\n' +
         '**它们的识别序列长（6 个残基），所以在天然蛋白里偶然出现的概率极低**——特异性高。\n\n' +
         '**它们都可以在自己实验室里表达和纯化**（幻灯片明确说 can be made in-house）。这一条的意义比听起来大：商品蛋白酶按单位卖，很贵；而自己做一批 TEV 可以用很久，**成本基本为零**。\n\n' +
         '**所以「用 TEV 或 PreScission」既是特异性上的正确选择，也是经济上的正确选择。**这种两头都占的情况不多。',
      takeaway: 'thrombin 倾向在任何精氨酸后切，会把你的蛋白剁碎，而且看起来像降解。TEV 序列长、特异，还能自己做。'
    }
  ],
  points: [
    { term: 'Why remove a tag', en: 'Tags can interfere with downstream applications.', cn: '标签可能干扰下游应用。' },
    { term: 'How', en: 'Typically by protease treatment.', cn: '通常用蛋白酶处理。' },
    { term: 'What to weigh', en: 'Cost, specificity, incubation time, and efficacy.', cn: '成本、特异性、孵育时间和切割效率。' },
    { term: 'Removing the protease afterwards', en: 'Ni-NTA works if the protease is His-tagged, or an affinity resin such as benzamidine Sepharose.', cn: '如果蛋白酶带 His 标签就可以用 Ni-NTA，或者用苯甲脒琼脂糖这类亲和树脂。' },
    { term: 'TEV protease', en: 'Recognises ENLYFQ then cuts before G or S. The most widely used, and can be made in-house.', cn: '识别 ENLYFQ，在 G 或 S 之前切开。使用最广泛，而且可以自己实验室生产。' },
    { term: 'C3 / PreScission', en: 'Recognises LEVLFQ then cuts before GP. Widely used, also home-made.', cn: '识别 LEVLFQ，在 GP 之前切开。广泛使用，同样可以自制。' },
    { term: 'Enterokinase', en: 'Cuts after DDDDK. Commercial.', cn: '在 DDDDK 之后切开。商品化产品。' },
    { term: 'Factor Xa', en: 'Cuts after IEGR. Commercial, and noted as non-specific.', cn: '在 IEGR 之后切开。商品化，但标注为非特异。' },
    { term: 'Thrombin', en: 'Recognises LVPR then cuts before GS. Commercial, expensive, and non-specific — it cuts after arginines generally.', cn: '识别 LVPR，在 GS 之前切开。商品化，昂贵，而且非特异——它一般会在精氨酸之后切。' },
    { term: 'SUMO protease', en: 'Recognises the tertiary structure of SUMO rather than a sequence. Gives a native N-terminus and is 100 per cent specific.', cn: '识别 SUMO 的三级结构而不是某段序列。给出天然的 N 端，特异性 100%。' }
  ],
  beyondPoints: [
    { term: 'Ordinary proteases leave a scar', en: 'They recognise a linear sequence and cut within it, so the residues downstream of the cut site stay attached to your protein. TEV cutting ENLYFQ before G means your protein permanently carries an extra glycine at its N-terminus.', cn: '普通蛋白酶识别线性序列并在其中切割，所以切点下游的残基会留在你的蛋白上。TEV 切 ENLYFQ↓G 意味着你的蛋白 N 端永远多出一个甘氨酸。' },
    { term: 'Why SUMO protease is different', en: 'Ulp1 recognises the three-dimensional fold of the SUMO domain rather than a sequence, and cuts precisely at the SUMO C-terminus. Nothing downstream is left behind, so your protein begins with whatever residue you designed — any amino acid at all.', cn: 'Ulp1 识别的是 SUMO 结构域的三维折叠而不是序列，并恰好在 SUMO 的 C 端切断。下游一个残基都不留，所以你的蛋白从你设计的那个残基开始——可以是任何氨基酸。' },
    { term: 'When a native N-terminus matters', en: 'When the N-terminal sequence itself has a function — a signal peptide, the N-end rule, or a specific residue needed for downstream conjugation — and in structural biology, where you do not want extra flexible residues. SUMO is also a good solubility tag, so you get two benefits at once. The cost is that the enzyme is expensive.', cn: '两种情况下很关键：N 端序列本身有功能时（信号肽、N 端规则、后续偶联需要特定 N 端残基），以及做结构生物学时（不想要多余的柔性残基）。SUMO 本身还是很好的溶解性标签，所以一举两得。代价是这个酶比较贵。' },
    { term: 'Avoid the non-specific ones', en: 'Factor Xa and thrombin will cut at similar sequences inside your target and fragment it. The modern default is TEV or PreScission, both of which can be expressed and purified in the lab for essentially nothing.', cn: 'Factor Xa 和凝血酶会在目标蛋白内部的类似序列上误切，把它切碎。现在的默认选择是 TEV 或 PreScission，两者都能在实验室里表达纯化，成本几乎为零。' }
  ],
  terms: [
    { en: 'TEV protease', cn: 'TEV 蛋白酶', def_en: 'Tobacco etch virus protease, recognising ENLYFQ/G-S. The most widely used cleavage enzyme, and cheap because it can be produced in-house.', def_cn: '烟草蚀纹病毒蛋白酶，识别 ENLYFQ↓G/S。使用最广泛的切割酶，因为可以自己生产所以很便宜。' },
    { en: 'SUMO protease (Ulp1)', cn: 'SUMO 蛋白酶', def_en: 'A protease recognising the folded SUMO domain rather than a linear sequence, cutting exactly at its C-terminus and leaving a native N-terminus on the target.', def_cn: '识别折叠好的 SUMO 结构域而非线性序列的蛋白酶，恰好在其 C 端切断，给目标蛋白留下天然的 N 端。' },
    { en: 'Benzamidine Sepharose', cn: '苯甲脒琼脂糖', def_en: 'An affinity resin for serine proteases, used to remove the cleavage enzyme from the sample after tag removal.', def_cn: '针对丝氨酸蛋白酶的亲和树脂，用于在切除标签后把切割酶从样品中去掉。' },
    { en: 'Native N-terminus', cn: '天然 N 端', def_en: 'An N-terminus carrying no residues left over from a cleavage site. Only SUMO protease delivers this, because it recognises structure rather than sequence.', def_cn: '不带任何切割位点残留残基的 N 端。只有 SUMO 蛋白酶能做到，因为它识别的是结构而不是序列。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What makes SUMO protease able to give a native N-terminus?',
      q_cn: '是什么让 SUMO 蛋白酶能给出天然的 N 端？',
      options: ['It cuts one residue further upstream than TEV does, so the leftover glycine goes too', 'It recognises the folded structure of SUMO and cuts at the domain boundary', 'It removes the first residue of the target protein along with the tag', 'It is active only in the cold, where cleavage becomes more precise'],
      answer: 1,
      why_en: 'Sequence-recognising proteases leave the residues downstream of the cut attached — TEV leaves a glycine, for example. Recognising a fold instead lets the cut fall precisely at the domain boundary with nothing left over.',
      why_cn: '识别序列的蛋白酶会把切点下游的残基留在蛋白上——比如 TEV 会留下一个甘氨酸。改为识别一个折叠结构，就能让切点恰好落在结构域边界上，什么都不残留。' },
    { type: 'mcq',
      q_en: 'Why are Factor Xa and thrombin flagged as poor choices?',
      q_cn: '为什么 Factor Xa 和凝血酶被标注为不好的选择？',
      options: ['They cleave so slowly that an overnight incubation still leaves most of it uncut', 'They are non-specific and cut similar sites inside the target protein', 'They cannot be separated from the target afterwards by any method', 'They only work under denaturing conditions that unfold the target'],
      answer: 1,
      why_en: 'Thrombin cuts after arginines generally, and Factor Xa is likewise flagged non-specific, so both risk fragmenting the protein you are trying to recover. TEV and PreScission are the modern defaults.',
      why_cn: '凝血酶一般会在精氨酸之后切，Factor Xa 同样被标为非特异，所以两者都有把你想回收的蛋白切碎的风险。TEV 和 PreScission 是现在的默认选择。' },
    { type: 'mcq',
      q_en: 'After cleaving with a His-tagged TEV protease, how do you remove the protease?',
      q_cn: '用带 His 标签的 TEV 蛋白酶切完之后，怎么把蛋白酶去掉？',
      options: ['Dialyse the mixture so the protease passes through the membrane', 'Pass the mixture over Ni-NTA and collect the flow-through', 'Boil the sample briefly, since TEV denatures before the target does', 'Nothing is needed, because the protease is consumed in the cleavage reaction'],
      answer: 1,
      optionNotes: {
        0: { en: 'Dialysis separates across a membrane cutoff, so it clears small molecules — salt, imidazole, the released peptide — while everything protein-sized stays inside. TEV protease is itself a 27 kDa protein and stays in the bag with your target; that is the whole reason the protease carries a His-tag.', cn: '透析靠的是膜的截留分子量，去掉的是小分子——盐、imidazole、切下来的短肽——蛋白大小的东西全都留在袋子里。TEV protease 本身就是个 27 kDa 的蛋白，会和目标蛋白一起留下；给 protease 加 His-tag 正是为了解决这一点。' }
      },
      why_en: 'A reverse nickel step catches both the His-tagged protease and any uncleaved fusion still carrying its tag, while the tag-free target passes through — two problems solved by one column.',
      why_cn: '反向镍柱同时抓住带 His 标签的蛋白酶和仍然带着标签的未切完融合蛋白，而不带标签的目标蛋白从穿透液流出——一根柱子解决两个问题。' },
    { type: 'short',
      q_en: 'You need your protein to start with a specific N-terminal residue for a downstream conjugation. Which protease and why?',
      q_cn: '下游偶联要求你的蛋白必须以某个特定的 N 端残基开头。用哪种蛋白酶？为什么？',
      accept: ['SUMO', 'Ulp1', 'native N-terminus', 'tertiary structure', 'no residues left'],
      answer_en: 'SUMO protease, because it is the only one that leaves a genuinely native N-terminus. Every sequence-recognising protease cuts within a linear motif and leaves the residues downstream of the cut attached to your protein — TEV recognising ENLYFQ and cutting before glycine means your protein permanently begins with an extra glycine, which would be fatal if the first residue has to be something specific. SUMO protease recognises the three-dimensional fold of the SUMO domain instead, and cuts precisely at its C-terminus, so nothing downstream is left behind and your protein can begin with any amino acid you designed. A useful bonus is that SUMO is itself a good solubility tag, so you get both benefits from one fusion. The cost is that the enzyme is relatively expensive, unlike TEV or PreScission which can be made in-house for almost nothing.',
      answer_cn: '用 SUMO 蛋白酶，因为它是唯一能留下真正天然 N 端的。所有识别序列的蛋白酶都在一段线性基序内部切割，会把切点下游的残基留在你的蛋白上——TEV 识别 ENLYFQ 并在甘氨酸之前切，意味着你的蛋白永远以一个多余的甘氨酸开头；如果第一个残基必须是特定的某个氨基酸，这就是致命的。SUMO 蛋白酶识别的是 SUMO 结构域的三维折叠，并恰好在其 C 端切断，所以下游什么都不残留，你的蛋白可以从你设计的任何氨基酸开始。一个附带的好处是 SUMO 本身就是很好的溶解性标签，一个融合拿到两份收益。代价是这个酶相对昂贵，不像 TEV 或 PreScission 可以自己做、几乎免费。'
    }
  ],
  oral: {
    q_en: 'How do you remove a purification tag, and which protease would you choose?',
    q_cn: '怎么切除纯化标签？你会选哪种蛋白酶？',
    model_en: 'Tags can interfere with downstream applications, so they are typically removed by protease treatment, and the considerations are cost, specificity, incubation time and efficacy. The options are TEV, which recognises ENLYFQ and cuts before a glycine or serine; PreScission or C3, recognising LEVLFQ and cutting before GP; enterokinase after DDDDK; Factor Xa after IEGR; thrombin, recognising LVPR and cutting before GS; and SUMO protease. Two of those come with warnings: Factor Xa and thrombin are both flagged as non-specific — thrombin cuts after arginines generally — so they risk fragmenting the very protein you are trying to recover. The modern default is therefore TEV or PreScission, and a large part of why is economic: both can be expressed and purified in the lab for essentially nothing. SUMO protease deserves separate treatment because it does something none of the others can. Every sequence-recognising protease cuts within a linear motif, so the residues downstream of the cut stay attached — TEV leaves your protein permanently starting with an extra glycine. SUMO protease recognises the three-dimensional fold of the SUMO domain rather than a sequence, and cuts precisely at the SUMO C-terminus, so nothing is left behind and your protein begins with whatever residue you designed, any amino acid at all. That matters when the N-terminal sequence itself has a function — a signal peptide, the N-end rule, a specific residue needed for conjugation — and in structural biology, where extra flexible residues are unwelcome. SUMO is also a good solubility tag, so you get two benefits from one fusion, at the cost of a more expensive enzyme. Finally, you have to remove the protease afterwards, and the neat way is to use a His-tagged protease and pass everything over Ni-NTA: the protease binds, any uncleaved fusion still carrying its tag binds too, and your tag-free target flows through. Benzamidine Sepharose is the alternative for serine proteases.',
    checklist: ['Tags interfere downstream, so remove by protease', 'Weigh cost, specificity, incubation time, efficacy', 'TEV: ENLYFQ before G/S, most widely used, made in-house', 'PreScission/C3: LEVLFQ before GP, also home-made', 'Enterokinase DDDDK, Factor Xa IEGR, thrombin LVPR before GS', 'Factor Xa and thrombin are non-specific — will cut inside your protein', 'Default is TEV or PreScission, largely because they are free to make', 'Sequence proteases leave a scar: TEV leaves an extra glycine', 'SUMO protease recognises the FOLD, not a sequence', 'Cuts exactly at the SUMO C-terminus, so native N-terminus, any residue', 'Matters for signal peptides, N-end rule, conjugation, structural biology', 'Remove the protease with a His-tag plus reverse Ni-NTA, or benzamidine Sepharose']
  }
},

{
  id: '2-42',
  chapter: 2,
  lecture: 'Lecture 5',
  section: '2.42',
  enTitle: 'Choosing and ordering the steps — capture, intermediate, polishing',
  cnTitle: '选择与排列步骤——捕获、中度纯化、精修',
  slides: 'L5 s.9',
  coverage: 'full',
  coverageNote: 'The four criteria and the yield rankings are on the slide. The three-stage paradigm and the reason its order is forced are assembled from facts scattered across the whole lecture, and this is the node that ties the purification half together.',
  summary: {
    en: 'Four criteria govern the choice: yield, which is high for ion exchange, Ni-NTA, hydrophobic and protein A/G, medium for Streptactin and amylose, and low for SEC and FLAG; resolution; throughput; and time. Assembling them into a purification gives the standard three-stage paradigm — capture, intermediate purification, polishing — whose order is not arbitrary but forced by the fact that volume decreases and required resolution increases as you go.',
    cn: '选择由四个标准决定：产率（离子交换、Ni-NTA、疏水、protein A/G 高，Streptactin 和直链淀粉中等，SEC 和 FLAG 低）、分辨率、通量、时间。把它们组装成一条纯化流程，就得到标准的三段式范式——捕获、中度纯化、精修——而这个顺序不是随意的，是被「体积递减、所需分辨率递增」这个事实强制决定的。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '三段式**捕获 → 中度纯化 → 精修**，顺序不是约定，是被物理逼出来的：**体积从大到小，所需分辨率从低到高。**\n\n' +
            '**SEC 永远不能放第一步**，因为它的上样体积上限是柱体积的 5%——你没法把一升裂解液上到 SEC 柱上。',
  skipIt: '**第 5 讲没有 RECAP 可以引用**——老师只在第 2–5 讲开头做过 RECAP，分别回顾第 1–4 讲。这里是我的判断：那张「哪个方法产率高/中/低」的表不必逐格背，但**三段式的逻辑和「SEC 为什么必须最后」必须能讲**——后者是明确的常考题。',
  explain: [
    {
      q: '三段式的顺序为什么是「被逼出来的」而不是「约定俗成」？',
      a: '**因为有两条量沿着流程反向变化，而每种方法只适合其中一段。**\n\n' +
         '**体积：从大到小。**一开始你手上是几百毫升甚至几升的粗裂解液；到最后只有几毫升浓缩过的样品。\n\n' +
         '**所需分辨率：从低到高。**一开始杂质有几千种，随便去掉一大批就是巨大的进步；到最后剩下的都是跟你的蛋白很像的东西（二聚体、降解片段），要分开它们需要很精细的手段。\n\n' +
         '**而每种方法的位置由它「能吃下多大体积」和「分辨率多高」共同决定：**\n\n' +
         '**第一段：捕获。**需要**大容量、能上大体积、区分度高**。亲和层析正合适（Ni-NTA、protein A）——它一步就能把纯度从百分之一提到九十以上（第 2-35 节），而且能让几升裂解液直接流过去。**这一段要的是容量，不是精度。**\n\n' +
         '**第二段：中度纯化。**体积已经小了，可以开始追求分辨率。离子交换或 HIC，去掉那些性质相近的杂质。\n\n' +
         '**第三段：精修。**SEC，去掉聚集体、二聚体、降解片段，顺手换成保存缓冲液。\n\n' +
         '**把顺序颠倒会怎样？**用 SEC 做第一步——上样体积上限 5%，你根本上不进去。用亲和做最后一步——它区分不了你的蛋白和它自己的二聚体（**两者都带标签**）。\n\n' +
         '**所以每一段的方法不是「更好」，是「只有它能干这一段的活」。**',
      takeaway: '体积从大到小、分辨率从低到高，两条曲线反向。每种方法只适合其中一段，所以顺序是被逼出来的。'
    },
    {
      q: '「SEC 为什么必须最后」——考试要的是哪个答案？',
      a: '**要的是那个硬约束，不是那个标签。**\n\n' +
         '**不得分的答案**：「因为它是精修步骤。」——这只是把结论换了个说法。\n\n' +
         '**得分的答案**：「**因为它的上样体积必须小于柱体积的 5%。**上样体积一大，同一种分子在柱子里的起始分布就已经很宽了，峰会互相重叠，分辨率崩掉。所以样品必须先被前面的步骤浓缩，SEC 在物理上不可能放在第一步。」\n\n' +
         '**再补一句会更完整**：「而且它顺带把蛋白换进最终的保存缓冲液，这正是最后一步需要的。」\n\n' +
         '**这一题是这一讲里最典型的「说出理由」型问题**，而它值得单独练一遍，因为它的答题结构可以套用到很多地方：\n\n' +
         '**先说物理约束 → 再说这个约束如何决定位置 → 最后补一句附带好处。**\n\n' +
         '同一个结构可以用来答「为什么亲和层析放第一步」（区分度最高，在最脏的时候收益最大 + 容量大能吃下大体积）、「为什么 RP 不能用来制备」（变性条件 + 但短肽没有结构可失去）。\n\n' +
         '**口试考的从来不是你记不记得规则，是你能不能说出规则从哪来。**',
      takeaway: '答「上样体积不能超柱体积 5%」这个硬约束，不要答「因为它是精修步骤」。'
    },
    {
      q: '除了纯度，排顺序时还要考虑什么？',
      a: '**缓冲液状态——每一步的输出必须是下一步能接受的输入。**\n\n' +
         '这一条容易被完全忽略，因为它不影响任何一步单独的效果，**只影响整条流程有多顺**。\n\n' +
         '几个具体的衔接关系（第 2-33 节讲过一部分）：\n\n' +
         '**硫酸铵沉淀 → HIC**：输出是高盐，HIC 正好要高盐。**直接进，不用处理。**\n\n' +
         '**硫酸铵沉淀 → 离子交换**：IEX 要低盐。**必须先脱盐**——几小时，丢材料，还多一次沉淀风险。\n\n' +
         '**HIC（低盐洗脱）→ 离子交换（要低盐）**：顺。\n\n' +
         '**离子交换（高盐洗脱）→ SEC**：顺，SEC 对盐不敏感，而且**顺手把盐换掉**。\n\n' +
         '**Ni-NTA（洗脱液含高浓度咪唑）→ 任何后续**：通常要除咪唑，而 SEC 或透析都能做。\n\n' +
         '**所以设计一条纯化路线，很大程度上是在做两件事：**\n\n' +
         '**按「体积递减、分辨率递增」排出大框架；**\n\n' +
         '**在框架内挑具体方法时，尽量让相邻两步的缓冲液条件自然衔接。**\n\n' +
         '**每省掉一次换缓冲液，就省下几小时、少丢一部分材料、少一次让蛋白析出的机会。**在一条三步的流程里，这个差别可能就是最终产量的两倍。',
      takeaway: '让前一步的输出条件正好是后一步需要的输入。每省一次换缓冲液，就省时间、材料和一次沉淀风险。'
    }
  ],
  points: [
    { term: 'Yield', en: 'Depends on column size and binding capacity. High for IEX, Ni-NTA, hydrophobic and protein A/G; medium for Streptactin and amylose; low for SEC and FLAG.', cn: '取决于柱子大小和结合容量。离子交换、Ni-NTA、疏水、protein A/G 高；Streptactin 和直链淀粉中等；SEC 和 FLAG 低。' },
    { term: 'Resolution', en: 'Compare affinity against ion exchange against size exclusion — they differ in how finely they discriminate.', cn: '比较亲和层析、离子交换和分子排阻——它们的分辨精细程度不同。' },
    { term: 'Throughput', en: 'Batch chromatography and magnetic beads are the high-throughput formats.', cn: '批式层析和磁珠是高通量的形式。' },
    { term: 'Time', en: 'Set by the flow speed of the mobile phase and by the dynamic binding capacity.', cn: '由流动相的流速和动态结合容量决定。' },
    { term: 'Stage 1 — capture', en: 'Use a high-capacity, highly specific method to pull the target out of crude lysate in one step. Usually affinity — Ni-NTA or protein A. At this point the volume is large and the impurities many, so what you need is capacity, not resolution.', cn: '用高容量、高特异性的方法一步从粗裂解液里把目标抓出来。通常是亲和层析——Ni-NTA 或 protein A。此时体积大、杂质多，需要的是容量而不是分辨率。' },
    { term: 'Stage 2 — intermediate purification', en: 'Ion exchange or hydrophobic interaction, to remove contaminants with similar properties. The volume is now small, so you can afford to chase resolution.', cn: '离子交换或疏水层析，去掉性质相近的杂蛋白。此时体积已经小了，可以开始追求分辨率。' },
    { term: 'Stage 3 — polishing', en: 'SEC. Removes aggregates, dimers and degradation fragments, and simultaneously exchanges the buffer into the final storage conditions.', cn: 'SEC。去除聚集体、二聚体和降解片段，同时把缓冲液置换成最终保存条件。' }
  ],
  beyondPoints: [
    { term: 'The order is forced, not chosen', en: 'The logic is that volume runs from large to small while resolution runs from low to high. SEC requires a load of under 5 per cent of column volume, so it can never be first — you cannot put a litre of lysate onto a SEC column. Affinity chromatography handles large volumes, so it naturally leads.', cn: '这条逻辑是「体积从大到小、分辨率从低到高」。SEC 要求上样体积小于柱体积的 5%，所以它绝不可能排第一——你不可能把一升裂解液上到 SEC 柱上。而亲和层析能处理大体积，所以天然适合打头阵。' },
    { term: 'Why SEC must be last is a frequent exam question', en: 'It is worth being able to give the reason rather than the rule: the constraint is the load volume, and it is a hard physical limit rather than a convention.', cn: '「为什么 SEC 必须放最后」是高频考点。值得能说出理由而不只是规则：约束来自上样体积，而这是一个硬性的物理限制，不是习惯做法。' },
    { term: 'Buffer state chains the steps together', en: 'Each step leaves the sample in a particular condition, and the next must accept it. An ammonium sulfate cut leaves you at high salt, which HIC takes directly but ion exchange cannot. Designing the order is largely about avoiding unnecessary buffer exchanges, since each one costs time and loses material.', cn: '每一步结束时样品处于某种状态，而下一步必须能接受它。硫酸铵沉淀之后是高盐，HIC 可以直接接，离子交换不行。设计顺序很大程度上就是在避免不必要的缓冲液置换，因为每一次都费时间、也损失材料。' }
  ],
  terms: [
    { en: 'Capture step', cn: '捕获步骤', def_en: 'The first purification step, chosen for high capacity and specificity to extract the target from crude lysate at large volume. Usually affinity chromatography.', def_cn: '纯化的第一步，为高容量和高特异性而选，用于在大体积下从粗裂解液中提取目标。通常是亲和层析。' },
    { en: 'Intermediate purification', cn: '中度纯化', def_en: 'The middle stage, typically ion exchange or HIC, removing contaminants of similar properties once the volume has been reduced.', def_cn: '中间阶段，通常是离子交换或疏水层析，在体积已经减小之后去除性质相近的杂质。' },
    { en: 'Polishing', cn: '精修', def_en: 'The final stage, almost always SEC, removing aggregates and degradation products and setting the storage buffer.', def_cn: '最后阶段，几乎总是 SEC，去除聚集体和降解产物，并确定保存缓冲液。' },
    { en: 'Purification train', cn: '纯化流程串', def_en: 'The ordered sequence of chromatography steps, designed so each step\'s output condition is acceptable as the next step\'s input.', def_cn: '有序排列的层析步骤序列，设计原则是每一步的输出状态正好能作为下一步的输入。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why can SEC never be the first step of a purification?',
      q_cn: '为什么 SEC 绝不可能是纯化的第一步？',
      options: ['Loading requires the low ionic strength of an ion exchange buffer, which lysate lacks', 'Crude lysate is far more than the 5 per cent of column volume allowed', 'It can only capture proteins that carry an affinity tag', 'Its mobile phase is denaturing and would unfold the target'],
      answer: 1,
      optionRefs: { 2: '2-35', 3: '2-34' },
      why_en: 'A hard physical constraint, not a convention. Exceeding 5 per cent broadens the peaks and destroys resolution, so the sample must already have been reduced in volume by earlier steps.',
      why_cn: '这是一个硬性的物理约束，不是习惯做法。超过 5% 会让峰变宽、分辨率崩溃，所以样品必须已经被前面的步骤减小了体积。' },
    { type: 'mcq',
      q_en: 'What property matters most in the capture step?',
      q_cn: '捕获步骤中最重要的性质是什么？',
      options: ['Resolution, so that dimers and degradation fragments are separated from the target', 'Capacity, because you are still loading litres of crude lysate', 'Low cost, since the first column handles the most material', 'Compatibility with the buffer the lysate is already in'],
      answer: 1,
      optionRefs: { 3: '2-30' },
      optionNotes: {
        0: { en: 'This moves the polishing criterion to the front of the train. Resolution is what you buy in the last step, once the volume is already small; at capture you are still pulling the target out of litres of lysate, and a high-resolution but low-capacity method would simply be overloaded.', cn: '这是把最后一步的标准挪到了最前面。分辨率是 polishing 阶段才追求的，那时体积已经很小了；capture 阶段你还在从几升裂解液里把目标抓出来，一个分辨率高但容量低的方法直接就超载了。' }
      },
      why_en: 'At the capture stage you are pulling a target out of a large volume of crude lysate, so you need something that can bind a lot of material specifically. Resolution becomes worth chasing only once the volume has come down.',
      why_cn: '在捕获阶段你要从大体积的粗裂解液里把目标拉出来，所以需要能特异性地结合大量物质的方法。只有等体积降下来之后，追求分辨率才有意义。' },
    { type: 'mcq',
      q_en: 'Which methods are listed as giving high yield?',
      q_cn: '哪些方法被列为产率高？',
      options: ['Size exclusion and FLAG antibody resin', 'Streptactin for Strep-tag II and amylose resin for the MBP fusion tag', 'Ion exchange, Ni-NTA, hydrophobic and protein A/G', 'Reverse phase chromatography on its own'],
      answer: 2,
      optionNotes: {
        0: { en: 'Those two are the entries at the opposite end of the same table — both listed as low yield: SEC because the load volume cannot exceed 5 per cent of column volume, FLAG because an antibody resin carries very little ligand per millilitre.', cn: '这两个恰好是同一张表另一端的条目——都被列为低产量：SEC 是因为上样体积不能超过柱体积的 5%，FLAG 是因为抗体树脂每毫升能带的配体很少。' }
      },
      why_en: 'Those four have high binding capacity. Streptactin and amylose are medium, while SEC and FLAG are explicitly low — SEC because of the load volume limit, FLAG because the antibody resin has low capacity.',
      why_cn: '这四种结合容量高。Streptactin 和直链淀粉是中等，而 SEC 和 FLAG 明确是低——SEC 是因为上样体积限制，FLAG 是因为抗体树脂容量低。' },
    { type: 'short',
      q_en: 'Describe the three-stage purification paradigm and explain why its order is not arbitrary.',
      q_cn: '描述三段式纯化范式，并解释为什么它的顺序不是随意的。',
      accept: ['capture', 'intermediate', 'polishing', 'volume', 'resolution', '5 per cent'],
      answer_en: 'The paradigm is capture, then intermediate purification, then polishing. Capture uses a high-capacity, highly specific method — usually affinity, Ni-NTA or protein A — to pull the target out of crude lysate in one step; at this point the volume is large and the impurities many, so what you need is capacity rather than resolution. Intermediate purification then uses ion exchange or hydrophobic interaction to remove contaminants with similar properties, and because the volume has come down you can afford to chase resolution. Polishing is SEC, removing aggregates, dimers and degradation fragments while simultaneously exchanging into the final storage buffer. The order is forced rather than chosen, because volume runs from large to small while required resolution runs from low to high. SEC has a hard limit of under five per cent of column volume in the load, so it can never come first — you plainly cannot put a litre of lysate onto a SEC column — whereas affinity chromatography handles large volumes and therefore naturally leads.',
      answer_cn: '这个范式是：捕获 → 中度纯化 → 精修。捕获用高容量、高特异性的方法——通常是亲和层析、Ni-NTA 或 protein A——一步从粗裂解液里把目标拉出来；此时体积大、杂质多，需要的是容量而不是分辨率。中度纯化用离子交换或疏水层析去掉性质相近的杂蛋白，此时体积已经降下来，可以开始追求分辨率。精修是 SEC，去除聚集体、二聚体和降解片段，同时置换到最终的保存缓冲液。这个顺序是被强制的而不是选出来的，因为体积从大到小、所需分辨率从低到高。SEC 有一个硬性限制：上样体积必须小于柱体积的 5%，所以它绝不可能排第一——你显然不可能把一升裂解液上到 SEC 柱上——而亲和层析能处理大体积，因此天然适合打头阵。'
    }
  ],
  oral: {
    q_en: 'How would you design a purification strategy from scratch?',
    q_cn: '你会怎么从零设计一套纯化策略？',
    model_en: 'There are four criteria to weigh for any individual step. Yield, which depends on column size and binding capacity — high for ion exchange, Ni-NTA, hydrophobic and protein A or G, medium for Streptactin and amylose, and explicitly low for SEC and FLAG. Resolution, comparing affinity against ion exchange against size exclusion. Throughput, where batch chromatography and magnetic beads are the high-throughput formats. And time, set by the flow speed and by the dynamic binding capacity. Assembling those into an actual purification gives the standard three-stage paradigm: capture, intermediate purification, polishing. Capture uses a high-capacity, highly specific method to pull the target out of crude lysate in a single step, usually affinity — Ni-NTA or protein A. At that point the volume is large and the impurities are many, so what you need is capacity, not resolution. Intermediate purification then uses ion exchange or hydrophobic interaction to strip out contaminants with similar properties; the volume is smaller now, so resolution becomes worth chasing. Polishing is SEC, which removes aggregates, dimers and degradation fragments and simultaneously exchanges the protein into its final storage buffer. The point I would emphasise is that this order is forced rather than chosen, because volume runs from large to small while the resolution you need runs from low to high. SEC has a hard constraint that the load must be under five per cent of the column volume, so it can never be first — you cannot put a litre of lysate onto a SEC column. Affinity, by contrast, copes with large volumes and therefore naturally leads. There is a second ordering constraint too, which is buffer state: each step leaves the sample in some condition and the next has to accept it. A sample from an ammonium sulfate cut is at high salt, which HIC takes directly but ion exchange cannot, so it would need desalting first. Designing a purification train is largely about arranging steps so that each one hands off cleanly, because every avoidable buffer exchange costs time and loses material.',
    checklist: ['Four criteria: yield, resolution, throughput, time', 'High yield: IEX, Ni-NTA, hydrophobic, protein A/G', 'Medium: Streptactin, amylose. Low: SEC, FLAG', 'Three stages: capture, intermediate purification, polishing', 'Capture: high capacity and specificity, usually affinity, from crude lysate', 'At capture, volume is large: you need capacity, not resolution', 'Intermediate: IEX or HIC, remove similar contaminants, volume now smaller', 'Polishing: SEC, removes aggregates and sets the storage buffer', 'The order is FORCED: volume large to small, resolution low to high', 'SEC load must be under 5% of column volume, so never first', 'Second constraint: buffer state must chain from step to step', 'Ammonium sulfate sample goes straight to HIC, but needs desalting for IEX']
  }
},

{
  id: '2-43',
  chapter: 2,
  lecture: 'Lecture 5',
  section: '2.43',
  enTitle: 'Purity analysis — SDS-PAGE',
  cnTitle: '纯度分析——SDS-PAGE',
  slides: 'L5 s.11',
  coverage: 'full',
  coverageNote: 'The protocol and the two stains are on the slide. What SDS actually does — three separate jobs, all necessary — is the beyond-the-slides content, and it is what explains why the technique reports molecular weight at all.',
  summary: {
    en: 'SDS-PAGE is denaturing polyacrylamide gel electrophoresis, separating proteins by their charge-to-mass ratio. You mix the sample with buffer containing SDS, glycerol, a reducing agent and tracking dye, boil for five minutes, run the gel, and stain with Coomassie or silver. SDS does three separate things — it denatures, it imposes a uniform negative charge density, and it abolishes shape differences — and it is the combination that makes migration depend on molecular weight alone.',
    cn: 'SDS-PAGE 是变性聚丙烯酰胺凝胶电泳，按电荷/质量比分离蛋白。把样品与含 SDS、甘油、还原剂和示踪染料的缓冲液混合，煮 5 分钟，跑胶，然后用考马斯亮蓝或银染显色。SDS 做了三件独立的事——使蛋白变性、赋予均一的负电荷密度、消除形状差异——正是这三者的组合让迁移率只取决于分子量。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**SDS 同时干了三件事**：让蛋白变性、给它统一的负电荷密度、消除形状差异。**三者合起来**，迁移率才只取决于分子量。\n\n' +
            '还原剂是**第四个、独立的**元素——不加它就是非还原胶，用来看有没有分子间二硫键。',
  skipIt: '**第 5 讲没有 RECAP 可以引用**——老师只在第 2–5 讲开头做过 RECAP，分别回顾第 1–4 讲。这里是我的判断：考马斯 50–100 ng、银染 1–5 ng 这两个灵敏度数字记个「银染灵敏十倍以上但不好定量」就够；**SDS 那三件事必须能分开讲**，那是这一节的核心。',
  explain: [
    {
      q: '为什么强调 SDS 做了「三件事」，而不是笼统说「它让蛋白变性」？',
      a: '**因为只有三件事都成立，「迁移率 = 分子量」这个结论才成立。少任何一件都不行。**\n\n' +
         '**第一，变性。**SDS 是强阴离子去污剂，破坏所有非共价相互作用，**把蛋白彻底展开成一条链**。\n\n' +
         '**第二，统一电荷密度。**SDS 按大约**每两个氨基酸残基结合一个分子**的比例包裹上去，**它自己的负电荷压倒了蛋白原本带的电荷**。于是所有蛋白的**电荷/质量比都变成一样的**。\n\n' +
         '**第三，消除形状差异。**每条链都被裹成同样的**棒状**，形状不再影响迁移。\n\n' +
         '**现在看为什么三件缺一不可：**\n\n' +
         '电泳中一个分子跑多快，取决于**电荷**（推力）、**大小**和**形状**（阻力）。\n\n' +
         '**第二件事把「电荷」这个变量消掉了**（大家一样）。\n\n' +
         '**第三件事把「形状」这个变量消掉了**（大家一样）。\n\n' +
         '**于是只剩下大小——也就是分子量——在起作用。**\n\n' +
         '**这就是为什么它叫 SDS-PAGE 而不只是 PAGE。**天然电泳（native PAGE）里没有 SDS，电荷、大小、形状三个变量同时在动，**你根本没法从胶上读出分子量**。\n\n' +
         '（反过来说，native PAGE 也有它的用处：正因为它保留了天然构象，可以用来看寡聚状态和构象变化。**变量多是缺点，也是信息。**）',
      takeaway: '消掉电荷、消掉形状，才只剩大小在起作用。少任何一件，迁移率就不再只反映分子量。'
    },
    {
      q: '还原剂为什么算「第四个、独立的」元素？不加会怎样？',
      a: '**因为 SDS 拆不了共价键，而二硫键是共价的。**\n\n' +
         'SDS 能破坏的是非共价相互作用。**二硫键是一根真正的化学键，SDS 对它无能为力。**所以要拆它，必须另外加 **DTT 或 β-巯基乙醇**。\n\n' +
         '**不加，就是「非还原胶」——而这不是做错了，这是一个专门的实验。**\n\n' +
         '**它能告诉你什么：有没有分子间二硫键。**\n\n' +
         '**教科书级的例子就是抗体：**\n\n' +
         '**还原胶上**：二硫键被拆开，抗体散成**重链（约 50 kDa）和轻链（约 25 kDa）两条带**。\n\n' +
         '**非还原胶上**：二硫键还在，整个抗体作为**一条约 150 kDa 的带**跑。\n\n' +
         '**两个胶并排跑，你就同时知道了它的亚基组成和它们是怎么连起来的。**\n\n' +
         '**这个技巧的一般用法：如果你怀疑自己的蛋白形成了二硫键连接的二聚体**（比如它在 SEC 上显得偏大，第 2-40 节），**跑一对还原/非还原胶就能确认**——非还原胶上出现分子量翻倍的带，还原胶上消失，那就是分子间二硫键。\n\n' +
         '**所以「加不加还原剂」不是操作细节，是你在问两个不同的问题。**',
      takeaway: 'SDS 拆不了共价的二硫键，所以要另加还原剂。不加就是非还原胶，用来看有没有分子间二硫键。'
    },
    {
      q: '考马斯和银染怎么选？',
      a: '**按「你要回答什么问题」选，不是按灵敏度选。**\n\n' +
         '**考马斯亮蓝**：灵敏度约 **50–100 ng**。一步、便宜、**定量性好**（染色强度跟蛋白量大致成正比）。\n\n' +
         '**银染**：灵敏度约 **1–5 ng**，**灵敏 10–50 倍**。但**定量性差**、步骤繁琐、而且容易染出背景。\n\n' +
         '**所以：**\n\n' +
         '**想知道「主带占多少比例、纯度是多少」** → **考马斯**。因为这是个定量问题，而银染答不了。\n\n' +
         '**想知道「有没有微量杂质」** → **银染**。考马斯看不见的东西，银染能看见。\n\n' +
         '**这里有一个很值得注意的陷阱：**\n\n' +
         '同一个样品，**考马斯胶上看起来「只有一条带、非常纯」，银染胶上可能冒出十几条杂带**。\n\n' +
         '**两个结果都没错**——它们回答的是不同的问题。「纯度 95%」和「含有可检出的微量杂质」可以同时为真。\n\n' +
         '**所以报告纯度时必须说明用的是哪种染色**，否则这个数字没有意义。这跟第 1-7 节那条是一路的：**一个指标的含义取决于它怎么测出来的。**',
      takeaway: '考马斯定量好，用来测纯度；银染灵敏十倍以上，用来找微量杂质。同一样品两种结论都对。'
    }
  ],
  points: [
    { term: 'What it is', en: 'Denaturing polyacrylamide gel electrophoresis.', cn: '变性聚丙烯酰胺凝胶电泳。' },
    { term: 'What it separates by', en: 'The charge-to-molecular-weight ratio of the proteins.', cn: '蛋白的电荷/分子量比。' },
    { term: 'Step 1', en: 'Mix the sample with PAGE buffer containing SDS, glycerol, a reducing agent and tracking dye.', cn: '把样品与含 SDS、甘油、还原剂和示踪染料的 PAGE 缓冲液混合。' },
    { term: 'Step 2', en: 'Boil for 5 minutes.', cn: '煮 5 分钟。' },
    { term: 'Step 3', en: 'Load and run.', cn: '上样并电泳。' },
    { term: 'Step 4', en: 'Stain, with either Coomassie blue or silver staining.', cn: '染色，用考马斯亮蓝或银染。' }
  ],
  beyondPoints: [
    { term: 'SDS job one — denaturation', en: 'SDS is a strong anionic detergent. It destroys all non-covalent interactions and unfolds the protein completely into a linear chain.', cn: 'SDS 是强阴离子去污剂。它破坏所有非共价相互作用，把蛋白彻底展开成一条线性链。' },
    { term: 'SDS job two — uniform charge density', en: 'It binds roughly one molecule per two amino acid residues, and its own negative charge overwhelms whatever charge the protein carried. So every protein ends up with the same charge-to-mass ratio, and mobility therefore depends only on molecular weight.', cn: '它大约每 2 个氨基酸残基结合 1 个分子，自带的负电荷远远压过蛋白原本的电荷。于是所有蛋白的电荷/质量比都变成一样，迁移率因此只取决于分子量。' },
    { term: 'SDS job three — abolishing shape', en: 'Every protein becomes rod-shaped, so shape no longer influences migration.', cn: '每个蛋白都变成棒状，形状不再影响迁移。' },
    { term: 'Why the name matters', en: 'This is why it is SDS-PAGE and not merely PAGE. In native PAGE without SDS, mobility is affected simultaneously by charge, size and shape, so you cannot read a molecular weight off the gel.', cn: '这就是为什么叫 SDS-PAGE 而不只是 PAGE。在没有 SDS 的天然电泳中，迁移率同时受电荷、大小和形状影响，所以读不出分子量。' },
    { term: 'The reducing agent is a fourth, separate element', en: 'DTT or beta-mercaptoethanol breaks disulfide bonds. Omit it and you are running a non-reducing gel, which tells you whether the protein has intermolecular disulfides — an antibody separates into heavy and light chains on a reducing gel but runs as a single 150 kDa band on a non-reducing one.', cn: '还原剂（DTT 或 β-巯基乙醇）是第四个独立要素：它打断二硫键。不加就是跑「非还原胶」，可以判断蛋白有没有分子间二硫键——抗体在还原胶上分成重链和轻链两条带，在非还原胶上则是一条 150 kDa 的带。' },
    { term: 'Stain sensitivity', en: 'Coomassie detects about 50 to 100 nanograms; silver staining about 1 to 5, so 10 to 50 times more sensitive — but it quantifies poorly and the procedure is laborious.', cn: '考马斯亮蓝的检测限约 50–100 ng，银染约 1–5 ng，灵敏 10–50 倍——但定量性差、操作繁琐。' }
  ],
  terms: [
    { en: 'SDS (sodium dodecyl sulfate)', cn: '十二烷基硫酸钠', def_en: 'A strong anionic detergent that denatures proteins, coats them with uniform negative charge at about one molecule per two residues, and makes them rod-shaped.', def_cn: '强阴离子去污剂，使蛋白变性，以约每 2 个残基结合 1 个分子的比例包裹上均一的负电荷，并使其呈棒状。' },
    { en: 'Native PAGE', cn: '天然电泳', def_en: 'Electrophoresis without SDS, in which mobility depends on charge, size and shape together — so it cannot report molecular weight but does preserve native structure.', def_cn: '不加 SDS 的电泳，迁移率同时取决于电荷、大小和形状——因此读不出分子量，但保留了天然结构。' },
    { en: 'Non-reducing gel', cn: '非还原胶', def_en: 'SDS-PAGE run without a reducing agent, so disulfide bonds survive. Comparing it with a reducing gel reveals intermolecular disulfides.', def_cn: '不加还原剂跑的 SDS-PAGE，二硫键得以保留。与还原胶对比可以揭示分子间二硫键。' },
    { en: 'Silver staining', cn: '银染', def_en: 'A protein stain detecting 1 to 5 nanograms, 10 to 50 times more sensitive than Coomassie, but with poor quantitative behaviour and a laborious protocol.', def_cn: '一种检测限 1–5 ng 的蛋白染色法，灵敏度是考马斯亮蓝的 10–50 倍，但定量性差、操作繁琐。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What three things does SDS do in SDS-PAGE?',
      q_cn: 'SDS 在 SDS-PAGE 中做了哪三件事？',
      options: ['Unfolds the chain, stains it blue, and fixes it in the gel', 'Unfolds the chain, adds uniform negative charge, and cancels shape effects', 'Breaks disulfide bonds, unfolds the chain, and stains it blue', 'Sets the pH of the sample buffer, unfolds the chain, and makes it sink into the well'],
      answer: 1,
      optionNotes: {
        2: { en: 'Breaking disulfides is the job of DTT or beta-mercaptoethanol, a separate ingredient of the sample buffer. SDS destroys only non-covalent interactions and a disulfide is a covalent bond — which is exactly why leaving the reducing agent out gives you a meaningful non-reducing gel.', cn: '打断二硫键是 DTT 或 β-mercaptoethanol 干的活，它是上样缓冲液里另一个组分。SDS 只能破坏非共价相互作用，而二硫键是共价键——正因如此，不加还原剂跑出来的非还原胶才有意义。' },
        3: { en: 'Buffering and density are real effects, but they belong to the other ingredients of the sample buffer — Tris sets the pH and glycerol makes the sample sink into the well. The three jobs credited to SDS all have to be things that leave mobility depending on molecular weight alone.', cn: '缓冲和加重确实存在，但那是上样缓冲液里其他成分的功劳——Tris 定 pH，glycerol 让样品沉到孔底。算在 SDS 头上的那三件事，必须都是让迁移率只剩下分子量这一个变量的作用。' }
      },
      why_en: 'All three are necessary for the gel to report molecular weight. Reducing disulfides is a separate job done by DTT or beta-mercaptoethanol, and staining happens after the run.',
      why_cn: '这三件事缺一不可，凝胶才能反映分子量。还原二硫键是 DTT 或 β-巯基乙醇的另一项工作，而染色是电泳之后才做的。' },
    { type: 'mcq',
      q_en: 'Why does SDS make migration depend only on molecular weight?',
      q_cn: '为什么 SDS 能让迁移率只取决于分子量？',
      options: ['It coats only the largest proteins, leaving small ones unbound', 'It binds in proportion to chain length, so charge-to-mass ratio is constant', 'It neutralises every charge on the protein, leaving the chain with no net charge', 'It covalently cross-links the chain into an extended rod'],
      answer: 1,
      optionNotes: {
        2: { en: 'SDS does not cancel charge, it swamps it: the coated chain ends up strongly negative, which is what makes it migrate towards the anode at all. If the net charge really were zero the protein would sit in the well and never enter the gel.', cn: 'SDS 不是把电荷中和掉，而是把原有电荷压过去：包裹之后整条链是强负电的，蛋白才会往正极跑。如果净电荷真是零，蛋白就会停在孔里，根本进不了胶。' }
      },
      why_en: 'Uniform binding proportional to length means uniform charge proportional to mass. Once the charge-to-mass ratio is the same for every protein, the only variable left affecting mobility is size.',
      why_cn: '与长度成比例的均匀结合意味着与质量成比例的均匀电荷。一旦所有蛋白的电荷/质量比都相同，影响迁移率的唯一变量就只剩大小了。' },
    { type: 'mcq',
      q_en: 'An antibody runs as a single 150 kDa band on one gel and as two bands on another. What is the difference between the gels?',
      q_cn: '一个抗体在一块胶上是单一的 150 kDa 条带，在另一块上是两条带。这两块胶的区别是什么？',
      options: ['The two gels were cast at different acrylamide percentages', 'One gel had reducing agent in the sample buffer and the other did not', 'One gel was silver stained, and silver resolves heavy and light chains separately', 'One gel was run for longer, so the bands separated further'],
      answer: 1,
      why_en: 'Heavy and light chains are joined by disulfide bonds. With a reducing agent they separate into two bands; without one the assembled antibody runs intact at 150 kDa. Comparing the two is how you detect intermolecular disulfides.',
      why_cn: '重链和轻链之间由二硫键连接。加还原剂后它们分成两条带；不加则整个组装好的抗体以 150 kDa 完整跑出。对比这两块胶正是检测分子间二硫键的方法。' },
    { type: 'short',
      q_en: 'Explain what SDS does and why the technique could not report molecular weight without it.',
      q_cn: '解释 SDS 的作用，以及为什么没有它这项技术就读不出分子量。',
      accept: ['denature', 'charge', 'shape', 'charge-to-mass', 'native PAGE'],
      answer_en: 'SDS does three separate jobs and all of them are necessary. First it denatures: it is a strong anionic detergent that destroys every non-covalent interaction and unfolds the protein into a linear chain. Second it imposes a uniform negative charge density, binding roughly one molecule per two amino acid residues, and because its own charge overwhelms whatever charge the protein carried, every protein ends up with the same charge-to-mass ratio. Third it abolishes shape differences, since everything becomes rod-shaped. Take the three together and the only variable left influencing migration is molecular weight. Without SDS you are running native PAGE, where mobility depends simultaneously on charge, size and shape, and those cannot be disentangled from a single band position — so you cannot read a molecular weight off the gel. That is precisely why the technique is named SDS-PAGE rather than just PAGE.',
      answer_cn: 'SDS 做三件独立的事，缺一不可。第一，使蛋白变性：它是强阴离子去污剂，破坏所有非共价相互作用，把蛋白展开成线性链。第二，赋予均一的负电荷密度：大约每 2 个氨基酸残基结合 1 个分子，而且它自带的负电荷远远压过蛋白原本的电荷，于是所有蛋白的电荷/质量比都变成一样。第三，消除形状差异：一切都变成棒状。三者合起来，影响迁移率的唯一变量就只剩分子量。不加 SDS 跑的是天然电泳，迁移率同时取决于电荷、大小和形状，而单看一条带的位置无法把这三者拆开——所以读不出分子量。这正是它叫 SDS-PAGE 而不只是 PAGE 的原因。'
    }
  ],
  oral: {
    q_en: 'How do you assess the purity of a protein preparation?',
    q_cn: '你怎么评估一份蛋白制品的纯度？',
    model_en: 'The standard method is SDS-PAGE, denaturing polyacrylamide gel electrophoresis, which separates proteins by their charge-to-molecular-weight ratio. The protocol is short: mix the sample with PAGE buffer containing SDS, glycerol, a reducing agent and tracking dye; boil for five minutes; load and run; then stain with Coomassie blue or silver. The part worth explaining is what SDS is actually doing, because it does three separate jobs and all of them are necessary. First, it denatures — it is a strong anionic detergent, so it destroys every non-covalent interaction and unfolds the protein completely into a linear chain. Second, it imposes a uniform negative charge density: it binds roughly one molecule per two amino acid residues, and its own negative charge overwhelms whatever charge the protein originally carried, so every protein ends up with the same charge-to-mass ratio. Third, it abolishes shape differences, because everything becomes rod-shaped. Put those together and the only variable left affecting migration is molecular weight. That is exactly why it is called SDS-PAGE and not simply PAGE: in native PAGE, mobility depends on charge, size and shape simultaneously, and you cannot read a molecular weight out of that. The reducing agent is a fourth and separate element — DTT or beta-mercaptoethanol breaks disulfide bonds — and omitting it deliberately gives you a non-reducing gel, which is how you detect intermolecular disulfides. An antibody is the classic illustration: two bands for heavy and light chain on a reducing gel, a single hundred-and-fifty-kilodalton band on a non-reducing one. As for the stains, Coomassie detects around fifty to a hundred nanograms while silver detects one to five, so silver is ten to fifty times more sensitive — but it quantifies poorly and the procedure is laborious, so Coomassie remains the default unless you are chasing trace contaminants.',
    checklist: ['SDS-PAGE: denaturing polyacrylamide gel electrophoresis', 'Separates by charge-to-molecular-weight ratio', 'Protocol: mix with SDS/glycerol/reductant/dye, boil 5 min, run, stain', 'SDS job 1: denatures, unfolds to a linear chain', 'SDS job 2: ~1 molecule per 2 residues, uniform charge-to-mass ratio', 'SDS job 3: everything becomes rod-shaped, shape no longer matters', 'Result: migration depends on molecular weight alone', 'Hence SDS-PAGE not PAGE — native PAGE confounds charge, size and shape', 'Reducing agent is separate: DTT or BME breaks disulfides', 'Non-reducing gel reveals intermolecular disulfides', 'Antibody: 2 bands reducing, single 150 kDa band non-reducing', 'Coomassie ~50-100 ng; silver ~1-5 ng but poor quantitation']
  }
},

{
  id: '2-44',
  chapter: 2,
  lecture: 'Lecture 5',
  section: '2.44',
  enTitle: 'Determining protein concentration',
  cnTitle: '蛋白浓度的测定',
  slides: 'L5 s.12–13',
  coverage: 'full',
  coverageNote: 'The methods table and the Bradford details are on the slides. Which method to pick for which sample is not stated as such, and it is the practical question — the answer turns on what interferes with each one.',
  summary: {
    en: 'Five methods are available, and they trade convenience against reliability. UV absorption at 280 nm needs no standard curve because the extinction coefficient is calculable from sequence, but nucleic acids also absorb there. The Bradford assay uses Coomassie G-250, whose absorbance maximum shifts from 465 to 595 nm on binding protein; it is sensitive to 1 microgram but needs a calibration curve and responds differently to different proteins. Biuret methods such as BCA are incompatible with reducing agents.',
    cn: '有五种方法可选，它们在便利性和可靠性之间各有取舍。280 nm 紫外吸收不需要标准曲线，因为消光系数可以从序列算出来，但核酸在那里也有吸收。Bradford 法用考马斯亮蓝 G-250，它结合蛋白后吸收峰从 465 nm 移到 595 nm；灵敏度可达 1 µg，但需要标准曲线，而且对不同蛋白的响应差别很大。BCA 这类双缩脲法与还原剂不兼容。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L5 s.12', src: 'img/figures/L5_s12_1.webp' },
    { slide: 'L5 s.12', src: 'img/figures/L5_s12_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '实用规则只有三条：**纯蛋白用 A280**（快、不耗样、不用标准曲线）；**粗样品或含核酸的用 Bradford**（核酸在 280 nm 也吸收，会让 A280 严重高估）；**有还原剂时不要用 BCA / Lowry**（铜化学被破坏）。',
  skipIt: '**第 5 讲没有 RECAP 可以引用**——老师只在第 2–5 讲开头做过 RECAP，分别回顾第 1–4 讲。这里是我的判断：465→595 nm 这个位移、以及各方法的灵敏度数字，知道大概就行；**要记的是那三条实用规则和各自的失效条件**。',
  explain: [
    {
      q: 'A280 为什么不需要标准曲线？别的方法为什么需要？',
      a: '**因为 A280 测的是一个可以从序列算出来的物理量，而别的方法测的是一个必须实测的化学反应。**\n\n' +
         '**A280 的原理**：**色氨酸（Trp）在 280 nm 吸收最强**，其次是酪氨酸（Tyr），苯丙氨酸远远落后。\n\n' +
         '**关键在于：你知道自己蛋白的序列，所以你知道它有几个 Trp、几个 Tyr。**于是**消光系数可以直接算出来**（ProtParam 一键给你）。有了消光系数，测个吸光度，浓度就出来了。\n\n' +
         '**几秒钟，不消耗样品**（测完还能倒回去用），**不需要任何标准品**。\n\n' +
         '**Bradford 完全不同**：它测的是考马斯 G-250 结合蛋白后的颜色变化（吸收峰从 465 nm 移到 595 nm）。**这个变化有多大，取决于你的蛋白上有多少碱性和芳香族残基**——因为染料主要结合这些残基。\n\n' +
         '**而这个「多少」没有通用公式，只能拿一个已知浓度的蛋白（通常是 BSA）做出曲线来比。**\n\n' +
         '**所以两者的哲学不同：A280 是「算」，Bradford 是「比」。**\n\n' +
         '**这也直接推出了 Bradford 的最大局限**：BSA 曲线对一个氨基酸组成很不一样的蛋白，**误差可能达到几倍**。你测出来的数字精确到小数点后两位，实际可能差一倍。',
      takeaway: 'A280 的消光系数能从序列算出来，所以是「算」；Bradford 依赖氨基酸组成，只能拿标准品「比」。'
    },
    {
      q: 'A280 在什么时候会骗你？',
      a: '**两种情况，而且都很常见。**\n\n' +
         '**第一：样品里有核酸。**\n\n' +
         '**DNA 和 RNA 在 260–280 nm 有很强的吸收**——而且比蛋白强得多。所以一份粗裂解液的 A280 里，**很大一部分根本不是你的蛋白**。你会**严重高估**浓度。\n\n' +
         '**怎么查：看 A260/A280 比值。**纯蛋白大约是 **0.57**。明显高于这个数，说明有核酸污染，A280 的结果不能信。\n\n' +
         '（顺带：纯 DNA 的这个比值约 1.8，方向正好反过来。所以这个比值是一个双向的纯度指标。）\n\n' +
         '**第二：你的蛋白里没有色氨酸。**\n\n' +
         '既然 A280 主要靠 Trp，那么**一个不含 Trp 的蛋白，消光系数会低到测量几乎没有意义**——吸光度太小，噪音就把信号淹了。\n\n' +
         '**这一条值得在设计阶段就查一下**：拿到序列先看有没有 Trp。没有的话，从一开始就要计划用别的方法测浓度。\n\n' +
         '**所以那条实用规则的完整版是：**\n\n' +
         '**纯化后的、含 Trp 的蛋白 → A280**（快、免费、不耗样）。\n\n' +
         '**粗样品、或含核酸、或不含 Trp → Bradford。**Bradford 对核酸不敏感，正好补上第一个缺口。',
      takeaway: '核酸在 280 nm 也吸收（查 A260/A280，纯蛋白约 0.57）；不含 Trp 的蛋白消光系数太低。这两种情况改用 Bradford。'
    },
    {
      q: '为什么「有还原剂时不能用 BCA / Lowry」？',
      a: '**因为这两个方法测的就是「铜被还原了多少」，而还原剂会直接把铜还原掉。**\n\n' +
         '双缩脲类方法（BCA、Lowry）的原理是两步：\n\n' +
         '**第一步**：蛋白的肽键在碱性条件下**螯合 Cu²⁺，并把它还原成 Cu⁺**。**还原了多少 Cu⁺，反映蛋白有多少。**\n\n' +
         '**第二步**：用显色试剂（BCA）检测生成的 Cu⁺，出颜色。\n\n' +
         '**现在你的样品里有 DTT 或 β-巯基乙醇。**它们是还原剂——**它们自己就会把 Cu²⁺ 还原成 Cu⁺**，而且效率很高。\n\n' +
         '**结果是显色一片，浓度严重高估，甚至直接爆表。**测的根本不是蛋白。\n\n' +
         '**这个失效模式的特点是「机制性」的**：不是干扰，是**你的干扰物和你的分析物在做同一件事**，所以原理上无法校正。\n\n' +
         '**而还原剂在蛋白样品里极其常见**（第 2-13 节、第 2-43 节都要用），所以这个坑踩到的概率很高。\n\n' +
         '**顺带把几个方法的干扰物排一排，记法很清楚：**\n\n' +
         '**A280** 怕**核酸**。\n\n' +
         '**Bradford** 怕**去污剂**（SDS、Triton 会跟染料作用）。\n\n' +
         '**BCA / Lowry** 怕**还原剂**。\n\n' +
         '**三个方法，三种怕的东西，正好互补**——所以实际工作中常常是「手上有什么缓冲液，就决定了能用哪个方法」。',
      takeaway: 'BCA 测的就是被还原的铜，而 DTT 自己就能还原铜。A280 怕核酸、Bradford 怕去污剂、BCA 怕还原剂。'
    }
  ],
  points: [
    { term: 'Typical amounts and concentrations', en: 'Lab-scale purified protein runs from micrograms to milligrams. Working concentrations are nanograms per mL for biological assays, micrograms per mL for biochemical, and milligrams per mL for biophysical.', cn: '实验室规模纯化出的蛋白从微克到毫克。工作浓度：生物学实验用 ng/mL，生化实验用 µg/mL，生物物理实验用 mg/mL。' },
    { term: 'UV absorption', en: 'Tryptophan absorbs most at 280 nm, then tyrosine, with phenylalanine far behind. The extinction coefficient can be obtained from the sequence, but many substances including DNA also absorb in the UV.', cn: '280 nm 处色氨酸吸收最强，其次是酪氨酸，苯丙氨酸远远落后。消光系数可以从序列得到，但包括 DNA 在内的很多物质在紫外区也有吸收。' },
    { term: 'Colorimetric', en: 'A dye binding to protein changes colour. A calibration curve is needed, and different proteins respond differently. Bradford is the example.', cn: '染料结合蛋白后颜色改变。需要标准曲线，而且不同蛋白的响应不同。代表是 Bradford 法。' },
    { term: 'Biuret methods', en: 'Protein-copper chelation with secondary detection of the reduced copper. Calibration needed, time-consuming, and incompatible with common reducing agents. BCA and Lowry are the examples.', cn: '蛋白与铜螯合，再间接检测被还原的铜。需要标准曲线，耗时，而且与常用还原剂不兼容。代表是 BCA 和 Lowry。' },
    { term: 'Fluorescence', en: 'Tryptophan fluorescence at 280 excitation and 350 emission, or special dyes. Very sensitive, but dyes are costly and a fluorometer is needed.', cn: '色氨酸荧光，激发 280 nm、发射 350 nm，或者用特殊染料。非常灵敏，但染料贵且需要荧光计。' },
    { term: 'Amino acid analysis', en: 'Digest the protein and quantify the individual amino acids. Extremely time-consuming but very precise.', cn: '把蛋白水解后定量各个氨基酸。极其耗时，但非常精确。' },
    { term: 'Bradford chemistry', en: 'Coomassie Brilliant Blue G-250 in acidic solution binds protein through basic and aromatic residues, shifting the absorbance maximum from 465 to 595 nm.', cn: '酸性条件下的考马斯亮蓝 G-250 通过碱性和芳香族残基结合蛋白，使吸收峰从 465 nm 移到 595 nm。' },
    { term: 'Bradford properties', en: 'One step, quick, easy, cheap, sensitive to 1 microgram, with limited buffer interference. But it needs a calibration curve such as BSA, has a narrow linear response, and depends on amino acid composition.', cn: '一步完成、快速、简单、便宜、灵敏度 1 µg、缓冲液干扰较小。但需要标准曲线（如 BSA），线性范围窄，而且依赖氨基酸组成。' }
  ],
  beyondPoints: [
    { term: 'What A280 is good at', en: 'It consumes no sample and needs no standard curve, because the extinction coefficient can be calculated from the sequence — ProtParam gives it directly — and the result takes seconds.', cn: '它不消耗样品、不需要标准曲线，因为消光系数可以从序列算出来（ProtParam 直接给），而且几秒钟就出结果。' },
    { term: 'Where A280 fails', en: 'Nucleic acids absorb strongly at 260 to 280 nm, so a crude sample is badly overestimated — check the A260 over A280 ratio, which should be about 0.57 for pure protein. And a protein with no tryptophan has an extinction coefficient so low that the measurement is meaningless.', cn: '核酸在 260–280 nm 有强吸收，所以粗样品会被严重高估——要看 A260/A280 比值，纯蛋白应约为 0.57。而不含色氨酸的蛋白消光系数极低，测出来毫无意义。' },
    { term: 'Where Bradford wins and loses', en: 'It is sensitive and insensitive to nucleic acids. But it needs a standard curve, and different proteins respond very differently, because the dye binds mainly basic and aromatic residues — a BSA curve applied to an acidic protein can be off by several fold. The linear range is narrow, and detergents such as SDS and Triton interfere badly.', cn: '它灵敏，而且不受核酸干扰。但必须做标准曲线，而且不同蛋白响应差异很大——因为染料主要结合碱性和芳香族残基，用 BSA 做的曲线去测富含酸性残基的蛋白可能差好几倍。线性范围窄，SDS 和 Triton 这类去污剂干扰严重。' },
    { term: 'The practical rule', en: 'Use A280 for purified protein, since it is fast, accurate and consumes nothing. Use Bradford for crude lysate or anything containing nucleic acid. And do not use BCA or Lowry when reducing agents are present, because the copper chemistry is disrupted by them.', cn: '纯化好的蛋白用 A280，快、准、不耗样品。粗裂解液或含核酸的样品用 Bradford。有还原剂存在时不要用 BCA 或 Lowry，因为铜法会被还原剂干扰。' }
  ],
  terms: [
    { en: 'Extinction coefficient', cn: '消光系数', def_en: 'The absorbance of a 1 M solution over a 1 cm path. Calculable from tryptophan, tyrosine and cysteine content, which is what lets A280 work without a standard curve.', def_cn: '1 M 溶液在 1 cm 光程下的吸光度。可以从色氨酸、酪氨酸和半胱氨酸含量算出，这正是 A280 不需要标准曲线的原因。' },
    { en: 'A260/A280 ratio', cn: 'A260/A280 比值', def_en: 'A purity check for nucleic acid contamination. Pure protein gives about 0.57; a higher value means DNA or RNA is inflating the reading.', def_cn: '检查核酸污染的纯度指标。纯蛋白约为 0.57；数值偏高说明 DNA 或 RNA 抬高了读数。' },
    { en: 'Bradford assay', cn: 'Bradford 法', def_en: 'Quantitation using Coomassie G-250, whose absorbance maximum shifts from 465 to 595 nm on binding basic and aromatic residues. Sensitive to 1 µg but composition-dependent.', def_cn: '用考马斯亮蓝 G-250 定量，它结合碱性和芳香族残基后吸收峰从 465 nm 移到 595 nm。灵敏度 1 µg，但依赖氨基酸组成。' },
    { en: 'BCA assay', cn: 'BCA 法', def_en: 'A biuret method detecting copper reduced by protein. Sensitive and robust to detergents, but incompatible with reducing agents such as DTT.', def_cn: '一种双缩脲法，检测被蛋白还原的铜。灵敏、耐去污剂，但与 DTT 这类还原剂不兼容。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does the Bradford assay require a calibration curve while A280 does not?',
      q_cn: '为什么 Bradford 法需要标准曲线而 A280 不需要？',
      options: ['Bradford is less sensitive than A280, so it needs a standard curve to read low amounts', 'Dye binding varies with amino acid composition, while A280 follows from the sequence', 'The dye also binds nucleic acids, so the signal has to be corrected', 'A280 gives only a relative signal, never an absolute concentration'],
      answer: 1,
      optionNotes: {
        0: { en: 'Sensitivity runs the other way — Bradford reads down to about 1 microgram, far below what A280 can measure, and that is one of the reasons to use it. What it cannot do is give an absolute number without a standard, because the dye response depends on how many basic and aromatic residues the protein happens to have.', cn: '灵敏度是反过来的——Bradford 能测到约 1 µg，比 A280 低得多，这正是用它的理由之一。它做不到的是不用标准品就给出绝对值，因为染料的响应取决于这个蛋白有多少碱性和芳香族残基。' }
      },
      why_en: 'Because dye binding varies with composition, a BSA standard curve applied to a very different protein can be off by several fold. A280 sidesteps this by computing the coefficient from the actual sequence.',
      why_cn: '因为染料结合量随氨基酸组成而变，用 BSA 做的标准曲线去测一个组成差别很大的蛋白可能差好几倍。A280 则通过从实际序列计算消光系数绕开了这个问题。' },
    { type: 'mcq',
      q_en: 'What A260/A280 ratio would you expect for pure protein?',
      q_cn: '纯蛋白的 A260/A280 比值应该是多少？',
      options: ['About 1.8', 'About 2.0', 'About 0.57', 'About 0.1'],
      answer: 2,
      optionNotes: {
        0: { en: '1.8 is the A260/A280 of pure DNA — the same ratio read from the nucleic acid side. Protein absorbs mainly at 280 nm through tryptophan and tyrosine, so for protein the ratio is inverted and lands well below 1, at about 0.57.', cn: '1.8 是纯 DNA 的 A260/A280，那是同一个比值从核酸那一侧读出来的数。蛋白主要靠 tryptophan 和 tyrosine 在 280 nm 吸收，所以对蛋白来说这个比值是倒过来的，远小于 1，大约 0.57。' },
        1: { en: '2.0 is the A260/A280 expected for pure RNA, not for protein. Both nucleic acid numbers say the same thing — absorbance at 260 nm dominates. For protein it is 280 nm that dominates, so the ratio must be well below 1, and a reading drifting up towards 1.8 or 2.0 is telling you there is nucleic acid in the sample.', cn: '2.0 是纯 RNA 的 A260/A280，不是蛋白的。核酸的这两个数字说的是同一件事：260 nm 的吸收占主导。蛋白则是 280 nm 占主导，所以比值必须远小于 1；读数往 1.8 或 2.0 漂，说明样品里混了核酸。' }
      },
      why_en: 'About 0.57. A higher value indicates nucleic acid contamination, which absorbs strongly at 260-280 nm and would inflate your apparent protein concentration.',
      why_cn: '约 0.57。数值更高说明有核酸污染，而核酸在 260–280 nm 有强吸收，会虚高你测到的蛋白浓度。' },
    { type: 'mcq',
      q_en: 'Your buffer contains 5 mM DTT. Which quantitation method should you avoid?',
      q_cn: '你的缓冲液含 5 mM DTT。应该避开哪种定量方法？',
      options: ['A280', 'Bradford', 'BCA or Lowry', 'Fluorescence'],
      answer: 2,
      optionNotes: {
        1: { en: 'The two incompatibilities are swapped. Bradford is the assay that tolerates reducing agents and fails on detergents such as SDS or Triton, which interfere with the dye. Reducing agents attack the copper chemistry instead, which is what takes out BCA and Lowry.', cn: '两种不相容被对调了。Bradford 恰恰是耐还原剂的那一个，它怕的是 SDS、Triton 这类去污剂，因为去污剂会干扰染料。还原剂破坏的是铜的化学，倒下的是 BCA 和 Lowry。' }
      },
      why_en: 'The biuret methods work by detecting copper that protein has reduced, so a reducing agent in the buffer reduces the copper independently and destroys the measurement.',
      why_cn: '双缩脲类方法的原理是检测被蛋白还原的铜，所以缓冲液里的还原剂会自己把铜还原，从而破坏整个测定。' },
    { type: 'short',
      q_en: 'When would you use A280 and when Bradford?',
      q_cn: '什么时候用 A280，什么时候用 Bradford？',
      accept: ['purified', 'crude', 'nucleic acid', 'tryptophan', 'standard curve'],
      answer_en: 'Use A280 for purified protein. It consumes no sample, needs no standard curve because the extinction coefficient is calculable from the sequence — ProtParam gives it directly — and takes seconds. It has two failure modes though. Nucleic acids absorb strongly between 260 and 280 nanometres, so a crude sample is badly overestimated, which is why you check the A260 over A280 ratio and expect about 0.57 for pure protein. And a protein containing no tryptophan has an extinction coefficient so low that the reading is meaningless. Use Bradford for crude lysate or anything containing nucleic acid, since it is sensitive down to a microgram and insensitive to nucleic acids. Its costs are that it needs a standard curve, that different proteins respond very differently because the dye binds mainly basic and aromatic residues — a BSA curve on an acidic protein can be several fold out — that the linear range is narrow, and that detergents like SDS and Triton interfere badly. And separately, avoid BCA or Lowry whenever reducing agents are present, because those are copper-based methods and a reductant in the buffer disrupts the chemistry.',
      answer_cn: '纯化好的蛋白用 A280。它不消耗样品、不需要标准曲线（消光系数可以从序列算，ProtParam 直接给），而且几秒钟出结果。但它有两个失效情形。核酸在 260–280 nm 有强吸收，所以粗样品会被严重高估——因此要看 A260/A280 比值，纯蛋白应约为 0.57。另外，不含色氨酸的蛋白消光系数极低，读数没有意义。粗裂解液或含核酸的样品用 Bradford，它灵敏度可达 1 µg，而且不受核酸干扰。它的代价是：必须做标准曲线；不同蛋白响应差异很大，因为染料主要结合碱性和芳香族残基，用 BSA 曲线测酸性蛋白可能差好几倍；线性范围窄；SDS、Triton 这类去污剂干扰严重。另外单独提一条：只要有还原剂存在就避开 BCA 和 Lowry，因为它们是铜法，缓冲液里的还原剂会破坏这套化学。'
    }
  ],
  oral: {
    q_en: 'How do you determine the concentration of a purified protein?',
    q_cn: '怎么测定纯化好的蛋白的浓度？',
    model_en: 'There are five approaches and they trade convenience against reliability. UV absorption at two hundred and eighty nanometres relies on tryptophan absorbing most strongly, then tyrosine, with phenylalanine far behind. Colorimetric methods use a dye that changes colour on binding protein, Bradford being the example. Biuret methods such as BCA and Lowry work through protein-copper chelation with secondary detection of the reduced copper. Fluorescence uses tryptophan emission at two-eighty excitation and three-fifty emission, or special dyes, and is very sensitive but needs a fluorometer. And amino acid analysis, digesting the protein and quantifying the individual residues, is extremely precise and extremely time-consuming. In practice the choice is between the first two. A two-eighty is the method for purified protein: it consumes no sample, needs no standard curve because the extinction coefficient can be calculated directly from the sequence in ProtParam, and gives an answer in seconds. Its two weaknesses are that nucleic acids also absorb strongly between two-sixty and two-eighty, so a crude sample is badly overestimated — hence checking the A two-sixty over A two-eighty ratio, which should be around nought point five seven for pure protein — and that a protein with no tryptophan has an extinction coefficient so low the reading means nothing. Bradford uses Coomassie Brilliant Blue G-250 in acid, which binds basic and aromatic residues and shifts its absorbance maximum from four-sixty-five to five-ninety-five nanometres. It is one step, quick, cheap, sensitive to a microgram, and insensitive to nucleic acids, which makes it right for crude lysate. But it needs a calibration curve, typically BSA, and because the dye binds composition-dependently, a BSA curve applied to an acidic protein can be out by several fold; the linear range is narrow, and detergents interfere badly. One more rule worth carrying: if there is a reducing agent in the buffer, do not use BCA or Lowry, because the copper chemistry they depend on is disrupted by it.',
    checklist: ['Five methods: UV, colorimetric, biuret, fluorescence, amino acid analysis', 'Working ranges: ng/mL biological, µg/mL biochemical, mg/mL biophysical', 'A280: Trp > Tyr >> Phe; extinction coefficient from sequence via ProtParam', 'A280 pros: no sample consumed, no standard curve, seconds', 'A280 con 1: nucleic acids absorb at 260-280 and inflate the reading', 'Check A260/A280, expect ~0.57 for pure protein', 'A280 con 2: no tryptophan means the coefficient is uselessly low', 'Bradford: Coomassie G-250, acid, binds basic and aromatic residues', 'Absorbance maximum shifts 465 to 595 nm; sensitive to 1 µg', 'Bradford cons: needs BSA curve, composition-dependent, narrow range, detergents interfere', 'Rule: A280 for purified protein, Bradford for crude or nucleic-acid-containing', 'Never BCA or Lowry with reducing agents present']
  }
}

]);
