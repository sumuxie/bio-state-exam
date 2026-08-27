/* Spine for the Czech textbook chapter 3 — enzymes. 速通简洁版.

   Nine nodes: 3-1, 3-2, 3-3-1, 3-3-2, 3-3-3, 3-4, 3-5, 3-6, 3-7.

   `src` letter: "CZ" is the Czech textbook, cited by its own page numbers, the ones
   `pages` carries in tools/topics.json. "A" is reserved for Lehninger 8 by every other
   spine file, and "B" already means the second Lehninger copy, so neither was reusable.

   Chapter 3 and Lehninger chapter 6 teach the same subject. Where the Lehninger spines
   L-6-3-1 (kinetics) and L-6-4-1 (catalytic mechanisms) already carry a derivation, an
   experiment or a worked enzyme, this file points at them with `see` instead of saying
   a thinner version of the same thing. L-5-1-1 does the same service for cooperativity
   in 3-7, and L-3-3-1 for the purification table behind specific activity in 3-3-3.

   House style is SPINE_SPEC.md: one claim per step, every noun introduced where it is
   first used, every structural claim followed by its consequence, and exactly one bold
   run per step — the app has a 极简 mode that shows the bold spans and folds the rest
   away, so each bold must read as a complete claim on its own. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ 3-1 */
window.BIOLITE_SPINE["3-1"] = {
  assumed: ["urea", "trypsin", "pepsin", "chymotrypsin", "ethanol", "acetaldehyde",
            "pyruvate", "fumarate", "maleate", "alcohol dehydrogenase",
            "lactate dehydrogenase", "hexokinase", "oxalate decarboxylase"],
  nodeTitle_en: "Classification and nomenclature of enzymes",
  nodeTitle_cn: "酶的分类与命名",
  title_en: "An enzyme's real name is the reaction it catalyses, and an E.C. number is that name written as four digits",
  title_cn: "酶真正的名字就是它催化的那个反应，而 E.C. 编号就是把这个名字写成四个数字",
  steps: [
    {
      en: "An enzyme is a protein whose job is to catalyse one of the reactions that go on inside a living organism, and two properties make it remarkable: it acts on one particular substance and almost nothing else, and it speeds that one reaction up enormously. **An enzyme is defined by the reaction it catalyses, so its official name records that reaction rather than its shape, its source or its size.**",
      cn: "酶是这样一种蛋白质：它的工作是催化生物体内某一个反应。它有两点非凡之处 —— 作用特异性高（只认某一种特定物质），催化效率高。**一个酶是由它所催化的反应来定义的，所以它的正式名称记录的是那个反应，而不是它的形状、来源或大小。**",
      src: "CZ p.41, §3.1"
    },
    {
      link_en: "before enzymes could be catalogued at all, one had to be held in the hand",
      link_cn: "但要给酶编目，先得真的拿到一个酶",
      en: "**In 1926 Sumner obtained the first enzyme in the crystalline state — it was urease, the enzyme that hydrolyses urea.** Three more crystalline enzymes followed in the thirties: trypsin, pepsin and chymotrypsin, all three of them digestive enzymes that cut other proteins. More than 3000 enzymes have been discovered and described since, though far from all of them have been prepared in the pure state.",
      cn: "**1926 年 Sumner 首次以结晶状态得到一个酶 —— 脲酶（urease），即水解尿素的那个酶。**三十年代又相继得到三种结晶酶：胰蛋白酶、胃蛋白酶、胰凝乳蛋白酶，这三者都是切割其他蛋白质的消化酶。此后已发现并描述了 3000 种以上的酶，尽管远非全部都已制成纯品。",
      src: "CZ p.41"
    },
    {
      link_en: "three thousand of anything needs a filing system",
      link_cn: "三千件东西必须有一套编目办法",
      en: "**Enzymes are divided into six main classes according to the reaction they catalyse, and inside that scheme every enzyme is given three designations: a systematic name, a recommended name and a code number.** The systematic name characterises the catalysed reaction and is usually very long and complicated; the recommended name is the short one used in common practice; the code number identifies the enzyme unambiguously.",
      cn: "**酶按其所催化的反应被分为六大类，而在这套体系里，每一个酶都被赋予三种称谓：系统名、推荐名和编码号。**系统名表征所催化的反应，通常很长很复杂；推荐名是日常实践中使用的简短名称；编码号则能明确无误地识别该酶。",
      src: "CZ p.41"
    },
    {
      link_en: "all three at once, on one reaction",
      link_cn: "把三种称谓同时用在一个反应上",
      en: "Take one reaction: L-lactate + NAD⁺ ⇌ pyruvate + NADH + H⁺, which is lactate being oxidised to pyruvate. **The enzyme that catalyses it has the systematic name L-lactate:NAD⁺-oxidoreductase, the recommended name lactate dehydrogenase, and the code number E.C. 1.1.1.27.** The systematic name is simply the reaction read aloud; the recommended name is what anybody actually says.",
      cn: "看一个反应：L-乳酸 + NAD⁺ ⇌ 丙酮酸 + NADH + H⁺，也就是乳酸被氧化成丙酮酸。**催化它的酶，系统名是 L-乳酸:NAD⁺-氧化还原酶，推荐名是乳酸脱氢酶，编码号是 E.C. 1.1.1.27。**系统名不过是把这个反应念出来；推荐名才是大家实际会说的那个词。",
      src: "CZ p.41"
    },
    {
      link_en: "and the four digits are not a serial number with three spare digits in front",
      link_cn: "那四个数字并不是「一个序号前面加了三个凑数的位」",
      en: "**The four numbers narrow the enzyme down one step at a time: the first gives the main class, the second the subclass, the third the sub-subclass, and the fourth is the serial number of that one enzyme inside its sub-subgroup.** In E.C. 1.1.1.27 the first 1 says oxidoreductase; the second 1 says the subclass is oxidation of a primary alcoholic group; the third 1 says the hydrogen acceptor is a nicotinamide coenzyme, which means NAD⁺ or NADP⁺; and 27 is the serial number. The code therefore tells you what chemistry the enzyme does before you know anything else about it.",
      cn: "**这四个数字是一级一级把范围收窄：第一个是大类，第二个是亚类，第三个是次亚类，第四个才是该酶在其次亚类内的序号。**在 E.C. 1.1.1.27 中，第一个 1 表示氧化还原酶；第二个 1 表示亚类是伯醇基的氧化；第三个 1 表示氢受体是烟酰胺辅酶，也就是 NAD⁺ 或 NADP⁺；27 是序号。所以，光看编号就已经知道这个酶做的是什么化学，此外一无所知也不要紧。",
      src: "CZ p.41"
    },
    {
      link_en: "now the six classes, in the order the numbering uses",
      link_cn: "下面是六大类，按编号的顺序",
      en: "**Class 1 — oxidoreductases — catalyse oxidation-reduction reactions: transfer of electrons, transfer of hydrogen, or reaction with oxygen.** Their systematic name follows the pattern Donor:Acceptor-oxidoreductase. Ethanol + NAD⁺ ⇌ acetaldehyde + NADH + H⁺ is catalysed by ethanol:NAD⁺-oxidoreductase, recommended name alcohol dehydrogenase.",
      cn: "**第 1 类 —— 氧化还原酶 —— 催化氧化还原反应：电子的转移、氢的转移，或与氧的反应。**系统名格式为「供体:受体-氧化还原酶」。乙醇 + NAD⁺ ⇌ 乙醛 + NADH + H⁺，由乙醇:NAD⁺-氧化还原酶催化，推荐名为乙醇脱氢酶。",
      src: "CZ p.42"
    },
    {
      en: "**Class 2 — transferases — catalyse the transfer of a group from one molecule to another.** The pattern is Donor:Acceptor group-transferase. Hexose + ATP → hexose phosphate + ADP is catalysed by ATP:hexose-phosphotransferase, recommended name hexokinase.",
      cn: "**第 2 类 —— 转移酶 —— 催化把某个基团从一个分子转移到另一个分子上。**格式为「供体:受体 基团-转移酶」。己糖 + ATP → 己糖磷酸 + ADP，由 ATP:己糖-磷酸转移酶催化，推荐名为己糖激酶。",
      src: "CZ p.42"
    },
    {
      en: "**Class 3 — hydrolases — catalyse hydrolytic reactions, and their subclasses are formed according to which type of bond is hydrolysed.** They are among the longest-known enzymes, and that history shows in their names: many of them still bear the original non-systematic name they were given before any Donor:Acceptor construction existed.",
      cn: "**第 3 类 —— 水解酶 —— 催化水解反应，其亚类按所水解键的类型划分。**它们属于最早为人所知的酶，而这段历史就写在名字里：其中许多至今沿用早年的非系统名称 —— 那时还没有「供体:受体」这套构词法。",
      src: "CZ p.42"
    },
    {
      en: "**Class 4 — lyases, also called synthases — cleave a bond without using water and without oxidation, usually leaving a double bond behind, or run the same chemistry the other way by adding a group across a double bond.** The pattern is Substrate group-lyase. (COOH)₂ → HCOOH + CO₂ is catalysed by oxalate carboxy-lyase, recommended name oxalate decarboxylase.",
      cn: "**第 4 类 —— 裂合酶，又称合酶 —— 在不用水、也不发生氧化的情况下断开一个键，通常留下一个双键；或者反过来，把某个基团加到双键上。**格式为「底物 基团-裂合酶」。(COOH)₂ → HCOOH + CO₂，由草酸羧基裂合酶催化，推荐名为草酸脱羧酶。",
      src: "CZ p.42"
    },
    {
      en: "**Class 5 — isomerases — catalyse isomerisations: a rearrangement inside one molecule, with nothing added and nothing taken away.** The pattern is Substrate type-of-isomerism isomerase, sometimes shortened to just -ase. Fumarate ⇌ maleate is catalysed by fumarate cis-trans-isomerase.",
      cn: "**第 5 类 —— 异构酶 —— 催化异构化：分子内部的重排，既不加入什么，也不拿走什么。**格式为「底物 异构类型 异构酶」，有时简写为 -酶。延胡索酸 ⇌ 马来酸，由延胡索酸顺反异构酶催化。",
      src: "CZ p.42"
    },
    {
      en: "**Class 6 — ligases, also called synthetases — form a bond between two molecules and pay for it by hydrolysing a macroergic compound in the same step, most often ATP.** A macroergic compound is one whose hydrolysis releases a large amount of energy, and the ones used here are above all the nucleoside triphosphates. The pattern is X:Y ligase, marked ADP-forming or AMP-forming, for the reaction X + Y + ATP → X–Y + ADP + Pᵢ.",
      cn: "**第 6 类 —— 连接酶，又称合成酶 —— 在两个分子之间形成一个键，并在同一步里水解一个高能化合物来支付，最常见的是 ATP。**所谓高能化合物，就是水解时释放大量能量的化合物，这里用到的首先是核苷三磷酸。格式为「X:Y 连接酶」，并标明生成 ADP 还是 AMP，对应反应 X + Y + ATP → X–Y + ADP + Pᵢ。",
      src: "CZ p.42"
    },
    {
      link_en: "two of those six alternative names differ by two letters, and that is the standard slip",
      link_cn: "六类里有两个别名只差两个字母，这正是最常见的失分点",
      recall_en: "class 4 and class 6, four steps and one step above",
      recall_cn: "就是上面第 4 类和第 6 类那两条",
      en: "A synthase is class 4 and a synthetase is class 6. **The difference is who pays for the bond: a lyase, or synthase, makes and breaks bonds without spending a nucleoside triphosphate, while a ligase, or synthetase, forms its bond only by hydrolysing ATP in the very same step.**",
      cn: "合酶是第 4 类，合成酶是第 6 类。**区别在于谁来付账：裂合酶（合酶）成键与断键都不消耗核苷三磷酸；而连接酶（合成酶）只有在同一步里水解 ATP 才能把键做出来。**",
      src: "CZ p.42"
    }
  ],
  terms: [
    { en: "systematic name", cn: "系统名",
      def_en: "The designation that characterises the catalysed reaction, built as Donor:Acceptor-class. Usually very long and complicated, which is why it is almost never spoken aloud.",
      def_cn: "表征所催化反应的称谓，按「供体:受体-类别」构成。通常很长很复杂，所以几乎没人真的把它念出来。" },
    { en: "recommended name", cn: "推荐名",
      def_en: "The short designation used in common practice — lactate dehydrogenase rather than L-lactate:NAD⁺-oxidoreductase.",
      def_cn: "日常实践中使用的简短称谓 —— 说「乳酸脱氢酶」，而不说「L-乳酸:NAD⁺-氧化还原酶」。" },
    { en: "code number", cn: "编码号 (E.C.)",
      def_en: "Four digits identifying an enzyme unambiguously: main class, subclass, sub-subclass, and serial number within that sub-subgroup. E.C. 1.1.1.27 is lactate dehydrogenase.",
      def_cn: "明确识别一个酶的四个数字：大类、亚类、次亚类，以及在该次亚类中的序号。E.C. 1.1.1.27 就是乳酸脱氢酶。" },
    { en: "oxidoreductases", cn: "氧化还原酶",
      def_en: "Class 1 — transfer of electrons, transfer of hydrogen, or reaction with oxygen; Donor:Acceptor-oxidoreductase.",
      def_cn: "第 1 类 —— 电子转移、氢转移，或与氧的反应；供体:受体-氧化还原酶。" },
    { en: "transferases", cn: "转移酶",
      def_en: "Class 2 — transfer of a group from one molecule to another; Donor:Acceptor group-transferase.",
      def_cn: "第 2 类 —— 把基团从一个分子转移到另一个分子；供体:受体 基团-转移酶。" },
    { en: "hydrolases", cn: "水解酶",
      def_en: "Class 3 — hydrolytic reactions, with subclasses formed by the type of bond broken. The longest-known enzymes, and many keep their pre-systematic names.",
      def_cn: "第 3 类 —— 水解反应，按所断键的类型分亚类。最早为人所知的一批酶，许多仍沿用系统命名法之前的旧名。" },
    { en: "lyases", cn: "裂合酶（合酶）",
      def_en: "Class 4, also called synthases — non-hydrolytic and non-oxidative cleavage, usually forming a double bond, or addition across one. No nucleoside triphosphate is spent.",
      def_cn: "第 4 类，又称合酶 —— 非水解、非氧化的断裂，通常生成双键，或对双键加成。不消耗核苷三磷酸。" },
    { en: "isomerases", cn: "异构酶",
      def_en: "Class 5 — rearrangement inside a single molecule, nothing added and nothing removed.",
      def_cn: "第 5 类 —— 单个分子内部的重排，既不加入也不移走任何东西。" },
    { en: "ligases", cn: "连接酶（合成酶）",
      def_en: "Class 6, also called synthetases — bond formation paid for by simultaneous hydrolysis of a macroergic compound, most often ATP.",
      def_cn: "第 6 类，又称合成酶 —— 成键，并以同时水解一个高能化合物（最常为 ATP）来支付。" }
  ]
};

/* ------------------------------------------------------------------ 3-2 */
window.BIOLITE_SPINE["3-2"] = {
  assumed: ["alcohol dehydrogenase", "phosphatase", "hexokinase", "cytochromes",
            "tyrosinase", "pyruvate kinase", "atpase", "riboflavin", "thiamin",
            "pantothenic acid", "nicotinic acid", "d-ribose", "adenine",
            "coenzyme q", "lipoamide", "acyl", "aldehyde"],
  nodeTitle_en: "Structure of the enzyme molecule; coenzymes",
  nodeTitle_cn: "酶分子的结构；辅酶",
  title_en: "The half of an enzyme that is not protein, and why that half is where vitamins enter biochemistry",
  title_cn: "酶身上不是蛋白质的那一半，以及维生素为什么正是从这里进入生物化学",
  steps: [
    {
      en: "**Enzymes are proteins, with one described exception: a ribonucleic acid — that is, an RNA — which has been shown to have a catalytic ability of its own.** Every enzyme known until recently was of protein nature; research of the last twenty years or so has shown that certain other kinds of macromolecule can catalyse too, and so far exactly that one case is described.",
      cn: "**酶是蛋白质，只有一个已被描述的例外：一种核糖核酸，也就是 RNA，被证明自身具有一定的催化能力。**直到不久前，已知的全部酶都是蛋白质性质的；近二十年左右的研究表明，某些其他类型的大分子也能催化，而迄今被描述的恰好只有这一例。",
      src: "CZ p.42, §3.2",
      see: [
        { id: "L-26-4-1", en: "catalytic RNAs in full", cn: "核酶的完整讨论" },
        { id: "L-8-2-1", en: "why a folded single strand can have an active site at all", cn: "折叠的单链为什么能拥有活性中心" }
      ]
    },
    {
      link_en: "and among the proteins, two kinds",
      link_cn: "而在蛋白质这一边，酶又分两种",
      en: "The molecule of some enzymes is formed by a polypeptide chain, or several chains, and nothing else. **The active form of other enzymes contains in addition a non-protein component, which is called the cofactor — so for those enzymes, activity is a property of the pair and not of the protein alone.**",
      cn: "有些酶的分子仅由一条或几条多肽链构成，此外别无他物。**另一些酶的活性形式还含有一个非蛋白质组分，称为辅因子（cofactor）—— 对这类酶来说，活性是「一对」东西的性质，而不是蛋白质单独的性质。**",
      src: "CZ p.42"
    },
    {
      link_en: "a cofactor comes in exactly two kinds, and only one of them gets its own name",
      link_cn: "辅因子恰好只有两种，其中一种另有专名",
      en: "**A cofactor is either a metal ion or an organic molecule, and the organic kind is called a coenzyme; some enzymes contain both at once.** That one split runs through everything below: the metal ions give the metalloenzymes, the organic molecules give the coenzymes and, through them, the vitamins.",
      cn: "**辅因子要么是金属离子，要么是有机分子，而有机的那一种称为辅酶（coenzyme）；某些酶同时含有两者。**这一处分岔贯穿下文：金属离子那一支通向金属酶，有机分子那一支通向辅酶，并由辅酶通向维生素。",
      src: "CZ p.42"
    },
    {
      link_en: "one general property tells the two halves apart in a test tube",
      link_cn: "有一条普遍性质，能在试管里把这两半区分开",
      en: "**It holds generally that the cofactors of enzymes are thermally stable while the protein part of the enzyme molecule is not.** So when heat destroys the activity of an enzyme preparation, what has been destroyed is the protein half; the cofactor is still sitting in the tube.",
      cn: "**一般规律是：酶的辅因子是热稳定的，而酶分子的蛋白质部分不是。**所以，当加热毁掉一份酶制剂的活性时，被毁掉的是蛋白质那一半；辅因子还好端端地留在管子里。",
      src: "CZ p.42"
    },
    {
      link_en: "which means the two halves need two names",
      link_cn: "既然能分开，这两半就各需要一个名字",
      en: "**The catalytically active protein-cofactor complex is called the holoenzyme, and the protein part left after the cofactor has been removed is called the apoenzyme.** An apoenzyme on its own does not catalyse anything, which is the practical content of the whole distinction.",
      cn: "**具有催化活性的「蛋白质-辅因子」复合物称为全酶（holoenzyme）；除去辅因子之后剩下的蛋白质部分称为脱辅基酶（apoenzyme）。**脱辅基酶单独存在时不催化任何反应 —— 这就是这组区分的全部实际内容。",
      src: "CZ p.42"
    },
    {
      link_en: "take the metal branch first",
      link_cn: "先走金属这一支",
      en: "**Enzymes that carry a metal ion as their cofactor are called metalloenzymes.** The ones that turn up most often are Zn²⁺ in alcohol dehydrogenase, Mg²⁺ in phosphatase, Mn²⁺ in hexokinase, Fe²⁺ and Fe³⁺ in the cytochromes, Cu²⁺ in tyrosinase, K⁺ in pyruvate kinase and Na⁺ in ATPase.",
      cn: "**以金属离子为辅因子的酶称为金属酶（metalloenzyme）。**最常出现的有：乙醇脱氢酶里的 Zn²⁺、磷酸酶里的 Mg²⁺、己糖激酶里的 Mn²⁺、细胞色素里的 Fe²⁺ 与 Fe³⁺、酪氨酸酶里的 Cu²⁺、丙酮酸激酶里的 K⁺、ATP 酶里的 Na⁺。",
      src: "CZ p.42"
    },
    {
      link_en: "and the metal is not always doing the same job",
      link_cn: "而金属在酶里干的活儿并不总是同一件",
      en: "**A metal ion works in an enzyme molecule in one of three ways: as part of the active centre, which is the small region of the enzyme where the substrate is bound and converted; as a bridge that binds the substrate to the enzyme; or as an element stabilising the spatial structure of the enzyme molecule.** Only the first of the three is doing chemistry; the other two are holding things in place.",
      cn: "**金属离子在酶分子中以三种方式起作用：作为活性中心的组成部分（活性中心是酶上结合并转化底物的那一小块区域）；作为把底物结合到酶上的桥梁；或作为稳定酶分子空间结构的因素。**三者之中只有第一种是在做化学，另外两种是在「把东西固定住」。",
      src: "CZ p.42",
      see: [{ id: "L-6-4-1", en: "enolase, where a metal does a fourth thing this list of three leaves out", cn: "烯醇化酶 —— 金属在那里做的是这三项之外的第四件事" }]
    },
    {
      link_en: "now the organic branch, and its job description is a single phrase",
      link_cn: "再走有机这一支，它的职责用一句话就能说完",
      en: "**Coenzymes usually function as intermediary carriers of the functional groups, atoms or electrons that are transferred in the reaction the enzyme catalyses.** A coenzyme is therefore a shuttle: it picks the transferred piece up from one substrate and puts it down on another, and the same coenzyme serves many different enzymes that move the same piece.",
      cn: "**辅酶通常的功能是充当中间载体，运送在该酶所催化的反应中被转移的官能团、原子或电子。**所以辅酶是一个「摆渡的」：它从一个底物身上取下被转移的那一块，再放到另一个底物身上；同一种辅酶可以为许多不同的酶服务，只要它们搬运的是同一块东西。",
      src: "CZ p.42"
    },
    {
      link_en: "how tightly the shuttle is tied to the protein decides what to call it",
      link_cn: "这个「摆渡的」拴得有多紧，决定了它该叫什么",
      en: "**When a coenzyme is bound to the apoenzyme very strongly it is called a prosthetic group; a coenzyme bound only by weak interactions comes and goes, and from the kinetic standpoint it behaves as a substrate of the enzyme.** That second case matters more than it looks: it is why a reaction with a coenzyme in it is treated as a two-substrate reaction.",
      cn: "**当辅酶与脱辅基酶结合得非常牢固时，称为辅基（prosthetic group）；只以弱相互作用结合的辅酶来去自由，从动力学角度看，它表现得就像酶的一个底物。**第二种情形比看上去重要：正因为如此，凡是有辅酶参与的反应，都要按双底物反应来处理。",
      src: "CZ p.43",
      see: [{ id: "3-3-2", en: "two-substrate reactions, where that consequence is cashed in", cn: "双底物反应 —— 这个推论在那里被兑现" }]
    },
    {
      link_en: "and the cell cannot build most of these shuttles from scratch",
      link_cn: "而这些「摆渡的」，细胞大多造不出来",
      en: "**Coenzymes are mostly molecules corresponding in structure to vitamins or their derivatives, and a vitamin is an organic substance indispensable for the life functions of cells that the organism cannot make and must be supplied with in food.** Put the two halves together and the consequence follows: a vitamin missing from the diet is a coenzyme the cell cannot build, so every enzyme that needs that coenzyme stops.",
      cn: "**辅酶多数是在结构上与维生素或其衍生物相对应的分子；而维生素是细胞生命功能所不可缺少、机体自身又造不出来、必须随食物供给的有机物。**把这两句拼起来，推论就出来了：食物里缺一种维生素，就是细胞造不出某一种辅酶，于是所有需要该辅酶的酶都停摆。",
      src: "CZ p.43"
    },
    {
      link_en: "the table worth memorising is three columns wide",
      link_cn: "值得背下来的那张表只有三列",
      en: "**Tab. 3.1 pairs each coenzyme with the group it transfers and with the vitamin it comes from:** NAD⁺ and NADP⁺ carry H⁺ and e⁻, from nicotinic acid; FMN and FAD carry H⁺ and e⁻, from riboflavin, which is vitamin B₂; coenzyme Q carries H⁺ and e⁻ and has no vitamin; TPP, that is thiamine pyrophosphate, carries an aldehyde group, from thiamin; coenzyme A carries an acyl group, from pantothenic acid; lipoamide carries acyl and H and has no vitamin; biotin carries CO₂, from biotin, vitamin H; pyridoxal phosphate carries the –NH₂ group, from pyridoxin, which is vitamin B₆.",
      cn: "**表 3.1 把每一种辅酶与它所转移的基团、以及它所对应的维生素配成一行：**NAD⁺ 与 NADP⁺ 运送 H⁺ 和 e⁻，来自烟酸；FMN 与 FAD 运送 H⁺ 和 e⁻，来自核黄素即维生素 B₂；辅酶 Q 运送 H⁺ 和 e⁻，无对应维生素；TPP（焦磷酸硫胺素）运送醛基，来自硫胺素；辅酶 A 运送酰基，来自泛酸；硫辛酰胺运送酰基与 H，无对应维生素；生物素运送 CO₂，来自维生素生物素（H）；磷酸吡哆醛运送 –NH₂，来自吡哆醇即维生素 B₆。",
      src: "CZ p.54, Tab. 3.1"
    },
    {
      link_en: "two of those entries are worth opening up, and the first pair is the commonest of all",
      link_cn: "其中两项值得拆开来看，第一对是出现频率最高的",
      en: "**The nicotinamide coenzymes are two molecules, NAD⁺ and NADP⁺, and both are built as a dinucleotide: one base is adenine, the other is nicotinamide, the sugar is D-ribose in both halves, and the two nucleotides are joined through two residues of phosphoric acid.** The nicotinamide end is the working end — it is the part that takes up and gives back the H⁺ and e⁻ of every dehydrogenase reaction.",
      cn: "**烟酰胺辅酶有两个成员：NAD⁺ 与 NADP⁺，二者都按二核苷酸构建 —— 一个碱基是腺嘌呤，另一个是烟酰胺，两半的糖都是 D-核糖，两个核苷酸之间由两个磷酸残基相连。**烟酰胺那一端是干活的一端：每一个脱氢酶反应里被接过来又交出去的 H⁺ 和 e⁻，都落在它身上。",
      src: "CZ pp.44–53, §3.2"
    },
    {
      link_en: "and the second is the strangest molecule in the table",
      link_cn: "第二项则是表里最古怪的分子",
      en: "**The main component of vitamin B₁₂ is a ribonucleotide whose base is 5,6-dimethylbenzimidazole, joined to D-ribose by an α-N-glycosidic bond — the only place this base is met — and that nucleotide is attached to a corrin nucleus partly by a coordination bond and partly by an ester bond.** Coenzyme B₁₂ then does one specific kind of chemistry: it takes part in reactions in which a hydrogen atom and a group on the neighbouring carbon exchange places.",
      cn: "**维生素 B₁₂ 的主要组分是一个核糖核苷酸，其碱基是 5,6-二甲基苯并咪唑，通过 α-N-糖苷键与 D-核糖相连 —— 这是唯一见到这种碱基的地方；该核苷酸又一面以配位键、一面以酯键连到咕啉核（corrin）上。**辅酶 B₁₂ 只做一类特定的化学：参与「氢原子与相邻碳上的某个基团互换位置」的反应。",
      src: "CZ pp.44–53, §3.2"
    }
  ],
  terms: [
    { en: "cofactor", cn: "辅因子",
      def_en: "The non-protein component present in the active form of some enzymes — either a metal ion or an organic molecule. Thermally stable, unlike the protein part.",
      def_cn: "某些酶的活性形式中所含的非蛋白质组分 —— 或为金属离子，或为有机分子。与蛋白质部分不同，它是热稳定的。" },
    { en: "coenzyme", cn: "辅酶",
      def_en: "An organic cofactor, acting as an intermediary carrier of the groups, atoms or electrons transferred in the catalysed reaction. Most correspond in structure to a vitamin.",
      def_cn: "有机辅因子，充当所催化反应中被转移的基团、原子或电子的中间载体。多数在结构上与某种维生素相对应。" },
    { en: "holoenzyme", cn: "全酶",
      def_en: "The catalytically active complex of protein plus cofactor — the form that actually works.",
      def_cn: "蛋白质加辅因子所构成的、具有催化活性的复合物 —— 真正能工作的那个形式。" },
    { en: "apoenzyme", cn: "脱辅基酶（酶蛋白）",
      def_en: "The protein part left after the cofactor has been taken away. On its own it catalyses nothing.",
      def_cn: "取走辅因子之后剩下的蛋白质部分。单独存在时不催化任何反应。" },
    { en: "metalloenzyme", cn: "金属酶",
      def_en: "An enzyme whose cofactor is a metal ion. The metal acts as part of the active centre, as a bridge to the substrate, or as a stabiliser of the spatial structure.",
      def_cn: "以金属离子为辅因子的酶。金属或作为活性中心的一部分，或作为通向底物的桥梁，或作为空间结构的稳定因素。" },
    { en: "prosthetic group", cn: "辅基",
      def_en: "A coenzyme bound to the apoenzyme very strongly, so that it stays put. The alternative is weak binding, in which case the molecule behaves kinetically as a substrate.",
      def_cn: "与脱辅基酶结合得非常牢固、因而固定不动的辅酶。另一种情况是弱结合，那时该分子在动力学上表现为底物。" },
    { en: "vitamins", cn: "维生素",
      def_en: "Organic substances indispensable for the life functions of cells which the organism cannot make and must obtain with food. Most coenzymes correspond to one structurally.",
      def_cn: "细胞生命功能所不可缺少、机体自身不能合成而必须随食物获得的有机物。多数辅酶在结构上与其中之一相对应。" },
    { en: "nicotinamide coenzymes", cn: "烟酰胺辅酶",
      def_en: "NAD⁺ and NADP⁺, both dinucleotides of adenine and nicotinamide on D-ribose, joined through two phosphate residues. They carry H⁺ and e⁻ and derive from nicotinic acid.",
      def_cn: "NAD⁺ 与 NADP⁺，均为腺嘌呤与烟酰胺各接 D-核糖、再经两个磷酸残基相连的二核苷酸。运送 H⁺ 与 e⁻，来自烟酸。" },
    { en: "coenzyme B₁₂", cn: "辅酶 B₁₂",
      def_en: "Built round a corrin nucleus carrying a ribonucleotide of 5,6-dimethylbenzimidazole. It serves reactions in which a hydrogen and a group on the neighbouring carbon swap places.",
      def_cn: "以咕啉核为骨架，其上带一个 5,6-二甲基苯并咪唑的核糖核苷酸。服务于「氢与相邻碳上某基团互换位置」的反应。" }
  ]
};

/* ------------------------------------------------------------------ 3-3-1 */
window.BIOLITE_SPINE["3-3-1"] = {
  assumed: ["hyperbola", "asymptote"],
  nodeTitle_en: "Enzyme reaction kinetics; the Michaelis–Menten equation",
  nodeTitle_cn: "酶反应动力学；米氏方程",
  title_en: "There are three ways past an energy barrier, an organism can use only one of them, and the curve that comes out yields two numbers",
  title_cn: "越过能垒有三条路，生物体只能走其中一条，而由此得到的曲线交出两个数字",
  steps: [
    {
      en: "From the functional standpoint an enzyme is a catalyst of a chemical reaction occurring in an organism. **For a substance A to be converted into a product X, its molecules must first climb over an energy barrier, and the energy they have to be given to do it is called the activation energy.** Nothing about how favourable the reaction is downhill changes that requirement — the barrier is what sets the rate.",
      cn: "从功能角度看，酶就是生物体内某个化学反应的催化剂。**要让物质 A 转变为产物 X，它的分子必须先翻过一道能垒，为此必须付给它们的那份能量叫做活化能（activation energy）。**反应本身「下坡」下得多顺利并不改变这个要求 —— 决定速率的是那道能垒。",
      src: "CZ p.54, §3.3.1"
    },
    {
      link_en: "there are exactly three ways to get more molecules over that barrier",
      link_cn: "让更多分子翻过那道能垒，恰好有三条路",
      en: "**The first way is to heat the system, which raises the energy of the reactant molecules and with it their ability to overcome the barrier — and it is the one way an organism cannot use, because organisms are mostly thermolabile, meaning their own molecules are destroyed by heat.** Everything that follows in this chapter exists because that first route is closed.",
      cn: "**第一条是加热体系：提高反应物分子的能量，从而提高它们越过能垒的本事 —— 而这恰恰是生物体唯一不能用的一条，因为生物体大多是热不稳定的（thermolabile），也就是它们自己的分子会被热毁掉。**本章后面的一切，都是因为这第一条路被封死了才存在。",
      src: "CZ p.54"
    },
    {
      link_en: "so the organism takes the second route",
      link_cn: "于是生物体走第二条路",
      en: "**The second way is catalysis: the catalyst — in an organism, the enzyme — joins temporarily with the reactants, so that the reaction proceeds by another mechanism whose activation energy is lower.** The energy diagram in Obr. 3.1 draws both routes on one picture: the uncatalysed reaction goes from A over a single high barrier E to the product P, while the catalysed one goes from A over a lower barrier E₁ to the complex AK of A with the catalyst K, and from there over a second low barrier E₂ to P.",
      cn: "**第二条是催化：催化剂 —— 在生物体内就是酶 —— 暂时与反应物结合，使反应沿另一条活化能更低的机制进行。**图 3.1 把两条路线画在同一张能量图上：未催化的反应从 A 越过单独一道高能垒 E 直达产物 P；被催化的反应则从 A 越过较低的能垒 E₁ 到达 A 与催化剂 K 的复合物 AK，再从那里越过第二道低能垒 E₂ 到达 P。",
      src: "CZ p.54, Obr. 3.1"
    },
    {
      link_en: "and the third route is there for completeness",
      link_cn: "第三条路补齐这份清单",
      en: "**The third way is to excite the reactant molecules with electromagnetic radiation, that is with light, after which the reaction usually proceeds along a different reaction coordinate.** A reaction coordinate is the path a reaction takes from starting material to product, so a different coordinate means the reaction is no longer the same reaction at all.",
      cn: "**第三条是用电磁辐射（也就是光）激发反应物分子，此后反应通常沿另一条反应坐标进行。**所谓反应坐标，就是反应从起始物走到产物所经的那条路径；换了一条坐标，意味着这已经不再是同一个反应了。",
      src: "CZ p.54"
    },
    {
      link_en: "the catalysed route drawn above has a bump in the middle, and that bump is a real object",
      link_cn: "上面画的催化路线中间有一个凹处，而那个凹处是一个真实存在的东西",
      en: "**Watching how the rate of an enzyme reaction depends on substrate concentration showed that even the simplest enzyme reaction proceeds in two steps, not one:** E + A ⇌ EA → E + X. The evidence is the shape of that dependence, and the two steps are what the AK dip in the energy diagram stands for.",
      cn: "**通过观察酶反应速率如何随底物浓度变化，人们发现：即使最简单的酶反应也是分两步进行，而不是一步：**E + A ⇌ EA → E + X。证据就是这条依赖关系的形状；而能量图上 AK 那个凹处，代表的正是这两步之间的那一站。",
      src: "CZ p.55"
    },
    {
      link_en: "first step",
      link_cn: "第一步",
      en: "**In the first step the substrate A joins the enzyme E to form the enzyme-substrate complex EA, and this step is fast and reversible, with E and A held together only by weak interactions.** Weak means non-covalent — the substrate is gripped, not bonded, so it can also fall off again unchanged.",
      cn: "**第一步，底物 A 与酶 E 结合，形成酶-底物复合物 EA；这一步快速且可逆，E 与 A 之间仅由弱相互作用维系。**「弱」就是非共价：底物是被「抓住」而不是被「接上」，所以它也可以原封不动地重新掉下来。",
      src: "CZ p.55"
    },
    {
      link_en: "second step",
      link_cn: "第二步",
      recall_en: "the opposite of the first step in both respects",
      recall_cn: "在两个方面都与第一步相反",
      en: "**In the second phase the actual chemical conversion happens: the EA complex breaks down into the free enzyme E and the product X, and this step is slower and irreversible.** Slower and irreversible together are what make the rate of the whole reaction depend on how much EA there is — which is the reason the substrate concentration matters at all.",
      cn: "**第二阶段发生真正的化学转变：EA 复合物分解为游离的酶 E 和产物 X；这一步较慢，且不可逆。**「较慢」加上「不可逆」，正是整个反应的速率取决于 EA 有多少的原因 —— 底物浓度之所以要紧，根子就在这里。",
      src: "CZ p.55"
    },
    {
      link_en: "one piece of bookkeeping before any equation is written down",
      link_cn: "在写下任何方程之前，先交代一件记号上的事",
      en: "**This textbook writes the substrate as A, the product as X and the maximal rate as V_lim, where most English books write S, P and V_max.** The scheme is E + A ⇌ EA → E + X. It is worth fixing in mind now, because an equation copied from one book into the other looks wrong when it is not.",
      cn: "**本教材把底物写作 A、产物写作 X、最大速率写作 V_lim，而多数英文教材写作 S、P、V_max。**反应式为 E + A ⇌ EA → E + X。现在就把这套记号钉住是值得的：两本书之间抄来的方程会看起来是错的，其实并没有错。",
      src: "CZ p.55"
    },
    {
      link_en: "with the two steps in hand, the rate curve has a shape and the shape has two constants",
      link_cn: "有了这两步，速率曲线就有了形状，而形状里藏着两个常数",
      en: "**Plot the initial rate against substrate concentration and the result is a hyperbola, and two constants are read off it: V_lim, the ceiling the curve flattens towards when every enzyme molecule is occupied, and K_m, the Michaelis constant, which is the substrate concentration at which the rate is exactly half of V_lim.** A low K_m therefore means the enzyme reaches half speed while there is very little substrate about — that is, it holds its substrate tightly.",
      cn: "**以初速率对底物浓度作图，得到的是一条双曲线，而从这条曲线上读出两个常数：V_lim 是每一个酶分子都被占满时曲线所趋平的那个上限；K_m（米氏常数）是速率恰为 V_lim 一半时的底物浓度。**所以 K_m 小就意味着底物很少时该酶就能跑到半速 —— 也就是它抓底物抓得紧。",
      src: "CZ pp.55–56",
      beyond: true,
      beyondNote: "pp.55–56, which carry the derivation of the Michaelis–Menten equation and the definition of K_m, are not in the extracted page set; this statement is standard course material and the derivation itself is done properly in L-6-3-1.",
      see: [{ id: "L-6-3-1", en: "the derivation in four steps, and what K_m is and is not", cn: "四步推导，以及 K_m 是什么、不是什么" }]
    },
    {
      link_en: "V_lim is a ceiling the curve never actually touches, so people straighten the curve out",
      link_cn: "V_lim 是曲线永远碰不到的上限，于是人们把曲线拉直",
      en: "**Take the reciprocal of both sides and the hyperbola becomes a straight line — equation (7) as the book prints it, 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim, whose slope is K_m/V_lim and whose intercept on the 1/v axis is 1/V_lim.** This is the Lineweaver–Burk plot, and the point of it is that a straight line can be extended to an axis by ruler, whereas a ceiling approached asymptotically can only be guessed at.",
      cn: "**把等式两边取倒数，双曲线就变成直线 —— 即书中所印的方程 (7)：1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim，其斜率为 K_m/V_lim，在 1/v 轴上的截距为 1/V_lim。**这就是 Lineweaver–Burk 作图；它的意义在于：直线可以用尺子延长到坐标轴上去，而一条渐近趋于上限的曲线只能靠猜。",
      src: "CZ p.57, equation (7)",
      see: [{ id: "L-6-3-1", en: "the same plot, plus the warning about where its error bars go", cn: "同一张图，外加它的误差落在哪里的警告" }]
    },
    {
      link_en: "there is a second way to get the same two numbers, and it needs no reciprocals at all",
      link_cn: "拿到同样两个数字还有第二条路，而且完全不用取倒数",
      en: "**Cornish-Bowden and Eisenthal proposed a simpler determination that follows from the shape of the hyperbola itself: the coordinates of the point where the two asymptotes of that hyperbola cross are precisely −K_m and V_lim.** In Obr. 3.4 the crossing point is read straight off, −K_m on the [A] axis and V_lim on the v axis, so both constants come out of one drawing without any algebra.",
      cn: "**Cornish-Bowden 与 Eisenthal 提出了一种更简便的测定法，它直接来自双曲线本身的性质：这条双曲线两条渐近线交点的坐标，恰好就是 −K_m 与 V_lim。**在图 3.4 中，交点可以直接读出：[A] 轴上是 −K_m，v 轴上是 V_lim —— 一张图就把两个常数都交了出来，不必做任何代数。",
      src: "CZ p.57, Obr. 3.4"
    }
  ],
  terms: [
    { en: "activation energy", cn: "活化能",
      def_en: "The energy that must be supplied to the molecules of a starting substance before they can cross the barrier separating them from the product. It is what sets the rate of a reaction.",
      def_cn: "起始物分子在越过通向产物的那道能垒之前必须获得的能量。它决定反应的速率。" },
    { en: "catalysis", cn: "催化",
      def_en: "A catalyst joins the reactants temporarily so that the reaction runs by another mechanism with a lower barrier. The catalyst comes out unchanged and is not consumed.",
      def_cn: "催化剂暂时与反应物结合，使反应沿另一条能垒更低的机制进行。催化剂本身不变，也不被消耗。" },
    { en: "thermolabile", cn: "热不稳定",
      def_en: "Destroyed by heat. Organisms are, which is exactly why raising the temperature is not available to them as a way of speeding a reaction up.",
      def_cn: "会被热毁掉。生物体正是如此 —— 这恰恰是它们不能靠升温来加快反应的原因。" },
    { en: "enzyme–substrate complex", cn: "酶-底物复合物 (EA)",
      def_en: "EA, formed in the first step of every enzyme reaction. Fast, reversible, and held only by weak non-covalent interactions.",
      def_cn: "EA，在每个酶反应的第一步中形成。快速、可逆，仅由弱的非共价相互作用维系。" },
    { en: "V_lim", cn: "V_lim（极限速率）",
      def_en: "This textbook's symbol for the maximal rate, the ceiling reached when every enzyme molecule is occupied by substrate. Written V_max in most English books.",
      def_cn: "本教材表示最大速率的符号，即每个酶分子都被底物占满时达到的上限。多数英文教材写作 V_max。" },
    { en: "K_m", cn: "米氏常数 K_m",
      def_en: "The substrate concentration at which the reaction runs at half its limiting rate. A low value means half speed is reached with little substrate about, so the enzyme holds its substrate tightly.",
      def_cn: "反应速率达到极限速率一半时的底物浓度。数值小意味着底物很少时就能跑到半速，即该酶抓底物抓得紧。" },
    { en: "Lineweaver–Burk plot", cn: "Lineweaver–Burk 作图",
      def_en: "1/v against 1/[A], a straight line of slope K_m/V_lim cutting the vertical axis at 1/V_lim. A ruler now does what extrapolating towards a ceiling could not.",
      def_cn: "以 1/v 对 1/[A] 作图，得到斜率为 K_m/V_lim、在纵轴上截距为 1/V_lim 的直线。用尺子就能完成原先向上限外推所做不到的事。" },
    { en: "direct linear plot", cn: "直接线性作图",
      def_en: "The Cornish-Bowden and Eisenthal construction: the two asymptotes of the rate hyperbola cross at a point whose coordinates are −K_m and V_lim, so both constants are read off one drawing.",
      def_cn: "Cornish-Bowden 与 Eisenthal 的作法：速率双曲线的两条渐近线交于一点，其坐标即 −K_m 与 V_lim，两个常数从一张图上直接读出。" }
  ]
};

/* ------------------------------------------------------------------ 3-3-2 */
window.BIOLITE_SPINE["3-3-2"] = {
  assumed: ["nad+", "nadh"],
  nodeTitle_en: "Two-substrate reactions",
  nodeTitle_cn: "双底物反应",
  title_en: "Michaelis and Menten wrote for one substrate; most enzymes take two, and everything turns on whether both are on the enzyme at once",
  title_cn: "米氏方程是为单底物写的；多数酶要用两个底物，而一切取决于这两个是不是同时坐在酶上",
  steps: [
    {
      en: "The Michaelis–Menten equation was derived for a reaction in which a single substrate is converted, and when two substrates take part the situation is more complicated. **In principle there are exactly two mechanisms for a two-substrate reaction, and they are separated by one question: are both substrates sitting on the enzyme at the same moment?**",
      cn: "米氏方程是针对「只有一种底物发生转变」的反应推出来的；当有两种底物参与时，情况更复杂。**原则上双底物反应只有两种机制，而把它们分开的只有一个问题：两种底物是不是在同一时刻都坐在酶上？**",
      src: "CZ p.57, §3.3.2",
      see: [{ id: "3-3-1", en: "the single-substrate equation this one departs from", cn: "本节所偏离的那个单底物方程" }]
    },
    {
      link_en: "answer yes, and the complex has three members in it",
      link_cn: "回答「是」，那么复合物里就有三位成员",
      en: "**In mechanism (a) a ternary complex is formed — ternary meaning three-membered, here the enzyme with both substrates bound to it simultaneously, written EAB.** Because both are held at once, the group being transferred passes straight from one substrate to the other without ever leaving the active site.",
      cn: "**在机制 (a) 中形成三元复合物（ternary complex）—— 「三元」就是三个成员：酶加上同时结合在它身上的两种底物，写作 EAB。**由于两者同时被握住，被转移的基团可以直接从一个底物交到另一个底物手上，全程不必离开活性部位。",
      src: "CZ p.57"
    },
    {
      link_en: "and a three-membered complex can be assembled in either of two ways",
      link_cn: "而三元复合物的组装方式又有两种",
      en: "**A ternary-complex mechanism is called random when the order in which the two substrates bind to the enzyme does not matter — either one may arrive first.** Random binding means the enzyme has two open sites at all times, so neither substrate has to wait for the other.",
      cn: "**当两种底物结合到酶上的顺序无关紧要、哪一个先到都行时，这种三元复合物机制称为无序的（random）。**「无序」意味着酶身上两个结合位置始终都是敞开的，谁也不必等谁。",
      src: "CZ p.57"
    },
    {
      link_en: "or the other way",
      link_cn: "或者是另一种",
      recall_en: "the opposite of the case one step up",
      recall_cn: "与上一步的情形正好相反",
      en: "**It is called ordered when a strict order applies to the binding of the substrates, so one of them cannot bind at all until the other is already in place.** Ordered binding usually means the first substrate completes the site that the second one needs, so the site does not exist until the first arrival has made it.",
      cn: "**当底物的结合遵循严格顺序、其中一个必须等另一个先就位才能结合时，这种机制称为有序的（ordered）。**有序结合通常意味着：第二个底物所需要的那个结合位置，是由第一个底物补齐的 —— 它没到之前，那个位置根本不存在。",
      src: "CZ p.57",
      beyond: true,
      beyondNote: "The book states only that a strict order applies; the reason ordered binding usually has — the first substrate completing the second one's site — is standard course material and is not on p.57."
    },
    {
      link_en: "answer no to the opening question, and the enzyme itself becomes the carrier",
      link_cn: "如果开头那个问题回答「否」，酶自己就成了搬运工",
      en: "**In mechanism (b), the ping-pong mechanism, no ternary complex arises at all: the enzyme reacts with the first substrate A, the binary complex EA that forms breaks down releasing the first product X and leaving behind a modified enzyme E′ — an enzyme now carrying the transferred group covalently attached to itself.** Binary here means two-membered, enzyme plus one substrate.",
      cn: "**在机制 (b)、即乒乓机制（ping-pong）中，根本不形成三元复合物：酶先与第一种底物 A 反应，所生成的二元复合物 EA 分解，放出第一个产物 X，留下一个被修饰过的酶 E′ —— 此时被转移的基团以共价方式挂在酶自己身上。**这里的「二元」就是两个成员：酶加一个底物。",
      src: "CZ pp.57–58"
    },
    {
      link_en: "and the second half of the swing puts the enzyme back",
      link_cn: "而这一来一回的后半程把酶送回原样",
      en: "**The modified enzyme E′ then reacts with the second substrate B, releasing the second product Y and regenerating the enzyme — so in a ping-pong mechanism the first product has already left before the second substrate ever arrives, which a ternary-complex mechanism can never do.** A second binary complex E′B forms on the way, and the name comes from the shape of the whole: the enzyme is knocked one way by A and back the other way by B.",
      cn: "**被修饰的酶 E′ 随后与第二种底物 B 反应，放出第二个产物 Y 并使酶再生 —— 所以在乒乓机制里，第一个产物在第二种底物到来之前就已经离开，这是三元复合物机制永远做不到的。**中途还会生成第二个二元复合物 E′B；名字则来自这一整套的形状：A 把酶打到一边，B 再把它打回来。",
      src: "CZ p.58"
    },
    {
      link_en: "and that difference shows up on a graph you already know how to draw",
      link_cn: "而这个差别，会显示在一张你已经会画的图上",
      en: "**Measure the rate at several fixed concentrations of one substrate while varying the other, plot each series as a Lineweaver–Burk line, and a ping-pong mechanism gives a family of parallel lines while a ternary-complex mechanism gives lines that intersect.** That is how the two are told apart experimentally rather than by argument.",
      cn: "**把其中一种底物固定在若干不同浓度上、改变另一种底物来测速率，每一组各画一条 Lineweaver–Burk 直线：乒乓机制给出一族平行线，而三元复合物机制给出彼此相交的直线。**这就是在实验上、而不是靠推理，把两者区分开的办法。",
      src: "CZ pp.57–58",
      beyond: true,
      beyondNote: "The parallel-versus-intersecting diagnostic is standard course material and is examinable, but pp.57–58 give the two mechanisms only as schemes and do not draw the kinetic test.",
      see: [{ id: "3-3-1", en: "the Lineweaver–Burk line itself", cn: "Lineweaver–Burk 直线本身" }]
    },
    {
      link_en: "and the commonest two-substrate reactions are ones you would not think of as having two substrates",
      link_cn: "而最常见的双底物反应，恰恰是你不会觉得它有两个底物的那些",
      recall_en: "the weakly bound coenzyme of the previous node, now cashed in",
      recall_cn: "上一节里那种弱结合的辅酶，在这里被兑现",
      en: "**The standard examples of two-substrate enzyme reactions are the reactions of enzymes working with nicotinamide coenzymes — NAD⁺ and NADP⁺ — because such a coenzyme is needed in stoichiometric amount, one molecule consumed per molecule of substrate turned over, and from the kinetic standpoint it therefore has the character of a substrate.** So every dehydrogenase reaction you will meet later is a two-substrate reaction, and the coenzyme is the second substrate.",
      cn: "**双底物酶反应的标准例子，是那些与烟酰胺辅酶（NAD⁺ 与 NADP⁺）一起工作的酶：这类辅酶在反应中是以化学计量的量被需要的 —— 每转化一个底物分子就消耗一个辅酶分子 —— 所以从动力学角度看，它具有底物的性质。**于是后面遇到的每一个脱氢酶反应都是双底物反应，而那第二个底物就是辅酶。",
      src: "CZ p.58",
      see: [{ id: "3-2", en: "why a weakly bound coenzyme behaves as a substrate", cn: "弱结合的辅酶为什么表现得像底物" }]
    }
  ],
  terms: [
    { en: "ternary complex", cn: "三元复合物",
      def_en: "EAB — the enzyme with both substrates bound to it at the same time. The transferred group never leaves the active site.",
      def_cn: "EAB —— 酶同时结合着两种底物。被转移的基团始终不离开活性部位。" },
    { en: "random mechanism", cn: "无序机制",
      def_en: "A ternary-complex route in which the order of substrate binding does not matter; either substrate may arrive first.",
      def_cn: "一种三元复合物途径，底物结合的顺序无关紧要，哪一个先到都行。" },
    { en: "ordered mechanism", cn: "有序机制",
      def_en: "A ternary-complex route with a strict binding order: the second substrate cannot bind until the first is in place.",
      def_cn: "一种三元复合物途径，结合顺序严格：第一个底物不就位，第二个就无法结合。" },
    { en: "ping-pong mechanism", cn: "乒乓机制",
      def_en: "No three-membered complex arises. The enzyme is transiently modified by the first substrate, releases the first product, then reacts with the second substrate and is regenerated.",
      def_cn: "不出现三成员复合物。酶先被第一种底物暂时修饰，放出第一个产物，再与第二种底物反应并复原。" },
    { en: "binary complex", cn: "二元复合物",
      def_en: "A two-membered complex: the enzyme plus one substrate. EA and E′B in the ping-pong scheme are both of this kind.",
      def_cn: "两个成员的复合物：酶加一种底物。乒乓机制中的 EA 与 E′B 都属此类。" }
  ]
};

/* ------------------------------------------------------------------ 3-3-3 */
window.BIOLITE_SPINE["3-3-3"] = {
  assumed: [],
  nodeTitle_en: "Measurement of enzyme activity",
  nodeTitle_cn: "酶活性的测定",
  title_en: "You usually cannot weigh an enzyme, so you count what it does — and each unit in the section counts a different thing",
  title_cn: "酶通常称不出重量，于是改为清点它做了什么 —— 而本节的每一个单位，清点的都是不同的东西",
  steps: [
    {
      en: "The quantity of an enzyme could be expressed in grams or in moles, as with any other substance, but only when working with a pure enzyme whose molecular mass is known. **Neither of those two conditions is usually met, so the quantity of an enzyme is expressed instead by its activity — by how much reaction it produces per unit time.**",
      cn: "酶的量本可以像任何其他物质一样用克或摩尔来表示，但那只限于处理分子质量已知的纯酶。**这两个条件通常都不满足，所以酶的量改用它的活性来表示 —— 即单位时间内它促成了多少反应。**",
      src: "CZ p.58, §3.3.3"
    },
    {
      link_en: "which means an activity number is only worth anything if four things are known first",
      link_cn: "这就意味着：一个活性数值只有在先知道四件事的前提下才算数",
      en: "**The first requirement is that the chemical nature of the reaction the enzyme catalyses must be known in advance, and a simple method must be available for following the decrease of substrate, or better, the increase of product with time.** Product is better because it starts from zero, and a small quantity appearing against nothing is far easier to measure than the same small quantity disappearing out of a large amount.",
      cn: "**第一项要求：必须事先知道该酶所催化反应的化学本质，并且掌握一种简便方法来追踪底物随时间的减少，或者更好地，产物随时间的增加。**追踪产物更好，因为产物是从零开始的：在「无」的背景上出现一点点，比在一大堆里少掉同样一点点要好测得多。",
      src: "CZ p.58"
    },
    {
      link_en: "the second requirement is the one that makes the number mean anything at all",
      link_cn: "第二项要求，才是让这个数值真正有意义的那一项",
      en: "**K_m must be known for the substrate used, so that the measurement can be carried out at saturating substrate concentration — the region where the reaction proceeds with kinetics of the zeroth order, meaning the rate no longer depends on how much substrate is present but is proportional to the enzyme concentration.** That proportionality is the whole point: only under saturation does the measured rate report the amount of enzyme rather than the amount of substrate.",
      cn: "**必须知道所用底物的 K_m 值，以便在饱和底物浓度下进行测定 —— 在这个区域里反应按零级动力学进行，也就是速率不再取决于底物有多少，而是与酶的浓度成正比。**这个正比关系就是全部要害所在：只有在饱和条件下，测出来的速率报告的才是酶的量，而不是底物的量。",
      src: "CZ p.58",
      see: [{ id: "3-3-1", en: "where K_m comes from", cn: "K_m 是从哪里来的" }]
    },
    {
      link_en: "and two conditions of the environment have to be pinned down as well",
      link_cn: "还有两项环境条件也必须钉死",
      en: "**The pH optimum of the enzyme — the pH value at which that enzyme is fastest — must be known, and so must the influence of temperature on it.** Both change the measured rate on their own, so an activity quoted without them is a number without conditions attached.",
      cn: "**还必须知道该酶的 pH 最适值 —— 即该酶跑得最快时的那个 pH —— 以及温度对它的影响。**这两者本身就会改变测得的速率，所以一个不附带条件的活性数值，是一个没有意义的数。",
      src: "CZ p.58",
      see: [{ id: "3-4", en: "what pH and temperature actually do to an enzyme", cn: "pH 与温度究竟对酶做了什么" }]
    },
    {
      link_en: "with all four fixed, activity can be given a unit",
      link_cn: "四项都固定下来之后，活性就可以有一个单位了",
      en: "**The standard unit of enzyme activity, written U, is that amount of enzyme which converts 1 μmol of substrate in 1 minute under standard conditions — standard meaning at the pH optimum of that enzyme and at 25 °C.** Note what is being defined: not a rate, but an amount of enzyme, measured by the rate it produces.",
      cn: "**酶活性的标准单位记作 U，指在标准条件下每分钟转化 1 μmol 底物所需的酶量 —— 「标准条件」就是该酶的 pH 最适值和 25 °C。**注意这里被定义的是什么：不是速率，而是酶的量，只不过用它所产生的速率来度量。",
      src: "CZ p.58"
    },
    {
      link_en: "and the same idea again in the units the Si system prefers",
      link_cn: "同一个想法，换成国际单位制偏好的写法",
      en: "**In the Si system of units a new unit of enzyme activity was introduced, the katal: that amount of enzyme which converts 1 mol of substrate in 1 second, so that 1 kat = 6·10⁷ U.** The factor comes from the two changes together, mole against micromole and second against minute.",
      cn: "**在国际单位制中引入了新的酶活性单位「开特」(katal)：每秒转化 1 mol 底物所需的酶量，于是 1 kat = 6·10⁷ U。**这个换算因子来自两处改动的叠加：摩尔对微摩尔，秒对分钟。",
      src: "CZ p.58"
    },
    {
      link_en: "from that one unit, three different quantities are built, and they answer three different questions",
      link_cn: "由这一个单位又造出三个量，它们回答三个不同的问题",
      en: "**The concentration of an enzyme is its activity related to unit volume, U/ml — the answer to how much enzyme is in this tube.**",
      cn: "**酶的浓度是相对于单位体积的活性，U/ml —— 它回答的是「这一管里有多少酶」。**",
      src: "CZ p.58"
    },
    {
      link_en: "the second question is about the preparation rather than the tube",
      link_cn: "第二个问题问的是这份制剂，而不是这一管",
      en: "**The specific activity is the activity related to the amount of protein, U/mg, and it is the measure of the purity of an enzyme preparation.** It works as a purity measure because purification removes protein that is not the enzyme while leaving the activity alone, so the ratio climbs at every step and stops climbing when nothing but the enzyme is left.",
      cn: "**比活性是相对于蛋白质量的活性，U/mg，它是酶制剂纯度的量度。**它之所以能当纯度用，是因为纯化过程拿走的是不属于该酶的蛋白，而活性原封不动 —— 于是这个比值每一步都往上走，直到只剩下该酶时才停下来。",
      src: "CZ p.58",
      see: [{ id: "L-3-3-1", en: "the purification table where that ratio is read step by step", cn: "把这个比值一步步读下来的那张纯化表" }]
    },
    {
      link_en: "and the third question is about the enzyme molecule itself",
      link_cn: "第三个问题问的是酶分子本身",
      recall_en: "specific activity measured the preparation; this measures the molecule",
      recall_cn: "比活性量的是制剂，这一项量的是分子",
      en: "**The measure of the catalytic ability of an enzyme is its molecular activity, MA, formerly called the turnover number, TN: the number of substrate molecules converted by one enzyme molecule in 1 minute.** It is obtained from the limiting rate together with the molecular mass of the enzyme, and unlike specific activity it cannot be improved by purifying anything — it is a property of the molecule.",
      cn: "**酶催化能力的量度是它的分子活性 (MA)，旧称转换数 (TN)：一个酶分子在 1 分钟内所转化的底物分子数。**它由极限速率连同酶的分子质量算出；与比活性不同，它不会因为你把样品提纯而变好 —— 它是分子本身的性质。",
      src: "CZ p.58",
      see: [{ id: "L-6-3-1", en: "the same quantity per second, called kcat, and why it is not the whole story", cn: "同一个量按秒计，叫 kcat，以及它为什么不是全部" }]
    }
  ],
  terms: [
    { en: "unit U", cn: "单位 U",
      def_en: "The amount of enzyme converting 1 μmol of substrate per minute at that enzyme's pH optimum and 25 °C. An amount of enzyme, expressed through the rate it produces.",
      def_cn: "在该酶的 pH 最适值与 25 °C 下，每分钟转化 1 μmol 底物的酶量。它是一个酶的量，只是用它产生的速率来表达。" },
    { en: "katal", cn: "开特 (katal)",
      def_en: "The Si unit: the amount of enzyme converting 1 mol of substrate per second. 1 kat = 6·10⁷ U.",
      def_cn: "国际单位制单位：每秒转化 1 mol 底物的酶量。1 kat = 6·10⁷ U。" },
    { en: "specific activity", cn: "比活性",
      def_en: "Activity per amount of protein, U/mg. The measure of how pure an enzyme preparation is, because purification removes protein and leaves activity.",
      def_cn: "单位蛋白质量的活性，U/mg。它衡量一份酶制剂有多纯，因为纯化拿走的是蛋白而留下的是活性。" },
    { en: "molecular activity", cn: "分子活性 (MA)",
      def_en: "Formerly the turnover number: substrate molecules converted by a single enzyme molecule per minute. The measure of catalytic ability, and a property of the molecule that purification cannot change.",
      def_cn: "旧称转换数：单个酶分子每分钟转化的底物分子数。它衡量催化能力，是分子自身的性质，纯化改变不了。" },
    { en: "zeroth-order kinetics", cn: "零级动力学",
      def_en: "The regime at saturating substrate concentration, where rate no longer depends on substrate and is proportional to enzyme concentration. The condition every activity assay has to be run in.",
      def_cn: "饱和底物浓度下的状态：速率不再取决于底物，而与酶浓度成正比。所有活性测定都必须在这个条件下进行。" }
  ]
};

/* ------------------------------------------------------------------ 3-4 */
window.BIOLITE_SPINE["3-4"] = {
  assumed: ["taq polymerase", "pcr"],
  nodeTitle_en: "Influence of pH and temperature on enzyme reactions",
  nodeTitle_cn: "pH 与温度对酶反应的影响",
  title_en: "Both curves have a maximum, for two completely different reasons, and only one of the two optima is a real property of the enzyme",
  title_cn: "两条曲线都有极大值，原因却完全不同 —— 而这两个最适值里，只有一个真正属于酶自身",
  steps: [
    {
      en: "**The activity of most enzymes depends on the concentration of H⁺ in the environment, and for most of them that dependence has the shape of a curve with a maximum; the pH value corresponding to the highest activity is called the pH optimum.** A curve with a maximum means activity falls off on both sides, so an enzyme is damaged by too little acid as surely as by too much.",
      cn: "**多数酶的活性取决于环境中 H⁺ 的浓度；对多数酶而言，这种依赖关系呈现为一条带极大值的曲线，而对应最高活性的那个 pH 值称为 pH 最适值。**「带极大值」意味着两侧都会下降：酸太少和酸太多，对酶同样不利。",
      src: "CZ p.58, §3.4"
    },
    {
      link_en: "and the reason is chemistry that happens to one specific part of the molecule",
      link_cn: "而其原因，是发生在分子上某一特定部位的化学",
      en: "**The essence of the influence of H⁺ on an enzyme is the acid-base character of the enzyme molecule, and especially of that part of it called the active centre — the small region where the enzyme makes contact with its substrate and where the groups that do the catalysis sit.** Those groups work only while they are in one particular state of ionisation, and pH is what decides that state.",
      cn: "**H⁺ 对酶产生影响的本质，是酶分子的酸碱特性，尤其是被称为活性中心的那一部分的酸碱特性 —— 活性中心就是酶与底物接触、且承担催化的那些基团所在的那一小块区域。**这些基团只有处在某一特定的解离状态时才能工作，而决定这个状态的正是 pH。",
      src: "CZ p.58",
      see: [{ id: "3-6", en: "the active centre in full, and which groups do the acid-base work", cn: "活性中心的完整讨论，以及究竟哪些基团在做酸碱催化" }]
    },
    {
      link_en: "and the enzyme is not the only thing in the tube with ionisable groups",
      link_cn: "而管子里带可解离基团的并不只有酶",
      en: "**The pH of the environment may also influence the dissociation of the substrate.** So a measured pH curve mixes two effects — what the proton does to the enzyme and what it does to the substrate — and separating them takes more than one experiment.",
      cn: "**环境的 pH 也可能影响底物的解离。**所以一条测出来的 pH 曲线里混着两件事 —— 质子对酶做了什么，以及质子对底物做了什么 —— 要把它们分开，一个实验是不够的。",
      src: "CZ p.58",
      see: [{ id: "L-6-3-1", en: "the experiment that separates them, done on chymotrypsin", cn: "把两者分开的那个实验，做在胰凝乳蛋白酶上" }]
    },
    {
      link_en: "one thing about that optimum is regularly assumed and is not true",
      link_cn: "关于这个最适值，有一个常被默认、但并不成立的说法",
      en: "**The value of the pH optimum of an enzyme need not coincide with the pH value at which the enzyme has to function in the organism.** An enzyme sitting in a compartment held away from its own optimum is therefore working at less than its maximum rate, permanently and by design.",
      cn: "**一个酶的 pH 最适值，不一定与它在生物体内实际必须工作时所处的 pH 相一致。**因此，一个待在偏离自身最适值的区室里的酶，是长期地、按设计地以低于最大速率的状态在工作。",
      src: "CZ p.59"
    },
    {
      link_en: "and that gap is not a defect. It is a control knob",
      link_cn: "而这个落差不是缺陷，它是一个旋钮",
      en: "**Precisely this influence of pH on enzyme activity is one of the tools by which the cell regulates enzyme activity and with it the whole of its metabolism.** An enzyme held off its optimum can be turned up or down by a shift in local pH alone, with no change to the enzyme itself and no new molecule required.",
      cn: "**正是 pH 对酶活性的这种影响，构成了细胞调节酶活性、并借此调节整个代谢的手段之一。**一个被按在最适值之外的酶，只靠局部 pH 的移动就能被调高或调低 —— 酶本身不必改变，也不需要额外的分子。",
      src: "CZ p.59",
      see: [{ id: "3-7", en: "the other regulatory tools, built into the enzyme itself", cn: "其他几种调节手段，那些是造在酶自己身上的" }]
    },
    {
      link_en: "now temperature, and it starts as ordinary chemistry",
      link_cn: "接下来是温度，它一开始只是普通化学",
      en: "**The rate of most chemical reactions, enzyme reactions included, increases approximately twofold when the temperature rises by 10 °C.** That much an enzyme shares with any reaction in any flask.",
      cn: "**多数化学反应（酶反应也在内）的速率，在温度每升高 10 °C 时约增加一倍。**这一点上，酶和任何烧瓶里的任何反应没有区别。",
      src: "CZ p.59"
    },
    {
      link_en: "and then it stops being ordinary chemistry, because the catalyst here is a protein",
      link_cn: "但接下来它就不再是普通化学了，因为这里的催化剂是蛋白质",
      en: "**Once the temperature exceeds a critical value, the thermal denaturation of the protein catalyst prevails and the rate of the enzyme reaction begins to fall** — thermal denaturation being the loss of the protein's folded structure under heat, which takes the active centre apart. Above that point every further degree destroys more enzyme than it accelerates.",
      cn: "**一旦温度超过某个临界值，蛋白质催化剂的热变性便占上风，酶反应的速率开始下降** —— 所谓热变性，就是蛋白质的折叠结构在热的作用下丧失，活性中心随之解体。过了这个点，每多升一度，被毁掉的酶都多于被加快的反应。",
      src: "CZ p.59"
    },
    {
      link_en: "so the peak that results is the meeting point of two processes pulling opposite ways",
      link_cn: "于是那个峰，是两个方向相反的过程相遇的地方",
      recall_en: "unlike the pH optimum four steps up, which belongs to the enzyme",
      recall_cn: "与上面那个属于酶自身的 pH 最适值不同",
      en: "**The temperature optimum of an enzyme is the result of these two opposing processes, and its value depends on the arrangement of the experiment.** Measure the same enzyme in two differently arranged experiments and two different optima come out, so a temperature optimum quoted without its assay conditions means nothing — whereas the pH optimum is a property of the enzyme molecule itself.",
      cn: "**酶的温度最适值是这两个方向相反的过程共同作用的结果，其数值取决于实验的设置方式。**同一个酶，在两种不同设置的实验里会得出两个不同的最适值；所以脱离测定条件去引用一个温度最适值毫无意义 —— 而 pH 最适值则是酶分子自身的性质。",
      src: "CZ p.59"
    },
    {
      link_en: "with numbers on it",
      link_cn: "给它配上数字",
      en: "**Most enzymes are inactivated at around 55–60 °C, although there exist enzymes — mostly from thermophilic bacteria, which are bacteria living in hot springs and similar places — that are still active even at 85 °C.**",
      cn: "**多数酶在 55–60 °C 左右失活；不过也存在一些酶 —— 多来自嗜热细菌，即生活在温泉一类环境中的细菌 —— 在 85 °C 下仍有活性。**",
      src: "CZ p.59"
    },
    {
      link_en: "and that exception turned out to be worth a great deal",
      link_cn: "而这个例外后来被证明极其值钱",
      en: "**A DNA polymerase taken from a thermophilic bacterium survives being boiled, and that is what makes the polymerase chain reaction possible:** the reaction has to be heated near 95 °C in every cycle to separate the two DNA strands, and an ordinary polymerase would be denatured on the first cycle and have to be replaced by hand at every one thereafter.",
      cn: "**从嗜热细菌里取出的 DNA 聚合酶能扛住煮沸，而正是这一点使聚合酶链式反应（PCR）成为可能：**该反应每一轮都必须升到接近 95 °C 才能把 DNA 双链分开，普通的聚合酶第一轮就会变性，此后每一轮都得靠人手重新加进去。",
      src: "CZ p.59",
      beyond: true,
      beyondNote: "p.59 gives only the 85 °C thermophile exception. Taq polymerase and PCR are standard, commonly examined, and are what the exception is famous for, so they are carried in here and flagged."
    }
  ],
  terms: [
    { en: "pH optimum", cn: "pH 最适值",
      def_en: "The pH at which an enzyme shows its highest activity. It arises from the acid-base character of the molecule, above all of the active centre, and it need not equal the pH the enzyme works at in the body.",
      def_cn: "酶表现出最高活性时的 pH。它源于酶分子（首先是活性中心）的酸碱特性，并且不一定等于该酶在体内工作时的 pH。" },
    { en: "temperature optimum", cn: "温度最适值",
      def_en: "The peak produced by two opposing processes — rate rising with heat, and the protein being destroyed by it. Its value depends on how the experiment is arranged, so it is not a constant of the enzyme.",
      def_cn: "由两个方向相反的过程叠加出的峰 —— 速率随热升高，蛋白质被热毁掉。其数值取决于实验设置，所以它不是酶的常数。" },
    { en: "thermal denaturation", cn: "热变性",
      def_en: "Loss of a protein's folded structure above a critical temperature, which takes the active centre apart and makes the reaction rate fall.",
      def_cn: "超过临界温度后蛋白质折叠结构的丧失，活性中心随之解体，反应速率下降。" },
    { en: "thermophilic bacteria", cn: "嗜热细菌",
      def_en: "Bacteria living in hot springs and similar places. Their enzymes are still active at 85 °C, against the usual inactivation at 55–60 °C.",
      def_cn: "生活在温泉一类环境中的细菌。它们的酶在 85 °C 下仍有活性，而一般的酶在 55–60 °C 就失活了。" },
    { en: "active centre", cn: "活性中心",
      def_en: "The small region of an enzyme where contact with the substrate is made and where the catalytic groups sit. Its groups work only in one state of ionisation, which is why pH matters.",
      def_cn: "酶上与底物接触、并容纳催化基团的那一小块区域。其基团只在某一种解离状态下才工作，pH 之所以要紧就在于此。" }
  ]
};

/* ------------------------------------------------------------------ 3-5 */
window.BIOLITE_SPINE["3-5"] = {
  assumed: [],
  nodeTitle_en: "Inhibition of enzyme reactions",
  nodeTitle_cn: "酶反应的抑制",
  title_en: "Every inhibitor is classified by which form of the enzyme it grabs, and each answer leaves its own fingerprint on the two constants",
  title_cn: "每一种抑制剂都按「它抓住的是酶的哪一种形式」来分类，而每一种答案都在两个常数上留下自己的指纹",
  steps: [
    {
      en: "**Substances that influence the rate of an enzyme reaction by interacting with the catalyst are called modulators: those that increase the rate are activators, those that decrease it are inhibitors.** Inhibitors occur in practice much more often, so they are what gets discussed — but everything said below holds for activators as well, only in the opposite sense.",
      cn: "**通过与催化剂相互作用而影响酶反应速率的物质，称为调节物（modulator）：使速率升高的是激活剂，使速率降低的是抑制剂。**抑制剂在实践中出现得频繁得多，所以下面讲的都是抑制剂 —— 但每一条对激活剂同样成立，只是意义相反。",
      src: "CZ p.59, §3.5"
    },
    {
      link_en: "and the first division among inhibitors is not about where it sits but about whether it ever lets go",
      link_cn: "抑制剂的第一重划分，不问它坐在哪里，只问它放不放手",
      en: "**In irreversible inhibition the inhibitor binds very firmly, mostly covalently, to the enzyme, modifies its functional groups and thereby inactivates it.** Covalently means a real chemical bond is formed, so the enzyme molecule that has been hit is not an enzyme any more; it is a permanently altered protein.",
      cn: "**在不可逆抑制中，抑制剂非常牢固地、通常以共价方式与酶结合，修饰酶的官能团，从而使酶失活。**「共价」意味着真的形成了一根化学键，所以被打中的那个酶分子已经不再是酶了 —— 它是一个被永久改造过的蛋白质。",
      src: "CZ p.59"
    },
    {
      link_en: "and that has an immediate consequence for the equation of the previous sections",
      link_cn: "这件事对前几节那个方程有一个直接后果",
      en: "**The Michaelis–Menten equation does not hold for irreversible inhibition, because the concentration of the active form of the enzyme is itself changing while the measurement runs.** That equation was derived with a fixed total amount of enzyme; here the enzyme is being destroyed as you watch, so K_m and V_lim have nothing constant to describe.",
      cn: "**米氏方程对不可逆抑制不成立，因为在测定进行的同时，酶的活性形式的浓度本身就在变。**那个方程是在「酶的总量固定」的前提下推出来的；而这里酶正在你眼皮底下被销毁，K_m 与 V_lim 也就没有任何恒定的东西可以描述。",
      src: "CZ p.59",
      see: [{ id: "3-3-1", en: "the equation and the assumption it was built on", cn: "那个方程，以及它赖以成立的前提" }]
    },
    {
      link_en: "a bond that never comes undone is useful for exactly two things",
      link_cn: "一根解不开的键，恰好有两种用处",
      en: "**Irreversible inhibition is used for studying the structure of enzymes, and the action of some chemical warfare agents has the character of irreversible inhibition of enzymes of nervous tissue.** The first use works because the inhibitor stays put: whichever residue it has bonded to can afterwards be located in the sequence, which identifies the group that was doing the catalysis.",
      cn: "**不可逆抑制被用来研究酶的结构；而某些化学战剂的作用，本质上就是对神经组织中某些酶的不可逆抑制。**第一种用途之所以成立，正因为抑制剂赖着不走：它与哪个残基成了键，事后就能在序列里把那个残基找出来 —— 于是承担催化的那个基团被指认了出来。",
      src: "CZ p.59",
      see: [{ id: "L-6-4-1", en: "the experiment that used an irreversible inhibitor to name the residue, on chymotrypsin", cn: "用不可逆抑制剂指认残基的那个实验，做在胰凝乳蛋白酶上" }]
    },
    {
      link_en: "the other branch: an inhibitor that comes and goes",
      link_cn: "另一条分支：来去自由的抑制剂",
      recall_en: "the opposite of the covalent case three steps up",
      recall_cn: "与上面共价那一支正好相反",
      en: "**In reversible inhibition the inhibitor binds to the enzyme only by weak interactions, so it can leave again and the enzyme is undamaged.** Reversible inhibitors provide valuable data about the substrate specificity of the enzyme and about the structure of its active centre — the small region where substrate is bound and converted — because a molecule that competes for that region has to resemble what fits into it.",
      cn: "**在可逆抑制中，抑制剂只以弱相互作用与酶结合，所以它还能离开，酶也毫发无损。**可逆抑制剂提供关于酶的底物特异性、以及关于活性中心结构的宝贵资料 —— 活性中心就是结合并转化底物的那一小块区域；因为一个能来争夺这块区域的分子，必须长得像能装进去的东西。",
      src: "CZ p.60"
    },
    {
      link_en: "and this is the branch the cell itself uses",
      link_cn: "而细胞自己用的正是这一支",
      en: "**Reversible inhibition of enzymes by specific metabolites is an important tool of the regulation of intermediary metabolism, and it is the basis of the action of some drugs.** A metabolite is any small molecule that the cell's own reactions make or consume, so this is the cell inhibiting itself with its own products.",
      cn: "**特定代谢物对酶的可逆抑制，是调节中间代谢的重要手段，也是某些药物起作用的基础。**所谓代谢物，就是细胞自身反应所生成或消耗的任何小分子 —— 也就是说，这是细胞在用自己的产物抑制自己。",
      src: "CZ p.60",
      see: [{ id: "3-7", en: "the enzymes built specifically to be inhibited that way", cn: "专门为「被这样抑制」而生的那类酶" }]
    },
    {
      link_en: "and because the enzyme survives, the equation survives too — which gives a way of sorting reversible inhibitors",
      link_cn: "既然酶活了下来，方程也就活了下来 —— 于是有了给可逆抑制剂分类的办法",
      en: "**The Michaelis–Menten equation can be applied to the action of reversible inhibitors, and from the kinetic standpoint they are divided in principle according to which form of the enzyme the inhibitor interacts with: the free enzyme E, giving the complex EI, or the enzyme-substrate complex EA, giving EAI.** Everything that follows is that one question answered three ways.",
      cn: "**米氏方程可以用于可逆抑制剂，而从动力学角度看，它们原则上按「抑制剂与酶的哪一种形式发生相互作用」来划分：是与游离酶 E 结合而生成 EI，还是与酶-底物复合物 EA 结合而生成 EAI。**下面三条，不过是这一个问题的三种答案。",
      src: "CZ p.60"
    },
    {
      link_en: "first answer: the free enzyme, and in the very place the substrate wanted",
      link_cn: "第一种答案：抓住游离酶，而且恰好抓在底物想去的地方",
      en: "**A competitive inhibitor is usually similar in structure to the substrate and binds to the free enzyme in the active centre itself, so substrate and inhibitor compete for one and the same place.** Its kinetic fingerprint follows directly: the apparent K_m rises, because more substrate is now needed to reach half speed, while V_lim is unchanged, because enough substrate always wins the competition in the end. That last part is the practical test — competitive inhibition can be overcome by raising the substrate concentration, and no other kind can.",
      cn: "**竞争性抑制剂通常在结构上与底物相似，并结合到游离酶的活性中心里，于是底物与抑制剂争夺同一个位置。**它的动力学指纹直接由此而来：表观 K_m 升高，因为现在需要更多底物才能跑到半速；而 V_lim 不变，因为底物只要够多，最终总能赢下这场争夺。最后这一点正是实用的判别法 —— 只有竞争性抑制能靠提高底物浓度解除，别的都不行。",
      src: "CZ p.60",
      beyond: true,
      beyondNote: "p.60, which carries the detailed treatment of competitive inhibition, is not in the extracted page set; the characteristics given here are standard course material. Obr. 3.6 on p.61 does show competitive inhibition as one of its three panels."
    },
    {
      link_en: "second answer: a place that is not the active centre at all",
      link_cn: "第二种答案：抓的地方根本不是活性中心",
      en: "**A non-competitive inhibitor interacts with functional groups lying outside the active centre of the enzyme which are nevertheless necessary for preserving its catalytic activity — heavy metal ions inhibiting SH-enzymes are the standard example, an SH-enzyme being one whose activity depends on a free sulfhydryl (–SH) group.** Since it does not compete for the substrate's place, it binds whether or not the substrate is already there.",
      cn: "**非竞争性抑制剂作用于活性中心之外、但对保持催化活性仍属必需的官能团 —— 标准例子是重金属离子抑制巯基酶（SH-enzyme），所谓巯基酶就是活性依赖于一个游离巯基（–SH）的酶。**由于它不去争夺底物的位置，所以底物在不在那里，它都照结合不误。",
      src: "CZ p.61"
    },
    {
      link_en: "and its fingerprint is the exact mirror image of the competitive one",
      link_cn: "而它的指纹，正是竞争性那一枚的镜像",
      recall_en: "competitive raised K_m and left V_lim alone; this does the reverse",
      recall_cn: "竞争性是 K_m 升高、V_lim 不动；这一种正好反过来",
      en: "**Experimentally, non-competitive inhibition shows in the graph as a decrease of V_max while the value of K_m does not change.** V_max falls because some enzyme molecules are simply out of action however much substrate is added, so this kind of inhibition cannot be overcome by more substrate; K_m is unchanged because the molecules still working bind their substrate exactly as they always did.",
      cn: "**在实验图形上，非竞争性抑制表现为 V_max 降低，而 K_m 值不变。**V_max 降低，是因为无论加多少底物，总有一部分酶分子就是不干活了 —— 所以这种抑制加底物是解除不了的；K_m 不变，则是因为还在干活的那些分子，结合底物的本事和从前一模一样。",
      src: "CZ p.61"
    },
    {
      link_en: "and non-competitive inhibition is a special case of something slightly wider",
      link_cn: "而非竞争性抑制，其实是某个更宽情形的特例",
      en: "**The general case of non-competitive inhibition is mixed inhibition: everything already said holds, except that the inhibitor's interaction with the free enzyme E and with the complex EA is not equally strong, that is K_i does not equal K_i′.** Non-competitive inhibition is therefore the special case where the two are equal and the inhibitor cannot tell E from EA.",
      cn: "**非竞争性抑制的一般情形是混合型抑制：前面说过的一切都成立，只是抑制剂与游离酶 E、与复合物 EA 的相互作用强度不再相同，即 K_i ≠ K_i′。**反过来说，非竞争性抑制就是这两者相等、抑制剂分不出 E 和 EA 的那个特例。",
      src: "CZ p.61"
    },
    {
      link_en: "third answer: the complex, and only the complex",
      link_cn: "第三种答案：只抓复合物，别的一概不抓",
      en: "**An uncompetitive inhibitor binds only to the enzyme-substrate complex EA and never to the free enzyme, and its fingerprint is that both K_m and V_max decrease.** Obr. 3.6 on p.61 puts the three reversible types side by side — non-competitive, competitive and uncompetitive — and the three fingerprints are what the figure is for: K_m up alone, V_max down alone, or both down together.",
      cn: "**反竞争性抑制剂只结合酶-底物复合物 EA，从不结合游离酶；它的指纹是 K_m 与 V_max 同时减小。**第 61 页的图 3.6 把三种可逆抑制并列画出 —— 非竞争性、竞争性、反竞争性 —— 而这张图要看的就是那三枚指纹：只有 K_m 升高、只有 V_max 降低，还是两者一起降低。",
      src: "CZ p.61, Obr. 3.6",
      beyond: true,
      beyondNote: "Obr. 3.6 and the name antikompetitivní are on the verified p.61; the K_m-and-V_max-both-fall characteristic belongs to the treatment on p.60, which is not in the extracted page set, and is standard course material.",
      see: [{ id: "L-6-3-1", en: "the three reversible types with the algebra behind each fingerprint", cn: "三种可逆抑制，连同每一枚指纹背后的代数" }]
    }
  ],
  terms: [
    { en: "modulators", cn: "调节物",
      def_en: "Substances that change the rate of an enzyme reaction by interacting with the catalyst. Activators raise the rate, inhibitors lower it, and the two obey the same rules in opposite directions.",
      def_cn: "通过与催化剂相互作用而改变酶反应速率的物质。激活剂使速率升高，抑制剂使之降低，两者服从同样的规律，方向相反。" },
    { en: "irreversible inhibition", cn: "不可逆抑制",
      def_en: "The inhibitor binds very firmly, mostly covalently, modifying the enzyme's functional groups and inactivating it. Michaelis–Menten does not apply, because the amount of active enzyme is falling during the measurement.",
      def_cn: "抑制剂非常牢固地、通常以共价方式结合，修饰酶的官能团并使之失活。米氏方程不适用，因为测定过程中活性酶的量正在下降。" },
    { en: "reversible inhibition", cn: "可逆抑制",
      def_en: "The inhibitor binds only by weak interactions and can leave again, so the enzyme is undamaged and Michaelis–Menten still applies. Types are sorted by which form of the enzyme is bound.",
      def_cn: "抑制剂只以弱相互作用结合，还能离开，酶毫发无损，米氏方程仍然适用。各类型按所结合的是酶的哪一种形式来划分。" },
    { en: "competitive inhibition", cn: "竞争性抑制",
      def_en: "The inhibitor resembles the substrate and occupies the active centre of the free enzyme. Apparent K_m rises, V_lim is unchanged, and enough substrate overcomes it.",
      def_cn: "抑制剂形似底物，占据游离酶的活性中心。表观 K_m 升高，V_lim 不变，加足够多的底物即可解除。" },
    { en: "non-competitive inhibition", cn: "非竞争性抑制",
      def_en: "The inhibitor acts on groups outside the active centre that are still needed for activity, and binds E and EA equally. V_max falls, K_m does not change, and more substrate does not help. Heavy metals on SH-enzymes are the example.",
      def_cn: "抑制剂作用于活性中心之外、但仍为活性所必需的基团，且与 E 和 EA 结合得一样好。V_max 降低，K_m 不变，加底物无济于事。例子是重金属作用于巯基酶。" },
    { en: "mixed inhibition", cn: "混合型抑制",
      def_en: "The general case, in which the inhibitor binds the free enzyme and the enzyme-substrate complex with different strength, K_i ≠ K_i′.",
      def_cn: "一般情形：抑制剂与游离酶、与酶-底物复合物结合的强度不同，K_i ≠ K_i′。" },
    { en: "uncompetitive inhibition", cn: "反竞争性抑制",
      def_en: "The inhibitor binds only to the enzyme-substrate complex EA, never to free enzyme. Both K_m and V_max decrease.",
      def_cn: "抑制剂只结合酶-底物复合物 EA，从不结合游离酶。K_m 与 V_max 同时减小。" },
    { en: "SH-enzymes", cn: "巯基酶",
      def_en: "Enzymes whose activity depends on a free sulfhydryl (–SH) group. Heavy metal ions bind such groups and are their classic non-competitive inhibitors.",
      def_cn: "活性依赖于游离巯基（–SH）的酶。重金属离子与这类基团结合，是它们经典的非竞争性抑制剂。" }
  ]
};

/* ------------------------------------------------------------------ 3-6 */
window.BIOLITE_SPINE["3-6"] = {
  assumed: ["histidine", "serine", "tyrosine", "aspartate", "glutamate", "lysine",
            "imidazole", "nitrophenol", "acetic acid"],
  nodeTitle_en: "Mechanism of enzyme action",
  nodeTitle_cn: "酶的作用机制",
  title_en: "Only a small piece of the enzyme does the work, and four devices inside that piece account for a rate increase of 10¹⁴",
  title_cn: "干活的只是酶身上很小的一块，而这一块里的四件装置，撑起了 10¹⁴ 倍的速率提升",
  steps: [
    {
      en: "**Only part of the enzyme molecule is responsible for its catalytic ability — the so-called active centre, which is the part where contact between enzyme and substrate is realised and where the groups responsible for the actual catalysis of the chemical reaction are located.** Everything else in the molecule is scaffolding that holds those groups in position.",
      cn: "**酶分子中只有一部分负责它的催化能力 —— 即所谓的活性中心：那是酶与底物实现接触的部位，也是真正承担化学反应催化任务的那些基团所在之处。**分子的其余部分，都是把这些基团固定在正确位置上的支架。",
      src: "CZ p.61, §3.6"
    },
    {
      link_en: "and the residues found in that part are not a random sample of the twenty",
      link_cn: "而这一块里出现的残基，并不是二十种氨基酸里随便挑的",
      en: "**In the active centre of an enzyme there are often localised amino acids with reactive side groups, such as histidine, serine and tyrosine.** Those three keep reappearing because their side chains can give away or take up a proton, or attack another molecule directly — an amino acid with an inert side chain cannot do catalysis, whatever position it occupies.",
      cn: "**酶的活性中心里，常常定位着带有反应性侧链基团的氨基酸，例如组氨酸、丝氨酸、酪氨酸。**这三个反复出现，是因为它们的侧链能交出或接过一个质子，或者直接去进攻另一个分子 —— 侧链惰性的氨基酸，不管占据什么位置都做不了催化。",
      src: "CZ p.61"
    },
    {
      link_en: "and those residues are neighbours in space without being neighbours in the chain",
      link_cn: "而这些残基在空间上是邻居，在链上却不是",
      en: "**The active centre forms a relatively small region in the tertiary structure of the enzyme molecule, but the amino acids belonging to it may be considerably distant from one another as regards the primary structure** — the primary structure being the order of amino acids along the chain, and the tertiary structure the shape that chain folds into. So an active centre cannot be found by reading a sequence; it exists only once the chain is folded, and it is destroyed the moment the fold is lost.",
      cn: "**活性中心在酶分子的三级结构中构成一个相对较小的区域，但属于它的那些氨基酸，就一级结构而言可能彼此相距很远** —— 一级结构是氨基酸沿链排列的顺序，三级结构是这条链折叠出来的形状。所以活性中心不可能靠读序列找到：它只有在链折叠好之后才存在，而折叠一旦丧失，它立刻消失。",
      src: "CZ p.61",
      see: [{ id: "3-4", en: "why losing the fold to heat is the same thing as losing the activity", cn: "为什么「被热毁掉折叠」和「失去活性」是同一件事" }]
    },
    {
      link_en: "the first of the two properties that make enzymes worth having",
      link_cn: "使酶值得拥有的两项性质，先说第一项",
      en: "**A significant feature of enzymes is the specificity of their action: an enzyme catalyses the conversion of only a certain substrate, which is substrate specificity, and the reaction it catalyses proceeds only in a certain way, which is specificity of action.** The reason this matters is stated plainly in the book: if it were not so, the cell would very quickly be flooded with undesirable products.",
      cn: "**酶的一个显著特征是其作用的特异性：一种酶只催化某一特定底物的转变，这叫底物特异性；而它所催化的反应只按某一特定方式进行，这叫作用特异性。**它之所以要紧，书里说得很直白：若非如此，细胞会很快被不需要的产物淹没。",
      src: "CZ p.61"
    },
    {
      link_en: "and specificity is a dial, not a switch",
      link_cn: "而特异性是一个可以旋的旋钮，不是一个开关",
      en: "**Enzymes differ in the degree of their substrate specificity: some are practically absolute and do not act even on molecules very similar to the substrate, while others attack a whole large group of substances that share only certain structural features.** Most recently it appears there also exist enzymes able to catalyse two different chemical reactions. Most enzymes are stereospecific, meaning they act on only one of two mirror-image forms of a molecule, and some can even distinguish between two identical substituents sitting on a non-chiral carbon — a distinction no ordinary chemical reagent can make at all.",
      cn: "**各种酶在底物特异性的程度上并不相同：有些实际上是绝对的，即使对与底物极为相似的分子也毫不动作；另一些则相反，会作用于一大类只共有某些结构特征的物质。**最新的看法是，还存在能催化两种不同化学反应的酶。多数酶是立体特异的，也就是只作用于一个分子两种互为镜像的形式中的一种；有些甚至能分辨非手性碳上两个完全相同的取代基 —— 这是任何普通化学试剂都根本做不到的区分。",
      src: "CZ p.61"
    },
    {
      link_en: "and the second property, with a number attached",
      link_cn: "第二项性质，而且带着一个数字",
      en: "**The second significant property of enzymes is their high efficiency: urease increases the rate of hydrolysis of urea 10¹⁴-fold compared with catalysis by hydrogen ions.** The consequence is the one that makes life chemically possible at all — thanks to enzymes, most reactions in the cell proceed in dilute solutions, at low temperature and at neutral pH, conditions under which the same reactions in a flask would take geological time.",
      cn: "**酶的第二项显著性质是高效率：与氢离子催化相比，脲酶使尿素水解的速率提高 10¹⁴ 倍。**其后果正是使生命在化学上成为可能的那一条 —— 多亏了酶，细胞里绝大多数反应得以在稀溶液中、低温下、中性 pH 下进行；而同样的反应放在烧瓶里，在这些条件下要花地质时间。",
      src: "CZ p.61"
    },
    {
      link_en: "so how is 10¹⁴ achieved? Four devices, and the first one costs no chemistry at all",
      link_cn: "那 10¹⁴ 倍是怎么做到的？四件装置，第一件根本不涉及化学",
      en: "**The proximity effect: binding the substrate to the enzyme brings an important group of the substrate close to the catalytic group of the enzyme in the active centre, and thereby creates the conditions for acceleration of the reaction.** An enzyme reaction is in fact not a normal reaction in solution — it takes place in the limited space of the active centre, where the substrates are not only concentrated but also correctly oriented. Two molecules in solution have to meet and meet in the right attitude; on an enzyme both of those have already happened before the chemistry starts.",
      cn: "**邻近效应：底物与酶结合之后，底物上某个重要基团被带到活性中心里酶的催化基团近旁，从而为反应的加速创造了条件。**酶反应其实并不是溶液中的普通反应 —— 它发生在活性中心那个有限的空间里，底物在那里不仅被浓集，而且被正确定向。溶液里的两个分子必须先相遇、且以正确的姿态相遇；而在酶上，这两件事在化学开始之前就已经办妥了。",
      src: "CZ p.61"
    },
    {
      link_en: "second device: the enzyme stops being a bystander and joins the reaction",
      link_cn: "第二件装置：酶不再旁观，它自己加入了反应",
      en: "**In covalent catalysis the enzyme forms, besides the enzyme-substrate complex, a very reactive and unstable covalently modified enzyme, which then breaks down very rapidly with formation of the product.** Chymotrypsin — a protease, that is an enzyme that cuts other proteins — works this way, and it does the same chemistry on a small ester: E–OH + NO₂–C₆H₄–O–CO–CH₃ gives E–O–CO–CH₃, the acetylated enzyme, plus nitrophenol as the first product; then E–O–CO–CH₃ + H₂O gives back E–OH plus CH₃COOH as the second product. Two products leaving at two different moments, with a modified enzyme in between, is exactly the ping-pong pattern.",
      cn: "**在共价催化中，酶除了形成酶-底物复合物之外，还形成一种反应性极强、很不稳定的共价修饰酶，后者随即极快地分解并生成产物。**胰凝乳蛋白酶（chymotrypsin）—— 一种蛋白酶，也就是切割其他蛋白质的酶 —— 就按这种方式工作，而且它对一个小酯做的是同样的化学：E–OH + NO₂–C₆H₄–O–CO–CH₃ 生成 E–O–CO–CH₃（乙酰化的酶）以及第一个产物硝基酚；随后 E–O–CO–CH₃ + H₂O 又还原出 E–OH，并给出第二个产物 CH₃COOH。两个产物在两个不同时刻离开，中间夹着一个被修饰的酶 —— 这正是乒乓机制的形状。",
      src: "CZ p.62",
      see: [
        { id: "L-6-4-1", en: "the 1954 experiment that caught that acetyl-enzyme in the act", cn: "1954 年那个当场抓住乙酰化酶的实验" },
        { id: "3-3-2", en: "the ping-pong scheme this is an instance of", cn: "这一例所属的乒乓机制" }
      ]
    },
    {
      link_en: "third device, and it explains the pH curve of an earlier section",
      link_cn: "第三件装置，它顺带解释了前面某一节里的那条 pH 曲线",
      recall_en: "the reactive side chains named in step 2 are exactly this list",
      recall_cn: "第 2 步点名的那些反应性侧链，就是这份清单",
      en: "**In the active centre of many enzymes there are groups capable of functioning as donor or acceptor of H⁺, so catalysis by enzymes often has the character of general acid-base catalysis; the groups concerned are above all –COOH of aspartate and glutamate, –NH₂ of lysine, –OH of tyrosine and the imidazole of histidine.** Each of those groups only donates or accepts while it is in one state of ionisation, and that is why an enzyme has a pH optimum at all.",
      cn: "**许多酶的活性中心里存在能充当 H⁺ 供体或受体的基团，所以酶的催化常常具有普通酸碱催化的性质；所涉及的基团首先是天冬氨酸与谷氨酸的 –COOH、赖氨酸的 –NH₂、酪氨酸的 –OH，以及组氨酸的咪唑基。**这些基团中的每一个，都只有在某一种解离状态下才能给出或接过质子 —— 酶之所以会有 pH 最适值，根子就在这里。",
      src: "CZ p.62",
      see: [{ id: "3-4", en: "the pH curve this explains", cn: "这一条所解释的那条 pH 曲线" }]
    },
    {
      link_en: "fourth device, and it replaces a picture almost everyone starts with",
      link_cn: "第四件装置，它取代了几乎人人最先学到的那幅图",
      en: "**Originally it was assumed that the substrate molecule fits into the active site like a key into a lock, that is, that enzyme and substrate have complementary structures; today it is clear that they need not be complementary, and that the enzyme adapts to the substrate structurally only on interaction, changing its conformation.** Conformation means the shape a folded molecule holds, so induced fit says the enzyme arrives at the right shape by being handed the substrate, rather than waiting in it.",
      cn: "**最初人们假定底物分子像钥匙插进锁一样嵌入活性部位，也就是说酶与底物在结构上互补；今天已经清楚：二者不必互补，酶只有在相互作用发生时才在结构上向底物靠拢，并改变自己的构象。**构象指的是一个折叠好的分子所保持的形状；所以「诱导契合」说的是：酶是被底物交到手上之后才走到正确形状的，而不是提前就摆在那里等着。",
      src: "CZ p.62"
    },
    {
      link_en: "and that one change of picture pays for itself immediately",
      link_cn: "而这一次换图，立刻就赚了回来",
      en: "**Because the enzyme has been pushed out of its own stable shape, the resulting EA complex is thermodynamically unstable and has a strong tendency to return to the stable conformation — and therefore it breaks down with formation of the product.** Analogously, on interaction with the enzyme the substrate molecule is also deformed, which again contributes to acceleration of the reaction. So induced fit is not merely a better description of binding; it supplies the driving force for the second step of the reaction.",
      cn: "**由于酶被推离了自己稳定的形状，所生成的 EA 复合物在热力学上是不稳定的，具有强烈回到稳定构象的倾向 —— 因此它会分解，并生成产物。**同样地，在与酶相互作用时底物分子也发生形变，这同样有助于反应的加速。所以诱导契合不只是把「结合」描述得更好一点：它为反应的第二步提供了推动力。",
      src: "CZ p.62",
      see: [{ id: "3-3-1", en: "the second step this drives", cn: "被它推动的那第二步" }]
    },
    {
      link_en: "and it also answers a question left open in the section on inhibition",
      link_cn: "它还回答了抑制那一节里留下的一个问题",
      recall_en: "reversible inhibitors bind the enzyme without being turned over — this says why",
      recall_cn: "可逆抑制剂能结合酶却不被转化 —— 原因就在这里",
      en: "**For the enzyme to adapt its conformation to the substrate the affinity between E and A must be sufficiently large, so only a true substrate can force the enzyme molecule to change its conformation; molecules that do bind to the enzyme but are unable to evoke that change act as inhibitors.** Binding and being turned over are therefore two different achievements, and a molecule that manages the first without the second is by definition an inhibitor.",
      cn: "**要让酶把构象调整到与底物相合，E 与 A 之间的亲和力必须足够大，所以只有真正的底物才能迫使酶分子改变构象；那些确实能结合到酶上、却无法引发这一改变的分子，就起抑制剂的作用。**可见「被结合」和「被转化」是两件不同的成就，而只做到前一件的分子，按定义就是抑制剂。",
      src: "CZ p.62",
      see: [
        { id: "L-6-4-1", en: "xylose on hexokinase — the experiment where a molecule induces the change and still is not turned over", cn: "木糖与己糖激酶 —— 一个分子引发了构象变化却仍然不被转化的实验" },
        { id: "3-5", en: "reversible inhibition, where these molecules are classified", cn: "可逆抑制 —— 这些分子在那里被分类" }
      ]
    }
  ],
  terms: [
    { en: "active centre", cn: "活性中心",
      def_en: "The part of an enzyme where contact with the substrate is realised and where the catalytic groups sit. A small region of the folded molecule, built from residues that may lie far apart along the chain.",
      def_cn: "酶上与底物实现接触、并容纳催化基团的那一部分。它是折叠分子中的一小块区域，由沿链可能相距很远的残基构成。" },
    { en: "substrate specificity", cn: "底物特异性",
      def_en: "An enzyme converts only a certain substance. The degree varies from practically absolute — no action even on very similar molecules — to acceptance of a whole group of substances sharing one structural feature.",
      def_cn: "一种酶只转化某一特定物质。其程度从实际上绝对（对极相似的分子也毫不动作）到接受共有某一结构特征的一整类物质不等。" },
    { en: "specificity of action", cn: "作用特异性",
      def_en: "The catalysed reaction proceeds only in one certain way, so one substrate gives one product and not a mixture.",
      def_cn: "所催化的反应只按某一特定方式进行，所以一种底物给出一种产物，而不是一堆混合物。" },
    { en: "proximity effect", cn: "邻近效应",
      def_en: "Binding brings the substrate's reacting group next to the enzyme's catalytic group. In the limited space of the active centre the substrates are both concentrated and correctly oriented, so the meeting a solution reaction has to wait for has already happened.",
      def_cn: "结合把底物的反应基团带到酶的催化基团旁边。在活性中心那个有限空间里，底物既被浓集又被正确定向 —— 溶液反应要苦等的那次相遇，在这里早已发生。" },
    { en: "covalent catalysis", cn: "共价催化",
      def_en: "A very reactive, unstable, covalently modified enzyme is formed transiently and breaks down rapidly to give the product. The acetylated enzyme in the chymotrypsin reaction is the worked example.",
      def_cn: "暂时形成一种反应性极强、不稳定的共价修饰酶，它迅速分解并给出产物。胰凝乳蛋白酶反应里的乙酰化酶就是那个范例。" },
    { en: "general acid-base catalysis", cn: "普通酸碱催化",
      def_en: "Catalysis by active-centre groups acting as donor or acceptor of H⁺: –COOH of Asp and Glu, –NH₂ of Lys, –OH of Tyr, and the imidazole of His. Each works in only one state of ionisation, which is where the pH optimum comes from.",
      def_cn: "由活性中心中充当 H⁺ 供体或受体的基团完成的催化：Asp 与 Glu 的 –COOH、Lys 的 –NH₂、Tyr 的 –OH、His 的咪唑基。每一个都只在一种解离状态下工作，pH 最适值即由此而来。" },
    { en: "induced fit", cn: "诱导契合",
      def_en: "Enzyme and substrate need not be complementary in advance; the enzyme changes its conformation on interaction. The complex is then thermodynamically unstable and breaks down to product, and the substrate is deformed as well.",
      def_cn: "酶与底物不必事先互补；酶在相互作用时改变自身构象。所形成的复合物因而在热力学上不稳定，会分解生成产物，同时底物也发生形变。" }
  ]
};

/* ------------------------------------------------------------------ 3-7 */
window.BIOLITE_SPINE["3-7"] = {
  assumed: [],
  nodeTitle_en: "Regulatory enzymes; allosteric enzymes",
  nodeTitle_cn: "调节酶；别构酶",
  title_en: "A pathway that cannot switch itself off wastes everything, so one enzyme in it is built to listen to a molecule that is not its substrate",
  title_cn: "一条关不掉的通路会把什么都浪费掉，所以其中总有一个酶，被造成会听一个并非它底物的分子",
  steps: [
    {
      en: "**Every enzyme already has properties that can be used to influence its activity in the cell: activity is affected by the pH of the environment, by the concentration of substrate or of coenzyme, by the presence of an inhibitor or an activator.** Being influenceable is therefore not what makes an enzyme a regulatory one — all of them are.",
      cn: "**任何一个酶本来就带有可以被用来影响其细胞内活性的性质：活性受环境 pH、底物或辅酶浓度、抑制剂或激活剂是否存在等因素的影响。**所以「可被影响」并不是调节酶之所以为调节酶的原因 —— 所有的酶都可被影响。",
      src: "CZ p.62, §3.7",
      recall_en: "those three are the subjects of the three preceding sections",
      recall_cn: "这三项正是前面三节各自的主题",
      see: [
        { id: "3-4", en: "pH and temperature as influences", cn: "作为影响因素的 pH 与温度" },
        { id: "3-5", en: "inhibitors and activators", cn: "抑制剂与激活剂" }
      ]
    },
    {
      link_en: "but a few enzymes are built for the job rather than merely subject to it",
      link_cn: "但有少数酶是为这份差事而造的，而不只是被动受影响",
      en: "**There exist enzymes with specific properties that predestine them for a regulatory role in metabolism, and these highly specialised enzymes are of two kinds: the allosteric enzymes and the covalently modulated enzymes.** The difference between the two kinds is whether the signal is attached to the enzyme by a chemical bond or merely held against it.",
      cn: "**存在一些具有特殊性质、因而注定要在代谢中担任调节角色的酶；这类高度特化的酶有两种：别构酶与共价调节酶。**两者的区别在于：那个信号究竟是用化学键接在酶身上，还是只是贴着酶被握住。",
      src: "CZ p.62"
    },
    {
      link_en: "take the first kind",
      link_cn: "先说第一种",
      en: "**Allosteric enzymes are enzymes whose activity is modulated by a non-covalent interaction with a specific metabolite** — a metabolite being any small molecule that the cell's own reactions produce or consume. Non-covalent means the signal molecule is held and then released, so the same enzyme molecule can be switched down and back up again many times over.",
      cn: "**别构酶是这样一类酶：它们的活性通过与某个特定代谢物的非共价相互作用而被调节** —— 所谓代谢物，就是细胞自身反应所生成或消耗的任何小分子。「非共价」意味着这个信号分子是被握住、随后又被放开的，所以同一个酶分子可以被调低、再调高，反复许多次。",
      src: "CZ p.62"
    },
    {
      link_en: "and it is held somewhere the substrate never goes",
      link_cn: "而它被握住的地方，底物从来不去",
      en: "**That metabolite binds into a special place in the enzyme molecule, the so-called allosteric site, which is distinct from the active centre where the substrate binds.** The consequence is the whole reason the arrangement exists: because the two sites are separate, the regulating molecule does not have to resemble the substrate in any way, so an enzyme can be controlled by a compound it never touches chemically.",
      cn: "**该代谢物结合到酶分子中的一个特殊部位，即所谓的别构部位；它不同于底物所结合的活性中心。**由此而来的后果，正是这套安排存在的全部理由：既然两个部位是分开的，起调节作用的分子就完全不必长得像底物 —— 于是一个酶可以被一个它在化学上从不接触的化合物所控制。",
      src: "CZ p.62"
    },
    {
      link_en: "and in practice one particular molecule keeps turning up in that site",
      link_cn: "而实际上，出现在那个部位里的往往是同一类分子",
      en: "**Allosteric modulators are often the products of the very metabolic sequence at whose beginning the allosteric enzyme acts: in a chain A → B → C → D → E, the end product E modulates the enzyme that catalyses the first step.** This is the principle of feedback regulation.",
      cn: "**别构调节物往往正是某条代谢序列的产物，而该别构酶恰好作用于这条序列的起点：在 A → B → C → D → E 这样的链条中，终产物 E 调节的是催化第一步的那个酶。**这就是反馈调节的原理。",
      src: "CZ p.62"
    },
    {
      link_en: "and the placement of that switch — at the first step, not the last — is doing real work",
      link_cn: "而这个开关装在第一步、不装在最后一步，是有讲究的",
      recall_en: "the chain in the step above, read backwards",
      recall_cn: "把上一步那条链倒过来读",
      en: "**A pathway regulated this way switches itself down exactly as fast as its end product accumulates, and because the switch sits at the first step, none of the intermediates B, C or D piles up when it closes.** Regulating the last step instead would stop the product and leave the cell holding four useless intermediates it had already paid to make.",
      cn: "**按这种方式受调节的通路，会随着终产物的积累而恰好同步地把自己调小；而由于开关装在第一步，通路关小时中间物 B、C、D 一个也不会堆积。**若改为调节最后一步，产物固然停了，细胞手里却剩下四种已经花过成本、又毫无用处的中间物。",
      src: "CZ p.62",
      beyond: true,
      beyondNote: "p.62 states the feedback principle and the position of the enzyme at the beginning of the sequence; spelling out why the first step is the right place for the switch is standard course material and is not written on that page."
    },
    {
      link_en: "the second kind of regulatory enzyme carries its signal a different way",
      link_cn: "第二类调节酶携带信号的方式不同",
      recall_en: "the opposite of the non-covalent case above",
      recall_cn: "与上面那个非共价的情形正好相反",
      en: "**In a covalently modulated enzyme the activity is altered by a covalent modification of the enzyme molecule — a group is bonded onto the enzyme, or taken off it again, and the enzyme stays in whichever state it was last put into.** That is the practical difference from an allosteric enzyme: an allosteric signal has to be present to have an effect, while a covalent one is a setting that persists, and a second enzyme is needed to reverse it.",
      cn: "**共价调节酶的活性是通过对酶分子的共价修饰来改变的 —— 一个基团被接到酶上，或者又被拿下来，而酶会一直停留在最后被设定的那个状态。**这就是它与别构酶在实用上的区别：别构信号必须一直在场才有效，而共价修饰是一个会保持下去的设定，要把它撤销还得另有一个酶。",
      src: "CZ pp.63–65, §3.7",
      beyond: true,
      beyondNote: "p.62 names the class and says it is regulated by covalent modification; pp.63–65, which develop it, are not in the extracted page set, so the persistence-versus-presence contrast is carried in as standard course material.",
      see: [{ id: "L-15-3-1", en: "the worked case — glycogen phosphorylase, switched covalently and allosterically at once", cn: "范例 —— 糖原磷酸化酶，同时受共价与别构两层调控" }]
    },
    {
      link_en: "one last property of allosteric enzymes, and it is what makes them switches rather than dials",
      link_cn: "别构酶还有最后一项性质，正是它使这些酶成为开关而不是旋钮",
      en: "**An allosteric enzyme does not give the hyperbolic rate curve of an ordinary enzyme; its rate plotted against substrate concentration is S-shaped, so over a narrow range of concentration a small change in substrate or in modulator produces a very large change in rate.** That steepness is what a regulator needs: a hyperbola responds to a doubling of substrate with far less than a doubling of rate, which would make a poor switch.",
      cn: "**别构酶给出的不是普通酶那条双曲线：它的速率对底物浓度作图呈 S 形，所以在一段很窄的浓度范围内，底物或调节物的微小变化就会引起速率的巨大变化。**这种陡峭正是调节所需要的：双曲线在底物翻倍时速率远远达不到翻倍，那样的东西做不成开关。",
      src: "CZ pp.63–65, §3.7",
      beyond: true,
      beyondNote: "The sigmoid curve of allosteric enzymes belongs to pp.63–65, which are not in the extracted page set. It is standard, examinable, and is developed in full on haemoglobin in L-5-1-1.",
      see: [
        { id: "L-5-1-1", en: "where the S-shaped curve comes from, worked out on haemoglobin", cn: "S 形曲线是怎么来的 —— 在血红蛋白上完整推出" },
        { id: "3-3-1", en: "the hyperbola it is being contrasted with", cn: "被拿来对照的那条双曲线" }
      ]
    }
  ],
  terms: [
    { en: "regulatory enzymes", cn: "调节酶",
      def_en: "Enzymes with specific properties that predestine them for a regulatory role in metabolism. Two kinds: allosteric and covalently modulated.",
      def_cn: "具有特殊性质、因而注定在代谢中担任调节角色的酶。共两类：别构酶与共价调节酶。" },
    { en: "allosteric enzyme", cn: "别构酶",
      def_en: "One whose activity is modulated by a non-covalent interaction with a specific metabolite. Because the interaction is non-covalent, the signal has to be present to have an effect and the enzyme resets when it leaves.",
      def_cn: "其活性通过与某个特定代谢物的非共价相互作用而被调节的酶。由于是非共价的，信号必须在场才有效，信号离开后酶即复原。" },
    { en: "allosteric site", cn: "别构部位",
      def_en: "The special place in the enzyme molecule, distinct from the active centre, into which the modulator binds. Its separateness is why the modulator need not resemble the substrate.",
      def_cn: "酶分子中不同于活性中心的那个特殊部位，调节物结合于此。正因为两处分开，调节物才不必长得像底物。" },
    { en: "allosteric modulator", cn: "别构调节物",
      def_en: "The specific metabolite that binds at the allosteric site. Often the end product of the metabolic sequence the enzyme starts, which is what makes feedback regulation possible.",
      def_cn: "结合在别构部位上的那个特定代谢物。它常常就是该酶所启动的代谢序列的终产物 —— 反馈调节因此才成为可能。" },
    { en: "feedback regulation", cn: "反馈调节",
      def_en: "The end product of a metabolic sequence modulating the enzyme that catalyses the first step of that same sequence, so the pathway slows itself as its product accumulates and leaves no intermediates behind.",
      def_cn: "一条代谢序列的终产物去调节催化该序列第一步的那个酶，于是通路随着产物积累而自行减速，且不留下中间物。" },
    { en: "covalently modulated enzymes", cn: "共价调节酶",
      def_en: "The second class of regulatory enzyme, whose activity is altered by attaching a group to the enzyme molecule or removing one. The setting persists until another enzyme reverses it.",
      def_cn: "调节酶的第二类，其活性通过在酶分子上接上或取下一个基团来改变。这个设定会一直保持，直到另一个酶把它撤销。" }
  ]
};

/* END-OF-SPINE-CZ3 */
