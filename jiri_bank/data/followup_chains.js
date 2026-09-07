/* =========================================================================
   CHAIN 层 —— jiri_bank 唯一缺的一层。

   审计结论（state_exam/JIRIBANK_DEPTH_AUDIT.md，2026-09-05）：
     94 道整卷题  = CARD（横向铺开）      ✅ 已有
     189 条追问   = SIB（同一页覆盖点）    ✅ 已有
     CHAIN（纵向下钻 ≥ 5 层）             ❌ 零 ← 这个文件

   实测：现有追问咬住上一条追问的比例只有 12%，紧贴兄弟层基线（0%），
   离真下钻（100%）很远。所以这里不重写任何卡，只在高权重题上加链。

   写作规格：HANDOFF_stateexam_追问.md §4，判据是结论 7 + 结论 8——
     结论 7  第 N 层的问题必须由第 N−1 层答案里的某个词构成（不是同一话题
             里的另一个问题，是拿那个词本身去问）。圈不出词 = 到底了，terminate。
     结论 8  全链只在生化 / 蛋白质结构 / 分子生物学 / 病毒学之内。
             碰到学科边界在生物学这一侧收手，不要滑进物理化学。

   每条链必须写明 parentCard（挂在哪道题）和 drillWord（咬住那道题答案里
   的哪个词）。接不上父卡的词，就不是那张卡的链。
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.chains = (window.PESB.chains || []).concat([

{
  id: 'JCHAIN-01',
  parentCard: 's1-lab-6-tagging-surface-receptor',
  parentTitle: 'S1 Lab 6 · 给细胞表面的受体打 tag',
  drillWord: 'topology',
  title: '拓扑结构是谁决定的',
  origin: '父卡答案第一句就是 "The whole answer is topology"——那个词没有交代，' +
          '所以它是必然被追的一刀（结论 5）。这条链从它往下钻。' +
          '全程在膜蛋白 / 蛋白质结构内，最后一层落到你自己的表面染色读数。',
  root_en: 'You said the whole answer is topology. What decides the topology?',
  root_cn: '你说整道题的核心是拓扑结构。那拓扑结构是谁决定的？',

  levels: [
    {
      n: 'V1',
      q_en: 'What decides the topology?',
      q_cn: '拓扑结构是谁决定的？',
      answer_en: 'The signal peptide and the transmembrane segment. The signal peptide starts translocation into the ER; the transmembrane segment stops it and anchors the chain.',
      answer_cn: '信号肽和跨膜段。信号肽启动向 ER 的转运，跨膜段终止转运并把肽链锚在膜上。',
      why_cn: '答案必须是**两个序列元件**，不是"细胞决定的"这种没有抓手的说法。' +
              '一个负责起（signal peptide 把新生肽送进 ER），一个负责停' +
              '（transmembrane segment 卡住不再往里送，顺便把链固定下来）。\n\n' +
              '说出这两件东西，你就把"tag 放哪"从经验问题变成了序列问题——' +
              '而这正是父卡那句"标签必须放在信号肽之后"的地基。\n\n' +
              '**说完这句，下一个被咬住的词是 transmembrane segment。**',
      wrong: {
        kind: 'thin',
        say: 'The cell sorts it into the membrane.',
        belongs: '这是把现象重述一遍，没给任何机制——"细胞会处理好"不是答案。',
        cost: '他必然接一句"靠什么"，而你连 signal peptide 都还没说出来。' +
              '而且父卡后面所有关于切割位点的话都失去了地基。'
      },
      terms: [
        { en: 'signal peptide', cn: 'N 端一小段疏水序列，把新生肽引进分泌途径（ER）。任务完成后被 signal peptidase 切掉——所以放在它前面的 tag 会跟着一起丢。' },
        { en: 'transmembrane segment', cn: '一段约 20 个疏水残基的 α 螺旋，穿过膜并把蛋白锚在膜上。它同时是"停止转运"的信号。' },
        { en: 'translocation', cn: '新生肽穿过 ER 膜进入内腔的过程。跨膜段一出现就停下来，蛋白因此有一半留在膜外侧。' }
      ]
    },
    {
      n: 'V2',
      q_en: 'What decides which end of that transmembrane segment faces the cytoplasm?',
      q_cn: '那个跨膜段的哪一端朝向胞质，是由什么决定的？',
      answer_en: 'The positive-inside rule — the flank richer in arginine and lysine stays cytoplasmic. The translocon orients the helix by that charge difference.',
      answer_cn: 'positive-inside 规则——两侧侧翼里富含 arginine 和 lysine 的那一侧留在胞质。translocon 按这个电荷差把螺旋定向。',
      why_cn: '**被咬住的词：transmembrane segment。**这一层不问新东西，问的是上一层' +
              '那个元件**朝哪个方向插**——同一个跨膜段插反了，胞外域就变成胞内域，' +
              'tag 全白搭。\n\n' +
              '判据是**电荷**，不是疏水性：两侧侧翼谁的 Arg/Lys 多，谁留在胞质。\n\n' +
              '**下一个被咬住的是 arginine and lysine。**',
      wrong: {
        kind: 'level',
        say: 'The signal peptide decides it.',
        belongs: '答的是 V1 那一层——signal peptide 决定的是"进不进 ER"，不是"螺旋朝哪边"。',
        cost: '两件事都真，但混在一起说，等于承认你没把起始和定向分开想过。'
      },
      terms: [
        { en: 'positive-inside rule', cn: '膜蛋白拓扑的经验规则：跨膜段两侧，带正电残基多的那一侧留在胞质。预测拓扑主要靠它。' },
        { en: 'translocon', cn: 'ER 膜上的蛋白转运通道（Sec61）。新生肽从这里穿膜，跨膜段从这里侧向滑进脂双层。' }
      ]
    },
    {
      n: 'V3',
      q_en: 'Why do arginine and lysine keep that flank on the cytoplasmic side?',
      q_cn: '为什么 arginine 和 lysine 会把那一侧留在胞质？',
      answer_en: 'A charged side chain cannot cross the hydrophobic core of the bilayer. Whichever flank carries them is the one that never gets translocated.',
      answer_cn: '带电侧链穿不过脂双层的疏水核心。带着它们的那一侧，就是永远转运不过去的那一侧。',
      why_cn: '**被咬住的词：arginine and lysine。**这一层是"为什么 X 不能"那一刀——' +
              '和同学转述的氢键链第三层同一个形态，纵向追问最典型的样子。\n\n' +
              '答案不是"规则就是这样"，是**物理上过不去**：带电基团穿不过疏水核心，' +
              '所以带着它们的那一端只能留在原处。规则是结果，不是原因。\n\n' +
              '**下一个被咬住的是 hydrophobic core。**',
      wrong: {
        kind: 'thin',
        say: 'Because the rule says so.',
        belongs: '把经验规则当理由——循环论证。他问的正是这条规则为什么成立。',
        cost: '这条链上唯一真正的机制就在这一层，答规则等于把它扔了。'
      },
      terms: [
        { en: 'hydrophobic core', cn: '脂双层中间那层脂肪酸尾巴，约 30 Å 厚，没有水。带电和极性基团进不去。' }
      ]
    },
    {
      n: 'V4',
      q_en: 'What makes the hydrophobic core impassable for a charged side chain?',
      q_cn: '疏水核心为什么让带电侧链过不去？',
      answer_en: 'Burying a charge strips its hydration shell with nothing to replace it — the same desolvation penalty that keeps charges out of a protein core.',
      answer_cn: '把电荷埋进去等于剥掉它的水合层，而里面没有任何东西能替代——跟把带电残基埋进蛋白内核是同一笔去溶剂化代价。',
      why_cn: '**被咬住的词：hydrophobic core。**答案要给**代价**，不要给"不相容"这种描述。\n\n' +
              '带电基团在水里被一圈水分子稳定着。进疏水核心就要脱掉这层水，' +
              '而膜里没有能替它成键的伙伴——这笔账付不起。\n\n' +
              '**这一层同时是你自己数据的那把尺子**：DEEP-02 讲 buried 替换为什么贵，' +
              '用的就是这同一条 desolvation penalty。膜里和蛋白内核里，是同一件事。',
      wrong: {
        kind: 'weak',
        say: 'Because oil and water do not mix.',
        belongs: '比喻不算错，但它只是把现象换个说法，没给出能量上的理由。',
        cost: '他会立刻追"具体贵在哪"，而 desolvation 这个词你本来说得出。'
      },
      terms: [
        { en: 'desolvation penalty', cn: '把一个能跟水成键的极性/带电基团脱水、埋进疏水环境所要付的能量代价。' },
        { en: 'hydration shell', cn: '带电或极性基团周围那一圈被它取向排列的水分子。它才是"溶解"的实体。' }
      ]
    },
    {
      n: 'V5',
      q_en: 'If that penalty is so high, how does a transmembrane helix pay it?',
      q_cn: '既然这笔代价这么高，跨膜螺旋是怎么付的？',
      answer_en: 'It does not — it is built from residues that need no hydration, and the backbone amides hydrogen-bond to each other inside the helix.',
      answer_cn: '它不付——跨膜螺旋由不需要水合的残基组成，而主链酰胺在螺旋内部彼此形成氢键。',
      why_cn: '**被咬住的词：desolvation penalty。**这一层问的是上一层的反面：' +
              '既然贵，为什么跨膜段能过？\n\n' +
              '两半都要说。**侧链**是疏水的，本来就不需要水合层，没有代价可付。' +
              '**主链**是麻烦的地方——每个肽键都有极性的 N–H 和 C=O，' +
              '而 α 螺旋让它们在螺旋内部互相成氢键，等于自带溶剂化。\n\n' +
              '**跨膜段之所以是螺旋，就是这个原因**——不是巧合，是唯一能把主链极性藏起来的构象。',
      wrong: {
        kind: 'thin',
        say: 'Because those residues are hydrophobic.',
        belongs: '只答了侧链那一半，完全没碰主链。',
        cost: '而主链才是真正的难点——每个肽键都是极性的。答不到这一点，' +
              '"为什么必须是螺旋"就答不出来。'
      },
      terms: [
        { en: 'backbone amide', cn: '肽键上的 N–H 和 C=O，永远是极性的，跟侧链疏不疏水无关。' },
        { en: 'α-helix', cn: '主链 N–H 与四个残基之外的 C=O 成氢键的螺旋构象。在膜里，它的作用是把主链极性自我满足掉。' }
      ]
    },
    {
      n: 'V6',
      q_en: 'Can you predict from sequence which residues will insert as a helix?',
      q_cn: '你能只凭序列预测哪些残基会以螺旋的形式插进膜吗？',
      answer_en: 'There are hydrophobicity scales that score it, but I would not trust one over an experiment — I read insertion from surface staining instead.',
      answer_cn: '有疏水性标度可以打分，但我不会拿它去压过实验——我是用表面染色来读插没插进去的。',
      why_cn: '**这一层是边界，而且要按 §4 那条软规矩的正确方式收手**：' +
              '不是空手说不知道，是先把手上确实有的那一截交出来，再划线。\n\n' +
              '你有的是**实测读数**：不透化的完整细胞染 tag，有信号就说明表位在外侧' +
              '（父卡第二条追问就是这个）。你没有的是从序列算插入自由能。\n\n' +
              '**把线画在生物学这一侧**（结论 8）——再往下是 force field 和插入' +
              '热力学，那不是这场考试要问的，也不是你能辩护的。',
      wrong: {
        kind: 'weak',
        say: 'Yes, you just run a hydrophobicity plot.',
        belongs: '把一个打分工具说成了预测。标度能提示，不能定论——边界蛋白经常算错。',
        cost: '他一定接"那算错了你怎么知道"。承认工具的限度、并给出你会怎么测，' +
              '比硬说能算强得多。'
      },
      terms: [
        { en: 'hydrophobicity scale', cn: '给每个氨基酸打疏水性分数的表（Kyte-Doolittle 之类），滑窗求和用来找候选跨膜段。是提示，不是判定。' },
        { en: 'surface staining', cn: '用抗 tag 抗体染完整、未透化的细胞。有信号 = 表位在胞外。这是你手上真正的读数。' }
      ]
    }
  ],

  branches: [
    { q_en: 'Where else does the same argument show up?',
      q_cn: '同一条道理还用在哪？',
      a_cn: '任何"带电基团不进疏水环境"的场合：蛋白内核为什么保守（DEEP-02 的 V5）、' +
            '离子通道为什么需要选择性过滤器替水做配位、以及你自己的 chimera 里' +
            '埋藏位点替换为什么容易做死。同一把尺子，三个场景。' },
    { q_en: 'So why is the signal peptide cleaved but the transmembrane segment not?',
      q_cn: '为什么信号肽会被切掉，跨膜段不会？',
      a_cn: '因为切与不切由**有没有 signal peptidase 识别位点**决定，不由疏水性决定。' +
            '两段都疏水，但只有信号肽后面带着那个位点。这一条直接回到父卡：' +
            'tag 必须放在切割位点之后。' },
    { q_en: 'Does a tag on the extracellular domain change the topology?',
      q_cn: '把 tag 放在胞外域上会改变拓扑吗？',
      a_cn: '一般不会——拓扑由信号肽和跨膜段决定，tag 只是加长了胞外那一段。' +
            '但如果 tag 带很多正电荷并且离跨膜段很近，理论上可能干扰定向' +
            '（positive-inside）。所以 linker 要短而柔性，位置要离跨膜段远一点。' }
  ],

  terminate: {
    cn: '到"跨膜螺旋靠主链自身氢键解决极性"为止是可辩护的。再往下（插入自由能、' +
        'ΔG 预测器、force field）就收手：',
    en: 'Predicting insertion energetics from sequence is not something I can defend — I know it as a desolvation problem, and I read the outcome from staining.'
  },

  skipIt: '不用背任何疏水性标度的具体数值，不用背 Sec61 复合物的亚基组成，' +
          '不用背跨膜段的确切残基数——说得出"约 20 个疏水残基、跨约 30 Å"就够。'
}

]);
