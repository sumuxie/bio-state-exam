/* =========================================================================
   SHEET 3 — Basic Lab Techniques, questions 1-20.
   Direct answers, short. Questions already answered under S1/S2 are not
   repeated here; their entries carry both sheet refs.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's3-lab-1-calibrate-ph-meter',
  sheets: 'S3 Lab 1', weight: 1,
  stem_en: 'How do you properly calibrate a pH meter?',
  stem_cn: '如何正确校准 pH 计？',
  answer_en: 'Calibration is **not optional** because a glass electrode drifts: the measurement converts a voltage to a pH, and both the slope and the offset of that conversion change with age and use.\n\n' +
             'Procedure: rinse the electrode with distilled water and blot — never wipe, which builds static charge. Calibrate with at least **two buffers that bracket your target pH**, conventionally pH 7 first to set the offset, then pH 4 or pH 10 to set the slope. Rinse between buffers. Then measure your sample.\n\n' +
             'Two conditions people forget. **Temperature**: pH is temperature-dependent, so calibrate at the temperature you will measure at. And **the buffers must be fresh** — an opened standard absorbs CO2 and drifts, so calibrating against a stale buffer transfers that error to every sample.\n\n' +
             'A healthy electrode gives a slope near the theoretical value; a badly degraded slope means the electrode needs cleaning or replacement, not more calibration.',
  answer_cn: '校准**不是可选项**，因为玻璃电极会漂移：测量是把电压换算成 pH，而这个换算的斜率和截距都会随电极老化和使用而变化。\n\n' +
             '步骤：用蒸馏水冲洗电极并吸干——不要擦拭，擦拭会产生静电。用至少**两种把目标 pH 夹在中间的缓冲液**校准，惯例是先用 pH 7 确定截距，再用 pH 4 或 pH 10 确定斜率。缓冲液之间要冲洗。然后再测样品。\n\n' +
             '两个常被忘记的条件。**温度**：pH 与温度有关，所以要在实际测量的温度下校准。以及**缓冲液必须新鲜**——开封过的标准液会吸收二氧化碳而漂移，用陈旧缓冲液校准，会把这个误差传给之后每一个样品。\n\n' +
             '健康的电极斜率接近理论值；斜率严重退化说明电极需要清洗或更换，而不是再校一次。',
  followups: [
    { q_en: 'Why two buffers rather than one?',
      q_cn: '为什么要用两种缓冲液而不是一种？',
      a_en: 'One point fixes only the offset. Two points fix offset and slope, and the slope is what degrades as an electrode ages — so a single-point calibration hides exactly the failure you need to detect.',
      a_cn: '一个点只能确定截距。两个点才能同时确定截距和斜率，而斜率正是电极老化时退化的那个量——所以单点校准恰好掩盖了你最需要发现的失效。' },
    { q_en: 'Why blot rather than wipe the electrode?',
      q_cn: '为什么电极要吸干而不是擦干？',
      a_en: 'Wiping builds a static charge on the glass bulb, which produces a drifting, unstable reading. Blotting removes the droplet without charging the surface.',
      a_cn: '擦拭会在玻璃球泡上积累静电，导致读数漂移不稳。吸干能去掉水珠而不使表面带电。' }
  ],
  sourceNodes: ['1-4', '1-2']
},

{
  id: 's3-lab-2-acidic-vs-basic-buffers',
  sheets: 'S3 Lab 2', weight: 1,
  stem_en: 'What are the differences between acidic and basic buffers?',
  stem_cn: '酸性缓冲液与碱性缓冲液的区别是什么？',
  answer_en: 'The mechanism is identical; what differs is **which pKa you picked**.\n\n' +
             'An **acidic buffer** is a weak acid plus its conjugate base and buffers below pH 7 — acetate (pKa ~4.8) or citrate. A **basic buffer** is a weak base plus its conjugate acid and buffers above pH 7 — Tris (pKa ~8.1) or carbonate.\n\n' +
             'Both obey Henderson-Hasselbalch and both buffer best **within about one pH unit of their pKa**, so the real answer to "which do I use" is: choose the buffer whose pKa is nearest your working pH.\n\n' +
             'Two practical differences worth adding. **Tris is strongly temperature-dependent**, so a Tris buffer adjusted at room temperature is at a different pH in the cold room. And **phosphate precipitates with divalent cations** such as calcium and magnesium, so it is the wrong choice for a reaction that needs them.',
  answer_cn: '机制完全相同，不同的只是**你选了哪个 pKa**。\n\n' +
             '**酸性缓冲液**是弱酸加其共轭碱，缓冲在 pH 7 以下——醋酸盐（pKa 约 4.8）或柠檬酸盐。**碱性缓冲液**是弱碱加其共轭酸，缓冲在 pH 7 以上——Tris（pKa 约 8.1）或碳酸盐。\n\n' +
             '两者都服从 Henderson-Hasselbalch，也都在**距自身 pKa 约一个 pH 单位以内**缓冲能力最好，所以「该用哪个」的真正答案是：选 pKa 最接近你工作 pH 的那个。\n\n' +
             '还有两点实际差别值得补充。**Tris 强烈依赖温度**，室温下调好的 Tris 缓冲液进冷室后 pH 就不同了。而**磷酸盐会与钙、镁这类二价阳离子沉淀**，所以对需要这些离子的反应它是错误的选择。',
  followups: [
    { q_en: 'You need to work at pH 7.4 — which buffer and why?',
      q_cn: '你要在 pH 7.4 下工作——选哪个缓冲液？为什么？',
      a_en: 'Phosphate or HEPES, because their pKa values sit near 7.2-7.5. Acetate at pKa 4.8 would have essentially no buffering capacity there.',
      a_cn: '磷酸盐或 HEPES，因为它们的 pKa 在 7.2–7.5 附近。醋酸盐 pKa 4.8，在那里基本没有缓冲能力。' },
    { q_en: 'Why is Tris called both a poison and an antidote?',
      q_cn: '为什么说 Tris 既是毒药又是解药？',
      a_en: 'It is the standard buffer for most molecular biology, but its temperature-dependent pKa and its primary amine — which reacts in some chemistries — make it the wrong buffer in specific cases.',
      a_cn: '它是大多数分子生物学实验的标准缓冲液，但它随温度变化的 pKa、以及会参与某些化学反应的伯胺基团，使它在特定情况下反而是错误的选择。' }
  ],
  sourceNodes: ['1-3', '1-2']
},

{
  id: 's3-lab-5-chromatography-principles',
  sheets: 'S3 Lab 5', weight: 1,
  stem_en: 'Explain the principles of chromatography.',
  stem_cn: '解释层析的基本原理。',
  answer_en: '**All chromatography is one idea: a mixture is partitioned between a stationary phase and a mobile phase, and molecules that interact more with the stationary phase move more slowly.** Separation is differential migration, nothing more.\n\n' +
             'In a column, sample is loaded, the mobile phase flows, and each species travels at a rate set by how much time it spends bound versus free. Elution can be **isocratic** (constant conditions) or a **gradient** that progressively weakens the interaction and releases bound species in order.\n\n' +
             'The practical reading is the **chromatogram**, and the habit worth having is to start with the **flow-through**: protein appearing there did not bind at all, which points at the binding conditions rather than at elution. Where the protein ended up diagnoses which step failed.\n\n' +
             'What varies between methods is only **which physical property the stationary phase is chosen to exploit** — charge, hydrophobicity, size, or specific affinity.',
  answer_cn: '**所有层析都是同一个思想：混合物在固定相与流动相之间分配，与固定相作用更强的分子走得更慢。**分离就是迁移速率不同，仅此而已。\n\n' +
             '在柱层析里，上样、流动相流过，每一种组分以它「结合态与自由态时间比」所决定的速率前进。洗脱可以是**等度的**（条件恒定），也可以是**梯度**，逐步削弱相互作用、让结合的组分按顺序释放。\n\n' +
             '实际要读的是**层析图**，而值得养成的习惯是先看**穿透液**：出现在那里的蛋白根本没结合上，问题指向结合条件而不是洗脱条件。蛋白最后停在哪里，就能诊断出哪一步出了问题。\n\n' +
             '不同方法之间变化的只是**固定相被选来利用哪一种物理性质**——电荷、疏水性、大小，或者特异亲和。',
  followups: [
    { q_en: 'Your protein comes out in the flow-through. What went wrong?',
      q_cn: '你的蛋白出现在穿透液里，哪里出了问题？',
      a_en: 'It never bound. Check the binding conditions — wrong pH relative to the protein\'s pI for ion exchange, too much salt, or a tag that is not accessible — rather than adjusting the elution.',
      a_cn: '它根本没结合上。去查结合条件——离子交换时 pH 相对于蛋白 pI 不对、盐太高、或者标签不可及——而不是去调洗脱条件。',
      node: '1-16' },
    { q_en: 'What does a gradient elution buy you over a step elution?',
      q_cn: '梯度洗脱比阶跃洗脱好在哪里？',
      a_en: 'Resolution. Species with similar affinity come off at slightly different points of the gradient and are separated, whereas a step releases everything above that threshold together.',
      a_cn: '分辨率。亲和力相近的组分会在梯度的略微不同位置流出而被分开；阶跃洗脱则把阈值以上的一切一起放出来。' }
  ],
  sourceNodes: ['1-16']
},

{
  id: 's3-lab-6-types-of-chromatography',
  sheets: 'S3 Lab 6', weight: 1,
  stem_en: 'What are the different types of chromatography and their applications?',
  stem_cn: '层析有哪些类型？各自的应用是什么？',
  answer_en: 'Name them by **the property each exploits**, and the applications follow.\n\n' +
             '**Ion exchange** — separates by net charge. You bind at a pH where your protein carries the opposite charge to the resin and elute with a salt gradient. Used early in a purification for bulk separation and concentration.\n\n' +
             '**Hydrophobic interaction** — separates by surface hydrophobicity. Binds in **high** salt and elutes in **low** salt, the opposite of ion exchange, which is why it pairs naturally after an ammonium sulfate precipitation.\n\n' +
             '**Size exclusion (gel filtration)** — separates by size; large molecules cannot enter the pores and elute first. Nothing binds, so it is gentle, but it dilutes the sample. Used as a final polishing step and to assess oligomeric state.\n\n' +
             '**Affinity** — separates by specific biological binding, most commonly a **His-tag on Ni-NTA**, or antibody, or streptavidin-biotin. It is the highest-resolution single step and is normally the capture step.\n\n' +
             '**Reverse phase** — separates by hydrophobicity under organic solvent; excellent resolution but usually denaturing, so it is analytical rather than preparative for proteins.',
  answer_cn: '按**各自利用哪种性质**来命名，应用自然就跟着出来了。\n\n' +
             '**离子交换**——按净电荷分离。在使你的蛋白带与树脂相反电荷的 pH 下结合，用盐梯度洗脱。用在纯化的早期，做大批量分离与浓缩。\n\n' +
             '**疏水相互作用**——按表面疏水性分离。在**高盐**下结合、**低盐**下洗脱，与离子交换正好相反，所以它天然接在硫酸铵沉淀之后。\n\n' +
             '**分子排阻（凝胶过滤）**——按大小分离；大分子进不了孔隙，先流出。没有任何结合，所以很温和，但会稀释样品。用作最后的精修步骤，也用来判断寡聚状态。\n\n' +
             '**亲和层析**——按特异的生物学结合分离，最常见的是 **His 标签配 Ni-NTA**，也可以是抗体或链霉亲和素-生物素。它是单步分辨率最高的方法，通常作为捕获步骤。\n\n' +
             '**反相层析**——在有机溶剂下按疏水性分离；分辨率极好，但通常会变性，所以对蛋白而言是分析性的而非制备性的。',
  followups: [
    { q_en: 'In what order would you combine these steps and why?',
      q_cn: '这些步骤你会按什么顺序组合？为什么？',
      a_en: 'Capture, intermediate, polish: an affinity or ion-exchange step first to concentrate from a large volume, then a step exploiting a different property, and size exclusion last because it dilutes and has limited loading capacity.',
      a_cn: '捕获、中间纯化、精修：先用亲和或离子交换从大体积中浓缩，再用一个利用不同性质的步骤，最后做分子排阻——因为它会稀释样品且上样容量有限。' },
    { q_en: 'Why do HIC and ion exchange pair well in sequence?',
      q_cn: '为什么 HIC 和离子交换前后串联很合适？',
      a_en: 'Their salt requirements are opposite. HIC elutes in low salt, which is exactly the condition ion exchange needs for binding, so no buffer exchange is required between them.',
      a_cn: '它们对盐的要求正好相反。HIC 在低盐下洗脱，而那恰好是离子交换结合所需要的条件，所以两步之间不需要换缓冲液。' }
  ],
  sourceNodes: ['1-16']
},

{
  id: 's3-lab-9-dna-extraction',
  sheets: 'S3 Lab 9', weight: 1,
  stem_en: 'Describe the process of DNA extraction from bacterial cells.',
  stem_cn: '描述从细菌细胞提取 DNA 的过程。',
  answer_en: 'Four steps, and each one is solving a specific problem.\n\n' +
             '**Lyse** the cells — detergent such as SDS dissolves the membrane, often with lysozyme to break peptidoglycan first.\n\n' +
             '**Remove protein and RNA** — proteinase K digests protein, RNase A removes RNA, which otherwise contaminates the prep and inflates any A260 measurement.\n\n' +
             '**Separate DNA from everything else** — either phenol-chloroform, where protein partitions into the organic phase and DNA stays aqueous, or a **silica column**, where DNA binds silica under high chaotropic salt and is washed with ethanol.\n\n' +
             '**Precipitate and resuspend** — ethanol or isopropanol with salt precipitates the DNA, an ethanol wash removes residual salt, and it is resuspended in TE or water.\n\n' +
             'For **plasmid** DNA specifically the classic method is **alkaline lysis**: NaOH and SDS denature everything, then neutralisation lets the small covalently closed plasmid renature and stay soluble while the huge chromosomal DNA tangles and precipitates with the protein.',
  answer_cn: '四步，每一步都在解决一个特定问题。\n\n' +
             '**裂解**细胞——用 SDS 这类去污剂溶解膜，通常先用溶菌酶破坏肽聚糖。\n\n' +
             '**去除蛋白和 RNA**——蛋白酶 K 消化蛋白，RNase A 去除 RNA，否则 RNA 会污染样品并使任何 A260 测量偏高。\n\n' +
             '**把 DNA 与其余成分分开**——或者用酚-氯仿，蛋白进入有机相而 DNA 留在水相；或者用**硅胶柱**，在高浓度离液盐下 DNA 结合硅胶，再用乙醇洗涤。\n\n' +
             '**沉淀并重悬**——加盐后用乙醇或异丙醇沉淀 DNA，乙醇洗去残余盐分，最后重悬于 TE 或水中。\n\n' +
             '专门提取**质粒**时，经典方法是**碱裂解**：NaOH 加 SDS 使一切变性，随后中和时，小而共价闭合的质粒能复性并保持可溶，而巨大的染色体 DNA 缠结起来、与蛋白一起沉淀。',
  followups: [
    { q_en: 'Why does alkaline lysis separate plasmid from chromosomal DNA?',
      q_cn: '碱裂解为什么能把质粒和染色体 DNA 分开？',
      a_en: 'Because the plasmid is small and covalently closed circular, so its two strands stay topologically linked and snap back together on neutralisation. Chromosomal DNA is huge and sheared, so it cannot re-pair and aggregates instead.',
      a_cn: '因为质粒小而且是共价闭合环状，两条链在拓扑上仍然相连，中和时能立刻复原。染色体 DNA 巨大且已被剪切，无法重新配对，于是聚集沉淀。' },
    { q_en: 'Why is RNase added if you only want DNA?',
      q_cn: '既然只要 DNA，为什么还要加 RNase？',
      a_en: 'Because RNA co-purifies with DNA by every method here and absorbs at 260 nm, so without removing it both your gel and your concentration measurement are wrong.',
      a_cn: '因为在这里的每一种方法中 RNA 都会与 DNA 一起被纯化出来，而且它在 260 nm 有吸光，所以不去掉它，你的胶和浓度测定都会是错的。' }
  ]
},

{
  id: 's3-lab-10-quantify-dna-rna',
  sheets: 'S3 Lab 10', weight: 1,
  stem_en: 'How do you quantify DNA and RNA?',
  stem_cn: '如何定量 DNA 和 RNA？',
  answer_en: 'Three methods, in increasing specificity.\n\n' +
             '**Absorbance at 260 nm** — nucleic acid bases absorb there, and Lambert-Beer converts absorbance to concentration. Conventionally an A260 of 1 corresponds to about 50 µg/mL for double-stranded DNA and about 40 for RNA. It is fast and needs no reagent, but it **cannot distinguish DNA from RNA from free nucleotides** — everything with a base absorbs.\n\n' +
             'This is why the **ratios** are reported. **A260/A280** near 1.8 indicates clean DNA and near 2.0 clean RNA; lower means protein contamination. **A260/A230** below about 2 indicates carryover of guanidine, phenol or other chaotropes.\n\n' +
             '**Fluorescent dye assays** — a dye that fluoresces only when bound to double-stranded DNA specifically. Far more specific and more sensitive, and it is the correct choice when RNA contamination or low concentration matters.\n\n' +
             '**Agarose gel** — the qualitative check that the other two cannot give: it shows integrity, whether the sample is degraded or sheared, alongside a rough quantity from band intensity against a known ladder.',
  answer_cn: '三种方法，特异性递增。\n\n' +
             '**260 nm 吸光**——核酸碱基在那里吸收，用 Lambert-Beer 把吸光度换算成浓度。惯例是 A260 为 1 对应双链 DNA 约 50 µg/mL，RNA 约 40。它快、不需要试剂，但**分不清 DNA、RNA 和游离核苷酸**——凡是带碱基的都吸收。\n\n' +
             '这就是为什么要报告**比值**。**A260/A280** 接近 1.8 表示 DNA 干净、接近 2.0 表示 RNA 干净；偏低说明有蛋白污染。**A260/A230** 低于约 2 说明残留了胍、酚或其它离液剂。\n\n' +
             '**荧光染料法**——只有结合到双链 DNA 上才发荧光的染料。特异性和灵敏度都高得多，当 RNA 污染或低浓度成为问题时，它才是正确选择。\n\n' +
             '**琼脂糖凝胶**——前两者给不了的定性检查：它显示完整性，即样品有没有降解或断裂，同时可以对照已知 marker 从条带亮度粗估含量。',
  followups: [
    { q_en: 'Your A260/A280 is 1.6. What does that suggest?',
      q_cn: '你的 A260/A280 是 1.6，说明什么？',
      a_en: 'Protein contamination, since protein absorbs at 280 nm and pulls the ratio down. Re-purify before using the sample in anything sensitive.',
      a_cn: '蛋白污染，因为蛋白在 280 nm 吸收，把比值拉低了。在用于任何敏感实验之前重新纯化。' },
    { q_en: 'Why prefer a fluorescent assay for a sample going into sequencing?',
      q_cn: '要送测序的样品，为什么更应该用荧光法定量？',
      a_en: 'Because library preparation needs an accurate amount of DNA specifically, and A260 counts RNA and free nucleotides as if they were DNA, overestimating what you actually have.',
      a_cn: '因为建库需要的是准确的 DNA 量，而 A260 会把 RNA 和游离核苷酸也算成 DNA，高估你真正拥有的量。' }
  ],
  sourceNodes: ['1-8']
},

{
  id: 's3-lab-13-pipetting-accuracy',
  sheets: 'S3 Lab 13', weight: 1,
  stem_en: 'How do you ensure the accuracy and precision of pipetting?',
  stem_cn: '如何保证移液的准确度与精密度？',
  answer_en: 'Start by separating the two words, because the question names both. **Accuracy is closeness to the true volume; precision is reproducibility between replicates.** A pipette can be precise and consistently wrong.\n\n' +
             '**Accuracy** comes from calibration: check gravimetrically — pipette water onto a balance, where 1 mg equals 1 µL — and service the pipette on a schedule. Use each pipette **in the upper part of its range**, since error is largest at the bottom of the range, so a 100 µL pipette should not be used for 5 µL.\n\n' +
             '**Precision** comes from technique: press to the **first stop** to aspirate and the second only to expel; hold the pipette **vertical** when aspirating; immerse only a few millimetres; aspirate and dispense **slowly and at a constant rate**; **pre-wet the tip** so the film of liquid inside is already established; and keep the temperature constant, since warm air in the barrel expands.\n\n' +
             'For viscous or volatile liquids use **reverse pipetting**, which leaves the residual film behind rather than in your sample.',
  answer_cn: '先把这两个词分开，因为题目两个都提到了。**准确度是与真实体积的接近程度；精密度是重复之间的可重现性。**一支移液器可以很精密，却一直偏。\n\n' +
             '**准确度**靠校准：用称重法核查——把水打到天平上，1 mg 等于 1 µL——并按计划送检维护。每支移液器要用在**量程的上半部分**，因为误差在量程下端最大，所以 100 µL 的移液器不该用来取 5 µL。\n\n' +
             '**精密度**靠操作：吸液压到**第一档**，第二档只用于排液；吸液时**保持竖直**；只浸入几毫米；**缓慢且匀速**地吸和排；**预润湿吸头**，让管内的液膜先建立起来；并保持温度稳定，因为管内空气受热会膨胀。\n\n' +
             '对粘稠或易挥发的液体用**反向移液**，把残留液膜留在吸头里而不是留在你的样品里。',
  followups: [
    { q_en: 'Why does pre-wetting the tip matter?',
      q_cn: '为什么要预润湿吸头？',
      a_en: 'The first aspiration leaves a thin film on the inside of the tip, so the first dispense is short. Pre-wetting establishes that film before the measured volume is taken.',
      a_cn: '第一次吸液会在吸头内壁留下一层液膜，所以第一次排液偏少。预润湿让这层膜在取正式体积之前就已经形成。' },
    { q_en: 'How would you check a pipette without sending it away?',
      q_cn: '不送检的情况下怎么自己核查一支移液器？',
      a_en: 'Gravimetrically: pipette distilled water onto an analytical balance ten times at the volume you use, and compare the mean with the nominal volume for accuracy and the spread for precision.',
      a_cn: '用称重法：在你常用的体积下，把蒸馏水打到分析天平上重复十次，用平均值对比标称体积看准确度，用离散程度看精密度。' }
  ]
},

{
  id: 's3-lab-14-mass-spectrometry',
  sheets: 'S3 Lab 14', weight: 1,
  stem_en: 'Describe the principle and application of mass spectrometry.',
  stem_cn: '描述质谱的原理与应用。',
  answer_en: '**Mass spectrometry measures the mass-to-charge ratio of ions**, and every instrument has the same three parts: an **ion source**, a **mass analyser**, and a **detector**.\n\n' +
             'The sample must be ionised without being destroyed, which is why the two soft ionisation methods matter: **ESI**, which sprays a liquid into charged droplets, and **MALDI**, which embeds the sample in a matrix and fires a laser at it. The analyser then separates ions by m/z — by time of flight, by a quadrupole filter, or by orbital trapping.\n\n' +
             'For proteins the standard workflow is **bottom-up**: digest with trypsin into peptides, separate by liquid chromatography, and run **tandem MS** — select one peptide, fragment it, and read the sequence from the fragment mass differences. Identification is then by matching against a database.\n\n' +
             'Applications: **protein identification**, verifying the mass of a purified product, mapping **post-translational modifications** — the strength here is that MS reports the modification, which sequencing cannot — and quantitative proteomics. Node 4-2 makes the same point from the other side: RNA-Seq lists what was transcribed, MS lists what was actually translated and modified.',
  answer_cn: '**质谱测量的是离子的质荷比**，而每一台仪器都有相同的三个部分：**离子源**、**质量分析器**、**检测器**。\n\n' +
             '样品必须在不被破坏的前提下电离，这正是两种软电离方法重要的原因：**ESI**，把液体喷成带电液滴；**MALDI**，把样品包埋在基质中再用激光打它。分析器随后按 m/z 分离离子——用飞行时间、四极杆滤质器，或轨道阱。\n\n' +
             '对蛋白而言，标准流程是**自下而上**：用胰蛋白酶消化成肽段，用液相色谱分离，再做**串联质谱**——选中一条肽、把它打碎，从碎片的质量差读出序列。之后通过数据库比对完成鉴定。\n\n' +
             '应用：**蛋白鉴定**、核实纯化产物的分子量、绘制**翻译后修饰**——它的强项正在于能报告修饰，而测序做不到——以及定量蛋白质组学。节点 4-2 从另一侧讲了同一件事：RNA-Seq 列出的是被转录的东西，质谱列出的是真正被翻译并被修饰的东西。',
  followups: [
    { q_en: 'Why is trypsin the standard protease for this?',
      q_cn: '为什么胰蛋白酶是这里的标准蛋白酶？',
      a_en: 'It cuts specifically after lysine and arginine, giving peptides of a predictable, convenient length that each carry a positive charge at the C-terminus — which is exactly what the instrument needs.',
      a_cn: '它特异地在赖氨酸和精氨酸之后切割，产生长度可预测且合适的肽段，而且每条肽在 C 端带一个正电荷——这恰恰是仪器所需要的。' },
    { q_en: 'What can MS tell you that sequencing cannot?',
      q_cn: '质谱能告诉你什么是测序做不到的？',
      a_en: 'Post-translational modifications and whether the protein was actually made. A phosphorylated and an unphosphorylated enzyme are the same gene and same transcript but different molecules, and only MS sees that difference.',
      a_cn: '翻译后修饰，以及这个蛋白是否真的被造出来了。磷酸化和未磷酸化的酶是同一个基因、同一份转录本，却是不同的分子，只有质谱能看到这个区别。',
      node: '4-3' }
  ],
  sourceNodes: ['5-1']
},

{
  id: 's3-lab-16-sterilisation',
  sheets: 'S3 Lab 16', weight: 1,
  stem_en: 'How do you sterilize lab equipment?',
  stem_cn: '如何对实验器材灭菌？',
  answer_en: 'Choose the method by **what the material tolerates**, and the standard is always the same: kill **endospores**, which are the most resistant form of life you will meet.\n\n' +
             '**Autoclaving** is the default — saturated steam at **121 °C for 15-20 minutes at 15 psi**. Moist heat denatures proteins far more efficiently than dry heat, and the temperature is set by what it takes to kill spores, not vegetative cells. Used for media, glassware, tips and waste.\n\n' +
             '**Dry heat**, around 160-180 °C for two hours, for glassware and metal that must stay dry, and for anything steam cannot penetrate.\n\n' +
             '**Filter sterilisation**, 0.22 µm, for anything **heat-labile**: antibiotics, enzymes, vitamins, serum. This removes bacteria rather than killing them, and it does not remove viruses or mycoplasma.\n\n' +
             '**Chemical** — 70% ethanol for surfaces, bleach for spills and liquid waste, ethylene oxide or gamma irradiation for pre-packaged plastics.\n\n' +
             'And verify: autoclave tape shows only that it got hot, whereas a **spore-strip biological indicator** shows that it actually sterilised.',
  answer_cn: '按**材料能耐受什么**来选方法，而标准始终一样：杀死**芽孢**，它是你会遇到的最耐受的生命形式。\n\n' +
             '**高压蒸汽灭菌**是默认选择——饱和蒸汽 **121 °C、15–20 分钟、15 psi**。湿热使蛋白变性的效率远高于干热，而这个温度是按杀死芽孢而不是营养细胞来定的。用于培养基、玻璃器皿、吸头和废弃物。\n\n' +
             '**干热灭菌**，约 160–180 °C 两小时，用于必须保持干燥的玻璃和金属，以及蒸汽穿不透的东西。\n\n' +
             '**过滤除菌**，0.22 µm，用于一切**不耐热**的东西：抗生素、酶、维生素、血清。它是把细菌滤掉而不是杀死，而且滤不掉病毒和支原体。\n\n' +
             '**化学法**——70% 乙醇用于表面，漂白剂用于溢漏和液体废物，环氧乙烷或伽马辐照用于预包装塑料制品。\n\n' +
             '还要验证：灭菌胶带只能说明温度到过，而**芽孢生物指示剂**才能说明确实完成了灭菌。',
  followups: [
    { q_en: 'Why 121 °C specifically?',
      q_cn: '为什么偏偏是 121 °C？',
      a_en: 'Because that is what saturated steam reaches at 15 psi, and it is the temperature-time combination that reliably kills bacterial endospores. Vegetative cells die far below it.',
      a_cn: '因为那是饱和蒸汽在 15 psi 下达到的温度，也是能可靠杀死细菌芽孢的温度-时间组合。营养细胞在远低于此的温度就死了。' },
    { q_en: 'Why can antibiotics not be autoclaved?',
      q_cn: '为什么抗生素不能高压灭菌？',
      a_en: 'They are heat-labile and would be destroyed — ampicillin especially, whose beta-lactam ring hydrolyses. They are filter-sterilised and added to medium once it has cooled.',
      a_cn: '它们不耐热、会被破坏——尤其是氨苄西林，它的 β-内酰胺环会水解。要过滤除菌，等培养基冷却后再加入。' }
  ]
},

{
  id: 's3-lab-17-centrifuge',
  sheets: 'S3 Lab 17', weight: 1,
  stem_en: 'What is the role of a centrifuge in laboratory experiments?',
  stem_cn: '离心机在实验中的作用是什么？',
  answer_en: '**A centrifuge separates components of a mixture by applying a force far greater than gravity**, so particles sediment at rates set by their size, shape and density, and by the density of the medium.\n\n' +
             'The commonest use is **differential centrifugation**: spin at low force to pellet the largest things, keep the supernatant, spin harder to pellet the next size down. This is how you go from a lysate to a cleared lysate, or fractionate organelles — nuclei, then mitochondria, then microsomes.\n\n' +
             '**Density-gradient centrifugation** separates by buoyant density rather than size: the sample moves through a gradient until it reaches the point where its own density matches, so it separates things a differential spin cannot.\n\n' +
             'Routine uses: harvesting cells from culture, clearing debris after lysis, pelleting precipitated protein or nucleic acid, and concentrating samples in a spin filter.\n\n' +
             'Two practical points worth saying: always **balance opposing tubes**, and report **× g rather than rpm**, since the same rpm in a different rotor gives a different force.',
  answer_cn: '**离心机通过施加远大于重力的力来分离混合物中的组分**，粒子的沉降速率由它的大小、形状、密度以及介质密度决定。\n\n' +
             '最常见的用法是**差速离心**：先用低离心力把最大的东西沉下去，保留上清，再加大离心力沉下一个尺寸级别的东西。从裂解液得到澄清裂解液，或者分级分离细胞器——先核、再线粒体、再微粒体——都是这么做的。\n\n' +
             '**密度梯度离心**按浮力密度而不是大小分离：样品在梯度中移动，直到到达自身密度与介质相等的位置，因此能分开差速离心分不开的东西。\n\n' +
             '常规用途：从培养物中收集细胞、裂解后去除碎片、沉淀析出的蛋白或核酸、以及用超滤管浓缩样品。\n\n' +
             '有两点实用的要说：一定要**对称配平**，以及报告 **× g 而不是 rpm**，因为同样的 rpm 换个转子力就不同。',
  followups: [
    { q_en: 'Difference between differential and density-gradient centrifugation?',
      q_cn: '差速离心和密度梯度离心的区别？',
      a_en: 'Differential separates by sedimentation rate, mostly size, using successive spins. Density-gradient separates by buoyant density, with each species stopping where the medium matches its own density.',
      a_cn: '差速离心按沉降速率（主要是大小）分离，靠连续几次离心完成。密度梯度离心按浮力密度分离，每种组分停在介质密度与自身相等的位置。' },
    { q_en: 'Why must tubes be balanced?',
      q_cn: '为什么必须配平？',
      a_en: 'An unbalanced rotor at high speed generates enormous vibration and can destroy the rotor and the instrument. It is a safety requirement, not a nicety.',
      a_cn: '高速下不平衡的转子会产生巨大振动，可能毁掉转子和整台仪器。这是安全要求，不是讲究。' }
  ]
},

{
  id: 's3-lab-19-micropipettes',
  sheets: 'S3 Lab 19', weight: 1,
  stem_en: 'What are the different types of micropipettes and their uses?',
  stem_cn: '微量移液器有哪些类型？各自的用途是什么？',
  answer_en: 'Classify by **mechanism** first, then by format.\n\n' +
             '**Air-displacement** is the standard: a cushion of air sits between the piston and the liquid. Accurate for aqueous solutions, but the air cushion expands and contracts, so it is unreliable for **volatile, viscous or dense** liquids.\n\n' +
             '**Positive-displacement** has the piston in direct contact with the liquid in a disposable capillary. Used exactly where air-displacement fails — organic solvents, glycerol, and to avoid aerosol carryover in PCR.\n\n' +
             'By format: **single-channel** for general work, **multichannel** (8 or 12) for plate work where speed and consistency across a row matter, **repeating** pipettes for dispensing the same aliquot many times, and **electronic** ones for reproducible dispensing and reverse-pipetting modes.\n\n' +
             'The rule that matters most in practice: pick the pipette whose range **best fits the volume**, and use it in the upper part of that range — a 200 µL pipette set to 3 µL is where the error lives.',
  answer_cn: '先按**机制**分类，再按形式分类。\n\n' +
             '**空气置换式**是标准型：活塞与液体之间隔着一段空气柱。对水溶液准确，但空气柱会热胀冷缩，所以对**易挥发、粘稠或高密度**的液体不可靠。\n\n' +
             '**正向置换式**的活塞在一次性毛细管内与液体直接接触。正好用在空气置换失效的场合——有机溶剂、甘油，以及在 PCR 中避免气溶胶交叉污染。\n\n' +
             '按形式分：**单道**用于常规操作，**多道**（8 或 12 道）用于板操作，那里速度和整行一致性很重要，**连续分液器**用于多次分装相同体积，**电动**型用于可重复的分液和反向移液模式。\n\n' +
             '实践中最要紧的一条规则：选量程**最贴合目标体积**的那支，并且用在量程的上半部分——把 200 µL 的移液器调到 3 µL，误差就是从那里来的。',
  followups: [
    { q_en: 'When is positive displacement required?',
      q_cn: '什么时候必须用正向置换？',
      a_en: 'For volatile solvents, viscous liquids like glycerol, and dense liquids, because the air cushion in a standard pipette expands or is dragged by the liquid and the delivered volume is wrong.',
      a_cn: '易挥发溶剂、甘油这类粘稠液体，以及高密度液体，因为标准移液器里的空气柱会膨胀或被液体拖动，导致排出体积不对。' },
    { q_en: 'Why not just use one large pipette for everything?',
      q_cn: '为什么不干脆用一支大量程移液器做所有事？',
      a_en: 'Because relative error rises sharply at the bottom of a pipette\'s range. Using a 200 µL pipette for 3 µL can be off by a large percentage, while a 10 µL pipette handles it accurately.',
      a_cn: '因为在量程下端相对误差急剧上升。用 200 µL 的移液器取 3 µL 可能偏差很大百分比，而 10 µL 的移液器能准确完成。' }
  ]
},

{
  id: 's3-lab-20-immunoassays',
  sheets: 'S3 Lab 20', weight: 1,
  stem_en: 'Describe the principle of immunoassays.',
  stem_cn: '描述免疫分析的原理。',
  answer_en: '**An immunoassay uses the specific binding of an antibody to its antigen to detect or quantify that antigen in a complex mixture.** The antibody supplies the specificity; a label supplies the signal.\n\n' +
             'The standard format is **ELISA**, and the version worth describing is the **sandwich ELISA**: a capture antibody is immobilised on the plate, the sample is added and the antigen is captured, then a **detection antibody against a different epitope** binds it, and an enzyme conjugate produces a colour proportional to how much antigen was present. Requiring two antibodies against two epitopes is what makes it specific.\n\n' +
             'Quantification is by **standard curve** — a dilution series of known antigen measured alongside the samples, exactly as in node 1-1.\n\n' +
             'Controls decide whether the number means anything: a **blank** with no antigen, and a **no-primary-antibody** control to show the signal really depends on specific binding rather than something sticking to the plate.\n\n' +
             'Other formats are the same idea rearranged: **lateral flow** tests such as a pregnancy or rapid antigen test, and **Western blot**, which is an immunoassay performed after separation by size.',
  answer_cn: '**免疫分析利用抗体与其抗原的特异结合，在复杂混合物中检测或定量该抗原。**抗体提供特异性，标记提供信号。\n\n' +
             '标准形式是 **ELISA**，值得讲的是**夹心 ELISA**：捕获抗体固定在板上，加入样品捕获抗原，然后**针对另一个表位的检测抗体**结合上去，酶偶联物产生与抗原量成正比的颜色。要求两个抗体识别两个表位，正是它特异的原因。\n\n' +
             '定量靠**标准曲线**——一组已知抗原的梯度稀释与样品同时测量，和节点 1-1 里完全一样。\n\n' +
             '对照决定了数字有没有意义：不加抗原的**空白**，以及**不加一抗**的对照，用来证明信号确实来自特异结合，而不是有东西粘在板上。\n\n' +
             '其它形式是同一思想的重新排列：**侧向流**试纸，比如验孕棒或抗原快速检测；以及 **Western blot**，那是在按大小分离之后再做的一次免疫分析。',
  followups: [
    { q_en: 'Why does a sandwich ELISA need two different antibodies?',
      q_cn: '夹心 ELISA 为什么需要两个不同的抗体？',
      a_en: 'Because requiring two independent epitopes to be recognised makes a false positive far less likely — something that cross-reacts with one antibody is unlikely to cross-react with both.',
      a_cn: '因为要求两个独立表位都被识别，大大降低了假阳性——一个与某个抗体交叉反应的东西，不太可能与两个都交叉反应。' },
    { q_en: 'How does a Western blot differ from an ELISA?',
      q_cn: 'Western blot 和 ELISA 有什么不同？',
      a_en: 'A Western blot separates proteins by size first, so it reports both the amount and the molecular weight. An ELISA is faster and more quantitative but tells you nothing about size.',
      a_cn: 'Western blot 先按大小分离蛋白，所以它同时报告含量和分子量。ELISA 更快、定量更好，但完全不告诉你大小。',
      node: '1-7' }
  ],
  sourceNodes: ['1-1', '1-7']
}

]);
