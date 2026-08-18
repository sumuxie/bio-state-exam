/* =========================================================================
   PESB — Batch 5 · Lectures 11–12 · Minimal Cells and Metabolic Engineering
   Source: notes/md/05_lec11-12_minimal-cells-metabolic-engineering.md

   NOTE ON LECTURES 6 AND 10: the folder contains no slides for either.
   Per the agenda slide repeated across Lectures 7-9, #6 is listed as
   "Repetition/back-up/guest", so it may carry no independent examinable
   content. #10, by the numbering in Lecture 9's own recap slide, is screen
   vs selection -- already covered in full in ch4. Nothing in the course is
   missing; only two numbers are unaccounted for.

   `points` are from the slides. `beyondPoints` are the md's "beyond the
   slides" blocks.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

/* ============ PART I — LECTURE 11: MINIMAL CELLS ============ */

{
  id: '5-1',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.1',
  enTitle: 'Why build synthetic cells — and the honest counter-argument',
  cnTitle: '为什么要造合成细胞——以及那个诚实的反驳',
  slides: 'L11 s.2–6',
  coverage: 'full',
  coverageNote: 'The four reasons and the PLP case study are on the slides. That the PLP result is double-edged — wonderful news about cellular robustness, terrible news for anyone trying to control a cell — is the argument the whole lecture rests on.',
  summary: {
    en: 'Four distinct reasons: predictability, because natural cells are not fully understood; resource efficiency, since a cell engineered for one task need not carry thousands of functions; a scale-up advantage over cell-free systems, because a self-replicating cell keeps making more of itself and more product; and conditional dependence for biocontainment. Against that stands the honest admission that we still do not understand cells, illustrated by pyridoxal phosphate.',
    cn: '四个各不相同的理由：可预测性，因为天然细胞我们并没有完全理解；资源效率，因为只为一项任务改造的细胞不必背负上千种功能；相对无细胞体系的放大优势，因为能自我复制的细胞会不断制造更多自己和更多产物；以及用于生物防控的条件依赖性。与之相对的，是「我们仍然不理解细胞」这个诚实的承认，由磷酸吡哆醛的例子来说明。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.3', src: 'img/figures/L11_s03_1.webp' },
    { slide: 'L11 s.4', src: 'img/figures/L11_s04_1.webp' },
    { slide: 'L11 s.4', src: 'img/figures/L11_s04_2.webp' },
    { slide: 'L11 s.5', src: 'img/figures/L11_s05_1.webp' },
    { slide: 'L11 s.5', src: 'img/figures/L11_s05_2.webp' },
    { slide: 'L11 s.6', src: 'img/figures/L11_s06_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '整讲的地基是那个 **PLP 例子**：你把合成它的关键酶敲掉了，细胞**照样活着**——靠一堆你根本不知道存在的酶的「乱活性」绕过去了。\n\n' +
            '**对生物学这是好消息（细胞真稳健），对工程师这是坏消息（你以为的控制并不存在）。**',
  skipIt: '**第 11–12 讲没有 RECAP 可引**——老师只在第 2–5 讲开头做过 RECAP，回顾第 1–4 讲。所以这是判断：buildacell.org 这个网址、四个理由的排列顺序，不用背；**但 PLP 那个例子和「酶的乱活性」这个概念要记牢**，它既是这一讲的动机，也回过头解释了第 9 讲的定向进化为什么行得通。',
  explain: [
    {
      q: 'PLP 那个例子到底说明了什么？为什么它是整讲的地基？',
      trace: {
        what: '**PLP（磷酸吡哆醛，pyridoxal 5′-phosphate）**是大多数条件下细胞生长必需的一种辅因子。这一节要看的不是它本身的化学，而是它引出的一个实验：把合成它的核心酶敲掉之后会发生什么。',
        from: '按理说敲掉唯一的合成酶，这条路就该断了——但细胞照样能产出 PLP，靠的是一堆**没被预测到、也不为人知的「凑巧」途径**，背后的原因是很多酶都带有极低的、平时没有生理意义的**副活性（promiscuity，乱活性）**。',
        to: '这件事是双刃的：对生物学，是细胞稳健性惊人的证据；对工程师，是坏消息——你以为完全控制了这个细胞（敲掉了唯一的路），而它靠你根本不知道存在的酶活着，你的实验前提就塌了。这正是整讲「要不要造合成细胞」的动机。',
        family: '同一个「乱活性」在第 4-4 节还扮演了相反的角色——它是定向进化能成立的原因：如果起始的酶对新底物活性严格为零，选择压力就无从施加，正是那一丝微弱的副活性让进化有东西可抓、可以一轮轮放大。'
      },
      a: '**因为它是双刃的，而两面都必须看到。**\n\n' +
         '**事情本身**：磷酸吡哆醛（PLP）是大多数条件下生长必需的辅因子。你把合成它的那个核心酶**删掉**——按理说这条路就断了。\n\n' +
         '**结果细胞照样能产出 PLP**，通过一些**没被预测到、也不为人所知的「凑巧」途径**。\n\n' +
         '**这一面是好消息：细胞的稳健性惊人。**\n\n' +
         '几十亿年演化出来的代谢网络有大量冗余和容错，敲掉一个关键节点，网络会自己绕过去，继续供应一个必需代谢物。**从生物学角度看，这很了不起。**\n\n' +
         '**而对工程师，这一面是坏消息，而且很严重：**\n\n' +
         '你**以为**自己完全控制了这个细胞——毕竟你删掉了唯一的合成途径。\n\n' +
         '**而它靠一些你根本不知道存在的酶的副活性活了下来。**\n\n' +
         '**你实验设计的前提塌了。**你不再知道产物到底从哪来的，也不再能相信「我敲掉了 X，所以 X 的功能没有了」这个推论。\n\n' +
         '**所以这一节就是整讲的动机：一个天然细胞是几十亿年积累的历史包袱，里面全是你既不知道、也控制不了的暗功能。**\n\n' +
         '**合成细胞的目标就是把这些清掉，只留下你确定知道、确定需要的部分——这才是「可预测」的来源。**',
      takeaway: '敲掉关键酶细胞还活着。生物学上是稳健性，工程上是「你以为的控制不存在」——这就是要造合成细胞的理由。'
    },
    {
      q: '「酶的乱活性（promiscuity）」是什么？为什么它在这门课里出现了两次、方向还相反？',
      a: '**定义很简单：很多酶都带有一些极低的、正常情况下没有生理意义的副活性。**\n\n' +
         '一个酶的活性口袋是为它的主底物优化的，但它不可能对别的分子完全没反应。**那些微弱的副反应平时可以忽略，但在某些条件下、或者在选择压力下，它们可以被放大到有意义的程度。**\n\n' +
         '**第一次出现（这一节）：它是障碍。**\n\n' +
         'PLP 那个例子里，正是这些副活性让细胞绕过了你的敲除。**你想要可预测性，而乱活性正好是不可预测性的来源。**\n\n' +
         '**第二次出现（第 9 讲）：它是定向进化能成立的原因。**\n\n' +
         '想一想第 4-4 节 Arnold 那个逻辑：你从一个已有的酶出发，筛几轮，就能得到一个催化新反应的酶。\n\n' +
         '**这怎么可能？如果起始的酶对新底物活性严格为零，那么选择压力就无从施加——零乘以任何东西还是零，第一轮就没有任何变体比别的更好。**\n\n' +
         '**正因为几乎每个酶都带着一丝微弱的副活性，进化才有东西可抓。**它把一个几乎测不出来的副活性，一轮一轮放大成主活性。\n\n' +
         '**所以新酶就是从这里来的。**\n\n' +
         '**同一个性质：对工程师是失控的来源，对进化是创新的原料。**这一条把第 9 讲和第 11 讲连成了一件事。',
      takeaway: '酶都带微弱副活性。它让你的敲除失效（这一讲的问题），也让定向进化有东西可抓（第 9 讲的前提）。'
    },
    {
      q: '四个理由里，哪个最经得起追问？',
      a: '**「相对无细胞体系的放大优势」这一条最硬，因为它是别的方案根本给不了的。**\n\n' +
         '逐条看：\n\n' +
         '**可预测性** —— 这是上面 PLP 那个论证。有力，但它是一个**目标**，不是已经实现的事实。\n\n' +
         '**资源效率** —— 只干一件事的细胞不必背负上千种功能。听起来很对，但**第 5-7 节会看到 Syn3.0 长得比亲本慢**，所以「更精简 = 更高效」并不自动成立。\n\n' +
         '**放大优势** —— **这一条最硬。**回到第 2-2 节 CFPS 那三个代价：产量低、成本高、**放大困难**，而且**没有规模效应**（你消耗的是试剂，不是让细胞自己繁殖）。\n\n' +
         '**而一个能自我复制的最小细胞，会不断制造更多的自己和更多的产物。**这正是无细胞体系永远给不了的东西。\n\n' +
         '**所以「合成细胞」的定位可以这样理解：它想要 CFPS 的可控性，同时保留活细胞的自我复制能力。**\n\n' +
         '**条件依赖性（生物防控）** —— 这一条你在第 3-14 节见过：合成营养缺陷。**让细胞依赖一个自然界不存在的东西，逃逸就死。**\n\n' +
         '**答题时按「它想同时要 CFPS 的可控和细胞的自我复制」来组织，比罗列四条清楚得多。**',
      takeaway: '放大优势最硬——CFPS 没有规模效应，而能自我复制的细胞有。合成细胞要的是「可控 + 会自我复制」。'
    }
  ],
  points: [
    { term: 'Reason one — predictability', en: 'More predictable than using natural cells that we do not fully understand.', cn: '比使用我们并未完全理解的天然细胞更可预测。' },
    { term: 'Reason two — resource efficiency', en: 'Engineered for one task only, so they can use fewer resources than a natural cell juggling thousands of functions.', cn: '只为一项任务而改造，所以能比同时应付上千种功能的天然细胞消耗更少资源。' },
    { term: 'Reason three — scale-up over CFPS', en: 'A self-replicating minimal cell can, unlike a one-shot cell-free reaction, keep making more of itself and more product.', cn: '与一次性的无细胞反应不同，能自我复制的最小细胞可以持续制造更多自己、也产出更多产物。' },
    { term: 'Reason four — conditional dependence', en: 'They can be engineered to depend on specific conditions — a biocontainment argument.', cn: '可以被改造成依赖特定条件——这是一个生物防控的论据。' },
    { term: 'The community reference', en: 'BuildACell, at buildacell.org.', cn: 'BuildACell 社区，buildacell.org。' },
    { term: 'The counter-argument', en: 'While we know a lot about cells, there is still a lot that we do not understand.', cn: '虽然我们对细胞了解很多，但仍有大量我们并不理解的东西。' },
    { term: 'The PLP case study', en: 'Pyridoxal 5-prime-phosphate is an essential cofactor for growth under most conditions. Yet when the enzyme central to its synthesis is deleted, PLP can still be produced — through multiple unpredicted and unknown serendipitous pathways.', cn: '磷酸吡哆醛（PLP）在多数条件下是生长所必需的辅因子。然而当其合成的核心酶被敲除后，PLP 仍然能被合成出来——通过多条未曾预料、也不为人知的偶然途径。' },
    { term: 'Why that happens', en: 'Because of the many unknown activities of E. coli proteins, and the promiscuous activities of many proteins.', cn: '因为大肠杆菌蛋白有许多未知的活性，而且很多蛋白具有乱活性（promiscuity）。' },
    { term: 'Enzyme promiscuity defined', en: 'Many enzymes have very low, normally physiologically irrelevant activities. Under some conditions or selection pressure, these activities can become increased and relevant.', cn: '许多酶具有极低的、正常情况下在生理上无关紧要的活性。在某些条件或选择压力下，这些活性可以被增强并变得重要。' },
    { term: 'The further consequences', en: 'Bypass pathways, proteins with multiple functions not physiological under normal circumstances, and proteins of unknown function.', cn: '旁路途径、在正常情况下并不行使那些功能的多功能蛋白，以及功能未知的蛋白。' }
  ],
  beyondPoints: [
    { term: 'Why the PLP case is the foundation of the whole lecture', en: 'It is double-edged. On the surface it is good news: cellular robustness is astonishing, and knocking out a key enzyme leaves the metabolic network able to route around the damage and keep supplying a critical metabolite. That is the redundancy and fault tolerance that billions of years of evolution produced.', cn: '这个例子是双刃剑。表面上看是好消息：细胞的鲁棒性惊人，敲掉一个关键酶，代谢网络居然能自己绕出一条新路来维持关键代谢物的供应。这正是几十亿年进化出的冗余和容错能力。' },
    { term: 'But for an engineer it is bad news', en: 'You believed you had complete control of the cell, having deleted the only synthetic route, and it stays alive on enzymatic side activities whose existence you did not know about. The premise of your experimental design has collapsed, and you no longer know where the product actually came from.', cn: '但对工程师来说这是坏消息：你以为你完全控制了这个细胞（敲掉了唯一的合成通路），结果它靠着你完全不知道存在的酶促乱活性继续活着。你的实验设计前提就崩塌了，你根本不知道产物到底是怎么来的。' },
    { term: 'This is the core argument for synthetic cells', en: 'A natural cell is a mass of historical baggage accumulated over billions of years, full of dark functions you neither know about nor control. The goal of a synthetic cell is to clear those out and keep only the part you definitely know about and definitely need — which is what makes its behaviour predictable.', cn: '这正是「为什么要造合成细胞」的核心论证：天然细胞是几十亿年进化堆砌出的一团历史包袱，里面藏着无数你不知道、也控制不了的暗功能。合成细胞的目标是把这些清空，只留下你确切知道、确切需要的部分——这样它的行为才可预测。' },
    { term: 'Promiscuity is also why directed evolution works', en: 'Precisely because nearly every enzyme carries a faint side activity, directed evolution can start from an existing enzyme and, over a few rounds of selection, amplify a barely detectable side activity into the main function. That is where new enzymes come from.', cn: '酶的乱活性也是定向进化的理论基础：正是因为几乎所有酶都带着一点微弱的副业活性，定向进化才能从一个现有的酶出发，通过几轮筛选把某个几乎检测不到的副活性放大成主要功能——这就是新酶的来源。' }
  ],
  terms: [
    { en: 'Enzyme promiscuity', cn: '酶的乱活性', def_en: 'The very low, normally irrelevant side activities most enzymes possess, which can be amplified into relevance by selection pressure.', def_cn: '大多数酶都具有的极低、通常无关紧要的副活性，可以在选择压力下被放大到具有实际意义。' },
    { en: 'Bypass pathway', cn: '旁路途径', def_en: 'An unanticipated metabolic route that restores production of a metabolite after the canonical pathway has been deleted.', def_cn: '在标准通路被删除之后，恢复某个代谢物生产的一条未曾预料的代谢路线。' },
    { en: 'PLP (pyridoxal 5-phosphate)', cn: '磷酸吡哆醛', def_en: 'An essential cofactor whose continued production after deletion of its key synthetic enzyme demonstrated how much of E. coli metabolism remains unknown.', def_cn: '一种必需辅因子；在其关键合成酶被敲除后仍能继续产生，说明大肠杆菌代谢中仍有多少是未知的。' },
    { en: 'Historical baggage', cn: '历史包袱', def_en: 'The accumulated, often functionless or redundant features a natural genome carries from its evolutionary past — the thing minimal-cell work seeks to remove.', def_cn: '天然基因组从其进化历史中携带下来的、往往无功能或冗余的特征——正是最小细胞研究想要去除的东西。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What did the PLP experiment show?',
      q_cn: 'PLP 实验说明了什么？',
      options: ['That the PLP molecule itself turns out to be dispensable for the cell, which grows without it', 'That deleting the key synthetic enzyme still leaves PLP made by unknown routes', 'That E. coli has no biosynthetic route to PLP of its own at all', 'That two enzymes acting in sequence are required to make PLP'],
      answer: 1,
      optionNotes: {
        0: { en: 'The metabolite is still essential, since cells cannot live without PLP. What turned out not to be essential was the gene: an unknown promiscuous route made the compound anyway. Gene essentiality and product essentiality are two different claims.', cn: '这个代谢物依然是必需的，细胞没有 PLP 活不了。结果表明「非必需」的是那个基因：某条谁也不知道的、来自酶乱活性的旁路照样把它做了出来。基因的必需性和产物的必需性是两回事。' }
      },
      why_en: 'Production continued through routes nobody had predicted, arising from unknown protein activities and enzyme promiscuity. It is the clearest demonstration that a natural cell contains functions its engineers do not know about.',
      why_cn: '产物通过没人预料到的路线继续生成，其来源是未知的蛋白活性和酶的乱活性。这是「天然细胞含有工程师并不知道的功能」最清楚的证明。' },
    { type: 'mcq',
      q_en: 'Why is the PLP result described as double-edged?',
      q_cn: '为什么说 PLP 的结果是双刃剑？',
      options: ['It is reproducible, but only in one particular laboratory strain of E. coli', 'It is admirable robustness biologically, but the engineer loses the assumed control', 'It was later retracted when other groups could not reproduce it', 'It applies only to cofactors and not to other classes of metabolite'],
      answer: 1,
      why_en: 'Biologically it is a beautiful illustration of evolved redundancy. From an engineering standpoint it means you deleted what you thought was the only route and the cell survived on activities you did not know existed.',
      why_cn: '从生物学看，它优美地展示了进化出的冗余。从工程角度看，它意味着你删掉了你以为唯一的路线，而细胞靠着你不知道存在的活性活了下来。' },
    { type: 'mcq',
      q_en: 'Which of the four reasons for synthetic cells is an argument against cell-free systems specifically?',
      q_cn: '造合成细胞的四个理由中，哪一个是专门针对无细胞体系的论据？',
      options: ['Predictability, because natural cells are not fully understood', 'Resource efficiency, since one task does not need the thousands of functions a natural cell carries', 'Self-replication, since a dividing cell keeps making more of itself and more product', 'Conditional dependence, engineered into the cell for biocontainment'],
      answer: 2,
      optionNotes: {
        0: { en: 'Predictability argues for a minimal cell over a natural cell such as E. coli, not against a cell-free system. A tube of defined components is if anything the more predictable of the two, and the PLP story shows it is the cell that surprises you. The argument aimed specifically at cell-free is self-replication.', cn: '可预测性是拿最小细胞去对比天然细胞（比如 E. coli）的理由，而不是针对无细胞体系的：一管成分明确的反应体系反而更可预测，PLP 那个例子说明会给你惊喜的恰恰是细胞。专门针对 cell-free 的那条理由是自我复制。' }
      },
      why_en: 'A cell-free reaction runs once and stops. A minimal cell that can divide keeps regenerating its own machinery, which is the scale-up argument for building cells rather than staying in a tube.',
      why_cn: '无细胞反应跑一次就停了。能分裂的最小细胞会不断再生自己的机器，这就是「造细胞而不是留在试管里」的放大论据。' },
    { type: 'short',
      q_en: 'Give four distinct reasons to build synthetic cells, and the honest counter-argument.',
      q_cn: '给出造合成细胞的四个不同理由，以及那个诚实的反驳。',
      accept: ['predictab', 'resource', 'self-replicating', 'containment', 'do not understand'],
      answer_en: 'First, predictability: they are more predictable than natural cells, which we do not fully understand. Second, resource efficiency: engineered for a single task, they need not spend resources juggling thousands of functions. Third, a scale-up advantage over cell-free synthesis: a self-replicating minimal cell keeps making more of itself and therefore more product, whereas a cell-free reaction runs once and stops. Fourth, conditional dependence: they can be engineered to require specific conditions, which is a biocontainment argument. The honest counter-argument is that while we know a lot about cells, there is still a great deal we do not understand — and the example given is pyridoxal phosphate, an essential cofactor that continues to be produced even after the enzyme central to its synthesis is deleted, through multiple unpredicted pathways arising from unknown protein activities and enzyme promiscuity. That result is really the argument for the whole field: if a natural cell can survive on functions you did not know it had, then you never had control of it, and the only way to get predictability is to strip it down to what you definitely know.',
      answer_cn: '第一，可预测性：它们比我们并未完全理解的天然细胞更可预测。第二，资源效率：只为一项任务而改造，不必把资源花在同时应付上千种功能上。第三，相对无细胞合成的放大优势：能自我复制的最小细胞会不断制造更多自己、因而产出更多产物，而无细胞反应跑一次就停。第四，条件依赖性：可以被改造成必须依赖特定条件，这是生物防控的论据。诚实的反驳是：尽管我们对细胞了解很多，仍有大量东西并不理解——所举的例子是磷酸吡哆醛，一种必需辅因子，即使其合成的核心酶被敲除，它仍然通过多条未曾预料的途径继续产生，来源是未知的蛋白活性和酶的乱活性。这个结果其实正是整个领域的论据：如果一个天然细胞能靠你不知道它拥有的功能存活下来，那你从来就没有控制过它，而获得可预测性的唯一办法，就是把它精简到只剩你确切知道的部分。'
    }
  ],
  oral: {
    q_en: 'Why would anyone want to build a synthetic cell?',
    q_cn: '为什么会有人想造一个合成细胞？',
    model_en: 'The deck gives four reasons and they are genuinely four different arguments, worth separating. First, predictability: a synthetic cell is more predictable than a natural one, because we do not fully understand natural cells. Second, resource efficiency: a cell engineered for one task only can use far fewer resources than a natural cell juggling thousands of functions it does not need. Third, a scale-up advantage specifically over cell-free systems: a self-replicating minimal cell can keep making more of itself and therefore more product, whereas a cell-free reaction is a one-shot event that runs down. And fourth, conditional dependence: you can engineer it to depend on specific conditions, which is a biocontainment argument in the same family as the synthetic auxotrophy idea from the genetic code lecture. But the slide immediately gives the honest counter-argument, which is that while we know a lot about cells, there is still a lot we do not understand — and the example is beautiful. Pyridoxal phosphate is an essential cofactor for growth under most conditions, yet when the enzyme central to its synthesis is deleted, PLP is still produced, through multiple unpredicted and unknown serendipitous pathways. That happens because E. coli proteins have many unknown activities and because many enzymes are promiscuous: they carry very low, normally physiologically irrelevant side activities that can become increased and relevant under selection pressure. I would emphasise that this result is double-edged, because that is what makes it the foundation of the lecture. Biologically it is wonderful news — the metabolic network can route around a deletion, which is the redundancy billions of years of evolution built in. But for an engineer it is bad news: you thought you had complete control because you deleted the only route, and the cell survived on activities you did not know existed, so you no longer know where your product came from. A natural cell is historical baggage full of dark functions you neither know nor control, and the entire point of a synthetic cell is to clear those out and keep only what you definitely know and definitely need. As a footnote, that same promiscuity is why directed evolution works at all — it is the faint side activity that selection amplifies into a new enzyme.',
    checklist: ['Reason 1: predictability, since natural cells are not fully understood', 'Reason 2: resource efficiency, engineered for one task only', 'Reason 3: self-replicating, so it scales unlike a one-shot cell-free reaction', 'Reason 4: conditional dependence, for biocontainment', 'Counter-argument: there is still a lot we do not understand', 'PLP: essential cofactor, still made after its key enzyme is deleted', 'Via unpredicted serendipitous pathways', 'Cause: unknown protein activities and enzyme promiscuity', 'Promiscuity: low, normally irrelevant activities that selection can amplify', 'Double-edged: robustness is good biology, bad engineering', 'A natural cell is historical baggage full of dark functions', 'Same promiscuity is the raw material for directed evolution']
  }
},

{
  id: '5-2',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.2',
  enTitle: 'Top-down and bottom-up',
  cnTitle: '自顶向下与自底向上',
  slides: 'L11 s.7, s.12, s.21',
  coverage: 'full',
  coverageNote: 'The three-way diagram is repeated on three slides, relating minimal genomes, origins of life and synthetic cells by their methodology. Why origins-of-life work is labelled top-down despite sounding like the ultimate bottom-up question is worth spelling out.',
  summary: {
    en: 'Two opposite methodologies. Top-down starts from an existing living cell and removes genes, answering what is essential in life as it exists. Bottom-up starts from purified non-living components and assembles them, answering what the minimum is to bootstrap life at all. Minimal genome work uses both; origins-of-life work is currently top-down; synthetic cells are bottom-up.',
    cn: '两条相反的方法论。自顶向下从一个现存的活细胞出发、逐个去除基因，回答的是「现存生命里哪些是必需的」。自底向上从纯化的非生命组分出发进行组装，回答的是「凭空启动生命最少需要什么」。最小基因组研究两条路都用；生命起源研究目前是自顶向下的；合成细胞则是自底向上的。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**自顶向下问「现存生命里哪些是必需的」，自底向上问「从零启动生命最少需要什么」——这是两个不同的问题，不是同一个问题的两种做法。**\n\n' +
            '而这组词你在第 3-1 节见过（粗提物 vs PURE）：**同一组哲学，换了个尺度。**',
  skipIt: '**第 11–12 讲没有 RECAP 可引**，这是判断——但**老师把「MINIMAL GENOMES」这张分节页重复了三次**（本讲第 7、12、21 页），说明这是第 11 讲的骨架。两条路线的区别要能讲。',
  explain: [
    {
      q: '为什么说这是「两个不同的问题」，而不是同一个问题的两种做法？',
      a: '**因为两条路各自被自己的起点限制住了，所以答案不可能一样。**\n\n' +
         '**自顶向下的前提是：你已经有一个活细胞。**\n\n' +
         '所以你学到的是「**一个已经演化出来的生命形式，最多能被简化到什么程度**」。\n\n' +
         '**注意这个答案里含着历史。**Mycoplasma 的必需基因清单，反映的是**它这一支演化史留下的架构**——换一个物种做同样的实验，清单会不一样。\n\n' +
         '**自底向上的前提是：你什么都不借。**\n\n' +
         '从脂质体、纯化的酶、DNA 开始组装。所以你问的是「**从非生命物质出发，最少需要哪些东西才能启动生命**」。\n\n' +
         '**这个答案不含任何特定物种的历史，它指向的是生命起源本身。**\n\n' +
         '**两个答案不必相同，而且很可能不同：**\n\n' +
         '自顶向下可能保留一些「**现在必需、但当初不是必需**」的东西——因为后来的系统依赖上了它们（这就是第 4-5 节说的路径依赖）。\n\n' +
         '自底向上可能用一些**自然界现在根本不用的方案**——因为它不受演化历史约束。\n\n' +
         '**所以「最小细胞需要多少基因」这个问题，必须先问清楚是在问哪一个版本。**',
      takeaway: '一个问「已有的生命能简化到多少」（含着物种的历史），一个问「从零启动要多少」（不含历史）。答案不必相同。'
    },
    {
      q: '为什么生命起源研究被归到「自顶向下」那一栏？这不反直觉吗？',
      a: '**反直觉，但归得对——因为看的是方法，不是目标。**\n\n' +
         '生命起源研究的**目标**当然是「生命怎么从无到有」，听起来天然属于自底向上。\n\n' +
         '**但看它实际怎么做：**\n\n' +
         '目前关于 LUCA 的工作，**几乎完全依赖比较现存生物的基因组、然后往回推**（第 5-3 节）。你找出所有现存生物共有的东西，推断它们的共同祖先也有。\n\n' +
         '**这本质上是「从现存生命往回剥」，而不是「从无到有搭起来」。**\n\n' +
         '**所以它的方法是自顶向下的，尽管它的目标指向起点。**\n\n' +
         '**而真正从零构建的，只有原细胞（protocell）那条路——而幻灯片很诚实地承认，它们离「活着」还很远**（第 5-9 节）。\n\n' +
         '**这个分类值得留意，因为它揭示了一个方法论上的困境：**\n\n' +
         '**我们想知道生命怎么开始的，但我们唯一的证据全部来自已经开始之后的生命。**\n\n' +
         '比较基因组学能告诉你 LUCA 长什么样，**但 LUCA 本身已经是一个相当复杂的细胞了**（第 5-3 节：有精密的翻译系统、数百个基因）。**从非生命到 LUCA 那一段，比较基因组学一个字都告诉不了你。**\n\n' +
         '**那一段只能靠自底向上去重演——而我们还做不到。**',
      takeaway: '方法是「比较现存基因组往回推」，所以是自顶向下。而从非生命到 LUCA 那一段，比较基因组学完全够不着。'
    },
    {
      q: '这组词在这门课里出现了几次？',
      a: '**两次，尺度差了好几个数量级，但哲学完全一样。**\n\n' +
         '**第 3-1 节：无细胞体系。**\n\n' +
         '**自顶向下 = 粗提物**：裂开细胞，拿走你不想要的。你在做**减法**，而你不知道自己没拿掉什么。\n\n' +
         '**自底向上 = PURE**：每个组分单独纯化再加进去。你在做**加法**，管子里只有你亲手放的东西。\n\n' +
         '**这一节：合成细胞。**\n\n' +
         '**自顶向下 = 基因组最小化**：从活细胞出发删基因。**减法。**\n\n' +
         '**自底向上 = 原细胞组装**：从脂质体和纯化组分搭起来。**加法。**\n\n' +
         '**两次的取舍也一模一样：**\n\n' +
         '**减法路线**继承了一个能工作的系统（粗提物真的能翻译，Mycoplasma 真的活着），**代价是里面有你不了解的东西**——PLP 那个例子（第 5-1 节）和粗提物里的 RNase（第 3-1 节）是同一类问题。\n\n' +
         '**加法路线**成分完全明确、可控，**代价是你可能漏加了什么**，而且你得先知道要加什么。\n\n' +
         '**所以看到「top-down / bottom-up」这组词，直接问：这次是在做减法还是加法？减法的风险是「不知道剩下了什么」，加法的风险是「不知道少了什么」。**',
      takeaway: '第 3-1 节的粗提物 vs PURE 是同一组哲学。减法的风险是不知道剩了什么，加法的风险是不知道少了什么。'
    }
  ],
  points: [
    { term: 'Top-down starting point', en: 'An existing, living cell.', cn: '一个现存的、活着的细胞。' },
    { term: 'Top-down method', en: 'Remove genes one at a time, or design a reduced genome and test it.', cn: '一次去掉一个基因，或者设计一个精简的基因组再检验它。' },
    { term: 'Top-down question', en: 'What is essential in life as it exists?', cn: '在现存的生命形式中，哪些是必需的？' },
    { term: 'Bottom-up starting point', en: 'Purified non-living components.', cn: '纯化的非生命组分。' },
    { term: 'Bottom-up method', en: 'Assemble lipids, ribosomes, enzymes and DNA from scratch.', cn: '从零开始组装脂质、核糖体、酶和 DNA。' },
    { term: 'Bottom-up question', en: 'What is the minimum needed to bootstrap life at all?', cn: '要凭空启动生命，最少需要什么？' },
    { term: 'How the fields map on', en: 'Minimal genome work uses both approaches. Origins of life is currently top-down. Synthetic cells are bottom-up.', cn: '最小基因组研究两条路都用。生命起源目前走自顶向下。合成细胞走自底向上。' },
    { term: 'The course examples', en: 'Mycoplasma genome minimisation for top-down; artificial cells and protocells for bottom-up.', cn: '自顶向下的课程例子是支原体基因组最小化；自底向上的是人工细胞和原细胞。' }
  ],
  beyondPoints: [
    { term: 'Why ask the same question two opposite ways', en: 'Top-down asks which parts of existing life are genuinely necessary — you start from a living cell and knock genes out one by one to see whether it still lives. That path is constrained by its own premise, that you already have a living cell, so what you learn is how far an already-evolved life form can be simplified.', cn: '自顶向下问的是「现存生命里哪些是真正必需的」——你从一个活细胞出发，一个一个敲掉基因，看它还活不活。这条路受限于「你已经有一个活细胞」这个前提，所以你研究的是「已经进化出来的生命形式」能被简化到什么程度。' },
    { term: 'What bottom-up asks instead', en: 'Whether you can assemble something living from scratch without borrowing from any existing organism. You start from liposomes, purified enzymes and DNA. That path points directly at the origin of life, because if you can build a self-replicating thing from non-living material you have re-enacted life\'s beginning in the laboratory.', cn: '自底向上问的是「完全不借助任何现存生命，能不能凭空拼出活的东西」。你从脂质体、纯化的酶和 DNA 开始。这条路直接指向生命起源——如果你能从非生命物质拼出会自我复制的东西，就等于在实验室里重演了生命的诞生。' },
    { term: 'Why origins-of-life is nonetheless labelled top-down', en: 'Because current work on LUCA relies almost entirely on comparing the genomes of existing organisms and reasoning backwards. That is essentially a peel-back-from-existing-life strategy rather than building one from nothing. Genuine from-zero construction is only approached by protocells, and they remain far from alive.', cn: '因为目前对 LUCA 的研究几乎全靠比较现存生物的基因组来反推，这本质上还是一种「从现有生命往回剥」的策略，而不是凭空造一个。真正的「从零到有」目前只有原细胞这条路能沾边，而且离「活」还很远。' }
  ],
  terms: [
    { en: 'Top-down', cn: '自顶向下', def_en: 'Starting from a living cell and removing components, to find what existing life actually requires.', def_cn: '从一个活细胞出发去除组分，以找出现存生命实际需要什么。' },
    { en: 'Bottom-up', cn: '自底向上', def_en: 'Starting from purified non-living parts and assembling upwards, to find the minimum needed to produce life at all.', def_cn: '从纯化的非生命部件出发向上组装，以找出产生生命所需的最低限度。' },
    { en: 'Genome minimisation', cn: '基因组最小化', def_en: 'Systematically reducing a genome to the smallest gene set that still supports autonomous growth.', def_cn: '系统性地把基因组缩减到仍能支持自主生长的最小基因集。' },
    { en: 'Protocell', cn: '原细胞', def_en: 'An in vitro model of a minimal cell, biological material encapsulated in lipid vesicles — the closest current approach to genuine bottom-up construction.', def_cn: '最小细胞的体外模型，把生物材料包裹在脂质囊泡中——目前最接近真正自底向上构建的路径。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What question does the top-down approach answer?',
      q_cn: '自顶向下的方法回答什么问题？',
      options: ['What is the minimum needed to bootstrap life?', 'What is essential in life as it exists?', 'How did LUCA metabolise?', 'Can life use mirror chemistry?'],
      answer: 1,
      optionRefs: { 2: '5-3', 3: '5-8' },
      optionNotes: {
        0: { en: 'That is the bottom-up question: what has to be assembled from non-living parts to get life started. Top-down begins with something already alive and removes pieces, so it can only tell you what a modern, already-evolved cell cannot do without.', cn: '这是 bottom-up 的问题：要从非生命的零件里凑出什么，才能让生命启动。而 top-down 是从一个已经活着的细胞出发往下删，所以它只能告诉你一个已经演化过的现代细胞离不开什么。' }
      },
      why_en: 'You start from a living cell and remove genes, so what you learn is how far an already-evolved organism can be simplified — not what would be needed to start life from nothing.',
      why_cn: '你从一个活细胞出发去除基因，所以学到的是「一个已经进化出来的生物能被简化到什么程度」——而不是「从零开始启动生命需要什么」。' },
    { type: 'mcq',
      q_en: 'Why is origins-of-life work labelled top-down rather than bottom-up?',
      q_cn: '为什么生命起源研究被标为自顶向下而不是自底向上？',
      options: ['Because the experiments are carried out in living organisms', 'Because LUCA is inferred backwards by comparing genomes alive today', 'Because the work needs an existing chassis cell to start from', 'Because no bottom-up method for the question exists yet'],
      answer: 1,
      optionRefs: { 2: '5-9' },
      why_en: 'It sounds like the ultimate bottom-up question, but the actual method is comparative genomics of organisms alive today. Building something living from nothing is approached only by protocells, which remain far from alive.',
      why_cn: '它听起来像是终极的自底向上问题，但实际方法是对今天活着的生物做比较基因组学。真正「从无到有」造出活物，只有原细胞这条路沾边，而且离「活」还很远。' },
    { type: 'mcq',
      q_en: 'Which course example illustrates the bottom-up approach?',
      q_cn: '课程中哪个例子说明了自底向上的方法？',
      options: ['Mycoplasma genome minimisation', 'JCVI-Syn3.0', 'Artificial cells and protocells', 'Syn61 codon compression'],
      answer: 2,
      optionRefs: { 1: '5-7', 3: '3-12' },
      optionNotes: {
        0: { en: 'Deleting genes from a living Mycoplasma is top-down however small the result gets. What names the approach is the direction of travel, not the size of the end product. Bottom-up means starting from purified, non-living components.', cn: '从活着的 Mycoplasma 上一个个删基因，无论最后剩下多小，都属于 top-down：给方法命名的是行进方向，不是终点有多小。而 bottom-up 指的是从纯化的、非生命的组分开始搭。' }
      },
      why_en: 'Protocells assemble lipid vesicles, purified enzymes and DNA from non-living starting material. Everything Mycoplasma-based, including Syn3.0, starts from a living cell and is therefore top-down.',
      why_cn: '原细胞是用脂质囊泡、纯化的酶和 DNA 从非生命材料组装起来的。所有基于支原体的工作（包括 Syn3.0）都从活细胞出发，因此属于自顶向下。' },
    { type: 'short',
      q_en: 'Distinguish top-down and bottom-up approaches to minimal cells.',
      q_cn: '区分研究最小细胞的自顶向下与自底向上两种方法。',
      accept: ['existing cell', 'remove genes', 'purified', 'assemble', 'bootstrap'],
      answer_en: 'Top-down starts from an existing living cell and works by removing genes one at a time, or by designing a reduced genome and testing whether it still supports life. The question it answers is what is essential in life as it exists — and notice it is constrained by its own premise, since you already have a working cell, so what you learn is how far an already-evolved organism can be stripped back. The course example is Mycoplasma genome minimisation. Bottom-up starts instead from purified non-living components and assembles lipids, ribosomes, enzymes and DNA from scratch. The question it answers is what the minimum is to bootstrap life at all, which points directly at the origin of life, because building a self-replicating thing out of non-living material would amount to re-enacting life\'s beginning in the laboratory. The course example is artificial cells and protocells. Minimal genome work uses both approaches; interestingly, origins-of-life research is currently classed as top-down, because our knowledge of LUCA comes almost entirely from comparing the genomes of organisms alive today and reasoning backwards.',
      answer_cn: '自顶向下从一个现存的活细胞出发，做法是一次去掉一个基因，或者设计一个精简的基因组再检验它是否仍能维持生命。它回答的问题是「现存生命里哪些是必需的」——而且注意它受限于自身的前提：你已经有一个能工作的细胞，所以你学到的是「一个已经进化出来的生物能被剥到什么程度」。课程例子是支原体基因组最小化。自底向上则从纯化的非生命组分出发，从零组装脂质、核糖体、酶和 DNA。它回答的问题是「凭空启动生命最少需要什么」，这直接指向生命起源——因为用非生命材料造出会自我复制的东西，就等于在实验室里重演了生命的诞生。课程例子是人工细胞和原细胞。最小基因组研究两条路都用；有意思的是，生命起源研究目前被归为自顶向下，因为我们对 LUCA 的认识几乎全部来自比较今天活着的生物的基因组并向前反推。'
    }
  ],
  oral: {
    q_en: 'What are the two methodological approaches to minimal cells, and what does each tell you?',
    q_cn: '研究最小细胞有哪两条方法论路径？各自能告诉你什么？',
    model_en: 'The deck relates three fields — minimal genomes, origins of life, and synthetic cells — by their methodology, using a diagram it repeats three times. Top-down starts from an existing living cell. You remove genes one at a time, or design a reduced genome and test whether it works. The question it answers is what is essential in life as it exists, and the course example is Mycoplasma genome minimisation. Bottom-up starts from purified non-living components and assembles lipids, ribosomes, enzymes and DNA from scratch. The question it answers is what the minimum is to bootstrap life at all, and the course example is artificial cells and protocells. Minimal genome work uses both. What I would draw out is why the same broad question gets asked from two opposite directions. Top-down is constrained by its own premise: you already have a living cell, so what you can learn is how far an organism that evolution already built can be simplified. Bottom-up asks something more fundamental — whether you can assemble something alive without borrowing from any existing organism at all — and that points directly at the origin of life, because succeeding would mean re-enacting life\'s beginning in a laboratory. There is a subtlety in the diagram worth noticing: origins-of-life work is marked as top-down, which sounds backwards for the ultimate from-scratch question. The reason is that essentially all current knowledge of LUCA comes from comparing the genomes of organisms alive today and reasoning backwards, which is a peel-back-from-existing-life strategy rather than construction from nothing. Genuine from-zero building is approached only by protocells, and they are still a long way from being alive.',
    checklist: ['Diagram relates minimal genomes, origins of life, synthetic cells', 'Top-down: start from a living cell, remove genes', 'Answers: what is essential in life as it exists', 'Example: Mycoplasma genome minimisation', 'Bottom-up: start from purified non-living parts and assemble', 'Answers: what is the minimum to bootstrap life at all', 'Example: artificial cells and protocells', 'Minimal genomes use both approaches', 'Top-down is constrained by already having a living cell', 'Bottom-up points directly at the origin of life', 'Origins-of-life is labelled top-down because LUCA is inferred by comparison', 'Only protocells approach genuine from-zero construction']
  }
},

{
  id: '5-3',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.3',
  enTitle: 'LUCA — the Last Universal Common Ancestor',
  cnTitle: 'LUCA——最后的共同祖先',
  slides: 'L11 s.8–9',
  coverage: 'full',
  coverageNote: 'The three lists — definitely had, probably had, still uncertain — are on the slides. Why the membrane is on the uncertain list is not, and the lipid divide is genuinely one of the most striking open problems in the field.',
  summary: {
    en: 'LUCA\'s composition is inferred from bioinformatics across taxonomically diverse organisms, and it was most likely a complex cell with a sophisticated translation system and hundreds of DNA-encoded genes. It definitely had the universal genetic code, protein translation machinery, RNA polymerisation and ATPase energy metabolism. It probably had DNA, cellularity and core cofactors. What remains uncertain is its membrane chemistry, its energy metabolism and its environment.',
    cn: 'LUCA 的组成是通过对分类学上差异很大的生物做生物信息学分析反推出来的；它很可能是一个复杂的细胞，拥有精密的翻译系统和数百个由 DNA 编码的基因。它确定拥有通用遗传密码、蛋白翻译机器、RNA 聚合能力和 ATP 酶能量代谢。它很可能还有 DNA、细胞结构和核心辅因子。仍不确定的是它的膜化学、能量代谢和所处环境。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.8', src: 'img/figures/L11_s08_1.webp' },
    { slide: 'L11 s.8', src: 'img/figures/L11_s08_2.webp' },
    { slide: 'L11 s.9', src: 'img/figures/L11_s09_1.webp' },
    { slide: 'L11 s.9', src: 'img/figures/L11_s09_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**LUCA 已经是一个相当复杂的细胞了**——有精密的翻译系统、数百个基因、通用遗传密码。它不是「原始汤」，它离生命起点已经很远。\n\n' +
            '而最有意思的是**不确定的那一栏**：连它的**膜是什么化学**都还没定论。',
  skipIt: 'LUCApedia、Moody 2024 这些出处不用背。**第 11–12 讲没有 RECAP 可引**，这是判断——但**「确定 / 很可能 / 不确定」这个三层结构建议记**，尤其是膜化学落在最后一栏这件事。',
  explain: [
    {
      q: '为什么强调「LUCA 已经很复杂了」？',
      trace: {
        what: '**LUCA**（Last Universal Common Ancestor，最后的共同祖先）是所有现存生命往回追溯时汇合的那一个点，靠比较分类学上差异很大的生物的基因组反推出来，而不是被直接观察到的。',
        from: '它不是「最早的生命」——它之前还有漫长的演化史，只是那些分支都灭绝了或没留下现存后代，比较基因组学看不到它们。',
        to: '反推出的结果是它已经相当复杂：通用遗传密码已经定型、有完整的蛋白翻译机器（核糖体、tRNA、aaRS）、能聚合 RNA、有 ATP 酶能量代谢、还有数百个 DNA 编码的基因——中心法则的全套机器在它这一步已经建好了。这给「最小基因组能有多小」划出了一个下界参照。',
        family: '唯一还没定论的是它的**膜**——古菌和细菌的膜在链的种类、连接的化学键、甚至甘油骨架的立体化学上全都不一样（醚键 vs 酯键），比较基因组学在这里找不到共有的东西，所以连 LUCA 有没有现代意义上的膜都还是开放问题。'
      },
      a: '**因为它纠正了一个非常普遍的误解：以为 LUCA 就是「最早的生命」。**\n\n' +
         '**LUCA 是「最后的共同祖先」，不是「最早的生命」。**\n\n' +
         '它是现存所有生物往回追溯时**汇合的那一个点**。在它之前还有漫长的演化史，只不过那些分支要么灭绝了、要么没留下现存后代——**所以比较基因组学看不到它们。**\n\n' +
         '**而 LUCA 本身的配置已经相当奢华了：**\n\n' +
         '**通用遗传密码**（那 64 个密码子的对应关系已经定下来了）；\n\n' +
         '**完整的蛋白翻译机器**（核糖体、tRNA、aaRS——第 7 讲那一整套）；\n\n' +
         '**RNA 聚合能力**；\n\n' +
         '**ATP 酶能量代谢**；\n\n' +
         '**数百个 DNA 编码的基因。**\n\n' +
         '**换句话说，到了 LUCA 这一步，中心法则的全套机器已经建好了。**\n\n' +
         '**所以这一节在这一讲里的位置很明确：它给「最小基因组」这个问题定了一个下界的参照。**\n\n' +
         '**如果连所有现存生命的共同祖先都需要数百个基因和一整套翻译系统，那么「最小的能自主生活的细胞」不可能太小。**第 5-7 节 Syn3.0 的 473 个基因，正好落在这个量级上——**这不是巧合。**',
      takeaway: 'LUCA 是「最后的共同祖先」不是「最早的生命」。它已经有全套翻译机器和数百个基因——这给最小基因组定了下界。'
    },
    {
      q: '「脂质鸿沟」是怎么回事？为什么连膜的化学都不确定？',
      a: '**因为古菌和细菌的膜，在化学上几乎没有共同点——而 LUCA 应该是两者的祖先。**\n\n' +
         '**把两套膜并排看：**\n\n' +
         '**古菌**：**异戊二烯**链，通过**醚键**连到**甘油-1-磷酸**上。\n\n' +
         '**细菌和真核**：**脂肪酸**链，通过**酯键**连到**甘油-3-磷酸**上。\n\n' +
         '**三处全都不一样：链的种类不同、连接的化学键不同、连甘油骨架的立体化学都是镜像相反的。**而且合成它们的酶也毫不相关。\n\n' +
         '**（顺带一提，醚键 vs 酯键这个对比你在第 4-16 节见过——那里嘌呤霉素靠的正是「酰胺键不是酯键」这个差别。同一类化学区分，两个完全不同的场合。）**\n\n' +
         '**问题就在这里：如果 LUCA 是两者的共同祖先，它的膜是哪一种？**\n\n' +
         '三种可能，都没有定论：\n\n' +
         '**它两套都有**，然后两个域各丢掉一套。\n\n' +
         '**它两套都没有**——那么膜是在分化之后**各自独立演化**出来的。**这意味着 LUCA 可能根本没有现代意义上的膜**，也许是靠矿物孔洞之类的东西当区隔。\n\n' +
         '**它有第三种、现在已经灭绝的化学。**\n\n' +
         '**注意第二种可能有多颠覆：它等于说「细胞膜比 LUCA 还年轻」。**\n\n' +
         '**而这也正好接上第 5-2 节那条**：比较基因组学能告诉你共有的东西，**而膜的化学恰恰是不共有的，所以这个方法在这里失效了。**这就是为什么它被列在「不确定」而不是「未提及」。',
      takeaway: '古菌和细菌的膜在链、键、立体化学上全都不同。所以 LUCA 的膜是什么、甚至它有没有现代意义的膜，都没定论。'
    }
  ],
  points: [
    { term: 'How it is inferred', en: 'Composition inferred from bioinformatics data across taxonomically diverse organisms. LUCApedia and Moody et al., Nature Ecology and Evolution 2024.', cn: '通过对分类学上差异很大的生物的生物信息学数据反推其组成。LUCApedia 以及 Moody 等，Nature Ecology and Evolution 2024。' },
    { term: 'What it most likely was', en: 'Most likely a complex cell with a sophisticated translation system and hundreds of genes, DNA-encoded.', cn: '很可能是一个复杂的细胞，拥有精密的翻译系统和数百个由 DNA 编码的基因。' },
    { term: 'Definitely had', en: 'The universal genetic code, protein translation machinery, RNA polymerisation, and ATPase energy metabolism.', cn: '通用遗传密码、蛋白翻译机器、RNA 聚合、ATP 酶能量代谢。' },
    { term: 'Probably had', en: 'DNA, cellularity, and core cofactors.', cn: 'DNA、细胞性、核心辅因子。' },
    { term: 'Still uncertain', en: 'The chemistry of the lipid membrane, which differs between archaea and bacteria; the energy metabolism; and the environment.', cn: '脂质膜的化学组成（古菌和细菌之间不同）、能量代谢，以及所处环境。' }
  ],
  beyondPoints: [
    { term: 'The two membrane chemistries', en: 'Archaeal membranes are built from isoprenoid chains ether-linked to glycerol-1-phosphate. Bacterial and eukaryotic membranes are built from fatty acid chains ester-linked to glycerol-3-phosphate. These are chemically unrelated lipid classes made by unrelated enzymes, and even the stereochemistry of the glycerol backbone is mirror-opposite between the two domains.', cn: '古菌膜由醚键连接到 1-磷酸甘油上的类异戊二烯链构成。细菌和真核生物的膜由酯键连接到 3-磷酸甘油上的脂肪酸链构成。这是化学上毫不相关的两类脂质，由毫不相关的酶合成，连甘油骨架的立体构型在两个域之间都是镜像相反的。' },
    { term: 'The lipid divide', en: 'If LUCA is ancestral to both archaea and bacteria, this is a genuine puzzle. Either LUCA had both systems and each domain lost one; or it had neither and both evolved membranes independently after the split, in which case LUCA may not have had a modern-style membrane at all, perhaps something more like a mineral compartment; or it had some third, now-extinct chemistry.', cn: '如果 LUCA 是古菌和细菌共同的祖先，这就构成一个真正的难题。要么 LUCA 同时拥有两套系统、各个域后来各丢了一套；要么它两套都没有、两个域在分化之后各自独立进化出膜（那样的话 LUCA 可能根本没有现代意义上的膜，也许更像某种矿物质区室）；要么它有某种第三种、如今已灭绝的化学。' },
    { term: 'Why it is on the uncertain list', en: 'This is not a gap in the literature but an active, unresolved research question — which is exactly why the slide lists membrane chemistry as uncertain rather than simply unstated.', cn: '这不是文献上的空白，而是一个尚无定论的活跃研究问题——这正是幻灯片把膜化学列为「不确定」而不是「未提及」的原因。' }
  ],
  terms: [
    { en: 'LUCA', cn: '最后的共同祖先', def_en: 'The Last Universal Common Ancestor — the organism from which all extant life descends, reconstructed by comparative genomics rather than observed.', def_cn: '所有现存生命的共同祖先，通过比较基因组学重建而非直接观察得到。' },
    { en: 'The lipid divide', cn: '脂质鸿沟', def_en: 'The fact that archaeal and bacterial membranes use chemically unrelated lipids with mirror-opposite glycerol stereochemistry, posing a puzzle about what LUCA\'s membrane was.', def_cn: '古菌与细菌的膜使用化学上毫不相关的脂质，且甘油立体构型镜像相反，这使得「LUCA 的膜究竟是什么」成为一个难题。' },
    { en: 'Ether versus ester linkage', cn: '醚键与酯键', def_en: 'Archaea link isoprenoid chains to glycerol by ether bonds; bacteria link fatty acids by ester bonds. Different chemistry made by unrelated enzymes.', def_cn: '古菌用醚键把类异戊二烯链连到甘油上；细菌用酯键连接脂肪酸。化学不同，由毫不相关的酶合成。' },
    { en: 'Comparative genomics', cn: '比较基因组学', def_en: 'Inferring ancestral features from what is shared across diverse extant genomes — the method by which LUCA is reconstructed.', def_cn: '从现存多样基因组中共有的部分反推祖先特征——这正是重建 LUCA 所用的方法。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which of these is on the "definitely had" list for LUCA?',
      q_cn: '以下哪一项属于 LUCA「确定拥有」的清单？',
      options: ['A defined lipid chemistry for its cell membrane', 'The universal genetic code and translation machinery', 'A known energy source powering its metabolism', 'A characterised environment that it lived in'],
      answer: 1,
      optionNotes: {
        2: { en: 'The machinery is on the confident list, the fuel is not. ATPase-based energy metabolism is inferred because every domain shares it, while the energy source and the environment sit explicitly under uncertain. You can reconstruct the engine without knowing what was poured into it.', cn: '上「确定有」那份清单的是机器，不是燃料：ATPase 型的能量代谢因为各域共有而被推断出来，而能量来源和所处环境是明确列在「不确定」里的。你可以重建出那台发动机，却仍然不知道往里加的是什么。' }
      },
      why_en: 'The genetic code, translation machinery, RNA polymerisation and ATPase energy metabolism are the confident inferences. Membrane chemistry, energy metabolism and environment are all listed as uncertain.',
      why_cn: '遗传密码、翻译机器、RNA 聚合和 ATP 酶能量代谢是有把握的推断。膜化学、能量代谢和环境都被列为不确定。' },
    { type: 'mcq',
      q_en: 'Why is LUCA\'s membrane chemistry specifically uncertain?',
      q_cn: '为什么 LUCA 的膜化学特别不确定？',
      options: ['Because membranes leave no fossil record from which their lipid chemistry could be read', 'Because archaea and bacteria share no lipid chemistry that could be inherited', 'Because the lipid genes evolve too fast to align across domains', 'Because the membrane genes were horizontally transferred later'],
      answer: 1,
      optionNotes: {
        0: { en: 'LUCA is not read off fossils at all; it is reconstructed by comparing the genomes of organisms alive today. The membrane is uncertain because that comparison comes up empty here: archaea and bacteria share no lipid chemistry that could have been inherited.', cn: 'LUCA 根本不是从化石里读出来的，它是通过比较今天还活着的生物的基因组反推出来的。膜之所以不确定，是因为这种比较在这里得不到结果：archaea 和 bacteria 之间没有任何共同的脂质化学可供继承。' }
      },
      why_en: 'This is the lipid divide. Comparative genomics reconstructs LUCA from what the domains share, but here they share nothing — archaea use ether-linked isoprenoids on glycerol-1-phosphate, bacteria ester-linked fatty acids on glycerol-3-phosphate.',
      why_cn: '这就是「脂质鸿沟」。比较基因组学是从各个域共有的部分反推 LUCA，但在这里它们毫无共同之处——古菌用醚键连接的类异戊二烯接在 1-磷酸甘油上，细菌用酯键连接的脂肪酸接在 3-磷酸甘油上。' },
    { type: 'mcq',
      q_en: 'What kind of organism was LUCA most likely?',
      q_cn: 'LUCA 最可能是什么样的生物？',
      options: ['A single self-replicating RNA molecule of the RNA world', 'A complex cell with sophisticated translation and hundreds of genes', 'A virus-like entity that later gave rise to cellular life', 'A protocell bound to mineral surfaces, with no genome yet'],
      answer: 1,
      optionRefs: { 3: '5-9' },
      optionNotes: {
        0: { en: 'That is the RNA world, a different and much earlier chapter. LUCA is not the first replicator but the last common ancestor of everything alive now, and by then translation, hundreds of DNA-encoded genes and the universal genetic code were already in place.', cn: '那是 RNA world 的图景，属于更早、完全不同的另一章。LUCA 不是第一个复制子，而是现存所有生命最近的共同祖先；到它那个时候，翻译系统、数百个由 DNA 编码的基因和通用遗传密码都已经就位了。' }
      },
      why_en: 'The reconstruction points to considerable complexity — hundreds of DNA-encoded genes and a sophisticated translation system, not a primitive proto-organism.',
      why_cn: '重建结果指向相当高的复杂度——数百个由 DNA 编码的基因和一套精密的翻译系统，而不是一个原始的原生生物。' },
    { type: 'short',
      q_en: 'What do we know and not know about LUCA, and why is the membrane question hard?',
      q_cn: '关于 LUCA 我们知道什么、不知道什么？为什么膜的问题特别难？',
      accept: ['genetic code', 'translation', 'ATPase', 'lipid divide', 'ether', 'ester'],
      answer_en: 'LUCA is reconstructed by comparative genomics across taxonomically diverse organisms rather than observed, and it was most likely a complex cell with a sophisticated translation system and hundreds of DNA-encoded genes. It definitely had the universal genetic code, protein translation machinery, RNA polymerisation and ATPase-based energy metabolism. It probably had DNA, cellularity and core cofactors. What remains uncertain is the chemistry of its lipid membrane, its energy metabolism and its environment. The membrane is the hardest because of what is called the lipid divide. Archaeal membranes are isoprenoid chains ether-linked to glycerol-1-phosphate; bacterial and eukaryotic membranes are fatty acid chains ester-linked to glycerol-3-phosphate. Those are chemically unrelated lipid classes made by unrelated enzymes, and even the stereochemistry of the glycerol backbone is mirror-opposite between the two domains. Since the whole method of reconstructing LUCA is to find what the domains share, and here they share nothing, there are three possibilities: LUCA had both systems and each domain lost one, or it had neither and membranes evolved independently after the split — in which case LUCA may not have had a modern membrane at all, perhaps something more like a mineral compartment — or it had some third chemistry that is now extinct.',
      answer_cn: 'LUCA 是通过对分类学上差异很大的生物做比较基因组学重建出来的，而不是直接观察到的；它很可能是一个复杂的细胞，有精密的翻译系统和数百个由 DNA 编码的基因。它确定拥有通用遗传密码、蛋白翻译机器、RNA 聚合和基于 ATP 酶的能量代谢。它很可能还有 DNA、细胞性和核心辅因子。仍不确定的是它的脂质膜化学、能量代谢和所处环境。膜的问题最难，因为存在所谓的「脂质鸿沟」。古菌膜是通过醚键连接到 1-磷酸甘油上的类异戊二烯链；细菌和真核生物的膜是通过酯键连接到 3-磷酸甘油上的脂肪酸链。这是化学上毫不相关的两类脂质，由毫不相关的酶合成，连甘油骨架的立体构型在两个域之间都是镜像相反的。既然重建 LUCA 的整个方法就是找各个域共有的部分，而这里它们毫无共同之处，就只剩三种可能：LUCA 同时拥有两套系统而各域各丢一套；或者两套都没有、膜是在分化之后各自独立进化出来的（那 LUCA 可能根本没有现代意义上的膜，也许更像某种矿物区室）；或者它有某种如今已灭绝的第三种化学。'
    }
  ],
  oral: {
    q_en: 'What can we say about LUCA, and what remains open?',
    q_cn: '关于 LUCA 我们能说什么？还有什么是悬而未决的？',
    model_en: 'LUCA, the Last Universal Common Ancestor, is not observed but reconstructed — its composition is inferred from bioinformatics data across taxonomically diverse organisms, and the conclusion is that it was most likely a complex cell with a sophisticated translation system and hundreds of genes, DNA-encoded. That is worth stressing, because it is not the primitive proto-organism one might imagine. There are three tiers of confidence. It definitely had the universal genetic code, protein translation machinery, RNA polymerisation, and ATPase energy metabolism. It probably had DNA, cellularity, and core cofactors. And three things remain uncertain: the chemistry of its lipid membrane, its energy metabolism, and its environment. The membrane is the most interesting of those, and it deserves a moment because it is one of the genuinely striking open problems in the field. Archaeal membranes are built from isoprenoid chains ether-linked to glycerol-1-phosphate. Bacterial and eukaryotic membranes are built from fatty acid chains ester-linked to glycerol-3-phosphate. Those are chemically unrelated lipid classes, made by unrelated enzymes, and even the stereochemistry of the glycerol backbone is mirror-opposite between the two domains. This is called the lipid divide. Now, the entire method of reconstructing LUCA is to identify what the domains share and infer that the ancestor had it — but here they share nothing at all. So there are three possibilities: LUCA had both systems and each domain subsequently lost one; or it had neither, and membranes evolved independently in each domain after the split, which would imply LUCA had no modern-style membrane at all, perhaps something closer to a mineral compartment; or it had a third chemistry that has since gone extinct. That is why the slide lists membrane chemistry as uncertain rather than simply omitting it — it is an active unresolved question, not a gap in the reading.',
    checklist: ['Inferred by bioinformatics across taxonomically diverse organisms', 'Most likely a complex cell, sophisticated translation, hundreds of DNA genes', 'Definitely had: genetic code, translation machinery, RNA polymerisation, ATPase', 'Probably had: DNA, cellularity, core cofactors', 'Uncertain: membrane chemistry, energy metabolism, environment', 'The lipid divide is why the membrane is hard', 'Archaea: isoprenoid, ether-linked, glycerol-1-phosphate', 'Bacteria and eukaryotes: fatty acid, ester-linked, glycerol-3-phosphate', 'Unrelated chemistry, unrelated enzymes, mirror-opposite stereochemistry', 'Reconstruction works by shared features, but here nothing is shared', 'Three possibilities: both and lost one, neither, or a third extinct chemistry']
  }
},

{
  id: '5-4',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.4',
  enTitle: 'Natural minimal cells, and why Mycoplasma',
  cnTitle: '天然的最小细胞，以及为什么选支原体',
  slides: 'L11 s.10–13',
  coverage: 'full',
  coverageNote: 'The size table and the Mycoplasma properties are on the slides. The pattern running through the table — the smaller the genome, the less independent the organism — is what explains why Mycoplasma rather than the genuinely smallest genomes became the model.',
  summary: {
    en: 'The size table runs from E. coli at 4.6 megabases and 4,500 genes down to Hodgkinia and Carsonella at 144 kilobases and under 220 genes. But the pattern is that the smallest genomes belong to organisms that are not free-living. Mycoplasma is chosen instead because although usually parasitic, it can grow independently in the lab given sufficient nutrients — the best balance between a small genome and autonomous growth.',
    cn: '这张尺寸表从大肠杆菌的 460 万碱基对、4500 个基因，一直排到 Hodgkinia 和 Carsonella 的 14.4 万碱基对、不到 220 个基因。但其中的规律是：基因组最小的那些生物都不能自由生活。之所以选支原体，是因为它虽然通常是寄生的，但在实验室提供充足营养时可以独立生长——是「基因组小」与「仍能自主生长」之间的最佳平衡点。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.10', src: 'img/figures/L11_s10_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '那张表里真正的规律是：**基因组最小的那些生物，全都不能自由生活。**\n\n' +
            '所以选支原体不是因为它最小，是因为它是**「基因组小」和「仍能自主生长」之间的最佳平衡点**。',
  skipIt: 'Hodgkinia / Carsonella / Ostreococcus 这几个名字和它们的具体数字不用背，记住那条规律就行。**第 11–12 讲没有 RECAP 可引**，这是判断。',
  explain: [
    {
      q: '为什么不直接拿基因组最小的那个来研究？',
      a: '**因为它们最小的原因，恰恰是它们不需要自己活着。**\n\n' +
         '看那张表的两端：\n\n' +
         '**E. coli**：4.6 Mb，4500 个基因，**自由生活**。\n\n' +
         '**Hodgkinia、Carsonella**：144 kb，不到 220 个基因，**不能自由生活**（寄生或共生）。\n\n' +
         '**差了二十倍，而差别的来源不是「它们更高效」，是「它们把活儿外包了」。**\n\n' +
         '一个共生菌住在宿主细胞里，**氨基酸、核苷酸、维生素全都由宿主提供**。既然不用自己造，那些合成通路的基因就没有维持的压力，慢慢就丢掉了。\n\n' +
         '**所以它们的基因组不是「生命的最小配置」，是「在一个什么都管够的环境里，生命还能剩下什么」。**\n\n' +
         '**这两个是完全不同的问题。**\n\n' +
         '如果你拿 Carsonella 的 213 个基因当「最小生命」的答案，你会漏掉一大堆东西——**那些东西不是不需要，是别人替它做了。**\n\n' +
         '**这就是为什么要选支原体：它通常是寄生的，但在实验室提供充足营养时可以独立生长。**\n\n' +
         '**它是「小」和「还能自己活」之间的最佳平衡点**，所以是基因组最小化的理想模型。',
      takeaway: '最小的那些是把活儿外包给了宿主，不是更高效。它们回答的是另一个问题——「什么都管够时还能剩多少」。'
    },
    {
      q: '「它是通过丢失基因变小的」这一句，为什么值得留意？',
      a: '**因为它说明支原体的小是「退化」的结果，不是「从未复杂过」。**\n\n' +
         '很容易把小基因组的生物想成「原始的、接近生命起点的」。**支原体不是。**\n\n' +
         '**它是从更复杂的基因组演化而来的，一路丢东西丢到今天这个样子。**\n\n' +
         '**这一条有两个后果：**\n\n' +
         '**一、它不能用来推测生命起源。**它离起点不比 E. coli 更近——**它只是走了一条往下削的路。**（这也再次说明第 5-2 节那条：自顶向下的答案里含着物种的历史。）\n\n' +
         '**二、它身上剩下的基因，未必是「最必需的那些」，而是「在它那条演化路径上恰好没被丢掉的那些」。**\n\n' +
         '第二条对第 5-5 节很关键：**当你用比较法去找必需基因时，你找到的是「在这些物种里都保留了的」，而这跟「逻辑上必需的」不是一回事。**\n\n' +
         '**顺带一个更普遍的提醒：在生物学里「简单」几乎从来不等于「原始」。**\n\n' +
         '寄生虫、共生菌、甚至某些退化的器官，**它们的简单都是次生的**。**看到一个简单的系统，先问一句：它是还没变复杂，还是曾经复杂过又简化了？**这两种简单能告诉你的事情完全不同。',
      takeaway: '它是退化变小的，不是从未复杂过。所以剩下的基因是「它这条路上没丢掉的」，未必是「逻辑上必需的」。'
    }
  ],
  points: [
    { term: 'E. coli', en: '1 micrometre, 4.6 megabase genome, 4,500 genes, free-living.', cn: '1 微米，460 万碱基对基因组，4500 个基因，自由生活。' },
    { term: 'S. cerevisiae', en: '10 micrometres, 12.5 megabases, 5,800 genes, free-living.', cn: '10 微米，1250 万碱基对，5800 个基因，自由生活。' },
    { term: 'Ostreococcus tauri', en: '1 micrometre, 12.5 megabases, 8,000 genes — the smallest known free-living photosynthetic eukaryote.', cn: '1 微米，1250 万碱基对，8000 个基因——已知最小的自由生活的光合真核生物。' },
    { term: 'Hodgkinia cicadicola', en: 'Under 1 micrometre, 144 kilobases, 188 genes — not free-living, parasitic or symbiotic.', cn: '小于 1 微米，14.4 万碱基对，188 个基因——不能自由生活，属寄生或共生。' },
    { term: 'Carsonella ruddii', en: 'Under 1 micrometre, 144 kilobases, 213 genes — also not free-living.', cn: '小于 1 微米，14.4 万碱基对，213 个基因——同样不能自由生活。' },
    { term: 'Why Mycoplasma', en: 'Often responsible for human illnesses; metabolic simplicity; small genomes. Usually parasitic and not classified as free-living, but can grow independently in labs when sufficient nutrients are provided.', cn: '常引起人类疾病；代谢简单；基因组小。通常是寄生的、不被归为自由生活，但在实验室提供充足营养时可以独立生长。' },
    { term: 'How it got small', en: 'It evolved from more complicated genomes by gene loss.', cn: '它是通过基因丢失从更复杂的基因组演化而来的。' },
    { term: 'What makes it the model', en: 'The simplest cells capable of autonomous growth, and therefore great models for genome minimisation.', cn: '是能够自主生长的最简单细胞，因而是基因组最小化研究的绝佳模型。' }
  ],
  beyondPoints: [
    { term: 'The pattern in the table', en: 'The smaller the genome, the less capable the organism is of independent survival. That is the single most important thing to take from it.', cn: '这张表最该抓的规律是：基因组越小，越不能独立生存。' },
    { term: 'Why the smallest are not the model', en: 'Hodgkinia and Carsonella have among the smallest genomes of any cellular life at 144 kilobases, but both are obligate endosymbionts living inside the cytoplasm of cicada cells. They have lost even basic amino acid synthesis pathways and depend entirely on the host for nutrients. Their smallness is the result of parasitic degeneration, not engineering optimisation.', cn: 'Hodgkinia 和 Carsonella 拥有已知细胞生命中最小的基因组之一（14.4 万碱基对），但两者都是专性内共生体，寄生在蝉细胞的细胞质里。它们连基本的氨基酸合成通路都丢光了，完全依赖宿主供给营养。它们的「小」是寄生退化的结果，而不是工程优化的结果。' },
    { term: 'Why Mycoplasma is the right compromise', en: 'It is also parasitic and usually excluded from the free-living category, but given rich enough medium it grows independently in the laboratory. That makes it the best available balance between having a small genome and still being autonomous — which is exactly what you need if the goal is to find out how small a genome can be while still supporting life on its own.', cn: '支原体同样是寄生的、通常被排除在「自由生活」之外，但只要培养基足够丰富，它就能在实验室里独立生长。这使它成为「基因组小」和「仍能自主」之间现有的最佳平衡——而这正是「要弄清一个基因组能小到什么程度还能独立维持生命」所需要的。' }
  ],
  terms: [
    { en: 'Free-living', cn: '自由生活', def_en: 'Able to grow and reproduce without a host. The smallest known genomes all belong to organisms that are not free-living.', def_cn: '能够在没有宿主的情况下生长繁殖。已知最小的基因组全都属于不能自由生活的生物。' },
    { en: 'Obligate endosymbiont', cn: '专性内共生体', def_en: 'An organism living inside a host cell and unable to survive outside it, having lost pathways the host supplies. Hodgkinia and Carsonella are examples.', def_cn: '生活在宿主细胞内部、离开宿主无法存活的生物，因为它已丢失那些由宿主提供的通路。Hodgkinia 和 Carsonella 就是例子。' },
    { en: 'Reductive evolution', cn: '退化性演化', def_en: 'Genome shrinkage by gene loss, as happens in parasites and symbionts. Mycoplasma reached its small genome this way.', def_cn: '通过基因丢失导致基因组缩小，常见于寄生生物和共生生物。支原体的小基因组就是这样形成的。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the pattern running through the genome size table?',
      q_cn: '基因组尺寸表中贯穿始终的规律是什么？',
      options: ['The smaller the cell, the larger the genome it has to carry', 'The smaller the genome, the less able the organism is to live independently', 'Genome size tracks cell size exactly, in bacteria and eukaryotes alike', 'The split is taxonomic — bacteria and eukaryotes each occupy their own narrow band of genome size'],
      answer: 1,
      why_en: 'Hodgkinia and Carsonella have the smallest genomes at 144 kilobases and are obligate endosymbionts. Their smallness reflects parasitic degeneration, not efficiency.',
      why_cn: 'Hodgkinia 和 Carsonella 基因组最小（14.4 万碱基对），而它们是专性内共生体。它们的「小」反映的是寄生退化，而不是效率。' },
    { type: 'mcq',
      q_en: 'Why is Mycoplasma the model for genome minimisation rather than Carsonella?',
      q_cn: '为什么基因组最小化的模式生物是支原体而不是 Carsonella？',
      options: ['Mycoplasma has the smaller genome of the two, so it sets the lower bound', 'Mycoplasma still grows on its own in rich medium, while Carsonella cannot', 'Carsonella fails to grow only because no one has found the right temperature', 'Mycoplasma is a eukaryote and Carsonella a bacterium'],
      answer: 1,
      optionNotes: {
        0: { en: 'It is the other way round: Carsonella has the smaller genome, 144 kilobases, and Mycoplasma is considerably larger. Smallness here is the disqualification rather than the qualification, because Carsonella got that small by handing the missing pathways to its host.', cn: '正好反了：更小的是 Carsonella（144 kb），Mycoplasma 要大得多。而且在这里「基因组更小」恰恰是被排除的理由，不是入选的理由——Carsonella 能小到这个程度，是因为把缺掉的通路都交给宿主去做了。' }
      },
      why_en: 'The question being asked is how small a genome can be while still supporting autonomous life. An organism that cannot live outside a host cannot answer it — you need the best balance of small and self-sufficient.',
      why_cn: '要问的问题是「基因组能小到什么程度还能维持自主生命」。一个离开宿主就活不了的生物无法回答这个问题——你需要的是「小」与「能自给」之间的最佳平衡。' },
    { type: 'mcq',
      q_en: 'How did Mycoplasma arrive at its small genome?',
      q_cn: '支原体的小基因组是怎么来的？',
      options: ['It never had more genes — a small genome is its primitive ancestral state', 'It descends from ancestors with larger genomes and lost genes over time', 'Wild isolates got their small genome by deliberate laboratory deletion, as JCVI-Syn3.0 did', 'It acquired a compact gene set from its host by horizontal gene transfer'],
      answer: 1,
      optionNotes: {
        0: { en: 'That would make a small genome a primitive ancestral state. Mycoplasma is derived, not primitive: it descends from larger-genomed ancestors and shed genes once a parasitic lifestyle let the host supply their products, which is reductive evolution.', cn: '这等于把「基因组小」当成原始的祖先状态。Mycoplasma 是衍生的而不是原始的：它来自基因组更大的祖先，在寄生生活让宿主替它提供产物之后逐步丢掉了基因，这就是 reductive evolution。' }
      },
      why_en: 'Reductive evolution — a parasitic lifestyle allows genes to be shed once the host supplies their products. It is small by degeneration, not because it represents a primitive ancestral state.',
      why_cn: '这是退化性演化——一旦宿主能提供相应产物，寄生生活方式就允许基因被丢弃。它的小来自退化，而不是因为它代表某种原始的祖先状态。' },
    { type: 'short',
      q_en: 'Why is Mycoplasma the model genus for genome minimisation rather than, say, E. coli?',
      q_cn: '为什么基因组最小化的模式属是支原体而不是比如大肠杆菌？',
      accept: ['metabolic simplicity', 'small genome', 'autonomous', 'independently', 'nutrients'],
      answer_en: 'Because it sits at the best available balance point. E. coli has four and a half thousand genes across a four point six megabase genome, so it is far too complex a starting point for asking what is minimally essential. At the other extreme, the genuinely smallest cellular genomes — Hodgkinia and Carsonella at a hundred and forty-four kilobases with under two hundred and twenty genes — belong to obligate endosymbionts living inside cicada cells, which have lost even basic amino acid synthesis and cannot survive outside a host at all. Their smallness is parasitic degeneration rather than efficiency, so they cannot tell you what an autonomous cell needs. Mycoplasma is the compromise: it has metabolic simplicity and a small genome, arrived at by gene loss from more complicated ancestors, and although it is usually parasitic and not classed as free-living, it can grow independently in the laboratory when sufficient nutrients are supplied. That makes it the simplest cell capable of autonomous growth, which is exactly the property you need if the question is how small a genome can get while still supporting life on its own.',
      answer_cn: '因为它处在现有的最佳平衡点上。大肠杆菌有 4500 个基因、460 万碱基对的基因组，作为「什么是最低限度必需」这个问题的起点太复杂了。另一个极端上，真正最小的细胞基因组——Hodgkinia 和 Carsonella，14.4 万碱基对、不到 220 个基因——属于生活在蝉细胞内的专性内共生体，它们连基本的氨基酸合成都丢了，离开宿主根本无法存活。它们的小是寄生退化而不是效率，所以无法告诉你一个自主细胞需要什么。支原体是那个折中：它代谢简单、基因组小（由更复杂的祖先通过基因丢失而来），而且尽管通常是寄生的、不被归为自由生活，在实验室提供充足营养时它可以独立生长。这使它成为能够自主生长的最简单细胞，而这正是「基因组能小到什么程度还能独立维持生命」这个问题所需要的性质。'
    }
  ],
  oral: {
    q_en: 'Which organisms have the smallest genomes, and why is Mycoplasma the one used for minimisation studies?',
    q_cn: '哪些生物的基因组最小？为什么最小化研究用的是支原体？',
    model_en: 'The size table runs from E. coli, one micrometre with a four point six megabase genome and about four and a half thousand genes, through yeast at twelve and a half megabases and fifty-eight hundred genes, and Ostreococcus tauri, which is notable as the smallest known free-living photosynthetic eukaryote, down to Hodgkinia cicadicola and Carsonella ruddii, both under a micrometre with a hundred and forty-four kilobase genome and under two hundred and twenty genes. But the crucial pattern is in the last column: the smaller the genome, the less capable the organism is of living independently. Hodgkinia and Carsonella have among the smallest genomes of any cellular life, but both are obligate endosymbionts living in the cytoplasm of cicada cells. They have lost even basic amino acid synthesis pathways and depend wholly on the host. Their smallness is the product of parasitic degeneration, not of engineering efficiency — so they cannot tell you what a self-sufficient cell actually needs. That is exactly why Mycoplasma is the chosen model instead. It shares many of those features: it is often responsible for human illnesses, it has metabolic simplicity and a small genome, and it too arrived there by gene loss from more complicated ancestors. It is usually parasitic and is not normally classified as free-living. But crucially, when sufficient nutrients are provided it can grow independently in the laboratory. That makes it the simplest cell capable of autonomous growth, and therefore the best available balance between having a genuinely small genome and still standing on its own — which is precisely the property you need when the question is how far a genome can be reduced while still supporting independent life.',
    checklist: ['E. coli: 4.6 Mb, 4,500 genes, free-living', 'Yeast: 12.5 Mb, 5,800 genes, free-living', 'Ostreococcus tauri: smallest free-living photosynthetic eukaryote', 'Hodgkinia and Carsonella: 144 kb, under 220 genes — NOT free-living', 'The pattern: smaller genome means less independent', 'Those two are obligate endosymbionts in cicadas', 'They lost amino acid synthesis; smallness is degeneration not efficiency', 'Mycoplasma: metabolic simplicity, small genome, gene loss from complex ancestors', 'Usually parasitic, not classed as free-living', 'But grows independently in the lab given sufficient nutrients', 'The simplest cell capable of autonomous growth', 'Hence the best balance of small genome and autonomy']
  }
},

{
  id: '5-5',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.5',
  enTitle: 'Finding the essential genes — comparative versus reductionist',
  cnTitle: '寻找必需基因——比较法与还原法',
  slides: 'L11 s.14–15',
  coverage: 'full',
  coverageNote: 'Both approaches, both numbers and the unknown-function count are on the slides. Why the two methods disagree is not stated, and the disagreement is itself informative — as is the fact that a hundred of the essential genes have no known function.',
  summary: {
    en: 'M. genitalium has 482 genes, mostly for the central dogma but also phospholipid metabolism, glycolysis and vitamin metabolism. Which are essential? The comparative approach, comparing with M. pneumoniae, predicts a minimal set of 200 to 300. The reductionist approach, knocking genes out individually, leaves about 370 essential genes — and roughly 100 of those have no known function.',
    cn: 'M. genitalium 有 482 个基因，主要用于中心法则，但也涉及磷脂代谢、糖酵解和维生素代谢。哪些是必需的？比较法（与 M. pneumoniae 比对）预测出 200–300 个的最小集合。还原法（逐个敲除）留下约 370 个必需基因——而其中约 100 个功能完全未知。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '两条路给出两个数：**比较法预测 200–300 个，实际逐个敲除得到约 370 个。**实测的比预测的**多**。\n\n' +
            '而最扎心的是：**那 370 个里约有 100 个功能完全未知**——我们知道它们是活命必需的，却不知道它们在干什么。',
  skipIt: 'M. genitalium 的 482 这个数、以及各类基因的分布，记个量级就行。**第 11–12 讲没有 RECAP 可引**，这是判断——但**「为什么实测数比预测数多」这条推理要能讲**，它同时暴露了比较法的两种失效方式。',
  explain: [
    {
      q: '为什么实测的必需基因数，比比较法预测的还要多？',
      a: '**因为比较法在两个方向上都会出错，而且两个错误都指向「共有 ≠ 必需」。**\n\n' +
         '**比较法的逻辑**：两个近缘物种都保留的基因，大概是必需的。**便宜、快，只要测序和比对。**但它是**预测**，没有任何实验验证。\n\n' +
         '**错误一：共有但不必需（导致高估必需性、但这里表现为漏掉别的）。**\n\n' +
         '两个物种都保留一个基因，**理由可能各不相同**：\n\n' +
         '**非直系同源功能替换** —— 两个物种用**不同的基因**做同一件事，比对时对不上，但功能是有的。\n\n' +
         '**演化时间还不够** —— 它已经没用了，只是还没来得及被丢掉。\n\n' +
         '**错误二：必需但比对不出来。**\n\n' +
         '有些**确实必需**的基因，在两个物种之间**序列已经分化得太远**，比对软件根本认不出它们是同源的。**于是它们没被算进「共有」的那一批。**\n\n' +
         '**第二类错误正是实测数更大的直接原因：比较法漏掉了它们。**\n\n' +
         '**所以这两条路不是「粗糙版和精确版」的关系，它们回答的问题就不同：**\n\n' +
         '**比较法问**：哪些基因在演化上被保留了下来？\n\n' +
         '**还原法问**：删掉哪些基因会让细胞死掉？\n\n' +
         '**「被保留」和「删了会死」是两件不同的事**——而这恰恰是第 5-4 节那条的延续：支原体身上剩下的基因，是「它这条路上没丢掉的」，不是「逻辑上必需的」。',
      takeaway: '比较法问「哪些被保留了」，还原法问「删了会不会死」。序列分化太远的必需基因会被比对漏掉——所以实测数更大。'
    },
    {
      q: '「约 100 个必需基因功能未知」——这句话的分量有多重？',
      a: '**重在它不是「还没人去研究」，而是「我们知道它必需，却不知道它干什么」。**\n\n' +
         '把这个逻辑摊开：\n\n' +
         '**我们知道它必需** —— 因为把它删掉，细胞死了。这是一个**明确的实验事实**。\n\n' +
         '**我们不知道它干什么** —— 序列比对找不到已知的同源物，也没有可推断的结构域。\n\n' +
         '**所以这不是一份「待办清单」，是一份「已知的未知」清单。**\n\n' +
         '**而它把这一讲的主题又说了一遍**（第 5-1 节的 PLP 例子说过一次）：\n\n' +
         '**我们连「生命需要什么」都还列不全，更谈不上理解每一样为什么必需。**\n\n' +
         '**注意这个数字在第 5-7 节还会变得更难看：**JCVI-Syn3.0 的 473 个基因里，**149 个功能未知——将近三分之一。**\n\n' +
         '**而那是一个人类亲手设计、亲手合成、亲手启动的细胞。**\n\n' +
         '**换句话说：我们造出了一个能活的最小细胞，而我们不知道它三分之一的部件是干什么用的。**\n\n' +
         '**这句话值得在口试里说出来**——它比任何数字都更能说明这个领域现在的位置。',
      takeaway: '不是「还没研究」，是「知道删了会死、但不知道它干什么」。到 Syn3.0 时这个比例是三分之一。'
    }
  ],
  points: [
    { term: 'The starting organism', en: 'M. genitalium has 482 genes, mostly for the central dogma — DNA replication, transcription, translation — but also phospholipid metabolism, glycolysis and vitamin metabolism.', cn: 'M. genitalium 有 482 个基因，主要用于中心法则——DNA 复制、转录、翻译——但也包括磷脂代谢、糖酵解和维生素代谢。' },
    { term: 'The comparative approach', en: 'Design and synthesis of a reduced genome based on existing knowledge. Comparing with M. pneumoniae produces a minimal predicted set of 200 to 300 genes.', cn: '基于已有知识设计并合成一个精简的基因组。与 M. pneumoniae 比对，得出 200–300 个基因的最小预测集。' },
    { term: 'The reductionist approach', en: 'Sequential removal of genes from the natural cell, testing viability at each step. Individual gene knockouts leave about 370 essential genes.', cn: '从天然细胞中逐个去除基因，每一步都检验存活能力。逐个基因敲除后剩下约 370 个必需基因。' },
    { term: 'The unsettling number', en: 'About 100 of those 370 essential genes are of unknown function.', cn: '那 370 个必需基因中，约有 100 个功能未知。' },
    { term: 'The goal', en: 'Create "M. laboratorium" with as few genes as possible.', cn: '造出一个基因尽可能少的「M. laboratorium」。' }
  ],
  beyondPoints: [
    { term: 'Why the comparative approach is fast but only predictive', en: 'It requires only sequencing and alignment: find the genes two related species share and infer that what is shared is probably essential. That gives a predicted set of 200 to 300, cheaply and quickly, but with no experimental verification.', cn: '比较法只需要测序和比对：找出两个近缘物种共有的基因，推断「共有的大概率是必需的」。这样快速便宜地给出一个 200–300 的预测集，但没有任何实验验证。' },
    { term: 'Why the reductionist number is larger', en: 'Knocking genes out individually and testing viability gives about 370, considerably more than predicted. Some genes are retained in both species for different reasons — non-orthologous functional replacement, or simply insufficient evolutionary time to have been lost yet — so being shared does not prove essential. Conversely, some genuinely essential genes have diverged so far in sequence between the two species that alignment fails to recognise them as homologous at all.', cn: '逐个敲除并检验存活给出约 370 个，比预测多得多。有些基因在两个物种里都保留了，但保留的原因不同——非直系同源的功能替代，或者只是进化时间还不够长、尚未丢失——所以「共有」并不证明「必需」。反过来，有些真正必需的基因在两个物种间序列差异太大，比对法根本认不出它们是同源的。' },
    { term: 'The hundred unknown genes', en: 'This is the more uncomfortable finding. These are genes known to be required for life, since removing them kills the cell, yet nobody knows what their products do. It restates the theme of the lecture: we cannot even fully enumerate what is necessary for life, let alone understand what each necessary gene is for.', cn: '这是更扎心的发现：这些基因明明已知是活着所必需的（去掉细胞就死），却完全不知道它们的产物在做什么。这再次呼应本讲的主题：我们连「什么是活着必需的」都说不全，更别说理解每一个必需基因具体在做什么。' }
  ],
  terms: [
    { en: 'Comparative approach', cn: '比较法', def_en: 'Inferring essential genes from what related species share, using sequencing and alignment only. Fast and cheap but predictive rather than verified.', def_cn: '仅通过测序和比对，从近缘物种共有的基因推断必需基因。快速便宜，但属于预测而非验证。' },
    { en: 'Reductionist approach', cn: '还原法', def_en: 'Determining essential genes by removing them one at a time and testing viability. Experimentally verified, and gives a larger number than comparison predicts.', def_cn: '通过逐个去除基因并检验存活来确定必需基因。经实验验证，得出的数目比比较法预测的更大。' },
    { en: 'Non-orthologous gene displacement', cn: '非直系同源基因替换', def_en: 'Two species performing the same essential function with unrelated genes, which makes shared-versus-unique comparisons misleading.', def_cn: '两个物种用毫不相关的基因完成同一项必需功能，这会让「共有还是特有」的比较产生误导。' },
    { en: 'M. laboratorium', cn: 'M. laboratorium', def_en: 'The intended designation for a Mycoplasma reduced to as few genes as possible — the goal of the minimisation programme.', def_cn: '为「基因数尽可能少的支原体」预设的名称——最小化计划的目标。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How many essential genes does the reductionist approach identify in M. genitalium?',
      q_cn: '还原法在 M. genitalium 中鉴定出多少个必需基因？',
      options: ['200 to 300 genes', 'About 370 genes', '482 genes', '473 genes'],
      answer: 1,
      optionRefs: { 3: '5-7' },
      optionNotes: {
        0: { en: '200 to 300 is the comparative prediction, obtained by aligning M. genitalium against M. pneumoniae, not the knockout result. The point of the slide is that the two methods disagree, so keeping each number attached to the method that produced it is the whole content.', cn: '200–300 是比较法给出的预测（把 M. genitalium 与 M. pneumoniae 比对），不是敲除实验的结果。这一节的重点恰恰是两种方法不一致，所以哪个数出自哪种方法必须分清。' },
        2: { en: '482 is how many genes M. genitalium has in total — the starting material of the experiment, not the essential subset. The question being asked is how many of those 482 can be deleted while the cell still lives.', cn: '482 是 M. genitalium 的基因总数，是实验的起点，不是必需基因的子集。要问的正是：这 482 个里能删掉多少、细胞还能活。' }
      },
      why_en: 'About 370, from individual knockouts. The comparative approach with M. pneumoniae predicts only 200 to 300 — the two disagree, and the disagreement is informative.',
      why_cn: '约 370 个，来自逐个敲除。与 M. pneumoniae 比对的比较法只预测出 200–300 个——两者不一致，而这个不一致本身就有信息量。' },
    { type: 'mcq',
      q_en: 'Why does the comparative approach underestimate the number of essential genes?',
      q_cn: '为什么比较法会低估必需基因的数量？',
      options: ['The sequencing depth is too low to see every gene in either genome', 'Genes that are essential but too divergent are not recognised as homologues', 'It looks at only a single species, so it never sees which genes two related genomes have kept in common', 'Individual knockouts are too unreliable to confirm the predicted set'],
      answer: 1,
      optionNotes: {
        2: { en: 'Using two species is what defines the comparative approach — M. genitalium against M. pneumoniae; it is the reductionist knockout approach that works inside a single organism. Its real blind spot is that essential genes which have diverged too far are not recognised as homologues at all.', cn: '用两个物种恰恰是比较法的定义：M. genitalium 对 M. pneumoniae。只在一个生物体内做的反而是还原法（逐个敲除）。它真正的盲点是：分化太远的必需基因在 alignment 里根本被认不出是同源的。' }
      },
      why_en: 'The method assumes shared equals essential and detectable equals homologous, and both assumptions fail. Divergent essential genes go unrecognised, while shared non-essential genes get counted in.',
      why_cn: '这个方法假设「共有即必需」且「能检出即同源」，而两个假设都会失效。序列分化很大的必需基因被漏掉，而共有的非必需基因又被算了进来。' },
    { type: 'mcq',
      q_en: 'What is unsettling about the ~370 essential genes?',
      q_cn: '那约 370 个必需基因中什么最令人不安？',
      options: ['They are all involved in translation', 'About 100 of them have no known function', 'They cannot be synthesised chemically', 'They are all on one operon'],
      answer: 1,
      why_en: 'These are genes we know are required for life, because deleting them kills the cell, and yet nobody knows what their products do. Knowing what is necessary is not the same as understanding it.',
      why_cn: '这些基因我们知道是生命所必需的（删掉细胞就死），但没人知道它们的产物在做什么。知道什么是必需的，不等于理解它。' },
    { type: 'short',
      q_en: 'Compare the comparative and reductionist approaches, and explain why they disagree.',
      q_cn: '比较「比较法」和「还原法」，并解释它们为什么给出不同的答案。',
      accept: ['alignment', 'knockout', '200-300', '370', 'unknown function'],
      answer_en: 'The comparative approach requires only sequencing and alignment: you find which genes two related species share — here M. genitalium against M. pneumoniae — and infer that what is shared is probably essential. It is fast and cheap and gives a predicted minimal set of two to three hundred genes, but it is inference, not experiment. The reductionist approach knocks genes out individually and tests whether the cell still lives, and it yields about three hundred and seventy essential genes — considerably more. They disagree for two opposite reasons. Some genes are shared between the species for reasons other than being essential: non-orthologous functional replacement, or simply that evolution has not had time to shed them, so shared does not prove essential. And conversely, some genuinely essential genes have diverged so far in sequence between the two species that alignment does not recognise them as homologues at all, so comparison misses them. The more uncomfortable finding is what sits inside that three hundred and seventy: about a hundred of them have no known function. These are genes we know are required for life, because removing them kills the cell, and yet nobody knows what their products actually do.',
      answer_cn: '比较法只需要测序和比对：找出两个近缘物种共有的基因——这里是 M. genitalium 与 M. pneumoniae——并推断共有的大概率是必需的。它快速、便宜，给出 200–300 个基因的最小预测集，但这是推断而不是实验。还原法逐个敲除基因并检验细胞是否仍然存活，得出约 370 个必需基因——多得多。两者不一致有两个相反的原因。有些基因在两个物种里共有，但原因并非「必需」：非直系同源的功能替代，或者只是进化还没来得及把它们丢掉，所以「共有」并不证明「必需」。反过来，有些真正必需的基因在两个物种间序列分化太大，比对根本认不出它们是同源的，于是比较法把它们漏掉了。更令人不安的发现藏在那 370 个里面：其中约 100 个功能完全未知。这些基因我们知道是生命所必需的（去掉细胞就死），却没人知道它们的产物实际在做什么。'
    }
  ],
  oral: {
    q_en: 'How do you find out which genes are essential, and how well do the methods agree?',
    q_cn: '怎么找出哪些基因是必需的？各种方法之间吻合得如何？',
    model_en: 'The starting point is M. genitalium with four hundred and eighty-two genes — mostly central dogma machinery for replication, transcription and translation, but also phospholipid metabolism, glycolysis and vitamin metabolism. The question is which of them are essential, and there are two complementary strategies. The comparative approach is design and synthesis of a reduced genome based on existing knowledge: you compare M. genitalium with M. pneumoniae, take what they share, and infer that shared genes are probably the essential ones. This produces a minimal predicted set of two to three hundred genes. It needs only sequencing and alignment, so it is fast and cheap — but it is inference, with no experimental verification. The reductionist approach is sequential removal of genes from the natural cell, testing viability at each step. That leaves about three hundred and seventy essential genes, considerably more than predicted. The disagreement is itself informative and runs in both directions. On one side, two species can share a gene for reasons other than essentiality — non-orthologous functional replacement, where each solves the same problem with unrelated genes, or simply that evolution has not yet had time to shed something dispensable — so shared does not imply essential. On the other side, some genuinely essential genes have diverged so far in sequence between the two species that alignment fails to recognise the homology at all, so the comparative method never counts them. The finding I would end on, though, is the most striking number in the lecture so far: of those three hundred and seventy essential genes, roughly a hundred are of completely unknown function. These are genes we know life requires, because deleting them kills the cell, and yet nobody knows what their products do. The goal all this feeds into is creating M. laboratorium, a cell with as few genes as possible.',
    checklist: ['M. genitalium: 482 genes, mostly central dogma plus some metabolism', 'Comparative: compare with M. pneumoniae, infer shared equals essential', 'Gives a predicted set of 200-300 genes; fast, cheap, unverified', 'Reductionist: knock out genes individually, test viability', 'Gives about 370 essential genes — considerably more', 'Disagreement reason 1: shared does not imply essential', 'Non-orthologous replacement, or not yet lost by evolution', 'Disagreement reason 2: divergent essential genes escape alignment', 'The striking number: ~100 of the 370 have unknown function', 'Known to be required for life, but nobody knows what they do', 'Goal: create M. laboratorium with as few genes as possible']
  }
},

{
  id: '5-6',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.6',
  enTitle: 'Genome synthesis and transplantation — JCVI-Syn1.0',
  cnTitle: '基因组合成与移植——JCVI-Syn1.0',
  slides: 'L11 s.16–18',
  coverage: 'full',
  coverageNote: 'The assembly route, the transplantation history and Syn1.0\'s properties are on the slides. What the watermarks actually contained, and why watermarking became standard practice, is beyond the slides and is a genuinely responsible engineering habit worth knowing about.',
  summary: {
    en: 'In 2008 the J. Craig Venter Institute achieved the first complete synthesis of a cellular genome, the 583 kilobase M. genitalium, from 101 regions of about 6 kilobases assembled into 4 pieces and finished in yeast. Transplantation — booting the system up — proved harder, but was first demonstrated in 2007 with natural M. mycoides DNA moved into M. capricolum. Combining both gave JCVI-Syn1.0 in 2010, the first cell with a fully synthetic genome.',
    cn: '2008 年，J. Craig Venter 研究所完成了第一个细胞基因组的全合成——583 kb 的 M. genitalium，由 101 个约 6 kb 的片段组装成 4 大块，最后在酵母中完成拼接。而基因组移植（把系统「启动」起来）要困难得多，但在 2007 年首次实现：把天然的 M. mycoides DNA 移入 M. capricolum。两者结合，2010 年产生了 JCVI-Syn1.0——第一个拥有完全人工合成基因组的细胞。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.17', src: 'img/figures/L11_s17_1.webp' },
    { slide: 'L11 s.18', src: 'img/figures/L11_s18_1.webp' },
    { slide: 'L11 s.18', src: 'img/figures/L11_s18_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**合成基因组（2008）和把它启动起来（移植，2007）是两个分开解决的难题**，合起来才有 2010 年的 JCVI-Syn1.0。\n\n' +
            '而「**启动**」那一步比合成难得多——这一点很反直觉。',
  skipIt: '101 个片段、583 kb、60 分钟这些数字记个量级即可。**第 11–12 讲没有 RECAP 可引**，这是判断——但**「合成」和「移植」是两个独立难题**这一条要记，它解释了为什么时间线上是 2007 和 2008 两个节点、2010 才合流。',
  explain: [
    {
      q: '为什么「把基因组启动起来」比「合成它」还难？',
      a: '**因为合成是化学，而启动是要让一整套系统接管一个细胞——这是完全不同性质的问题。**\n\n' +
         '**合成这一边**：把 583 kb 拆成 101 个约 6 kb 的片段，分段合成，再一级级拼起来（最后在酵母里完成——回到第 1-18 节：**Gibson 组装正是 Venter 研究所为这件事发展出来的**）。\n\n' +
         '**这很费事，但它是一个已知怎么做的问题。**你知道每一步要什么、失败了怎么查。\n\n' +
         '**移植这一边完全不同：你要把一整条裸露的基因组塞进另一个物种的细胞里，然后让它接管。**\n\n' +
         '**需要同时成立的条件很多：**\n\n' +
         '这么大一条 DNA 要**完整地进去**而不被剪断（想想第 1-18 节说 30 kb 的 bacmid 就已经很脆了，这是它的二十倍）；\n\n' +
         '进去之后**不能被宿主的限制酶切碎**（第 1-11 节：细菌靠甲基化区分敌我，而这条外来基因组没有正确的甲基化标记）；\n\n' +
         '它要**开始被转录、被复制**；\n\n' +
         '而且它的产物要**逐步取代宿主原有的蛋白**，直到细胞完全变成供体的样子。\n\n' +
         '**幻灯片那句「some capricolum cells were seen to change and resemble mycoides」描述的正是这个接管过程。**\n\n' +
         '**所以这是「造一台机器」和「让机器在别人的车间里开机并顶掉原来那台」的区别。**前者是工程，后者是一次系统级的政权更替。',
      takeaway: '合成是分段拼装的已知问题；移植要让一整条裸 DNA 进去、躲过限制酶、并逐步顶替宿主原有的蛋白。'
    },
    {
      q: '「水印」是个噱头吗？',
      a: '**不是——它有两层实际用途，而且已经成了这个领域的行业惯例。**\n\n' +
         '**水印是什么**：在合成基因组的非编码区里，用一套「DNA 三联体 → 字母和标点」的映射，**把文字写进 DNA**。JCVI-Syn1.0 里写了 46 位参与科学家的名字、三段引言（其中一段来自 James Joyce）、一个网址，还有一个留给读者解码的密码谜题。\n\n' +
         '**实际用途一：证明它是合成的。**\n\n' +
         '一个独一无二的水印，**证明这条基因组是人工合成的，不是从自然界分离到的**。这在学术上是必要的——否则你怎么证明自己不是拿了个天然菌株？\n\n' +
         '**实际用途二：可追溯。**\n\n' +
         '如果这个生物**逃逸了、或者被误用了**，水印可以把它**追回到具体的实验室和批次**。\n\n' +
         '**这一条的分量在这一讲后面会变得很明显**：当你在讨论合成生命的安全问题时（第 5-8 节的镜像细胞共识），**「能不能追溯到来源」是一个非常实际的治理手段。**\n\n' +
         '**修辞上的用途也是真的**：一个明白无误的签名，宣告**这个生命形式是被「写」出来的，不是演化出来的**。\n\n' +
         '**而它确实成了惯例**：JCVI-Syn3.0 和第 3-12 节那些重编码的 E. coli 菌株都延续了这个做法。**一个看似浪漫的举动，变成了一条可执行的溯源规范。**',
      takeaway: '证明它是合成的、以及逃逸后可追溯到具体实验室和批次。修辞归修辞，用途是实的，而且已成惯例。'
    }
  ],
  points: [
    { term: 'The 2008 milestone', en: 'First complete synthesis of a cellular genome, at the J. Craig Venter Institute: M. genitalium, 583 kilobases.', cn: '第一个细胞基因组的全合成，由 J. Craig Venter 研究所完成：M. genitalium，583 kb。' },
    { term: 'How it was assembled', en: '101 regions, each about 6 kilobases, assembled into 4 pieces. Those pieces were co-transformed into yeast cells to assemble and replicate a complete circular genome.', cn: '101 个区段，每段约 6 kb，先组装成 4 大块。这些大块被共转化进酵母细胞，在其中组装并复制出一个完整的环状基因组。' },
    { term: 'The harder problem', en: 'Genome transplantation — booting up the system — turned out to be problematic.', cn: '基因组移植——把这个系统「启动」起来——被证明是个难题。' },
    { term: 'Transplantation first demonstrated', en: 'In 2007: natural M. mycoides DNA, extracted whole from cells, transplanted into M. capricolum cells. Following transplantation, some capricolum cells were seen to change and resemble mycoides.', cn: '2007 年首次实现：从细胞中整体提取的天然 M. mycoides DNA 被移植进 M. capricolum 细胞。移植之后，一些 capricolum 细胞被观察到发生改变并变得像 mycoides。' },
    { term: 'JCVI-Syn1.0, 2010', en: 'Genome transplantation combined with chemical genome synthesis gave M. mycoides JCVI-Syn1.0 — the first cell with a fully synthetic genome.', cn: '基因组移植与化学基因组合成相结合，产生了 M. mycoides JCVI-Syn1.0——第一个拥有完全人工合成基因组的细胞。' },
    { term: 'Its properties', en: 'Almost an exact copy of the wild-type, but with watermarks added. Doubling time 60 minutes.', cn: '几乎是野生型的精确复制，但加入了水印。倍增时间 60 分钟。' }
  ],
  beyondPoints: [
    { term: 'What the watermarks actually were', en: 'The synthesised genome carried encoded text, deliberately written into non-coding regions using a scheme mapping DNA triplets to letters and punctuation. It included the names of 46 contributing scientists, three quotations including one from James Joyce, a web address, and a cipher puzzle challenging readers to decode a hidden message.', cn: '合成的基因组中携带了编码进去的文字，被有意写在非编码区，使用一套把 DNA 三联体映射为字母和标点的方案。内容包括 46 位参与科学家的姓名、三段引文（其中一段来自 James Joyce）、一个网址，以及一个挑战读者解码隐藏信息的密码谜题。' },
    { term: 'Why watermarking is more than a gimmick', en: 'It is practical as well as rhetorical. Practically, a unique watermark proves the genome is synthetic rather than a natural isolate, and lets any escaped or misused copy be traced back to the laboratory and batch of origin. Rhetorically, it is an unmistakable signature that this life form was written rather than evolved.', cn: '它既是实用的也是修辞性的。实用上，独一无二的水印证明这个基因组是人工合成的而非天然分离株，并且万一出现泄漏或滥用，可以追溯到具体的实验室和批次。修辞上，它是一个不容错认的签名：这个生命形式是被写出来的，不是进化出来的。' },
    { term: 'It became industry practice', en: 'Watermarking synthetic genomes is now a standard habit in the field — JCVI-Syn3.0 and the recoded E. coli strains from the genetic code lecture all continue it.', cn: '给合成基因组加水印如今已是该领域的行业惯例——JCVI-Syn3.0 以及遗传密码那一讲中的重编码大肠杆菌菌株都延续了这个做法。' }
  ],
  terms: [
    { en: 'Genome transplantation', cn: '基因组移植', def_en: 'Moving a whole genome into a recipient cell so that the recipient converts to the donor genotype — the step that boots a synthetic genome into a living cell.', def_cn: '把一整个基因组移入受体细胞，使受体转变为供体的基因型——这是把合成基因组「启动」成活细胞的关键步骤。' },
    { en: 'Watermark', cn: '水印', def_en: 'Text encoded into non-coding regions of a synthetic genome, proving it is synthetic and allowing any copy to be traced to its laboratory of origin.', def_cn: '被编码写入合成基因组非编码区的文字，用以证明它是人工合成的，并使任何拷贝都能追溯到其来源实验室。' },
    { en: 'JCVI-Syn1.0', cn: 'JCVI-Syn1.0', def_en: 'The first cell with a fully synthetic genome, 2010 — an almost exact copy of wild-type M. mycoides plus watermarks, doubling in 60 minutes.', def_cn: '第一个拥有完全人工合成基因组的细胞（2010 年）——几乎是野生型 M. mycoides 的精确复制加上水印，倍增时间 60 分钟。' },
    { en: 'Assembly in yeast', cn: '在酵母中组装', def_en: 'Using yeast homologous recombination to join large DNA pieces into a complete circular genome, the step that made megabase-scale assembly practical.', def_cn: '利用酵母的同源重组把大片段 DNA 拼接成完整的环状基因组，正是这一步让兆碱基级的组装变得可行。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How was the synthetic M. genitalium genome finally assembled into a complete circle?',
      q_cn: '合成的 M. genitalium 基因组最终是怎么被拼接成完整环状的？',
      options: ['By ligating the 4 large pieces end to end with DNA ligase in vitro, as the earlier assembly stages had been done', 'By transforming the 4 large pieces into yeast and letting it recombine them', 'By amplifying the whole 583 kilobase circle in one PCR reaction', 'By Golden Gate assembly, with type IIS enzymes cutting outside their sites'],
      answer: 1,
      optionRefs: { 3: '1-14' },
      optionNotes: {
        0: { en: 'In vitro assembly did the earlier stages: 101 regions of about 6 kb were built up into 4 large pieces that way. What it could not do was close a 583 kb circle, which is exactly why the final step was handed to yeast homologous recombination.', cn: '体外组装负责的是前面几步：101 个约 6 kb 的区段就是这样拼成 4 大块的。它做不到的是闭合一个 583 kb 的环——正因如此最后一步才交给酵母的 homologous recombination。' }
      },
      why_en: '101 regions of about 6 kilobases were built up into 4 pieces, and yeast then assembled and replicated the complete circular genome — exploiting yeast homologous recombination to do what in vitro methods could not at that scale.',
      why_cn: '101 个约 6 kb 的区段先组装成 4 大块，然后由酵母完成完整环状基因组的组装与复制——利用酵母的同源重组，做到了当时体外方法在这个尺度上做不到的事。' },
    { type: 'mcq',
      q_en: 'What was demonstrated in 2007, before any synthetic genome existed?',
      q_cn: '在任何合成基因组出现之前，2007 年验证了什么？',
      options: ['Chemical synthesis of a complete bacterial chromosome from oligonucleotides', 'Genome transplantation — natural M. mycoides DNA moved into M. capricolum', 'Codon compression — replacing every instance of a codon with a synonym', 'Determination of the minimal gene set by knocking out genes one at a time'],
      answer: 1,
      optionRefs: { 2: '3-12', 3: '5-5' },
      optionNotes: {
        0: { en: 'Synthesis and transplantation are two separate problems, and they were solved in the reverse of the intuitive order: transplantation first, in 2007 with natural DNA, and whole-genome synthesis only in 2008. This option puts the later milestone in the earlier slot.', cn: '合成与移植是两个独立的问题，而且解决顺序跟直觉相反：2007 年先用天然 DNA 做成了移植，全基因组合成要到 2008 年。这个选项把晚的那个里程碑放进了早的位置。' }
      },
      why_en: 'Synthesis and transplantation were solved separately. Transplantation came first with natural DNA, and only combining the two in 2010 produced a cell running on a fully synthetic genome.',
      why_cn: '合成和移植是分别解决的。移植先用天然 DNA 实现，直到 2010 年把两者结合，才产生了运行在完全合成基因组上的细胞。' },
    { type: 'mcq',
      q_en: 'Why are watermarks written into synthetic genomes?',
      q_cn: '为什么要在合成基因组里写入水印？',
      options: ['To make the assembled genome more stable once it is in the cell', 'To mark the genome as synthetic and traceable to its laboratory of origin', 'To supply the restriction sites and unique junctions the assembly steps need to join the pieces in order', 'To pad the sequence out to a standard chromosome size'],
      answer: 1,
      why_en: 'It is a responsible engineering habit, not decoration — practically it distinguishes a synthetic construct from a natural isolate and supports traceability if something goes wrong, and it has become standard practice in the field.',
      why_cn: '这是一个负责任的工程习惯而不是装饰——实用上它把合成构建体与天然分离株区分开，并在出问题时提供可追溯性，如今已成为该领域的标准做法。' },
    { type: 'short',
      q_en: 'Walk through how JCVI-Syn1.0 was made, and say what the two hard problems were.',
      q_cn: '讲一遍 JCVI-Syn1.0 是怎么造出来的，并说明两个难点分别是什么。',
      accept: ['101 regions', 'yeast', 'transplantation', '2007', '2010'],
      answer_en: 'Two separate problems had to be solved: synthesising a whole genome, and booting it up inside a cell. Synthesis came first, in 2008 at the J. Craig Venter Institute: the five hundred and eighty-three kilobase M. genitalium genome was built as a hundred and one regions of about six kilobases each, assembled into four larger pieces, and those four were co-transformed into yeast cells, which assembled and replicated the complete circular genome. Transplantation was the harder problem, and it was actually demonstrated first, in 2007, using natural rather than synthetic DNA: whole M. mycoides DNA extracted from cells was transplanted into M. capricolum cells, and afterwards some of those capricolum cells were seen to change and come to resemble mycoides. Combining the two techniques produced JCVI-Syn1.0 in 2010, M. mycoides carrying a fully synthetic genome — the first cell of its kind. It was almost an exact copy of the wild-type, with watermarks added, and it doubled in sixty minutes.',
      answer_cn: '必须解决两个独立的问题：合成一整个基因组，以及在细胞里把它启动起来。合成先完成，2008 年在 J. Craig Venter 研究所：583 kb 的 M. genitalium 基因组被构建为 101 个各约 6 kb 的区段，先组装成 4 个更大的片段，再把这 4 块共转化进酵母细胞，由酵母完成完整环状基因组的组装和复制。移植是更难的问题，而它其实更早被验证——2007 年，用的是天然而非合成的 DNA：从细胞中整体提取的 M. mycoides DNA 被移植进 M. capricolum 细胞，之后一些 capricolum 细胞被观察到发生改变、变得像 mycoides。把这两项技术结合，2010 年产生了 JCVI-Syn1.0，即携带完全合成基因组的 M. mycoides——第一个这样的细胞。它几乎是野生型的精确复制，加上了水印，倍增时间 60 分钟。'
    }
  ],
  oral: {
    q_en: 'How was the first cell with a fully synthetic genome created?',
    q_cn: '第一个拥有完全合成基因组的细胞是怎么造出来的？',
    model_en: 'It required solving two quite separate problems — synthesising a whole genome, and then booting it up inside a cell — and they were solved in the opposite order to what you might expect. Synthesis came in 2008 at the J. Craig Venter Institute, the first complete synthesis of a cellular genome: M. genitalium, five hundred and eighty-three kilobases. It was built as a hundred and one regions of roughly six kilobases each, assembled up into four larger pieces, and those four pieces were then co-transformed into yeast cells, which assembled and replicated the complete circular genome. Using yeast as the final assembler is the clever step, because yeast homologous recombination could join megabase-scale DNA in a way in vitro methods could not. Transplantation, though — actually booting the system up — turned out to be the problematic part, and it had in fact been demonstrated first, in 2007, using natural rather than synthetic DNA: whole M. mycoides DNA extracted from cells was transplanted into M. capricolum recipients, and afterwards some capricolum cells were observed to change and come to resemble mycoides. Combining chemical genome synthesis with genome transplantation gave, in 2010, M. mycoides JCVI-Syn1.0 — the first cell with a fully synthetic genome. It was almost an exact copy of the wild-type, with a doubling time of sixty minutes, and with watermarks added. Those watermarks are worth a word, because they are more than a gimmick. The genome carried encoded text written into non-coding regions using a scheme mapping DNA triplets to letters, including the names of forty-six contributing scientists, three quotations, a web address and a cipher puzzle. The purpose was both practical and rhetorical: practically, a unique watermark proves the genome is synthetic rather than a natural isolate and lets any escaped or misused copy be traced back to the laboratory of origin; rhetorically, it is an unmistakable signature that this life form was written, not evolved. It has since become standard practice across synthetic genomics.',
    checklist: ['Two separate problems: synthesis, and booting it up', '2008, JCVI: first complete synthesis of a cellular genome', 'M. genitalium, 583 kb', '101 regions of ~6 kb, assembled into 4 pieces', 'Four pieces co-transformed into yeast to make the complete circle', 'Yeast homologous recombination made megabase assembly practical', 'Transplantation was the harder problem', 'Demonstrated 2007 with natural M. mycoides DNA into M. capricolum', 'Recipients changed to resemble the donor', '2010: synthesis plus transplantation gives JCVI-Syn1.0', 'Almost exact wild-type copy, 60 minute doubling, watermarks added', 'Watermarks: 46 names, three quotations, a URL, a cipher puzzle', 'Practical purpose: proof of synthesis and traceability']
  }
},

{
  id: '5-7',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.7',
  enTitle: 'JCVI-Syn3.0 — the minimal cell, and the evolution rescue',
  cnTitle: 'JCVI-Syn3.0——最小细胞，以及靠进化的挽救',
  slides: 'L11 s.19–20',
  coverage: 'full',
  coverageNote: 'The properties table, the failed first design and the evolution result are on the slides. That 149 of 473 essential genes have unknown function is the most striking number in the lecture, and why deletion costs fitness that evolution can then restore is the beyond-the-slides mechanism.',
  summary: {
    en: 'JCVI-Syn3.0, from Hutchison and colleagues in Science 2016, has a 531 kilobase genome and 473 genes — smaller than any known autonomously replicating cell — and doubles in 180 minutes. Nearly a third of its genes, 149 of the 473, have unknown function. The first design attempt failed outright, revealing a class of quasi-essential genes, and minimisation cost over half the fitness, which laboratory evolution over about 2,000 generations then restored.',
    cn: 'JCVI-Syn3.0 来自 Hutchison 等人 2016 年发表于 Science 的工作，基因组 531 kb、473 个基因——比任何已知能自主复制的细胞都小——倍增时间 180 分钟。它的基因中有近三分之一（473 个中的 149 个）功能未知。最初的设计尝试彻底失败，从而揭示出一类「准必需基因」；而最小化让适合度损失超过一半，随后约 2000 代的实验室进化把它恢复了。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.19', src: 'img/figures/L11_s19_1.webp' },
    { slide: 'L11 s.19', src: 'img/figures/L11_s19_2.webp' },
    { slide: 'L11 s.20', src: 'img/figures/L11_s20_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**473 个基因里，149 个功能未知——将近三分之一。**这是一个人类亲手设计、合成、启动的细胞，而我们不知道它三分之一的部件在干什么。\n\n' +
            '另外两条：**第一版设计直接死了**（暴露出「准必需基因」），以及**最小化让适合度掉了一半以上，靠 2000 代实验室进化才补回来**。',
  skipIt: 'Hutchison 2016 的出处、531 kb / 180 分钟这些数字记个量级即可。**第 11–12 讲没有 RECAP 可引**，这是判断——但**「准必需基因」和「进化来救场」这两条必须能讲**，它们是这一节最有分量的两个发现。',
  explain: [
    {
      q: '「准必需基因」是怎么被发现的？为什么第一版设计会直接失败？',
      a: '**因为「必需 / 不必需」这个二分法本身就是错的。**\n\n' +
         '**第一版的做法**：根据已有知识加上有限的转座子突变数据，列出「必需基因」清单，把其余的全删掉，然后合成。\n\n' +
         '**结果：细胞不活。**\n\n' +
         '**原因在于第三类基因的存在：准必需基因（quasi-essential genes）。**\n\n' +
         '它们**不是严格存活所必需的**——单独敲掉任何一个，细胞还能活。\n\n' +
         '**但它们是「健壮生长」所必需的。**\n\n' +
         '所以在逐个敲除的实验里，它们看起来像「可删的」；**而当你把它们一起删掉时，细胞就撑不住了。**\n\n' +
         '**这是一个很典型的「单独测试不等于组合测试」的陷阱：**\n\n' +
         '每一个删除都通过了单独测试，**而所有删除加在一起就是致命的**。\n\n' +
         '**这一条其实在这门课里出现过一次**：第 3-12 节 Syn57 也是同一个模式——每一处同义替换单独看都无害，**十万处加在一起让细胞慢了 4 倍**。\n\n' +
         '**教训：在一个高度耦合的系统里，你不能靠逐个测试来预测组合的后果。**这也正是「必需基因清单」这个概念本身的局限——**必需性不是单个基因的属性，是它在一个具体组合里的属性。**',
      takeaway: '有第三类基因：单独删能活，一起删就不行。所以「必需性」不是单个基因的属性，而是它在具体组合里的属性。'
    },
    {
      q: '为什么删掉基因会让适合度掉一半以上？删的不都是「不必需」的吗？',
      a: '**因为删基因删掉的不只是功能，还破坏了一个共同演化了几十亿年的调控网络。**\n\n' +
         '这是这一节最值得想清楚的一点。假设你删掉的每一个基因确实都不必需，**剩下的每个基因也都还能单独工作**——为什么整体还是变差了？\n\n' +
         '**因为一个基因组不是一份零件清单，它是一个被精细调好的系统：**\n\n' +
         '**复制起点的位置**、**基因的相对顺序**、**各个启动子强度之间的平衡**——**这些全都是长期自然选择优化出来的。**\n\n' +
         '举个具体的：细菌里靠近复制起点的基因**拷贝数天然更高**（因为复制正在进行时，起点附近已经被复制了两遍）。**所以「哪个基因放在哪」本身就编码着表达量的信息。**\n\n' +
         '**你做了一次大规模的删除和重排，这些精细的相互协调就全乱了。**\n\n' +
         '于是即使每个基因都还能工作，**整个系统的配合变差了**——转录和复制打架、某些蛋白的比例失衡、代谢流量对不上。\n\n' +
         '**结果就是适合度掉了一半以上，倍增时间从 60 分钟变成 180 分钟。**\n\n' +
         '**这个道理跟第 3-12 节完全一样**：那里说「同义只在氨基酸层面同义，序列还承载着二级结构、调控元件、翻译速度」。**这里是「基因清单只在功能层面完整，基因组还承载着位置、顺序和平衡」。**\n\n' +
         '**共同的教训：一个生物系统里，信息藏在你没在看的那些层面上。**',
      takeaway: '基因组不是零件清单，位置、顺序、启动子平衡都是被优化过的。大规模重排把这些协调打乱了。'
    },
    {
      q: '为什么「让它进化 2000 代」能把适合度救回来，而人的设计做不到？',
      a: '**因为要修的问题有成千上万个，而且大部分你根本不知道存在。**\n\n' +
         '**人的设计需要先诊断**：你得知道是哪个启动子太弱、哪两个基因的比例失衡、哪里有复制-转录冲突。**而这些问题分散在几百个基因的相互作用里，你查不完。**\n\n' +
         '**而实验室进化不需要诊断。**\n\n' +
         '你只要让细胞自由繁殖 2000 代，**自然选择会自动完成再优化**：\n\n' +
         '随机突变不断产生，**其中恰好补偿了某个失衡的那些，让细胞长得快一点点，于是在群体里占了上风**。\n\n' +
         '一代一代累积，**补偿性突变逐步调回启动子强度、化解重排造成的冲突**，适合度就恢复了。\n\n' +
         '**注意这里没有任何人理解发生了什么——修好了，但不知道修的是什么。**\n\n' +
         '**这跟第 4-4 节 Arnold 的洞见是完全同一件事：**\n\n' +
         '**有些优化问题，进化解得比人的理性设计好**——**不是因为进化更聪明，是因为它不需要先理解。**\n\n' +
         '**所以这一节其实是全课两条主线的交汇点：**\n\n' +
         '**第 11 讲的主题**是「我们不理解细胞」（PLP、149 个未知基因）。\n\n' +
         '**第 9 讲的方法**是「不理解也能做成，让进化去搜」。\n\n' +
         '**Syn3.0 同时演示了这两件事：设计失败了，进化救了场。**',
      takeaway: '要修的问题成千上万且大多你不知道存在。进化不需要诊断——跟第 9 讲一样，不理解也能优化。'
    }
  ],
  points: [
    { term: 'The paper', en: 'Hutchison et al., "Design and synthesis of a minimal bacterial genome", Science 2016.', cn: 'Hutchison 等，《一个最小细菌基因组的设计与合成》，Science 2016。' },
    { term: 'Genome size', en: '531 kilobases — smaller than any known autonomously replicating cell.', cn: '531 kb——比任何已知能自主复制的细胞都小。' },
    { term: 'Gene count', en: '473 genes.', cn: '473 个基因。' },
    { term: 'Doubling time', en: '180 minutes — three times slower than JCVI-Syn1.0 at 60 minutes.', cn: '180 分钟——比 JCVI-Syn1.0 的 60 分钟慢三倍。' },
    { term: 'The striking number', en: '149 of the 473 genes are of unknown function — nearly a third.', cn: '473 个基因中有 149 个功能未知——接近三分之一。' },
    { term: 'The first design failed', en: 'An early minimal design based on collective knowledge plus limited transposon mutagenesis data did not produce a viable cell.', cn: '一个基于集体知识加有限转座子诱变数据的早期最小化设计，没能产生可存活的细胞。' },
    { term: 'Quasi-essential genes', en: 'Improved transposon mutagenesis revealed a class of quasi-essential genes — needed for robust growth even though not strictly required for survival.', cn: '改进的转座子诱变揭示出一类准必需基因——虽然对存活不是严格必需，但对稳健生长是必需的。' },
    { term: 'The fitness cost', en: 'A decrease in fitness of more than 50 per cent immediately after minimisation.', cn: '最小化之后适合度立即下降超过 50%。' },
    { term: 'The rescue', en: 'Laboratory evolution for about 2,000 generations restored fitness.', cn: '实验室进化约 2000 代之后，适合度恢复。' }
  ],
  beyondPoints: [
    { term: 'What 149 unknown genes actually means', en: 'It is not that nobody has got round to studying them. These are genes known to be required for life, since removing them kills the cell, yet what their products do is completely unknown.', cn: '这不是「没人抽空去研究它们」。这些基因明明已知是活着所必需的（去掉细胞就死），却完全不知道它们的产物在做什么。' },
    { term: 'Why that is the lecture\'s strongest point', en: 'It pushes the opening argument to its extreme. Even after reducing a genome to nothing but the absolutely necessary, nearly a third of our understanding of what life fundamentally requires remains a black box. Minimal does not mean understood — which is exactly why this course treats synthetic cells as a scientific instrument rather than merely an engineering product. Building the minimal genome forces you to go and find out what those 149 genes are actually for.', cn: '它把开篇的论点推到了极致：即使把基因组精简到只剩绝对必需的部分，我们对「生命根本需要什么」的理解依然有近三分之一是黑箱。「最小」不等于「已理解」——这正是本课把合成细胞视为科学工具而非仅仅工程产品的原因：造出最小基因组，是为了逼着自己去弄清那 149 个基因究竟在做什么。' },
    { term: 'Why deletion costs so much fitness', en: 'Removing genes does not only remove functions; it disrupts a regulatory network that has been co-evolving for billions of years. The position of the origin of replication, the relative order of genes, the balance of promoter strengths — all of these were optimised by long-term natural selection. A sudden large-scale rearrangement and deletion breaks that fine mutual coordination, so even if every remaining gene still works individually, the whole system coordinates worse. Hence a fitness drop of over 50 per cent.', cn: '去掉基因不只是丢功能，还打乱了一套已经协同进化了几十亿年的调控网络：复制起点的位置、基因之间的相对顺序、启动子强度的平衡，都是长期自然选择优化的结果。突然的大规模重排和删除破坏了这套精密的相互配合，所以即使每个留下来的基因单独都还正常工作，整体的协调性也会下降——因此适合度下降超过 50%。' },
    { term: 'Why evolution can repair it', en: 'Let the cell propagate freely for about 2,000 generations and natural selection re-optimises: compensatory mutations gradually adjust promoter strengths and resolve replication-transcription conflicts created by the rearrangement, and fitness recovers. It is evolution rather than design doing the work — the same lesson as directed evolution, that some optimisation problems are solved better by evolution than by human rational design.', cn: '让它在实验室里自由传代约 2000 代，自然选择就会重新优化：补偿性突变逐渐调整启动子强度、化解因基因组重排造成的复制–转录冲突，适合度随之恢复。这是「进化」而不是「设计」在起作用——与定向进化是同一个教训：有些优化问题，让进化去解决比人类理性设计更有效。' }
  ],
  terms: [
    { en: 'JCVI-Syn3.0', cn: 'JCVI-Syn3.0', def_en: 'The 2016 minimal cell: 531 kb, 473 genes, 180 minute doubling, smaller than any known autonomously replicating cell.', def_cn: '2016 年的最小细胞：531 kb、473 个基因、倍增 180 分钟，比任何已知能自主复制的细胞都小。' },
    { en: 'Quasi-essential gene', cn: '准必需基因', def_en: 'A gene not strictly required for survival but needed for robust growth. Overlooking this class is why the first minimal design produced no viable cell.', def_cn: '对存活不是严格必需、但稳健生长所必需的基因。忽略这一类正是第一版最小化设计造不出活细胞的原因。' },
    { en: 'Compensatory mutation', cn: '补偿性突变', def_en: 'A mutation that restores fitness lost to an earlier change, by readjusting expression balance or resolving conflicts rather than reversing the original edit.', def_cn: '通过重新调整表达平衡或化解冲突（而不是逆转原有改动）来恢复此前损失的适合度的突变。' },
    { en: 'Laboratory evolution', cn: '实验室进化', def_en: 'Propagating a strain for many generations under selection so that natural selection re-optimises it — here about 2,000 generations restored the lost fitness.', def_cn: '在选择条件下让菌株传代很多代，使自然选择重新优化它——这里约 2000 代恢复了损失的适合度。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How many of JCVI-Syn3.0\'s 473 genes have unknown function?',
      q_cn: 'JCVI-Syn3.0 的 473 个基因中有多少功能未知？',
      options: ['12', '49', '149', '249'],
      answer: 2,
      why_en: '149 — nearly a third. These are genes known to be required for life, because deleting them kills the cell, yet nobody knows what their products do.',
      why_cn: '149 个——接近三分之一。这些基因已知是生命所必需的（删掉细胞就死），但没人知道它们的产物在做什么。' },
    { type: 'mcq',
      q_en: 'What did the failure of the first minimal design reveal?',
      q_cn: '第一版最小化设计的失败揭示了什么？',
      options: ['That the chemistry used to synthesise the genome was making errors too often for a construct that size to assemble correctly', 'A class of quasi-essential genes needed for robust growth, not for survival', 'That transplantation itself does not work in Mycoplasma recipients', 'That a genome that small can no longer be replicated at all'],
      answer: 1,
      optionRefs: { 2: '5-6' },
      why_en: 'The early design used collective knowledge plus limited transposon data and produced no viable cell. Better transposon mutagenesis showed that essential and dispensable is too coarse a division — some genes are needed for the cell to grow well rather than merely to survive.',
      why_cn: '早期设计基于集体知识加有限的转座子数据，结果造不出活细胞。改进的转座子诱变表明「必需 vs 可有可无」这个二分太粗糙——有些基因是让细胞长得好所必需的，而不只是让它活着。' },
    { type: 'mcq',
      q_en: 'How was the fitness lost during minimisation recovered?',
      q_cn: '最小化过程中损失的适合度是怎么恢复的？',
      options: ['By adding the deleted quasi-essential genes back to the genome', 'By laboratory evolution over about 2,000 generations', 'By optimising the growth medium until doubling time fell', 'By lowering the culture temperature to slow the defect'],
      answer: 1,
      why_en: 'Nothing was redesigned. Free propagation let natural selection find compensatory mutations that readjusted promoter balance and resolved conflicts created by the rearrangement — evolution rather than design doing the optimisation.',
      why_cn: '没有做任何重新设计。自由传代让自然选择找到补偿性突变，重新调整启动子平衡、化解重排造成的冲突——是进化而不是设计完成了优化。' },
    { type: 'short',
      q_en: 'Why does JCVI-Syn3.0 grow more slowly after minimisation, and why can evolution fix it?',
      q_cn: '为什么 JCVI-Syn3.0 最小化之后长得更慢？为什么进化能修好它？',
      accept: ['regulatory network', 'co-evolved', 'promoter', 'compensatory', '2,000 generations'],
      answer_en: 'Because removing genes does not only remove functions — it disrupts a regulatory network that had been co-evolving for billions of years. The position of the replication origin, the relative order of genes along the chromosome, the balance of promoter strengths against one another: all of these were fine-tuned by long-term natural selection. A sudden large-scale deletion and rearrangement breaks that mutual coordination, so even though every gene that remains still works individually, the system as a whole is worse coordinated. The result is a fitness drop of more than fifty per cent, and a doubling time of a hundred and eighty minutes against sixty for Syn1.0. Evolution can fix it because the problem is one of re-tuning rather than missing parts. Propagating the cell freely for around two thousand generations allows natural selection to accumulate compensatory mutations that gradually readjust promoter strengths and resolve replication and transcription conflicts introduced by the rearrangement, and fitness is restored. That is evolution rather than design doing the optimisation — the same lesson as directed evolution, that some optimisation problems are better handed to evolution than solved by rational design.',
      answer_cn: '因为去掉基因不只是丢掉功能——它还打乱了一套已经协同进化了几十亿年的调控网络。复制起点的位置、基因沿染色体的相对顺序、启动子之间强度的平衡，全都是长期自然选择精细调校的结果。突然的大规模删除和重排破坏了这种相互配合，所以即使留下的每个基因单独都还正常工作，整个系统的协调性还是变差了。结果就是适合度下降超过 50%，倍增时间从 Syn1.0 的 60 分钟变成 180 分钟。进化之所以能修好它，是因为问题在于「需要重新调音」而不是「缺零件」。让细胞自由传代约 2000 代，自然选择就能积累补偿性突变，逐渐重新调整启动子强度、化解重排引入的复制与转录冲突，适合度随之恢复。这是进化而不是设计在做优化——与定向进化是同一个教训：有些优化问题交给进化比用理性设计去解更有效。'
    }
  ],
  oral: {
    q_en: 'Tell me about JCVI-Syn3.0.',
    q_cn: '讲讲 JCVI-Syn3.0。',
    model_en: 'JCVI-Syn3.0, from Hutchison and colleagues in Science in 2016, is the minimal cell: a five hundred and thirty-one kilobase genome with four hundred and seventy-three genes, smaller than any known autonomously replicating cell, doubling in a hundred and eighty minutes. Two things about it are worth dwelling on. The first is the most striking number in the lecture: a hundred and forty-nine of those four hundred and seventy-three genes are of completely unknown function — nearly a third. And that is not a matter of nobody having got round to studying them. These are genes we know are required for life, because deleting them kills the cell, and yet what their products do is a black box. It pushes the lecture\'s opening argument to its limit: even after reducing a genome to nothing but the absolutely necessary, a third of our understanding of what life fundamentally requires is missing. Minimal does not mean understood — which is exactly why synthetic cells are a scientific instrument and not merely an engineering product, because building the minimal genome forces you to go and find out what those genes are for. The second thing is the failure and the rescue. The first minimal design, based on collective knowledge plus limited transposon mutagenesis data, simply did not produce a viable cell. Better transposon mutagenesis then revealed a class of quasi-essential genes — needed for robust growth even though not strictly required for survival — showing that essential versus dispensable is too coarse a division. And even the successful design lost more than fifty per cent of its fitness immediately after minimisation. The reason is that deleting genes does not only remove functions, it disrupts a regulatory network that had co-evolved for billions of years: origin position, gene order, the balance of promoter strengths. Every remaining gene still works, but the system coordinates worse. The fix was not redesign but laboratory evolution — roughly two thousand generations of free propagation, during which compensatory mutations readjusted expression balance and resolved conflicts created by the rearrangement, and fitness was restored. Evolution, not design, did the optimisation.',
    checklist: ['Hutchison et al., Science 2016', '531 kb, 473 genes, smaller than any known autonomous cell', 'Doubling time 180 minutes, against 60 for Syn1.0', '149 of 473 genes have unknown function — nearly a third', 'Not unstudied: known to be required, but function unknown', 'Minimal does not mean understood', 'The first minimal design produced no viable cell', 'Revealed quasi-essential genes: needed for robust growth, not survival', 'Fitness dropped more than 50% after minimisation', 'Because deletion disrupts a co-evolved regulatory network', 'Origin position, gene order, promoter balance all fine-tuned by selection', 'Laboratory evolution over ~2,000 generations restored fitness', 'Compensatory mutations re-tuned expression — evolution, not design']
  }
},

{
  id: '5-8',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.8',
  enTitle: 'Other synthetic genomes, and mirror cells',
  cnTitle: '其他合成基因组，以及镜像细胞',
  slides: 'L11 s.22–23',
  coverage: 'full',
  coverageNote: 'The timeline and the mirror cell description are on the slides. That mirror life is not a hypothetical curiosity but an active safety controversy, with 38 scientists calling for a research halt in December 2024, is the beyond-the-slides context — and it is why this topic sits at the end of the course.',
  summary: {
    en: 'The timeline runs from viral genomes in 2000 to 2005, to bacterial genomes in the 2010s, to the first synthetic eukaryotic chromosomes in 2014 and recently all 17 in yeast. The frontier is mirror cells, based on reverse chirality: all living DNA uses right-handed nucleotides and all proteins left-handed amino acids, and synthetic biology puts a mirror cell on a possible path. That prospect is the subject of an active safety consensus against it.',
    cn: '时间线从 2000–2005 年的病毒基因组，到 2010 年代的细菌基因组，再到 2014 年首批合成真核染色体、以及近期酵母的全部 17 条。前沿是基于反向手性的镜像细胞：所有活体 DNA 使用右手核苷酸、所有蛋白使用左旋氨基酸，而合成生物学让镜像细胞成为一条可能的路径。这个前景正是一项反对它的活跃安全共识的主题。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.22', src: 'img/figures/L11_s22_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**镜像细胞之所以危险，是因为地球上所有的免疫系统和所有的天然捕食者，都是按「正确手性」进化出来的。**一个全镜像的细菌对它们**完全不可见**。\n\n' +
            '2024 年 12 月，38 位科学家在 Science 上联名呼吁**停止**以制造镜像细菌为目标的研究。',
  skipIt: '各个时间节点的年份、Sc2.0 的染色体数目，记个大概就行。**第 11–12 讲没有 RECAP 可引**，这是判断——但**镜像细胞为什么危险这条论证要能讲**，它是这门课里少有的、代价不是钱和时间而是安全的地方。',
  explain: [
    {
      q: '「手性」在这里到底意味着什么？',
      a: '**意味着生命的所有分子识别，都建立在一个统一的「左右手约定」上——而这个约定是可以被整体翻转的。**\n\n' +
         '**地球上所有生命共用同一套手性：**\n\n' +
         '**DNA 用右手的核苷酸。**\n\n' +
         '**蛋白用左旋的氨基酸。**\n\n' +
         '**为什么这很要紧？因为分子识别靠的是形状互补——而镜像分子的形状是配不上的。**\n\n' +
         '就像左手套不上右手。一个酶的活性口袋、一个抗体的结合面、一个受体——**它们全都是按现有手性演化出来的，遇到镜像分子完全认不出来。**\n\n' +
         '**（顺带一提，你在第 3-13 节见过这个概念的正面用法：flexizyme 能装 D-氨基酸，而 D-氨基酸做的肽正因为蛋白酶认不出来，才特别耐降解。那是把手性当优点用，只涉及一条肽。）**\n\n' +
         '**镜像细胞是把这件事推到极限：整个细胞——DNA、蛋白、膜——全部翻转。**\n\n' +
         '**注意「全部」这个词是关键。**只翻转一部分是做不出活细胞的，因为那些分子之间要互相识别。**要么全翻，要么不翻。**\n\n' +
         '**而全翻之后，它跟地球上现有的一切生命之间，就不存在分子识别了。**',
      takeaway: 'DNA 全用右手核苷酸、蛋白全用左旋氨基酸。分子识别靠形状互补，而镜像分子配不上——所以必须全翻。'
    },
    {
      q: '为什么「完全不被识别」是灾难而不是优点？',
      a: '**因为地球上所有的生物防御，靠的都是「识别」。**\n\n' +
         '把生态系统里限制一个细菌的力量列一遍，你会发现它们**全部**依赖分子识别：\n\n' +
         '**免疫系统** —— 抗体、T 细胞受体、先天免疫的模式识别受体，**全都是靠形状认出病原体的**。镜像细菌的表面分子它们一个都认不出来。\n\n' +
         '**噬菌体和捕食者** —— 噬菌体靠识别细菌表面的受体来吸附。**它们也认不出镜像的表面。**\n\n' +
         '**自然降解** —— 环境里的蛋白酶、核酸酶、以及以细菌为食的微生物，**用的都是手性特异的酶**。镜像细菌的蛋白和 DNA 它们**消化不了**。\n\n' +
         '**所以一个镜像细菌，对地球上每一种天然防御和每一个天然捕食者，都是不可见的。**\n\n' +
         '**它可能在没有任何生态制约的情况下扩散。**\n\n' +
         '**这就是那份共识声明的核心论证。**2024 年 12 月，**38 位科学家（包括 2 位诺贝尔奖得主和 16 位各国科学院院士）在 Science 上发表了 Adamala 等人的《Confronting risks of mirror life》**，呼吁停止以制造镜像细菌为目标的研究。\n\n' +
         '**他们的判断是：按化学合成和无细胞体系目前的发展轨迹，10 到 30 年内可能做得出来**，因此建议**不资助、不支持任何以此为明确目标的研究**。\n\n' +
         '**注意这份声明的性质：不是「先做出来再管控」，是「不要做」。**这在科学界是很罕见的表态。',
      takeaway: '免疫、噬菌体、自然降解全都靠分子识别，而它们对镜像分子一概失效。所以它可能不受任何生态制约地扩散。'
    },
    {
      q: '这份共识声明，跟这门课里别的生物安全手段是什么关系？',
      a: '**它是唯一一个「不要做」，而其它全都是「做，但加上刹车」。**\n\n' +
         '**回顾这门课里出现过的生物防控手段：**\n\n' +
         '**合成营养缺陷**（第 3-14 节）—— 让细胞依赖一个自然界不存在的 ncAA，逃逸就死。**可靠性来自化学，进化绕不过去。**\n\n' +
         '**遗传防火墙**（第 3-12 节）—— 重编码之后，外来基因读不进来、自己的基因也传不出去。\n\n' +
         '**水印**（第 5-6 节）—— 逃逸后可追溯到具体实验室和批次。\n\n' +
         '**杆状病毒不感染脊椎动物**（第 2-17 节）、**慢病毒要 BSL-2**（第 2-24 节）—— 按风险分级操作。\n\n' +
         '**这些全都属于「可以做，但要装上安全机制」。**\n\n' +
         '**而镜像细胞的共识是「不要做」。**\n\n' +
         '**为什么这次不一样？因为上面那些刹车对镜像细胞全部失效：**\n\n' +
         '**合成营养缺陷** —— 理论上仍可用，但一旦它获得了合成那个分子的能力，就没有第二道防线了。\n\n' +
         '**遗传防火墙** —— 它本来就跟所有生命不通话，防火墙这个概念在这里没有意义。\n\n' +
         '**追溯** —— 逃逸之后追溯到来源，并不能把它收回来。\n\n' +
         '**关键区别在于：其它风险都是「可控制的」，而镜像生命一旦扩散就没有任何自然的制约力量。**\n\n' +
         '**所以这一节值得当成整门课伦理讨论的落点**：**技术能力和「应不应该」是两件事，而后者需要在能力成熟之前就讨论清楚。**',
      takeaway: '其它手段都是「做但加刹车」，这次是「不要做」——因为一旦扩散，没有任何自然力量能制约它。'
    }
  ],
  points: [
    { term: 'Timeline 2000 to 2005', en: 'Viral genomes.', cn: '病毒基因组。' },
    { term: 'Timeline the 2010s', en: 'Bacterial genomes.', cn: '细菌基因组。' },
    { term: 'Timeline 2014 onward', en: 'The first synthetic eukaryotic chromosomes, and recently all 17 in yeast.', cn: '首批合成的真核染色体，以及近期酵母的全部 17 条。' },
    { term: 'The reference', en: 'James et al., "The design and engineering of synthetic genomes", Nature Reviews Genetics 2024.', cn: 'James 等，《合成基因组的设计与工程》，Nature Reviews Genetics 2024。' },
    { term: 'What mirror cells would be', en: 'Synthesis of cells based on reverse chirality.', cn: '基于反向手性的细胞合成。' },
    { term: 'The chirality of life', en: 'The DNA of all living organisms is made from right-handed nucleotides, while proteins — the building blocks of cells — are made from left-handed amino acids.', cn: '所有生物的 DNA 都由右手性核苷酸构成，而作为细胞构件的蛋白则由左旋氨基酸构成。' },
    { term: 'Where the field stands', en: 'With the tools of synthetic biology, we are on a possible path to a mirror synthetic cell.', cn: '借助合成生物学的工具，我们正走在一条可能通向镜像合成细胞的路上。' }
  ],
  beyondPoints: [
    { term: 'What "all 17" refers to', en: 'The Sc2.0 Synthetic Yeast Genome Project — an international collaboration redesigning and synthesising all 16 natural chromosomes of S. cerevisiae plus one designed tRNA neochromosome, 17 in total. It is the largest eukaryotic genome synthesis effort to date, and unlike the prokaryotic recoded strains it is the first systematic redesign of an entire eukaryotic chromosome set.', cn: '这指的是酵母基因组合成计划 Sc2.0——国际协作把酿酒酵母全部 16 条天然染色体，加上一条人工设计的 tRNA「新染色体」，共 17 条，逐条重新设计合成。这是迄今规模最大的真核基因组合成工程；与原核的重编码菌株不同，这是首次对整套真核染色体做系统性重新设计。' },
    { term: 'Why mirror life would be dangerous', en: 'Biological recognition — immune surveillance, phage predation, natural biodegradation — all depend on molecules fitting partners of the correct handedness. A fully mirror-image bacterium, with mirror DNA, mirror proteins and a mirror membrane, would be invisible to essentially every natural immune defence and every natural predator on Earth, because none of them evolved to recognise a mirror-chirality surface.', cn: '生物学上的识别——免疫监视、噬菌体侵染、天然降解——全都依赖分子与正确手性的搭档相匹配。一个彻底镜像的细菌（镜像 DNA、镜像蛋白、镜像膜）对地球上几乎所有天然免疫系统和天然捕食者都是隐形的，因为没有任何天然识别系统是为镜像手性表面进化出来的。' },
    { term: 'The 2024 consensus statement', en: 'In December 2024, 38 scientists — including two Nobel laureates and 16 members of national science academies — published a warning in Science, Adamala et al., "Confronting risks of mirror life", calling for a halt to research aimed at creating mirror bacteria. They project that building one may be possible within 10 to 30 years given the trajectory of chemical synthesis and cell-free systems, and recommend no funding or support for research with mirror-cell creation as its explicit goal.', cn: '2024 年 12 月，38 位科学家——包括 2 位诺贝尔奖得主和 16 位各国科学院院士——在 Science 上发表警告（Adamala 等，《直面镜像生命的风险》），呼吁停止以创造镜像细菌为目标的研究。他们预计，按化学合成和无细胞体系的发展轨迹，10 到 30 年内可能造得出来，并建议不要资助或支持以创造镜像细胞为明确目标的研究。' },
    { term: 'Why this topic closes the course', en: 'It is a mirror, literally, of everything the course has taught. Every tool covered here leads towards this in principle, which is why the responsible boundaries of their use are worth learning alongside the techniques themselves. It is not distant science fiction but a live discussion in which the field has already taken a precautionary position.', cn: '它是整门课所教内容的一面镜子（字面意义上）。这里讲过的每一项工具原则上都通向这里，所以负责任的使用边界值得和技术本身一起学。这不是遥远的科幻设想，而是当前学界正在认真讨论、并已采取预防性立场的真实议题。' }
  ],
  terms: [
    { en: 'Sc2.0', cn: 'Sc2.0 计划', def_en: 'The Synthetic Yeast Genome Project, redesigning and synthesising all 16 S. cerevisiae chromosomes plus a designed tRNA neochromosome — the largest eukaryotic genome synthesis effort.', def_cn: '酵母基因组合成计划，重新设计并合成酿酒酵母全部 16 条染色体加一条人工设计的 tRNA 新染色体——迄今最大的真核基因组合成工程。' },
    { en: 'Chirality', cn: '手性', def_en: 'Handedness of a molecule. Life uses right-handed nucleotides and left-handed amino acids universally, and all biological recognition depends on that convention.', def_cn: '分子的手性。生命普遍使用右手性核苷酸和左旋氨基酸，而所有生物学识别都依赖这一约定。' },
    { en: 'Mirror cell', cn: '镜像细胞', def_en: 'A hypothetical organism built entirely from the opposite enantiomers, which would be unrecognisable to natural immune systems and predators.', def_cn: '一种完全由相反对映体构成的假想生物，对天然免疫系统和捕食者而言无法识别。' },
    { en: 'Precautionary position', cn: '预防性立场', def_en: 'Declining to pursue a line of research because the projected risk is judged unacceptable, as adopted for mirror bacteria in the 2024 Science statement.', def_cn: '因为预期风险被判定为不可接受而放弃某个研究方向，正如 2024 年 Science 声明对镜像细菌所采取的立场。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What chirality does natural life use?',
      q_cn: '天然生命使用什么手性？',
      options: ['Left-handed DNA and right-handed amino acids', 'Right-handed nucleotides and left-handed amino acids', 'Both handednesses are used equally', 'Chirality varies between bacteria and eukaryotes'],
      answer: 1,
      optionNotes: {
        0: { en: 'That is the natural convention inverted, which is the definition of a mirror cell rather than a description of life. Natural life is right-handed nucleotides plus left-handed amino acids, and flipping both at once is exactly the organism this section warns about.', cn: '这正好是天然约定的翻转，也就是 mirror cell 的定义，而不是对天然生命的描述。天然生命是右手性的 nucleotides 加左旋的 amino acids，两者同时翻转得到的正是这一节所警告的那种生物。' }
      },
      why_en: 'Right-handed nucleotides and left-handed amino acids, universally. Every biological recognition event — immune surveillance, phage binding, enzymatic degradation — evolved against that convention.',
      why_cn: '普遍是右手性核苷酸和左旋氨基酸。每一个生物学识别事件——免疫监视、噬菌体结合、酶促降解——都是针对这一约定进化出来的。' },
    { type: 'mcq',
      q_en: 'Why would a mirror bacterium be dangerous?',
      q_cn: '为什么镜像细菌会有危险？',
      options: ['It would grow faster than any natural bacterium in the same niche', 'Immune systems, phages and biodegradation would all fail to recognise it', 'It would produce toxins no natural organism has encountered before, so nothing would carry resistance to them', 'It would outcompete plants for light, water and mineral nutrients'],
      answer: 1,
      why_en: 'Nothing on Earth evolved to recognise a mirror-chirality surface, so an organism built entirely from opposite enantiomers would escape immune surveillance, phage predation and natural biodegradation simultaneously.',
      why_cn: '地球上没有任何东西是为识别镜像手性表面而进化出来的，所以一个完全由相反对映体构成的生物会同时逃脱免疫监视、噬菌体捕食和天然降解。' },
    { type: 'mcq',
      q_en: 'What did 38 scientists call for in December 2024?',
      q_cn: '2024 年 12 月，38 位科学家呼吁了什么？',
      options: ['A coordinated increase in funding for mirror-cell research', 'A halt to all research aimed at creating mirror bacteria, funding included', 'A new international agency empowered to license mirror-life experiments and inspect the laboratories doing them', 'Mandatory watermarking of every synthetic genome that is built'],
      answer: 1,
      optionRefs: { 3: '5-6' },
      why_en: 'The Science statement, Adamala et al., "Confronting risks of mirror life", included two Nobel laureates and 16 national academy members, and projected that building one may become possible within 10 to 30 years.',
      why_cn: '这份发表在 Science 的声明（Adamala 等，《直面镜像生命的风险》）包含 2 位诺贝尔奖得主和 16 位各国科学院院士，并预计 10 到 30 年内可能造得出来。' },
    { type: 'short',
      q_en: 'What are mirror cells, and why have scientists called for a research halt?',
      q_cn: '什么是镜像细胞？科学家为什么呼吁停止相关研究？',
      accept: ['chirality', 'right-handed', 'left-handed', 'invisible', 'immune', '38'],
      answer_en: 'A mirror cell would be an organism built entirely from the opposite enantiomers of life\'s molecules. All living DNA is made from right-handed nucleotides and all proteins from left-handed amino acids, and a mirror organism would invert both — mirror DNA, mirror proteins, a mirror membrane. With the tools of synthetic biology we are on a possible path to building one. The danger is that biological recognition is entirely chirality-dependent. Immune surveillance, phage predation and natural biodegradation all work by molecules fitting partners of the correct handedness, and nothing on Earth ever evolved to recognise a mirror-chirality surface. So a fully mirror-image bacterium would be effectively invisible to essentially every natural immune defence and every natural predator simultaneously. In December 2024, thirty-eight scientists — including two Nobel laureates and sixteen members of national science academies — published a warning in Science, Adamala and colleagues, "Confronting risks of mirror life", calling for a halt to research aimed at creating mirror bacteria. They projected that it may become possible within ten to thirty years given the trajectory of chemical synthesis and cell-free systems, and recommended no funding or support for work with mirror-cell creation as its explicit goal. It is worth noting that this is a live position the field has already taken, not a speculative concern.',
      answer_cn: '镜像细胞是指完全由生命分子的相反对映体构成的生物。所有活体 DNA 都由右手性核苷酸构成、所有蛋白都由左旋氨基酸构成，而镜像生物会把两者都反过来——镜像 DNA、镜像蛋白、镜像膜。借助合成生物学的工具，我们正走在一条可能造出它的路上。危险在于生物学识别完全依赖手性。免疫监视、噬菌体捕食和天然降解，都是靠分子与正确手性的搭档相匹配来实现的，而地球上从未有任何东西为识别镜像手性表面而进化。所以一个彻底镜像的细菌会同时对几乎所有天然免疫防御和天然捕食者隐形。2024 年 12 月，38 位科学家——包括 2 位诺贝尔奖得主和 16 位各国科学院院士——在 Science 上发表警告（Adamala 等，《直面镜像生命的风险》），呼吁停止以创造镜像细菌为目标的研究。他们预计按化学合成和无细胞体系的发展轨迹，10 到 30 年内可能变得可行，并建议不要资助或支持以创造镜像细胞为明确目标的工作。值得注意的是，这是学界已经采取的现实立场，而不是一个空想的担忧。'
    }
  ],
  oral: {
    q_en: 'Where has synthetic genome work got to, and what is the frontier?',
    q_cn: '合成基因组的研究进展到哪里了？前沿是什么？',
    model_en: 'The timeline is straightforward. From two thousand to two thousand and five, viral genomes. Through the twenty-tens, bacterial genomes — that is the JCVI work and the recoded E. coli strains. Then from twenty-fourteen, the first synthetic eukaryotic chromosomes, and recently all seventeen in yeast. That last figure refers to the Sc2.0 Synthetic Yeast Genome Project, an international collaboration that has redesigned and synthesised all sixteen natural S. cerevisiae chromosomes plus one designed tRNA neochromosome. It is the largest eukaryotic genome synthesis effort to date and the first systematic redesign of an entire eukaryotic chromosome set. The frontier, though, is mirror cells: synthesis of cells based on reverse chirality. The DNA of all living organisms is made from right-handed nucleotides while proteins are made from left-handed amino acids, and with the tools of synthetic biology we are on a possible path to a mirror synthetic cell. I would want to be clear that this is not a hypothetical curiosity but an active safety controversy. Biological recognition is entirely chirality-dependent — immune surveillance, phage predation, natural biodegradation all work by molecules fitting partners of the correct handedness — and nothing on Earth ever evolved to recognise a mirror-chirality surface. A fully mirror-image bacterium, with mirror DNA, mirror proteins and a mirror membrane, would therefore be invisible to essentially every natural immune defence and every natural predator simultaneously. In December twenty-twenty-four, thirty-eight scientists including two Nobel laureates and sixteen members of national science academies published a statement in Science, "Confronting risks of mirror life", calling for a halt to research aimed at creating mirror bacteria, projecting that it may be possible within ten to thirty years, and recommending no funding for work with that explicit goal. I think it is significant that this topic closes the course, because it is quite literally a mirror of everything taught in it: every tool in this course leads towards it in principle, which is why the responsible boundaries of their use are worth learning alongside the techniques.',
    checklist: ['2000-2005: viral genomes', '2010s: bacterial genomes', '2014 onward: synthetic eukaryotic chromosomes, recently all 17 in yeast', 'That is Sc2.0: 16 natural chromosomes plus a designed tRNA neochromosome', 'Largest eukaryotic synthesis effort; first systematic eukaryotic redesign', 'Frontier: mirror cells, based on reverse chirality', 'Life uses right-handed nucleotides and left-handed amino acids', 'Danger: all biological recognition is chirality-dependent', 'Immune surveillance, phage predation, biodegradation all require correct handedness', 'A mirror bacterium would be invisible to all of them at once', 'December 2024: 38 scientists in Science called for a research halt', 'Two Nobel laureates, 16 national academy members', 'Projected feasible in 10-30 years; recommend no funding for that goal', 'Closes the course because every tool taught leads towards it in principle']
  }
},

{
  id: '5-9',
  chapter: 5,
  lecture: 'Lecture 11',
  section: '5.9',
  enTitle: 'Chassis cells, artificial cells and protocells',
  cnTitle: '底盘细胞、人工细胞与原细胞',
  slides: 'L11 s.24–27',
  coverage: 'full',
  coverageNote: 'All three definitions are quoted verbatim from the slide because the terms are routinely conflated. Arranging them along an axis of how much extant biological material each uses is what makes them separable.',
  summary: {
    en: 'Three terms that are often conflated. A chassis cell is designed for industrial production with a high degree of controllability and efficiency. An artificial cell is built in the laboratory, at least partially, using extant genetic and biological material. A protocell is an in vitro model of a minimal cell, usually biological material encapsulated in liposomes. They differ in where you start and how much living material you borrow.',
    cn: '三个经常被混用的术语。底盘细胞是为工业生产设计的，具有高度的可控性和效率。人工细胞是在实验室中（至少部分地）用现存的遗传与生物材料搭建起来的。原细胞是最小细胞的体外模型，通常是被包裹在脂质体中的生物材料。它们的区别在于你从哪里出发、以及借用了多少活体材料。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L11 s.24', src: 'img/figures/L11_s24_1.webp' },
    { slide: 'L11 s.25', src: 'img/figures/L11_s25_1.webp' },
    { slide: 'L11 s.26', src: 'img/figures/L11_s26_1.webp' },
    { slide: 'L11 s.27', src: 'img/figures/L11_s27_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '三个词按「借用了多少活体材料」排开就清楚了：**底盘细胞**（从活细胞出发，为工业改造）→ **人工细胞**（实验室里部分搭建）→ **原细胞**（几乎不借用活细胞，纯自底向上）。\n\n' +
            '而**原细胞其实就是「装在脂质体里的 PURE 体系」**。',
  skipIt: '60 小时连续生产、10 倍提升这些数字不用背。**第 11–12 讲没有 RECAP 可引**，这是判断——但三个词的排序判据（**你从哪里出发**）要能讲，因为它们在文献里经常被混用。',
  explain: [
    {
      q: '三个词怎么才能分清？',
      trace: {
        what: '三个经常被混用的词：**底盘细胞（chassis cell）**是为工业生产改造的活细胞；**人工细胞（artificial cell）**是在实验室里（至少部分）用现存生物材料搭出来的；**原细胞（protocell）**是最小细胞的体外模型，通常是包在脂质体里的生物材料。',
        from: '区分它们只有一个判据——**你从哪里出发**。三者按「借用了多少活体材料」排成一条线，正好对应第 5-2 节那条自顶向下走到自底向上的轴：底盘细胞从活细胞出发，人工细胞部分搭建，原细胞几乎不借活细胞。',
        to: '目的也跟着排开：底盘细胞服务工业生产，人工细胞是研究平台，原细胞是生命起源的模型。而原细胞拆开看，其实就是「装进脂质体里的 PURE 体系」（36 种酶+核糖体+能量营养，第 3-6 节原样照搬），多加一层膜完成了从「反应」到「细胞」的概念跳跃。',
        family: '原细胞用的脂质体跟第 4-17 节筛选用的液滴，物理尺度几乎一样（约 2 µm），是同一套胶体化学（乳液、脂质自组装）——只是一个用来筛选，一个用来造真正的细胞。'
      },
      a: '**判据只有一个：你从哪里出发。**\n\n' +
         '**底盘细胞（chassis cell）** —— **从一个活细胞出发**，为工业生产改造它。目标是可控性和效率。\n\n' +
         '**人工细胞（artificial cell）** —— **在实验室里搭建**，但仍然用了现存的遗传和生物材料。它是概念验证和研究平台。\n\n' +
         '**原细胞（protocell）** —— **几乎完全不借用活细胞**，从脂质体和纯化组分出发。它是生命起源的模型。\n\n' +
         '**把它们按「借用了多少活体材料」排成一条线，正好是从自顶向下走到自底向上**（第 5-2 节那条轴）。\n\n' +
         '**而三者的目的也跟着排开了：**\n\n' +
         '底盘细胞 → **工业生产**。\n\n' +
         '人工细胞 → **研究平台**。\n\n' +
         '原细胞 → **回答生命起源**。\n\n' +
         '**所以看到这三个词，问一句「它从哪里出发、要回答什么问题」，就不会混了。**它们不是同一件事的三个阶段，是三个不同目的的东西恰好长得有点像。',
      takeaway: '判据是「从哪里出发」。底盘从活细胞出发做工业，人工细胞部分搭建做研究，原细胞从非生命出发问起源。'
    },
    {
      q: '为什么说「天然细胞对工业来说是个黑箱」？',
      a: '**因为进化优化的目标和工业要的目标，正好相反。**\n\n' +
         '**工业要什么**：每一批、每一个反应器，产量和纯度都一模一样。**可预测、可重复、无惊喜。**\n\n' +
         '**进化优化出了什么**：能在变化的环境里生存、而且**still evolvable（还能继续演化）**的细胞。\n\n' +
         '所以天然细胞会**动态调整代谢**——根据营养、pH、菌群密度不停地改变自己的行为。\n\n' +
         '**这种灵活性在野外是巨大的优势，在工厂里是不可预测性的来源。**\n\n' +
         '**所以底盘细胞工程做的事，很大程度上是「把进化给它的灵活性拆掉」，换成工程师要的刚性和可预测性。**\n\n' +
         '**这句话值得停一下：你是在主动降低一个生物系统的适应能力。**\n\n' +
         '**而这跟这门课里几次「拆掉宿主的质控」是同一个模式的延伸：**\n\n' +
         '第 2-5 节敲掉 Lon、第 2-13 节敲掉 trxB/gor、第 3-9 节删掉编辑域——**每一次都是「宿主的某个机制在尽职工作，而它妨碍了你」。**\n\n' +
         '**这一次拆的不是某个机制，是「适应性」本身。**\n\n' +
         '**这也正好回到第 5-1 节那个 PLP 例子：细胞的稳健性对生物学是好消息，对工程师是坏消息。**底盘细胞就是这个判断的产物。',
      takeaway: '进化优化的是「在变化中生存」，工业要的是「每批都一样」。底盘细胞工程就是在拆掉进化给的灵活性。'
    },
    {
      q: '原细胞跟这门课前面哪些内容是同一个东西？',
      a: '**两处，而且都很直接——认出来之后这一节就几乎不用背了。**\n\n' +
         '**一、原细胞 = 装在脂质体里的 PURE 体系。**\n\n' +
         '幻灯片列的原细胞组分是：**36 个酶 + 核糖体 + 能量和营养**。\n\n' +
         '**那就是第 3-6 节的 PURE 重构体系，一字不差。**\n\n' +
         '**原细胞做的事，只是把它装进一个脂质囊泡里。**\n\n' +
         '**这一步看起来很小，但它完成了一次概念上的跳跃：从「反应」变成「细胞」。**\n\n' +
         '**因为有了膜，你就有了「里面」和「外面」**——有了选择性通透、有了「在里面积累产物、把废物排出去」的可能。**第 3-4 节那个「试管里没有清道夫、磷酸只会一直累积」的问题，原则上就有解了。**\n\n' +
         '**二、原细胞的脂质体 ≈ 第 4-17 节筛选用的液滴。**\n\n' +
         '两者的物理尺度几乎一样（约 2 µm），而且用的是同一套胶体化学——乳液和脂质自组装。\n\n' +
         '**区别只在目的：液滴是为了做选择（把一锅切成上亿个独立小实验），原细胞是为了造一个真正的细胞。**\n\n' +
         '**同一个物理手段，两个完全不同的科学目标。**',
      takeaway: '原细胞就是装进脂质体的 PURE 体系；而那个脂质体跟第 4-17 节的筛选液滴是同一套胶体化学，只是目的不同。'
    }
  ],
  points: [
    { term: 'The framing', en: 'Synthetic cells: specialised and minimal, growth-efficient, more robust against mutations.', cn: '合成细胞：专门化且最小化、生长高效、对突变更稳健。' },
    { term: 'Chassis cell', en: 'Cells designed for use in industrial production processes with a high degree of controllability and efficiency.', cn: '为工业生产过程设计的细胞，具有高度的可控性和效率。' },
    { term: 'Artificial cell', en: 'A cell built in the laboratory, at least partially, with resources of extant genetic and other biological material.', cn: '在实验室中（至少部分地）用现存的遗传材料和其他生物材料构建的细胞。' },
    { term: 'Protocell', en: 'An in vitro model of a minimal cell, usually containing some biological material encapsulated in liposomes or other lipidic vesicles.', cn: '最小细胞的体外模型，通常包含被封装在脂质体或其他脂质囊泡中的生物材料。' },
    { term: 'Chassis cells in industry', en: 'For the biotechnology industry, producing chemicals and pharmaceuticals. Microbial cells are widely used and extremely profitable, given the catalytic power of enzymes and the large product repertoire.', cn: '用于生物技术产业，生产化学品和药物。微生物细胞使用广泛且利润极高，因为酶的催化能力强、产品谱系广。' },
    { term: 'The problem with natural cells', en: 'They are optimised by evolution to survive under changing conditions and to be evolvable — that is, still a black box, while total control is what industry wants.', cn: '它们是被进化优化来应对变化的环境、并保持可进化性的——也就是说仍然是个黑箱，而工业想要的是完全的控制。' },
    { term: 'Protocell components', en: 'Compartment: lipid vesicles, the simplest and probably also the original way. Protein synthesis: reconstructed cell-free systems, 36 enzymes plus ribosomes plus energy and nutrients. Self-reproduction: a basic set of genes.', cn: '区室：脂质囊泡，最简单、也很可能是最原始的方式。蛋白合成：重构的无细胞体系，36 种酶加核糖体加能量和营养。「自我复制」：一套基本的基因。' },
    { term: 'Production and uses', en: 'Platforms include microfluidics and biotechnological bioreactors, up to 60 hours of continuous production and up to a 10-fold increase over batch mode. Uses include testing artificial genomes and artificial metabolic pathways.', cn: '生产平台包括微流控和生物技术反应器，可连续生产长达 60 小时，比批次模式最多提高 10 倍。用途包括检验人工基因组和人工代谢通路。' }
  ],
  beyondPoints: [
    { term: 'Arrange them by how much extant material each uses', en: 'A chassis cell starts from a living cell and modifies it for industrial production. An artificial cell is built in the laboratory using some natural material — a proof of concept or research platform. A protocell is purely bottom-up, using almost no living cell at all, and serves as a model for the origin of life.', cn: '按「用了多少现成生物材料」排一条轴：底盘细胞从活细胞出发、为工业生产而改造；人工细胞在实验室搭建、部分使用天然材料，是概念验证或研究平台；原细胞是纯粹自底向上的，几乎不用活细胞，作为生命起源的模型。' },
    { term: 'The deciding question is where you start', en: 'Starting from a living cell with industrial efficiency as the goal makes it a chassis cell. Building partly from parts in the laboratory makes it an artificial cell. Assembling entirely from non-living material, liposomes and purified enzymes, makes it a protocell.', cn: '判断该用哪个词，关键在于「你从哪里出发」：从活细胞出发、目标是工业效率，就是底盘细胞；在实验室里（部分）从零件搭建，是人工细胞；完全用非生命材料（脂质体、纯化的酶）从头拼，是原细胞。' },
    { term: 'Why a natural cell is a black box for industry', en: 'Industrial production wants identical yield and purity from every batch and every reactor. But natural cells were optimised by selection to cope with changing environments, dynamically adjusting metabolism to nutrients, pH and population density. That flexibility is an asset in the wild and a source of unpredictability in a factory. Chassis cell engineering is largely about removing the flexibility evolution gave, replacing it with the rigidity and predictability an engineer wants.', cn: '工业生产要的是每一批次、每一个反应器都一样的产量和纯度。但天然细胞是被选择优化来应对环境变化的——它会根据营养、pH、群体密度动态调整代谢。这种灵活性在野外是优势，在工厂里却是不可预测性的来源。底盘细胞工程在很大程度上就是把进化赋予的灵活性去掉，换成工程师想要的刚性与可预测性。' },
    { term: 'A protocell is a PURE system in a liposome', en: 'The thirty-six enzymes plus ribosomes plus energy regeneration is exactly the reconstituted PURE system from the cell-free lecture. A protocell simply puts it inside a lipid vesicle, adding a membrane as a boundary and turning translation-in-a-tube into translation-inside-a-closed-sphere. That step looks small but completes a conceptual jump from reaction to cell: with a membrane you have inside and outside, selective permeability, and the possibility of accumulating product while excreting waste.', cn: '36 种酶加核糖体加能量再生，正是无细胞那一讲里的重构 PURE 体系。原细胞只是把它装进一个脂质囊泡，多加了一层膜作为边界，把「在试管里翻译」变成「在一个封闭小球里翻译」。这一步看似简单，却完成了从「反应」到「细胞」的概念跃迁：有了膜就有了内外之分、有了选择性通透，也就有了把产物留在里面积累、把废物排出去的可能。' },
    { term: 'And it is the sibling of droplet selection', en: 'The roughly two-micrometre microfluidic droplet from the selection lecture and the protocell liposome are almost identical in physical scale. That is no coincidence: both exploit the same colloid chemistry, emulsions and lipid self-assembly, to create an isolated micro-reaction space. Only the purpose differs — droplets for selection, protocells for building something that is genuinely a cell.', cn: '筛选那一讲里约 2 µm 的微流控液滴和原细胞的脂质体在物理尺度上几乎一样。这不是巧合：两者都在利用同一套胶体化学（乳液、脂质自组装）去创造一个隔离的微反应空间。只是目的不同——液滴是为了筛选，原细胞是为了构建一个真正意义上的细胞。' }
  ],
  terms: [
    { en: 'Chassis cell', cn: '底盘细胞', def_en: 'A living cell engineered for industrial production, prized for controllability and efficiency rather than for adaptability.', def_cn: '为工业生产而改造的活细胞，看重的是可控性和效率而非适应性。' },
    { en: 'Artificial cell', cn: '人工细胞', def_en: 'A cell built at least partially in the laboratory from extant genetic and biological material — a research platform rather than an industrial tool.', def_cn: '至少部分地在实验室中用现存遗传与生物材料构建的细胞——是研究平台而非工业工具。' },
    { en: 'Liposome', cn: '脂质体', def_en: 'A lipid vesicle used as the compartment of a protocell. The simplest, and probably the original, way to create an inside and an outside.', def_cn: '用作原细胞区室的脂质囊泡。这是创造「内」与「外」最简单、也很可能是最原始的方式。' },
    { en: 'Metabolic controllability', cn: '代谢可控性', def_en: 'The degree to which a cell\'s behaviour is predictable and fixed rather than dynamically self-adjusting — what chassis engineering aims to increase.', def_cn: '细胞行为可预测、固定而非动态自我调整的程度——底盘工程正是要提高这一点。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which term describes a cell designed for industrial production with high controllability?',
      q_cn: '哪个术语指为工业生产设计、具有高度可控性的细胞？',
      options: ['Artificial cell', 'Protocell', 'Chassis cell', 'Minimal cell'],
      answer: 2,
      optionRefs: { 3: '5-7' },
      optionNotes: {
        0: { en: 'The three terms are separated by where you start. An artificial cell is assembled in the laboratory, at least partly from extant biological material, and serves as a proof of concept or research platform; industrial controllability is not its defining criterion.', cn: '这三个词是按「从哪里出发」区分的。artificial cell 是在实验室里（至少部分地）用现存生物材料搭起来的，充当概念验证或研究平台；工业可控性不是它的判据。' },
        1: { en: 'A protocell sits at the bottom-up end of that same axis: a PURE system inside a liposome, built as a model for the origin of life. It borrows almost no living material and is not a production host at all.', cn: 'protocell 位于同一条轴的自底向上那一端：装在 liposome 里的 PURE 体系，用作生命起源的模型。它几乎不借用活体材料，根本不是生产宿主。' }
      },
      why_en: 'A chassis cell starts from a living cell and is engineered for industrial efficiency. An artificial cell is a laboratory construction, and a protocell is a bottom-up in vitro model.',
      why_cn: '底盘细胞从活细胞出发，为工业效率而改造。人工细胞是实验室构建物，原细胞则是自底向上的体外模型。' },
    { type: 'mcq',
      q_en: 'Why are natural microbial cells described as still a black box for industry?',
      q_cn: '为什么天然微生物细胞对工业来说「仍然是个黑箱」？',
      options: ['The genomes of the strains used in industry have never been sequenced, so their metabolism cannot be modelled', 'They were optimised to adapt and stay evolvable, so they act unpredictably', 'They cannot be cultured at anything like production scale', 'They grow too slowly to support an industrial fermentation'],
      answer: 1,
      why_en: 'The flexibility that makes a cell fit in the wild — adjusting metabolism to nutrients, pH and density — is exactly what makes batch-to-batch behaviour unpredictable in a factory.',
      why_cn: '让细胞在野外适应良好的那种灵活性——根据营养、pH 和密度调整代谢——恰恰是让工厂里批次间行为不可预测的原因。' },
    { type: 'mcq',
      q_en: 'What is a protocell essentially made of?',
      q_cn: '原细胞本质上由什么构成？',
      options: ['A minimised bacterial genome running inside the natural membrane of the cell it was transplanted into', 'A reconstituted cell-free system of purified enzymes inside a lipid vesicle', 'A chassis strain with whole pathways deleted for industrial use', 'A droplet of oil carrying DNA, with no protein machinery'],
      answer: 1,
      optionRefs: { 0: '5-7' },
      optionNotes: {
        2: { en: 'A strain with pathways deleted is still a living cell modified top-down, which is the chassis definition. A protocell is assembled in the opposite direction, from purified components and a lipid vesicle, with no cell as a starting point.', cn: '删掉若干通路的菌株仍然是一个被自顶向下改造过的活细胞——那是 chassis cell 的定义。protocell 是反方向拼起来的：用纯化组分加脂质囊泡，起点上根本没有细胞。' }
      },
      why_en: 'It is a PURE system inside a liposome. Adding the membrane is what turns translation in a tube into translation inside a closed compartment, which is the conceptual jump from reaction to cell.',
      why_cn: '它就是装在脂质体里的 PURE 体系。加上膜，才把「试管里的翻译」变成「封闭区室内的翻译」，这是从反应到细胞的概念跃迁。' },
    { type: 'short',
      q_en: 'Define chassis cell, artificial cell and protocell, and say what distinguishes them.',
      q_cn: '定义底盘细胞、人工细胞和原细胞，并说明它们的区别。',
      accept: ['industrial', 'laboratory', 'liposome', 'where you start', 'bottom-up'],
      answer_en: 'A chassis cell is a cell designed for use in industrial production processes with a high degree of controllability and efficiency. An artificial cell is a cell built in the laboratory, at least partially, using resources of extant genetic and other biological material. A protocell is an in vitro model of a minimal cell, usually containing some biological material encapsulated in liposomes or other lipidic vesicles. The clean way to separate them is by where you start and how much living material you borrow. A chassis cell starts from a living cell and modifies it, with industrial efficiency as the goal. An artificial cell is partly assembled from parts in the laboratory and serves as a proof of concept or research platform. And a protocell is purely bottom-up, using essentially no living cell at all, and serves as a model for the origin of life. It is worth noticing that a protocell is really a PURE system inside a liposome — the thirty-six enzymes, ribosomes and energy regeneration are exactly the reconstituted cell-free system, with a membrane added to create an inside and an outside.',
      answer_cn: '底盘细胞是为工业生产过程设计的细胞，具有高度的可控性和效率。人工细胞是在实验室中（至少部分地）用现存遗传与其他生物材料构建的细胞。原细胞是最小细胞的体外模型，通常包含被封装在脂质体或其他脂质囊泡中的生物材料。区分它们最干净的办法是看「你从哪里出发、借用了多少活体材料」。底盘细胞从活细胞出发加以改造，目标是工业效率。人工细胞在实验室里部分地从零件组装起来，充当概念验证或研究平台。原细胞则是纯粹自底向上的，几乎完全不用活细胞，作为生命起源的模型。值得注意的是，原细胞其实就是装在脂质体里的 PURE 体系——那 36 种酶、核糖体和能量再生正是重构的无细胞系统，只是加了一层膜来创造出「内」与「外」。'
    }
  ],
  oral: {
    q_en: 'Distinguish chassis cells, artificial cells and protocells.',
    q_cn: '区分底盘细胞、人工细胞和原细胞。',
    model_en: 'These three terms get conflated constantly, but the definitions are distinct. A chassis cell is a cell designed for use in industrial production processes, with a high degree of controllability and efficiency. An artificial cell is a cell built in the laboratory, at least partially, using resources of extant genetic and other biological material. And a protocell is an in vitro model of a minimal cell, usually containing biological material encapsulated in liposomes or other lipidic vesicles. The way to keep them apart is to arrange them along an axis of how much extant living material each one borrows, or equivalently, where you start. Chassis cells start from a living cell and modify it, and the goal is industrial: microbial production of chemicals and pharmaceuticals is extremely profitable because of the catalytic power of enzymes and the breadth of the product repertoire. The problem is that natural cells were optimised by evolution to survive changing conditions and to remain evolvable — which means they dynamically adjust their metabolism to nutrients, pH and population density. That flexibility is an asset in the wild and a liability in a factory, where you want identical yield and purity from every batch. So the slide describes natural cells as still a black box, while total control is what industry wants, and chassis engineering is largely about stripping out evolved flexibility and replacing it with engineered rigidity. Artificial cells sit in the middle: partly assembled in the laboratory from natural material, functioning as a proof of concept or a research platform. Protocells are purely bottom-up. The compartment is a lipid vesicle, the simplest and probably also the original way; protein synthesis comes from a reconstituted cell-free system, thirty-six enzymes plus ribosomes plus energy and nutrients; and self-reproduction from a basic set of genes. That component list is worth recognising — it is exactly the PURE system from the cell-free lecture, now inside a membrane. Adding that membrane is a small technical step but a large conceptual one, because it creates an inside and an outside, selective permeability, and the possibility of accumulating product. Production runs on microfluidics or bioreactors, up to sixty hours continuously and up to tenfold better than batch mode.',
    checklist: ['Three terms routinely conflated; definitions are distinct', 'Chassis cell: industrial production, high controllability and efficiency', 'Artificial cell: built in the lab, at least partly from extant material', 'Protocell: in vitro minimal-cell model, material in liposomes', 'Separate them by where you start and how much living material you borrow', 'Chassis: microbial production is profitable via enzyme catalysis and product range', 'But natural cells are evolved for changing conditions and evolvability', 'That flexibility is unpredictability in a factory — still a black box', 'Chassis engineering removes evolved flexibility for engineered rigidity', 'Protocell: lipid vesicle compartment, 36 enzymes plus ribosomes, basic genes', 'That is a PURE system inside a liposome', 'Adding a membrane creates inside/outside and selective permeability', 'Production: microfluidics or bioreactors, 60 h continuous, 10-fold over batch']
  }
},

/* ======== PART II — LECTURE 12: METABOLIC ENGINEERING ======== */

{
  id: '5-10',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.10',
  enTitle: 'Parts, devices and systems',
  cnTitle: '零件、设备与系统',
  slides: 'L12 s.2–6',
  coverage: 'full',
  coverageNote: 'The two goals of bioengineering, the hierarchy and the tool list are on the slides. That the hierarchy is borrowed wholesale from electronic engineering, and that composability is the point of it, is the framing that makes it more than vocabulary.',
  summary: {
    en: 'The two goals are to understand the fundamentals of life by engineering, and to leverage that knowledge for biotechnology and sustainability. The vocabulary is a hierarchy: a part is a piece of DNA encoding a biological function, such as a promoter, operator, ribosome binding site or terminator. Parts combine into devices, such as a pathway on a plasmid. Devices combine into systems, involving feedback loops, switches and oscillators.',
    cn: '两个目标是：通过工程来理解生命的基本原理，以及把这些知识用于生物技术与可持续发展。术语构成一个层级：零件（part）是编码某个生物学功能的一段 DNA，比如启动子、操纵基因、核糖体结合位点或终止子。零件组合成设备（device），比如质粒上的一条通路。设备再组合成系统（system），涉及反馈回路、开关和振荡器。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.3', src: 'img/figures/L12_s03_1.webp' },
    { slide: 'L12 s.5', src: 'img/figures/L12_s05_1.webp' },
    { slide: 'L12 s.5', src: 'img/figures/L12_s05_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**零件 → 设备 → 系统**这套层级是直接从电子工程搬过来的，而它的价值只有一个词：**可组合性（composability）**——标准化之后可以像乐高一样反复复用。\n\n' +
            '而两个目标里第一个值得留意：**「通过工程来理解生命」——工程本身就是一种理解手段。**',
  skipIt: 'SBOL、SEVA、pBAD 这些名字知道是什么类别即可，不用背。**第 11–12 讲没有 RECAP 可引**，这是判断——但**三层抽象和「可组合性」这个理由要能讲**。',
  explain: [
    {
      q: '这套层级是从哪来的？为什么值得有？',
      a: '**直接从电子工程搬过来的，而它的全部价值在一个词：可组合性。**\n\n' +
         '**电路里的层级**：元件（电阻、电容）→ 电路模块 → 整个系统。\n\n' +
         '**合成生物学照搬**：零件（part）→ 设备（device）→ 系统（system）。\n\n' +
         '**为什么这个抽象值得有？**\n\n' +
         '**因为一旦某个启动子或 RBS 被确认为「标准化的、被充分表征的零件」，你就可以把它插进不同的通路里反复使用——像乐高积木一样。**\n\n' +
         '**你不需要每次都重新测一遍它有多强。**\n\n' +
         '**这个「乐高」的说法你在第 1-14 节见过：**Golden Gate 的「质粒乐高」——标准化的砖块 + 已驯化的载体。**同一个设计哲学，只是那里在讲怎么拼 DNA，这里在讲拼什么。**\n\n' +
         '**而 SBOL（合成生物学开放语言）是为了让这份零件清单能在不同实验室、不同软件之间交换**，不用每次都从头描述一遍每个零件。\n\n' +
         '**这里也值得留一句诚实的话：这套类比是有局限的。**\n\n' +
         '电阻插到哪个电路里行为都一样，**而一个启动子换个宿主、换个培养条件、换个上下游基因，强度可能就变了**。**生物零件的「可组合性」远不如电子元件**——这正是为什么第 5-15 节还需要 DBTL 循环来试。',
      takeaway: '从电子工程搬来的三层抽象，价值在于零件可以像乐高一样复用。但生物零件的可组合性远不如电子元件。'
    },
    {
      q: '「通过工程来理解生命」——这个目标该怎么理解？',
      a: '**它在说：工程本身就是一种理解的手段，而不是理解之后才能做的事。**\n\n' +
         '常规的顺序是：**先理解，再改造。**先搞清楚机理，然后据此设计。\n\n' +
         '**这个目标说的是反过来的：改造的尝试会逼你发现自己不理解什么。**\n\n' +
         '**第 5-1 节的 PLP 例子就是最好的注脚**：如果不是有人真的去把那个酶敲掉，谁也不会发现细胞还有一堆未知的旁路。**是「动手改」这个动作暴露了知识的边界。**\n\n' +
         '**第 5-7 节的 Syn3.0 也一样**：第一版设计直接死了，这才发现「准必需基因」这一类东西的存在。**不去造，就不会知道这个类别存在。**\n\n' +
         '**这就是费曼那句话在合成生物学里的版本：「我造不出来的东西，我就没有真正理解。」**\n\n' +
         '**而这跟这门课的另一条主线是呼应的**：第 4-4 节 Arnold 的洞见是「不理解也能做成」（让进化去搜）。\n\n' +
         '**两条合起来是一个完整的立场：**\n\n' +
         '**不理解也可以做成（用进化和迭代）；而做的过程本身，会告诉你哪里不理解。**\n\n' +
         '**所以「理解」不是动手的前提，是动手的产物。**这一句在口试里可以当整门课的收束语。',
      takeaway: '不是理解之后才能改造，而是改造的尝试暴露出你不理解什么。PLP 和 Syn3.0 都是这么被发现的。'
    }
  ],
  points: [
    { term: 'Goal one', en: 'By engineering, to understand the fundamentals of life.', cn: '通过工程手段，理解生命的基本原理。' },
    { term: 'Goal two', en: 'To leverage the knowledge for biotechnology and sustainability.', cn: '把这些知识用于生物技术和可持续发展。' },
    { term: 'Part defined', en: 'A piece of DNA that encodes a biological function.', cn: '编码某个生物学功能的一段 DNA。' },
    { term: 'The four canonical parts', en: 'A promoter initiates transcription, an operator regulates transcription, a ribosome binding site initiates translation, and a terminator attenuates transcription.', cn: '启动子起始转录，操纵基因调控转录，核糖体结合位点起始翻译，终止子衰减转录。' },
    { term: 'Devices', en: 'Parts are combined into devices — for example a pathway assembled on a plasmid, or a pathway assembled into the genome of a host by genome editing.', cn: '零件被组合成设备——例如在质粒上组装一条通路，或者通过基因组编辑把通路装进宿主基因组。' },
    { term: 'Systems', en: 'Systems are composed of several devices — for example involving feedback loops, on/off switches, and oscillators.', cn: '系统由若干设备组成——例如涉及反馈回路、开关和振荡器。' },
    { term: 'SBOL', en: 'The Synthetic Biology Open Language, a standardised way to represent parts, devices and systems diagrammatically and computationally.', cn: '合成生物学开放语言，一套以图形和计算方式表示零件、设备和系统的标准。' },
    { term: 'Design and simulation tools', en: 'SnapGene, Benchling and ApE.', cn: 'SnapGene、Benchling 和 ApE。' },
    { term: 'Plasmid repositories', en: 'Addgene, SEVA vectors (Standard European Vector Architecture), and pBAD vectors.', cn: 'Addgene、SEVA 载体（标准欧洲载体架构）和 pBAD 载体。' },
    { term: 'Assembly methods', en: 'Golden Gate using BsaI type IIS restriction enzymes, Gateway which is recombinase-based, and Gibson Assembly — all three from the cloning lecture, now used at pathway scale rather than single-gene scale.', cn: 'Golden Gate（用 BsaI 这类 IIS 型限制酶）、Gateway（基于重组酶）和 Gibson 组装——这三种都来自克隆那一讲，现在用在通路尺度而不是单基因尺度上。' }
  ],
  beyondPoints: [
    { term: 'The hierarchy is borrowed from electronics', en: 'This is a direct transplant of electronic engineering thinking into biology. A circuit has components such as resistors and capacitors, then circuit modules, then a whole system; synthetic biology borrows the same abstraction levels as part, device and system.', cn: '这是把电子工程的思维方式直接移植到生物学。电路里有元件（电阻、电容）、电路模块、整个系统；合成生物学借用同一套抽象层级：part → device → system。' },
    { term: 'Why the abstraction is worth having — composability', en: 'Once you have confirmed that a given promoter or ribosome binding site is a standardised, well-characterised part, you can plug it into different pathways and reuse it like a Lego brick. That is the same design philosophy as the plasmid-Lego framing of Golden Gate assembly.', cn: '好处是可组合性：一旦你确认某个启动子或核糖体结合位点是标准化、表征清楚的零件，就可以像乐高积木一样把它插进不同的通路里反复使用。这与 Golden Gate 组装的「质粒乐高」是同一种设计哲学。' },
    { term: 'What SBOL is for', en: 'It lets that parts list be exchanged between different laboratories and different software without having to describe each part again from scratch every time.', cn: 'SBOL 的作用是让这套零件表能在不同实验室、不同软件之间通用交换，不用每次都重新描述一遍。' },
    { term: 'Why the two goals mirror the minimal cell argument', en: 'It is the same philosophy scaled up from the cell to the pathway: engineering is itself a means of understanding. You do not have to understand a system completely before modifying it, but the attempt to modify it forces you to discover what you do not understand — exactly as the PLP example did. It is Feynman\'s "what I cannot create, I do not understand" applied to synthetic biology.', cn: '这与最小细胞的论证是同一种哲学，只是尺度从细胞放大到通路：工程本身就是一种理解手段。你不必先完全理解一个系统才能改造它，但尝试改造的过程本身会逼着你发现自己不理解的地方——正如 PLP 那个例子。这是费曼那句「我造不出来的东西，我就没有真正理解」在合成生物学里的体现。' }
  ],
  terms: [
    { en: 'Part', cn: '零件', def_en: 'A piece of DNA encoding a biological function — promoter, operator, ribosome binding site or terminator. The lowest level of the abstraction hierarchy.', def_cn: '编码某个生物学功能的一段 DNA——启动子、操纵基因、核糖体结合位点或终止子。抽象层级中的最低层。' },
    { en: 'Device', cn: '设备', def_en: 'Several parts combined to do something, such as a pathway assembled on a plasmid or integrated into a host genome.', def_cn: '若干零件组合起来完成某件事，例如在质粒上组装的、或整合进宿主基因组的一条通路。' },
    { en: 'System', cn: '系统', def_en: 'Several devices combined, typically involving feedback loops, switches or oscillators.', def_cn: '若干设备的组合，通常涉及反馈回路、开关或振荡器。' },
    { en: 'SBOL', cn: '合成生物学开放语言', def_en: 'Synthetic Biology Open Language — a standard for representing parts, devices and systems so designs can be exchanged between labs and software.', def_cn: 'Synthetic Biology Open Language——表示零件、设备和系统的标准，使设计能在实验室和软件之间交换。' },
    { en: 'Composability', cn: '可组合性', def_en: 'The property that well-characterised standard parts can be reused in different contexts without redesign — the whole point of the abstraction hierarchy.', def_cn: '表征清楚的标准零件可以在不同场景中重复使用而无需重新设计的性质——这正是抽象层级存在的意义。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is a "part" in this vocabulary?',
      q_cn: '在这套术语里，「零件」是什么？',
      options: ['A single protein carrying out one biological function', 'A piece of DNA that encodes one defined biological function', 'A whole plasmid with a pathway assembled on it', 'An individual enzyme acting at one step of a pathway'],
      answer: 1,
      optionNotes: {
        0: { en: 'This confuses a part with what it encodes. A part is DNA, and the four canonical examples — promoter, operator, ribosome binding site, terminator — have no protein product at all; they are sequences read by the machinery.', cn: '这是把 part 和它编码的产物弄混了。part 是一段 DNA，而四个标准例子（promoter、operator、ribosome binding site、terminator）根本没有蛋白产物，它们是被机器读取的序列。' },
        2: { en: 'A pathway assembled on a plasmid is the example the course gives for a device — several parts combined. Calling it a part collapses the bottom two levels of a hierarchy whose only purpose is to keep those levels apart.', cn: '质粒上组装好的一条通路，正是课上给 device 举的例子——若干 part 的组合。把它叫作 part，就把这套层级最下面两层压平了，而这个层级存在的唯一意义就是把它们分开。' }
      },
      why_en: 'The four canonical examples are a promoter, an operator, a ribosome binding site and a terminator — each a stretch of DNA with a defined regulatory role, not a protein product.',
      why_cn: '四个标准例子是启动子、操纵基因、核糖体结合位点和终止子——每一个都是有明确调控作用的一段 DNA，而不是蛋白产物。' },
    { type: 'mcq',
      q_en: 'Where does the part/device/system hierarchy come from?',
      q_cn: '「零件–设备–系统」这套层级来自哪里？',
      options: ['Classical genetics, from complementation groups, gene mapping and linkage analysis', 'Electronic engineering, from components, circuit modules and systems', 'Systems biology modelling of networks and their dynamics', 'Protein structure classification into folds and domains'],
      answer: 1,
      why_en: 'It is a direct transplant of electronics thinking. The payoff is composability: a characterised standard part can be plugged into different pathways and reused like a Lego brick.',
      why_cn: '这是电子学思维的直接移植。收益是可组合性：一个表征清楚的标准零件可以像乐高积木一样插进不同通路里反复使用。' },
    { type: 'mcq',
      q_en: 'What is SBOL for?',
      q_cn: 'SBOL 是做什么用的？',
      options: ['Physically assembling DNA fragments into a construct', 'A standard way of representing parts, devices and systems for exchange', 'Simulating metabolic flux and reaction kinetics from parameters stored in the design', 'Storing and distributing physical plasmid samples between labs'],
      answer: 1,
      optionNotes: {
        2: { en: 'Simulating kinetics and flux is what SBML, the Systems Biology Markup Language, is for — the name-alike. SBOL describes what a design is made of so it can travel between labs and tools; it carries no kinetic parameters and computes nothing.', cn: '模拟动力学和通量是 SBML（Systems Biology Markup Language）干的事——两个名字很像。SBOL 描述的是一个设计由哪些零件构成，好让它在实验室和软件之间流通，它不带动力学参数，也不做任何计算。' }
      },
      why_en: 'Standardising the parts is only useful if the description travels. SBOL means you do not have to re-describe a part from scratch every time it moves between laboratories or tools.',
      why_cn: '把零件标准化，只有在描述本身也能流通时才有意义。SBOL 让一个零件在不同实验室或工具之间转移时，不必每次都从头重新描述。' },
    { type: 'short',
      q_en: 'Define part, device and system with one example each.',
      q_cn: '定义零件、设备和系统，各举一个例子。',
      accept: ['promoter', 'pathway', 'feedback', 'oscillator', 'plasmid'],
      answer_en: 'A part is a piece of DNA that encodes a biological function — for example a promoter, which initiates transcription; the other canonical examples are an operator, which regulates transcription, a ribosome binding site, which initiates translation, and a terminator, which attenuates transcription. Parts are combined into devices, and the example given is a pathway assembled on a plasmid, or a pathway assembled into the genome of a host by genome editing. Systems are composed of several devices, for example involving feedback loops, on-off switches or oscillators. The hierarchy is borrowed directly from electronic engineering — components, then circuit modules, then whole systems — and the reason it is worth having is composability: once a promoter or ribosome binding site is standardised and well characterised, you can plug it into different pathways and reuse it like a Lego brick rather than re-optimising every time. SBOL, the Synthetic Biology Open Language, exists so that those standardised descriptions can travel between laboratories and software tools.',
      answer_cn: '零件是编码某个生物学功能的一段 DNA——例如启动子，它起始转录；其他标准例子还有操纵基因（调控转录）、核糖体结合位点（起始翻译）和终止子（衰减转录）。零件被组合成设备，所举的例子是在质粒上组装的一条通路，或者通过基因组编辑装进宿主基因组的一条通路。系统由若干设备组成，例如涉及反馈回路、开关或振荡器。这套层级直接借自电子工程——元件、电路模块、整个系统——而它值得拥有的原因是可组合性：一旦某个启动子或核糖体结合位点被标准化并表征清楚，你就可以像乐高积木一样把它插进不同通路里反复使用，而不必每次重新优化。SBOL（合成生物学开放语言）的存在，就是为了让这些标准化的描述能在实验室和软件工具之间流通。'
    }
  ],
  oral: {
    q_en: 'What is the vocabulary of synthetic biology design, and why is it structured that way?',
    q_cn: '合成生物学设计的术语体系是什么？为什么这样组织？',
    model_en: 'The lecture opens with two goals: by engineering, to understand the fundamentals of life, and to leverage that knowledge for biotechnology and sustainability. That first goal is the same philosophy as the minimal cell argument, just scaled up from the cell to the pathway — engineering is itself a means of understanding, because attempting to modify a system forces you to discover what you did not understand about it. Then comes the vocabulary, which is a three-level hierarchy. A part is a piece of DNA that encodes a biological function: a promoter initiates transcription, an operator regulates it, a ribosome binding site initiates translation, a terminator attenuates transcription. Parts are combined into devices — a pathway assembled on a plasmid, or assembled into the host genome by genome editing. And systems are composed of several devices, involving things like feedback loops, on-off switches and oscillators. What is worth saying about this structure is that it is a direct transplant of electronic engineering thinking into biology: a circuit has components, then circuit modules, then a whole system, and synthetic biology borrows exactly those abstraction levels. The payoff is composability. Once you have confirmed that a given promoter or ribosome binding site is a standardised, well-characterised part, you can plug it into different pathways and reuse it like a Lego brick instead of re-optimising it every time — which is the same design philosophy as the plasmid-Lego framing of Golden Gate assembly from the cloning lecture. SBOL, the Synthetic Biology Open Language, exists so that this parts list can be exchanged between different laboratories and different software without redescribing everything. And on tools, the deck lists SnapGene, Benchling and ApE for design, Addgene, SEVA and pBAD vectors as repositories, and Golden Gate, Gateway and Gibson for assembly — all three assembly methods being exactly the ones from the cloning lecture, now applied at pathway scale rather than single-gene scale.',
    checklist: ['Goal 1: by engineering, understand the fundamentals of life', 'Goal 2: leverage that for biotechnology and sustainability', 'Part: a piece of DNA encoding a biological function', 'Promoter initiates, operator regulates, RBS initiates translation, terminator attenuates', 'Device: parts combined — a pathway on a plasmid or in the genome', 'System: several devices — feedback loops, switches, oscillators', 'The hierarchy is borrowed from electronic engineering', 'The payoff is composability — reuse characterised parts like Lego', 'SBOL standardises the representation so designs travel between labs', 'Tools: SnapGene, Benchling, ApE; Addgene, SEVA, pBAD', 'Assembly: Golden Gate, Gateway, Gibson — now at pathway scale']
  }
},

{
  id: '5-11',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.11',
  enTitle: 'Pathways, and the artemisinin case',
  cnTitle: '通路，以及青蒿素的案例',
  slides: 'L12 s.7–10',
  coverage: 'full',
  coverageNote: 'The two directions, three sources, databases and the sesquiterpene synthase example are on the slides. Why amorphadiene specifically is the textbook case — the Keasling artemisinin story — is beyond the slides and is the most famous success in the field.',
  summary: {
    en: 'Pathways run in two directions, biodegradation and biosynthesis, and come from three sources: the host\'s endogenous pathway, exogenous natural pathways, and exogenous synthetic pathways. Databases are KEGG, BioCyc and MetaCyc and the ATLAS of Biochemistry for biosynthesis, and EAWAG-BBD for biodegradation. The case study is plant natural products, approached top-down by elucidating a plant pathway or bottom-up by predicting enzyme function with machine learning.',
    cn: '通路有两个方向——生物降解和生物合成——并有三个来源：宿主的内源通路、外源天然通路、外源合成通路。数据库方面，生物合成用 KEGG、BioCyc/MetaCyc 和 ATLAS of Biochemistry，生物降解用 EAWAG-BBD。案例是植物天然产物：自顶向下地阐明植物中的通路，或自底向上地用机器学习从序列预测酶的功能。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.8', src: 'img/figures/L12_s08_1.webp' },
    { slide: 'L12 s.9', src: 'img/figures/L12_s09_1.webp' },
    { slide: 'L12 s.10', src: 'img/figures/L12_s10_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '青蒿素是代谢工程最著名的成功案例：**把植物的通路搬进酵母，在成本、速度和可放大性上打赢了那株植物本身。**\n\n' +
            '这正是第 1-1 节那个「经济性」论据的一次具体兑现。',
  skipIt: 'KEGG / BioCyc / MetaCyc / ATLAS / EAWAG-BBD 这些数据库名字知道是干什么的就行，不用背全。**第 11–12 讲没有 RECAP 可引**，这是判断——但**青蒿素这条案例线要能完整讲一遍**，它是这一讲最容易被问到的东西。',
  explain: [
    {
      q: '青蒿素这个案例，为什么被当成代谢工程的教科书成功？',
      a: '**因为它把一整条植物通路搬进了酵母，然后在经济上打赢了那株植物。**\n\n' +
         '**问题的背景**：青蒿素是抗疟疾的一线药物。而它的天然来源黄花蒿（Artemisia annua）**长得慢，产量还受天气和产地影响**——供应不稳定、价格波动大。\n\n' +
         '**这是第 1-1 节那两个动机的典型场合：供应 + 经济性。**\n\n' +
         '**解法**：Keasling 实验室把植物的**甲羟戊酸通路和倍半萜通路移植进酿酒酵母**，让酵母生产青蒿酸；Sanofi 随后把它放大到工业规模的**半合成生产**，供应了全球相当一部分的青蒿素。\n\n' +
         '**关键那一步的化学**：一个**倍半萜合酶**以**法尼基焦磷酸（FPP）**为底物，产出 **amorpha-4,11-diene**——青蒿素的前体。然后 amorphadiene → 青蒿酸 → 青蒿素。\n\n' +
         '**这个案例值得记住的不是化学，是那个论证的形状：**\n\n' +
         '**「把一条异源天然通路搬进一个工程化的微生物底盘，在成本、速度和可放大性上超过天然生产者。」**\n\n' +
         '**这正是第 1-1 节说「经济性」时的意思，而且是它在整门课里最完整的一次兑现。**\n\n' +
         '**注意「半合成」这个词**：酵母产的是青蒿酸，最后一步转成青蒿素是化学做的。**生物和化学各干自己擅长的一段**——这也是第 5-16 节那个对照的一个现实版本。',
      takeaway: '把植物通路搬进酵母，在成本、速度、可放大性上打赢天然来源。这是第 1-1 节「经济性」论据最完整的兑现。'
    },
    {
      q: '「三个来源」和「两个方向」怎么用？',
      a: '**它们是一份定位清单：拿到一个新任务，先问它落在哪一格。**\n\n' +
         '**两个方向：**\n\n' +
         '**生物合成（biosynthesis）** —— 造出一个分子。数据库用 KEGG、BioCyc/MetaCyc、ATLAS of Biochemistry。\n\n' +
         '**生物降解（biodegradation）** —— 拆掉一个分子（环境治理、污染物降解）。数据库用 EAWAG-BBD。\n\n' +
         '**注意这两个方向的数据库是分开的**，这本身就说明它们是两个不同的知识体系。\n\n' +
         '**三个来源：**\n\n' +
         '**宿主自己的内源通路** —— 最省事，只需要调节（第 5-13 节那些手段）。\n\n' +
         '**外源的天然通路** —— **从别的生物那里搬过来**。青蒿素就是这一类：植物的通路搬进酵母。\n\n' +
         '**外源的合成通路** —— 自然界里不存在的通路，由人拼出来。**最难，但也最有想象力。**\n\n' +
         '**这三类的难度是递增的，而理由跟这门课反复出现的那条一样：**\n\n' +
         '**借用现成的（第 1-4-1 节问作者要克隆、第 3-9 节从古菌借正交对、第 1-15 节借 λ 的重组酶）总是比从头造容易。**\n\n' +
         '**所以做通路设计时的顺序应该是：先看宿主有没有 → 再看别的生物有没有 → 最后才考虑自己拼。**',
      takeaway: '两个方向（合成/降解）用不同的数据库。三个来源难度递增——先看宿主有没有，再看别人有没有。'
    }
  ],
  points: [
    { term: 'The two directions', en: 'Biodegradation versus biosynthesis.', cn: '生物降解与生物合成。' },
    { term: 'Three sources of pathway', en: 'The endogenous pathway of the host; exogenous, that is heterologous, natural pathways; and exogenous synthetic pathways.', cn: '宿主的内源通路；外源（异源）天然通路；以及外源合成通路。' },
    { term: 'Biosynthesis databases', en: 'KEGG, the Kyoto Encyclopedia of Genes and Genomes; BioCyc and MetaCyc; and the ATLAS of Biochemistry.', cn: 'KEGG（京都基因与基因组百科全书）、BioCyc/MetaCyc，以及 ATLAS of Biochemistry。' },
    { term: 'Biodegradation databases', en: 'EAWAG-BBD and EAWAG-Soil.', cn: 'EAWAG-BBD 和 EAWAG-Soil。' },
    { term: 'Why plants', en: 'Plants constitute the majority of biomass on Earth.', cn: '植物构成了地球上大部分的生物量。' },
    { term: 'The top-down strategy', en: 'Study an existing natural pathway in the plant, elucidate the enzymes, and reconstitute it in a microbial chassis.', cn: '研究植物中现存的天然通路，阐明其中的酶，再在微生物底盘中重建它。' },
    { term: 'The bottom-up strategy', en: 'Understand the function of a single enzyme from its sequence using machine learning.', cn: '用机器学习从序列理解单个酶的功能。' },
    { term: 'The worked example', en: 'A sesquiterpene synthase takes farnesyl pyrophosphate as substrate and produces amorpha-4,11-diene — the precursor of the antimalarial drug artemisinin.', cn: '一个倍半萜合酶以法尼基焦磷酸为底物，产生 amorpha-4,11-diene——抗疟药青蒿素的前体。' }
  ],
  beyondPoints: [
    { term: 'Why amorphadiene is the textbook case', en: 'The route amorphadiene to artemisinic acid to artemisinin is the single most famous success story in metabolic engineering. The Keasling lab at Berkeley engineered S. cerevisiae to produce artemisinic acid by transplanting the plant\'s mevalonate and sesquiterpene pathway into yeast, and Sanofi then scaled it to industrial semi-synthetic production, supplying a meaningful fraction of the world\'s artemisinin.', cn: '「amorphadiene → 青蒿酸 → 青蒿素」这条路线是代谢工程中最著名的成功案例。Berkeley 的 Keasling 实验室把植物的甲羟戊酸/倍半萜通路移植进酿酒酵母，使其生产青蒿酸，赛诺菲随后把它做到工业化半合成生产规模，供应了全球青蒿素中相当可观的一部分。' },
    { term: 'Why it matters that it beat the plant', en: 'Artemisinin is the front-line antimalarial, and Artemisia annua is slow-growing with yields dependent on weather and location. Taking a heterologous natural pathway from a plant and running it in an engineered microbial chassis outcompeted the natural producer on cost, speed and scalability — which is the economic argument from the very first lecture made concrete.', cn: '青蒿素是一线抗疟药，而黄花蒿生长缓慢、产量受天气和产地影响。把植物的异源天然通路搬进工程化的微生物底盘，在成本、速度和可放大性上胜过了天然产地——这正是第一讲那个经济性论证的具体落地。' },
    { term: 'It also illustrates the section\'s own point', en: 'It is precisely a heterologous natural pathway installed in a chassis cell, which is the middle of the three sources listed on the slide, and the chassis concept from the previous lecture put to work.', cn: '它恰好是「把异源天然通路装进底盘细胞」，也就是幻灯片所列三个来源中的中间那一个，同时也是上一讲底盘细胞概念的实际应用。' }
  ],
  terms: [
    { en: 'Heterologous pathway', cn: '异源通路', def_en: 'A pathway taken from one organism and installed in another — the middle of the three pathway sources, and the basis of the artemisinin case.', def_cn: '从一个生物取出、装进另一个生物的通路——三种通路来源中的中间一种，也是青蒿素案例的基础。' },
    { en: 'KEGG', cn: 'KEGG 数据库', def_en: 'The Kyoto Encyclopedia of Genes and Genomes, the standard reference for biosynthetic pathway information.', def_cn: '京都基因与基因组百科全书，生物合成通路信息的标准参考。' },
    { en: 'Sesquiterpene synthase', cn: '倍半萜合酶', def_en: 'An enzyme converting farnesyl pyrophosphate into a fifteen-carbon terpene — here amorpha-4,11-diene, the artemisinin precursor.', def_cn: '把法尼基焦磷酸转化为十五碳萜类的酶——这里生成的是青蒿素前体 amorpha-4,11-diene。' },
    { en: 'Semi-synthetic production', cn: '半合成生产', def_en: 'Producing an intermediate biologically and completing the molecule by chemistry — the route used for industrial artemisinin.', def_cn: '用生物方法生产中间体，再用化学方法完成整个分子——工业化青蒿素采用的正是这条路线。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What are the three sources of a pathway?',
      q_cn: '通路的三个来源是什么？',
      options: ['Bacterial, fungal and plant, by the organism of origin', 'Endogenous to the host, exogenous natural, and exogenous synthetic', 'Biosynthetic, biodegradative and regulatory, by the direction the pathway runs', 'KEGG, BioCyc and MetaCyc, the three pathway databases'],
      answer: 1,
      optionNotes: {
        2: { en: 'Biosynthesis versus biodegradation is the other axis on the same slide — the two directions a pathway can run, each with its own databases. The three sources answer a different question: where the genes come from, already in the host, borrowed from another organism, or designed.', cn: 'biosynthesis 与 biodegradation 是同一张幻灯片上的另一条轴——通路运行的两个方向，各有各的数据库。三个来源回答的是另一个问题：基因从哪来——宿主本来就有、从别的生物借来、还是人设计出来的。' }
      },
      why_en: 'Endogenous means already in the host; exogenous natural means borrowed from another organism, as in artemisinin; exogenous synthetic means designed rather than found in nature.',
      why_cn: '内源指宿主本来就有；外源天然指从另一个生物借来的，如青蒿素；外源合成指人工设计的、自然界中并不存在的通路。' },
    { type: 'mcq',
      q_en: 'What does the sesquiterpene synthase in the example produce, and why does it matter?',
      q_cn: '例子中的倍半萜合酶产生什么？为什么重要？',
      options: ['Farnesyl pyrophosphate, a precursor of membrane lipids', 'Amorpha-4,11-diene, the precursor of the antimalarial artemisinin', 'Mevalonate, an energy carrier', 'Squalene, the linear thirty-carbon precursor of sterols such as ergosterol'],
      answer: 1,
      optionNotes: {
        0: { en: 'Farnesyl pyrophosphate is the substrate the sesquiterpene synthase consumes, not what it makes: substrate and product are the wrong way round. FPP is a prenyl donor in the terpene pathway rather than a membrane building block.', cn: 'FPP 是这个 sesquiterpene synthase 消耗的底物，不是它的产物——substrate 和 product 反了。而且 FPP 在萜类通路里是 prenyl 供体，不是膜的构件。' }
      },
      why_en: 'It takes farnesyl pyrophosphate as substrate and makes amorphadiene. That route through artemisinic acid to artemisinin is the most famous success story in metabolic engineering.',
      why_cn: '它以法尼基焦磷酸为底物生成 amorphadiene。从这里经青蒿酸到青蒿素的路线，是代谢工程中最著名的成功案例。' },
    { type: 'mcq',
      q_en: 'What does the bottom-up strategy for plant natural products involve?',
      q_cn: '植物天然产物的自底向上策略指的是什么？',
      options: ['Growing the source plant at a larger agricultural scale', 'Predicting a single enzyme function from its sequence by machine learning', 'Extracting the compound chemically from harvested plant material', 'Elucidating the whole plant pathway and rebuilding it in a microbial chassis'],
      answer: 1,
      why_en: 'Top-down means elucidating an existing plant pathway and reconstituting it in a microbial chassis; bottom-up means predicting what an individual enzyme does from sequence alone, and building outward from there.',
      why_cn: '自顶向下是阐明植物中现有的通路再在微生物底盘中重建；自底向上是仅凭序列预测单个酶的功能，然后由此向外构建。' },
    { type: 'short',
      q_en: 'Why is artemisinin the standard illustration of metabolic engineering?',
      q_cn: '为什么青蒿素是代谢工程的标准范例？',
      accept: ['Keasling', 'yeast', 'Artemisia', 'chassis', 'heterologous'],
      answer_en: 'Because it is the clearest demonstration that a heterologous natural pathway running in an engineered microbial chassis can outcompete the natural producer. Artemisinin is the front-line antimalarial, and it comes naturally from Artemisia annua, which grows slowly and gives yields that depend on weather and location. The Keasling lab at Berkeley transplanted the plant\'s mevalonate and sesquiterpene pathway into S. cerevisiae so that engineered yeast produced artemisinic acid, and a few chemical steps then convert that to artemisinin. Sanofi scaled the route to industrial semi-synthetic production, supplying a meaningful fraction of the world supply. It illustrates exactly the point the lecture is making about pathway sources: this is the middle category, an exogenous natural pathway, installed in a chassis cell — and it makes concrete the economic argument from the very first lecture, that engineering can beat the natural source on cost, speed and scalability.',
      answer_cn: '因为它最清楚地证明了：把异源天然通路放进工程化的微生物底盘，可以胜过天然生产者。青蒿素是一线抗疟药，天然来自黄花蒿，而这种植物生长缓慢、产量受天气和产地影响。Berkeley 的 Keasling 实验室把植物的甲羟戊酸/倍半萜通路移植进酿酒酵母，让工程化酵母生产青蒿酸，再经几步化学转化成青蒿素。赛诺菲把这条路线做到工业化半合成规模，供应了全球相当可观的一部分。它恰好说明了本节关于通路来源的观点：这属于中间那一类——外源天然通路，装进底盘细胞；同时它把第一讲那个经济性论证具体化了，即工程化生产可以在成本、速度和可放大性上胜过天然来源。'
    }
  ],
  oral: {
    q_en: 'Where do metabolic pathways come from, and give an example that worked.',
    q_cn: '代谢通路从哪里来？举一个成功的例子。',
    model_en: 'Pathways run in two directions, biodegradation and biosynthesis, and they come from three sources. There is the endogenous pathway of the host, which is already there. There are exogenous, that is heterologous, natural pathways, taken from another organism. And there are exogenous synthetic pathways, designed rather than found. For finding them, the biosynthesis databases are KEGG, BioCyc and MetaCyc, and the ATLAS of Biochemistry; for biodegradation, EAWAG-BBD and EAWAG-Soil. The case study is plant natural products, and the motivation given is simply that plants constitute the majority of biomass on Earth. There are two complementary strategies. Top-down means studying an existing natural pathway in the plant, elucidating the enzymes, and reconstituting it in a microbial chassis. Bottom-up means understanding the function of a single enzyme directly from its sequence using machine learning, and building outward from that. The specific example is a sesquiterpene synthase that takes farnesyl pyrophosphate as substrate and produces amorpha-4,11-diene, which is the precursor of artemisinin. That example is not chosen at random — it is the single most famous success story in metabolic engineering. Artemisinin is the front-line antimalarial, and it comes naturally from Artemisia annua, a slow-growing plant whose yields depend on weather and location. The Keasling lab at Berkeley transplanted the plant\'s mevalonate and sesquiterpene pathway into S. cerevisiae so that engineered yeast produced artemisinic acid, and Sanofi then scaled that to industrial semi-synthetic production, supplying a meaningful fraction of the world\'s artemisinin. It is exactly the middle category of pathway source — a heterologous natural pathway installed in an engineered chassis — and it makes concrete the economic argument from the very first lecture, that engineering can beat the natural producer on cost, speed and scalability.',
    checklist: ['Two directions: biodegradation and biosynthesis', 'Three sources: endogenous, exogenous natural, exogenous synthetic', 'Biosynthesis databases: KEGG, BioCyc/MetaCyc, ATLAS of Biochemistry', 'Biodegradation: EAWAG-BBD, EAWAG-Soil', 'Case study: plant natural products; plants are most of Earth\'s biomass', 'Top-down: elucidate the plant pathway, reconstitute in a microbial chassis', 'Bottom-up: predict single enzyme function from sequence by machine learning', 'Example: sesquiterpene synthase, FPP to amorpha-4,11-diene', 'Amorphadiene to artemisinic acid to artemisinin', 'Keasling lab engineered yeast; Sanofi scaled it industrially', 'Beat the slow-growing plant on cost, speed and scalability']
  }
},

{
  id: '5-12',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.12',
  enTitle: 'Optimise — the OMICS layers',
  cnTitle: '优化——各层 OMICS',
  slides: 'L12 s.11–12',
  coverage: 'full',
  coverageNote: 'The OMICS table and the two things you are looking for are on the slides. Why one layer alone misleads — and specifically why transcriptomics alone is dangerous — is the beyond-the-slides reasoning, and it sets up the PcpB example that follows.',
  summary: {
    en: 'The central tension is target compound production against cellular growth. Systems biology brings mathematical and computational methods built on OMICS analyses: genomics and transcriptomics measure sequence and expression, proteomics measures protein expression profiles, metabolomics measures changes in metabolites and identifies rate-limiting steps, fluxomics quantifies by carbon-13 flux analysis, and kinetic modelling integrates them. What you are looking for is competing reactions and low metabolic flux.',
    cn: '核心张力是「目标化合物产量」与「细胞生长」之间的权衡。系统生物学提供建立在 OMICS 分析之上的数学与计算方法：基因组学和转录组学测序列与表达量，蛋白质组学测蛋白表达谱，代谢组学测代谢物的变化并识别限速步骤，通量组学用 ¹³C 通量分析做定量，动力学建模把它们整合起来。你要找的是竞争性反应和低代谢通量。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.11', src: 'img/figures/L12_s11_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '整个优化环节的核心张力只有一句：**目标化合物的产量 vs 细胞的生长。**\n\n' +
            '而那一串 OMICS 层次都在服务同一件事：**找出竞争性反应和低通量的那一步。**',
  skipIt: '各个 OMICS 层次的英文名不必逐个背，但要能说出**每一层测的是什么、能回答什么问题**。**第 11–12 讲没有 RECAP 可引**，这是判断。',
  explain: [
    {
      q: '为什么「产量 vs 生长」是这一整块的核心张力？',
      a: '**因为细胞的资源是一个固定的共享池——你多拿一份，生长就少一份。**\n\n' +
         '**共享的是什么：**核糖体数量、ATP 供应、氨基酸和核苷酸库、RNA 聚合酶拷贝数。\n\n' +
         '**你的合成通路消耗的每一单位，都是生物量合成拿不到的那一单位。**\n\n' +
         '**于是就有了那个残酷的权衡：**\n\n' +
         '**通路输出越高 → 细胞长得越慢 → 而长得越慢，总的生产窗口就越短。**\n\n' +
         '**所以「瞬时产率更高」不等于「总产量更高」。**这一点很反直觉，但它决定了工业上真正要优化的目标不是「每个细胞产多少」，而是「一整批发酵最后拿到多少」。\n\n' +
         '**（这跟第 2-16 节那条是同一类判断：比较系统时要一路算到「每升培养液最终拿到多少毫克」，而不是停在某个中间指标上。）**\n\n' +
         '**而这个现象你在这门课里已经见过两次了，只是当时没有名字：**\n\n' +
         '**第 1-9 节**：表达质粒是低拷贝的（pET 只有 15–20 份），因为高拷贝造成**代谢负担**。\n\n' +
         '**第 2-8 节**：T7 系统太强，产物能占到全细胞蛋白的 50%——**而细胞会被拖垮。**\n\n' +
         '**它的正式名字是「代谢负担」，就是下一节的内容。**',
      takeaway: '资源是固定的共享池，你多拿生长就少拿。而长得慢意味着生产窗口短——所以瞬时产率高不等于总产量高。'
    },
    {
      q: '那一串 OMICS 层次，各自能回答什么问题？',
      a: '**它们是从「基因组里写了什么」一路测到「实际上流了多少」的一条链。**\n\n' +
         '**基因组学 / 转录组学** —— 序列是什么、表达量是多少。回答「**这个基因在不在、转录了多少**」。\n\n' +
         '**蛋白质组学** —— 蛋白表达谱。回答「**mRNA 有了，蛋白真的做出来了吗**」。**这一层不能省，因为转录量和蛋白量常常对不上**（翻译效率、降解速率都会插一脚）。\n\n' +
         '**代谢组学** —— 代谢物的变化。回答「**中间产物在哪里堆积了**」——**堆积的地方就是限速步骤的下游入口**。这是找瓶颈最直接的一层。\n\n' +
         '**通量组学（fluxomics）** —— 用 **¹³C 通量分析**做定量。回答「**碳原子实际上是怎么流的、流了多少**」。\n\n' +
         '**动力学建模** —— 把上面几层整合成一个能算的模型。\n\n' +
         '**为什么需要这么多层？因为每一层都可能跟上一层脱节。**\n\n' +
         '基因在 ≠ 转录了；转录了 ≠ 翻译了；蛋白在 ≠ 有活性；有活性 ≠ 有通量（底物可能不够、产物可能抑制）。\n\n' +
         '**而你要找的东西幻灯片写得很明确：竞争性反应，和低代谢通量。**\n\n' +
         '**「竞争性反应」** = 有别的酶在抢你的中间产物，把碳流引到别处去了。\n\n' +
         '**「低通量」** = 某一步太慢，成了瓶颈。\n\n' +
         '**注意 ¹³C 通量分析为什么特别有用：只有它能直接告诉你碳原子实际走了哪条路**——浓度高不等于通量大（一个代谢物可能浓度很高但基本不流动）。',
      takeaway: '从「写了什么」测到「实际流了多少」，因为每一层都可能跟上一层脱节。找的是竞争性反应和低通量步骤。'
    }
  ],
  points: [
    { term: 'The central tension', en: 'Target compound production versus cellular growth.', cn: '目标化合物的产量与细胞生长之间的权衡。' },
    { term: 'What systems biology is', en: 'Mathematical and computational methods to understand and simulate biological systems, based on OMICS analyses.', cn: '基于 OMICS 分析、用来理解和模拟生物系统的数学与计算方法。' },
    { term: 'Genomics and transcriptomics', en: 'Measure gene sequence and expression levels.', cn: '测量基因序列和表达水平。' },
    { term: 'Proteomics', en: 'Measures protein expression profiles.', cn: '测量蛋白表达谱。' },
    { term: 'Metabolomics', en: 'Measures changes in metabolites upon engineering, and identifies rate-limiting steps.', cn: '测量改造之后代谢物的变化，并识别限速步骤。' },
    { term: 'Fluxomics', en: 'Quantification by carbon-13 flux analysis.', cn: '用 ¹³C 通量分析进行定量。' },
    { term: 'Kinetic modelling', en: 'The final integrating layer.', cn: '最后的整合层。' },
    { term: 'What you are looking for', en: 'Competing reactions, and low metabolic flux.', cn: '竞争性反应，以及低代谢通量。' }
  ],
  beyondPoints: [
    { term: 'Why one layer alone misleads', en: 'Each layer answers a different question, and any single layer can produce a misleading conclusion on its own.', cn: '每一层回答的问题都不一样，单独看任何一层都可能得出误导性的结论。' },
    { term: 'Transcriptomics is not protein', en: 'It tells you how much a gene was transcribed, but transcript level does not equal protein level — translation efficiency and mRNA stability both discount it.', cn: '转录组学告诉你某个基因转录了多少，但转录量不等于蛋白量——翻译效率和 mRNA 稳定性都会打折扣。' },
    { term: 'Proteomics is not activity', en: 'It tells you how much protein was made, but protein level does not equal enzyme activity — folding, inhibitors and cofactor availability all intervene.', cn: '蛋白质组学告诉你蛋白做出来了多少，但蛋白量不等于酶活性——折叠是否正确、有没有抑制剂、辅因子是否充足都会介入。' },
    { term: 'Metabolomics is the first layer that reads output', en: 'It reports how metabolite concentrations actually changed, which is what directly reflects the pathway\'s real output, and it is what catches the case where a protein is highly expressed yet nothing moves further down the pathway.', cn: '代谢组学报告的是代谢物浓度实际变化了多少，这才直接反映通路的实际产出，也正是它能揪出「蛋白明明表达很高、但代谢物就是不往下走」这种情况。' },
    { term: 'Fluxomics distinguishes concentration from rate', en: 'Carbon-13 labelling measures flow rather than concentration, which separates a high concentration caused by high throughput from a high concentration caused by a downstream blockage where material is piling up.', cn: '¹³C 标记测的是流量而不是浓度，这能区分「浓度高是因为流量大」和「浓度高是因为下游堵住了在囤积」。' },
    { term: 'The concrete danger of relying on transcriptomics', en: 'You might raise a gene\'s transcription tenfold and expect the pathway to accelerate, only for metabolomics to reveal that a completely unnoticed downstream enzyme is the real bottleneck — which is exactly the situation the PcpB example addresses.', cn: '你可能把某个基因的转录量提高十倍、以为通路会加速，结果代谢组学告诉你真正的瓶颈是下游一个完全没被注意的酶——而这正是 PcpB 那个例子要讲的情形。' }
  ],
  terms: [
    { en: 'Metabolomics', cn: '代谢组学', def_en: 'Measuring metabolite concentrations, the first OMICS layer that directly reports what a pathway is actually producing rather than what was expressed.', def_cn: '测量代谢物浓度，是第一个直接反映通路实际产出（而非表达了什么）的 OMICS 层。' },
    { en: 'Fluxomics', cn: '通量组学', def_en: 'Quantifying metabolic flow, typically by carbon-13 labelling. It separates high concentration due to high throughput from high concentration due to a downstream block.', def_cn: '对代谢流量的定量，通常用 ¹³C 标记。它能区分「浓度高源于通量大」和「浓度高源于下游受阻」。' },
    { en: 'Rate-limiting step', cn: '限速步骤', def_en: 'The slowest step in a pathway, which sets overall throughput. Identifying it is a main purpose of metabolomics.', def_cn: '通路中最慢的一步，决定了整体通量。识别它是代谢组学的主要目的之一。' },
    { en: 'Competing reaction', cn: '竞争性反应', def_en: 'A reaction diverting substrate away from your pathway — one of the two things the OMICS analysis is explicitly looking for.', def_cn: '把底物从你的通路上分流走的反应——这是 OMICS 分析明确要找的两件事之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which OMICS layer identifies rate-limiting steps?',
      q_cn: '哪一层 OMICS 用于识别限速步骤？',
      options: ['Transcriptomics', 'Proteomics', 'Metabolomics', 'Genomics'],
      answer: 2,
      why_en: 'Metabolomics measures changes in metabolites upon engineering, which is what directly reveals where material stops moving down the pathway — something expression data cannot show.',
      why_cn: '代谢组学测量改造后代谢物的变化，这才直接揭示物质在通路的哪一步停下来了——而表达数据显示不出这一点。' },
    { type: 'mcq',
      q_en: 'Why can transcriptomics alone mislead you?',
      q_cn: '为什么只看转录组学会误导你？',
      options: ['Sequencing errors are frequent enough to distort the counts', 'A high transcript level can coexist with little protein and no pathway activity', 'RNA is so unstable that extraction destroys the transcripts before they can be counted', 'It cannot resolve genes that are transcribed together in an operon'],
      answer: 1,
      why_en: 'Two discounts intervene between transcription and function: translation efficiency and mRNA stability, then folding, inhibitors and cofactors. You can raise transcription tenfold and change nothing downstream.',
      why_cn: '在转录和功能之间有两重折扣：翻译效率与 mRNA 稳定性，然后是折叠、抑制剂和辅因子。你可以把转录量提高十倍而下游毫无变化。' },
    { type: 'mcq',
      q_en: 'What does fluxomics add that metabolomics cannot?',
      q_cn: '通量组学能提供什么代谢组学做不到的信息？',
      options: ['Absolute quantification of every enzyme protein present in the pathway at that moment', 'Flow rates rather than concentrations, telling fast flux from a blockage', 'Identification of the gene sequences encoding each enzyme', 'Prediction of the folded structure of each pathway enzyme'],
      answer: 1,
      why_en: 'A high metabolite concentration is ambiguous: it could mean the pathway is running fast, or that material is piling up because the next step is blocked. Carbon-13 flux analysis tells the two apart.',
      why_cn: '代谢物浓度高是有歧义的：可能是通路跑得快，也可能是下一步堵住了、物质在堆积。¹³C 通量分析能把两者区分开。' },
    { type: 'short',
      q_en: 'Name the OMICS layers and explain why transcriptomics alone can mislead.',
      q_cn: '说出各层 OMICS，并解释为什么只看转录组学会误导。',
      accept: ['transcriptomics', 'proteomics', 'metabolomics', 'fluxomics', 'kinetic'],
      answer_en: 'Genomics and transcriptomics measure gene sequence and expression levels. Proteomics measures protein expression profiles. Metabolomics measures changes in metabolites upon engineering and identifies rate-limiting steps. Fluxomics quantifies flow by carbon-13 flux analysis. And kinetic modelling integrates everything into something predictive and simulable. Transcriptomics alone misleads because each successive layer answers a different question and there are discounts at every transition. Transcript level does not equal protein level, because translation efficiency and mRNA stability both intervene. Protein level does not equal enzyme activity, because folding, inhibitors and cofactor availability intervene. So you can raise a gene\'s transcription tenfold, expect the pathway to accelerate, and find that nothing changes — because a completely unnoticed downstream enzyme was the real bottleneck all along. Metabolomics is the first layer that directly reports what the pathway is actually producing, and fluxomics goes further by measuring rate rather than concentration, which distinguishes a high concentration caused by high throughput from one caused by material piling up behind a block.',
      answer_cn: '基因组学和转录组学测量基因序列和表达水平。蛋白质组学测量蛋白表达谱。代谢组学测量改造后代谢物的变化并识别限速步骤。通量组学用 ¹³C 通量分析对流量做定量。动力学建模则把所有这些整合成一个可预测、可仿真的模型。只看转录组学之所以会误导，是因为每一层回答的问题都不同，而且每一次过渡都有折扣。转录量不等于蛋白量，因为翻译效率和 mRNA 稳定性会介入。蛋白量不等于酶活性，因为折叠、抑制剂和辅因子的可得性会介入。所以你可能把某个基因的转录量提高十倍、以为通路会加速，结果什么都没变——因为真正的瓶颈自始至终是下游一个完全没被注意到的酶。代谢组学是第一个直接反映通路实际产出的层次，而通量组学更进一步，测的是速率而不是浓度，从而区分「浓度高源于通量大」和「浓度高源于被堵住后的堆积」。'
    }
  ],
  oral: {
    q_en: 'How would you find out why an engineered pathway is underperforming?',
    q_cn: '如果一条工程化通路表现不佳，你会怎么找原因？',
    model_en: 'By layering OMICS analyses, and the reason you layer them rather than picking one is that each answers a different question and any single one can mislead. The methods of systems biology are mathematical and computational approaches to understanding and simulating biological systems, built on those OMICS layers. Genomics and transcriptomics give gene sequence and expression levels. Proteomics gives protein expression profiles. Metabolomics gives changes in metabolites upon engineering, and importantly identifies rate-limiting steps. Fluxomics gives quantification by carbon-13 flux analysis. And kinetic modelling integrates all of it. What you are specifically looking for is competing reactions and low metabolic flux. The reason a single layer is dangerous is that there is a discount at every transition. Transcriptomics tells you how much a gene was transcribed — but transcript level does not equal protein level, because translation efficiency and mRNA stability both intervene. Proteomics tells you how much protein was made — but protein level does not equal enzyme activity, because folding, inhibitors and cofactor availability all intervene. Metabolomics is the first layer that directly reports what the pathway is actually producing, which is why it is the one that catches the case where a protein is expressed at high levels and yet nothing moves further downstream. Fluxomics then adds something metabolomics cannot: it measures flow rather than concentration, which distinguishes a high metabolite concentration caused by high throughput from one caused by material piling up behind a downstream blockage. The concrete danger of relying on transcriptomics alone is exactly this: you raise a gene\'s transcription tenfold, expect acceleration, and metabolomics then reveals that some completely unnoticed downstream enzyme was the real bottleneck the whole time. That is the situation the PcpB example goes on to complicate further.',
    checklist: ['Central tension: target compound production versus cellular growth', 'Systems biology: mathematical and computational methods on OMICS data', 'Genomics/transcriptomics: sequence and expression levels', 'Proteomics: protein expression profiles', 'Metabolomics: metabolite changes, identifies rate-limiting steps', 'Fluxomics: quantification by carbon-13 flux analysis', 'Kinetic modelling integrates everything', 'Looking for: competing reactions and low metabolic flux', 'Transcript level does not equal protein level', 'Protein level does not equal enzyme activity', 'Metabolomics is the first layer reporting actual output', 'Fluxomics separates high throughput from accumulation behind a block']
  }
},

{
  id: '5-13',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.13',
  enTitle: 'Where to intervene — and why a slow enzyme may be correct',
  cnTitle: '在哪里干预——以及为什么「慢」的酶可能是对的',
  slides: 'L12 s.13–14',
  coverage: 'full',
  coverageNote: 'The three intervention levels, substrate channelling and the PcpB observation are all on the slides. Why a rate-limiting enzyme might be a deliberate safety valve rather than a defect is the most counter-intuitive point in the lecture, and it is the one that changes how you approach a bottleneck.',
  summary: {
    en: 'You can intervene at three levels. At the DNA level, gene copy number and gene position, plasmid against chromosome. At the transcription and translation levels, promoters, operon configuration, ribosome binding site, codon usage and mRNA stability. At the protein level, kinetics matters more than amount — substrate channelling keeps toxic intermediates from diffusing, and PcpB is a poor, rate-limiting enzyme possibly to optimise uptake of a reactive and toxic intermediate.',
    cn: '可以在三个层次上干预。DNA 层次：基因拷贝数、基因位置（质粒还是染色体）。转录/翻译层次：启动子、操纵子构型、核糖体结合位点、密码子使用、mRNA 稳定性。蛋白层次：动力学比数量更重要——底物通道化防止有毒中间体扩散开，而 PcpB 是一个「差」的限速酶，这可能正是为了优化对活性极强且有毒的中间体的摄取。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.14', src: 'img/figures/L12_s14_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**看到限速酶，不要条件反射地想把它加速。**先问：它慢，是进化没优化好，还是**进化故意让它慢**？\n\n' +
            'PcpB 就是后者——它下游的 TCBQ 有毒，**慢是一个流量限制阀**。盲目加速会让毒性中间体堆积，把宿主毒死。',
  skipIt: 'PcpB、TCBQ 这两个名字本身不用背，记住那个「慢可能是故意的」的道理和它的逻辑就行。**第 11–12 讲没有 RECAP 可引**，这是判断——但**三个干预层次（DNA / 转录翻译 / 蛋白）建议记**，它是回答「怎么优化一条通路」的现成框架。',
  explain: [
    {
      q: '为什么一个「差」的限速酶，可能反而是被优化过的？',
      a: '**因为它下游的中间产物有毒——慢是一个安全阀。**\n\n' +
         '**直觉的做法**：找出最慢的那一步，把它换成最快的版本，通量就上去了。**这个直觉在大多数场合是对的。**\n\n' +
         '**PcpB 这个例子说明它有时是危险的。**\n\n' +
         'PcpB 下游的中间产物 **TCBQ 是一个反应性极强、有毒的分子**。如果它在细胞里积累起来，会造成氧化损伤，甚至直接杀死细胞。\n\n' +
         '**而 PcpB 故意慢，起的正是「限流阀」的作用**：\n\n' +
         '**TCBQ 一被做出来，就立刻被下一个酶消耗掉，永远达不到有毒的浓度。**\n\n' +
         '**所以如果你盲目地提高 PcpB 的表达量或活性，会发生什么？**\n\n' +
         'TCBQ 的生成速度超过了下游的消耗速度 → **它开始堆积** → 细胞被毒害 → **通量不但没上去，细胞还不长了。**\n\n' +
         '**这是一个非常好的「反直觉」考点，而它的普遍教训是：**\n\n' +
         '**在一个被进化调过的系统里，看到一个「不合理」的设计，先假设它有理由。**\n\n' +
         '**这跟第 4-3 节那条是同一种思维**：那里问「为什么每轮只引入 1–5 个突变」，答案是两头都是失败。**这里问「为什么这个酶这么慢」，答案是快了会中毒。**\n\n' +
         '**两次都是：极端不是最优，中间才是。**',
      takeaway: '它下游的中间产物有毒，慢是限流阀。盲目加速会让毒性中间体堆积——通量没上去，细胞先不长了。'
    },
    {
      q: '「底物通道化」是从另一头解决同一个问题——怎么理解？',
      a: '**因为毒性中间体的问题有两种解法：让它产生得慢，或者让它一产生就被接走。**\n\n' +
         '**解法一（PcpB 那条）：把上游放慢。**产生得慢，下游就来得及消耗，浓度上不去。\n\n' +
         '**解法二（底物通道化）：把上下游两个酶物理地拴在一起。**\n\n' +
         '用支架蛋白或者人工连接子把连续的两个酶连起来，**于是中间产物一被做出来，几乎立刻就被下一个酶抓走了**——它**几乎没有机会扩散开、去碰到别的东西**。\n\n' +
         '**两条解法各有各的代价：**\n\n' +
         '**放慢上游**：安全，但**通量上限被锁死了**。你永远快不了。\n\n' +
         '**通道化**：**通量可以很高，同时中间产物仍然不扩散**——因为它走的是一条「私密通道」而不是公共的细胞质。\n\n' +
         '**所以通道化是更好的方案，只是更难做**（要设计支架、要保证两个酶的活性位点朝向合适）。\n\n' +
         '**注意通道化还顺带解决了另一个问题：竞争性反应**（第 5-12 节要找的东西之一）。中间产物如果扩散到细胞质里，**别的酶可能把它抢走**，碳流就漏掉了。**拴在一起就抢不走。**\n\n' +
         '**所以对「有毒或不稳定的中间产物」，这两条策略是互补的，而且通道化同时解决了毒性和漏流两件事。**',
      takeaway: '一个是让它产生得慢，一个是让它一产生就被接走。通道化更好（通量不受限），还顺带防住了竞争性反应。'
    },
    {
      q: '「质粒还是染色体」这个选择，判据是什么？',
      a: '**判据是「你能不能一直加着抗生素」——而这一条把实验室和工厂分开了。**\n\n' +
         '**质粒**：拷贝数可调、容易做到高表达。**但不稳定**——不加抗生素压力就容易丢，批次间差异大。\n\n' +
         '**染色体整合**：通常只有一个拷贝、表达量较低。**但极其稳定，不需要持续加抗生素。**\n\n' +
         '**为什么「能不能加抗生素」是关键？**\n\n' +
         '**实验室里**：加抗生素毫无问题，几十毫升培养基而已。**所以先用质粒把通路跑通。**\n\n' +
         '**工业规模上**：几万升发酵，**你不可能一直往里加抗生素**——成本高、下游要除掉、监管上也是麻烦（产品里不能有抗生素残留）。\n\n' +
         '**所以工业生产最后基本都会整合到染色体上。**\n\n' +
         '**这条的实际含义是：实验室阶段和生产阶段用的载体形式往往不一样，而「从质粒搬到染色体」本身是一个要花力气的工程步骤**，而且搬完之后表达量会下降，可能要重新优化。\n\n' +
         '**顺带把第 2-15 节串起来**：酵母那张质粒表里，**YIp（整合型）最稳定但单拷贝、YEp（只带 ARS）高拷贝但不稳**——**完全同一个取舍，只是换了个物种。**\n\n' +
         '**而这也是第 2-19 节、第 2-23 节那条「瞬时 vs 稳定」轴的又一次出现：前期投入 vs 后期可靠性。**',
      takeaway: '质粒高表达但要一直加抗生素维持，而工业规模加不起。所以实验室用质粒跑通，生产整合到染色体。'
    }
  ],
  points: [
    { term: 'DNA level', en: 'Gene copy number — plasmids can make a lot of difference — and gene position, including plasmid versus chromosome.', cn: '基因拷贝数——质粒可以带来很大差异——以及基因位置，包括质粒还是染色体。' },
    { term: 'Transcription and translation levels', en: 'Promoters and operon configuration; ribosome binding site, codon usage and mRNA stability.', cn: '启动子和操纵子构型；核糖体结合位点、密码子使用和 mRNA 稳定性。' },
    { term: 'Substrate channelling', en: 'Used for toxic intermediates. Proximity of enzymes prevents diffusion of intermediates, and this can be promoted by synthetic linking.', cn: '用于有毒中间体。酶之间的邻近性阻止中间体扩散，而这可以通过人工连接来促成。' },
    { term: 'The importance of kinetics', en: 'PcpB is a poor, rate-limiting enzyme, possibly to optimise uptake of the reactive and toxic TCBQ intermediate.', cn: 'PcpB 是一个差的限速酶，这可能是为了优化对活性强且有毒的中间体 TCBQ 的摄取。' }
  ],
  beyondPoints: [
    { term: 'Plasmid versus chromosome is a real trade-off', en: 'A plasmid gives tunable copy number and easily high expression, but it is unstable — without antibiotic pressure it is readily lost, and batch-to-batch variation is large. Chromosomal integration gives one copy and usually lower expression, but is extremely stable and needs no continuous antibiotic. Industrial-scale production, where you cannot keep dosing antibiotic, usually ends up integrating; laboratory screening typically uses a plasmid first to get the pathway working.', cn: '质粒拷贝数可调、容易做到高表达，但不稳定——没有抗生素压力时容易丢失，批次间波动也大。整合进染色体只有 1 个拷贝、表达量通常较低，但极其稳定、不需要持续加抗生素。工业规模生产（不可能一直加抗生素）通常最终选择整合；实验室筛选阶段则常先用质粒把通路调通。' },
    { term: 'Why a slow enzyme can be optimised rather than defective', en: 'Intuitively you would replace every step with the fastest version available. But the intermediate downstream of PcpB, TCBQ, is a highly reactive and toxic molecule; if it accumulated inside the cell it would cause oxidative damage or kill it. PcpB being deliberately slow acts as a flow restrictor, ensuring TCBQ is consumed by the next enzyme as soon as it is made and never reaches a toxic concentration.', cn: '直觉上你会想把每一步都换成最快的版本。但 PcpB 下游的中间体 TCBQ 是一个活性极强的毒性分子；如果它在细胞内积累，会造成氧化损伤甚至杀死细胞。PcpB 故意「不那么快」，相当于一个限流阀，保证 TCBQ 一生成就立刻被下游酶消耗掉，永远达不到有毒浓度。' },
    { term: 'The lesson for an engineer', en: 'Do not reflexively try to accelerate a rate-limiting step. Ask first whether it is slow because evolution failed to optimise it, or because evolution deliberately made it slow. If the latter, blindly raising that enzyme\'s expression or activity will let a toxic intermediate accumulate and poison the host — flux does not improve and the cells stop growing.', cn: '不要看到限速步骤就本能地想加速它。先问一句：这一步慢，是因为进化没优化好，还是进化特意让它慢？如果是后者，盲目提高这个酶的表达量或活性，反而会让有毒中间体堆积、把宿主毒死——通量非但没提高，细胞还不长了。' },
    { term: 'Channelling attacks the same problem from the other side', en: 'Tethering consecutive enzymes together with a scaffold or synthetic linker means an intermediate is captured by the next enzyme almost as soon as it is produced, with scarcely any opportunity to diffuse away and meet anything else. For toxic or unstable intermediates the two strategies — deliberately slowing a step, and channelling — are complementary.', cn: '底物通道化从另一个角度解决同一类问题：用支架蛋白或人工连接子把连续几步的酶拴在一起，中间体一产生几乎立刻被下一个酶捕获，几乎没有机会扩散出去接触别的东西。对毒性或不稳定的中间体来说，「让某一步刻意慢」和「通道化」是互补的两种策略。' }
  ],
  terms: [
    { en: 'Substrate channelling', cn: '底物通道化', def_en: 'Holding consecutive enzymes in proximity, often by synthetic linking, so an intermediate is handed straight on without diffusing — valuable for toxic or unstable intermediates.', def_cn: '让连续的酶保持邻近（常通过人工连接实现），使中间体不经扩散就被直接传递下去——对有毒或不稳定的中间体尤其有价值。' },
    { en: 'Rate-limiting enzyme', cn: '限速酶', def_en: 'The slowest enzyme in a pathway. Usually treated as a defect to be fixed, but PcpB shows it can be a deliberate safety valve.', def_cn: '通路中最慢的酶。通常被当作待修复的缺陷，但 PcpB 表明它也可能是有意设置的安全阀。' },
    { en: 'TCBQ', cn: '四氯苯醌', def_en: 'Tetrachlorobenzoquinone, the highly reactive and toxic intermediate downstream of PcpB whose accumulation the slow enzyme appears to prevent.', def_cn: 'PcpB 下游那个活性极强、有毒的中间体；这个慢酶看来正是为了防止它积累。' },
    { en: 'Gene dosage', cn: '基因剂量', def_en: 'Expression tuned by copy number — high and adjustable on a plasmid, fixed at one and stable on the chromosome.', def_cn: '通过拷贝数调节的表达量——在质粒上高且可调，在染色体上固定为 1 且稳定。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why might PcpB being a poor, slow enzyme be the correct design rather than a defect?',
      q_cn: '为什么 PcpB 作为一个差而慢的酶，可能是正确的设计而不是缺陷？',
      options: ['Slow enzymes are generally more thermostable than fast ones', 'It restricts flow so the toxic TCBQ intermediate never accumulates', 'It saves ATP that would otherwise be spent on the reaction', 'A slow catalytic cycle allows the protein to fold correctly'],
      answer: 1,
      why_en: 'The next intermediate is highly reactive and toxic. Deliberate slowness ensures it is consumed by the downstream enzyme as fast as it appears, so it never builds up — a safety valve, not a bottleneck to be removed.',
      why_cn: '下一个中间体活性极强且有毒。刻意的「慢」保证它一出现就被下游的酶消耗掉，从而永远不会堆积——这是一个安全阀，而不是一个待清除的瓶颈。' },
    { type: 'mcq',
      q_en: 'What is substrate channelling for?',
      q_cn: '底物通道化是为了什么？',
      options: ['Increasing the amount of each enzyme so that consecutive steps are never rate-limiting', 'Passing an intermediate to the next enzyme without letting it diffuse', 'Improving codon usage so translation runs more smoothly', 'Stabilising the mRNA so it survives longer in the cell'],
      answer: 1,
      why_en: 'Proximity means the intermediate is captured by the next enzyme almost as soon as it is made, with little chance to diffuse away. It is complementary to the deliberate-slowness strategy for handling toxic intermediates.',
      why_cn: '邻近意味着中间体一生成几乎立刻被下一个酶捕获，几乎没有机会扩散开。它与「刻意放慢某一步」是处理有毒中间体的两种互补策略。' },
    { type: 'mcq',
      q_en: 'Why does industrial-scale production usually end up with chromosomal integration rather than a plasmid?',
      q_cn: '为什么工业规模生产通常最终选择染色体整合而不是质粒？',
      options: ['Chromosomal expression is higher than from a plasmid, so yields rise after integration', 'Plasmids are lost without antibiotic selection, impractical at scale', 'Plasmids are too small to carry a whole multi-gene pathway', 'Integrated strains are cheaper and quicker to construct'],
      answer: 1,
      optionNotes: {
        0: { en: 'The trade-off runs the other way: the plasmid is the high-expression option, with tunable copy number, while integration gives one copy and usually less expression. Integration is chosen for stability, and it is chosen in spite of the expression it costs.', cn: '这个 trade-off 说反了：高表达的那一边是 plasmid（拷贝数可调），整合进染色体只有一个拷贝、表达通常更低。选整合是为了稳定，而且是在牺牲表达量的前提下选的。' }
      },
      why_en: 'A plasmid gives tunable, high expression and is ideal for getting a pathway working in the lab, but it needs selection pressure to be retained. At production scale you cannot keep dosing antibiotic, so stability wins over expression level.',
      why_cn: '质粒表达量高且可调，非常适合在实验室里把通路调通，但它需要选择压力才能保住。到了生产规模不可能一直加抗生素，所以稳定性压过了表达量。' },
    { type: 'short',
      q_en: 'Explain the PcpB example and what it tells an engineer facing a rate-limiting step.',
      q_cn: '解释 PcpB 的例子，以及它对面对限速步骤的工程师意味着什么。',
      accept: ['TCBQ', 'toxic', 'accumulate', 'flow restrictor', 'do not accelerate'],
      answer_en: 'PcpB is described as a poor, rate-limiting enzyme, possibly there to optimise uptake of the reactive and toxic TCBQ intermediate. The counter-intuitive point is that its slowness may be a feature rather than a fault. TCBQ, the intermediate downstream of it, is highly reactive and toxic, and if it accumulated inside the cell it would cause oxidative damage or kill the cell outright. By being deliberately slow, PcpB acts as a flow restrictor, ensuring TCBQ is consumed by the next enzyme as fast as it is produced and never reaches a harmful concentration. The lesson for an engineer is not to reflexively accelerate a rate-limiting step. Ask first whether the step is slow because evolution failed to optimise it, or because evolution deliberately made it slow. If it is the latter, raising that enzyme\'s expression or activity will let a toxic intermediate build up and poison the host, so flux does not improve and the cells stop growing. Substrate channelling attacks the same problem from the other direction: tethering consecutive enzymes together so the intermediate is handed straight on without any chance to diffuse away.',
      answer_cn: 'PcpB 被描述为一个差的限速酶，它的存在可能正是为了优化对活性强且有毒的中间体 TCBQ 的摄取。反直觉之处在于：它的慢可能是特性而不是缺陷。TCBQ 是它下游的中间体，活性极强且有毒，如果在细胞内积累会造成氧化损伤甚至直接杀死细胞。通过刻意的慢，PcpB 起到限流阀的作用，保证 TCBQ 一生成就被下游的酶消耗掉，永远达不到有害浓度。对工程师的教训是：不要看到限速步骤就本能地想加速它。先问一句这一步慢，是因为进化没优化好，还是进化特意让它慢。如果是后者，提高这个酶的表达量或活性会让有毒中间体堆积、把宿主毒死，通量非但没提高、细胞还不长了。底物通道化则从另一个方向处理同一个问题：把连续的酶拴在一起，让中间体被直接传递下去，根本没有机会扩散开。'
    }
  ],
  oral: {
    q_en: 'At what levels can you tune a pathway, and what should you be careful about?',
    q_cn: '可以在哪些层次上调节一条通路？需要注意什么？',
    model_en: 'There are three levels. At the DNA level, gene copy number — and the slide notes that plasmids can make a lot of difference — and gene position, including the choice of plasmid versus chromosome. That choice is a genuine trade-off: a plasmid gives tunable copy number and easily high expression, but it is unstable, readily lost without antibiotic pressure and variable between batches, whereas chromosomal integration gives one copy and usually lower expression but is extremely stable and needs no continuous antibiotic. Industrial-scale production, where you cannot keep dosing antibiotic, usually ends up integrating, while laboratory screening typically uses a plasmid first to get the pathway working. At the transcription and translation levels, you tune promoters and operon configuration, and the ribosome binding site, codon usage and mRNA stability. And at the protein level the slide makes the point that kinetics matters more than amount, which is where the interesting caution lies. Substrate channelling is one tool: holding consecutive enzymes in proximity, promoted by synthetic linking if necessary, so an intermediate is handed straight on rather than diffusing away — which matters especially for toxic intermediates. But the example I would spend time on is PcpB, which the slide describes as a poor, rate-limiting enzyme, possibly to optimise uptake of the reactive and toxic TCBQ intermediate. That is genuinely counter-intuitive. Your instinct with a rate-limiting step is to replace it with the fastest enzyme you can find. But TCBQ downstream of PcpB is highly reactive and toxic, and if it accumulated it would cause oxidative damage or kill the cell. So PcpB being deliberately slow works as a flow restrictor, ensuring TCBQ is consumed as fast as it appears. The lesson is to ask, before accelerating any bottleneck, whether it is slow because evolution failed to optimise it or because evolution made it slow on purpose. Get that wrong and you poison the host, flux does not improve, and the culture stops growing.',
    checklist: ['Three levels: DNA, transcription/translation, protein', 'DNA: gene copy number and position, plasmid versus chromosome', 'Plasmid: tunable, high expression, but unstable without selection', 'Chromosome: one copy, lower expression, extremely stable', 'Industrial scale integrates; lab screening uses plasmids first', 'Transcription/translation: promoters, operon layout, RBS, codon usage, mRNA stability', 'Protein level: kinetics matters more than amount', 'Substrate channelling: proximity prevents intermediate diffusion', 'PcpB is a poor, rate-limiting enzyme — possibly by design', 'TCBQ downstream is reactive and toxic', 'Slowness acts as a flow restrictor so TCBQ never accumulates', 'Lesson: ask whether a bottleneck is a defect or a deliberate safety valve']
  }
},

{
  id: '5-14',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.14',
  enTitle: 'Metabolic burden',
  cnTitle: '代谢负担',
  slides: 'L12 s.15',
  coverage: 'full',
  coverageNote: 'The four statements are on the slide. Systematising the concept — that it is the same phenomenon as several warnings scattered through earlier lectures, and that it arises from a fixed shared resource pool — is what turns a phrase into something usable.',
  summary: {
    en: 'Metabolic burden covers possible changes in biochemistry and physiology, the drain of metabolic building blocks and cellular machinery, and the trade-off between flux through your pathway and the biomass-producing pathways. It is described as a systems-level challenge, combinatorial and dependent on dynamic regulation — which is to say it cannot be solved by turning up one gene.',
    cn: '代谢负担涵盖了生化与生理上可能发生的改变、代谢构件与细胞机器被抽走，以及「你的通路的通量」与「产生生物量的通路」之间的权衡。它被描述为一个系统层面的挑战，是组合性的、并依赖于动态调控——也就是说，它不可能靠调高某一个基因来解决。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.15', src: 'img/figures/L12_s15_1.webp' },
    { slide: 'L12 s.15', src: 'img/figures/L12_s15_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '代谢负担的根源是**一个固定的共享资源池**：核糖体、ATP、氨基酸和核苷酸库、RNA 聚合酶——**你的通路多用一份，生长就少一份。**\n\n' +
            '而它是**组合性的、依赖动态调控的**，也就是说：**调高某一个基因解决不了它。**',
  skipIt: '**第 11–12 讲没有 RECAP 可引**，这是判断——这一节概念简单、篇幅短，但它是前面好几处现象的统一解释，值得当成一个「命名」来记：你早就见过它了，只是现在它有名字了。',
  explain: [
    {
      q: '这个现象你其实早就见过两次了——在哪？',
      a: '**在第 1-9 节和第 2-8 节，只是当时它还没有名字。**\n\n' +
         '**第 1-9 节：为什么表达质粒是低拷贝的？**\n\n' +
         'pET 只有 15–20 份，而克隆用的 pUC 有 500–700 份。当时的解释是：**500 份质粒各自要复制、各自在转录，核苷酸、氨基酸、ATP 全被这件事吃掉，细胞长得慢，结果蛋白反而更少。**\n\n' +
         '**那就是代谢负担。**\n\n' +
         '**第 2-8 节：T7 系统强到什么程度？**\n\n' +
         '产物能占到全细胞蛋白的 50%。当时说这是它的优点——**而代价是细胞被拖垮。**\n\n' +
         '**那也是代谢负担。**\n\n' +
         '**现在给它一个统一的解释：细胞的总资源是有限的，而且是共享的。**\n\n' +
         '**核糖体数量、ATP 供应、氨基酸和核苷酸库、RNA 聚合酶拷贝数**——**你的合成通路消耗的每一单位，都是生物量合成拿不到的那一单位。**\n\n' +
         '**所以这一节的价值不在于教你新东西，在于给一个你已经遇到三次的现象命名。**\n\n' +
         '**而命名是有用的**：一旦你知道「这些都是同一件事」，看到一个新场景（比如共表达五个蛋白、或者装一条十个酶的通路）你就能预判它会发生。',
      takeaway: '第 1-9 节的低拷贝表达质粒、第 2-8 节被 T7 拖垮的细胞——都是它。现在它有名字了：代谢负担。'
    },
    {
      q: '「组合性的、依赖动态调控的」——这句话在说什么？',
      a: '**在说：这些变量互相耦合，不能单独调——所以「调高某一个基因」解决不了它。**\n\n' +
         '**「组合性（combinatorial）」的意思是：**你有一堆旋钮（每个基因的启动子强度、RBS 强度、拷贝数——第 5-13 节那三个层次），**而它们的效果不是各自独立相加的。**\n\n' +
         '把第一个酶调高，可能让第二个酶的底物过量、中间产物堆积；把第二个也调高，又可能把第三个的产物抽干。**每调一个，别的最优值就变了。**\n\n' +
         '**所以你不能一个个优化，只能一组一组地试**——而组合数是爆炸的（第 5-15 节正是要处理这个）。\n\n' +
         '**「依赖动态调控（dynamic regulation）」的意思是：**最优的设置**随时间变化**。\n\n' +
         '发酵早期你希望细胞**快速长起来**（把资源投给生物量）；到了后期你希望它**全力生产**（把资源投给产物）。**一个固定的设置不可能同时最优。**\n\n' +
         '**所以现代的做法是让通路自己感知状态并切换**——比如用群体感应（细胞密度到了才开启生产）或者用可诱导启动子分阶段控制。\n\n' +
         '**这也解释了为什么这一节被明确写成「系统层面的挑战」：**\n\n' +
         '**它不是某一个基因的问题，也不是某一个时刻的问题。**任何「找出那个瓶颈基因然后调高它」的思路，在这里都注定不够。',
      takeaway: '旋钮之间互相耦合（调一个别的最优值就变了），而且最优值随发酵阶段变化。所以只能在系统层面解决。'
    }
  ],
  points: [
    { term: 'Physiological consequences', en: 'Possible changes in biochemistry and physiology.', cn: '生化和生理上可能发生的改变。' },
    { term: 'The drain', en: 'Drain of metabolic building blocks and cellular machinery.', cn: '代谢构件和细胞机器被抽走。' },
    { term: 'The trade-off', en: 'Trade-off between flux through our pathway and biomass-producing pathways.', cn: '我们的通路的通量与产生生物量的通路之间的权衡。' },
    { term: 'The nature of the problem', en: 'A systems-level challenge — combinatorial and dependent on dynamic regulation.', cn: '这是一个系统层面的挑战——组合性的，并且依赖动态调控。' }
  ],
  beyondPoints: [
    { term: 'It is the same phenomenon seen several times already', en: 'Earlier lectures warned that plasmid copy number should not be too high, and that the T7 system is so strong it can drag the cell down. Both were describing metabolic burden without naming it.', cn: '前面的课讲过「表达质粒拷贝数不能太高」，也讲过「T7 系统太强反而可能拖垮细胞」——它们讲的都是同一件事，只是没有点名叫代谢负担。' },
    { term: 'The underlying cause is a fixed shared pool', en: 'A cell has finite total resources — ribosome number, ATP supply, amino acid and nucleotide pools, RNA polymerase copies — and all of them are shared. Every unit of resource your synthetic pathway consumes is a unit unavailable for building biomass and growing.', cn: '细胞的资源是有限的总量——核糖体数量、ATP 供应、氨基酸和核苷酸池、RNA 聚合酶拷贝数——而且全部是共享的。你的合成通路每多消耗一分资源，用于长身体、长得快的资源就少一分。' },
    { term: 'Where the headline trade-off comes from', en: 'This is exactly why the section heading is target compound production against cellular growth. The higher the pathway output, the slower the cell grows; and the slower it grows, the shorter the total production window, so a higher instantaneous yield is not necessarily a better overall one.', cn: '这正是「目标化合物产量 vs 细胞生长」这个标题的来源：通路产量越高，细胞长得越慢；细胞长得越慢，总的生产时间窗口就越短，所以瞬时产量更高不一定意味着整体产率更高。' },
    { term: 'Why it must be optimised at the system level', en: 'That is the meaning of combinatorial and dependent on dynamic regulation: the variables are coupled to each other and cannot be tuned in isolation. Raising one gene\'s expression does not solve it.', cn: '这正是「组合性且依赖动态调控」这句话的含义：各个变量互相耦合，不能孤立地调。把某一个基因的表达量调高并不能解决问题。' }
  ],
  terms: [
    { en: 'Metabolic burden', cn: '代谢负担', def_en: 'The cost imposed on a host by an engineered pathway competing for finite shared resources — ribosomes, ATP, building blocks — with growth.', def_cn: '工程化通路与生长争夺有限共享资源（核糖体、ATP、构件）而给宿主带来的代价。' },
    { en: 'Biomass-producing pathway', cn: '生物量合成通路', def_en: 'The metabolism that builds the cell itself. It competes directly with your engineered pathway for the same resource pool.', def_cn: '构建细胞自身的代谢。它与你的工程化通路直接争夺同一个资源池。' },
    { en: 'Combinatorial optimisation', cn: '组合优化', def_en: 'A problem in which the variables are coupled, so they cannot be tuned one at a time — which is why metabolic burden is a systems-level challenge.', def_cn: '各变量互相耦合、无法逐个调节的优化问题——这正是代谢负担属于系统层面挑战的原因。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What is the fundamental cause of metabolic burden?',
      q_cn: '代谢负担的根本原因是什么？',
      options: ['Toxic pathway intermediates accumulating in the cytoplasm', 'Competition for one finite pool of ribosomes, ATP and precursors', 'Loss of the plasmid from part of the growing population', 'Rare codons stalling the ribosome part-way along the mRNA'],
      answer: 1,
      optionRefs: { 0: '5-13', 2: '5-13', 3: '1-4-3' },
      why_en: 'Everything the synthetic pathway consumes is unavailable for biomass. That is why the section heading frames the whole problem as target compound production versus cellular growth.',
      why_cn: '合成通路消耗掉的一切，都无法再用于生物量。这就是为什么本节标题把整个问题框定为「目标化合物产量 vs 细胞生长」。' },
    { type: 'mcq',
      q_en: 'Why is a higher instantaneous pathway yield not necessarily better overall?',
      q_cn: '为什么瞬时通路产量更高不一定整体更好？',
      options: ['The product degrades faster than it is made, so a higher rate cannot raise the final titre', 'Higher output slows growth, which shortens the production window', 'Detection becomes less sensitive at high product concentration', 'The pathway saturates, so extra input gives no extra product'],
      answer: 1,
      why_en: 'The two effects work against each other: more flux to product means less to biomass, fewer cells, and less total time producing. Optimising requires balancing them rather than maximising one.',
      why_cn: '两个效应互相对抗：更多通量流向产物，就有更少流向生物量，细胞更少、生产时间也更短。优化要求在两者之间取平衡，而不是把其中一个最大化。' },
    { type: 'mcq',
      q_en: 'What does "combinatorial and dependent on dynamic regulation" mean in practice?',
      q_cn: '「组合性且依赖动态调控」在实践中意味着什么？',
      options: ['That you have to screen a combinatorial library of promoter and RBS variants', 'That the variables are coupled, so raising one gene will not fix it', 'That the pathway must be re-tuned each time the temperature changes', 'That you have to model the entire genome before intervening'],
      answer: 1,
      why_en: 'It is the reason metabolic burden is a systems-level challenge rather than a single-gene fix. Changing one lever shifts the balance of all the others.',
      why_cn: '这正是代谢负担属于系统层面挑战、而不是靠改一个基因就能解决的原因。动一个杠杆会改变其余所有杠杆的平衡。' },
    { type: 'short',
      q_en: 'What is metabolic burden, and why is it a systems-level rather than single-gene problem?',
      q_cn: '什么是代谢负担？为什么它是系统层面而不是单基因层面的问题？',
      accept: ['finite', 'shared', 'ribosome', 'biomass', 'coupled'],
      answer_en: 'Metabolic burden is the cost an engineered pathway imposes on its host: possible changes in biochemistry and physiology, a drain of metabolic building blocks and cellular machinery, and a trade-off between flux through your pathway and the biomass-producing pathways. The underlying cause is that a cell has a fixed, shared pool of resources — a finite number of ribosomes, a finite ATP supply, finite amino acid and nucleotide pools, a finite number of RNA polymerase copies — and every unit your pathway consumes is one unavailable for building the cell itself. That is where the headline trade-off between target compound production and cellular growth comes from, and it has a subtle consequence: the higher the pathway output, the slower the cell grows, and the slower it grows the shorter the total production window, so maximising instantaneous yield does not necessarily maximise the overall result. It is a systems-level problem because the variables are coupled — that is exactly what the slide means by combinatorial and dependent on dynamic regulation. You cannot tune them one at a time, and raising one gene\'s expression does not solve it. It is also worth recognising that this is the same phenomenon that appeared earlier without being named: the warnings that plasmid copy number should not be too high, and that the T7 system is strong enough to drag the cell down, were both descriptions of metabolic burden.',
      answer_cn: '代谢负担是工程化通路施加给宿主的代价：生化和生理上可能的改变、代谢构件与细胞机器被抽走，以及「你的通路通量」与「生物量合成通路」之间的权衡。根本原因是细胞的资源是固定且共享的——核糖体数量有限、ATP 供应有限、氨基酸和核苷酸池有限、RNA 聚合酶拷贝数有限——你的通路每消耗一分，就有一分无法再用于构建细胞本身。这就是「目标化合物产量 vs 细胞生长」这个核心权衡的来源，而它有一个微妙的推论：通路产量越高，细胞长得越慢；长得越慢，总的生产时间窗口就越短，所以把瞬时产量最大化不一定能让整体结果最优。它之所以是系统层面的问题，是因为各变量互相耦合——这正是幻灯片说「组合性且依赖动态调控」的意思。你不能逐个去调，把某一个基因的表达量提高也解决不了。还值得认出来的是：这与前面出现过但没被点名的现象是同一件事——「质粒拷贝数不能太高」和「T7 系统强到可能拖垮细胞」这两个警告，讲的都是代谢负担。'
    }
  ],
  oral: {
    q_en: 'What is metabolic burden?',
    q_cn: '什么是代谢负担？',
    model_en: 'It is the cost that an engineered pathway imposes on its host, and the slide describes it in four statements: possible changes in biochemistry and physiology, a drain of metabolic building blocks and cellular machinery, a trade-off between flux through our pathway and the biomass-producing pathways, and finally that it is a systems-level challenge, combinatorial and dependent on dynamic regulation. The underlying cause is worth stating plainly, because once you have it the rest follows. A cell has a fixed total pool of resources, and all of it is shared: a finite number of ribosomes, a finite ATP supply, finite amino acid and nucleotide pools, a finite number of RNA polymerase copies. Every unit of resource your synthetic pathway consumes is a unit that is no longer available for building the cell itself and growing. That is precisely where the section heading comes from — target compound production against cellular growth — and it has a consequence that is easy to miss: the higher the pathway output, the slower the cell grows, and the slower it grows the shorter your total production window, so pushing instantaneous yield up does not necessarily improve the overall result. It has to be optimised as a balance rather than maximised. That is also why it is a systems-level problem, which is what combinatorial and dependent on dynamic regulation means: the variables are coupled to each other, you cannot tune them in isolation, and raising one gene\'s expression will not fix it. I would also point out that this concept has appeared several times earlier in the course without being named. The warning that plasmid copy number should not be pushed too high, and the observation that the T7 system is strong enough that it can drag the cell down, were both describing metabolic burden.',
    checklist: ['Four statements: physiology changes, drain of building blocks, trade-off, systems-level', 'Cause: a cell has a finite, shared resource pool', 'Ribosomes, ATP, amino acid and nucleotide pools, RNA polymerase', 'Every unit used by your pathway is unavailable for biomass', 'Hence the heading: target compound production versus cellular growth', 'Higher output means slower growth', 'Slower growth means a shorter production window', 'So maximising instantaneous yield is not necessarily optimal', 'Systems-level because variables are coupled', 'Cannot be fixed by raising one gene\'s expression', 'Same phenomenon as earlier warnings about plasmid copy number and T7 strength']
  }
},

{
  id: '5-15',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.15',
  enTitle: 'Learn — the design-build-test-learn cycle',
  cnTitle: '学习——设计–构建–测试–学习循环',
  slides: 'L12 s.16',
  coverage: 'full',
  coverageNote: 'The slide gives only a citation, so almost everything here is reconstruction. The concept matters because it is the standard operating framework of modern synthetic biology and it closes the loop with directed evolution from the previous chapter.',
  summary: {
    en: 'Instead of brute-force testing every combination of promoter strength, ribosome binding site strength and gene copy number — which is combinatorially explosive — an active learning loop builds a small deliberately diverse set of variants, tests them, trains a machine learning model on the results, predicts which untested combination is most likely to be better, and builds that one next. This is the design-build-test-learn cycle.',
    cn: '与其暴力测试启动子强度、核糖体结合位点强度和基因拷贝数的每一种组合（那是组合爆炸的），主动学习循环的做法是：构建一小批刻意多样化的变体，测试它们，用结果训练一个机器学习模型，预测哪个未被测试的组合最有可能更好，然后下一轮就构建那一个。这就是设计–构建–测试–学习循环。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.16', src: 'img/figures/L12_s16_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'DBTL 是**设计 → 构建 → 测试 → 学习**的循环：**造一小批刻意多样化的变体 → 测 → 用结果训练模型 → 让模型预测下一个该造哪个。**\n\n' +
            '它是定向进化的直系后代，区别是：**定向进化靠随机盲搜，DBTL 用模型来聪明地挑下一轮。**',
  skipIt: 'Pandi 2022 那篇的出处不用背。**第 11–12 讲没有 RECAP 可引**，这是判断——但**「它跟定向进化的关系」这一条要能讲**，因为它把第 9 讲和第 12 讲连成了一条线。',
  explain: [
    {
      q: '它要解决的是什么问题？为什么暴力测试不行？',
      trace: {
        what: '**DBTL** 是**设计（Design）→ 构建（Build）→ 测试（Test）→ 学习（Learn）**的循环：造一小批刻意多样化的通路变体，测试它们，用结果训练一个机器学习模型，让模型预测下一个该造哪个组合。',
        from: '它要解决的是**组合爆炸**——启动子强度 × RBS 强度 × 拷贝数，几个基因乘起来的组合数远超你能构建和测试的数目，暴力穷举不可行，这是这门课第三次撞上「搜索空间远大于能穷举的范围」这堵墙。',
        to: '它是**定向进化**（第 9 讲）的直系后代：两者都是不需要理解底层机理就能推进的迭代循环，让数据而不是第一性原理告诉你往哪走。区别只在下一轮怎么选——定向进化靠随机多样化加筛选盲目探索，DBTL 用训练好的模型聪明地挑。',
        family: '同一堵墙这门课撞过三次，应对思路一脉相承：第 4-2 节用知识缩小空间（少随机化几个位点），第 9 讲靠选择压力让系统自己淘汰，这一节用模型决定下一个采哪个点——「搜索空间大就靠数量，构建成本高就靠脑子」。'
      },
      a: '**又是组合爆炸——这门课第三次撞上同一堵墙。**\n\n' +
         '假设你要优化一条三个基因的通路，每个基因有：\n\n' +
         '**启动子强度**（比如 5 档）× **RBS 强度**（5 档）× **拷贝数**（3 档）= 每个基因 75 种配置。\n\n' +
         '**三个基因就是 75³ ≈ 42 万种组合。**而真实的通路常常有十几个基因。\n\n' +
         '**暴力测试不可能。**\n\n' +
         '**而这堵墙你已经撞过两次了：**\n\n' +
         '**第 4-2 节**：7 个位点全随机化需要 4×10¹² 次转化。\n\n' +
         '**第 4-7 节**：细胞把文库卡在 10⁸。\n\n' +
         '**这一节**：通路配置的组合数远超你能构建和测试的数目。\n\n' +
         '**三次的处境完全一样：搜索空间远大于你能穷举的范围。**\n\n' +
         '**而三次的应对思路也是一脉相承的：不要穷举，要聪明地采样。**\n\n' +
         '第 4-2 节用**知识**缩小空间（限制字母表、少随机化几个位点）。\n\n' +
         '第 9 讲用**选择压力**让系统自己淘汰。\n\n' +
         '**这一节用模型来决定下一个采哪个点。**',
      takeaway: '通路配置的组合数远超你能测试的数目——这是这门课第三次撞上同一堵墙。应对都是「不穷举，聪明采样」。'
    },
    {
      q: 'DBTL 跟定向进化是什么关系？',
      a: '**它是直系后代，而差别只在「下一轮怎么选」这一步上。**\n\n' +
         '**共同点（这才是本质）：两者都是迭代循环，而且都不需要理解底层机理就能取得进展。**\n\n' +
         '**定向进化**（第 9 讲）：多样化 → 选择 → 多样化 → 选择……**你不需要知道为什么这个突变体更好，你只需要知道它更好。**\n\n' +
         '**DBTL**：设计 → 构建 → 测试 → 学习 → 设计……**你不需要知道为什么这个配置更好，模型只从数据里学出趋势。**\n\n' +
         '**两者都是「让数据告诉你往哪走」，而不是「从第一性原理算出答案」。**\n\n' +
         '**差别在于下一轮的样本怎么来：**\n\n' +
         '**定向进化是盲搜**：随机多样化，然后靠选择淘汰。**便宜，但每轮的信息利用率很低**——你只用了「谁活下来」这一个比特。\n\n' +
         '**DBTL 用模型预测**：它把上一轮**所有变体的完整数据**（包括失败的那些）拿去训练，然后**预测哪个未测试的组合最可能更好**。\n\n' +
         '**所以 DBTL 的每一轮更贵（要测很多指标），但每一轮学到的更多。**\n\n' +
         '**适用场景也因此不同：**\n\n' +
         '**变体便宜、测试便宜、空间巨大** → 定向进化（比如 10¹³ 的展示文库）。\n\n' +
         '**变体贵、测试贵、但每个变体信息丰富** → DBTL（比如一条通路要做基因组整合、要测 OMICS）。\n\n' +
         '**一句话：搜索空间大就靠数量，构建成本高就靠脑子。**',
      takeaway: '都是迭代、都不需要理解机理。差别是定向进化盲搜（每轮只学到「谁活下来」），DBTL 用全部数据训练模型。'
    },
    {
      q: '为什么说这一节几乎可以当整门课的收束？',
      a: '**因为这门课反复撞上的那堵墙，最后给出的通用答案就是「迭代循环」。**\n\n' +
         '**把整门课的困境列一遍，它们的形状惊人地一致：**\n\n' +
         '**第 4-5 节**：我们不理解蛋白，算不出该改哪个残基。\n\n' +
         '**第 5-1 节**：我们不理解细胞，敲掉一个酶它还能活。\n\n' +
         '**第 5-7 节**：Syn3.0 的第一版设计直接死了，473 个基因里 149 个功能未知。\n\n' +
         '**第 5-14 节**：代谢负担是组合性的，调一个基因解决不了。\n\n' +
         '**每一次的结论都一样：知识不够，穷举不了。**\n\n' +
         '**而每一次的解法也一样：建一个循环，让它跑。**\n\n' +
         '**第 9 讲**：多样化 → 选择 → 重复（定向进化）。\n\n' +
         '**第 5-7 节**：让 Syn3.0 自由进化 2000 代，适合度自己恢复。\n\n' +
         '**这一节**：设计 → 构建 → 测试 → 学习 → 重复。\n\n' +
         '**所以整门课在方法论上其实收敛到了一句话：**\n\n' +
         '**当搜索空间太大而理解又不够时，唯一现实的路是一个由数据引导的迭代循环。**\n\n' +
         '**这句话在口试里可以当任何一个「你怎么解决 X」问题的兜底框架**——而且它是真的，不是套话。',
      takeaway: '这门课每次撞墙的结论都是「知识不够、穷举不了」，而每次的解法都是「建一个由数据引导的循环」。'
    }
  ],
  points: [
    { term: 'The reference', en: 'Pandi et al., "A versatile active learning workflow for optimization of genetic and metabolic networks", Nature Communications 2022.', cn: 'Pandi 等，《用于优化遗传与代谢网络的通用主动学习工作流》，Nature Communications 2022。' }
  ],
  beyondPoints: [
    { term: 'The problem it solves', en: 'Testing every combination of promoter strength times ribosome binding site strength times gene copy number is combinatorially explosive, in the same way library size was in the diversity lecture. Brute force is not available.', cn: '要测试启动子强度 × 核糖体结合位点强度 × 基因拷贝数的每一种组合，是组合爆炸的——和多样性那一讲里的文库规模问题是同一回事。暴力穷举根本不可行。' },
    { term: 'The loop', en: 'Build a small, deliberately diverse set of pathway variants. Test them, measuring metabolite output and growth rate using the OMICS layers. Train a machine learning model on the results. Predict which untested combination is most likely to be better. Build that one next, and repeat.', cn: '构建一小批刻意多样化的通路变体。测试它们，用各层 OMICS 测代谢物产出和生长速率。用结果训练机器学习模型。预测哪个未被测试的组合最可能更好。下一轮就构建那一个，然后重复。' },
    { term: 'Why it is called DBTL', en: 'Design, build, test, learn — the standard operating framework of modern synthetic biology.', cn: '设计（Design）、构建（Build）、测试（Test）、学习（Learn）——现代合成生物学的标准操作框架。' },
    { term: 'Its relationship to directed evolution', en: 'It is a direct descendant. Both are iterative loops that do not require full understanding of the underlying mechanism to make progress — you let data rather than first-principles design tell you where to go next. The difference is that DBTL uses a predictive model to choose the next round intelligently, whereas directed evolution explores blindly by random diversification followed by selection.', cn: '它是定向进化的直系后代。两者都是迭代循环，不需要完全理解底层机制就能取得进展——你让数据而不是第一性原理的设计来告诉你下一步该往哪走。区别在于 DBTL 用一个预测模型聪明地选择下一轮该测什么，而定向进化靠随机多样化加筛选盲目地探索。' },
    { term: 'Why this closes the course', en: 'On problems where the combinatorial space is too large to enumerate — which is where this course keeps arriving — an iterative loop guided by data is the only realistic way forward.', cn: '在组合空间大到无法穷举的问题上——而这门课反复走到的正是这类问题——由数据引导的迭代循环是唯一现实的出路。' }
  ],
  terms: [
    { en: 'DBTL cycle', cn: 'DBTL 循环', def_en: 'Design, build, test, learn — the standard iterative framework of modern synthetic biology, in which each round\'s results inform the next design.', def_cn: '设计–构建–测试–学习，现代合成生物学的标准迭代框架，每一轮的结果指导下一轮的设计。' },
    { en: 'Active learning', cn: '主动学习', def_en: 'A machine learning strategy in which the model chooses which experiment to run next, rather than the data being collected in advance — the key to searching spaces too large to enumerate.', def_cn: '一种机器学习策略：由模型来决定下一个该做哪个实验，而不是预先收集好数据——这是搜索无法穷举的空间的关键。' },
    { en: 'Combinatorial explosion', cn: '组合爆炸', def_en: 'The rapid growth of possibilities when several variables are combined, making exhaustive testing impossible — the same barrier as library size in the diversity lecture.', def_cn: '多个变量组合时可能性的急剧增长，使穷举测试变得不可能——与多样性那一讲中的文库规模是同一个障碍。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'What problem does active learning solve in pathway optimisation?',
      q_cn: '主动学习在通路优化中解决什么问题？',
      options: ['Poor catalytic kinetics of the enzymes in the pathway', 'Too many combinations of promoter, RBS and copy number to test', 'Loss of the pathway plasmid when selection is removed', 'Toxicity of the pathway intermediates to the host cell'],
      answer: 1,
      optionRefs: { 2: '5-13', 3: '5-13' },
      why_en: 'It is the same barrier as library size in the diversity lecture — the space is too large to enumerate, so you need a strategy that chooses which few experiments to run rather than running them all.',
      why_cn: '这与多样性那一讲中的文库规模是同一个障碍——空间大到无法穷举，所以你需要一个策略去选择该做哪几个实验，而不是全都做。' },
    { type: 'mcq',
      q_en: 'What are the four steps of the DBTL cycle?',
      q_cn: 'DBTL 循环的四个步骤是什么？',
      options: ['Diversify, bind, transform, ligate', 'Design, build, test, learn', 'Detect, bind, translate, label', 'Digest, blunt, transform, log'],
      answer: 1,
      why_en: 'Design, build, test, learn — the standard operating framework of modern synthetic biology, where each round\'s data trains a model that chooses the next design.',
      why_cn: '设计、构建、测试、学习——现代合成生物学的标准操作框架，每一轮的数据训练出一个模型，由它来选择下一个设计。' },
    { type: 'mcq',
      q_en: 'How does DBTL differ from directed evolution?',
      q_cn: 'DBTL 与定向进化有什么不同？',
      options: ['DBTL requires the mechanism to be fully understood beforehand', 'DBTL chooses the next round with a model, directed evolution randomly', 'Directed evolution reaches the same improvement in fewer rounds', 'DBTL works only in vitro and not inside a living cell'],
      answer: 1,
      optionNotes: {
        0: { en: 'Making progress without full mechanistic understanding is what DBTL shares with directed evolution, not what separates them — the model is trained on measured data, not derived from mechanism. The only difference is how the next round is chosen.', cn: '「不用完全理解机制也能往前推进」是 DBTL 和 directed evolution 的共同点，不是两者的区别——模型是用实测数据训练出来的，不是从机制推导出来的。区别只在于下一轮怎么挑。' }
      },
      why_en: 'Both are iterative loops that make progress without full mechanistic understanding. The difference is only how the next round is chosen — by a trained model, or by random diversification followed by selection.',
      why_cn: '两者都是无需完全理解机制就能推进的迭代循环。区别只在于下一轮如何选择——是由训练好的模型选，还是靠随机多样化加筛选。' },
    { type: 'short',
      q_en: 'What is the DBTL cycle, and how does it relate to directed evolution?',
      q_cn: '什么是 DBTL 循环？它与定向进化有什么关系？',
      accept: ['design', 'build', 'test', 'learn', 'model', 'iterative'],
      answer_en: 'Design, build, test, learn. The problem it addresses is that testing every combination of promoter strength, ribosome binding site strength and gene copy number is combinatorially explosive — the same barrier as library size in the diversity lecture. So instead of brute force, an active learning loop builds a small but deliberately diverse set of pathway variants, tests them by measuring metabolite output and growth rate, trains a machine learning model on those results, uses the model to predict which untested combination is most likely to be better, and builds that one next. Then it repeats. Its relationship to directed evolution is that it is a direct descendant: both are iterative loops that make progress without requiring full understanding of the underlying mechanism, letting data rather than first-principles design decide where to go next. The difference is only in how the next round is chosen. Directed evolution explores blindly, by random diversification followed by selection. DBTL uses a predictive model to choose intelligently, which is what makes it viable on combinatorial spaces too large to enumerate.',
      answer_cn: '设计、构建、测试、学习。它针对的问题是：测试启动子强度、核糖体结合位点强度和基因拷贝数的每一种组合是组合爆炸的——与多样性那一讲中的文库规模是同一个障碍。所以不用暴力穷举，而是用一个主动学习循环：构建一小批刻意多样化的通路变体，通过测量代谢物产出和生长速率来测试它们，用这些结果训练一个机器学习模型，再用模型预测哪个未被测试的组合最可能更好，下一轮就构建那一个，然后重复。它与定向进化的关系是直系后代：两者都是不需要完全理解底层机制就能推进的迭代循环，让数据而不是第一性原理的设计来决定下一步往哪走。区别只在于下一轮如何选择。定向进化靠随机多样化加筛选盲目探索；DBTL 用预测模型聪明地选择，这正是它能在无法穷举的组合空间上可行的原因。'
    }
  ],
  oral: {
    q_en: 'How do you optimise a pathway when there are too many combinations to test?',
    q_cn: '当组合多到测不完时，你怎么优化一条通路？',
    model_en: 'With an active learning loop, which is the design-build-test-learn cycle — the standard operating framework of modern synthetic biology. The slide gives only a citation, Pandi and colleagues in Nature Communications in 2022, so the concept is worth spelling out. The problem is combinatorial explosion. If you want to optimise promoter strength times ribosome binding site strength times gene copy number, testing every combination by brute force is impossible — it is exactly the same barrier as library size in the diversity lecture, where the space is far larger than anything you can enumerate. So instead the loop works like this. First, build a small but deliberately diverse set of pathway variants. Second, test them, measuring metabolite output and growth rate using the OMICS layers. Third, train a machine learning model on those results. Fourth, use the model to predict which untested combination is most likely to be better. Fifth, build that one next, and repeat the cycle. What I find satisfying about this as a closing idea is how directly it descends from directed evolution in the previous chapter. Both are iterative loops that make progress without requiring full understanding of the underlying mechanism: you let data, rather than first-principles design, tell you where to go next. That is the same philosophy behind Frances Arnold\'s insight that since we do not really understand proteins, we should let evolution design them. The only difference is how the next round gets chosen. Directed evolution explores blindly, through random diversification followed by selection. DBTL uses a predictive model to choose intelligently. And on problems where the combinatorial space is too large to enumerate — which is where this course keeps arriving, from library coverage to pathway tuning — that is the only realistic way forward.',
    checklist: ['Active learning, the design-build-test-learn cycle', 'Pandi et al., Nature Communications 2022', 'Problem: promoter x RBS x copy number is combinatorially explosive', 'Same barrier as library size in the diversity lecture', 'Step 1: build a small, deliberately diverse variant set', 'Step 2: test — metabolite output and growth rate via OMICS', 'Step 3: train a machine learning model on the results', 'Step 4: predict the best untested combination', 'Step 5: build that one next and repeat', 'Direct descendant of directed evolution', 'Both progress without full mechanistic understanding', 'Difference: DBTL chooses the next round with a model, not at random']
  }
},

{
  id: '5-16',
  chapter: 5,
  lecture: 'Lecture 12',
  section: '5.16',
  enTitle: 'Synthetic chemistry versus synthetic biology — the closing thesis',
  cnTitle: '合成化学与合成生物学——收尾的论点',
  slides: 'L12 s.17',
  coverage: 'full',
  coverageNote: 'The final slide is a one-line thesis contrasting two centuries, with four properties listed under synthetic biology and none under chemistry. Why those four are the whole argument of the course is worth making explicit, since this is the note the course chooses to end on.',
  summary: {
    en: 'The final slide contrasts the twentieth century of synthetic chemistry with the twenty-first century of synthetic biology, and lists four properties under the latter alone: self-optimising, self-repairing, self-propagating, and sustainable and ecologically friendly. Those four are precisely what a biological system offers over a traditional chemical process, and they are the argument the whole course has been building.',
    cn: '最后一张幻灯片把 20 世纪的合成化学与 21 世纪的合成生物学对照起来，并且只在后者名下列出四条性质：自我优化、自我修复、自我繁殖，以及可持续和生态友好。这四条恰恰是生物系统相对传统化学工艺的独特优势，也正是整门课一直在论证的东西。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L12 s.17', src: 'img/figures/L12_s17_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '最后那四条只列在合成生物学名下：**自我优化、自我修复、自我繁殖、可持续。**\n\n' +
            '**因为一个反应釜不会自己变好、不会自己修好，也不会造出更多反应釜。**这就是整门课一直在论证的东西。',
  skipIt: '**第 11–12 讲没有 RECAP 可引**，这是判断——这一节没有可背的事实，它是全课的收束。**建议把那条贯穿线记住**，因为口试很可能会问一个「这门课到底在讲什么」式的开放问题。',
  explain: [
    {
      q: '为什么偏偏是那四条？',
      a: '**因为它们正好是生物系统有、而传统化学工艺没有的东西。**\n\n' +
         '**逐条对照一个反应釜：**\n\n' +
         '**自我优化** —— 一个反应釜不会自己变得更好。**而一个细胞群体会：**放着让它进化 2000 代，适合度自己就恢复了（第 5-7 节的 Syn3.0）。\n\n' +
         '**自我修复** —— 反应釜坏了要人去修。**细胞有 DNA 修复、蛋白质量控制、代谢旁路**（第 5-1 节那个 PLP 例子就是自我修复的一次演示——**尽管对工程师是坏消息**）。\n\n' +
         '**自我繁殖** —— **这一条最硬。**反应釜不会造出更多反应釜。**而细胞会。**\n\n' +
         '这正是第 5-1 节说合成细胞相对 CFPS 的核心优势：**无细胞体系没有规模效应，你消耗的是试剂；而能自我复制的细胞，会不断制造更多的自己和更多的产物。**\n\n' +
         '**可持续、生态友好** —— 常温常压、水相、可再生原料。对比传统化学合成往往需要高温高压、有机溶剂、重金属催化剂。\n\n' +
         '**所以这四条不是四个并列的优点，前三条是同一件事的三个面：这个生产系统是活的。**\n\n' +
         '**而「活的」意味着它自带了工程师本来要费尽力气去实现的三种能力。**',
      takeaway: '反应釜不会自己变好、自己修好、造出更多反应釜。前三条其实是一件事：这个生产系统是活的。'
    },
    {
      q: '整门课的那条贯穿线，怎么用一句话说出来？',
      a: '**「把合成这件事，从化学家的烧瓶交给一个会自我复制、自我优化的活细胞。」**\n\n' +
         '**把十二讲串一遍，你会看到这条线一直没断过：**\n\n' +
         '**第 1 讲**：胰岛素——**6000 个猪胰腺换 300 克**，直到 1982 年 Humulin 让一个发酵罐批次够 1000 人用一年。**这就是把合成交给细胞的第一次胜利。**\n\n' +
         '**第 1-3 节**：为什么要绕道 DNA？因为蛋白层面没有工具。**所以你不是在造分子，你是在给细胞下指令。**\n\n' +
         '**第 2 讲**：选宿主、优化表达、纯化——**全都是在让那个「活的工厂」运转得更好。**\n\n' +
         '**第 7–8 讲**：连遗传密码本身都可以改写——**你现在能让细胞造出自然界里不存在的分子。**\n\n' +
         '**第 9 讲**：不理解也没关系，**让进化替你设计。**\n\n' +
         '**第 11 讲**：把细胞本身精简、重建，**让这个工厂变得可预测。**\n\n' +
         '**第 12 讲**：把整条通路搬进去（青蒿素），**让细胞造出植物才会造的东西。**\n\n' +
         '**从「用细胞造一个人的蛋白」，走到「用细胞造任何你想要的分子，包括自然界没有的」。**\n\n' +
         '**而最后这张幻灯片说的是为什么值得这么走：因为那个工厂是活的。**\n\n' +
         '**口试如果被问到一个开放性的大问题，这条线就是答案的骨架。**',
      takeaway: '从「用细胞造人的蛋白」走到「用细胞造任何分子」。而值得这么走的理由，就是那个工厂是活的。'
    }
  ],
  points: [
    { term: 'The contrast', en: 'Twentieth century, synthetic chemistry, against twenty-first century, synthetic biology.', cn: '20 世纪的合成化学，对照 21 世纪的合成生物学。' },
    { term: 'Self-optimising', en: 'Listed under synthetic biology only.', cn: '只列在合成生物学名下。' },
    { term: 'Self-repairing', en: 'Listed under synthetic biology only.', cn: '只列在合成生物学名下。' },
    { term: 'Self-propagating', en: 'Listed under synthetic biology only.', cn: '只列在合成生物学名下。' },
    { term: 'Sustainable and ecologically friendly', en: 'Listed under synthetic biology only.', cn: '只列在合成生物学名下。' }
  ],
  beyondPoints: [
    { term: 'Why those four and not others', en: 'They are exactly the properties a biological system has that a traditional chemical process does not. A reaction vessel does not improve itself, does not fix itself when damaged, and does not make more reaction vessels.', cn: '这四条恰恰是生物系统拥有而传统化学工艺没有的性质。一个反应釜不会自我改进，损坏了不会自我修复，也不会造出更多反应釜。' },
    { term: 'What the course has actually been arguing', en: 'The ultimate selling point of protein engineering and synthetic biology is not which molecules you can make, but that you can build a production system that optimises itself, repairs itself and reproduces itself. No conventional chemical reactor can do that.', cn: '蛋白质工程和合成生物学的终极卖点，不是「能造出什么分子」，而是「能造出一个会自己优化、自己修复、自己繁殖的生产系统」——这是任何传统化学反应釜都做不到的。' },
    { term: 'The through-line of the whole course', en: 'From insulin and GLP-1 in the first lecture, using living cells to produce complex drug molecules, to engineered yeast making artemisinin and minimised chassis cells here, the course has been making one argument throughout: hand the business of synthesis over from the chemist\'s flask to a self-replicating, self-optimising living cell.', cn: '从第一讲的胰岛素和 GLP-1（用活细胞生产复杂药物分子），到这一讲的青蒿素工程酵母和最小化底盘细胞，整门课其实一直在论证同一件事：把「合成」这件事，从化学家的烧瓶交给会自我复制、自我优化的活细胞。' }
  ],
  terms: [
    { en: 'Self-optimising', cn: '自我优化', def_en: 'The capacity of a living system to improve its own performance under selection without an engineer redesigning it — as laboratory evolution restored JCVI-Syn3.0\'s fitness.', def_cn: '活体系统在选择压力下无需工程师重新设计就能改善自身表现的能力——正如实验室进化恢复了 JCVI-Syn3.0 的适合度。' },
    { en: 'Self-propagating', cn: '自我繁殖', def_en: 'The ability to make more of the production system itself, which is the scale-up argument for cells over cell-free reactions.', def_cn: '能够制造出更多生产系统本身的能力，这正是细胞相对无细胞反应的放大论据。' },
    { en: 'Sustainability argument', cn: '可持续性论据', def_en: 'That biological production uses renewable feedstocks and mild conditions, contrasted with the energy and solvent demands of traditional chemical synthesis.', def_cn: '生物生产使用可再生原料和温和条件，与传统化学合成对能量和溶剂的需求形成对照。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which four properties does the closing slide list under synthetic biology?',
      q_cn: '最后一张幻灯片在合成生物学名下列出了哪四条性质？',
      options: ['Fast, cheap, reproducible and easy to scale up', 'Self-optimising, self-repairing, self-propagating, sustainable', 'Precise, programmable, modular and fully standardised', 'Safe, contained, traceable and tightly regulated'],
      answer: 1,
      why_en: 'And notably nothing is listed under synthetic chemistry. The four are exactly what a living system offers that a reaction vessel cannot.',
      why_cn: '而合成化学名下什么也没列。这四条正是活体系统能提供而反应釜做不到的东西。' },
    { type: 'mcq',
      q_en: 'What is the underlying argument of the closing slide?',
      q_cn: '这张收尾幻灯片背后的论点是什么？',
      options: ['That synthetic chemistry has been rendered obsolete by biology and should be abandoned', 'That the advantage lies in a system that optimises, repairs and reproduces itself', 'That biological production is simply cheaper than chemical synthesis', 'That every synthesis should ultimately be carried out enzymatically'],
      answer: 1,
      why_en: 'The four self- properties are all about the production system rather than the product. That is the shift the whole course has been arguing for, from the chemist\'s flask to a self-replicating living cell.',
      why_cn: '这四条「自我」性质讲的都是生产系统本身而不是产物。这正是整门课一直在论证的转变：从化学家的烧瓶转向会自我复制的活细胞。' },
    { type: 'mcq',
      q_en: 'Which earlier result in this chapter directly illustrates self-optimising?',
      q_cn: '本章中哪个较早的结果直接体现了「自我优化」？',
      options: ['Watermark sequences written into a synthetic genome', 'JCVI-Syn3.0 regaining fitness over 2,000 generations of evolution', 'The lipid divide between archaeal and bacterial membranes', 'Substrate channelling between consecutive pathway enzymes'],
      answer: 1,
      optionRefs: { 0: '5-6', 2: '5-3', 3: '5-13' },
      why_en: 'Nothing was redesigned. The minimised cell recovered more than half its lost fitness purely by propagating under selection — the production system improved itself, which is what no chemical reactor can do.',
      why_cn: '没有做任何重新设计。最小化的细胞仅靠在选择下传代就恢复了一半以上损失的适合度——生产系统自己改进了自己，而这正是化学反应釜做不到的。' },
    { type: 'short',
      q_en: 'Why does the course end on the synthetic chemistry versus synthetic biology contrast?',
      q_cn: '为什么这门课以「合成化学 vs 合成生物学」的对照收尾？',
      accept: ['self-optimising', 'self-repairing', 'self-propagating', 'production system', 'flask'],
      answer_en: 'Because those four properties — self-optimising, self-repairing, self-propagating, and sustainable and ecologically friendly — are precisely what a biological system offers over a traditional chemical process, and nothing is listed on the chemistry side of the table. A reaction vessel does not improve itself, does not repair itself when damaged, and certainly does not make more reaction vessels. The point the course has been building throughout is that the ultimate selling point of protein engineering and synthetic biology is not which molecules you can make — chemistry can make a great many molecules — but that you can build a production system that optimises itself, repairs itself and reproduces itself. And the whole course traces that argument: from insulin and GLP-1 in the first lecture, where living cells produce complex drug molecules that chemistry struggles with, through to engineered yeast making artemisinin and minimised chassis cells here. It has been one continuous argument for handing the business of synthesis over from the chemist\'s flask to a self-replicating, self-optimising living cell.',
      answer_cn: '因为那四条性质——自我优化、自我修复、自我繁殖、可持续且生态友好——恰恰是生物系统相对传统化学工艺的独特优势，而表格的化学那一侧什么都没列。反应釜不会自我改进，损坏了不会自我修复，更不会造出更多反应釜。整门课一直在建立的论点是：蛋白质工程和合成生物学的终极卖点，不是「能造出什么分子」（化学能造的分子非常多），而是「能造出一个会自己优化、自己修复、自己繁殖的生产系统」。整门课都在追踪这条论证：从第一讲的胰岛素和 GLP-1（用活细胞生产化学难以应付的复杂药物分子），一直到这一讲的青蒿素工程酵母和最小化底盘细胞。它自始至终是同一个论证：把「合成」这件事，从化学家的烧瓶交给会自我复制、自我优化的活细胞。'
    }
  ],
  oral: {
    q_en: 'How would you sum up what this course has been arguing?',
    q_cn: '你会怎么总结这门课一直在论证的东西？',
    model_en: 'The final slide does it in one line, contrasting two centuries: the twentieth century of synthetic chemistry against the twenty-first century of synthetic biology. And what is striking is the shape of the table — four properties are listed under synthetic biology and nothing at all under chemistry. Those four are self-optimising, self-repairing, self-propagating, and sustainable and ecologically friendly. I think those are chosen precisely because they are what a biological system has and a traditional chemical process does not. A reaction vessel does not improve its own performance, it does not repair itself when something goes wrong, and it certainly does not produce more reaction vessels. A living cell does all three. And we have actually seen each of them concretely in this course: laboratory evolution restoring JCVI-Syn3.0\'s lost fitness over two thousand generations is self-optimisation with no engineer involved; the argument for minimal cells over cell-free systems was self-propagation, that a dividing cell keeps making more of itself and more product; and the sustainability case runs through the whole metabolic engineering half. So the thesis the course has been building is that the ultimate selling point of protein engineering and synthetic biology is not which molecules you can make — chemistry can make a very great many molecules — but that you can build a production system that optimises, repairs and reproduces itself. And you can trace that argument straight through: from insulin and GLP-1 in the first lecture, where living cells make complex drug molecules that chemistry handles badly, through expression and purification, through cell-free systems and genetic code reprogramming, through directed evolution, to engineered yeast producing artemisinin and minimised chassis cells at the end. It is one continuous case for handing the business of synthesis over from the chemist\'s flask to a self-replicating, self-optimising living cell.',
    checklist: ['Final slide: 20th century synthetic chemistry vs 21st century synthetic biology', 'Four properties listed under biology, nothing under chemistry', 'Self-optimising, self-repairing, self-propagating, sustainable', 'These are what a living system has and a reaction vessel does not', 'A vessel does not improve, repair or reproduce itself', 'Seen concretely: laboratory evolution restored Syn3.0 fitness', 'Seen concretely: self-propagation was the argument for cells over CFPS', 'The thesis is about the production system, not the product', 'Traced from insulin and GLP-1 in lecture 1', 'Through to artemisinin yeast and minimal chassis cells', 'One continuous argument: from the chemist\'s flask to the living cell']
  }
}

]);
