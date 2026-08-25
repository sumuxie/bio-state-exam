/* =========================================================================
   The last nine. Each of these already had its content written as a full
   DEEP node; what was missing was a question card in the examiner's own
   wording. These entries are short on purpose and point at the node.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's-gram-positive-negative',
  sheets: 'S1 Micro 1 · S3 Micro 1', weight: 3,
  stem_en: 'What are the differences between Gram-positive and Gram-negative bacteria?',
  stem_cn: '革兰氏阳性菌与革兰氏阴性菌有什么区别？',
  svg: '<svg viewBox="0 0 720 340" role="img" aria-label="Gram-positive and Gram-negative cell wall architecture"> <g fill="none" stroke="currentColor" stroke-width="1.6">  <text x="175" y="26" font-size="13" text-anchor="middle" font-weight="600">Gram-positive</text> <text x="175" y="42" font-size="10" text-anchor="middle" class="dim">革兰氏阳性 &#183; stains purple</text>  <rect x="60" y="70" width="230" height="46" rx="3" fill="currentColor" opacity="0.20" stroke="none"/> <rect x="60" y="70" width="230" height="46" rx="3"/> <text x="175" y="98" font-size="11" text-anchor="middle" font-weight="600">THICK peptidoglycan</text>  <line x1="60" y1="140" x2="290" y2="140" stroke-width="3.4"/> <line x1="60" y1="152" x2="290" y2="152" stroke-width="3.4"/> <text x="175" y="172" font-size="10" text-anchor="middle">plasma membrane</text>  <line x1="86" y1="66" x2="86" y2="146" stroke-dasharray="3 3"/> <line x1="264" y1="66" x2="264" y2="146" stroke-dasharray="3 3"/> <text x="175" y="196" font-size="10" text-anchor="middle" class="dim">teichoic acids run through the wall</text>  <text x="175" y="232" font-size="10" text-anchor="middle">thick wall traps the crystal violet</text> <text x="175" y="246" font-size="10" text-anchor="middle">complex during decolourisation</text> <text x="175" y="266" font-size="10" text-anchor="middle" class="dim">厚壁在脱色时困住结晶紫复合物</text>  <line x1="360" y1="60" x2="360" y2="300" stroke-dasharray="4 6" class="dim"/>  <text x="545" y="26" font-size="13" text-anchor="middle" font-weight="600">Gram-negative</text> <text x="545" y="42" font-size="10" text-anchor="middle" class="dim">革兰氏阴性 &#183; stains pink</text>  <line x1="430" y1="70" x2="660" y2="70" stroke-width="3.4"/> <line x1="430" y1="82" x2="660" y2="82" stroke-width="3.4"/> <text x="545" y="62" font-size="11" text-anchor="middle" font-weight="600">OUTER membrane</text> <circle cx="452" cy="64" r="3.2" stroke-width="1.3"/> <circle cx="480" cy="64" r="3.2" stroke-width="1.3"/> <circle cx="508" cy="64" r="3.2" stroke-width="1.3"/> <circle cx="536" cy="64" r="3.2" stroke-width="1.3"/> <text x="676" y="68" font-size="10" text-anchor="end" class="dim">LPS</text>  <rect x="430" y="104" width="230" height="14" rx="2" fill="currentColor" opacity="0.20" stroke="none"/> <rect x="430" y="104" width="230" height="14" rx="2"/> <text x="545" y="134" font-size="10" text-anchor="middle" font-weight="600">THIN peptidoglycan</text>  <text x="682" y="112" font-size="10" text-anchor="end" class="dim">periplasm</text>  <line x1="430" y1="152" x2="660" y2="152" stroke-width="3.4"/> <line x1="430" y1="164" x2="660" y2="164" stroke-width="3.4"/> <text x="545" y="184" font-size="10" text-anchor="middle">inner membrane</text>  <text x="545" y="214" font-size="10" text-anchor="middle">alcohol dissolves the outer membrane;</text> <text x="545" y="228" font-size="10" text-anchor="middle">the thin wall cannot hold the complex</text> <text x="545" y="248" font-size="10" text-anchor="middle" class="dim">乙醇溶解外膜，薄壁留不住复合物</text> <text x="545" y="268" font-size="10" text-anchor="middle" class="dim">outer membrane = extra drug barrier + endotoxin</text>  <text x="360" y="316" font-size="11" text-anchor="middle" font-weight="600">One structural difference explains the stain, the drug access and the endotoxin</text> <text x="360" y="332" font-size="10" text-anchor="middle" class="dim">一个结构差异同时解释了染色、药物可及性和内毒素</text> </g> </svg>',
  svg_caption: { en: 'The wall is the whole answer. A thick peptidoglycan layer outside one membrane dehydrates during alcohol decolourisation and traps the crystal violet-iodine complex, so the cell stays purple. A thin layer in the periplasm cannot hold it once alcohol dissolves the outer membrane, so it washes out and counterstains pink. That same outer membrane is the extra drug barrier and carries lipid A, the endotoxin.', cn: '细胞壁就是整个答案。单层膜外的厚肽聚糖在乙醇脱色时脱水收缩、困住结晶紫-碘复合物，所以细胞保持紫色。周质中的薄肽聚糖层在乙醇溶解外膜后留不住复合物，被冲掉后复染成粉红。同一层外膜既是额外的药物屏障，也携带类脂 A 这个内毒素。' },
  answer_en: '**One structural difference explains everything else, so lead with it: the wall.**\n\n' +
             '**Gram-positive** — a **thick** peptidoglycan layer outside a single membrane, with teichoic acids running through it.\n\n' +
             '**Gram-negative** — a **thin** peptidoglycan layer sitting in the periplasm between an inner membrane and an **outer membrane**, whose outer leaflet is **lipopolysaccharide**.\n\n' +
             'From that follows the **stain**: during alcohol decolourisation the thick wall dehydrates and traps the crystal violet-iodine complex (stays purple), while the thin wall of a Gram-negative cannot hold it once the alcohol dissolves the outer membrane (washes out, then counterstains pink).\n\n' +
             'And from it follows **clinical behaviour**: the outer membrane is an extra permeability barrier, so Gram-negatives are intrinsically harder to treat; its lipid A is **endotoxin**, which can cause septic shock even from dead cells; and beta-lactamase concentrated in the periplasm sits exactly where a beta-lactam must act.',
  answer_cn: '**一个结构差异解释了其余一切，所以从它讲起：细胞壁。**\n\n' +
             '**革兰氏阳性**——单层膜外面是**厚**肽聚糖层，其中贯穿磷壁酸。\n\n' +
             '**革兰氏阴性**——**薄**肽聚糖层位于内膜与**外膜**之间的周质中，外膜的外小叶是**脂多糖**。\n\n' +
             '由此推出**染色结果**：乙醇脱色时，厚壁脱水收缩、把结晶紫-碘复合物困住（保持紫色）；而革兰氏阴性菌的外膜被乙醇溶解后，薄壁留不住复合物（被冲掉，再复染成粉红）。\n\n' +
             '也由此推出**临床行为**：外膜是一层额外的通透屏障，所以阴性菌天生更难治；它的类脂 A 就是**内毒素**，即使细菌已死也可能引起感染性休克；而富集在周质中的 β-内酰胺酶，恰好就在 β-内酰胺类药物必须起作用的位置。',
  followups: [
    { q_en: 'Which step of the Gram stain actually decides the result?',
      q_cn: '革兰氏染色的哪一步真正决定结果？',
      a_en: 'Decolourisation. Everything before it stains both types identically and everything after only colours what was stripped, so the wall-thickness difference is expressed at that step alone.',
      a_cn: '脱色。在它之前两类染色完全一样，在它之后只是给被脱色的上色，所以壁厚差异只在这一步被表达出来。',
      node: '2-2' },
    { q_en: 'Why is a Gram-negative harder to treat?',
      q_cn: '为什么革兰氏阴性菌更难治疗？',
      a_en: 'The outer membrane restricts drug entry, efflux pumps sit in it, and beta-lactamase is concentrated in the periplasm — three barriers a Gram-positive does not have.',
      a_cn: '外膜限制药物进入、外排泵位于其中、β-内酰胺酶又富集在周质里——三重屏障是革兰氏阳性菌没有的。',
      node: '2-2' }
  ],
  sourceNodes: ['2-2']
},

{
  id: 's-isolate-culture-bacteria',
  sheets: 'S3 Micro 7', weight: 1,
  stem_en: 'How do you isolate and culture bacteria from a sample?',
  stem_cn: '如何从样品中分离并培养细菌？',
  answer_en: 'The goal is a **pure culture**, and the operational definition of pure is a **single well-separated colony**, because a colony is the clonal progeny of one colony-forming unit.\n\n' +
             '**Streak plating** is the standard route, and the thing to say about it is that it is a **dilution technique performed with a loop rather than a pipette**: the loop is sterilised between sectors, so each sector starts only from what was carried over, and by the third or fourth sector cells are far enough apart to grow as separate colonies.\n\n' +
             '**The medium is the question you asked.** A rich non-selective medium asks "what grows?"; a **selective** medium suppresses everything except your target; a **differential** medium lets several things grow but makes them look different. Choosing the medium is choosing what you will be able to see.\n\n' +
             'Then incubate at the right temperature and atmosphere, pick a single colony, and re-streak to confirm purity before doing anything else.\n\n' +
             'Aseptic technique throughout, and a **negative control** plate to prove the technique held.',
  answer_cn: '目标是**纯培养**，而「纯」的操作定义是**一个分离良好的单菌落**，因为菌落是一个菌落形成单位的克隆后代。\n\n' +
             '**平板划线**是标准做法，而关于它要讲的是：它是**用接种环而不是移液器完成的一次稀释**。接种环在各区之间灼烧灭菌，所以每一区只从上一区带过来的那点菌开始；到第三或第四区，细胞之间已经足够远，能长成彼此分开的菌落。\n\n' +
             '**培养基就是你提出的那个问题。**丰富的非选择性培养基问的是「什么能长」；**选择性**培养基压制除目标之外的一切；**鉴别性**培养基让多种菌都长，但让它们看起来不同。选培养基就是在选你将能看见什么。\n\n' +
             '然后在合适的温度和气体条件下培养，挑单菌落，并在做其它任何事之前重新划线确认纯度。\n\n' +
             '全程无菌操作，并用一块**阴性对照**平板证明操作确实成立。',
  followups: [
    { q_en: 'Why is a single colony assumed to be one organism?',
      q_cn: '为什么一个单菌落被认为是一种菌？',
      a_en: 'Because binary fission is asexual, so all descendants of one colony-forming unit are genetically identical apart from new mutations. That assumption is what makes streaking a purification method.',
      a_cn: '因为二分裂是无性的，所以一个菌落形成单位的全部后代除新突变外遗传上相同。正是这个假定让划线成为一种纯化方法。',
      node: '2-1' },
    { q_en: 'What is the difference between selective and differential media?',
      q_cn: '选择性培养基和鉴别性培养基有什么区别？',
      a_en: 'Selective stops unwanted organisms growing at all; differential lets them grow but makes them look different, usually by a pH indicator or a substrate they process differently.',
      a_cn: '选择性培养基让不想要的菌根本长不出来；鉴别性培养基让它们能长，但看起来不同，通常靠 pH 指示剂或它们处理方式不同的某种底物。',
      node: '2-1' }
  ],
  sourceNodes: ['2-1']
},

{
  id: 's-pcr-principle-applications',
  sheets: 'S3 Micro 19', weight: 1,
  stem_en: 'Explain the principle of PCR and its applications in microbiology.',
  stem_cn: '解释 PCR 的原理及其在微生物学中的应用。',
  answer_en: '**PCR is exponential copying of a defined DNA region, driven by a repeated temperature cycle.**\n\n' +
             'Denaturation near 95 °C separates the strands. Annealing, at a temperature set by the primers, lets two primers pointing towards each other bind — and those primers define both ends of the product, so specificity is a matter of primer design. Extension near 72 °C lets a thermostable polymerase build the new strands. Because each cycle copies the template **and everything made so far**, product grows as 2 to the power n.\n\n' +
             'For **microbiology** the applications are mostly diagnostic rather than preparative, and they mostly need the quantitative version. Amplifying **16S** with universal primers and sequencing the amplicon identifies an organism **without culturing it**, which matters because most environmental bacteria have never been grown. **qPCR** gives viral load or bacterial burden by reading fluorescence every cycle and reporting **Cq**. And PCR detects **specific genes** rather than organisms — a resistance determinant, a toxin gene — faster than a phenotypic test.\n\n' +
             'If asked why endpoint PCR will not do: it **plateaus**, so the final amount reflects which reagent ran out first, not how much template you started with. A gel band means present, not abundant.',
  answer_cn: '**PCR 是对一段确定 DNA 区域的指数式复制，由重复的温度循环驱动。**\n\n' +
             '95 °C 附近变性把双链分开。退火温度由引物决定，让两条相向的引物结合——而这两条引物定义了产物两端，所以特异性是引物设计的问题。72 °C 附近延伸，让耐热聚合酶合成新链。因为每一轮既复制模板**也复制此前生成的一切**，产物以 2 的 n 次方增长。\n\n' +
             '就**微生物学**而言，应用大多是诊断性而非制备性的，而且大多需要定量版本。用通用引物扩增 **16S** 并对扩增子测序，可以**不培养**就鉴定一个菌，这很重要，因为大多数环境细菌从未被培养出来。**qPCR** 通过每轮读荧光并报告 **Cq**，给出病毒载量或细菌负荷。而 PCR 检测的是**特定基因**而不是生物体——耐药决定簇、毒素基因——比表型试验快得多。\n\n' +
             '如果被问为什么终点 PCR 不行：它会**到平台**，最终产物量反映的是哪种试剂先耗尽，而不是起始模板有多少。胶上一条带说明「有」，不是「多」。',
  followups: [
    { q_en: 'Why is qPCR the right answer to a microbiology question about PCR?',
      q_cn: '面对微生物学的 PCR 问题，为什么 qPCR 才是对的答案？',
      a_en: 'Because the microbiological applications that matter are quantitative or diagnostic — viral load, bacterial burden, detecting an unculturable organism — and each is a qPCR or amplicon-sequencing workflow rather than a gel.',
      a_cn: '因为真正重要的微生物学应用是定量或诊断性的——病毒载量、细菌负荷、检出无法培养的病原体——每一项都是 qPCR 或扩增子测序流程，而不是一块胶。',
      node: '4-1' },
    { q_en: 'Which component would you adjust first if you saw non-specific bands?',
      q_cn: '看到非特异条带你会先调哪个组分？',
      a_en: 'Magnesium — lower it. Excess free magnesium stabilises imperfectly matched primers. Raising the annealing temperature has the same effect.',
      a_cn: '镁——把它降低。过量的游离镁会稳定不完全匹配的引物。提高退火温度效果相同。',
      node: '4-1' }
  ],
  sourceNodes: ['4-1']
},

{
  id: 's-gel-electrophoresis-principle',
  sheets: 'S3 Lab 8', weight: 1,
  stem_en: 'What is the principle behind gel electrophoresis?',
  stem_cn: '凝胶电泳的原理是什么？',
  answer_en: '**Charged molecules move through a porous gel in an electric field, and the gel sieves them by size.** Separation happens only if **charge per unit mass is the same for everything in the sample** — otherwise you are measuring charge and size at once and can read neither.\n\n' +
             'For **nucleic acids** that condition is free: every nucleotide contributes one phosphate, so charge per unit length is identical regardless of sequence. Nothing has to be added, and **agarose percentage** sets the pore size — higher percentage resolves smaller fragments, lower percentage resolves larger ones.\n\n' +
             'For **proteins** it is not free: a folded protein\'s net charge depends on its own amino acid composition. **SDS** is added to unfold the chain and coat it at a roughly constant ratio, imposing a uniform negative charge that swamps the protein\'s own — and only then does migration in **polyacrylamide** depend on size alone.\n\n' +
             'Detection: DNA with an intercalating dye under UV or blue light; protein with Coomassie or silver stain.',
  answer_cn: '**带电分子在电场中穿过多孔凝胶，凝胶按大小把它们筛开。**只有当**样品中所有分子每单位质量的电荷相同**时，分离才成立——否则你同时在测电荷和大小，两者都读不出来。\n\n' +
             '对**核酸**来说这个条件是白送的：每个核苷酸贡献一个磷酸，所以每单位长度的电荷与序列无关、完全相同。什么都不用加，而**琼脂糖浓度**决定孔径——浓度高分辨小片段，浓度低分辨大片段。\n\n' +
             '对**蛋白**来说则不是白送的：折叠蛋白的净电荷取决于它自身的氨基酸组成。要加 **SDS** 把链展开并以大致恒定的比例包裹，赋予一个压过蛋白自身电荷的均一负电荷——只有这样，在**聚丙烯酰胺**中的迁移才只取决于大小。\n\n' +
             '检测：DNA 用嵌入型染料在紫外或蓝光下观察；蛋白用考马斯亮蓝或银染。',
  followups: [
    { q_en: 'Why does DNA need no SDS equivalent?',
      q_cn: '为什么 DNA 不需要类似 SDS 的东西？',
      a_en: 'Because its phosphate backbone already gives a uniform charge per unit length, independent of sequence. That uniformity is exactly what SDS has to manufacture for proteins.',
      a_cn: '因为它的磷酸骨架本来就提供了与序列无关、每单位长度均一的电荷。而这种均一性正是蛋白需要靠 SDS 人为制造的。',
      node: '1-7' },
    { q_en: 'Why would you choose a lower-percentage agarose gel?',
      q_cn: '什么时候选低浓度琼脂糖胶？',
      a_en: 'To resolve large fragments. A high-percentage gel has small pores that make large fragments migrate slowly and similarly, so they bunch near the wells instead of separating.',
      a_cn: '为了分辨大片段。高浓度胶孔径小，会让大片段迁移得又慢又相近，全挤在加样孔附近而分不开。',
      node: '1-7' }
  ],
  sourceNodes: ['1-7']
},

{
  id: 's-western-blot-principle',
  sheets: 'S3 Lab 11', weight: 1,
  stem_en: 'Explain the principle of a Western blot.',
  stem_cn: '解释 Western blot 的原理。',
  answer_en: 'Three separable steps: **separate, transfer, probe.**\n\n' +
             '**Separate** by SDS-PAGE, so migration reflects molecular weight alone.\n\n' +
             '**Transfer** the separated bands out of the gel onto a nitrocellulose or PVDF membrane, usually by electroblotting. This step is necessary rather than convenient: the gel pores that made separation possible are too fine for a bulky antibody to penetrate, and the soft gel cannot survive the repeated washing detection requires.\n\n' +
             '**Probe** — block the membrane, then a **primary antibody** specific to your protein, then a **labelled secondary antibody** against the primary, detected most often by chemiluminescence.\n\n' +
             'The family point is worth adding: **Southern is DNA, Northern is RNA, Western is protein**, and they share the transfer step, differing only in the probe. The names are a historical pun on Edwin Southern\'s surname, not a description of chemistry.',
  answer_cn: '三个可分开的步骤：**分离、转印、探测。**\n\n' +
             '**分离**用 SDS-PAGE，使迁移只反映分子量。\n\n' +
             '**转印**把分离好的条带从凝胶转到硝酸纤维素或 PVDF 膜上，通常用电转印。这一步是必需的而非图方便：让分离得以实现的凝胶孔隙，细到体积不小的抗体穿不进去；而柔软的凝胶也扛不住检测所需的反复洗涤。\n\n' +
             '**探测**——先封闭膜，再用针对你的蛋白的**一抗**，然后用针对一抗的**带标记二抗**，最常用化学发光检测。\n\n' +
             '值得补一句家族关系：**Southern 是 DNA，Northern 是 RNA，Western 是蛋白**，三者共用转印这一步，区别只在探针。这几个名字是对 Edwin Southern 姓氏的历史性谐音玩笑，不是对化学原理的描述。',
  followups: [
    { q_en: 'Why can the probing not be done inside the gel?',
      q_cn: '为什么探测不能在凝胶里做？',
      a_en: 'The pores sized to slow macromolecules also block a bulky antibody from diffusing in, and the hydrated gel disintegrates under the washing a real detection protocol needs.',
      a_cn: '那些为了拖慢大分子而设计的孔隙同样挡住了体积不小的抗体扩散进去，而含水的凝胶在真正的检测流程所需的洗涤下会散架。',
      node: '1-7' },
    { q_en: 'What does the secondary antibody add?',
      q_cn: '二抗的作用是什么？',
      a_en: 'Signal and flexibility: it carries the enzyme or fluorophore, and because it binds any primary from that species, one labelled secondary serves many different experiments. It also amplifies, since several bind one primary.',
      a_cn: '信号和通用性：它携带酶或荧光基团，而且因为它能结合该物种的任何一抗，一种带标记的二抗可以服务很多不同实验。它还有放大作用，因为多个二抗能结合一个一抗。',
      node: '1-7' }
  ],
  sourceNodes: ['1-7']
},

{
  id: 's-loading-control',
  sheets: 'S3 Lab 12', weight: 1,
  stem_en: 'What is the purpose of using a loading control in Western blotting?',
  stem_cn: 'Western blot 中上样内参的作用是什么？',
  answer_en: '**It checks the assumption that every lane started with the same amount of total protein — an assumption a Western blot completely depends on and cannot otherwise verify.**\n\n' +
             'That assumption fails in ways that have nothing to do with biology: slightly different volumes pipetted, uneven transfer across the membrane, or partial degradation in one sample. Without a control, any of those looks exactly like a real change in your protein.\n\n' +
             'So a second, unrelated protein is probed on the same membrane. The condition on choosing it is **not that it is abundant** but that it is **independently known not to respond to the treatment being tested** — actin, tubulin and GAPDH are common choices, but each has documented exceptions.\n\n' +
             'And it is used as a **ratio**, not a presence check: the band of interest divided by the control band in the same lane, and those normalised values compared across lanes. Merely seeing a control band in every lane only rules out a totally empty well.\n\n' +
             'The newer alternative is **total-protein staining** of the whole membrane, which avoids trusting any single reference protein.',
  answer_cn: '**它核实的是「每条泳道起始总蛋白量相同」这个假设——而 Western blot 完全依赖这个假设，又无法用别的方式验证它。**\n\n' +
             '这个假设失效的方式与生物学无关：加样体积略有差异、膜上转印不均、或某一份样品部分降解。没有内参，上述任何一种看起来都和你的蛋白发生了真实变化一模一样。\n\n' +
             '所以要在同一张膜上探测第二个不相关的蛋白。选它的条件**不是丰度高**，而是**被独立证明对该处理不响应**——actin、tubulin、GAPDH 是常见选择，但每一个都有记录在案的例外。\n\n' +
             '而且它的用法是做**比值**，不是看有没有：同一泳道里目的条带除以内参条带，再拿这些归一化后的值跨泳道比较。只看到每条泳道都有内参条带，只能排除完全空样这一种极端情况。\n\n' +
             '更新的替代方案是给整张膜做**总蛋白染色**，从而不必信任任何单一参照蛋白。',
  followups: [
    { q_en: 'The loading control band is weak in one lane. What is the correct response?',
      q_cn: '某条泳道的内参条带偏弱，正确的做法是什么？',
      a_en: 'Treat that lane as uninterpretable and repeat with equalised loading. Dividing by a control you already know is unreliable in that lane launders the problem rather than fixing it.',
      a_cn: '把那条泳道当作无法解读，重新均衡上样后再做。用一个你已知在该泳道不可靠的内参去做除法，只是把问题洗白而不是解决。',
      node: '1-7' },
    { q_en: 'Why is GAPDH not always a safe choice?',
      q_cn: '为什么 GAPDH 并不总是安全的选择？',
      a_en: 'Its expression shifts under some metabolic and hypoxic conditions. If your treatment touches metabolism, the control is itself responding and the normalisation is invalid.',
      a_cn: '它的表达在某些代谢和缺氧条件下会变化。如果你的处理涉及代谢，内参本身就在响应，归一化随之失效。',
      node: '1-7' }
  ],
  sourceNodes: ['1-7']
},

{
  id: 's-prepare-standard-solution',
  sheets: 'S3 Lab 7', weight: 1,
  stem_en: 'How do you prepare a standard solution?',
  stem_cn: '如何配制标准溶液？',
  answer_en: '**A standard solution is one whose concentration is known accurately**, so every step exists to keep that accuracy.\n\n' +
             'Calculate the mass: **mass = concentration × volume × molecular weight**, taking the molecular weight from the bottle, including any waters of hydration.\n\n' +
             'Weigh on a balance with enough resolution for the mass involved, and **transfer quantitatively** — rinse the weighing vessel into the flask, because what stays behind is error.\n\n' +
             'Dissolve in **less than the final volume**, then **make up to the mark** in a volumetric flask. This is the step people get wrong: you cannot add the calculated volume of solvent, because the solute itself occupies volume. Mix thoroughly by inversion.\n\n' +
             'Then label with identity, concentration, solvent, date and preparer.\n\n' +
             'Two cases where the general rule needs a specific trick: **EDTA** will not dissolve until NaOH raises the pH to about 8, and a very concentrated solution such as **6 M guanidine** must be dissolved in a small volume first because the solid takes up so much space.',
  answer_cn: '**标准溶液是浓度已被准确知道的溶液**，所以每一步都是为了保住这个准确度。\n\n' +
             '算质量：**质量 = 浓度 × 体积 × 分子量**，分子量以试剂瓶上的为准，包括结晶水。\n\n' +
             '在分辨率足够的天平上称量，并**定量转移**——把称量容器冲洗到容量瓶里，因为留在原处的就是误差。\n\n' +
             '用**少于终体积**的溶剂溶解，然后在容量瓶中**定容到刻度**。这一步最常被做错：不能加入算出来的溶剂体积，因为溶质本身占体积。倒转充分混匀。\n\n' +
             '然后贴标签，写明名称、浓度、溶剂、日期和配制人。\n\n' +
             '有两种情况通则需要具体技巧：**EDTA** 要先用 NaOH 把 pH 升到约 8 才溶得开；而像 **6 M 盐酸胍**这样的高浓度溶液必须先用小体积溶解，因为固体占的体积很大。',
  followups: [
    { q_en: 'Why make up to volume rather than add a calculated volume of solvent?',
      q_cn: '为什么要定容，而不是加入算好的溶剂体积？',
      a_en: 'Because the dissolved solute occupies volume itself. Adding a full calculated volume of solvent gives a total volume larger than intended and therefore a concentration lower than intended.',
      a_cn: '因为溶解的溶质本身占体积。加入完整算出的溶剂体积，会使总体积大于预期，浓度因而低于预期。',
      node: '1-1' },
    { q_en: 'Why does it matter that the standard is accurate?',
      q_cn: '标准溶液准不准为什么要紧？',
      a_en: 'Because every unknown measured against it inherits its error. A standard curve calibrates the whole procedure, so a systematically wrong standard makes every result systematically wrong.',
      a_cn: '因为每一个对照它测定的未知样品都继承了它的误差。标准曲线校准的是整个流程，所以标准品系统性地偏，结果就系统性地偏。',
      node: '1-1' }
  ],
  sourceNodes: ['1-1']
},

{
  id: 's-molarity-molar-solutions',
  sheets: 'S3 Lab 18', weight: 1,
  stem_en: 'How do you calculate molarity and prepare molar solutions?',
  stem_cn: '如何计算摩尔浓度并配制摩尔溶液？',
  answer_en: '**Molarity is moles of solute per litre of solution** — note per litre of **solution**, not of solvent, which is why you make up to volume rather than adding a litre.\n\n' +
             'The working formula: **mass in grams = molarity × volume in litres × molecular weight**.\n\n' +
             'For a **dilution** the relationship is **C1V1 = C2V2**, since the number of moles does not change when you add solvent. That single equation covers every "how much stock do I need" question.\n\n' +
             'Preparation is then the standard sequence: weigh, transfer quantitatively, dissolve in less than the final volume, make up to the mark, mix, label.\n\n' +
             'Two things worth saying because they are where marks are lost. Use the molecular weight **printed on the bottle**, since hydrated salts weigh more per mole than the anhydrous formula suggests. And distinguish molarity from **molality** (per kilogram of solvent) and from **percentage** solutions, which are mass or volume per hundred and do not involve moles at all.',
  answer_cn: '**摩尔浓度是每升溶液中溶质的摩尔数**——注意是每升**溶液**，不是每升溶剂，这正是要定容而不是加一升的原因。\n\n' +
             '实用公式：**质量（克）= 摩尔浓度 × 体积（升）× 分子量**。\n\n' +
             '**稀释**的关系式是 **C1V1 = C2V2**，因为加溶剂时摩尔数不变。这一个方程覆盖了所有「我需要取多少母液」的问题。\n\n' +
             '配制则是标准流程：称量、定量转移、用少于终体积的溶剂溶解、定容到刻度、混匀、贴标签。\n\n' +
             '有两点值得说，因为分就丢在这里。要用**试剂瓶上印的**分子量，因为水合盐每摩尔的重量高于无水化学式所示。以及要把摩尔浓度与**质量摩尔浓度**（每千克溶剂）和**百分比**溶液区分开——后者是每百份的质量或体积，根本不涉及摩尔。',
  followups: [
    { q_en: 'You need 500 mL of 0.2 M from a 2 M stock. How much stock?',
      q_cn: '要用 2 M 母液配 500 mL 的 0.2 M，取多少母液？',
      a_en: 'C1V1 = C2V2, so V1 = (0.2 × 500) / 2 = 50 mL of stock, made up to 500 mL.',
      a_cn: 'C1V1 = C2V2，所以 V1 = (0.2 × 500) / 2 = 50 mL 母液，定容至 500 mL。',
      node: '1-1' },
    { q_en: 'Why use the molecular weight on the bottle rather than from memory?',
      q_cn: '为什么要用瓶上的分子量而不是凭记忆？',
      a_en: 'Because hydrated forms carry waters of crystallisation and weigh more per mole. Using the anhydrous value for a hydrated salt gives a solution weaker than intended.',
      a_cn: '因为水合形式带结晶水，每摩尔更重。对水合盐使用无水值，配出来的溶液会比预期稀。',
      node: '1-1' }
  ],
  sourceNodes: ['1-1']
}

]);
