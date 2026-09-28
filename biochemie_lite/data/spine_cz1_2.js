/* Spines for the Czech textbook, chapters 1 and 2 — 速通简洁版.

   Sixteen nodes: §1.1–§1.6 (what biochemistry is, living vs non-living, molecule to
   cell, energy, thermodynamics, origin of life) and §2.1.1–§2.2.6 (amino acids,
   peptides, and the four levels of protein structure).

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE — the seven rules, followed literally:

   1. STATE THE THING. No "not X, but Y", no rhetorical inversion.
   2. NO UNBOUND "THE". Never a definite reference to something not yet named.
   3. NAME THE ACTUAL OBJECTS. Escherichia coli, the Kjeldahl method, silicon in the
      Earth's crust, sickle-cell haemoglobin, a urea solution.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN YOU USE, in the same breath as the first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`) when a step is the parallel or the
      opposite of one earlier in the same spine.

   And every structural claim carries its consequence — 「这些东西一般有啥用？」

   ONE BOLD RUN PER STEP. The app has a 极简 mode that hides everything unbolded, so
   the bold span has to be a complete, self-contained claim that reads alone.

   `beyond: true` marks detail that is standard and examinable but is NOT on the pages
   the node was read from; every instance carries a `beyondNote`.

   Chapters 1 and 2 are one arc: chapter 1 establishes that living matter is ordinary
   elements held in an extraordinary, energy-costing arrangement, and chapter 2 takes
   the most important class of that arrangement — proteins — apart down to the twenty
   monomers and back up to the assembled quaternary structure. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ========================================================================= 1-1 */
window.BIOLITE_SPINE["1-1"] = {
  assumed: ["chemistry", "biology", "medicine", "science", "atom", "molecule",
            "nitrogen", "organism", "journal", "instrument", "gene"],
  nodeTitle_en: "What is biochemistry?",
  nodeTitle_cn: "什么是生物化学？",
  title_en: "A subject that arrived when the measuring methods arrived",
  title_cn: "一门被测量方法带出来的学科",
  steps: [
    {
      en: "**Biochemistry is the study of the substances that occur in living organisms, of how those substances get in or get built, of how they react with each other and with the surroundings, and of the methods used to identify and measure them — which places it simultaneously among the biological sciences, because it studies living nature, and among the chemical ones, because what it studies are chemical transformations.**",
      cn: "**生物化学研究的是：生物体内存在哪些物质、这些物质怎么进来或怎么被造出来、它们彼此之间以及与环境之间如何反应，还有用什么方法把它们鉴定和测定出来——因此它同时属于生物科学（它研究的是生命自然）和化学学科（它研究的内容是化学转变）。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "and that double membership is ancestry rather than an accident of naming",
      link_cn: "而这种双重身份来自血统，不是命名上的巧合",
      en: "Organic chemistry began as the chemistry of substances obtained from plants and animals rather than as the chemistry of carbon in general. Physiology is the study of how a living body actually functions — how it breathes, digests, contracts. **Biochemistry has two parents, organic chemistry on the chemical side and physiology on the biological side, and its earliest name, physiological chemistry, records exactly that descent.**",
      cn: "有机化学最初指的是从植物和动物身上取得的物质的化学，而不是泛指碳的化学。生理学研究的是活的身体究竟怎么运作——怎么呼吸、怎么消化、怎么收缩。**生物化学有两个父母：化学一侧是有机化学，生物学一侧是生理学；而它最早的名字 physiological chemistry（生理化学）把这个来历记得清清楚楚。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "so why did it take until the end of the 19th century to appear?",
      link_cn: "那它为什么拖到 19 世纪末才出现？",
      en: "Living matter is highly organised and chemically very complicated, so nothing could be learned from it until the chemistry was strong enough to take it apart and get trustworthy numbers back. The worked example is the Kjeldahl method of 1883, a procedure for determining how much nitrogen a sample contains — nitrogen being the element that marks out proteins and other biologically central compounds. **Biochemistry became possible only once general chemistry and its analytical methods could handle living material, so the founding date of the field follows an instrument rather than an idea.**",
      cn: "生命物质高度组织化、化学上极其复杂，所以在化学强到能把它拆开、并拿回可信数字之前，从它身上什么也学不到。具体的例子是 1883 年的 Kjeldahl method（凯氏定氮法），一套测定样品含氮量的操作——而氮正是标志蛋白质等生物学核心化合物的那个元素。**只有当普通化学及其分析方法能对付生命材料时，生物化学才成为可能；所以这门学科的诞生日期跟着一件仪器走，而不是跟着一个想法走。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "with the methods in place, two dates fix when it actually happened",
      link_cn: "方法就位之后，有两个日期标住了它真正发生的时刻",
      en: "**Biochemistry appears as an independent field only in the last quarter of the 19th century, which makes it the last of the major chemical disciplines to be founded, and the date usually given for its real rise is 1906, when the first journal carrying the word biochemistry in its title, Biochemische Zeitschrift, began publication.**",
      cn: "**生物化学作为独立学科出现于 19 世纪最后二十五年，因此是各大化学学科中成立最晚的一个；通常用来标记它真正兴起的年份是 1906 年——第一本以「生物化学」命名的期刊《Biochemische Zeitschrift》创刊。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "the same thing happened a second time, fifty years later",
      link_cn: "五十年后，同一件事又发生了一次",
      recall_en: "the same pattern as the Kjeldahl step: new instruments first, new science after",
      recall_cn: "和凯氏定氮法那一步是同一个模式：先有新仪器，后有新科学",
      en: "Spectroscopy measures how a substance absorbs or emits light, and the pattern identifies the substance. Chromatography separates a mixture by making it travel through a material that holds different components back by different amounts. X-ray structure analysis works out where the atoms sit in a crystal from the way that crystal scatters X-rays. Electron microscopy uses a beam of electrons instead of light and so resolves objects far too small for a light microscope. **The explosive growth of biochemistry in the second half of the 20th century rested on those four physico-chemical methods, every one of them borrowed from physics — which is why biochemistry keeps accelerating whenever physics does.**",
      cn: "Spectroscopy（光谱学）测量物质如何吸收或发射光，而这个图样就能把物质认出来。Chromatography（色谱）让混合物穿过一种材料，各组分被拖住的程度不同，因而被分开。X-ray structure analysis（X 射线结构分析）依据晶体对 X 射线的散射方式，推算原子在晶体中的位置。Electron microscopy（电子显微镜）用电子束代替光，因而能分辨光学显微镜下根本看不见的东西。**20 世纪下半叶生物化学的迅猛发展，正是建立在这四种物理化学方法之上的，而它们无一不是从物理学借来的——所以物理学一提速，生物化学就跟着提速。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "and that borrowing has a consequence for where the boundaries of the subject now lie",
      link_cn: "而这种借用，对这门学科的边界如今画在哪里是有后果的",
      en: "Biophysics is the study of living systems by the methods and concepts of physics. **Biochemistry is a typical borderline field, and because it now leans so heavily on instrumental methods that are physical at bottom it sits extremely close to biophysics, so where one stops and the other starts is largely a matter of which department you are standing in.**",
      cn: "Biophysics（生物物理学）是用物理学的方法与概念研究生命系统的学科。**生物化学是典型的交叉学科；由于它如今高度依赖本质上属于物理的仪器方法，它与生物物理学靠得极近——谁到哪儿为止、谁从哪儿开始，很大程度上取决于你站在哪个系里。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "one neighbouring name causes more confusion than any other, because it means two different things",
      link_cn: "有一个邻居的名字比谁都容易引起混淆，因为它有两个意思",
      en: "In the broad sense, molecular biology explains biologically significant events at the molecular — and therefore chemical — level, which makes it a part of biochemistry. A narrower sense now dominates everyday use, in which molecular biology means essentially molecular genetics, the study of genes and their expression at the level of the molecules involved. **Which of those two senses is meant has to be settled before the phrase molecular biology is usable at all, because the broad one takes in the whole of biochemistry and the narrow one takes in a corner of it.**",
      cn: "广义上，molecular biology（分子生物学）在分子层面——因而是化学层面——阐明具有生物学意义的过程，因此它是生物化学的一部分。如今日常使用中占上风的是更窄的含义，在这个含义下分子生物学基本等同于 molecular genetics（分子遗传学），即在所涉分子的层面研究基因及其表达。**用「分子生物学」这个词之前，必须先定下取哪一个含义，因为广义的那个囊括整门生物化学，狭义的那个只占它一个角落。**",
      src: "B §1.1, p.8"
    },
    {
      link_en: "last, where the knowledge goes once it leaves the bench",
      link_cn: "最后，这些知识离开实验台之后去了哪里",
      en: "Three applied directions run out of biochemistry: towards medicine, through pharmacology — how drugs act on the body — toxicology — how poisons act on it — and clinical biochemistry, which measures substances in blood and urine to diagnose disease; towards agriculture, as agrochemistry; and towards ecology, the study of how organisms interact with their environment. **The direct application of biochemical knowledge in production is biotechnology, which is the point at which the subject turns into a manufacturing process.**",
      cn: "生物化学向外延伸出三个应用方向：通往医学，经由 pharmacology（药理学，药物如何作用于身体）、toxicology（毒理学，毒物如何作用于身体）和 clinical biochemistry（临床生化，通过测定血液和尿液中的物质来诊断疾病）；通往农业，即农业化学；通往生态学，也就是研究生物如何与环境相互作用的学科。**把生化知识直接用于生产，就是 biotechnology（生物技术）——学科在这一点上变成了生产工艺。**",
      src: "B §1.1, p.8"
    }
  ],
  terms: [
    { en: "biochemistry", cn: "生物化学",
      def_en: "The study of the substances present in living organisms, of how they are formed and how they react with one another and with the surroundings, and of the methods for identifying and measuring them. It belongs simultaneously to the biological and to the chemical sciences.",
      def_cn: "研究生物体内存在的物质、它们如何生成、如何彼此反应及与环境反应，以及鉴定与测定它们的方法。它同时属于生物科学与化学学科。" },
    { en: "physiological chemistry", cn: "生理化学",
      def_en: "The early name of the field, recording its descent from physiology on the biological side and from organic chemistry on the chemical side.",
      def_cn: "这门学科的早期名称，记录了它在生物学一侧源自生理学、在化学一侧源自有机化学。" },
    { en: "Kjeldahl method", cn: "凯氏定氮法",
      def_en: "A procedure from 1883 for determining the nitrogen content of a sample. It is the standing example of the analytical capability that had to exist before living matter could be studied chemically at all.",
      def_cn: "1883 年建立的样品含氮量测定法。它是那种分析能力的标准例子——只有先具备这种能力，生命物质才谈得上被化学地研究。" },
    { en: "molecular biology", cn: "分子生物学",
      def_en: "In the broad sense, the explanation of biologically significant events at the molecular level, which makes it part of biochemistry. In today's narrow sense, essentially molecular genetics. The two senses differ in scope by a very large factor, so which one is meant must be settled first.",
      def_cn: "广义上指在分子层面阐明具有生物学意义的过程，因而是生物化学的一部分；今天的狭义用法基本等同于分子遗传学。两个含义的范围相差极大，所以必须先定下取哪一个。" },
    { en: "biotechnology", cn: "生物技术",
      def_en: "The direct application of biochemical knowledge in production.",
      def_cn: "生化知识在生产中的直接应用。" }
  ]
};

/* ========================================================================= 1-2 */
window.BIOLITE_SPINE["1-2"] = {
  assumed: ["cell", "crystal", "protein", "carbon", "hydrogen", "oxygen",
            "nitrogen", "silicon", "aluminium", "calcium", "element", "atom",
            "molecule", "nucleic acid", "membrane", "chloroplast", "carbonate",
            "nitrate", "amine", "energy", "mass", "Earth", "whale", "sequoia",
            "flea", "car", "biochemistry"],
  nodeTitle_en: "Living and non-living",
  nodeTitle_cn: "生物与非生物",
  title_en: "The same elements as a rock, in different proportions and a different chemical form",
  title_cn: "和岩石一样的元素，只是比例不同、形式不同",
  steps: [
    {
      en: "Telling living from non-living looks trivial and turns out to have no sharp definition. A virus shows very limited manifestations of life, and structurally it comes close to a crystal — a regular repeating array of identical units. At the far end of the size scale some hypotheses go the other way and treat the whole Earth as a single living superorganism, an idea named Gaia. **A boundary with a virus sitting on the line and a planet arguable at the far end of it is a boundary that can only be fixed by choosing a criterion, and everything that follows depends on which criterion is chosen.**",
      cn: "区分生物与非生物看上去理所当然，实际上并没有精确的定义。病毒表现出的生命迹象非常有限，结构上接近晶体——由完全相同的单元规则重复排列而成的东西。在尺度谱的另一端，有些假说反其道而行，把整个地球看作一个活的超级有机体，这个想法叫 Gaia（盖娅）。**一条边界，线上坐着病毒、远端连行星都可以拿来争论，那它就只能靠选定一个判据来确定——而后面的一切都取决于选了哪个判据。**",
      src: "B §1.2, pp.10–11",
      beyond: true,
      beyondNote: "pp.10–11 say that viruses show limited vital manifestations and approach crystals structurally, without defining either word. The one-clause descriptions of a virus and of a crystal are standard first-year material, added here so the sentence stands on its own."
    },
    {
      link_en: "so which criterion is chosen, and why that one?",
      link_cn: "那选的是哪个判据，为什么是它？",
      en: "To assimilate matter means to take it in from the surroundings and make it part of oneself. **Reproduction — the general ability of a living thing to assimilate matter and use it to multiply its own living substance, whether that shows as the original individual simply growing larger or as further similar individuals appearing — is taken as the most exclusive manifestation of life, and exclusive is the operative word: it is the property that non-living matter does not manage even in a limited way, which is why it does the separating.**",
      cn: "所谓「同化」物质，就是把它从周围环境吸收进来、变成自己的一部分。**繁殖——生物普遍具有同化物质并用以增殖自身生命物质的能力，无论表现为原个体单纯长大，还是表现为出现更多相似的个体——被取作生命最具排他性的表现；而关键就在「排他」二字：这是非生命物质连有限地做到都做不到的那个性质，所以由它来完成区分。**",
      src: "B §1.2, pp.10–11"
    },
    {
      link_en: "life has other manifestations too, and they are worth listing precisely because they are the weaker tests",
      link_cn: "生命还有别的表现，值得列出来，恰恰因为它们是较弱的判据",
      en: "**The other manifestations of life are movement, irritability — the capacity to respond to an external stimulus — and purposeful or even conscious action; each of them is real and each of them has non-living imitations, which is why reproduction was picked to carry the definition and these three are carried alongside it.**",
      cn: "**生命的其他表现是：运动；irritability（应激性），即对外界刺激作出反应的能力；以及有目的、甚至有意识的行为。这几样都是真实的，而每一样在非生命界都有仿制品——所以定义交给繁殖来扛，这三样则跟在旁边。**",
      src: "B §1.2, pp.10–11"
    },
    {
      link_en: "those were the behaviours. Structurally, one feature stands out above the others",
      link_cn: "以上是行为层面。从结构上看，有一个特征压过其余",
      en: "**The most striking structural characteristic of living matter is a high degree of organisation, and two further characteristics belong with it because they are what keep that organisation from running down: regulation of the processes going on inside living matter, and maintenance of a constant internal environment within relatively narrow limits.**",
      cn: "**生命物质在结构上最显著的特征是高度的组织性；另有两个特征与之配套，因为正是它们让这种组织性不至于自行瓦解：对生命物质内部所进行过程的调节，以及把内环境维持在相对狭窄范围内的恒定。**",
      src: "B §1.2, pp.10–11"
    },
    {
      link_en: "now the chemistry. First, the answer that turns out to be wrong",
      link_cn: "现在说化学。先说那个被证明是错的答案",
      en: "**Living matter contains no element that does not also occur in inanimate nature, so qualitatively there is nothing special in it at all; the difference is quantitative — living matter is conspicuous for a high concentration of the light elements, and silicon and aluminium, two of the commonest elements on Earth, are strikingly scarce in it.**",
      cn: "**生命物质不含任何在无生命自然界中不存在的元素，所以从定性角度看它里面根本没有什么特别的东西；差别是定量的——生命物质的显著之处在于轻元素浓度很高，而地球上最丰富的元素中的硅和铝，在它里面稀少得引人注目。**",
      src: "B §1.2, pp.10–11"
    },
    {
      link_en: "those proportions sort every element into one of four groups",
      link_cn: "这些比例把每一种元素归进四类之一",
      en: "Macrobiogenic elements, also called primary biogenic elements, are H, O, C, N and P, each present in all organisms at roughly 1 % of mass and above. Oligobiogenic elements are Ca, Mg, S, Na, K, Fe and Cl, at 0.05–1 % of mass. Microbiogenic elements are Cu, Zn, Co, Mn, I and Mo, present in the smallest quantities. Variable elements are B, Si, V, Br, Li, As, Se, Ti and Al, which reach significant amounts only in some species; they are also called trace elements or microelements. **The first three groups are invariable — every organism carries all of them, so the absence of any one is lethal — while a variable element is a given species' own business, and that split matters far more than the sizes of the four groups.**",
      cn: "Macrobiogenic elements（常量生源元素，又称初级生源元素）是 H、O、C、N、P，在所有生物体中各占质量约 1% 及以上。Oligobiogenic elements（寡量生源元素）是 Ca、Mg、S、Na、K、Fe、Cl，占质量 0.05–1%。Microbiogenic elements（微量生源元素）是 Cu、Zn、Co、Mn、I、Mo，含量最少。可变元素是 B、Si、V、Br、Li、As、Se、Ti、Al，只在某些物种中达到显著的量；它们也叫痕量元素或微量元素。**前三组属于恒定元素——每一个生物体都具备全部这些元素，因此缺了任何一个都是致命的；可变元素则是某个物种自己的事。这个划分比四组各占多少要紧得多。**",
      src: "B §1.2, p.10, Tab. 1.1"
    },
    {
      link_en: "the proportions can be put side by side with a rock, and one column has to be read carefully",
      link_cn: "这些比例可以和岩石并排放在一起，其中有一列必须小心地读",
      recall_en: "this is the measurement behind the previous claim that living matter concentrates the light elements",
      recall_cn: "这就是上一步「生命物质富集轻元素」那句话背后的实测数据",
      en: "Human body against Earth's crust, as mass % / atomic %: O 65.0 / 25.5 against 49.5 / 54.9 · C 18.5 / 9.7 against 0.1 / 0.14 · H 10.0 / 62.8 against 0.9 / 16.0 · Ca 1.5 / 0.24 against 3.4 / 1.5 · Si below 0.001 against 25.7 · Al below 0.001 against 7.5. Mass per cent weighs the atoms; atomic per cent counts them, and hydrogen is 10 % of body mass but 62.8 % of the body's atoms because a hydrogen atom is the lightest there is. **Carbon is enriched 185-fold in the body over the crust while silicon runs the other way by more than four orders of magnitude, so life is built out of the crust's rare elements and leaves its common ones alone.**",
      cn: "人体对地壳，以质量% / 原子%表示：O 65.0 / 25.5 对 49.5 / 54.9 · C 18.5 / 9.7 对 0.1 / 0.14 · H 10.0 / 62.8 对 0.9 / 16.0 · Ca 1.5 / 0.24 对 3.4 / 1.5 · Si 低于 0.001 对 25.7 · Al 低于 0.001 对 7.5。质量百分比是把原子称重，原子百分比是把原子数个数；氢占人体质量 10%，却占人体原子数的 62.8%，因为氢原子是最轻的原子。**碳在人体中比地壳富集 185 倍，硅则朝相反方向差出四个数量级以上——生命是用地壳里稀有的元素造起来的，而地壳里常见的那些它根本不碰。**",
      src: "B §1.2, p.11, Tab. 1.2"
    },
    {
      link_en: "proportions were the first half of the answer. The second half is about form",
      link_cn: "比例是答案的前一半。后一半关乎形式",
      en: "In inanimate nature carbon is mostly already oxidised — as carbonates in rock and as CO₂ in air. **The most important difference between living and non-living matter is the chemical form of carbon: living matter is characterised by formally reduced carbon, meaning carbon carrying hydrogen, and reduced carbon is energy-rich, its energy released by nothing more elaborate than burning it in air to water and CO₂ — which is the whole economy of life in one sentence, since every process an organism runs is paid for by letting some of its carbon fall back to CO₂.**",
      cn: "在无生命自然界中，碳大多已经是氧化态——岩石中的碳酸盐、空气中的 CO₂。**生物物质与非生物物质之间最重要的差别是碳的化学形式：生命物质的特征是形式上被还原的碳，也就是带着氢的碳，而还原态的碳富含能量，只要在空气中烧成水和 CO₂ 就能把能量放出来——这一句话就是生命的整个经济体系，因为生物体运行的每一个过程，都是靠让一部分碳掉回 CO₂ 来买单的。**",
      src: "B §1.2, p.11",
      see: [{ id: "1-4", en: "what that reduced carbon is actually burned for, and how the energy is captured", cn: "这些还原态的碳究竟烧来做什么，能量又是怎么被捕获的" }]
    },
    {
      link_en: "nitrogen does exactly the same thing, which makes it a pattern rather than a fact about carbon",
      link_cn: "氮的表现和碳完全一样，所以这是一个规律，而不只是关于碳的一个事实",
      recall_en: "the same oxidised-outside, reduced-inside split as carbon in the step above",
      recall_cn: "和上一步碳的「外面氧化态、里面还原态」是同一个划分",
      en: "**In inanimate nature nitrogen is mostly free N₂ gas or oxidised as nitrates, while living matter typically holds it reduced, above all as amines — compounds in which nitrogen carries hydrogen and is bonded to carbon — so both of the elements that build biological molecules are taken up in an oxidised, low-energy form and have to be reduced before use, and paying for that reduction is one of the standing costs of being alive.**",
      cn: "**在无生命自然界中，氮多以游离的 N₂ 气体存在，或呈氧化态的硝酸盐；生命物质中的氮则典型地处于还原态，尤其是 amine（胺）——氮带着氢、并与碳相连的化合物。于是构建生物分子的这两种元素，都是以氧化的、低能量的形式被摄入的，必须先还原才能使用；为这一步还原买单，正是「活着」的一项固定开销。**",
      src: "B §1.2, p.11"
    },
    {
      link_en: "one further feature of life's carbon compounds has no accepted explanation at all",
      link_cn: "生命的碳化合物还有一个特征，至今没有公认的解释",
      en: "Chirality is the property of a molecule that makes it non-superimposable on its own mirror image, the way a left hand cannot be laid onto a right one; a solution containing a single mirror form rotates the plane of polarised light and is called optically active. **The carbon compounds of living matter are mostly optically active whereas the same compounds made in a laboratory come out as an equal mixture of both mirror forms and rotate nothing, so a cell does not merely make the right compound — it makes one particular mirror form of it, which is the first sign that biological synthesis is carried out by something itself one-handed.**",
      cn: "Chirality（手性）是一个分子无法与自身镜像重叠的性质，就像左手放不进右手的位置；只含一种镜像形式的溶液会使偏振光的振动面旋转，称为具有旋光活性。**生命物质中的碳化合物大多具有旋光活性，而实验室里合成的同一批化合物则是两种镜像形式的等量混合物，什么也不旋转——所以细胞不只是造出了对的化合物，它造的是其中某一种镜像形式；这是生物合成由某个本身就「单手」的东西完成的第一个迹象。**",
      src: "B §1.2, p.11",
      openQuestion_en: "Why living matter settled on one mirror form rather than the other, and why it settled at all, is not fully explained.",
      openQuestion_cn: "生命物质为何选定了其中一种镜像形式而非另一种、乃至为何非要作出选择，至今尚未完全阐明。",
      see: [{ id: "2-1-2", en: "the L configuration that every protein amino acid actually has", cn: "所有蛋白质氨基酸实际采取的 L 构型" }]
    },
    {
      link_en: "and all of this happens across an enormous range of sizes",
      link_cn: "而这一切发生在一个极大的尺寸跨度上",
      en: "**Living and non-living objects laid on one scale span four order-of-magnitude markers: at 10⁻⁹ m sit atoms, proteins, the thickness of a membrane and viruses; at 10⁻⁶ m a chloroplast and a cell; at 10⁻³ m a flea, and the length of a DNA molecule; at 10³ m a car, a whale and a sequoia, with a human being at about 1 m.**",
      cn: "**把生物与非生物的对象放在同一条尺度上，跨越四个数量级刻度：10⁻⁹ m 处是原子、蛋白质、膜的厚度和病毒；10⁻⁶ m 处是叶绿体和细胞；10⁻³ m 处是跳蚤，以及一个 DNA 分子的长度；10³ m 处是汽车、鲸和红杉，而人在 1 m 上下。**",
      src: "B §1.2, p.11, Obr. 1.1"
    },
    {
      link_en: "and the closing statement of this chain is the one everything else has been building to",
      link_cn: "这条链的收束语，正是前面一切所指向的那一句",
      en: "**Living matter is a dynamic system, under constant change and constantly renewing itself — which is why holding a constant internal environment costs energy every second rather than being a state that a thing can simply settle into.**",
      cn: "**生命物质是一个动态系统，处在不断的变化之中，并不断自我更新——正因如此，把内环境维持恒定这件事每一秒都在烧能量，而不是某种一旦达到就可以躺在里面的状态。**",
      src: "B §1.2, p.11",
      see: [{ id: "L-1-3-1", en: "the dynamic steady state measured: how far from equilibrium a cell actually sits", cn: "把动态稳态量出来：细胞离平衡究竟有多远" }]
    }
  ],
  terms: [
    { en: "reproduction", cn: "繁殖",
      def_en: "The general ability of a living thing to assimilate matter from its surroundings and use it to multiply its own living substance, whether by growth of the original individual or by the appearance of further similar individuals. Taken as the most exclusive manifestation of life, and therefore as the criterion that separates living from non-living.",
      def_cn: "生物从周围环境同化物质、并用以增殖自身生命物质的普遍能力——无论表现为原个体的长大，还是出现更多相似个体。它被取作生命最具排他性的表现，因而成为区分生物与非生物的判据。" },
    { en: "irritability", cn: "应激性",
      def_en: "The capacity to respond to an external stimulus. One of the manifestations of life alongside movement and purposeful action, all of which are less exclusive than reproduction.",
      def_cn: "对外界刺激作出反应的能力。与运动、有目的的行为并列为生命的表现，其排他性都低于繁殖。" },
    { en: "macrobiogenic elements", cn: "常量生源元素",
      def_en: "H, O, C, N and P, present in every organism at about 1 % of mass and above. Invariable: no organism does without them.",
      def_cn: "H、O、C、N、P，在每一个生物体中占质量约 1% 及以上。属恒定元素：没有哪个生物体能缺。" },
    { en: "oligobiogenic elements", cn: "寡量生源元素",
      def_en: "Ca, Mg, S, Na, K, Fe and Cl, at 0.05–1 % of mass and present in all organisms.",
      def_cn: "Ca、Mg、S、Na、K、Fe、Cl，占质量 0.05–1%，存在于所有生物体中。" },
    { en: "microbiogenic elements", cn: "微量生源元素",
      def_en: "Cu, Zn, Co, Mn, I and Mo — the invariable elements present in the smallest quantities.",
      def_cn: "Cu、Zn、Co、Mn、I、Mo——含量最少的恒定元素。" },
    { en: "variable elements", cn: "可变元素",
      def_en: "B, Si, V, Br, Li, As, Se, Ti and Al, reaching significant amounts only in some species; also called trace elements or microelements. They stand against the three invariable groups, which every organism carries.",
      def_cn: "B、Si、V、Br、Li、As、Se、Ti、Al，只在某些物种中达到显著含量；也称痕量元素或微量元素。与每个生物体都具备的三组恒定元素相对。" },
    { en: "reduced carbon", cn: "还原态碳",
      def_en: "Carbon carrying hydrogen, as opposed to the oxidised carbon of carbonates and CO₂ that dominates inanimate nature. It is energy-rich, and its energy is released by burning it in air to water and CO₂ — the difference in chemical form that most distinguishes living from non-living matter.",
      def_cn: "带着氢的碳，与无生命自然界中占主导的碳酸盐、CO₂ 等氧化态碳相对。它富含能量，只需在空气中烧成水和 CO₂ 即可释放——这正是生物物质与非生物物质在化学形式上最主要的差别。" },
    { en: "chirality", cn: "手性",
      def_en: "The property of a molecule that makes it non-superimposable on its mirror image. A solution of one mirror form alone rotates polarised light and is optically active. Natural carbon compounds are mostly optically active; their laboratory-made counterparts are equal mixtures of both forms and are not.",
      def_cn: "分子无法与其镜像重叠的性质。只含一种镜像形式的溶液会旋转偏振光，即具有旋光活性。天然碳化合物大多有旋光活性，实验室制备的同类物则是两种形式的等量混合物，没有旋光活性。" }
  ]
};

/* ========================================================================= 1-3 */
window.BIOLITE_SPINE["1-3"] = {
  assumed: ["water", "cell", "protein", "nucleic acid", "molecule", "test tube",
            "computer", "endoplasmic reticulum", "Golgi apparatus", "peroxisome",
            "mitochondrion", "centriole", "vacuole", "chromosome", "lysosome",
            "cilium", "flagellum", "plasma membrane", "cell wall", "alga",
            "fungus", "protist", "Escherichia coli", "biochemistry"],
  nodeTitle_en: "Building blocks of living matter: from molecule to cell",
  nodeTitle_cn: "生命物质的建筑基块：从分子到细胞",
  title_en: "The ladder from monomer to cell, and the method problem that comes with taking it apart",
  title_cn: "从单体到细胞的阶梯，以及拆开它所带来的方法学问题",
  steps: [
    {
      en: "Water enters reactions as a reactant and leaves them as a product, and it is what decides which parts of a large molecule face outwards and which hide inside. **Water is the main component of most organisms and takes an active part in biochemistry rather than serving as a passive medium on which reactions happen to be staged — reading it as scenery is the commonest way to get the shape of a protein wrong, which is why it is said first.**",
      cn: "水会作为反应物进入反应、作为产物离开反应；一个大分子的哪些部分朝外、哪些部分躲在里面，也是由水决定的。**水是大多数生物体的主要组分，而且它在生物化学里是主动的参与者，不是反应恰好上演于其上的被动介质——把水读成布景，是把蛋白质形状搞错的头号常见方式，所以这一条放在最前面说。**",
      src: "B §1.3, p.11"
    },
    {
      link_en: "with water as the setting, the rest of living matter is built as a ladder",
      link_cn: "以水为环境，生命物质的其余部分是按阶梯搭起来的",
      en: "A monomer is a small molecule that can be joined repeatedly to others of its kind, and a biopolymer is the long chain that results. **The cell builds its biopolymers from monomers and the ladder continues upward — monomer, biopolymer, assemblies of biopolymers, organelles, and the cell itself — with each rung made of the rung below and carrying properties the rung below does not have, which is why knowing the monomers already constrains what the polymer can be.**",
      cn: "monomer（单体）是一种可以反复与同类相连的小分子，由此得到的长链就是 biopolymer（生物大分子）。**细胞用单体建造自己的生物大分子，而这架阶梯继续向上——单体、生物大分子、生物大分子的组装体、细胞器，最后是细胞本身——每一级都由下一级搭成，并带有下一级所没有的性质；正因如此，知道了单体，就已经限定了聚合物可能是什么样子。**",
      src: "B §1.3, p.11"
    },
    {
      link_en: "the top rung of that ladder comes in two designs, and the simpler one first",
      link_cn: "这架阶梯的最上一级有两种设计，先看较简单的那种",
      en: "**A prokaryotic cell has the simpler plan — bounded by a cytoplasmic membrane and, outside that, by a cell wall — and Escherichia coli, a bacterium of the human gut and the organism most of biochemistry was worked out in, is the standard example of it.**",
      cn: "**原核细胞的构造较简单——由细胞质膜包被，膜外还有一层细胞壁——而 Escherichia coli（大肠杆菌），一种人肠道细菌、也是生物化学大部分内容赖以搞清楚的那个生物，是它的标准例子。**",
      src: "B §1.3, p.12, Obr. 1.4"
    },
    {
      link_en: "and the fully developed design",
      link_cn: "再看构造完备的那种设计",
      en: "A eukaryotic cell is the fully developed structure, found in protists, algae, fungi, animals and higher plants; what makes it fully developed is that its interior is divided into organelles, each a compartment with its own job. **The organelles labelled on an animal-cell scheme are smooth and rough endoplasmic reticulum, Golgi apparatus, peroxisome, mitochondria, centrioles, vacuole, chromosome, plasma membrane, lysosome, and cilium or flagellum.**",
      cn: "真核细胞是构造完备的那一种，见于原生生物、藻类、真菌、动物和高等植物；所谓「完备」，在于它的内部被划分成许多细胞器，每一个都是有自己分工的隔间。**动物细胞示意图上标注的细胞器是：光面和粗面内质网、高尔基体、过氧化物酶体、线粒体、中心粒、液泡、染色体、质膜、溶酶体，以及纤毛或鞭毛。**",
      src: "B §1.3, pp.12–15, Tab. 1.3, Obr. 1.5–1.6"
    },
    {
      link_en: "having a ladder of levels raises a question about how any of it should be studied",
      link_cn: "有了这么一架层级的阶梯，就带出一个「该怎么研究」的问题",
      en: "An organism exists only as a whole and only in interaction with its surroundings, so on that view it ought to be studied in those linkages; that is the systems approach. Against it stands what is practically workable: isolating one aspect, shielding it from every other influence, and studying it on its own, which is reductionism. **Argument cannot reconcile the two, because each gives up what the other keeps — the systems approach keeps the real object and loses the ability to control anything, and reductionism keeps control and loses the real object.**",
      cn: "一个生物体只有作为整体、并且只有在与环境的相互作用中才存在，因此按这个看法，就应当在这些联系之中研究它；这就是 systems approach（系统方法）。与之相对的是实际做得动的做法：把某一个方面单独分离出来，屏蔽掉其他一切影响，单独研究它，这就是 reductionism（还原论）。**讲道理调和不了这两者，因为各自都放弃了对方保住的东西：系统方法保住了真实的对象，却失去了控制任何变量的能力；还原论保住了控制，却失去了真实的对象。**",
      src: "B §1.3, p.16"
    },
    {
      link_en: "and it is worth being explicit about which side this subject actually stands on",
      link_cn: "而这门学科实际站在哪一边，值得挑明",
      en: "**Biochemistry as a whole is, at least for now, an expression of the reductionist approach to studying life — and saying so is what makes the next step compulsory rather than optional.**",
      cn: "**生物化学作为整体，至少目前，体现的是研究生命的还原论方法——而把这句话说出来，正是下一步之所以是必做而非可选的原因。**",
      src: "B §1.3, p.16"
    },
    {
      link_en: "so what is that compulsory next step?",
      link_cn: "那这个必做的下一步是什么？",
      recall_en: "this is the price of the reductionism just admitted to, paid back",
      recall_cn: "这就是刚才承认的还原论所欠下的账，现在还上",
      en: "Knowledge obtained from an isolated reaction, usually in a considerably simplified model system in a test tube — in vitro — has to be confronted with observation and experiment in the natural environment of the living organism — in vivo — and then fitted into the system of biochemical reactions already known. A third setting is gaining ground alongside them: in silico modeling, the study of computer models of biochemical systems. **An in vitro result is a hypothesis about the cell rather than a fact about it, and confrontation with in vivo work is what converts one into the other.**",
      cn: "从一个分离出来的反应中获得的知识——通常是在试管里大为简化的模型系统中得到的，即 in vitro（体外）——必须拿去与活体自然环境中的观察和实验（in vivo，体内）相对照，然后纳入已知生化反应的体系之中。与这两者并列的第三种场所正在兴起：in silico modeling（计算机模拟建模），即研究生化系统的计算机模型。**一个体外结果是关于细胞的假说，而不是关于细胞的事实；与体内工作的对照，正是把前者变成后者的那道工序。**",
      src: "B §1.3, p.16"
    }
  ],
  terms: [
    { en: "biopolymer", cn: "生物大分子",
      def_en: "The long chain a cell builds by joining monomers — small molecules that can be linked repeatedly to others of their kind. Monomer, biopolymer, assembly, organelle and cell form a ladder in which each level is built from the one below and has properties the one below lacks.",
      def_cn: "细胞把单体（可反复与同类相连的小分子）连接起来所得到的长链。单体、生物大分子、组装体、细胞器、细胞构成一架阶梯，每一级都由下一级搭成，并具有下一级所没有的性质。" },
    { en: "systems approach", cn: "系统方法",
      def_en: "Studying an organism in its linkages, as a whole that exists only in interaction with its surroundings. It keeps the real object and gives up experimental control.",
      def_cn: "在生物体的各种联系之中、把它当作只有在与环境相互作用中才存在的整体来研究。它保住了真实的对象，放弃了实验控制。" },
    { en: "reductionism", cn: "还原论",
      def_en: "Isolating one aspect from all other influences and studying it separately. It keeps experimental control and gives up the real object. Biochemistry as a whole is, at least for now, an expression of it.",
      def_cn: "把某一方面与其他一切影响隔离开来、单独加以研究。它保住了实验控制，放弃了真实的对象。生物化学作为整体，至少目前体现的正是这种方法。" },
    { en: "in vitro", cn: "体外",
      def_en: "In a test tube, in a considerably simplified model system. A result obtained this way is a hypothesis about the cell until it has been confronted with in vivo work.",
      def_cn: "在试管中、在大为简化的模型系统内。以这种方式得到的结果，在与体内工作对照之前，只是关于细胞的一个假说。" },
    { en: "in vivo", cn: "体内",
      def_en: "In the natural environment of the living organism. Confrontation with in vivo observation and experiment is what turns an in vitro result into knowledge.",
      def_cn: "在活体的自然环境中。与体内的观察和实验相对照，正是把体外结果变成知识的那道工序。" },
    { en: "in silico modeling", cn: "计算机模拟建模",
      def_en: "The study of computer models of biochemical systems, a third setting alongside in vitro and in vivo and one of growing importance.",
      def_cn: "研究生化系统的计算机模型，是与体外、体内并列的第三种场所，重要性日增。" }
  ]
};

/* ========================================================================= 1-4 */
window.BIOLITE_SPINE["1-4"] = {
  assumed: ["cell", "organism", "protein", "carbon", "oxygen", "hydrogen",
            "carbon dioxide", "ammonia", "water", "salt", "energy", "molecule",
            "Escherichia coli", "yeast", "bacterium", "fungus", "alga", "plant",
            "animal", "protist", "Euglena", "cyanobacteria", "sulfur", "iron",
            "light", "biochemistry"],
  nodeTitle_en: "Nutrition and metabolism",
  nodeTitle_cn: "营养与代谢",
  title_en: "Every organism answers two separate questions: where its carbon comes from, and where its energy comes from",
  title_cn: "每种生物都要回答两个彼此独立的问题：碳从哪来，能量从哪来",
  steps: [
    {
      en: "A characteristic feature of life is the use of externally acquired energy to build one's own body. Compounds an organism takes in are either converted into its own constituents or used as an energy source. **Even in an organism as simple as Escherichia coli, a gut bacterium, doing that takes more than a thousand chemical reactions running in coordination, and the sum of those reactions is metabolism.**",
      cn: "生命的一个特征，是利用从外界获取的能量来建造自己的身体。生物体摄入的化合物，或者被转化成它自身的组成成分，或者被用作能源。**即使在大肠杆菌这样简单的生物体（一种肠道细菌）里，做成这件事也需要一千多个化学反应协调运转，而这些反应的总和就是 metabolism（代谢）。**",
      src: "B §1.4, p.16"
    },
    {
      link_en: "a thousand reactions need sorting, and the first sorting is by where a compound stands in the flow",
      link_cn: "一千个反应需要整理，而第一种整理方式是看化合物站在流程的哪个位置",
      en: "**By position in metabolism a compound is one of four things: a substrate or nutrient, also called an assimilate, which is what comes in; an intermediate, which may serve as a precursor of a biological macromolecule, as a way of storing energy in a chemically usable form, or as the means of converting one class of biologically significant compound into another; a structural substance proper, which is what the body is actually built of; or a waste product, also called a dissimilate, which is what goes out.**",
      cn: "**按化合物在代谢中所处的位置，它属于四者之一：底物或养分（也称同化物），即进来的东西；中间产物，它可以充当生物大分子的前体、以化学上可利用的形式储存能量，或者作为把一类具有生物学意义的化合物转变为另一类的手段；本身的建筑物质，也就是身体真正由之构成的东西；以及废物（也称异化物），即出去的东西。**",
      src: "B §1.4, p.16"
    },
    {
      link_en: "and those four labels turn out not to stick to a compound",
      link_cn: "而这四个标签并不粘在化合物身上",
      en: "Anabolism is the synthetic side of metabolism, the reactions that build; catabolism is the degradative side, the reactions that break down. **That four-way division is relative to a certain degree, because the same substance is a product seen from anabolism and a substrate seen from catabolism — so asking what a compound is has to be answered by naming the direction you are looking from.**",
      cn: "Anabolism（合成代谢）是代谢中作合成的那一侧，也就是负责建造的那些反应；catabolism（分解代谢）是作降解的那一侧，也就是负责拆解的那些反应。**上面那种四分法在一定程度上是相对的，因为同一种物质，从合成代谢看是产物，从分解代谢看就是底物——所以「某化合物是什么」这个问题，必须先说明你是从哪个方向看的。**",
      src: "B §1.4, p.16",
      see: [{ id: "L-1-3-1", en: "catabolism and anabolism as an economy, with ATP as the currency between them", cn: "把分解代谢与合成代谢看作一个经济体，ATP 是两者之间的货币" }]
    },
    {
      link_en: "what actually comes in at the substrate end is unpromising material",
      link_cn: "在底物那一端真正进来的，是些不起眼的材料",
      en: "**The basic substrates are inorganic substances — water, carbon dioxide, ammonia and salts — and as a class they are low in chemically usable energy, which is exactly the problem an organism has to solve.** Against them stand the macroergic, or high-energy, compounds, from which biochemical processes can obtain a considerable quantity of energy relatively easily, and which serve every organism as a kind of universal energy currency for transferring and storing energy.",
      cn: "**基本底物是无机物质——水、二氧化碳、氨和各种盐类——作为一类，它们所含的化学可利用能量很低，而这恰恰就是生物体必须解决的问题。**与之相对的是 macroergic compound（高能化合物），生化过程可以相对容易地从中取得可观的能量；它们在每一个生物体中充当转移和储存能量的通用「能量货币」。",
      src: "B §1.4, p.16",
      see: [{ id: "L-13-3-1", en: "what makes a compound macroergic, measured on ATP under real cellular conditions", cn: "一个化合物凭什么算高能：在真实细胞条件下对 ATP 的测量" }]
    },
    {
      link_en: "and none of those thousand reactions would happen at a useful speed on its own",
      link_cn: "而那一千个反应里没有一个能自行以有用的速度进行",
      en: "**Most biochemical reactions proceed only in the presence of a catalyst — a substance that speeds a reaction up without being consumed by it — and as a rule that catalyst is an enzyme, meaning a specialised protein, which is why the set of reactions a cell can run is decided by the set of enzymes it makes.**",
      cn: "**多数生化反应只有在催化剂存在时才进行——催化剂是能加速反应而自身不被消耗的物质——而这个催化剂通常是 enzyme（酶），也就是特化的蛋白质；所以一个细胞能跑哪些反应，是由它造出哪些酶决定的。**",
      src: "B §1.4, p.16"
    },
    {
      link_en: "now the two questions that classify every organism on Earth. First: where does its carbon come from?",
      link_cn: "现在轮到给地球上每种生物分类的那两个问题。第一：它的碳从哪来？",
      recall_en: "hydrogenated carbon is the reduced, energy-rich carbon that separates living from non-living matter",
      recall_cn: "加氢的碳就是那种还原态、富含能量的碳，正是它把生物物质和非生物物质分开",
      en: "**Autotrophic organisms, also called lithotrophic, use carbon dioxide as their carbon source and are therefore the producers of compounds containing hydrogenated carbon; heterotrophic organisms, also called organotrophic, are the consumers of the organic compounds that autotrophs created.**",
      cn: "**自养生物（autotrophic，也称 lithotrophic，无机营养）以二氧化碳为碳源，因而是含加氢碳化合物的生产者；异养生物（heterotrophic，也称 organotrophic，有机营养）则是自养生物所创造的有机化合物的消费者。**",
      src: "B §1.4, p.17",
      see: [{ id: "1-2", en: "why living matter holds its carbon reduced in the first place", cn: "生命物质为什么一开始就把碳保持在还原态" }]
    },
    {
      link_en: "second question, and it is answered independently of the first",
      link_cn: "第二个问题，而且它的回答与第一个无关",
      en: "**Phototrophs use light radiation as their energy source, in the process of photosynthesis; chemotrophs obtain their energy by oxidising substrates.**",
      cn: "**光养生物（phototroph）以光辐射为能源，途径是光合作用；化养生物（chemotroph）则通过氧化底物来获得能量。**",
      src: "B §1.4, p.17"
    },
    {
      link_en: "two independent yes-or-no questions make four boxes, and every organism falls into one of them",
      link_cn: "两个彼此独立的是非问题给出四个格子，每种生物都落在其中一格",
      recall_en: "the carbon axis and the energy axis from the two steps above, crossed",
      recall_cn: "把上面两步的「碳源轴」和「能源轴」交叉起来",
      en: "**Photolithotrophic organisms take carbon from CO₂ and energy from light: green and purple sulfur bacteria, algae, cyanobacteria and green plants. Chemolithotrophic organisms take carbon from CO₂ and energy from oxidising inorganic substrates: sulfur, iron and nitrifying bacteria. Photoorganotrophic organisms take carbon from organic compounds and energy from light: purple non-sulfur bacteria, and autotrophic protists such as Euglena. Chemoorganotrophic organisms take both from organic substrates: bacteria, fungi, protists and animals.**",
      cn: "**光能无机营养型生物的碳取自 CO₂、能量取自光：绿硫细菌与紫硫细菌、藻类、蓝细菌、绿色植物。化能无机营养型生物的碳取自 CO₂、能量取自氧化无机底物：硫细菌、铁细菌、硝化细菌。光能有机营养型生物的碳取自有机化合物、能量取自光：紫色非硫细菌，以及裸藻这类自养原生生物。化能有机营养型生物两样都取自有机底物：细菌、真菌、原生生物、动物。**",
      src: "B §1.4, p.17, Tab. 1.4"
    },
    {
      link_en: "one further axis cuts across all four boxes",
      link_cn: "还有一条轴横切过这四个格子",
      en: "**Strict, or obligate, anaerobes grow and multiply only in the absence of oxygen, and for some of them oxygen is a violent poison even in traces — most are primitive prokaryotic microorganisms and some are dangerous pathogens; facultative anaerobes such as yeasts can switch between alternative metabolic schemes according to external conditions; and obligate aerobes, which include humans and most other organisms, absolutely require oxygen.**",
      cn: "**严格（专性）厌氧生物只能在没有氧的条件下生长繁殖，其中一些即使遇到痕量的氧也如遭剧毒——它们多为原始的原核微生物，有些是危险的病原体；兼性厌氧生物（例如酵母）能够根据外界条件在几套代谢方案之间切换；而专性需氧生物——包括人类和大多数生物——绝对离不开氧。**",
      src: "B §1.4, p.17"
    }
  ],
  terms: [
    { en: "metabolism", cn: "代谢",
      def_en: "The sum of the coordinated chemical reactions by which an organism converts acquired compounds into its own constituents or uses them as an energy source. More than a thousand of them run even in Escherichia coli.",
      def_cn: "生物体把获得的化合物转变为自身组分、或用作能源的一整套彼此协调的化学反应的总和。即使在大肠杆菌里也有一千个以上。" },
    { en: "anabolism / catabolism", cn: "合成代谢／分解代谢",
      def_en: "Anabolism is the synthetic side of metabolism, catabolism the degradative side. The same substance is a product seen from anabolism and a substrate seen from catabolism, which is why the substrate / intermediate / waste labels are relative rather than fixed.",
      def_cn: "合成代谢是代谢中作合成的一侧，分解代谢是作降解的一侧。同一物质从合成代谢看是产物、从分解代谢看是底物——这正是「底物／中间产物／废物」这些标签是相对而非固定的原因。" },
    { en: "macroergic compounds", cn: "高能化合物",
      def_en: "Compounds from which biochemical processes can obtain a considerable quantity of energy relatively easily. They serve as the universal energy currency for transferring and storing energy, in contrast to the basic inorganic substrates — water, CO₂, ammonia, salts — which are low in usable energy.",
      def_cn: "生化过程可以相对容易地从中取得大量能量的化合物，充当转移与储存能量的通用「能量货币」；与之相对的是水、CO₂、氨、盐类等可利用能量很低的基本无机底物。" },
    { en: "autotrophic / heterotrophic", cn: "自养／异养",
      def_en: "The carbon-source axis. Autotrophs (lithotrophs) use CO₂ as carbon source and produce hydrogenated-carbon compounds; heterotrophs (organotrophs) consume the organic compounds autotrophs made.",
      def_cn: "碳源这条轴。自养（无机营养）生物以 CO₂ 为碳源，生产含加氢碳的化合物；异养（有机营养）生物消费自养生物造出的有机化合物。" },
    { en: "phototrophic / chemotrophic", cn: "光养／化养",
      def_en: "The energy-source axis, answered independently of the carbon-source axis. Phototrophs use light radiation in photosynthesis; chemotrophs oxidise substrates. Crossing the two axes gives the four trophic classes.",
      def_cn: "能源这条轴，与碳源轴各自独立地回答。光养生物在光合作用中利用光辐射；化养生物氧化底物取能。两条轴交叉，就得到四种营养类型。" },
    { en: "strict (obligate) anaerobe", cn: "专性厌氧生物",
      def_en: "Grows and multiplies only without oxygen; for some, traces of oxygen are a violent poison. Facultative anaerobes such as yeasts switch metabolic schemes with conditions, and obligate aerobes, humans included, absolutely require oxygen.",
      def_cn: "只能在无氧条件下生长繁殖；对某些种类而言痕量氧即剧毒。兼性厌氧生物（如酵母）随条件切换代谢方案；专性需氧生物（包括人类）则绝对需要氧。" }
  ]
};

/* ========================================================================= 1-5 */
window.BIOLITE_SPINE["1-5"] = {
  assumed: ["energy", "temperature", "pressure", "volume", "heat", "cell",
            "molecule", "ion", "concentration", "solution", "reaction",
            "membrane", "mathematics", "physics", "biochemistry", "ATP"],
  nodeTitle_en: "Energy and life",
  nodeTitle_cn: "能量与生命",
  title_en: "One number says whether a reaction can go; nothing in it says how fast, and life lives on the gap",
  title_cn: "一个数字说明反应能不能走；它对「多快」只字不提，而生命就活在这道缝里",
  steps: [
    {
      en: "Thermodynamics is the study of the general laws of energy conversion, and it describes a system through state quantities. **A state quantity is a property that depends only on the overall state of a system and not on the path by which the system reached that state — which is what lets a change be worked out by comparing the starting point with the end point, with no need to know what happened in between.**",
      cn: "热力学研究能量转变的普遍规律，它用状态量来描述一个系统。**状态量是这样一种性质：它只取决于系统的总体状态，而与系统经由什么路径到达该状态无关——正因如此，只要比较起点和终点就能算出变化，中间发生了什么完全不必知道。**",
      src: "B §1.5, p.17"
    },
    {
      link_en: "two laws set the frame, and the first one is a bookkeeping rule",
      link_cn: "两条定律搭起框架，第一条是一条记账规则",
      en: "**The first law of thermodynamics says that the total energy of a system plus its surroundings is constant, which is the same statement as saying that the internal energy of the system, written U, is a state quantity.**",
      cn: "**热力学第一定律说：系统及其环境的总能量是恒定的——这句话和「系统的内能（记作 U）是一个状态量」是同一个说法。**",
      src: "B §1.5, p.17"
    },
    {
      link_en: "the first law says nothing about direction, and the second law supplies it",
      link_cn: "第一定律对方向只字不提，方向由第二定律给出",
      en: "Entropy, written S, measures the randomness of a system. **The second law gives the criterion for telling which processes happen by themselves: a spontaneous process is one in which the total entropy of the system plus its surroundings grows — equivalently, the total entropy of an isolated system grows.**",
      cn: "熵（记作 S）度量一个系统的随机程度。**第二定律给出了判断哪些过程会自行发生的判据：自发过程就是系统与环境的总熵增加的过程——等价地说，是孤立系统的总熵增加的过程。**",
      src: "B §1.5, p.17"
    },
    {
      link_en: "measuring the surroundings' entropy is impractical, so biochemistry uses a quantity that folds it in",
      link_cn: "测量环境的熵不切实际，所以生物化学改用一个把它折进来的量",
      en: "**Gibbs energy is defined as G = U + pV − TS, where p is pressure, V volume and T absolute temperature; its first two terms define the enthalpy H = U + pV, and since volume work can be neglected in most biochemical processes, H practically coincides with the internal energy.**",
      cn: "**吉布斯能定义为 G = U + pV − TS，其中 p 是压力、V 是体积、T 是绝对温度；它的前两项定义了焓 H = U + pV，而由于多数生化过程中体积功可以忽略，H 实际上就与内能重合。**",
      src: "B §1.5, p.17"
    },
    {
      link_en: "and with that definition the criterion for a spontaneous process becomes usable at the bench",
      link_cn: "有了这个定义，自发过程的判据在实验台上就用得起来了",
      recall_en: "this is the second law's entropy criterion, rewritten so that only the system has to be measured",
      recall_cn: "这就是第二定律的熵判据，改写成只需测量系统本身的形式",
      en: "**At constant pressure and temperature — which are in practice the conditions of biochemical reactions — and in a closed system, meaning one that exchanges no matter with its surroundings, the spontaneous processes are those in which G decreases, ΔG < 0; and because G is a state quantity, knowing the Gibbs energy difference between starting substances and products is enough to decide whether the reaction can proceed spontaneously, however it is carried out.**",
      cn: "**在恒定压力和温度下——实际上这就是生化反应的条件——并且在封闭系统（与环境不交换物质的系统）中，自发过程就是 G 下降的过程，即 ΔG < 0；而由于 G 是状态量，只要知道起始物与产物之间的吉布斯能之差，就足以判定该反应能否自发进行，与它以何种方式实现无关。**",
      src: "B §1.5, pp.17–18"
    },
    {
      link_en: "and here is the one thing that number refuses to tell you",
      link_cn: "而这个数字有一件事是死也不肯告诉你的",
      en: "Gibbs energy is a thermodynamic potential, analogous to potential energy in mechanics: a raised stone has a potential energy that says it will fall, and says nothing about when. **Gibbs energy gives no information whatever about the rate of a process, for which the concrete mechanism is decisive — so a reaction with a large negative ΔG can, in practice, never happen.**",
      cn: "吉布斯能是所谓热力学势，类比于力学中的势能：一块被举高的石头，其势能说明它会掉下来，却对「什么时候掉」只字不提。**吉布斯能不提供关于过程速率的任何信息，速率取决于过程实现的具体机制——所以一个 ΔG 为很大负值的反应，实际上完全可能永远不发生。**",
      src: "B §1.5, p.18",
      see: [{ id: "L-1-3-1", en: "activation energy, the quantity that does decide the rate, and how an enzyme lowers it", cn: "活化能——真正决定速率的那个量——以及酶如何把它降低" }]
    },
    {
      link_en: "path-independence has a second consequence, and this one is what makes life possible at all",
      link_cn: "路径无关还有第二个推论，而正是它让生命成为可能",
      en: "An endergonic reaction is one with ΔG₁ > 0, energetically unfavourable on its own; an exergonic reaction is one with ΔG₂ < 0. **Coupling of reactions follows from possibility depending only on the initial and final states: an endergonic reaction can proceed if an exergonic one runs alongside it in the same system, provided the total change ΔG = ΔG₁ + ΔG₂ comes out negative.**",
      cn: "吸能反应（endergonic）是 ΔG₁ > 0 的反应，单独进行时在能量上不利；放能反应（exergonic）是 ΔG₂ < 0 的反应。**反应偶联正是「可能性只取决于始态与终态」这一点的推论：只要系统中同时进行一个放能反应，并且总变化 ΔG = ΔG₁ + ΔG₂ 为负，那个吸能反应就能够进行。**",
      src: "B §1.5, p.18",
      beyond: true,
      beyondNote: "A necessary condition that p.18 does not state: a negative sum alone transfers nothing. The two reactions must also share a common intermediate — a species one produces and the other consumes — or they simply run side by side. This is standard and commonly examined, and it is developed in L-1-3-1.",
      see: [{ id: "L-1-3-1", en: "why a favourable sum is not enough without a shared intermediate", cn: "为什么总和有利还不够——必须有共有中间产物" }]
    },
    {
      link_en: "and once reactions can be coupled, energy can be banked",
      link_cn: "一旦反应可以偶联，能量就可以存进银行",
      en: "**Energy can be made in advance and stored by running a suitable reaction, and what stores it is either an energy-rich compound or, more generally, an energy-rich situation — for example a non-equilibrium distribution of certain ions between two compartments — which is then spent to realise energetically unfavourable processes.**",
      cn: "**能量可以通过一个合适的反应「预先制造并储存起来」，而承载它的要么是一个富能化合物，要么更一般地是一种富能状态——例如某些离子在两个区室之间的非平衡分布——随后再把它花掉，去实现能量上不利的过程。**",
      src: "B §1.5, p.18",
      see: [{ id: "1-4", en: "macroergic compounds as the universal energy currency", cn: "作为通用能量货币的高能化合物" },
             { id: "L-19-2-1", en: "an ion gradient across a membrane used as stored energy, and the experiments that proved it", cn: "把跨膜离子梯度当作储存的能量，以及证明这件事的实验" }]
    },
    {
      link_en: "a cell is a mixture, so one Gibbs energy for the whole system is too coarse",
      link_cn: "细胞是个混合物，所以整个系统只用一个吉布斯能太粗了",
      en: "**For a system of several components the chemical potential is introduced — the partial molar Gibbs energy characteristic of one individual component — and in ideally behaving, that is very dilute, solutions it is a linear function of concentration, while in real solutions it is a linear function of the thermodynamic concentration, called the activity, which is defined precisely so that this linear relation continues to hold.**",
      cn: "**对于多组分体系，引入化学势——即某一个别组分所特有的偏摩尔吉布斯能；在理想行为的（也就是极稀的）溶液中它是浓度的线性函数，而在实际溶液中它是热力学浓度的线性函数，这个热力学浓度称为活度，其定义正是为了让这条线性关系继续成立。**",
      src: "B §1.5, p.18"
    },
    {
      link_en: "so where does a Gibbs energy value come from in the first place? From a measurable equilibrium",
      link_cn: "那吉布斯能的数值本身从哪来？从一个可测的平衡来",
      en: "The equilibrium constant K is the ratio of product to reactant concentrations once a reaction has stopped moving, and it can be measured. **Since the total ΔG is zero at equilibrium, ΔG° = −RT ln K follows, where the superscript zero marks values referred to a standard state; general thermodynamics takes the standard state to have unit activities of all components, but that is unsuitable for biochemistry given physiological hydrogen-ion activities, so biochemistry uses a standard state in which the hydrogen-ion activity corresponds to pH 7 and all other activities are unity, marked with a prime as ΔG°′ and K′.**",
      cn: "平衡常数 K 是反应不再移动之后产物与反应物浓度之比，它可以被测出来。**由于平衡时总 ΔG 为零，便得到 ΔG° = −RT ln K，其中上标零表示这些数值是相对于某个标准态而言的；一般热力学取所有组分活度为 1 的状态作标准态，但考虑到生理条件下的氢离子活度，这个取法对生物化学并不合适，所以生物化学采用氢离子活度对应 pH 7、其余组分活度为 1 的标准态，并在符号右上角加一撇写作 ΔG°′ 和 K′。**",
      src: "B §1.5, p.18",
      see: [{ id: "L-1-3-1", en: "the same relation used in the other direction, to read K off a measured free-energy change", cn: "把同一个关系式反着用：从实测的自由能变化读出 K" }]
    },
    {
      link_en: "and now the honest limitation, because every equation above was derived for a system that does not exist",
      link_cn: "接下来是一条诚实的限定，因为上面每一个式子都是为一个并不存在的系统推出来的",
      en: "**A fundamental limitation of classical thermodynamics is that its relations hold strictly only for isolated systems at equilibrium, and such ideal systems exist neither in living nor in inanimate nature; the relations can be applied to real systems because of the principle of local equilibrium, which under certain assumptions allows a non-equilibrium system, closed or open, to be divided into subsystems that can be regarded with sufficient accuracy as equilibrium ones — and that is why classical relations can legitimately describe an individual chemical reaction or a phenomenon at a biological membrane.**",
      cn: "**经典热力学有一条根本的限制：严格说来，它的关系式只对处于平衡的孤立系统成立，而这样的理想系统在生命界与非生命界都不存在；之所以还能把这些关系式用于实际系统，靠的是局域平衡原理——在一定假设下，它允许把一个非平衡的（封闭或开放的）系统划分成若干子系统，而这些子系统可以以足够的精度被当作平衡系统看待。这正是经典关系式能够正当地描述个别化学反应、或生物膜上某个现象的原因。**",
      src: "B §1.5, p.18"
    },
    {
      link_en: "which raises the question of what state living matter is actually in, since it is plainly not at equilibrium",
      link_cn: "这就引出一个问题：生命物质究竟处在什么状态，因为它显然不在平衡态",
      recall_en: "the closed system of the ΔG < 0 criterion exchanges no matter; an organism exchanges matter constantly",
      recall_cn: "ΔG < 0 判据里的封闭系统与外界无物质交换，而生物体一直在交换物质",
      en: "**Living matter is mostly in a stationary, or steady, state, in which the parameters of the system are independent of time and which therefore looks outwardly like equilibrium; equilibrium is a special case of the stationary state, and the difference that matters is that a stationary state is reachable in open systems too, that is with exchange of matter with the surroundings — while time-independence holds for a living system only within a limited time interval, since its overall development is non-stationary, and ageing and death are that development.**",
      cn: "**生命物质多半处于所谓稳态：系统的各项参数不随时间变化，因而外观上像是平衡；平衡态是稳态的一个特例，而真正要紧的差别在于，稳态在开放系统中也能达到，也就是允许与环境交换物质——同时，对活的系统而言，时间无关性只在有限的时间区间内成立，因为它的总体发展是非稳态的，衰老和死亡就是这个发展本身。**",
      src: "B §1.5, p.18",
      see: [{ id: "L-1-3-1", en: "the steady state measured on ATP: nine orders of magnitude from equilibrium", cn: "在 ATP 上量出的稳态：离平衡九个数量级" }]
    },
    {
      link_en: "and the steady state has to be actively defended, which gives it a name",
      link_cn: "而稳态必须被主动守住，这就给了它一个名字",
      en: "**More precisely, living matter is a dynamically stationary system in which the actual values of the state quantities fluctuate within a certain range around the stationary values, and keeping those fluctuations inside permissible limits — homeostasis, the principle of constancy of the internal environment — is a condition of the system's stationary behaviour, which is to say of its life.**",
      cn: "**更确切地说，生命物质是一个动态稳定的系统：各状态量的实际值在稳态值附近某一范围内波动，而把这些波动维持在允许的限度之内——这就是内稳态，即内环境恒定原理——是该系统保持稳态行为的条件，也就是它得以存活的条件。**",
      src: "B §1.5, p.18"
    },
    {
      link_en: "one last admission about how far any of this reaches",
      link_cn: "最后坦白一句：这一切能走多远",
      en: "**Classical thermodynamics no longer suffices to describe an organism as a whole — which means that relations derived for simple idealised systems cannot fully describe its behaviour, and does not mean that the laws of physics fail for living matter; contemporary physics is building new apparatus for this, non-equilibrium thermodynamics and, for processes with an abrupt change of quality, synergetics, both of which need mathematics of their own: bifurcation theory, catastrophe theory, and abstract spaces of non-integer dimension, called fractals.**",
      cn: "**要描述作为整体的生物体，经典热力学已经不敷使用——这句话的意思是：为简单理想化系统推出的关系式无法完整描述它的行为，而不是说物理定律对生命物质失效；当代物理学正在为此建造新的工具，即非平衡热力学，以及针对发生质的突变的过程的协同学，两者都需要专门的数学：分岔理论、突变理论，以及非整数维的抽象空间，也就是分形。**",
      src: "B §1.5, p.18",
      openQuestion_en: "Whether a whole organism can be described thermodynamically at all is unsettled; the apparatus for it is still being built.",
      openQuestion_cn: "整个生物体究竟能否用热力学描述，尚无定论；相应的理论工具还在建造之中。"
    }
  ],
  terms: [
    { en: "state quantity", cn: "状态量",
      def_en: "A property depending only on the overall state of a system, not on the path taken to reach it. Internal energy U and Gibbs energy G are both state quantities, which is why a change can be computed from the endpoints alone — and why two reactions can be coupled.",
      def_cn: "只取决于系统总体状态、而与到达该状态的路径无关的性质。内能 U 和吉布斯能 G 都是状态量——正因如此，只凭起点和终点就能算出变化，也正因如此两个反应可以偶联。" },
    { en: "Gibbs energy", cn: "吉布斯能",
      def_en: "G = U + pV − TS. At constant pressure and temperature in a closed system, the spontaneous processes are those with ΔG < 0. It is a thermodynamic potential and carries no information about rate.",
      def_cn: "G = U + pV − TS。在封闭系统的恒压恒温条件下，自发过程就是 ΔG < 0 的过程。它是热力学势，不含任何关于速率的信息。" },
    { en: "enthalpy", cn: "焓",
      def_en: "H = U + pV, the first two terms of the Gibbs energy. Volume work is negligible in most biochemical processes, so H practically coincides with the internal energy U.",
      def_cn: "H = U + pV，即吉布斯能的前两项。多数生化过程中体积功可忽略，故 H 实际与内能 U 重合。" },
    { en: "coupling of reactions", cn: "反应偶联",
      def_en: "Running an endergonic reaction (ΔG₁ > 0) alongside an exergonic one (ΔG₂ < 0) so that the total ΔG is negative. It follows from possibility depending only on the initial and final states. A shared intermediate is additionally required for energy actually to pass between them.",
      def_cn: "让吸能反应（ΔG₁ > 0）与放能反应（ΔG₂ < 0）并行，使总 ΔG 为负。它源自「可能性只取决于始态与终态」这一点。此外还必须有共有中间产物，能量才真的传得过去。" },
    { en: "chemical potential", cn: "化学势",
      def_en: "The partial molar Gibbs energy characteristic of one component of a multi-component system. Linear in concentration in very dilute solutions and linear in activity — the thermodynamic concentration — in real ones.",
      def_cn: "多组分体系中某一组分特有的偏摩尔吉布斯能。在极稀溶液中它是浓度的线性函数，在实际溶液中则是活度（热力学浓度）的线性函数。" },
    { en: "activity", cn: "活度",
      def_en: "Thermodynamic concentration, defined precisely so that the chemical potential remains a linear function of it in real solutions.",
      def_cn: "热力学浓度，其定义正是为了使化学势在实际溶液中仍是它的线性函数。" },
    { en: "biochemical standard state, ΔG°′", cn: "生化标准态 ΔG°′",
      def_en: "General thermodynamics puts all activities at unity. Biochemistry instead fixes the hydrogen-ion activity at pH 7 with all other activities unity, because physiological hydrogen-ion activities are nowhere near unit. Quantities referred to it carry a prime: ΔG°′, K′.",
      def_cn: "一般热力学取所有组分活度为 1；生物化学则把氢离子活度定在 pH 7、其余活度为 1，因为生理条件下的氢离子活度远非 1。相对于它的量加一撇：ΔG°′、K′。" },
    { en: "principle of local equilibrium", cn: "局域平衡原理",
      def_en: "Classical relations hold strictly only for isolated systems at equilibrium, which do not exist in nature. This principle allows a non-equilibrium system to be divided into subsystems accurate enough to treat as equilibrium ones, which is what justifies applying classical thermodynamics to a single reaction or to a membrane phenomenon.",
      def_cn: "经典关系式严格说来只对处于平衡的孤立系统成立，而这种系统在自然界并不存在。该原理允许把非平衡系统划分为足以当作平衡处理的子系统，从而为把经典热力学用于单个反应或膜现象提供了依据。" },
    { en: "stationary (steady) state", cn: "稳态",
      def_en: "A state whose parameters do not change with time, resembling equilibrium from outside. Equilibrium is a special case of it; unlike equilibrium, a stationary state is reachable in open systems, which exchange matter with their surroundings. For a living system, time-independence holds only over a limited interval — ageing and death are the non-stationary overall development.",
      def_cn: "参数不随时间变化的状态，从外面看很像平衡。平衡是它的特例；与平衡不同，稳态在与环境交换物质的开放系统中也能达到。对活系统而言，时间无关性只在有限区间内成立——衰老与死亡就是那个非稳态的总体发展。" },
    { en: "homeostasis", cn: "内稳态",
      def_en: "Keeping the fluctuations of the state quantities within permissible limits around their stationary values — the principle of constancy of the internal environment. It is a condition of the system's stationary behaviour, that is, of its life.",
      def_cn: "把各状态量围绕稳态值的波动维持在允许限度之内，即内环境恒定原理。它是系统保持稳态行为、也就是保持生命的条件。" }
  ]
};

/* ========================================================================= 1-6
   SOURCING GAP, recorded here rather than in the prose: only the opening of §1.6 on
   p.18 is in the extracted page set. It sets up a three-way classification of
   explanations for the origin of life and gives group (a); groups (b) and (c) run on
   to pp.19–20, which were not extracted. This spine therefore covers what is on p.18
   and stops. It must not be read as the book's complete position. */
window.BIOLITE_SPINE["1-6"] = {
  assumed: ["organism", "cell", "life", "evolution", "science"],
  nodeTitle_en: "Origin and evolution of life",
  nodeTitle_cn: "生命的起源与演化",
  title_en: "The oldest question, and the first of three families of answer to it",
  title_cn: "最古老的那个问题，以及三类回答中的第一类",
  steps: [
    {
      en: "**People have always been astonished by the complexity and variety of organisms and by the elements of purposefulness in their internal arrangement, their external organs and their activity — which is why questions about where living organisms came from, and about where life as such came from, are among the oldest that humans ask.**",
      cn: "**人们历来惊叹于生物体的复杂与多样，也惊叹于它们的内部构造、外部器官和活动中所显出的合目的性——正因如此，「生物体从何而来」以及「生命本身从何而来」这两个问题，属于人类最古老的追问之列。**",
      src: "B §1.6, p.18"
    },
    {
      link_en: "the answers offered over that time fall into three families",
      link_cn: "这段时间里给出的回答分成三类",
      en: "**Explanations of the origin of life divide into three groups, and the first of them, group (a), holds that life arose as the result of a supernatural intervention — creationism — or through the action of forces inaccessible to direct scientific investigation, an idea known as intelligent design.**",
      cn: "**关于生命起源的解释分为三组，其中第一组即 (a) 组认为：生命是超自然干预的结果——这就是创世论（creationism）——或者是由无法直接进行科学研究的力量作用而产生的，这个想法称为智能设计（intelligent design）。**",
      src: "B §1.6, p.18"
    },
    {
      link_en: "and what distinguishes that family from the other two is a property of the claim itself",
      link_cn: "而这一类与另外两类的区别，在于主张本身的一个性质",
      en: "**A force inaccessible to direct scientific investigation is one that no experiment can be built to test, so group (a) makes a claim of a different kind from any claim biochemistry can check — which is what separates it from the remaining two groups rather than any judgement about whether it is true.**",
      cn: "**「无法直接进行科学研究的力量」，指的是没有任何实验能被设计出来去检验它；因此 (a) 组提出的是一类与生物化学所能核查的主张性质不同的主张——把它与其余两组分开的正是这一点，而不是对它真假的任何裁定。**",
      src: "B §1.6, p.18",
      beyond: true,
      beyondNote: "p.18 names the two positions of group (a) without spelling out what makes them a group. The testability criterion stated here is standard philosophy-of-science material, given so that the classification has a stated basis rather than being a list.",
      openQuestion_en: "How life actually arose is not settled, and groups (b) and (c) of this classification continue on pp.19–20, which are outside the material this chain was read from.",
      openQuestion_cn: "生命究竟如何起源尚无定论；本分类的 (b) 组与 (c) 组接续于 pp.19–20，而那部分不在本条链所依据的材料之内。"
    }
  ],
  terms: [
    { en: "creationism", cn: "创世论",
      def_en: "The explanation that life arose as the result of a supernatural intervention. With intelligent design it forms group (a) of the three families of explanation for the origin of life.",
      def_cn: "认为生命是超自然干预之结果的解释。它与智能设计一起构成生命起源三类解释中的 (a) 组。" },
    { en: "intelligent design", cn: "智能设计",
      def_en: "The explanation that life arose through the action of forces inaccessible to direct scientific investigation.",
      def_cn: "认为生命由无法直接进行科学研究的力量作用而产生的解释。" }
  ]
};

/* ======================================================================= 2-1-1 */
window.BIOLITE_SPINE["2-1-1"] = {
  assumed: ["cell", "tissue", "protein", "carbon", "hydrogen", "oxygen",
            "nitrogen", "sulfur", "molecule", "alanine", "tyrosine", "leucine",
            "isoleucine", "valine", "proline", "phenylalanine", "tryptophan",
            "methionine", "threonine", "serine", "asparagine", "glutamine",
            "cysteine", "glycine", "glutamic acid", "aspartic acid", "lysine",
            "arginine", "histidine", "urea", "coenzyme A", "bacterium",
            "biochemistry"],
  nodeTitle_en: "Structure and occurrence of amino acids",
  nodeTitle_cn: "氨基酸的结构与存在",
  title_en: "Twenty molecules with an identical backbone, and everything that matters hanging off the side",
  title_cn: "二十个主链完全相同的分子，而所有要紧的东西都挂在旁边",
  steps: [
    {
      en: "**An amino acid is an organic substance containing a carboxyl group, –COOH, and an amino group, –NH₂; a whole range of them occurs in living organisms, and a small group of 20 holds a special position, because those 20 are the basic components of proteins and are also the starting substances from which the organism makes every type of nitrogen compound it needs.**",
      cn: "**氨基酸是同时含有羧基（–COOH）和氨基（–NH₂）的有机物；生物体内存在一大批这样的物质，而其中一小组共 20 种占据特殊地位——因为这 20 种既是蛋白质的基本组成成分，又是机体制造各类所需含氮化合物的起始物质。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "the first thing that is true of all 20 is where the two groups sit relative to each other",
      link_cn: "这 20 种共有的第一件事，是那两个基团彼此的相对位置",
      en: "The α-carbon is the carbon atom immediately next to the carboxyl carbon. **In every amino acid that is a component of a protein and for which a genetic code exists, the amino group is always in the α-position, that is on that neighbouring carbon — so all 20 share one identical backbone, and nothing about the backbone can distinguish them.**",
      cn: "α 碳是紧挨着羧基碳的那个碳原子。**在每一种构成蛋白质、并且有遗传密码与之对应的氨基酸中，氨基永远处在 α 位，也就是在那个相邻的碳上——所以这 20 种共用同一副主链，主链上没有任何东西能把它们区分开。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "so what does distinguish them?",
      link_cn: "那到底是什么在区分它们？",
      en: "**Besides the two basic functional groups, each amino acid carries a characteristic side chain designated R, and since the backbone is common to all of them, everything that tells one amino acid from another — and therefore everything a protein can do — is a property of R.** All 20 have a free unsubstituted amino group on the α-carbon, with proline as the single exception.",
      cn: "**除那两个基本官能团外，每种氨基酸还带有一条特征性侧链，记作 R；由于主链人人相同，区分一种氨基酸与另一种的一切——因而也就是蛋白质能做什么的一切——都是 R 的性质。**这 20 种在 α 碳上都带有游离而未被取代的氨基，唯一的例外是脯氨酸。",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "before sorting the side chains, one practical matter about how they are written",
      link_cn: "在给侧链分类之前，先说一件关于写法的实务",
      en: "**Amino acids are designated either by trivial names, or by three-letter symbols derived from those names — alanine is Ala, tyrosine is Tyr — while a peptide sequence is written with one-letter symbols instead, in which Ala becomes A and Tyr becomes Y.**",
      cn: "**氨基酸或者用俗名表示，或者用由俗名派生的三字母符号表示——丙氨酸是 Ala，酪氨酸是 Tyr——而书写肽序列时改用单字母符号，此时 Ala 写作 A，Tyr 写作 Y。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "now the sort that gets used for the rest of the subject. Group 1",
      link_cn: "现在是那个后面一直要用的分类。第 1 组",
      en: "A nonpolar group is one whose electric charge is spread evenly, so it is not attracted to water. **Group 1, the amino acids with a nonpolar side chain, holds eight members: five with an aliphatic chain, meaning a plain chain of carbon and hydrogen — alanine, leucine, isoleucine, valine and proline — two with an aromatic ring, phenylalanine and tryptophan, and one containing sulfur, methionine.**",
      cn: "非极性基团指电荷分布均匀、因而不被水吸引的基团。**第 1 组是侧链为非极性的氨基酸，共八名成员：五种带脂肪链的（脂肪链就是单纯由碳和氢组成的链）——丙氨酸、亮氨酸、异亮氨酸、缬氨酸、脯氨酸；两种带芳环的——苯丙氨酸、色氨酸；以及一种含硫的——甲硫氨酸。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "group 2 is the opposite case",
      link_cn: "第 2 组是相反的情形",
      recall_en: "the opposite of group 1: these side chains are attracted to water rather than avoiding it",
      recall_cn: "与第 1 组相反：这些侧链被水吸引，而不是躲着水",
      en: "A polar group has its charge unevenly distributed, so water is attracted to it. **Group 2, the amino acids with a polar side chain, contains either an –OH group, in threonine, serine and tyrosine, or an amide group, in asparagine and glutamine, or an –SH group, in cysteine; cysteine and tyrosine are the most polar of them, and glycine, whose side chain is a single hydrogen atom, is very difficult to place in this classification at all.**",
      cn: "极性基团的电荷分布不均匀，因而会吸引水。**第 2 组是侧链为极性的氨基酸，它们所含的或者是 –OH 基（苏氨酸、丝氨酸、酪氨酸），或者是酰胺基（天冬酰胺、谷氨酰胺），或者是 –SH 基（半胱氨酸）；其中极性最强的是半胱氨酸和酪氨酸；而甘氨酸的侧链只是一个氢原子，很难被放进这套分类里。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "groups 3 and 4 go one step further than polar: they carry an actual charge",
      link_cn: "第 3、4 组比「极性」更进一步：它们真的带电",
      en: "**Group 3, the negatively charged side chains, has two members — glutamic acid and aspartic acid — and what makes them negative is a second carboxyl group carried in the side chain itself. Group 4, the positively charged side chains, has three: lysine, which carries a second amino group; arginine, which carries a guanidino group; and histidine, which carries a weakly basic imidazole residue, a five-membered ring containing two nitrogen atoms.**",
      cn: "**第 3 组是带负电的侧链，共两名成员——谷氨酸和天冬氨酸——使它们带负电的，是侧链上自带的第二个羧基。第 4 组是带正电的侧链，共三名：赖氨酸带第二个氨基；精氨酸带一个胍基；组氨酸带一个弱碱性的咪唑残基，即一个含两个氮原子的五元环。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "that is the 20. Two further sets of amino acids exist, and knowing where each one stands matters",
      link_cn: "这就是那 20 种。此外还有两批氨基酸，弄清各自的位置很重要",
      en: "A hydrolysate is what is left when a protein is broken all the way down into its individual amino acids. **Beyond the 20 common ones, further amino acids have been found in the hydrolysates of some proteins, and their occurrence is mostly tied to one particular type of protein rather than being general.**",
      cn: "水解产物指的是把一个蛋白质彻底拆解成一个个氨基酸之后剩下的东西。**除那 20 种常见氨基酸之外，在某些蛋白质的水解产物中还发现了别的氨基酸，而它们的出现多半与某一特定类型的蛋白质绑定，并不普遍。**",
      src: "B §2.1.1, p.23"
    },
    {
      link_en: "and a much larger set that never gets into a protein at all",
      link_cn: "还有一批数量大得多、却从来进不了蛋白质的氨基酸",
      en: "**Over 150 further amino acids have been found in various cells and tissues, occurring either free or bound, and never in proteins — so the number 20 is a fact about the genetic code rather than a fact about chemistry, since nothing codes for the other 150.**",
      cn: "**在各种细胞和组织中还发现了 150 多种氨基酸，它们或游离、或结合存在，而从不出现在蛋白质里——所以「20」这个数字是关于遗传密码的事实，不是关于化学的事实：那另外 150 多种没有任何密码子与之对应。**",
      src: "B §2.1.1, p.23"
    },
    {
      link_en: "those 150 are not spare parts — some of them have jobs, and one of them breaks a rule",
      link_cn: "那 150 多种并不是备件——有些身负职务，其中一种还破了一条规矩",
      recall_en: "the L/D distinction is the chirality of chapter 1, now with a named counterexample",
      recall_cn: "L 与 D 的区分就是第 1 章的手性，现在有了一个具名的反例",
      en: "**Some non-protein amino acids belong to the D-configuration series — one of the two mirror forms, and the one proteins never use — D-glutamic acid in bacterial cell walls being the example; and several others are important precursors or intermediates in metabolism, with citrulline and ornithine standing as intermediates in the formation of urea and β-alanine as a precursor for the synthesis of coenzyme A.**",
      cn: "**有些非蛋白质氨基酸属于 D 构型系列——两种镜像形式中的那一种，也就是蛋白质从不使用的那一种——细菌细胞壁中的 D-谷氨酸就是例子；另有几种是代谢中重要的前体或中间产物：瓜氨酸和鸟氨酸是尿素生成过程的中间产物，β-丙氨酸则是辅酶 A 合成的前体。**",
      src: "B §2.1.1, p.23",
      see: [{ id: "1-2", en: "why living matter uses one mirror form at all", cn: "生命物质为什么只用一种镜像形式" },
             { id: "L-18-2-1", en: "citrulline and ornithine inside the urea cycle, step by step", cn: "瓜氨酸与鸟氨酸在尿素循环中的逐步位置" }]
    }
  ],
  terms: [
    { en: "proteinogenic amino acids", cn: "蛋白质氨基酸",
      def_en: "The 20 amino acids that are basic components of proteins and for which a genetic code exists. In all of them the amino group is in the α-position, so the backbone is identical and every difference lies in the side chain.",
      def_cn: "作为蛋白质基本组分、并有遗传密码与之对应的 20 种氨基酸。它们的氨基都在 α 位，因此主链完全相同，一切差异都落在侧链上。" },
    { en: "side chain (R)", cn: "侧链 (R)",
      def_en: "The characteristic group an amino acid carries in addition to –COOH and –NH₂. It is the basis of the four-group classification — nonpolar, polar, negatively charged, positively charged — and the source of everything that distinguishes one amino acid from another.",
      def_cn: "氨基酸除 –COOH 和 –NH₂ 之外所带的特征基团。它是「非极性／极性／带负电／带正电」四组分类的依据，也是一种氨基酸区别于另一种的全部来源。" },
    { en: "proline", cn: "脯氨酸",
      def_en: "The single exception among the 20: it does not carry a free unsubstituted amino group on the α-carbon. Its side chain is aliphatic, so it belongs to the nonpolar group.",
      def_cn: "20 种中唯一的例外：它的 α 碳上没有游离而未取代的氨基。其侧链为脂肪族，故归入非极性组。" },
    { en: "guanidino group", cn: "胍基",
      def_en: "The positively charged side-chain group of arginine, one of the three members of group 4.",
      def_cn: "精氨酸带正电的侧链基团，精氨酸是第 4 组的三名成员之一。" },
    { en: "imidazole", cn: "咪唑",
      def_en: "The weakly basic side-chain residue of histidine — a five-membered ring containing two nitrogen atoms.",
      def_cn: "组氨酸的弱碱性侧链残基——一个含两个氮原子的五元环。" },
    { en: "citrulline and ornithine", cn: "瓜氨酸与鸟氨酸",
      def_en: "Amino acids that never appear in proteins and are instead intermediates in the formation of urea.",
      def_cn: "从不出现在蛋白质中的氨基酸，其身份是尿素生成过程的中间产物。" },
    { en: "β-alanine", cn: "β-丙氨酸",
      def_en: "A non-protein amino acid; the precursor for the synthesis of coenzyme A.",
      def_cn: "一种非蛋白质氨基酸；辅酶 A 合成的前体。" }
  ]
};

/* ======================================================================= 2-1-2 */
window.BIOLITE_SPINE["2-1-2"] = {
  assumed: ["protein", "molecule", "carbon", "hydrogen", "proton", "water",
            "glycine", "threonine", "isoleucine", "tyrosine", "tryptophan",
            "phenylalanine", "cystine", "serine", "glyceraldehyde", "light",
            "solution", "biochemistry"],
  nodeTitle_en: "Physico-chemical properties of amino acids",
  nodeTitle_cn: "氨基酸的物理化学性质",
  title_en: "Charge follows pH, and the pH where charge is zero is the handle every separation grabs",
  title_cn: "电荷跟着 pH 走，而电荷为零的那个 pH，是每种分离方法都要抓的把手",
  steps: [
    {
      en: "An amino acid carries a carboxyl group, –COOH, and an amino group, –NH₂, and both of them can gain or lose a proton. **At low pH the dissociation of the carboxyl group is suppressed and the group stays protonated, so the amino acid as a whole behaves as a cation, a positively charged ion; at high pH the protonated amino group loses its proton, and the amino acid behaves as an anion, a negatively charged ion — which makes the charge of an amino acid a function of the pH it is sitting in rather than a property of the molecule.**",
      cn: "氨基酸带有一个羧基（–COOH）和一个氨基（–NH₂），两者都能得到或失去质子。**在低 pH 下，羧基的解离被压制、保持质子化，于是整个氨基酸表现为 cation（阳离子，带正电的离子）；在高 pH 下，已质子化的氨基失去质子，氨基酸就表现为 anion（阴离子，带负电的离子）——这就使得氨基酸的电荷是它所处 pH 的函数，而不是分子自身的一个属性。**",
      src: "B §2.1.2, p.23",
      beyond: true,
      beyondNote: "p.23 calls the group that deprotonates at high pH a quaternary ammonium group. An α-amino group protonates to –NH₃⁺, a primary ammonium ion; a quaternary ammonium ion carries four carbon substituents and cannot lose a proton at all. The chemistry of the titration curve is as described here."
    },
    {
      link_en: "that behaviour is not asserted — it is measured, on one curve",
      link_cn: "这个行为不是断言出来的，是在一条曲线上量出来的",
      en: "A titration curve is obtained by adding a strong base in small measured portions to a solution of the amino acid and plotting the pH against the amount added. **Glycine's titration curve carries two significant inflexion points corresponding to the pK of the carboxyl group and the pK of the amino group, and it carries a third landmark: the pH at half the total consumption of titration agent, which is called the isoelectric point, pI, and equals (pK₁ + pK₂)/2.**",
      cn: "滴定曲线的做法是：把强碱一小份一小份地加进氨基酸溶液，再以 pH 对加入量作图。**甘氨酸的滴定曲线上有两个重要的拐点，分别对应羧基的 pK 和氨基的 pK；此外还有第三个标志点：滴定试剂总消耗量一半处所对应的 pH，它称为等电点 pI，数值等于 (pK₁ + pK₂)/2。**",
      src: "B §2.1.2, p.23, Obr. 2.1",
      see: [{ id: "L-2-2-1", en: "where a pK comes from, and glycine's two values worked through with numbers", cn: "pK 从哪里来，以及甘氨酸那两个数值的完整计算" },
             { id: "L-2-3-1", en: "the buffering that the flat part of the same curve provides", cn: "同一条曲线平坦段所提供的缓冲作用" }]
    },
    {
      link_en: "and one number per amino acid is what makes the whole of protein purification possible",
      link_cn: "而每种氨基酸一个数字，正是整个蛋白质纯化得以可能的原因",
      en: "There are further ionisable groups in the side chains of amino acids, and their dissociation depends on pH too, so different amino acids come out with different pI values. **At its own pI a molecule carries no net charge and therefore stops moving in an electric field, and because each amino acid has a different pI this difference is what ion-exchange chromatography — separation on a material that binds charged molecules — and electrophoresis — separation by driving charged molecules through a gel in an electric field — actually exploit.**",
      cn: "氨基酸的侧链上还有别的可电离基团，它们的解离同样随 pH 而变，于是不同氨基酸得到的 pI 值各不相同。**在自己的 pI 上，一个分子的净电荷为零，因而在电场中就不再移动；而由于每种氨基酸的 pI 不同，正是这个差别被 ion-exchange chromatography（离子交换色谱，在能结合带电分子的材料上分离）和 electrophoresis（电泳，用电场驱动带电分子穿过凝胶来分离）真正利用起来。**",
      src: "B §2.1.2, p.23",
      see: [{ id: "2-2-6", en: "these separations used on whole proteins", cn: "把这些分离方法用在完整蛋白质上" },
             { id: "L-3-3-1", en: "ion-exchange chromatography and electrophoresis worked through on a real purification", cn: "在一次真实纯化中走完离子交换色谱与电泳" }]
    },
    {
      link_en: "charge was one property of the side chain. Shape is the other, and it starts at a single carbon",
      link_cn: "电荷是侧链的一个性质。形状是另一个，而它起于一个碳原子",
      en: "An asymmetric carbon is a carbon atom carrying four different substituents, which makes the molecule non-superimposable on its mirror image. **Every amino acid whose R is something other than hydrogen contains at least one asymmetric carbon and is therefore optically active: glycine, whose R is a hydrogen atom, contains none, and all the other amino acids common in proteins contain one, with threonine and isoleucine as the exceptions that contain two.**",
      cn: "不对称碳指带有四个互不相同取代基的碳原子，它使分子无法与自身的镜像重叠。**凡是 R 不是氢的氨基酸，都至少含有一个不对称碳，因而具有旋光活性：甘氨酸的 R 就是一个氢原子，所以它一个也没有；蛋白质中常见的其余氨基酸各含一个，例外是苏氨酸和异亮氨酸，它们各含两个。**",
      src: "B §2.1.2, p.24"
    },
    {
      link_en: "an asymmetric carbon allows two mirror forms, and proteins use exactly one of them",
      link_cn: "一个不对称碳允许两种镜像形式，而蛋白质只用其中一种",
      recall_en: "this is the chirality of living matter from chapter 1, now pinned to a specific reference molecule",
      recall_cn: "这就是第 1 章里生命物质的手性，现在被钉在一个具体的参照分子上",
      en: "**Every amino acid found in a protein, glycine excepted, belongs to the L-configuration series, the same series as L-serine derived from L-glyceraldehyde — so a protein is built from one mirror form throughout, and glycine is outside the question because with a hydrogen for a side chain it has no mirror forms to choose between.**",
      cn: "**在蛋白质中发现的每一种氨基酸（甘氨酸除外）都属于 L 构型系列，也就是由 L-甘油醛派生出的 L-丝氨酸所属的那个系列——所以一个蛋白质从头到尾都由同一种镜像形式搭成；而甘氨酸不在这个问题之内，因为它的侧链是一个氢原子，根本没有两种镜像形式可选。**",
      src: "B §2.1.2, p.24",
      see: [{ id: "1-2", en: "chirality as a general feature of living matter, and the question it leaves open", cn: "手性作为生命物质的普遍特征，以及它留下的那个未解问题" }]
    },
    {
      link_en: "last property, and it is the one that gets used every day at the bench",
      link_cn: "最后一个性质，也是实验台上天天要用的那个",
      en: "**None of the 20 amino acids found in proteins absorbs light in the visible region — which is why a solution of pure protein is colourless — while three of them, tyrosine, tryptophan and phenylalanine, absorb significantly in the ultraviolet.**",
      cn: "**在蛋白质中发现的这 20 种氨基酸，没有一种在可见光区吸收光——所以纯蛋白质的溶液是无色的——而其中三种，即酪氨酸、色氨酸和苯丙氨酸，在紫外区有显著吸收。**",
      src: "B §2.1.2, p.24"
    },
    {
      link_en: "and that ultraviolet absorption turns into a measurement",
      link_cn: "而这种紫外吸收可以变成一次测量",
      en: "**Proteins contain tyrosine and tryptophan residues, so measuring how strongly a solution absorbs at 280 nm is a quick and convenient way of determining how much protein it holds; cystine, which is two cysteine side chains joined to each other, absorbs weakly at 240 nm.**",
      cn: "**蛋白质中含有酪氨酸和色氨酸残基，所以测量一份溶液在 280 nm 处的吸光强度，就是判定其中蛋白质含量的一个快速而便利的方法；胱氨酸（也就是两条半胱氨酸侧链彼此相连而成的结构）在 240 nm 处有弱吸收。**",
      src: "B §2.1.2, p.24"
    }
  ],
  terms: [
    { en: "isoelectric point (pI)", cn: "等电点 (pI)",
      def_en: "The pH at half the total consumption of titration agent, where the molecule carries no net charge and stops moving in an electric field. For a simple amino acid, pI = (pK₁ + pK₂)/2. Side-chain ionisable groups make the pI different for different amino acids, which is what separation methods exploit.",
      def_cn: "滴定试剂总消耗量一半处的 pH；在该 pH 上分子净电荷为零，在电场中不再移动。对简单氨基酸而言 pI = (pK₁ + pK₂)/2。侧链上的可电离基团使不同氨基酸的 pI 不同，分离方法利用的正是这一点。" },
    { en: "ion-exchange chromatography", cn: "离子交换色谱",
      def_en: "Separation on a material that binds charged molecules, exploiting the fact that different amino acids and proteins carry different charges at a given pH because their pI values differ.",
      def_cn: "在能结合带电分子的材料上进行的分离；由于不同氨基酸和蛋白质的 pI 不同，在给定 pH 下带电情况也不同，方法利用的就是这一点。" },
    { en: "electrophoresis", cn: "电泳",
      def_en: "Separation by driving charged molecules through a gel in an electric field. At its own pI a molecule has no net charge and does not move at all.",
      def_cn: "用电场驱动带电分子穿过凝胶来分离。在自己的 pI 上，分子净电荷为零，完全不动。" },
    { en: "asymmetric carbon", cn: "不对称碳",
      def_en: "A carbon atom carrying four different substituents, which makes the molecule non-superimposable on its mirror image. Every proteinogenic amino acid except glycine has one; threonine and isoleucine have two.",
      def_cn: "带有四个互不相同取代基的碳原子，使分子无法与其镜像重叠。除甘氨酸外，每种蛋白质氨基酸都有一个；苏氨酸和异亮氨酸有两个。" },
    { en: "L-configuration series", cn: "L 构型系列",
      def_en: "The configuration of every amino acid found in a protein except glycine, referred to L-glyceraldehyde by way of L-serine. A protein is therefore built from one mirror form throughout.",
      def_cn: "蛋白质中除甘氨酸外每一种氨基酸的构型，经 L-丝氨酸参照 L-甘油醛而定。因此一个蛋白质自始至终由同一种镜像形式搭成。" },
    { en: "absorbance at 280 nm", cn: "280 nm 吸光度",
      def_en: "Tyrosine, tryptophan and phenylalanine are the only three of the 20 that absorb in the ultraviolet, and none of the 20 absorbs in the visible. Because proteins contain tyrosine and tryptophan residues, absorbance at 280 nm is a quick and convenient measure of protein content in solution; cystine absorbs weakly at 240 nm.",
      def_cn: "20 种中只有酪氨酸、色氨酸和苯丙氨酸在紫外区吸收，而 20 种在可见区都不吸收。由于蛋白质含有酪氨酸和色氨酸残基，280 nm 吸光度是测定溶液中蛋白质含量的快速便捷方法；胱氨酸在 240 nm 处有弱吸收。" }
  ]
};

/* ======================================================================= 2-1-3 */
window.BIOLITE_SPINE["2-1-3"] = {
  assumed: ["protein", "molecule", "proline", "ninhydrin", "acid", "solution",
            "chromatography", "biochemistry"],
  nodeTitle_en: "Chemical reactions of amino acids",
  nodeTitle_cn: "氨基酸的化学反应",
  title_en: "Two reactions worth keeping: one makes an invisible molecule visible, the other lets you choose the order",
  title_cn: "两个值得记住的反应：一个让看不见的分子现形，另一个让你能指定顺序",
  steps: [
    {
      en: "An amino acid carries two basic functional groups, a carboxyl group –COOH and an amino group –NH₂, plus a side chain designated R that differs from one amino acid to the next. **The chemical reactions of amino acids therefore fall into two families: those of the two basic functional groups, which every amino acid shares, and those of the side chains, which belong to individual amino acids.**",
      cn: "氨基酸带有两个基本官能团——羧基 –COOH 和氨基 –NH₂——外加一条各不相同的侧链，记作 R。**因此氨基酸的化学反应分成两族：一族是那两个基本官能团的反应，为所有氨基酸共有；另一族是侧链的反应，属于各个氨基酸自己。**",
      src: "B §2.1.3, p.24"
    },
    {
      link_en: "take the carboxyl group first",
      link_cn: "先看羧基",
      en: "**A carboxyl group can be converted into an amide, an ester, an acyl halide or an azide, and all four of those conversions are used in peptide synthesis; the –COOH group can also be reduced, which gives an α-amino alcohol.**",
      cn: "**羧基可以被转变成酰胺、酯、酰卤或叠氮化物，这四种转变都用于肽的合成；–COOH 基还可以被还原，产物是 α-氨基醇。**",
      src: "B §2.1.3, p.24"
    },
    {
      link_en: "and the amino group, where one reaction has a purpose worth stating explicitly",
      link_cn: "再看氨基——其中有一个反应，用途值得明说",
      en: "To protect a group means to block it chemically so that it cannot react while a bond is being made somewhere else, and to unblock it afterwards. **The α-amino group can be acylated by acyl halides or anhydrides, and that is what is used to protect amino groups: with both ends of every amino acid left free, joining them gives a polymer in random order, whereas blocking the amino groups you do not want to react lets the chain be built in a chosen sequence.**",
      cn: "「保护」一个基团，指的是先用化学手段把它封住，使它在别处成键期间无法反应，事后再解封。**α-氨基可以被酰卤或酸酐酰化，而这正是用来保护氨基的手段：如果每个氨基酸的两端都放着不管，把它们连起来只会得到顺序随机的聚合物；而把不希望反应的那些氨基封住，就能按指定的顺序把链接出来。**",
      src: "B §2.1.3, p.24",
      beyond: true,
      beyondNote: "p.24 states that acylation is used for protecting amino groups without saying what protection buys. The reason given here — a random polymer against a chosen sequence — is standard synthetic material rather than a sentence on the page."
    },
    {
      link_en: "and the single most characteristic reaction of the amino group is a colour test",
      link_cn: "而氨基最具特征性的那一个反应，是一个显色反应",
      en: "**Heating a solution of an amino acid with ninhydrin gives an intensely coloured product, and the colour reports the state of the amino group: blue-violet for an amino acid with a free –NH₂ group, yellow for an amino acid whose –NH₂ group is substituted, which among the 20 means proline.**",
      cn: "**把氨基酸溶液与茚三酮共热，会生成颜色浓烈的产物，而颜色报告的是氨基的状态：带游离 –NH₂ 基的氨基酸生成蓝紫色产物，–NH₂ 基被取代的氨基酸生成黄色产物，而在这 20 种里，后者指的就是脯氨酸。**",
      src: "B §2.1.3, pp.24–25, Obr. 2.2"
    },
    {
      link_en: "which is what the colour test is actually for",
      link_cn: "而这个显色反应真正的用处就在这里",
      recall_en: "the free unsubstituted α-amino group that all 20 have except proline, now being read off by eye",
      recall_cn: "那 20 种里除脯氨酸外人人都有的游离未取代 α-氨基，现在用肉眼就读得出来",
      en: "**Amino acids are colourless, so a spot of one on a chromatogram cannot be seen until ninhydrin is applied — and the reaction does two jobs at once, making every spot visible and identifying proline by colour alone.**",
      cn: "**氨基酸本身无色，所以层析图上的一个氨基酸斑点，在喷上茚三酮之前根本看不见——而这个反应一次干了两件事：让每个斑点现形，同时单凭颜色就把脯氨酸认出来。**",
      src: "B §2.1.3, pp.24–25",
      beyond: true,
      beyondNote: "The use of the ninhydrin reaction to visualise spots on a chromatogram follows from the reaction as described on pp.24–25 but is not stated there; it is standard practical material."
    }
  ],
  terms: [
    { en: "ninhydrin reaction", cn: "茚三酮反应",
      def_en: "The most characteristic reaction of the α-amino group. Heating an amino acid solution with ninhydrin gives an intensely coloured product: blue-violet with a free –NH₂ group, yellow with a substituted one, which among the 20 means proline.",
      def_cn: "α-氨基最具特征性的反应。把氨基酸溶液与茚三酮共热，生成颜色浓烈的产物：游离 –NH₂ 呈蓝紫色，被取代的 –NH₂ 呈黄色，而在这 20 种里后者就是脯氨酸。" },
    { en: "α-amino alcohol", cn: "α-氨基醇",
      def_en: "The product obtained when the carboxyl group of an amino acid is reduced.",
      def_cn: "氨基酸的羧基被还原后得到的产物。" },
    { en: "protection of amino groups", cn: "氨基保护",
      def_en: "Acylation of the α-amino group with an acyl halide or an anhydride, which blocks it so that a bond can be made elsewhere. It is what makes a peptide of chosen sequence possible instead of a polymer of random order.",
      def_cn: "用酰卤或酸酐酰化 α-氨基，把它封住，好让别处得以成键。正是它使按指定序列合成肽成为可能，而不是得到顺序随机的聚合物。" }
  ]
};

/* ======================================================================= 2-1-4 */
window.BIOLITE_SPINE["2-1-4"] = {
  assumed: ["protein", "molecule", "water", "alanine", "glycine", "biochemistry"],
  nodeTitle_en: "Formation of the peptide bond",
  nodeTitle_cn: "肽键的形成",
  title_en: "One bond type, an unbranched chain, and two ends that are chemically different",
  title_cn: "一种键、一条不分支的链，以及化学上并不相同的两个末端",
  steps: [
    {
      en: "An amino acid carries a carboxyl group –COOH and an amino group –NH₂. **In proteins the carboxyl group of one amino acid is joined to the α-amino group of the next by a peptide bond, which is an amide bond, and forming a dipeptide from two amino acids is accompanied by the loss of one molecule of water.**",
      cn: "氨基酸带有一个羧基 –COOH 和一个氨基 –NH₂。**在蛋白质里，一个氨基酸的羧基通过肽键与下一个氨基酸的 α-氨基相连，肽键就是一个酰胺键；而由两个氨基酸生成二肽的过程，伴随着失去一分子水。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "repeat that bond many times and one property of the result follows immediately",
      link_cn: "把这个键重复很多次，结果的一个性质立刻就跟着出来了",
      en: "**A polypeptide chain is formed by many amino acid residues joined by peptide bonds, and it is unbranched — each residue is attached to at most two neighbours, so there is exactly one path from one end of the chain to the other and no side chains of chain to keep track of.**",
      cn: "**多肽链由许多通过肽键相连的氨基酸残基构成，而且它不分支——每个残基最多接两个邻居，所以从链的一端到另一端只有唯一一条路径，不存在需要另行追踪的分叉。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "and the chain has ends, for a reason that comes straight from the building unit",
      link_cn: "而链是有末端的，原因直接来自建筑单元本身",
      en: "**Because each building unit of a peptide chain — an amino acid residue — has two functional groups, –NH₂ and –COOH, the chain also has two ends, and those two ends are chemically different from each other.**",
      cn: "**由于肽链的每个建筑单元（也就是一个氨基酸残基）都有两个官能团 –NH₂ 和 –COOH，链也就有两个末端，而这两个末端在化学上彼此不同。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "two chemically different ends mean the sequence has a direction, and a convention fixes it",
      link_cn: "两个化学上不同的末端意味着序列有方向，而一条惯例把它定死",
      recall_en: "the two ends from the step above, now used to fix which way a sequence is read",
      recall_cn: "上一步那两个末端，现在被用来固定序列的阅读方向",
      en: "**By convention the sequence of amino acids in a peptide chain is written beginning with the amino acid that has a free amino group, called the N-terminal amino acid, and ending with the amino acid that has a free carboxyl group, the C-terminal one — so a sequence carries a direction, and Ala-Gly is a different molecule from Gly-Ala.**",
      cn: "**按惯例，肽链中氨基酸的序列从带游离氨基的那个氨基酸写起，它称为 N 端氨基酸，写到带游离羧基的那个为止，后者称为 C 端氨基酸——所以序列是带方向的，Ala-Gly 和 Gly-Ala 是两个不同的分子。**",
      src: "B §2.1.4, p.26, Obr. 2.4",
      see: [{ id: "2-2-1", en: "the sequence itself, as the first level of protein structure", cn: "序列本身，作为蛋白质结构的第一个层次" }]
    },
    {
      link_en: "looking along the finished chain, it separates into two parts of quite different character",
      link_cn: "沿着接好的链看过去，它分成性质迥异的两部分",
      recall_en: "the same split as in the free amino acid: identical backbone, everything distinctive in R",
      recall_cn: "和游离氨基酸里是同一种划分：主链完全相同，独特的东西全在 R 上",
      en: "**A polypeptide chain consists of a regularly repeating part, the main chain, and a variable part made up of the various side chains R of the amino acids — so the main chain is the same in every protein there is, and the sequence of side chains hanging off it is what makes one protein different from another.**",
      cn: "**多肽链由一个规则重复的部分（主链）和一个可变部分（各氨基酸的种种侧链 R）共同构成——所以主链在世上每一个蛋白质里都一样，而挂在它上面的那串侧链顺序，才是一个蛋白质区别于另一个的地方。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "finally, the names given to such a chain according to how long it is",
      link_cn: "最后，按长度给这样一条链起的名字",
      en: "**Two amino acids form a dipeptide, three a tripeptide, and so on; a chain of not more than 10 amino acids is an oligopeptide, one with more than 10 is a polypeptide, and a peptide chain of more than 100 amino acid residues is designated a protein — these are naming conventions about length, and nothing in the chemistry of the bond changes at 10 or at 100.**",
      cn: "**两个氨基酸构成二肽，三个构成三肽，依此类推；不超过 10 个氨基酸的链称为寡肽，多于 10 个的称为多肽，而由 100 个以上氨基酸残基组成的肽链被称为蛋白质——这些都是按长度定下的命名惯例，在 10 或 100 这两处，键的化学没有发生任何变化。**",
      src: "B §2.1.4, p.26"
    }
  ],
  terms: [
    { en: "peptide bond", cn: "肽键",
      def_en: "The amide bond joining the carboxyl group of one amino acid to the α-amino group of the next, formed with the loss of a molecule of water. Repeating it gives an unbranched chain with two chemically different ends.",
      def_cn: "把一个氨基酸的羧基与下一个氨基酸的 α-氨基相连的酰胺键，形成时脱去一分子水。反复重复它，得到一条两端在化学上不同的、不分支的链。" },
    { en: "N-terminal amino acid", cn: "N 端氨基酸",
      def_en: "The residue with a free amino group. By convention a sequence is written starting here, which is what gives a sequence its direction.",
      def_cn: "带游离氨基的那个残基。按惯例序列由此写起，序列的方向就是这样来的。" },
    { en: "C-terminal amino acid", cn: "C 端氨基酸",
      def_en: "The residue with a free carboxyl group; the sequence ends here.",
      def_cn: "带游离羧基的那个残基；序列在此结束。" },
    { en: "oligopeptide / polypeptide / protein", cn: "寡肽／多肽／蛋白质",
      def_en: "Naming conventions by length: not more than 10 amino acids is an oligopeptide, more than 10 a polypeptide, more than 100 residues a protein. The chemistry of the peptide bond does not change at either boundary.",
      def_cn: "按长度定的命名惯例：不超过 10 个氨基酸为寡肽，多于 10 个为多肽，超过 100 个残基为蛋白质。肽键的化学在这两个界线上都没有变化。" },
    { en: "main chain and side chains", cn: "主链与侧链",
      def_en: "A polypeptide chain has a regularly repeating part, the main chain, identical in every protein, and a variable part made of the side chains R. The sequence of side chains is what distinguishes one protein from another.",
      def_cn: "多肽链有一个规则重复的部分（主链），在每个蛋白质里都相同；还有一个由侧链 R 组成的可变部分。使一个蛋白质区别于另一个的，正是这串侧链的顺序。" }
  ]
};

/* ======================================================================= 2-2-1 */
window.BIOLITE_SPINE["2-2-1"] = {
  assumed: ["protein", "DNA", "molecule", "haemoglobin", "valine",
             "glutamic acid", "biochemistry"],
  nodeTitle_en: "Amino acid sequence (primary structure)",
  nodeTitle_cn: "氨基酸序列（一级结构）",
  title_en: "The order of the residues is the bridge from DNA to a working shape",
  title_cn: "残基的顺序，是从 DNA 通往一个能干活的形状的那座桥",
  steps: [
    {
      en: "Hydrolysis breaks a peptide chain into the individual amino acid residues that formed it, and doing that tells you which kinds are present and how many of each. **Knowing the kind and number of residues does not characterise a peptide chain, because the order matters too — and the order of the amino acids covalently bound in a peptide chain, the amino acid sequence, is designated the primary structure.**",
      cn: "水解会把一条肽链拆成构成它的一个个氨基酸残基，这样做能告诉你其中有哪些种类、每种各有多少。**光知道残基的种类和数目并不足以表征一条肽链，因为顺序同样要紧——而肽链中共价结合的那些氨基酸的顺序，也就是氨基酸序列，被称为一级结构。**",
      src: "B §2.2.1, p.26"
    },
    {
      link_en: "four reasons make that order worth the work of determining it. The first is the one the other three rest on",
      link_cn: "有四个理由使得把这个顺序测出来是值得的。第一个是其余三个所依托的那一个",
      en: "**Analysing the relation between the amino acid sequence and the three-dimensional structure of a protein reveals the rules that govern how a peptide chain arranges itself in space, so the amino acid sequence is the connecting link between the genetic information contained in DNA and the three-dimensional structure of the protein, which is what conditions its biological function.**",
      cn: "**分析氨基酸序列与蛋白质三维结构之间的关系，可以揭示支配肽链在空间中如何排布的规则；因此氨基酸序列就是 DNA 中所含的遗传信息与蛋白质三维结构之间的连接环节，而正是这个三维结构决定了它的生物学功能。**",
      src: "B §2.2.1, pp.26–27",
      see: [{ id: "2-2-2", en: "the physical constraints that decide how the chain can arrange itself", cn: "决定肽链能怎样排布的那些物理约束" }]
    },
    {
      link_en: "second reason, one level down from structure",
      link_cn: "第二个理由，比结构再低一层",
      en: "**Knowledge of the amino acid sequence belongs among the fundamental data needed for solving the mechanism of action of a protein — for example the catalytic mechanism of an enzyme, which is a protein that speeds up a specific reaction.**",
      cn: "**了解氨基酸序列，属于阐明一个蛋白质作用机制所需的基础数据之一——例如酶的催化机制，酶就是一种能加速某个特定反应的蛋白质。**",
      src: "B §2.2.1, p.27"
    },
    {
      link_en: "third reason, and it shows how little has to change for the whole thing to fail",
      link_cn: "第三个理由，它说明只要改动多小的一点，整件事就会失败",
      en: "Molecular pathology is the field in which a change of amino acid sequence is linked to abnormal function of a protein and to serious disease. **Sickle cell anaemia is the worked case: the glutamic acid at position 6 of the β-chain of haemoglobin, the oxygen-carrying protein of red blood cells, is replaced by valine — one residue out of many hundreds, and the protein behaves differently.**",
      cn: "分子病理学这个领域，把氨基酸序列的改变与蛋白质功能异常及严重疾病联系起来。**镰状细胞贫血就是具体的例子：血红蛋白（红细胞中负责携氧的蛋白质）β 链第 6 位的谷氨酸被缬氨酸取代——几百个残基里换了一个，蛋白质的行为就变了。**",
      src: "B §2.2.1, p.27",
      see: [{ id: "L-5-1-1", en: "haemoglobin's oxygen binding, and what the position-6 substitution actually does to it", cn: "血红蛋白的氧结合，以及第 6 位的替换究竟对它做了什么" }]
    },
    {
      link_en: "fourth reason, and it reads the sequence as a record of the past",
      link_cn: "第四个理由，它把序列当作一份过去的记录来读",
      en: "**Knowledge of the amino acid sequence of a protein reveals much of its evolutionary history, because proteins are similar in amino acid sequence only if they have a common ancestor — which makes sequence similarity evidence of shared descent, and says nothing on its own about similarity of function.**",
      cn: "**了解一个蛋白质的氨基酸序列，可以揭示它演化史的许多内容，因为只有在拥有共同祖先的情况下，蛋白质的氨基酸序列才会彼此相似——所以序列相似是共同来源的证据，它本身对功能是否相似只字未提。**",
      src: "B §2.2.1, p.27",
      see: [{ id: "L-3-4-1", en: "how a sequence is actually determined, by fragmentation and mass spectrometry", cn: "序列究竟怎么测出来：碎片化与质谱" }]
    }
  ],
  terms: [
    { en: "primary structure", cn: "一级结构",
      def_en: "The order of the amino acids covalently bound in a peptide chain — the amino acid sequence. It is the connecting link between the genetic information in DNA and the three-dimensional structure that conditions biological function. As defined in §2.2.3, it also takes in the placement of disulfide bridges.",
      def_cn: "肽链中共价结合的氨基酸的顺序，即氨基酸序列。它是 DNA 中的遗传信息与决定生物学功能的三维结构之间的连接环节。按 §2.2.3 的定义，它还包括二硫桥的位置。" },
    { en: "molecular pathology", cn: "分子病理学",
      def_en: "The field linking a change of amino acid sequence to abnormal protein function and serious disease.",
      def_cn: "把氨基酸序列的改变与蛋白质功能异常及严重疾病联系起来的领域。" },
    { en: "sickle cell anaemia", cn: "镰状细胞贫血",
      def_en: "Caused by the replacement of the glutamic acid at position 6 of the haemoglobin β-chain by valine — a single-residue change in a protein of several hundred residues.",
      def_cn: "由血红蛋白 β 链第 6 位的谷氨酸被缬氨酸取代所致——在一个数百残基的蛋白质里只改了一个残基。" }
  ]
};

/* ======================================================================= 2-2-2
   SOURCING GAP, recorded here rather than in the prose: of pp.27–33 only p.27
   (stereochemistry of the peptide bond) and p.33 (the hydrophobic effect) are in the
   extracted page set. pp.28–32, which carry the α-helix, the β-structure, the
   collagen helix and the remaining stabilising interactions, were not extracted, so
   this chain covers the two verified blocks and does not attempt the rest. The names
   of the three periodic structures are picked up in 2-2-3, where p.33 lists them. */
window.BIOLITE_SPINE["2-2-2"] = {
  assumed: ["protein", "molecule", "atom", "water", "carbon", "nitrogen",
            "oxygen", "hydrogen", "proline", "entropy", "biochemistry"],
  nodeTitle_en: "Principles of conformation",
  nodeTitle_cn: "构象原理",
  title_en: "A backbone of rigid plates, and a folding driven by water rather than by the chain",
  title_cn: "由硬板串成的主链，以及一场由水而非由链推动的折叠",
  steps: [
    {
      en: "Conformation is the spatial arrangement of the atoms of a peptide chain. **A randomly arranged or extended peptide chain mostly shows no biological activity at all, so the function of a protein is entirely dependent on its conformation — the sequence buys nothing until the chain has taken up one very precisely defined shape.**",
      cn: "构象指的是一条肽链各原子的空间排布。**随机排布的或被拉直的肽链通常完全不表现出生物活性，所以蛋白质的功能完全取决于它的构象——在链取得那个被极精确规定的形状之前，序列什么也换不来。**",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "the shape a chain can take is limited by one measurement made on one bond",
      link_cn: "一条链能取什么形状，受制于在一个键上做的一次测量",
      en: "**The C–N bond inside a peptide bond is 1.32 Å long (0.132 nm), and that value lies between the length of a single C–N bond, 1.49 Å, and that of a double C=N bond, 1.27 Å.**",
      cn: "**肽键内部的 C–N 键长为 1.32 Å（0.132 nm），而这个数值落在单键 C–N（1.49 Å）与双键 C=N（1.27 Å）的键长之间。**",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "a length between the two means the bond is between the two",
      link_cn: "键长介于两者之间，意味着这个键本身也介于两者之间",
      en: "The carbonyl group next to the nitrogen has π-electrons, and the nitrogen has a lone electron pair; the two are partially delocalised over the C–N bond. **The C–N bond of a peptide bond therefore has partly the character of a double bond, and a double bond cannot rotate — so this bond cannot rotate freely either.**",
      cn: "氮旁边的羰基带有 π 电子，而氮自身有一对孤对电子；两者在 C–N 键上部分离域。**因此肽键的 C–N 键部分具有双键的性质，而双键是不能旋转的——所以这个键也不能自由旋转。**",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "a bond that cannot rotate has two fixed arrangements instead of a continuum, and they are not equally common",
      link_cn: "不能旋转的键，给出的是两种固定排布而不是连续的取值，而且两者出现的机会并不相等",
      en: "Cis and trans are the two arrangements available when rotation is blocked: cis puts the two neighbouring α-carbons on the same side of the bond, trans on opposite sides. **In globular proteins the trans isomer unambiguously predominates, and the cis form occurs practically only in the neighbourhood of a proline residue; the six atoms around a trans peptide bond lie in one flat unit, called the amide plane.**",
      cn: "当旋转被封住时，可选的排布只有顺式和反式两种：顺式把相邻的两个 α 碳放在键的同一侧，反式则放在两侧。**在球状蛋白中，反式异构体明确占优势，而顺式形式实际上只出现在脯氨酸残基的近旁；围绕一个反式肽键的六个原子处在同一个平面单元上，这个单元称为酰胺平面。**",
      src: "B §2.2.2, p.27, Obr. 2.5"
    },
    {
      link_en: "and that plane is what makes a protein foldable at all",
      link_cn: "而正是这个平面，才让蛋白质有可能折叠起来",
      recall_en: "the consequence of the frozen C–N bond two steps up, now counted as available shapes",
      recall_cn: "上面两步里那个被冻住的 C–N 键的后果，现在换算成「可选形状有多少」",
      en: "**A backbone built of amide planes is a row of flat rigid units hinged only at the α-carbons, rather than a freely bending string — so the number of shapes open to a chain is far smaller than its length suggests, which is what makes finding one correct fold a solvable problem.**",
      cn: "**由酰胺平面串起来的主链，是一排只在 α 碳处有铰链的、平的刚性单元，而不是一根可以随意弯折的绳子——所以一条链可选的形状数目远远小于它的长度所暗示的数目，正因如此，找到唯一一个正确折叠才成为一个解得开的问题。**",
      src: "B §2.2.2, p.27",
      beyond: true,
      beyondNote: "p.27 gives the bond length, the partial double-bond character, the cis/trans consequence and the amide plane. Counting the shapes this leaves open, and the conclusion that folding is thereby made tractable, is standard course material rather than a sentence on that page."
    },
    {
      link_en: "the plates settle into one arrangement rather than another, and the force that decides it comes from outside the molecule",
      link_cn: "这些板块最终落到某一种排布而不是另一种，而决定这件事的力来自分子之外",
      en: "A hydrophobic particle is one that water is not attracted to, and water molecules around such a particle take up a regular, ordered arrangement. **The hydrophobic effect is an intramolecular interaction whose essence is an increase of entropy — the randomness of the system — caused by disrupting that regular arrangement of water molecules around hydrophobic particles, and it is significant both for forming protein structure and for stabilising it once formed.**",
      cn: "疏水颗粒指的是水不被它吸引的颗粒，而这类颗粒周围的水分子会排成规则有序的样子。**疏水效应是一种分子内相互作用，其本质是熵（也就是系统的随机程度）的增加，来源正是疏水颗粒周围那种规则的水分子排列被破坏；它对蛋白质结构的形成和形成之后的稳定都很重要。**",
      src: "B §2.2.2, p.33"
    },
    {
      link_en: "and it shows itself in two visible ways",
      link_cn: "它以两种看得见的方式表现出来",
      recall_en: "the two consequences of the entropy gain described in the step above",
      recall_cn: "上一步所说的那份熵增，带来的两个后果",
      en: "**The hydrophobic effect manifests itself in two ways: the protein molecule tends to form structures with the smallest possible surface, and the nonpolar chains tend to interact with each other and create a nonpolar core of the molecule — so the folded protein comes out with its water-avoiding side chains buried inside and as little of itself exposed to water as it can manage.**",
      cn: "**疏水效应表现为两件事：蛋白质分子倾向于形成表面积尽可能小的结构；非极性链倾向于彼此相互作用，形成分子的非极性核心——于是折叠好的蛋白质，把躲水的侧链埋在里面，并且把暴露于水的部分压到它所能做到的最小。**",
      src: "B §2.2.2, p.33"
    }
  ],
  terms: [
    { en: "conformation", cn: "构象",
      def_en: "The spatial arrangement of the atoms of a peptide chain. A randomly arranged or extended chain mostly shows no biological activity, so protein function is entirely dependent on conformation.",
      def_cn: "肽链各原子的空间排布。随机排布或被拉直的链通常没有生物活性，所以蛋白质的功能完全取决于构象。" },
    { en: "amide plane", cn: "酰胺平面",
      def_en: "The flat unit formed around a peptide bond, a consequence of the partial double-bond character of its C–N bond. A backbone made of these planes is hinged only at the α-carbons.",
      def_cn: "围绕一个肽键形成的平面单元，源于其 C–N 键的部分双键性质。由这些平面构成的主链只在 α 碳处有铰链。" },
    { en: "cis-trans isomerism", cn: "顺反异构",
      def_en: "Arises because the peptide C–N bond cannot rotate freely. In globular proteins trans unambiguously predominates; the cis form occurs practically only next to a proline residue.",
      def_cn: "因肽键的 C–N 键不能自由旋转而产生。球状蛋白中反式明确占优；顺式实际上只出现在脯氨酸残基旁边。" },
    { en: "hydrophobic effect", cn: "疏水效应",
      def_en: "An intramolecular interaction whose essence is an increase of entropy caused by disrupting the ordered arrangement of water molecules around hydrophobic particles. It drives both the formation and the stabilisation of protein structure.",
      def_cn: "一种分子内相互作用，其本质是疏水颗粒周围有序水分子排列被破坏所带来的熵增。它既推动蛋白质结构的形成，也维持其稳定。" },
    { en: "nonpolar core", cn: "非极性核心",
      def_en: "The interior formed when nonpolar side chains interact with one another and are buried away from water. It is one of the two manifestations of the hydrophobic effect; the other is a tendency towards the smallest possible surface.",
      def_cn: "非极性侧链彼此作用、被埋到远离水的位置所形成的内部。它是疏水效应两种表现之一，另一种是趋向尽可能小的表面积。" }
  ]
};

/* ======================================================================= 2-2-3 */
window.BIOLITE_SPINE["2-2-3"] = {
  assumed: ["protein", "molecule", "cysteine", "antibody", "antigen",
            "collagen", "biochemistry"],
  nodeTitle_en: "Conformation of proteins — the levels of structure",
  nodeTitle_cn: "蛋白质的构象——结构层次",
  title_en: "Four levels plus two, and the line between the first two is drawn by distance along the sequence",
  title_cn: "四个层次再加两个，而前两者之间的界线是按序列上的距离划的",
  steps: [
    {
      en: "**Describing the three-dimensional arrangement of a protein is done at four levels — primary, secondary, tertiary and quaternary — and later work on conformation, function and evolution proved the importance of two further levels of organisation, supersecondary structure and domains.**",
      cn: "**描述一个蛋白质的三维排布要分四个层次——一级、二级、三级、四级——而后来关于构象、功能与演化的研究证明，另有两个组织层次同样重要：超二级结构与结构域。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "the first level is the one already established, with one addition",
      link_cn: "第一个层次是前面已经立住的那个，外加一项",
      en: "A disulfide bridge is a covalent link joining two cysteine side chains to each other, which can tie together two points of a chain that are far apart in the sequence. **Primary structure is given by the sequence of amino acids in the peptide chain and by the placement of the disulfide bridges — so covalent connections of both kinds are counted at this first level.**",
      cn: "二硫桥是把两条半胱氨酸侧链共价连在一起的键，它能把序列上相距很远的两个位点系到一处。**一级结构由肽链中氨基酸的序列以及二硫桥的位置共同给出——所以这两类共价连接都算在第一个层次里。**",
      src: "B §2.2.3, p.33",
      beyond: true,
      beyondNote: "p.33 names the disulfide bridge without defining it. The one-clause description — a covalent link between two cysteine side chains — is standard and is added so the sentence stands alone. Note also that counting the placement of disulfide bridges as part of the primary structure is this book's convention; other treatments put it elsewhere."
    },
    {
      link_en: "the second level, and the definition turns on one word",
      link_cn: "第二个层次，而这个定义的要害在一个词上",
      en: "**Secondary structure relates to the spatial arrangement of amino acid residues that are close to each other in the linear sequence; some of those arrangements repeat regularly and are the basis of periodic structures, and the α-helix, the β-structure and the collagen helix are the named elements of secondary structure.**",
      cn: "**二级结构关乎在线性序列中彼此靠近的氨基酸残基的空间排布；其中有些排布规则地重复，构成周期性结构的基础，而 α-螺旋、β-结构和胶原螺旋就是二级结构中被命名的那几个要素。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "and the third level differs from the second in exactly that one word",
      link_cn: "第三个层次与第二个的差别，正落在那同一个词上",
      recall_en: "the mirror image of the previous step: close together in the sequence there, far apart here",
      recall_cn: "上一步的镜像：那里是序列上靠得近，这里是序列上离得远",
      en: "**Tertiary structure relates to the spatial arrangement of amino acid residues located far from each other in the linear sequence, so the line between secondary and tertiary is drawn by distance along the sequence and not by the kind of interaction involved — and in some cases that boundary is hard to define.**",
      cn: "**三级结构关乎在线性序列中彼此相距较远的氨基酸残基的空间排布；因此二级与三级之间的界线是按序列上的距离划的，而不是按相互作用的类型划的——而且在某些情况下这条界线很难界定。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "the fourth level only exists for some proteins",
      link_cn: "第四个层次只对一部分蛋白质存在",
      en: "**Quaternary structure is spoken of in the case of proteins consisting of more than one peptide chain, each such chain being called a subunit; it relates to the spatial arrangement of the subunits and to the character of their connection, or contact, and a protein may be built of subunits that are all the same or of subunits that differ.**",
      cn: "**四级结构只在蛋白质由一条以上肽链构成时才谈得上，其中每一条这样的链称为一个亚基；它关乎各亚基的空间排布，以及它们彼此连接（接触）的性质；一个蛋白质可以由完全相同的亚基构成，也可以由不同的亚基构成。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "and the places where subunits touch are not merely structural",
      link_cn: "而亚基彼此接触的地方，并不只是结构上的事",
      en: "**The sites of connection or contact between subunits are often important for the biological activity of the protein: in an antibody — a protein that binds one specific foreign molecule, its antigen — the binding site for the antigen is formed by parts of peptide chains belonging to both types of subunit, the H and the L chains, so neither subunit can bind anything on its own.**",
      cn: "**亚基之间的连接或接触部位，往往对蛋白质的生物学活性至关重要：在抗体（一种能结合某个特定外来分子即其抗原的蛋白质）中，抗原的结合位点由分属两类亚基的肽链片段共同构成，也就是 H 链和 L 链，所以单独一个亚基什么也结合不了。**",
      src: "B §2.2.3, p.34",
      see: [{ id: "L-5-2-1", en: "the antibody binding site in full, and how a protein is made to fit one ligand", cn: "抗体结合位点的完整机制，以及蛋白质如何被造得与某一个配体互补" }]
    },
    {
      link_en: "now the two extra levels, and the first one sits between secondary and tertiary",
      link_cn: "现在轮到那两个额外的层次，第一个坐在二级与三级之间",
      en: "**Supersecondary structure relates to clusters of individual sections of secondary structure: in many proteins two sections of β-structure separated by a section of chain in α-helical arrangement were found, and this motif is called βαβ; other recurring clusters are the αα unit and the β-meander.**",
      cn: "**超二级结构关乎二级结构各个片段所组成的「簇」：在许多蛋白质中都发现了这样一种组合——两段 β-结构，中间隔着一段呈 α-螺旋排布的肽链——这个基序称为 βαβ；另外反复出现的簇还有 αα 单元和 β-曲折。**",
      src: "B §2.2.3, p.34, Obr. 2.15"
    },
    {
      link_en: "and the second extra level sits above tertiary",
      link_cn: "第二个额外层次则坐在三级之上",
      en: "**In some peptide chains part of the chain is arranged into two or more compact globular regions connected by a flexible segment of chain; those compact regions are called domains, and a domain runs from 100 to 400 amino acid residues — which means one chain can hold several separately folded units joined by a hinge rather than one single body.**",
      cn: "**在某些肽链中，一部分链排布成两个或更多紧密的球状区域，彼此由链的柔性片段相连；这些紧密区域称为结构域，一个结构域的大小在 100 到 400 个氨基酸残基之间——这意味着一条链可以是若干个各自折叠、由铰链连起来的单元，而不是一个整体。**",
      src: "B §2.2.3, p.34"
    }
  ],
  terms: [
    { en: "secondary structure", cn: "二级结构",
      def_en: "The spatial arrangement of amino acid residues that are close to each other in the linear sequence. Some such arrangements repeat regularly: the α-helix, the β-structure and the collagen helix.",
      def_cn: "线性序列中彼此靠近的氨基酸残基的空间排布。其中一些规则重复：α-螺旋、β-结构、胶原螺旋。" },
    { en: "tertiary structure", cn: "三级结构",
      def_en: "The spatial arrangement of amino acid residues located far from each other in the linear sequence. What separates it from secondary structure is distance along the sequence, not the kind of interaction; in some cases the boundary is hard to define.",
      def_cn: "线性序列中彼此相距较远的氨基酸残基的空间排布。把它与二级结构分开的是序列上的距离，而不是相互作用的类型；某些情况下这条界线难以界定。" },
    { en: "quaternary structure", cn: "四级结构",
      def_en: "The spatial arrangement of the subunits of a protein made of more than one peptide chain, and the character of their contact. The subunits may be identical or different, and the contact sites are often important for biological activity.",
      def_cn: "由一条以上肽链构成的蛋白质中，各亚基的空间排布及其接触的性质。亚基可以相同也可以不同，而接触部位往往对生物学活性重要。" },
    { en: "supersecondary structure", cn: "超二级结构",
      def_en: "Clusters of individual sections of secondary structure. The βαβ motif — two β-sections separated by an α-helical section — is the commonest cited; the αα unit and the β-meander are others.",
      def_cn: "二级结构若干片段所组成的簇。最常被举出的是 βαβ 基序，即两段 β-结构中间隔一段 α-螺旋；此外还有 αα 单元和 β-曲折。" },
    { en: "domain", cn: "结构域",
      def_en: "A compact globular region of a peptide chain, connected to the others by a flexible segment. Domains run from 100 to 400 amino acid residues, so one chain can carry several separately folded units on a hinge.",
      def_cn: "肽链中一个紧密的球状区域，与其他区域之间以柔性片段相连。结构域的大小为 100 到 400 个氨基酸残基，因此一条链可以带着若干个各自折叠、由铰链相连的单元。" }
  ]
};

/* ======================================================================= 2-2-4 */
window.BIOLITE_SPINE["2-2-4"] = {
  assumed: ["protein", "molecule", "cell", "hair", "skin", "feather", "silk",
            "blood", "glycine", "alanine", "serine", "collagen", "myoglobin",
            "haemoglobin", "chymotrypsin", "water", "atom", "biochemistry"],
  nodeTitle_en: "Types of construction of the protein molecule",
  nodeTitle_cn: "蛋白质分子的构造类型",
  title_en: "Extended chains carry load, folded globules do the chemistry, and one can turn into the other",
  title_cn: "伸展的链承担负荷，折叠的球做化学，而两者可以互相转化",
  steps: [
    {
      en: "**Sorted by the overall arrangement of their peptide chains, proteins fall into two main types: fibrillar, in which the chains are more or less extended and join to one another by cross-links into macroscopic fibres, and globular, in which the basic chain is folded into a ball.**",
      cn: "**按肽链的总体排布来分，蛋白质分成两大类：纤维状蛋白，其肽链或多或少被拉伸，彼此靠横向交联连成宏观纤维；以及球状蛋白，其基本肽链折叠成一个球。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "each type has a job, and the fibrillar one is mechanical",
      link_cn: "两类各有分工，纤维状的那类干的是力学活",
      en: "The cytoskeleton is the internal structural framework of a cell. **Fibrillar proteins matter above all for the formation of biological structures and for their mechanical function: they form the basis of the surface, connective and supporting tissues of animals, and of the cytoskeleton — wherever something has to hold a shape or take a pull, an extended cross-linked chain is what does it.**",
      cn: "细胞骨架是细胞内部的结构支架。**纤维状蛋白最重要的意义在于构筑生物结构、以及承担它们的机械功能：它们构成动物体表组织、结缔组织与支持组织的基础，也构成细胞骨架的基础——凡是需要保持形状或承受拉力的地方，靠的就是这种被拉伸、被交联的链。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "and the globular type does everything else",
      link_cn: "而球状的那一类，别的活全归它",
      recall_en: "the opposite arrangement to the fibrillar case above: folded up rather than extended",
      recall_cn: "与上面纤维状的排布相反：这里是折起来，而不是拉开",
      en: "**Inside a globule, sections of α- or β-type alternate with sections that have no regular structure at all, called random coil, and proteins of this type carry out most biological functions there are.**",
      cn: "**在一个球体内部，α 型或 β 型的片段与完全没有规则结构的片段（称为无规卷曲）交替出现；而世上大多数生物学功能，都是由这一类蛋白质来执行的。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "the two types are not separate kingdoms — one converts into the other, and you have watched it happen",
      link_cn: "这两类并不是彼此隔绝的王国——其中一类会转变成另一类，而且你亲眼见过",
      en: "**A globular protein can be converted into a fibrillar one forming a mechanically firm structure, and blood clotting is that conversion: the globular, soluble fibrinogen of blood turns into fibrin, which is fibrillar.**",
      cn: "**球状蛋白可以转变成纤维状蛋白，从而形成机械上坚固的结构，而血液凝固就是这个转变：血中那种可溶的球状纤维蛋白原，变成了纤维状的纤维蛋白。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "now three fibrillar proteins by name. The first is on the outside of every vertebrate",
      link_cn: "现在按名字点三个纤维状蛋白。第一个长在每一种脊椎动物的外面",
      en: "**Keratin is the basic protein of the body surface of vertebrates — skin, hair, fur, feathers and scales — and the basic secondary structure of mammalian keratin is the α-helix, with two pairs of parallel-running helices twisted together into a left-handed four-stranded cable called the protofibril.**",
      cn: "**角蛋白是脊椎动物体表的基本蛋白质——皮肤、毛发、兽毛、羽毛、鳞片——而哺乳动物角蛋白的基本二级结构是 α-螺旋：两对平行走向的螺旋彼此缠绕，形成一根左手四股的「缆索」，称为原原纤维。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "and the cable can be taken apart in a bathroom",
      link_cn: "而这根缆索，在浴室里就能拆开",
      en: "The α-helix of keratin is held in shape by hydrogen bonds, which are weak attractions between a hydrogen atom already bonded to one atom and a second atom nearby. **Wetting and heating a hair releases those hydrogen bonds, so the hair can be stretched to double its length, and in that stretched form the peptide chains can form a β-parallel structure and fix it.**",
      cn: "角蛋白的 α-螺旋靠氢键维持形状，氢键是「一个已经与某原子成键的氢原子」与「附近另一个原子」之间的弱吸引。**把一根头发润湿并加热，会解开这些氢键，于是头发可以被拉长到原来的两倍；而在这种拉伸状态下，肽链可以形成 β-平行结构并把它固定下来。**",
      src: "B §2.2.4, p.34",
      beyond: true,
      beyondNote: "p.34 says that wetting and heating releases the hydrogen bonds of the α-helix. What a hydrogen bond is is not stated there; the one-clause description is standard and is added so the sentence stands alone."
    },
    {
      link_en: "the second fibrillar protein solves the same problem with different amino acids",
      link_cn: "第二个纤维状蛋白用不同的氨基酸解决同一个问题",
      en: "**Fibroin is the protein of silk fibre and is similar to keratin, and its high content of residues of small amino acids — glycine, alanine and serine — is what allows the regular spatial arrangement of planar formations having β-antiparallel secondary structure.** Collagen is the third representative of the fibrillar proteins.",
      cn: "**丝心蛋白是蚕丝纤维的蛋白质，与角蛋白相似；它含有大量小分子氨基酸残基——甘氨酸、丙氨酸、丝氨酸——正是这一点使得具有 β-反平行二级结构的那些平面构造能够规则地在空间中排布。**胶原是纤维状蛋白的第三个代表。",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "back to globular proteins, and the first thing to say about them is how they behave in a test tube",
      link_cn: "回到球状蛋白，关于它们首先要说的是它们在试管里的行为",
      recall_en: "the opposite of the fibrillar case, where many molecules line up in parallel into one fibre",
      recall_cn: "与纤维状的情形相反：那里是许多分子平行排齐、合成一根纤维",
      en: "An ionic interaction is the attraction between two opposite electric charges, and van der Waals forces are the weak attractions that arise between any two atoms brought close together. **Fibrillar proteins are aggregates of many parallel-oriented molecules, whereas globular proteins exist in dilute solution as individual, mutually independent molecules whose sections are held in position by disulfide bonds, ionic interactions, hydrogen bonds, van der Waals forces and the hydrophobic effect.**",
      cn: "离子相互作用是两个相反电荷之间的吸引；范德华力则是任何两个原子靠得足够近时产生的弱吸引。**纤维状蛋白是许多平行取向的分子的聚集体，而球状蛋白在稀溶液中以一个个彼此独立的分子形式存在，其链的各个片段靠二硫键、离子相互作用、氢键、范德华力和疏水效应保持在各自的位置上。**",
      src: "B §2.2.4, p.34",
      beyond: true,
      beyondNote: "p.34 lists the five stabilising interactions by name. The one-clause descriptions of an ionic interaction and of van der Waals forces are standard and are added so the sentence stands alone.",
      see: [{ id: "2-2-2", en: "the hydrophobic effect, and why it is the one driven by water rather than by the chain", cn: "疏水效应，以及它为什么是由水而不是由链推动的那一个" }]
    },
    {
      link_en: "inside a globule, how the flat sections get connected decides which β-structure comes out",
      link_cn: "在球体内部，平面片段之间怎么连，决定了得到哪一种 β-结构",
      en: "**Two flat, planar parts of a peptide chain connected by a β-turn — the short piece of chain that joins them — easily create an antiparallel structure, whereas a longer chain lying between the two flat parts gives a parallel β-structure; combining both principles gives a structure of the meander type.**",
      cn: "**肽链上两段平面状的部分，如果由一个 β-转角（也就是把它们接起来的那一小段链）相连，很容易形成反平行结构；而如果两段平面部分之间夹着较长的一段链，得到的就是平行 β-结构；把两条原理合起来用，就得到曲折（meander）型结构。**",
      src: "B §2.2.4, p.34, Obr. 2.15"
    },
    {
      link_en: "and how much of a globule is helical is a property of the individual protein, not of globular proteins as a class",
      link_cn: "而一个球体里有多少是螺旋，是各个蛋白质自己的性质，不是球状蛋白这一类的性质",
      en: "**The proportion of α-helical structure differs from protein to protein: in myoglobin and haemoglobin, the oxygen-binding proteins of muscle and blood, the α-helix is the main structural motif, while chymotrypsin, a digestive enzyme that cuts other proteins, contains essentially no α-helical structure at all.**",
      cn: "**α-螺旋结构所占的比例因蛋白质而异：在肌红蛋白和血红蛋白（肌肉与血液中结合氧的蛋白质）里，α-螺旋是主要的结构基序；而胰凝乳蛋白酶（一种切割其他蛋白质的消化酶）则基本上完全不含 α-螺旋结构。**",
      src: "B §2.2.4, p.34",
      see: [{ id: "L-5-1-1", en: "myoglobin and haemoglobin worked through, from the caged iron to cooperative binding", cn: "把肌红蛋白与血红蛋白讲透：从被笼住的铁到协同结合" },
             { id: "L-6-4-1", en: "how a digestive enzyme of this kind actually cuts a peptide bond", cn: "这一类消化酶究竟怎样切断一个肽键" }]
    }
  ],
  terms: [
    { en: "fibrillar (fibrous) proteins", cn: "纤维状蛋白",
      def_en: "Proteins whose chains are more or less extended and cross-linked into macroscopic fibres. They matter for the formation of biological structures and their mechanical function: surface, connective and supporting tissues, and the cytoskeleton. Keratin, fibroin and collagen are the three representatives.",
      def_cn: "肽链或多或少被拉伸、并交联成宏观纤维的蛋白质。它们的意义在于构筑生物结构及承担机械功能：体表组织、结缔组织、支持组织，以及细胞骨架。三个代表是角蛋白、丝心蛋白和胶原。" },
    { en: "globular proteins", cn: "球状蛋白",
      def_en: "Proteins whose chain is folded into a ball, with α- or β-type sections alternating with random coil. They carry out most biological functions, and in dilute solution they exist as individual, mutually independent molecules.",
      def_cn: "肽链折叠成球的蛋白质，其中 α 型或 β 型片段与无规卷曲交替出现。它们承担大多数生物学功能，并且在稀溶液中以彼此独立的单个分子存在。" },
    { en: "random coil", cn: "无规卷曲",
      def_en: "Sections of chain with no regular structure, alternating with α- and β-type sections inside a globule.",
      def_cn: "没有规则结构的链段，在球体内部与 α 型和 β 型片段交替出现。" },
    { en: "protofibril", cn: "原原纤维",
      def_en: "The left-handed four-stranded cable formed in keratin by two pairs of parallel-running α-helices twisted together.",
      def_cn: "角蛋白中由两对平行走向的 α-螺旋缠绕而成的左手四股缆索。" },
    { en: "fibrinogen → fibrin", cn: "纤维蛋白原 → 纤维蛋白",
      def_en: "The conversion of a globular protein into a fibrillar one forming a mechanically firm structure. It is what blood clotting is: soluble globular fibrinogen becomes fibrillar fibrin.",
      def_cn: "球状蛋白转变为纤维状蛋白、从而形成机械坚固结构的过程。血液凝固就是这件事：可溶的球状纤维蛋白原变成纤维状的纤维蛋白。" },
    { en: "fibroin", cn: "丝心蛋白",
      def_en: "The protein of silk fibre, similar to keratin. Its high content of small amino acid residues — glycine, alanine, serine — allows the regular arrangement of planar formations of β-antiparallel secondary structure.",
      def_cn: "蚕丝纤维的蛋白质，与角蛋白相似。它富含小分子氨基酸残基（甘氨酸、丙氨酸、丝氨酸），使 β-反平行二级结构的平面构造得以规则排布。" }
  ]
};

/* ======================================================================= 2-2-5 */
window.BIOLITE_SPINE["2-2-5"] = {
  assumed: ["protein", "molecule", "asparagine", "serine", "threonine",
            "tyrosine", "collagen", "milk", "egg", "blood", "iron", "copper",
            "zinc", "manganese", "molybdenum", "oxygen", "cell", "biochemistry"],
  nodeTitle_en: "Simple and conjugated proteins",
  nodeTitle_cn: "简单蛋白质与结合蛋白质",
  title_en: "Almost every protein carries something that is not peptide, and that is usually where the function sits",
  title_cn: "几乎每个蛋白质都带着一样不是肽的东西，而功能通常就落在那上面",
  steps: [
    {
      en: "**Simple proteins yield only amino acids on hydrolysis, meaning they contain only the peptide component, while conjugated proteins contain further components besides amino acids — and on current ideas a non-peptide component is a regular part of the vast majority of proteins, which makes the so-called simple proteins rather the exception.**",
      cn: "**简单蛋白质水解后只产生氨基酸，也就是说它只含肽这一个组分；结合蛋白质则在氨基酸之外还含有别的组分——而按当前的看法，非肽组分是绝大多数蛋白质的常规组成部分，所以所谓「简单蛋白质」反倒才是例外。**",
      src: "B §2.2.5, p.36"
    },
    {
      link_en: "before the list, two things vary from case to case",
      link_cn: "在列举之前，先说两件因例而异的事",
      en: "**Some proteins hold their non-amino-acid component by a covalent bond and others hold it by non-covalent interactions, and the quantitative ratio between the peptide and the non-peptide component can differ considerably from one protein to another.**",
      cn: "**有些蛋白质靠共价键抓住那个非氨基酸组分，另一些则靠非共价的相互作用；而肽组分与非肽组分之间的数量比，在不同蛋白质之间可以相差极大。**",
      src: "B §2.2.5, p.36"
    },
    {
      link_en: "first class: the ones carrying sugar",
      link_cn: "第一类：带糖的那些",
      en: "A saccharide is a sugar, and an oligosaccharide is a short chain of them. **Glycoproteins carry, besides the peptide part, a saccharide part covalently bound to the peptide chain, and in the group with shorter and very often branched oligosaccharide chains that bond is made in one of two ways: N-glycosidically, through the amide nitrogen of asparagine, as in the glycoproteins of blood serum, or O-glycosidically, through the hydroxyl group of serine or threonine, as in the glycoproteins of blood group substances and of the mucins of mucus.**",
      cn: "糖类（saccharide）就是糖，而寡糖（oligosaccharide）是一小段糖链。**糖蛋白除肽部分外，还带有一个共价结合于肽链的糖部分；在寡糖链较短、且常常分支的那一组中，这个结合有两种方式：N-糖苷键结合，经由天冬酰胺的酰胺氮，血清糖蛋白即属此类；或 O-糖苷键结合，经由丝氨酸或苏氨酸的羟基，血型物质糖蛋白与黏液中的黏蛋白糖蛋白即属此类。**",
      src: "B §2.2.5, p.36",
      see: [{ id: "L-7-4-1", en: "why a short sugar chain on a protein surface can carry information", cn: "蛋白质表面一小段糖链为什么能携带信息" }]
    },
    {
      link_en: "the same class has two further members, with longer or different sugar attached",
      link_cn: "同一类里还有两个成员，接的糖更长或者不同",
      en: "Glycosaminoglycans are long sugar chains built from repeating units. **Proteoglycans contain glycosaminoglycan molecules covalently bound to the protein molecule and are components of connective tissue, while collagen contains D-galactose, or a disaccharide made of D-galactose and D-glucose, bound predominantly to hydroxyproline or hydroxylysine.**",
      cn: "糖胺聚糖是由重复单元构成的长糖链。**蛋白聚糖含有共价结合于蛋白质分子上的糖胺聚糖分子，是结缔组织的组分；而胶原含有 D-半乳糖，或由 D-半乳糖与 D-葡萄糖构成的二糖，主要结合在羟脯氨酸或羟赖氨酸上。**",
      src: "B §2.2.5, p.36",
      beyond: true,
      beyondNote: "p.36 names glycosaminoglycans without defining them. The one-clause description — long sugar chains of repeating units — is standard and is added so the sentence stands alone."
    },
    {
      link_en: "second class: the one component that can be put on and taken off again",
      link_cn: "第二类：唯一一个能装上去又卸下来的组分",
      en: "**In eukaryotes the phosphate group of a phosphoprotein is bound to the peptide chain covalently, most often by an ester bond to the hydroxyl group of serine, threonine or tyrosine; phosphoproteins, and the phosphorylation of proteins by protein kinases — enzymes that attach a phosphate group — play a very important role in the regulation of the cell cycle and in cell signalling.**",
      cn: "**在真核生物中，磷蛋白上的磷酸基以共价方式结合于肽链，最常见的是通过酯键连到丝氨酸、苏氨酸或酪氨酸的羟基上；磷蛋白，以及蛋白激酶（负责装上磷酸基的酶）对蛋白质的磷酸化，在细胞周期调控和细胞信号转导中起着非常重要的作用。**",
      src: "B §2.2.5, p.36",
      see: [{ id: "L-12-8-1", en: "protein kinases running the cell cycle", cn: "蛋白激酶如何驱动细胞周期" }]
    },
    {
      link_en: "phosphate has a second job that has nothing to do with signalling",
      link_cn: "磷酸还有第二份工作，与信号毫无关系",
      en: "**Phosphoproteins also have a depot function, storing enough phosphate for a rapidly developing embryo and young organism: phosvitin, the depot protein of egg yolk, has a relative molecular mass of 35 000 and carries about 100 phosphate residues per peptide chain, and milk contains the soluble phosphoprotein casein.**",
      cn: "**磷蛋白还有储存（depot）功能，为迅速发育的胚胎和幼体备下足够的磷酸：卵黄的储存蛋白卵黄高磷蛋白，相对分子质量为 35 000，每条肽链带有约 100 个磷酸残基；乳中则含有可溶的磷蛋白酪蛋白。**",
      src: "B §2.2.5, p.36"
    },
    {
      link_en: "third class: the ones carrying a metal, starting with the same depot idea",
      link_cn: "第三类：带金属的那些，先从同样的「储存」思路开始",
      recall_en: "the same storage job as phosvitin one step up, with a metal instead of phosphate",
      recall_cn: "和上一步卵黄高磷蛋白是同一份储存工作，只是把磷酸换成了金属",
      en: "**The carboxyl, imidazole and sulfhydryl groups of proteins generally have the ability to form complexes, especially with heavy metals, and the metalloproteins that result include depot proteins with a large metal content: ferritin, of relative molecular mass 46 000, can hold ferric ions up to 30 per cent of its own mass and releases Fe³⁺ when it is needed.**",
      cn: "**蛋白质上的羧基、咪唑基和巯基一般都具备形成配合物的能力，尤其是与重金属形成；由此得到的金属蛋白中，就包括金属含量很高的储存蛋白：铁蛋白的相对分子质量为 46 000，所含铁离子可达自身质量的 30%，需要时便释放出 Fe³⁺。**",
      src: "B §2.2.5, p.37"
    },
    {
      link_en: "storing a metal and moving it around are two different jobs, done by two different proteins",
      link_cn: "储存金属和搬运金属是两件事，由两个不同的蛋白质来做",
      en: "**Transferrin is a blood plasma protein that binds Fe³⁺ ions with high affinity and has a transport function for iron, and ceruloplasmin, in blood serum, serves as the transport protein for copper ions.**",
      cn: "**转铁蛋白是一种血浆蛋白，以高亲和力结合 Fe³⁺ 离子，承担铁的转运功能；而血清中的铜蓝蛋白则充当铜离子的转运蛋白。**",
      src: "B §2.2.5, p.37"
    },
    {
      link_en: "iron has a third arrangement, and this one does chemistry rather than storage or transport",
      link_cn: "铁还有第三种排布，这一种做的是化学，不是储存也不是搬运",
      en: "**In some proteins iron ions are bound in a complex with –SH groups and sulfide ions, and such proteins are designated FeS proteins; these complexes were demonstrated in bacterial and plant ferredoxins and are significant in biological oxidation-reduction reactions, which are the reactions in which electrons are handed from one molecule to another.**",
      cn: "**在某些蛋白质中，铁离子与 –SH 基和硫离子形成配合物，这类蛋白称为铁硫蛋白；这类配合物已在细菌和植物的铁氧还蛋白中得到证实，并在生物氧化还原反应中具有重要意义——所谓氧化还原反应，就是电子从一个分子交到另一个分子的反应。**",
      src: "B §2.2.5, p.37",
      see: [{ id: "L-19-1-1", en: "FeS centres passing electrons along the respiratory chain", cn: "铁硫中心在呼吸链上传递电子" }]
    },
    {
      link_en: "and some metalloproteins hold barely any metal at all, yet cannot work without it",
      link_cn: "还有些金属蛋白几乎不含金属，却缺它不可",
      en: "**Some metalloproteins contain a very small quantity of a heavy metal ion whose presence is necessary for the biological or catalytic function of the protein: carboxypeptidase contains Zn²⁺, pyruvate decarboxylase contains Mn²⁺, and xanthine oxidase contains a molybdenum ion.**",
      cn: "**有些金属蛋白只含极少量的重金属离子，而这些离子的存在是该蛋白质发挥生物学功能或催化功能所必需的：羧肽酶含 Zn²⁺，丙酮酸脱羧酶含 Mn²⁺，黄嘌呤氧化酶含一个钼离子。**",
      src: "B §2.2.5, p.37"
    },
    {
      link_en: "last class, and it differs from every metal case above in one respect",
      link_cn: "最后一类，它与上面所有金属的情形在一点上不同",
      recall_en: "the complexes of the previous steps are made with the amino acid side chains themselves; this one is not",
      recall_cn: "前面几步里的配合物都是与氨基酸侧链本身形成的；这一个不是",
      en: "A porphyrin is a large flat ring molecule that can hold a metal ion at its centre. **A complex of an iron ion with porphyrin is called heme, and proteins carrying it are the hemoproteins — the oxygen carriers, the cytochromes and the heme enzymes; unlike a complex of a metal ion with the functional groups of amino acids, which falls apart when the peptide chain is cleaved, heme is a separate molecule that survives on its own.**",
      cn: "卟啉是一个大而扁平的环状分子，能在其中心夹住一个金属离子。**铁离子与卟啉形成的配合物称为血红素，带着它的蛋白质就是血红素蛋白——氧载体、细胞色素和血红素酶；与「金属离子和氨基酸官能团形成的配合物」不同（那种配合物在肽链被切断时就散架了），血红素是一个独立的分子，能够单独存在下来。**",
      src: "B §2.2.5, p.37",
      see: [{ id: "L-5-1-1", en: "why oxygen needs a caged iron, and what the protein around the heme is for", cn: "氧为什么需要一个被笼住的铁，血红素外面那圈蛋白质又是干什么的" },
             { id: "L-22-3-1", en: "how a porphyrin ring is built, and what goes wrong in porphyria", cn: "卟啉环是怎么造出来的，以及卟啉症出了什么问题" }]
    }
  ],
  terms: [
    { en: "simple protein", cn: "简单蛋白质",
      def_en: "A protein yielding only amino acids on hydrolysis, containing only the peptide component. On current ideas these are rather the exception, since a non-peptide component is a regular part of the vast majority of proteins.",
      def_cn: "水解后只产生氨基酸的蛋白质，只含肽组分。按当前的看法这类反倒是例外，因为绝大多数蛋白质都常规地带有非肽组分。" },
    { en: "conjugated protein", cn: "结合蛋白质",
      def_en: "A protein containing further components besides amino acids, bound either covalently or by non-covalent interactions. The quantitative ratio of peptide to non-peptide component varies considerably.",
      def_cn: "除氨基酸外还含有其他组分的蛋白质，结合方式可为共价，也可为非共价相互作用。肽组分与非肽组分的数量比差异很大。" },
    { en: "N-glycosidic and O-glycosidic linkage", cn: "N-糖苷键与 O-糖苷键",
      def_en: "The two ways a short oligosaccharide is attached to a protein: N-glycosidically through the amide nitrogen of asparagine, as in blood serum glycoproteins, and O-glycosidically through the hydroxyl of serine or threonine, as in blood group substances and mucins.",
      def_cn: "短寡糖连接到蛋白质上的两种方式：N-糖苷键经由天冬酰胺的酰胺氮（如血清糖蛋白），O-糖苷键经由丝氨酸或苏氨酸的羟基（如血型物质与黏蛋白）。" },
    { en: "phosphoprotein", cn: "磷蛋白",
      def_en: "A protein carrying a phosphate group bound covalently, most often by an ester bond to the hydroxyl of serine, threonine or tyrosine. Phosphorylation by protein kinases is central to cell-cycle regulation and cell signalling; phosphoproteins such as phosvitin and casein also serve as phosphate depots.",
      def_cn: "带有共价结合磷酸基的蛋白质，最常见的是通过酯键连于丝氨酸、苏氨酸或酪氨酸的羟基。蛋白激酶介导的磷酸化是细胞周期调控与信号转导的核心；卵黄高磷蛋白、酪蛋白等磷蛋白还充当磷酸的储库。" },
    { en: "ferritin / transferrin / ceruloplasmin", cn: "铁蛋白／转铁蛋白／铜蓝蛋白",
      def_en: "Three metalloproteins with three different jobs: ferritin (Mr 46 000) stores ferric ions up to 30 % of its own mass and releases them on demand; transferrin, in blood plasma, transports Fe³⁺ with high affinity; ceruloplasmin, in blood serum, transports copper ions.",
      def_cn: "三个金属蛋白，三种分工：铁蛋白（Mr 46 000）储存铁离子，可达自身质量的 30%，按需释放；血浆中的转铁蛋白以高亲和力转运 Fe³⁺；血清中的铜蓝蛋白转运铜离子。" },
    { en: "FeS proteins", cn: "铁硫蛋白",
      def_en: "Proteins in which iron ions are bound in complex with –SH groups and sulfide ions. Demonstrated in bacterial and plant ferredoxins and significant in biological oxidation-reduction reactions.",
      def_cn: "铁离子与 –SH 基及硫离子形成配合物的蛋白质。已在细菌和植物铁氧还蛋白中得到证实，在生物氧化还原反应中意义重大。" },
    { en: "heme", cn: "血红素",
      def_en: "The complex of an iron ion with porphyrin. Proteins carrying it are hemoproteins: the oxygen carriers, the cytochromes and the heme enzymes. It differs from a complex of a metal ion with amino acid side chains, which falls apart when the chain is cleaved.",
      def_cn: "铁离子与卟啉形成的配合物。带有它的蛋白质就是血红素蛋白：氧载体、细胞色素与血红素酶。它不同于金属离子与氨基酸侧链形成的配合物——后者在肽链被切断时就散架。" }
  ]
};

/* ======================================================================= 2-2-6 */
window.BIOLITE_SPINE["2-2-6"] = {
  assumed: ["protein", "molecule", "water", "solution", "salt", "virus",
            "light", "ribosome", "biochemistry"],
  nodeTitle_en: "Properties of proteins",
  nodeTitle_cn: "蛋白质的性质",
  title_en: "Too big to weigh the ordinary way, so the mass is read off how fast the molecule sinks",
  title_cn: "大到没法用常规办法称，于是改从「沉得多快」读出质量",
  steps: [
    {
      en: "**The physico-chemical properties of a protein are conditioned partly by its chemical composition and partly by its relative molecular mass, written Mr; globular proteins are generally soluble in aqueous salt solutions, which is the condition under which everything that follows is measured.**",
      cn: "**一个蛋白质的物理化学性质，一方面取决于它的化学组成，另一方面取决于它的相对分子质量（记作 Mr）；球状蛋白一般可溶于水性盐溶液，而后面所有测量都是在这个条件下做的。**",
      src: "B §2.2.6, p.37"
    },
    {
      link_en: "the first consequence of a large Mr is that a protein solution behaves like something other than a solution",
      link_cn: "Mr 很大的第一个后果，是蛋白质溶液的行为不像一份溶液",
      en: "A colloid is a system in which particles much larger than ordinary molecules are dispersed through a medium, and the Tyndall effect is the scattering of light by such particles, which makes a beam passing through visible from the side. **Given their high relative molecular mass, protein molecules in solution are comparable with the particles of inorganic colloids, so protein solutions share some properties with colloidal solutions — the Tyndall effect, gel formation and coagulation.**",
      cn: "胶体是指比普通分子大得多的颗粒分散在某种介质中所形成的体系，而丁达尔效应是这类颗粒对光的散射，使穿过其中的光束从侧面看得见。**由于相对分子质量很高，溶液中的蛋白质分子可以与无机胶体的颗粒相比拟，所以蛋白质溶液与胶体溶液共有一些性质——丁达尔效应、凝胶形成和凝聚。**",
      src: "B §2.2.6, p.37",
      beyond: true,
      beyondNote: "p.37 names the Tyndall effect and inorganic colloids without defining either. The two one-clause descriptions are standard and are added so the sentence stands alone."
    },
    {
      link_en: "and one property separates a protein solution from an ordinary colloid",
      link_cn: "而有一个性质，把蛋白质溶液和普通胶体分开",
      en: "A polydisperse system is one whose particles come in a range of sizes; a homodisperse system is one whose particles are all alike. **Inorganic colloids are polydisperse, whereas protein solutions are homodisperse, and it is that uniformity which makes a protein solution resemble a true solution — every molecule in it is the same molecule.**",
      cn: "多分散体系指其中颗粒大小参差不齐的体系；均分散体系则指颗粒彼此一模一样的体系。**无机胶体是多分散的，而蛋白质溶液是均分散的；正是这种均一性使蛋白质溶液像一份真溶液——里面的每一个分子都是同一个分子。**",
      src: "B §2.2.6, p.37"
    },
    {
      link_en: "and now the number itself, which turns out to be out of reach of the usual methods",
      link_cn: "现在轮到那个数字本身，而它恰恰是常规方法够不着的",
      en: "**The relative molecular mass of proteins ranges from 10⁴ to 10⁶, and in viruses up to 10⁷, which means the classical methods for determining a molecular mass cannot be used on them.**",
      cn: "**蛋白质的相对分子质量从 10⁴ 到 10⁶，在病毒中可高达 10⁷；这就意味着测定分子量的那些经典方法在它们身上用不了。**",
      src: "B §2.2.6, p.37"
    },
    {
      link_en: "so the mass is obtained indirectly, from something that changes with size",
      link_cn: "于是质量只能间接获得，从某个随大小而变的量上读出来",
      en: "**Three types of physico-chemical method are used to determine the Mr of a protein: ultracentrifugation analysis, chromatography on so-called molecular sieves — gel or permeation chromatography — and electromigration methods.**",
      cn: "**测定蛋白质 Mr 用的是三类物理化学方法：超速离心分析；使用所谓分子筛的色谱，即凝胶色谱或渗透色谱；以及电迁移方法。**",
      src: "B §2.2.6, p.37",
      see: [{ id: "L-3-3-1", en: "these methods run on a real protein, with the numbers they give", cn: "把这些方法用在一个真实蛋白质上，以及它们给出的数字" },
             { id: "L-4-5-1", en: "how a full three-dimensional structure is determined, once the mass is known", cn: "质量已知之后，完整的三维结构又是怎么测出来的" }]
    },
    {
      link_en: "take the first of the three, and watch what is actually being measured",
      link_cn: "拿第一种来看，看清楚真正被测量的是什么",
      en: "**In sedimentation methods the protein solution is exposed to centrifugal force in an ultracentrifuge, and because protein molecules are heavier than water they sink slowly to the bottom of the cell, travelling away from the centre of rotation; the sedimentation rate is the path covered per unit time in the direction of the centrifugal acceleration, dx/dt, and it is proportional to that acceleration: dx/dt = s · ω² · x.**",
      cn: "**在沉降法中，蛋白质溶液在超速离心机中承受离心力；由于蛋白质分子比水重，它们缓慢沉向池底，也就是朝远离旋转中心的方向移动；沉降速度就是单位时间内沿离心加速度方向所走的路程 dx/dt，并且与该加速度成正比：dx/dt = s · ω² · x。**",
      src: "B §2.2.6, p.37"
    },
    {
      link_en: "three symbols in that equation, and one of them is the quantity being extracted",
      link_cn: "式子里有三个符号，其中一个就是要提取的那个量",
      en: "**In dx/dt = s · ω² · x, x is the distance from the centre of rotation, ω is the angular velocity, and s is the sedimentation coefficient, whose value is given in svedberg units, S, where one svedberg is 10⁻¹³ seconds.**",
      cn: "**在 dx/dt = s · ω² · x 中，x 是距旋转中心的距离，ω 是角速度，而 s 是沉降系数，其数值以斯维德贝格单位 S 表示，1 斯维德贝格 = 10⁻¹³ 秒。**",
      src: "B §2.2.6, p.37"
    },
    {
      link_en: "and here is the trap, sitting between the sedimentation coefficient and the mass",
      link_cn: "而陷阱就藏在沉降系数与质量之间",
      recall_en: "s is what the centrifuge measures; Mr is what was wanted, and they are not the same quantity",
      recall_cn: "s 是离心机测到的东西，Mr 才是想要的东西，两者不是同一个量",
      en: "**The sedimentation coefficient increases with Mr and is not directly proportional to it, so sedimentation coefficients must never be added: Mr has to be calculated from the Svedberg equation, Mr = R·T·s / [D·(1 − v̄·ρ)], where D is the diffusion coefficient, v̄ the partial specific volume and ρ the density of the solvent.**",
      cn: "**沉降系数随 Mr 增大，但与它不成正比，所以沉降系数绝不能相加：Mr 必须用斯维德贝格方程算出来，即 Mr = R·T·s / [D·(1 − v̄·ρ)]，其中 D 是扩散系数，v̄ 是偏比容，ρ 是溶剂密度。**",
      src: "B §2.2.6, p.37",
      beyond: true,
      beyondNote: "The instruction never to add sedimentation coefficients follows from the non-proportionality stated on p.37 but is not spelled out there. The standard illustration is the bacterial ribosome: a 30S and a 50S subunit assemble into a 70S particle, not an 80S one."
    }
  ],
  terms: [
    { en: "Tyndall effect", cn: "丁达尔效应",
      def_en: "The scattering of light by particles large enough to make a beam visible from the side. Protein solutions show it, along with gel formation and coagulation, because a protein molecule is comparable in size with the particles of an inorganic colloid.",
      def_cn: "足够大的颗粒对光的散射，使光束从侧面可见。蛋白质溶液表现出这一效应，以及凝胶形成和凝聚，原因是蛋白质分子的大小可与无机胶体颗粒相比拟。" },
    { en: "homodisperse system", cn: "均分散体系",
      def_en: "A system whose particles are all alike. Protein solutions are homodisperse, unlike polydisperse inorganic colloids, and that uniformity is what makes them resemble true solutions.",
      def_cn: "颗粒彼此一模一样的体系。蛋白质溶液是均分散的，不同于多分散的无机胶体；正是这种均一性使它类似真溶液。" },
    { en: "sedimentation coefficient", cn: "沉降系数",
      def_en: "s, the constant in dx/dt = s · ω² · x, given in svedberg units where one svedberg is 10⁻¹³ seconds. It increases with Mr but is not directly proportional to it, so sedimentation coefficients cannot be added.",
      def_cn: "s，即 dx/dt = s · ω² · x 中的常数，以斯维德贝格单位表示，1 斯维德贝格 = 10⁻¹³ 秒。它随 Mr 增大，但并不与之成正比，所以沉降系数不能相加。" },
    { en: "Svedberg equation", cn: "斯维德贝格方程",
      def_en: "Mr = R·T·s / [D·(1 − v̄·ρ)], where D is the diffusion coefficient, v̄ the partial specific volume and ρ the density of the solvent. It is what converts a measured sedimentation coefficient into a relative molecular mass.",
      def_cn: "Mr = R·T·s / [D·(1 − v̄·ρ)]，其中 D 为扩散系数，v̄ 为偏比容，ρ 为溶剂密度。它把测得的沉降系数换算成相对分子质量。" },
    { en: "gel (permeation) chromatography", cn: "凝胶（渗透）色谱",
      def_en: "Chromatography on so-called molecular sieves, one of the three families of method for determining the Mr of a protein, alongside ultracentrifugation and electromigration.",
      def_cn: "使用所谓分子筛的色谱，是测定蛋白质 Mr 的三类方法之一，另两类是超速离心与电迁移。" }
  ]
};
