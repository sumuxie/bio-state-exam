/* =========================================================================
   SHEET 3 — Biochemistry, questions 1-20.
   Questions already answered under S1/S2 (DNA vs RNA, glycolysis, levels of
   protein structure) carry both sheet refs on their existing entry.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's3-bio-1-nucleic-acid-structure',
  sheets: 'S3 Bio 1', weight: 1,
  stem_en: 'Describe the structure and function of nucleic acids.',
  stem_cn: '描述核酸的结构与功能。',
  answer_en: 'Build it up in levels.\n\n' +
             'The **monomer** is a nucleotide: a **nitrogenous base**, a **pentose sugar**, and a **phosphate**. Bases are purines (adenine, guanine — two rings) and pyrimidines (cytosine, thymine in DNA, uracil in RNA — one ring).\n\n' +
             'The **polymer** is joined by **phosphodiester bonds** between the 3-prime hydroxyl of one sugar and the 5-prime phosphate of the next, which gives the chain a direction: **5-prime to 3-prime**. The backbone is sugar-phosphate and is uniformly negatively charged — which is why nucleic acids separate by size in electrophoresis without any charge-imposing agent.\n\n' +
             '**DNA structure**: two antiparallel strands in a right-handed double helix, bases paired inside by hydrogen bonding — **A with T (two bonds), G with C (three)** — with base stacking contributing much of the stability. Complementarity is what makes replication and repair possible.\n\n' +
             '**Function**: DNA stores and transmits genetic information; RNA expresses it, as mRNA carrying the message, tRNA as adaptor, rRNA as the catalytic core of the ribosome, plus regulatory RNAs.',
  answer_cn: '按层次搭起来讲。\n\n' +
             '**单体**是核苷酸：一个**含氮碱基**、一个**戊糖**、一个**磷酸**。碱基分嘌呤（腺嘌呤、鸟嘌呤——双环）和嘧啶（胞嘧啶、DNA 中的胸腺嘧啶、RNA 中的尿嘧啶——单环）。\n\n' +
             '**多聚体**由**磷酸二酯键**连接：前一个糖的 3\' 羟基与后一个的 5\' 磷酸相连，这使链具有方向性：**5\' 到 3\'**。骨架是糖-磷酸，带均一的负电荷——这正是核酸在电泳中不需要任何赋予电荷的试剂就能按大小分离的原因。\n\n' +
             '**DNA 结构**：两条反平行链构成右手双螺旋，碱基在内部通过氢键配对——**A 与 T（两个氢键），G 与 C（三个）**——而碱基堆积贡献了大部分稳定性。互补性正是复制和修复得以可能的原因。\n\n' +
             '**功能**：DNA 储存并传递遗传信息；RNA 表达它——mRNA 携带信息、tRNA 作接头、rRNA 是核糖体的催化核心，另有各种调控 RNA。',
  followups: [
    { q_en: 'Why is a GC-rich region harder to melt?',
      q_cn: '为什么富含 GC 的区域更难解链？',
      a_en: 'Because G-C pairs make three hydrogen bonds to A-T\'s two, and GC stacking is also more favourable. That is why GC content sets the melting temperature and therefore primer annealing temperature.',
      a_cn: '因为 G-C 之间是三个氢键而 A-T 是两个，而且 GC 的碱基堆积也更有利。这就是 GC 含量决定熔解温度、进而决定引物退火温度的原因。' },
    { q_en: 'Why does the backbone charge matter practically?',
      q_cn: '骨架带电在实际中为什么重要？',
      a_en: 'It is uniform per unit length regardless of sequence, so in a gel every fragment has the same charge-to-mass ratio and migration depends on size alone — no SDS equivalent is needed.',
      a_cn: '它每单位长度的电荷与序列无关且均一，所以在胶上每个片段的电荷/质量比相同，迁移只取决于大小——不需要类似 SDS 的东西。',
      node: '1-7' }
  ]
},

{
  id: 's3-bio-3-dna-replication',
  sheets: 'S3 Bio 3', weight: 1,
  stem_en: 'Explain the process of DNA replication.',
  stem_cn: '解释 DNA 复制的过程。',
  answer_en: 'It is **semi-conservative**: each daughter molecule has one parental and one new strand — Meselson and Stahl.\n\n' +
             'Initiation at an **origin**: helicase unwinds the duplex, single-strand binding proteins keep it open, and topoisomerase relieves the supercoiling that unwinding creates ahead of the fork.\n\n' +
             'Elongation has one constraint that generates everything else: **polymerase can only extend 5-prime to 3-prime and cannot start a chain**. So **primase** lays down an RNA primer, and because the two strands are antiparallel, one — the **leading strand** — is made continuously toward the fork, while the **lagging strand** is made backwards in short **Okazaki fragments**.\n\n' +
             'Completion: the RNA primers are removed and replaced with DNA, and **ligase** seals the remaining nicks.\n\n' +
             'Fidelity comes from three layers: base pairing itself, **proofreading** by the polymerase\'s 3-prime to 5-prime exonuclease, and post-replicative **mismatch repair**. Together they give roughly one error per billion bases.',
  answer_cn: '它是**半保留**的：每个子代分子含一条亲本链和一条新链——Meselson 和 Stahl 的实验。\n\n' +
             '在**复制起点**起始：解旋酶解开双链，单链结合蛋白维持其打开状态，拓扑异构酶消除解旋在叉前方造成的超螺旋。\n\n' +
             '延伸只有一条约束，而其余一切都由它产生：**聚合酶只能沿 5\'→3\' 延伸，而且不能从头起始一条链**。所以**引发酶**先铺一段 RNA 引物；又因为两条链反平行，其中一条——**前导链**——朝复制叉方向连续合成，而**后随链**只能反向合成一段段短的**冈崎片段**。\n\n' +
             '收尾：去除 RNA 引物并用 DNA 替换，再由**连接酶**封上剩余的切口。\n\n' +
             '保真度来自三层：碱基配对本身、聚合酶 3\'→5\' 外切酶的**校对**、以及复制后的**错配修复**。三者合起来大约是每十亿个碱基一个错误。',
  followups: [
    { q_en: 'Why does the lagging strand exist at all?',
      q_cn: '后随链为什么会存在？',
      a_en: 'Because the two strands are antiparallel but polymerase only works 5-prime to 3-prime. One strand therefore runs the wrong way relative to fork movement and must be made in short pieces backwards.',
      a_cn: '因为两条链反平行，而聚合酶只能沿 5\'→3\' 工作。于是相对于复制叉前进方向，有一条链的方向是反的，只能反向分段合成。' },
    { q_en: 'What problem does this create at the end of a linear chromosome?',
      q_cn: '这在线性染色体末端造成什么问题？',
      a_en: 'The end-replication problem: the final lagging-strand primer cannot be replaced, so a little is lost each round. Telomeres and telomerase are the answer to it.',
      a_cn: '末端复制问题：后随链最末端的引物无法被替换，所以每一轮都会丢失一点。端粒和端粒酶就是对它的解决方案。',
      node: '4-4' }
  ],
  sourceNodes: ['4-4']
},

{
  id: 's3-bio-4-role-of-enzymes',
  sheets: 'S3 Bio 4', weight: 1,
  stem_en: 'What is the role of enzymes in biochemical reactions?',
  stem_cn: '酶在生化反应中起什么作用？',
  answer_en: '**Enzymes are biological catalysts: they accelerate a reaction by lowering its activation energy, without being consumed and without changing the equilibrium.**\n\n' +
             'The second half of that sentence is what earns marks. An enzyme changes **how fast** equilibrium is reached, not **where** it lies — it cannot make an unfavourable reaction favourable, and it accelerates forward and reverse equally.\n\n' +
             'Mechanism: the enzyme binds substrate in an **active site** and **stabilises the transition state** rather than the substrate. That is the key idea — binding the transition state more tightly than the ground state is what lowers the barrier. Contributions come from proximity and orientation of substrates, acid-base catalysis, covalent catalysis and metal ions.\n\n' +
             'Two properties to name: enormous **rate enhancement**, often a million-fold or more, and **specificity**, both for substrate and for the reaction performed.\n\n' +
             'And they are **regulated** — allosterically, by covalent modification, or by controlling how much enzyme is present — which is what makes metabolism controllable rather than merely fast.',
  answer_cn: '**酶是生物催化剂：通过降低活化能加速反应，自身不被消耗，也不改变平衡。**\n\n' +
             '这句话的后半截才是得分点。酶改变的是达到平衡的**速度**，而不是平衡的**位置**——它不能把不利的反应变成有利的，而且对正反应和逆反应加速相同。\n\n' +
             '机制：酶在**活性位点**结合底物，并**稳定过渡态**而不是稳定底物。这是关键思想——对过渡态的结合比对基态更紧，正是降低能垒的原因。贡献来自底物的邻近效应与定向、酸碱催化、共价催化和金属离子。\n\n' +
             '要点名两个性质：巨大的**速率提升**，常常是百万倍以上；以及**特异性**，既对底物特异，也对所催化的反应特异。\n\n' +
             '而且它们是**受调控的**——通过别构、共价修饰，或者控制酶的数量——这正是代谢之所以可控而不只是快的原因。',
  followups: [
    { q_en: 'Can an enzyme make an endergonic reaction proceed?',
      q_cn: '酶能让一个吸能反应进行吗？',
      a_en: 'Not on its own. It only speeds up approach to equilibrium. Cells drive unfavourable reactions by coupling them to a favourable one, typically ATP hydrolysis.',
      a_cn: '它自己不能。它只加速趋向平衡的过程。细胞是通过把不利反应与有利反应偶联来驱动的，通常是 ATP 水解。' },
    { q_en: 'Why stabilise the transition state rather than the substrate?',
      q_cn: '为什么要稳定过渡态而不是底物？',
      a_en: 'Because binding the substrate too tightly deepens the starting well and raises the barrier. Lowering the barrier requires binding the transition state more tightly than the ground state.',
      a_cn: '因为把底物结合得太紧会让起始的势阱更深、能垒更高。要降低能垒，就必须对过渡态的结合比对基态更紧。' }
  ]
},

{
  id: 's3-bio-5-enzyme-active-site',
  sheets: 'S3 Bio 5', weight: 1,
  stem_en: 'Describe the structure of an enzyme and the active site.',
  stem_cn: '描述酶的结构和活性位点。',
  answer_en: 'An enzyme is a protein with the usual four levels of structure, and the point to make is that **the active site is a product of the tertiary fold**: the residues that form it are usually far apart in sequence and are brought together only by folding. That is why denaturation abolishes activity while leaving the sequence intact.\n\n' +
             'The **active site** is typically a small **cleft or pocket**, a tiny fraction of the total volume, and it has two functionally distinct parts: **binding residues** that give substrate specificity, and **catalytic residues** that perform the chemistry.\n\n' +
             'It is usually **hydrophobic**, which excludes water and raises the reactivity of the polar groups within it.\n\n' +
             'Binding is often described by **induced fit** rather than lock-and-key: the enzyme changes shape on binding, and it is that adjusted conformation that is complementary to the **transition state**.\n\n' +
             'Many enzymes also need a **cofactor** — a metal ion, or a coenzyme such as NAD or a vitamin derivative — sitting in or beside the active site. Some carry a separate **allosteric site**, physically distinct, where a regulator binds.',
  answer_cn: '酶是蛋白，具有通常的四级结构层次，而要点在于**活性位点是三级折叠的产物**：构成它的残基在序列上往往相距很远，只有靠折叠才被聚到一起。这正是变性会消除活性、而序列却完好无损的原因。\n\n' +
             '**活性位点**通常是一个小的**裂缝或口袋**，只占总体积极小的一部分，而且有两个功能上不同的部分：赋予底物特异性的**结合残基**，以及执行化学反应的**催化残基**。\n\n' +
             '它通常是**疏水的**，这排除了水分子，并提高了其中极性基团的反应性。\n\n' +
             '结合方式常用**诱导契合**而不是锁钥模型来描述：酶在结合时改变构象，而正是这个调整后的构象与**过渡态**互补。\n\n' +
             '许多酶还需要**辅因子**——金属离子，或者 NAD、维生素衍生物这类辅酶——位于活性位点内或旁边。有些酶还带有一个物理上独立的**别构位点**，供调节物结合。',
  followups: [
    { q_en: 'Why does heat destroy enzyme activity?',
      q_cn: '为什么加热会破坏酶活性？',
      a_en: 'Because the active site is held together by non-covalent interactions in the folded state. Heat disrupts them, the fold collapses, the catalytic residues are no longer positioned, and activity is lost even though the sequence is unchanged.',
      a_cn: '因为活性位点是靠折叠状态下的非共价相互作用维持的。加热破坏这些作用，折叠塌陷，催化残基不再就位，即使序列没变，活性也没了。',
      node: '5-1' },
    { q_en: 'Why is histidine so common in active sites?',
      q_cn: '为什么活性位点里组氨酸特别常见？',
      a_en: 'Its pKa is near physiological pH, so it can donate and accept a proton within the same catalytic cycle — acting as both acid and base without the cell changing its pH.',
      a_cn: '它的 pKa 接近生理 pH，所以能在同一个催化循环中给出并接受质子——既当酸又当碱，而细胞不必改变自身 pH。' }
  ],
  sourceNodes: ['5-1']
},

{
  id: 's3-bio-6-enzyme-inhibition',
  sheets: 'S3 Bio 6', weight: 1,
  stem_en: 'What are the different types of enzyme inhibition?',
  stem_cn: '酶抑制有哪些类型？',
  svg: '<svg viewBox="0 0 760 330" role="img" aria-label="Lineweaver-Burk plots for three inhibition types"> <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">  <text x="126" y="22" font-size="12" text-anchor="middle" font-weight="600">Competitive</text> <text x="126" y="37" font-size="10" text-anchor="middle" class="dim">竞争性</text> <line x1="40" y1="250" x2="230" y2="250" stroke-width="1.8"/> <line x1="126" y1="60" x2="126" y2="278" stroke-width="1.8"/> <line x1="52" y1="230" x2="212" y2="96" stroke-width="2.2"/> <line x1="70" y1="230" x2="212" y2="60" stroke-width="2.2" stroke-dasharray="5 4"/> <circle cx="126" cy="168" r="3.4" fill="currentColor" stroke="none"/> <text x="126" y="298" font-size="10" text-anchor="middle">Km &#8593;, Vmax same</text> <text x="126" y="312" font-size="10" text-anchor="middle" class="dim">交于 y 轴</text>  <text x="380" y="22" font-size="12" text-anchor="middle" font-weight="600">Non-competitive</text> <text x="380" y="37" font-size="10" text-anchor="middle" class="dim">非竞争性</text> <line x1="294" y1="250" x2="484" y2="250" stroke-width="1.8"/> <line x1="380" y1="60" x2="380" y2="278" stroke-width="1.8"/> <line x1="306" y1="230" x2="466" y2="96" stroke-width="2.2"/> <line x1="306" y1="204" x2="466" y2="30" stroke-width="2.2" stroke-dasharray="5 4"/> <circle cx="316" cy="250" r="3.4" fill="currentColor" stroke="none"/> <text x="380" y="298" font-size="10" text-anchor="middle">Vmax &#8595;, Km same</text> <text x="380" y="312" font-size="10" text-anchor="middle" class="dim">交于 x 轴</text>  <text x="634" y="22" font-size="12" text-anchor="middle" font-weight="600">Uncompetitive</text> <text x="634" y="37" font-size="10" text-anchor="middle" class="dim">反竞争性</text> <line x1="548" y1="250" x2="738" y2="250" stroke-width="1.8"/> <line x1="634" y1="60" x2="634" y2="278" stroke-width="1.8"/> <line x1="560" y1="230" x2="720" y2="96" stroke-width="2.2"/> <line x1="560" y1="196" x2="720" y2="62" stroke-width="2.2" stroke-dasharray="5 4"/> <text x="634" y="298" font-size="10" text-anchor="middle">both &#8595;</text> <text x="634" y="312" font-size="10" text-anchor="middle" class="dim">两条线平行</text>  <text x="380" y="60" font-size="10" text-anchor="middle" class="dim">axes: 1/v against 1/[S] &#183; solid = no inhibitor, dashed = inhibitor</text> </g> </svg>',
  svg_caption: { en: 'Lineweaver-Burk, 1/v against 1/[S]: solid line without inhibitor, dashed with. The three types are told apart by where the lines meet. Competitive binds the active site so lines meet on the y-axis (Vmax unchanged, Km up). Non-competitive binds elsewhere so they meet on the x-axis (Km unchanged, Vmax down). Uncompetitive binds only ES, so both fall and the lines are parallel.', cn: 'Lineweaver-Burk 图，1/v 对 1/[S]：实线为无抑制剂，虚线为有抑制剂。三种类型靠交点位置区分。竞争性结合活性位点，两线交于 y 轴（Vmax 不变、Km 升高）。非竞争性结合别处，交于 x 轴（Km 不变、Vmax 下降）。反竞争性只结合 ES，两者都下降，两条线平行。' },
  answer_en: 'First split **reversible** from **irreversible**. Irreversible inhibitors bind covalently and permanently inactivate the enzyme — aspirin on cyclooxygenase, penicillin on transpeptidase.\n\n' +
             'Reversible inhibition has three types, and the clean way to state each is by **what it binds** and **what it does to Km and Vmax**.\n\n' +
             '**Competitive** — binds the **active site**, competing with substrate. **Km increases, Vmax unchanged**, because enough substrate still outcompetes the inhibitor.\n\n' +
             '**Non-competitive** — binds an **allosteric site**, on either free enzyme or the ES complex. **Vmax decreases, Km unchanged**; adding substrate does not help because the inhibitor is not competing for the same place.\n\n' +
             '**Uncompetitive** — binds **only the ES complex**. **Both Vmax and Km decrease**, which looks odd until you see that removing ES from the equilibrium pulls more substrate in.\n\n' +
             'On a **Lineweaver-Burk** plot the three give distinct patterns: competitive lines meet on the y-axis, non-competitive on the x-axis, and uncompetitive lines are parallel.',
  answer_cn: '先把**可逆**与**不可逆**分开。不可逆抑制剂共价结合、永久使酶失活——阿司匹林作用于环加氧酶，青霉素作用于转肽酶。\n\n' +
             '可逆抑制有三种，最清楚的讲法是按**它结合什么**以及**对 Km 和 Vmax 做了什么**。\n\n' +
             '**竞争性**——结合**活性位点**，与底物竞争。**Km 升高，Vmax 不变**，因为底物足够多时仍能压过抑制剂。\n\n' +
             '**非竞争性**——结合**别构位点**，游离酶和 ES 复合物都能结合。**Vmax 下降，Km 不变**；加底物没用，因为抑制剂并不与它争同一个位置。\n\n' +
             '**反竞争性**——**只结合 ES 复合物**。**Vmax 和 Km 都下降**，这看起来奇怪，直到你意识到把 ES 从平衡中移走会把更多底物拉进来。\n\n' +
             '在 **Lineweaver-Burk 图**上三者给出不同图形：竞争性的直线交于 y 轴，非竞争性交于 x 轴，反竞争性则互相平行。',
  followups: [
    { q_en: 'Why does adding substrate rescue competitive but not non-competitive inhibition?',
      q_cn: '为什么加底物能挽救竞争性抑制却不能挽救非竞争性？',
      a_en: 'Because competition is for the same site, so raising substrate concentration shifts the occupancy back. A non-competitive inhibitor sits elsewhere, so its effect is independent of how much substrate is present.',
      a_cn: '因为竞争的是同一个位点，提高底物浓度就能把占据比例扳回来。非竞争性抑制剂坐在别处，所以它的效果与底物有多少无关。' },
    { q_en: 'Which type is a drug designer usually aiming for and why?',
      q_cn: '药物设计通常追求哪一种？为什么？',
      a_en: 'Often competitive, because a substrate-analogue can be designed rationally from the natural ligand. But high substrate concentration in vivo can defeat it, which is an argument for irreversible or allosteric inhibitors instead.',
      a_cn: '常常是竞争性，因为可以从天然配体理性设计出底物类似物。但体内高底物浓度会削弱它，这也是转而使用不可逆或别构抑制剂的理由。' }
  ]
},

{
  id: 's3-bio-7-enzyme-kinetics',
  sheets: 'S3 Bio 7', weight: 1,
  stem_en: 'Explain the principles of enzyme kinetics.',
  stem_cn: '解释酶动力学的原理。',
  svg: '<svg viewBox="0 0 720 330" role="img" aria-label="Michaelis-Menten saturation curve"> <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"> <line x1="80" y1="270" x2="680" y2="270" stroke-width="2"/> <line x1="80" y1="30"  x2="80"  y2="270" stroke-width="2"/> <text x="46" y="150" font-size="12" text-anchor="middle" transform="rotate(-90 46 150)">v (initial rate)</text> <text x="380" y="302" font-size="12" text-anchor="middle">[S] &#183; substrate concentration</text>  <path d="M80 270 C 200 130 320 92 680 74" stroke-width="2.6"/>  <line x1="80" y1="70" x2="680" y2="70" stroke-dasharray="4 5" class="dim"/> <text x="694" y="74" font-size="12" font-weight="600" text-anchor="end">Vmax</text>  <line x1="80" y1="170" x2="215" y2="170" stroke-dasharray="4 5" class="dim"/> <text x="74" y="174" font-size="11" text-anchor="end" font-weight="600">&#189; Vmax</text> <line x1="215" y1="170" x2="215" y2="270" stroke-dasharray="4 5" class="dim"/> <text x="215" y="290" font-size="12" text-anchor="middle" font-weight="600">Km</text>  <text x="140" y="230" font-size="10" class="dim">nearly linear:</text> <text x="140" y="243" font-size="10" class="dim">most enzyme free</text> <text x="470" y="112" font-size="10" class="dim">plateau: every active site occupied &#8212; saturation</text> <text x="470" y="126" font-size="10" class="dim">饱和，这是酶催化区别于非催化的特征</text>  <text x="380" y="326" font-size="10" text-anchor="middle" class="dim">Km is a concentration, not a rate. Low Km = high affinity. &#183; Km 是浓度不是速率；Km 小 = 亲和力高</text> </g> </svg>',
  svg_caption: { en: 'The hyperbola is the whole subject. At low [S] most enzyme is free and rate rises almost linearly; at high [S] every active site is occupied and rate plateaus at Vmax — saturation is what distinguishes an enzyme-catalysed reaction from an uncatalysed one. Km is the [S] giving half of Vmax, so it is a concentration and a low Km means high affinity.', cn: '这条双曲线就是这门学问的全部。底物浓度低时大部分酶是游离的，速率近乎线性上升；浓度高时每个活性位点都被占据，速率进入 Vmax 平台——饱和现象正是酶催化区别于非催化反应的特征。Km 是速率达到 Vmax 一半时的底物浓度，所以它是一个浓度，而 Km 小意味着亲和力高。' },
  answer_en: 'Enzyme kinetics measures **initial reaction rate as a function of substrate concentration**, and the shape of that curve is the whole subject.\n\n' +
             'The curve is **hyperbolic**: at low substrate the rate rises almost linearly, because most enzyme is free; at high substrate it plateaus at **Vmax**, because every active site is occupied — the enzyme is **saturated**. Saturation is the defining feature that distinguishes an enzyme-catalysed reaction from an uncatalysed one.\n\n' +
             'The model behind it assumes an **ES complex** and a **steady state** in which ES concentration is constant.\n\n' +
             'Why **initial** rates: as soon as product accumulates the reverse reaction and product inhibition set in, so only the initial slope reports the forward reaction cleanly.\n\n' +
             'Practical uses: comparing enzyme variants, characterising inhibitors by their effect on Km and Vmax, and finding conditions where an assay is linear so that a measurement means something.\n\n' +
             'Allosteric enzymes break the model — they give a **sigmoidal** curve rather than hyperbolic, because subunits cooperate.',
  answer_cn: '酶动力学测量的是**初速率随底物浓度的变化**，而这条曲线的形状就是这门学问的全部。\n\n' +
             '曲线是**双曲线形**：底物浓度低时速率几乎线性上升，因为大部分酶是游离的；底物浓度高时进入平台 **Vmax**，因为每个活性位点都被占据——酶**饱和**了。饱和现象正是把酶催化反应与非催化反应区分开的决定性特征。\n\n' +
             '背后的模型假定存在 **ES 复合物**，并处于 ES 浓度恒定的**稳态**。\n\n' +
             '为什么要用**初**速率：一旦产物积累，逆反应和产物抑制就开始起作用，所以只有起始那段斜率才干净地反映正反应。\n\n' +
             '实际用途：比较酶的不同变体、通过对 Km 和 Vmax 的影响表征抑制剂、以及找到使测定保持线性的条件，让测量真正有意义。\n\n' +
             '别构酶不符合这个模型——它们给出的是 **S 形**而不是双曲线，因为亚基之间有协同。',
  followups: [
    { q_en: 'Why measure initial rates rather than total product?',
      q_cn: '为什么测初速率而不是总产物量？',
      a_en: 'Because once product builds up, the reverse reaction and product inhibition distort the measurement. Only the initial slope reflects the forward reaction under the conditions you set.',
      a_cn: '因为产物一旦积累，逆反应和产物抑制就会扭曲测量。只有起始斜率反映的是你设定条件下的正反应。' },
    { q_en: 'What does a sigmoidal curve tell you?',
      q_cn: 'S 形曲线说明什么？',
      a_en: 'Cooperativity — the enzyme is allosteric with multiple subunits, and binding at one site changes affinity at the others. Michaelis-Menten does not apply.',
      a_cn: '协同性——该酶是有多个亚基的别构酶，一个位点的结合会改变其它位点的亲和力。Michaelis-Menten 不适用。' }
  ]
},

{
  id: 's3-bio-8-michaelis-menten',
  sheets: 'S3 Bio 8', weight: 1,
  stem_en: 'What is the Michaelis-Menten equation and its significance?',
  stem_cn: '什么是 Michaelis-Menten 方程？它的意义是什么？',
  answer_en: '**v = Vmax·[S] / (Km + [S])** — it describes the hyperbolic dependence of initial rate on substrate concentration.\n\n' +
             '**Vmax** is the maximum rate when the enzyme is saturated; it is proportional to enzyme concentration.\n\n' +
             '**Km** is the substrate concentration at **half of Vmax**. Its significance is that it is a property of the enzyme rather than of how much enzyme you added, and it approximates the **affinity** for substrate: a **low Km means high affinity**, since little substrate is needed to half-saturate. Note the same direction convention as Kd.\n\n' +
             'Why it matters practically. It tells you whether an enzyme is working near saturation in the cell — many enzymes operate at substrate concentrations near their Km, which is precisely what makes their rate sensitive to substrate supply and therefore regulatable. It defines **kcat/Km** as the measure of catalytic efficiency for comparing enzymes or engineered variants. And it is the framework in which inhibition types are classified by their effect on Km and Vmax.',
  answer_cn: '**v = Vmax·[S] / (Km + [S])**——它描述初速率对底物浓度的双曲线依赖关系。\n\n' +
             '**Vmax** 是酶饱和时的最大速率；它与酶浓度成正比。\n\n' +
             '**Km** 是速率达到 **Vmax 一半**时的底物浓度。它的意义在于：它是酶本身的性质，而不取决于你加了多少酶，并且它近似反映对底物的**亲和力**：**Km 越低亲和力越高**，因为只需很少底物就能半饱和。注意方向约定与 Kd 相同。\n\n' +
             '实际意义在哪。它告诉你酶在细胞里是不是工作在接近饱和的状态——许多酶的底物浓度就在其 Km 附近，而这恰恰使它们的速率对底物供应敏感、因而可被调节。它定义了 **kcat/Km** 作为催化效率的量度，用于比较不同酶或工程化变体。而且抑制类型正是在这个框架下按对 Km 和 Vmax 的影响来分类的。',
  followups: [
    { q_en: 'Does a low Km mean a fast enzyme?',
      q_cn: 'Km 低意味着酶快吗？',
      a_en: 'No — it means high affinity. Speed is kcat. An enzyme can bind tightly and turn over slowly; catalytic efficiency needs both, which is why kcat/Km is the comparison used.',
      a_cn: '不是——它意味着高亲和力。速度是 kcat。一个酶可以结合很紧却转换很慢；催化效率需要两者兼顾，这就是要用 kcat/Km 来比较的原因。' },
    { q_en: 'Why is Km useful when Vmax depends on how much enzyme you added?',
      q_cn: '既然 Vmax 取决于加了多少酶，为什么 Km 有用？',
      a_en: 'Precisely because Km does not. It is an intrinsic property, so two laboratories with different enzyme preparations can compare Km values meaningfully.',
      a_cn: '恰恰因为 Km 不取决于此。它是内在性质，所以两个实验室用不同批次的酶制剂，Km 值之间的比较仍然有意义。' }
  ]
},

{
  id: 's3-bio-9-carbohydrates',
  sheets: 'S3 Bio 9', weight: 1,
  stem_en: 'Describe the structure and function of carbohydrates.',
  stem_cn: '描述糖类的结构与功能。',
  answer_en: 'Structure by size. **Monosaccharides** — glucose, fructose, galactose, ribose — are single units, classified as aldoses or ketoses and by carbon number, and in solution they are mostly **cyclic** with a new chiral centre at the **anomeric carbon**.\n\n' +
             '**Disaccharides** are two units joined by a **glycosidic bond**: sucrose (glucose-fructose), lactose (galactose-glucose), maltose (glucose-glucose).\n\n' +
             '**Polysaccharides** are the interesting case, because the same monomer gives opposite properties depending on the linkage. **Starch and glycogen** use **alpha** linkages, which curve the chain into a compact helix suited to **storage** and easy mobilisation — glycogen more branched, so more ends to release glucose from at once. **Cellulose** uses **beta** linkages, which give a straight chain that hydrogen-bonds into rigid fibres — **structural**, and indigestible to us because we lack the enzyme. **Chitin** and **peptidoglycan** are the same idea in other organisms.\n\n' +
             '**Functions**: energy storage, immediate fuel, structural support, and — via **glycosylation** — recognition and signalling on cell surfaces and secreted proteins, including blood group antigens.',
  answer_cn: '按大小讲结构。**单糖**——葡萄糖、果糖、半乳糖、核糖——是单个单元，按醛糖/酮糖和碳数分类，在溶液中大多呈**环状**，并在**异头碳**处产生一个新的手性中心。\n\n' +
             '**二糖**是两个单元通过**糖苷键**连接：蔗糖（葡萄糖-果糖）、乳糖（半乳糖-葡萄糖）、麦芽糖（葡萄糖-葡萄糖）。\n\n' +
             '**多糖**是有意思的地方，因为同一种单体会因连接方式不同而给出相反的性质。**淀粉和糖原**用 **α** 连接，使链弯曲成紧凑的螺旋，适合**储存**且易于动员——糖原分支更多，所以能同时从更多末端释放葡萄糖。**纤维素**用 **β** 连接，得到笔直的链，彼此氢键结合成刚性纤维——是**结构性**的，而且我们消化不了，因为缺少相应的酶。**几丁质**和**肽聚糖**是同一思想在其它生物中的体现。\n\n' +
             '**功能**：能量储存、即时燃料、结构支撑，以及通过**糖基化**在细胞表面和分泌蛋白上实现识别与信号传递，包括血型抗原。',
  followups: [
    { q_en: 'Why can we digest starch but not cellulose?',
      q_cn: '为什么我们能消化淀粉却不能消化纤维素？',
      a_en: 'Because our amylases are specific for alpha-glycosidic bonds. Cellulose is beta-linked and we have no cellulase, so it passes through as dietary fibre.',
      a_cn: '因为我们的淀粉酶只对 α 糖苷键特异。纤维素是 β 连接的，而我们没有纤维素酶，所以它作为膳食纤维通过消化道。' },
    { q_en: 'Why is glycogen branched?',
      q_cn: '糖原为什么是分支的？',
      a_en: 'Branching creates many non-reducing ends, so many phosphorylase molecules can release glucose simultaneously. It also keeps the molecule compact and more soluble.',
      a_cn: '分支产生了很多非还原端，因而许多磷酸化酶分子能同时释放葡萄糖。它还让分子更紧凑、溶解性更好。' }
  ]
},

{
  id: 's3-bio-10-lipids',
  sheets: 'S3 Bio 10', weight: 1,
  stem_en: 'What are the different types of lipids and their roles in the body?',
  stem_cn: '脂类有哪些类型？它们在体内的作用是什么？',
  answer_en: 'Lipids are defined by a property rather than a structure: **they are hydrophobic, soluble in organic solvents**. So classify by type.\n\n' +
             '**Fatty acids** — hydrocarbon chain plus carboxyl. Saturated (no double bonds, straight, pack tightly, solid) versus unsaturated (cis double bonds kink the chain, pack poorly, liquid). This packing difference is what sets **membrane fluidity**.\n\n' +
             '**Triacylglycerols** — three fatty acids on glycerol. **Energy storage**, and more efficient than carbohydrate because they are more reduced and stored anhydrously.\n\n' +
             '**Phospholipids** — two fatty acids plus a phosphate head group on glycerol. **Amphipathic**, so they self-assemble into the **bilayer**; this is the structural role and the basis of every membrane.\n\n' +
             '**Steroids** — four fused rings. **Cholesterol** modulates membrane fluidity and is the precursor of **steroid hormones** and bile salts.\n\n' +
             '**Others** worth naming: glycolipids in recognition, sphingolipids in myelin, eicosanoids such as prostaglandins as local signals, and fat-soluble vitamins A, D, E and K.',
  answer_cn: '脂类是按性质而不是按结构定义的：**疏水，溶于有机溶剂**。所以按类型分类。\n\n' +
             '**脂肪酸**——烃链加羧基。饱和（无双键、笔直、堆积紧密、固态）对不饱和（顺式双键使链弯折、堆积松散、液态）。这个堆积差异正是决定**膜流动性**的因素。\n\n' +
             '**三酰甘油**——甘油上接三条脂肪酸。**能量储存**，而且比糖类更高效，因为它们更还原、且以无水形式储存。\n\n' +
             '**磷脂**——甘油上两条脂肪酸加一个磷酸头基。**两亲性**，因而自组装成**双层**；这是它的结构性作用，也是所有膜的基础。\n\n' +
             '**类固醇**——四个稠合环。**胆固醇**调节膜流动性，并且是**类固醇激素**和胆汁盐的前体。\n\n' +
             '还值得点名的：参与识别的糖脂、构成髓鞘的鞘脂、作为局部信号的前列腺素等二十碳类，以及脂溶性维生素 A、D、E、K。',
  followups: [
    { q_en: 'Why do unsaturated fatty acids increase membrane fluidity?',
      q_cn: '为什么不饱和脂肪酸增加膜流动性？',
      a_en: 'Their cis double bonds put a permanent kink in the chain, so neighbouring chains cannot pack tightly. Weaker van der Waals contact means a lower melting point and a more fluid membrane.',
      a_cn: '它们的顺式双键在链上造成一个永久的弯折，使相邻链无法紧密堆积。范德华接触减弱意味着熔点更低、膜更流动。' },
    { q_en: 'Why is fat a better energy store than glycogen?',
      q_cn: '为什么脂肪比糖原更适合作储能物质？',
      a_en: 'It is more reduced so yields more energy per gram, and it is stored without water whereas glycogen is heavily hydrated — so the difference in usable energy per unit body mass is large.',
      a_cn: '它更还原，所以每克产能更多；而且它储存时不带水，糖原却高度水合——所以按单位体重计算，可用能量的差距很大。' }
  ]
},

{
  id: 's3-bio-12-citric-acid-cycle',
  sheets: 'S3 Bio 12', weight: 1,
  stem_en: 'What are the main steps of the citric acid cycle?',
  stem_cn: '柠檬酸循环的主要步骤是什么？',
  answer_en: 'It runs in the **mitochondrial matrix** and its input is **acetyl-CoA**, which arrives from pyruvate, fatty acid oxidation or amino acid breakdown.\n\n' +
             'The cycle: acetyl-CoA (2 carbons) condenses with **oxaloacetate** (4 carbons) to give **citrate** (6 carbons). Citrate is isomerised to isocitrate, then two **oxidative decarboxylations** release the two carbons as CO2 and give **alpha-ketoglutarate** and then **succinyl-CoA**, generating NADH each time. Succinyl-CoA gives **GTP or ATP** by substrate-level phosphorylation, then succinate is oxidised to fumarate producing **FADH2**, hydrated to malate, and oxidised back to **oxaloacetate** producing the third NADH.\n\n' +
             'Yield per acetyl-CoA: **3 NADH, 1 FADH2, 1 GTP, 2 CO2** — so per glucose, double it.\n\n' +
             'Two points that earn marks. The cycle itself makes almost no ATP directly; its real product is **reduced cofactors** for the electron transport chain. And it is **amphibolic** — intermediates are withdrawn for biosynthesis, so they must be replenished by anaplerotic reactions.',
  answer_cn: '它在**线粒体基质**中运行，输入是**乙酰辅酶 A**，来自丙酮酸、脂肪酸氧化或氨基酸分解。\n\n' +
             '循环过程：乙酰辅酶 A（2 个碳）与**草酰乙酸**（4 个碳）缩合生成**柠檬酸**（6 个碳）。柠檬酸异构为异柠檬酸，随后两次**氧化脱羧**把那两个碳以 CO₂ 形式放出，依次生成 **α-酮戊二酸**和**琥珀酰辅酶 A**，每次产生一个 NADH。琥珀酰辅酶 A 通过底物水平磷酸化生成 **GTP 或 ATP**，接着琥珀酸氧化为延胡索酸并产生 **FADH₂**，水合为苹果酸，再氧化回**草酰乙酸**并产生第三个 NADH。\n\n' +
             '每分子乙酰辅酶 A 的产出：**3 NADH、1 FADH₂、1 GTP、2 CO₂**——按每分子葡萄糖计则要加倍。\n\n' +
             '两个得分点。循环本身几乎不直接产生 ATP；它真正的产物是供电子传递链使用的**还原型辅因子**。以及它是**两用的**——中间产物会被抽走用于生物合成，因此必须由回补反应补充。',
  followups: [
    { q_en: 'Why is the cycle called amphibolic?',
      q_cn: '为什么说这个循环是两用的？',
      a_en: 'Because it is both catabolic and anabolic: it oxidises acetyl-CoA, but its intermediates are also drawn off as precursors for amino acids, haem and glucose, which is why anaplerotic reactions exist.',
      a_cn: '因为它既分解又合成：它氧化乙酰辅酶 A，但它的中间产物也被抽走作为氨基酸、血红素和葡萄糖的前体，这正是回补反应存在的原因。' },
    { q_en: 'Why does the cycle stop without oxygen if it does not use oxygen itself?',
      q_cn: '这个循环本身不用氧，为什么缺氧时它会停？',
      a_en: 'Because it depends on NAD-plus and FAD being regenerated by the electron transport chain, and that chain needs oxygen as the terminal acceptor. Without it the cofactors stay reduced and the cycle backs up.',
      a_cn: '因为它依赖电子传递链把 NAD⁺ 和 FAD 再生出来，而那条链需要氧作终末受体。没有氧，辅因子保持还原态，循环就堵住了。' }
  ]
},

{
  id: 's3-bio-13-electron-transport-chain',
  sheets: 'S3 Bio 13', weight: 1,
  stem_en: 'Describe the electron transport chain and its role in cellular respiration.',
  stem_cn: '描述电子传递链及其在细胞呼吸中的作用。',
  answer_en: 'It sits in the **inner mitochondrial membrane** and its job is to convert the reducing power in NADH and FADH2 into a **proton gradient**.\n\n' +
             'Electrons enter at **Complex I** from NADH or at **Complex II** from FADH2, pass through **ubiquinone** to **Complex III**, then via **cytochrome c** to **Complex IV**, which delivers them to **oxygen**, the terminal acceptor, forming water.\n\n' +
             'Electrons move down a gradient of increasing **redox potential**, releasing energy at each step, and complexes **I, III and IV use that energy to pump protons** into the intermembrane space. Complex II does not pump, which is why FADH2 yields less ATP than NADH.\n\n' +
             'The result is the **proton-motive force** — an electrochemical gradient across the membrane. That gradient is the actual energy currency here, and ATP synthase spends it.\n\n' +
             'Note the two things that stop it: an inhibitor blocking a complex backs up everything upstream, and without **oxygen** the whole chain stops, which is why the citric acid cycle halts anaerobically even though it uses no oxygen itself.',
  answer_cn: '它位于**线粒体内膜**，任务是把 NADH 和 FADH₂ 中的还原力转换成**质子梯度**。\n\n' +
             '电子从 NADH 经**复合物 I** 进入，或从 FADH₂ 经**复合物 II** 进入，通过**泛醌**到**复合物 III**，再经**细胞色素 c** 到**复合物 IV**，后者把它们交给终末受体**氧**，生成水。\n\n' +
             '电子沿**氧化还原电位**递增的梯度下行，每一步释放能量，而**复合物 I、III、IV 用这些能量把质子泵入**膜间隙。复合物 II 不泵质子，这正是 FADH₂ 产生的 ATP 少于 NADH 的原因。\n\n' +
             '结果是**质子动力势**——跨膜的电化学梯度。这个梯度才是这里真正的能量货币，而 ATP 合酶花掉它。\n\n' +
             '注意两件会让它停下来的事：抑制剂阻断某个复合物会让其上游全部堵住；而没有**氧**整条链就停止，这也是为什么柠檬酸循环在无氧时会停，尽管它本身并不使用氧。',
  followups: [
    { q_en: 'Why does FADH2 yield less ATP than NADH?',
      q_cn: '为什么 FADH₂ 产生的 ATP 比 NADH 少？',
      a_en: 'Because it enters at Complex II, bypassing Complex I. One fewer proton-pumping complex is traversed, so fewer protons are moved per pair of electrons.',
      a_cn: '因为它从复合物 II 进入，绕过了复合物 I。少经过一个泵质子的复合物，所以每对电子泵出的质子更少。' },
    { q_en: 'What does cyanide do here?',
      q_cn: '氰化物在这里做什么？',
      a_en: 'It inhibits Complex IV, so electrons cannot reach oxygen. The whole chain backs up, the proton gradient collapses, and ATP synthesis by oxidative phosphorylation stops.',
      a_cn: '它抑制复合物 IV，使电子无法到达氧。整条链堵塞，质子梯度崩溃，氧化磷酸化产生 ATP 的过程停止。' }
  ]
},

{
  id: 's3-bio-14-oxidative-phosphorylation',
  sheets: 'S3 Bio 14', weight: 1,
  stem_en: 'What is oxidative phosphorylation?',
  stem_cn: '什么是氧化磷酸化？',
  answer_en: '**The synthesis of ATP driven by the proton gradient that electron transport creates**, as opposed to substrate-level phosphorylation, where ATP is made by direct transfer of a phosphate from a substrate.\n\n' +
             'The explanation is **Mitchell\'s chemiosmotic theory**, and its central claim is worth stating because it was counterintuitive at the time: **the link between oxidation and phosphorylation is not a chemical intermediate but a gradient across a membrane.**\n\n' +
             'Mechanism: protons pumped into the intermembrane space flow back through **ATP synthase**, and that flow physically rotates part of the enzyme. Rotation drives conformational changes in the catalytic subunits that bind ADP and phosphate, form ATP and release it — a molecular motor.\n\n' +
             'Two consequences that show you understand it. The membrane must be **intact**: an **uncoupler** that carries protons across it, such as DNP, lets electron transport continue at full speed while ATP synthesis stops, and the energy is released as heat. And this is the same principle brown adipose tissue uses deliberately for thermogenesis.',
  answer_cn: '**由电子传递所建立的质子梯度驱动的 ATP 合成**，与底物水平磷酸化相对——后者是把磷酸基团从底物直接转移给 ADP。\n\n' +
             '解释它的是 **Mitchell 的化学渗透理论**，它的核心论断值得讲出来，因为在当时相当反直觉：**氧化与磷酸化之间的联系不是某个化学中间体，而是跨膜的一个梯度。**\n\n' +
             '机制：被泵到膜间隙的质子经 **ATP 合酶**流回，这股流动在物理上使该酶的一部分旋转。旋转驱动催化亚基发生构象变化，结合 ADP 和磷酸、形成 ATP 并释放——这是一台分子马达。\n\n' +
             '两个能显示你真懂了的推论。膜必须**完整**：像 DNP 这样把质子带过膜的**解偶联剂**，会让电子传递全速继续而 ATP 合成停止，能量以热的形式释放。而棕色脂肪组织正是有意利用同一原理来产热的。',
  followups: [
    { q_en: 'What does an uncoupler do and why is it dangerous?',
      q_cn: '解偶联剂做什么？为什么危险？',
      a_en: 'It carries protons across the membrane, collapsing the gradient. Electron transport and oxygen consumption run flat out while no ATP is made, and all that energy appears as heat — historically fatal as a weight-loss drug.',
      a_cn: '它把质子带过膜，使梯度崩溃。电子传递和耗氧全速进行却不产生 ATP，全部能量变成热——历史上作为减肥药曾致人死亡。' },
    { q_en: 'How is this different from substrate-level phosphorylation?',
      q_cn: '这和底物水平磷酸化有什么不同？',
      a_en: 'Substrate-level transfers a phosphate directly from a high-energy substrate to ADP, needs no membrane and no oxygen. Oxidative phosphorylation needs an intact membrane, a gradient and a terminal electron acceptor.',
      a_cn: '底物水平磷酸化是把磷酸基团直接从高能底物转给 ADP，不需要膜也不需要氧。氧化磷酸化需要完整的膜、一个梯度，以及一个终末电子受体。' }
  ]
},

{
  id: 's3-bio-15-photosynthesis',
  sheets: 'S3 Bio 15', weight: 1,
  stem_en: 'Explain the process of photosynthesis.',
  stem_cn: '解释光合作用的过程。',
  answer_en: 'Two stages, and the useful framing is that the first makes **energy carriers** and the second **spends** them.\n\n' +
             '**Light reactions**, in the **thylakoid membrane**. Photosystem II absorbs light, and the resulting oxidised reaction centre is strong enough to **split water**, releasing O2 and supplying electrons. Electrons pass down a transport chain — pumping protons — to Photosystem I, which re-energises them to reduce **NADP-plus to NADPH**. The proton gradient drives **ATP synthase**, exactly as in mitochondria. Output: **ATP, NADPH and oxygen**.\n\n' +
             '**Calvin cycle**, in the **stroma**, and it does not require light directly. **Rubisco** fixes CO2 onto ribulose-1,5-bisphosphate; the product is reduced using the ATP and NADPH; and most of the carbon is used to **regenerate** the acceptor, with a net gain of one triose phosphate per three CO2.\n\n' +
             'Overall: **6 CO2 + 6 H2O + light → glucose + 6 O2**.\n\n' +
             'The point worth making: the oxygen comes from **water, not CO2** — the light reactions are fundamentally about extracting electrons from water.',
  answer_cn: '两个阶段，而有用的讲法是：第一阶段制造**能量载体**，第二阶段**花掉**它们。\n\n' +
             '**光反应**，发生在**类囊体膜**上。光系统 II 吸收光，由此产生的氧化型反应中心强到足以**裂解水**，放出 O₂ 并提供电子。电子沿传递链下行——同时泵出质子——到达光系统 I，后者再次给它们注入能量以把 **NADP⁺ 还原为 NADPH**。质子梯度驱动 **ATP 合酶**，与线粒体中完全一样。产出：**ATP、NADPH 和氧气**。\n\n' +
             '**卡尔文循环**，发生在**基质**中，并不直接需要光。**Rubisco** 把 CO₂ 固定到 1,5-二磷酸核酮糖上；产物用 ATP 和 NADPH 还原；而大部分碳被用来**再生**受体，每固定三个 CO₂ 净得一个磷酸丙糖。\n\n' +
             '总反应：**6 CO₂ + 6 H₂O + 光 → 葡萄糖 + 6 O₂**。\n\n' +
             '值得点出的一点：氧来自**水而不是 CO₂**——光反应本质上就是从水中夺取电子。',
  followups: [
    { q_en: 'Where does the oxygen come from?',
      q_cn: '氧气从哪里来？',
      a_en: 'From water, split at Photosystem II. This was shown with isotope labelling, and it is the point most often got wrong — the CO2 oxygen ends up in sugar and water, not in O2.',
      a_cn: '来自水，在光系统 II 处被裂解。这是用同位素标记证明的，也是最常被答错的一点——CO₂ 上的氧最终进入糖和水，而不是进入 O₂。' },
    { q_en: 'Why are the Calvin cycle reactions not simply called dark reactions?',
      q_cn: '为什么卡尔文循环的反应不该直接叫暗反应？',
      a_en: 'Because they do not run in the dark for long: they need ATP and NADPH from the light reactions, and several of their enzymes are activated by light. They are light-independent only in the narrow sense of not needing photons directly.',
      a_cn: '因为它们在黑暗中撑不了多久：它们需要光反应提供的 ATP 和 NADPH，而且其中几个酶还受光激活。它们只在「不直接需要光子」这个狭义上算是不依赖光。' }
  ]
},

{
  id: 's3-bio-16-c3-c4-cam',
  sheets: 'S3 Bio 16', weight: 1,
  stem_en: 'What are the differences between C3, C4, and CAM plants?',
  stem_cn: 'C3、C4 和 CAM 植物有什么区别？',
  answer_en: 'All three run the **same Calvin cycle**. They differ in how they deal with one problem: **Rubisco also accepts oxygen**, and that reaction — photorespiration — wastes carbon and energy. It gets worse when it is hot and dry, because the plant closes its stomata, CO2 falls and O2 rises inside the leaf.\n\n' +
             '**C3** — CO2 goes straight to Rubisco; the first product is a 3-carbon compound. Simple and efficient in cool, wet conditions, but photorespiration is costly in heat.\n\n' +
             '**C4** — separates the two steps **in space**. CO2 is first fixed in mesophyll cells by **PEP carboxylase**, which has no oxygenase activity, into a 4-carbon compound. That is shuttled to **bundle sheath** cells where it is released, concentrating CO2 around Rubisco. Costs extra ATP; wins in hot, bright climates. Maize and sugarcane.\n\n' +
             '**CAM** — separates them **in time**. Stomata open at **night**, CO2 is fixed by PEP carboxylase and stored as malate; by day the stomata close and the malate is released to Rubisco. Minimises water loss; slow growth. Cacti and succulents.\n\n' +
             'So: **C4 separates in space, CAM in time**, and both exist to keep oxygen away from Rubisco.',
  answer_cn: '三者运行的是**同一个卡尔文循环**。它们的区别在于如何应对同一个问题：**Rubisco 也接受氧**，而那个反应——光呼吸——浪费碳和能量。天热干旱时更糟，因为植物关闭气孔，叶内 CO₂ 下降而 O₂ 上升。\n\n' +
             '**C3**——CO₂ 直接交给 Rubisco，第一个产物是三碳化合物。简单，在凉爽湿润条件下高效，但高温下光呼吸代价很大。\n\n' +
             '**C4**——把两步**在空间上**分开。CO₂ 先在叶肉细胞中由没有加氧酶活性的 **PEP 羧化酶**固定成四碳化合物，再运到**维管束鞘**细胞释放，从而在 Rubisco 周围浓缩 CO₂。要多花 ATP；在炎热强光的气候中占优。玉米和甘蔗。\n\n' +
             '**CAM**——把两步**在时间上**分开。气孔在**夜间**打开，CO₂ 由 PEP 羧化酶固定并以苹果酸储存；白天气孔关闭，苹果酸释放 CO₂ 给 Rubisco。把失水降到最低；生长缓慢。仙人掌和多肉植物。\n\n' +
             '所以：**C4 在空间上分开，CAM 在时间上分开**，两者都是为了让氧远离 Rubisco。',
  followups: [
    { q_en: 'Why is PEP carboxylase the key enzyme in both C4 and CAM?',
      q_cn: '为什么 PEP 羧化酶在 C4 和 CAM 中都是关键酶？',
      a_en: 'Because it fixes CO2 with no oxygenase side reaction and has a much higher affinity for CO2 than Rubisco, so it can capture carbon even at the low internal concentrations that follow stomatal closure.',
      a_cn: '因为它固定 CO₂ 时没有加氧酶副反应，而且对 CO₂ 的亲和力远高于 Rubisco，所以即使在气孔关闭后的低内部浓度下也能捕获碳。' },
    { q_en: 'Why has evolution not simply fixed Rubisco?',
      q_cn: '进化为什么不干脆把 Rubisco 修好？',
      a_en: 'Because discriminating CO2 from O2 is chemically hard — the enzyme evolved when atmospheric oxygen was low — and improving specificity generally costs catalytic speed, so there is a trade-off rather than a free fix.',
      a_cn: '因为在化学上区分 CO₂ 和 O₂ 很难——这个酶是在大气氧含量很低的时候进化出来的——而提高特异性通常要牺牲催化速度，所以那是一个权衡，而不是一个免费的修补。' }
  ]
},

{
  id: 's3-bio-17-protein-structure-function',
  sheets: 'S3 Bio 17', weight: 1,
  stem_en: 'Describe the structure and function of proteins.',
  stem_cn: '描述蛋白质的结构与功能。',
  answer_en: 'Proteins are polymers of **20 amino acids** joined by **peptide bonds**, and the sequence is what the gene encodes. The organising claim is that **sequence determines fold, and fold determines function** — so structure and function are one question, not two.\n\n' +
             'Structure has **four levels**: primary (sequence, covalent peptide bonds); secondary (alpha-helix and beta-sheet, held by backbone hydrogen bonds); tertiary (the full 3D fold of one chain, held by side-chain interactions and the hydrophobic effect); quaternary (assembly of multiple chains).\n\n' +
             '**Functions**, worth listing as categories with an example each: **catalysis** (enzymes); **structure** (collagen, keratin); **transport** (haemoglobin, membrane channels); **motion** (actin and myosin); **defence** (antibodies); **signalling** (hormones such as insulin, and receptors); and **regulation** (transcription factors).\n\n' +
             'The unifying point: a specific three-dimensional surface with complementary shape and chemistry is what lets a protein bind one partner specifically — and every function above is a variation on specific binding.',
  answer_cn: '蛋白质是由 **20 种氨基酸**通过**肽键**连接的聚合物，序列就是基因所编码的东西。统领性的论断是：**序列决定折叠，折叠决定功能**——所以结构和功能是同一个问题，不是两个。\n\n' +
             '结构有**四个层次**：一级（序列，共价肽键）；二级（α 螺旋和 β 折叠，由主链氢键维持）；三级（单条链完整的三维折叠，由侧链相互作用和疏水效应维持）；四级（多条链的组装）。\n\n' +
             '**功能**，值得按类别各举一例来列举：**催化**（酶）；**结构**（胶原、角蛋白）；**运输**（血红蛋白、膜通道）；**运动**（肌动蛋白与肌球蛋白）；**防御**（抗体）；**信号**（胰岛素这类激素，以及受体）；**调控**（转录因子）。\n\n' +
             '统一的要点：一个在形状和化学性质上互补的特定三维表面，正是蛋白能特异结合某一个搭档的原因——而上面每一项功能都是特异结合的一种变体。',
  followups: [
    { q_en: 'What is the evidence that sequence determines structure?',
      q_cn: '有什么证据表明序列决定结构？',
      a_en: 'Anfinsen\'s experiment: a denatured, reduced ribonuclease refolded spontaneously into its active form when conditions were restored, with no external information supplied.',
      a_cn: 'Anfinsen 的实验：变性并还原的核糖核酸酶在条件恢复后自发折叠回有活性的形式，没有任何外部信息输入。' },
    { q_en: 'Why does a single amino acid change sometimes destroy function?',
      q_cn: '为什么有时一个氨基酸的改变就会毁掉功能？',
      a_en: 'If it falls in the active site or at a position critical to folding, it changes the surface that does the binding or prevents the fold forming. Sickle-cell haemoglobin is the classic example of one substitution changing behaviour entirely.',
      a_cn: '如果它落在活性位点上，或落在对折叠至关重要的位置，就会改变负责结合的那个表面，或者让折叠无法形成。镰状细胞血红蛋白是「一个替换彻底改变行为」的经典例子。' }
  ],
  sourceNodes: ['5-1', '3-1']
},

{
  id: 's3-bio-19-vitamins-minerals',
  sheets: 'S3 Bio 19', weight: 1,
  stem_en: 'Explain the role of vitamins and minerals in metabolism.',
  stem_cn: '解释维生素和矿物质在代谢中的作用。',
  answer_en: 'The unifying idea: **both are required in small amounts because they are used catalytically, not consumed as fuel**, and most are not synthesised by us, which is why deficiency produces a specific disease.\n\n' +
             '**Vitamins** are organic. **Water-soluble** ones — the B group and C — are mostly **coenzyme precursors**: thiamine gives TPP for decarboxylations, riboflavin gives FAD, niacin gives NAD, pantothenate gives coenzyme A, B6 gives PLP for transamination, folate carries one-carbon units, B12 works with folate. They are not stored, so deficiency appears relatively quickly. **Fat-soluble** ones — A, D, E, K — act more like hormones or structural molecules: A in vision, D in calcium regulation, E as antioxidant, K in the carboxylation needed for clotting factors. They are stored, so deficiency is slower but **toxicity is possible**.\n\n' +
             '**Minerals** are inorganic. Many are **enzyme cofactors** — magnesium for every kinase and polymerase, zinc in hundreds of enzymes and in zinc-finger transcription factors, iron in haem and iron-sulfur clusters. Others maintain **electrochemical gradients** (sodium, potassium), signal (calcium), or are structural (calcium and phosphate in bone).\n\n' +
             'So the pattern: vitamins mostly become coenzymes, minerals mostly become cofactors or gradients.',
  answer_cn: '统一的思想是：**两者需要量都很小，因为它们是被催化性地使用的，而不是作为燃料被消耗**，而且大多数我们自己合成不了——这就是缺乏会产生特定疾病的原因。\n\n' +
             '**维生素**是有机物。**水溶性**的——B 族和 C——大多是**辅酶前体**：硫胺素给出 TPP 用于脱羧，核黄素给出 FAD，烟酸给出 NAD，泛酸给出辅酶 A，B6 给出 PLP 用于转氨，叶酸携带一碳单位，B12 与叶酸配合工作。它们不被储存，所以缺乏出现得较快。**脂溶性**的——A、D、E、K——更像激素或结构分子：A 参与视觉，D 调节钙，E 作抗氧化剂，K 参与凝血因子所需的羧化。它们会被储存，所以缺乏来得慢，但**可能中毒**。\n\n' +
             '**矿物质**是无机物。许多是**酶的辅因子**——镁是每一个激酶和聚合酶所需，锌存在于数百种酶以及锌指转录因子中，铁存在于血红素和铁硫簇中。另一些维持**电化学梯度**（钠、钾）、传递信号（钙），或起结构作用（骨中的钙和磷酸）。\n\n' +
             '所以规律是：维生素多半变成辅酶，矿物质多半变成辅因子或梯度。',
  followups: [
    { q_en: 'Why can fat-soluble vitamins cause toxicity but water-soluble ones rarely do?',
      q_cn: '为什么脂溶性维生素会中毒而水溶性的很少？',
      a_en: 'Because they accumulate in fat and liver rather than being excreted. Excess water-soluble vitamin is simply lost in urine, so it does not build to toxic levels.',
      a_cn: '因为它们在脂肪和肝脏中积累，而不是被排出。过量的水溶性维生素随尿排掉，因此不会积累到中毒水平。' },
    { q_en: 'Where have you already relied on magnesium as a cofactor?',
      q_cn: '你在哪里已经依赖过镁作为辅因子？',
      a_en: 'In every PCR. The polymerase is magnesium-dependent and free magnesium also stabilises primer-template pairing, which is why it is the parameter you titrate when a reaction misbehaves.',
      a_cn: '每一次 PCR。聚合酶是镁依赖的，游离镁还稳定引物-模板配对，这就是反应不正常时你要调它的原因。',
      node: '4-1' }
  ]
},

{
  id: 's3-bio-20-metabolic-regulation',
  sheets: 'S3 Bio 20', weight: 1,
  stem_en: 'What are the principles of metabolic regulation?',
  stem_cn: '代谢调控的原理是什么？',
  answer_en: 'Organise by **speed**, from milliseconds to hours — that ordering is the answer.\n\n' +
             '**Substrate availability** — immediate. Many enzymes work at substrate concentrations near their Km, so flux tracks supply automatically.\n\n' +
             '**Allosteric regulation** — seconds. A regulator binds a site away from the active site and changes activity. **Feedback inhibition** is the key case: the end product of a pathway inhibits the **first committed step**, which is the most economical place to stop, since nothing is wasted downstream. PFK-1 inhibited by ATP is the standard example.\n\n' +
             '**Covalent modification** — seconds to minutes, and **reversible**. Phosphorylation by kinases and removal by phosphatases, often as a **hormone-driven cascade** that amplifies a small signal enormously — glycogen metabolism through the adenylate cyclase and cAMP cascade.\n\n' +
             '**Changing enzyme amount** — minutes to hours, by transcriptional control or by regulated degradation. The lac operon is this level.\n\n' +
             '**Compartmentation** — separating opposing pathways physically, such as fatty acid synthesis in the cytosol and oxidation in mitochondria.\n\n' +
             'Two general principles to close: regulation acts at **irreversible, committed steps**, and opposing pathways are **reciprocally regulated** so they never run simultaneously and waste ATP in a futile cycle.',
  answer_cn: '按**速度**组织，从毫秒到小时——这个排序本身就是答案。\n\n' +
             '**底物可得性**——即时。许多酶工作在接近其 Km 的底物浓度下，所以通量自动跟随供应变化。\n\n' +
             '**别构调节**——数秒。调节物结合在活性位点之外的位点上改变活性。**反馈抑制**是关键情形：通路的终产物抑制**第一个定向步骤**，那是最经济的叫停位置，因为下游什么都没浪费。ATP 抑制 PFK-1 是标准例子。\n\n' +
             '**共价修饰**——数秒到数分钟，而且**可逆**。激酶磷酸化、磷酸酶去除，往往表现为**激素驱动的级联**，把一个微弱信号极大放大——糖原代谢通过腺苷酸环化酶和 cAMP 级联就是如此。\n\n' +
             '**改变酶的数量**——数分钟到数小时，通过转录调控或受调控的降解。lac 操纵子属于这一层。\n\n' +
             '**区室化**——把相反的通路在物理上分开，比如脂肪酸合成在胞质、氧化在线粒体。\n\n' +
             '最后给出两条通则：调控作用于**不可逆的、定向的步骤**；而相反的通路受**互反调节**，所以它们不会同时运行、在无效循环中浪费 ATP。',
  followups: [
    { q_en: 'Why regulate the first committed step rather than a later one?',
      q_cn: '为什么调控第一个定向步骤而不是靠后的某一步？',
      a_en: 'Because everything after it is committed to that pathway, so stopping there wastes nothing. Stopping later means intermediates have already been made and accumulate uselessly.',
      a_cn: '因为它之后的一切都已专属于这条通路，在那里叫停不浪费任何东西。停得晚意味着中间产物已经造出来了，而且会无用地积累。' },
    { q_en: 'What is a futile cycle and why is reciprocal regulation needed?',
      q_cn: '什么是无效循环？为什么需要互反调节？',
      a_en: 'If a synthetic and a degradative pathway run at once, the net result is only ATP consumed and heat produced. Reciprocal regulation — the same signal activating one and inhibiting the other — prevents that.',
      a_cn: '如果合成和分解通路同时运行，净结果只是消耗 ATP、产生热。互反调节——同一个信号激活一条、抑制另一条——防止了这种情况。' }
  ]
}

]);
