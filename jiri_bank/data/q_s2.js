/* =========================================================================
   SHEET 2 — all 30 questions. Direct answers, deliberately short: roughly
   what you would say in 30-60 seconds, then the follow-up cards do the rest.
   ========================================================================= */
window.PESB = window.PESB || {};
window.PESB.questions = (window.PESB.questions || []).concat([

{
  id: 's2-lab-1-ph-buffer-hh',
  sheets: 'S2 Lab 1', weight: 2,
  stem_en: 'Define pH, what is a buffer, and explain the Henderson-Hasselbalch equation.',
  stem_cn: '定义 pH，什么是缓冲液，并解释 Henderson-Hasselbalch 方程。',
  answer_en: '**pH is the negative logarithm of the hydrogen ion activity**, so one pH unit is a ten-fold change in concentration.\n\n' +
             'A **buffer** is a solution of a weak acid together with its conjugate base. It resists pH change because added acid is absorbed by the base form and added base by the acid form.\n\n' +
             '**Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]).** The useful reading is that when the two forms are equal the log term is zero, so **pH equals pKa** — which is why you choose a buffer whose pKa is close to your target pH, and why buffering capacity is best within about one unit either side.',
  answer_cn: '**pH 是氢离子活度的负对数**，所以一个 pH 单位就是浓度差十倍。\n\n' +
             '**缓冲液**是弱酸与其共轭碱的混合溶液。加入的酸被碱式吸收、加入的碱被酸式吸收，因此它能抵抗 pH 变化。\n\n' +
             '**Henderson-Hasselbalch：pH = pKa + log([A⁻]/[HA])。**有用的读法是：两种形式相等时对数项为零，于是 **pH 等于 pKa**——这就是为什么要选 pKa 接近目标 pH 的缓冲液，也是为什么缓冲能力在 pKa 上下约一个单位内最好。',
  followups: [
    { q_en: 'Why does buffering fail more than one pH unit from the pKa?',
      q_cn: '为什么偏离 pKa 一个单位以上缓冲就不行了？',
      a_en: 'Because one form is then more than ten-fold in excess, so there is very little of the other form left to absorb what you add.',
      a_cn: '因为那时一种形式已经过量十倍以上，能用来吸收你所加物质的另一种形式所剩无几。' },
    { q_en: 'Tris is a common buffer — what is its notorious problem?',
      q_cn: 'Tris 是常用缓冲液——它有名的问题是什么？',
      a_en: 'Its pKa is strongly temperature-dependent, so a Tris buffer set at room temperature is at a different pH in the cold room. You must set the pH at the temperature you will use it.',
      a_cn: '它的 pKa 强烈依赖温度，所以在室温下调好的 Tris 缓冲液，进冷室之后 pH 就变了。必须在实际使用的温度下调 pH。' }
  ],
  sourceNodes: ['1-2', '1-3']
},

{
  id: 's2-lab-2-iptg',
  sheets: 'S2 Lab 2', weight: 2,
  stem_en: 'What is IPTG and what does it replace?',
  stem_cn: 'IPTG 是什么？它替代的是什么？',
  answer_en: 'IPTG is a **synthetic inducer of the lac operon**, and it replaces **allolactose**, the natural inducer produced from lactose.\n\n' +
             'Both work by binding the **LacI repressor** and changing its shape so it releases the operator — induction is the removal of a block, not the switching on of a gene.\n\n' +
             'The reason to use IPTG rather than lactose is that **IPTG is not metabolised**. It induces without being consumed, so the induction level stays where you set it, whereas lactose is degraded by the very operon it turns on.',
  answer_cn: 'IPTG 是 **lac 操纵子的人工诱导物**，它替代的是**别乳糖（allolactose）**，即由乳糖产生的天然诱导物。\n\n' +
             '两者都通过结合 **LacI 阻遏蛋白**、改变其构象使它松开操作基因来起作用——诱导是把一个阻碍拿掉，而不是把基因打开。\n\n' +
             '之所以用 IPTG 而不是乳糖，是因为 **IPTG 不被代谢**。它诱导但不被消耗，诱导强度会停在你设定的水平；而乳糖会被它自己打开的那个操纵子降解掉。',
  followups: [
    { q_en: 'Why is a T7 system induced by IPTG when T7 polymerase has nothing to do with lac?',
      q_cn: 'T7 聚合酶和 lac 毫无关系，为什么 T7 系统却用 IPTG 诱导？',
      a_en: 'Because the T7 polymerase gene itself sits under a lac-controlled promoter in the DE3 lysogen. IPTG induces the polymerase, and the polymerase then reads your T7 promoter — control one level removed.',
      a_cn: '因为 T7 聚合酶基因本身在 DE3 溶原体里被放在一个受 lac 控制的启动子下。IPTG 诱导的是聚合酶，聚合酶再去读你的 T7 启动子——控制隔了一层。',
      node: '1-12' },
    { q_en: 'What is autoinduction and why does it need no IPTG?',
      q_cn: '什么是自诱导？为什么它不需要 IPTG？',
      a_en: 'A medium whose carbon sources are consumed in a fixed order: the culture grows on the preferred one first and derepresses only when it runs out, so the timing is built into the medium.',
      a_cn: '一种碳源按固定顺序被消耗的培养基：培养物先吃优先的那个，等它耗尽才解除阻遏，于是诱导时机被写进了培养基里。',
      node: '1-13' }
  ],
  sourceNodes: ['3-2', '1-13']
},

{
  id: 's2-lab-3-rpm-rcf',
  sheets: 'S2 Lab 3', weight: 2,
  stem_en: 'What is the relationship between rpm and rcf?',
  stem_cn: 'rpm 和 rcf 之间是什么关系？',
  answer_en: '**rpm is how fast the rotor turns; rcf is the actual force experienced, expressed as multiples of gravity (× g).**\n\n' +
             'They are not interchangeable because rcf depends on **rotor radius as well as speed**: rcf is proportional to the radius times the square of the rotational speed.\n\n' +
             'The practical consequence is the whole point: **the same rpm in a different rotor gives a different force.** So protocols should specify × g, not rpm — quoting rpm without naming the rotor makes a spin irreproducible.',
  answer_cn: '**rpm 是转子转多快；rcf 是实际受到的力，以重力的倍数（× g）表示。**\n\n' +
             '两者不能互换，因为 rcf 同时取决于**转子半径和转速**：rcf 正比于半径乘以转速的平方。\n\n' +
             '实际后果就是这道题的要点：**同样的 rpm 换一个转子，力就不一样。**所以方案里应该写 × g 而不是 rpm——只写 rpm 而不说明转子型号，这次离心就无法重复。',
  followups: [
    { q_en: 'Why does the square matter?',
      q_cn: '为什么是转速的平方？',
      a_en: 'Because doubling the speed quadruples the force. Small changes in rpm therefore have a much larger effect on the actual separation than people expect.',
      a_cn: '因为转速加倍，力变成四倍。所以 rpm 的小变化对实际分离的影响，比人们预期的大得多。' },
    { q_en: 'Which radius is used — the top of the tube or the bottom?',
      q_cn: '用的是哪个半径——管口还是管底？',
      a_en: 'It varies along the tube, so rcf is quoted at a stated radius, usually maximum (r-max) at the tube bottom. A pellet therefore experiences more force than the top of the liquid.',
      a_cn: '半径沿管长变化，所以 rcf 要标明在哪个半径下，通常是管底的最大半径 r-max。因此沉淀受到的力大于液面顶部。' }
  ]
},

{
  id: 's2-lab-4-od600',
  sheets: 'S2 Lab 4', weight: 2,
  stem_en: 'What is OD600?',
  stem_cn: '什么是 OD600？',
  answer_en: '**Optical density at 600 nm — a turbidity measurement used as a proxy for cell density.**\n\n' +
             'The key point is that it is **not absorbance in the Lambert-Beer sense**: cells do not absorb at 600 nm, they **scatter** light out of the beam. The instrument records less light arriving and reports it as absorbance, but the physics is scattering.\n\n' +
             '600 nm is chosen because neither medium components nor cell pigments absorb much there, so the signal is mostly scattering by cells.\n\n' +
             'Consequences: it counts **living and dead cells alike**, it is only linear up to about 0.6-0.8 so dense cultures must be diluted, and the relationship to actual cell number is **instrument-specific** — an OD of 1 is not a universal cell count.',
  answer_cn: '**600 nm 处的光密度——一种浊度测量，用作细胞密度的替代指标。**\n\n' +
             '关键在于它**不是 Lambert-Beer 意义上的吸光**：细胞在 600 nm 并不吸收，而是把光**散射**出光路。仪器记录到到达的光变少，并以吸光度报告出来，但背后的物理过程是散射。\n\n' +
             '选 600 nm 是因为培养基成分和细胞色素在那里都吸收不多，所以信号主要来自细胞散射。\n\n' +
             '后果：它**把活细胞和死细胞一起算**；只有到大约 0.6–0.8 之前是线性的，所以浓的培养物必须稀释；而且它与实际细胞数的关系是**仪器特异的**——OD 为 1 并不对应一个通用的细胞数。',
  followups: [
    { q_en: 'Why must a dense culture be diluted rather than just read?',
      q_cn: '为什么浓培养物必须稀释而不能直接读？',
      a_en: 'Above roughly 0.6-0.8 the relationship stops being linear — scattered light gets re-scattered back into the beam, so the reading underestimates the true density.',
      a_cn: '超过大约 0.6–0.8 之后关系不再线性——散射出去的光又被再次散射回光路，于是读数低估了真实密度。' },
    { q_en: 'How would you get an actual viable cell count instead?',
      q_cn: '要拿到真正的活菌数该怎么做？',
      a_en: 'Serial dilution and plating, counting colony-forming units. OD cannot distinguish live from dead; CFU counts only what can still divide.',
      a_cn: '梯度稀释后涂板，计数菌落形成单位。OD 分不出死活；CFU 只计数还能分裂的那些。' }
  ],
  sourceNodes: ['1-8']
},

{
  id: 's2-lab-5-lambert-beer',
  sheets: 'S2 Lab 5 · S3 Lab 3', weight: 2,
  stem_en: 'Describe the Lambert-Beer law and its applications.',
  stem_cn: '描述 Lambert-Beer 定律及其应用。',
  answer_en: '**A = ε · c · l** — absorbance equals the molar extinction coefficient times concentration times path length.\n\n' +
             'It says absorbance is **linearly proportional to concentration**, which is what makes spectrophotometry quantitative at all.\n\n' +
             'Applications: protein quantification by **A280** (tryptophan and tyrosine absorb there), nucleic acid quantification by **A260**, enzyme assays that follow **NADH at 340 nm**, and every colorimetric assay such as BCA or Bradford.\n\n' +
             'The limits matter as much as the law. It fails at **high concentration**, where molecules interact and detectors saturate; it assumes **monochromatic light** and no scattering — which is exactly why OD600 is not really Lambert-Beer.',
  answer_cn: '**A = ε · c · l**——吸光度等于摩尔消光系数乘以浓度乘以光程。\n\n' +
             '它说的是吸光度与浓度**成线性正比**，这正是分光光度法能够定量的根本原因。\n\n' +
             '应用：用 **A280** 定量蛋白（色氨酸和酪氨酸在那里吸收）、用 **A260** 定量核酸、跟踪 **340 nm 处 NADH** 的酶活测定，以及 BCA、Bradford 这类所有比色法。\n\n' +
             '它的局限和定律本身一样重要。在**高浓度**下失效，此时分子间相互作用、检测器饱和；它还假定**单色光**且没有散射——这恰恰是 OD600 并不真正属于 Lambert-Beer 的原因。',
  followups: [
    { q_en: 'What are the units of the extinction coefficient?',
      q_cn: '消光系数的单位是什么？',
      a_en: 'Per molar per centimetre, so that A comes out dimensionless. It is a property of the specific molecule at a specific wavelength.',
      a_cn: '每摩尔每厘米，这样 A 才是无量纲的。它是特定分子在特定波长下的性质。' },
    { q_en: 'A protein with no tryptophan or tyrosine — can you use A280?',
      q_cn: '一个不含色氨酸和酪氨酸的蛋白，能用 A280 吗？',
      a_en: 'No. Those residues are what absorbs at 280 nm, so the extinction coefficient is near zero. Use a colorimetric assay such as BCA instead.',
      a_cn: '不能。280 nm 处吸收的正是这些残基，所以消光系数接近零。改用 BCA 这类比色法。' }
  ],
  sourceNodes: ['1-8', '1-5']
},

{
  id: 's2-lab-6-stacking-resolving-gel',
  sheets: 'S2 Lab 6', weight: 2,
  stem_en: 'Why are there two gels in SDS-PAGE, the stacking and resolving gels? Explain their functions.',
  stem_cn: 'SDS-PAGE 为什么有两层胶——浓缩胶和分离胶？解释它们的功能。',
  svg: '<svg viewBox="0 0 720 340" role="img" aria-label="Stacking and resolving gel in SDS-PAGE"> <g fill="none" stroke="currentColor" stroke-width="1.6">  <rect x="150" y="40" width="300" height="72" rx="2" fill="currentColor" opacity="0.10" stroke="none"/> <rect x="150" y="40" width="300" height="72" rx="2"/> <text x="300" y="30" font-size="12" text-anchor="middle" font-weight="600">Stacking gel</text> <text x="466" y="62" font-size="11" font-weight="600">pH 6.8</text> <text x="466" y="78" font-size="10" class="dim">large pores</text> <text x="466" y="92" font-size="10" class="dim">大孔径</text>  <rect x="180" y="44" width="52" height="26" rx="1" stroke-dasharray="3 3"/> <rect x="260" y="44" width="52" height="26" rx="1" stroke-dasharray="3 3"/> <rect x="340" y="44" width="52" height="26" rx="1" stroke-dasharray="3 3"/> <text x="300" y="126" font-size="10" text-anchor="middle" class="dim">sample loaded as a deep band in the well</text>  <rect x="150" y="150" width="300" height="140" rx="2" fill="currentColor" opacity="0.20" stroke="none"/> <rect x="150" y="150" width="300" height="140" rx="2"/> <text x="300" y="308" font-size="12" text-anchor="middle" font-weight="600">Resolving gel</text> <text x="466" y="170" font-size="11" font-weight="600">pH 8.8</text> <text x="466" y="186" font-size="10" class="dim">small pores</text> <text x="466" y="200" font-size="10" class="dim">小孔径</text>  <line x1="206" y1="140" x2="206" y2="150" stroke-width="3"/> <line x1="286" y1="140" x2="286" y2="150" stroke-width="3"/> <line x1="366" y1="140" x2="366" y2="150" stroke-width="3"/> <text x="300" y="136" font-size="10" text-anchor="middle" font-weight="600">compressed into a razor-thin band</text>  <line x1="186" y1="176" x2="226" y2="176" stroke-width="3.4"/> <line x1="186" y1="212" x2="226" y2="212" stroke-width="3.4"/> <line x1="186" y1="262" x2="226" y2="262" stroke-width="3.4"/> <line x1="266" y1="182" x2="306" y2="182" stroke-width="3.4"/> <line x1="266" y1="238" x2="306" y2="238" stroke-width="3.4"/> <line x1="346" y1="170" x2="386" y2="170" stroke-width="3.4"/> <line x1="346" y1="224" x2="386" y2="224" stroke-width="3.4"/> <line x1="346" y1="272" x2="386" y2="272" stroke-width="3.4"/>  <line x1="110" y1="160" x2="110" y2="284" stroke-width="1.8"/> <path d="M104 278 L 110 286 L 116 278" stroke-width="1.8"/> <text x="98" y="176" font-size="10" text-anchor="end">large</text> <text x="98" y="280" font-size="10" text-anchor="end">small</text>  <text x="596" y="126" font-size="10" text-anchor="middle" font-weight="600">glycine is the switch</text> <text x="596" y="142" font-size="10" text-anchor="middle" class="dim">at pH 6.8 barely charged,</text> <text x="596" y="156" font-size="10" text-anchor="middle" class="dim">so it moves slowly and</text> <text x="596" y="170" font-size="10" text-anchor="middle" class="dim">proteins stack between</text> <text x="596" y="184" font-size="10" text-anchor="middle" class="dim">chloride and glycine</text> <text x="596" y="206" font-size="10" text-anchor="middle" class="dim">at pH 8.8 fully charged,</text> <text x="596" y="220" font-size="10" text-anchor="middle" class="dim">it overtakes them and</text> <text x="596" y="234" font-size="10" text-anchor="middle" class="dim">stacking collapses</text> </g> </svg>',
  svg_caption: { en: 'Two gels because separation needs every protein to start from the same line, and a loaded sample is a band millimetres deep. The stacking gel, large-pored and at pH 6.8, compresses that into a razor-thin band by isotachophoresis — glycine is barely charged there and moves slowly, so proteins pile up between the chloride and glycine fronts. In the resolving gel at pH 8.8 glycine becomes fully charged, overtakes them, stacking collapses, and the small pores separate by size.', cn: '要两层胶，是因为分离要求每个蛋白从同一条起跑线出发，而加进孔里的样品是几毫米厚的一层。大孔径、pH 6.8 的浓缩胶通过等速电泳把它压缩成极薄的一条带——甘氨酸在那里几乎不带电、走得慢，蛋白就堆在氯离子前沿与甘氨酸前沿之间。到了 pH 8.8 的分离胶，甘氨酸完全带电、超过它们，堆积瓦解，小孔径开始按大小分离。' },
  answer_en: 'Because **separation needs every protein to start from the same line**, and a sample loaded into a well is a band several millimetres deep.\n\n' +
             'The **stacking gel** is large-pore and at a **lower pH (~6.8)**. There, glycine from the running buffer is mostly uncharged and moves slowly, while chloride moves fast; the proteins are caught between these two fronts and get **compressed into a razor-thin band** — this is isotachophoresis. No separation happens here, only concentration.\n\n' +
             'The **resolving gel** is small-pore and at a **higher pH (~8.8)**. Glycine becomes fully charged, overtakes the proteins, and the stacking effect collapses. Now the proteins sieve through the small pores and separate by size.\n\n' +
             'One gel alone would give smeared bands, because proteins would start at every depth of the well.',
  answer_cn: '因为**分离要求每个蛋白从同一条起跑线出发**，而加进孔里的样品是好几毫米厚的一层。\n\n' +
             '**浓缩胶**孔径大、**pH 较低（约 6.8）**。在那里，电泳缓冲液中的甘氨酸大部分不带电、走得慢，而氯离子走得快；蛋白被夹在这两个前沿之间，被**压缩成极薄的一条带**——这就是等速电泳。这一层不发生分离，只做浓缩。\n\n' +
             '**分离胶**孔径小、**pH 较高（约 8.8）**。甘氨酸变为完全带电、超过蛋白，堆积效应随之瓦解。此时蛋白开始在小孔中筛分，按大小分离。\n\n' +
             '只用一层胶会得到拖尾的带，因为蛋白会从孔的各个深度分别出发。',
  followups: [
    { q_en: 'What would happen with only a resolving gel?',
      q_cn: '只有分离胶会怎样？',
      a_en: 'Bands would be broad and smeared, because proteins at the top and bottom of the well enter the gel at different times and therefore never line up.',
      a_cn: '条带会宽而拖尾，因为孔里上部和下部的蛋白进入胶的时间不同，因此永远对不齐。' },
    { q_en: 'Which component actually creates the stacking effect?',
      q_cn: '真正制造堆积效应的是哪个组分？',
      a_en: 'Glycine in the running buffer, because its charge depends on pH. It is slow at the stacking-gel pH and fast at the resolving-gel pH, and that switch is what starts and ends the stacking.',
      a_cn: '电泳缓冲液中的甘氨酸，因为它的带电状态取决于 pH。它在浓缩胶 pH 下慢、在分离胶 pH 下快，正是这个切换开启并终止了堆积。' }
  ],
  sourceNodes: ['1-7']
},

{
  id: 's2-lab-7-pcr-components',
  sheets: 'S2 Lab 7', weight: 2,
  stem_en: 'List the components of a PCR mixture and describe the role of each component.',
  stem_cn: '列出 PCR 体系的组分，并说明每个组分的作用。',
  answer_en: 'Six things.\n\n' +
             '**Template DNA** — the sequence to be copied.\n' +
             '**Two primers** — short oligonucleotides flanking the target, pointing towards each other. They define both ends of the product and set the annealing temperature, so primer design decides specificity.\n' +
             '**Thermostable DNA polymerase** — Taq or a high-fidelity enzyme; survives 95 °C so it need not be re-added each cycle.\n' +
             '**dNTPs** — the four building blocks, supplied in equal amounts; imbalance raises the error rate.\n' +
             '**Magnesium** — the polymerase cofactor, and it also stabilises primer-template pairing. This is the parameter to be able to justify: too little and the enzyme is slow, too much and you get mispriming and primer-dimers.\n' +
             '**Buffer** — sets pH and ionic strength.',
  answer_cn: '六样东西。\n\n' +
             '**模板 DNA**——要被复制的序列。\n' +
             '**两条引物**——位于目标两侧、相向而行的短寡核苷酸。它们定义产物两端并决定退火温度，所以引物设计决定特异性。\n' +
             '**耐热 DNA 聚合酶**——Taq 或高保真酶；能耐 95 °C，所以不必每轮补加。\n' +
             '**dNTP**——四种原料，等量供应；不平衡会提高错误率。\n' +
             '**镁离子**——聚合酶的辅因子，同时稳定引物-模板配对。这是最该讲出道理的参数：太少酶慢，太多则出现错配引发和引物二聚体。\n' +
             '**缓冲液**——设定 pH 和离子强度。',
  followups: [
    { q_en: 'Which component would you adjust first for non-specific bands?',
      q_cn: '出现非特异条带时，你会先调哪个组分？',
      a_en: 'Magnesium — lower it. Excess free magnesium stabilises imperfectly matched primers, so reducing it raises stringency. Raising the annealing temperature does the same thing.',
      a_cn: '镁——把它降低。过量的游离镁会稳定不完全匹配的引物，降低它就提高了严格性。提高退火温度也是同样的效果。' },
    { q_en: 'Why is the annealing temperature set by the primers rather than chosen freely?',
      q_cn: '为什么退火温度由引物决定，而不能随意选？',
      a_en: 'Because it is derived from the primers\' melting temperature, typically a few degrees below. Too low and they bind imperfect matches; too high and they do not bind at all.',
      a_cn: '因为它是从引物的熔解温度推出来的，通常低几度。太低引物会结合不完全匹配的位点，太高则根本不结合。' }
  ],
  sourceNodes: ['4-1']
},

{
  id: 's2-lab-8-proofreading',
  sheets: 'S2 Lab 8', weight: 2,
  stem_en: 'What is proofreading activity in DNA polymerases?',
  stem_cn: 'DNA 聚合酶的校对活性是什么？',
  answer_en: '**A 3-prime to 5-prime exonuclease activity built into the same enzyme, which removes a nucleotide that was just inserted incorrectly.**\n\n' +
             'Mechanism: a mismatched base pairs badly, which stalls extension; the primer terminus moves into the exonuclease site, the wrong base is excised, and synthesis resumes. It is a built-in correction step, not a separate repair pathway.\n\n' +
             'The consequence is fidelity. Taq has **no** proofreading and is relatively error-prone; high-fidelity enzymes such as Pfu or Kapa do have it and their error rates are orders of magnitude lower.\n\n' +
             'So the practical rule: use a proofreading enzyme for anything that will be cloned, expressed or sequenced, and Taq where you only ask whether a band is present.',
  answer_cn: '**一种整合在同一个酶里的 3\'→5\' 外切酶活性，把刚刚错误掺入的核苷酸切掉。**\n\n' +
             '机制：错配的碱基配对不良，使延伸停顿；引物末端移入外切酶位点，错误碱基被切除，随后合成继续。这是一个内建的纠错步骤，不是独立的修复通路。\n\n' +
             '后果是保真度。Taq **没有**校对活性，错误率相对较高；Pfu、Kapa 这类高保真酶有校对活性，错误率低几个数量级。\n\n' +
             '所以实用规则是：任何要拿去克隆、表达或测序的，用带校对活性的酶；只问「有没有条带」的，用 Taq。',
  followups: [
    { q_en: 'Why can a proofreading enzyme damage your primers?',
      q_cn: '为什么带校对活性的酶会破坏你的引物？',
      a_en: 'Because the same 3-prime to 5-prime exonuclease can chew back single-stranded primer ends if the reaction sits before cycling. That is why hot-start formats and prompt setup matter with these enzymes.',
      a_cn: '因为同一个 3\'→5\' 外切酶活性会在反应开始循环之前，把单链的引物末端啃掉。这就是为什么用这类酶时热启动格式和尽快上机很重要。' },
    { q_en: 'Does proofreading make PCR error-free?',
      q_cn: '有了校对活性，PCR 就没有错误了吗？',
      a_en: 'No — it lowers the rate by orders of magnitude but errors still occur, and any error in an early cycle is amplified into a large fraction of the final product.',
      a_cn: '不会——它把错误率降低几个数量级，但错误仍然发生；而且早期循环中的任何一个错误都会被扩增成最终产物中相当大的一部分。' }
  ],
  sourceNodes: ['4-1']
},

{
  id: 's2-lab-9-antibiotic-heat-stability',
  sheets: 'S2 Lab 9', weight: 2,
  stem_en: 'Which antibiotic is stable at room temperature and which one degrades with heat?',
  stem_cn: '哪种抗生素在室温下稳定？哪种遇热降解？',
  answer_en: '**Kanamycin is the heat-stable one; ampicillin is the one that degrades.**\n\n' +
             'Ampicillin\'s **beta-lactam ring is hydrolysable**, and it is destroyed both by heat and, more importantly in practice, by **beta-lactamase secreted by the resistant cells themselves**. Kanamycin, an aminoglycoside, has no such labile ring and tolerates warmth and longer storage.\n\n' +
             'This is not trivia — it explains **satellite colonies**. On an ampicillin plate, a resistant colony secretes beta-lactamase that clears the antibiotic in a halo around itself, and non-resistant cells then grow in that halo as small satellite colonies. You do not see satellites on kanamycin, because kanamycin resistance modifies the drug intracellularly rather than clearing it from the medium.\n\n' +
             'Neither should be autoclaved: both are added to cooled medium, filter-sterilised.',
  answer_cn: '**卡那霉素是耐热的那个；氨苄西林是会降解的那个。**\n\n' +
             '氨苄西林的 **β-内酰胺环可被水解**，它既被热破坏，而实际中更重要的是被**耐药细胞自己分泌的 β-内酰胺酶**破坏。卡那霉素属于氨基糖苷类，没有这种不稳定的环，能耐受温热和较长时间的保存。\n\n' +
             '这不是冷知识——它解释了**卫星菌落**。在氨苄平板上，一个耐药菌落分泌 β-内酰胺酶，在自己周围清出一圈没有抗生素的晕，非耐药细胞就在那圈里长成小小的卫星菌落。卡那霉素上看不到卫星菌落，因为卡那霉素耐药是在胞内修饰药物，而不是把它从培养基里清除掉。\n\n' +
             '两者都不能高压灭菌：都要过滤除菌后加入已冷却的培养基。',
  followups: [
    { q_en: 'Why do satellite colonies appear on ampicillin but not kanamycin?',
      q_cn: '为什么卫星菌落出现在氨苄上而不是卡那上？',
      a_en: 'Because beta-lactamase is secreted and destroys the drug in the surrounding medium, creating a drug-free zone. Kanamycin resistance modifies the drug inside the cell, so the medium stays selective.',
      a_cn: '因为 β-内酰胺酶是分泌出来的，会破坏周围培养基里的药物，形成一个无药区。卡那霉素耐药是在细胞内修饰药物，所以培养基仍然保持选择性。' },
    { q_en: 'How do you avoid satellite colonies?',
      q_cn: '怎么避免卫星菌落？',
      a_en: 'Pick colonies early before satellites develop, use fresh plates, and do not over-incubate. Streaking to a fresh selective plate also resolves it.',
      a_cn: '在卫星菌落长出来之前尽早挑菌，用新鲜平板，不要过度培养。划线到一块新的选择性平板上也能解决。' }
  ],
  sourceNodes: ['2-1']
},

{
  id: 's2-lab-10-edta-guanidine',
  sheets: 'S2 Lab 10', weight: 2,
  stem_en: 'Describe the procedure for preparing 1M EDTA and 6M guanidine hydrochloride. What precautions should be taken and how to proceed?',
  stem_cn: '描述配制 1 M EDTA 和 6 M 盐酸胍的步骤。需要注意什么？怎么操作？',
  answer_en: 'Both are the same arithmetic — mass = molarity × volume × molecular weight — but each has one non-obvious trap.\n\n' +
             '**1 M EDTA**: the trap is that **EDTA free acid does not dissolve until the pH is raised to about 8.0**. So add the powder to most of the final volume, then add NaOH while stirring; it goes into solution as the pH climbs. Adjust to pH 8.0, make up to volume, then autoclave.\n\n' +
             '**6 M guanidine hydrochloride**: the trap is **volume**. 6 M is a very high concentration and the solid takes up a lot of space, so you must dissolve it in a smaller starting volume and **make up to the final volume afterwards** — never add solvent to a fixed volume first. Dissolution is also strongly endothermic, so it goes cold and dissolves slowly; gentle warming helps. It is a chaotrope, so wear gloves and eye protection, and it must **not** be mixed with bleach.\n\n' +
             'General: always make up to final volume in a graduated vessel rather than adding a calculated volume of solvent.',
  answer_cn: '两者的算法相同——质量 = 摩尔浓度 × 体积 × 分子量——但各有一个不显然的坑。\n\n' +
             '**1 M EDTA**：坑在于 **EDTA 游离酸要把 pH 升到约 8.0 才溶得开**。所以先把粉末加进接近终体积的水里，一边搅拌一边加 NaOH；随着 pH 升高它就溶解了。调到 pH 8.0，定容，然后高压灭菌。\n\n' +
             '**6 M 盐酸胍**：坑在于**体积**。6 M 是很高的浓度，固体本身占很大体积，所以必须先用较小的起始体积溶解，**之后再定容**——绝不能先取固定体积的溶剂再加固体。溶解还强烈吸热，溶液会变冷、溶得很慢，轻微加温有帮助。它是离液剂，要戴手套和护目镜，而且**不能**与漂白剂混合。\n\n' +
             '通则：永远在有刻度的容器里定容，而不是加入一个算出来的溶剂体积。',
  followups: [
    { q_en: 'Why does EDTA need NaOH to dissolve?',
      q_cn: '为什么 EDTA 需要加 NaOH 才能溶解？',
      a_en: 'Because the free acid form is poorly soluble. Raising the pH deprotonates the carboxyl groups, making the molecule charged and therefore soluble.',
      a_cn: '因为游离酸形式溶解度很低。升高 pH 使羧基去质子化，分子带上电荷，因而变得可溶。' },
    { q_en: 'Why does 6 M guanidine have to be made up to volume rather than dissolved in the full volume?',
      q_cn: '为什么 6 M 盐酸胍必须定容，而不能直接溶在全量溶剂里？',
      a_en: 'Because the solute itself occupies substantial volume at that concentration. Dissolving it in the full final volume of water gives a solution well below 6 M.',
      a_cn: '因为在那个浓度下溶质本身占据可观的体积。把它溶在足量的水里，得到的溶液浓度会明显低于 6 M。' }
  ],
  sourceNodes: ['1-1']
},

{
  id: 's2-micro-11-growth-curve',
  sheets: 'S2 Micro 11 · S3 Micro 13', weight: 2,
  stem_en: 'Describe the bacterial growth curve.',
  stem_cn: '描述细菌生长曲线。',
  svg: '<svg viewBox="0 0 720 330" role="img" aria-label="Bacterial growth curve, four phases"> <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"> <line x1="80" y1="270" x2="680" y2="270" stroke-width="2"/> <line x1="80" y1="30"  x2="80"  y2="270" stroke-width="2"/> <text x="46" y="150" font-size="12" text-anchor="middle" transform="rotate(-90 46 150)">log cell number</text> <text x="380" y="302" font-size="12" text-anchor="middle">time · 时间</text>  <path d="M80 232 L 180 230 C 230 228 250 200 275 165 L 360 70 C 380 48 400 42 430 40 L 560 40 C 600 40 620 60 660 120" stroke-width="2.6"/>  <line x1="180" y1="30" x2="180" y2="270" stroke-dasharray="3 5" class="dim"/> <line x1="360" y1="30" x2="360" y2="270" stroke-dasharray="3 5" class="dim"/> <line x1="560" y1="30" x2="560" y2="270" stroke-dasharray="3 5" class="dim"/>  <text x="130" y="258" font-size="12" text-anchor="middle" font-weight="600">Lag</text> <text x="130" y="20"  font-size="10" text-anchor="middle" class="dim">延滞期</text> <text x="270" y="258" font-size="12" text-anchor="middle" font-weight="600">Exponential</text> <text x="270" y="20"  font-size="10" text-anchor="middle" class="dim">指数期</text> <text x="460" y="258" font-size="12" text-anchor="middle" font-weight="600">Stationary</text> <text x="460" y="20"  font-size="10" text-anchor="middle" class="dim">稳定期</text> <text x="620" y="258" font-size="12" text-anchor="middle" font-weight="600">Death</text> <text x="620" y="20"  font-size="10" text-anchor="middle" class="dim">衰亡期</text>  <text x="130" y="200" font-size="10" text-anchor="middle" class="dim">no division,</text> <text x="130" y="213" font-size="10" text-anchor="middle" class="dim">enzymes made</text> <text x="285" y="120" font-size="10" class="dim">constant doubling time</text> <text x="460" y="66"  font-size="10" text-anchor="middle" class="dim">division = death</text>  <circle cx="318" cy="118" r="6" stroke-width="2.2"/> <line x1="318" y1="118" x2="318" y2="152"/> <text x="318" y="172" font-size="11" text-anchor="middle" font-weight="600">induce here</text> <text x="318" y="186" font-size="10" text-anchor="middle" class="dim">在此诱导</text> </g> </svg>',
  svg_caption: { en: 'Four phases. Lag is not inactivity — cell number is flat while enzymes and ribosomes for the new medium are made. Exponential is the only phase with a meaningful growth rate and the phase to harvest or induce in, because the population is physiologically uniform. Stationary is division balanced by death. Then decline.', cn: '四个阶段。延滞期不是不活动——细胞数持平，同时在合成适应新培养基的酶和核糖体。指数期是唯一「生长速率」有意义的阶段，也是取样或诱导的阶段，因为群体在生理上均一。稳定期是分裂与死亡相抵。然后是衰亡。' },
  answer_en: 'Four phases, plotted as log cell number against time.\n\n' +
             '**Lag** — no increase in number. The cells are not idle: they are synthesising the enzymes and ribosomes needed for the new medium. Its length depends on how different the new conditions are from the old.\n\n' +
             '**Exponential (log)** — constant doubling time, the only phase where growth rate is a meaningful number, and the phase from which you harvest for most experiments because the population is physiologically uniform.\n\n' +
             '**Stationary** — division rate equals death rate, so the count plateaus. Caused by nutrient exhaustion or waste accumulation. Cells here are physiologically different: stress responses on, and this is when many secondary metabolites are made.\n\n' +
             '**Death** — viable count falls, usually exponentially.\n\n' +
             'For protein expression you induce in **mid-exponential phase**, because that is when the machinery is most active and the population most uniform.',
  answer_cn: '四个阶段，以细胞数的对数对时间作图。\n\n' +
             '**延滞期**——数量不增加。细胞并不闲着：它们在合成适应新培养基所需的酶和核糖体。它的长短取决于新旧条件差异有多大。\n\n' +
             '**指数期（对数期）**——倍增时间恒定，是唯一能让「生长速率」成为有意义数值的阶段，也是大多数实验取样的阶段，因为此时群体在生理上是均一的。\n\n' +
             '**稳定期**——分裂速率等于死亡速率，计数进入平台。原因是营养耗尽或废物积累。此时细胞在生理上已经不同：应激反应开启，许多次级代谢产物在这个阶段合成。\n\n' +
             '**衰亡期**——活菌数下降，通常呈指数式。\n\n' +
             '做蛋白表达要在**指数中期**诱导，因为那时机器最活跃、群体最均一。',
  followups: [
    { q_en: 'Why induce in mid-exponential rather than stationary phase?',
      q_cn: '为什么在指数中期诱导，而不是稳定期？',
      a_en: 'Because transcription and translation capacity is highest there and the population is uniform. In stationary phase the machinery is being dismantled and stress proteases are up.',
      a_cn: '因为那时转录和翻译能力最高，群体也均一。稳定期里机器正在被拆解，应激蛋白酶也上调了。' },
    { q_en: 'Is the lag phase a period of inactivity?',
      q_cn: '延滞期是不活动的时期吗？',
      a_en: 'No — cell number is flat but biosynthesis is intense. The cells are building what the new environment requires before they can divide.',
      a_cn: '不是——细胞数持平，但生物合成很活跃。细胞在分裂之前，先要造出新环境所需要的东西。' }
  ],
  sourceNodes: ['1-8', '2-1']
},

{
  id: 's2-micro-12-carl-woese',
  sheets: 'S2 Micro 12', weight: 2,
  stem_en: 'What was discovered by Carl C. Woese?',
  stem_cn: 'Carl C. Woese 发现了什么？',
  answer_en: '**He discovered the Archaea, and with them the three-domain tree of life.**\n\n' +
             'The method is as important as the result: he compared **16S ribosomal RNA sequences** rather than morphology or physiology. Before this, microbial classification had no reliable basis, because microbes look alike and phenotype is a poor guide to relatedness.\n\n' +
             'What he found was that organisms then classified as bacteria fell into **two deeply separate groups**, as different from each other as either was from eukaryotes. So life was reorganised into **Bacteria, Archaea and Eukarya** rather than the old prokaryote/eukaryote split.\n\n' +
             'The lasting consequence is methodological: **molecular sequence became the basis of phylogeny**, which is why 16S is still the standard for identifying bacteria today.',
  answer_cn: '**他发现了古菌（Archaea），并由此提出了三域生命树。**\n\n' +
             '方法和结论一样重要：他比较的是 **16S 核糖体 RNA 序列**，而不是形态或生理。在此之前微生物分类没有可靠依据，因为微生物长得都差不多，表型也不能很好地反映亲缘关系。\n\n' +
             '他发现的是：当时被归为细菌的生物其实分成**两个深度分离的类群**，它们彼此之间的差异，不亚于各自与真核生物之间的差异。于是生命被重新划分为**细菌域、古菌域和真核域**，取代了旧的原核/真核二分法。\n\n' +
             '持久的影响在方法层面：**分子序列成为系统发育的依据**，这也是为什么 16S 至今仍是鉴定细菌的标准。',
  followups: [
    { q_en: 'Why 16S rRNA rather than a protein?',
      q_cn: '为什么用 16S rRNA 而不是某个蛋白？',
      a_en: 'Because it is universal, essential, and evolves slowly enough to compare very distant organisms while still containing variable regions. A molecular chronometer present in everything alive.',
      a_cn: '因为它普遍存在、功能必需，而且进化得足够慢，可以比较非常远缘的生物，同时又含有可变区。它是一台存在于所有生物体内的分子时钟。' },
    { q_en: 'What made Archaea so surprising?',
      q_cn: '古菌为什么这么令人意外？',
      a_en: 'They look like bacteria under a microscope and have no nucleus, so they had always been counted as bacteria. Their sequences showed they are a separate domain, and in some features closer to eukaryotes.',
      a_cn: '它们在显微镜下看起来就是细菌，也没有细胞核，所以一直被算作细菌。序列却显示它们是一个独立的域，而且在某些特征上更接近真核生物。' }
  ]
},

{
  id: 's2-micro-13-polycistronic-mrna',
  sheets: 'S2 Micro 13', weight: 2,
  stem_en: 'What is polycistronic mRNA?',
  stem_cn: '什么是多顺反子 mRNA？',
  answer_en: '**A single mRNA molecule that encodes more than one protein.**\n\n' +
             'It is characteristic of **prokaryotes** and is the physical basis of the operon: several genes with related functions are transcribed together from one promoter into one transcript, and each has its own **ribosome binding site**, so ribosomes initiate independently at each start codon.\n\n' +
             'The point is coordinated regulation — one switch controls the whole set, which is exactly what the lac operon does for lactose metabolism.\n\n' +
             '**Eukaryotic mRNA is monocistronic**: one transcript, one protein, because eukaryotic initiation works by cap-binding and scanning from the 5-prime end rather than by internal ribosome binding sites. This is why expressing a bacterial operon in a eukaryote does not simply work.',
  answer_cn: '**一条 mRNA 分子编码不止一个蛋白。**\n\n' +
             '它是**原核生物**的特征，也是操纵子的物理基础：若干功能相关的基因由一个启动子一起转录成一条转录本，每个基因各有自己的**核糖体结合位点**，所以核糖体在每个起始密码子处独立起始。\n\n' +
             '要点是协同调控——一个开关控制整组基因，lac 操纵子对乳糖代谢做的正是这件事。\n\n' +
             '**真核 mRNA 是单顺反子的**：一条转录本一个蛋白，因为真核起始靠帽子结合并从 5\' 端扫描，而不是靠内部的核糖体结合位点。这也是为什么把细菌的操纵子放进真核细胞里表达不会直接奏效。',
  followups: [
    { q_en: 'How does a ribosome find the second gene on a polycistronic message?',
      q_cn: '核糖体怎么找到多顺反子信使上的第二个基因？',
      a_en: 'By its own Shine-Dalgarno sequence upstream of that gene\'s start codon. Each cistron has one, so initiation is independent rather than sequential.',
      a_cn: '靠该基因起始密码子上游自己的 Shine-Dalgarno 序列。每个顺反子都有一个，所以起始是各自独立的，而不是依次进行的。' },
    { q_en: 'What is the advantage of bundling genes this way?',
      q_cn: '这样把基因捆在一起有什么好处？',
      a_en: 'Stoichiometric, coordinated expression: all the enzymes of one pathway appear together in response to one signal, with no need for separate regulation of each gene.',
      a_cn: '按比例的协同表达：一条通路的所有酶随一个信号一起出现，不需要对每个基因分别调控。' }
  ],
  sourceNodes: ['3-2']
},

{
  id: 's2-micro-14-promoters-pro-vs-euk',
  sheets: 'S2 Micro 14', weight: 2,
  stem_en: 'What is the difference between bacterial and eukaryotic promoters?',
  stem_cn: '细菌启动子和真核启动子有什么区别？',
  answer_en: 'The difference is **how much machinery is needed to recognise them**.\n\n' +
             'A **bacterial promoter** is compact and recognised directly: two conserved elements at roughly **-10 and -35** upstream of the start site, read by the **sigma factor** of RNA polymerase holoenzyme. One protein complex, one recognition event, transcription starts. Swapping sigma factors is how bacteria switch whole gene sets on.\n\n' +
             'A **eukaryotic promoter** is modular and recognised indirectly. A core promoter — often a **TATA box** — is bound not by RNA polymerase II itself but by **general transcription factors** that assemble a pre-initiation complex and then recruit the polymerase. Regulation is spread over **enhancers** that may sit thousands of bases away and act through DNA looping, and everything happens in the context of **chromatin**, so accessibility is itself a layer of control.\n\n' +
             'Practical consequence: a bacterial promoter does not work in a eukaryotic cell or the reverse, which is why expression vectors are host-specific.',
  answer_cn: '区别在于**识别它们需要多少机器**。\n\n' +
             '**细菌启动子**紧凑且被直接识别：在起始位点上游大约 **-10 和 -35** 处有两段保守元件，由 RNA 聚合酶全酶的 **sigma 因子**读取。一个蛋白复合物、一次识别事件，转录就开始了。更换 sigma 因子正是细菌整组开启基因的方式。\n\n' +
             '**真核启动子**是模块化的，且被间接识别。核心启动子——常常是 **TATA 盒**——结合的不是 RNA 聚合酶 II 本身，而是**通用转录因子**，它们组装出前起始复合物再招募聚合酶。调控分散在可能远在数千碱基之外、通过 DNA 成环起作用的**增强子**上，而且这一切都发生在**染色质**背景下，所以可及性本身就是一层控制。\n\n' +
             '实际后果：细菌启动子在真核细胞里不工作，反之亦然——这就是表达载体必须与宿主匹配的原因。',
  followups: [
    { q_en: 'What does a sigma factor actually do?',
      q_cn: 'sigma 因子到底做什么？',
      a_en: 'It gives RNA polymerase its promoter specificity. The core enzyme can polymerise but cannot recognise a promoter; sigma binds the -10 and -35 elements and positions the enzyme correctly.',
      a_cn: '它赋予 RNA 聚合酶识别启动子的特异性。核心酶能聚合但不能识别启动子；sigma 结合 -10 和 -35 元件并把酶正确定位。' },
    { q_en: 'Why can an enhancer work from thousands of bases away?',
      q_cn: '增强子为什么能在几千碱基之外起作用？',
      a_en: 'Because DNA loops. The bound activators are brought physically next to the promoter complex despite being distant in sequence, so distance along the molecule is not distance in space.',
      a_cn: '因为 DNA 会成环。结合在增强子上的激活因子虽然在序列上很远，却被物理地带到启动子复合物旁边——沿分子的距离并不等于空间上的距离。' }
  ],
  sourceNodes: ['1-11']
},

{
  id: 's2-micro-15-auxotrophy',
  sheets: 'S2 Micro 15', weight: 2,
  stem_en: 'What is auxotrophy?',
  stem_cn: '什么是营养缺陷型？',
  answer_en: '**An auxotroph is an organism that cannot synthesise a compound it needs, so that compound must be supplied in the medium.** The opposite is a prototroph, which grows on minimal medium.\n\n' +
             'It arises from a mutation that inactivates one enzyme in a biosynthetic pathway — for example a leucine auxotroph cannot make leucine and only grows if leucine is added.\n\n' +
             'Why it matters in the laboratory: auxotrophy is a **selectable marker without antibiotics**. Yeast work depends on this — a strain deleted for LEU2 or URA3 is transformed with a plasmid carrying the working gene, and only transformants grow on medium lacking that nutrient.\n\n' +
             'It is also the basis of the **yeast two-hybrid readout**, where an interaction switches on HIS3 and the cells grow on medium lacking histidine — which turns the assay into a selection rather than a screen.',
  answer_cn: '**营养缺陷型是指不能自己合成某种所需化合物、必须由培养基提供该化合物的生物。**它的反面是原养型，能在基本培养基上生长。\n\n' +
             '它源于某个突变使生物合成途径中的一个酶失活——例如亮氨酸缺陷型不能合成亮氨酸，只有加了亮氨酸才能长。\n\n' +
             '它在实验室里的意义：营养缺陷是一种**不用抗生素的选择标记**。酵母工作就依赖这一点——把缺失 LEU2 或 URA3 的菌株用携带该功能基因的质粒转化，只有转化子才能在缺该营养的培养基上生长。\n\n' +
             '它也是**酵母双杂交读数**的基础：相互作用打开 HIS3，细胞就能在缺组氨酸的培养基上生长——这把该实验从逐个筛查变成了选择。',
  followups: [
    { q_en: 'Why is auxotrophic selection preferred over antibiotics in yeast?',
      q_cn: '酵母里为什么更常用营养缺陷选择而不是抗生素？',
      a_en: 'It is cheap, stable, and the marker cannot be inactivated by a secreted enzyme the way beta-lactamase clears ampicillin. Several different auxotrophies also let you select for several plasmids at once.',
      a_cn: '它便宜、稳定，而且这个标记不会像 β-内酰胺酶清除氨苄那样被分泌酶灭活。用几种不同的营养缺陷，还能同时选择多个质粒。',
      node: '4-2' },
    { q_en: 'How would you test whether a strain is auxotrophic for something?',
      q_cn: '怎么检验一个菌株是不是某种营养缺陷型？',
      a_en: 'Replica plate onto minimal medium with and without that nutrient. Growth only on the supplemented plate confirms the auxotrophy.',
      a_cn: '影印接种到加与不加该营养的基本培养基上。只有在补加的平板上长，就确认了这种营养缺陷。' }
  ]
},

{
  id: 's2-micro-16-de3-cassette',
  sheets: 'S2 Micro 16', weight: 2,
  stem_en: 'What is the DE3 cassette and how does it work?',
  stem_cn: '什么是 DE3 盒？它是怎么工作的？',
  answer_en: '**DE3 is a lambda prophage integrated into the E. coli chromosome that carries the gene for T7 RNA polymerase under a lacUV5 promoter.** It is what makes a strain compatible with pET vectors.\n\n' +
             'How it works, as two levels. Your plasmid carries the gene of interest under a **T7 promoter**, which the host\'s own RNA polymerase cannot read at all. Adding **IPTG** relieves LacI repression at the lacUV5 promoter, so the cell makes **T7 RNA polymerase**, and only then is your gene transcribed.\n\n' +
             'The advantages follow from that architecture: T7 polymerase is fast and highly processive, and it reads only T7 promoters, so nearly all transcription becomes your gene. **Practical rule: look for (DE3) in the strain name — no DE3, no T7 polymerase, and a pET plasmid produces nothing.**',
  answer_cn: '**DE3 是整合到大肠杆菌染色体上的一个 lambda 原噬菌体，携带受 lacUV5 启动子控制的 T7 RNA 聚合酶基因。**正是它让一个菌株能配 pET 载体使用。\n\n' +
             '工作方式分两层。你的质粒把目的基因放在 **T7 启动子**之下，而宿主自己的 RNA 聚合酶根本读不了它。加入 **IPTG** 解除 LacI 对 lacUV5 启动子的阻遏，细胞于是产生 **T7 RNA 聚合酶**，此时你的基因才被转录。\n\n' +
             '优点由这套架构而来：T7 聚合酶快而且持续合成能力强，并且只读 T7 启动子，所以几乎全部转录都变成了你的基因。**实用规则：看菌株名字里有没有 (DE3)——没有 DE3 就没有 T7 聚合酶，pET 质粒什么也产不出来。**',
  followups: [
    { q_en: 'Why put the polymerase gene on the chromosome instead of a plasmid?',
      q_cn: '为什么把聚合酶基因放在染色体上而不是质粒上？',
      a_en: 'Stability. A chromosomal copy is not lost without selection, does not consume a plasmid and a resistance marker, and cannot compete for an origin with your expression plasmid.',
      a_cn: '稳定性。染色体上的拷贝不会因为没有选择压力而丢失，不占用一个质粒和一个抗性标记，也不会和你的表达质粒抢复制起点。',
      node: '1-12' },
    { q_en: 'Your uninduced culture already expresses some protein. Why, and what helps?',
      q_cn: '未诱导的培养物已经有一些表达了，为什么？怎么办？',
      a_en: 'Leaky basal expression from lacUV5. Add glucose to strengthen catabolite repression, or use a strain carrying T7 lysozyme, which inhibits any T7 polymerase made before induction.',
      a_cn: 'lacUV5 的渗漏本底表达。加葡萄糖以加强分解代谢物阻遏，或者用携带 T7 溶菌酶的菌株——它会抑制诱导前产生的 T7 聚合酶。',
      node: '1-12' }
  ],
  sourceNodes: ['1-12', '3-2']
},

{
  id: 's2-micro-18-types-of-cloning',
  sheets: 'S2 Micro 18', weight: 2,
  stem_en: 'List at least three types of cloning.',
  stem_cn: '列出至少三种克隆方法。',
  answer_en: 'Group them by **what makes the join**, because that is the real distinction.\n\n' +
             '**Restriction-ligation (classical)** — restriction enzymes cut vector and insert to give compatible ends, ligase seals them. Simple, but the insert must lack internal sites and a scar is left.\n\n' +
             '**Golden Gate** — uses **type IIS** enzymes, which cut **outside** their recognition site, so the overhang can be any sequence you choose. That allows seamless, scarless assembly of many fragments in one reaction.\n\n' +
             '**Gibson assembly** — no restriction enzyme touches the insert at all. Fragments share homologous overlapping ends; an exonuclease chews back, they anneal, polymerase fills and ligase seals, in one isothermal reaction.\n\n' +
             'Others worth naming: **TA/TOPO cloning**, exploiting the single A overhang Taq leaves; **Gateway**, using phage lambda site-specific recombination; and **restriction-free (RF) cloning**, which uses a megaprimer.',
  answer_cn: '按**靠什么形成接口**来分组，因为那才是真正的区别。\n\n' +
             '**限制酶-连接（经典法）**——用限制酶切载体和插入片段产生兼容末端，连接酶封上。简单，但插入片段内部不能有相同位点，而且会留下疤痕序列。\n\n' +
             '**Golden Gate**——使用 **IIS 型**酶，它们在识别位点**之外**切割，所以突出末端可以是你自己选的任意序列。这使得多片段无缝、无疤痕地一步组装成为可能。\n\n' +
             '**Gibson 组装**——完全没有限制酶接触插入片段。片段之间有同源重叠末端；外切酶回切、退火、聚合酶补平、连接酶封口，在一个等温反应中完成。\n\n' +
             '其它值得点名的：**TA/TOPO 克隆**，利用 Taq 留下的单 A 突出；**Gateway**，利用噬菌体 lambda 的位点特异重组；以及 **限制酶非依赖（RF）克隆**，用的是 megaprimer。',
  followups: [
    { q_en: 'Your insert contains an internal EcoRI site. Which methods still work?',
      q_cn: '你的插入片段内部有一个 EcoRI 位点，哪些方法还能用？',
      a_en: 'Gibson, LIC and RF cloning, because no restriction enzyme touches the insert. Golden Gate would need the internal type IIS sites removed by silent mutation first.',
      a_cn: 'Gibson、LIC 和 RF 克隆，因为没有限制酶接触插入片段。Golden Gate 则需要先用同义突变去掉内部的 IIS 型位点。' },
    { q_en: 'What makes type IIS enzymes special?',
      q_cn: 'IIS 型酶特别在哪里？',
      a_en: 'They cut at a defined distance outside their recognition sequence, so the overhang sequence is yours to design and the recognition site is removed from the final product.',
      a_cn: '它们在识别序列之外一段确定距离处切割，所以突出末端的序列由你设计，而识别位点在最终产物里被去掉了。' }
  ]
},

{
  id: 's2-micro-19-ecoli-cloning-strains',
  sheets: 'S2 Micro 19', weight: 2,
  stem_en: 'Name at least two strains of E. coli suitable for cloning and explain how they differ.',
  stem_cn: '说出至少两种适合克隆的大肠杆菌菌株，并解释它们的区别。',
  answer_en: 'Cloning strains are selected for **DNA stability and transformation efficiency**, not for expression — that is the distinction the question is really testing.\n\n' +
             '**DH5-alpha** is the general workhorse. Its important genotype features are **recA1**, which removes homologous recombination so repeated sequences in your plasmid are not rearranged, and **endA1**, which removes an endonuclease that would otherwise degrade plasmid during miniprep. It also carries lacZ-delta-M15 for blue-white screening.\n\n' +
             '**XL10-Gold or TOP10-type strains** are chosen when efficiency or difficult DNA is the problem — very high competence for large constructs or ligation mixes, and additional mutations that tolerate methylated DNA.\n\n' +
             'The general rule: a cloning strain is **recA-minus and endA-minus**; an expression strain is **(DE3) and protease-deficient**. Using one for the other job is the mistake.',
  answer_cn: '克隆菌株的选择标准是 **DNA 稳定性和转化效率**，而不是表达——这正是这道题真正在考的区分。\n\n' +
             '**DH5-alpha** 是通用主力。它基因型里重要的两点是 **recA1**，去掉了同源重组，使质粒里的重复序列不会被重排；以及 **endA1**，去掉了一种内切酶，否则它会在小提过程中降解质粒。它还带有 lacZ-ΔM15 用于蓝白斑筛选。\n\n' +
             '**XL10-Gold 或 TOP10 一类的菌株**，用在效率或「难搞的 DNA」成为问题的时候——对大构建或连接产物有很高的感受态效率，还带有能耐受甲基化 DNA 的额外突变。\n\n' +
             '通则：克隆菌株是 **recA⁻、endA⁻**；表达菌株是 **(DE3) 且蛋白酶缺陷**。把其中一类拿去干另一类的活，就是那个典型错误。',
  followups: [
    { q_en: 'Why does recA-minus matter for a plasmid with repeated sequences?',
      q_cn: '对含重复序列的质粒来说，recA⁻ 为什么重要？',
      a_en: 'RecA drives homologous recombination, so a plasmid with internal repeats can recombine with itself and delete the region between them. A recA-minus host preserves the construct as designed.',
      a_cn: 'RecA 驱动同源重组，所以带内部重复的质粒会自己和自己重组，把两段重复之间的区域删掉。recA⁻ 宿主能保持构建与设计一致。',
      node: '1-9' },
    { q_en: 'Can you express protein in DH5-alpha?',
      q_cn: '能在 DH5-alpha 里表达蛋白吗？',
      a_en: 'Only from a host-polymerase promoter, and poorly. It has no DE3, so a T7-based pET vector produces nothing at all, and it is not protease-deficient.',
      a_cn: '只能用宿主聚合酶识别的启动子，而且效果差。它没有 DE3，所以基于 T7 的 pET 载体什么都产不出来，而且它也不是蛋白酶缺陷株。' }
  ],
  sourceNodes: ['1-9', '1-12']
},

{
  id: 's2-micro-20-ecoli-expression-strains',
  sheets: 'S2 Micro 20 · S1 Lab 5', weight: 3,
  stem_en: 'Name at least two strains of E. coli suitable for protein expression and explain how they differ.',
  stem_cn: '说出至少两种适合蛋白表达的大肠杆菌菌株，并解释它们的区别。',
  answer_en: 'Expression strains are selected for **carrying T7 polymerase and for protecting the product**.\n\n' +
             '**BL21(DE3)** is the baseline. **(DE3)** means it carries the T7 RNA polymerase gene, so it works with pET vectors; and it is **deficient in the Lon and OmpT proteases**, so your product is less likely to be degraded.\n\n' +
             '**Rosetta-type strains** add tRNAs for codons that are rare in E. coli, which rescues expression of eukaryotic genes that would otherwise stall the ribosome.\n\n' +
             '**Origami or SHuffle-type strains** have an engineered, less reducing cytoplasm so that **disulfide bonds can form** — needed for proteins that are otherwise insoluble or misfolded.\n\n' +
             'So the differences map onto three distinct problems: **can it transcribe your gene at all (DE3), can it translate it (rare codons), and can it fold it (disulfides)** — plus protease protection throughout.',
  answer_cn: '表达菌株的选择标准是**是否携带 T7 聚合酶、以及能否保护产物**。\n\n' +
             '**BL21(DE3)** 是基准。**(DE3)** 表示它携带 T7 RNA 聚合酶基因，因而能配 pET 载体；而且它**缺失 Lon 和 OmpT 蛋白酶**，所以产物不容易被降解。\n\n' +
             '**Rosetta 一类的菌株**额外提供大肠杆菌稀有密码子对应的 tRNA，从而挽救那些否则会让核糖体停顿的真核基因的表达。\n\n' +
             '**Origami 或 SHuffle 一类的菌株**具有经过改造、还原性较弱的胞质，使**二硫键能够形成**——这对那些否则不可溶或错误折叠的蛋白是必需的。\n\n' +
             '所以这些差别对应三个不同的问题：**能不能转录你的基因（DE3）、能不能翻译它（稀有密码子）、能不能折叠它（二硫键）**——外加全程的蛋白酶保护。',
  followups: [
    { q_en: 'How do you tell from the name whether a strain works with pET?',
      q_cn: '光看名字怎么判断一个菌株能不能配 pET？',
      a_en: 'Look for (DE3). Without it there is no T7 RNA polymerase, and a T7 promoter on your plasmid is never read.',
      a_cn: '看有没有 (DE3)。没有它就没有 T7 RNA 聚合酶，你质粒上的 T7 启动子永远不会被读。',
      node: '1-12' },
    { q_en: 'Why would rare codons be a problem at all?',
      q_cn: '稀有密码子为什么会成为问题？',
      a_en: 'Because the matching tRNA is scarce, so the ribosome stalls waiting for it — giving low yield, truncated products and frameshifting. Supplying those tRNAs, or codon-optimising the gene, both fix it.',
      a_cn: '因为对应的 tRNA 很少，核糖体会停下来等它——结果是产量低、产物截短、以及移码。补上这些 tRNA，或者对基因做密码子优化，都能解决。' }
  ],
  sourceNodes: ['1-9', '1-12', '1-14']
},

{
  id: 's2-bio-22-propeptide',
  sheets: 'S2 Bio 22', weight: 2,
  stem_en: 'Explain the term "propeptide".',
  stem_cn: '解释「propeptide（前肽）」这个术语。',
  answer_en: '**A propeptide is a segment of a newly synthesised protein that is removed by proteolysis to give the mature, active protein.** The precursor carrying it is a proprotein or zymogen.\n\n' +
             'It exists so that **activity can be separated in time and place from synthesis**. A protease made active in the cell that built it would digest that cell, so it is made as an inactive zymogen and cleaved only where it should work — trypsinogen to trypsin in the gut is the classic example.\n\n' +
             'Propeptides also serve as **intramolecular chaperones**: in some proteases the propeptide is required for the enzyme to fold correctly, and only then is it cut away.\n\n' +
             'Insulin is the standard example to name: **preproinsulin** loses its signal peptide to give **proinsulin**, and removal of the **C-peptide** gives mature insulin — which is why C-peptide levels report endogenous insulin production.',
  answer_cn: '**前肽是新合成蛋白中的一段序列，通过蛋白水解被切除后得到成熟、有活性的蛋白。**带着它的前体叫前体蛋白或酶原。\n\n' +
             '它存在的意义是**把活性在时间和空间上与合成分开**。一个在合成它的细胞里就有活性的蛋白酶会把那个细胞消化掉，所以它以无活性的酶原形式合成，只在该起作用的地方被切开——胰蛋白酶原在肠道中变成胰蛋白酶就是经典例子。\n\n' +
             '前肽还充当**分子内伴侣**：某些蛋白酶必须有前肽才能正确折叠，折叠完成之后前肽才被切掉。\n\n' +
             '要点名的标准例子是胰岛素：**前胰岛素原**先失去信号肽变成**胰岛素原**，再切除 **C 肽**得到成熟胰岛素——这也是为什么 C 肽水平能反映内源胰岛素的产生。',
  followups: [
    { q_en: 'What is the difference between a propeptide and a signal peptide?',
      q_cn: '前肽和信号肽有什么区别？',
      a_en: 'A signal peptide is an N-terminal address label removed during translocation into the ER. A propeptide is removed later and controls activity, not destination.',
      a_cn: '信号肽是 N 端的地址标签，在转运进内质网的过程中被切除。前肽切除得更晚，控制的是活性而不是去向。' },
    { q_en: 'Why is C-peptide measured clinically?',
      q_cn: '临床上为什么要测 C 肽？',
      a_en: 'Because it is released in equal amounts with endogenous insulin but is absent from injected insulin, so it distinguishes the patient\'s own production from the administered drug.',
      a_cn: '因为它与内源胰岛素等量释放，而注射用胰岛素里没有它，所以它能把病人自身的分泌与外源给药区分开。' }
  ]
},

{
  id: 's2-bio-23-signal-peptide',
  sheets: 'S2 Bio 23', weight: 2,
  stem_en: 'Explain the term "signal peptide".',
  stem_cn: '解释「signal peptide（信号肽）」这个术语。',
  answer_en: '**A short N-terminal sequence that directs a protein into the secretory pathway, and is cleaved off once it has done so.**\n\n' +
             'Structure: typically 15-30 residues with a **hydrophobic core**, which is the recognition feature rather than a specific sequence — this is why signal peptides from different proteins are interchangeable in practice.\n\n' +
             'Mechanism: as the peptide emerges from the ribosome it is bound by the **signal recognition particle**, which pauses translation and docks the ribosome on the ER membrane (or the plasma membrane in bacteria). The chain is threaded through a translocon, and **signal peptidase** cuts the signal off, so the mature protein never carries it.\n\n' +
             'It is exploited constantly in biotechnology: fusing a signal peptide such as the yeast **alpha-factor prepro leader** to your gene sends the product out of the cell, which simplifies purification and gives an oxidising environment for disulfide formation.',
  answer_cn: '**一段位于 N 端的短序列，把蛋白导入分泌途径，任务完成后即被切除。**\n\n' +
             '结构：通常 15–30 个残基，带一个**疏水核心**，识别靠的是这个特征而不是某条特定序列——这也是为什么不同蛋白的信号肽在实践中可以互换。\n\n' +
             '机制：当这段肽从核糖体上露出来时，被**信号识别颗粒**结合，后者暂停翻译并把核糖体停靠到内质网膜上（细菌里是质膜）。肽链穿过转运通道，**信号肽酶**把信号肽切掉，所以成熟蛋白从不带着它。\n\n' +
             '生物技术里经常利用它：把酵母 **α-factor prepro 前导序列**这类信号肽融合到你的基因上，就能把产物送出细胞，既简化纯化，又提供了形成二硫键所需的氧化环境。',
  followups: [
    { q_en: 'Why can signal peptides from different organisms often be swapped?',
      q_cn: '为什么不同生物的信号肽常常可以互换？',
      a_en: 'Because recognition depends on a general physical property — a hydrophobic core of the right length — rather than a defined consensus sequence.',
      a_cn: '因为识别依赖的是一个普遍的物理性质——长度合适的疏水核心——而不是某条确定的共有序列。' },
    { q_en: 'Where does this matter when designing a tagged construct?',
      q_cn: '设计带标签的构建时，这一点在哪里要紧？',
      a_en: 'An N-terminal tag placed before the signal peptide is cleaved off with it. The tag must go after the cleavage site, or on the C-terminus.',
      a_cn: '放在信号肽之前的 N 端标签会连同信号肽一起被切掉。标签必须放在切割位点之后，或者放在 C 端。' }
  ]
},

{
  id: 's2-bio-25-levels-of-protein-structure',
  sheets: 'S2 Bio 25 · S3 Bio 18', weight: 2,
  stem_en: 'Describe the levels of protein structure.',
  stem_cn: '描述蛋白质结构的层次。',
  answer_en: 'Four levels, and the useful framing is **what holds each one together**.\n\n' +
             '**Primary** — the amino acid sequence, held by **peptide bonds**, which are covalent. This is the only level encoded directly by the gene, and it determines all the others.\n\n' +
             '**Secondary** — local regular patterns, **alpha-helix and beta-sheet**, held by **hydrogen bonds between backbone** atoms. Note: backbone, not side chains.\n\n' +
             '**Tertiary** — the full three-dimensional fold of one chain, held by **side-chain interactions**: the hydrophobic effect burying nonpolar residues in the core, plus hydrogen bonds, ionic bonds, and covalent **disulfide bridges**.\n\n' +
             '**Quaternary** — the assembly of two or more folded chains into a complex, held by the same non-covalent forces. Haemoglobin, with four subunits, is the standard example; not every protein has this level.',
  answer_cn: '四个层次，有用的讲法是**每一层靠什么维持**。\n\n' +
             '**一级结构**——氨基酸序列，靠**肽键**维持，是共价键。这是唯一由基因直接编码的层次，而它决定了其余所有层次。\n\n' +
             '**二级结构**——局部的规则构象，**α 螺旋和 β 折叠**，靠**主链原子之间的氢键**维持。注意：是主链，不是侧链。\n\n' +
             '**三级结构**——单条链完整的三维折叠，靠**侧链相互作用**维持：把非极性残基埋进核心的疏水效应，加上氢键、离子键，以及共价的**二硫键**。\n\n' +
             '**四级结构**——两条以上已折叠的链组装成复合物，靠同样的非共价力维持。血红蛋白有四个亚基，是标准例子；并非每个蛋白都有这一层。',
  followups: [
    { q_en: 'Which bonds are covalent across these levels?',
      q_cn: '这几个层次里哪些键是共价键？',
      a_en: 'Only two: the peptide bonds of the primary structure, and disulfide bridges. Everything else holding a fold together is non-covalent, which is why heat or detergent can unfold a protein without breaking its sequence.',
      a_cn: '只有两种：一级结构的肽键，以及二硫键。维持折叠的其它一切都是非共价的，这就是为什么加热或去污剂能让蛋白解折叠而不破坏它的序列。' },
    { q_en: 'What does Anfinsen\'s experiment tell us about these levels?',
      q_cn: 'Anfinsen 的实验对这些层次说明了什么？',
      a_en: 'That primary structure determines tertiary structure: a denatured protein refolded spontaneously into its active form once conditions were restored, with no external information needed.',
      a_cn: '一级结构决定三级结构：变性的蛋白在条件恢复后自发折叠回有活性的形式，不需要任何外部信息。' }
  ],
  sourceNodes: ['5-1']
},

{
  id: 's2-bio-26-lac-and-trp-operons',
  sheets: 'S2 Bio 26', weight: 2,
  stem_en: 'Explain the functioning of the Lac and Trp operons.',
  stem_cn: '解释 Lac 操纵子和 Trp 操纵子的运作。',
  svg: '<svg viewBox="0 0 740 300" role="img" aria-label="The lac operon, repressed and induced"> <g fill="none" stroke="currentColor" stroke-width="1.6">  <text x="30" y="26" font-size="12" font-weight="600">No lactose &#8212; repressed</text> <text x="205" y="26" font-size="10" class="dim">无乳糖：被阻遏</text>  <line x1="30" y1="70" x2="700" y2="70" stroke-width="2.2"/> <rect x="60"  y="56" width="52" height="28" rx="2"/> <text x="86" y="75" font-size="10" text-anchor="middle">lacI</text> <rect x="180" y="56" width="44" height="28" rx="2"/> <text x="202" y="75" font-size="10" text-anchor="middle">P</text> <rect x="228" y="56" width="52" height="28" rx="2" fill="currentColor" opacity="0.18" stroke="none"/> <rect x="228" y="56" width="52" height="28" rx="2"/> <text x="254" y="75" font-size="10" text-anchor="middle" font-weight="600">O</text> <rect x="290" y="56" width="86" height="28" rx="2"/> <text x="333" y="75" font-size="10" text-anchor="middle">lacZ</text> <rect x="380" y="56" width="86" height="28" rx="2"/> <text x="423" y="75" font-size="10" text-anchor="middle">lacY</text> <rect x="470" y="56" width="86" height="28" rx="2"/> <text x="513" y="75" font-size="10" text-anchor="middle">lacA</text>  <ellipse cx="254" cy="34" rx="26" ry="14" stroke-width="2"/> <text x="254" y="38" font-size="9" text-anchor="middle" font-weight="600">LacI</text> <line x1="254" y1="48" x2="254" y2="56" stroke-width="2"/> <text x="300" y="34" font-size="10">repressor sits on the operator</text> <path d="M600 70 L 640 70" stroke-width="2"/> <line x1="614" y1="60" x2="628" y2="80" stroke-width="2.4"/> <line x1="628" y1="60" x2="614" y2="80" stroke-width="2.4"/> <text x="668" y="74" font-size="10" text-anchor="middle">no mRNA</text>  <line x1="30" y1="118" x2="710" y2="118" stroke-dasharray="4 6" class="dim"/>  <text x="30" y="152" font-size="12" font-weight="600">Lactose present &#8212; induced</text> <text x="240" y="152" font-size="10" class="dim">有乳糖：被诱导</text>  <line x1="30" y1="196" x2="700" y2="196" stroke-width="2.2"/> <rect x="60"  y="182" width="52" height="28" rx="2"/> <text x="86" y="201" font-size="10" text-anchor="middle">lacI</text> <rect x="180" y="182" width="44" height="28" rx="2"/> <text x="202" y="201" font-size="10" text-anchor="middle">P</text> <rect x="228" y="182" width="52" height="28" rx="2"/> <text x="254" y="201" font-size="10" text-anchor="middle" font-weight="600">O</text> <rect x="290" y="182" width="86" height="28" rx="2"/> <text x="333" y="201" font-size="10" text-anchor="middle">lacZ</text> <rect x="380" y="182" width="86" height="28" rx="2"/> <text x="423" y="201" font-size="10" text-anchor="middle">lacY</text> <rect x="470" y="182" width="86" height="28" rx="2"/> <text x="513" y="201" font-size="10" text-anchor="middle">lacA</text>  <ellipse cx="150" cy="248" rx="26" ry="14" stroke-width="2"/> <text x="150" y="252" font-size="9" text-anchor="middle" font-weight="600">LacI</text> <circle cx="150" cy="222" r="7" stroke-width="2"/> <text x="150" y="212" font-size="9" text-anchor="middle">allolactose / IPTG</text> <text x="150" y="276" font-size="10" text-anchor="middle" class="dim">shape changed, lets go of DNA</text>  <path d="M290 172 L 556 172" stroke-width="2.4"/> <path d="M546 166 L 556 172 L 546 178" stroke-width="2.4"/> <text x="423" y="164" font-size="10" text-anchor="middle" font-weight="600">polycistronic mRNA transcribed</text>  <text x="640" y="240" font-size="10" text-anchor="middle" font-weight="600">Induction removes</text> <text x="640" y="254" font-size="10" text-anchor="middle" font-weight="600">a block</text> <text x="640" y="270" font-size="10" text-anchor="middle" class="dim">诱导是拿掉阻碍，</text> <text x="640" y="284" font-size="10" text-anchor="middle" class="dim">不是打开基因</text> </g> </svg>',
  svg_caption: { en: 'The lac operon, the inducible case. By default LacI sits on the operator and blocks transcription. Allolactose — or IPTG, which does the same job without being metabolised — binds LacI and changes its shape so it releases the DNA, and the three genes are transcribed as one polycistronic mRNA. Induction removes a block rather than switching a gene on. The trp operon is the mirror image: its repressor is inactive alone and tryptophan is the corepressor that activates it.', cn: 'lac 操纵子，可诱导的那一例。默认状态下 LacI 坐在操作基因上阻断转录。别乳糖——或者做同样的事却不被代谢的 IPTG——结合 LacI 并改变其构象，使它松开 DNA，三个基因作为一条多顺反子 mRNA 被转录。诱导是拿掉一个阻碍，而不是把基因打开。trp 操纵子是它的镜像：它的阻遏蛋白单独时无活性，色氨酸是激活它的辅阻遏物。' },
  answer_en: 'They are the two textbook cases because they are **opposites**: one catabolic and inducible, one anabolic and repressible.\n\n' +
             '**lac** controls lactose catabolism. By default the **LacI repressor** sits on the operator and blocks transcription. When lactose is present, **allolactose binds LacI**, it releases the DNA, and the three genes are transcribed. It is **inducible** — the substrate switches its own pathway on. There is a second layer: **catabolite repression** means that with glucose available, cAMP is low, CAP does not bind, and the promoter stays weak even without repressor. So lac is only fully on when lactose is present **and** glucose is absent.\n\n' +
             '**trp** controls tryptophan biosynthesis. The repressor is **inactive on its own**; tryptophan acts as a **corepressor**, binding the repressor so it can then bind the operator and shut the pathway down. It is **repressible** — the product switches its own pathway off. It has a second layer too: **attenuation**, a translation-coupled mechanism in the leader sequence that terminates transcription early when tryptophan is plentiful.\n\n' +
             'The unifying idea is economy: make the enzymes only when they pay.',
  answer_cn: '这是两个教科书案例，因为它们**正好相反**：一个是分解代谢、可诱导；一个是合成代谢、可阻遏。\n\n' +
             '**lac** 控制乳糖分解。默认状态下 **LacI 阻遏蛋白**坐在操作基因上阻断转录。有乳糖时，**别乳糖结合 LacI**，它松开 DNA，三个基因被转录。它是**可诱导的**——底物打开自己的通路。还有第二层：**分解代谢物阻遏**——有葡萄糖时 cAMP 低，CAP 不结合，即使没有阻遏蛋白启动子也很弱。所以 lac 只有在有乳糖**且**没有葡萄糖时才完全开启。\n\n' +
             '**trp** 控制色氨酸合成。它的阻遏蛋白**自身没有活性**；色氨酸充当**辅阻遏物**，结合阻遏蛋白后它才能结合操作基因、把通路关掉。它是**可阻遏的**——产物关掉自己的通路。它也有第二层：**衰减作用**，即前导序列中一个与翻译偶联的机制，在色氨酸充足时提前终止转录。\n\n' +
             '统一的思想是经济性：只在划算的时候才造这些酶。',
  followups: [
    { q_en: 'Why is lactose alone not enough to fully induce lac?',
      q_cn: '为什么只有乳糖还不足以完全诱导 lac？',
      a_en: 'Because catabolite repression is a separate layer. With glucose present cAMP stays low and CAP cannot activate the weak promoter, so the cell uses the better carbon source first.',
      a_cn: '因为分解代谢物阻遏是独立的一层。有葡萄糖时 cAMP 保持在低水平，CAP 无法激活那个弱启动子，于是细胞先用更好的碳源。' },
    { q_en: 'What is attenuation in one sentence?',
      q_cn: '一句话说明什么是衰减作用？',
      a_en: 'A leader sequence whose ribosome speed — set by tryptophan availability — decides whether the RNA folds into a terminator hairpin and aborts transcription before the structural genes.',
      a_cn: '一段前导序列，核糖体在其上的移动速度由色氨酸供应决定，而这个速度决定 RNA 是否折叠成终止子发夹、在结构基因之前中止转录。' }
  ],
  sourceNodes: ['3-2']
},

{
  id: 's2-bio-27-ptm-surface-secreted',
  sheets: 'S2 Bio 27', weight: 2,
  stem_en: 'What are two critical post-translational modifications for surface and secreted proteins?',
  stem_cn: '对表面蛋白和分泌蛋白来说，两个关键的翻译后修饰是什么？',
  answer_en: '**Glycosylation and disulfide bond formation.**\n\n' +
             '**N-linked glycosylation** attaches a sugar chain to asparagine in an Asn-X-Ser/Thr motif, starting in the ER. It affects folding, stability, solubility, protease resistance and, in a therapeutic protein, **serum half-life** — erythropoietin is the standard example, where the glycans are what keep it in circulation. Glycosylation patterns are **host-specific**, which is why a glycoprotein drug cannot be made in E. coli.\n\n' +
             '**Disulfide bonds** covalently link two cysteines and stabilise the fold. They form in the **oxidising environment of the ER or the bacterial periplasm**, and not in the reducing cytoplasm — which is exactly why a disulfide-containing protein expressed in the E. coli cytoplasm ends up misfolded in inclusion bodies.\n\n' +
             'Both explain the same practical rule: the host must be able to perform the modification, or you must move the protein to a compartment that can.',
  answer_cn: '**糖基化和二硫键形成。**\n\n' +
             '**N-连接糖基化**把糖链接到 Asn-X-Ser/Thr 基序中的天冬酰胺上，从内质网开始。它影响折叠、稳定性、溶解度、抗蛋白酶能力，而对治疗性蛋白来说还影响**血清半衰期**——促红细胞生成素是标准例子，正是那些糖链让它留在循环里。糖基化模式是**宿主特异的**，这也是糖蛋白药物不能在大肠杆菌里生产的原因。\n\n' +
             '**二硫键**把两个半胱氨酸共价连接起来，稳定折叠。它们在**内质网或细菌周质的氧化环境**中形成，而不在还原性的胞质中——这正是含二硫键的蛋白在大肠杆菌胞质里表达时会错误折叠进包涵体的原因。\n\n' +
             '两者说明的是同一条实用规则：宿主必须有能力完成这个修饰，否则你就得把蛋白送到能完成它的区室去。',
  followups: [
    { q_en: 'Why can E. coli not make a glycosylated therapeutic protein?',
      q_cn: '为什么大肠杆菌做不出糖基化的治疗性蛋白？',
      a_en: 'It lacks the ER glycosylation machinery entirely. The product would be unglycosylated, and for something like EPO that means it is cleared from circulation almost immediately.',
      a_cn: '它完全没有内质网的糖基化机器。产物会是无糖基化的，而对 EPO 这类蛋白来说，那意味着它几乎立刻就被清除出循环。' },
    { q_en: 'Two ways to get disulfide bonds in E. coli?',
      q_cn: '在大肠杆菌里获得二硫键的两条路？',
      a_en: 'Export the protein to the periplasm with a signal peptide, where the environment is oxidising; or use an engineered strain with a less reducing cytoplasm, such as Origami or SHuffle.',
      a_cn: '用信号肽把蛋白送到周质，那里是氧化环境；或者用还原性较弱的工程菌株，比如 Origami 或 SHuffle。',
      node: '1-14' }
  ]
},

{
  id: 's2-bio-29-transformation-transduction',
  sheets: 'S2 Bio 29', weight: 2,
  stem_en: 'What is the difference between transformation, electroporation, transduction, and transfection?',
  stem_cn: 'transformation、electroporation、transduction、transfection 四者的区别？',
  answer_en: 'Three are **biological processes** and one is a **method**, which is the trap in the question.\n\n' +
             '**Transformation** — uptake of naked DNA from the surroundings by a bacterial (or yeast) cell. A natural form of horizontal gene transfer, and the basis of routine cloning.\n\n' +
             '**Transduction** — transfer of DNA from one bacterium to another **by a bacteriophage** that packaged host DNA by mistake. Also natural horizontal gene transfer, but virus-mediated.\n\n' +
             '**Transfection** — introduction of nucleic acid into a **eukaryotic** cell. Same idea as transformation but the word is reserved for eukaryotes, because in animal cells "transformation" already means cancerous conversion.\n\n' +
             '**Electroporation** — not a category at all but a **technique**: a brief high-voltage pulse makes transient pores in the membrane. It is one way to perform transformation **or** transfection, alongside chemical methods such as calcium chloride heat shock.',
  answer_cn: '三个是**生物学过程**，一个是**方法**，这正是这道题的陷阱。\n\n' +
             '**转化（transformation）**——细菌（或酵母）细胞从周围环境摄取裸露 DNA。这是水平基因转移的一种天然形式，也是常规克隆的基础。\n\n' +
             '**转导（transduction）**——**由噬菌体介导**、把 DNA 从一个细菌带到另一个细菌，因为噬菌体错误包装了宿主 DNA。同样是天然的水平基因转移，但由病毒介导。\n\n' +
             '**转染（transfection）**——把核酸导入**真核**细胞。概念上和转化一样，但这个词专用于真核，因为在动物细胞里 transformation 已经表示「癌变转化」了。\n\n' +
             '**电穿孔（electroporation）**——根本不是一个类别，而是一种**技术**：一次短促的高压脉冲在膜上造出暂时的孔。它是实现转化**或**转染的一种手段，与氯化钙热激这类化学方法并列。',
  followups: [
    { q_en: 'Why is the word transformation avoided for animal cells?',
      q_cn: '为什么动物细胞里避免用 transformation 这个词？',
      a_en: 'Because in that context it already means the conversion of a normal cell into a cancerous one. Using it for DNA uptake would be ambiguous, so transfection is used instead.',
      a_cn: '因为在那个语境里它已经表示正常细胞变成癌细胞。用它来指 DNA 摄取会有歧义，所以改用 transfection。' },
    { q_en: 'When would you choose electroporation over chemical transformation?',
      q_cn: '什么时候选电穿孔而不是化学转化？',
      a_en: 'When success events are already rare: transforming a ligation mix directly, a very large plasmid, or co-transforming two plasmids. The efficiency gap of two to three orders of magnitude is then the difference between colonies and none.',
      a_cn: '当成功事件本来就稀少时：直接转化连接产物、转化很大的质粒、或者共转两个质粒。那时两三个数量级的效率差，就是「有菌落」和「没有」的区别。',
      node: '1-10' }
  ],
  sourceNodes: ['1-10']
}

]);
