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
  mustKnow: { en: "Every one of the 20 carries the same –COOH/–NH₂ backbone, so everything that tells one amino acid from another, and everything a protein can do, lives in the side chain R — which is why the four-group sort (nonpolar / polar / negative / positive) is the one classification you keep using. And 20 is a genetic-code fact, not a chemical one: over 150 other amino acids exist in cells and never enter a protein, because nothing codes for them.", cn: "20 种氨基酸的主链（–COOH 与 –NH₂）完全一样，所以区分它们的、以及蛋白质能做什么的全部信息，都在侧链 R 上——这就是为什么「非极性／极性／带负电／带正电」这个四分法是你以后一直要用的分类。而「20」是遗传密码的事实，不是化学的事实：细胞里还有 150 多种氨基酸，它们永远进不了蛋白质，因为没有密码子对应它们。" },
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
      optionRefs: { 0: "2-1-2", 3: "3-6" },
      optionNotes: {
        0: { en: "Glycine is an exception, but to a different rule: because its R is only a hydrogen it is the one proteinogenic amino acid with no asymmetric carbon, so it is not optically active and is the single amino acid of proteins that stands outside the L-configuration series. Its α-amino group is free and unsubstituted like everyone else's.", cn: "甘氨酸确实是个例外，但例外的是另一条规则：它的 R 只是一个氢，所以它是唯一不含不对称碳的蛋白质氨基酸，没有旋光活性，也是蛋白质中唯一不属于 L-configuration series 的那一个。它 α 碳上的氨基和其他氨基酸一样，是游离且未被取代的。" },
        1: { en: "Cysteine's peculiarity is entirely in the side chain — the –SH group that puts it in the polar group 2, and which the book names together with tyrosine as the most polar of that group. Nothing about its α-amino group differs from the other nineteen.", cn: "半胱氨酸的特殊之处完全在侧链上——那个 –SH 把它归入极性的第 2 组，教材还把它和酪氨酸一起点名为该组中极性最强的两个。它 α 碳上的氨基和其余十九个没有任何区别。" },
        3: { en: "Histidine belongs to group 4, the positively charged side chains, on account of its weakly basic imidazole residue — the same imidazole that later turns up among the groups doing general acid-base catalysis in an active centre. That is a side-chain property; the α-amino group is unsubstituted.", cn: "组氨酸因侧链上那个弱碱性的 imidazole 而归入第 4 组，即带正电荷的一组——后面讲活性中心的 general acid-base catalysis 时，出现的也正是这个咪唑基。那是侧链的性质；它 α 碳上的氨基并没有被取代。" }
      },
      why_en: "Proline is the sole exception — its nitrogen is part of a ring and is therefore substituted. (Glycine is the exception for a different rule: it is the one with no asymmetric carbon.)",
      why_cn: "脯氨酸是唯一的例外——其氮原子是环的一部分，因而是被取代的。（甘氨酸是另一条规则的例外：它是唯一不含不对称碳的氨基酸。）"
    },
    {
      type: "mcq",
      q_en: "In this textbook's classification, which amino acids form the group with NONPOLAR side chains?",
      q_cn: "在本教材的分类中，哪些氨基酸构成非极性侧链组？",
      options: [
        "Ala, Leu, Ile, Val, Pro, Phe, Trp, Met",
        "Ser, Thr, Tyr, Asn, Gln, Cys, Gly, Ala",
        "Glu, Asp, Lys, Arg, His, Ser, Thr, Cys",
        "Gly, Ala, Ser, Cys, Pro, Thr, Val, Asn"
      ],
      answer: 0,
      optionRefs: { 3: "2-2-4" },
      optionNotes: {
        1: { en: "This is group 2, the POLAR side chains, sorted by what they carry: an –OH (threonine, serine, tyrosine), an amide group (asparagine, glutamine) or an –SH (cysteine). Glycine is tacked on here, and the book says outright that glycine is very difficult to place in this classification at all; alanine genuinely is aliphatic and belongs in group 1.", cn: "这是第 2 组，即 POLAR 侧链，按侧链带什么分：带 –OH 的（苏氨酸、丝氨酸、酪氨酸）、带酰胺基的（天冬酰胺、谷氨酰胺）、带 –SH 的（半胱氨酸）。甘氨酸是硬塞进来的——教材明说甘氨酸在这个分类里非常难归位；丙氨酸则确实是脂肪族，属于第 1 组。" },
        2: { en: "This merges the two charged groups — negatively charged glutamic and aspartic acid, which carry a second carboxyl, and positively charged lysine, arginine and histidine — and then adds three polar residues. Charge, not polarity, is the criterion that defines groups 3 and 4.", cn: "这是把两个带电组合在了一起——带负电的谷氨酸和天冬氨酸（侧链上多一个羧基），以及带正电的赖氨酸、精氨酸、组氨酸——再加了三个极性残基。第 3、4 组的判据是电荷，不是极性。" },
        3: { en: "This is a sort by SIZE of side chain rather than by polarity. It is not a useless list — a high content of small residues, glycine, alanine and serine, is exactly what lets fibroin pack its planar β-antiparallel sheets regularly — but it cuts across the four-group polarity classification.", cn: "这是按侧链**大小**排的，不是按极性。这份名单并非没有用——正是甘氨酸、丙氨酸、丝氨酸这些小残基含量高，才让 fibroin 的 β-antiparallel 平面片层能规整地堆叠——但它和这里的四组极性分类是两把不同的尺子。" }
      },
      why_en: "Five aliphatic (alanine, leucine, isoleucine, valine, proline), two aromatic (phenylalanine, tryptophan), one sulfur-containing (methionine) — eight in total.",
      why_cn: "五种脂肪族（丙氨酸、亮氨酸、异亮氨酸、缬氨酸、脯氨酸）、两种芳香族（苯丙氨酸、色氨酸）、一种含硫（甲硫氨酸）——共八种。"
    },
    {
      type: "mcq",
      q_en: "Which amino acid does the textbook say is very difficult to place in the polarity classification?",
      q_cn: "教材说哪种氨基酸很难归入极性分类？",
      options: ["Proline", "Glycine", "Cysteine", "Tyrosine"],
      answer: 1,
      optionRefs: { 0: "2-1-3", 2: "2-2-3", 3: "2-1-2" },
      optionNotes: {
        0: { en: "Proline is the odd one out, but under a different rule — it is the one amino acid of the twenty without a free unsubstituted amino group on the α-carbon, which is why ninhydrin turns it yellow instead of blue-violet. In the polarity sort it is placed without any difficulty, among the five aliphatic nonpolar side chains.", cn: "脯氨酸确实是那个另类，但另类的是另一条规则——二十个里只有它在 α 碳上没有游离未取代的氨基，所以茚三酮把它显成黄色而不是蓝紫色。在极性分类里它归位毫无困难：属于五个脂肪族非极性侧链之一。" },
        2: { en: "Cysteine sits firmly in group 2 by way of its –SH group, and the book goes further — it names cysteine and tyrosine as the most polar of that whole group. Its own peculiarity is elsewhere: the –SH groups of two cysteines form the disulfide bridges that this textbook counts as part of the PRIMARY structure.", cn: "半胱氨酸凭 –SH 稳稳地待在第 2 组，教材还更进一步，把半胱氨酸和酪氨酸点名为整组中极性最强的两个。它真正的特殊之处在别处：两个半胱氨酸的 –SH 形成 disulfide bridges，而本教材把二硫键的位置算进**一级结构**。" },
        3: { en: "Tyrosine is also group 2, through the –OH on its ring, and is named with cysteine as the most polar of the group. What makes it remarkable is a different property altogether — it is one of the three residues that absorb in the UV, which is what makes the A₂₈₀ reading of protein concentration possible.", cn: "酪氨酸同样属于第 2 组，靠的是环上的 –OH，并与半胱氨酸一起被点名为该组中极性最强的。它真正值得注意的是另一件事——它是三个在紫外区有吸收的残基之一，A₂₈₀ 测蛋白浓度就是靠它。" }
      },
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
  lehNotes: [
    { kind: "conflict",
      node: "L-2-2-1",
      en: "TERMINOLOGY: the Czech book says that at high pH “the QUATERNARY ammonium group is deprotonated” (kvartérní amoniová skupina). Lehninger's figure of conjugate acid-base pairs (Fig. 2-15, A p.57) treats glycine as a diprotic acid whose two ionizable groups are the carboxyl, pKa 2.34, and the AMINO group, Ka = 2.51 x 10^-10 M, pKa 9.60 — and section 2.3 opens by calling them “The protonated amino and carboxyl groups of amino acids” (A p.59). What loses a proton at high pH is the protonated alpha-amino group, -NH3+, a PRIMARY ammonium ion. A quaternary ammonium ion carries four substituents on nitrogen and no hydrogen at all, so it has no proton to lose and cannot be deprotonated by definition. Say protonated amino group in the exam.",
      cn: "术语问题：捷克教材说在高 pH 下「季铵基团被去质子化」（kvartérní amoniová skupina）。Lehninger 那张共轭酸碱对的图（Fig. 2-15，A p.57）把甘氨酸当作二元酸处理，其两个可电离基团是羧基（pKa 2.34）和氨基（Ka = 2.51 x 10^-10 M，pKa 9.60）——而 2.3 节开篇即称之为「氨基酸上被质子化的氨基和羧基」（A p.59）。在高 pH 下失去质子的是被质子化的 α-氨基，即 -NH3+，属于伯铵离子。季铵离子的氮上带有四个取代基、完全没有氢，因此根本没有质子可失，按定义就无法被去质子化。口试时请说「被质子化的氨基」。" }
  ],
  mustKnow: { en: "Charge is a function of pH, and at the isoelectric point the net charge is zero — that single number is why ion-exchange chromatography and electrophoresis can separate amino acids and proteins at all, because at its own pI a molecule stops moving in a field. Separately: of the 20, only Trp, Tyr and Phe absorb in the UV, which is why A₂₈₀ reads protein concentration in seconds without consuming the sample.", cn: "电荷是 pH 的函数，而在等电点 pI 上净电荷为零——就这一个数字，解释了离子交换层析和电泳为什么能分离氨基酸与蛋白质：在自己的 pI 上，分子在电场里就不动了。另一件事：20 种里只有 Trp、Tyr、Phe 吸收紫外，所以 A₂₈₀ 能在几秒内读出蛋白质浓度，而且不消耗样品。" },
  trace: [
    {
      term: "pI 等电点",
      what: "先说最容易读错的地方：它是一个 **pH 值**，不是一个电荷值。它的定义只有一句话——当周围的 pH 正好等于这个数时，这个氨基酸（或蛋白质）身上的正负电荷刚好抵消，净电荷为零。",
      from: "为什么会有这么一个点？因为氨基酸身上同时挂着两个脾气相反的基团：一个 -COOH 随时想把质子甩出去（甩了就带负电），一个 -NH₂ 随时想抓一个质子过来（抓了就带正电）。谁占上风完全看周围的 pH。教材说得很直白：pH 很低的时候，羧基的解离被压住了，整个分子表现为**阳离子**；pH 很高的时候反过来，成了阴离子。那么你把 pH 从低往高慢慢调，净电荷必然从正走到负——中间就**必然**有一个瞬间等于零。那一点就是 pI。它不是谁规定的，是躲不掉的。",
      to: "这一个数，就是**分离纯化的全部理论依据**。ion-exchange chromatography（离子交换层析）和 electrophoresis（电泳）凭什么能把一锅蛋白分开？就凭在同一个 pH 下，不同的蛋白带的电不一样，于是跑的方向和快慢也不一样。你学过的「蛋白质分离纯化表征」那一整节，地基就是这一句。",
      family: "同一条滴定曲线上还有两个拐点，分别对应 -COOH 和 -NH₂ 各自的 pK。要注意：如果侧链上还带着可解离的基团（比如 Asp、Lys 这些），它也要一起算进去，所以这类氨基酸的 pI **不能**简单地拿两个 pK 求平均。"
    }
  ],
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
      options: ["Cysteine and methionine", "Threonine and isoleucine", "Phenylalanine and tyrosine", "Leucine and isoleucine"],
      answer: 1,
      optionRefs: { 0: "2-1-1" },
      optionNotes: {
        0: { en: "The two sulfur-containing amino acids, and a pair the book does keep together — but for a different reason: methionine is the sulfur member of nonpolar group 1, cysteine the –SH member of polar group 2. Each carries exactly one asymmetric carbon, like every proteinogenic amino acid except glycine and the two named here.", cn: "两个含硫氨基酸，教材确实常把它们放在一起讲，但理由不同：甲硫氨酸是非极性第 1 组里含硫的那一个，半胱氨酸是极性第 2 组里带 –SH 的那一个。它们各自只有一个不对称碳——除了甘氨酸和本题答案里那两个，蛋白质氨基酸都是如此。" },
        2: { en: "Two of the three residues that absorb in the UV, which is what the A₂₈₀ protein assay rests on; that is their claim to being singled out, not their stereochemistry. Each has a single asymmetric carbon, and both belong to the L-configuration series like all the rest.", cn: "这是三个在紫外区有吸收的残基中的两个——A₂₈₀ 测蛋白浓度靠的就是它们；它们被单独拎出来讲是因为这个，而不是因为立体化学。它们各有一个不对称碳，也和其余所有氨基酸一样属于 L-configuration series。" },
        3: { en: "A deliberate near-miss: isoleucine really is one of the two, but leucine is not. The two differ only in where the branch sits on the side chain, and that displaced branch is precisely the second asymmetric centre isoleucine has and leucine lacks.", cn: "这是刻意设的近似项：异亮氨酸确实是其中之一，亮氨酸不是。两者的差别只在侧链上支链的位置，而正是这个挪了位的支链构成了异亮氨酸多出来、亮氨酸没有的第二个不对称中心。" }
      },
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
      optionRefs: { 1: "2-2-3", 3: "2-1-1" },
      optionNotes: {
        0: { en: "Half right, and that is what makes it tempting: phenylalanine is the third of the three amino acids that absorb significantly in the UV. But the 280 nm reading is taken on tyrosine and tryptophan residues, and histidine contributes nothing here — none of the twenty absorbs in the visible region at all.", cn: "对了一半，所以才诱人：苯丙氨酸确实是紫外区有显著吸收的三个氨基酸中的第三个。但 280 nm 读的是酪氨酸和色氨酸残基，组氨酸在这里没有贡献——二十个氨基酸没有一个在可见光区有吸收。" },
        1: { en: "Cysteine does have an absorbance worth remembering, but in its oxidised paired form: cystine absorbs weakly, and at 240 nm rather than 280. Methionine, the other sulfur amino acid, contributes nothing to either reading.", cn: "半胱氨酸确实有一个值得记住的吸收，但那是在它氧化成对之后：胱氨酸的吸收很弱，而且在 240 nm 而不是 280 nm。另一个含硫氨基酸甲硫氨酸对这两个波长都没有贡献。" },
        3: { en: "These are the group-3 side chains, the two that carry a second carboxyl. They are what makes an amino acid's pI low and so what ion-exchange chromatography and electrophoresis separate on — a charge property, measured in a field, not by a spectrophotometer.", cn: "这是第 3 组的侧链，即多带一个羧基的那两个。它们决定的是氨基酸的 pI 偏低，也正是离子交换层析和电泳赖以分离的依据——那是电荷性质，靠电场量，不靠分光光度计。" }
      },
      why_en: "Three amino acids absorb significantly in the UV — tyrosine, tryptophan and phenylalanine — but it is the tyrosine and tryptophan residues that the 280 nm method relies on. Cystine absorbs weakly at 240 nm.",
      why_cn: "三种氨基酸在紫外区有显著吸收——酪氨酸、色氨酸和苯丙氨酸——但 280 nm 方法依赖的是酪氨酸和色氨酸残基。胱氨酸在 240 nm 处有弱吸收。"
    },
    {
      type: "mcq",
      q_en: "At LOW pH, an amino acid behaves as:",
      q_cn: "在低 pH 下，氨基酸表现为：",
      options: ["An anion", "A cation", "A zwitterion", "A free radical"],
      answer: 1,
      optionRefs: { 0: "L-2-2-1", 2: "L-2-2-1" },
      optionNotes: {
        0: { en: "That is the behaviour at HIGH pH, the mirror image of this question: the ammonium group loses its proton and the molecule carries net negative charge. Reading the titration curve from low pH to high pH, the net charge runs from positive through zero to negative.", cn: "那是**高** pH 下的行为，正好是本题的镜像：铵基失去质子，分子带净负电荷。把滴定曲线从低 pH 往高 pH 读，净电荷是从正、经零、走到负的。" },
        2: { en: "A zwitterion carries both charges at once and they cancel, so the net charge is zero — that is the state at the isoelectric point, the pH corresponding to half the consumption of titration agent, not at low pH. At low pH the carboxyl dissociation is suppressed and only the positive charge is left.", cn: "两性离子身上正负电荷同时存在并互相抵消，净电荷为零——那是**等电点**处的状态，即对应滴定试剂消耗量一半的那个 pH，不是低 pH 下的状态。低 pH 下羧基解离被压制，只剩下正电荷。" },
        3: { en: "Nothing in the acid-base behaviour of amino acids produces radicals. The entire pH dependence is proton transfer at the –COOH and –NH₂ groups, and it is exactly that which the titration curve of glycine in Obr. 2.1 records, with one inflexion for each pK.", cn: "氨基酸的酸碱行为里不会产生自由基。整个 pH 依赖性就是 –COOH 和 –NH₂ 上的质子转移，图 2.1 里甘氨酸的滴定曲线记录的正是这件事，每个 pK 对应一个拐点。" }
      },
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
  mustKnow: { en: "Ninhydrin turns an amino acid blue-violet and proline yellow, so a colourless spot on a chromatogram becomes visible and proline identifies itself by colour alone. The other idea worth keeping is protection: to build a peptide in a chosen order you first block the amino group, because leaving both ends free gives a random polymer rather than a sequence.", cn: "茚三酮把氨基酸显成蓝紫色、把脯氨酸显成黄色，所以层析板上本来无色的斑点变得可见，而脯氨酸单凭颜色就把自己认了出来。另一个值得留下的概念是「保护」：要按指定顺序接出一条肽，必须先把氨基封住——两端都不管，得到的是随机聚合物，不是序列。" },
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
        "Its carboxyl group has been reduced to an α-amino alcohol, so no colour develops",
        "Its –NH₂ group is substituted, so it gives yellow instead of blue-violet",
        "Its side chain contains sulfur, which diverts the reaction to a yellow product",
        "It belongs to the D-configuration series, unlike the other nineteen"
      ],
      answer: 1,
      optionRefs: { 2: "2-1-1", 3: "2-1-2" },
      optionNotes: {
        0: { en: "The –COOH group of an amino acid can indeed be reduced, and the product is an α-amino alcohol — but that is a separate reaction of the carboxyl group, run deliberately, not something proline arrives with. Ninhydrin is the characteristic reaction of the α-AMINO group, and proline's carboxyl is entirely ordinary.", cn: "氨基酸的 –COOH 确实可以被还原，产物是 α-amino alcohol——但那是羧基的另一个反应，是特意去做的，不是脯氨酸本来就带着的状态。茚三酮反应针对的是 α-**氨基**，而脯氨酸的羧基完全正常。" },
        2: { en: "Proline's ring is built from carbon and its own α-nitrogen; there is no sulfur in it. Sulfur appears in exactly two of the twenty — methionine, the sulfur member of nonpolar group 1, and cysteine, the –SH member of polar group 2 — and neither of them changes the ninhydrin colour.", cn: "脯氨酸的环由碳和它自己的 α-氮构成，里面没有硫。二十个氨基酸里含硫的恰好只有两个——非极性第 1 组里的甲硫氨酸和极性第 2 组里带 –SH 的半胱氨酸——而这两个都不会改变茚三酮的显色。" },
        3: { en: "All the amino acids found in proteins, glycine excepted, belong to the L-configuration series. D-amino acids do exist, but among the 150-plus that never enter a protein — the book's example is D-glutamic acid in bacterial cell walls.", cn: "蛋白质中的氨基酸除甘氨酸外全部属于 L-configuration series。D 型氨基酸确实存在，但存在于那 150 多个从不进入蛋白质的氨基酸里——教材举的例子是细菌细胞壁中的 D-谷氨酸。" }
      },
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
  mustKnow: { en: "Because each residue joins through one –NH₂ and one –COOH, the chain is unbranched and its two ends are chemically different — so a sequence has a direction, is always written N-terminus first, and Ala-Gly is not the same molecule as Gly-Ala. The size names (oligopeptide up to 10, polypeptide above 10, protein above 100) are conventions, not chemistry.", cn: "因为每个残基是靠一个 –NH₂ 和一个 –COOH 接上去的，链不分支，而且两端在化学上不同——所以序列是**有方向**的，永远从 N 端开始写，Ala-Gly 和 Gly-Ala 不是同一个分子。而「寡肽 ≤10、多肽 >10、蛋白质 >100」只是约定，不是化学。" },
  trace: [
    {
      term: "N-terminal / C-terminal N 端与 C 端",
      what: "一条肽链的两头。一头留着没用掉的 –NH₂，叫 N 端；另一头留着没用掉的 –COOH，叫 C 端。**两头在化学上是不一样的**，这一点看着琐碎，后果却很大。",
      from: "为什么会有两个不同的头？因为每个氨基酸是拿自己的 –COOH 去接下一个的 –NH₂，一个接一个串下去。串到最后，队首那位的 –NH₂ 没人要，队尾那位的 –COOH 也没人要，就各自空在那里。也正因为每个残基只有这两个接口，**链不会分叉**——蛋白质永远是一条线，不是一棵树。",
      to: "两头不同，就意味着序列**有方向**，于是写法必须先定规矩。教材给的约定是：**从 N 端开始写**。所以 Ala-Gly 和 Gly-Ala 是两个不同的分子，不是同一个东西的两种写法——这一点在读任何序列时都成立，也是后面讲蛋白质合成方向时的前提。",
      family: "顺带说一个容易被当成硬知识背的东西：「寡肽 ≤10、多肽 >10、蛋白质 >100」这套按长度的叫法**只是约定，不是化学**。没有哪一条化学性质在第 10 个或第 100 个残基处突然改变，所以不必纠结边界。另外，肽链可以拆成两部分看：规律重复的**主链**，和挂在上面千变万化的**侧链**——蛋白质之间的差别全在后者。"
    }
  ],
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
      optionNotes: {
        0: { en: "This is a real threshold in the book, but the other one: not more than 10 residues is an OLIGOPEPTIDE, more than 10 a POLYPEPTIDE. Both numbers, 10 and 100, are conventions of naming rather than chemistry — nothing about the chain changes at either residue.", cn: "这确实是教材里的一条界限，但是另一条：不超过 10 个残基叫 OLIGOPEPTIDE，超过 10 个叫 POLYPEPTIDE。10 和 100 这两个数都只是命名上的约定，不是化学——在第 10 个或第 100 个残基处，链本身没有任何变化。" },
        1: { en: "The book names no threshold at 50; its scale has exactly two marks on it, at 10 and at 100. Choosing a number that sounds reasonable is the standard way this question is lost, because all four options are equally plausible-sounding.", cn: "教材没有在 50 处设过界限；它这把尺子上只有两个刻度：10 和 100。挑一个听起来合理的数字，正是这道题最常见的失分方式——因为四个选项听起来都同样合理。" },
        3: { en: "Any chain of more than 500 residues is of course a protein, but by satisfying the real threshold of 100, not by meeting a separate one at 500. A definition has to name the lowest number that qualifies, and here that number is 100.", cn: "超过 500 个残基的链当然是蛋白质，但那是因为它满足了 100 这条真正的界限，而不是因为在 500 处另有一条。定义必须给出满足条件的**最低**数字，而这里那个数字是 100。" }
      },
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
        "Begin at whichever end carries the bulkier side chain, then read on",
        "Begin at either end, as long as the direction chosen is stated"
      ],
      answer: 1,
      optionRefs: { 0: "4-2-1" },
      optionNotes: {
        0: { en: "The convention read backwards — and this is the one wrong answer that does real damage, because the two ends of the chain are chemically different, so a sequence read the wrong way round names a different molecule. Ala-Gly and Gly-Ala are not two spellings of one thing.", cn: "把约定反过来读——这也是四个错项里真正有杀伤力的一个，因为肽链的两端在化学上并不相同，方向读反了，指的就是另一个分子。Ala-Gly 和 Gly-Ala 不是同一个东西的两种写法。" },
        2: { en: "Side-chain size has nothing to do with it. What fixes the direction is how the chain is built: each residue offers its –COOH to the next residue's –NH₂, so exactly one free –NH₂ survives at one end and one free –COOH at the other, and those two ends are what the convention names.", cn: "侧链大小与此无关。定死方向的是链的搭建方式：每个残基把自己的 –COOH 交给下一个残基的 –NH₂，于是一端恰好剩下一个游离 –NH₂、另一端剩下一个游离 –COOH——约定指的就是这两个末端。" },
        3: { en: "The point of having a convention is precisely that the direction never has to be stated: everyone writes N-terminus first, so a bare string of residues is already unambiguous. If the direction had to be declared each time, the notation would not be doing its job.", cn: "有约定的意义恰恰就在于方向不必每次声明：所有人都从 N 端起写，所以光一串残基本身就已经没有歧义了。如果每次都得注明方向，这套写法就等于没起作用。" }
      },
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
  mustKnow: { en: "The sequence is the whole bridge between DNA and the folded shape, which is why changing one residue can be a disease: in sickle cell anaemia exactly one position changes — Glu to Val at position 6 of the haemoglobin β-chain — and the protein behaves differently. Sequence similarity is evidence of common ancestry, not of similar function.", cn: "序列是从 DNA 通往折叠形状的整座桥，所以改掉一个残基就可能是一种病：镰刀型细胞贫血正是只改了一个位置——血红蛋白 β 链第 6 位的 Glu 换成 Val——蛋白质的行为就变了。另外，序列相似是**共同祖先**的证据，而不是功能相似的证据。" },
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
        "Loss of the glutamic acid at position 6 from both β-chains of haemoglobin"
      ],
      answer: 1,
      optionRefs: { 0: "L-5-1-1", 3: "L-5-1-1" },
      optionNotes: {
        0: { en: "Both halves are wrong, and each in an examinable way: the chain is β, not α, and the direction is reversed — glutamic acid is the NORMAL residue and valine the mutant one. Getting the direction backwards is the commonest way this question is failed.", cn: "两半都错了，而且各错在一个会被考的点上：链是 β 不是 α；方向也反了——谷氨酸是**正常**残基，缬氨酸才是突变的那个。方向搞反是这道题最常见的失分方式。" },
        2: { en: "The position is right and the chain is right, but neither residue is the one involved. The book names this single exchange with full precision because that precision is the point: molecular pathology means one identified residue at one identified position.", cn: "位置对、链也对，但这两个残基都不是当事人。教材把这一次取代的每个细节都写死，正是因为精确本身就是重点：molecular pathology 讲的就是某一个确定位置上的某一个确定残基。" },
        3: { en: "It is a substitution, not a deletion — one residue exchanged for another, with the chain the same length as before. That is precisely why it is the textbook's example of molecular pathology: the smallest possible change to a sequence still produces abnormal function and serious disease.", cn: "这是取代，不是缺失——一个残基换成另一个，链长和原来一样。这恰恰是教材拿它当 molecular pathology 例子的原因：对序列所能做的最小改动，照样造成功能异常和严重疾病。" }
      },
      why_en: "The textbook is specific: glutamic acid in position 6 of the β-chain of haemoglobin is replaced by valine. Note the direction — Glu is the normal residue, Val the mutant.",
      why_cn: "教材说得很具体：血红蛋白 β 链第 6 位的谷氨酸被缬氨酸取代。注意方向——谷氨酸是正常残基，缬氨酸是突变残基。"
    },
    {
      type: "mcq",
      q_en: "The textbook says two proteins are similar in amino acid sequence only if:",
      q_cn: "教材说，两种蛋白质的氨基酸序列相似，仅当：",
      options: [
        "They have the same function",
        "They occur in the same organism",
        "They have a common ancestor",
        "They have the same molecular mass"
      ],
      answer: 2,
      optionRefs: { 0: "3-6", 1: "4-2-1", 3: "2-2-6" },
      optionNotes: {
        0: { en: "This inverts the chain of reasoning the node sets out. Sequence determines the three-dimensional structure, and that structure conditions the biological function — the arrow runs that way, and never back. Two enzymes can do the same chemistry from unrelated sequences; specificity is a property of the folded shape.", cn: "这把本节铺的那条推理链倒过来了。序列决定三维结构，三维结构再决定生物学功能——箭头是这个方向，而且不往回走。两个酶完全可以从毫不相干的序列出发做同一种化学反应；特异性是折叠后那个形状的性质。" },
        1: { en: "Sharing an organism means sharing a genome, not sharing an ancestral protein. The whole value of sequence comparison is the opposite: it reaches ACROSS organisms and reconstructs descent between them, which is why the book calls sequence a record of evolutionary history.", cn: "同处一个生物体只说明共用一个基因组，不说明共有一个祖先蛋白。序列比较的价值恰恰相反：它是**跨**生物体去重建亲缘关系的，这也正是教材说序列记录着演化史的意思。" },
        3: { en: "Molecular mass is the subject of section 2.2.6 and is read off sedimentation, gel chromatography or electromigration — none of which looks at the order of residues. Two proteins of identical Mr need not share a single residue in a single position.", cn: "分子量是 2.2.6 节的题目，靠沉降、凝胶层析或电泳迁移来测——这些方法没有一个看得见残基的顺序。两个 Mr 完全相同的蛋白，可能没有任何一个位置上的残基是一样的。" }
      },
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
  mustKnow: { en: "The peptide bond cannot rotate, so the backbone is not a floppy string but a row of flat rigid plates hinged only at the α-carbons; the chain has far fewer shapes open to it than its length suggests, and that is what makes folding possible at all — the cis form turns up essentially only next to proline. And the hydrophobic effect is driven by water, not by attraction between the chains: burying the nonpolar side chains releases the water that was held in order around them, so the protein ends up with a nonpolar core and the smallest surface it can manage.", cn: "肽键不能旋转，所以主链不是一根软绳，而是一排平的硬板、只在 α 碳处有铰链；链能采取的构象数远少于它的长度所暗示的，而正因如此，折叠才是可能的——cis 构型基本只出现在脯氨酸旁边。另外，疏水效应的推动力是**水**，不是链之间的吸引：把非极性侧链埋起来，就放掉了原本被排列整齐地围在它们周围的水，于是蛋白质最终形成一个非极性核心，并把表面缩到最小。" },
  trace: [
    {
      term: "amide plane 酰胺平面",
      what: "肽键周围那几个原子被锁死在**同一个平面**上，这块平面就叫 amide plane。它带来的结果是：整条蛋白主链根本不是一根想怎么弯就怎么弯的软绳，而是一排硬邦邦的板子，只有在 α-碳那几个点上才能转。",
      from: "凭什么说它锁死了？这里不需要任何理论，看一个能量出来的数就行：教材给出肽键里 C–N 的键长是 1.32 Å，而这个值**不上不下地卡在单键和双键中间**。单键长、双键短，它在中间，说明它有一部分双键的性质。而双键是不能自由旋转的——所以这块平面转不动。一个键长数据就把整条主链的自由度给限死了。",
      to: "后果比听起来重要得多：蛋白质能摆出的形状，**远远少于**「这么长一条链」给人的直觉印象。这正是折叠这件事有解、而不是一个天文数字般无望的搜索的原因。同一件事还引出 cis-trans 异构的问题，教材给了结论：球状蛋白里 trans 型压倒性占优。",
      family: "塑造形状的另一股力是 hydrophobic effect（疏水效应）。这里要小心一个通俗说法的误导：它的本质是**熵增**，不是「油怕水」——不是非极性基团讨厌水，是水被它们挡住后排不开、太憋屈，水自己要挣脱。它有两个看得见的表现：分子倾向于缩成表面积最小的形状；非极性侧链往里躲，聚成 nonpolar core（疏水核心）。"
    }
  ],
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
        "It is close to a pure single C–N bond (1.49 Å), so rotation about the peptide bond is free and the backbone stays flexible",
        "It is close to a pure double C=N bond (1.27 Å), so the chain is held rigid not only at the peptide bond but at the α-carbons too",
        "It lies between single (1.49 Å) and double (1.27 Å), so the bond has partial double-bond character and cannot rotate freely",
        "It is shorter than both a single and a double C–N bond, so the peptide bond is unusually strong and resists hydrolysis"
      ],
      answer: 2,
      optionRefs: { 1: "2-2-3", 3: "2-1-4" },
      optionNotes: {
        0: { en: "1.49 Å is one of the two reference values the book gives, but the measured 1.32 Å is well short of it, and that shortening is exactly the signal of partial double-bond character. If rotation here really were free there would be no amide plane, no cis-trans isomerism, and no reason for a chain to have a limited set of shapes.", cn: "1.49 Å 确实是教材给的两个参照值之一，但实测的 1.32 Å 比它短得多，而**变短**正是部分双键性质的信号。如果这个键真能自由旋转，就不会有 amide plane，不会有顺反异构，一条链也就没有理由只有有限的几种形状。" },
        1: { en: "1.27 Å is the other reference value, and 1.32 Å does not reach it either. More importantly, rigidity never extends to the α-carbons: those are precisely the hinges the chain still turns on, which is why the backbone is a row of flat plates rather than one solid rod, and why folding is possible at all.", cn: "1.27 Å 是另一个参照值，而 1.32 Å 也没到那个数。更要紧的是，刚性从来不会延伸到 α-碳上：那几个点恰恰是链仍然能转的铰链，所以主链是一排平板而不是一根整棍——折叠之所以可能，正在于此。" },
        3: { en: "1.32 Å lies between the two reference lengths, not below both of them: the book gives 1.49 Å for the single bond and 1.27 Å for the double bond. And what the intermediate value buys is restricted rotation, not chemical inertness — the peptide bond is an amide bond, formed with loss of water and hydrolysed back again.", cn: "1.32 Å 落在两个参照值**之间**，不是比两个都短：教材给的单键是 1.49 Å、双键是 1.27 Å。而这个居中的键长换来的是旋转受限，不是化学惰性——肽键就是酰胺键，脱一分子水形成，也能水解回去。" }
      },
      why_en: "The intermediate length reflects partial delocalisation of the carbonyl π-electrons and the nitrogen lone pair. The bond therefore cannot rotate freely, which produces the amide plane and cis-trans isomerism.",
      why_cn: "居中的键长反映了羰基 π 电子与氮孤对电子的部分离域。因此该键不能自由旋转，从而产生酰胺平面与顺反异构。"
    },
    {
      type: "mcq",
      q_en: "In globular proteins, the cis form of the peptide bond occurs practically only:",
      q_cn: "在球状蛋白中，肽键的顺式形式实际上只出现在：",
      options: [
        "At the N-terminal residue of the chain",
        "In the neighbourhood of a proline residue",
        "Wherever two cysteine residues form a bridge",
        "Throughout the nonpolar core of the globule"
      ],
      answer: 1,
      optionRefs: { 0: "2-1-4", 2: "2-2-3" },
      optionNotes: {
        0: { en: "The ends of a chain have no special claim on cis or trans: the amide plane, and the isomerism that comes with it, are a property of every peptide bond along the backbone. What the N-terminus really defines is the direction in which a sequence is written down.", cn: "链的末端在顺反上并没有什么特权：amide plane 以及随之而来的异构现象，是主链上**每一个**肽键的性质。N 端真正定义的是序列的书写方向。" },
        2: { en: "A disulfide bridge is a covalent link between two side chains and does not touch the peptide bond at all — so it cannot decide anything about that bond's configuration. Note also that this textbook counts the placement of disulfide bridges as part of the PRIMARY structure.", cn: "二硫键是两条**侧链**之间的共价连接，根本不涉及肽键本身——所以它决定不了肽键的构型。另外要记住：本教材把二硫键的位置算进**一级结构**。" },
        3: { en: "The nonpolar core is the second manifestation of the hydrophobic effect: nonpolar side chains interacting mutually so the molecule presents the smallest surface it can. That is again a story about side chains, whereas cis-trans isomerism belongs to the backbone.", cn: "疏水核心是疏水效应的第二种表现：非极性**侧链**彼此相互作用，使分子把表面积缩到最小。那讲的还是侧链的事，而顺反异构属于主链。" }
      },
      why_en: "Trans unambiguously predominates in globular proteins; the cis form is practically restricted to the neighbourhood of a proline residue.",
      why_cn: "反式在球状蛋白中明确占优；顺式形式实际上仅限于脯氨酸残基的邻近位置。"
    },
    {
      type: "mcq",
      q_en: "What is the thermodynamic essence of the hydrophobic effect, according to the textbook?",
      q_cn: "按教材，疏水效应的热力学本质是什么？",
      options: [
        "A decrease of enthalpy as new hydrogen bonds form directly between the nonpolar side chains buried in the core",
        "An increase of entropy from disrupting the ordered arrangement of water around hydrophobic particles",
        "A decrease of entropy as the peptide chain gives up freedom and collapses into an ordered globule",
        "An increase of enthalpy from the van der Waals contacts made between side chains inside the nonpolar core"
      ],
      answer: 1,
      optionRefs: { 0: "4-3-1", 2: "4-3-1", 3: "2-2-4" },
      optionNotes: {
        0: { en: "Nonpolar side chains have nothing to hydrogen-bond with — having no such groups is what makes them nonpolar in the first place. And the sign is wrong twice: the effect is entropic rather than enthalpic, and the entropy that increases belongs to the water, not to the protein.", cn: "非极性侧链没有东西可以形成氢键——正因为不带这类基团，它们才叫非极性。而且符号错了两处：这个效应是熵驱动而非焓驱动的，并且增加的那份熵属于**水**，不属于蛋白质。" },
        2: { en: "The protein's own entropy does fall as the chain folds, and this option describes that correctly — but it is the price paid, not the driving force. The book puts the essence in the water: disrupting the regular arrangement of water molecules around hydrophobic particles is what increases entropy overall.", cn: "链折叠时蛋白质自身的熵确实在下降，这个选项这部分说得没错——但那是**代价**，不是驱动力。教材把本质放在水身上：打乱疏水颗粒周围水分子的规则排布，才是整体熵增的来源。" },
        3: { en: "Van der Waals forces really are on the list of interactions holding a globular chain in position, alongside disulfide bonds, ionic interactions and hydrogen bonds. But the book defines the hydrophobic effect separately from all of them, and defines it by an entropy increase in the surrounding water.", cn: "范德华力确实在教材列出的、把球状蛋白链固定住的那批相互作用里，与二硫键、离子相互作用和氢键并列。但教材是把疏水效应和它们**分开**定义的，而且定义的依据是周围水的熵增。" }
      },
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
  mustKnow: { en: "Secondary and tertiary are separated by distance along the sequence — residues that are neighbours in the chain versus residues far apart in it — not by the kind of interaction involved. That is the definition, and it is the one people misstate. Note also that this textbook counts the placement of disulfide bridges as part of the PRIMARY structure, which not every book does.", cn: "二级与三级结构的分界是**在序列上的距离**——链上彼此相邻的残基，对 链上相隔很远的残基——而不是相互作用的类型。这才是定义，也正是最常被说错的一点。另外注意：本教材把二硫键的位置算进**一级结构**，这一点并非每本书都一致。" },
  trace: [
    {
      term: "secondary / tertiary 二级与三级结构",
      what: "这两个词的分界线在哪？答案可能和你的直觉相反：**分界线是残基在序列上离多远，不是靠什么力连起来的**。二级结构讲的是在链条上彼此挨得近的那些残基怎么在空间里排；三级结构讲的是在链条上隔得老远的残基，怎么在空间里凑到一块。",
      from: "为什么容易搞错？因为直觉总往「作用力」上想——总觉得二级归氢键管、三级归别的键管，好像是按键的种类分家的。教材把这条路明确堵死了：判据是**距离**。你只要把这一条立住，这一节剩下的词就会自己各就各位，不用一个一个背。",
      to: "有了这把尺子往下看：supersecondary structure（超二级结构）就是几段二级结构反复出现的固定搭配，比如 βαβ motif；domain（结构域）是能自己独立折叠成型的一整块；而 quaternary structure（四级结构）有个硬门槛——必须**不止一条肽链**才谈得上，单链蛋白根本没有四级结构。被问到「某蛋白有没有四级结构」，先数链数。",
      family: "还有一条很容易被翻过去：**这本教材把二硫键的位置也算进一级结构**，不只是氨基酸的顺序。各家教材在这一点上并不统一，考试按这本答。另外，四级结构里亚基之间的接触面往往直接决定了这个蛋白有没有生物活性，教材举的例子是抗体。"
    }
  ],
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
        "The order of the amino acid residues, and nothing else",
        "The amino acid sequence and the placement of disulfide bridges",
        "The sequence together with every hydrogen bond stabilising the chain",
        "The sequence together with the arrangement of the subunits"
      ],
      answer: 1,
      optionRefs: { 2: "2-2-2", 3: "L-5-1-1" },
      optionNotes: {
        0: { en: "This is the definition most other textbooks give, and it is the one to resist here: THIS book states the primary structure as the sequence AND the placement of the disulfide bridges. The disagreement is real, so in the exam answer according to this book.", cn: "这是大多数其他教材给的定义，而在这里恰恰要顶住它：**本**教材把一级结构定义为序列**加上**二硫桥的位置。各家教材在这一点上确实不统一，所以考试按这本书答。" },
        2: { en: "Hydrogen bonds are what hold the periodic secondary structures together — the α-helix, the β-structure and the collagen helix all rest on them — and no textbook counts them at the primary level. The disulfide bridge is different because it is covalent, part of the chain's own bonding pattern.", cn: "氢键维系的是那些周期性的二级结构——α-helix、β-structure、collagen helix 全靠它——没有任何教材把氢键算进一级结构。二硫桥不一样，它是**共价**的，属于肽链自身的成键方式。" },
        3: { en: "The arrangement of the subunits is the QUATERNARY structure, and it is spoken of only for proteins built from more than one peptide chain. Before answering any question of this kind, count the chains: a single-chain protein has no quaternary structure at all.", cn: "亚基的排布属于**四级结构**，而且只有由一条以上肽链构成的蛋白质才谈得上。碰到这类题先数链数：单链蛋白根本没有四级结构。" }
      },
      why_en: "This textbook explicitly includes the placement of disulfide bridges in the primary structure. Many other textbooks leave them out, so answer according to THIS book in the exam.",
      why_cn: "本教材明确把二硫桥的位置纳入一级结构。许多其他教材不包括它，因此考试时请按本书作答。"
    },
    {
      type: "mcq",
      q_en: "What distinguishes secondary from tertiary structure?",
      q_cn: "二级结构与三级结构的区别是什么？",
      options: [
        "Secondary is held together by covalent bonds, whereas tertiary depends only on non-covalent interactions",
        "Secondary concerns residues close together in the linear sequence, tertiary residues far apart",
        "Secondary describes a single peptide chain, tertiary the arrangement of several chains",
        "Secondary is always periodic and regular, whereas tertiary is always random coil"
      ],
      answer: 1,
      optionRefs: { 2: "L-5-1-1", 3: "2-2-4" },
      optionNotes: {
        0: { en: "This is the misconception the section is built to head off: the instinct is to sort the levels by which kind of bond holds them, but the criterion is DISTANCE ALONG THE SEQUENCE. Both levels draw on the same repertoire of weak interactions, and the one covalent link, the disulfide bridge, this book assigns to the primary level anyway.", cn: "这正是本节要挡掉的那个误解：直觉总想按「靠什么键连起来」给各级结构分家，但判据其实是**在序列上离多远**。两级用的是同一批弱相互作用；而唯一那个共价连接——二硫桥——本教材还把它算进一级结构。" },
        2: { en: "That is the boundary between tertiary and QUATERNARY structure, not between secondary and tertiary. Quaternary structure is spoken of only for proteins of more than one chain, and it describes the arrangement of the subunits and the character of their contact.", cn: "那是**三级与四级**之间的界线，不是二级与三级之间的。四级结构只有在蛋白质由一条以上肽链构成时才谈得上，讲的是亚基的排布以及它们接触的性质。" },
        3: { en: "Regularity is a genuine feature of secondary structure — some arrangements repeat and form the periodic structures — but it is not the criterion, and tertiary structure is certainly not random coil. Random coil is the name for the irregular stretches that alternate with α- and β-type sections inside a globule.", cn: "规律性确实是二级结构的一个真实特征——有些排布会规则地重复，构成周期性结构——但它不是**判据**，而且三级结构绝不是无规卷曲。random coil 指的是球状分子内部与 α、β 型片段交替出现的那些无规则区段。" }
      },
      why_en: "The criterion is distance ALONG THE SEQUENCE: secondary structure is the spatial arrangement of residues close together in the linear sequence, tertiary of residues far apart. The textbook adds that this boundary is sometimes hard to define.",
      why_cn: "判据是沿序列的距离：二级结构是线性序列中彼此靠近的残基的空间排布，三级结构则是相距较远的残基的排布。教材还补充说这一界限有时难以界定。"
    },
    {
      type: "mcq",
      q_en: "What is the size range of a domain?",
      q_cn: "结构域的大小范围是多少？",
      options: ["10–50 residues", "50–100 residues", "100–400 residues", "400–1000 residues"],
      answer: 2,
      optionRefs: { 1: "2-1-4" },
      optionNotes: {
        0: { en: "Far too small for a compact globular region. This is the scale of a single element of secondary structure, or of a supersecondary motif — the βαβ unit, the αα unit, the β-meander — which are clusters of such elements, not domains.", cn: "对一个紧密球状区域来说太小了。这是**单个**二级结构单元的尺度，或者超二级基序的尺度——βαβ 单元、αα 单元、β-meander 都属于这一类，它们是二级结构片段的簇，不是结构域。" },
        1: { en: "Just below the book's range, and the near miss is worth noticing: 100 residues is also the threshold above which a peptide chain is called a protein at all. A domain therefore begins where a protein begins, which is a useful way to remember the lower bound.", cn: "刚好落在教材范围之下，而这个「差一点」值得留意：100 个残基同时也是一条肽链能被称为**蛋白质**的门槛。也就是说，结构域的下限恰好和蛋白质的下限重合——这是记住下界的好办法。" },
        3: { en: "Above the book's range: 400 residues is the upper bound, not the lower one. A chain much longer than that is more likely to be carrying SEVERAL domains, joined by the flexible segments that are part of the definition, than one oversized domain.", cn: "超出了教材给的范围：400 是**上**限，不是下限。比这长得多的链，更可能是带着**若干个**结构域，中间由定义里那种柔性片段连接，而不是一个特大号的结构域。" }
      },
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
  mustKnow: { en: "Fibrous versus globular is a division of labour, not a taxonomy: extended chains cross-linked into fibres carry mechanical load, folded globules do the chemistry — and the two are convertible, which is what blood clotting is (soluble globular fibrinogen turning into fibrin). You can meet this outside a book: wetting and heating a hair breaks the hydrogen bonds holding keratin in its α-helix, and the hair stretches to twice its length.", cn: "「纤维状 vs 球状」是分工，不是分类学：伸展并交联成纤维的链承担机械负荷，折叠成球的链做化学——而且两者可以互相转化，血液凝固就是这么一回事（可溶的球状纤维蛋白原变成纤维蛋白）。这件事你在书本外就能碰到：把头发弄湿加热，维持角蛋白 α 螺旋的氢键被打开，头发就能被拉长到原来的两倍。" },
  trace: [
    {
      term: "fibrillar / globular 纤维状与球状蛋白",
      what: "这不是一套分类学标签，而是**分工**：链伸展开、彼此交联成纤维的，去承担机械负荷；链折叠成一个球的，去干化学活。形状不同，是因为要干的事不同。",
      from: "为什么形状能决定分工？想想两者各自的形态就明白了。伸展并交联起来的链能沿着一个方向抗拉，像绳子——所以皮肤、毛发、羽毛、鳞片都是这类（教材点名 keratin 是脊椎动物体表的基础蛋白）。而折成球的链，表面才能兜出一个口袋，把底物请进来——酶必须是球状的，道理就在这儿。",
      to: "关键是**两者可以互相转化**，这不是理论上的可能，而是你身上正在发生的事：血液凝固就是可溶的球状**纤维蛋白原**变成不溶的纤维状**纤维蛋白**。所以「球状」「纤维状」说的是当下的状态，不是这个分子的身份证。",
      family: "还有一个不用进实验室就能验证的例子，教材专门写了：把头发弄湿加热，维持角蛋白 α 螺旋的**氢键被打开**，头发就能被拉长到原来的**两倍**。烫头发这件事的化学基础就在这里——你每次这么做，都是在亲手改变一个蛋白质的二级结构。"
    }
  ],
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
      options: ["Haemoglobin", "Ceruloplasmin", "Chymotrypsin", "Keratin"],
      answer: 2,
      optionRefs: { 0: "L-5-1-1", 1: "2-2-5" },
      optionNotes: {
        0: { en: "One of the two proteins the book names on the OTHER side of this contrast: in myoglobin and haemoglobin the α-helix is the main structural motif. The proportion of α-helix differs from protein to protein, and these two mark the top of the range.", cn: "这是教材在这个对照里放在**另一边**的两个蛋白之一：在肌红蛋白和血红蛋白中，α-螺旋是主要的结构基序。α-螺旋所占比例因蛋白而异，而这两个正是这个范围的上端。" },
        1: { en: "Ceruloplasmin appears in this chapter for a quite different reason — it is the blood serum protein that transports copper ions — and the book never characterises its secondary structure at all. The counter-example it does name, the protein with essentially no α-helix, is chymotrypsin.", cn: "铜蓝蛋白在本章出现是出于完全不同的理由——它是血清中运输铜离子的蛋白——教材从未描述过它的二级结构。教材真正点名的那个反例，即基本不含 α-螺旋的蛋白，是胰凝乳蛋白酶。" },
        3: { en: "Keratin is the opposite case, and the one worth keeping straight: the basic secondary structure of mammalian keratin IS the α-helix, and two pairs of those helices twist together into the left-handed four-stranded cable the book calls the protofibril.", cn: "角蛋白是反过来的例子，也是最该分清的一个：哺乳动物角蛋白的基本二级结构**就是** α-螺旋，而且两对这样的螺旋会绞成教材所说的那根左手四股「缆绳」——protofibril。" }
      },
      why_en: "Myoglobin and haemoglobin are the examples where α-helix is the MAIN structural motif; chymotrypsin is the counter-example containing essentially none.",
      why_cn: "肌红蛋白和血红蛋白是 α-螺旋作为主要结构基序的例子；胰凝乳蛋白酶则是基本不含 α-螺旋的反例。"
    },
    {
      type: "mcq",
      q_en: "Why can a wetted, heated hair be stretched to double its length?",
      q_cn: "为什么润湿并加热后的头发可以被拉伸至两倍长度？",
      options: [
        "The disulfide bridges holding the four-stranded protofibril together are reduced, and the cable loosens",
        "The hydrogen bonds of the α-helix are released, and the chains can then form a β-parallel structure",
        "The peptide bonds of the main chain hydrolyse, and the shortened chains slide past one another",
        "The four-stranded protofibril unwinds completely into its individual amino acids"
      ],
      answer: 1,
      optionRefs: { 0: "2-2-3", 2: "2-1-4", 3: "2-2-2" },
      optionNotes: {
        0: { en: "Disulfide bridges are covalent, and wetting and heating does not reduce them. The book is specific about what is released: the HYDROGEN BONDS of the α-helix. The protofibril is real — two pairs of parallel helices twisted into a left-handed four-stranded cable — but it is the helix inside it that gives way.", cn: "二硫桥是共价的，润湿加热并不会把它还原。教材写得很明确，被打开的是 α-螺旋的**氢键**。protofibril 确实存在——两对平行螺旋绞成的左手四股缆绳——但让步的是缆绳里面的那个螺旋。" },
        2: { en: "If the peptide bonds hydrolysed, the chain would be destroyed rather than stretched, and the hair could not hold its new length. Nothing covalent breaks here: the change happens entirely at the level of secondary structure, α-helix out and β-parallel in.", cn: "如果肽键真的水解了，链是被破坏而不是被拉长，头发也就保持不住新的长度。这里没有任何共价键断裂：变化完全发生在二级结构这一层——α-螺旋退场，β-平行结构接手。" },
        3: { en: "Nothing is broken down to amino acids; the chains stay whole and simply adopt a different secondary structure. That is exactly what makes the change usable — in the stretched form the chains can form a β-parallel structure and FIX it, so the new length holds.", cn: "没有任何东西被降解成氨基酸；链是完整的，只是换了一种二级结构。这也正是这个变化之所以有用的原因——在被拉伸的形态下，肽链能形成 β-平行结构并把它**固定**下来，新长度才保得住。" }
      },
      why_en: "Wetting and heating releases the hydrogen bonds holding the α-helix. In the stretched form the peptide chains can form and fix a β-parallel structure — this is the α → β transition of keratin.",
      why_cn: "润湿加热会释放维持 α-螺旋的氢键。在被拉伸的形态下，肽链可形成并固定 β-平行结构——这就是角蛋白的 α → β 转变。"
    },
    {
      type: "mcq",
      q_en: "Fibroin's regular β-antiparallel arrangement is made possible by:",
      q_cn: "丝心蛋白规则的 β-反平行排布之所以可能，是因为：",
      options: [
        "A high content of the aromatic amino acids phenylalanine, tryptophan and tyrosine",
        "A high content of small amino acid residues — glycine, alanine, serine",
        "Extensive disulfide cross-linking between neighbouring peptide chains",
        "A high proline content, one residue in every three along the chain"
      ],
      answer: 1,
      optionRefs: { 0: "2-1-1", 2: "2-2-3", 3: "2-2-2" },
      optionNotes: {
        0: { en: "Aromatic rings are bulky, and bulk is precisely what a regular stack of planar sheets cannot accommodate — the book names the opposite property, a high content of SMALL residues. Phenylalanine and tryptophan are the two aromatic members of nonpolar group 1; tyrosine sits in polar group 2.", cn: "芳香环体积大，而规整堆叠的平面片层最容不下的就是体积——教材点名的是**相反**的性质：小残基含量高。苯丙氨酸和色氨酸是非极性第 1 组里的两个芳香族成员，酪氨酸则在极性第 2 组。" },
        2: { en: "Cross-linking is a real feature of fibrous proteins as a class — extended chains joined by cross-links into macroscopic fibres is the definition — but it is not the reason the book gives for fibroin's regular β-antiparallel arrangement. That reason is the SIZE of the side chains.", cn: "交联确实是纤维状蛋白这一类的共同特征——伸展的链靠交联连成宏观纤维，这就是它的定义——但教材给出的、丝心蛋白 β-反平行排布之所以规整的理由不是它，而是侧链的**大小**。" },
        3: { en: "One residue in every three is the requirement of the COLLAGEN helix, and the residue in question there is glycine, not proline — proline often occupies the X position of the Gly-X-Y repeat. Fibroin is a different fibrous protein with a different structural reason.", cn: "「每三个残基一个」是 **collagen** 螺旋的要求，而且那里要求的是**甘氨酸**不是脯氨酸——脯氨酸常出现在 Gly-X-Y 重复的 X 位。丝心蛋白是另一种纤维状蛋白，结构上的理由也不同。" }
      },
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
  mustKnow: { en: "Reverse the naming: the SIMPLE proteins are the exception — almost every protein carries a non-peptide component, and that component is usually where the function sits (heme carries the O₂, Zn²⁺ does the catalysis in carboxypeptidase, the sugar on the surface is what a blood group is). Phosphate is the one component that goes on and comes off again, which is why kinases can be used as switches for the cell cycle and for signalling.", cn: "把命名反过来看：**「简单蛋白质」才是例外**——几乎每个蛋白质都带着非肽的组分，而功能通常就落在那个组分上（血红素带 O₂、羧肽酶靠 Zn²⁺ 催化、表面的糖就是血型）。磷酸是唯一一个能装上去又卸下来的组分，所以激酶才能当作开关，用来控制细胞周期和信号传导。" },
  trace: [
    {
      term: "conjugated protein 结合蛋白",
      what: "带着**非肽组分**的蛋白质——糖、磷酸、金属离子、血红素等等。与之相对的叫 simple protein（简单蛋白质），只有肽链、别无他物。",
      from: "这里有个值得把命名反过来看的地方：听名字像是「简单」是常态、「结合」是特例，**其实恰恰相反——几乎每个蛋白质都带着点非肽的东西，简单蛋白质才是例外**。而且更要紧的是：**功能往往就落在那个非肽组分上**。血红素负责带 O₂，羧肽酶靠 Zn²⁺ 催化，细胞表面那些糖决定了你的血型。把非肽部分当成附属品，是这一节最容易犯的错。",
      to: "在这一堆组分里，**磷酸是特别的那一个：只有它能装上去、又卸下来**。别的组分基本是长在那儿不动的，而磷酸可以被激酶加上、被磷酸酶去掉——所以它才能当开关用。细胞周期、信号传导这些需要「开一下再关掉」的场合，用的都是磷酸化。往后看到「某某蛋白被磷酸化」，想的应该是开关被拨了一下，不是它多了个零件。",
      family: "糖接上去的方式分两种，接口不同：**N-**糖苷键接在天冬酰胺上，**O-**糖苷键接在丝氨酸或苏氨酸的羟基上——血型物质和黏液的糖蛋白走的是后一条。相关的还有 proteoglycan（蛋白聚糖，结缔组织的成分）；胶原蛋白也算糖蛋白，它的糖接在羟脯氨酸或羟赖氨酸上。"
    }
  ],
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
        "The hydroxyl group of hydroxyproline"
      ],
      answer: 2,
      optionRefs: { 3: "2-2-2" },
      optionNotes: {
        0: { en: "This is the O-GLYCOSIDIC route, the other half of the pair the section sets up, and the mnemonic is in the letters: O for the hydroxyl oxygen of serine or threonine, N for the amide nitrogen of asparagine. The O-glycosidic glycoproteins are the blood group substances and the mucins.", cn: "这是 **O**-糖苷键那条路，也就是本节配对讲的另一半，而记法就藏在字母里：O 对应丝氨酸或苏氨酸羟基上的氧，N 对应天冬酰胺的酰胺氮。走 O-糖苷键的糖蛋白是血型物质和黏蛋白。" },
        1: { en: "Threonine is the second of the two hydroxyl-bearing partners in the O-glycosidic route, alongside serine — so this is the same wrong half of the pair. Both belong to the polar group 2 side chains carrying an –OH.", cn: "苏氨酸是 O-糖苷键那条路上带羟基的两个搭档中的第二个（另一个是丝氨酸）——所以这和上一个错在同一半。两者都属于带 –OH 的极性第 2 组侧链。" },
        3: { en: "Hydroxyproline really is an attachment point in this section, but for COLLAGEN, which carries D-galactose, or a disaccharide of D-galactose and D-glucose, bound predominantly to hydroxyproline or hydroxylysine. That is a third case, separate from the N- and O-glycosidic oligosaccharide chains.", cn: "羟脯氨酸在本节里确实是一个连接位点，但那是 **collagen** 的情形：胶原上接的是 D-半乳糖，或者由 D-半乳糖和 D-葡萄糖组成的双糖，主要连在羟脯氨酸或羟赖氨酸上。那是第三种情况，和 N-、O-糖苷键的寡糖链都不同。" }
      },
      why_en: "N-glycosidic = via the amide nitrogen of asparagine (typical of blood serum glycoproteins). O-glycosidic = via the hydroxyl of serine or threonine (blood group substances, mucins).",
      why_cn: "N-糖苷键 = 经由天冬酰胺的酰胺氮（血清糖蛋白的典型方式）。O-糖苷键 = 经由丝氨酸或苏氨酸的羟基（血型物质、黏蛋白）。"
    },
    {
      type: "mcq",
      q_en: "Which metal ion does carboxypeptidase contain?",
      q_cn: "羧肽酶含有哪种金属离子？",
      options: ["Mn²⁺", "Zn²⁺", "Cu²⁺", "Mg²⁺"],
      answer: 1,
      optionRefs: { 0: "3-2", 2: "3-2", 3: "3-2" },
      optionNotes: {
        0: { en: "Mn²⁺ belongs to the same three-enzyme set, but to the wrong member of it: carboxypeptidase Zn²⁺, PYRUVATE DECARBOXYLASE Mn²⁺, xanthine oxidase molybdenum. Manganese also appears once more in the course, as the metal of hexokinase in the metalloenzyme list.", cn: "Mn²⁺ 属于同一组三个酶，但配错了对象：羧肽酶是 Zn²⁺，**丙酮酸脱羧酶**才是 Mn²⁺，黄嘌呤氧化酶是钼。锰在课程里还出现过一次，是金属酶名单中己糖激酶的金属。" },
        2: { en: "Copper is named twice in this course, neither time for carboxypeptidase: as the metal of tyrosinase in the metalloenzyme list, and as the ion that ceruloplasmin transports in blood serum. Storage and transport of a metal is a different job from doing catalysis with it.", cn: "铜在本课程里被点名过两次，但都不是羧肽酶：一次是金属酶名单里酪氨酸酶的金属，一次是铜蓝蛋白在血清中转运的离子。**储存和转运**一种金属，和**拿它做催化**是两回事。" },
        3: { en: "Mg²⁺ is on the metalloenzyme list too, as the metal of phosphatase. Reading that list as a whole is the point: Zn²⁺ alcohol dehydrogenase, Mg²⁺ phosphatase, Mn²⁺ hexokinase, Fe²⁺/Fe³⁺ cytochromes, Cu²⁺ tyrosinase, K⁺ pyruvate kinase, Na⁺ ATPase.", cn: "Mg²⁺ 也在金属酶名单上，是磷酸酶的金属。这份名单要整体记：Zn²⁺ 醇脱氢酶、Mg²⁺ 磷酸酶、Mn²⁺ 己糖激酶、Fe²⁺/Fe³⁺ 细胞色素、Cu²⁺ 酪氨酸酶、K⁺ 丙酮酸激酶、Na⁺ ATP 酶。" }
      },
      why_en: "Carboxypeptidase — Zn²⁺; pyruvate decarboxylase — Mn²⁺; xanthine oxidase — molybdenum. These three go together as a set in the textbook.",
      why_cn: "羧肽酶——Zn²⁺；丙酮酸脱羧酶——Mn²⁺；黄嘌呤氧化酶——钼。教材中这三者是成组出现的。"
    },
    {
      type: "mcq",
      q_en: "Ferritin can contain ferric ions up to what proportion of its mass?",
      q_cn: "铁蛋白所含铁离子最高可达其质量的多少？",
      options: ["15 %", "10 %", "30 %", "60 %"],
      answer: 2,
      optionNotes: {
        0: { en: "Below the book's figure. The number to fix is 30 per cent of ferritin's mass as ferric ions, and it comes with a second number, Mr = 46 000 — together they say how extreme a depot protein ferritin is, holding almost a third of its own weight as iron and releasing it when needed.", cn: "低于教材给的数字。要记死的是 30%——铁离子占铁蛋白质量的比例，而它还配着第二个数字 Mr = 46 000。两个数放在一起才说明铁蛋白作为储存蛋白有多极端：几乎三分之一的自身重量是铁，需要时再放出来。" },
        1: { en: "Also below the figure. Do not let it blur with the other depot protein of this section: phosvitin, the phosphoprotein of egg yolk, carries about 100 phosphate residues per peptide chain at Mr = 35 000. Two depot proteins, two different quantities stored.", cn: "同样低于那个数字。别把它和本节另一个储存蛋白搞混：卵黄的磷蛋白 phosvitin，Mr = 35 000，每条肽链带约 100 个磷酸残基。两个储存蛋白，存的是两种不同的东西。" },
        3: { en: "Above the book's figure. Ferritin is where iron is STORED; the proteins that MOVE it are different ones — transferrin binds Fe³⁺ in blood plasma with high affinity, and ceruloplasmin does the same job for copper in serum.", cn: "高于教材给的数字。铁蛋白是**储存**铁的地方；负责**搬运**的是另外的蛋白——转铁蛋白在血浆中以高亲和力结合 Fe³⁺，铜蓝蛋白在血清中对铜做同样的事。" }
      },
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
  coverageNote: "p. 37 verified against the scan (incl. the Svedberg equation and all numeric values). pp. 38–40 — continuation, including denaturation — are not in the extracted page set. CNNOTE CORRECTED 2026-08-07 (HANDOFF_LEHNINGER.md §6a, §2c, §13n): it pointed at Chinese-notes topic 七, which is myoglobin/haemoglobin/sickle cell on notes pp.37–40 and is what L-5-1-1 deepens. Two earlier sessions flagged this and neither fixed it, deliberately — §2c recorded that the fix 'needs the notes' own p.41 heading, which this session did not open', and guessing was refused. The page was opened this time. Notes p.41 carries a highlighted heading reading 八 蛋白质的分离、纯化、表征 (topic 8, separation, purification and characterisation of proteins), and its first item is ① 蛋白质的性质 — literally this node's title, Vlastnosti proteinů. Notes p.46 was rendered and is BLANK, which fixes the topic's end, so topic 八 = pp.41–45 exactly as §6a predicted. The mapping is now measured at both ends rather than inferred.",
  cnNote: { topic: "八", title: "蛋白质的分离、纯化、表征（笔记 pp.41–45；p.41 的标题与首项「蛋白质的性质」于 2026-08-07 直接读图核实，p.46 为空白页，确定该主题的结束）", status: "mapped" },
  mustKnow: { en: "Proteins run from 10⁴ to 10⁶, too large for the classical ways of measuring a molecular mass, so Mr has to be read off something that scales with size instead — how fast it sinks (ultracentrifuge), how it threads a molecular sieve (gel chromatography), how it moves in a field. The trap: the sedimentation coefficient S rises with mass but is NOT proportional to it, which is why a 30S and a 50S subunit make a 70S ribosome rather than an 80S one.", cn: "蛋白质的 Mr 从 10⁴ 到 10⁶，太大了，经典的分子量测定方法用不上，所以只能改去读某个随大小变化的量——沉降有多快（超速离心）、穿过分子筛有多难（凝胶层析）、在电场里怎么跑。陷阱在这里：沉降系数 S 随质量增大，但**不是正比**，所以 30S 加 50S 得到的是 70S 核糖体，而不是 80S。" },
  trace: [
    {
      term: "sedimentation coefficient S 沉降系数",
      what: "它衡量的是一个分子在超速离心机里**沉得有多快**，单位是时间（Svedberg）。请先记死一件事：它**不是分子量**，也不能当分子量用。这是这一节最经典、最容易犯的误解。",
      from: "为什么好端端地要绕这个弯，不直接测分子量？因为蛋白质实在太大了。教材给的范围是 Mr 从 10⁴ 到 10⁶，病毒还能冲到 10⁷——在这个量级上，那些经典的分子量测定方法根本用不上。既然量不了它本身，那就退一步：找一个**会随着分子大小变化**的、能测的量，测完再反推回去。「沉得多快」就是这样一个替身。",
      to: "这里有个坑必须提前说：沉降的快慢**不只由质量决定**，还取决于分子的形状和密度。所以 S 值**不能相加**。最好记的反例就是核糖体——50S 的大亚基配 30S 的小亚基，装起来是 **70S，不是 80S**。以后看到这类数字，先在心里念一句「这是沉降系数不是质量」，就不会算错。",
      family: "测 Mr 还有另一条路：gel (permeation) chromatography（凝胶过滤层析），靠分子在凝胶孔道里绕的路长短来分家。另外蛋白质溶液确实带有胶体的性质（比如 Tyndall effect 丁达尔效应），但它和普通胶体有个关键区别——它是 homodisperse（均一分散）的，颗粒大小整齐划一，这一点让它反而更接近真溶液。"
    }
  ],
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
      optionRefs: { 0: "L-3-3-1" },
      optionNotes: {
        0: { en: "Two orders of magnitude too low at every point. An Mr of 10² is a small molecule, not a protein — and the whole reason the book quotes this range is that it puts proteins BEYOND the reach of the classical methods of molecular mass determination, which is not true of anything at 10².", cn: "每一处都低了两个数量级。Mr 为 10² 的是小分子，不是蛋白质——而教材之所以要给出这个范围，正是因为它把蛋白质推到了经典分子量测定方法**够不着**的地方，而 10² 量级的东西完全够得着。" },
        2: { en: "One order of magnitude low throughout, and that makes it the near miss that is easiest to accept. The book's three figures are 10⁴ at the bottom, 10⁶ at the top, and 10⁷ in viruses; getting the exponents right matters because the size is what forces the indirect methods.", cn: "整体低了一个数量级，所以它是最容易被接受的那个近似项。教材给的三个数是：下限 10⁴、上限 10⁶、病毒 10⁷。指数必须记准，因为正是这个尺度逼得人只能用间接方法。" },
        3: { en: "The lower bound is right, but both upper bounds are two orders too high. Note the internal logic of the correct pair: the virus figure sits ONE order above the protein maximum, not three — 10⁶ for proteins, 10⁷ in viruses.", cn: "下限对了，但两个上限都高了两个数量级。留意正确那一组内部的逻辑：病毒的数字比蛋白质的上限高**一个**数量级，不是三个——蛋白质 10⁶，病毒 10⁷。" }
      },
      why_en: "Proteins run from 10⁴ to 10⁶; in viruses Mr reaches 10⁷. This is precisely why classical methods of molecular mass determination cannot be used.",
      why_cn: "蛋白质为 10⁴ 至 10⁶；在病毒中 Mr 可达 10⁷。正因如此才不能使用经典的分子质量测定方法。"
    },
    {
      type: "mcq",
      q_en: "One svedberg equals:",
      q_cn: "1 斯维德贝格等于：",
      options: ["10⁻⁶ s", "10⁻⁹ s", "10⁻¹³ s", "10⁻¹⁵ s"],
      answer: 2,
      optionRefs: { 1: "L-3-3-1" },
      optionNotes: {
        0: { en: "Not the value, but the unit is worth stopping on: a svedberg is a TIME, because s is a sedimentation coefficient and not a mass. That is the single most useful thing to fix here — it is why 30S and 50S subunits assemble into a 70S ribosome rather than an 80S one.", cn: "不是这个数值，但单位本身值得停一下：svedberg 是**时间**单位，因为 s 是沉降系数，不是质量。这是这里最该记死的一件事——30S 和 50S 的亚基装出来是 70S 核糖体而不是 80S，原因就在这儿。" },
        1: { en: "Also not the value. And even with the right number in hand, s alone does not give Mr: the coefficient increases with Mr but NOT in direct proportion, which is exactly why the Svedberg equation, Mr = R·T·s / [D·(1 − v̄·ρ)], has to be used.", cn: "同样不是那个数值。而且就算数字记对了，光有 s 也得不出 Mr：沉降系数随 Mr 增大，但**不成正比**——正因如此才必须动用斯维德贝格方程 Mr = R·T·s / [D·(1 − v̄·ρ)]。" },
        3: { en: "Two orders out from the value to fix, 10⁻¹³ s. The coefficient enters the course through the sedimentation rate law dx/dt = s · ω² · x, where x is the distance from the centre of rotation and ω the angular velocity.", cn: "比要记的那个数 10⁻¹³ s 差了两个数量级。这个系数在课程里是通过沉降速率式 dx/dt = s · ω² · x 出现的，其中 x 是距旋转中心的距离，ω 是角速度。" }
      },
      why_en: "1 svedberg = 10⁻¹³ second. Note also that although s increases with Mr, the relationship is NOT a direct proportionality — hence the need for the Svedberg equation.",
      why_cn: "1 斯维德贝格 = 10⁻¹³ 秒。另请注意，尽管 s 随 Mr 增大，但两者并非正比关系——因此才需要斯维德贝格方程。"
    },
    {
      type: "mcq",
      q_en: "In what way do protein solutions DIFFER from ordinary colloidal solutions?",
      q_cn: "蛋白质溶液与普通胶体溶液的区别何在？",
      options: [
        "They show no Tyndall effect, however concentrated the solution is made",
        "They cannot form gels and do not coagulate under any conditions",
        "They are homodisperse rather than polydisperse, so they resemble true solutions",
        "They contain no particles comparable in size to the particles of an inorganic colloid"
      ],
      answer: 2,
      optionRefs: { 3: "L-3-3-1" },
      optionNotes: {
        0: { en: "The Tyndall effect is one of the properties protein solutions SHARE with colloidal solutions, not one that separates them — and it is there for the same reason, the high relative molecular mass that makes protein molecules comparable with colloidal particles.", cn: "丁达尔效应是蛋白质溶液与胶体溶液**共有**的性质之一，不是把两者区分开的性质——而且它出现的原因也一样：相对分子质量高，使蛋白质分子在尺度上可与胶体粒子相比。" },
        1: { en: "Gel formation is shared too, and so is coagulation. The book lists exactly three properties held in common — the Tyndall effect, gel formation and coagulation — so the difference has to be looked for somewhere other than in that list.", cn: "凝胶形成同样是共有的，凝聚也是。教材列出的共有性质恰好三条——丁达尔效应、凝胶形成、凝聚——所以区别只能到这份名单**之外**去找。" },
        3: { en: "Size is exactly what they DO have in common: protein molecules in solution are comparable with the particles of inorganic colloids, which is why the colloidal properties show up at all. The real difference is dispersity — colloids polydisperse, protein solutions homodisperse.", cn: "尺寸恰恰是它们**共有**的那一点：溶液中的蛋白质分子在大小上可与无机胶体粒子相比，胶体性质才会出现。真正的区别在分散度——胶体是多分散的，蛋白质溶液是均一分散的。" }
      },
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
