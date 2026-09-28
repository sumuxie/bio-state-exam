/* Merged spines — the four topics that open the book. 速通简洁版, ONE spine per TOPIC.

   Eight node spines (27 + 13 + 38 + 3 = 81 steps) come out here as four chains of
   16, 16, 16 and 13.

   The merge rule: where a Lehninger telling exists it is the backbone, and the other
   account is folded in only where it ADDS — a number, a name the exam uses, a worked
   case, a consequence the other does not draw. Two of these topics have no Lehninger
   member node at all (cells-and-biomolecules, origin-and-evolution-of-life), so there
   the B chain carries the thread and A material is not imported.

   Every step keeps a `src` naming the pages it was read from; a step built from both
   books carries both, separated by a middle dot. A = Lehninger 8e, B = Biochemie.

   ONE thing to know about the sourcing here. Node 1-6 was written believing that
   Biochemie pp.19–20 had not been extracted, so it stopped after explanation group
   (a) and said so. Those two pages ARE in extracted_full_ch1_3/full_text_ch1_3.txt
   and were read for this merge: groups (b) and (c), the Miller–Urey experiment, the
   dating, the oxygen catastrophe and Kimura's neutral evolution all come from them.
   The origin topic is therefore no longer a stub.

   These four topics open the whole book, so nothing here may lean on a term
   introduced later. Weak interactions and bioenergetics are the foundation that
   enzymes, membranes and metabolism reach back to, and they are written so that a
   later recall_* can point here and land.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------ 细胞与生物分子 ---- */
window.BIOLITE_SPINE["key:cells-and-biomolecules"] = {
  assumed: ["chemistry", "biology", "medicine", "science", "physics", "atom", "molecule",
            "element", "nitrogen", "carbon", "hydrogen", "oxygen", "phosphorus", "sulfur",
            "silicon", "aluminium", "calcium", "sodium", "potassium", "magnesium",
            "chloride", "phosphate", "carbonate", "nitrate", "amine", "organism", "cell",
            "crystal", "protein", "nucleic acid", "dna", "rna", "lipid", "membrane",
            "cell membrane", "cell wall", "plasma membrane", "cytoplasm", "chloroplast",
            "mitochondrion", "mitochondria", "ribosome", "chromosome", "nucleus",
            "endoplasmic reticulum", "golgi apparatus", "lysosome", "peroxisome",
            "vacuole", "centriole", "cilium", "flagellum", "nucleolus", "organelle",
            "gene", "genetic information", "histone", "enzyme", "energy", "entropy, s",
            "mass", "monosaccharide", "polysaccharide", "glycoprotein", "lipoprotein",
            "nucleoprotein", "glycolipid", "escherichia coli", "bacterium", "cyanobacteria",
            "alga", "fungus", "protist", "virus", "whale", "sequoia", "flea", "car",
            "earth", "sea water", "blood plasma", "tissue", "organ", "biosphere",
            "test tube", "computer", "instrument", "journal", "amino acid", "sugar",
            "spectroscopy", "chromatography", "electron microscopy", "polarised light",
            "chlorophyll", "pigment", "thylakoid", "matrix", "actinomycete", "mycoplasma",
            "spirochete", "hydrophobic effect", "hydrogen bond", "salt bridge",
            "van der waals interaction", "dipole", "covalent bond", "primary structure",
            "conformation", "side chain (r)", "hydrocarbon", "monomer", "polymer", "ph"],
  nodeTitle_en: "What biochemistry is, and what living matter is made of",
  nodeTitle_cn: "生物化学是什么，生命物质由什么构成",
  title_en: "A subject that arrived with its instruments, and the ladder of things it studies — from the elements in a rock up to a cell",
  title_cn: "一门跟着仪器一起到来的学科，以及它所研究的那架阶梯 —— 从岩石里的元素一直到一个细胞",
  terms: [
    { en: "biochemistry", cn: "生物化学",
      def_en: "The study of what substances occur in living organisms, how they get in or get built, how they react with one another and with the surroundings, and how they are identified and measured. It belongs at once to the biological sciences and to the chemical ones.",
      def_cn: "研究生物体内存在哪些物质、它们怎么进来或被造出来、彼此之间以及与环境之间如何反应、又如何被鉴定和测定。它同时属于生物科学和化学学科。" },
    { en: "Kjeldahl method", cn: "凯氏定氮法",
      def_en: "A procedure from 1883 for determining how much nitrogen a sample contains. It is the standing example of the analytical capability that had to exist before living matter could be studied chemically at all.",
      def_cn: "1883 年建立的样品含氮量测定法。它是那种分析能力的标准例子 —— 只有先具备这种能力，生命物质才谈得上被化学地研究。" },
    { en: "molecular biology", cn: "分子生物学",
      def_en: "In the broad sense, the explanation of biologically significant events at the molecular level, which makes it part of biochemistry; in today's narrow sense, essentially molecular genetics. The two senses differ in scope by a very large factor, so which one is meant has to be settled first.",
      def_cn: "广义上指在分子层面阐明具有生物学意义的过程，因而是生物化学的一部分；今天的狭义用法基本等同于分子遗传学。两个含义的范围相差极大，所以必须先定下取哪一个。" },
    { en: "reproduction", cn: "繁殖",
      def_en: "The ability of a living thing to assimilate matter from its surroundings and use it to multiply its own living substance, whether by growth of the original individual or by the appearance of further similar individuals. Taken as the most exclusive manifestation of life, and therefore as the criterion that separates living from non-living.",
      def_cn: "生物从周围环境同化物质、并用以增殖自身生命物质的能力 —— 无论表现为原个体长大，还是出现更多相似个体。它被取作生命最具排他性的表现，因而成为区分生物与非生物的判据。" },
    { en: "macrobiogenic elements", cn: "常量生源元素",
      def_en: "H, O, C, N and P, present in every organism at about 1 % of mass and above. Invariable: no organism does without them. Below them come the oligobiogenic elements (Ca, Mg, S, Na, K, Fe, Cl) at 0.05–1 %, and the microbiogenic ones (Cu, Zn, Co, Mn, I, Mo).",
      def_cn: "H、O、C、N、P，在每个生物体中占质量约 1% 及以上，属恒定元素，缺一不可。其下是寡量生源元素（Ca、Mg、S、Na、K、Fe、Cl，占 0.05–1%）和微量生源元素（Cu、Zn、Co、Mn、I、Mo）。" },
    { en: "reduced carbon", cn: "还原态碳",
      def_en: "Carbon carrying hydrogen, as against the oxidised carbon of carbonates and CO₂ that dominates inanimate nature. It is energy-rich, and its energy is released by burning it in air to water and CO₂ — the difference in chemical form that most distinguishes living from non-living matter.",
      def_cn: "带着氢的碳，与无生命自然界中占主导的碳酸盐、CO₂ 等氧化态碳相对。它富含能量，只需在空气中烧成水和 CO₂ 即可释放 —— 这正是生物物质与非生物物质在化学形式上最主要的差别。" },
    { en: "chirality", cn: "手性",
      def_en: "The property of a molecule that makes it non-superimposable on its own mirror image. A solution of one mirror form alone rotates polarised light and is said to be optically active. Natural carbon compounds are mostly optically active; their laboratory-made counterparts are equal mixtures of both forms and are not.",
      def_cn: "分子无法与自身镜像重叠的性质。只含一种镜像形式的溶液会旋转偏振光，称为具有旋光活性。天然碳化合物大多有旋光活性，实验室制备的同类物则是两种形式的等量混合物，没有旋光活性。" },
    { en: "biopolymer", cn: "生物大分子",
      def_en: "The long chain a cell builds by joining monomers — small molecules that can be linked repeatedly to others of their kind. Several such chains then associate into a supramolecular complex, and in most cases only that complex is the actual functional unit.",
      def_cn: "细胞把单体（可反复与同类相连的小分子）连接起来所得到的长链。若干条这样的链再缔合成超分子复合物，而在大多数情况下，只有那个复合物才是真正的功能单位。" },
    { en: "compartment", cn: "区室",
      def_en: "A smaller enclosure inside living matter, between which exchange of substances is limited. Each may hold its own pH and ion concentrations and run its own reactions, and a difference held across a boundary is a special form of energy conservation, usable for synthesis or for carrying information.",
      def_cn: "生命物质内部被分隔出的较小单元，彼此之间的物质交换受到限制。各区室可以维持各自的 pH 和离子浓度、进行各自的反应；而跨边界维持的差异本身是一种特殊形式的能量保存，可用于合成或传递信息。" },
    { en: "in vitro / in vivo / in silico", cn: "体外／体内／计算机模拟",
      def_en: "Three settings for a biochemical result: a considerably simplified model system in a test tube; the natural environment of the living organism; and a computer model of a biochemical system. A test-tube result is a hypothesis about the cell until it has been confronted with work in the organism.",
      def_cn: "生化结果的三种场所：试管里大为简化的模型系统；活体的自然环境；生化系统的计算机模型。试管结果在与活体工作对照之前，只是关于细胞的一个假说。" }
  ],
  steps: [
    {
      en: "Biochemistry studies which substances occur in living organisms, how those substances get in or get built, how they react with one another and with their surroundings, and what methods identify and measure them. That places it at once among the biological sciences, because its object is living nature, and among the chemical ones, because what it describes are chemical transformations. Both parents are still visible in that split: organic chemistry, which began as the chemistry of substances obtained from plants and animals rather than as the chemistry of carbon in general, on one side; physiology, the study of how a living body actually breathes, digests and contracts, on the other. **This subject's earliest name, physiological chemistry, records exactly that descent, so its double membership is ancestry and not an accident of naming.**",
      cn: "生物化学研究的是：生物体内存在哪些物质、这些物质怎么进来或怎么被造出来、它们彼此之间以及与环境之间如何反应、又要用什么方法把它们鉴定和测定出来。这使它同时属于生物科学（它研究的对象是生命自然）和化学学科（它描述的内容是化学转变）。它的两个父母在这道分岔上仍然看得见：一侧是有机化学 —— 它最初指的是从植物和动物身上取得的物质的化学，而不是泛指碳的化学；另一侧是生理学 —— 研究活的身体究竟怎么呼吸、怎么消化、怎么收缩。**这门学科最早的名字 physiological chemistry（生理化学）把这个来历记得清清楚楚，所以它的双重身份是血统，不是命名上的偶然。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "so why did a subject with parents that old only appear at the end of the 19th century?",
      link_cn: "那么，父母都这么老的一门学科，为什么要到 19 世纪末才出现？",
      en: "Living matter is highly organised and chemically very complicated, so nothing could be learned from it until chemistry itself was strong enough to take it apart and hand back trustworthy numbers. The worked example is the Kjeldahl method of 1883, a procedure for determining how much nitrogen a sample contains — nitrogen being the element that marks out proteins. Biochemistry then appears as an independent field only in the last quarter of the 19th century, the last of the major chemical disciplines to be founded, and 1906 is the date usually given for its real rise, when the first journal carrying biochemistry in its title, Biochemische Zeitschrift, began publication. The explosive growth that followed in the second half of the 20th century rested on four physico-chemical methods, every one of them borrowed from physics: spectroscopy, which measures how a substance absorbs or emits light and identifies it by that pattern; chromatography, which separates a mixture by making it travel through a material that holds different components back by different amounts; X-ray structure analysis, which works out where atoms sit in a crystal from the way that crystal scatters X-rays; and electron microscopy, which uses a beam of electrons instead of light and so resolves objects far too small for a light microscope. **The founding date of this field follows an instrument rather than an idea, and it keeps accelerating whenever physics does** — which is also why it now sits so close to biophysics, the study of living systems by the methods and concepts of physics, that where one stops and the other starts depends largely on which department you are standing in.",
      cn: "生命物质高度组织化、化学上极其复杂，所以在化学本身强到能把它拆开、并交回可信数字之前，从它身上什么也学不到。具体的例子是 1883 年的 Kjeldahl method（凯氏定氮法），一套测定样品含氮量的操作 —— 而氮正是标志蛋白质的那个元素。于是生物化学作为独立学科出现于 19 世纪最后二十五年，是各大化学学科中成立最晚的一个；通常用来标记它真正兴起的年份是 1906 年 —— 第一本以「生物化学」命名的期刊《Biochemische Zeitschrift》创刊。此后 20 世纪下半叶的迅猛增长，建立在四种物理化学方法之上，而它们无一不是从物理学借来的：spectroscopy（光谱学）测量物质如何吸收或发射光，并靠这个图样把它认出来；chromatography（色谱）让混合物穿过一种材料，各组分被拖住的程度不同因而被分开；X-ray structure analysis（X 射线结构分析）依据晶体对 X 射线的散射方式推算原子在晶体中的位置；electron microscopy（电子显微镜）用电子束代替光，因而能分辨光学显微镜下根本看不见的东西。**这门学科的诞生日期跟着一件仪器走，而不是跟着一个想法走；物理学一提速，它就跟着提速 —— 这也是为什么它如今与 biophysics（生物物理学，即用物理学的方法与概念研究生命系统）靠得极近，谁到哪儿为止、谁从哪儿开始，很大程度上取决于你站在哪个系里。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "one neighbouring name causes more trouble than the rest, because it means two different things",
      link_cn: "有一个邻近的名字比其余都更麻烦，因为它有两个不同的意思",
      en: "In the broad sense, molecular biology explains biologically significant events at the molecular — and therefore chemical — level, which makes it a part of biochemistry. A narrower sense now dominates everyday use, in which it means essentially molecular genetics, the study of genes and their expression at the level of the molecules involved. Three applied directions run outward from this field as well: towards medicine, through pharmacology, which is how drugs act on the body, toxicology, which is how poisons act on it, and clinical biochemistry, which measures substances in blood and urine to diagnose disease; towards agriculture, as agrochemistry; and towards ecology, the study of how organisms interact with their environment. Direct application of biochemical knowledge in production is biotechnology. **Which sense of molecular biology is meant has to be settled before the phrase is usable at all, because the broad one takes in the whole of biochemistry and the narrow one takes in a corner of it.**",
      cn: "广义上，molecular biology（分子生物学）在分子层面 —— 因而是化学层面 —— 阐明具有生物学意义的过程，因此它是生物化学的一部分。如今日常使用中占上风的是更窄的含义：它基本等同于 molecular genetics（分子遗传学），即在所涉分子的层面研究基因及其表达。这门学科还向外延伸出三个应用方向：通往医学，经由 pharmacology（药理学，药物如何作用于身体）、toxicology（毒理学，毒物如何作用于身体）和 clinical biochemistry（临床生化，通过测定血液和尿液中的物质来诊断疾病）；通往农业，即农业化学；通往生态学，也就是研究生物如何与环境相互作用的学科。把生化知识直接用于生产，则是 biotechnology（生物技术）。**「分子生物学」取哪一个含义，必须在用这个词之前就定下来，因为广义的那个囊括整门生物化学，狭义的那个只占它一个角落。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "and now the object itself. Telling a living thing from a non-living one looks trivial and has no sharp definition",
      link_cn: "现在说对象本身。区分生物与非生物看上去理所当然，却并没有精确的定义",
      en: "A virus shows very limited manifestations of life, and structurally it comes close to a crystal — a regular repeating array of identical units. At the far end of the size scale, some hypotheses go the other way and treat the whole Earth as a single living superorganism, an idea named Gaia. A boundary with something sitting on the line at one end and a planet arguable at the other can only be fixed by choosing a criterion. To assimilate matter means to take it in from the surroundings and make it part of oneself, and the criterion chosen is reproduction: the general ability of a living thing to assimilate matter and use it to multiply its own living substance, whether that shows as the original individual simply growing larger or as further similar individuals appearing. Life has other manifestations — movement, irritability, which is the capacity to respond to an external stimulus, and purposeful or even conscious action — and each of those three has non-living imitations. **Reproduction carries the definition because it is the exclusive one: it is the property non-living matter does not manage even in a limited way**, and exclusivity, not importance, is what qualifies a criterion to do the separating.",
      cn: "病毒表现出的生命迹象非常有限，结构上接近晶体 —— 由完全相同的单元规则重复排列而成的东西。在尺度谱的另一端，有些假说反其道而行，把整个地球看作一个活的超级有机体，这个想法叫 Gaia（盖娅）。一条边界，一端线上坐着东西、另一端连行星都可以拿来争论，那它只能靠选定一个判据来确定。所谓「同化」物质，就是把它从周围环境吸收进来、变成自己的一部分；而被选中的判据是繁殖：生物普遍具有的、同化物质并用以增殖自身生命物质的能力，无论表现为原个体单纯长大，还是表现为出现更多相似的个体。生命还有别的表现 —— 运动、irritability（应激性，即对外界刺激作出反应的能力），以及有目的甚至有意识的行为 —— 这三样在非生命界都各有仿制品。**定义交给繁殖来扛，因为它才是排他的那一个：这是非生命物质连有限地做到都做不到的性质；让一个判据有资格去做区分的是排他性，而不是重要性。**",
      src: "B §1.2, pp.10–11",
      beyond: true,
      beyondNote: "pp.10–11 say that viruses show limited vital manifestations and approach crystals structurally, without defining either word. The one-clause descriptions of a virus and of a crystal are standard first-year material, added here so the sentence stands on its own."
    },
    {
      link_en: "and that criterion, applied to the thing left sitting on the line, gives an answer",
      link_cn: "把这个判据用在刚才留在线上的那个东西上，答案就出来了",
      recall_en: "the virus from the step above, no longer undecided",
      recall_cn: "上一步那个悬而未决的病毒，现在有了归属",
      en: "A virus is an intracellular parasite, simpler than a prokaryotic cell, which is a cell with no separate nucleus inside it. A virus is in essence just the genetic information needed to make more of itself, and it uses the biochemical apparatus of a host cell to exist and to multiply. **Multiplying is exactly what the chosen criterion asks for, so a virus counts as living matter under that definition** — a borderline case is decided by the criterion rather than by how simple the object looks.",
      cn: "病毒是细胞内寄生物，比原核细胞还简单 —— 原核细胞就是内部没有独立细胞核的细胞。病毒本质上只是「再造出自己所必需的那份遗传信息」，它借用宿主细胞的生化装置来存在、来增殖。**增殖恰恰就是刚才选定的判据所要求的，所以按那个定义，病毒算作生命物质 —— 边界情形由判据来裁决，而不是由它看上去有多简单来裁决。**",
      src: "B §1.3, p.15"
    },
    {
      link_en: "structurally, one feature stands out above the others, and two more belong with it",
      link_cn: "在结构上有一个特征压过其余，另有两个与它配套",
      en: "The most striking structural characteristic of living matter is a high degree of organisation. Two further characteristics belong with it because they are what keep that organisation from running down: regulation of the processes going on inside living matter, and maintenance of a constant internal environment within relatively narrow limits. Living matter is at the same time a dynamic system, under constant change and constantly renewing itself. **Holding an internal environment constant therefore costs energy every second, rather than being a state a thing can reach once and then settle into.**",
      cn: "生命物质在结构上最显著的特征是高度的组织性。另有两个特征与之配套，因为正是它们让这种组织性不至于自行瓦解：对生命物质内部所进行过程的调节，以及把内环境维持在相对狭窄范围内的恒定。与此同时，生命物质是一个动态系统，处在不断的变化之中，并不断自我更新。**所以把内环境维持恒定这件事每一秒都在烧能量，而不是某种一旦达到就可以躺在里面的状态。**",
      src: "B §1.2, pp.10–11",
      see: [{ id: "L-1-3-1", en: "that steady state measured: how far from equilibrium a cell actually sits", cn: "把这个稳态量出来：细胞离平衡究竟有多远" }]
    },
    {
      link_en: "now the chemistry, and the first answer people expect turns out to be wrong",
      link_cn: "现在说化学，而人们通常预期的第一个答案是错的",
      en: "Living matter contains no element that does not also occur in inanimate nature, so qualitatively there is nothing special in it at all; the difference is quantitative. Living matter is conspicuous for a high concentration of the light elements, and silicon and aluminium, two of the commonest elements on Earth, are strikingly scarce in it. Sorted by how much of each is present, the elements fall into four groups. Macrobiogenic, also called primary biogenic, are H, O, C, N and P, each present in all organisms at roughly 1 % of mass and above. Oligobiogenic are Ca, Mg, S, Na, K, Fe and Cl, at 0.05–1 % of mass. Microbiogenic are Cu, Zn, Co, Mn, I and Mo, present in the smallest quantities. Variable elements are B, Si, V, Br, Li, As, Se, Ti and Al, which reach significant amounts only in some species and are also called trace elements or microelements. **The first three groups are invariable — every organism carries all of them, so the absence of any one is lethal** — while a variable element is a given species' own business, and that split matters far more than the sizes of the four groups.",
      cn: "生命物质不含任何在无生命自然界中不存在的元素，所以从定性角度看它里面根本没有什么特别的东西；差别是定量的。生命物质的显著之处在于轻元素浓度很高，而地球上最丰富的元素中的硅和铝，在它里面稀少得引人注目。按含量多少排下来，元素分成四组。Macrobiogenic elements（常量生源元素，又称初级生源元素）是 H、O、C、N、P，在所有生物体中各占质量约 1% 及以上。Oligobiogenic elements（寡量生源元素）是 Ca、Mg、S、Na、K、Fe、Cl，占质量 0.05–1%。Microbiogenic elements（微量生源元素）是 Cu、Zn、Co、Mn、I、Mo，含量最少。可变元素是 B、Si、V、Br、Li、As、Se、Ti、Al，只在某些物种中达到显著的量，也叫痕量元素或微量元素。**前三组属于恒定元素 —— 每一个生物体都具备全部这些元素，因此缺了任何一个都是致命的；可变元素则是某个物种自己的事。这个划分比四组各占多少要紧得多。**",
      src: "B §1.2, pp.10–11, Tab. 1.1"
    },
    {
      link_en: "and the proportions can be laid beside a rock, with one column that has to be read carefully",
      link_cn: "这些比例可以和一块岩石并排放着看，其中有一列必须小心地读",
      recall_en: "this is the measurement behind the claim that living matter concentrates the light elements",
      recall_cn: "这就是上一步「生命物质富集轻元素」那句话背后的实测数据",
      en: "Human body against Earth's crust, as mass % / atomic %: O 65.0 / 25.5 against 49.5 / 54.9 · C 18.5 / 9.7 against 0.1 / 0.14 · H 10.0 / 62.8 against 0.9 / 16.0 · Ca 1.5 / 0.24 against 3.4 / 1.5 · Si below 0.001 against 25.7 · Al below 0.001 against 7.5. Mass per cent weighs the atoms; atomic per cent counts them, and hydrogen is 10 % of body mass but 62.8 % of the body's atoms because a hydrogen atom is the lightest there is. **Carbon is enriched 185-fold in a human body over the crust while silicon runs the other way by more than four orders of magnitude**, so life is built out of the crust's rare elements and leaves its common ones alone.",
      cn: "人体对地壳，以质量% / 原子%表示：O 65.0 / 25.5 对 49.5 / 54.9 · C 18.5 / 9.7 对 0.1 / 0.14 · H 10.0 / 62.8 对 0.9 / 16.0 · Ca 1.5 / 0.24 对 3.4 / 1.5 · Si 低于 0.001 对 25.7 · Al 低于 0.001 对 7.5。质量百分比是把原子称重，原子百分比是把原子数个数；氢占人体质量 10%，却占人体原子数的 62.8%，因为氢原子是最轻的原子。**碳在人体中比地壳富集 185 倍，硅则朝相反方向差出四个数量级以上 —— 生命是用地壳里稀有的元素造起来的，而地壳里常见的那些它根本不碰。**",
      src: "B §1.2, p.11, Tab. 1.2"
    },
    {
      link_en: "proportions were half the answer. The other half is about chemical form, and about handedness",
      link_cn: "比例只是答案的一半。另一半关于化学形式，以及关于「左右手」",
      en: "In inanimate nature carbon is mostly already oxidised, as carbonates in rock and as CO₂ in air, and nitrogen is mostly free N₂ gas or oxidised as nitrates. Living matter holds both of them reduced: carbon carrying hydrogen, and nitrogen above all as amines, compounds in which nitrogen carries hydrogen and is bonded to carbon. Both elements are therefore taken up in a low-energy oxidised form and have to be reduced before use, and paying for that reduction is a standing cost of being alive. One further feature has no accepted explanation. Chirality is the property of a molecule that makes it non-superimposable on its own mirror image, the way a left hand cannot be laid onto a right one, and a solution containing a single mirror form rotates the plane of polarised light and is called optically active; the carbon compounds of living matter are mostly optically active, whereas the same compounds made in a laboratory come out as an equal mixture of both mirror forms and rotate nothing. **Reduced carbon is energy-rich, and its energy is released by nothing more elaborate than burning it** in air to water and CO₂ — which is the whole economy of life in one sentence, since every process an organism runs is paid for by letting some of its carbon fall back to CO₂.",
      cn: "在无生命自然界中，碳大多已经是氧化态 —— 岩石中的碳酸盐、空气中的 CO₂；氮则多以游离的 N₂ 气体存在，或呈氧化态的硝酸盐。生命物质把这两样都保持在还原态：碳带着氢，氮尤其以 amine（胺）的形式存在 —— 胺就是氮带着氢、并与碳相连的化合物。于是这两种元素都是以低能量的氧化形式被摄入的，必须先还原才能使用；为这一步还原买单，是「活着」的一项固定开销。还有一个特征至今没有公认的解释。Chirality（手性）是一个分子无法与自身镜像重叠的性质，就像左手放不进右手的位置；只含一种镜像形式的溶液会使偏振光的振动面旋转，称为具有旋光活性。生命物质中的碳化合物大多具有旋光活性，而实验室里合成的同一批化合物则是两种镜像形式的等量混合物，什么也不旋转。**还原态的碳富含能量，而释放这份能量不需要任何精巧手段，只要在空气中烧成水和 CO₂ —— 这一句话就是生命的整个经济体系，因为生物体运行的每一个过程，都是靠让一部分碳掉回 CO₂ 来买单的。**",
      src: "B §1.2, p.11",
      openQuestion_en: "Why living matter settled on one mirror form rather than the other, and why it settled at all, is not fully explained.",
      openQuestion_cn: "生命物质为何选定了其中一种镜像形式而非另一种、乃至为何非要作出选择，至今尚未完全阐明。",
      see: [{ id: "2-1-2", en: "the L configuration that every protein amino acid actually has", cn: "所有蛋白质氨基酸实际采取的 L 构型" },
            { id: "L-19-1-1", en: "where the electrons taken off that reduced carbon actually end up", cn: "从还原态碳上摘下来的电子最终去了哪里" }]
    },
    {
      link_en: "among the substances themselves, one holds a special position and is easy to mis-file",
      link_cn: "在这些物质里，有一种地位特殊，而且很容易被归错档",
      en: "Water is the main component of most organisms. It enters reactions as a reactant and leaves them as a product, and it decides which parts of a large molecule face outwards and which hide inside, so it is an active participant in the chemistry rather than a stage on which that chemistry happens to be performed. Its physico-chemical properties carry a second job: a high heat capacity, meaning a large amount of heat is needed to raise its temperature, and a high latent heat of a change of state, meaning a large amount is needed to melt or boil it. Those two properties are part of how an organism holds its internal environment steady, because **a medium that absorbs a great deal of heat for a small change in temperature buffers everything dissolved in it against the temperature of the outside world**.",
      cn: "水是大多数生物体的主要组分。它会作为反应物进入反应、作为产物离开反应；一个大分子的哪些部分朝外、哪些部分躲在里面，也是由它决定的 —— 所以它是化学过程的主动参与者，而不是这些化学恰好上演于其上的舞台。它的物理化学性质还担着第二份差事：高热容，意思是把它的温度升高一点需要吸收很多热；以及高的相变潜热，意思是把它融化或煮沸也需要很多热。**这两项性质是生物体维持内环境稳定的一部分手段，因为一种「吸掉大量热却只升高一点温度」的介质，会把溶在它里面的一切与外界温度隔开。**",
      src: "B §1.3, pp.11–12",
      see: [{ id: "L-2-1-1", en: "what water's polarity actually does, force by force", cn: "水的极性究竟做了什么 —— 一种力一种力地看" }]
    },
    {
      link_en: "the second major component is not a molecule at all, and its proportions carry a historical clue",
      link_cn: "第二大组分根本不是分子，而它的比例里藏着一条历史线索",
      en: "Ions are a significant component of living matter. Among cations these are above all Na⁺, K⁺, Mg²⁺ and Ca²⁺; among anions, chlorides and the oxygen-containing anions, phosphates in particular. How much of them an organism holds in total differs a good deal from species to species. What does not differ is the ratio: in the extracellular fluid surrounding cells — blood plasma, for example — **the relative proportion of the main cations is remarkably constant and close to the composition of sea water, at an atomic ratio of Na : K : Ca of about 100 : 2 : 2**, which is read as a sign that the sea mattered either at the origin of life or in its early stages.",
      cn: "离子是生命物质的重要组分。阳离子中主要是 Na⁺、K⁺、Mg²⁺ 和 Ca²⁺；阴离子中是氯离子和含氧阴离子，尤其是磷酸根。一个生物体总共含有多少离子，物种之间差别相当大。**不变的是比例：在细胞周围的细胞外液里 —— 例如血浆 —— 主要阳离子的相对含量出奇地稳定，并且接近海水的组成，Na : K : Ca 的原子比约为 100 : 2 : 2；这被读作一条线索，说明海洋环境在生命起源、或者生命发展的早期阶段起过重要作用。**",
      src: "B §1.3, p.12",
      see: [{ id: "1-6", en: "the origin of life, where that clue is picked up", cn: "生命的起源 —— 这条线索在那里被接住" }]
    },
    {
      link_en: "the rest of living matter is built as a ladder, and each rung is made of the one below",
      link_cn: "生命物质的其余部分是按一架阶梯造起来的，每一级都由下一级搭成",
      en: "A monomer is a small molecule that can be joined repeatedly to others of its kind, and a biopolymer is the long chain that results. Proteins and nucleic acids are the two biopolymer families; alongside them the other principal building materials are lipids, which are fats, and substances of a sugar nature, occurring both as simple monosaccharides and inside complex polysaccharides. Compounds of different types then join to each other, giving nucleoproteins, glycoproteins, lipoproteins, glycolipids and the like. The ladder does not stop at the polymer: biopolymers associate further into larger supramolecular complexes, and above those sit organelles and then the cell. **In most cases the functional unit is the supramolecular complex and not the single chain, so knowing what one chain is made of never yet says what the working object does.**",
      cn: "monomer（单体）是一种可以反复与同类相连的小分子，由此得到的长链就是 biopolymer（生物大分子）。蛋白质和核酸是两大类生物大分子；与它们并列的另外两类主要建筑材料是脂类（也就是脂肪）和糖类物质 —— 后者既以简单的单糖形式存在，也存在于复杂的多糖之中。不同类型的化合物还会彼此结合，于是有了核蛋白、糖蛋白、脂蛋白、糖脂等等。阶梯并不停在聚合物这一级：生物大分子会进一步缔合成更大的超分子复合物，其上才是细胞器，再上才是细胞。**在大多数情况下，功能单位是那个超分子复合物，而不是单独一条链 —— 所以哪怕把一条链的成分弄清楚了，也还没有说出那个真正干活的东西在干什么。**",
      src: "B §1.3, pp.11–12"
    },
    {
      link_en: "and what holds a complex like that in one shape is not the bonds along the chain",
      link_cn: "而把这样一个复合物固定成一个形状的，并不是链上的那些键",
      en: "For a biomolecule to work, its three-dimensional arrangement — its conformation — matters enormously. Covalent bonds decide the order of the monomer units along the chain, which is called the primary structure, and beyond that the conformation is shaped mainly by noncovalent interactions: ion pairs, also called salt bridges; bonds between dipoles, of which the hydrogen bond is the special case; van der Waals interactions, meaning dispersion forces and dipole–induced-dipole attraction; and the hydrophobic effect, which is the tendency of nonpolar substances and groups — hydrocarbons, the nonpolar parts of lipids, the nonpolar side chains of amino acids — to associate with one another and avoid being surrounded by water, the same way two drops of oil in water run together. **The hydrophobic effect is a property of water rather than an attraction between the nonpolar groups themselves**: it is the result of changes in water's own structure around a solute with little affinity for it, and it both builds the working structure of proteins and drives many other biochemically important reactions.",
      cn: "一个生物分子要能工作，它的三维排布 —— 也就是构象 —— 极其要紧。共价键决定链上各单体单元的排列顺序，这叫一级结构；在此之上，构象主要由非共价相互作用塑造：离子对（也叫盐桥）；偶极之间的键，而氢键就是其中的特例；van der Waals 相互作用，即色散力与「偶极—诱导偶极」吸引；以及疏水效应 —— 非极性物质和基团（烃、脂类的非极性部分、氨基酸的非极性侧链）彼此聚在一起、避免被水包围的倾向，就像水里的两滴油会并到一起。**疏水效应是水的性质，而不是非极性基团之间的吸引：它源自水自身结构在「与水亲和力很低的溶质」周围发生的改变；它既搭出蛋白质的工作结构，也驱动许多别的重要生化反应。**",
      src: "B §1.3, pp.12–13",
      see: [{ id: "L-2-1-1", en: "these four forces measured, and why water decides all of them", cn: "把这四种力量出来，以及水为什么把它们全说了算" },
            { id: "4-3-1", en: "the same interactions folding one polypeptide into its active form", cn: "同样这些相互作用把一条多肽折成活性形式" }]
    },
    {
      link_en: "and living matter is not one uniform mass — it is divided, and the division is doing work",
      link_cn: "生命物质也不是一团均质的东西 —— 它是被分隔的，而这种分隔本身在干活",
      en: "Living matter is differentiated and divided into smaller enclosures called compartments, between which the exchange of substances is limited to some degree. That division lets each compartment hold conditions of its own, such as its own pH and its own ion concentrations, and run its own specific reactions. A boundary between living matter and its non-living surroundings does the same thing at a larger scale, letting an organism keep an internal environment that is often very different from the conditions outside it. **A difference held across a boundary is itself a special form of energy conservation, so a compartment is more than a container**: the gradient it maintains can be spent on synthesising substances or used to carry information.",
      cn: "生命物质是有分化的，被划分成一个个较小的单元，叫作 compartment（区室），区室之间的物质交换在一定程度上受到限制。这种划分使每个区室能够维持自己的条件 —— 例如自己的 pH、自己的离子浓度 —— 并进行各自特定的反应。生命物质与非生命环境之间的那道边界在更大的尺度上做同样的事，使生物体能够维持一个往往与外界条件差别极大的内环境。**跨着一道边界维持的差异，本身就是一种特殊形式的能量保存；所以区室不止是个容器：它维持的这个梯度可以被花掉去合成物质，也可以被用来传递信息。**",
      src: "B §1.3, p.13",
      see: [{ id: "L-19-2-1", en: "a proton gradient across a membrane spent on making ATP, and the experiments that proved it", cn: "把跨膜质子梯度花掉去造 ATP，以及证明这件事的实验" }]
    },
    {
      link_en: "the basic spatial unit common to every form of life comes in two designs",
      link_cn: "各种生命形式共有的那个基本空间单位，有两种设计",
      en: "A cell is that unit, and higher organisms stack it further: cells join into tissues, tissues form specialised organs, individuals of one species together with other organisms form communities, and communities form the biosphere. A prokaryotic cell is the developmentally older and simpler design, with no separate nucleus and no internal membrane structures, bounded by a cytoplasmic membrane and outside that by a cell wall; cyanobacteria, bacteria, actinomycetes, spirochaetes and mycoplasmas are prokaryotes, and Escherichia coli, a bacterium of the human gut, is the best-studied one, with its genetic material in a single chromosome. A eukaryotic cell is the fully developed design, found in protists, algae, fungi, animals and higher plants, and what makes it fully developed is that its interior is divided into organelles: a nucleus 4–6 µm across, bounded by a perinuclear envelope and holding the chromosomes, which are made of DNA and histone proteins, together with the nucleolus; mitochondria of about 1 µm, rich in enzymes, with a folded inner membrane that sets off a further space called the matrix, absent from prokaryotes and carrying DNA of their own; chloroplasts of 5–8 µm, also with their own DNA, bounded by a double membrane with a third membrane inside separating the thylakoid space and holding complexes of proteins with chlorophyll and other pigments, present only in photosynthesising plants; ribosomes of about 20 nm built from RNA and protein; smooth and rough endoplasmic reticulum; the Golgi apparatus; peroxisomes, lysosomes, vacuoles, centrioles and a cilium or flagellum. **A membrane is 6–9 nm thick and made of lipids and proteins in a ratio of roughly 1 : 1**, and that one thin sheet is what performs the division into compartments, the transport of substances and the storage of energy.",
      cn: "这个单位就是细胞；更高等的生物还在它之上继续堆叠：细胞连成组织，组织构成执行专门功能的器官，同种个体与其他生物一起组成群落，群落组成生物圈。原核细胞是演化上更古老、构造更简单的一种：没有分化出的细胞核，也没有细胞内膜结构，外面由细胞质膜包被，膜外还有一层细胞壁；蓝细菌、细菌、放线菌、螺旋体和支原体都是原核生物，其中研究得最透的是人肠道细菌 Escherichia coli（大肠杆菌），它的遗传物质只在一条染色体上。真核细胞是构造完备的那一种，见于原生生物、藻类、真菌、动物和高等植物；所谓「完备」，在于它的内部被划分成细胞器：细胞核直径 4–6 µm，由核周膜包被，内含由 DNA 与组蛋白构成的染色体以及核仁；线粒体约 1 µm，富含酶，内膜折叠并因此隔出另一个空间即基质，原核生物没有它，而它自带 DNA；叶绿体 5–8 µm，同样自带 DNA，由双层膜包被，内部还有一层膜隔出类囊体腔，其中含有叶绿素及其他色素与蛋白的复合物，只存在于进行光合作用的植物中；核糖体约 20 nm，由 RNA 和蛋白构成；光面与粗面内质网；高尔基体；过氧化物酶体、溶酶体、液泡、中心粒，以及纤毛或鞭毛。**膜的厚度是 6–9 nm，由脂类和蛋白按大约 1 : 1 构成 —— 正是这一层薄片在承担区室的划分、物质的转运和能量的保存。**",
      src: "B §1.3, pp.13–15, Tab. 1.3, Obr. 1.3–1.6"
    },
    {
      link_en: "having a ladder of levels raises a question about how any of it can be studied",
      link_cn: "有了这样一架层级阶梯，就带出一个问题：这一切究竟该怎么研究",
      recall_en: "the ladder from monomer up to the biosphere is exactly what makes the choice below unavoidable",
      recall_cn: "从单体一路到生物圈的那架阶梯，正是下面这个选择无法回避的原因",
      en: "An organism exists only as a whole and only in interaction with its surroundings, so on that view it ought to be studied in those linkages, which is the systems approach. Against it stands what is practically workable: isolating one aspect, shielding it from every other influence and studying it on its own, which is reductionism. Argument cannot reconcile the two, because each gives up what the other keeps — the systems approach keeps the real object and loses the ability to control anything, and reductionism keeps control and loses the real object. Biochemistry as a whole is, at least for now, an expression of the reductionist approach, and that admission makes one further step compulsory rather than optional. Knowledge obtained from an isolated reaction, usually in a considerably simplified model system in a test tube — in vitro — has to be confronted with observation and experiment in the natural environment of the living organism — in vivo — and then fitted into the system of biochemical reactions already known; a third setting, in silico modeling, the study of computer models of biochemical systems, is gaining ground alongside them. **An in vitro result is a hypothesis about the cell rather than a fact about it, and confrontation with in vivo work is the step that converts one into the other.**",
      cn: "一个生物体只有作为整体、并且只有在与环境的相互作用中才存在，因此按这个看法，就应当在这些联系之中研究它，这就是 systems approach（系统方法）。与之相对的是实际做得动的做法：把某一个方面单独分离出来，屏蔽掉其他一切影响，单独研究它，这就是 reductionism（还原论）。讲道理调和不了这两者，因为各自都放弃了对方保住的东西：系统方法保住了真实的对象，却失去了控制任何变量的能力；还原论保住了控制，却失去了真实的对象。生物化学作为整体，至少目前，体现的是还原论的路子 —— 而承认这一点，就使得接下来那一步成为必做而非可选。从一个分离出来的反应中获得的知识（通常是在试管里大为简化的模型系统中得到的，即 in vitro，体外）必须拿去与活体自然环境中的观察和实验（in vivo，体内）相对照，然后纳入已知生化反应的体系之中；与这两者并列的第三种场所 in silico modeling（计算机模拟建模，即研究生化系统的计算机模型）正在兴起。**一个体外结果是关于细胞的假说，而不是关于细胞的事实；与体内工作的对照，正是把前者变成后者的那道工序。**",
      src: "B §1.3, p.16"
    }
  ]
};

/* -------------------------------------------- 水与弱相互作用 ---- */
window.BIOLITE_SPINE["key:water-and-weak-interactions"] = {
  assumed: ["water", "molecule", "atom", "electron", "proton", "nucleus", "ion", "charge",
            "dipole", "salt", "solvent", "solute", "solution", "crystal", "gas",
            "protein", "nucleic acid", "dna", "rna", "polysaccharide", "enzyme",
            "substrate", "cell", "organelle", "cell membrane", "plasma membrane",
            "cell wall", "cytosol", "mitochondria", "chloroplast", "lysosome",
            "temperature", "heat", "pressure", "energy", "entropy, s", "enthalpy",
            "equilibrium", "equilibrium constant", "free energy", "covalent bond",
            "polypeptide", "peptide bond", "amino acid", "conformation", "double helix",
            "carbon dioxide", "oxygen", "nitrogen", "ammonia", "hydrogen sulfide",
            "lipid", "fatty acid", "hemoglobin", "myoglobin", "cytochrome", "heme",
            "photosynthesis", "starch", "glycogen", "glucose", "sucrose", "albumin",
            "x-ray crystallography", "diffraction", "nuclear magnetic resonance",
            "alcohol", "aldehyde", "ketone", "hydroxyl group", "carbonyl group",
            "hydrocarbon", "benzene", "hexane", "chloroform", "wax", "sterol",
            "phospholipid", "vitamin", "pigment", "aquaporin", "protist", "bacteria"],
  nodeTitle_en: "Water and the weak interactions",
  nodeTitle_cn: "水与弱相互作用",
  title_en: "Four forces too weak to matter one at a time, and how water decides the shape of everything",
  title_cn: "四种单个弱到可以忽略的作用力，以及水为什么决定了一切分子的形状",
  terms: [
    { en: "electronegativity", cn: "电负性",
      def_en: "How hard an atom pulls on the electrons it shares in a covalent bond. Oxygen and nitrogen pull much harder than hydrogen, which is what gives water its partial charges and makes it polar.",
      def_cn: "一个原子对共价键中共用电子的拉扯强度。氧和氮的拉力远大于氢，这正是水带上部分电荷、成为极性分子的原因。" },
    { en: "hydrogen bond", cn: "氢键",
      def_en: "A hydrogen already covalently attached to an electronegative atom, oxygen or nitrogen, shared with a second electronegative atom nearby. About 10 % covalent and 90 % electrostatic, 23 kJ/mol against 470 for the covalent O—H, and short-lived: 1 to 20 picoseconds. Each water molecule makes at most four, four in ice and an average of 3.4 in liquid water at room temperature, which is why ice is the less dense of the two.",
      def_cn: "一个已经共价连在电负性原子（O 或 N）上的氢，被附近第二个电负性原子共享。约 10% 共价、90% 静电，能量 23 kJ/mol（同一分子内共价 O—H 键为 470），寿命仅 1 到 20 皮秒。每个水分子最多形成四个：冰里四个，室温液态水里平均 3.4 个 —— 这就是冰密度更小的原因。" },
    { en: "hydrophobic effect", cn: "疏水效应",
      def_en: "Water in contact with a nonpolar surface must order itself into a cage-like shell to keep hydrogen-bonding to other water, and ordered water has the lower entropy. Nonpolar groups are pushed together because clustering shrinks the caged surface. It is a property of water rather than an attraction between the nonpolar groups, and it builds protein cores, micelles and bilayers.",
      def_cn: "与非极性表面接触的水，必须排成笼状的壳才能继续和其他水成键，而有序的水熵更低。非极性基团被挤到一起，因为聚团能缩小被笼住的表面积。它是水的性质，不是非极性基团之间的吸引；蛋白质内核、微团和双层都由它搭成。" },
    { en: "amphipathic compound", cn: "两亲性化合物",
      def_en: "One molecule with a polar or charged region at one end and a nonpolar region at the other — a fatty acid, for example. In water it aggregates: tails hidden, heads out, giving a micelle or a lipid bilayer.",
      def_cn: "同一个分子上一端是极性或带电区域、另一端是非极性区域 —— 例如脂肪酸。在水中它会聚集：尾巴藏起来、头朝外，形成微团或脂双层。" },
    { en: "van der Waals radius", cn: "van der Waals 半径",
      def_en: "Two nearby uncharged atoms induce transient dipoles in each other's electron clouds and attract; pushed closer, the clouds repel. There is one separation at which the attraction peaks, and half of it is this radius — 0.11 nm for H, 0.15 for O and N, 0.17 for C, 0.18 for S, 0.19 for P. Many such contacts at once are what reward a snug shape match between two surfaces.",
      def_cn: "两个邻近的不带电原子在彼此的电子云中诱导出瞬时偶极而互相吸引；再靠近则电子云互斥。存在一个吸引力最强的间距，它的一半就是这个半径 —— H 为 0.11 nm，O 和 N 为 0.15，C 为 0.17，S 为 0.18，P 为 0.19。大量这样的接触同时发生，正是对两个表面形状贴合的奖励。" },
    { en: "binding energy", cn: "结合能",
      def_en: "The reduction in the energy of a system when two molecules associate. Stability, measured as the equilibrium constant of the binding, varies exponentially with it, and because many weak interactions would all have to break at the same instant to separate the partners, the total stability far exceeds a simple sum of the individual energies.",
      def_cn: "两个分子缔合时体系能量的下降量。以结合反应的平衡常数衡量的稳定性随它指数式变化；而由于要把两者分开，众多弱相互作用必须在同一瞬间全部断开，所以总的稳定性远远超过各项能量的简单相加。" },
    { en: "dielectric constant", cn: "介电常数",
      def_en: "A physical property of a solvent that reflects how many dipoles it contains, and it divides the force between two charges dissolved in it. Water's is high, so it screens charges strongly; ionic interactions are much stronger in a less polar environment, and inside a nonpolar pocket of a protein it is the local value that decides how two charged groups interact.",
      def_cn: "溶剂的一项物理性质，反映它含有多少偶极，并在溶于其中的两个电荷之间的作用力上作分母。水的这个值很高，因而强烈屏蔽电荷；在极性更低的环境中离子相互作用要强得多，而在蛋白质内部的非极性口袋里，决定两个带电基团如何作用的是那里的局部数值。" },
    { en: "colligative properties", cn: "依数性质",
      def_en: "Vapour pressure, boiling point, melting point and osmotic pressure. All four move with the number of dissolved particles per litre and ignore what those particles are, so a salt that splits into two ions counts twice and a macromolecule counts once however large it is.",
      def_cn: "蒸气压、沸点、熔点和渗透压。这四项都随每升中溶解颗粒的数目变化，而不管这些颗粒是什么 —— 所以裂成两个离子的盐按两个算，而一个大分子无论多大都只算一个。" },
    { en: "osmosis and osmotic pressure", cn: "渗透与渗透压",
      def_en: "Water crossing a semipermeable membrane toward the side of higher solute-particle concentration, and the pressure that tendency produces, approximated by π = icRT. A cell shrinks in a hypertonic solution and swells in a hypotonic one, which is why organelles are fractionated in isotonic buffers.",
      def_cn: "水穿过半透膜、流向溶质颗粒浓度更高的一侧，以及这种趋势所产生的压力，可用 π = icRT 近似。细胞在高渗液中皱缩、在低渗液中膨胀，所以分离细胞器要在等渗缓冲液中进行。" }
  ],
  steps: [
    {
      en: "Each hydrogen atom of a water molecule shares an electron pair with the central oxygen, and the outer orbitals of that oxygen describe a rough tetrahedron with a hydrogen at two corners and a nonbonding pair at the other two; the H—O—H angle is 104.5°, slightly less than the 109.5° of a perfect tetrahedron because the nonbonding pairs crowd the bonds. Oxygen attracts the shared electrons more strongly than hydrogen does — that unequal pull is electronegativity — so the shared electrons spend more time near the oxygen, and each O—H bond becomes an electric dipole. Because the two bonds are bent rather than in a straight line, those dipoles do not cancel. **Water therefore carries a partial positive charge on each hydrogen and a partial negative charge on the oxygen equal to the sum of the two, which makes it a highly polar molecule**, and the consequence runs through the whole of biochemistry: a polar molecule sticks to other polar molecules, starting with more water.",
      cn: "水分子的每个氢原子与中心的氧共用一对电子；氧的外层轨道大致描出一个四面体，两个角上是氢，另外两个角上是不成键的孤对电子；H—O—H 键角为 104.5°，略小于理想四面体的 109.5°，因为孤对电子把成键的那两条挤了一下。氧比氢更用力地拉扯共用电子 —— 这种拉力上的不对等叫 electronegativity（电负性）—— 所以共用电子待在氧附近的时间更多，每条 O—H 键因此成为一个电偶极。而由于两条键是弯折的、不在一条直线上，这两个偶极不会互相抵消。**于是水的每个氢上带部分正电荷、氧上带的部分负电荷等于那两个之和，这使它成为高度极性的分子；而这个后果贯穿整个生物化学：极性分子会黏住别的极性分子，首先就是黏住更多的水。**",
      src: "A pp.43–44, Fig. 2-1"
    },
    {
      link_en: "and that sticking has a name, a size, and a lifetime",
      link_cn: "而这种「黏」有名字、有大小，也有寿命",
      en: "When a hydrogen atom is already covalently attached to an electronegative atom — oxygen or nitrogen — a second electronegative atom nearby can share it, and that shared arrangement is a hydrogen bond: about 10 % covalent, because the bonding orbitals overlap, and about 90 % electrostatic. It is longer and weaker than the covalent bond it hangs off, 0.177 nm against 0.0965 nm, and it costs about 23 kJ/mol to break against 470 kJ/mol for the covalent O—H inside the same water molecule. At room temperature the thermal energy of a solution is of the same order as that, so each hydrogen bond lasts only 1 to 20 picoseconds and another forms within 0.1 ps, with the same partner or a new one; the short-lived groups of water molecules linked this way are called flickering clusters. Extended networks of them also bridge between two dissolved proteins or nucleic acids, letting large molecules interact across several nanometres without touching. **The sum of all those bonds gives liquid water great internal cohesion, which is why water is a liquid at room temperature at all** and why its melting point, boiling point and heat of vaporization are higher than those of most other common solvents — and those same thermal properties are part of how an organism holds its internal temperature steady.",
      cn: "当一个氢原子已经共价连在一个电负性原子（氧或氮）上时，附近第二个电负性原子可以来分享它，这种共享的安排就是氢键：约 10% 共价（因为成键轨道有重叠），约 90% 静电。它比它所依附的那条共价键更长也更弱，0.177 nm 对 0.0965 nm；打断它约需 23 kJ/mol，而打断同一个水分子内部的共价 O—H 键要 470 kJ/mol。室温下溶液的热运动能量与前者同一量级，所以每个氢键只存在 1 到 20 皮秒，0.1 皮秒之内就会再形成一个 —— 搭档可能还是原来那个，也可能换人；这样连起来的短命水分子团被称作 flickering clusters（闪烁团簇）。它们连成的延伸网络还能在两个溶解的蛋白或核酸之间搭桥，让大分子隔着几个纳米、彼此不接触地相互作用。**所有这些键加起来，赋予液态水极强的内聚力 —— 这既是水在室温下还能是液体的原因，也是它的熔点、沸点和汽化热高于大多数常见溶剂的原因；而正是这些热学性质，构成了生物体维持体内温度稳定的手段之一。**",
      src: "A pp.43–44 · B §1.3, p.12"
    },
    {
      link_en: "count how many each molecule can make, and ice explains itself",
      link_cn: "数一数每个分子最多能做几个，冰就自己解释了自己",
      en: "The near-tetrahedral arrangement of orbitals around the oxygen lets each water molecule hydrogen-bond to as many as four neighbours — two through its own hydrogens, two through the nonbonding pairs. In ice every molecule is fixed in place and makes all four, giving a regular crystal lattice; in liquid water at room temperature and atmospheric pressure the molecules are disorganised and in continuous motion, and each makes an average of only 3.4. Melting or evaporating water takes heat up from the surroundings: +5.9 kJ/mol for ice to liquid and +44.0 kJ/mol for liquid to gas, so the enthalpy change is positive in both cases and neither would happen if enthalpy alone decided it. What drives both is the entropy gained as the highly ordered arrays relax, and a process goes on its own only when the free-energy change ΔG = ΔH − TΔS is negative. **The open lattice of ice holds its molecules further apart than the jostling liquid does, so ice is less dense than water and floats on it.**",
      cn: "氧周围轨道接近四面体的排布，使每个水分子最多能与四个邻居形成氢键 —— 两个通过它自己的氢，两个通过不成键的孤对电子。在冰里，每个分子都被固定在原处、四个全部做满，形成规则的晶格；在室温常压的液态水里，分子是散乱且不断运动的，平均只做 3.4 个。把水融化或蒸发都要从环境吸热：冰变液态 +5.9 kJ/mol，液态变气态 +44.0 kJ/mol —— 两者的焓变都是正的，如果只由焓说了算，这两件事都不会发生。真正推动它们的是高度有序的排列松开时增加的熵；而一个过程只有在自由能变化 ΔG = ΔH − TΔS 为负时才会自行进行。**冰那个疏松的晶格把分子撑得比拥挤流动的液体更开，所以冰的密度小于水、能浮在水面上。**",
      src: "A pp.44–45, Fig. 2-2"
    },
    {
      link_en: "the same bond made with something other than water turns straight into a solubility rule",
      link_cn: "同样的键，只要不是和水做，就直接变成一条溶解度规则",
      en: "Hydrogen bonds are not unique to water. They form readily between an electronegative atom acting as acceptor, usually oxygen or nitrogen, and a hydrogen covalently bonded to another electronegative atom acting as donor, whether those atoms sit in the same molecule or in two. A hydrogen bonded to carbon takes no part, because carbon is only slightly more electronegative than hydrogen and the C—H bond is barely polar at all — which is why butane, CH₃(CH₂)₂CH₃, boils at −0.5 °C while butanol, CH₃(CH₂)₂CH₂OH, carrying one hydroxyl group and therefore able to hydrogen-bond to its neighbours, boils at 117 °C. So the rule you can apply to a structure you have never seen before is this: **alcohols, aldehydes, ketones and compounds containing N—H bonds all form hydrogen bonds with water and tend to be soluble in it** — look for O—H and N—H groups, and for oxygens and nitrogens carrying a free pair of electrons.",
      cn: "氢键并非水的专利。只要有一个作受体的电负性原子（通常是氧或氮），和一个作供体的、共价连在另一个电负性原子上的氢，两者靠近就容易成键 —— 这些原子在同一个分子里还是在两个分子里都无所谓。连在碳上的氢不参与，因为碳的电负性只比氢略大一点，C—H 键几乎不极性 —— 所以丁烷 CH₃(CH₂)₂CH₃ 的沸点是 −0.5 °C，而带一个羟基、因而能与邻居形成氢键的丁醇 CH₃(CH₂)₂CH₂OH 沸点高达 117 °C。**于是面对一个你从没见过的结构，可以直接用的规则是：醇、醛、酮，以及含 N—H 键的化合物，都能与水形成氢键，因而倾向于溶于水 —— 找 O—H 和 N—H 基团，找带孤对电子的氧和氮。**",
      src: "A p.45, Figs. 2-3 and 2-4"
    },
    {
      link_en: "and this bond has one property the others do not: it points",
      link_cn: "而这种键有一项别的力没有的性质：它是有方向的",
      en: "The attraction between the partial charges is greatest when the hydrogen and the two atoms sharing it lie in a straight line, because that puts the hydrogen's positive charge directly between the two partial negatives; when the two partners are structurally constrained, as they are when both belong to one protein molecule, that ideal geometry cannot be reached and the resulting bond is weaker. **A hydrogen bond is therefore highly directional, and directionality is what turns an attraction into a specification: it holds two groups in one particular geometric arrangement**, which is how many intramolecular hydrogen bonds together confer a very precise three-dimensional structure on a protein or a nucleic acid.",
      cn: "部分电荷之间的吸引在氢与共享它的那两个原子成一条直线时最强，因为这样氢的正电荷正好夹在两个部分负电荷之间；当两个伙伴在结构上被限制住（比如两者都属于同一个蛋白分子），这个理想几何做不到，形成的键就更弱。**所以氢键具有很强的方向性；而方向性把「吸引」变成了「规定」：它把两个基团固定在某一个特定的几何排布上 —— 许许多多分子内氢键合在一起，正是这样赋予一个蛋白或一条核酸极其精确的三维结构的。**",
      src: "A pp.45–46, Fig. 2-5"
    },
    {
      link_en: "charged solutes are a different story, and it is worth separating",
      link_cn: "带电溶质是另一回事，值得单独拎出来",
      en: "Water is a polar solvent and readily dissolves most biomolecules, which are generally charged or polar compounds; those that dissolve easily in it are called hydrophilic, while nonpolar solvents such as chloroform and benzene are poor solvents for them and dissolve hydrophobic molecules such as lipids and waxes instead. For an ionic solid such as sodium chloride two things happen at once. Water molecules turn their partial charges toward each Na⁺ and Cl⁻ and surround it, weakening the electrostatic attraction that held the crystal lattice together, and the ordered crystal becomes a scattered population of hydrated ions with far greater freedom of motion, which raises the entropy of the system; in thermodynamic terms ΔH is small and positive, TΔS is large and positive, and ΔG comes out negative. Water screens charges so effectively because it has a high dielectric constant, a property reflecting how many dipoles a solvent contains, and the force between two charges is divided by it. **Ionic interactions are therefore much stronger in a less polar environment**, and inside a biomolecule it is the highly localised value — in a nonpolar pocket of a protein, say — and not the value for bulk water that decides how two charged groups interact.",
      cn: "水是极性溶剂，能溶解大多数生物分子 —— 后者一般是带电或极性的化合物；容易溶于水的被称为亲水的，而氯仿、苯这类非极性溶剂对它们是糟糕的溶剂，反倒能溶解脂类和蜡这类疏水分子。对氯化钠这样的离子晶体，同时发生两件事。水分子把自己的部分电荷朝向每个 Na⁺ 和 Cl⁻ 并把它围起来，削弱了原本维系晶格的静电吸引；同时有序的晶体变成一群四散的水合离子，活动自由度大大增加，从而提高了体系的熵 —— 用热力学的话说，ΔH 是不大的正值，TΔS 是很大的正值，ΔG 因此为负。水之所以能如此有效地屏蔽电荷，是因为它的介电常数很高；介电常数反映一种溶剂含有多少偶极，而两个电荷之间的作用力要除以它。**所以离子相互作用在极性更低的环境中要强得多；而在一个生物大分子内部，决定两个带电基团如何相互作用的是那个高度局部化的数值（比如蛋白质里某个非极性口袋中的数值），不是本体水的数值。**",
      src: "A p.46, Fig. 2-6, Table 2-1"
    },
    {
      link_en: "some solutes water can barely take at all, and three of them are the gases you breathe",
      link_cn: "有些溶质水几乎接不下来，而其中三个正是你呼吸的气体",
      en: "O₂ and N₂ share their electrons equally between two identical atoms, and in CO₂ each C=O bond is polar but the two dipoles point opposite ways and cancel, so all three are nonpolar. Moving from the disordered gas phase into solution constrains both their motion and the motion of the water around them, which is a decrease in entropy, and being nonpolar they offer nothing in return: nitrogen dissolves at 0.018 g/L, oxygen at 0.035 and carbon dioxide at 0.97, whereas the polar gases ammonia and hydrogen sulfide reach 900 and 1,860 g/L at lower temperatures still. Some organisms get round this with water-soluble carrier proteins — haemoglobin and myoglobin — that carry O₂ for them. **Carbon dioxide takes the other route out: it forms carbonic acid, H₂CO₃, in aqueous solution and travels in blood as the very soluble bicarbonate ion**, HCO₃⁻, so a gas that turns into an acid on dissolving is a gas that changes the pH of whatever it dissolves in.",
      cn: "O₂ 和 N₂ 的电子在两个完全相同的原子之间均分；CO₂ 的每条 C=O 键虽然是极性的，但两个偶极方向相反、互相抵消 —— 所以这三者都是非极性的。从散乱的气相进入溶液，会同时限制它们自己的运动和周围水的运动，这是熵的下降；而作为非极性分子，它们又拿不出任何回报：氮的溶解度是 0.018 g/L，氧 0.035，二氧化碳 0.97；而极性的氨和硫化氢在更低的温度下就能达到 900 和 1,860 g/L。有些生物用水溶性的载体蛋白绕过这个问题 —— 血红蛋白和肌红蛋白 —— 替它们运 O₂。**二氧化碳走的是另一条出路：它在水溶液中形成碳酸 H₂CO₃，并以极易溶的碳酸氢根 HCO₃⁻ 的形式在血液中运输 —— 一种溶解后会变成酸的气体，就是一种能改变所在溶液 pH 的气体。**",
      src: "A p.47, Table 2-2",
      see: [{ id: "L-2-3-1", en: "the blood buffer built out of exactly this equilibrium", cn: "正是用这个平衡搭出来的血液缓冲体系" }]
    },
    {
      link_en: "now the compounds water cannot hydrogen-bond with at all, and the bill they run up",
      link_cn: "现在说水根本没法与之成氢键的那些化合物，以及它们欠下的账",
      en: "Mix water with benzene or hexane and two phases form. A nonpolar compound has no partial charges and no O—H or N—H groups, so it cannot make energetically favourable interactions with the solvent, and it interferes with the hydrogen bonding among the water molecules around it. Every solute does that much; a polar or charged one compensates by forming new solute–water bonds, and a nonpolar one offers no compensation at all. Water molecules next to it are constrained in their possible orientations and form a highly ordered cage-like shell around each solute molecule in order to keep hydrogen-bonding to one another — less rigidly than in a clathrate, which is a crystalline compound of a nonpolar solute with water, but with the same result. Ordered water has lower entropy than free water, so ΔH is positive, ΔS is negative and ΔG is positive: dissolving is unfavourable. **The number of ordered water molecules, and therefore the size of the entropy loss, is proportional to the hydrophobic surface area enclosed inside the cage** — so nonpolar groups are pushed together because clustering shrinks the total surface that has to be caged, and that pressure, the hydrophobic effect, is a property of water and not an affinity between the nonpolar groups themselves.",
      cn: "把水和苯或己烷混在一起，会分成两相。非极性化合物既没有部分电荷，也没有 O—H 或 N—H 基团，所以它无法与溶剂形成能量上有利的相互作用，还会妨碍它周围水分子之间的氢键。任何溶质都会造成这点妨碍；极性或带电的溶质靠形成新的「溶质—水」键来补偿，非极性的则一点补偿也拿不出。紧挨着它的水分子取向被限制住，会围着每个溶质分子排成一个高度有序的笼状壳层，为的是彼此之间还能继续成键 —— 排得不如 clathrate（笼形包合物，即非极性溶质与水形成的结晶化合物）那么死，但效果一样。有序的水比自由的水熵更低，于是 ΔH 为正、ΔS 为负、ΔG 为正：溶解是不利的。**被排列起来的水分子数目、因而熵损失的大小，与被笼在里面的疏水表面积成正比 —— 所以非极性基团被挤到一起，是因为聚成一团能缩小需要被笼住的总表面积；这股挤压力就是疏水效应，它是水的性质，而不是非极性基团彼此之间的亲和力。**",
      src: "A pp.47–48, Fig. 2-7 · B §1.3, pp.12–13"
    },
    {
      link_en: "put both kinds of region in one molecule and it builds a structure by itself",
      link_cn: "把两种区域放进同一个分子里，它就会自己搭出结构来",
      recall_en: "the polar half does the hydrogen bonding of four steps up; the nonpolar half runs up the entropy bill of the step just above",
      recall_cn: "极性的那一半做上面第四步的氢键，非极性的那一半欠上一步那笔熵的账",
      en: "A compound carrying a polar or charged region at one end and a nonpolar region at the other is amphipathic; a fatty acid, with a charged carboxylate head and a long hydrocarbon tail, is the standard case, and proteins, pigments, certain vitamins and the sterols and phospholipids of membranes are amphipathic too. Mix one with water and the two halves are pulled in opposite directions: the polar region interacts favourably with water and tends to dissolve, while the nonpolar region avoids contact with it. The molecules therefore cluster so as to present the smallest possible hydrophobic area to the solvent, with their polar regions arranged to interact with each other and with the water — a micelle when the tails point into a common centre, which may hold hundreds or thousands of molecules, and a lipid bilayer when two sheets of them lie tail to tail with both outer faces polar. **The entropy gained by freeing the immobilised water is what stabilises the aggregate, so the structure is held together by what water does rather than by any bond between the tails**, and that is why a biological membrane is two molecules thick rather than one.",
      cn: "一端带极性或电荷、另一端是非极性区域的化合物叫 amphipathic（两亲性）；标准例子是脂肪酸 —— 一个带电的羧基「头」加一条长长的烃链「尾」；蛋白质、色素、某些维生素，以及膜里的固醇和磷脂，也都是两亲性的。把它和水混在一起，两半被朝相反方向拉扯：极性区与水相互作用有利、倾向于溶解，非极性区则回避与水接触。于是这些分子聚集起来，把暴露给溶剂的疏水面积压到最小，同时把极性区排布成既能彼此作用又能与水作用的样子 —— 尾巴一起指向共同球心的是 micelle（微团），可以容纳成百上千个分子；两层分子尾对尾贴合、两个外表面都是极性的，则是 lipid bilayer（脂双层）。**让这个聚集体稳定下来的，是被解放出来的那些水分子所贡献的熵 —— 所以这个结构是被「水的所作所为」拴住的，而不是被尾巴之间的什么键拴住的；这也正是生物膜为什么是两个分子厚而不是一个分子厚。**",
      src: "A p.48, Table 2-1, Fig. 2-7",
      see: [{ id: "L-11-2-1", en: "what a bilayer does once it exists — fluidity, flip-flop, rafts", cn: "双层一旦存在会怎么活动 —— 流动性、翻转、脂筏" }]
    },
    {
      link_en: "and the same accounting, run backwards, turns out to drive binding",
      link_cn: "同一本账反过来算，结果是它在驱动「结合」",
      en: "While an enzyme and its substrate are apart, each of them forces the water molecules next to it into an ordered shell. When the substrate binds, much of that ordered water is displaced from both surfaces at once and returns to the bulk liquid, and the entropy released gives a thermodynamic push toward forming the complex. Hydrogen bonding between water and a polar solute orders water too, though the energetic effect is smaller than with a nonpolar one. **Releasing ordered water is therefore a driving force in its own right**, which is why the same effect that folds a protein's greasy core also drives many biochemically important reactions, binding among them.",
      cn: "当一个酶和它的底物还分开时，两者各自都在把身旁的水分子按成一层有序的壳。底物一旦结合上去，这些有序的水就从两个表面上被同时挤走、回到本体液相中，释放出来的熵给「形成复合物」提供了一份热力学推力。水与极性溶质之间的氢键也会让水变得有序，只是能量效应比非极性溶质小。**所以「把有序的水放出来」本身就是一股驱动力 —— 这也是为什么那个把蛋白质油腻内核折起来的效应，同时还在驱动许多重要的生化反应，结合过程就是其中之一。**",
      src: "A p.49, Fig. 2-8 · B §1.3, p.13",
      see: [{ id: "L-6-4-1", en: "the binding energy of an enzyme spent on catalysis", cn: "酶把结合能花在催化上的具体做法" }]
    },
    {
      link_en: "one more weak force, and it works between atoms that carry no charge at all",
      link_cn: "还有一种弱的力，它在完全不带电的原子之间也起作用",
      en: "When two uncharged atoms are brought very close together their surrounding electron clouds influence each other: a random momentary lopsidedness in one cloud creates a transient dipole, which induces an opposite transient dipole in the other, and the two attract. That attraction is a van der Waals interaction, also called a London dispersion force. Push the nuclei closer still and the clouds begin to repel, so there is one separation at which the net attraction is greatest — the atoms are then said to be in van der Waals contact — and half that distance is an atom's van der Waals radius: 0.11 nm for hydrogen, 0.15 for oxygen and nitrogen, 0.17 for carbon, 0.18 for sulfur, 0.19 for phosphorus. Covalent radii are shorter, because a shared electron pair pulls the two nuclei together: carbon's is 0.077 nm, which is why a carbon–carbon single bond measures about 0.154 nm. **This is the force that rewards a snug fit — two surfaces matching each other in shape make many of these contacts at once and two that do not make almost none**, which is how a binding site tells one molecule from another.",
      cn: "当两个不带电的原子被拉得很近时，它们周围的电子云会彼此影响：一片云上随机出现的瞬时偏斜形成一个瞬时偶极，并在另一片云上诱导出方向相反的瞬时偶极，两者互相吸引。这种吸引就是 van der Waals 相互作用，也叫 London 色散力。再把两个核往近推，电子云开始互斥，所以存在一个净吸引最强的间距 —— 此时称两原子处于 van der Waals 接触 —— 这个间距的一半就是原子的 van der Waals 半径：氢 0.11 nm，氧和氮 0.15，碳 0.17，硫 0.18，磷 0.19。共价半径更短，因为共用电子对把两个核拉到了一起：碳的共价半径是 0.077 nm，所以一条碳—碳单键长约 0.154 nm。**这是奖励「贴合」的那股力 —— 两个形状互补的表面能一次做出许许多多这样的接触，形状不合的两个表面几乎一个也做不出；结合位点就是这样把一个分子和另一个分子区分开的。**",
      src: "A p.49, Table 2-3"
    },
    {
      link_en: "four forces have now been named. Here is how weak each one is",
      link_cn: "四种力现在都点过名了。接下来是每一种到底有多弱",
      en: "The noncovalent interactions among biomolecules in water are four, and they can be listed exactly: hydrogen bonds, between neutral groups and between peptide bonds; ionic interactions, both attraction and repulsion, formed between ionizable side chains and also called salt bridges; the hydrophobic effect; and van der Waals interactions, available between any two atoms in close proximity, which are dispersion forces and dipole–induced-dipole attraction. About 350 kJ is required to break a mole of C—C single bonds and about 410 kJ a mole of C—H bonds, while as little as 4 kJ is enough to disrupt a mole of typical van der Waals interactions, and a hydrogen bond in liquid water costs 23. Ionic interactions and hydrogen bonds vary in strength with the polarity of the solvent and the alignment of the atoms, and the hydrophobic effect is strengthened by a highly polar solvent such as a concentrated salt solution. **In water at 25 °C the available thermal energy is of the same order of magnitude as any one of these, so all four are continually forming and breaking**, and no single one of them can hold anything in place.",
      cn: "水中生物分子之间的非共价相互作用共四种，可以精确地列出来：氢键，既发生在中性基团之间，也发生在肽键之间；离子相互作用，包括吸引和排斥，由可解离的侧链形成，也叫盐桥；疏水效应；以及 van der Waals 相互作用，任意两个靠得足够近的原子之间都能有，其内容是色散力和「偶极—诱导偶极」吸引。打断一摩尔 C—C 单键约需 350 kJ，一摩尔 C—H 键约需 410 kJ，而扰乱一摩尔典型的 van der Waals 相互作用只要 4 kJ 就够，液态水中的一个氢键则是 23。离子相互作用和氢键的强度随溶剂极性和原子排列而变，疏水效应则会被高极性溶剂（例如浓盐溶液）加强。**在 25 °C 的水里，可用的热运动能量与它们中任何一个都是同一量级，所以四种力都在不停地形成又断开 —— 单独任何一个都固定不住任何东西。**",
      src: "A p.50, Table 2-4 · B §1.3, p.12"
    },
    {
      link_en: "so how does anything hold together? By needing all of them to fail at once",
      link_cn: "那东西靠什么维持不散？靠「必须让它们同时失效」",
      recall_en: "each of the four just weighed against thermal energy; here they are counted instead of weighed",
      recall_cn: "刚才是把这四种力逐个和热运动比大小，现在改成数它们的个数",
      en: "The stability of a noncovalent association is set by its binding energy, the reduction in the energy of the system when binding occurs, and stability measured as an equilibrium constant varies exponentially with that energy. To separate two biomolecules held together by many weak interactions, every one of those interactions has to be disrupted at the same instant — and because they fluctuate randomly and independently, a simultaneous failure is very unlikely. A protein, DNA or RNA molecule offers so many sites of potential hydrogen bonding, ionic pairing, van der Waals contact and hydrophobic clustering that the cumulative effect is enormous, and one consequence of an enzyme or a receptor being large relative to what it binds is that its extensive surface provides many opportunities at once. **Numerous weak interactions therefore give far more stability than a simple summation of small binding energies would suggest**, and the most stable — that is, the native — structure of a macromolecule is normally the one in which they are maximised.",
      cn: "一个非共价缔合的稳定性由它的 binding energy（结合能）决定 —— 也就是结合发生时体系能量的下降量；而以平衡常数衡量的稳定性随这个能量指数式变化。要把靠许多弱相互作用拴在一起的两个生物分子分开，这些相互作用必须在同一瞬间全部被打断 —— 而由于它们各自随机涨落、互不相干，同时失效是极不可能的。一个蛋白、DNA 或 RNA 分子上可供形成氢键、离子对、van der Waals 接触和疏水聚集的位点多到惊人，累加效应因此极其巨大；而酶或受体相对于它所结合的对象体积很大，带来的一个后果正是：它宽阔的表面一次就能提供许多这样的机会。**所以大量弱相互作用给出的稳定性，远远超过把这些小结合能简单相加所能预期的；而一个大分子最稳定的（也就是天然的）结构，通常正是让这些相互作用达到最多的那个。**",
      src: "A p.50"
    },
    {
      link_en: "some of that water never leaves, and it shows up in the structure itself",
      link_cn: "有一部分水根本不走，而且它会出现在结构本身里",
      en: "When the structure of a protein such as haemoglobin is determined by X-ray crystallography, water molecules are often found bound so tightly that they affect the diffraction pattern as though they were fixed parts of the protein, and the same is true in crystals of RNA and DNA; nuclear magnetic resonance detects them in solution as well. These bound molecules behave differently from the bulk water of the solvent — they are not osmotically active, for one thing — and for many proteins they are essential to function. In cytochrome f, one of the electron-carrying proteins of photosynthesis, five water molecules are hydrogen-bonded to each other and to the peptide backbone and side chains of the protein in a row inside a channel. **That row is thought to be the path protons take across the membrane, so bound water is not merely present in a structure but can be a working part of it.**",
      cn: "用 X 射线晶体学测定血红蛋白这类蛋白的结构时，常常会发现有些水分子结合得极紧，紧到它们影响衍射图样的方式就像蛋白本身固定的一部分；RNA 和 DNA 的晶体里也是如此；核磁共振在溶液中同样能检出它们。这些被结合的水分子的行为与本体溶剂中的水不同 —— 举一例，它们没有渗透活性 —— 而对许多蛋白来说它们是行使功能所必需的。在细胞色素 f（光合作用中一个负责传递电子的蛋白）里，有五个水分子在一条通道内彼此成氢键、并与蛋白的肽主链和侧链成氢键，排成一列。**这一列被认为就是质子跨膜时所走的路径 —— 所以结合水不只是「在结构里存在着」，它可以是这个结构中正在干活的一个部件。**",
      src: "A pp.50–51, Figs. 2-9 and 2-10"
    },
    {
      link_en: "last, what dissolved solutes do to water itself — and it depends on counting, not on identity",
      link_cn: "最后是溶质对水本身做了什么 —— 这取决于数个数，而不取决于它们是谁",
      en: "Solutes of every kind alter four physical properties of water: its vapour pressure, its boiling point, its melting point and its osmotic pressure. These are called colligative properties, and all four have the same basis — the concentration of water is lower in a solution than in pure water — so the effect depends only on the number of dissolved particles in a given amount of water and not at all on what those particles are. Sodium chloride, which dissociates into two ions, has twice the effect of the same number of moles of a nondissociating solute such as glucose; the van't Hoff factor i counts that splitting, i × c is the osmolarity, and the osmotic pressure is approximated by π = icRT. Because only the number of particles counts, **a macromolecule has far less effect than an equal mass of its monomers would — a gram of a polysaccharide of 1,000 glucose units acts about like a milligram of glucose** — which is why fuel is stored as starch or glycogen rather than as free sugar: storing it as glucose would raise the osmotic pressure inside the storage cell enormously.",
      cn: "各种溶质都会改变水的四项物理性质：蒸气压、沸点、熔点和渗透压。这四项被称为依数性质，它们的成因是同一个 —— 溶液中水的浓度低于纯水 —— 所以效应只取决于一定量水中溶解颗粒的数目，而与这些颗粒是什么完全无关。会解离成两个离子的氯化钠，其效应是同摩尔数不解离溶质（例如葡萄糖）的两倍；van't Hoff 因子 i 就是用来数这个解离的，i × c 即渗透浓度，渗透压则可用 π = icRT 近似。**正因为只数颗粒个数，一个大分子的效应远小于同等质量的单体 —— 一克由 1,000 个葡萄糖单元组成的多糖，作用大致相当于一毫克葡萄糖 —— 这就是燃料为什么以淀粉或糖原的形式储存、而不是以游离糖储存：若以葡萄糖储存，储存细胞内的渗透压会高得离谱。**",
      src: "A pp.51–52, Fig. 2-11"
    },
    {
      link_en: "and the property that decides whether your cells survive the afternoon",
      link_cn: "以及决定你的细胞能不能撑过这个下午的那个性质",
      en: "A semipermeable membrane lets water through and holds solutes back, and a plasma membrane is close to that for most solutes because protein channels called aquaporins let water pass selectively. Water crosses toward whichever side has the higher osmolarity, and that tendency produces osmotic pressure. A solution matched in osmolarity to a cell's cytosol is isotonic and the cell neither gains nor loses water; in a hypertonic solution, of higher osmolarity, the cell shrinks; in a hypotonic one it takes up water, swells and can burst, which is osmotic lysis. Cells normally hold more biomolecules and ions than their surroundings, so water tends to be driven in, and several defences have evolved against it: bacteria and plants surround the plasma membrane with a nonexpandable cell wall rigid enough to resist the pressure, certain freshwater protists pump water out through a contractile vacuole, and in animals blood plasma and interstitial fluid are held near the osmolarity of the cytosol, partly by the high concentration of albumin and other proteins, while cells also pump Na⁺ out to stay in balance. Plants turn the problem into a structural material: a very high solute concentration in the vacuole draws water in, the rigid wall prevents swelling, and the pressure against that wall — turgor pressure — stiffens the cell, the tissue and the whole plant, which is why lettuce wilts when it loses water. **Mitochondria, chloroplasts and lysosomes are each enclosed by a semipermeable membrane, so a cell fractionation has to be run in an isotonic solution** — buffers commonly carry enough sucrose or another inert solute for the purpose — or the organelles swell and burst before anyone can look at them.",
      cn: "半透膜让水通过、把溶质挡住；质膜对大多数溶质而言接近于此，因为膜上有叫 aquaporin（水通道蛋白）的蛋白质通道选择性地让水通过。水会朝渗透浓度更高的那一侧穿过去，而水的这种趋势产生了渗透压。与细胞胞质渗透浓度相匹配的溶液是等渗的，细胞既不得水也不失水；在渗透浓度更高的高渗溶液里，细胞皱缩；在低渗溶液里它吸水、膨胀，甚至破裂，这就是渗透溶胞。细胞内所含的生物分子和离子通常多于外界，所以水总是倾向于往里涌，为此演化出了好几道防线：细菌和植物在质膜外包一层不可膨胀的细胞壁，硬到足以顶住这个压力；某些淡水原生生物用伸缩泡把水泵出去；动物则把血浆和组织间液维持在接近胞质的渗透浓度上，其中一部分靠白蛋白等蛋白的高浓度来实现，同时细胞还主动把 Na⁺ 泵出去以保持平衡。植物干脆把这个问题变成一种结构材料：液泡里极高的溶质浓度把水吸进来，坚硬的细胞壁不让它胀，于是压向细胞壁的压力（膨压）把细胞、组织乃至整株植物撑硬 —— 生菜失水就会蔫，原因正在这里。**线粒体、叶绿体和溶酶体各自都由半透膜包着，所以细胞分级分离必须在等渗溶液中进行 —— 缓冲液里通常加入足量的蔗糖或别的惰性溶质就是为此 —— 否则这些细胞器还没等人去看，就已经胀破了。**",
      src: "A p.52, Fig. 2-12"
    }
  ]
};

/* -------------------------------------------------- 生物能学基础 ---- */
window.BIOLITE_SPINE["key:bioenergetics-basics"] = {
  assumed: ["cell", "organism", "enzyme", "protein", "nucleic acid", "molecule", "atom",
            "ion", "glucose", "fat", "ATP", "ADP", "AMP", "phosphate", "oxygen",
            "carbon dioxide", "ammonia", "water", "salt", "sulfur", "iron", "light",
            "temperature", "heat", "pressure", "volume", "energy", "concentration",
            "solution", "reaction", "equilibrium", "equilibrium constant", "entropy, s",
            "enthalpy", "haemoglobin", "hemoglobin", "brain", "blood", "membrane",
            "compartment", "mathematics", "physics", "biochemistry", "isoleucine",
            "amino acid", "gene expression", "NADH", "NADPH", "electron", "escherichia coli",
            "yeast", "bacterium", "fungus", "alga", "plant", "animal", "protist",
            "euglena", "cyanobacteria", "photosynthesis", "pathogen", "metabolite",
            "catalyst", "substrate", "nutrient", "intermediate", "kinetics", "ph",
            "activity", "chemical potential", "state quantity", "gibbs energy"],
  nodeTitle_en: "Bioenergetics — what makes a reaction go, and what a cell pays to stay alive",
  nodeTitle_cn: "生物能学 —— 什么让一个反应走得动，以及细胞为「活着」付出什么",
  title_en: "How far from equilibrium a cell actually sits, what coupling really requires, and the two questions that classify every organism on Earth",
  title_cn: "细胞离平衡究竟有多远、反应偶联真正需要什么，以及把地球上每个生物分类的那两个问题",
  terms: [
    { en: "isolated / closed / open system", cn: "孤立／封闭／开放系统",
      def_en: "Isolated exchanges neither matter nor energy with its surroundings; closed exchanges energy alone; open exchanges both. A living organism is open, which is the precondition for holding a steady state indefinitely — and the ΔG < 0 criterion was derived for a closed system, which an organism is not.",
      def_cn: "孤立系统与环境既不交换物质也不交换能量；封闭系统只交换能量；开放系统两样都交换。生物体是开放系统，这是它能长期维持稳态的前提 —— 而 ΔG < 0 这个判据是为封闭系统推出来的，生物体并不是封闭系统。" },
    { en: "state quantity", cn: "状态量",
      def_en: "A property depending only on the overall state of a system and not on the path taken to reach it. Internal energy U and Gibbs energy G are both of this kind, which is why a change can be computed from the two endpoints alone — and why two reactions can be coupled at all.",
      def_cn: "只取决于系统总体状态、而与到达该状态的路径无关的性质。内能 U 和吉布斯能 G 都属此类 —— 正因如此，只凭起点和终点就能算出变化，也正因如此两个反应才可能偶联。" },
    { en: "dynamic steady state", cn: "动态稳态",
      def_en: "Concentrations stay nearly constant because formation matches removal, while the material itself turns over completely. It sits far from equilibrium and costs energy every second; equilibrium is a special case of it, reachable only without exchange of matter, and for a cell equilibrium means death.",
      def_cn: "浓度几乎恒定，因为生成速率与清除速率相抵，而物质本身其实换了个遍。它远离平衡，每一秒都要花能量；平衡态是它的一个特例，只有在不交换物质时才达到，而对细胞来说平衡就是死亡。" },
    { en: "homeostasis", cn: "内稳态",
      def_en: "Keeping the fluctuations of the state quantities within permissible limits around their stationary values — the principle of constancy of the internal environment. It is a condition of the system's stationary behaviour, that is, of its life.",
      def_cn: "把各状态量围绕稳态值的波动维持在允许限度之内，即内环境恒定原理。它是系统保持稳态行为、也就是保持生命的条件。" },
    { en: "shared intermediate", cn: "共有中间产物",
      def_en: "A species produced by one reaction and consumed by another, which is what physically permits the two to be added into one coupled reaction. Without it, a favourable sum of free-energy changes transfers no energy at all: the two reactions simply run side by side.",
      def_cn: "一个反应生成、另一个反应消耗的物质，正是它在物理上使两个反应得以合并成一个偶联反应。没有它，自由能变化之和再有利也传不过去任何能量，两个反应只会各跑各的。" },
    { en: "biochemical standard state, ΔG°′", cn: "生化标准态 ΔG°′",
      def_en: "General thermodynamics puts every activity at unity. Biochemistry instead fixes the hydrogen-ion activity at pH 7 with all other activities unity, because physiological hydrogen-ion activities are nowhere near unit, and marks quantities referred to it with a prime: ΔG°′ and K′. The −30.5 kJ/mol quoted for ATP is such a value.",
      def_cn: "一般热力学取所有组分活度为 1；生物化学则把氢离子活度定在 pH 7、其余活度为 1，因为生理条件下的氢离子活度远非 1；相对于它的量加一撇写作 ΔG°′、K′。ATP 那个 −30.5 kJ/mol 就是这样一个数值。" },
    { en: "phosphoryl group transfer", cn: "磷酰基转移",
      def_en: "How ATP actually drives an endergonic reaction: a phosphoryl group moves from ATP onto an acceptor molecule, keeping part of ATP's chemical potential inside the product. ATP hydrolysed into solution instead of transferred warms the cell and drives nothing.",
      def_cn: "ATP 驱动吸能反应的真实做法：一个磷酰基从 ATP 移到受体分子上，把 ATP 的一部分化学势留在产物里。若不是转移而是水解到溶液里，只会让细胞变热，什么也驱动不了。" },
    { en: "macroergic compounds", cn: "高能化合物",
      def_en: "Compounds from which biochemical processes can obtain a considerable quantity of energy relatively easily, serving as the universal currency for transferring and storing it. Energy can also be banked as an energy-rich situation instead — a non-equilibrium distribution of ions between two compartments, for example.",
      def_cn: "生化过程可以相对容易地从中取得大量能量的化合物，充当转移与储存能量的通用货币。能量也可以改存为一种「富能状态」—— 例如某些离子在两个区室之间的非平衡分布。" },
    { en: "activation energy", cn: "活化能",
      def_en: "The free-energy climb from a reactant's ground state up to the transition state, which has to be surmounted before a reaction can go. It is unrelated to that reaction's ΔG, so a strongly exergonic reaction can still be immeasurably slow. Enzymes lower it and leave ΔG and the equilibrium position untouched.",
      def_cn: "从反应物基态爬到过渡态的那段自由能差，反应必须越过它才走得动。它与该反应的 ΔG 无关，所以强放能的反应也可能慢到测不出来。酶降低的是它，而 ΔG 和平衡位置分毫不动。" },
    { en: "autotrophic / heterotrophic", cn: "自养／异养",
      def_en: "The carbon-source axis. Autotrophs, also called lithotrophs, use CO₂ as carbon source and are the producers of hydrogenated-carbon compounds; heterotrophs, also called organotrophs, consume the organic compounds autotrophs made.",
      def_cn: "碳源这条轴。自养生物（也称无机营养生物）以 CO₂ 为碳源，是含加氢碳化合物的生产者；异养生物（也称有机营养生物）消费自养生物造出的有机化合物。" },
    { en: "phototrophic / chemotrophic", cn: "光养／化养",
      def_en: "The energy-source axis, answered independently of the carbon-source axis. Phototrophs use light radiation, in photosynthesis; chemotrophs obtain energy by oxidising substrates. Crossing the two axes gives four trophic classes, and every organism falls into one of them.",
      def_cn: "能源这条轴，与碳源轴各自独立地回答。光养生物在光合作用中利用光辐射；化养生物通过氧化底物取能。两条轴交叉给出四种营养类型，每个生物都落在其中之一。" },
    { en: "feedback inhibition", cn: "反馈抑制",
      def_en: "The end product of a pathway inhibits the catalytic activity of the first enzyme of that same pathway, so accumulation slows production immediately and nothing downstream is made wastefully. The five-step isoleucine pathway of E. coli is the worked case.",
      def_cn: "一条途径的终产物抑制该途径第一个酶的催化活性，于是积累一旦发生生产立刻减速，下游也不会浪费性地造出东西。大肠杆菌五步的异亮氨酸途径是经典案例。" }
  ],
  steps: [
    {
      en: "A system that exchanges neither matter nor energy with its surroundings is called isolated; one that exchanges energy alone is closed; one that exchanges both is open. A living organism is open, and that is what lets it hold its internal concentrations steady for a lifetime, which a closed system cannot do. That raises a difficulty worth facing at the start, because every relation below is derived for an idealised system: strictly, classical thermodynamics holds only for isolated systems at equilibrium, and such systems exist neither in living nor in inanimate nature. What licenses using it anyway is **the principle of local equilibrium, which under certain assumptions allows a non-equilibrium system, closed or open, to be divided into subsystems that can be regarded with sufficient accuracy as equilibrium ones**. That principle is why classical relations may legitimately describe an individual chemical reaction or a phenomenon at a biological membrane, even though the organism containing them is neither isolated nor at equilibrium.",
      cn: "与环境既不交换物质、也不交换能量的系统叫 isolated（孤立系统）；只交换能量的叫 closed（封闭系统）；两样都交换的叫 open（开放系统）。活的生物体是开放系统 —— 正因为如此，它才能一辈子把体内的浓度维持在恒定水平，而封闭系统做不到这件事。这带出一个一开头就该面对的困难，因为下面每一条关系式都是为理想化系统推出来的：严格说来，经典热力学只对处于平衡的孤立系统成立，而这样的系统在生命界与非生命界都不存在。之所以还能用它，靠的是局域平衡原理 —— 在一定假设下，它允许把一个非平衡的（封闭或开放的）系统划分成若干子系统，而这些子系统可以以足够的精度被当作平衡系统看待。**正是这条原理使经典关系式能够正当地描述个别的化学反应、或生物膜上的某个现象，尽管容纳它们的那个生物体既不孤立、也不处于平衡。**",
      src: "A §1.3, pp.18–27 · B §1.5, p.18",
      openQuestion_en: "Whether a whole organism can be described thermodynamically at all is unsettled. Classical relations were derived for simple idealised systems and cannot fully describe an organism's behaviour — which does not mean the laws of physics fail for living matter; contemporary physics is building new apparatus for it, non-equilibrium thermodynamics and, for processes with an abrupt change of quality, synergetics, both needing mathematics of their own: bifurcation theory, catastrophe theory, and abstract spaces of non-integer dimension called fractals.",
      openQuestion_cn: "整个生物体究竟能否用热力学描述，尚无定论。经典关系式是为简单理想化系统推出来的，无法完整描述生物体的行为 —— 这不是说物理定律对生命物质失效；当代物理学正在为此建造新的工具，即非平衡热力学，以及针对发生质的突变的过程的协同学，两者都需要专门的数学：分岔理论、突变理论，以及非整数维的抽象空间，也就是分形。"
    },
    {
      link_en: "and a constant concentration turns out not to mean that nothing is happening",
      link_cn: "而浓度恒定，结果并不意味着什么事都没发生",
      en: "The haemoglobin carrying oxygen to your brain right now was built within the past month and will be entirely replaced within the next; the glucose from your last meal will have become carbon dioxide or fat before the day is out, and fresh glucose will have taken its place. The blood concentration of each stays almost flat all day anyway. That is a dynamic steady state: synthesis exactly matches breakdown, so the level holds while the material underneath it turns over completely, and holding it costs energy every second. Such a state has parameters that do not change with time, which makes it look from outside like equilibrium; equilibrium is in fact a special case of it, and the difference that matters is that a steady state is reachable in open systems too, that is with exchange of matter. **Time-independence holds for a living system only within a limited interval, because its overall development is non-stationary — ageing and death are that development** — and when a cell can no longer obtain energy it decays toward equilibrium with its surroundings, which for a cell is death.",
      cn: "此刻正把氧气送往你大脑的血红蛋白，是过去一个月里造出来的，下一个月会被全部换掉；你上一餐的葡萄糖，今天结束前就会变成二氧化碳或脂肪，再由新的葡萄糖补上。可是这两样东西在血里的浓度，一整天几乎是平的。这就是动态稳态：合成速率与分解速率恰好相抵，所以水平不动，而底下的物质其实换了个遍；维持它每一秒都在烧能量。这样一个状态的各项参数不随时间变化，因而从外面看很像平衡；平衡其实是它的一个特例，而真正要紧的差别在于，稳态在开放系统里也能达到，也就是允许与环境交换物质。**对活的系统而言，时间无关性只在有限的时间区间内成立，因为它的总体发展是非稳态的 —— 衰老和死亡就是这个发展本身；而细胞一旦再也拿不到能量，就朝着与环境的平衡衰变下去，对细胞来说那就是死亡。**",
      src: "A §1.3, pp.18–27 · B §1.5, p.18"
    },
    {
      link_en: "so how far from equilibrium is that? It can be measured, on one reaction",
      link_cn: "那么离平衡到底有多远？这是可以量的，就量一个反应",
      en: "ATP is the molecule a cell uses to carry chemical energy from the reactions that release it to the reactions that need it, and it breaks down to ADP plus a free phosphate ion in solution, written Pi. Two numbers describe that reaction. The equilibrium constant is the ratio of product to reactant concentrations once the reaction has finished moving, and for ATP breakdown it is about 2 × 10⁵ M. The mass-action ratio, Q, is the same ratio worked out from the concentrations actually present at this moment — and the concentrations measured inside real cells, roughly 5 mM ATP, 0.5 mM ADP and 5 mM Pi, give Q = (0.5)(5)/(5) = 5 × 10⁻⁴ M. The two differ by about nine orders of magnitude, and the cell holds that gap open by continuously extracting energy from nutrients such as glucose and spending it to rebuild ATP from ADP and Pi. Keeping the actual values of the state quantities fluctuating only within permissible limits around their steady values is homeostasis, the principle of constancy of the internal environment. **ATP is enormously more plentiful, and ADP enormously scarcer, than equilibrium would ever allow — so homeostasis is not a resting point but a gap held open at a running cost.**",
      cn: "ATP 是细胞用来搬运化学能的分子：把放能反应里放出来的能量搬到需要能量的反应那里去；它分解成 ADP 加上一个溶液里的游离磷酸离子（写作 Pi）。描述这个反应要用两个数。平衡常数是反应不再移动之后产物与反应物的浓度之比，ATP 分解的这个值约为 2 × 10⁵ M。质量作用比（记作 Q）是同一个比值，但用此时此刻实际存在的浓度算出来 —— 真实细胞里实测的浓度大约是 ATP 5 mM、ADP 0.5 mM、Pi 5 mM，于是 Q = (0.5)(5)/(5) = 5 × 10⁻⁴ M。两者相差约九个数量级；细胞靠不断从葡萄糖这类营养物里提取能量、再用这些能量把 ADP 和 Pi 重新做成 ATP，才把这个差距一直撑开。而把各状态量的实际值维持在稳态值附近某一允许范围内波动，就是内稳态，即内环境恒定原理。**ATP 比平衡所允许的多得多，ADP 比平衡所允许的少得多 —— 所以内稳态不是一个歇脚点，而是一道靠持续开销撑开的缺口。**",
      src: "A p.24, Worked Example 1-1 · B §1.5, p.18",
      see: [{ id: "L-13-3-1", en: "ATP's free energy measured under real cellular conditions", cn: "在真实细胞条件下测量 ATP 的自由能" }]
    },
    {
      link_en: "why would anything spend its whole life pushing uphill like that? Two laws, and the second one is the answer",
      link_cn: "为什么会有东西一辈子这样往上坡推？两条定律，答案在第二条里",
      en: "Thermodynamics is the study of the general laws of energy conversion, and it describes a system through state quantities — properties that depend only on the overall state of a system and not on the path by which it got there, so a change can be worked out by comparing the starting point with the end point. The first law says the total energy of a system plus its surroundings is constant, which is the same statement as saying that the internal energy U of the system is a state quantity. Entropy, written S, measures the randomness of a system's components, and the second law says a process happens by itself when the total entropy of system plus surroundings grows. Three concrete cases show what raises entropy. A teakettle: switch off the burner under water at 100 °C and the heat spreads into the kitchen, raising its temperature immeasurably; no work is done, the energy is all still there, and with no temperature difference left it can never do work again, nor flow back into the kettle. Glucose oxidation: one glucose plus six oxygen, seven molecules, become six carbon dioxide plus six water, twelve molecules, and a reaction that increases the number of molecules gives the pieces more freedom of movement. 125 letters: arranged as a passage of Shakespeare they carry enormous meaning, scrambled they carry none, and the ordered version is the entropy-poor one. **A living organism is highly ordered, non-random and immensely information-rich — an entropy-poor structure, which nature's drift toward randomness is always pulling apart**, and energy spent continuously is what stops that.",
      cn: "热力学研究能量转变的普遍规律，它用状态量来描述一个系统 —— 状态量只取决于系统的总体状态，而与它经由什么路径到达该状态无关，所以只要比较起点和终点就能算出变化。第一定律说：系统及其环境的总能量恒定 —— 这句话和「系统的内能 U 是一个状态量」是同一个说法。熵（记作 S）度量一个系统各组分的随机程度；第二定律说：当系统与环境的总熵增加时，一个过程就会自行发生。三个具体例子说明什么会让熵上升。一、水壶：把 100 °C 沸水下面的炉火关掉，热就散进厨房，把厨房的温度提高了微不足道的一点点；没有做任何功，能量一点没少，可是各处温度一样了，它再也做不了功，也绝不会自己流回水壶。二、葡萄糖氧化：一个葡萄糖加六个氧共七个分子，变成六个二氧化碳加六个水共十二个分子；凡是让分子数目增加的反应，都给了这些碎片更大的活动自由。三、125 个字母：排成一段莎士比亚，含义极其丰富；打乱之后毫无意义 —— 有序的那一版才是熵贫乏的那一版。**活的生物体高度有序、毫不随机、信息量极大，是一个熵贫乏的结构，而自然界朝无序的漂移一直在拆它；持续花掉的能量，就是用来顶住这件事的。**",
      src: "A p.22, Box 1-3 · B §1.5, p.17"
    },
    {
      link_en: "measuring the surroundings' entropy is impractical, so one quantity folds it in",
      link_cn: "测量环境的熵不现实，于是用一个量把它折进去",
      en: "Gibbs energy is defined as G = U + pV − TS, where p is pressure, V volume and T absolute temperature; its first two terms define the enthalpy H = U + pV, and because volume work can be neglected in most biochemical processes, H practically coincides with the internal energy. Written that way G = H − TS, and for a reaction at constant temperature ΔG = ΔH − TΔS. The signs are worth fixing now, because they invert easily under pressure: ΔH is negative when a reaction gives off heat, ΔS is positive when a reaction makes the system more random, and a process tends to happen on its own only when ΔG is negative. At constant pressure and temperature — which are in practice the conditions of biochemical reactions — and in a closed system, the spontaneous processes are exactly those in which G decreases. Here is what that costs a cell: proteins and nucleic acids have a positive free energy of formation, each being less stable and far more ordered than a loose mixture of the monomers it was built from. **Building a macromolecule is uphill by definition, so a cell cannot simply let it happen — it has to pay for every one**; and because G is a state quantity, the difference between starting substances and products settles whether a reaction can proceed, however it is carried out.",
      cn: "吉布斯能定义为 G = U + pV − TS，其中 p 是压力、V 是体积、T 是绝对温度；它的前两项定义了焓 H = U + pV，而由于多数生化过程中体积功可以忽略，H 实际上就与内能重合。这样写下来即 G = H − TS，恒温下的反应则有 ΔG = ΔH − TΔS。符号现在就定死，因为紧张的时候最容易记反：放热的反应 ΔH 为负，让系统更随机的反应 ΔS 为正，而一个过程只有在 ΔG 为负时才倾向于自发进行。在恒定压力和温度下 —— 实际上这就是生化反应的条件 —— 并且在封闭系统中，自发过程恰恰就是 G 下降的那些过程。这对细胞意味着一笔开销：蛋白质和核酸的生成自由能是正的，相对于组成它们的单体的松散混合物，它们都更不稳定、也有序得多。**按定义，造一个大分子就是上坡，所以细胞不能听任其自然发生 —— 每造一个都得掏钱；而由于 G 是状态量，只要知道起始物与产物之差，就足以判定该反应能否进行，与它以何种方式实现无关。**",
      src: "B §1.5, pp.17–18 · A §1.3, pp.18–27"
    },
    {
      link_en: "and here is the one thing that number refuses to tell you",
      link_cn: "而这个数字拒绝告诉你的，是下面这一件事",
      en: "Gibbs energy is a thermodynamic potential, analogous to potential energy in mechanics: a raised stone has a potential energy that says it will fall and says nothing whatever about when. A thermodynamic constant of this kind shows where the final equilibrium lies and gives no information at all about the rate of a process, for which the concrete mechanism is decisive. **Speed is a separate subject — kinetics — and a reaction with a large negative ΔG can therefore, in practice, never happen.**",
      cn: "吉布斯能是所谓热力学势，类比于力学中的势能：一块被举高的石头，其势能说明它会掉下来，却对「什么时候掉」只字不提。这一类热力学常数只表明最终的平衡位于何处，对过程的速率一个字也不说，而速率取决于过程实现的具体机制。**速度是另一门学问 —— 动力学 —— 所以一个 ΔG 为很大负值的反应，实际上完全可能永远不发生。**",
      src: "B §1.5, p.18 · A §1.3, pp.18–27"
    },
    {
      link_en: "path-independence has a second consequence, and this one is what makes life possible at all",
      link_cn: "「与路径无关」还有第二个推论，而正是它让生命成为可能",
      recall_en: "G is a state quantity, three steps up — that is the entire licence for what follows",
      recall_cn: "上面第三步说的「G 是状态量」，就是下面这一切的全部依据",
      en: "Start with weights and string. A raised weight sliding down can lift a smaller weight, and two conditions make that work: a string and pulley physically connect the two, and the large weight was itself raised earlier by some earlier input of energy; friction takes a cut, so the work recovered is always somewhat less than the energy released. Now the chemical version. An endergonic reaction is one with ΔG > 0, energetically unfavourable on its own — glucose + Pi → glucose 6-phosphate is one, at +13.8 kJ/mol. An exergonic reaction is one with ΔG < 0, releasing free energy — ATP → ADP + Pi is strongly so, at −30.5 kJ/mol. Because possibility depends only on the initial and final states, the two standard free-energy changes simply add: +13.8 + (−30.5) = −16.7 kJ/mol for glucose + ATP → glucose 6-phosphate + ADP, which is negative, so it proceeds. Those two reactions also share a common intermediate, Pi, consumed by the first and produced by the second, and that shared species is the string and pulley: it cancels from both sides, which is what lets them be added. A negative sum of free-energy changes is necessary and is not enough on its own: **without a shared intermediate physically linking them, two reactions with a favourable sum simply run side by side and transfer nothing**.",
      cn: "先看重物和绳子。一个被举高的重物落下时可以把一个较小的重物提起来，成立要靠两个条件：一套绳索滑轮把两者物理地连在一起，以及那个大重物先前曾被某次能量输入举高过；摩擦要抽成，所以回收到的功总是略少于放出的能量。换成化学版本。吸能反应是 ΔG > 0 的反应，单独进行时在能量上不利 —— 葡萄糖 + Pi → 6-磷酸葡萄糖就是一个，+13.8 kJ/mol。放能反应是 ΔG < 0 的反应，会释放自由能 —— ATP → ADP + Pi 是强放能的，−30.5 kJ/mol。由于可能性只取决于始态与终态，这两个标准自由能变化直接相加：+13.8 + (−30.5) = −16.7 kJ/mol，对应葡萄糖 + ATP → 6-磷酸葡萄糖 + ADP，结果为负，所以它会进行。而这两个反应还共有一个中间产物 Pi，被前者消耗、被后者生成 —— 这个共有的东西就是那套绳索滑轮：它从两边消去，两个反应才得以相加。**自由能变化之和为负是必要条件，光有它还不够：没有一个把两者物理连起来的共有中间产物，两个总和有利的反应只会各跑各的，什么能量也传不过去。**",
      src: "A pp.24–25, Fig. 1-26, Worked Examples 1-2 · B §1.5, p.18"
    },
    {
      link_en: "so where does a standard free-energy change come from in the first place, and which standard is it?",
      link_cn: "那么一个标准自由能变化最初是从哪来的，而且是哪一个「标准」？",
      recall_en: "this is the Q and the equilibrium constant of the ATP measurement, now written as one equation",
      recall_cn: "这就是刚才 ATP 那次测量里的 Q 和平衡常数，现在写成一个方程",
      en: "The actual free-energy change of a reaction depends on two separate things: a constant belonging to the reaction itself, and how far the present concentrations sit from equilibrium. ΔG = ΔG° + RT ln Q. At equilibrium there is no driving force left and no work can be done, so ΔG = 0 and Q has become the equilibrium constant K, which leaves ΔG° = −RT ln K; K much greater than 1 gives a large negative ΔG°, K much less than 1 a large positive one, and since K can be measured on the bench this is how standard free-energy changes are obtained at all. Which standard, though, has to be stated. General thermodynamics takes the standard state to have unit activities of all components — activity being thermodynamic concentration, defined precisely so that the chemical potential, the partial molar Gibbs energy of one individual component of a mixture, stays a linear function of it in a real solution as it is of concentration in a very dilute one. Physiological hydrogen-ion activities are nowhere near unity, so biochemistry uses instead a standard state in which the hydrogen-ion activity corresponds to pH 7 and all other activities are unity, marked with a prime: ΔG°′ and K′. **Keep the two apart: ΔG°′ is one fixed number per reaction under a stated convention, while ΔG moves with the cell's own concentrations and can change sign.**",
      cn: "一个反应实际的自由能变化取决于两样彼此独立的东西：反应自身固有的一个常数，以及当前浓度离平衡有多远。ΔG = ΔG° + RT ln Q。在平衡时不再有推动力，也做不了功，所以 ΔG = 0，而 Q 已经变成了平衡常数 K，于是剩下 ΔG° = −RT ln K；K 远大于 1，ΔG° 就是很大的负值，K 远小于 1 就是很大的正值；而由于 K 可以在实验台上测出来，标准自由能变化最初正是这样得到的。不过取的是哪个标准，必须说清楚。一般热力学取所有组分活度为 1 的状态作标准态 —— 活度即热力学浓度，其定义正是为了让化学势（多组分体系中某一个别组分的偏摩尔吉布斯能）在实际溶液中仍是它的线性函数，就像在极稀溶液中它是浓度的线性函数一样。而生理条件下的氢离子活度远非 1，所以生物化学改用氢离子活度对应 pH 7、其余组分活度为 1 的标准态，并在符号右上角加一撇：ΔG°′ 和 K′。**两个量务必分开：在说明了约定之后，ΔG°′ 对每个反应只有一个固定值，而 ΔG 会随细胞自身的浓度移动，甚至可以变号。**",
      src: "A §1.3, pp.18–27 · B §1.5, p.18"
    },
    {
      link_en: "back to ATP, with two things about it corrected",
      link_cn: "回到 ATP，有两处要纠正",
      recall_en: "the first correction is the nine-orders-of-magnitude measurement, used now as an explanation",
      recall_cn: "第一处纠正用的正是前面那个「九个数量级」的测量结果，现在拿它来当解释",
      en: "Take the equilibrium constant for ATP breakdown as 2.22 × 10⁵ M, put it into ΔG°′ = −RT ln K′ at 25 °C, and out comes −30.5 kJ/mol; running that backwards, making one mole of ATP costs +30.5 kJ under those conditions, and inside a cell it costs more still, roughly 50 kJ/mol, because cellular concentrations are nowhere near 1 M. First correction: ATP breakdown is strongly exergonic in cells because every living cell holds ATP far above its equilibrium concentration — its phosphoanhydride bonds are ordinary bonds, and the sustained disequilibrium is what makes ATP the universal carrier of chemical energy. Second correction, missed more often: **an endergonic reaction is driven by the transfer of a phosphoryl group from ATP onto another molecule — glucose, in the case above — which keeps part of ATP's chemical potential inside the product**, whereas ATP hydrolysed uselessly into solution warms the cell and drives nothing at all.",
      cn: "取 ATP 分解的平衡常数为 2.22 × 10⁵ M，在 25 °C 下代入 ΔG°′ = −RT ln K′，得到 −30.5 kJ/mol；反过来算，在这一条件下合成一摩尔 ATP 要 +30.5 kJ，而在细胞里代价还要更高，约 50 kJ/mol，因为细胞里的浓度离 1 M 差得很远。第一处纠正：ATP 在细胞里之所以强烈放能，是因为每一个活细胞都把 ATP 维持在远高于其平衡浓度的水平 —— 它的磷酸酐键是普通的键，让 ATP 成为化学能通用载体的，是这种被持续维持的非平衡状态。**第二处纠正，而且这一处更常被漏掉：驱动吸能反应的是一个磷酰基从 ATP 转移到另一个分子上（上面那个例子里就是转到葡萄糖上），这一步把 ATP 原有的一部分化学势保留在了产物里；而 ATP 要是白白水解到溶液里，只会让细胞变热，什么也驱动不了。**",
      src: "A p.25, Worked Example 1-3"
    },
    {
      link_en: "structurally, where in the molecule does that energy sit — and is a molecule the only place to keep it?",
      link_cn: "在结构上，这份能量究竟位于分子的哪里 —— 而分子是唯一能存放它的地方吗？",
      en: "ATP carries two phosphoanhydride bonds, the linkages joining its three phosphates in a row, and these are what supply the free energy for coupled endergonic reactions. A cell cleaves the molecule in two different ways and they are not interchangeable: removing the end phosphoryl group alone breaks one such bond and gives ADP + Pi, the strongly exergonic route used in the glucose 6-phosphate case, while releasing the last two phosphates together gives inorganic pyrophosphate, PPi. The worth of such a bond is stated as a free-energy change per mole, and that number comes from a measured equilibrium constant rather than from anything visible in a structural formula. Compounds of this kind — those from which biochemical processes can obtain a considerable quantity of energy relatively easily — are called macroergic, and they serve every organism as a universal currency for transferring and storing energy, against basic substrates such as water, carbon dioxide, ammonia and salts, which as a class are low in chemically usable energy. **Energy can also be made in advance and banked as an energy-rich situation rather than as an energy-rich compound — a non-equilibrium distribution of certain ions between two compartments, for example** — and then spent to realise energetically unfavourable processes.",
      cn: "ATP 上有两个磷酸酐键，就是把它那三个磷酸一个接一个连起来的键；偶联的吸能反应所用的自由能正是由它们提供的。细胞有两种切开这个分子的方式，二者不可互换：只把末端那个磷酰基摘下来，断的是其中一个键，得到 ADP + Pi，这就是 6-磷酸葡萄糖那个例子用的强放能途径；把末端两个磷酸一起放出来，则得到无机焦磷酸 PPi。这种键值多少钱，是以每摩尔的自由能变化来表述的，而这个数字来自实测的平衡常数，并不是从结构式上看出来的。这一类化合物 —— 生化过程可以相对容易地从中取得可观能量的那些 —— 叫作高能化合物，它们在每个生物体中充当转移和储存能量的通用货币；与之相对的是水、二氧化碳、氨和各种盐类这些基本底物，作为一类，它们所含的化学可利用能量很低。**能量还可以预先制造出来，存成一种「富能状态」而不是一个富能化合物 —— 例如某些离子在两个区室之间的非平衡分布 —— 随后再把它花掉，去实现能量上不利的过程。**",
      src: "A p.21, Fig. 1-25 · B §1.4, p.16 and §1.5, p.18",
      see: [{ id: "L-19-2-1", en: "an ion gradient across a membrane spent on making ATP, and the experiments that proved it", cn: "把跨膜离子梯度花掉去造 ATP，以及证明这件事的实验" },
            { id: "L-13-3-1", en: "why ATP is almost never simply hydrolysed, and what the phosphoryl group is handed to", cn: "为什么 ATP 几乎从不被单纯水解，以及磷酰基究竟被交给了谁" }]
    },
    {
      link_en: "now the quantity that decides how long it takes, which the free-energy change never touched",
      link_cn: "现在说决定「要多久」的那个量 —— 自由能变化从头到尾没碰过它",
      recall_en: "the answer to the warning four steps up: rates are kinetics, and this is the quantity kinetics uses",
      recall_cn: "回答上面第四步那个警告：速率属于动力学，而这就是动力学用的那个量",
      en: "Between reactants and products stands a barrier. Bonds have to be distorted first into a transition state whose free energy is higher than either the reactant or the product, and the climb from the reactant's ground state up to that transition state is the activation energy, ΔG‡; it is unrelated to the reaction's ΔG, which is why a strongly exergonic reaction can be immeasurably slow. Most biochemical reactions proceed at a useful rate only in the presence of a catalyst — a substance that speeds a reaction up without being consumed by it — and as a rule that catalyst is an enzyme, a specialised protein, so which reactions a cell can run is decided by which enzymes it makes. An enzyme works by offering a surface complementary to the transition state in shape, polarity and charge: binding that transition state is itself exergonic, and the energy released pays down the barrier, while holding two reactants side by side in a favourable orientation raises the odds of a productive collision further, together bringing many enzyme-catalysed reactions to about 10⁶ times the uncatalysed rate. **An enzyme changes how fast equilibrium is reached and cannot move where that equilibrium lies.**",
      cn: "反应物和产物之间横着一道能垒。化学键必须先被扭曲成一个过渡态，它的自由能比反应物和产物都高；从反应物基态爬到这个过渡态的高度差，就是活化能 ΔG‡。它和该反应的 ΔG 毫无关系 —— 所以一个强放能的反应也可以慢到测不出来。多数生化反应只有在催化剂存在时才以有用的速度进行 —— 催化剂是能加速反应而自身不被消耗的物质 —— 而这个催化剂通常是酶，也就是特化的蛋白质；所以一个细胞能跑哪些反应，是由它造出哪些酶决定的。酶的做法是提供一个表面，在形状、极性和电荷上都与过渡态互补：与过渡态的结合本身是放能的，放出的能量正好用来抵掉能垒；把两个反应物并排按在有利的取向上，又进一步提高了有效碰撞的概率。两者合起来，让许多酶催化反应达到未催化时的约 10⁶ 倍。**酶改变的是多快到达平衡，它挪不动平衡本身的位置。**",
      src: "A p.26, Fig. 1-27 · B §1.4, p.16",
      see: [{ id: "L-6-4-1", en: "transition-state complementarity watched inside three real enzymes", cn: "在三个真实的酶里看过渡态互补是怎么实现的" },
            { id: "L-6-3-1", en: "how reaction rate is actually measured and what the constants mean", cn: "反应速率究竟怎么测，那些常数又代表什么" }]
    },
    {
      link_en: "that split resolves something that otherwise looks self-contradictory",
      link_cn: "这道区分，解开了一件否则看上去自相矛盾的事",
      recall_en: "the uphill macromolecules from the free-energy step: less stable, and still lying around for years",
      recall_cn: "自由能那一步里「上坡」的那些大分子：更不稳定，却还能放上好几年",
      en: "**A biological macromolecule is thermodynamically less stable than the monomers it is made of, and kinetically stable all the same**, because breaking it down without a catalyst takes years rather than seconds — long enough to be irrelevant on the timescale of the organism carrying it.",
      cn: "**生物大分子在热力学上比组成它的单体更不稳定，同时它在动力学上又是稳定的，因为不靠催化剂把它拆掉需要以年计、而不是以秒计** —— 长到在携带它的那个生物体的时间尺度上根本无关紧要。",
      src: "A p.26, Fig. 1-27"
    },
    {
      link_en: "so much for one reaction. A cell runs more than a thousand of them at once",
      link_cn: "单个反应就说到这。而一个细胞是一千多个反应同时在跑",
      en: "A characteristic feature of life is the use of externally acquired energy to build one's own body, and the compounds an organism takes in are either converted into its own constituents or used as an energy source. Even in an organism as simple as Escherichia coli that takes more than a thousand chemical reactions running in coordination, and the sum of those reactions is metabolism. By position in metabolism, a compound is one of four things: a substrate or nutrient, also called an assimilate, which is what comes in; an intermediate, which may serve as a precursor of a biological macromolecule, as a way of storing energy in a chemically usable form, or as the means of converting one class of biologically significant compound into another; a structural substance proper, which is what the body is actually built of; or a waste product, also called a dissimilate, which is what goes out. That four-way division is relative, because **the same substance is a product seen from the synthetic side of metabolism and a substrate seen from the degradative side** — so asking what a compound is has to be answered by naming the direction you are looking from.",
      cn: "生命的一个特征，是利用从外界获取的能量来建造自己的身体；生物体摄入的化合物，或者被转化成它自身的组成成分，或者被用作能源。即使在大肠杆菌这样简单的生物体里，做成这件事也需要一千多个化学反应协调运转，而这些反应的总和就是代谢。按化合物在代谢中所处的位置，它属于四者之一：底物或养分（也称同化物），即进来的东西；中间产物，它可以充当生物大分子的前体、以化学上可利用的形式储存能量，或者作为把一类具有生物学意义的化合物转变为另一类的手段；本身的建筑物质，也就是身体真正由之构成的东西；以及废物（也称异化物），即出去的东西。**这种四分法是相对的，因为同一种物质，从代谢的合成一侧看是产物，从降解一侧看就是底物 —— 所以「某化合物是什么」这个问题，必须先说明你是从哪个方向看的。**",
      src: "B §1.4, p.16"
    },
    {
      link_en: "and those two sides have names, and one carrier running between them",
      link_cn: "而这两侧各有名字，中间跑着一个载体",
      en: "The degradative pathways that break nutrients down and release free energy are collectively catabolism; the synthetic pathways that build large molecules from small precursors, always at an energy cost, are anabolism; the whole network of both is metabolism. The energy catabolism releases drives ATP synthesis, and that is exactly how the cellular ATP concentration is kept far above equilibrium, so ATP is the link between the two halves — earned in exergonic reactions and spent in endergonic ones, the way money is in an economy. There is a second currency: catabolism also produces the reduced electron carriers NADH and NADPH, written together as NAD(P)H, which hand over electrons instead of a phosphoryl group, and their jobs are divided — NADH tends to feed the processes that generate ATP, NADPH tends to supply the reducing steps of biosynthesis. **Both sit at low concentration, so neither can act as a reservoir and both have to be regenerated by catabolism constantly.**",
      cn: "把营养物拆开、并放出自由能的降解途径，统称分解代谢；从小前体造出大分子、并且永远要花能量的合成途径，叫合成代谢；两者构成的整张网络就是代谢。分解代谢放出的能量驱动 ATP 的合成，细胞里的 ATP 浓度正是这样才被维持在远高于平衡的水平 —— 所以 ATP 是两半之间的那个环节：在放能反应里挣到，在吸能反应里花掉，就像经济里的钱。还有第二种货币：分解代谢同时还产出还原型电子载体 NADH 和 NADPH（合写作 NAD(P)H），它们交出去的是电子，而不是磷酰基；两者分工不同 —— NADH 倾向于供给产生 ATP 的过程，NADPH 倾向于供给生物合成里的还原步骤。**两者浓度都很低，所以谁都当不了储备库，都必须由分解代谢不断再生。**",
      src: "A p.26, Fig. 1-28 · B §1.4, p.16",
      see: [{ id: "6-1-3", en: "catabolic and anabolic processes, and why both run stepwise", cn: "分解代谢与合成代谢，以及两者为什么都分成很多小步" },
            { id: "L-19-1-1", en: "what happens to NADH's electrons after catabolism hands them over", cn: "分解代谢把电子交给 NADH 之后，这些电子的去向" }]
    },
    {
      link_en: "two questions now classify every organism on Earth, and they are answered independently of each other",
      link_cn: "接下来两个问题把地球上每个生物都分了类，而这两个问题各自独立作答",
      en: "First question: where does the carbon come from? Autotrophic organisms, also called lithotrophic, use carbon dioxide as their carbon source and are therefore the producers of compounds containing hydrogenated carbon; heterotrophic organisms, also called organotrophic, are the consumers of the organic compounds autotrophs created. Second question: where does the energy come from? Phototrophs use light radiation, in the process of photosynthesis; chemotrophs obtain their energy by oxidising substrates. Crossing the two axes gives four boxes, each with its own members: photolithotrophic organisms take carbon from CO₂ and energy from light — green and purple sulfur bacteria, algae, cyanobacteria, green plants. Chemolithotrophic organisms take carbon from CO₂ and energy from oxidising inorganic substrates — sulfur, iron and nitrifying bacteria. Photoorganotrophic organisms take carbon from organic compounds and energy from light — purple non-sulfur bacteria, and protists such as Euglena. Chemoorganotrophic organisms take both from organic substrates — bacteria, fungi, protists and animals. A third axis cuts across all four: strict, or obligate, anaerobes grow and multiply only in the absence of oxygen, and for some of them oxygen is a violent poison even in traces; facultative anaerobes such as yeasts switch between alternative metabolic schemes according to external conditions; obligate aerobes, which include humans and most other organisms, absolutely require oxygen. **Carbon source and energy source are two independent yes-or-no questions rather than one, which is why an organism can be a producer of organic carbon and still take its energy from a rock.**",
      cn: "第一个问题：碳从哪里来？自养生物（autotrophic，也称 lithotrophic，无机营养）以二氧化碳为碳源，因而是含加氢碳化合物的生产者；异养生物（heterotrophic，也称 organotrophic，有机营养）则是自养生物所创造的有机化合物的消费者。第二个问题：能量从哪里来？光养生物以光辐射为能源，途径是光合作用；化养生物则通过氧化底物来获得能量。两条轴交叉出四个格子，各有各的成员：光能无机营养型生物的碳取自 CO₂、能量取自光 —— 绿硫细菌与紫硫细菌、藻类、蓝细菌、绿色植物。化能无机营养型生物的碳取自 CO₂、能量取自氧化无机底物 —— 硫细菌、铁细菌、硝化细菌。光能有机营养型生物的碳取自有机化合物、能量取自光 —— 紫色非硫细菌，以及裸藻这类原生生物。化能有机营养型生物两样都取自有机底物 —— 细菌、真菌、原生生物、动物。还有第三条轴横切这四格：严格（专性）厌氧生物只能在没有氧的条件下生长繁殖，其中一些即使遇到痕量的氧也如遭剧毒；兼性厌氧生物（例如酵母）能够根据外界条件在几套代谢方案之间切换；专性需氧生物（包括人类和大多数生物）绝对离不开氧。**碳源和能源是两个各自独立的是非问题，而不是一个 —— 所以一个生物完全可以既是有机碳的生产者，又从一块石头里取能量。**",
      src: "B §1.4, p.17, Tab. 1.4"
    },
    {
      link_en: "last question: a cell makes thousands of molecules at once, in the proportions it needs today. What stops it overshooting?",
      link_cn: "最后一个问题：细胞一次要造上千种分子，还要按今天需要的比例造。是什么让它不造过头？",
      en: "Feedback inhibition. In E. coli, isoleucine is made by a pathway of five enzymes in five steps, and when isoleucine accumulates beyond what protein synthesis is consuming it inhibits the catalytic activity of the first enzyme of its own pathway — the entry step — so production slows immediately and nothing downstream is wastefully made. Two qualifications come with it. Treating metabolism as a set of separate pathways is a useful way to organise it and an oversimplification: there are thousands of intermediates, many of them belonging to more than one pathway, so a change in any one metabolite's concentration ripples outward through a web. And regulation is layered: the activity of enzymes that already exist is one layer, and control over how many of those enzymes get made, through gene expression, is another. **A full account of metabolic control needs both layers, because inhibiting an enzyme and not making it are different instruments with different response times.**",
      cn: "靠反馈抑制。在大肠杆菌里，异亮氨酸由一条五个酶、五步的途径合成；当异亮氨酸积累到超过蛋白质合成所消耗的量时，它会抑制自己这条途径中第一个酶的催化活性 —— 也就是入口那一步 —— 于是生产立刻减速，下游也不会浪费性地造出任何东西。随之而来有两条限定。把代谢看成一组彼此分开的途径，是一种有用的整理方式，同时也是一种过度简化：中间产物有成千上万种，其中许多同时属于不止一条途径，所以任何一种代谢物浓度的变化都会顺着一张网向外扩散。而且调控是分层的：已经存在的那些酶的活性是一层，通过基因表达控制这些酶被造出多少，是另一层。**要把代谢调控说完整，两层都得说，因为「抑制一个酶」和「不去造它」是两件不同的工具，响应的时间尺度也不同。**",
      src: "A p.27",
      see: [{ id: "L-22-2-1", en: "feedback inhibition of amino acid synthesis, including the isoleucine pathway", cn: "氨基酸合成的反馈抑制，包括异亮氨酸这条途径" },
            { id: "L-13-5-1", en: "metabolic regulation measured rather than listed, and the steady state quantified", cn: "把代谢调控量出来而不是列出来，以及稳态的定量描述" }]
    }
  ]
};

/* ---------------------------------------------- 生命的起源与演化 ---- */
window.BIOLITE_SPINE["key:origin-and-evolution-of-life"] = {
  assumed: ["organism", "cell", "life", "evolution", "science", "experiment", "molecule",
            "atom", "protein", "nucleic acid", "RNA", "DNA", "enzyme", "gene", "mutation",
            "carbon dioxide", "nitrogen", "water", "oxygen", "hydrogen sulfide",
            "atmosphere", "Earth", "planet", "meteorite", "rock", "fossil", "geology",
            "palaeontology", "metabolism", "photosynthesis", "electron", "energy",
            "primary structure", "sequence", "biopolymer", "biochemistry", "morphology",
            "species", "bacteria", "reduced carbon", "polymer", "catalytic activity",
            "activity", "reproduction", "molecular biology", "biotechnology"],
  nodeTitle_en: "The origin and evolution of life",
  nodeTitle_cn: "生命的起源与演化",
  title_en: "Three families of answer, one of which can be tested — and what the testable one has actually managed to say",
  title_cn: "三类答案，其中只有一类可以被检验 —— 以及可检验的那一类究竟说出了什么",
  terms: [
    { en: "creationism", cn: "创世论",
      def_en: "The explanation that life arose as the result of a supernatural intervention. With intelligent design it forms group (a) of the three families of explanation for the origin of life.",
      def_cn: "认为生命是超自然干预之结果的解释。它与智能设计一起构成生命起源三类解释中的 (a) 组。" },
    { en: "intelligent design", cn: "智能设计",
      def_en: "The explanation that life arose through the action of forces inaccessible to direct scientific investigation — that is, forces no experiment can be built to test.",
      def_cn: "认为生命由无法直接进行科学研究的力量作用而产生的解释 —— 也就是说，那些力量无法被任何实验设计出来加以检验。" },
    { en: "panspermia", cn: "胚种论",
      def_en: "The explanation that life was carried to this planet from space. Simple organic compounds found in interstellar space and on some meteorites can be read as some support for it, but it moves the problem off the planet without solving it.",
      def_cn: "认为生命是从宇宙空间被带到我们这颗行星上来的解释。星际空间和某些陨石上发现的简单有机化合物可以被读作对它的一点支持，但它只是把问题挪到地球之外，并没有解决问题。" },
    { en: "prebiotic evolution", cn: "前生命演化",
      def_en: "The period before life arose on Earth, during which simple organic compounds formed in the reducing atmosphere of the time under electric discharges, solar radiation, high temperatures and pressures, and possibly catalysis by rocks.",
      def_cn: "生命在地球上出现之前的那段时期。其间，在当时的还原性大气中，靠电放电、太阳辐射、高温高压、以及可能的岩石催化作用，形成了简单的有机化合物。" },
    { en: "chemical evolution", cn: "化学演化",
      def_en: "The accumulation of simple organic compounds and their mutual reactions, giving more complex organic molecules and polymers. Its milestone is the appearance of the first molecules capable of a definite self-reproduction.",
      def_cn: "简单有机化合物的积累及其相互反应，由此生成更复杂的有机分子和聚合物。它的里程碑是出现了第一批具有确定自我复制能力的分子。" },
    { en: "Miller–Urey experiment", cn: "Miller–Urey 实验",
      def_en: "The 1953 experiments of S. Miller and H. Urey, which demonstrated the principal possibility of forming simple organic compounds from an atmosphere of that composition under those energy inputs.",
      def_cn: "S. Miller 与 H. Urey 于 1953 年所做的实验，证明了在那种组成的大气中、在那些能量输入下，形成简单有机化合物在原则上是可能的。" },
    { en: "biological evolution", cn: "生物学演化",
      def_en: "The stage following the first replicating systems, in which their efficiency and accuracy were raised. Progressive exhaustion of building materials and energy sources drove ever more perfect metabolic systems, and mutations — failures of reproduction of key biopolymers — evidently played a large part.",
      def_cn: "第一批复制系统出现之后的阶段，其效率与准确性在其中被不断提高。建筑材料与能源的逐步耗竭推动了越来越完善的代谢系统，而突变（即关键生物大分子在复制上的差错）显然起了很大作用。" },
    { en: "molecular phylogenesis", cn: "分子系统发生学",
      def_en: "Working out how organisms are related by comparing the sequences of their proteins and nucleic acids, without regard to external morphological features. The rapidly growing number of known sequences is what made it possible.",
      def_cn: "通过比较各生物的蛋白质与核酸序列来判定它们的亲缘关系，而不管外部形态特征。已知序列数目的迅速增长使它成为可能。" },
    { en: "neutral evolution", cn: "中性演化",
      def_en: "A mechanism of molecular evolution proposed by M. Kimura, in which mutations that do not worsen a molecule's efficiency are accepted, alongside the Darwinian mechanism in which mutations that increase efficiency are accepted.",
      def_cn: "M. Kimura 提出的一种分子演化机制：不使分子效率变差的突变即被接受；它与达尔文式的机制（接受提高效率的突变）并行。" }
  ],
  steps: [
    {
      en: "People have always been astonished by the complexity and variety of organisms and by the elements of purposefulness in their internal arrangement, their external organs and their activity. **Questions about where living organisms came from, and about where life as such came from, are therefore among the oldest that humans ask** — and the answers offered over that time fall into three families, labelled (a), (b) and (c).",
      cn: "人们历来惊叹于生物体的复杂与多样，也惊叹于它们的内部构造、外部器官和活动中所显出的合目的性。**因此，「生物体从何而来」以及「生命本身从何而来」这两个问题，属于人类最古老的追问之列 —— 而这段时间里给出的答案分为三类，标作 (a)、(b)、(c)。**",
      src: "B §1.6, p.18"
    },
    {
      link_en: "the first family, and what sets it apart is a property of the claim rather than a verdict on it",
      link_cn: "第一类。使它与众不同的是这个主张本身的一个性质，而不是对它的裁定",
      en: "Group (a) holds that life arose as the result of a supernatural intervention — creationism — or through the action of forces inaccessible to direct scientific investigation, an idea known as intelligent design. A force inaccessible to direct scientific investigation is one that no experiment can be built to test. **That group is by its very nature closed to natural-science inquiry, so it makes a claim of a different kind from any claim biochemistry can check** — and that, rather than any judgement about whether it is true, is what separates it from the remaining two.",
      cn: "(a) 组认为：生命是超自然干预的结果 —— 这就是创世论 —— 或者是由无法直接进行科学研究的力量作用而产生的，这个想法称为智能设计。所谓「无法直接进行科学研究的力量」，指的是没有任何实验能被设计出来去检验它。**这一组按其本性对自然科学的探究是封闭的，所以它提出的是一类与生物化学所能核查的主张性质不同的主张 —— 把它与其余两组分开的正是这一点，而不是对它真假的任何裁定。**",
      src: "B §1.6, pp.18–19",
      beyond: true,
      beyondNote: "p.19 says group (a) is by its nature inaccessible to natural-science inquiry, without spelling out what makes that so. The testability criterion stated here is standard philosophy-of-science material, given so the classification has a stated basis rather than being a list."
    },
    {
      link_en: "the second family moves the problem somewhere else",
      link_cn: "第二类把问题挪到了别处",
      en: "Group (b) holds that life was transferred to this planet from space, an idea called panspermia. Simple organic compounds have been found in interstellar space and on some meteorites, and that can be read as a certain support for these hypotheses. **Group (b) relocates the problem off this planet without answering it, since a life that arrived here still had to arise somewhere**, so the question it was meant to settle survives the move intact.",
      cn: "(b) 组认为：生命是从宇宙空间被转移到我们这颗行星上来的，这个想法叫 panspermie（胚种论）。星际空间和某些陨石上确实发现了简单的有机化合物，这可以被读作对这些假说的某种支持。**(b) 组把问题挪出了这颗行星，却没有回答它 —— 因为一个「来到这里」的生命仍然必须在某处产生过；于是它本要解决的那个问题，原封不动地熬过了这次搬家。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "the third family is the one that is generally accepted, and the rest of this chain is what it has managed to say",
      link_cn: "第三类是被普遍接受的那一类，而这条链余下的部分就是它说出了什么",
      en: "Group (c) holds that life arose as a consequence of natural causes, through the action of physical and chemical factors. Direct study of the conditions under which life arose is of course impossible, so present ideas are built from four kinds of evidence instead: study of the chemical conditions on other bodies in space that approach in various respects the presumed state of the early Earth, with particular attention paid to Titan, a moon of Saturn; geological study of terrestrial rocks; palaeontological study of the traces life left on Earth in the past; and biochemical comparison of the metabolism of primitive against more developed organisms, together with comparison of the primary structures of their proteins and nucleic acids. **Everything that follows is a set of hypotheses containing a number of controversial points, and they will undoubtedly go through many more changes** — which is a statement about the strength of the evidence and not a licence to substitute a better story.",
      cn: "(c) 组认为：生命是由自然原因产生的，是物理因素和化学因素作用的结果。生命起源条件当然无法直接研究，所以今天的看法是靠另外四类证据搭起来的：研究宇宙中其他天体上的化学条件 —— 那些天体在各方面接近于早期地球被推定的状态，其中土星的卫星 Titan（泰坦）受到特别关注；对地球岩石的地质学研究；对生命过去在地球上留下痕迹的古生物学研究；以及在生物化学上比较原始生物与较进化生物的代谢，并比较它们的蛋白质和核酸的一级结构。**下面所有内容都是一批含有若干争议点的假说，而且今后无疑还会经历许多修改 —— 这是在陈述证据的强度，而不是发给你一张「换个更好听的说法」的许可证。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "first the dates, because they bound everything else",
      link_cn: "先说年代，因为它们框住了其余的一切",
      en: "The age of the Earth is estimated at 4.6 billion years, and the oldest fossil evidence of life is about 3.5 billion years old, though life is assumed to have arisen somewhat earlier than that. **The period before life arose on Earth is called prebiotic evolution, so the whole prebiotic and earliest biological story has to fit into a window of at most about a billion years**, and everything before the first fossil is inferred rather than seen.",
      cn: "地球的年龄估计为 46 亿年，最古老的生命化石证据约有 35 亿年，不过一般认为生命的产生还要更早一些。**生命在地球上出现之前的那段时期叫前生命演化 —— 所以整个前生命的、以及最早期生物学的故事，必须塞进至多约十亿年的窗口里；而第一块化石之前的一切都是推断出来的，不是看到的。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "what was there to work with, and what supplied the energy",
      link_cn: "当时手上有什么材料，能量又从哪来",
      en: "The atmosphere of the Earth at that time was reducing, meaning poor in oxygen and rich in hydrogen-bearing compounds; it evidently contained above all CO₂, N₂ and H₂O. In that setting simple organic compounds arose under electric discharges, solar radiation, high temperatures and pressures, and possibly the catalytic action of certain rocks. **The principal possibility of such processes was demonstrated as early as 1953 by the experiments of S. Miller and H. Urey**, which is why this stage is treated as established chemistry rather than as speculation: the step from an inorganic atmosphere to organic molecules can be reproduced on a bench.",
      cn: "当时地球的大气是还原性的 —— 意思是贫氧、富含带氢的化合物；它显然主要含有 CO₂、N₂ 和 H₂O。在这样的环境里，靠电放电、太阳辐射、高温高压，以及可能还有某些岩石的催化作用，产生了简单的有机化合物。**这类过程在原则上的可能性，早在 1953 年就由 S. Miller 与 H. Urey 的实验证明了 —— 这就是为什么这一阶段被当作已确立的化学、而不是猜测：从无机大气到有机分子这一步，可以在实验台上重现。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "accumulate those compounds and let them react with one another, and one threshold gets crossed",
      link_cn: "让这些化合物积累起来、彼此反应，就会越过一道门槛",
      en: "The accumulation of such compounds and their mutual reactions gave rise to more complex organic molecules and to polymers, and that stage is chemical evolution. Its milestone was the appearance of the first molecules capable of a definite self-reproduction. On present ideas those could have been ribonucleic acids, because a ribonucleic acid can carry a certain catalytic — that is, enzyme-like — activity of its own. **One molecule that both holds a sequence and acts on it removes the hardest requirement of the whole problem**, which is that information and the machinery to copy it would otherwise have had to appear at the same moment.",
      cn: "这些化合物的积累及其相互反应，产生了更复杂的有机分子和聚合物，这一阶段就是化学演化。它的里程碑是出现了第一批具有确定自我复制能力的分子。按今天的看法，这些分子可能就是核糖核酸，因为核糖核酸自身可以带有某种催化（也就是酶那样的）活性。**一个既携带序列、又能对序列动手的分子，去掉了整个问题里最苛刻的那条要求 —— 否则信息和复制信息的机器就必须在同一时刻同时出现。**",
      src: "B §1.6, p.19",
      see: [{ id: "L-26-4-1", en: "catalytic RNAs and the RNA world hypothesis, worked through", cn: "催化性 RNA 与 RNA 世界假说的完整讨论" }]
    },
    {
      link_en: "and once something copies itself, a different kind of change takes over",
      link_cn: "而一旦有东西能复制自己，接手的就是另一种变化",
      recall_en: "the same self-reproduction that was used two topics back as the criterion for calling something alive",
      recall_cn: "同一个「自我复制」，在前面某个题目里正是用来判定「算不算活的」那个判据",
      en: "The efficiency and accuracy of those first replicating systems — which could be called prabiomolecules, the molecules before organisms — were then raised in the course of further development, and that stage is biological evolution. Progressive exhaustion of the available resources, both building materials and energy, drove the development of ever more perfect metabolic systems. Mutations played a large part here, and **a mutation is in effect a failure in the reproduction of a key biopolymer, a nucleic acid or a protein** — so the same imperfection that limits how well a system copies itself is the only source of the variety selection has to work on.",
      cn: "这些最早的复制系统（可以称之为 prabiomolekuly，即先于生物体的分子）的效率和准确性，随后在进一步的发展中被不断提高，这一阶段就是生物学演化。可用资源 —— 建筑材料和能量两方面 —— 的逐步耗竭，推动了越来越完善的代谢系统的发展。**突变在这里起了很大作用，而一个突变实际上就是关键生物大分子（核酸或蛋白质）在复制中出的差错 —— 所以，限制一个系统把自己抄得多好的那种不完美，正是选择所能凭借的多样性的唯一来源。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "then one change altered everything, and it was a change of energy source",
      link_cn: "接着有一个变化改变了一切，而它是能源上的变化",
      recall_en: "the light-versus-substrate energy axis that classifies organisms is the same distinction being crossed here",
      recall_cn: "给生物分类时那条「光还是底物」的能源轴，在这里被跨过去的正是它",
      en: "The fundamental turning point in the development of life was the transition to using light energy — photosynthesis — which took place about 2.5 to 3 billion years ago. **Its direct consequence was to secure an inexhaustible source of energy for reducing CO₂ and forming organic compounds**, so an organism was no longer limited by whatever energy-rich material happened to have accumulated around it.",
      cn: "生命发展中的根本转折，是转向利用光能 —— 也就是光合作用 —— 这发生在约 25 亿到 30 亿年前。**它的直接后果是为还原 CO₂ 和生成有机化合物确保了一个取之不竭的能源 —— 于是一个生物体不再被「周围恰好积累了多少富能物质」所限制。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "the indirect consequence took longer and mattered more",
      link_cn: "间接后果来得更慢，分量却更重",
      en: "In a more developed variant of photosynthesis, water replaced H₂S as the reducing agent, and that substitution carries a grave indirect consequence: the gradual release of molecular oxygen into an atmosphere that had been reducing. Oxygen acted at first on organisms as a dangerous poison. **What survived that selection pressure were the organisms that acquired a mechanism for transferring electrons onto this molecule**, so the machinery every aerobic cell now uses to make its living began as a way of surviving a waste product.",
      cn: "在更进化的一种光合作用里，水取代 H₂S 成为还原剂，而这个替换带来一个严重的间接后果：分子氧被逐步释放到原本还原性的大气中。氧起初对生物体如同一种危险的毒物。**能顶住这一选择压力的，是那些掌握了「把电子转移到这个分子上」这套机制的生物 —— 所以今天每一个需氧细胞赖以谋生的那套装置，最初是为了在一种废物中活下来。**",
      src: "B §1.6, p.19",
      see: [{ id: "L-19-1-1", en: "the chain of carriers that hands those electrons to oxygen, complex by complex", cn: "把这些电子交给氧的那条载体链，一个复合物一个复合物地看" }]
    },
    {
      link_en: "and once oxygen could be used rather than merely survived, the accounts changed",
      link_cn: "而一旦氧可以被利用、而不只是被熬过去，账目就变了",
      recall_en: "reduced carbon burnt in air to water and CO₂ — the same combustion, now run inside a cell",
      recall_cn: "还原态的碳在空气中烧成水和 CO₂ —— 同一场燃烧，现在搬进了细胞里",
      en: "The transition to aerobic oxidation of organic molecules raised the energy yield from breaking down carbon compounds very markedly. **That larger yield is what made larger multicellular organisms possible, about 700 million years ago, and then the entry of life onto land about 500 million years ago** — so two of the largest events in the history of life follow from an improvement in the energy budget of a single reaction.",
      cn: "转向对有机分子进行需氧氧化，使拆解含碳分子的能量产率大幅提高。**正是这更高的产率使更大的多细胞生物成为可能（约 7 亿年前），随后又使生命登上陆地（约 5 亿年前）—— 于是生命史上两桩最大的事件，都出自单个反应能量收支的一次改善。**",
      src: "B §1.6, p.19"
    },
    {
      link_en: "how much of this is actually known, and how did anyone find out?",
      link_cn: "这些内容有多少是真的知道，人们又是怎么查出来的？",
      en: "Knowledge of how life arose is, and will evidently long remain, only fragmentary, while ideas about how it developed afterwards are very well documented. Classical palaeontology deserves the credit for that, and over recent decades so, increasingly, do biochemistry and molecular biology. The sharply growing number of known sequences of proteins and nucleic acids makes it possible to study the evolutionary relatedness of organisms without regard to their external morphological features, which is molecular phylogenesis. **Comparing sequences settles relatedness between organisms that look nothing like each other, so a question that morphology could not answer is answered by reading two primary structures side by side.**",
      cn: "关于生命如何产生，我们的知识只是零碎的，而且显然还将长期如此；关于它此后如何发展的看法，则有非常充分的记录。这要归功于经典古生物学，而近几十年来越来越也要归功于生物化学和分子生物学。已知的蛋白质和核酸序列数目急剧增长，使得研究生物之间的演化亲缘关系时可以不看它们的外部形态特征，这就是分子系统发生学。**比较序列可以判定两个外形毫不相像的生物之间的亲缘关系 —— 于是一个形态学回答不了的问题，靠把两条一级结构并排读一遍就回答了。**",
      src: "B §1.6, pp.19–20",
      openQuestion_en: "How life actually arose remains unsettled, and the account above is explicitly a set of hypotheses with controversial points in it.",
      openQuestion_cn: "生命究竟如何起源，至今没有定论；上面的叙述被明确地标为一批含有争议点的假说。"
    },
    {
      link_en: "and the same sequences turned up something about how evolution itself works",
      link_cn: "而同样这些序列，还带出了关于演化本身如何运作的新东西",
      en: "Alongside the mechanism based on Darwin's theory, in which mutations that increase the efficiency of a molecule are accepted, molecular development also shows a mechanism of so-called neutral evolution, in which mutations that do not make efficiency worse are accepted; it was proposed by the Japanese geneticist M. Kimura. **The two criteria differ by one word — improving against not worsening — and that word decides how much of the difference between two sequences has to mean anything at all.**",
      cn: "在基于达尔文理论的机制（接受那些提高分子效率的突变）之外，分子层面的发展还表现出所谓中性演化的机制：不使效率变差的突变也被接受；这一机制由日本遗传学家 M. Kimura 提出。**两条判据只差一个词 —— 「变好」对「不变差」—— 而正是这个词决定了两条序列之间的差异究竟有多大比例必须具有意义。**",
      src: "B §1.6, p.20"
    }
  ]
};
