/* ============================================================
   Chapter 3 — Enzymy
   Enzymes / 酶
   Source: Biochemie – Základní kurz, pp. 41–65
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "3-1",
  book: "cz",
  topicKey: "enzymes-introduction",
  chapter: 3,
  section: "3.1",
  czTitle: "Klasifikace a názvosloví enzymů",
  enTitle: "Classification and nomenclature of enzymes",
  cnTitle: "酶的分类与命名",
  pages: [41, 42],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "九", title: "酶通论——酶的分类与命名 (笔记 pp.47–52)", status: "mapped" },
  mustKnow: { en: "The six classes sort by the kind of chemistry, not by which molecule is involved — oxidoreductases move electrons, transferases move a group from one molecule to another, hydrolases break a bond with water, and so on. Once you know which of the six an enzyme belongs to, you already know the shape of its systematic name (donor:acceptor-oxidoreductase, for instance) without having memorised it.", cn: "六大类是按化学反应的**类型**分的，不是按牵涉了哪个分子——氧化还原酶搬电子，转移酶把一个基团从一个分子挪到另一个分子，水解酶靠水打断一个键，等等。只要知道一个酶属于六类里的哪一类，你就已经知道它系统命名的形状（比如『供体:受体-氧化还原酶』），不需要死记硬背。" },
  summary: {
    en: "Enzymes are proteins specialised for the catalysis of reactions occurring in living organisms. They are remarkable biomacromolecules with high specificity of action and high catalytic efficiency. Enzymes are divided into SIX MAIN CLASSES according to the reaction they catalyse.",
    cn: "酶是专门用于催化生物体内所进行反应的蛋白质。它们是作用特异性高、催化效率高的非凡生物大分子。酶按其所催化的反应被分为六大类。"
  },
  points: [
    { cz: "historie", en: "In 1926 the first enzyme was isolated in the crystalline state — it was UREASE, isolated by SUMNER. In the thirties further crystalline enzymes were obtained: TRYPSIN, PEPSIN and CHYMOTRYPSIN. Since then MORE THAN 3000 enzymes have been discovered and described, although far from all have been prepared in the pure state.", cn: "1926 年首次以结晶状态分离出第一个酶——脲酶，由 Sumner 分离。三十年代又获得了其他结晶酶：胰蛋白酶、胃蛋白酶和胰凝乳蛋白酶。此后至今已发现并描述了 3000 种以上的酶，尽管远非所有的酶都已制得纯品。" },
    { cz: "trojí označení", en: "In this classification each enzyme is assigned: a SYSTEMATIC NAME characterising the catalysed reaction (this name is usually very long and complicated); a RECOMMENDED NAME used in common practice; and a CODE NUMBER that identifies the enzyme unambiguously.", cn: "在这一分类中，每种酶被赋予：表征所催化反应的系统名（该名称通常很长很复杂）；日常实践中使用的推荐名；以及能明确识别该酶的编码号。" },
    { cz: "příklad EC 1.1.1.27", en: "EXAMPLE — the reaction L-lactate + NAD⁺ ⇌ pyruvate + NADH + H⁺ is catalysed by an enzyme whose systematic name is L-LACTATE:NAD⁺-OXIDOREDUCTASE, whose recommended name is LACTATE DEHYDROGENASE, and whose code number is E.C. 1.1.1.27.", cn: "示例——反应 L-乳酸 + NAD⁺ ⇌ 丙酮酸 + NADH + H⁺ 由一种酶催化，其系统名为 L-乳酸:NAD⁺-氧化还原酶，推荐名为乳酸脱氢酶，编码号为 E.C. 1.1.1.27。" },
    { cz: "význam čtyř čísel", en: "MEANING OF THE FOUR NUMBERS: the FIRST denotes the main class of enzymes; the SECOND the subclass — in this case oxidation of a primary alcoholic group; the THIRD determines the type of hydrogen acceptor — in this case an enzyme cooperating with nicotinamide coenzymes; the FOURTH is the serial number of the concrete enzyme within the given sub-subgroup.", cn: "四个数字的含义：第一个表示酶的大类；第二个表示亚类——本例中为伯醇基的氧化；第三个确定氢受体的类型——本例中为与烟酰胺辅酶协同的酶；第四个是该酶在所属次亚类中的序号。" },
    { cz: "1. Oxidoreduktasy", en: "CLASS 1 — OXIDOREDUCTASES: catalyse oxidation-reduction reactions, i.e. transfer of electrons, transfer of hydrogen, or reaction with oxygen. Systematic name pattern: DONOR:ACCEPTOR-OXIDOREDUCTASE. Example: ethanol + NAD⁺ ⇌ acetaldehyde + NADH + H⁺ is catalysed by ethanol:NAD⁺-oxidoreductase (ALCOHOL DEHYDROGENASE).", cn: "第 1 类——氧化还原酶：催化氧化还原反应，即电子转移、氢转移或与氧的反应。系统名格式：供体:受体-氧化还原酶。示例：乙醇 + NAD⁺ ⇌ 乙醛 + NADH + H⁺，由乙醇:NAD⁺-氧化还原酶（乙醇脱氢酶）催化。" },
    { cz: "2. Transferasy", en: "CLASS 2 — TRANSFERASES: catalyse the transfer of groups. Pattern: DONOR:ACCEPTOR GROUP-TRANSFERASE. Example: hexose + ATP → hexose-phosphate + ADP is catalysed by ATP:hexose-phosphotransferase (HEXOKINASE).", cn: "第 2 类——转移酶：催化基团的转移。格式：供体:受体 基团-转移酶。示例：己糖 + ATP → 己糖磷酸 + ADP，由 ATP:己糖-磷酸转移酶（己糖激酶）催化。" },
    { cz: "3. Hydrolasy", en: "CLASS 3 — HYDROLASES: catalyse hydrolytic reactions. Enzymes of this group belong among the LONGEST-KNOWN enzymes; many of them bear original non-systematic names. Subclasses are formed according to the TYPE OF HYDROLYSED BOND.", cn: "第 3 类——水解酶：催化水解反应。本组的酶属于最早为人所知的酶；其中许多仍沿用原有的非系统名称。亚类按所水解键的类型划分。" },
    { cz: "4. Lyasy (Synthasy)", en: "CLASS 4 — LYASES (SYNTHASES): catalyse non-hydrolytic or non-oxidative cleavage of bonds, often with formation of a double bond, or conversely addition to a double bond. Pattern: SUBSTRATE GROUP-LYASE. Example: (COOH)₂ → HCOOH + CO₂ is catalysed by oxalate carboxy-lyase (OXALATE DECARBOXYLASE).", cn: "第 4 类——裂合酶（合酶）：催化键的非水解、非氧化断裂，常伴随双键的生成，或反过来对双键的加成。格式：底物 基团-裂合酶。示例：(COOH)₂ → HCOOH + CO₂，由草酸羧基裂合酶（草酸脱羧酶）催化。" },
    { cz: "5. Izomerasy", en: "CLASS 5 — ISOMERASES: catalyse isomerisations. Pattern: SUBSTRATE TYPE-OF-ISOMERISM ISOMERASE (or only -ase). Example: fumarate ⇌ maleate is catalysed by fumarate cis-trans-isomerase.", cn: "第 5 类——异构酶：催化异构化。格式：底物 异构类型 异构酶（或仅用 -酶）。示例：延胡索酸 ⇌ 马来酸，由延胡索酸顺反异构酶催化。" },
    { cz: "6. Ligasy (Synthetasy)", en: "CLASS 6 — LIGASES (SYNTHETASES): catalyse the formation of bonds with SIMULTANEOUS HYDROLYSIS OF MACROERGIC COMPOUNDS (above all nucleoside triphosphates), most often ATP. Pattern: X:Y LIGASE (ADP- or AMP-forming), for the reaction X + Y + ATP → X–Y + ADP + Pᵢ.", cn: "第 6 类——连接酶（合成酶）：催化键的形成，同时伴随高能化合物（首先是核苷三磷酸）的水解，最常见的是 ATP。格式：X:Y 连接酶（生成 ADP 或 AMP），对应反应 X + Y + ATP → X–Y + ADP + Pᵢ。" }
  ],
  terms: [
    { cz: "systematický název", en: "systematic name", cn: "系统名", def_en: "The name characterising the catalysed reaction; usually very long and complicated.", def_cn: "表征所催化反应的名称；通常很长很复杂。" },
    { cz: "doporučený název", en: "recommended name", cn: "推荐名", def_en: "The short name used in common practice, e.g. lactate dehydrogenase.", def_cn: "日常实践中使用的简短名称，例如乳酸脱氢酶。" },
    { cz: "kódové číslo (E.C.)", en: "code number (E.C.)", cn: "编码号 (E.C.)", def_en: "Four numbers identifying an enzyme unambiguously: main class, subclass, sub-subclass (e.g. type of H acceptor), serial number.", def_cn: "明确识别一种酶的四个数字：大类、亚类、次亚类（例如氢受体类型）、序号。" },
    { cz: "oxidoreduktasy", en: "oxidoreductases", cn: "氧化还原酶", def_en: "Class 1 — transfer of electrons or hydrogen, or reaction with oxygen; donor:acceptor-oxidoreductase.", def_cn: "第 1 类——电子或氢的转移，或与氧的反应；供体:受体-氧化还原酶。" },
    { cz: "transferasy", en: "transferases", cn: "转移酶", def_en: "Class 2 — transfer of groups; donor:acceptor group-transferase.", def_cn: "第 2 类——基团的转移；供体:受体 基团-转移酶。" },
    { cz: "hydrolasy", en: "hydrolases", cn: "水解酶", def_en: "Class 3 — hydrolytic reactions; subclasses by type of hydrolysed bond.", def_cn: "第 3 类——水解反应；按所水解键的类型分亚类。" },
    { cz: "lyasy", en: "lyases (synthases)", cn: "裂合酶（合酶）", def_en: "Class 4 — non-hydrolytic, non-oxidative cleavage, often forming a double bond, or addition to one.", def_cn: "第 4 类——非水解、非氧化的断裂，常生成双键，或对双键加成。" },
    { cz: "izomerasy", en: "isomerases", cn: "异构酶", def_en: "Class 5 — isomerisations.", def_cn: "第 5 类——异构化。" },
    { cz: "ligasy", en: "ligases (synthetases)", cn: "连接酶（合成酶）", def_en: "Class 6 — bond formation with simultaneous hydrolysis of a macroergic compound, most often ATP.", def_cn: "第 6 类——键的形成，同时伴随高能化合物（最常为 ATP）的水解。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which enzyme class catalyses bond formation with SIMULTANEOUS HYDROLYSIS of a macroergic compound such as ATP?",
      q_cn: "哪一类酶在催化键形成的同时伴随 ATP 等高能化合物的水解？",
      options: ["Lyases (class 4)", "Transferases (class 2)", "Ligases / synthetases (class 6)", "Isomerases (class 5)"],
      answer: 2,
      why_en: "Class 6, the ligases or synthetases. Do not confuse them with class 4, the LYASES, whose alternative name is SYNTHASES — lyases work WITHOUT hydrolysis of a nucleoside triphosphate. Synthase ≠ synthetase.",
      why_cn: "第 6 类，连接酶或合成酶。不要与第 4 类裂合酶混淆，后者的别名是「合酶」——裂合酶不伴随核苷三磷酸的水解。合酶 ≠ 合成酶。"
    },
    {
      type: "mcq",
      q_en: "In E.C. 1.1.1.27 for lactate dehydrogenase, what does the THIRD number denote?",
      q_cn: "在乳酸脱氢酶的 E.C. 1.1.1.27 中，第三个数字表示什么？",
      options: [
        "The main class of enzymes",
        "The subclass — oxidation of a primary alcoholic group",
        "The type of hydrogen acceptor — here, nicotinamide coenzymes",
        "The serial number within the sub-subgroup"
      ],
      answer: 2,
      why_en: "First = main class; second = subclass (oxidation of a primary alcoholic group); third = type of hydrogen acceptor (an enzyme cooperating with nicotinamide coenzymes); fourth = serial number in the sub-subgroup.",
      why_cn: "第一个 = 大类；第二个 = 亚类（伯醇基的氧化）；第三个 = 氢受体类型（与烟酰胺辅酶协同的酶）；第四个 = 该酶在次亚类中的序号。"
    },
    {
      type: "mcq",
      q_en: "Who isolated the first enzyme in crystalline state, in what year, and which enzyme was it?",
      q_cn: "谁在哪一年以结晶状态分离出第一个酶？是哪种酶？",
      options: [
        "Sumner, 1926, urease",
        "Sumner, 1930, trypsin",
        "Michaelis, 1913, pepsin",
        "Northrop, 1926, chymotrypsin"
      ],
      answer: 0,
      why_en: "Urease, isolated by Sumner in 1926. Trypsin, pepsin and chymotrypsin followed in the thirties.",
      why_cn: "脲酶，由 Sumner 于 1926 年分离。胰蛋白酶、胃蛋白酶和胰凝乳蛋白酶在三十年代相继获得。"
    },
    {
      type: "short",
      q_en: "Give the systematic name pattern for each of the six enzyme classes.",
      q_cn: "给出六大类酶各自的系统名格式。",
      accept: ["oxidoreductase", "transferase", "hydrolase", "lyase", "isomerase", "ligase", "donor", "acceptor"],
      answer_en: "1. Oxidoreductases — donor:acceptor-oxidoreductase. 2. Transferases — donor:acceptor group-transferase. 3. Hydrolases — subclasses formed by type of hydrolysed bond; many keep original non-systematic names. 4. Lyases — substrate group-lyase. 5. Isomerases — substrate, type of isomerism, isomerase (or only -ase). 6. Ligases — X:Y ligase (ADP- or AMP-forming).",
      answer_cn: "1. 氧化还原酶——供体:受体-氧化还原酶。2. 转移酶——供体:受体 基团-转移酶。3. 水解酶——按所水解键的类型分亚类；许多沿用原有非系统名。4. 裂合酶——底物 基团-裂合酶。5. 异构酶——底物 异构类型 异构酶（或仅用 -酶）。6. 连接酶——X:Y 连接酶（生成 ADP 或 AMP）。"
    }
  ],
  oral: {
    q_en: "How are enzymes classified and named?",
    q_cn: "酶是如何分类和命名的？",
    model_en: "Enzymes are proteins specialised for catalysing the reactions that occur in living organisms, remarkable for their high specificity and high catalytic efficiency. The first enzyme obtained in crystalline state was urease, isolated by Sumner in nineteen twenty-six; trypsin, pepsin and chymotrypsin followed in the thirties, and more than three thousand enzymes have since been described. Enzymes are divided into six main classes according to the reaction they catalyse, and each enzyme receives three designations: a systematic name characterising the catalysed reaction, which is usually long and complicated; a recommended name for everyday use; and a code number identifying it unambiguously. For example, the conversion of L-lactate and NAD-plus into pyruvate, NADH and a proton is catalysed by L-lactate:NAD-plus-oxidoreductase, recommended name lactate dehydrogenase, code E.C. one point one point one point twenty-seven. In that code the first number gives the main class, the second the subclass — here oxidation of a primary alcoholic group — the third the type of hydrogen acceptor, here nicotinamide coenzymes, and the fourth the serial number within the sub-subgroup. The six classes are: oxidoreductases, which catalyse transfer of electrons or hydrogen or reaction with oxygen, named donor-colon-acceptor-oxidoreductase; transferases, which transfer groups, named donor-colon-acceptor group-transferase; hydrolases, which catalyse hydrolytic reactions and are subdivided by the type of bond hydrolysed; lyases, also called synthases, which cleave bonds non-hydrolytically and non-oxidatively, often forming a double bond or adding to one; isomerases, which catalyse isomerisations; and ligases, also called synthetases, which form bonds with simultaneous hydrolysis of a macroergic compound, most often ATP.",
    checklist: [
      "Named Sumner, 1926, urease, and the 1930s crystalline enzymes",
      "Stated six classes and the three designations per enzyme",
      "Gave the LDH example with E.C. 1.1.1.27",
      "Explained what each of the four code numbers means",
      "Listed all six classes in order with what each catalyses",
      "Gave at least the oxidoreductase and transferase naming patterns",
      "Did not confuse lyase/synthase with ligase/synthetase"
    ]
  }
},

{
  id: "3-2",
  book: "cz",
  topicKey: "enzymes-introduction",
  chapter: 3,
  section: "3.2",
  czTitle: "Struktura molekuly enzymu; Koenzymy",
  enTitle: "Structure of the enzyme molecule; Coenzymes",
  cnTitle: "酶分子的结构；辅酶",
  pages: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  coverage: "partial",
  coverageNote: "pp. 42, 43 and 54 verified against the scans — this includes the full Tab. 3.1, which was re-read from the image and corrected against the OCR. pp. 44–53, covering the detailed structures of the individual coenzymes, are not in the extracted page set.",
  cnNote: { topic: "九", title: "酶通论——酶分子结构与辅酶 (笔记 pp.47–52)", status: "mapped" },
  mustKnow: { en: "A cofactor being thermally stable while the protein part is not is not a side fact — it is why you can boil away an enzyme's activity and still recover the cofactor unchanged, and why a coenzyme can be reused by many different apoenzymes. And most coenzymes are built from vitamins for a reason: the cell cannot synthesise that particular piece of chemistry itself, so it has to import it ready-made.", cn: "辅因子耐热而蛋白质部分不耐热，这不是一个无关紧要的细节——正因如此，你可以把一个酶的活性煮没了，辅因子却原封不动地被回收；也正因如此，同一个辅酶才能被许多不同的脱辅基酶反复使用。而大多数辅酶是由维生素造出来的，这也是有原因的：细胞自己合成不出那一小段特定的化学结构，只能现成地『进口』它。" },
  trace: [
    {
      term: "cofactor / coenzyme 辅因子 / 辅酶",
      what: "这一节一口气扔给你五个词，而它们其实是在**从不同角度描述同一件事**——迷糊几乎都出在这里。先立一条：酶要干活，光有蛋白质常常不够，还得有个非蛋白的搭档，这类搭档统称 cofactor（辅因子）。它分两种：金属离子，或者有机小分子——而**只有有机的那一种才叫 coenzyme（辅酶）**。所以 coenzyme 是 cofactor 里的一类，两个词不能互换。",
      from: "为什么要分这么多名字？因为要区分的是**同一套东西的不同状态**。带着搭档、能真正催化的那个完整复合体，叫 holoenzyme（全酶）；把搭档拿走之后剩下的那部分蛋白，叫 apoenzyme（脱辅基酶蛋白）；如果搭档结合得特别死、根本拆不下来，就再给它一个名字叫 prosthetic group（辅基）。看懂了这一层，你只需要记住一个等式：**holoenzyme = apoenzyme + cofactor**。",
      to: "教材里那句「辅因子耐热、蛋白质部分不耐热」不是随口一提——它正好解释了一件你可能见过的怪事：把酶煮一煮，活性没了，可辅因子还完好无损地在那儿，能回收、能反复用。再往下一步就接到你学过的「维生素和辅酶」了：**很多 coenzyme 其实就是维生素改造出来的**，教材点名的 TPP、coenzyme A、pyridoxal phosphate 都在这条线上。维生素为什么必须从饭里吃？因为人体造不出这些骨架，而没有它们，一大批酶就是一堆干不了活的蛋白。",
      family: "拿金属离子当搭档的酶另有名字，叫 metalloenzyme（金属酶），教材给的例子是 Zn²⁺（alcohol dehydrogenase）、Mg²⁺（phosphatase）。金属在酶里只有三种当法：它本身就是活性中心的一部分；当一座桥，把底物架到酶上；或者当电子的中转站。被问到「金属在这儿起什么作用」，从这三个里挑。"
    }
  ],
  summary: {
    en: "All enzymes known until recently were of protein nature; research of the last twenty years or so shows that some other types of macromolecule can also have a certain catalytic ability, though so far only the case of one ribonucleic acid is described. The molecule of some enzymes is formed only by a polypeptide chain or chains; the active form of others contains in addition a non-protein component, the COFACTOR.",
    cn: "直到不久前所知的全部酶都是蛋白质性质的；近约二十年的研究表明，某些其他类型的大分子也可能具有一定的催化能力，不过迄今只描述了一种核糖核酸的情形。某些酶的分子仅由一条或多条多肽链构成；另一些酶的活性形式还含有非蛋白质组分，即辅因子。"
  },
  points: [
    { cz: "kofaktor / koenzym", en: "A COFACTOR can be a METAL ION or an ORGANIC MOLECULE, the latter called a COENZYME. Some enzymes may contain BOTH.", cn: "辅因子可以是金属离子，也可以是有机分子，后者称为辅酶。某些酶可以同时含有两者。" },
    { cz: "tepelná stabilita", en: "It holds generally that the COFACTORS of enzymes are THERMALLY STABLE, whereas the PROTEIN PART of the enzyme molecule is NOT.", cn: "一般规律是：酶的辅因子是热稳定的，而酶分子的蛋白质部分则不是。" },
    { cz: "holoenzym / apoenzym", en: "The catalytically active protein-cofactor complex is called the HOLOENZYME; the protein part of the enzyme after removal of the cofactor is designated the APOENZYME.", cn: "具有催化活性的蛋白质-辅因子复合物称为全酶；除去辅因子后酶的蛋白质部分称为脱辅基酶（酶蛋白）。" },
    { cz: "metaloenzymy", en: "Enzymes containing metal ions as cofactors are called METALLOENZYMES. Most frequently occurring: Zn²⁺ (alcohol dehydrogenase), Mg²⁺ (phosphatase), Mn²⁺ (hexokinase), Fe²⁺ and Fe³⁺ (cytochromes), Cu²⁺ (tyrosinase), K⁺ (pyruvate kinase), Na⁺ (ATPase), and others.", cn: "以金属离子为辅因子的酶称为金属酶。最常出现的有：Zn²⁺（乙醇脱氢酶）、Mg²⁺（磷酸酶）、Mn²⁺（己糖激酶）、Fe²⁺ 与 Fe³⁺（细胞色素）、Cu²⁺（酪氨酸酶）、K⁺（丙酮酸激酶）、Na⁺（ATP 酶）等。" },
    { cz: "trojí funkce kovu", en: "Metal ions function in the enzyme molecule in THREE ways: as part of the ACTIVE CENTRE; as BRIDGES for binding the substrate to the enzyme; or as an element STABILISING THE SPATIAL STRUCTURE of the enzyme molecule.", cn: "金属离子在酶分子中有三种作用方式：作为活性中心的组成部分；作为把底物结合到酶上的桥梁；或作为稳定酶分子空间结构的因素。" },
    { cz: "funkce koenzymů", en: "COENZYMES usually function as INTERMEDIARY CARRIERS of the functional groups, atoms or electrons that are transferred in the reaction the given enzyme catalyses.", cn: "辅酶通常作为中间载体，运载在该酶所催化的反应中被转移的官能团、原子或电子。" },
    { cz: "prosthetická skupina", en: "When a coenzyme is bound to the apoenzyme VERY STRONGLY it is called a PROSTHETIC GROUP. Other coenzymes are bound to the protein part only by WEAK INTERACTIONS and, from the kinetic standpoint, ACT AS A SUBSTRATE of the enzyme.", cn: "当辅酶与脱辅基酶结合得非常牢固时，称为辅基。另一些辅酶只以弱相互作用与蛋白质部分结合，从动力学角度看，它们表现为酶的底物。" },
    { cz: "vztah k vitaminům", en: "Coenzymes are mostly molecules corresponding in structure to VITAMINS or their derivatives. Vitamins are organic substances indispensable for the life functions of cells, which must be supplied to the organism WITH FOOD.", cn: "辅酶多为结构上与维生素或其衍生物相对应的分子。维生素是细胞生命功能所不可缺少的有机物，必须随食物供给机体。" },
    { cz: "Tab. 3.1 (ověřeno ze skenu)", en: "TAB. 3.1 — COENZYME | GROUP TRANSFERRED | VITAMIN, re-read directly from the page scan: NAD⁺ | H⁺, e⁻ | nicotinic acid · NADP⁺ | H⁺, e⁻ | nicotinic acid · FMN | H⁺, e⁻ | riboflavin (B₂) · FAD | H⁺, e⁻ | riboflavin (B₂) · Coenzyme Q | H⁺, e⁻ | — · TPP | aldehyde | thiamin · Coenzyme A | acyl | pantothenic acid · Lipoamide | acyl, H | — · Biotin | CO₂ | biotin (H) · Pyridoxal phosphate | –NH₂ | pyridoxin (B₆).", cn: "表 3.1——辅酶 | 所转移基团 | 维生素，直接从页面扫描件重读校对：NAD⁺ | H⁺, e⁻ | 烟酸 · NADP⁺ | H⁺, e⁻ | 烟酸 · FMN | H⁺, e⁻ | 核黄素 (B₂) · FAD | H⁺, e⁻ | 核黄素 (B₂) · 辅酶 Q | H⁺, e⁻ | — · TPP | 醛 | 硫胺素 · 辅酶 A | 酰基 | 泛酸 · 硫辛酰胺 | 酰基, H | — · 生物素 | CO₂ | 生物素 (H) · 磷酸吡哆醛 | –NH₂ | 吡哆醇 (B₆)。" },
    { cz: "nikotinamidové koenzymy", en: "NICOTINAMIDE COENZYMES: two coenzymes belong here, both having the structure of a DINUCLEOTIDE, of which one base is ADENINE and the other NICOTINAMIDE; the sugar component is always D-RIBOSE, and the nucleotides are joined by TWO RESIDUES OF PHOSPHORIC ACID. They are nicotinamide adenine dinucleotide (NAD⁺) and nicotinamide adenine dinucleotide phosphate (NADP⁺).", cn: "烟酰胺辅酶：属于此类的有两种辅酶，二者都具有二核苷酸结构，其中一个碱基是腺嘌呤，另一个是烟酰胺；糖组分始终是 D-核糖，两个核苷酸由两个磷酸残基相连。它们是烟酰胺腺嘌呤二核苷酸 (NAD⁺) 和烟酰胺腺嘌呤二核苷酸磷酸 (NADP⁺)。" },
    { cz: "koenzym B₁₂", en: "COENZYME B₁₂: the main component of vitamin B₁₂ is a RIBONUCLEOTIDE, exceptional in that as its base it contains 5,6-DIMETHYLBENZIMIDAZOLE bound by an α-N-GLYCOSIDIC BOND to D-ribose. This nucleotide is bound to the CORRIN NUCLEUS partly by a COORDINATION BOND and partly by an ESTER BOND. Coenzyme B₁₂ participates in reactions in which a HYDROGEN and a GROUP ON THE NEIGHBOURING CARBON EXCHANGE PLACES.", cn: "辅酶 B₁₂：维生素 B₁₂ 的主要组分是一个核糖核苷酸，其特殊之处在于以 5,6-二甲基苯并咪唑为碱基，并通过 α-N-糖苷键与 D-核糖相连。该核苷酸一方面通过配位键、另一方面通过酯键与咕啉核相连。辅酶 B₁₂ 参与那些氢与相邻碳上的某个基团互换位置的反应。" }
  ],
  terms: [
    { cz: "kofaktor", en: "cofactor", cn: "辅因子", def_en: "The non-protein component of the active form of an enzyme; a metal ion or an organic molecule (coenzyme). Thermally stable, unlike the protein part.", def_cn: "酶活性形式中的非蛋白质组分；可为金属离子或有机分子（辅酶）。与蛋白质部分不同，它是热稳定的。" },
    { cz: "koenzym", en: "coenzyme", cn: "辅酶", def_en: "An organic cofactor; usually an intermediary carrier of groups, atoms or electrons transferred in the catalysed reaction.", def_cn: "有机辅因子；通常作为所催化反应中被转移的基团、原子或电子的中间载体。" },
    { cz: "holoenzym", en: "holoenzyme", cn: "全酶", def_en: "The catalytically active protein–cofactor complex.", def_cn: "具有催化活性的蛋白质-辅因子复合物。" },
    { cz: "apoenzym", en: "apoenzyme", cn: "脱辅基酶（酶蛋白）", def_en: "The protein part of the enzyme after removal of the cofactor.", def_cn: "除去辅因子后酶的蛋白质部分。" },
    { cz: "prosthetická skupina", en: "prosthetic group", cn: "辅基", def_en: "A coenzyme bound to the apoenzyme VERY STRONGLY (as opposed to one bound weakly, which behaves kinetically as a substrate).", def_cn: "与脱辅基酶结合非常牢固的辅酶（与之相对，弱结合者在动力学上表现为底物）。" },
    { cz: "metaloenzym", en: "metalloenzyme", cn: "金属酶", def_en: "An enzyme with a metal ion as cofactor; the metal acts in the active centre, as a substrate bridge, or as a structure stabiliser.", def_cn: "以金属离子为辅因子的酶；金属可作用于活性中心、作为底物桥梁，或作为结构稳定因素。" },
    { cz: "vitaminy", en: "vitamins", cn: "维生素", def_en: "Organic substances indispensable for cell life functions that must be supplied with food; most coenzymes correspond to them structurally.", def_cn: "细胞生命功能不可缺少、必须随食物供给的有机物；多数辅酶在结构上与之对应。" },
    { cz: "TPP", en: "thiamine pyrophosphate (TPP)", cn: "焦磷酸硫胺素 (TPP)", def_en: "Coenzyme transferring an ALDEHYDE group; vitamin thiamin.", def_cn: "转移醛基的辅酶；对应维生素硫胺素。" },
    { cz: "koenzym A", en: "coenzyme A", cn: "辅酶 A", def_en: "Coenzyme transferring an ACYL group; vitamin pantothenic acid.", def_cn: "转移酰基的辅酶；对应维生素泛酸。" },
    { cz: "pyridoxalfosfát", en: "pyridoxal phosphate", cn: "磷酸吡哆醛", def_en: "Coenzyme transferring the –NH₂ group; vitamin pyridoxin (B₆).", def_cn: "转移 –NH₂ 基的辅酶；对应维生素吡哆醇 (B₆)。" },
    { cz: "biotin", en: "biotin", cn: "生物素", def_en: "Coenzyme transferring CO₂; vitamin biotin (H).", def_cn: "转移 CO₂ 的辅酶；对应维生素生物素 (H)。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which coenzyme transfers CO₂, and which vitamin does it correspond to?",
      q_cn: "哪种辅酶转移 CO₂？它对应哪种维生素？",
      options: [
        "TPP — thiamin",
        "Biotin — biotin (H)",
        "Coenzyme A — pantothenic acid",
        "Pyridoxal phosphate — pyridoxin (B₆)"
      ],
      answer: 1,
      why_en: "From Tab. 3.1: biotin transfers CO₂ and corresponds to vitamin biotin (H). TPP transfers an aldehyde (thiamin), coenzyme A an acyl (pantothenic acid), pyridoxal phosphate the –NH₂ group (B₆).",
      why_cn: "据表 3.1：生物素转移 CO₂，对应维生素生物素 (H)。TPP 转移醛基（硫胺素），辅酶 A 转移酰基（泛酸），磷酸吡哆醛转移 –NH₂ 基（B₆）。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes a PROSTHETIC GROUP from other coenzymes?",
      q_cn: "辅基与其他辅酶的区别是什么？",
      options: [
        "It is a metal ion rather than an organic molecule",
        "It is bound to the apoenzyme very strongly; weakly bound coenzymes behave kinetically as substrates",
        "It is thermally labile whereas other coenzymes are stable",
        "It is synthesised de novo and not derived from a vitamin"
      ],
      answer: 1,
      why_en: "Strength of binding is the criterion. A very strongly bound coenzyme is a prosthetic group; one bound by weak interactions acts, kinetically, as a substrate of the enzyme.",
      why_cn: "判据是结合的牢固程度。结合非常牢固的辅酶即辅基；以弱相互作用结合的辅酶在动力学上表现为酶的底物。"
    },
    {
      type: "mcq",
      q_en: "Which statement about thermal stability is correct?",
      q_cn: "关于热稳定性，哪一说法正确？",
      options: [
        "Both the cofactor and the protein part are thermally stable",
        "The cofactor is thermally stable, the protein part is not",
        "The protein part is thermally stable, the cofactor is not",
        "Neither is thermally stable"
      ],
      answer: 1,
      why_en: "The textbook states it as a general rule: cofactors of enzymes are thermally stable, whereas the protein part of the enzyme molecule is not. This is exploited practically in separating them.",
      why_cn: "教材把它作为一般规律：酶的辅因子是热稳定的，而酶分子的蛋白质部分不是。这在实际分离中被加以利用。"
    },
    {
      type: "short",
      q_en: "Describe the structure of the nicotinamide coenzymes.",
      q_cn: "描述烟酰胺辅酶的结构。",
      accept: ["dinucleotide", "adenine", "nicotinamide", "ribose", "phosphoric", "二核苷酸", "腺嘌呤", "烟酰胺", "核糖", "磷酸"],
      answer_en: "Both have the structure of a dinucleotide. One base is adenine and the other nicotinamide; the sugar component is always D-ribose, and the two nucleotides are joined by two residues of phosphoric acid. They are NAD⁺ and NADP⁺, and both correspond to the vitamin nicotinic acid, transferring H⁺ and electrons.",
      answer_cn: "两者都具有二核苷酸结构。一个碱基是腺嘌呤，另一个是烟酰胺；糖组分始终是 D-核糖，两个核苷酸由两个磷酸残基相连。它们是 NAD⁺ 与 NADP⁺，均对应维生素烟酸，转移 H⁺ 和电子。"
    },
    {
      type: "short",
      q_en: "In what three ways can a metal ion function within an enzyme molecule?",
      q_cn: "金属离子在酶分子中可以有哪三种作用方式？",
      accept: ["active centre", "active center", "bridge", "stabilis", "stabiliz", "structure", "活性中心", "桥", "稳定"],
      answer_en: "As part of the active centre; as a bridge for binding the substrate to the enzyme; or as an element stabilising the spatial structure of the enzyme molecule.",
      answer_cn: "作为活性中心的组成部分；作为把底物结合到酶上的桥梁；或作为稳定酶分子空间结构的因素。"
    }
  ],
  oral: {
    q_en: "Describe the structure of the enzyme molecule and the role of cofactors and coenzymes.",
    q_cn: "描述酶分子的结构，以及辅因子与辅酶的作用。",
    model_en: "Until recently all known enzymes were of protein nature; research over the last twenty years or so has shown that certain other macromolecules can have catalytic ability, though so far only one case, that of a ribonucleic acid, is described. The molecule of some enzymes consists only of a polypeptide chain or chains, while the active form of others contains in addition a non-protein component called the cofactor. A cofactor may be a metal ion or an organic molecule, the latter termed a coenzyme, and some enzymes contain both. As a general rule the cofactors are thermally stable whereas the protein part is not. The catalytically active protein-cofactor complex is the holoenzyme, and the protein part left after removal of the cofactor is the apoenzyme. Enzymes with metal-ion cofactors are metalloenzymes; the commonest are zinc in alcohol dehydrogenase, magnesium in phosphatase, manganese in hexokinase, iron in the cytochromes, copper in tyrosinase, potassium in pyruvate kinase and sodium in ATPase. The metal may act as part of the active centre, as a bridge binding the substrate to the enzyme, or as an element stabilising the spatial structure. Coenzymes usually act as intermediary carriers of the functional groups, atoms or electrons transferred in the catalysed reaction. When a coenzyme is bound very strongly to the apoenzyme it is called a prosthetic group; when it is bound only by weak interactions it behaves kinetically as a substrate of the enzyme. Most coenzymes correspond in structure to vitamins or their derivatives, vitamins being organic substances indispensable for cell function that must be supplied in food. Thus NAD-plus and NADP-plus transfer hydrogen and electrons and derive from nicotinic acid; FMN and FAD likewise transfer hydrogen and electrons and derive from riboflavin; thiamine pyrophosphate transfers an aldehyde group and derives from thiamin; coenzyme A transfers acyl groups and derives from pantothenic acid; biotin transfers carbon dioxide; and pyridoxal phosphate transfers the amino group and derives from pyridoxin.",
    checklist: [
      "Distinguished cofactor / coenzyme / metal ion",
      "Gave holoenzyme and apoenzyme correctly",
      "Stated cofactors thermally stable, protein part not",
      "Gave metalloenzyme examples and the three metal functions",
      "Defined prosthetic group by STRENGTH of binding",
      "Linked coenzymes to vitamins and gave several transferred groups"
    ]
  }
},

{
  id: "3-3-1",
  book: "cz",
  topicKey: "enzyme-kinetics",
  chapter: 3,
  section: "3.3.1",
  czTitle: "Kinetika enzymové reakce; Rovnice Michaelise a Mentenové",
  enTitle: "Enzyme reaction kinetics; the Michaelis–Menten equation",
  cnTitle: "酶反应动力学；米氏方程",
  pages: [54, 55, 56, 57],
  coverage: "partial",
  coverageNote: "pp. 54 and 57 verified against the scans — including the Lineweaver–Burk form, which the book writes with V_lim and [A]. pp. 55–56, carrying the derivation of the Michaelis–Menten equation itself and the definition of K_m, are not in the extracted page set; the derivation given below is standard course material and should be checked against those pages.",
  cnNote: { topic: "十", title: "酶促反应动力学——米氏方程 (笔记 pp.53–62)", status: "mapped" },
  mustKnow: { en: "An enzyme reaction is not one step but two — fast, reversible binding, then a slower, irreversible chemical step — and it is the SECOND step, not the binding, that actually limits how fast the whole reaction can go. That is why V_max (this book's V_lim) saturates: past a certain substrate concentration, every enzyme molecule is already busy, and adding more substrate cannot speed anything up further.", cn: "一个酶反应不是一步，而是两步——先是快速、可逆的结合，然后是较慢、不可逆的化学转化——真正限制整个反应能跑多快的，是**第二步**，不是结合本身。这也是为什么 V_max（本书写作 V_lim）会出现饱和：底物浓度过了某个点之后，每一个酶分子都已经在忙了，再加底物也快不了。" },
  trace: [
    {
      term: "K_m Michaelis 常数",
      what: "它是一个**浓度**，单位是浓度——不是速度，这一点先钉住。它的定义只有一句：当反应速度爬到最大速度的一半时，底物的浓度是多少，那个数就是 K_m。",
      from: "它是怎么冒出来的？不是谁凑出来的经验公式，而是从酶反应的两步机制里推出来的。教材讲得很清楚：底物先跟酶快速地、可以来回的结合，形成 enzyme–substrate complex（EA），这一步**快**；然后才轮到真正的化学变化发生，这一步**慢**。整个反应有多快，卡在第二步而不是第一步。K_m 就是把这两步的快慢揉进了一个数里。",
      to: "K_m 小意味着什么？意味着只要一点点底物，酶就能跑到半速——也就是这个酶**抓底物抓得紧**。这就是它的全部用处：当你要比较两个酶谁更适合这个底物，或者同一个酶面对两种底物更偏爱哪个，K_m 是你唯一能直接拿来说话的量。口试问「哪个更合适」，就从这里答。",
      family: "跟它配套的是 V_lim（最大速度）。还有一件事值得知道：原始的速度-浓度曲线是条越爬越平的双曲线，直接从图上读参数读不准，所以要把数据变个形变成直线来读——教材给了 Lineweaver–Burk 双倒数作图，还有 Cornish-Bowden & Eisenthal 的直接线性作图。它们不是互相竞争的理论，只是同一组数据的不同画法。"
    }
  ],
  summary: {
    en: "From the functional standpoint enzymes can be defined as catalysts of the chemical reactions occurring in organisms. For a substance A to be converted into a product X, the molecules of A must overcome an ENERGY BARRIER — they must be supplied with so-called ACTIVATION ENERGY.",
    cn: "从功能角度看，酶可定义为生物体内所进行化学反应的催化剂。为使物质 A 转变为产物 X，A 的分子必须越过一道能垒——必须获得所谓的活化能。"
  },
  points: [
    { cz: "tři cesty urychlení", en: "THREE WAYS to increase the rate of a chemical reaction. (1) HEATING the system, which raises the energy of the reactant molecules and their ability to overcome the energy barrier — organisms CANNOT use this path, because they are mostly THERMOLABILE.", cn: "提高化学反应速率的三条途径。(1) 加热体系，从而提高反应物分子的能量及其越过能垒的能力——生物体不能采用这条途径，因为它们大多是热不稳定的。" },
    { cz: "katalýza", en: "(2) CATALYSIS. The function of the catalyst — in organisms, the enzyme — consists in TEMPORARILY JOINING with the reactants, so that the reaction proceeds by ANOTHER MECHANISM with LOWER ACTIVATION ENERGY.", cn: "(2) 催化。催化剂——在生物体内即酶——的作用在于暂时与反应物结合，使反应沿另一种活化能更低的机制进行。" },
    { cz: "excitace zářením", en: "(3) The reactant molecules may be EXCITED BY ELECTROMAGNETIC RADIATION (light). The reaction then usually proceeds along a DIFFERENT REACTION COORDINATE.", cn: "(3) 反应物分子可被电磁辐射（光）激发。此时反应通常沿另一条反应坐标进行。" },
    { cz: "Obr. 3.1", en: "Obr. 3.1 is the energy diagram of the uncatalysed reaction (2) and the catalysed reaction (1): A = starting substance, AK = complex of A with the catalyst K, P = product, and E, E₁, E₂ are activation energies.", cn: "图 3.1 是未催化反应 (2) 与催化反应 (1) 的能量图：A = 起始物，AK = A 与催化剂 K 的复合物，P = 产物，E、E₁、E₂ 为活化能。" },
    { cz: "dvoukrokový mechanismus", en: "From experimental observation of the dependence of enzyme reaction rate on substrate concentration it emerged that EVEN THE SIMPLEST enzyme reaction proceeds IN TWO STEPS.", cn: "由对酶反应速率随底物浓度变化的实验观察可知，即使最简单的酶反应也分两步进行。" },
    { cz: "první krok", en: "FIRST, the substrate (A) joins with the enzyme (E) to form the ENZYME–SUBSTRATE COMPLEX (EA). This step is FAST and REVERSIBLE; E and A are held together by WEAK INTERACTIONS.", cn: "第一步，底物 (A) 与酶 (E) 结合形成酶-底物复合物 (EA)。这一步是快速且可逆的；E 与 A 之间由弱相互作用维系。" },
    { cz: "druhý krok", en: "IN THE SECOND PHASE the actual chemical conversion takes place: the EA complex breaks down into the original E and the product (X). This reaction is SLOWER and IRREVERSIBLE.", cn: "第二阶段发生真正的化学转变：EA 复合物分解为原来的 E 和产物 (X)。这一反应较慢且不可逆。" },
    { cz: "značení v této učebnici", en: "NOTATION USED BY THIS TEXTBOOK — worth memorising, because it differs from most English textbooks: the substrate is A (not S), the product is X (not P), and the maximal rate is written V_lim (not V_max). The scheme is E + A ⇌ EA → E + X.", cn: "本教材使用的记号——值得记住，因为它与多数英文教材不同：底物记作 A（而非 S），产物记作 X（而非 P），最大速率写作 V_lim（而非 V_max）。反应式为 E + A ⇌ EA → E + X。" },
    { cz: "Lineweaver-Burk (rovnice 7)", en: "LINEWEAVER–BURK, equation (7) as printed in the book: 1/v = (K_m / V_lim) · (1/[A]) + 1/V_lim. This is the equation of a STRAIGHT LINE whose SLOPE is K_m/V_lim and whose INTERCEPT ON THE 1/v AXIS is 1/V_lim.", cn: "Lineweaver–Burk，书中所印的方程 (7)：1/v = (K_m / V_lim) · (1/[A]) + 1/V_lim。这是一条直线的方程，其斜率为 K_m/V_lim，在 1/v 轴上的截距为 1/V_lim。" },
    { cz: "Cornish-Bowden a Eisenthal", en: "A SIMPLER way of determining the values of the kinetic constants was proposed by CORNISH-BOWDEN and EISENTHAL. It follows from the character of the hyperbola given by equation (6): the COORDINATES OF THE INTERSECTION OF THE ASYMPTOTES of this hyperbola are precisely K_m and V_max. (Obr. 3.4 — the direct linear plot, with −K_m on the [A] axis and V_lim on the v axis.)", cn: "Cornish-Bowden 与 Eisenthal 提出了确定动力学常数值的更简便方法。它源自方程 (6) 所给双曲线的特性：该双曲线渐近线交点的坐标恰好就是 K_m 与 V_max。（图 3.4——直接线性作图，[A] 轴上为 −K_m，v 轴上为 V_lim。）" }
  ],
  gapPoints: [
    { en: "MICHAELIS–MENTEN EQUATION (from the missing pp. 55–56): v = V_lim · [A] / (K_m + [A]). K_m, the Michaelis constant, is the substrate concentration at which the reaction rate reaches HALF of V_lim. A LOW K_m means HIGH affinity of the enzyme for the substrate, and vice versa.", cn: "米氏方程（来自缺失的第 55–56 页）：v = V_lim · [A] / (K_m + [A])。米氏常数 K_m 是反应速率达到 V_lim 一半时的底物浓度。K_m 小表示酶对底物的亲和力高，反之亦然。" },
    { en: "At [A] ≪ K_m the rate is approximately proportional to [A] — kinetics of the FIRST order. At [A] ≫ K_m the enzyme is saturated and the rate approaches V_lim independently of [A] — kinetics of the ZEROTH order.", cn: "当 [A] ≪ K_m 时，速率近似与 [A] 成正比——一级动力学。当 [A] ≫ K_m 时，酶被饱和，速率趋近 V_lim 而与 [A] 无关——零级动力学。" }
  ],
  terms: [
    { cz: "aktivační energie", en: "activation energy", cn: "活化能", def_en: "The energy that must be supplied for the molecules of A to overcome the energy barrier to reaction.", def_cn: "为使 A 的分子越过反应能垒而必须获得的能量。" },
    { cz: "katalýza", en: "catalysis", cn: "催化", def_en: "The catalyst joins the reactants temporarily so the reaction runs by another mechanism with lower activation energy.", def_cn: "催化剂暂时与反应物结合，使反应沿另一种活化能更低的机制进行。" },
    { cz: "komplex enzym-substrát (EA)", en: "enzyme–substrate complex (EA)", cn: "酶-底物复合物 (EA)", def_en: "Formed in the first, fast, reversible step, held by weak interactions.", def_cn: "在快速可逆的第一步中形成，由弱相互作用维系。" },
    { cz: "V_lim", en: "V_lim (limiting / maximal rate)", cn: "V_lim（极限/最大速率）", def_en: "This textbook's symbol for the maximal reaction rate at saturating substrate concentration — elsewhere written V_max.", def_cn: "本教材表示饱和底物浓度下最大反应速率的符号——在别处写作 V_max。" },
    { cz: "K_m", en: "Michaelis constant K_m", cn: "米氏常数 K_m", def_en: "The substrate concentration at half the maximal rate; low K_m = high affinity.", def_cn: "达到最大速率一半时的底物浓度；K_m 小 = 亲和力高。" },
    { cz: "Lineweaver-Burk", en: "Lineweaver–Burk plot", cn: "Lineweaver–Burk 作图", def_en: "1/v against 1/[A]; slope K_m/V_lim, intercept on the 1/v axis 1/V_lim.", def_cn: "以 1/v 对 1/[A] 作图；斜率为 K_m/V_lim，1/v 轴截距为 1/V_lim。" },
    { cz: "Cornish-Bowden a Eisenthal", en: "Cornish-Bowden & Eisenthal (direct linear) plot", cn: "Cornish-Bowden 与 Eisenthal（直接线性）作图", def_en: "A simpler determination in which the coordinates of the intersection of the hyperbola's asymptotes give K_m and V_max directly.", def_cn: "一种更简便的测定法，双曲线渐近线交点的坐标直接给出 K_m 与 V_max。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the Lineweaver–Burk equation as printed in this textbook, the slope of the line is:",
      q_cn: "在本教材所印的 Lineweaver–Burk 方程中，直线的斜率是：",
      options: ["1 / V_lim", "K_m / V_lim", "V_lim / K_m", "−1 / K_m"],
      answer: 1,
      why_en: "Equation (7) reads 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim, so the slope is K_m/V_lim and the intercept on the 1/v axis is 1/V_lim. Note the book writes V_lim, not V_max, and uses [A] for the substrate.",
      why_cn: "方程 (7) 为 1/v = (K_m/V_lim)·(1/[A]) + 1/V_lim，故斜率为 K_m/V_lim，1/v 轴截距为 1/V_lim。注意本书写作 V_lim 而非 V_max，并以 [A] 表示底物。"
    },
    {
      type: "mcq",
      q_en: "Why can organisms not use heating to accelerate their reactions?",
      q_cn: "生物体为什么不能用加热来加速其反应？",
      options: [
        "Because heating would change the equilibrium constant unfavourably",
        "Because they are mostly thermolabile",
        "Because heat cannot lower the activation energy",
        "Because heating excites molecules along a different reaction coordinate"
      ],
      answer: 1,
      why_en: "Heating does raise the energy of reactant molecules and their ability to cross the barrier, but organisms are mostly thermolabile, so this route is closed to them — which is precisely why catalysis matters.",
      why_cn: "加热确实能提高反应物分子的能量及其越过能垒的能力，但生物体大多是热不稳定的，故此路不通——这正是催化之所以重要的原因。"
    },
    {
      type: "mcq",
      q_en: "Which pair of steps correctly describes the simplest enzyme reaction?",
      q_cn: "哪一组步骤正确描述了最简单的酶反应？",
      options: [
        "Slow reversible formation of EA, then fast irreversible breakdown",
        "Fast reversible formation of EA, then slower irreversible breakdown",
        "Fast irreversible formation of EA, then fast reversible breakdown",
        "A single concerted step with no intermediate"
      ],
      answer: 1,
      why_en: "First the substrate A joins the enzyme E to give EA — fast, reversible, weak interactions. Then the actual chemical conversion occurs and EA breaks down to E and product X — slower and irreversible.",
      why_cn: "首先底物 A 与酶 E 结合生成 EA——快速、可逆、由弱相互作用维系。随后发生真正的化学转变，EA 分解为 E 和产物 X——较慢且不可逆。"
    },
    {
      type: "short",
      q_en: "What is the advantage of the Cornish-Bowden and Eisenthal method?",
      q_cn: "Cornish-Bowden 与 Eisenthal 方法的优点是什么？",
      accept: ["simpler", "asymptot", "intersect", "直接", "简便", "渐近线", "交点"],
      answer_en: "It is a simpler way of determining the kinetic constants. It follows from the character of the hyperbola: the coordinates of the intersection of the asymptotes of that hyperbola are precisely K_m and V_max, so the constants can be read off directly without a linear transformation of the data.",
      answer_cn: "它是确定动力学常数的更简便方法。它源自双曲线的特性：该双曲线渐近线交点的坐标恰好就是 K_m 与 V_max，因此无需对数据作线性变换即可直接读出常数。"
    }
  ],
  oral: {
    q_en: "Explain enzyme kinetics: activation energy, the two-step mechanism, and the determination of the kinetic constants.",
    q_cn: "解释酶动力学：活化能、两步机制，以及动力学常数的测定。",
    model_en: "Functionally, enzymes are catalysts of the chemical reactions occurring in organisms. For a substance A to be converted into a product X its molecules must overcome an energy barrier, that is they must be supplied with activation energy. There are three ways to increase a reaction rate. The first is to heat the system, raising the energy of the reactant molecules; organisms cannot use this route because they are mostly thermolabile. The second is catalysis: the catalyst, in organisms the enzyme, temporarily joins the reactants so that the reaction proceeds by a different mechanism with lower activation energy. The third is excitation of the molecules by electromagnetic radiation, after which the reaction usually follows a different reaction coordinate. Experimental study of the dependence of rate on substrate concentration showed that even the simplest enzyme reaction runs in two steps. First the substrate joins the enzyme to form the enzyme-substrate complex; this step is fast and reversible and the two are held by weak interactions. In the second phase the actual chemical conversion occurs and the complex breaks down into the free enzyme and the product; this step is slower and irreversible. The dependence of rate on substrate concentration is a hyperbola described by the Michaelis-Menten equation, in which the limiting rate is reached at saturating substrate concentration and the Michaelis constant is the substrate concentration giving half that rate — so a low Michaelis constant means high affinity. To obtain the constants the equation is commonly linearised in the Lineweaver-Burk form, one over v equals K-m over V-lim times one over the substrate concentration, plus one over V-lim; this is a straight line of slope K-m over V-lim with intercept one over V-lim on the reciprocal-rate axis. A simpler procedure was proposed by Cornish-Bowden and Eisenthal: it follows from the character of the hyperbola that the coordinates of the intersection of its asymptotes are precisely the Michaelis constant and the maximal rate.",
    checklist: [
      "Defined activation energy and the energy barrier",
      "Gave all three ways of accelerating a reaction and why heating is unavailable",
      "Stated catalysis works by a different mechanism with lower activation energy",
      "Described both steps with correct speed and reversibility",
      "Defined K_m as substrate concentration at half maximal rate, and low K_m = high affinity",
      "Wrote the Lineweaver-Burk form with correct slope and intercept",
      "Mentioned the Cornish-Bowden & Eisenthal asymptote method"
    ]
  }
},

{
  id: "3-3-2",
  book: "cz",
  topicKey: "enzyme-kinetics",
  chapter: 3,
  section: "3.3.2",
  czTitle: "Dvousubstrátové reakce",
  enTitle: "Two-substrate reactions",
  cnTitle: "双底物反应",
  pages: [57, 58],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans, including the reaction schemes.",
  cnNote: { topic: "十", title: "酶促反应动力学——双底物反应 (笔记 pp.53–62)", status: "mapped" },
  mustKnow: { en: "A two-substrate reaction only needs a ternary complex if the enzyme actually has to hold both substrates at once to make them react. Ping-pong mechanisms exist precisely because some enzymes do not need that — they can process one substrate, get chemically modified in the act, then use that modification to process the second substrate without ever holding both at the same time. Nicotinamide coenzymes are the standard example, because kinetically they simply behave like a second substrate.", cn: "一个双底物反应只有在酶真的必须同时抓住两个底物才能让它们反应时，才需要三元复合物。乒乓机制之所以存在，正是因为有些酶不需要这样——它可以先处理一个底物，在这个过程中自己被化学修饰一下，然后用这个修饰去处理第二个底物，全程从没同时抓住过两个底物。烟酰胺辅酶就是标准例子，因为从动力学上看它就是表现得像第二个底物。" },
  summary: {
    en: "The Michaelis–Menten equation holds for reactions in which a SINGLE substrate is converted. When two substrates take part in the reaction the situation is more complicated. In principle TWO MECHANISMS of two-substrate reactions are possible.",
    cn: "米氏方程适用于只有单一底物发生转变的反应。当有两种底物参与反应时情况更为复杂。原则上双底物反应有两种可能的机制。"
  },
  points: [
    { cz: "a) ternární komplex", en: "MECHANISM (a) — one in which a TERNARY COMPLEX is formed, i.e. during the reaction BOTH SUBSTRATES ARE BOUND SIMULTANEOUSLY to the enzyme (EAB).", cn: "机制 (a)——形成三元复合物的机制，即在反应过程中两种底物同时结合在酶上 (EAB)。" },
    { cz: "neuspořádaný (random)", en: "A mechanism of this type may be either NEUSPOŘÁDANÝ — RANDOM — meaning that the ORDER of binding of the substrates to the enzyme DOES NOT MATTER…", cn: "这类机制可以是「无序的」（random），即底物结合到酶上的顺序无关紧要……" },
    { cz: "uspořádaný (ordered)", en: "…or USPOŘÁDANÝ — ORDERED — in which a STRICT ORDER applies to the binding of the substrates to the enzyme.", cn: "……或「有序的」（ordered），即底物与酶的结合遵循严格的顺序。" },
    { cz: "b) ping-pong", en: "MECHANISM (b) — the PING-PONG mechanism, in which NO TERNARY COMPLEX ARISES. The enzyme reacts with one substrate (A); the binary complex that forms breaks down with formation of the FIRST PRODUCT (X) and a MODIFIED ENZYME (E′).", cn: "机制 (b)——乒乓机制，其中不形成三元复合物。酶与一种底物 (A) 反应；所形成的二元复合物分解，生成第一个产物 (X) 和一种修饰过的酶 (E′)。" },
    { cz: "regenerace enzymu", en: "That modified enzyme E′ then reacts with the SECOND SUBSTRATE (B); a second binary complex (E′B) arises and finally the SECOND PRODUCT (Y), and THE ENZYME IS REGENERATED.", cn: "该修饰酶 E′ 随后与第二种底物 (B) 反应；生成第二个二元复合物 (E′B)，最终生成第二个产物 (Y)，酶得以再生。" },
    { cz: "příklad", en: "EXAMPLES of two-substrate enzyme reactions are the reactions of enzymes with NICOTINAMIDE COENZYMES, which are needed in the reaction in STOICHIOMETRIC AMOUNT and from the kinetic standpoint HAVE THE CHARACTER OF A SUBSTRATE.", cn: "双底物酶反应的例子是与烟酰胺辅酶有关的酶反应，这类辅酶在反应中以化学计量的量被需要，从动力学角度看具有底物的性质。" }
  ],
  terms: [
    { cz: "ternární komplex", en: "ternary complex", cn: "三元复合物", def_en: "EAB — both substrates bound simultaneously to the enzyme.", def_cn: "EAB——两种底物同时结合在酶上。" },
    { cz: "neuspořádaný mechanismus", en: "random mechanism", cn: "无序机制", def_en: "A ternary-complex mechanism in which the order of substrate binding does not matter.", def_cn: "一种三元复合物机制，其中底物结合的顺序无关紧要。" },
    { cz: "uspořádaný mechanismus", en: "ordered mechanism", cn: "有序机制", def_en: "A ternary-complex mechanism with a strict order of substrate binding.", def_cn: "一种三元复合物机制，底物结合遵循严格顺序。" },
    { cz: "ping-pong mechanismus", en: "ping-pong mechanism", cn: "乒乓机制", def_en: "No ternary complex; the enzyme is transiently modified (E′), releases the first product, then reacts with the second substrate and is regenerated.", def_cn: "不形成三元复合物；酶被暂时修饰 (E′)，释放第一个产物，随后与第二种底物反应并再生。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The defining feature of the ping-pong mechanism is that:",
      q_cn: "乒乓机制的决定性特征是：",
      options: [
        "Both substrates bind simultaneously in a strict order",
        "No ternary complex arises; a modified enzyme E′ is formed and the first product leaves before the second substrate binds",
        "The enzyme is permanently inactivated after one cycle",
        "The two substrates bind in random order to form EAB"
      ],
      answer: 1,
      why_en: "In ping-pong no ternary complex forms at all. The enzyme reacts with A, releases the first product X and becomes the modified enzyme E′, which then reacts with B to release Y and regenerate the enzyme.",
      why_cn: "在乒乓机制中根本不形成三元复合物。酶与 A 反应，释放第一个产物 X 并成为修饰酶 E′，后者再与 B 反应释放 Y 并使酶再生。"
    },
    {
      type: "mcq",
      q_en: "Nicotinamide coenzymes make an enzyme reaction two-substrate because:",
      q_cn: "烟酰胺辅酶之所以使酶反应成为双底物反应，是因为：",
      options: [
        "They are bound as prosthetic groups",
        "They are needed in stoichiometric amount and kinetically have the character of a substrate",
        "They are metal ions acting as bridges",
        "They are thermally stable"
      ],
      answer: 1,
      why_en: "Unlike a tightly bound prosthetic group, a nicotinamide coenzyme is required in stoichiometric quantity and behaves kinetically as a substrate — so the reaction has two substrates.",
      why_cn: "与紧密结合的辅基不同，烟酰胺辅酶以化学计量的量被需要，在动力学上表现为底物——因此该反应有两种底物。"
    },
    {
      type: "short",
      q_en: "Distinguish the random and ordered variants of the ternary-complex mechanism.",
      q_cn: "区分三元复合物机制的无序型与有序型。",
      accept: ["random", "order", "ternary", "无序", "有序", "三元"],
      answer_en: "Both form a ternary complex EAB in which both substrates are bound simultaneously to the enzyme. In the random variant the order in which the substrates bind does not matter; in the ordered variant a strict order applies to the binding of the substrates to the enzyme.",
      answer_cn: "两者都形成三元复合物 EAB，其中两种底物同时结合在酶上。在无序型中底物结合的顺序无关紧要；在有序型中底物与酶的结合遵循严格的顺序。"
    }
  ],
  oral: {
    q_en: "Describe the possible mechanisms of two-substrate enzyme reactions.",
    q_cn: "描述双底物酶反应的可能机制。",
    model_en: "The Michaelis-Menten equation applies to reactions in which a single substrate is converted; when two substrates take part, the situation is more complicated, and in principle two mechanisms are possible. In the first, a ternary complex is formed, meaning that during the reaction both substrates are bound to the enzyme at the same time. This type has two variants: the random mechanism, in which the order of binding of the substrates to the enzyme does not matter, and the ordered mechanism, in which a strict order of binding applies. In the second type, the ping-pong mechanism, no ternary complex arises at all. The enzyme first reacts with one substrate; the binary complex so formed breaks down, releasing the first product and leaving a modified enzyme. This modified enzyme then reacts with the second substrate, forming a second binary complex which finally releases the second product and regenerates the original enzyme. Typical examples of two-substrate reactions are those of enzymes working with nicotinamide coenzymes, since these coenzymes are required in stoichiometric amount and from the kinetic point of view have the character of a substrate.",
    checklist: [
      "Stated MM holds only for single-substrate reactions",
      "Described the ternary complex EAB with both substrates bound simultaneously",
      "Distinguished random from ordered binding",
      "Described ping-pong: no ternary complex, modified enzyme E′, product released before second substrate binds",
      "Stated the enzyme is regenerated at the end",
      "Gave nicotinamide coenzymes as the example, with the reason"
    ]
  }
},

{
  id: "3-3-3",
  book: "cz",
  topicKey: "enzyme-kinetics",
  chapter: 3,
  section: "3.3.3",
  czTitle: "Měření enzymové aktivity",
  enTitle: "Measurement of enzyme activity",
  cnTitle: "酶活性的测定",
  pages: [58],
  coverage: "full",
  coverageNote: "Page verified against the extracted scan.",
  cnNote: { topic: "十", title: "酶促反应动力学——酶活性测定 (笔记 pp.53–62)", status: "mapped" },
  mustKnow: { en: "You can only weigh an enzyme in grams if it is pure and its molecular mass is known — almost never true in practice — so activity, not mass, is what actually gets measured: how much substrate a sample converts per minute. And that measurement only means anything at saturating substrate concentration, where the rate depends purely on how much enzyme is present, not on how much substrate is left to feed it.", cn: "只有在酶是纯品、分子量已知的情况下，才能用克来称量它——实际操作里几乎从不成立——所以真正被测量的是**活性**，而不是质量：一份样品每分钟能转化多少底物。而这个测量只有在底物浓度达到饱和时才有意义，这时反应速率纯粹取决于有多少酶存在，而不取决于还剩多少底物可以喂给它。" },
  summary: {
    en: "The quantity of an enzyme can be expressed in grams or moles as with other substances, but only when working with a PURE enzyme whose molecular mass is known. Because often NEITHER of these assumptions is fulfilled, it is more usual to express the quantity of enzyme by its ACTIVITY.",
    cn: "酶的量可以像其他物质一样以克或摩尔表示，但仅限于处理分子质量已知的纯酶时。由于这两个前提常常都不满足，更常见的做法是用酶的活性来表示其数量。"
  },
  points: [
    { cz: "předpoklady měření", en: "To determine the catalytic activity of an enzyme one must know IN ADVANCE the chemical nature of the reaction the enzyme catalyses, and have available a SIMPLE METHOD for following the DECREASE OF SUBSTRATE or, better, the INCREASE OF PRODUCT with time.", cn: "为测定酶的催化活性，必须事先了解该酶所催化反应的化学本质，并掌握一种简便方法来追踪底物随时间的减少，或更理想地，产物随时间的增加。" },
    { cz: "saturační koncentrace a kinetika 0. řádu", en: "One must know the value of K_m for the given substrate, so that the measurement is carried out at SATURATING substrate concentration, when the reaction proceeds with kinetics of the ZEROTH ORDER — that is, when the REACTION RATE IS PROPORTIONAL TO THE ENZYME CONCENTRATION. One must also know the pH optimum of the enzyme and the influence of temperature on it.", cn: "必须知道该底物的 K_m 值，以便在饱和底物浓度下进行测定，此时反应按零级动力学进行——也就是说，反应速率与酶浓度成正比。还必须知道酶的 pH 最适值以及温度对它的影响。" },
    { cz: "jednotka U", en: "The STANDARD UNIT of enzyme activity (designated U) is that amount of enzyme which converts 1 μmol OF SUBSTRATE IN 1 MINUTE under standard conditions, i.e. at the pH optimum of the enzyme and at 25 °C.", cn: "酶活性的标准单位（记作 U）是指在标准条件下（即酶的 pH 最适值和 25 °C）每分钟转化 1 μmol 底物所需的酶量。" },
    { cz: "katal", en: "In the SI system of units a new unit of enzyme activity, the KATAL, was introduced: that amount of enzyme which converts 1 MOL OF SUBSTRATE IN 1 SECOND — that is, 1 kat = 6·10⁷ U.", cn: "在国际单位制中引入了新的酶活性单位「开特」(katal)：每秒转化 1 mol 底物所需的酶量——即 1 kat = 6·10⁷ U。" },
    { cz: "koncentrace a specifická aktivita", en: "The CONCENTRATION of an enzyme is expressed as activity related to unit volume (U/ml). The measure of the PURITY of an enzyme preparation is the so-called SPECIFIC ACTIVITY, which is activity related to the AMOUNT OF PROTEIN (U/mg).", cn: "酶的浓度以单位体积的活性表示 (U/ml)。酶制剂纯度的量度是所谓比活性，即相对于蛋白质量的活性 (U/mg)。" },
    { cz: "molekulární aktivita", en: "The measure of the CATALYTIC ABILITY of an enzyme is its MOLECULAR ACTIVITY (MA), formerly called the TURNOVER NUMBER (TN): the NUMBER OF SUBSTRATE MOLECULES CONVERTED BY ONE ENZYME MOLECULE IN 1 MINUTE. It can be determined from the value of V and the molecular mass of the enzyme.", cn: "酶催化能力的量度是其分子活性 (MA)，旧称「转换数」(TN)：一个酶分子在 1 分钟内所转化的底物分子数。它可由 V 值和酶的分子质量确定。" }
  ],
  terms: [
    { cz: "jednotka U", en: "unit U", cn: "单位 U", def_en: "Amount of enzyme converting 1 μmol substrate per minute at the enzyme's pH optimum and 25 °C.", def_cn: "在酶的 pH 最适值和 25 °C 下每分钟转化 1 μmol 底物的酶量。" },
    { cz: "katal", en: "katal", cn: "开特 (katal)", def_en: "SI unit — amount of enzyme converting 1 mol substrate per second; 1 kat = 6·10⁷ U.", def_cn: "国际单位制单位——每秒转化 1 mol 底物的酶量；1 kat = 6·10⁷ U。" },
    { cz: "specifická aktivita", en: "specific activity", cn: "比活性", def_en: "Activity per amount of protein (U/mg); the measure of PURITY of an enzyme preparation.", def_cn: "单位蛋白质量的活性 (U/mg)；酶制剂纯度的量度。" },
    { cz: "molekulární aktivita (MA)", en: "molecular activity (MA)", cn: "分子活性 (MA)", def_en: "Formerly turnover number; substrate molecules converted by one enzyme molecule per minute; the measure of CATALYTIC ABILITY.", def_cn: "旧称转换数；一个酶分子每分钟转化的底物分子数；催化能力的量度。" },
    { cz: "kinetika nultého řádu", en: "zeroth-order kinetics", cn: "零级动力学", def_en: "At saturating substrate concentration, where rate is proportional to enzyme concentration — the condition required for activity assays.", def_cn: "在饱和底物浓度下，速率与酶浓度成正比——这是活性测定所要求的条件。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "One standard unit U of enzyme activity converts:",
      q_cn: "1 个酶活性标准单位 U 可转化：",
      options: [
        "1 mol of substrate per second",
        "1 μmol of substrate per minute",
        "1 mmol of substrate per minute",
        "1 μmol of substrate per second"
      ],
      answer: 1,
      why_en: "U = 1 μmol per minute at the enzyme's pH optimum and 25 °C. The katal is the SI unit — 1 mol per second — and 1 kat = 6·10⁷ U.",
      why_cn: "U = 在酶的 pH 最适值与 25 °C 下每分钟 1 μmol。开特是国际单位制单位——每秒 1 mol——且 1 kat = 6·10⁷ U。"
    },
    {
      type: "mcq",
      q_en: "Why must an activity assay be run at SATURATING substrate concentration?",
      q_cn: "为什么活性测定必须在饱和底物浓度下进行？",
      options: [
        "So the reaction is first order in substrate",
        "So the reaction runs with zeroth-order kinetics, making the rate proportional to enzyme concentration",
        "So that K_m can be measured simultaneously",
        "So the enzyme is protected from thermal denaturation"
      ],
      answer: 1,
      why_en: "At saturation the reaction is zeroth order with respect to substrate, so the measured rate depends only on how much ENZYME is present — which is exactly what an activity assay is trying to measure.",
      why_cn: "在饱和时反应对底物为零级，因此所测速率只取决于酶的量——而这正是活性测定所要测量的对象。"
    },
    {
      type: "mcq",
      q_en: "Which quantity measures the PURITY of an enzyme preparation?",
      q_cn: "哪一个量用于衡量酶制剂的纯度？",
      options: [
        "Molecular activity (U per enzyme molecule per minute)",
        "Specific activity (U/mg protein)",
        "Concentration (U/ml)",
        "The katal value"
      ],
      answer: 1,
      why_en: "Specific activity, U per mg of protein, is the measure of PURITY. Molecular activity — the old turnover number — measures the CATALYTIC ABILITY of the enzyme itself, and U/ml is simply concentration.",
      why_cn: "比活性（每毫克蛋白质的 U 数）是纯度的量度。分子活性——旧称转换数——衡量的是酶本身的催化能力，而 U/ml 只是浓度。"
    },
    {
      type: "short",
      q_en: "What must be known in advance before an enzyme activity assay can be set up?",
      q_cn: "在建立酶活性测定之前必须事先知道哪些内容？",
      accept: ["chemical nature", "method", "product", "substrate", "km", "ph optimum", "temperature", "化学本质", "方法", "产物", "最适"],
      answer_en: "The chemical nature of the reaction the enzyme catalyses; a simple method for following the decrease of substrate or, better, the increase of product with time; the value of K_m for the substrate, so that measurement is done at saturating concentration and therefore with zeroth-order kinetics; and the pH optimum of the enzyme together with the influence of temperature on it.",
      answer_cn: "该酶所催化反应的化学本质；一种追踪底物随时间减少、或更理想地追踪产物随时间增加的简便方法；该底物的 K_m 值，以便在饱和浓度下、亦即在零级动力学条件下测定；以及酶的 pH 最适值和温度对它的影响。"
    }
  ],
  oral: {
    q_en: "How is enzyme activity measured and expressed?",
    q_cn: "酶活性如何测定与表示？",
    model_en: "The quantity of an enzyme could be expressed in grams or moles like any other substance, but only if we have a pure enzyme of known molecular mass. Since neither condition is usually met, the quantity of enzyme is expressed instead by its activity. To determine catalytic activity we must know in advance the chemical nature of the reaction catalysed, and have a simple method for following the disappearance of substrate or, preferably, the appearance of product with time. We must also know the Michaelis constant for the substrate, so that the measurement is made at saturating substrate concentration, where the reaction follows zeroth-order kinetics and the rate is therefore proportional to the enzyme concentration; and we must know the pH optimum of the enzyme and the effect of temperature. The standard unit of activity, U, is the amount of enzyme converting one micromole of substrate per minute under standard conditions, that is at the pH optimum and twenty-five degrees Celsius. In the SI system the katal was introduced, being the amount converting one mole of substrate per second, so that one katal equals six times ten to the seventh units. Enzyme concentration is expressed as activity per unit volume, in units per millilitre. The purity of a preparation is measured by the specific activity, the activity per amount of protein, in units per milligram. Finally, the catalytic ability of the enzyme itself is measured by its molecular activity, formerly the turnover number, which is the number of substrate molecules converted by a single enzyme molecule in one minute, and which can be calculated from the maximal rate and the molecular mass of the enzyme.",
    checklist: [
      "Explained why activity is used instead of mass or moles",
      "Listed the prerequisites: reaction nature, assay method, K_m, pH optimum, temperature",
      "Explained saturating substrate → zeroth order → rate ∝ enzyme concentration",
      "Defined U precisely, including pH optimum and 25 °C",
      "Defined katal and gave 1 kat = 6·10⁷ U",
      "Distinguished concentration (U/ml), specific activity (U/mg, purity) and molecular activity (catalytic ability)"
    ]
  }
},

{
  id: "3-4",
  book: "cz",
  topicKey: "enzyme-kinetics",
  chapter: 3,
  section: "3.4",
  czTitle: "Vliv pH a teploty na enzymové reakce",
  enTitle: "Influence of pH and temperature on enzyme reactions",
  cnTitle: "pH 与温度对酶反应的影响",
  pages: [58, 59],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "十", title: "酶促反应动力学——pH与温度的影响 (笔记 pp.53–62)", status: "mapped" },
  mustKnow: { en: "An enzyme's pH optimum need not match the pH it actually experiences inside the cell — and that mismatch is not a flaw, it is one of the cell's own regulatory knobs, since shifting local pH is a cheap way to turn a pathway up or down. Temperature works the same way from two opposing directions: raising it speeds the reaction, but past a critical point it starts unfolding the enzyme — so the observed 'optimum' is really just wherever those two opposite trends cross, not a fixed biological constant.", cn: "一个酶的 pH 最适值不需要和它在细胞里实际遇到的 pH 一致——这个『不匹配』不是缺陷，反而是细胞自己的一个调控旋钮，因为改变局部 pH 是一种廉价的、把某条通路调高或调低的办法。温度的道理类似，只是来自两个相反的方向：升温会加快反应，但过了一个临界点就开始把酶解折叠——所以观察到的『最适温度』只是这两股相反趋势的交叉点，不是一个固定不变的生物学常数。" },
  summary: {
    en: "The activity of most enzymes depends on the concentration of H⁺ in the environment. For most enzymes this dependence has the shape of a CURVE WITH A MAXIMUM; the pH value corresponding to the highest activity is called the pH OPTIMUM.",
    cn: "多数酶的活性取决于环境中 H⁺ 的浓度。对多数酶而言，这一依赖关系呈现为带有极大值的曲线；对应最高活性的 pH 值称为 pH 最适值。"
  },
  points: [
    { cz: "podstata vlivu H⁺", en: "The ESSENCE of the influence of H⁺ on the enzyme is the ACID-BASE CHARACTER of the enzyme molecule, especially of that part of it called the ACTIVE CENTRE. The pH of the environment may ALSO influence the DISSOCIATION OF THE SUBSTRATE.", cn: "H⁺ 对酶产生影响的本质是酶分子的酸碱特性，尤其是被称为活性中心的那一部分的酸碱特性。环境的 pH 也可能影响底物的解离。" },
    { cz: "pH optimum ≠ fyziologické pH", en: "The value of the pH optimum of an enzyme NEED NOT COINCIDE with the pH value at which the enzyme must function in the organism.", cn: "酶的 pH 最适值不一定与该酶在生物体内必须发挥作用时的 pH 值相一致。" },
    { cz: "pH jako regulační nástroj", en: "Precisely the influence of pH on enzyme activity is ONE OF THE TOOLS OF REGULATION of enzyme activity and of the regulation of the metabolism of the cell.", cn: "正是 pH 对酶活性的影响，构成了调节酶活性以及调节细胞代谢的手段之一。" },
    { cz: "vliv teploty", en: "The rate of most chemical reactions, and of enzyme reactions too, depends on TEMPERATURE. Their rate increases approximately TWOFOLD when the temperature rises by 10 °C.", cn: "多数化学反应以及酶反应的速率都取决于温度。温度每升高 10 °C，其速率约增加一倍。" },
    { cz: "kritická hodnota a denaturace", en: "If, however, in enzyme reactions the temperature EXCEEDS A CRITICAL VALUE, the THERMAL DENATURATION of the protein catalyst molecule PREVAILS and the rate of the enzyme reaction BEGINS TO FALL.", cn: "然而在酶反应中，若温度超过某一临界值，蛋白质催化剂分子的热变性便占据上风，酶反应的速率开始下降。" },
    { cz: "teplotní optimum", en: "The TEMPERATURE OPTIMUM of an enzyme is thus the RESULT OF THESE TWO OPPOSING PROCESSES, and its value DEPENDS ON THE ARRANGEMENT OF THE EXPERIMENT.", cn: "因此，酶的温度最适值是这两个相反过程共同作用的结果，其数值取决于实验的设置方式。" },
    { cz: "55-60 °C a termofilové", en: "MOST ENZYMES ARE INACTIVATED AROUND 55–60 °C, although there exist enzymes — mostly from THERMOPHILIC BACTERIA — that are active EVEN AT 85 °C.", cn: "多数酶在 55–60 °C 左右失活，尽管存在一些酶——多来自嗜热细菌——即使在 85 °C 下仍有活性。" }
  ],
  terms: [
    { cz: "pH optimum", en: "pH optimum", cn: "pH 最适值", def_en: "The pH corresponding to the highest activity; arises from the acid-base character of the enzyme, especially the active centre.", def_cn: "对应最高活性的 pH；源于酶（尤其是活性中心）的酸碱特性。" },
    { cz: "teplotní optimum", en: "temperature optimum", cn: "温度最适值", def_en: "The result of two opposing processes — rate increase with temperature versus thermal denaturation; its value depends on the experimental arrangement.", def_cn: "两个相反过程共同作用的结果——速率随温度上升与热变性；其数值取决于实验设置。" },
    { cz: "tepelná denaturace", en: "thermal denaturation", cn: "热变性", def_en: "Loss of the protein catalyst's structure above a critical temperature, causing the reaction rate to fall.", def_cn: "超过临界温度后蛋白质催化剂结构的丧失，导致反应速率下降。" },
    { cz: "termofilní bakterie", en: "thermophilic bacteria", cn: "嗜热细菌", def_en: "Source of exceptional enzymes active even at 85 °C, against the usual inactivation at 55–60 °C.", def_cn: "特殊酶的来源，这些酶在 85 °C 下仍有活性，而通常酶在 55–60 °C 即失活。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "At what temperature are most enzymes inactivated, and what is the exception?",
      q_cn: "多数酶在什么温度下失活？例外是什么？",
      options: [
        "Around 40–45 °C; exceptions from fungi active at 60 °C",
        "Around 55–60 °C; exceptions mostly from thermophilic bacteria active even at 85 °C",
        "Around 70–75 °C; exceptions from plants active at 95 °C",
        "Around 100 °C; no exceptions"
      ],
      answer: 1,
      why_en: "Most enzymes are inactivated around 55–60 °C; enzymes mostly from thermophilic bacteria remain active even at 85 °C.",
      why_cn: "多数酶在 55–60 °C 左右失活；多来自嗜热细菌的酶即使在 85 °C 下仍有活性。"
    },
    {
      type: "mcq",
      q_en: "Why does the temperature optimum depend on the arrangement of the experiment?",
      q_cn: "为什么温度最适值取决于实验的设置方式？",
      options: [
        "Because the pH optimum shifts with temperature",
        "Because it is the resultant of two opposing processes — rate increase with temperature and thermal denaturation — whose relative weight depends on e.g. how long the enzyme is held at that temperature",
        "Because the substrate concentration changes with temperature",
        "Because enzyme concentration cannot be held constant"
      ],
      answer: 1,
      why_en: "The optimum is not a fixed physical constant of the enzyme; it is where the acceleration of the reaction and the thermal denaturation of the catalyst balance, so it shifts with the experimental conditions.",
      why_cn: "最适值并不是酶的固定物理常数；它是反应加速与催化剂热变性两者相平衡之处，因此会随实验条件而移动。"
    },
    {
      type: "mcq",
      q_en: "By how much does the rate of most reactions increase per 10 °C rise in temperature?",
      q_cn: "温度每升高 10 °C，多数反应的速率增加多少？",
      options: ["About 1.2-fold", "About twofold", "About tenfold", "About 100-fold"],
      answer: 1,
      why_en: "Approximately twofold — until the critical temperature is exceeded and thermal denaturation of the protein catalyst takes over.",
      why_cn: "约增加一倍——直到超过临界温度、蛋白质催化剂的热变性占据上风为止。"
    },
    {
      type: "short",
      q_en: "What is the essence of the influence of pH on enzyme activity, and why does it matter physiologically?",
      q_cn: "pH 影响酶活性的本质是什么？它在生理上为什么重要？",
      accept: ["acid-base", "active centre", "active center", "substrate", "regulat", "酸碱", "活性中心", "底物", "调节"],
      answer_en: "The essence is the acid-base character of the enzyme molecule, especially of the active centre; the pH of the environment can also affect the dissociation of the substrate. The pH optimum need not coincide with the pH at which the enzyme actually works in the organism, and precisely this influence of pH is one of the tools by which enzyme activity and the metabolism of the cell are regulated.",
      answer_cn: "其本质是酶分子（尤其是活性中心）的酸碱特性；环境的 pH 也可能影响底物的解离。pH 最适值不一定与该酶在体内实际发挥作用时的 pH 相同，而正是 pH 的这种影响，构成了调节酶活性与细胞代谢的手段之一。"
    }
  ],
  oral: {
    q_en: "How do pH and temperature influence enzyme reactions?",
    q_cn: "pH 和温度如何影响酶反应？",
    model_en: "The activity of most enzymes depends on the hydrogen ion concentration in the environment, and for most enzymes this dependence takes the form of a curve with a maximum; the pH giving the highest activity is called the pH optimum. The essence of this influence is the acid-base character of the enzyme molecule, particularly of the part called the active centre, and the pH may also affect the dissociation of the substrate. Importantly, the pH optimum of an enzyme need not coincide with the pH at which the enzyme actually has to work in the organism — and precisely this influence of pH is one of the tools by which the cell regulates enzyme activity and metabolism. As for temperature, the rate of most chemical reactions, enzyme reactions included, roughly doubles for every ten degrees rise. In enzyme reactions, however, once the temperature exceeds a critical value the thermal denaturation of the protein catalyst prevails and the reaction rate begins to fall. The temperature optimum is therefore the result of these two opposing processes, and its value depends on how the experiment is arranged rather than being a fixed constant of the enzyme. Most enzymes are inactivated at around fifty-five to sixty degrees Celsius, though enzymes from thermophilic bacteria remain active even at eighty-five degrees.",
    checklist: [
      "Defined pH optimum and gave the acid-base character of the active centre as its cause",
      "Noted pH may also affect substrate dissociation",
      "Stated pH optimum need not equal physiological pH, and pH is a regulatory tool",
      "Gave the approximate doubling of rate per 10 °C",
      "Explained the temperature optimum as the resultant of two opposing processes",
      "Noted the optimum depends on experimental arrangement",
      "Gave 55–60 °C and the 85 °C thermophile exception"
    ]
  }
},

{
  id: "3-5",
  book: "cz",
  topicKey: "enzyme-kinetics",
  chapter: 3,
  section: "3.5",
  czTitle: "Inhibice enzymových reakcí",
  enTitle: "Inhibition of enzyme reactions",
  cnTitle: "酶反应的抑制",
  pages: [59, 60, 61],
  coverage: "partial",
  coverageNote: "pp. 59 and 61 verified against the scans. p. 60, which carries the detailed treatment of COMPETITIVE and uncompetitive inhibition, is not in the extracted page set — the competitive/uncompetitive characteristics below are standard course material and are marked as such.",
  cnNote: { topic: "十", title: "酶促反应动力学——抑制作用 (笔记 pp.53–62)", status: "mapped" },
  mustKnow: { en: "Whether the Michaelis-Menten equation still applies to an inhibited reaction comes down to one question: is the concentration of active enzyme actually changing? Irreversible inhibitors destroy active enzyme outright, so the equation breaks; reversible inhibitors just shift the equilibrium between bound and free enzyme, so it still holds — which is exactly why reversible inhibition, not irreversible, is what shows up as a clean shift in K_m or V_max on a kinetic plot.", cn: "米氏方程还适不适用于一个被抑制的反应，归结为一个问题：有活性的酶的浓度是不是真的在变？不可逆抑制剂会把有活性的酶彻底破坏掉，所以方程不再成立；可逆抑制剂只是改变了『结合态』和『游离态』酶之间的平衡，所以方程依然成立——这也正是为什么在动力学图上表现为 K_m 或 V_max 干净移动的是可逆抑制，而不是不可逆抑制。" },
  trace: [
    {
      term: "reversible / irreversible inhibition 可逆与不可逆抑制",
      what: "两类抑制的分界，不在「结合得牢不牢」这种模糊感觉上，而在一个能一句话判定的问题上：**有活性的酶，数量是不是真的变少了？**",
      from: "为什么这么问就能分开？不可逆抑制剂多半是**共价地**结死在酶上，把功能基团直接改掉——那个酶就废了，从此不在场，等于被从队伍里除名。可逆抑制剂只靠弱相互作用贴一下，贴得上也掉得下来，来回换个不停——所以任何时刻它只是让酶在「结合态」和「游离态」之间有个平衡，酶一个都没少。",
      to: "这一条直接决定**米氏方程还能不能用**，而这正是考点。不可逆抑制下，有活性的酶越来越少，方程的前提塌了，不成立；可逆抑制下酶的总量没变，方程照样成立。所以反过来：**在动力学图上能看到 K_m 或 V_max 干净地平移的，一定是可逆抑制**。看见干净的位移，类别就已经确定了。",
      family: "可逆抑制按动力学表现还能再分：competitive（竞争性）、non-competitive（非竞争性——教材特别指出它们多半作用在活性中心**以外**的功能基团上）、mixed（混合型）、uncompetitive（反竞争性）。两类抑制各有各的用处：不可逆抑制被拿来研究酶的结构，某些化学战剂的作用机制正属于此类；可逆抑制则是中间代谢调控的重要手段，也是许多药物起效的基础。"
    }
  ],
  summary: {
    en: "Substances which influence the rate of an enzyme reaction by interacting with the catalyst are called MODULATORS. Those which increase the rate are ACTIVATORS, those which decrease it are INHIBITORS. The discussion deals only with inhibitors, which occur in practice much more often, but all the data hold for activators as well, only in the opposite sense.",
    cn: "通过与催化剂相互作用而影响酶反应速率的物质称为调节物。使速率提高的是激活剂，使速率降低的是抑制剂。以下只讨论抑制剂（它们在实践中出现得频繁得多），但所有内容对激活剂同样成立，只是意义相反。"
  },
  points: [
    { cz: "a) ireverzibilní inhibice", en: "IRREVERSIBLE inhibition: the inhibitor binds VERY FIRMLY, MOSTLY COVALENTLY, to the enzyme, MODIFIES ITS FUNCTIONAL GROUPS and thereby INACTIVATES it. The MICHAELIS–MENTEN EQUATION DOES NOT HOLD for these processes, because the CONCENTRATION OF THE ACTIVE FORM OF THE ENZYME CHANGES.", cn: "不可逆抑制：抑制剂非常牢固地、通常以共价方式与酶结合，修饰其官能团，从而使酶失活。米氏方程不适用于这类过程，因为酶的活性形式的浓度发生了改变。" },
    { cz: "využití ireverzibilní inhibice", en: "Irreversible inhibition is USED FOR STUDYING THE STRUCTURE OF ENZYMES. The action of some CHEMICAL WARFARE AGENTS has the character of irreversible inhibition of enzymes of NERVOUS TISSUE.", cn: "不可逆抑制被用于研究酶的结构。某些化学战剂的作用即具有对神经组织中酶的不可逆抑制的性质。" },
    { cz: "b) reverzibilní inhibice", en: "REVERSIBLE inhibition: the inhibitor binds to the enzyme by WEAK INTERACTIONS. Reversible inhibitors provide VALUABLE DATA about the SUBSTRATE SPECIFICITY and the STRUCTURE OF THE ACTIVE CENTRE of the enzyme.", cn: "可逆抑制：抑制剂以弱相互作用与酶结合。可逆抑制剂提供关于酶的底物特异性和活性中心结构的宝贵信息。" },
    { cz: "biologický význam", en: "Reversible inhibition of enzymes by specific METABOLITES is an important TOOL OF REGULATION of intermediary metabolism and the BASIS OF THE ACTION OF SOME DRUGS.", cn: "特定代谢物对酶的可逆抑制是调节中间代谢的重要手段，也是某些药物作用的基础。" },
    { cz: "dělení podle formy enzymu", en: "The Michaelis–Menten equation CAN be applied to the action of reversible inhibitors. From the kinetic standpoint reversible inhibitors can be divided into several types, IN PRINCIPLE ACCORDING TO WHICH FORM OF THE ENZYME the inhibitor interacts with — the free enzyme E, giving EI, or the enzyme–substrate complex EA, giving EAI.", cn: "米氏方程可以应用于可逆抑制剂的作用。从动力学角度看，可逆抑制剂可分为几种类型，原则上按抑制剂与酶的哪一种形式发生相互作用来划分——是与游离酶 E 结合生成 EI，还是与酶-底物复合物 EA 结合生成 EAI。" },
    { cz: "nekompetitivní inhibice", en: "NON-COMPETITIVE inhibition (verified, p.61): usually these are substances that interact with FUNCTIONAL GROUPS OUTSIDE THE ACTIVE CENTRE of the enzyme, which are however NECESSARY FOR PRESERVING THE CATALYTIC ACTIVITY. For example, HEAVY METAL IONS non-competitively inhibit SH-ENZYMES.", cn: "非竞争性抑制（已核对，第 61 页）：通常是指那些与酶活性中心之外的官能团发生相互作用的物质，而这些官能团对保持催化活性却是必需的。例如，重金属离子对巯基酶产生非竞争性抑制。" },
    { cz: "grafický projev", en: "Experimentally, non-competitive inhibition shows in the graph as a DECREASE OF V_max, while the value of K_m DOES NOT CHANGE.", cn: "在实验图形上，非竞争性抑制表现为 V_max 降低，而 K_m 值不变。" },
    { cz: "smíšená inhibice", en: "The GENERAL CASE of non-competitive inhibition is MIXED inhibition. Everything said for non-competitive inhibition holds for it, ONLY the interaction of the inhibitor with E and with EA IS NOT THE SAME — that is, K_i does not equal K_i′.", cn: "非竞争性抑制的一般情形是混合型抑制。对非竞争性抑制所说的一切对它都成立，只是抑制剂与 E 和与 EA 的相互作用不再相同——即 K_i 不等于 K_i′。" },
    { cz: "Obr. 3.6", en: "Obr. 3.6 'Reverzibilní inhibice enzymu' shows the three types side by side: NEKOMPETITIVNÍ (non-competitive), KOMPETITIVNÍ (competitive) and ANTIKOMPETITIVNÍ (uncompetitive).", cn: "图 3.6「酶的可逆抑制」并列展示三种类型：非竞争性、竞争性和反竞争性（antikompetitivní）。" }
  ],
  gapPoints: [
    { en: "COMPETITIVE inhibition (from the missing p. 60): the inhibitor is usually structurally similar to the substrate and binds to the FREE ENZYME at the ACTIVE CENTRE, forming EI only. It therefore competes with the substrate, and the inhibition CAN BE OVERCOME by raising the substrate concentration. In the graph: K_m INCREASES (apparently), V_max IS UNCHANGED.", cn: "竞争性抑制（来自缺失的第 60 页）：抑制剂通常在结构上与底物相似，结合于游离酶的活性中心，只形成 EI。因此它与底物竞争，提高底物浓度可以解除这种抑制。在图上：K_m（表观）增大，V_max 不变。" },
    { en: "UNCOMPETITIVE (antikompetitivní) inhibition: the inhibitor binds ONLY to the enzyme–substrate complex EA, forming EAI. In the graph BOTH K_m AND V_max DECREASE, so that on a Lineweaver–Burk plot the lines are PARALLEL to the uninhibited one.", cn: "反竞争性（antikompetitivní）抑制：抑制剂只与酶-底物复合物 EA 结合，形成 EAI。在图上 K_m 与 V_max 同时减小，因此在 Lineweaver–Burk 图上，其直线与无抑制剂时的直线平行。" }
  ],
  terms: [
    { cz: "modulátory", en: "modulators", cn: "调节物", def_en: "Substances influencing the rate of an enzyme reaction by interacting with the catalyst; activators raise it, inhibitors lower it.", def_cn: "通过与催化剂相互作用影响酶反应速率的物质；激活剂使之提高，抑制剂使之降低。" },
    { cz: "ireverzibilní inhibice", en: "irreversible inhibition", cn: "不可逆抑制", def_en: "Inhibitor binds very firmly, mostly covalently, modifying functional groups; MM equation does not hold because the active enzyme concentration changes.", def_cn: "抑制剂非常牢固地、通常以共价方式结合，修饰官能团；因活性酶浓度改变，米氏方程不成立。" },
    { cz: "reverzibilní inhibice", en: "reversible inhibition", cn: "可逆抑制", def_en: "Inhibitor binds by weak interactions; MM equation applies; types classified by which enzyme form is bound.", def_cn: "抑制剂以弱相互作用结合；米氏方程适用；按所结合的酶的形式分类。" },
    { cz: "nekompetitivní inhibice", en: "non-competitive inhibition", cn: "非竞争性抑制", def_en: "Inhibitor acts on groups OUTSIDE the active centre that are needed for activity; V_max decreases, K_m unchanged. Example: heavy metals on SH-enzymes.", def_cn: "抑制剂作用于活性中心之外、但为活性所必需的基团；V_max 降低，K_m 不变。例如重金属对巯基酶的作用。" },
    { cz: "smíšená inhibice", en: "mixed inhibition", cn: "混合型抑制", def_en: "The general case of non-competitive inhibition, where the inhibitor's interaction with E and with EA differs (K_i ≠ K_i′).", def_cn: "非竞争性抑制的一般情形，抑制剂与 E 和与 EA 的相互作用不同 (K_i ≠ K_i′)。" },
    { cz: "antikompetitivní inhibice", en: "uncompetitive inhibition", cn: "反竞争性抑制", def_en: "Inhibitor binds only to the EA complex; both K_m and V_max decrease.", def_cn: "抑制剂只与 EA 复合物结合；K_m 与 V_max 同时减小。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Why does the Michaelis–Menten equation NOT hold for irreversible inhibition?",
      q_cn: "为什么米氏方程不适用于不可逆抑制？",
      options: [
        "Because the substrate concentration falls too rapidly",
        "Because the concentration of the ACTIVE FORM of the enzyme changes",
        "Because the reaction becomes zeroth order",
        "Because the inhibitor binds to the EA complex only"
      ],
      answer: 1,
      why_en: "The irreversible inhibitor binds firmly, usually covalently, and inactivates enzyme molecules permanently, so the amount of active enzyme is not constant during the measurement — one of the assumptions of the MM treatment.",
      why_cn: "不可逆抑制剂牢固地（通常以共价方式）结合并永久地使酶分子失活，因此在测定过程中活性酶的量并非恒定——而这正是米氏处理的前提之一。"
    },
    {
      type: "mcq",
      q_en: "Non-competitive inhibition shows in the graph as:",
      q_cn: "非竞争性抑制在图形上表现为：",
      options: [
        "K_m increases, V_max unchanged",
        "V_max decreases, K_m unchanged",
        "Both K_m and V_max decrease",
        "Both K_m and V_max increase"
      ],
      answer: 1,
      why_en: "Non-competitive: V_max falls, K_m unchanged (the inhibitor acts outside the active centre). Competitive: K_m rises, V_max unchanged. Uncompetitive: both fall.",
      why_cn: "非竞争性：V_max 下降，K_m 不变（抑制剂作用于活性中心之外）。竞争性：K_m 上升，V_max 不变。反竞争性：两者都下降。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes MIXED inhibition from non-competitive inhibition?",
      q_cn: "混合型抑制与非竞争性抑制的区别是什么？",
      options: [
        "The inhibitor binds covalently in mixed inhibition",
        "The inhibitor's interaction with E and with EA is not the same, i.e. K_i ≠ K_i′",
        "Mixed inhibition raises V_max",
        "Mixed inhibition cannot be described by the MM equation"
      ],
      answer: 1,
      why_en: "Mixed inhibition is the GENERAL case of non-competitive inhibition — everything said about non-competitive inhibition holds, except that the inhibitor binds E and EA with different affinities, so K_i ≠ K_i′.",
      why_cn: "混合型抑制是非竞争性抑制的一般情形——对非竞争性抑制所说的一切都成立，只是抑制剂与 E 和 EA 的结合亲和力不同，故 K_i ≠ K_i′。"
    },
    {
      type: "short",
      q_en: "What practical and biological significance do irreversible and reversible inhibition have?",
      q_cn: "不可逆抑制与可逆抑制各有什么实践与生物学意义？",
      accept: ["structure", "warfare", "nerv", "specificity", "active centre", "regulat", "drug", "结构", "神经", "特异性", "调节", "药物"],
      answer_en: "Irreversible inhibition is used for studying the structure of enzymes, and the action of some chemical warfare agents has the character of irreversible inhibition of enzymes of nervous tissue. Reversible inhibitors provide valuable data about substrate specificity and the structure of the active centre; reversible inhibition by specific metabolites is an important tool for regulating intermediary metabolism and is the basis of the action of some drugs.",
      answer_cn: "不可逆抑制用于研究酶的结构，某些化学战剂的作用即具有对神经组织中酶的不可逆抑制的性质。可逆抑制剂提供关于底物特异性和活性中心结构的宝贵信息；特定代谢物的可逆抑制是调节中间代谢的重要手段，也是某些药物作用的基础。"
    }
  ],
  oral: {
    q_en: "Classify the types of enzyme inhibition and describe their kinetic characteristics.",
    q_cn: "对酶抑制的类型进行分类，并描述其动力学特征。",
    model_en: "Substances that influence the rate of an enzyme reaction by interacting with the catalyst are called modulators; those that increase the rate are activators and those that decrease it inhibitors. Inhibitors occur far more often in practice, though everything said about them holds for activators in the opposite sense. The interaction of an inhibitor with an enzyme may be of two kinds. In irreversible inhibition the inhibitor binds very firmly, usually covalently, modifies the functional groups of the enzyme and thereby inactivates it; the Michaelis-Menten equation does not hold here, because the concentration of the active form of the enzyme changes. Irreversible inhibition is used for studying enzyme structure, and the action of some chemical warfare agents consists in irreversible inhibition of enzymes of nervous tissue. In reversible inhibition the inhibitor binds by weak interactions; such inhibitors give valuable information about substrate specificity and the structure of the active centre, and reversible inhibition by specific metabolites is an important tool of regulation of intermediary metabolism and the basis of the action of some drugs. The Michaelis-Menten equation can be applied to reversible inhibitors, and they are classified kinetically according to which form of the enzyme the inhibitor interacts with — the free enzyme, giving the EI complex, or the enzyme-substrate complex, giving EAI. In competitive inhibition the inhibitor, usually similar in structure to the substrate, binds at the active centre of the free enzyme, so the inhibition can be overcome by raising the substrate concentration; the apparent Michaelis constant rises while the maximal rate is unchanged. In non-competitive inhibition the inhibitor usually interacts with functional groups outside the active centre which are nevertheless necessary for preserving catalytic activity — heavy metal ions inhibiting sulfhydryl enzymes are the classic example; here the maximal rate falls while the Michaelis constant does not change. The general case of non-competitive inhibition is mixed inhibition, for which everything already said holds except that the interaction of the inhibitor with the free enzyme and with the enzyme-substrate complex is not the same, so the two inhibition constants differ. Finally, in uncompetitive inhibition the inhibitor binds only to the enzyme-substrate complex, and both the Michaelis constant and the maximal rate decrease.",
    checklist: [
      "Defined modulators, activators and inhibitors",
      "Gave irreversible inhibition: covalent, MM does not hold, and WHY",
      "Gave both applications of irreversible inhibition (structure studies, nerve agents)",
      "Gave reversible inhibition: weak interactions, MM applies",
      "Stated the classification principle — which FORM of the enzyme is bound",
      "Gave K_m / V_max changes for competitive, non-competitive and uncompetitive",
      "Gave heavy metals on SH-enzymes as the non-competitive example",
      "Defined mixed inhibition via K_i ≠ K_i′"
    ]
  }
},

{
  id: "3-6",
  book: "cz",
  topicKey: "enzyme-mechanism",
  chapter: 3,
  section: "3.6",
  czTitle: "Mechanismus působení enzymů",
  enTitle: "Mechanism of enzyme action",
  cnTitle: "酶的作用机制",
  pages: [61, 62],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans. The urease rate-enhancement factor was re-read from the p.61 image: the book states 10¹⁴-fold, an exponent the raw OCR dropped entirely (it rendered it as '10krát', i.e. 10-fold).",
  coverageNoteCn: "两页均已与扫描件核对。脆酶的速率提升倍数是从第 61 页的图片重新读出的：教材写的是 10¹⁴ 倍，而原始 OCR 把这个指数整个丢掉了（识别成「10krát」，即 10 倍）。",
  cnNote: { topic: "十一", title: "酶的作用机理及酶的调节——作用机理 (笔记 pp.63–76)", status: "mapped" },
  lehNotes: [
    { kind: "conflict", node: "L-6-4-1",
      en: "The last point of this section — that only a TRUE SUBSTRATE has affinity enough to force the conformational change, and that molecules which bind without evoking it act as INHIBITORS — is disproved by the classic hexokinase experiment. Lehninger 6.4 (A pp.209-210): xylose, one carbon shorter than glucose, binds hexokinase in a position where it CANNOT be phosphorylated, yet the “binding of xylose is sufficient to induce a change in hexokinase” to its active conformation, and the enzyme is then tricked into phosphorylating water — so the rate of ATP hydrolysis goes UP, not down. A non-substrate can induce the change, and the result is a faster side reaction, not inhibition. Lehninger draws the opposite conclusion from the same enzyme: “specificity is observed not in the formation of the ES complex” but in the relative rates of the catalytic steps that follow.",
      cn: "本节最后一点——只有真正的底物才有足够亲和力迫使构象改变，而能结合却不引发构象变化的分子起抑制剂作用——被经典的己糖激酶实验证伪。Lehninger 6.4（A pp.209-210）：木糖比葡萄糖少一个碳，它结合到己糖激酶上的位置使其无法被磷酸化，但其结合足以诱导出活性构象，该酶随即被「骗」去磷酸化水——于是 ATP 水解速率是升高而不是降低。非底物也能诱导构象变化，而结果是一个更快的副反应，不是抑制。Lehninger 从同一个酶得出相反的结论：特异性并不体现在 ES 复合物的形成上，而体现在其后各催化步骤的相对速率上。" }
  ],
  mustKnow: { en: "The active site is a small region built from amino acids that can sit far apart in the sequence but end up next to each other once the chain folds — so an enzyme's specificity is a property of its three-dimensional shape, not of the sequence read in order. And 'lock and key' is the wrong picture: in induced fit, binding itself distorts both enzyme and substrate toward the transition state, which is exactly why only a true substrate — one that can force that distortion — gets turned into product, while a look-alike that merely binds just sits there as an inhibitor.", cn: "活性中心是一小片区域，由在序列上可能相隔很远、但折叠之后挨在一起的氨基酸组成——所以一个酶的特异性是它三维形状的属性，不是按顺序读出来的序列属性。而『锁和钥匙』这个比喻是错的：在诱导契合里，结合本身就会把酶和底物一起往过渡态的方向扭曲——这正是为什么只有真正的底物（能够引发这种扭曲的分子）才会被转化成产物，而一个只会结合、却引发不了这种扭曲的『相似分子』，就只能作为抑制剂待在那里。" },
  trace: [
    {
      term: "induced fit 诱导契合",
      what: "底物结合到酶上的那一刻，**两边都会变形**——酶被撑开或夹紧，底物也被扭了一下。不是两块预先做好的拼图咔哒一声对上就完事。",
      from: "你多半先学过「锁和钥匙」。教材直接说那个比喻是错的，而它错在哪里才是关键：锁和钥匙暗示双方形状固定、严丝合缝就够了——可这只解释了酶为什么**抓得住**特定的底物，完全没有解释酶为什么能让反应**跑得快**。而加速才是酶存在的理由。一个只会精准结合的口袋，是个容器，不是个催化剂。",
      to: "诱导契合给出的答案是：**结合这个动作本身，就把酶和底物一起往过渡态的方向扭**——而越过渡态越容易反应，这一扭就是催化的核心。它还顺手解释了一个现象：有些分子长得和底物很像，结合上去却只能当抑制剂杵在那儿。原因是它们**引发不了那个扭曲**——抓得住，但推不动。",
      family: "活性中心还有一个容易被略过的性质：它在三级结构里只是一小片区域，而组成它的那些氨基酸**在序列上可能隔得很远**，是折叠之后才凑到一块的。所以酶的特异性是它三维形状的属性，光把一级序列读一遍是看不出来的。教材点名活性中心常见的活泼侧链有 histidine、serine、tyrosine。"
    }
  ],
  summary: {
    en: "Only PART of the enzyme molecule is responsible for its catalytic ability — the so-called ACTIVE CENTRE. It is that part in which the contact between enzyme and substrate is realised and where the groups responsible for the actual catalysis of the chemical reaction are located.",
    cn: "只有酶分子的一部分负责其催化能力——即所谓的活性中心。它是酶与底物之间实现接触的部位，也是负责化学反应实际催化过程的基团所在之处。"
  },
  points: [
    { cz: "aminokyseliny aktivního centra", en: "In the active centre of an enzyme, amino acids with REACTIVE SIDE GROUPS are often localised, such as HISTIDINE, SERINE, TYROSINE and others.", cn: "在酶的活性中心中，常定位着带有反应性侧链基团的氨基酸，例如组氨酸、丝氨酸、酪氨酸等。" },
    { cz: "malá oblast, vzdálené v sekvenci", en: "The active centre forms, in the TERTIARY structure of the enzyme molecule, a certain relatively SMALL REGION — but the amino acids belonging to it may, as regards the PRIMARY structure, be CONSIDERABLY DISTANT FROM ONE ANOTHER.", cn: "活性中心在酶分子的三级结构中构成一个相对较小的区域——但就一级结构而言，属于它的那些氨基酸彼此可能相距很远。" },
    { cz: "specifita", en: "A significant feature of enzymes is the SPECIFICITY of their action. An enzyme catalyses the conversion of only a CERTAIN SUBSTRATE (SUBSTRATE SPECIFICITY), and the reaction catalysed proceeds only IN A CERTAIN WAY (SPECIFICITY OF ACTION). If it were not so, the cell would very quickly be flooded with undesirable products.", cn: "酶的一个显著特征是其作用的特异性。一种酶只催化特定底物的转变（底物特异性），并且所催化的反应只按特定方式进行（作用特异性）。若非如此，细胞会很快被不需要的产物淹没。" },
    { cz: "stupně specifity", en: "There are DIFFERENCES among enzymes in the DEGREE of their substrate specificity. Some have PRACTICALLY ABSOLUTE specificity — they do not act even on molecules very similar to the substrate; others on the contrary attack a whole large group of substances containing only certain structural features. Most recently it seems there also exist enzymes capable of catalysing TWO DIFFERENT chemical reactions. Most enzymes are STEREOSPECIFIC, and some can even distinguish between TWO IDENTICAL SUBSTITUENTS ON A NON-CHIRAL CARBON.", cn: "各种酶在底物特异性的程度上存在差异。有些酶的特异性实际上是绝对的——即使对与底物非常相似的分子也不起作用；另一些酶则相反，会作用于只含某些结构特征的一大类物质。最新的看法是，还存在能催化两种不同化学反应的酶。多数酶具有立体特异性，有些甚至能分辨非手性碳上两个相同的取代基。" },
    { cz: "vysoká účinnost", en: "The second significant property of enzymes is their HIGH EFFICIENCY. The textbook's example: the enzyme UREASE increases the rate of hydrolysis of UREA 10¹⁴-FOLD compared with catalysis by hydrogen ions. Thanks to enzymes, most reactions in the cell proceed IN DILUTE SOLUTIONS, AT LOW TEMPERATURE and at NEUTRAL pH.", cn: "酶的第二个显著性质是其高效率。教材所举例子：与氢离子催化相比，脲酶使尿素水解的速率提高 10¹⁴ 倍。由于酶的存在，细胞内多数反应得以在稀溶液中、低温下和中性 pH 下进行。" },
    { cz: "efekt přibližování", en: "PROXIMITY EFFECT: it is assumed that by the binding of the substrate to the enzyme, an important group of the substrate is BROUGHT CLOSE to the catalytic group of the enzyme in the active centre, and thereby conditions for acceleration of the reaction are created. The enzyme reaction is in fact NOT a normal reaction in solution, but takes place in the LIMITED SPACE of the active centre, where the substrates are not only CONCENTRATED but also CORRECTLY ORIENTED.", cn: "邻近效应：一般认为，底物与酶结合后，底物的某个重要基团被拉近到活性中心内酶的催化基团附近，从而为反应加速创造了条件。酶反应实际上并非溶液中的普通反应，而是发生在活性中心的有限空间内，底物在那里不仅被浓集，而且被正确定向。" },
    { cz: "kovalentní katalýza", en: "COVALENT CATALYSIS: in some enzymes catalysis proceeds in such a way that not only the enzyme–substrate complex is transiently formed, but also a VERY REACTIVE, UNSTABLE, COVALENTLY MODIFIED ENZYME, which breaks down very rapidly with formation of the product. By this mechanism proceeds, for example, the reaction catalysed by CHYMOTRYPSIN: E–OH + NO₂–C₆H₄–O–CO–CH₃ → E–O–CO–CH₃ (acetylated enzyme) + NO₂–C₆H₄–OH (nitrophenol, the first product); then E–O–CO–CH₃ + H₂O → E–OH + CH₃COOH (the second product).", cn: "共价催化：在某些酶中，催化过程不仅暂时形成酶-底物复合物，还形成一种反应性很强、不稳定的共价修饰酶，后者迅速分解生成产物。例如胰凝乳蛋白酶所催化的反应即按此机制进行：E–OH + NO₂–C₆H₄–O–CO–CH₃ → E–O–CO–CH₃（乙酰化酶）+ NO₂–C₆H₄–OH（硝基酚，第一个产物）；随后 E–O–CO–CH₃ + H₂O → E–OH + CH₃COOH（第二个产物）。" },
    { cz: "obecná acidobasická katalýza", en: "GENERAL ACID-BASE CATALYSIS: in the active centre of many enzymes there are groups capable of functioning as DONOR OR ACCEPTOR OF H⁺. Catalysis by enzymes often has the character of general acid-base catalysis. This concerns above all the groups –COOH (Asp, Glu), –NH₂ (Lys), –OH (Tyr) and IMIDAZOLE (His).", cn: "普通酸碱催化：在许多酶的活性中心中存在能充当 H⁺ 供体或受体的基团。酶的催化常具有普通酸碱催化的性质。这主要涉及以下基团：–COOH（天冬氨酸、谷氨酸）、–NH₂（赖氨酸）、–OH（酪氨酸）和咪唑（组氨酸）。" },
    { cz: "indukované přizpůsobení", en: "INDUCED FIT: originally it was assumed that the substrate molecule fits into the active site LIKE A KEY INTO A LOCK, i.e. that enzyme and substrate have COMPLEMENTARY structure. Today it is clear that enzyme and substrate NEED NOT be structurally complementary. Only ON INTERACTION does the enzyme structurally ADAPT to the substrate, CHANGING ITS CONFORMATION.", cn: "诱导契合：最初人们认为底物分子像钥匙插入锁那样嵌入活性部位，即酶与底物具有互补的结构。今天已经清楚，酶与底物不一定在结构上互补。只有在相互作用时，酶才在结构上适应底物，改变其构象。" },
    { cz: "termodynamická nestabilita EA", en: "But this MEANS that the resulting EA complex is THERMODYNAMICALLY UNSTABLE and has a STRONG TENDENCY TO RETURN to the stable conformation, and therefore IT BREAKS DOWN WITH FORMATION OF THE PRODUCT. Analogously, on interaction of enzyme with substrate the SUBSTRATE MOLECULE IS ALSO DEFORMED, which again contributes to acceleration of the reaction.", cn: "但这意味着所形成的 EA 复合物在热力学上是不稳定的，具有强烈的回复到稳定构象的倾向，因此它会分解并生成产物。同样地，在酶与底物相互作用时，底物分子也发生形变，这同样有助于反应的加速。" },
    { cz: "důsledek pro inhibitory", en: "For the enzyme to adapt its conformation to the substrate, the AFFINITY between E and A must be SUFFICIENTLY LARGE — that is, ONLY A TRUE SUBSTRATE can force the enzyme molecule to change its conformation. Some molecules DO bind to the enzyme but are NOT able to evoke the conformational change; SUCH SUBSTANCES ACT AS INHIBITORS.", cn: "为使酶把自身构象调整到与底物相适应，E 与 A 之间的亲和力必须足够大——也就是说，只有真正的底物才能迫使酶分子改变构象。某些分子虽然能与酶结合，却不能引发构象变化；这类物质便起抑制剂的作用。" }
  ],
  terms: [
    { cz: "aktivní centrum", en: "active centre", cn: "活性中心", def_en: "The part of the enzyme where contact with the substrate occurs and where the catalytic groups are located; a small region in the tertiary structure, built from residues far apart in the primary structure.", def_cn: "酶分子上与底物接触、并容纳催化基团的部位；在三级结构中是一个小区域，由一级结构中相距很远的残基构成。" },
    { cz: "substrátová specifita", en: "substrate specificity", cn: "底物特异性", def_en: "An enzyme catalyses the conversion of only a certain substrate; degrees range from practically absolute to whole groups of substances.", def_cn: "一种酶只催化特定底物的转变；其程度从实际上绝对到作用于一整类物质不等。" },
    { cz: "specifita účinu", en: "specificity of action", cn: "作用特异性", def_en: "The catalysed reaction proceeds only in a certain way.", def_cn: "所催化的反应只按特定方式进行。" },
    { cz: "efekt přibližování", en: "proximity effect", cn: "邻近效应", def_en: "Binding brings the substrate's reacting group close to the enzyme's catalytic group; substrates are concentrated AND correctly oriented in the limited space of the active centre.", def_cn: "结合使底物的反应基团靠近酶的催化基团；底物在活性中心的有限空间内被浓集并正确定向。" },
    { cz: "kovalentní katalýza", en: "covalent catalysis", cn: "共价催化", def_en: "Transient formation of a very reactive, unstable covalently modified enzyme; example: the acetylated enzyme in the chymotrypsin reaction.", def_cn: "暂时形成反应性很强、不稳定的共价修饰酶；例子：胰凝乳蛋白酶反应中的乙酰化酶。" },
    { cz: "obecná acidobasická katalýza", en: "general acid-base catalysis", cn: "普通酸碱催化", def_en: "Active-centre groups acting as donor or acceptor of H⁺: –COOH (Asp, Glu), –NH₂ (Lys), –OH (Tyr), imidazole (His).", def_cn: "活性中心基团充当 H⁺ 的供体或受体：–COOH（Asp、Glu）、–NH₂（Lys）、–OH（Tyr）、咪唑（His）。" },
    { cz: "indukované přizpůsobení", en: "induced fit", cn: "诱导契合", def_en: "Enzyme and substrate need not be complementary; the enzyme changes conformation on interaction, making EA thermodynamically unstable so it breaks down to product.", def_cn: "酶与底物不必互补；酶在相互作用时改变构象，使 EA 在热力学上不稳定，从而分解生成产物。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to the induced-fit theory, why does the EA complex break down to give product?",
      q_cn: "按诱导契合理论，EA 复合物为什么会分解生成产物？",
      options: [
        "Because the substrate is covalently modified",
        "Because the conformational change makes EA thermodynamically unstable, with a strong tendency to return to the stable conformation",
        "Because the active centre is too small to hold it",
        "Because the pH of the active centre shifts"
      ],
      answer: 1,
      why_en: "The enzyme adapts its conformation to the substrate; the adapted complex is thermodynamically unstable and strongly tends to return to the stable conformation, so it breaks down with formation of product. The substrate is also deformed, further accelerating the reaction.",
      why_cn: "酶把构象调整到与底物相适应；这一适应后的复合物在热力学上不稳定，强烈倾向于回复到稳定构象，因而分解生成产物。底物同时也发生形变，进一步加速反应。"
    },
    {
      type: "mcq",
      q_en: "How does induced fit explain the action of some inhibitors?",
      q_cn: "诱导契合如何解释某些抑制剂的作用？",
      options: [
        "They covalently modify the active centre",
        "They bind to the enzyme but cannot evoke the conformational change",
        "They lower the pH of the active centre",
        "They compete for the cofactor rather than the substrate"
      ],
      answer: 1,
      why_en: "Only a true substrate has sufficient affinity to force the conformational change. Some molecules bind but cannot evoke it — and such substances act as inhibitors. This is a neat, frequently examined consequence of the theory.",
      why_cn: "只有真正的底物具有足够的亲和力迫使构象改变。某些分子虽能结合却无法引发这种改变——这类物质便起抑制剂作用。这是该理论一个巧妙且常被考查的推论。"
    },
    {
      type: "mcq",
      q_en: "Which amino acid side-chain groups are named as participating in general acid-base catalysis?",
      q_cn: "教材点名哪些氨基酸侧链基团参与普通酸碱催化？",
      options: [
        "–SH (Cys), –CH₃ (Ala), phenyl (Phe)",
        "–COOH (Asp, Glu), –NH₂ (Lys), –OH (Tyr), imidazole (His)",
        "guanidino (Arg), indole (Trp), thioether (Met)",
        "amide (Asn, Gln) only"
      ],
      answer: 1,
      why_en: "These four are named explicitly, being able to act as donor or acceptor of H⁺. Note histidine's imidazole appears here AND in the list of reactive residues typically found in the active centre.",
      why_cn: "这四类基团被明确点名，因为它们能充当 H⁺ 的供体或受体。注意组氨酸的咪唑既出现在这里，也出现在活性中心常见反应性残基的名单中。"
    },
    {
      type: "short",
      q_en: "Explain the proximity effect.",
      q_cn: "解释邻近效应。",
      accept: ["close", "orient", "concentrat", "active centre", "limited space", "靠近", "定向", "浓集", "活性中心"],
      answer_en: "By the binding of substrate to enzyme, an important group of the substrate is brought close to the catalytic group of the enzyme in the active centre, creating conditions for acceleration of the reaction. The enzyme reaction is in fact not a normal reaction in solution but takes place in the limited space of the active centre, where the substrates are not only concentrated but also correctly oriented.",
      answer_cn: "底物与酶结合后，底物的某个重要基团被拉近到活性中心内酶的催化基团附近，从而为反应加速创造条件。酶反应实际上并非溶液中的普通反应，而是发生在活性中心的有限空间内，底物在那里不仅被浓集，而且被正确定向。"
    },
    {
      type: "short",
      q_en: "Describe the active centre: its composition, its size and its relation to primary structure.",
      q_cn: "描述活性中心：其组成、大小，以及它与一级结构的关系。",
      accept: ["histidine", "serine", "tyrosine", "small", "tertiary", "distant", "组氨酸", "丝氨酸", "酪氨酸", "三级", "相距"],
      answer_en: "The active centre is the part of the enzyme in which contact between enzyme and substrate is realised and where the groups responsible for the actual catalysis are located. Amino acids with reactive side groups such as histidine, serine and tyrosine are often localised there. In the tertiary structure it forms a relatively small region, but the amino acids belonging to it may be considerably distant from one another in the primary structure.",
      answer_cn: "活性中心是酶分子上实现酶与底物接触、并容纳负责实际催化的基团的部位。带反应性侧链基团的氨基酸，如组氨酸、丝氨酸和酪氨酸，常定位于此。在三级结构中它构成一个相对较小的区域，但就一级结构而言，属于它的氨基酸彼此可能相距很远。"
    }
  ],
  oral: {
    q_en: "Explain the mechanism of enzyme action: the active centre, specificity, and the hypotheses accounting for enzyme efficiency.",
    q_cn: "解释酶的作用机制：活性中心、特异性，以及解释酶高效率的各种假说。",
    model_en: "Only part of the enzyme molecule is responsible for its catalytic ability, the so-called active centre. This is where contact between enzyme and substrate is realised and where the groups responsible for the actual catalysis are situated. Amino acids with reactive side groups, such as histidine, serine and tyrosine, are often located there. In the tertiary structure the active centre is a relatively small region, yet the amino acids belonging to it may lie far apart in the primary structure. A significant feature of enzymes is specificity: an enzyme converts only a certain substrate, which is substrate specificity, and the catalysed reaction proceeds only in a certain way, which is specificity of action; without this the cell would rapidly be flooded with undesirable products. The degree of substrate specificity varies — some enzymes are practically absolutely specific and do not act even on molecules very similar to the substrate, while others attack a whole group of substances sharing only certain structural features. Most enzymes are stereospecific, and some can even distinguish between two identical substituents on a non-chiral carbon. The second significant property is high efficiency; thanks to enzymes most cellular reactions proceed in dilute solution, at low temperature and at neutral pH. Several hypotheses, experimentally verified, explain this. According to the proximity effect, binding of substrate brings an important group of the substrate close to the catalytic group of the enzyme; the reaction is not a normal solution reaction but occurs in the limited space of the active centre, where the substrates are both concentrated and correctly oriented. In covalent catalysis a very reactive, unstable, covalently modified enzyme is transiently formed and rapidly decomposes to give the product — as in the chymotrypsin reaction, where an acetylated enzyme is formed, nitrophenol is released as the first product, and hydrolysis then regenerates the free enzyme and gives acetic acid. Many active centres also contain groups able to donate or accept protons, so that catalysis has the character of general acid-base catalysis; the groups concerned are the carboxyl of aspartate and glutamate, the amino group of lysine, the hydroxyl of tyrosine and the imidazole of histidine. Finally, according to the theory of induced fit, it was originally supposed that substrate fits the active site like a key into a lock, with complementary structures; today it is clear they need not be complementary, and the enzyme adapts its conformation only upon interaction. This means the resulting complex is thermodynamically unstable, tends strongly to return to the stable conformation, and therefore breaks down to give product; the substrate is likewise deformed, further accelerating the reaction. Since only a true substrate has affinity great enough to force this conformational change, molecules that bind but cannot evoke it act as inhibitors.",
    checklist: [
      "Defined the active centre and named typical reactive residues",
      "Stated it is small in tertiary structure but distant in primary structure",
      "Distinguished substrate specificity from specificity of action, with the 'flooded cell' rationale",
      "Mentioned varying degrees of specificity and stereospecificity",
      "Explained the proximity effect: concentration AND orientation in limited space",
      "Explained covalent catalysis with the chymotrypsin example",
      "Listed the four general acid-base catalysis groups with their residues",
      "Explained induced fit, EA instability, substrate deformation",
      "Derived the inhibitor consequence from induced fit"
    ]
  }
},

{
  id: "3-7",
  book: "cz",
  topicKey: "regulatory-enzymes",
  chapter: 3,
  section: "3.7",
  czTitle: "Regulační enzymy; Alosterické enzymy",
  enTitle: "Regulatory enzymes; allosteric enzymes",
  cnTitle: "调节酶；别构酶",
  pages: [62, 63, 64, 65],
  coverage: "partial",
  coverageNote: "p. 62 verified against the scan, covering the definition of regulatory enzymes and the opening of 3.7.1. pp. 63–65, which continue the allosteric enzymes and cover the covalently modulated enzymes, are not in the extracted page set.",
  cnNote: { topic: "十一", title: "酶的作用机理及酶的调节——调节酶 (笔记 pp.63–76)", status: "mapped" },
  mustKnow: { en: "An allosteric enzyme is controlled from a site that is not the active site at all, by a metabolite that is often the very END PRODUCT of the pathway the enzyme starts — so the last molecule in a chain reaches all the way back to switch off the first step. That feedback loop is the whole point: it lets a pathway sense its own output and throttle itself without needing any signal from outside the pathway.", cn: "别构酶是被一个根本不在活性中心上的位点控制的，而控制它的代谢物往往正是它自己所启动的那条通路的**终产物**——于是通路里的最后一个分子，能一路反馈回去，关掉第一步。这个反馈环正是整件事的意义所在：它让一条通路能感知自己的产出、自行调节油门，而不需要来自通路之外的任何信号。" },
  trace: [
    {
      term: "allosteric 别构",
      what: "这个词看着吓人，拆开就没事了：allo- 是「另外的」，-steric 是「位置、空间」。所以 allosteric enzyme 说的是**从另一个位置被控制的酶**——管着它的那个分子，压根不结合在活性中心，而是结合在另一处专门的地方，叫 allosteric site（别构位点）。名字讲的只是**位置**，不涉及机理。",
      from: "细胞为什么需要这么一套？因为它不能等到产物堆成山了才想起来关火，那太晚了。教材给的定义里有个关键词：别构酶的活性是靠**非共价**地结合一个特定代谢物来调节的。非共价意味着结合得上、也随时放得开——所以这是一个能随时开关、随时回调的旋钮，而不是一次性的、改完就回不去的改造。",
      to: "最漂亮的地方在教材那句用大写强调的话里：**别构调节物往往就是这条代谢链自己的终产物**。链是 A → B → C → D，而催化第一步的恰恰就是这个别构酶。于是 D 一多，就回过头去把第一步拧小——这就是 feedback inhibition（反馈抑制）。一条通路自己管住自己的产量，不需要任何来自外面的指令。这也是整章最容易被问到的一个点。",
      family: "调控酶分两大类，别构酶只是其中一类；另一类是 covalently modulated enzymes（共价修饰调节酶），靠在酶身上共价地加一个基团或去掉一个基团来切换状态。两者的区别正好接上面那句话：别构是非共价的、可逆的、快的；共价修饰得靠另外的酶来加、再靠另外的酶来去，慢一档，但也更稳。"
    }
  ],
  summary: {
    en: "All enzymes have properties that can be used to influence their activity in the cell — activity is affected by the pH of the environment, the concentration of substrate or coenzyme, the presence of an inhibitor or activator, and so on. There exist, however, enzymes with SPECIFIC PROPERTIES that PREDESTINE THEM FOR A REGULATORY ROLE in metabolism.",
    cn: "所有酶都具有可被用来影响其细胞内活性的性质——活性受环境 pH、底物或辅酶浓度、抑制剂或激活剂的存在等因素影响。然而，存在一些具有特殊性质的酶，这些性质使它们注定在代谢中承担调节作用。"
  },
  points: [
    { cz: "dva typy regulačních enzymů", en: "These highly specialised enzymes are, on the one hand, the so-called ALLOSTERIC enzymes, and on the other hand the COVALENTLY MODULATED enzymes.", cn: "这些高度特化的酶，一类是所谓的别构酶，另一类是共价调节酶。" },
    { cz: "definice alosterického enzymu", en: "ALLOSTERIC ENZYMES are such enzymes whose activity is MODULATED BY NON-COVALENT INTERACTION WITH A SPECIFIC METABOLITE.", cn: "别构酶是指其活性通过与特定代谢物的非共价相互作用而被调节的酶。" },
    { cz: "alosterické místo", en: "That metabolite binds into a SPECIAL PLACE in the enzyme molecule, the so-called ALLOSTERIC SITE — distinct from the active centre where the substrate binds.", cn: "该代谢物结合到酶分子中的一个特殊部位，即所谓的别构部位——不同于底物结合的活性中心。" },
    { cz: "zpětná vazba", en: "ALLOSTERIC MODULATORS ARE OFTEN THE PRODUCTS OF THE METABOLIC SEQUENCE AT WHOSE BEGINNING THE ALLOSTERIC ENZYME ACTS — i.e. in a chain A → B → C → D → E, the end product E modulates the enzyme catalysing the first step. This is the principle of feedback regulation.", cn: "别构调节物往往正是某条代谢序列的产物，而别构酶恰好作用于该序列的起点——即在 A → B → C → D → E 这样的链条中，终产物 E 调节催化第一步的酶。这就是反馈调节的原理。" }
  ],
  gapPoints: [
    { en: "COVALENTLY MODULATED enzymes (from the missing pp. 63–65): their activity is changed by covalent modification of the enzyme molecule, most commonly by PHOSPHORYLATION and DEPHOSPHORYLATION catalysed by protein kinases and phosphatases — connecting to the phosphoproteins of ch. 2.2.5. Another mechanism is limited proteolysis converting an inactive PROENZYME (zymogen) into the active enzyme.", cn: "共价调节酶（来自缺失的第 63–65 页）：其活性通过酶分子的共价修饰而改变，最常见的是由蛋白激酶和磷酸酶催化的磷酸化与去磷酸化——与第 2.2.5 章的磷蛋白相衔接。另一种机制是有限蛋白水解，把无活性的酶原转变为有活性的酶。" },
    { en: "Allosteric enzymes typically give a SIGMOIDAL (S-shaped) dependence of rate on substrate concentration rather than the hyperbola of Michaelis–Menten kinetics, reflecting COOPERATIVITY between subunits.", cn: "别构酶所给出的速率对底物浓度的依赖关系通常是 S 形（乙状）曲线，而不是米氏动力学的双曲线，这反映了亚基之间的协同性。" }
  ],
  terms: [
    { cz: "regulační enzymy", en: "regulatory enzymes", cn: "调节酶", def_en: "Enzymes with specific properties predestining them for a regulatory role in metabolism: allosteric and covalently modulated enzymes.", def_cn: "具有特殊性质、注定在代谢中承担调节作用的酶：别构酶与共价调节酶。" },
    { cz: "alosterický enzym", en: "allosteric enzyme", cn: "别构酶", def_en: "An enzyme whose activity is modulated by NON-COVALENT interaction with a specific metabolite.", def_cn: "其活性通过与特定代谢物的非共价相互作用而被调节的酶。" },
    { cz: "alosterické místo", en: "allosteric site", cn: "别构部位", def_en: "The special place in the enzyme molecule, distinct from the active centre, into which the modulator binds.", def_cn: "酶分子中不同于活性中心的特殊部位，调节物结合于此。" },
    { cz: "alosterický modulátor", en: "allosteric modulator", cn: "别构调节物", def_en: "The specific metabolite binding at the allosteric site; often the product of the metabolic sequence the enzyme initiates.", def_cn: "结合于别构部位的特定代谢物；常常正是该酶所启动的代谢序列的产物。" },
    { cz: "kovalentně modulované enzymy", en: "covalently modulated enzymes", cn: "共价调节酶", def_en: "The second class of regulatory enzymes, whose activity is altered by covalent modification.", def_cn: "调节酶的第二类，其活性通过共价修饰而改变。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What are the two classes of highly specialised regulatory enzymes?",
      q_cn: "两类高度特化的调节酶是什么？",
      options: [
        "Allosteric and covalently modulated enzymes",
        "Metalloenzymes and hemoenzymes",
        "Constitutive and inducible enzymes",
        "Oxidoreductases and ligases"
      ],
      answer: 0,
      why_en: "Although the activity of ALL enzymes can be influenced by pH, substrate and coenzyme concentration and by inhibitors or activators, only these two classes have properties that predestine them for a regulatory role.",
      why_cn: "尽管所有酶的活性都可受 pH、底物与辅酶浓度以及抑制剂或激活剂的影响，但只有这两类酶具备注定其承担调节作用的性质。"
    },
    {
      type: "mcq",
      q_en: "An allosteric enzyme's activity is modulated by:",
      q_cn: "别构酶的活性通过什么方式被调节？",
      options: [
        "Covalent modification of the active centre",
        "Non-covalent interaction with a specific metabolite at a special allosteric site",
        "Irreversible binding of a heavy metal ion",
        "Proteolytic cleavage of a proenzyme"
      ],
      answer: 1,
      why_en: "The interaction is NON-COVALENT and occurs at a special place distinct from the active centre — the allosteric site. Covalent modification defines the OTHER class of regulatory enzymes.",
      why_cn: "这种相互作用是非共价的，发生在不同于活性中心的特殊部位——别构部位。共价修饰定义的是另一类调节酶。"
    },
    {
      type: "short",
      q_en: "What is characteristic of the identity of allosteric modulators, and what regulatory principle does this create?",
      q_cn: "别构调节物在身份上有什么特点？由此形成了什么调节原理？",
      accept: ["product", "end", "sequence", "feedback", "beginning", "产物", "终", "序列", "反馈", "起点"],
      answer_en: "Allosteric modulators are often the products of the metabolic sequence at whose beginning the allosteric enzyme acts. Since the end product of a pathway modulates the enzyme catalysing its first step, this constitutes feedback regulation — the pathway switches itself down when its product accumulates.",
      answer_cn: "别构调节物往往是某条代谢序列的产物，而别构酶恰好作用于该序列的起点。由于通路的终产物调节催化第一步的酶，这就构成了反馈调节——当产物积累时通路自行下调。"
    }
  ],
  oral: {
    q_en: "What are regulatory enzymes, and how do allosteric enzymes work?",
    q_cn: "什么是调节酶？别构酶如何发挥作用？",
    model_en: "All enzymes have properties that can be used to influence their activity in the cell: activity is affected by the pH of the environment, by the concentration of substrate or coenzyme, and by the presence of inhibitors or activators. There are, however, enzymes with specific properties that predestine them for a regulatory role in metabolism, and these highly specialised enzymes fall into two groups — the allosteric enzymes and the covalently modulated enzymes. Allosteric enzymes are those whose activity is modulated by a non-covalent interaction with a specific metabolite. That metabolite binds into a special place in the enzyme molecule, distinct from the active centre, called the allosteric site. What is characteristic is the identity of these modulators: they are often the products of the very metabolic sequence at whose beginning the allosteric enzyme acts. In a chain in which A is converted to B, then to C, D and finally E, the end product E modulates the enzyme catalysing the first step — which is the principle of feedback regulation, allowing a pathway to switch itself down as its product accumulates. The second group, the covalently modulated enzymes, are regulated instead by covalent modification of the enzyme molecule.",
    checklist: [
      "Noted that ALL enzymes can be influenced, before naming the specialised ones",
      "Named both classes: allosteric and covalently modulated",
      "Defined allosteric modulation as NON-COVALENT interaction with a specific metabolite",
      "Located the binding at the allosteric site, distinct from the active centre",
      "Stated that modulators are often products of the sequence the enzyme initiates",
      "Drew out the feedback-regulation consequence"
    ]
  }
}

);
