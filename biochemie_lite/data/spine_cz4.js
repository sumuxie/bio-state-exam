/* Spines for chapter 4 — 速通简洁版.

   Eighteen nodes, and they are one story told once: a nucleotide is built, nucleotides
   are joined into a chain, the chain is copied, the copy is read out into RNA, the RNA
   is read out into protein, and the protein is finished and sent where it is needed.
   Every node below is a link in that chain, and each step is ONE claim.

   House rules, all of them from the reader saying which sentence stopped them:
   state the thing; no unbound "the"; name the actual objects; no commentary about the
   textbook; introduce every noun in the breath that first uses it; state the scope;
   reach back when a step is the parallel or the opposite of an earlier one. Every
   structural claim carries its consequence — 「这些东西一般有啥用？」

   The app has a 极简 mode showing ONLY the **bold** span of each step, so each bold
   span is written as a claim that stands on its own.

   `beyond: true` marks material that is standard and examinable but is NOT on the
   pages this node was read from. `openQuestion_*` marks a question the subject has not
   settled. `see` points at the nodes that develop a subject in full. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* -------------------------------------------------------------------- 4-1 */
window.BIOLITE_SPINE["4-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "ATP", "hydrogen bond"],
  nodeTitle_en: "Nucleic acids are the basic molecules of heredity",
  nodeTitle_cn: "核酸是遗传的基本分子",
  title_en: "One repeating unit made of three parts, and the naming ladder that the whole chapter is written in",
  title_cn: "一个由三部分构成的重复单元，以及整章都在用的那套命名阶梯",
  steps: [
    {
      en: "A nucleic acid is a chain of one repeating unit, and that unit has exactly three parts: a nitrogen-containing ring called a base, a five-carbon sugar called a pentose, and a residue of phosphoric acid, the phosphate. **A unit carrying all three parts is a nucleotide, and DNA and RNA are nothing but nucleotides joined end to end.**",
      cn: "核酸是一条由同一种重复单元串成的链，而这个单元恰好由三部分组成：一个含氮的环，叫**碱基**；一个五碳糖，叫**戊糖**；以及一个磷酸残基，即**磷酸**。**三部分齐全的单元就是核苷酸（nucleotide），而 DNA 和 RNA 无非就是核苷酸首尾相连而成。**",
      src: "§4.1, p.66"
    },
    {
      link_en: "so, which bases?",
      link_cn: "那么，是哪些碱基？",
      en: "Five bases carry almost all of the work. Adenine and guanine are purines, meaning their ring system is two rings fused together; cytosine, uracil and thymine are pyrimidines, a single six-membered ring. **In a written sequence each is a single letter: A, G, C, U, T.**",
      cn: "承担几乎全部工作的碱基有五种。**腺嘌呤（adenine, A）**和**鸟嘌呤（guanine, G）**属于**嘌呤**，意思是它们的环系由两个环稠合而成；**胞嘧啶（cytosine, C）**、**尿嘧啶（uracil, U）**和**胸腺嘧啶（thymine, T）**属于**嘧啶**，只有一个六元环。**写成序列时，每一种只用一个字母表示：A、G、C、U、T。**",
      src: "§4.1, p.66, Obr. 4.1"
    },
    {
      link_en: "and a pyrimidine base is not frozen in one arrangement",
      link_cn: "而嘧啶碱基的原子排布并非固定不动",
      en: "A pyrimidine base can sit in either of two tautomeric forms — the same atoms, with one hydrogen and one double bond in different places. The lactam form carries a ring carbon double-bonded to oxygen with the hydrogen on the neighbouring nitrogen, and it is the stable one; the lactim form has that hydrogen moved onto the oxygen as an -OH, which makes it weakly acidic. **Under ordinary conditions a pyrimidine base is in its lactam form, and the lactim form is rare.**",
      cn: "一个嘧啶碱基可以处在两种**互变异构（tautomeric）**形式中——原子完全相同，只是一个氢和一个双键换了位置。**酰胺式（lactam）**是环上碳与氧成双键、氢挂在相邻氮上的那一种，它是稳定的一种；**亚胺醇式（lactim）**把那个氢挪到氧上成为 -OH，因而呈弱酸性。**通常条件下嘧啶碱基处于酰胺式，亚胺醇式很少见。**",
      src: "§4.1, p.66, Obr. 4.1",
      beyond: true,
      beyondNote: "That the rare lactim form is where a mispairing comes from is standard and examinable, but pp.66-67 state only the two forms and their stability, so it is not asserted here."
    },
    {
      link_en: "now the one word distinction the rest of the chapter rests on",
      link_cn: "接下来是整章都要靠的那一个词的分别",
      en: "Join a base to a pentose and nothing else, and the product is a nucleoside. Add the phosphate to that, and it becomes a nucleotide. **The two words differ by exactly one phosphate group: nucleoside is base plus sugar, nucleotide is base plus sugar plus phosphate.**",
      cn: "把碱基接到戊糖上、到此为止，产物叫**核苷（nucleoside）**。再给它加上磷酸，就成了**核苷酸（nucleotide）**。**这两个词的差别恰好是一个磷酸基团：核苷 = 碱基 + 糖，核苷酸 = 碱基 + 糖 + 磷酸。**",
      src: "§4.1, p.66"
    },
    {
      link_en: "and the base is held to the sugar by one bond, worth naming",
      link_cn: "碱基和糖之间只靠一根键连着，这根键值得单独点名",
      en: "The base is attached to carbon 1 of the pentose through an N-glycosidic bond — a bond running from a nitrogen of the base to that sugar carbon. **A purine makes it from its N9; a pyrimidine makes it from its N1.** Being a single bond, it is also the whole of what holds a base onto the backbone: break it and the chain survives with a sugar carrying no base at all.",
      cn: "碱基通过一根 **N-糖苷键**接在戊糖的第 1 位碳上——这根键从碱基上的一个氮出发，连到糖的那个碳。**嘌呤用它的 N9 来连，嘧啶用它的 N1 来连。** 既然只有这一根键，它也就是把碱基固定在骨架上的全部依靠：断掉它，链还在，只是那个糖上没有碱基了。",
      src: "§4.1, p.67, Obr. 4.2",
      see: [{ id: "L-8-3-1", en: "losing a base from an intact chain, and what repairs it", cn: "碱基从完整链上脱落，以及靠什么修复" }]
    },
    {
      link_en: "with those two words fixed, the names fall into a ladder",
      link_cn: "这两个词一定下来，名字就排成了一道阶梯",
      en: "Each base gives its own nucleoside and its own nucleotide, and the endings are regular: adenine → adenosine → adenylate, abbreviated AMP; guanine → guanosine → guanylate, GMP; uracil → uridine → uridylate, UMP; cytosine → cytidine → cytidylate, CMP. **A purine nucleoside ends in -osine, a pyrimidine nucleoside ends in -idine, and adding the phosphate turns the ending into -ylate.**",
      cn: "每一种碱基都有自己的核苷和自己的核苷酸，词尾是有规律的：腺嘌呤 → **腺苷（adenosine）** → **腺苷酸（adenylate, AMP）**；鸟嘌呤 → 鸟苷 → 鸟苷酸（GMP）；尿嘧啶 → 尿苷 → 尿苷酸（UMP）；胞嘧啶 → 胞苷 → 胞苷酸（CMP）。**嘌呤核苷以 -osine 结尾，嘧啶核苷以 -idine 结尾，加上磷酸后词尾变成 -ylate。**",
      src: "§4.1, pp.66-67, Tab. 4.1"
    },
    {
      link_en: "the same ladder again, with the other sugar",
      link_cn: "同一道阶梯，换成另一种糖再走一遍",
      recall_en: "the same four endings as the step above, with one prefix and one substitution",
      recall_cn: "词尾和上一步完全一样，只多一个前缀、换掉一个碱基",
      en: "Replace the ribose with 2-deoxy-D-ribose and every name takes the prefix deoxy-: dAMP, dGMP, dCMP. **The deoxy row contains no uracil at all — thymine stands in that place, giving deoxythymidine and deoxythymidylate, dTMP.**",
      cn: "把核糖换成 **2-脱氧-D-核糖**，每个名字都加上前缀 deoxy-（脱氧）：dAMP、dGMP、dCMP。**脱氧这一行里根本没有尿嘧啶——那个位置由胸腺嘧啶顶上，给出脱氧胸苷和脱氧胸苷酸（dTMP）。**",
      src: "§4.1, p.67, Tab. 4.1"
    },
    {
      link_en: "so the two polymers differ in two places at once",
      link_cn: "于是这两种聚合物在两个地方同时不同",
      en: "DNA and RNA differ in their pentose — 2-deoxy-D-ribose in DNA, D-ribose in RNA — and they differ in their bases as well. **Uracil occurs practically only in RNA and thymine predominantly in DNA, which makes the base the quicker test of the two: find a U and you are holding RNA.**",
      cn: "DNA 与 RNA 的戊糖不同——DNA 用 2-脱氧-D-核糖，RNA 用 D-核糖——碱基也不同。**尿嘧啶实际上只出现在 RNA 中，胸腺嘧啶主要出现在 DNA 中；因此碱基是两者中更快的判据：看到 U，手上拿的就是 RNA。**",
      src: "§4.1, p.67"
    },
    {
      link_en: "and the sugar difference is one hydroxyl group, which decides more than a name",
      link_cn: "而糖的那点差别只是一个羟基，但它决定的远不止一个名字",
      en: "The whole difference between the two sugars is a single -OH at carbon 2, present in ribose and absent in deoxyribose. **That one hydroxyl is why a paired stretch of RNA can only take the wider A-form helix and never the B-form that cellular DNA uses, and it is also why RNA is the more fragile of the two molecules.**",
      cn: "两种糖之间的全部差别，就是第 2 位碳上的一个 **-OH**：核糖有，脱氧核糖没有。**正是这一个羟基，使得配成双链的 RNA 只能采取较宽的 A 型螺旋，而永远不能采取细胞内 DNA 所用的 B 型；也正是它，使 RNA 成为两者中较易被破坏的那一个。**",
      src: "§4.1, p.67",
      beyond: true,
      beyondNote: "p.67 states the sugar difference itself. That the 2'-OH forces A-form geometry and makes RNA base-labile is developed in the Lehninger nodes linked here, not on these pages.",
      see: [
        { id: "L-8-2-1", en: "why a paired RNA has no choice but A-form", cn: "为什么配对的 RNA 只能是 A 型" },
        { id: "L-8-3-1", en: "what slow chemistry does to DNA and to RNA", cn: "缓慢的化学反应对 DNA 和 RNA 各做了什么" }
      ]
    },
    {
      link_en: "beyond the five, a handful of minor bases, and one of them matters later",
      link_cn: "五种之外还有少数微量碱基，其中一个后面还要出现",
      en: "Some nucleic acids also contain minor bases, present in small amounts alongside the five. Hypoxanthine is the purine one worth holding: it is guanine with the amino group taken off. **Its nucleotide is inosine monophosphate, IMP, and IMP is the first complete purine nucleotide a cell builds — every adenine and every guanine nucleotide is made from it.**",
      cn: "有些核酸还含有**微量碱基（minor bases）**，与那五种一同以少量存在。嘌呤里值得记住的是**次黄嘌呤（hypoxanthine, Hyp）**：它就是把氨基去掉的鸟嘌呤。**它的核苷酸是次黄嘌呤核苷酸（IMP），而 IMP 是细胞造出的第一个完整嘌呤核苷酸——所有腺嘌呤核苷酸和鸟嘌呤核苷酸都由它而来。**",
      src: "§4.1, p.66, Obr. 4.3",
      see: [
        { id: "4-1-1-1", en: "where IMP comes from and how it splits into AMP and GMP", cn: "IMP 从哪里来，又怎样分岔成 AMP 与 GMP" },
        { id: "L-22-4-1", en: "the same two branches, with their regulation", cn: "同样这两条分支，外加它们的调控" }
      ]
    }
  ],
  terms: [
    { en: "nucleoside", cn: "核苷",
      def_en: "A base joined to a pentose and nothing else, through an N-glycosidic bond at carbon 1 of the sugar.",
      def_cn: "碱基与戊糖结合、到此为止的化合物，二者通过糖第 1 位碳上的 N-糖苷键相连。" },
    { en: "nucleotide", cn: "核苷酸",
      def_en: "A base, a pentose and a phosphate together — one phosphate more than a nucleoside, and the repeating unit of DNA and RNA.",
      def_cn: "碱基、戊糖与磷酸三者合一——比核苷多一个磷酸，是 DNA 与 RNA 的重复单元。" },
    { en: "pentose", cn: "戊糖",
      def_en: "The five-carbon sugar of the repeating unit: D-ribose in RNA, 2-deoxy-D-ribose in DNA, the two differing only by an -OH at carbon 2.",
      def_cn: "重复单元中的五碳糖：RNA 用 D-核糖，DNA 用 2-脱氧-D-核糖，二者只差第 2 位碳上的一个 -OH。" },
    { en: "N-glycosidic bond", cn: "N-糖苷键",
      def_en: "The single bond holding a base to carbon 1 of its sugar, running from N9 in a purine and from N1 in a pyrimidine.",
      def_cn: "把碱基固定在糖第 1 位碳上的那一根键；嘌呤从 N9 出发，嘧啶从 N1 出发。" },
    { en: "lactam / lactim tautomers", cn: "酰胺式／亚胺醇式互变异构体",
      def_en: "Two arrangements of the same atoms in a pyrimidine base: the stable one carries a ring C=O with H on the neighbouring nitrogen, the rare one moves that H onto the oxygen as -OH and is weakly acidic.",
      def_cn: "同一个嘧啶碱基中原子的两种排布：稳定的一种是环上 C=O、氢在相邻氮上；少见的一种把那个氢挪到氧上成 -OH，呈弱酸性。" },
    { en: "hypoxanthine", cn: "次黄嘌呤",
      def_en: "A minor purine base — guanine with its amino group removed. As the nucleotide IMP it is the first complete purine nucleotide made de novo.",
      def_cn: "一种微量嘌呤碱基——去掉氨基的鸟嘌呤。以核苷酸 IMP 的形式，它是从头合成中造出的第一个完整嘌呤核苷酸。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-1-1 */
window.BIOLITE_SPINE["4-1-1-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "ATP", "GTP", "ADP",
            "amino acid", "aspartate", "aspartic acid", "glycine", "glutamine",
            "ribose", "carbon dioxide", "kinase", "hydrolysis", "equilibrium",
            "coenzyme", "biotin", "folate", "tetrahydrofolate", "fumarate",
            "polymerase", "pyrophosphate", "carboxylation", "amino group"],
  nodeTitle_en: "Biosynthesis of purine nucleotides",
  nodeTitle_cn: "嘌呤核苷酸的生物合成",
  title_en: "The ring is built on the sugar, so a free purine base never exists — and where the one road forks in two",
  title_cn: "环是直接盖在糖上的，所以游离嘌呤碱基从不存在 —— 以及这条路在哪里分成两条",
  steps: [
    {
      en: "A cell that needs a purine nucleotide can build one from scratch out of ordinary small molecules — amino acids, a sugar phosphate, carbon dioxide — and that route is called de novo synthesis. **The precursors are built into the ring itself, atom by atom, rather than being attached to a ring that already exists.**",
      cn: "细胞需要嘌呤核苷酸时，可以用普通的小分子——氨基酸、一个糖磷酸、二氧化碳——从零造一个，这条路线叫**从头合成（de novo synthesis）**。**这些前体是一个原子一个原子地砌进环本身的，而不是挂到一个已经造好的环上。**",
      src: "§4.1.1, p.67"
    },
    {
      link_en: "so where do the ring atoms come from? Take the nitrogens first",
      link_cn: "那环上的原子从哪来？先看氮",
      en: "A purine ring holds four nitrogen atoms, and they arrive from three sources: aspartic acid gives one, glycine gives one — along with two carbons, so the whole N-C-C unit enters together — and the amide group of glutamine gives two, donated at two separate steps of the route. **Four nitrogens, three donors, glutamine counted twice: that count is the thing to carry, not an atom-by-atom map.**",
      cn: "嘌呤环上有四个氮原子，来自三个来源：天冬氨酸给一个；甘氨酸给一个——同时还带来两个碳，也就是整个 N-C-C 单元一起进来；谷氨酰胺的酰胺基给两个，在途中两个不同的步骤分别贡献。**四个氮、三个供体、谷氨酰胺算两次：要记住的是这个数目，而不是逐个原子的分布图。**",
      src: "§4.1.1.1, p.68, Obr. 4.3"
    },
    {
      link_en: "and the sugar is there from the very first reaction",
      link_cn: "而糖从第一个反应起就已经在场",
      en: "The route starts from α-D-ribose-5-phosphate, which ribose-phosphate diphosphokinase converts with ATP into 5-phosphoribosyl-α-D-diphosphate, known everywhere as PRPP. **PRPP is the scaffold: the purine ring is assembled while already sitting on this sugar phosphate, so at no moment along the eleven reactions does a free purine base exist on its own.**",
      cn: "这条路从 **α-D-核糖-5-磷酸**出发，由**核糖磷酸二磷酸激酶**用 ATP 把它转成 5′-磷酸核糖-α-D-二磷酸，通称 **PRPP**。**PRPP 就是那个脚手架：嘌呤环是在这个糖磷酸上就地砌起来的，所以在这十一步反应中，任何一刻都不存在一个独立的游离嘌呤碱基。**",
      src: "§4.1.1.1, p.68"
    },
    {
      link_en: "first atom onto the scaffold",
      link_cn: "第一个原子上脚手架",
      en: "PRPP reacts with glutamine, whose amide nitrogen displaces the diphosphate; the product is 5-phosphoribosylamine, the sugar phosphate now carrying an amino group where the diphosphate had been. **This is the committed step, meaning the point past which the material has no other use — which makes it the natural place to regulate the whole pathway.**",
      cn: "PRPP 与谷氨酰胺反应，谷氨酰胺的酰胺氮取代掉二磷酸，生成 **5-磷酸核糖胺**。**这是所谓的关键定向步骤（committed step），意思是过了这一步这批原料就再无别的去处——因此它天然就是调控整条通路的地方。**",
      src: "§4.1.1.1, p.68, Obr. 4.3",
      beyond: true,
      beyondNote: "Obr. 4.3 gives the reaction; naming it the committed step and the regulated point is standard, and the feedback inhibitors are set out in the Lehninger node linked here.",
      see: [{ id: "L-22-4-1", en: "who inhibits this step, and why its product cannot be left lying about", cn: "谁抑制这一步，以及它的产物为什么不能久放" }]
    },
    {
      link_en: "the five-membered ring goes up first",
      link_cn: "先盖五元环",
      en: "5-Phosphoribosylamine condenses with glycine at the cost of ATP to give glycinamide ribonucleotide, GAR. GAR is then formylated — a one-carbon formyl group is handed to it by N10-formyltetrahydrofolate — to give FGAR; a second nitrogen arrives from glutamine's amide, again costing ATP, giving FGAM; and FGAM closes its five-membered imidazole ring, spending one further ATP, to give 5-aminoimidazole ribonucleotide, AIR. **After these four reactions the smaller of the purine's two rings is complete.**",
      cn: "5-磷酸核糖胺与甘氨酸缩合（耗一个 ATP）生成**甘氨酰胺核苷酸（GAR）**。GAR 随后被**甲酰化**——由 **N10-甲酰四氢叶酸**交来一个一碳的甲酰基——生成 FGAR；第二个氮来自谷氨酰胺的酰胺基，同样耗一个 ATP，生成 FGAM；FGAM 再花掉一个 ATP，闭合成五元的咪唑环，得到 **5-氨基咪唑核苷酸（AIR）**。**这四步走完，嘌呤两个环里较小的那个已经完工。**",
      src: "§4.1.1.1, pp.68-69, Obr. 4.3"
    },
    {
      link_en: "now the six-membered ring, and its first carbon behaves oddly",
      link_cn: "接着盖六元环，而它的第一个碳很反常",
      en: "The carbon that becomes C6 is added from hydrogencarbonate, giving carboxyaminoimidazole ribonucleotide, CAIR. **A carboxylation in metabolism normally needs biotin as its carbon carrier and ATP to pay for it; this one needs neither, and the price of that is an unfavourable equilibrium which has to be dragged forward by the exergonic reactions further down the route.**",
      cn: "成为 C6 的那个碳以**碳酸氢根**的形式加进来，生成**羧基氨基咪唑核苷酸（CAIR）**。**代谢里的羧化反应通常需要生物素做碳载体、需要 ATP 付账；这一步两样都不要，而代价是它的平衡不利，必须靠通路后段的放能反应把它拖着往前走。**",
      src: "§4.1.1.1, p.69, Obr. 4.3"
    },
    {
      link_en: "the last nitrogen comes in on a carrier that then leaves",
      link_cn: "最后一个氮是搭着一个随后就走的载体进来的",
      en: "Aspartic acid condenses onto the ring at the cost of ATP, giving SAICAR; once its amino nitrogen has been handed over as N1, the rest of the aspartate skeleton is eliminated as fumaric acid, leaving AICAR. **Aspartate is used here as a nitrogen donor that walks away as fumarate — the same manoeuvre appears again below, on the branch that makes AMP.**",
      cn: "天冬氨酸耗一个 ATP 缩合到环上，生成 **SAICAR**；它的氨基氮作为 N1 交出去之后，天冬氨酸剩下的骨架以**延胡索酸（富马酸）**的形式被消除，留下 **AICAR**。**天冬氨酸在这里是一个交完氮就走人的氮供体——同一手法在下面通往 AMP 的那条分支上会再出现一次。**",
      src: "§4.1.1.1, p.69, Obr. 4.3"
    },
    {
      link_en: "one atom left, then the ring shuts",
      link_cn: "还差一个原子，然后环合上",
      en: "The last ring atom is put in by a second formylation, and the six-membered ring then closes with the loss of water, giving inosine monophosphate, IMP. **That closure costs no ATP, unlike the closure of the imidazole ring earlier, and it completes the route: eleven enzyme-catalysed reactions from ribose-5-phosphate to the first finished purine nucleotide.**",
      cn: "环上最后一个原子由第二次甲酰化补上，六元环随后脱去一分子水而闭合，生成**次黄嘌呤核苷酸（IMP）**。**这次闭环不花 ATP，与前面咪唑环的闭合不同；至此整条路走完：从核糖-5-磷酸到第一个完整嘌呤核苷酸，共十一步酶促反应。**",
      src: "§4.1.1.1, p.69, Obr. 4.3"
    },
    {
      link_en: "IMP is where the road forks. First fork",
      link_cn: "IMP 就是岔路口。先看第一条岔路",
      recall_en: "aspartate donating a nitrogen and leaving as fumarate, exactly as two steps up",
      recall_cn: "天冬氨酸交出一个氮、以延胡索酸的形式离开，和上面第二步一模一样",
      en: "Aspartate condenses with IMP to give adenylosuccinate, and the energy for it comes from GTP rather than ATP; adenylosuccinate lyase then eliminates fumarate and leaves AMP. **AMP differs from IMP by one group only: an amino group in place of the oxygen at position 6.**",
      cn: "天冬氨酸与 IMP 缩合生成**腺苷酸琥珀酸（adenylosuccinate）**，这一步的能量来自 **GTP** 而不是 ATP；**腺苷酸琥珀酸裂解酶**随后消除延胡索酸，留下 **AMP**。**AMP 与 IMP 的差别只有一处：第 6 位上的氧被一个氨基取代。**",
      src: "§4.1.1.1, pp.69-70, Obr. 4.4"
    },
    {
      link_en: "second fork, from the same IMP",
      link_cn: "第二条岔路，从同一个 IMP 出发",
      en: "IMP is first dehydrogenated, with NAD⁺ taken to NADH, giving xanthylate, XMP. The oxygen at C2 of XMP is then replaced by an amino group donated by glutamine's amide, paid for with one ATP split all the way to AMP and pyrophosphate, and the product is GMP. **Two purines are therefore made from one common intermediate by two short and quite different tails.**",
      cn: "IMP 先被脱氢，NAD⁺ 变成 NADH，生成**黄嘌呤核苷酸（XMP）**。XMP 第 2 位碳上的氧随后被谷氨酰胺酰胺基提供的氨基取代，代价是一个 ATP 被一路裂解为 AMP 与焦磷酸，产物是 **GMP**。**于是两种嘌呤由同一个共同中间体出发，各接一条很短、彼此很不一样的尾巴造成。**",
      src: "§4.1.1.1, p.70, Obr. 4.4"
    },
    {
      link_en: "and the two tails are cross-wired, which is worth noticing",
      link_cn: "而这两条尾巴是交叉接线的，值得留意",
      recall_en: "the GTP in the AMP branch and the ATP in the GMP branch, one step each above",
      recall_cn: "上面两步里，AMP 那条用 GTP、GMP 那条用 ATP",
      en: "The branch that makes AMP spends GTP, and the branch that makes GMP spends ATP. **Each branch is paid for out of the product of the other, so a cell well supplied with adenine nucleotides finds it easier to make guanine ones, and the reverse — the two pools are held roughly in step with no separate regulator doing it.**",
      cn: "造 AMP 的那条分支花 GTP，造 GMP 的那条分支花 ATP。**每条分支的账都由另一条的产物来付，所以腺嘌呤核苷酸充裕的细胞更容易造鸟嘌呤核苷酸，反之亦然——两个池子不靠任何额外的调节因子就大致保持同步。**",
      src: "§4.1.1.1, pp.69-70, Obr. 4.4",
      beyond: true,
      beyondNote: "The cross-wiring of GTP and ATP is drawn in Obr. 4.4; reading it as a balancing device is standard interpretation, developed with the actual feedback loops in the Lehninger node.",
      see: [{ id: "L-22-4-1", en: "the real regulation of both branches, in three tiers", cn: "两条分支真正的调控，共三层" }]
    },
    {
      link_en: "one more conversion before any of this can go into a nucleic acid",
      link_cn: "在这些东西能进核酸之前，还差一次转化",
      en: "AMP and GMP are monophosphates, and the enzymes that build nucleic acids can only use a triphosphate. **Kinases raise each one in two steps, monophosphate to diphosphate to triphosphate, consuming two ATP per nucleotide before it is ready to be built into DNA or RNA.**",
      cn: "AMP 与 GMP 都是单磷酸，而合成核酸的酶只能用三磷酸。**激酶分两步把它们抬上去，单磷酸 → 二磷酸 → 三磷酸，每个核苷酸在能被砌进 DNA 或 RNA 之前，要为此耗掉两个 ATP。**",
      src: "§4.1.1.1, p.70"
    }
  ],
  terms: [
    { en: "de novo synthesis", cn: "从头合成",
      def_en: "Building a nucleotide out of small ordinary precursors — amino acids, ribose-5-phosphate, CO2 — which are incorporated into the ring rather than attached to a finished one.",
      def_cn: "用氨基酸、核糖-5-磷酸、CO2 这些普通小前体造出核苷酸；这些前体是被砌进环里的，而不是挂到一个已经造好的环上。" },
    { en: "PRPP", cn: "PRPP（5-磷酸核糖-1-焦磷酸）",
      def_en: "The activated ribose-phosphate scaffold made from ribose-5-phosphate and ATP. Both the purine and the pyrimidine route pass through it, though at opposite ends of their assembly.",
      def_cn: "由核糖-5-磷酸和 ATP 生成的活化核糖磷酸骨架。嘌呤和嘧啶两条路线都要经过它，只是分别处在各自装配过程的两端。" },
    { en: "IMP", cn: "次黄嘌呤核苷酸 (IMP)",
      def_en: "Inosine monophosphate, the first complete purine nucleotide formed de novo and the branch point from which both AMP and GMP are made.",
      def_cn: "从头合成中形成的第一个完整嘌呤核苷酸，也是通往 AMP 与 GMP 的分岔点。" },
    { en: "adenylosuccinate", cn: "腺苷酸琥珀酸",
      def_en: "The intermediate between IMP and AMP, made from IMP and aspartate using GTP; a lyase removes fumarate from it to leave AMP.",
      def_cn: "IMP 与 AMP 之间的中间体，由 IMP 和天冬氨酸消耗 GTP 生成；一个裂解酶从中脱去延胡索酸，留下 AMP。" },
    { en: "xanthylate", cn: "黄嘌呤核苷酸 (XMP)",
      def_en: "The intermediate between IMP and GMP, formed when NAD+ dehydrogenates IMP.",
      def_cn: "IMP 与 GMP 之间的中间体，由 NAD+ 使 IMP 脱氢而成。" },
    { en: "N10-formyltetrahydrofolate", cn: "N10-甲酰四氢叶酸",
      def_en: "The one-carbon carrier that hands a formyl group to the growing ring, used twice on the purine route.",
      def_cn: "把甲酰基交给正在生长的环的一碳载体，在嘌呤路线上被用了两次。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-1-2 */
window.BIOLITE_SPINE["4-1-1-2"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "ATP", "ADP", "NADPH", "FAD",
            "amino acid", "aspartate", "aspartic acid", "glutamine", "ammonia",
            "ribose", "kinase", "hydrolase", "allosteric", "coenzyme", "cofactor",
            "tetrahydrofolate", "folate", "pyrophosphate", "decarboxylation",
            "amino group", "hydroxyl group", "PRPP", "purine", "pyrimidine",
            "nucleotide", "nucleoside", "de novo synthesis"],
  nodeTitle_en: "Biosynthesis of pyrimidine nucleotides",
  nodeTitle_cn: "嘧啶核苷酸的生物合成",
  title_en: "The same two parts assembled in the opposite order — ring first, sugar last — and the product that switches its own pathway off",
  title_cn: "同样两个部件、相反的装配顺序 —— 先环后糖 —— 以及那个把自己这条通路关掉的终产物",
  steps: [
    {
      en: "A purine ring is built up piece by piece while already sitting on PRPP, the activated ribose phosphate. **A pyrimidine ring is assembled essentially complete first, as a free ring, and only then attached to PRPP — the same two parts, joined in the opposite order.**",
      cn: "嘌呤环是坐在 **PRPP**（活化的核糖磷酸）上一块一块砌起来的。**嘧啶环则相反：先把环基本上整个造好，作为一个游离的环，然后才接到 PRPP 上——同样是这两个部件，装配顺序反过来。**",
      src: "§4.1.1.2, p.70",
      see: [{ id: "4-1-1-1", en: "the purine order, for the contrast", cn: "作为对照的嘌呤顺序" }]
    },
    {
      link_en: "and the ring is a smaller job than a purine's",
      link_cn: "而这个环的工程量比嘌呤小",
      en: "A pyrimidine is a single six-membered ring holding two nitrogen atoms, against a purine's four in two fused rings. **Both nitrogens are supplied before the ring ever meets the sugar: one arrives on carbamoyl phosphate and one on aspartic acid.**",
      cn: "嘧啶是一个六元环，含两个氮原子；嘌呤则是两个稠合环、四个氮。**这两个氮都在环与糖相遇之前就已备齐：一个由氨甲酰磷酸带来，一个由天冬氨酸带来。**",
      src: "§4.1.1.2, p.70, Obr. 4.5"
    },
    {
      link_en: "the first of those two carriers has to be made first",
      link_cn: "这两个载体中的第一个，本身得先造出来",
      en: "Carbamoyl phosphate is assembled from hydrogencarbonate and the amide nitrogen of glutamine, and it costs two molecules of ATP. **It brings in the first ring nitrogen together with the carbon that becomes C2, so one small molecule delivers two ring atoms at once.**",
      cn: "**氨甲酰磷酸**由碳酸氢根和谷氨酰胺的酰胺氮装配而成，代价是两分子 ATP。**它带进来的是第一个环上氮，外加将来成为 C2 的那个碳——一个小分子一次交付两个环上原子。**",
      src: "§4.1.1.2, p.70, Obr. 4.5"
    },
    {
      link_en: "the second nitrogen joins on, and this is the step the whole pathway is regulated at",
      link_cn: "第二个氮接上来 —— 而整条通路的调控就在这一步",
      en: "Aspartate transcarbamoylase joins carbamoyl phosphate to aspartic acid, releasing inorganic phosphate, and the product is N-carbamoylaspartate. **This is the committed step of pyrimidine synthesis: nothing that has passed it has any use other than becoming a pyrimidine nucleotide.**",
      cn: "**天冬氨酸转氨甲酰酶（ATCase）**把氨甲酰磷酸接到天冬氨酸上，释出无机磷酸，产物是 **N-氨甲酰天冬氨酸**。**这就是嘧啶合成的关键定向步骤：过了这一步的物质，除了变成嘧啶核苷酸之外没有别的用途。**",
      src: "§4.1.1.2, pp.70-71, Obr. 4.5"
    },
    {
      link_en: "the chain now bites its own tail",
      link_cn: "这条链现在咬住自己的尾巴",
      en: "An intramolecular condensation closes the six-membered ring, and the enzyme doing it is dihydroorotase; the product is dihydroorotic acid. **Dihydroorotase is a hydrolase, so this ring closure releases only water and spends no ATP — unlike the purine route, where closing the five-membered ring cost one ATP.**",
      cn: "一次分子内缩合把六元环合上，做这件事的酶是**二氢乳清酸酶**，产物是**二氢乳清酸**。**二氢乳清酸酶属于水解酶，所以这次闭环只放出水、不花 ATP——与嘌呤路线不同，那里合上五元环花掉了一个 ATP。**",
      src: "§4.1.1.2, p.71, Obr. 4.5"
    },
    {
      link_en: "one oxidation, and the ring is finished",
      link_cn: "一次氧化，环就算完工了",
      en: "Dihydroorotate is dehydrogenated, taking NAD⁺ to NADH, and what is left is orotic acid — a complete, aromatic pyrimidine ring, still with no sugar on it. **Orotate then reacts with PRPP, releasing pyrophosphate, to give orotidylate: this is the moment the finished ring meets the sugar phosphate.** Orotidylate is decarboxylated, losing CO₂, and the product is uridylate, UMP.",
      cn: "二氢乳清酸脱氢，NAD⁺ 变成 NADH，剩下的是**乳清酸**——一个完整的芳香嘧啶环，身上还没有糖。**乳清酸随后与 PRPP 反应、放出焦磷酸，生成乳清苷酸：这一刻正是造好的环与糖磷酸相遇的时刻。**乳清苷酸再脱羧、失去 CO₂，产物就是**尿苷酸（UMP）**。",
      src: "§4.1.1.2, p.71, Obr. 4.5"
    },
    {
      link_en: "from UMP the other two pyrimidine nucleotides follow",
      link_cn: "从 UMP 出发，另外两种嘧啶核苷酸随之而来",
      recall_en: "the same two-step kinase lift that raised AMP and GMP to their triphosphates",
      recall_cn: "把 AMP 和 GMP 抬到三磷酸的，也是同样这两步激酶",
      en: "Kinases raise UMP to UTP in two steps at the cost of two ATP, exactly as they do for the purine nucleotides. Cytidylate synthetase then puts an amino group onto C4 of UTP, using ATP, and the product is CTP; the nitrogen for that amino group comes from free ammonia in bacteria and from glutamine's amide in animals. **UMP, UTP and CTP are all made on this one line, so a single pathway supplies both pyrimidines that RNA needs.**",
      cn: "激酶分两步把 UMP 抬到 **UTP**，代价两个 ATP，与嘌呤核苷酸的做法完全相同。**胞苷酸合成酶**随后用 ATP 在 UTP 的 C4 上装一个氨基，产物是 **CTP**；这个氨基的氮在细菌里来自游离的氨，在动物里来自谷氨酰胺的酰胺基。**UMP、UTP、CTP 全在这一条线上造出来，所以 RNA 需要的两种嘧啶由同一条通路供给。**",
      src: "§4.1.1.2, p.71, Obr. 4.5"
    },
    {
      link_en: "the third pyrimidine is missing from that line, and it takes a route of its own",
      link_cn: "第三种嘧啶不在这条线上，它自己另走一条路",
      en: "Thymine is never synthesised as a free base and never as a ribonucleotide. **It is produced at the deoxy level only: deoxyuridylate, dUMP, is methylated to deoxythymidylate, dTMP, with N5,N10-methylenetetrahydrofolate as the methyl donor.** Thymine therefore exists in a cell only as part of DNA, which is exactly what its role calls for.",
      cn: "胸腺嘧啶从不作为游离碱基被合成，也从不作为核糖核苷酸被合成。**它只在脱氧这一层被造出来：脱氧尿苷酸（dUMP）被甲基化成脱氧胸苷酸（dTMP），甲基供体是 N5,N10-亚甲基四氢叶酸。** 所以胸腺嘧啶在细胞里只以 DNA 组成部分的形式存在，这恰好就是它的角色所要求的。",
      src: "§4.1.1.2, p.71",
      beyond: true,
      beyondNote: "p.71 gives the dUMP-to-dTMP methylation. That this one step is a much-used anticancer target, and why uracil in DNA has to be prevented, are developed in the Lehninger node linked here.",
      see: [{ id: "L-22-4-1", en: "why uracil must be kept out of DNA, and the drugs aimed at this one reaction", cn: "为什么必须把尿嘧啶挡在 DNA 之外，以及针对这一步反应的药物" }]
    },
    {
      link_en: "now back to the beginning, because the end of the pathway reaches it",
      link_cn: "现在回到起点，因为通路的终点会伸手够到它",
      recall_en: "aspartate transcarbamoylase, the committed step four steps up",
      recall_cn: "四步之前那个关键定向步骤上的天冬氨酸转氨甲酰酶",
      en: "Aspartate transcarbamoylase is allosteric, meaning it carries a second site, away from where the reaction happens, whose occupancy changes how fast it works. **CTP, the final product of the whole pathway, binds that site and inhibits the enzyme — so the end of the line switches off its own beginning, and pyrimidine nucleotides stop being made as soon as there are enough of them.**",
      cn: "天冬氨酸转氨甲酰酶是**别构酶**：它带有第二个位点，远离反应发生的地方，这个位点被占据与否会改变酶的工作速度。**CTP，也就是整条通路的终产物，正是结合在那个位点上并抑制这个酶——于是这条线的终点关掉了自己的起点，嘧啶核苷酸一旦够用就停止生产。**",
      src: "§4.1.1.2, p.71"
    },
    {
      link_en: "everything so far has been ribonucleotides. DNA needs the deoxy versions",
      link_cn: "到此为止造出来的全是核糖核苷酸。DNA 要的是脱氧版本",
      en: "A deoxyribonucleotide differs from its ribonucleotide by one missing -OH at carbon 2 of the sugar, and it is made by taking that -OH off. The enzyme is ribonucleotide reductase. **It works on the diphosphate: a ribonucleoside diphosphate, NDP, is reduced to the deoxy form dNDP — not the monophosphate, and not the triphosphate.**",
      cn: "脱氧核糖核苷酸与对应的核糖核苷酸之差，就是糖第 2 位碳上少了一个 -OH；它正是靠把那个 -OH 摘掉而造出来的。做这件事的酶是**核糖核苷酸还原酶**。**它作用于二磷酸：核糖核苷二磷酸（NDP）被还原成脱氧型 dNDP —— 既不是单磷酸，也不是三磷酸。**",
      src: "§4.1.1.2, p.72, Obr. 4.6"
    },
    {
      link_en: "and taking an -OH off is a reduction, so something has to supply the electrons",
      link_cn: "而摘掉一个 -OH 是一次还原，所以得有东西把电子交出来",
      en: "The electrons travel down a short fixed relay. NADPH hands them to thioredoxin reductase, a flavin enzyme carrying FAD; that enzyme reduces thioredoxin, a small protein with a pair of cysteines that swings between a disulfide and two free -SH groups; reduced thioredoxin then hands the electrons to ribonucleotide reductase, which uses them to strip the 2'-OH off the NDP. **One relay serves both series — every deoxyribonucleotide in DNA, purine and pyrimidine alike, has had its 2'-OH removed by this same machinery, with NADPH paying for all of it.**",
      cn: "电子沿一条固定的短接力链传下去。NADPH 把电子交给**硫氧还蛋白还原酶**（一种携带 FAD 的黄素酶）；该酶还原**硫氧还蛋白**——一个带一对半胱氨酸的小蛋白，在二硫键与两个游离 -SH 之间来回切换；还原型硫氧还蛋白再把电子交给核糖核苷酸还原酶，后者用它们把 NDP 上的 2′-OH 摘掉。**这一条接力链同时服务于两大系列——DNA 里每一个脱氧核糖核苷酸，无论嘌呤还是嘧啶，都是被这同一套装置摘掉 2′-OH 的，账全由 NADPH 付。**",
      src: "§4.1.1.2, p.72, Obr. 4.6"
    }
  ],
  terms: [
    { en: "carbamoyl phosphate", cn: "氨甲酰磷酸",
      def_en: "Made from hydrogencarbonate and glutamine's amide nitrogen at the cost of two ATP; it delivers the first ring nitrogen and the future C2 of a pyrimidine.",
      def_cn: "由碳酸氢根与谷氨酰胺的酰胺氮生成，耗两个 ATP；它交付嘧啶环的第一个氮和将来的 C2。" },
    { en: "aspartate transcarbamoylase", cn: "天冬氨酸转氨甲酰酶 (ATCase)",
      def_en: "The allosteric enzyme of the committed step, joining carbamoyl phosphate to aspartic acid; CTP binds a separate site on it and slows it down.",
      def_cn: "催化关键定向步骤的别构酶，把氨甲酰磷酸接到天冬氨酸上；CTP 结合在它另一个位点上使其减速。" },
    { en: "dihydroorotate", cn: "二氢乳清酸",
      def_en: "The closed but not yet aromatic six-membered ring, formed from N-carbamoylaspartate by loss of water alone.",
      def_cn: "已经闭合但尚未芳香化的六元环，由 N-氨甲酰天冬氨酸仅脱去一分子水而成。" },
    { en: "orotate", cn: "乳清酸",
      def_en: "The finished, aromatic pyrimidine ring, still free of any sugar; reacting it with PRPP is the step that puts ring and sugar phosphate together.",
      def_cn: "已经完工的芳香嘧啶环，身上还没有任何糖；它与 PRPP 反应，正是把环与糖磷酸接到一起的那一步。" },
    { en: "ribonucleotide reductase", cn: "核糖核苷酸还原酶",
      def_en: "Removes the 2'-OH from a ribonucleoside diphosphate to give the deoxy form; it is the single source of deoxyribonucleotides for both the purine and the pyrimidine series.",
      def_cn: "把核糖核苷二磷酸上的 2′-OH 摘掉、生成脱氧型；嘌呤与嘧啶两大系列的脱氧核糖核苷酸都只由它供给。" },
    { en: "thioredoxin", cn: "硫氧还蛋白",
      def_en: "A small protein with a pair of cysteines that alternates between a disulfide and two free -SH groups, carrying electrons from NADPH to ribonucleotide reductase.",
      def_cn: "一个带一对半胱氨酸的小蛋白，在二硫键与两个游离 -SH 之间往返，把电子从 NADPH 送到核糖核苷酸还原酶。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-2 */
window.BIOLITE_SPINE["4-1-2"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "nucleotide", "nucleoside",
            "pentose", "ribose", "purine", "pyrimidine", "hydrogen bond",
            "hydrophobic", "macromolecule", "primary structure", "amino acid",
            "hydroxyl group", "double helix"],
  nodeTitle_en: "Structure of nucleic acids",
  nodeTitle_cn: "核酸的结构",
  title_en: "One kind of bond makes the backbone, and everything else — direction, complementarity, three helix shapes — follows from what hangs off it",
  title_cn: "一种键搭出骨架，其余的一切 —— 方向性、互补性、三种螺旋形状 —— 都由挂在骨架上的东西决定",
  steps: [
    {
      en: "Nucleosides are strung together by phosphodiester bonds: one phosphate esterified twice over, to carbon 3 of one pentose and to carbon 5 of the next. **The result is a monotonous backbone of alternating sugar and phosphate with the bases hanging off the side, so the only thing that differs from one nucleic acid to another is the order of the bases.**",
      cn: "核苷之间靠**磷酸二酯键**串起来：一个磷酸酯化两次，一头连到某个戊糖的第 3 位碳，另一头连到下一个戊糖的第 5 位碳。**结果是一条糖与磷酸交替、单调重复的骨架，碱基挂在侧面；因此不同核酸之间唯一不同的东西，就是碱基的排列顺序。**",
      src: "§4.1.2, p.72, Obr. 4.7"
    },
    {
      link_en: "that 3'-5' linkage is the normal one, and RNA has a second option",
      link_cn: "3′-5′ 是常规连法，而 RNA 还有第二种选择",
      en: "Both DNA and RNA are built on the 3'-5' linkage. RNA can additionally form a 2'-5' linkage, because ribose keeps the -OH at carbon 2 that deoxyribose has lost. **An extra reactive hydroxyl on the sugar means RNA can be joined in a way DNA simply cannot be.**",
      cn: "DNA 与 RNA 都建立在 3′-5′ 连接上。RNA 还可以额外形成 **2′-5′ 连接**，因为核糖保留着第 2 位碳上的 -OH，而脱氧核糖没有。**糖上多出一个能反应的羟基，就意味着 RNA 能以一种 DNA 根本做不到的方式被连接起来。**",
      src: "§4.1.2, p.72, Obr. 4.7",
      beyond: true,
      beyondNote: "p.72 states that RNA can also form 2'-5' linkages. That a spliced-out intron is held in a lasso by exactly such a bond is developed in the Lehninger processing node, not here.",
      see: [{ id: "L-26-2-1", en: "the 2'-5' bond that ties a removed intron into a lasso", cn: "把切下的内含子系成套索的那根 2′-5′ 键" }]
    },
    {
      link_en: "a backbone built this way has two different ends, so it has a direction",
      link_cn: "这样搭出来的骨架两端不同，所以它有方向",
      en: "One end of a chain carries a free 5' position and the other a free 3' position, so a nucleic acid runs one way and not the other. **By convention a sequence is written 5' end on the left, 3' end on the right, so ACG means adenosine at the 5' end and guanosine at the 3' end.**",
      cn: "一条链的一端留着自由的 5′ 位，另一端留着自由的 3′ 位，所以核酸有一个走向。**按惯例，序列写作 5′ 端在左、3′ 端在右；因此 ACG 表示 5′ 端是腺苷、3′ 端是鸟苷。**",
      src: "§4.1.2, p.72"
    },
    {
      link_en: "above the sequence sits a shape",
      link_cn: "序列之上还有一层形状",
      en: "Two DNA chains twist around each other into a right-handed double helix, and the twist leaves two unequal channels running up the outside of it: a wide major groove and a narrow minor groove. **The edges of the bases face into those grooves, so a protein can read the sequence from outside without the two strands being pulled apart.**",
      cn: "两条 DNA 链彼此缠绕，形成一个**右手双螺旋**；这一缠绕在外侧留下两条宽窄不等的沟槽：宽的叫**主沟**，窄的叫**次沟**。**碱基的边缘朝向这两条沟，所以蛋白质可以从外面读出序列，而不必把两条链拉开。**",
      src: "§4.1.2, p.73, Obr. 4.8",
      see: [{ id: "L-28-1-1", en: "how a protein actually reads bases through the major groove", cn: "蛋白质到底怎样透过主沟读出碱基" }]
    },
    {
      link_en: "and the two strands are held to each other base by base",
      link_cn: "而两条链是一个碱基一个碱基地互相拉住的",
      en: "For spatial reasons hydrogen bonds form only between particular partners: adenine with thymine through two hydrogen bonds, guanine with cytosine through three. This is base pairing. **Both pairs have the same geometry — 10.85 Å between the two C1' atoms and a glycosidic-bond angle of 51.5° — so a pair of any sequence fits the same helix without making the backbone bulge or pinch.**",
      cn: "出于空间上的原因，氢键只在特定的搭档之间形成：腺嘌呤与胸腺嘧啶之间两个氢键，鸟嘌呤与胞嘧啶之间三个氢键。这就是**碱基配对**。**两种配对的几何完全相同——两个 C1′ 原子之间 10.85 Å，糖苷键夹角 51.5°——所以任何序列的碱基对都能装进同一个螺旋，不会让骨架鼓出来或缩进去。**",
      src: "§4.1.2, p.73, Obr. 4.9"
    },
    {
      link_en: "and that one restriction is what makes copying possible at all",
      link_cn: "而正是这一条限制，才让复制成为可能",
      en: "Because a base has exactly one legal partner, the sequence of one strand fixes the sequence of the other: the two are complementary, though never identical. **Each strand is therefore a full set of instructions for rebuilding the strand opposite it, which is what the accuracy of DNA replication rests on.**",
      cn: "由于每个碱基只有一个合法搭档，一条链的序列就把另一条链的序列定死了：两条链**互补**，但绝不相同。**因此每一条链本身就是重建对面那条链的一整套说明书——DNA 复制的准确性正是靠这一点。**",
      src: "§4.1.2, p.73",
      see: [{ id: "L-25-1-1", en: "what a replication fork does with that instruction set", cn: "复制叉拿这套说明书做什么" }]
    },
    {
      link_en: "the two strands also point opposite ways, and that has consequences everywhere later",
      link_cn: "两条链的指向也正好相反，这一点在后面到处都有后果",
      recall_en: "the 5'-to-3' direction fixed three steps up, now applied to both strands at once",
      recall_cn: "三步之前定下的 5′→3′ 方向，现在同时用在两条链上",
      en: "The two strands are antiparallel: one runs 5'→3' upward through the helix while its partner runs 5'→3' downward. **Every enzyme that copies DNA works only 5'→3', so at a fork where the two template strands — the two old strands being copied — face opposite ways, one new strand can be made continuously and the other cannot.**",
      cn: "两条链是**反平行**的：一条沿 5′→3′ 在螺旋中向上走，另一条沿 5′→3′ 向下走。**所有复制 DNA 的酶都只能按 5′→3′ 工作，所以在两条模板链朝向相反的复制叉上，一条新链可以连续合成，另一条不能。**",
      src: "§4.1.2, p.73",
      see: [{ id: "4-1-3-1", en: "the polymerase that can only work one way", cn: "只能朝一个方向工作的那个聚合酶" }]
    },
    {
      link_en: "hydrogen bonds decide who pairs with whom. Two other forces decide how hard the helix is to pull apart",
      link_cn: "氢键决定谁和谁配对。而另外两种力决定这个螺旋有多难拉开",
      en: "Purine and pyrimidine rings are flat, and they lie face to face all the way up the centre of the helix; in water this stacking is held together mainly by hydrophobic forces. At pH 7 the phosphate groups are fully ionised and would repel each other, and biogenic metal ions such as Mg²⁺ and Mn²⁺ form ionic bonds with them and screen that repulsion. **Stacking and cation screening are what make a double helix hard to separate; the hydrogen bonds supply which base goes with which.**",
      cn: "嘌呤环和嘧啶环都是扁平的，它们在螺旋中央一路面对面地叠着；在水中，这种**堆积（stacking）**主要靠疏水力维系。pH 7 时磷酸基团完全解离，本会彼此排斥，而 Mg²⁺、Mn²⁺ 这类生源金属离子与它们形成离子键，把这种排斥屏蔽掉。**堆积与阳离子屏蔽才是双螺旋难以分开的原因；氢键提供的是哪个碱基配哪个。**",
      src: "§4.1.2, p.74, Obr. 4.10",
      see: [{ id: "L-8-2-1", en: "stacking versus hydrogen bonding, and why counting bonds gets the right answer for the wrong reason", cn: "堆积与氢键之争，以及为什么数氢键会「答案对、理由错」" }]
    },
    {
      link_en: "so far one helix. It is not the only shape this molecule takes",
      link_cn: "以上说的是一种螺旋。这个分子能取的形状不止一种",
      en: "Double-stranded DNA takes more than one conformation — more than one three-dimensional shape for the same chain. When the relative water content around it falls to about 75%, B-DNA converts to the A conformation: a right-handed helix that is wider and flatter, with a deep major groove and a very shallow minor groove. **Take water away from DNA and it changes shape, which is why a dried fibre and a molecule in a cell do not give the same picture.**",
      cn: "双链 DNA 的构象有相当大的可变性。当周围的相对含水量降到约 **75%** 时，B-DNA 转变为 **A 构象**：仍是右手螺旋，但更宽、更扁平，主沟很深、次沟很浅。**把水从 DNA 身边拿走，它就会改变形状——这正是干燥纤维和细胞里的分子给出的图像不一样的原因。**",
      src: "§4.1.2, p.75, Obr. 4.11a"
    },
    {
      link_en: "and one shape turns the handedness itself around",
      link_cn: "还有一种形状把旋向本身也反了过来",
      en: "Z-DNA is a left-handed helix, formed by certain specific sequences such as d(CGCATGCG). Its minor groove is deep and its major groove is barely distinguishable. **Z-DNA occurs only in particular stretches of a chromosome, and what it is there for has not been established.**",
      cn: "**Z-DNA** 是**左手螺旋**，由某些特定序列形成，例如 d(CGCATGCG)。它的次沟很深，主沟几乎辨认不出来。**Z-DNA 只出现在染色体上某些特定的区段，而它在那里起什么作用，至今没有定论。**",
      src: "§4.1.2, p.75, Obr. 4.11b",
      openQuestion_en: "What Z-DNA does in a cell is an open question — the structure is solid, the function is not.",
      openQuestion_cn: "Z-DNA 在细胞里究竟做什么，是一个悬而未决的问题——结构是确定的，功能不是。"
    },
    {
      link_en: "with three shapes named, one of them is the one that matters",
      link_cn: "三种形状点完名，其中真正要紧的只有一种",
      en: "Under physiological conditions DNA exists almost exclusively as B-DNA. **A cell is wet, so B is the form its DNA is in; A and Z are the demonstration that the double helix names a family of related structures rather than one fixed geometry.** What a cell then does to its B-DNA is fold and twist it: underwinding it deliberately, and wrapping it round proteins to fit it into a nucleus.",
      cn: "在生理条件下，DNA 几乎完全以 **B-DNA** 的形式存在。**细胞是湿的，所以细胞里的 DNA 就处于 B 型；A 型和 Z 型的意义在于说明「双螺旋」指的是一个相关结构的家族，而不是一种固定不变的几何。** 细胞接下来对它的 B-DNA 做的事，是折叠和扭转：有意地让它缠得偏松，并把它绕在蛋白质上以塞进细胞核。",
      src: "§4.1.2, p.75",
      see: [
        { id: "L-24-2-1", en: "why cellular DNA is deliberately underwound", cn: "细胞里的 DNA 为什么被有意地缠松" },
        { id: "L-24-3-1", en: "folding a metre of DNA into a nucleus", cn: "把一米长的 DNA 折进细胞核" }
      ]
    }
  ],
  terms: [
    { en: "phosphodiester bond", cn: "磷酸二酯键",
      def_en: "One phosphate esterified twice, to carbon 3 of one pentose and carbon 5 of the next; it is what makes a nucleic acid a chain.",
      def_cn: "一个磷酸酯化两次，一头接某个戊糖的第 3 位碳、一头接下一个戊糖的第 5 位碳；核酸之所以成链，靠的就是它。" },
    { en: "major groove / minor groove", cn: "主沟／次沟",
      def_en: "The two unequal channels spiralling up the outside of a double helix. The base edges face into them, so sequence can be read from outside without separating the strands.",
      def_cn: "双螺旋外侧盘旋而上的两条宽窄不等的沟槽。碱基边缘朝向沟内，因此不必分开两条链就能从外部读出序列。" },
    { en: "base pairing", cn: "碱基配对",
      def_en: "Hydrogen bonding restricted by geometry to A with T (two bonds) and G with C (three bonds); both pairs have identical width and glycosidic angle.",
      def_cn: "受几何限制的氢键结合：A 配 T（两个氢键）、G 配 C（三个氢键）；两种配对的宽度与糖苷键夹角完全相同。" },
    { en: "antiparallel strands", cn: "反平行链",
      def_en: "The two chains of a duplex run in opposite 5'→3' directions, which is why the two new strands at a replication fork cannot be made the same way.",
      def_cn: "双链中两条链的 5′→3′ 方向彼此相反；这正是复制叉上两条新链无法用同一种方式合成的原因。" },
    { en: "base stacking", cn: "碱基堆积",
      def_en: "Flat purine and pyrimidine rings lying face to face up the centre of the helix, held mainly by hydrophobic forces in water; together with cation screening of the phosphates it is what holds the two strands together.",
      def_cn: "扁平的嘌呤环与嘧啶环在螺旋中央面对面叠合，在水中主要靠疏水力维系；它与阳离子对磷酸的屏蔽一起，才是把两条链维系住的力量。" },
    { en: "A-DNA / B-DNA / Z-DNA", cn: "A-DNA／B-DNA／Z-DNA",
      def_en: "Three conformations of the same molecule: B is the wet, physiological right-handed form; A is the wider, flatter right-handed form appearing near 75% relative water content; Z is left-handed, sequence-specific and of unknown function.",
      def_cn: "同一个分子的三种构象：B 型是含水的、生理状态下的右手形式；A 型是相对含水量约 75% 时出现的更宽更扁的右手形式；Z 型是左手螺旋，序列特异，功能未知。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-3-1 */
window.BIOLITE_SPINE["4-1-3-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "nucleotide", "chromosome",
            "hydroxyl group", "phosphodiester bond", "base pairing", "template",
            "complementary", "antiparallel", "double helix", "hydrolysis",
            "electron microscopy", "virus", "bacterium", "pyrophosphate",
            "nucleophilic attack", "proteolysis", "molecular weight", "ultraviolet"],
  nodeTitle_en: "DNA polymerases",
  nodeTitle_cn: "DNA 聚合酶",
  title_en: "A polymerase can extend a chain but cannot start one — and one enzyme carries three different active centres because of it",
  title_cn: "聚合酶能延长链，却不能起头 —— 一个酶带着三个不同的活性中心，原因就在这里",
  steps: [
    {
      en: "Gene maps of viruses and bacteria come out as loops rather than lines, and electron micrographs confirm it: the two ends of such a DNA molecule are joined, giving circular DNA, and some circles are twisted further upon themselves into a supercoiled form. **The molecules are also enormous — from 5.1 kb up to 2.9 × 10⁶ kb, which is 1.7 μm up to 0.99 m if laid out straight — so a cell too small to see holds up to a metre of DNA and must fold it to fit.**",
      cn: "病毒和细菌的基因图谱画出来是一个圈而不是一条线，电子显微照片也证实了这一点：这类 DNA 分子的两端连在一起，成为**环状 DNA**；有些环还进一步自身扭转，成为**超螺旋**形式。**这些分子还极其巨大——从 5.1 kb 一直到 2.9 × 10⁶ kb，摊直了是 1.7 μm 到 0.99 m——所以一个肉眼看不见的细胞里装着可达一米长的 DNA，必须折起来才放得下。**",
      src: "§4.1.2.1, p.76, Obr. 4.12",
      see: [
        { id: "L-24-2-1", en: "supercoiling measured and maintained", cn: "超螺旋怎么测量、怎么维持" },
        { id: "L-24-3-1", en: "the folding that fits a metre of DNA into a nucleus", cn: "把一米 DNA 折进细胞核的那套折叠" }
      ]
    },
    {
      link_en: "and copying such a molecule works because of the pairing rule",
      link_cn: "而复制这样一个分子之所以可行，靠的是配对规则",
      en: "DNA is synthesised on an existing DNA strand that acts as a template, and base complementarity does the rest: wherever the template carries an A the new strand must take a T, wherever it carries a G it must take a C. **The order of the old strand fixes the order of the new one, so no separate instruction about the sequence has to be supplied from anywhere.**",
      cn: "DNA 的合成是在一条现成的 DNA 链上进行的，这条链充当**模板**，剩下的由碱基互补完成：模板上是 A，新链就必须是 T；模板上是 G，新链就必须是 C。**旧链的顺序把新链的顺序定死了，因此关于序列的指令不必再从任何别处提供。**",
      src: "§4.1.3, p.77, Obr. 4.13-4.14"
    },
    {
      link_en: "so what has to be in the tube for that to happen?",
      link_cn: "那么，要让这件事发生，管子里得有什么？",
      en: "Four things besides the enzymes: all four deoxyribonucleotides supplied as triphosphates — dATP, dGTP, dCTP, dTTP — a DNA molecule to act as template, and a short stretch of RNA acting as a starter, called a primer. **The enzymes needed alongside them are a polymerase to extend the chain, a ligase to join finished pieces covalently, helicases and binding proteins to open the double helix and keep it open, and the enzymes that lay the RNA primer down and take it away again.**",
      cn: "除酶之外还要四样东西：四种脱氧核糖核苷酸的三磷酸形式——**dATP、dGTP、dCTP、dTTP**；一个充当模板的 DNA 分子；以及一小段充当起头者的 RNA，叫**引物（primer）**。**与之配套的酶包括：延长链的聚合酶、把完工片段共价连起来的连接酶、打开双螺旋并让它保持打开的解旋酶与结合蛋白，以及负责铺下引物、之后又把它撤走的那些酶。**",
      src: "§4.1.3, p.77"
    },
    {
      link_en: "and the copying can be seen happening",
      link_cn: "而这个复制过程是看得见的",
      en: "Electron micrographs of replicating Drosophila DNA show a replication eye: a bubble opened in the middle of a duplex, with single-stranded regions at the two forks where the strands have come apart. **That picture is what semiconservative replication predicts — each new double helix keeps one whole old strand and pairs it with one newly made strand.**",
      cn: "正在复制的果蝇 DNA 的电子显微照片上可以看到**复制眼**：双链中间鼓开的一个泡，泡两端的复制叉处有已经分开的单链区域。**这幅图正是半保留复制所预期的样子——每一个新的双螺旋都保留一整条旧链，并让它与一条新造的链配对。**",
      src: "§4.1.3, p.77, Obr. 4.15",
      see: [{ id: "L-25-1-1", en: "the density experiment that settled semiconservative replication", cn: "用密度实验一锤定音的那次证明" }]
    },
    {
      link_en: "now the reaction itself, written out",
      link_cn: "现在把这个反应本身写出来",
      en: "DNA polymerase I catalyses a nucleophilic attack: the free 3'-OH at the end of the growing strand attacks the phosphorus atom of an incoming dNTP, a phosphodiester bond forms, and pyrophosphate leaves. Mg²⁺ ions are essential, and the released pyrophosphate is then hydrolysed, which pulls the reaction forward and makes it effectively irreversible. **Because the new bond is always made at a 3'-OH, a DNA chain can only grow 5'→3', with no exception anywhere in biology.**",
      cn: "DNA 聚合酶 I 催化的是一次亲核攻击：正在延长的链末端那个游离的 **3′-OH** 进攻新来的 dNTP 上的磷原子，形成一根磷酸二酯键，焦磷酸离去。**Mg²⁺** 是必需的；放出的焦磷酸随后被水解，这一水解把反应往前拉，使它实际上不可逆。**由于新键永远是在 3′-OH 上生成的，DNA 链只能沿 5′→3′ 方向生长，生物学上无一例外。**",
      src: "§4.1.3, p.78"
    },
    {
      link_en: "and that same fact carries a restriction with it",
      link_cn: "同一个事实还带来一条限制",
      recall_en: "the 3'-OH from the step above: if the enzyme needs one, something else must put it there",
      recall_cn: "上一步那个 3′-OH：既然酶需要它，那就得有别的东西先把它摆上去",
      en: "The enzyme has nothing to attack with unless a polynucleotide segment is already paired to the template and offering a free 3'-OH. **A DNA polymerase can extend a chain but can never start one, which is why a short RNA primer has to be laid down first — and why that piece of RNA then has to be removed again and replaced with DNA.**",
      cn: "除非已经有一段多核苷酸与模板配好对、并提供一个游离的 3′-OH，否则这个酶根本无从下手。**DNA 聚合酶能延长一条链，却永远不能起头——所以必须先铺下一小段 RNA 引物；也正因为如此，那一小段 RNA 之后又必须被撤掉、换成 DNA。**",
      src: "§4.1.3, p.78"
    },
    {
      link_en: "the enzyme's single most important property",
      link_cn: "这个酶最重要的一条性质",
      en: "DNA polymerase I adds deoxynucleotides strictly in the order dictated by the template, and this is what makes it a copying machine rather than a chain-building one. **Fidelity begins here: the first line of defence against a wrong base is simply that the enzyme will not readily add one.**",
      cn: "DNA 聚合酶 I 严格按模板所指定的顺序加入脱氧核苷酸；正是这一点使它成为一台复制机器，而不只是一台造链机器。**准确性从这里开始：对付错误碱基的第一道防线，就是这个酶本来就不容易把错的加上去。**",
      src: "§4.1.3, p.78"
    },
    {
      link_en: "and a second line of defence sits in the same protein",
      link_cn: "而第二道防线就在同一个蛋白里",
      en: "DNA polymerase I is also an exonuclease, an enzyme that cuts nucleotides off the end of a chain. Its 3'→5' exonuclease activity chews back from the same 3'-OH end the polymerase works at, one link at a time, and it acts as a proofreader: a base that has been paired wrongly is cut out again. DNA polymerase III carries the identical activity. **One active site writes and another reads back over what was just written, at the same end of the same strand.**",
      cn: "DNA 聚合酶 I 同时也是一个**外切核酸酶**——即从链的末端把核苷酸切下来的酶。它的 **3′→5′ 外切核酸酶**活性从聚合酶干活的同一个 3′-OH 端往回啃，一次一个，起的是**校对**的作用：配错的碱基会被切掉。DNA 聚合酶 III 带有完全相同的活性。**一个活性位点写，另一个活性位点在同一条链的同一端回头读一遍刚写下的东西。**",
      src: "§4.1.3, p.78, Obr. 4.16"
    },
    {
      link_en: "the third activity is a different animal entirely",
      link_cn: "第三个活性完全是另一回事",
      en: "A separate and unrelated 5'→3' nuclease activity of DNA polymerase I cuts inside the chain, within a double-helical stretch, starting at a nick — a break in one strand's backbone with the other strand intact. It takes out up to 10 nucleotides at once. **The first two activities work at the end of a chain; this one works in the middle of one, which is why it can reach material the other two never could.**",
      cn: "DNA 聚合酶 I 还有一个独立、与前两者无关的 **5′→3′ 核酸酶**活性，它在链的**内部**、在双螺旋区域里切割，从一个**缺口（nick）**开始——缺口就是一条链骨架上的断裂，而对面那条链完好。它一次可以取走多达 **10 个核苷酸**。**前两个活性都在链的末端干活，这一个在链的中间干活；正因如此，它够得到另外两个永远够不到的东西。**",
      src: "§4.1.3, p.79, Obr. 4.17"
    },
    {
      link_en: "run that nuclease and the polymerase together and something useful happens",
      link_cn: "把这个核酸酶和聚合酶一起开动，就出现了一件有用的事",
      en: "The nuclease removes nucleotides ahead of the nick while the polymerase fills in behind it, so the nick itself travels along the molecule toward the 3'-end with the DNA otherwise unchanged; this is nick translation. **It earns its keep twice over: it takes the RNA primer out during ordinary replication, and it excises damage such as an ultraviolet-induced pyrimidine dimer — two adjacent pyrimidines welded together by light — with the polymerase filling the gap in the same pass.**",
      cn: "核酸酶在缺口前方切走核苷酸，聚合酶在缺口后方补上，于是缺口本身沿分子向 3′ 端移动，而 DNA 的其余部分毫无改变；这就是**缺口平移（nick translation）**。**它有两处用武之地：一是在正常复制中把 RNA 引物撤掉；二是切除损伤，例如紫外线造成的嘧啶二聚体——两个相邻嘧啶被光焊在一起——并由聚合酶在同一趟里把空缺补上。**",
      src: "§4.1.3, p.79, Obr. 4.18",
      see: [{ id: "L-25-2-1", en: "the repair systems this activity belongs to", cn: "这一活性所属的那套修复系统" }]
    },
    {
      link_en: "three jobs in one protein, and they can be taken apart",
      link_cn: "一个蛋白干三件事，而这三件事是可以拆开的",
      en: "DNA polymerase I is a three-function enzyme with three distinct active centres. Limited proteolysis — cutting the protein at a few exposed points and no further — splits it into a small fragment of molecular weight 36,000 carrying the whole 5'→3' nuclease activity, and a large piece of molecular weight 67,000 called the Klenow fragment, carrying the polymerase and the 3'→5' exonuclease. **The Klenow fragment can copy DNA and proofread it but cannot remove a primer, because the activity that does that left with the small fragment.**",
      cn: "DNA 聚合酶 I 是一个三功能酶，带有三个各自独立的活性中心。**有限蛋白水解**——只在少数几个暴露位点把蛋白切开、到此为止——把它拆成两块：一块是分子质量 36,000 的小片段，带走了全部 5′→3′ 核酸酶活性；另一块是分子质量 67,000 的大片段，叫 **Klenow 片段**，带着聚合酶活性和 3′→5′ 外切核酸酶活性。**Klenow 片段能复制 DNA、也能校对，却不能去除引物，因为干那件事的活性跟着小片段走了。**",
      src: "§4.1.3, pp.79-80"
    },
    {
      link_en: "and it is not the only polymerase in the cell",
      link_cn: "而细胞里的聚合酶不止它一个",
      en: "E. coli has three: DNA polymerase I, II and III. All three polymerise and all three proofread with a 3'→5' exonuclease; DNA polymerase II lacks the 5'→3' nuclease. **Only DNA polymerase III has a demonstrated job inside a living cell — it is the replicase, making the bulk of all new DNA, while DNA polymerase I is left removing primers and filling the gaps, so the first one discovered turns out to be the cleanup enzyme.**",
      cn: "大肠杆菌有三种：DNA 聚合酶 **I、II、III**。三者都能聚合，也都带 3′→5′ 外切核酸酶用于校对；DNA 聚合酶 II 缺少 5′→3′ 核酸酶活性。**三者之中只有 DNA 聚合酶 III 在活细胞里有已经证实的职务——它是复制酶，绝大部分新 DNA 都由它合成；DNA 聚合酶 I 则只剩下去除引物、填补空缺的活儿。于是最先被发现的那一个，原来是做善后的。**",
      src: "§4.1.3, p.80",
      see: [{ id: "L-25-1-1", en: "what the replicase looks like as a machine, with its sliding clamp", cn: "复制酶作为一台机器长什么样，包括它的滑动夹" }]
    }
  ],
  terms: [
    { en: "template", cn: "模板",
      def_en: "The existing DNA strand being copied; its base order fixes the base order of the new strand through complementarity.",
      def_cn: "正在被复制的那条现成 DNA 链；它的碱基顺序通过互补决定新链的碱基顺序。" },
    { en: "primer", cn: "引物",
      def_en: "A short stretch of RNA already paired to the template, supplying the free 3'-OH that a polymerase needs before it can add anything.",
      def_cn: "一小段已经与模板配好对的 RNA，提供聚合酶动手之前所必须有的那个游离 3′-OH。" },
    { en: "semiconservative replication", cn: "半保留复制",
      def_en: "Each daughter double helix keeps one whole parental strand and pairs it with one newly made strand.",
      def_cn: "每个子代双螺旋保留一整条亲代链，并让它与一条新合成的链配对。" },
    { en: "3'→5' exonuclease (proofreading)", cn: "3′→5′ 外切核酸酶（校对）",
      def_en: "Chews nucleotides back one at a time from the growing 3'-OH end, cutting out a base that was paired wrongly; carried by DNA polymerase I and III alike.",
      def_cn: "从正在延长的 3′-OH 端一次一个地往回切核苷酸，把配错的碱基剪掉；DNA 聚合酶 I 与 III 都带有它。" },
    { en: "nick translation", cn: "缺口平移",
      def_en: "The 5'→3' nuclease removing nucleotides ahead of a single-strand break while the polymerase fills in behind it, so the break travels toward the 3'-end; it is how an RNA primer is taken out and how excised damage is patched.",
      def_cn: "5′→3′ 核酸酶在单链断裂处前方切走核苷酸、聚合酶在后方补上，于是断裂沿分子向 3′ 端移动；RNA 引物的去除和损伤切除后的填补都靠它。" },
    { en: "Klenow fragment", cn: "Klenow 片段",
      def_en: "The 67,000 molecular weight piece left when limited proteolysis takes the 5'→3' nuclease away from DNA polymerase I; it still polymerises and proofreads.",
      def_cn: "有限蛋白水解把 5′→3′ 核酸酶从 DNA 聚合酶 I 上切走后剩下的那块，分子质量 67,000；它仍能聚合、仍能校对。" },
    { en: "DNA polymerase III", cn: "DNA 聚合酶 III",
      def_en: "The replicase of E. coli — the only one of the three whose role in a living cell is established, and the enzyme that makes the bulk of new DNA.",
      def_cn: "大肠杆菌的复制酶——三者中唯一在活细胞里作用已经确立的一个，绝大部分新 DNA 由它合成。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-3-2 */
window.BIOLITE_SPINE["4-1-3-2"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "ATP", "NAD+", "nucleotide",
            "chromosome", "template", "primer", "double helix", "antiparallel",
            "phosphodiester bond", "hydrolysis", "lysine", "amino group",
            "nucleophilic attack", "electron microscopy", "pyrophosphate",
            "recombination", "holoenzyme", "DNA polymerase III", "DNA polymerase I",
            "hydroxyl group", "semiconservative replication", "autoradiography"],
  nodeTitle_en: "Helicases, binding proteins and DNA ligases",
  nodeTitle_cn: "解旋酶、结合蛋白与 DNA 连接酶",
  title_en: "One restriction — 5'→3' only — forces the two strands to be copied by two different procedures, and the rest of the machinery exists to make the awkward one work",
  title_cn: "只有一条限制——只能 5′→3′——就逼得两条链必须用两套不同的做法来复制；其余的机器，全是为了让麻烦的那条能走通",
  steps: [
    {
      en: "Replicating E. coli DNA can be photographed, either by autoradiography after feeding the cells ³H-labelled thymidine or by electron microscopy, and what appears is a closed circle carrying an internal loop — the theta structure, named for its likeness to the Greek letter θ. **The loop is the region already copied, and the two points where it meets the unopened circle are replication forks: a fork is the place where the helix is being unwound and new DNA is being made at the same moment.**",
      cn: "正在复制的大肠杆菌 DNA 是可以拍下来的：或者给细胞喂 ³H 标记的胸苷后做**放射自显影**，或者用电子显微镜观察。看到的是一个带着内部环的闭合圆圈——**θ 结构**，因形状像希腊字母 θ 而得名。**那个环就是已经复制过的区域，环与尚未打开的圆圈相接的那两个点就是复制叉：复制叉是螺旋正在被解开、同时又正在合成新 DNA 的地方。**",
      src: "§4.1.3, p.82, Obr. 4.21"
    },
    {
      link_en: "opening the helix takes work, and three kinds of protein do it",
      link_cn: "把螺旋打开是要做功的，由三类蛋白完成",
      en: "Helicase, in E. coli the DnaB protein, travels along the lagging-strand template prising the two strands apart, and a separate unwinding protein called Rep travels along the other template doing the same; both are paid for by hydrolysis of ATP. Behind them, SSB protein — single-strand binding protein — coats the separated strands. **Two strands just pulled apart are perfectly complementary and would snap back together, so SSB is there to hold them open until a polymerase has copied them.**",
      cn: "**解旋酶**在大肠杆菌里就是 **DnaB 蛋白**，它沿滞后链模板前进，把两条链撬开；另有一个叫 **Rep** 的解旋蛋白沿另一条模板做同样的事；两者的开销都由 **ATP 水解**支付。在它们后面，**SSB 蛋白**（单链结合蛋白）覆盖住已经分开的链。**刚被拉开的两条链彼此完全互补，会立刻弹回去重新配上，所以 SSB 的职责就是把它们撑开，直到聚合酶把它们抄完为止。**",
      src: "§4.1.3, p.80, Obr. 4.19"
    },
    {
      link_en: "and now the restriction that shapes everything that follows",
      link_cn: "接下来就是决定后面一切的那条限制",
      recall_en: "the 5'→3'-only rule, and the antiparallel strands: put the two together and a problem appears",
      recall_cn: "只能 5′→3′ 这条规则，加上两条链反平行 —— 两件事放在一起，问题就来了",
      en: "Every known DNA polymerase extends a chain only 5'→3', and the two template strands run in opposite directions. **A fork moving one way therefore exposes one template that can be read in the direction the fork is opening and one that cannot, so the two new strands have to be made by two different procedures — replication is semidiscontinuous.**",
      cn: "所有已知的 DNA 聚合酶都只能沿 5′→3′ 延伸链，而两条模板链的走向相反。**于是一个朝某个方向前进的复制叉，露出的两条模板中，一条正好可以顺着复制叉打开的方向读，另一条不行；两条新链只能用两套不同的做法来造——复制是半不连续的。**",
      src: "§4.1.3, p.82"
    },
    {
      link_en: "take the easy strand first",
      link_cn: "先说容易的那条",
      en: "One new strand grows 5'→3' in the same direction the fork is moving. **This is the leading strand, and it is made practically continuously — one long uninterrupted run behind the advancing fork.**",
      cn: "有一条新链沿 5′→3′ 生长，方向恰好与复制叉前进的方向一致。**这条是先导链，它几乎是连续合成的——跟在前进的复制叉后面一路不停地长下去。**",
      src: "§4.1.3, p.82"
    },
    {
      link_en: "and now the awkward one",
      link_cn: "现在说麻烦的那条",
      en: "The other new strand must also be made 5'→3', but for it that direction points backwards, away from the fork. **It can therefore only be built in short pieces, each one started near the fork and extended backwards until it runs into the piece made before: this is the lagging strand, and its pieces are Okazaki fragments.**",
      cn: "另一条新链同样必须沿 5′→3′ 合成，但对它来说这个方向是**朝后**的，背离复制叉。**因此它只能一小段一小段地造：每一段都在复制叉附近起头，向后延伸，直到撞上前一段为止——这条就是滞后链，这些小段就是冈崎片段。**",
      src: "§4.1.3, p.82"
    },
    {
      link_en: "every one of those pieces needs a starting point, and a polymerase cannot supply one",
      link_cn: "每一小段都需要一个起点，而聚合酶自己给不出这个起点",
      en: "At each newly opened site a stretch of RNA up to 60 nucleotides long is laid down to serve as primer, made jointly, it is thought, by RNA polymerase and the much smaller enzyme primase. **RNA is used and not DNA because an RNA polymerase can start a chain from nothing while a DNA polymerase cannot — the price is that every primer must afterwards be taken out again.**",
      cn: "在每一个新打开的位点上，会先铺下一段最长 **60 个核苷酸**的 RNA 充当引物；据推测，它由 RNA 聚合酶与远比它小的**引发酶（primase）**共同合成。**这里用 RNA 而不用 DNA，是因为 RNA 聚合酶能从零起头，而 DNA 聚合酶不能——代价是每一段引物事后都必须再被撤掉。**",
      src: "§4.1.3, p.83, Obr. 4.23"
    },
    {
      link_en: "with a 3'-OH now available, the replicase takes over",
      link_cn: "有了 3′-OH，复制酶就接手了",
      en: "DNA polymerase III extends each primer into a DNA segment of about 1,000 to 2,000 nucleotides, and that segment is one Okazaki fragment. **A bacterial chromosome is therefore finished on its lagging side as some thousands of separate pieces, every one of them carrying a short piece of RNA at its 5' end.**",
      cn: "**DNA 聚合酶 III** 把每段引物延伸成约 **1,000–2,000 个核苷酸**的 DNA，这一段就是一个冈崎片段。**因此一条细菌染色体在滞后链那一侧，是以数以千计的独立小段完成的，而每一小段的 5′ 端都挂着一小截 RNA。**",
      src: "§4.1.3, p.83"
    },
    {
      link_en: "so those RNA pieces have to come out",
      link_cn: "所以那些 RNA 必须被弄出来",
      recall_en: "nick translation, the third activity of DNA polymerase I",
      recall_cn: "缺口平移，DNA 聚合酶 I 的第三个活性",
      en: "DNA polymerase I moves in behind: its 5'→3' nuclease cuts the RNA out while its polymerase activity fills the space with DNA. **What is left when it lets go is a nick — the two DNA ends now sit next to each other, correctly paired to the template, with no bond between them.**",
      cn: "**DNA 聚合酶 I** 随后跟上，用它的 5′→3′ 核酸酶把 RNA 切掉，同时用聚合酶活性把空出来的地方填成 DNA。**它松手时留下的是一个缺口（nick）——两个 DNA 末端已经并排、也都与模板配对正确，只是彼此之间还没有键。**",
      src: "§4.1.3, p.83, Obr. 4.24"
    },
    {
      link_en: "one bond left to make, and one enzyme makes it",
      link_cn: "还差一根键，由一个酶来做",
      en: "DNA ligase forms the phosphodiester bond between the 3'-OH of one strand end and the 5'-phosphate of the other. The reaction is endergonic, so it must be paid for: bacterial ligases characteristically spend NAD⁺, eukaryotic ligases spend ATP. **Both cofactors are used for the same purpose — as adenylyl-group donors, not as a source of the phosphate that ends up in the new bond.**",
      cn: "**DNA 连接酶**在一端的 3′-OH 与另一端的 5′-磷酸之间形成磷酸二酯键。这个反应是**吸能**的，所以必须付账：细菌的连接酶典型地花 **NAD⁺**，真核生物的连接酶花 **ATP**。**两种辅因子在这里的用途相同——都是充当腺苷酰基供体，而不是提供最终留在新键里的那个磷酸。**",
      src: "§4.1.3, p.80"
    },
    {
      link_en: "and the way it spends that adenylyl group is worth following, because the energy goes somewhere specific",
      link_cn: "而它花掉那个腺苷酰基的方式值得跟一遍，因为能量是有明确去处的",
      en: "Three steps. First the enzyme reacts with ATP or NAD⁺ and ends up carrying AMP covalently, joined through a phosphoamide bond to the ε-amino group of one of its lysine residues, with pyrophosphate — or nicotinamide-ribose-phosphate, from NAD⁺ — released. Second, that AMP is handed from the lysine onto the 5'-phosphate of the DNA, giving a DNA-adenylate. Third, the 3'-OH of the other strand end attacks that activated phosphate, the new bond forms, and AMP leaves. **The whole cofactor is spent making one 5'-phosphate reactive enough to be attacked, which is what turns an uphill joining reaction into a downhill one.**",
      cn: "三步。第一步，酶与 ATP 或 NAD⁺ 反应，最后共价地带上一个 **AMP**，通过**磷酰胺键**接在它某个赖氨酸残基的 ε-氨基上，同时放出焦磷酸（若用 NAD⁺ 则放出烟酰胺-核糖-磷酸）。第二步，这个 AMP 从赖氨酸转交到 DNA 的 5′-磷酸上，形成 **DNA-腺苷酸**复合物。第三步，另一端的 3′-OH 进攻这个被活化的磷酸，新键生成，AMP 离去。**整个辅因子花掉，只为把一个 5′-磷酸变得足够活泼、值得被进攻——正是这一手把一个上坡的连接反应变成了下坡的。**",
      src: "§4.1.3, p.81, Obr. 4.20"
    },
    {
      link_en: "and what ligase cannot do defines where it can be used",
      link_cn: "而连接酶做不到的事，正好界定了它能用在哪里",
      en: "DNA ligase cannot join two single-stranded molecules; at least part of the DNA has to be double-helical already, so that the two ends are held next to each other while the bond is made. **That restriction fits all three of its jobs exactly: joining Okazaki fragments during replication, closing a gap left after damaged DNA has been cut out, and splicing strands together during eukaryotic recombination — in every case the ends are already aligned by a template.**",
      cn: "DNA 连接酶无法把两条独立的单链接起来；DNA 至少要有一部分已经是双螺旋，好让两个末端在成键时被并排固定住。**这条限制恰好与它的三项任务全部吻合：复制时连接冈崎片段、切除受损 DNA 后封闭留下的缺口、以及真核生物重组时把链拼接起来——每一种情形下，两个末端都已经由模板对齐好了。**",
      src: "§4.1.3, p.80",
      see: [{ id: "L-25-3-1", en: "recombination, and why a break needs another copy of the sequence", cn: "重组，以及断裂为什么需要该序列的另一份拷贝" }]
    },
    {
      link_en: "finally, all of this is one machine rather than a queue of enzymes",
      link_cn: "最后，这一切是一台机器，而不是排着队的一群酶",
      en: "Both new strands are thought to be made on a single multiprotein complex, the replisome, built around probably two DNA polymerase III holoenzymes. **For one complex to make both strands at once, the lagging-strand template has to loop back around the replisome, which turns its awkward direction round so the holoenzyme can still read it 5'→3'.** When a fragment is finished the holoenzyme lets go and moves to a fresh primer laid down near the fork by the primosome, and the whole assembly travels outward in both directions from a single origin on the circle.",
      cn: "两条新链据推测是在同一个多蛋白复合体上合成的，这个复合体叫**复制体（replisome）**，其核心大概是**两套 DNA 聚合酶 III 全酶**。**要让一个复合体同时造出两条链，滞后链模板必须绕着复制体翻折成环——这一折就把它那个别扭的方向掉了过来，使全酶仍然能按 5′→3′ 读它。** 一个片段做完，全酶就松开，转到复制叉附近由**引发体（primosome）**新铺的引物上去；整套装置从圆环上的单一起点出发，向两个方向同时推进。",
      src: "§4.1.3, p.84, Obr. 4.25",
      see: [{ id: "L-25-1-1", en: "the same fork with its clamp, clamp loader and Ter sites", cn: "同一个复制叉，外加它的夹子、装夹器与 Ter 位点" }]
    }
  ],
  terms: [
    { en: "replication fork", cn: "复制叉",
      def_en: "The point on a DNA molecule where the double helix is being unwound and new strands are being made at the same moment.",
      def_cn: "DNA 分子上双螺旋正在被解开、同时正在合成新链的那个位点。" },
    { en: "helicase", cn: "解旋酶",
      def_en: "The enzyme that prises the two strands apart at a fork, in E. coli the DnaB protein travelling along the lagging-strand template on energy from ATP.",
      def_cn: "在复制叉处把两条链撬开的酶；大肠杆菌里是 DnaB 蛋白，沿滞后链模板前进，靠 ATP 供能。" },
    { en: "SSB protein", cn: "SSB 蛋白（单链结合蛋白）",
      def_en: "Coats the separated single strands behind the helicase so they cannot snap back into a duplex before being copied.",
      def_cn: "在解旋酶后方覆盖住已分开的单链，使它们在被复制之前无法弹回去重新形成双链。" },
    { en: "semidiscontinuous replication", cn: "半不连续复制",
      def_en: "One new strand made continuously and the other in pieces, forced by the fact that polymerases work only 5'→3' while the two templates point opposite ways.",
      def_cn: "一条新链连续合成、另一条分段合成；成因是聚合酶只能 5′→3′ 工作，而两条模板方向相反。" },
    { en: "Okazaki fragment", cn: "冈崎片段",
      def_en: "One of the 1,000-2,000 nucleotide pieces that the lagging strand is assembled from, each begun on its own RNA primer.",
      def_cn: "拼成滞后链的那些 1,000–2,000 个核苷酸的小段之一，每一段都从自己的 RNA 引物起头。" },
    { en: "primase", cn: "引发酶",
      def_en: "The small enzyme that, with RNA polymerase, lays down the RNA primers a DNA polymerase needs before it can start.",
      def_cn: "与 RNA 聚合酶一起铺下 RNA 引物的小酶；DNA 聚合酶必须先有这些引物才能动手。" },
    { en: "DNA ligase", cn: "DNA 连接酶",
      def_en: "Seals a nick by forming a phosphodiester bond between a 3'-OH and a 5'-phosphate, spending NAD+ in bacteria or ATP in eukaryotes to activate that phosphate; it cannot join two single strands.",
      def_cn: "通过在 3′-OH 与 5′-磷酸之间成磷酸二酯键来封闭缺口，细菌花 NAD+、真核花 ATP 来活化那个磷酸；它不能连接两条单链。" },
    { en: "replisome", cn: "复制体",
      def_en: "The multiprotein complex, with probably two DNA polymerase III holoenzymes, on which both new strands are made at one fork; the lagging-strand template loops around it.",
      def_cn: "一个多蛋白复合体，内含大概两套 DNA 聚合酶 III 全酶，同一个复制叉的两条新链都在它上面合成；滞后链模板绕着它翻折成环。" },
    { en: "theta structure", cn: "θ 结构",
      def_en: "The shape a replicating circular chromosome takes — a closed circle with an internal loop, the loop being the part already copied.",
      def_cn: "正在复制的环状染色体所呈现的形状——一个带内环的闭合圆圈，环就是已经复制过的部分。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-4-1 */
window.BIOLITE_SPINE["4-1-4-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "amino acid", "peptide",
            "nucleotide", "template", "chromosome", "cytoplasm", "nucleus",
            "virus", "ribosome", "double helix", "base pairing", "molecular weight",
            "histone", "chromatin", "replication", "polymerase"],
  nodeTitle_en: "Types and properties of RNA",
  nodeTitle_cn: "RNA 的种类与性质",
  title_en: "Protein is never made straight off DNA, and the RNAs that stand in between are built for four different jobs",
  title_cn: "蛋白质从来不是直接照着 DNA 造的，而夹在中间的这些 RNA 是为四种完全不同的活儿造的",
  steps: [
    {
      en: "DNA is never the direct template for making a protein. The information goes out through RNA in two named stages: transcription, in which one DNA strand is copied into RNA, and translation, in which that RNA is read out as a sequence of amino acids. **Everything a gene does to a cell it does through an RNA intermediate.**",
      cn: "DNA 从来不是造蛋白质时直接使用的模板。信息要经由 RNA 分两个阶段传出去：**转录**，即把 DNA 的一条链抄成 RNA；**翻译**，即把这条 RNA 读成一串氨基酸。**一个基因对细胞所做的一切，都要通过一个 RNA 中间体来完成。**",
      src: "§4.1.4, p.85"
    },
    {
      link_en: "Crick drew that as a map of where information is allowed to go",
      link_cn: "Crick 把这件事画成了一张「信息允许往哪走」的图",
      en: "Crick's 1953 statement is called the central dogma of molecular biology, and it says that DNA directs its own replication and its transcription into RNA, and that RNA in turn directs its own translation into protein. Special transfers exist alongside it: RNA-directed RNA polymerase in some viruses and plants, and RNA-directed DNA polymerase, reverse transcriptase, in some RNA viruses. **The one transfer never demonstrated is DNA specifying a protein directly, which is exactly the step the RNA intermediate exists to fill.**",
      cn: "Crick 在 1953 年提出的**分子生物学中心法则**说：DNA 指导自身的复制，也指导自身向 RNA 的转录；RNA 又进而指导自身向蛋白质的翻译。此外还有一些**特殊传递**：某些病毒和植物里有 RNA 指导的 RNA 聚合酶；某些 RNA 病毒里有 RNA 指导的 DNA 聚合酶，即**逆转录酶**。**唯一从未被证实的传递，是 DNA 直接指定蛋白质——而这恰恰就是那个 RNA 中间体所填补的位置。**",
      src: "§4.1.4, p.85, Obr. 4.26",
      see: [{ id: "L-26-3-1", en: "the arrows that run backwards, and where your own cells use them", cn: "倒着走的那些箭头，以及你自己的细胞在哪里用到它们" }]
    },
    {
      link_en: "first RNA class: the one carrying the message",
      link_cn: "第一类 RNA：携带信息的那一种",
      en: "Messenger RNA, mRNA, is what actually carries genetic information from DNA to protein. Its length is set directly by the size and number of the peptide chains it encodes, and besides that coding segment it carries a regulatory segment as well. **In E. coli mRNA is only about 5% of all RNA and it is heterogeneous in size — which is exactly what a molecule whose length is dictated by its gene has to be.**",
      cn: "**信使 RNA（mRNA）**才是真正把遗传信息从 DNA 带到蛋白质那里的分子。它的长度直接由它所编码的肽链的大小和数目决定；除编码区段之外，它还带着一段**调控区段**。**在大肠杆菌里 mRNA 只占全部 RNA 的约 5%，而且大小参差不齐——一个长度由自己的基因决定的分子，本来就只能是这样。**",
      src: "§4.1.4, p.86, Tab. 4.2"
    },
    {
      link_en: "and in a eukaryote what comes off the DNA is not yet that molecule",
      link_cn: "而在真核细胞里，从 DNA 上下来的还不是那个分子",
      en: "The first transcript of a eukaryotic gene is heterogeneous nuclear RNA, hnRNA, and it is substantially longer than the transcript of the structural gene alone. It holds coding segments called exons and non-coding segments called introns, and ribonucleases process it — cutting the introns out and joining the exons — into functional single-stranded mRNA. **A eukaryotic mRNA is always a processed product, so its length and the length of the gene it came from are two different numbers.**",
      cn: "真核基因的第一个转录本是**核内不均一 RNA（hnRNA）**，它比结构基因本身的转录本长得多。它里面既有叫**外显子（exon）**的编码区段，也有叫**内含子（intron）**的非编码区段；核糖核酸酶类的酶对它进行加工——把内含子切掉、把外显子接起来——成为有功能的单链 mRNA。**真核生物的 mRNA 永远是加工后的产物，所以它的长度和它出自的那个基因的长度是两个不同的数字。**",
      src: "§4.1.4, p.86",
      see: [
        { id: "4-2-4-2", en: "how the cap and the splicing are actually done", cn: "帽子结构和剪接到底是怎么做的" },
        { id: "L-26-2-1", en: "processing a transcript, in full", cn: "转录本加工的完整机制" }
      ]
    },
    {
      link_en: "second class, and by mass it is most of the RNA in a cell",
      link_cn: "第二类，按质量算，细胞里的 RNA 大部分是它",
      en: "Ribosomal RNA, rRNA, is the structural component of the ribosome, and it makes up about 80% of all RNA in E. coli. **Most of a cell's RNA carries no message at all: it is building material for the machine that reads messages.**",
      cn: "**核糖体 RNA（rRNA）**是核糖体的结构组分，在大肠杆菌里约占全部 RNA 的 **80%**。**细胞里绝大部分 RNA 根本不携带任何信息：它们是那台读取信息的机器的建筑材料。**",
      src: "§4.1.4, p.86"
    },
    {
      link_en: "and the rRNAs are named by how fast they sink",
      link_cn: "而这些 rRNA 是按它们下沉的快慢命名的",
      en: "An RNA is named by its sedimentation coefficient, written S — how fast it moves through a solution in a centrifuge, which rises with mass and with compactness. **Prokaryotes have three rRNAs: 23S at about 3,700 nucleotides, 16S at about 1,700, and 5S at about 120. Eukaryotes have four: 5S, 5.8S, 18S and 28S.**",
      cn: "一种 RNA 是按它的**沉降系数**命名的，写作 **S**——即它在离心机里穿过溶液的快慢；质量越大、越紧凑，这个数越大。**原核生物有三种 rRNA：23S 约 3,700 个核苷酸，16S 约 1,700 个，5S 约 120 个。真核生物有四种：5S、5.8S、18S、28S。**",
      src: "§4.1.4, p.86, Tab. 4.2"
    },
    {
      link_en: "and a single-stranded molecule that big has to have a shape",
      link_cn: "这么大的单链分子，必定有一个形状",
      recall_en: "the same folding-back that makes an RNA hairpin: nearby complementary stretches pair",
      recall_cn: "和 RNA 形成发夹是同一个动作：附近互补的片段配上对",
      en: "rRNA is made as a longer precursor and then cut down to size. Overall it is single-stranded, but stretches of it fold back and pair with other stretches into double-helical stems, with unpaired loops in between breaking up the regularity. **Those stems and loops are what give rRNA a definite three-dimensional shape, and that shape is the frame the ribosome is built on.**",
      cn: "rRNA 也是先合成一个较长的**前体**，再被切到该有的长度。它整体上是单链，但一段一段地折回去与另一些段配对，形成**双螺旋的茎**，中间夹着不配对的**环**，把螺旋的规整性打断。**正是这些茎和环给了 rRNA 一个确定的三维形状，而这个形状就是核糖体赖以搭建的骨架。**",
      src: "§4.1.4, pp.86-87, Obr. 4.27",
      see: [{ id: "L-27-2-1", en: "the ribosome that is built on it, and why its active site is RNA", cn: "搭在它上面的核糖体，以及它的活性中心为什么是 RNA" }]
    },
    {
      link_en: "third class, the smallest, and it has to move",
      link_cn: "第三类，最小的一种，而且它必须能动",
      en: "Transfer RNA, tRNA, is the smallest RNA at 4S, and its job is to carry an activated amino acid from the cytoplasm to the site of protein synthesis on a ribosome. **Being small it is readily water-soluble and diffuses freely, which is precisely what a molecule whose work is to ferry something across a cell needs to be.** A cell holds at least as many kinds of tRNA as there are amino acids, because each kind carries one amino acid and no other.",
      cn: "**转运 RNA（tRNA）**是最小的 RNA，只有 **4S**，它的任务是把一个**活化的氨基酸**从细胞质运到核糖体上的蛋白质合成部位。**个头小意味着它易溶于水、能自由扩散——一个以「把东西运过细胞」为业的分子，正需要是这样。** 细胞里 tRNA 的种类至少和氨基酸的种类一样多，因为每一种 tRNA 只运一种氨基酸。",
      src: "§4.1.4, p.87"
    },
    {
      link_en: "and every one of them ends the same way",
      link_cn: "而它们的末端全都一模一样",
      en: "All tRNAs share the same 3'-terminal sequence, …pCpCpA, and this is where the amino acid is attached — the amino-acid acceptor site. **One attachment chemistry serves all twenty amino acids, so nothing about which amino acid a tRNA carries is written at that end; the specificity has to live somewhere else on the molecule.**",
      cn: "所有 tRNA 的 3′ 端序列都相同：**…pCpCpA**，氨基酸就挂在这里——这是**氨基酸受体位点**。**同一套挂载化学服务于全部二十种氨基酸，所以「这条 tRNA 带的是哪种氨基酸」这件事，在这一端完全没有写；特异性必须存在于分子的别处。**",
      src: "§4.1.4, p.87"
    },
    {
      link_en: "and it does live somewhere else — at the other end of a folded shape",
      link_cn: "而它确实存在于别处 —— 在折叠结构的另一端",
      en: "A tRNA folds into a cloverleaf: three constant loops, called arms, plus one smaller variable loop. One of them is the anticodon loop, and it carries a triplet of bases, the anticodon, which pairs with the matching triplet on an mRNA. **A tRNA holds an amino acid at one end and reads three bases of the message at the other, so it is the physical adaptor that converts a nucleotide sequence into an amino acid sequence.**",
      cn: "tRNA 折成一片**三叶草**：三个恒定的环（也叫臂），外加一个较小的**可变环**。其中之一是**反密码子环**，它带着三个碱基组成的三联体，即**反密码子**，与 mRNA 上相应的三联体配对。**一条 tRNA 一端抓着氨基酸、另一端读着信息里的三个碱基——它就是那个把核苷酸序列换成氨基酸序列的实体转接头。**",
      src: "§4.1.4, p.87, Obr. 4.28a",
      see: [{ id: "L-27-1-1", en: "the code those triplets spell out, and how it was cracked", cn: "这些三联体拼出的密码，以及它是怎么被破译的" }]
    },
    {
      link_en: "and three more RNAs, each doing something none of the first three does",
      link_cn: "还有三种 RNA，各做一件前三种都不做的事",
      en: "Small nuclear RNA, snRNA, forms complexes with proteins, also binds DNA, and takes part in splicing — the cutting out of introns and joining of exons. Chromosomal RNA, cRNA, sits in chromatin bound to non-histone proteins — the chromosomal proteins other than the histones — and acts on genes as an activator, which turns transcription up, or as a repressor, which shuts it off. Viral RNA can serve a virus in the role of either DNA or mRNA. **These three show that an RNA can be a catalytic part, a regulator, or a genome in its own right — the molecule is not restricted to carrying messages.**",
      cn: "**小核 RNA（snRNA）**与蛋白质形成复合物，也能结合 DNA，并参与**剪接**——即切除内含子、连接外显子。**染色体 RNA（cRNA）**位于染色质中，与**非组蛋白**（即组蛋白以外的染色体蛋白）结合，对基因起**激活因子**（把转录调上去）或**阻遏因子**（把转录关掉）的作用。**病毒 RNA** 在病毒里既可以扮演 DNA 的角色，也可以扮演 mRNA 的角色。**这三者说明 RNA 可以是催化装置的零件、可以是调控者、也可以本身就是一份基因组——这种分子并不限于传递信息。**",
      src: "§4.1.4, p.87",
      beyond: true,
      beyondNote: "p.87 names snRNA as taking part in splicing; that splicing removes introns and keeps exons is stated in §4.2.4 of the same book and in the Lehninger processing node, and is used here to say what splicing is.",
      see: [{ id: "L-26-2-1", en: "the spliceosome snRNA belongs to", cn: "snRNA 所属的那台剪接体" }]
    }
  ],
  terms: [
    { en: "transcription", cn: "转录",
      def_en: "Copying one DNA strand into RNA; the first of the two stages between a gene and its protein.",
      def_cn: "把 DNA 的一条链抄成 RNA；从基因到蛋白质这两个阶段中的第一个。" },
    { en: "central dogma", cn: "中心法则",
      def_en: "Crick's 1953 statement of where information may flow: DNA to DNA, DNA to RNA, RNA to protein, with special reverse transfers in some viruses and plants.",
      def_cn: "Crick 1953 年关于信息可以往哪流的表述：DNA 到 DNA、DNA 到 RNA、RNA 到蛋白质；某些病毒和植物中还有特殊的反向传递。" },
    { en: "messenger RNA", cn: "信使 RNA",
      def_en: "The RNA carrying genetic information from a gene to a ribosome; its length is set by the peptide it encodes, it carries a regulatory segment too, and it is about 5% of E. coli RNA.",
      def_cn: "把遗传信息从基因带到核糖体的 RNA；长度由它所编码的肽决定，同时带有调控区段，约占大肠杆菌 RNA 的 5%。" },
    { en: "hnRNA", cn: "核内不均一 RNA",
      def_en: "The first, longer eukaryotic transcript, containing both exons and introns before ribonucleases process it into mRNA.",
      def_cn: "真核生物最初的、较长的转录本，在被核糖核酸酶加工成 mRNA 之前，同时含有外显子和内含子。" },
    { en: "sedimentation coefficient", cn: "沉降系数",
      def_en: "How fast a molecule moves through solution in a centrifuge, written in S; it rises with mass and compactness, and it is how the rRNAs are named.",
      def_cn: "分子在离心机中穿过溶液的快慢，以 S 表示；质量越大、越紧凑其值越高，rRNA 就是按它命名的。" },
    { en: "ribosomal RNA", cn: "核糖体 RNA",
      def_en: "The structural material of the ribosome and about 80% of a bacterial cell's RNA: three species in prokaryotes, four in eukaryotes, all folded into stems and loops.",
      def_cn: "核糖体的结构材料，约占细菌细胞 RNA 的 80%：原核三种、真核四种，都折叠成茎与环。" },
    { en: "transfer RNA", cn: "转运 RNA",
      def_en: "The smallest RNA, 4S, folded as a cloverleaf; it ends in the universal …pCpCpA that accepts one amino acid, and carries an anticodon triplet that pairs with an mRNA codon.",
      def_cn: "最小的 RNA，4S，折成三叶草；末端是通用的 …pCpCpA 用来接受一个氨基酸，环上带着与 mRNA 密码子配对的反密码子三联体。" },
    { en: "anticodon", cn: "反密码子",
      def_en: "The triplet of bases on the middle loop of a tRNA, which pairs with the matching triplet on an mRNA so that the amino acid the tRNA carries is placed at the right point in the growing chain.",
      def_cn: "tRNA 反密码子环上的三个碱基，与 mRNA 上相应的三联体配对，从而把这条 tRNA 所带的氨基酸放到链中正确的位置上。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-4-2 */
window.BIOLITE_SPINE["4-1-4-2"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "ATP", "GTP", "nucleotide",
            "template", "primer", "double helix", "base pairing", "complementary",
            "pyrophosphate", "nucleus", "nucleolus", "hairpin", "palindrome",
            "mRNA", "rRNA", "tRNA", "transcription", "translation", "replication",
            "hydroxyl group", "subunit", "holoenzyme", "operator", "repressor",
            "ribonuclease", "DNase I", "supercoiling"],
  nodeTitle_en: "RNA synthesis: polymerase, promoters and termination",
  nodeTitle_cn: "RNA 的合成：聚合酶、启动子与终止",
  title_en: "The same chemistry as replication with three differences, and a defined DNA sequence for each of start, run and stop",
  title_cn: "与复制相同的化学，只差三处；而起、走、停三件事各有一段写死在 DNA 上的序列",
  steps: [
    {
      en: "Transcription runs on the same principle as replication — a template strand dictates the new chain through base complementarity — with a first difference: only one of the two DNA strands is copied for a given gene, and that strand is called the coding, or template, strand. **An RNA is therefore a copy of one side of a gene, so which strand is read decides what the transcript says.**",
      cn: "转录与复制遵循同一条原理——由模板链通过碱基互补决定新链——但第一处不同在于：对某个基因而言，两条 DNA 链中只有一条被抄写，这条链称为**编码链（也就是模板链）**。**因此一条 RNA 是基因单侧的拷贝；读哪一条链，决定了转录本说的是什么。**",
      src: "§4.1.4, p.87"
    },
    {
      link_en: "second difference, and it is the one that saves the most work",
      link_cn: "第二处不同，也是省事最多的一处",
      recall_en: "a DNA polymerase cannot start a chain and needs a primer laid down for it",
      recall_cn: "DNA 聚合酶不能起头，需要别人先给它铺一段引物",
      en: "RNA polymerase needs no primer at all: it starts a chain from nothing. **Nothing has to be removed and replaced afterwards, so transcription has no equivalent of the two things replication cannot do without: cutting each primer back out, and joining up the short pieces called Okazaki fragments that a primed lagging strand is built from.**",
      cn: "RNA 聚合酶**完全不需要引物**：它可以从零起头造一条链。**事后没有任何东西需要被撤掉、换掉，所以转录里根本不存在复制离不开的那套引物切除和冈崎片段。**",
      src: "§4.1.4, p.87"
    },
    {
      link_en: "and the reaction it actually catalyses is the familiar one",
      link_cn: "而它实际催化的反应是老面孔",
      en: "The substrates are the four ribonucleoside triphosphates — ATP, GTP, CTP and UTP — plus the DNA template. RNA polymerase joins them one at a time on the single-stranded template, releases pyrophosphate at each addition, and builds the chain 5'→3'. **This is the DNA polymerase reaction with ribonucleotides in place of deoxyribonucleotides, and the direction rule is the same one, for the same reason: the new bond is made at a free 3'-OH.**",
      cn: "底物是四种**核糖核苷三磷酸**——ATP、GTP、CTP、UTP——外加 DNA 模板。RNA 聚合酶在单链模板上把它们一个一个接起来，每接一个放出一分子焦磷酸，并沿 5′→3′ 方向造链。**这就是把脱氧核糖核苷酸换成核糖核苷酸之后的 DNA 聚合酶反应，方向规则也是同一条、理由也相同：新键生成在一个游离的 3′-OH 上。**",
      src: "§4.1.4, p.88, Obr. 4.31"
    },
    {
      link_en: "third difference: one enzyme does the whole job, and it comes in two states",
      link_cn: "第三处不同：整件事由一个酶包办，而它有两种状态",
      en: "The E. coli enzyme in its complete form, the holoenzyme, has the subunit composition α₂ββ′σ. **It carries out four functions in order — binding the template, initiating the chain, elongating it, and terminating it — so the whole of transcription is one enzyme's work, where replication needed a whole cast.**",
      cn: "大肠杆菌的这个酶在完整形态下称为**全酶**，亚基组成是 **α₂ββ′σ**。**它按顺序完成四项功能——结合模板、起始链、延伸链、终止链——所以整个转录是一个酶的活儿，而复制需要一整班人马。**",
      src: "§4.1.4, p.88"
    },
    {
      link_en: "and one of those five subunits leaves as soon as the work starts",
      link_cn: "而这五个亚基中有一个，一开工就走了",
      en: "Once RNA synthesis has begun, the σ subunit — the sigma factor — dissociates, and the core enzyme α₂ββ′ carries out the polymerisation on its own. The released σ can then bind a different core enzyme and form a new initiation complex somewhere else. **Sigma is a reusable targeting device rather than part of the catalytic machine: it is spent only on deciding where to start.**",
      cn: "RNA 合成一旦开始，**σ 亚基（σ 因子）**便解离下来，由**核心酶 α₂ββ′** 独自完成聚合。放出来的 σ 随后可以结合另一个核心酶，在别处组成新的起始复合物。**σ 是一件可重复使用的定位装置，而不是催化机器的一部分：它只花在「从哪里开始」这个决定上。**",
      src: "§4.1.4, p.88",
      see: [{ id: "L-26-1-1", en: "swapping one sigma for another switches on a whole set of genes at once", cn: "换掉一个 σ，就一次性打开一整套基因" }]
    },
    {
      link_en: "eukaryotes split that one enzyme into three",
      link_cn: "真核生物把这一个酶拆成了三个",
      en: "A eukaryotic nucleus holds three such enzymes, numbered I, II and III (also called A, B and C), and they divide the work by product. **RNA polymerase I sits in the nucleolus and makes rRNA precursors; RNA polymerase II sits in the nucleoplasm and makes mRNA precursors; RNA polymerase III, also in the nucleoplasm, makes mostly tRNA and 5S rRNA precursors.** Which enzyme transcribes a gene is therefore decided by what class of RNA that gene encodes.",
      cn: "真核细胞核里有三种这样的酶，编号 **I、II、III**（也叫 A、B、C），它们按产物分工。**RNA 聚合酶 I 在核仁里，造 rRNA 前体；RNA 聚合酶 II 在核质里，造 mRNA 前体；RNA 聚合酶 III 同样在核质里，主要造 tRNA 和 5S rRNA 前体。** 因此一个基因由哪个酶来转录，取决于它编码的是哪一类 RNA。",
      src: "§4.1.4, p.88",
      beyond: true,
      beyondNote: "p.88 assigns the three nuclear enzymes as given. Mitochondria and chloroplasts have RNA polymerases of their own, which is covered in the Lehninger node linked here and not on this page.",
      see: [{ id: "L-26-1-1", en: "the three eukaryotic polymerases with their promoters and inhibitors", cn: "三种真核聚合酶，连同它们的启动子与抑制剂" }]
    },
    {
      link_en: "now the first of the three sequences: where to start",
      link_cn: "现在说三段序列中的第一段：从哪里开始",
      en: "Transcription is initiated at specific sites, and RNA polymerase finds them by binding base sequences called promoters, each recognised by its corresponding sigma factor. A promoter sits near the nucleotide where the RNA will begin. **The instruction for where to start is written in the DNA rather than carried by the enzyme, which is what makes transcription selective: only genes with a promoter a present sigma factor can read get transcribed.**",
      cn: "转录在特定位点被启动，RNA 聚合酶靠结合叫做**启动子（promoter）**的碱基序列来找到它们，每一种启动子由与之对应的 σ 因子识别。启动子就在 RNA 将要开始的那个核苷酸附近。**「从哪里开始」这条指令写在 DNA 上，而不是由酶自己带着——正因如此转录才是有选择的：只有那些启动子能被当下在场的 σ 因子读懂的基因，才会被转录。**",
      src: "§4.1.4, p.89, Obr. 4.29"
    },
    {
      link_en: "and where a promoter sits can itself be the point of control",
      link_cn: "而启动子长在哪里，本身就可以成为控制点",
      en: "In the lactose system the promoter is found to overlap the operator, the short site a regulatory protein binds. **Two proteins cannot occupy overlapping DNA at once, so a repressor sitting on the operator physically blocks RNA polymerase from binding the promoter — the switch works by obstruction, not by any signal passed between proteins.**",
      cn: "在乳糖系统中，启动子被发现与**操纵基因（operator）**——调控蛋白结合的那一小段位点——相互**重叠**。**两个蛋白不可能同时占住重叠的同一段 DNA，所以坐在操纵基因上的阻遏蛋白就从物理上挡住了 RNA 聚合酶与启动子的结合——这个开关靠的是挡路，而不是蛋白之间传递什么信号。**",
      src: "§4.1.4, p.89, Obr. 4.29",
      see: [{ id: "4-2-4-1", en: "the lac operon, where that obstruction is the whole mechanism", cn: "乳糖操纵子 —— 挡路就是它的全部机制" }]
    },
    {
      link_en: "and how the extent of that binding was actually measured",
      link_cn: "而这个结合区域的范围究竟是怎么量出来的",
      en: "The bound holoenzyme forms so tight a complex with its promoter that it protects the DNA underneath from being cut by DNase I, an enzyme that otherwise chops DNA at random. **A stretch of sequence that survives a nuclease while everything around it is destroyed is a direct readout of exactly how much DNA the protein is covering.**",
      cn: "结合上去的全酶与启动子形成的复合物非常牢固，牢固到能**保护**下面那段 DNA 不被 **DNase I** 切开——而 DNase I 本来是随机切 DNA 的。**周围都被切碎、唯独某一段序列活了下来，这本身就直接读出了这个蛋白究竟盖住了多长的 DNA。**",
      src: "§4.1.4, p.89",
      see: [{ id: "L-26-1-1", en: "footprinting, this experiment done properly", cn: "足迹法 —— 把这个实验规范地做出来" }]
    },
    {
      link_en: "second phase: what the enzyme does while it runs",
      link_cn: "第二阶段：酶跑起来的时候在做什么",
      en: "During elongation the double helix is unwound over about one turn, and the template strand pairs there with the 3'-end of the growing RNA as a short DNA-RNA hybrid helix; behind the enzyme the DNA rewinds. The likelier picture of the motion is that the RNA travels in a straight line while the DNA rotates beneath it, so a transcription bubble opens ahead of the enzyme and closes behind it. **For the DNA to rotate rather than the enzyme spinning around it, the ends of the DNA and of the polymerase must be held against free rotation by other bonds in the cell.**",
      cn: "延伸阶段中，双螺旋在约**一圈**的范围内被解开，模板链在那里与正在生长的 RNA 的 3′ 端配成一小段 **DNA-RNA 杂合螺旋**；酶的后方 DNA 重新盘绕起来。关于这个运动，更可能的图景是：RNA 沿直线前进，而 DNA 在它下方转动，于是一个**转录泡**在酶的前方打开、在后方闭合。**要让转动的是 DNA 而不是酶绕着 DNA 打转，DNA 的两端和聚合酶就必须被细胞里的其他键固定住、不能自由转动。**",
      src: "§4.1.4, pp.89-90, Obr. 4.30",
      see: [{ id: "L-24-2-1", en: "what that rotation does to the DNA on either side of the bubble", cn: "这种转动对泡两侧的 DNA 造成了什么" }]
    },
    {
      link_en: "third phase, and the first of its two mechanisms is written entirely in the sequence",
      link_cn: "第三阶段；它的两种机制中，第一种完全写在序列里",
      en: "A spontaneous terminator has two features side by side. One is a run of 4 to 10 A-T pairs with the adenines on the template strand, and the RNA ends at or just past that run. The other, immediately next to it, is a G+C-rich palindrome — a sequence followed by its own reverse complement — whose transcript folds back on itself into a hairpin ending in several U residues. **The two features point the same way: a G+C-rich stem folds tightly enough to stall the enzyme, and a U-rich tail pairs only weakly with the template, so the RNA lets go on its own.**",
      cn: "**自发终止子**上并排放着两个特征。一个是 **4 到 10 个 A-T 对**，其中腺嘌呤位于模板链上，RNA 就在这一串处或刚过这一串处结束。另一个紧挨着它，是一段**富含 G+C 的回文序列**——即一段序列后面跟着它自己的反向互补序列——其转录本折回自身，形成一个以若干 **U** 收尾的**发夹**。**这两个特征指向同一个结果：富含 G+C 的茎折得足够紧，把酶卡住；富含 U 的尾巴与模板配得很弱，于是 RNA 自己就脱落了。**",
      src: "§4.1.4, p.90, Obr. 4.32"
    },
    {
      link_en: "and the second mechanism needs a protein because the sequence alone will not do it",
      link_cn: "第二种机制需要一个蛋白，因为光靠序列办不成",
      en: "Other termination sites carry no hairpin and no oligo(U), and there termination requires the protein ρ, the rho factor — an enzyme that unwinds an RNA-DNA or an RNA-RNA double helix at the cost of nucleoside triphosphates. **Where the sequence cannot make the RNA fall off by itself, an enzyme is spent prising it off instead.** Rho-dependent termination also needs its own recognition sequence upstream of the stopping point, apparently sitting on the nascent RNA more than on the DNA.",
      cn: "另一些终止位点既没有发夹、也没有寡聚 U，在那里终止就需要 **ρ 蛋白（rho 因子）**——一种以消耗核苷三磷酸为代价、把 RNA-DNA 或 RNA-RNA 双螺旋解开的酶。**序列自己没本事让 RNA 脱落的地方，就得花一个酶去把它撬下来。** ρ 依赖型终止还需要它自己的、位于终止点上游的识别序列，而这段序列似乎更多地在新生 RNA 上，而不在 DNA 上。",
      src: "§4.1.4, pp.90-91",
      openQuestion_en: "What exactly makes a rho-dependent termination site is not yet fully characterised.",
      openQuestion_cn: "ρ 依赖型终止位点究竟由什么构成，目前尚未被完全阐明。"
    },
    {
      link_en: "and what comes off the template is often not yet the finished molecule",
      link_cn: "而从模板上下来的东西，往往还不是成品分子",
      en: "tRNA and rRNA are not transcribed at their final length. They are cut out of a longer primary transcript by ribonucleases — III, P, F, E, M16, M23, M5 and D — working in a primary and then a secondary round, and this cutting is post-transcriptional processing. **One rRNA transcript yields the mature 16S at 1,541 nucleotides, the 23S at 2,904 and the 5S at 120, plus several tRNAs, so cutting one molecule delivers, already in the right proportions, the parts of the ribosome — the particle on which proteins are made.**",
      cn: "tRNA 和 rRNA 并不是按最终长度转录出来的。它们是被**核糖核酸酶**——III、P、F、E、M16、M23、M5、D——分**初级**和**次级**两轮，从一条更长的**初级转录本**上切出来的；这一步切割就是**转录后加工**。**一条 rRNA 转录本切出成熟的 16S（1,541 个核苷酸）、23S（2,904 个）和 5S（120 个），外加若干 tRNA——切一个分子，核糖体的零件就已经按正确比例配齐了。**",
      src: "§4.1.4, p.91, Obr. 4.33",
      see: [{ id: "L-26-2-1", en: "processing done to a transcript, including the ribozyme that trims tRNA", cn: "对转录本所做的加工，包括修剪 tRNA 的那个核酶" }]
    }
  ],
  terms: [
    { en: "coding (template) strand", cn: "编码链（模板链）",
      def_en: "The one DNA strand of a given gene that is actually copied during transcription.",
      def_cn: "某个基因的两条链中，转录时实际被抄写的那一条。" },
    { en: "RNA polymerase holoenzyme", cn: "RNA 聚合酶全酶",
      def_en: "The complete E. coli enzyme, subunits α2ββ'σ, responsible in turn for template binding, initiation, elongation and termination.",
      def_cn: "大肠杆菌完整形态的酶，亚基为 α2ββ′σ，依次负责结合模板、起始、延伸和终止。" },
    { en: "sigma factor", cn: "σ 因子",
      def_en: "The holoenzyme subunit that recognises a promoter; it comes off once synthesis has started and can be used again on another core enzyme.",
      def_cn: "全酶中识别启动子的那个亚基；合成一开始它就脱落，可以再用到另一个核心酶上。" },
    { en: "promoter", cn: "启动子",
      def_en: "The DNA sequence near the start of a transcript that a sigma factor recognises and RNA polymerase binds; it is where the decision to transcribe is made.",
      def_cn: "位于转录起点附近、由 σ 因子识别并供 RNA 聚合酶结合的 DNA 序列；「转不转录」的决定就在这里做出。" },
    { en: "transcription bubble", cn: "转录泡",
      def_en: "The locally unwound stretch of DNA, about one helical turn, inside which the template pairs with the 3'-end of the growing RNA; it opens ahead of the enzyme and closes behind it.",
      def_cn: "DNA 局部解开的一段，约一个螺旋圈，模板在其中与正在生长的 RNA 的 3′ 端配对；它在酶前方打开、后方闭合。" },
    { en: "intrinsic (hairpin) terminator", cn: "内在（发夹）终止子",
      def_en: "A G+C-rich palindrome next to a short A-T run: the transcript folds into a tight hairpin ending in several U residues, and the RNA comes off with no protein needed.",
      def_cn: "紧挨一小段 A-T 的富含 G+C 回文序列：转录本折成一个紧密的发夹、以若干 U 收尾，RNA 不需要任何蛋白就会脱落。" },
    { en: "rho factor", cn: "ρ 因子",
      def_en: "The protein needed to terminate at sites with no hairpin; it unwinds RNA-DNA and RNA-RNA helices at the cost of nucleoside triphosphates and needs its own upstream recognition sequence.",
      def_cn: "在没有发夹的位点终止时所需的蛋白；它以消耗核苷三磷酸为代价解开 RNA-DNA 与 RNA-RNA 双螺旋，并需要自己的上游识别序列。" },
    { en: "post-transcriptional processing", cn: "转录后加工",
      def_en: "Ribonucleases cutting a longer primary transcript, in a primary and a secondary round, into the mature tRNAs and rRNAs a cell actually uses.",
      def_cn: "核糖核酸酶分初级和次级两轮，把较长的初级转录本切成细胞真正使用的成熟 tRNA 与 rRNA。" }
  ]
};

/* -------------------------------------------------------------------- 4-1-5 */
window.BIOLITE_SPINE["4-1-5"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "nucleotide", "nucleoside",
            "pentose", "ribose", "purine", "pyrimidine", "adenine", "guanine",
            "uracil", "thymine", "phosphatase", "ester", "urea", "ammonia",
            "carbon dioxide", "amino acid", "PRPP", "pH optimum",
            "carbohydrate metabolism", "phosphodiester bond", "hydroxyl group"],
  nodeTitle_en: "Degradation of nucleic acids",
  nodeTitle_cn: "核酸的降解",
  title_en: "Taking the chain apart one layer at a time, until the sugar half and the base half leave for two different metabolisms",
  title_cn: "一层一层把链拆开，直到糖那一半和碱基那一半各奔两套不同的代谢",
  steps: [
    {
      en: "Breaking a polynucleotide down is the work of nucleases, and they split into two kinds by where they cut. An exonuclease takes off one terminal nucleotide at a time; an endonuclease cleaves an ester bond somewhere inside the chain. **An endonuclease can cut a long molecule into many pieces at once, while an exonuclease can only nibble inward from an end — so the two are used for different purposes, and a cell that wants a molecule gone quickly starts with an endonuclease.**",
      cn: "把多核苷酸拆开是**核酸酶**的活儿，它们按切在哪里分成两类。**外切核酸酶**一次切掉一个末端核苷酸；**内切核酸酶**在链的**内部**切开一根酯键。**内切核酸酶能一次把一个长分子切成许多段，外切核酸酶只能从末端往里一点点啃——所以两者用途不同，细胞要想让一个分子迅速消失，会先动用内切核酸酶。**",
      src: "§4.1.5, p.91"
    },
    {
      link_en: "and there is a second, finer split: which side of the phosphate the cut falls on",
      link_cn: "还有第二层更细的划分：切口落在磷酸的哪一侧",
      en: "A phosphate in the backbone is esterified to two sugars, so there are two bonds a nuclease could break. Type a nucleases cut the bond between a sugar's 3'-OH and the phosphate, and their products are nucleoside-5'-phosphates. Type b nucleases cut the bond between a sugar's 5'-OH and the phosphate, and their products are nucleoside-3'-phosphates. **Where the phosphate ends up on the product tells you which of the two enzymes did the cutting.**",
      cn: "骨架上的一个磷酸与两个糖各成一个酯键，所以核酸酶有两根键可切。**a 型核酸酶**切糖的 3′-OH 与磷酸之间那根键，产物是**核苷-5′-磷酸**。**b 型核酸酶**切糖的 5′-OH 与磷酸之间那根键，产物是**核苷-3′-磷酸**。**磷酸最后留在产物的哪一端，就告诉你是这两种酶中的哪一种下的手。**",
      src: "§4.1.5, p.91"
    },
    {
      link_en: "and a third label, this one by substrate",
      link_cn: "还有第三个标签，按底物划分",
      en: "A nuclease acting on DNA is a deoxyribonuclease; one acting on RNA is a ribonuclease. **The three labels are independent of each other, so a full name says all three things at once — which substrate, which end or middle, and which side of the phosphate.**",
      cn: "作用于 DNA 的叫**脱氧核糖核酸酶**，作用于 RNA 的叫**核糖核酸酶**。**这三个标签彼此独立，所以一个完整的名字同时说明三件事：切什么底物、切末端还是切中间、切磷酸的哪一侧。**",
      src: "§4.1.5, p.91"
    },
    {
      link_en: "the pieces those enzymes leave are still nucleotides, so the next layer removes the phosphate",
      link_cn: "这些酶留下的碎片还是核苷酸，所以下一层要把磷酸摘掉",
      en: "Nucleotidases take the phosphate off a nucleotide and leave a nucleoside; they are essentially phosphatases, and they exist in an alkaline form with a pH optimum of 7 to 8 and an acid form with a pH optimum of 5. **Having both forms means the same job can be done in the near-neutral cytosol and in an acidic compartment, so nucleotide breakdown is not confined to one place in a cell.**",
      cn: "**核苷酸酶（nucleotidase）**把核苷酸上的磷酸摘掉、留下核苷；它本质上就是磷酸酶，并且有两种形式：**碱性形式**（pH 最适 7–8）和**酸性形式**（pH 最适 5）。**两种形式并存意味着同一件事既能在接近中性的细胞质里做，也能在酸性的隔室里做，所以核苷酸的分解不局限在细胞里的某一个地方。**",
      src: "§4.1.5, pp.91-92"
    },
    {
      link_en: "or the same molecule can be taken apart in the other order",
      link_cn: "或者同一个分子也可以按另一种顺序拆",
      en: "A nucleotide can instead be split directly into its base and a pentose-phosphate, and the two halves then decompose separately. **Either order arrives at the same place — a free base on one side and a sugar phosphate on the other — and from that point the two halves have nothing further to do with each other.**",
      cn: "核苷酸也可以直接被切成**碱基**和**戊糖-磷酸**两部分，两半各自分解。**两种顺序到达的是同一个地方——一边是游离碱基，一边是糖磷酸——从这一点起，两半之间就再无瓜葛。**",
      src: "§4.1.5, p.92"
    },
    {
      link_en: "and the cut that separates them is worth naming, because it runs a familiar reaction backwards",
      link_cn: "把两半分开的那一刀值得点名，因为它是把一个熟悉的反应倒着跑",
      recall_en: "base plus PRPP giving a nucleotide, from the biosynthesis route",
      recall_cn: "生物合成路线里「碱基 + PRPP 生成核苷酸」的那一步",
      en: "Nucleosidase — a different enzyme from the nucleotidase above, and worth keeping apart from it by name — breaks the bond between sugar and base, and it works mainly by phosphorolysis, meaning phosphate rather than water attacks the bond. The products are the free base and ribose-phosphate. **This is essentially the reverse of joining a base to PRPP, so the base comes out intact and can be put back into a nucleotide instead of being destroyed.**",
      cn: "**核苷酶（nucleosidase）**——与上面那个核苷酸酶（nucleotidase）不是同一个酶，名字要分清——切断糖与碱基之间的键，其作用方式主要是**磷酸解**，即由磷酸而不是水去进攻这根键。产物是游离碱基和**核糖-磷酸**。**这实质上就是「把碱基接到 PRPP 上」那一步的逆反应，所以碱基是完整地出来的，可以被重新装回核苷酸里，而不必被销毁。**",
      src: "§4.1.5, p.92"
    },
    {
      link_en: "now the two halves go their separate ways. The sugar half first",
      link_cn: "现在两半分道扬镳。先说糖那一半",
      en: "The pentose-phosphate released is not degraded as part of nucleic acid metabolism at all. **It is handed straight to carbohydrate metabolism, where it is an ordinary sugar phosphate like any other — so half of every nucleic acid a cell breaks down leaves this subject entirely.**",
      cn: "放出来的**戊糖-磷酸**根本不在核酸代谢里被降解。**它被直接交给糖代谢，在那里它就是一个再普通不过的糖磷酸——所以细胞每分解一份核酸，就有一半的物质彻底离开了这个题目。**",
      src: "§4.1.5, p.92"
    },
    {
      link_en: "and the base half splits again, purines one way",
      link_cn: "碱基那一半又要再分岔，嘌呤走一条",
      en: "In mammals the purine bases, adenine and guanine, are degraded through uric acid and on down to urea. **Purine nitrogen therefore leaves the body through the same disposal route as the nitrogen of amino acids, which is why purine breakdown is a nitrogen-excretion problem and not only a nucleotide one.**",
      cn: "在哺乳动物体内，嘌呤碱基（**腺嘌呤**和**鸟嘌呤**）经**尿酸**一路降解到**尿素**。**因此嘌呤上的氮是走氨基酸氮的同一条排泄路线离开身体的——这也是为什么嘌呤的分解是一个氮排泄问题，而不只是一个核苷酸问题。**",
      src: "§4.1.5, p.92",
      see: [{ id: "L-18-2-1", en: "the urea cycle that route ends in", cn: "这条路线最终汇入的尿素循环" }]
    },
    {
      link_en: "and one intermediate on that route causes a disease by a purely physical property",
      link_cn: "这条路上有一个中间产物，仅凭一个物理性质就造成了一种疾病",
      en: "Uric acid is the well-known intermediate whose accumulation causes gout. **It causes the disease because it is the least soluble molecule on its own pathway: in excess it comes out of solution as crystals in joints, which is inflammation caused by a solubility limit rather than by any reaction going wrong.**",
      cn: "**尿酸**正是那个因积累而导致**痛风**的著名中间产物。**它之所以致病，是因为它是自己这条通路上溶解度最差的分子：过量时它会从溶液中析出，在关节里结成晶体——这是溶解度上限造成的炎症，而不是哪一步反应出了错。**",
      src: "§4.1.5, p.92",
      beyond: true,
      beyondNote: "p.92 names uric acid as the gout intermediate. That the mechanism is its own poor solubility, and the drugs aimed at it, are developed in the Lehninger nucleotide node, not on this page.",
      see: [{ id: "L-22-4-1", en: "uric acid, gout, and the enzyme inhibited to treat it", cn: "尿酸、痛风，以及为治疗它而被抑制的那个酶" }]
    },
    {
      link_en: "and pyrimidines the other way, ending somewhere quite different",
      link_cn: "嘧啶走另一条，终点很不一样",
      recall_en: "uric acid one step up, which is the opposite kind of end product",
      recall_cn: "上一步的尿酸，正是相反类型的终产物",
      en: "The two pyrimidine bases are degraded by separate routes of their own: uracil gives β-alanine along with CO₂, NH₃ and H₂O, while thymine gives 3-aminobutyric acid along with NH₃ and CO₂. **Both end products are small soluble amino acids, so pyrimidine breakdown creates no crystallisation problem at all — which is exactly the contrast with uric acid.**",
      cn: "两种嘧啶碱基各走各的路线降解：**尿嘧啶**生成 **β-丙氨酸**，连同 CO₂、NH₃ 和 H₂O；**胸腺嘧啶**生成 **3-氨基丁酸**，连同 NH₃ 和 CO₂。**两种终产物都是小而易溶的氨基酸，所以嘧啶的分解根本不存在结晶问题——这正是它与尿酸的对照之处。**",
      src: "§4.1.5, p.92"
    }
  ],
  terms: [
    { en: "exonuclease", cn: "外切核酸酶",
      def_en: "Takes off one terminal nucleotide at a time, so it can only work inward from an end of a chain.",
      def_cn: "一次切掉一个末端核苷酸，因此只能从链的一端往里做。" },
    { en: "endonuclease", cn: "内切核酸酶",
      def_en: "Cleaves an ester bond at an internal position, so one enzyme can cut a long molecule into many pieces at once.",
      def_cn: "在链内部的位点切断酯键，因此一个酶可以一次把长分子切成许多段。" },
    { en: "type a / type b nuclease", cn: "a 型／b 型核酸酶",
      def_en: "Type a cuts between a sugar's 3'-OH and the phosphate, leaving nucleoside-5'-phosphates; type b cuts between a sugar's 5'-OH and the phosphate, leaving nucleoside-3'-phosphates.",
      def_cn: "a 型切在糖的 3′-OH 与磷酸之间，留下核苷-5′-磷酸；b 型切在糖的 5′-OH 与磷酸之间，留下核苷-3′-磷酸。" },
    { en: "nucleotidase", cn: "核苷酸酶",
      def_en: "A phosphatase removing the phosphate from a nucleotide to leave a nucleoside; it has an alkaline form with pH optimum 7-8 and an acid form with pH optimum 5.",
      def_cn: "把核苷酸上的磷酸摘掉、留下核苷的磷酸酶；有碱性形式（pH 最适 7–8）与酸性形式（pH 最适 5）。" },
    { en: "nucleosidase", cn: "核苷酶",
      def_en: "Breaks the sugar-to-base bond, mainly by phosphorolysis, giving the free base and ribose-phosphate; the reaction is essentially the reverse of joining a base to PRPP.",
      def_cn: "切断糖与碱基之间的键，主要通过磷酸解进行，给出游离碱基和核糖-磷酸；这一反应实质上是「碱基接到 PRPP 上」的逆过程。" },
    { en: "uric acid", cn: "尿酸",
      def_en: "The intermediate through which mammals degrade purine bases on the way to urea; in excess it crystallises in joints and causes gout.",
      def_cn: "哺乳动物把嘌呤碱基降解到尿素途中所经过的中间产物；过量时在关节中结晶，导致痛风。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-1 */
window.BIOLITE_SPINE["4-2-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "amino acid", "peptide",
            "peptide bond", "polypeptide", "nucleotide", "mRNA", "tRNA",
            "ribosome", "nucleus", "nucleolus", "endoplasmic reticulum",
            "cytoplasm", "complementary", "base pairing", "methionine",
            "arginine", "glycine", "alanine", "endergonic", "organelle",
            "transcription", "translation", "central dogma", "RNA processing"],
  nodeTitle_en: "The gene sequence determines the order of amino acids",
  nodeTitle_cn: "基因序列决定蛋白质中氨基酸的顺序",
  title_en: "Twenty amino acids cannot be spelled in fewer than three letters, and everything about the code follows from 64 being much more than 20",
  title_cn: "二十种氨基酸没法用少于三个字母拼出来，而密码的一切性质都源自 64 远远多于 20",
  steps: [
    {
      en: "Protein synthesis is the cell assembling a protein out of individual amino acids, and it is bound to particular subcellular structures — the nucleus, the nucleolus, the endoplasmic reticulum, and above all the ribosomes. **It is an endergonic process, meaning it consumes energy rather than yielding it, and it is strictly regulated — a cell that made every protein all the time would be spending energy on nothing.**",
      cn: "蛋白质合成，就是细胞用一个个氨基酸装配出一个蛋白质；它与特定的亚细胞结构绑在一起——细胞核、核仁、内质网，最主要的是**核糖体**。**这是一个耗能（endergonic）过程，意思是它消耗能量而不是产出能量；而且它受到严格调节——一个不停地把每种蛋白都造出来的细胞，等于在白白烧能量。**",
      src: "§4.2.1, p.92"
    },
    {
      link_en: "and it comes in two named stages, which must not be confused",
      link_cn: "它分成两个各有其名的阶段，不能混为一谈",
      en: "Transcription comes first: in the nucleus, the needed part of the genetic information is copied from DNA into mRNA. Translation is the protein-building step itself. **Transcription rewrites nucleotides as nucleotides; translation rewrites nucleotides as amino acids — only the second changes the alphabet, which is why only the second needs a code.**",
      cn: "先是**转录**：在细胞核里，把所需的那部分遗传信息从 DNA 抄成 mRNA。**翻译**才是真正造蛋白的那一步。**转录是把核苷酸改写成核苷酸，翻译是把核苷酸改写成氨基酸——只有后者换了字母表，所以也只有后者需要一套密码。**",
      src: "§4.2.1, p.92"
    },
    {
      link_en: "and in a eukaryote those two stages happen in different rooms",
      link_cn: "而在真核细胞里，这两个阶段发生在不同的房间",
      en: "DNA replication and transcription both happen inside the cell nucleus, on the chromosome. The transcript then undergoes RNA processing to become a messenger RNA, is carried across the nuclear membrane, and is translated in the cytoplasm. **Putting a membrane between transcription and translation is what makes processing possible: there is a stage at which the transcript exists and is not yet being read.**",
      cn: "DNA 复制和转录都在细胞核内、在染色体上进行。转录本随后经过 **RNA 加工**成为信使 RNA，被运过核膜，在细胞质里被翻译。**在转录与翻译之间隔一层膜，正是加工得以进行的前提：存在这样一个阶段——转录本已经存在，但还没有被读。**",
      src: "§4.2.1, p.93, Obr. 4.34",
      see: [{ id: "4-2-4-2", en: "what is done to the transcript in that interval", cn: "在这段间隔里对转录本做了什么" }]
    },
    {
      link_en: "and any account of translation has to answer two separate questions",
      link_cn: "任何关于翻译的说法，都必须回答两个各自独立的问题",
      en: "One is how the transfer of genetic information is secured — how the right amino acid is chosen at each position. The other is how the energetics of peptide bond formation is secured — where the energy for each new bond comes from. **Those two questions are answered by two different pieces of machinery, and keeping them apart is what makes the rest of protein synthesis readable.**",
      cn: "一个是**遗传信息的传递如何得到保证**——每个位置上正确的氨基酸是怎么选出来的。另一个是**肽键形成的能量如何得到保证**——每根新键的能量从哪里来。**这两个问题由两套不同的机器来回答；把它们分开，后面整个蛋白质合成才读得下去。**",
      src: "§4.2.1, p.93"
    },
    {
      link_en: "take the information question. The reading rule comes first",
      link_cn: "先看信息那个问题。先说读法",
      en: "Genetic information is always read from a defined starting point, in one direction, in groups of equal size — codon by codon. A codon is a group of nucleotides on the mRNA that specifies the addition of one amino acid to the growing chain. **Fixing the starting point and the group size is what makes the message unambiguous: shift the start by one nucleotide and every codon after it is a different word.**",
      cn: "遗传信息永远是从一个确定的**起点**开始、沿**一个方向**、按**大小相等**的组来读的——一个**密码子（codon）**接一个密码子。密码子是 mRNA 上的一组核苷酸，它规定向正在增长的链上添加哪一个氨基酸。**把起点和组的大小定死，信息才没有歧义：起点挪动一个核苷酸，其后每一个密码子都会变成另一个词。**",
      src: "§4.2.1, p.93"
    },
    {
      link_en: "and a codon is not read by being recognised — it is read by being paired with",
      link_cn: "而密码子不是被「认出来」的，它是被「配上对」读出来的",
      recall_en: "the anticodon triplet on the tRNA cloverleaf",
      recall_cn: "tRNA 三叶草上的那个反密码子三联体",
      en: "Each codon is complementary to the anticodon of the corresponding tRNA — the triplet sitting on that tRNA's anticodon loop. **Nothing inspects the mRNA and decides what it says; a tRNA carrying the matching triplet simply sticks, and the amino acid on its other end is thereby the one that gets added.**",
      cn: "每个密码子都与相应 tRNA 的**反密码子**互补——也就是那条 tRNA 反密码子环上的三联体。**没有任何东西去「检查」mRNA 说了什么；带着匹配三联体的那条 tRNA 只是贴上去而已，于是它另一端挂着的氨基酸就成了被加上去的那一个。**",
      src: "§4.2.1, p.93"
    },
    {
      link_en: "so how many nucleotides make one codon? The number is forced",
      link_cn: "那么一个密码子由几个核苷酸组成？这个数是被逼出来的",
      en: "Four kinds of nucleotide taken one at a time give four possibilities, and taken in pairs give sixteen; neither is enough for the twenty amino acids of natural proteins. **Taken in threes they give 4³ = 64, so the code has to be read in triplets — and 64 is far more than 20.**",
      cn: "四种核苷酸一个一个地取，只有 4 种可能；两个一组地取，只有 16 种；对天然蛋白质里的**二十种氨基酸**来说都不够。**三个一组地取，得到 4³ = 64 种，所以密码只能按三联体来读——而 64 远远多于 20。**",
      src: "§4.2.1, pp.93-94"
    },
    {
      link_en: "and that surplus has to go somewhere",
      link_cn: "而多出来的那些必须有个去处",
      en: "Some amino acids are therefore specified by several different triplets, and this is called degeneracy of the code. **The sharing is uneven: some amino acids have as many as six triplets, others four, three or two, and some just one.**",
      cn: "于是有些氨基酸由好几个不同的三联体来指定，这个现象叫**密码的简并性（degeneracy）**。**分配并不均匀：有的氨基酸多达六个三联体，有的四个、三个或两个，有的只有一个。**",
      src: "§4.2.1, p.94, Tab. 4.3"
    },
    {
      link_en: "and four of the 64 do a job other than naming an amino acid",
      link_cn: "64 个之中有四个干的不是「点名氨基酸」这份活",
      en: "AUG codes methionine and also serves as the initiation codon, marking where translation starts. UAA, UAG and UGA code no amino acid at all and are the termination codons, also called stop or nonsense codons. **The message carries its own punctuation: one triplet says begin here, three say end here.**",
      cn: "**AUG** 编码甲硫氨酸，同时充当**起始密码子**，标出翻译从哪里开始。**UAA、UAG、UGA** 根本不编码任何氨基酸，它们是**终止密码子**（也叫 stop 密码子、无义密码子）。**信息自带标点：一个三联体说「从这里开始」，三个三联体说「到这里结束」。**",
      src: "§4.2.1, p.94, Tab. 4.3"
    },
    {
      link_en: "the same table is used by every organism, with one exception worth knowing",
      link_cn: "同一张表所有生物都在用，但有一个例外值得记住",
      en: "The genetic code is universal across organisms. The noted exception is selenocysteine: when a particular sequence element called SECIS is present on the mRNA, UGA is read as the codon for that amino acid instead of as a stop. **The same triplet then has two meanings, and which one applies is decided by a sequence elsewhere on the same message.**",
      cn: "遗传密码在各类生物间是**通用的**。已知的例外是**硒代半胱氨酸**：当 mRNA 上存在一个叫 **SECIS** 的序列元件时，**UGA** 就被读作这个氨基酸的密码子，而不再是终止信号。**同一个三联体于是有了两种含义，而用哪一种，由同一条信息上别处的一段序列来决定。**",
      src: "§4.2.1, p.94",
      see: [{ id: "L-27-1-1", en: "the other ways real cells read the code differently from the table", cn: "真实细胞读这张表时与表本身不同的其他几种方式" }]
    },
    {
      link_en: "one worked example, end to end",
      link_cn: "从头到尾走一个具体例子",
      en: "A DNA strand 5'-AGAGGTGCT-3', paired with 3'-TCTCCACGA-5', is transcribed into the mRNA 5'-AGAGGUGCU-3'. Read in threes that is AGA-GGU-GCU. The tRNAs whose anticodons are UCU, CCA and CGA pair with those codons and deliver arginine, glycine and alanine. **Nine nucleotides of DNA become three amino acids of protein: -Arg-Gly-Ala-.**",
      cn: "一条 DNA 链 5′-AGAGGTGCT-3′（与之配对的是 3′-TCTCCACGA-5′）被转录成 mRNA 5′-AGAGGUGCU-3′。三个一组读，就是 **AGA-GGU-GCU**。反密码子分别为 **UCU、CCA、CGA** 的三条 tRNA 与这些密码子配对，分别送来精氨酸、甘氨酸和丙氨酸。**九个 DNA 核苷酸变成三个氨基酸：-Arg-Gly-Ala-。**",
      src: "§4.2.1, p.94, Obr. 4.35"
    }
  ],
  terms: [
    { en: "codon", cn: "密码子",
      def_en: "A group of three nucleotides on an mRNA specifying which single amino acid is added next to the growing chain.",
      def_cn: "mRNA 上的三个核苷酸，规定接下来往链上加的是哪一个氨基酸。" },
    { en: "degeneracy of the code", cn: "密码的简并性",
      def_en: "Most amino acids being specified by more than one triplet — as many as six for some, only one for others — because 64 triplets have to cover 20 amino acids.",
      def_cn: "大多数氨基酸由不止一个三联体指定——有的多达六个，有的只有一个——因为 64 个三联体要覆盖 20 种氨基酸。" },
    { en: "initiation codon", cn: "起始密码子",
      def_en: "AUG, which codes methionine and also marks where reading of a message begins.",
      def_cn: "AUG，它编码甲硫氨酸，同时标出一条信息从哪里开始读。" },
    { en: "termination codon", cn: "终止密码子",
      def_en: "UAA, UAG and UGA, which specify no amino acid and end translation; also called stop or nonsense codons.",
      def_cn: "UAA、UAG、UGA，它们不指定任何氨基酸并终止翻译；也叫 stop 密码子或无义密码子。" },
    { en: "selenocysteine", cn: "硒代半胱氨酸",
      def_en: "The amino acid inserted at UGA when a SECIS element is present on the message; without that element the same triplet is a stop signal.",
      def_cn: "当信息上存在 SECIS 元件时，在 UGA 处被插入的氨基酸；没有这个元件时，同一个三联体是终止信号。" },
    { en: "reading frame", cn: "阅读框",
      def_en: "Which nucleotide the counting in threes starts from; a shift of one nucleotide changes every codon downstream of it.",
      def_cn: "三个一组的数法从哪个核苷酸开始；起点挪一个核苷酸，其下游的每个密码子都会改变。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-2 */
window.BIOLITE_SPINE["4-2-2"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "amino acid", "polypeptide",
            "nucleotide", "mRNA", "rRNA", "tRNA", "organelle", "translation",
            "sedimentation coefficient", "electron microscopy", "subunit",
            "peptide bond", "prokaryote", "eukaryote", "molecular weight"],
  nodeTitle_en: "Protein synthesis takes place in ribosomes",
  nodeTitle_cn: "蛋白质合成在核糖体中进行",
  title_en: "A two-part particle made of RNA and protein, and why many of them work on one message at the same time",
  title_cn: "一个由 RNA 和蛋白质构成的两件式颗粒，以及为什么许多个会同时在一条信息上干活",
  steps: [
    {
      en: "A ribosome is a cell organelle built from rRNA and proteins together, which is what ribonucleoprotein means. It is made of two pieces: a small subunit, 30S in prokaryotes and 40S in eukaryotes, and a large subunit, 50S and 60S respectively. **The two subunits exist separately and come together to make the complete, working particle, so a ribosome is an assembly rather than a single molecule.**",
      cn: "**核糖体**是一种由 rRNA 与蛋白质共同构成的细胞器，这就是**核糖核蛋白（ribonucleoprotein）**的意思。它由两块组成：**小亚基**（原核 30S，真核 40S）和**大亚基**（相应地为 50S 与 60S）。**两个亚基各自独立存在，合到一起才构成完整的、能工作的颗粒；所以核糖体是一个装配体，而不是单个分子。**",
      src: "§4.2.2, p.94"
    },
    {
      link_en: "and putting numbers on the E. coli particle exposes something about the numbers themselves",
      link_cn: "给大肠杆菌的这个颗粒配上数字，会暴露出这些数字本身的一个性质",
      en: "An E. coli ribosome averages 20 nm across, has a mass of about 2,700 kDa, and sediments at 70S. **30S plus 50S gives 70S and not 80S: a sedimentation coefficient tracks a particle's shape and density as well as its mass, so S values never simply add.**",
      cn: "大肠杆菌的核糖体平均直径 **20 nm**，质量约 **2,700 kDa**，沉降系数 **70S**。**30S 加 50S 得到的是 70S 而不是 80S：沉降系数同时跟着颗粒的形状和密度走，不只是跟着质量走，所以 S 值从来不能简单相加。**",
      src: "§4.2.2, pp.94-95, Obr. 4.36"
    },
    {
      link_en: "and the assembly can be taken apart again",
      link_cn: "而这个装配体是可以再拆开的",
      en: "Under certain conditions the two subunits dissociate from each other, and sometimes further ribosome components come away as well. **Being able to pull the particle apart in stages is how its components were identified in the first place, and it is also how a cell recycles subunits from one message to the next.**",
      cn: "在特定条件下，两个亚基会彼此解离，有时核糖体的其他组分也会脱落下来。**能够分阶段把这个颗粒拆开，正是当初辨认出它各个组分的办法；这也是细胞把亚基从一条信息回收、用到下一条信息上的方式。**",
      src: "§4.2.2, p.95"
    },
    {
      link_en: "and the protein part of it is not just scaffolding",
      link_cn: "而其中的蛋白质部分并不只是搭骨架的",
      en: "The proteins of a ribosome do not have a purely structural role. **A number of them are enzymes, or are factors that take part directly in protein synthesis — so part of the machinery of translation is built into the particle rather than arriving from outside it.**",
      cn: "核糖体里的蛋白质并非只起结构作用。**其中有不少本身就是酶，或者是直接参与蛋白质合成的因子——也就是说，翻译所需的一部分机器是内建在这个颗粒里的，而不是从外面赶来的。**",
      src: "§4.2.2, p.95"
    },
    {
      link_en: "and the particle has a shape with named parts, because the parts do different things",
      link_cn: "这个颗粒有形状，各部位还有名字，因为不同部位做不同的事",
      en: "The small subunit has a head, a cleft, a platform, a neck and a body; the large subunit has a central protuberance, a ridge, a valley and a stalk. **The two fit together with a channel between them, and the large subunit is the half that carries the peptidyl transferase activity — the site where each peptide bond is actually made.**",
      cn: "小亚基分为**头部、裂隙、平台、颈部、体部**；大亚基分为**中央突起、脊、谷、柄**。**两者合拢时中间留出一条通道，而带着肽基转移酶活性的是大亚基那一半——每一根肽键实际上就是在那里生成的。**",
      src: "§4.2.2, p.95, Obr. 4.36",
      beyond: true,
      beyondNote: "Obr. 4.36 names the landmarks. That the peptidyl transferase activity sits in the large subunit is this node's own term entry; that its active site is RNA rather than protein is developed in the Lehninger node linked here.",
      see: [{ id: "L-27-2-1", en: "the peptidyl transferase centre, and why it is made of RNA", cn: "肽基转移酶中心，以及它为什么是 RNA 做的" }]
    },
    {
      link_en: "and a ribosome rarely works alone",
      link_cn: "而一个核糖体很少单干",
      en: "Most of the time many ribosomes are bound to one and the same mRNA and all translate it simultaneously; such a complex is a polyribosome, or polysome. **One message is therefore being read at several points along its length at once, so many copies of the protein are produced without waiting for the first ribosome to finish.**",
      cn: "多数时候，许多核糖体结合在同一条 mRNA 上，同时对它进行翻译；这样的复合体叫**多聚核糖体（polyribosome / polysome）**。**于是一条信息在它长度上的好几个位置同时被读，蛋白质的许多份拷贝无需等第一个核糖体做完就已经在产出了。**",
      src: "§4.2.2, p.95"
    },
    {
      link_en: "and there is a simple reason a polysome can form at all",
      link_cn: "多聚核糖体之所以能形成，理由很简单",
      en: "Once the initiation sequence of an mRNA has activated one ribosome, that sequence is released and becomes available to activate the next. **The stretch of message where reading begins is occupied only briefly, so it is free again long before the ribosome that used it has reached the end of the gene.**",
      cn: "mRNA 上的**起始序列**一旦激活了一个核糖体，这段序列就被释放出来，可以去激活下一个。**信息上开始读的那一小段只被短暂占用，所以早在用过它的那个核糖体走到基因末尾之前，它就又空出来了。**",
      src: "§4.2.2, p.95"
    },
    {
      link_en: "and how tightly they can be packed has been measured",
      link_cn: "而它们能挤得多密，是测过的",
      en: "Ribosomes along a polysome sit about 5 to 15 nm apart, which works out at a maximal density of roughly one ribosome per 80 nucleotides of message. **That number sets the ceiling on how fast one mRNA can be translated: past about one per 80 nucleotides the particles would simply not fit.**",
      cn: "多聚核糖体上相邻核糖体之间相距约 **5–15 nm**，换算下来最大密度约为**每 80 个核苷酸一个核糖体**。**这个数字给「一条 mRNA 最快能被翻译到多快」定了上限：超过大约每 80 个核苷酸一个，颗粒就根本挤不下了。**",
      src: "§4.2.2, p.95"
    },
    {
      link_en: "and all of this can be photographed",
      link_cn: "而这一切都可以拍下来",
      en: "An electron micrograph of the silk glands of the silkworm caterpillar Bombyx mori shows a polysome directly: a row of ribosomes along one mRNA, each trailing a nascent polypeptide of fibroin, the silk protein. **The trailing chains get longer along the row, so a single picture shows one message being read many times over at once, each reading at a different stage.**",
      cn: "家蚕（*Bombyx mori*）幼虫丝腺的电子显微照片直接拍下了一个多聚核糖体：一列核糖体排在同一条 mRNA 上，每一个后面拖着一条正在合成的**丝心蛋白（fibroin）**新生肽链。**沿着这一列，拖着的链越来越长——所以一张照片就显示出同一条信息正被同时读许多遍，而每一遍处在不同的阶段。**",
      src: "§4.2.2, p.95, Obr. 4.37"
    }
  ],
  terms: [
    { en: "ribosome", cn: "核糖体",
      def_en: "A ribonucleoprotein organelle of rRNA plus protein, assembled from a small and a large subunit, on which translation is carried out.",
      def_cn: "由 rRNA 加蛋白质构成的核糖核蛋白细胞器，由一个小亚基和一个大亚基装配而成，翻译在其上进行。" },
    { en: "small subunit", cn: "小亚基",
      def_en: "30S in prokaryotes, 40S in eukaryotes; it holds the mRNA and the initiator tRNA, and its landmarks are head, cleft, platform, neck and body.",
      def_cn: "原核 30S、真核 40S；它抓住 mRNA 和起始 tRNA，其部位有头部、裂隙、平台、颈部和体部。" },
    { en: "large subunit", cn: "大亚基",
      def_en: "50S in prokaryotes, 60S in eukaryotes; it carries the peptidyl transferase activity, and its landmarks are the central protuberance, ridge, valley and stalk.",
      def_cn: "原核 50S、真核 60S；它带有肽基转移酶活性，其部位有中央突起、脊、谷和柄。" },
    { en: "polyribosome", cn: "多聚核糖体",
      def_en: "Many ribosomes bound to one mRNA and translating it at once, spaced 5-15 nm apart, at most about one per 80 nucleotides.",
      def_cn: "许多核糖体结合在同一条 mRNA 上同时翻译，间距 5–15 nm，最多约每 80 个核苷酸一个。" },
    { en: "fibroin", cn: "丝心蛋白",
      def_en: "The silk protein made in the silk gland of Bombyx mori; its polysomes are the classic electron micrograph of translation caught in the act.",
      def_cn: "家蚕丝腺中合成的丝蛋白；它的多聚核糖体正是把翻译现场拍下来的那张经典电镜照片。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-3-1 */
window.BIOLITE_SPINE["4-2-3-1"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "ATP", "GTP", "GDP", "amino acid",
            "peptide", "peptide bond", "polypeptide", "nucleotide", "mRNA", "rRNA",
            "tRNA", "ribosome", "codon", "anticodon", "cytosol", "cytoplasm",
            "methionine", "ester", "pyrophosphate", "hydrolysis", "cofactor",
            "subunit", "translation", "molecular weight", "carboxyl group",
            "hydroxyl group", "reading frame"],
  nodeTitle_en: "Phases of protein synthesis (I): activation, initiation, elongation",
  nodeTitle_cn: "蛋白质合成的阶段（一）：活化、起始、延伸",
  title_en: "An amino acid has to be paid for before it can join a chain, and once it is paid for nothing ever looks at it again",
  title_cn: "氨基酸必须先付过钱才能入链；而一旦付过钱，就再没有任何东西会去看它一眼",
  steps: [
    {
      en: "Translation runs in four stages: activation of the amino acids, initiation, elongation and termination. Each stage relies on its own group of factors — proteins that have catalytic ability but are not classified as enzymes. **A factor is a helper that binds, does one thing, and comes off again, so naming the factors of a stage is the quickest way to say what that stage has to accomplish.**",
      cn: "翻译分四个阶段进行：氨基酸的**活化**、**起始**、**延伸**、**终止**。每个阶段依靠各自的一组**因子（factor）**——它们是有催化能力、但不被归为酶的蛋白质。**因子是一种「结合上去、做一件事、然后离开」的帮手；所以把一个阶段的因子点名，就是说清这个阶段要办成什么事最快的方式。**",
      src: "§4.2.3, p.95, Tab. 4.4"
    },
    {
      link_en: "first stage, and it exists because of a chemical fact",
      link_cn: "第一个阶段，它的存在源于一个化学事实",
      en: "A protein cannot be formed directly out of free amino acids: each amino acid must first be raised to a higher energy level, which is what activation means. It happens in the cytosol, and it is catalysed by aminoacyl-tRNA synthetases — enzymes of about 100,000 molecular weight, each specific for one amino acid and its own tRNA, carrying one or more essential -SH groups and requiring Mg²⁺. **One synthetase per amino acid is what makes the whole system specific, because this is the only step where an amino acid's chemistry is ever inspected.**",
      cn: "蛋白质不可能直接由游离氨基酸生成：每个氨基酸必须先被**提升到更高的能级**，这就是**活化**的意思。它发生在**细胞质基质**中，由**氨基酰-tRNA 合成酶**催化——这类酶分子量约 100,000，每一种只对应一种氨基酸和它自己的 tRNA，带有一个或多个必需的 -SH 基团，并需要 Mg²⁺。**「一种氨基酸一个合成酶」正是整套系统特异性的来源，因为这是唯一一处会去检查氨基酸化学结构的步骤。**",
      src: "§4.2.3, p.96",
      see: [{ id: "L-27-2-1", en: "how a synthetase tells isoleucine from valine, and what it does when it fails", cn: "合成酶怎样把异亮氨酸和缬氨酸分开，以及它认错时会怎么办" }]
    },
    {
      link_en: "and it does that in two steps, with ATP spent in the first",
      link_cn: "它分两步完成，ATP 花在第一步",
      en: "First the amino acid reacts with ATP to give aminoacyl-adenylate, also written aminoacyl-AMP, releasing pyrophosphate which is promptly hydrolysed to two phosphates and pulls the reaction forward. Second, the activated amino acid is transferred onto tRNA, AMP leaves, and the product is aminoacyl-tRNA. **The amino acid is held by an ester bond from its own carboxyl group to the 2'-OH or 3'-OH of the terminal AMP at the tRNA's CCA end.**",
      cn: "第一步，氨基酸与 ATP 反应生成**氨基酰腺苷酸（氨基酰-AMP）**，放出焦磷酸；焦磷酸随即被水解成两个磷酸，把反应往前拉。第二步，被活化的氨基酸转移到 tRNA 上，AMP 离去，产物就是**氨基酰-tRNA**。**氨基酸靠一根酯键固定：从它自己的羧基，连到 tRNA 的 CCA 末端上那个末端 AMP 的 2′-OH 或 3′-OH。**",
      src: "§4.2.3, p.96, Obr. 4.38-4.39"
    },
    {
      link_en: "and that ester bond is where the money went",
      link_cn: "而钱就花在这根酯键上",
      recall_en: "activation was needed because free amino acids will not condense on their own",
      recall_cn: "之所以需要活化，是因为游离氨基酸自己不会缩合",
      en: "The energy taken from ATP is now stored in the bond between the amino acid and its tRNA. **Forming a peptide bond later costs the ribosome nothing extra, because breaking this ester bond is what pays for it — activation is not bookkeeping, it is what makes the peptide bond downhill enough to happen at all.**",
      cn: "从 ATP 拿来的能量，如今存在氨基酸与它的 tRNA 之间那根键里。**后面生成肽键时核糖体不必再额外付账，因为断开这根酯键就是账款本身——活化不是一道记账手续，它正是使肽键变得足够「顺坡」、从而真能发生的原因。**",
      src: "§4.2.3, p.96"
    },
    {
      link_en: "and from this point the amino acid itself stops mattering",
      link_cn: "从这一刻起，氨基酸本身就不再要紧了",
      en: "Once aminoacyl-tRNA has formed, an amino acid is recognised in protein synthesis by the anticodon of its tRNA and never again by its own chemical structure. **Charge a tRNA with the wrong amino acid and that amino acid is put into the protein wherever the anticodon says, not where its own chemistry would belong — nothing downstream can catch the mistake.**",
      cn: "氨基酰-tRNA 一旦形成，蛋白质合成中对这个氨基酸的识别就只看它 tRNA 上的**反密码子**，再也不看它自身的化学结构。**给一条 tRNA 装错了氨基酸，这个氨基酸就会被安到反密码子所指的位置上，而不是它自己的化学性质该去的位置——下游没有任何环节能把这个错误抓回来。**",
      src: "§4.2.3, p.96"
    },
    {
      link_en: "before the cycle can be described, the two places a tRNA can sit have to be named",
      link_cn: "在讲循环之前，先得给 tRNA 能待的两个位置起名",
      en: "A ribosome has at least two sites specific for binding tRNA. The A-site, the aminoacyl-tRNA site, is where an incoming aminoacyl-tRNA binds, and it binds there codon-specifically, by codon-anticodon interaction. The P-site, the peptidyl site, is next to it and holds the tRNA carrying the growing peptide chain. **The whole of elongation is moving one tRNA from A to P, over and over.**",
      cn: "核糖体上至少有两个专门结合 tRNA 的位点。**A 位点**（氨基酰-tRNA 位点）是新来的氨基酰-tRNA 结合的地方，它在那里的结合是**密码子特异**的，靠密码子-反密码子相互作用。**P 位点**（肽基位点）紧挨着它，容纳携带正在增长的肽链的那条 tRNA。**整个延伸阶段所做的事，就是把一条 tRNA 从 A 挪到 P，一遍又一遍。**",
      src: "§4.2.3, p.97"
    },
    {
      link_en: "second stage. It opens with a problem the code itself creates",
      link_cn: "第二个阶段。它一上来就撞上密码本身造成的一个问题",
      recall_en: "AUG codes methionine and also marks the start",
      recall_cn: "AUG 既编码甲硫氨酸，又标记起点",
      en: "Since AUG marks both the beginning of translation and every internal methionine, an AUG on its own cannot say which one it is. The 3'-end of 16S rRNA carries a pyrimidine-rich Shine-Dalgarno sequence, and it base-pairs with a complementary stretch of the mRNA centred about 10 nucleotides upstream of the initiating AUG. **The ribosome locates the true start by pairing with the message a short distance before it, so the start signal is a piece of sequence outside the reading frame entirely.**",
      cn: "由于 AUG 既标记翻译的开始、又编码每一个内部的甲硫氨酸，单凭一个 AUG 说不清它是哪一种。**16S rRNA 的 3′ 端**带有一段富含嘧啶的 **Shine-Dalgarno 序列**，它与 mRNA 上一段互补序列配对，而那段序列的中心位于起始 AUG 上游约 **10 个核苷酸**处。**核糖体是靠与信息上「起点稍前一点」的地方配对来找到真正起点的——所以起始信号是一段完全在阅读框之外的序列。**",
      src: "§4.2.3, p.97, Obr. 4.40"
    },
    {
      link_en: "initiation phase one: clear the ground",
      link_cn: "起始第一步：把场地清出来",
      en: "IF-3 binds the 30S subunit and, helped by IF-1, drives the dissociation of the inactive 70S ribosome left over from the previous round of translation. **A ribosome cannot start on a new message while it is still assembled around the last one, so the first act of initiation is taking a finished ribosome apart.**",
      cn: "**IF-3** 结合 30S 亚基，并在 **IF-1** 协助下，把上一轮翻译遗留下来的、无活性的 70S 核糖体拆开。**一个核糖体只要还围着上一条信息组装着，就没法在新信息上起头；所以起始的第一个动作，是把一个已经完工的核糖体拆散。**",
      src: "§4.2.3, p.98, Obr. 4.41"
    },
    {
      link_en: "phase two: bring in the message and the first tRNA together",
      link_cn: "第二步：把信息和第一条 tRNA 一起请上来",
      en: "GTP, the mRNA, and a complex of IF-2 with formylmethionyl-tRNA — the special initiator tRNA that begins every bacterial chain — all bind the 30S subunit at the P-site, giving the 30S initiation complex. **This is the one tRNA-to-ribosome binding not strictly governed by codon-anticodon pairing, though that pairing still contributes: the initiator is placed by the factor rather than selected by the codon.**",
      cn: "**GTP**、**mRNA**，以及 **IF-2 与甲酰蛋氨酰-tRNA**（启动每一条细菌肽链的那条特殊起始 tRNA）的复合物，一同结合到 30S 亚基的 **P 位点**上，形成 **30S 起始复合物**。**这是唯一一次 tRNA 与核糖体的结合不严格受密码子-反密码子配对支配的场合，尽管这种配对仍有贡献：起始 tRNA 是被因子摆上去的，而不是被密码子挑出来的。**",
      src: "§4.2.3, p.98, Obr. 4.41"
    },
    {
      link_en: "phase three: put the lid on",
      link_cn: "第三步：把盖子扣上",
      en: "The 50S subunit joins, GTP is hydrolysed to GDP and phosphate, and IF-1, IF-2 and IF-3 are all released. The result is the 70S initiation complex, with formylmethionyl-tRNA in the P-site and the A-site empty. **An empty A-site over the second codon is exactly the starting position of the elongation cycle, so initiation ends by handing elongation a ribosome already in the right state.**",
      cn: "**50S 亚基**加入，GTP 水解为 GDP 与磷酸，IF-1、IF-2、IF-3 全部被释放。结果是 **70S 起始复合物**：甲酰蛋氨酰-tRNA 在 P 位点，**A 位点空着**。**一个空着的、正对第二个密码子的 A 位点，恰恰就是延伸循环的起跑姿势——所以起始阶段的收尾，就是把一个已经摆好姿势的核糖体交给延伸阶段。**",
      src: "§4.2.3, p.98, Obr. 4.41"
    },
    {
      link_en: "third stage, step one of three: get the next amino acid in",
      link_cn: "第三个阶段，三步中的第一步：把下一个氨基酸弄进来",
      en: "An aminoacyl-tRNA binds the A-site codon-specifically, but on its own that binding is weak. In a living cell it is therefore delivered as a ternary complex, EF-Tu·GTP·aminoacyl-tRNA; GTP is hydrolysed once the codon and anticodon have paired correctly, and EF-Ts then regenerates EF-Tu·GTP from the EF-Tu·GDP left behind. **Hydrolysing GTP only after correct pairing makes the delivery step itself a check on accuracy, not merely a transport service.**",
      cn: "氨基酰-tRNA 以密码子特异的方式结合到 A 位点，但单凭它自己，这个结合很弱。所以在活细胞里它是以**三元复合物 EF-Tu·GTP·氨基酰-tRNA** 的形式被送来的；密码子与反密码子正确配对之后 GTP 才被水解，随后 **EF-Ts** 把剩下的 EF-Tu·GDP 再生为 EF-Tu·GTP。**只有配对正确之后才水解 GTP，这就使递送这一步本身成了一道准确性检查，而不只是一趟运输服务。**",
      src: "§4.2.3, p.99, Obr. 4.42"
    },
    {
      link_en: "step two: make the bond",
      link_cn: "第二步：把键做出来",
      en: "The new bond is made by peptidyl transferase — an activity carried by the large subunit, the 50S half of the ribosome — which transfers the whole peptidyl chain off the P-site tRNA onto the aminoacyl-tRNA sitting in the A-site, forming one new peptide bond. **Note the direction: the growing chain moves forward onto the newcomer, so afterwards the lengthened peptidyl-tRNA is in the A-site and an uncharged tRNA is left behind in the P-site.**",
      cn: "**肽基转移酶**是大亚基的一项活性，它把整条肽链从 P 位点的 tRNA 上转移到坐在 A 位点的氨基酰-tRNA 上，生成一根新的肽键。**注意方向：是正在增长的链往前搬到新来者身上——所以事后变长了的肽酰-tRNA 位于 A 位点，而 P 位点留下一条空载的 tRNA。**",
      src: "§4.2.3, pp.99-100, Obr. 4.43"
    },
    {
      link_en: "step three: shift everything back by one codon",
      link_cn: "第三步：把一切往回挪一个密码子",
      en: "EF-G, hydrolysing GTP, drives translocation: the uncharged tRNA leaves the P-site by way of the E-site, and the peptidyl-tRNA together with its mRNA moves from the A-site to the P-site, shifting the reading by exactly one codon. EF-G must then be released before the next cycle, since EF-G and EF-Tu cannot be bound at the same time. **One cycle adds one amino acid and restores the ribosome to the state initiation left it in — and the mutual exclusion of the two factors is what stops the steps running out of order.**",
      cn: "**EF-G** 水解 GTP，驱动**移位**：空载的 tRNA 经由 **E 位点**离开 P 位点，肽酰-tRNA 连同它的 mRNA 从 A 位点移到 P 位点，把阅读恰好推进**一个密码子**。随后 EF-G 必须先被释放，下一轮才能开始，因为 EF-G 与 EF-Tu 不能同时结合。**一个循环加上一个氨基酸，并把核糖体恢复到起始阶段交出来时的状态；而两个因子互斥这一点，正是防止步骤乱序的机制。**",
      src: "§4.2.3, p.100, Obr. 4.42",
      see: [{ id: "L-27-2-1", en: "the hybrid states translocation passes through, and what one cycle really costs", cn: "移位途中经过的杂合态，以及一个循环的真实成本" }]
    }
  ],
  terms: [
    { en: "aminoacyl-tRNA synthetase", cn: "氨基酰-tRNA 合成酶",
      def_en: "The enzyme, about 100,000 in molecular weight and needing Mg2+ and free -SH groups, that attaches one particular amino acid to its own tRNA in two ATP-driven steps.",
      def_cn: "分子量约 100,000、需要 Mg2+ 和游离 -SH 的酶，分两步由 ATP 驱动，把某一种特定氨基酸接到它自己的 tRNA 上。" },
    { en: "aminoacyl-adenylate", cn: "氨基酰腺苷酸",
      def_en: "The high-energy intermediate formed from an amino acid and ATP, with pyrophosphate released; the amino acid then moves from it onto tRNA.",
      def_cn: "由氨基酸与 ATP 生成、并放出焦磷酸的高能中间体；氨基酸随后从它转移到 tRNA 上。" },
    { en: "A-site", cn: "A 位点",
      def_en: "The ribosomal site an incoming aminoacyl-tRNA binds, selected there by codon-anticodon pairing.",
      def_cn: "新来的氨基酰-tRNA 结合的核糖体位点，在那里由密码子-反密码子配对来挑选。" },
    { en: "P-site", cn: "P 位点",
      def_en: "The ribosomal site holding the tRNA that carries the growing peptide chain.",
      def_cn: "容纳携带正在增长的肽链的那条 tRNA 的核糖体位点。" },
    { en: "Shine-Dalgarno sequence", cn: "Shine-Dalgarno 序列",
      def_en: "A pyrimidine-rich stretch at the 3'-end of 16S rRNA that pairs with the mRNA about 10 nucleotides before the initiating AUG, marking which AUG is the real start.",
      def_cn: "16S rRNA 3′ 端一段富含嘧啶的序列，与 mRNA 上起始 AUG 之前约 10 个核苷酸处配对，标出哪一个 AUG 才是真正的起点。" },
    { en: "initiation factors", cn: "起始因子",
      def_en: "IF-3 with IF-1 pulls apart the spent 70S ribosome; IF-2 with GTP places formylmethionyl-tRNA in the P-site; all three leave when the 50S subunit joins.",
      def_cn: "IF-3 与 IF-1 把用过的 70S 核糖体拆开；IF-2 携 GTP 把甲酰蛋氨酰-tRNA 放进 P 位点；50S 亚基加入时三者全部离开。" },
    { en: "ternary complex", cn: "三元复合物",
      def_en: "EF-Tu·GTP·aminoacyl-tRNA, the form every aminoacyl-tRNA arrives at the ribosome in; the GTP is hydrolysed only once the codon and anticodon have paired correctly.",
      def_cn: "EF-Tu·GTP·氨基酰-tRNA，每一条氨基酰-tRNA 抵达核糖体时所采取的形式；只有密码子与反密码子正确配对之后，其中的 GTP 才被水解。" },
    { en: "peptidyl transferase", cn: "肽基转移酶",
      def_en: "The activity of the large subunit that moves the whole growing chain from the P-site tRNA onto the amino acid held in the A-site, making one peptide bond.",
      def_cn: "大亚基的一项活性，把整条正在增长的链从 P 位点的 tRNA 搬到 A 位点所持的氨基酸上，生成一根肽键。" },
    { en: "translocation", cn: "移位",
      def_en: "The EF-G-driven, GTP-consuming move of peptidyl-tRNA and mRNA from A-site to P-site by exactly one codon, with the spent tRNA leaving through the E-site.",
      def_cn: "由 EF-G 驱动、消耗 GTP 的一步：肽酰-tRNA 与 mRNA 从 A 位点移到 P 位点，恰好一个密码子的距离，用过的 tRNA 经 E 位点离开。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-3-2 */
window.BIOLITE_SPINE["4-2-3-2"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "GTP", "GDP", "amino acid",
            "peptide", "polypeptide", "mRNA", "rRNA", "tRNA", "ribosome",
            "codon", "anticodon", "cytoplasm", "methionine", "hydrolysis",
            "subunit", "translation", "endoplasmic reticulum", "prokaryote",
            "eukaryote", "carboxylate", "A-site", "P-site", "peptidyl transferase",
            "Shine-Dalgarno sequence", "initiation factors", "elongation factors",
            "termination codon", "polysome"],
  nodeTitle_en: "Phases of protein synthesis (II): termination",
  nodeTitle_cn: "蛋白质合成的阶段（二）：终止",
  title_en: "Not a new mechanism — the same bond-forming reaction aimed at water instead of at an amino acid",
  title_cn: "并非新机制 —— 同一个成键反应，只是把目标从氨基酸换成了水",
  steps: [
    {
      en: "Termination begins when one of the stop codons — UAA, UAG or UGA — arrives in the A-site. These triplets code no amino acid, so no aminoacyl-tRNA can pair with them and the A-site simply stays empty. **Elongation halts because nothing arrives to continue it, not because anything switches it off.**",
      cn: "终止阶段始于三个**终止密码子**之一——**UAA、UAG、UGA**——进入 A 位点。这些三联体不编码任何氨基酸，所以没有任何氨基酰-tRNA 能与它们配对，A 位点就那样空着。**延伸之所以停下，是因为没有东西再来接手，而不是因为有什么东西把它关掉了。**",
      src: "§4.2.3, p.100, Obr. 4.44"
    },
    {
      link_en: "and something else comes and fills that empty site",
      link_cn: "而另有东西来把这个空位填上",
      en: "Release factors read the stop codon at the A-site: RF-1 recognises UAA or UAG, RF-2 recognises UAA or UGA, and a third factor, RF-3, binds GTP and stimulates the binding of the other two. Neither RF-1 nor RF-2 can occupy the ribosome at the same time as EF-G. **A protein rather than a tRNA now sits in the A-site, and the mutual exclusion with EF-G means the ribosome cannot translocate while a release factor is in place.**",
      cn: "**释放因子**在 A 位点读取终止密码子：**RF-1** 识别 UAA 或 UAG，**RF-2** 识别 UAA 或 UGA；第三个因子 **RF-3** 结合 GTP，促进前两者的结合。RF-1 和 RF-2 都不能与 **EF-G** 同时占据核糖体。**现在坐在 A 位点上的是一个蛋白而不是一条 tRNA；而与 EF-G 互斥意味着：只要释放因子还在位，核糖体就无法移位。**",
      src: "§4.2.3, p.101, Obr. 4.44"
    },
    {
      link_en: "and here is the one chemical difference that makes it termination",
      link_cn: "而使它成为「终止」的化学差别，只有这一处",
      recall_en: "peptidyl transferase transferring the chain onto an incoming aminoacyl-tRNA",
      recall_cn: "肽基转移酶把链转移到新来的氨基酰-tRNA 上",
      en: "A bound release factor induces the peptidyl group to be transferred onto a molecule of water instead of onto an aminoacyl-tRNA. **It is the same peptidyl-transferase reaction with a different acceptor: water gives the chain a free carboxylate end and the finished polypeptide is simply let go, while the tRNA left behind dissociates.**",
      cn: "结合上去的释放因子诱导肽基被转移到**一分子水**上，而不是转移到氨基酰-tRNA 上。**这是同一个肽基转移酶反应，只是受体换了：水给这条链留下一个游离的羧酸根末端，做好的多肽就这样被放走，而留在原位的 tRNA 随之解离。**",
      src: "§4.2.3, p.101, Obr. 4.45"
    },
    {
      link_en: "the chain is off, but the machine is still assembled around the message",
      link_cn: "链下来了，可机器还围在信息上没散",
      en: "The release factor itself is cleaved off, with GTP hydrolysed to GDP and phosphate at the same moment, and the deacylated tRNA leaves. What remains is an inactive ribosome still sitting on the mRNA. **Taking it off is a separate job with its own factor: the ribosome-releasing factor, working with EF-G and the energy of GTP hydrolysis, releases the ribosome from the message and then helps split it back into its 30S and 50S subunits.**",
      cn: "释放因子本身被切除，同一时刻 GTP 水解为 GDP 与磷酸，去酰基的 tRNA 也离开。剩下的是一个仍然坐在 mRNA 上的、无活性的核糖体。**把它取下来是另一件事、有自己的因子：核糖体释放因子（RRF）与 EF-G 一起，靠 GTP 水解的能量把核糖体从信息上放开，随后再协助它拆回 30S 与 50S 两个亚基。**",
      src: "§4.2.3, p.101"
    },
    {
      link_en: "and with that the process closes on itself",
      link_cn: "至此，整个过程首尾相接",
      recall_en: "IF-3 and IF-1 pulling apart a leftover 70S ribosome at the very start of initiation",
      recall_cn: "起始阶段一开头，IF-3 与 IF-1 把上一轮遗留的 70S 拆开",
      en: "Once the ribosome has come apart into free subunits, the cycle can begin again at initiation, and it repeats for the biosynthesis of every protein molecule the cell makes. **Dismantling a spent ribosome and preparing a fresh one are the same event seen from two ends, which is why protein synthesis is described as a cycle rather than as a line.**",
      cn: "核糖体一旦拆成游离的亚基，整个循环就可以从**起始**重新开始，并为细胞所造的每一个蛋白质分子重复一遍。**「拆掉一个用完的核糖体」和「准备一个新的核糖体」是同一件事的两端——正因如此，蛋白质合成被描述为一个循环，而不是一条直线。**",
      src: "§4.2.3, p.101"
    },
    {
      link_en: "and the chain that has just come off is not yet in its final form",
      link_cn: "而刚刚下来的这条链，还不是它的最终形态",
      en: "A freshly made bacterial polypeptide still carries formylmethionine at its N-terminus — methionine with a formyl group on its amino nitrogen, put there by the initiator tRNA. Hydrolytic enzymes then trim it, and how much they take varies by species: the formyl group alone, or the whole formylmethionine residue, or even several of the first amino acids. **The first residue of a finished protein is therefore usually not the one the start codon specified.**",
      cn: "刚造好的细菌多肽 N 端仍带着**甲酰甲硫氨酸**——即氨基氮上挂了一个甲酰基的甲硫氨酸，由起始 tRNA 带上去的。随后由水解酶把它修掉，切多少因物种而异：可能只切甲酰基，可能切掉整个甲酰甲硫氨酸残基，甚至可能连最初的几个氨基酸一起切掉。**所以成品蛋白质的第一个残基，通常并不是起始密码子所指定的那一个。**",
      src: "§4.2.3, pp.101-102",
      see: [{ id: "4-3-2", en: "the other things done to a chain after it is finished", cn: "链造完之后还要对它做的其他事" }]
    },
    {
      link_en: "everything so far is the bacterial machine. A eukaryote does the same job differently in four places. First, how the start is found",
      link_cn: "以上讲的都是细菌那台机器。真核细胞把同样的活干成了四处不同。第一处：怎样找到起点",
      en: "A eukaryotic mRNA has no Shine-Dalgarno-type sequence to pair with the rRNA of the small subunit, which in a eukaryote is the 40S particle carrying 18S rRNA. Instead the initiation factor eIF-4F interacts with the cap at the mRNA's 5' end, and the 40S subunit then migrates along the message — scanning — until it reaches the start codon. **A bacterium finds its start by pairing at a fixed distance from it; a eukaryote finds its start by walking from the end of the message until it meets one.**",
      cn: "真核 mRNA 上没有能与小亚基 18S rRNA 配对的 Shine-Dalgarno 型序列。取而代之的是：起始因子 **eIF-4F** 与 mRNA 5′ 端的**帽子结构**相互作用，随后 **40S 亚基**沿着信息迁移——即**扫描（scanning）**——直到遇上起始密码子。**细菌是靠在距起点固定距离处配对来找到起点的；真核细胞则是从信息的一端一路走过去，直到撞见起点为止。**",
      src: "§4.2.3, p.102",
      see: [{ id: "4-2-4-2", en: "the cap that eIF-4F binds, and how it is put on", cn: "eIF-4F 所结合的那个帽子，以及它是怎么装上去的" }]
    },
    {
      link_en: "second and third: how many helpers, and which amino acid starts the chain",
      link_cn: "第二、第三处：帮手有多少，以及由哪个氨基酸开头",
      en: "Eukaryotic ribosomes call on a much larger set of initiation factors, written eIF, than the three a bacterium uses. And a eukaryotic chain begins with plain methionine rather than formylmethionine. **The formyl group is a bacterial marking, so its absence is one of the differences that lets a cell tell its own new proteins from a bacterium's.**",
      cn: "真核核糖体动用的**起始因子（eIF）**远比细菌那三个多得多。而真核肽链是以**普通的甲硫氨酸**、而非甲酰甲硫氨酸开头的。**甲酰基是细菌特有的标记，所以它的缺席正是让细胞区分「自己新造的蛋白」与「细菌的蛋白」的差别之一。**",
      src: "§4.2.3, p.102",
      beyond: true,
      beyondNote: "p.102 states plainly that eukaryotes start with methionine and bacteria with formylmethionine. Reading the formyl group as a signal the immune system uses is standard and is not on this page."
    },
    {
      link_en: "fourth: how termination is staffed",
      link_cn: "第四处：终止那一步的人手配置",
      recall_en: "RF-1, RF-2 and RF-3 dividing the three stop codons between them",
      recall_cn: "RF-1、RF-2、RF-3 把三个终止密码子分工包了",
      en: "A eukaryote terminates with a single release factor, eRF, which recognises all three stop codons on its own. **Where a bacterium divides the three codons between two factors and adds a third to help them bind, a eukaryote does the same job with one protein.**",
      cn: "真核细胞的终止只用**一个释放因子 eRF**，它独自识别全部三个终止密码子。**细菌把三个密码子分给两个因子、再加第三个来帮它们结合；真核细胞用一个蛋白就把同一件事办了。**",
      src: "§4.2.3, p.102"
    },
    {
      link_en: "and one last difference, about where the work happens",
      link_cn: "最后还有一处不同，关于这活在哪里干",
      en: "Eukaryotic ribosomes work either free in the cytoplasm or bound to the rough endoplasmic reticulum. A prokaryote has no endoplasmic reticulum at all, so it translates only on free ribosomes and polysomes. **Where a ribosome sits decides where its product ends up: a chain made on the rough endoplasmic reticulum is fed into the membrane system as it is being made, and a chain made free in the cytoplasm stays in the cytoplasm.**",
      cn: "真核核糖体既可以游离在细胞质中工作，也可以结合在**粗面内质网**上工作。原核生物根本没有内质网，所以只能在游离的核糖体和多聚核糖体上翻译。**核糖体待在哪里，决定了它的产物最终去哪里：在粗面内质网上合成的链，一边合成一边被送进膜系统；在细胞质中游离合成的链，则留在细胞质里。**",
      src: "§4.2.3, p.102",
      see: [{ id: "4-3-2", en: "how a chain is actually taken across a membrane", cn: "一条链究竟是怎样被送过膜的" }]
    }
  ],
  terms: [
    { en: "release factor", cn: "释放因子",
      def_en: "The protein that occupies the A-site when a stop codon arrives: RF-1 for UAA and UAG, RF-2 for UAA and UGA, with GTP-bound RF-3 stimulating their binding.",
      def_cn: "终止密码子到位时占据 A 位点的蛋白：RF-1 对应 UAA 和 UAG，RF-2 对应 UAA 和 UGA，结合 GTP 的 RF-3 促进二者结合。" },
    { en: "ribosome-releasing factor", cn: "核糖体释放因子",
      def_en: "The factor that, with EF-G and GTP hydrolysis, takes the spent ribosome off the mRNA and splits it back into subunits.",
      def_cn: "与 EF-G 及 GTP 水解一起，把用完的核糖体从 mRNA 上取下、并拆回亚基的因子。" },
    { en: "eRF", cn: "eRF（真核释放因子）",
      def_en: "The one eukaryotic release factor, which recognises all three stop codons by itself.",
      def_cn: "真核生物唯一的释放因子，独自识别全部三个终止密码子。" },
    { en: "formylmethionine", cn: "甲酰甲硫氨酸",
      def_en: "Methionine carrying a formyl group on its amino nitrogen; it starts every bacterial chain and is trimmed off afterwards to a degree that varies by species.",
      def_cn: "氨基氮上带一个甲酰基的甲硫氨酸；每条细菌肽链都由它开头，事后按物种不同被切除到不同程度。" },
    { en: "eIF-4F", cn: "eIF-4F",
      def_en: "The eukaryotic initiation factor that binds the cap at an mRNA's 5' end, so that the small subunit can start scanning for the start codon.",
      def_cn: "结合 mRNA 5′ 端帽子结构的真核起始因子，使小亚基得以开始扫描、寻找起始密码子。" },
    { en: "scanning", cn: "扫描",
      def_en: "The 40S subunit migrating along a eukaryotic message from its capped 5' end until it reaches a start codon; it replaces the bacterial Shine-Dalgarno pairing.",
      def_cn: "40S 亚基从真核信息带帽的 5′ 端沿着 mRNA 迁移，直到遇上起始密码子；它取代了细菌的 Shine-Dalgarno 配对。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-4-1 */
window.BIOLITE_SPINE["4-2-4-1"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "amino acid", "peptide",
            "polypeptide", "nucleotide", "mRNA", "tRNA", "ribosome", "codon",
            "substrate", "tryptophan", "lactose", "hairpin", "palindrome",
            "transcription", "translation", "promoter", "RNA polymerase",
            "sigma factor", "holoenzyme", "subunit", "terminator", "effector",
            "prokaryote", "E. coli"],
  nodeTitle_en: "Regulation of protein synthesis (I): the lac and trp operons",
  nodeTitle_cn: "蛋白质合成的调节（一）：乳糖操纵子与色氨酸操纵子",
  title_en: "Two ways of deciding whether to transcribe a gene: a protein sitting on the DNA, and a ribosome reporting in real time whether an amino acid is scarce",
  title_cn: "决定要不要转录一个基因的两种办法：一个蛋白坐在 DNA 上，以及一个核糖体实时报告某个氨基酸是不是不够用了",
  steps: [
    {
      en: "Protein synthesis is controlled mainly at transcription, and there are two directions to work in: negative regulation, also called repression, slows the transcription of DNA into mRNA, and positive regulation, also called stimulation, has a regulatory protein speed it up. **Both exist for the same reason: a cell must not waste materials making a protein it has no use for, and must not run short of one it needs.**",
      cn: "蛋白质合成主要在**转录**这一层被调节，而调节有两个方向。**负调节（阻遏）**减缓 DNA 向 mRNA 的转录；**正调节（刺激）**则由一个调节蛋白把转录加快。**两者存在的理由相同：细胞既不能浪费材料去造一个用不上的蛋白，也不能让需要的那个短缺。**",
      src: "§4.2.4, p.102"
    },
    {
      link_en: "and the unit being regulated is not one gene",
      link_cn: "而被调节的单位并不是单个基因",
      en: "A group of genes encoding one set of proteins is an operon. Beside it sits a regulator gene — gene I in the lactose system — whose protein product regulates transcription. The operon itself has two parts: a regulatory site, made of the promoter gene P and the operator gene O, and the structural genes that encode the proteins. **Regulating the one site therefore switches the whole group of genes at once.**",
      cn: "编码同一套蛋白质的一组基因，就是一个**操纵子（operon）**。它旁边有一个**调节基因**——在乳糖系统里是 **I 基因**——其蛋白产物负责调节转录。操纵子本身分两部分：**调节位点**（由**启动子基因 P** 和**操纵基因 O** 组成），以及编码蛋白质的**结构基因**。**因此，只要调节这一个位点，就等于一次性开关了整组基因。**",
      src: "§4.2.4, p.103, Obr. 4.46"
    },
    {
      link_en: "and in the lactose system the group is three genes with related jobs",
      link_cn: "在乳糖系统里，这一组是三个工作相关的基因",
      en: "The lac structural genes are Z, Y and A, encoding β-galactosidase, galactoside permease and thiogalactoside transacetylase. **A permease brings the sugar into the cell and a galactosidase splits it once inside, so transcribing them as one unit means the cell never acquires the ability to take up lactose without also acquiring the ability to use it.**",
      cn: "lac 的结构基因是 **Z、Y、A**，分别编码 **β-半乳糖苷酶**、**半乳糖苷透过酶**和**硫代半乳糖苷转乙酰酶**。**透过酶把糖运进细胞，半乳糖苷酶在细胞内把它切开；把它们作为一个单元一起转录，就意味着细胞绝不会只获得「摄取乳糖」的能力而没有「利用乳糖」的能力。**",
      src: "§4.2.4, p.103, Obr. 4.46"
    },
    {
      link_en: "now the protein that does the regulating",
      link_cn: "现在说做调节的那个蛋白",
      en: "The product of gene I is the repressor, a diffusible negative regulatory protein. **Diffusible matters: the repressor is made at one place on the chromosome and travels through the cell to the site it controls, so a regulator gene need not sit next to the operon it governs.**",
      cn: "I 基因的产物是**阻遏物（repressor）**，一种可扩散的负调节蛋白。**「可扩散」这一点很要紧：阻遏物在染色体的某一处被造出来，再穿过细胞走到它所控制的位点；因此一个调节基因不必紧挨着它所管辖的操纵子。**",
      src: "§4.2.4, p.103"
    },
    {
      link_en: "and a small molecule decides which way the repressor behaves",
      link_cn: "而一个小分子决定阻遏物往哪边倒",
      en: "A low-molecular-weight effector modulates it. A corepressor strengthens repression. An inducer does the opposite: it is a positive effector, frequently the enzyme's own substrate or a derivative of it, and it binds the repressor and blocks the repressor from binding DNA. **Using the substrate itself as the inducer makes the rule read directly: build the enzyme only when there is something for it to act on.**",
      cn: "一个低分子量的**效应物**调节它的行为。**辅阻遏物（corepressor）**加强阻遏。**诱导物（inducer）**则相反：它是一种正效应物，常常就是该酶自己的底物或其衍生物；它结合阻遏物，使阻遏物无法再结合 DNA。**用底物本身充当诱导物，这条规则就可以直接读出来：只有当有东西供它作用时，才把这个酶造出来。**",
      src: "§4.2.4, p.103"
    },
    {
      link_en: "put those two states side by side and you have a switch",
      link_cn: "把这两种状态并排一放，就是一个开关",
      en: "With no inducer present, the lac repressor is bound to operator gene O and transcription of the operon is blocked. When an inducer binds the repressor, the complex dissociates from the operator and the structural genes are transcribed into lac mRNA. **Operator, repressor and inducer together are a molecular switch with exactly two states, and the concentration of one small molecule decides which state it is in.**",
      cn: "没有诱导物时，lac 阻遏物结合在**操纵基因 O** 上，操纵子的转录被阻断。诱导物结合阻遏物后，这个复合物从操纵基因上解离，结构基因得以被转录成 **lac mRNA**。**操纵基因、阻遏物、诱导物三者合起来就是一个只有两种状态的分子开关，而处在哪一种状态，由一个小分子的浓度决定。**",
      src: "§4.2.4, pp.103-104, Obr. 4.47"
    },
    {
      link_en: "and the site the repressor sits on has a shape that suits a protein",
      link_cn: "而阻遏物所坐的那个位点，形状正适合一个蛋白",
      en: "The lac operator is almost palindromic — a sequence followed by its own reverse complement — which makes it easy for a protein to bind. The lac repressor actually occupies three sites on the operon: the primary operator O1, which overlaps the lac promoter, plus two pseudo-operators, O2 and O3, sitting inside gene lacZ. **O1 overlapping the promoter is what makes repression physical: with the repressor there, RNA polymerase has nowhere to bind.**",
      cn: "lac 操纵基因几乎是**回文**的——一段序列后面跟着它自己的反向互补序列——这使蛋白很容易结合上去。lac 阻遏物实际上在操纵子上占据**三个**位点：主操纵位点 **O1**（与 lac 启动子重叠），外加两个**假操纵位点 O2 和 O3**（位于 lacZ 基因内部）。**O1 与启动子重叠，正是阻遏之所以是物理性的原因：阻遏物在那里，RNA 聚合酶就无处可结合。**",
      src: "§4.2.4, p.104",
      see: [{ id: "L-28-1-1", en: "why regulatory sites are inverted repeats, and how much the two extra sites are worth", cn: "调控位点为什么是反向重复，以及那两个附加位点值多少" }]
    },
    {
      link_en: "and when the site is free, starting transcription is still not instantaneous",
      link_cn: "而位点空出来之后，启动转录也并非一蹴而就",
      en: "The RNA polymerase holoenzyme — the complete enzyme, subunits α₂ββ′σ — forms an open complex with the promoter and then repeatedly makes short RNA oligomers of up to 9 nucleotides and lets them go again. This abortive initiation stops once the σ factor is released and the promoter is freed, and the core enzyme α₂ββ′ then elongates the transcript properly. **Starting is the difficult step, and abortive initiation is what a polymerase failing to get started actually looks like.**",
      cn: "**RNA 聚合酶全酶**（亚基 **α₂ββ′σ**）与启动子形成**开放复合物**，随后反复合成长度不超过 **9 个核苷酸**的短 RNA 寡聚体，又反复把它们放掉。这种**流产性起始**要等 **σ 因子**被释放、启动子被腾出来之后才停止，接着由**核心酶 α₂ββ′** 正式延伸转录本。**起始才是难的那一步；而「聚合酶起不了步」的真实样子，就是流产性起始。**",
      src: "§4.2.4, p.104"
    },
    {
      link_en: "a second operon, controlled a completely different way",
      link_cn: "第二个操纵子，控制方式完全不同",
      en: "The trp operon of E. coli encodes five polypeptides that make up three enzymes of tryptophan synthesis. RNA polymerase first transcribes only a leader sequence, trpL, 162 nucleotides long, and near the end of that leader sits a further regulatory element, the attenuator. **The attenuator works like a second operator placed inside the transcript: it can stop transcription after nothing but the leader has been made, so the cell can abandon a gene it has already started.**",
      cn: "大肠杆菌的 **trp 操纵子**编码五条多肽，组成色氨酸合成所需的三个酶。RNA 聚合酶首先只转录一段**前导序列 trpL**，长 **162 个核苷酸**；在这段前导序列末端附近，还有一个调节元件，叫**衰减子（attenuator）**。**衰减子的作用像是一个被放进转录本里的第二个操纵基因：它能在只造出前导序列之后就让转录停下——于是细胞可以放弃一个已经开了头的基因。**",
      src: "§4.2.4, p.105, Obr. 4.48"
    },
    {
      link_en: "and what reads the attenuator is not a protein at all",
      link_cn: "而读取衰减子的根本不是什么蛋白",
      en: "The leader encodes a short leader peptide, and a ribosome translates it just behind the RNA polymerase that is still transcribing. Four stretches of the leader RNA, numbered 1 to 4, can pair with each other in two mutually exclusive ways — 2 with 3, or 3 with 4 — and where the ribosome has got to decides which pairing forms. **The measuring device is the ribosome's own position on the message.**",
      cn: "前导序列编码一条短短的**前导肽**，一个核糖体就紧跟在仍在转录的 RNA 聚合酶后面翻译它。前导 RNA 上有四个区段，编号 1 到 4，它们能以两种互斥的方式互相配对——**2 与 3** 配，或者 **3 与 4** 配——而核糖体走到了哪里，决定形成的是哪一种。**这里的测量装置，就是核糖体自己在信息上的位置。**",
      src: "§4.2.4, p.105, Obr. 4.49"
    },
    {
      link_en: "case one: plenty of tryptophan",
      link_cn: "情形一：色氨酸充足",
      en: "With tryptophan abundant the ribosome moves smoothly and comes to rest over region 2, physically preventing hairpin 2-3 from forming. Hairpin 3-4 forms instead, and hairpin 3-4 is a transcription terminator, so transcription stops. **The cell already has tryptophan, so it stops making the enzymes that make more — and it stops after 162 nucleotides rather than after the whole operon.**",
      cn: "色氨酸充足时，核糖体走得顺畅，最后停在**区段 2** 上，从物理上阻止**发夹 2-3** 形成。于是形成的是**发夹 3-4**，而发夹 3-4 是一个**转录终止子**，转录随之停止。**细胞已经有色氨酸了，就不再造那些用来造更多色氨酸的酶——而且它是在 162 个核苷酸之后停下，而不是在整个操纵子之后。**",
      src: "§4.2.4, p.105, Obr. 4.49"
    },
    {
      link_en: "case two: tryptophan running out",
      link_cn: "情形二：色氨酸不够用了",
      recall_en: "the hairpin terminator of transcription, a G+C-rich stem followed by a U-rich tail",
      recall_cn: "转录的发夹式终止子：富含 G+C 的茎，后面跟一串 U",
      en: "The leader peptide contains a tandem pair of tryptophan codons. When tryptophan is scarce there is not enough tryptophanyl-tRNA to read them, so the ribosome stalls in region 1. Region 2 is now free to pair with region 3, and hairpin 2-3 is an antiterminator: it uses up region 3 so that hairpin 3-4 cannot form. RNA polymerase reads straight through a terminator that no longer exists and transcribes the structural genes. **The cell measures how much tryptophan it has by whether its own ribosome can get past two tryptophan codons — a direct reading of charged tRNA supply, with no sensor protein anywhere in the system.**",
      cn: "前导肽里含有**连续两个色氨酸密码子**。色氨酸稀缺时，能读它们的**色氨酰-tRNA** 不够，核糖体就卡在**区段 1**。这时区段 2 空出来，与区段 3 配对，而**发夹 2-3** 是一个**抗终止子**：它把区段 3 用掉了，发夹 3-4 就无从形成。RNA 聚合酶直接通读过一个已经不存在的终止子，把结构基因转录下去。**细胞衡量自己有多少色氨酸，靠的是「自己的核糖体能不能越过两个色氨酸密码子」——这是对荷载 tRNA 供应量的直接读数，整套系统里没有任何一个传感蛋白。**",
      src: "§4.2.4, p.105, Obr. 4.49"
    },
    {
      link_en: "and the whole arrangement rests on one fact about bacteria",
      link_cn: "而整套安排都建立在关于细菌的一个事实上",
      en: "Attenuation requires a ribosome to be translating a message while RNA polymerase is still making it. **That is possible in a bacterium because there is no nuclear membrane between the two: transcription and translation happen in the same compartment at the same time, on the same molecule — which is exactly what a eukaryote cannot do.**",
      cn: "衰减作用要求：RNA 聚合酶还在合成这条信息的时候，就已经有一个核糖体在翻译它。**在细菌里这做得到，因为两者之间没有核膜：转录与翻译在同一个隔室、同一时刻、同一个分子上进行——而这恰恰是真核细胞做不到的。**",
      src: "§4.2.4, p.105, Obr. 4.49",
      see: [{ id: "4-2-4-2", en: "how a eukaryote regulates instead, with the nucleus in the way", cn: "隔着一个细胞核，真核生物改用什么办法调节" }]
    }
  ],
  terms: [
    { en: "operon", cn: "操纵子",
      def_en: "A group of genes encoding one set of proteins together with the promoter and operator that control their joint transcription.",
      def_cn: "编码同一套蛋白质的一组基因，连同控制它们共同转录的启动子与操纵基因。" },
    { en: "repressor", cn: "阻遏物",
      def_en: "The diffusible negative regulatory protein made by a regulator gene; bound to the operator it blocks transcription, and an inducer takes it off.",
      def_cn: "由调节基因产生的可扩散负调节蛋白；结合在操纵基因上时阻断转录，诱导物则把它拿下来。" },
    { en: "inducer", cn: "诱导物",
      def_en: "A small positive effector, often the enzyme's own substrate or a derivative, that binds the repressor and stops it binding DNA.",
      def_cn: "一种小分子正效应物，常常就是该酶自己的底物或其衍生物；它结合阻遏物，使之无法再结合 DNA。" },
    { en: "operator", cn: "操纵基因",
      def_en: "The almost palindromic DNA site the repressor binds; in the lactose system the primary one overlaps the promoter, with two pseudo-operators inside lacZ.",
      def_cn: "阻遏物所结合的、近乎回文的 DNA 位点；在乳糖系统里主位点与启动子重叠，另有两个假操纵位点位于 lacZ 内部。" },
    { en: "abortive initiation", cn: "流产性起始",
      def_en: "The RNA polymerase holoenzyme repeatedly making and dropping RNA pieces of up to 9 nucleotides at a promoter, until sigma is released and elongation gets going.",
      def_cn: "RNA 聚合酶全酶在启动子处反复合成又放掉不超过 9 个核苷酸的 RNA 小片段，直到 σ 被释放、延伸真正开始。" },
    { en: "attenuator", cn: "衰减子",
      def_en: "A regulatory element near the end of the trp leader sequence at which transcription can be stopped after only the leader has been made.",
      def_cn: "位于 trp 前导序列末端附近的调节元件，转录可以在只造出前导序列之后就在此停止。" },
    { en: "attenuation", cn: "衰减作用",
      def_en: "Control of the trp operon by the position of a ribosome on the leader mRNA: a stalled ribosome lets an antiterminator hairpin form, a moving one lets a terminator hairpin form instead.",
      def_cn: "靠核糖体在前导 mRNA 上的位置来控制 trp 操纵子：核糖体卡住时形成抗终止子发夹，核糖体走得顺畅时则形成终止子发夹。" },
    { en: "leader peptide", cn: "前导肽",
      def_en: "The short peptide encoded by the trp leader sequence, containing a tandem pair of tryptophan codons; translating it is what reads out how much tryptophan the cell has.",
      def_cn: "由 trp 前导序列编码的短肽，其中含有连续两个色氨酸密码子；翻译它，正是把细胞里色氨酸的多少读出来的方式。" }
  ]
};

/* -------------------------------------------------------------------- 4-2-4-2 */
window.BIOLITE_SPINE["4-2-4-2"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "ATP", "amino acid",
            "polypeptide", "nucleotide", "mRNA", "rRNA", "ribosome", "hormone",
            "receptor", "cytoplasm", "nucleus", "membrane", "phosphorylation",
            "protein kinase", "cAMP", "histone", "ribose", "methylation",
            "transcription", "translation", "promoter", "RNA polymerase",
            "complementary", "base pairing", "operon", "repressor", "corepressor",
            "sedimentation coefficient", "molecular weight", "differentiation",
            "hnRNA", "exon", "intron", "splicing", "snRNA", "effector"],
  nodeTitle_en: "Regulation of protein synthesis (II): eukaryotic genes, the cap and splicing",
  nodeTitle_cn: "蛋白质合成的调节（二）：真核基因、帽子结构与剪接",
  title_en: "A eukaryotic transcript is unusable when it comes off the DNA, and every repair done to it afterwards is another place to control the cell's output",
  title_cn: "真核转录本刚从 DNA 上下来时是不能用的，而此后对它做的每一道加工，都是又一个控制细胞产出的地方",
  steps: [
    {
      en: "Positive regulation in general works like this: a regulatory protein binds the promoter gene and causes a conformational change in the neighbouring DNA, and that change makes it easier for the DNA to interact with RNA polymerase, which then travels along the strand making RNA by base complementarity. **The regulatory protein makes no RNA itself — it changes the shape of the DNA so that the polymerase engages more readily.**",
      cn: "正调节的一般做法是这样：一个调节蛋白结合到启动子基因上，使邻近的 DNA 发生**构象变化**，而这一变化使 DNA 更容易与 **RNA 聚合酶**相互作用；聚合酶随后沿着链前进，按碱基互补合成 RNA。**调节蛋白自己一点 RNA 也不造——它做的是改变 DNA 的形状，好让聚合酶更容易搭上去。**",
      src: "§4.2.4, p.105"
    },
    {
      link_en: "and in a multicellular eukaryote the bacterial picture stops applying",
      link_cn: "而在多细胞真核生物里，细菌那套图景就不再适用了",
      en: "Regulation of protein synthesis in multicellular eukaryotes departs from the operon scheme. Several proposals exist, none yet fully confirmed by experiment. One of them keeps a gene promoter, as in lower eukaryotes, but supposes that each eukaryotic gene carries several promoters an RNA polymerase can attach to, and that the regulatory proteins are non-histone proteins — chromosomal proteins other than the histones — which bind DNA and are themselves made from dedicated regulatory genes. **Several promoters on one gene would mean the same gene can be started in more than one way.**",
      cn: "多细胞真核生物中蛋白质合成的调节，偏离了操纵子那套方案。已有若干设想，但都还没有被实验充分证实。其中一个仍保留基因启动子（与低等真核生物一样），但认为每个真核基因带有**好几个**可供 RNA 聚合酶结合的启动子，而调节蛋白是**非组蛋白型蛋白质**——即组蛋白以外的染色体蛋白——它们结合 DNA，本身由专门的调节基因合成。**一个基因上有好几个启动子，就意味着同一个基因可以用不止一种方式被启动。**",
      src: "§4.2.4, pp.105-106",
      openQuestion_en: "How a multicellular eukaryote actually regulates its genes is not settled — the accounts here are proposals, not confirmed mechanism.",
      openQuestion_cn: "多细胞真核生物到底怎样调控自己的基因，并无定论——这里说的都是设想，不是已被证实的机制。",
      see: [{ id: "L-28-3-1", en: "what has since been established about eukaryotic regulation", cn: "此后在真核基因调控上已经确立的内容" }]
    },
    {
      link_en: "and the enzyme itself is a second place to regulate",
      link_cn: "而酶本身是第二个可以调节的地方",
      recall_en: "the three eukaryotic RNA polymerases, I, II and III, each with its own class of product",
      recall_cn: "三种真核 RNA 聚合酶 I、II、III，各自负责一类产物",
      en: "Several RNA polymerases exist and they differ in their affinity for different promoters. **Some structural genes are therefore transcribed preferentially over others, so which polymerases a cell has available is itself a way of deciding what gets made.**",
      cn: "细胞里存在**多种 RNA 聚合酶**，它们对不同启动子的**亲和力**不同。**于是某些结构基因会被优先转录——所以「细胞手头有哪些聚合酶」本身就是决定造什么的一种方式。**",
      src: "§4.2.4, p.106"
    },
    {
      link_en: "and eukaryotic genes are built differently from bacterial ones",
      link_cn: "而真核基因的构造与细菌基因不同",
      en: "In most eukaryotic genes the coding sequences, the exons, alternate with non-coding stretches, the introns. The primary transcript of such a gene is heterogeneous nuclear RNA, hnRNA, and it is much longer than the mature mRNA. **A eukaryotic transcript is not usable as it comes off the DNA, and everything below is what has to be done to it before it is.**",
      cn: "大多数真核基因中，编码序列（**外显子**）与非编码片段（**内含子**）交替排列。这类基因的初级转录本是**核内不均一 RNA（hnRNA）**，它比成熟的 mRNA 长得多。**真核转录本刚从 DNA 上下来时是不能用的；下面要讲的，全都是让它变得能用之前必须对它做的事。**",
      src: "§4.2.4, p.106"
    },
    {
      link_en: "first modification, at the front end",
      link_cn: "第一道加工，在前端",
      en: "A eukaryotic mRNA carries a cap at its 5' end, put on by enzymes: a 7-methylguanosine residue joined to the transcript's first nucleotide through an unusual 5'-5' triphosphate bridge. **Because the bridge runs 5' to 5', the end of the molecule no longer looks like an end at all.** The cap is called cap-0 if nothing further is done, cap-1 if the ribose of the leading nucleoside is also methylated at its 2'-OH, which is typical of multicellular organisms, and cap-2 if the first two nucleotides are methylated that way.",
      cn: "真核 mRNA 的 5′ 端带一个**帽子**，由酶装上去：一个 **7-甲基鸟苷**残基，通过一种不寻常的 **5′-5′ 三磷酸桥**连到转录本的第一个核苷酸上。**由于这座桥是 5′ 接 5′，这个分子末端看上去已经不像一个末端了。** 若不再进一步修饰，称为 **cap-0**；若前导核苷的核糖 2′-OH 也被甲基化（多细胞生物中常见），称为 **cap-1**；若前两个核苷酸都这样被甲基化，则称为 **cap-2**。",
      src: "§4.2.4, p.106, Obr. 4.50"
    },
    {
      link_en: "and the cap earns its keep three times over",
      link_cn: "而这个帽子一物三用",
      en: "The cap lets a ribosome recognise the message. A short untranslated region immediately after it allows base-pairing between the mRNA and the 18S rRNA of eukaryotic ribosomes. And the cap region carries the start point of translation, in the roughly 12 nucleotides following the G⁵ppp, with a leader sequence still attached at this end. **A eukaryote has no Shine-Dalgarno pairing, so the cap is what tells the ribosome which end of the message to start from.**",
      cn: "帽子让核糖体能认出这条信息。紧随其后的一小段**不被翻译的区域**使 mRNA 与真核核糖体的 **18S rRNA** 之间得以碱基配对。而帽子区域本身携带**翻译起始点**，就在 G⁵ppp 之后大约 **12 个核苷酸**的范围内，这一端还连着一段前导序列。**真核生物没有 Shine-Dalgarno 配对，所以是帽子在告诉核糖体：该从信息的哪一端开始。**",
      src: "§4.2.4, p.106"
    },
    {
      link_en: "second modification, at the other end",
      link_cn: "第二道加工，在另一端",
      en: "Nearly every eukaryotic mRNA ends in a poly(A) tail of 20 to 250 adenine nucleotides, and it is added in two reactions. First the primary transcript is cleaved 15 to 25 nucleotides downstream of a highly conserved AAUAA pentanucleotide, near a less-conserved U-rich or GU-rich sequence; mutating that pentanucleotide blocks both the cleavage and the tail. Then poly(A) polymerase builds the tail out of ATP. **The tail is not transcribed from the DNA at all — it is written on afterwards by an enzyme that needs no template.** The DNA sequence complementary to AAUAA is called the termination signal.",
      cn: "几乎每条真核 mRNA 都以一条 **20 到 250 个腺嘌呤核苷酸**的 **poly(A) 尾**收尾，它由两步反应加上。先是初级转录本在一个高度保守的五核苷酸 **AAUAA** 下游 **15–25 个核苷酸**处被切开，附近还有一段保守性较低的富含 U 或 GU 的序列；把这个五核苷酸突变掉，切割和加尾都会被阻断。随后 **poly(A) 聚合酶**用 ATP 把尾巴造出来。**这条尾巴根本不是从 DNA 上转录来的——它是事后由一个不需要模板的酶写上去的。** 与 AAUAA 互补的那段 DNA 序列被称为**终止信号**。",
      src: "§4.2.4, pp.106-107"
    },
    {
      link_en: "third modification, and this one is in the middle",
      link_cn: "第三道加工，这一道在中间",
      en: "hnRNA is shortened step by step by ribonucleases, which excise the introns — the non-coding stretches, never translated — and rejoin the exons. This cutting and rejoining is splicing, and the sequence at each exon-intron junction is highly homologous across different eukaryotes. **Introns are transcribed along with the exons and removed only afterwards, which means the removing is a separate, controllable operation rather than something the DNA settles in advance.**",
      cn: "hnRNA 被**核糖核酸酶**一步步缩短：把**内含子**——那些从不被翻译的非编码片段——切除，再把外显子重新连起来。这一切一接的过程就是**剪接**，而每个外显子-内含子交界处的序列在不同真核生物之间高度同源。**内含子是和外显子一起被转录出来、事后才被去掉的；这意味着「去掉」是一道独立的、可被控制的工序，而不是 DNA 事先就定死的事。**",
      src: "§4.2.4, p.107"
    },
    {
      link_en: "one worked case, with the numbers",
      link_cn: "一个走完全程的例子，附带数字",
      en: "The chicken ovalbumin gene is 7,700 bp long, with introns 1 to 7 alternating with exons I to VII. It is transcribed into hnRNA; the primary transcript then gets its cap and its poly(A) tail, and only after that are the introns spliced out and the exons rejoined, giving a mature mRNA of 1,872 nucleotides. **Note the order — cap and tail first, splicing after — and note the size: nearly three quarters of what was transcribed is thrown away.**",
      cn: "鸡的**卵清蛋白基因**长 **7,700 bp**，内含子 1–7 与外显子 I–VII 交替排列。它先被转录成 hnRNA；初级转录本随后获得帽子和 poly(A) 尾，**再往后**内含子才被剪掉、外显子被重新连起来，得到长 **1,872 个核苷酸**的成熟 mRNA。**注意顺序——先加帽和尾，后剪接；也注意这个体量：转录出来的东西有近四分之三被丢掉了。**",
      src: "§4.2.4, p.107, Obr. 4.51"
    },
    {
      link_en: "and finding where to cut turns out to need very little sequence",
      link_cn: "而要找到该从哪里下刀，所需的序列信息其实极少",
      en: "A splice site is defined by an invariant GU at the intron's 5' edge and an equally invariant AG at its 3' edge, and those two are necessary and sufficient to define it. **The machinery never has to read the inside of an intron: two nucleotides at each boundary are the whole of the instruction, whatever lies between them.**",
      cn: "剪接位点由内含子 5′ 边缘不变的 **GU** 和 3′ 边缘同样不变的 **AG** 所定义，而这两处就是定义它的**必要且充分**条件。**这套机器根本不必去读内含子的内部：每个边界两个核苷酸就是全部指令，中间是什么都不影响。**",
      src: "§4.2.4, p.108"
    },
    {
      link_en: "and the machine that reads those boundaries has an unusual composition",
      link_cn: "而读取这些边界的那台机器，成分很不寻常",
      en: "Splicing is carried out by small nuclear ribonucleoproteins, snRNP, working inside particles of sedimentation coefficient 50 to 60S called spliceosomes, named from splicing. A spliceosome contains the pre-mRNA itself, snRNA, and various proteins bound to that pre-mRNA. **The substrate is part of the machine: the molecule being cut is a component of the particle doing the cutting.**",
      cn: "剪接由**小核核糖核蛋白（snRNP）**执行，它们工作于沉降系数 **50–60S** 的颗粒之中，这种颗粒叫**剪接体（spliceosome，得名于 splicing）**。一个剪接体里含有**前体 mRNA 本身**、snRNA，以及结合在该前体 mRNA 上的各种蛋白。**底物是机器的一部分：被切的那个分子，本身就是执行切割的那个颗粒的组件。**",
      src: "§4.2.4, p.108",
      see: [{ id: "L-26-2-1", en: "the two transesterifications a spliceosome actually performs", cn: "剪接体实际执行的那两次酯交换" }]
    },
    {
      link_en: "and control does not stop when the message is finished",
      link_cn: "而信息做好了，控制并没有停",
      en: "Getting the mature mRNA out of the nucleus is itself regulated, by selective transport into the cytoplasm. And a small fraction of hnRNA is now thought to escape normal processing and keep some of its introns; those retained stretches are then translated as part of the amino acid sequence, giving related proteins of higher molecular weight. **If that happens, a single gene can encode several different proteins — which is a different claim from one gene, one protein, and a much larger one.**",
      cn: "把成熟 mRNA 送出细胞核这件事本身也受调节，即向细胞质的**选择性转运**。此外，目前认为有一小部分 hnRNA 会逃过正常加工、保留下部分内含子；这些被留下的片段随后作为氨基酸序列的一部分被翻译，产生分子量更高的相关蛋白质。**果真如此，那么单个基因就能编码好几种不同的蛋白质——这与「一个基因一个蛋白」是截然不同、而且大得多的一个主张。**",
      src: "§4.2.4, p.108",
      openQuestion_en: "Whether retained introns really give a cell extra proteins is put as a consideration, not as an established fact.",
      openQuestion_cn: "被保留的内含子是否真的给细胞多带来几种蛋白质，这里是作为一种考虑提出的，并非既定事实。",
      see: [{ id: "L-26-2-1", en: "alternative splicing, the mechanism that does deliver several proteins from one gene", cn: "可变剪接 —— 真正能从一个基因产出多种蛋白的机制" }]
    },
    {
      link_en: "and the largest changes in what a cell makes are commanded from outside it",
      link_cn: "而一个细胞产出的最大变化，是由细胞外面下令的",
      en: "Changes in protein synthesis happen mostly during the development and differentiation of eukaryotic cells, usually affecting a whole set of enzymes at once, and they are regulated hormonally. A hormone can act like a corepressor, forming a repressor-hormone complex — a receptor bound to its hormone — which either acts directly on DNA, or acts by changing the activity of protein kinase, an enzyme that phosphorylates DNA-binding proteins which in turn influence transcription. Hormones also activate adenylate cyclase — a membrane-bound enzyme that synthesises cAMP — and cAMP then influences protein kinase much as the hormone itself does. **cAMP is the effector through which this layer works in most organisms, so one hormone outside a cell can redirect a whole programme of genes inside it.**",
      cn: "细胞产出什么，其改变大多发生在真核细胞的**发育与分化**过程中，通常一次影响一整套酶，而这些改变是由**激素**调节的。激素可以像**辅阻遏物**那样起作用，形成**阻遏物-激素复合物**——即结合了激素的受体——它或者直接作用于 DNA，或者通过改变**蛋白激酶**的活性起作用：蛋白激酶使那些结合 DNA、进而影响转录的蛋白发生磷酸化。激素还激活**腺苷酸环化酶**——一种膜结合酶，负责合成 **cAMP**——而 cAMP 对蛋白激酶的影响方式与激素本身相仿。**在大多数生物里，这一层正是通过 cAMP 这个效应物运作的；于是细胞外的一个激素，可以改写细胞内一整套基因的执行方案。**",
      src: "§4.2.4, p.108",
      see: [{ id: "L-28-3-1", en: "steroid receptors and the cAMP route, worked out in detail", cn: "类固醇受体与 cAMP 路线的详细机制" }]
    },
    {
      link_en: "and the same machinery reaches past the message into translation itself",
      link_cn: "而同一套机器还越过信息，一直伸进翻译本身",
      en: "Starting a polypeptide chain in a eukaryote is gated by a pair called the proinhibitor and the inhibitor of initiation. The inhibitor is itself a protein kinase, and this particular kinase is not regulated by cAMP. The proinhibitor is converted into the inhibitor by phosphorylation, and the enzyme that does that phosphorylation is a different protein kinase, one that is cAMP-dependent. **Regulation therefore does not end at deciding which mRNAs exist: a cell can hold a perfectly good message and still refuse to start reading it.**",
      cn: "在真核生物中，多肽链的起始由一对东西把关：**前抑制物**与**起始抑制物**。这个抑制物本身就是一种**蛋白激酶**，而这一种蛋白激酶**不**受 cAMP 调节。前抑制物经**磷酸化**转变为抑制物，而催化这次磷酸化的是**另一种**蛋白激酶，那一种**是**依赖 cAMP 的。**所以调节并不止于「决定哪些 mRNA 存在」：细胞可以手握一条完好无损的信息，仍然拒绝开始读它。**",
      src: "§4.2.4, p.108"
    }
  ],
  terms: [
    { en: "5' cap", cn: "帽子结构",
      def_en: "A 7-methylguanosine joined to a transcript's first nucleotide by an unusual 5'-5' triphosphate bridge; graded cap-0, cap-1 or cap-2 by how many riboses are also methylated at 2'-OH.",
      def_cn: "通过不寻常的 5′-5′ 三磷酸桥连到转录本第一个核苷酸上的 7-甲基鸟苷；按有几个核糖的 2′-OH 也被甲基化，分为 cap-0、cap-1、cap-2。" },
    { en: "poly(A) tail", cn: "poly(A) 尾",
      def_en: "20 to 250 adenine nucleotides written onto a transcript's 3' end by poly(A) polymerase, after cleavage 15-25 nucleotides past the conserved AAUAA sequence; no template is involved.",
      def_cn: "由 poly(A) 聚合酶写到转录本 3′ 端的 20–250 个腺嘌呤核苷酸；先在保守的 AAUAA 序列之后 15–25 个核苷酸处切开，全程不用模板。" },
    { en: "AAUAA", cn: "AAUAA",
      def_en: "The highly conserved pentanucleotide marking where a transcript is cut before its tail is added; mutate it and neither the cut nor the tail happens. Its DNA complement is the termination signal.",
      def_cn: "标出转录本在何处被切开、随后加尾的高度保守五核苷酸；把它突变掉，切割和加尾都不会发生。它在 DNA 上的互补序列就是终止信号。" },
    { en: "GU...AG rule", cn: "GU…AG 规则",
      def_en: "An invariant GU at an intron's 5' edge and an invariant AG at its 3' edge; those four bases are necessary and sufficient to mark a splice site, whatever lies between them.",
      def_cn: "内含子 5′ 边缘不变的 GU 与 3′ 边缘不变的 AG；无论中间是什么，这四个碱基就是标出剪接位点的必要且充分条件。" },
    { en: "spliceosome", cn: "剪接体",
      def_en: "A 50-60S particle of small nuclear ribonucleoproteins, snRNA, associated proteins and the pre-mRNA itself, which cuts introns out and joins exons up.",
      def_cn: "一个 50–60S 的颗粒，由小核核糖核蛋白、snRNA、相关蛋白以及前体 mRNA 本身组成，负责切除内含子、连接外显子。" },
    { en: "non-histone proteins", cn: "非组蛋白型蛋白质",
      def_en: "Chromosomal proteins other than the histones, proposed as the DNA-binding regulators of eukaryotic genes and themselves made from dedicated regulatory genes.",
      def_cn: "组蛋白以外的染色体蛋白，被设想为真核基因的 DNA 结合型调节者，本身由专门的调节基因合成。" },
    { en: "proinhibitor / inhibitor of initiation", cn: "前抑制物／起始抑制物",
      def_en: "A pair gating the start of a eukaryotic polypeptide chain: the inhibitor is a protein kinase not regulated by cAMP, made from the proinhibitor by phosphorylation from a separate, cAMP-dependent kinase.",
      def_cn: "把守真核多肽链起始的一对：抑制物是一种不受 cAMP 调节的蛋白激酶，由前抑制物经另一种依赖 cAMP 的激酶磷酸化而来。" }
  ]
};

/* -------------------------------------------------------------------- 4-3-1 */
window.BIOLITE_SPINE["4-3-1"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "ATP", "ADP", "amino acid",
            "peptide", "peptide bond", "polypeptide", "side chain", "proline",
            "cysteine", "ligand", "ribosome", "endoplasmic reticulum",
            "translation", "oxidation", "hydrolysis", "conformation",
            "beta turn", "disulfide bond", "sulfhydryl group", "tRNA",
            "prokaryote", "eukaryote", "aminoacyl-tRNA", "phosphate"],
  nodeTitle_en: "Folding the chain into its biologically active form",
  nodeTitle_cn: "把肽链折叠成有生物活性的形态",
  title_en: "The sequence is supposed to settle the shape, but for many proteins the working shape is not the cheapest one — so folding has to be steered",
  title_cn: "序列本该把形状定死，可对许多蛋白来说，能干活的那个形状并不是最省能量的那个 —— 所以折叠必须有人带路",
  steps: [
    {
      en: "Everything done to a chain after translation falls into three kinds of process. First, non-covalent interactions, which settle the spatial arrangement of the chain, make separate chains associate into one molecule, and let the protein bind ligands. Second, covalent modification of the backbone, used above all when a protein is being exported from the cell. Third, covalent modification of amino acid side chains. **Only the first of the three leaves the chain chemically unchanged — a folded protein and an unfolded one are the same molecule in different shapes.**",
      cn: "翻译之后对一条链所做的一切，可归为三类过程。第一类是**非共价相互作用**：它决定链的空间构象，使各条链缔合成一个分子，也让蛋白能结合配体。第二类是**骨架的共价修饰**，主要用在蛋白被运出细胞的时候。第三类是**氨基酸侧链的共价修饰**。**三者之中只有第一类不改变链的化学组成——折叠好的蛋白和没折叠的蛋白，是同一个分子的两种形状。**",
      src: "§4.3, p.108",
      see: [
        { id: "4-3-2", en: "the second kind: cutting the backbone, and getting a protein across a membrane", cn: "第二类：切开骨架，以及怎样把蛋白送过膜" },
        { id: "4-3-3", en: "the third kind: what is hung onto a side chain and why", cn: "第三类：往侧链上挂什么，以及为什么" }
      ]
    },
    {
      link_en: "and one timing rule holds across all three",
      link_cn: "而有一条时间上的规则贯穿这三类",
      en: "A side chain can already be modified while the amino acid is still sitting on its tRNA, in the aminoacyl-tRNA complex. **What never happens is modification before the aminoacyl-tRNA has formed — an amino acid must be charged onto its tRNA first, because the anticodon is what places it, and a modified free amino acid would have no way of getting into a chain at all.**",
      cn: "一个侧链可以在氨基酸还挂在它的 tRNA 上的时候——也就是在氨酰-tRNA 复合物里——就已经被修饰。**绝不会发生的是「在氨酰-tRNA 形成之前就修饰」——氨基酸必须先被装到自己的 tRNA 上，因为放它入位的是反密码子；一个被修饰过的游离氨基酸，根本没有办法进入肽链。**",
      src: "§4.3, p.108"
    },
    {
      link_en: "now the folding itself. The easy case first",
      link_cn: "现在说折叠本身。先说容易的情形",
      en: "The spatial arrangement of a chain is in principle determined by its amino acid sequence, and some proteins — mostly small ones, plus a few more complex ones — pass into their biologically active conformation spontaneously. **For those proteins the biologically active conformation and the lowest-energy conformation are the same thing, so the chain finds it by itself and nothing has to help.**",
      cn: "一条链的空间构象原则上由它的氨基酸序列决定，而有一部分蛋白——多数是小蛋白，外加少数较复杂的——会**自发**进入自己的生物活性构象。**对这些蛋白来说，生物活性构象和能量最低构象是同一个东西，所以链自己就能找到它，不需要任何帮忙。**",
      src: "§4.3.1, p.108"
    },
    {
      link_en: "and the hard case, which is the more common one",
      link_cn: "而困难的情形，也是更常见的情形",
      en: "For many other proteins the biologically active conformation and the energetically most favourable one are two different shapes. **A chain left to settle on its own would therefore end up in the wrong one, so the folding of a freshly synthesised — nascent — chain has to be a controlled, guided process.**",
      cn: "对许多其他蛋白而言，生物活性构象与能量上最有利的构象是**两个不同的形状**。**因此，任由一条链自己安顿下来，它会落到错的那一个上；所以刚合成出来的（新生的）链，其折叠必须是一个受控的、被引导的过程。**",
      src: "§4.3.1, pp.108-109"
    },
    {
      link_en: "and the price of getting it wrong is not abstract",
      link_cn: "而折错的代价并不抽象",
      en: "Several serious neurological diseases are caused by nothing more than incorrect arrangement of protein structures. **The chain is the right chain and the sequence is the right sequence; the shape alone is wrong, and that is enough to cause disease.**",
      cn: "有好几种严重的**神经系统疾病**，起因不过是蛋白质结构的排布出了错。**链是对的，序列也是对的；错的只有形状——而这就足以致病。**",
      src: "§4.3.1, p.109"
    },
    {
      link_en: "so who does the guiding?",
      link_cn: "那么，谁来带路？",
      en: "Specific proteins that catalyse the folding of a nascent chain into the form it needs are called chaperones, and they act during post-translational modification in the endoplasmic reticulum. **Hsp70 carrying ATP binds a nascent chain as it comes off the ribosome; releasing phosphate leaves a partially folded intermediate still held by the chaperone; and spending the ATP to ADP finally lets the native protein go.**",
      cn: "那些催化新生链折叠成所需形态的特异蛋白，叫做**分子伴侣（chaperone）**，它们在内质网中的翻译后修饰阶段起作用。**带着 ATP 的 Hsp70 在新生链刚离开核糖体时就抓住它；放出磷酸后，留下一个仍被分子伴侣握着的部分折叠中间体；最后把 ATP 花成 ADP，才把天然蛋白放走。**",
      src: "§4.3.1, p.109, Obr. 4.52a"
    },
    {
      link_en: "and a second system does it inside a closed container",
      link_cn: "还有第二套系统，是在一个封闭容器里做这件事",
      en: "A protein can instead enter GroEL, a barrel-shaped complex; ATP and the cap protein GroES then bind and complete a chaperonin complex, and folding takes place inside it. Releasing ADP, phosphate and GroES liberates the native protein. **An enclosed chamber lets a chain fold with nothing else around it — no other partly folded chain to stick to, which is what aggregation is.**",
      cn: "蛋白也可以改走另一条路：进入桶状复合物 **GroEL**；随后 ATP 与帽状蛋白 **GroES** 结合上来，凑成一个**伴侣素（chaperonin）**复合物，折叠就在它内部进行。放掉 ADP、磷酸和 GroES，天然蛋白就被释出。**一个封闭的腔室让链在四周空无一物的情况下折叠——身边没有别的半折叠的链可以粘上去，而粘上去正是「聚集」的意思。**",
      src: "§4.3.1, p.109, Obr. 4.52b"
    },
    {
      link_en: "and both classes are old, and do more than first-time folding",
      link_cn: "这两类都很古老，而且干的不只是「第一次折叠」",
      en: "Chaperones and chaperonins are evolutionarily conserved and are found in eukaryotic and prokaryotic cells alike. They recognise and stabilise partially folded structural intermediates, and they also take part in repairing chains that have folded incorrectly. **A cell can therefore rescue a misfolded protein rather than only destroying it, which is why the same machinery matters both during synthesis and long afterwards.**",
      cn: "分子伴侣与伴侣素在进化上是**保守**的，真核细胞和原核细胞里都有。它们识别并稳定**部分折叠的结构中间体**，也参与**修复**那些已经折错的链。**因此细胞可以把一个折错的蛋白救回来，而不是只能把它销毁——这也是同一套机器在合成当时和事后很久都同样要紧的原因。**",
      src: "§4.3.1, p.109"
    },
    {
      link_en: "even a folded chain is not finished, because one bond was made in the wrong geometry on purpose",
      link_cn: "就算折好了也还没完，因为有一种键当初是「故意」按错的几何做出来的",
      en: "Every X-Pro bond — the peptide bond before a proline, with X any residue — is first synthesised in the trans configuration. Yet about 6% of X-Pro bonds in native proteins are cis, most often inside β-turns. Peptidylprolyl-cis,trans-isomerases, PPIases, catalyse rotation around exactly that bond and are found from bacteria to mammalian cells. **The ribosome can only make one of the two geometries, so an enzyme has to go back afterwards and flip the particular bonds that need to be cis.**",
      cn: "每一根 **X-Pro 键**——即脯氨酸之前的那根肽键，X 为任意残基——合成时一律是**反式（trans）**。可是天然蛋白里约有 **6%** 的 X-Pro 键是**顺式（cis）**，最常见于 **β-转角**内部。**肽基脯氨酰顺反异构酶（PPIase）**专门催化绕这根键的旋转，从细菌到哺乳动物细胞都有它。**核糖体只会做两种几何中的一种，所以必须有一个酶事后回头，把那些该是顺式的键一根根翻过来。**",
      src: "§4.3.1, pp.109-110, Obr. 4.53"
    },
    {
      link_en: "and one more kind of bond has to be checked, because forming it correctly is not automatic",
      link_cn: "还有一类键必须检查，因为它形成得对不对并不自动",
      en: "Oxidising sulfhydryl groups into disulfide bonds contributes a great deal to stabilising the active form, but forming an S-S bond is not inherently specific — any two cysteines close enough will do it. So a chain that a chaperone has folded into a poorly folded intermediate still carries free SH groups and mispaired S-S bonds, and it is corrected in two further steps: protein-disulfide-isomerase exchanges disulfide bonds between pairs of cysteines until the pairing is right, and PPIase then converts the result to its native proline configuration. **Folding is finished by two proofreading enzymes, one for the disulfides and one for the proline bonds, working in that order.**",
      cn: "把巯基氧化成**二硫键**，对稳定活性形态贡献很大，但形成一根 S–S 键本身**没有特异性**——任何两个靠得够近的半胱氨酸都能成键。所以，被分子伴侣折成一个**折叠不良的中间体**的链，身上仍带着游离 SH 和配错的 S–S 键，还要再经两步校正：**蛋白质二硫键异构酶**在半胱氨酸对之间交换二硫键，直到配对正确；随后 **PPIase** 再把它转成天然的脯氨酸构型。**折叠是由两个校对酶收尾的：一个管二硫键，一个管脯氨酸前的肽键，而且顺序就是这个。**",
      src: "§4.3.1, p.110, Obr. 4.54",
      see: [{ id: "4-3-3", en: "disulfide bonds and the other side-chain modifications in full", cn: "二硫键以及其他侧链修饰的完整讲法" }]
    }
  ],
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
      def_en: "Peptidylprolyl-cis,trans-isomerase, which rotates the peptide bond before a proline; every such bond is made trans, and about 6% must end up cis, mostly in β-turns.",
      def_cn: "催化脯氨酸之前那根肽键旋转的酶；这类键合成时全是反式，而约 6% 最终必须是顺式，多在 β-转角里。" },
    { en: "protein-disulfide-isomerase", cn: "蛋白质二硫键异构酶",
      def_en: "The enzyme that exchanges disulfide bonds between pairs of cysteines until the pairing is the native one, because forming an S-S bond in the first place is not specific.",
      def_cn: "在半胱氨酸对之间交换二硫键、直到配对与天然状态一致的酶；之所以需要它，是因为 S–S 键的生成本身并无特异性。" }
  ]
};

/* -------------------------------------------------------------------- 4-3-2 */
window.BIOLITE_SPINE["4-3-2"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "amino acid", "peptide", "dipeptide",
            "polypeptide", "mRNA", "ribosome", "receptor", "membrane",
            "plasma membrane", "endoplasmic reticulum", "Golgi apparatus",
            "lysosome", "organelle", "hydrolysis", "hydrophobic", "beta sheet",
            "disulfide bond", "insulin", "trypsin", "carboxypeptidase",
            "initiation codon", "translation", "hormone", "blood plasma",
            "N-terminus", "C-terminus", "secretion", "signal peptidase"],
  nodeTitle_en: "Backbone modification and transport across a membrane",
  nodeTitle_cn: "骨架的修饰与蛋白质的跨膜转运",
  title_en: "A protein that has to leave the cell is deliberately made too long, because the extra piece is its address",
  title_cn: "要离开细胞的蛋白是被故意造长了的 —— 因为多出来的那一截就是它的地址",
  steps: [
    {
      en: "Proteins destined for secretion out of the cell, and probably lysosomal proteins too, are often synthesised first as larger molecules — preproteins, or preproproteins — and converted to the biologically active form later by partial hydrolysis, in which one or more peptide fragments are cut off the original chain. Blood plasma proteins are made this way. **The protein a cell releases is therefore shorter than the protein its ribosome made, and the difference is not waste: cutting is the last step of manufacture.**",
      cn: "注定要被分泌到细胞外的蛋白（很可能溶酶体蛋白也是），常常先以**更大的分子**被合成出来——叫**前体蛋白（preprotein）**或**前-前体蛋白（preproprotein）**——之后再经**部分水解**转成有生物活性的形态，其间会从原链上切下一段或几段肽。血浆蛋白就是这样造出来的。**因此细胞放出去的蛋白比它的核糖体造出来的那条短，而这个差额并不是浪费：切割正是制造的最后一道工序。**",
      src: "§4.3.2, p.110"
    },
    {
      link_en: "and the extra piece is at one particular end, for a reason",
      link_cn: "而多出来的那截长在特定的一端，这是有原因的",
      en: "A pre- or preproform carries a signal sequence of amino acids, encoded by signal codons that follow immediately after the initiation codon — the AUG at which reading begins — so the signal sequence sits at the N-terminus of the chain. **Being encoded first means it is translated first: the address exists and can be read while most of the protein has not been made yet.**",
      cn: "前体或前-前体形式带着一段氨基酸组成的**信号序列**，它由紧跟在**起始密码子**之后的信号密码子编码，因此信号序列位于链的 **N 端**。**「编码在最前面」意味着「最先被翻译出来」：在蛋白的大部分还没造出来的时候，这个地址就已经存在、并且可以被读取了。**",
      src: "§4.3.2, p.110"
    },
    {
      link_en: "and what it is read for",
      link_cn: "而它被读取，是为了什么",
      en: "According to signal theory the primary job of that sequence is to attach the ribosome to a receptor on the outer face of the endoplasmic reticulum. **The protein is not made and then delivered; the ribosome making it is delivered first, so synthesis and delivery happen at the same place.**",
      cn: "按照**信号假说**，这段序列的首要任务，是把**核糖体**接到**内质网**外表面的一个受体上。**并不是先把蛋白造好再送出去；而是先把正在造它的核糖体送过去——于是合成与投递发生在同一个地点。**",
      src: "§4.3.2, p.110"
    },
    {
      link_en: "and one particle does the escorting",
      link_cn: "而担任引路人的是一个颗粒",
      en: "The attachment is mediated by SRP, the signal recognition particle, a ribonucleoprotein that binds specifically to the signal sequence once it has been synthesised; a separate, specific SRP receptor on the ER membrane takes part in docking the ribosome. Once the ribosome has attached, SRP is released again and is free to bind another signal sequence. **SRP is recycled, so a small number of particles can serve a very large number of ribosomes.**",
      cn: "这次对接由 **SRP（信号识别颗粒）**介导——它是一种核糖核蛋白，特异性地结合已经被合成出来的信号序列；内质网膜上另有一个专门的 **SRP 受体**参与核糖体的对接。核糖体一旦接上，SRP 就被释放，可以去结合另一段信号序列。**SRP 是循环使用的，所以少量颗粒就能服务于数量极大的核糖体。**",
      src: "§4.3.2, pp.110-111, Obr. 4.55"
    },
    {
      link_en: "and the sequence itself is built of two chemically opposite halves",
      link_cn: "而这段序列本身，是由化学性质相反的两截拼成的",
      en: "A signal sequence carries predominantly hydrophobic amino acids in its middle part and charged amino acids at the end of the chain. **The charged end therefore stays outside the ER membrane while the hydrophobic middle buries itself in the nonpolar membrane — the two halves pull in opposite directions, and that mismatch is what fixes which way round the sequence goes into the membrane.**",
      cn: "信号序列的**中段**以疏水氨基酸为主，链的**末端**则是带电氨基酸。**于是带电的那一端留在内质网膜外，疏水的中段把自己埋进非极性的膜里——两截往相反方向拉，而正是这种「不匹配」定死了这段序列以哪个朝向插进膜里。**",
      src: "§4.3.2, p.111"
    },
    {
      link_en: "and burying that middle does something to the membrane",
      link_cn: "而把中段埋进去，会对膜做一件事",
      en: "The inserted hydrophobic middle forms a β-sheet with two neighbouring membrane proteins, ribophorin I and ribophorin II. That non-covalent interaction forces open a pore bounded by the ribophorins, and the rest of the growing chain threads through it into the ER. **The chain is pushed across the membrane while it is still being made, so it never has to fold up in the cytoplasm first and be unfolded again to fit through.**",
      cn: "插进去的疏水中段与相邻的两个膜蛋白——**核糖蛋白 I 与核糖蛋白 II（ribophorin）**——形成 **β-折叠**。这一非共价相互作用迫使一个由核糖蛋白围成的**孔道**打开，正在生长的链其余部分就从中穿进内质网。**这条链是一边合成、一边被推过膜的，所以它根本不必先在细胞质里折好、再被拆开才塞得进去。**",
      src: "§4.3.2, p.111, Obr. 4.55"
    },
    {
      link_en: "and the address is destroyed on arrival",
      link_cn: "而地址在抵达时就被销毁",
      en: "As soon as the end of the signal sequence appears inside the ER lumen, signal peptidase — an enzyme bound to the membrane — cleaves it off hydrolytically. **The preproprotein becomes a proprotein at that moment, and the protein loses its address the instant it no longer needs one.**",
      cn: "信号序列的末端一出现在内质网腔内，**信号肽酶**——一个结合在膜上的酶——立刻把它水解切除。**就在那一刻，前-前体蛋白变成了前体蛋白；蛋白在不再需要地址的那一瞬间，就把地址丢掉了。**",
      src: "§4.3.2, p.111"
    },
    {
      link_en: "and from the lumen it takes a fixed route out",
      link_cn: "从腔内出发，它走一条固定的路线出去",
      en: "The rest of the chain passes into the ER cisternae and is packed into microvesicles that bud off the ER and travel to the Golgi apparatus, where the protein may be modified further. In its final form it is released as secretory granules, which either travel to target organelles or fuse with the plasma membrane and release the protein into the extracellular space. **Fusing a vesicle with the plasma membrane puts its contents outside the cell without anything ever crossing a bilayer, which is why secretion needs no second pore.**",
      cn: "链的其余部分进入**内质网池腔**，被装进从内质网上出芽的**微囊泡**，运往**高尔基体**；蛋白在那里可能被进一步修饰。最终形态则以**分泌颗粒**的形式释出，这些颗粒或者运到目标细胞器，或者与**质膜**融合、把蛋白释放到细胞外。**囊泡与质膜融合，就把内容物送到了细胞外，而全程没有任何东西真正穿过一层双分子膜——这正是分泌不需要第二个孔道的原因。**",
      src: "§4.3.2, p.111"
    },
    {
      link_en: "and many proteins are cut twice, not once",
      link_cn: "而许多蛋白被切的不是一刀，是两刀",
      en: "Many proteins, especially secreted ones, undergo a two-step proteolytic modification, usually carried out in the Golgi apparatus: the signal sequence is released first, and selective proteolysis follows. **The two cuts do two different jobs — the first ends the delivery, the second creates the activity — so a protein can be finished, in place, and still inactive until the second cut is made.**",
      cn: "许多蛋白（尤其是分泌型的）要经历**两步**蛋白水解修饰，通常在高尔基体中进行：先释放信号序列，随后是**选择性蛋白水解**。**这两刀干的是两件不同的事——第一刀结束投递，第二刀创造活性——所以一个蛋白可以已经造完、已经就位，却在第二刀落下之前一直没有活性。**",
      src: "§4.3.2, p.111"
    },
    {
      link_en: "one worked example, and its own history is written into its structure",
      link_cn: "举一个走完全程的例子，而它自己的来历就写在它的结构里",
      en: "Insulin is originally synthesised as preproinsulin, with an N-terminal signal sequence of 23 amino acids. Removing that sequence gives proinsulin, and in proinsulin the finished A chain is the C-terminal part, the B chain is the N-terminal part, and the two are joined in the middle by the C-peptide. **Insulin's two chains start out as one continuous chain, which is how they came to be correctly aligned with each other in the first place.**",
      cn: "**胰岛素**最初以**前胰岛素原（preproinsulin）**的形式合成，N 端带一段 **23 个氨基酸**的信号序列。切掉这段序列得到**胰岛素原（proinsulin）**：在胰岛素原里，已经成形的 **A 链**是 C 端那一段，**B 链**是 N 端那一段，两者中间由 **C 肽**连着。**胰岛素的两条链原本是一条连续的链——它们当初之所以能彼此对得准，正是因为如此。**",
      src: "§4.3.2, p.111"
    },
    {
      link_en: "and the second cut is what makes it a hormone",
      link_cn: "而第二刀，才使它成为激素",
      recall_en: "protein-disulfide-isomerase getting the cysteine pairings right during folding",
      recall_cn: "折叠时由蛋白质二硫键异构酶把半胱氨酸的配对弄对",
      en: "Selective proteolysis then excises the C-peptide, and at least two enzymes do it: one with trypsin-like specificity cleaves the C-peptide out, and a carboxypeptidase removes the dipeptide of two basic amino acids by which the C-peptide was attached. What is left is active insulin. **Its A and B chains now have no backbone connecting them at all, so the only thing holding the hormone together is three disulfide bonds — which is why those bonds had to be paired correctly back when the single chain was still folding.**",
      cn: "随后**选择性蛋白水解**把 C 肽切出去，至少由两种酶完成：一种具**类胰蛋白酶特异性**的酶把 C 肽切下来，一种**羧肽酶**再把当初连接 C 肽的、由两个碱性氨基酸组成的**二肽**去掉。剩下的就是有活性的**胰岛素**。**此时它的 A 链与 B 链之间已经没有任何主链相连，把这个激素维系在一起的只有三根二硫键——这也正是当年那条单链还在折叠时，这几根键必须配对正确的原因。**",
      src: "§4.3.2, p.111",
      see: [
        { id: "4-3-1", en: "the isomerase that gets those pairings right", cn: "把这些配对弄对的那个异构酶" },
        { id: "L-23-3-1", en: "what insulin then does once it is released", cn: "胰岛素被放出去之后做什么" }
      ]
    }
  ],
  terms: [
    { en: "signal sequence", cn: "信号序列",
      def_en: "An N-terminal stretch of amino acids, hydrophobic in the middle and charged at its end, that sends a ribosome to the ER and is cut off once the chain has been threaded across.",
      def_cn: "N 端的一段氨基酸，中段疏水、末端带电，把核糖体送到内质网；链穿过去之后它就被切掉。" },
    { en: "SRP", cn: "信号识别颗粒",
      def_en: "The signal recognition particle, a ribonucleoprotein that binds a newly made signal sequence, docks the ribosome at its receptor on the ER membrane, and is then released for reuse.",
      def_cn: "一种核糖核蛋白，结合刚合成出的信号序列，把核糖体停靠到内质网膜上的受体处，随后被释放以便再用。" },
    { en: "ribophorin", cn: "核糖蛋白",
      def_en: "The ER membrane proteins, I and II, that pair with the signal sequence's hydrophobic core as a β-sheet and bound the pore the growing chain passes through.",
      def_cn: "内质网膜蛋白 I 与 II，与信号序列的疏水核心形成 β-折叠，并围出正在生长的链所穿过的那个孔道。" },
    { en: "preprotein / proprotein", cn: "前体蛋白／前-前体蛋白",
      def_en: "Successively shorter precursor forms of a secreted protein: cutting the signal sequence off gives one, and a second, selective cut gives the active protein.",
      def_cn: "分泌蛋白依次变短的前体形式：切掉信号序列得到一种，再来一次选择性切割才得到有活性的蛋白。" },
    { en: "C-peptide", cn: "C 肽",
      def_en: "The middle stretch of proinsulin joining the B chain to the A chain; excising it leaves the two chains held together only by disulfide bonds.",
      def_cn: "胰岛素原中把 B 链与 A 链连起来的中段；把它切掉之后，两条链就只靠二硫键维系在一起了。" },
    { en: "secretory granule", cn: "分泌颗粒",
      def_en: "The final Golgi-derived vesicle carrying a mature protein to a target organelle or to the plasma membrane, where fusion puts the contents outside the cell.",
      def_cn: "源自高尔基体的最终囊泡，把成熟蛋白送到目标细胞器或质膜；在质膜处融合，就把内容物送到了细胞外。" }
  ]
};

/* -------------------------------------------------------------------- 4-3-3 */
window.BIOLITE_SPINE["4-3-3"] = {
  assumed: ["DNA", "RNA", "protein", "enzyme", "amino acid", "peptide",
            "polypeptide", "side chain", "asparagine", "serine", "threonine",
            "tyrosine", "lysine", "arginine", "histidine", "glutamate",
            "aspartate", "proline", "cysteine", "collagen", "insulin",
            "endoplasmic reticulum", "Golgi apparatus", "lysosome", "membrane",
            "hydroxyl group", "carboxyl group", "amino group", "amide",
            "oxidation", "hydrolysis", "phosphate", "mannose", "galactose",
            "glucose", "sialic acid", "vitamin C", "vitamin K", "conformation",
            "disulfide bond", "sulfhydryl group", "glycoprotein", "hormone",
            "blood clotting", "chemotaxis", "sulfate", "ester"],
  nodeTitle_en: "Covalent modification of amino acid side chains",
  nodeTitle_cn: "氨基酸侧链的共价修饰",
  title_en: "Six ways to change a side chain, each changing what the protein is chemically able to do — and only the last one can be undone",
  title_cn: "改造侧链的六种办法，每一种都改变这个蛋白在化学上能做什么 —— 而只有最后一种可以撤销",
  steps: [
    {
      en: "The side chains of a nascent chain can be covalently modified in six ways: glycosylation, hydroxylation, carboxylation, oxidation of sulfhydryl groups to disulfide bonds, methylation, and phosphorylation together with sulfation. **Twenty amino acids are what a gene can specify; these six reactions are how a cell gets chemistry the genetic code cannot write.**",
      cn: "新生链上的侧链可以通过六种方式被共价修饰：**糖基化、羟基化、羧基化、巯基氧化成二硫键、甲基化，以及磷酸化连同硫酸化**。**基因能指定的只有二十种氨基酸；而这六个反应，正是细胞获得遗传密码写不出来的那些化学性质的办法。**",
      src: "§4.3.3, p.111"
    },
    {
      link_en: "the first, and one of the most significant",
      link_cn: "第一种，也是最重要的之一",
      en: "Glycosylation happens in the ER and the Golgi. A sugar is attached either by an N-glycosidic bond to the free amide group of asparagine, or by an O-glycosidic bond to the hydroxyl of threonine or serine. The enzymes are highly specific glycosyltransferases, and their substrate is always a sugar nucleotide. **A glycosyltransferase recognises not only which sugar it is carrying but the structure of the polypeptide it is to put it on, so the same enzyme will not decorate the wrong protein.**",
      cn: "**糖基化**发生在内质网与高尔基体中。糖或者通过 **N-糖苷键**接到**天冬酰胺**的游离酰胺基上，或者通过 **O-糖苷键**接到**苏氨酸**或**丝氨酸**的羟基上。催化的酶是高度特异的**糖基转移酶**，而它们的底物永远是一个**糖核苷酸**。**糖基转移酶识别的不只是自己带着哪种糖，还有它要接上去的那条多肽的结构——所以同一个酶不会去装点错误的蛋白。**",
      src: "§4.3.3, p.112"
    },
    {
      link_en: "and the sugar tree is not built on the protein at all, to begin with",
      link_cn: "而这棵糖树，一开始根本不是长在蛋白上的",
      en: "Glycosylation runs in two phases. In the first, UDP-N-acetyl-D-glucosamine binds a high-molecular-weight lipid carrier called dolichol phosphate, and a series of reactions builds an activated oligosaccharide core on it, Glc₃Man₉(GlcNAc)₂-P-P-Dol. **The core is assembled on a lipid anchored in the membrane, so a protein never has to wait while its sugar chain is put together one unit at a time.**",
      cn: "糖基化分两个阶段。第一阶段，**UDP-N-乙酰-D-葡糖胺**结合到一个高分子量脂质载体——**多萜醇磷酸（dolichol phosphate）**——上，经一连串反应在它上面搭出一个活化的**寡糖核心** Glc₃Man₉(GlcNAc)₂-P-P-Dol。**这个核心是在一个锚在膜上的脂质上装配起来的，所以蛋白不必干等着自己的糖链被一个单元一个单元地拼出来。**",
      src: "§4.3.3, p.112"
    },
    {
      link_en: "and then the whole thing is moved across in one go",
      link_cn: "然后整棵树一次性搬过去",
      en: "In the second phase the finished core is transferred en bloc onto the protein, in the membrane part of the ER, while the chain is still being synthesised, forming the N-glycosidic bond. The signal that marks an asparagine for it is the tripeptide sequence Asn-X-Ser, or Asn-X-Thr, where X is any amino acid except proline. **Three residues of sequence are the whole instruction for where a sugar chain goes, so a glycosylation site can be read straight off a protein's sequence.**",
      cn: "第二阶段，造好的核心**整块**转移到蛋白上——在内质网的膜结构部分，而肽链此时仍在合成中——形成 N-糖苷键。标记某个天冬酰胺接受它的信号，是三肽序列 **Asn-X-Ser** 或 **Asn-X-Thr**，其中 X 是**除脯氨酸以外**的任意氨基酸。**「糖链接在哪里」的全部指令就是三个残基，所以糖基化位点可以直接从蛋白序列上读出来。**",
      src: "§4.3.3, p.112"
    },
    {
      link_en: "and the chain is then cut back down and rebuilt in the Golgi",
      link_cn: "到了高尔基体，这条糖链又被剪回去、再重建",
      en: "In the Golgi the sugar chain is trimmed: glucosidases take the D-glucose residues off and mannosidases take off a variable number of D-mannose residues. Further glycosyltransferases then add three more sugars in turn — N-acetyl-D-glucosamine, D-galactose, and sialic acids as the terminal ones. **One standard core is built for every protein and then cut back by different amounts and rebuilt differently, which is how a single starting structure yields many different finished sugar chains.**",
      cn: "在高尔基体里，糖链被**修剪**：葡糖苷酶把 D-葡萄糖残基摘掉，甘露糖苷酶再摘掉数目不等的 D-甘露糖残基。随后其他糖基转移酶依次加上 **N-乙酰-D-葡糖胺、D-半乳糖**，以及作为末端糖的**唾液酸**。**每个蛋白先得到同一个标准核心，然后被剪掉不同的量、又按不同方式重建——一个共同的起始结构，就这样长出许多种不同的成品糖链。**",
      src: "§4.3.3, pp.112-113"
    },
    {
      link_en: "and one small change to that chain changes where the protein goes",
      link_cn: "而对这条糖链的一处小改动，会改变蛋白的去向",
      en: "Some D-mannose residues are instead phosphorylated at position 6, giving D-mannose-6-phosphate. **That single phosphate diverts the glycoprotein off the normal secretory route and into the lysosomes — one group on one sugar is the difference between a protein leaving the cell and a protein being delivered to its digestive compartment.**",
      cn: "有些 D-甘露糖残基则会在第 **6** 位被磷酸化，生成 **D-甘露糖-6-磷酸**。**就这一个磷酸，把这个糖蛋白从正常的分泌路线上拨开、送进溶酶体——一个糖上的一个基团，就是「蛋白离开细胞」与「蛋白被送进细胞的消化隔室」之间的全部差别。**",
      src: "§4.3.3, p.113",
      see: [{ id: "4-3-2", en: "the secretory route this one diverges from", cn: "它从中岔开的那条分泌路线" }]
    },
    {
      link_en: "second modification, and it is what holds a tendon together",
      link_cn: "第二种修饰，肌腱靠它维系",
      en: "Mammalian collagens commonly contain 4-hydroxyproline, 3-hydroxyproline and 5-hydroxylysine, made by three specific hydroxylases in the ER cisternae. The reaction needs oxygen, 2-oxoglutarate, L-ascorbic acid — vitamin C — and Fe²⁺; 2-oxoglutarate is decarboxylated as it goes, and one oxygen atom from the carboxyl it releases ends up in the new hydroxyl group. **A vitamin is therefore a hard requirement for a structural protein: without vitamin C the hydroxylases stop and collagen cannot be made properly.**",
      cn: "哺乳动物的**胶原蛋白**中常见 **4-羟脯氨酸、3-羟脯氨酸、5-羟赖氨酸**，由内质网池腔中三种特异的**羟化酶**生成。反应需要**氧、2-氧戊二酸、L-抗坏血酸（维生素 C）**以及 **Fe²⁺**；反应进行时 2-氧戊二酸发生脱羧，它放出的那个羧基上的一个氧原子最终进入新生成的羟基。**于是一种维生素成了一个结构蛋白的硬性前提：没有维生素 C，这些羟化酶就停摆，胶原蛋白造不成样子。**",
      src: "§4.3.3, p.113",
      beyond: true,
      beyondNote: "p.113 lists vitamin C among the requirements. That the disease of failing this reaction is scurvy is standard and is not named on this page."
    },
    {
      link_en: "third modification, and it was found by looking at blood that would not clot",
      link_cn: "第三种修饰，是从「血凝不起来」这件事上找出来的",
      en: "Carboxylation was first detected in the plasma glycoproteins involved in blood clotting. A carboxylase sitting on the inner wall of the ER membrane carboxylates glutamic acid residues to γ-carboxyglutamyl groups, so that side chain now carries two carboxyl groups instead of one, and this carboxylase strictly requires vitamin K. **Two carboxyl groups on one short side chain make a pincer that grips a positive ion, which is what a clotting factor needs and a plain glutamate cannot provide.**",
      cn: "**羧基化**最早是在参与**血液凝固**的血浆糖蛋白中被发现的。位于内质网膜内壁的一个**羧化酶**把谷氨酸残基羧基化，生成 **γ-羧基谷氨酰**基团，于是这条侧链带的就是**两个**羧基而不是一个；这个羧化酶严格需要**维生素 K**。**一条短侧链上有两个羧基，就成了一把能夹住正离子的钳子——这正是凝血因子所需要的，而普通的谷氨酸给不了。**",
      src: "§4.3.3, p.113",
      beyond: true,
      beyondNote: "p.113 gives the reaction, the vitamin K requirement and the clotting context. That the two carboxyls exist in order to chelate calcium is standard and is not spelled out on this page."
    },
    {
      link_en: "fourth modification, already met while folding",
      link_cn: "第四种修饰，在讲折叠时已经见过",
      recall_en: "the biologically active shape not being the lowest-energy one",
      recall_cn: "生物活性构象并不是能量最低的那个构象",
      en: "Oxidising the SH groups of an adjacent pair of cysteine residues to cystine forms a disulfide bond, and the effect is to fix the chain in a particular configuration that is not always the energetically optimal one. **A covalent bond is what lets a protein hold a shape it would otherwise fall out of.**",
      cn: "把相邻一对**半胱氨酸**残基的 SH 基团氧化成**胱氨酸**，就形成一根**二硫键**；其效果是把肽链**固定**在某一个特定构象里，而这个构象并不总是能量上最优的那个。**正是一根共价键，让蛋白能维持住一个它本来会滑出去的形状。**",
      src: "§4.3.3, p.113"
    },
    {
      link_en: "and the oxidant that does it is a small molecule kept on hand",
      link_cn: "而做这件事的氧化剂，是细胞常备的一个小分子",
      en: "In proinsulin the disulfide bonds between the two chains are formed by reaction with oxidised glutathione — the tripeptide γ-glutamylcysteinylglycine, carrying a reactive thiol on its cysteine. Hydrogen atoms from proinsulin's own thiol groups are transferred onto the disulfide of that oxidised glutathione. **Making a disulfide bond means taking hydrogens off two thiols, so something has to accept them, and a small tripeptide the cell keeps in stock is what does it.**",
      cn: "在**胰岛素原**中，两条链之间的二硫键是通过与**氧化型谷胱甘肽**反应而形成的——谷胱甘肽是三肽 **γ-谷氨酰-半胱氨酰-甘氨酸**，其半胱氨酸上带着一个活泼的巯基。胰岛素原自身巯基上的氢原子被转移到那个氧化型谷胱甘肽的二硫键上。**做出一根二硫键，意味着要从两个巯基上取走氢，所以必须有东西来接；接的就是细胞常备的这个小三肽。**",
      src: "§4.3.3, p.113"
    },
    {
      link_en: "and with more than two cysteines the bond can be made in the wrong place",
      link_cn: "而半胱氨酸一多于两个，这根键就可能做错地方",
      en: "In a protein with more than two cysteine residues, which cysteine pairs with which is essential to activity, and forming an S-S bond is not itself specific. **That is exactly why protein-disulfide-isomerase exists in the ER cisternae: it exchanges disulfide bonds between pairs of cysteines until the pairing is the native one.**",
      cn: "在含有**两个以上**半胱氨酸残基的蛋白里，哪个半胱氨酸与哪个配对，对活性至关重要，而生成一根 S–S 键本身并没有特异性。**这正是内质网池腔里存在蛋白质二硫键异构酶的原因：它在半胱氨酸对之间交换二硫键，直到配对与天然状态一致。**",
      src: "§4.3.3, p.113",
      see: [{ id: "4-3-1", en: "where that isomerase sits in the folding sequence", cn: "这个异构酶在折叠流程中的位置" }]
    },
    {
      link_en: "fifth modification, and it goes after charge",
      link_cn: "第五种修饰，它冲着电荷去",
      en: "Methylation targets charged side chains. The carboxyl groups of glutamate and aspartate are methylated to O-methylesters, giving for example 4-methylglutamate. The amino groups of lysine, arginine and histidine become mono-, di- or tri-N-methyl derivatives; for lysine the ε-amino group goes in turn to ε-N-methyllysine, ε-N-dimethyllysine and finally ε-N-trimethyllysine, whose nitrogen carries three methyl groups. **Every one of these reactions puts a methyl group where a charge or a hydrogen bond used to be, which is how a small addition changes what a side chain can touch.**",
      cn: "**甲基化**针对的是带电的侧链。**谷氨酸**和**天冬氨酸**的羧基被甲基化成 **O-甲酯**，例如生成 **4-甲基谷氨酸**。**赖氨酸、精氨酸、组氨酸**的氨基则变成带一个、两个或三个甲基的 **N-甲基衍生物**；以赖氨酸为例，其 ε-氨基依次变成 **ε-N-甲基赖氨酸、ε-N-二甲基赖氨酸**，最后是氮上带三个甲基的 **ε-N-三甲基赖氨酸**。**这些反应无一例外，都是把一个甲基放到原本是电荷或氢键的位置上——一个小小的添加，就这样改变了侧链能接触什么。**",
      src: "§4.3.3, pp.113-114, Obr. 4.56"
    },
    {
      link_en: "and what methylation is for, in two concrete cases",
      link_cn: "而甲基化有什么用，看两个具体例子",
      en: "Methylation regulates the bacterial proteins involved in chemotaxis, movement along a concentration gradient. And faulty methylation of sperm proteins is a relatively common cause of infertility. **One reaction on one kind of side chain reaches from how a bacterium steers itself to whether a human can conceive.**",
      cn: "甲基化调节参与**趋化性**——即沿浓度梯度运动——的细菌蛋白。而**精子蛋白**甲基化出错，是**不育症**一个相当常见的原因。**同一个反应、同一类侧链，一头管着细菌怎么给自己导航，另一头管着人能不能受孕。**",
      src: "§4.3.3, p.114"
    },
    {
      link_en: "sixth modification, and it is the one that matters most",
      link_cn: "第六种修饰，也是最要紧的那一种",
      en: "Phosphorylating the hydroxyl of serine or threonine, or the phenolic hydroxyl of tyrosine, gives phosphoserine, phosphothreonine and phosphotyrosine; phosphorylating lysyl, arginyl or histidyl groups is substantially less common. Phosphorylation and dephosphorylation together are probably the most important mechanism there is for controlling the biological activity of proteins, above all of enzymes and protein hormones. **In some proteins adding the phosphate switches the conformation to a more active one; in others it is removing the phosphate that raises activity — so the direction has to be learned protein by protein.**",
      cn: "把**丝氨酸**或**苏氨酸**的羟基、或**酪氨酸**的酚羟基磷酸化，得到**磷酸丝氨酸、磷酸苏氨酸、磷酸酪氨酸**；赖氨酰、精氨酰、组氨酰基团的磷酸化则少见得多。**磷酸化与去磷酸化**合在一起，很可能是控制蛋白质（尤其是酶和蛋白质激素）生物活性最重要的机制。**对有些蛋白，加上磷酸会把构象切换成活性更高的那一个；对另一些蛋白，反倒是把磷酸拿掉才提高活性——所以方向必须一个蛋白一个蛋白地记。**",
      src: "§4.3.3, p.114, Obr. 4.57",
      see: [{ id: "L-15-3-1", en: "a cascade built entirely out of adding and removing phosphates", cn: "一条完全由「加磷酸、去磷酸」搭成的级联" }]
    },
    {
      link_en: "and one property sets it apart from the other five",
      link_cn: "而有一条性质把它与另外五种区分开",
      recall_en: "glycosylation, hydroxylation, carboxylation, disulfide formation and methylation, all of which stay put",
      recall_cn: "糖基化、羟基化、羧基化、二硫键、甲基化 —— 这几种加上去就不动了",
      en: "A phosphate group can be taken off again by hydrolysis, and the protein returns to what it was. **The other five modifications are made once and stay, so they define what a protein is; phosphorylation is undone routinely, which is what makes it a switch rather than a finishing step.** A related reaction converts proteins to sulfoesters or amides — in gastrin, tyrosyl residues are esterified with sulfate.",
      cn: "一个磷酸基团可以再被水解掉，蛋白就回到原样。**另外五种修饰都是加上一次就留在那里，所以它们定义了这个蛋白「是什么」；而磷酸化是可以按常规撤销的——正因如此，它是一个开关，而不是一道收尾工序。** 与之相关的一个反应把蛋白转成**硫酸酯**或酰胺——例如在**胃泌素（gastrin）**中，酪氨酰残基被硫酸酯化。",
      src: "§4.3.3, p.114"
    }
  ],
  terms: [
    { en: "glycosyltransferase", cn: "糖基转移酶",
      def_en: "A highly specific ER and Golgi enzyme that moves a sugar from a sugar-nucleotide donor onto an oligosaccharide or a protein, recognising the target polypeptide's structure as well as the sugar.",
      def_cn: "内质网与高尔基体中高度特异的酶，把糖从糖核苷酸供体转到寡糖或蛋白上；它既认糖，也认目标多肽的结构。" },
    { en: "dolichol phosphate", cn: "多萜醇磷酸",
      def_en: "The high-molecular-weight lipid carrier on which the Glc₃Man₉(GlcNAc)₂ oligosaccharide core is built before being moved onto a protein in one piece.",
      def_cn: "高分子量的脂质载体，Glc₃Man₉(GlcNAc)₂ 寡糖核心先在它上面造好，再整块搬到蛋白上。" },
    { en: "Asn-X-Ser/Thr", cn: "Asn-X-Ser/Thr 序列",
      def_en: "The three-residue signal marking an asparagine for N-linked glycosylation, with X any amino acid except proline.",
      def_cn: "标记某个天冬酰胺接受 N-连接糖基化的三残基信号，其中 X 为除脯氨酸外的任意氨基酸。" },
    { en: "mannose-6-phosphate", cn: "甘露糖-6-磷酸",
      def_en: "A mannose of a glycoprotein's sugar chain phosphorylated at position 6; it sends that protein to the lysosome instead of out of the cell.",
      def_cn: "糖蛋白糖链上第 6 位被磷酸化的甘露糖；它把这个蛋白送进溶酶体，而不是送出细胞。" },
    { en: "γ-carboxyglutamate", cn: "γ-羧基谷氨酸",
      def_en: "A glutamate whose side chain has been given a second carboxyl group by a vitamin-K-dependent carboxylase; found in the plasma glycoproteins of blood clotting.",
      def_cn: "侧链被一个依赖维生素 K 的羧化酶加上第二个羧基的谷氨酸；见于参与血液凝固的血浆糖蛋白。" },
    { en: "glutathione", cn: "谷胱甘肽",
      def_en: "The tripeptide γ-glutamylcysteinylglycine; its oxidised form takes hydrogens off a protein's thiols and so lets a disulfide bond form.",
      def_cn: "三肽 γ-谷氨酰-半胱氨酰-甘氨酸；其氧化型从蛋白的巯基上取走氢，从而让二硫键得以形成。" },
    { en: "ε-N-trimethyllysine", cn: "ε-N-三甲基赖氨酸",
      def_en: "Lysine whose ε-amino nitrogen carries three methyl groups, the end of the series that runs mono- to di- to tri-methyl.",
      def_cn: "ε-氨基氮上带三个甲基的赖氨酸，是单甲基→二甲基→三甲基这一系列的终点。" },
    { en: "phosphoserine / phosphothreonine / phosphotyrosine", cn: "磷酸丝氨酸／磷酸苏氨酸／磷酸酪氨酸",
      def_en: "The phosphoesters of the three hydroxyl-bearing side chains; they are the chemical form in which the cell's main reversible activity switch is written.",
      def_cn: "三种带羟基侧链的磷酸酯；细胞主要的可逆活性开关，就是以这种化学形式写下来的。" }
  ]
};
