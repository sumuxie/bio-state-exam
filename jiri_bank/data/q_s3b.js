/* =========================================================================
   SHEET 3 — Microbiology, questions 1-20.
   Questions already answered under S1 (Gram, isolation, PCR, HGT) carry both
   sheet refs on their existing entry and are not repeated here.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's3-micro-2-cell-wall',
  sheets: 'S3 Micro 2', weight: 1,
  stem_en: 'Describe the structure and function of bacterial cell walls.',
  stem_cn: '描述细菌细胞壁的结构与功能。',
  answer_en: 'The wall is made of **peptidoglycan (murein)**: chains of alternating NAG and NAM sugars, cross-linked to each other by short peptides. The cross-linking is done by **transpeptidases**, which is why they are the target of beta-lactams.\n\n' +
             '**Function** is mechanical: it resists **turgor pressure**. A bacterium is hypertonic relative to its surroundings, so water flows in and the wall is the only thing preventing lysis. It also determines cell shape.\n\n' +
             'The **Gram difference** is architectural. Gram-positive: a **thick** peptidoglycan layer outside the single membrane, with teichoic acids running through it. Gram-negative: a **thin** peptidoglycan layer sitting in the periplasm between an inner and an **outer membrane**, the outer leaflet of which is **lipopolysaccharide**.\n\n' +
             'That difference explains the stain, and it explains drug access: the outer membrane is an extra permeability barrier, which is why Gram-negatives are intrinsically harder to treat.',
  answer_cn: '细胞壁由**肽聚糖（murein）**构成：NAG 与 NAM 交替的糖链，彼此之间被短肽交联。交联由**转肽酶**完成，这正是 β-内酰胺类药物以它为靶点的原因。\n\n' +
             '**功能**是力学上的：抵抗**膨压**。细菌相对周围环境是高渗的，水会往里流，而细胞壁是唯一阻止它裂解的东西。它同时决定细胞形状。\n\n' +
             '**革兰氏差异**在于建筑结构。革兰氏阳性：单层膜外面是**厚**肽聚糖层，其中贯穿着磷壁酸。革兰氏阴性：**薄**肽聚糖层位于内膜与**外膜**之间的周质中，而外膜的外小叶是**脂多糖**。\n\n' +
             '这个差异解释了染色结果，也解释了药物的可及性：外膜是一层额外的通透屏障，这就是革兰氏阴性菌天生更难治疗的原因。',
  followups: [
    { q_en: 'What happens to a bacterium whose wall synthesis is blocked?',
      q_cn: '细胞壁合成被阻断的细菌会怎样？',
      a_en: 'It lyses — but only if it is growing, because the drug blocks construction of new wall rather than damaging existing wall. A non-dividing cell survives until it starts growing again.',
      a_cn: '它会裂解——但前提是它在生长，因为药物阻断的是新壁的建造，而不是破坏已有的壁。不分裂的细胞能活到重新开始生长为止。' },
    { q_en: 'What is LPS and why does it matter clinically?',
      q_cn: 'LPS 是什么？临床上为什么重要？',
      a_en: 'Lipopolysaccharide, the outer leaflet of the Gram-negative outer membrane. Its lipid A portion is endotoxin, which triggers a strong immune response and can cause septic shock even from dead bacteria.',
      a_cn: '脂多糖，革兰氏阴性菌外膜的外小叶。它的类脂 A 部分就是内毒素，能引发强烈免疫反应，即使细菌已死也可能导致感染性休克。' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's3-micro-3-plasmids',
  sheets: 'S3 Micro 3', weight: 1,
  stem_en: 'What are plasmids and their role in bacteria?',
  stem_cn: '什么是质粒？它在细菌中起什么作用？',
  answer_en: '**A plasmid is an extrachromosomal DNA molecule, usually circular, that replicates independently of the chromosome.** Independence is the defining property: it carries its own **origin of replication**.\n\n' +
             'Biologically it carries **accessory** genes — not essential for growth, but advantageous in particular conditions: antibiotic resistance, virulence factors, metabolic capabilities, and the transfer functions that let a conjugative plasmid move itself between cells. That makes plasmids a major vehicle of **horizontal gene transfer** and the main reason antibiotic resistance spreads so fast.\n\n' +
             'In the laboratory a plasmid is the standard **vector**, and the parts to name are: the **origin**, which sets copy number; a **selectable marker**, usually antibiotic resistance; and a **multiple cloning site**. An expression plasmid adds a promoter, a ribosome binding site and often a purification tag.\n\n' +
             'One consequence worth knowing: two plasmids sharing an origin are **incompatible** — they segregate apart rather than being maintained together.',
  answer_cn: '**质粒是染色体外的 DNA 分子，通常是环状的，独立于染色体复制。**独立性是它的定义性质：它带有自己的**复制起点**。\n\n' +
             '在生物学上它携带**附属**基因——对生长不是必需，但在特定条件下有利：抗生素耐药、毒力因子、代谢能力，以及让接合型质粒能在细胞间自我转移的转移功能。这使质粒成为**水平基因转移**的主要载体，也是抗生素耐药扩散如此之快的主要原因。\n\n' +
             '在实验室里质粒是标准**载体**，要点名的部件是：决定拷贝数的**复制起点**、通常是抗性基因的**选择标记**、以及**多克隆位点**。表达型质粒还要加上启动子、核糖体结合位点，常常还有纯化标签。\n\n' +
             '有一个后果值得知道：共用同一复制起点的两个质粒是**不相容的**——它们会分离开，而不是被一起维持。',
  followups: [
    { q_en: 'Why can you not co-transform two plasmids with the same origin?',
      q_cn: '为什么不能共转两个复制起点相同的质粒？',
      a_en: 'Because they are recognised by the same replication and partitioning machinery, so the cell cannot maintain both. Over a few generations the population segregates into cells carrying one or the other.',
      a_cn: '因为它们被同一套复制和分配机器识别，细胞无法同时维持两者。几代之后群体就分离成各自只带其中一个的细胞。',
      node: '1-9' },
    { q_en: 'What sets the copy number of a plasmid?',
      q_cn: '什么决定质粒的拷贝数？',
      a_en: 'The origin of replication. A high-copy origin gives hundreds of copies and more yield; a low-copy origin gives a few and is used for large or toxic constructs that would otherwise burden the cell.',
      a_cn: '复制起点。高拷贝起点给出几百个拷贝、产量更高；低拷贝起点只有几个，用于大的或有毒的构建，否则会给细胞造成负担。' }
  ],
  sourceNodes: ['1-9']
},

{
  id: 's3-micro-4-gram-stain-procedure',
  sheets: 'S3 Micro 4', weight: 1,
  stem_en: 'How do you perform a Gram stain?',
  stem_cn: '如何做革兰氏染色？',
  answer_en: 'Four steps, and the third is the one that actually does the work.\n\n' +
             '**Crystal violet** — the primary stain; everything goes purple.\n' +
             '**Iodine** — the mordant; it forms a large crystal violet-iodine complex inside the cell, too big to escape easily.\n' +
             '**Alcohol or acetone decolourisation** — the **critical and timed** step. In Gram-positives the thick peptidoglycan dehydrates and traps the complex, so they stay purple. In Gram-negatives the alcohol dissolves the lipid outer membrane and the thin wall cannot hold the complex, so it washes out.\n' +
             '**Safranin** — the counterstain; the now-colourless Gram-negatives take it up and appear pink.\n\n' +
             'Result: **Gram-positive purple, Gram-negative pink**.\n\n' +
             'Two practical points. Decolourisation is the commonest source of error — too long and Gram-positives read as negative. And use a **fresh culture**: old Gram-positive cells lose wall integrity and stain unreliably.',
  answer_cn: '四步，而真正起作用的是第三步。\n\n' +
             '**结晶紫**——初染；一切都变成紫色。\n' +
             '**碘液**——媒染剂；在细胞内形成大的结晶紫-碘复合物，大到不易逸出。\n' +
             '**乙醇或丙酮脱色**——**关键且要计时**的一步。革兰氏阳性菌厚厚的肽聚糖脱水收缩、把复合物困住，所以保持紫色。革兰氏阴性菌的脂质外膜被乙醇溶解，薄壁留不住复合物，于是被冲掉。\n' +
             '**番红**——复染；此时无色的革兰氏阴性菌吸收它，呈现粉红色。\n\n' +
             '结果：**革兰氏阳性紫色，革兰氏阴性粉红色**。\n\n' +
             '两个实际要点。脱色是最常见的出错来源——时间过长会让阳性菌读成阴性。以及要用**新鲜培养物**：老的革兰氏阳性细胞壁完整性下降，染色结果不可靠。',
  followups: [
    { q_en: 'Which step decides the outcome and why?',
      q_cn: '哪一步决定结果？为什么？',
      a_en: 'Decolourisation. Everything before it stains both types identically, and everything after only colours what the decolouriser stripped. The wall thickness difference is only expressed at that step.',
      a_cn: '脱色。在它之前两类菌染色完全一样，在它之后只是给被脱掉色的那些上色。细胞壁厚度的差异只在这一步被表达出来。' },
    { q_en: 'Why must the culture be fresh?',
      q_cn: '为什么必须用新鲜培养物？',
      a_en: 'Because old Gram-positive cells have damaged, thinner walls that no longer retain the complex, so they decolourise and read as Gram-negative — a false result from a real cell.',
      a_cn: '因为老的革兰氏阳性细胞壁受损变薄，不再能保留复合物，于是被脱色、读成革兰氏阴性——真实细胞给出的假结果。' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's3-micro-5-capsule',
  sheets: 'S3 Micro 5', weight: 1,
  stem_en: 'What is the significance of the bacterial capsule?',
  stem_cn: '细菌荚膜的意义是什么？',
  answer_en: '**A capsule is an organised polysaccharide layer outside the cell wall**, distinct from a loose slime layer by being firmly attached.\n\n' +
             'Its significance is mostly **virulence**. It resists **phagocytosis** — the phagocyte cannot get a grip on a slippery hydrated polysaccharide surface — and it hides the underlying surface antigens from antibodies. It also protects against desiccation and against complement.\n\n' +
             'It is the classic example in two places worth naming. **Griffith\'s transformation experiment** used encapsulated smooth versus non-encapsulated rough pneumococci, and it was the capsule that made the smooth strain lethal. And **conjugate vaccines** work by chemically linking capsular polysaccharide to a carrier protein, which converts a weak T-independent response into a strong T-dependent one — this is how Hib and pneumococcal vaccines are made.\n\n' +
             'Capsules also mediate **adhesion and biofilm** formation.',
  answer_cn: '**荚膜是细胞壁外一层有组织的多糖层**，与松散的黏液层的区别在于它牢固附着。\n\n' +
             '它的意义主要在于**毒力**。它抵抗**吞噬作用**——吞噬细胞抓不住湿滑水合的多糖表面——并且把下层的表面抗原藏起来不被抗体识别。它还能防干燥、抗补体。\n\n' +
             '它在两个地方是经典例子，值得点名。**Griffith 的转化实验**用的就是有荚膜的光滑型与无荚膜的粗糙型肺炎球菌，正是荚膜让光滑型具有致死性。以及**结合疫苗**：把荚膜多糖化学连接到载体蛋白上，把弱的 T 细胞非依赖反应转变为强的 T 细胞依赖反应——Hib 疫苗和肺炎球菌疫苗就是这么做的。\n\n' +
             '荚膜还介导**黏附和生物膜**形成。',
  followups: [
    { q_en: 'Why are capsular polysaccharides poor vaccines on their own?',
      q_cn: '为什么单纯的荚膜多糖疫苗效果不好？',
      a_en: 'Because polysaccharides provoke a T-independent response: no memory, and it works poorly in infants. Conjugating them to a protein recruits T-cell help and produces lasting immunity.',
      a_cn: '因为多糖引发的是 T 细胞非依赖反应：没有记忆，而且对婴幼儿效果差。把它连接到蛋白上就能招募 T 细胞帮助，产生持久免疫。' },
    { q_en: 'How would you visualise a capsule?',
      q_cn: '怎么观察荚膜？',
      a_en: 'Negative staining with India ink or nigrosin. The capsule excludes the stain, so it appears as a clear halo around the cell against a dark background.',
      a_cn: '用印度墨汁或苯胺黑做负染。荚膜把染料排除在外，因此在暗背景中呈现为细胞周围一圈透明的晕。' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's3-micro-6-bacterial-reproduction',
  sheets: 'S3 Micro 6', weight: 1,
  stem_en: 'Explain the different methods of bacterial reproduction.',
  stem_cn: '解释细菌的各种繁殖方式。',
  answer_en: 'The important distinction is between **reproduction**, which increases cell number, and **genetic exchange**, which does not — examiners often want to hear that these are separate in bacteria, unlike in sexual eukaryotes.\n\n' +
             '**Binary fission** is essentially the whole of bacterial reproduction: the chromosome replicates from a single origin, the two copies segregate to opposite poles, and a septum forms at mid-cell to give two identical daughter cells. It is asexual and produces clones, which is why a colony is the clonal progeny of one cell.\n\n' +
             'Minor variants exist — **budding** in some species, **fragmentation** in filamentous bacteria — but binary fission is the answer.\n\n' +
             'Then say what is **not** reproduction: **transformation, transduction and conjugation** are horizontal gene transfer. They change a cell\'s genetic content without producing a new cell, which is how bacteria acquire variation despite reproducing clonally.\n\n' +
             '**Endospore formation is also not reproduction** — one cell gives one spore, so the count does not increase; it is survival.',
  answer_cn: '重要的区分在于**繁殖**（增加细胞数）与**遗传交换**（不增加细胞数）——考官常常想听到这两件事在细菌里是分开的，与有性真核生物不同。\n\n' +
             '**二分裂**基本上就是细菌繁殖的全部：染色体从单一起点开始复制，两份拷贝分向两极，细胞中部形成隔膜，产生两个完全相同的子细胞。它是无性的、产生克隆，这也是一个菌落是单个细胞克隆后代的原因。\n\n' +
             '也存在次要的变体——某些种的**出芽**、丝状菌的**断裂**——但答案是二分裂。\n\n' +
             '然后说明什么**不是**繁殖：**转化、转导、接合**属于水平基因转移。它们改变细胞的遗传内容但不产生新细胞，这正是细菌尽管以克隆方式繁殖却仍能获得变异的方式。\n\n' +
             '**芽孢形成也不是繁殖**——一个细胞给出一个芽孢，数量不增加；那是生存策略。',
  followups: [
    { q_en: 'Why is a single colony assumed to be clonal?',
      q_cn: '为什么一个菌落被认为是克隆的？',
      a_en: 'Because binary fission is asexual, so all descendants of one colony-forming unit are genetically identical apart from new mutations. That assumption is what makes streaking for single colonies a purification method.',
      a_cn: '因为二分裂是无性的，所以一个菌落形成单位的全部后代除新发突变外遗传上完全相同。正是这个假定使「划线分单菌落」成为一种纯化方法。',
      node: '2-1' },
    { q_en: 'If reproduction is clonal, where does bacterial diversity come from?',
      q_cn: '既然繁殖是克隆的，细菌的多样性从哪来？',
      a_en: 'Mutation plus horizontal gene transfer. HGT is the dominant source for large functional changes, because it can import a whole working gene in one step rather than waiting for it to evolve.',
      a_cn: '突变加水平基因转移。对大的功能性变化来说，水平基因转移是主要来源，因为它能一步引入一个完整可用的基因，而不必等它进化出来。' }
  ]
},

{
  id: 's3-micro-8-aseptic-technique',
  sheets: 'S3 Micro 8', weight: 1,
  stem_en: 'What is the importance of aseptic technique in microbiology?',
  stem_cn: '无菌操作在微生物学中为何重要？',
  answer_en: 'Aseptic technique protects **two directions at once**: it keeps contaminants out of your culture, and it keeps your organism out of you and the environment.\n\n' +
             'The first matters because **microbiology is done on pure cultures**. A contaminant that grows faster than your organism takes over, and every result afterwards is about the wrong species. Since you cannot see contamination until it is established, prevention is the only control.\n\n' +
             'In practice: work near a **flame** or in a laminar-flow hood, **flame the loop** before and after each transfer, **flame the bottle neck** when opening, hold caps in your hand rather than putting them down, minimise the time containers are open, and disinfect the bench before and after.\n\n' +
             'The reasoning to state rather than the list: **air, surfaces, your hands and your own equipment are all sources**, and each rule closes one of them.\n\n' +
             'Verification is a **negative control** — an uninoculated plate or tube incubated alongside. If it grows, the technique failed and the experiment is void.',
  answer_cn: '无菌操作同时保护**两个方向**：既把污染物挡在你的培养物之外，也把你的菌挡在你自己和环境之外。\n\n' +
             '前者重要，是因为**微生物学是在纯培养上做的**。一个长得比你的菌快的污染物会占领整个培养物，之后所有结果讲的都是另一个物种。而在污染成势之前你看不见它，所以预防是唯一的控制手段。\n\n' +
             '实际操作：在**火焰**旁或超净台内操作，每次转接前后都要**灼烧接种环**，开瓶时**灼烧瓶口**，瓶盖拿在手里而不是放在台面上，尽量缩短容器敞开的时间，操作前后都要消毒台面。\n\n' +
             '要讲的是背后的推理而不是清单：**空气、台面、你的手、你自己的器材都是污染源**，而每一条规则封住其中一个。\n\n' +
             '验证方式是**阴性对照**——一块不接种的平板或一支不接种的管子一起培养。如果它长了，说明操作失败，实验作废。',
  followups: [
    { q_en: 'Why flame the neck of a bottle?',
      q_cn: '为什么要灼烧瓶口？',
      a_en: 'It kills organisms on the rim and creates a rising convection current that carries airborne particles away from the opening rather than into it.',
      a_cn: '它杀死瓶口边缘的微生物，并形成向上的对流，把空气中的颗粒带离开口而不是带进去。' },
    { q_en: 'How would you know your aseptic technique failed?',
      q_cn: '你怎么知道自己的无菌操作失败了？',
      a_en: 'The uninoculated negative control grows, or colonies of a different morphology appear on your plate. Both mean the result cannot be interpreted, not that it can be corrected.',
      a_cn: '不接种的阴性对照长了菌，或者你的平板上出现了形态不同的菌落。两者都意味着结果无法解读，而不是可以修正。' }
  ],
  sourceNodes: ['2-1']
},

{
  id: 's3-micro-9-bacterial-transformation',
  sheets: 'S3 Micro 9', weight: 1,
  stem_en: 'Describe the process of bacterial transformation.',
  stem_cn: '描述细菌转化的过程。',
  answer_en: 'Distinguish **natural** from **artificial** transformation, because the question can mean either.\n\n' +
             '**Natural**: some species become **competent** under defined conditions, expressing a dedicated uptake machinery that binds extracellular DNA, degrades one strand, and imports the other, which is then integrated by homologous recombination. This is genuine horizontal gene transfer.\n\n' +
             '**Artificial**, which is what you do at the bench, has three steps. **Make cells competent** — chemically, by washing in ice-cold calcium chloride, which neutralises the repulsion between the negatively charged DNA and the negatively charged membrane. **Introduce the DNA** — incubate on ice, then a brief **42 °C heat shock**, which creates a transient imbalance driving DNA in. **Recover** — grow in non-selective medium for an hour so the resistance gene is expressed before selection is applied.\n\n' +
             'Then plate on selective medium. The alternative is **electroporation**, a high-voltage pulse that makes transient pores, which is two to three orders of magnitude more efficient and is used when success events are rare.\n\n' +
             'The result is quantified as **transformation efficiency, in colony-forming units per microgram of DNA**.',
  answer_cn: '要区分**天然**转化和**人工**转化，因为这道题两者都可能在问。\n\n' +
             '**天然**：某些物种在特定条件下变得**感受态**，表达一套专门的摄取机器，结合胞外 DNA、降解其中一条链、把另一条运进去，随后通过同源重组整合。这是真正的水平基因转移。\n\n' +
             '**人工**转化，也就是你在实验台上做的，分三步。**制备感受态细胞**——化学法是用冰冷的氯化钙洗涤，中和带负电的 DNA 与带负电的膜之间的排斥。**导入 DNA**——冰上孵育，然后 **42 °C 短暂热激**，造成一个瞬时不平衡驱动 DNA 进入。**复苏**——在非选择性培养基中生长一小时，让抗性基因先表达出来，再施加选择。\n\n' +
             '然后涂在选择性培养基上。另一种做法是**电穿孔**，用高压脉冲造出瞬时孔隙，效率高两到三个数量级，用在成功事件本来就稀少的场合。\n\n' +
             '结果以**转化效率**量化，单位是每微克 DNA 的菌落形成单位数。',
  followups: [
    { q_en: 'Why is the recovery step necessary?',
      q_cn: '为什么复苏这一步是必要的？',
      a_en: 'Because the resistance gene must be transcribed and translated before the cell meets the antibiotic. Plating straight after heat shock kills transformants that had the plasmid but not yet the protein.',
      a_cn: '因为抗性基因必须先被转录和翻译，细胞才能面对抗生素。热激后直接涂板，会杀死那些已经拿到质粒但还没造出蛋白的转化子。',
      node: '1-10' },
    { q_en: 'What is calcium chloride actually doing?',
      q_cn: '氯化钙到底在做什么？',
      a_en: 'Shielding charge. DNA and the membrane are both negatively charged and repel; divalent calcium screens that repulsion so the DNA can approach the surface.',
      a_cn: '屏蔽电荷。DNA 和膜都带负电、互相排斥；二价钙离子屏蔽这种排斥，使 DNA 能够靠近细胞表面。' }
  ],
  sourceNodes: ['1-10', '2-1']
},

{
  id: 's3-micro-10-bacteriophages',
  sheets: 'S3 Micro 10', weight: 1,
  stem_en: 'What are bacteriophages and how do they infect bacteria?',
  stem_cn: '什么是噬菌体？它们如何感染细菌？',
  answer_en: '**Bacteriophages are viruses that infect bacteria** — a protein capsid around a nucleic acid genome, with no metabolism of their own.\n\n' +
             'Infection: **adsorption** to a specific surface receptor, which is what determines host range; **injection** of the genome, leaving the capsid outside — the observation behind the Hershey-Chase experiment; then one of two programmes.\n\n' +
             'The **lytic cycle**: host machinery is redirected to make phage components, these assemble, and the cell lyses to release progeny.\n\n' +
             'The **lysogenic cycle**: the genome integrates into the host chromosome as a **prophage** and is replicated passively with it, until a stress signal triggers induction into the lytic cycle. A **temperate** phage can do both.\n\n' +
             'Two reasons this is not just trivia. Lysogeny is exactly what **DE3** is — a lambda prophage carrying T7 RNA polymerase, which is why your expression strain works. And a phage that packages host DNA by mistake performs **transduction**, one of the three routes of horizontal gene transfer.',
  answer_cn: '**噬菌体是感染细菌的病毒**——蛋白衣壳包裹核酸基因组，自身没有代谢。\n\n' +
             '感染过程：**吸附**到特定的表面受体上，这决定了宿主范围；**注入**基因组，把衣壳留在外面——这正是 Hershey-Chase 实验背后的观察；随后进入两种程序之一。\n\n' +
             '**裂解周期**：宿主机器被改造去生产噬菌体组件，组装起来，细胞裂解释放子代。\n\n' +
             '**溶原周期**：基因组整合进宿主染色体成为**原噬菌体**，随宿主被动复制，直到应激信号触发它进入裂解周期。**温和**噬菌体两者都能做。\n\n' +
             '这不只是冷知识，有两个理由。溶原正是 **DE3** 的本质——一个携带 T7 RNA 聚合酶的 lambda 原噬菌体，这就是你的表达菌株能工作的原因。而错误包装了宿主 DNA 的噬菌体会完成**转导**，即水平基因转移的三条途径之一。',
  followups: [
    { q_en: 'What decides a phage\'s host range?',
      q_cn: '什么决定噬菌体的宿主范围？',
      a_en: 'The receptor it adsorbs to. If a bacterium lacks that surface structure the phage cannot attach, which is also how resistance to a phage arises — by losing or altering the receptor.',
      a_cn: '它所吸附的受体。如果细菌没有那个表面结构，噬菌体就无法附着；这也是对噬菌体产生抗性的方式——丢失或改变受体。' },
    { q_en: 'Where have you already used lysogeny in the lab?',
      q_cn: '你在实验室里已经用到过溶原，在哪里？',
      a_en: 'Every DE3 expression strain. DE3 is a lambda prophage integrated into the chromosome carrying the T7 RNA polymerase gene under lacUV5 control.',
      a_cn: '每一个 DE3 表达菌株。DE3 就是整合在染色体上的 lambda 原噬菌体，携带受 lacUV5 控制的 T7 RNA 聚合酶基因。',
      node: '1-12' }
  ]
},

{
  id: 's3-micro-11-antibiotic-resistance',
  sheets: 'S3 Micro 11', weight: 1,
  stem_en: 'Explain the concept of antibiotic resistance.',
  stem_cn: '解释抗生素耐药性的概念。',
  answer_en: '**Resistance is the ability of a bacterium to grow at a drug concentration that inhibits others of its species.** Say early that the antibiotic does not create resistance — it **selects** for variants that already exist.\n\n' +
             'Four mechanisms, and each one is exemplified by a drug you already know. **Destroy the drug** — beta-lactamase hydrolysing ampicillin. **Modify the drug** — phosphorylation or acetylation of kanamycin. **Alter the target** — a point mutation in DNA gyrase giving ciprofloxacin resistance, or a modified penicillin-binding protein. **Keep the drug out** — reduced permeability or active **efflux pumps**, which often give resistance to several unrelated drugs at once.\n\n' +
             'Origin: **mutation**, or **horizontal gene transfer**, and the second dominates clinically because a resistance gene on a conjugative plasmid can cross between species in one step.\n\n' +
             'This is also why the practical advice follows: complete the course and avoid unnecessary use, because sub-inhibitory concentrations are exactly the conditions that select resistant variants without killing them.',
  answer_cn: '**耐药是指细菌能在抑制同种其它个体的药物浓度下生长。**要早点说明：抗生素并不制造耐药——它**选择**出本来就存在的变异体。\n\n' +
             '四种机制，每一种都能用你已经熟悉的药举例。**毁掉药物**——β-内酰胺酶水解氨苄西林。**修饰药物**——对卡那霉素的磷酸化或乙酰化。**改变靶点**——DNA 旋转酶上的点突变带来环丙沙星耐药，或者改变的青霉素结合蛋白。**不让药物进来**——通透性下降或主动**外排泵**，后者常常一次带来对多种不相关药物的耐药。\n\n' +
             '来源：**突变**，或**水平基因转移**，临床上以后者为主，因为接合型质粒上的一个耐药基因可以一步跨越物种。\n\n' +
             '这也是那些实用建议的由来：按疗程用完、避免不必要使用，因为亚抑制浓度恰恰是那种能选择出耐药变异体却不杀死它们的条件。',
  followups: [
    { q_en: 'Why does an antibiotic not "cause" resistance?',
      q_cn: '为什么说抗生素不「导致」耐药？',
      a_en: 'Because the variants pre-exist in the population by mutation or acquired genes. The drug removes the susceptible majority, so the resistant minority is what remains and grows — selection, not induction.',
      a_cn: '因为这些变异体本来就通过突变或获得基因存在于群体中。药物清除掉敏感的多数，剩下并长起来的就是耐药的少数——这是选择，不是诱导。' },
    { q_en: 'Which mechanism explains satellite colonies on an ampicillin plate?',
      q_cn: '氨苄平板上的卫星菌落对应哪种机制？',
      a_en: 'Destroying the drug. Secreted beta-lactamase clears ampicillin from the medium around a resistant colony, so non-resistant cells grow in that halo.',
      a_cn: '毁掉药物。分泌出的 β-内酰胺酶把耐药菌落周围培养基中的氨苄清除掉，非耐药细胞就在那圈晕里长起来。' }
  ],
  sourceNodes: ['2-1']
},

{
  id: 's3-micro-12-antibiotic-classes',
  sheets: 'S3 Micro 12', weight: 1,
  stem_en: 'What are the mechanisms of action of different classes of antibiotics?',
  stem_cn: '不同类别抗生素的作用机制是什么？',
  answer_en: 'Organise by **target**, which gives five groups.\n\n' +
             '**Cell wall synthesis** — beta-lactams (penicillins, cephalosporins) inhibit transpeptidase cross-linking; glycopeptides such as vancomycin bind the peptide precursor itself. Bactericidal, and only against growing cells.\n\n' +
             '**Protein synthesis** — aminoglycosides and tetracyclines act on the **30S** subunit, macrolides and chloramphenicol on the **50S**. Selectivity comes from bacterial ribosomes differing from ours.\n\n' +
             '**Nucleic acid synthesis** — fluoroquinolones inhibit **DNA gyrase and topoisomerase IV**; rifampicin inhibits bacterial **RNA polymerase**.\n\n' +
             '**Folate synthesis** — sulfonamides and trimethoprim block successive steps of folate production. Selective because bacteria must synthesise folate whereas we take it up from diet, and blocking two steps in one pathway is synergistic.\n\n' +
             '**Membrane integrity** — polymyxins disrupt the Gram-negative outer membrane; last-resort agents because selectivity is poor.\n\n' +
             'The unifying principle worth stating: **selective toxicity** — every one of these targets something bacteria have and we do not, or a version of it different enough to attack.',
  answer_cn: '按**靶点**组织，得到五组。\n\n' +
             '**细胞壁合成**——β-内酰胺类（青霉素类、头孢类）抑制转肽酶的交联；万古霉素这类糖肽类直接结合肽前体。杀菌，且只对生长中的细胞有效。\n\n' +
             '**蛋白质合成**——氨基糖苷类和四环素类作用于 **30S** 亚基，大环内酯类和氯霉素作用于 **50S**。选择性来自细菌核糖体与我们的不同。\n\n' +
             '**核酸合成**——氟喹诺酮类抑制 **DNA 旋转酶和拓扑异构酶 IV**；利福平抑制细菌 **RNA 聚合酶**。\n\n' +
             '**叶酸合成**——磺胺类和甲氧苄啶阻断叶酸生成的相邻两步。之所以有选择性，是因为细菌必须自己合成叶酸而我们从食物中摄取；而阻断同一通路的两步会产生协同作用。\n\n' +
             '**膜完整性**——多黏菌素破坏革兰氏阴性菌外膜；因为选择性差，属于最后手段。\n\n' +
             '值得点出的统一原则是**选择性毒性**——上述每一种的靶点，要么是细菌有而我们没有的，要么是差异大到足以被单独攻击的版本。',
  followups: [
    { q_en: 'Why are ribosome-targeting antibiotics selective for bacteria?',
      q_cn: '为什么靶向核糖体的抗生素对细菌有选择性？',
      a_en: 'Because the bacterial 70S ribosome differs enough in structure from our 80S that the drug binds one and not the other. Mitochondrial ribosomes are the exception, which is a source of side effects.',
      a_cn: '因为细菌的 70S 核糖体在结构上与我们的 80S 差异足够大，药物只结合其中一个。线粒体核糖体是例外，这也是某些副作用的来源。' },
    { q_en: 'Why are sulfonamide and trimethoprim given together?',
      q_cn: '为什么磺胺和甲氧苄啶要联用？',
      a_en: 'They block two successive steps of the same pathway, which is synergistic: the combination is far more effective than either alone and resistance requires two changes rather than one.',
      a_cn: '它们阻断同一条通路的相邻两步，产生协同：联用远比单用有效，而且产生耐药需要两处改变而不是一处。' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's3-micro-14-biofilms',
  sheets: 'S3 Micro 14', weight: 1,
  stem_en: 'What are biofilms and their significance in microbiology?',
  stem_cn: '什么是生物膜？它在微生物学中的意义是什么？',
  answer_en: '**A biofilm is a community of microorganisms attached to a surface and embedded in a self-produced matrix of extracellular polymeric substances** — polysaccharide, protein and extracellular DNA.\n\n' +
             'Formation is a sequence: reversible attachment, irreversible attachment, matrix production and maturation into a structured community, then dispersal of cells that seed new sites.\n\n' +
             'The significance is that **cells in a biofilm behave differently from the same cells in liquid culture**. They are far more resistant to antibiotics and disinfectants — the matrix limits penetration, cells deep inside grow slowly and so escape drugs that need growth, and there are dormant **persister** cells. Resistance here is largely **physiological rather than genetic**, which is why it is not detected by a standard susceptibility test on planktonic cells.\n\n' +
             'Consequences: chronic infections on catheters, implants and heart valves; dental plaque; industrial biofouling. Also beneficial in wastewater treatment.\n\n' +
             'Biofilm formation is coordinated by **quorum sensing**, which is how the population knows it is dense enough to build one.',
  answer_cn: '**生物膜是附着在表面、包埋在自身产生的胞外聚合物基质中的微生物群落**——基质由多糖、蛋白和胞外 DNA 构成。\n\n' +
             '形成过程是一个序列：可逆附着、不可逆附着、产生基质并成熟为有结构的群落，最后是细胞散播去建立新的定植点。\n\n' +
             '它的意义在于**生物膜中的细胞行为与同样的细胞在液体培养中完全不同**。它们对抗生素和消毒剂的耐受性高得多——基质限制药物渗透，深处的细胞生长缓慢因而躲开了需要生长才起效的药物，而且还有休眠的**持留菌**。这里的耐受性主要是**生理性的而非遗传性的**，所以用浮游细胞做的标准药敏试验检测不出来。\n\n' +
             '后果：导管、植入物和心脏瓣膜上的慢性感染；牙菌斑；工业生物污损。在污水处理中则是有益的。\n\n' +
             '生物膜的形成由**群体感应**协调，那是群体判断自己密度是否足够去建造它的方式。',
  followups: [
    { q_en: 'Why does a susceptibility test underestimate the dose needed for a biofilm infection?',
      q_cn: '为什么药敏试验会低估治疗生物膜感染所需的剂量？',
      a_en: 'Because it is performed on free-swimming cells. The biofilm phenotype — restricted penetration, slow growth, persisters — is not present in that test, so the measured MIC does not apply.',
      a_cn: '因为它是在自由游动的细胞上做的。生物膜表型——渗透受限、生长缓慢、持留菌——在那个试验里并不存在，所以测出的 MIC 不适用。' },
    { q_en: 'Is biofilm resistance the same as antibiotic resistance?',
      q_cn: '生物膜耐受和抗生素耐药是一回事吗？',
      a_en: 'No. It is tolerance, largely physiological and reversible: disperse the biofilm and the same cells become susceptible again, whereas genetic resistance is inherited.',
      a_cn: '不是。那是耐受，主要是生理性且可逆的：把生物膜打散，同样的细胞又变得敏感；而遗传性耐药是可遗传的。' }
  ]
},

{
  id: 's3-micro-15-quorum-sensing',
  sheets: 'S3 Micro 15', weight: 1,
  stem_en: 'Explain the role of quorum sensing in bacterial communication.',
  stem_cn: '解释群体感应在细菌交流中的作用。',
  answer_en: '**Quorum sensing is cell-density-dependent gene regulation, mediated by a diffusible signal molecule.**\n\n' +
             'The mechanism is simple and worth stating as a loop: each cell constitutively makes a small **autoinducer** and releases it. At low density it diffuses away and stays dilute. As the population grows the concentration rises, and above a threshold it binds a **receptor or regulator** inside the cell and switches on a set of genes. Because the regulator often also increases autoinducer synthesis, the response is a **positive feedback switch** that turns on sharply rather than gradually.\n\n' +
             'The logic is economic: it lets bacteria perform behaviours that only pay off **collectively** — there is no point in one cell secreting a toxin or building a biofilm alone.\n\n' +
             'Examples: bioluminescence in **Vibrio fischeri**, the founding case; **virulence factor** expression, which is why a pathogen stays quiet until it has enough numbers to overwhelm the host; **biofilm** formation; and competence for natural transformation.\n\n' +
             'Gram-negatives typically use acyl-homoserine lactones, Gram-positives use peptides.',
  answer_cn: '**群体感应是依赖细胞密度的基因调控，由一种可扩散的信号分子介导。**\n\n' +
             '机制很简单，值得当作一个回路来讲：每个细胞组成型地合成一种小分子**自诱导物**并释放出去。密度低时它扩散开、保持稀释。随着群体增长浓度上升，超过阈值后它结合细胞内的**受体或调节蛋白**，打开一组基因。由于该调节蛋白往往还会提高自诱导物的合成，这个反应构成**正反馈开关**，是陡然打开而不是逐渐打开。\n\n' +
             '它的逻辑是经济性：它让细菌去做那些只有**集体**才划算的行为——单个细胞分泌毒素或建造生物膜毫无意义。\n\n' +
             '例子：费氏弧菌的生物发光，这是最早的案例；**毒力因子**表达，这就是病原体在数量足以压倒宿主之前保持安静的原因；**生物膜**形成；以及天然转化的感受态。\n\n' +
             '革兰氏阴性菌通常用酰基高丝氨酸内酯，革兰氏阳性菌用多肽。',
  followups: [
    { q_en: 'Why would a pathogen delay expressing virulence factors?',
      q_cn: '病原体为什么要推迟表达毒力因子？',
      a_en: 'Because expressing them early alerts the immune system while the population is still too small to succeed. Waiting for a quorum means attacking only when the numbers can overwhelm the response.',
      a_cn: '因为过早表达会在群体还太小、不足以成功时惊动免疫系统。等到达到阈值才发动，意味着只在数量足以压倒免疫反应时进攻。' },
    { q_en: 'Why is quorum sensing an antibacterial drug target?',
      q_cn: '为什么群体感应是抗菌药物的靶点？',
      a_en: 'Because blocking it disarms the population without killing it, so there is much weaker selection for resistance than with a drug that kills.',
      a_cn: '因为阻断它是解除群体的武装而不是杀死它，因此产生耐药的选择压力比杀菌药物弱得多。' }
  ]
},

{
  id: 's3-micro-16-endospore-formation',
  sheets: 'S3 Micro 16', weight: 1,
  stem_en: 'Describe the process of endospore formation.',
  stem_cn: '描述芽孢形成的过程。',
  answer_en: '**Sporulation is a survival response to starvation, not reproduction** — one cell gives one spore, so the count does not increase. Say that first.\n\n' +
             'The process: the chromosome replicates and the cell divides **asymmetrically**, giving a small forespore and a larger mother cell. The mother cell then **engulfs** the forespore, so it lies within the mother\'s cytoplasm surrounded by two membranes. A thick **cortex** of modified peptidoglycan and a protein **coat** are laid down, the spore is **dehydrated**, and **dipicolinic acid with calcium** accumulates in the core. Finally the mother cell lyses and releases the mature spore.\n\n' +
             'Resistance comes from that structure: the dehydrated core plus calcium dipicolinate stabilises proteins and DNA against heat, and **small acid-soluble proteins** bind and protect the DNA from radiation and chemicals.\n\n' +
             'Two consequences worth naming. Endospores are why **autoclaving is 121 °C** rather than boiling — they survive boiling. And germination reverses the process when nutrients return.',
  answer_cn: '**产芽孢是对饥饿的生存反应，不是繁殖**——一个细胞给出一个芽孢，数量不增加。这一点要先说。\n\n' +
             '过程：染色体复制，细胞**不对称分裂**，产生一个小的前芽孢和一个较大的母细胞。母细胞随后**吞没**前芽孢，使它位于母细胞胞质内、被两层膜包围。接着沉积由修饰肽聚糖构成的厚**皮层**和蛋白质**芽孢衣**，芽孢**脱水**，核心中积累**吡啶二羧酸与钙**。最后母细胞裂解，释放成熟芽孢。\n\n' +
             '抗性来自这套结构：脱水的核心加上吡啶二羧酸钙稳定了蛋白和 DNA 使其耐热，而**小分子酸溶性蛋白**结合并保护 DNA 免受辐射和化学损伤。\n\n' +
             '有两个后果值得点名。芽孢正是**高压灭菌用 121 °C** 而不是煮沸的原因——它们能在沸水中存活。而营养回来时，萌发过程会把这一切逆转。',
  followups: [
    { q_en: 'Why does autoclaving use 121 °C rather than 100 °C?',
      q_cn: '为什么高压灭菌用 121 °C 而不是 100 °C？',
      a_en: 'Because endospores survive boiling. 121 °C under pressure for 15-20 minutes is the condition that reliably kills them, and sterilisation is defined by killing the most resistant form present.',
      a_cn: '因为芽孢在沸水中能存活。加压下 121 °C 保持 15–20 分钟才是能可靠杀死它们的条件，而灭菌的定义正是杀死现场最耐受的那种形式。' },
    { q_en: 'Why is sporulation not counted as reproduction?',
      q_cn: '为什么产芽孢不算繁殖？',
      a_en: 'Because one vegetative cell produces exactly one spore and the mother cell is consumed. Cell number does not increase, which is the defining feature of reproduction.',
      a_cn: '因为一个营养细胞恰好产生一个芽孢，而母细胞被消耗掉。细胞数量没有增加，而那正是繁殖的定义性特征。' }
  ]
},

{
  id: 's3-micro-17-bacterial-metabolism',
  sheets: 'S3 Micro 17', weight: 1,
  stem_en: 'What are the different types of bacterial metabolism?',
  stem_cn: '细菌有哪些代谢类型？',
  answer_en: 'Classify along **two independent axes**, then combine them — that structure is the answer.\n\n' +
             '**Carbon source**: **autotroph** fixes CO2; **heterotroph** uses organic carbon.\n\n' +
             '**Energy source**: **phototroph** uses light; **chemotroph** uses chemical oxidation. Chemotrophs split further into **lithotroph**, oxidising inorganic compounds such as ammonia, sulfur or hydrogen, and **organotroph**, oxidising organic compounds.\n\n' +
             'Combining gives the four names: **photoautotroph** (cyanobacteria), **photoheterotroph**, **chemolithoautotroph** (nitrifying and sulfur bacteria — this is the group with no eukaryotic equivalent), and **chemoorganoheterotroph** (**E. coli** and most bacteria you handle).\n\n' +
             'Then the **electron acceptor** axis: **aerobic respiration** uses oxygen; **anaerobic respiration** uses nitrate, sulfate or fumarate instead; **fermentation** uses an internal organic acceptor and no electron transport chain, which is why it yields so little ATP.\n\n' +
             'Add the oxygen-tolerance terms: obligate aerobe, obligate anaerobe, facultative anaerobe, microaerophile.',
  answer_cn: '沿**两条独立的轴**分类，再组合起来——这个结构本身就是答案。\n\n' +
             '**碳源**：**自养**固定二氧化碳；**异养**利用有机碳。\n\n' +
             '**能源**：**光营养**利用光；**化能营养**利用化学氧化。化能营养又分为**无机营养**，氧化氨、硫、氢这类无机物；和**有机营养**，氧化有机物。\n\n' +
             '组合起来得到四个名称：**光能自养**（蓝细菌）、**光能异养**、**化能无机自养**（硝化菌与硫细菌——这一组在真核生物中没有对应者）、**化能有机异养**（大肠杆菌和你接触的大多数细菌）。\n\n' +
             '然后是**电子受体**这条轴：**有氧呼吸**用氧；**无氧呼吸**改用硝酸盐、硫酸盐或延胡索酸；**发酵**用内部的有机受体、不用电子传递链，这正是它产 ATP 极少的原因。\n\n' +
             '再补上对氧的耐受术语：专性需氧、专性厌氧、兼性厌氧、微需氧。',
  followups: [
    { q_en: 'What is the difference between anaerobic respiration and fermentation?',
      q_cn: '无氧呼吸和发酵有什么区别？',
      a_en: 'Anaerobic respiration still uses an electron transport chain, just with a terminal acceptor other than oxygen, so it makes substantial ATP. Fermentation has no chain at all and uses an internal organic acceptor purely to regenerate NAD-plus.',
      a_cn: '无氧呼吸仍然使用电子传递链，只是终末受体不是氧，所以能产生可观的 ATP。发酵完全没有传递链，用内部的有机受体，纯粹是为了再生 NAD⁺。' },
    { q_en: 'Which metabolic type has no eukaryotic equivalent?',
      q_cn: '哪种代谢类型在真核生物中没有对应者？',
      a_en: 'Chemolithotrophy — getting energy by oxidising inorganic compounds. It is exclusively prokaryotic and underlies the nitrogen and sulfur cycles.',
      a_cn: '化能无机营养——通过氧化无机物获取能量。它是原核生物独有的，支撑着氮循环和硫循环。' }
  ]
},

{
  id: 's3-micro-18-biochemical-tests',
  sheets: 'S3 Micro 18', weight: 1,
  stem_en: 'How do you identify bacteria using biochemical tests?',
  stem_cn: '如何用生化试验鉴定细菌？',
  answer_en: 'The principle: **each test asks whether the organism has one particular enzyme or metabolic capability, and the combination of answers identifies it.** No single test identifies anything; the pattern does.\n\n' +
             'Start from a **pure culture** and a Gram stain, which narrows the field before any biochemistry.\n\n' +
             'Common tests worth naming with their logic: **catalase** — bubbles with hydrogen peroxide, separates staphylococci from streptococci; **oxidase** — cytochrome c oxidase, separates **Pseudomonas** from Enterobacteriaceae; **coagulase** — separates **S. aureus** from other staphylococci; **sugar fermentation** on differential media, read as a pH-indicator colour change with or without gas; **IMViC** for enteric bacteria; and **urease** and **citrate** utilisation.\n\n' +
             'Results are combined in a **dichotomous key** or, in practice, a commercial multi-test strip read as a numeric profile against a database.\n\n' +
             'The honest limitation: biochemical identification requires the organism to be **culturable** and to behave typically, and it resolves less finely than 16S or whole-genome sequencing — which is why sequencing has largely displaced it where precision matters.',
  answer_cn: '原理是：**每一项试验只问该菌有没有某一个特定的酶或代谢能力，而这些答案的组合才完成鉴定。**任何单项试验都鉴定不了什么，模式才可以。\n\n' +
             '从**纯培养**和革兰氏染色开始，这在做任何生化试验之前就已经缩小了范围。\n\n' +
             '值得连同其逻辑一起点名的常用试验：**过氧化氢酶**——遇过氧化氢产生气泡，区分葡萄球菌与链球菌；**氧化酶**——细胞色素 c 氧化酶，区分假单胞菌与肠杆菌科；**凝固酶**——把金黄色葡萄球菌与其它葡萄球菌分开；**糖发酵**在鉴别培养基上进行，通过 pH 指示剂变色并观察产气与否来读取；肠道菌用 **IMViC**；以及**脲酶**和**柠檬酸盐**利用试验。\n\n' +
             '结果用**二歧检索表**组合，实际工作中则是用商品化的多项试验条读出一串数字编码，再对照数据库。\n\n' +
             '诚实的局限：生化鉴定要求该菌**可培养**且表现典型，而且分辨率不如 16S 或全基因组测序——这就是在需要精确性的场合它已在很大程度上被测序取代的原因。',
  followups: [
    { q_en: 'Why must the culture be pure before biochemical testing?',
      q_cn: '为什么生化试验之前培养物必须是纯的？',
      a_en: 'Because the readout is a mixed answer otherwise. If two species are present, one may be catalase-positive and the other negative, and the test simply reports positive — a confident wrong identification.',
      a_cn: '否则读数是混合的答案。如果有两个物种，一个过氧化氢酶阳性另一个阴性，试验只会报阳性——一个自信的错误鉴定。',
      node: '2-1' },
    { q_en: 'Why has sequencing displaced this for many purposes?',
      q_cn: '为什么测序在很多用途上取代了它？',
      a_en: 'Because it does not require culturing, resolves more finely, and gives resistance and virulence genes at the same time. Biochemical tests remain useful where speed and cost matter more than resolution.',
      a_cn: '因为测序不需要培养、分辨率更高，而且同时给出耐药和毒力基因。生化试验在速度和成本比分辨率更重要的场合仍然有用。' }
  ],
  sourceNodes: ['2-1', '2-2']
}

]);
