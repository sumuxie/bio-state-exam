/* =========================================================================
   SHEET 1 — all 19 questions, answered directly.

   These are DIRECT entries: `answer_en` / `answer_cn` rather than a spine.
   Most sheet topics have no node in this app, and demanding a spine would
   mean either writing a full 40 k node first or leaving the question blank.
   Where a node DOES exist it is named in `sourceNodes` so the answer stays
   traceable, and the one question that already had a full spine keeps it in
   `questions.js`.

   Answers are sized for the oral: roughly what you would say in 60-90
   seconds, leading with the claim the examiner is listening for.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's1-lab-1-standard-curve',
  sheets: 'S1 Lab 1 · S3 Lab 4',
  weight: 3,
  stem_en: 'How do you determine the concentration of an unknown sample using a standard curve?',
  stem_cn: '如何用标准曲线测定未知样品的浓度？',
  svg: '<svg viewBox="0 0 720 320" role="img" aria-label="Standard curve with the unknown read off the fitted line"> <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"> <line x1="80" y1="260" x2="660" y2="260" stroke-width="2"/> <line x1="80" y1="30"  x2="80"  y2="260" stroke-width="2"/> <text x="46" y="145" font-size="12" text-anchor="middle" transform="rotate(-90 46 145)">signal (e.g. A562)</text> <text x="370" y="292" font-size="12" text-anchor="middle">known concentration &#183; 已知浓度</text>  <line x1="80" y1="250" x2="520" y2="70" stroke-width="2.4"/> <circle cx="140" cy="226" r="4" fill="currentColor" stroke="none"/> <circle cx="215" cy="195" r="4" fill="currentColor" stroke="none"/> <circle cx="290" cy="165" r="4" fill="currentColor" stroke="none"/> <circle cx="370" cy="132" r="4" fill="currentColor" stroke="none"/> <circle cx="450" cy="100" r="4" fill="currentColor" stroke="none"/>  <line x1="80" y1="150" x2="325" y2="150" stroke-dasharray="4 5"/> <line x1="325" y1="150" x2="325" y2="260" stroke-dasharray="4 5"/> <circle cx="325" cy="150" r="5.5" stroke-width="2.4"/> <text x="74" y="154" font-size="11" text-anchor="end" font-weight="600">unknown</text> <text x="325" y="280" font-size="11" text-anchor="middle" font-weight="600">read off here</text>  <line x1="520" y1="70" x2="640" y2="52" stroke-dasharray="3 4" class="dim"/> <text x="600" y="40" font-size="10" text-anchor="middle" class="dim">do NOT extrapolate</text> <text x="600" y="53" font-size="10" text-anchor="middle" class="dim">不要外推</text> <line x1="520" y1="62" x2="520" y2="260" stroke-dasharray="2 4" class="dim"/> <text x="520" y="276" font-size="10" text-anchor="middle" class="dim">highest standard</text>  <text x="370" y="314" font-size="10" text-anchor="middle" class="dim">The unknown must fall INSIDE the range of the standards &#183; 未知样品必须落在标准品范围之内</text> </g> </svg>',
  svg_caption: { en: 'The substitution the method rests on: an unknown giving the same signal as a known is assumed to hold the same concentration. Two constraints follow — the unknown must fall inside the range of the standards, because extrapolation assumes a relationship you never measured, and the standards must be treated identically to the samples, because the curve calibrates the whole procedure rather than the instrument.', cn: '这个方法所依赖的替换：给出与已知样品相同信号的未知样品，被假定含有相同浓度。由此得出两条约束——未知样品必须落在标准品范围之内，因为外推等于假定了一个你从未测量过的关系；标准品必须与样品完全同等对待，因为这条曲线校准的是整个流程，而不是仪器。' },
  answer_en: 'A standard curve does not measure concentration — it measures signal and then makes a **substitution**: an unknown that gives the same signal as a known is assumed to hold the same concentration.\n\n' +
             'Four steps. Prepare a dilution series of a standard of known concentration. Measure all of them, and the unknown, **under identical conditions**. Plot signal against concentration and fit a line through the linear region. Read the unknown off that line.\n\n' +
             'Two constraints carry all the failure modes. The unknown **must fall inside the range of the standards**, because extrapolating assumes a relationship you never measured. And the standards must be treated **exactly** like the samples — same buffer, same incubation, same instrument — because the curve calibrates the whole procedure, not just the machine.',
  answer_cn: '标准曲线并不测量浓度——它测量的是信号，然后做一次**替换**：假定一个与已知样品给出相同信号的未知样品，含有相同的浓度。\n\n' +
             '四步。配一组已知浓度的梯度稀释标准品。在**完全相同的条件下**测量全部标准品和未知样品。以信号对浓度作图，在线性区拟合直线。从直线上读出未知样品。\n\n' +
             '所有失效模式都来自两条约束。未知样品**必须落在标准品的范围之内**，因为外推等于假定了一个你从未测量过的关系。标准品必须与样品**完全**同等对待——同样的缓冲液、同样的孵育、同样的仪器——因为这条曲线校准的是整个流程，而不只是那台机器。',
  followups: [
    { q_en: 'Your reading is above the highest standard. What do you do?',
      q_cn: '读数高于最高标准品，怎么办？',
      a_en: 'Dilute the sample and re-measure. Never extrapolate — beyond the standards you have no evidence the relationship is still linear, and detectors usually saturate exactly there.',
      a_cn: '把样品稀释后重测。绝不外推——超出标准品范围你没有任何证据表明关系仍然是线性的，而且检测器通常恰好在那里饱和。' },
    { q_en: 'Why must the blank contain buffer rather than water?',
      q_cn: '为什么空白要用缓冲液而不是水？',
      a_en: 'Because the blank defines zero for everything except the analyte. If the buffer itself absorbs and the blank is water, that absorbance is silently added to every sample.',
      a_cn: '因为空白定义的是「除待测物之外的一切」的零点。如果缓冲液本身有吸光而空白用的是水，那份吸光会被悄悄加到每一个样品上。' }
  ],
  sourceNodes: ['1-1']
},

{
  id: 's1-lab-2-chemical-safety',
  sheets: 'S1 Lab 2 · S3 Lab 15',
  weight: 3,
  stem_en: 'What are the safety precautions when handling hazardous chemicals in the lab?',
  stem_cn: '实验室处理危险化学品时有哪些安全防护措施？',
  answer_en: 'Answer in the order of the **hierarchy of controls**, because that is the reasoning rather than a list.\n\n' +
             'First, **elimination or substitution** — use the less hazardous reagent if one exists, for example SYBR-type stains instead of ethidium bromide.\n\n' +
             'Second, **engineering controls** — a fume hood for volatiles, shielding for radioactivity, secondary containment. These protect you without depending on your behaviour.\n\n' +
             'Third, **administrative controls** — read the safety data sheet before opening the bottle, label everything, never work alone with the worst hazards, and know where the eyewash, shower and spill kit are before you need them.\n\n' +
             'Last, **personal protective equipment** — coat, gloves chosen for that specific chemical, goggles. PPE is last because it fails silently and only protects one person.\n\n' +
             'Then add disposal: hazardous waste is segregated and never poured down the sink.',
  answer_cn: '按**控制措施层级**的顺序回答，因为那是背后的推理，而不是一张清单。\n\n' +
             '第一，**消除或替代**——有更安全的试剂就用它，比如用 SYBR 类染料代替溴化乙锭。\n\n' +
             '第二，**工程控制**——挥发性物质用通风橱，放射性用屏蔽，加二次containment。这类措施保护你，而且不依赖你的行为。\n\n' +
             '第三，**管理控制**——开瓶之前先读安全数据表，所有东西都贴标签，处理最危险的物质时绝不独自工作，并且在需要之前就知道洗眼器、淋浴和溢漏处理包在哪。\n\n' +
             '最后才是**个人防护装备**——实验服、针对该化学品选的手套、护目镜。PPE 排在最后，是因为它会无声地失效，而且只保护一个人。\n\n' +
             '再补上废弃处置：危险废物要分类收集，绝不倒进下水道。',
  followups: [
    { q_en: 'Why is PPE last rather than first?',
      q_cn: '为什么 PPE 排在最后而不是最前？',
      a_en: 'Because it protects only the wearer, depends on being used correctly every single time, and fails without warning — a pinhole in a glove gives no signal. A fume hood protects everyone in the room whether or not they remembered.',
      a_cn: '因为它只保护穿戴者，依赖每一次都正确使用，而且失效时没有任何提示——手套上一个针孔不会给你任何信号。通风橱则保护房间里的所有人，无论他们有没有想起来。' },
    { q_en: 'You spill a small amount of an unknown reagent. First action?',
      q_cn: '洒了少量不明试剂，第一步做什么？',
      a_en: 'Alert the people around you and restrict access, before any cleanup. Identify the substance from the label or SDS, then follow that spill procedure — cleaning first and identifying afterwards is how a small spill becomes an exposure.',
      a_cn: '在做任何清理之前，先提醒周围的人并限制人员进入。通过标签或安全数据表确认是什么，再按对应的溢漏程序处理——先清理后确认，正是小溢漏变成暴露事故的方式。' }
  ]
},

{
  id: 's1-lab-4-rf-cloning-primers',
  sheets: 'S1 Lab 4',
  weight: 3,
  stem_en: 'Design primer for restriction free cloning for amplification of the following gene.',
  stem_cn: '为限制酶非依赖（RF）克隆设计引物，用于扩增给定基因。',
  answer_en: '**Answer the principle; do not design primers against the printed bases.** The sequence on the sheet is a photo transcription and translates with seven internal stop codons in frame +0, so bases have been misread. Designing against them produces a confident, wrong answer.\n\n' +
             'The principle: RF cloning uses **one pair of hybrid primers**, each with two parts. The 3-prime half anneals to your gene and does the amplifying. The 5-prime half is a tail matching the destination plasmid **at the insertion point**. The PCR product is therefore your gene flanked by vector-homologous ends — a **megaprimer**. In a second reaction that megaprimer anneals to the plasmid and is extended right around it, and the parental methylated plasmid is removed with **DpnI**.\n\n' +
             'Two design constraints for this construct. The **stop codon must be removed**, or nothing downstream is translated. And the insertion must stay **in frame** with the alpha-mating-factor prepro secretion leader that precedes the insertion point — that leader is what sends the product out of the cell, so a frameshift there loses both the tag and the secretion.',
  answer_cn: '**回答原理，不要对着卷面上的碱基去设计引物。**卷上那段序列是照片转录的，在 +0 阅读框里翻译出七个内部终止密码子，说明有碱基读错了。对着它设计只会给出一个自信但错误的答案。\n\n' +
             '原理：RF 克隆用**一对杂合引物**，每条分两段。3\' 端那一半与你的基因退火，负责扩增。5\' 端那一半是与目标质粒**插入位点**匹配的尾巴。于是 PCR 产物就是两端带有载体同源序列的目的基因——一条**megaprimer**。第二步反应里，这条 megaprimer 与质粒退火并沿整个质粒延伸，随后用 **DpnI** 消化掉带甲基化的亲本质粒。\n\n' +
             '这个构建的两条设计约束。**必须去掉终止密码子**，否则下游什么都翻译不出来。插入必须与插入位点前面的 α-mating factor prepro 分泌前导序列**保持同一阅读框**——正是那段前导把产物送出细胞，所以在那里移码会同时丢掉标签和分泌。',
  followups: [
    { q_en: 'What does DpnI actually do here?',
      q_cn: 'DpnI 在这里到底起什么作用？',
      a_en: 'It cuts methylated DNA only. The parental plasmid came from a dam-positive E. coli and is methylated; the newly synthesised product is not. So DpnI destroys the template and leaves your construct.',
      a_cn: '它只切甲基化的 DNA。亲本质粒来自 dam 阳性的大肠杆菌、带甲基化；新合成的产物没有。所以 DpnI 摧毁模板，留下你的构建。' },
    { q_en: 'Why is this called restriction-free?',
      q_cn: '为什么叫「限制酶非依赖」？',
      a_en: 'Because no restriction enzyme ever touches the insert and no ligase is used. The junction is made by homology and polymerase extension, so the insert needs no compatible sites and leaves no scar.',
      a_cn: '因为没有任何限制酶接触过插入片段，也没有用连接酶。接口是靠同源序列和聚合酶延伸形成的，所以插入片段不需要有兼容的酶切位点，也不会留下疤痕序列。' }
  ],
  gaps: ['The printed sequence is UNVERIFIED (7 internal stops in frame +0) and no primer should be ' +
         'designed against it until the digital original is obtained. Only the left flank is ' +
         'confirmed: it is the S. cerevisiae alpha-factor prepro secretion signal.']
},

{
  id: 's1-lab-6-tagging-surface-receptor',
  sheets: 'S1 Lab 6',
  weight: 3,
  stem_en: 'Imagine a situation when you need to tag a protein receptor located on the surface of cell. What you need to do? Describe the strategy of gene modification.',
  stem_cn: '假设你需要给一个位于细胞表面的受体蛋白加标签。你需要做什么？描述基因改造的策略。',
  answer_en: 'The whole answer is **topology**: a surface receptor is not one compartment but three — an extracellular domain, a transmembrane segment, and a cytoplasmic tail — and where you put the tag decides whether it works.\n\n' +
             'First decide **which side you want to detect**. A tag on the extracellular domain can be labelled on intact, living cells, which is what you want for surface staining, flow cytometry or pull-down of the receptor from outside. A tag on the cytoplasmic tail needs the cell permeabilised or lysed.\n\n' +
             'Then the constraints. The receptor is made with an **N-terminal signal peptide** that is cleaved off during translocation, so an N-terminal tag placed before it would be cut away — the tag must go **after** the signal peptide, or on the C-terminus. Avoid the ligand-binding site and the transmembrane segment. Add a short flexible **linker** so the tag does not disturb folding.\n\n' +
             'Practically: build the construct by inserting the tag sequence in frame at the chosen position, verify by sequencing, express, and confirm the receptor still reaches the surface and still binds ligand — because a tag that abolishes trafficking or function has answered a different question.',
  answer_cn: '整道题的核心是**拓扑结构**：一个表面受体不是一个区室而是三个——胞外结构域、跨膜段、胞内尾巴——而标签放在哪里决定它能不能用。\n\n' +
             '先决定**你想检测哪一侧**。放在胞外结构域上的标签可以在完整的活细胞上标记，这正是表面染色、流式细胞术、或者从细胞外把受体拉下来所需要的。放在胞内尾巴上的标签则需要透化或裂解细胞。\n\n' +
             '然后是约束条件。受体合成时带一段 **N 端信号肽**，在转运过程中会被切掉，所以放在它前面的 N 端标签会被一起切走——标签必须放在信号肽**之后**，或者放在 C 端。避开配体结合位点和跨膜段。加一段短的柔性 **linker**，让标签不干扰折叠。\n\n' +
             '实际操作：把标签序列按同一阅读框插入选定位置构建质粒，测序验证，表达，然后确认受体仍然能到达细胞表面、仍然能结合配体——因为一个破坏了运输或功能的标签，回答的是另一个问题。',
  followups: [
    { q_en: 'Why can a tag not simply go at the very N-terminus?',
      q_cn: '为什么标签不能干脆放在最 N 端？',
      a_en: 'Because the signal peptide is at the N-terminus and is cleaved off after it has done its job of directing the protein into the secretory pathway. A tag in front of the cleavage site leaves with it.',
      a_cn: '因为信号肽就在 N 端，它把蛋白导入分泌途径之后就被切掉了。放在切割位点前面的标签会跟着一起被切走。' },
    { q_en: 'How would you confirm the tag is really on the outside?',
      q_cn: '你怎么确认标签真的在外侧？',
      a_en: 'Stain intact, non-permeabilised cells with an antibody against the tag and compare with permeabilised cells. Signal without permeabilisation means the epitope is extracellular.',
      a_cn: '用抗标签的抗体染完整、未透化的细胞，再和透化后的细胞比较。不透化就有信号，说明表位在胞外。' }
  ]
},

{
  id: 's1-micro-2-sars-lineage',
  sheets: 'S1 Micro 2 · S2 Micro 17',
  weight: 3,
  stem_en: 'Imagine you have a sample of the SARS-CoV-2 virus. How would you determine its lineage? Briefly describe the steps involved.',
  stem_cn: '假设你有一份 SARS-CoV-2 病毒样品。你会如何确定它的谱系？简述涉及的步骤。',
  answer_en: '**Lineage is defined by sequence, so the answer is a sequencing workflow.**\n\n' +
             'Extract RNA from the sample. Because the genome is RNA, **reverse-transcribe it to cDNA** — nothing downstream reads RNA directly.\n\n' +
             'Amplify. The standard approach is **tiled multiplex PCR**: a panel of overlapping primer pairs covering the whole ~30 kb genome, so you get the complete sequence rather than one gene.\n\n' +
             'Sequence the amplicons by next-generation sequencing, then **assemble the reads against the reference genome** to produce a consensus sequence for this isolate.\n\n' +
             'Finally, **compare that consensus with the reference and assign the lineage** from the pattern of mutations, using a standard nomenclature such as Pango, typically via an automated classifier. Lineage assignment is a phylogenetic placement, not a single diagnostic marker.\n\n' +
             'A diagnostic **RT-qPCR only tells you the virus is present** and roughly how much — it cannot give a lineage, because it interrogates a couple of short fixed regions rather than the genome.',
  answer_cn: '**谱系是由序列定义的，所以答案是一套测序流程。**\n\n' +
             '从样品中提取 RNA。因为基因组是 RNA，必须先**逆转录成 cDNA**——下游没有任何步骤能直接读 RNA。\n\n' +
             '扩增。标准做法是**平铺式多重 PCR**：用一组相互重叠的引物对覆盖整个约 30 kb 的基因组，这样得到的是完整序列而不是某一个基因。\n\n' +
             '用二代测序对扩增子测序，然后**把读长比对到参考基因组上组装**，得到这一分离株的一致序列。\n\n' +
             '最后，**把这条一致序列与参考序列比较，根据突变模式判定谱系**，使用 Pango 这类标准命名体系，通常通过自动分类工具完成。谱系判定是一次系统发育定位，不是靠单个诊断标记。\n\n' +
             '诊断用的 **RT-qPCR 只能告诉你病毒在不在**、大概有多少——它给不出谱系，因为它只探测两三个很短的固定区域，而不是整个基因组。',
  followups: [
    { q_en: 'Why tiled amplicons instead of just sequencing the RNA directly?',
      q_cn: '为什么用平铺扩增子，而不直接测 RNA？',
      a_en: 'Because a clinical sample is overwhelmingly host RNA. Targeted amplification enriches the viral genome so the reads you pay for are actually viral, and it works at low viral load where direct sequencing would return almost nothing.',
      a_cn: '因为临床样品里绝大部分是宿主 RNA。靶向扩增把病毒基因组富集出来，使你花钱测的读长真的是病毒的；而且在低病毒载量下它仍然有效，直接测序在那种情况下几乎什么都拿不到。' },
    { q_en: 'What limits this if the sample has very low viral load?',
      q_cn: '如果样品病毒载量很低，什么会成为限制？',
      a_en: 'Amplicon dropout: some regions fail to amplify, leaving gaps in the consensus. Those gaps are reported as ambiguous bases, and if they fall on lineage-defining sites the assignment becomes uncertain rather than wrong.',
      a_cn: '扩增子缺失：某些区域扩不出来，一致序列上就留下空缺。这些空缺会被记为模糊碱基；如果它们恰好落在决定谱系的位点上，判定就会变成不确定，而不是错误。' }
  ],
  sourceNodes: ['4-1']
},

{
  id: 's1-micro-3-antibiotic-mechanisms',
  sheets: 'S1 Micro 3',
  weight: 3,
  stem_en: 'What is the mechanisms of action of ampicilin, kanamycin, and ciprofloxacin?',
  stem_cn: 'ampicillin、kanamycin 和 ciprofloxacin 的作用机制分别是什么？',
  answer_en: 'Three different targets, which is why they are a useful set.\n\n' +
             '**Ampicillin** is a beta-lactam. It inhibits the transpeptidases (penicillin-binding proteins) that cross-link peptidoglycan, so the cell wall cannot be completed. It is **bactericidal but only against growing cells**, because it blocks synthesis of new wall rather than damaging existing wall. Resistance is usually **beta-lactamase**, which hydrolyses the beta-lactam ring.\n\n' +
             '**Kanamycin** is an aminoglycoside. It binds the **30S ribosomal subunit**, causing misreading and blocking translation; bactericidal. Resistance is typically an enzyme that chemically modifies the drug — phosphorylation or acetylation — so it no longer binds.\n\n' +
             '**Ciprofloxacin** is a fluoroquinolone. It inhibits **DNA gyrase and topoisomerase IV**, the enzymes that manage DNA supercoiling during replication, trapping them on DNA and producing double-strand breaks; bactericidal. Resistance is usually a **point mutation in the target enzyme**, plus efflux.\n\n' +
             'Note the pattern: wall, ribosome, DNA — and the resistance mechanism differs accordingly, destroy the drug, modify the drug, or change the target.',
  answer_cn: '三个不同的靶点，这也正是它们常被放在一起考的原因。\n\n' +
             '**Ampicillin** 是 β-内酰胺类。它抑制交联肽聚糖的转肽酶（青霉素结合蛋白），使细胞壁无法完成。它是**杀菌的，但只对正在生长的细胞有效**，因为它阻断的是新壁的合成，而不是破坏已有的壁。耐药机制通常是 **β-内酰胺酶**，水解 β-内酰胺环。\n\n' +
             '**Kanamycin** 是氨基糖苷类。它结合**核糖体 30S 亚基**，导致读码错误并阻断翻译；杀菌。耐药通常是某种酶对药物进行化学修饰——磷酸化或乙酰化——使它不再结合。\n\n' +
             '**Ciprofloxacin** 是氟喹诺酮类。它抑制 **DNA 旋转酶和拓扑异构酶 IV**，即复制过程中管理 DNA 超螺旋的那两个酶，把它们困在 DNA 上并产生双链断裂；杀菌。耐药通常是**靶酶上的点突变**，再加上外排。\n\n' +
             '注意这个模式：细胞壁、核糖体、DNA——而耐药机制也相应不同：毁掉药物、修饰药物、或者改变靶点。',
  followups: [
    { q_en: 'Why does ampicillin only kill growing cells?',
      q_cn: '为什么 ampicillin 只杀正在生长的细胞？',
      a_en: 'Because it blocks the cross-linking of new peptidoglycan. A cell that is not building wall is not doing the thing the drug inhibits, so it survives until it starts growing again.',
      a_cn: '因为它阻断的是新肽聚糖的交联。一个没有在造壁的细胞，并没有在做这个药所抑制的那件事，所以它能活到重新开始生长为止。' },
    { q_en: 'Which of the three would you expect to be least useful against a Gram-negative?',
      q_cn: '这三个里，你预期哪一个对革兰氏阴性菌最不好用？',
      a_en: 'Plain ampicillin, because the outer membrane of a Gram-negative is an extra permeability barrier and also concentrates beta-lactamase in the periplasm, right where the drug has to act.',
      a_cn: '单纯的 ampicillin，因为革兰氏阴性菌的外膜是一层额外的通透屏障，而且它还把 β-内酰胺酶富集在周质里——正好是药物必须发挥作用的地方。' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's1-micro-4-identify-bacteria-sequencing',
  sheets: 'S1 Micro 4',
  weight: 3,
  stem_en: 'How do you identify bacteria using sequencing?',
  stem_cn: '如何用测序鉴定细菌？',
  answer_en: 'The standard route is **16S rRNA gene sequencing**, and the reason it works is the reason to lead with.\n\n' +
             'The 16S ribosomal RNA gene is present in **every bacterium**, it is essential so it cannot be lost, and it contains **alternating conserved and variable regions**. The conserved regions let one pair of universal primers amplify it from an unknown organism; the variable regions carry the species-level signal.\n\n' +
             'So: extract DNA, amplify 16S with universal primers, sequence the amplicon, and **compare the sequence against a reference database** to find its closest match.\n\n' +
             'The decisive advantage is that this **does not require culturing** the organism, which matters because most environmental bacteria have never been grown in a laboratory.\n\n' +
             'Limits worth stating: 16S often resolves only to genus, since closely related species can be nearly identical there. For species or strain resolution you sequence more — multi-locus typing, or **whole-genome sequencing**, which is now the reference method and also reports resistance and virulence genes.',
  answer_cn: '标准路线是 **16S rRNA 基因测序**，而它为什么可行，正是应该先讲的那一点。\n\n' +
             '16S 核糖体 RNA 基因**每一种细菌都有**，它是必需基因所以不会丢失，而且它由**保守区和可变区交替**构成。保守区使得一对通用引物就能从未知菌里把它扩增出来；可变区携带种水平的信号。\n\n' +
             '所以流程是：提取 DNA，用通用引物扩增 16S，对扩增子测序，再**把序列与参考数据库比对**，找出最接近的匹配。\n\n' +
             '决定性的优势是这**不需要培养**该菌，这很重要，因为大多数环境细菌从未在实验室里被培养出来过。\n\n' +
             '值得说明的局限：16S 常常只能分辨到属，因为亲缘很近的种在这一段上可能几乎相同。要分辨到种或菌株，就要测更多——多位点分型，或者**全基因组测序**；后者现在是参考方法，而且还能同时报告耐药基因和毒力基因。',
  followups: [
    { q_en: 'Why 16S rather than any other conserved gene?',
      q_cn: '为什么是 16S，而不是别的保守基因？',
      a_en: 'Because it combines three properties rarely found together: universally present, functionally essential so it cannot be lost or horizontally replaced easily, and mosaic — conserved stretches for priming next to variable stretches for discrimination.',
      a_cn: '因为它同时具备三个很少同时出现的性质：普遍存在；功能必需，所以不容易丢失或被水平替换；而且是镶嵌式的——用于引物结合的保守片段，紧挨着用于区分的可变片段。' },
    { q_en: 'You get a 99% match to two different species. What now?',
      q_cn: '你得到的结果与两个不同的种都是 99% 匹配。接下来怎么办？',
      a_en: 'That is 16S hitting its resolution limit, not an error. Go to a method with more signal: multi-locus sequence typing or whole-genome sequencing, or add a phenotypic test that separates the two.',
      a_cn: '那是 16S 触到了它的分辨极限，不是出错。换一个信息量更大的方法：多位点序列分型或全基因组测序，或者加一个能把这两个种分开的表型试验。' }
  ],
  sourceNodes: ['2-1', '4-1']
},

{
  id: 's1-micro-5-horizontal-gene-transfer',
  sheets: 'S1 Micro 5 · S3 Micro 20',
  weight: 3,
  stem_en: 'What is horizontal gene transfer and its impact on bacterial evolution?',
  stem_cn: '什么是水平基因转移？它对细菌进化有什么影响？',
  answer_en: '**Horizontal gene transfer is the movement of genetic material between organisms other than from parent to offspring** — as opposed to vertical inheritance down a lineage.\n\n' +
             'Three mechanisms. **Transformation**: uptake of free DNA from the environment by a competent cell. **Transduction**: transfer by a bacteriophage that packaged host DNA by mistake. **Conjugation**: direct transfer of a plasmid through a pilus, cell to cell.\n\n' +
             'The impact is that bacterial evolution is **not a tree**. A gene can appear in a distant lineage in one step, so an advantageous trait spreads across species rather than only descending within one. The clearest consequence is **antibiotic resistance**: a resistance gene on a conjugative plasmid can move between species in a patient or a gut, which is why resistance spreads far faster than mutation alone would allow.\n\n' +
             'It also explains why bacterial genomes are mosaic — a **core genome** shared within a species plus an **accessory genome** that differs between strains — and it is the reason a single species can carry pathogenic and harmless strains.',
  answer_cn: '**水平基因转移是遗传物质在生物体之间的转移，而不是从亲代到子代的传递**——与沿谱系向下的垂直遗传相对。\n\n' +
             '三种机制。**转化**：感受态细胞从环境中摄取游离 DNA。**转导**：由噬菌体介导，因为它错误地包装了宿主 DNA。**接合**：通过性菌毛在细胞之间直接转移质粒。\n\n' +
             '它的影响是：细菌进化**不是一棵树**。一个基因可以一步之内出现在一个远缘谱系里，所以有利性状是跨物种扩散的，而不只是在一个谱系内向下传递。最清楚的后果是**抗生素耐药**：接合型质粒上的一个耐药基因可以在病人体内或肠道里跨物种转移，这就是为什么耐药扩散的速度远快于单靠突变所能达到的速度。\n\n' +
             '它还解释了为什么细菌基因组是镶嵌式的——一个种内共享的**核心基因组**，加上菌株之间各不相同的**附属基因组**——这也是同一个种里既有致病菌株又有无害菌株的原因。',
  followups: [
    { q_en: 'Which of the three mechanisms do you exploit every time you clone?',
      q_cn: '你每次做克隆，用到的是这三种机制里的哪一种？',
      a_en: 'Transformation. Making cells competent and pushing plasmid DNA into them is a laboratory-forced version of exactly that natural process.',
      a_cn: '转化。制备感受态细胞、把质粒 DNA 送进去，正是那个天然过程的实验室强化版本。' },
    { q_en: 'Why does HGT make the species concept awkward for bacteria?',
      q_cn: '为什么水平基因转移让「物种」这个概念对细菌变得别扭？',
      a_en: 'Because a species is normally defined by shared ancestry, and HGT lets genes cross those boundaries freely. Two strains called one species can differ in a large fraction of their genes, while sharing a resistance plasmid with an entirely different genus.',
      a_cn: '因为物种通常是按共同祖先来定义的，而水平基因转移让基因可以自由跨越这些边界。被归为同一个种的两个菌株，可能有很大一部分基因不同，却和一个完全不同的属共享同一个耐药质粒。' }
  ]
},

{
  id: 's1-micro-6-transformation-efficiency',
  sheets: 'S1 Micro 6',
  weight: 3,
  stem_en: 'Describe, how you determine the transformation efficiency of plasmid into bacterial or yeast cells?',
  stem_cn: '描述如何测定质粒转化进细菌或酵母细胞的转化效率。',
  answer_en: '**Transformation efficiency is defined as colony-forming units per microgram of DNA**, and every step of the procedure exists to make that ratio measurable.\n\n' +
             'Transform a **known amount** of supercoiled plasmid — usually a control plasmid, a small defined mass such as 100 pg to 1 ng, because too much DNA saturates the cells and gives a falsely low efficiency.\n\n' +
             'Recover the cells, then **plate a known fraction of a known dilution** on selective medium. You cannot count a lawn, so the dilution is chosen to land in the countable range.\n\n' +
             'Count the colonies, then scale back up: divide by the fraction plated and by the micrograms of DNA transformed.\n\n' +
             'The controls decide whether the number means anything. A **no-DNA control** shows the plate is genuinely selective — colonies there mean the antibiotic failed. And **the same competent cells with a known control plasmid** tell you whether a poor result was your DNA or your cells.\n\n' +
             'For yeast the arithmetic is identical; only the transformation chemistry differs, and efficiencies are typically orders of magnitude lower.',
  answer_cn: '**转化效率的定义是每微克 DNA 产生的菌落形成单位数**，整套操作的每一步都是为了让这个比值可测。\n\n' +
             '用**已知量**的超螺旋质粒做转化——通常用对照质粒，取一个很小的确定质量，比如 100 pg 到 1 ng，因为 DNA 加太多会让细胞饱和，反而给出偏低的效率。\n\n' +
             '复苏细胞，然后把**已知稀释度的已知比例**涂在选择性培养基上。菌苔是数不清的，所以稀释度要选到落在可计数范围内。\n\n' +
             '数菌落，再按比例还原：除以所涂的比例，再除以转化所用的微克数。\n\n' +
             '对照决定了这个数字有没有意义。**不加 DNA 的对照**用来证明平板确实有选择性——那上面长出菌落就说明抗生素失效了。而**用同一批感受态细胞加一个已知的对照质粒**，则告诉你结果差是因为你的 DNA 还是你的细胞。\n\n' +
             '酵母的算法完全相同，只是转化的化学过程不同，而且效率通常低几个数量级。',
  followups: [
    { q_en: 'Why use a small, defined amount of DNA rather than plenty of it?',
      q_cn: '为什么用很小的确定量 DNA，而不是多加一些？',
      a_en: 'Because the relationship is only linear at low DNA. Once the cells are saturated, adding more DNA does not add more colonies, so dividing by a larger mass gives an artificially low efficiency.',
      a_cn: '因为只有在低 DNA 量时这个关系才是线性的。细胞一旦饱和，再加 DNA 也不会增加菌落数，于是除以一个更大的质量就得到一个人为偏低的效率。' },
    { q_en: 'Your no-DNA control has colonies. What does that mean?',
      q_cn: '你的不加 DNA 对照长了菌落，这说明什么？',
      a_en: 'The selection failed — degraded antibiotic, wrong concentration, or satellite colonies growing in the shadow of a resistant one. Until that is fixed, no count from that experiment can be trusted.',
      a_cn: '选择失效了——抗生素降解、浓度不对，或者是在耐药菌落的庇护下长出来的卫星菌落。在这一点修好之前，这个实验的任何计数都不可信。' }
  ],
  sourceNodes: ['1-10', '2-1', '1-1']
},

{
  id: 's1-bio-1-proteinogenic-amino-acids',
  sheets: 'S1 Bio 1 · S2 Bio 30',
  weight: 3,
  stem_en: 'List all proteinogenic amino acids and describe one characteristic property of each.',
  stem_cn: '列出全部蛋白原氨基酸，并各说一个特征性质。',
  answer_en: 'There are **20** standard ones. Do not recite them alphabetically — group them, because the grouping is the property.\n\n' +
             '**Nonpolar aliphatic (7)** — Glycine, smallest, no side chain, so it gives backbone flexibility. Alanine, simplest methyl. Valine, Leucine, Isoleucine, branched and strongly hydrophobic, they build cores. Methionine, sulfur-containing but not reactive, and it is the start codon. Proline, side chain loops back to the backbone, so it is rigid and breaks helices.\n\n' +
             '**Aromatic (3)** — Phenylalanine, bulky hydrophobic. Tyrosine, aromatic plus a hydroxyl that can be phosphorylated. Tryptophan, largest, and it dominates absorbance at 280 nm.\n\n' +
             '**Polar uncharged (5)** — Serine and Threonine, hydroxyls, both phosphorylation sites. Cysteine, thiol, forms disulfide bonds. Asparagine and Glutamine, amides; Asn is the N-glycosylation site.\n\n' +
             '**Positively charged (3)** — Lysine, Arginine, both basic and common in binding DNA. Histidine, pKa near 6, so it can gain or lose a proton at physiological pH, which is why it sits in so many active sites.\n\n' +
             '**Negatively charged (2)** — Aspartate and Glutamate, carboxylates, common in catalysis and metal binding.',
  answer_cn: '标准的有 **20** 个。不要按字母顺序背——要分组，因为分组本身就是性质。\n\n' +
             '**非极性脂肪族（7 个）**——甘氨酸，最小，没有侧链，因此提供主链柔性。丙氨酸，最简单的甲基。缬氨酸、亮氨酸、异亮氨酸，支链且强疏水，用来构建疏水核心。甲硫氨酸，含硫但不活泼，而且它是起始密码子。脯氨酸，侧链绕回主链，因此刚性、打断螺旋。\n\n' +
             '**芳香族（3 个）**——苯丙氨酸，大而疏水。酪氨酸，芳香环加一个可被磷酸化的羟基。色氨酸，最大，而且它主导 280 nm 处的吸光。\n\n' +
             '**极性不带电（5 个）**——丝氨酸和苏氨酸，带羟基，都是磷酸化位点。半胱氨酸，巯基，形成二硫键。天冬酰胺和谷氨酰胺，酰胺；其中天冬酰胺是 N-糖基化位点。\n\n' +
             '**正电荷（3 个）**——赖氨酸、精氨酸，都是碱性的，在结合 DNA 时很常见。组氨酸，pKa 接近 6，因此在生理 pH 下可以得质子也可以失质子，这正是它出现在那么多活性位点里的原因。\n\n' +
             '**负电荷（2 个）**——天冬氨酸和谷氨酸，羧酸根，在催化和金属结合中很常见。',
  followups: [
    { q_en: 'Which amino acids give a protein its absorbance at 280 nm?',
      q_cn: '哪些氨基酸给了蛋白在 280 nm 的吸光？',
      a_en: 'Tryptophan mainly, then tyrosine, with a small contribution from cysteine in disulfides. That is why a protein with none of them cannot be quantified by A280.',
      a_cn: '主要是色氨酸，其次是酪氨酸，二硫键中的半胱氨酸有小部分贡献。这就是为什么一个不含这些残基的蛋白无法用 A280 定量。' },
    { q_en: 'Why is histidine so often found in active sites?',
      q_cn: '为什么组氨酸经常出现在活性位点里？',
      a_en: 'Its imidazole side chain has a pKa near physiological pH, so it can act as both an acid and a base within the same catalytic cycle — donating and accepting a proton without the cell changing its pH.',
      a_cn: '它的咪唑侧链 pKa 接近生理 pH，所以它能在同一个催化循环里既当酸又当碱——在细胞不改变 pH 的前提下给出和接受质子。' }
  ]
},

{
  id: 's1-bio-2-glycolysis',
  sheets: 'S1 Bio 2 · S3 Bio 11',
  weight: 3,
  stem_en: 'Explain the process of glycolysis.',
  stem_cn: '解释糖酵解的过程。',
  answer_en: '**Glycolysis converts one glucose into two pyruvate, in the cytosol, without oxygen**, and it is best told as two halves.\n\n' +
             'The **preparatory phase invests 2 ATP**. Glucose is phosphorylated by hexokinase, isomerised to fructose-6-phosphate, and phosphorylated again by **phosphofructokinase-1** — the committed, rate-limiting, allosterically regulated step. The resulting fructose-1,6-bisphosphate is split into two triose phosphates.\n\n' +
             'The **payoff phase yields 4 ATP and 2 NADH**. Glyceraldehyde-3-phosphate dehydrogenase oxidises the triose and captures the energy as NADH plus a high-energy phosphate; two substrate-level phosphorylation steps then produce ATP, the last catalysed by **pyruvate kinase**.\n\n' +
             'Net: **2 ATP, 2 NADH, 2 pyruvate** per glucose.\n\n' +
             'Two points that earn marks. The three irreversible steps — hexokinase, PFK-1, pyruvate kinase — are the regulated ones and are exactly the steps gluconeogenesis must bypass. And the NADH must be reoxidised or glycolysis stops, which is why fermentation exists: it regenerates NAD-plus, not ATP.',
  answer_cn: '**糖酵解在胞质中、不需要氧，把一分子葡萄糖转变为两分子丙酮酸**，最好分成两半来讲。\n\n' +
             '**准备阶段投入 2 个 ATP**。葡萄糖被己糖激酶磷酸化，异构成 6-磷酸果糖，再由**磷酸果糖激酶-1** 磷酸化一次——这是定向的、限速的、受别构调节的一步。生成的 1,6-二磷酸果糖被裂解为两个磷酸丙糖。\n\n' +
             '**回报阶段产生 4 个 ATP 和 2 个 NADH**。3-磷酸甘油醛脱氢酶氧化丙糖，把能量以 NADH 加一个高能磷酸键的形式捕获；随后两步底物水平磷酸化产生 ATP，最后一步由**丙酮酸激酶**催化。\n\n' +
             '净产：每分子葡萄糖 **2 个 ATP、2 个 NADH、2 个丙酮酸**。\n\n' +
             '两个能得分的点。三个不可逆步骤——己糖激酶、PFK-1、丙酮酸激酶——正是受调控的那三步，也正是糖异生必须绕开的那三步。以及 NADH 必须被重新氧化，否则糖酵解就停下来，这就是发酵存在的意义：它再生的是 NAD⁺，不是 ATP。',
  followups: [
    { q_en: 'Which step is the real control point and why?',
      q_cn: '真正的控制点是哪一步？为什么？',
      a_en: 'PFK-1. It is the first step committed to glycolysis — hexokinase product can still go elsewhere — it is irreversible, and it is allosterically inhibited by ATP and citrate, so the pathway is switched off when the cell already has energy.',
      a_cn: 'PFK-1。它是第一个专用于糖酵解的步骤——己糖激酶的产物还可以走别的去向——它不可逆，而且受 ATP 和柠檬酸别构抑制，所以细胞能量充足时这条通路就被关掉。' },
    { q_en: 'Why does fermentation exist if it makes no extra ATP?',
      q_cn: '既然发酵不多产 ATP，它为什么还存在？',
      a_en: 'To regenerate NAD-plus. Glycolysis consumes NAD-plus at the GAPDH step, and the cell has a limited pool; without reoxidation glycolysis halts, so fermentation exists to keep the two ATP per glucose flowing.',
      a_cn: '为了再生 NAD⁺。糖酵解在 GAPDH 那一步消耗 NAD⁺，而细胞的库存有限；不重新氧化，糖酵解就会停住，所以发酵的意义是让每分子葡萄糖那 2 个 ATP continue流下去。' }
  ]
},

{
  id: 's1-bio-3-dna-vs-rna',
  sheets: 'S1 Bio 3 · S3 Bio 2',
  weight: 3,
  stem_en: 'What are the differences between DNA and RNA?',
  stem_cn: 'DNA 和 RNA 有什么区别？',
  answer_en: 'Four differences, and each one has a consequence — give the consequence, not just the fact.\n\n' +
             '**Sugar**: DNA has deoxyribose, RNA has ribose with a 2-prime hydroxyl. That hydroxyl makes RNA **chemically unstable** — it can attack its own backbone — which is why DNA is the archival molecule and RNA is the working copy.\n\n' +
             '**Bases**: DNA uses thymine, RNA uses uracil. Thymine is methylated uracil, and the methyl group is a **repair label**: cytosine spontaneously deaminates to uracil, so if uracil belonged in DNA the cell could not tell damage from sequence.\n\n' +
             '**Strandedness**: DNA is typically a double helix, RNA is typically single-stranded and folds back on itself into complex secondary and tertiary structures — which is what lets RNA be catalytic, as the ribosome is.\n\n' +
             '**Role and length**: DNA stores the genome and is very long and stable; RNA is transcribed as needed, is short-lived, and comes in functional classes — mRNA, tRNA, rRNA, and regulatory RNAs.',
  answer_cn: '四点区别，而且每一点都有后果——要讲后果，不要只讲事实。\n\n' +
             '**糖**：DNA 是脱氧核糖，RNA 是核糖，多一个 2\' 羟基。那个羟基使 RNA **化学上不稳定**——它能攻击自己的骨架——这正是 DNA 作为存档分子、RNA 作为工作拷贝的原因。\n\n' +
             '**碱基**：DNA 用胸腺嘧啶，RNA 用尿嘧啶。胸腺嘧啶是甲基化的尿嘧啶，而那个甲基是一个**修复标签**：胞嘧啶会自发脱氨变成尿嘧啶，所以如果尿嘧啶本来就属于 DNA，细胞就分不清哪个是损伤、哪个是序列。\n\n' +
             '**链数**：DNA 通常是双螺旋，RNA 通常是单链、并折叠回自身形成复杂的二级和三级结构——这正是 RNA 能具有催化活性的原因，核糖体就是如此。\n\n' +
             '**角色与长度**：DNA 储存基因组，很长而且稳定；RNA 按需转录，寿命短，并且分成不同功能类别——mRNA、tRNA、rRNA 以及调控性 RNA。',
  followups: [
    { q_en: 'Why does DNA use thymine when uracil would be cheaper to make?',
      q_cn: '既然尿嘧啶造起来更省，DNA 为什么还要用胸腺嘧啶？',
      a_en: 'Because cytosine deaminates to uracil spontaneously. With thymine as the legitimate base, any uracil found in DNA is unambiguously damage and can be excised — that discrimination is worth the extra methyl.',
      a_cn: '因为胞嘧啶会自发脱氨变成尿嘧啶。以胸腺嘧啶作为合法碱基，那么 DNA 中出现的任何尿嘧啶就明确是损伤，可以被切除——这种可区分性值得多花一个甲基。' },
    { q_en: 'Why is RNA the better molecule for a temporary message?',
      q_cn: '为什么 RNA 更适合作为临时的信使？',
      a_en: 'Because its instability is the feature: a message that degrades on its own means expression can be turned off by simply stopping transcription, with no active removal step needed.',
      a_cn: '因为它的不稳定正是它的优点：一个会自行降解的信使，意味着只要停止转录就能关掉表达，不需要额外的主动清除步骤。' }
  ]
},

{
  id: 's1-bio-4-dissociation-constant',
  sheets: 'S1 Bio 4 · S2 Bio 28',
  weight: 3,
  stem_en: 'What is the dissociation constant (Kd) and how is it defined?',
  stem_cn: '什么是解离常数 Kd？它是如何定义的？',
  answer_en: 'For a binding equilibrium where a protein P and a ligand L form a complex PL, **Kd is the equilibrium constant of the dissociation reaction**: Kd = [P][L] / [PL].\n\n' +
             'That gives it **units of concentration**, and the most useful way to state it is: **Kd is the free ligand concentration at which half the binding sites are occupied.** So a **smaller Kd means tighter binding** — a direction that is easy to get backwards under pressure.\n\n' +
             'Kinetically, Kd is the ratio of the two rate constants: **Kd = koff / kon**. This matters because two ligands can share a Kd while behaving completely differently — one binding and releasing fast, the other slow. What the ratio hides is **residence time, which is 1/koff**, and residence time is often what determines whether a drug still works once free concentration falls.\n\n' +
             'Measured by SPR, which gives both rate constants directly, or by ITC, which gives Kd, enthalpy and stoichiometry in solution.',
  answer_cn: '对于蛋白 P 与配体 L 形成复合物 PL 的结合平衡，**Kd 是解离反应的平衡常数**：Kd = [P][L] / [PL]。\n\n' +
             '因此它的**单位是浓度**，而最有用的表述方式是：**Kd 是使一半结合位点被占据时的自由配体浓度。**所以 **Kd 越小，结合越紧**——这个方向在紧张时很容易记反。\n\n' +
             '从动力学看，Kd 是两个速率常数之比：**Kd = koff / kon**。这一点重要，是因为两个配体可以有相同的 Kd 却行为完全不同——一个结合和释放都快，另一个都慢。这个比值掩盖掉的是**停留时间，即 1/koff**，而停留时间往往决定了自由浓度下降之后药物还有没有效。\n\n' +
             '测量方法是 SPR，它直接给出两个速率常数；或者 ITC，它在溶液中给出 Kd、焓变和化学计量比。',
  followups: [
    { q_en: 'A Kd of 1 nM versus 1 micromolar — which binds more tightly?',
      q_cn: 'Kd 是 1 nM 和 1 μM，哪个结合更紧？',
      a_en: '1 nM, by a thousand-fold. Kd is the concentration needed to half-saturate, so needing less ligand means binding more tightly.',
      a_cn: '1 nM，紧一千倍。Kd 是达到半饱和所需的浓度，所以需要的配体越少，说明结合越紧。' },
    { q_en: 'Why might two drugs with the same Kd perform differently in a patient?',
      q_cn: '为什么 Kd 相同的两种药在病人身上表现可能不同？',
      a_en: 'Because Kd is a ratio and averages away the rates. The one with the slower koff has a longer residence time, so it stays on target after the plasma concentration has been cleared.',
      a_cn: '因为 Kd 是一个比值，把速率平均掉了。koff 更慢的那个停留时间更长，所以在血药浓度被清除之后，它仍然留在靶点上。' }
  ],
  sourceNodes: ['4-2']
},

{
  id: 's1-bio-5-taq-and-kapa',
  sheets: 'S1 Bio 5 · S2 Bio 24',
  weight: 3,
  stem_en: 'Describe the activities of Taq and Kapa polymerases and why is that important for us.',
  stem_cn: '描述 Taq 和 Kapa 聚合酶的活性，以及这对我们为什么重要。',
  answer_en: 'Both are **thermostable DNA polymerases**, which is what allows PCR to be automated — they survive the 95-degree denaturation step, so enzyme does not have to be added every cycle.\n\n' +
             '**Taq**, from Thermus aquaticus, has 5-prime to 3-prime polymerase activity and **no 3-prime to 5-prime proofreading exonuclease**. So it is fast and robust but relatively error-prone. It also has terminal transferase activity that adds a single **A overhang**, which is exactly what TA cloning exploits.\n\n' +
             '**Kapa** is a high-fidelity engineered enzyme that **does have 3-prime to 5-prime proofreading**: it excises a misincorporated nucleotide and re-inserts the correct one, giving an error rate orders of magnitude lower. It produces **blunt ends**, not A overhangs.\n\n' +
             'Why it matters to us: **match the enzyme to the consequence of an error.** For colony screening or diagnostics, where you only ask whether a band is there, Taq is cheaper and fine. For anything that will be expressed, sequenced or cloned — where a single wrong base becomes a wrong amino acid in every downstream experiment — you use the proofreading enzyme.',
  answer_cn: '两者都是**耐热 DNA 聚合酶**，这正是 PCR 能够自动化的原因——它们能在 95 度变性步骤中存活，所以不必每一轮都补加酶。\n\n' +
             '**Taq** 来自 Thermus aquaticus，具有 5\'→3\' 聚合酶活性，**没有 3\'→5\' 校对外切酶活性**。所以它快、耐用，但错误率相对较高。它还有末端转移酶活性，会加上一个 **A 突出末端**，而 TA 克隆利用的正是这一点。\n\n' +
             '**Kapa** 是一种高保真的工程化酶，**具有 3\'→5\' 校对活性**：它切除错误掺入的核苷酸再补上正确的，使错误率低几个数量级。它产生的是**平末端**，不是 A 突出。\n\n' +
             '这对我们为什么重要：**按「出错的后果」来选酶。**做菌落筛选或诊断时，你只问有没有条带，用 Taq 更便宜也够用。而任何要拿去表达、测序或克隆的东西——一个错误碱基会变成一个错误氨基酸、并出现在之后每一个实验里——就必须用带校对活性的酶。',
  followups: [
    { q_en: 'What exactly is proofreading activity?',
      q_cn: '校对活性到底是什么？',
      a_en: 'A 3-prime to 5-prime exonuclease built into the same enzyme. When it inserts a wrong nucleotide the mismatch stalls extension, the enzyme backs up, excises that base, and tries again — a built-in correction step.',
      a_cn: '一种整合在同一个酶里的 3\'→5\' 外切酶活性。当它掺入错误核苷酸时，错配会让延伸停顿，酶退回来、切掉那个碱基、再试一次——一个内建的纠错步骤。' },
    { q_en: 'You want to do TA cloning. Which enzyme, and why?',
      q_cn: '你要做 TA 克隆，用哪个酶？为什么？',
      a_en: 'Taq, because TA cloning depends on the single A overhang Taq adds. A proofreading enzyme gives blunt ends and its exonuclease would remove the overhang anyway.',
      a_cn: 'Taq，因为 TA 克隆依赖 Taq 加上的那个单 A 突出。带校对活性的酶给出的是平末端，而且它的外切酶活性本来也会把突出末端切掉。' }
  ],
  sourceNodes: ['4-1']
},

{
  id: 's1-bio-6-glucose-fischer-haworth',
  sheets: 'S1 Bio 6 · S2 Bio 21',
  weight: 3,
  stem_en: 'Draw the structure of glucose in Fischer and Haworth projections.',
  stem_cn: '画出葡萄糖的 Fischer 投影式和 Haworth 投影式。',
  svg: '<svg viewBox="0 0 760 430" role="img" aria-label="D-glucose in Fischer and Haworth projections"> <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">  <text x="118" y="26" text-anchor="middle" font-size="15" font-weight="600">Fischer</text> <text x="118" y="44" text-anchor="middle" font-size="11" class="dim">open chain · 开链</text>  <text x="118" y="72" text-anchor="middle" font-size="13" font-weight="600">CHO</text> <line x1="118" y1="80" x2="118" y2="300"/>  <line x1="70" y1="106" x2="166" y2="106"/> <text x="56"  y="111" text-anchor="end"   font-size="12">H</text> <text x="180" y="111" text-anchor="start" font-size="12" font-weight="600">OH</text> <text x="128" y="99"  font-size="10" class="dim">C2</text>  <line x1="70" y1="154" x2="166" y2="154"/> <text x="56"  y="159" text-anchor="end"   font-size="12" font-weight="600">HO</text> <text x="180" y="159" text-anchor="start" font-size="12">H</text> <text x="128" y="147" font-size="10" class="dim">C3</text>  <line x1="70" y1="202" x2="166" y2="202"/> <text x="56"  y="207" text-anchor="end"   font-size="12">H</text> <text x="180" y="207" text-anchor="start" font-size="12" font-weight="600">OH</text> <text x="128" y="195" font-size="10" class="dim">C4</text>  <line x1="70" y1="250" x2="166" y2="250"/> <text x="56"  y="255" text-anchor="end"   font-size="12">H</text> <text x="180" y="255" text-anchor="start" font-size="12" font-weight="600">OH</text> <text x="128" y="243" font-size="10" class="dim">C5</text>  <text x="118" y="322" text-anchor="middle" font-size="13" font-weight="600">CH2OH</text>  <rect x="196" y="236" width="8" height="28" rx="2" fill="currentColor" stroke="none" opacity="0.28"/> <text x="212" y="248" font-size="10" class="dim">C5 OH on the RIGHT</text> <text x="212" y="262" font-size="10" class="dim">= D sugar</text>  <text x="118" y="360" text-anchor="middle" font-size="11" class="dim">OH pattern down the chain:</text> <text x="118" y="378" text-anchor="middle" font-size="12" font-weight="600">right &#183; left &#183; right &#183; right</text>  <path d="M255 195 L 320 195" stroke-width="2"/> <path d="M311 189 L 320 195 L 311 201" stroke-width="2"/> <text x="288" y="180" text-anchor="middle" font-size="11" font-weight="600">C5&#8211;OH attacks C1</text> <text x="288" y="216" text-anchor="middle" font-size="11">RIGHT &#8594; DOWN</text> <text x="288" y="231" text-anchor="middle" font-size="10" class="dim">转换规则</text>  <text x="545" y="26" text-anchor="middle" font-size="15" font-weight="600">Haworth</text> <text x="545" y="44" text-anchor="middle" font-size="11" class="dim">pyranose ring &#183; 吡喃糖环</text> <polygon points="462,168 516,140 596,140 650,168 596,196 516,196" stroke-width="2.2"/> <line x1="516" y1="196" x2="596" y2="196" stroke-width="4.2"/> <line x1="462" y1="168" x2="516" y2="196" stroke-width="4.2"/> <line x1="596" y1="196" x2="650" y2="168" stroke-width="4.2"/> <text x="600" y="132" font-size="13" font-weight="600">O</text> <line x1="650" y1="168" x2="650" y2="132"/> <text x="650" y="124" text-anchor="middle" font-size="12" font-weight="600">OH</text> <text x="682" y="124" font-size="9" class="dim">&#946;</text> <line x1="650" y1="168" x2="650" y2="222"/> <text x="650" y="238" text-anchor="middle" font-size="12" font-weight="600">OH</text> <text x="682" y="238" font-size="9" class="dim">&#945;</text> <text x="668" y="172" font-size="10" class="dim">C1</text> <line x1="596" y1="196" x2="596" y2="228"/> <text x="596" y="244" text-anchor="middle" font-size="12" font-weight="600">OH</text> <text x="604" y="214" font-size="10" class="dim">C2</text> <line x1="516" y1="196" x2="482" y2="112"/> <text x="476" y="104" text-anchor="middle" font-size="12" font-weight="600">OH</text> <line x1="516" y1="196" x2="516" y2="228"/> <text x="516" y="244" text-anchor="middle" font-size="12">H</text> <text x="524" y="214" font-size="10" class="dim">C3</text> <line x1="462" y1="168" x2="462" y2="222"/> <text x="462" y="238" text-anchor="middle" font-size="12" font-weight="600">OH</text> <text x="432" y="164" font-size="10" class="dim">C4</text> <line x1="516" y1="140" x2="516" y2="106"/> <text x="516" y="98" text-anchor="middle" font-size="12" font-weight="600">CH2OH</text> <text x="474" y="136" font-size="10" class="dim">C5</text> <text x="650" y="266" text-anchor="middle" font-size="10" class="dim">&#945; = OH down, &#946; = OH up</text> <text x="545" y="300" text-anchor="middle" font-size="11">Bold edge = nearest the viewer</text> <text x="545" y="316" text-anchor="middle" font-size="10" class="dim">加粗的边朝向观察者</text> <text x="545" y="344" text-anchor="middle" font-size="11" font-weight="600">&#946;-D-glucopyranose: all substituents equatorial</text> <text x="545" y="360" text-anchor="middle" font-size="10" class="dim">全部取代基处于平伏键 &#8212; 所以葡萄糖最稳定</text> <text x="545" y="384" text-anchor="middle" font-size="10" class="dim">C2 down &#183; C3 up &#183; C4 down &#8212; because in Fischer they are right, left, right</text> </g> </svg>',
  svg_caption: { en: 'D-glucose. Left: Fischer, open chain, OH right-left-right-right down the chain and the C5 OH on the right is what makes it D. Right: Haworth pyranose ring formed when the C5 hydroxyl attacks the C1 aldehyde. The conversion rule is that anything on the right in Fischer points down in Haworth. C1 becomes the anomeric carbon: OH down is alpha, OH up is beta.', cn: 'D-葡萄糖。左：Fischer 开链式，沿链的 OH 依次为右-左-右-右，而 C5 的 OH 在右侧正是它为 D 型的原因。右：C5 羟基进攻 C1 醛基形成的 Haworth 吡喃糖环。转换规则是 Fischer 中位于右侧的，在 Haworth 中朝下。C1 成为异头碳：OH 朝下为 α，朝上为 β。' },
  answer_en: 'Say what each projection is **for** while you draw, because that is what is being tested.\n\n' +
             '**Fischer** is the open-chain form drawn vertically: the aldehyde carbon (C1) at the top, then four chiral carbons, and CH2OH at the bottom. Horizontal bonds point towards the viewer. For **D-glucose**, the hydroxyls read **right, left, right, right** going down. The molecule is D because **the hydroxyl on the last chiral carbon, C5, is on the right**.\n\n' +
             '**Haworth** is the ring form. In solution glucose is almost entirely cyclic: the C5 hydroxyl attacks the C1 aldehyde to form a six-membered **pyranose** ring, drawn as a hexagon with the oxygen at the back right and C1 at the right.\n\n' +
             'The conversion rule: **anything on the right in Fischer points down in Haworth.** So for beta-D-glucopyranose all the substituents end up equatorial, which is why glucose is the most stable and most abundant hexose.\n\n' +
             'C1 becomes a new chiral centre, the **anomeric carbon**: OH down is alpha, OH up is beta. In solution the two interconvert through the open chain — **mutarotation**.',
  answer_cn: '一边画一边说出每种投影式是**干什么用的**，因为考的就是这个。\n\n' +
             '**Fischer 投影**是竖着画的开链形式：醛基碳（C1）在最上，接着四个手性碳，最下面是 CH2OH。横向的键指向观察者。对 **D-葡萄糖**，从上往下羟基依次是**右、左、右、右**。它之所以是 D 型，是因为**最后一个手性碳 C5 上的羟基在右边**。\n\n' +
             '**Haworth 投影**是环状形式。在溶液中葡萄糖几乎全部是环状的：C5 上的羟基进攻 C1 醛基，形成六元的**吡喃糖**环，画成一个六边形，氧在右后方，C1 在右侧。\n\n' +
             '转换规则：**在 Fischer 中位于右侧的，在 Haworth 中朝下。**所以对 β-D-吡喃葡萄糖，所有取代基最终都处于平伏键位置，这正是葡萄糖成为最稳定、最丰富的己糖的原因。\n\n' +
             'C1 变成一个新的手性中心，即**异头碳**：OH 朝下是 α，朝上是 β。在溶液中两者通过开链形式相互转化——**变旋现象**。',
  followups: [
    { q_en: 'What makes glucose D rather than L?',
      q_cn: '是什么让葡萄糖是 D 型而不是 L 型？',
      a_en: 'The configuration at the chiral carbon furthest from the carbonyl — C5. Hydroxyl on the right in Fischer means D. It says nothing about the direction the molecule rotates light.',
      a_cn: '离羰基最远的那个手性碳——C5——的构型。在 Fischer 式中羟基在右边就是 D 型。它与分子使偏振光旋转的方向无关。' },
    { q_en: 'Why is beta-D-glucose more abundant than alpha at equilibrium?',
      q_cn: '为什么平衡时 β-D-葡萄糖比 α 更多？',
      a_en: 'Because in the beta anomer the anomeric hydroxyl is equatorial rather than axial, which is sterically less crowded and therefore lower in energy.',
      a_cn: '因为在 β 异头物中，异头羟基处于平伏键而不是直立键位置，空间上更不拥挤，因而能量更低。' }
  ]
},

{
  id: 's1-bio-7-fitness-vs-folding-landscape',
  sheets: 'S1 Bio 7',
  weight: 3,
  stem_en: 'What is protein fitness landscape and what is protein folding landscape?',
  stem_cn: '什么是蛋白质适应度地形？什么是蛋白质折叠地形？',
  answer_en: 'They share a metaphor and nothing else, and the answer that scores is the one that **separates the axes**.\n\n' +
             'On a **folding landscape**, a point is **one conformation of one fixed sequence**. The vertical axis is free energy, and the system moves **downhill** on its own; the funnel shape explains how a protein finds its native state in a realistic time instead of searching every conformation. The sequence never changes.\n\n' +
             'On a **fitness landscape**, a point is **one sequence**, and neighbours are sequences one mutation away. The vertical axis is fitness or activity, and the system moves **uphill**, driven by selection over generations. Conformation is not on this map at all.\n\n' +
             'So: folding is one sequence exploring shapes, downhill, in milliseconds. Fitness is many sequences exploring sequence space, uphill, over evolutionary time. **Downhill versus uphill, and conformation versus sequence** — get those two contrasts out and the question is answered.',
  answer_cn: '这两张地形图共用一个比喻，除此之外没有任何共同之处，而能得分的答案是**把两套坐标轴分开**的那个。\n\n' +
             '在**折叠地形**上，一个点是**一条固定序列的一种构象**。纵轴是自由能，系统自发地往**下**走；漏斗形状解释了蛋白如何在现实的时间内找到天然态，而不是搜遍每一种构象。序列自始至终不变。\n\n' +
             '在**适应度地形**上，一个点是**一条序列**，相邻的点是相差一个突变的序列。纵轴是适应度或活性，系统在选择的驱动下、经过许多世代往**上**爬。构象根本不在这张图上。\n\n' +
             '所以：折叠是一条序列在探索构象，向下，以毫秒计。适应度是许多条序列在探索序列空间，向上，以进化时间计。**向下对向上，构象对序列**——把这两组对比讲出来，这道题就答完了。',
  followups: [
    { q_en: 'What does a local maximum mean on each landscape?',
      q_cn: '在这两张图上，局部极值各自意味着什么？',
      a_en: 'On the folding landscape a local minimum is a kinetically trapped misfolded state. On the fitness landscape a local maximum is a sequence that cannot be improved by any single mutation, even though a better sequence exists further away.',
      a_cn: '在折叠地形上，局部极小值是动力学上被困住的错误折叠状态。在适应度地形上，局部极大值是一条任何单个突变都无法改进的序列，尽管更远处存在更好的序列。' },
    { q_en: 'Why does directed evolution care about the fitness landscape shape?',
      q_cn: '定向进化为什么在意适应度地形的形状？',
      a_en: 'Because a rugged landscape with many local peaks means stepwise single mutations get stuck, which is the argument for recombination and for larger, more diverse libraries.',
      a_cn: '因为一个有很多局部峰的崎岖地形，意味着一步一个单突变会被困住，这正是采用重组、以及采用更大更多样文库的理由。' }
  ],
  sourceNodes: ['3-1']
}

]);
