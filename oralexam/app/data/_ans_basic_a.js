/* 口说短答 · Basic Lab Techniques 第 1 到 17 题（_qbank.js 里 basic 数组的 index 0–16）

   2026-09-19 Ruojin 提的：生化三十二题有全卡，微生物三十二题前几天给了出声短答，
   基础实验技术那三十四题至今只有题面。所以这一批照微生物那一批的样子做——
   **出声短答，不是卡**。每题三到五句能直接念出口的英文，加一两行中文（轴在哪里，出处在哪里）。
   没有 cram / segs / sib / recog / ask / why，没有图，没有公式，没有识别变体。不要往这里加。

   这一科和另外两科不一样：**这些是她每周在台子上真做的事**——标准曲线、移液、pH 计、
   离心、蛋白表达、层析、电泳、安全。她多半知道答案，缺的是那六十秒的出声形状。
   所以英文写成「一个会做事的人讲自己的做法」：按顺序说我做什么，每一步为什么在那里；
   凡是某一步是为了挡住某个具体失败的，就把那个失败说出来。

   出处：十七题全部在 ../jiri_bank/data/ 里有家答案（q_s1.js · q_s2.js · q_s3.js · questions.js），
   每题的 cn 里写了具体是哪一条。重用它的措辞是故意的：同一件事不要让她背两个版本。
   第 2 题（蛋白表达流程）在 jiri_bank 里是一条 spine，内容在 ch1c.js 节点 1-9…1-16，
   那批节点本身是从 ../pesbexplain 移植过来的，所以也算第二出处。
   英文里所有数字（pH 8 · 6.8 / 8.8 · 600 / 280 / 260 / 340 nm · OD 0.6–0.8 ·
   IPTG 50 µM–1 mM · 95 °C）都是 jiri_bank 里的，没有一个是现编的。
   少数几处标了 general 的（37 °C 培养、降温诱导、分析天平、校准过的 pH 计）是普通实验室常规，
   已在对应的 cn 行里写明。**捷克生化书不是这批题的出处**——它讲生化，不讲方法，不要引它的页码。

   另一半（index 17–33）在 _ans_basic_b.js，接在同一个 window.ANS_BASIC 上。 */

window.ANS_BASIC = (window.ANS_BASIC || []).concat([
 {q:'__PRIMER_TASK__',
  en:'“Restriction free cloning uses one pair of hybrid primers, and each primer has two halves. The three prime half anneals to my gene and does the amplifying, and the five prime half matches the destination plasmid at the insertion point. So the PCR product is my gene flanked by vector homologous ends, and that is the megaprimer. In a second reaction the megaprimer anneals to the whole plasmid and is extended around it, and DpnI then digests the methylated parental plasmid. Two rules decide whether it works: I remove the stop codon so anything downstream is still translated, and I keep the insert in frame with the secretion leader in front of the insertion point.”',
  cn:'这道是 S1 上唯一的实操任务，题面在题库里只留了占位符。轴是一句话：一对杂合引物，3′ 端扩增、5′ 端带载体同源尾巴，产物就是 megaprimer；DpnI 只切甲基化的亲本质粒，所以留下的是新构建。出处：jiri_bank q_s1.js（S1 Lab 4）。',
  warn:'⚠ 卷面印的那段序列是照片转录的，在 +0 阅读框里翻出七个内部终止密码子，说明有碱基读错。**答原理，不要当场对着那些碱基设计引物**——那会给出一个自信但错误的答案。'},

 {q:'Describe protein expression workflow in bacterial cells.',
  en:'“The workflow runs from a plasmid to a purified protein, and I describe it in five steps. I clone the gene into an expression plasmid carrying a T7 promoter, a ribosome binding site, an origin of replication, an antibiotic marker and an affinity tag, and I transform that into BL21 DE3. I grow the culture at thirty seven degrees and follow the OD600 until mid exponential phase, then add IPTG to induce, often at a lower temperature so that more of the protein stays soluble. Then I harvest the cells by centrifugation, break them by sonication on ice, and clear the lysate by centrifugation again. Finally I purify the tagged protein by affinity chromatography and check every fraction on an SDS-PAGE gel, because the flow through tells me whether the protein bound at all.”',
  cn:'五步一条线：质粒 → 转化 → 长到对数中期诱导 → 收菌破碎 → 亲和层析 ＋ 跑胶验。出处：jiri_bank questions.js（S1 Lab 3），内容展开在 ch1c.js 节点 1-9…1-16（从 pesbexplain 移过来的）。37 °C 和「降温诱导」是普通实验室常规（general），不是那批节点里的原话。',
  warn:'⚠ 导师举过的追问链是「表达蛋白怎么做 → 回答 plasmid → 回答 plasmid 上有哪些元件」。所以**元件那一串不要等他问，第二句就主动报完**：启动子、RBS、复制起点、抗性标记、标签。'},

 {q:'How do you determine the concentration of an unknown sample using a standard curve?',
  en:'“I read the unknown off a calibration line built from standards measured in the same run, so the method never measures concentration directly. I prepare a dilution series of a standard of known concentration, measure the standards and the unknown on the same spectrophotometer and under identical conditions, plot signal against concentration, and fit a line through the linear region. Two constraints carry all the failure modes. The unknown must fall inside the range of the standards, because extrapolating assumes a relationship I never measured. And the standards must be treated exactly like the samples, in the same buffer and the same incubation, because the curve calibrates the whole procedure and not just the instrument.”',
  cn:'轴是一次**替换**：给出相同信号的未知样品，被假定含有相同浓度。所以两条约束（必须落在范围内、标准品与样品同等对待）不是细节，它们就是这个方法成立的条件。出处：jiri_bank q_s1.js（S1 Lab 1 / S3 Lab 4）。',
  warn:'⚠ 他常追「读数高于最高标准品怎么办」。答：稀释后重测，绝不外推——超出范围你没有证据说关系还是线性的，而且检测器通常恰好在那里饱和。空白要用缓冲液不是水，理由同一条。'},

 {q:'Imagine a situation when you need to tag a protein receptor located on the surface of cell. What you need to do? Describe the strategy of gene modification.',
  en:'“The whole answer is topology, because a surface receptor sits in three compartments, an extracellular domain, a transmembrane segment and a cytoplasmic tail. So I decide first which side I want to detect, because a tag on the extracellular domain can be labelled on intact living cells for flow cytometry, while a cytoplasmic tag needs the cells permeabilised. The receptor is made with an N terminal signal peptide that is cleaved off during translocation, so a tag placed in front of it would be cut away with it. I therefore put the tag after the signal peptide or on the C terminus, with a short flexible linker, and away from the ligand binding site and the transmembrane segment. Then I sequence the construct, express it, and confirm that the receptor still reaches the surface and still binds ligand, because a tag that abolishes trafficking has answered a different question.”',
  cn:'轴是拓扑：三个区室，标签放哪一侧决定它能不能用。约束有三条——信号肽会被切掉、避开配体结合位点和跨膜段、加柔性 linker。出处：jiri_bank q_s1.js（S1 Lab 6）。',
  warn:'⚠ 他会追「你怎么确认标签真的在外侧」。答：用抗标签抗体染**未透化**的完整细胞，再和透化的比——不透化就有信号，说明表位在胞外。'},

 {q:'Name at least two strains of E. coli suitable for protein expression and explain how they differ.',
  en:'“Expression strains are chosen for whether the host can transcribe my gene, translate it and fold it, and BL21 DE3 is the baseline. DE3 means the strain carries the T7 RNA polymerase gene, so it works with pET vectors, and BL21 is also deficient in the Lon and OmpT proteases, so my product is less likely to be degraded. Rosetta type strains add tRNAs for codons that are rare in E. coli, which rescues eukaryotic genes that would otherwise stall the ribosome. Origami or SHuffle type strains have an engineered, less reducing cytoplasm so that disulfide bonds can form, which matters for proteins that are otherwise insoluble. So the three strains map onto three different problems, transcription, translation and folding, with protease protection running underneath all of them.”',
  cn:'判据一句：表达菌株 ＝ 带 (DE3) ＋ 缺蛋白酶；三个菌株对应三个不同的问题（转录 / 翻译 / 折叠）。出处：jiri_bank q_s2.js（S2 Micro 20 · S1 Lab 5）。',
  warn:'⚠ 微生物卷还有一道「适合克隆的菌株」，那边的判据是 recA− endA−。**两道题不要串**：BL21 不要答到克隆那一道，DH5α 不要答到这一道。另外，菌株名里没有 (DE3)，pET 质粒什么都不表达。'},

 {q:'What are the safety precautions when handling hazardous chemicals in the lab?',
  en:'“I answer in the order of the hierarchy of controls, because that is the reasoning behind the list. First elimination or substitution, so I use the less hazardous reagent where one exists, for example a SYBR type stain instead of ethidium bromide. Second engineering controls, a fume hood for volatiles, shielding for radioactivity and secondary containment, and these protect everyone in the room without depending on anybody remembering. Third administrative controls: read the safety data sheet before opening the bottle, label everything, never work alone with the worst hazards, and segregate hazardous waste instead of pouring it down the sink. Last comes personal protective equipment, a coat, goggles and gloves chosen for that specific chemical, and it comes last because it protects only one person and fails silently.”',
  cn:'轴是**控制措施层级**，四级从「根本不用它」到「靠戴在身上的东西挡」。这样答的分数在于给出了推理顺序，而不是背一张清单。出处：jiri_bank q_s1.js（S1 Lab 2 / S3 Lab 15）。',
  warn:'⚠ 两个追问必答。一，为什么 PPE 排最后：它只保护穿的人、依赖每次都做对、而且失效时没有任何提示（手套上一个针孔不会报警）。二，洒了少量不明试剂第一步做什么：**先提醒周围的人并限制进入**，再按标签或 SDS 确认是什么——先清理后确认，正是小溢漏变成暴露事故的方式。'},

 {q:'Define pH, what is a buffer, and explain the Henderson-Hasselbalch equation.',
  en:'“pH is the negative logarithm of the hydrogen ion activity, so one pH unit is a tenfold change in concentration. A buffer is a solution of a weak acid together with its conjugate base, and it resists pH change because added acid is absorbed by the base form and added base by the acid form. The Henderson-Hasselbalch equation says that pH equals the pKa plus the logarithm of the ratio of conjugate base to weak acid. The useful reading is that when the two forms are equal the log term is zero and the pH equals the pKa, so I choose a buffer whose pKa is close to my target pH. Buffering capacity is good within about one pH unit either side of the pKa, because further out one form is more than tenfold in excess.”',
  cn:'三问三答，最后一句是落点：pH ＝ pKa 那一点就是选缓冲液的判据，上下一个单位是它的工作区间。出处：jiri_bank q_s2.js（S2 Lab 1）。',
  warn:'⚠ Tris 的 pKa 强烈依赖温度，室温调好的 Tris 进冷室 pH 就变了。**必须在实际使用的温度下调 pH**——这是他在缓冲液那一题上最爱挖的一刀。'},

 {q:'Describe the Lambert-Beer law and its applications.',
  en:'“The law says that absorbance equals the molar extinction coefficient times the concentration times the path length. So absorbance is linearly proportional to concentration, and that linearity is what makes spectrophotometry quantitative at all. I use it for protein at 280 nanometres, because tryptophan and tyrosine absorb there, for nucleic acid at 260 nanometres, and for every colorimetric assay such as BCA or Bradford. It also underlies enzyme assays that follow NADH at 340 nanometres on the spectrophotometer. The limits matter too, because the law fails at high concentration where molecules interact and the detector saturates, and it assumes monochromatic light and no scattering.”',
  cn:'先给式子，再给「所以它才能定量」，再给四个用处，最后给局限。消光系数的单位是 每摩尔每厘米，这样 A 才是无量纲的。出处：jiri_bank q_s2.js（S2 Lab 5 / S3 Lab 3）。',
  warn:'⚠ 最后那半句「不能有散射」直接接到下一道题：**OD600 不是 Lambert-Beer 意义上的吸光**，细胞是把光散射出光路，不是吸收。主动说出来。另外，不含色氨酸和酪氨酸的蛋白不能用 A280，消光系数接近零，要改用 BCA。'},

 {q:'Describe the procedure for preparing 1M EDTA and 6M guanidine hydrochloride. What precautions should be taken and how to proceed?',
  en:'“Both start from the same arithmetic, mass equals molarity times volume times molecular weight, weighed out on an analytical balance, and then each has its own trap. For one molar EDTA the trap is that the free acid will not dissolve until the pH is raised to about eight. So I add the powder to most of the final volume, add sodium hydroxide while stirring until it clears, set the pH on a calibrated meter, then make up to volume and autoclave. For six molar guanidine hydrochloride the trap is volume, because the solid takes up a lot of space at that concentration, so I dissolve it in a smaller volume and make up to the final volume afterwards. Dissolving it is strongly endothermic so it goes cold and slow, and because it is a chaotrope I wear gloves and eye protection and never mix it with bleach.”',
  cn:'两个坑各一条：EDTA 是 **pH 不到 8 就不溶**（升 pH 让羧基去质子化、分子带电才溶）；6 M 盐酸胍是**体积**（溶质本身占很大体积）。出处：jiri_bank q_s2.js（S2 Lab 10）。分析天平和「校准过的 pH 计」是常规（general）。',
  warn:'⚠ 通则一句要说出来：**永远在有刻度的容器里定容**，不要先量一个算出来的溶剂体积再把固体加进去。把 6 M 盐酸胍直接溶在足量水里，得到的浓度会明显低于 6 M。'},

 {q:'List the components of a PCR mixture and describe the role of each component.',
  en:'“Six things: template, two primers, a thermostable polymerase, the four dNTPs, magnesium and buffer. The template is the sequence to be copied, and the two primers flank the target and point towards each other, so they fix both ends of the product and set the annealing temperature. The polymerase is thermostable, Taq or a high fidelity enzyme, so it survives ninety five degrees and does not have to be added again each cycle. The four dNTPs go in at equal concentrations, because an imbalance raises the error rate, and the buffer sets the pH and the ionic strength. Magnesium is the polymerase cofactor and it also stabilises primer template pairing, so too little makes the enzyme slow and too much gives mispriming and primer dimers.”',
  cn:'六样，每样一句作用。镁是最该讲出道理的那一项，所以放在最后单独说——它同时是辅因子和配对稳定剂，两头都有代价。出处：jiri_bank q_s2.js（S2 Lab 7）。',
  warn:'⚠ 他爱追「出非特异条带先调哪一个」。答：**先把镁降下来**，过量的游离镁会稳定不完全匹配的引物；提高退火温度是同一个效果。退火温度不是随便选的，是从引物的 Tm 推出来的，通常低几度。'},

 {q:'What is IPTG and what does it replace?',
  en:'“IPTG is a synthetic inducer of the lac operon, and it replaces allolactose, the natural inducer made from lactose inside the cell. Both work by binding the LacI repressor and changing its shape so that it releases the operator, so induction is the removal of a block rather than the switching on of a gene. The reason to use IPTG rather than lactose is that IPTG is not metabolised, so it induces without being consumed and the induction level stays where I set it. Lactose is degraded by the very operon it turns on, so with lactose the induction drifts downwards. In practice I add it in the range of fifty micromolar to one millimolar, at mid exponential phase.”',
  cn:'题面两问，第二问的答案是一个词：allolactose（别乳糖，乳糖进细胞后被 β-半乳糖苷酶顺手异构出来的那一小部分）。第二句那个「诱导是把阻碍拿掉」是这道题的分数。出处：jiri_bank q_s2.js（S2 Lab 2）；50 µM–1 mM 这个范围来自节点 1-13。',
  warn:'⚠ 他可能接一句「T7 聚合酶跟 lac 毫无关系，为什么 T7 系统也用 IPTG 诱导？」答：T7 聚合酶基因本身在 DE3 里被放在一个受 lac 控制的启动子下，**控制隔了一层**。'},

 {q:'What is OD600?',
  en:'“OD600 is optical density at six hundred nanometres, a turbidity reading used as a proxy for cell density. The key point is that it is not absorbance in the Lambert-Beer sense, because cells do not absorb at that wavelength, they scatter light out of the beam. Six hundred nanometres is chosen because neither medium components nor cell pigments absorb much there, so the signal is mostly scattering by cells. It counts living and dead cells alike, and it is only linear up to about 0.6 to 0.8, so a dense culture has to be diluted before reading. The relationship to actual cell number is instrument specific, so an OD of one is not a universal cell count.”',
  cn:'轴是「它不是吸收，是散射」。这一句一说完，后面三条后果（死活不分、0.6–0.8 以上不线性、仪器特异）全是它的推论。出处：jiri_bank q_s2.js（S2 Lab 4）。',
  warn:'⚠ 追问「要真正的活菌数怎么办」：梯度稀释涂板、数 CFU。OD 分不出死活，CFU 只数还能分裂的那些——这一句跟微生物卷的转化效率那道题是同一个量。'},

 {q:'What is proofreading activity in DNA polymerases?',
  en:'“Proofreading is a three prime to five prime exonuclease activity built into the same polymerase, which removes a nucleotide that has just been inserted incorrectly. A mismatched base pairs badly and stalls extension, so the primer terminus moves across into the exonuclease site, the wrong base is excised, and synthesis resumes. It is a built in correction step inside the enzyme rather than a separate repair pathway. The consequence is fidelity, because Taq has no proofreading and is relatively error prone, while high fidelity enzymes such as Kapa or Pfu have it and their error rates are orders of magnitude lower. So the rule is simple: a proofreading enzyme for anything that will be cloned, expressed or sequenced, and Taq where I only ask whether a band is present.”',
  cn:'最后那句判据跟 taq 卡第 12 点是**同一句话**，要说同一套话，不要学两个版本。机制那一句的重点是「引物末端挪到另一个活性位点去」，不是「酶发现了错误」。出处：jiri_bank q_s2.js（S2 Lab 8）。',
  warn:'⚠ 两条都会被追。一，有校对不等于没错：它只把错误率降几个数量级，而且**早期循环的一个错会被扩增成终产物里相当大的一部分**。二，同一个 3′→5′ 外切酶会在上机前啃掉单链引物的 3′ 端，所以高保真反应要用热启动。'},

 {q:'What is the relationship between rpm and rcf?',
  en:'“rpm is how fast the rotor turns, and rcf is the actual force the sample feels, expressed as multiples of gravity. They are not interchangeable, because rcf depends on the rotor radius and not only on the speed. rcf is proportional to the radius times the square of the rotational speed, so doubling the speed quadruples the force. The practical consequence is that the same rpm in a different rotor gives a different force, so a protocol should specify a number times g rather than rpm. Quoting rpm without naming the rotor makes the spin impossible to reproduce.”',
  cn:'轴是半径：rcf 正比于 半径 × 转速²。落点是可重复性——方案里写 × g，不写 rpm。出处：jiri_bank q_s2.js（S2 Lab 3）。',
  warn:'⚠ 别把 rpm 和 rcf 说成可以直接换算。换算表是**对某一个特定转子半径**算的，换转子就不成立。半径沿管长变化，所以 rcf 要标明在哪个半径下，通常是管底的 r-max。'},

 {q:'Which antibiotic is stable at room temperature and which one degrades with heat?',
  en:'“Kanamycin is the heat stable one and ampicillin is the one that degrades. Ampicillin has a beta lactam ring that is hydrolysable, so it is destroyed by heat, and more importantly in practice it is destroyed by beta lactamase secreted by the resistant cells themselves. Kanamycin is an aminoglycoside with no such labile ring, so it tolerates warmth and longer storage. This explains satellite colonies, because a resistant colony on an ampicillin plate clears the antibiotic in a halo around itself and non resistant cells then grow in that halo. Kanamycin plates do not give satellites, because that resistance modifies the drug inside the cell instead of clearing it from the medium, and neither antibiotic is autoclaved, both are filter sterilised into cooled medium.”',
  cn:'先直接回答哪个是哪个，再给结构理由（β-内酰胺环可水解），最后落到卫星菌落——那才是这道题在实验室里的意义。出处：jiri_bank q_s2.js（S2 Lab 9）。',
  warn:'⚠ 题面听起来像冷知识，真正会被追的是**卫星菌落为什么只出现在氨苄上**：β-内酰胺酶是**分泌**出去的，把周围培养基里的药清掉；卡那霉素耐药是在胞内修饰药物，培养基仍然有选择性。避免办法：早挑菌、用新鲜平板、不要过夜过度培养。'},

 {q:'Why are there two gels in SDS-PAGE, the stacking and resolving gels? Explain their functions.',
  en:'“There are two gels because separation needs every protein to start from the same line, and a sample loaded into a well is a band several millimetres deep. The stacking gel has large pores and a lower pH around 6.8, where glycine from the running buffer is mostly uncharged and moves slowly while chloride moves fast. The proteins are caught between those two fronts and compressed into a razor thin band, and that is isotachophoresis, so nothing is separated there, only concentrated. The resolving gel has small pores and a higher pH around 8.8, so glycine becomes fully charged, overtakes the proteins and the stacking collapses. Now the proteins sieve through the small pores and separate by size, and with only one gel the bands would be broad and smeared.”',
  cn:'轴是「同一条起跑线」。浓缩胶只浓缩不分离，分离胶才筛分；两层胶的差别是**孔径 ＋ pH**，而 pH 才是开关。出处：jiri_bank q_s2.js（S2 Lab 6）。',
  warn:'⚠ 他会追「真正制造堆积效应的是哪个组分」。答案不是胶，是**电泳缓冲液里的甘氨酸**——它的带电状态随 pH 变，在 6.8 慢、在 8.8 快，这个切换开启并终止了堆积。'},

 {q:'Describe the principle and application of mass spectrometry.',
  en:'“Mass spectrometry measures the mass to charge ratio of ions, and every instrument has the same three parts, an ion source, a mass analyser and a detector. The sample has to be ionised without being destroyed, so the two soft methods matter, electrospray and MALDI. Electrospray sprays a liquid into charged droplets, MALDI embeds the sample in a matrix and fires a laser at it, and the analyser then separates the ions by mass to charge. For proteins the standard workflow is bottom up: digest with trypsin, separate the peptides by liquid chromatography, then select one peptide, fragment it and read the sequence from the fragment mass differences. I use it to identify a protein, to verify the mass of a purified product, and above all to map post translational modifications, because that is the thing sequencing cannot tell me.”',
  cn:'三段式：三个部件 → 两种软电离 → bottom-up 流程。落点是最后半句，那才是他要听的判据。胰蛋白酶是标准酶，因为它在 Lys 和 Arg 之后特异切割，给出长度合适、C 端带正电的肽。出处：jiri_bank q_s3.js（S3 Lab 14）。',
  warn:'⚠ 「质谱能告诉你什么是测序做不到的」这一问几乎一定来。答：**翻译后修饰，以及这个蛋白是不是真的被造出来了**。磷酸化和未磷酸化的酶是同一个基因、同一份转录本，却是不同的分子。'},
]);
