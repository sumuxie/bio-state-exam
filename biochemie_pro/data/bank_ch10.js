/* Bank questions for chapter 10 (10-1 .. 10-26) — the second question layer, see BANK_SPEC.md.
   Every item below is derived from the content already in biochemie_pro/data/ch10.js; no fact
   here comes from outside the node it is attached to. Distractors point, via optionRefs, at the
   node that actually owns the concept — often in another chapter, since chapter 10 is the
   integration chapter. Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  '10-1': [
    { type: 'mcq',
      q_en: 'A cell lays down glycogen after a meal. Where does §10.1 place that in its scheme?',
      q_cn: '饭后细胞把糖原储存起来。按§10.1的框架，这属于哪一类？',
      options: [
        'Catabolism, since storage material exists only to be degraded later',
        'Anabolism, since the book counts the formation of the organism’s own storage substances among the anabolic reactions',
        'A third category, storage metabolism, standing beside catabolism and anabolism',
        'Outside intermediary metabolism, since no chemical energy is obtained'
      ],
      answer: 1,
      optionRefs: { 0: '6-1-3', 2: '7-12-1', 3: '1-4' },
      optionNotes: {
        0: { en: 'Catabolism is the degradative part of metabolism and produces ATP; laying material down is the opposite direction.', cn: '分解代谢是代谢中降解的那一部分、产生ATP；把物质存起来是相反的方向。' },
        2: { en: 'The book deliberately refuses a third pole: it says explicitly that anabolic reactions INCLUDE the formation of storage substances, which is why two categories suffice for the whole chapter.', cn: '教材有意不设第三极：它明确说合成代谢反应**包括**贮存物质的生成，正因如此整章只需两个类别。' },
        3: { en: 'Intermediary metabolism is the sum of all coordinated reactions in the cell, not only the energy-yielding ones — obtaining energy is only function (a) of four.', cn: '中间代谢是细胞内全部协调反应的总和，不只是产能的那些——获取能量只是四项功能中的(a)。' }
      },
      why_en: 'The book states that anabolic reactions include also the reactions by which the organism’s own storage substances are formed (kap. 6.1.3). Storage is therefore a case of anabolism, not a category of its own, which is exactly what lets the whole chapter be organised around two poles.',
      why_cn: '教材指出，合成代谢反应也包括生成机体自身贮存物质的那些反应（第6.1.3节）。因此贮存属于合成代谢的一种情形，而不是独立的类别——这正是整章能围绕两极来组织的原因。' },

    { type: 'mcq',
      q_en: 'Which word in the book’s own definition of intermediary metabolism is the premise of the whole chapter?',
      q_cn: '教材对中间代谢的定义里，哪一个词是全章的前提？',
      options: [
        'That the reactions are mutually strictly COORDINATED',
        'That the reactions are irreversible',
        'That the reactions are localised in different compartments',
        'That the reactions are exergonic'
      ],
      answer: 0,
      optionRefs: { 1: '10-3', 2: '10-16', 3: '6-1-1' },
      optionNotes: {
        1: { en: 'Irreversibility is real, but it belongs to §10.1’s next argument — why catabolism is not anabolism reversed — not to the definition itself.', cn: '不可逆性确实存在，但它属于§10.1接下来的论证（分解代谢为何不是合成代谢的倒放），而不属于定义本身。' },
        2: { en: 'Compartmentation is one of the mechanisms that ENFORCES the coordination; it is a consequence of the premise, not the premise.', cn: '区室化是**实现**协调的机制之一；它是这一前提的结果，而不是前提本身。' },
        3: { en: 'Exergonic/endergonic is the bioenergetic vocabulary of chapter 6; the definition here says nothing about the sign of ΔG.', cn: '放能/吸能是第6章生物能量学的词汇；此处的定义完全没有提到ΔG的符号。' }
      },
      why_en: 'Intermediary metabolism is defined as the sum of MUTUALLY STRICTLY COORDINATED reactions running in a living cell. Without that qualifier the definition would describe a bag of reactions; §10.1 then shows how the pathways connect and §10.2 shows what enforces the coordination.',
      why_cn: '中间代谢被定义为活细胞中进行的、**彼此严格协调**的全部反应之总和。没有这个限定词，定义描述的就只是一堆反应而已；§10.1展示各途径如何连接，§10.2展示是什么在强制实现这种协调。' },

    { type: 'short',
      q_en: 'Functions (b) and (c) in the book’s list look like the same thing. What distinguishes them?',
      q_cn: '教材所列功能(b)与(c)看起来像是同一件事。它们的区别在哪里？',
      accept: ['building unit', 'precursor', 'exogenous', 'own', 'macromolecule', 'assemble'],
      answer_en: 'They are the two halves of construction. Function (b) is the conversion of EXOGENOUS substances into building units or precursors of the cell’s OWN macromolecules — making the parts, and making them the cell’s own. Function (c) is the synthesis, from those precursors, of proteins, nucleic acids, lipids and other cell components — assembling the parts.',
      answer_cn: '它们是「建造」的两半。功能(b)是把**外源**物质转变为细胞**自身**大分子的构件或前体——先做出零件，并使零件成为细胞自己的；功能(c)是由这些前体合成蛋白质、核酸、脂质及其他细胞组分——把零件组装起来。' }
  ],

  '10-2': [
    { type: 'mcq',
      q_en: 'Which conversion belongs to the FIRST phase of catabolism rather than the second?',
      q_cn: '下列哪一项转变属于分解代谢的**第一**阶段而非第二阶段？',
      options: [
        'Proteins to amino acids',
        'Fatty acids to acetyl-CoA by β-oxidation',
        'Pyruvate to acetyl-CoA',
        'Isocitrate to carbon dioxide'
      ],
      answer: 0,
      optionRefs: { 1: '8-4-4-2', 2: '7-8-5', 3: '6-2-2-2' },
      optionNotes: {
        1: { en: 'β-Oxidation is the second phase: it takes a building unit already released in phase 1 and converts it to the common intermediate.', cn: 'β-氧化属于第二阶段：它把第1阶段已经释放出来的构件转变为共同的中间体。' },
        2: { en: 'Also phase 2 — this is the step by which saccharides and glycerol reach acetyl-CoA.', cn: '同样属于第2阶段——糖类与甘油正是经这一步抵达乙酰CoA。' },
        3: { en: 'Oxidation all the way to CO₂ is the THIRD phase, the common endpoint of all three nutrient classes.', cn: '一路氧化到CO₂属于**第三**阶段，是三类养分共同的终点。' }
      },
      why_en: 'Phase 1 cleaves the large molecules into their building units: polysaccharides to monosaccharides, lipids to fatty acids and glycerol, proteins to amino acids. Only in phase 2 are those units converted into the small number of smaller intermediates that converge on acetyl-CoA.',
      why_cn: '第1阶段把大分子裂解为各自的构件：多糖→单糖，脂质→脂肪酸与甘油，蛋白质→氨基酸。要到第2阶段，这些构件才被转变为少数几种更小的、汇聚到乙酰CoA的中间体。' },

    { type: 'mcq',
      q_en: 'Besides the products of the third phase of catabolism, what does the book name as inputs to biosynthesis taken up from the environment?',
      q_cn: '除了分解代谢第三阶段的产物之外，教材点名的、从环境中摄取的生物合成输入是什么？',
      options: [
        'Monosaccharides, fatty acids and amino acids',
        'Water, carbon dioxide and ammonia',
        'Acetyl-CoA, pyruvate and α-ketoglutarate',
        'Nitrate and nitrite'
      ],
      answer: 1,
      optionRefs: { 0: '10-2', 2: '10-4', 3: '9-25' },
      optionNotes: {
        0: { en: 'Those are the building units released in the FIRST phase of catabolism, not small precursors taken up from outside.', cn: '这些是分解代谢**第一**阶段释放出的构件，而不是从外界摄取的小分子前体。' },
        2: { en: 'Those are the metabolites §10.1 singles out as regulatorily important pools; they arise inside the cell.', cn: '这些是§10.1挑出的、在调节上重要的代谢库；它们是在细胞内部产生的。' },
        3: { en: 'Nitrate and nitrite belong to the nitrogen cycle of chapter 9, not to this paragraph.', cn: '硝酸盐与亚硝酸盐属于第9章的氮循环，不是本段内容。' }
      },
      why_en: 'The book says biosynthesis starts from the small precursor molecules produced in the third phase of catabolism OR taken up from the environment, and names water, carbon dioxide and ammonia. The second anabolic phase then forms the building units and the third the cell’s own macromolecules.',
      why_cn: '教材说生物合成从分解代谢第三阶段产生的、或从环境中摄取的小分子前体出发，并点名了水、二氧化碳与氨。随后合成代谢的第二阶段形成构件，第三阶段生成细胞自身的大分子。' },

    { type: 'short',
      q_en: 'Why is it useful to picture catabolism as a funnel, and what sits at its waist?',
      q_cn: '把分解代谢想象成一个漏斗有什么用？漏斗的腰部是什么？',
      accept: ['acetyl-CoA', 'converge', 'three', 'one', 'CO2', 'water'],
      answer_en: 'Because three chemically unrelated classes of nutrient — saccharides, lipids, proteins — are narrowed down to one shared intermediate, acetyl-CoA (saccharides and glycerol via pyruvate, fatty acids by β-oxidation, most amino acids likewise), and then to a single common endpoint, CO₂ and water. Acetyl-CoA sits at the waist, which is why one branch point can govern the fate of everything the cell eats.',
      answer_cn: '因为三类化学上互不相干的养分——糖类、脂质、蛋白质——被收窄到同一个共用中间体乙酰CoA（糖类与甘油经丙酮酸，脂肪酸经β-氧化，大多数氨基酸亦然），再收到同一个终点CO₂与水。腰部正是乙酰CoA，因此一个分岔点就能决定细胞所摄取一切物质的去向。' }
  ],

  '10-3': [
    { type: 'mcq',
      q_en: 'Besides using different chemical routes, what SECOND separation between catabolism and anabolism does §10.1 give?',
      q_cn: '除了走不同的化学路线之外，§10.1还给出了分解代谢与合成代谢之间的哪一种**第二**重分离？',
      options: [
        'They use different pH optima',
        'They are localized in different parts of the eukaryotic cell',
        'They use different nicotinamide coenzymes',
        'They run at different times of day'
      ],
      answer: 1,
      optionRefs: { 0: '3-4', 2: '10-9', 3: '10-24' },
      optionNotes: {
        0: { en: 'pH and temperature effects on enzymes are real and are treated in chapter 3, but this passage says nothing about them.', cn: 'pH与温度对酶的影响确实存在、见第3章，但本段完全没有提到。' },
        2: { en: 'True for fatty acid synthesis versus degradation (NADPH vs NADH), but that is one of §10.1.2’s three differences, not the general second separation named here.', cn: '对脂肪酸的合成与分解而言（NADPH对NADH）确实如此，但那是§10.1.2的三点差异之一，不是此处所说的普遍的第二重分离。' },
        3: { en: 'Daily rhythms are a hormonal topic (melatonin) in §10.3, not a mechanism of separating opposed pathways.', cn: '昼夜节律是§10.3中的激素话题（褪黑素），不是分隔相反途径的机制。' }
      },
      why_en: 'Catabolic and anabolic reactions are usually also localized in different parts of the eukaryotic cell, and the separation of processes into different organelles makes it possible for both to run simultaneously and independently. Two separations, chemical and spatial, serving one purpose.',
      why_cn: '分解与合成反应在真核细胞中通常也定位于不同部位，把过程分置于不同细胞器，使二者得以同时且独立地进行。两重分离——化学的与空间的——服务于同一个目的。' },

    { type: 'mcq',
      q_en: 'Why can a catabolic pathway not simply be reversed for biosynthesis, at the level of the chemistry?',
      q_cn: '从化学层面看，为什么一条分解代谢途径不能简单地倒过来用于生物合成？',
      options: [
        'Because enzymes can only work in one direction',
        'Because the thermodynamics that make the catabolic direction favourable make the reverse unfavourable, so the anabolic route has to bypass those steps with different, ATP-driven chemistry',
        'Because the catabolic enzymes are destroyed as soon as they have acted',
        'Because the substrates are consumed and cannot be regenerated'
      ],
      answer: 1,
      optionRefs: { 0: '3-6', 2: '5-1', 3: '10-4' },
      optionNotes: {
        0: { en: 'An enzyme accelerates both directions of the reaction it catalyses; what is one-way is the thermodynamics of certain steps, not the enzyme.', cn: '酶对它所催化反应的正反两个方向都加速；单向的是某些步骤的热力学，而不是酶本身。' },
        2: { en: 'Enzymes are not consumed by catalysis. Irreversible destruction of a protein by proteolysis is a different topic (proenzyme activation, protein degradation).', cn: '酶不会因催化而被消耗。经蛋白水解不可逆地破坏蛋白质是另一个话题（酶原激活、蛋白降解）。' },
        3: { en: 'Metabolites are continuously formed and consumed — the organism is in dynamic equilibrium, so exhaustion of a substrate is not the argument here.', cn: '代谢物在不断生成与消耗——机体处于动态平衡，所以此处的论据并不是底物被耗尽。' }
      },
      why_en: 'The book gives the reason as the fundamental difference in energy demands: catabolic processes produce ATP, anabolic reactions require energy and consume ATP. Node 10-7 shows the concrete case — a kinase spends ATP going down, a phosphatase throws the phosphate away going up.',
      why_cn: '教材给出的理由是能量需求上的根本差异：分解代谢过程产生ATP，合成代谢反应需要能量并消耗ATP。节点10-7给出了具体案例——下行时激酶花掉一个ATP，上行时磷酸酶又把磷酸基扔掉。' },

    { type: 'short',
      q_en: 'Name the two kinds of separation between catabolism and anabolism, and the single purpose both serve.',
      q_cn: '说出分解代谢与合成代谢之间的两种分离，以及二者共同服务的那一个目的。',
      accept: ['different route', 'irreversib', 'organelle', 'compartment', 'independent', 'regulat'],
      answer_en: 'Chemical separation — the two run by different routes, because their energy demands differ fundamentally — and spatial separation, since they are localized in different parts of the eukaryotic cell. Both exist so that the two directions can be regulated INDEPENDENTLY and can run at the same time without undoing each other.',
      answer_cn: '化学上的分离——二者走不同的路线，因为能量需求根本不同；以及空间上的分离——它们定位于真核细胞的不同部位。两者的存在都是为了让两个方向能被**独立**调节，并且能同时进行而不互相抵消。' }
  ],

  '10-4': [
    { type: 'mcq',
      q_en: 'What does the book mean by a nodal point of metabolism?',
      q_cn: '教材所说的代谢「节点」是什么意思？',
      options: [
        'A place in the cell where several organelles touch',
        'A metabolite that is a common intermediate of different processes',
        'An enzyme that catalyses an irreversible reaction',
        'A metabolite present at unusually high concentration'
      ],
      answer: 1,
      optionRefs: { 0: '10-16', 2: '10-15', 3: '10-4' },
      optionNotes: {
        0: { en: 'A nodal point is defined by shared chemistry, not by anatomical location; physical separation of processes is compartmentation, a different idea.', cn: '节点由共享的化学物质定义，而不是由解剖位置定义；把过程在物理上分开是区室化，那是另一个概念。' },
        2: { en: 'That is the controlling reaction of §10.2 — where regulation has leverage, which is not the same as where pathways meet.', cn: '那是§10.2的「调控反应」——调节能够发力之处，与「途径交汇之处」并不是一回事。' },
        3: { en: 'Reversed: the book insists a key metabolite need NOT be at high concentration; mmol/l is typical and turnover, not concentration, is the point.', cn: '正好说反了：教材强调关键代谢物**未必**浓度高；mmol/l量级是常态，要点在周转而非浓度。' }
      },
      why_en: 'The connection of metabolic processes occurs at certain nodal points, which means that different processes have common intermediates. Acetyl-CoA is the model case, with three inputs and three outputs in Obr. 10.1.',
      why_cn: '代谢过程的连接发生在若干节点上，意即不同的过程拥有共同的中间体。乙酰CoA是范例，在图10.1中三进三出。' },

    { type: 'mcq',
      q_en: 'The body produces about 70 kg of ATP in 24 hours. What is that figure in the book for?',
      q_cn: '人体在24小时内产生约70公斤ATP。教材举这个数字是为了说明什么？',
      options: [
        'To show that ATP is the most abundant substance in the body by mass',
        'To show that a pool can be small in concentration while its turnover is very rapid',
        'To give the daily energy intake needed by an adult',
        'To show that ATP is stored in a dedicated organelle'
      ],
      answer: 1,
      optionRefs: { 0: '10-4', 2: '1-4', 3: '10-16' },
      optionNotes: {
        0: { en: 'The opposite: the standing amount is small — concentrations of key metabolites are of the order of mmol/l. The 70 kg is production over a day, not a stock.', cn: '恰恰相反：存量很小——关键代谢物的浓度只有mmol/l量级。70公斤是一天的产量，不是存量。' },
        2: { en: 'Nutrition and energy intake are chapter 1 material; this figure measures internal turnover, not what is eaten.', cn: '营养与能量摄入是第1章的内容；这个数字量度的是体内周转，而不是吃进去多少。' },
        3: { en: 'Storage in a compartment is a different concept — compartmentation as a regulatory mechanism. A pool is not a warehouse.', cn: '在某个区室中贮存是另一个概念——作为调节机制的区室化。「库」不是仓库。' }
      },
      why_en: 'A pool is defined by the ability to hold a level steady, not by a high concentration. Concentrations may be of the order of mmol/l while turnover is very rapid, and the 70 kg per 24 hours is the extreme illustration: a few grams standing, cycled thousands of times a day.',
      why_cn: '「库」由维持水平稳定的能力来定义，而不是由高浓度来定义。浓度可能只有mmol/l量级而周转极快，每24小时70公斤正是最极端的例证：存量不过几克，一天却循环数千次。' },

    { type: 'short',
      q_en: 'Why does the pool concept mean that regulation must control rates rather than accumulate stocks?',
      q_cn: '为什么「代谢库」这个概念意味着调节必须控制速率、而不是囤积存量？',
      accept: ['dynamic equilibrium', 'turnover', 'rate', 'flow', 'formed', 'consumed'],
      answer_en: 'Because the organism is in dynamic equilibrium: compounds are formed on one side and consumed in another phase of metabolism, so what exists at any moment is a small, constantly renewed pool. Metabolism is a set of flows, not stocks, and what a regulatory system can act on is the rate at which such a pool is filled and drained — which is why §10.2 is about controlling reaction rates.',
      answer_cn: '因为机体处于动态平衡之中：化合物一方面被生成，在代谢的另一阶段又被消耗，因此任一时刻存在的都是一个小而不断更新的库。代谢是一组流量而非存量，调节系统能作用的是这个库被充满与被排空的**速率**——这正是§10.2讲控制反应速率的原因。' }
  ],

  '10-5': [
    { type: 'mcq',
      q_en: 'Obr. 10.1 draws three arrows leaving acetyl-CoA. Which set is correct?',
      q_cn: '图10.1中有三支箭头离开乙酰CoA。哪一组是正确的？',
      options: [
        'Pyruvate, fatty acids, amino acids',
        'The citrate cycle and respiratory chain, lipids, isoprenoids',
        'Glycogen, proteins, nucleic acids',
        'Ketone bodies, cholesterol, pentoses'
      ],
      answer: 1,
      optionRefs: { 0: '10-5', 2: '10-1', 3: '10-8' },
      optionNotes: {
        0: { en: 'Reversed: those are the three intermediates on the INPUT side — saccharides via pyruvate, lipids via fatty acids, proteins via amino acids.', cn: '方向反了：这三者是**输入**侧的中间体——糖类经丙酮酸、脂质经脂肪酸、蛋白质经氨基酸。' },
        2: { en: 'Storage and macromolecule synthesis are anabolism in general (§10.1), but they are not the three exits drawn in this figure.', cn: '贮存与大分子合成总体上属于合成代谢（§10.1），但它们不是这幅图中画出的三个出口。' },
        3: { en: 'Ketone bodies belong to the overflow discussed in §10.1.2, and pentoses come from the pentose phosphate route, not from this diagram.', cn: '酮体属于§10.1.2讨论的「溢出」，戊糖来自磷酸戊糖途径，都不在这幅图里。' }
      },
      why_en: 'The figure gives one catabolic exit — the citrate cycle and respiratory chain — and two anabolic ones, to lipids and to isoprenoids. That is the burn-or-build branch point where the cell’s energy status has to make itself felt.',
      why_cn: '图中给出一个分解出口——柠檬酸循环与呼吸链——以及两个合成出口：通向脂质与异戊二烯类。这正是「烧还是建」的分岔点，细胞的能量状态必须在此发挥作用。' },

    { type: 'mcq',
      q_en: 'In Obr. 10.1, which named intermediate stands between LIPIDS and acetyl-CoA?',
      q_cn: '在图10.1中，**脂质**与乙酰CoA之间被点名的中间体是什么？',
      options: [
        'Glycerol',
        'Fatty acids',
        'Pyruvate',
        'Citrate'
      ],
      answer: 1,
      optionRefs: { 0: '10-8', 2: '7-8-5', 3: '6-2-2-1' },
      optionNotes: {
        0: { en: 'Glycerol is the other half of a fat and does reach metabolism — but as a triose joining SACCHARIDE metabolism, and it is not the intermediate drawn in this figure.', cn: '甘油是脂肪的另一半，它确实进入代谢——但是作为丙糖并入**糖类**代谢，而且不是这幅图中画出的中间体。' },
        2: { en: 'Pyruvate is the intermediate on the SACCHARIDE arrow, not the lipid one.', cn: '丙酮酸是**糖类**那条箭头上的中间体，不是脂质那条。' },
        3: { en: 'Citrate is formed AFTER acetyl-CoA, when it enters the citrate cycle; it is downstream of the hub, not upstream.', cn: '柠檬酸是在乙酰CoA**之后**、进入柠檬酸循环时才形成的；它在枢纽的下游而非上游。' }
      },
      why_en: 'Each nutrient class passes through exactly one named intermediate before the hub: saccharides via pyruvate, lipids via fatty acids, proteins via amino acids. Keeping the three straight is what makes the figure readable as an argument rather than a decoration.',
      why_cn: '每一类养分在抵达枢纽前恰好经过一个被点名的中间体：糖类经丙酮酸、脂质经脂肪酸、蛋白质经氨基酸。把这三条分清楚，这幅图才读得出论证，而不只是装饰。' },

    { type: 'short',
      q_en: 'Classify the three exits of acetyl-CoA in Obr. 10.1 as catabolic or anabolic, and say what the split means.',
      q_cn: '把图10.1中乙酰CoA的三个出口按分解／合成分类，并说明这种分岔意味着什么。',
      accept: ['citrate', 'respiratory', 'catabolic', 'lipid', 'isoprenoid', 'anabolic', 'energy'],
      answer_en: 'One exit is catabolic — the citrate cycle and respiratory chain, i.e. oxidation for energy — and two are anabolic: lipids, and isoprenoids (the family that includes steroids). The hub is therefore a burn-or-build branch point, and which way the carbon goes has to be decided by the cell’s energy status, which is what §10.1.3 goes on to say.',
      answer_cn: '一个出口是分解性的——柠檬酸循环与呼吸链，即为获能而氧化；两个是合成性的：脂质，以及异戊二烯类（包括类固醇在内的家族）。因此这个枢纽是「烧还是建」的分岔点，碳往哪边走必须由细胞的能量状态决定，这正是§10.1.3接下来要讲的。' }
  ],

  '10-6': [
    { type: 'mcq',
      q_en: 'Which of these is NOT one of the three steps the book picks out as the key points of glycolysis?',
      q_cn: '下列哪一项**不是**教材挑出作为糖酵解关键点的三个步骤之一？',
      options: [
        'Cleavage of Fru-1,6-bisphosphate into two phosphotrioses',
        'Phosphorylation of a monosaccharide at the expense of ATP to give Glc-6-(P)',
        'Dehydrogenation of 3-(P)-glyceraldehyde to phosphoglycerate',
        'Dehydration of 2-phosphoglycerate to phosphoenolpyruvate'
      ],
      answer: 1,
      optionRefs: { 0: '7-8-1', 2: '7-8-2', 3: '7-8-3' },
      optionNotes: {
        0: { en: 'This IS one of the three: the aldolase step, where a six-carbon chain becomes two three-carbon ones.', cn: '这**是**三点之一：即醛缩酶那一步，六碳链在此变成两个三碳链。' },
        2: { en: 'Also one of the three, and the one to read carefully — the book compresses two enzymatic steps into it, since the dehydrogenase actually gives 1,3-bisphosphoglycerate and phosphoglycerate kinase then gives 3-phosphoglycerate.', cn: '同样是三点之一，而且要仔细读——教材把两个酶促步骤压缩进了这一点：脱氢酶实际给出的是1,3-二磷酸甘油酸，随后磷酸甘油酸激酶才给出3-磷酸甘油酸。' },
        3: { en: 'Also one of the three: the enolase step, which creates the high-energy enol phosphate.', cn: '同样是三点之一：烯醇化酶那一步，它造出高能的烯醇磷酸。' }
      },
      why_en: 'Phosphorylation of a monosaccharide at the expense of ATP is real, but the book presents it as the FIRST STEP OF SACCHARIDE METABOLISM in general — the alternative to phosphorolysis of glycogen, which gives Glc-1-(P) and costs no ATP — not as one of the three key points inside glycolysis. Those three are the cleavage of Fru-1,6-bisphosphate, the dehydrogenation of 3-(P)-glyceraldehyde, and the dehydration of 2-phosphoglycerate.',
      why_cn: '消耗ATP把单糖磷酸化这一步确实存在，但教材是把它当作糖类代谢**总体上的第一步**来讲的——即糖原磷酸解（给出Glc-1-(P)、不花ATP）之外的另一条路——而不是糖酵解内部的三个关键点之一。那三点是：Fru-1,6-二磷酸的裂解、3-(P)-甘油醛的脱氢、2-磷酸甘油酸的脱水。' },

    { type: 'mcq',
      q_en: 'Why is mobilising stored glycogen cheaper for the cell than taking up free glucose?',
      q_cn: '为什么动用贮存的糖原对细胞来说比摄取游离葡萄糖更便宜？',
      options: [
        'Because glycogen is already in the mitochondrion',
        'Because phosphorolysis uses inorganic phosphate and costs no ATP, whereas trapping a free sugar costs one ATP',
        'Because glycogen breakdown yields NADPH instead of NADH',
        'Because glycogen enters glycolysis after the aldolase step'
      ],
      answer: 1,
      optionRefs: { 0: '10-9', 2: '7-7-1', 3: '10-6' },
      optionNotes: {
        0: { en: 'Compartment arguments belong elsewhere — it is fatty acid degradation that is mitochondrial and its synthesis cytoplasmic. Glycogen mobilisation is not presented in terms of location.', cn: '区室的论证属于别处——线粒体里进行的是脂肪酸的降解，其合成在胞质。糖原的动员在此不是从位置角度讲的。' },
        2: { en: 'NADPH is the product of the pentose phosphate route, and it is reserved for synthetic reactions; glycogen breakdown is not its source.', cn: 'NADPH是磷酸戊糖路线的产物，被保留给合成反应；糖原分解不是它的来源。' },
        3: { en: 'Phosphorolysis gives Glc-1-(P), a hexose phosphate — it enters well before the cleavage into trioses, not after it.', cn: '磷酸解给出的是Glc-1-(P)这个己糖磷酸——它在裂解为丙糖之前很久就进入了，而不是之后。' }
      },
      why_en: 'The first step of saccharide metabolism is the formation of a phosphorylated monosaccharide, by either of two routes with different price tags: phosphorylation of a free monosaccharide at the expense of ATP (Glc-6-(P)), or phosphorolysis of glycogen with inorganic phosphate (Glc-1-(P)), which costs nothing.',
      why_cn: '糖类代谢的第一步是形成磷酸化的单糖，可经两条价签不同的路线：消耗ATP把游离单糖磷酸化（Glc-6-(P)），或用无机磷酸对糖原进行磷酸解（Glc-1-(P)），后者不花代价。' },

    { type: 'short',
      q_en: 'What are the two fates of pyruvate the book gives, and under which conditions?',
      q_cn: '教材给出的丙酮酸两种去向是什么？各在什么条件下？',
      accept: ['aerobic', 'citrate cycle', 'CO2', 'water', 'anaerobic', 'lactate', 'muscle'],
      answer_en: 'Under aerobic conditions pyruvate is degraded in the citrate cycle to carbon dioxide and water. Under anaerobic conditions it is reduced in muscle to lactate — which is also, per §10.1.1, the carbon source gluconeogenesis later recovers.',
      answer_cn: '有氧条件下，丙酮酸在柠檬酸循环中被降解为二氧化碳与水；无氧条件下，它在肌肉中被还原为乳酸——按§10.1.1，乳酸随后也正是糖异生所回收的碳源。' }
  ],

  '10-7': [
    { type: 'mcq',
      q_en: 'The book says the two irreversible hexose phosphorylations of glycolysis must be catalysed in the synthetic direction by a different kind of enzyme. Which kind?',
      q_cn: '教材说糖酵解中两次不可逆的己糖磷酸化，在合成方向上必须由另一类酶来催化。是哪一类？',
      options: [
        'Other kinases, working at higher ATP concentrations',
        'Hydrolases — that is, the phosphatases glucose-6-phosphatase and fructose-1,6-bisphosphatase',
        'Carboxylases',
        'Transferases moving the phosphate to another sugar'
      ],
      answer: 1,
      optionRefs: { 0: '6-1-2-2', 2: '10-7', 3: '7-10-2' },
      optionNotes: {
        0: { en: 'Running a kinase backwards is exactly what the irreversibility forbids; more ATP does not make an unfavourable direction favourable.', cn: '把激酶倒着开正是不可逆性所禁止的；ATP再多也不能让不利的方向变得有利。' },
        2: { en: 'Carboxylation is how the OTHER bypass works — pyruvate to oxaloacetate — not how the hexose phosphates are handled.', cn: '羧化是**另一个**旁路的做法——丙酮酸到草酰乙酸——不是处理己糖磷酸的方式。' },
        3: { en: 'Transfer of a sugar phosphate to another acceptor is glycosyltransferase chemistry; here the phosphate is simply hydrolysed off.', cn: '把糖磷酸转给另一个受体属于糖基转移酶的化学；此处磷酸基是被直接水解掉的。' }
      },
      why_en: 'The book calls them hydrolases, which is correct though unusual: a phosphatase hydrolyses a phosphate ester (EC 3.1.3.x). Naming them this way is worth flagging so the term is not mistaken for a misprint.',
      why_cn: '教材把它们称作水解酶，这正确但不常见：磷酸酶水解的是磷酸酯（EC 3.1.3.x）。特别标出这个叫法，以免被误认为印错。' },

    { type: 'mcq',
      q_en: 'What carbon source does the book give for gluconeogenesis in the animal organism?',
      q_cn: '教材给出的动物机体糖异生的碳源是什么？',
      options: [
        'Acetyl-CoA from fatty acid degradation',
        'Lactic acid, which arose by anaerobic glycolysis',
        'Glycerol released from stored fat only',
        'Carbon dioxide fixed onto a five-carbon acceptor'
      ],
      answer: 1,
      optionRefs: { 0: '10-10', 2: '10-8', 3: '9-17' },
      optionNotes: {
        0: { en: 'Exactly what the animal organism CANNOT use: it cannot convert acetyl-CoA into pyruvate, so fat carbon never becomes sugar (§10.1.3).', cn: '这恰恰是动物机体**不能**用的：它无法把乙酰CoA转变为丙酮酸，所以脂肪的碳永远变不成糖（§10.1.3）。' },
        2: { en: 'Glycerol does join saccharide metabolism as a triose, but it is not what this paragraph names as the source, and “only” is wrong in any case.', cn: '甘油确实能作为丙糖并入糖类代谢，但它不是本段所点名的碳源，而且「只有」这个说法本身也不对。' },
        3: { en: 'Carboxylation of a five-carbon acceptor is RubisCO and the Calvin cycle, i.e. photosynthetic CO₂ fixation in chapter 9.', cn: '把CO₂固定到五碳受体上是RubisCO与卡尔文循环，即第9章的光合CO₂固定。' }
      },
      why_en: 'Gluconeogenesis is presented first of all as a recovery route: it uses the lactic acid produced by anaerobic glycolysis, and is essentially reversed glycolysis from phosphoenolpyruvate up to the six-carbon structures. The section closes by adding that SOME amino acids can also be converted this way.',
      why_cn: '糖异生首先被呈现为一条回收路线：它利用无氧糖酵解产生的乳酸，本质上是从磷酸烯醇丙酮酸向上倒转的糖酵解。本节结尾补充说，**某些**氨基酸也可经这条路线转化。' },

    { type: 'short',
      q_en: 'Explain why the glycolysis / gluconeogenesis round trip costs energy, and what the cell buys with it.',
      q_cn: '解释为什么「糖酵解—糖异生」这一来一回是净耗能的，以及细胞用这笔代价买到了什么。',
      accept: ['kinase', 'ATP', 'phosphatase', 'hydrolys', 'independent', 'regulat'],
      answer_en: 'Going down, a kinase spends an ATP to install the phosphate; going up, a phosphatase simply hydrolyses that phosphate off and the energy is lost. The ATP is therefore not recovered. What the cell buys is the point of §10.1: two separate routes that can be regulated independently, so a signal accelerating one does not automatically accelerate the other.',
      answer_cn: '下行时激酶花掉一个ATP把磷酸基装上；上行时磷酸酶直接把它水解掉，这份能量就损失了，ATP收不回来。细胞买到的正是§10.1的要点：两条各自独立、可以分别调控的路线，于是加速其一的信号不会自动加速另一个。' }
  ],

  '10-8': [
    { type: 'mcq',
      q_en: 'What must happen before a fatty acid can be degraded, and what does the book say it costs?',
      q_cn: '脂肪酸被降解之前必须先发生什么？教材说这要花多少代价？',
      options: [
        'Carboxylation to malonyl-CoA, costing one CO₂',
        'Activation to an acyl-CoA, consuming 1 ATP',
        'Phosphorylation to an acyl phosphate, consuming 1 ATP',
        'Hydrolysis to glycerol, costing nothing'
      ],
      answer: 1,
      optionRefs: { 0: '8-3-1', 2: '10-6', 3: '8-4-1' },
      optionNotes: {
        0: { en: 'Carboxylation to malonyl-CoA is the opening step of fatty acid SYNTHESIS and has no counterpart in degradation — it is difference 1 in §10.1.2.', cn: '羧化为丙二酰CoA是脂肪酸**合成**的开场步骤，在分解中没有对应物——即§10.1.2的差异1。' },
        2: { en: 'Phosphorylation at the cost of ATP is how a free MONOSACCHARIDE is trapped; the fatty acid is activated as a thioester with CoA instead.', cn: '消耗ATP进行磷酸化是把游离**单糖**扣住的方式；脂肪酸则是以与CoA形成硫酯的方式被活化。' },
        3: { en: 'Hydrolysis of the fat into glycerol and fatty acids happens first, but it is the release of the fatty acid, not its preparation for β-oxidation.', cn: '把脂肪水解为甘油与脂肪酸确实在更前面，但那是把脂肪酸释放出来，而不是为β-氧化做准备。' }
      },
      why_en: 'Degradation must be INITIATED BY ACTIVATION, which consumes 1 ATP, and from the fatty acid an acyl-CoA arises. Note the book’s figure of one ATP is literally true but understates the cost, since the reaction goes ATP to AMP + PPᵢ, i.e. two high-energy equivalents.',
      why_cn: '降解必须**先由活化启动**，该活化消耗1个ATP，由脂肪酸生成酰基CoA。注意教材说的一个ATP在字面上成立，但低估了代价：该反应走的是ATP→AMP+PPᵢ，相当于两个高能键当量。' },

    { type: 'mcq',
      q_en: 'Under what circumstance does the book say acetoacetic acid and acetone can arise?',
      q_cn: '教材说在什么情况下会生成乙酰乙酸与丙酮？',
      options: [
        'When β-oxidation is blocked and fatty acids accumulate',
        'When the organism is FLOODED with acetyl-CoA, the example given being diabetes',
        'When NADPH is unavailable for fatty acid synthesis',
        'When glycerol cannot be phosphorylated'
      ],
      answer: 1,
      optionRefs: { 0: '8-4-4-3', 2: '10-9', 3: '10-8' },
      optionNotes: {
        0: { en: 'Backwards: the problem is too MUCH acetyl-CoA arriving, i.e. β-oxidation running hard, not β-oxidation being blocked.', cn: '说反了：问题是抵达的乙酰CoA**太多**，也就是β-氧化开得很猛，而不是β-氧化被阻断。' },
        2: { en: 'NADPH is the hydrogen donor for fatty acid SYNTHESIS; its absence is not the condition the book attaches to ketone body formation.', cn: 'NADPH是脂肪酸**合成**的供氢体；教材并没有把它的缺乏与酮体的生成联系起来。' },
        3: { en: 'Glycerol phosphorylation is the route by which the glycerol half of a fat joins saccharide metabolism — a different sentence of the same section.', cn: '甘油的磷酸化是脂肪中甘油那一半并入糖类代谢的路径——是同一节里另外一句话的内容。' }
      },
      why_en: 'Ketone bodies are presented as an overflow, not a separate pathway: when acetyl-CoA arrives faster than the citrate cycle can take it away, two of its molecules give acetoacetic acid, and acetone follows. Note that the book’s sentence here is incomplete against standard accounts, and node 10-8 flags that.',
      why_cn: '酮体被呈现为一种「溢出」，而不是另一条独立通路：当乙酰CoA的到达速度超过柠檬酸循环的消耗能力时，由其中两个分子生成乙酰乙酸，随后是丙酮。注意教材此处这句话相对标准论述并不完整，节点10-8已作标注。' },

    { type: 'short',
      q_en: 'Metabolically, a fat is two different molecules stitched together. Explain.',
      q_cn: '从代谢上看，一个脂肪分子其实是两种不同的东西缝在一起。请解释。',
      accept: ['glycerol', 'triose', 'glyceraldehyde', 'saccharide', 'fatty acid', 'acetyl-CoA', 'activation'],
      answer_en: 'Hydrolysis releases glycerol and fatty acids, and the two halves go different ways. Glycerol is oxidized to a triose, glyceraldehyde, and in phosphorylated form joins saccharide metabolism — chemically it is a sugar. The fatty acid tails must first be activated at the cost of 1 ATP to acyl-CoA, and are then degraded two carbons at a time into the shared acetyl-CoA pool.',
      answer_cn: '水解释放出甘油与脂肪酸，两半的去向不同。甘油被氧化为丙糖（甘油醛），磷酸化后并入糖类代谢——从化学上讲它就是糖。脂肪酸尾巴则必须先花1个ATP活化为酰基CoA，然后每次两个碳地被降解进共用的乙酰CoA库。' }
  ],

  '10-9': [
    { type: 'mcq',
      q_en: 'Why does it matter that the fatty acid synthase is a multienzyme complex whose intermediates stay bound?',
      q_cn: '脂肪酸合成酶是一个中间体始终结合其上的多酶复合体，这一点为什么要紧？',
      options: [
        'Because it makes the pathway reversible on demand',
        'Because a pathway that never releases its intermediates cannot be run backwards or intercepted by another pathway',
        'Because it allows the intermediates to be stored for later use',
        'Because it lets the complex work without any coenzyme'
      ],
      answer: 1,
      optionRefs: { 0: '10-3', 2: '10-4', 3: '3-2' },
      optionNotes: {
        0: { en: 'The reverse: holding the intermediates is one of the things that keeps synthesis from being degradation run backwards.', cn: '恰恰相反：把中间体扣住，正是使合成不至于变成「分解倒着跑」的因素之一。' },
        2: { en: 'A free intermediate available for later use would be a pool; bound intermediates are precisely NOT a pool, since nothing else can draw on them.', cn: '可供以后取用的游离中间体那叫「库」；结合态的中间体恰恰**不是**库，因为别的东西取不到它们。' },
        3: { en: 'The complex still needs its hydrogen donor — NADPH — so it is not coenzyme-free; that is difference 2 of the three.', cn: '该复合体仍然需要供氢体NADPH，所以并非不用辅酶；那是三点差异中的第二点。' }
      },
      why_en: 'Difference 3 is really two claims: a different compartment (cytoplasm versus mitochondria) and a different architecture. All intermediates remain bound to the enzymes and only the finished sixteen- and eighteen-carbon acyl-CoA are released, which seals the pathway off from reversal and from raiding.',
      why_cn: '差异3其实包含两个论断：不同区室（胞质对线粒体）与不同结构。所有中间体都保持与酶结合，只有完成的十六碳与十八碳酰基CoA才被释放，这就把这条途径与「逆转」和「被截取」隔绝开了。' },

    { type: 'mcq',
      q_en: 'Besides acyl-CoA, what else is needed to build an actual fat molecule, and where does it come from?',
      q_cn: '除了酰基CoA之外，构建一个真正的脂肪分子还需要什么？它来自哪里？',
      options: [
        'Malonyl-CoA, from carboxylation of acetyl-CoA',
        'Glycerophosphate, from sugar metabolism',
        'Cholesterol, from the isoprenoid branch',
        'Phosphatidylinositol, from the membrane'
      ],
      answer: 1,
      optionRefs: { 0: '8-3-1', 2: '8-2-4-4', 3: '10-19' },
      optionNotes: {
        0: { en: 'Malonyl-CoA is the activated two-carbon donor for building the acyl chain itself, not the backbone the chains are attached to.', cn: '丙二酰CoA是构建酰基链本身所用的活化二碳供体，不是酰基链所连接的骨架。' },
        2: { en: 'Cholesterol is one of the other fates of acetyl-CoA (the isoprenoid/steroid family of Obr. 10.1), not a component of a triacylglycerol.', cn: '胆固醇是乙酰CoA的另一个去向（图10.1中的异戊二烯／类固醇家族），不是三酰甘油的组分。' },
        3: { en: 'Phosphatidylinositol appears in this chapter as the SIGNALLING lipid of the phosphoinositide cascade, not as a building block for storage fat.', cn: '磷脂酰肌醇在本章中是磷酸肌醇级联里的**信号**脂类，而不是贮存脂肪的构件。' }
      },
      why_en: 'For the synthesis of a fat molecule one also needs glycerophosphate, and that comes from sugar metabolism. Together with the glycerol point in node 10-8 this closes a loop: sugars supply the backbone of a fat and fat hydrolysis hands the backbone back — but, per §10.1.3, the acyl carbon never makes the return trip.',
      why_cn: '合成一分子脂肪还需要甘油磷酸，而它来自糖代谢。与节点10-8中关于甘油的那点合起来，这闭合了一个回路：糖提供脂肪的骨架，脂肪水解又把骨架还回去——但按§10.1.3，酰基上的碳永远回不来。' },

    { type: 'short',
      q_en: 'Give the three fundamental differences between fatty acid synthesis and fatty acid degradation.',
      q_cn: '说出脂肪酸合成与脂肪酸分解之间的三点根本差异。',
      accept: ['malonyl', 'carboxylat', 'NADPH', 'NADH', 'mitochond', 'cytoplasm', 'multienzyme'],
      answer_en: 'First, synthesis begins with activation of the inactive methyl group of the acetyl by carboxylation to malonyl-CoA, a step degradation has no counterpart to. Second, the hydrogen donor for synthesis is NADPH whereas oxidation produces NADH. Third, the two are separated within the cell: degradation is mitochondrial, synthesis runs on a cytoplasmic multienzyme complex that releases only the finished C16 and C18 acyl-CoA.',
      answer_cn: '第一，合成始于把乙酰基上惰性的甲基羧化活化为丙二酰CoA，分解中没有对应的步骤。第二，合成的供氢体是NADPH，而氧化产生的是NADH。第三，二者在细胞内被分开：分解在线粒体，合成在胞质的多酶复合体上进行，只释放完成的C16与C18酰基CoA。' }
  ],

  '10-10': [
    { type: 'mcq',
      q_en: 'Why does an excess of SUGAR end up stored as fat, according to §10.1.3?',
      q_cn: '按§10.1.3，为什么**糖**摄入过量最终会以脂肪的形式贮存？',
      options: [
        'Because sugars cannot be stored as glycogen at all',
        'Because both nutrient classes are degraded to acetyl-CoA, and when energy demands are low acetyl-CoA is used above all for the synthesis of fatty acids and fats',
        'Because glucose is converted directly into a fatty acid without an intermediate',
        'Because the citrate cycle refuses acetyl-CoA when glucose is abundant'
      ],
      answer: 1,
      optionRefs: { 0: '7-12-1', 2: '8-3-4', 3: '6-2-2-1' },
      optionNotes: {
        0: { en: 'Glycogen storage certainly exists — it is the book’s own example of anabolism in §10.1 — so “cannot be stored at all” is false.', cn: '糖原贮存当然存在——它正是§10.1中教材自己举的合成代谢例子——所以「根本不能贮存」是错的。' },
        2: { en: 'There is an intermediate, and it is the whole point: everything passes through acetyl-CoA, which is why the two nutrient classes are connected at all.', cn: '有中间体，而且这正是要点：一切都经过乙酰CoA，两类养分正因此才产生联系。' },
        3: { en: 'Nothing refuses acetyl-CoA; the citrate cycle oxidizes it when the cell NEEDS energy. Which route wins is set by energy status, not by a blockade.', cn: '没有谁「拒绝」乙酰CoA；细胞**需要**能量时柠檬酸循环就氧化它。哪条路胜出取决于能量状态，而不是被封锁。' }
      },
      why_en: 'Saccharides and lipids both funnel to acetyl-CoA, and the cell’s energy status decides its fate: oxidized when energy is needed, invested in fatty acids and fats when demands are low. Hence excess of EITHER nutrient is converted into fat and stored.',
      why_cn: '糖类与脂质都汇聚到乙酰CoA，其去向由细胞的能量状态决定：需要能量时被氧化，需求低时被投入脂肪酸与脂肪。因此**两类**养分中任何一类过量，都会被转变为脂肪贮存起来。' },

    { type: 'mcq',
      q_en: 'The book restricts the claim “fats cannot make sugars” to the ANIMAL organism. Why is that qualifier correct?',
      q_cn: '教材把「脂肪不能生成糖」这一论断限定在**动物**机体。这个限定词为什么是正确的？',
      options: [
        'Because plants do not store fat',
        'Because plants and some microorganisms have the glyoxylate cycle, which accomplishes exactly this conversion',
        'Because plants make their sugar photosynthetically and never need the conversion',
        'Because in plants β-oxidation runs in the reverse direction'
      ],
      answer: 1,
      optionRefs: { 0: '8-2-2-1', 2: '9-15', 3: '8-4-4-2' },
      optionNotes: {
        0: { en: 'The opposite: oilseeds are exactly the case where stored fat has to be turned into sugar during germination.', cn: '恰恰相反：油料种子正是萌发时必须把贮存的脂肪变成糖的典型情形。' },
        2: { en: 'True that plants photosynthesize, but a germinating seed in the dark lives off stored fat and must convert it — which is what the glyoxylate cycle is for.', cn: '植物确实进行光合作用，但黑暗中萌发的种子靠贮存的脂肪生活、必须把它转化——乙醛酸循环正为此而设。' },
        3: { en: 'β-Oxidation is not run backwards anywhere; the plant solution is a different pathway, not a reversed one.', cn: 'β-氧化在任何地方都不会倒着跑；植物的办法是另一条通路，而不是把它反过来。' }
      },
      why_en: 'The load-bearing sentence is that the animal organism cannot convert acetyl-CoA into pyruvate, the starting compound for saccharide synthesis. Plants and some microorganisms possess the glyoxylate cycle (kap. 6.2.3), which does that conversion, and that is how a germinating oilseed turns stored fat into sugar.',
      why_cn: '承重的一句是：动物机体无法把乙酰CoA转变为丙酮酸（糖合成的起始化合物）。植物与某些微生物拥有乙醛酸循环（第6.2.3节），能完成这一转变，萌发的油料种子正是这样把贮存的脂肪变成糖的。' },

    { type: 'short',
      q_en: 'Which part of a fat CAN still reach saccharide metabolism in an animal, and which part cannot?',
      q_cn: '在动物体内，脂肪的哪一部分**仍然**能进入糖类代谢？哪一部分不能？',
      accept: ['glycerol', 'triose', 'acyl', 'acetyl-CoA', 'pyruvate', 'cannot'],
      answer_en: 'The glycerol half can: it is oxidized to a triose and, phosphorylated, joins saccharide metabolism. The acyl carbon cannot, because it arrives as acetyl-CoA and the animal organism cannot convert acetyl-CoA back into pyruvate. Since the acyl chains are the great majority of a fat’s mass, the exception is small and the rule stands.',
      answer_cn: '甘油那一半可以：它被氧化为丙糖，磷酸化后并入糖类代谢。酰基上的碳不行，因为它是以乙酰CoA的形式抵达的，而动物机体无法把乙酰CoA变回丙酮酸。由于酰基链占脂肪质量的绝大部分，这个例外很小，规律依然成立。' }
  ],

  '10-11': [
    { type: 'mcq',
      q_en: 'How many macroergic compounds are formed directly IN the citrate cycle, and at which step?',
      q_cn: '柠檬酸循环**本身**直接生成几个高能化合物？在哪一步？',
      options: [
        'Three ATP, during the three NADH-forming oxidations',
        'One GTP, during the oxidative decarboxylation of α-oxoglutarate',
        'One ATP, during the dehydrogenation of succinate to fumarate',
        'None; all the ATP comes from the respiratory chain'
      ],
      answer: 1,
      optionRefs: { 0: '6-2-4-5', 2: '6-2-2-3', 3: '6-2-4-1' },
      optionNotes: {
        0: { en: 'ATP made from reduced coenzymes is aerobic phosphorylation in the respiratory chain, a separate machine; inside the cycle the NADH-forming steps yield reduced coenzyme, not ATP.', cn: '由还原型辅酶生成ATP属于呼吸链中的需氧磷酸化，那是另一台机器；在循环内部，产生NADH的步骤给出的是还原型辅酶，不是ATP。' },
        2: { en: 'Succinate to fumarate is the FADH₂ step of the cycle, not the substrate-level phosphorylation.', cn: '琥珀酸→延胡索酸是循环中产生FADH₂的那一步，不是底物水平磷酸化。' },
        3: { en: 'Nearly right in spirit — the MAIN share of the energy is indeed captured in the respiratory chain — but the cycle does form one macroergic compound directly.', cn: '思路上接近——能量的**主要**份额确实是在呼吸链中被捕获的——但循环本身确实直接生成了一个高能化合物。' }
      },
      why_en: 'One turn gives 1 FADH₂, 3 NADH and one macroergic compound, GTP, formed during the oxidative decarboxylation of α-oxoglutarate. Everything else is potential energy carried on coenzymes and cashed in later, elsewhere.',
      why_cn: '一轮循环给出1个FADH₂、3个NADH，以及一个高能化合物GTP，产生于α-酮戊二酸的氧化脱羧。其余全是搭在辅酶上、稍后在别处才兑现的潜在能量。' },

    { type: 'mcq',
      q_en: 'Which citrate cycle intermediate leads, by reaction with glycine, towards the porphyrins?',
      q_cn: '柠檬酸循环的哪一个中间体与甘氨酸反应，通向卟啉？',
      options: [
        'α-Ketoglutarate',
        'Succinyl-CoA',
        'Fumarate',
        'Oxaloacetate'
      ],
      answer: 1,
      optionRefs: { 0: '5-2-1-2', 2: '10-11', 3: '5-2-3-4' },
      optionNotes: {
        0: { en: 'α-Ketoglutarate leaves the cycle by TRANSAMINATION into amino acids, a different anabolic exit named in the same sentence.', cn: 'α-酮戊二酸是经**转氨作用**离开循环、变成氨基酸的，是同一句里提到的另一个合成出口。' },
        2: { en: 'Fumarate is the link to the metabolism of tyrosine and aspartic acid (kap. 5), not to porphyrin synthesis.', cn: '延胡索酸是通向酪氨酸与天冬氨酸代谢的接口（第5章），与卟啉合成无关。' },
        3: { en: 'Oxaloacetate, like α-ketoglutarate, exits by transamination into amino acids.', cn: '草酰乙酸与α-酮戊二酸一样，是经转氨作用变成氨基酸而离开的。' }
      },
      why_en: 'Succinyl-CoA reacting with glycine provides δ-aminolevulate, from which porphyrins are formed (kap. 6.3). This is one of the three biosynthetic exits that make the cycle amphibolic rather than purely catabolic.',
      why_cn: '琥珀酰CoA与甘氨酸反应提供δ-氨基乙酰丙酸，由它生成卟啉（第6.3节）。这是使该循环成为两性途径、而非纯分解途径的三个合成出口之一。' },

    { type: 'short',
      q_en: 'The citrate cycle and the respiratory chain are partners. State the two qualifications the book adds to that partnership.',
      q_cn: '柠檬酸循环与呼吸链是搭档。教材为这一搭档关系补充了哪两点限定？',
      accept: ['other reactions', 'not the only', 'most significant', 'supplier', 'proximity', 'mitochond'],
      answer_en: 'First, the respiratory chain also reoxidizes reduced coenzymes originating from OTHER reactions — the citrate cycle is their most significant supplier, not their only one. Second, the two processes are localized in close proximity in the mitochondria, which is what makes the handover practical.',
      answer_cn: '第一，呼吸链也再氧化来自**其他**反应的还原型辅酶——柠檬酸循环只是它们最重要的供应者，而非唯一供应者。第二，两个过程在线粒体中彼此紧邻，这才使交接切实可行。' }
  ],

  '10-12': [
    { type: 'mcq',
      q_en: 'The book gives a ladder of regulatory levels and also a physiological classification. How do the two relate?',
      q_cn: '教材既给出了一架调节层级的阶梯，又给出了一种生理学分类。二者是什么关系？',
      options: [
        'The physiological classification (nervous or hormonal) is the top rung of the ladder',
        'The physiological classification cuts ACROSS the ladder rather than being one of its rungs',
        'The two lists are the same list under different names',
        'The ladder applies to animals and the physiological classification to plants'
      ],
      answer: 1,
      optionRefs: { 0: '10-17', 2: '10-20', 3: '9-1' },
      optionNotes: {
        0: { en: 'The top rung is the metabolism of the whole ORGANISM. Hormonal control does operate there, but “nervous or hormonal” is a classification by means, not a level.', cn: '最上一层是**整个机体**的代谢。激素调控确实作用于那一层，但「神经性或激素性」是按手段分类，不是一个层级。' },
        2: { en: 'Treating two different four- or five-part divisions as the same list is exactly the trap §10.3 warns about with its mechanisms and chemical classes.', cn: '把两个不同的分法当成同一份清单，正是§10.3就作用机制与化学分类所警告的那个陷阱。' },
        3: { en: 'No such split is made; chapter 10 is about metabolic regulation generally, and §10.3 develops hormones in vertebrates.', cn: '教材没有作这样的划分；第10章讲的是一般的代谢调节，§10.3展开的是脊椎动物的激素。' }
      },
      why_en: 'The levels run whole organism, organ, cell, system of enzyme reactions, single enzyme reaction. Nervous versus hormonal is a separate axis, classifying regulation by its physiological means. The book then declares that it will treat only the bottom two rungs, which is why everything in §10.2 is biochemical.',
      why_cn: '各层级依次是：整个机体、器官、细胞、酶反应系统、单一酶反应。神经性对激素性则是另一条轴，按生理手段来分类。随后教材声明只处理最下面两层，这正是§10.2全是生化内容的原因。' },

    { type: 'mcq',
      q_en: 'How strong is the book’s claim about the necessity of regulation?',
      q_cn: '教材关于「调节是必要的」这一论断有多强？',
      options: [
        'Regulation improves the efficiency of an already-working metabolism',
        'A high degree of organization is possible ONLY under conditions of consistent regulation of enzyme reactions',
        'Regulation is needed only in multicellular organisms',
        'Regulation matters only when nutrients are scarce'
      ],
      answer: 1,
      optionRefs: { 0: '10-13', 2: '10-17', 3: '10-15' },
      optionNotes: {
        0: { en: 'Weaker than what the book says: it states a precondition, not an optimisation. Efficiency is what individual mechanisms differ in — one is called “not very effective”, another “one of the most effective”.', cn: '比教材说的弱：教材给的是前提条件，不是优化。效率高低是各个机制之间的差别——有的被称为「不太有效」，有的是「最有效的机制之一」。' },
        2: { en: 'Nothing here restricts the argument to multicellular life; the hormonal hierarchy of §10.3 is a vertebrate example, but the necessity of regulation is stated for the cell.', cn: '此处没有把论证限定在多细胞生物；§10.3的激素层级是脊椎动物的例子，但调节的必要性是就细胞而言的。' },
        3: { en: 'Regulation matters in surplus too — that is exactly when a limiting metabolite like ADP caps the output of a system.', cn: '在富余时同样需要调节——ADP这样的限制性代谢物正是在那时限定了系统的产出上限。' }
      },
      why_en: 'The conclusion is stated as a conditional: a high degree of organization is possible only under consistent regulation. Without it, reactions would run uselessly (waste) or enzyme systems would mutually interfere (conflict) — two distinct failure modes, and the second leaves the cell’s state undefined.',
      why_cn: '结论是以条件句给出的：高度的组织化**只有**在一贯的调节之下才可能。否则反应会徒劳进行（浪费），或酶系统彼此干扰（冲突）——这是两种不同的失效模式，而后者会让细胞的状态变得不确定。' },

    { type: 'short',
      q_en: 'Why does the nervous level of regulation never reappear after §10.2’s opening, while the hormonal level gets its own section?',
      q_cn: '为什么神经性调节在§10.2开篇之后就不再出现，而激素性调节却拥有独立的一节？',
      accept: ['scope', 'single enzyme', 'system of enzyme', 'biochemical', 'hormonal', '10.3'],
      answer_en: 'Because the book declares its own scope: it will concentrate on the possibilities of regulating a single enzyme reaction and systems of enzyme reactions. Everything that follows in §10.2 is therefore biochemical, and the nervous branch, named in the physiological classification, is simply not developed. The hormonal branch is, in §10.3.',
      answer_cn: '因为教材明确声明了自己的范围：只集中于单一酶反应与酶反应系统的调节可能性。所以§10.2后文全是生化内容；在生理学分类中被点名的神经这一支就没有展开，而激素那一支在§10.3中展开了。' }
  ],

  '10-13': [
    { type: 'mcq',
      q_en: 'Which regulatory mechanism does the book itself call simple but “not very effective”?',
      q_cn: '教材自己把哪一种调节机制称为简单但「不太有效」？',
      options: [
        'Regulation by the substrate concentration, through the enzyme reaction itself',
        'Allosteric activation and inhibition',
        'Compartmentation',
        'Regulation of enzyme biosynthesis by induction and repression'
      ],
      answer: 0,
      optionRefs: { 1: '10-14', 2: '10-16', 3: '4-2-4-1' },
      optionNotes: {
        1: { en: 'The exact opposite label: allosteric control is introduced as one of the MOST effective mechanisms of metabolic regulation.', cn: '标签正好相反：别构调控被引入时被称为代谢调节**最有效的**机制之一。' },
        2: { en: 'Compartmentation is called an important means for keeping pathways with shared intermediates apart; no efficiency hedge is attached to it.', cn: '区室化被称为使共有中间体的途径彼此分开的重要手段；教材没有给它附上效率方面的保留。' },
        3: { en: 'Induction and repression are the genetic level — slower to act but they set the ceiling; the book attaches no such hedge here either.', cn: '诱导与阻遏属于遗传层面——见效较慢但决定上限；教材同样没有在此附加这类保留。' }
      },
      why_en: 'The hedge is part of the claim and should not be dropped in a summary. A small change in substrate concentration causes a large change in rate, but only in the first-order region; the book rescues the mechanism by adding that in vivo the assumptions for it are fulfilled.',
      why_cn: '这个保留是论断的一部分，概括时不该丢掉。底物浓度的微小变化确实带来速率的很大变化，但只在一级动力学区内成立；教材随后补上一句「体内条件满足这些前提」，把这个机制救了回来。' },

    { type: 'mcq',
      q_en: 'The book says induction of enzyme biosynthesis is caused, for example, by steroid hormones. Where is that promise cashed in?',
      q_cn: '教材说酶生物合成的诱导例如由类固醇激素引起。这个预告在哪里兑现？',
      options: [
        'In §10.3, where steroid hormones enter the nucleus, bind specific sites in DNA and activate parts of the gene',
        'In §10.3, where steroid hormones raise the level of cyclic AMP',
        'In §10.2, where enzymes are activated by phosphorylation',
        'In §10.2, where proenzymes are activated by partial proteolysis'
      ],
      answer: 0,
      optionRefs: { 1: '10-18', 2: '10-16', 3: '5-1' },
      optionNotes: {
        1: { en: 'The cyclic AMP cascade is a different mechanism, and its named examples are epinephrine and glucagon — hormones acting from the cell SURFACE.', cn: '环化AMP级联是另一种机制，它点名的例子是肾上腺素与胰高血糖素——从细胞**表面**起作用的激素。' },
        2: { en: 'Phosphorylation changes the ACTIVITY of an enzyme already present; induction changes how much enzyme exists. Different level, different time scale.', cn: '磷酸化改变的是已经存在的酶的**活性**；诱导改变的是酶的**数量**。层面不同，时间尺度也不同。' },
        3: { en: 'Proteolytic activation is also a modification of existing protein, and it is irreversible — again not a change in the amount synthesized.', cn: '蛋白水解激活同样是对已有蛋白的修饰，而且不可逆——同样不是合成量的改变。' }
      },
      why_en: 'Regulation by enzyme level works through the cell’s genetic equipment: an inducer causes or increases transcription and subsequently translation. §10.3 shows steroid hormones doing exactly that, by being carried into the nucleus by a DNA-binding receptor.',
      why_cn: '通过酶水平进行的调节走的是细胞遗传装备这条路：诱导物引起或增强转录、进而增强翻译。§10.3展示的正是类固醇激素这样做——由能结合DNA的受体把它们带进细胞核。' },

    { type: 'short',
      q_en: 'What does an inducer actually do, and why is this route slower than changing an enzyme’s activity?',
      q_cn: '诱导物实际做了什么？为什么这条路线比改变酶的活性更慢？',
      accept: ['transcription', 'translation', 'amount', 'level', 'ceiling', 'synthes'],
      answer_en: 'An inducer causes or increases transcription of the gene and subsequently also translation of the given protein — and transcription and translation can equally be suppressed, which is repression. It is slower because new protein must be made, but it changes the AMOUNT of enzyme present and therefore sets the ceiling, whereas substrate-level regulation only changes the rate of the enzyme already there.',
      answer_cn: '诱导物引起或增强该基因的转录、进而增强该蛋白的翻译——同样地，转录与翻译也可以被抑制，那就是阻遏。它更慢，因为必须新造蛋白；但它改变的是酶的**数量**、因而设定了上限，而底物水平的调节只改变已有酶的速率。' }
  ],

  '10-14': [
    { type: 'mcq',
      q_en: 'In negative feedback as defined here, which step of a reaction sequence does the final product act on?',
      q_cn: '按此处的定义，负反馈中终产物作用于反应序列的哪一步？',
      options: [
        'The last step, slowing its own formation directly',
        'One of the INITIAL enzymes of the sequence — which is then called the controlling enzyme',
        'Every enzyme of the sequence equally',
        'The transport step that removes the product from the cell'
      ],
      answer: 1,
      optionRefs: { 0: '10-14', 2: '3-5', 3: '8-5-3-3' },
      optionNotes: {
        0: { en: 'That describes product inhibition, the primitive self-limiting loop mentioned just before — an enzyme slowed by its OWN product. Feedback control reaches much further back.', cn: '那描述的是紧接其前提到的「产物抑制」这一原始自限回路——酶被**自身的**产物减慢。反馈调控则回溯得远得多。' },
        2: { en: 'Non-specific inhibition of everything is not regulation; the point of feedback is that one specific step carries the control.', cn: '不加区分地抑制一切不叫调节；反馈的要点在于由某一个特定步骤承担控制。' },
        3: { en: 'Controlled transport across membranes is a real regulatory step, but it belongs to compartmentation, not to allosteric feedback.', cn: '跨膜的受控运输确实是一个调节步骤，但它属于区室化，不属于别构反馈。' }
      },
      why_en: 'Negative feedback is the influence of the FINAL product on the reaction steps at the BEGINNING of the sequence. Allosteric inhibition of one of the initial enzymes by the final product is what defines that enzyme as the controlling enzyme, so the chain throttles itself as soon as its output is no longer needed.',
      why_cn: '负反馈是**终产物**对序列**起始**处各步骤的影响。终产物对起始酶之一的别构抑制，正是把那个酶定义为「调控酶」的原因——于是一旦产物不再被需要，整条链就自己收油门。' },

    { type: 'mcq',
      q_en: 'Why must the allosteric effector site be somewhere OTHER than the active site for feedback control to work?',
      q_cn: '为什么别构效应物的位点必须在活性位点**之外**，反馈调控才能成立？',
      options: [
        'Because the active site is always occupied by substrate',
        'Because the regulating molecule then needs no chemical resemblance to the substrate, so a pathway’s end product can regulate an enzyme acting on something entirely different',
        'Because binding in the active site would be covalent',
        'Because the active site is buried inside the membrane'
      ],
      answer: 1,
      optionRefs: { 0: '3-3-1', 2: '4-3-3', 3: '8-5-2-2' },
      optionNotes: {
        0: { en: 'Occupancy of the active site is the subject of Michaelis kinetics and saturation, not the reason allostery needs a separate site.', cn: '活性位点被占据是米氏动力学与饱和的话题，不是别构需要另设位点的理由。' },
        2: { en: 'Allosteric binding is not covalent; the effect occurs by a change of the enzyme’s CONFORMATION. Covalent alteration of a protein is a separate mechanism.', cn: '别构结合不是共价的；其效应通过酶**构象**的改变实现。对蛋白质的共价改变是另外一种机制。' },
        3: { en: 'Membrane-embedded active sites are a topic of membrane protein structure, and nothing in this definition mentions membranes.', cn: '活性位点嵌在膜内是膜蛋白结构的话题，本定义中完全没有提到膜。' }
      },
      why_en: 'Allosteric control means inhibition or activation by a metabolite binding not into the active site but to another site of the enzyme protein, the effect occurring by a change of conformation. That structural separation is what allows an end product with no resemblance to the substrate to reach back and shut the pathway down.',
      why_cn: '别构调控指的是某代谢物不结合在活性位点、而是结合在酶蛋白的另一位点所引起的抑制或激活，效应经构象改变实现。正是这种结构上的分离，才让一个与底物毫不相像的终产物能够反过来关掉整条通路。' },

    { type: 'short',
      q_en: 'Distinguish product inhibition from allosteric feedback control as this section presents them.',
      q_cn: '按本节的讲法，区分「产物抑制」与「别构反馈调控」。',
      accept: ['own product', 'active site', 'final product', 'initial', 'beginning', 'conformation', 'another site'],
      answer_en: 'Product inhibition is the simple case: an enzyme reaction slows as its own product accumulates, and inhibitors here bind into the active site. Allosteric feedback control is the more powerful case: the FINAL product of a whole sequence binds a site other than the active site of one of the INITIAL enzymes, changing its conformation. The first limits one reaction, the second throttles a whole pathway.',
      answer_cn: '产物抑制是简单情形：随着自身产物积累，酶反应减慢，抑制剂结合在活性位点内。别构反馈调控则更强大：整条序列的**终产物**结合在**起始**酶之一活性位点以外的位点上，改变其构象。前者限制一个反应，后者收住整条通路。' }
  ],

  '10-15': [
    { type: 'mcq',
      q_en: 'Why is a practically irreversible step the natural place for control in a pathway?',
      q_cn: '为什么一个实际上不可逆的步骤是通路中控制的天然着力点？',
      options: [
        'Because irreversible reactions are the slowest ones',
        'Because material cannot flow back past it, so whatever controls that step controls the committed flux through everything downstream',
        'Because irreversible reactions are the only ones catalysed by enzymes',
        'Because irreversible reactions do not need a coenzyme'
      ],
      answer: 1,
      optionRefs: { 0: '3-3-1', 2: '10-2', 3: '3-2' },
      optionNotes: {
        0: { en: 'Irreversible and slow are different properties; the book’s example, phosphofructokinase, is singled out for being one-way, not for being sluggish.', cn: '不可逆与慢是两回事；教材举的磷酸果糖激酶是因为单向而被挑出，不是因为它慢。' },
        2: { en: 'Every step of every pathway is enzyme-catalysed — the chapter opens by saying pathways are series of consecutive enzyme-catalysed reactions.', cn: '每条通路的每一步都是酶催化的——本章开篇就说通路是一系列连续的酶催化反应。' },
        3: { en: 'Coenzyme requirement is unrelated to reversibility; several of the irreversible steps here involve ATP.', cn: '是否需要辅酶与可逆性无关；此处几个不可逆步骤本身就涉及ATP。' }
      },
      why_en: 'Reversible steps sit near equilibrium and merely transmit what is done to them; an irreversible step is a point past which material cannot return. That is why phosphofructokinase, catalysing the practically irreversible phosphorylation of fructose-6-phosphate, is the control point of glycolysis.',
      why_cn: '可逆步骤接近平衡，只是把加诸其上的变化原样传下去；不可逆步骤则是物质无法回流的关口。这正是催化果糖-6-磷酸实际上不可逆磷酸化的磷酸果糖激酶成为糖酵解控制点的原因。' },

    { type: 'mcq',
      q_en: 'What is the consistency between this subsection and the account of gluconeogenesis in §10.1.1?',
      q_cn: '本小节与§10.1.1中糖异生的叙述之间有什么一致之处？',
      options: [
        'Both say that reversible steps must be bypassed',
        'The irreversible steps of glycolysis are simultaneously the control points and the points at which the two directions diverge',
        'Both identify ADP as the limiting metabolite of glycolysis',
        'Both say gluconeogenesis has its own controlling enzyme unrelated to glycolysis'
      ],
      answer: 1,
      optionRefs: { 0: '7-9', 2: '6-2-4-5', 3: '10-7' },
      optionNotes: {
        0: { en: 'Reversed: the reversible steps are exactly the ones gluconeogenesis can simply run backwards. Only the irreversible ones need bypassing.', cn: '说反了：可逆步骤恰恰是糖异生可以直接倒着走的那些；只有不可逆的才需要绕开。' },
        2: { en: 'ADP is the limiting metabolite for phosphorylation in the RESPIRATORY CHAIN — the book’s example in the second half of this same subsection.', cn: 'ADP是**呼吸链**中磷酸化的限制性代谢物——是本小节后半部分教材举的例子。' },
        3: { en: 'The bypasses are indeed different enzymes (carboxylation to oxaloacetate, and hydrolases), but they sit at precisely the same three points, which is the whole connection.', cn: '旁路确实用的是不同的酶（羧化为草酰乙酸、以及水解酶），但它们恰恰位于同样这三个点上，这正是二者的联系所在。' }
      },
      why_en: 'The same three points do double duty: they are where control has purchase because material cannot flow back, and they are where the synthetic route must leave the degradative one. Thermodynamic one-wayness generates both facts at once.',
      why_cn: '同样这三个点身兼两职：既因为物质无法回流而成为控制能着力之处，也是合成路线必须离开分解路线的地方。热力学上的单向性同时产生了这两个事实。' },

    { type: 'short',
      q_en: 'Give the two ways an enzyme can act as a controlling enzyme, with the book’s example of each.',
      q_cn: '说出一个酶可以充当「调控酶」的两种方式，并各举教材的例子。',
      accept: ['allosteric', 'final product', 'irreversible', 'exergonic', 'phosphofructokinase'],
      answer_en: 'By being allosterically controlled — inhibited by the final product of its own reaction system, as in feedback control — or by catalysing a practically irreversible reaction, for instance a strongly exergonic one. The book’s example of the second is phosphofructokinase, phosphorylating fructose-6-phosphate practically irreversibly in glycolysis.',
      answer_cn: '一是受别构调控——被自身所在反应系统的终产物抑制，即反馈调控；二是催化一个实际上不可逆的反应，例如强放能反应。教材为第二种举的例子是磷酸果糖激酶，它在糖酵解中使果糖-6-磷酸发生实际上不可逆的磷酸化。' }
  ],

  '10-16': [
    { type: 'mcq',
      q_en: 'Which of the two named types of enzyme modification can be undone, and which cannot?',
      q_cn: '所点名的两类酶修饰中，哪一种可以撤销？哪一种不能？',
      options: [
        'Both can be undone, by phosphatases and by ligases respectively',
        'Phosphorylation can be undone; partial proteolysis of a proenzyme cannot',
        'Partial proteolysis can be undone; phosphorylation cannot',
        'Neither can be undone; both are permanent commitments'
      ],
      answer: 1,
      optionRefs: { 0: '4-1-3-2', 2: '10-16', 3: '5-1' },
      optionNotes: {
        0: { en: 'Ligases join DNA strands; nothing re-joins a proteolytically cleaved proenzyme, which is exactly why the cut is a commitment.', cn: '连接酶连的是DNA链；没有什么能把被蛋白水解切开的酶原重新接上，这正是那一刀成为「承诺」的原因。' },
        2: { en: 'Exactly reversed. The book’s phrase “or conversely” attaches to the chemical modification, i.e. phosphorylation, which a phosphatase can remove.', cn: '正好反了。教材的「或者反过来」一语说的是化学修饰，即磷酸化，磷酸酶可以把它去掉。' },
        3: { en: 'If neither were reversible, phosphorylation could not serve as a switch — and it is the mechanism every hormone cascade in §10.3 terminates in.', cn: '如果两者都不可逆，磷酸化就当不了开关——而§10.3中所有激素级联最终都终止于这一机制。' }
      },
      why_en: 'Phosphorylation is enzymatically catalysed and can be reversed by a phosphatase, which is why it is the workhorse switch. Conversion of an inactive proenzyme to an active enzyme by partial proteolysis (trypsinogen to trypsin) cannot be undone, which is why it is used where a one-way decision is wanted.',
      why_cn: '磷酸化由酶催化，可由磷酸酶逆转，因此它是最常用的开关。通过部分蛋白水解把无活性酶原变成活性酶（胰蛋白酶原→胰蛋白酶）则无法撤销，因此被用在需要一次性决定的地方。' },

    { type: 'mcq',
      q_en: 'How does chapter 10 actually treat regulation on the principle of isoenzymes?',
      q_cn: '第10章实际上是如何处理「同工酶原理的调节」的？',
      options: [
        'It names the principle and refers the reader to kap. 3.7.3, giving no content of its own',
        'It explains how isoenzymes with different Km values suit different organs',
        'It presents isoenzymes as a way of being a controlling enzyme',
        'It treats isoenzymes as a form of compartmentation'
      ],
      answer: 0,
      optionRefs: { 1: '3-7', 2: '10-15', 3: '10-16' },
      optionNotes: {
        1: { en: 'Isoenzymes are genuinely course material — but in chapter 3, where regulatory enzymes are treated. Chapter 10 makes no such statement, and a bank question may not add one.', cn: '同工酶确实是课程内容——但在第3章讲调节酶的地方。第10章没有作这类陈述，题库题也不能替它添加。' },
        2: { en: 'The two ways of being a controlling enzyme are allosteric control and catalysing a practically irreversible reaction; isoenzymes are listed separately.', cn: '成为调控酶的两种方式是受别构调控与催化实际上不可逆的反应；同工酶是另行列出的。' },
        3: { en: 'Compartmentation is about membrane-bounded spaces and controlled transport between them — a different mechanism in the same list.', cn: '区室化讲的是由膜界定的空间以及它们之间的受控运输——是同一份清单中的另一种机制。' }
      },
      why_en: 'The isoenzyme subsection is a single sentence pointing to kap. 3.7.3. Stating that honestly is better than padding it out, and it is a useful reminder that a bank question may only restate what its node actually contains.',
      why_cn: '同工酶那一小节只有一句话，指向第3.7.3节。老老实实说明这一点，好过硬把它撑开；这也提醒我们：题库题只能复述节点里真有的内容。' },

    { type: 'short',
      q_en: 'Why is proteolytic activation, rather than phosphorylation, used for digestion and clotting?',
      q_cn: '为什么消化与凝血用的是蛋白水解激活，而不是磷酸化？',
      accept: ['irreversib', 'cannot be undone', 'commit', 'proenzyme', 'phosphatase', 'switch'],
      answer_en: 'Because a proenzyme once cut cannot be uncut, so proteolytic activation is a one-way, committed decision — appropriate where the response must not be quietly reversed. Phosphorylation, by contrast, can be removed by a phosphatase, which makes it the right choice for a switch that has to be turned off again.',
      answer_cn: '因为酶原一旦被切开就无法复原，所以蛋白水解激活是一次性的、不可反悔的决定——适用于那些不该被悄悄撤销的反应。相比之下，磷酸化可以由磷酸酶去除，因此适合做需要再关掉的开关。' }
  ],

  '10-17': [
    { type: 'mcq',
      q_en: 'The book’s definition of hormonal control already covers two modes of delivery. Which?',
      q_cn: '教材对激素调控的定义已经涵盖了两种传递方式。是哪两种？',
      options: [
        'Secretion into the blood circulation, or action on surrounding cells',
        'Secretion into the blood, or transport along nerve fibres',
        'Secretion into the blood, or excretion into the gut',
        'Action on the cell itself, or transport into the nucleus'
      ],
      answer: 0,
      optionRefs: { 1: '10-17', 2: '5-1', 3: '10-20' },
      optionNotes: {
        1: { en: 'Nervous regulation is named in §10.2 as the other physiological branch, but it is never developed, and it is not part of this definition.', cn: '神经调节在§10.2中作为另一条生理学分支被点名，但从未展开，也不属于这条定义。' },
        2: { en: 'Secretion into the gut is exocrine, e.g. the digestive proenzymes; hormones are defined here by acting on tissues bearing their receptor.', cn: '分泌进消化道属于外分泌，例如消化酶原；而此处激素是以「作用于带有其受体的组织」来定义的。' },
        3: { en: 'Transport into the nucleus is the steroid MECHANISM, what happens after arrival, not a route of delivery from the gland.', cn: '被运送进细胞核是类固醇的**作用机制**，是抵达之后的事，而不是从腺体出发的传递路线。' }
      },
      why_en: 'Hormones are formed in specialized glands, tissues or cells and either are secreted into the blood circulation or act on surrounding cells. The definition therefore covers both classical endocrine and local (paracrine) action without using either word.',
      why_cn: '激素在特化的腺体、组织或细胞中生成，或者分泌进血液循环，或者作用于周围细胞。因此这条定义没有用「内分泌」「旁分泌」这两个词，却把两种作用方式都涵盖了。' },

    { type: 'mcq',
      q_en: 'In the three-level circuit, what is the middle level and what does it secrete?',
      q_cn: '在这个三层回路中，中间一层是什么？它分泌什么？',
      options: [
        'The diencephalon, secreting a neurosecretion',
        'The hypophysis, secreting a glandotropic hormone',
        'The adrenal cortex, secreting cortisol',
        'The target tissue, secreting an inhibitor'
      ],
      answer: 1,
      optionRefs: { 0: '10-17', 2: '10-21', 3: '10-14' },
      optionNotes: {
        0: { en: 'The diencephalon is the TOP level and its neurosecretion acts on the hypophysis — it is where nervous and hormonal regulation meet.', cn: '间脑是**最上**一层，其神经分泌物作用于垂体——那里正是神经调节与激素调节的交汇点。' },
        2: { en: 'The adrenal cortex is the bottom gland of the chain; cortisol is its peripherally effective hormone, acting on the tissues.', cn: '肾上腺皮质是这条链最下面的腺体；皮质醇是它的外周有效激素，作用于组织。' },
        3: { en: 'Tissues are the endpoint of the chain, not a secreting level. The inhibition arrow comes from the peripheral hormone, not from the tissue.', cn: '组织是这条链的终点，不是一个分泌层级。抑制箭头来自外周激素，而不是来自组织。' }
      },
      why_en: 'The chain runs diencephalon to neurosecretion to hypophysis to glandotropic hormone to hormonal gland (adrenal cortex) to peripherally effective hormone (cortisol) to tissues. The glandotropic hormone is the one whose target is another gland — Tab. 10.1 identifies it here as ACTH.',
      why_cn: '这条链是：间脑→神经分泌物→垂体→促腺激素→激素腺体（肾上腺皮质）→外周有效激素（皮质醇）→组织。促腺激素就是那种以另一个腺体为靶的激素——表10.1把它认定为ACTH。' },

    { type: 'short',
      q_en: 'What does the gland hierarchy have in common with the allosteric feedback control of §10.2?',
      q_cn: '腺体层级体系与§10.2中的别构反馈调控有什么共同之处？',
      accept: ['negative feedback', 'final product', 'inhibit', 'beginning', 'two levels', 'scale'],
      answer_en: 'Both are negative feedback: the final product inhibits the start of the sequence. In §10.2 the end product of a pathway allosterically inhibits one of its initial enzymes; here the peripherally effective hormone inhibits BOTH the hypophysis and the diencephalon, two levels above it. Only the scale differs — a pathway of enzymes there, a chain of organs here.',
      answer_cn: '两者都是负反馈：终产物抑制序列的起始端。在§10.2中，通路的终产物别构抑制它的起始酶之一；在这里，外周有效激素同时抑制**垂体与间脑**这上方的两个层级。差别只在尺度——那边是一条酶的通路，这边是一串器官。' }
  ],

  '10-18': [
    { type: 'mcq',
      q_en: 'Where does the amplification in the adenylate cyclase mechanism come from?',
      q_cn: '腺苷酸环化酶机制中的放大效应从何而来？',
      options: [
        'From the hormone being concentrated at the cell surface by its receptor',
        'From the second messenger: one hormone molecule generates many cyclic AMP molecules, each activating a kinase that phosphorylates many substrates',
        'From the receptor phosphorylating its own tyrosine residues',
        'From the hormone being carried into the nucleus and switching on a gene'
      ],
      answer: 1,
      optionRefs: { 0: '10-17', 2: '10-20', 3: '10-20' },
      optionNotes: {
        0: { en: 'The receptor confers specificity — only cells that have it respond — but concentrating the ligand is not what the book calls the amplifying effect.', cn: '受体赋予的是特异性——只有带受体的细胞才响应——但「把配体聚集起来」并不是教材所说的放大效应。' },
        2: { en: 'Autophosphorylation is the amplifying step of a DIFFERENT mechanism, the receptor tyrosine kinases of insulin and growth factors, where there is no second messenger at all.', cn: '自磷酸化是**另一种**机制的放大步骤，即胰岛素与生长因子的受体酪氨酸激酶，那里根本没有第二信使。' },
        3: { en: 'That is the nuclear steroid mechanism, whose output is new protein rather than modified protein.', cn: '那是类固醇的核内机制，其输出是新合成的蛋白，而不是被修饰的蛋白。' }
      },
      why_en: 'The book states the general significance in two parts, and this is the first: an amplifying effect occurs through the formation of a second messenger. The multiplication happens twice over — many cyclic AMP per hormone molecule, many phosphorylated substrates per kinase.',
      why_cn: '教材把普遍意义分两部分陈述，这是第一部分：通过生成第二信使产生放大效应。放大发生了两重——每个激素分子生成许多环化AMP，每个激酶又磷酸化许多底物。' },

    { type: 'mcq',
      q_en: 'Cyclic AMP has a short half-life. Why is that a requirement rather than a defect?',
      q_cn: '环化AMP半衰期很短。为什么这是必需而不是缺陷？',
      options: [
        'Because a persistent second messenger could not be switched off',
        'Because cyclic AMP would otherwise be oxidized in the respiratory chain',
        'Because the cell would run out of ATP making it',
        'Because a long-lived messenger could not cross the membrane'
      ],
      answer: 0,
      optionRefs: { 1: '6-2-4-1', 2: '10-4', 3: '8-5-3-1' },
      optionNotes: {
        1: { en: 'Reduced coenzymes are what the respiratory chain reoxidizes; cyclic AMP is destroyed by a phosphodiesterase, hydrolysed to ordinary AMP.', cn: '呼吸链再氧化的是还原型辅酶；环化AMP是被磷酸二酯酶破坏、水解为普通AMP的。' },
        2: { en: 'ATP turnover is enormous and self-regulating — the pool argument of §10.1 — so the cost of making a messenger is not the issue.', cn: 'ATP的周转量极大且能自我调节——即§10.1的「库」论证——所以造一个信使的成本并不是问题所在。' },
        3: { en: 'Cyclic AMP does not need to cross a membrane; it is generated inside the cell precisely because the hormone stays outside.', cn: '环化AMP不需要跨膜；它正是因为激素留在细胞外，才在细胞内部被生成的。' }
      },
      why_en: 'Cyclic AMP is degraded rapidly by phosphodiesterase, which hydrolyses it to AMP. A signal that could be switched on but never off would not be a signal at all — the destruction step is what makes the cascade a control system rather than a trigger.',
      why_cn: '环化AMP被磷酸二酯酶迅速降解、水解为AMP。一个只能打开、永远关不掉的信号根本算不上信号——正是这一破坏步骤，才使这条级联成为控制系统而不是一次性触发器。' },

    { type: 'short',
      q_en: 'How can the same second messenger produce different responses in different tissues?',
      q_cn: '同一个第二信使为什么能在不同组织中产生不同的反应？',
      accept: ['receptors', 'enzyme system', 'equipment', 'downstream', 'different'],
      answer_en: 'Because the specificity sits downstream of the messenger. Different cells and tissues are influenced in different ways on the same basic principle, according to their equipment with receptors and with enzyme systems sensitive to cyclic AMP. The cyclic AMP is the same molecule everywhere; what differs is what the cell has available to be phosphorylated.',
      answer_cn: '因为特异性位于信使的下游。不同细胞与组织在同一基本原理之下被以不同方式影响，取决于它们在受体以及对环化AMP敏感的酶系统方面的装备。环化AMP在哪里都是同一个分子；不同的是细胞手头有什么可供磷酸化。' }
  ],

  '10-19': [
    { type: 'mcq',
      q_en: 'Which enzyme is activated by hormone binding in the phosphoinositide cascade, and on what does it act?',
      q_cn: '磷酸肌醇级联中，激素结合激活了哪种酶？它作用于什么？',
      options: [
        'Adenylate cyclase, acting on ATP',
        'Phosphoinositidase, also called phospholipase C, acting on phosphatidylinositol-4,5-bisphosphate',
        'Phosphodiesterase, acting on cyclic AMP',
        'Protein kinase C, acting on diacylglycerol'
      ],
      answer: 1,
      optionRefs: { 0: '10-18', 2: '10-18', 3: '10-19' },
      optionNotes: {
        0: { en: 'Adenylate cyclase belongs to the other cascade, converting ATP to cyclic AMP with loss of PPᵢ.', cn: '腺苷酸环化酶属于另一条级联，把ATP转变为环化AMP并失去PPᵢ。' },
        2: { en: 'Phosphodiesterase terminates the cyclic AMP signal; it is the off-switch of the other cascade, not the trigger of this one.', cn: '磷酸二酯酶终止环化AMP信号；它是另一条级联的关闭开关，而不是这一条的触发器。' },
        3: { en: 'Direction reversed: protein kinase C is ACTIVATED BY diacylglycerol, it does not act on it; its substrates are serine and threonine residues of target proteins.', cn: '方向反了：蛋白激酶C是**被**二酰甘油激活的，不是作用于它；它的底物是靶蛋白上的丝氨酸与苏氨酸残基。' }
      },
      why_en: 'Binding of the hormone to a membrane receptor activates phosphoinositidase (phospholipase C), which hydrolyses phosphatidylinositol-4,5-bisphosphate. The book’s example of a hormone acting this way is serotonin.',
      why_cn: '激素与膜受体结合，激活磷酸肌醇酶（磷脂酶C），后者水解磷脂酰肌醇-4,5-二磷酸。教材举的以此方式起作用的激素是5-羟色胺。' },

    { type: 'mcq',
      q_en: 'What has to happen to phosphatidylinositol BEFORE the receptor-activated cleavage can occur?',
      q_cn: '在受体激活的裂解发生**之前**，磷脂酰肌醇必须先经历什么？',
      options: [
        'Its arachidonate must be released to make icosanoids',
        'Two ATP must phosphorylate it at positions 4 and 5 to give the bisphosphate',
        'It must be transported into the cytosol',
        'It must be cleaved once by phospholipase C to give diacylglycerol'
      ],
      answer: 1,
      optionRefs: { 0: '10-26', 2: '10-19', 3: '10-19' },
      optionNotes: {
        0: { en: 'Arachidonate release is how the icosanoid class is made from the same membrane lipid — a real connection, but a different fate and a different section.', cn: '释放花生四烯酸是由同一种膜脂制造二十烷酸类的方式——这个联系真实存在，但那是另一个去向、另一节的内容。' },
        2: { en: 'Reversed by solubility: the lipid stays in the membrane, and it is the water-soluble IP₃ product that goes into the cytosol afterwards.', cn: '溶解性上说反了：脂类留在膜中，之后进入胞质的是水溶性的产物IP₃。' },
        3: { en: 'That cleavage IS the receptor-controlled step in question; it cannot also be its own prerequisite.', cn: '那次裂解就是这里所说的受体控制步骤本身；它不可能同时又是自己的前提条件。' }
      },
      why_en: 'The signalling lipid is manufactured in advance and held in the membrane, ready: two ATP phosphorylate phosphatidylinositol at positions 4 and 5, and only that bisphosphate is the substrate phospholipase C cleaves under receptor-controlled activation.',
      why_cn: '这个信号脂类是事先造好、储备在膜里待命的：两个ATP在4位和5位使磷脂酰肌醇磷酸化，而只有这个二磷酸产物才是磷脂酶C在受体控制的激活下所裂解的底物。' },

    { type: 'short',
      q_en: 'What is structurally distinctive about this cascade compared with the adenylate cyclase one?',
      q_cn: '与腺苷酸环化酶级联相比，这条级联在结构上的特点是什么？',
      accept: ['two', 'both', 'IP3', 'inositol', 'diacylglycerol', 'calcium', 'kinase C'],
      answer_en: 'One cleavage of one lipid yields TWO substances and both mediate the signal, whereas the adenylate cyclase route has a single messenger. Inositol-1,4,5-trisphosphate is water-soluble, diffuses into the cytosol and opens calcium channels; diacylglycerol is a lipid, stays in the membrane and activates protein kinase C. Two destinations and two modes of action from one binding event.',
      answer_cn: '一次对一种脂类的裂解产生**两种**物质，二者都传递信号，而腺苷酸环化酶那条路线只有单一信使。肌醇-1,4,5-三磷酸是水溶性的，扩散进胞质并打开钙通道；二酰甘油是脂类，留在膜中并激活蛋白激酶C。一次结合事件，两个去处、两种作用方式。' }
  ],

  '10-20': [
    { type: 'mcq',
      q_en: 'What is architecturally unusual about the way insulin and growth factors act?',
      q_cn: '胰岛素与生长因子的作用方式，在「架构」上不同寻常之处是什么？',
      options: [
        'The receptor is itself the kinase, and it amplifies by phosphorylating its own tyrosine residues — there is no separate second messenger',
        'The receptor releases a second messenger with an unusually long half-life',
        'The receptor carries the hormone into the nucleus',
        'The receptor opens a calcium channel directly'
      ],
      answer: 0,
      optionRefs: { 1: '10-18', 2: '10-20', 3: '10-19' },
      optionNotes: {
        1: { en: 'The second messenger of the cyclic AMP route has a deliberately SHORT half-life, so that the signal can be switched off; no mechanism here has a long-lived messenger.', cn: '环化AMP路线的第二信使半衰期被有意做得**很短**，好让信号能被关掉；这里没有哪种机制用长寿命的信使。' },
        2: { en: 'Nuclear transport is the steroid and thyroid mechanism, where the receptor is a DNA-binding protein rather than an enzyme.', cn: '被运进细胞核是类固醇与甲状腺激素的机制，那里的受体是能结合DNA的蛋白，而不是酶。' },
        3: { en: 'Calcium channels are opened by IP₃ in the phosphoinositide cascade, downstream of phospholipase C.', cn: '钙通道是由磷酸肌醇级联中的IP₃打开的，位于磷脂酶C的下游。' }
      },
      why_en: 'The receptor first phosphorylates its OWN tyrosine residues, and that increases its kinase activity towards target proteins. Note the residue: tyrosine, in contrast to the serine and threonine phosphorylated by the cyclic AMP kinase and by protein kinase C.',
      why_cn: '受体先磷酸化**自身的**酪氨酸残基，这提高了它对靶蛋白的激酶活性。留意残基：是酪氨酸，与环化AMP激酶和蛋白激酶C所磷酸化的丝氨酸、苏氨酸形成对比。' },

    { type: 'mcq',
      q_en: '§10.3 contains two different four-part divisions. What is the correct statement about them?',
      q_cn: '§10.3中含有两个不同的四分法。关于它们，下列哪种说法正确？',
      options: [
        'They are the same division described twice, once by mechanism and once by chemistry',
        'They are independent divisions that do not correspond one to one: steroids do map onto the nuclear mechanism, but peptide hormones are spread across the cyclic AMP, phosphoinositide and tyrosine kinase routes',
        'The four chemical classes each use exactly one of the four mechanisms',
        'The icosanoids are the class that acts through the nucleus'
      ],
      answer: 1,
      optionRefs: { 0: '10-18', 2: '10-22', 3: '10-26' },
      optionNotes: {
        0: { en: 'Treating them as one list is the trap the node explicitly warns about; the four mechanisms are ways of acting, the four classes are what the molecules are made of.', cn: '把它们当成同一份清单正是节点明确警告的陷阱；四种机制说的是「怎么作用」，四个类别说的是「由什么构成」。' },
        2: { en: 'False for the peptides in particular: glucagon acts by the cyclic AMP route while insulin acts by receptor tyrosine kinase, yet both are peptide hormones.', cn: '对肽类尤其不成立：胰高血糖素走环化AMP路线，胰岛素走受体酪氨酸激酶路线，而二者同属肽类激素。' },
        3: { en: 'The icosanoids are the fourth CHEMICAL class, defined by their 20 carbons from arachidonate; the nuclear route belongs to steroid and thyroid hormones.', cn: '二十烷酸类是第四个**化学**类别，以来自花生四烯酸的20个碳定义；核内路线属于类固醇与甲状腺激素。' }
      },
      why_en: 'Four mechanisms of action and four chemical classes are separate axes. Also note that the book announces the number four for the mechanisms without ever numbering them, so an ordinal such as “the third mechanism” has no meaning in the source.',
      why_cn: '四种作用机制与四个化学类别是两条不同的轴。另外要注意，教材宣布了机制的数目「四」，却从未为它们编号，因此「第三种机制」这类序数说法在原书中并无意义。' },

    { type: 'short',
      q_en: 'Why is the steroid response slower to start and longer to fade than the surface cascades?',
      q_cn: '为什么类固醇的反应比表面级联起效更慢、消退更久？',
      accept: ['nucleus', 'DNA', 'gene', 'new protein', 'transcription', 'modified'],
      answer_en: 'Because the output is different in kind. Steroid and thyroid hormones penetrate into the cell, bind receptors that are DNA-binding proteins, are carried into the nucleus and bind specific sites in DNA, activating parts of the gene — so the response is NEW protein, which has to be transcribed and translated and then persists. The other three mechanisms merely modify protein that is already there.',
      answer_cn: '因为输出的性质不同。类固醇与甲状腺激素穿透进入细胞，结合能结合DNA的受体蛋白，被带进细胞核并结合DNA的特定位点，激活基因的某些部分——因此反应是**新合成**的蛋白，需要经过转录与翻译，而后又会存留一段时间。另外三种机制只是修饰已经存在的蛋白。' }
  ],

  '10-21': [
    { type: 'mcq',
      q_en: 'Which hormone in this part of Tab. 10.1 is the peripherally effective hormone of the regulatory circuit in §10.3?',
      q_cn: '在表10.1的这一部分中，哪种激素是§10.3调节回路里的「外周有效激素」？',
      options: [
        'Aldosterone',
        'Cortisol',
        'Thyroxin',
        'Adrenalin'
      ],
      answer: 1,
      optionRefs: { 0: '10-21', 2: '10-24', 3: '10-24' },
      optionNotes: {
        0: { en: 'Same gland and same chemical class, but the circuit’s end product is cortisol; aldosterone’s listed job is mineral management and Na⁺ and water retention.', cn: '腺体与化学类别都相同，但回路的终产物是皮质醇；表中给醛固酮的职责是矿物质调控与Na⁺和水的潴留。' },
        2: { en: 'Thyroxin is peripherally effective too, but on the thyroid axis (TSH), and it is an amino-acid derivative, not the hormone in the hypophysis–adrenal cortex diagram.', cn: '甲状腺素也是外周起效的，但属于甲状腺这条轴（TSH），而且是氨基酸衍生物，不是垂体—肾上腺皮质那张图里的激素。' },
        3: { en: 'Adrenalin comes from the adrenal MEDULLA and answers short-term stress; it is not part of the three-level gland hierarchy drawn in the figure.', cn: '肾上腺素来自肾上腺**髓质**，应对短期应激；它不属于图中所画的三层腺体层级。' }
      },
      why_en: 'The circuit runs diencephalon to hypophysis (glandotropic hormone) to adrenal cortex to cortisol to tissues, with cortisol inhibiting both levels above it. Tab. 10.1 lists cortisol as adrenal cortex, response to stress, raising of blood pressure and sugar.',
      why_cn: '该回路是：间脑→垂体（促腺激素）→肾上腺皮质→皮质醇→组织，而皮质醇同时抑制其上方的两个层级。表10.1把皮质醇列为：肾上腺皮质，应对应激，升高血压与血糖。' },

    { type: 'mcq',
      q_en: 'Thyroxin sits in Tab. 10.1 under which chemical class?',
      q_cn: '在表10.1中，甲状腺素归在哪一个化学类别之下？',
      options: [
        'Steroid hormones',
        'Hormones derived from amino acids',
        'Peptide and protein hormones',
        'Icosanoids'
      ],
      answer: 1,
      optionRefs: { 0: '10-23', 2: '10-25', 3: '10-26' },
      optionNotes: {
        0: { en: 'A tempting error, because thyroid hormones share the nuclear MECHANISM with the steroids — but mechanism and chemical class are different divisions, and thyroxin is built from tyrosine.', cn: '这是个诱人的错误，因为甲状腺激素与类固醇共用核内**作用机制**——但机制与化学类别是两个不同的分法，而甲状腺素是由酪氨酸构建的。' },
        2: { en: 'The peptide/protein block is the largest in the table and holds the pituitary and pancreatic hormones; thyroxin is not among them.', cn: '肽类／蛋白类那一块是表中最大的一块，收的是垂体与胰腺的激素；甲状腺素不在其中。' },
        3: { en: 'Icosanoids are the 20-carbon arachidonate derivatives — prostaglandins and the rest — occupying one undivided row at the end of the table.', cn: '二十烷酸类是来自花生四烯酸的20碳衍生物——前列腺素之类——占据表末不分家的一整行。' }
      },
      why_en: 'Thyroxin (Thx), from the thyroid gland, is listed in the amino-acid-derived block with the effect of increasing basal metabolism and development. It is a good illustration that the chemical classification and the mechanistic classification cut the same hormones in different ways.',
      why_cn: '甲状腺素(Thx)来自甲状腺，被列在氨基酸衍生激素那一块，作用是提高基础代谢与促进发育。它很好地说明了：化学分类与机制分类是以不同方式来切分同一批激素的。' },

    { type: 'mcq',
      q_en: 'Which hormone is listed with the effect “regulation of daily rhythms”, and from which organ?',
      q_cn: '哪种激素被列出的作用是「昼夜节律的调节」？来自哪个器官？',
      options: [
        'Melatonin, from the epiphysis',
        'Thyroxin, from the thyroid gland',
        'Cortisol, from the adrenal cortex',
        'Progesterone, from the ovary'
      ],
      answer: 0,
      optionRefs: { 1: '10-21', 2: '10-21', 3: '10-21' },
      optionNotes: {
        1: { en: 'Thyroxin’s listed effects are increase of basal metabolism and development — a level setting, not a rhythm.', cn: '表中给甲状腺素的作用是提高基础代谢与发育——那是把水平定在某处，不是节律。' },
        2: { en: 'Cortisol answers stress and raises blood pressure and sugar; the table does not attach rhythm to it.', cn: '皮质醇应对应激、升高血压与血糖；表中并未把节律归给它。' },
        3: { en: 'Progesterone, from the corpus luteum, is listed for the secretory phase of the uterine mucosa, pregnancy and embryogenesis.', cn: '孕酮来自黄体，表中列的是子宫黏膜的分泌期、妊娠与胚胎发生。' }
      },
      why_en: 'Melatonin, from the epiphysis (pineal gland), is the row for daily rhythms. It belongs to the amino-acid-derived block — node 10-24 adds that it arises from tryptophan, not from tyrosine like the catecholamines and the thyroid hormones.',
      why_cn: '褪黑素来自松果体，正是「昼夜节律」那一行。它属于氨基酸衍生激素那一块——节点10-24补充说，它由色氨酸生成，而不是像儿茶酚胺与甲状腺激素那样来自酪氨酸。' },

    { type: 'short',
      q_en: 'Two hormones in this part of the table come from the ovary. Distinguish them by source tissue and by effect.',
      q_cn: '表中这一部分有两种激素来自卵巢。请按来源组织与作用把它们区分开。',
      accept: ['progesterone', 'corpus luteum', 'estradiol', 'follicle', 'uterine', 'pregnancy', 'sex hormone'],
      answer_en: 'Progesterone comes from the corpus luteum and is listed for the secretory phase of the uterine mucosa, pregnancy and embryogenesis. Estradiol (E₂) comes from the follicles and is listed simply as a sex hormone governing sexually reproductive functions. Same organ, two different structures within it, two different jobs.',
      answer_cn: '孕酮来自黄体，表中列的是子宫黏膜的分泌期、妊娠与胚胎发生。雌二醇(E₂)来自卵泡，表中列的就是性激素、性与生殖功能。同一个器官，其中两种不同的结构，两种不同的职责。' }
  ],

  '10-22': [
    { type: 'mcq',
      q_en: 'Which of these hormones is NOT an adenohypophyseal hormone whose target is another gland?',
      q_cn: '下列哪一种**不是**以另一腺体为靶的腺垂体激素？',
      options: [
        'ACTH (corticotropin)',
        'TSH (thyreotropin)',
        'Oxytocin',
        'FSH (follicle-stimulating hormone)'
      ],
      answer: 2,
      optionRefs: { 0: '10-17', 1: '10-24', 3: '10-21' },
      optionNotes: {
        0: { en: 'ACTH is adenohypophyseal and stimulates the adrenal cortex — it is exactly the glandotropic hormone of the three-level circuit.', cn: 'ACTH来自腺垂体、刺激肾上腺皮质——它正是三层回路中的促腺激素。' },
        1: { en: 'TSH is adenohypophyseal and stimulates the thyroid gland, which then produces thyroxin.', cn: 'TSH来自腺垂体、刺激甲状腺，甲状腺随后产生甲状腺素。' },
        3: { en: 'FSH is adenohypophyseal and stimulates the maturation of germ cells, i.e. it acts on the gonads.', cn: 'FSH来自腺垂体，刺激生殖细胞的成熟，即作用于性腺。' }
      },
      why_en: 'Oxytocin comes from the NEUROHYPOPHYSIS, the posterior lobe, and acts directly on tissue — contraction of the uterus and lactation. Almost every anterior-lobe row in the table is a tropic hormone aimed at another gland, which is what makes the adenohypophysis the middle management level of the whole hierarchy.',
      why_cn: '催产素来自**神经垂体**（后叶），并直接作用于组织——子宫收缩与哺乳。表中腺垂体那几行几乎全是瞄准另一个腺体的促激素，这正是腺垂体成为整个层级体系「中层管理」的原因。' },

    { type: 'mcq',
      q_en: 'Which organ appears in Tab. 10.1 as the source of BOTH a blood-sugar-lowering and a blood-sugar-raising hormone?',
      q_cn: '表10.1中，哪一个器官同时是降血糖激素与升血糖激素的来源？',
      options: [
        'The adrenal gland',
        'The pancreas',
        'The thyroid gland',
        'The adenohypophysis'
      ],
      answer: 1,
      optionRefs: { 0: '10-21', 2: '10-22', 3: '10-22' },
      optionNotes: {
        0: { en: 'The adrenal gland does raise blood sugar twice over — cortisol from the cortex, adrenalin from the medulla — but the table gives it no hormone that lowers blood sugar.', cn: '肾上腺确实两次升高血糖——皮质来的皮质醇、髓质来的肾上腺素——但表中没有给它任何降血糖的激素。' },
        2: { en: 'The thyroid supplies thyrocalcitonin and thyroxin; its antagonistic pairing is with parathormone over CALCIUM, not over glucose.', cn: '甲状腺提供降钙素与甲状腺素；它的拮抗配对是与甲状旁腺素就**钙**而言，不是就葡萄糖而言。' },
        3: { en: 'The anterior pituitary rows are tropic hormones and growth/lactation hormones; none of them is listed as directly lowering blood sugar.', cn: '腺垂体那几行是促激素以及生长／泌乳类激素；没有一行被列为直接降低血糖。' }
      },
      why_en: 'Insulin (pancreas, lowering of blood sugar) and glucagon (pancreas, raising of blood sugar) are an explicit antagonistic pair from one organ. Parathormone versus thyrocalcitonin is the table’s other such pair, but for calcium and from two different glands.',
      why_cn: '胰岛素（胰腺，降低血糖）与胰高血糖素（胰腺，升高血糖）是来自同一器官的一对明确拮抗激素。甲状旁腺素与降钙素是表中另一对，但针对的是钙，而且来自两个不同的腺体。' },

    { type: 'mcq',
      q_en: 'Which hormone in Tab. 10.1 is listed with the KIDNEYS as its organ?',
      q_cn: '表10.1中哪一种激素的器官栏写的是**肾**？',
      options: [
        'Vasopressin (ADH)',
        'Aldosterone',
        'Erythropoetin',
        'Chorionic gonadotropins (HCG)'
      ],
      answer: 2,
      optionRefs: { 0: '10-22', 1: '10-21', 3: '10-22' },
      optionNotes: {
        0: { en: 'Vasopressin brakes diuresis and retains water, so it ACTS on the kidney — but the table lists its organ as the neurohypophysis, where it is made.', cn: '血管加压素抑制利尿、促使水潴留，所以它**作用于**肾——但表中它的器官栏写的是产生它的神经垂体。' },
        1: { en: 'Aldosterone likewise governs Na⁺ and water retention, but it is made in the adrenal cortex and belongs to the steroid block.', cn: '醛固酮同样调控Na⁺与水的潴留，但它在肾上腺皮质生成，属于类固醇那一块。' },
        3: { en: 'HCG is the other row with a non-classical organ — the placenta — protecting the corpus luteum and its progesterone production.', cn: 'HCG是另一行器官不属于经典腺体的：胎盘，作用是保护黄体及其孕酮的生成。' }
      },
      why_en: 'Erythropoetin, kidneys, regulation of the formation of erythrocytes. Together with HCG from the placenta it is a reminder that the table’s organ column is not restricted to classical endocrine glands.',
      why_cn: '促红细胞生成素，肾，调节红细胞的生成。它与来自胎盘的HCG一起提醒我们：表中的器官栏并不限于经典的内分泌腺。' },

    { type: 'short',
      q_en: 'Oxytocin and vasopressin share an organ entry in the table. Which, and what does each do?',
      q_cn: '催产素与血管加压素在表中共享同一个器官栏。是哪个器官？各自的作用是什么？',
      accept: ['neurohypophysis', 'posterior', 'uterus', 'lactation', 'diuresis', 'water'],
      answer_en: 'Both are listed as neurohypophysis, the posterior lobe. Oxytocin gives contraction of the uterus and lactation; vasopressin (adiuretin, ADH) gives braking of diuresis and retention of water. Node 10-25 shows how close they are chemically — two substitutions in a nonapeptide.',
      answer_cn: '两者的器官栏都写作神经垂体（后叶）。催产素的作用是子宫收缩与哺乳；血管加压素(adiuretin, ADH)的作用是抑制利尿与水的潴留。节点10-25会显示它们在化学上有多接近——一个九肽里只差两个取代。' },

    { type: 'short',
      q_en: 'How does the icosanoid entry differ in FORM from every other entry in Tab. 10.1, and what does that reflect?',
      q_cn: '二十烷酸类那一条目在**形式上**与表10.1中其他条目有何不同？这反映了什么？',
      accept: ['one row', 'single row', 'no organ', 'four families', 'locally', 'blood flow'],
      answer_en: 'It is a single undivided row covering four families at once — prostaglandins, prostacyclins, thromboxanes and leukotrienes — with no organ given, and one shared effect entry: regulation of blood flow, regulation of ion transport, modulation of synaptic transmission. The blank organ column reflects that these are made locally, essentially everywhere, rather than by one dedicated gland.',
      answer_cn: '它是不分家的一整行，一次涵盖四个家族——前列腺素、前列环素、血栓素与白三烯——不给出器官，并共用一条作用说明：调节血流、调节离子转运、调制突触传递。器官栏留空反映出它们基本上是各处就地生成的，而不是某一个专门腺体的产物。' }
  ],

  '10-23': [
    { type: 'mcq',
      q_en: 'Which structural feature marks the corticoid that manages minerals rather than the one that answers stress?',
      q_cn: '哪一个结构特征标识出那个「管矿物质」而非「应对应激」的皮质类固醇？',
      options: [
        'The hydroxyl at C17',
        'The aldehyde group at C18',
        'The aromatic A ring',
        'The acetyl group at C17'
      ],
      answer: 1,
      optionRefs: { 0: '10-23', 2: '10-23', 3: '10-23' },
      optionNotes: {
        0: { en: 'The C17 hydroxyl is what distinguishes CORTISOL from corticosterone — the stress and blood-sugar hormone, not the mineral one.', cn: 'C17羟基区分的是**皮质醇**与皮质酮——那是管应激与血糖的激素，不是管矿物质的。' },
        2: { en: 'The aromatic A ring is estradiol’s signature; no corticoid has it, since aromatisation also costs the C19 methyl group.', cn: '芳香A环是雌二醇的标志；没有哪个皮质类固醇有它，因为芳构化还要牺牲C19甲基。' },
        3: { en: 'A C17 acetyl group is what progesterone carries in place of testosterone’s hydroxyl — a sex hormone feature, not a corticoid one.', cn: 'C17上的乙酰基是孕酮取代睾酮羟基的地方——那是性激素的特征，不是皮质类固醇的。' }
      },
      why_en: 'All three corticoids share the 4-en-3-one A ring and the C21 CH₂OH-ketone side chain; corticosterone is the plain member, cortisol adds the C17 hydroxyl and aldosterone carries the C18 aldehyde. That small decoration maps directly onto the functional split in Tab. 10.1.',
      why_cn: '三种皮质类固醇共有4-烯-3-酮的A环与带CH₂OH酮基的C21侧链；皮质酮最朴素，皮质醇多一个C17羟基，醛固酮带一个C18醛基。这一点小小的修饰，直接对应表10.1中的功能划分。' },

    { type: 'mcq',
      q_en: 'Testosterone and progesterone share an A ring. Where do they differ?',
      q_cn: '睾酮与孕酮共有同一个A环。它们的差别在哪里？',
      options: [
        'At C17: a hydroxyl on testosterone, an acetyl group on progesterone',
        'At C18: an aldehyde on progesterone',
        'In the A ring itself: progesterone’s is aromatic',
        'Progesterone has no steroid skeleton'
      ],
      answer: 0,
      optionRefs: { 1: '10-23', 2: '10-23', 3: '8-2-4-3' },
      optionNotes: {
        1: { en: 'A C18 aldehyde belongs to aldosterone, a corticoid, and is what makes it recognisable at a glance in the figure.', cn: 'C18醛基属于皮质类固醇醛固酮，正是它让人在图中一眼认出。' },
        2: { en: 'The aromatic A ring belongs to estradiol; progesterone keeps the same 4-en-3-one A ring as testosterone.', cn: '芳香A环属于雌二醇；孕酮保留的是与睾酮相同的4-烯-3-酮A环。' },
        3: { en: 'All six structures in this section are built on the same tetracyclic steran skeleton — that is the point of showing them side by side.', cn: '本节的六个结构都建立在同一个四环甾核骨架上——把它们并排展示正是为了这一点。' }
      },
      why_en: 'Both keep the 4-en-3-one A ring; the substituent at C17 is what separates the male sex hormone from the most important gestagen. Estradiol is the outlier of the trio, with an aromatic A ring and the C19 methyl gone.',
      why_cn: '二者都保留4-烯-3-酮的A环；把雄性性激素与最重要的孕激素区分开的是C17上的取代基。三者中雌二醇是异类：A环芳香化，C19甲基已经没有了。' },

    { type: 'short',
      q_en: 'Which two groups of steroid hormones does the book count, and which member does it call the most important within each sex-hormone class?',
      q_cn: '教材把类固醇激素计入哪两个组？在性激素的各个亚类中，它称哪一个成员最重要？',
      accept: ['adrenal cortex', 'sex hormone', 'testosterone', 'estradiol', 'estrogen', 'progesterone', 'gestagen'],
      answer_en: 'The hormones of the adrenal cortex — the corticoids, namely aldosterone, corticosterone and cortisol — and the sex hormones. Among the latter the book gives testosterone as the male sex hormone, estradiol-3,17β as the most important estrogen, and progesterone as the most important gestagen.',
      answer_cn: '一是肾上腺皮质的激素——皮质类固醇，即醛固酮、皮质酮与皮质醇；二是性激素。在后者中，教材把睾酮列为雄性性激素，把雌二醇-3,17β列为最重要的雌激素，把孕酮列为最重要的孕激素。' }
  ],

  '10-24': [
    { type: 'mcq',
      q_en: 'Which precursor amino acid does melatonin come from, in contrast to the catecholamines?',
      q_cn: '与儿茶酚胺相比，褪黑素来自哪一种前体氨基酸？',
      options: [
        'Tyrosine',
        'Tryptophan',
        'Glycine',
        'Glutamate'
      ],
      answer: 1,
      optionRefs: { 0: '10-24', 2: '10-11', 3: '9-24' },
      optionNotes: {
        0: { en: 'Tyrosine is the precursor of the catecholamines AND of the thyroid hormones — the two families acting by completely different mechanisms.', cn: '酪氨酸是儿茶酚胺**以及**甲状腺激素的前体——这两个家族的作用机制完全不同。' },
        2: { en: 'Glycine appears in chapter 10 as the partner of succinyl-CoA in the route to δ-aminolevulate and the porphyrins, not in hormone synthesis.', cn: '甘氨酸在第10章中出现，是作为琥珀酰CoA通向δ-氨基乙酰丙酸与卟啉那条路线的搭档，与激素合成无关。' },
        3: { en: 'Glutamate belongs to ammonia assimilation and transamination chemistry, not to this class of hormones.', cn: '谷氨酸属于氨的同化与转氨化学，不属于这一类激素。' }
      },
      why_en: 'Melatonin is the hormone of the epiphysis and arises from tryptophan; its drawn structure is an indole bearing a methoxy group and an N-acetylated ethylamine side chain. The whole class thus reduces to two precursor amino acids, tyrosine and tryptophan.',
      why_cn: '褪黑素是松果体的激素，由色氨酸生成；所画结构是一个带甲氧基与N-乙酰化乙胺侧链的吲哚。因此整个类别可归结为两种前体氨基酸：酪氨酸与色氨酸。' },

    { type: 'mcq',
      q_en: 'Why does it matter that thyroid hormones are formed by modification of tyrosine WITHIN thyroglobulin?',
      q_cn: '甲状腺激素是在**甲状腺球蛋白之内**由酪氨酸修饰而成，这一点为什么要紧？',
      options: [
        'Because it means the hormone is a protein hormone',
        'Because iodination happens on residues already built into a protein and the hormone is released by cleaving that protein, which is how the thyroid stores its hormone extracellularly as colloid',
        'Because the protein carries the hormone into the nucleus of the target cell',
        'Because it explains why thyroxin needs no iodine'
      ],
      answer: 1,
      optionRefs: { 0: '10-25', 2: '10-20', 3: '10-24' },
      optionNotes: {
        0: { en: 'Thyroxin is classified with the amino-acid derivatives, not with the peptide and protein hormones; thyroglobulin is the scaffold it is made on, not what it is.', cn: '甲状腺素被归入氨基酸衍生物，而不是肽类与蛋白类激素；甲状腺球蛋白是造它的脚手架，不是它本身。' },
        2: { en: 'The protein that carries a hormone into the nucleus is the intracellular RECEPTOR of the target cell, a DNA-binding protein — a different molecule at a different stage.', cn: '把激素带进细胞核的蛋白是靶细胞内的**受体**，是一种能结合DNA的蛋白——不同的分子、不同的阶段。' },
        3: { en: 'The opposite: thyroxin is tetraiodothyronine and the active form has one iodine fewer, so iodine is central to the whole story.', cn: '恰恰相反：甲状腺素就是四碘甲状腺原氨酸，活性形式少一个碘，所以碘正是整件事的核心。' }
      },
      why_en: 'The hormone is assembled on residues of a protein and then liberated by proteolysis of it. That is a genuinely unusual biosynthetic arrangement and it is what allows a gland to keep a large extracellular store of its own hormone.',
      why_cn: '激素是在一个蛋白的残基上组装出来的，然后经对该蛋白的水解而释放。这是一种确实不寻常的生物合成安排，也正是它让腺体能够在细胞外存下大量自己的激素。' },

    { type: 'short',
      q_en: 'One amino acid gives rise to hormones acting by two completely different mechanisms. Which, and how?',
      q_cn: '有一种氨基酸产生了作用机制完全不同的两类激素。是哪一种？如何？',
      accept: ['tyrosine', 'catecholamine', 'adrenaline', 'surface', 'cascade', 'thyroxin', 'nucleus', 'nuclear'],
      answer_en: 'Tyrosine. It is the starting material of the catecholamines — tyrosine to DOPA to dopamine to noradrenaline to adrenaline — which act as surface hormones through the adenylate cyclase cascade; and it is also the amino acid modified within thyroglobulin to give thyroxin, which acts by entering the cell and the nucleus. Same raw material, opposite architectures.',
      answer_cn: '酪氨酸。它既是儿茶酚胺的起始原料——酪氨酸→DOPA→多巴胺→去甲肾上腺素→肾上腺素——这一支通过腺苷酸环化酶级联从细胞表面起作用；它也是在甲状腺球蛋白内被修饰生成甲状腺素的那个氨基酸，而甲状腺素是进入细胞与细胞核起作用的。同样的原料，相反的架构。' }
  ],

  '10-25': [
    { type: 'mcq',
      q_en: 'What closes the oxytocin and vasopressin rings, and what caps their C-terminus?',
      q_cn: '是什么把催产素与血管加压素闭合成环？它们的C端又是如何封端的？',
      options: [
        'A peptide bond between the first and last residues; a free carboxyl',
        'The cystine present, i.e. a disulfide between the two Cys residues; the terminal glycine is in the form of an amide',
        'A glycosidic bond; a phosphorylated serine',
        'A hydrogen bond between two tyrosines; a free amino group'
      ],
      answer: 1,
      optionRefs: { 0: '2-1-4', 2: '10-25', 3: '2-2-2' },
      optionNotes: {
        0: { en: 'A head-to-tail peptide bond would also make a ring, but that is not what the drawn structures show — and the terminal glycine is amidated, not free.', cn: '首尾相连的肽键也能成环，但所画结构不是这样——而且末端甘氨酸是酰胺化的，不是游离的。' },
        2: { en: 'Glycosidic bonds and phosphoserine belong elsewhere; both hormones are plain nonapeptides, and the glycoprotein hormones are the larger ones further down the list.', cn: '糖苷键与磷酸丝氨酸属于别处；这两种激素都是普通的九肽，糖蛋白激素是清单后面更大的那些。' },
        3: { en: 'Hydrogen bonds stabilise conformation but do not close a covalent ring; the ring here is held by a covalent disulfide.', cn: '氢键稳定构象，但闭合不了共价环；此处的环是由共价二硫键维持的。' }
      },
      why_en: 'The book states both structural notes: the cyclic structure is made possible by the cystine present, and the terminal amino acid glycine is in the form of an amide. Both are nonapeptides differing at exactly two positions, Ile/Phe and Leu/Lys.',
      why_cn: '教材给出了这两条结构注记：环状结构由其中的胱氨酸所成就；末端氨基酸甘氨酸以酰胺形式存在。二者都是九肽，恰好在两个位置上不同：Ile/Phe与Leu/Lys。' },

    { type: 'mcq',
      q_en: 'Which hormone does the book place explicitly at the transition between peptide and protein hormones?',
      q_cn: '教材明确把哪一种激素放在肽类激素与蛋白类激素之间的过渡处？',
      options: [
        'Insulin, at Mr 5 750',
        'Parathormone, at Mr 8 500',
        'Somatotropin, at Mr 21 500',
        'Erythropoetin, at Mr 34 000'
      ],
      answer: 1,
      optionRefs: { 0: '10-25', 2: '10-25', 3: '10-22' },
      optionNotes: {
        0: { en: 'Insulin is squarely a peptide in the book’s list — 51 amino acids — and is famous instead as the first sequence ever determined (Sanger 1953).', cn: '在教材的清单里胰岛素明明白白属于肽——51个氨基酸——它出名的是另一件事：有史以来第一个被测定的序列（Sanger 1953）。' },
        2: { en: 'Somatotropin is already listed among the protein hormones; it is past the transition, not at it.', cn: '生长激素已经被列在蛋白类激素之中；它在过渡点之后，而不是在过渡点上。' },
        3: { en: 'Erythropoetin is at the top of the size range, a glycoprotein of 34 000 — the far end of the continuum.', cn: '促红细胞生成素处在体积范围的顶端，是34 000的糖蛋白——连续谱的另一端。' }
      },
      why_en: 'Parathormone of the parathyroid glands has Mr = 8 500 and is thus, the book says, already close to proteins. The class is a continuum from a nine-residue ring up to 34 000-dalton glycoproteins, with no sharp boundary.',
      why_cn: '甲状旁腺素（甲状旁腺）的Mr=8 500，教材说它因此已经接近蛋白质。这个类别是一条从九残基的环延伸到34 000道尔顿糖蛋白的连续谱，其间没有明确界线。' },

    { type: 'short',
      q_en: 'Which hormones in this subsection are named as glycoproteins, and what does that add to the picture of the class?',
      q_cn: '本小节中哪些激素被点名为糖蛋白？这为该类别的图景增添了什么？',
      accept: ['folitropin', 'lutropin', 'erythropoetin', 'glycoprotein', '34 000', 'continuum'],
      answer_en: 'Folitropin (Mr 34 000), lutropin (Mr 23 000) and erythropoetin (Mr 34 000) are named as glycoproteins. They sit at the large end of the size series that starts with a nine-residue ring, which shows that the third chemical class is not one kind of molecule but a continuum running from small cyclic peptides up to carbohydrate-bearing proteins.',
      answer_cn: '促卵泡素(Mr 34 000)、促黄体素(Mr 23 000)与促红细胞生成素(Mr 34 000)被点名为糖蛋白。它们位于这条从九残基环起步的体积序列的大端，说明第三个化学类别不是单一一种分子，而是一条从小环肽一直延伸到带糖链蛋白的连续谱。' }
  ],

  '10-26': [
    { type: 'mcq',
      q_en: 'Why does Tab. 10.1 give the icosanoids a single row with no organ named?',
      q_cn: '为什么表10.1只给二十烷酸类一整行、并且不写器官？',
      options: [
        'Because they are not really hormones',
        'Because all four families are cut from the same twenty-carbon precursor, arachidonate, and are made locally rather than by one dedicated gland',
        'Because their organ of origin has not yet been identified',
        'Because they act only inside the cell that makes them'
      ],
      answer: 1,
      optionRefs: { 0: '10-17', 2: '10-21', 3: '10-20' },
      optionNotes: {
        0: { en: 'The book’s own definition of hormonal control covers substances acting on surrounding cells, not only blood-borne ones — which is exactly where locally made icosanoids fit.', cn: '教材对激素调控的定义本来就包括作用于周围细胞的物质，而不只是随血液运送的——就地生成的二十烷酸类正落在这一条里。' },
        2: { en: 'A blank cell is not always an unknown. The serotonin row in the steroid/amino-acid part of the table is a genuine gap in the source; this one reflects the nature of the class.', cn: '空格不总是「未知」。表中类固醇／氨基酸那一部分里5-羟色胺那一行是原书真实的空缺；而这一行反映的是该类别本身的性质。' },
        3: { en: 'Their listed effects — regulation of blood flow and ion transport, modulation of synaptic transmission — are effects on tissue, not confined to the producing cell.', cn: '表中列出的作用——调节血流与离子转运、调制突触传递——是对组织的作用，并不局限于产生它们的那个细胞。' }
      },
      why_en: 'One fatty acid gives the whole class by two divergent routes, which is why the class is defined by carbon count (20, from Greek eikosi) rather than by function, and why prostaglandins, prostacyclins, thromboxanes and leukotrienes share one undivided row and one shared effect entry.',
      why_cn: '一种脂肪酸经两条发散路线产生了整个类别，这正是该类别以碳数（20，源自希腊语eikosi）而非以功能来定义的原因，也是前列腺素、前列环素、血栓素与白三烯共享一整行、共享一条作用说明的原因。' },

    { type: 'mcq',
      q_en: 'Where else in §10.3 has arachidonate already appeared?',
      q_cn: '花生四烯酸在§10.3中此前还在哪里出现过？',
      options: [
        'As the usual fatty acid at one position of phosphatidylinositol, in the phosphoinositide figure',
        'As the acyl chain released from thyroglobulin',
        'As the fatty acid activated to acyl-CoA before β-oxidation',
        'As the side chain of the corticoids'
      ],
      answer: 0,
      optionRefs: { 1: '10-24', 2: '10-8', 3: '10-23' },
      optionNotes: {
        1: { en: 'Thyroglobulin releases a hormone built from tyrosine residues; nothing acyl is cleaved from it.', cn: '甲状腺球蛋白释放的是由酪氨酸残基构建的激素；从它上面切下来的不是什么酰基。' },
        2: { en: 'Fatty acid activation is §10.1.2 chemistry, in the metabolic half of the chapter; a generic fatty acid, not arachidonate specifically.', cn: '脂肪酸的活化是§10.1.2的化学，属于本章代谢那一半；讲的是一般的脂肪酸，而不是特指花生四烯酸。' },
        3: { en: 'The corticoid side chain is the C21 CH₂OH ketone of a steroid skeleton, not a fatty acid at all.', cn: '皮质类固醇的侧链是甾核上带CH₂OH的C21酮基，根本不是脂肪酸。' }
      },
      why_en: 'The phosphoinositide figure labels one acyl position of phosphatidylinositol as usually arachidonate. So the membrane lipid that carries the phosphoinositide signal is also the reservoir from which this whole hormone class is cut — one membrane component doing two signalling jobs.',
      why_cn: '磷酸肌醇那幅图把磷脂酰肌醇的一个酰基位置标注为「通常是花生四烯酸」。因此承载磷酸肌醇信号的膜脂，同时也是切取整个这一激素类别的储库——同一个膜组分承担了两份信号工作。' },

    { type: 'short',
      q_en: 'Distinguish prostaglandin A₂, prostacyclin I₂ and thromboxane B₂ by the rings they carry.',
      q_cn: '按各自所带的环，区分前列腺素A₂、前列环素I₂与血栓素B₂。',
      accept: ['five-membered', 'cyclopentane', 'carbocycle', 'oxygen', 'fused', 'six-membered'],
      answer_en: 'Prostaglandin A₂ has closed a five-membered carbocycle. Prostacyclin I₂ has that same cyclopentane fused to an additional oxygen-containing ring. Thromboxane B₂ carries an oxygen-containing six-membered ring instead. All three belong to the ring-bearing branch, as against the leukotrienes, which keep the open chain of the parent fatty acid.',
      answer_cn: '前列腺素A₂闭合成一个五元碳环；前列环素I₂在同一个环戊烷上再并合一个含氧环；血栓素B₂则换成一个含氧的六元环。三者都属于带环的那一支，与保留母体脂肪酸开链的白三烯相对。' }
  ]

});
