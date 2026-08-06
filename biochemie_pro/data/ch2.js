/* ============================================================
   Chapter 2 — Aminokyseliny a proteiny
   Amino acids and proteins / 氨基酸与蛋白质
   Source: Biochemie – Základní kurz, pp. 21–40
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

{
  id: "2-1-1",
  book: "cz",
  topicKey: "amino-acids",
  chapter: 2,
  section: "2.1.1",
  czTitle: "Struktura aminokyselin a výskyt",
  enTitle: "Structure and occurrence of amino acids",
  cnTitle: "氨基酸的结构与存在",
  pages: [21, 22, 23],
  coverage: "partial",
  coverageNote: "pp. 21 and 23 verified against scans; p. 22 (Tab. 2.1, the table of the 20 amino acids, and the rare amino acids) is not in the extracted page set.",
  cnNote: { topic: "四", title: "氨基酸", status: "mapped" },
  summary: {
    en: "Amino acids are organic substances containing a carboxyl and an amino group. A whole range of them occurs in living organisms, but a small group of 20 holds a special position: they are the basic components of proteins, and they are also the starting substances for the formation of all types of nitrogen compounds important to the organism.",
    cn: "氨基酸是含有羧基和氨基的有机物。生物体内存在一系列这类物质，但其中一小组（20 种）占据特殊地位：它们是蛋白质的基本组成成分，同时也是机体形成各类重要含氮化合物的起始物质。"
  },
  points: [
    { cz: "α-poloha", en: "In the amino acids that are components of proteins and for which a genetic code exists, the amino group is ALWAYS in the α-position relative to the carboxyl group.", cn: "在构成蛋白质、并且有遗传密码与之对应的氨基酸中，氨基永远处于相对于羧基的 α 位。" },
    { en: "Amino acids are designated either by trivial names, or by three-letter symbols derived from the trivial names (alanine — Ala, tyrosine — Tyr). For describing a peptide sequence the one-letter symbol is used (Ala — A, Tyr — Y).", cn: "氨基酸的表示或用俗名，或用由俗名派生的三字母符号（丙氨酸 — Ala，酪氨酸 — Tyr）；描述肽序列时使用单字母符号（Ala — A，Tyr — Y）。" },
    { cz: "výjimka prolin", en: "All 20 of these amino acids, WITH THE EXCEPTION OF PROLINE, have a free unsubstituted amino group on the α-carbon. Besides the basic functional groups (–COOH and –NH₂), each amino acid has a characteristic side chain designated R.", cn: "这 20 种氨基酸中，除脯氨酸外，全部在 α 碳上带有游离的、未被取代的氨基。除基本官能团（–COOH 与 –NH₂）外，每种氨基酸都有一条特征性侧链，记作 R。" },
    { cz: "1) nepolární postranní řetězec", en: "GROUP 1 — nonpolar side chain: five amino acids with an aliphatic chain (alanine, leucine, isoleucine, valine, proline), two with an aromatic ring (phenylalanine, tryptophan) and one containing sulfur (methionine).", cn: "第 1 组——非极性侧链：五种带脂肪链的氨基酸（丙氨酸、亮氨酸、异亮氨酸、缬氨酸、脯氨酸），两种带芳环的（苯丙氨酸、色氨酸），以及一种含硫的（甲硫氨酸）。" },
    { cz: "2) polární postranní řetězec", en: "GROUP 2 — polar side chain: these contain either an –OH group (threonine, serine, tyrosine), an amide group (asparagine, glutamine), or an –SH group (cysteine). Glycine is very difficult to place in this classification. The most polar of these amino acids are cysteine and tyrosine.", cn: "第 2 组——极性侧链：本组氨基酸含有 –OH 基（苏氨酸、丝氨酸、酪氨酸）、酰胺基（天冬酰胺、谷氨酰胺）或 –SH 基（半胱氨酸）。甘氨酸很难归入这一分类。本组中极性最强的是半胱氨酸和酪氨酸。" },
    { cz: "3) záporně nabité postranní řetězce", en: "GROUP 3 — negatively charged side chains: glutamic acid and aspartic acid, which carry a second carboxyl group in the side chain.", cn: "第 3 组——带负电侧链：谷氨酸与天冬氨酸，其侧链上还带有第二个羧基。" },
    { cz: "4) kladně nabité postranní řetězce", en: "GROUP 4 — positively charged side chains: lysine (contains a second amino group), arginine (guanidino group) and histidine (contains a weakly basic imidazole residue).", cn: "第 4 组——带正电侧链：赖氨酸（含第二个氨基）、精氨酸（胍基）和组氨酸（含弱碱性咪唑残基）。" },
    { cz: "vzácně se vyskytující", en: "AMINO ACIDS RARELY OCCURRING IN PROTEINS: besides the 20 common ones, further amino acids have been found in the hydrolysates of some proteins; their occurrence is mostly tied to a particular type of protein.", cn: "蛋白质中罕见的氨基酸：除 20 种常见氨基酸外，在某些蛋白质的水解产物中还发现了别的氨基酸；它们的出现多与特定类型的蛋白质相关联。" },
    { cz: "nevyskytující se v proteinech", en: "AMINO ACIDS NOT OCCURRING IN PROTEINS: besides the 20 common ones and their derivatives, over 150 amino acids have been found in various cells and tissues, occurring either free or bound, but NEVER in proteins.", cn: "不存在于蛋白质中的氨基酸：除 20 种常见氨基酸及其衍生物外，在各种细胞和组织中还发现了 150 多种氨基酸，它们或游离或结合存在，但从不出现在蛋白质中。" },
    { cz: "D-konfigurační řada", en: "Some non-protein amino acids belong to the D-configuration series — for example D-glutamic acid in bacterial cell walls.", cn: "某些非蛋白质氨基酸属于 D 构型系列——例如细菌细胞壁中的 D-谷氨酸。" },
    { en: "Some amino acids of this group are important precursors or intermediates in metabolism: citrulline and ornithine are intermediates in the formation of urea (ch. 5.2.2), and β-alanine is a precursor for the synthesis of coenzyme A.", cn: "本组中有些氨基酸是代谢中重要的前体或中间产物：瓜氨酸和鸟氨酸是尿素生成中的中间产物（第 5.2.2 章），β-丙氨酸是辅酶 A 合成的前体。" }
  ],
  terms: [
    { cz: "proteinogenní aminokyseliny", en: "proteinogenic amino acids", cn: "蛋白质氨基酸", def_en: "The 20 amino acids that are basic components of proteins and for which a genetic code exists; the amino group is always in the α-position.", def_cn: "作为蛋白质基本组分、并有遗传密码与之对应的 20 种氨基酸；其氨基永远处于 α 位。" },
    { cz: "postranní řetězec (R)", en: "side chain (R)", cn: "侧链 (R)", def_en: "The characteristic group each amino acid carries besides –COOH and –NH₂; the basis of the four-group classification.", def_cn: "每种氨基酸除 –COOH 和 –NH₂ 外所带的特征基团；四组分类的依据。" },
    { cz: "prolin", en: "proline", cn: "脯氨酸", def_en: "The single exception among the 20 — it does NOT have a free unsubstituted amino group on the α-carbon.", def_cn: "20 种中唯一的例外——其 α 碳上没有游离的、未取代的氨基。" },
    { cz: "guanidinová skupina", en: "guanidino group", cn: "胍基", def_en: "The positively charged side-chain group of arginine.", def_cn: "精氨酸带正电的侧链基团。" },
    { cz: "imidazol", en: "imidazole", cn: "咪唑", def_en: "The weakly basic side-chain residue of histidine.", def_cn: "组氨酸的弱碱性侧链残基。" },
    { cz: "citrulin a ornithin", en: "citrulline and ornithine", cn: "瓜氨酸与鸟氨酸", def_en: "Non-protein amino acids that are intermediates in the formation of urea.", def_cn: "非蛋白质氨基酸，是尿素生成的中间产物。" },
    { cz: "β-alanin", en: "β-alanine", cn: "β-丙氨酸", def_en: "A non-protein amino acid; precursor for the synthesis of coenzyme A.", def_cn: "一种非蛋白质氨基酸；辅酶 A 合成的前体。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which amino acid is the exception to the rule that proteinogenic amino acids have a free unsubstituted amino group on the α-carbon?",
      q_cn: "「蛋白质氨基酸在 α 碳上带有游离未取代氨基」这一规则的例外是哪种氨基酸？",
      options: ["Glycine", "Cysteine", "Proline", "Histidine"],
      answer: 2,
      why_en: "Proline is the sole exception — its nitrogen is part of a ring and is therefore substituted. (Glycine is the exception for a different rule: it is the one with no asymmetric carbon.)",
      why_cn: "脯氨酸是唯一的例外——其氮原子是环的一部分，因而是被取代的。（甘氨酸是另一条规则的例外：它是唯一不含不对称碳的氨基酸。）"
    },
    {
      type: "mcq",
      q_en: "In this textbook's classification, which amino acids form the group with NONPOLAR side chains?",
      q_cn: "在本教材的分类中，哪些氨基酸构成非极性侧链组？",
      options: [
        "Ala, Leu, Ile, Val, Pro, Phe, Trp, Met",
        "Ser, Thr, Tyr, Asn, Gln, Cys",
        "Glu, Asp, Lys, Arg, His",
        "Gly, Ala, Ser, Cys"
      ],
      answer: 0,
      why_en: "Five aliphatic (alanine, leucine, isoleucine, valine, proline), two aromatic (phenylalanine, tryptophan), one sulfur-containing (methionine) — eight in total.",
      why_cn: "五种脂肪族（丙氨酸、亮氨酸、异亮氨酸、缬氨酸、脯氨酸）、两种芳香族（苯丙氨酸、色氨酸）、一种含硫（甲硫氨酸）——共八种。"
    },
    {
      type: "mcq",
      q_en: "Which amino acid does the textbook say is very difficult to place in the polarity classification?",
      q_cn: "教材说哪种氨基酸很难归入极性分类？",
      options: ["Methionine", "Glycine", "Tyrosine", "Arginine"],
      answer: 1,
      why_en: "Glycine's side chain is just a hydrogen, so it fits neither the nonpolar nor the polar group comfortably. The textbook says so explicitly when listing group 2.",
      why_cn: "甘氨酸的侧链只是一个氢原子，因此既不适合归入非极性组，也不适合归入极性组。教材在列举第 2 组时明确指出了这一点。"
    },
    {
      type: "short",
      q_en: "Name the three positively charged amino acids and the group in each side chain that carries the charge.",
      q_cn: "说出三种带正电的氨基酸，以及各自侧链中承载电荷的基团。",
      accept: ["lys", "arg", "his", "guanid", "imidaz", "amino", "赖", "精", "组", "胍", "咪唑"],
      answer_en: "Lysine, which contains a second amino group; arginine, which carries a guanidino group; and histidine, which contains a weakly basic imidazole residue.",
      answer_cn: "赖氨酸，含第二个氨基；精氨酸，带胍基；组氨酸，含弱碱性咪唑残基。"
    },
    {
      type: "short",
      q_en: "Give examples of amino acids that never occur in proteins but are metabolically important.",
      q_cn: "举出从不出现在蛋白质中、但在代谢上重要的氨基酸的例子。",
      accept: ["citrul", "ornith", "alanine", "urea", "coenzyme a", "瓜氨酸", "鸟氨酸", "尿素", "辅酶"],
      answer_en: "Over 150 amino acids occur free or bound but never in proteins. Citrulline and ornithine are intermediates in the formation of urea; β-alanine is a precursor for the synthesis of coenzyme A. Some belong to the D-configuration series, such as D-glutamic acid in bacterial cell walls.",
      answer_cn: "有 150 多种氨基酸以游离或结合形式存在，但从不出现在蛋白质中。瓜氨酸和鸟氨酸是尿素生成的中间产物；β-丙氨酸是辅酶 A 合成的前体。有些属于 D 构型系列，例如细菌细胞壁中的 D-谷氨酸。"
    }
  ],
  oral: {
    q_en: "Classify the proteinogenic amino acids according to the nature of their side chains.",
    q_cn: "按侧链性质对蛋白质氨基酸进行分类。",
    model_en: "Amino acids are organic substances containing a carboxyl and an amino group. Among the many that occur in living organisms, a group of twenty holds a special position: they are the basic components of proteins and the starting material for all nitrogen compounds important to the organism. In these, the amino group is always in the alpha position to the carboxyl, and all of them except proline have a free unsubstituted amino group on the alpha carbon. Besides the two basic functional groups, each carries a characteristic side chain, R, and the classification rests on the nature of that side chain. The first group has nonpolar side chains: five aliphatic — alanine, leucine, isoleucine, valine and proline — two aromatic, phenylalanine and tryptophan, and one sulfur-containing, methionine. The second group has polar side chains, containing either a hydroxyl group in threonine, serine and tyrosine, an amide group in asparagine and glutamine, or a sulfhydryl group in cysteine; the most polar of these are cysteine and tyrosine, and glycine is very difficult to place in this scheme. The third group has negatively charged side chains — glutamic and aspartic acid, each with a second carboxyl. The fourth has positively charged side chains: lysine with a second amino group, arginine with a guanidino group, and histidine with a weakly basic imidazole. Beyond these twenty there are amino acids that occur rarely in proteins, usually tied to a particular protein type, and over one hundred and fifty that occur free or bound but never in proteins — among them citrulline and ornithine as intermediates of urea formation, and beta-alanine as a precursor of coenzyme A.",
    checklist: [
      "Stated the amino group is always in the α-position",
      "Named proline as the exception to the free α-amino group",
      "Gave all four side-chain groups with their members",
      "Noted glycine is hard to classify",
      "Named the charge-carrying group for Lys, Arg and His",
      "Mentioned the non-protein amino acids with examples"
    ]
  }
},

{
  id: "2-1-2",
  book: "cz",
  topicKey: "amino-acids",
  chapter: 2,
  section: "2.1.2",
  czTitle: "Fyzikálně chemické vlastnosti aminokyselin",
  enTitle: "Physico-chemical properties of amino acids",
  cnTitle: "氨基酸的物理化学性质",
  pages: [23, 24],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "四", title: "氨基酸", status: "mapped" },
  summary: {
    en: "Knowledge of the acid-base properties of amino acids is very important both for understanding the properties of proteins and for analysing amino acids themselves. From the ionic character of amino acids follows the dependence of their structure on pH.",
    cn: "了解氨基酸的酸碱性质，对于认识蛋白质的性质以及分析氨基酸本身都非常重要。由氨基酸的离子特性可推知其结构对 pH 的依赖性。"
  },
  points: [
    { cz: "chování při nízkém a vysokém pH", en: "At LOW pH the dissociation of the carboxyl group is suppressed, it becomes protonated, and the amino acid behaves as a CATION. At HIGH pH the quaternary ammonium group is deprotonated and the amino acid behaves as an ANION.", cn: "在低 pH 下，羧基的解离被抑制、发生质子化，氨基酸表现为阳离子；在高 pH 下，季铵基团去质子化，氨基酸表现为阴离子。" },
    { cz: "titrační křivka", en: "This behaviour corresponds to the titration curve of amino acids; the titration curve of glycine is shown in Obr. 2.1.", cn: "这种行为对应于氨基酸的滴定曲线；甘氨酸的滴定曲线见图 2.1。" },
    { cz: "izoelektrický bod (pI)", en: "On this curve there are two significant inflexion points corresponding to the pK of the carboxyl and of the amino group, and further the pH value corresponding to HALF the consumption of titration agent; this value is called the ISOELECTRIC POINT (pI): pI = (pK₁ + pK₂)/2.", cn: "该曲线上有两个重要的拐点，分别对应羧基和氨基的 pK；此外还有对应于滴定试剂消耗量一半的 pH 值，这一数值称为等电点 (pI)：pI = (pK₁ + pK₂)/2。" },
    { cz: "další ionizovatelné skupiny", en: "There are further ionisable groups in the side chains of amino acids. Their dissociation also depends on pH, and therefore the pI values of different amino acids differ — a fact exploited in their separation by ION-EXCHANGE CHROMATOGRAPHY and ELECTROPHORESIS.", cn: "氨基酸侧链中还有其他可电离基团。它们的解离同样依赖 pH，因此不同氨基酸的 pI 值各不相同——这一事实被用于离子交换色谱和电泳分离。" },
    { cz: "asymetrický uhlík", en: "STEREOCHEMISTRY: amino acids in which R is not hydrogen contain at least one asymmetric carbon and are optically active. Glycine therefore contains no asymmetric carbon; all the other amino acids commonly occurring in proteins contain one, WITH THE EXCEPTION of threonine and isoleucine, which contain two asymmetric carbons.", cn: "立体化学：R 不是氢的氨基酸至少含有一个不对称碳原子，具有旋光活性。因此甘氨酸不含不对称碳；蛋白质中常见的其他氨基酸都含有一个，唯苏氨酸和异亮氨酸例外，它们含有两个不对称碳。" },
    { cz: "L-konfigurační řada", en: "All amino acids found in proteins (with the exception of glycine) belong to the L-CONFIGURATION SERIES, just like L-serine derived from L-glyceraldehyde.", cn: "在蛋白质中发现的所有氨基酸（甘氨酸除外）都属于 L 构型系列，正如由 L-甘油醛派生的 L-丝氨酸。" },
    { cz: "absorpční spektra", en: "ABSORPTION SPECTRA: none of the 20 amino acids found in proteins absorbs light in the VISIBLE region. Three — TYROSINE, TRYPTOPHAN and PHENYLALANINE — absorb significantly in the UV region.", cn: "吸收光谱：蛋白质中发现的 20 种氨基酸没有一种在可见光区吸收光。其中三种——酪氨酸、色氨酸和苯丙氨酸——在紫外区有显著吸收。" },
    { cz: "280 nm", en: "Because proteins contain tyrosine and tryptophan residues, measuring the absorbance of these residues at 280 nm is used as a quick and convenient method for determining protein content in solution. CYSTINE absorbs weakly at 240 nm.", cn: "由于蛋白质含有酪氨酸和色氨酸残基，测定这些残基在 280 nm 处的吸光度被用作测定溶液中蛋白质含量的快速简便方法。胱氨酸在 240 nm 处有弱吸收。" }
  ],
  terms: [
    { cz: "izoelektrický bod (pI)", en: "isoelectric point (pI)", cn: "等电点 (pI)", def_en: "The pH corresponding to half the consumption of titration agent; for a simple amino acid pI = (pK₁ + pK₂)/2.", def_cn: "对应于滴定试剂消耗量一半的 pH 值；对简单氨基酸而言 pI = (pK₁ + pK₂)/2。" },
    { cz: "ionexová chromatografie", en: "ion-exchange chromatography", cn: "离子交换色谱", def_en: "A separation method exploiting the fact that different amino acids have different pI values.", def_cn: "利用不同氨基酸 pI 值不同这一事实的分离方法。" },
    { cz: "elektroforéza", en: "electrophoresis", cn: "电泳", def_en: "A separation method likewise based on differing pI values and pH-dependent charge.", def_cn: "同样基于 pI 值差异与 pH 依赖性电荷的分离方法。" },
    { cz: "asymetrický uhlík", en: "asymmetric carbon", cn: "不对称碳", def_en: "Present in all proteinogenic amino acids except glycine; threonine and isoleucine have two.", def_cn: "除甘氨酸外所有蛋白质氨基酸都含有；苏氨酸和异亮氨酸含有两个。" },
    { cz: "L-konfigurační řada", en: "L-configuration series", cn: "L 构型系列", def_en: "The configuration of all amino acids found in proteins except glycine, referenced to L-glyceraldehyde via L-serine.", def_cn: "蛋白质中除甘氨酸外所有氨基酸的构型，经 L-丝氨酸参照 L-甘油醛而定。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which two amino acids commonly occurring in proteins contain TWO asymmetric carbons?",
      q_cn: "蛋白质中常见的哪两种氨基酸含有两个不对称碳原子？",
      options: ["Serine and cysteine", "Threonine and isoleucine", "Tyrosine and tryptophan", "Leucine and valine"],
      answer: 1,
      why_en: "Glycine has none; all the others have exactly one, except threonine and isoleucine, which each have two.",
      why_cn: "甘氨酸没有；其余都恰好含一个，唯苏氨酸和异亮氨酸各含两个。"
    },
    {
      type: "mcq",
      q_en: "Absorbance at 280 nm is used to estimate protein concentration because of which residues?",
      q_cn: "利用 280 nm 处吸光度估算蛋白质浓度，依据的是哪些残基？",
      options: [
        "Phenylalanine and histidine",
        "Cysteine and methionine",
        "Tyrosine and tryptophan",
        "Aspartate and glutamate"
      ],
      answer: 2,
      why_en: "Three amino acids absorb significantly in the UV — tyrosine, tryptophan and phenylalanine — but it is the tyrosine and tryptophan residues that the 280 nm method relies on. Cystine absorbs weakly at 240 nm.",
      why_cn: "三种氨基酸在紫外区有显著吸收——酪氨酸、色氨酸和苯丙氨酸——但 280 nm 方法依赖的是酪氨酸和色氨酸残基。胱氨酸在 240 nm 处有弱吸收。"
    },
    {
      type: "mcq",
      q_en: "At LOW pH, an amino acid behaves as:",
      q_cn: "在低 pH 下，氨基酸表现为：",
      options: ["An anion", "A cation", "A neutral molecule with no charge anywhere", "A radical"],
      answer: 1,
      why_en: "At low pH the dissociation of the carboxyl is suppressed and it becomes protonated, so the molecule carries net positive charge — a cation. At high pH the ammonium group is deprotonated and it becomes an anion.",
      why_cn: "在低 pH 下羧基解离受抑并质子化，分子带净正电荷，即阳离子。在高 pH 下铵基去质子化，成为阴离子。"
    },
    {
      type: "short",
      q_en: "Define the isoelectric point and explain how it is read off a titration curve.",
      q_cn: "定义等电点，并说明如何从滴定曲线上读出它。",
      accept: ["half", "titration", "pk", "inflex", "一半", "滴定", "拐点"],
      answer_en: "On the titration curve there are two significant inflexion points, corresponding to the pK of the carboxyl group and the pK of the amino group. The isoelectric point is the pH value corresponding to half the consumption of titration agent, and for a simple amino acid it is the arithmetic mean of the two pK values, pI = (pK₁ + pK₂)/2. Because side chains carry further ionisable groups whose dissociation also depends on pH, different amino acids have different pI values, which is exploited in ion-exchange chromatography and electrophoresis.",
      answer_cn: "滴定曲线上有两个重要拐点，分别对应羧基的 pK 和氨基的 pK。等电点是对应于滴定试剂消耗量一半的 pH 值；对简单氨基酸而言即两个 pK 值的算术平均，pI = (pK₁ + pK₂)/2。由于侧链带有其他可电离基团、其解离同样依赖 pH，不同氨基酸的 pI 值各异，这一点被用于离子交换色谱与电泳。"
    }
  ],
  oral: {
    q_en: "Describe the acid-base behaviour, stereochemistry and absorption properties of amino acids.",
    q_cn: "描述氨基酸的酸碱行为、立体化学和吸收性质。",
    model_en: "Knowledge of the acid-base properties of amino acids is important both for understanding proteins and for analysing the amino acids themselves. From their ionic character follows a dependence of structure on pH: at low pH the dissociation of the carboxyl is suppressed, it protonates, and the amino acid behaves as a cation; at high pH the quaternary ammonium group is deprotonated and it behaves as an anion. This corresponds to the titration curve, which for glycine shows two significant inflexion points at the pK of the carboxyl and of the amino group. The pH corresponding to half the consumption of titrant is the isoelectric point, which for a simple amino acid equals the mean of the two pK values. Side chains carry further ionisable groups whose dissociation also depends on pH, so the isoelectric points of different amino acids differ — this is what makes separation by ion-exchange chromatography and electrophoresis possible. Stereochemically, any amino acid whose side chain is not hydrogen contains at least one asymmetric carbon and is optically active. Glycine therefore has none; all the others found in proteins have one, except threonine and isoleucine which have two. All amino acids found in proteins except glycine belong to the L-configuration series, referenced through L-serine to L-glyceraldehyde. As for absorption, none of the twenty absorbs in the visible region; tyrosine, tryptophan and phenylalanine absorb significantly in the ultraviolet, and because proteins contain tyrosine and tryptophan residues, absorbance at 280 nanometres is a quick and convenient way of determining protein content. Cystine absorbs weakly at 240 nanometres.",
    checklist: [
      "Described cation at low pH and anion at high pH",
      "Read the two pK inflexions off the titration curve",
      "Defined pI and gave pI = (pK₁ + pK₂)/2",
      "Linked differing pI to ion-exchange chromatography and electrophoresis",
      "Gave glycine (none) / Thr and Ile (two) asymmetric carbon exceptions",
      "Stated the L-configuration series",
      "Gave 280 nm for Tyr/Trp and 240 nm for cystine"
    ]
  }
},

{
  id: "2-1-3",
  book: "cz",
  topicKey: "amino-acids",
  chapter: 2,
  section: "2.1.3",
  czTitle: "Chemické reakce aminokyselin",
  enTitle: "Chemical reactions of amino acids",
  cnTitle: "氨基酸的化学反应",
  pages: [24, 25],
  coverage: "partial",
  coverageNote: "p. 24 verified against the scan; p. 25 (continuation, incl. Obr. 2.2 ninhydrin scheme and side-chain reactions such as the Sanger reaction) is not in the extracted page set.",
  cnNote: { topic: "四", title: "氨基酸", status: "mapped" },
  summary: {
    en: "The chemical reactions of amino acids involve on the one hand the basic functional groups (–COOH and –NH₂), and on the other hand the side chains of the amino acids.",
    cn: "氨基酸的化学反应一方面涉及基本官能团（–COOH 与 –NH₂），另一方面涉及氨基酸的侧链。"
  },
  points: [
    { cz: "reakce karboxylové skupiny", en: "CARBOXYL GROUPS can form amides (see ch. 2.1.4), esters, acyl halides and azides; these reactions are used in peptide synthesis. Further, the –COOH group can be reduced with formation of an α-AMINO ALCOHOL.", cn: "羧基可形成酰胺（见第 2.1.4 章）、酯、酰卤和叠氮化物；这些反应用于肽的合成。此外，–COOH 基可被还原生成 α-氨基醇。" },
    { cz: "acylace aminoskupiny", en: "The α-AMINO GROUP can be acylated by the action of acyl halides or anhydrides, which is used for PROTECTING amino groups.", cn: "α-氨基可通过酰卤或酸酐的作用被酰化，这一反应用于氨基的保护。" },
    { cz: "ninhydrinová reakce", en: "One of the most characteristic reactions of the α-amino group is the NINHYDRIN REACTION. On heating a solution of an amino acid with ninhydrin an intensely coloured product arises: BLUE-VIOLET in the case of an amino acid with a free –NH₂ group, YELLOW in the case of an amino acid with a substituted –NH₂ group (proline). The course of the reaction is shown in Obr. 2.2.", cn: "α-氨基最具特征性的反应之一是茚三酮反应。将氨基酸溶液与茚三酮共热，生成颜色浓烈的产物：带游离 –NH₂ 基的氨基酸生成蓝紫色产物；–NH₂ 基被取代的氨基酸（脯氨酸）则生成黄色产物。反应过程见图 2.2。" }
  ],
  terms: [
    { cz: "ninhydrinová reakce", en: "ninhydrin reaction", cn: "茚三酮反应", def_en: "The most characteristic reaction of the α-amino group; gives a blue-violet product with a free –NH₂ and a yellow product with a substituted –NH₂ (proline).", def_cn: "α-氨基最具特征性的反应；游离 –NH₂ 生成蓝紫色产物，被取代的 –NH₂（脯氨酸）生成黄色产物。" },
    { cz: "α-aminoalkohol", en: "α-amino alcohol", cn: "α-氨基醇", def_en: "The product of reduction of the carboxyl group of an amino acid.", def_cn: "氨基酸羧基被还原的产物。" },
    { cz: "chránění aminoskupin", en: "protection of amino groups", cn: "氨基保护", def_en: "Acylation of the α-amino group with acyl halides or anhydrides, used in synthesis.", def_cn: "用酰卤或酸酐酰化 α-氨基，用于合成。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "In the ninhydrin reaction, why does proline give a different colour from the other amino acids?",
      q_cn: "在茚三酮反应中，脯氨酸为什么与其他氨基酸呈现不同的颜色？",
      options: [
        "It has no carboxyl group",
        "Its –NH₂ group is substituted, so it gives yellow instead of blue-violet",
        "It contains sulfur, which quenches the colour",
        "It is the only D-amino acid in proteins"
      ],
      answer: 1,
      why_en: "The blue-violet product forms with a FREE –NH₂ group. Proline's nitrogen is part of a ring and hence substituted, so it gives a yellow product instead — the same structural peculiarity noted in section 2.1.1.",
      why_cn: "蓝紫色产物由游离的 –NH₂ 基生成。脯氨酸的氮是环的一部分、因而是被取代的，所以生成黄色产物——这与 2.1.1 节指出的结构特点是同一件事。"
    },
    {
      type: "short",
      q_en: "Which reactions of the carboxyl group are used in peptide synthesis?",
      q_cn: "羧基的哪些反应被用于肽的合成？",
      accept: ["amide", "ester", "acyl halide", "azide", "酰胺", "酯", "酰卤", "叠氮"],
      answer_en: "Carboxyl groups can form amides, esters, acyl halides and azides, and these reactions are used in peptide synthesis. In addition the carboxyl group can be reduced to give an α-amino alcohol.",
      answer_cn: "羧基可形成酰胺、酯、酰卤和叠氮化物，这些反应用于肽的合成。此外羧基还可被还原生成 α-氨基醇。"
    }
  ],
  oral: {
    q_en: "What are the characteristic chemical reactions of amino acids?",
    q_cn: "氨基酸有哪些特征性化学反应？",
    model_en: "The chemical reactions of amino acids involve on one hand the basic functional groups, the carboxyl and the amino group, and on the other hand the side chains. The carboxyl group can form amides — which is how the peptide bond arises — as well as esters, acyl halides and azides; all of these are exploited in peptide synthesis. The carboxyl can also be reduced, giving an alpha-amino alcohol. The alpha-amino group can be acylated by acyl halides or anhydrides, and this is used to protect amino groups during synthesis. The most characteristic reaction of the alpha-amino group is the ninhydrin reaction: on heating an amino acid solution with ninhydrin an intensely coloured product arises, blue-violet for an amino acid with a free amino group, and yellow for one whose amino group is substituted — that is, for proline.",
    checklist: [
      "Separated reactions of the basic functional groups from side-chain reactions",
      "Listed amide, ester, acyl halide, azide for the carboxyl and linked them to peptide synthesis",
      "Mentioned reduction to α-amino alcohol",
      "Gave acylation as amino-group protection",
      "Described the ninhydrin reaction with BOTH colours and the proline exception"
    ]
  }
},

{
  id: "2-1-4",
  book: "cz",
  topicKey: "peptides-and-proteins",
  chapter: 2,
  section: "2.1.4",
  czTitle: "Tvorba peptidové vazby",
  enTitle: "Formation of the peptide bond",
  cnTitle: "肽键的形成",
  pages: [26],
  coverage: "full",
  coverageNote: "Page verified against the extracted scan.",
  cnNote: { topic: "五", title: "蛋白质一级结构", status: "mapped" },
  summary: {
    en: "In proteins the carboxyl group of one amino acid is joined to the α-amino group of the next amino acid by a PEPTIDE BOND (amide bond). Formation of a dipeptide from two amino acids is accompanied by the loss of a molecule of water.",
    cn: "在蛋白质中，一个氨基酸的羧基通过肽键（酰胺键）与下一个氨基酸的 α-氨基相连。由两个氨基酸形成二肽的过程伴随着一分子水的失去。"
  },
  points: [
    { cz: "nevětvený řetězec", en: "The polypeptide chain is formed by many amino acid residues joined by peptide bonds and is UNBRANCHED.", cn: "多肽链由许多通过肽键相连的氨基酸残基构成，并且是不分支的。" },
    { cz: "dva konce", en: "Because the building units forming the peptide chain (amino acid residues) have two functional groups (–NH₂ and –COOH), the peptide chain also has TWO ENDS.", cn: "由于构成肽链的建筑单元（氨基酸残基）有两个官能团（–NH₂ 与 –COOH），肽链也有两个末端。" },
    { cz: "konvence zápisu", en: "By CONVENTION the sequence of amino acids in a peptide chain is written beginning with the amino acid that has a free amino group (the N-TERMINAL amino acid) and ending with the amino acid that has a free carboxyl group (the C-TERMINAL amino acid). See Obr. 2.4.", cn: "按照惯例，肽链中氨基酸的序列从带游离氨基的氨基酸（N 端氨基酸）写起，到带游离羧基的氨基酸（C 端氨基酸）为止。见图 2.4。" },
    { cz: "hlavní řetězec a variabilní část", en: "The polypeptide chain consists on the one hand of a REGULARLY REPEATING part (the main chain) and on the other hand of a VARIABLE part formed by the various side chains of the amino acids (R₁–R₅).", cn: "多肽链一方面由规则重复的部分（主链）构成，另一方面由氨基酸各种侧链所构成的可变部分（R₁–R₅）构成。" },
    { cz: "názvosloví podle délky", en: "Two amino acids form a dipeptide, three a tripeptide, and so on. If NOT MORE THAN 10 amino acids are joined we speak of OLIGOPEPTIDES; with a higher number, of POLYPEPTIDES. Peptide chains consisting of MORE THAN 100 amino acid residues are designated PROTEINS.", cn: "两个氨基酸构成二肽，三个构成三肽，依此类推。若相连的氨基酸不超过 10 个，称为寡肽；数目更多则称为多肽。由 100 个以上氨基酸残基组成的肽链被称为蛋白质。" }
  ],
  terms: [
    { cz: "peptidová vazba", en: "peptide bond", cn: "肽键", def_en: "The amide bond joining the carboxyl of one amino acid to the α-amino of the next, formed with loss of water.", def_cn: "把一个氨基酸的羧基与下一个氨基酸的 α-氨基相连的酰胺键，形成时脱去一分子水。" },
    { cz: "N-koncová aminokyselina", en: "N-terminal amino acid", cn: "N 端氨基酸", def_en: "The residue with a free amino group; by convention the sequence is written starting here.", def_cn: "带游离氨基的残基；按惯例序列由此写起。" },
    { cz: "C-koncová aminokyselina", en: "C-terminal amino acid", cn: "C 端氨基酸", def_en: "The residue with a free carboxyl group; the sequence ends here.", def_cn: "带游离羧基的残基；序列在此结束。" },
    { cz: "oligopeptid", en: "oligopeptide", cn: "寡肽", def_en: "A chain of not more than 10 amino acids.", def_cn: "不超过 10 个氨基酸的链。" },
    { cz: "polypeptid", en: "polypeptide", cn: "多肽", def_en: "A chain of more than 10 amino acids.", def_cn: "多于 10 个氨基酸的链。" },
    { cz: "protein (bílkovina)", en: "protein", cn: "蛋白质", def_en: "A peptide chain of more than 100 amino acid residues.", def_cn: "由 100 个以上氨基酸残基组成的肽链。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to this textbook, a peptide chain is called a PROTEIN when it consists of:",
      q_cn: "按本教材，肽链在含有多少残基时被称为蛋白质？",
      options: [
        "More than 10 amino acid residues",
        "More than 50 amino acid residues",
        "More than 100 amino acid residues",
        "More than 500 amino acid residues"
      ],
      answer: 2,
      why_en: "The textbook's thresholds are explicit: not more than 10 = oligopeptide; more than 10 = polypeptide; more than 100 residues = protein.",
      why_cn: "教材给出的界限很明确：不超过 10 个为寡肽；多于 10 个为多肽；超过 100 个残基则为蛋白质。"
    },
    {
      type: "mcq",
      q_en: "Which is the correct convention for writing a peptide sequence?",
      q_cn: "书写肽序列的正确惯例是哪一个？",
      options: [
        "Begin at the free carboxyl end, end at the free amino end",
        "Begin at the free amino end, end at the free carboxyl end",
        "Begin at whichever end carries the larger side chain",
        "There is no fixed convention"
      ],
      answer: 1,
      why_en: "The sequence starts with the N-terminal amino acid (free amino group) and ends with the C-terminal amino acid (free carboxyl group).",
      why_cn: "序列由 N 端氨基酸（带游离氨基）开始，到 C 端氨基酸（带游离羧基）结束。"
    },
    {
      type: "short",
      q_en: "What two parts does a polypeptide chain consist of, and why does it have exactly two ends?",
      q_cn: "多肽链由哪两部分构成？它为什么恰好有两个末端？",
      accept: ["main chain", "repeat", "variable", "side chain", "two functional", "主链", "重复", "可变", "侧链"],
      answer_en: "It consists of a regularly repeating part, the main chain, and a variable part formed by the various amino acid side chains. It has exactly two ends because the building units — the amino acid residues — each have two functional groups, an amino and a carboxyl group; the chain is unbranched, so one free amino group remains at one end and one free carboxyl group at the other.",
      answer_cn: "它由规则重复的部分（主链）和由各种氨基酸侧链构成的可变部分组成。它恰好有两个末端，是因为其建筑单元——氨基酸残基——各有两个官能团（氨基与羧基）；链不分支，因此一端保留一个游离氨基，另一端保留一个游离羧基。"
    }
  ],
  oral: {
    q_en: "Describe the formation and features of the peptide bond and the polypeptide chain.",
    q_cn: "描述肽键与多肽链的形成及其特征。",
    model_en: "In proteins the carboxyl group of one amino acid is joined to the alpha-amino group of the next by a peptide bond, which is an amide bond; the formation of a dipeptide from two amino acids is accompanied by the loss of a molecule of water. The resulting polypeptide chain is built of many amino acid residues joined by peptide bonds and is unbranched. Since each building unit carries two functional groups, an amino and a carboxyl, the chain has two ends, and by convention the sequence is written starting from the amino acid with the free amino group, the N-terminal residue, and ending with the amino acid with the free carboxyl group, the C-terminal residue. The chain consists of a regularly repeating part, the main chain, and a variable part made up of the different side chains. As to nomenclature, two amino acids form a dipeptide and three a tripeptide; if not more than ten are joined we speak of oligopeptides, and with a higher number of polypeptides. Peptide chains consisting of more than one hundred amino acid residues are designated proteins.",
    checklist: [
      "Identified the peptide bond as an amide bond with loss of water",
      "Stated the chain is unbranched and has two ends, with the reason",
      "Gave the N-terminal → C-terminal writing convention",
      "Distinguished main chain (repeating) from side chains (variable)",
      "Gave the 10-residue and 100-residue thresholds correctly"
    ]
  }
},

{
  id: "2-2-1",
  book: "cz",
  topicKey: "protein-primary-structure",
  chapter: 2,
  section: "2.2.1",
  czTitle: "Sekvence aminokyselin (primární struktura)",
  enTitle: "Amino acid sequence (primary structure)",
  cnTitle: "氨基酸序列（一级结构）",
  pages: [26, 27],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "五", title: "蛋白质一级结构", status: "mapped" },
  summary: {
    en: "To characterise a peptide chain it is not enough to know the kind and number of amino acid residues that form it and that can be released by hydrolysis — it is necessary to know their ORDER. The order of amino acids covalently bound in a peptide chain, the amino acid sequence, is designated the PRIMARY STRUCTURE.",
    cn: "要表征一条肽链，仅知道构成它、并可经水解释放出来的氨基酸残基的种类和数目是不够的——还必须知道它们的顺序。肽链中共价结合的氨基酸的顺序，即氨基酸序列，被称为一级结构。"
  },
  points: [
    { cz: "a) spojovací článek", en: "REASON (a): analysis of the relations between the amino acid sequence and the three-dimensional structure of the protein reveals the rules that govern the arrangement of the peptide chain in space; the amino acid sequence thus forms the CONNECTING LINK between the genetic information contained in DNA and the three-dimensional structure of the protein, which conditions its biological function.", cn: "理由 (a)：分析氨基酸序列与蛋白质三维结构之间的关系，可揭示支配肽链空间排布的规则；因此氨基酸序列构成了 DNA 中所含遗传信息与决定其生物学功能的蛋白质三维结构之间的连接环节。" },
    { cz: "b) mechanismus účinku", en: "REASON (b): knowledge of the amino acid sequence belongs among the fundamental data for solving the mechanism of action of a protein, for example the catalytic mechanism of enzymes.", cn: "理由 (b)：了解氨基酸序列属于阐明蛋白质作用机制（例如酶的催化机制）的基础知识之一。" },
    { cz: "c) molekulární pathologie", en: "REASON (c): knowledge of the sequence is part of so-called MOLECULAR PATHOLOGY. A change in the amino acid sequence may cause abnormal function of the protein and serious disease. The example is SICKLE CELL ANAEMIA, caused by the exchange of a single amino acid in haemoglobin: specifically GLUTAMIC ACID at POSITION 6 of the β-CHAIN of haemoglobin is replaced by VALINE.", cn: "理由 (c)：了解序列是所谓分子病理学的一部分。氨基酸序列的改变可导致蛋白质功能异常和严重疾病。教材举的例子是镰状细胞贫血，由血红蛋白中单个氨基酸的替换所致：具体是血红蛋白 β 链第 6 位的谷氨酸被缬氨酸取代。" },
    { cz: "d) evoluční historie", en: "REASON (d): knowledge of the amino acid sequence of a protein reveals much of its evolutionary history; proteins are similar in amino acid sequence ONLY IF they have a common ancestor.", cn: "理由 (d)：了解蛋白质的氨基酸序列可揭示其演化史的许多内容；只有在具有共同祖先的情况下，蛋白质的氨基酸序列才会彼此相似。" }
  ],
  terms: [
    { cz: "primární struktura", en: "primary structure", cn: "一级结构", def_en: "The order of amino acids covalently bound in a peptide chain — the amino acid sequence. (In section 2.2.3 the textbook also includes the placement of disulfide bridges.)", def_cn: "肽链中共价结合的氨基酸的顺序，即氨基酸序列。（在 2.2.3 节中教材还把二硫桥的位置一并纳入。）" },
    { cz: "molekulární pathologie", en: "molecular pathology", cn: "分子病理学", def_en: "The field in which a change of amino acid sequence is linked to abnormal protein function and serious disease.", def_cn: "把氨基酸序列改变与蛋白质功能异常及严重疾病联系起来的领域。" },
    { cz: "srpkovitá anemie", en: "sickle cell anaemia", cn: "镰状细胞贫血", def_en: "Caused by replacement of glutamic acid at position 6 of the haemoglobin β-chain by valine.", def_cn: "由血红蛋白 β 链第 6 位谷氨酸被缬氨酸取代所致。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Sickle cell anaemia results from which precise change?",
      q_cn: "镰状细胞贫血由哪一确切改变造成？",
      options: [
        "Valine at position 6 of the α-chain replaced by glutamic acid",
        "Glutamic acid at position 6 of the β-chain replaced by valine",
        "Lysine at position 6 of the β-chain replaced by glutamine",
        "Deletion of residue 6 in both chains"
      ],
      answer: 1,
      why_en: "The textbook is specific: glutamic acid in position 6 of the β-chain of haemoglobin is replaced by valine. Note the direction — Glu is the normal residue, Val the mutant.",
      why_cn: "教材说得很具体：血红蛋白 β 链第 6 位的谷氨酸被缬氨酸取代。注意方向——谷氨酸是正常残基，缬氨酸是突变残基。"
    },
    {
      type: "mcq",
      q_en: "The textbook says two proteins are similar in amino acid sequence only if:",
      q_cn: "教材说，两种蛋白质的氨基酸序列相似，仅当：",
      options: [
        "They catalyse the same reaction",
        "They occur in the same organism",
        "They have a common ancestor",
        "They have the same molecular mass"
      ],
      answer: 2,
      why_en: "Sequence similarity is treated as evidence of common descent — that is why sequence reveals evolutionary history.",
      why_cn: "序列相似性被视为共同起源的证据——这正是序列能揭示演化史的原因。"
    },
    {
      type: "short",
      q_en: "Why does the textbook call the amino acid sequence the connecting link between DNA and biological function?",
      q_cn: "教材为什么把氨基酸序列称为 DNA 与生物学功能之间的连接环节？",
      accept: ["genetic", "dna", "three-dimensional", "3d", "conform", "function", "遗传", "三维", "功能"],
      answer_en: "Because analysing the relation between sequence and the three-dimensional structure reveals the rules governing the spatial arrangement of the chain. The sequence is encoded by the genetic information in DNA, and it determines the three-dimensional structure, which in turn conditions the protein's biological function — so the sequence stands between the two.",
      answer_cn: "因为分析序列与三维结构之间的关系可揭示支配肽链空间排布的规则。序列由 DNA 中的遗传信息编码，而它又决定三维结构，三维结构进而决定蛋白质的生物学功能——所以序列处于两者之间。"
    }
  ],
  oral: {
    q_en: "What is primary structure and why is knowledge of the amino acid sequence important?",
    q_cn: "什么是一级结构？了解氨基酸序列为什么重要？",
    model_en: "To characterise a peptide chain it is not sufficient to know the kind and number of amino acid residues that can be released by hydrolysis; one must know their order. That order of covalently bound amino acids is the amino acid sequence, designated the primary structure. Knowledge of it is important for four reasons. First, analysing the relation between sequence and three-dimensional structure reveals the rules governing the spatial arrangement of the chain, so the sequence forms the connecting link between the genetic information in DNA and the three-dimensional structure that conditions biological function. Second, it is among the fundamental data needed to solve the mechanism of action of a protein, for instance the catalytic mechanism of an enzyme. Third, it belongs to molecular pathology: a change in sequence may cause abnormal function and serious disease — the classic example being sickle cell anaemia, in which glutamic acid at position six of the beta chain of haemoglobin is replaced by valine. Fourth, the sequence reveals much of the protein's evolutionary history, since proteins are similar in sequence only if they have a common ancestor.",
    checklist: [
      "Defined primary structure as the ORDER of covalently bound residues",
      "Gave the DNA → sequence → 3D structure → function chain",
      "Mentioned mechanism of action / enzyme catalysis",
      "Gave sickle cell anaemia with Glu6→Val in the β-chain, correct direction",
      "Stated sequence similarity implies common ancestry"
    ]
  }
},

{
  id: "2-2-2",
  book: "cz",
  topicKey: "protein-structure-overview",
  chapter: 2,
  section: "2.2.2",
  czTitle: "Principy konformace",
  enTitle: "Principles of conformation",
  cnTitle: "构象原理",
  pages: [27, 28, 29, 30, 31, 32, 33],
  coverage: "partial",
  coverageNote: "IMPORTANT GAP: only pp. 27 and 33 are in the extracted page set. Peptide-bond stereochemistry (p.27) and the hydrophobic effect (p.33) below are verified. pp. 28–32 — which carry the α-helix, β-structure, collagen helix and the other stabilising interactions — were NOT extracted; that block is marked separately below as unverified standard-course content.",
  cnNote: { topic: "六", title: "蛋白质三维结构", status: "mapped" },
  summary: {
    en: "A characteristic property of proteins is their very precisely defined spatial arrangement. A randomly arranged or extended peptide chain mostly shows no biological activity; the function of a protein is entirely dependent on its CONFORMATION, which is essentially the spatial arrangement of the atoms of the peptide chain.",
    cn: "蛋白质的一个特征性性质是其空间排布极其精确地被规定。随机排布或被拉伸的肽链通常不表现出生物活性；蛋白质的功能完全取决于其构象，而构象本质上就是肽链原子的空间排布。"
  },
  points: [
    { cz: "délka vazby C–N", en: "STEREOCHEMISTRY OF THE PEPTIDE BOND (verified, p.27): the length of the C–N bond in the peptide bond is 1.32 Å (0.132 nm). This value lies BETWEEN the lengths of a single C–N bond (1.49 Å) and a double C=N bond (1.27 Å).", cn: "肽键的立体化学（已核对，第 27 页）：肽键中 C–N 键的长度为 1.32 Å（0.132 nm）。该数值介于单键 C–N（1.49 Å）与双键 C=N（1.27 Å）的键长之间。" },
    { cz: "částečně dvojná vazba", en: "The C–N bond in the peptide bond has partially the character of a DOUBLE BOND, as a consequence of partial delocalisation of the π-electrons of the carbonyl and the lone electron pair of the nitrogen — and therefore it CANNOT ROTATE FREELY.", cn: "肽键中的 C–N 键部分具有双键性质，这源于羰基 π 电子与氮的孤对电子的部分离域——因此它不能自由旋转。" },
    { cz: "cis-trans izomery", en: "This fact has as its consequence the existence of CIS-TRANS ISOMERS. In globular proteins the TRANS isomer unambiguously predominates; the CIS form occurs practically only in the NEIGHBOURHOOD OF A PROLINE RESIDUE. Obr. 2.5 gives the dimensions of the peptide bond in the trans configuration and shows the AMIDE PLANE.", cn: "这一事实的结果是存在顺-反异构体。在球状蛋白中反式异构体明确占优势；顺式形式实际上只出现在脯氨酸残基的邻近位置。图 2.5 给出反式构型中肽键的尺寸，并标示酰胺平面。" },
    { cz: "hydrofobní efekt", en: "THE HYDROPHOBIC EFFECT (verified, p.33) is an INTRAMOLECULAR interaction. Its essence is the INCREASE OF ENTROPY as a result of the disruption of the regular arrangement of water molecules around hydrophobic particles. The hydrophobic effect is significant for the stabilisation and formation of protein structure.", cn: "疏水效应（已核对，第 33 页）是一种分子内相互作用。其本质是熵的增加，源于疏水颗粒周围水分子规则排列的破坏。疏水效应对蛋白质结构的稳定与形成具有重要意义。" },
    { cz: "dvojí projev", en: "It manifests itself in two ways: (1) the protein molecule tends to form structures with the SMALLEST POSSIBLE SURFACE; (2) nonpolar chains tend to interact mutually and create a NONPOLAR CORE of the molecule.", cn: "它以两种方式表现出来：(1) 蛋白质分子倾向于形成表面积尽可能小的结构；(2) 非极性链倾向于彼此相互作用，形成分子的非极性核心。" }
  ],
  gapPoints: [
    { en: "α-HELIX: right-handed helix with 3.6 amino acid residues per turn and a pitch of about 0.54 nm (5.4 Å), i.e. a rise of 0.15 nm per residue; stabilised by hydrogen bonds between the C=O of residue n and the N–H of residue n+4, running parallel to the helix axis. Side chains point outwards. Proline is a helix breaker.", cn: "α-螺旋：右手螺旋，每圈 3.6 个氨基酸残基，螺距约 0.54 nm（5.4 Å），即每残基上升 0.15 nm；由第 n 残基的 C=O 与第 n+4 残基的 N–H 之间的氢键稳定，氢键方向与螺旋轴平行。侧链朝外。脯氨酸是螺旋终止子。" },
    { en: "β-STRUCTURE (pleated sheet): extended chains lying side by side, stabilised by hydrogen bonds BETWEEN chains (or between distant parts of one chain), perpendicular to the chain direction; occurs in PARALLEL and ANTIPARALLEL arrangement. Side chains alternate above and below the sheet.", cn: "β-结构（折叠片）：伸展的肽链并排排列，由链间（或同一条链上相距较远部分之间）的氢键稳定，氢键方向与链方向垂直；有平行与反平行两种排列。侧链交替位于片层上下两侧。" },
    { en: "COLLAGEN HELIX: three left-handed polyproline-II-like chains wound into a right-handed superhelix; requires glycine at every third position (Gly-X-Y, X often proline, Y often hydroxyproline); stabilised by interchain hydrogen bonds. Hydroxylation of proline and lysine requires vitamin C — its lack causes scurvy.", cn: "胶原螺旋：三条左手的类聚脯氨酸 II 型链缠绕成右手超螺旋；要求每第三位为甘氨酸（Gly-X-Y，X 常为脯氨酸，Y 常为羟脯氨酸）；由链间氢键稳定。脯氨酸和赖氨酸的羟化需要维生素 C——缺乏则导致坏血病。" },
    { en: "OTHER STABILISING INTERACTIONS: covalent disulfide bridges; ionic (electrostatic) interactions between charged side chains; hydrogen bonds involving side chains; van der Waals forces.", cn: "其他稳定作用力：共价二硫桥；带电侧链之间的离子（静电）相互作用；涉及侧链的氢键；范德华力。" }
  ],
  terms: [
    { cz: "konformace", en: "conformation", cn: "构象", def_en: "The spatial arrangement of the atoms of the peptide chain; protein function is entirely dependent on it.", def_cn: "肽链原子的空间排布；蛋白质功能完全取决于它。" },
    { cz: "amidová rovina", en: "amide plane", cn: "酰胺平面", def_en: "The planar unit of the peptide bond, a consequence of the partial double-bond character of the C–N bond.", def_cn: "肽键的平面单元，是 C–N 键部分双键性质的结果。" },
    { cz: "cis-trans izomerie", en: "cis-trans isomerism", cn: "顺反异构", def_en: "Arises because the peptide C–N bond cannot rotate freely; trans predominates in globular proteins, cis occurs practically only next to proline.", def_cn: "因肽键 C–N 不能自由旋转而产生；球状蛋白中反式占优，顺式实际上只出现在脯氨酸旁。" },
    { cz: "hydrofobní efekt", en: "hydrophobic effect", cn: "疏水效应", def_en: "An intramolecular interaction whose essence is an INCREASE of entropy from disrupting the ordered water around hydrophobic particles.", def_cn: "一种分子内相互作用，其本质是破坏疏水颗粒周围有序水结构所带来的熵增。" },
    { cz: "nepolární jádro (core)", en: "nonpolar core", cn: "非极性核心", def_en: "Formed by mutual interaction of nonpolar side chains; one of the two manifestations of the hydrophobic effect.", def_cn: "由非极性侧链相互作用形成；疏水效应的两种表现之一。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "The C–N bond length in the peptide bond is 1.32 Å. What does this value tell us?",
      q_cn: "肽键中 C–N 键长为 1.32 Å。这个数值说明了什么？",
      options: [
        "It is a pure single bond, so free rotation is possible",
        "It is a pure double bond, so the chain is completely rigid",
        "It lies between single (1.49 Å) and double (1.27 Å), so the bond has partial double-bond character and cannot rotate freely",
        "It is longer than a single bond, indicating unusual weakness"
      ],
      answer: 2,
      why_en: "The intermediate length reflects partial delocalisation of the carbonyl π-electrons and the nitrogen lone pair. The bond therefore cannot rotate freely, which produces the amide plane and cis-trans isomerism.",
      why_cn: "居中的键长反映了羰基 π 电子与氮孤对电子的部分离域。因此该键不能自由旋转，从而产生酰胺平面与顺反异构。"
    },
    {
      type: "mcq",
      q_en: "In globular proteins, the cis form of the peptide bond occurs practically only:",
      q_cn: "在球状蛋白中，肽键的顺式形式实际上只出现在：",
      options: [
        "At the N-terminus",
        "In the neighbourhood of a proline residue",
        "Between two cysteine residues",
        "In the hydrophobic core"
      ],
      answer: 1,
      why_en: "Trans unambiguously predominates in globular proteins; the cis form is practically restricted to the neighbourhood of a proline residue.",
      why_cn: "反式在球状蛋白中明确占优；顺式形式实际上仅限于脯氨酸残基的邻近位置。"
    },
    {
      type: "mcq",
      q_en: "What is the thermodynamic essence of the hydrophobic effect, according to the textbook?",
      q_cn: "按教材，疏水效应的热力学本质是什么？",
      options: [
        "A decrease of enthalpy from new hydrogen bonds between nonpolar chains",
        "An increase of entropy from disrupting the ordered arrangement of water around hydrophobic particles",
        "A decrease of entropy as the chain becomes more ordered",
        "An increase of enthalpy from van der Waals contacts in the core"
      ],
      answer: 1,
      why_en: "This is a classic exam trap. The driving force is ENTROPIC and belongs to the WATER, not to the protein: releasing the ordered water shell around hydrophobic groups increases entropy.",
      why_cn: "这是典型的考试陷阱。驱动力是熵驱动的，而且属于水而非蛋白质：释放疏水基团周围的有序水壳使熵增加。"
    },
    {
      type: "short",
      q_en: "In which two ways does the hydrophobic effect manifest itself in a protein molecule?",
      q_cn: "疏水效应在蛋白质分子中以哪两种方式表现出来？",
      accept: ["surface", "smallest", "core", "nonpolar", "表面", "最小", "核心", "非极性"],
      answer_en: "First, the protein molecule tends to form structures with the smallest possible surface. Second, the nonpolar chains tend to interact mutually and create a nonpolar core of the molecule.",
      answer_cn: "第一，蛋白质分子倾向于形成表面积尽可能小的结构。第二，非极性链倾向于彼此相互作用，形成分子的非极性核心。"
    }
  ],
  oral: {
    q_en: "Explain the stereochemistry of the peptide bond and the role of the hydrophobic effect in protein conformation.",
    q_cn: "解释肽键的立体化学，以及疏水效应在蛋白质构象中的作用。",
    model_en: "A characteristic property of proteins is a very precisely defined spatial arrangement. A randomly arranged or extended chain generally has no biological activity; function is entirely dependent on conformation, that is on the spatial arrangement of the atoms of the peptide chain. The stereochemistry of the peptide bond is decisive here. Crystallographic studies show that the carbon-nitrogen bond in the peptide bond is one point three two ångströms long, which lies between the length of a single carbon-nitrogen bond at one point four nine and a double bond at one point two seven. The peptide C–N bond therefore has partial double-bond character, arising from partial delocalisation of the pi electrons of the carbonyl and the lone pair of the nitrogen, and it cannot rotate freely. This creates the rigid amide plane and gives rise to cis-trans isomerism; in globular proteins the trans isomer clearly predominates, and the cis form occurs practically only next to a proline residue. Among the forces that shape the folded structure, the hydrophobic effect is an intramolecular interaction whose essence is an increase in entropy resulting from disruption of the regular arrangement of water molecules around hydrophobic particles — so the driving force lies in the water, not in the protein. It is significant both for the formation and for the stabilisation of protein structure, and it shows itself in two ways: the molecule tends to adopt structures with the smallest possible surface, and the nonpolar side chains tend to interact with one another and create a nonpolar core.",
    checklist: [
      "Defined conformation and said function depends entirely on it",
      "Gave 1.32 Å and both reference values, 1.49 and 1.27 Å",
      "Explained partial double-bond character via delocalisation",
      "Derived no free rotation → amide plane → cis-trans isomerism",
      "Stated trans predominates, cis only next to proline",
      "Gave the hydrophobic effect as ENTROPY increase in the water",
      "Gave both manifestations: minimal surface and nonpolar core"
    ]
  }
},

{
  id: "2-2-3",
  book: "cz",
  topicKey: "protein-tertiary-quaternary",
  chapter: 2,
  section: "2.2.3",
  czTitle: "Konformace proteinů",
  enTitle: "Conformation of proteins — the levels of structure",
  cnTitle: "蛋白质的构象——结构层次",
  pages: [33, 34],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans.",
  cnNote: { topic: "六", title: "蛋白质三维结构", status: "mapped" },
  summary: {
    en: "In describing the three-dimensional arrangement of proteins FOUR LEVELS are distinguished. Later studies of conformation, function and evolution proved the importance of two further levels of organisation: supersecondary structure and domains.",
    cn: "在描述蛋白质的三维排布时区分四个层次。后来对构象、功能与演化的研究证明还有两个组织层次同样重要：超二级结构与结构域。"
  },
  points: [
    { cz: "primární struktura", en: "PRIMARY STRUCTURE — is given by the sequence of amino acids in the peptide chain AND by the PLACEMENT OF DISULFIDE BRIDGES. (Note this textbook explicitly includes the disulfide bridges at the primary level.)", cn: "一级结构——由肽链中氨基酸的序列以及二硫桥的位置共同决定。（注意本教材明确把二硫桥归入一级结构层次。）" },
    { cz: "sekundární struktura", en: "SECONDARY STRUCTURE — relates to the spatial arrangement of amino acid residues that are CLOSE TO EACH OTHER IN THE LINEAR SEQUENCE. Some arrangements repeat regularly and are the basis of periodic structures; the α-HELIX, β-STRUCTURE and COLLAGEN HELIX are elements of secondary structure.", cn: "二级结构——涉及在线性序列中彼此靠近的氨基酸残基的空间排布。某些排布规则重复，构成周期性结构的基础；α-螺旋、β-结构和胶原螺旋是二级结构的要素。" },
    { cz: "terciární struktura", en: "TERTIARY STRUCTURE — relates to the spatial arrangement of amino acid residues located FAR FROM EACH OTHER IN THE LINEAR SEQUENCE. The boundary between secondary and tertiary structure is in some cases hard to define.", cn: "三级结构——涉及在线性序列中彼此相距较远的氨基酸残基的空间排布。二级与三级结构之间的界限在某些情况下难以界定。" },
    { cz: "kvarterní struktura", en: "QUATERNARY STRUCTURE — spoken of in the case of proteins consisting of MORE THAN ONE PEPTIDE CHAIN (of subunits). It relates to the spatial arrangement of the subunits and the character of their connection (contact). Proteins may consist of the SAME or of DIFFERENT subunits.", cn: "四级结构——用于由一条以上肽链（亚基）构成的蛋白质。它涉及亚基的空间排布以及它们连接（接触）的性质。蛋白质可以由相同的亚基构成，也可以由不同的亚基构成。" },
    { cz: "kontakt podjednotek", en: "The sites of connection or contact of subunits are often IMPORTANT FOR THE BIOLOGICAL ACTIVITY of the protein; for example, in ANTIBODIES the binding site for the antigen is formed by parts of peptide chains belonging to BOTH types of subunits (H and L).", cn: "亚基的连接或接触部位常常对蛋白质的生物活性至关重要；例如在抗体中，抗原结合位点由分属两类亚基（H 链与 L 链）的肽链部分共同构成。" },
    { cz: "supersekundární struktura", en: "SUPERSECONDARY STRUCTURE — the concept relates to 'clusters' of individual sections of secondary structures. In many proteins a grouping of two sections of β-structure separated by a section of peptide chain in α-helical arrangement was found; this motif is called βαβ. Obr. 2.15 shows: a — βαβ unit; b — αα unit; c — β-MEANDER (β-structures marked by arrows, α-helix by a spiral).", cn: "超二级结构——该概念指二级结构各个片段的「簇」。在许多蛋白质中发现了由两段 β-结构、中间隔以一段呈 α-螺旋排布的肽链所组成的组合；这一基序称为 βαβ。图 2.15 显示：a — βαβ 单元；b — αα 单元；c — β-曲折（β-结构以箭头表示，α-螺旋以螺旋线表示）。" },
    { cz: "domény", en: "DOMAINS — in some peptide chains part of the chain is arranged into two or more COMPACT GLOBULAR REGIONS connected by a FLEXIBLE SEGMENT of the chain. These compact globular regions are called domains, and their size ranges from 100 TO 400 AMINO ACID RESIDUES.", cn: "结构域——在某些肽链中，部分肽链排布成两个或更多紧密的球状区域，由链的柔性片段相连。这些紧密球状区域称为结构域，其大小在 100 至 400 个氨基酸残基之间。" }
  ],
  terms: [
    { cz: "sekundární struktura", en: "secondary structure", cn: "二级结构", def_en: "Spatial arrangement of residues CLOSE TOGETHER in the linear sequence; α-helix, β-structure, collagen helix.", def_cn: "线性序列中彼此靠近的残基的空间排布；α-螺旋、β-结构、胶原螺旋。" },
    { cz: "terciární struktura", en: "tertiary structure", cn: "三级结构", def_en: "Spatial arrangement of residues FAR APART in the linear sequence.", def_cn: "线性序列中彼此相距较远的残基的空间排布。" },
    { cz: "kvarterní struktura", en: "quaternary structure", cn: "四级结构", def_en: "Spatial arrangement of subunits and the character of their contact, in proteins of more than one chain.", def_cn: "由一条以上肽链构成的蛋白质中，亚基的空间排布及其接触的性质。" },
    { cz: "supersekundární struktura", en: "supersecondary structure", cn: "超二级结构", def_en: "Clusters of sections of secondary structure, e.g. the βαβ motif, αα unit, β-meander.", def_cn: "二级结构片段的簇，例如 βαβ 基序、αα 单元、β-曲折。" },
    { cz: "doména", en: "domain", cn: "结构域", def_en: "A compact globular region of a chain connected to others by a flexible segment; 100–400 amino acid residues.", def_cn: "肽链中由柔性片段与其他区域相连的紧密球状区域；100–400 个氨基酸残基。" },
    { cz: "βαβ motiv", en: "βαβ motif", cn: "βαβ 基序", def_en: "Two β-sections separated by an α-helical section; the commonest supersecondary motif cited.", def_cn: "两段 β-结构中间隔以一段 α-螺旋；教材举出的最常见超二级基序。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "According to THIS textbook, primary structure is given by:",
      q_cn: "按本教材，一级结构由什么决定？",
      options: [
        "The amino acid sequence only",
        "The amino acid sequence and the placement of disulfide bridges",
        "The sequence plus all hydrogen bonds",
        "The sequence plus the arrangement of subunits"
      ],
      answer: 1,
      why_en: "This textbook explicitly includes the placement of disulfide bridges in the primary structure. Many other textbooks leave them out, so answer according to THIS book in the exam.",
      why_cn: "本教材明确把二硫桥的位置纳入一级结构。许多其他教材不包括它，因此考试时请按本书作答。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes secondary from tertiary structure?",
      q_cn: "二级结构与三级结构的区别是什么？",
      options: [
        "Secondary is covalent, tertiary is non-covalent",
        "Secondary concerns residues close together in the linear sequence, tertiary residues far apart",
        "Secondary applies to one chain, tertiary to several chains",
        "Secondary is periodic, tertiary is always random coil"
      ],
      answer: 1,
      why_en: "The criterion is distance ALONG THE SEQUENCE: secondary structure is the spatial arrangement of residues close together in the linear sequence, tertiary of residues far apart. The textbook adds that this boundary is sometimes hard to define.",
      why_cn: "判据是沿序列的距离：二级结构是线性序列中彼此靠近的残基的空间排布，三级结构则是相距较远的残基的排布。教材还补充说这一界限有时难以界定。"
    },
    {
      type: "mcq",
      q_en: "What is the size range of a domain?",
      q_cn: "结构域的大小范围是多少？",
      options: ["10–50 residues", "50–100 residues", "100–400 residues", "400–1000 residues"],
      answer: 2,
      why_en: "Domains are compact globular regions connected by a flexible segment of the chain, ranging from 100 to 400 amino acid residues.",
      why_cn: "结构域是由链的柔性片段相连的紧密球状区域，大小为 100 至 400 个氨基酸残基。"
    },
    {
      type: "short",
      q_en: "Give the textbook's example showing that subunit contact sites matter for biological activity.",
      q_cn: "举出教材用来说明亚基接触部位对生物活性重要的例子。",
      accept: ["antibod", "antigen", "h", "l", "subunit", "抗体", "抗原", "亚基"],
      answer_en: "In antibodies, the binding site for the antigen is formed by parts of peptide chains that belong to both types of subunits, the heavy (H) and the light (L) chains. So the activity depends on the contact between subunits, not on either subunit alone.",
      answer_cn: "在抗体中，抗原结合位点由分属两类亚基（重链 H 与轻链 L）的肽链部分共同构成。因此其活性取决于亚基之间的接触，而不取决于任何单一亚基。"
    },
    {
      type: "short",
      q_en: "Name the supersecondary structures shown in Obr. 2.15.",
      q_cn: "说出图 2.15 中所示的超二级结构。",
      accept: ["βαβ", "bab", "αα", "aa", "meander", "曲折"],
      answer_en: "The βαβ unit — two sections of β-structure separated by a section in α-helical arrangement; the αα unit; and the β-meander. In the figure β-structures are marked by arrows and the α-helix by a spiral.",
      answer_cn: "βαβ 单元——两段 β-结构中间隔以一段 α-螺旋排布；αα 单元；以及 β-曲折。图中 β-结构用箭头表示，α-螺旋用螺旋线表示。"
    }
  ],
  oral: {
    q_en: "Describe the levels of protein structure.",
    q_cn: "描述蛋白质的结构层次。",
    model_en: "In describing the three-dimensional arrangement of proteins four levels are distinguished. The primary structure is given by the sequence of amino acids in the peptide chain and by the placement of the disulfide bridges. The secondary structure relates to the spatial arrangement of amino acid residues that lie close to one another in the linear sequence; some of these arrangements repeat regularly and form the basis of periodic structures — the alpha helix, the beta structure and the collagen helix are elements of secondary structure. The tertiary structure relates to the spatial arrangement of residues that lie far from each other in the linear sequence, and the boundary between secondary and tertiary structure is in some cases hard to define. We speak of quaternary structure in the case of proteins built from more than one peptide chain, that is from subunits; it concerns the spatial arrangement of those subunits and the character of their contact. The subunits may be identical or different, and the contact sites are often important for biological activity — in antibodies, for instance, the antigen-binding site is formed by parts of chains belonging to both the heavy and the light subunits. Later studies proved the importance of two further levels. Supersecondary structure refers to clusters of individual sections of secondary structure; a common example is two beta sections separated by an alpha-helical section, the beta-alpha-beta motif, and others include the alpha-alpha unit and the beta meander. Finally, in some chains part of the chain is arranged into two or more compact globular regions joined by a flexible segment; these are domains, and they range from one hundred to four hundred amino acid residues.",
    checklist: [
      "Included disulfide bridge placement in PRIMARY structure",
      "Defined secondary by proximity IN THE SEQUENCE, and named its three elements",
      "Defined tertiary by distance in the sequence and noted the fuzzy boundary",
      "Defined quaternary and noted subunits may be same or different",
      "Gave the antibody H/L antigen-binding site example",
      "Added supersecondary structure with βαβ, αα, β-meander",
      "Defined domains with the 100–400 residue range"
    ]
  }
},

{
  id: "2-2-4",
  book: "cz",
  topicKey: "protein-tertiary-quaternary",
  chapter: 2,
  section: "2.2.4",
  czTitle: "Typy stavby proteinové molekuly",
  enTitle: "Types of construction of the protein molecule",
  cnTitle: "蛋白质分子的构造类型",
  pages: [34, 35],
  coverage: "partial",
  coverageNote: "p. 34 verified against the scan; p. 35 (continuation of the globular-protein section) is not in the extracted page set.",
  cnNote: { topic: "六", title: "蛋白质三维结构", status: "mapped" },
  summary: {
    en: "According to the overall arrangement of the peptide chains, two main types of protein can be distinguished: FIBRILLAR (fibrous) and GLOBULAR. In fibrillar proteins the chains are more or less extended and join mutually by cross-links into macroscopic fibres; in globular proteins the basic chain is folded into a globule.",
    cn: "按肽链的总体排布，可区分两类主要蛋白质：纤维状（丝状）与球状。在纤维状蛋白中，肽链或多或少被拉伸，通过横向交联相互连接成宏观纤维；在球状蛋白中，基本肽链被折叠成球体。"
  },
  points: [
    { cz: "fibrilární proteiny", en: "FIBRILLAR proteins: the peptide chains are more or less extended and join mutually by cross-links into macroscopic fibres (fibrils). This type is significant especially for the FORMATION OF BIOLOGICAL STRUCTURES and their MECHANICAL FUNCTION. They form the basis of surface, connective and supporting tissues of animals, and also of the internal structure of cells (the CYTOSKELETON).", cn: "纤维状蛋白：肽链或多或少被拉伸，通过横向交联相互连接成宏观纤维（原纤维）。这一类型主要对生物结构的形成及其机械功能有意义。它们构成动物体表、结缔和支持组织的基础，也构成细胞内部结构（细胞骨架）的基础。" },
    { cz: "globulární proteiny", en: "GLOBULAR proteins: the basic peptide chain is folded into a ball (globule). Within the globule, sections of α- or β-type ALTERNATE with sections WITHOUT REGULAR STRUCTURE (so-called RANDOM COIL). Proteins of this type carry out MOST BIOLOGICAL FUNCTIONS.", cn: "球状蛋白：基本肽链被折叠成球（球体）。在球体内部，α 型或 β 型片段与没有规则结构的片段（所谓无规卷曲）交替出现。这一类型的蛋白质承担大多数生物学功能。" },
    { cz: "přeměna globulární → fibrilární", en: "A globular protein CAN BE CONVERTED into a fibrillar protein forming a mechanically firm structure; for example in the formation of FIBRIN from globular soluble FIBRINOGEN in the process of BLOOD CLOTTING.", cn: "球状蛋白可以转变为纤维状蛋白，形成机械上坚固的结构；例如在血液凝固过程中，由可溶的球状纤维蛋白原生成纤维蛋白。" },
    { cz: "keratin", en: "KERATIN is the basic protein of the body surface of vertebrates (skin, hair, fur, feathers, scales). The basic secondary structure of mammalian keratin is the α-HELIX. Two pairs of parallel-running helices twist into a LEFT-HANDED FOUR-STRANDED 'CABLE' — the PROTOFIBRIL.", cn: "角蛋白是脊椎动物体表（皮肤、毛发、兽毛、羽毛、鳞片）的基本蛋白质。哺乳动物角蛋白的基本二级结构是 α-螺旋。两对平行走向的螺旋缠绕成左手四股「缆索」——原原纤维。" },
    { cz: "natažení vlasu", en: "Wetting and heating a macroscopic fibre (a hair) RELEASES THE HYDROGEN BONDS of the α-helix, so the hair can be stretched to DOUBLE its length. In this form the peptide chains can form a β-PARALLEL structure and fix it.", cn: "把宏观纤维（头发）润湿并加热会释放 α-螺旋的氢键，使头发可被拉伸至两倍长度。在这种形态下肽链可形成 β-平行结构并将其固定。" },
    { cz: "fibroin", en: "FIBROIN is the protein of silk fibre and is similar to keratin. A HIGH CONTENT OF RESIDUES OF SMALL AMINO ACIDS (glycine, alanine, serine) allows a regular spatial arrangement of planar formations having β-ANTIPARALLEL secondary structure.", cn: "丝心蛋白是蚕丝纤维的蛋白质，与角蛋白相似。小分子氨基酸残基（甘氨酸、丙氨酸、丝氨酸）含量高，使得具有 β-反平行二级结构的平面构造能够规则地空间排布。" },
    { cz: "kolagen", en: "COLLAGEN is the third representative of the fibrillar proteins; its spatial arrangement was described in ch. 2.2.2.", cn: "胶原是纤维状蛋白的第三个代表；其空间排布已在第 2.2.2 章中描述。" },
    { cz: "roztok globulárních proteinů", en: "Unlike fibrillar proteins, which are aggregates of many parallel-oriented molecules, GLOBULAR proteins exist in dilute solution as INDIVIDUAL, MUTUALLY INDEPENDENT MOLECULES. The individual sections of the chain are held in position by DISULFIDE BONDS, IONIC INTERACTIONS, HYDROGEN BONDS, VAN DER WAALS FORCES and the HYDROPHOBIC EFFECT.", cn: "与作为许多平行取向分子聚集体的纤维状蛋白不同，球状蛋白在稀溶液中以单个、彼此独立的分子形式存在。链的各个片段依靠二硫键、离子相互作用、氢键、范德华力和疏水效应保持在各自位置上。" },
    { cz: "β-otáčka a meandr", en: "Two flat, planar parts of the peptide chain connected by a β-TURN can easily create an ANTIPARALLEL structure. If a LONGER chain lies between the two flat parts, a PARALLEL β-structure can arise. Combining both principles gives a structure of the MEANDER type (Obr. 2.15).", cn: "由 β-转角连接的两段平面状肽链部分可以很容易地形成反平行结构。如果两段平面部分之间夹着较长的链，则可产生平行 β-结构。把两种原理结合起来就得到曲折（meander）型结构（图 2.15）。" },
    { cz: "podíl α-helixu", en: "The proportion of α-helical structures in the overall structure differs from protein to protein. In some, such as MYOGLOBIN or HAEMOGLOBIN, the α-helix is the main structural motif. On the other hand some proteins, such as CHYMOTRYPSIN, contain essentially no α-helical structures.", cn: "α-螺旋结构在整体结构中所占比例因蛋白质而异。在某些蛋白质中，例如肌红蛋白或血红蛋白，α-螺旋是主要结构基序。另一方面，某些蛋白质如胰凝乳蛋白酶基本上不含 α-螺旋结构。" }
  ],
  terms: [
    { cz: "fibrilární proteiny", en: "fibrillar (fibrous) proteins", cn: "纤维状蛋白", def_en: "Extended chains cross-linked into macroscopic fibrils; structural and mechanical function.", def_cn: "被拉伸的肽链交联成宏观原纤维；具有结构与机械功能。" },
    { cz: "globulární proteiny", en: "globular proteins", cn: "球状蛋白", def_en: "Chain folded into a globule with alternating regular and random-coil sections; carry out most biological functions.", def_cn: "肽链折叠成球体，规则片段与无规卷曲片段交替；承担大多数生物学功能。" },
    { cz: "náhodné klubko", en: "random coil", cn: "无规卷曲", def_en: "Sections without regular structure, alternating with α- and β-type sections inside a globule.", def_cn: "没有规则结构的片段，在球体内与 α 型和 β 型片段交替出现。" },
    { cz: "protofibrila", en: "protofibril", cn: "原原纤维", def_en: "The left-handed four-stranded 'cable' formed by two pairs of parallel α-helices in keratin.", def_cn: "角蛋白中由两对平行 α-螺旋形成的左手四股「缆索」。" },
    { cz: "keratin", en: "keratin", cn: "角蛋白", def_en: "Basic protein of the vertebrate body surface; mammalian keratin is α-helical.", def_cn: "脊椎动物体表的基本蛋白质；哺乳动物角蛋白为 α-螺旋型。" },
    { cz: "fibroin", en: "fibroin", cn: "丝心蛋白", def_en: "Silk fibre protein, β-antiparallel, rich in glycine, alanine and serine.", def_cn: "蚕丝纤维蛋白，β-反平行结构，富含甘氨酸、丙氨酸和丝氨酸。" },
    { cz: "fibrinogen → fibrin", en: "fibrinogen → fibrin", cn: "纤维蛋白原 → 纤维蛋白", def_en: "The textbook's example of a globular protein converting into a fibrillar one, in blood clotting.", def_cn: "教材所举球状蛋白转变为纤维状蛋白的例子，发生于血液凝固过程。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "Which protein does the textbook give as containing essentially NO α-helical structure?",
      q_cn: "教材举出哪种蛋白质基本上不含 α-螺旋结构？",
      options: ["Myoglobin", "Haemoglobin", "Chymotrypsin", "Keratin"],
      answer: 2,
      why_en: "Myoglobin and haemoglobin are the examples where α-helix is the MAIN structural motif; chymotrypsin is the counter-example containing essentially none.",
      why_cn: "肌红蛋白和血红蛋白是 α-螺旋作为主要结构基序的例子；胰凝乳蛋白酶则是基本不含 α-螺旋的反例。"
    },
    {
      type: "mcq",
      q_en: "Why can a wetted, heated hair be stretched to double its length?",
      q_cn: "为什么润湿并加热后的头发可以被拉伸至两倍长度？",
      options: [
        "The disulfide bridges are reduced",
        "The hydrogen bonds of the α-helix are released, and the chains can then form a β-parallel structure",
        "The peptide bonds hydrolyse",
        "The protofibril unwinds into single amino acids"
      ],
      answer: 1,
      why_en: "Wetting and heating releases the hydrogen bonds holding the α-helix. In the stretched form the peptide chains can form and fix a β-parallel structure — this is the α → β transition of keratin.",
      why_cn: "润湿加热会释放维持 α-螺旋的氢键。在被拉伸的形态下，肽链可形成并固定 β-平行结构——这就是角蛋白的 α → β 转变。"
    },
    {
      type: "mcq",
      q_en: "Fibroin's regular β-antiparallel arrangement is made possible by:",
      q_cn: "丝心蛋白规则的 β-反平行排布之所以可能，是因为：",
      options: [
        "A high content of aromatic amino acids",
        "A high content of small amino acid residues — glycine, alanine, serine",
        "Extensive disulfide cross-linking",
        "A high proline content"
      ],
      answer: 1,
      why_en: "Small side chains (Gly, Ala, Ser) let the planar sheets stack regularly. Contrast keratin, which is α-helical, and collagen, which needs glycine at every third position for a different reason.",
      why_cn: "小侧链（甘氨酸、丙氨酸、丝氨酸）使平面片层能够规则堆叠。可与角蛋白（α-螺旋型）以及胶原（因另一种原因需要每第三位为甘氨酸）作对比。"
    },
    {
      type: "short",
      q_en: "Which forces hold the sections of a globular protein chain in position?",
      q_cn: "哪些作用力使球状蛋白链的各片段保持在位？",
      accept: ["disulfide", "ionic", "hydrogen", "van der waals", "hydrophobic", "二硫", "离子", "氢键", "范德华", "疏水"],
      answer_en: "Disulfide bonds, ionic interactions, hydrogen bonds, van der Waals forces and the hydrophobic effect.",
      answer_cn: "二硫键、离子相互作用、氢键、范德华力和疏水效应。"
    }
  ],
  oral: {
    q_en: "Compare fibrillar and globular proteins, with examples.",
    q_cn: "比较纤维状蛋白与球状蛋白，并举例说明。",
    model_en: "According to the overall arrangement of the peptide chains two main types of protein are distinguished. In fibrillar proteins the chains are more or less extended and join to one another by cross-links into macroscopic fibres or fibrils; this type matters above all for the formation of biological structures and their mechanical function, forming the surface, connective and supporting tissues of animals and also the cytoskeleton. In globular proteins the chain is folded into a globule, within which sections of alpha or beta type alternate with sections having no regular structure, the random coil; proteins of this type carry out most biological functions. A globular protein can be converted into a fibrillar one — for instance fibrin arises from the globular, soluble fibrinogen during blood clotting. Among the fibrillar proteins, keratin is the basic protein of the vertebrate body surface, and mammalian keratin is built on the alpha helix: two pairs of parallel helices twist into a left-handed four-stranded cable, the protofibril. Wetting and heating a hair releases the hydrogen bonds of the helix so that it can be stretched to double its length, and in this form the chains can form and fix a beta-parallel structure. Fibroin, the silk protein, is similar but its high content of small residues — glycine, alanine and serine — permits a regular arrangement of planar formations with beta-antiparallel structure. Collagen is the third representative. Globular proteins, by contrast, exist in dilute solution as individual independent molecules rather than parallel aggregates, and their chain sections are held in place by disulfide bonds, ionic interactions, hydrogen bonds, van der Waals forces and the hydrophobic effect. The proportion of alpha helix varies widely: in myoglobin and haemoglobin it is the main motif, whereas chymotrypsin contains essentially none.",
    checklist: [
      "Defined both types by chain arrangement and by function",
      "Gave fibrinogen → fibrin as the globular-to-fibrillar conversion",
      "Described keratin: α-helix, protofibril, left-handed four-stranded cable",
      "Explained the stretched-hair α → β transition",
      "Gave fibroin with Gly/Ala/Ser and β-antiparallel",
      "Listed the five stabilising forces in globular proteins",
      "Contrasted myoglobin/haemoglobin with chymotrypsin for α-helix content"
    ]
  }
},

{
  id: "2-2-5",
  book: "cz",
  topicKey: "peptides-and-proteins",
  chapter: 2,
  section: "2.2.5",
  czTitle: "Jednoduché a složené proteiny",
  enTitle: "Simple and conjugated proteins",
  cnTitle: "简单蛋白质与结合蛋白质",
  pages: [36, 37],
  coverage: "full",
  coverageNote: "Both pages verified against the extracted scans. The phosvitin figure was re-read from the p.36 image and confirmed as 10² phosphate residues per chain, an exponent the raw OCR rendered as an unreadable '10*'.",
  cnNote: { topic: "七", title: "结构与功能关系", status: "partial" },
  summary: {
    en: "Proteins are sometimes divided into SIMPLE and CONJUGATED: simple proteins yield only amino acids on hydrolysis, i.e. they contain only the peptide component; conjugated proteins contain further components besides amino acids. According to current ideas, non-peptide components are a regular part of the vast majority of proteins — so-called simple proteins are rather the EXCEPTION.",
    cn: "蛋白质有时被分为简单蛋白质与结合蛋白质：简单蛋白质水解后只产生氨基酸，即只含肽组分；结合蛋白质除氨基酸外还含有其他组分。按当前的看法，非肽组分是绝大多数蛋白质的常规组成部分——所谓简单蛋白质反倒是例外。"
  },
  points: [
    { cz: "kovalentní i nekovalentní vazba", en: "Besides proteins containing a covalently bound non-amino-acid component, there exist proteins that have this component bound by NON-COVALENT interactions. The quantitative ratio between the peptide and non-peptide component can differ considerably.", cn: "除含共价结合的非氨基酸组分的蛋白质外，还存在通过非共价相互作用结合该组分的蛋白质。肽组分与非肽组分之间的数量比可以相差很大。" },
    { cz: "glykoproteiny — N-glykosidicky", en: "GLYCOPROTEINS contain, besides the peptide part, a saccharide part covalently bound to the peptide chain. (a) Proteins with shorter, very often BRANCHED oligosaccharide chains — the saccharide part is bound either 1. N-GLYCOSIDICALLY, via the AMIDE NITROGEN OF ASPARAGINE; typical representatives are the glycoproteins of BLOOD SERUM;", cn: "糖蛋白除肽部分外还含有共价结合于肽链的糖部分。(a) 带较短、常为分支寡糖链的蛋白质——糖部分的结合方式为：1. N-糖苷键结合，经由天冬酰胺的酰胺氮；典型代表是血清糖蛋白；" },
    { cz: "glykoproteiny — O-glykosidicky", en: "…or 2. O-GLYCOSIDICALLY, via the HYDROXYL GROUP OF SERINE OR THREONINE; examples are the glycoproteins of BLOOD GROUP SUBSTANCES or the glycoproteins of MUCINS (mucus).", cn: "……或 2. O-糖苷键结合，经由丝氨酸或苏氨酸的羟基；例子有血型物质糖蛋白或黏蛋白（黏液）糖蛋白。" },
    { cz: "proteoglykany", en: "(b) PROTEOGLYCANS contain molecules of GLYCOSAMINOGLYCANS covalently bound to the protein molecule; proteoglycans are components of CONNECTIVE TISSUE.", cn: "(b) 蛋白聚糖含有共价结合于蛋白质分子上的糖胺聚糖分子；蛋白聚糖是结缔组织的组分。" },
    { cz: "kolagen jako glykoprotein", en: "(c) COLLAGEN contains D-GALACTOSE, or a disaccharide containing D-galactose and D-glucose, bound predominantly to HYDROXYPROLINE or HYDROXYLYSINE.", cn: "(c) 胶原含有 D-半乳糖，或含 D-半乳糖与 D-葡萄糖的二糖，主要结合于羟脯氨酸或羟赖氨酸上。" },
    { cz: "fosfoproteiny", en: "PHOSPHOPROTEINS: in eukaryotes the phosphate group is bound to the peptide chain covalently, most often by an ESTER BOND to the hydroxyl group of SERINE, THREONINE or TYROSINE. Phosphoproteins and the phosphorylation of proteins by PROTEIN KINASES play a very important role in the REGULATION OF THE CELL CYCLE and in CELL SIGNALLING.", cn: "磷蛋白：在真核生物中，磷酸基以共价方式结合于肽链，最常见的是通过酯键连接于丝氨酸、苏氨酸或酪氨酸的羟基。磷蛋白以及蛋白激酶对蛋白质的磷酸化，在细胞周期调控和细胞信号转导中起着非常重要的作用。" },
    { cz: "depotní funkce fosfoproteinů", en: "Phosphoproteins also have a DEPOT function, i.e. they make it possible to store enough phosphate for the rapidly developing embryo and young organism. A representative is PHOSVITIN, the depot protein of egg yolk, containing about 100 phosphate residues per peptide chain (Mr = 35 000). Milk contains the soluble phosphoprotein CASEIN.", cn: "磷蛋白还具有储存功能，即能为迅速发育的胚胎和幼体储备足够的磷酸。代表是卵黄的储存蛋白卵黄高磷蛋白，每条肽链含约 100 个磷酸残基（Mr = 35 000）。乳中含有可溶性磷蛋白酪蛋白。" },
    { cz: "metaloproteiny", en: "METALLOPROTEINS: the CARBOXYL, IMIDAZOLE and SULFHYDRYL groups of proteins generally have the ability to form complexes, especially with HEAVY METALS. Metalloproteins include depot proteins with a large metal content: FERRITIN (Mr = 46 000) can contain ferric ions up to 30 PER CENT OF ITS MASS; Fe³⁺ ions are released when needed.", cn: "金属蛋白：蛋白质的羧基、咪唑基和巯基一般具有形成配合物的能力，尤其是与重金属。金属蛋白包括金属含量大的储存蛋白：铁蛋白（Mr = 46 000）所含铁离子可达其质量的 30%；需要时释放 Fe³⁺ 离子。" },
    { cz: "transferrin, ceruloplasmin", en: "TRANSFERRIN has a transport function for iron ions; it is a BLOOD PLASMA protein that binds Fe³⁺ ions with high affinity. CERULOPLASMIN in blood serum serves as the transport protein for COPPER ions.", cn: "转铁蛋白对铁离子具有转运功能；它是一种血浆蛋白，以高亲和力结合 Fe³⁺ 离子。血清中的铜蓝蛋白充当铜离子的转运蛋白。" },
    { cz: "FeS proteiny", en: "In some proteins Fe ions are bound in complex with –SH groups and SULFIDE IONS; these are designated FeS PROTEINS. Such complexes were demonstrated in bacterial and plant FERREDOXINS and are significant in biological OXIDATION-REDUCTION reactions.", cn: "在某些蛋白质中，铁离子与 –SH 基和硫离子形成配合物；这类蛋白称为铁硫蛋白。这类配合物已在细菌和植物铁氧还蛋白中得到证实，在生物氧化还原反应中具有重要意义。" },
    { cz: "kovy nutné pro katalýzu", en: "Some metalloproteins contain very small quantities of a heavy metal ion whose presence is necessary for the biological or CATALYTIC function of the protein: CARBOXYPEPTIDASE contains Zn²⁺, PYRUVATE DECARBOXYLASE Mn²⁺ ions, and XANTHINE OXIDASE a molybdenum ion.", cn: "某些金属蛋白只含极少量重金属离子，而这些离子的存在是蛋白质发挥生物学或催化功能所必需的：羧肽酶含 Zn²⁺，丙酮酸脱羧酶含 Mn²⁺ 离子，黄嘌呤氧化酶含钼离子。" },
    { cz: "hemoproteiny", en: "HEMOPROTEINS: besides complexes of metal ions with functional groups of amino acids — which fall apart when the peptide chain is cleaved — proteins contain Fe ions bound in complex WITH PORPHYRIN; this complex is then called HEME. Hemoproteins include the OXYGEN CARRIERS, the CYTOCHROMES and the HEME ENZYMES.", cn: "血红素蛋白：除金属离子与氨基酸官能团形成的配合物（这类配合物在肽链断裂时即解体）之外，蛋白质中还存在与卟啉形成配合物的铁离子；该配合物即称为血红素。血红素蛋白包括氧载体、细胞色素和血红素酶。" }
  ],
  terms: [
    { cz: "jednoduchý protein", en: "simple protein", cn: "简单蛋白质", def_en: "Yields only amino acids on hydrolysis; contains only the peptide component. Now considered rather the exception.", def_cn: "水解后只产生氨基酸；只含肽组分。现在被认为反倒是例外。" },
    { cz: "složený protein", en: "conjugated protein", cn: "结合蛋白质", def_en: "Contains, besides amino acids, further components, bound covalently or non-covalently.", def_cn: "除氨基酸外还含有其他组分，以共价或非共价方式结合。" },
    { cz: "N-glykosidová vazba", en: "N-glycosidic linkage", cn: "N-糖苷键", def_en: "Saccharide attached via the amide nitrogen of asparagine; typical of blood serum glycoproteins.", def_cn: "糖经由天冬酰胺的酰胺氮连接；血清糖蛋白的典型方式。" },
    { cz: "O-glykosidová vazba", en: "O-glycosidic linkage", cn: "O-糖苷键", def_en: "Saccharide attached via the hydroxyl of serine or threonine; blood group substances, mucins.", def_cn: "糖经由丝氨酸或苏氨酸的羟基连接；血型物质、黏蛋白。" },
    { cz: "proteoglykany", en: "proteoglycans", cn: "蛋白聚糖", def_en: "Glycosaminoglycans covalently bound to protein; components of connective tissue.", def_cn: "共价结合于蛋白质的糖胺聚糖；结缔组织的组分。" },
    { cz: "fosvitin", en: "phosvitin", cn: "卵黄高磷蛋白", def_en: "Depot phosphoprotein of egg yolk, Mr = 35 000, about 100 phosphate residues per chain.", def_cn: "卵黄的储存磷蛋白，Mr = 35 000，每条链约含 100 个磷酸残基。" },
    { cz: "ferritin", en: "ferritin", cn: "铁蛋白", def_en: "Iron depot protein, Mr = 46 000, up to 30 % of its mass as ferric ions.", def_cn: "铁的储存蛋白，Mr = 46 000，铁离子可达其质量的 30%。" },
    { cz: "transferrin", en: "transferrin", cn: "转铁蛋白", def_en: "Blood plasma protein transporting Fe³⁺ with high affinity.", def_cn: "以高亲和力转运 Fe³⁺ 的血浆蛋白。" },
    { cz: "ceruloplasmin", en: "ceruloplasmin", cn: "铜蓝蛋白", def_en: "Blood serum transport protein for copper ions.", def_cn: "血清中转运铜离子的蛋白质。" },
    { cz: "FeS proteiny", en: "FeS proteins", cn: "铁硫蛋白", def_en: "Fe bound with –SH groups and sulfide ions; found in ferredoxins, important in redox reactions.", def_cn: "铁与 –SH 基和硫离子结合；见于铁氧还蛋白，在氧化还原反应中重要。" },
    { cz: "hem", en: "heme", cn: "血红素", def_en: "The complex of an Fe ion with porphyrin; the prosthetic group of hemoproteins.", def_cn: "铁离子与卟啉形成的配合物；血红素蛋白的辅基。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "N-glycosidic attachment of a saccharide in a glycoprotein occurs via:",
      q_cn: "糖蛋白中糖的 N-糖苷键连接经由：",
      options: [
        "The hydroxyl group of serine",
        "The hydroxyl group of threonine",
        "The amide nitrogen of asparagine",
        "The imidazole of histidine"
      ],
      answer: 2,
      why_en: "N-glycosidic = via the amide nitrogen of asparagine (typical of blood serum glycoproteins). O-glycosidic = via the hydroxyl of serine or threonine (blood group substances, mucins).",
      why_cn: "N-糖苷键 = 经由天冬酰胺的酰胺氮（血清糖蛋白的典型方式）。O-糖苷键 = 经由丝氨酸或苏氨酸的羟基（血型物质、黏蛋白）。"
    },
    {
      type: "mcq",
      q_en: "Which metal ion does carboxypeptidase contain?",
      q_cn: "羧肽酶含有哪种金属离子？",
      options: ["Mn²⁺", "Zn²⁺", "Mo", "Cu²⁺"],
      answer: 1,
      why_en: "Carboxypeptidase — Zn²⁺; pyruvate decarboxylase — Mn²⁺; xanthine oxidase — molybdenum. These three go together as a set in the textbook.",
      why_cn: "羧肽酶——Zn²⁺；丙酮酸脱羧酶——Mn²⁺；黄嘌呤氧化酶——钼。教材中这三者是成组出现的。"
    },
    {
      type: "mcq",
      q_en: "Ferritin can contain ferric ions up to what proportion of its mass?",
      q_cn: "铁蛋白所含铁离子最高可达其质量的多少？",
      options: ["3 %", "10 %", "30 %", "60 %"],
      answer: 2,
      why_en: "Ferritin, Mr = 46 000, can contain ferric ions up to 30 % of its mass, released when needed. Transferrin is the transport protein, ceruloplasmin transports copper.",
      why_cn: "铁蛋白（Mr = 46 000）所含铁离子可达其质量的 30%，需要时释放。转铁蛋白是转运蛋白，铜蓝蛋白转运铜。"
    },
    {
      type: "short",
      q_en: "Distinguish the roles of ferritin, transferrin and ceruloplasmin.",
      q_cn: "区分铁蛋白、转铁蛋白与铜蓝蛋白的作用。",
      accept: ["depot", "storage", "transport", "iron", "copper", "储存", "转运", "铁", "铜"],
      answer_en: "Ferritin is a depot (storage) protein for iron, with a large metal content — up to 30 % of its mass as ferric ions, released when needed. Transferrin is a blood plasma protein with a transport function for iron ions, binding Fe³⁺ with high affinity. Ceruloplasmin, in blood serum, is the transport protein for copper ions.",
      answer_cn: "铁蛋白是铁的储存蛋白，金属含量大——铁离子可达其质量的 30%，需要时释放。转铁蛋白是具有铁离子转运功能的血浆蛋白，以高亲和力结合 Fe³⁺。血清中的铜蓝蛋白是铜离子的转运蛋白。"
    },
    {
      type: "short",
      q_en: "Why does the textbook say that 'simple' proteins are rather the exception?",
      q_cn: "教材为什么说「简单」蛋白质反倒是例外？",
      accept: ["analytical", "sensitiv", "non-peptide", "majority", "分析", "灵敏", "非肽", "多数"],
      answer_en: "Because with the development of analytical methods and the increase of their sensitivity, the number of proteins in which a non-peptide component has been demonstrated keeps rising. According to current ideas, non-peptide components are a regular part of the vast majority of proteins.",
      answer_cn: "因为随着分析方法的发展及其灵敏度的提高，被证实含有非肽组分的蛋白质数目不断增加。按当前的看法，非肽组分是绝大多数蛋白质的常规组成部分。"
    }
  ],
  oral: {
    q_en: "Classify conjugated proteins according to the nature of the non-peptide component.",
    q_cn: "按非肽组分的性质对结合蛋白质进行分类。",
    model_en: "Proteins are sometimes divided into simple and conjugated. Simple proteins yield only amino acids on hydrolysis, containing only the peptide component, while conjugated proteins contain further components besides amino acids — bound either covalently or by non-covalent interactions. As analytical methods have grown more sensitive, the number of proteins shown to carry a non-peptide component has risen, so that today non-peptide components are regarded as a regular part of the vast majority of proteins and the simple proteins are rather the exception. Glycoproteins carry a covalently bound saccharide part. In the narrower sense these have short, often branched oligosaccharide chains bound either N-glycosidically through the amide nitrogen of asparagine, as in serum glycoproteins, or O-glycosidically through the hydroxyl of serine or threonine, as in blood group substances and mucins. Proteoglycans carry glycosaminoglycans covalently bound to the protein and are components of connective tissue, and collagen carries galactose or a galactose-glucose disaccharide bound mainly to hydroxyproline or hydroxylysine. In phosphoproteins the phosphate is bound covalently, in eukaryotes usually by an ester bond to the hydroxyl of serine, threonine or tyrosine; phosphorylation by protein kinases is very important in regulation of the cell cycle and in cell signalling, and phosphoproteins also serve as phosphate depots — phosvitin in egg yolk and casein in milk. Metalloproteins form complexes through carboxyl, imidazole and sulfhydryl groups, especially with heavy metals. Ferritin is an iron depot holding up to thirty per cent of its mass as ferric ions; transferrin transports iron in blood plasma and ceruloplasmin transports copper in serum. Iron-sulfur proteins bind iron with sulfhydryl groups and sulfide ions and occur in the ferredoxins, important in biological oxidation-reduction. Some metalloproteins contain only traces of metal that are nonetheless necessary for catalytic function — zinc in carboxypeptidase, manganese in pyruvate decarboxylase, molybdenum in xanthine oxidase. Finally, in hemoproteins the iron is bound in complex with porphyrin, and this complex is called heme; the hemoproteins comprise the oxygen carriers, the cytochromes and the heme enzymes.",
    checklist: [
      "Defined simple vs conjugated and said simple ones are the exception, with the reason",
      "Gave N-glycosidic (Asn) and O-glycosidic (Ser/Thr) with examples",
      "Covered proteoglycans and collagen's saccharide",
      "Gave phosphoprotein linkage (ester to Ser/Thr/Tyr) plus regulatory AND depot roles",
      "Named phosvitin and casein",
      "Distinguished ferritin (depot), transferrin (Fe transport), ceruloplasmin (Cu transport)",
      "Mentioned FeS proteins / ferredoxins",
      "Gave the three catalytic metal examples",
      "Defined heme as Fe–porphyrin and listed the three hemoprotein groups"
    ]
  }
},

{
  id: "2-2-6",
  book: "cz",
  topicKey: "working-with-proteins",
  chapter: 2,
  section: "2.2.6",
  czTitle: "Vlastnosti proteinů",
  enTitle: "Properties of proteins",
  cnTitle: "蛋白质的性质",
  pages: [37, 38, 39, 40],
  coverage: "partial",
  coverageNote: "p. 37 verified against the scan (incl. the Svedberg equation and all numeric values). pp. 38–40 — continuation, including denaturation — are not in the extracted page set.",
  cnNote: { topic: "七", title: "结构与功能关系", status: "partial" },
  summary: {
    en: "The physico-chemical properties of proteins are conditioned partly by their chemical composition and partly by their relative molecular mass. Globular proteins are generally soluble in aqueous salt solutions.",
    cn: "蛋白质的物理化学性质一方面取决于其化学组成，另一方面取决于其相对分子质量。球状蛋白一般可溶于水性盐溶液。"
  },
  points: [
    { cz: "koloidní vlastnosti", en: "In view of their high relative molecular mass, protein molecules in solution are COMPARABLE WITH THE PARTICLES OF INORGANIC COLLOIDS, and therefore their solutions have some properties in common with colloidal solutions — e.g. the TYNDALL EFFECT, GEL FORMATION, COAGULATION.", cn: "由于相对分子质量高，溶液中的蛋白质分子可与无机胶体粒子相比拟，因此其溶液具有一些与胶体溶液共同的性质——例如丁达尔效应、凝胶形成、凝聚。" },
    { cz: "homodisperzní systémy", en: "Unlike those POLYDISPERSE systems, however, protein solutions are HOMODISPERSE systems, by which they RESEMBLE TRUE SOLUTIONS.", cn: "然而，与那些多分散体系不同，蛋白质溶液是均分散体系，就这一点而言它们类似于真溶液。" },
    { cz: "rozmezí Mr", en: "The relative molecular mass (Mr) of proteins ranges from 10⁴ TO 10⁶, and IN VIRUSES UP TO 10⁷. This fact means that classical methods cannot be used for its determination.", cn: "蛋白质的相对分子质量 (Mr) 范围为 10⁴ 至 10⁶，在病毒中可高达 10⁷。正因如此，不能用经典方法测定它。" },
    { cz: "metody stanovení Mr", en: "Several types of physico-chemical method are used to determine the Mr of a protein: ULTRACENTRIFUGATION ANALYSIS; CHROMATOGRAPHY using so-called molecular sieves (GEL or PERMEATION chromatography); and ELECTROMIGRATION methods.", cn: "测定蛋白质 Mr 使用几类物理化学方法：超速离心分析；使用所谓分子筛的色谱（凝胶色谱或渗透色谱）；以及电迁移方法。" },
    { cz: "sedimentace", en: "In SEDIMENTATION methods the protein solution is exposed to centrifugal force in an ultracentrifuge. Protein molecules, being heavier than water, sink slowly to the bottom of the cell, i.e. they travel AWAY FROM THE CENTRE OF ROTATION. The sedimentation rate is defined as the path of the molecule in the direction of centrifugal acceleration per unit time, dx/dt, and is proportional to the centrifugal acceleration: dx/dt = s · ω² · x.", cn: "在沉降法中，蛋白质溶液在超速离心机中受离心力作用。蛋白质分子比水重，缓慢沉向池底，即朝远离旋转中心的方向移动。沉降速度定义为分子在离心加速度方向上单位时间内所行的路程 dx/dt，并与离心加速度成正比：dx/dt = s · ω² · x。" },
    { cz: "svedberg", en: "Here x = distance from the centre of rotation; s = SEDIMENTATION COEFFICIENT, whose value is given in SVEDBERG units (S), where 1 SVEDBERG = 10⁻¹³ SEC; ω = angular velocity.", cn: "其中 x = 距旋转中心的距离；s = 沉降系数，其数值以斯维德贝格单位 (S) 表示，1 斯维德贝格 = 10⁻¹³ 秒；ω = 角速度。" },
    { cz: "Svedbergova rovnice", en: "Although the sedimentation coefficient INCREASES with Mr, it is NOT A DIRECT PROPORTIONALITY. The value of Mr can be calculated using the SVEDBERG EQUATION: Mr = R·T·s / [D·(1 − v̄·ρ)], where D is the diffusion coefficient, v̄ the partial specific volume and ρ the density of the solvent.", cn: "尽管沉降系数随 Mr 增大，但两者并非正比关系。Mr 值可用斯维德贝格方程计算：Mr = R·T·s / [D·(1 − v̄·ρ)]，其中 D 为扩散系数，v̄ 为偏比容，ρ 为溶剂密度。" }
  ],
  terms: [
    { cz: "Tyndallův jev", en: "Tyndall effect", cn: "丁达尔效应", def_en: "A property protein solutions share with colloidal solutions, owing to the high molecular mass of the particles.", def_cn: "由于粒子分子质量高，蛋白质溶液与胶体溶液共有的性质。" },
    { cz: "homodisperzní systém", en: "homodisperse system", cn: "均分散体系", def_en: "A system whose particles are uniform; protein solutions are homodisperse, which makes them resemble true solutions, unlike polydisperse colloids.", def_cn: "粒子均一的体系；蛋白质溶液是均分散的，因而类似真溶液，不同于多分散胶体。" },
    { cz: "sedimentační koeficient", en: "sedimentation coefficient", cn: "沉降系数", def_en: "s, given in svedberg units; 1 svedberg = 10⁻¹³ s. Increases with Mr but not in direct proportion.", def_cn: "s，以斯维德贝格单位表示；1 斯维德贝格 = 10⁻¹³ 秒。随 Mr 增大但非正比。" },
    { cz: "Svedbergova rovnice", en: "Svedberg equation", cn: "斯维德贝格方程", def_en: "Mr = R·T·s / [D·(1 − v̄·ρ)] — used to calculate relative molecular mass from the sedimentation coefficient.", def_cn: "Mr = R·T·s / [D·(1 − v̄·ρ)]——用于由沉降系数计算相对分子质量。" },
    { cz: "gelová (permeační) chromatografie", en: "gel (permeation) chromatography", cn: "凝胶（渗透）色谱", def_en: "Chromatography using molecular sieves, one of the methods for determining Mr.", def_cn: "使用分子筛的色谱，是测定 Mr 的方法之一。" }
  ],
  quiz: [
    {
      type: "mcq",
      q_en: "What is the range of relative molecular mass of proteins, and the upper limit in viruses?",
      q_cn: "蛋白质相对分子质量的范围是多少？在病毒中的上限是多少？",
      options: [
        "10² to 10⁴, in viruses up to 10⁵",
        "10⁴ to 10⁶, in viruses up to 10⁷",
        "10³ to 10⁵, in viruses up to 10⁶",
        "10⁴ to 10⁸, in viruses up to 10⁹"
      ],
      answer: 1,
      why_en: "Proteins run from 10⁴ to 10⁶; in viruses Mr reaches 10⁷. This is precisely why classical methods of molecular mass determination cannot be used.",
      why_cn: "蛋白质为 10⁴ 至 10⁶；在病毒中 Mr 可达 10⁷。正因如此才不能使用经典的分子质量测定方法。"
    },
    {
      type: "mcq",
      q_en: "One svedberg equals:",
      q_cn: "1 斯维德贝格等于：",
      options: ["10⁻⁶ s", "10⁻⁹ s", "10⁻¹³ s", "10⁻¹⁵ s"],
      answer: 2,
      why_en: "1 svedberg = 10⁻¹³ second. Note also that although s increases with Mr, the relationship is NOT a direct proportionality — hence the need for the Svedberg equation.",
      why_cn: "1 斯维德贝格 = 10⁻¹³ 秒。另请注意，尽管 s 随 Mr 增大，但两者并非正比关系——因此才需要斯维德贝格方程。"
    },
    {
      type: "mcq",
      q_en: "In what way do protein solutions DIFFER from ordinary colloidal solutions?",
      q_cn: "蛋白质溶液与普通胶体溶液的区别何在？",
      options: [
        "They show no Tyndall effect",
        "They cannot form gels",
        "They are homodisperse rather than polydisperse, so they resemble true solutions",
        "They contain no particles comparable in size to colloids"
      ],
      answer: 2,
      why_en: "They SHARE the Tyndall effect, gel formation and coagulation with colloids. The difference is dispersity: colloids are polydisperse, protein solutions homodisperse, which makes them resemble true solutions.",
      why_cn: "它们与胶体共有丁达尔效应、凝胶形成和凝聚等性质。区别在于分散度：胶体是多分散的，而蛋白质溶液是均分散的，因而类似真溶液。"
    },
    {
      type: "short",
      q_en: "Name the physico-chemical methods used to determine the relative molecular mass of a protein.",
      q_cn: "说出用于测定蛋白质相对分子质量的物理化学方法。",
      accept: ["ultracentrifug", "gel", "permeation", "chromatograph", "electromigration", "超速离心", "凝胶", "渗透", "色谱", "电迁移"],
      answer_en: "Ultracentrifugation analysis; chromatography using so-called molecular sieves, that is gel or permeation chromatography; and electromigration methods.",
      answer_cn: "超速离心分析；使用所谓分子筛的色谱，即凝胶色谱或渗透色谱；以及电迁移方法。"
    }
  ],
  oral: {
    q_en: "Describe the physico-chemical properties of globular proteins and how their relative molecular mass is determined.",
    q_cn: "描述球状蛋白的物理化学性质，以及其相对分子质量的测定方法。",
    model_en: "The physico-chemical properties of proteins are conditioned partly by their chemical composition and partly by their relative molecular mass. Globular proteins are generally soluble in aqueous salt solutions. Because their relative molecular mass is high, protein molecules in solution are comparable with the particles of inorganic colloids, and their solutions therefore share some properties with colloidal solutions — the Tyndall effect, the formation of gels, and coagulation. They differ, however, in one important respect: colloidal solutions are polydisperse, whereas protein solutions are homodisperse, and in this they resemble true solutions. The relative molecular mass of proteins ranges from ten to the fourth up to ten to the sixth, and in viruses reaches ten to the seventh; classical methods of determination therefore cannot be used. Instead several physico-chemical methods are employed: ultracentrifugation analysis, chromatography on molecular sieves — that is gel or permeation chromatography — and electromigration methods. In the sedimentation method the protein solution is exposed to centrifugal force in an ultracentrifuge; the molecules, being heavier than water, travel away from the centre of rotation. The sedimentation rate is the distance travelled in the direction of centrifugal acceleration per unit time and is proportional to that acceleration, dx by dt equals s times omega squared times x, where s is the sedimentation coefficient expressed in svedberg units, one svedberg being ten to the minus thirteen seconds. Although the sedimentation coefficient increases with relative molecular mass, this is not a direct proportionality, so the mass is calculated from the Svedberg equation: Mr equals R T s divided by D times one minus v-bar rho.",
    checklist: [
      "Stated properties depend on composition and on molecular mass",
      "Listed Tyndall effect, gel formation, coagulation as shared with colloids",
      "Gave the homodisperse vs polydisperse distinction",
      "Gave Mr range 10⁴–10⁶ and 10⁷ for viruses",
      "Named all three determination methods",
      "Gave dx/dt = s·ω²·x and 1 svedberg = 10⁻¹³ s",
      "Noted s is NOT directly proportional to Mr, hence the Svedberg equation"
    ]
  }
}

);
