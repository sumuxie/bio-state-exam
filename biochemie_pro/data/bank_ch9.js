/* Bank questions for chapter 9 (9-1 .. 9-27) — the second question layer, see BANK_SPEC.md.
   Every item below is derived from the content already in biochemie_pro/data/ch9.js; no fact
   here comes from outside that node. The four flagged/disputed points of the chapter
   (9-20 glycolate oxygenase vs oxidase, 9-21 the 1970 date, 9-23 the nitrogenase
   stoichiometry, 9-25 the denitrification products) are deliberately not examined.
   Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "9-1": [
    { type: "mcq",
      q_en: "Which item of the chapter's opening five-item list does the book itself later correct, and how?",
      q_cn: "本章开篇的五项列表中，哪一项后来被教材自己纠正了？怎样纠正的？",
      options: [
        "Item 1, photosynthetic CO₂ assimilation — later shown to occur without water photolysis",
        "Item 2, assimilation of atmospheric nitrogen — §9.4 states that this ability belongs to bacteria, not to plants",
        "Item 4, biosynthesis of aromatic amino acids — later shown to occur in animals too",
        "Item 5, formation of secondary plant metabolites — later shown to be shared with animals"
      ],
      answer: 1,
      optionRefs: { 0: "9-3", 2: "9-1", 3: "9-27" },
      optionNotes: {
        0: { en: "The pairing of CO₂ assimilation with water photolysis is not withdrawn — it is the one the book calls the basis of photosynthesis.", cn: "CO₂同化与水光解这一组合并没有被撤回——教材恰恰称这一组合为光合作用的基础。" },
        2: { en: "Item 4 is not corrected, only cross-referenced away to kap. 5.3.4 instead of being repeated here.", cn: "第4项没有被纠正，只是交叉引用到第5.3.4节而不在此重复。" },
        3: { en: "Secondary metabolites stay a plant speciality throughout; §9.5 explains why plants have far more of them than animals.", cn: "次生代谢物自始至终都是植物的专长；§9.5还解释了植物为何比动物多得多。" }
      },
      why_en: "The opening list names assimilation of atmospheric nitrogen as a plant capability, but when §9.4 develops it the book states that only bacteria can fix N₂ and that plants must take nitrogen up in another form. The list is the chapter's syllabus, and this is the one entry the chapter argues against itself.",
      why_cn: "开篇列表把大气氮的同化列为植物的能力，但§9.4展开时教材指出只有细菌能固定N₂，植物必须以其他形式摄取氮。这份列表是本章的提纲，而这一条是全章唯一自我推翻的一条。" },
    { type: "mcq",
      q_en: "Which of the five autotroph-specific metabolisms is handed off entirely to an earlier chapter rather than developed in chapter 9?",
      q_cn: "五类自养生物特有代谢中，哪一类被完全交给前面的章节处理、而非在第9章展开？",
      options: [
        "Biosynthesis of aromatic amino acids, cross-referenced to kap. 5.3.4",
        "Formation of secondary plant metabolites",
        "Reduction of sulfates and biosynthesis of cysteine",
        "Assimilation of atmospheric nitrogen"
      ],
      answer: 0,
      optionRefs: { 1: "9-27", 2: "9-1", 3: "9-23" },
      optionNotes: {
        1: { en: "Secondary metabolites close the chapter as §9.5 — developed here, not handed off.", cn: "次生代谢物作为§9.5为全章收尾——是在本章展开的，没有转交出去。" },
        2: { en: "Sulfate reduction and cysteine biosynthesis are named in the list and then simply not returned to; that is silence, not a cross-reference to another chapter.", cn: "硫酸盐还原与半胱氨酸合成在列表中点名后就再无下文；那是略去不提，而不是交叉引用到别的章节。" },
        3: { en: "Nitrogen assimilation is developed at length in §9.4.", cn: "氮的同化在§9.4中详细展开。" }
      },
      why_en: "Item 4 carries the book's own cross-reference to kap. 5.3.4, so the chapter treats aromatic amino acid biosynthesis as chapter 5 material that merely happens to be an autotroph speciality. Item 3 is a different case: it is named and then dropped, with only its nitrate/nitrite half resurfacing in §9.4.",
      why_cn: "第4项带有教材自己指向第5.3.4节的交叉引用，所以本章把芳香族氨基酸的生物合成当作第5章的内容，只是恰好属于自养生物的专长。第3项则是另一种情况：点名之后就被搁下，只有其中硝酸盐/亚硝酸盐的一半在§9.4中重新出现。" },
    { type: "short",
      q_en: "What exactly does the book require of an organism before calling it autotrophic? Give both halves of the definition.",
      q_cn: "教材要满足什么条件才把一个生物称为自养的？请给出定义的两个半边。",
      accept: ["solar", "energy requirement", "CO2", "mineral", "body"],
      answer_en: "Two things at once: it must be able to cover its entire energy requirement at the expense of solar energy, AND it must be able to synthesize the basic nutrients and the substances for building its own body from CO₂, water and mineral substances alone. Doing photosynthesis is not by itself enough — the second half is what makes eating unnecessary.",
      answer_cn: "两件事同时成立：它必须能完全依靠太阳能满足自身全部能量需求，并且必须能仅从CO₂、水和矿物质合成基本养分以及构建自身躯体所需的物质。会做光合作用本身还不够——正是后半条才使「不需要吃东西」成为可能。" }
  ],

  "9-2": [
    { type: "mcq",
      q_en: "Why does the book write the donor as H₂D rather than simply D?",
      q_cn: "教材为何把供体写成H₂D而不是简单写作D？",
      options: [
        "Because the donor is always water, and H₂D stands for H₂O",
        "Because the donor gives up protons as well as electrons",
        "Because two donor molecules are needed per acceptor molecule",
        "Because the H₂ is released as molecular hydrogen"
      ],
      answer: 1,
      optionRefs: { 0: "9-3", 2: "9-3" },
      optionNotes: {
        0: { en: "Water is the donor in oxygenic photosynthesis only; the whole point of the general scheme is that the donor varies while the acceptor stays CO₂.", cn: "只有在产氧光合作用中供体才是水；这个通式的全部要点恰恰是供体可变、而受体永远是CO₂。" },
        2: { en: "The 2:1 relation the book does insist on is two H₂O per O₂ evolved, which is a stoichiometric point about the hexose equation, not about the notation H₂D.", cn: "教材确实强调过一个2∶1的关系——每释放一个O₂需两个H₂O，但那是关于己糖方程化学计量的论点，与H₂D这个记号无关。" },
        3: { en: "Nothing in the general scheme releases H₂; the by-product is whatever is left of the donor — O₂ from water, elemental sulfur from H₂S.", cn: "通式中并没有H₂被释放；副产物是供体剩下的部分——水剩下O₂，H₂S剩下单质硫。" }
      },
      why_en: "The book is careful to say that H₂D is the donor and A the acceptor of BOTH electrons and protons. Writing the donor as H₂D rather than D is precisely what records the protons; when the electrons leave, the protons leave with them.",
      why_cn: "教材特意说明H₂D是供体、A是受体，二者收授的**既是电子也是质子**。把供体写成H₂D而非D，正是为了把质子记进去；电子离开时，质子也一同离开。" },
    { type: "mcq",
      q_en: "The book says thylakoids are closed structures in which an inner and an outer space can be distinguished. What does it compare them to?",
      q_cn: "教材说类囊体是可区分内腔与外部空间的封闭结构。它把类囊体比作什么？",
      options: [
        "The outer chloroplast membrane",
        "The inner mitochondrial membrane",
        "The peroxisome",
        "The plasma membrane of a bacterial cell"
      ],
      answer: 1,
      optionRefs: { 0: "9-2", 2: "9-20", 3: "8-5-2-1" },
      optionNotes: {
        0: { en: "The outer and inner chloroplast membranes and the intermembrane space between them are labels of Obr. 9.1b, not the analogy the book draws for the thylakoid itself.", cn: "叶绿体的外膜、内膜与其间的膜间隙是图9.1b的标注，并不是教材为类囊体本身所作的类比。" },
        2: { en: "The peroxisome does appear in this chapter, but as one of the three compartments of photorespiration.", cn: "过氧化物酶体在本章确有出现，但那是作为光呼吸三个区室之一。" },
        3: { en: "The general resemblance to other biological membranes is stated too, but the specific closed-sac analogy is with the mitochondrial inner membrane.", cn: "教材也说过类囊体膜与其他生物膜总体相似，但「封闭囊状、可分内外」这个具体类比针对的是线粒体内膜。" }
      },
      why_en: "The comparison is functional as well as structural: the inner mitochondrial membrane is the other place in the cell where an electron transport chain is coupled across a closed membrane with a distinguishable inside and outside. That analogy is what lets most of chapter 6 be carried over into chapter 9.",
      why_cn: "这个比较不只在结构上，也在功能上成立：线粒体内膜是细胞中另一处「电子传递链跨越一层可分内外的封闭膜」的地方。正是这个类比使第6章的大部分内容能被搬到第9章来用。" },
    { type: "short",
      q_en: "Some bacteria run photosynthesis with H₂S as the donor. Write what they produce instead of O₂, and say what that proves.",
      q_cn: "某些细菌以H₂S作供体进行光合作用。写出它们产生什么来代替O₂，并说明这证明了什么。",
      accept: ["sulfur", "H2S + CO2", "donor", "not from CO2", "(CH2O)"],
      answer_en: "H₂S + CO₂ → (CH₂O) + S: sulfur, not oxygen, is the by-product. Since the acceptor is CO₂ in both cases and only the donor has changed, the by-product must come from the donor — which is the cleanest demonstration that the O₂ of oxygenic photosynthesis comes from water and never from CO₂.",
      answer_cn: "H₂S + CO₂ → (CH₂O) + S：副产物是硫而不是氧。既然两种情形下受体都是CO₂、变的只有供体，那么副产物就必然来自供体——这就是「产氧光合作用中的O₂来自水而绝非CO₂」最干净利落的证明。" }
  ],

  "9-3": [
    { type: "mcq",
      q_en: "In the hexose equation as the book writes it, how many water molecules go in and how many come back out?",
      q_cn: "在教材所写的己糖方程中，有多少个水分子进入、多少个又出来？",
      options: [
        "6 in, none out",
        "6 in, 6 out",
        "12 in, 6 out",
        "12 in, 12 out"
      ],
      answer: 2,
      optionRefs: { 0: "9-3" },
      optionNotes: {
        0: { en: "That is the cancelled form 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ — arithmetically identical, but it hides the fact that two waters are split per O₂.", cn: "那是约简形式 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂——算术上完全等价，却把「每生成一个O₂要拆两个水」这一点藏了起来。" },
        1: { en: "Six on each side would cancel entirely and leave no water in the equation at all.", cn: "两边各六个会完全约掉，方程里就一个水都不剩了。" },
        3: { en: "Twelve out would mean no water was consumed net, and then no hydrogen would be available to reduce the carbon.", cn: "出来十二个就意味着净消耗为零，那样就没有氢可以用来还原碳了。" }
      },
      why_en: "12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O. Twelve are split because it takes two per O₂ evolved; six reappear on the product side. The six that could be cancelled are kept deliberately, and keeping them is what makes the 2:1 relation visible.",
      why_cn: "12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O。之所以拆十二个，是因为每释放一个O₂要用两个；产物一侧又出现六个。那六个本可约去的水是刻意保留的，正是保留它们才让2∶1的关系显现出来。" },
    { type: "mcq",
      q_en: "The hexose equation carries ΔG°′ = +2867 kJ·mol⁻¹. What does the positive sign record?",
      q_cn: "己糖方程的ΔG°′ = +2867 kJ·mol⁻¹。这个正号记录的是什么？",
      options: [
        "That the reaction as written is endergonic — the synthetic direction, paid for by the absorbed light",
        "That the reaction as written proceeds spontaneously once started",
        "That the value applies only to the six O₂ molecules released",
        "That the system is at equilibrium under standard conditions"
      ],
      answer: 0,
      optionRefs: { 1: "6-1-1", 2: "9-3", 3: "6-1-1" },
      optionNotes: {
        1: { en: "A spontaneous, downhill process would carry a negative ΔG°′. Reversed, this same figure is the free energy released when a hexose is completely oxidized.", cn: "自发的、下坡的过程ΔG°′应为负值。把方程反过来，同一数值就是一分子己糖完全氧化时释放的自由能。" },
        2: { en: "ΔG°′ belongs to the whole equation as written; it is not apportioned to one product.", cn: "ΔG°′属于整个方程；它不会被摊派到某一个产物身上。" },
        3: { en: "Equilibrium would be ΔG = 0, and ΔG°′ is in any case a standard-state quantity, not a statement about the current state.", cn: "平衡对应的是ΔG = 0；何况ΔG°′是标准态下的量，并不描述体系当下的状态。" }
      },
      why_en: "The equation is written in the direction of synthesis, which is uphill, so the sign is positive and the energy has to come from somewhere — the absorbed light. Run the same equation backwards and you have the exergonic combustion of a hexose, which is why photosynthesis and respiration are so often set against one another.",
      why_cn: "方程是按合成方向书写的，那是上坡方向，所以符号为正，能量必须另有来源——就是被吸收的光。把同一方程倒过来，就是己糖的放能氧化，这正是光合作用与呼吸作用常被对举的原因。" },
    { type: "short",
      q_en: "Both the cancelled and the uncancelled form of the photosynthesis equation are correctly balanced. On what grounds does the book prefer one of them?",
      q_cn: "光合作用方程的约简式与未约简式都配平无误。教材凭什么理由偏好其中一种？",
      accept: ["origin of the oxygen", "from water", "not from carbon dioxide", "two water", "emphasise"],
      answer_en: "On pedagogical grounds, not chemical ones. Both balance and both have the same ΔG°′; the uncancelled form is preferred purely because it keeps the origin of the oxygen visible — twelve waters split, six O₂ evolved, two waters per O₂ — whereas cancelling them down silently invites the reading that the O₂ was stripped off the CO₂.",
      answer_cn: "理由是教学上的，不是化学上的。两种写法都配平、ΔG°′也相同；之所以偏好未约简的形式，纯粹是因为它把氧的来源保持可见——拆十二个水、放出六个O₂、每个O₂对应两个水——而约简之后就会不动声色地引出「O₂是从CO₂上剥下来的」这种读法。" }
  ],

  "9-4": [
    { type: "mcq",
      q_en: "Which of the four disciplines covers processes the book explicitly calls independent of temperature, and what does that independence signal?",
      q_cn: "四门学科中，哪一门所涵盖的过程被教材明确称为与温度无关？这种无关性说明了什么？",
      options: [
        "Physics, 10⁻¹⁵ to 10⁻⁸ s — absorption and energy transfer, with no enzyme involved",
        "Biochemistry in the membrane, 10⁻¹⁰ to 10⁻² s",
        "Physiology, 1 to 10⁴ s",
        "Ecology, 10³ s and more"
      ],
      answer: 0,
      optionRefs: { 1: "9-4", 2: "9-4", 3: "9-4" },
      optionNotes: {
        1: { en: "This window covers electron and proton transfer and water photolysis, yielding ATP and NADPH — enzyme chemistry, and the book makes no temperature claim for it.", cn: "这一时间窗涵盖电子与质子传递以及水的光解，产生ATP与NADPH——属于酶促化学，教材没有对它作温度方面的论断。" },
        2: { en: "Physiology covers gas exchange and the transport and use of the products, at tissue-to-whole-plant level.", cn: "生理学涵盖气体交换以及产物的运输与利用，层次从组织到整株植物。" },
        3: { en: "Ecology is the highest level — sets of plants and whole stands, over hours, days and years.", cn: "生态学是最高层次——植物群体与整个群落，跨越小时、天与年。" }
      },
      why_en: "The physics of photosynthesis is absorption of radiation by the pigments and transfer of the energy into the reaction centre, 10⁻¹⁵ to 10⁻⁸ s, and the book states it is independent of temperature. That is itself the clue that nothing enzymatic is happening yet; everything slower in the hierarchy is chemistry and does depend on temperature.",
      why_cn: "光合作用的物理学研究色素对辐射的吸收以及能量向反应中心的传递，10⁻¹⁵至10⁻⁸秒，教材说它与温度无关。这本身就是一个线索：此时还没有任何酶参与；层级中比它慢的一切都是化学，也就都依赖温度。" },
    { type: "mcq",
      q_en: "Under which discipline and time window does the book file photorespiration and nitrogen metabolism?",
      q_cn: "教材把光呼吸与氮代谢归入哪一门学科、哪一个时间窗口？",
      options: [
        "Physics, 10⁻¹⁵ to 10⁻⁸ s",
        "Biochemistry in the thylakoid membranes, 10⁻¹⁰ to 10⁻² s",
        "Biochemistry outside the thylakoid membranes, 10⁻³ to 10² s",
        "Physiology, 1 to 10⁴ s"
      ],
      answer: 2,
      optionRefs: { 0: "9-11", 1: "9-14", 3: "9-4" },
      optionNotes: {
        0: { en: "Physics stops at charge separation in the reaction centre; it covers the primary processes only.", cn: "物理学到反应中心的电荷分离为止；它只涵盖初级过程。" },
        1: { en: "That window is the membrane events — electron and proton transfer, water photolysis, ATP and NADPH formation.", cn: "那个时间窗是膜上的事件——电子与质子传递、水的光解、ATP与NADPH的生成。" },
        3: { en: "Physiology works at the level of tissues and whole plants: gas exchange, transport, distribution and use of the products.", cn: "生理学的工作层次是组织与整株植物：气体交换，以及产物的运输、分配与利用。" }
      },
      why_en: "Biochemistry has two windows. The slower one, 10⁻³ to 10² s, is everything in the chloroplast stroma and other compartments: CO₂ fixation, saccharide formation, and explicitly photorespiration (§9.2) and nitrogen metabolism (§9.4). The split by time scale is also a split by location — membrane versus stroma.",
      why_cn: "生物化学有两个时间窗。较慢的那个，10⁻³至10²秒，涵盖叶绿体基质及其他区室中的一切：CO₂固定、糖类生成，以及明确列出的光呼吸（§9.2）与氮代谢（§9.4）。按时间尺度的划分同时也是按位置的划分——膜内与基质。" },
    { type: "short",
      q_en: "Which three of the four disciplines does the book announce it will not describe further, and what does that tell you about the rest of chapter 9?",
      q_cn: "教材宣布不再详述四门学科中的哪三门？这对第9章后文意味着什么？",
      accept: ["physical", "physiological", "ecological", "biochemistry", "lecture notes"],
      answer_en: "The physical, physiological and ecological aspects. Everything that follows in chapter 9 is therefore deliberately biochemistry only — which is worth knowing when the chapter seems to skip a question you expected it to answer, such as how gas exchange or whole-canopy productivity actually works.",
      answer_cn: "物理学、生理学与生态学三方面。因此第9章后文有意只讲生物化学——当本章似乎跳过了你以为它会回答的问题（比如气体交换或整个冠层的生产力究竟如何运作）时，知道这一点很有用。" }
  ],

  "9-5": [
    { type: "mcq",
      q_en: "The three pigment classes are chemically unrelated. What single property do all three share?",
      q_cn: "三类色素在化学上互不相关。三者共有的唯一性质是什么？",
      options: [
        "A central metal ion",
        "A tetrapyrrole skeleton",
        "An extended system of conjugated double bonds, shifting absorption into the visible",
        "A long hydrophobic isoprenoid tail"
      ],
      answer: 2,
      optionRefs: { 0: "9-6", 1: "9-5", 3: "9-6" },
      optionNotes: {
        0: { en: "Only the chlorophylls carry a central metal — Mg where haem has Fe. Phycobilins and carotenoids have none.", cn: "只有叶绿素带中心金属——叶绿素是Mg，血红素是Fe。藻胆素与类胡萝卜素都没有。" },
        1: { en: "Two of the three are tetrapyrroles (closed in chlorophylls, open in phycobilins), but carotenoids are isoprenoids and contain no pyrrole at all.", cn: "三者中有两类是四吡咯（叶绿素闭合、藻胆素开链），但类胡萝卜素属异戊二烯类，完全不含吡咯。" },
        3: { en: "The phytol tail belongs to chlorophyll and carotenoids are isoprenoid throughout, but the phycobilins have no such tail.", cn: "植醇尾属于叶绿素，类胡萝卜素整体就是异戊二烯类，但藻胆素并没有这样的尾巴。" }
      },
      why_en: "A closed metallo-tetrapyrrole, an open tetrapyrrole and a long polyene are three quite different chemistries, and the book groups them anyway because each carries a long run of alternating double bonds. That conjugation is what pulls the absorption down into the visible range so the molecule can catch sunlight at all.",
      why_cn: "闭合的金属四吡咯、开链四吡咯、长多烯，是三种颇不相同的化学结构，教材仍把它们归为一类，就因为每一种都带有一长串交替的双键。正是这种共轭把吸收拉进可见光范围，分子才可能捕捉到阳光。" },
    { type: "mcq",
      q_en: "Each of the three pigment classes is defined by a cross-reference to a structural class met earlier in the book. Which cross-reference belongs to the carotenoids?",
      q_cn: "三类色素各自都通过交叉引用到书中先前讲过的某一结构类别来界定。哪一个交叉引用属于类胡萝卜素？",
      options: [
        "kap. 6.3, the porphyrins",
        "The bile pigments biliverdin, bilirubin and stercobilin",
        "kap. 8.2.4, the isoprenoids, related to the steroids",
        "kap. 5.3.4, the aromatic amino acids"
      ],
      answer: 2,
      optionRefs: { 0: "6-3-1", 1: "6-3-3", 3: "9-1" },
      optionNotes: {
        0: { en: "That is the chlorophylls: porphyrins, molecules similar to the haem of haemoglobin and the cytochromes.", cn: "那是叶绿素：卟啉，与血红蛋白和细胞色素中的血红素相似的分子。" },
        1: { en: "That is the phycobilins, whose tetrapyrrole chain is open exactly as in the products of haem degradation.", cn: "那是藻胆素，其四吡咯链是开裂的，与血红素降解产物的情形完全一样。" },
        3: { en: "Aromatic amino acid biosynthesis is item 4 of the chapter's opening list, not a pigment class.", cn: "芳香族氨基酸的生物合成是本章开篇列表的第4项，并不是一类色素。" }
      },
      why_en: "Carotenoids are isoprenoids, built from the same isoprene units as the steroids — which is why the book sends the reader to kap. 8.2.4 rather than to the tetrapyrrole material. β-Carotene and lutein are its two worked examples in Obr. 9.2.",
      why_cn: "类胡萝卜素属异戊二烯类，与类固醇由相同的异戊二烯单元构建——这正是教材把读者指向第8.2.4节而不是四吡咯那部分内容的原因。图9.2中给出的两个实例是β-胡萝卜素与叶黄素。" },
    { type: "short",
      q_en: "Two of the three pigment classes are tetrapyrroles. What separates them, and which class is not a tetrapyrrole at all?",
      q_cn: "三类色素中有两类是四吡咯。它们之间的区别是什么？哪一类根本不是四吡咯？",
      accept: ["closed", "open", "macrocycle", "carotenoid", "isoprenoid"],
      answer_en: "Chlorophylls are closed porphyrin macrocycles with a central Mg; phycobilins have the same four pyrroles but with the ring opened into a chain, which is why the book likens them to the bile pigments. The carotenoids are not tetrapyrroles at all — they are isoprenoids, related to the steroids.",
      answer_cn: "叶绿素是带中心Mg的闭合卟啉大环；藻胆素同样是四个吡咯，但环被打开成链，这正是教材把它们比作胆色素的原因。类胡萝卜素根本不是四吡咯——它们是异戊二烯类，与类固醇相关。" }
  ],

  "9-6": [
    { type: "mcq",
      q_en: "What is the entire structural difference between chlorophyll a and chlorophyll b?",
      q_cn: "叶绿素a与叶绿素b之间的结构差异，全部内容是什么？",
      options: [
        "A single substituent on ring II",
        "The absence of the Mg ion",
        "The absence of the phytol tail",
        "A different central metal, Fe instead of Mg"
      ],
      answer: 0,
      optionRefs: { 1: "9-10", 3: "9-5" },
      optionNotes: {
        1: { en: "Chlorophyll with the Mg ion removed is pheophytin, the early electron acceptor on the PS II side — not chlorophyll b.", cn: "去掉Mg离子的叶绿素是去镁叶绿素(pheophytin)，即PSII受体侧的早期电子受体——不是叶绿素b。" },
        2: { en: "Nothing in the node describes a chlorophyll lacking its tail; the phytol residue is a feature all the chlorophylls share.", cn: "本节点中没有描述过缺少尾巴的叶绿素；植基残基是所有叶绿素共有的特征。" },
        3: { en: "Fe at the centre of a porphyrin is haem, as in haemoglobin and the cytochromes; the chlorophylls have Mg.", cn: "卟啉中心为Fe的是血红素，如血红蛋白与细胞色素中者；叶绿素中的是Mg。" }
      },
      why_en: "Obr. 9.2 makes the point with an inset circle isolating ring II: one substituent is all that separates a from b. That is also why their absorption spectra are so alike in both the shape and the position of the bands.",
      why_cn: "图9.2用一个圈出环II的插图说明这一点：a与b之间只差一个取代基。这也正是二者的吸收光谱在吸收带的形状与位置上都如此相似的原因。" },
    { type: "mcq",
      q_en: "The book calls the chlorophylls 'obligatory' pigments. What does that mean here?",
      q_cn: "教材称叶绿素为「必备」色素。这里的「必备」是什么意思？",
      options: [
        "That they must be bound to protein in order to function",
        "That no photosynthetic system does without them, unlike the accessory pigments, whose presence varies by organism",
        "That they are the only pigments capable of being photooxidized",
        "That they alone supply the yellow-green part of the effective spectrum"
      ],
      answer: 1,
      optionRefs: { 0: "9-11", 2: "9-11", 3: "9-8" },
      optionNotes: {
        0: { en: "Protein binding matters in the reaction centre, where the microenvironment is what makes photooxidation possible — but that is a statement about the RC, not about the word 'obligatory'.", cn: "蛋白结合在反应中心确实要紧，那里的微环境正是光氧化得以发生的原因——但那是关于反应中心的陈述，与「必备」一词无关。" },
        2: { en: "Photooxidation is the privilege of the reaction-centre chlorophyll a specifically, not of the chlorophylls as a class; chlorophyll b is accessory.", cn: "光氧化是反应中心叶绿素a特有的本事，而不是整类叶绿素的；叶绿素b属于辅助色素。" },
        3: { en: "The yellow-green region is supplemented by the carotenoids — precisely where both chlorophylls absorb weakest.", cn: "黄绿区由类胡萝卜素补充——那恰恰是两种叶绿素吸收最弱的区域。" }
      },
      why_en: "'Obligatory and most important' is a statement about distribution: the chlorophylls are the pigments no photosynthetic system can be without, whereas which accessory pigments an organism carries varies — biliproteins in cyanobacteria and red algae, carotenoids elsewhere.",
      why_cn: "「必备且最重要」是关于分布的陈述：叶绿素是任何光合系统都不能缺少的色素，而一种生物携带哪些辅助色素则因物种而异——蓝细菌与红藻有胆蛋白，别处则是类胡萝卜素。" },
    { type: "short",
      q_en: "What is bacteriochlorophyll, and why does the book mention it in a parenthesis at exactly this point?",
      q_cn: "什么是细菌叶绿素？教材为何恰好在此处用括注提到它？",
      accept: ["somewhat different structure", "bacteria", "oxygenic", "universal", "chlorophyll a"],
      answer_en: "It is the chlorophyll of the photosynthetic bacteria, and the book says only that its structure is somewhat different. It appears here because the argument for chlorophyll a's unique role rests on its universal distribution among organisms with the OXYGENIC type of photosynthesis — the parenthesis is what restricts the claim to that group and keeps the bacteria from being a counterexample.",
      answer_cn: "它是光合细菌的叶绿素，教材只说其结构有所不同。它出现在这里，是因为「叶绿素a地位独特」这一论证依赖于它在**产氧**型光合生物中的普遍分布——这个括注正是把论断限定在这一类群内，使细菌不至于成为反例。" }
  ],

  "9-7": [
    { type: "mcq",
      q_en: "Absorption in the red 640–700 nm band puts the electron into which state, and why is that the usable one?",
      q_cn: "640–700 nm红光区的吸收把电子送入哪个状态？为何这个状态才是可用的？",
      options: [
        "The 2nd singlet excited state, which is short-lived",
        "The 1st singlet excited state, which lives long enough for the subsequent redox reactions to start",
        "An excited state of the accessory pigments, which then passes the energy on",
        "Directly into photooxidation of P, with no excited state in between"
      ],
      answer: 1,
      optionRefs: { 0: "9-7", 2: "9-8", 3: "9-11" },
      optionNotes: {
        0: { en: "That is what the blue 415–440 nm band produces, and its short lifetime is exactly why that band is not significant for photosynthesis.", cn: "那是415–440 nm蓝光带所产生的状态，其寿命之短正是该吸收带对光合作用不重要的原因。" },
        2: { en: "Accessory pigments do absorb and pass their excitation energy on to chlorophyll a, but that is a separate mechanism from which singlet state a chlorophyll reaches.", cn: "辅助色素确实吸收光并把激发能传给叶绿素a，但那是另一套机制，与叶绿素到达哪个单线态是两回事。" },
        3: { en: "Photooxidation of P is preceded by excitation: the sequence is P →(hv) P*, then P* + A₁ → P⁺ + A₁⁻.", cn: "P的光氧化之前必先有激发：顺序是 P →(hv) P*，然后 P* + A₁ → P⁺ + A₁⁻。" }
      },
      why_en: "The whole distinction between a useful and a useless absorption band is excited-state lifetime. Red light reaches the 1st singlet state, which persists long enough to be used; blue light reaches the 2nd, which decays first. The 'useless' photons are the more energetic ones, which is the counter-intuitive part.",
      why_cn: "「有用」与「无用」吸收带之间的全部区别在于激发态寿命。红光到达第1单线态，它存续得足够久以供利用；蓝光到达第2单线态，它先一步衰变掉。被浪费的恰恰是能量更高的那些光子，这正是反直觉之处。" },
    { type: "mcq",
      q_en: "What does the book note about the absorption spectra of chlorophyll a and chlorophyll b, and how does it account for it?",
      q_cn: "关于叶绿素a与叶绿素b的吸收光谱，教材注意到了什么？又如何解释？",
      options: [
        "They are strikingly similar in both shape and band position, which follows from their single-substituent difference",
        "b absorbs where a does not, filling the green gap in the middle of the visible range",
        "b has only the blue band and lacks the red one",
        "b is shifted far into the infrared relative to a"
      ],
      answer: 0,
      optionRefs: { 1: "9-8", 2: "9-7" },
      optionNotes: {
        1: { en: "Filling the middle of the visible range is the job of the carotenoids and, in cyanobacteria and red algae, the phycobilins — not of chlorophyll b.", cn: "填补可见光谱中段是类胡萝卜素的活儿，在蓝细菌与红藻中则是藻胆素的活儿——不是叶绿素b的。" },
        2: { en: "Both chlorophylls have both bands: 415–440 nm and 640–700 nm. Only the red one is photosynthetically significant.", cn: "两种叶绿素都有两条吸收带：415–440 nm与640–700 nm。其中只有红光那条对光合作用重要。" },
        3: { en: "Nothing in the node places any chlorophyll band beyond 700 nm; Obr. 9.3 is plotted over 400–700 nm.", cn: "本节点没有把任何叶绿素吸收带放到700 nm以外；图9.3绘制的范围是400–700 nm。" }
      },
      why_en: "Structure and spectrum track each other: a and b differ by one substituent on ring II, so their spectra differ hardly at all — same two bands, same shape, nearly the same positions. Obr. 9.3 plots them separately so that the similarity can be seen.",
      why_cn: "结构与光谱是彼此对应的：a与b只差环II上的一个取代基，所以它们的光谱几乎没有差别——同样的两条带、同样的形状、位置也几乎相同。图9.3把二者分开绘制，正是为了让这种相似性看得出来。" },
    { type: "short",
      q_en: "Blue photons carry more energy than red ones, yet the blue band is useless for photosynthesis. What is the actual constraint?",
      q_cn: "蓝光光子比红光光子携带更多能量，可蓝光吸收带对光合作用却毫无用处。真正的制约是什么？",
      accept: ["lifetime", "too short", "2nd singlet", "decay", "redox reactions"],
      answer_en: "Excited-state lifetime, not photon energy. The 415–440 nm band excites electrons into the 2nd singlet state, whose lifetime is too short for the excitation to be used to start the subsequent oxidation–reduction reactions; the energy is lost before any chemistry can begin. Only the 1st singlet state, reached from the red band, lasts long enough.",
      answer_cn: "制约在于激发态寿命，而不是光子能量。415–440 nm的吸收带把电子激发到第2单线态，该态寿命太短，这份激发来不及用来启动后续的氧化还原反应；化学反应还没开始，能量就已经散掉了。只有由红光带到达的第1单线态才存续得足够久。" }
  ],

  "9-8": [
    { type: "mcq",
      q_en: "In which organisms does the book place the biliproteins (phycobilins) as accessory pigments?",
      q_cn: "教材把胆蛋白（藻胆素）作为辅助色素放在哪些生物中？",
      options: [
        "In higher plants only",
        "In cyanobacteria and red algae",
        "In the anoxygenic photosynthetic bacteria",
        "In every photosynthetic organism, as the obligatory pigments"
      ],
      answer: 1,
      optionRefs: { 0: "9-8", 2: "9-2", 3: "9-6" },
      optionNotes: {
        0: { en: "In higher plants the accessory role falls to other chlorophylls and to the carotenoids; the book names no biliproteins there.", cn: "在高等植物中，辅助角色由其他叶绿素和类胡萝卜素承担；教材没有在那里点出胆蛋白。" },
        2: { en: "The book says only that the photosynthetic apparatus of phototrophic bacteria is somewhat different, and later that they work with one photosystem; the biliproteins are attributed to cyanobacteria and red algae.", cn: "教材只说光合细菌的光合装置有所不同，后文又说它们只用一个光系统；胆蛋白则被归给蓝细菌与红藻。" },
        3: { en: "The obligatory pigments are the chlorophylls. Accessory-pigment membership is exactly what varies from organism to organism.", cn: "必备色素是叶绿素。辅助色素的成员构成恰恰是因生物而异的那一部分。" }
      },
      why_en: "The biliproteins extend the photosynthetically effective radiation into the blue and the red, and Obr. 9.4 shows phycoerythrin and phycocyanin occupying the 500–650 nm middle ground where the chlorophylls are weakest. Which accessory pigments an organism carries is in effect a statement about what light reaches it.",
      why_cn: "胆蛋白把光合有效辐射拓展到蓝光与红光区，图9.4显示藻红蛋白与藻蓝蛋白占据了500–650 nm这一叶绿素最弱的中段。一种生物携带哪些辅助色素，实际上就是在说什么样的光能照到它。" },
    { type: "mcq",
      q_en: "Which pigments does the book assign to the yellow-green part of the spectrum?",
      q_cn: "教材把光谱中黄绿部分的辐射分派给哪些色素？",
      options: [
        "The carotenoids",
        "The phycobilins",
        "Chlorophyll b",
        "The reaction-centre chlorophyll a"
      ],
      answer: 0,
      optionRefs: { 1: "9-8", 2: "9-7", 3: "9-11" },
      optionNotes: {
        1: { en: "The book credits the biliproteins with extending the effective radiation into the blue and the red regions.", cn: "教材把「把光合有效辐射拓展到蓝光与红光区」这一功劳记在胆蛋白名下。" },
        2: { en: "Chlorophyll b's spectrum is strikingly similar to a's in shape and position, so it adds very little new coverage.", cn: "叶绿素b的光谱在形状与位置上都与a惊人地相似，因此它几乎没有增加新的覆盖范围。" },
        3: { en: "Reaction-centre chlorophyll a is the energy transformer, not a spectral gap-filler; the accessory pigments feed it.", cn: "反应中心叶绿素a是能量转换者，而不是补光谱缺口的；辅助色素是给它供料的。" }
      },
      why_en: "Carotenoids supplement the radiation in the yellow-green, which is precisely the region where both chlorophylls absorb weakest and where solar output is strong. Obr. 9.4 overlays all the curves against the solar envelope and concludes that together they cover practically the whole visible spectrum.",
      why_cn: "类胡萝卜素补充黄绿部分的辐射，而那恰好是两种叶绿素吸收最弱、太阳输出却很强的区域。图9.4把所有曲线叠加在太阳光谱包络上，得出的结论是：它们合起来几乎覆盖了整个可见光谱。" },
    { type: "short",
      q_en: "Give the three names the book uses for this class of pigment, and state the one thing they never do.",
      q_cn: "说出教材为这一类色素使用的三个名称，并指出它们从不做的那一件事。",
      accept: ["auxiliary", "accessory", "supplementary", "photochemical", "oxidized"],
      answer_en: "Auxiliary, accessory and supplementary — three names for the same class. What they never do is the photochemistry: they capture quanta of the incident radiation and transfer their excitation energy to chlorophyll a in the reaction centre, but they themselves are not oxidized and perform no primary photochemical act.",
      answer_cn: "辅助、附属、补充——同一类色素的三个名称。它们从不做的是光化学：它们捕获入射辐射的量子、把自身的激发能传给反应中心的叶绿素a，但它们自己不被氧化，也不执行任何初级光化学作用。" }
  ],

  "9-9": [
    { type: "mcq",
      q_en: "What is notable about the composition of the oxygen-evolving complex in a membrane otherwise full of pigments?",
      q_cn: "在一层原本满是色素的膜中，放氧复合体的组成有何值得注意之处？",
      options: [
        "It is built from a specific set of NON-pigmented proteins — the water-splitting machinery carries no chlorophyll",
        "It contains the highest concentration of chlorophyll a in the thylakoid",
        "It is a copper protein, like plastocyanin",
        "It sits on the stroma side of the membrane"
      ],
      answer: 0,
      optionRefs: { 1: "9-11", 2: "9-9", 3: "9-13" },
      optionNotes: {
        1: { en: "The chlorophyll of PS II that does chemistry is P₆₈₀ in the reaction centre; the antenna holds the bulk of the chlorophyll, roughly 200 molecules per RC molecule.", cn: "PSII中真正做化学反应的叶绿素是反应中心的P₆₈₀；绝大部分叶绿素在天线中，约为每个反应中心分子对应200个。" },
        2: { en: "The copper protein of the thylakoid is plastocyanin, blue-coloured, with a broad maximum near 597 nm and E°′ = 370 mV.", cn: "类囊体中的铜蛋白是质体蓝素，呈蓝色，宽吸收峰近597 nm，E°′ = 370 mV。" },
        3: { en: "Photolysis of water takes place at the INNER surface of the thylakoids; it is NADP⁺ reduction and the ATP-synthase knob that face outwards.", cn: "水的光解发生在类囊体的**内**表面；朝外的是NADP⁺的还原与ATP合酶的头部。" }
      },
      why_en: "The book flags the OEC as a specific set of non-pigmented proteins, which is worth noticing precisely because everything around it is a pigment-protein complex. The chemistry of splitting water is done by protein and metal, not by chlorophyll.",
      why_cn: "教材特意点明OEC是一组专门的非色素蛋白，而这一点之所以值得注意，正因为它周围的一切都是色素蛋白复合体。裂解水的化学是由蛋白和金属完成的，不是由叶绿素完成的。" },
    { type: "mcq",
      q_en: "Which metal does plastocyanin carry, and what colour is the protein?",
      q_cn: "质体蓝素携带哪种金属？该蛋白是什么颜色？",
      options: [
        "Mg²⁺, green",
        "Non-haem-bound Fe, colourless",
        "Cu²⁺, blue",
        "Mo together with Fe, yellow"
      ],
      answer: 2,
      optionRefs: { 0: "9-6", 1: "9-10", 3: "9-23" },
      optionNotes: {
        0: { en: "Mg at the centre of a porphyrin is chlorophyll; that is a pigment, not an electron carrier protein.", cn: "卟啉中心的Mg属于叶绿素；那是色素，不是电子载体蛋白。" },
        1: { en: "A protein with non-haem-bound Fe atoms is the FeS of Obr. 9.5's legend — a different carrier in the same chain.", cn: "含非血红素结合铁原子的蛋白是图9.5图注中的FeS——同一条链上的另一种载体。" },
        3: { en: "Mo plus non-haem Fe is the make-up of nitrogenase; Mo, Fe and FAD together belong to nitrate reductase.", cn: "Mo加非血红素Fe是固氮酶的组成；Mo、Fe与FAD三者并存的是硝酸还原酶。" }
      },
      why_en: "Plastocyanin is the one carrier of the thylakoid chain with no counterpart in the inner mitochondrial membrane: Mr 1–2 × 10⁴, a broad absorption maximum around 597 nm, E°′ (pH 7) = 370 mV, containing Cu²⁺, blue-coloured. Everything else — quinones, cytochromes, Fe-S proteins, flavoproteins — is carried straight over from chapter 6.",
      why_cn: "质体蓝素是类囊体传递链中唯一在线粒体内膜里找不到对应物的载体：Mr为1–2×10⁴，宽吸收峰约597 nm，E°′（pH 7）= 370 mV，含Cu²⁺，呈蓝色。其余的一切——醌类、细胞色素、Fe-S蛋白、黄素蛋白——都是从第6章直接搬过来的。" },
    { type: "short",
      q_en: "Which electron and proton carriers does the thylakoid membrane share with the inner mitochondrial membrane?",
      q_cn: "类囊体膜与线粒体内膜共有哪些电子与质子载体？",
      accept: ["quinone", "cytochrome", "Fe-S", "flavoprotein", "NADP"],
      answer_en: "Quinones, cytochromes, Fe-S proteins, flavoproteins, and a nicotinamide nucleotide in its oxidized or reduced form — here NADP rather than NAD. The book describes these as analogous to the carriers of kap. 6.2.4, which is why most of the respiratory-chain vocabulary carries straight over into this chapter.",
      answer_cn: "醌类、细胞色素、Fe-S蛋白、黄素蛋白，以及处于氧化态或还原态的烟酰胺核苷酸——此处是NADP而非NAD。教材说这些载体与第6.2.4节中的相类似，这正是呼吸链的大部分词汇能直接搬进本章的原因。" }
  ]

});

Object.assign(window.BIOCHEM.bank, {

  "9-10": [
    { type: "mcq",
      q_en: "Which four components does the legend of Obr. 9.5 call integral pigment-protein complexes of the thylakoid membrane?",
      q_cn: "图9.5的图注把哪四个组分称为类囊体膜的整合型色素蛋白复合体？",
      options: [
        "PS II, the cytochrome b₆f complex, PS I and CF₀",
        "PS II, the OEC, plastocyanin and ferredoxin",
        "P₆₈₀, P₇₀₀, pheophytin and plastoquinone",
        "The two photosystems only"
      ],
      answer: 0,
      optionRefs: { 1: "9-9", 2: "9-11", 3: "9-13" },
      optionNotes: {
        1: { en: "The OEC is a set of non-pigmented proteins, and plastocyanin and ferredoxin are carriers that move between complexes rather than spanning the bilayer.", cn: "OEC是一组非色素蛋白，而质体蓝素与铁氧还蛋白是在复合体之间移动的载体，并不贯穿双层膜。" },
        2: { en: "These are pigments and carriers sitting inside or alongside the complexes — P₆₈₀ and P₇₀₀ are the reaction-centre pigments, Pheo is chlorophyll without Mg, Q is plastoquinone.", cn: "这些是位于复合体内部或旁侧的色素与载体——P₆₈₀与P₇₀₀是反应中心色素，Pheo是去掉Mg的叶绿素，Q是质体醌。" },
        3: { en: "Both photosystems are integral complexes, but so are the cytochrome b₆f complex and the CF₀ part of the ATP-synthase.", cn: "两个光系统确实都是整合复合体，但细胞色素b₆f复合体和ATP合酶的CF₀部分也是。" }
      },
      why_en: "Four complexes span the bilayer, in the order the figure draws them: PS II, cytochrome b₆f, PS I, and the ATP-synthase whose membrane portion is CF₀ and whose knob CF₁ protrudes into the stroma. Everything else in the scheme either sits within one of them or shuttles between them.",
      why_cn: "有四个复合体贯穿双层膜，按图中所画的顺序是：PSII、细胞色素b₆f、PSI，以及ATP合酶——其膜内部分为CF₀、头部CF₁朝基质凸出。图中其余的一切要么位于其中某个复合体之内，要么在它们之间穿梭。" },
    { type: "mcq",
      q_en: "What do Q_A, Q_B and Q/QH₂ stand for in the legend of Obr. 9.5?",
      q_cn: "在图9.5的图注中，Q_A、Q_B与Q/QH₂代表什么？",
      options: [
        "Oxidized and reduced molecules of plastoquinone",
        "The quinone-containing cytochromes of the b₆f complex",
        "The two electron acceptors within PS I",
        "The ubiquinone pool of the respiratory chain"
      ],
      answer: 0,
      optionRefs: { 1: "9-10", 2: "9-10", 3: "6-2-4-3" },
      optionNotes: {
        1: { en: "In the legend cyt simply means cytochromes; the cytochrome b₆f complex is a separate entry from the quinones.", cn: "图注中cyt就是指细胞色素；细胞色素b₆f复合体在图注里是与醌类分开列出的一项。" },
        2: { en: "The acceptors inside PS I are labelled A₀ and A₁; ferredoxin (Fd) takes the electron on from there.", cn: "PSI内部的受体标为A₀与A₁；再由铁氧还蛋白(Fd)把电子接走。" },
        3: { en: "The mitochondrial quinone pool is the analogous carrier one membrane over — the thylakoid's is plastoquinone.", cn: "线粒体的醌库是隔壁那层膜上与之类似的载体——类囊体上对应的是质体醌。" }
      },
      why_en: "Q_A and Q_B are the bound plastoquinones on the acceptor side of PS II and Q/QH₂ the oxidized/reduced mobile pool. Plastoquinone is hydrophobic and mobile, and it turns out to be the species that physically carries protons across the membrane rather than merely passing electrons along.",
      why_cn: "Q_A与Q_B是PSII受体侧结合的质体醌，Q/QH₂则是氧化/还原态的可移动醌库。质体醌是疏水且可移动的，而它正是那个在物理上把质子搬过膜、而不只是沿链传电子的物种。" },
    { type: "short",
      q_en: "Reading Obr. 9.5 as a process: where is O₂ released, and where is NADPH formed?",
      q_cn: "把图9.5作为一个过程来读：O₂在哪里释放？NADPH在哪里生成？",
      accept: ["lumen", "PS II", "stroma", "ferredoxin", "NADP"],
      answer_en: "O₂ is released at the lumen face of PS II, where the OEC splits 2 H₂O and puts 4H⁺ into the lumen together with one O₂. NADPH is formed on the stroma face beyond PS I, where ferredoxin hands its electrons to Fd-NADP⁺ reductase for 2H⁺ + 2NADP⁺ → 2NADPH. The two ends of the chain therefore face opposite sides of the membrane.",
      answer_cn: "O₂在PSII的腔侧释放：OEC在那里裂解2个H₂O，把4H⁺送进内腔，同时放出1个O₂。NADPH则在PSI之外的基质面生成：铁氧还蛋白把电子交给Fd-NADP⁺还原酶，完成2H⁺ + 2NADP⁺ → 2NADPH。因此这条链的两端分别朝向膜的两侧。" }
  ],

  "9-11": [
    { type: "mcq",
      q_en: "What happens during the transfer of energy between molecules of the light-harvesting antenna?",
      q_cn: "在捕光天线各分子之间传递能量的过程中，发生了什么？",
      options: [
        "Each antenna chlorophyll is oxidized in turn and re-reduced by the next",
        "No charge separation occurs at all — the antenna pigments are never oxidized and only pass the excitation energy inwards",
        "A small charge separation occurs at every transfer step, adding up along the chain",
        "Electrons are handed from pigment to pigment towards the reaction centre"
      ],
      answer: 1,
      optionRefs: { 0: "9-12", 2: "9-12", 3: "9-12" },
      optionNotes: {
        0: { en: "Being photooxidized is the privilege of the reaction-centre chlorophyll, and it comes from its microenvironment in the pigment-protein complex, not from the molecule itself.", cn: "被光氧化是反应中心叶绿素的特权，而这来自它在色素蛋白复合体中的微环境，不是分子本身的性质。" },
        2: { en: "Charge separation happens once, in the reaction centre, when P* gives an electron to A₁ — and it is oriented across the membrane, which is what makes it useful.", cn: "电荷分离只发生一次，在反应中心，当P*把一个电子交给A₁时——而且它是跨膜定向的，正因如此才有用。" },
        3: { en: "What travels through the antenna is excitation energy, not electrons; the book notes that physical rather than chemical descriptions apply to this transfer.", cn: "在天线中传递的是激发能而不是电子；教材指出，对这种传递适用的是物理学而非化学的描述方式。" }
      },
      why_en: "The antenna is roughly 199 of every 200 chlorophyll molecules, and none of them does any chemistry. They absorb photons and funnel the excitation energy towards the reaction centre, and the book says explicitly that in this transfer no charge separation occurs.",
      why_cn: "天线约占每200个叶绿素分子中的199个，而它们一个都不做化学反应。它们吸收光子，把激发能漏斗式汇向反应中心，教材明确指出在这种传递中不发生电荷分离。" },
    { type: "mcq",
      q_en: "An excited chlorophyll could fluoresce or release its energy as heat. What does the book's appeal to the high quantum yield establish?",
      q_cn: "受激发的叶绿素本可以发出荧光或把能量以热放掉。教材诉诸高量子产额，是要确立什么？",
      options: [
        "That fluorescence and heat loss are impossible inside an intact reaction centre",
        "That electron donation to A₁ is strongly preferred over the alternatives in the intact system, though the alternatives still exist",
        "That electron donation is the only thermodynamically allowed route",
        "That the antenna pigments re-absorb any fluorescence emitted"
      ],
      answer: 1,
      optionRefs: { 0: "9-7", 2: "6-1-1" },
      optionNotes: {
        0: { en: "The alternative routes are always available; the point is that they lose the competition, which is a functional claim, not an impossibility claim.", cn: "其他去激发途径始终存在；要点在于它们在竞争中落败，这是关于功能的论断，而不是说它们不可能发生。" },
        2: { en: "Thermodynamic allowedness is a different question from which route wins kinetically; the book's argument here is about yield in the intact system.", cn: "「热力学上允许」与「动力学上哪条路胜出」是两个问题；教材此处的论证针对的是完整系统中的产额。" },
        3: { en: "Nothing in the node describes re-absorption of fluorescence; the antenna's role is to absorb incident light and pass the energy inwards.", cn: "本节点没有描述对荧光的再吸收；天线的作用是吸收入射光并把能量向内传递。" }
      },
      why_en: "The high quantum yield in an intact photosynthetic system means that in the RC this route of de-excitation is strongly preferred over fluorescence or conversion into heat. That is a statement about competition, not about what is possible — damage the system and the light comes back out as fluorescence.",
      why_cn: "完整光合系统中的高量子产额意味着，在反应中心内这条去激发途径远比荧光或转化为热更受偏好。这是关于竞争的陈述，而不是关于什么可能发生——系统一旦受损，光就会以荧光的形式跑出来。" },
    { type: "short",
      q_en: "Why are the reaction-centre pigments named P₆₈₀, P₇₀₀ and P₈₇₀ — that is, what makes such a naming convention possible at all?",
      q_cn: "反应中心色素为何被命名为P₆₈₀、P₇₀₀与P₈₇₀——也就是说，这种命名方式为什么行得通？",
      accept: ["absorption maximum", "wavelength", "oxidation", "spectrum", "870"],
      answer_en: "Because oxidation of P changes its absorption spectrum, the RC pigment can be identified spectroscopically and is therefore designated by the wavelength of its absorption maximum: P₈₇₀ in bacteria, P₆₈₀ and P₇₀₀ for PS II and PS I in oxygenic photosynthesis. Chemically these are ordinary chlorophylls; the number is a spectroscopic label, not a different structure.",
      answer_cn: "因为P被氧化时其吸收光谱会改变，反应中心色素便可用光谱手段辨认出来，于是就以其吸收最大值的波长来命名：细菌中的P₈₇₀，产氧光合作用中对应PSII与PSI的P₆₈₀和P₇₀₀。就化学而言它们只是普通叶绿素；那个数字是光谱标签，不代表结构不同。" }
  ],

  "9-12": [
    { type: "mcq",
      q_en: "What does the book's definition of a photosystem include?",
      q_cn: "教材对光系统的定义包含哪些内容？",
      options: [
        "The reaction centre alone",
        "The reaction centre plus its nearest electron acceptors and donors, the corresponding binding proteins, and the light-harvesting pigments",
        "The reaction centre together with the oxygen-evolving complex",
        "The whole thylakoid membrane with all four of its integral complexes"
      ],
      answer: 1,
      optionRefs: { 0: "9-10", 2: "9-9", 3: "9-10" },
      optionNotes: {
        0: { en: "The RC is where the account begins, but a photosystem is the RC plus everything immediately serving it.", cn: "反应中心是叙述的起点，但一个光系统是反应中心加上一切直接为其服务的组分。" },
        2: { en: "The OEC belongs to PS II specifically, and it is a set of non-pigmented proteins; it is not part of the general definition of a photosystem.", cn: "OEC专属于PSII，而且是一组非色素蛋白；它不属于光系统的一般定义。" },
        3: { en: "The membrane holds four integral complexes — PS II, cytochrome b₆f, PS I and CF₀ — of which only two are photosystems.", cn: "膜上有四个整合复合体——PSII、细胞色素b₆f、PSI与CF₀——其中只有两个是光系统。" }
      },
      why_en: "A photosystem is the functional unit around one reaction centre: the RC, the acceptors and donors nearest to it, the proteins that hold them in position, and the antenna that feeds it energy. Defining it this way is what makes the abstract A₁/A₂/D₂ notation and the concrete chain of Obr. 9.5 the same object.",
      why_cn: "光系统是围绕一个反应中心的功能单元：反应中心、离它最近的受体与供体、把它们固定在位的蛋白，以及给它输送能量的天线。这样定义之后，抽象的A₁/A₂/D₂记号与图9.5中具体的传递链才成为同一个东西。" },
    { type: "mcq",
      q_en: "The two stabilising reactions A₁⁻ + A₂ → A₁ + A₂⁻ and D₂ + P⁺ → D₂⁺ + P serve one common purpose. Which?",
      q_cn: "A₁⁻ + A₂ → A₁ + A₂⁻ 与 D₂ + P⁺ → D₂⁺ + P 这两个稳定化反应服务于同一个共同目的。是哪一个？",
      options: [
        "To synthesize ATP directly from the separated charges",
        "To move the two separated charges further apart, faster than they can recombine",
        "To reduce NADP⁺ at the end of the chain",
        "To re-excite P so that it can absorb a second photon"
      ],
      answer: 1,
      optionRefs: { 0: "9-14", 2: "9-13", 3: "9-11" },
      optionNotes: {
        0: { en: "ATP is made much later, by the ATP-synthase discharging the ΔpH that the electron flow builds up.", cn: "ATP要晚得多才生成，由ATP合酶释放电子流所建立的ΔpH来完成。" },
        2: { en: "Reduction of NADP⁺ is the end point of linear flow, done by the photosystem the book defines as PS I; it is not what these two stabilising steps are for.", cn: "NADP⁺的还原是线性电子流的终点，由教材定义为PSI的那个光系统完成；它不是这两个稳定化步骤的用途。" },
        3: { en: "Re-excitation requires another photon at P → P*; refilling P⁺ from D₂ restores the ground-state pigment rather than exciting it.", cn: "再次激发需要在P → P*处另有一个光子；由D₂填补P⁺恢复的是基态色素，而不是把它激发起来。" }
      },
      why_en: "A charge separation in free solution simply recombines. Pulling the electron onward to a secondary acceptor and refilling the hole in P⁺ from a secondary donor both increase the distance between the two charges, and because the photosystem is an oriented integral complex, that separation ends up spanning the membrane.",
      why_cn: "自由溶液中的电荷分离转眼就会复合。把电子往下拉给次级受体、并由次级供体填补P⁺上的空缺，这两个动作都在加大两个电荷之间的距离；而由于光系统是定向的整合复合体，这种分离最终是跨越整层膜的。" },
    { type: "short",
      q_en: "Distinguish the 'initial donor' of the whole electron transport chain from the 'primary donor' of a photosystem.",
      q_cn: "请区分整条电子传递链的「初始供体」与某个光系统的「初级供体」。",
      accept: ["water", "P in the RC", "reaction centre", "secondary", "D2"],
      answer_en: "The initial donor of the whole chain is the water molecules, and the final acceptor is NADP⁺. Within a photosystem, however, the primary donor is the pigment P in the reaction centre itself — the book says this in a parenthesis that is easy to lose — and D₂, the preceding member of the transport chain, is only the SECONDARY donor. Getting these two the wrong way round makes the whole A/D notation incoherent.",
      answer_cn: "整条链的初始供体是水分子，最终受体是NADP⁺。但在一个光系统内部，初级供体是反应中心中的色素P本身——教材是在一句容易被忽略的括注里说的——而传递链前一成员D₂只是**次级**供体。把这两者弄反，整套A/D记号就不自洽了。" }
  ],

  "9-13": [
    { type: "mcq",
      q_en: "A chloroplast needs more ATP but has enough NADPH. Which route does the book say produces ATP and nothing else?",
      q_cn: "叶绿体需要更多ATP，但NADPH已经够用。教材说哪条路线只产生ATP、别的什么都不产？",
      options: [
        "Linear electron flow through both photosystems",
        "Cyclic electron flow, running through PS I between ferredoxin and the plastoquinones",
        "Photorespiration",
        "The C-4 acceptor cycle"
      ],
      answer: 1,
      optionRefs: { 0: "9-13", 2: "9-20", 3: "9-21" },
      optionNotes: {
        0: { en: "Linear flow runs water to NADP⁺ through two photosystems in series and yields NADPH and O₂ as well as ATP.", cn: "线性电子流经两个串联的光系统从水流向NADP⁺，除ATP之外还产生NADPH与O₂。" },
        2: { en: "Photorespiration consumes O₂ and competes with the Calvin cycle for RuBP; it is not an ATP source.", cn: "光呼吸消耗O₂，并与卡尔文循环争夺RuBP；它不是ATP的来源。" },
        3: { en: "The C-4 cycle spends ATP, at pyruvate phosphate dikinase, rather than making it.", cn: "C-4循环是在丙酮酸磷酸双激酶那一步**花掉**ATP，而不是制造ATP。" }
      },
      why_en: "If the electrons return to the reaction centre instead of ending on NADP⁺, the only result is the formation of ATP — cyclic electron flow, also called cyclic photophosphorylation. No NADPH and no O₂ come out of it, so it is the route that tops up ATP alone without touching water.",
      why_cn: "如果电子返回反应中心而不是终止于NADP⁺，唯一的结果就是生成ATP——这就是循环电子流，也叫循环光合磷酸化。它既不产生NADPH也不产生O₂，因此是那条「只补ATP、完全不动水」的路线。" },
    { type: "mcq",
      q_en: "On the redox-potential version of the Z-scheme, where do the two couples sit?",
      q_cn: "在Z方案的氧化还原电位版本中，两个电对各位于什么位置？",
      options: [
        "Oxidants at the bottom, O₂/H₂O at 820 mV; reductants at the top, NADP⁺/NADPH at −320 mV",
        "Oxidants at the top at −320 mV; reductants at the bottom at 820 mV",
        "Both couples at the top, since both are reduced by light",
        "Neither — the scheme can only be plotted against Gibbs energy"
      ],
      answer: 0,
      optionRefs: { 1: "6-2-1-1", 3: "9-13" },
      optionNotes: {
        2: { en: "The two couples sit at opposite ends of the axis, and the vertical distance between them is precisely the electromotive work the two photons have to do.", cn: "两个电对位于坐标轴的两端，它们之间的垂直距离恰恰就是那两个光子必须完成的电动做功。" },
        1: { en: "Both the placement and the values are swapped here. O₂/H₂O at +820 mV is the oxidant couple and sits at the bottom; NADP⁺/NADPH at −320 mV is the reductant couple at the top.", cn: "这里位置和数值都被对调了。O₂/H₂O为+820 mV，是氧化剂电对，位于下方；NADP⁺/NADPH为−320 mV，是还原剂电对，位于上方。" },
        3: { en: "The book gives BOTH versions: on the ΔG scale the exergonic steps are dashed and the endergonic ones are precisely the reaction-centre events that photons pay for.", cn: "教材给出了**两种**版本：在ΔG坐标上，放能步骤画作虚线，而吸能的那些恰恰是由光子买单的反应中心事件。" }
      },
      why_en: "The Z gets its shape from this axis: you start low at the O₂/H₂O couple, a photon lifts you steeply at PS II, you slide back down through the carriers, a second photon lifts you again at PS I, and you finish high at NADP⁺/NADPH. The vertical distance between 820 mV and −320 mV is the work the two photons have to do.",
      why_cn: "Z形正是从这个坐标轴来的：起点在下方的O₂/H₂O电对，一个光子在PSII处把你陡然抬起，你顺着载体滑下来，第二个光子在PSI处再抬一次，终点在上方的NADP⁺/NADPH。820 mV与−320 mV之间的垂直距离，就是那两个光子必须完成的功。" },
    { type: "short",
      q_en: "Why is linear electron flow drawn as a lying letter Z rather than as one continuous slope?",
      q_cn: "线性电子流为何被画成一个横倒的字母Z，而不是一条连续的斜坡？",
      accept: ["two photosystems", "two photoreactions", "in series", "reaction centre", "endergonic"],
      answer_en: "Because there are two photoreactions, i.e. two photosystems in series, and each of them is an endergonic jump upwards paid for by a photon, separated by an exergonic run downhill through the carriers. One photon cannot carry an electron from the O₂/H₂O couple all the way up to NADP⁺/NADPH; two lifts with a descent between them is exactly the shape of a lying Z.",
      answer_cn: "因为这里有两次光反应，即两个光系统串联，每一次都是由光子买单的吸能跃升，中间隔着沿载体下行的放能过程。单个光子无法把电子从O₂/H₂O电对一路抬到NADP⁺/NADPH；两次抬升、中间夹一段下滑，画出来正好是一个横倒的Z。" }
  ],

  "9-14": [
    { type: "mcq",
      q_en: "Where does the knob of the thylakoid ATP-synthase protrude, and which way does it pass protons?",
      q_cn: "类囊体ATP合酶的头部朝哪一侧凸出？它让质子朝哪个方向通过？",
      options: [
        "Into the lumen, passing protons from the stroma inwards",
        "Onto the outer surface, passing protons from inside out — the mirror image of the mitochondrial arrangement",
        "Onto the outer surface, passing protons from outside in",
        "It has no knob; the thylakoid enzyme is entirely membrane-embedded"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-4-5", 2: "9-14", 3: "9-10" },
      optionNotes: {
        0: { en: "That is the reversal the book is warning against — the thylakoid arrangement is the opposite of the mitochondrial one in both knob orientation and pumping direction.", cn: "这正是教材要提醒你别弄反的地方——类囊体的安排在头部取向和泵送方向两方面都与线粒体相反。" },
        2: { en: "Half right: the knob does face outwards, but protons are pumped INTO the lumen by the redox reactions and leave through the synthase, not the other way round.", cn: "对了一半：头部确实朝外，但质子是被氧化还原反应泵**进**内腔的，再经合酶离开，而不是反过来。" },
        3: { en: "Obr. 9.5 draws the enzyme as CF₀ in the membrane and CF₁ as a knob; the book even calls the knobs by their Czech name, paličky.", cn: "图9.5把该酶画成膜内的CF₀加作为头部的CF₁；教材甚至用捷克语paličky来称呼这些头部。" }
      },
      why_en: "Both reversals are consistent with each other. In the photosynthetic redox reactions protons move from outside INWARDS into the thylakoid, so the lumen is where they accumulate; the synthase therefore lets them out again, with its CF₁ knob on the stromal side. The book attributes the reversal to how the two membranes evolved and enclosed themselves.",
      why_cn: "两处反转彼此自洽。在光合氧化还原反应中，质子由外**向内**进入类囊体，所以积累的地方是内腔；因此合酶的作用是把它们再放出去，其CF₁头部位于基质一侧。教材把这种反转归因于两种膜各自的演化与自我封闭方式。" },
    { type: "mcq",
      q_en: "The book says the protons in the illuminated thylakoid are 'delocalised'. What does that mean?",
      q_cn: "教材说光照下类囊体中的质子是「离域的」。这是什么意思？",
      options: [
        "They accumulate throughout the whole inner space of the thylakoid rather than staying near the site where they were released",
        "They spread along the outer membrane surface without entering the lumen",
        "They are shared between the two photosystems",
        "The gradient is purely electrical, with no difference in H⁺ concentration"
      ],
      answer: 0,
      optionRefs: { 1: "9-13", 3: "9-14" },
      optionNotes: {
        1: { en: "At the outer surface the H⁺ concentration falls — that side is depleted, not the site of accumulation.", cn: "在外表面H⁺浓度是**下降**的——那一侧是被抽空的一侧，不是积累的地方。" },
        2: { en: "Sharing between photosystems is not what delocalisation means; both photosystems feed the same lumen pool.", cn: "「在两个光系统之间共享」不是离域的意思；两个光系统供给的是同一个内腔质子库。" },
        3: { en: "The book speaks of a transmembrane difference in H⁺ concentration and calls its energy the Gibbs energy of the ΔpH.", cn: "教材说的是跨膜的H⁺浓度差，并把它的能量称为ΔpH的吉布斯能。" }
      },
      why_en: "Delocalisation makes the gradient a bulk-phase property of the lumen: on illumination the proton concentration rises throughout the whole inner space while it falls at the outer surface. That is what allows one ATP-synthase to be driven by protons released anywhere along the membrane.",
      why_cn: "离域使这一梯度成为内腔整体相的性质：光照时整个内腔的质子浓度都升高，而外表面的浓度下降。正因如此，沿膜任何位置释放的质子都能驱动同一个ATP合酶。" },
    { type: "short",
      q_en: "Name the two ways the Gibbs energy of the ΔpH is used, and give the explanation the book offers for the reversed thylakoid orientation.",
      q_cn: "说出ΔpH的吉布斯能被利用的两种方式，并给出教材为类囊体反向取向所提供的解释。",
      accept: ["active transport", "ATP-synthase", "directly", "evolution", "constriction"],
      answer_en: "It is used either directly — for active transport, for example — or by the ATP-synthase, the last supramolecular thylakoid complex, built entirely of non-pigmented proteins. As for the reversal, the book says it lies in the evolution of membranes and their different 'constriction' and self-enclosure — offered as an explanation, not as a demonstrated mechanism, and worth repeating with that hedge intact.",
      answer_cn: "它或被直接利用——例如用于主动运输——或被ATP合酶利用，那是最后一个类囊体超分子复合体，完全由非色素蛋白构成。至于反向取向，教材说其根源在于膜的演化及其不同方式的「缢缩」与自我封闭——这是作为一种解释而非已证实的机制提出的，转述时应把这层保留一并带上。" }
  ],

  "9-15": [
    { type: "mcq",
      q_en: "In higher plants, where does the conversion CO₂ → C₆H₁₂O₆ take place and what does it require?",
      q_cn: "在高等植物中，CO₂ → C₆H₁₂O₆ 的转换发生在何处？需要什么？",
      options: [
        "In the thylakoid membrane, using the absorbed light directly",
        "In the chloroplasts, by a series of enzyme reactions requiring ATP and the coenzyme NADPH",
        "In the peroxisome, using NADH",
        "In the cytoplasm, using NADH"
      ],
      answer: 1,
      optionRefs: { 0: "9-14", 2: "9-20", 3: "9-25" },
      optionNotes: {
        0: { en: "The membrane's job is to make ATP and NADPH; the carbon reactions spend them, and no step in them absorbs a photon.", cn: "膜的任务是制造ATP与NADPH；碳反应是花掉它们，其中没有任何一步吸收光子。" },
        2: { en: "The peroxisome carries the middle section of photorespiration, including the NADH-dependent reduction of hydroxypyruvate to glycerate.", cn: "过氧化物酶体承担光呼吸的中段，包括由NADH完成的羟基丙酮酸→甘油酸还原。" },
        3: { en: "A cytoplasmic NADH-dependent reduction in this chapter is nitrate reductase, the NO₃⁻ → NO₂⁻ step.", cn: "本章中位于胞质、依赖NADH的还原反应是硝酸还原酶催化的NO₃⁻ → NO₂⁻这一步。" }
      },
      why_en: "The reactions following the photochemistry are summarised as one arrow: CO₂ →(chloroplast enzymes; NADPH, ATP) C₆H₁₂O₆, and in higher plants the whole thing happens in the chloroplast. The inputs, ATP and NADPH, are precisely the first stable products of the membrane reactions, which is why the two halves of photosynthesis are coupled by supply rather than by light.",
      why_cn: "光化学之后的那些反应用一个箭头概括：CO₂ →(叶绿体的酶；NADPH、ATP) C₆H₁₂O₆，在高等植物中这一切都发生在叶绿体内。它的输入——ATP与NADPH——恰好是膜反应的首批稳定产物，这正是光合作用两半通过「供给」而非通过「光」耦合在一起的原因。" },
    { type: "mcq",
      q_en: "According to the book's argument, how long would CO₂ fixation continue if the light were switched off?",
      q_cn: "按教材的论证，如果关掉光，CO₂固定还能持续多久？",
      options: [
        "Indefinitely, since none of its steps needs light",
        "Only as long as the supply of NADPH and ATP produced by the photosystems lasts",
        "Not at all, since one of its steps absorbs a photon",
        "Only while the stomata remain open"
      ],
      answer: 1,
      optionRefs: { 0: "9-15", 2: "9-11", 3: "9-22" },
      optionNotes: {
        0: { en: "This is exactly the misreading the book rejects when it refuses the term 'light-independent photosynthetic reaction'.", cn: "这正是教材在否定「不依赖光的光合反应」这一术语时所拒绝的误读。" },
        2: { en: "No step of CO₂ fixation is photochemical; the only strictly light-dependent reaction in photosynthesis is P →(hv) P*.", cn: "CO₂固定中没有任何一步是光化学的；光合作用中唯一严格依赖光的反应是 P →(hv) P*。" },
        3: { en: "Stomatal opening governs the CO₂ supply — the constraint that drives the C-4 strategy — not the ATP and NADPH supply the argument here turns on.", cn: "气孔开合决定的是CO₂的供应——那是驱动C-4策略的制约条件——而不是此处论证所依赖的ATP与NADPH供应。" }
      },
      why_en: "This is the sharper of the book's two terminological objections. CO₂ fixation is a downstream consumer of what the light reactions made; it runs in light or dark only for as long as that supply holds out. So 'not itself photochemical' is true, while 'independent of light' is false, and the difference between them is a matter of hours at most.",
      why_cn: "这是教材两条术语异议中更锐利的一条。CO₂固定是光反应产物的下游消费者；无论光下还是暗中，它能进行多久取决于那份供给还剩多少。所以「本身不是光化学的」成立，而「不依赖光」不成立，二者之差至多不过几小时。" },
    { type: "short",
      q_en: "Write out the summary arrow the book uses for this part of photosynthesis, including what is written over and under it.",
      q_cn: "写出教材为光合作用这一部分所使用的概括箭头，包括箭头上下写了什么。",
      accept: ["CO2", "chloroplast", "NADPH", "ATP", "C6H12O6"],
      answer_en: "CO₂ →(enzymy chloroplastu / chloroplast enzymes; NADPH, ATP) C₆H₁₂O₆. An inorganic compound becomes an organic one by a series of enzyme reactions that require ATP and the coenzyme NADPH, and the book calls the process fixation, or assimilation, of atmospheric carbon dioxide.",
      answer_cn: "CO₂ →(叶绿体的酶；NADPH、ATP) C₆H₁₂O₆。一个无机化合物经由一系列需要ATP与辅酶NADPH的酶促反应变成有机化合物，教材把这一过程称为大气二氧化碳的固定或同化。" }
  ]

});

Object.assign(window.BIOCHEM.bank, {

  "9-16": [
    { type: "mcq",
      q_en: "Who does the book credit with describing the reactions of CO₂ fixation, and what recognition does it record?",
      q_cn: "教材把CO₂固定各步反应的描述归功于谁？记录了什么荣誉？",
      options: [
        "M. Calvin, Nobel Prize 1961, together with A. A. Benson and J. A. Bassham",
        "M. Hatch and C. Slack, who described the four-carbon route",
        "Calvin alone, with Benson and Bassham describing photorespiration",
        "The discoverers of the citrate cycle, the pathway that receives the fixed carbon"
      ],
      answer: 0,
      optionRefs: { 1: "9-21", 2: "9-20", 3: "6-2-2-1" },
      optionNotes: {
        1: { en: "Hatch and Slack found that some plants fix CO₂ into four-carbon compounds — the C-4 route of §9.3, a different discovery.", cn: "Hatch与Slack发现某些植物把CO₂固定进四碳化合物——那是§9.3的C-4路线，是另一项发现。" },
        2: { en: "The book names no discoverer for photorespiration and in fact says its reasons are not yet entirely clear.", cn: "教材没有为光呼吸点出任何发现者，反而说它的原因尚不完全清楚。" },
        3: { en: "The citrate cycle is named here as the example of a central pathway that receives fixed carbon, not as the discovery being credited.", cn: "柠檬酸循环在此是作为「接收被固定碳的中心途径」的例子被提到的，不是此处所归功的那项发现。" }
      },
      why_en: "The pathway is often designated by its discoverers' names or, briefly, as the Calvin cycle. Keeping the three names together is useful for an oral exam, since the attribution and the Nobel year are exactly the sort of detail an examiner can check in one line.",
      why_cn: "这条途径常以发现者的名字命名，或简称卡尔文循环。把三个人名一起记住在口试中很有用，因为归属与诺贝尔奖年份正是考官一句话就能核对的那类细节。" },
    { type: "mcq",
      q_en: "Which pathway does the book give as its example of a central metabolic pathway that receives photosynthetically fixed carbon?",
      q_cn: "教材举哪条途径作为「接收光合固定碳」的中心代谢途径的例子？",
      options: [
        "β-oxidation of fatty acids",
        "The urea cycle",
        "The citrate cycle",
        "The glyoxylate cycle"
      ],
      answer: 2,
      optionRefs: { 0: "8-4-4-2", 1: "5-2-2-1", 3: "6-2-3" },
      optionNotes: {
        0: { en: "β-Oxidation degrades fatty acids; fixed carbon flows towards fatty acid and lipid biosynthesis, in the opposite direction.", cn: "β-氧化是降解脂肪酸；被固定的碳流向的是脂肪酸与脂质的生物合成，方向相反。" },
        1: { en: "The urea cycle disposes of nitrogen, not carbon, and belongs to the ammonia-detoxification material of chapter 5.", cn: "尿素循环处理的是氮而不是碳，属于第5章氨解毒的内容。" },
        3: { en: "The glyoxylate cycle is a real pathway in the course, but it is not the example the book gives here.", cn: "乙醛酸循环在本课程中确实存在，但不是教材在此处所举的例子。" }
      },
      why_en: "The greater part of the fixed carbon is not made into hexose, cellulose or starch at all: it is transported into the central metabolic pathways — the citrate cycle is the named example — and from there supplies energy and carbon skeletons for essentially every biosynthesis the plant performs.",
      why_cn: "被固定的碳中更大的一部分根本不会变成己糖、纤维素或淀粉：它被输送进中心代谢途径——教材点名的例子就是柠檬酸循环——并从那里为植物几乎所有的生物合成提供能量与碳骨架。" },
    { type: "short",
      q_en: "Name four classes of compound, other than saccharides, that the book says photosynthetically fixed carbon goes on to build.",
      q_cn: "除糖类之外，教材说被光合固定的碳还会去构建哪些化合物？请说出四类。",
      accept: ["amino acid", "protein", "fatty acid", "nucleotide", "pigment"],
      answer_en: "Amino acids and proteins; fatty acids and lipids; nucleotides and nucleic acids; pigments; and the secondary plant metabolites of §9.5. The breadth of that list is the whole point of the passage — photosynthesis is the plant's entire carbon supply, not merely its sugar factory.",
      answer_cn: "氨基酸与蛋白质；脂肪酸与脂质；核苷酸与核酸；色素；以及§9.5中的次生植物代谢物。这份清单之广正是该段落的要点所在——光合作用是植物全部碳的来源，而不只是一个制糖车间。" }
  ],

  "9-17": [
    { type: "mcq",
      q_en: "Which molecule does RubisCO actually activate at each of its active sites?",
      q_cn: "RubisCO在其每个活性位点上真正活化的是哪个分子？",
      options: [
        "CO₂, by converting it to HCO₃⁻",
        "RuBP, by converting it to a reactive enolate (endiolate) ion",
        "3-Phosphoglycerate, by phosphorylating it",
        "O₂, by binding it to the Mg of the active site"
      ],
      answer: 1,
      optionRefs: { 0: "9-22", 2: "9-18", 3: "9-20" },
      optionNotes: {
        0: { en: "Conversion of CO₂ to bicarbonate by carbonate dehydratase does happen in this chapter — but in the C-4 mesophyll cell, ahead of PEP-carboxylase, not at RubisCO.", cn: "把CO₂转成碳酸氢根的碳酸酐酶反应在本章确有出现——但那是在C-4的叶肉细胞中、发生在PEP羧化酶之前，不是在RubisCO处。" },
        2: { en: "Phosphorylation of 3-phosphoglycerate is the next step of the cycle and it is done by phosphoglycerate kinase at the cost of ATP.", cn: "3-磷酸甘油酸的磷酸化是循环的下一步，由磷酸甘油酸激酶完成并消耗ATP。" },
        3: { en: "O₂ is the substrate of the same enzyme's oxygenase activity, which starts photorespiration; but there too it is RuBP that is activated.", cn: "O₂是同一个酶加氧酶活性的底物，由此启动光呼吸；但在那里被活化的同样是RuBP。" }
      },
      why_en: "The enzyme does not activate CO₂ at all. Each of the eight active sites converts RuBP into an enolate ion, and it is that reactive species — a nucleophile — that binds the CO₂ molecule. Everything after that is fast: a six-carbon β-oxo acid forms and hydrolyses at once into two 3-phosphoglycerates.",
      why_cn: "这个酶根本没有活化CO₂。八个活性位点中的每一个都把RuBP转变为烯醇负离子，正是这个反应性物种——一个亲核体——去结合CO₂分子。此后的一切都很快：先生成一个六碳的β-氧代酸，随即水解为两分子3-磷酸甘油酸。" },
    { type: "mcq",
      q_en: "Why is 3-phosphoglycerate called the first STABLE product of CO₂ fixation when two other species appear before it?",
      q_cn: "既然在3-磷酸甘油酸之前还出现过另外两个物种，为何仍称它为CO₂固定的第一个**稳定**产物？",
      options: [
        "Because the endiolate and the six-carbon β-oxo acid are transient intermediates that do not persist",
        "Because it is the first product that leaves the chloroplast",
        "Because it is the first product containing the newly fixed carbon atom",
        "Because it is the first product formed while the light is on"
      ],
      answer: 0,
      optionRefs: { 1: "9-19", 2: "9-17", 3: "9-15" },
      optionNotes: {
        1: { en: "In Obr. 9.6 the arrow labelled 'produkty' leaves the cycle at glyceraldehyde-3-phosphate, and the cycle's net yield is fructose-6-phosphate.", cn: "在图9.6中，标为「produkty（产物）」的箭头是在3-磷酸甘油醛处离开循环的，而循环的净产出是果糖-6-磷酸。" },
        2: { en: "The six-carbon β-oxo acid already contains the newly attached carbon; what it does not do is last.", cn: "六碳的β-氧代酸已经含有刚接上的那个碳；它欠缺的不是含碳，而是持久。" },
        3: { en: "Light versus dark is a different question — no step of carbon fixation is photochemical at all.", cn: "光下还是暗中是另一个问题——碳固定中根本没有任何一步是光化学的。" }
      },
      why_en: "'Stable' is doing real work in that phrase. The endiolate and the β-oxo acid come first in time but neither persists, so the first species you could actually isolate is the three-carbon 3-phosphoglycerate — and it is from that three-carbon count that C-3 plants take their name.",
      why_cn: "「稳定」这个词在那句话里是有实际分量的。烯二醇与β-氧代酸在时间上更早，但都不持久，所以真正能分离到的第一个物种是三碳的3-磷酸甘油酸——「C-3植物」这个名字正是从这个三碳数目来的。" },
    { type: "short",
      q_en: "RubisCO's full name is ribulosebisphosphate carboxylase/oxygenase. What does the second half of that name announce?",
      q_cn: "RubisCO的全名是核酮糖二磷酸羧化酶/加氧酶。名称的后半部分预告了什么？",
      accept: ["oxygenase", "photorespiration", "O2", "RuBP", "competitive"],
      answer_en: "That the same enzyme also has an oxygenase activity, which §9.2 develops as photorespiration. Because both activities work on the same substrate, RuBP, they compete directly: the oxygen a leaf produces works against the CO₂ it is trying to fix.",
      answer_cn: "预告了同一个酶还具有加氧酶活性，§9.2把它展开为光呼吸。由于两种活性作用于同一个底物RuBP，它们是直接竞争的：叶片自己产生的氧，正在跟它想固定的CO₂作对。" }
  ],

  "9-18": [
    { type: "mcq",
      q_en: "The Calvin cycle's reductive steps mirror two glycolytic ones. What is the difference besides the direction?",
      q_cn: "卡尔文循环的还原步骤与糖酵解的两步互为镜像。除方向之外，差别是什么？",
      options: [
        "Different enzymes are used, although the intermediates are the same",
        "The coenzyme is NADPH here, whereas glycolysis produces NADH",
        "No ATP is involved on the Calvin side",
        "1,3-Bisphosphoglycerate is skipped in the chloroplast"
      ],
      answer: 1,
      optionRefs: { 0: "7-8-2", 2: "9-19", 3: "9-18" },
      optionNotes: {
        0: { en: "The enzymes are the same pair, phosphoglycerate kinase and glyceraldehyde phosphate dehydrogenase — that is precisely why the book says the sequence is already known from glycolysis.", cn: "酶是同一对：磷酸甘油酸激酶与磷酸甘油醛脱氢酶——教材说这一序列在糖酵解中已经出现过，正是这个意思。" },
        2: { en: "Phosphoglycerate kinase spends ATP here, and a second ATP is spent later by the kinase that regenerates RuBP.", cn: "磷酸甘油酸激酶在这里要花掉ATP，后面再生RuBP的激酶还要再花一个。" },
        3: { en: "1,3-Bisphosphoglycerate is the intermediate between PG and GAP in both pathways; it is the acyl phosphate whose reduction releases Pᵢ.", cn: "1,3-二磷酸甘油酸在两条途径中都是PG与GAP之间的中间体；它是那个还原时释放Pᵢ的酰基磷酸。" }
      },
      why_en: "The reductive half of the Calvin cycle is glycolysis's payoff phase played backwards: same two enzymes, same intermediate, opposite direction — with NADPH doing the reducing where glycolysis produced NADH. That is the most economical way to remember this stretch, because it is chapter 7 read in the other direction rather than new chemistry.",
      why_cn: "卡尔文循环的还原那一半就是糖酵解产能阶段的倒放：同样的两个酶、同样的中间体、相反的方向——只是这里由NADPH来还原，而糖酵解产生的是NADH。这是记住这一段最省力的办法，因为它是把第7章反过来读，而不是新的化学。" },
    { type: "mcq",
      q_en: "How many ATP-consuming steps and how many NADPH-consuming steps does the Calvin cycle contain, and which are they?",
      q_cn: "卡尔文循环包含几个耗ATP的步骤、几个耗NADPH的步骤？分别是哪些？",
      options: [
        "One ATP-consuming step and one NADPH-consuming step, both in the reductive phase",
        "Two ATP-consuming steps — phosphoglycerate kinase and the kinase that regenerates RuBP — and one NADPH-consuming step",
        "Two ATP-consuming steps and two NADPH-consuming steps, one of each in each half of the cycle",
        "Three ATP-consuming steps and two NADPH-consuming steps"
      ],
      answer: 1,
      optionRefs: { 0: "9-18", 2: "9-18", 3: "9-19" },
      optionNotes: {
        0: { en: "This misses the second kinase: Ru5P → RuBP is ATP-dependent too, and it is the step that actually closes the cycle.", cn: "这漏掉了第二个激酶：Ru5P → RuBP同样依赖ATP，而且正是这一步真正闭合了循环。" },
        2: { en: "There is only one reduction in the cycle — glyceraldehyde phosphate dehydrogenase. The regenerative arm is rearrangement of phosphorylated sugars, with no redox chemistry in it.", cn: "循环中只有一次还原——磷酸甘油醛脱氢酶那一步。再生分支是磷酸化糖类的重排，其中没有氧化还原化学。" },
        3: { en: "Obr. 9.6 numbers thirteen enzyme steps, but only two of them spend ATP and only one spends NADPH.", cn: "图9.6编了十三个酶促步骤，但其中只有两步花ATP、只有一步花NADPH。" }
      },
      why_en: "Two kinases and one dehydrogenase: phosphoglycerate kinase at the start of the reductive part, glyceraldehyde phosphate dehydrogenase reducing with NADPH, and the ATP-dependent kinase that phosphorylates Ru5P back to RuBP. Everything between GAP and Ru5P costs neither, because it is only isomerisation, epimerisation, dephosphorylation and phosphorylation.",
      why_cn: "两个激酶加一个脱氢酶：还原部分开头的磷酸甘油酸激酶、用NADPH还原的磷酸甘油醛脱氢酶，以及把Ru5P重新磷酸化为RuBP的ATP依赖性激酶。GAP与Ru5P之间的一切两样都不花，因为那里只有异构化、差向异构化、去磷酸化与磷酸化。" },
    { type: "short",
      q_en: "Which four reaction types work glyceraldehyde-3-phosphate up towards ribulose-5-phosphate, and what do they have in common?",
      q_cn: "哪四类反应把3-磷酸甘油醛加工成核酮糖-5-磷酸？它们的共同点是什么？",
      accept: ["isomeri", "epimeri", "dephosphorylation", "phosphorylation", "pentose"],
      answer_en: "Isomerisation (aldose–ketose conversion), epimerisation, dephosphorylation and phosphorylation. What they have in common is that they are ONLY modification and internal conversion of variously phosphorylated saccharides — no carbon is oxidised or reduced anywhere in this arm — and they are the same toolkit already met in the pentose cycle (kap. 7.7). Whichever of the four possible pathways is taken, the end product is always ribulose-5-phosphate.",
      answer_cn: "异构化（醛糖–酮糖互变）、差向异构化、去磷酸化与磷酸化。它们的共同点是：这些**只是**各种磷酸化糖类的修饰与内部转换——这条分支上没有任何碳被氧化或还原——而且是磷酸戊糖循环（第7.7节）中已经见过的同一套工具。无论走四条可能途径中的哪一条，终产物始终是核酮糖-5-磷酸。" }
  ],

  "9-19": [
    { type: "mcq",
      q_en: "Two of the thirteen numbered steps of Obr. 9.6 are hydrolytic bisphosphatases. Which, and why do they matter?",
      q_cn: "图9.6十三个编号步骤中有两步是水解性的二磷酸酶。是哪两步？它们为何重要？",
      options: [
        "Phosphoribulokinase (1) and phosphoglycerate kinase (3) — the two steps that spend ATP",
        "Fructose bisphosphatase (7) and sedoheptulose bisphosphatase (10) — they make the regenerative arm run one way only",
        "The two transketolase steps (8 and 11)",
        "Phosphopentose epimerase (12) and ribose phosphate isomerase (13)"
      ],
      answer: 1,
      optionRefs: { 0: "9-18", 2: "9-19", 3: "9-19" },
      optionNotes: {
        0: { en: "Those two are the cycle's ATP-consuming kinases; they add phosphate rather than hydrolysing it off.", cn: "那两步是循环中耗ATP的激酶；它们是加上磷酸，而不是把磷酸水解掉。" },
        2: { en: "Transketolase transfers two-carbon fragments — the same enzyme type as in the pentose phosphate pathway — and appears at two different points of the cycle.", cn: "转酮酶转移二碳单元——与磷酸戊糖途径中的是同一类酶——并在循环的两个不同位点出现。" },
        3: { en: "Those two are the converging steps: both xylulose-5-P and ribose-5-P end up as ribulose-5-phosphate.", cn: "那两步是汇聚步骤：木酮糖-5-P与核糖-5-P最终都变成核酮糖-5-磷酸。" }
      },
      why_en: "Fructose bisphosphatase (7) and sedoheptulose bisphosphatase (10) both simply hydrolyse a phosphate away, releasing Pᵢ. Throwing a phosphate away is what makes a step effectively irreversible, so these two are what keep the regenerative arm running in one direction — and that is also what makes them the cycle's natural regulatory points.",
      why_cn: "果糖二磷酸酶(7)与景天庚酮糖二磷酸酶(10)都只是把一个磷酸水解掉、释放Pᵢ。把磷酸扔掉正是使一步反应实际上不可逆的原因，所以这两步维持了再生分支的单向运行——同时也使它们成为该循环天然的调控位点。" },
    { type: "mcq",
      q_en: "Which two pentose phosphates converge on ribulose-5-phosphate, and by which enzymes?",
      q_cn: "哪两种戊糖磷酸汇聚到核酮糖-5-磷酸？分别由哪些酶完成？",
      options: [
        "Erythrose-4-phosphate and sedoheptulose-7-phosphate",
        "Xylulose-5-phosphate by phosphopentose epimerase, and ribose-5-phosphate by ribose phosphate isomerase",
        "Fructose-6-phosphate and glucose-6-phosphate",
        "Glyceraldehyde-3-phosphate and dihydroxyacetone phosphate"
      ],
      answer: 1,
      optionRefs: { 0: "9-19", 2: "9-19", 3: "9-19" },
      optionNotes: {
        0: { en: "Erythrose-4-P is a four-carbon transketolase product and sedoheptulose-7-P a seven-carbon one; neither is a pentose.", cn: "赤藓糖-4-P是四碳的转酮酶产物，景天庚酮糖-7-P是七碳的；两者都不是戊糖。" },
        2: { en: "F6P is the cycle's net yield, transformed via G6P to glucose, cellulose or the general metabolic pathways.", cn: "F6P是循环的净产出，经G6P转化为葡萄糖、纤维素，或进入一般代谢途径。" },
        3: { en: "GAP and dihydroxyacetone phosphate are the triose pair interconverted by triose phosphate isomerase at step 5.", cn: "GAP与磷酸二羟丙酮是步骤5中由磷酸丙糖异构酶互变的那对丙糖。" }
      },
      why_en: "Steps 12 and 13 are two different routes to one destination: an epimerase inverting a single chiral centre of xylulose-5-P, and an isomerase converting the aldose ribose-5-P into the ketose. Both give ribulose-5-phosphate, which is the concrete form of the claim that the end point of the rearrangements is always Ru5P.",
      why_cn: "步骤12与13是通往同一终点的两条不同路径：一个差向异构酶翻转木酮糖-5-P上单个手性中心，一个异构酶把醛糖核糖-5-P变成酮糖。两者都生成核酮糖-5-磷酸，这正是「重排的终点始终是Ru5P」这一论断的具体形式。" },
    { type: "short",
      q_en: "At which metabolite does product leave the Calvin cycle in Obr. 9.6, and what do all the steps after it exist for?",
      q_cn: "在图9.6中，产物从哪个代谢物处离开卡尔文循环？它之后的所有步骤是为了什么而存在的？",
      accept: ["glyceraldehyde", "GAP", "regenerat", "acceptor", "RuBP"],
      answer_en: "The arrow labelled 'produkty' leaves at glyceraldehyde-3-phosphate, the key compound and branch point of the cycle. Everything drawn after that point exists solely to regenerate the acceptor: only four of the thirteen steps fix and reduce carbon, the other nine rebuild ribulose-1,5-bisphosphate. The cycle's net yield is then fructose-6-phosphate.",
      answer_cn: "标为「produkty（产物）」的箭头在3-磷酸甘油醛处离开，那是循环的关键化合物与分岔点。此点之后所画的一切都只是为了再生受体：十三步里只有四步真正固定并还原碳，其余九步都在重建核酮糖-1,5-二磷酸。循环的净产出则是果糖-6-磷酸。" }
  ],

  "9-20": [
    { type: "mcq",
      q_en: "What are the two products of the oxygenation of RuBP by RubisCO?",
      q_cn: "RubisCO对RuBP进行加氧的两个产物是什么？",
      options: [
        "Two molecules of 3-phosphoglycerate",
        "3-Phosphoglycerate and phosphoglycolate",
        "Glycolate and glyoxylate",
        "Glycine and serine"
      ],
      answer: 1,
      optionRefs: { 0: "9-17", 2: "9-20", 3: "9-20" },
      optionNotes: {
        0: { en: "Two 3-phosphoglycerates are the products of the CARBOXYLASE reaction, via the six-carbon β-oxo acid.", cn: "两分子3-磷酸甘油酸是**羧化酶**反应经六碳β-氧代酸得到的产物。" },
        2: { en: "Glycolate comes one step later, when phosphoglycolate phosphatase hydrolyses the phosphate off; glyoxylate is made from it in the peroxisome.", cn: "乙醇酸要晚一步，是磷酸乙醇酸磷酸酶把磷酸水解掉之后才出现的；乙醛酸则是在过氧化物酶体中由它生成。" },
        3: { en: "Glycine is made by transamination of glyoxylate in the peroxisome, and two glycines condense to serine in the mitochondrion.", cn: "甘氨酸是在过氧化物酶体中由乙醛酸转氨生成的，两分子甘氨酸在线粒体中缩合成丝氨酸。" }
      },
      why_en: "The oxygenase reaction splits RuBP asymmetrically: one three-carbon 3-phosphoglycerate, which can rejoin the Calvin cycle, and one two-carbon phosphoglycolate, which cannot and has to be salvaged through three organelles. Compare the carboxylase reaction, which gives two identical three-carbon products.",
      why_cn: "加氧酶反应把RuBP不对称地拆开：一个三碳的3-磷酸甘油酸，可以重新回到卡尔文循环；一个二碳的磷酸乙醇酸，回不去，只能跨三个细胞器去回收。对比羧化酶反应，那里得到的是两个相同的三碳产物。" },
    { type: "mcq",
      q_en: "What justification does the book offer for photorespiration, and with what degree of confidence?",
      q_cn: "教材为光呼吸提出了什么理由？把握有多大？",
      options: [
        "It is the plant's main route of ATP synthesis in strong light",
        "It probably protects the photosynthetic apparatus from harmful photooxidation when CO₂ is scarce, and is a route to glycine and serine biosynthesis — both offered with the admission that the reasons are not entirely clear",
        "It is a demonstrated mechanism for concentrating CO₂ around RubisCO",
        "It is how the plant disposes of the oxygen it produces"
      ],
      answer: 1,
      optionRefs: { 0: "9-13", 2: "9-22" },
      optionNotes: {
        0: { en: "ATP with no other product comes from cyclic electron flow; photorespiration in fact spends ATP, at the cytosolic glycerate kinase.", cn: "只产ATP而无其他产物的是循环电子流；光呼吸事实上还要花ATP，在胞质的甘油酸激酶那一步。" },
        2: { en: "Concentrating CO₂ for RuBP carboxylase is exactly what the C-4 mechanism does — and unlike photorespiration, that one the book presents as an established rationale.", cn: "为RuBP羧化酶浓缩CO₂正是C-4机制所做的事——而且与光呼吸不同，那一条教材是当作已确立的理由来讲的。" },
        3: { en: "Photorespiration does consume O₂, but the book does not offer disposal of oxygen as its purpose; the protective reading it does offer is about photooxidation damage when CO₂ runs short.", cn: "光呼吸确实消耗O₂，但教材并未把「处理掉氧气」当作它的目的；教材提出的保护性解读针对的是CO₂不足时的光氧化损伤。" }
      },
      why_en: "The book keeps both hedges and it is worth keeping them too: the sequence seems entirely useless and is competitive with the Calvin cycle for the same substrate, the reasons for it are not yet entirely clear, and the protective function is introduced with 'probably'. Present it as a costly side reaction with two plausible silver linings, not as a designed function.",
      why_cn: "教材保留了两处保留态度，你也值得一并保留：这一系列反应看似全然无用，而且与卡尔文循环争夺同一底物；其原因尚不完全清楚；保护功能是用「大概」引出的。要把它当作一个代价高昂、附带两点可能好处的副反应来讲，而不是当作一项被设计出来的功能。" },
    { type: "short",
      q_en: "Photorespiration is called a kind of respiration. How does the book say it differs from mitochondrial respiration, and what starts it?",
      q_cn: "光呼吸被称作一种呼吸。教材说它与线粒体呼吸有何不同？是什么启动了它？",
      accept: ["differs substantially", "respiratory chain", "RubisCO", "oxygenase", "RuBP"],
      answer_en: "It differs substantially from mitochondrial respiration, i.e. from the respiratory chain of chapter 6 — the shared name is an analogy about gas exchange (O₂ consumed, CO₂ released in the light), not about mechanism. What starts it is the oxygenase activity of RubisCO acting on RuBP, the same substrate the carboxylation uses, which is why the two are directly competitive.",
      answer_cn: "它与线粒体呼吸（即第6章的呼吸链）有实质区别——共用这个名称只是就气体交换而言的类比（光下消耗O₂、释放CO₂），与机理无关。启动它的是RubisCO的加氧酶活性作用于RuBP，而RuBP正是羧化反应所用的同一底物，这就是二者直接竞争的原因。" }
  ],

  "9-21": [
    { type: "mcq",
      q_en: "On balance, how much carbon does the C-4 acceptor cycle itself fix?",
      q_cn: "总的来看，C-4受体循环本身固定了多少碳？",
      options: [
        "None — the CO₂ that PEP-carboxylase captures is the same CO₂ that the decarboxylation of malate releases",
        "One per turn, permanently incorporated into malate",
        "Two per turn, one at PEP-carboxylase and one at RubisCO",
        "Six per turn, as in the summary equation of photosynthesis"
      ],
      answer: 0,
      optionRefs: { 1: "9-21", 2: "9-22", 3: "9-16" },
      optionNotes: {
        1: { en: "Malate is not a terminus: it is decarboxylated to pyruvate, and the CO₂ comes straight back off.", cn: "苹果酸不是终点：它会脱羧成丙酮酸，CO₂随即又被放出来。" },
        2: { en: "RubisCO does perform the net fixation, but it does so in the bundle-sheath cell as part of the Calvin cycle — it is not a step of the C-4 acceptor cycle.", cn: "RubisCO确实完成净固定，但那是在维管束鞘细胞中作为卡尔文循环的一部分完成的——它不是C-4受体循环的步骤。" },
        3: { en: "Six CO₂ per hexose is the summary equation, and the book warns against reading even that as a claim about particular carbon atoms.", cn: "每分子己糖六个CO₂是总方程，而教材还特意提醒不要把它读成关于某几个具体碳原子的论断。" }
      },
      why_en: "The cycle fixes nothing on balance: PEP-carboxylase attaches CO₂ to phosphoenolpyruvate, the four-carbon carrier moves, malate is decarboxylated, and the same CO₂ is released again. What changed in between is only WHERE the CO₂ is — and ATP was spent at pyruvate phosphate dikinase to reset the acceptor. It is a carbon taxi, not an alternative to the Calvin cycle.",
      why_cn: "这个循环净固定为零：PEP羧化酶把CO₂接到磷酸烯醇丙酮酸上，四碳载体移动，苹果酸脱羧，同一个CO₂又被放出来。其间改变的只是这个CO₂**在哪里**——而且在丙酮酸磷酸双激酶那一步还花了ATP去重置受体。它是一辆碳出租车，不是卡尔文循环的替代方案。" },
    { type: "mcq",
      q_en: "Which coenzyme reduces oxaloacetate to malate in this cycle, and what is oxaloacetate's alternative fate?",
      q_cn: "在这个循环中，哪种辅酶把草酰乙酸还原为苹果酸？草酰乙酸的另一条去路是什么？",
      options: [
        "NADH, with the alternative being oxidation to pyruvate",
        "NADPH, with the alternative being transamination to aspartate",
        "NADPH, with the alternative being condensation with acetyl-CoA to citrate",
        "FADH₂, with the alternative being decarboxylation to PEP"
      ],
      answer: 1,
      optionRefs: { 0: "6-2-2-3", 2: "6-2-2-1", 3: "6-2-4-2" },
      optionNotes: {
        0: { en: "The book writes this reduction with NADPH. A malate dehydrogenase also works in the citrate cycle — see 6-2-2-3 — but the reaction specified here is the NADPH one.", cn: "教材把这一还原写作使用NADPH。柠檬酸循环中也有一个苹果酸脱氢酶——见6-2-2-3——但此处指定的反应是用NADPH的那个。" },
        2: { en: "Condensation of oxaloacetate with acetyl-CoA to citrate is the opening step of the citrate cycle, not a C-4 branch.", cn: "草酰乙酸与乙酰CoA缩合成柠檬酸是柠檬酸循环的开头一步，不是C-4的分支。" },
        3: { en: "Flavoproteins are among the carriers shared by the thylakoid and mitochondrial membranes, but no FADH₂ step appears in this cycle.", cn: "黄素蛋白属于类囊体膜与线粒体膜共有的载体，但这个循环中没有FADH₂参与的步骤。" }
      },
      why_en: "Oxaloacetate goes one of two ways: transamination to aspartate, or hydrogenation to malate by malate dehydrogenase using NADPH. Because the book explicitly allows aspartate as an alternative, the label C-4 refers to the carbon count of the intermediate that carries the CO₂, not to malate specifically.",
      why_cn: "草酰乙酸有两条去路：经转氨生成天冬氨酸，或由苹果酸脱氢酶用NADPH加氢生成苹果酸。由于教材明确允许以天冬氨酸替代，「C-4」这个标签指的是携带CO₂的中间体的碳数，而不是特指苹果酸。" },
    { type: "short",
      q_en: "Explain precisely what the label 'C-4' refers to, and contrast it with what 'C-3' refers to.",
      q_cn: "请准确解释「C-4」这个标签指的是什么，并与「C-3」所指的内容作对比。",
      accept: ["four carbon", "malate", "aspartate", "intermediate", "3-phosphoglycerate"],
      answer_en: "C-4 refers to the carbon count of the intermediate that carries the CO₂ — a four-carbon compound, malate or alternatively aspartate — not to malate specifically, which is why the book writes 'event. aspartát'. C-3 is the parallel label for plants whose first stable product of fixation is the three-carbon 3-phosphoglycerate, i.e. those running the Calvin cycle directly.",
      answer_cn: "C-4指的是携带CO₂的中间体的碳数——一个四碳化合物，苹果酸或者天冬氨酸——而不是特指苹果酸，教材写「event. aspartát」正是这个意思。C-3是与之平行的标签，用于CO₂固定第一个稳定产物是三碳的3-磷酸甘油酸的植物，也就是直接运行卡尔文循环的那些。" }
  ]

});

Object.assign(window.BIOCHEM.bank, {

  "9-22": [
    { type: "mcq",
      q_en: "According to Obr. 9.8, what does PEP-carboxylase actually receive as its substrate?",
      q_cn: "根据图9.8，PEP羧化酶实际接收的底物是什么？",
      options: [
        "CO₂ taken directly from the air",
        "HCO₃⁻, produced from atmospheric CO₂ by carbonate dehydratase",
        "Carbamoyl phosphate",
        "Oxaloacetate"
      ],
      answer: 1,
      optionRefs: { 0: "9-22", 2: "5-2-2-2", 3: "9-21" },
      optionNotes: {
        0: { en: "The running text says CO₂; it is the figure that inserts carbonate dehydratase ahead of the carboxylase, and the figure is the more detailed statement.", cn: "正文说的是CO₂；是图中在羧化酶之前插入了碳酸酐酶这一步，而图给出的说法更细致。" },
        2: { en: "Carbamoyl phosphate is the activated carbon/nitrogen unit of the urea cycle in chapter 5, not a C-4 intermediate.", cn: "氨甲酰磷酸是第5章尿素循环中被活化的碳氮单元，不是C-4的中间体。" },
        3: { en: "Oxaloacetate is the product of the carboxylation, not its substrate; the substrate on the other side is phosphoenolpyruvate.", cn: "草酰乙酸是这一羧化反应的产物而不是底物；另一侧的底物是磷酸烯醇丙酮酸。" }
      },
      why_en: "Obr. 9.8 adds two details the running text omits, and this is one of them: atmospheric CO₂ is first converted to bicarbonate by carbonate dehydratase, so what PEP-carboxylase condenses with phosphoenolpyruvate is HCO₃⁻. Noticing this matters, because it is a second point at which the carbon is handled before RubisCO ever sees it.",
      why_cn: "图9.8补充了两个正文没有的细节，这是其中之一：大气CO₂先由碳酸酐酶转成碳酸氢根，因此PEP羧化酶与磷酸烯醇丙酮酸缩合的对象是HCO₃⁻。留意这一点是有意义的，因为这是在RubisCO见到这个碳之前，它被处理的第二个环节。" },
    { type: "mcq",
      q_en: "In the bundle-sheath cell, which enzyme releases the CO₂ again, and what else does that step do?",
      q_cn: "在维管束鞘细胞中，是哪个酶把CO₂重新释放出来？这一步还做了什么？",
      options: [
        "RubisCO, which both releases and refixes it",
        "PEP-carboxylase, running in reverse",
        "The 'malic enzyme' — the decarboxylating malate dehydrogenase — which also regenerates NADPH",
        "Pyruvate phosphate dikinase"
      ],
      answer: 2,
      optionRefs: { 0: "9-17", 1: "9-21", 3: "9-21" },
      optionNotes: {
        0: { en: "RubisCO refixes the CO₂ that arrives, but it does not release it; releasing it is the decarboxylation that precedes.", cn: "RubisCO把送到的CO₂重新固定，但不是它把CO₂放出来的；放出来的是它之前的那一步脱羧。" },
        1: { en: "PEP-carboxylase acts in the mesophyll cell and in the forward direction, attaching the carbon rather than removing it.", cn: "PEP羧化酶在叶肉细胞中、按正向作用，是把碳接上去而不是取下来。" },
        3: { en: "Pyruvate phosphate dikinase regenerates PEP from pyruvate at the cost of ATP, closing the acceptor cycle.", cn: "丙酮酸磷酸双激酶消耗ATP由丙酮酸再生PEP，闭合受体循环。" }
      },
      why_en: "Obr. 9.8 labels the decarboxylating malate dehydrogenase of the bundle-sheath cell as the malic enzyme (jablečný enzym), and it does two useful things at once: it delivers a locally high CO₂ concentration exactly where RubisCO sits, and it regenerates NADPH as it goes.",
      why_cn: "图9.8把维管束鞘细胞中进行脱羧的苹果酸脱氢酶标为「苹果酸酶」(jablečný enzym)，它一举做了两件有用的事：在RubisCO所在之处交付一个局部很高的CO₂浓度，同时顺带再生NADPH。" },
    { type: "short",
      q_en: "PEP-carboxylase has a lower Km for CO₂ than RubisCO. What does that actually buy the plant?",
      q_cn: "PEP羧化酶对CO₂的Km低于RubisCO。这实际上给植物换来了什么？",
      accept: ["stomata", "water", "evaporation", "minimally", "concentrat"],
      answer_en: "Water. A lower Km means the enzyme works well at CO₂ concentrations RubisCO cannot use, so the leaf stomata — through which CO₂ enters — need be open only minimally, and enormous evaporation of water from the plant body does not occur. The carbon consequence follows from that: by the C-4 mechanism CO₂ is in effect concentrated for RuBP carboxylase, and under hot, bright, dry conditions the fixation rate is about twice that of a C-3 plant.",
      answer_cn: "换来的是水。Km较低意味着这个酶在RubisCO用不上的CO₂浓度下也能良好工作，因此CO₂借以进入的叶片气孔只需微微张开，植物体就不会发生大量水分蒸发。碳方面的好处是随之而来的：C-4机制实际上是为RuBP羧化酶浓缩CO₂，在高温强光缺水的条件下，固定速率约为C-3植物的两倍。" }
  ],

  "9-23": [
    { type: "mcq",
      q_en: "What does nitrogenase contain, according to the book?",
      q_cn: "根据教材，固氮酶含有什么？",
      options: [
        "Two proteins, molybdenum ions, and non-haem-bound iron atoms of the ferredoxin type",
        "A single protein carrying a haem group",
        "Cu²⁺, with a broad absorption maximum near 597 nm",
        "Mo and Fe ions together with FAD, using NADH as electron donor"
      ],
      answer: 0,
      optionRefs: { 1: "6-3-1", 2: "9-9", 3: "9-25" },
      optionNotes: {
        1: { en: "Haem-carrying proteins are the porphyrin proteins of kap. 6.3 — haemoglobin, the cytochromes. Nitrogenase's iron is non-haem-bound.", cn: "带血红素的蛋白是第6.3节的卟啉蛋白——血红蛋白、细胞色素。固氮酶中的铁是非血红素结合的。" },
        2: { en: "That is plastocyanin, the blue copper carrier of the thylakoid membrane.", cn: "那是质体蓝素，类囊体膜上的蓝色铜载体。" },
        3: { en: "Mo, Fe and FAD together with NADH describe nitrate reductase — a different nitrogen enzyme, in the cytoplasm, working in the opposite part of the cycle.", cn: "Mo、Fe与FAD再加NADH描述的是硝酸还原酶——另一个氮相关的酶，位于胞质，作用于氮循环的另一端。" }
      },
      why_en: "Nitrogenase is a relatively complicated enzyme system: two proteins, labelled in the scheme as the Mo-Fe protein and the Fe protein, molybdenum ions, and non-haem iron in ferredoxin-type Fe-S clusters. Molybdenum turning up at the point of contact with nitrogen is a motif this chapter repeats — nitrate reductase does the same.",
      why_cn: "固氮酶是一个相当复杂的酶系统：两个蛋白（图中标为Mo-Fe蛋白与Fe蛋白）、钼离子，以及铁氧还蛋白型Fe-S簇中的非血红素铁。「钼出现在与氮直接接触之处」是本章反复出现的母题——硝酸还原酶也是如此。" },
    { type: "mcq",
      q_en: "Which carriers supply electrons to the nitrogenase system?",
      q_cn: "哪些载体向固氮酶系统供给电子？",
      options: [
        "Plastocyanin and ferredoxin",
        "Ferredoxin and flavodoxin, the latter containing flavin mononucleotide",
        "NADH passed through FAD",
        "NADPH delivered by Fd-NADP⁺ reductase"
      ],
      answer: 1,
      optionRefs: { 0: "9-9", 2: "9-25", 3: "9-10" },
      optionNotes: {
        0: { en: "Ferredoxin is right, but plastocyanin is the thylakoid's copper carrier between cytochrome b₆f and PS I — it has no role here.", cn: "铁氧还蛋白说对了，但质体蓝素是类囊体中介于细胞色素b₆f与PSI之间的铜载体——在这里没有它的事。" },
        2: { en: "NADH feeding FAD is the entry of the nitrate reductase complex, at the other end of the nitrogen cycle.", cn: "NADH把电子交给FAD是硝酸还原酶复合体的入口，位于氮循环的另一端。" },
        3: { en: "Fd-NADP⁺ reductase makes NADPH on the stroma side of PS I; that is photosynthetic electron flow, not the nitrogenase supply.", cn: "Fd-NADP⁺还原酶在PSI的基质侧生成NADPH；那是光合电子流，不是给固氮酶的供电。" }
      },
      why_en: "At least two carriers deliver the electrons from cellular metabolic pathways into the enzyme: ferredoxin, an Fe-S protein, and flavodoxin, which contains flavin mononucleotide. Ferredoxin therefore appears three separate times in this chapter — reducing NADP⁺, feeding nitrite reductase, and feeding nitrogenase.",
      why_cn: "至少有两种载体把电子从细胞代谢途径送进这个酶：铁氧还蛋白（一种Fe-S蛋白）与黄素氧还蛋白（含黄素单核苷酸）。因此铁氧还蛋白在本章一共出现了三次——还原NADP⁺、供给亚硝酸还原酶、供给固氮酶。" },
    { type: "short",
      q_en: "Which microorganisms does the book list as carrying out nitrogen fixation?",
      q_cn: "教材列举了哪些微生物在进行固氮？",
      accept: ["aerobic", "anaerobic", "symbiosis", "cyanobacteria", "photosynthesizing"],
      answer_en: "Various microorganisms: aerobic and anaerobic bacteria, either living independently or in symbiosis with plants, and some photosynthesizing microorganisms — bacteria and cyanobacteria. The list matters because it is broad in bacterial terms yet completely excludes plants and animals, which must take nitrogen up already combined.",
      answer_cn: "多种微生物：好氧与厌氧细菌，或独立生活、或与植物共生；以及某些光合微生物——细菌与蓝细菌。这份清单之所以重要，是因为它在细菌范围内相当宽泛，却完全排除了植物和动物，后者必须摄取已经结合态的氮。" }
  ],

  "9-24": [
    { type: "mcq",
      q_en: "Which of the two ammonia-fixing reactions does the book write as reversible, and which is effectively irreversible?",
      q_cn: "两个固定氨的反应中，教材把哪一个写成可逆的？哪一个实际上不可逆？",
      options: [
        "Both are written reversibly, with double arrows",
        "Glutamate dehydrogenase is reversible; glutamine synthase is effectively irreversible because it spends ATP down to AMP + 2Pᵢ",
        "Glutamine synthase is reversible; glutamate dehydrogenase is irreversible because it consumes NADPH",
        "Both are effectively irreversible, since both consume a cofactor"
      ],
      answer: 1,
      optionRefs: { 0: "9-24", 2: "9-24", 3: "6-1-2-1" },
      optionNotes: {
        0: { en: "Only the glutamate dehydrogenase equation carries the double arrow; the glutamine synthase one is written with a single arrow.", cn: "只有谷氨酸脱氢酶那个方程带双箭头；谷氨酰胺合成酶那个是用单箭头写的。" },
        2: { en: "The assignments are swapped. Consuming NADPH does not by itself make a reaction irreversible — the book writes the dehydrogenase step with a reversible double arrow.", cn: "两者的归属被对调了。消耗NADPH本身并不使反应不可逆——教材恰恰用可逆的双箭头来写这一脱氢酶步骤。" },
        3: { en: "What pushes a step to completion is spending high-energy-bond equivalents, and only the glutamine synthase reaction does that.", cn: "把一步反应推向完全的是消耗高能键当量，而只有谷氨酰胺合成酶的反应做了这件事。" }
      },
      why_en: "α-Oxoglutarate + NADPH + H⁺ + NH₄⁺ ⇌ glutamate + NADP⁺ + H₂O is written with a double arrow. L-glutamate + NH₄⁺ + ATP → L-glutamine + AMP + 2Pᵢ is not: the ATP is cleaved at the α–β position, so two high-energy-bond equivalents are spent, and that is what makes glutamine a good storage form.",
      why_cn: "α-酮戊二酸 + NADPH + H⁺ + NH₄⁺ ⇌ 谷氨酸 + NADP⁺ + H₂O 是用双箭头写的。L-谷氨酸 + NH₄⁺ + ATP → L-谷氨酰胺 + AMP + 2Pᵢ 则不是：ATP在α–β位断裂，消耗了两个高能键当量，正因如此谷氨酰胺才是一种好的贮存形式。" },
    { type: "mcq",
      q_en: "How do all the amino acids other than glutamate and glutamine acquire their nitrogen?",
      q_cn: "除谷氨酸与谷氨酰胺之外的所有氨基酸，如何获得它们的氮？",
      options: [
        "Each has its own ammonia-fixing enzyme in the chloroplast",
        "By transamination reactions from glutamate and glutamine",
        "By reduction of nitrate on their own carbon skeletons",
        "Through the urea cycle"
      ],
      answer: 1,
      optionRefs: { 0: "9-24", 2: "9-25", 3: "5-2-2-1" },
      optionNotes: {
        0: { en: "The whole nitrogen economy funnels through exactly two ammonia-fixing enzymes; that narrowness is the memorable structure here.", cn: "整个氮经济只经由恰恰两个固定氨的酶；这种「窄口」正是此处值得记住的结构。" },
        2: { en: "Nitrate reduction happens before this, in two stages NO₃⁻ → NO₂⁻ → NH₄⁺, and it delivers ammonium rather than aminating a skeleton.", cn: "硝酸盐的还原发生在这之前，分两个阶段 NO₃⁻ → NO₂⁻ → NH₄⁺，它交付的是铵离子，而不是给某个骨架加上氨基。" },
        3: { en: "The urea cycle eliminates nitrogen as urea; in Obr. 9.9 urea is what returns nitrogen to the soil, not what builds amino acids.", cn: "尿素循环是把氮以尿素的形式排掉；在图9.9中，尿素是把氮送回土壤的那一环，而不是构建氨基酸的那一环。" }
      },
      why_en: "Two enzymes at the head and transamination for everything else. Glutamate dehydrogenase and glutamine synthase are the only gates through which nitrogen enters organic matter, and from glutamate and glutamine the amino group is passed onto keto acids to generate every other amino acid, and step by step all further nitrogenous compounds, which is how fixed nitrogen enters the food chain.",
      why_cn: "前端两个酶，其余一切靠转氨。谷氨酸脱氢酶与谷氨酰胺合成酶是氮进入有机物的仅有的两道门，随后氨基从谷氨酸与谷氨酰胺转移到酮酸上，生成其他所有氨基酸，并逐步生成更多含氮化合物——被固定的氮就是这样进入食物链的。" },
    { type: "short",
      q_en: "Why is α-oxoglutarate the natural point of entry for fixed nitrogen?",
      q_cn: "为何α-酮戊二酸是被固定氮的天然入口？",
      accept: ["citrate cycle", "keto acid", "glutamate", "junction", "carbon skeleton"],
      answer_en: "Because it is a citrate cycle intermediate, so it is the concrete junction between carbon metabolism and nitrogen metabolism: a keto acid drawn out of the carbon economy picks up an ammonium ion and becomes glutamate, using NADPH, in the chloroplast. Every nitrogen atom in the plant's organic matter passes through that one molecule.",
      answer_cn: "因为它是柠檬酸循环的中间体，所以它是碳代谢与氮代谢之间那个具体的交汇点：一个从碳经济中抽出来的酮酸，在叶绿体中用NADPH接上一个铵离子，变成谷氨酸。植物有机物里的每一个氮原子都要经过这一个分子。" }
  ],

  "9-25": [
    { type: "mcq",
      q_en: "Why does the soil hold its nitrogen mainly as nitrate rather than as ammonia?",
      q_cn: "土壤为何主要以硝酸盐而不是氨的形式贮存氮？",
      options: [
        "Because nitrate is a NON-TOXIC store, and nitrifying bacteria can oxidize all soil ammonia to it",
        "Because nitrate is what nitrogenase produces",
        "Because plants are unable to take up ammonia at all",
        "Because nitrate is the more reduced and therefore more stable form"
      ],
      answer: 0,
      optionRefs: { 1: "9-23", 2: "9-24", 3: "9-25" },
      optionNotes: {
        1: { en: "Nitrogenase reduces N₂ to ammonia; nitrate appears only afterwards, by bacterial oxidation.", cn: "固氮酶把N₂还原为氨；硝酸盐要到之后才由细菌氧化产生。" },
        2: { en: "Ammonia produced by fixation can be used directly by plants for making nitrogenous organic compounds — it is already at the oxidation level of an amino group.", cn: "固氮产生的氨可以被植物直接用来制造含氮有机物——它已经处在氨基的氧化水平上。" },
        3: { en: "Nitrate is the OXIDIZED form; that is why a plant taking it up must reduce it in two stages, NO₃⁻ → NO₂⁻ → NH₄⁺.", cn: "硝酸盐是**氧化**形式；正因如此，植物吸收之后必须分两个阶段把它还原：NO₃⁻ → NO₂⁻ → NH₄⁺。" }
      },
      why_en: "Nitrification — bacterial oxidation of ammonia to nitrate — turns the soil's nitrogen into a form that can be stored without harm. The price of that storage form is paid by the plant, which then has to repeat, in part, a reduction the nitrogen-fixing bacteria already performed once, only starting from a different oxidation state.",
      why_cn: "硝化作用——细菌把氨氧化为硝酸盐——把土壤中的氮变成一种可以无害贮存的形式。这种贮存形式的代价由植物来付：它随后必须把固氮细菌已经做过一次的还原在一定程度上重做一遍，只不过是从另一个氧化态出发。" },
    { type: "mcq",
      q_en: "Where is nitrate reductase located, and what does it contain?",
      q_cn: "硝酸还原酶位于何处？它含有什么？",
      options: [
        "In the chloroplast stroma; Mg and a porphyrin",
        "In the thylakoid membrane; Cu²⁺",
        "In the cell cytoplasm; Mr ≈ 500 000, Mo and Fe ions and FAD, with NADH as electron donor",
        "In the peroxisome; catalase and FAD"
      ],
      answer: 2,
      optionRefs: { 0: "9-17", 1: "9-9", 3: "9-20" },
      optionNotes: {
        0: { en: "The great soluble stromal enzyme of this chapter is RubisCO; nitrate reductase is not in the chloroplast at all.", cn: "本章那个庞大的可溶性基质酶是RubisCO；硝酸还原酶根本不在叶绿体里。" },
        1: { en: "A Cu²⁺ protein of the thylakoid membrane is plastocyanin, part of photosynthetic electron transport.", cn: "类囊体膜上的Cu²⁺蛋白是质体蓝素，属于光合电子传递的一部分。" },
        3: { en: "Catalase is the peroxisomal enzyme that destroys the H₂O₂ formed during photorespiration.", cn: "过氧化氢酶是过氧化物酶体中分解光呼吸所生成H₂O₂的酶。" }
      },
      why_en: "Nitrate reductase catalyses the first of the plant's two reduction stages, NO₃⁻ → NO₂⁻, and it is a cytoplasmic enzyme — worth fixing in memory, since almost everything else in this chapter is in the chloroplast. Its electron path runs NADH → FAD → 2Fe³⁺/2Fe²⁺ → 2Mo⁵⁺/2Mo⁶⁺ → NO₃⁻.",
      why_cn: "硝酸还原酶催化植物两个还原阶段中的第一个，NO₃⁻ → NO₂⁻，而且它是**胞质**酶——值得特意记牢，因为本章其他几乎所有东西都在叶绿体里。它的电子路径是 NADH → FAD → 2Fe³⁺/2Fe²⁺ → 2Mo⁵⁺/2Mo⁶⁺ → NO₃⁻。" },
    { type: "short",
      q_en: "Which two enzymes of this chapter both put molybdenum at the point of contact with nitrogen, and what does that recurrence suggest?",
      q_cn: "本章中哪两个酶都把钼放在与氮直接接触的位置？这种重复出现说明了什么？",
      accept: ["nitrogenase", "nitrate reductase", "molybdenum", "Mo", "Fe"],
      answer_en: "Nitrogenase, which contains molybdenum ions and non-haem iron, and nitrate reductase, whose electron path ends at a 2Mo⁵⁺/2Mo⁶⁺ couple before the nitrate. The recurrence suggests a design constraint rather than a coincidence: whenever this chapter has to make or break a bond to nitrogen, the atom in contact with it is molybdenum, backed by iron.",
      answer_cn: "一个是固氮酶，含钼离子与非血红素铁；一个是硝酸还原酶，其电子路径在到达硝酸盐之前止于2Mo⁵⁺/2Mo⁶⁺电对。这种重复出现更像是一种设计上的约束而非巧合：本章每当要在氮上成键或断键，与氮接触的那个原子都是钼，背后有铁支撑。" }
  ],

  "9-26": [
    { type: "mcq",
      q_en: "What kind of reducing agent does nitrite reductase require, and what follows from that requirement?",
      q_cn: "亚硝酸还原酶需要什么样的还原剂？这一要求带来什么后果？",
      options: [
        "A strong reducing agent of low redox potential — which is why the leaf uses ferredoxin straight from the light reactions",
        "NADH from glycolysis, available in any tissue",
        "ATP hydrolysis, which drives the reduction directly",
        "Molecular hydrogen, released by the photosystems"
      ],
      answer: 0,
      optionRefs: { 1: "7-8-2", 2: "9-14", 3: "9-2" },
      optionNotes: {
        1: { en: "NADH is the donor for the earlier step, nitrate reductase in the cytoplasm; nitrite reduction needs something with a lower potential than that.", cn: "NADH是更前一步的供体，即胞质中的硝酸还原酶；亚硝酸盐的还原需要电位比它更低的东西。" },
        2: { en: "A reduction needs electrons, not phosphoryl transfer. ATP in this chapter is spent on kinase steps and on regenerating acceptors.", cn: "还原需要的是电子而不是磷酸基转移。本章中的ATP花在激酶步骤以及再生受体上。" },
        3: { en: "The photosystems split water and release O₂, not H₂; the donor's leftover is oxygen in oxygenic photosynthesis and sulfur in the H₂S bacteria.", cn: "光系统裂解水放出的是O₂而不是H₂；供体剩下的部分在产氧光合作用中是氧、在用H₂S的细菌中是硫。" }
      },
      why_en: "That single requirement settles everything else in the passage. In a leaf the low-potential reductant is ferredoxin supplied by photosynthesis — the same carrier that reduces NADP⁺ in Obr. 9.5 — so nitrogen assimilation is a direct consumer of the light reactions. In a root, where there is no photosynthesis, the same job must be paid for out of respiration.",
      why_cn: "仅这一条要求就决定了本段其余的一切。在叶片中，这个低电位还原剂是光合作用提供的铁氧还蛋白——正是图9.5中还原NADP⁺的同一种载体——所以氮同化是光反应的直接消费者。在没有光合作用的根中，同样的活儿只能由呼吸作用来买单。" },
    { type: "mcq",
      q_en: "In Obr. 9.9, what becomes of the urea that animals excrete?",
      q_cn: "在图9.9中，动物排出的尿素最终怎样了？",
      options: [
        "It is oxidized directly to nitrate by nitrifying bacteria",
        "It is broken back down to NH₃ by plants and microbes",
        "It is converted to gaseous N₂ by denitrifying bacteria",
        "It is taken up unchanged by plants and built into amino acids"
      ],
      answer: 1,
      optionRefs: { 0: "9-25", 2: "9-25", 3: "9-24" },
      optionNotes: {
        0: { en: "Nitrification starts from ammonia, not from urea; in the figure it is NH₃ that the nitrifying bacteria oxidize towards nitrite and nitrate.", cn: "硝化作用是从氨开始的，不是从尿素开始；图中被硝化细菌氧化成亚硝酸盐与硝酸盐的是NH₃。" },
        2: { en: "Denitrifying bacteria act on nitrite and nitrate, at the oxidized end of the cycle.", cn: "反硝化细菌作用的是亚硝酸盐与硝酸盐，位于循环中氧化的那一端。" },
        3: { en: "Amino acids are built from ammonium via glutamate dehydrogenase and glutamine synthase and then transamination — the nitrogen has to pass through NH₃ first.", cn: "氨基酸是由铵离子经谷氨酸脱氢酶、谷氨酰胺合成酶再经转氨作用构建的——氮必须先经过NH₃这一步。" }
      },
      why_en: "Urea, H₂NCONH₂, is the excretory compound in the figure, and plants and microbes break it back down to NH₃. Read the whole diagram and NH₃ turns out to be the hub: bacterial fixation, urea breakdown, and death and decomposition all converge on it, and from it nitrogen either goes up into nitrite and nitrate or across into organic compounds.",
      why_cn: "尿素H₂NCONH₂是图中的排泄性化合物，植物与微生物把它分解回NH₃。把整张图读下来会发现NH₃才是枢纽：细菌固氮、尿素分解、死亡与腐解都汇聚到它这里，而氮又从它出发，或向上进入亚硝酸盐与硝酸盐，或横向进入有机化合物。" },
    { type: "short",
      q_en: "This node marks the point where §9.1 and §9.4 finally meet. What exactly is the connection?",
      q_cn: "这个节点标出了§9.1与§9.4最终交汇之处。这个联系究竟是什么？",
      accept: ["ferredoxin", "photosynthesis", "NADP", "nitrite", "light reactions"],
      answer_en: "Ferredoxin. The same reduced ferredoxin that hands electrons to Fd-NADP⁺ reductase to make NADPH in Obr. 9.5 is the strong, low-potential reductant that nitrite reduction demands in the leaf: water is split by photosystems 1 and 2, and the Fd_red so generated cycles through nitrite reductase, turning NO₂⁻ into NH₄⁺ and thence into amino acids. Nitrogen assimilation in a leaf is therefore not a process running alongside photosynthesis but one drawing directly on it.",
      answer_cn: "是铁氧还蛋白。图9.5中把电子交给Fd-NADP⁺还原酶以生成NADPH的那同一个还原态铁氧还蛋白，正是叶片中亚硝酸盐还原所需要的强低电位还原剂：水由光系统1和2裂解，由此产生的还原态Fd经亚硝酸还原酶循环，把NO₂⁻变成NH₄⁺，进而变成氨基酸。因此叶片中的氮同化不是与光合作用并行的另一件事，而是直接从它身上取用的。" }
  ],

  "9-27": [
    { type: "mcq",
      q_en: "Which of these does the book list as a metabolic SPECIALITY of plants rather than something shared with animals?",
      q_cn: "以下哪一项被教材列为植物的代谢**特长**，而不是与动物共有的东西？",
      options: [
        "The citrate cycle",
        "Glycolysis and the respiratory chain",
        "Biosynthesis of the essential amino acids and fatty acids, and the ability to incorporate ammonia into organic molecules",
        "Protein and nucleic acid biosynthesis"
      ],
      answer: 2,
      optionRefs: { 0: "6-2-2-1", 1: "7-8-1", 3: "9-27" },
      optionNotes: {
        0: { en: "The citrate cycle is named explicitly among the pathways plant and animal cells share.", cn: "柠檬酸循环被明确列为植物细胞与动物细胞共有的途径之一。" },
        1: { en: "Glycolysis and the respiratory chain are shared too; the plant runs them just as an animal does.", cn: "糖酵解与呼吸链同样是共有的；植物运行它们的方式与动物一样。" },
        3: { en: "Protein and nucleic acid biosynthesis are on the shared list; nothing about them is plant-specific here.", cn: "蛋白质与核酸的生物合成属于共有清单；此处它们没有任何植物特有之处。" }
      },
      why_en: "The book opens §9.5 by insisting that plant and animal core metabolism are not fundamentally different, and only then names the exceptions. The ability to incorporate ammonia into organic molecules is one of them — which is exactly what §9.4 has just described — and the amino acids and fatty acids that are essential for us are made here because plants can make them and we cannot.",
      why_cn: "教材在§9.5开篇先强调植物与动物的核心代谢并无根本差别，然后才点出例外。把氨结合进有机分子的能力就是其中之一——那正是§9.4刚刚讲过的内容——而对我们而言「必需」的那些氨基酸和脂肪酸之所以叫必需，正是因为植物能造而我们不能。" },
    { type: "mcq",
      q_en: "What kind of pathways lead to the secondary plant metabolites, and what does the book deny about them?",
      q_cn: "通向次生植物代谢物的是什么样的途径？教材否定了关于它们的什么说法？",
      options: [
        "Mostly anabolic pathways, entirely specific to plants — and the book denies that their biosynthesis is self-serving, at least evolutionarily",
        "Catabolic pathways for disposing of surplus fixed carbon",
        "Pathways shared with animals but running faster in plants",
        "Pathways indispensable to the life of the individual plant"
      ],
      answer: 0,
      optionRefs: { 1: "9-16", 2: "9-27", 3: "9-27" },
      optionNotes: {
        1: { en: "Surplus carbon is not a problem the book poses; the greater part of fixed carbon is fed into central pathways and used for biosynthesis.", cn: "教材并没有提出「多余的碳」这个问题；被固定碳的大部分被送进中心途径并用于生物合成。" },
        2: { en: "The book says these pathways are entirely specific to plants, not merely more active in them.", cn: "教材说这些途径为植物所**完全特有**，而不只是在植物中更活跃。" },
        3: { en: "The secondary metabolites are only APPARENTLY unnecessary — they are not indispensable for the plant's life, which is precisely why the word 'apparently' is doing work.", cn: "次生代谢物只是**表面上**不必要——它们对植物的生存并非不可或缺，「表面上」这个词的分量恰恰在这里。" }
      },
      why_en: "Both halves matter. The pathways are anabolic and entirely plant-specific, and their products are not indispensable for the individual plant's life — yet the book refuses the easy conclusion that they are metabolic luxuries, insisting their biosynthesis is not samoúčelná, not an end in itself, at least from an evolutionary point of view.",
      why_cn: "两半都重要。这些途径是合成性的、为植物所完全特有，其产物对个体植物的生存并非不可或缺——但教材拒绝「它们不过是代谢奢侈品」这一轻率结论，坚持说至少从演化角度看，它们的生物合成并非samoúčelná，并非为自身而存在。" },
    { type: "short",
      q_en: "Name the industries the book says use secondary plant metabolites, and give its one-sentence reason why plants have so many more of them than animals.",
      q_cn: "说出教材所讲的、使用次生植物代谢物的那些工业部门，并给出它一句话的理由：植物为何比动物多得多。",
      accept: ["pharmaceutical", "food", "cosmetic", "migrate", "defence"],
      answer_en: "The pharmaceutical industry, the food industry and cosmetics. The reason: plants do not have the ability to migrate away from an unfavourable environment, so a series of protective and defensive mechanisms on a chemical basis arose instead. An animal that meets a threat can leave; a plant has to stand there and answer with chemistry.",
      answer_cn: "制药工业、食品工业与化妆品。理由是：植物不具备从不利环境中迁走的能力，于是产生了一系列建立在化学基础上的保护与防御机制。动物遇到威胁可以走开；植物只能站在原地，用化学来回应。" }
  ]

});
