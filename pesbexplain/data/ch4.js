/* =========================================================================
   PESB — Batch 4 · Lecture 9 · Creating Diversity, and Finding the Needle
   Source: notes/md/04_lec9_diversity-screen-select.md
   (Lecture 9-A, creating diversity, 30 slides; Lecture 9-B, screen vs
   selection.)

   The conceptual break with Batches 1-3: everything before this was
   deterministic — you knew the sequence you wanted and built it. From here
   the approach is statistical: make a great many variants and find the good
   one. Directed evolution is rounds of diversify-then-select.

   `points` are from the slides. `beyondPoints` are the md's "beyond the
   slides" blocks.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

/* ============ PART I — CREATING DIVERSITY (9-A) ============ */

{
  id: '4-1',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.1',
  enTitle: 'The shift in mindset, and the decision tree',
  cnTitle: '思路的转变，以及决策树',
  slides: 'L9A s.2–3, s.11, s.16, s.21, s.29',
  coverage: 'full',
  coverageNote: 'The decision-tree slide appears five times in a 30-slide deck, which is the strongest possible signal that it is the skeleton of the lecture. Mapping the four methods onto how much prior knowledge you have is the framing that makes it answerable rather than memorisable.',
  summary: {
    en: 'The conceptual move is from building an exact sequence you already know you want, to exploring sequence space. Nature explores by evolution and mutability; synthetic biology simulates evolution in the lab by creating diversity in a controlled way. Which diversification method you use follows from two questions: do you have a starting sequence, and do you know where you want to mutate.',
    cn: '概念上的转变是：从「造出一条你已经知道自己想要的确切序列」，转向「探索序列空间」。自然界通过进化和可变性来探索；合成生物学则在实验室里模拟进化——以可控的方式制造多样性。用哪种多样化方法，取决于两个问题：有没有起始序列，以及知不知道该改哪里。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '整门课在这一讲转弯：**前面都是「我知道要什么，所以我去造」，从这里开始是「我不知道答案，所以我造一大堆再挑」。**\n\n' +
            '选哪种方法只看两个问题：**有没有起始序列？知不知道该改哪里？**',
  skipIt: '**第 9 讲没有 RECAP 可引**——老师只在第 2–5 讲开头做过 RECAP，回顾第 1–4 讲。但这一节有一个同等级别的一手信号：**老师把「CREATING DIVERSITY」这张决策树重复了五次**（本讲第 3、11、16、21、29 页），每讲完一类方法就回到它一次。**重复五次就是在说：这张图是第 9-A 讲的骨架。**方法名可以忘，这两个问题不能忘。',
  explain: [
    {
      q: '「从确定性到统计性」这个转弯，具体是什么意思？',
      a: '**把前面三章和这一章并排放，差别一眼就出来了。**\n\n' +
         '**第 1–3 讲，全部是确定性的：**\n\n' +
         '我知道要哪条序列 → 设计引物、克隆、表达、纯化。**每一步都有一个明确的目标，成功就是「拿到了我设计的那个东西」。**定点突变尤其典型：我知道 Met222 要换成 Ala，我就去换（第 1-2-4 节）。\n\n' +
         '**从这一讲开始，思维是统计性的：**\n\n' +
         '**我不知道正确答案是什么**，所以我造出一大堆变体，然后想办法从里面找出好的那个。**成功不再是「拿到我设计的东西」，而是「在一个我没设计过的集合里找到了一个有用的」。**\n\n' +
         '**这个转弯的根本原因，第 1-2-4 节就说过了：**Met222 是个幸运案例——机理清楚、位置明确、解法唯一。**但绝大多数时候你面对的是「这个酶在冷水里不太行」，而没有哪个残基写着「问题在我」。**\n\n' +
         '**所以这一讲不是一堆新技术，它是对一个前提的承认：我们对蛋白的理解还不足以做理性设计。**\n\n' +
         '第 4-4 节 Arnold 的诺贝尔奖，得的正是这个洞见：**与其自己设计（我们其实设计不好），不如让进化替我们设计。**',
      takeaway: '前三讲是「知道答案去造」，这一讲开始是「不知道答案，造一堆再挑」。承认理解不足，才有这一讲。'
    },
    {
      q: '那张决策树怎么用？',
      a: '**问两个问题，四种组合正好对应四类方法。**\n\n' +
         '**问题一：有没有起始序列？**\n\n' +
         '**没有** → 你在探索**组合序列空间**，用随机 / 组合文库（第 4-6 节）。这一支到此为止。\n\n' +
         '**有** → 继续问第二个问题。\n\n' +
         '**问题二：知不知道该改哪里？**\n\n' +
         '**知道具体改成什么** → **定点突变**（单点或多点）。\n\n' +
         '**知道改哪几个位置，但不知道换成什么** → **饱和突变**，用简并寡核苷酸。\n\n' +
         '**不知道改哪里，只想产生变体** → **易错 PCR** 或**突变株**。\n\n' +
         '**想重组已有的多样性**（比如上一轮筛出来的一批好突变体）→ **基因重排**。\n\n' +
         '**而真正的轴其实只有一个：你已经知道多少。**\n\n' +
         '**知道得越多 → 越靠近定点突变**：精确、文库小、筛起来轻松。\n\n' +
         '**知道得越少 → 越靠近随机文库**：粗糙、文库巨大、筛起来是场硬仗。\n\n' +
         '**所以这不是四个并列的选项，是一条从「精确小库」到「粗糙大库」的连续谱**，而你的位置由你的无知程度决定。\n\n' +
         '**被问到「怎么给这个酶引入多样性」，先把这两个问题问出来，再给方法。**这比直接报一个方法名好得多——因为它说明你知道方法是从需求推出来的。',
      takeaway: '两个问题四种组合。而真正的轴只有一个：你知道得越多，库越小越精确。'
    },
    {
      q: '9-A 和 9-B 为什么必须放在一起看？',
      a: '**因为造多样性和找出好的那个，缺任何一个都毫无意义。**\n\n' +
         '**只会造多样性**：你有 10¹⁰ 个变体躺在一管 DNA 里，**而你没有办法知道哪一个是好的**。这管东西的价值等于零。\n\n' +
         '**只会筛选**：你的筛选系统再灵敏，**没有多样性可筛**，也什么都找不到。\n\n' +
         '**所以 9-A（造）和 9-B（挑）是一件事的两半。**\n\n' +
         '**而定向进化就是把这两半接成一个循环反复跑：**\n\n' +
         '**多样化 → 筛选 → 再多样化 → 再筛选……**\n\n' +
         '老师在 9-B 的定义幻灯片上把这句话写得很明确：**「定向进化是一系列的 screen 或 selection，中间用进一步的多样化隔开。」**\n\n' +
         '**注意「一系列」和「中间隔开」这两个词——它说明单轮不叫定向进化。**\n\n' +
         '**为什么必须反复？**因为每一轮你只能走一小步（第 4-3 节会讲为什么每轮只引入 1–5 个突变）。想走远，只能多走几轮，**每轮都从上一轮的赢家出发**。\n\n' +
         '**这正是自然选择的逻辑：小步、留优、重复。**\n\n' +
         '所以复习这一整讲时，脑子里应该是一个环，不是两个清单。',
      takeaway: '造和挑缺一不可。定向进化是「多样化 → 筛选」反复循环，单轮不算——因为每轮只能走一小步。'
    }
  ],
  points: [
    { term: 'The conceptual move', en: 'Going from an exact sequence you want to build and engineer, to exploration of sequence space.', cn: '从「一条你想要构建和改造的确切序列」，转向「对序列空间的探索」。' },
    { term: 'What we are imitating', en: 'Nature explores large sequence space by evolution and mutability. In synthetic biology we simulate evolution in the lab, by creating diversity in a controlled way.', cn: '自然界通过进化和可变性来探索广阔的序列空间。在合成生物学中我们在实验室里模拟进化——以可控的方式制造多样性。' },
    { term: 'Branch — you know the exact residues', en: 'Site-directed mutagenesis, single or multiple.', cn: '定点突变，单点或多点。' },
    { term: 'Branch — you know the positions but not the amino acids', en: 'Saturation mutagenesis, using degenerate oligos.', cn: '饱和突变，使用简并寡核苷酸。' },
    { term: 'Branch — you want mutations but do not know where', en: 'Error-prone PCR, or mutator strains.', cn: '易错 PCR，或者突变株。' },
    { term: 'Branch — you want to recombine existing diversity', en: 'Gene shuffling.', cn: '基因重排（gene shuffling）。' },
    { term: 'Branch — no starting sequence at all', en: 'Random or combinatorial libraries, exploring combinatorial sequence space with no template.', cn: '随机或组合文库，在没有模板的情况下探索组合序列空间。' }
  ],
  beyondPoints: [
    { term: 'This lecture is the dividing line of the course', en: 'Batches 1 to 3 were all deterministic — I know the sequence I want, so I build it. Site-directed mutagenesis, cloning, expression, purification: every step has a defined target. From here the thinking is statistical — I do not know the right answer, so I make a great many variants and then find the good one.', cn: '第 1–3 部分全都是确定性的——我知道我要什么序列，所以我把它造出来。定点突变、克隆、表达、纯化，每一步都有明确的目标。从这一讲开始转向统计性的思路——我不知道正确答案是什么，所以我造出一大堆变体，再想办法把好的挑出来。' },
    { term: 'Two halves, both necessary', en: 'Creating diversity is lecture 9-A; finding the one you want, by screen or selection, is 9-B. Directed evolution is the repeated cycle of diversify, select, diversify again, select again.', cn: '制造多样性是 9-A 讲的；把想要的那个找出来（筛选或选择）是 9-B 讲的。定向进化就是「多样化 → 筛选 → 再多样化 → 再筛选」的多轮循环。' },
    { term: 'The framework for answering, in two questions', en: 'If asked how to introduce diversity into an enzyme, ask yourself first: do I have a starting sequence, and do I know where to change it? The four combinations of those two answers give exactly the four classes of method.', cn: '如果被问「怎么给一个酶引入多样性」，先反问自己两个问题：有没有起始序列？知不知道该改哪里？这两个问题的四种组合，正好对应四类方法。' },
    { term: 'The real axis is prior knowledge', en: 'Mapping method onto how much you already know matters far more than memorising method names. More knowledge pushes you towards site-directed mutagenesis — precise, small library. Less knowledge pushes you towards random libraries — coarse, enormous library.', cn: '把方法与「你掌握多少先验知识」对应起来，比背方法名字重要得多。知识越多，越靠近定点突变（精确、小库）；知识越少，越靠近随机文库（粗放、巨大库）。' }
  ],
  terms: [
    { en: 'Sequence space', cn: '序列空间', def_en: 'The set of all possible sequences of a given length. Astronomically large, and evolution has explored only a tiny path through it.', def_cn: '给定长度的所有可能序列构成的集合。大到天文数字，而进化只走过其中极小的一条路径。' },
    { en: 'Directed evolution', cn: '定向进化', def_en: 'Repeated rounds of diversification followed by screening or selection, simulating natural selection in the laboratory.', def_cn: '多轮「多样化—筛选/选择」的循环，在实验室里模拟自然选择。' },
    { en: 'Saturation mutagenesis', cn: '饱和突变', def_en: 'Randomising chosen positions to all possible amino acids, used when you know which positions matter but not which residues to put there.', def_cn: '把选定位点随机化为所有可能的氨基酸；适用于知道哪些位点重要、但不知道该放哪个残基的情况。' },
    { en: 'Combinatorial library', cn: '组合文库', def_en: 'A library built without a template, exploring sequence space by combination rather than by mutating a parent.', def_cn: '不依赖模板构建的文库，通过组合而不是通过改造某个亲本序列来探索序列空间。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'You know which seven active-site positions matter but not what to put there. Which method?',
      q_cn: '你知道活性位点上哪七个位置重要，但不知道该放什么。用哪种方法？',
      options: ['Site-directed mutagenesis, one defined substitution at a time', 'Saturation mutagenesis with degenerate oligonucleotides', 'Error-prone PCR to scatter random point mutations', 'Gene shuffling to recombine homologous parent genes'],
      answer: 1,
      optionRefs: { 0: '4-2', 2: '4-3', 3: '4-4' },
      why_en: 'You have a starting sequence and you know where — but not what. That combination is exactly what saturation mutagenesis with degenerate codons is for.',
      why_cn: '你有起始序列，也知道位置——但不知道放什么。这个组合正好对应用简并密码子做饱和突变。' },
    { type: 'mcq',
      q_en: 'What are the two questions that determine which diversification method to use?',
      q_cn: '决定用哪种多样化方法的两个问题是什么？',
      options: ['How much money do you have, and how much time can you give the project?', 'Do you have a starting sequence, and do you know where you want to mutate?', 'Is the protein soluble in E. coli, and is it toxic to the host?', 'In vivo or in vitro, and how large a library?'],
      answer: 1,
      optionRefs: { 2: '2-3', 3: '4-7' },
      why_en: 'Those two questions have four combinations, and the four combinations map onto the four classes of method. Everything else is detail.',
      why_cn: '这两个问题有四种组合，而这四种组合正好对应四类方法。其余都是细节。' },
    { type: 'mcq',
      q_en: 'What underlying quantity does the decision tree really track?',
      q_cn: '这棵决策树实际上追踪的是什么量？',
      options: ['The cost per variant you are willing to pay', 'How much prior knowledge you have about the protein', 'The expression host the library will be built in', 'The molecular weight of the target protein'],
      answer: 1,
      why_en: 'More knowledge means a more targeted, smaller library — site-directed mutagenesis at one extreme. Less knowledge means a coarser, enormous library — random libraries at the other.',
      why_cn: '知识越多，文库越有针对性、越小——极端是定点突变。知识越少，文库越粗放、越巨大——另一个极端是随机文库。' },
    { type: 'short',
      q_en: 'Draw the decision tree for choosing a diversification method.',
      q_cn: '画出选择多样化方法的决策树。',
      accept: ['starting sequence', 'where', 'site-directed', 'error-prone', 'shuffling', 'random'],
      answer_en: 'The first question is whether you have a starting sequence. If you do, the second question is whether you know where you want to mutate. If you know exactly which residues, use site-directed mutagenesis, at one position or several distant ones. If you know the positions but not which amino acids belong there, use saturation mutagenesis with degenerate oligos. If you want mutations but do not know where, use error-prone PCR or a mutator strain. Separately, if you want to recombine diversity that already exists, use gene shuffling. And if you have no starting sequence at all, you are exploring combinatorial sequence space, which means random or combinatorial libraries. The underlying axis is how much prior knowledge you have: more knowledge gives a precise small library, less knowledge gives a coarse enormous one.',
      answer_cn: '第一个问题是有没有起始序列。如果有，第二个问题是知不知道该改哪里。如果确切知道是哪些残基，就用定点突变，可以是单点也可以是多个相距很远的位点。如果知道位置但不知道该放哪些氨基酸，就用简并寡核苷酸做饱和突变。如果想要突变但不知道在哪里，就用易错 PCR 或突变株。另外，如果想把已有的多样性重新组合，就用基因重排。而如果完全没有起始序列，那就是在探索组合序列空间，意味着随机文库或组合文库。底层的那条轴是「你掌握多少先验知识」：知识越多，文库越精确越小；知识越少，文库越粗放越大。'
    }
  ],
  oral: {
    q_en: 'How would you introduce diversity into an enzyme?',
    q_cn: '你会怎么给一个酶引入多样性？',
    model_en: 'Before naming any method I would ask two questions, because their four combinations give exactly the four classes of approach. First, do I have a starting sequence? Second, do I know where I want to mutate? If I have a sequence and know exactly which residues matter, that is site-directed mutagenesis, either at one position or at several distant positions with a different setup. If I know which positions but not which amino acids should go there, that is saturation mutagenesis using degenerate oligonucleotides. If I want mutations but have no idea where they should be, that is error-prone PCR or a mutator strain. If what I want is to recombine diversity that already exists — say a set of homologues, or the winners from a previous round — that is gene shuffling. And if I have no starting sequence at all and am exploring combinatorial sequence space from scratch, that is a random or combinatorial library. What I would want to make explicit is that the tree is really tracking one quantity: how much prior knowledge I have. The more I know, the more targeted and the smaller the library; the less I know, the coarser and more enormous it becomes. That is more useful than memorising method names. And it is worth noting that this lecture marks the dividing line of the whole course. Everything up to now has been deterministic — I know the sequence I want, so I build it. From here the thinking is statistical: I do not know the right answer, so I make a great many variants and then find the good one. Directed evolution is simply that cycle repeated — diversify, select, diversify again.',
    checklist: ['The move: from building an exact sequence to exploring sequence space', 'Nature explores by evolution; we simulate it in the lab', 'Question 1: do I have a starting sequence?', 'Question 2: do I know where to mutate?', 'Know the residues: site-directed mutagenesis', 'Know positions, not residues: saturation mutagenesis, degenerate oligos', 'Want mutations, do not know where: epPCR or mutator strains', 'Recombine existing diversity: gene shuffling', 'No starting sequence: random or combinatorial libraries', 'The real axis is prior knowledge: more knowledge, smaller targeted library', 'This lecture is the deterministic-to-statistical dividing line of the course']
  }
},

{
  id: '4-2',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.2',
  enTitle: 'Site-directed and saturation mutagenesis — shrinking the codon space',
  cnTitle: '定点突变与饱和突变——压缩密码子空间',
  slides: 'L9A s.4–9',
  coverage: 'full',
  coverageNote: 'The case study, the impossible arithmetic and the reduced-degeneracy codons are on the slides, and the deck poses the shrinking problem as its own quiz question. Noticing that most of the 4 x 10^12 is synonymous waste is what makes the answer obvious rather than arbitrary.',
  summary: {
    en: 'Site-directed mutagenesis is the simplest way to create diversity — a defined mutation at one location, or several distant ones. Saturation mutagenesis randomises chosen positions using degenerate codons, but the arithmetic bites fast: fully randomising 7 codons as NNN needs 64 to the 7, about 4 x 10^12 transformations, which is impossible. The fix is to notice that most of that is synonymous redundancy, and to use reduced-degeneracy codons such as NNK.',
    cn: '定点突变是制造多样性最简单的方式——在一个位置、或几个相距很远的位置引入确定的突变。饱和突变用简并密码子把选定位点随机化，但算术很快就成了障碍：把 7 个密码子用 NNN 完全随机化需要 64⁷ 约 4×10¹² 次转化，这不可能。解决办法是注意到其中大部分是同义冗余，改用 NNK 这类降低简并度的密码子。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.4', src: 'img/figures/L9A_s04_1.webp' },
    { slide: 'L9A s.5', src: 'img/figures/L9A_s05_1.webp' },
    { slide: 'L9A s.6', src: 'img/figures/L9A_s06_1.webp' },
    { slide: 'L9A s.6', src: 'img/figures/L9A_s06_2.webp' },
    { slide: 'L9A s.7', src: 'img/figures/L9A_s07_1.webp' },
    { slide: 'L9A s.8', src: 'img/figures/L9A_s08_1.webp' },
    { slide: 'L9A s.8', src: 'img/figures/L9A_s08_2.webp' },
    { slide: 'L9A s.9', src: 'img/figures/L9A_s09_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '饱和突变的算术会立刻卡住你：**7 个位点全随机（NNN）需要 4×10¹² 次转化，做不到。**\n\n' +
            '而其中**绝大部分是同义冗余**——改用 **NNK** 就白拿 128 倍的缩减，还顺带把终止密码子从 3 个减到 1 个。',
  skipIt: 'VRK / NYC / VAN / NTN 这几个化学限定密码子的具体含义不用背，知道「存在只编码极性或只编码非极性残基的简并密码子」就够。SwiftLib / CoLiDe 这些工具名同理。**第 9 讲没有 RECAP 可引**，这是判断——但 **NNN 与 NNK 的对比必须能算**，那是这一节的核心。',
  explain: [
    {
      q: 'NNN 到 NNK，为什么说这个缩减是「白拿」的？',
      a: '**因为你丢掉的全部是同义冗余，一个氨基酸都没少。**\n\n' +
         '**先看浪费在哪：**\n\n' +
         '7 个位点全随机，**DNA 层面**有 64⁷ ≈ **4.4×10¹²** 种序列。\n\n' +
         '但**蛋白层面**只有 20⁷ ≈ **1.3×10⁹** 种。\n\n' +
         '**两者相除：约 3400 条 DNA 序列对应同一条蛋白序列。**\n\n' +
         '也就是说，你辛辛苦苦做的转化里，**99.97% 是在重复制造你已经有的蛋白**。\n\n' +
         '**NNK 干的事就是把这部分冗余削掉：**\n\n' +
         '**N** = A/T/G/C（4 种），**K** = G 或 T（2 种）。所以 NNK 的简并度是 4×4×2 = **32**，只有 NNN 的一半。\n\n' +
         '**而它仍然编码全部 20 种氨基酸。**\n\n' +
         '7 个位点：32⁷ ≈ **3.4×10¹⁰**，比 4.4×10¹² 少了 **128 倍**。\n\n' +
         '**还白送一条：终止密码子从 3 个（TAA、TAG、TGA）减到 1 个（TAG）。**\n\n' +
         '这一条比听起来重要：**每个含终止密码子的变体都是一个截短的废品**，它占了你的文库容量、占了你的筛选工作量。7 个位点各有 3/64 的概率出终止密码子，累积起来废品率相当可观。**NNK 把这个概率降到三分之一。**\n\n' +
         '**所以 NNK 是行业默认——它没有任何代价。**',
      takeaway: '3400 条 DNA 对应同一条蛋白，全是浪费。NNK 简并度减半但仍编码 20 种，还把终止密码子从 3 减到 1。'
    },
    {
      q: '「7 个位点做不到」，那到底能做到几个？',
      a: '**这个问题值得自己算一遍，因为它决定了你的实验设计。**\n\n' +
         '瓶颈是**转化效率**——你能实际拿到多少个独立克隆（第 4-7 节会正式讲这个天花板）。就算用电转，一个很好的文库也就在 **10⁹–10¹⁰** 这个量级。\n\n' +
         '**用 NNK（每位点 32）反推：**\n\n' +
         '**5 个位点**：32⁵ ≈ 3.4×10⁷ —— **轻松覆盖**。\n\n' +
         '**6 个位点**：32⁶ ≈ 1.1×10⁹ —— **勉强**。\n\n' +
         '**7 个位点**：32⁷ ≈ 3.4×10¹⁰ —— **超了**。\n\n' +
         '**所以实际的上限大约是 5–6 个位点。**这就是为什么幻灯片那个例子里「活性口袋里有 7 个残基」会成为一个问题。\n\n' +
         '**三条出路，而且它们本质上是同一个动作：**\n\n' +
         '**一、去掉同义冗余** —— NNN → NNK。已经讲过。\n\n' +
         '**二、限制字母表** —— 用只编码极性（VAN 给 6 个极性残基）或只编码非极性（NTN 给 5 个非极性残基）的密码子。**如果你从结构上知道这个位置需要疏水残基，那就没必要让它有机会变成 Asp。**\n\n' +
         '**三、少随机化几个位点** —— 用结构挑出真正接触底物的那 3–4 个。\n\n' +
         '**三条路都是同一件事：用你已有的知识换文库大小。**\n\n' +
         '**这正好回到第 4-1 节那条轴**：知道得越多，库可以越小。而库越小，**筛起来越现实**。',
      takeaway: 'NNK 下实际上限约 5–6 个位点。三条出路（去冗余、限字母表、减位点）本质都是用知识换库的大小。'
    },
    {
      q: '「掺杂密码子（spiked codon）」跟前面那些有什么不同？',
      a: '**不同在于它不是均匀随机的——它把文库「以野生型为中心」摆好。**\n\n' +
         '前面所有的简并密码子（NNN、NNK、VAN）都是**均匀**的：那个位置上每种可能的氨基酸机会差不多。**野生型残基在里面并不特殊，它只是众多选项之一。**\n\n' +
         '**掺杂密码子的做法是：在合成时指定每个位置上四种碱基的确切百分比**——典型是**绝大部分是野生型碱基，掺几个百分点的其它三种**。\n\n' +
         '**结果是一个以亲本序列为中心的文库：**大多数变体只跟野生型差几个残基，越远的变体越少。\n\n' +
         '**为什么这有用？回到第 4-3 节那条道理：绝大多数随机突变是有害的。**\n\n' +
         '如果你的起点已经是一个**能工作的蛋白**，那么把它彻底打乱通常只会得到一堆死的东西。**你想要的是「在它附近搜索」，而不是「在整个空间里乱撞」。**\n\n' +
         '**掺杂密码子就是「在附近搜索」的实现方式。**\n\n' +
         '**注意它跟易错 PCR 的关系：两者都是「以亲本为中心的低频随机突变」。**\n\n' +
         '区别在于**掺杂密码子是你指定位置的**（只在你选的那几个密码子上掺），而**易错 PCR 是全基因随机的**。**又一次是「知道多少」这条轴。**\n\n' +
         '（幻灯片提到掺杂密码子在一条序列里的数目通常有限——因为合成时每个掺杂位置都增加了合成的复杂度和成本。）',
      takeaway: '它把文库摆在野生型周围而不是均匀撒开。因为起点已经能工作，你要的是就近搜索，不是乱撞。'
    }
  ],
  points: [
    { term: 'Site-directed mutagenesis', en: 'The simplest way to create diversity — a well-defined mutation at a single location. It can also be performed at multiple distant positions using a different setup.', cn: '制造多样性最简单的方式——在单个位置引入一个明确定义的突变。用不同的设置也可以在多个相距很远的位置上进行。' },
    { term: 'The site-directed case study', en: 'Studying mutations of HIV-1 protease associated with drug resistance.', cn: '研究与耐药性相关的 HIV-1 蛋白酶突变。' },
    { term: 'The saturation case study', en: 'You want an enzyme to accept a different substrate. In the structure you locate 7 amino acids in the active site, all far apart in the sequence.', cn: '你想让一个酶接受不同的底物。在结构中你找到活性位点上的 7 个氨基酸，它们在序列上彼此相距很远。' },
    { term: 'The impossible arithmetic', en: 'To fully randomise 7 codons as NNN requires at least 64 to the 7, which is 4 x 10^12 transformations. Impossible.', cn: '把 7 个密码子用 NNN 完全随机化，至少需要 64⁷ = 4×10¹² 次转化。做不到。' },
    { term: 'NNN', en: 'Degeneracy 64, encodes all 20 amino acids, and includes 3 stop codons — TAA, TAG and TGA.', cn: '简并度 64，编码全部 20 种氨基酸，包含 3 个终止密码子——TAA、TAG、TGA。' },
    { term: 'NNK and NNS', en: 'K is G or T, S is G or C. Degeneracy 32, still encoding all 20 amino acids, with only 1 stop codon, TAG.', cn: 'K 是 G 或 T，S 是 G 或 C。简并度 32，仍然编码全部 20 种氨基酸，只有 1 个终止密码子 TAG。' },
    { term: 'Chemistry-restricted codons', en: 'VRK encodes hydrophilic amino acids and NYC hydrophobic ones. VAN gives Lys, Asn, Gln, His, Glu and Asp — 6 polar residues, no stops. NTN gives Met, Leu, Ile, Val and Phe — 5 nonpolar residues, no stops.', cn: 'VRK 编码亲水氨基酸，NYC 编码疏水氨基酸。VAN 给出 Lys、Asn、Gln、His、Glu、Asp——6 种极性残基、无终止密码子。NTN 给出 Met、Leu、Ile、Val、Phe——5 种非极性残基、无终止密码子。' },
    { term: 'Spiked or doped codons', en: 'Specify the exact base percentages at each position, typically mostly wild-type with a few per cent of the others, so the library is centred on the parent sequence. The number of spiked codons in one sequence is usually limited.', cn: '为每个位置指定确切的碱基百分比，通常以野生型碱基为主、其他几种各占百分之几，使文库以亲本序列为中心。一条序列中掺杂密码子的数量通常有限制。' },
    { term: 'Design tools', en: 'SwiftLib, CoLiDe and IDT. Always check the options with the synthesis provider.', cn: 'SwiftLib、CoLiDe 和 IDT。务必与合成服务商核对可用选项。' }
  ],
  beyondPoints: [
    { term: 'Where the waste is', en: 'Seven fully randomised positions give 64 to the 7, or 4.4 x 10^12 DNA sequences, but only 20 to the 7, or 1.3 x 10^9 proteins. That is about 3,400 DNA sequences per protein sequence — the vast majority of your transformations are synonymous duplicates. Removing that redundancy costs you nothing.', cn: '7 个完全随机化的位点给出 64⁷ = 4.4×10¹² 条 DNA 序列，但只有 20⁷ = 1.3×10⁹ 种蛋白。也就是每种蛋白序列对应约 3400 条 DNA 序列——你绝大部分的转化都是同义重复。去掉这份冗余不需要付出任何代价。' },
    { term: 'Why NNK is the industry default', en: 'It halves the codon space from 64 to 32 while still encoding all 20 amino acids, and cuts stop codons from 3 to 1. For 7 positions that is 32 to the 7, or 3.4 x 10^10 — a 128-fold reduction, obtained for free.', cn: '它把密码子空间从 64 减半到 32，同时仍然编码全部 20 种氨基酸，并把终止密码子从 3 个降到 1 个。对 7 个位点来说就是 32⁷ = 3.4×10¹⁰——免费得到 128 倍的缩减。' },
    { term: 'Three routes to shrinking, one principle', en: 'Remove synonymous redundancy by going from NNN to NNK. Restrict the alphabet by chemistry, using a codon that only encodes polar or only nonpolar residues. Or randomise fewer positions, using the structure to pick the three or four that actually contact the substrate. All three are the same move: trading prior knowledge for library size.', cn: '三条压缩路径：去掉同义冗余（NNN → NNK）；按化学性质限制字母表（只要极性的，或只要疏水的）；减少随机化的位点数（用结构信息挑出真正接触底物的三四个）。三者本质相同：用先验知识换文库大小。' }
  ],
  terms: [
    { en: 'NNK codon', cn: 'NNK 密码子', def_en: 'A degenerate codon where the third position is G or T. Degeneracy 32, all 20 amino acids, only one stop codon — the industry default for saturation mutagenesis.', def_cn: '第三位为 G 或 T 的简并密码子。简并度 32，覆盖全部 20 种氨基酸，只含一个终止密码子——饱和突变的行业默认选择。' },
    { en: 'Degenerate oligonucleotide', cn: '简并寡核苷酸', def_en: 'A synthesised oligo that is a mixture of sequences, made by adding several protected nucleotides at one synthesis step.', def_cn: '本身就是序列混合物的合成寡核苷酸，做法是在某个合成步骤同时加入几种保护过的核苷酸。' },
    { en: 'Spiked (doped) codon', cn: '掺杂密码子', def_en: 'A degenerate position with deliberately unequal base ratios, usually mostly wild-type, so the library stays centred on the parent sequence.', def_cn: '碱基比例被有意设置为不均等的简并位点，通常以野生型为主，使文库保持以亲本序列为中心。' },
    { en: 'Synonymous redundancy', cn: '同义冗余', def_en: 'Multiple DNA sequences encoding the same protein. At seven NNN positions there are about 3,400 DNA variants per protein variant, all of them wasted screening capacity.', def_cn: '多条 DNA 序列编码同一个蛋白。在 7 个 NNN 位点上，每种蛋白变体对应约 3400 种 DNA 变体，这些都是被浪费掉的筛选容量。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is NNK preferred over NNN?',
      q_cn: '为什么 NNK 比 NNN 更受青睐？',
      options: ['It encodes fewer of the 20 amino acids, making the library simpler', 'It halves the codon space to 32 and still encodes all 20 amino acids', 'It avoids GC-rich codons that would make the oligo hard to synthesise', 'It is cheaper because it needs one fewer coupling step per codon'],
      answer: 1,
      optionNotes: {
        0: { en: 'What NNK removes is codons, not amino acids. K means only G or T at the third position, cutting 64 codons to 32 while every one of the 20 amino acids still keeps at least one codon — which is why the saving costs nothing at the protein level.', cn: 'NNK 砍掉的是密码子，不是氨基酸。K 表示第三位只取 G 或 T，把 64 个密码子压到 32 个，而 20 种氨基酸每一种都仍然至少留下一个密码子——所以这个缩减在蛋白层面上没有任何代价。' }
      },
      why_en: 'Two reasons, both free. The saving comes entirely from removing synonymous redundancy, so you lose no protein diversity at all, and having only one stop codon instead of three means fewer truncated dead members.',
      why_cn: '两个理由，而且都不付代价。节省完全来自去掉同义冗余，所以蛋白多样性一点没损失；而只剩一个终止密码子（而不是三个）意味着更少的截短死变体。' },
    { type: 'mcq',
      q_en: 'Randomising 7 positions as NNN gives 4.4 x 10^12 DNA sequences. How many distinct proteins is that?',
      q_cn: '把 7 个位点用 NNN 随机化给出 4.4×10¹² 条 DNA 序列。这对应多少种不同的蛋白？',
      options: ['4.4 x 10^12', '1.3 x 10^9', '3.4 x 10^10', '20'],
      answer: 1,
      optionNotes: {
        0: { en: 'This assumes one protein per DNA sequence. The code is degenerate, so the two numbers cannot be equal: 4.4 x 10^12 divided by 1.3 x 10^9 is about 3,400 DNA sequences per protein sequence, and seeing that redundancy is the entire point of the question.', cn: '这是默认一条 DNA 序列对应一条蛋白。遗传密码是简并的，两个数不可能相等：4.4 × 10¹² 除以 1.3 × 10⁹ 约等于 3400，也就是每条蛋白序列平均对应 3400 条 DNA 序列——看出这个冗余正是这道题的用意。' },
        2: { en: '3.4 x 10^10 is 32 to the 7 — the DNA-level size of an NNK library at seven positions, not a count of proteins. It answers a different question, namely how much the reduced-degeneracy codon saves you. The protein count is 20 to the 7 and does not depend on which degenerate codon you chose.', cn: '3.4 × 10¹⁰ 是 32⁷——七个位点用 NNK 时 DNA 层面的文库大小，不是蛋白的数目。它回答的是另一个问题：换成低简并的密码子能省多少。蛋白数目是 20⁷，跟你用哪种简并密码子无关。' }
      },
      why_en: '20 to the 7, about 1.3 x 10^9 — roughly 3,400 DNA sequences per protein. Seeing that gap is what makes reduced-degeneracy codons obviously the right move.',
      why_cn: '20⁷ ≈ 1.3×10⁹——每种蛋白约对应 3400 条 DNA 序列。看到这个落差，就明白降低简并度的密码子显然是对的做法。' },
    { type: 'mcq',
      q_en: 'What is a spiked codon used for?',
      q_cn: '掺杂密码子是用来做什么的？',
      options: ['Removing every stop codon from an otherwise fully degenerate position', 'Setting exact base ratios so most molecules keep the wild-type base', 'Encoding non-canonical amino acids at one chosen position in the gene', 'Raising the GC content of the randomised region to stabilise it'],
      answer: 1,
      optionRefs: { 2: '3-8' },
      why_en: 'You control the feed ratio during synthesis, so most molecules keep the wild-type base and a few per cent carry alternatives. The library then explores the neighbourhood of the parent rather than all of sequence space.',
      why_cn: '你在合成时控制投料比例，所以大部分分子保留野生型碱基，只有百分之几带其他碱基。文库因此探索的是亲本序列的邻域，而不是整个序列空间。' },
    { type: 'short',
      q_en: 'You need to randomise 7 active-site positions. Explain why NNN is impossible and give three ways to shrink the problem.',
      q_cn: '你需要随机化 7 个活性位点。解释为什么 NNN 不可行，并给出三种缩小问题规模的办法。',
      accept: ['4 x 10', 'NNK', 'chemistry', 'fewer positions', 'synonymous'],
      answer_en: 'NNN at seven positions requires 64 to the seventh power, about 4.4 x 10^12 transformations, which is far beyond any achievable transformation efficiency. The key observation is that most of that number is waste: seven positions give only 20 to the seventh, about 1.3 x 10^9 distinct proteins, so there are roughly 3,400 synonymous DNA sequences per protein sequence. Three ways to shrink it follow. First, remove the synonymous redundancy by using NNK instead of NNN — degeneracy 32 instead of 64, still all twenty amino acids, and only one stop codon instead of three, giving a 128-fold reduction for free. Second, restrict the alphabet by chemistry: if you know a position should stay polar, use VAN, which gives six polar residues and no stops; if nonpolar, NTN, which gives five nonpolar residues and no stops. Third, randomise fewer positions, using the structure to identify the three or four residues that actually contact the substrate rather than all seven. All three are the same underlying move — trading prior knowledge for library size.',
      answer_cn: '7 个位点用 NNN 需要 64⁷ ≈ 4.4×10¹² 次转化，远超任何可达到的转化效率。关键的观察是这个数字里大部分是浪费：7 个位点只对应 20⁷ ≈ 1.3×10⁹ 种不同的蛋白，所以每种蛋白序列约对应 3400 条同义 DNA 序列。由此有三条压缩路径。第一，用 NNK 代替 NNN 去掉同义冗余——简并度从 64 降到 32，仍覆盖全部 20 种氨基酸，终止密码子从 3 个降到 1 个，免费获得 128 倍缩减。第二，按化学性质限制字母表：如果知道某个位点应保持极性，用 VAN（6 种极性残基、无终止密码子）；如果应为非极性，用 NTN（5 种非极性残基、无终止密码子）。第三，减少随机化的位点数，用结构信息找出真正接触底物的三四个残基，而不是全部 7 个。这三者本质上是同一个动作——用先验知识换文库大小。'
    }
  ],
  oral: {
    q_en: 'How do you make a saturation mutagenesis library, and how do you keep it a manageable size?',
    q_cn: '怎么做饱和突变文库？怎么让它保持在可控的规模？',
    model_en: 'The setting is that you want an enzyme to accept a different substrate, and from the structure you identify seven active-site residues, all far apart in the sequence. To explore all possible amino acids at those positions you use primers carrying degenerate codons. The immediate problem is arithmetic: fully randomising seven codons as NNN requires sixty-four to the seventh power, about four times ten to the twelve transformations, which is simply impossible. The way in is to notice where that number is being wasted. Seven positions give four point four times ten to the twelve DNA sequences but only twenty to the seventh, about one point three times ten to the nine, distinct proteins — so there are roughly three thousand four hundred synonymous DNA sequences per protein sequence. The overwhelming majority of your transformations would be duplicates at the protein level, and removing that redundancy costs you nothing. So the main answer is reduced-degeneracy codons. NNK, where the third base is G or T, has a degeneracy of thirty-two instead of sixty-four, still encodes all twenty amino acids, and contains only one stop codon instead of three. For seven positions that is thirty-two to the seventh, three point four times ten to the ten — a hundred and twenty-eight fold reduction, obtained for free, which is why NNK is the industry default. NNS behaves equivalently. The second approach is to restrict the alphabet by chemistry: if you know a position should stay polar, use VAN, which encodes six polar residues and no stop codons; if it should be nonpolar, NTN, which encodes five nonpolar residues and no stops. The third is simply to randomise fewer positions, using the structure to pick the three or four residues that genuinely contact the substrate. There is also the spiked or doped codon, where you specify exact base percentages — typically mostly wild-type with a few per cent of the alternatives — so the library stays centred on the parent sequence. Design tools like SwiftLib, CoLiDe and IDT help, and the rule is always to check what your synthesis provider can actually deliver.',
    checklist: ['Site-directed mutagenesis: simplest, defined mutation at one or several positions', 'Case study: HIV-1 protease drug resistance mutations', 'Saturation case: 7 active-site residues, far apart in sequence', 'NNN at 7 positions = 64^7 = 4 x 10^12 transformations — impossible', 'But only 20^7 = 1.3 x 10^9 proteins: ~3,400 synonymous DNA per protein', 'Solution 1: NNK — 32 not 64, all 20 aa, 1 stop not 3, 128-fold saving', 'Solution 2: chemistry-restricted codons — VAN polar, NTN nonpolar, no stops', 'Solution 3: randomise fewer positions using structural information', 'Spiked codons: exact base percentages, library centred on the parent', 'Tools: SwiftLib, CoLiDe, IDT — always check with the synthesis provider', 'All three solutions trade prior knowledge for library size']
  }
},

{
  id: '4-3',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.3',
  enTitle: 'Error-prone PCR and mutator strains',
  cnTitle: '易错 PCR 与突变株',
  slides: 'L9A s.12–15',
  coverage: 'full',
  coverageNote: 'The applications, the XL-1-Red genotype and the usage protocol are on the slides. How you actually make a PCR error-prone is not stated in the deck at all, and neither is why the target mutation rate is 1 to 5 per gene — both are added here.',
  summary: {
    en: 'Error-prone PCR is for when you want mutations but do not know where. You amplify the target region under error-prone conditions while the rest of the vector is amplified normally, and it suits properties that are not localised — stability being the standard example. Mutator strains such as E. coli XL-1-Red achieve the same thing far more cheaply by lacking three DNA repair pathways, at the cost of mutating the entire plasmid indiscriminately.',
    cn: '易错 PCR 用于「想要突变但不知道该改哪里」的情况。你在易错条件下扩增目标区域，而载体的其余部分按常规 PCR 扩增；它适合改造非局部的性质，稳定性是标准例子。像 E. coli XL-1-Red 这样的突变株通过缺失三条 DNA 修复途径以低得多的成本达到同样目的，代价是无差别地突变整个质粒。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.12', src: 'img/figures/L9A_s12_1.webp' },
    { slide: 'L9A s.13', src: 'img/figures/L9A_s13_1.webp' },
    { slide: 'L9A s.14', src: 'img/figures/L9A_s14_1.webp' },
    { slide: 'L9A s.14', src: 'img/figures/L9A_s14_2.webp' },
    { slide: 'L9A s.15', src: 'img/figures/L9A_s15_1.webp' },
    { slide: 'L9A s.15', src: 'img/figures/L9A_s15_2.webp' },
    { slide: 'L9A s.15', src: 'img/figures/L9A_s15_3.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**每轮 1–5 个突变**是经验最优：太少则大半文库是野生型（浪费筛选量），太多则几乎全是死的（好的被淹没）。\n\n' +
            '而**易错 PCR 适合非局部性质（稳定性），饱和突变适合局部性质（底物特异性）**——因为好突变可能出现的位置完全不同。',
  skipIt: 'XL-1-Red 那三个基因（mutS / mutD / mutT）各自管什么，知道「缺了三条修复途径」就够，不必逐个背。**第 9 讲没有 RECAP 可引**，这是判断——但「1–5 个突变为什么是最优」这条要能讲，它解释了整个定向进化为什么要走很多小步。',
  explain: [
    {
      q: '怎么让一个 PCR「易错」？',
      a: '**先有一个前提，然后四个旋钮。**\n\n' +
         '**前提：必须用不带校对活性的聚合酶——Taq，绝不能用 Pfu 或 Phusion。**\n\n' +
         '回到第 1-5-1 节：校对酶有 3′→5′ 外切活性，**它会把你辛辛苦苦制造的错误一个个改回来**。用了校对酶，下面四个旋钮全都白转。\n\n' +
         '**这一条是很好的考点**：它说明第 1 讲那个「有没有校对」的开关，在这里被反过来用了——**当时的规则是「要表达的就用校对酶」，这里恰恰相反，你要的就是错误。**\n\n' +
         '**四个旋钮：**\n\n' +
         '**不平衡的 dNTP** —— 某一种核苷酸多得多，于是它更容易被错误掺入。\n\n' +
         '**加锰离子（Mn²⁺）** —— 它部分替代镁，而**镁是保证碱基配对保真度的关键**（回到第 3-4 节：镁屏蔽负电、稳定结构）。换成锰之后配对的严格性大幅下降。**这是最有力的一个旋钮。**\n\n' +
         '**提高镁浓度** —— 稳定错配的引物-模板对，让已经配错的地方也能被延伸下去。\n\n' +
         '**增加循环数** —— 错误是**每轮累积**的，多跑几轮，突变率成倍上升。\n\n' +
         '**四个旋钮的共同点：全都在降低「正确配对」相对于「错误配对」的优势。**理解了这一点，就不用背它们了。',
      takeaway: '前提是必须用 Taq（校对酶会把错误改回去）。四个旋钮都在削弱正确配对的优势，锰离子最有力。'
    },
    {
      q: '为什么目标是「每个基因 1–5 个突变」，不是越多越好？',
      a: '**因为两头都是失败，而且失败的方式完全不同。**\n\n' +
         '**突变太少**（比如平均每个基因 0.2 个）：**你的文库里大部分克隆是野生型。**\n\n' +
         '筛选能力是有限的（第 4-7、4-8 节），你花在筛野生型上的每一个孔都是浪费。\n\n' +
         '**突变太多**（比如平均 20 个）：**几乎每个变体都是死的。**\n\n' +
         '因为**绝大多数随机突变是有害的**——这是蛋白工程里最基本的一条统计事实。一个蛋白是被进化优化过的，随机改动它，向下的路远远多于向上的路。改 20 处，几乎必然砸中某个要害。\n\n' +
         '**结果是：那些真正有益的变体被淹没在一片死亡里，你筛一百万个也找不到。**\n\n' +
         '**1–5 个是这两种失败之间的经验最优。**\n\n' +
         '**而这条道理直接解释了整个定向进化的策略：为什么要走很多小步，而不是一步到位。**\n\n' +
         '**每轮小改一点 → 筛出改进的 → 以它为新起点 → 再小改一点。**\n\n' +
         '**这正是自然选择的逻辑。**自然界也不是一次把基因组打乱重来，而是每代少量突变、留下活得好的。\n\n' +
         '**所以「为什么定向进化要做很多轮」这个问题的答案，就藏在「每轮只能改 1–5 个」这个数字里。**',
      takeaway: '太少则大半是野生型浪费筛选量，太多则好的被死的淹没。这个数字直接解释了为什么要走很多轮小步。'
    },
    {
      q: '为什么稳定性用易错 PCR，底物特异性用饱和突变？',
      a: '**因为两种性质在蛋白上的「位置」完全不同。**\n\n' +
         '**稳定性是一个整体性质（非局部）。**\n\n' +
         '一个能提高热稳定性的突变，可能出现在**表面**（改善溶剂化）、**核心**（填补空腔）、**界面**、或者某个**柔性环**上。**你事先无法知道该看哪里**——甚至结构解出来了也常常看不出来。\n\n' +
         '**所以只能全基因随机撒网，也就是易错 PCR。**\n\n' +
         '**底物特异性是一个高度局部的性质。**\n\n' +
         '决定酶接受哪种底物的，就是**活性口袋里那几个直接接触底物的残基**。你有结构的话，可以直接把它们指出来。\n\n' +
         '**所以应该把火力集中在那几个位置上——饱和突变。**\n\n' +
         '**如果反过来用会怎样？**\n\n' +
         '用易错 PCR 改特异性：突变绝大部分落在跟底物无关的地方，**纯属浪费**。\n\n' +
         '用饱和突变改稳定性：你把火力集中在活性口袋，**而有益的稳定化突变可能在离它很远的表面上，你根本没搜到那里**。\n\n' +
         '**所以这不是「哪个方法更好」，是「你的目标性质是局部的还是弥散的」。**\n\n' +
         '**这是第 4-1 节那条轴的一个具体应用**：你的知识不只包括「知不知道具体残基」，还包括「知不知道该在哪个区域找」。',
      takeaway: '稳定性可能来自任何位置（弥散），所以全基因撒网；特异性只在活性口袋（局部），所以集中火力。'
    },
    {
      q: '突变株便宜又简单，为什么没取代易错 PCR？',
      a: '**因为它无差别地突变整个质粒——包括那些你绝对不希望被改动的部分。**\n\n' +
         '**易错 PCR**：只突变你扩增的那一段。突变率可以通过锰、dNTP 比例、循环数**精细调节**。代价是要设计引物、要优化条件。\n\n' +
         '**突变株（比如 XL-1-Red，缺三条 DNA 修复途径）**：把质粒转进去、传几代、再抽出来就完事了。**几乎免费，而且傻瓜化。**但它突变的是**整个质粒**：\n\n' +
         '**抗性基因被改坏** → 那个克隆直接死掉。这个还算好，因为你至少不会被误导。\n\n' +
         '**启动子被改坏** → **这一条最阴险。**那个变体的蛋白根本没被表达，你测出来是「没活性」，于是你把它扔掉了——**而它的编码序列可能恰好是一个很好的突变体。**\n\n' +
         '**你会得出「这个变体不行」的结论，而真相是「它没被表达」。**\n\n' +
         '**复制起点被改坏** → 拷贝数变了，表达量跟着变，同样让你的读数不可信。\n\n' +
         '**所以两者的取舍是：精确可控 vs 便宜省事。**\n\n' +
         '突变株适合**初步的、大范围的探索**，或者你的载体上没什么要紧的东西。**要做定量比较、或者要相信「没活性」这个读数时，用易错 PCR。**',
      takeaway: '突变株连启动子和抗性基因一起改。启动子坏了你会读成「没活性」而扔掉一个好变体——这个误导最贵。'
    }
  ],
  points: [
    { term: 'When to use epPCR', en: 'When you want mutations, but do not know where.', cn: '当你想要突变、但不知道该改哪里的时候。' },
    { term: 'How it is set up', en: 'Choose the region you want to be error-prone and amplify it under error-prone conditions, while the rest of the vector is amplified as a standard PCR. Commercial kits exist, such as Agilent GeneMorph II.', cn: '选定你希望出错的区域，在易错条件下扩增它，而载体的其余部分用常规 PCR 扩增。有商品化试剂盒，例如 Agilent GeneMorph II。' },
    { term: 'What it suits', en: 'Better for evolving protein properties that are not localised — for example stability, to heat or to denaturant.', cn: '更适合改造非局部化的蛋白性质——例如对热或对变性剂的稳定性。' },
    { term: 'XL-1-Red genotype', en: 'E. coli XL-1-Red is deficient in three primary DNA repair pathways: mutS for mismatch repair, mutD for the proofreading epsilon subunit of DNA Pol III, and mutT for oxidised-nucleotide sanitisation, which removes 8-oxo-dGTP.', cn: 'E. coli XL-1-Red 缺失三条主要的 DNA 修复途径：mutS 负责错配修复，mutD 是 DNA Pol III 的校对 ε 亚基，mutT 负责清除氧化核苷酸（去除 8-oxo-dGTP）。' },
    { term: 'How a mutator strain is used', en: 'Transform plasmids into the mutator strain, propagate for several generations, and prep the DNA back out to get a randomised library.', cn: '把质粒转化进突变株，传代若干代，再把 DNA 抽提出来，就得到一个随机化的文库。' },
    { term: 'The selling point', en: 'A very simple and economic way of introducing random point mutations throughout the gene of interest.', cn: '一种在目的基因全长引入随机点突变的、非常简单且经济的方法。' }
  ],
  beyondPoints: [
    { term: 'How you actually make a PCR error-prone', en: 'Use a non-proofreading polymerase — Taq, never Pfu or Phusion — since no 3-prime to 5-prime exonuclease means no error correction. That is the precondition; a proofreading enzyme would undo everything else. Then supply unbalanced dNTPs so one nucleotide is misincorporated, add manganese which partially substitutes for magnesium and dramatically reduces base-pairing fidelity, raise the magnesium to stabilise mismatched primer-template pairs, and run more cycles so errors accumulate multiplicatively.', cn: '用没有校对功能的聚合酶——Taq，绝不能用 Pfu 或 Phusion——因为没有 3′→5′ 外切酶活性就没有纠错。这是前提；有校对功能的酶会把后面所有措施都抵消掉。然后使用不平衡的 dNTP 让某一种核苷酸被错误掺入，加入锰离子（它部分取代镁离子并大幅降低碱基配对保真度），提高镁离子浓度以稳定错配的引物–模板对，并增加循环数使错误按乘性累积。' },
    { term: 'Why the target is 1 to 5 mutations per gene', en: 'Too few and most of your library is wild-type, wasting screening capacity. Too many and almost every variant is inactive, because most random mutations are deleterious, so you lose the functional variants in a sea of dead ones. One to five per gene per round is the empirical optimum between those failure modes.', cn: '太少，文库里大部分是野生型，浪费筛选容量。太多，几乎每个变体都失活，因为大多数随机突变是有害的，于是有功能的变体淹没在一片死酶里。每轮每个基因 1–5 个突变是这两种失效模式之间的经验最优点。' },
    { term: 'Why directed evolution takes many small steps', en: 'The same logic explains the whole strategy: take a small step each round, keep what improved, and continue — which is precisely the logic of natural selection, rather than mutating heavily all at once.', cn: '同样的逻辑解释了整个策略：每轮只走一小步，把变好的留下来再继续——这正是自然选择的逻辑，而不是一次性猛烈突变。' },
    { term: 'Why epPCR suits stability and saturation suits specificity', en: 'Stability is a collective property of the whole protein, so a beneficial mutation might appear anywhere — surface, interface or loop — and you cannot know in advance where to look. Substrate specificity is a highly local property, so targeting the active-site pocket with saturation mutagenesis is far more efficient.', cn: '稳定性是整个蛋白的集体属性，有益突变可能出现在任何位置——表面、界面或 loop 区——你事先不可能知道该看哪里。而底物特异性是高度局部的性质，所以用饱和突变针对活性口袋效率高得多。' },
    { term: 'The mutator strain trade-off', en: 'epPCR mutates only the segment you amplify, has a tunable rate through manganese, dNTP ratios and cycle number, but needs primer design and optimisation. A mutator strain mutates the entire plasmid, is tunable only coarsely by generation number, is almost free and trivially simple — but it also mutates the resistance gene, the origin and the promoter. If the resistance gene is damaged that clone dies; if the promoter is damaged you will wrongly conclude the variant is inactive when it simply was not expressed.', cn: 'epPCR 只突变你扩增的那一段，突变率可以通过锰离子、dNTP 比例和循环数调节，但需要设计引物和优化条件。突变株突变整个质粒，只能靠传代次数粗调，几乎免费且极其简单——但它也会突变抗性基因、复制起点和启动子。抗性基因被打坏，那个克隆直接死掉；启动子被打坏，你会误以为「这个突变体没活性」，其实只是没表达。' }
  ],
  terms: [
    { en: 'Error-prone PCR (epPCR)', cn: '易错 PCR', def_en: 'PCR run under conditions that deliberately degrade polymerase fidelity, introducing random mutations across an amplified region.', def_cn: '在有意降低聚合酶保真度的条件下进行的 PCR，在被扩增区域内引入随机突变。' },
    { en: 'Mutator strain', cn: '突变株', def_en: 'A bacterial strain deficient in DNA repair, so plasmids propagated in it accumulate random mutations. XL-1-Red lacks mutS, mutD and mutT.', def_cn: 'DNA 修复缺陷的细菌菌株，在其中传代的质粒会累积随机突变。XL-1-Red 缺失 mutS、mutD 和 mutT。' },
    { en: 'Proofreading exonuclease', cn: '校对外切酶', def_en: 'The 3-prime to 5-prime activity that removes misincorporated bases. Taq lacks it, which is why Taq is the polymerase of choice for epPCR.', def_cn: '去除错误掺入碱基的 3′→5′ 活性。Taq 没有这个活性，这正是易错 PCR 首选 Taq 的原因。' },
    { en: 'Delocalised property', cn: '非局部性质', def_en: 'A trait such as thermostability that arises from the whole protein rather than one site, so beneficial mutations cannot be predicted to a location.', def_cn: '像热稳定性这样由整个蛋白而非某一个位点决定的性状，因此无法预测有益突变会出现在哪里。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which polymerase must you use for error-prone PCR, and why?',
      q_cn: '易错 PCR 必须用哪种聚合酶？为什么？',
      options: ['Phusion, because its speed lets you run the extra cycles needed', 'Taq, because it lacks a 3-prime to 5-prime proofreading exonuclease', 'Pfu, because its accuracy keeps the mutations evenly distributed', 'Any polymerase, because manganese and unbalanced dNTPs do the work'],
      answer: 1,
      optionRefs: { 0: '1-5-1', 2: '1-5-1' },
      why_en: 'This is the precondition for everything else. A proofreading enzyme would correct the errors you are deliberately trying to create, undoing the effect of unbalanced dNTPs, manganese and extra cycles.',
      why_cn: '这是其他所有措施的前提。有校对功能的酶会把你有意制造的错误纠正掉，从而抵消不平衡 dNTP、锰离子和额外循环数的效果。' },
    { type: 'mcq',
      q_en: 'Which three genes are mutated in E. coli XL-1-Red?',
      q_cn: 'E. coli XL-1-Red 中突变的是哪三个基因？',
      options: ['recA, endA, lon', 'mutS, mutD, mutT', 'trxB, gor, lacY', 'dam, dcm, mcrA'],
      answer: 1,
      optionRefs: { 0: '1-9', 2: '2-5', 3: '1-11' },
      why_en: 'mutS removes mismatch repair, mutD removes the proofreading epsilon subunit of Pol III, and mutT removes sanitisation of oxidised nucleotides. Losing all three simultaneously is what makes the strain hypermutable.',
      why_cn: 'mutS 去掉错配修复，mutD 去掉 Pol III 的校对 ε 亚基，mutT 去掉对氧化核苷酸的清除。同时失去这三者正是该菌株高突变率的原因。' },
    { type: 'mcq',
      q_en: 'What is the main drawback of a mutator strain compared with epPCR?',
      q_cn: '相比易错 PCR，突变株的主要缺点是什么？',
      options: ['It costs far more per round of mutagenesis than error-prone PCR', 'It mutates the whole plasmid, not only the gene you targeted', 'It mutates the bacterial chromosome and leaves the plasmid alone', 'It needs a special pair of primers flanking the region to mutate'],
      answer: 1,
      why_en: 'It has no way of knowing which segment is your gene. A damaged resistance gene kills the clone outright; a damaged promoter is worse, because you will record the variant as inactive when it simply was not expressed.',
      why_cn: '它无从知道哪一段是你的基因。抗性基因被打坏，克隆直接死掉；启动子被打坏更糟，因为你会把那个变体记为「无活性」，而实际上它只是没有表达。' },
    { type: 'short',
      q_en: 'Why is the target mutation rate only 1 to 5 per gene per round?',
      q_cn: '为什么目标突变率只是每轮每个基因 1–5 个？',
      accept: ['too few', 'wild-type', 'too many', 'inactive', 'deleterious'],
      answer_en: 'Because it sits between two failure modes. Too few mutations and most of your library is still wild-type, so you spend your screening capacity re-testing the parent. Too many and almost every variant is inactive, because the overwhelming majority of random mutations are deleterious or neutral and beneficial ones are very rare — so the functional variants get lost in a sea of dead ones. One to five per gene per round is the empirical optimum. The same reasoning explains why directed evolution proceeds through many small rounds rather than one heavy mutagenesis: each round takes a small step, keeps what improved, and continues from there, which is exactly the logic of natural selection.',
      answer_cn: '因为它处在两种失效模式之间。突变太少，文库里大部分仍是野生型，你的筛选容量都花在重复检测亲本上。突变太多，几乎每个变体都失活，因为绝大多数随机突变是有害或中性的、有益突变极其稀少——于是有功能的变体淹没在一片死酶里。每轮每个基因 1–5 个是经验最优点。同样的推理解释了为什么定向进化要走很多小轮次而不是一次猛烈突变：每轮只走一小步，把变好的留下，再从那里继续，这正是自然选择的逻辑。'
    }
  ],
  oral: {
    q_en: 'How would you introduce random mutations across a gene, and what governs the mutation rate?',
    q_cn: '怎么在一个基因上引入随机突变？突变率由什么决定？',
    model_en: 'Two routes. Error-prone PCR is for when you want mutations but do not know where: you amplify the region you want mutated under error-prone conditions while the rest of the vector is amplified as a normal PCR, and there are commercial kits such as Agilent GeneMorph II. The deck does not say how you actually make a PCR error-prone, but the levers are standard. The precondition is a non-proofreading polymerase — Taq, never Pfu or Phusion — because without a three-prime to five-prime exonuclease there is no error correction; a proofreading enzyme would undo everything else you do. On top of that: unbalanced dNTPs so one nucleotide is preferentially misincorporated; manganese, which partially substitutes for magnesium and dramatically reduces base-pairing fidelity; raised magnesium, which stabilises mismatched primer-template pairs; and more cycles, since errors accumulate multiplicatively. The target is typically one to five mutations per gene per round, and that is a genuine optimum worth defending. Too few and most of your library is wild-type, so you waste screening capacity. Too many and nearly every variant is inactive, because most random mutations are deleterious — the good ones drown in a sea of dead ones. The same logic is why directed evolution proceeds in many small rounds rather than one heavy mutagenesis. The second route is a mutator strain, E. coli XL-1-Red, which lacks three repair pathways: mutS for mismatch repair, mutD for the proofreading subunit of Pol III, and mutT for sanitising oxidised nucleotides. You transform your plasmid in, propagate for several generations, and prep the DNA back out. It is very simple and almost free — but its drawback is that it mutates the whole plasmid indiscriminately, including the resistance gene, the origin and the promoter. A damaged resistance gene kills the clone; a damaged promoter is worse, because you will score the variant as inactive when it was merely unexpressed. That targeting is what makes epPCR worth the extra effort. One more distinction: epPCR suits delocalised properties like thermostability, where a beneficial mutation could be anywhere, whereas a local property like substrate specificity is much better attacked by saturation mutagenesis of the active site.',
    checklist: ['epPCR: for mutations when you do not know where', 'Amplify target region error-prone, rest of vector normally', 'Precondition: non-proofreading polymerase, Taq not Pfu/Phusion', 'Levers: unbalanced dNTPs, Mn2+, raised Mg2+, more cycles', 'Target 1-5 mutations per gene per round', 'Too few: library mostly wild-type. Too many: everything inactive', 'Hence directed evolution takes many small rounds', 'XL-1-Red: mutS, mutD, mutT — mismatch, proofreading, oxidised nucleotides', 'Transform, propagate several generations, prep DNA out', 'Drawback: mutates the whole plasmid — resistance, origin, promoter', 'Damaged promoter misleads you into scoring a variant as inactive', 'epPCR suits delocalised traits (stability); saturation suits local ones (specificity)']
  }
},

{
  id: '4-4',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.4',
  enTitle: 'Gene shuffling — sexual PCR',
  cnTitle: '基因重排——「有性 PCR」',
  slides: 'L9A s.17–20',
  coverage: 'full',
  coverageNote: 'The definition, the Arnold citation and the P450 case study are on the slides. The mechanism is not, and neither is why recombining beneficial mutations beats generating new ones — which is the reason this work won a Nobel Prize.',
  summary: {
    en: 'Gene shuffling recombines homologous DNA sequences during in vitro molecular evolution. Frances Arnold won the 2018 Nobel Prize in Chemistry for the directed evolution of enzymes, and the slide quotes her: science, like all human endeavours, is evolutionary — we build by adding to and recombining what is already there. The case study is the cytochrome P450 family, heme redox enzymes that hydroxylate a wide range of substrates.',
    cn: '基因重排是在体外分子进化过程中重组同源 DNA 序列。Frances Arnold 因「酶的定向进化」获 2018 年诺贝尔化学奖，幻灯片引用了她的话：科学和一切人类事业一样是演化性的——我们通过在已有基础上添加和重组来建造。案例是细胞色素 P450 家族，这类含血红素的氧化还原酶能羟化多种底物。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.17', src: 'img/figures/L9A_s17_1.webp' },
    { slide: 'L9A s.18', src: 'img/figures/L9A_s18_1.webp' },
    { slide: 'L9A s.19', src: 'img/figures/L9A_s19_1.webp' },
    { slide: 'L9A s.19', src: 'img/figures/L9A_s19_2.webp' },
    { slide: 'L9A s.19', src: 'img/figures/L9A_s19_3.webp' },
    { slide: 'L9A s.20', src: 'img/figures/L9A_s20_1.webp' },
    { slide: 'L9A s.20', src: 'img/figures/L9A_s20_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '基因重排的关键优势是：**它重组的是进化已经验证过的好突变**——每一块砖都是好砖，你只是在换堆法。\n\n' +
            '而易错 PCR 是随机造新砖，**而绝大多数新砖是坏的**。',
  skipIt: 'P450 这个案例的产业细节、以及 Arnold 那句话的原文，不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**「无引物 PCR，让片段互相当引物」这个机制要能讲**，那是这个方法最巧的一步。',
  explain: [
    {
      q: '基因重排具体是怎么做的？「无引物 PCR」是什么意思？',
      a: '**四步，而第三步是最巧的一步。**\n\n' +
         '**一、准备一组同源基因。**可以是不同物种的直系同源基因，也可以是**上一轮筛出来的一批改良突变体**（后者是定向进化里最常用的方式）。\n\n' +
         '**二、用 DNase I 随机切碎。**把它们都剪成小片段，混在一起。\n\n' +
         '**三、跑一个不加引物的 PCR。**\n\n' +
         '**这就是最巧的地方：既然没有引物，谁来起始延伸？——片段自己。**\n\n' +
         '这些片段来自同源序列，所以**它们之间大片区域是互补的**。变性、退火之后，**一个片段会贴到另一个片段上，充当彼此的引物**，然后聚合酶从那里延伸。\n\n' +
         '**而关键在于：贴上去的那个片段，可能来自另一个亲本。**\n\n' +
         '于是延伸的时候**「跳」到了另一个亲本的序列上**。反复几轮，每个分子上就积累了来自多个亲本的片段——**嵌合体（chimera）就这么产生了。**\n\n' +
         '**四、用外侧引物把全长扩出来。**\n\n' +
         '**所以「无引物」不是省了一步，它是整个机制的核心：正因为没有引物，片段才必须互相配对，而互相配对才会跨亲本跳跃。**',
      takeaway: '不加引物，片段就只能互相当引物；而配上去的片段可能来自另一个亲本，延伸时就「跳」过去了。'
    },
    {
      q: '为什么说重排比随机突变「聪明」？',
      a: '**因为它换的是砖的堆法，而不是造新砖——而随机造出来的新砖绝大多数是坏的。**\n\n' +
         '**易错 PCR 的处境**（第 4-3 节）：每一个突变都是新的、未经检验的。**而绝大多数随机突变是有害的。**所以你每轮只敢改 1–5 个，而且大部分变体是废品。\n\n' +
         '**基因重排的处境完全不同：**\n\n' +
         '你投进去的每一个亲本，**要么是自然界演化出来的（经过了几百万年的检验），要么是上一轮筛出来的赢家（经过了你的检验）**。\n\n' +
         '**每一块砖都已经被验证是好砖。**你做的只是把它们重新组合。\n\n' +
         '**所以重排产生的变体，「一开始就是活的」的比例远远高于随机突变。**\n\n' +
         '**而「有性生殖」这个比喻是准确的，不是修辞：**\n\n' +
         '有性生殖的核心优势正是**重组**——把不同个体身上的有益等位基因**组合到一起**，同时把有害突变**甩掉**（因为重组会把它们分配到不同的后代身上）。\n\n' +
         '**基因重排在试管里对基因做的是同一件事。**\n\n' +
         '**实际工作中两者是配合使用的：**易错 PCR 负责**产生新的多样性**（造新砖），基因重排负责**把好的组合起来**（换堆法）。**只造新砖走不远，只换堆法则会耗尽已有的多样性。**',
      takeaway: '亲本要么被进化验证过、要么是上一轮的赢家，所以每块砖都是好砖。跟有性生殖的优势是同一件事。'
    },
    {
      q: 'Arnold 那句话和那个诺贝尔奖，到底在说什么？',
      a: '**在说一件让很多人不舒服的事：我们对蛋白的理解，还不足以支持理性设计。**\n\n' +
         '她的原话是：**「科学和一切人类事业一样是演化性的——我们通过在已有基础上添加和重组来建造。」**\n\n' +
         '**这句话表面上是在讲科学史，实际上是在讲方法论。**\n\n' +
         '**理性设计的前提是：我理解这个蛋白，所以我能算出该改什么。**\n\n' +
         'Met222 那个案例（第 1-2-4 节）成立，是因为机理特别清楚：漂白剂氧化甲硫氨酸、它又紧挨着催化位点。**因果链完整，所以一次突变就解决问题。**\n\n' +
         '**但绝大多数问题不长这样。**「让这个酶在冷水里工作得更好」——你能算出该改哪几个残基吗？**算不出来。**蛋白的稳定性、活性、特异性都是几百个残基集体作用的结果，我们没有能预测它的模型。\n\n' +
         '**Arnold 的贡献是承认这一点，然后绕开它：既然算不出来，那就别算——让进化去搜。**\n\n' +
         '**这个洞见的分量在于它是反直觉的。**在一个以「理解机理」为荣的领域里，她说的是「**你可以在不理解的情况下把它做出来**」。\n\n' +
         '**而这正是第 4-1 节那个转弯的哲学基础**：从确定性到统计性，不是因为统计方法更时髦，**是因为我们的知识不够，而承认这一点反而让事情做成了。**',
      takeaway: '理性设计的前提是理解，而我们对蛋白的理解不够。她的贡献是承认这一点，然后让进化去搜。'
    }
  ],
  points: [
    { term: 'What it does', en: 'Recombines homologous DNA sequences during in vitro molecular evolution.', cn: '在体外分子进化过程中重组同源的 DNA 序列。' },
    { term: 'The Nobel Prize', en: 'Frances H. Arnold, Nobel Prize in Chemistry 2018, for the directed evolution of enzymes.', cn: 'Frances H. Arnold，2018 年诺贝尔化学奖，表彰「酶的定向进化」。' },
    { term: 'Her quotation', en: 'Science, like all human endeavors, is evolutionary. We build by adding to and recombining what is already there.', cn: '科学和一切人类事业一样，是演化性的。我们通过在已有的东西上添加和重组来建造。' },
    { term: 'The case study', en: 'The cytochrome P450 family of heme-containing redox enzymes, which hydroxylate a wide range of substrates to generate products of medical and industrial importance — fine chemical synthesis and production of human drug metabolites.', cn: '细胞色素 P450 家族，一类含血红素的氧化还原酶，能羟化多种底物以生成具有医学和工业价值的产物——精细化学品合成，以及人类药物代谢物的生产。' }
  ],
  beyondPoints: [
    { term: 'The mechanism, from Stemmer 1994', en: 'Take a set of homologous genes — orthologues from different species, or a batch of improved mutants from the previous round. Cut them into small fragments randomly with DNase I. Run a PCR with no primers, so the fragments anneal to each other by homology, prime each other and extend. Because the fragments come from different parents, extension jumps between parents, generating recombinant chimeras. Finally amplify the full length with outer primers.', cn: '机制（DNA shuffling，Stemmer 1994）：取一组同源基因——不同物种的直系同源基因，或上一轮筛出的一批优良突变体。用 DNase I 随机切成小片段。不加引物做 PCR，片段之间靠同源序列互相退火、互为引物、互相延伸。由于片段来自不同亲本，延伸时会在亲本之间跳来跳去，产生重组嵌合体。最后用外侧引物把全长扩增出来。' },
    { term: 'Why this beats random mutation', en: 'Error-prone PCR takes one small step at a time and most of those steps are harmful. Gene shuffling recombines mutations that evolution has already validated as beneficial — every brick is a good brick, and you are only changing how they are stacked.', cn: '易错 PCR 是一次走一小步，而且大部分步子是有害的。基因重排则是把已经被进化验证过有益的突变重新组合——每一块砖都是好砖，你只是在换搭法。' },
    { term: 'Why the sexual metaphor is accurate', en: 'The core advantage of sexual reproduction is exactly recombination: combining beneficial alleles from different individuals while shedding deleterious mutations. Shuffling does the same thing to genes in a tube.', cn: '「有性」这个比喻是准确的：有性生殖的核心优势正是重组——把不同个体的优良等位基因组合到一起，同时把有害突变甩掉。基因重排在试管里对基因做的是同一件事。' },
    { term: 'The insight behind the Nobel Prize', en: 'Arnold\'s central contribution was recognising that rather than designing rationally — since we do not actually understand proteins well enough — it is better to let evolution do the designing for us.', cn: 'Arnold 获奖的核心贡献是意识到：与其做理性设计（我们其实并不真正理解蛋白），不如让进化替我们设计。' }
  ],
  terms: [
    { en: 'DNA shuffling', cn: 'DNA 重排', def_en: 'Fragmenting homologous genes with DNase I and reassembling them by primerless PCR, so extension jumps between parents and creates chimeras.', def_cn: '用 DNase I 把同源基因切成片段，再通过无引物 PCR 重新组装，延伸过程在不同亲本间跳跃从而产生嵌合体。' },
    { en: 'Primerless PCR', cn: '无引物 PCR', def_en: 'A reassembly PCR in which the fragments themselves act as primers for one another through homology, which is what allows recombination between parents.', def_cn: '一种重组装 PCR，片段依靠同源性互为引物，这正是亲本之间能够发生重组的原因。' },
    { en: 'Chimera', cn: '嵌合体', def_en: 'A recombinant sequence assembled from segments of two or more parents.', def_cn: '由两个或更多亲本的片段组装而成的重组序列。' },
    { en: 'Cytochrome P450', cn: '细胞色素 P450', def_en: 'A family of heme-containing redox enzymes that hydroxylate diverse substrates, widely used as a directed evolution target for fine chemicals and drug metabolites.', def_cn: '一类含血红素的氧化还原酶，能羟化多种底物，广泛用作定向进化的对象，用于精细化学品和药物代谢物。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'In DNA shuffling, what generates the recombination between parents?',
      q_cn: '在 DNA 重排中，是什么产生了亲本之间的重组？',
      options: ['A recombinase enzyme cutting and rejoining the parental strands', 'Fragments of different parents priming each other, switching template', 'Restriction digestion of both parents and ligation of the fragments', 'Homologous recombination inside the host cell after transformation'],
      answer: 1,
      optionRefs: { 0: '1-15', 2: '1-12' },
      optionNotes: {
        3: { en: 'Right principle, wrong compartment. Shuffling recombines in the tube: the polymerase itself switches template when a fragment from one parent primes on another. In vivo homologous recombination is a separate assembly route, such as yeast gap repair or lambda-Red, and it needs a host — whereas shuffling is finished before anything is transformed.', cn: '原理对，但发生的地方不对。shuffling 的重组在管子里完成：某个亲本来的片段退火到另一个亲本上当引物，polymerase 在延伸时就换了模板。体内的 homologous recombination 是另一条组装路线，比如 yeast gap repair 或 lambda-Red，它需要宿主；而 shuffling 在转化之前就已经结束了。' }
      },
      why_en: 'The PCR is run without primers, so the DNase-generated fragments anneal to one another by homology and extend. Because fragments come from different parents, the growing strand switches template — that switching is the recombination.',
      why_cn: 'PCR 不加引物，所以 DNase 产生的片段靠同源性互相退火并延伸。由于片段来自不同亲本，延伸中的链会切换模板——这个切换就是重组。' },
    { type: 'mcq',
      q_en: 'Why is gene shuffling more powerful than error-prone PCR?',
      q_cn: '为什么基因重排比易错 PCR 更强大？',
      options: ['It introduces more new mutations per round than epPCR does', 'It recombines mutations that have already proved beneficial', 'It needs no template, since the fragments prime one another', 'It is faster, because DNase digestion replaces the mutagenic PCR'],
      answer: 1,
      optionNotes: {
        2: { en: 'Primerless has been misremembered as templateless. The reassembly PCR is indeed run without primers, the fragments priming one another, but the parental fragments are the templates — with no set of homologous parents there is nothing to recombine.', cn: '把「不加引物」记成了「不需要模板」。重组装那一步的 PCR 确实不加 primer，靠片段互相当引物；但亲本片段本身就是模板，没有一组同源的亲本序列，就根本没有东西可以重组。' }
      },
      why_en: 'epPCR generates new mutations, and most random mutations are deleterious. Shuffling starts from bricks that evolution or a previous selection round has already shown to be good, and only changes how they are combined.',
      why_cn: 'epPCR 产生的是新突变，而大多数随机突变是有害的。重排的起点是已经被进化或上一轮筛选证明为好的砖块，它只改变这些砖块的组合方式。' },
    { type: 'mcq',
      q_en: 'Why is gene shuffling called sexual PCR?',
      q_cn: '为什么基因重排被称为「有性 PCR」？',
      options: ['Because it needs two separate PCR machines running in parallel', 'Because it recombines alleles from different individuals, as sex does', 'Because it uses two primers, one taken from each of the two parent sequences', 'Because each round doubles the number of variants in the library'],
      answer: 1,
      why_en: 'The metaphor is precise rather than decorative. Sexual reproduction pools beneficial alleles across individuals and sheds deleterious ones, and shuffling does exactly that to genes in vitro.',
      why_cn: '这个比喻是精确的而不是修辞性的。有性生殖把不同个体的有益等位基因汇集起来、同时甩掉有害突变，而重排在体外对基因做的正是这件事。' },
    { type: 'short',
      q_en: 'Explain the mechanism of gene shuffling.',
      q_cn: '解释基因重排的机制。',
      accept: ['DNase', 'fragments', 'no primers', 'anneal', 'chimera'],
      answer_en: 'You start with a set of homologous genes — either orthologues from different species, or a batch of improved mutants from the previous round of selection. You cut them randomly into small fragments with DNase I. Then you run a PCR with no primers at all: the fragments anneal to one another through their homologous sequences, so each acts as a primer for the others and they extend. Because the fragments come from different parents, an extending strand will sometimes anneal to a fragment from a different parent and carry on there, so the reaction jumps between parents and produces recombinant chimeras. Finally you add outer primers and amplify the full-length products. The reason this is more powerful than random mutagenesis is that every fragment carries mutations already validated as beneficial, so you are not generating new mostly-harmful changes but rediscovering how to combine good ones.',
      answer_cn: '起点是一组同源基因——可以是不同物种的直系同源基因，也可以是上一轮筛选得到的一批优良突变体。用 DNase I 把它们随机切成小片段。然后做一个完全不加引物的 PCR：片段之间通过同源序列互相退火，各自充当对方的引物并延伸。由于片段来自不同的亲本，正在延伸的链有时会退火到另一个亲本的片段上并继续下去，于是反应在亲本之间跳跃，产生重组嵌合体。最后加上外侧引物把全长产物扩增出来。它比随机突变更强大的原因在于：每个片段携带的都是已经被验证为有益的突变，所以你不是在制造大多有害的新改变，而是在重新发现如何把好的组合起来。'
    }
  ],
  oral: {
    q_en: 'What is gene shuffling and why did this line of work win a Nobel Prize?',
    q_cn: '什么是基因重排？这个方向为什么能得诺贝尔奖？',
    model_en: 'Gene shuffling recombines homologous DNA sequences during in vitro molecular evolution, and it is nicknamed sexual PCR. The mechanism, from Stemmer in 1994, is this: you take a set of homologous genes — orthologues from different species, or the batch of improved mutants that came out of your previous selection round — and cut them randomly into small fragments with DNase I. Then you run a PCR with no primers. The fragments anneal to each other through their shared homology, so each primes the others and they extend. And because the fragments come from different parents, an extending strand periodically switches to a fragment from a different parent and continues there, so the reaction jumps between parents and generates recombinant chimeras. A final PCR with outer primers recovers the full-length products. The reason this is so much more powerful than error-prone PCR is worth stating clearly. Random mutagenesis takes one small step at a time and most of those steps are harmful, because the overwhelming majority of random mutations are deleterious. Shuffling instead recombines mutations that evolution — or your previous round of selection — has already validated as beneficial. Every brick is a good brick; you are only changing how they are stacked. That is also why the sexual metaphor is accurate rather than decorative: the core advantage of sexual reproduction is exactly recombination, pooling beneficial alleles from different individuals while shedding deleterious ones. Frances Arnold won the 2018 Nobel Prize in Chemistry for the directed evolution of enzymes, and her central insight was that since we do not actually understand proteins well enough to design them rationally, it is better to let evolution do the designing for us. The slide quotes her: science, like all human endeavours, is evolutionary — we build by adding to and recombining what is already there. The case study is the cytochrome P450 family, heme-containing redox enzymes that hydroxylate a wide range of substrates, used in fine chemical synthesis and to produce human drug metabolites.',
    checklist: ['Recombines homologous DNA sequences in vitro', 'Frances Arnold, Nobel Prize in Chemistry 2018, directed evolution of enzymes', 'Mechanism: homologous genes, DNase I fragmentation', 'Primerless PCR: fragments prime each other by homology', 'Extension jumps between parents, generating chimeras', 'Outer primers recover full length', 'More powerful than epPCR: recombines already-validated beneficial mutations', 'Every brick is a good brick, only the stacking changes', 'Sexual metaphor is precise: recombination pools good alleles, sheds bad', 'Arnold insight: we do not understand proteins, so let evolution design', 'Case study: cytochrome P450, fine chemicals and drug metabolites']
  }
},

{
  id: '4-5',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.5',
  enTitle: 'The protein universe — how many folds are there?',
  cnTitle: '蛋白宇宙——到底有多少种折叠？',
  slides: 'L9A s.21–22',
  coverage: 'full',
  coverageNote: 'The fold count is the deck\'s second quiz question, and the Hecht and Nature 2023 citations are on the slides. Why folds are so much rarer than sequences, and what that implies about unexplored space, is the beyond-the-slides reasoning.',
  summary: {
    en: 'About 2,000 protein folds have been characterised, which is startlingly few beside more than 350 million unique sequences in UniProt. Structure is far more conserved than sequence, so fold space is highly degenerate. The slide\'s real point, from Hecht and colleagues, is that there may be many folds and functions unexplored by Nature — and recent deep learning work is illuminating that dark protein space.',
    cn: '目前已表征的蛋白折叠约有 2000 种，与 UniProt 中超过 3.5 亿条独特序列相比少得惊人。结构比序列保守得多，所以折叠空间是高度简并的。幻灯片真正想说的（来自 Hecht 等人）是：可能存在大量自然界未曾探索过的折叠和功能——而近期的深度学习工作正在照亮这片「暗蛋白空间」。'
  },
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**3.5 亿条序列，却只有约 2000 种折叠**——结构比序列保守得多，折叠空间是高度简并的。\n\n' +
            '而这一节真正的论点是：**自然界的蛋白只是进化碰巧走过的那条路，不是所有可能的蛋白。**',
  skipIt: '2018 年 Hecht 那篇和 2023 年 Nature 那篇的出处不用背，2000 这个数量级知道就行。**第 9 讲没有 RECAP 可引**，这是判断——但「自然界没有的不等于不可能」这一条要记，它是随机文库和 de novo 设计的理论依据。',
  explain: [
    {
      q: '为什么序列有几亿条，折叠却只有两千种？',
      a: '**因为结构比序列保守得多——这是蛋白科学里最反直觉也最有用的一条经验规律。**\n\n' +
         '**两个序列同一性只有 15%，仍然可以折成几乎一样的形状。**换句话说，同一个折叠有天文数字条不同的序列可以实现它。\n\n' +
         '**这就是「折叠空间是简并的」的意思——多对一。**\n\n' +
         '**而「简并」这个词在这门课里出现了第二次，值得停一下把两处连起来：**\n\n' +
         '**第 1-4-3 节：密码子的简并**——64 个密码子对应 20 种氨基酸，**多个密码子 → 同一个氨基酸**。\n\n' +
         '**这一节：折叠的简并**——几亿条序列对应两千种折叠，**多条序列 → 同一个形状**。\n\n' +
         '**两次都是「多对一」，而且两次都被拿来当工程杠杆用：**\n\n' +
         '密码子简并让你可以**改 DNA 而不改蛋白**（密码子优化、同义突变去掉酶切位点、密码子压缩）。\n\n' +
         '折叠简并让你**不需要精确的序列也能得到想要的结构**——**这正是下一节二元图案化能成立的全部基础。**\n\n' +
         '顺带一个旁证：**新折叠的发现速度明显在放缓**。SCOP 和 CATH 的统计几十年来一直支持一到两千这个数，这说明我们可能已经见过自然界用的绝大部分。',
      takeaway: '同一性 15% 也能折成同一个形状——折叠是「多对一」的。跟密码子简并一样，这个冗余是可以当杠杆用的。'
    },
    {
      q: '「自然界的蛋白是不是特殊的？」——这个问题为什么问得好？',
      a: '**因为它把一个我们默认接受、却从来没验证过的假设挑明了：自然界有的，就是可能的全部。**\n\n' +
         '**这个假设是错的。自然界的蛋白只是进化碰巧走过的那一条路。**\n\n' +
         '而进化的路受两个很硬的约束：\n\n' +
         '**路径依赖（path dependence）** —— 它必须**从已经存在的东西一步步走过来**。一个折叠再好，如果没有一条从现有蛋白通往它的可行路径，进化就到不了。\n\n' +
         '**可进化性（evolvability）** —— **路上每一个中间体都必须是能活的**。哪怕终点极好，只要中间要经过一个「死掉的」状态，这条路就走不通。\n\n' +
         '**所以结论是：一个自然界没有的折叠，不等于是一个不可能的折叠——它可能只是进化没走到那儿。**\n\n' +
         '**这句话就是 de novo 设计和随机文库的理论许可证。**\n\n' +
         '如果自然界的蛋白就是全部，那么「没有模板的随机文库」是件蠢事——你在一片荒漠里找东西。\n\n' +
         '**而如果自然界只探索了一小块，那么去搜索它没去过的地方，就是完全合理的。**\n\n' +
         '**所以这一节不是花絮，它是在给第 4-1 节决策树上「没有起始序列」那一支发许可证。**',
      takeaway: '进化受路径依赖和可进化性约束，所以它走过的只是一小块。「没有的」不等于「不可能的」。'
    }
  ],
  points: [
    { term: 'The quiz answer', en: 'About 2,000 protein folds are characterised in nature.', cn: '自然界中已表征的蛋白折叠约有 2000 种。' },
    { term: 'The Hecht framing', en: 'From Hecht et al., Current Opinion in Structural Biology 2018, "Are natural proteins special? Can we do that?" — there may be many folds and functions unexplored by Nature.', cn: '来自 Hecht 等，Current Opinion in Structural Biology 2018，《天然蛋白特殊吗？我们能做到吗？》——可能存在大量自然界未曾探索的折叠和功能。' },
    { term: 'The frontier', en: '"Uncovering new families and folds in the natural protein universe", Nature 2023, 622:646–653 — deep learning tools illuminating the dark protein space.', cn: '《在天然蛋白宇宙中发现新家族和新折叠》，Nature 2023, 622:646–653——用深度学习工具照亮「暗」蛋白空间。' }
  ],
  beyondPoints: [
    { term: 'The scale gap', en: 'UniProt holds more than 350 million unique sequences and the AlphaFold database about 215 million structures, but there are only around 1,000 to 2,000 distinct folds. Hundreds of millions of sequences, one or two thousand shapes.', cn: 'UniProt 中有超过 3.5 亿条独特序列，AlphaFold 数据库中约有 2.15 亿个结构，但不同的折叠类型只有约 1000–2000 种。序列几亿种，形状只有一两千种。' },
    { term: 'Why folds are so few', en: 'Structure is far more conserved than sequence: two proteins with only 15 per cent sequence identity can still fold into almost the same shape. Fold space is highly degenerate. The estimate came from Chothia and colleagues in the 1990s, and SCOP and CATH statistics have supported the one-to-two-thousand figure ever since, with the discovery rate of new folds clearly slowing — suggesting we may already have seen most of what nature uses.', cn: '结构比序列保守得多：两个序列相似度只有 15% 的蛋白仍可能折叠成几乎一样的形状。折叠空间是高度简并的。这个估计由 Chothia 等人在 1990 年代给出，SCOP 和 CATH 数据库的统计此后一直支持「一千到两千」这个量级，而且新折叠的发现速度已明显放缓——暗示我们可能已经见过自然界使用的大部分折叠。' },
    { term: 'Why "are natural proteins special?" is the right question', en: 'Natural proteins are only the path evolution happened to take, not the set of all possible proteins. Evolution is constrained by historical path dependence — it must proceed stepwise from what already exists — and by evolvability, since every intermediate must be viable.', cn: '天然蛋白只是进化偶然走过的一条路径，而不是「所有可能的蛋白」。进化受制于历史路径依赖（必须从已有的东西一步步改）和可进化性（每一步中间体都必须是活的）。' },
    { term: 'What follows from that', en: 'A fold absent from nature is not therefore an impossible fold — it may simply be one evolution never reached. That is the theoretical justification for de novo design and for random libraries: they explore sequence space evolution never visited.', cn: '所以「自然界没有的折叠」不等于「不可能的折叠」——很可能只是进化没走到那里。这正是从头设计和随机文库的理论依据：去探索进化没去过的序列空间。' }
  ],
  terms: [
    { en: 'Protein fold', cn: '蛋白折叠', def_en: 'A distinct three-dimensional architecture. Only about 1,000 to 2,000 are known, against hundreds of millions of sequences.', def_cn: '一种独特的三维构架。已知的只有约 1000–2000 种，而序列有几亿条。' },
    { en: 'Fold degeneracy', cn: '折叠简并性', def_en: 'The fact that vastly many sequences map onto the same structure — two proteins at 15 per cent identity can share a fold.', def_cn: '极多不同的序列对应同一个结构：两个序列相似度仅 15% 的蛋白也可能共享同一个折叠。' },
    { en: 'Path dependence', cn: '路径依赖', def_en: 'The constraint that evolution can only modify what already exists, step by step, with every intermediate viable — which limits which regions of sequence space it can reach.', def_cn: '进化只能在已有基础上一步步改造、且每个中间体都必须存活的约束，这限制了它能到达序列空间的哪些区域。' },
    { en: 'Dark protein space', cn: '暗蛋白空间', def_en: 'Regions of sequence and structure space not represented among characterised natural proteins, now being explored with deep learning.', def_cn: '在已表征的天然蛋白中没有代表的序列与结构空间区域，目前正用深度学习加以探索。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Roughly how many protein folds are characterised in nature?',
      q_cn: '自然界中已表征的蛋白折叠大约有多少种？',
      options: ['200', '2,000', '20,000', '200,000'],
      answer: 1,
      why_en: 'About two thousand, against more than 350 million unique sequences in UniProt. The estimate goes back to Chothia in the 1990s and SCOP and CATH statistics have supported it since.',
      why_cn: '约两千种，而 UniProt 里有超过 3.5 亿条独特序列。这个估计可追溯到 1990 年代的 Chothia，SCOP 和 CATH 的统计此后一直支持它。' },
    { type: 'mcq',
      q_en: 'Why are there so few folds relative to sequences?',
      q_cn: '为什么折叠数量相对序列数量这么少？',
      options: ['Most of those sequences do not fold into a stable structure', 'Structure is much more conserved than sequence across evolution', 'Most folds simply remain undiscovered, so 2,000 badly undercounts them', 'Evolution actively avoids inventing new folds once one works'],
      answer: 1,
      optionNotes: {
        0: { en: 'True of random sequences, but not of the sequences being counted here. The 350 million UniProt entries are natural proteins and they do fold; the reason they collapse onto so few folds is that the sequence-to-structure map is many-to-one, with 15 per cent identity still enough to share a fold.', cn: '这句话对随机序列成立，但对这里被统计的序列不成立。UniProt 里那 3.5 亿条是天然蛋白，它们是会折叠的；它们之所以只对应两千种折叠，是因为序列到结构是多对一的映射——同一性只有 15% 也可以折成同一个形状。' }
      },
      why_en: 'Fold space is highly degenerate: enormous numbers of sequences map to the same shape. That degeneracy is why hundreds of millions of sequences collapse into one or two thousand architectures.',
      why_cn: '折叠空间是高度简并的：极多的序列映射到同一个形状。正是这种简并性让几亿条序列坍缩成一两千种构架。' },
    { type: 'mcq',
      q_en: 'What does "there may be folds unexplored by Nature" justify?',
      q_cn: '「可能存在自然界未曾探索的折叠」这句话为什么重要？',
      options: ['The conclusion that the count of about 2,000 folds must be a serious underestimate', 'The case for de novo design and random libraries beyond natural space', 'The conclusion that AlphaFold predictions cannot be trusted', 'The claim that every natural protein descends from one ancestor'],
      answer: 1,
      why_en: 'Natural proteins are the path evolution happened to take, constrained by path dependence and by every intermediate having to be viable. Absent from nature does not mean impossible — which is the whole rationale for exploring beyond it.',
      why_cn: '天然蛋白只是进化偶然走过的路径，受制于路径依赖以及「每个中间体都必须存活」。自然界没有不等于不可能——这正是探索自然之外空间的全部理由。' },
    { type: 'short',
      q_en: 'Why is the number of folds so much smaller than the number of sequences, and what does that imply?',
      q_cn: '为什么折叠的数量远小于序列的数量？这意味着什么？',
      accept: ['conserved', 'degenerate', '15 per cent', 'path dependence', 'de novo'],
      answer_en: 'Because structure is far more conserved than sequence. Two proteins sharing only fifteen per cent sequence identity can still fold into almost the same shape, so fold space is highly degenerate — hundreds of millions of sequences in UniProt, and about two hundred and fifteen million structures in the AlphaFold database, collapse into only one to two thousand distinct architectures. The estimate dates to Chothia in the 1990s and SCOP and CATH statistics have supported it ever since, with the discovery rate for new folds clearly slowing, which suggests we have already seen most of what nature uses. The implication the slide is driving at is different, though. Natural proteins are only the path that evolution happened to take, and evolution is constrained both by path dependence, since it can only modify what already exists step by step, and by evolvability, since every intermediate has to be viable. So a fold absent from nature is not an impossible fold — it may simply be one evolution never reached. That is the theoretical justification for de novo design and for random combinatorial libraries.',
      answer_cn: '因为结构比序列保守得多。两个序列相似度只有 15% 的蛋白，仍可能折叠成几乎一样的形状，所以折叠空间是高度简并的——UniProt 里几亿条序列、AlphaFold 数据库里约 2.15 亿个结构，坍缩成只有一到两千种不同的构架。这个估计可追溯到 1990 年代的 Chothia，SCOP 和 CATH 的统计此后一直支持它，而且新折叠的发现速度明显放缓，暗示我们已经见过自然界使用的大部分折叠。不过幻灯片真正想说的是另一层意思。天然蛋白只是进化偶然走过的一条路径，而进化同时受制于路径依赖（只能在已有基础上一步步改）和可进化性（每个中间体都必须能存活）。所以「自然界没有的折叠」并不等于「不可能的折叠」——很可能只是进化没走到那里。这正是从头设计和随机组合文库的理论依据。'
    }
  ],
  oral: {
    q_en: 'How much of protein space has nature actually explored?',
    q_cn: '自然界实际上探索了多少蛋白空间？',
    model_en: 'Strikingly little, and the numbers make the point sharply. UniProt holds more than three hundred and fifty million unique sequences, and the AlphaFold database about two hundred and fifteen million structures — but only around one to two thousand distinct folds have been characterised. The deck asks this as a quiz question and the answer is about two thousand. The reason for that enormous compression is that structure is far more conserved than sequence: two proteins sharing only fifteen per cent sequence identity can still fold into almost the same shape, so fold space is highly degenerate. The estimate goes back to Chothia and colleagues in the 1990s, and SCOP and CATH statistics have supported the one-to-two-thousand figure ever since, with the discovery rate of genuinely new folds clearly slowing — which suggests we have probably already seen most of what nature actually uses. But the slide\'s real point, taken from Hecht and colleagues in Current Opinion in Structural Biology, is a different one, and the title of that paper puts it well: are natural proteins special, and can we do that? The argument is that natural proteins represent only the path evolution happened to take, not the set of all possible proteins. Evolution is doubly constrained — by historical path dependence, because it can only modify what already exists, one step at a time, and by evolvability, because every single intermediate along the way has to be viable. So there may well be many folds and functions that nature has simply never explored, and a fold being absent from nature does not make it impossible. That is precisely the theoretical justification for de novo design and for random combinatorial libraries: they go looking in the regions of sequence space that evolution never visited. The frontier now is deep learning tools illuminating that dark protein space, as in the 2023 Nature paper on uncovering new families and folds.',
    checklist: ['About 2,000 characterised folds', 'Against >350 million UniProt sequences, ~215 million AlphaFold structures', 'Structure is far more conserved than sequence', 'Two proteins at 15% identity can share a fold — fold space is degenerate', 'Estimate from Chothia in the 1990s; SCOP and CATH support it', 'New fold discovery rate is slowing', 'Hecht: are natural proteins special? Can we do that?', 'Natural proteins are the path evolution took, not all possible proteins', 'Constrained by path dependence and by every intermediate being viable', 'Absent from nature does not mean impossible', 'Justifies de novo design and random libraries', 'Frontier: deep learning illuminating dark protein space, Nature 2023']
  }
},

{
  id: '4-6',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.6',
  enTitle: 'Binary patterning and combinatorial sequence space',
  cnTitle: '二元图案化与组合序列空间',
  slides: 'L9A s.23–24',
  coverage: 'full',
  coverageNote: 'Both landmark experiments and their numbers are on the slides. Why specifying only polar-or-nonpolar is enough to get a fold, and why VAN and NTN are the right codons for it, is the beyond-the-slides reasoning — and it is a textbook application of the chemistry-restricted alphabet from the previous node.',
  summary: {
    en: 'Two landmark experiments. Fisher and colleagues designed a four-helix bundle by binary patterning, specifying only whether each position is polar or nonpolar and letting degenerate codons choose the residue — VAN for polar, NTN for nonpolar. The theoretical library was 5 x 10^52 but only 1.5 x 10^6 variants survived subcloning, a gap of forty-six orders of magnitude. Separately, an RNA ligase was evolved from a non-catalytic zinc-finger scaffold using mRNA display.',
    cn: '两个里程碑实验。Fisher 等人通过二元图案化设计了一个四螺旋束：只规定每个位置是极性还是非极性，具体残基交给简并密码子决定——极性用 VAN，非极性用 NTN。理论文库是 5×10⁵²，但亚克隆之后只剩 1.5×10⁶ 个变体，相差 46 个数量级。另一个实验则用 mRNA display 从一个无催化活性的锌指骨架上进化出了 RNA 连接酶。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.24', src: 'img/figures/L9A_s24_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '二元图案化只规定**每个位置是极性还是非极性**，具体哪个残基交给简并密码子——因为**驱动折叠的是疏水效应，决定折叠的是极性/非极性的图案，不是具体残基**。\n\n' +
            '而 **5×10⁵² 对 1.5×10⁶** 这个 46 个数量级的落差，直接引出下一节。',
  skipIt: 'VAN 和 NTN 各自编码哪几个残基、两个实验的作者和年份，不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**那个 46 个数量级的落差要记住**，它是理解「设计空间 ≠ 可做出的文库」最有力的一个例子。',
  explain: [
    {
      q: '为什么只规定「极性还是非极性」就够了？',
      a: '**因为蛋白折叠的主要驱动力是疏水效应，而疏水效应只区分「怕水」和「亲水」两类。**\n\n' +
         '回到第 2-33 节讲过的那件事：**疏水效应其实是水的效应。**疏水残基暴露在水里时，周围的水分子被迫排成有序结构，这在熵上不利。**所以蛋白折叠时，疏水残基往里埋、亲水残基朝外——这是折叠最主要的驱动力。**\n\n' +
         '**关键的推论：在这个层面上，水并不关心里面埋的到底是 Leu 还是 Ile。**它只关心「这个位置是疏水的还是亲水的」。\n\n' +
         '**所以在很大程度上，决定折叠的不是「每个位置是哪个氨基酸」，而是「极性和非极性沿着链的排布图案」。**\n\n' +
         '**而这正好是上一节「折叠简并」的机制性解释**：为什么同一性 15% 的两条序列能折成同一个形状？**因为它们的极性图案是一样的。**\n\n' +
         '**于是一个大胆但合理的想法出现了：如果图案才是关键，那我就只指定图案，具体残基随便。**\n\n' +
         '这就是二元图案化。**你把设计信息量从「每个位置 20 选 1」压缩到了「每个位置 2 选 1」，而结构基本上还在。**',
      takeaway: '水只区分怕水和亲水，不区分 Leu 和 Ile。所以图案决定折叠——这也解释了上一节的折叠简并。'
    },
    {
      q: '3.6 这个数字是怎么被用上的？',
      a: '**α 螺旋每 3.6 个残基转一圈——所以「一面疏水、一面亲水」这件事有一个精确的周期。**\n\n' +
         '想做一个**两亲性螺旋**（amphipathic helix）：它的一面全是疏水残基（朝向蛋白内部，跟别的螺旋贴合），另一面全是亲水残基（朝外接触溶剂）。\n\n' +
         '**既然每 3.6 个残基转一圈，那么「朝内」的位置就以约 3.6 为周期出现。**\n\n' +
         '**所以你要做的只是：让极性/非极性的指派以约 3.6 为周期交替。**\n\n' +
         '**Hecht 实验室干的就是这件事：**按这个周期指定每个位置的极性类别，然后让简并密码子去挑具体残基。\n\n' +
         '**结果是：一个天文数字大小的文库里，绝大多数成员仍然折成四螺旋束。**\n\n' +
         '**这是「用最少的设计信息换取最大的结构确定性」的典范。**你没有设计任何一条具体序列，但你保证了整个文库的结构。\n\n' +
         '**而这跟第 4-1 节那条轴是一致的**：你确实用上了知识（螺旋的周期、疏水效应），但你只用了**必要的那一点点**，剩下的全交给随机。**知识用在刀刃上，随机负责其余。**',
      takeaway: '螺旋每 3.6 个残基转一圈，所以按这个周期指派极性，就能保证一面疏水一面亲水。'
    },
    {
      q: '为什么偏偏挑 VAN 和 NTN 这两个密码子？',
      a: '**因为它们同时满足两个条件：编码正确的化学类别，而且不含终止密码子。**\n\n' +
         '**VAN** → Lys、His、Glu、Gln、Asp、Asn，**6 个极性残基，0 个终止密码子**。\n\n' +
         '**NTN** → Met、Leu、Ile、Val、Phe，**5 个非极性残基，0 个终止密码子**。\n\n' +
         '**「不含终止密码子」这一条比听起来重要得多。**\n\n' +
         '回到第 4-2 节：**每一个含终止密码子的变体都是一个截短的废品**，它白白占掉你宝贵的文库容量和筛选工作量。而这里要随机化的位点很多，如果每个位点都有 3/64 的机会出终止密码子，**累积下来废品率会高得离谱**。\n\n' +
         '**VAN 和 NTN 把这个概率降到零。**\n\n' +
         '**这是「化学限定字母表」的教科书应用**（第 4-2 节那三条出路的第二条）：\n\n' +
         '你把每个位点的选择从 20 种降到 5–6 种，**文库缩小了天文数字倍**；\n\n' +
         '**而你没有损失任何你想要的东西**——因为你本来就只想要「一个极性残基」或「一个非极性残基」，具体是哪个无所谓。\n\n' +
         '**这正是「用知识换文库大小」最干净的一次兑现。**',
      takeaway: '正好编码想要的化学类别，而且不含终止密码子（否则废品率会高得离谱）。用知识换库大小的典范。'
    },
    {
      q: '5×10⁵² 和 1.5×10⁶ 差 46 个数量级，这说明什么？',
      a: '**说明「设计空间」和「实际能做出来的文库」是两个完全不同的量——而人们经常把它们混为一谈。**\n\n' +
         '先感受一下 **5×10⁵²** 有多大：**可观测宇宙里的原子总数大约是 10⁸⁰**，而地球上所有原子大约 10⁵⁰。**这个文库的设计空间比整个地球的原子数还多。**\n\n' +
         '**而实际亚克隆之后拿到的是 1.5×10⁶——一百五十万个。**\n\n' +
         '**你搜索了设计空间的 10⁻⁴⁶。**\n\n' +
         '**所以「我设计了一个多大的文库」这句话本身几乎没有信息量。**真正要问的永远是：\n\n' +
         '**「你实际拿到了多少个独立克隆？」**\n\n' +
         '**这个落差不是这个实验做得不好，而是物理上的必然**——下一节（第 4-7 节）会把这些天花板一个个列出来。\n\n' +
         '**而且它带出一个更深的问题：既然只能搜 10⁻⁴⁶，为什么这个实验还能成功？**\n\n' +
         '答案回到二元图案化本身：**因为文库里的绝大多数成员都是「能折叠的」。**你不是在一片荒漠里随机抓 150 万个点，**你是在一个已经被结构约束筛选过的区域里抓 150 万个点。**\n\n' +
         '**这才是二元图案化真正的价值：它不是把库变小，它是把库的每一个成员都变得有希望。**',
      takeaway: '设计空间比地球原子还多，实际只做出 150 万个。能成功是因为图案化让库里绝大多数成员都能折叠。'
    }
  ],
  points: [
    { term: 'Experiment 1 — the design', en: 'Fisher et al., PLOS ONE 2011, 6:e15364. A four-helix bundle fold designed by binary patterning of polar and nonpolar residues — you specify only polar or nonpolar at each position, not the identity.', cn: 'Fisher 等，PLOS ONE 2011, 6:e15364。通过极性与非极性残基的二元图案化设计一个四螺旋束折叠——每个位置你只规定极性或非极性，不规定具体是哪个氨基酸。' },
    { term: 'The codons used', en: 'Polar positions use the degenerate codon VAN, giving Lys, His, Glu, Gln, Asp and Asn. Nonpolar positions use NTN, giving Met, Leu, Ile, Val and Phe.', cn: '极性位置用简并密码子 VAN，给出 Lys、His、Glu、Gln、Asp、Asn。非极性位置用 NTN，给出 Met、Leu、Ile、Val、Phe。' },
    { term: 'The size gap', en: 'Theoretical library size 5 x 10^52, but after subcloning only 1.5 x 10^6 variants — a gap of forty-six orders of magnitude.', cn: '理论文库大小 5×10⁵²，但亚克隆之后只有 1.5×10⁶ 个变体——相差 46 个数量级。' },
    { term: 'How it was tested', en: 'Selected for functional rescue of E. coli auxotrophs.', cn: '通过对大肠杆菌营养缺陷型的功能互补来筛选。' },
    { term: 'Experiment 2 — evolving a catalyst', en: 'Cho and Szostak, Chemistry and Biology 2006, and Chao et al., Nature Chemical Biology 2013. Starting from a non-catalytic zinc-finger motif scaffold, an RNA ligase was selected upon full randomisation of selected regions, using mRNA display.', cn: 'Cho 与 Szostak，Chemistry and Biology 2006；Chao 等，Nature Chemical Biology 2013。从一个无催化活性的锌指基序骨架出发，对选定区域完全随机化，用 mRNA display 筛出了一个 RNA 连接酶。' },
    { term: 'Its library sizes', en: 'Segment A was 3 x 10^12 and segment B was 5 x 10^11.', cn: '片段 A 为 3×10¹²，片段 B 为 5×10¹¹。' }
  ],
  beyondPoints: [
    { term: 'Why binary patterning works at all', en: 'The primary driving force of protein folding is the hydrophobic effect: hydrophobic residues bury inward, hydrophilic residues face outward. So what largely determines the fold is not which specific amino acid sits at each position, but the pattern of polar and nonpolar along the chain.', cn: '蛋白折叠的第一驱动力是疏水效应：疏水残基往里埋，亲水残基朝外。所以决定折叠的很大程度上不是「具体是哪个氨基酸」，而是极性与非极性沿链的排布模式。' },
    { term: 'The helix arithmetic', en: 'An alpha helix turns once every 3.6 residues, so to build an amphipathic helix with one hydrophobic face and one hydrophilic face you only need the polar and nonpolar assignments to alternate with a period of about 3.6. The Hecht lab did exactly that: specify the polarity class at each position and let degenerate codons pick the residue — so the overwhelming majority of members of an enormous library still fold into a four-helix bundle.', cn: 'α 螺旋每 3.6 个残基转一圈，所以要造一个一面疏水、一面亲水的两亲性螺旋，只需让极性/非极性沿序列以约 3.6 的周期交替。Hecht 实验室就是这么做的：只规定每个位置的极性类别，具体氨基酸交给简并密码子——于是一个巨大文库里绝大多数成员都能折叠成四螺旋束。' },
    { term: 'Why VAN and NTN specifically', en: 'Both contain no stop codons, and they encode exactly six polar and five nonpolar residues respectively. This is the textbook application of the chemistry-restricted alphabet: you shrink the library enormously while losing nothing you wanted.', cn: '两者都不含终止密码子，而且分别只编码 6 种极性和 5 种非极性残基。这是「按化学性质限制字母表」的教科书式应用：文库大幅缩小，而你想要的东西一点没丢。' },
    { term: 'What the forty-six order gap tells you', en: 'A theoretical library of 5 x 10^52 against 1.5 x 10^6 actually cloned is the starkest possible illustration that design space and achievable library size are completely different quantities — which is exactly the problem the next section addresses.', cn: '理论上 5×10⁵² 而实际克隆到 1.5×10⁶，这是「设计空间」和「可实现的文库大小」完全是两回事的最鲜明例证——而这正是下一节要处理的问题。' }
  ],
  terms: [
    { en: 'Binary patterning', cn: '二元图案化', def_en: 'Specifying only whether each position is polar or nonpolar, leaving the identity to a degenerate codon. Enough to determine a fold because the hydrophobic effect drives folding.', def_cn: '只规定每个位置是极性还是非极性，具体残基交给简并密码子。这足以决定折叠，因为疏水效应是折叠的驱动力。' },
    { en: 'Amphipathic helix', cn: '两亲性螺旋', def_en: 'An alpha helix with one hydrophobic and one hydrophilic face, produced by alternating polarity with a period matching the 3.6-residue helical turn.', def_cn: '一面疏水、一面亲水的 α 螺旋，通过让极性以匹配 3.6 残基螺旋周期的方式交替而产生。' },
    { en: 'Four-helix bundle', cn: '四螺旋束', def_en: 'A common fold of four amphipathic helices packing their hydrophobic faces together, the target of the Hecht lab binary patterning libraries.', def_cn: '一种常见折叠，由四条两亲性螺旋把疏水面聚拢在一起构成，是 Hecht 实验室二元图案化文库的目标。' },
    { en: 'Functional rescue', cn: '功能互补', def_en: 'Selecting library members by their ability to restore growth to an auxotrophic strain — a selection rather than a screen.', def_cn: '通过文库成员恢复营养缺陷型菌株生长的能力来筛选——这属于选择而不是筛选。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is specifying only polar or nonpolar at each position enough to get a fold?',
      q_cn: '为什么每个位置只规定极性或非极性就足以得到一个折叠？',
      options: ['Because all 20 amino acids have very similar shapes and sizes', 'Because the hydrophobic effect is the main driving force of folding', 'Because a degenerate codon can only encode chemically similar residues', 'Because the fold is set by the backbone alone, whatever the side chains'],
      answer: 1,
      why_en: 'Hydrophobic residues bury inward and hydrophilic ones face out. An alpha helix turns every 3.6 residues, so alternating polarity with that period produces an amphipathic helix regardless of which specific residues are chosen.',
      why_cn: '疏水残基往里埋、亲水残基朝外。α 螺旋每 3.6 个残基转一圈，所以让极性以这个周期交替就能产生两亲性螺旋，与具体选了哪些残基无关。' },
    { type: 'mcq',
      q_en: 'Why were VAN and NTN chosen as the degenerate codons?',
      q_cn: '为什么选择 VAN 和 NTN 作为简并密码子？',
      options: ['They have the highest degeneracy of any codon you can order', 'They contain no stop codon and encode 6 polar or 5 nonpolar residues', 'They are the cheapest degenerate codons to make on a synthesiser', 'They avoid the codons that are rare in E. coli, keeping expression high'],
      answer: 1,
      optionRefs: { 3: '1-4-3' },
      optionNotes: {
        0: { en: 'The selection criterion was the opposite of maximal. VAN is 12 codons and NTN is 16, against 64 for NNN — they were picked because that small set covers exactly one chemical class and contains no stop codon, which is the whole logic of a chemistry-restricted alphabet.', cn: '挑选的标准恰恰不是「越简并越好」。VAN 是 12 个密码子，NTN 是 16 个，而 NNN 有 64 个——选它们是因为这一小组正好只覆盖一个化学类别，而且不含终止密码子，这正是 chemistry-restricted alphabet 的全部逻辑。' }
      },
      why_en: 'It is the chemistry-restricted alphabet applied precisely. No stop codons means no truncated dead members, and restricting to one polarity class shrinks the library enormously without losing anything you wanted.',
      why_cn: '这是「按化学性质限制字母表」的精确应用。不含终止密码子意味着没有截短的死变体，而限制在一个极性类别内能大幅缩小文库、同时不损失任何你想要的东西。' },
    { type: 'mcq',
      q_en: 'What does the gap between 5 x 10^52 and 1.5 x 10^6 illustrate?',
      q_cn: '5×10⁵² 与 1.5×10⁶ 之间的落差说明了什么？',
      options: ['A flaw in the four-helix bundle design that lost most variants', 'Design space and achievable library size are different quantities', 'Toxicity of most of the designed variants once expressed in cells', 'Incomplete sequencing of the library, so variants went uncounted'],
      answer: 1,
      why_en: 'Forty-six orders of magnitude separate what you can specify on paper from what you can actually clone into cells. That gap is the subject of the library-size arithmetic that follows.',
      why_cn: '你在纸上能规定的和你实际能克隆进细胞的，相差 46 个数量级。这个落差正是接下来那节文库大小算术要讨论的主题。' },
    { type: 'short',
      q_en: 'Explain binary patterning and why VAN and NTN are used.',
      q_cn: '解释二元图案化，以及为什么使用 VAN 和 NTN。',
      accept: ['hydrophobic effect', 'polar', 'nonpolar', '3.6', 'no stop'],
      answer_en: 'Binary patterning means specifying only whether each position should be polar or nonpolar, and letting a degenerate codon choose which residue actually goes there. It works because the primary driving force of protein folding is the hydrophobic effect: hydrophobic residues bury inward and hydrophilic ones face the solvent. So what largely determines the fold is the pattern of polarity along the chain rather than the specific identities. An alpha helix turns once every three point six residues, so alternating polar and nonpolar with roughly that period automatically produces an amphipathic helix with one hydrophobic face — and four of those pack into a bundle. VAN and NTN are chosen because each is restricted to one polarity class and neither contains a stop codon: VAN encodes six polar residues, lysine, histidine, glutamate, glutamine, aspartate and asparagine, and NTN encodes five nonpolar ones, methionine, leucine, isoleucine, valine and phenylalanine. That is the chemistry-restricted alphabet applied exactly — the library shrinks enormously and nothing you wanted is lost, and with no stop codons you get no truncated dead members either.',
      answer_cn: '二元图案化的意思是只规定每个位置该是极性还是非极性，具体放哪个残基交给简并密码子决定。它之所以可行，是因为蛋白折叠的第一驱动力是疏水效应：疏水残基往里埋，亲水残基朝向溶剂。所以决定折叠的很大程度上是极性沿链的排布模式，而不是具体的残基身份。α 螺旋每 3.6 个残基转一圈，所以让极性与非极性大致按这个周期交替，就会自动产生一条有一个疏水面的两亲性螺旋——四条这样的螺旋堆在一起就是一个束。选 VAN 和 NTN 是因为它们各自限定在一个极性类别内，而且都不含终止密码子：VAN 编码 6 种极性残基（赖氨酸、组氨酸、谷氨酸、谷氨酰胺、天冬氨酸、天冬酰胺），NTN 编码 5 种非极性残基（甲硫氨酸、亮氨酸、异亮氨酸、缬氨酸、苯丙氨酸）。这正是「按化学性质限制字母表」的精确应用——文库大幅缩小而你想要的一点没丢，而且没有终止密码子也就没有截短的死变体。'
    }
  ],
  oral: {
    q_en: 'How can you build a library of folded proteins without designing any of the sequences?',
    q_cn: '怎么在不设计任何具体序列的情况下，构建一个能折叠的蛋白文库？',
    model_en: 'By binary patterning, which is one of the more elegant ideas in this lecture. The insight is that the primary driving force of protein folding is the hydrophobic effect — hydrophobic residues bury inward, hydrophilic residues face the solvent — so what largely determines whether something folds is not which specific amino acid sits at each position, but the pattern of polar and nonpolar along the chain. An alpha helix turns once every three point six residues, so if you alternate polarity with roughly that period you automatically get an amphipathic helix with one hydrophobic face, and four of those pack together into a bundle. Fisher and colleagues, from the Hecht lab, did exactly this in PLOS ONE in 2011: they designed a four-helix bundle fold by specifying only polar or nonpolar at each position and letting degenerate codons choose the actual residue. Polar positions got the codon VAN, which encodes lysine, histidine, glutamate, glutamine, aspartate and asparagine; nonpolar positions got NTN, which encodes methionine, leucine, isoleucine, valine and phenylalanine. Those two codons are chosen carefully — each is confined to one polarity class and neither contains a stop codon, so it is the chemistry-restricted alphabet applied exactly. The result is that the overwhelming majority of members of an enormous library still fold. They then selected for functional rescue of E. coli auxotrophs. But the number worth noticing is the gap: the theoretical library size was five times ten to the fifty-two, while after subcloning they had one point five million variants. That is forty-six orders of magnitude, and it is the starkest illustration of the fact that design space and achievable library size are completely different quantities. The second experiment on the slide makes a related point from the other direction: starting from a non-catalytic zinc-finger scaffold, Cho and Szostak selected an actual RNA ligase by fully randomising selected regions, using mRNA display, with segment libraries of three times ten to the twelve and five times ten to the eleven — in vitro sizes, which is the only way to get there.',
    checklist: ['Binary patterning: specify only polar or nonpolar per position', 'Works because the hydrophobic effect drives folding', 'Alpha helix turns every 3.6 residues', 'Alternating polarity with that period gives an amphipathic helix', 'Four such helices pack into a bundle', 'Fisher et al., PLOS ONE 2011', 'Polar positions: VAN (Lys, His, Glu, Gln, Asp, Asn)', 'Nonpolar positions: NTN (Met, Leu, Ile, Val, Phe)', 'Both codons chosen for no stop codons and one polarity class', 'Theoretical 5 x 10^52 vs 1.5 x 10^6 cloned — 46 orders of magnitude', 'Selected by functional rescue of E. coli auxotrophs', 'Experiment 2: RNA ligase evolved from a zinc finger by mRNA display']
  }
},

{
  id: '4-7',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.7',
  enTitle: 'Library size — the physical ceilings',
  cnTitle: '文库大小——物理天花板',
  slides: 'L9A s.25–26',
  coverage: 'full',
  coverageNote: 'The four questions and the ceiling figures are on the slides. The observation that the cell is the bottleneck, and that this is precisely why in vitro display exists, is the causal chain that makes Part II of the lecture necessary rather than merely interesting.',
  summary: {
    en: 'Four questions to ask of any library: can it be created, what is the quality control, can it be screened, and how many variants must you screen to cover the space. The physical ceilings are stark. Oligo synthesis delivers about 10^18 molecules from a 5 micromole scale. Subcloning into cells drops that to 10^6 to 10^8. In vitro display reaches up to 10^13. The cliff in the middle is the cell.',
    cn: '对任何文库都要问四个问题：能不能做出来？质控如何？能不能筛？要筛多少个变体才能覆盖整个空间？物理上限非常明确。5 µmol 规模的寡核苷酸合成给出约 10¹⁸ 个分子。亚克隆进细胞之后掉到 10⁶–10⁸。体外展示可以达到 10¹³。中间那个断崖就是「细胞」。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.26', src: 'img/figures/L9A_s26_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '三个数字撑起这一讲的下半场：**化学合成 10¹⁸ → 转化进细胞只剩 10⁶–10⁸ → 体外展示可达 10¹³。**\n\n' +
            '**中间那个断崖就是「细胞」。**而绕开细胞，正是第二半讲存在的理由。',
  skipIt: '5 µmol 这个合成规模不用记。**第 9 讲没有 RECAP 可引**，这是判断——但**那三个数字要记牢**，它们是这一讲后半段全部论证的起点。',
  explain: [
    {
      q: '为什么断崖恰好出现在「转化」这一步？',
      a: '**因为它前后两步都不需要把分子送进一个活细胞，而这一步需要。**\n\n' +
         '**合成（10¹⁸）**：5 µmol 的寡核苷酸就是约 10¹⁸ 个分子。**这只是化学——摩尔数乘阿伏伽德罗常数，没有任何瓶颈。**\n\n' +
         '**转化（10⁶–10⁸）**：**你必须让每一个 DNA 分子进入一个独立的细胞，而且那个细胞要活下来、长成一个克隆。**\n\n' +
         '这是一个物理过程，效率有硬上限。回到第 2-6 节：即使用**电转**（比化学转化高两三个数量级），一次转化最好也就 10⁹–10¹⁰，**而实际做到 10⁸ 已经算很好了**。\n\n' +
         '**顺带一提，这正是第 2-6 节说「电转只在你已经逼近边缘时才要紧」的那个场合**——文库构建是电转真正不可替代的用武之地。\n\n' +
         '**再往后还有一个更低的天花板：铺板和挑菌落。**你能实际挑多少个菌落？几百个到几千个。**所以如果你的筛选方式是「一个孔一个变体」，真正的上限比 10⁸ 还低好几个量级。**\n\n' +
         '**所以细胞在这里扮演了双重角色：它既是你的表达工厂，也是你文库大小的天花板。**\n\n' +
         '**而 10¹⁸ 到 10⁸ 这十个数量级的落差，全部损失在「进细胞」这一件事上。**',
      takeaway: '合成是纯化学没有上限；转化要让每个分子进一个活细胞并长成克隆，这是物理硬限。十个数量级都丢在这一步。'
    },
    {
      q: '这个断崖怎么就直接推出了整个第二半讲？',
      a: '**因为逻辑链干净得像一道数学题：**\n\n' +
         '**你想搜的空间在 10¹⁰ 到 10⁵² 之间**（第 4-2、4-6 节）。\n\n' +
         '**细胞把你卡在 10⁸。**\n\n' +
         '**而覆盖度还要再乘 3 倍**（第 4-8 节）。\n\n' +
         '**所以只有一条出路：绕开细胞。**\n\n' +
         '**核糖体展示和 mRNA 展示（第 4-15、4-16 节）就是绕开细胞的办法**——它们把「基因型和表型的连接」这件事**在试管里完成**，完全不经过转化。\n\n' +
         '**上限于是跳到 10¹³–10¹⁴，比细胞高五到六个数量级。**\n\n' +
         '**所以那两节不是「另外两种展示方法」，它们是对这个断崖的直接回应。**\n\n' +
         '**复习时把这条链记住，第 9-B 讲的结构就清楚了：**\n\n' +
         '**体内方法**（细菌筛选、噬菌体展示）→ 受限于转化，上限 10⁸–10¹⁰。\n\n' +
         '**体外方法**（SELEX、核糖体展示、mRNA 展示、液滴）→ 绕开细胞，上限 10¹³。\n\n' +
         '**而这也解释了第 3-7 节那条为什么重要：CFPS 能用线性 PCR 产物当模板，不需要克隆和转化——那正是体外展示能成立的前提。**',
      takeaway: '想搜 10¹⁰ 以上、细胞只给 10⁸、还要乘 3 倍覆盖——所以必须绕开细胞。体外展示因此存在。'
    },
    {
      q: '那四个问题该怎么用？',
      a: '**它们是一份检查清单，而且顺序有讲究——前两个问文库本身，后两个问你能不能用它。**\n\n' +
         '**一、能不能做出来？**（这一节）—— 物理天花板。\n\n' +
         '**二、质控如何？**（第 4-9 节）—— **我做出来的库，真的是我以为的那个吗？**\n\n' +
         '**三、能不能筛？** —— 你的筛选方式一次能处理多少个？\n\n' +
         '**四、要筛多少才算覆盖？**（第 4-8 节）—— 那个 3 倍系数。\n\n' +
         '**最容易被跳过的是第二个和第四个，而它们恰恰是让结论失效的地方。**\n\n' +
         '人们通常只想第一和第三个——「我要做一个多大的库」「我能筛多少」。\n\n' +
         '**但如果文库有偏倚（问题二），你的覆盖度计算就是错的；如果你没算覆盖度（问题四），你就不知道自己的阴性结果说明了什么。**\n\n' +
         '**这四个问题合起来在回答同一件事：我有资格相信自己的结果吗？**\n\n' +
         '找到好东西了——那当然好，不需要这些计算。\n\n' +
         '**没找到好东西——这时候这四个问题决定了你该说「这个方向不行」还是「我根本没搜到那儿」。**而这两个结论会把你的项目引向完全不同的方向。',
      takeaway: '前两问文库本身、后两问你能不能用它。它们合起来回答的是：我有资格相信自己的阴性结果吗。'
    }
  ],
  points: [
    { term: 'The four questions', en: 'Is it possible to create? Quality control? Is it possible to screen? How many variants do you have to screen to cover the space?', cn: '能不能创建？质控怎么做？能不能筛选？要筛多少个变体才能覆盖整个空间？' },
    { term: 'Counting variants', en: 'A sequence with two NNN codons gives 64 squared, that is 4,096 variants.', cn: '一条含两个 NNN 密码子的序列给出 64² = 4096 个变体。' },
    { term: 'Oligo synthesis ceiling', en: 'Typical oligo synthesis delivers 5 micromoles, which is about 10^18 molecules.', cn: '常规寡核苷酸合成提供 5 µmol，约为 10¹⁸ 个分子。' },
    { term: 'Subcloning ceiling', en: 'Subcloning into cells gives 10^6 to 10^8, limited by cloning efficiency in PCR and ligation.', cn: '亚克隆进细胞得到 10⁶–10⁸，受 PCR 和连接的克隆效率限制。' },
    { term: 'Plate ceiling', en: 'Plates and colony picking are far lower still — how many colonies can you actually get?', cn: '铺板和挑克隆的上限还要低得多——你实际上能得到多少个菌落？' },
    { term: 'In vitro display ceiling', en: 'In vitro library display reaches up to 10^13.', cn: '体外文库展示可达 10¹³。' }
  ],
  beyondPoints: [
    { term: 'The numbers to memorise', en: 'Synthesis 10^18, then transformation into cells leaves only 10^6 to 10^8, while in vitro display reaches 10^13. Those three figures carry most of the argument of this lecture.', cn: '合成层面 10¹⁸ → 转化进细胞后只剩 10⁶–10⁸ → 体外展示可以到 10¹³。这三个数字承载了本讲的大部分论证。' },
    { term: 'The cliff in the middle is the cell', en: 'The drop from 10^18 to 10^8 is entirely the transformation bottleneck. Even at the best efficiency a single transformation yields 10^9 to 10^10 transformants, and that requires electroporation done at scale; in practice 10^8 is already very good.', cn: '从 10¹⁸ 掉到 10⁸，这个落差完全是转化的瓶颈。即使效率最高，一次转化也就 10⁹–10¹⁰ 个转化子，而且必须是大量电转；实际操作中 10⁸ 已经很不错了。' },
    { term: 'Why this makes in vitro display necessary', en: 'Ribosome display and mRNA display bypass the cell entirely, so the library ceiling jumps straight to 10^13 or 10^14 — five to six orders of magnitude higher. This causal chain is the whole reason Part II of the lecture exists.', cn: '核糖体展示和 mRNA 展示完全绕开了细胞，所以文库上限直接跳到 10¹³–10¹⁴，整整高出 5–6 个数量级。这条因果链正是本讲第二部分存在的理由。' }
  ],
  terms: [
    { en: 'Transformation bottleneck', cn: '转化瓶颈', def_en: 'The step at which library size collapses from 10^18 synthesised molecules to at best 10^8 transformants, because DNA must enter living cells.', def_cn: '文库大小从合成的 10¹⁸ 个分子塌缩到最多 10⁸ 个转化子的那一步，因为 DNA 必须进入活细胞。' },
    { en: 'Library ceiling', cn: '文库上限', def_en: 'The maximum number of distinct variants a given method can physically handle. Synthesis 10^18, cells 10^6-10^8, in vitro display 10^13.', def_cn: '某种方法在物理上能承载的最大变体数。合成 10¹⁸，细胞 10⁶–10⁸，体外展示 10¹³。' },
    { en: 'Cloning efficiency', cn: '克隆效率', def_en: 'The fraction of designed molecules that survive PCR, ligation and transformation to become recoverable library members.', def_cn: '设计出的分子中，能经过 PCR、连接和转化存活下来成为可回收文库成员的比例。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How many variants does a sequence with two NNN codons contain?',
      q_cn: '一条含两个 NNN 密码子的序列包含多少个变体？',
      options: ['128', '4,096', '64', '400'],
      answer: 1,
      optionNotes: {
        3: { en: '400 is 20 x 20, the number of amino acid pairs at two positions, so it counts diversity at the protein level. The question is about DNA: NNN is a codon with 64 versions, and the redundancy of the genetic code means several of those 64 give the same residue.', cn: '400 是 20 × 20，即两个位置上氨基酸组合的数目，那是在 protein 层面数多样性。而题目问的是 DNA： NNN 是一个有 64 种版本的 codon，遗传密码的简并性正意味着这 64 种里有好几种编码同一个残基。' }
      },
      why_en: '64 squared, that is 4,096 — each NNN codon has 64 possibilities and they combine independently.',
      why_cn: '64² = 4096——每个 NNN 密码子有 64 种可能，而它们是独立组合的。' },
    { type: 'mcq',
      q_en: 'Where in the workflow does library size collapse most severely?',
      q_cn: '在整个流程中，文库大小在哪一步塌缩得最严重？',
      options: ['During oligo synthesis, which caps the pool at about 10^18', 'At subcloning into cells, from about 10^18 down to 10^6-10^8', 'During sequencing, which loses most of the library to read errors', 'At the final screening step, where the library shrinks by ten orders'],
      answer: 1,
      why_en: 'That is the transformation bottleneck, and it costs ten orders of magnitude. Even the best electroporation at scale gives 10^9 to 10^10 transformants; in practice 10^8 is already very good.',
      why_cn: '那就是转化瓶颈，代价是十个数量级。即使是大规模的最佳电转也只有 10⁹–10¹⁰ 个转化子；实际操作中 10⁸ 已经很不错了。' },
    { type: 'mcq',
      q_en: 'What library size can in vitro display reach?',
      q_cn: '体外展示能达到多大的文库？',
      options: ['10^8', '10^10', '10^13', '10^18'],
      answer: 2,
      optionNotes: {
        0: { en: '10^8 is the cell-based ceiling, the number a transformation gives you from the slide before. In vitro display exists precisely to escape that number, so answering with it names the ceiling the method was invented to break.', cn: '10^8 是细胞路线的天花板，也就是上一张幻灯片里 transformation 给你的数字。而 in vitro display 存在的理由恰恰是绕开这个数字，所以拿它作答，等于把被突破的那个上限当成了结果。' }
      },
      why_en: 'Up to 10^13, because it bypasses the cell entirely. That is five to six orders of magnitude above what transformation allows, and it is the whole reason in vitro display methods exist.',
      why_cn: '可达 10¹³，因为它完全绕开了细胞。这比转化所能允许的高出 5–6 个数量级，也正是体外展示技术存在的全部理由。' },
    { type: 'short',
      q_en: 'Give the practical library-size ceilings and explain what limits each.',
      q_cn: '给出各阶段的实际文库上限，并解释各自的限制因素。',
      accept: ['10^18', '10^6', '10^8', '10^13', 'transformation', 'cell'],
      answer_en: 'Oligo synthesis at a typical five micromole scale delivers about ten to the eighteen molecules, so chemistry is essentially never the limit. Subcloning into cells drops that to between ten to the six and ten to the eight, limited by cloning efficiency through PCR, ligation and above all transformation — even a large-scale electroporation gives at best ten to the nine or ten to the ten transformants, and in practice ten to the eight is already very good. Plates and colony picking are lower still, since you are then limited by how many colonies you can physically handle. In vitro display reaches up to ten to the thirteen. The important structural point is that the cliff in the middle is entirely the cell: ten orders of magnitude are lost purely because DNA has to be got inside a living organism. That is exactly why in vitro display methods matter — by bypassing the cell they jump the ceiling back up to ten to the thirteen or fourteen, five to six orders of magnitude higher, and that causal chain is the reason the second half of this lecture exists.',
      answer_cn: '常规 5 µmol 规模的寡核苷酸合成给出约 10¹⁸ 个分子，所以化学合成基本上从来不是瓶颈。亚克隆进细胞把这个数字降到 10⁶–10⁸，受限于 PCR、连接、尤其是转化的克隆效率——即使是大规模电转，最多也就 10⁹–10¹⁰ 个转化子，实际操作中 10⁸ 已经很不错了。铺板挑克隆的上限还要低，因为那时你受限于实际能处理多少个菌落。体外展示可达 10¹³。结构性的要点是：中间那个断崖完全来自「细胞」——损失掉十个数量级，纯粹是因为 DNA 必须进到一个活的生物体内。这正是体外展示技术重要的原因：绕开细胞就把上限重新抬回 10¹³–10¹⁴，高出 5–6 个数量级，而这条因果链就是本讲后半部分存在的理由。'
    }
  ],
  oral: {
    q_en: 'What limits how large a library you can actually make?',
    q_cn: '实际上能做多大的文库，受什么限制？',
    model_en: 'The deck poses four questions to ask of any library: is it possible to create, what quality control can you do, is it possible to screen, and how many variants must you screen to cover the space. On the first, the ceilings are worth memorising because they carry most of the argument of this lecture. Oligo synthesis at a typical five micromole scale delivers about ten to the eighteen molecules — so the chemistry is essentially never your limit. Subcloning into cells drops that to somewhere between ten to the six and ten to the eight, limited by cloning efficiency across PCR, ligation and above all transformation. Even the best electroporation done at scale gives ten to the nine or ten to the ten transformants, and in routine practice ten to the eight is already very good. If you then have to plate and pick colonies you are lower still, because you are limited by how many colonies you can physically handle. And in vitro library display reaches up to ten to the thirteen. The structure of those numbers is the point. There is a cliff of about ten orders of magnitude between synthesis and cells, and that cliff is entirely the cell — the cost of having to get DNA inside a living organism. Nothing about the chemistry required it. That single observation is why in vitro display technologies matter so much: ribosome display and mRNA display bypass the cell completely, so the ceiling jumps straight back up to ten to the thirteen or fourteen, five to six orders of magnitude above what any cell-based method allows. That causal chain — the cell is the bottleneck, therefore remove the cell — is the reason the second half of this lecture exists at all.',
    checklist: ['Four questions: create it? QC? screen it? how many to cover?', 'A sequence with two NNN codons has 64^2 = 4,096 variants', 'Oligo synthesis: 5 µmol, about 10^18 molecules', 'Subcloning into cells: 10^6 to 10^8', 'Plates and colony picking: lower still', 'In vitro display: up to 10^13', 'The cliff from 10^18 to 10^8 is entirely the cell', 'Best electroporation gives 10^9-10^10; 10^8 is good in practice', 'In vitro display bypasses the cell, jumping back to 10^13-10^14', 'Five to six orders of magnitude gained', 'This causal chain is why Part II of the lecture exists']
  }
},

{
  id: '4-8',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.8',
  enTitle: 'Coverage — why you must screen more clones than you have variants',
  cnTitle: '覆盖度——为什么必须筛比变体数更多的克隆',
  slides: 'L9A s.8, s.27',
  coverage: 'full',
  coverageNote: 'Both formulas and the worked example are on the slides. That they are the same formula, and that the 3x factor is essentially independent of library size, is the beyond-the-slides derivation — and it gives you a rule of thumb you can apply without a calculator.',
  summary: {
    en: 'Two equivalent formulas appear in the deck. L equals minus V times the natural log of one minus F, and N equals log of one minus P over log of one minus one over n. For 4,096 variants at 95 per cent coverage the answer is 12,269 clones — three times the library size. The reason is that sampling is random and with replacement, so it is the coupon collector problem, and the threefold factor holds for any library size.',
    cn: '课件里出现了两个等价的公式。L = −V·ln(1−F)，以及 N = ln(1−P)/ln(1−1/n)。对 4096 个变体、95% 覆盖率，答案是 12269 个克隆——是文库大小的 3 倍。原因是抽样是随机且有放回的，这是经典的「优惠券收集问题」，而这个 3 倍系数对任何大小的文库都成立。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.8', src: 'img/figures/L9A_s08_1.webp' },
    { slide: 'L9A s.8', src: 'img/figures/L9A_s08_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '抽样是**随机且有放回**的，所以要 95% 覆盖必须筛**文库大小的 3 倍**——这是经典的「优惠券收集问题」。\n\n' +
            '**而这个倍数跟文库大小无关**：63% 要 1 倍、95% 要 3 倍、99% 要 4.6 倍、99.9% 要 6.9 倍。',
  skipIt: '两个公式的推导过程不用背（它们其实是同一个公式）。**第 9 讲没有 RECAP 可引**，这是判断——但**那张「覆盖率 → 倍数」的小表建议记**，比记公式有用得多。',
  explain: [
    {
      q: '为什么「有 4096 个变体」不等于「筛 4096 个就够」？',
      a: '**因为你每次挑的是随机的一个，而且完全可能重复挑到同一个。**\n\n' +
         '**用集卡来想最直观：**一套 4096 张卡，每次随机抽一张（抽完放回去）。\n\n' +
         '**抽满 4096 次，你手上绝对不是全套。**有的卡抽到了三四张，而有相当一部分你一张都没碰到。\n\n' +
         '**这就是经典的「优惠券收集问题（coupon collector problem）」。**\n\n' +
         '**而它跟你挑菌落的过程是同一回事：**你从平板上挑一个菌落，它是文库里随机的一个成员。**没有任何机制保证你不会连续挑到同一个变体。**\n\n' +
         '**所以「文库有 n 个变体」和「我筛了 n 个克隆」之间，隔着一个概率问题。**\n\n' +
         '**这一条之所以值得强调，是因为它违反直觉，而且违反的方向很危险：**\n\n' +
         '你会**高估**自己的覆盖度。你以为自己看遍了，其实只看了 63%（下一条会说明为什么恰好是 63%）。\n\n' +
         '**而漏掉的那 37% 里，完全可能就有你要找的那个。**',
      takeaway: '挑克隆是有放回的随机抽样，所以会重复抽到。这跟集卡是同一个问题——抽满一套的次数远大于卡的张数。'
    },
    {
      q: '3 倍这个数字怎么来的？为什么跟文库大小无关？',
      a: '**推导只有两行，而且最后那一步很漂亮——文库大小自己消掉了。**\n\n' +
         '**第一行：**抽 N 次之后，**某个特定变体一次都没被抽到**的概率是：\n\n' +
         '**(1 − 1/n)^N**\n\n' +
         '（每一次没抽到它的概率是 1 − 1/n，抽 N 次都没抽到就是 N 次方。）\n\n' +
         '**第二行：**要求这个概率小于 1−P（P 是你要的覆盖率），两边取对数，就直接得到幻灯片上那个公式。\n\n' +
         '**关键的一步在这里：当 n 很大时，(1 − 1/n)^N ≈ e^(−N/n)。**\n\n' +
         '**注意 n 和 N 只以 N/n 这个比值出现——n 本身消掉了。**\n\n' +
         '**所以「要筛几倍」只取决于你要多高的覆盖率，跟文库有多大完全无关：**\n\n' +
         '**63%（也就是 1 − 1/e）→ 1 倍**\n\n' +
         '**95% → 3 倍**\n\n' +
         '**99% → 4.6 倍**\n\n' +
         '**99.9% → 6.9 倍**\n\n' +
         '**注意 1 倍只给你 63%**——这正是上一条说「你以为看遍了其实只看了 63%」的来源。\n\n' +
         '**也注意这张表的形状：越往后越贵。**从 95% 到 99% 要多筛 1.6 倍，从 99% 到 99.9% 又要多 2.3 倍。**追求完全覆盖的代价是发散的。**',
      takeaway: '推导里 n 自己消掉了，只剩 N/n。所以倍数只由覆盖率决定：1 倍只有 63%，95% 要 3 倍。'
    },
    {
      q: '这条规律在实际中有多狠？',
      a: '**拿第 4-2 节那个 7 位点 NNK 文库算一遍就知道了。**\n\n' +
         '**文库大小**：32⁷ ≈ **3.4×10¹⁰** 个 DNA 变体。\n\n' +
         '**要 95% 覆盖**：×3 = 约 **10¹¹** 个克隆。\n\n' +
         '**而细胞给你的上限是 10⁸**（第 4-7 节）。\n\n' +
         '**差三个数量级。**\n\n' +
         '**所以只有三条路：**\n\n' +
         '**一、把文库做小** —— 第 4-2 节那三个办法（去同义冗余、限制字母表、少随机化几个位点）。\n\n' +
         '**二、用体外展示** —— 把上限推到 10¹³（第 4-15、4-16 节）。\n\n' +
         '**三、承认你只搜了一部分。**\n\n' +
         '**第三条其实是最常见的，而且它一点都不丢人。**幻灯片自己就是这么写的：**「or just beware that you might not be searching the whole size of your library.」**\n\n' +
         '**注意这句话的措辞——它说的是 beware（心里有数），不是「不要这样做」。**\n\n' +
         '**危险的从来不是覆盖不全，是以为自己覆盖全了。**\n\n' +
         '这两者的区别在你拿到阴性结果的那一刻会变得非常具体：**「这个方向不行」和「我根本没搜到那儿」是两个完全不同的结论**，而它们会把你的项目引向完全不同的下一步。',
      takeaway: '7 位点 NNK 要筛 10¹¹，而细胞只给 10⁸。可以只搜一部分——但必须知道自己只搜了一部分。'
    }
  ],
  points: [
    { term: 'Formula one', en: 'L equals minus V times ln of one minus F, where L is the library size needed, V is the total number of possible variants and F is the fractional library completeness.', cn: 'L = −V·ln(1−F)，其中 L 是所需的文库大小，V 是可能变体的总数，F 是文库完整度的比例。' },
    { term: 'Formula two', en: 'N equals ln of one minus P divided by ln of one minus one over n, where P is the probability of any given sequence being included and n is the number of variants.', cn: 'N = ln(1−P)/ln(1−1/n)，其中 P 是任一给定序列被包含的概率，n 是变体数。' },
    { term: 'The worked example', en: 'For 4,096 variants at 95 per cent coverage, N equals ln of 0.05 over ln of one minus one over 4,096, which is 12,269.', cn: '对 4096 个变体、95% 覆盖率：N = ln(0.05)/ln(1−1/4096) = 12269。' },
    { term: 'The conclusion', en: 'Three times as many clones have to be screened to cover 95 per cent probability of each clone appearing. Or just beware that you might not be searching the whole size of your library.', cn: '要达到「每个克隆有 95% 概率出现」，必须筛三倍数量的克隆。否则就要意识到：你可能并没有搜索完整个文库。' }
  ],
  beyondPoints: [
    { term: 'Why three times, intuitively', en: 'Because sampling is random and with replacement. Every time you pick a clone you grab one at random, so you can perfectly well pick the same variant repeatedly while some variants are never picked at all. This is the classic coupon collector problem.', cn: '因为抽样是随机且有放回的。你每挑一个克隆都是随机抓一个，完全可能反复抓到同一个变体，而某些变体一次都没被抓到。这就是经典的优惠券收集问题。' },
    { term: 'The derivation', en: 'After N picks, the probability that one particular variant was never picked is one minus one over n, raised to N. Requiring that to be below one minus P and taking logarithms gives the formula directly.', cn: '抓 N 次之后，某个特定变体一次都没被抓到的概率是 (1−1/n)^N。要求这个概率小于 1−P，两边取对数就直接得到那个公式。' },
    { term: 'The two formulas are the same', en: 'When n is large, ln of one minus one over n is approximately minus one over n, so N is approximately minus n times ln of one minus P — which is exactly the first formula.', cn: '当 n 很大时，ln(1−1/n) ≈ −1/n，于是 N ≈ −n·ln(1−P)——这正是第一个公式。' },
    { term: 'The multiplier is independent of library size', en: 'For 63 per cent coverage you need 1 times the library size, for 95 per cent 3 times, for 99 per cent 4.6 times, and for 99.9 per cent 6.9 times. So "95 per cent coverage costs 3x" is a rule of thumb that holds for any library.', cn: '63% 覆盖率需要 1 倍库大小，95% 需要 3 倍，99% 需要 4.6 倍，99.9% 需要 6.9 倍。所以「95% 覆盖要筛 3 倍」是一条对任何文库都成立的经验法则。' },
    { term: 'The practical implication is harsh', en: 'The seven-position NNK library from earlier has 3.4 x 10^10 DNA variants, so 95 per cent coverage would require screening 10^11 — far beyond any in vivo method. You must either shrink the library, use in vitro display, or accept that you searched only part of it.', cn: '前面那个 7 位点 NNK 文库有 3.4×10¹⁰ 个 DNA 变体，95% 覆盖就得筛 10¹¹ 个——远超任何体内方法的能力。你要么缩小文库，要么用体外展示，要么接受「只搜索了文库的一部分」这个事实。' }
  ],
  terms: [
    { en: 'Library coverage', cn: '文库覆盖度', def_en: 'The probability that any given variant is actually present in the sample of clones you screened. 95 per cent coverage requires screening 3 times the library size.', def_cn: '任一给定变体确实出现在你所筛克隆样本中的概率。95% 的覆盖度需要筛文库大小的 3 倍。' },
    { en: 'Coupon collector problem', cn: '优惠券收集问题', def_en: 'The classic sampling-with-replacement problem: collecting all of n distinct items by random draws takes substantially more than n draws.', def_cn: '经典的有放回抽样问题：通过随机抽取集齐 n 种不同物品，所需次数远多于 n 次。' },
    { en: 'Sampling with replacement', cn: '有放回抽样', def_en: 'Drawing at random from a pool without removing what you drew, so the same item can be picked repeatedly and others missed entirely.', def_cn: '从一个集合中随机抽取而不移除已抽出的，因此同一项可能被反复抽到，而另一些则完全没被抽到。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'For a 4,096-member library at 95 per cent coverage, how many clones must you screen?',
      q_cn: '一个 4096 成员的文库要达到 95% 覆盖率，必须筛多少个克隆？',
      options: ['4,096', '8,192', '12,269', '40,960'],
      answer: 2,
      optionNotes: {
        0: { en: 'Screening exactly the library size assumes one clone lands on each variant. Sampling is random and with replacement, so N clones cover only about 63 per cent, that is 1 minus 1 over e, which is why the answer has to be a multiple of 4,096 rather than 4,096 itself.', cn: '筛 4096 个，等于默认每个变体正好被抽中一次。抽样是随机且有放回的，所以 N 个克隆只能覆盖约 63%（也就是 1 − 1/e），因此答案必然是 4096 的若干倍，而不是 4096 本身。' }
      },
      why_en: '12,269, which is three times the library size. Sampling is random and with replacement, so some variants get picked repeatedly while others are missed entirely.',
      why_cn: '12269 个，是文库大小的三倍。抽样是随机且有放回的，所以有些变体被反复抓到，而另一些完全没被抓到。' },
    { type: 'mcq',
      q_en: 'Why is screening 4,096 clones not enough to cover a 4,096-member library?',
      q_cn: '为什么筛 4096 个克隆不足以覆盖一个 4096 成员的文库？',
      options: ['A fraction of the picked clones fail to grow on the plate', 'Sampling is random and with replacement, so some variants repeat', 'The library is biased, and without that bias 4,096 picks would be enough', 'Sequencing errors make some variants unreadable and so lost'],
      answer: 1,
      optionRefs: { 2: '4-9' },
      why_en: 'This is the coupon collector problem. Screening exactly the library size gives only about 63 per cent coverage, because you inevitably resample some variants while missing others.',
      why_cn: '这是优惠券收集问题。恰好筛文库大小的数量只能得到约 63% 的覆盖率，因为你必然会重复抽到一些变体、同时漏掉另一些。' },
    { type: 'mcq',
      q_en: 'How does the required multiplier change with library size?',
      q_cn: '所需的倍数系数如何随文库大小变化？',
      options: ['It grows in direct proportion to the size of the library screened', 'It hardly changes with library size — 3x for 95 per cent coverage', 'It shrinks as the library grows, so large libraries need less than 3x', 'It depends on the sequencing method used to read the library'],
      answer: 1,
      optionNotes: {
        0: { en: 'What grows linearly is the number of clones you must pick: 3 times n, so a bigger library really is more work. The multiplier is a different quantity, and for large n the log term tends to minus 1 over n so the n cancels, leaving only the coverage you asked for.', cn: '线性增长的是你要挑的克隆总数（3n 个，库越大工作量确实越大），而不是那个倍数。对大的 n 来说，ln(1−1/n) 趋近 −1/n，n 正好被约掉，剩下的只由你想要的覆盖率决定。' }
      },
      why_en: 'For large n, ln of one minus one over n approaches minus one over n, so the multiplier depends only on the coverage you want. That makes 3x for 95 per cent a rule of thumb you can apply anywhere.',
      why_cn: '当 n 很大时，ln(1−1/n) 趋近于 −1/n，所以倍数只取决于你想要的覆盖率。这让「95% 对应 3 倍」成为一条随处可用的经验法则。' },
    { type: 'short',
      q_en: 'Explain why 95 per cent coverage costs three times the library size, and give the practical implication.',
      q_cn: '解释为什么 95% 覆盖率的代价是文库大小的三倍，并给出实际含义。',
      accept: ['replacement', 'coupon collector', 'random', '3', 'NNK'],
      answer_en: 'Because sampling is random and with replacement. Each time you pick a clone you are grabbing one at random from the pool, so you can perfectly well pick the same variant several times while other variants are never picked at all — the classic coupon collector problem. The derivation is short: after N picks the probability that a particular variant was never chosen is one minus one over n, all raised to N; requiring that to be below one minus P and taking logarithms gives the formula on the slide. And when n is large, the logarithm approximates to minus one over n, so N is roughly minus n times ln of one minus P, which is the other formula in the deck — they are the same thing. The useful consequence is that the multiplier depends only on the coverage you want, not on the library size: one times for sixty-three per cent, three times for ninety-five, four point six for ninety-nine and six point nine for ninety-nine point nine. The practical implication is harsh. The seven-position NNK library from earlier has three point four times ten to the ten DNA variants, so ninety-five per cent coverage would need ten to the eleven clones screened — far beyond any in vivo method. You must either shrink the library, move to in vitro display, or accept that you have searched only part of it.',
      answer_cn: '因为抽样是随机且有放回的。你每挑一个克隆，都是从池子里随机抓一个，所以完全可能反复抓到同一个变体，而另一些变体一次都没抓到——这就是经典的优惠券收集问题。推导很短：抓 N 次之后，某个特定变体一次都没被抓到的概率是 (1−1/n)^N；要求这个概率小于 1−P，两边取对数就得到幻灯片上的公式。而当 n 很大时，那个对数近似为 −1/n，于是 N ≈ −n·ln(1−P)，这正是课件里的另一个公式——两者是同一回事。有用的推论是：这个倍数只取决于你想要的覆盖率，而与文库大小无关：63% 需要 1 倍，95% 需要 3 倍，99% 需要 4.6 倍，99.9% 需要 6.9 倍。实际含义很残酷。前面那个 7 位点 NNK 文库有 3.4×10¹⁰ 个 DNA 变体，95% 覆盖就需要筛 10¹¹ 个克隆——远超任何体内方法的能力。你要么缩小文库，要么转向体外展示，要么接受自己只搜索了其中一部分。'
    }
  ],
  oral: {
    q_en: 'If a library has 4,096 members, how many clones do you need to screen?',
    q_cn: '如果一个文库有 4096 个成员，你需要筛多少个克隆？',
    model_en: 'Not four thousand and ninety-six — that is the whole point. To have a ninety-five per cent probability that any given member has actually appeared in your sample, you need twelve thousand two hundred and sixty-nine clones, which is three times the library size. The reason is that sampling is random and with replacement: every time you pick a colony you are grabbing one at random from the pool, so you will inevitably pick some variants several times over while others are never picked at all. It is the classic coupon collector problem. The derivation is quick. After N picks, the probability that one particular variant was never chosen is one minus one over n, raised to the power N. Set that below one minus P, take logarithms, and you get N equals ln of one minus P over ln of one minus one over n, which is the formula on slide twenty-seven. The deck also gives a second formula, L equals minus V times ln of one minus F, and it is worth noticing that these are the same equation — for large n the logarithm approximates to minus one over n, and the second formula falls out of the first. The genuinely useful consequence is that the multiplier is essentially independent of library size. One times the library gives sixty-three per cent coverage, three times gives ninety-five, four point six gives ninety-nine, and six point nine gives ninety-nine point nine. So "ninety-five per cent costs three-fold" is a rule of thumb you can apply to any library without recomputing. And the practical implication is sobering: that seven-position NNK library from earlier in the lecture has three point four times ten to the ten variants, so covering it properly would mean screening ten to the eleven clones, which no in vivo method can do. Your options are to shrink the library, move to in vitro display, or accept that you searched only a fraction of it — and the slide says exactly that, that you should at least beware you might not be searching the whole thing.',
    checklist: ['Not 4,096 — you need 12,269, three times the library size', 'Sampling is random and with replacement', 'Some variants picked repeatedly, others never — coupon collector problem', 'Derivation: P(never picked in N draws) = (1 - 1/n)^N', 'N = ln(1-P) / ln(1 - 1/n)', 'The deck\'s other formula L = -V ln(1-F) is the same equation', 'For large n, ln(1 - 1/n) approximates -1/n', 'Multiplier is independent of library size', '1x gives 63%, 3x gives 95%, 4.6x gives 99%, 6.9x gives 99.9%', 'Implication: the 7-position NNK library would need 10^11 clones', 'So shrink it, use in vitro display, or accept partial coverage']
  }
},

{
  id: '4-9',
  chapter: 4,
  lecture: 'Lecture 9-A',
  section: '4.9',
  enTitle: 'Quality control — libraries are never unbiased',
  cnTitle: '质量控制——文库从来不是均匀的',
  slides: 'L9A s.10, s.28',
  coverage: 'full',
  coverageNote: 'The warning, the two QC methods and the NGS read count are on the slides. How degenerate oligos are physically made, and the three compounding sources of bias, explain where the bias comes from rather than merely asserting that it exists.',
  summary: {
    en: 'You expect a library to be unbiased and it usually is not, starting from the synthesis itself. Different companies have different nucleobase bias, and more is introduced during PCR and cloning. Two QC methods are available: Sanger sequencing of individual colonies from 96-well plates, giving tens of clones, or next-generation sequencing of the whole pool, giving up to 20 million reads on a MiSeq.',
    cn: '你以为文库是均匀的，但通常不是——从合成那一步就开始偏了。不同厂家的碱基偏倚不同，而 PCR 和克隆过程还会引入更多偏倚。有两种质控方法：对 96 孔板上单菌落的质粒做 Sanger 测序，得到几十个克隆的信息；或者对整个文库池做下一代测序，在 MiSeq 上可得多达 2000 万条 reads。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9A s.10', src: 'img/figures/L9A_s10_1.webp' },
    { slide: 'L9A s.10', src: 'img/figures/L9A_s10_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**文库几乎从来不是均匀的**——从合成那一步就开始偏，PCR 和克隆还会再加一层。\n\n' +
            '而偏倚的真正代价是：它让第 4-8 节那个覆盖度计算**失效**，于是你的阴性结果不再可信。',
  skipIt: 'MiSeq、2000 万 reads 这些数字不用背。**第 9 讲没有 RECAP 可引**，这是判断——但「偏倚会让覆盖度计算失效」这条因果要记，它是把 4-8 和 4-9 连起来的那一句。',
  explain: [
    {
      q: '偏倚从哪来？为什么幻灯片说「最好在过程中就做质控」？',
      a: '**三处来源，而且是累加的——这就是为什么要在过程中查，而不是只在最后查。**\n\n' +
         '**一、合成。**简并位点上四种碱基的实际掺入比例，不会正好是 25:25:25:25。**不同厂家的偏倚还不一样**（幻灯片明确点了这一条）。所以你订的 NNK，拿到手可能是「N 偏 G、K 偏 T」的 NNK。\n\n' +
         '**二、PCR。**不同序列的扩增效率不同——GC 含量高的、有二级结构的扩得慢。**而 PCR 是指数放大的**，每轮 5% 的差距，跑 30 轮之后就是好几倍。\n\n' +
         '**三、克隆和转化。**连接和转化对不同序列也有偏好。更要命的是：**如果某个变体对宿主有毒，那个克隆根本长不出来**——它在你的文库里直接消失了，而你不会知道。\n\n' +
         '**所以幻灯片说「ideally during them（最好在过程中）」的原因很实际：**\n\n' +
         '**等到最后再测，你只知道总的偏倚有多大，不知道是哪一步造成的**——于是你也不知道该改哪一步。\n\n' +
         '**在每一步之后各测一次，你才能定位。**这跟第 2-29 节「跑柱子每一步都留样跑胶」是完全同一个道理：**中间样品的价值不在于当时看，而在于出问题时能倒查。**',
      takeaway: '合成、PCR、克隆三处累加。只在最后测只能知道总偏倚，不知道是哪一步——所以要逐步留样。'
    },
    {
      q: '两种质控方法各自能回答什么问题？',
      a: '**它们回答的不是同一个问题，所以不是「一个便宜一个贵」的关系。**\n\n' +
         '**Sanger 测几十个单克隆：这是一个 sanity check，不是统计。**\n\n' +
         '它能回答：**「我的克隆里有没有明显的、结构性的错误？」**——比如大量的移码、大量的空载体（回到第 1-12 节的自连问题）、大量的野生型。\n\n' +
         '**它回答不了分布问题。**几十个样本对一个 10⁸ 的文库，统计上什么都说明不了。\n\n' +
         '**NGS 测整个池子（MiSeq 可达 2000 万 reads）：这个能看分布。**\n\n' +
         '它能回答：**碱基偏倚有多大、错误率多少、独特序列有多少**——也就是文库真实的**异质性**。\n\n' +
         '**但注意幻灯片用的词是「gives you a hint」，这个措辞很准确：**\n\n' +
         '**2000 万 reads 仍然远小于 10⁸ 的文库。**所以 NGS 给你的是**分布的形状**（哪些碱基偏了、偏多少），**不是一次完整清点**。\n\n' +
         '**换句话说，NGS 告诉你「这个库大概长什么样」，而不是「这个库里到底有哪些成员」。**\n\n' +
         '**实际用法：先 Sanger 测几十个确认没有结构性灾难，再 NGS 看分布。**顺序反了就是浪费钱——如果一半克隆是空载体，你不需要 NGS 也知道这个库废了。',
      takeaway: 'Sanger 查「有没有结构性灾难」，NGS 查「分布长什么样」。NGS 也只是给形状，不是完整清点。'
    },
    {
      q: '为什么这一节必须当真，而不是走个过场？',
      a: '**因为偏倚会让上一节那个覆盖度计算彻底失效——而你不会察觉。**\n\n' +
         '回到第 4-8 节那个公式：**「筛 3 倍就有 95% 覆盖。」**\n\n' +
         '**这个公式有一个隐含前提：每个变体被抽到的概率都相同。**\n\n' +
         '**一旦文库有偏倚，这个前提就没了。**\n\n' +
         '假设某些变体的实际丰度只有平均值的百分之一。**那么你筛 3 倍、10 倍、甚至 100 倍，都可能一次都碰不到它们。**\n\n' +
         '**而你完全不会知道。**你手上的数据看起来一切正常：文库大小对、筛的数目对、公式算过了。**你只会得出一个结论——「我筛遍了，没找到好的」。**\n\n' +
         '**而真相可能是「我要找的那个在库里的丰度是万分之一，我从来没碰到过它」。**\n\n' +
         '**所以质控不是为了让数据好看，是为了让你有资格相信自己的阴性结果。**\n\n' +
         '**这一点跟这门课反复出现的一条原则是一致的**（第 1-13 节白斑只是预筛、第 4-7 节那四个问题）：**一个方法能证明什么，取决于它的前提成不成立；而前提通常没人检查。**\n\n' +
         '**做到有可靠的阴性结果，比做到有漂亮的阳性结果难得多——但项目往往是被错误的阴性结果杀死的。**',
      takeaway: '覆盖度公式假设每个变体等概率。有偏倚时你可能永远碰不到低丰度的那些——而结论会写成「这个方向不行」。'
    }
  ],
  points: [
    { term: 'The warning', en: 'You expect that the library is unbiased but that is usually not true, starting from the synthesis.', cn: '你预期文库是无偏的，但通常并非如此——从合成那一步就开始了。' },
    { term: 'Company-dependent bias', en: 'Different companies have different nucleobase bias.', cn: '不同厂家有不同的碱基偏倚。' },
    { term: 'Downstream bias', en: 'More bias is introduced during PCR and cloning. If you care about library quality, perform QC after all the steps, ideally during them.', cn: 'PCR 和克隆过程中还会引入更多偏倚。如果你在意文库质量，就要在所有步骤之后做质控，最好是在过程中就做。' },
    { term: 'QC method one', en: 'Sanger sequencing of preps from individual colonies on 96-well plates, giving information on tens of clones.', cn: '对 96 孔板上单菌落抽提的质粒做 Sanger 测序，得到几十个克隆的信息。' },
    { term: 'QC method two', en: 'Next-generation sequencing of the library pool, up to 20 million reads on a MiSeq, now part of in-house facilities.', cn: '对文库池做下一代测序，在 MiSeq 上可达 2000 万条 reads，现在已经是很多实验室的自有设备。' },
    { term: 'What NGS tells you', en: 'Even if your library is much larger, NGS gives you a hint of sequence biases, error rates and unique reads — that is, the heterogeneity of your library.', cn: '即使文库远大于测序深度，NGS 仍能给出序列偏倚、错误率和独特 reads 数的线索——也就是文库的异质性。' },
    { term: 'How degenerate oligos are made', en: 'Standard solid-phase oligo synthesis, except that at a given step multiple protected nucleotides can be thrown in. Alternatively, parallel synthesis of many unique sequences on a chip, designed for sorting by PCR — and expect errors.', cn: '常规的固相寡核苷酸合成，只是在某个特定步骤同时投入多种保护过的核苷酸。另一种做法是在芯片上并行合成大量独特序列，设计成可以用 PCR 分选——而且要预期会有错误。' }
  ],
  beyondPoints: [
    { term: 'How degeneracy is physically achieved', en: 'Solid-phase synthesis adds one base at a time. At the step you want degenerate, instead of adding a single base you pour in several protected nucleotides together in a chosen ratio. They compete randomly for the growing chain, so one synthesis yields a mixture of many sequences.', cn: '固相合成是一个碱基一个碱基加上去的。在需要简并的那一步，不是加单一的一种碱基，而是把几种保护过的核苷酸按选定比例一起倒进去。它们随机竞争性地接到延长中的链上，于是一次合成就得到大量序列的混合物。' },
    { term: 'Two consequences of that mechanism', en: 'It explains why spiked codons are possible — you simply control the feed ratio. And it explains why bias is inevitable: the four nucleotides have intrinsically different coupling efficiencies, so feeding in 25 per cent does not mean 25 per cent gets incorporated.', cn: '这解释了两件事：为什么可以做掺杂密码子——你控制投料比例就行；以及为什么偏倚不可避免——四种核苷酸的偶联效率天然不同，投料 25% 不代表接上去也是 25%。' },
    { term: 'Bias source one — synthesis', en: 'Different protected nucleotides couple with different efficiencies, and the bias pattern differs between suppliers.', cn: '不同的保护核苷酸偶联效率不同，而且偏倚模式还因供应商而异。' },
    { term: 'Bias source two — PCR', en: 'GC-rich sequences amplify less efficiently, and sequences forming secondary structure amplify poorly, so the pool becomes enriched for whatever amplifies well.', cn: 'GC 含量高的序列扩增效率低，形成二级结构的序列也难以扩增，于是文库富集了那些「好扩增」的序列。' },
    { term: 'Bias source three — cloning and transformation', en: 'Ligation and transformation efficiencies are sequence-dependent, and worse, a variant toxic to the host disappears at transformation. Your library has already been screened once before you start screening it.', cn: '连接和转化效率都与序列有关；更要命的是，对宿主有毒的变体在转化时就消失了。也就是说，在你开始筛选之前，文库已经被筛过一遍了。' },
    { term: 'What NGS QC is actually for', en: 'Not to enumerate every member — the library is usually far larger than twenty million reads. It is to estimate how biased, how error-prone and how diverse the pool actually is. Knowing how skewed your library is beats pretending it is uniform.', cn: '不是为了测出每一个成员——文库通常远大于 2000 万条 reads。而是为了估计这个池子实际有多偏、错误率多高、多样性如何。知道自己的文库有多歪，比假装它是均匀的要好。' }
  ],
  terms: [
    { en: 'Solid-phase oligo synthesis', cn: '固相寡核苷酸合成', def_en: 'Building an oligonucleotide one base at a time on a support. Degeneracy is achieved by adding several protected nucleotides at one step.', def_cn: '在固相载体上一个碱基一个碱基地构建寡核苷酸。简并性通过在某一步同时加入几种保护核苷酸来实现。' },
    { en: 'Coupling efficiency', cn: '偶联效率', def_en: 'The fraction of growing chains that successfully add a given nucleotide. It differs between bases, which is why an equal feed ratio does not give an equal composition.', def_cn: '成功接上某个核苷酸的延长链所占的比例。不同碱基的效率不同，这就是等比例投料得不到等比例组成的原因。' },
    { en: 'Library bias', cn: '文库偏倚', def_en: 'Departure from uniform representation of variants, accumulating across synthesis, PCR and cloning. Never absent, only unmeasured.', def_cn: '各变体在文库中代表性偏离均匀的现象，在合成、PCR 和克隆过程中层层累积。它从不缺席，只是常常没被测量。' },
    { en: 'NGS quality control', cn: 'NGS 质控', def_en: 'Deep sequencing of the library pool to estimate bias, error rate and diversity — not to enumerate every member, since the library usually exceeds the read count.', def_cn: '对文库池做深度测序以估计偏倚、错误率和多样性——不是为了列举每个成员，因为文库通常超过测序深度。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How is a degenerate position physically created during oligo synthesis?',
      q_cn: '寡核苷酸合成中，一个简并位点在物理上是怎么产生的？',
      options: ['By coupling a special degenerate nucleotide at that position', 'By adding several protected nucleotides at that one coupling step', 'By synthesising the oligos separately and mixing them afterwards', 'By modifying the finished oligo enzymatically after synthesis'],
      answer: 1,
      optionNotes: {
        0: { en: 'There is no such molecule. N, K, S and the rest are IUPAC notation for a mixture in the bottle, not an extra base you can order. The degeneracy is created by what you pour in at that one coupling step, which is also why spiked ratios are possible.', cn: '并不存在这样一种分子。N、K、S 这些是 IUPAC 的记号，代表试剂瓶里的一份混合物，而不是可以订购的第五种碱基。简并性是在那一步偶联时你倒进去什么决定的，这也正是掺杂比例能做出来的原因。' }
      },
      why_en: 'Synthesis proceeds one base at a time; at the degenerate step you pour in several nucleotides at once and they compete for the growing chain. That also explains both spiked codons and the inevitability of bias.',
      why_cn: '合成是一个碱基一个碱基进行的；在简并那一步你一次倒进几种核苷酸，它们竞争性地接到延长中的链上。这同时解释了掺杂密码子的可行性和偏倚的不可避免。' },
    { type: 'mcq',
      q_en: 'Why does feeding in 25 per cent of each base not give 25 per cent incorporation?',
      q_cn: '为什么每种碱基各投料 25% 并不能得到 25% 的掺入率？',
      options: ['The four phosphoramidites are added one after another instead of together', 'The four protected nucleotides couple at intrinsically different rates', 'The polymerase discriminates between the four bases as it extends the growing chain', 'The solid support holds on to some of the four bases more tightly'],
      answer: 1,
      optionNotes: {
        2: { en: 'No polymerase is involved anywhere. Oligos are built by solid-phase phosphoramidite chemistry, one base at a time on a resin, so the competition is a chemical coupling reaction and the four protected nucleotides simply couple at different rates.', cn: '这里根本没有 polymerase。寡核苷酸是固相 phosphoramidite 化学合成出来的，在树脂上一个碱基一个碱基接上去，所以竞争发生在偶联反应这一步，而四种保护核苷酸的 coupling efficiency 本来就不相同。' }
      },
      why_en: 'Coupling efficiency is a property of the chemistry and differs between bases, so the composition of the product never matches the feed exactly. Suppliers also differ in their bias patterns.',
      why_cn: '偶联效率是化学本身的性质，不同碱基各不相同，所以产物组成永远不会精确等于投料比例。而且不同供应商的偏倚模式也不一样。' },
    { type: 'mcq',
      q_en: 'What is NGS quality control of a library actually for?',
      q_cn: '对文库做 NGS 质控实际上是为了什么？',
      options: ['Taking a complete census of every member present in the library', 'Estimating the bias, the error rate and the diversity of the pool', 'Picking out the best variant in advance of any screening', 'Measuring how efficiently the DNA was transformed into cells'],
      answer: 1,
      optionRefs: { 3: '2-6' },
      optionNotes: {
        0: { en: 'A MiSeq run gives about 20 million reads against a library that is routinely 10^8 or larger, so NGS samples the pool rather than taking a census. It is the same sampling logic as coverage: you see the shape of the distribution, not the membership list.', cn: '一次 MiSeq 大约 2000 万条 reads，而文库动辄 10^8 甚至更大，所以 NGS 是在对池子抽样，不是清点。这和覆盖度是同一套抽样逻辑：你看到的是分布的形状，不是成员名单。' }
      },
      why_en: 'The library is usually far larger than twenty million reads, so enumeration is impossible. What you get is a hint of sequence bias, error rates and unique reads — knowing how skewed your library is beats assuming it is uniform.',
      why_cn: '文库通常远大于 2000 万条 reads，所以列举是不可能的。你能得到的是序列偏倚、错误率和独特 reads 的线索——知道自己的文库有多歪，好过假设它是均匀的。' },
    { type: 'short',
      q_en: 'Name three sources of library bias and say which is the most insidious.',
      q_cn: '说出文库偏倚的三个来源，并指出哪一个最隐蔽。',
      accept: ['synthesis', 'coupling', 'PCR', 'GC', 'cloning', 'toxic'],
      answer_en: 'First, synthesis: the four protected nucleotides have different coupling efficiencies, so feeding in equal proportions does not give equal incorporation, and the bias pattern even differs between suppliers. Second, PCR: GC-rich sequences and sequences forming secondary structure amplify poorly, so the pool becomes enriched for whatever amplifies well. Third, cloning and transformation: ligation and transformation efficiencies are sequence-dependent. The most insidious is the last one, specifically the case where a variant is toxic to the host — that variant simply disappears at the transformation step. Which means your library has already been screened once, silently, before you began screening it, and the members removed are precisely the ones with the strongest biological effect. That is why NGS quality control matters: not to enumerate every member, which is impossible when the library exceeds twenty million reads, but to estimate how skewed the pool actually is rather than assuming it is uniform.',
      answer_cn: '第一，合成：四种保护核苷酸的偶联效率不同，所以等比例投料得不到等比例掺入，而且偏倚模式还因供应商而异。第二，PCR：GC 含量高的序列和形成二级结构的序列扩增效率低，于是文库富集了那些好扩增的序列。第三，克隆和转化：连接效率和转化效率都与序列有关。最隐蔽的是最后一条，具体说是「某个变体对宿主有毒」的情形——那个变体在转化这一步就直接消失了。这意味着在你开始筛选之前，文库已经被无声地筛过一遍，而被去掉的恰恰是生物学效应最强的那些成员。这就是 NGS 质控的意义所在：不是去列举每个成员（文库超过 2000 万条 reads 时那是不可能的），而是估计这个池子实际有多歪，而不是假设它均匀。'
    }
  ],
  oral: {
    q_en: 'How do you know whether your library is any good?',
    q_cn: '你怎么知道自己的文库好不好？',
    model_en: 'You start from the assumption that it is not, because the slides are explicit that you expect a library to be unbiased and that is usually untrue, beginning with the synthesis itself. It helps to know how a degenerate oligo is physically made. Solid-phase synthesis adds one base at a time, and at the position you want degenerate you simply pour in several protected nucleotides together in a chosen ratio; they compete randomly for the growing chain, so a single synthesis yields a mixture of sequences. That mechanism explains two things at once. It is why spiked codons work — you just control the feed ratio. And it is why bias is unavoidable, because the four protected nucleotides have intrinsically different coupling efficiencies, so feeding in twenty-five per cent does not mean twenty-five per cent is incorporated, and different companies have different bias patterns. Then bias compounds. In PCR, GC-rich sequences and sequences that form secondary structure amplify poorly, so the pool enriches for whatever amplifies well. In cloning and transformation, ligation and transformation efficiencies are sequence-dependent — and worst of all, any variant that is toxic to the host simply vanishes at transformation. That last one is genuinely insidious, because it means your library was silently screened once before you started screening it, and the members removed are exactly those with the strongest biological effect. As for measuring it, there are two methods. Sanger sequencing of preps from individual colonies on ninety-six-well plates gives you tens of clones. Or next-generation sequencing of the whole pool, up to twenty million reads on a MiSeq, which is now in-house at many institutions. The point of NGS here is not to enumerate every member — the library is usually far larger than twenty million — but to get a hint of sequence bias, error rate and unique reads, which is to say the real heterogeneity of your library. Knowing how skewed it is beats pretending it is uniform.',
    checklist: ['Assume it is biased — the slides say so explicitly', 'Solid-phase synthesis adds one base at a time', 'Degeneracy: pour in several protected nucleotides at that step', 'Explains spiked codons (control the feed ratio)', 'And explains bias: different coupling efficiencies per base', 'Different suppliers have different bias patterns', 'PCR bias: GC-rich and structured sequences amplify poorly', 'Cloning bias: sequence-dependent ligation and transformation', 'Worst case: toxic variants disappear at transformation', 'So the library is screened once before you screen it', 'QC 1: Sanger from 96-well colony preps, tens of clones', 'QC 2: NGS of the pool, up to 20 million reads on a MiSeq', 'NGS estimates bias, error rate and diversity — not enumeration']
  }
},

/* ============ PART II — SCREEN vs SELECTION (9-B) ============ */

{
  id: '4-10',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.10',
  enTitle: 'Screen versus selection',
  cnTitle: '筛选与选择',
  slides: 'L9B s.2–4',
  coverage: 'full',
  coverageNote: 'The deck gives careful definitions and the source says to reproduce the wordings exactly, so they are given verbatim in the points. Why selection has vastly higher throughput is the deck\'s own quiz question; the reason is that screening is limited by detection while selection is limited only by the number of molecules you can handle.',
  summary: {
    en: 'A screen is a growth condition where both mutant and wild type can grow but can be distinguished phenotypically — you produce and sort through many non-mutant individuals to find the rare desired mutation. A selection allows selective propagation of genetically marked cells or constructs, so phenotypes passing the selective pressure are preserved while others are purged, and only the desired mutation survives. Selection searches vastly more variants.',
    cn: '筛选（screen）是一种突变体和野生型都能生长、但可以在表型上区分开的生长条件——你要产生并逐个分拣大量非突变个体，才能找到那个稀有的目标突变。选择（selection）则允许被遗传标记的细胞或构建体选择性地增殖，通过选择压力的表型被保留、其余被清除，只有目标突变能存活。选择能搜索的变体数量远远更多。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.3', src: 'img/figures/L9B_s03_1.webp' },
    { slide: 'L9B s.4', src: 'img/figures/L9B_s04_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**筛选（screen）要你逐个测；选择（selection）让系统自己淘汰。**\n\n' +
            '所以选择的通量高得多（体外可达 10¹⁴），而筛选换来的是**灵活性**——任何能测的东西都能筛，还能拿到定量数据。',
  skipIt: 'phenotype / genotype 那两个希腊词源当趣闻就行。**第 9 讲没有 RECAP 可引**——但这一节有一张老师自己写的定义幻灯片（L9B 第 3 页），上面把 SCREEN 和 SELECTION 的定义、以及「**定向进化是一系列 screen 或 selection，中间用进一步的多样化隔开**」这句话都写得很明确。**那张幻灯片上的内容都要会。**',
  explain: [
    {
      q: '两个定义读起来很像，关键差别在哪一个词上？',
      a: '**在「都能生长」这三个字上。**\n\n' +
         '**SCREEN 的定义**：一种**突变体和野生型都能生长**、但可以在表型上区分开的条件。\n\n' +
         '**SELECTION 的定义**：一种让通过选择压力的表型**被保留、其余被清除**的实验。\n\n' +
         '**所以差别是：筛选里失败者还活着，选择里失败者死了。**\n\n' +
         '**而这一个差别决定了全部后果：**\n\n' +
         '**既然失败者还活着，你就必须逐个去看**——每一个变体都要占掉一个孔、一个菌落、一次读数。**通量被你的检测能力卡死**：96 孔板一天几千个，FACS 一天 10⁷–10⁸。\n\n' +
         '**既然失败者死了，你就什么都不用测**——把整个文库丢进选择压力里，剩下的自动就是你要的。**通量只受「你能操作多少个分子」限制，而不受检测速度限制**——所以体外能到 10¹⁴。\n\n' +
         '**记住这一句就够了：筛选是「你去找」，选择是「让它们自己剩下来」。**\n\n' +
         '**顺带一提，这两个词在中文里都被译成「筛选」，非常容易混。**建议心里就用英文，或者用「逐个测 vs 自动淘汰」来区分。',
      takeaway: '差别在「失败者活不活着」。活着就得你逐个去看（受检测能力限制），死了就自动剩下（只受分子数限制）。'
    },
    {
      q: '既然选择的通量高这么多，为什么还要用筛选？',
      a: '**因为选择要求你把「想要的功能」翻译成「能不能活下来」，而这件事经常做不到。**\n\n' +
         '**筛选换来的是灵活性，具体有三条：**\n\n' +
         '**一、任何能测的东西都能筛。**只要你能设计出一个检测方法——显色、荧光、光谱、质谱——你就能筛它。**而选择要求这个功能能直接决定存活或保留**，绝大多数功能做不到这一点。\n\n' +
         '「让这个酶对底物 B 的活性提高十倍」——**你怎么把它变成生死问题？**如果细胞不需要 B 才能活，那就没有天然的选择压力，你得专门设计一套（比如让 B 的产物变成必需营养），**而这套设计本身可能就是一个课题**。\n\n' +
         '**二、你拿到的是定量数据。**筛选给你每个变体的具体数值，你能排序、能看分布、能发现「有意思但不是最好」的变体。**选择只给你一个二元结果：活下来了，或者没有。**\n\n' +
         '**三、你可以故意挑第二名。**这一条听起来奇怪，但很实用：最好的那个变体可能有别的毛病（不稳定、难表达、有专利）。**筛选让你能看着数据挑；选择只把冠军交给你。**\n\n' +
         '**所以取舍很清楚：选择赢在通量，筛选赢在信息量和可设计性。**\n\n' +
         '幻灯片自己也点明了这一点：**选择「更难设计」。**这是它唯一但很实在的代价。',
      takeaway: '选择要求把功能翻译成生死，而多数功能翻译不了。筛选给的是定量数据和挑第二名的自由。'
    },
    {
      q: '「定向进化是一系列 screen 或 selection，中间用多样化隔开」——这句话为什么值得逐字记？',
      a: '**因为它是老师自己写在定义幻灯片上的，而且里面每个词都在排除一种常见的误解。**\n\n' +
         '**「一系列（a series of rounds）」** —— 排除了「做一轮就叫定向进化」。**单轮只是一次筛选实验。**\n\n' +
         '为什么必须多轮？回到第 4-3 节：**每轮只能引入 1–5 个突变**（多了全是死的）。想走远，只能多走几轮，每轮从上一轮的赢家出发。\n\n' +
         '**「screen 或 selection」** —— 排除了「定向进化必须用选择」。**两种都算**，取决于你的功能能不能翻译成生死。\n\n' +
         '**「中间用进一步的多样化隔开（separated by further diversification）」** —— **这是最容易被漏掉、也最要紧的一个词。**\n\n' +
         '意思是：每一轮筛完之后，**你要拿赢家再做一次多样化**（易错 PCR、基因重排——第 9-A 讲那些方法），然后才进入下一轮。\n\n' +
         '**如果不重新多样化会怎样？**你只是在同一个文库里反复挑同一批赢家，**富集了，但没有进步**。多样性只会越筛越少。\n\n' +
         '**所以这句话把 9-A 和 9-B 焊成了一个环：**\n\n' +
         '**多样化（9-A）→ 筛选/选择（9-B）→ 多样化（9-A）→ ……**\n\n' +
         '**被问到「什么是定向进化」，把这一句说完整，比讲任何一个具体技术都到位。**',
      takeaway: '「一系列」排除单轮，「screen 或 selection」排除只能用选择，「中间多样化」排除只富集不进步。'
    }
  ],
  points: [
    { term: 'SCREEN — the definition', en: 'A growth condition where both mutant and wild type are able to grow, but can be distinguished phenotypically. You produce and sort through many non-mutant individuals to find the rare desired mutation.', cn: '一种突变体和野生型都能生长、但可以在表型上被区分开的生长条件。你要产生并分拣大量非突变个体，才能找到那个稀有的目标突变。' },
    { term: 'SELECTION — the definition', en: 'An experiment which allows for the selective propagation of genetically marked cells or constructs. Phenotypes that pass some selective pressure are preserved while others are purged. Only the desired mutation survives.', cn: '一种允许被遗传标记的细胞或构建体选择性增殖的实验。通过某种选择压力的表型被保留，其余被清除。只有目标突变能存活下来。' },
    { term: 'Directed evolution defined', en: 'Directed evolution is a series of rounds of screens or selections, separated by further diversification.', cn: '定向进化是一系列的筛选或选择轮次，各轮之间穿插进一步的多样化。' },
    { term: 'Phenotype', en: 'From phainein, to appear or to show. Here it is the functional trait — binding or catalytic activity.', cn: '来自 phainein（显现、展示）。在这里指功能性状——结合能力或催化活性。' },
    { term: 'Genotype', en: 'From genos, birth or origin. Here it is the nucleic acid that can be replicated.', cn: '来自 genos（出生、起源）。在这里指可以被复制的核酸。' },
    { term: 'Screening in practice', en: 'Conceptually the simplest way to find better or new function, designable as long as there is a way to test for it. You need an assay as high-throughput as possible, ideally colorogenic or fluorogenic — direct visualisation, a plate reader, or fluorescence-activated cell sorting.', cn: '在概念上是寻找更好或全新功能最简单的方式，只要有办法检测就能设计出来。你需要一个尽可能高通量的检测方法，最好是显色或荧光的——直接观察、酶标仪，或者流式细胞分选（FACS）。' },
    { term: 'The screening disadvantage', en: 'We may not be able to test every member of the library — imagine the number of 96-well plates you would have to pipette.', cn: '我们可能无法检测文库的每一个成员——想想你得移液多少块 96 孔板。' },
    { term: 'Selection in practice', en: 'Can be performed both in vivo and in vitro. Especially the in vitro settings allow much larger library sizes, up to 10^14. Selections can be performed under more stringent control, under desired non-physiological conditions. But they are more challenging to design.', cn: '体内和体外都可以做。尤其是体外形式允许大得多的文库，最高可达 10¹⁴。选择可以在更严格的控制下进行，可以使用所需的非生理条件。但设计难度更大。' }
  ],
  beyondPoints: [
    { term: 'Why selection wins on throughput', en: 'A screen means you must test each variant individually — every one occupies a well, a colony or a read. Even FACS, which is high-throughput, passes cells one at a time through a detector. Throughput is limited by your detection capacity: a few thousand a day on 96-well plates, 10^7 to 10^8 a day by FACS.', cn: '筛选意味着你必须逐个检测——每个变体都要占一个孔、一个菌落、一次读数。即使是 FACS 这种高通量手段，也是让细胞一个一个流过检测器。通量受限于你的检测能力：96 孔板每天几千个，FACS 每天 10⁷–10⁸ 个。' },
    { term: 'Selection lets the system do the work', en: 'You test nothing. You put the whole library under a selective pressure and the unsuitable members die or are washed away, so what remains is automatically what you wanted. Throughput is limited only by the number of molecules you can handle, not by detection speed — hence up to 10^14 in vitro.', cn: '你什么都不检测。把整个文库丢进选择压力下，不合格的自己死掉或被洗掉，剩下的自动就是你要的。通量只受限于你能操作的分子数，而不是检测速度——所以体外可达 10¹⁴。' },
    { term: 'What screening buys in exchange', en: 'Flexibility. Anything measurable can be screened, you get quantitative data, and you can deliberately pick the second-best variant if you want. Selection is far more demanding to design, because you must convert the function you want into survival or retention.', cn: '筛选换来的是灵活性：只要能测就能筛，还能拿到定量数据，甚至可以有意挑「第二好的」。选择的设计难度大得多，因为你必须把「想要的功能」转化成「存活或被保留」。' }
  ],
  terms: [
    { en: 'Screen', cn: '筛选', def_en: 'A condition in which both mutant and wild type grow but are phenotypically distinguishable, so you must test individuals to find the rare one you want.', def_cn: '一种突变体和野生型都能生长、但表型可区分的条件，因此你必须逐个检测才能找到想要的那个稀有个体。' },
    { en: 'Selection', cn: '选择', def_en: 'A condition under which only the desired phenotype survives or is retained, so no individual testing is needed and throughput is limited only by molecule number.', def_cn: '一种只有目标表型能存活或被保留的条件，因此不需要逐个检测，通量只受分子数量限制。' },
    { en: 'FACS', cn: '流式细胞分选', def_en: 'Fluorescence-activated cell sorting — the highest-throughput screening method, reaching 10^7 to 10^8 cells a day, but still passing cells one at a time past a detector.', def_cn: '荧光激活细胞分选——通量最高的筛选方法，每天可达 10⁷–10⁸ 个细胞，但仍然是让细胞一个一个经过检测器。' },
    { en: 'Selective pressure', cn: '选择压力', def_en: 'The condition that preserves desired phenotypes and purges the rest. Designing one that corresponds to the function you want is the hard part of any selection.', def_cn: '保留目标表型、清除其余的条件。设计一个真正对应你想要功能的选择压力，是任何选择实验中最难的部分。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which approach allows you to search a larger number of variants, and why?',
      q_cn: '哪种方法能搜索更多的变体？为什么？',
      options: ['Screening, because plate-based assays are quick to run', 'Selection, because nothing is measured variant by variant', 'They reach the same number of variants in practice', 'Screening, because FACS sorts up to 10^7 to 10^8 cells in a single day'],
      answer: 1,
      optionNotes: {
        3: { en: 'FACS really is the fastest screen, 10^7 to 10^8 cells, but it is still a screen: every cell has to be interrogated one at a time by a detector. A selection interrogates nothing, so its limit is how many molecules fit in the tube.', cn: 'FACS 确实是最快的 screen，可以到 10^7–10^8 个细胞，但它仍然是一种 screen：每个细胞都要被检测器逐个问一遍。而 selection 什么都不问，所以它的上限只取决于你能往管子里放多少分子。' }
      },
      why_en: 'Selection wins by many orders of magnitude. Screening is bounded by how fast you can detect — a few thousand a day on plates, 10^7 to 10^8 by FACS — while selection is bounded only by how many molecules you can handle, reaching 10^14 in vitro.',
      why_cn: '选择以许多个数量级胜出。筛选受限于检测速度——铺板每天几千个，FACS 每天 10⁷–10⁸——而选择只受限于你能操作多少分子，体外可达 10¹⁴。' },
    { type: 'mcq',
      q_en: 'In the deck\'s definition, what distinguishes a screen from a selection?',
      q_cn: '按课件的定义，筛选和选择的区别是什么？',
      options: ['A screen is done in vitro, a selection inside living cells', 'Both grow in a screen and must be told apart; a selection kills the rest', 'A screen reads out fluorescence, a selection uses an antibiotic', 'A screen is faster to complete than a selection of the same library'],
      answer: 1,
      optionNotes: {
        0: { en: 'In vitro versus in vivo is a different axis altogether. Sorting a yeast library by FACS is a screen done in living cells, and SELEX is a selection done entirely in a tube. What defines a selection is that the unwanted variants do not survive, not where it happens.', cn: 'in vitro 和 in vivo 是另外一条分类轴。用 FACS 分选 yeast 文库是在活细胞里做的 screen，而 SELEX 是完全在试管里做的 selection。判据是「不想要的那些能不能活下来」，不是在哪里做。' }
      },
      why_en: 'The definitions are worth reproducing exactly. Screening means sorting through many non-mutants to find the rare desired one; selection means the unwanted are purged so only the desired mutation survives.',
      why_cn: '这两个定义值得原样记住。筛选是从大量非突变体中分拣出那个稀有的目标；选择是把不需要的清除掉，只有目标突变存活。' },
    { type: 'mcq',
      q_en: 'What does screening offer that selection does not?',
      q_cn: '筛选能提供而选择不能提供的是什么？',
      options: ['The ability to search a much larger number of variants', 'Flexibility — any measurable property, and quantitative data', 'A lower cost per variant examined in the library', 'The ability to work under non-physiological conditions'],
      answer: 1,
      optionNotes: {
        0: { en: 'Library size is what selection is good for, not screening. That is the exact trade the slide is built on: screening buys flexibility and quantitative data, and pays for it in throughput.', cn: '文库规模大是 selection 的长处，不是 screening 的，这正是这一节要讲的取舍。screening 换来的是灵活性和定量数据，代价恰恰就是通量。' }
      },
      why_en: 'Selection is far harder to design because you must convert the desired function into survival or retention. Screening only requires an assay, gives you numbers rather than a yes or no, and lets you choose among ranked variants.',
      why_cn: '选择的设计难度大得多，因为你必须把想要的功能转化成「存活或被保留」。筛选只需要一个检测方法，给出的是数值而不是是非判断，而且可以在排序后的变体中自由挑选。' },
    { type: 'short',
      q_en: 'Define screen and selection, and say what directed evolution is.',
      q_cn: '定义筛选和选择，并说明什么是定向进化。',
      accept: ['both', 'distinguished phenotypically', 'selective propagation', 'purged', 'rounds'],
      answer_en: 'A screen is a growth condition where both mutant and wild type are able to grow, but can be distinguished phenotypically — so you produce and then sort through many non-mutant individuals in order to find the rare desired mutation. A selection is an experiment which allows for the selective propagation of genetically marked cells or constructs: phenotypes that pass some selective pressure are preserved while others are purged, so only the desired mutation survives. And directed evolution is a series of rounds of screens or selections, separated by further diversification. The practical difference that follows from those definitions is throughput. In a screen you must test each variant individually, so you are limited by detection capacity — a few thousand a day on plates, up to ten to the seven or eight by FACS. In a selection you test nothing at all; the system purges the unsuitable for you, so you are limited only by how many molecules you can physically handle, which reaches ten to the fourteen in vitro. The price is that selections are much harder to design, because you have to convert the function you want into survival or retention.',
      answer_cn: '筛选是一种突变体和野生型都能生长、但可以在表型上区分开的生长条件——所以你必须产生并逐个分拣大量非突变个体，才能找到那个稀有的目标突变。选择是一种允许被遗传标记的细胞或构建体选择性增殖的实验：通过某种选择压力的表型被保留，其余被清除，所以只有目标突变能存活。而定向进化就是一系列筛选或选择的轮次，各轮之间穿插进一步的多样化。由这两个定义直接推出的实际差别是通量。筛选中你必须逐个检测每个变体，所以受限于检测能力——铺板每天几千个，FACS 最多每天 10⁷–10⁸ 个。选择中你什么都不检测，体系替你清除不合格的，所以只受限于你实际能操作多少分子，体外可达 10¹⁴。代价是选择的设计难度大得多，因为你必须把想要的功能转化成「存活或被保留」。'
    }
  ],
  oral: {
    q_en: 'What is the difference between a screen and a selection?',
    q_cn: '筛选和选择有什么区别？',
    model_en: 'The deck gives careful definitions and they are worth reproducing closely. A screen is a growth condition where both mutant and wild type are able to grow, but can be distinguished phenotypically — so you produce and sort through many non-mutant individuals in order to find the rare desired mutation. A selection is an experiment which allows for the selective propagation of genetically marked cells or constructs, where phenotypes that pass some selective pressure are preserved while others are purged, so only the desired mutation survives. And tying the whole lecture pair together: directed evolution is a series of rounds of screens or selections separated by further diversification. The consequence that matters most is throughput, and selection wins by many orders of magnitude. The reason is worth stating simply. Screening means testing each variant individually — every one occupies a well, a colony or a read — and even fluorescence-activated cell sorting, which is genuinely high-throughput, still passes cells one at a time past a detector. So you are limited by detection capacity: a few thousand a day on ninety-six-well plates, perhaps ten to the seven or eight a day by FACS. Selection means you test nothing at all. You put the whole library under a selective pressure and the unsuitable members die or get washed away, so whatever remains is automatically what you wanted. Your limit is then the number of molecules you can handle rather than any detection speed, which is why in vitro selections reach ten to the fourteen. What screening buys in exchange is flexibility: anything you can measure can be screened, you get quantitative data rather than a binary answer, and you can deliberately pick the second-best variant if you want it. Selection is much more demanding to design, because you must convert the function you care about into survival or retention — but it can also be run under stringent, non-physiological conditions that a cell-based screen could never tolerate.',
    checklist: ['Screen: both grow, distinguished phenotypically, sort through many', 'Selection: selective propagation, passers preserved, others purged', 'Directed evolution: rounds of screen/selection separated by diversification', 'Phenotype from phainein (to show); genotype from genos (origin)', 'Selection searches far more variants', 'Screening is limited by detection: thousands a day on plates, 10^7-10^8 by FACS', 'Even FACS passes cells one at a time', 'Selection tests nothing — the system purges the unwanted', 'Limited only by molecule number, so up to 10^14 in vitro', 'Screening buys flexibility, quantitative data, ability to pick second-best', 'Selection is harder to design but allows non-physiological conditions']
  }
},

{
  id: '4-11',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.11',
  enTitle: 'The genotype–phenotype link',
  cnTitle: '基因型–表型连接',
  slides: 'L9B s.5',
  coverage: 'full',
  coverageNote: 'The slide is emphatic that this linkage is necessary, and it tabulates the four approaches. Why it is necessary — that proteins cannot be amplified or sequenced — is the underlying logic, and once you have it, every display technology becomes just a different answer to the same question.',
  summary: {
    en: 'It is necessary to have a linkage between the phenotype exhibited by the protein and the gene that encodes it. In vivo, in bacteria or phage, the link is made by compartmentalising genes in cells. In vitro, ribosome display makes a non-covalent linkage and mRNA display a covalent one, while droplets provide artificial compartmentalisation. The in vitro methods are made possible by cell-free expression systems.',
    cn: '必须在蛋白所展现的表型和编码它的基因之间建立连接。在体内（细菌或噬菌体中），连接通过把基因区隔在细胞内实现。在体外，核糖体展示建立非共价连接，mRNA 展示建立共价连接，而液滴则提供人工的区隔化。这些体外方法之所以可行，靠的是无细胞表达系统。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.5', src: 'img/figures/L9B_s05_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**蛋白有功能，但蛋白不能被扩增、也不能被测序**——所以必须把它和编码它的核酸绑在一起。\n\n' +
            '绑法只有三种：**物理区隔**（细胞、液滴）、**非共价**（核糖体展示）、**共价**（mRNA 展示）。后面所有展示技术都只是这三种的变体。',
  skipIt: 'Leemhuis 2005 那篇综述的出处不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**三种绑法的分类必须记**，它是后面五节内容的唯一索引。',
  explain: [
    {
      q: '为什么非要把蛋白和它的基因绑在一起？',
      trace: {
        what: '**基因型–表型连接（genotype-phenotype linkage）**指的是把蛋白（表型，功能所在）和编码它的核酸（基因型，信息所在）用某种方式绑在一起，让你挑出好的蛋白时连它的基因也一起拿到手。',
        from: '因为**蛋白不能被扩增、也不方便测序**——找到一个结合力极好的分子之后，如果它跟自己的基因失散了，你就留不住它，也无法知道它的序列（回到第 1-3 节：蛋白层面没有 PCR）。',
        to: '绑法只有三种——**物理区隔**（细胞、噬菌体颗粒、液滴）、**非共价**（核糖体展示，第 4-15 节）、**共价**（mRNA 展示，第 4-16 节）——后面整整五节展示技术，都只是这三种绑法的具体实现。',
        family: '它的反例是 SELEX（第 4-14 节）：对 RNA 适配体来说基因型和表型本来就是同一个分子，根本不需要连接——蛋白展示技术全部存在的理由，就是给蛋白人为补上 RNA 天生就有的这个便利。'
      },
      a: '**因为你面对的是一个很具体的困境，值得先感受一下。**\n\n' +
         '**假设你成功了：在 10¹³ 个变体里，你抓到了一个结合力极好的分子。**\n\n' +
         '**然后呢？**\n\n' +
         '**你怎么知道它的序列？**蛋白测序是 Edman 降解，一次只读 20–30 个残基，而且 N 端一被修饰就完全读不动（第 1-6 节）。\n\n' +
         '**你怎么把它复制出来？**你手上可能只有几个分子。而**蛋白不能被扩增**——没有 protein PCR，因为氨基酸之间不存在互补配对（第 1-3 节）。\n\n' +
         '**所以你抓到了它，却拿它没办法。**它会被你用完，然后消失。\n\n' +
         '**解法：让核酸跟着蛋白一起被抓到。**\n\n' +
         '核酸可以 PCR 扩增、可以测序、可以带进下一轮。**于是「挑出蛋白」这个动作顺带就交给了你它的基因。**\n\n' +
         '**注意这一整节其实是第 1-3 节那个论证的第三次出现：**\n\n' +
         '**第 1-3 节**：蛋白不能扩增 → 所以要在 DNA 层面动手。\n\n' +
         '**第 3-14 节**：蛋白层面没有定点工具 → 所以在 DNA 层面编码修饰。\n\n' +
         '**这一节**：蛋白不能扩增也不能测序 → 所以必须让 DNA 跟着它。\n\n' +
         '**同一条中心法则的限制，在三个不同的场合逼出了三种不同的应对。**',
      takeaway: '蛋白不能扩增也没法方便测序，所以抓到了也留不住。让核酸跟着走，「挑出蛋白」就顺带拿到了基因。'
    },
    {
      q: '三种绑法怎么记？它们各自的代价是什么？',
      a: '**按「绑得有多牢」排一遍，代价也跟着排出来了。**\n\n' +
         '**一、物理区隔（compartmentalisation）——最松，但最通用。**\n\n' +
         '不真的绑，只是**把基因和它的产物关在同一个小空间里**。**细胞是天然的区隔**（体内方法），**油包水液滴是人工的**（第 4-17 节）。\n\n' +
         '**优点**：蛋白可以自由扩散、正常折叠、甚至催化反应——**它没有被拴在任何东西上**。这就是为什么只有区隔法能筛**催化活性**（第 4-17 节）。\n\n' +
         '**代价**：细胞区隔受转化效率限制（10⁸，第 4-7 节）；液晶滴要额外的微流控设备。\n\n' +
         '**二、非共价连接——核糖体展示（第 4-15 节）。**\n\n' +
         '**核糖体同时抓着 mRNA 和刚合成出来的肽链**，三者形成一个三元复合物。**靠的是这个复合物不散开。**\n\n' +
         '**代价**：非共价意味着**会散**。所以整个操作必须低温、高镁、动作快——条件一旦不对，蛋白和它的基因就走散了。\n\n' +
         '**三、共价连接——mRNA 展示（第 4-16 节）。**\n\n' +
         '**用嘌呤霉素把 mRNA 和蛋白焊成一个分子。**\n\n' +
         '**优点**：最牢，可以洗得任意狠（想想第 2-38 节那个「结合牢就能洗得狠」的道理）。\n\n' +
         '**代价**：多几步化学操作，而且蛋白的 C 端永远拖着一条 mRNA。\n\n' +
         '**记住这三类，后面五节就都是它们的具体实现。**',
      takeaway: '区隔最松但蛋白自由（能筛催化）、非共价会散（要低温高镁）、共价最牢但蛋白拖着一条 mRNA。'
    },
    {
      q: '为什么体外那几种方法「靠的是无细胞表达系统」？',
      a: '**因为绑定必须发生在「蛋白刚被合成出来」的那一刻，而那一刻必须在你能控制的地方发生。**\n\n' +
         '看核糖体展示和 mRNA 展示都在利用什么：**核糖体正在翻译的那个瞬间。**\n\n' +
         '核糖体展示要的是「**mRNA 还在核糖体上、肽链也还在核糖体上**」这个中间态。\n\n' +
         'mRNA 展示要的是「**核糖体走到 mRNA 末端时，让嘌呤霉素接上去**」这个时刻。\n\n' +
         '**这两件事都必须在翻译现场做，而且要人为干预（低温冻住、或者加一个不该在那里的分子）。**\n\n' +
         '**在活细胞里，翻译现场在细胞质深处——你既看不见也够不着。**\n\n' +
         '**在 CFPS 反应管里，翻译现场就是这一管溶液。**你想加什么加什么、想什么时候降温就什么时候降温。\n\n' +
         '**这正是第 3-1 节最后那条的兑现：CFPS 不只是一种生产方法，它是一个可以随意干预翻译过程的平台。**\n\n' +
         '**而第 3-7 节那条也在这里接上了**：CFPS 能用线性 PCR 产物当模板，不需要克隆和转化——**所以体外展示的文库上限才不受转化效率约束**，可以到 10¹³。\n\n' +
         '**第 7 讲的两条特性（可干预、不需要转化），正好是第 9 讲体外展示成立的两个前提。**',
      takeaway: '绑定必须在翻译现场发生，而活细胞里的翻译现场你够不着。CFPS 把它变成了一管你能随意干预的溶液。'
    }
  ],
  points: [
    { term: 'The requirement', en: 'It is necessary to have a linkage between the phenotype exhibited by the protein and the gene, the nucleic acid, that encodes it.', cn: '必须在蛋白所展现的表型与编码它的基因（核酸）之间建立连接。' },
    { term: 'In vivo linkage', en: 'In bacteria or phage, by compartmentalising genes in cells.', cn: '在细菌或噬菌体中，通过把基因区隔在细胞内实现。' },
    { term: 'Ribosome display linkage', en: 'Non-covalent.', cn: '非共价的。' },
    { term: 'mRNA display linkage', en: 'Covalent.', cn: '共价的。' },
    { term: 'Droplet linkage', en: 'Compartmentalisation, mimicking natural cell compartments.', cn: '区隔化，模拟天然的细胞区室。' },
    { term: 'What makes the in vitro methods possible', en: 'Cell-free expression systems — the subject of Lectures 7 and 8.', cn: '无细胞表达系统——也就是第 7、8 讲的内容。' },
    { term: 'The reference', en: 'Leemhuis et al., Current Opinion in Structural Biology 2005, 15:472–478.', cn: 'Leemhuis 等，Current Opinion in Structural Biology 2005, 15:472–478。' }
  ],
  beyondPoints: [
    { term: 'Why the linkage is needed at all', en: 'The protein has the function, but a protein cannot be amplified or sequenced. Suppose you find one molecule with superb binding among 10^13 — what then? How would you learn its sequence, and how would you copy it?', cn: '有功能的是蛋白，但蛋白不能被扩增、也不能被测序。假设你在 10¹³ 个分子里找到了一个结合力极强的——然后呢？你怎么知道它的序列？怎么把它复制出来？' },
    { term: 'The answer', en: 'The protein must be tied to the nucleic acid encoding it, so that picking out the protein also hands you its gene — which you can then PCR-amplify, sequence and carry into the next round.', cn: '必须让蛋白和编码它的核酸绑在一起，这样你挑出蛋白的同时也就拿到了它的基因，可以 PCR 扩增、测序，并带进下一轮。' },
    { term: 'Three ways of tying, three families of technique', en: 'Physical compartmentalisation, keeping the gene and its product in one small space — a cell is a natural compartment, a water-in-oil droplet is an artificial one. Non-covalent linkage, as in ribosome display, where the ribosome holds both the mRNA and the nascent peptide in a ternary complex. Covalent linkage, as in mRNA display, where puromycin chemically welds the mRNA to the protein.', cn: '三种绑法对应三类技术：物理区隔——把基因和它的产物关在同一个小空间里（细胞是天然的区室，油包水液滴是人工的）；非共价连接——核糖体展示，核糖体同时抓着 mRNA 和新生肽，形成三元复合物；共价连接——mRNA 展示，用嘌呤霉素把 mRNA 和蛋白化学地焊在一起。' },
    { term: 'Why this makes the rest of the lecture simple', en: 'Once you hold this idea, every display technology that follows is just a different answer to the same question: how do I keep the protein and its gene together?', cn: '理解了这一点之后，后面每一种展示技术都只是同一个问题的不同答案：我怎么让蛋白和它的基因待在一起？' }
  ],
  terms: [
    { en: 'Genotype-phenotype linkage', cn: '基因型–表型连接', def_en: 'Any physical arrangement keeping a protein together with the nucleic acid that encodes it, so that selecting the protein also recovers its gene.', def_cn: '任何能把蛋白与编码它的核酸维系在一起的物理安排，使得选出蛋白的同时也回收到它的基因。' },
    { en: 'Compartmentalisation', cn: '区隔化', def_en: 'Confining a gene and its product to one small space. Cells do it naturally; water-in-oil droplets do it artificially.', def_cn: '把一个基因和它的产物限制在同一个小空间内。细胞天然如此；油包水液滴则是人工实现。' },
    { en: 'Ternary complex', cn: '三元复合物', def_en: 'The mRNA, ribosome and nascent polypeptide held together, which is the non-covalent linkage used by ribosome display.', def_cn: 'mRNA、核糖体和新生多肽维系在一起的复合体，这就是核糖体展示所用的非共价连接。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why is a genotype-phenotype link necessary?',
      q_cn: '为什么必须有基因型–表型连接？',
      options: ['It raises the expression level of the displayed protein', 'A protein cannot be amplified or sequenced, but its gene can', 'It keeps the displayed protein from aggregating', 'The ribosome cannot translate without such a link'],
      answer: 1,
      why_en: 'The function lives in the protein but the information lives in the nucleic acid. Without a link, identifying a superb binder among 10^13 molecules leaves you with no way to learn its sequence or make more of it.',
      why_cn: '功能在蛋白上，而信息在核酸上。没有连接的话，即使在 10¹³ 个分子里找到了一个极佳的结合子，你也无从知道它的序列、也无法再造出它。' },
    { type: 'mcq',
      q_en: 'Which technique uses covalent genotype-phenotype linkage?',
      q_cn: '哪种技术使用共价的基因型–表型连接？',
      options: ['Phage display', 'Ribosome display', 'mRNA display', 'Droplet IVC'],
      answer: 2,
      optionRefs: { 0: '4-13', 1: '4-15', 3: '4-17' },
      why_en: 'mRNA display welds the mRNA to its own encoded protein through puromycin. Ribosome display is non-covalent, while phage display and droplets both work by compartmentalisation.',
      why_cn: 'mRNA 展示通过嘌呤霉素把 mRNA 和它自己编码的蛋白焊在一起。核糖体展示是非共价的，而噬菌体展示和液滴都靠区隔化实现。' },
    { type: 'mcq',
      q_en: 'What makes the in vitro linkage methods possible at all?',
      q_cn: '是什么让体外的连接方法成为可能？',
      options: ['High-throughput sequencing', 'Cell-free expression systems', 'Improved transformation efficiency', 'Fluorescent proteins'],
      answer: 1,
      optionRefs: { 2: '4-7' },
      why_en: 'Ribosome display and mRNA display both require translation to happen outside a cell so you can manipulate the complex. That is exactly what CFPS provides, which is why Lectures 7 and 8 come before this one.',
      why_cn: '核糖体展示和 mRNA 展示都要求翻译在细胞之外进行，这样你才能操作那个复合物。这正是无细胞蛋白合成提供的能力，也是第 7、8 讲排在本讲之前的原因。' },
    { type: 'short',
      q_en: 'Name the three mechanisms of genotype-phenotype linkage and one technique for each.',
      q_cn: '说出基因型–表型连接的三种机制，并各举一种技术。',
      accept: ['compartment', 'non-covalent', 'covalent', 'ribosome display', 'mRNA display', 'phage'],
      answer_en: 'First, physical compartmentalisation: you keep the gene and its product together in one small space. A cell is a natural compartment, so in vivo selection in bacteria works this way, as does phage display where the virus particle is the compartment; a water-in-oil droplet is the artificial version, used in in vitro compartmentalisation. Second, non-covalent linkage, which is ribosome display: by omitting the stop codon the ribosome stalls at the end of the mRNA and holds a ternary complex of mRNA, ribosome and nascent polypeptide together. Third, covalent linkage, which is mRNA display: puromycin attached to the three-prime end of the mRNA enters the ribosome and becomes covalently joined to the C-terminus of the protein, welding message and product into a single molecule. All three exist for the same reason — a protein cannot be amplified or sequenced, so unless it is tied to the nucleic acid that encodes it, finding a good one tells you nothing you can act on.',
      answer_cn: '第一，物理区隔：把基因和它的产物关在同一个小空间里。细胞是天然的区室，所以细菌体内选择就是这样工作的；噬菌体展示中病毒颗粒就是那个区室；而油包水液滴是人工版本，用于体外区隔化。第二，非共价连接，也就是核糖体展示：去掉终止密码子后核糖体在 mRNA 末端停住，把 mRNA、核糖体和新生多肽维系成一个三元复合物。第三，共价连接，也就是 mRNA 展示：连在 mRNA 3′ 端的嘌呤霉素进入核糖体，与蛋白的 C 端共价相连，把信息和产物焊成同一个分子。这三者存在的理由是同一个——蛋白不能被扩增、也不能被测序，所以除非把它和编码它的核酸绑在一起，否则即使找到了好的也无从下手。'
    }
  ],
  oral: {
    q_en: 'Why do display technologies exist at all?',
    q_cn: '展示技术到底为什么会存在？',
    model_en: 'Because of a single problem, and the slide is emphatic about it: it is necessary to have a linkage between the phenotype exhibited by the protein and the gene, the nucleic acid, that encodes it. The reason that matters comes straight from the central dogma. The function lives in the protein, but a protein cannot be amplified and it cannot be sequenced. So imagine you have screened ten to the thirteen molecules and one of them binds your target superbly. What then? You have no way to learn its sequence and no way to make more of it. The answer is that the protein has to be physically tied to the nucleic acid encoding it, so that when you pick out the protein you also have its gene in hand — and then you can PCR-amplify it, sequence it, and carry it into the next round. There are three ways of tying, and they correspond exactly to the three families of technique. The first is physical compartmentalisation: keep the gene and its product together in one small space. A cell is a natural compartment, which is how in vivo bacterial selection and phage display work, the phage particle being the compartment; a water-in-oil droplet is the artificial version. The second is non-covalent linkage, used by ribosome display, where the ribosome holds the mRNA and the nascent peptide together in a ternary complex. The third is covalent linkage, used by mRNA display, where puromycin chemically welds the mRNA to the protein it encoded. Once you hold that framing, everything that follows in this lecture becomes simple, because each display technology is just a different answer to the same question: how do I keep the protein and its gene together? And it is worth noting that all the in vitro methods are made possible by cell-free expression systems, which is why the cell-free lectures come immediately before this one.',
    checklist: ['The requirement: link the phenotype to the gene encoding it', 'Why: function is in the protein, but protein cannot be amplified or sequenced', 'Finding a great binder among 10^13 is useless without its gene', 'So: tie protein to nucleic acid, then PCR, sequence, next round', 'Mechanism 1: compartmentalisation — cells, phage particles, droplets', 'Mechanism 2: non-covalent — ribosome display, ternary complex', 'Mechanism 3: covalent — mRNA display, puromycin', 'Every display technology is one answer to the same question', 'In vitro methods enabled by cell-free expression systems', 'Reference: Leemhuis et al., Curr Opin Struct Biol 2005']
  }
},

{
  id: '4-12',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.12',
  enTitle: 'In vivo selection in bacteria',
  cnTitle: '细菌体内选择',
  slides: 'L9B s.6–7',
  coverage: 'full',
  coverageNote: 'The colistin experiment and the deck\'s own answer about resistance emergence are on the slides. Why the result challenges the standard account of gene birth, and the honest limitation the slide itself attaches, are the beyond-the-slides content.',
  summary: {
    en: 'The simplest in vivo linkage: the gene sequence is found on a plasmid inside the isolated cell. The headline example is Knopp and colleagues in 2021, who selected variants conferring resistance to the last-resort antibiotic colistin from 100 million randomly generated DNA sequences in E. coli — supporting the idea that non-coding DNA can serve as a substrate for de novo gene evolution.',
    cn: '最简单的体内连接：基因序列就在被分离出来的那个细胞内的质粒上。标志性的例子是 Knopp 等人 2021 年的工作，他们从大肠杆菌中一亿条随机生成的 DNA 序列里筛出了赋予最后一线抗生素粘菌素抗性的变体——这支持了「非编码 DNA 可以作为从头基因进化的原料」这一观点。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.7', src: 'img/figures/L9B_s07_1.webp' },
    { slide: 'L9B s.7', src: 'img/figures/L9B_s07_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '这是最简单的一种连接：**基因就在那个细胞里的质粒上**，挑出细胞就拿到了基因。\n\n' +
            '而 Knopp 那个实验的意义在于：**从一亿条完全随机的序列里，真的筛出了有功能的东西**——说明从头基因诞生不是统计学上不可能的。',
  skipIt: 'PLoS Genetics 2021 这个出处不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**幻灯片自己加的那条限定（作用机制通常是通过影响细菌的调控网络）一定要记住**，它是这个实验唯一诚实的读法。',
  explain: [
    {
      q: '为什么「从随机序列里筛出功能」这件事值得当一个里程碑？',
      a: '**因为它挑战了一个关于新基因从哪来的标准答案。**\n\n' +
         '**传统观点**：新基因来自**已有基因的复制和分化**——一个基因复制成两份，其中一份可以自由变异，慢慢演化出新功能。\n\n' +
         '**这个观点隐含着一个前提：新功能必须从已有功能出发。**（回到第 4-5 节：这正是「路径依赖」。）\n\n' +
         '**而 Knopp 的实验说：不一定。**\n\n' +
         '他们从**一亿条完全随机生成的 DNA 序列**出发——**没有任何祖先，不是任何东西的复制品**——在大肠杆菌里筛出了能赋予粘菌素（最后一线抗生素）抗性的变体。\n\n' +
         '**结论有两层：**\n\n' +
         '**统计上，从头基因诞生（de novo gene birth）不是不可能的。**一亿这个数字在实验室里是可及的，而在演化的时间尺度和种群规模面前更是小数目。\n\n' +
         '**基因组里大量的非编码 DNA，可以充当新基因的原料。**它们本来被当成「垃圾」，现在看是一个巨大的随机序列库。\n\n' +
         '**而这也正好呼应第 4-5 节那条：自然界的蛋白只是进化走过的那条路。**这个实验证明了旁边还有别的路可以走上去。',
      takeaway: '传统观点是新基因来自旧基因的复制分化。这个实验说随机序列也能出功能——非编码 DNA 是可用的原料。'
    },
    {
      q: '幻灯片为什么要专门加一句「作用机制通常是通过影响细菌的调控网络」？',
      a: '**因为这是一条防止过度解读的限定——而它把结论的含义改变了相当多。**\n\n' +
         '**不加这句话，你很容易读成：**「从随机序列里进化出了一个有酶活性的新蛋白。」\n\n' +
         '**实际发生的多半是：**这些随机肽段**本身没有什么催化活性**。它们干的事是**干扰细菌原有的调控网络**——改变膜电位、扰动某条信号通路、影响某个转运蛋白的表达——**间接地**产生了抗性。\n\n' +
         '**这个差别很大：**\n\n' +
         '**「造出了一个新功能蛋白」** vs **「造出了一个能捣乱、而捣乱恰好有用的肽段」。**\n\n' +
         '**后者要容易得多**——一个细胞的调控网络有无数个可以被扰动的点，随机肽段撞上其中一个的概率，远高于凑出一个精确的活性位点。\n\n' +
         '**所以正确的读法是：这个实验证明了「随机序列可以成为演化的起点」，而不是「随机序列可以直接给出成熟的酶」。**\n\n' +
         '**幻灯片主动加上这条限定，这个做法本身值得学。**\n\n' +
         '它跟这门课里其它几处诚实的表述是一路的：第 3-10 节「重新分配 TAG 之后细胞能活，**但适合度损失可观**」、第 4-8 节「**or just beware** that you might not be searching the whole library」。\n\n' +
         '**口试里被问到这个实验，把限定条件一起说出来，比只说结论更能体现你读懂了。**',
      takeaway: '它们多半不是有活性的酶，而是扰动了调控网络间接产生抗性。所以结论是「可以当起点」，不是「直接给出酶」。'
    },
    {
      q: '体内选择的连接方式这么简单，为什么后面还要那么多复杂技术？',
      a: '**因为「简单」和「够用」是两回事——它的上限被第 4-7 节那个断崖卡死了。**\n\n' +
         '**这种连接方式确实简单到无可挑剔：**基因在质粒上，质粒在细胞里，细胞长成一个菌落。**你挑一个菌落，蛋白和基因自动都在你手上。**不需要任何特殊技术。\n\n' +
         '**但它有两个硬约束：**\n\n' +
         '**一、文库上限 10⁸。**因为每一个变体都必须经过一次成功的转化（第 4-7 节）。**Knopp 那个实验的一亿条序列，已经基本顶到这个天花板了。**\n\n' +
         '**二、必须在细胞里可行。**你要选的那个功能，得能在一个活细胞的环境里表现出来、而且能变成生死。**如果你的蛋白对细胞有毒、需要非生理条件、或者你要选的是一个纯粹的体外结合能力，细胞就成了障碍而不是帮手。**\n\n' +
         '**幻灯片提到选择「可以在期望的非生理条件下进行」——那说的正是体外方法的优势。**\n\n' +
         '**所以后面那些技术的存在理由很明确：**\n\n' +
         '**噬菌体展示**（第 4-13 节）：仍在体内，但把蛋白搬到颗粒表面，方便用「结合」来选。\n\n' +
         '**核糖体 / mRNA 展示**（第 4-15、4-16 节）：**彻底离开细胞**，上限跳到 10¹³。\n\n' +
         '**液滴**（第 4-17 节）：在体外重建区隔，**为了能筛催化活性**。\n\n' +
         '**每一个都是在补上「细胞连接法」的某一个不足。**',
      takeaway: '简单但被转化效率卡在 10⁸，而且要求功能能在活细胞里表现。后面每种技术都在补它的一个不足。'
    }
  ],
  points: [
    { term: 'How the linkage works', en: 'The gene sequence is found on a plasmid in the isolated cell.', cn: '基因序列就在被分离出来的那个细胞内的质粒上。' },
    { term: 'The experiment', en: 'Knopp et al., PLoS Genetics 2021. Variants were selected from 100 million randomly generated DNA sequences in E. coli that provide resistance to the last-resort antibiotic colistin.', cn: 'Knopp 等，PLoS Genetics 2021。从大肠杆菌中一亿条随机生成的 DNA 序列里，筛选出了能提供对最后一线抗生素粘菌素抗性的变体。' },
    { term: 'What it supports', en: 'It adds support to the idea that non-coding DNA can serve as a substrate for de novo gene evolution.', cn: '它为「非编码 DNA 可以作为从头基因进化的底物」这一观点提供了支持。' },
    { term: 'The mechanism caveat', en: 'The mechanism of function is usually through impact on the bacterial networks.', cn: '其作用机制通常是通过影响细菌的调控网络。' },
    { term: 'How resistance actually emerges', en: 'Little is known about the original emergence of resistance genes. It is widely accepted that non-pathogenic bacteria harbour a reservoir of ancestral resistance genes that spread to human pathogens by horizontal gene transfer, and that their substrate specificity can quickly change by mutations.', cn: '关于抗性基因最初是怎么出现的，我们所知甚少。普遍接受的看法是：非致病菌中存在一个祖先抗性基因的储库，这些基因通过水平基因转移扩散到人类病原菌，而它们的底物特异性可以通过突变迅速改变。' }
  ],
  beyondPoints: [
    { term: 'Why this experiment matters', en: 'The traditional view is that new genes arise from duplication and divergence of existing genes. This experiment shows that functional genes can be selected out of entirely random sequence, so de novo gene birth is not statistically impossible and non-coding DNA can serve as raw material.', cn: '传统观点是新基因来自已有基因的复制和分化。这个实验显示，从完全随机的序列里也能筛出有功能的基因，所以「从头基因诞生」在统计上并非不可能，非编码 DNA 可以作为原料。' },
    { term: 'The honest limitation the slide attaches', en: 'The note that function usually works through impact on bacterial networks matters a great deal. These random peptides mostly do not have enzymatic activity of their own; they interfere with regulatory networks — changing membrane potential, perturbing a signalling pathway — and produce resistance indirectly. That is a deliberate qualification, and the conclusion should not be overstated.', cn: '「作用机制通常是通过影响细菌的网络」这句注解非常关键。这些随机肽多半并没有自己的酶活性，而是干扰了调控网络——比如改变膜电位、扰动某条信号通路——从而间接产生抗性。这是一个有意的限定，结论不应被说得太大。' }
  ],
  terms: [
    { en: 'De novo gene birth', cn: '从头基因诞生', def_en: 'The emergence of a functional gene from previously non-coding sequence, rather than by duplication and divergence of an existing gene.', def_cn: '一个有功能的基因从原本非编码的序列中出现，而不是通过已有基因的复制与分化产生。' },
    { en: 'Colistin', cn: '粘菌素', def_en: 'A last-resort antibiotic, used as the selective pressure in the Knopp experiment.', def_cn: '一种最后一线使用的抗生素，在 Knopp 的实验中被用作选择压力。' },
    { en: 'Horizontal gene transfer', cn: '水平基因转移', def_en: 'Movement of genes between organisms other than by inheritance — the accepted route by which ancestral resistance genes reach human pathogens.', def_cn: '基因在生物之间通过非遗传方式的转移——公认的祖先抗性基因抵达人类病原菌的途径。' },
    { en: 'Resistance reservoir', cn: '抗性基因储库', def_en: 'The pool of ancestral resistance genes carried by non-pathogenic bacteria, whose substrate specificity can shift quickly by mutation.', def_cn: '非致病菌所携带的祖先抗性基因池，其底物特异性可通过突变迅速改变。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How is the genotype-phenotype link maintained in bacterial in vivo selection?',
      q_cn: '细菌体内选择中，基因型–表型连接是怎么维持的？',
      options: ['A covalent bond between the protein and its own mRNA', 'The gene sits on a plasmid inside the cell that displays it', 'A puromycin arm joining the peptide to the message', 'Emulsion droplets acting as artificial compartments'],
      answer: 1,
      optionRefs: { 0: '4-16', 2: '4-16', 3: '4-17' },
      why_en: 'The cell is a natural compartment. Isolate the cell that survived selection and its plasmid comes with it, so you have the sequence responsible.',
      why_cn: '细胞本身就是一个天然的区室。把在选择中存活下来的细胞分离出来，它的质粒也就跟着来了，于是你就拿到了对应的序列。' },
    { type: 'mcq',
      q_en: 'What did the Knopp colistin experiment demonstrate?',
      q_cn: 'Knopp 的粘菌素实验证明了什么？',
      options: ['That colistin resistance is always carried on plasmids', 'Functional variants were selected from 100 million random sequences', 'That non-pathogenic bacteria are the origin of every known resistance gene', 'That random sequences are almost always toxic to the cell'],
      answer: 1,
      why_en: 'It challenges the standard account that new genes arise only from duplication and divergence, by showing that non-coding sequence can serve as raw material for a functional gene.',
      why_cn: '它挑战了「新基因只能来自复制和分化」这一标准说法，表明非编码序列可以充当有功能基因的原料。' },
    { type: 'mcq',
      q_en: 'What qualification does the slide attach to the mechanism?',
      q_cn: '幻灯片对其作用机制加了什么限定？',
      options: ['The peptides are enzymes that degrade colistin, as a beta-lactamase degrades penicillin', 'They act by perturbing bacterial networks, not by catalysis', 'The resistance appears only at low growth temperature', 'The peptides fold into a stable three-dimensional structure'],
      answer: 1,
      optionNotes: {
        0: { en: 'That is the beta-lactamase model of resistance, an enzyme that destroys or modifies the drug. These are short random peptides with no evolved active site, and the qualification on the slide is precisely that they act indirectly, by perturbing bacterial networks such as membrane potential and signalling.', cn: '这是把 beta-lactamase 那一套抗性模型套了上来，也就是一个降解或修饰药物的酶。但这里是随机产生的短 peptide，没有演化出来的活性位点；幻灯片上的那句限定恰恰是说，它们是通过扰动细菌的网络（膜电位、信号传导）间接起作用的。' }
      },
      why_en: 'That is an honest and important qualification. The random peptides mostly perturb regulatory networks — membrane potential, signalling — producing resistance indirectly, so the conclusion should not be overstated.',
      why_cn: '这是一个诚实且重要的限定。这些随机肽多半是扰动了调控网络——膜电位、信号通路——从而间接产生抗性，所以结论不应被夸大。' },
    { type: 'short',
      q_en: 'Why does the colistin result challenge the standard view of how new genes arise, and where should you be careful?',
      q_cn: '粘菌素这个结果为什么挑战了「新基因如何产生」的标准观点？在哪里需要谨慎？',
      accept: ['duplication', 'divergence', 'random', 'de novo', 'networks'],
      answer_en: 'The traditional account is that new genes arise by duplication of an existing gene followed by divergence of the copy — you always start from something that already works. This experiment selected variants conferring colistin resistance out of a hundred million entirely random DNA sequences, which shows that functional genes can emerge from sequence that never coded for anything. That makes de novo gene birth statistically plausible and supports the idea that non-coding DNA is a genuine reservoir of raw material for new genes. Where to be careful is the qualification the slide itself adds: the mechanism of function is usually through impact on the bacterial networks. In other words these random peptides mostly do not possess enzymatic activity of their own — they interfere with regulation, perhaps by altering membrane potential or perturbing a signalling pathway, and confer resistance indirectly. So the honest reading is that random sequence can produce a useful phenotype, not that random sequence readily produces a well-formed enzyme.',
      answer_cn: '传统说法是新基因通过已有基因的复制、再由拷贝分化而产生——起点总是某个已经能工作的东西。这个实验从一亿条完全随机的 DNA 序列中筛出了赋予粘菌素抗性的变体，说明有功能的基因可以从从未编码过任何东西的序列里出现。这让「从头基因诞生」在统计上变得可信，也支持了「非编码 DNA 是新基因原料的真正储库」这一想法。需要谨慎的地方正是幻灯片自己加的那句限定：作用机制通常是通过影响细菌的网络。换句话说，这些随机肽多半并不具备自身的酶活性——它们是干扰了调控，可能是改变膜电位或扰动某条信号通路，从而间接产生抗性。所以诚实的解读是：随机序列可以产生有用的表型，而不是随机序列能轻易产生一个成形的酶。'
    }
  ],
  oral: {
    q_en: 'How does in vivo selection in bacteria work, and what is the most striking result from it?',
    q_cn: '细菌体内选择是怎么工作的？由它得到的最令人吃惊的结果是什么？',
    model_en: 'The linkage mechanism is the simplest of all the methods: the gene sequence sits on a plasmid inside the cell, so the cell itself is the compartment. Isolate a cell that survived the selective pressure and its plasmid comes with it, giving you the responsible sequence directly. The striking result is from Knopp and colleagues in PLoS Genetics in 2021. They took a hundred million randomly generated DNA sequences in E. coli and selected for resistance to colistin, which is a last-resort antibiotic — and they found variants that conferred it. The reason that matters is that it challenges the standard account of how new genes come into being. The traditional view is duplication and divergence: a gene is copied and the copy drifts into a new function, so you always begin from something that already works. Here, functional variants emerged from sequence that had never coded for anything, which supports the idea that non-coding DNA can serve as a substrate for de novo gene evolution — that gene birth from scratch is not statistically impossible. But the slide attaches an honest qualification that should be repeated rather than skipped: the mechanism of function is usually through impact on the bacterial networks. These random peptides mostly do not have enzymatic activity of their own. They interfere with regulation — changing membrane potential, perturbing a signalling pathway — and produce resistance indirectly. So the correct reading is that random sequence can produce a useful phenotype, not that it readily produces a well-formed enzyme. The deck also asks how antibiotic resistance emerges in general, and answers honestly that little is known about the original emergence of resistance genes; the accepted picture is that non-pathogenic bacteria harbour a reservoir of ancestral resistance genes that reach human pathogens by horizontal gene transfer, and that their substrate specificity can change quickly by mutation.',
    checklist: ['Linkage: the gene sits on a plasmid inside the isolated cell', 'The cell is a natural compartment', 'Knopp et al., PLoS Genetics 2021', '100 million random DNA sequences in E. coli', 'Selected for colistin resistance — a last-resort antibiotic', 'Supports de novo gene evolution from non-coding DNA', 'Challenges the duplication-and-divergence account of gene birth', 'Qualification: function is usually via impact on bacterial networks', 'So the peptides perturb regulation rather than acting as enzymes', 'General picture: little is known about original emergence of resistance', 'Reservoir in non-pathogens, spread by horizontal gene transfer']
  }
},

{
  id: '4-13',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.13',
  enTitle: 'Phage display',
  cnTitle: '噬菌体展示',
  slides: 'L9B s.8–9',
  coverage: 'full',
  coverageNote: 'The definition, the 1985 date and the Nobel link are on the slides. The biopanning cycle and the pIII versus pVIII valency argument are beyond the slides — the valency point in particular explains why therapeutic antibody selections are done the way they are.',
  summary: {
    en: 'The first display method, described in 1985. Foreign polypeptides are displayed on the surface of phage particles by splicing the gene library into a gene encoding a phage capsid structural protein. The particle then carries the protein outside and the DNA encoding it inside, making it a physically inseparable genotype-phenotype package. George Smith shared the 2018 Nobel Prize in Chemistry for it.',
    cn: '第一种展示方法，1985 年被描述。把基因文库拼接到编码噬菌体衣壳结构蛋白的基因上，外源多肽就展示在噬菌体颗粒表面。于是这个颗粒外面带着蛋白、里面正好包着编码它的 DNA，成为一个物理上不可分割的基因型–表型包。George Smith 因此分享了 2018 年诺贝尔化学奖。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.9', src: 'img/figures/L9B_s09_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '噬菌体颗粒**外面带着蛋白、里面正好包着编码它的 DNA**——一个物理上不可分割的基因型–表型包。\n\n' +
            '而最要紧的一个设计选择是**价数**：**单价展示（pIII）才选得出真正高亲和力的分子**，多价展示会被亲合力效应骗过去。',
  skipIt: 'LySE 那篇 2025 年的 bioRxiv 预印本、以及 pVIII 的 2700 这个拷贝数，不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**「单价 vs 多价」这个取舍必须能讲**，它是这一节最有分量、也最容易被问到的一点。',
  explain: [
    {
      q: '淘选（biopanning）一轮具体是怎么走的？',
      a: '**五步，而且它的形状跟你已经很熟的一样东西一模一样：亲和层析。**\n\n' +
         '**一、上样** —— 把噬菌体文库加到固定着靶标的板子上。\n\n' +
         '**二、洗** —— 把不结合的洗掉。\n\n' +
         '**三、洗脱** —— 把结合的洗下来。\n\n' +
         '**四、扩增** —— 拿洗脱下来的噬菌体去感染 E. coli，扩增。\n\n' +
         '**五、重复 3–5 轮，每一轮把洗涤做得更严格。**\n\n' +
         '**前三步就是第 2-29 节那个「平衡 → 结合 → 洗涤 → 洗脱」的四步，一模一样。**只不过这里被抓住的不是一种蛋白，而是一个文库里最会结合的那些成员。\n\n' +
         '**而第四步是层析没有的，也是这里最关键的一步：扩增。**\n\n' +
         '**因为噬菌体是活的，你选出来的东西可以自我复制。**\n\n' +
         '这意味着每一轮之后，好的结合子在群体里的比例都会上升——**富集是指数式的**。三到五轮之后，一个初始丰度只有千万分之一的克隆可以变成主导。\n\n' +
         '**这是体内展示相对体外展示的一个天然优势**：体外展示的产物不能自我复制，每轮都要重新做一次 PCR 和翻译。\n\n' +
         '**「每轮加严洗涤」也值得留意**：前几轮宽松，先把完全不结合的除掉；后几轮严格，在剩下的里面挑最强的。**这是一个逐步提高选择压力的过程，而不是一开始就用最狠的条件。**',
      takeaway: '前三步就是亲和层析。第四步「扩增」是层析没有的——因为噬菌体是活的，富集才能指数式进行。'
    },
    {
      q: '为什么单价展示才选得出好的结合子？',
      a: '**因为多价展示会用「数量」制造出一种假的高亲和力，而你会被它骗过去。**\n\n' +
         '**先看两个选项：**\n\n' +
         '**pIII** —— 每个噬菌体上只有 **3–5 个拷贝**，可以做到低价甚至**单价**展示。而且能带较大的片段（scFv、Fab）。\n\n' +
         '**pVIII** —— 每个噬菌体上约 **2700 个拷贝**，是**高价多价**展示。主要适合短肽。\n\n' +
         '**问题出在多价展示上，而它叫「亲合力效应（avidity）」：**\n\n' +
         '一个噬菌体表面有 2700 个拷贝的弱结合分子。**它们一起去抓靶标时，虽然每一个都抓不牢，但同时抓住好几个的概率很高**——而**一旦多点结合，整体就非常难被洗掉**。\n\n' +
         '**结果是：这个噬菌体在你的实验里表现得像一个强结合子，而它身上的分子其实很弱。**\n\n' +
         '**于是你选出来的是「靠数量取胜的弱分子」，而不是「真正的强分子」。**\n\n' +
         '**等你把这个分子单独表达出来测亲和力，会发现它远不如淘选时表现的那么好。**\n\n' +
         '**单价展示把这个幻觉去掉了：**每个噬菌体上只有一个分子，**能不能留下来完全取决于这一个分子自己的亲和力**。选择压力被精确地施加在你真正关心的那个量上。\n\n' +
         '**所以治疗性抗体的筛选几乎都用单价 pIII 系统。**\n\n' +
         '**这一条的普遍意义：设计选择实验时，要确认你施加的压力作用在你真正想优化的那个量上**——而不是某个跟它相关、但可以被别的途径满足的替代量。',
      takeaway: '2700 个弱分子一起抓，看起来像强结合子。单价展示去掉这个幻觉，让压力落在单分子亲和力上。'
    },
    {
      q: '为什么会有人去做「裂解性噬菌体」的系统？M13 不是挺好吗？',
      a: '**因为 M13 有一个装货量的天花板，而有人想进化的不再是一个蛋白，是一整条通路。**\n\n' +
         '**M13 是丝状噬菌体，它不裂解宿主。**\n\n' +
         '这是它做展示的最大优点：**被感染的细菌继续活着、继续分泌噬菌体**，所以选择可以一轮一轮温和地做下去（上面那个扩增步骤靠的就是这一点）。\n\n' +
         '**但它的包装容量有限。**它装不下很大的东西，**更装不下一整个基因簇**。\n\n' +
         '**而裂解性噬菌体（T7、λ）容量大得多，能带一整个操纵子。**\n\n' +
         '**代价是它会把宿主裂解掉**——所以整套选择逻辑必须围绕裂解周期重新设计，不能照搬 M13 那一套。\n\n' +
         '**真正的意义在于目标变了：从「进化一个蛋白」变成「进化一整条通路」。**\n\n' +
         '**这个转变值得单独想一想。**这门课到目前为止，优化的对象一直是**单个分子**：一个酶、一个抗体、一个肽。\n\n' +
         '**而一整条通路是一个系统**——它有多个酶、有中间产物、有流量平衡问题。**你没法靠优化其中任何一个酶来优化整条通路**（第 5-13 节会讲为什么）。\n\n' +
         '**所以「能不能对整条通路做定向进化」是一个层级上的跃升，而它需要一个能装下整条通路的载体。**\n\n' +
         '**这条线直接通向第 12 讲的代谢工程。**',
      takeaway: 'M13 不裂解宿主所以适合反复选择，但装不下基因簇。裂解性噬菌体容量大，让「进化整条通路」成为可能。'
    }
  ],
  points: [
    { term: 'The first of its kind', en: 'The first example of a display method — where protein is exposed on the outside. First described in 1985.', cn: '第一种展示方法——蛋白被暴露在外表面。1985 年首次被描述。' },
    { term: 'What phages are', en: 'Bacteriophages are a diverse group of viruses that infect prokaryotic cells.', cn: '噬菌体是一大类感染原核细胞的病毒。' },
    { term: 'How display is achieved', en: 'Foreign polypeptides are displayed on the surface of phage particles, achieved by splicing the gene library into a gene encoding the phage capsid structural protein.', cn: '外源多肽被展示在噬菌体颗粒表面，做法是把基因文库拼接到编码噬菌体衣壳结构蛋白的基因上。' },
    { term: 'The Nobel connection', en: 'The deck links to the Nobel lecture of George Smith, Chemistry 2018.', cn: '课件链接了 George Smith 的诺贝尔奖演讲（2018 年化学奖）。' },
    { term: 'LySE', en: 'A recent development: accelerated evolution of whole gene clusters by an engineered lytic phage system in E. coli, from Shujian Ong et al., bioRxiv 2025.', cn: '一项新进展：用改造的裂解性噬菌体系统在大肠杆菌中加速整个基因簇的进化，Shujian Ong 等，bioRxiv 2025。' }
  ],
  beyondPoints: [
    { term: 'How the link is made, concretely', en: 'You fuse your gene to a phage coat protein gene — pIII or pVIII in M13. When the phage assembles, your fusion protein is displayed on the outside as the phenotype, and the DNA encoding it is packaged inside as the genotype. One phage particle is one genotype-phenotype package, physically inseparable.', cn: '把你的基因融合到噬菌体外壳蛋白基因上——M13 中的 pIII 或 pVIII。噬菌体装配时，你的融合蛋白展示在外面（表型），编码它的 DNA 恰好包在里面（基因型）。一个噬菌体颗粒就是一个基因型–表型包，物理上不可分割。' },
    { term: 'The biopanning cycle', en: 'Add the phage library to a plate carrying immobilised target. Wash away what does not bind. Elute what does. Infect E. coli to amplify. Repeat for three to five rounds, increasing wash stringency each time.', cn: '把噬菌体文库加到固定了靶标的板子上，洗掉不结合的，洗脱结合的，感染大肠杆菌扩增，重复 3–5 轮，每轮提高洗涤严格度。' },
    { term: 'Why the amplification step matters', en: 'Because the phage is alive, what you select can self-amplify, so each round enriches the rare good binders. That is a natural advantage of in vivo display over in vitro display.', cn: '因为噬菌体是活的，筛出来的东西可以自我扩增，所以每一轮都能把稀有的好结合子放大。这是体内展示相对体外展示的一个天然优势。' },
    { term: 'pIII versus pVIII', en: 'pIII is present at 3 to 5 copies per phage, allowing low-valency and even monovalent display, and can carry larger fragments such as scFv or Fab. pVIII is present at about 2,700 copies, giving high-valency multivalent display, and suits mostly short peptides.', cn: 'pIII 每个噬菌体上有 3–5 个拷贝，可以做低价甚至单价展示，能携带较大的片段如 scFv 或 Fab。pVIII 约有 2700 个拷贝，给出高价的多价展示，主要适合短肽。' },
    { term: 'Why monovalent display selects better binders', en: 'High-valency display creates an avidity effect — many weak binding sites together look like tight binding, so you end up selecting clones that are individually weak but win by numbers. Monovalent display removes that illusion and puts the selective pressure on genuine single-molecule affinity, which is why therapeutic antibody selections almost always use monovalent pIII systems.', cn: '高价展示会产生亲合力（avidity）效应——很多个弱结合位点加起来看上去也「结合得很牢」，结果你筛出一堆单个亲和力很弱、靠数量取胜的克隆。单价展示消除了这个假象，让选择压力真正作用在单分子亲和力上，这就是治疗性抗体的展示筛选几乎都用 pIII 单价系统的原因。' },
    { term: 'Why a lytic phage system is a change of direction', en: 'M13 is filamentous and does not lyse its host, so display selection can proceed gently round after round — but its packaging capacity is limited and it cannot display very large things, let alone whole gene clusters. Lytic phages such as T7 or lambda have far greater capacity and can carry an entire operon, at the cost of killing the host, so the whole selection logic has to be redesigned around the lytic cycle. The significance is the move from evolving a single protein to evolving an entire pathway.', cn: 'M13 是丝状噬菌体，不裂解宿主，所以展示筛选可以温和地一轮轮做——但它的包装容量有限，展示不了很大的东西，更别说整个基因簇。T7 或 λ 这类裂解性噬菌体容量大得多，可以携带整个操纵子，代价是会杀死宿主，所以整套筛选逻辑必须围绕裂解周期重新设计。它的意义在于：从「进化单个蛋白」推进到「进化整条通路」。' }
  ],
  terms: [
    { en: 'Biopanning', cn: '淘选', def_en: 'The phage display selection cycle: bind to immobilised target, wash, elute, amplify by infecting E. coli, and repeat with increasing stringency.', def_cn: '噬菌体展示的筛选循环：与固定化靶标结合、洗涤、洗脱、通过感染大肠杆菌扩增，然后以递增的严格度重复。' },
    { en: 'pIII', cn: 'pIII 外壳蛋白', def_en: 'An M13 coat protein present at 3 to 5 copies, allowing monovalent display of larger fragments — the standard choice for high-affinity selection.', def_cn: 'M13 的一种外壳蛋白，每个颗粒 3–5 个拷贝，可以单价展示较大的片段——高亲和力筛选的标准选择。' },
    { en: 'Avidity effect', cn: '亲合力效应', def_en: 'Apparent tight binding produced by many weak sites acting together. It confounds affinity selection, which is why monovalent display is preferred.', def_cn: '许多个弱结合位点共同作用所产生的「结合很牢」的表观现象。它会干扰亲和力筛选，因此更倾向使用单价展示。' },
    { en: 'Filamentous phage', cn: '丝状噬菌体', def_en: 'A phage such as M13 that does not lyse its host, allowing gentle repeated rounds of selection but limiting packaging capacity.', def_cn: '像 M13 这样不裂解宿主的噬菌体，可以温和地反复进行多轮筛选，但包装容量有限。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How does phage display link genotype to phenotype?',
      q_cn: '噬菌体展示是怎么把基因型和表型连接起来的？',
      options: ['Covalent attachment of the displayed protein to the capsid', 'The protein sits outside the particle and its DNA is packaged inside', 'A puromycin arm joining the peptide to its own message', 'The phage secretes protein and DNA together into the medium'],
      answer: 1,
      optionRefs: { 2: '4-16' },
      optionNotes: {
        0: { en: 'The displayed protein is indeed covalently joined to the coat protein, because it is a genetic fusion, but that is a protein-to-protein bond. The link being asked about is protein to DNA, and phage achieves it by packaging the genome inside the particle. Covalent protein-nucleic acid linkage is the mRNA display trick.', cn: '展示出来的蛋白确实和 coat protein 共价相连（它本来就是基因融合），但那是蛋白与蛋白之间的键。这里要问的连接是蛋白与 DNA 之间的，而 phage 靠的是把基因组包在颗粒里，不是靠化学键；蛋白与核酸的共价连接是 mRNA display 的手法。' }
      },
      why_en: 'Fusing your gene to a coat protein gene means the assembled particle carries the protein outside and its own coding DNA inside — one particle is one physically inseparable genotype-phenotype package.',
      why_cn: '把你的基因融合到外壳蛋白基因上，装配好的颗粒就外面带着蛋白、里面装着编码它的 DNA——一个颗粒就是一个物理上不可分割的基因型–表型包。' },
    { type: 'mcq',
      q_en: 'Why is monovalent pIII display preferred for high-affinity selection?',
      q_cn: '为什么高亲和力筛选偏好 pIII 单价展示？',
      options: ['pIII is a more stable display scaffold than pVIII is', 'It removes avidity, so selection acts on true affinity', 'pIII display supports a much larger library size', 'pVIII cannot display an antibody fragment at all'],
      answer: 1,
      why_en: 'With about 2,700 copies of pVIII, many weak sites together mimic tight binding, so you select clones that win by numbers. Three to five copies of pIII, or one, puts the pressure on real affinity — hence its use for therapeutic antibodies.',
      why_cn: 'pVIII 有约 2700 个拷贝，许多弱位点加起来会模拟出「结合很牢」，于是你筛出的是靠数量取胜的克隆。pIII 只有 3–5 个拷贝（或做成 1 个），把压力放在真实的亲和力上——因此用于治疗性抗体。' },
    { type: 'mcq',
      q_en: 'What is the amplification step in biopanning, and why does it help?',
      q_cn: '淘选中的扩增步骤是什么？它为什么有帮助？',
      options: ['PCR amplification of the DNA eluted from the target', 'Infecting E. coli with the eluted phage each round', 'Adding more target protein to the next binding round', 'Repeating the wash step to remove weak binders'],
      answer: 1,
      optionNotes: {
        0: { en: 'PCR is how the in vitro methods regenerate their pool, because SELEX and ribosome display have no other option. Phage does not need it: the eluted particle is still infectious, so one round of infection rebuilds whole particles with the protein already displayed, with no recloning.', cn: 'PCR 是体外方法重建文库池的办法，SELEX 和 ribosome display 除此之外没有别的选择。而 phage 不需要：洗脱下来的颗粒本身仍有感染性，感染一轮就重新长出带着展示蛋白的完整颗粒，不必重新克隆。' }
      },
      why_en: 'Because the phage is alive, the eluted binders can be amplified simply by infecting bacteria. Each round therefore enriches rare good binders — a natural advantage of in vivo display over in vitro methods.',
      why_cn: '因为噬菌体是活的，洗脱下来的结合子只需感染细菌就能扩增。所以每一轮都在富集稀有的好结合子——这是体内展示相对体外方法的天然优势。' },
    { type: 'short',
      q_en: 'Describe the biopanning cycle and explain what one phage particle represents.',
      q_cn: '描述淘选循环，并解释一个噬菌体颗粒代表着什么。',
      accept: ['immobilised', 'wash', 'elute', 'infect', 'rounds', 'package'],
      answer_en: 'One phage particle is a complete, physically inseparable genotype-phenotype package: your fusion protein is displayed on the outside as the phenotype, while the DNA encoding it is packaged inside as the genotype, because you spliced your gene library into a coat protein gene. The cycle then runs like this. Add the phage library to a plate carrying immobilised target. Wash away everything that does not bind. Elute what does. Infect E. coli with the eluted phage to amplify it. And repeat, typically for three to five rounds, increasing the wash stringency each time. The amplification step is what makes this powerful: because the phage is alive, whatever you selected can self-amplify, so every round enriches the rare good binders further. That is a natural advantage of in vivo display over in vitro methods, where recovering and re-amplifying the selected material takes more work.',
      answer_cn: '一个噬菌体颗粒就是一个完整、物理上不可分割的基因型–表型包：你的融合蛋白展示在外面（表型），而编码它的 DNA 包在里面（基因型），因为你把基因文库拼接进了外壳蛋白基因。循环是这样跑的：把噬菌体文库加到固定了靶标的板子上；洗掉所有不结合的；把结合的洗脱下来；用洗脱的噬菌体去感染大肠杆菌以扩增；然后重复，通常 3–5 轮，每轮提高洗涤的严格度。扩增这一步正是它强大的原因：因为噬菌体是活的，你选出来的东西可以自我扩增，所以每一轮都在进一步富集稀有的好结合子。这是体内展示相对体外方法的天然优势，后者要回收并重新扩增所选材料要费更多功夫。'
    }
  ],
  oral: {
    q_en: 'Explain phage display and how you would use it to find a high-affinity binder.',
    q_cn: '解释噬菌体展示，以及你会怎么用它找一个高亲和力的结合子。',
    model_en: 'Phage display was the first display method, described in 1985, and George Smith shared the 2018 Nobel Prize in Chemistry for it. Bacteriophages are viruses that infect prokaryotes, and the trick is to splice your gene library into a gene encoding a phage capsid structural protein. When the phage assembles, your fusion protein is displayed on the outside — that is the phenotype — while the DNA encoding it is packaged inside as the genotype. So one phage particle is a single, physically inseparable genotype-phenotype package, which is the most intuitive solution to the linkage problem of any of these technologies. The selection cycle is called biopanning. You add the phage library to a plate carrying immobilised target, wash away everything that does not bind, elute what does, and then infect E. coli with the eluted phage to amplify it — and you repeat, typically three to five rounds, increasing wash stringency each time. That amplification step is important: because the phage is alive, whatever you selected can self-amplify, so each round enriches the rare good binders. For high affinity specifically, the key decision is which coat protein to fuse to. In M13 there are two options. pVIII is present at about two thousand seven hundred copies per particle, giving high-valency multivalent display, and suits short peptides. pIII is present at only three to five copies, allowing low-valency or even monovalent display, and can carry larger fragments such as scFv or Fab. Monovalent pIII is what you want for a high-affinity selection, and the reason is the avidity effect: with thousands of copies displayed, many individually weak binding sites acting together look like tight binding, so you end up selecting clones that win by numbers rather than by quality. Monovalent display eliminates that illusion and puts the selective pressure squarely on single-molecule affinity, which is why therapeutic antibody selections almost always use monovalent pIII systems.',
    checklist: ['First display method, described 1985; George Smith, Nobel 2018', 'Splice the gene library into a phage capsid protein gene', 'Protein displayed outside, its DNA packaged inside', 'One particle = one inseparable genotype-phenotype package', 'Biopanning: bind immobilised target, wash, elute, infect to amplify, repeat', 'Three to five rounds, increasing wash stringency', 'Amplification works because the phage is alive — in vivo advantage', 'pVIII: ~2,700 copies, multivalent, short peptides', 'pIII: 3-5 copies, monovalent possible, larger fragments (scFv, Fab)', 'Monovalent pIII for high affinity — removes the avidity effect', 'Avidity: many weak sites mimic tight binding', 'Hence therapeutic antibody selection uses monovalent pIII']
  }
},

{
  id: '4-14',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.14',
  enTitle: 'SELEX and aptamers',
  cnTitle: 'SELEX 与适配体',
  slides: 'L9B s.10–11',
  coverage: 'full',
  coverageNote: 'The definition, the pioneers and the aptamer advantages are on the slides, as is the striking statement that no linkage is required. Why no linkage is required — genotype and phenotype are the same molecule — is the key contrast that explains why every protein display technology exists.',
  summary: {
    en: 'SELEX is Systematic Evolution of Ligands by EXponential enrichment, the in vitro evolution of RNA, pioneered by Larry Gold, Jack Szostak and Gerald Joyce in the 1990s. The slide calls it the inspiration for the protein display selection techniques, and notes that no linkage is required here because RNA can be sequenced. Aptamers are short synthetic single-stranded oligonucleotides that bind small molecules, metal ions and proteins.',
    cn: 'SELEX 是 Systematic Evolution of Ligands by EXponential enrichment，即 RNA 的体外进化，由 Larry Gold、Jack Szostak 和 Gerald Joyce 在 1990 年代开创。幻灯片称它是蛋白展示筛选技术的灵感来源，并指出这里不需要连接，因为 RNA 本身就可以测序。适配体是能结合小分子、金属离子和蛋白的短的合成单链寡核苷酸。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.10', src: 'img/figures/L9B_s10_1.webp' },
    { slide: 'L9B s.10', src: 'img/figures/L9B_s10_2.webp' },
    { slide: 'L9B s.11', src: 'img/figures/L9B_s11_1.webp' },
    { slide: 'L9B s.11', src: 'img/figures/L9B_s11_2.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: 'SELEX **根本不需要连接**——因为对一个 RNA 适配体来说，**基因型和表型是同一个分子**。\n\n' +
            '而蛋白展示技术全部存在的理由，就是**蛋白没有这个性质**：它们是在给蛋白人为补上 RNA 本来就有的东西。',
  skipIt: 'Larry Gold / Szostak / Joyce 这三个名字、以及 GTP 适配体那个例子，不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**「基因型和表型是同一个分子」这一条要记**，它一句话解释了 SELEX 为什么简单、为什么先被发明出来、以及后面那些技术为什么必须存在。',
  explain: [
    {
      q: '为什么 SELEX 不需要基因型–表型连接？',
      trace: {
        what: '**SELEX**（Systematic Evolution of Ligands by EXponential enrichment）是 RNA 的体外进化技术，由 Larry Gold、Jack Szostak 和 Gerald Joyce 在 1990 年代开创；它筛出来的分子叫**适配体（aptamer）**——能结合小分子、金属离子或蛋白的短的合成单链寡核苷酸。',
        from: '它是蛋白展示技术的灵感来源，而且比它们更早出现，因为它的循环干净得多：结合 → 洗脱 → RT-PCR 扩增 → 体外转录 → 下一轮，全程不需要连接、不需要展示、不需要细胞。',
        to: '因为对 RNA 适配体来说，**基因型和表型是同一个分子**——它折叠成结构去结合靶标是表型，它本身就是能被扩增测序的核酸是基因型。第 4-15、4-16 节的核糖体展示和 mRNA 展示，本质上都是在给蛋白人为补上这一点。',
        family: '适配体常被拿来跟**抗体**比较——免疫原性更低、成本更低、稳定性更高、周期更短，但抗体有几十年的监管历史和产业链，所以适配体真正站住脚的是抗体做不好的场合（小分子、金属离子靶标，或者需要极端条件）。'
      },
      a: '**因为对一个 RNA 适配体来说，那两样东西是同一个分子。**\n\n' +
         '把上一节（第 4-11 节）那个困境拿过来对照：\n\n' +
         '**蛋白的情况**：蛋白有功能（表型），但它**不能被扩增、也不方便测序**。所以你必须把它绑到一段核酸上。\n\n' +
         '**RNA 适配体的情况**：\n\n' +
         '**它折叠成一个三维结构去结合靶标——这就是表型。**\n\n' +
         '**它本身就是一段核酸，可以逆转录、可以 PCR 扩增、可以测序——这就是基因型。**\n\n' +
         '**两者是同一条分子。所以「把它们绑在一起」这个问题根本不存在。**\n\n' +
         '**于是 SELEX 的循环干净得不像话：**\n\n' +
         '**结合 → 洗脱 → RT-PCR 扩增 → 体外转录 → 下一轮。**\n\n' +
         '**没有连接、没有展示、没有核糖体、没有嘌呤霉素、不需要细胞。**\n\n' +
         '**这就是为什么它在 1990 年代先被发明出来，而蛋白展示技术是后面才跟上的。**\n\n' +
         '幻灯片说它是「蛋白展示筛选技术的灵感来源」——**准确地说，后面那些技术全都是在想办法给蛋白补上 RNA 天生就有的这个便利。**\n\n' +
         '**复习时可以把这一节当成一把尺子：每看到一种展示技术，问一句「它是怎么模拟 RNA 那种自带连接的？」**',
      takeaway: '适配体折叠成结构是表型，本身是核酸是基因型——同一条分子。后面所有展示技术都在给蛋白补上这一点。'
    },
    {
      q: '适配体既然这么方便，为什么没有取代抗体？',
      a: '**先看它的优势，那些是实打实的：**\n\n' +
         '**免疫原性低** —— 核酸不像外源蛋白那样容易引发免疫反应（对比第 1-2-5 节的 HAMA 问题）。\n\n' +
         '**成本低** —— 化学合成，不需要养细胞、不需要免疫动物。\n\n' +
         '**稳定性高** —— 可以反复变性复性，常温运输，不像抗体那样娇气。\n\n' +
         '**开发周期短** —— SELEX 几轮就能出结果，而做一个单抗要几个月。\n\n' +
         '**那为什么抗体仍然是主流？幻灯片没有直接回答，所以下面是判断，不是老师的话：**\n\n' +
         '**抗体有几十年的监管历史和成熟的产业链**（回到第 2-20 节：CHO 被选为工业标准的理由之一就是监管熟悉度）。**这一条在药物领域的分量非常大。**\n\n' +
         '**而且抗体有免疫系统几亿年打磨出来的骨架**，可靠性经过了极大规模的验证。\n\n' +
         '**所以这又是一次「技术最优 ≠ 产业最优」**，跟第 2-20 节 HEK293 vs CHO 是同一类判断。\n\n' +
         '**适配体真正站住脚的地方，是抗体做不好的场合：**靶标是小分子或金属离子（免疫系统对这类东西反应很差）、需要极端条件下工作、或者需要极低成本大批量使用（比如检测试剂）。',
      takeaway: '优势是低免疫原性、低成本、高稳定、周期短。但抗体有几十年监管历史和产业链——又一次技术最优 ≠ 产业最优。'
    }
  ],
  points: [
    { term: 'What SELEX stands for', en: 'Systematic Evolution of Ligands by EXponential enrichment.', cn: 'Systematic Evolution of Ligands by EXponential enrichment（指数富集配体系统进化）。' },
    { term: 'Its role', en: 'The inspiration for the protein display selection techniques.', cn: '蛋白展示筛选技术的灵感来源。' },
    { term: 'The striking fact', en: 'No linkage required here — RNA can be sequenced.', cn: '这里不需要连接——RNA 本身就可以测序。' },
    { term: 'Who developed it', en: 'In vitro evolution of RNA, pioneered by Larry Gold, Jack Szostak and Gerald Joyce in the 1990s.', cn: 'RNA 的体外进化，由 Larry Gold、Jack Szostak 和 Gerald Joyce 在 1990 年代开创。' },
    { term: 'What aptamers are', en: 'Short synthetic single-stranded oligonucleotides that can bind to a range of targets — small molecules, metal ions and proteins.', cn: '短的合成单链寡核苷酸，能结合多种靶标——小分子、金属离子和蛋白。' },
    { term: 'The example', en: 'A high-affinity RNA aptamer to GTP, from Carothers et al., RNA 2006.', cn: '一个对 GTP 的高亲和力 RNA 适配体，来自 Carothers 等，RNA 2006。' },
    { term: 'Advantages over antibodies', en: 'Low immunogenicity, lower cost, higher stability, and shorter generation time.', cn: '免疫原性低、成本更低、稳定性更高、生成周期更短。' }
  ],
  beyondPoints: [
    { term: 'Why no linkage is needed', en: 'Because for an RNA aptamer the genotype and the phenotype are the same molecule. A stretch of RNA folds into a three-dimensional structure that binds the target — that is the phenotype — and it is itself a nucleic acid that can be reverse-transcribed, amplified and sequenced — that is the genotype. The two are one, so no linkage of any kind is necessary.', cn: '因为对 RNA 适配体来说，基因型和表型是同一个分子。一段 RNA 自己折叠成三维结构去结合靶标（这是表型），而它本身就是可以被逆转录、扩增、测序的核酸（这是基因型）。两者合一，所以不需要任何连接。' },
    { term: 'Why SELEX is simpler and came first', en: 'The cycle is extremely clean: bind, elute, RT-PCR amplify, transcribe in vitro, next round. That is why it was developed before the protein display technologies.', cn: '循环极其干净：结合 → 洗脱 → RT-PCR 扩增 → 体外转录 → 下一轮。这就是它比蛋白展示技术更早被开发出来的原因。' },
    { term: 'The contrast that explains everything else', en: 'The entire reason protein display technologies exist is that proteins do not have this property. A protein cannot amplify itself, so it must be artificially tied to a piece of nucleic acid. SELEX is the inspiration; the display technologies are the workaround that gives proteins what RNA already had.', cn: '蛋白展示技术存在的全部理由，就是蛋白没有这个性质。蛋白不能自我扩增，所以必须人为地把它和一段核酸绑在一起。SELEX 是灵感来源，展示技术则是「为蛋白补上这一课」的变通办法。' }
  ],
  terms: [
    { en: 'SELEX', cn: 'SELEX', def_en: 'Systematic Evolution of Ligands by EXponential enrichment — iterative in vitro selection and amplification of nucleic acid binders.', def_cn: 'Systematic Evolution of Ligands by EXponential enrichment——对核酸结合子进行迭代式体外筛选与扩增。' },
    { en: 'Aptamer', cn: '适配体', def_en: 'A short synthetic single-stranded oligonucleotide that folds into a structure binding a target — small molecule, metal ion or protein.', def_cn: '一段短的合成单链寡核苷酸，折叠成能结合靶标（小分子、金属离子或蛋白）的结构。' },
    { en: 'In vitro transcription', cn: '体外转录', def_en: 'Generating RNA from a DNA template in a tube, the step that regenerates the RNA pool for the next SELEX round.', def_cn: '在试管中由 DNA 模板生成 RNA，这是为下一轮 SELEX 重新产生 RNA 池的步骤。' },
    { en: 'Immunogenicity', cn: '免疫原性', def_en: 'The tendency to provoke an immune response. Aptamers have low immunogenicity, one of their advantages over antibodies.', def_cn: '引发免疫反应的倾向。适配体免疫原性低，这是它们相对抗体的优势之一。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does SELEX need no genotype-phenotype linkage?',
      q_cn: '为什么 SELEX 不需要基因型–表型连接？',
      options: ['Because RNA does not fold into a defined structure', 'Because genotype and phenotype are the same molecule', 'Because the binder is an antibody rather than a nucleic acid', 'Because immobilising the target makes tracking unnecessary'],
      answer: 1,
      optionNotes: {
        0: { en: 'This is backwards: folding is the entire phenotype. The RNA must fold into a shape that binds the target, and what makes linkage unnecessary is that this same folded molecule is also the sequence you reverse-transcribe, amplify and read.', cn: '方向反了：折叠正是 aptamer 的全部表型所在。RNA 必须折成能结合靶标的三维结构；不需要连接的原因是，这个折叠起来的分子同时就是你要逆转录、扩增和测序的那段序列。' }
      },
      why_en: 'The RNA folds into a structure that binds the target — the phenotype — and is itself a nucleic acid that can be reverse-transcribed, amplified and sequenced — the genotype. No linkage is needed because there is nothing to link.',
      why_cn: 'RNA 折叠成结合靶标的结构（表型），而它本身就是可以被逆转录、扩增、测序的核酸（基因型）。不需要连接，因为根本没有两样东西需要被连起来。' },
    { type: 'mcq',
      q_en: 'What are the stated advantages of aptamers over antibodies?',
      q_cn: '适配体相对抗体有哪些被列出的优势？',
      options: ['Higher affinity and finer specificity than antibodies', 'Low immunogenicity, low cost, high stability, fast generation', 'They can be used inside living cells, which antibodies can never do', 'They can catalyse chemical reactions on their target'],
      answer: 1,
      optionNotes: {
        3: { en: 'Catalysis belongs to ribozymes and DNAzymes, which come out of the same in vitro selection framework but are selected for turnover. An aptamer is selected on binding alone, which is what the word denotes.', cn: '催化是 ribozyme 和 DNAzyme 的本事，它们出自同一套体外选择框架，但筛的是催化转化。而 aptamer 是只按结合筛出来的，这正是这个词本身的含义。' }
      },
      why_en: 'Those four are what the slide lists. Notice that affinity is not among them — the advantages are practical and pharmacological rather than about binding strength.',
      why_cn: '这四条是幻灯片列出的。注意亲和力不在其中——这些优势是实用性和药理性的，而不是关于结合强度的。' },
    { type: 'mcq',
      q_en: 'What is the SELEX cycle?',
      q_cn: 'SELEX 的循环是什么？',
      options: ['Bind, wash, elute, infect fresh bacteria to amplify the pool, repeat', 'Bind, elute, RT-PCR amplify, transcribe in vitro, next round', 'Translate, display, sort, sequence', 'Emulsify, react, sort droplets, recover'],
      answer: 1,
      optionRefs: { 0: '4-13', 3: '4-17' },
      optionNotes: {
        2: { en: 'There is no translation step anywhere in SELEX and no protein is ever made, which is exactly why no linkage is needed. That cycle describes a protein display method, where a ribosome or a linker has to tie the product back to its own message.', cn: 'SELEX 里从头到尾没有翻译这一步，根本不产生蛋白，这正是它不需要任何连接的原因。那条循环描述的是蛋白展示方法：在那里必须靠 ribosome 或者一段 linker 把产物拴回它自己的 mRNA 上。' }
      },
      why_en: 'It is unusually clean precisely because no linkage step is needed. Reverse transcription and in vitro transcription regenerate the RNA pool directly from the selected molecules.',
      why_cn: '它异常干净，正是因为不需要任何连接步骤。逆转录和体外转录直接从被选出的分子重新产生 RNA 池。' },
    { type: 'short',
      q_en: 'Why is SELEX described as the inspiration for protein display techniques?',
      q_cn: '为什么 SELEX 被称为蛋白展示技术的灵感来源？',
      accept: ['same molecule', 'no linkage', 'cannot amplify', 'proteins', 'workaround'],
      answer_en: 'Because it demonstrated that iterative in vitro selection and amplification works, while simultaneously revealing exactly what makes proteins harder. For an RNA aptamer the genotype and the phenotype are the same molecule: the RNA folds into a three-dimensional structure that binds the target, which is the phenotype, and it is itself a nucleic acid that can be reverse-transcribed, amplified and sequenced, which is the genotype. So the cycle is extremely clean — bind, elute, RT-PCR, transcribe, next round — and no linkage of any kind is required. Proteins simply do not have that property: a protein cannot amplify itself and cannot be sequenced by amplification, so finding a good one is useless unless it has been artificially tied to a piece of nucleic acid. Every protein display technology in this lecture is therefore a workaround, engineering into proteins the property that RNA already possessed naturally.',
      answer_cn: '因为它证明了「迭代式的体外筛选与扩增」这条路可行，同时也恰好揭示了蛋白为什么更难。对 RNA 适配体来说，基因型和表型是同一个分子：RNA 折叠成三维结构去结合靶标（表型），而它本身就是可以被逆转录、扩增、测序的核酸（基因型）。所以循环极其干净——结合、洗脱、RT-PCR、转录、下一轮——完全不需要任何连接。蛋白没有这个性质：蛋白不能自我扩增，也不能通过扩增来测序，所以找到一个好的、如果没有人为地把它和一段核酸绑在一起，就毫无用处。因此本讲中所有的蛋白展示技术都是变通办法，是把 RNA 本来就天然具有的性质工程化地赋予蛋白。'
    }
  ],
  oral: {
    q_en: 'What is SELEX, and why does it not need a genotype-phenotype link?',
    q_cn: '什么是 SELEX？它为什么不需要基因型–表型连接？',
    model_en: 'SELEX stands for Systematic Evolution of Ligands by EXponential enrichment, and it is the in vitro evolution of RNA, pioneered by Larry Gold, Jack Szostak and Gerald Joyce in the 1990s. What it produces are aptamers — short synthetic single-stranded oligonucleotides that fold up and bind a range of targets, from small molecules and metal ions to proteins. The example on the slide is a high-affinity RNA aptamer against GTP. Their advantages over antibodies are practical rather than about binding strength: low immunogenicity, lower cost, higher stability and shorter generation time. Now, the striking statement on the slide is that no linkage is required here, because RNA can be sequenced — and understanding why is the key to understanding this whole half of the lecture. For an RNA aptamer, the genotype and the phenotype are the same molecule. The RNA folds into a three-dimensional structure that binds the target, and that structure is the phenotype; but the very same molecule is a nucleic acid that can be reverse-transcribed, amplified and sequenced, and that is the genotype. The two are one, so there is nothing to link. That makes the SELEX cycle exceptionally clean: bind, elute, RT-PCR to amplify, transcribe in vitro, and go round again. It is also why SELEX was developed considerably before the protein display technologies. And the contrast tells you why all of those technologies exist. Proteins have no such property — a protein cannot amplify itself, so identifying a superb binder among ten to the thirteen molecules is worthless unless something ties it to a piece of nucleic acid you can copy and read. SELEX is the inspiration; phage display, ribosome display and mRNA display are the engineering workarounds that give proteins what RNA had for free.',
    checklist: ['Systematic Evolution of Ligands by EXponential enrichment', 'In vitro evolution of RNA; Gold, Szostak and Joyce, 1990s', 'Aptamers: short synthetic ssDNA/RNA binding small molecules, ions, proteins', 'Example: high-affinity RNA aptamer to GTP', 'Advantages over antibodies: low immunogenicity, cost, stability, speed', 'No linkage required — RNA can be sequenced', 'Because genotype and phenotype are the SAME molecule', 'RNA folds to bind (phenotype) and can be RT-PCR amplified (genotype)', 'Clean cycle: bind, elute, RT-PCR, in vitro transcription, repeat', 'Proteins lack this property — cannot self-amplify', 'So display technologies are the workaround for proteins']
  }
},

{
  id: '4-15',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.15',
  enTitle: 'Ribosome display — non-covalent linkage',
  cnTitle: '核糖体展示——非共价连接',
  slides: 'L9B s.12–14',
  coverage: 'full',
  coverageNote: 'The deck poses how the ribosome could secure the linkage as its own quiz question and answers it on the slide, including the spacer warning. That all three of its downsides follow from the linkage being non-covalent is the beyond-the-slides unification.',
  summary: {
    en: 'The linkage is secured simply by omitting the stop codon, so the ribosome stalls at the end of the mRNA and holds a ternary complex of mRNA, ribosome and nascent peptide. High magnesium and low temperature stabilise it further. Because the ribosomal exit channel is long, an unstructured C-terminal spacer of about 100 amino acids is needed to push the protein clear of it.',
    cn: '连接的建立方式非常简单：省掉终止密码子，核糖体走到 mRNA 末端就停住不放手，形成 mRNA、核糖体和新生肽的三元复合物。高镁离子浓度和低温进一步稳定它。由于核糖体的出口通道很长，还需要一段约 100 个氨基酸的无结构 C 端间隔肽，把蛋白推出通道之外。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.12', src: 'img/figures/L9B_s12_1.webp' },
    { slide: 'L9B s.13', src: 'img/figures/L9B_s13_1.webp' },
    { slide: 'L9B s.14', src: 'img/figures/L9B_s14_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '连接的建立方式简单得惊人：**把终止密码子去掉**，核糖体走到 mRNA 末端就停住不放手。\n\n' +
            '而它的**三个缺点全部来自「非共价」**：核糖体太大、必须低温高盐、不能纯化。这正是 mRNA 展示要修的东西。',
  skipIt: 'Takahashi 2002 那个 DHFR 例子的细节不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**「省掉终止密码子」和「100 个氨基酸的间隔肽」这两条要能讲原因**，它们是这个技术最巧和最实际的两点。',
  explain: [
    {
      q: '为什么「省掉终止密码子」就能建立连接？',
      a: '**因为终止密码子是唯一会让核糖体放手的信号。**\n\n' +
         '正常情况下：核糖体读到 TAA / TAG / TGA → **释放因子（release factor）结合上来** → 把肽链切下来 → 核糖体和 mRNA 解离。\n\n' +
         '**没有终止密码子会怎样？没有释放因子来结合。**\n\n' +
         '于是核糖体走到 mRNA 的尽头，**就停在那里，什么也不做，也不放手**。\n\n' +
         '**结果是一个三元复合物：mRNA（基因型）+ 核糖体 + 新生肽链（表型），三者物理连在一起。**\n\n' +
         '**这个设计的漂亮之处在于它是「减法」——你不需要加任何东西，只需要不放某个东西。**\n\n' +
         '**顺带把第 3-10 节串起来：**那里讲的是核糖体读到 TAG 时，**RF1 想终止、正交 tRNA 想装 ncAA**，两者竞争。**这里是同一个机制的另一种用法：干脆不给释放因子任何结合的机会。**\n\n' +
         '**再顺带一句：第 3-7 节那个「最小模板」里，终止密码子是必需元件，而那个可选的 TAG 是给琥珀抑制留的。**到这里你会发现，**终止密码子在这门课里被从三个不同角度用过：正常终止、被征用去装 ncAA、以及被故意省略来建立连接。**',
      takeaway: '终止密码子是唯一让核糖体放手的信号。不给它，核糖体就停在末端不撒手——三元复合物就成了。'
    },
    {
      q: '为什么必须加一段 100 个氨基酸的间隔肽？',
      a: '**因为核糖体的出口通道有 30–40 个氨基酸那么长，而你的蛋白还卡在里面。**\n\n' +
         '想象一下现场：核糖体停在 mRNA 末端，新合成的肽链**正从出口通道里往外伸**。\n\n' +
         '**问题是通道本身就有 30–40 个残基长。**如果你的目标蛋白就位于构建体的最末端，那么**它整个还埋在通道里**——\n\n' +
         '**它折叠不起来**（通道太窄，只容得下伸展的链）；\n\n' +
         '**更不可能去结合任何靶标**（它根本没露在外面）。\n\n' +
         '**所以你要在目标蛋白后面接一段「垫脚」的序列，把它顶出通道。**\n\n' +
         '**这段间隔肽有两个要求：**\n\n' +
         '**够长** —— 约 100 个氨基酸，远超通道长度，留出余量。\n\n' +
         '**无结构（unstructured）** —— 这一条同样关键。**如果间隔肽自己会折叠，它可能折在通道口、或者干扰目标蛋白的折叠。**要的就是一段软塌塌的、什么也不干的链。\n\n' +
         '**这是一个很典型的「你必须知道机器的物理尺寸才能设计构建体」的例子。**\n\n' +
         '光懂原理（省掉终止密码子）是做不出来的——**你还得知道出口通道有多长。**这类实操细节在幻灯片上只有一行字，但漏掉它实验就完全不工作。',
      takeaway: '出口通道有 30–40 个残基长，蛋白卡在里面折不了也结合不了。间隔肽要够长（100）而且必须无结构。'
    },
    {
      q: '三个缺点为什么说「全部来自非共价」？',
      a: '**因为非共价的意思就是「随时可能散」，而三个缺点是这句话的三种表现。**\n\n' +
         '**缺点一：核糖体太大（2.7 MDa）。**\n\n' +
         '既然靠核糖体来维持连接，**它就必须一直挂在你的蛋白旁边**。这个 20–30 nm 的庞然大物可能挡住结合界面，也可能自己非特异地粘到靶标上，产生假阳性。\n\n' +
         '**缺点二：必须低温、高盐（高镁）。**\n\n' +
         '**镁是把核糖体大小亚基拉在一起的东西**（第 3-4 节讲过：核糖体是几千个负电挤在一起的 RNA 机器）。低温则单纯是减慢一切解离过程。\n\n' +
         '**代价是你的选择条件被严重限制住了**：不能在生理温度做、不能用特殊 pH、不能加去污剂。**而「可以在非生理条件下筛选」本来是体外方法最大的卖点之一**（第 4-10 节），在这里被抵消掉了一大半。\n\n' +
         '**缺点三：不能纯化。**\n\n' +
         '任何一步操作——过柱子、换缓冲液、离心——**都可能让复合物散开**。所以你只能就地使用它。\n\n' +
         '**三条合起来看，就明白 mRNA 展示在修什么了：把连接从「靠条件维持」改成「靠化学键固定」。**\n\n' +
         '**顺带一个很漂亮的细节：洗脱用 EDTA。**既然复合物靠高镁维持，那么**加 EDTA 把镁螯合走，复合物自然散开，mRNA 就释放出来了**——不需要任何变性条件，核酸完好无损。\n\n' +
         '**而 EDTA 螯合金属这件事你在第 2-30 节见过：那里它是毁掉镍柱的元凶。同一个化学，完全相反的用途。**',
      takeaway: '非共价 = 随时可能散。所以核糖体得一直挂着、条件不能变、不能纯化。EDTA 螯走镁则是优雅的洗脱手段。'
    }
  ],
  points: [
    { term: 'How the linkage is secured', en: 'You omit the stop codon, and the ribosome stalls at the end of the mRNA template.', cn: '省掉终止密码子，核糖体就在 mRNA 模板的末端停住。' },
    { term: 'Stabilising the complex', en: 'Further stabilisation of the ternary complex by high magnesium ion concentration and low temperature.', cn: '通过高镁离子浓度和低温进一步稳定三元复合物。' },
    { term: 'The spacer warning', en: 'The ribosomal exit channel is quite long, so you need an unstructured C-terminal spacer peptide of about 100 amino acids to bridge it.', cn: '核糖体的出口通道相当长，所以需要一段约 100 个氨基酸的无结构 C 端间隔肽来跨越它。' },
    { term: 'The worked example', en: 'Takahashi et al., FEBS Letters 2002. A gene library expressed in a wheat germ cell-free system, with dihydrofolate reductase selected by binding to its substrate analogue methotrexate immobilised on agarose beads.', cn: 'Takahashi 等，FEBS Letters 2002。用麦胚无细胞体系表达基因文库，通过与固定在琼脂糖珠上的底物类似物甲氨蝶呤结合，筛选出二氢叶酸还原酶。' },
    { term: 'How the mRNA is recovered', en: 'After selection, mRNA is released from the ternary complex by removing magnesium through EDTA chelation, and new cDNA is prepared by RT-PCR. After three rounds the DHFR genes were amplified, expressed and tested for improved activity.', cn: '筛选后，用 EDTA 螯合去除镁离子，把 mRNA 从三元复合物中释放出来，再用 RT-PCR 制备新的 cDNA。三轮之后，DHFR 基因被扩增、表达并检测活性是否提高。' },
    { term: 'The stated downsides', en: 'The ribosome is bulky; selections must be done at low temperature and high salt concentrations; and the complex cannot really be purified.', cn: '核糖体体积庞大；筛选必须在低温和高盐浓度下进行；而且这个复合物基本无法纯化。' }
  ],
  beyondPoints: [
    { term: 'Why omitting the stop codon works', en: 'No stop codon means no release factor binds, so when the ribosome reaches the end of the mRNA it simply stops and does not let go. The result is a stable ternary complex holding the mRNA as genotype, the ribosome, and the nascent polypeptide as phenotype, all physically connected.', cn: '没有终止密码子就没有释放因子结合，所以核糖体走到 mRNA 末端时就停住不放手。结果是一个稳定的三元复合物，把作为基因型的 mRNA、核糖体、以及作为表型的新生多肽物理地连在一起。' },
    { term: 'Why the two stabilising conditions', en: 'Magnesium is what holds the ribosomal subunits together and stabilises tRNA positioning — the same chemistry as the phosphate-chelates-magnesium problem in cell-free synthesis, running in the opposite direction. Low temperature simply slows every dissociation process.', cn: '镁离子是维持核糖体大小亚基结合、稳定 tRNA 定位的关键——与无细胞合成中「磷酸螯合镁」是同一套化学，只是方向相反。低温则单纯是减慢一切解离过程。' },
    { term: 'Why the 100-amino-acid spacer', en: 'The ribosomal exit channel is about 30 to 40 amino acids long. If your target protein sits right at the end of the construct it is still buried inside the channel, unable to fold and certainly unable to bind a target. An unstructured spacer pushes it out beyond the channel so it can fold properly outside the ribosome.', cn: '核糖体的出口通道长约 30–40 个氨基酸。如果你的目标蛋白紧贴着构建体的末端，它还埋在通道里出不来，根本没法折叠、更没法结合靶标。一段无结构的间隔肽把它推出通道之外，蛋白才能在核糖体外面正常折叠。' },
    { term: 'The elegance of EDTA elution', en: 'Since the ternary complex is held together by high magnesium, adding EDTA to chelate the magnesium away makes it fall apart and releases the mRNA. No denaturing conditions are needed and the nucleic acid is undamaged. The same EDTA chelation appeared earlier in the course as the thing that destroys a nickel column — identical chemistry, opposite purpose.', cn: '既然三元复合物是靠高镁离子稳定的，那么加 EDTA 把镁螯合走，复合物就散架，mRNA 被释放出来。不需要任何变性条件，核酸也不会被破坏。同样的 EDTA 螯合在本课程前面出现过，是「镍柱杀手」——同一个化学，相反的用途。' },
    { term: 'All three downsides follow from non-covalence', en: 'The ribosome is 2.7 megadaltons and hangs beside your protein, potentially blocking the binding interface or sticking non-specifically to the target. You must work at low temperature and high salt because a non-covalent complex falls apart if conditions change, which severely restricts the selection conditions available — no physiological temperature, no unusual pH, no detergents. And you cannot purify it, because any manipulation risks dissociating it. All three are the price of the linkage being non-covalent, which is exactly what mRNA display fixes.', cn: '核糖体有 2.7 兆道尔顿，就挂在你的蛋白旁边，可能挡住结合界面，也可能自己非特异地黏在靶标上。必须在低温高盐下操作，因为非共价复合物条件一变就散，这严重限制了可用的筛选条件——不能用生理温度、不能用特殊 pH、不能加去污剂。而且无法纯化，因为任何操作都可能让它解体。这三条都是「非共价」的代价，而这正是 mRNA 展示要解决的问题。' }
  ],
  terms: [
    { en: 'Ternary complex', cn: '三元复合物', def_en: 'mRNA, ribosome and nascent polypeptide held together by a stalled ribosome, the non-covalent linkage of ribosome display.', def_cn: '由停滞的核糖体维系在一起的 mRNA、核糖体和新生多肽，这就是核糖体展示的非共价连接。' },
    { en: 'Ribosomal exit channel', cn: '核糖体出口通道', def_en: 'The tunnel through which the nascent chain leaves the ribosome, about 30 to 40 residues long — which is why a ~100-residue spacer is needed.', def_cn: '新生肽链离开核糖体所经过的通道，长约 30–40 个残基——这正是需要约 100 个残基间隔肽的原因。' },
    { en: 'C-terminal spacer', cn: 'C 端间隔肽', def_en: 'An unstructured peptide of about 100 amino acids appended after the target, pushing it clear of the exit channel so it can fold and bind.', def_cn: '接在目标蛋白之后的约 100 个氨基酸的无结构肽段，把目标推出出口通道以便折叠和结合。' },
    { en: 'EDTA chelation', cn: 'EDTA 螯合', def_en: 'Removing magnesium with EDTA, which collapses the ternary complex and releases the mRNA gently, without denaturing conditions.', def_cn: '用 EDTA 移除镁离子，使三元复合物解体并温和释放 mRNA，无需任何变性条件。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'How is the ternary complex in ribosome display held together?',
      q_cn: '核糖体展示中的三元复合物是怎么维系在一起的？',
      options: ['A covalent bond between the nascent peptide and the ribosome', 'The stop codon is omitted, so the ribosome stalls and holds on', 'A puromycin linker joining the peptide to the mRNA', 'An antibody bridging the peptide and its own mRNA'],
      answer: 1,
      optionRefs: { 2: '4-16' },
      optionNotes: {
        0: { en: 'Nothing is covalently bonded in ribosome display, and that is the defining contrast with mRNA display. The complex is held by stalling plus high magnesium and low temperature, which is why it is fragile and why EDTA can take it apart.', cn: 'ribosome display 里没有任何共价键，这正是它与 mRNA display 的分界线。复合物靠的是核糖体停在 mRNA 末端，再加上高 magnesium 和低温维持，所以它很脆弱，也正因如此 EDTA 一螯合就能把它拆开。' }
      },
      why_en: 'With no stop codon there is nothing for a release factor to recognise, so the ribosome reaches the end of the message and simply does not let go, holding mRNA and nascent peptide together.',
      why_cn: '没有终止密码子，释放因子就没有可识别的东西，所以核糖体走到信息末端就干脆不松手，把 mRNA 和新生肽维系在一起。' },
    { type: 'mcq',
      q_en: 'Why is an unstructured spacer of about 100 amino acids needed?',
      q_cn: '为什么需要一段约 100 个氨基酸的无结构间隔肽？',
      options: ['It increases the stability of the mRNA during the reaction, so more full-length product accumulates', 'Without it the protein stays buried in the 30-40 residue exit tunnel', 'It provides a protease site for releasing the folded protein', 'It chelates the magnesium that stabilises the complex'],
      answer: 1,
      why_en: 'A protein sitting at the very end of the construct never emerges from the tunnel. The spacer pushes it out into solution where it can fold properly and present a binding surface.',
      why_cn: '紧贴构建体末端的蛋白永远出不了这条隧道。间隔肽把它推到溶液中，让它能正常折叠并展示出结合表面。' },
    { type: 'mcq',
      q_en: 'How is the mRNA recovered after ribosome display selection?',
      q_cn: '核糖体展示筛选之后，mRNA 是怎么回收的？',
      options: ['By heating the complex to 95 degrees to melt it apart', 'By chelating the magnesium away from the complex with EDTA', 'By digesting the complex with RNase to release it', 'By adding a stop codon so a release factor binds and the ribosome lets go'],
      answer: 1,
      optionNotes: {
        2: { en: 'RNase would destroy the very molecule you are trying to recover: the mRNA is the genotype, the only record of which variant bound. The complex is held together by magnesium, so you take the magnesium away and leave the RNA intact for RT-PCR.', cn: 'RNase 会把你正要回收的东西毁掉：mRNA 就是基因型，是「哪个变体结合上了」的唯一记录。复合物靠 magnesium 维持，所以做法是把 magnesium 拿走，让 RNA 完好无损地进入 RT-PCR。' }
      },
      why_en: 'The complex is held together by high magnesium, so removing the magnesium releases the mRNA gently, with no denaturing conditions and no damage to the nucleic acid. RT-PCR then gives cDNA for the next round.',
      why_cn: '复合物是靠高镁离子维系的，所以移除镁就能温和地释放 mRNA，不需要变性条件，也不会损伤核酸。随后 RT-PCR 得到 cDNA 进入下一轮。' },
    { type: 'short',
      q_en: 'Give the three downsides of ribosome display and explain what they have in common.',
      q_cn: '说出核糖体展示的三个缺点，并解释它们的共同点。',
      accept: ['bulky', 'low temperature', 'high salt', 'cannot purify', 'non-covalent'],
      answer_en: 'First, the ribosome is bulky — two point seven megadaltons hanging beside your protein, which may block the binding interface or itself stick non-specifically to the target. Second, selections must be carried out at low temperature and high salt, which severely restricts what conditions you can select under: no physiological temperature, no unusual pH, no detergents. Third, the complex cannot really be purified, because any manipulation risks dissociating it. What they have in common is that all three are direct consequences of the linkage being non-covalent. The complex exists only because a stalled ribosome is holding on, and anything that weakens that grip — warmth, low magnesium, a column — destroys it. That is precisely the problem mRNA display was designed to solve, and it is why the deck\'s rhetorical question, that ribosome display looks easier than mRNA display, is a setup: it is operationally simpler, but the price is that your selection conditions are locked.',
      answer_cn: '第一，核糖体体积庞大——2.7 兆道尔顿挂在你的蛋白旁边，可能挡住结合界面，也可能自己非特异地黏在靶标上。第二，筛选必须在低温高盐下进行，这严重限制了可用的筛选条件：不能用生理温度、不能用特殊 pH、不能加去污剂。第三，这个复合物基本无法纯化，因为任何操作都可能让它解离。它们的共同点是：这三条都是「连接为非共价」的直接后果。复合物之所以存在，仅仅是因为一个停滞的核糖体在抓着；任何削弱这个抓握的因素——升温、降镁、过柱子——都会摧毁它。这正是 mRNA 展示要解决的问题，也是课件那句反问「看起来比 mRNA display 简单吧」的用意所在：它操作上确实更简单，但代价是筛选条件被锁死了。'
    }
  ],
  oral: {
    q_en: 'Explain ribosome display, including how the complex is held together and how you get the mRNA back.',
    q_cn: '解释核糖体展示，包括复合物怎么维系、以及怎么把 mRNA 拿回来。',
    model_en: 'The linkage is achieved with a very simple trick: you omit the stop codon. With no stop codon there is nothing for a release factor to recognise, so when the ribosome reaches the end of the mRNA it stalls and does not let go. The result is a ternary complex — the mRNA as genotype, the ribosome, and the nascent polypeptide as phenotype — all physically held together. You stabilise it further with high magnesium and low temperature. Magnesium is what holds the ribosomal subunits together and stabilises tRNA positioning, which is the same chemistry as the phosphate-chelating-magnesium problem from the cell-free lecture, just running the other way; low temperature simply slows every dissociation process. There is one detail the slide flags as a warning and it is the most likely thing to be asked: the ribosomal exit channel is quite long, about thirty to forty amino acids, so you need an unstructured C-terminal spacer of roughly a hundred residues. Without it your target protein is still buried inside the tunnel, unable to fold and certainly unable to bind anything. The spacer pushes it out into solution. For recovery, the worked example is Takahashi and colleagues, who expressed a library in a wheat germ cell-free system and selected dihydrofolate reductase by binding to methotrexate on agarose beads. After selection they released the mRNA by adding EDTA to chelate away the magnesium — which is elegant, because the complex was held together by magnesium in the first place, so removing it collapses the complex gently with no denaturing conditions and no damage to the nucleic acid. RT-PCR then gives cDNA for the next round, and after three rounds the improved genes were recovered. The downsides are three, and they share one cause. The ribosome is bulky at two point seven megadaltons and may block the binding interface. Selections must run at low temperature and high salt, which locks your selection conditions. And the complex cannot be purified. All three follow directly from the linkage being non-covalent — which is exactly what mRNA display fixes.',
    checklist: ['Linkage: omit the stop codon, so the ribosome stalls at the mRNA end', 'No release factor binds, so it does not let go', 'Ternary complex: mRNA, ribosome, nascent peptide', 'Stabilised by high magnesium and low temperature', 'Magnesium holds subunits together and stabilises tRNA', 'Exit channel is 30-40 aa, so a ~100 aa unstructured spacer is needed', 'Without it the protein stays buried and cannot fold or bind', 'Example: Takahashi, wheat germ system, DHFR selected on methotrexate beads', 'Recovery: EDTA chelates magnesium, complex collapses, mRNA released', 'Elegant because it reverses the stabilising condition, no denaturation', 'Then RT-PCR to cDNA; three rounds gave improved DHFR', 'Downsides: bulky ribosome, low temp and high salt required, cannot purify', 'All three follow from the linkage being non-covalent']
  }
},

{
  id: '4-16',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.16',
  enTitle: 'mRNA display — covalent linkage',
  cnTitle: 'mRNA 展示——共价连接',
  slides: 'L9B s.15–17',
  coverage: 'full',
  coverageNote: 'The puromycin mechanism is the deck\'s fourth quiz question, answered on the slide, which notes frankly that the precise mechanism of fusion formation is unknown. How puromycin works chemically, and why attaching it to the mRNA\'s own 3-prime end is the clever part, are beyond the slides.',
  summary: {
    en: 'The covalent mRNA-puromycin-protein fusion is formed during translation. Puromycin is an antibiotic and ribosomal inhibitor that mimics the aminoacyl end of a tRNA; attached to the 3-prime end of an mRNA that again lacks a stop codon, it enters the ribosome and becomes covalently joined to the C-terminus of the nascent polypeptide. The result is a single molecule carrying both genotype and phenotype.',
    cn: '共价的 mRNA–嘌呤霉素–蛋白融合体是在翻译过程中形成的。嘌呤霉素是一种抗生素和核糖体抑制剂，它模拟氨酰-tRNA 的末端；把它连在同样缺少终止密码子的 mRNA 的 3′ 端，它就会进入核糖体，与新生多肽的 C 端共价连接。结果是一个同时携带基因型和表型的单一分子。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.15', src: 'img/figures/L9B_s15_1.webp' },
    { slide: 'L9B s.16', src: 'img/figures/L9B_s16_1.webp' },
    { slide: 'L9B s.16', src: 'img/figures/L9B_s16_2.webp' },
    { slide: 'L9B s.17', src: 'img/figures/L9B_s17_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '**嘌呤霉素是一匹特洛伊木马**：它长得像氨酰-tRNA 的末端，核糖体把它当自己人放进 A 位点，然后把肽链接到它身上——**而那是一根酰胺键，拆不掉。**\n\n' +
            '把它挂在 **mRNA 自己的 3′ 端**，蛋白就被焊在了编码自己的那条 mRNA 上。',
  skipIt: 'Giacobelli 2022 那个 L11 例子的细节不用背（但那个结论很值得看一眼，见下）。**第 9 讲没有 RECAP 可引**，这是判断——但**「酰胺键不是酯键，所以拆不掉」这一条要能讲**，它是共价连接的全部化学基础。',
  explain: [
    {
      q: '嘌呤霉素为什么能骗过核糖体？为什么连上去就拆不掉？',
      trace: {
        what: '**嘌呤霉素（puromycin）**本来是一种**抗生素**，会让核糖体上正在合成的肽链提前终止。它的结构模仿氨酰-tRNA 的 3′ 末端（一个腺苷 + 一个挂着的氨基酸），核糖体会把它错认成正常的氨酰-tRNA、放进 A 位点。',
        from: '它当抗生素的机制是：核糖体把新生肽链转移到它身上之后，那根键是**酰胺键**而不是正常的**酯键**——酰胺键水解不了、也转不下去，肽链就永久焊死在它身上，翻译提前终止。',
        to: 'mRNA 展示把这个「毒性机制」直接改造成了工具：把嘌呤霉素挂在**mRNA 自己的 3′ 端**，核糖体翻译到没有终止密码子的末端时正好把它拉进来焊死——于是每一条 mRNA 编码的蛋白都被共价焊在了这条 mRNA 自己身上，一个分子同时携带基因型和表型。',
        family: '它跟这门课里好几个「缺陷变特性」的例子是同一类：Taq 多加的那个 A 变成 TA 克隆的接口、ccdB 的自杀机制变成负选择、TAG 这个 bug 变成装 ncAA 的槽位（第 3-7 节）。'
      },
      a: '**两个问题，两个答案，而它们正好是这个技术的全部。**\n\n' +
         '**为什么能骗过去：它长得像氨酰-tRNA 的 3′ 末端。**\n\n' +
         '氨酰-tRNA 的末端是「一个腺苷 + 一个挂在上面的氨基酸」。**嘌呤霉素模仿的就是这个部分。**核糖体在 A 位点检查来客时，看到的正是这个结构，**于是把它当成一条正常的氨酰-tRNA 放了进来。**\n\n' +
         '**为什么拆不掉：因为那根键是酰胺键，不是酯键。**\n\n' +
         '这一条要仔细看。正常情况下，**氨基酸是通过酯键（C–O）挂在 tRNA 上的**。酯键容易水解、也容易被转移——**所以肽链才能一棒接一棒地传下去。**\n\n' +
         '**而嘌呤霉素上那个位置是酰胺键（C–N）。**\n\n' +
         '肽基转移酶中心照常催化，把新生肽链转移到嘌呤霉素上——**然后就卡住了。酰胺键不能被水解，也不能再往下传。**\n\n' +
         '**肽链就永久地留在嘌呤霉素上了。**\n\n' +
         '**而这正是嘌呤霉素当抗生素的机制：造成肽链提前终止。**\n\n' +
         '**mRNA 展示做的事，是把这个「毒性机制」直接变成工具。**\n\n' +
         '（这门课里这类反转已经出现好几次了：Taq 多加的那个 A 变成 TA 克隆的接口、ccdB 这个自杀装置变成负选择、TAG 这个 bug 变成装 ncAA 的槽位。**「缺陷变特性」几乎是这门课的主旋律。**）',
      takeaway: '它模仿氨酰-tRNA 末端所以进得去；但连接处是酰胺键不是酯键，所以肽链传到它这里就永久停住。'
    },
    {
      q: '最巧的一步是「把它挂在哪里」——为什么？',
      a: '**因为嘌呤霉素被挂在 mRNA 自己的 3′ 端上，于是它只会遇到翻译自己的那个核糖体。**\n\n' +
         '走一遍现场：\n\n' +
         '核糖体沿着这条 mRNA 翻译。**这条 mRNA 同样没有终止密码子**（跟核糖体展示一样，第 4-15 节），所以没有释放因子来终止。\n\n' +
         '**核糖体走到 mRNA 的尽头——而嘌呤霉素就挂在那个尽头上。**\n\n' +
         '它被顺势拉进 A 位点，肽链被转移上去，**焊死。**\n\n' +
         '**结果：这条 mRNA 编码的蛋白，被共价连接在了这条 mRNA 自己身上。**\n\n' +
         '**为什么这个位置设计是关键？想象一下如果嘌呤霉素是游离在溶液里的：**\n\n' +
         '那么任何一个核糖体都可能撞上任何一个嘌呤霉素分子。**蛋白 A 可能被焊到 mRNA B 上——基因型和表型就配错了，整个实验毫无意义。**\n\n' +
         '**把嘌呤霉素拴在 mRNA 自己的末端，就保证了「谁翻译的，就焊给谁」。**\n\n' +
         '**这是一个空间约束解决特异性问题的漂亮例子**——不靠分子识别，靠「它够不着别人」。（跟第 4-17 节液滴的思路其实是一样的：**都是用空间隔离来保证配对不出错。**）',
      takeaway: '挂在 mRNA 自己的 3′ 端，所以只会被翻译这条 mRNA 的核糖体拉进去。靠空间约束保证配对不出错。'
    },
    {
      q: 'mRNA 展示和核糖体展示，怎么选？',
      a: '**一句话：mRNA 展示用操作复杂度，换来了选择条件的自由和稳定性。**\n\n' +
         '**核糖体展示**：非共价、脆弱。**必须低温高镁、不能纯化、拖着一个 2.7 MDa 的核糖体。**但操作简单，上限约 10¹²–10¹³。\n\n' +
         '**mRNA 展示**：共价、极稳。**几乎什么条件都能用、可以纯化、只拖着一条 mRNA。**但麻烦——你得合成嘌呤霉素接头、还得把它连到 mRNA 上。上限约 10¹³–10¹⁴。\n\n' +
         '**所以判据是：你的选择需要什么条件？**\n\n' +
         '**条件温和、想快速试一下** → 核糖体展示。\n\n' +
         '**需要严苛的洗涤、非生理条件、或者要先纯化再选** → mRNA 展示。\n\n' +
         '**注意「可以洗得任意狠」这条优势你见过**：第 2-38 节链霉亲和素-生物素那里，结合极牢的好处就是「杂质走得干干净净」。**共价连接在这里给了你同样的自由。**\n\n' +
         '**cDNA 展示再往前走一步**：连接建立之后，**把 mRNA 逆转录成 cDNA**。因为 **DNA 比 RNA 稳定得多**——不怕 RNase、不怕碱——**所以选择条件可以更狠**。\n\n' +
         '**三种方法排成一条线，方向很清楚：连接越牢固，你能施加的选择压力就越极端。**而选择压力越极端，你能筛出来的东西就越特别。',
      takeaway: '核糖体展示简单但脆弱、条件受限；mRNA 展示麻烦但极稳、条件自由。连接越牢，能用的选择压力越极端。'
    },
    {
      q: '那个 L11 的结果为什么值得单独看一眼？',
      a: '**因为它找到了一个理性设计永远不会提出的答案。**\n\n' +
         '**先说直觉：蛋白怎么结合 RNA？**\n\n' +
         '**用正电荷。**RNA 的磷酸骨架带负电，所以蛋白用**精氨酸（Arg）和赖氨酸（Lys）**这些带正电的残基去中和它。**这是教科书答案，而且它是对的——绝大多数蛋白-RNA 相互作用确实如此。**\n\n' +
         '**如果让你去理性设计一个 RNA 结合蛋白，你一定会往界面上放 Arg 和 Lys。**\n\n' +
         '**而这个体外进化实验找到的是：一个带负电的谷氨酸（Glu），通过金属离子搭桥来结合 RNA。**\n\n' +
         '**负电荷结合负电荷——中间用一个金属离子当中介。**\n\n' +
         '**这个方案不会出现在任何人的设计稿上**，因为它违反了那条本来正确的直觉。\n\n' +
         '**而这正是定向进化最有价值的地方，也正好呼应第 4-4 节 Arnold 那个洞见：**\n\n' +
         '**进化不受我们现有理论的约束。**它不知道「RNA 结合要用正电荷」这条规则，所以它也不会被这条规则挡住。它只是在搜索空间里找能用的东西——**而能用的东西比我们以为的多。**\n\n' +
         '**所以定向进化的产出有两种：一种是「更好的已知方案」，一种是「我们想不到的新方案」。第二种才是它真正不可替代的价值。**',
      takeaway: '直觉是用正电荷（Arg/Lys）结合 RNA，而进化找到了「负电的 Glu + 金属离子搭桥」。理性设计提不出这个。'
    }
  ],
  points: [
    { term: 'What is formed', en: 'The covalent mRNA-puromycin-protein fusion is formed during translation. The deck states frankly that the precise mechanism is unknown.', cn: '在翻译过程中形成共价的 mRNA–嘌呤霉素–蛋白融合体。课件坦率地说明其确切机制尚不清楚。' },
    { term: 'What puromycin is', en: 'An antibiotic and a ribosomal inhibitor.', cn: '一种抗生素，同时也是核糖体抑制剂。' },
    { term: 'How the construct is built', en: 'After transcription, the mRNA — again lacking a stop codon — is attached at its 3-prime end to DNA-coupled puromycin, which is commercially synthesised.', cn: '转录之后，把同样缺少终止密码子的 mRNA 的 3′ 端连接到商品化合成的 DNA-偶联嘌呤霉素上。' },
    { term: 'What puromycin does', en: 'It mimics the aminoacyl end of a tRNA, enters the ribosome, and becomes covalently attached to the C-terminus of the nascent polypeptide.', cn: '它模拟氨酰-tRNA 的末端，进入核糖体，并与新生多肽的 C 端共价连接。' },
    { term: 'Why it wins', en: 'A very versatile and clean technique, giving specific binders and high enrichments, and it can be done over a wide range of conditions.', cn: '一种非常通用且干净的技术，能得到特异的结合子和很高的富集倍数，而且可以在很宽的条件范围内进行。' },
    { term: 'cDNA display', en: 'Modifications make it a cDNA display and more efficient.', cn: '经过改良可以变成 cDNA display，效率更高。' },
    { term: 'The honest caveat', en: 'Yes, it is laborious — but enrichment of specific sequences is monitored throughout the selection rounds.', cn: '确实，它很繁琐——但整个筛选过程中可以持续监测特异序列的富集情况。' },
    { term: 'An application', en: 'Giacobelli et al., Molecular Biology and Evolution 2022: in vitro evolution of the C-terminal domain of ribosomal protein L11 binding 5S rRNA, revealing that an Arg-RNA interaction can be substituted by a Glu-RNA interaction bridged by metal ions — a non-cationic protein-RNA interaction.', cn: 'Giacobelli 等，Molecular Biology and Evolution 2022：对核糖体蛋白 L11 的 C 端结构域（结合 5S rRNA）做体外进化，发现 Arg–RNA 相互作用可以被由金属离子搭桥的 Glu–RNA 相互作用取代——一种非阳离子型的蛋白–RNA 相互作用。' }
  ],
  beyondPoints: [
    { term: 'Puromycin as a molecular Trojan horse', en: 'Structurally it mimics the three-prime end of an aminoacyl-tRNA — an adenosine bearing an amino acid — so the ribosome mistakes it for a normal aminoacyl-tRNA and admits it to the A site.', cn: '嘌呤霉素在结构上模拟氨酰-tRNA 的 3′ 末端（腺苷加一个氨基酸），所以核糖体误以为它是一个正常的氨酰-tRNA，把它接纳进 A 位。' },
    { term: 'Why the bond is permanent', en: 'The peptidyl transferase centre then catalyses peptide bond formation, transferring the nascent chain onto the puromycin — but the linkage on puromycin is an amide bond, a carbon-nitrogen bond, not an ester. So it cannot be hydrolysed or transferred onward, the chain terminates there, and it stays covalently attached. That is exactly puromycin\'s mechanism as an antibiotic — causing premature chain termination — and mRNA display turns that toxic mechanism into a tool.', cn: '肽基转移中心随后催化肽键形成，把新生肽链转移到嘌呤霉素上——但嘌呤霉素上的连接是酰胺键（C–N），不是酯键。所以它水解不了、也转移不走，肽链就此终止并永久共价连着。这正是嘌呤霉素作为抗生素的作用机制（造成肽链过早终止），而 mRNA 展示把这个毒性机制变成了工具。' },
    { term: 'The clever part is where you put it', en: 'Puromycin is attached to the three-prime end of the mRNA itself. When the ribosome translates to the end of the message — and there is no stop codon, so no release factor terminates it — the puromycin on that very three-prime end is right there, gets pulled into the A site, and the protein encoded by that mRNA is welded covalently onto that same mRNA. One molecule now carries both genotype and phenotype, covalently.', cn: '巧妙之处在于把嘌呤霉素挂在 mRNA 自己的 3′ 端。核糖体翻译到信息末端时——由于没有终止密码子，释放因子不会终止它——那个 3′ 端上的嘌呤霉素正好近在咫尺，被拉进 A 位，于是这条 mRNA 编码的蛋白就被共价焊到了这条 mRNA 自己身上。一个分子同时携带基因型和表型，而且是共价的。' },
    { term: 'The comparison table', en: 'Ribosome display is non-covalent and fragile, restricted to low temperature and high magnesium, cannot be purified, drags a 2.7 megadalton ribosome along, is operationally simpler, and reaches about 10^12 to 10^13. mRNA display is covalent and extremely stable, works under almost any condition, can be purified, carries only a strand of mRNA, is laborious because you must synthesise the puromycin linker and ligate the mRNA, and reaches about 10^13 to 10^14.', cn: '核糖体展示是非共价的、脆弱的，受限于低温和高镁，不能纯化，还拖着一个 2.7 兆道尔顿的核糖体，操作较简单，文库上限约 10¹²–10¹³。mRNA 展示是共价的、极其稳定，几乎任何条件都能用，可以纯化，只带着一段 mRNA，操作繁琐（要合成嘌呤霉素连接体、连接 mRNA），文库上限约 10¹³–10¹⁴。' },
    { term: 'In one sentence', en: 'mRNA display trades operational complexity for freedom of selection conditions and stability.', cn: '一句话：mRNA 展示用「操作麻烦」换来了「筛选条件自由」和「稳定性」。' },
    { term: 'What cDNA display adds', en: 'After the covalent linkage is made, the mRNA is reverse-transcribed into cDNA. Since DNA is far more stable than RNA — not vulnerable to RNases or to alkali — selection can then be performed under still harsher conditions.', cn: '在共价连接形成之后，把 mRNA 反转录成 cDNA。由于 DNA 比 RNA 稳定得多——不怕 RNase、不怕碱——就可以在更严苛的条件下筛选。' },
    { term: 'Why the L11 result is worth including', en: 'Intuitively a protein binds RNA through positive charges, arginine and lysine, neutralising the phosphate backbone. This in vitro evolution found a completely counter-intuitive route: a negatively charged glutamate binding RNA through a metal-ion bridge. That is directed evolution at its most valuable — finding solutions rational design would never have proposed, because it is not constrained by our existing theory.', cn: '直觉上蛋白结合 RNA 靠的是正电荷（Arg、Lys）中和 RNA 的磷酸骨架。这个体外进化实验找到了一条完全反直觉的路：带负电的谷氨酸通过金属离子搭桥去结合 RNA。这正是定向进化最有价值的地方——它能找到理性设计根本想不到的解，因为它不受我们既有理论的约束。' }
  ],
  terms: [
    { en: 'Puromycin', cn: '嘌呤霉素', def_en: 'An antibiotic mimicking the aminoacyl end of a tRNA. It accepts the nascent chain through an amide bond that cannot be hydrolysed, terminating translation permanently.', def_cn: '模拟氨酰-tRNA 末端的抗生素。它通过一个无法水解的酰胺键接受新生肽链，从而永久终止翻译。' },
    { en: 'Amide versus ester', cn: '酰胺键与酯键', def_en: 'A normal aminoacyl-tRNA links its amino acid by an ester bond, which is hydrolysable and transferable; puromycin uses an amide bond, which is not — hence the permanent fusion.', def_cn: '正常的氨酰-tRNA 通过酯键连接氨基酸，可水解、可转移；嘌呤霉素用的是酰胺键，两者都做不到——因此形成永久融合。' },
    { en: 'cDNA display', cn: 'cDNA 展示', def_en: 'mRNA display followed by reverse transcription, so the genetic component is DNA — far more stable than RNA and tolerant of harsher selection conditions.', def_cn: '在 mRNA 展示之后进行反转录，使遗传成分变成 DNA——比 RNA 稳定得多，能耐受更严苛的筛选条件。' },
    { en: 'Enrichment monitoring', cn: '富集监测', def_en: 'Tracking how much specific sequences increase in frequency across selection rounds, used to judge whether a selection is working.', def_cn: '追踪特异序列在各轮筛选中频率上升的程度，用于判断筛选是否奏效。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why does puromycin form a permanent covalent bond to the nascent chain?',
      q_cn: '为什么嘌呤霉素会与新生肽链形成永久的共价键？',
      options: ['It is cross-linked to the nascent chain by UV irradiation', 'It accepts the chain through an amide bond rather than an ester', 'It binds irreversibly to the ribosomal A site and stays there', 'It is attached to the chain by a separate enzyme after translation'],
      answer: 1,
      why_en: 'A normal aminoacyl-tRNA holds its amino acid by an ester, which the ribosome can hydrolyse and transfer. Puromycin uses an amide bond, so the chain terminates there and stays attached — which is precisely its antibiotic mechanism, repurposed as a tool.',
      why_cn: '正常的氨酰-tRNA 通过酯键携带氨基酸，核糖体可以水解并转移它。嘌呤霉素用的是酰胺键，所以肽链在此终止并保持连接——这正是它作为抗生素的机制，在这里被改造成了工具。' },
    { type: 'mcq',
      q_en: 'Where is the puromycin attached, and why does that matter?',
      q_cn: '嘌呤霉素连接在哪里？这为什么重要？',
      options: ['To the ribosome, so that it captures any nascent chain made there', 'To the 3-prime end of the mRNA molecule that encodes that protein', 'To the target protein, which is then mixed with the mRNA library', 'To agarose beads, so the complex can be pulled down and washed'],
      answer: 1,
      optionNotes: {
        0: { en: 'Puromycin on the ribosome would label every nascent chain that passes through, and a link that catches everything links nothing to anything in particular. The specificity comes from position: it sits on the 3-prime end of one particular message, so it can only capture the protein that message has just made.', cn: '如果 puromycin 长在核糖体上，它会抓住每一条经过的新生肽链，而一个什么都抓的连接等于没有连接。特异性来自位置：puromycin 挂在某一条特定 mRNA 的 3-prime 端，所以它只能抓住这条 mRNA 刚翻译出来的那个蛋白。' }
      },
      why_en: 'That placement is the whole trick. Translation runs to the end of a stop-codon-free message, the puromycin on that same 3-prime end is immediately adjacent, gets drawn into the A site, and the fusion links each protein to its own mRNA.',
      why_cn: '这个位置正是整个巧思所在。翻译走到没有终止密码子的信息末端，同一条 3′ 端上的嘌呤霉素近在咫尺，被拉进 A 位，于是每个蛋白都被连到编码它自己的那条 mRNA 上。' },
    { type: 'mcq',
      q_en: 'What does cDNA display add over standard mRNA display?',
      q_cn: 'cDNA 展示相对标准 mRNA 展示增加了什么？',
      options: ['A higher library ceiling than the 10^13 to 10^14 of mRNA display', 'A DNA genotype in place of RNA, so harsher conditions can be used', 'A fusion that forms without any puromycin linker at all', 'The ability to run the whole selection inside living cells'],
      answer: 1,
      optionNotes: {
        2: { en: 'cDNA display still forms the puromycin fusion exactly as mRNA display does. Reverse transcription happens afterwards, on the mRNA that is already welded to its protein, so the method adds a step rather than removing the linker.', cn: 'cDNA display 依然要按 mRNA display 的做法先形成 puromycin 融合体；逆转录是之后才做的，模板就是那条已经和蛋白焊在一起的 mRNA。它是多加了一步，而不是省掉了 linker。' }
      },
      why_en: 'Reverse transcribing after the covalent fusion is formed replaces a molecule vulnerable to RNases and alkali with one that is not, extending the range of conditions a selection can survive.',
      why_cn: '在共价融合形成之后做反转录，把一个怕 RNase、怕碱的分子换成不怕的，从而扩展了筛选能够承受的条件范围。' },
    { type: 'short',
      q_en: 'Compare ribosome display and mRNA display on four axes.',
      q_cn: '从四个维度比较核糖体展示和 mRNA 展示。',
      accept: ['covalent', 'non-covalent', 'conditions', 'purif', 'laborious'],
      answer_en: 'On linkage, ribosome display is non-covalent — a ternary complex held together by a stalled ribosome — whereas mRNA display is covalent, welded through puromycin. On stability and selection conditions, the ribosome complex is fragile and falls apart if conditions change, so you are locked into low temperature and high magnesium, whereas the covalent fusion survives almost any condition, which is the single biggest practical advantage. On purification, the ribosome complex cannot really be purified because any manipulation risks dissociating it, whereas the mRNA fusion can. And on baggage and library size, ribosome display drags a two point seven megadalton ribosome alongside your protein, which may block the binding interface, and reaches about ten to the twelve or thirteen, while mRNA display carries only a strand of mRNA and reaches about ten to the thirteen or fourteen. The cost is operational: mRNA display is laborious, since you must synthesise the puromycin linker and ligate it to the message. In one sentence, mRNA display trades operational complexity for freedom of selection conditions and stability.',
      answer_cn: '连接方式上，核糖体展示是非共价的——由停滞的核糖体维系的三元复合物；mRNA 展示是共价的，通过嘌呤霉素焊在一起。稳定性与筛选条件上，核糖体复合物很脆弱，条件一变就散，所以你被锁死在低温高镁；而共价融合几乎任何条件都能承受，这是最大的实际优势。纯化方面，核糖体复合物基本无法纯化，因为任何操作都可能让它解离；mRNA 融合体则可以。累赘物与文库规模上，核糖体展示拖着一个 2.7 兆道尔顿的核糖体挂在蛋白旁边，可能挡住结合界面，上限约 10¹²–10¹³；mRNA 展示只带着一段 mRNA，上限约 10¹³–10¹⁴。代价在操作上：mRNA 展示很繁琐，要合成嘌呤霉素连接体并把它连到信息上。一句话：mRNA 展示用操作复杂度换来了筛选条件的自由和稳定性。'
    }
  ],
  oral: {
    q_en: 'What is puromycin and how does mRNA display use it?',
    q_cn: '什么是嘌呤霉素？mRNA 展示是怎么利用它的？',
    model_en: 'Puromycin is an antibiotic and a ribosomal inhibitor, and the reason it works as an antibiotic is exactly what makes it useful here. Structurally it mimics the three-prime end of an aminoacyl-tRNA — an adenosine bearing an amino acid — so the ribosome mistakes it for a normal charged tRNA and admits it to the A site. The peptidyl transferase centre then does what it always does and catalyses peptide bond formation, transferring the nascent chain onto the puromycin. But the linkage on puromycin is an amide bond, a carbon-nitrogen bond, rather than the ester that a real aminoacyl-tRNA uses. An amide cannot be hydrolysed or transferred onward, so the chain terminates there and remains covalently attached. That premature termination is precisely how puromycin kills cells, and mRNA display turns the toxic mechanism into a tool. The clever part is where you put it. After transcription, the mRNA — which again lacks a stop codon — is attached at its three-prime end to DNA-coupled puromycin, which you buy commercially. Now when the ribosome translates that message it runs to the end without any release factor terminating it, and the puromycin sitting on that very same three-prime end is immediately adjacent, gets drawn into the A site, and the protein encoded by that mRNA is welded covalently onto that mRNA itself. One molecule carrying both genotype and phenotype, covalently. The deck is honest that the precise mechanism of fusion formation is unknown. Compared with ribosome display, the advantages follow directly from covalence: it is a very versatile and clean technique, gives specific binders and high enrichments, can be done over a wide range of conditions, and can be purified, whereas the non-covalent ribosome complex is locked into low temperature and high magnesium. The cost is that it is laborious, since the puromycin linker must be synthesised and ligated. cDNA display improves it further by reverse transcribing after the fusion forms, since DNA is far more stable than RNA and tolerates harsher selections.',
    checklist: ['Puromycin is an antibiotic and ribosomal inhibitor', 'It mimics the aminoacyl end of a tRNA, so the ribosome admits it to the A site', 'PTC transfers the nascent chain onto it', 'But the bond is an amide, not an ester — cannot be hydrolysed or transferred', 'So the chain terminates and stays covalently attached', 'That is its antibiotic mechanism, repurposed as a tool', 'Attached to the 3-prime end of the mRNA itself', 'mRNA again lacks a stop codon, so no release factor terminates', 'Result: each protein welded to its own message, covalently', 'Deck notes the precise fusion mechanism is unknown', 'Advantages: versatile, clean, high enrichment, wide condition range, purifiable', 'Cost: laborious — synthesise and ligate the puromycin linker', 'cDNA display: reverse transcribe afterwards for even harsher conditions']
  }
},

{
  id: '4-17',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.17',
  enTitle: 'Droplet compartmentalisation — selecting catalysts',
  cnTitle: '液滴区隔化——筛选催化剂',
  slides: 'L9B s.18–19',
  coverage: 'full',
  coverageNote: 'The slide states plainly that unlike display methods this is great for selection of catalysts, and gives the droplet size and the one-member-per-droplet requirement. Why display methods fail for enzymes — because they select binding rather than turnover — is the most important distinction in the lecture and is developed here.',
  summary: {
    en: 'In vitro compartmentalisation achieves genotype-phenotype linkage by compartmentalisation, and unlike the display methods it is great for selecting catalysts. It creates in effect a cell-like compartment performing only the one reaction to be selected. Emulsions of about 2 micrometres are made with oil, detergents and emulsifier, and if done properly there is on average only one library member per droplet.',
    cn: '体外区隔化通过区隔实现基因型–表型连接，而且与展示方法不同，它非常适合筛选催化剂。它实际上创造了一个类细胞的区室，其中只进行你要筛选的那一个反应。用油、去污剂和乳化剂制备约 2 微米的乳液，操作得当的话平均每个液滴只含一个文库成员。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.18', src: 'img/figures/L9B_s18_1.webp' },
    { slide: 'L9B s.19', src: 'img/figures/L9B_s19_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '展示技术筛的是**结合**，而**结合得最牢的酶恰恰是最差的酶**（严重的产物抑制）——所以筛催化必须换一套逻辑。\n\n' +
            '液滴的解法是**区隔**：一个基因、一个酶、一堆底物关在一个 2 µm 的小水滴里，看它**做出了多少产物**。',
  skipIt: '2 µm 这个直径、以及可筛的酶类清单，不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**「为什么展示筛不了催化」这条论证必须能讲**，它是这一节存在的全部理由，也是一个很好的考题。',
  explain: [
    {
      q: '为什么展示技术筛不了催化活性？',
      a: '**因为它们的选择规则是「谁抓得牢谁留下」，而一个好的酶恰恰是不抓牢的。**\n\n' +
         '**先看展示的逻辑：**噬菌体展示、核糖体展示、mRNA 展示，三者的规则完全一样——**蛋白结合靶标 → 被保留 → 被扩增。**\n\n' +
         '**这对结合子（抗体、适配体、亲和配体）是完美的**：你要的就是结合得牢。\n\n' +
         '**但对酶，这条规则是反的。**\n\n' +
         '**一个酶的价值在于周转（turnover）：**催化一个底物，**放开**，再催化下一个。一秒钟处理成百上千个。\n\n' +
         '**一个高效的酶恰恰是不会抓着产物不放的。**\n\n' +
         '**所以如果你用「谁抓得最牢」来选，你会选出什么？**\n\n' +
         '**你会选出产物抑制最严重的那些**——它们抓住产物就再也不放手，在结合实验里表现得最好，**而它们是最差的酶。**\n\n' +
         '**这是一个很干净的「选择压力施加错了地方」的例子**，跟第 4-13 节多价展示那个亲合力陷阱是同一类错误：\n\n' +
         '**你以为自己在选 A，实际上选的是跟 A 相关但不等于 A 的 B——而 B 恰好可以通过你不想要的途径被满足。**\n\n' +
         '**设计任何选择实验时，这都是第一个该自查的问题：我施加的压力，真的作用在我想优化的那个量上吗？**',
      takeaway: '展示选「抓得牢」，而好酶恰恰要放手。所以这条规则会选出产物抑制最严重的、也就是最差的酶。'
    },
    {
      q: '液滴是怎么绕开这个问题的？',
      a: '**它不去问「你抓得牢不牢」，它问「你做出了多少产物」。**\n\n' +
         '**做法：**\n\n' +
         '把**一个基因、它表达出的酶、以及底物**，一起关进一个约 2 µm 的**油包水液滴**里。\n\n' +
         '**酶在液滴内部正常工作**——催化、放手、再催化。**它完全自由，没有被拴在任何东西上。**\n\n' +
         '**产物出不去，所以在液滴里累积。**\n\n' +
         '**液滴因此变色或者发荧光**，而**信号强度正比于这个酶在这段时间里做了多少个产物**。\n\n' +
         '**按荧光强度分选液滴，回收里面的基因，扩增。**\n\n' +
         '**所以被选中的量是「单位时间的产物量」——那就是真正的催化效率。**\n\n' +
         '**关键在于：区隔让「产物累积」这件事变成了可读的信号。**\n\n' +
         '在一锅溶液里，所有酶做出的产物混在一起，**你分不清哪个产物是哪个酶做的**——基因型和表型的连接就断了。\n\n' +
         '**液滴把这一锅切成了 10⁸ 个独立的小实验。**\n\n' +
         '**注意这跟第 4-11 节说的「区隔法的优点是蛋白自由」正好对上**：正因为酶没有被拴住，它才能正常周转；也正因为有边界，产物才能被归属到具体某一个基因头上。**这两件事只有区隔法能同时做到。**',
      takeaway: '关在液滴里，酶自由周转、产物累积成信号。区隔把一锅溶液切成上亿个独立小实验，产物才能归属到基因。'
    },
    {
      q: '「平均每个液滴只有一个文库成员」为什么是硬要求？',
      trace: {
        what: '**泊松占据率（Poisson occupancy）**指的是液滴筛选里「平均每个液滴装多少个文库成员」这件事——液滴数目和文库分子数目都极大，一个液滴里实际装了几个，遵循**泊松分布**。',
        from: '之所以要控制它，是因为一旦一个液滴里有两个基因，你就分不清信号是谁产生的——基因型–表型的连接直接断掉；更糟的是两个基因可能「互补」凑出信号，选出一对根本没法单独工作的基因。',
        to: '做法是靠**稀释**把平均占据率压到远小于 1（比如 0.1），按泊松分布算，约 90% 的液滴是空的、约 9% 恰好装一个、只有约 0.5% 装了两个以上——代价是浪费掉九成液滴，换来的是连接的可靠性。',
        family: '同样的泊松逻辑在第 4-13 节的单价展示（要求每个噬菌体表面只有一份融合蛋白）、以及单细胞测序里都会遇到——「平均每个隔间一个」这种要求背后，通常意味着大多数隔间其实是空的。'
      },
      a: '**因为一旦一个液滴里有两个基因，你就不知道信号是谁产生的——连接断了。**\n\n' +
         '假设某个液滴里有基因 A 和基因 B，而这个液滴发出了很强的荧光。\n\n' +
         '**你回收里面的 DNA，拿到的是 A 和 B 两条。**\n\n' +
         '**而真正有活性的可能只有其中一个。**你把两个都带进了下一轮，其中一个是搭便车的。轮数一多，搭便车的会稀释掉你的富集效果。\n\n' +
         '**更糟的情况是「互补」：**A 做一半、B 做一半，合起来才有信号。**你会选出一对根本不能单独工作的基因，而这在下游完全没法用。**\n\n' +
         '**所以占据率必须控制在「平均每滴不到一个」。**\n\n' +
         '**做法是稀释，而依据是泊松分布。**\n\n' +
         '这里有一个不太直观但很重要的后果：**要保证「几乎没有液滴含两个」，你就必须接受「大多数液滴一个都不含」。**\n\n' +
         '比如把平均占据率调到 0.1，那么约 90% 的液滴是空的，约 9% 含一个，只有约 0.5% 含两个以上。\n\n' +
         '**也就是说，你浪费掉了 90% 的液滴——这是为了连接的可靠性必须付的代价。**\n\n' +
         '**同样的泊松逻辑在第 4-13 节的单价展示、以及单细胞测序里都会遇到。**看到「平均每个隔间一个」这种要求，就该想到「大部分隔间是空的」。',
      takeaway: '一滴两个基因就分不清是谁的信号。按泊松稀释到平均 0.1 个，代价是九成液滴是空的。'
    }
  ],
  points: [
    { term: 'The linkage mechanism', en: 'Genotype-phenotype linkage through compartmentalisation.', cn: '通过区隔化实现基因型–表型连接。' },
    { term: 'What makes it different', en: 'Unlike the display methods, it is great for selection of catalysts.', cn: '与展示方法不同，它非常适合筛选催化剂。' },
    { term: 'What it creates', en: 'In effect a cell-like compartment that performs only the one reaction to be selected.', cn: '实际上是一个类细胞的区室，其中只进行你要筛选的那一个反应。' },
    { term: 'How droplets are made', en: 'Emulsions of about 2 micrometres diameter, using oil, detergents and emulsifier.', cn: '用油、去污剂和乳化剂制备直径约 2 微米的乳液。' },
    { term: 'The occupancy requirement', en: 'If done properly, on average only one copy of transformant or library member exists per droplet.', cn: '操作得当的话，平均每个液滴只含一个转化子或文库成员的拷贝。' },
    { term: 'Detection modes', en: 'Fluorescence intensity, or absorbance.', cn: '荧光强度，或者吸光度。' },
    { term: 'What it is used for', en: 'Selection of hydrolases, oxidoreductases, aldolases, transferases and isomerases.', cn: '用于筛选水解酶、氧化还原酶、醛缩酶、转移酶和异构酶。' }
  ],
  beyondPoints: [
    { term: 'Display selects binding, not catalysis', en: 'Phage, ribosome and mRNA display all work on the same logic: the protein binds the target, so it is retained and amplified. That naturally suits binders — antibodies, aptamers, affinity ligands.', cn: '噬菌体展示、核糖体展示、mRNA 展示的筛选逻辑都一样：蛋白结合靶标，于是被留下来并扩增。这天然适合筛结合子——抗体、适配体、亲和配体。' },
    { term: 'Why that is the wrong logic for an enzyme', en: 'An enzyme\'s value is turnover — it catalyses one substrate and releases it to catalyse the next. An efficient enzyme precisely does not hold on to its product. So a "whoever binds tightest is selected" rule would pick out the worst enzymes, the ones with severe product inhibition, rather than the best.', cn: '酶的价值在于周转（turnover）——它催化完一个底物就放开，去催化下一个。高效的酶恰恰不会牢牢抓住产物。所以「谁结合得牢谁被选中」这套逻辑，会选出最差的酶（产物抑制严重的那种），而不是最好的。' },
    { term: 'How droplets solve it', en: 'Enclose one gene, its expressed product and the substrate in a water-in-oil droplet of about 2 micrometres. The enzyme catalyses inside the droplet, the product accumulates because it cannot escape, the droplet changes colour or fluoresces, you sort droplets by fluorescence intensity, and recover and amplify the gene inside.', cn: '把一个基因、它的表达产物和底物关进一个约 2 微米的油包水液滴里。酶在液滴内催化，产物因为出不去而积累，液滴变色或发荧光，你按荧光强度分选液滴，再回收并扩增里面的基因。' },
    { term: 'What is actually being selected', en: 'How much product one enzyme made in a given time — that is, genuine catalytic efficiency. Which is exactly why the slide emphasises it is great for selection of catalysts and why the application list is entirely enzymes.', cn: '被筛选的是「一个酶在一段时间内产生了多少产物」，也就是真正的催化效率。这正是幻灯片强调「非常适合筛选催化剂」的原因，也是应用列表全是酶类的原因。' },
    { term: 'Why one member per droplet is essential', en: 'If a droplet contains two genes you cannot tell which one produced the signal, and the genotype-phenotype link is broken. Occupancy is controlled by dilution according to the Poisson distribution.', cn: '如果一个液滴里有两个基因，你就不知道是哪一个产生了信号，基因型–表型连接就断了。液滴占据率通过按泊松分布控制稀释度来实现。' }
  ],
  terms: [
    { en: 'In vitro compartmentalisation (IVC)', cn: '体外区隔化', def_en: 'Enclosing single library members in water-in-oil droplets so each acts as an artificial cell performing one reaction, allowing selection on catalytic activity.', def_cn: '把单个文库成员封进油包水液滴，使每个液滴充当一个只进行一个反应的人工细胞，从而可以按催化活性筛选。' },
    { en: 'Turnover', cn: '周转', def_en: 'An enzyme repeatedly converting substrate and releasing product. It is what makes an enzyme valuable, and precisely what binding-based selection cannot measure.', def_cn: '酶反复转化底物并释放产物。这正是酶价值的所在，也恰恰是基于结合的筛选无法衡量的。' },
    { en: 'Product inhibition', cn: '产物抑制', def_en: 'An enzyme binding its own product tightly and stalling. A binding-based selection would actively favour this defect.', def_cn: '酶牢牢结合自己的产物而停滞。基于结合的筛选反而会主动偏好这个缺陷。' },
    { en: 'Poisson occupancy', cn: '泊松占据率', def_en: 'Controlling dilution so that droplets contain on average one library member, since more than one would break the genotype-phenotype link.', def_cn: '通过控制稀释度使液滴平均只含一个文库成员，因为多于一个就会破坏基因型–表型连接。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Why are display technologies poorly suited to evolving enzymes?',
      q_cn: '为什么展示技术不适合用来进化酶？',
      options: ['Enzymes are too large to be displayed on a phage coat protein', 'They select for binding, and a good enzyme releases its product', 'Enzymes unfold when fused to the phage coat protein and lose their activity', 'Enzymes cannot be expressed in a cell-free translation system'],
      answer: 1,
      why_en: 'The selection rule is whoever binds tightest is retained. Applied to enzymes that rule actively favours product inhibition — you would select the worst catalysts, not the best.',
      why_cn: '筛选规则是「谁结合得最牢谁被保留」。把这条规则用在酶上，它反而偏好产物抑制——你选出来的会是最差的催化剂而不是最好的。' },
    { type: 'mcq',
      q_en: 'Why must droplets contain on average only one library member?',
      q_cn: '为什么液滴平均只能含一个文库成员？',
      options: ['Because a single gene per droplet keeps reagent consumption low', 'Because with two genes inside you cannot tell which made the signal', 'Because two enzymes sharing a droplet each make too little product to detect', 'Because uneven occupancy would make the droplets different sizes'],
      answer: 1,
      why_en: 'The whole point of compartmentalisation is that the signal in a droplet is attributable to the single gene inside it. Occupancy is set by dilution following the Poisson distribution.',
      why_cn: '区隔化的全部意义就在于：一个液滴里的信号可以归因于其中唯一的那个基因。占据率通过按泊松分布控制稀释度来设定。' },
    { type: 'mcq',
      q_en: 'What does a droplet selection actually measure?',
      q_cn: '液滴筛选实际测量的是什么？',
      options: ['How tightly the enzyme binds the substrate it is given', 'How much product a single enzyme made in a given time', 'How much enzyme each droplet expressed, whatever its activity', 'How well the enzyme survives heating in the droplet'],
      answer: 1,
      optionNotes: {
        0: { en: 'Substrate binding is what a display method would select for, and it is the wrong quantity: a tight binder can be a slow catalyst, and the tightest binder of all is one that will not let the product go. The droplet reads accumulated product, so it reports turnover.', cn: '结合底物正是 display 方法会筛到的东西，而那恰恰是不该测的量：结合得紧的酶完全可能转化得很慢，而结合最紧的往往是那些抓着产物不放的。液滴读的是积累起来的产物，所以它报告的是催化周转。' }
      },
      why_en: 'Product accumulates inside the sealed droplet, so fluorescence or absorbance reports total turnover. That is why the application list is entirely enzymes — hydrolases, oxidoreductases, aldolases, transferases, isomerases.',
      why_cn: '产物在密闭的液滴内积累，所以荧光或吸光度反映的是总周转量。这就是应用列表全是酶类的原因——水解酶、氧化还原酶、醛缩酶、转移酶、异构酶。' },
    { type: 'short',
      q_en: 'Explain why droplet compartmentalisation is the right technique for evolving an enzyme.',
      q_cn: '解释为什么液滴区隔化是进化一个酶的正确技术。',
      accept: ['turnover', 'binding', 'product', 'accumulate', 'sort'],
      answer_en: 'Because it selects on turnover rather than on binding. Every display technology works by the same rule: the protein binds the target, so it is retained and amplified. That suits binders such as antibodies and affinity ligands perfectly, but it is the wrong criterion for an enzyme, because an enzyme\'s value lies in turnover — converting one substrate and then releasing the product to convert the next. An efficient enzyme specifically does not cling to its product, so a binding-based selection would pick out precisely the enzymes with the worst product inhibition. Droplets fix this by enclosing one gene, its expressed protein and the substrate together in a water-in-oil compartment about two micrometres across. The enzyme works inside, and because the product cannot escape it accumulates, so the droplet becomes coloured or fluorescent in proportion to how much product that single enzyme made in the available time. You then sort droplets by fluorescence intensity and recover the gene inside. What you have measured is genuine catalytic efficiency. The requirement of on average one library member per droplet, set by Poisson-controlled dilution, is essential: two genes in one droplet and you cannot attribute the signal, and the genotype-phenotype link is broken.',
      answer_cn: '因为它筛的是周转而不是结合。所有展示技术遵循的都是同一条规则：蛋白结合靶标，于是被保留并扩增。这对抗体、亲和配体这类结合子完全适用，但对酶来说是错误的判据，因为酶的价值在于周转——转化一个底物、释放产物，再去转化下一个。高效的酶恰恰不会紧抓产物，所以基于结合的筛选选出来的正是产物抑制最严重的那些酶。液滴的解决办法是把一个基因、它表达出的蛋白和底物一起封进一个约 2 微米的油包水区室里。酶在里面工作，而由于产物出不去，它会不断积累，于是液滴的颜色或荧光强度正比于这一个酶在给定时间内产生了多少产物。然后按荧光强度分选液滴，回收里面的基因。你测量到的是真正的催化效率。「平均每个液滴只含一个文库成员」这个要求（通过泊松分布控制稀释度实现）是必需的：一个液滴里有两个基因，你就无法归因信号，基因型–表型连接就断了。'
    }
  ],
  oral: {
    q_en: 'You want to evolve a better enzyme. Why not use phage display, and what would you use instead?',
    q_cn: '你想进化一个更好的酶。为什么不用噬菌体展示？改用什么？',
    model_en: 'Because display technologies select for binding, not for catalysis, and that distinction is probably the most important one in this lecture. Phage display, ribosome display and mRNA display all operate on the same logic: the protein binds the immobilised target, so it is retained through the wash and then amplified. That is exactly right for binders — antibodies, aptamers, affinity ligands — but it is the wrong criterion for an enzyme. An enzyme\'s value lies in turnover: it converts one substrate molecule, releases the product, and moves on to the next. An efficient enzyme specifically does not cling to what it has made. So a selection rule of whoever binds most tightly survives would actively pick out the enzymes with the most severe product inhibition — you would be selecting the worst catalysts, not the best. What you use instead is in vitro compartmentalisation, droplet-based selection. You make an emulsion of roughly two-micrometre water-in-oil droplets using oil, detergents and an emulsifier, and you arrange the dilution so that on average only one library member is in each droplet. Each droplet is then effectively a cell-like compartment performing just the one reaction you care about. You supply the substrate, the enzyme works inside, and because the product cannot escape the droplet it accumulates — so the droplet becomes coloured or fluorescent in proportion to how much product that single enzyme made in the available time. You sort the droplets by fluorescence intensity or absorbance and recover the genes from the best ones. What you have measured is genuine catalytic efficiency, which is why the slide says plainly that unlike the display methods this is great for selection of catalysts, and why its application list is entirely enzymes — hydrolases, oxidoreductases, aldolases, transferases, isomerases. The one-member-per-droplet requirement is not optional: two genes in one droplet and you cannot tell which produced the signal, so the genotype-phenotype link is broken, and that is controlled by Poisson dilution.',
    checklist: ['Display selects binding; enzymes need turnover', 'An efficient enzyme releases its product, it does not cling to it', 'So binding selection would favour product inhibition — the worst enzymes', 'Instead use in vitro compartmentalisation, droplets', 'Water-in-oil emulsion, ~2 µm, from oil, detergents and emulsifier', 'On average one library member per droplet', 'Each droplet is a cell-like compartment doing one reaction', 'Product accumulates because it cannot escape', 'Droplet becomes coloured or fluorescent in proportion to turnover', 'Sort by fluorescence intensity or absorbance, recover the gene', 'Measures genuine catalytic efficiency', 'Applications: hydrolases, oxidoreductases, aldolases, transferases, isomerases', 'One member per droplet is essential — Poisson dilution']
  }
},

{
  id: '4-18',
  chapter: 4,
  lecture: 'Lecture 9-B',
  section: '4.18',
  enTitle: 'The methods compared',
  cnTitle: '各方法综合对比',
  slides: 'L9B s.20–21',
  coverage: 'full',
  coverageNote: 'The overview slide references Leemhuis et al. and the deck closes simply with an exhortation to be creative. This node exists to assemble the whole lecture into one comparison, which is the most likely form for a synthesis question.',
  summary: {
    en: 'Six methods, compared on where they run, how they link genotype to phenotype, how large a library they support, and what they are best at selecting. Three principles carry most of it: in vitro beats in vivo because it bypasses the transformation bottleneck, covalent beats non-covalent because selection conditions can be harsher, and display suits binders while droplets suit enzymes because catalysis is not binding.',
    cn: '六种方法，从「在哪里运行」「如何连接基因型与表型」「支持多大的文库」「最适合筛什么」四个维度对比。三条原则承载了其中大部分：体外优于体内，因为绕开了转化瓶颈；共价优于非共价，因为筛选条件可以更严苛；展示适合结合子而液滴适合酶，因为催化不等于结合。'
  },
  // Picture parts only, cut out of the slides by tools/extract_figures.py
  // and attached by tools/attach_figures.py from this node's own `slides`
  // citation. Uncaptioned by design — read them against the points above.
  slideFigures: [
    { slide: 'L9B s.20', src: 'img/figures/L9B_s20_1.webp' },
    { slide: 'L9B s.21', src: 'img/figures/L9B_s21_1.webp' }
  ],
  // mustKnow 常驻显示，explain 默认折叠。默认视图是一句话，不是一篇文章。
  mustKnow: '整讲收在一张对照表上，而选方法只看三个问题：**筛结合还是筛催化？文库要多大？选择条件有多苛刻？**\n\n' +
            '老师给这一讲的最后一句话是 **THINK AND BE CREATIVE**——这些方法是模板，不是清单。',
  skipIt: 'Leemhuis 2005 那张综述图的细节不用背。**第 9 讲没有 RECAP 可引**，这是判断——但**那三个选择判据要能当场用**，被问到「你会怎么筛」时它们就是答题框架。',
  explain: [
    {
      q: '所有这些方法，怎么用三个问题就选出来？',
      a: '**按顺序问，每一问都砍掉一批。**\n\n' +
         '**问题一：你要筛的是结合，还是催化？**\n\n' +
         '**催化** → **只能用液滴（区隔）**。展示技术的规则会选出最差的酶（第 4-17 节）。这一问就砍掉了大半选项。\n\n' +
         '**结合** → 继续。\n\n' +
         '**问题二：文库要多大？**\n\n' +
         '**10⁸ 以下** → 体内方法够用（细菌选择、噬菌体展示），而且噬菌体展示还白送「产物能自我扩增」这个优势（第 4-13 节）。\n\n' +
         '**10¹³ 以上** → **必须绕开细胞**（第 4-7 节那个断崖），用核糖体展示或 mRNA 展示。\n\n' +
         '**问题三：选择条件有多苛刻？**\n\n' +
         '**温和** → 核糖体展示更简单。\n\n' +
         '**要严苛洗涤、非生理条件、或者要先纯化** → **mRNA 展示（或 cDNA 展示）**，因为只有共价连接扛得住。\n\n' +
         '**三问下来，答案基本唯一。**\n\n' +
         '**而这三个问题正好对应这一讲的三条主线：**\n\n' +
         '**结合 vs 催化** → 选择压力施加在什么量上（第 4-17 节）。\n\n' +
         '**文库大小** → 那个 10⁸ 的断崖（第 4-7 节）。\n\n' +
         '**条件苛刻度** → 连接的牢固程度（第 4-11 节的三类绑法）。\n\n' +
         '**所以这张表不用背——它是从三条你已经理解的原理推出来的。**',
      takeaway: '先问筛结合还是催化（催化只能用液滴），再问库多大（10⁸ 是断崖），最后问条件多苛刻（决定连接要多牢）。'
    },
    {
      q: '老师最后写的「THINK AND BE CREATIVE，你总能想出更新更好的」，该怎么理解？',
      a: '**它不是一句励志口号，它是在说这些方法的性质：它们是模板，不是清单。**\n\n' +
         '**把这一讲的六七种方法回头看一遍，你会发现它们全都是同一个问题的不同答案：**\n\n' +
         '**「怎么让蛋白和它的基因待在一起？」**\n\n' +
         '细胞（天然区隔）、噬菌体颗粒（把蛋白搬到外面）、核糖体（不放手）、嘌呤霉素（焊死）、液滴（人工区隔）。\n\n' +
         '**每一个都是某个人某一天想出来的一个「办法」，而不是自然规律。**\n\n' +
         '**而它们全都来自同样的几块积木：**你已经学过的核糖体机制（第 3-2 节）、终止密码子和释放因子（第 3-10 节）、无细胞体系（第 3-1 节）、亲和层析的洗涤逻辑（第 2-29 节）、抗生素的作用机制（嘌呤霉素）。\n\n' +
         '**所以老师那句话的实际含义是：这些积木还能有别的拼法。**\n\n' +
         '**这也解释了为什么这一讲要花那么多篇幅讲原理而不是操作**（三类连接方式、10⁸ 的断崖、覆盖度公式、选择压力施加在哪）：\n\n' +
         '**记住六种方法，你只能在六种里挑。理解了那几条原理，你能判断一个没见过的新方法行不行，甚至自己拼一个。**\n\n' +
         '**口试里如果被问到一个课上没讲过的场景，这就是该拿出来的思路：先说清楚约束（要筛什么、库多大、条件多苛刻），再从三类连接方式里挑一个能满足约束的——哪怕你说的组合课上没出现过。**',
      takeaway: '六种方法都是同一个问题的不同答案，而且用的是同样几块积木。理解原理才能判断没见过的方法。'
    }
  ],
  points: [
    { term: 'In vivo bacterial selection', en: 'In vivo, linked by the cell compartment, library up to about 10^8, best for traits that can be tied to survival such as resistance or complementation.', cn: '体内，靠细胞区室连接，文库上限约 10⁸，最适合能与存活挂钩的性状，如抗性或功能互补。' },
    { term: 'Phage display', en: 'In vivo, linked by the virus particle as compartment, library about 10^10 to 10^11, best for binders such as antibodies and peptides.', cn: '体内，靠病毒颗粒作为区室连接，文库约 10¹⁰–10¹¹，最适合结合子，如抗体和多肽。' },
    { term: 'SELEX', en: 'In vitro, no linkage required since the nucleic acid is itself the phenotype, library about 10^14 to 10^15, best for nucleic acid aptamers.', cn: '体外，不需要连接（核酸本身就是表型），文库约 10¹⁴–10¹⁵，最适合核酸适配体。' },
    { term: 'Ribosome display', en: 'In vitro, non-covalent ternary complex, library about 10^12 to 10^13, best for binders under mild conditions.', cn: '体外，非共价三元复合物，文库约 10¹²–10¹³，最适合温和条件下的结合子筛选。' },
    { term: 'mRNA display', en: 'In vitro, covalent through puromycin, library about 10^13 to 10^14, best for binders including under demanding conditions.', cn: '体外，通过嘌呤霉素共价连接，文库约 10¹³–10¹⁴，最适合结合子，包括在苛刻条件下的筛选。' },
    { term: 'Droplet IVC', en: 'In vitro, artificial compartment, library about 10^9 to 10^10, best for catalysts.', cn: '体外，人工区室，文库约 10⁹–10¹⁰，最适合催化剂。' },
    { term: 'The closing message', en: 'Think and be creative — you can always come up with something new and better.', cn: '动脑筋，发挥创造力——你总能想出新的、更好的办法。' }
  ],
  beyondPoints: [
    { term: 'Principle one — in vitro beats in vivo on size', en: 'Because it bypasses the transformation bottleneck, the ceiling rises from about 10^8 to 10^13 or beyond. That single fact drove the development of all the in vitro methods.', cn: '因为绕开了转化瓶颈，上限从约 10⁸ 升到 10¹³ 甚至更高。仅这一个事实就推动了所有体外方法的发展。' },
    { term: 'Principle two — covalent beats non-covalent on conditions', en: 'A covalent fusion survives conditions that would dissociate a ternary complex, so selections can be run at physiological temperature, unusual pH, or with detergents. You buy freedom of conditions with operational complexity.', cn: '共价融合能承受会让三元复合物解离的条件，所以筛选可以在生理温度、特殊 pH 或含去污剂的条件下进行。你用操作复杂度换来了条件的自由。' },
    { term: 'Principle three — binders versus catalysts', en: 'Use display for binders and droplets for enzymes, because catalysis is not binding. This is the distinction most likely to be tested, since it is conceptual rather than factual.', cn: '筛结合子用展示，筛酶用液滴，因为催化不等于结合。这是最可能被考到的区分，因为它是概念性的而不是事实性的。' },
    { term: 'Where flexizymes reconnect', en: 'The cyclic peptide libraries built with flexizymes in the cell-free lecture are selected by exactly these methods — the RaPID system is flexizyme chemistry combined with mRNA display. The two lectures are designed to meet.', cn: '无细胞那一讲里用 flexizyme 构建的环肽文库，正是用这里的方法来筛选的——RaPID 系统就是 flexizyme 化学加上 mRNA 展示。这两讲是被设计成要在此相遇的。' }
  ],
  terms: [
    { en: 'Library ceiling by method', cn: '各方法的文库上限', def_en: 'Bacteria 10^8, phage 10^10-10^11, ribosome display 10^12-10^13, mRNA display 10^13-10^14, SELEX 10^14-10^15, droplets 10^9-10^10.', def_cn: '细菌 10⁸，噬菌体 10¹⁰–10¹¹，核糖体展示 10¹²–10¹³，mRNA 展示 10¹³–10¹⁴，SELEX 10¹⁴–10¹⁵，液滴 10⁹–10¹⁰。' },
    { en: 'RaPID system', cn: 'RaPID 系统', def_en: 'Flexizyme-built cyclic peptide libraries selected by mRNA display — the point where the cell-free and selection lectures meet.', def_cn: '用 flexizyme 构建、再用 mRNA 展示筛选的环肽文库——无细胞那一讲与本讲交汇的地方。' }
  ],
  quiz: [
    { type: 'mcq',
      q_en: 'Which method supports the largest library, and why?',
      q_cn: '哪种方法支持最大的文库？为什么？',
      options: ['Phage display, because each round amplifies the library in bacteria', 'SELEX, because genotype and phenotype are the same molecule', 'Droplet IVC, because millions of tiny droplets fit in one emulsion', 'In vivo bacterial selection, because cells grow to huge numbers'],
      answer: 1,
      optionRefs: { 0: '4-13', 2: '4-17', 3: '4-12' },
      why_en: 'SELEX reaches 10^14 to 10^15. It is in vitro, so no transformation bottleneck, and it needs no linkage machinery at all — no ribosome, no puromycin linker, no compartment — because genotype and phenotype are the same molecule.',
      why_cn: 'SELEX 可达 10¹⁴–10¹⁵。它是体外的，所以没有转化瓶颈；而且完全不需要任何连接装置——不需要核糖体、不需要嘌呤霉素连接体、不需要区室——因为基因型和表型是同一个分子。' },
    { type: 'mcq',
      q_en: 'Which two methods would you compare to illustrate the covalent versus non-covalent principle?',
      q_cn: '要说明共价与非共价这条原则，你会比较哪两种方法？',
      options: ['Phage display and SELEX', 'Ribosome display and mRNA display', 'Droplet IVC and bacterial selection', 'SELEX and droplet IVC'],
      answer: 1,
      why_en: 'They differ in exactly this respect and in little else — both are in vitro display of proteins. The non-covalent ternary complex locks you into low temperature and high magnesium; the covalent puromycin fusion works under almost any condition.',
      why_cn: '它们恰恰在这一点上不同，其余差别很小——两者都是蛋白的体外展示。非共价的三元复合物把你锁在低温高镁；共价的嘌呤霉素融合体几乎任何条件都能用。' },
    { type: 'mcq',
      q_en: 'You want to evolve a hydrolase. Which method?',
      q_cn: '你想进化一个水解酶。用哪种方法？',
      options: ['Phage display, with the library shown on the phage coat', 'mRNA display, with each protein fused to its own message by puromycin', 'Droplet in vitro compartmentalisation, one gene per droplet', 'SELEX, with rounds of binding, elution and RT-PCR on RNA'],
      answer: 2,
      optionRefs: { 0: '4-13', 1: '4-16', 3: '4-14' },
      why_en: 'Hydrolases appear explicitly in the IVC application list. Display would select for product binding rather than turnover, which is the wrong criterion for a catalyst.',
      why_cn: '水解酶明确出现在 IVC 的应用列表中。展示技术筛的是产物结合而不是周转，这对催化剂来说是错误的判据。' },
    { type: 'short',
      q_en: 'Summarise the whole lecture in three principles.',
      q_cn: '用三条原则总结整讲。',
      accept: ['in vitro', 'transformation', 'covalent', 'conditions', 'binder', 'catalyst'],
      answer_en: 'First, in vitro beats in vivo on library size, because it bypasses the transformation bottleneck — the ceiling rises from about ten to the eight in cells to ten to the thirteen or beyond in vitro, and that single fact motivated the development of every in vitro method. Second, covalent beats non-covalent on the range of usable conditions: ribosome display\'s non-covalent ternary complex locks you into low temperature and high magnesium, whereas mRNA display\'s puromycin fusion survives almost anything, so you can select at physiological temperature, unusual pH or with detergents — you buy that freedom with operational complexity. Third, use display for binders and droplets for catalysts, because catalysis is not binding: display retains whatever binds tightest, which for an enzyme would select the worst product inhibition, whereas a droplet measures how much product one enzyme made and therefore reports genuine turnover.',
      answer_cn: '第一，体外在文库规模上胜过体内，因为它绕开了转化瓶颈——上限从细胞里的约 10⁸ 升到体外的 10¹³ 甚至更高，仅这一个事实就推动了所有体外方法的发展。第二，共价在可用条件范围上胜过非共价：核糖体展示的非共价三元复合物把你锁在低温高镁，而 mRNA 展示的嘌呤霉素融合体几乎什么条件都能承受，所以你可以在生理温度、特殊 pH 或含去污剂的条件下筛选——这份自由是用操作复杂度换来的。第三，筛结合子用展示，筛催化剂用液滴，因为催化不等于结合：展示保留的是结合最牢的，用在酶上会选出产物抑制最严重的；而液滴测量的是一个酶产生了多少产物，因此反映的是真正的周转。'
    }
  ],
  oral: {
    q_en: 'Compare all the selection methods you have covered.',
    q_cn: '把学过的所有筛选方法比较一下。',
    model_en: 'I would compare them on four axes — in vivo or in vitro, how the genotype-phenotype link is made, the library ceiling, and what each is best at selecting. In vivo bacterial selection uses the cell as the compartment, reaches about ten to the eight, and suits any trait you can tie to survival, such as antibiotic resistance or auxotroph complementation. Phage display uses the virus particle as compartment, reaches ten to the ten or eleven, and is the classic method for binders — antibodies and peptides. SELEX is in vitro and needs no linkage at all, because for an aptamer the nucleic acid is both genotype and phenotype; it reaches ten to the fourteen or fifteen, the largest of any method, but only produces nucleic acid binders. Ribosome display is in vitro with a non-covalent ternary complex, reaching ten to the twelve or thirteen, good for binders but restricted to mild conditions. mRNA display is in vitro and covalent through puromycin, reaching ten to the thirteen or fourteen, good for binders under demanding conditions too. And droplet in vitro compartmentalisation uses an artificial compartment, reaches about ten to the nine or ten, and is the method for catalysts. Three principles carry most of that. First, in vitro beats in vivo on size, because it bypasses the transformation bottleneck — that is the jump from ten to the eight up to ten to the thirteen, and it is what motivated all the in vitro methods in the first place. Second, covalent beats non-covalent on conditions: a covalent fusion survives what would dissociate a ternary complex, so you can select at physiological temperature or with detergents, and you pay for that in operational complexity. Third, display for binders and droplets for catalysts, because catalysis is not binding — display retains whatever holds on tightest, which for an enzyme means selecting the worst product inhibition, whereas a droplet reports how much product was actually made. It is also worth noting where this connects back: the cyclic peptide libraries built with flexizymes in the cell-free lecture are selected by exactly these methods, since the RaPID system is flexizyme chemistry combined with mRNA display.',
    checklist: ['Four axes: in vivo/in vitro, linkage, library ceiling, best for what', 'Bacteria: cell compartment, 10^8, survival-linked traits', 'Phage display: virus particle, 10^10-10^11, binders', 'SELEX: no linkage needed, 10^14-10^15, nucleic acid aptamers', 'Ribosome display: non-covalent, 10^12-10^13, binders, mild conditions only', 'mRNA display: covalent, 10^13-10^14, binders under harsh conditions', 'Droplet IVC: artificial compartment, 10^9-10^10, catalysts', 'Principle 1: in vitro beats in vivo, bypassing the transformation bottleneck', 'Principle 2: covalent beats non-covalent on usable conditions', 'Principle 3: display for binders, droplets for catalysts', 'Connects back: RaPID is flexizyme chemistry plus mRNA display']
  }
}

]);
