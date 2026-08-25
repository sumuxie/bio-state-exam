/* =========================================================================
   JIRI BANK — Chapter 5 . Structural biology

   Hand-written for this bank, and the emptiest gap measured anywhere: across
   all 810 nodes in seven corpora, NO node is titled after any structure-
   determination method. The single apparent hit (biochemie L-4-5-1) is a
   placeholder whose own text says the source is an unsearchable handwritten
   scan; it has no terms and no questions. biochemie_struct sounds relevant
   but is a set of chemical drawings, not structural biology.

   This chapter also lands on Ruojin's own project, where AlphaFold models of
   an RBD-ACE2 complex were rejected by checking them against 6M0J.
   ========================================================================= */

window.PESB = window.PESB || {};
window.PESB.topics = (window.PESB.topics || []).concat([

{
  id: '5-1',
  chapter: 5,
  lecture: 'Struct',
  section: '5.1',
  slides: '全库零覆盖 · 与卷二 Bio 25（蛋白结构层次）· 卷三 Bio 5（活性中心）相接',
  coverage: 'partial',
  enTitle: 'How a protein structure is determined — X-ray, cryo-EM, NMR, and why a prediction is not a measurement',
  cnTitle: '一个蛋白结构是怎么测出来的——X 射线、冷冻电镜、NMR，以及为什么预测不是测量',
  coverageNote: 'Written for this bank, and the emptiest gap found anywhere: across all 810 nodes in ' +
                'seven corpora, no node is titled after any structure-determination method. The one ' +
                'apparent hit is a placeholder whose own text says the source notes are an ' +
                'unsearchable handwritten scan; it carries no terms and no questions. biochemie_struct ' +
                'sounds relevant but is a set of chemical drawings — amino acids, sugars, lipids — not ' +
                'structural biology. This node also lands on Ruojin\'s own project, where an AlphaFold ' +
                'model of an RBD-ACE2 complex was rejected after checking it against the 6M0J crystal ' +
                'structure.',

  summary: {
    en: 'Three experimental methods dominate, and they differ in what sample they need and what they ' +
        'give back. X-ray crystallography needs the protein to form an ordered crystal; the crystal ' +
        'diffracts, the diffraction pattern gives amplitudes but not phases, and the phase problem is ' +
        'solved by molecular replacement or heavy atoms. It gives the highest resolution routinely, ' +
        'but only for something that crystallises, and the molecule is in a lattice rather than in ' +
        'solution. Cryo-electron microscopy needs no crystal: single particles are frozen in vitreous ' +
        'ice, imaged, and tens of thousands of noisy projections are averaged into a three-dimensional ' +
        'map. It suits large complexes and membrane proteins that never crystallised, and it can ' +
        'resolve several conformations from one sample. NMR works in solution on smaller proteins and ' +
        'is the one method that reports dynamics directly. All three produce a model fitted into ' +
        'experimental density or restraints, which is why resolution, R-free and map quality are ' +
        'part of the answer. Prediction is a different kind of object: AlphaFold outputs a model with ' +
        'no experiment behind it and a confidence estimate that is not an error bar.',
    cn: '三种实验方法占主导，它们的区别在于需要什么样的样品、以及给回什么。X 射线晶体学要求蛋白形成有序晶体；' +
        '晶体衍射，衍射图给出振幅但给不出相位，相位问题靠分子置换或重原子解决。它常规上能给出最高的分辨率，' +
        '但只适用于能结晶的东西，而且分子处在晶格里而不是溶液里。冷冻电镜不需要晶体：单颗粒被冻在玻璃态冰中成像，' +
        '几万张有噪声的投影被平均成一张三维密度图。它适合大复合物和从来结不出晶体的膜蛋白，还能从同一份样品里解出多种构象。' +
        'NMR 在溶液中对较小的蛋白工作，是唯一直接报告动力学的方法。三者产出的都是拟合进实验密度或约束条件里的模型，' +
        '这就是为什么分辨率、R-free 和图质量本身就是答案的一部分。预测是另一类东西：AlphaFold 输出的模型背后没有实验，' +
        '它给的置信度也不是误差棒。'
  },

  mustKnow: 'Say what each method needs and what it gives. **X-ray needs a crystal and gives the ' +
            'highest routine resolution. Cryo-EM needs no crystal, suits large complexes and membrane ' +
            'proteins, and can separate conformations. NMR works in solution on small proteins and is ' +
            'the one that reports dynamics.** And say the thing most candidates miss: **a deposited ' +
            'structure is a model fitted into experimental data, not a photograph** — which is why it ' +
            'comes with a resolution and an R-free. ' +
            '说清每种方法需要什么、给出什么。X 射线需要晶体，常规分辨率最高；冷冻电镜不需要晶体，适合大复合物和膜蛋白，' +
            '还能区分构象；NMR 在溶液中处理小蛋白，是唯一报告动力学的。再说出多数人漏掉的那句：' +
            '一个已发表的结构是拟合进实验数据的模型，不是照片——这正是它为什么附带分辨率和 R-free。',

  skipIt: 'Do not memorise space groups, the number of Miller indices, pulse-sequence names, or ' +
          'detector specifications. No examiner is asking you to solve a structure. What is wanted is ' +
          'which method for which problem, what the phase problem is, and what a resolution number ' +
          'and a confidence score do and do not mean. ' +
          '不用背空间群、Miller 指数的数目、脉冲序列的名字或探测器参数。没有考官要你去解一个结构。' +
          '要的是什么问题该用什么方法、相位问题是什么，以及一个分辨率数字和一个置信度分数分别说明什么、不说明什么。',

  explain: [
    {
      q: 'What is the phase problem, and why does a diffraction pattern not simply give you the ' +
         'structure? ' +
         '（相位问题是什么？为什么一张衍射图不能直接给出结构？）',
      a: 'Because **a detector records intensities, and intensity throws away phase.**\n\n' +
         'The electron density of the crystal and its diffraction pattern are related by a Fourier ' +
         'transform, so in principle you invert the transform and read off the density. But each ' +
         'reflection is a wave with an amplitude and a phase, and the detector measures how many ' +
         'photons arrived, which gives amplitude squared. The phases are simply not recorded, and it ' +
         'is the phases that carry most of the structural information.\n\n' +
         'Three routes out. **Molecular replacement** uses a known structure of a similar protein as ' +
         'a starting phase estimate — the usual route today, and the reason a new structure of a ' +
         'familiar fold is far easier than the first one ever solved. **Isomorphous replacement** ' +
         'soaks heavy atoms into the crystal and uses the intensity changes they cause. **Anomalous ' +
         'dispersion**, usually with selenomethionine, uses the wavelength-dependent scattering of an ' +
         'atom near its absorption edge. ' +
         '（因为探测器记录的是强度，而强度把相位丢掉了。晶体的电子密度与它的衍射图之间由傅里叶变换相联系，' +
         '所以原则上你把变换反过来就能读出密度。但每一个衍射点是一个有振幅也有相位的波，而探测器测的是到达了多少光子，' +
         '也就是振幅的平方。相位根本没有被记录，而携带大部分结构信息的正是相位。有三条出路：' +
         '分子置换用一个相似蛋白的已知结构作为相位的初始估计——今天最常用的一条，也是为什么一个熟悉折叠的新结构' +
         '远比历史上第一个被解出的结构容易；同晶置换把重原子浸泡进晶体，利用它们引起的强度变化；' +
         '反常散射通常用硒代甲硫氨酸，利用某个原子在吸收边附近随波长变化的散射。）'
    },
    {
      q: 'A membrane protein complex has resisted crystallisation for years. Why does cryo-EM succeed ' +
         'where X-ray failed, and what does it cost? ' +
         '（一个膜蛋白复合物多年结不出晶体。为什么冷冻电镜能成功而 X 射线不能？代价是什么？）',
      a: 'Because **cryo-EM never asks the molecule to form a lattice.**\n\n' +
         'Crystallisation requires many copies of the molecule to pack into one repeating, ordered ' +
         'arrangement, and a flexible or detergent-solubilised membrane protein often simply will ' +
         'not. Cryo-EM instead plunge-freezes a thin film of solution so fast that the water becomes ' +
         'vitreous rather than crystalline ice, images individual particles at low electron dose, and ' +
         'computationally aligns and averages tens of thousands of noisy projections in different ' +
         'orientations into a three-dimensional map.\n\n' +
         'The cost used to be resolution, which is why it was once called blob-ology; direct electron ' +
         'detectors and better software changed that, and the resolution revolution from about 2013 ' +
         'is why cryo-EM now competes with crystallography. The remaining costs are real: it needs ' +
         'far more computation, it works best on large particles because small ones give too little ' +
         'signal to align, and preferred orientation at the air-water interface can leave a direction ' +
         'poorly sampled. **Its distinctive advantage is that heterogeneity is a feature**: particles ' +
         'in different conformations can be sorted into separate classes, so one dataset can yield ' +
         'several states of the same machine. ' +
         '（因为冷冻电镜从不要求分子排成晶格。结晶要求许多个分子拷贝堆积成一种重复、有序的排列，' +
         '而柔性的或用去污剂溶解的膜蛋白往往就是做不到。冷冻电镜改为把一层薄薄的溶液快速投冻，' +
         '快到水变成玻璃态而不是结晶冰，在低电子剂量下对单个颗粒成像，' +
         '再用计算把几万张不同取向的、有噪声的投影对齐并平均成一张三维图。' +
         '代价过去是分辨率，所以它一度被叫作 blob-ology；直接电子探测器和更好的软件改变了这一点，' +
         '大约从 2013 年开始的分辨率革命正是冷冻电镜今天能与晶体学竞争的原因。剩下的代价是真实的：' +
         '它需要多得多的计算；它对大颗粒效果最好，因为小颗粒给出的信号不足以对齐；' +
         '而气液界面处的取向偏好会使某个方向采样不足。它独有的优势是异质性反而成了优点：' +
         '处于不同构象的颗粒可以被分选进不同的类，所以一份数据可以给出同一台机器的好几个状态。）'
    },
    {
      q: 'A structure is published at 3.5 angstrom resolution with an R-free of 0.28. What are you ' +
         'being told, and what are you not? ' +
         '（一个结构以 3.5 埃分辨率、R-free 为 0.28 发表。这告诉了你什么？没告诉你什么？）',
      a: 'You are being told **how much detail the data supports and how honestly the model was ' +
         'fitted** — and crucially, that what was deposited is a model, not an image.\n\n' +
         'Resolution is the finest spacing the data distinguishes. Near 3.5 angstrom you can trace the ' +
         'backbone and place most side chains by chemical sense, but you are not seeing individual ' +
         'atoms and you certainly are not seeing hydrogens; a claim about a specific hydrogen bond ' +
         'geometry at that resolution is an interpretation, not an observation. Below about 1.5 ' +
         'angstrom individual atoms become resolvable and the picture changes.\n\n' +
         'R-free is the check against wishful fitting. A model is refined to reduce disagreement with ' +
         'the data, and with enough parameters you can fit noise. So a random few percent of ' +
         'reflections is held back from refinement entirely, and R-free measures agreement with only ' +
         'those. If R-free is far above R-work, the model has been over-fitted. **What you are not ' +
         'told is what the molecule does in solution**: the crystal is one packed conformation at one ' +
         'temperature, and a flexible loop that is disordered simply has no density and is often ' +
         'absent from the coordinates altogether. ' +
         '（它告诉你的是数据能支持多少细节，以及模型拟合得有多诚实——而关键在于，被存入数据库的是一个模型，不是一张图像。' +
         '分辨率是数据能分辨的最小间距。在 3.5 埃附近你可以追踪主链、并凭化学常识放置大部分侧链，' +
         '但你看不到单个原子，更绝对看不到氢；在那个分辨率下关于某个具体氢键几何的断言是一种解释，不是一次观察。' +
         '低于约 1.5 埃，单个原子开始可分辨，情形就不同了。R-free 是对「一厢情愿地拟合」的核对：' +
         '模型被精修以减少与数据的不符，而参数足够多时你可以把噪声也拟合进去。' +
         '所以随机留出百分之几的衍射点完全不参与精修，R-free 只衡量与这部分的符合程度。' +
         '如果 R-free 远高于 R-work，说明模型被过度拟合了。它没有告诉你的是这个分子在溶液里做什么：' +
         '晶体是一个温度下的一种堆积构象，而一段无序的柔性环干脆没有密度，常常在坐标里根本不存在。）'
    },
    {
      q: 'AlphaFold returns a model with high pLDDT. Why is that still not a determined structure, and ' +
         'how would you check it? ' +
         '（AlphaFold 返回一个 pLDDT 很高的模型。为什么它仍然不是一个测定出来的结构？你会怎么核对？）',
      a: 'Because **there is no experiment underneath it.** A predicted model is a hypothesis ' +
         'generated from evolutionary and structural patterns in known proteins. For a single ' +
         'well-represented domain it is often close to right, and that is a genuine achievement. But ' +
         'the confidence scores describe **the model\'s own self-consistency, not agreement with ' +
         'reality**: pLDDT is a per-residue confidence, and low pLDDT frequently marks genuinely ' +
         'disordered regions rather than prediction failure. For complexes, ipTM scores the predicted ' +
         'interface.\n\n' +
         'The check is external and it is the point of the whole question. This project ran exactly ' +
         'that check: AlphaFold models of recombinant RBD-ACE2 complexes were compared against the ' +
         '**6M0J crystal structure**, using the contact residues the crystal actually shows. The ' +
         'models reproduced 0 to 1 of the 22 true ACE2 contacts — they had docked the domain onto the ' +
         'wrong face. **A low ipTM there reported a docking failure, not weak binding**, and ranking ' +
         'candidates by it would have ranked them by an artefact. Validate against an experimental ' +
         'structure of a homologue, against known functional residues, and if the answer matters, ' +
         'against a binding measurement — because nothing in a prediction measures affinity. ' +
         '（因为它底下没有实验。预测模型是一个由已知蛋白中的进化与结构规律生成的假设。' +
         '对于一个单独的、样本充分的结构域，它常常接近正确，这是一项真实的成就。但置信度分数描述的是模型自身的自洽性，' +
         '而不是它与现实的符合：pLDDT 是逐残基的置信度，而低 pLDDT 往往标记的是真正无序的区域，而不是预测失败。' +
         '对于复合物，ipTM 评的是预测出来的界面。核对必须是外部的，而这正是整道题的要点。' +
         '这个课题就跑过这样一次核对：把重组 RBD-ACE2 复合物的 AlphaFold 模型与 6M0J 晶体结构比较，' +
         '用晶体实际显示的接触残基作标准。模型只重现了 22 个真实 ACE2 接触中的 0 到 1 个——它把结构域对接到了错误的一面。' +
         '在那里，低 ipTM 报告的是一次对接失败，而不是结合弱；用它给候选排序，等于用一个假象来排序。' +
         '要拿同源物的实验结构核对、拿已知的功能残基核对；如果结论重要，还要拿一次结合测量来核对——' +
         '因为预测里没有任何东西在测量亲和力。）'
    }
  ],

  points: [
    { term: 'X-ray crystallography needs a crystal', en: 'Many copies of the molecule must pack into one ordered repeating lattice. Getting that crystal is usually the hardest and least predictable step, and it is where the method fails.', cn: 'X 射线晶体学需要晶体：许多个分子拷贝必须堆积成一个有序的重复晶格。拿到那个晶体通常是最难、最不可预测的一步，也是这个方法失败的地方。' },
    { term: 'Diffraction and the Fourier relationship', en: 'Electron density and diffraction pattern are Fourier transforms of each other, so in principle the density is recovered by inverting the transform.', cn: '衍射与傅里叶关系：电子密度与衍射图互为傅里叶变换，所以原则上把变换反过来就能恢复密度。' },
    { term: 'The phase problem', en: 'The detector records intensity, which is amplitude squared, so phases are lost — and phases carry most of the structural information. It is the central obstacle of the method.', cn: '相位问题：探测器记录强度，即振幅的平方，所以相位丢失了——而携带大部分结构信息的正是相位。这是该方法的核心障碍。' },
    { term: 'Molecular replacement', en: 'Uses a known structure of a related protein to supply starting phases. The usual route today, and why solving a new member of a familiar fold is far easier than the first one.', cn: '分子置换：用一个相关蛋白的已知结构提供初始相位。今天最常用的一条路，也是为什么解一个熟悉折叠的新成员远比第一个容易。' },
    { term: 'Heavy atoms and anomalous dispersion', en: 'Isomorphous replacement soaks in heavy atoms and uses the intensity changes; anomalous dispersion, usually with selenomethionine, uses wavelength-dependent scattering near an absorption edge.', cn: '重原子与反常散射：同晶置换浸入重原子并利用强度变化；反常散射通常用硒代甲硫氨酸，利用吸收边附近随波长变化的散射。' },
    { term: 'Cryo-EM needs no crystal', en: 'Single particles are plunge-frozen into vitreous ice, imaged at low dose, and tens of thousands of noisy projections are aligned and averaged into a three-dimensional map.', cn: '冷冻电镜不需要晶体：单颗粒被投冻进玻璃态冰，在低剂量下成像，几万张有噪声的投影被对齐并平均成一张三维图。' },
    { term: 'Vitreous ice, not ice crystals', en: 'Freezing must be fast enough that water becomes glassy. Crystalline ice diffracts and destroys the image, which is why plunge-freezing rather than slow cooling is used.', cn: '玻璃态冰而非冰晶：冷冻必须快到让水变成玻璃态。结晶冰会衍射并毁掉图像，这就是为什么用投冻而不是缓慢降温。' },
    { term: 'The resolution revolution', en: 'Direct electron detectors and better classification software from about 2013 took cryo-EM from low-resolution envelopes to atomic detail, which is why it now competes with crystallography.', cn: '分辨率革命：大约从 2013 年起，直接电子探测器与更好的分类软件把冷冻电镜从低分辨率轮廓推到了原子级细节，这就是它今天能与晶体学竞争的原因。' },
    { term: 'Heterogeneity is a cryo-EM feature', en: 'Particles in different conformations can be sorted into separate classes, so one dataset yields several states. A crystal, by contrast, selects the one conformation that packed.', cn: '异质性对冷冻电镜是优点：处于不同构象的颗粒可以分选进不同的类，所以一份数据给出多个状态。而晶体相反，它只挑出了能堆积的那一种构象。' },
    { term: 'NMR works in solution', en: 'No crystal and no freezing. Limited to smaller proteins because spectra become too crowded, and it is the only one of the three that reports dynamics and timescales directly.', cn: 'NMR 在溶液中工作：不需要晶体也不需要冷冻。受限于较小的蛋白，因为谱图会过于拥挤；它是三者中唯一直接报告动力学与时间尺度的方法。' },
    { term: 'Resolution is what detail the data supports', en: 'Near 3.5 angstrom the backbone is traceable and most side chains placeable; below about 1.5 angstrom individual atoms resolve. Hydrogens are essentially never seen by X-ray.', cn: '分辨率是数据能支持多少细节：3.5 埃附近可以追踪主链、放置大部分侧链；低于约 1.5 埃单个原子开始可分辨。X 射线基本上从来看不到氢。' },
    { term: 'R-free guards against over-fitting', en: 'A few percent of reflections are withheld from refinement entirely, and agreement is measured against only those. R-free far above R-work means the model has been fitted to noise.', cn: 'R-free 防止过度拟合：百分之几的衍射点被完全排除在精修之外，只用它们来衡量符合程度。R-free 远高于 R-work 意味着模型把噪声也拟合了进去。' },
    { term: 'A deposited structure is a model', en: 'Coordinates are fitted into experimental density, not photographed. Disordered loops have no density and are frequently absent from the file altogether — missing residues are not missing protein.', cn: '存入数据库的结构是一个模型：坐标是拟合进实验密度的，不是拍出来的。无序的环没有密度，常常在文件里干脆缺失——缺失的残基不等于缺失的蛋白。' },
    { term: 'Prediction is a hypothesis', en: 'AlphaFold generates a model from evolutionary and structural patterns, with no experiment underneath. Often close for a single well-represented domain, and far less reliable for complexes and interfaces.', cn: '预测是一个假设：AlphaFold 从进化与结构规律生成模型，底下没有实验。对单个样本充分的结构域常常接近正确，对复合物和界面则可靠得多得多。' },
    { term: 'pLDDT and ipTM are self-assessments', en: 'pLDDT is per-residue confidence and low values often mark genuine disorder rather than failure; ipTM scores a predicted interface. Neither is an error bar against reality.', cn: 'pLDDT 与 ipTM 是自我评估：pLDDT 是逐残基置信度，低值往往标记真正的无序而非失败；ipTM 评的是预测出来的界面。两者都不是相对于现实的误差棒。' },
    { term: 'Validate against an experimental structure', en: 'Check a predicted complex against the contacts a real structure shows. A model reproducing none of the known interface has docked the wrong face, whatever its score says.', cn: '拿实验结构去核对：把预测的复合物与真实结构显示的接触比对。一个重现不了任何已知界面的模型是把面对接错了，不管它的分数怎么说。' }
  ],


  beyondPoints: [
    { term: 'Your own project already made this argument', en: 'AlphaFold 3 models of recombinant RBD-ACE2 complexes were checked against the 6M0J crystal structure by counting how many of the 22 contact residues the crystal shows were reproduced. The models recovered 0 to 1: the RBD had been docked onto the wrong face of ACE2. The useful part is the consequence — ipTM there reported a docking failure, not weak binding, so ranking candidates by ipTM would have ranked them by an artefact. If an examiner asks what a prediction is worth, this is a first-hand answer rather than a general caution.', cn: '这一点你自己的课题已经论证过了：把重组 RBD-ACE2 复合物的 AlphaFold 3 模型与 6M0J 晶体结构比对，数晶体显示的 22 个接触残基里有多少被重现。模型只重现了 0 到 1 个：RBD 被对接到了 ACE2 错误的一面。有用的是那条推论——在那里 ipTM 报告的是一次对接失败，不是结合弱，所以按 ipTM 排序等于按一个假象排序。如果考官问预测值多少，这是一手的回答，而不是泛泛的告诫。' },
    { term: 'A structure and a binding measurement answer different questions', en: 'A structure shows an arrangement of atoms consistent with the data; it does not report affinity, kinetics, or what fraction of molecules is in that state. 6M0J shows where RBD touches ACE2, not how tightly. Affinity comes from SPR, ITC or a titration, and an interface claim rests on both together. This is the same separation the project keeps between sequence and phenotype.', cn: '结构与结合测量回答的是不同的问题：结构给出一组与数据相符的原子排列；它不报告亲和力、动力学，也不报告有多少比例的分子处于那个状态。6M0J 显示 RBD 在哪里接触 ACE2，不显示接触得有多紧。亲和力来自 SPR、ITC 或滴定，一个关于界面的论断要靠两者一起支撑。这与这个课题一贯坚持的「序列与表型分开」是同一条区分。' }
  ],

  terms: [
    { en: 'X-ray crystallography', cn: 'X 射线晶体学', def_en: 'Structure determination from the diffraction of X-rays by an ordered crystal; highest routine resolution, but requires a crystal.', def_cn: '由有序晶体对 X 射线的衍射来测定结构；常规分辨率最高，但必须先有晶体。' },
    { en: 'Phase problem', cn: '相位问题', def_en: 'Detectors record intensity and therefore lose phase, yet phase carries most of the structural information.', def_cn: '探测器记录强度因而丢失相位，而携带大部分结构信息的正是相位。' },
    { en: 'Molecular replacement', cn: '分子置换', def_en: 'Supplying starting phases from a known structure of a related protein; the usual modern route.', def_cn: '用相关蛋白的已知结构提供初始相位；今天最常用的路线。' },
    { en: 'Anomalous dispersion', cn: '反常散射', def_en: 'Wavelength-dependent scattering near an atom absorption edge, usually exploited with selenomethionine, used to obtain phases.', def_cn: '原子吸收边附近随波长变化的散射，通常借硒代甲硫氨酸利用，用于获得相位。' },
    { en: 'Cryo-electron microscopy', cn: '冷冻电镜', def_en: 'Imaging single particles frozen in vitreous ice and averaging many noisy projections into a three-dimensional map; no crystal needed.', def_cn: '对冻在玻璃态冰中的单颗粒成像，把大量有噪声的投影平均成三维图；不需要晶体。' },
    { en: 'Vitreous ice', cn: '玻璃态冰', def_en: 'Non-crystalline frozen water produced by plunge-freezing; crystalline ice would diffract and destroy the image.', def_cn: '由投冻产生的非结晶态冻水；结晶冰会衍射并毁掉图像。' },
    { en: 'Single-particle analysis', cn: '单颗粒分析', def_en: 'Aligning and classifying tens of thousands of particle images by orientation, and by conformation when the sample is heterogeneous.', def_cn: '按取向对几万张颗粒图像做对齐与分类，样品不均一时还按构象分类。' },
    { en: 'NMR spectroscopy', cn: '核磁共振波谱', def_en: 'Solution-state structure determination for smaller proteins, and the only routine method reporting dynamics directly.', def_cn: '用于较小蛋白的溶液态结构测定，也是唯一常规直接报告动力学的方法。' },
    { en: 'Resolution', cn: '分辨率', def_en: 'The finest spacing the data distinguishes; near 3.5 angstrom the backbone is traceable, below 1.5 angstrom individual atoms resolve.', def_cn: '数据能分辨的最小间距；3.5 埃附近可追踪主链，低于 1.5 埃单个原子可分辨。' },
    { en: 'R-work and R-free', cn: 'R 因子与 R-free', def_en: 'Agreement between model and data; R-free is computed on reflections withheld from refinement and guards against over-fitting.', def_cn: '模型与数据的符合程度；R-free 用未参与精修的衍射点计算，防止过度拟合。' },
    { en: 'Electron density map', cn: '电子密度图', def_en: 'The experimental object into which coordinates are fitted. Disordered regions have no density and are often absent from the deposited file.', def_cn: '坐标被拟合进去的那个实验对象。无序区域没有密度，常常在存入的文件中缺失。' },
    { en: 'Protein Data Bank (PDB)', cn: '蛋白质数据库', def_en: 'The public repository of experimentally determined structures; 6M0J is the SARS-CoV-2 RBD bound to ACE2.', def_cn: '实验测定结构的公共数据库；6M0J 是 SARS-CoV-2 的 RBD 与 ACE2 结合的结构。' },
    { en: 'AlphaFold', cn: 'AlphaFold', def_en: 'Deep-learning structure prediction; produces a model with no experiment behind it, reliable for single well-represented domains and much less so for complexes.', def_cn: '深度学习的结构预测；产出的模型背后没有实验，对样本充分的单结构域较可靠，对复合物则差得多。' },
    { en: 'pLDDT', cn: 'pLDDT', def_en: 'Per-residue self-confidence of a predicted model. Low values often mark genuine disorder rather than prediction failure.', def_cn: '预测模型的逐残基自信度。低值往往标记真正的无序，而不是预测失败。' },
    { en: 'ipTM', cn: 'ipTM', def_en: 'Predicted confidence in a modelled interface. A low value can mean the docking failed rather than that binding is weak.', def_cn: '对建模界面的预测置信度。低值可能意味着对接失败，而不是结合弱。' },
    { en: 'B-factor', cn: 'B 因子', def_en: 'Per-atom measure of positional spread in a crystal structure, reflecting mobility and disorder; not to be confused with pLDDT.', def_cn: '晶体结构中衡量原子位置弥散程度的量，反映流动性与无序；不要与 pLDDT 混淆。' }
  ],

  quiz: [
    { type: 'mcq',
      q_en: 'Why can a diffraction pattern not be inverted directly into an electron density map?',
      q_cn: '为什么不能把衍射图直接反演成电子密度图？',
      options: [
        'The pattern samples only part of reciprocal space, so the transform is incomplete',
        'The detector records intensity, so phase is lost',
        'Radiation damage alters the crystal faster than a full dataset can be collected',
        'The crystal lattice imposes a symmetry that the transform cannot undo'
      ],
      answer: 1,
      why_en: 'Density and diffraction pattern are Fourier transforms of each other, so inversion would work if you had complete waves. A detector counts photons, giving amplitude squared, and the phases — which carry most of the structural information — are never recorded. Molecular replacement and heavy atoms exist to supply them.',
      why_cn: '密度与衍射图互为傅里叶变换，所以只要有完整的波，反演就成立。但探测器数的是光子，给出振幅的平方，而携带大部分结构信息的相位根本没有被记录。分子置换与重原子就是为了补上它们。'
    },
    { type: 'mcq',
      q_en: 'A large membrane protein complex has never crystallised. Which method is the obvious next choice?',
      q_cn: '一个大的膜蛋白复合物从来没结出过晶体。下一步明显该选哪种方法？',
      options: [
        'NMR, because it works in solution and needs no crystal',
        'Cryo-EM',
        'X-ray again with a different detergent, since no other method reaches useful resolution',
        'Prediction, since experimental methods have already been shown to fail on it'
      ],
      answer: 1,
      why_en: 'Cryo-EM never asks the molecule to form a lattice, and large particles are where it performs best because they give enough signal to align. NMR also needs no crystal but is limited to much smaller proteins, since the spectrum of a large complex is too crowded to assign.',
      why_cn: '冷冻电镜从不要求分子排成晶格，而大颗粒正是它表现最好的地方，因为信号足够用来对齐。NMR 同样不需要晶体，但受限于小得多的蛋白，因为大复合物的谱图拥挤到无法归属。'
    },
    { type: 'mcq',
      q_en: 'A published structure is refined to R-work 0.19 and R-free 0.34. What does the gap indicate?',
      q_cn: '一个已发表结构精修到 R-work 0.19、R-free 0.34。这个差距说明什么？',
      options: [
        'The data were collected at too low a resolution for the number of atoms modelled',
        'The model has been over-fitted',
        'The crystal contained two molecules per asymmetric unit that were not modelled separately',
        'Radiation damage accumulated between the first and last diffraction images'
      ],
      answer: 1,
      why_en: 'R-free is computed only on reflections deliberately withheld from refinement, so it measures agreement with data the model never saw. When it sits far above R-work, the refinement has been fitting noise rather than signal — which is exactly the failure R-free was invented to expose.',
      why_cn: 'R-free 只用被刻意排除在精修之外的衍射点计算，所以它衡量的是模型从未见过的数据的符合程度。当它远高于 R-work 时，精修拟合的是噪声而不是信号——而这正是 R-free 被发明出来要暴露的那种失败。'
    },
    { type: 'short',
      q_en: 'An AlphaFold model of a two-protein complex returns a low ipTM. A colleague concludes the two proteins bind weakly. What is wrong with that conclusion, and what would you do instead?',
      q_cn: '一个双蛋白复合物的 AlphaFold 模型给出很低的 ipTM。同事据此断定这两个蛋白结合弱。这个结论错在哪里？你会改做什么？',
      accept: ['docking', '对接', 'not affinity', '不是亲和力', 'crystal', '晶体', 'contact', '接触', 'validate', '核对', 'binding assay', '结合测定', 'SPR', 'ITC'],
      answer_en: 'The conclusion confuses a confidence score with a measurement. ipTM reports how confident the model is in the interface it built, not how tightly the two proteins bind — nothing in a prediction measures affinity at all. A low ipTM most often means the docking failed, so the model placed the partner on the wrong surface, and a number derived from a wrong pose says nothing about the real complex. I would check the model externally: take an experimentally determined structure of the same or a homologous complex and count how many of its known contact residues the model reproduces. If it recovers essentially none, the pose is wrong and the score is reporting that failure rather than any property of the proteins. This is not hypothetical — in this project, AlphaFold models of RBD-ACE2 complexes recovered 0 to 1 of the 22 contacts seen in 6M0J. If affinity is the real question it needs a binding measurement such as SPR or ITC, because that is a different kind of experiment from structure determination.',
      answer_cn: '这个结论把置信度分数当成了测量。ipTM 报告的是模型对它自己搭出来的界面有多确信，而不是两个蛋白结合得有多紧——预测里根本没有任何东西在测量亲和力。低 ipTM 最常见的含义是对接失败了，也就是模型把配体放到了错误的表面上，而由一个错误的姿态导出的数字对真实复合物什么也没说。我会做外部核对：取同一个或同源复合物的实验测定结构，数一数模型重现了它已知接触残基中的多少个。如果基本上一个都没重现，那么姿态是错的，分数报告的是这次失败，而不是蛋白的任何性质。这不是假设——在这个课题里，RBD-ACE2 复合物的 AlphaFold 模型只重现了 6M0J 中 22 个接触里的 0 到 1 个。如果真正的问题是亲和力，那需要 SPR 或 ITC 这样的结合测定，因为那与结构测定是完全不同的一类实验。'
    }
  ],

  bank: [
    { type: 'mcq',
      q_en: 'Which method reports protein dynamics most directly?',
      q_cn: '哪种方法最直接地报告蛋白的动力学？',
      options: [
        'X-ray crystallography, through the B-factors of each atom',
        'NMR spectroscopy',
        'Cryo-EM, through the spread of particle orientations',
        'Structure prediction, through the per-residue confidence score'
      ],
      answer: 1,
      why_en: 'NMR works in solution and measures relaxation, so it reports motion and its timescale directly. B-factors do reflect mobility but are a static per-atom spread within one lattice, and low pLDDT correlates with disorder without measuring anything.',
      why_cn: 'NMR 在溶液中工作并测量弛豫，所以它直接报告运动及其时间尺度。B 因子确实反映流动性，但那是单一晶格内逐原子的静态弥散；而低 pLDDT 与无序相关，却没有测量任何东西。'
    },
    { type: 'mcq',
      q_en: 'Why must cryo-EM samples be frozen very fast?',
      q_cn: '为什么冷冻电镜样品必须极快地冷冻？',
      options: [
        'To stop the particles from adopting a preferred orientation at the surface',
        'So the water becomes vitreous rather than crystalline',
        'To limit the radiation dose the specimen receives during imaging',
        'To prevent the detergent micelle from dissociating from the protein'
      ],
      answer: 1,
      why_en: 'Crystalline ice diffracts the electron beam and destroys the image. Plunge-freezing outruns crystallisation so the water solidifies as a glass, which is transparent to the beam and holds the particles in random orientations.',
      why_cn: '结晶冰会衍射电子束并毁掉图像。投冻的速度快过结晶，使水以玻璃态固化，对电子束透明，同时把颗粒固定在随机取向上。'
    },
    { type: 'mcq',
      q_en: 'A deposited crystal structure has no coordinates for residues 240 to 258. What does that most likely mean?',
      q_cn: '一个已存入的晶体结构里，240 到 258 号残基没有坐标。这最可能意味着什么？',
      options: [
        'That segment was proteolytically removed before crystallisation',
        'That segment was disordered, so there was no density to build into',
        'Those residues were deliberately deleted from the construct that was crystallised',
        'The refinement software removed them because they worsened R-free'
      ],
      answer: 1,
      why_en: 'A flexible loop occupies many positions across the lattice, so its density averages away and nothing can be modelled into it. Missing residues are missing density, not missing protein — a distinction worth stating explicitly, because a model is what was deposited.',
      why_cn: '柔性环在晶格中占据许多位置，它的密度被平均掉，没有东西可以建模进去。缺失的残基是缺失的密度，不是缺失的蛋白——这个区分值得明说，因为存入数据库的是一个模型。'
    },
    { type: 'mcq',
      q_en: 'What does molecular replacement require that isomorphous replacement does not?',
      q_cn: '分子置换需要而同晶置换不需要的是什么？',
      options: [
        'A crystal that diffracts beyond 2 angstrom resolution',
        'A known structure of a related protein',
        'Data collected at more than one X-ray wavelength',
        'A selenomethionine-substituted version of the protein'
      ],
      answer: 1,
      why_en: 'Molecular replacement borrows starting phases from an existing structure of a similar fold, so it needs one to exist. Isomorphous replacement generates phase information experimentally by soaking in heavy atoms, which is why it was the only route before the database was large.',
      why_cn: '分子置换从一个相似折叠的已有结构那里借来初始相位，所以它需要那个结构存在。同晶置换通过浸入重原子在实验上产生相位信息，这就是为什么在数据库还不大的年代它是唯一的路。'
    },
    { type: 'mcq',
      q_en: 'A predicted model has low pLDDT across one loop. What is the most reasonable reading?',
      q_cn: '一个预测模型在某个环区的 pLDDT 很低。最合理的解读是什么？',
      options: [
        'The prediction failed there and the rest of the model should be distrusted too',
        'That region is probably genuinely disordered',
        'The sequence in that region was misaligned during input preparation',
        'The loop is a crystallisation artefact carried over from the training structures'
      ],
      answer: 1,
      why_en: 'Low per-residue confidence correlates strongly with intrinsic disorder, because a region with no single defined conformation cannot be predicted to have one. It is information about the protein, not only about the model — but it is still not a measurement.',
      why_cn: '逐残基置信度低与内在无序高度相关，因为一个没有单一确定构象的区域，本来就不可能被预测出一个构象来。这是关于蛋白本身的信息，不只是关于模型的——但它仍然不是一次测量。'
    },
    { type: 'short',
      q_en: 'Compare X-ray crystallography, cryo-EM and NMR: what each needs, what each gives, and when you would choose it.',
      q_cn: '比较 X 射线晶体学、冷冻电镜与 NMR：各自需要什么、给出什么、什么时候会选它。',
      accept: ['crystal', '晶体', 'vitreous', '玻璃态', 'solution', '溶液', 'resolution', '分辨率', 'dynamics', '动力学', 'conformation', '构象', 'size', '大小'],
      answer_en: 'X-ray crystallography needs the protein to form an ordered crystal, and that requirement is where it fails; when it works it gives the highest resolution routinely available, and phases have to be recovered separately because the detector records only intensities. I would choose it for a well-behaved soluble protein or domain, especially where a related structure exists so molecular replacement can supply phases. Cryo-EM needs no crystal: single particles are frozen in vitreous ice and tens of thousands of noisy projections are averaged into a map. It suits large complexes and membrane proteins that never crystallised, and its distinctive advantage is that a heterogeneous sample is an asset, since particles in different conformations can be classified into separate maps. Its limits are that small particles give too little signal to align, and that it is computationally heavy. NMR works in solution with no crystal and no freezing, is restricted to smaller proteins because the spectra of large ones are too crowded to assign, and is the only one of the three that reports dynamics and their timescales directly. So the choice follows the sample and the question: crystal and small, X-ray; large and reluctant to crystallise, cryo-EM; small and the question is about motion, NMR.',
      answer_cn: 'X 射线晶体学要求蛋白形成有序晶体，而这个要求正是它失败的地方；一旦成功，它给出常规可得的最高分辨率，而相位必须另行获得，因为探测器只记录强度。对于一个性质良好的可溶蛋白或结构域我会选它，尤其当存在相关结构、可以用分子置换提供相位时。冷冻电镜不需要晶体：单颗粒被冻在玻璃态冰中，几万张有噪声的投影被平均成一张图。它适合大复合物和从未结出晶体的膜蛋白，而它独有的优势是样品不均一反而是资产，因为不同构象的颗粒可以被分类成不同的图。它的局限是小颗粒信号不足以对齐，以及计算量很大。NMR 在溶液中工作，不需要晶体也不需要冷冻，受限于较小的蛋白（大蛋白的谱图拥挤到无法归属），并且是三者中唯一直接报告动力学及其时间尺度的方法。所以选择取决于样品和问题：能结晶且不大，用 X 射线；大而难结晶，用冷冻电镜；小而问题关于运动，用 NMR。'
    }
  ],

  oral: {
    q_en: 'How is a protein structure determined, and how far can you trust a predicted one?',
    q_cn: '一个蛋白结构是怎么测定的？一个预测出来的结构能信到什么程度？',
    model_en: 'Three experimental methods dominate, and they differ in what sample they need and what ' +
              'they give back. X-ray crystallography needs the protein to pack into an ordered ' +
              'crystal, which is usually the hardest step; the crystal diffracts, and because the ' +
              'detector records intensity the phases are lost, so they have to be recovered by ' +
              'molecular replacement from a related known structure, or experimentally with heavy ' +
              'atoms or anomalous scattering. It gives the highest resolution routinely. Cryo-EM ' +
              'needs no crystal: particles are plunge-frozen so the water becomes vitreous rather ' +
              'than crystalline ice, imaged at low dose, and tens of thousands of noisy projections ' +
              'are aligned and averaged into a three-dimensional map. It suits large complexes and ' +
              'membrane proteins, and heterogeneity is an advantage there, because particles in ' +
              'different conformations can be classified into separate states. NMR works in solution ' +
              'on smaller proteins and is the one method reporting dynamics directly. The point I ' +
              'would make about all three is that what gets deposited is a model fitted into ' +
              'experimental data, not a photograph — which is why it carries a resolution and an ' +
              'R-free, R-free being computed on reflections withheld from refinement so that ' +
              'over-fitting is exposed, and why a disordered loop simply has no coordinates. As for ' +
              'prediction: AlphaFold produces a model with no experiment underneath it, and its ' +
              'scores are self-assessments rather than error bars — pLDDT is per-residue confidence, ' +
              'and low values often mark genuine disorder, while ipTM scores a predicted interface. ' +
              'It is frequently close to right for a single well-represented domain and much less ' +
              'reliable for a complex. I have seen this directly: in my own project, AlphaFold models ' +
              'of an RBD-ACE2 complex reproduced 0 to 1 of the 22 contacts that the 6M0J crystal ' +
              'structure shows, meaning the domain had been docked onto the wrong face, so the low ' +
              'score was reporting a docking failure rather than weak binding. The rule I would state ' +
              'is that a prediction is a hypothesis to be checked against an experimental structure ' +
              'and against known functional residues, and that if affinity is the question it needs a ' +
              'binding measurement, because nothing in a structure or a prediction measures that.',
    model_cn: '三种实验方法占主导，区别在于需要什么样品、给回什么。X 射线晶体学要求蛋白堆积成有序晶体，' +
              '这通常是最难的一步；晶体衍射，而因为探测器记录的是强度，相位丢失了，' +
              '必须靠分子置换从一个相关的已知结构那里取得，或用重原子、反常散射在实验上获得。它常规上给出最高的分辨率。' +
              '冷冻电镜不需要晶体：颗粒被投冻，使水变成玻璃态而不是结晶冰，在低剂量下成像，' +
              '几万张有噪声的投影被对齐并平均成一张三维图。它适合大复合物和膜蛋白，而且样品不均一在那里反而是优势，' +
              '因为不同构象的颗粒可以被分类成不同的状态。NMR 在溶液中处理较小的蛋白，是唯一直接报告动力学的方法。' +
              '关于这三者我都想强调一点：被存入数据库的是拟合进实验数据的模型，不是照片——' +
              '这正是它为什么带着分辨率和 R-free，而 R-free 是用排除在精修之外的衍射点算出来的，' +
              '以便暴露过度拟合；也是为什么一段无序的环干脆没有坐标。至于预测：AlphaFold 产出的模型底下没有实验，' +
              '它的分数是自我评估而不是误差棒——pLDDT 是逐残基置信度，低值往往标记真正的无序，' +
              '而 ipTM 评的是预测出来的界面。它对样本充分的单个结构域常常接近正确，对复合物则可靠得多得多。' +
              '这一点我亲眼见过：在我自己的课题里，RBD-ACE2 复合物的 AlphaFold 模型只重现了 6M0J 晶体结构显示的 ' +
              '22 个接触中的 0 到 1 个，说明结构域被对接到了错误的一面，所以那个低分报告的是一次对接失败，而不是结合弱。' +
              '我会给出的规则是：预测是一个待核对的假设，要拿实验结构和已知的功能残基去核对；' +
              '如果问题是亲和力，那需要一次结合测量，因为结构和预测里都没有任何东西在测量它。',
    checklist: [
      { en: 'X-ray: needs a crystal, highest routine resolution', cn: 'X 射线：需要晶体，常规分辨率最高' },
      { en: 'Name the phase problem and one way out of it', cn: '点出相位问题，并给出一条解决途径' },
      { en: 'Cryo-EM: no crystal, vitreous ice, averaging many noisy particles', cn: '冷冻电镜：无需晶体、玻璃态冰、大量噪声颗粒的平均' },
      { en: 'Heterogeneity is an advantage in cryo-EM, a liability in crystallography', cn: '异质性对冷冻电镜是优势，对晶体学是负担' },
      { en: 'NMR: solution, small proteins, the one that gives dynamics', cn: 'NMR：溶液、小蛋白，唯一给出动力学的那个' },
      { en: 'Say that a deposited structure is a model, not a photograph', cn: '说出「存入的结构是模型，不是照片」' },
      { en: 'Resolution and R-free, and what R-free is guarding against', cn: '分辨率与 R-free，以及 R-free 在防什么' },
      { en: 'Missing residues mean missing density, not missing protein', cn: '缺失的残基是缺失的密度，不是缺失的蛋白' },
      { en: 'pLDDT and ipTM are self-assessments, not error bars', cn: 'pLDDT 与 ipTM 是自我评估，不是误差棒' },
      { en: 'The 6M0J check: 0-1 of 22 contacts, so ipTM reported a docking failure', cn: '6M0J 那次核对：22 个接触只中 0 到 1 个，所以 ipTM 报的是对接失败' },
      { en: 'Affinity needs a binding measurement — no structure measures it', cn: '亲和力需要结合测量——没有任何结构在测量它' }
    ]
  }
}

]);
