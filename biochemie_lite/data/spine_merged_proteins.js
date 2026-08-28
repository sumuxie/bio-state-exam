/* Merged spines — amino acids, peptides and protein structure. 速通简洁版, ONE spine
   per TOPIC.

   Six topics, fourteen node spines (129 steps) between them, coming out here as six
   chains of 14 to 16, 92 steps in all. They are consecutive links in one story — what an amino acid is,
   how two of them join, what the order of the joined residues is, what that order folds
   into, and what takes the fold apart — so each topic leans on the one before it and
   points back with `recall_*` instead of defining anything twice.

   The merge rule: where a Lehninger telling exists it is the backbone, and the Czech
   material is folded in only where it ADDS — a number, a name the exam uses, a worked
   case, a consequence the other account does not draw. Two of these six topics
   (protein-structure-overview, protein-folding-and-denaturation) have no Lehninger
   member node at all, so there the Czech spine is the backbone and the additions are
   flagged with `beyond`.

   Every step keeps a `src` naming the pages it was read from: `B §x, p.y` for the Czech
   book, `A p.y` for Lehninger, both separated by a middle dot where a step is built
   from both.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read correctly
   with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* --------------------------------------------------------------- 氨基酸 ---- */
window.BIOLITE_SPINE["key:amino-acids"] = {
  assumed: ["cell", "tissue", "protein", "carbon", "hydrogen", "oxygen", "nitrogen",
            "sulfur", "molecule", "atom", "ion", "proton", "water", "acid", "base",
            "salt", "solution", "light", "blood", "enzyme", "glucose", "lung", "kidney",
            "DNA", "gene", "equilibrium", "equilibrium constant", "concentration",
            "logarithm", "electric field", "gel", "carbon dioxide", "urea",
            "coenzyme A", "bacterium", "glyceraldehyde", "chromatography", "entropy",
            "alanine", "tyrosine", "leucine", "isoleucine", "valine", "proline",
            "phenylalanine", "tryptophan", "methionine", "threonine", "serine",
            "asparagine", "glutamine", "cysteine", "glycine", "glutamic acid",
            "aspartic acid", "lysine", "arginine", "histidine", "cystine", "ninhydrin",
            "biochemistry", "conformation", "active site", "diabetes mellitus"],
  nodeTitle_en: "Amino acids",
  nodeTitle_cn: "氨基酸",
  title_en: "Twenty molecules with one identical backbone, and a charge that belongs to the pH of the solution rather than to the molecule",
  title_cn: "二十个共用同一副主链的分子，以及一份属于溶液 pH、而不属于分子本身的电荷",
  terms: [
    { en: "proteinogenic amino acids", cn: "蛋白质氨基酸",
      def_en: "The 20 amino acids that build proteins and for which a genetic code exists. In all 20 the amino group sits on the α-carbon, so the backbone is identical and every difference lies in the side chain.",
      def_cn: "构成蛋白质、并有遗传密码与之对应的 20 种氨基酸。这 20 种的氨基都在 α 碳上，所以主链完全相同，一切差异都落在侧链上。" },
    { en: "side chain (R)", cn: "侧链 (R)",
      def_en: "The characteristic group an amino acid carries besides –COOH and –NH₂. It is the basis of the four-group sort — nonpolar, polar, negatively charged, positively charged — and the source of everything that tells one amino acid from another.",
      def_cn: "氨基酸除 –COOH 与 –NH₂ 之外所带的特征基团。它是「非极性／极性／带负电／带正电」四组分类的依据，也是一种氨基酸区别于另一种的全部来源。" },
    { en: "guanidino group", cn: "胍基",
      def_en: "The positively charged side-chain group of arginine, one of the three members of group 4.",
      def_cn: "精氨酸带正电的侧链基团，精氨酸是第 4 组的三名成员之一。" },
    { en: "imidazole", cn: "咪唑",
      def_en: "The weakly basic side-chain residue of histidine — a five-membered ring containing two nitrogen atoms. Its pKa is the one that sits closest to the pH a cell runs at.",
      def_cn: "组氨酸的弱碱性侧链残基——一个含两个氮原子的五元环。它的 pKa 是所有侧链中最靠近细胞工作 pH 的那一个。" },
    { en: "asymmetric carbon", cn: "不对称碳",
      def_en: "A carbon carrying four different substituents, which makes a molecule non-superimposable on its mirror image. Every proteinogenic amino acid except glycine has one; threonine and isoleucine have two.",
      def_cn: "带有四个互不相同取代基的碳原子，使分子无法与其镜像重叠。除甘氨酸外每种蛋白质氨基酸都有一个；苏氨酸和异亮氨酸有两个。" },
    { en: "L-configuration series", cn: "L 构型系列",
      def_en: "The configuration of every amino acid found in a protein except glycine, referred to L-glyceraldehyde by way of L-serine. A protein is therefore built from one mirror form throughout.",
      def_cn: "蛋白质中除甘氨酸外每一种氨基酸的构型，经 L-丝氨酸参照 L-甘油醛而定。因此一个蛋白质自始至终由同一种镜像形式搭成。" },
    { en: "ninhydrin reaction", cn: "茚三酮反应",
      def_en: "The most characteristic reaction of the α-amino group. Heating an amino acid with ninhydrin gives an intensely coloured product: blue-violet from a free –NH₂, yellow from a substituted one, which among the 20 means proline.",
      def_cn: "α-氨基最具特征性的反应。氨基酸与茚三酮共热生成颜色浓烈的产物：游离 –NH₂ 呈蓝紫色，被取代的呈黄色，在这 20 种里后者就是脯氨酸。" },
    { en: "ion product of water", cn: "水的离子积",
      def_en: "The product [H+][OH-], equal to 1.0 x 10^-14 M² at 25 °C. It follows from folding water's constant 55.5 M concentration into the equilibrium constant for its own ionization, 1.8 x 10^-16 M, measured by conductivity on pure water.",
      def_cn: "[H+][OH-] 的乘积，25 °C 时等于 1.0 x 10^-14 M²。它来自把水恒定的 55.5 M 浓度并进其自身电离的平衡常数 1.8 x 10^-16 M，而后者由纯水电导测量得到。" },
    { en: "conjugate acid-base pair", cn: "共轭酸碱对",
      def_en: "A proton donor together with the proton acceptor it becomes on losing that proton — acetic acid and acetate. One substance in two states, with the pH relative to the pKa deciding which state predominates.",
      def_cn: "一个质子供体，连同它失去质子后变成的那个质子受体 —— 乙酸与乙酸根。同一种物质的两种状态，由 pH 相对 pKa 的位置决定哪一种占多数。" },
    { en: "pKa", cn: "pKa",
      def_en: "The negative logarithm of the acid dissociation constant Ka. The stronger the acid, the smaller the value. Read backwards it is the pH at which that group is half ionized, and therefore the pH at which it changes charge and buffers best.",
      def_cn: "酸解离常数 Ka 的负对数。酸越强，值越小。反过来读，它就是该基团半电离时的 pH，因而也是它改变电荷、缓冲能力最强的 pH。" },
    { en: "equivalent", cn: "当量",
      def_en: "The counting unit of a titration: the amount of a substance that will react with, or supply, one mole of hydrogen ions. One mole of glycine, carrying two ionizable groups, counts as two — which is why glycine's titration curve has two steps.",
      def_cn: "滴定的计数单位：能与一摩尔氢离子反应、或提供一摩尔氢离子的那么多物质。甘氨酸带两个可电离基团，一摩尔算两当量 —— 这正是它的滴定曲线有两级的原因。" },
    { en: "isoelectric point (pI)", cn: "等电点 (pI)",
      def_en: "The pH at which a molecule carries no net charge and stops moving in an electric field. For an amino acid with two ionizable groups it is the mean of the two pKa values, 5.97 for glycine, and it falls on the steep part of the curve where buffering is weakest.",
      def_cn: "分子净电荷为零、在电场中不再移动时的那个 pH。对有两个可电离基团的氨基酸，它是两个 pKa 的平均值，甘氨酸为 5.97；它落在曲线陡峭段，那里缓冲能力最弱。" },
    { en: "buffer", cn: "缓冲液",
      def_en: "A solution holding a weak acid and its own salt at comparable concentrations, so proton donor and proton acceptor are present at once. It resists pH change from added H+ or OH−, and only near its own pKa.",
      def_cn: "同时含有一个弱酸及其盐、且两者浓度相当的溶液，因而质子供体与受体同时在场。它抵抗加入 H+ 或 OH− 引起的 pH 变化，而且只在自己的 pKa 附近才有效。" },
    { en: "Henderson-Hasselbalch equation", cn: "Henderson-Hasselbalch 方程",
      def_en: "pH = pKa + log([proton acceptor]/[proton donor]). Equal concentrations give pH = pKa; a ten-to-one ratio moves the pH by exactly one unit either way, which is where the width of the flat zone comes from.",
      def_cn: "pH = pKa + log([质子受体]/[质子供体])。等浓度时 pH = pKa；比值十比一时 pH 正好向任一方向移动一个单位，缓冲平坦区的宽度就是这么来的。" },
    { en: "acidosis / alkalosis", cn: "酸中毒／碱中毒",
      def_en: "Blood plasma pH driven below normal is acidosis, above normal is alkalosis. Plasma sits at 7.4 and the clinical line for acidosis is 7.35, so the whole dangerous range is a few tenths of a unit wide.",
      def_cn: "血浆 pH 被压到正常以下是酸中毒，被推到正常以上是碱中毒。血浆正常值 7.4，酸中毒的临床界线是 7.35，整个危险区间不过零点几个单位宽。" },
    { en: "ion-exchange chromatography", cn: "离子交换色谱",
      def_en: "Separation on a material that binds charged molecules. Different amino acids and proteins carry different charges at a given pH because their pI values differ, and that difference is what the method reads.",
      def_cn: "在能结合带电分子的材料上进行的分离。不同氨基酸和蛋白质的 pI 不同，在给定 pH 下带电情况也不同，方法读的正是这个差别。" },
    { en: "electrophoresis", cn: "电泳",
      def_en: "Separation by driving charged molecules through a gel in an electric field. At its own pI a molecule has no net charge and does not move at all.",
      def_cn: "用电场驱动带电分子穿过凝胶来分离。在自己的 pI 上分子净电荷为零，完全不动。" }
  ],
  steps: [
    {
      en: "An amino acid is an organic substance carrying two functional groups at once: a carboxyl group, –COOH, and an amino group, –NH₂. A whole range of such substances occurs in living organisms, and a small group of 20 holds a special position among them. **Those 20 are the basic components of proteins and also the starting substances from which an organism makes every other kind of nitrogen compound it needs.**",
      cn: "氨基酸是同时带有两个官能团的有机物：一个羧基 –COOH 和一个氨基 –NH₂。生物体内存在一大批这样的物质，其中一小组共 20 种占据特殊地位。**这 20 种既是蛋白质的基本组成成分，又是机体制造其余各类含氮化合物的起始物质。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "the first thing true of all 20 is where those two groups sit relative to each other",
      link_cn: "这 20 种共有的第一件事，是那两个基团彼此的相对位置",
      en: "The α-carbon is the carbon atom immediately next to the carboxyl carbon. In every amino acid that builds a protein and has a genetic code, the amino group sits in the α-position, that is on that neighbouring carbon. **All 20 therefore share one identical backbone, and nothing whatever about the backbone can tell them apart.**",
      cn: "α 碳是紧挨着羧基碳的那个碳原子。在每一种构成蛋白质、并有遗传密码与之对应的氨基酸中，氨基都处在 α 位，也就是那个相邻的碳上。**因此这 20 种共用同一副主链，而主链上没有任何东西能把它们区分开。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "so what does tell them apart?",
      link_cn: "那到底是什么把它们区分开？",
      en: "Besides those two functional groups, each amino acid carries a characteristic side chain written R. **Since the backbone is common to all of them, everything that distinguishes one amino acid from another — and therefore everything a protein can do — is a property of R.** All 20 carry a free unsubstituted amino group on the α-carbon, proline being the single exception. One practical matter comes with them: an amino acid is written either by a trivial name or by a three-letter symbol derived from it, alanine as Ala and tyrosine as Tyr, while a sequence of joined residues is written with one-letter symbols instead, Ala becoming A and Tyr becoming Y.",
      cn: "除那两个官能团外，每种氨基酸还带有一条特征性侧链，写作 R。**既然主链人人相同，区分一种氨基酸与另一种的一切——因而也就是蛋白质能做什么的一切——都是 R 的性质。**这 20 种在 α 碳上都带有游离而未被取代的氨基，唯一的例外是脯氨酸。随之而来还有一件实务：氨基酸或者写俗名，或者写由俗名派生的三字母符号，丙氨酸写 Ala、酪氨酸写 Tyr；而书写一串相连残基的顺序时改用单字母符号，Ala 写作 A，Tyr 写作 Y。",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "now the sort that the rest of the subject runs on. Group 1",
      link_cn: "现在是后面一直要用的那个分类。第 1 组",
      en: "A nonpolar group is one whose electric charge is spread evenly, so water is not attracted to it. **Group 1, the amino acids with a nonpolar side chain, holds eight members**: five with an aliphatic chain, meaning a plain chain of carbon and hydrogen — alanine, leucine, isoleucine, valine and proline — two with an aromatic ring, phenylalanine and tryptophan, and one containing sulfur, methionine.",
      cn: "非极性基团指电荷分布均匀、因而不被水吸引的基团。**第 1 组是侧链为非极性的氨基酸，共八名成员：五种带脂肪链的（脂肪链就是单纯由碳和氢组成的链）——丙氨酸、亮氨酸、异亮氨酸、缬氨酸、脯氨酸；两种带芳环的——苯丙氨酸、色氨酸；以及一种含硫的——甲硫氨酸。**",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "the remaining three groups all attract water, and two of them go further and carry a charge",
      link_cn: "其余三组都吸引水，其中两组还更进一步，真的带电",
      recall_en: "the opposite of group 1: these side chains are drawn to water rather than avoiding it",
      recall_cn: "与第 1 组相反：这些侧链被水吸引，而不是躲着水",
      en: "A polar group has its charge unevenly distributed, so water is attracted to it. **Group 2, the polar side chains, carries an –OH group in threonine, serine and tyrosine, an amide group in asparagine and glutamine, or an –SH group in cysteine**; group 3, the negatively charged, holds glutamic acid and aspartic acid; group 4, the positively charged, holds lysine, arginine and histidine. What makes group 3 negative is a second carboxyl group carried in the side chain itself, and what makes group 4 positive is a second amino group in lysine, a guanidino group in arginine, and in histidine a weakly basic imidazole residue, which is a five-membered ring containing two nitrogen atoms. Cysteine and tyrosine are the most polar of group 2, and glycine, whose side chain is a single hydrogen atom, is very hard to place in this sort at all.",
      cn: "极性基团的电荷分布不均匀，因而会吸引水。**第 2 组是极性侧链：或含 –OH 基（苏氨酸、丝氨酸、酪氨酸），或含酰胺基（天冬酰胺、谷氨酰胺），或含 –SH 基（半胱氨酸）；第 3 组带负电，成员是谷氨酸和天冬氨酸；第 4 组带正电，成员是赖氨酸、精氨酸和组氨酸。**使第 3 组带负电的，是侧链上自带的第二个羧基；使第 4 组带正电的，是赖氨酸的第二个氨基、精氨酸的胍基，以及组氨酸的弱碱性咪唑残基——那是一个含两个氮原子的五元环。第 2 组里极性最强的是半胱氨酸和酪氨酸；而甘氨酸的侧链只是一个氢原子，很难被放进这套分类。",
      src: "B §2.1.1, p.21"
    },
    {
      link_en: "charge is one property of an amino acid. Shape is the other, and it starts at a single carbon",
      link_cn: "电荷是氨基酸的一个性质。形状是另一个，而它起于一个碳原子",
      recall_en: "the chirality of living matter met in chapter 1, now pinned to a named reference molecule",
      recall_cn: "第 1 章里生命物质的手性，现在被钉在一个具名的参照分子上",
      en: "An asymmetric carbon is a carbon atom carrying four different substituents, which makes a molecule non-superimposable on its mirror image. Every amino acid whose R is something other than hydrogen contains at least one and is therefore optically active: glycine contains none, the rest contain one, and threonine and isoleucine contain two. **Every amino acid found in a protein except glycine belongs to the L-configuration series**, the series of L-serine derived from L-glyceraldehyde — so a protein is built from one mirror form from end to end.",
      cn: "不对称碳指带有四个互不相同取代基的碳原子，它使分子无法与自身的镜像重叠。凡是 R 不是氢的氨基酸都至少含有一个，因而具有旋光活性：甘氨酸一个也没有，其余各含一个，苏氨酸和异亮氨酸各含两个。**蛋白质中发现的每一种氨基酸（甘氨酸除外）都属于 L 构型系列，也就是由 L-甘油醛派生出的 L-丝氨酸所属的那个系列——所以一个蛋白质从头到尾由同一种镜像形式搭成。**",
      src: "B §2.1.2, p.24",
      see: [{ id: "1-2", en: "chirality as a general feature of living matter, and the question it leaves open", cn: "手性作为生命物质的普遍特征，以及它留下的那个未解问题" }]
    },
    {
      link_en: "two of these properties can be seen with the eye, and both get used every day at a bench",
      link_cn: "其中两个性质用眼睛就能看见，而且实验台上天天在用",
      en: "None of the 20 absorbs light in the visible region, which is why a solution of pure protein is colourless, while tyrosine, tryptophan and phenylalanine absorb strongly in the ultraviolet. **Proteins contain tyrosine and tryptophan residues, so how strongly a solution absorbs at 280 nm is a quick measure of how much protein it holds**; cystine, which is two cysteine side chains joined to each other, absorbs weakly at 240 nm. Colour can be forced onto them as well: heating an amino acid with ninhydrin gives an intensely coloured product, blue-violet where the –NH₂ group is free and yellow where it is substituted, which among the 20 means proline — so a spot on a chromatogram that could not be seen at all becomes visible, and proline names itself by colour. The same α-amino group can be acylated as well — an acyl halide or an acid anhydride hangs an acyl group onto it — and that is how an amino group is protected: capped so that it takes no part while chemistry is done elsewhere on the molecule, which is what peptide synthesis needs before two amino acids can be joined in a chosen order.",
      cn: "这 20 种没有一种在可见光区吸收光，所以纯蛋白质的溶液是无色的；而酪氨酸、色氨酸和苯丙氨酸在紫外区有强吸收。**蛋白质含有酪氨酸和色氨酸残基，因此一份溶液在 280 nm 处的吸光强度，就是判定其中蛋白质含量的快速办法；胱氨酸（两条半胱氨酸侧链彼此相连而成）在 240 nm 处有弱吸收。**颜色也可以被逼出来：把氨基酸与茚三酮共热会生成颜色浓烈的产物，–NH₂ 游离时呈蓝紫色，–NH₂ 被取代时呈黄色，而在这 20 种里后者就是脯氨酸——于是层析图上本来完全看不见的斑点现了形，脯氨酸还凭颜色自报家门。同一个 α-氨基也可以被酰化——酰卤或酸酐把一个酰基挂上去——这就是氨基的保护：把它封住，让分子别处的化学反应进行时它不掺和；肽的化学合成要按指定顺序把两个氨基酸接起来，靠的正是这一步。",
      src: "B §2.1.2, p.24 · B §2.1.3, pp.24–25, Obr. 2.2",
      beyond: true,
      beyondNote: "The absorbances and the ninhydrin colours are on pp.24-25. Using the ninhydrin reaction to visualise spots on a chromatogram follows from what is written there but is not stated on those pages; it is standard practical material."
    },
    {
      link_en: "twenty is a smaller number than the chemistry allows, and the gap is worth naming",
      link_cn: "二十这个数比化学所允许的要小，而这中间的差值值得点明",
      en: "Over 150 further amino acids have been found in cells and tissues, free or bound, and never in proteins. **So 20 is a fact about the genetic code rather than a fact about chemistry: nothing codes for the other 150.** Some of those belong to the D-configuration series, the mirror form proteins never use, D-glutamic acid in bacterial cell walls being the case; and several are metabolic intermediates or precursors, with citrulline and ornithine standing inside the formation of urea and β-alanine standing before the synthesis of coenzyme A.",
      cn: "在细胞和组织中还发现了 150 多种别的氨基酸，或游离或结合存在，而从不出现在蛋白质里。**所以「20」是关于遗传密码的事实，不是关于化学的事实：那另外 150 多种没有任何密码子与之对应。**其中有些属于 D 构型系列，也就是蛋白质从不使用的那种镜像形式，细菌细胞壁中的 D-谷氨酸即是；另有几种是代谢的中间产物或前体：瓜氨酸和鸟氨酸位于尿素生成的途中，β-丙氨酸则站在辅酶 A 合成的前面。",
      src: "B §2.1.1, p.23",
      see: [{ id: "L-18-2-1", en: "citrulline and ornithine inside the urea cycle, step by step", cn: "瓜氨酸与鸟氨酸在尿素循环中的逐步位置" }]
    },
    {
      link_en: "back to the two groups every amino acid shares, because both of them can gain or lose a proton",
      link_cn: "回到每种氨基酸都有的那两个基团，因为两者都能得到或失去质子",
      en: "At low pH the carboxyl group stays protonated and the amino acid as a whole behaves as a cation, a positively charged ion; at high pH the protonated amino group loses its proton and the amino acid behaves as an anion, a negatively charged ion. **The charge of an amino acid is therefore a function of the pH it is sitting in and not a property of the molecule.** An acid is a proton donor and a base is a proton acceptor, and the two states of one such substance — acetic acid and acetate, for instance — are called a conjugate acid-base pair. Hydrochloric and sulfuric acid ionize completely in dilute solution and so have nothing left to decide; every ionizable group on an amino acid is instead a weak acid, one that gives its proton away only partly, which is exactly why it is worth studying.",
      cn: "在低 pH 下羧基保持质子化，整个氨基酸表现为 cation（阳离子，带正电的离子）；在高 pH 下已质子化的氨基失去质子，氨基酸表现为 anion（阴离子，带负电的离子）。**因此氨基酸的电荷是它所处 pH 的函数，而不是分子自身的一个属性。**酸是质子供体，碱是质子受体；同一种物质的这两种状态——比如乙酸与乙酸根——合称共轭酸碱对。盐酸、硫酸在稀溶液中完全电离，已经没什么可决定的了；而氨基酸上每一个可电离基团都是弱酸，只把质子部分让出去，这恰恰是它值得研究的原因。",
      src: "B §2.1.2, p.23 · A p.57, Fig. 2-15",
      beyond: true,
      beyondNote: "p.23 calls the group that deprotonates at high pH a quaternary ammonium group. An α-amino group protonates to –NH₃⁺, a primary ammonium ion; a quaternary ammonium ion carries four carbon substituents and cannot lose a proton at all. The chemistry of the titration curve is as described here."
    },
    {
      link_en: "before any of that can be put on a scale, the solvent has to be measured first",
      link_cn: "在把这一切放上刻度之前，得先把溶剂本身量出来",
      en: "Water ionizes reversibly into a hydrogen ion and a hydroxide ion, and the equilibrium constant for that is not assumed but measured: conductivity on pure water gives 1.8 x 10^-16 M at 25 °C. Almost none of the water is ionized at any moment, so water's own concentration stays at a constant 55.5 M, and folding that constant in gives the ion product of water, Kw = [H+][OH-] = 1.0 x 10^-14 M². Neutral means the two concentrations are equal, so each must be the square root of that, 10^-7 M. **pH is defined as −log[H+], so 7 is the reading a conductivity measurement on pure water forces**, and the letter p in front of any quantity means only take the negative logarithm of it. The scale is logarithmic, so one pH unit is a tenfold difference in hydrogen ion concentration and cola at pH 3.0 carries some ten thousand times the concentration of blood at pH 7.4. One further oddity: a bare proton does not exist in solution, since a hydrogen ion is hydrated to a hydronium ion, H3O+, essentially instantly, and H3O+ and OH- migrate through water far faster than sodium or chloride because a proton is released at one end of a hydrogen-bonded chain of water molecules while another appears at the far end — which is why a proton transfer is never the slow step of an enzyme mechanism.",
      cn: "水可逆地电离成一个氢离子和一个氢氧根离子，其平衡常数不是假定的而是量出来的：对纯水做电导测量，25 °C 下得 1.8 x 10^-16 M。任何时刻水都几乎没有电离，所以水自身的浓度固定在 55.5 M；把这个常数并进去，就得到水的离子积 Kw = [H+][OH-] = 1.0 x 10^-14 M²。中性意味着两种离子浓度相等，于是每一个都是它的平方根，即 10^-7 M。**pH 的定义是 −log[H+]，所以 7 是对纯水做一次电导测量所逼出来的读数；而任何量前面加一个 p，含义只是「取它的负对数」。**这个尺度是对数的，一个 pH 单位就是氢离子浓度差十倍：pH 3.0 的可乐所含的氢离子浓度约是 pH 7.4 血液的一万倍。还有一件怪事：溶液里并不存在裸露的质子，氢离子几乎瞬时被水合成 hydronium ion（水合氢离子 H3O+）；而 H3O+ 与 OH- 在水中的迁移远快于钠或氯，因为一条氢键相连的水分子链一端放出一个质子、远端就出现另一个——这正是酶的机制里质子转移从来不是限速步骤的原因。",
      src: "A pp.54–56, Fig. 2-13, Table 2-5",
      see: [{ id: "L-2-1-1", en: "why water hydrogen-bonds to itself in the first place", cn: "水为什么一开始就会和自己形成氢键" }]
    },
    {
      link_en: "with a scale in hand, each weak acid can be given one number",
      link_cn: "有了刻度，就能给每个弱酸挂上一个数字",
      en: "The tendency of an acid to give up its proton is its equilibrium constant, the acid dissociation constant Ka, and pKa is the negative logarithm of that. Stronger acids have larger constants and therefore smaller pKa values. Read backwards, which is the useful direction: **a group's pKa is the pH at which it is half ionized, so a pKa states the pH at which that particular group changes charge** — and a change of charge is the only thing about a side chain a protein actually responds to.",
      cn: "一个酸让出质子的倾向就是它的平衡常数，即酸解离常数 Ka，而 pKa 是它的负对数。更强的酸常数更大，因而 pKa 更小。反过来读才是有用的方向：**一个基团的 pKa 就是它半电离时的那个 pH，所以 pKa 说的是这个基团在哪个 pH 上改变电荷——而蛋白质真正会作出反应的，也就只有侧链电荷的改变这一件事。**",
      src: "A p.57, Fig. 2-15",
      see: [{ id: "3-4", en: "how enzyme activity varies with pH, and what a pH optimum is", cn: "酶活性随 pH 如何变化，以及所谓最适 pH 是什么" }]
    },
    {
      link_en: "and a pKa is not looked up, it is produced by one experiment",
      link_cn: "而 pKa 不是查来的，是由一个实验做出来的",
      en: "A titration curve is that experiment: take a measured volume of the weak acid, add a strong base of known concentration in small increments until the acid is used up, and plot the pH against the amount added. **Amounts are counted in equivalents, one equivalent being the quantity of a substance that will react with, or supply, one mole of hydrogen ions** — so one mole of an acid with a single ionizable proton is one equivalent, and one mole of glycine, which has two ionizable groups, is two. That is why glycine's curve has two steps rather than one, and each step carries an inflexion point corresponding to the pK of one of its two groups.",
      cn: "滴定曲线就是这个实验：取一定体积的弱酸，把已知浓度的强碱分小份加进去，直到酸被消耗完，再以 pH 对所加碱量作图。**用量以当量计，一当量是指能与一摩尔氢离子反应、或能提供一摩尔氢离子的那么多物质——所以只有一个可电离质子的酸，一摩尔就是一当量；而甘氨酸有两个可电离基团，一摩尔就是两当量。**这正是甘氨酸的曲线有两级而不是一级的原因，每一级上都有一个拐点，对应它两个基团之一的 pK。",
      src: "A p.58, Fig. 2-16 · B §2.1.2, p.23, Obr. 2.1"
    },
    {
      link_en: "two readings come off that one curve, and they are opposite in character",
      link_cn: "从这同一条曲线上能读下两个数，而它们性质相反",
      recall_en: "the two inflexion points of the step above, now given numbers and a midpoint between them",
      recall_cn: "上一步那两个拐点，现在被安上数值，中间还多出一个点",
      en: "At the midpoint of each step half that group has dissociated, so proton donor and proton acceptor are present at equal concentration and the pH is numerically equal to the pK; that midpoint is also the flattest part of the curve, where added acid or base moves the pH least. Glycine's carboxyl group has pKa 2.34 and its amino group pKa 9.60. **The isoelectric point, pI, is the pH at which the molecule carries no net charge, and it is reached both by taking the mean of the two pKa values, (2.34 + 9.60)/2 = 5.97**, and by reading the pH at half the total consumption of titration agent — the same point by two routes, sitting on the steep stretch between the two steps where buffering is at its weakest.",
      cn: "在每一级的中点上，该基团有一半已经解离，因此质子供体与受体等浓度共存，pH 在数值上等于 pK；这个中点同时是曲线最平坦处，在那里加酸或加碱对 pH 的推动最小。甘氨酸羧基的 pKa 是 2.34，氨基的 pKa 是 9.60。**等电点 pI 是分子净电荷为零时的那个 pH，而它有两条到达路线：取两个 pKa 的平均值，(2.34 + 9.60)/2 = 5.97；或者读滴定试剂总消耗量一半处的 pH——同一个点，两种读法；它落在两级之间那段陡坡上，而那里正是缓冲能力最弱的地方。**",
      src: "A p.57, Fig. 2-15, pp.58–59 · B §2.1.2, p.23",
      beyond: true,
      beyondNote: "The midpoint-equals-pK result and the buffering regions are on A pp.58-59; the isoelectric point itself belongs to §3.1 there and to B §2.1.2. Setting the maximum-buffering pK against the minimum-buffering pI is an inference drawn here, not a sentence on either page."
    },
    {
      link_en: "the flat part of that curve is the whole reason a cell can hold a pH still",
      link_cn: "曲线上那段平坦，正是细胞能把 pH 摁住的全部理由",
      en: "A buffer is a solution holding a weak acid and its own salt at comparable concentrations, so proton donor and proton acceptor are present at once; add H+ and the acceptor takes it up, add OH− and the donor gives a proton away to neutralise it, and what changes is the ratio of the two forms rather than the pH. The arithmetic is the Henderson-Hasselbalch equation, pH = pKa + log([proton acceptor]/[proton donor]): equal concentrations make the ratio 1 and the pH equal to the pKa, a ratio of ten to one adds exactly 1 and a ratio of one to ten subtracts exactly 1. So **the buffering region is one pH unit either side of the pKa for an exact reason — that is the span over which the two forms stay within a factor of ten of each other** — and choosing a buffer means choosing an acid whose pKa sits near the pH you want to hold.",
      cn: "缓冲液是同时含有一个弱酸及其盐、两者浓度相当的溶液，因而质子供体与受体同时在场；加入 H+，受体把它接走，加入 OH−，供体让出一个质子把它中和掉，变的是两种形态的比例，而不是 pH。算术就是 Henderson-Hasselbalch 方程 pH = pKa + log([质子受体]/[质子供体])：等浓度时比值为 1、pH 等于 pKa；比值十比一时正好加 1，比值一比十时正好减 1。**所以缓冲区间是 pKa 上下各一个 pH 单位，理由是精确的——那正是两种形态彼此相差不超过十倍的那一段；而选缓冲液就是选一个 pKa 靠近你想维持的那个 pH 的酸。**",
      src: "A pp.60–61, Fig. 2-17"
    },
    {
      link_en: "a body runs two of them, and the second one has something no bench buffer has",
      link_cn: "身体运行着两套，而第二套有一样实验台上的缓冲液绝对没有的东西",
      en: "The phosphate buffer works inside cells: dihydrogen phosphate H2PO4− as donor, monohydrogen phosphate HPO4^2− as acceptor, pKa 6.86, which by the one-unit rule covers roughly 5.9 to 7.9 and so covers cytoplasm at 6.9 and extracellular fluid at 7.4. Blood plasma is buffered in part by carbonic acid H2CO3 and bicarbonate HCO3−, holding it near 7.4. A buffer in a flask is closed and can never have more donor than it started with, whereas **carbonic acid stands in equilibrium with carbon dioxide dissolved in plasma and thence with the gas reserve in the lungs — so the fastest way to change blood pH is to change a breathing rate**. Push it too far either way and the failure has two names: a pH driven below normal is acidosis, above normal is alkalosis, and the clinical line for acidosis sits at 7.35, a few hundredths below the normal 7.4. In uncontrolled diabetes mellitus, fat is broken down for fuel faster than the products can be used, β-hydroxybutyric acid and acetoacetic acid accumulate, plasma pH falls below 7.35, and severe acidosis brings headache, drowsiness, nausea and vomiting, then stupor, coma and convulsions — because a shifted pH changes the charge on ionizable groups, an enzyme with the wrong charges on its active site works badly, and enough enzymes working badly is a coma. That chain is why measuring pH is one of the commonest procedures in biochemistry and why the pH of blood and of urine is read in diagnosis: a small movement in pH is a large movement in the structure and function of a protein. How constant the value is was once tested on the people asking the question — a century ago the physiologist J. B. S. Haldane and his colleague H. W. Davies studied the control of blood pH by experimenting on themselves rather than on animals, Haldane remarking that one might of course have tried a rabbit first, but that it is difficult to be sure how a rabbit feels at any time.",
      cn: "磷酸盐缓冲体系在细胞内工作：磷酸二氢根 H2PO4− 作供体、磷酸一氢根 HPO4^2− 作受体，pKa 为 6.86；按上下各一个单位的规则，它覆盖大约 5.9 到 7.9，正好罩住细胞质的 6.9 和细胞外液的 7.4。血浆的缓冲有一部分由碳酸 H2CO3 与碳酸氢根 HCO3− 承担，把血浆维持在 7.4 附近。**烧瓶里的缓冲液是封闭的，供体一开始有多少就永远只有多少；而碳酸与溶解在血浆中的二氧化碳处于平衡，再与肺内的气体储备处于平衡——所以改变血液 pH 最快的办法是改变呼吸频率。**朝任一方向推过了头，失守的方式有两个名字：pH 被压到正常以下叫酸中毒，被推到正常以上叫碱中毒；酸中毒的临床界线在 7.35，比正常的 7.4 只低几个百分点。在未受控制的糖尿病中，脂肪被当作燃料分解的速度快过产物被利用的速度，β-羟丁酸与乙酰乙酸堆积，血浆 pH 跌破 7.35；严重的酸中毒依次带来头痛、嗜睡、恶心、呕吐，继而木僵、昏迷和惊厥——因为 pH 一移动，可电离基团的电荷就变，活性中心带错电荷的酶就干不好活，而够多的酶干不好活就是昏迷。正是这条链条，使测 pH 成为生物化学中最常做的操作之一，也使诊断时要看血液和尿液的 pH：pH 上一点小小的移动，就是蛋白质结构与功能上一大步的移动。这个值有多恒定，最早是拿提问的人自己来试的——一个世纪前，生理学家 J. B. S. Haldane 与同事 H. W. Davies 研究血液 pH 的调控时，拿自己而不是拿动物做实验；Haldane 打趣说，当然本可以先试试兔子，但任何时候都很难确定一只兔子的感受。",
      src: "A pp.61–64",
      see: [{ id: "8-4-4-3", en: "where β-hydroxybutyrate and acetoacetate come from — acetyl-CoA and the ketone bodies", cn: "β-羟丁酸和乙酰乙酸从哪来 —— 乙酰-CoA 与酮体" }]
    },
    {
      link_en: "and the same numbers, used the other way round, are what every protein separation grabs hold of",
      link_cn: "而同一批数字反过来用，正是每一种蛋白质分离方法要抓的把手",
      recall_en: "the side-chain sort of the first steps was a sort by charge; here that sort becomes a measurement",
      recall_cn: "开头几步按电荷给侧链分的组，在这里变成了一次测量",
      en: "Side chains carry ionizable groups with different pKa values, so different amino acids change charge at different pH values and come out with different pI values; a curve for acetic acid, dihydrogen phosphate and ammonium has the same shape in each case and is merely slid along the axis to 4.76, 6.86 and 9.25, which is all a pKa ever settles. **At its own pI a molecule carries no net charge and stops moving in an electric field altogether**, and because no two amino acids share a pI, that difference is what ion-exchange chromatography — separation on a material that binds charged molecules — and electrophoresis — separation by driving charged molecules through a gel in an electric field — actually exploit.",
      cn: "侧链上带着 pKa 各不相同的可电离基团，所以不同氨基酸在不同 pH 下改变电荷，得到的 pI 也各不相同；把乙酸、磷酸二氢根和铵离子放在同一条 pH 轴上滴定，曲线形状完全一样，只是沿轴滑到 4.76、6.86 和 9.25——而 pKa 所决定的从来就只有这一件事。**在自己的 pI 上，一个分子净电荷为零，在电场中彻底不动；而由于没有两种氨基酸的 pI 相同，正是这个差别被离子交换色谱（在能结合带电分子的材料上分离）和电泳（用电场驱动带电分子穿过凝胶）真正利用起来。**",
      src: "A p.59, Fig. 2-17 · B §2.1.2, p.23",
      see: [
        { id: "L-3-3-1", en: "ion exchange, isoelectric focusing and electrophoresis worked through on a real purification", cn: "在一次真实纯化中走完离子交换、等电聚焦与电泳" },
        { id: "2-2-6", en: "the same separations applied to whole proteins, and how a protein's mass is measured", cn: "同样的分离用在完整蛋白质上，以及蛋白质的质量怎么测" }
      ]
    },
    {
      link_en: "a table of pKa values invites one more question, and the answer is a habit worth having",
      link_cn: "一张 pKa 表还引出一个问题，而答案是一个值得养成的习惯",
      en: "A pKa printed in a table is not a constant of nature. Like every equilibrium constant it is defined for a stated concentration and temperature, and concentrated buffers do not behave ideally. Dihydrogen phosphate is quoted both as 7.2 and as 6.86: the higher figure is an apparent pKa at 25 °C uncorrected for buffer concentration, the lower one is corrected and measured at the physiological 37 °C, which is why Lehninger uses 6.86 throughout. **If a pKa you are given differs from the one you remember, the honest answer is to ask under what conditions it was measured, not to assume one of them is wrong.** Carbonic acid carries the same discrepancy.",
      cn: "表上印的 pKa 不是自然常数。和每一个平衡常数一样，它是在给定的浓度和温度下定义的，而浓缓冲液并不理想。磷酸二氢根既被写作 7.2 也被写作 6.86：高的那个是 25 °C 下未对缓冲液浓度作校正的表观 pKa，低的那个已作校正、并在生理的 37 °C 下测定 —— 这就是 Lehninger 全书采用 6.86 的原因。**如果给你的 pKa 和你记得的不一样，诚实的回答是反问它在什么条件下测的，而不是假定其中一个是错的。**碳酸也有同样的差异。",
      src: "A p.59"
    },
    {
      link_en: "three side chains have been named repeatedly without being followed, and they are special in three different ways",
      link_cn: "有三条侧链一直被点到却没有被追下去，而它们「特殊」的方式各不相同",
      en: "Tryptophan, histidine and cysteine each earn their own place, and sorting out how makes the whole set easier to hold. **A side chain can be special optically, electrostatically or covalently: tryptophan by its flat conjugated ring, histidine by a pKa near 6.0, cysteine by a thiol that forms a covalent bond.** Asked why an amino acid matters, decide first which of those three it is. Tryptophan's constants, for a question that asks flatly: Mr 204, pK1 2.38, pK2 9.39, pI 5.89, and no side-chain pKa at all — that absence is the reason it is grouped with the nonpolar ones. It is also one of only five amino acids that are both ketogenic and glucogenic, because the carbons of the indole ring leave by more than one route, and it gives the glyoxylic acid reaction, a colour reaction that the indole ring produces and the other nineteen do not.",
      cn: "色氨酸、组氨酸、半胱氨酸各自值得单独一说，而把「怎么特殊」理清楚，整组就好记了。**侧链特殊的方式有三种：光学上、静电上、共价上——色氨酸靠它扁平的共轭环，组氨酸靠接近 6.0 的 pKa，半胱氨酸靠能形成共价键的巯基。**被问到某个氨基酸为什么重要时，先判断它属于哪一种。色氨酸的常数，供直接被问时用：Mr 204、pK1 2.38、pK2 9.39、pI 5.89，没有侧链 pKa —— 正是这个「没有」使它被归进非极性那一组。它还是仅有的五种同时生酮又生糖的氨基酸之一，因为吲哚环的碳不止一条去路；它也给出乙醛酸反应，那是吲哚环产生而其余十九种不产生的一个显色反应。",
      src: "A p.59 · B §2.1.1, p.21"
    },
    {
      link_en: "the flat ring does one more thing, and it is structural rather than analytical",
      link_cn: "那个扁平的环还做一件事，而这件事是结构性的，不是分析上的",
      recall_en: "the same two residues whose absorbance at 280 nm measures protein concentration",
      recall_cn: "就是那两个在 280 nm 处的吸收被用来测蛋白浓度的残基",
      en: "Tryptophan and tyrosine act as a membrane anchor, which is Lehninger's own term for it. **They sit at the depth where the acyl chains of a membrane meet the head groups, interacting with the lipid phase and with the water on both sides at once**, so a membrane protein is held at a particular depth rather than merely being inside the bilayer. A residue that can talk to both phases is exactly what an interface needs.",
      cn: "色氨酸和酪氨酸充当膜锚（membrane anchor），这是 Lehninger 自己用的词。**它们待在膜上酰基链与头部基团相接的那个深度，同时与脂相和两侧的水相打交道；于是膜蛋白是被固定在一个特定深度上，而不只是「在双层里面」。**一个能同时和两相对话的残基，正是界面需要的东西。",
      src: "A p.59"
    },
    {
      link_en: "and the same ring is a raw material as well, which is where most of tryptophan's importance actually sits",
      link_cn: "而同一个环还是一种原料，色氨酸的分量其实大半在这里",
      recall_en: "the same indole ring that absorbs at 280 nm and anchors a membrane protein",
      recall_cn: "就是那个在 280 nm 处吸光、又把膜蛋白锚住的吲哚环",
      en: "Hydroxylated and then decarboxylated, tryptophan becomes serotonin, a neurotransmitter, and serotonin is converted onward into melatonin, the hormone the pineal gland — a small gland in the brain — releases on a daily cycle. **Tyrosine and tryptophan are the two amino acids that the whole class of amino-acid-derived hormones reduces to, so an entire hormone family traces back to two side chains.** Bacteria guard the supply of this expensive ring with two layers of control over the trp operon, the cluster of genes that build tryptophan: a repressor protein that switches the genes off when tryptophan is already plentiful, and attenuation, a second layer that aborts transcription part-way through when the cell has enough — and the two together span a 700-fold range of synthesis rate.",
      cn: "先羟化、再脱羧，色氨酸变成血清素（serotonin，一种神经递质）；血清素再往下被转化成褪黑素——松果体（脑中的一个小腺体）按昼夜节律释放的那种激素。**酪氨酸和色氨酸，是整整一类氨基酸衍生激素最终归结到的那两种氨基酸；一整个激素家族追溯回去，只剩这两条侧链。**细菌对这个昂贵环的供应加了两层控制，都作用在 trp 操纵子（合成色氨酸的那一簇基因）上：一个阻遏蛋白，在色氨酸已经很充足时把这些基因关掉；以及衰减作用（attenuation），第二层，在细胞够用时让转录半路中止——两者合起来跨越 700 倍的合成速率范围。",
      src: "A p.821",
      beyond: true,
      beyondNote: "Serotonin and melatonin made from tryptophan are on A p.821. The two-layer control of the trp operon and the 700-fold range are not on that page; they are standard and commonly examined, and are carried here because the tryptophan entry raises them."
    },
    {
      link_en: "the second of the three side chains is special electrostatically, and one number explains where it turns up",
      link_cn: "三条侧链中的第二条特殊在静电上，而它出现在哪里，由一个数字决定",
      recall_en: "the imidazole ring and its pKa near 6.0, from the sort in the opening steps",
      recall_cn: "开头分组里那个咪唑环，以及它接近 6.0 的 pKa",
      en: "Count the histidines in enzyme active sites and there are far more of them than histidine's share of the residues in proteins would lead you to expect. **Histidine is over-represented in active sites well beyond its abundance, and the reason is a single number: at pH 7 it is the only side chain sitting half loaded with a proton.** Catalysis — the business of making a reaction go faster — very often comes down to moving a proton from one place to another, and a group that is half protonated can hand one over or take one up at once, without waiting for the pH around it to change.",
      cn: "把酶活性中心里的组氨酸数一数，会发现它出现的次数远多于组氨酸在蛋白质残基中所占的比例所能预期的。**组氨酸在活性中心里的出现频率，远高于它在蛋白质中的丰度；原因只是一个数字——在 pH 7 下，它是唯一一条「半装载」着质子的侧链。**催化——也就是让一个反应跑得更快这件事——极其频繁地归结为把一个质子从一处搬到另一处；而一个半质子化的基团可以当场给出或接受一个质子，不必等周围的 pH 改变。",
      src: "A p.59",
      beyond: true,
      beyondNote: "A p.59 gives histidine's pKa near 6.0 and the fact that it is the only side chain appreciably ionized at pH 7. The generalisation that histidine is therefore over-represented in active sites is drawn from that here rather than printed on the page."
    },
    {
      link_en: "histidine's pKa near 6.0 is why it turns up wherever a proton has to move",
      link_cn: "组氨酸的 pKa 接近 6.0，这就是它出现在一切需要搬运质子之处的原因",
      en: "One decarboxylation turns histidine into histamine, a powerful vasodilator of animal tissues and the mediator of the allergic response, which also stimulates acid secretion in the stomach. **Cimetidine is a structural analogue of histamine that blocks its receptor and heals duodenal ulcers by shutting that acid secretion down** — an amino acid, one enzyme, a receptor and a blockbuster drug, the whole line running from one imidazole ring. The same ring appears as the catalytic triad Ser195–His57–Asp102 of chymotrypsin, where its job is to turn a serine hydroxyl into a usable nucleophile, which that hydroxyl cannot be on its own because its pKa is far too high.",
      cn: "一步脱羧就把组氨酸变成组胺 —— 动物组织中强效的血管舒张剂、过敏反应的介质，同时还刺激胃酸分泌。**西咪替丁是组胺的结构类似物，阻断其受体、关掉胃酸分泌，从而治愈十二指肠溃疡 —— 一个氨基酸、一个酶、一个受体、一款重磅药，整条线索都出自一个咪唑环。**同一个环也出现在胰凝乳蛋白酶的催化三联体 Ser195–His57–Asp102 中，它在那里的职务是把一个丝氨酸羟基变成可用的亲核体 —— 单靠这个羟基自己做不到，因为它的 pKa 太高。",
      src: "A p.822 · A p.59"
    },
    {
      link_en: "and in the globin story three different histidines turn up, which is where the confusion lives",
      link_cn: "而在珠蛋白的故事里出现了三个不同的组氨酸，混淆就出在这里",
      en: "The three are told apart by what each one touches. **The proximal His — His93, also written F8 — is the residue that occupies one of the haem iron's two perpendicular coordination bonds and so anchors the haem to the protein**, while the distal His — His64, or E7 — is the one that never touches the iron at all and instead hydrogen-bonds the bound oxygen, raising O₂ affinity about 500-fold while doing nothing for CO. That is what makes the enhancement selective. His146, HC3 of the β subunit, is a third residue again — the Bohr-effect one, forming an ion pair that stabilises the T state. The same metal-coordinating chemistry is put to deliberate use in a His-tag: six or more histidines appended to a recombinant protein bind immobilised Ni²⁺ tightly enough to purify it from a crude extract in one step.",
      cn: "这三个哪一个都可能被问到，所以要分清。**近端 His（His93 / F8）占据血红素铁两个垂直配位键之一，把血红素锚在蛋白上；远端 His（His64 / E7）从不接触铁，而是与已结合的氧形成氢键，使 O₂ 亲和力提高约 500 倍，却对 CO 毫无作用。**这正是这种增强具有选择性的原因。β 亚基上的 His146（HC3）又是第三个残基 —— 属于 Bohr 效应，形成离子对稳定 T 态。同一套金属配位化学被刻意拿来用，就是 His-tag：接在重组蛋白上的六个或更多组氨酸与固定化 Ni²⁺ 结合得足够牢，可以从粗提物里一步纯化出来。",
      src: "A p.59",
      see: [
        { id: "L-5-1-1", en: "the proximal and distal histidines at work through a whole binding curve", cn: "近端与远端组氨酸在整条结合曲线上的作用" },
        { id: "L-6-4-1", en: "the catalytic triad worked through as a mechanism", cn: "催化三联体作为一套机制被完整走一遍" }
      ]
    },
    {
      link_en: "the third of the three is special covalently, and that one bond is unlike every other side-chain contact",
      link_cn: "三者中的第三个特殊在共价上，而那一根键与其余所有侧链接触都不同",
      en: "Cysteine's sulfhydryl group contributes only modest polarity — the book calls cysteine an outlier on that count — but it is uniquely reactive, because it can be oxidised into a bond with a second cysteine. **A disulfide bridge is the only covalent bond formed between two side chains in a protein: it cannot be undone by buffer or detergent, and breaking it takes chemistry** — performic acid to oxidise, or DTT or β-mercaptoethanol to reduce, followed by capping the freed thiols. Getting the pairs right is a real problem rather than an automatic one, and the evidence for that is an enzyme built to fix it: protein-disulfide-isomerase shuffles the bonds until the native set is reached and clears out intermediates carrying the wrong cross-links.",
      cn: "半胱氨酸的巯基提供的极性相当有限 —— 教材在这一点上称它为「异类」—— 但它的反应性独一无二，因为它能被氧化、与第二个半胱氨酸成键。**二硫桥是蛋白质中唯一由两条侧链之间形成的共价键：它无法被缓冲液或去污剂解开，要断它得动化学 —— 过甲酸氧化，或 DTT、β-巯基乙醇还原，随后还要把释出的巯基封端。**「配对配得对」是个真问题而不是自动发生的事，证据就是有一个酶专为此而生：蛋白二硫键异构酶不断试换，直到达成天然的那一组，并清除带错误交联的中间体。",
      src: "A p.59"
    },
    {
      link_en: "and in its reduced state the same thiol does two jobs a cell cannot do without",
      link_cn: "而处在还原态时，同一个巯基做着两件细胞离不开的事",
      en: "Free cysteine thiol is the cell's principal reducing agent, carried mostly as glutathione. **Glutathione is not only a defence against peroxide: acting through glutaredoxin it is a second source of reducing equivalents for ribonucleotide reductase**, so the same thiol that destroys an oxidant also supplies the electrons that turn ribonucleotides into deoxyribonucleotides. That is the committed step towards DNA. What happens when the supply fails is the commonest enzymopathy in humans: glucose-6-phosphate dehydrogenase deficiency affects some 400 million people, and without NADPH the glutathione pool cannot be held reduced, so an oxidant challenge — fava beans, 24 to 48 hours — lyses erythrocytes. It stays common because the malaria parasite is itself very sensitive to oxidative damage.",
      cn: "游离的半胱氨酸巯基是细胞主要的还原剂，主要以谷胱甘肽的形式携带。**谷胱甘肽不只是对付过氧化物的防御：它经谷氧还蛋白起作用，是核糖核苷酸还原酶的第二个还原当量来源 —— 于是同一个销毁氧化剂的巯基，也提供了把核糖核苷酸变成脱氧核糖核苷酸的电子。**那是通向 DNA 的承诺步骤。供应一旦失灵会怎样，就是人类最常见的酶病：葡萄糖-6-磷酸脱氢酶缺乏症影响约四亿人，没有 NADPH 就无法把谷胱甘肽池维持在还原态，于是一次氧化冲击 —— 蚕豆，24 到 48 小时 —— 就使红细胞溶解。它之所以一直常见，是因为疟原虫本身对氧化损伤极为敏感。",
      src: "A p.830 · A p.59",
      see: [
        { id: "L-22-3-1", en: "ribonucleotide reductase and the whole deoxyribonucleotide route", cn: "核糖核苷酸还原酶与整条脱氧核苷酸路线" }
      ]
    }
  ]
};

/* ----------------------------------------------------------- 肽与蛋白质 ---- */
window.BIOLITE_SPINE["key:peptides-and-proteins"] = {
  assumed: ["protein", "molecule", "atom", "water", "cell", "carbon", "hydrogen",
            "oxygen", "nitrogen", "sulfur", "phosphate", "iron", "copper", "zinc",
            "manganese", "molybdenum", "electron", "blood", "milk", "egg", "collagen",
            "enzyme", "amino acid", "side chain (r)", "carboxyl group", "amino group",
            "alanine", "glycine", "serine", "threonine", "tyrosine", "asparagine",
            "cysteine", "proline", "oxygen carrier", "cytochrome", "cell cycle",
            "embryo", "connective tissue", "mucus", "biochemistry", "signal",
            "hydrolysis", "ester bond", "covalent bond", "glucose", "galactose",
            "imidazole", "guanidino group", "sulfhydryl group", "porphyrin"],
  nodeTitle_en: "Peptides and proteins",
  nodeTitle_cn: "肽与蛋白质",
  title_en: "One bond repeated, an unbranched chain with two different ends, and the non-peptide passenger that almost every protein turns out to be carrying",
  title_cn: "一种键反复重复、一条两端不同的不分支的链，以及几乎每个蛋白质身上都带着的那位非肽乘客",
  terms: [
    { en: "peptide bond", cn: "肽键",
      def_en: "The amide bond joining the carboxyl group of one amino acid to the α-amino group of the next, formed with the loss of a molecule of water. Repeating it gives an unbranched chain with two chemically different ends.",
      def_cn: "把一个氨基酸的羧基与下一个氨基酸的 α-氨基相连的酰胺键，形成时脱去一分子水。反复重复它，得到一条两端在化学上不同的、不分支的链。" },
    { en: "protection of amino groups", cn: "氨基保护",
      def_en: "Acylation of an α-amino group with an acyl halide or an anhydride, which blocks it so a bond can be made elsewhere. It is what makes a peptide of chosen sequence possible instead of a polymer of random order.",
      def_cn: "用酰卤或酸酐酰化 α-氨基，把它封住，好让别处得以成键。正是它使按指定序列合成肽成为可能，而不是得到顺序随机的聚合物。" },
    { en: "N-terminal and C-terminal amino acid", cn: "N 端与 C 端氨基酸",
      def_en: "The residue with a free amino group and the residue with a free carboxyl group. By convention a sequence is written from the first to the second, which is what gives a sequence its direction.",
      def_cn: "带游离氨基的那个残基，和带游离羧基的那个残基。按惯例序列从前者写到后者，序列的方向就是这样来的。" },
    { en: "oligopeptide / polypeptide / protein", cn: "寡肽／多肽／蛋白质",
      def_en: "Naming conventions by length: not more than 10 residues is an oligopeptide, more than 10 a polypeptide, more than 100 a protein. The chemistry of the bond does not change at either boundary.",
      def_cn: "按长度定的命名惯例：不超过 10 个残基为寡肽，多于 10 个为多肽，超过 100 个为蛋白质。肽键的化学在这两个界线上都没有变化。" },
    { en: "main chain and side chains", cn: "主链与侧链",
      def_en: "A polypeptide has a regularly repeating part, the main chain, identical in every protein, and a variable part made of the side chains R. The order of those side chains is what distinguishes one protein from another.",
      def_cn: "多肽有一个规则重复的部分（主链），在每个蛋白质里都相同；还有一个由侧链 R 组成的可变部分。使一个蛋白质区别于另一个的，正是这串侧链的顺序。" },
    { en: "simple and conjugated proteins", cn: "简单蛋白质与结合蛋白质",
      def_en: "A simple protein yields only amino acids on hydrolysis; a conjugated one carries further components as well, held covalently or by non-covalent interactions. On current ideas the conjugated case is the rule and the simple one the exception.",
      def_cn: "简单蛋白质水解后只产生氨基酸；结合蛋白质则另带其他组分，结合方式可为共价或非共价。按当前的看法，结合蛋白质才是常态，简单蛋白质反倒是例外。" },
    { en: "N-glycosidic and O-glycosidic linkage", cn: "N-糖苷键与 O-糖苷键",
      def_en: "The two ways a short sugar chain is attached to a protein: N-glycosidically through the amide nitrogen of asparagine, as in blood serum glycoproteins, and O-glycosidically through the hydroxyl of serine or threonine, as in blood group substances and mucins.",
      def_cn: "短糖链连接到蛋白质上的两种方式：N-糖苷键经由天冬酰胺的酰胺氮（如血清糖蛋白），O-糖苷键经由丝氨酸或苏氨酸的羟基（如血型物质与黏蛋白）。" },
    { en: "phosphoprotein", cn: "磷蛋白",
      def_en: "A protein carrying a phosphate group covalently, most often by an ester bond to the hydroxyl of serine, threonine or tyrosine. Phosphorylation by protein kinases runs cell-cycle regulation and signalling; phosvitin and casein also serve as phosphate depots.",
      def_cn: "共价带有磷酸基的蛋白质，最常见的是通过酯键连于丝氨酸、苏氨酸或酪氨酸的羟基。蛋白激酶介导的磷酸化驱动细胞周期调控与信号转导；卵黄高磷蛋白与酪蛋白还充当磷酸储库。" },
    { en: "ferritin / transferrin / ceruloplasmin", cn: "铁蛋白／转铁蛋白／铜蓝蛋白",
      def_en: "Three metalloproteins with three jobs: ferritin, Mr 46 000, stores ferric ions up to 30 % of its own mass; transferrin in blood plasma transports Fe³⁺ with high affinity; ceruloplasmin in blood serum transports copper ions.",
      def_cn: "三个金属蛋白，三种分工：铁蛋白（Mr 46 000）储存铁离子，可达自身质量的 30%；血浆中的转铁蛋白以高亲和力转运 Fe³⁺；血清中的铜蓝蛋白转运铜离子。" },
    { en: "FeS proteins", cn: "铁硫蛋白",
      def_en: "Proteins in which iron ions sit in a complex with –SH groups and sulfide ions. Demonstrated in bacterial and plant ferredoxins and significant in biological oxidation-reduction reactions.",
      def_cn: "铁离子与 –SH 基及硫离子形成配合物的蛋白质。已在细菌和植物铁氧还蛋白中得到证实，在生物氧化还原反应中意义重大。" },
    { en: "heme", cn: "血红素",
      def_en: "The complex of an iron ion with porphyrin, a large flat ring that holds a metal ion at its centre. Proteins carrying it are the hemoproteins. Unlike a complex made with amino acid side chains, it survives cleavage of the chain as a separate molecule.",
      def_cn: "铁离子与卟啉（一个能在中心夹住金属离子的大而扁平的环）形成的配合物。带有它的蛋白质就是血红素蛋白。与由氨基酸侧链形成的配合物不同，它在链被切断后仍作为独立分子存在。" }
  ],
  steps: [
    {
      recall_en: "the carboxyl group and the amino group that every one of the 20 carries, now used to join two of them",
      recall_cn: "那 20 种人人都有的羧基和氨基，现在被用来把其中两个连起来",
      en: "**In proteins the carboxyl group of one amino acid is joined to the α-amino group of the next by a peptide bond, which is an amide bond**, and making a dipeptide out of two amino acids is accompanied by the loss of one molecule of water.",
      cn: "**在蛋白质里，一个氨基酸的羧基通过肽键与下一个氨基酸的 α-氨基相连，肽键就是一个酰胺键；而由两个氨基酸生成二肽，伴随着失去一分子水。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "making that bond on purpose, in a flask, needs one precaution",
      link_cn: "要在烧瓶里有意做出这个键，需要一道防备",
      en: "A carboxyl group can be converted into an amide, an ester, an acyl halide or an azide, and all four conversions are used to make the carboxyl end reactive enough to join. That alone is not enough. To protect a group means to block it chemically so it cannot react while a bond is being made somewhere else, and to unblock it afterwards; an α-amino group is protected by acylation with an acyl halide or an anhydride. With both ends of every amino acid left free, joining them gives a polymer in random order, so **blocking the amino groups that must not react is what turns a synthesis into a peptide of chosen sequence**.",
      cn: "羧基可以被转变成酰胺、酯、酰卤或叠氮化物，这四种转变都用来把羧基一端变得足够活泼、好去成键。光有这一步还不够。「保护」一个基团，指的是先用化学手段把它封住，使它在别处成键期间无法反应，事后再解封；α-氨基的保护办法是用酰卤或酸酐把它酰化。**如果每个氨基酸的两端都放着不管，把它们连起来只会得到顺序随机的聚合物；所以把那些不该反应的氨基封住，才把一次合成变成一条按指定序列排好的肽。**",
      src: "B §2.1.3, p.24",
      beyond: true,
      beyondNote: "p.24 states that acylation is used for protecting amino groups without saying what protection buys. The reason given here — a random polymer against a chosen sequence — is standard synthetic material rather than a sentence on the page."
    },
    {
      link_en: "repeat the bond many times and one property of the product follows at once",
      link_cn: "把这个键重复很多次，产物的一个性质立刻就跟着出来",
      en: "**A polypeptide chain is many amino acid residues joined by peptide bonds, and it is unbranched: each residue is attached to at most two neighbours**, so there is exactly one path from one end of the chain to the other and no side branches of chain to keep track of.",
      cn: "**多肽链由许多通过肽键相连的氨基酸残基构成，而且它不分支：每个残基最多接两个邻居，所以从链的一端到另一端只有唯一一条路径，也没有另外分叉出去的链需要追踪。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "and it has ends, for a reason that comes straight from the building unit",
      link_cn: "而它是有末端的，原因直接来自建筑单元本身",
      en: "**Because each building unit of a peptide chain has two functional groups, –NH₂ and –COOH, the chain also has two ends, and those two ends are chemically different from each other.** One of them still carries a free amino group and the other still carries a free carboxyl group, so the two cannot be swapped or confused.",
      cn: "**由于肽链的每个建筑单元都有 –NH₂ 和 –COOH 两个官能团，链也就有两个末端，而这两个末端在化学上彼此不同。**其中一端仍带着游离的氨基，另一端仍带着游离的羧基，所以两者既换不得也混不得。",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "two different ends mean the sequence has a direction, and one convention fixes it",
      link_cn: "两个不同的末端意味着序列有方向，而一条惯例把它定死",
      recall_en: "the two ends of the step above, now used to fix which way a sequence is read",
      recall_cn: "上一步那两个末端，现在被用来固定序列的阅读方向",
      en: "By convention a sequence is written beginning with the amino acid that has a free amino group, called the N-terminal amino acid, and ending with the one that has a free carboxyl group, the C-terminal amino acid — so **a sequence carries a direction, and Ala-Gly is a different molecule from Gly-Ala**.",
      cn: "**按惯例，序列从带游离氨基的那个氨基酸写起，它称为 N 端氨基酸，写到带游离羧基的那个为止，后者称为 C 端氨基酸——所以序列是带方向的，Ala-Gly 和 Gly-Ala 是两个不同的分子。**",
      src: "B §2.1.4, p.26, Obr. 2.4"
    },
    {
      link_en: "looking along the finished chain, it separates into two parts of quite different character",
      link_cn: "沿着接好的链看过去，它分成性质迥异的两部分",
      recall_en: "the same split as in a free amino acid: identical backbone, everything distinctive in R",
      recall_cn: "和游离氨基酸里是同一种划分：主链完全相同，独特的东西全在 R 上",
      en: "A polypeptide chain consists of a regularly repeating part, the main chain, and a variable part made of the various side chains R — so **the main chain is the same in every protein there is, and the order of the side chains hanging off it is the only thing that makes one protein different from another**.",
      cn: "**多肽链由一个规则重复的部分（主链）和一个可变部分（各种侧链 R）共同构成——所以主链在世上每一个蛋白质里都一样，而挂在它上面的那串侧链顺序，是一个蛋白质区别于另一个的唯一来源。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "the names such a chain is given according to how long it is",
      link_cn: "按长度给这样一条链起的名字",
      en: "Two amino acids form a dipeptide, three a tripeptide, **a chain of not more than 10 is an oligopeptide, one of more than 10 is a polypeptide, and a chain of more than 100 residues is designated a protein** — these are naming conventions about length, and nothing in the chemistry of the bond changes at 10 or at 100.",
      cn: "**两个氨基酸构成二肽，三个构成三肽；不超过 10 个的链称为寡肽，多于 10 个的称为多肽，而超过 100 个残基的链被称为蛋白质——这些都是按长度定下的命名惯例，在 10 或 100 这两处，键的化学没有发生任何变化。**",
      src: "B §2.1.4, p.26"
    },
    {
      link_en: "so much for what a protein is made of. It usually turns out to be carrying something else as well",
      link_cn: "蛋白质由什么做成，说到这里。但它身上通常还带着别的东西",
      en: "Simple proteins yield only amino acids on hydrolysis, meaning they hold only the peptide component; conjugated proteins hold further components besides amino acids. **On current ideas a non-peptide component is a regular part of the vast majority of proteins, which makes the so-called simple proteins the exception rather than the norm.** Some proteins hold that extra component by a covalent bond and others by non-covalent interactions, and the ratio of peptide to non-peptide component differs considerably from one protein to another.",
      cn: "简单蛋白质水解后只产生氨基酸，也就是说它只含肽这一个组分；结合蛋白质则在氨基酸之外还含有别的组分。**按当前的看法，非肽组分是绝大多数蛋白质的常规组成部分，所以所谓「简单蛋白质」才是例外，而不是常态。**有些蛋白质靠共价键抓住那个额外组分，另一些靠非共价的相互作用；而肽组分与非肽组分之间的数量比，在不同蛋白质之间相差极大。",
      src: "B §2.2.5, p.36"
    },
    {
      link_en: "first class of passenger: sugar",
      link_cn: "第一类乘客：糖",
      en: "A saccharide is a sugar and an oligosaccharide is a short chain of them. Glycoproteins carry a saccharide part covalently bound to the peptide chain, and where the oligosaccharide chain is short and often branched that bond is made in one of exactly two ways. **N-glycosidically, through the amide nitrogen of asparagine, as in the glycoproteins of blood serum; or O-glycosidically, through the hydroxyl group of serine or threonine**, as in the glycoproteins of blood group substances and of the mucins of mucus.",
      cn: "糖类（saccharide）就是糖，寡糖（oligosaccharide）是一小段糖链。糖蛋白带有一个共价结合于肽链的糖部分；在寡糖链较短、且常常分支的情形里，这个结合恰好只有两种方式。**N-糖苷键结合，经由天冬酰胺的酰胺氮，血清糖蛋白即属此类；或 O-糖苷键结合，经由丝氨酸或苏氨酸的羟基，血型物质和黏液中黏蛋白的糖蛋白即属此类。**",
      src: "B §2.2.5, p.36",
      see: [{ id: "L-7-4-1", en: "why a short sugar chain on a protein surface can carry information", cn: "蛋白质表面一小段糖链为什么能携带信息" }]
    },
    {
      link_en: "the same class has two members whose sugar is longer or different",
      link_cn: "同一类里还有两个成员，接的糖更长或者不同",
      en: "Glycosaminoglycans are long sugar chains built from repeating units. **Proteoglycans carry glycosaminoglycan molecules covalently bound to the protein and are components of connective tissue**, while collagen carries D-galactose, or a disaccharide of D-galactose and D-glucose, bound predominantly to hydroxyproline or hydroxylysine.",
      cn: "糖胺聚糖是由重复单元构成的长糖链。**蛋白聚糖带有共价结合于蛋白质分子上的糖胺聚糖分子，是结缔组织的组分；而胶原带有 D-半乳糖，或由 D-半乳糖与 D-葡萄糖构成的二糖，主要结合在羟脯氨酸或羟赖氨酸上。**",
      src: "B §2.2.5, p.36",
      beyond: true,
      beyondNote: "p.36 names glycosaminoglycans without defining them. The one-clause description — long sugar chains of repeating units — is standard and is added so the sentence stands alone."
    },
    {
      link_en: "second class, and it is the only passenger that can be put on and taken off again",
      link_cn: "第二类，也是唯一一个能装上去又卸下来的乘客",
      en: "In eukaryotes **the phosphate group of a phosphoprotein is bound to the peptide chain covalently, most often by an ester bond to the hydroxyl group of serine, threonine or tyrosine**, and the phosphorylation of proteins by protein kinases — enzymes that attach a phosphate group — plays a very important role in the regulation of the cell cycle and in cell signalling. Because the group goes on and comes off, one protein can be switched between two states rather than made afresh each time.",
      cn: "**在真核生物中，磷蛋白上的磷酸基以共价方式结合于肽链，最常见的是通过酯键连到丝氨酸、苏氨酸或酪氨酸的羟基上；而蛋白激酶（负责装上磷酸基的酶）对蛋白质的磷酸化，在细胞周期调控和细胞信号转导中起着非常重要的作用。**正因为这个基团装得上也卸得下，同一个蛋白可以在两种状态之间来回切换，而不必每次重新造一个。",
      src: "B §2.2.5, p.36",
      see: [{ id: "L-12-8-1", en: "protein kinases running the cell cycle", cn: "蛋白激酶如何驱动细胞周期" }]
    },
    {
      link_en: "phosphate has a second job with nothing to do with signalling",
      link_cn: "磷酸还有第二份工作，与信号毫无关系",
      en: "**Phosphoproteins also have a depot function, storing enough phosphate for a rapidly developing embryo and young organism**: phosvitin, the depot protein of egg yolk, has a relative molecular mass of 35 000 and carries about 100 phosphate residues per peptide chain, and milk contains the soluble phosphoprotein casein.",
      cn: "**磷蛋白还有储存功能，为迅速发育的胚胎和幼体备下足够的磷酸：卵黄的储存蛋白卵黄高磷蛋白，相对分子质量为 35 000，每条肽链带有约 100 个磷酸残基；乳中则含有可溶的磷蛋白酪蛋白。**",
      src: "B §2.2.5, p.36"
    },
    {
      link_en: "third class carries a metal, and it starts with the same storage idea",
      link_cn: "第三类带的是金属，而它从同样的「储存」思路开始",
      recall_en: "the same depot job as phosvitin one step up, with a metal in place of phosphate",
      recall_cn: "和上一步卵黄高磷蛋白是同一份储存工作，只是把磷酸换成了金属",
      en: "The carboxyl, imidazole and sulfhydryl groups of proteins can form complexes, especially with heavy metals, and the metalloproteins that result cover three separate jobs. **Ferritin, of relative molecular mass 46 000, holds ferric ions up to 30 per cent of its own mass and releases Fe³⁺ when it is needed; transferrin, a blood plasma protein, binds Fe³⁺ with high affinity and transports it**; and ceruloplasmin, in blood serum, is the transport protein for copper ions.",
      cn: "蛋白质上的羧基、咪唑基和巯基都能形成配合物，尤其是与重金属；由此得到的金属蛋白分担三种不同的差事。**铁蛋白的相对分子质量为 46 000，所含铁离子可达自身质量的 30%，需要时便释放出 Fe³⁺；转铁蛋白是一种血浆蛋白，以高亲和力结合 Fe³⁺ 并把它运走；而血清中的铜蓝蛋白是铜离子的转运蛋白。**",
      src: "B §2.2.5, p.37"
    },
    {
      link_en: "iron has a third arrangement, and this one does chemistry rather than storage or transport",
      link_cn: "铁还有第三种排布，这一种做的是化学，不是储存也不是搬运",
      en: "**In some proteins iron ions sit in a complex with –SH groups and sulfide ions, and such proteins are designated FeS proteins**; these complexes were demonstrated in bacterial and plant ferredoxins and are significant in biological oxidation-reduction reactions, the reactions in which electrons are handed from one molecule to another. A metal need not be abundant to matter, either: some metalloproteins contain a very small quantity of a heavy metal ion whose presence is necessary for the protein to work at all — carboxypeptidase contains Zn²⁺, pyruvate decarboxylase contains Mn²⁺, and xanthine oxidase contains a molybdenum ion.",
      cn: "**在某些蛋白质中，铁离子与 –SH 基和硫离子形成配合物，这类蛋白称为铁硫蛋白；这类配合物已在细菌和植物的铁氧还蛋白中得到证实，并在生物氧化还原反应（即电子从一个分子交到另一个分子的反应）中具有重要意义。**金属也不必多才要紧：有些金属蛋白只含极少量的重金属离子，而这些离子的存在是该蛋白能否工作的前提——羧肽酶含 Zn²⁺，丙酮酸脱羧酶含 Mn²⁺，黄嘌呤氧化酶含一个钼离子。",
      src: "B §2.2.5, p.37",
      see: [{ id: "L-19-1-1", en: "FeS centres passing electrons along the respiratory chain", cn: "铁硫中心在呼吸链上传递电子" }]
    },
    {
      link_en: "last class, and it differs from every metal case above in one respect",
      link_cn: "最后一类，它与上面所有金属的情形在一点上不同",
      recall_en: "the complexes of the previous two steps are made with the amino acid side chains themselves; this one is not",
      recall_cn: "前两步里的配合物都是与氨基酸侧链本身形成的；这一个不是",
      en: "A porphyrin is a large flat ring molecule that holds a metal ion at its centre. **A complex of an iron ion with porphyrin is called heme, and proteins carrying it are the hemoproteins — the oxygen carriers, the cytochromes and the heme enzymes**. A complex made with the functional groups of amino acids falls apart the moment the peptide chain is cleaved, whereas heme is a separate molecule that survives on its own — which is why it can be extracted, measured and put back.",
      cn: "卟啉是一个大而扁平的环状分子，能在其中心夹住一个金属离子。铁离子与卟啉形成的配合物称为血红素，带着它的蛋白质就是血红素蛋白——氧载体、细胞色素和血红素酶。**由氨基酸官能团形成的配合物，在肽链一被切断就散架；而血红素是一个独立的分子，能够单独存在下来——所以它可以被提取、被测定、也可以再装回去。**",
      src: "B §2.2.5, p.37",
      see: [
        { id: "L-5-1-1", en: "why oxygen needs a caged iron, and what the protein around the heme is for", cn: "氧为什么需要一个被笼住的铁，血红素外面那圈蛋白质又是干什么的" },
        { id: "L-22-3-1", en: "how a porphyrin ring is built, and what goes wrong in porphyria", cn: "卟啉环是怎么造出来的，以及卟啉症出了什么问题" }
      ]
    },
    {
      link_en: "which leaves one question about the peptide part that nothing so far has touched",
      link_cn: "这样一来，关于肽的那一部分还剩一个问题，前面一步也没碰过",
      recall_en: "the main chain is the same everywhere and only the order of side chains differs, from six steps up",
      recall_cn: "第六步说过：主链处处相同，只有侧链的顺序不同",
      en: "Hydrolysis breaks a chain into the individual residues that formed it, and doing that reports which kinds are present and how many of each. **Knowing the kind and number of residues does not characterise a peptide chain at all, because two chains built from exactly the same residues in a different order are two different molecules** — so the order itself has to be determined, and that order is what the next topic is about.",
      cn: "水解会把一条链拆成构成它的一个个残基，这样做能报告其中有哪些种类、每种各有多少。**光知道残基的种类和数目，根本不足以表征一条肽链，因为用完全相同的残基按不同顺序搭出来的两条链是两个不同的分子——所以顺序本身必须被测定，而下一个题目讲的正是这个顺序。**",
      src: "B §2.2.1, p.26"
    }
  ]
};

/* --------------------------------------------------------- 一级结构 ---- */
window.BIOLITE_SPINE["key:protein-primary-structure"] = {
  assumed: ["protein", "polypeptide", "peptide bond", "amino acid", "side chain (r)",
            "residue", "gene", "DNA", "genome", "genetic code", "enzyme", "molecule",
            "atom", "ion", "charge", "electron", "vacuum", "chromatography",
            "electrophoresis", "conformation", "domain", "cell", "blood", "muscle",
            "haemoglobin", "valine", "glutamic acid", "cysteine", "lysine", "arginine",
            "methionine", "leucine", "isoleucine", "phenylalanine", "tryptophan",
            "tyrosine", "aspartic acid", "glutamic acid", "insulin", "yeast",
            "hydrolysis", "biochemistry", "helium", "argon", "laser", "gel",
            "N-terminal and C-terminal amino acid", "main chain and side chains"],
  nodeTitle_en: "Primary structure and how a sequence is read",
  nodeTitle_cn: "一级结构，以及序列是怎么读出来的",
  title_en: "The order of the residues is the bridge from DNA to a working shape, and it is now read off a mass rather than off a chemical reaction",
  title_cn: "残基的顺序，是从 DNA 通往一个能干活的形状的那座桥；而今天它是从质量上读出来的，不再是从化学反应上",
  terms: [
    { en: "primary structure", cn: "一级结构",
      def_en: "The order of the amino acids covalently bound in a peptide chain, together with the placement of the disulfide bridges. It is the connecting link between the information in DNA and the three-dimensional structure that conditions biological function.",
      def_cn: "肽链中共价结合的氨基酸的顺序，连同二硫桥的位置。它是 DNA 中的信息与决定生物学功能的三维结构之间的连接环节。" },
    { en: "disulfide bond", cn: "二硫键",
      def_en: "The covalent S—S link between two cysteine side chains; the joined pair is a cystine. It can tie together two points on one chain or hold two separate chains together, and it must be broken before a protein can be cut into orderable pieces.",
      def_cn: "两个半胱氨酸侧链之间的共价 S—S 连接，连成的一对叫胱氨酸。它既能拴住同一条链上的两处，也能把两条链拴在一起；在把蛋白切成可排序的片段之前必须先打断它。" },
    { en: "molecular pathology", cn: "分子病理学",
      def_en: "The field linking a change of amino acid sequence to abnormal protein function and serious disease. Sickle cell anaemia is its worked case.",
      def_cn: "把氨基酸序列的改变与蛋白质功能异常及严重疾病联系起来的领域。镰状细胞贫血是它的经典案例。" },
    { en: "Edman degradation", cn: "Edman 降解",
      def_en: "A two-step chemical cycle developed by Pehr Edman that removes and identifies one residue at a time from the amino terminus of a chain. Sanger's insulin sequencing was built on it.",
      def_cn: "Pehr Edman 开发的两步化学循环，每次从链的氨基末端移去并鉴定一个残基。Sanger 测定胰岛素序列即以此为基础。" },
    { en: "trypsin", cn: "胰蛋白酶",
      def_en: "A protease that hydrolyses only those peptide bonds whose carbonyl group is contributed by Lys or Arg, regardless of chain length or sequence, so fragmentation is reproducible. Three Lys/Arg residues usually give four peptides, all but one ending in Lys or Arg.",
      def_cn: "一种蛋白酶，只水解羰基由 Lys 或 Arg 提供的肽键，与链长和序列无关，因此片段化可重复。三个 Lys/Arg 残基通常给出四个肽段，除一个外都以 Lys 或 Arg 结尾。" },
    { en: "cyanogen bromide", cn: "溴化氰",
      def_en: "A reagent that cleaves a chain on the carbonyl side of Met. Among the standard cleavage agents it is the only one that is a chemical rather than an enzyme.",
      def_cn: "在 Met 的羰基侧切断肽链的试剂。在标准切割试剂里，它是唯一一个不是酶而是化学品的。" },
    { en: "MALDI", cn: "基质辅助激光解吸电离",
      def_en: "Matrix-assisted laser desorption/ionization. The protein sits in a light-absorbing matrix and a short laser pulse ionises it and knocks it into the vacuum intact. Introduced in 1988, one of the two ways a macromolecule reaches the gas phase.",
      def_cn: "基质辅助激光解吸／电离。蛋白质置于吸光基质中，一束短脉冲激光将其离子化并完整地打进真空。1988 年问世，是大分子进入气相的两条路之一。" },
    { en: "ESI", cn: "电喷雾电离",
      def_en: "Electrospray ionization. Solution is forced through a needle at high electrical potential into a mist of charged microdroplets; the solvent evaporates and leaves multiply charged gas-phase ions, giving a family of peaks whose neighbours differ by one charge and one proton.",
      def_cn: "电喷雾电离。溶液在高电位下被压过针头，形成带电微液滴的细雾；溶剂蒸发后留下气相中的多电荷离子，给出一族相邻两峰相差一个电荷、一个质子的峰。" },
    { en: "b-type and y-type ions", cn: "b 型与 y 型离子",
      def_en: "Fragments named by which side kept the charge when a peptide bond broke: b if the amino-terminal side kept it, y if the carboxyl-terminal side did. Successive peaks within one set differ by one residue, and those mass differences spell the sequence.",
      def_cn: "按肽键断裂后哪一侧保留电荷来命名的碎片：氨基末端一侧保留电荷的是 b，羧基末端一侧的是 y。同一组内相继的峰相差一个残基，这些质量差即拼出序列。" },
    { en: "proteome", cn: "蛋白质组",
      def_en: "The entire complement of proteins in a cell, together with estimates of their relative abundance. An entire yeast one can be analysed by LC-MS/MS in under an hour.",
      def_cn: "细胞中全部蛋白质的总和，连同它们相对丰度的估计。一个完整的酵母蛋白质组可以由 LC-MS/MS 在一小时内分析完。" }
  ],
  steps: [
    {
      recall_en: "the order that the last step of the previous topic said had to be determined",
      recall_cn: "上一个题目最后一步说必须测定的那个顺序",
      en: "**The order of the amino acids covalently bound in a peptide chain — the amino acid sequence — is designated the primary structure**, and this book counts the placement of the disulfide bridges in it as well. A disulfide bridge is a covalent S—S link joining two cysteine side chains, and it can tie together two points of a chain that lie far apart in the sequence, so both kinds of covalent connection are recorded at this first level.",
      cn: "**肽链中共价结合的那些氨基酸的顺序，也就是氨基酸序列，被称为一级结构；本书还把二硫桥的位置一并算在里面。**二硫桥是把两条半胱氨酸侧链共价连起来的 S—S 键，它能把序列上相距很远的两个位点系到一处——所以这两类共价连接都记在第一个层次上。",
      src: "B §2.2.1, p.26 · B §2.2.3, p.33",
      beyond: true,
      beyondNote: "p.33 names the disulfide bridge without defining it. The one-clause description — a covalent link between two cysteine side chains — is standard and is added so the sentence stands alone. Counting the placement of disulfide bridges as part of the primary structure is this book's convention; other treatments put it elsewhere."
    },
    {
      link_en: "four reasons make that order worth the work. The first is the one the other three lean on",
      link_cn: "有四个理由使这个顺序值得费力去测。第一个是其余三个所依托的那一个",
      en: "Analysing the relation between an amino acid sequence and the three-dimensional structure of a protein reveals the rules that govern how a peptide chain arranges itself in space, so **a sequence is the connecting link between the genetic information held in DNA and the three-dimensional structure — and it is that structure, not the sequence, that conditions biological function**.",
      cn: "**分析氨基酸序列与蛋白质三维结构之间的关系，可以揭示支配肽链在空间中如何排布的规则；因此序列就是 DNA 所含遗传信息与三维结构之间的连接环节——而决定生物学功能的是那个三维结构，不是序列本身。**",
      src: "B §2.2.1, pp.26–27"
    },
    {
      link_en: "second reason, one level below structure",
      link_cn: "第二个理由，比结构再低一层",
      en: "**Knowledge of an amino acid sequence belongs among the fundamental data needed for solving the mechanism of action of a protein** — for instance the catalytic mechanism of an enzyme, which is a protein that speeds up one specific reaction. Without the sequence there is no way to say which residue does what.",
      cn: "**了解一个氨基酸序列，属于阐明一个蛋白质作用机制所需的基础数据之一——例如酶的催化机制，酶就是一种能加速某个特定反应的蛋白质。**没有序列，就无从指出哪个残基在做哪件事。",
      src: "B §2.2.1, p.27",
      see: [{ id: "L-6-4-1", en: "a catalytic mechanism worked out residue by residue", cn: "一个催化机制被逐个残基地解出来" }]
    },
    {
      link_en: "third reason, and it shows how little has to change for everything to fail",
      link_cn: "第三个理由，它说明只要改动多小的一点，整件事就会失败",
      en: "Molecular pathology is the field in which a change of amino acid sequence is linked to abnormal function of a protein and to serious disease. **Sickle cell anaemia is the worked case: the glutamic acid at position 6 of the β-chain of haemoglobin, the oxygen-carrying protein of red blood cells, is replaced by valine** — one residue out of many hundreds, and the protein behaves differently.",
      cn: "分子病理学这个领域，把氨基酸序列的改变与蛋白质功能异常及严重疾病联系起来。**镰状细胞贫血就是那个具体案例：血红蛋白（红细胞中负责携氧的蛋白质）β 链第 6 位的谷氨酸被缬氨酸取代——几百个残基里只换了一个，蛋白质的行为就变了。**",
      src: "B §2.2.1, p.27",
      see: [{ id: "L-5-1-1", en: "haemoglobin's oxygen binding, and what the position-6 substitution actually does to it", cn: "血红蛋白的氧结合，以及第 6 位的替换究竟对它做了什么" }]
    },
    {
      link_en: "fourth reason, and it reads a sequence as a record of the past",
      link_cn: "第四个理由，它把序列当作一份过去的记录来读",
      en: "**Knowledge of the amino acid sequence of a protein reveals much of its evolutionary history, because proteins are similar in amino acid sequence only if they have a common ancestor** — which makes sequence similarity evidence of shared descent, and says nothing on its own about similarity of function.",
      cn: "**了解一个蛋白质的氨基酸序列，可以揭示它演化史的许多内容，因为只有在拥有共同祖先的情况下，蛋白质的氨基酸序列才会彼此相似——所以序列相似是共同来源的证据，它本身对功能是否相似只字未提。**",
      src: "B §2.2.1, p.27"
    },
    {
      link_en: "so where does a sequence actually come from today?",
      link_cn: "那么今天一个序列究竟是从哪来的？",
      en: "Sequences are most often derived indirectly from the DNA sequences held in genome databases: find the gene, read its bases three at a time, and write out the protein it encodes. Direct sequencing of a protein is provided by mass spectrometry. **The protein-chemistry methods that follow are what you reach for when you need the protein itself rather than the gene's prediction** — to find which parts were cut off after the chain was made, which residues carry a chemical modification, or which protein a particular spot in a gel actually is, and a gene sequence answers none of those three.",
      cn: "今天的序列大多是从基因组数据库里的 DNA 序列间接推导出来的：找到基因，三个碱基一组地读下去，把它编码的蛋白写出来。而对蛋白质的直接测序，由质谱提供。**下面这些蛋白质化学方法，是当你需要蛋白质本身、而不是基因给出的预测时才用的——找出链造好之后被切掉了哪一段、哪些残基带着化学修饰、胶上某个点究竟是哪个蛋白；这三件事，基因序列一件也答不了。**",
      src: "A p.91, §3.4"
    },
    {
      link_en: "it did not start there. It started with one protein and one very stubborn person",
      link_cn: "它并不是从这里起步的，而是起步于一个蛋白质和一个非常执拗的人",
      en: "**The first protein sequence ever determined was bovine insulin, by Frederick Sanger in 1953, and his route was built on Edman degradation** — a two-step chemical cycle developed by Pehr Edman that removes and identifies one residue at a time from the amino terminus of a chain. Many researchers were surprised, having thought that determining a polypeptide's sequence would be hopeless. The same year gave the structure of DNA, and the genetic code linking the two followed barely a decade later.",
      cn: "**第一个被测定的蛋白质序列是牛胰岛素，由 Frederick Sanger 于 1953 年完成；他走的路线建立在 Edman 降解之上——那是 Pehr Edman 开发的两步化学循环，每次从链的氨基末端移去并鉴定一个残基。**当时许多研究者感到意外，他们本以为测定一条多肽的序列是件没指望的事。同一年 DNA 的结构被解出，把两者联系起来的遗传密码在此后仅十年就被阐明。",
      src: "A p.91",
      see: [{ id: "L-8-3-1", en: "the other method that carries Sanger's name, which reads DNA rather than protein", cn: "另一套同样叫 Sanger 的方法，读的是 DNA 而不是蛋白质" }]
    },
    {
      link_en: "reading from one end means first knowing which end that is",
      link_cn: "既然要从一端读起，就得先知道哪一端是哪一端",
      recall_en: "the free α-amino group that marks the N-terminal end, from the peptide-bond topic",
      recall_cn: "肽键那个题目里标出 N 端的那个游离 α-氨基",
      en: "A polypeptide has a free α-amino group at one end, and that group can be tagged with a reagent that sticks to it permanently: 1-fluoro-2,4-dinitrobenzene, dansyl chloride, or dabsyl chloride. Dansyl and dabsyl are worth choosing for one practical reason — they have useful absorbance and fluorescence at visible wavelengths, so the labelled residue can be seen and followed through the rest of the procedure — but **these reagents also label the ε-amino group on the side chain of every lysine in the chain, so an amino-terminal label is not automatically a unique one**.",
      cn: "一条多肽的一端有一个游离的 α-氨基，这个基团可以用一种会永久黏上去的试剂来标记：1-氟-2,4-二硝基苯、丹磺酰氯或 dabsyl 氯。**丹磺酰和 dabsyl 值得选，理由只有一个而且很实际——它们在可见波长有可用的吸收和荧光，所以被标记的那个残基看得见、在后续步骤里跟得上；但这些试剂同样会标记链中每一个赖氨酸侧链上的 ε-氨基，所以「氨基末端标记」并不自动等于「唯一标记」。**",
      src: "A pp.91–92"
    },
    {
      link_en: "and before cutting anything, one kind of bond has to go",
      link_cn: "而在动刀之前，有一类键必须先处理掉",
      recall_en: "the disulfide bridges counted into the primary structure in the first step of this chain",
      recall_cn: "这条链第一步里被算进一级结构的那些二硫桥",
      en: "Break the disulfide bonds first, or the pieces you cut stay tied to each other and come off as one lump. There are two routes. **Oxidise a cystine with performic acid and you get two cysteic acid residues — irreversible, one step, finished**; or reduce it with dithiothreitol or β-mercaptoethanol to give two free Cys residues, and then block the reactive –SH groups by carboxymethylation with iodoacetate, because without that blocking step the bond simply re-forms. Either way the observable result is the same: subunits come apart and stay apart.",
      cn: "先把二硫键打断，否则你切出来的片段仍然彼此拴着，出来是一坨。有两条路线。**用过甲酸氧化一个胱氨酸，得到两个半胱磺酸残基——不可逆、一步、完事；或者用二硫苏糖醇或 β-巯基乙醇把它还原成两个游离的 Cys 残基，随后必须用碘乙酸做羧甲基化把活泼的 –SH 封住，因为少了封闭这一步，这个键会重新长回来。**两条路线可观测的结果一样：亚基散开，并且保持散开。",
      src: "A p.92"
    },
    {
      link_en: "now the chain can be cut, and the point of a good cut is that it is predictable",
      link_cn: "现在可以切链了，而好切法的意义在于它可以被预测",
      en: "A protease is an enzyme that hydrolyses peptide bonds, and the useful ones cleave only next to a particular residue, so the same protein always breaks into the same pieces. **Trypsin hydrolyses only those peptide bonds whose carbonyl group is contributed by a Lys or an Arg residue**, regardless of the length or the sequence of the chain — so a polypeptide containing three Lys and/or Arg residues usually yields four smaller peptides, and all except one of them end in Lys or Arg. The exception is the piece that carried the original carboxyl terminus.",
      cn: "蛋白酶是水解肽键的酶，而有用的那几种只在特定残基旁边切，所以同一个蛋白每次都断成同样的片段。**胰蛋白酶只水解羰基由 Lys 或 Arg 残基提供的肽键，与链的长度和序列无关——所以一条含三个 Lys 和／或 Arg 的多肽通常产生四个较小的肽段，且其中除一个之外全部以 Lys 或 Arg 结尾。**那个例外，就是带着原来羧基末端的那一段。",
      src: "A p.92"
    },
    {
      link_en: "there is a whole set of these, and that is what makes fragments orderable",
      link_cn: "这样的试剂有一整套，而正是这一整套让片段可以被排出顺序",
      en: "Chymotrypsin cuts on the carbonyl side of Phe, Trp and Tyr, the three aromatic residues; S. aureus V8 protease cuts on the carbonyl side of Asp and Glu, and Asp-N-protease cuts those same two residues on the amino side; pepsin cuts on the amino side of Leu, Phe, Trp and Tyr; endoproteinase Lys-C cuts on the carbonyl side of Lys alone; and cyanogen bromide cuts on the carbonyl side of Met, the only one of them that is a chemical reagent rather than an enzyme. **Cut the same protein two different ways and the two sets of fragments overlap each other — and an overlap fixes which fragment follows which**, which is how short pieces are assembled back into one long sequence.",
      cn: "糜蛋白酶切在 Phe、Trp、Tyr 这三个芳香族残基的羰基侧；金黄色葡萄球菌 V8 蛋白酶切在 Asp、Glu 的羰基侧，Asp-N 蛋白酶切同样这两个残基但在氨基侧；胃蛋白酶切在 Leu、Phe、Trp、Tyr 的氨基侧；内切蛋白酶 Lys-C 只切 Lys 的羰基侧；溴化氰切在 Met 的羰基侧，而且它是其中唯一一个不是酶、而是化学试剂的。**把同一个蛋白用两种方式切开，两组片段会彼此重叠——而一处重叠就固定了哪一段接在哪一段后面，短片段就是这样被重新拼回一条长序列的。**",
      src: "A p.92, Table 3-6"
    },
    {
      link_en: "so much for the chemistry. The instrument that displaced it had one problem to solve first",
      link_cn: "化学部分到此为止。取代它的那台仪器，先得解决一个问题",
      en: "A mass spectrometer ionises a sample in a vacuum and measures its mass-to-charge ratio, m/z, from how the ion moves in an electric or magnetic field; time-of-flight instruments time how long each ion takes to reach a detector, while an Orbitrap traps the ions in orbit between an outer barrel-shaped electrode and an inner spindle-shaped one and reads m/z from the frequency of that orbit. Because the measurement happens in the gas phase, the technique was long limited to small molecules: a protein put into a vacuum by ordinary heating falls apart. **In 1988 two methods solved that — in MALDI the protein sits in a light-absorbing matrix and a short laser pulse ionises it and knocks it into the vacuum intact**, and in ESI the solution is pushed through a needle at high electrical potential into a fine mist of charged microdroplets whose solvent evaporates, leaving multiply charged protein ions in the gas phase.",
      cn: "质谱仪在真空中把样品离子化，再根据离子在电场或磁场中的运动测出质荷比 m/z；飞行时间型仪器计时每个离子到达检测器所用的时间，而 Orbitrap 把离子束缚在外部桶形电极与内部纺锤形电极之间的轨道上，从轨道频率读出 m/z。因为测量发生在气相，这项技术长期只能用于小分子：靠普通加热把蛋白质弄进真空，它会散架。**1988 年有两种方法解决了这件事——MALDI 让蛋白质待在一层吸光基质里，一束短脉冲激光把它离子化并完整地打进真空；ESI 则把溶液在高电位下压过针头，分散成带电微液滴的细雾，溶剂蒸发之后气相中就留下带多个电荷的蛋白质离子。**",
      src: "A pp.93–94"
    },
    {
      link_en: "what comes out of an ESI run looks wrong at first, and that wrongness is the method",
      link_cn: "ESI 跑出来的东西第一眼看着不对劲，而这份「不对劲」正是方法本身",
      en: "As a protein enters the gas phase it picks up a variable number of protons from the solvent, so different molecules of the same protein carry different positive charges and one protein gives a whole family of peaks rather than a single peak. That family has a strict internal structure — **each successive peak differs from its neighbour by one charge and by one mass unit, that one extra proton — so the mass of the protein can be calculated from any two neighbouring peaks**, with precision enough to tell apart two proteins differing by a single proton.",
      cn: "蛋白质进入气相时会从溶剂上捡到数目不定的质子，所以同一种蛋白的不同分子带的正电荷各不相同，一个蛋白给出的是一整族峰，而不是单独一个峰。**这一族峰内部有严格的结构——每个峰与相邻的峰恰好相差一个电荷、一个质量单位，也就是那多出来的一个质子——所以蛋白质的质量可以由任意两个相邻峰算出来，精度高到能分辨两个仅相差一个质子的蛋白质。**",
      src: "A p.94, Fig. 3-28"
    },
    {
      link_en: "a mass is not a sequence. Getting a sequence takes two spectrometers in a row",
      link_cn: "质量不等于序列。要拿到序列，得把两台质谱串起来",
      en: "**Tandem mass spectrometry, written MS/MS, is one instrument carrying two mass filters in series with a collision cell between them**: the first filter lets through a single type of peptide and nothing else, a high-energy impact in the cell breaks each individual molecule in about one place only, and the second filter measures the m/z of every fragment produced. Helium or argon is bled into the collision cell to supply those impacts, and most of the breaks fall at a peptide bond. The protein is digested with a protease first, often trypsin, because its cuts are the most predictable.",
      cn: "**串联质谱（写作 MS/MS）是一台仪器里串接着两个质量过滤器、中间夹一个碰撞室：第一个过滤器只放行一种肽，别的一律不放；碰撞室里的一次高能碰撞使每个分子平均只断在一个地方；第二个过滤器再测出所产生的每一个碎片的 m/z。**碰撞室内通入氦或氩来提供这些碰撞，而多数断裂落在肽键上。样品先要用蛋白酶消化，常用胰蛋白酶，因为它切得最可预测。",
      src: "A p.95, Fig. 3-29"
    },
    {
      link_en: "and here is how a list of fragment masses turns into letters",
      link_cn: "接下来，一串碎片质量是怎么变成字母的",
      en: "When a peptide bond breaks, one of the two pieces keeps the charge: fragments that kept it on the amino-terminal side are b-type ions, those that kept it on the carboxyl-terminal side are y-type ions, and within one set each successive peak has one amino acid less than the one before it. **The difference in mass between one peak and the next names the residue that was lost, because every amino acid has its own mass** — so the run of differences read along one set spells out the sequence, and because a break usually generates both a b-set and a y-set from the same peptide, each set checks the other residue by residue. One ambiguity survives all of it: leucine and isoleucine are structural isomers with the same mass, so no mass measurement can separate them and a better spectrometer will not help.",
      cn: "肽键断开时，两块碎片中有一块保留电荷：把电荷保留在氨基末端一侧的是 b 型离子，保留在羧基末端一侧的是 y 型离子；在同一组内，每个相继的峰都比前一个少一个氨基酸。**一个峰与下一个峰之间的质量差就指认出丢掉的是哪个残基，因为每种氨基酸都有自己的质量——所以沿着一组读下来的一串差值就把序列拼了出来；而由于一次断裂通常从同一段肽上同时产生 b 组和 y 组，两组可以逐个残基地互相核对。**只有一处不确定性挺过了这一切：亮氨酸和异亮氨酸是质量相同的结构异构体，任何质量测量都分不开它们，换一台更好的质谱也没用。",
      src: "A p.95, Fig. 3-29"
    },
    {
      link_en: "and the reason all of this displaced the chemistry is scale",
      link_cn: "而这一整套之所以取代了前面的化学，靠的是规模",
      recall_en: "the genome database of the sixth step is not a rival to the spectrometer; this last step uses both at once",
      recall_cn: "第六步里的基因组数据库并不是质谱的对手 —— 这最后一步是两者一起用的",
      en: "Put liquid chromatography in front of a tandem spectrometer, LC-MS/MS, and a whole cell extract can be worked on at once: digest all of it with trypsin, let the chromatography deliver the resolved peptides into the instrument one after another, and match each sequence that comes out against the known genomic sequence to identify which protein it came from. MS/MS scans of dozens of peptides are generated in less than a second and **an entire yeast proteome — a proteome being the whole complement of proteins in a cell — is analysed in less than an hour**, with relative abundance coming out of the same run for nothing, because a more abundant protein yields more copies of its peptides. The identification step matches a measured peptide against a sequence predicted from a gene, so the two sources answer different halves of one question: a genome says what a cell could make, and a spectrometer says what is present in this sample, in what amount, and with what modifications.",
      cn: "在串联质谱前面接上液相色谱，就是 LC-MS/MS，于是可以一次处理整个细胞抽提物：把它全部用胰蛋白酶消化，让色谱把分离好的肽段一段接一段送进仪器，再把每一段读出来的序列与已知的基因组序列比对，确定它来自哪个蛋白。**几十个肽段的 MS/MS 扫描可以在不到一秒内完成，一个完整的酵母蛋白质组（蛋白质组即细胞中全部蛋白质的总和）可以在不到一小时内分析完；相对丰度在同一次运行里白送，因为含量越高的蛋白产生的肽段拷贝就越多。**鉴定这一步是拿实测的肽段去比对由基因预测出的序列，所以两个来源回答的是同一个问题的两半：基因组说的是这个细胞能造什么，质谱说的是这份样品里实际有什么、有多少、带着什么修饰。",
      src: "A p.95",
      see: [
        { id: "L-3-3-1", en: "how a protein is purified and sized before any of this can start", cn: "在这一切开始之前，蛋白质是怎么被纯化和测大小的" },
        { id: "L-13-5-1", en: "what a measured proteome is then used for", cn: "测出来的蛋白质组接下来被拿去做什么" }
      ]
    }
  ]
};

/* ------------------------------------------------- 构象原理与二级结构 ---- */
window.BIOLITE_SPINE["key:protein-structure-overview"] = {
  assumed: ["protein", "molecule", "atom", "water", "carbon", "nitrogen", "oxygen",
            "hydrogen", "electron", "entropy", "proline", "glycine", "cysteine",
            "lysine", "vitamin C", "collagen", "peptide bond", "polypeptide",
            "amino acid", "side chain (r)", "residue", "main chain and side chains",
            "primary structure", "disulfide bond", "charge", "biochemistry",
            "hydrogen bond", "van der waals interactions", "ionic interaction",
            "N-terminal and C-terminal amino acid", "scurvy", "helix"],
  nodeTitle_en: "Principles of conformation and the elements of secondary structure",
  nodeTitle_cn: "构象原理与二级结构的要素",
  title_en: "A backbone of rigid flat plates hinged only at the α-carbons, the three regular shapes it settles into, and a folding driven by water rather than by the chain",
  title_cn: "一副只在 α 碳处有铰链的硬平板主链、它会落进的三种规则形状，以及一场由水而非由链推动的折叠",
  terms: [
    { en: "conformation", cn: "构象",
      def_en: "The spatial arrangement of the atoms of a peptide chain. A randomly arranged or extended chain mostly shows no biological activity, so protein function is entirely dependent on conformation.",
      def_cn: "肽链各原子的空间排布。随机排布或被拉直的链通常没有生物活性，所以蛋白质的功能完全取决于构象。" },
    { en: "amide plane", cn: "酰胺平面",
      def_en: "The flat unit formed by the six atoms around a peptide bond, a consequence of the partial double-bond character of its C–N bond. A backbone made of these planes is hinged only at the α-carbons.",
      def_cn: "肽键周围六个原子构成的平面单元，源于其 C–N 键的部分双键性质。由这些平面串成的主链只在 α 碳处有铰链。" },
    { en: "cis-trans isomerism", cn: "顺反异构",
      def_en: "The two fixed arrangements available when the peptide C–N bond cannot rotate: cis puts the two neighbouring α-carbons on the same side of the bond, trans on opposite sides. In globular proteins trans unambiguously predominates and cis occurs practically only next to proline.",
      def_cn: "肽键 C–N 不能旋转时可选的两种固定排布：顺式把相邻两个 α 碳放在键的同一侧，反式放在两侧。球状蛋白中反式明确占优，顺式实际上只出现在脯氨酸旁边。" },
    { en: "α-helix", cn: "α-螺旋",
      def_en: "A right-handed helix with 3.6 residues per turn and a pitch of about 0.54 nm, a rise of 0.15 nm per residue, stabilised by hydrogen bonds running parallel to the axis between the C=O of residue n and the N–H of residue n+4. Side chains point outwards; proline breaks it.",
      def_cn: "右手螺旋，每圈 3.6 个残基，螺距约 0.54 nm，即每残基上升 0.15 nm；由第 n 残基 C=O 与第 n+4 残基 N–H 之间、与螺旋轴平行的氢键稳定。侧链朝外；脯氨酸使它中断。" },
    { en: "β-structure", cn: "β-结构",
      def_en: "Extended chains lying side by side and held by hydrogen bonds running between chains, perpendicular to the chain direction. It occurs in parallel and antiparallel arrangements, and side chains alternate above and below the sheet.",
      def_cn: "伸展的链并排排列，由链与链之间、与链方向垂直的氢键维持。有平行与反平行两种排列，侧链交替位于片层上下两侧。" },
    { en: "collagen helix", cn: "胶原螺旋",
      def_en: "Three left-handed polyproline-II-like chains wound into a right-handed superhelix, requiring glycine at every third position in a Gly-X-Y repeat and held by hydrogen bonds between chains. Hydroxylation of its proline and lysine needs vitamin C.",
      def_cn: "三条左手的类聚脯氨酸 II 型链缠成一个右手超螺旋，要求每第三位是甘氨酸（Gly-X-Y 重复），由链间氢键维持。其脯氨酸与赖氨酸的羟化需要维生素 C。" },
    { en: "hydrophobic effect", cn: "疏水效应",
      def_en: "An intramolecular interaction whose essence is an increase of entropy caused by disrupting the ordered arrangement of water molecules around hydrophobic particles. It drives both the formation and the stabilisation of protein structure.",
      def_cn: "一种分子内相互作用，其本质是疏水颗粒周围有序水分子排列被破坏所带来的熵增。它既推动蛋白质结构的形成，也维持其稳定。" },
    { en: "nonpolar core", cn: "非极性核心",
      def_en: "The interior formed when nonpolar side chains interact with one another and are buried away from water. It is one of the two manifestations of the hydrophobic effect; the other is a tendency towards the smallest possible surface.",
      def_cn: "非极性侧链彼此作用、被埋到远离水的位置所形成的内部。它是疏水效应两种表现之一，另一种是趋向尽可能小的表面积。" }
  ],
  steps: [
    {
      recall_en: "the sequence of the previous topic, which was said to condition function only through a shape",
      recall_cn: "上一个题目里的序列 —— 那里说过，它只有经由一个形状才决定功能",
      en: "Conformation is the spatial arrangement of the atoms of a peptide chain. **A randomly arranged or extended peptide chain mostly shows no biological activity at all, so the function of a protein is entirely dependent on its conformation** — a sequence buys nothing until the chain has taken up one very precisely defined shape.",
      cn: "构象指的是一条肽链各原子的空间排布。**随机排布的或被拉直的肽链通常完全不表现出生物活性，所以蛋白质的功能完全取决于它的构象——在链取得那个被极精确规定的形状之前，序列什么也换不来。**",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "what shapes a chain can take is limited by one measurement made on one bond",
      link_cn: "一条链能取什么形状，受制于在一个键上做的一次测量",
      en: "**The C–N bond inside a peptide bond is 1.32 Å long, or 0.132 nm, and that value lies between the length of a single C–N bond, 1.49 Å, and that of a double C=N bond, 1.27 Å.** A single number, measured, and everything below follows from it.",
      cn: "**肽键内部的 C–N 键长为 1.32 Å，即 0.132 nm，而这个数值落在单键 C–N（1.49 Å）与双键 C=N（1.27 Å）的键长之间。**一个实测的数字，下面所有内容都由它推出来。",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "a length between the two means the bond itself is between the two",
      link_cn: "键长介于两者之间，意味着这个键本身也介于两者之间",
      en: "The carbonyl group next to the nitrogen carries π-electrons and the nitrogen carries a lone electron pair, and the two are partially delocalised over the C–N bond. **The C–N bond of a peptide bond therefore has partly the character of a double bond, and a double bond cannot rotate — so this bond cannot rotate freely either.**",
      cn: "氮旁边的羰基带有 π 电子，氮自身带有一对孤对电子，两者在 C–N 键上部分离域。**因此肽键的 C–N 键部分具有双键的性质，而双键是不能旋转的——所以这个键也不能自由旋转。**",
      src: "B §2.2.2, p.27"
    },
    {
      link_en: "a bond that cannot rotate offers two fixed arrangements instead of a continuum, and they are not equally common",
      link_cn: "不能旋转的键给出的是两种固定排布而不是连续取值，而且两者出现的机会并不相等",
      en: "Cis and trans are those two arrangements: cis puts the two neighbouring α-carbons on the same side of the bond, trans on opposite sides. **In globular proteins the trans isomer unambiguously predominates and the cis form occurs practically only in the neighbourhood of a proline residue**, and the six atoms around a trans peptide bond lie in one flat unit called the amide plane.",
      cn: "顺式和反式就是那两种排布：顺式把相邻的两个 α 碳放在键的同一侧，反式放在两侧。**在球状蛋白中反式异构体明确占优势，顺式形式实际上只出现在脯氨酸残基的近旁；而围绕一个反式肽键的六个原子处在同一个平面单元上，这个单元称为酰胺平面。**",
      src: "B §2.2.2, p.27, Obr. 2.5"
    },
    {
      link_en: "and that plane is what makes a protein foldable at all",
      link_cn: "而正是这个平面，才让蛋白质有可能折叠起来",
      recall_en: "the consequence of the frozen C–N bond two steps up, now counted as available shapes",
      recall_cn: "上面两步里那个被冻住的 C–N 键的后果，现在换算成「可选形状有多少」",
      en: "**A backbone built of amide planes is a row of flat rigid units hinged only at the α-carbons rather than a freely bending string**, so the number of shapes open to a chain is far smaller than its length suggests — and that is what makes finding one correct fold a solvable problem instead of an astronomical search. What is left free is rotation about the two bonds on either side of each α-carbon, and those two angles are all a backbone conformation ever amounts to.",
      cn: "**由酰胺平面串起来的主链，是一排只在 α 碳处有铰链的、平的刚性单元，而不是一根可以随意弯折的绳子；所以一条链可选的形状数目远远小于它的长度所暗示的——正因如此，找到唯一一个正确折叠才是一个解得开的问题，而不是一场天文数字般的搜索。**留下来还能自由转动的，只有每个 α 碳两侧的那两根键；主链的构象，归根到底就只是这两个角度。",
      src: "B §2.2.2, p.27",
      beyond: true,
      beyondNote: "p.27 gives the bond length, the partial double-bond character, the cis/trans consequence and the amide plane. Counting the shapes this leaves open, naming the two remaining rotations, and the conclusion that folding is thereby made tractable are standard course material rather than sentences on that page."
    },
    {
      link_en: "with only two angles free per residue, a chain can repeat one setting over and over. The first regular result",
      link_cn: "每个残基只剩两个角度可调，一条链就可以把同一组设定反复重复。第一种规则的结果",
      en: "**The α-helix is a right-handed helix with 3.6 amino acid residues per turn and a pitch of about 0.54 nm, that is a rise of 0.15 nm per residue, and it is held together by hydrogen bonds between the C=O of residue n and the N–H of residue n+4** which run parallel to the helix axis. Side chains point outwards, away from the axis, so the helix is a rod whose surface is made of R groups; and proline is a helix breaker, since it has no free N–H to donate a hydrogen bond and its ring fixes the backbone at the wrong angle.",
      cn: "**α-螺旋是右手螺旋，每圈 3.6 个氨基酸残基，螺距约 0.54 nm，也就是每个残基上升 0.15 nm；维系它的是第 n 个残基的 C=O 与第 n+4 个残基的 N–H 之间的氢键，这些氢键与螺旋轴平行。**侧链一律朝外、背离螺旋轴，所以螺旋是一根表面由 R 基团铺成的棒；而脯氨酸是螺旋终止子——它没有游离的 N–H 可以供出氢键，环状结构又把主链固定在错误的角度上。",
      src: "B §2.2.2, pp.28–32",
      beyond: true,
      beyondNote: "Only pp.27 and 33 of §2.2.2 are in the extracted page set. pp.28-32, which carry the α-helix, the β-structure and the collagen helix, were not extracted; the parameters given here are standard course content and are flagged rather than passed off as read off the page."
    },
    {
      link_en: "second regular result, and its hydrogen bonds run the other way",
      link_cn: "第二种规则的结果，它的氢键走向正好相反",
      recall_en: "the opposite of the helix above: there the hydrogen bonds run along the axis inside one chain",
      recall_cn: "与上面的螺旋相反：那里的氢键沿轴、在同一条链内部",
      en: "**In the β-structure, or pleated sheet, extended chains lie side by side and are held by hydrogen bonds running between the chains** — or between parts of one chain far apart in the sequence — perpendicular to the chain direction, and it occurs in both a parallel and an antiparallel arrangement. Side chains alternate above and below the sheet, so one face can be made nonpolar and the other polar simply by alternating residues in the sequence.",
      cn: "**在 β-结构（折叠片）中，伸展的链并排排列，由链与链之间的氢键维系——也可以是同一条链上序列相距很远的两段之间——这些氢键与链的方向垂直；它有平行和反平行两种排列。**侧链交替位于片层的上下两侧，所以只要在序列上让残基交替出现，就能把一面做成非极性、另一面做成极性。",
      src: "B §2.2.2, pp.28–32",
      beyond: true,
      beyondNote: "As above: pp.28-32 are not in the extracted page set. The β-structure parameters are standard course content, flagged here rather than presented as read off the page."
    },
    {
      link_en: "third regular result, and it exists in one tissue and demands one residue",
      link_cn: "第三种规则的结果，它只存在于一种组织里，并且只认一个残基",
      en: "**The collagen helix is three left-handed polyproline-II-like chains wound into a right-handed superhelix, held by hydrogen bonds between the chains, and it requires glycine at every third position along each chain** — a Gly-X-Y repeat in which X is often proline and Y often hydroxyproline — because only a hydrogen side chain is small enough to sit where the three chains touch. Hydroxylating that proline and the lysine of the same repeat requires vitamin C, and a lack of it causes scurvy: the connective tissue of the body fails because one hydroxylation step in one protein cannot be done.",
      cn: "**胶原螺旋是三条左手的类聚脯氨酸 II 型链缠绕成的右手超螺旋，由链与链之间的氢键维系；它要求每条链上每第三个位置都是甘氨酸——即 Gly-X-Y 重复，其中 X 常为脯氨酸、Y 常为羟脯氨酸——因为只有以氢为侧链的残基才小到能待在三条链彼此接触的那个位置上。**把这个重复里的脯氨酸和赖氨酸羟化需要维生素 C，缺乏它就导致坏血病：一个蛋白质里的一步羟化做不成，全身的结缔组织就垮了。",
      src: "B §2.2.2, pp.28–32",
      beyond: true,
      beyondNote: "As above: pp.28-32 are not in the extracted page set. The collagen-helix parameters and the vitamin C connection are standard course content, flagged here rather than presented as read off the page."
    },
    {
      link_en: "hydrogen bonds are not the only thing holding a chain in place",
      link_cn: "维持一条链就位的，不只有氢键",
      en: "**Four further interactions stabilise a folded chain alongside those hydrogen bonds**: covalent disulfide bridges between two cysteine side chains, ionic interactions between oppositely charged side chains, hydrogen bonds involving the side chains rather than the main chain, and van der Waals forces, the weak attractions arising between any two atoms brought close together. Only the first of those is a covalent bond; the rest are individually weak, and a fold survives because there are very many of them at once.",
      cn: "**除那些氢键外，还有四种相互作用一起稳定折叠好的链：两条半胱氨酸侧链之间的共价二硫桥、带相反电荷的侧链之间的离子相互作用、由侧链（而不是主链）参与的氢键，以及范德华力——即任何两个原子靠得足够近时产生的弱吸引。**其中只有第一种是共价键；其余每一个都很弱，而折叠之所以站得住，是因为它们同时存在的数量极多。",
      src: "B §2.2.2, pp.28–32",
      beyond: true,
      beyondNote: "As above: pp.28-32 are not in the extracted page set. The list of stabilising interactions is standard course content. The one-clause description of van der Waals forces follows B §2.2.4, p.34, where the same five interactions are named."
    },
    {
      link_en: "and the plates settle into one arrangement rather than another because of a force that comes from outside the molecule",
      link_cn: "这些板块最终落到某一种排布而不是另一种，靠的是一股来自分子之外的力",
      en: "A hydrophobic particle is one that water is not attracted to, and water molecules around such a particle take up a regular, ordered arrangement. **The hydrophobic effect is an intramolecular interaction whose essence is an increase of entropy** — the randomness of the system — caused by disrupting that ordered arrangement of water around hydrophobic particles, so the driving force sits in the water and not in any attraction between the chains. It matters both for forming protein structure and for holding it once formed.",
      cn: "疏水颗粒指的是水不被它吸引的颗粒，而这类颗粒周围的水分子会排成规则有序的样子。**疏水效应是一种分子内相互作用，其本质是熵（也就是系统的随机程度）的增加，来源正是疏水颗粒周围那种有序水排列被打破——所以推动力在水里，不在链与链之间的任何吸引上。**它对蛋白质结构的形成和形成之后的维持都很重要。",
      src: "B §2.2.2, p.33"
    },
    {
      link_en: "and it shows itself in exactly two visible ways",
      link_cn: "它恰好以两种看得见的方式表现出来",
      recall_en: "the two consequences of the entropy gain described in the step above",
      recall_cn: "上一步所说的那份熵增，带来的两个后果",
      en: "The hydrophobic effect manifests itself in two ways: **a protein molecule tends to form structures with the smallest possible surface, and the nonpolar side chains tend to interact with each other and create a nonpolar core of the molecule** — so a folded protein comes out with its water-avoiding side chains buried inside and as little of itself exposed to water as it can manage.",
      cn: "**疏水效应表现为两件事：蛋白质分子倾向于形成表面积尽可能小的结构；非极性侧链倾向于彼此相互作用，形成分子的非极性核心——于是折叠好的蛋白质把躲水的侧链埋在里面，并且把暴露于水的部分压到它所能做到的最小。**",
      src: "B §2.2.2, p.33"
    },
    {
      link_en: "which decides, residue by residue, where each side chain ends up",
      link_cn: "这就逐个残基地决定了每条侧链最后待在哪里",
      recall_en: "the four-group sort of the amino acids topic was a sort by exactly this: whether water is attracted to R",
      recall_cn: "氨基酸那个题目里的四组分类，分的正是这件事：水是否被 R 吸引",
      en: "**Group 1, the nonpolar side chains, ends up predominantly in the interior of a globule, while the polar and charged side chains of groups 2, 3 and 4 end up predominantly on the surface in contact with water** — which is why sorting the 20 by the character of R was worth doing in the first place: that sort predicts where a residue will sit. A charged residue buried in the core, or a greasy one left on the surface, is what a folding error looks like.",
      cn: "**第 1 组（非极性侧链）主要落在球体内部，而第 2、3、4 组的极性和带电侧链主要落在与水接触的表面——这正是当初按 R 的性质把这 20 种分成四组值得做的原因：这个分类能预测一个残基会待在哪里。**一个带电残基被埋进核心，或者一个油性残基留在表面，就是折叠出错的样子。",
      src: "B §2.2.2, p.33",
      beyond: true,
      beyondNote: "p.33 gives the hydrophobic effect and its two manifestations. Reading them back onto the four-group classification of §2.1.1, so that the sort predicts burial, is an inference drawn here rather than a sentence on the page."
    },
    {
      link_en: "one number puts the whole arrangement in proportion",
      link_cn: "有一个数字能把整套安排的比例摆正",
      en: "**Not one of the interactions holding a fold together is strong on its own**: a hydrogen bond, an ionic interaction and a van der Waals contact are each a small fraction of the strength of the covalent bonds along the main chain, and only the disulfide bridges are covalent at all. So a native structure is the sum of a very large number of weak contacts, which is why it can be taken apart by conditions far milder than anything that would break a peptide bond.",
      cn: "**维系一个折叠的相互作用，没有一个是单独很强的：一个氢键、一个离子相互作用、一次范德华接触，强度都只有主链上共价键的一小部分，而其中只有二硫桥算得上共价键。**所以天然结构是极大量弱接触的总和——正因如此，用比断开一个肽键温和得多的条件，就能把它拆散。",
      src: "B §2.2.2, p.33 · B §2.2.4, p.34",
      beyond: true,
      beyondNote: "The five stabilising interactions are named on B p.34 and the hydrophobic effect on B p.33. Ranking their strength against a covalent bond, and the conclusion about mild conditions, are standard course material rather than sentences on either page."
    },
    {
      link_en: "which leaves the question this whole chain has been building towards",
      link_cn: "于是就剩下这条链一路指向的那个问题",
      en: "Two named levels have now been separated without being named: **the regular repeating shapes an α-helix, a β-structure or a collagen helix makes out of residues that are neighbours in the sequence, and the arrangement of residues that are far apart in the sequence but end up touching in the folded molecule**. The first is what a chain does locally, the second is what a chain does as a whole, and the next topic gives each of them a number.",
      cn: "**到这里，两个有名字的层次已经被分开、只是还没被叫出名字：α-螺旋、β-结构或胶原螺旋用序列上彼此相邻的残基做出的那些规则重复形状；以及序列上相距很远、却在折叠后的分子里彼此接触的残基之间的排布。**前者是一条链在局部做的事，后者是一条链作为整体做的事——下一个题目给它们各自编上号。",
      src: "B §2.2.2, p.27, p.33 · B §2.2.3, p.33"
    }
  ]
};

/* ------------------------------------------------ 三级结构与四级结构 ---- */
window.BIOLITE_SPINE["key:protein-tertiary-quaternary"] = {
  assumed: ["protein", "molecule", "atom", "cell", "water", "blood", "hair", "skin",
            "feather", "silk", "muscle", "enzyme", "amino acid", "side chain (r)",
            "residue", "polypeptide", "peptide bond", "conformation", "primary structure",
            "α-helix", "β-structure", "collagen helix", "hydrophobic effect",
            "hydrogen bond", "van der waals interactions", "ionic interaction",
            "disulfide bond", "nonpolar core", "cysteine", "glycine", "alanine",
            "serine", "collagen", "myoglobin", "haemoglobin", "chymotrypsin",
            "cytoskeleton", "gene", "charge", "concentration", "equilibrium",
            "heme", "biochemistry", "gel", "leukocyte", "polarity"],
  nodeTitle_en: "Tertiary and quaternary structure",
  nodeTitle_cn: "三级结构与四级结构",
  title_en: "Four levels plus two, the line between the first two drawn by distance along the sequence, and one protein whose binding site does not exist until two chains meet",
  title_cn: "四个层次再加两个，前两者的界线按序列上的距离来划；还有一个蛋白质，它的结合位点在两条链相遇之前根本不存在",
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
      def_en: "Clusters of individual sections of secondary structure. The βαβ motif — two β-sections separated by an α-helical section — is the commonest; the αα unit and the β-meander are others.",
      def_cn: "二级结构若干片段所组成的簇。最常见的是 βαβ 基序，即两段 β-结构中间隔一段 α-螺旋；此外还有 αα 单元和 β-曲折。" },
    { en: "domain", cn: "结构域",
      def_en: "A compact globular region of a peptide chain, joined to the others by a flexible segment. Domains run from 100 to 400 residues, so one chain can carry several separately folded units on a hinge.",
      def_cn: "肽链中一个紧密的球状区域，与其他区域之间以柔性片段相连。结构域的大小为 100 到 400 个残基，因此一条链可以带着若干个各自折叠、由铰链相连的单元。" },
    { en: "fibrillar proteins", cn: "纤维状蛋白",
      def_en: "Proteins whose chains are more or less extended and cross-linked into macroscopic fibres. They build biological structures and carry mechanical function: surface, connective and supporting tissues, and the cytoskeleton. Keratin, fibroin and collagen are the three representatives.",
      def_cn: "肽链或多或少被拉伸、并交联成宏观纤维的蛋白质。它们构筑生物结构并承担机械功能：体表组织、结缔组织、支持组织，以及细胞骨架。三个代表是角蛋白、丝心蛋白和胶原。" },
    { en: "globular proteins", cn: "球状蛋白",
      def_en: "Proteins whose chain is folded into a ball, with α- or β-type sections alternating with random coil. They carry out most biological functions, and in dilute solution they exist as individual, mutually independent molecules.",
      def_cn: "肽链折叠成球的蛋白质，其中 α 型或 β 型片段与无规卷曲交替出现。它们承担大多数生物学功能，在稀溶液中以彼此独立的单个分子存在。" },
    { en: "random coil", cn: "无规卷曲",
      def_en: "Sections of chain with no regular structure, alternating with α- and β-type sections inside a globule.",
      def_cn: "没有规则结构的链段，在球体内部与 α 型和 β 型片段交替出现。" },
    { en: "immunoglobulin", cn: "免疫球蛋白",
      def_en: "The protein a B lymphocyte makes against an antigen; antibody is the same word. Five human classes named by heavy chain — IgA, IgD, IgE, IgG, IgM — with κ and λ light chains occurring in all of them.",
      def_cn: "B 淋巴细胞针对抗原制造的蛋白质；抗体是同一个意思。人有五类，按重链命名 —— IgA、IgD、IgE、IgG、IgM —— 而 κ 与 λ 两型轻链在五类中都出现。" },
    { en: "epitope", cn: "表位",
      def_en: "The one small part of a large antigen that a given immunoglobulin binds — a surface patch a few residues across. A large protein carries many, so many different antibodies can recognise it at once, and unfolding the protein can abolish one without removing any residue.",
      def_cn: "一个给定的免疫球蛋白所结合的、大抗原上的那一小部分 —— 表面上宽约几个残基的一小块。一个大蛋白身上有很多个，所以能同时被多种抗体识别；而把蛋白解折叠可以毁掉一个表位，却一个残基也没少。" },
    { en: "induced fit", cn: "诱导契合",
      def_en: "The small conformational change a binding site makes as it closes around its ligand. Common to protein-ligand interactions generally, and part of where binding strength comes from, since a site that adjusts makes more contacts than a rigid one.",
      def_cn: "结合位点在合拢包住配体时发生的那个小小构象变化。它在蛋白质–配体相互作用中普遍存在，也是结合强度的部分来源 —— 会调整的位点比刚性位点能做出更多接触。" },
    { en: "dissociation constant Kd", cn: "解离常数 Kd",
      def_en: "The ligand concentration at which half a protein's binding sites are occupied; smaller means tighter. A typical antibody-antigen pair reaches 10^-10 M.",
      def_cn: "蛋白质结合位点被占据一半时所对应的配体浓度；数值越小，结合越紧。典型的抗原–抗体对可以达到 10^-10 M。" }
  ],
  steps: [
    {
      recall_en: "the local shapes and the whole-molecule arrangement separated at the end of the previous topic",
      recall_cn: "上一个题目结尾处分开的那两样：局部的形状，和整个分子的排布",
      en: "**Describing the three-dimensional arrangement of a protein is done at four levels — primary, secondary, tertiary and quaternary** — and later work on conformation, function and evolution proved the importance of two further levels of organisation, supersecondary structure and domains. The first of the four has already been fixed: the order of the residues together with the placement of the disulfide bridges.",
      cn: "**描述一个蛋白质的三维排布要分四个层次——一级、二级、三级、四级——而后来关于构象、功能与演化的研究证明，另有两个组织层次同样重要：超二级结构与结构域。**四个之中的第一个前面已经定下了：残基的顺序，连同二硫桥的位置。",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "the second level, and its definition turns on one word",
      link_cn: "第二个层次，而这个定义的要害在一个词上",
      en: "**Secondary structure is the spatial arrangement of amino acid residues that are close to each other in the linear sequence**; some of those arrangements repeat regularly and form the basis of periodic structures, and the α-helix, the β-structure and the collagen helix are its named elements. All three were built out of residues that are neighbours along the chain, which is exactly the word this level turns on.",
      cn: "**二级结构是线性序列中彼此靠近的氨基酸残基的空间排布；其中有些排布规则地重复，构成周期性结构的基础，而 α-螺旋、β-结构和胶原螺旋就是它被命名的那几个要素。**这三者都是用链上彼此相邻的残基搭出来的——「相邻」正是这个层次所系的那个词。",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "and the third level differs from the second in exactly that one word",
      link_cn: "第三个层次与第二个的差别，正落在那同一个词上",
      recall_en: "the mirror image of the previous step: close together in the sequence there, far apart here",
      recall_cn: "上一步的镜像：那里是序列上靠得近，这里是序列上离得远",
      en: "**Tertiary structure is the spatial arrangement of amino acid residues located far from each other in the linear sequence**, so the line between secondary and tertiary is drawn by distance along the sequence and not by the kind of interaction involved — and in some cases that boundary is hard to define at all.",
      cn: "**三级结构是线性序列中彼此相距较远的氨基酸残基的空间排布；因此二级与三级之间的界线是按序列上的距离划的，而不是按相互作用的类型划的——而且在某些情况下这条界线根本难以界定。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "what actually holds residues that far apart in position",
      link_cn: "把相距这么远的残基摁在各自位置上的，究竟是什么",
      recall_en: "the same five interactions listed in the conformation topic, now doing a job at one named level",
      recall_cn: "构象那个题目里列过的同样五种相互作用，现在在一个有名字的层次上干活",
      en: "**Globular proteins exist in dilute solution as individual, mutually independent molecules** whose sections are held in position by disulfide bonds, ionic interactions, hydrogen bonds, van der Waals forces and the hydrophobic effect. Fibrillar proteins behave oppositely, being aggregates of many parallel-oriented molecules rather than separate ones.",
      cn: "**球状蛋白在稀溶液中以一个个彼此独立的分子形式存在，其链的各个片段靠二硫键、离子相互作用、氢键、范德华力和疏水效应保持在各自的位置上。**纤维状蛋白的行为正相反：它们是许多平行取向的分子的聚集体，而不是彼此分开的单个分子。",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "one level was found to sit between the second and the third",
      link_cn: "后来发现在第二与第三之间还坐着一个层次",
      en: "**Supersecondary structure is a cluster of individual sections of secondary structure: many proteins carry two sections of β-structure separated by a section of chain in α-helical arrangement, a motif called βαβ**, and other recurring clusters are the αα unit and the β-meander. Which arrangement comes out is decided by the piece of chain that connects the flat sections — two flat parts joined by a β-turn, the short piece of chain between them, easily create an antiparallel structure, a longer chain lying between them gives a parallel β-structure, and combining both principles gives the meander.",
      cn: "**超二级结构是二级结构若干片段所组成的簇：许多蛋白质里都有这样一种组合——两段 β-结构，中间隔着一段呈 α-螺旋排布的链，这个基序称为 βαβ；另外反复出现的簇还有 αα 单元和 β-曲折。**得到哪一种排布，由连接那些平面片段的那段链决定：两段平面部分若由 β-转角（也就是把它们接起来的那一小段链）相连，很容易形成反平行结构；若两者之间夹着较长的一段链，得到的是平行 β-结构；把两条原理合起来用，就得到曲折型。",
      src: "B §2.2.3, p.34, Obr. 2.15 · B §2.2.4, p.34"
    },
    {
      link_en: "and one level was found to sit above the third",
      link_cn: "还有一个层次坐在第三个之上",
      en: "**In some peptide chains part of the chain is arranged into two or more compact globular regions connected by a flexible segment, and those compact regions are called domains**, each running from 100 to 400 amino acid residues. One chain can therefore be several separately folded units joined by a hinge rather than one single body — which is what lets a protein carry two different activities on one chain and move them relative to each other.",
      cn: "**在某些肽链中，一部分链排布成两个或更多紧密的球状区域，彼此由一段柔性链相连；这些紧密区域称为结构域，每个大小在 100 到 400 个氨基酸残基之间。**因此一条链可以是若干个各自折叠、由铰链连起来的单元，而不是一个整体——正是这一点让一个蛋白质能在同一条链上带两种不同的活性，并让它们彼此相对移动。",
      src: "B §2.2.3, p.34"
    },
    {
      link_en: "the fourth level exists only for some proteins",
      link_cn: "第四个层次只对一部分蛋白质存在",
      en: "**Quaternary structure is spoken of only where a protein consists of more than one peptide chain, each such chain being called a subunit**; it is the spatial arrangement of those subunits and the character of their contact, and a protein may be built of subunits that are all the same or of subunits that differ.",
      cn: "**四级结构只在蛋白质由一条以上肽链构成时才谈得上，其中每一条这样的链称为一个亚基；它指的是这些亚基的空间排布，以及它们彼此接触的性质；一个蛋白质可以由完全相同的亚基构成，也可以由不同的亚基构成。**",
      src: "B §2.2.3, p.33"
    },
    {
      link_en: "and where two subunits touch is not merely a structural fact",
      link_cn: "而两个亚基彼此接触的地方，并不只是一件结构上的事",
      en: "The sites of contact between subunits are often important for the biological activity of the protein: in an antibody — a protein that binds one specific foreign molecule, its antigen — **the binding site for that antigen is formed by parts of peptide chains belonging to both types of subunit, the heavy and the light chains, so neither subunit can bind anything on its own**. A function that appears only when two chains meet is the clearest thing quaternary structure ever does.",
      cn: "**亚基之间的接触部位往往对蛋白质的生物学活性至关重要：在抗体（一种能结合某个特定外来分子即其抗原的蛋白质）中，抗原的结合位点由分属两类亚基的肽链片段共同构成，也就是重链和轻链，所以单独一个亚基什么也结合不了。**一种只有在两条链相遇时才出现的功能，是四级结构所能展示的最清楚的东西。",
      src: "B §2.2.3, p.34"
    },
    {
      link_en: "before that case is worked through, proteins sort into two overall shapes with two different jobs",
      link_cn: "在把那个案例讲透之前，先说蛋白质按总体形状分成的两类，以及各自的分工",
      en: "Sorted by the overall arrangement of their peptide chains, proteins fall into two main types: fibrillar, in which the chains are more or less extended and join to one another by cross-links into macroscopic fibres, and globular, in which the chain is folded into a ball. The cytoskeleton is the internal structural framework of a cell. **Fibrillar proteins matter above all for building biological structures and for their mechanical function**: they form the basis of the surface, connective and supporting tissues of animals and of the cytoskeleton — wherever something has to hold a shape or take a pull, an extended cross-linked chain is what does it.",
      cn: "按肽链的总体排布来分，蛋白质分成两大类：纤维状蛋白，其肽链或多或少被拉伸，彼此靠横向交联连成宏观纤维；以及球状蛋白，其肽链折叠成一个球。细胞骨架是细胞内部的结构支架。**纤维状蛋白最重要的意义在于构筑生物结构、以及承担它们的机械功能：它们构成动物体表组织、结缔组织与支持组织的基础，也构成细胞骨架的基础——凡是需要保持形状或承受拉力的地方，靠的就是这种被拉伸、被交联的链。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "the first fibrillar protein by name is on the outside of every vertebrate, and it can be taken apart in a bathroom",
      link_cn: "第一个具名的纤维状蛋白长在每一种脊椎动物的外面，而且在浴室里就能把它拆开",
      recall_en: "the α-helix and its hydrogen bonds, from the conformation topic, now built into something you can pull on",
      recall_cn: "构象那个题目里的 α-螺旋和它的氢键，现在被搭成了一样可以拿手去拉的东西",
      en: "Keratin is the basic protein of the body surface of vertebrates — skin, hair, fur, feathers and scales — and the basic secondary structure of mammalian keratin is the α-helix, with two pairs of parallel-running helices twisted together into a left-handed four-stranded cable called the protofibril. **Wetting and heating a hair releases the hydrogen bonds that hold those helices in shape, so the hair can be stretched to double its length**, and in that stretched form the peptide chains can form a β-parallel structure and fix it — which is a change of secondary structure you can carry out by hand.",
      cn: "角蛋白是脊椎动物体表的基本蛋白质——皮肤、毛发、兽毛、羽毛、鳞片——而哺乳动物角蛋白的基本二级结构是 α-螺旋：两对平行走向的螺旋彼此缠绕，形成一根左手四股的缆索，称为原原纤维。**把一根头发润湿并加热，会解开维持这些螺旋形状的氢键，于是头发可以被拉长到原来的两倍；而在这种拉伸状态下，肽链可以形成 β-平行结构并把它固定下来——这是一次你亲手就能完成的二级结构改变。**",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "the second fibrillar protein solves the same problem with different residues",
      link_cn: "第二个纤维状蛋白用不同的残基解决同一个问题",
      en: "**Fibroin is the protein of silk fibre and is similar to keratin, and its high content of residues of small amino acids — glycine, alanine and serine** — is what allows the regular spatial arrangement of planar formations having β-antiparallel secondary structure. Collagen is the third representative of the fibrillar proteins, and it makes the same demand for a small residue at fixed intervals.",
      cn: "**丝心蛋白是蚕丝纤维的蛋白质，与角蛋白相似；它含有大量小分子氨基酸残基——甘氨酸、丙氨酸、丝氨酸——正是这一点使具有 β-反平行二级结构的那些平面构造能够在空间中规则排布。**胶原是纤维状蛋白的第三个代表，而它提出的也是同一个要求：每隔固定间距就要有一个小残基。",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "back to the globular type, which does everything else",
      link_cn: "回到球状的那一类，别的活全归它",
      recall_en: "the opposite arrangement to the fibrillar case: folded up rather than extended",
      recall_cn: "与纤维状的排布相反：这里是折起来，而不是拉开",
      en: "Inside a globule, sections of α- or β-type alternate with sections that have no regular structure at all, called random coil, and proteins of this type carry out most biological functions there are. **How much of a globule is helical is a property of the individual protein rather than of globular proteins as a class**: in myoglobin and haemoglobin, the oxygen-binding proteins of muscle and blood, the α-helix is the main structural motif, while chymotrypsin, a digestive enzyme that cuts other proteins, contains essentially no α-helical structure at all.",
      cn: "在一个球体内部，α 型或 β 型的片段与完全没有规则结构的片段（称为无规卷曲）交替出现；而世上大多数生物学功能都由这一类蛋白质执行。**一个球体里有多少是螺旋，是各个蛋白质自己的性质，不是球状蛋白这一类的性质：在肌红蛋白和血红蛋白（肌肉与血液中结合氧的蛋白质）里，α-螺旋是主要的结构基序；而胰凝乳蛋白酶（一种切割其他蛋白质的消化酶）则基本上完全不含 α-螺旋结构。**",
      src: "B §2.2.4, p.34",
      see: [
        { id: "L-5-1-1", en: "myoglobin and haemoglobin worked through, from the caged iron to cooperative binding", cn: "把肌红蛋白与血红蛋白讲透：从被笼住的铁到协同结合" },
        { id: "L-6-4-1", en: "how a digestive enzyme of this kind actually cuts a peptide bond", cn: "这一类消化酶究竟怎样切断一个肽键" }
      ]
    },
    {
      link_en: "the two types are not separate kingdoms, and you have watched one turn into the other",
      link_cn: "这两类并不是彼此隔绝的王国，而且你亲眼见过其中一类变成另一类",
      en: "**A globular protein can be converted into a fibrillar one forming a mechanically firm structure, and blood clotting is that conversion**: the globular, soluble fibrinogen of blood turns into fibrin, which is fibrillar. Nothing in the sequence changes when it happens — the same chain is rearranged into the other overall type.",
      cn: "**球状蛋白可以转变成纤维状蛋白，从而形成机械上坚固的结构，而血液凝固就是这个转变：血中那种可溶的球状纤维蛋白原，变成了纤维状的纤维蛋白。**发生这件事时序列一点没变——是同一条链被重排成了另一种总体类型。",
      src: "B §2.2.4, p.34"
    },
    {
      link_en: "now the quaternary case worked through, because it is the cleanest one there is",
      link_cn: "现在把那个四级结构的案例讲透，因为它是最干净的一个",
      en: "Humans make five classes of immunoglobulin, distinguished by which heavy chain they use — α, δ, ε, γ and μ, giving IgA, IgD, IgE, IgG and IgM — while the light chains come in only two types, κ and λ, both of which occur in all five classes. IgG is the most abundant, and Gerald Edelman and Rodney Porter established its structure in the 1960s: a Y-shaped protein of two identical heavy chains and two identical light chains, with the two arms of the Y equivalent to each other. Each chain is a row of domains, and most of them are constant, identical from one IgG to the next and folded into a shape shared across the whole family; **each chain carries exactly one variable domain, whose sequence differs from one antibody to another — so a single design is reused throughout, and all the difference between one antibody and another sits in four small domains**.",
      cn: "人造五类免疫球蛋白，靠所用的重链区分——α、δ、ε、γ、μ，分别对应 IgA、IgD、IgE、IgG 和 IgM；轻链只有 κ 和 λ 两型，而这两型在五类里都出现。IgG 含量最高，其结构由 Gerald Edelman 与 Rodney Porter 在 1960 年代阐明：一个 Y 形蛋白，由两条完全相同的重链和两条完全相同的轻链组成，Y 的两条臂彼此等价。**每条链都是一排结构域，其中大多数是恒定的——在不同 IgG 之间完全相同，折成整个家族共有的一种形状；而每条链恰好带一个可变结构域，其序列因抗体而异——所以整套设计被反复复用，抗体与抗体之间的全部差别只落在四个小结构域上。**",
      src: "A pp.165–166"
    },
    {
      link_en: "and those four variable domains pair up to make the part that works",
      link_cn: "这四个可变结构域两两配对，做成真正干活的部件",
      recall_en: "the H-and-L-chain contact named eight steps up as a case of subunit contact, now taken apart",
      recall_cn: "第八步里作为亚基接触举出的重链–轻链接触，现在被拆开来看",
      en: "**At each tip of the Y, the variable domain of one heavy chain lies against the variable domain of one light chain, and the pocket between them is the antigen-binding site**, lined by the residues that vary most from antibody to antibody — so one IgG carries two identical binding sites, and neither a heavy chain nor a light chain makes a site on its own. What a site actually binds is not a whole antigen but an epitope, one small patch of its surface perhaps a few residues across; a large protein therefore carries many epitopes and can be recognised by many different antibodies at once, and because an epitope is a surface feature, unfolding the antigen can destroy it while every residue is still there.",
      cn: "**在 Y 的每一个顶端，一条重链的可变结构域与一条轻链的可变结构域彼此贴合，两者之间的口袋就是抗原结合位点，衬在口袋内壁的正是抗体之间变化最大的那些残基——所以一个 IgG 带着两个完全相同的结合位点，而单独一条重链或单独一条轻链都做不出一个位点。**一个位点真正结合的不是整个抗原，而是一个表位，即抗原表面上宽约几个残基的一小块；因此一个大蛋白身上带着许多表位，能同时被许多种不同的抗体识别；又因为表位是一种表面特征，把抗原解折叠就能毁掉它，而一个残基也没少。",
      src: "A p.167, p.169",
      see: [{ id: "L-25-3-1", en: "where the astronomical diversity of those variable domains actually comes from", cn: "可变结构域那份天文数字般的多样性究竟从何而来" }]
    },
    {
      link_en: "and the strength of that fit is worth one number, and one correction",
      link_cn: "这份契合的强度值得记一个数，外加一处纠正",
      recall_en: "the same weak interactions that held a tertiary fold together four steps up, with nothing added",
      recall_cn: "第四步里维系三级折叠的那些弱相互作用，一样没多",
      en: "Binding often involves a small conformational change in the site, the antibody closing slightly around what it has caught; that is induced fit, and a site that adjusts makes more contacts than a rigid site of the same shape could. The dissociation constant Kd is the ligand concentration at which half a protein's binding sites are occupied, and a typical antibody-antigen interaction reaches 10^-10 M. That binding energy comes from the ordinary hydrophobic effect together with ionic interactions, hydrogen bonds and van der Waals interactions, with no new kind of force appearing anywhere — so **extreme specificity is a matter of arrangement: a pocket matching one epitope in shape, polarity and charge makes hundreds of weak contacts at once**, and a pocket matching nothing in particular makes very few. Because that specificity is so exact, a labelled antibody serves as a reagent that finds one protein among thousands, which is what immunoblotting does.",
      cn: "结合常常伴随位点上一个小小的构象变化——抗体略微合拢，包住它抓到的东西；这就是诱导契合，而会调整的位点比同样形状的刚性位点能做出更多接触。解离常数 Kd 是蛋白质结合位点被占据一半时对应的配体浓度，典型的抗原–抗体相互作用可以低到 10^-10 M。**这份结合能来自普通的疏水效应，加上离子相互作用、氢键和范德华相互作用，全程没有出现任何新的作用力——所以极端的特异性是安排上的事：一个在形状、极性和电荷上都与某个表位相匹配的口袋，能一次做出成百上千个弱接触；而一个谁也不特别匹配的口袋，做出来的接触寥寥无几。**正因为这份特异性如此精确，一个带标记的抗体就能当试剂用，在成千上万种蛋白里找出某一种——免疫印迹做的就是这件事。",
      src: "A pp.167–168",
      beyond: true,
      beyondNote: "The 10^-10 M figure and induced fit are on these pages; the definition of Kd as the half-saturating ligand concentration belongs to §5.1 and is carried in here so the number can be read.",
      see: [{ id: "L-9-2-1", en: "labelled antibodies used to say where and when a protein is present", cn: "用带标记的抗体去回答一个蛋白何时、何处存在" }]
    }
  ]
};

/* ------------------------------------------------- 折叠与变性 ---- */
window.BIOLITE_SPINE["key:protein-folding-and-denaturation"] = {
  assumed: ["protein", "polypeptide", "peptide bond", "amino acid", "side chain (r)",
            "residue", "cell", "molecule", "atom", "water", "DNA", "RNA", "tRNA",
            "aminoacyl-tRNA", "anticodon", "ribosome", "translation", "endoplasmic reticulum",
            "enzyme", "ATP", "ADP", "phosphate", "oxidation", "hydrolysis", "ligand",
            "conformation", "primary structure", "secondary structure",
            "tertiary structure", "quaternary structure", "disulfide bond",
            "hydrogen bond", "ionic interaction", "van der waals interactions",
            "hydrophobic effect", "nonpolar core", "β-turn", "proline", "cysteine",
            "sulfhydryl group", "prokaryote", "eukaryote", "detergent", "urea",
            "electrophoresis", "gel", "egg", "biochemistry", "entropy", "activity"],
  nodeTitle_en: "Folding the chain, and taking the fold apart",
  nodeTitle_cn: "把链折起来，以及把折叠拆开",
  title_en: "For many proteins the working shape is not the cheapest one, so folding has to be steered — and everything that steers it can also be reversed",
  title_cn: "对许多蛋白来说，能干活的那个形状并不是最省能量的那个，所以折叠必须有人带路 —— 而带路的每一样东西，也都可以反过来走",
  terms: [
    { en: "nascent chain", cn: "新生链",
      def_en: "The freshly synthesised polypeptide, not yet folded or modified, as opposed to the mature protein that does the work.",
      def_cn: "刚合成出来、尚未折叠或修饰的多肽，与真正干活的成熟蛋白相对。" },
    { en: "chaperone", cn: "分子伴侣",
      def_en: "An Hsp70-family protein that grips a nascent chain at the ribosome and, spending ATP, walks it through a partially folded intermediate to the native form.",
      def_cn: "Hsp70 家族的蛋白，在核糖体处抓住新生链，花掉 ATP，把它经由部分折叠的中间体一路带到天然形态。" },
    { en: "chaperonin", cn: "伴侣素",
      def_en: "The barrel-shaped GroEL complex capped by GroES, an enclosed ATP-driven chamber in which a chain folds with nothing else nearby to stick to.",
      def_cn: "由 GroES 加帽的桶状 GroEL 复合物，一个由 ATP 驱动的封闭腔室，链在其中折叠时四周没有别的东西可粘。" },
    { en: "PPIase", cn: "肽基脯氨酰顺反异构酶",
      def_en: "Peptidylprolyl-cis,trans-isomerase, which rotates the peptide bond before a proline. Every such bond is made trans, and about 6% must end up cis, mostly in β-turns.",
      def_cn: "催化脯氨酸之前那根肽键旋转的酶。这类键合成时全是反式，而约 6% 最终必须是顺式，多在 β-转角里。" },
    { en: "protein-disulfide-isomerase", cn: "蛋白质二硫键异构酶",
      def_en: "The enzyme that exchanges disulfide bonds between pairs of cysteines until the pairing is the native one, needed because forming an S-S bond is not specific in the first place.",
      def_cn: "在半胱氨酸对之间交换二硫键、直到配对与天然状态一致的酶；之所以需要它，是因为 S–S 键的生成本身并无特异性。" },
    { en: "denaturation", cn: "变性",
      def_en: "Loss of the native three-dimensional arrangement of a protein with the peptide bonds left intact. The primary structure survives and biological activity does not, which is what makes it the direct test of whether a shape, and not a composition, carries function.",
      def_cn: "蛋白质失去其天然的三维排布，而肽键完好无损。一级结构保住了，生物活性没保住 —— 正因如此，它是「携带功能的是形状而不是组成」这一命题的直接检验。" },
    { en: "renaturation", cn: "复性",
      def_en: "Recovery of the native conformation and of biological activity after the denaturing agent is removed. Where it succeeds, everything needed to specify the shape was in the sequence all along.",
      def_cn: "去掉变性剂之后，天然构象与生物活性重新恢复。凡是复性成功之处，指定形状所需的一切本来就写在序列里。" },
    { en: "aggregation", cn: "聚集",
      def_en: "Partly folded chains sticking to one another instead of each completing its own fold. It is what an enclosed folding chamber exists to prevent, and it is why heat denaturation is usually irreversible.",
      def_cn: "半折叠的链彼此粘上，而不是各自把自己的折叠完成。封闭折叠腔室的存在就是为了防它，而它也是热变性通常不可逆的原因。" }
  ],
  steps: [
    {
      recall_en: "the levels of structure just numbered; this chain asks how a molecule ever reaches them",
      recall_cn: "刚刚编好号的那些结构层次；这条链问的是：一个分子究竟怎么走到那里",
      en: "Everything done to a chain after translation falls into three kinds of process: non-covalent interactions, which settle the spatial arrangement of the chain, make separate chains associate into one molecule and let the protein bind ligands; covalent modification of the backbone, used above all when a protein is being exported from the cell; and covalent modification of amino acid side chains. **Only the first of the three leaves the chain chemically unchanged — a folded protein and an unfolded one are the same molecule in two different shapes**, and everything below is about that first kind alone.",
      cn: "翻译之后对一条链所做的一切可归为三类过程：非共价相互作用，它决定链的空间构象、使各条链缔合成一个分子、也让蛋白能结合配体；骨架的共价修饰，主要用在蛋白被运出细胞的时候；以及氨基酸侧链的共价修饰。**三者之中只有第一类不改变链的化学组成——折叠好的蛋白和没折叠的蛋白是同一个分子的两种形状；而下面讲的全部只是这第一类。**",
      src: "B §4.3, p.108",
      see: [
        { id: "4-3-2", en: "the second kind: cutting the backbone, and getting a protein across a membrane", cn: "第二类：切开骨架，以及怎样把蛋白送过膜" },
        { id: "4-3-3", en: "the third kind: what is hung onto a side chain and why", cn: "第三类：往侧链上挂什么，以及为什么" }
      ]
    },
    {
      link_en: "the easy case first, and it is the one the whole subject is built on",
      link_cn: "先说容易的情形，整个学科正是建在它上面",
      en: "The spatial arrangement of a chain is in principle determined by its amino acid sequence, and some proteins — mostly small ones, plus a few more complex ones — pass into their biologically active conformation spontaneously. **For those proteins the biologically active conformation and the lowest-energy conformation are the same shape, so the chain finds it by itself and nothing has to help.**",
      cn: "一条链的空间构象原则上由它的氨基酸序列决定，而有一部分蛋白——多数是小蛋白，外加少数较复杂的——会自发进入自己的生物活性构象。**对这些蛋白来说，生物活性构象和能量最低构象是同一个形状，所以链自己就能找到它，不需要任何帮忙。**",
      src: "B §4.3.1, p.108"
    },
    {
      link_en: "that claim was not assumed. It was tested by taking one protein apart and letting it go",
      link_cn: "这个说法不是假定的，是把一个蛋白拆开再放手，试出来的",
      en: "Christian Anfinsen took ribonuclease, an enzyme of 124 residues held by four disulfide bonds, and treated it with urea to break the non-covalent interactions and with β-mercaptoethanol to reduce all four S—S links. The enzyme lost its activity completely. **When both reagents were removed by dialysis, the chain folded back and the activity returned in full** — and since nothing but the sequence was present to specify it, that experiment is the evidence that a sequence contains everything needed to reach a shape.",
      cn: "Christian Anfinsen 取来核糖核酸酶——一个由 124 个残基组成、被四个二硫键拴住的酶——用尿素打断非共价相互作用，再用 β-巯基乙醇把四个 S—S 键全部还原。酶的活性完全消失。**当这两种试剂被透析掉之后，链自己折了回去，活性也完全恢复——而当时在场的除了序列别无他物，所以这个实验就是「序列本身含有到达一个形状所需的全部信息」的证据。**",
      src: "B §4.3.1, p.108",
      beyond: true,
      beyondNote: "p.108 asserts that the spatial arrangement is in principle determined by the sequence and that some proteins fold spontaneously; it does not describe the experiment that established it. Anfinsen's ribonuclease refolding is standard course material, given here as the reasoning behind the assertion rather than as a sentence on the page."
    },
    {
      link_en: "and now the hard case, which is the more common one",
      link_cn: "现在说困难的情形，而它才是更常见的",
      recall_en: "the opposite of the spontaneous case two steps up: there the two conformations coincided",
      recall_cn: "与上面两步那个自发的情形相反：那里两个构象是重合的",
      en: "For many other proteins the biologically active conformation and the energetically most favourable one are two different shapes. **A chain left to settle on its own would therefore end up in the wrong shape, so the folding of a freshly synthesised — nascent — chain has to be a controlled, guided process** rather than a spontaneous one.",
      cn: "对许多其他蛋白而言，生物活性构象与能量上最有利的构象是两个不同的形状。**因此，任由一条链自己安顿下来，它会落到错的那一个上；所以刚合成出来的（新生的）链，其折叠必须是一个受控的、被引导的过程，而不是一件自发发生的事。**",
      src: "B §4.3.1, pp.108–109"
    },
    {
      link_en: "and the price of getting it wrong is not abstract",
      link_cn: "而折错的代价并不抽象",
      en: "Several serious neurological diseases are caused by nothing more than incorrect arrangement of protein structures. **The chain is the right chain and the sequence is the right sequence; the shape alone is wrong, and that is enough to cause disease.**",
      cn: "有好几种严重的神经系统疾病，起因不过是蛋白质结构的排布出了错。**链是对的，序列也是对的；错的只有形状——而这就足以致病。**",
      src: "B §4.3.1, p.109"
    },
    {
      link_en: "so who does the guiding?",
      link_cn: "那么，谁来带路？",
      en: "Specific proteins that catalyse the folding of a nascent chain into the form it needs are called chaperones, and they act during post-translational modification in the endoplasmic reticulum. **Hsp70 carrying ATP binds a nascent chain as it comes off the ribosome; releasing phosphate leaves a partially folded intermediate still held by the chaperone**; and spending the ATP down to ADP finally lets the native protein go — so guidance is paid for, one molecule of ATP at a time.",
      cn: "那些催化新生链折叠成所需形态的特异蛋白叫做分子伴侣，它们在内质网中的翻译后修饰阶段起作用。**带着 ATP 的 Hsp70 在新生链刚离开核糖体时就抓住它；放出磷酸后，留下一个仍被分子伴侣握着的部分折叠中间体；最后把 ATP 花成 ADP，才把天然蛋白放走——所以「带路」是要付钱的，一次一个 ATP。**",
      src: "B §4.3.1, p.109, Obr. 4.52a"
    },
    {
      link_en: "and a second system does it inside a closed container, for a reason worth stating",
      link_cn: "还有第二套系统在一个封闭容器里做这件事，理由值得说明",
      en: "A protein can instead enter GroEL, a barrel-shaped complex; ATP and the cap protein GroES then bind and complete a chaperonin complex, folding takes place inside it, and releasing ADP, phosphate and GroES liberates the native protein. **An enclosed chamber lets a chain fold with nothing else around it — no other partly folded chain to stick to**, and sticking to another partly folded chain is exactly what aggregation is.",
      cn: "蛋白也可以改走另一条路：进入桶状复合物 GroEL；随后 ATP 与帽状蛋白 GroES 结合上来，凑成一个伴侣素复合物，折叠就在它内部进行；放掉 ADP、磷酸和 GroES，天然蛋白就被释出。**一个封闭的腔室让链在四周空无一物的情况下折叠——身边没有别的半折叠的链可以粘上去，而粘到另一条半折叠的链上，正是「聚集」的定义。**",
      src: "B §4.3.1, p.109, Obr. 4.52b"
    },
    {
      link_en: "both classes are old, and they do more than first-time folding",
      link_cn: "这两类都很古老，而且干的不只是「第一次折叠」",
      en: "Chaperones and chaperonins are evolutionarily conserved and are found in eukaryotic and prokaryotic cells alike; they recognise and stabilise partially folded structural intermediates, and they also take part in repairing chains that have folded incorrectly. **A cell can therefore rescue a misfolded protein rather than only destroying it, which is why the same machinery matters both at the moment of synthesis and long afterwards.**",
      cn: "分子伴侣与伴侣素在进化上是保守的，真核细胞和原核细胞里都有；它们识别并稳定部分折叠的结构中间体，也参与修复那些已经折错的链。**因此细胞可以把一个折错的蛋白救回来，而不是只能把它销毁——这也是同一套机器在合成当时和事后很久都同样要紧的原因。**",
      src: "B §4.3.1, p.109"
    },
    {
      link_en: "even a folded chain is not finished, because one bond was made in the wrong geometry on purpose",
      link_cn: "就算折好了也还没完，因为有一种键当初是故意按错的几何做出来的",
      recall_en: "the cis form that appears practically only next to proline, from the conformation topic",
      recall_cn: "构象那个题目里说过：顺式实际上只出现在脯氨酸旁边",
      en: "Every X-Pro bond — the peptide bond before a proline, with X any residue — is first synthesised in the trans configuration, yet about 6% of X-Pro bonds in native proteins are cis, most often inside β-turns. Peptidylprolyl-cis,trans-isomerases catalyse rotation around exactly that bond and are found from bacteria to mammalian cells. **The ribosome can make only one of the two geometries, so an enzyme has to come back afterwards and flip the particular bonds that need to be cis.**",
      cn: "每一根 X-Pro 键——即脯氨酸之前的那根肽键，X 为任意残基——合成时一律是反式；可是天然蛋白里约有 6% 的 X-Pro 键是顺式，最常见于 β-转角内部。肽基脯氨酰顺反异构酶专门催化绕这根键的旋转，从细菌到哺乳动物细胞都有它。**核糖体只会做两种几何中的一种，所以必须有一个酶事后回头，把那些该是顺式的键一根根翻过来。**",
      src: "B §4.3.1, pp.109–110, Obr. 4.53"
    },
    {
      link_en: "and one more kind of bond has to be checked, because getting it right is not automatic",
      link_cn: "还有一类键必须检查，因为它能不能配对正确并不自动",
      en: "Oxidising sulfhydryl groups into disulfide bonds contributes a great deal to stabilising the active form, but forming an S—S bond is not inherently specific: any two cysteines close enough will do it. So a chain that a chaperone has folded into a poorly folded intermediate still carries free SH groups and mispaired S—S bonds, and two further steps correct it. **Protein-disulfide-isomerase exchanges disulfide bonds between pairs of cysteines until the pairing is the native one**, and PPIase then converts the result to its native proline configuration — folding is finished by two proofreading enzymes, one for the disulfides and one for the proline bonds, working in that order.",
      cn: "把巯基氧化成二硫键，对稳定活性形态贡献很大，但形成一根 S—S 键本身没有特异性：任何两个靠得够近的半胱氨酸都能成键。所以被分子伴侣折成一个折叠不良中间体的链，身上仍带着游离 SH 和配错的 S—S 键，还要再经两步校正。**蛋白质二硫键异构酶在半胱氨酸对之间交换二硫键，直到配对与天然状态一致；随后 PPIase 再把结果转成天然的脯氨酸构型——折叠是由两个校对酶收尾的：一个管二硫键，一个管脯氨酸前的肽键，而且顺序就是这个。**",
      src: "B §4.3.1, p.110, Obr. 4.54"
    },
    {
      link_en: "that is the fold built. Now the opposite operation, which has its own name",
      link_cn: "折叠到此建成。现在说相反的操作，它有自己的名字",
      recall_en: "the Anfinsen experiment in the third step already performed this operation without naming it",
      recall_cn: "第三步里 Anfinsen 的实验其实已经做过这个操作，只是当时没给它起名",
      en: "**Denaturation is the loss of a protein's native three-dimensional arrangement with the peptide bonds left intact: the primary structure survives in full and the biological activity does not.** That combination is what makes it the direct test of the claim this chain opened with — a molecule with every residue still in place and in the right order, and no function, is a molecule whose function was carried by a shape.",
      cn: "**变性是指蛋白质失去其天然的三维排布，而肽键完好无损：一级结构完整地保住了，生物活性没保住。**正是这个组合使它成为对本条链开头那个说法的直接检验——一个残基一个不少、顺序也一点没错、却什么也干不了的分子，说明它的功能本来就是由一个形状携带的。",
      src: "B §4.3.1, pp.108–110",
      beyond: true,
      beyondNote: "§4.3.1 covers guided folding and its proofreading enzymes and does not define denaturation; B §2.2.6 covers it on pp.38-40, which are not in the extracted page set. The definition here is standard course material, flagged rather than presented as read off a page."
    },
    {
      link_en: "and what does the denaturing is one agent per interaction",
      link_cn: "而实施变性的，是一种相互作用对应一种试剂",
      recall_en: "the five interactions that held a tertiary fold together, now taken one at a time",
      recall_cn: "维系三级折叠的那五种相互作用，现在被一个一个地拆掉",
      en: "**Each denaturing agent removes one named interaction: heat and mechanical agitation break the weak ones outright**, extremes of pH destroy the ionic interactions by changing the charge on ionizable side chains, urea and guanidinium salts compete for the hydrogen bonds, detergents and organic solvents dissolve the nonpolar core, and a reducing agent such as β-mercaptoethanol breaks the disulfide bonds. Only that last one is a covalent link. So which agent was used decides which interaction has to be restored to get the protein back.",
      cn: "**每一种变性试剂拆掉一种有名字的相互作用：加热和机械振荡直接把那些弱相互作用打断；pH 走极端通过改变可电离侧链的电荷毁掉离子相互作用；尿素和胍盐去争抢氢键；去污剂和有机溶剂把非极性核心溶开；而 β-巯基乙醇一类的还原剂打断二硫键。**其中只有最后一种是共价连接。所以用了哪种试剂，就决定了要把蛋白弄回来必须恢复哪一种相互作用。",
      src: "B §2.2.2, p.33 · B §4.3.1, p.110",
      beyond: true,
      beyondNote: "The five stabilising interactions are on B pp.33-34 and the reducing agents on A p.92. Pairing each denaturing agent with the interaction it removes is standard course material assembled here, not a list on any one page."
    },
    {
      link_en: "whether the protein comes back depends on something that has already been named",
      link_cn: "蛋白能不能回来，取决于一样前面已经点过名的东西",
      recall_en: "aggregation, defined in the chaperonin step as partly folded chains sticking to one another",
      recall_cn: "伴侣素那一步给「聚集」下的定义：半折叠的链彼此粘上",
      en: "Renaturation is recovery of the native conformation, and of activity, once the denaturing agent is removed. It succeeded for ribonuclease and it fails for a boiled egg white. The difference is aggregation: **a denatured chain in a crowded solution meets other denatured chains before it finishes folding, they stick to one another, and what precipitates is no longer capable of folding at all** — which is precisely the accident an enclosed chaperonin chamber exists to prevent.",
      cn: "复性是指变性剂被去掉之后，天然构象与活性重新恢复。核糖核酸酶做到了，煮熟的蛋清做不到。**差别在于聚集：一条变性的链在拥挤的溶液里，还没折完就遇上了别的变性的链，彼此粘在一起，沉下来的东西已经完全不具备折叠能力了——而这恰恰是封闭的伴侣素腔室存在的目的：防的就是这个意外。**",
      src: "B §4.3.1, p.109",
      beyond: true,
      beyondNote: "The chaperonin chamber and aggregation are on p.109. Renaturation, and the explanation of irreversible denaturation by aggregation, are standard course material rather than sentences on that page."
    },
    {
      link_en: "which closes the loop with the topic three chains back",
      link_cn: "于是这就和三条链之前的那个题目接上了",
      recall_en: "the sequencing route of the primary-structure topic began by denaturing the protein deliberately",
      recall_cn: "一级结构那个题目里的测序路线，第一步就是故意把蛋白变性掉",
      en: "**Every step of the classical sequencing route is a deliberate denaturation: reducing the disulfide bonds and blocking the sulfhydryls, unfolding the chain so a protease can reach every peptide bond**, and running the fragments through a gel in a detergent — all of it destroys the conformation on purpose, because a sequence is the one thing denaturation cannot touch. Structure and sequence are therefore studied by opposite means: to read the order of the residues you take the shape apart, and to see the shape you must never take it apart at all.",
      cn: "**经典测序路线的每一步都是有意的变性：把二硫键还原掉、把巯基封住，把链摊开好让蛋白酶够得着每一根肽键，再把片段放进含去污剂的凝胶里跑——这一切都在故意破坏构象，因为序列恰好是变性唯一动不了的东西。**所以结构和序列要用相反的手段去研究：要读出残基的顺序，就得把形状拆开；而要看清形状，就一次也不能拆。",
      src: "A p.92 · B §4.3.1, p.108",
      beyond: true,
      beyondNote: "The reduction and blocking steps are on A p.92. Reading the whole classical route as a deliberate denaturation, and the contrast with structure determination, is an inference drawn here rather than a sentence on any page.",
      see: [{ id: "L-4-5-1", en: "how a three-dimensional structure is determined without taking it apart", cn: "在不拆开的前提下，三维结构是怎么被测定的" }]
    }
  ]
};
