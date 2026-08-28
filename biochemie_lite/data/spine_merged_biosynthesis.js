/* Merged spines — biosynthesis. 速通简洁版, ONE spine per TOPIC.

   Two topics:

     key:nucleotide-metabolism     L-22-4-1 + 4-1-1-1, 4-1-1-2, 4-1-5   (48 steps in, 16 out)
     key:amino-acid-biosynthesis   L-22-2-1                             (15 steps in, 15 out)

   The merge rule: the Lehninger telling is the backbone. The other account is folded
   in only where it ADDS — a number, a name the exam uses, a worked case, a
   consequence the backbone does not draw. Where both say the same thing, the
   Lehninger sentence stands; where they disagree, the account carrying the evidence
   stands and the other is dropped rather than hedged. Every step keeps a `src`
   naming the pages it was read from, and a step built from both carries both,
   separated by a middle dot.

   `src` letters: "A" is Lehninger 8, cited by its own page and section numbers.
   "§4.x" is the second textbook, cited by the pages `tools/topics.json` carries.
   Lehninger chapters 22–26 are not extracted anywhere in this repository, so the
   per-node spines are the whole of the source; nothing here is added from memory.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* -------------------------------------------------------- 核苷酸代谢 ---- */
window.BIOLITE_SPINE["key:nucleotide-metabolism"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "cell", "nucleotide",
            "nucleoside", "base", "purine", "pyrimidine", "adenine", "guanine",
            "cytosine", "uracil", "thymine", "ribose", "pentose", "sugar",
            "phosphate", "pyrophosphate", "phosphodiester bond", "ester",
            "ATP", "ADP", "AMP", "GTP", "GDP", "GMP", "CTP", "UTP", "UMP",
            "NAD+", "NADH", "NADPH", "FAD", "amino acid", "glycine", "aspartate",
            "aspartic acid", "glutamine", "serine", "glutathione", "amino group",
            "hydroxyl group", "carbon dioxide", "ammonia", "urea", "urea cycle",
            "acetyl-CoA", "succinyl-CoA", "fumarate", "bicarbonate",
            "coenzyme", "cofactor", "biotin", "folate", "tetrahydrofolate",
            "kinase", "phosphatase", "hydrolase", "hydrolysis", "polymerase",
            "carboxylation", "decarboxylation", "equilibrium", "allosteric",
            "isoenzyme", "conformation", "half-life", "cytosol", "mitochondrion",
            "membrane", "liver", "kidney", "blood", "joint", "T lymphocyte",
            "cancer", "antibiotic", "vitamin", "gene therapy", "DNA replication",
            "DNA repair", "carbohydrate metabolism", "pH optimum", "oxygen",
            "iron-sulfur centre", "flavoenzyme", "molybdenum", "cysteine",
            "tyrosine", "aromatic residue", "solvent", "bacteria", "yeast"],
  nodeTitle_en: "Nucleotide metabolism",
  nodeTitle_cn: "核苷酸代谢",
  title_en: "Two rings built in opposite orders, one enzyme for every deoxyribonucleotide, and a breakdown route that stops at the least soluble molecule on it",
  title_cn: "两个环，建造顺序相反；每一个脱氧核糖核苷酸都出自同一个酶；而分解这条路，停在它自己最难溶的那个分子上",
  steps: [
    {
      en: "A cell obtains its nucleotides two ways. De novo pathways build them from ordinary precursors — amino acids, ribose 5-phosphate, CO2 and NH3 — and are nearly identical in every living organism; salvage pathways instead recycle the free bases and nucleosides released when nucleic acids are taken apart. **The free bases — adenine, guanine, cytosine, uracil and thymine — are intermediates of the salvage routes only, and never of the de novo routes.** One number frames the subject: cellular pools of every nucleotide except ATP are perhaps 1% or less of what building the cell's own DNA requires, so synthesis has to keep running throughout replication.",
      cn: "细胞获得核苷酸有两条路。从头合成途径（de novo）用普通前体来造 —— 氨基酸、核糖-5-磷酸、CO₂ 和 NH₃ —— 在所有生物里几乎一模一样；补救途径（salvage）回收核酸被拆开时释放出来的游离碱基和核苷。**游离碱基 —— 腺嘌呤、鸟嘌呤、胞嘧啶、尿嘧啶、胸腺嘧啶 —— 只是补救途径的中间物，从来不是从头合成途径的中间物。** 有一个数字给整个题目定框架：除 ATP 以外，细胞里各种核苷酸的库存大约只有「造完自己那份 DNA 所需量」的 1%，甚至更少，所以合成必须在整个复制期间一直跑着。",
      src: "A p.823–824, §22.4 · §4.1.1, p.67"
    },
    {
      link_en: "and the two de novo routes put the same two parts together in opposite orders",
      link_cn: "而两条从头合成路线，把同样两个部件按相反的顺序装起来",
      en: "PRPP — 5-phosphoribosyl-1-pyrophosphate, the activated ribose phosphate that both routes run on — is made from ribose 5-phosphate and ATP by ribose-phosphate diphosphokinase. **A purine ring is built atom by atom on PRPP already in place, so no free purine base ever exists; a pyrimidine ring is finished first and meets PRPP three steps from the end.** In both routes the ribose stays in the product, unlike tryptophan and histidine synthesis, where it is taken apart again.",
      cn: "PRPP —— 5-磷酸核糖-1-焦磷酸，两条路线共用的那个活化核糖磷酸 —— 由核糖-5-磷酸加 ATP、经核糖磷酸二磷酸激酶做成。**嘌呤环是一次几个原子、直接砌在已经就位的 PRPP 上的，所以这条路上从不存在游离的嘌呤碱基；嘧啶环则先造完，一直到倒数第三步才与 PRPP 相遇。** 两条路里核糖都留在产物中，这一点与色氨酸和组氨酸的合成不同 —— 那里的核糖会被重新拆掉。",
      src: "A p.823, p.828 · §4.1.1.1, p.68"
    },
    {
      link_en: "and which atom came from where is an experimental result rather than a list to memorise",
      link_cn: "而「哪个原子来自哪里」是一个实验结果，不是一张要背的清单",
      en: "John Buchanan fed birds precursors labelled with carbon-14 and nitrogen-15, choosing birds because they conveniently excrete surplus nitrogen as uric acid — which is a purine, so the labelled skeleton comes back out of the animal in collectable form. What the labels showed: aspartate gives N-1; glycine gives N-7 and two carbons, entering as one intact unit; the amide nitrogen of glutamine gives N-3 and N-9; two carbons arrive as formate, carried in on N10-formyltetrahydrofolate; and the carbon that becomes C-6 arrives as bicarbonate. **Four ring nitrogens come from three donors with glutamine counted twice, and each de novo route has one signature amino acid: glycine for purines, aspartate for pyrimidines.**",
      cn: "John Buchanan 用 ¹⁴C 和 ¹⁵N 标记的前体喂鸟 —— 之所以选鸟，是因为鸟正好把多余的氮以尿酸的形式排出，而尿酸本身就是一个嘌呤，于是被标记的骨架能以可收集的形式从动物体内出来。标记结果是：天冬氨酸给出 N-1；甘氨酸给出 N-7 和两个碳，作为一个完整单元整块进来；谷氨酰胺的酰胺氮给出 N-3 和 N-9；另有两个碳以甲酸的形式、由 N¹⁰-甲酰四氢叶酸带进来；成为 C-6 的那个碳则以碳酸氢根的形式加入。**环上四个氮来自三个供体，谷氨酰胺算两次；而两条从头合成路线各有一个特征氨基酸：嘌呤是甘氨酸，嘧啶是天冬氨酸。**",
      src: "A p.824–825, figure 22-34 · §4.1.1.1, p.68, Obr. 4.3",
      see: [{ id: "L-22-1-1", en: "where glutamine gets that amide nitrogen in the first place", cn: "谷氨酰胺的那个酰胺氮最初是从哪里来的" }]
    },
    {
      link_en: "the first committed step makes something that falls apart in half a minute",
      link_cn: "第一个承诺步骤造出来的东西，半分钟就散掉了",
      en: "Glutamine-PRPP amidotransferase attaches an amino group from glutamine to C-1 of PRPP, and that reaction is the committed step of purine synthesis: past it, the material has no destination but a purine nucleotide. Its product is 5-phosphoribosylamine, which has a half-life of 30 seconds at pH 7.5, and a multienzyme complex whose members hand intermediates directly to one another is called a metabolon. **An intermediate that short-lived cannot cross a cytosol looking for its next enzyme, so it must be handed straight over, and that is the main evidence for a metabolon here.** Single polypeptides carrying several of these activities at once support the same reading: in eukaryotes from yeast to fruit flies to chickens, one protein does three of the early steps.",
      cn: "谷氨酰胺-PRPP 酰胺转移酶把谷氨酰胺的一个氨基接到 PRPP 的 C-1 上，这个反应就是嘌呤合成的承诺步骤：过了它，这批物料除了变成嘌呤核苷酸再无别的去处。它的产物 5-磷酸核糖胺，在 pH 7.5 下半衰期只有 30 秒；而成员之间直接把中间物递来递去的多酶复合体，叫作 metabolon。**一个这么短命的中间体，不可能横穿胞质去找下一个酶，它必须被直接递过去 —— 这正是此处支持 metabolon 的主要证据。** 佐证是单条多肽常常同时带着好几种活性：从酵母到果蝇到鸡，一个蛋白就干完早期三步。",
      src: "A p.825 · §4.1.1.1, p.68, Obr. 4.3"
    },
    {
      link_en: "and two of the eleven reactions that follow are worth stopping on",
      link_cn: "接下来的十一步反应里，有两步值得停下来看",
      en: "Eleven enzyme-catalysed reactions run from ribose 5-phosphate to inosinate, IMP, the first intermediate carrying a complete purine ring. Two of them behave oddly. The carbon that becomes C-6 is added as bicarbonate, giving carboxyaminoimidazole ribonucleotide: **a carboxylation normally needs biotin to carry the carbon and ATP to pay for it, and this one needs neither, at the price of an unfavourable equilibrium** that exergonic reactions further down the route have to drag forward. And the smaller of the purine's two rings — a five-membered imidazole ring — costs one ATP to close, while the six-membered ring at the end costs none and loses only water.",
      cn: "从核糖-5-磷酸到次黄嘌呤核苷酸（IMP，第一个带有完整嘌呤环的中间物），共十一步酶促反应。其中两步很反常。成为 C-6 的那个碳以碳酸氢根的形式加进来，生成羧基氨基咪唑核苷酸：**代谢里的羧化反应通常需要生物素作碳载体、需要 ATP 付账，而这一步两样都不要 —— 代价是它的平衡不利，必须靠路线后段的放能反应把它拖着往前走。** 另外，合上五元的咪唑环要花一个 ATP，而最后合上六元环一分钱不花，只脱去一分子水。",
      src: "§4.1.1.1, p.69, Obr. 4.3 · A p.825"
    },
    {
      link_en: "IMP is where one road forks in two, and the fork pays for itself",
      link_cn: "IMP 是一条路分成两条的地方 —— 而这个岔口自己给自己出钱",
      recall_en: "aspartate donating a nitrogen and walking away as fumarate, as it did on the way to IMP",
      recall_cn: "天冬氨酸交出一个氮、以延胡索酸的形式走人 —— 通往 IMP 的路上已经这样干过一次",
      en: "Toward adenylate, aspartate donates an amino group through adenylosuccinate with fumarate eliminated, and the high-energy phosphate for that branch comes from GTP; toward guanylate, IMP is oxidised at C-2 in an NAD+-requiring step to xanthylate, and glutamine then donates an amino group with ATP cleaved all the way to AMP. **Each branch is paid for with the other branch's nucleotide, so a shortage of one slows production of the other and the two pools balance themselves with no dedicated sensor.** Three further controls sit on top of that one: glutamine-PRPP amidotransferase is inhibited by IMP, AMP and GMP, with AMP and GMP acting synergistically; excess GMP inhibits the enzyme oxidising IMP while excess adenylate inhibits only its own branch, so IMP accumulates and blocks the shared step only when both products are plentiful; and further upstream still, PRPP synthesis is inhibited by metabolites of the other pathways that also start from PRPP, so purine synthesis cannot drain a shared resource.",
      cn: "通向腺苷酸的那一支：天冬氨酸经腺苷酸代琥珀酸供出一个氨基，同时消去延胡索酸，而这一支的高能磷酸来自 GTP；通向鸟苷酸的那一支：IMP 在 C-2 位被一个需要 NAD⁺ 的步骤氧化成黄苷酸，随后谷氨酰胺供出一个氨基，代价是一个 ATP 被一路裂解到 AMP。**两支各自由对方的核苷酸出钱，于是任一种短缺都会放慢另一种的生产，两个库自己就平衡了，全程没有任何专门的传感器。** 在这之上还叠着三重控制：谷氨酰胺-PRPP 酰胺转移酶被 IMP、AMP、GMP 抑制，而 AMP 与 GMP 是协同的；GMP 过量时抑制氧化 IMP 的那个酶，腺苷酸过量时只抑制自己这一支，所以只有两个产物都充裕时 IMP 才积累起来去堵那个共用步骤；更靠上游，PRPP 自身的合成被那些同样以 PRPP 为起点的其他途径的代谢物抑制，于是嘌呤合成抽不干一份共用资源。",
      src: "A p.825–827 · §4.1.1.1, pp.69–70, Obr. 4.4"
    },
    {
      link_en: "the pyrimidine route opens with a molecule the body also uses to get rid of nitrogen",
      link_cn: "嘧啶路线的开场分子，身体同时还用它来处理掉多余的氮",
      recall_en: "carbamoyl phosphate opens the urea cycle as well — but not out of the same pool",
      recall_cn: "氨甲酰磷酸也是尿素循环的开场分子 —— 但不是同一个池子里的",
      en: "Carbamoyl phosphate is assembled from bicarbonate and the amide nitrogen of glutamine at a cost of two ATP, and it delivers a pyrimidine's first ring nitrogen together with the carbon that becomes C-2. **In an animal its two uses are kept completely apart: carbamoyl phosphate synthetase I is mitochondrial and feeds urea, while synthetase II is cytosolic and feeds pyrimidines.** A bacterium does not split the job, and its single enzyme is worth knowing for another reason: it has three separate active sites strung along a channel nearly 100 Å long — glutamine donates its nitrogen as ammonium at the first, the ammonium travels down the tunnel to meet bicarbonate at the second, and the carbamate that results re-enters the tunnel to be phosphorylated at the third. In eukaryotes the first three enzymes of this pathway are one trifunctional protein called CAD.",
      cn: "氨甲酰磷酸由碳酸氢根和谷氨酰胺的酰胺氮装配而成，代价是两个 ATP；它一次带进嘧啶环上的第一个氮，外加将来成为 C-2 的那个碳。**在动物体内，它的两种用途被彻底分开：氨甲酰磷酸合成酶 I 在线粒体里，供给尿素；合成酶 II 在胞质里，供给嘧啶。** 细菌不分这个家，而它那个一酶两用的酶值得记住另有理由：它有三个分开的活性位点，串在一条将近 100 Å 长的通道上 —— 谷氨酰胺在第一个位点以铵的形式供出氮，铵沿隧道走到第二个位点与碳酸氢根相遇，生成的氨甲酸再进入隧道，在第三个位点被磷酸化。在真核生物里，这条途径的头三个酶合为一条三功能蛋白，叫 CAD。",
      src: "A p.828–829 · §4.1.1.2, p.70, Obr. 4.5",
      see: [{ id: "L-18-2-1", en: "the urea cycle that the mitochondrial pool feeds", cn: "线粒体那一份供给的尿素循环" }]
    },
    {
      link_en: "the next enzyme carries the committed step, and the word committed is worth pinning down",
      link_cn: "下一个酶承担着承诺步骤 —— 而「承诺」这个词值得钉死",
      en: "Aspartate transcarbamoylase joins carbamoyl phosphate to aspartate, releasing inorganic phosphate, and that is the first committed step of pyrimidine synthesis. Committed is a claim about the shape of the metabolic map: past this point the material has nowhere else to go, whereas carbamoyl phosphate on its own could still have become urea. Rate-limiting would be a different claim — that this step is the slowest and sets the throughput — and it is not the claim being made. The enzyme has six catalytic and six regulatory subunits and exists in an active and an inactive conformation, with CTP binding the regulatory subunits and shifting it toward inactive. **0.8 mM CTP raises the aspartate K0.5 from about 12 to 23 mM and 0.6 mM ATP reverses it completely: CTP makes this enzyme harder to saturate, and it reads a purine-to-pyrimidine ratio.**",
      cn: "天冬氨酸转氨甲酰酶把氨甲酰磷酸接到天冬氨酸上，放出无机磷酸，这就是嘧啶合成的第一个承诺步骤（committed step）。「承诺」说的是代谢图的形状：过了这一点，物料再无别处可去；而氨甲酰磷酸本身仍然可能变成尿素。「限速」则是另一个说法 —— 指这一步最慢、决定整条途径的通量 —— 而这里并没有作出那个断言。这个酶有六个催化亚基和六个调节亚基，存在活性与非活性两种构象，CTP 结合到调节亚基上把它推向非活性。**0.8 mM 的 CTP 把天冬氨酸的 K₀.₅ 从约 12 mM 抬到约 23 mM，而 0.6 mM 的 ATP 能把这一效应完全逆转：CTP 让这个酶更难被饱和，而它真正读的是「嘌呤对嘧啶」的比值。**",
      src: "A p.828–829, figure 22-40 · §4.1.1.2, pp.70–71, Obr. 4.5"
    },
    {
      link_en: "and the ring is closed and finished before it ever meets a sugar",
      link_cn: "而这个环在见到糖之前就已经合上、造完了",
      recall_en: "the same two-step kinase lift that raises AMP and GMP to their triphosphates",
      recall_cn: "把 AMP 和 GMP 抬到三磷酸的，也是同样这两步激酶",
      en: "N-carbamoylaspartate closes its six-membered ring by an intramolecular condensation; the enzyme is dihydroorotase, which is a hydrolase, so this closure releases only water and spends no ATP. One dehydrogenation — two hydrogens removed, taking NAD+ to NADH — then gives orotate, a complete aromatic pyrimidine ring still carrying no sugar at all. Orotate reacts with PRPP, releasing pyrophosphate, to give orotidylate — the moment the finished ring meets the sugar phosphate — and orotidylate is decarboxylated to uridylate, UMP. Kinases raise UMP to UTP in two steps at a cost of two ATP, and cytidylate synthetase puts an amino group on C-4 of UTP to give CTP, taking that nitrogen from free ammonia in bacteria and from glutamine's amide in animals. **UMP, UTP and CTP are all made on this one line, so a single pathway supplies both of the pyrimidines that RNA needs.**",
      cn: "N-氨甲酰天冬氨酸经一次分子内缩合把六元环合上，做这件事的酶是二氢乳清酸酶，它属于水解酶，所以这次闭环只放出水、不花 ATP。再脱氢一次得到乳清酸 —— 一个完整的芳香嘧啶环，身上还完全没有糖。乳清酸与 PRPP 反应、放出焦磷酸，生成乳清苷酸，这正是造好的环与糖磷酸相遇的时刻；乳清苷酸再脱羧，得到尿苷酸 UMP。激酶分两步把 UMP 抬到 UTP，代价两个 ATP；胞苷酸合成酶随后在 UTP 的 C-4 上装一个氨基得到 CTP，这个氮在细菌里来自游离的氨，在动物里来自谷氨酰胺的酰胺基。**UMP、UTP、CTP 全在这一条线上造出来，所以 RNA 需要的两种嘧啶由同一条通路供给。**",
      src: "§4.1.1.2, p.71, Obr. 4.5 · A p.828"
    },
    {
      link_en: "everything so far has been ribonucleotides, and DNA needs the deoxy versions",
      link_cn: "到此为止造出来的全是核糖核苷酸，而 DNA 要的是脱氧版本",
      recall_en: "the hydroxyl at carbon 2 that ribose has and deoxyribose lacks — the one group separating the two sugars",
      recall_cn: "核糖有、脱氧核糖没有的那个第 2 位碳上的羟基 —— 两种糖之间唯一的差别",
      en: "Ribonucleotide reductase removes that hydroxyl, taking ADP to dADP and GDP to dGDP, and it works on the diphosphate — neither on the monophosphate nor on the triphosphate. The reduction happens at a carbon with no carbonyl and no acid group beside it, and no closely analogous chemical reaction is known. **Ordinary two-electron chemistry has nothing to grip here, so this enzyme works through a tyrosyl radical — the best-characterised case of free radicals doing biochemical work.** It is an α2β2 dimer: one pair of subunits carries the regulatory sites and two mechanistic cysteines, the other pair carries a critical Tyr122 and a two-iron centre that makes and stabilises the radical; the active sites lie at the interface, too far from the radical for it to act directly, so a chain of aromatic residues relays it across. Reducing equivalents come from NADPH either through thioredoxin, re-reduced by an FAD-carrying flavoenzyme, or through glutathione and glutaredoxin.",
      cn: "核糖核苷酸还原酶就是把那个羟基摘掉的酶：ADP 变 dADP，GDP 变 dGDP；它作用于二磷酸 —— 既不是单磷酸，也不是三磷酸。这次还原发生在一个旁边既没有羰基、也没有酸性基团的碳上，而已知化学反应里没有相近的类比。**普通的双电子化学在这里无处下手，所以这个酶改用一个酪氨酰自由基来干活 —— 它也是「自由基在生化反应中做功」被研究得最透的例子。** 它是 α₂β₂ 二聚体：一对亚基带着调节位点和两个参与机制的半胱氨酸，另一对带着关键的 Tyr122 和一个双铁中心，负责产生并稳定那个自由基；活性位点位于两类亚基的界面上，离自由基太远、够不着底物，于是一串芳香族残基把它接力送过去。还原力来自 NADPH，走两条路之一：经硫氧还蛋白（由一个带 FAD 的黄素酶重新还原），或者经谷胱甘肽与谷氧还蛋白。",
      src: "A p.829–831 · §4.1.1.2, p.72, Obr. 4.6",
      see: [{ id: "L-20-4-1", en: "thioredoxin doing the same redox job in a chloroplast", cn: "硫氧还蛋白在叶绿体里干同样的氧化还原活" }]
    },
    {
      link_en: "and one of its regulatory sites does something almost no other enzyme's does",
      link_cn: "而它的调节位点里有一个，做的事几乎没有别的酶会做",
      en: "Each catalytic subunit carries two kinds of regulatory site. A primary site sets overall activity: ATP bound activates, dATP bound inactivates. A substrate-specificity site changes which substrate the enzyme prefers rather than how fast it works — ATP or dATP favours reduction of UDP and CDP, dTTP switches it to GDP, dGTP switches it to ADP, and a high level of dATP stops it altogether, driving the active dimer at around 50 μM into ring-shaped assemblies whose radical relay is broken open to solvent. **One enzyme rotates through four jobs so no deoxynucleotide runs far ahead of the others, because unbalanced pools raise the error rate of DNA replication.**",
      cn: "每个催化亚基上带着两类调节位点。第一类决定总活性：结合 ATP 则激活，结合 dATP 则失活。第二类叫底物特异性位点，它改变的不是酶跑多快，而是酶偏好哪个底物 —— 结合 ATP 或 dATP 时偏好还原 UDP 和 CDP，结合 dTTP 时切换到 GDP，结合 dGTP 时切换到 ADP；而 dATP 浓度一高（约 50 μM）整个酶就停工，有活性的二聚体被驱动成环状聚集体，其中那条自由基接力通路被打断、暴露于溶剂。**于是同一个酶在四份工作之间轮转，好让任何一种脱氧核苷酸都不会跑得比别的远太多；这之所以要紧，是因为不平衡的核苷酸库会抬高 DNA 复制的出错率。**",
      src: "A p.831–832",
      see: [{ id: "L-25-1-1", en: "where replication's accuracy actually comes from", cn: "复制的精确度究竟从哪里来" }]
    },
    {
      link_en: "one nucleotide is still missing, and it is made only after the sugar has been reduced",
      link_cn: "还差一种核苷酸 —— 而它只有在糖已经被还原之后才被造出来",
      recall_en: "serine giving up one carbon to tetrahydrofolate is where these one-carbon units come from",
      recall_cn: "这些一碳单位的来源，是丝氨酸把一个碳交给四氢叶酸",
      en: "Thymine is never synthesised as a free base and never as a ribonucleotide; it appears only at the deoxy level, which is exactly what its role calls for. dUTPase converts dUTP to dUMP, and its real job is defensive: keeping dUTP pools low so that uracil is not put into DNA in the first place. Thymidylate synthase then transfers a one-carbon unit from N5,N10-methylenetetrahydrofolate onto dUMP and reduces it to a methyl group, paying for that reduction by oxidising tetrahydrofolate to dihydrofolate — unusual, since most reactions leave that cofactor at the same oxidation level. **A second enzyme is therefore obligatory: dihydrofolate reductase must regenerate tetrahydrofolate before the synthase can run again**, and serine hydroxymethyltransferase then restores the methylene form using serine.",
      cn: "胸腺嘧啶从不作为游离碱基被合成，也从不作为核糖核苷酸被合成；它只在脱氧这一层出现 —— 这恰好就是它的角色所要求的。dUTP 酶把 dUTP 变成 dUMP，它真正的职责是防御性的：把 dUTP 的库存压低，好让尿嘧啶一开始就进不了 DNA。胸苷酸合酶随后把一个一碳单位从 N⁵,N¹⁰-亚甲基四氢叶酸转到 dUMP 上，并把它还原成甲基；它为这次还原付的代价，是把四氢叶酸氧化成二氢叶酸 —— 这很不寻常，因为大多数反应都让这个辅因子停在原来的氧化态上。**于是第二个酶就是强制性的：二氢叶酸还原酶必须把四氢叶酸再生出来，随后丝氨酸羟甲基转移酶用丝氨酸把亚甲基形式补回去。**",
      src: "A p.833 · §4.1.1.2, p.71",
      see: [{ id: "L-22-2-1", en: "serine's pathway, which is the cell's main one-carbon supply line", cn: "丝氨酸那条途径 —— 细胞一碳单位的主要供应线" }]
    },
    {
      link_en: "and anything that blocks either of those two enzymes does its damage the same way",
      link_cn: "而堵住这两个酶中的任何一个，造成的损伤方式都一样",
      en: "About 10% of people, and up to 50% in impoverished communities, are folate-deficient. **Less thymidylate means uracil goes into DNA, repair enzymes excise it, and the strand breaks do the damage — so a vitamin deficiency and an anticancer drug make the same lesion.** That route runs from folate deficiency to heart disease, cancer, brain dysfunction and neural tube defects in pregnancy. The drugs work on the same two enzymes: fluorouracil inhibits nothing itself, but salvage pathways convert it inside the cell to FdUMP, which enters thymidylate synthase's normal mechanism and sticks when the hydride shift that would release product is blocked, so the enzyme is destroyed by carrying out its own reaction on the wrong substrate. Methotrexate competitively inhibits dihydrofolate reductase, which binds it about 100 times more tightly than its real substrate; trimethoprim binds the bacterial version of that enzyme nearly 100,000 times better than the mammalian one, which is what makes it an antibiotic rather than a poison. A cancer cell needs more nucleotides than a resting one, so the selectivity of fluorouracil and methotrexate comes from demand rather than from any target unique to cancer.",
      cn: "约 10% 的人口 —— 在贫困社区可高达 50% —— 处于叶酸缺乏状态。**胸苷酸一少，进入 DNA 的就是尿嘧啶而不是胸腺嘧啶，修复酶认出来把它切掉，真正造成损伤的是由此产生的链断裂 —— 所以一种维生素缺乏和一种抗癌药，造出的是同一种损伤。** 这条路从叶酸缺乏通向心脏病、癌症、脑功能障碍，以及孕期的神经管缺陷。药物打的正是这两个酶：氟尿嘧啶自己什么也不抑制，但补救途径在细胞内把它变成 FdUMP，FdUMP 进入胸苷酸合酶的正常反应机制，走到那个本该释放产物的氢负离子转移时被卡住 —— 这个酶是因为对着错误的底物照常干活而被毁掉的。甲氨蝶呤竞争性抑制二氢叶酸还原酶，该酶结合它的紧密程度约为结合真底物的 100 倍；甲氧苄啶结合细菌那一版同一个酶的能力，比结合哺乳动物版本强将近 100,000 倍，这正是它能当抗生素而不是当毒药的原因。癌细胞比静止细胞需要更多核苷酸，所以氟尿嘧啶和甲氨蝶呤的选择性来自需求量，而不是来自某个癌细胞独有的靶点。",
      src: "A p.833, p.835–838",
      see: [{ id: "L-8-3-1", en: "how a wrong base is found and cut out of an intact strand", cn: "一个错误碱基怎样在完好的链上被找到并切除" }]
    },
    {
      link_en: "now the other end of the subject: what takes a finished nucleic acid apart",
      link_cn: "现在换到题目的另一端：造好的核酸是被什么拆开的",
      recall_en: "the phosphodiester bond, one phosphate esterified to two sugars, is what is being cut",
      recall_cn: "被切的正是磷酸二酯键 —— 一个磷酸同时与两个糖成酯",
      en: "Nucleases do it, and three independent labels name any one of them: an exonuclease removes one terminal nucleotide at a time while an endonuclease cuts an ester bond somewhere inside the chain, so a cell that wants a molecule gone quickly starts with an endonuclease; a type a nuclease cuts between a sugar's 3'-OH and the phosphate and leaves nucleoside-5'-phosphates, while a type b nuclease cuts on the 5' side and leaves nucleoside-3'-phosphates; and a deoxyribonuclease acts on DNA, a ribonuclease on RNA. The third label is the one that names the substrate: depending on whether they cleave DNA or RNA, nucleases are called deoxyribonucleases or ribonucleases respectively. Nucleotidases, which are phosphatases existing in an alkaline form with a pH optimum of 7 to 8 and an acid form with a pH optimum of 5, then strip the phosphate to leave a nucleoside. Nucleosidase splits sugar from base by phosphorolysis — phosphate rather than water attacks that bond. **The attack is essentially the reverse of joining a base to PRPP, so the base comes out intact and can be put straight back into a nucleotide instead of being destroyed.** The pentose phosphate released is not degraded here at all; it is handed to carbohydrate metabolism, so half of every nucleic acid a cell breaks down leaves this subject entirely. The base half then splits in two by class, and pyrimidines take the tidier route: uracil gives β-alanine along with CO2, NH3 and water, thymine gives 3-aminobutyric acid, and their carbons finish as acetyl-CoA and succinyl-CoA, all of them small and soluble.",
      cn: "干这件事的是核酸酶，而任何一个核酸酶都由三个彼此独立的标签命名：外切核酸酶一次切掉一个末端核苷酸，内切核酸酶在链的内部切开一根酯键 —— 所以细胞想让一个分子迅速消失，会先动用内切核酸酶；a 型核酸酶切糖的 3′-OH 与磷酸之间那根键，产物是核苷-5′-磷酸，b 型切 5′ 那一侧，产物是核苷-3′-磷酸；作用于 DNA 的叫脱氧核糖核酸酶，作用于 RNA 的叫核糖核酸酶。第三个标签命名的是底物：根据它们切的是 DNA 还是 RNA，核酸酶相应地被称为脱氧核糖核酸酶或核糖核酸酶。核苷酸酶本质上是磷酸酶，有碱性形式（pH 最适 7–8）和酸性形式（pH 最适 5），它把磷酸摘掉、留下核苷。核苷酶则切断糖与碱基之间的键，方式是磷酸解，即由磷酸而不是水去进攻这根键。**这一进攻实质上就是「把碱基接到 PRPP 上」那一步的逆反应，所以碱基是完整地出来的，可以被直接装回核苷酸里，而不必被销毁。** 放出来的戊糖-磷酸在这里根本不被降解，它被交给糖代谢 —— 于是细胞每分解一份核酸，就有一半的物质彻底离开了这个题目。碱基那一半随后按类别再分岔，其中嘧啶走的是干净得多的一条：尿嘧啶生成 β-丙氨酸，连同 CO₂、NH₃ 和水；胸腺嘧啶生成 3-氨基丁酸；它们的碳最终成为乙酰-CoA 与琥珀酰-CoA —— 全都是又小又易溶的东西。",
      src: "§4.1.5, pp.91–92"
    },
    {
      link_en: "purines take the other route, and where it stops depends on which animal you are asking about",
      link_cn: "嘌呤走另一条 —— 而它停在哪里，取决于你问的是哪种动物",
      en: "5-Nucleotidase strips the phosphate, adenosine deaminase and hydrolysis give hypoxanthine, and xanthine oxidase — a flavoenzyme carrying one molybdenum atom and four iron-sulfur centres, using molecular oxygen as its electron acceptor — oxidises hypoxanthine to xanthine and then xanthine to uric acid, two consecutive steps, so inhibiting it once blocks the pathway twice. Guanylate converges on the same end, and a healthy adult excretes about 0.6 g of uric acid a day. **Most mammals degrade uric acid further, to allantoin, using urate oxidase; a human has none that works, so a human chain stops at its least soluble molecule — hence gout.** In excess, urate crystallises as sodium urate in joints — inflamed, painful, arthritic — and deposits in the kidney tubules, which makes gout an inflammation caused by a solubility limit rather than by a reaction going wrong. It occurs predominantly in males, its precise cause is not known, and it often involves under-excretion rather than overproduction, so the long-standing attribution to high living is described as erroneous. Allopurinol inhibits xanthine oxidase by an elegant route: it is a small alteration of that enzyme's own substrate, the enzyme converts it to oxypurinol, and oxypurinol then stays tightly bound in the reduced enzyme's active site and inactivates it, so the drug is activated by the target it destroys — and what then gets excreted is xanthine and hypoxanthine, which dissolve far better, an insoluble end product replaced by two soluble precursors.",
      cn: "5-核苷酸酶先把磷酸去掉，经腺苷脱氨酶和水解得到次黄嘌呤；黄嘌呤氧化酶 —— 一个黄素酶，辅基里带一个钼原子和四个铁硫中心，电子受体是分子氧 —— 把次黄嘌呤氧化成黄嘌呤、再把黄嘌呤氧化成尿酸，连着两步，所以抑制它一次等于把通路堵住两处。鸟苷酸最后也汇到同一个终点；一个健康成年人每天排出约 0.6 g 尿酸。**大多数哺乳动物带着尿酸氧化酶，会把尿酸继续降解成尿囊素；而人是灵长类，没有能工作的那个酶，所以人这条链停在它自己最难溶的分子上 —— 痛风就是从这里来的。** 尿酸一旦过量，就在关节里析出为尿酸钠晶体（关节发炎、疼痛、出现关节炎样改变），并沉积在肾小管里；所以痛风是由溶解度上限造成的炎症，而不是哪一步反应出了错。它以男性为主，确切成因不明，且常常涉及排泄不足而非生成过多，所以长期以来把它归因于「吃得太好」的说法被明确称为错误。别嘌醇抑制黄嘌呤氧化酶的路子很漂亮：它是该酶自身底物的一个小改动，酶把它转化成别黄嘌呤，别黄嘌呤随后牢牢卡在还原态酶的活性位点里不走，把酶废掉 —— 这个药是被它要摧毁的靶点亲手激活的；而此后排出去的东西变成黄嘌呤和次黄嘌呤，它们好溶得多，一个不溶的终产物就被换成了两个可溶的前体。",
      src: "A p.833–834, p.835–836 · §4.1.5, p.92"
    },
    {
      link_en: "and the free bases that were not excreted are recycled, where losing one enzyme produces a surplus rather than a shortage",
      link_cn: "而没被排掉的游离碱基会被回收 —— 在那里，丢掉一个酶造成的是过剩，不是短缺",
      recall_en: "free bases live only in the salvage half, as the first step of this spine said",
      recall_cn: "如本条主线第一步所说，游离碱基只活在补救这一半里",
      en: "Adenine phosphoribosyltransferase joins free adenine to PRPP, and hypoxanthine-guanine phosphoribosyltransferase does the same for guanine and hypoxanthine. A genetic lack of the second enzyme causes Lesch-Nyhan syndrome, seen almost exclusively in young boys and apparent around age 2: poor coordination, intellectual deficits, and compulsive self-destructive behaviour. **Unsalvaged bases go on to uric acid, and the PRPP that would have been spent on them piles up and drives de novo synthesis harder — so losing a recycling enzyme causes overproduction.** A neighbouring enzyme fails differently: adenosine deaminase deficiency raises cellular dATP a hundredfold, and dATP is the inhibitor that shuts ribonucleotide reductase down, so T lymphocytes end up starved of every other deoxynucleotide — a severe immunodeficiency, and one of the first targets of human gene therapy, in 1990.",
      cn: "腺嘌呤磷酸核糖转移酶把游离腺嘌呤接到 PRPP 上，次黄嘌呤-鸟嘌呤磷酸核糖转移酶（HGPRT）对鸟嘌呤和次黄嘌呤做同样的事。后一个酶的遗传性缺失导致 Lesch-Nyhan 综合征，几乎只见于男孩，约两岁时显现：协调能力差、智力缺陷，以及强迫性的自毁行为。**没被回收的碱基继续走向尿酸；同时本该被它们消耗掉的 PRPP 转而积累起来 —— PRPP 一升高就把从头合成推得更猛，所以丢掉一个回收酶造成的是嘌呤生产过剩。** 隔壁那个酶则以另一种方式出故障：腺苷脱氨酶缺乏使细胞内 dATP 升高一百倍，而 dATP 正是关停核糖核苷酸还原酶的那个抑制剂，于是 T 淋巴细胞缺乏其余每一种脱氧核苷酸 —— 这是一种严重免疫缺陷，也是 1990 年人类基因治疗最早的靶点之一。",
      src: "A p.834–835"
    }
  ],
  terms: [
    { en: "de novo and salvage pathways", cn: "从头合成途径与补救途径",
      def_en: "The two ways a cell obtains nucleotides. Building them from amino acids, ribose 5-phosphate, CO2 and NH3 is nearly identical in all organisms; recycling the free bases and nucleosides released when nucleic acids break down is the other way. Free bases are intermediates only of the recycling half, so degradation is what feeds it.",
      def_cn: "细胞获得核苷酸的两条路。用氨基酸、核糖-5-磷酸、CO₂ 和 NH₃ 从零造起，这条路在所有生物里几乎一样；另一条是回收核酸降解时释放的游离碱基与核苷。游离碱基只是回收那一半的中间物，所以分解正是回收的原料来源。" },
    { en: "PRPP", cn: "PRPP（5-磷酸核糖-1-焦磷酸）",
      def_en: "The activated ribose phosphate made from ribose 5-phosphate and ATP. Both de novo routes use it, at opposite ends of their assembly: the first committed step of purine synthesis acts on it, while it arrives three steps from the end of the pyrimidine route. A rising level of it drives de novo synthesis harder.",
      def_cn: "由核糖-5-磷酸加 ATP 做成的活化核糖磷酸。两条从头合成路线都用它，但进场位置相反：嘌呤合成的第一个承诺步骤作用的对象就是它，而在嘧啶路线里它要到倒数第三步才出现。它的水平升高会把从头合成推得更猛。" },
    { en: "metabolon", cn: "多酶复合体 metabolon",
      def_en: "A large multienzyme complex whose members hand intermediates directly to one another. The evidence for one in purine synthesis is that 5-phosphoribosylamine has a half-life of 30 seconds at pH 7.5 and could not survive a diffusion across the cytosol; single eukaryotic polypeptides carrying three of the early activities support the same reading.",
      def_cn: "成员之间直接把中间物递来递去的大型多酶复合体。嘌呤合成里支持它存在的证据是：5-磷酸核糖胺在 pH 7.5 下半衰期只有 30 秒，撑不过一次横穿胞质的扩散；真核生物里一条多肽同时带着早期三种活性，也指向同一个读法。" },
    { en: "committed step versus rate-limiting step", cn: "承诺步骤与限速步骤",
      def_en: "Two different claims that often coincide. Committed is about the shape of the metabolic map — past this point the material has no destination but this pathway's product. Rate-limiting is about speed — this reaction is the slowest and sets the throughput. Aspartate transcarbamoylase catalyses the first committed step of pyrimidine synthesis.",
      def_cn: "两个经常重合但并不相同的说法。「承诺」讲的是代谢图的形状 —— 过了这一点，物料只剩本通路的产物这一个去处；「限速」讲的是速度 —— 这一步最慢，决定整条通路的通量。天冬氨酸转氨甲酰酶催化的是嘧啶合成的第一个承诺步骤。" },
    { en: "aspartate transcarbamoylase", cn: "天冬氨酸转氨甲酰酶",
      def_en: "Six catalytic and six regulatory subunits, the whole molecule existing in an active and an inactive conformation. CTP bound to the regulatory subunits shifts it toward inactive and ATP prevents that shift, so it reads a purine-to-pyrimidine ratio rather than either nucleotide alone: 0.8 mM CTP raises the aspartate K0.5 from about 12 to about 23 mM, and 0.6 mM ATP reverses it completely.",
      def_cn: "六个催化亚基、六个调节亚基，整个分子存在活性与非活性两种构象。CTP 结合调节亚基把它推向非活性，ATP 阻止这一转变，所以它读的是「嘌呤对嘧啶」的比值而不是任何单一核苷酸：0.8 mM 的 CTP 把天冬氨酸的 K₀.₅ 从约 12 mM 抬到约 23 mM，0.6 mM 的 ATP 又能完全逆转。" },
    { en: "ribonucleotide reductase", cn: "核糖核苷酸还原酶",
      def_en: "The single enzyme that makes every deoxyribonucleotide, by reducing carbon 2 of a ribonucleoside diphosphate — a non-activated carbon with no close chemical analogue, which is why it works through a tyrosyl radical rather than ordinary two-electron chemistry. An α2β2 dimer whose active sites lie at the interface; reducing equivalents come from NADPH through thioredoxin or through glutathione and glutaredoxin.",
      def_cn: "细胞里每一个脱氧核糖核苷酸都出自这一个酶：它还原核糖核苷二磷酸的第 2 位碳 —— 那是一个未活化的碳，没有相近的化学类比，所以它靠一个酪氨酰自由基工作，而不是普通的双电子化学。它是 α₂β₂ 二聚体，活性位点位于界面上；还原力来自 NADPH，经硫氧还蛋白或经谷胱甘肽与谷氧还蛋白。" },
    { en: "the substrate-specificity site", cn: "底物特异性位点",
      def_en: "The second kind of regulatory site on each catalytic subunit of ribonucleotide reductase, which changes which ribonucleotide is reduced rather than how fast. ATP or dATP favours UDP and CDP; dTTP switches it to GDP; dGTP switches it to ADP; high dATP stops it altogether. The loop keeps the four deoxynucleotide pools balanced, because unbalanced pools raise the error rate of DNA replication.",
      def_cn: "核糖核苷酸还原酶每个催化亚基上的第二类调节位点，它改变的是「还原哪一种核糖核苷酸」，而不是「跑多快」。ATP 或 dATP 偏向 UDP 和 CDP；dTTP 切到 GDP；dGTP 切到 ADP；dATP 过高则整个停工。这个环路让四种脱氧核苷酸的库存保持平衡，因为不平衡的库会抬高 DNA 复制的出错率。" },
    { en: "thymidylate synthase and dihydrofolate reductase", cn: "胸苷酸合酶与二氢叶酸还原酶",
      def_en: "The only cellular route to thymine, and therefore a two-enzyme drug target. The synthase moves a one-carbon unit onto dUMP and reduces it to a methyl group, paying for that reduction by oxidising tetrahydrofolate to dihydrofolate, so the reductase must regenerate it. Block either one and thymidylate stops, uracil goes into DNA, repair excises it, and the strand breaks do the damage — which is also what folate deficiency does.",
      def_cn: "通向胸腺嘧啶的唯一细胞内路线，因此是一个「两个酶」的药靶。合酶把一个一碳单位转到 dUMP 上并还原成甲基，代价是把四氢叶酸氧化成二氢叶酸，于是还原酶必须把它再生出来。堵住其中任何一个，胸苷酸就断供，尿嘧啶进入 DNA，修复酶把它切掉，真正的损伤来自由此产生的链断裂 —— 叶酸缺乏造成的也是同一件事。" },
    { en: "why the chain stops at uric acid in a human", cn: "为什么这条链在人身上停在尿酸",
      def_en: "Urate is the excreted end product of purine breakdown in primates, birds, reptiles and insects. In most other mammals urate oxidase degrades it further to allantoin, and other animals continue to allantoate, urea and ammonium. A human is a primate with no working urate oxidase, so the chain stops at the least soluble molecule on it — which is why gout is a human disease.",
      def_cn: "在灵长类、鸟类、爬行类和昆虫身上，尿酸是嘌呤分解后排出的终产物。大多数其他哺乳动物有尿酸氧化酶，会把它继续降解成尿囊素，另一些动物还会继续走到尿囊酸、尿素和铵。人是灵长类，体内没有能工作的尿酸氧化酶，所以这条链停在它自己最难溶的那个分子上 —— 这正是痛风成为人类疾病的原因。" },
    { en: "the Lesch-Nyhan paradox", cn: "Lesch-Nyhan 的悖论",
      def_en: "Losing hypoxanthine-guanine phosphoribosyltransferase, a recycling enzyme, causes purine overproduction rather than shortage. The unsalvaged bases go on to uric acid, and the PRPP that would have been spent on them accumulates instead, driving the de novo pathway harder. The syndrome appears almost exclusively in young boys, around age 2, with poor coordination, intellectual deficits and compulsive self-destructive behaviour.",
      def_cn: "丢掉次黄嘌呤-鸟嘌呤磷酸核糖转移酶（一个回收酶），造成的是嘌呤生产过剩而不是短缺：没被回收的碱基走向尿酸，本该被它们消耗掉的 PRPP 转而积累，把从头合成推得更猛。该综合征几乎只见于男孩，约两岁时显现：协调差、智力缺陷、强迫性自毁行为。" },
    { en: "exonuclease / endonuclease / type a / type b", cn: "外切／内切核酸酶与 a 型／b 型",
      def_en: "Three independent labels naming any one nuclease. Taking off one terminal nucleotide at a time is the first kind; cleaving an ester bond at an internal position is the second, which is how a cell cuts a long molecule into many pieces at once. A type a cut falls between a sugar's 3'-OH and the phosphate and leaves nucleoside-5'-phosphates; a type b cut falls on the 5' side and leaves nucleoside-3'-phosphates.",
      def_cn: "任何一个核酸酶都由三个彼此独立的标签命名。一次切掉一个末端核苷酸是第一类；在链内部切断一根酯键是第二类，细胞正是靠它把一个长分子一次切成许多段。a 型的切口落在糖的 3′-OH 与磷酸之间，产物是核苷-5′-磷酸；b 型落在 5′ 一侧，产物是核苷-3′-磷酸。" }
  ]
};

/* --------------------------------------------------- 氨基酸的生物合成 ---- */
window.BIOLITE_SPINE["key:amino-acid-biosynthesis"] = {
  assumed: ["ATP", "ADP", "NADH", "NADPH", "NAD+", "enzyme", "protein", "gene",
            "cell", "allosteric", "isoenzyme", "active site", "substrate",
            "conformation", "transamination", "glycolysis", "citric acid cycle",
            "pentose phosphate pathway", "pyruvate", "oxaloacetate",
            "alpha-ketoglutarate", "3-phosphoglycerate", "phosphoenolpyruvate",
            "ribose 5-phosphate", "erythrose 4-phosphate", "amino acid",
            "glutamate", "glutamine", "serine", "glycine", "cysteine", "proline",
            "arginine", "ornithine", "citrulline", "urea cycle", "methionine",
            "threonine", "lysine", "isoleucine", "valine", "leucine", "alanine",
            "aspartate", "asparagine", "tryptophan", "phenylalanine", "tyrosine",
            "histidine", "S-adenosylmethionine", "homocysteine", "tetrahydrofolate",
            "folate", "PLP", "pyridoxal phosphate", "Schiff base", "sulfate",
            "sulfide", "sulfur", "nitrogen", "carbon skeleton", "amino group",
            "hydroxyl group", "carboxyl group", "acetyl group", "aromatic ring",
            "imidazole ring", "indole", "phosphatase", "hydroxylase", "lyase",
            "synthetase", "herbicide", "chemotherapy", "leukaemia", "lymphocyte",
            "blood", "serum", "liver", "vertebrate", "mammal", "bacteria",
            "E. coli", "PRPP", "purine", "nucleotide", "DNA", "RNA", "diet"],
  nodeTitle_en: "Amino acid biosynthesis",
  nodeTitle_cn: "氨基酸的生物合成",
  title_en: "Six on-ramps of very unequal length, why the long ones were lost, and what one lost pathway is worth as a drug target",
  title_cn: "六条长短悬殊的匝道、长的那些为什么被丢掉了，以及一条丢掉的途径作为药靶值多少钱",
  steps: [
    {
      en: "Amino acid biosynthesis runs as six unrelated on-ramps, each starting from a metabolite already familiar from glycolysis, the citric acid cycle or the pentose phosphate pathway, with the nitrogen entering through glutamate and glutamine. **How long each on-ramp is decides whether a mammal can build that amino acid at all, so the words essential and nonessential are really a statement about pathway length.**",
      cn: "氨基酸的生物合成是六条彼此无关的匝道；每条的起点都是糖酵解、柠檬酸循环或磷酸戊糖途径里已经熟悉的某个代谢物，而氮经谷氨酸和谷氨酰胺进入。**每条匝道有多长，决定了哺乳动物能不能造出对应的那个氨基酸 —— 也就是说，「必需」与「非必需」这两个词，说的其实是「途径有多长」。**",
      src: "A p.805–806, §22.2, table 22-1"
    },
    {
      link_en: "the six, named by where each one starts",
      link_cn: "这六条，按各自的起点命名",
      en: "α-Ketoglutarate gives glutamate, glutamine, proline and arginine. Pyruvate gives alanine, valine, leucine and isoleucine. 3-Phosphoglycerate gives serine, glycine and cysteine. Oxaloacetate gives aspartate and asparagine, and by longer routes methionine, threonine, lysine and isoleucine. Phosphoenolpyruvate together with erythrose 4-phosphate gives the three aromatic amino acids, which are phenylalanine, tyrosine and tryptophan. Ribose 5-phosphate gives histidine. **Ten of the twenty sit one or a few steps from their family's precursor while the aromatic three sit far from theirs, and that asymmetry is why all twenty cannot be treated alike.**",
      cn: "α-酮戊二酸给出谷氨酸、谷氨酰胺、脯氨酸、精氨酸。丙酮酸给出丙氨酸、缬氨酸、亮氨酸、异亮氨酸。3-磷酸甘油酸给出丝氨酸、甘氨酸、半胱氨酸。草酰乙酸给出天冬氨酸和天冬酰胺，并经更长的路线给出甲硫氨酸、苏氨酸、赖氨酸、异亮氨酸。磷酸烯醇式丙酮酸加赤藓糖-4-磷酸给出三种芳香族氨基酸，即苯丙氨酸、酪氨酸和色氨酸。核糖-5-磷酸给出组氨酸。**二十种里有十种离本家族的前体只有一步或几步，而三种芳香族离自己的前体极远 —— 正是这种不对称，使得二十种氨基酸没法被一视同仁地对待。**",
      src: "A p.806, table 22-1"
    },
    {
      link_en: "which turns a nutritional label into something you can derive",
      link_cn: "于是一个营养学标签变成了可以推出来的东西",
      en: "Plants and most bacteria synthesise all twenty; a mammal makes only about half, generally the ones with short pathways, and those are the ones called nonessential. **The label misleads in one specific way worth quoting: a pathway an animal is born with may still not supply enough of its product for optimal growth and health.** A few amino acids sit between the two categories and are called conditionally essential — needed at particular developmental stages, or non-essential only while some other supply holds up.",
      cn: "植物和大多数细菌能合成全部二十种；哺乳动物只造得出大约一半，一般正是途径短的那些 —— 这些就被叫作「非必需」。**这个标签在一个具体的地方会误导人，值得原样记住：一条动物天生就有的途径，仍然可能供不上「最佳生长与健康」所需的量。** 还有少数氨基酸夹在两类之间，叫条件必需 —— 只在特定发育阶段才需要，或者只在别的某项供应还撑得住时才算非必需。",
      src: "A p.805, p.816"
    },
    {
      link_en: "the shortest walk in this subject, and it hides a chemical hazard",
      link_cn: "本题里最短的一条路 —— 而它藏着一个化学上的隐患",
      en: "Proline is a cyclised glutamate, and the route is almost trivially short: ATP phosphorylates glutamate's γ-carboxyl, NADPH or NADH reduces it to glutamate γ-semialdehyde, that semialdehyde cyclises spontaneously with no enzyme at all, and one more reduction gives proline. **An intermediate that closes its own ring cannot be stopped from doing so, which becomes a problem the moment a cell wants to carry that same intermediate somewhere else.**",
      cn: "脯氨酸就是环化了的谷氨酸，路线短得近乎平凡：ATP 把谷氨酸的 γ-羧基磷酸化，NADPH 或 NADH 把它还原成谷氨酸-γ-半醛，这个半醛不需要任何酶就会自发环化，再还原一次就得到脯氨酸。**一个会自己关环的中间体，是没法叫它别关的 —— 而细胞一旦想把这同一个中间体带去别处，这就成了问题。**",
      src: "A p.806–807"
    },
    {
      link_en: "and the next pathway spends two extra steps doing nothing but preventing that",
      link_cn: "而下一条途径多花两步，干的事只有一件：阻止它关环",
      recall_en: "the spontaneous ring closure one step up is the thing being blocked",
      recall_cn: "上一步那个自发环化，正是这里要挡掉的东西",
      en: "In bacteria, arginine is built from the same glutamate γ-semialdehyde, so the pathway first acetylates glutamate's α-amino group, which blocks the ring closure, does its transamination, and then removes the acetyl group again to give ornithine. **Two of its steps add no atoms whatever to the product and exist purely to keep an intermediate from reacting with itself.** Ornithine then continues through citrulline and argininosuccinate to arginine, along steps that parallel the urea cycle. A mammal runs none of this: it obtains proline from arginine instead, using the urea cycle enzyme arginase, and when dietary arginine falls short the same intermediates are read in the opposite direction and feed the urea cycle back toward arginine.",
      cn: "在细菌里，精氨酸是从同一个谷氨酸-γ-半醛造起的，所以这条途径先把谷氨酸的 α-氨基乙酰化，把关环这条路堵死，做完转氨之后，再把乙酰基去掉，得到鸟氨酸。**这条途径里有两步没给产物添上任何一个原子，它们存在的唯一目的，就是不让那个中间体自己跟自己反应。** 鸟氨酸接着经瓜氨酸、精氨酸代琥珀酸走到精氨酸，这几步与尿素循环平行。哺乳动物完全不走这条路：它改用尿素循环里的精氨酸酶，从精氨酸得到脯氨酸；而当膳食精氨酸不足时，同样这几个中间体被反方向读取，把尿素循环推回精氨酸那一侧。",
      src: "A p.806–808",
      see: [{ id: "L-18-2-1", en: "the urea cycle those steps run alongside", cn: "这几步所平行的那个尿素循环" }]
    },
    {
      link_en: "the 3-phosphoglycerate family, and one step of it belongs to another subject entirely",
      link_cn: "3-磷酸甘油酸家族 —— 其中有一步整个属于另一个题目",
      recall_en: "the methylene-tetrahydrofolate that thymidylate synthase spends on dUMP comes from here",
      recall_cn: "胸苷酸合酶花在 dUMP 上的那个亚甲基四氢叶酸，就是从这里来的",
      en: "Serine's route is the same in every organism: 3-phosphoglycerate's hydroxyl is oxidised, transamination from glutamate follows, and a phosphatase releases free serine. Serine then becomes glycine by losing one carbon, and that carbon is not discarded — serine hydroxymethyltransferase hands it to tetrahydrofolate as N5,N10-methylene-tetrahydrofolate. **This route is the cell's main supply line for one-carbon units as well as an amino acid pathway, and one-carbon units are what nucleotide synthesis runs on.** Vertebrate liver has a second route to glycine, running the glycine cleavage reaction backwards.",
      cn: "丝氨酸的路线在所有生物里都一样：3-磷酸甘油酸的羟基被氧化，接着由谷氨酸转氨，再由一个磷酸酶放出游离的丝氨酸。丝氨酸随后失去一个碳变成甘氨酸，而这个碳并没有被丢掉 —— 丝氨酸羟甲基转移酶把它交给四氢叶酸，形成 N⁵,N¹⁰-亚甲基四氢叶酸。**这条路线既是一条氨基酸途径，也是细胞「一碳单位」的主要供应线；而核苷酸合成正是靠一碳单位跑的。** 脊椎动物肝脏另有一条通向甘氨酸的路：把甘氨酸裂解反应反过来跑。",
      src: "A p.806–808",
      see: [{ id: "L-22-4-1", en: "where those one-carbon units are spent", cn: "这些一碳单位花在了哪里" }]
    },
    {
      link_en: "and cysteine is the clearest case of two kingdoms solving one problem differently",
      link_cn: "而半胱氨酸是「两个界用两种办法解决同一个问题」最清楚的例子",
      en: "The question for cysteine is where the sulfur comes from. Plants and bacteria reduce sulfate taken from the environment — an eight-electron reduction, through an activated form called PAPS — and use the resulting sulfide to convert serine to cysteine in two steps. A mammal cannot do that reduction at all, so it takes the sulfur from methionine instead: methionine to S-adenosylmethionine, then demethylation and hydrolysis to homocysteine, which condenses with serine to give cystathionine, and a PLP-dependent lyase cuts that to free cysteine. **Mammalian cysteine is assembled from two amino acids at once, methionine donating the sulfur and serine the carbon skeleton, so a diet short of methionine shows up as a shortage of cysteine.**",
      cn: "半胱氨酸的问题在于：硫从哪来。植物和细菌把从环境里取来的硫酸盐还原掉 —— 这是一次八电子还原，经由一种活化形式 PAPS —— 再用得到的硫化物分两步把丝氨酸变成半胱氨酸。哺乳动物根本做不了这次还原，于是改从甲硫氨酸取硫：甲硫氨酸 → S-腺苷甲硫氨酸，脱甲基并水解得到同型半胱氨酸，后者与丝氨酸缩合生成胱硫醚，再由一个依赖 PLP 的裂解酶切开，得到游离半胱氨酸。**哺乳动物的半胱氨酸是由两个氨基酸同时拼起来的：甲硫氨酸出硫，丝氨酸出碳骨架 —— 所以膳食中甲硫氨酸不足，表现出来会是半胱氨酸不足。**",
      src: "A p.808–809"
    },
    {
      link_en: "the simplest pathways of all turn out to have a clinical use, precisely because they are simple",
      link_cn: "最简单的那几条途径反而有临床用途 —— 正因为它们简单",
      en: "Alanine and aspartate are made by straightforward transamination from pyruvate and oxaloacetate, and asparagine follows by amidating aspartate, with glutamine donating the nitrogen. The malignant lymphocytes of childhood acute lymphoblastic leukaemia make little or no asparagine synthetase, so they cannot make their own asparagine and live entirely on what circulates in the blood. **Bacterial L-asparaginase is given to strip asparagine out of the serum, starving those cells, while normal cells still carry the enzyme and go on making their own.** Combined with chemotherapy this reaches over 95% remission, against 40–60% for the enzyme alone, and about 10% of remissions later relapse with resistant tumours.",
      cn: "丙氨酸和天冬氨酸由丙酮酸、草酰乙酸直接转氨而来；天冬酰胺则由天冬氨酸酰胺化得到，氮由谷氨酰胺提供。儿童急性淋巴细胞白血病的恶性淋巴细胞几乎不产生天冬酰胺合成酶，所以造不出自己的天冬酰胺，完全靠血中循环的那一份活着。**治疗给的是细菌来源的 L-天冬酰胺酶，把血清里的天冬酰胺清空，把那些细胞饿死；而正常细胞仍带着该酶，照样自己合成。** 与化疗联用时缓解率超过 95%，单用该酶为 40–60%；约 10% 的缓解后来会复发为耐药肿瘤。",
      src: "A p.809–810"
    },
    {
      link_en: "the oxaloacetate and pyruvate families are a web rather than a family tree",
      link_cn: "草酰乙酸和丙酮酸这两个家族是一张网，不是一棵家谱树",
      en: "From aspartate, one branch point — aspartate β-semialdehyde — feeds methionine, threonine and lysine; a second, homoserine, splits between threonine and methionine; and threonine is then itself the precursor of isoleucine, so a change far upstream ripples out into several end products at once. From pyruvate, valine and isoleucine share four enzymes on parallel routes, and an intermediate of the valine route, α-ketoisovalerate, starts a separate four-step branch to leucine. **Shared steps are everywhere in this web, so a naive feedback signal would shut down the wrong products — which is why the regulation at the end of this spine is as elaborate as it is.**",
      cn: "从天冬氨酸出发，一个分支点 —— 天冬氨酸-β-半醛 —— 同时供给甲硫氨酸、苏氨酸和赖氨酸；第二个分支点高丝氨酸在苏氨酸与甲硫氨酸之间分岔；而苏氨酸本身又是异亮氨酸的前体，于是上游很远处的一个变动，会同时波及好几个终产物。从丙酮酸出发，缬氨酸与异亮氨酸在平行路线上共用四个酶；缬氨酸路线上的中间体 α-酮异戊酸，又另起一条四步的支路通向亮氨酸。**这张网里到处都是共用步骤，所以一个天真的反馈信号会关错东西 —— 这正是本条主线末尾那套调控必须如此精细的原因。**",
      src: "A p.810"
    },
    {
      link_en: "and now the long on-ramp, which is long for a chemical reason",
      link_cn: "现在是那条长匝道 —— 它之所以长，有一个化学上的理由",
      en: "**An aromatic ring is stable once it exists, but nothing hands a cell one, so a ring is closed from an aliphatic precursor and double bonds added stepwise — the main biological route to one.** Four steps from erythrose 4-phosphate and phosphoenolpyruvate give the seven-carbon shikimate; three more, adding three carbons from a second phosphoenolpyruvate, give chorismate, and chorismate is the branch point — tryptophan on one side, phenylalanine and tyrosine on the other.",
      cn: "**一个芳香环一旦形成就很稳定，但没有谁会白送给细胞一个现成的，所以只能由一个脂肪族前体关环、再一步步装上双键 —— 这就是生物学上生成芳香环的主要途径。** 从赤藓糖-4-磷酸与磷酸烯醇式丙酮酸走四步，得到七碳的莽草酸；再走三步，由第二个磷酸烯醇式丙酮酸补上三个碳，得到分支酸；分支酸就是那个分岔口 —— 一边通向色氨酸，另一边通向苯丙氨酸和酪氨酸。",
      src: "A p.811"
    },
    {
      link_en: "and a pathway one kingdom has and another lacks is a free drug target",
      link_cn: "一个界有、另一个界没有的途径，就是一个白送的药靶",
      recall_en: "mammals keep only the short on-ramps, from the third step of this spine",
      recall_cn: "本条主线第三步说过：哺乳动物只保留了短匝道",
      en: "The herbicide glyphosate competitively inhibits one step on the way from shikimate to chorismate, and it is relatively non-toxic to mammals for one reason only: a mammal has no such pathway to inhibit. **That selectivity is an evolutionary accident rather than a piece of design against a shared target, and it is the cleanest illustration here of why pathway length matters beyond nutrition.**",
      cn: "除草剂草甘膦竞争性抑制「莽草酸 → 分支酸」路上的一步；它对哺乳动物相对无毒，理由只有一个：哺乳动物根本没有这条途径可供抑制。**这种选择性是演化留下的偶然，而不是针对共有靶点的精巧设计 —— 它也是这里最干净的一个例证：途径的长短，其意义远不止营养学。**",
      src: "A p.811"
    },
    {
      link_en: "one enzyme on the tryptophan branch does something worth seeing",
      link_cn: "色氨酸那一支上，有一个酶做的事值得专门看一眼",
      en: "On the way to tryptophan, chorismate becomes anthranilate with glutamine donating the nitrogen that will be the indole ring's nitrogen, and anthranilate then condenses with PRPP, which is an activated ribose made from ribose 5-phosphate and ATP. The last enzyme, tryptophan synthase, is an α2β2 complex whose two activities can be separated: the α subunit makes indole from indole-3-glycerol phosphate, and the β2 unit condenses that indole with serine through a PLP-dependent Schiff base. **The indole is never released into solution — it travels from one active site to the other through a tunnel inside the protein, and that is what channelling means.** Channelling may run across the whole pathway from chorismate, which would make it a metabolon, a multienzyme complex; such complexes do not survive ordinary purification, which is why one was not isolated for so long.",
      cn: "通向色氨酸的路上，分支酸先变成邻氨基苯甲酸，其中的氮由谷氨酰胺提供，日后成为吲哚环上的那个氮；邻氨基苯甲酸再与 PRPP 缩合 —— PRPP 就是由核糖-5-磷酸加 ATP 做成的活化核糖。最后那个酶「色氨酸合酶」是 α₂β₂ 复合体，两种活性可以拆开：α 亚基把吲哚-3-甘油磷酸变成吲哚，β₂ 单元再经一个依赖 PLP 的席夫碱把这个吲哚与丝氨酸缩合。**那个吲哚从不释放到溶液中 —— 它经蛋白内部的一条隧道，从一个活性位点直接走到另一个；这就是「物质传送（channelling）」的意思。** 这种传送可能贯穿从分支酸到色氨酸的整条途径；果真如此，它就是一个 metabolon（多酶复合体）。这类复合体在常规纯化中保不住，这正是它长期未能被分离出来的原因。",
      src: "A p.811–812"
    },
    {
      link_en: "the other branch is short, and its shortness is what makes tyrosine a special case",
      link_cn: "另一支很短 —— 而正是这个「短」使酪氨酸成了特例",
      en: "From chorismate, phenylalanine and tyrosine share a single intermediate, prephenate — the step that makes it is a rare biological example of a Claisen rearrangement — and one transamination from glutamate then gives either amino acid. Animals have a shortcut of their own: phenylalanine hydroxylase hydroxylates C-4 of the phenyl ring and turns phenylalanine straight into tyrosine, and the same enzyme also begins phenylalanine's degradation, so it is a two-way door rather than a dedicated biosynthetic step. **Tyrosine is called conditionally essential for exactly that reason: it can always be made, provided phenylalanine — which must be eaten — is there to make it from.**",
      cn: "从分支酸出发，苯丙氨酸和酪氨酸共用一个中间体预苯酸 —— 生成它的那一步是生物学中罕见的 Claisen 重排实例 —— 之后由谷氨酸转氨一次，就得到其中任一个氨基酸。动物另有一条自己的捷径：苯丙氨酸羟化酶在苯环的 C-4 上加一个羟基，把苯丙氨酸直接变成酪氨酸；而这正是启动苯丙氨酸降解的同一个酶，所以它是一扇双向门，而不是一个专职的合成步骤。**酪氨酸被称为「条件必需」正是因为这个：只要有苯丙氨酸 —— 那是必须吃进来的 —— 酪氨酸随时都造得出来。**",
      src: "A p.812",
      see: [{ id: "L-22-3-1", en: "what tyrosine is then built into", cn: "酪氨酸随后又被造成了什么" }]
    },
    {
      link_en: "and one amino acid reaches outside amino acid metabolism altogether",
      link_cn: "还有一个氨基酸，干脆伸手到氨基酸代谢之外去了",
      recall_en: "AICAR, the purine intermediate that sits a few steps before IMP",
      recall_cn: "AICAR，就是嘌呤合成里离 IMP 只差几步的那个中间物",
      en: "Histidine draws on three sources at once: PRPP contributes five carbons, the purine ring of ATP contributes one nitrogen and one carbon, and glutamine supplies the second ring nitrogen. ATP and PRPP condense, the purine ring then opens, and a new five-membered ring carrying two nitrogens — an imidazole ring, which is the side chain that makes histidine histidine — closes around the nitrogen glutamine gave. **Spending ATP as an ordinary carbon and nitrogen source looks wasteful until you see the remnant: AICAR, itself an intermediate of purine synthesis, rapidly recycled back into ATP.**",
      cn: "组氨酸同时取用三个来源：PRPP 提供五个碳，ATP 的嘌呤环提供一个氮和一个碳，谷氨酰胺提供环上第二个氮。ATP 与 PRPP 缩合，随后那个嘌呤环被打开，一个带两个氮的新五元环 —— 咪唑环，也就是让组氨酸成为组氨酸的那个侧链 —— 围着谷氨酰胺给的那个氮闭合起来。**把 ATP 当成普通的碳源氮源来花，乍看很浪费，直到你看见剩下的那部分：残余物是 AICAR，它本身就是嘌呤合成的中间物，很快就被回收变回 ATP。**",
      src: "A p.814",
      see: [{ id: "L-22-4-1", en: "AICAR in its home pathway, purine synthesis", cn: "AICAR 在它老家那条途径 —— 嘌呤合成 —— 里的位置" }]
    },
    {
      link_en: "and finally the regulation, which escalates through three patterns",
      link_cn: "最后是调控 —— 它沿着三种模式层层升级",
      recall_en: "the web of shared branch points is the problem the third pattern solves",
      recall_cn: "前面那张共用分支点的网，正是第三种模式要解决的问题",
      en: "Simple feedback inhibition is the baseline: an end product allosterically inhibits the first committed enzyme of its own pathway — isoleucine inhibiting the first step of its own synthesis from threonine, historically one of the first allosteric feedback inhibitions ever found. Concerted inhibition is one enzyme integrating several independent signals whose combined effect exceeds the sum of each alone: bacterial glutamine synthetase is inhibited by six different glutamine-derived products at once. Sequential feedback inhibition answers the problem of several end products sharing the same upstream steps, and it answers it with isoenzymes — several independently regulated copies of one enzyme, each listening to a different product. In the aspartate-derived pathway of E. coli the first enzyme exists as three isoenzymes and the enzymes at the next two branch points as two each; on the aromatic pathway, three isoenzymes catalyse the first step toward chorismate, one inhibited by phenylalanine, one by tyrosine, one by tryptophan. **Multiplicity is the whole point: an excess of one product must not be allowed to shut down the supply of the others that share those steps.**",
      cn: "简单反馈抑制是基线：终产物别构抑制自己那条途径的第一个承诺酶 —— 异亮氨酸抑制自己从苏氨酸合成的第一步，这是历史上最早被发现的别构反馈抑制之一。协同抑制是一个酶同时整合多个独立信号，而合并效果超过各自单独作用之和：细菌的谷氨酰胺合成酶同时被六种谷氨酰胺衍生产物抑制。序贯反馈抑制回答的是「多个终产物共用同一段上游步骤」这个问题，而它的答案是同工酶 —— 同一个酶有好几份各自独立受调控的拷贝，每一份听一个不同产物的话。在大肠杆菌由天冬氨酸出发的途径里，第一个酶有三份同工酶，接下来两个分支点上的酶各有两份；在芳香族途径上，通向分支酸的第一步由三份同工酶催化，一份被苯丙氨酸抑制、一份被酪氨酸抑制、一份被色氨酸抑制。**「有好几份」正是全部要点：某一个产物过量，绝不能被允许去切断其他共用这些步骤的产物的供应。**",
      src: "A p.814–816",
      see: [{ id: "L-13-5-1", en: "feedback inhibition as one of the general control mechanisms", cn: "把反馈抑制放进「一般调控机制」里看" }]
    }
  ],
  terms: [
    { en: "six precursor families", cn: "六大前体家族",
      def_en: "The organising scheme for this subject: α-ketoglutarate, pyruvate, 3-phosphoglycerate, phosphoenolpyruvate plus erythrose 4-phosphate, oxaloacetate, and ribose 5-phosphate, each the starting metabolite for a subset of the twenty amino acids. Ten sit one or a few steps from their family precursor; the aromatics sit far from theirs, and that difference in distance is what the essential/nonessential split really tracks.",
      def_cn: "本题的组织框架：α-酮戊二酸、丙酮酸、3-磷酸甘油酸、磷酸烯醇式丙酮酸加赤藓糖-4-磷酸、草酰乙酸、核糖-5-磷酸，各自是二十种氨基酸中一部分的起点代谢物。有十种离本家族前体只有一步或几步；芳香族离得极远 —— 而「必需／非必需」的划分，追踪的其实正是这个距离差。" },
    { en: "conditionally essential amino acid", cn: "条件必需氨基酸",
      def_en: "One that counts as non-essential only under certain conditions. Tyrosine is the worked example: an animal makes it in a single hydroxylation from phenylalanine, so it stays non-essential exactly as long as dietary phenylalanine — which is essential — holds up. The same hydroxylase also opens phenylalanine's degradation, so it is a two-way door rather than a dedicated biosynthetic enzyme.",
      def_cn: "只在某些条件下才算非必需的那一类。酪氨酸是标准例子：动物由苯丙氨酸经一次羟化就能造出它，所以只要膳食里的苯丙氨酸（那是必需的）撑得住，酪氨酸就一直是非必需的。同一个羟化酶也开启苯丙氨酸的降解，所以它是一扇双向门，而不是一个专职的合成酶。" },
    { en: "shikimate and chorismate", cn: "莽草酸与分支酸",
      def_en: "Successive intermediates on the pathway that builds an aromatic ring from scratch, out of erythrose 4-phosphate and phosphoenolpyruvate. A ring is closed from an aliphatic precursor and double bonds added stepwise — the main biological route to an aromatic ring at all. The second of the two is the branch point, splitting toward tryptophan on one side and phenylalanine plus tyrosine on the other. Glyphosate blocks a step between them and is relatively harmless to mammals because mammals have no such pathway.",
      def_cn: "由赤藓糖-4-磷酸和磷酸烯醇式丙酮酸从零造出一个芳香环，这条途径上前后相继的两个中间物。做法是由脂肪族前体关环、再逐步装上双键 —— 这是生物学上生成芳香环的主要途径。后一个是分岔口：一边通向色氨酸，另一边通向苯丙氨酸和酪氨酸。草甘膦堵的正是两者之间的一步；它对哺乳动物相对无害，因为哺乳动物没有这条途径。" },
    { en: "channelling", cn: "物质传送 channelling",
      def_en: "Passing an intermediate from one active site to the next without letting it into solution. Tryptophan synthase is the worked case: an α2β2 complex in which the α subunit makes indole from indole-3-glycerol phosphate and the β2 unit condenses that indole with serine, the indole travelling between the two sites through an internal tunnel. It may extend across the whole pathway from chorismate, which would make that a metabolon — and multienzyme complexes of that kind do not survive ordinary purification, which is why one went so long undetected.",
      def_cn: "把一个中间物从一个活性位点直接递到下一个，全程不让它进入溶液。色氨酸合酶是标准例子：α₂β₂ 复合体里，α 亚基把吲哚-3-甘油磷酸变成吲哚，β₂ 单元把这个吲哚与丝氨酸缩合，而吲哚是经蛋白内部的隧道在两个位点之间走的。它可能贯穿从分支酸开始的整条途径 —— 那就构成一个 metabolon；而这类多酶复合体在常规纯化中保不住，所以它长期未被发现。" },
    { en: "the three regulatory patterns", cn: "三种调控模式",
      def_en: "Simple feedback inhibition: an end product allosterically blocks the first committed enzyme of its own pathway, as isoleucine does on its own synthesis from threonine. Concerted inhibition: one enzyme integrating several independent signals whose joint effect is more than additive, as with the six glutamine-derived inhibitors of bacterial glutamine synthetase. Sequential feedback inhibition: where several end products share upstream steps, those steps are catalysed by independently regulated isoenzymes, so one product's excess cannot cut off the others.",
      def_cn: "简单反馈抑制：终产物别构地挡住自己那条途径的第一个承诺酶，异亮氨酸对自己从苏氨酸的合成就是如此。协同抑制：一个酶整合多个独立信号，合并效果超过各自之和，例如细菌谷氨酰胺合成酶被六种谷氨酰胺衍生物同时抑制。序贯反馈抑制：多个终产物共用上游步骤时，这些步骤由各自独立受调控的同工酶催化，于是某一个产物过量也切不断其他产物的供应。" },
    { en: "L-asparaginase as therapy", cn: "作为疗法的 L-天冬酰胺酶",
      def_en: "A bacterial enzyme given in childhood acute lymphoblastic leukaemia to strip asparagine out of the serum. It works because the leukaemic lymphocytes make little or no asparagine synthetase and therefore depend entirely on circulating asparagine, while normal cells still make their own. With chemotherapy it reaches over 95% remission, against 40–60% for the enzyme alone; about 10% of remissions relapse with resistant tumours.",
      def_cn: "一种细菌来源的酶，用于儿童急性淋巴细胞白血病，把血清里的天冬酰胺清空。它之所以有效，是因为白血病淋巴细胞几乎不产生天冬酰胺合成酶、完全依赖循环中的天冬酰胺，而正常细胞仍自己合成。与化疗联用缓解率超过 95%，单用该酶为 40–60%；约 10% 的缓解会复发为耐药肿瘤。" },
    { en: "the mammalian sulfur route to cysteine", cn: "哺乳动物通向半胱氨酸的硫路线",
      def_en: "Plants and bacteria reduce environmental sulfate through an activated form, PAPS, in an eight-electron reduction, and use the sulfide to make cysteine from serine. A mammal cannot do that reduction, so it takes the sulfur from methionine instead — through S-adenosylmethionine to homocysteine, which condenses with serine to cystathionine, cleaved by a PLP-dependent lyase. Mammalian cysteine therefore comes from two amino acids: methionine supplies the sulfur, serine the carbon skeleton.",
      def_cn: "植物和细菌把环境中的硫酸盐经活化形式 PAPS 作一次八电子还原，再用得到的硫化物由丝氨酸造出半胱氨酸。哺乳动物做不了这次还原，于是改从甲硫氨酸取硫 —— 经 S-腺苷甲硫氨酸到同型半胱氨酸，后者与丝氨酸缩合成胱硫醚，再由一个依赖 PLP 的裂解酶切开。所以哺乳动物的半胱氨酸来自两个氨基酸：甲硫氨酸出硫，丝氨酸出碳骨架。" }
  ]
};
