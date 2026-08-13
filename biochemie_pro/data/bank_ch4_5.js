/* Bank questions for Czech-textbook chapters 4 and 5 — the second question layer,
   see BANK_SPEC.md. Every item below is derived from the content already in
   biochemie_pro/data/ch4.js and ch5.js; no fact here comes from outside the node it is
   attached to. Written 2026-08-13. */
window.BIOCHEM = window.BIOCHEM || {};
window.BIOCHEM.bank = window.BIOCHEM.bank || {};

Object.assign(window.BIOCHEM.bank, {

  "4-1": [
    { type: "mcq",
      q_en: "Adenosine and adenylate (AMP) both appear in Tab. 4.1. What exactly separates them?",
      q_cn: "腺苷 (adenosine) 和腺苷酸 (AMP) 在 Tab. 4.1 里都出现了，它们之间到底差在哪里？",
      options: [
        "Adenosine is built on D-ribose, adenylate on 2-deoxy-D-ribose",
        "Adenosine is base + sugar; adenylate adds a residue of phosphoric acid, making it a nucleotide",
        "Adenosine is the free base; adenylate is base + sugar",
        "They differ in the ring atom carrying the N-glycosidic bond — N9 versus N1"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That is the DNA/RNA pentose difference, not the nucleoside/nucleotide one — both adenosine and AMP sit in the RIBOnucleotide row and both carry D-ribose.", cn: "这说的是 DNA 与 RNA 之间的戊糖差别，不是核苷与核苷酸的差别——adenosine 和 AMP 都在核糖核苷酸那一行，糖都是 D-ribose。" },
        2: { en: "This shifts every name one place along Tab. 4.1: the free base is adenine, adenosine is base + sugar.", cn: "这等于把 Tab. 4.1 里每个名字都往前挪了一格：游离碱基叫 adenine，adenosine 已经是碱基+糖了。" },
        3: { en: "N9 versus N1 separates purines from pyrimidines, not nucleosides from nucleotides — adenosine and AMP both use N9.", cn: "N9 与 N1 区分的是嘌呤和嘧啶，不是核苷和核苷酸——adenosine 和 AMP 用的都是 N9。" }
      },
      why_en: "A nucleoside is a base joined to a pentose by an N-glycosidic bond. A nucleotide is that same nucleoside esterified with phosphoric acid — all three components bound. Adenine, adenosine, adenylate is one row of Tab. 4.1 read left to right, and the phosphate is the only thing added at the last step.",
      why_cn: "核苷 = 碱基通过 N-糖苷键连在戊糖上；核苷酸 = 同一个核苷再酯化上一个磷酸，三个组分齐全。adenine → adenosine → adenylate 就是 Tab. 4.1 一行从左读到右，最后一步加上去的只有磷酸。" },
    { type: "mcq",
      q_en: "Which description of hypoxanthine (Hyp) matches this section?",
      q_cn: "关于次黄嘌呤 (hypoxanthine, Hyp)，哪一条符合本节的说法？",
      options: [
        "A minor pyrimidine base, occurring in the lactam and lactim tautomeric forms",
        "A minor purine base — guanine without its amino group — whose nucleotide IMP is the first derivative formed in purine nucleotide biosynthesis",
        "The base of uridylate (UMP) in the ribonucleotide series",
        "The activated ribose-phosphate scaffold on which the purine ring is assembled"
      ],
      answer: 1,
      optionRefs: { 3: "4-1-1-1" },
      optionNotes: {
        0: { en: "Lactam/lactim tautomerism is described for the PYRIMIDINE bases (Obr. 4.1); hypoxanthine is a purine.", cn: "内酰胺/内酰亚胺互变异构是本节讲嘧啶碱基时提到的（Obr. 4.1）；hypoxanthine 是嘌呤。" },
        2: { en: "That is uracil — Tab. 4.1 pairs uracil with uridine and uridylate.", cn: "那是 uracil——Tab. 4.1 里 uracil 对应 uridine 和 uridylate。" },
        3: { en: "That describes PRPP, a sugar-phosphate, not a base at all.", cn: "这描述的是 PRPP，一个糖-磷酸，根本不是碱基。" }
      },
      why_en: "Hypoxanthine is the section's example of a MINOR base: structurally guanine minus the amino group, and biologically important because its nucleotide, inosine monophosphate (IMP), is the first complete purine nucleotide formed in de novo biosynthesis.",
      why_cn: "hypoxanthine 是本节举的稀有碱基 (minor base) 例子：结构上就是 guanine 去掉氨基；生物学意义在于它的核苷酸形式 IMP 是嘌呤核苷酸从头合成中出现的第一个衍生物。" },
    { type: "short",
      q_en: "Which class of nucleic acid bases occurs in two tautomeric forms, what are those forms called, and which of the two is the more stable?",
      q_cn: "哪一类核酸碱基存在两种互变异构形式？这两种形式各叫什么？哪一种更稳定？",
      accept: ["lactam", "lactim", "嘧啶", "内酰胺"],
      answer_en: "The pyrimidine bases (cytosine, uracil, thymine) occur in tautomeric forms: a more stable LACTAM form and a weakly acidic LACTIM form, drawn in Obr. 4.1.",
      answer_cn: "嘧啶碱基（cytosine、uracil、thymine）存在互变异构：较稳定的 lactam（内酰胺）型，和弱酸性的 lactim（内酰亚胺）型，见 Obr. 4.1。" }
  ],

  "4-1-1-1": [
    { type: "mcq",
      q_en: "The purine pathway closes two rings. How do the two ring-closure steps differ energetically?",
      q_cn: "嘌呤合成途径里有两次成环。这两次成环在能量消耗上有什么不同？",
      options: [
        "Both cyclisations consume ATP",
        "The imidazole ring closure (FGAM to AIR) consumes ATP; the final cyclisation to IMP consumes none and proceeds with elimination of water",
        "Neither cyclisation consumes ATP; both simply eliminate water",
        "The final cyclisation to IMP is the ATP-consuming one, while the imidazole ring closes for free"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "True for the imidazole closure only; the book stresses that the final cyclisation, UNLIKE that one, needs no ATP.", cn: "只有咪唑环那次成环是这样；书上特别强调最后一次成环与它不同，不需要 ATP。" },
        2: { en: "This describes only the final step. The imidazole ring closure does spend a further ATP.", cn: "这只描述了最后一步。咪唑环闭环还要再花掉一个 ATP。" },
        3: { en: "The two steps are the right way round in the pathway but swapped in their energy cost.", cn: "两步在途径中的顺序没错，但能量消耗写反了。" }
      },
      why_en: "FGAM cyclises to AIR at the cost of one further ATP. The last ring atom is then added by formylation, and the final cyclisation to IMP simply eliminates water — the book points this out explicitly as the contrast with the earlier, ATP-driven closure.",
      why_cn: "FGAM 环化成 AIR 时要再消耗一个 ATP。最后一个成环原子靠甲酰化加上去，随后闭环生成 IMP 时只脱去一分子水——书上明确把这一点与前面那次耗 ATP 的闭环对照着讲。" },
    { type: "mcq",
      q_en: "Aspartate donates N1 of the purine ring. What happens to the rest of the aspartate skeleton?",
      q_cn: "天冬氨酸提供嘌呤环的 N1。它剩下的碳骨架去哪了？",
      options: [
        "It is eliminated as fumaric acid, giving AICAR",
        "It is hydrolysed to urea and excreted",
        "It stays in the ring and becomes carbons 4 and 5",
        "It is transaminated to oxaloacetate on the spot"
      ],
      answer: 0,
      optionRefs: { 1: "5-2-2-2", 3: "5-2-3-4" },
      optionNotes: {
        1: { en: "Urea is the end product of nitrogen disposal in the urea cycle, a completely different pathway; nothing here is excreted.", cn: "urea 是尿素循环里氮排泄的终产物，是完全不同的途径；这里没有任何东西被排掉。" },
        2: { en: "Glycine, not aspartate, contributes carbons to the ring — aspartate contributes only its amino nitrogen here.", cn: "向环里贡献碳原子的是 glycine，不是 aspartate——aspartate 在这一步只贡献氨基氮。" },
        3: { en: "Aspartate and oxaloacetate are indeed an interconvertible pair elsewhere in metabolism, but here the leaving fragment is fumarate, not oxaloacetate.", cn: "aspartate 与 oxaloacetate 在代谢别处确实可以互变，但这一步离去的片段是 fumarate，不是 oxaloacetate。" }
      },
      why_en: "Aspartate condenses onto the ring using ATP to give SAICAR; once its amino nitrogen has been handed over as N1, the remaining four-carbon skeleton leaves as fumaric acid, and the product is AICAR. The same aspartate-in, fumarate-out logic reappears when IMP is converted to AMP via adenylosuccinate.",
      why_cn: "aspartate 消耗 ATP 缩合上去生成 SAICAR；氨基氮作为 N1 交出去之后，剩下的四碳骨架以 fumaric acid 的形式离去，产物是 AICAR。IMP 经 adenylosuccinate 转成 AMP 时，用的是同一套「aspartate 进、fumarate 出」的逻辑。" },
    { type: "short",
      q_en: "AMP and GMP are made as monophosphates. What still has to happen before they can be used for nucleic acid synthesis, and at what cost?",
      q_cn: "AMP 和 GMP 合成出来时是一磷酸形式。在能用于核酸合成之前还必须发生什么？代价是多少？",
      accept: ["kinase", "triphosphate", "ATP", "激酶", "三磷酸"],
      answer_en: "They must be converted from nucleoside MONOphosphates to nucleoside TRIphosphates. This is done by kinases in two successive steps, MP to DP to TP, consuming two molecules of ATP.",
      answer_cn: "必须由核苷一磷酸转成核苷三磷酸。由 kinase 分两步完成，MP → DP → TP，共消耗两个 ATP。" }
  ],

  "4-1-1-2": [
    { type: "mcq",
      q_en: "At what level are deoxyribonucleotides actually made, and what supplies the reducing power?",
      q_cn: "脱氧核糖核苷酸究竟是在哪一级形成的？还原力从哪里来？",
      options: [
        "From ribonucleoside TRIphosphates, reduced directly by NADH",
        "From ribonucleoside DIphosphates (NDP), whose 2-OH is removed by reduction via thioredoxin, itself re-reduced by thioredoxin reductase using NADPH",
        "The deoxyribose is made separately and then attached to the free base",
        "By reduction of the free base before it ever meets a sugar"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Both details are wrong: the substrate is the DIphosphate, and the electrons come from NADPH through thioredoxin, not from NADH.", cn: "两处都不对：底物是二磷酸，电子经 thioredoxin 来自 NADPH，不是 NADH。" },
        2: { en: "No free deoxyribose is built and attached; the 2-OH is removed from a sugar already carried on a finished ribonucleotide.", cn: "并不存在先造好脱氧核糖再接上去的过程；2-OH 是从已经装在核糖核苷酸上的糖上直接还原掉的。" },
        3: { en: "The bases are not reduced at all — the modification is on the sugar.", cn: "碱基根本没有被还原——改造发生在糖上。" }
      },
      why_en: "This is the general mechanism shared by BOTH the purine and the pyrimidine series: ribonucleoside diphosphates lose their 2-OH by reduction, thioredoxin supplies the electrons, and thioredoxin reductase (a flavin enzyme) regenerates thioredoxin at the expense of NADPH.",
      why_cn: "这是嘌呤系和嘧啶系共用的通用机制：核糖核苷二磷酸被还原脱去 2-OH，电子由 thioredoxin 提供，而 thioredoxin 再由黄素酶 thioredoxin reductase 消耗 NADPH 重新还原。" },
    { type: "mcq",
      q_en: "UTP becomes CTP by gaining an amino group at C4. Where does that nitrogen come from?",
      q_cn: "UTP 在 C4 位获得一个氨基而变成 CTP。这个氮从哪里来？",
      options: [
        "From carbamoyl phosphate, as for the first ring nitrogen",
        "From ammonia in bacteria, or from glutamine in animals",
        "From aspartate, as for N1 of the purine ring",
        "By methylation with N5,N10-methylenetetrahydrofolate"
      ],
      answer: 1,
      optionRefs: { 2: "4-1-1-1" },
      optionNotes: {
        0: { en: "Carbamoyl phosphate delivers one of the two nitrogens BEFORE the ring is closed; by the UTP stage that job is long finished.", cn: "carbamoyl phosphate 提供的是闭环之前那两个氮之一；到 UTP 这一步，那个任务早就完成了。" },
        2: { en: "Aspartate donating a nitrogen is the purine story (and it also supplies the pyrimidine ring's second N before attachment) — but not this step.", cn: "aspartate 供氮是嘌呤那条线的情节（它也提供嘧啶环接糖之前的第二个氮）——但不是这一步。" },
        3: { en: "That methyl donor is used to convert dUMP to dTMP, adding a methyl group, not an amino group.", cn: "那个甲基供体用于把 dUMP 转成 dTMP，加的是甲基，不是氨基。" }
      },
      why_en: "Cytidylate synthetase introduces the C4 amino group at the cost of ATP, taking the nitrogen from free ammonia in bacteria and from the amide group of glutamine in animals. That single amination is the whole difference between the uracil and cytosine series.",
      why_cn: "cytidylate synthetase 消耗 ATP 引入 C4 位氨基，细菌中氮来自游离氨，动物中来自 glutamine 的酰胺基。就这一次氨基化，构成了尿嘧啶系和胞嘧啶系的全部差别。" },
    { type: "short",
      q_en: "At which step does the finished pyrimidine ring first meet the sugar-phosphate, and what small molecule is lost immediately afterwards?",
      q_cn: "已经建好的嘧啶环是在哪一步第一次与糖-磷酸结合的？紧接着又失去了什么小分子？",
      accept: ["orotate", "PRPP", "orotidylate", "CO2", "乳清酸"],
      answer_en: "Orotate reacts with PRPP (orotate phosphoribosyltransferase, releasing PPi) to give orotidylate — this is the moment the completed ring joins the sugar-phosphate. Orotidylate is then decarboxylated, releasing CO2, to give UMP.",
      answer_cn: "orotate（乳清酸）与 PRPP 反应（orotate phosphoribosyltransferase，释放 PPi）生成 orotidylate——这就是整环与糖-磷酸结合的时刻。随后 orotidylate 脱羧放出 CO2，生成 UMP。" }
  ],

  "4-1-2": [
    { type: "mcq",
      q_en: "By the convention used in this section, what does the written sequence ACG tell you?",
      q_cn: "按本节采用的书写惯例，写成 ACG 的序列告诉了你什么？",
      options: [
        "The 5-prime end is adenosine and the 3-prime end is guanosine",
        "The 3-prime end is adenosine and the 5-prime end is guanosine",
        "The order is arbitrary; only the base composition matters",
        "It identifies which of the two strands is the template"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The direction is reversed. By convention the 5-prime end is written on the LEFT.", cn: "方向写反了。按惯例 5′ 端写在左边。" },
        2: { en: "Composition alone would lose all sequence information — the whole point of the convention is that order is read, left to right.", cn: "只看碱基组成就把序列信息全丢了——这个惯例的意义正是「从左到右按顺序读」。" },
        3: { en: "Nothing in the way a sequence is written marks a strand as template; that is a property of the gene being transcribed.", cn: "序列的书写方式并不标记哪条链是模板；那取决于正在被转录的基因。" }
      },
      why_en: "Polynucleotide sequences are written 5-prime on the left, 3-prime on the right, so ACG (equivalently pApCpG) means adenosine at the 5-prime end and guanosine at the 3-prime end. Because the two strands are antiparallel, this convention is what makes a written sequence unambiguous.",
      why_cn: "多核苷酸序列约定 5′ 端写在左、3′ 端写在右，所以 ACG（也写作 pApCpG）意思是 5′ 端是 adenosine、3′ 端是 guanosine。正因为两条链是反向平行的，这个惯例才让写下来的序列没有歧义。" },
    { type: "mcq",
      q_en: "Which statement about the phosphodiester linkage of the nucleic acid backbone is correct?",
      q_cn: "关于核酸骨架中的磷酸二酯键，哪一条正确？",
      options: [
        "It normally joins C3 of one pentose to C5 of the next, in both DNA and RNA; RNA can additionally form 2-prime-5-prime linkages",
        "The 2-prime-5-prime linkage occurs in DNA only",
        "DNA uses 3-prime-5-prime bonds and RNA uses only 2-prime-5-prime bonds",
        "It is the bond joining the base to the sugar"
      ],
      answer: 0,
      optionRefs: { 3: "4-1" },
      optionNotes: {
        1: { en: "Reversed: DNA has no 2-prime-OH at all, so the extra linkage is only possible in RNA.", cn: "反了：DNA 根本没有 2′-OH，所以那种额外的连接只可能出现在 RNA 里。" },
        2: { en: "RNA's normal backbone is 3-prime-5-prime as well; 2-prime-5-prime is an additional possibility, not the rule.", cn: "RNA 的正常骨架同样是 3′-5′；2′-5′ 只是额外的可能性，不是常规。" },
        3: { en: "That is the N-glycosidic bond, which links base to sugar at C1 of the pentose — a different bond entirely.", cn: "那是 N-糖苷键，在戊糖 C1 上把碱基连到糖上——完全是另一种键。" }
      },
      why_en: "The backbone is a chain of pentoses linked by phosphodiester bridges from C3 of one sugar to C5 of the next. DNA uses 2-deoxyribose and therefore has only that option; RNA, having a free 2-prime-OH, can also form a 2-prime-5-prime linkage.",
      why_cn: "骨架就是一串戊糖，通过磷酸二酯桥从一个糖的 C3 连到下一个糖的 C5。DNA 用的是 2-脱氧核糖，因此只有这一种选择；RNA 有游离的 2′-OH，还可以形成 2′-5′ 连接。" },
    { type: "short",
      q_en: "The two strands of DNA are described as complementary but NOT identical, and as antiparallel. Explain both words.",
      q_cn: "书上说 DNA 两条链是互补的但并不相同，而且是反向平行的。请解释这两个词。",
      accept: ["complementary", "antiparallel", "互补", "反向平行"],
      answer_en: "Complementary: because a base can pair only with its specific partner (A with T, G with C), one strand's sequence fixes the other's — but as the mirror-image partner, not as a copy, so the two sequences are not identical. Antiparallel: one strand runs 5-prime to 3-prime upward through the helix while the other runs 5-prime to 3-prime downward.",
      answer_cn: "互补：因为每个碱基只能与特定伙伴配对（A-T、G-C），一条链的序列就决定了另一条链——但决定的是配对的那一条，不是复制品，所以两条序列并不相同。反向平行：一条链在螺旋中 5′→3′ 向上走，另一条 5′→3′ 向下走。" }
  ],

  "4-1-3-1": [
    { type: "mcq",
      q_en: "What are the two biological jobs of DNA polymerase I's 5-prime-to-3-prime nuclease activity?",
      q_cn: "DNA polymerase I 的 5′→3′ 核酸酶活性承担哪两项生物学任务？",
      options: [
        "Removing the RNA primer during normal replication, and repairing damage such as excised UV-induced pyrimidine dimers",
        "Proofreading and removing mismatched bases from the growing 3-prime end",
        "Unwinding the double helix ahead of the replication fork",
        "Sealing the remaining nick once the gap has been filled"
      ],
      answer: 0,
      optionRefs: { 2: "4-1-3-2", 3: "4-1-3-2" },
      optionNotes: {
        1: { en: "That is the OTHER nuclease of the same enzyme, the 3-prime-to-5-prime exonuclease, which trims one residue at a time from the 3-OH end.", cn: "那是同一个酶的另一种核酸酶活性，即 3′→5′ 外切酶，它从 3′-OH 端一次切掉一个残基。" },
        2: { en: "Unwinding is done by helicase (the DnaB protein), using energy from ATP hydrolysis.", cn: "解链是 helicase（DnaB 蛋白）干的，能量来自 ATP 水解。" },
        3: { en: "Sealing the nick is DNA ligase's job; polymerase I only removes the primer and fills the gap.", cn: "封口是 DNA ligase 的活；polymerase I 只负责切除引物并填补缺口。" }
      },
      why_en: "The 5-prime-to-3-prime activity cuts WITHIN a double-helical region at a nick and takes out up to ten nucleotides at once. Combined with the polymerase activity this shifts the nick along (nick translation), which is exactly what is needed both to excise RNA primers and to clear out damaged stretches while the polymerase refills behind it.",
      why_cn: "5′→3′ 活性在双螺旋区域内部、在切口处切开，一次可以取走多达十个核苷酸。它与聚合酶活性配合，把切口沿链推移（nick translation），这正好既能切除 RNA 引物，也能清掉受损片段，同时聚合酶在后面补上。" },
    { type: "mcq",
      q_en: "Besides the template and the four dNTPs, what must DNA polymerase I have in order to work at all?",
      q_cn: "除了模板和四种 dNTP 之外，DNA polymerase I 还必须具备什么才能工作？",
      options: [
        "A polynucleotide segment already paired to the template and carrying a free 3-OH group, plus Mg ions",
        "A free 5-phosphate end and Ca ions",
        "A sigma factor to recognise the correct starting site",
        "Nothing further — it can start a chain de novo"
      ],
      answer: 0,
      optionRefs: { 2: "4-1-4-2", 3: "4-1-4-2" },
      optionNotes: {
        1: { en: "The chain grows at the 3-OH end, not the 5-phosphate end, and the essential ion named here is Mg, not Ca.", cn: "链是在 3′-OH 端延长的，不是 5′-磷酸端；这里点名的必需离子是 Mg，不是 Ca。" },
        2: { en: "Sigma factor is how RNA polymerase finds a promoter — that is transcription, a different enzyme and a different start mechanism.", cn: "sigma 因子是 RNA polymerase 找启动子的方式——那是转录，另一个酶、另一套起始机制。" },
        3: { en: "Starting de novo is precisely what RNA polymerase can do and DNA polymerase cannot; this is why replication needs an RNA primer at all.", cn: "从头起始恰恰是 RNA polymerase 能做而 DNA polymerase 做不到的事；复制之所以需要 RNA 引物，原因就在这里。" }
      },
      why_en: "The chemistry is a nucleophilic attack by an existing 3-OH end on the phosphorus of the incoming dNTP, forming a phosphodiester bond and releasing pyrophosphate. No pre-existing 3-OH means no nucleophile and no reaction, and Mg ions are essential throughout.",
      why_cn: "反应的化学本质是已有的 3′-OH 端对进入的 dNTP 上磷原子发动亲核进攻，形成磷酸二酯键并放出焦磷酸。没有现成的 3′-OH 就没有亲核体、也就没有反应；整个过程还必须有 Mg 离子。" },
    { type: "short",
      q_en: "Which single activity does DNA polymerase II lack compared with DNA polymerase I, and what does the cell need that activity for?",
      q_cn: "与 DNA polymerase I 相比，DNA polymerase II 缺的是哪一种活性？细胞要这种活性来做什么？",
      accept: ["nuclease", "primer", "核酸酶", "引物"],
      answer_en: "DNA polymerase II lacks the 5-prime-to-3-prime nuclease activity; it keeps only the polymerase and the 3-prime-to-5-prime proofreading exonuclease. The missing activity is the one that removes RNA primers and excises damaged stretches during repair.",
      answer_cn: "DNA polymerase II 缺的是 5′→3′ 核酸酶活性；它只保留聚合酶活性和 3′→5′ 校对外切酶活性。缺掉的这项，正是负责切除 RNA 引物、以及在修复中切掉受损片段的那一项。" }
  ],

  "4-1-3-2": [
    { type: "mcq",
      q_en: "How are the unwinding jobs divided at the replication fork?",
      q_cn: "在复制叉处，解链的工作是怎么分工的？",
      options: [
        "Helicase (DnaB) moves along the lagging-strand template, a separate Rep protein along the leading-strand template, and SSB coats the separated single strands behind them",
        "Helicase moves along the leading-strand template while SSB does the actual unwinding",
        "SSB re-anneals the two strands behind the fork so the helix is restored",
        "Helicase works alone and needs no energy source"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Two things are swapped: helicase tracks the LAGGING-strand template, and SSB does not unwind anything — it only keeps separated strands apart.", cn: "有两处调换了：helicase 沿的是滞后链模板；而 SSB 不解链，它只是让已分开的单链不再配回去。" },
        2: { en: "Exactly backwards — SSB's whole job is to PREVENT the separated strands from re-pairing.", cn: "正好相反——SSB 的全部作用就是阻止已分开的两条链重新配对。" },
        3: { en: "The energy for unwinding comes from hydrolysis of ATP, and further unwinding proteins act cooperatively with helicase.", cn: "解链的能量来自 ATP 水解，而且还有别的解链蛋白与 helicase 协同作用。" }
      },
      why_en: "Unwinding is a cooperative job: helicase (the DnaB protein) on the lagging-strand template, the Rep protein on the leading-strand template, further unwinding proteins alongside, and SSB coating the exposed single strands behind the advancing fork so they cannot pair up again. ATP hydrolysis pays for it.",
      why_cn: "解链是协同完成的：helicase（DnaB 蛋白）沿滞后链模板走，Rep 蛋白沿前导链模板走，旁边还有其他解链蛋白，SSB 则在推进的复制叉后面包裹暴露的单链，使它们无法重新配对。整个过程由 ATP 水解供能。" },
    { type: "mcq",
      q_en: "Which pair of sizes is correct for lagging-strand synthesis in E. coli?",
      q_cn: "关于大肠杆菌滞后链的合成，哪一组数值是对的？",
      options: [
        "RNA primer up to 10 nucleotides; Okazaki fragment about 60 nucleotides",
        "RNA primer up to 60 nucleotides; Okazaki fragment about 1,000 to 2,000 nucleotides",
        "RNA primer about 1,000 nucleotides; Okazaki fragment about 10 nucleotides",
        "Both the primer and the Okazaki fragment are about 120 nucleotides"
      ],
      answer: 1,
      optionRefs: { 0: "4-1-3-1" },
      optionNotes: {
        0: { en: "Up to 10 nucleotides is the stretch removed at a nick by DNA polymerase I's 5-prime-to-3-prime nuclease — a different number from a different process; and the two values here are also swapped in scale.", cn: "「多达 10 个核苷酸」是 DNA polymerase I 的 5′→3′ 核酸酶在切口处一次取走的长度，是另一个过程的数字；而且这里两个数值的量级也互换了。" },
        2: { en: "The magnitudes are inverted: the primer is the short piece, the Okazaki fragment the long one.", cn: "量级颠倒了：引物是短的那段，Okazaki 片段是长的那段。" },
        3: { en: "Nothing in this section gives a common length to both; they differ by more than an order of magnitude.", cn: "本节没有给两者一个共同长度；它们相差一个数量级以上。" }
      },
      why_en: "An RNA segment of up to 60 nucleotides is laid down as primer, DNA polymerase III extends it into a fragment of roughly 1,000 to 2,000 nucleotides, DNA polymerase I then excises the primer and fills the gap, and ligase seals what is left.",
      why_cn: "先铺一段长达 60 个核苷酸的 RNA 作引物，DNA polymerase III 把它延长成约 1,000–2,000 个核苷酸的片段，随后 DNA polymerase I 切除引物并填补缺口，最后由 ligase 封口。" },
    { type: "short",
      q_en: "DNA ligase cannot join two single-stranded molecules. What must be true of the DNA before ligase can act, and what bond does it make?",
      q_cn: "DNA ligase 不能连接两条单链分子。在它能起作用之前，DNA 必须处于什么状态？它形成的是什么键？",
      accept: ["double-helical", "nick", "双螺旋", "切口"],
      answer_en: "At least part of the DNA must already be double-helical — in practice ligase seals a nick in an otherwise paired duplex. It forms a phosphodiester bond between the 3-OH group of one strand and the 5-phosphate group of the other, an endergonic reaction paid for by cleaving ATP or NAD.",
      answer_cn: "DNA 至少要有一部分已经是双螺旋的——实际情况就是 ligase 在已配对的双链上封一个切口。它在一条链的 3′-OH 与另一条链的 5′-磷酸之间形成磷酸二酯键；这是个吸能反应，靠裂解 ATP 或 NAD 供能。" }
  ],

  "4-1-4-1": [
    { type: "mcq",
      q_en: "According to this section, how is E. coli's RNA divided between the classes by amount?",
      q_cn: "按本节的说法，大肠杆菌的 RNA 在各类之间的量是怎么分布的？",
      options: [
        "mRNA about 80 percent, rRNA about 5 percent",
        "mRNA about 5 percent, rRNA about 80 percent",
        "The three classes are present in roughly equal amounts",
        "tRNA makes up most of the RNA because it is the smallest"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The two figures are swapped. rRNA is the structural bulk; mRNA is deliberately a small, short-lived, heterogeneous fraction.", cn: "两个数字对调了。rRNA 才是结构性的大头；mRNA 有意保持为量少、寿命短、大小不一的一小部分。" },
        2: { en: "They are strikingly unequal — that inequality is the point, and it follows from rRNA being structural while mRNA is a message.", cn: "三者极不平均——这种不平均正是重点，原因在于 rRNA 是结构组分而 mRNA 只是信息载体。" },
        3: { en: "Being small does not make a species abundant; tRNA is the smallest RNA (4S) but rRNA carries the mass.", cn: "分子小并不等于数量多；tRNA 是最小的 RNA（4S），但质量上占大头的是 rRNA。" }
      },
      why_en: "rRNA is the structural component of ribosomes and accounts for about 80 percent of E. coli's RNA. mRNA is only about 5 percent and is heterogeneous in size, because its size simply tracks the size and number of the peptide chains it encodes.",
      why_cn: "rRNA 是核糖体的结构组分，约占大肠杆菌 RNA 的 80%。mRNA 只占约 5%，而且大小不一，因为它的长度直接取决于所编码肽链的大小和数目。" },
    { type: "mcq",
      q_en: "Reverse transcriptase appears in the central dogma scheme as which kind of transfer?",
      q_cn: "在中心法则的图示里，逆转录酶属于哪一类信息传递？",
      options: [
        "RNA-directed DNA polymerase, a special transfer found in some RNA viruses",
        "RNA-directed RNA polymerase, found in some viruses and plants",
        "DNA directly specifying protein",
        "The ordinary transcription step, DNA to RNA"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "That is the OTHER special transfer drawn in Obr. 4.26 — real, but a different enzyme and a different arrow.", cn: "那是 Obr. 4.26 里画的另一条特殊传递——同样真实，但是另一个酶、另一条箭头。" },
        2: { en: "This one has never been demonstrated; the book only allows that its existence need not be entirely unreal.", cn: "这条从未被证实；书上只是说它的存在「未必完全不真实」。" },
        3: { en: "Transcription is the universal, general pathway, not a special exceptional transfer.", cn: "转录是普遍存在的常规途径，不是特殊的例外传递。" }
      },
      why_en: "Crick's cyclic scheme has DNA directing its own replication and its transcription into RNA, which directs translation into protein. Two special, non-universal transfers are added: RNA-directed RNA polymerase in some viruses and plants, and RNA-directed DNA polymerase — reverse transcriptase — in some RNA viruses.",
      why_cn: "Crick 的循环图式是：DNA 指导自身复制、并转录成 RNA，RNA 再指导翻译成蛋白质。此外还加了两条特殊的、非普遍的传递：某些病毒和植物中的 RNA 指导的 RNA 聚合酶，以及某些 RNA 病毒中 RNA 指导的 DNA 聚合酶，即逆转录酶。" },
    { type: "short",
      q_en: "Describe the shape of a tRNA molecule and the one sequence every tRNA shares, whatever amino acid it carries.",
      q_cn: "描述 tRNA 分子的形状，以及不论携带哪种氨基酸、每个 tRNA 都相同的那段序列。",
      accept: ["cloverleaf", "anticodon", "CCA", "三叶草", "反密码子"],
      answer_en: "tRNA folds into the cloverleaf shape: three constant loops (arms) plus one smaller variable loop, with the anticodon loop carrying the triplet that pairs with the mRNA codon. Every tRNA ends in the same 3-prime sequence, ...pCpCpA, which is the amino-acid acceptor site.",
      answer_cn: "tRNA 折叠成三叶草结构：三个恒定的环（臂）加一个较小的可变环，其中反密码子环带着与 mRNA 密码子配对的三联体。所有 tRNA 的 3′ 端都是同一段序列 …pCpCpA，即氨基酸接受位点。" }
  ],

  "4-1-4-2": [
    { type: "mcq",
      q_en: "Transcription differs from replication in one requirement right at the start. Which?",
      q_cn: "转录与复制在起始时有一项要求不同。是哪一项？",
      options: [
        "Transcription needs no primer at all — RNA polymerase can start a chain de novo",
        "Transcription needs a DNA primer instead of an RNA primer",
        "Transcription copies both DNA strands at once",
        "Transcription runs 3-prime to 5-prime along the new chain"
      ],
      answer: 0,
      optionRefs: { 1: "4-1-3-2", 3: "4-1-3-1" },
      optionNotes: {
        1: { en: "The primer requirement belongs to replication, and there the primer is RNA, made by primase — transcription has no primer of any kind.", cn: "需要引物的是复制，而且那里的引物是 RNA，由 primase 合成——转录根本不需要任何引物。" },
        2: { en: "RNA synthesis proceeds on only ONE DNA strand, the coding (template) strand.", cn: "RNA 合成只在一条 DNA 链上进行，即编码（模板）链。" },
        3: { en: "RNA polymerase synthesises 5-prime to 3-prime, exactly like DNA polymerase; the difference is the start, not the direction.", cn: "RNA polymerase 同样是 5′→3′ 合成，与 DNA polymerase 一致；差别在起始，不在方向。" }
      },
      why_en: "DNA polymerases can only extend an existing chain, so replication must first lay down an RNA primer to supply a free 3-OH. RNA polymerase has no such restriction and simply begins a new chain at the promoter, which is why no primase step exists in transcription.",
      why_cn: "DNA polymerase 只能延长已有的链，所以复制必须先铺一段 RNA 引物来提供游离 3′-OH。RNA polymerase 没有这个限制，直接在启动子处开始一条新链，所以转录里根本没有 primase 这一步。" },
    { type: "mcq",
      q_en: "An intrinsic (hairpin) terminator has two features. What does each one contribute?",
      q_cn: "内源性（发夹）终止子有两个特征，各自起什么作用？",
      options: [
        "The G+C-rich palindrome gives a stable hairpin, and the oligo(U) tail pairs only weakly with the DNA template",
        "The G+C-rich palindrome pairs weakly, and the oligo(U) tail forms the stable hairpin",
        "Both features exist only to recruit protein rho",
        "The A-T series marks where transcription STARTS, and the hairpin marks the promoter"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The two roles are swapped. G-C pairing is the strong one — that is why the palindrome, not the U tail, is what folds tightly.", cn: "两个角色调换了。G-C 配对才是强的那一种——所以折得紧的是那段回文，不是 U 尾巴。" },
        2: { en: "Rho is needed at OTHER termination sites, precisely those that LACK these hairpin/oligo(U) sequences.", cn: "rho 是在另一类终止位点上才需要的，恰恰是那些没有发夹/寡聚 U 序列的位点。" },
        3: { en: "The A-T series lies at the END of the transcript, not the start; promoters are recognised by sigma factor at the beginning of the gene.", cn: "那串 A-T 位于转录本的末端而不是起点；启动子是在基因开头由 sigma 因子识别的。" }
      },
      why_en: "The two features point the same way: a G+C-rich palindromic region whose transcript folds into a self-complementary hairpin stable enough to stall the polymerase, immediately followed by several U residues that pair only weakly with the template. Strong fold, weak grip — and the RNA falls off spontaneously.",
      why_cn: "两个特征作用方向一致：一段富含 G+C 的回文，其转录本折成自身互补的发夹，稳定到足以让聚合酶停下；紧接着是几个 U 残基，与模板配对很弱。折得牢、抓得松，RNA 就自发脱落了。" },
    { type: "mcq",
      q_en: "During elongation, what does the book consider the more likely physical model?",
      q_cn: "在延伸阶段，书上认为哪一种物理模型更可能？",
      options: [
        "The RNA moves in a straight line while the DNA rotates beneath it, unwinding ahead of the transcription bubble and reclosing behind it",
        "The DNA stays fixed while the RNA wraps helically around it",
        "The whole double helix unwinds completely before synthesis begins",
        "The DNA-RNA hybrid persists over the entire length of the gene"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "This is the alternative the book judges less likely; it would require the RNA to rotate around the template.", cn: "这是书上认为可能性较低的那个模型；它要求 RNA 绕着模板旋转。" },
        2: { en: "Only about one helical turn is unwound at a time — that local opening IS the transcription bubble.", cn: "一次只解开大约一圈螺旋——这个局部打开的区域就是转录泡。" },
        3: { en: "The hybrid is short and transient: the DNA rewinds again behind the advancing polymerase.", cn: "杂交区很短且是暂时的：聚合酶走过之后 DNA 立刻重新绕回去。" }
      },
      why_en: "About one turn of the helix is opened so the template can form a short DNA-RNA hybrid with the RNA's 3-prime end. Because the ends of the DNA and of the polymerase are held against free rotation inside the cell, the more likely picture is a straight-running RNA with the DNA rotating beneath it, the bubble opening ahead and closing behind.",
      why_cn: "大约解开一圈螺旋，使模板能与 RNA 的 3′ 端形成一小段 DNA-RNA 杂交。由于细胞内 DNA 的末端和聚合酶都被限制而不能自由旋转，更可能的图景是 RNA 走直线、DNA 在它下面转动，转录泡在前方打开、在后方合拢。" },
    { type: "short",
      q_en: "Neither tRNA nor rRNA is transcribed at its final length. What happens instead, and what does the rRNA case produce?",
      q_cn: "tRNA 和 rRNA 都不是按最终长度转录出来的。实际发生的是什么？rRNA 这一例最终产生了什么？",
      accept: ["primary transcript", "ribonuclease", "16S", "23S", "前体"],
      answer_en: "They are products of enzymatic post-transcriptional processing: one longer primary transcript is cut by ribonucleases (III, P, F, E, M16, M23, M5, D) in primary and secondary processing steps. For rRNA this single transcript yields the mature 16S, 23S and 5S rRNAs plus several tRNAs.",
      answer_cn: "它们是转录后加工（post-transcriptional processing）的产物：一条较长的初级转录本被核糖核酸酶（III、P、F、E、M16、M23、M5、D）分初级和次级两轮切割。就 rRNA 而言，这一条转录本产生成熟的 16S、23S、5S rRNA，外加若干 tRNA。" }
  ],

  "4-1-5": [
    { type: "mcq",
      q_en: "Nucleosidase cleaves the bond between sugar and base. How does it do it, and what does that reaction resemble?",
      q_cn: "nucleosidase 切开糖与碱基之间的键。它以什么方式进行？这个反应像什么？",
      options: [
        "Phosphorolytically, giving the free base plus ribose-phosphate — essentially the reverse of nucleoside synthesis from a base and PRPP",
        "Hydrolytically, giving the free base plus free ribose",
        "By removing the phosphate group to leave a nucleoside",
        "By oxidising the sugar so the base falls off"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "The book specifies that nucleosidase acts mainly PHOSPHOROLYTICALLY, and the sugar leaves already phosphorylated.", cn: "书上说 nucleosidase 主要以磷酸解方式作用，糖离开时已经带着磷酸。" },
        2: { en: "That is nucleotidase, a phosphatase acting one step earlier — nucleotide to nucleoside.", cn: "那是 nucleotidase，一种磷酸酶，作用在更早一步——核苷酸变核苷。" },
        3: { en: "No oxidation of the sugar is described anywhere in this degradation sequence.", cn: "这条降解序列中没有任何地方描述糖被氧化。" }
      },
      why_en: "Because the products are a free base and ribose-phosphate (rarely ribose-diphosphate), the reaction runs the same chemistry as biosynthesis in reverse: there, PRPP donated the ribose-phosphate to a base. Recognising the symmetry is the point of the cross-reference to 4.1.1.",
      why_cn: "由于产物是游离碱基加核糖-磷酸（少数情况是核糖二磷酸），这个反应的化学本质就是生物合成的逆过程：在合成那边，是 PRPP 把核糖-磷酸交给碱基。看出这种对称性，正是书上回指 4.1.1 的用意。" },
    { type: "mcq",
      q_en: "What happens to the pentose-phosphate released when a nucleotide is split into base and sugar-phosphate?",
      q_cn: "当核苷酸被拆成碱基和糖-磷酸时，放出的戊糖-磷酸去了哪里？",
      options: [
        "It is degraded to beta-alanine together with ammonia and CO2",
        "It is not degraded as part of nucleic acid metabolism at all — it is fed into carbohydrate metabolism",
        "It is oxidised to uric acid and excreted",
        "It is converted to urea in the liver"
      ],
      answer: 1,
      optionRefs: { 3: "5-2-2-2" },
      optionNotes: {
        0: { en: "Beta-alanine is the end product of URACIL degradation — a base, not the sugar.", cn: "beta-丙氨酸是尿嘧啶降解的终产物——那是碱基，不是糖。" },
        2: { en: "Uric acid is the intermediate in mammalian degradation of the PURINE bases, again not the sugar.", cn: "尿酸是哺乳动物嘌呤碱基降解的中间产物，同样不是糖的去向。" },
        3: { en: "Urea is where the purine bases' nitrogen ends up in mammals; the sugar carries no nitrogen to dispose of.", cn: "尿素是哺乳动物中嘌呤碱基的氮的最终归宿；糖上根本没有需要处理的氮。" }
      },
      why_en: "The book is explicit that nucleic acid degradation hands its two halves to two different systems. The sugar-phosphate simply rejoins carbohydrate metabolism, while only the bases follow the dedicated purine and pyrimidine degradation routes.",
      why_cn: "书上说得很明确：核酸降解把两半交给两套不同的系统。糖-磷酸直接并入糖代谢，只有碱基才走各自专门的嘌呤、嘧啶降解路线。" },
    { type: "short",
      q_en: "Uracil and thymine are both pyrimidines, yet their degradation gives different products. What are they?",
      q_cn: "尿嘧啶和胸腺嘧啶同为嘧啶，降解产物却不同。分别是什么？",
      accept: ["beta-alanine", "3-aminobutyric", "β-丙氨酸", "3-氨基丁酸"],
      answer_en: "Uracil is broken down to beta-alanine, together with CO2, ammonia and water. Thymine instead yields 3-aminobutyric acid, plus ammonia and CO2. The pyrimidine bases are degraded by separate routes, unlike the purines, which converge on uric acid and then urea.",
      answer_cn: "尿嘧啶降解为 β-丙氨酸，同时放出 CO2、NH3 和水。胸腺嘧啶则生成 3-氨基丁酸，加上 NH3 和 CO2。嘧啶碱基走的是各自分开的路线，不像嘌呤那样汇合到尿酸再到尿素。" }
  ],

  "4-2-1": [
    { type: "mcq",
      q_en: "What does degeneracy of the genetic code actually mean, according to Tab. 4.3?",
      q_cn: "按 Tab. 4.3 的说法，遗传密码的简并性到底指什么？",
      options: [
        "One codon can specify several different amino acids depending on context",
        "Some amino acids are specified by several triplets — up to six for some, four, three or two for others, and just one for a few",
        "Every amino acid is specified by exactly three triplets",
        "There are 64 amino acids, one for each triplet"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "This reverses the mapping. The redundancy runs many-codons-to-one-amino-acid, never one-codon-to-many.", cn: "这把对应关系反过来了。冗余是「多个密码子对应一个氨基酸」，绝不是「一个密码子对应多个氨基酸」。" },
        2: { en: "A fixed number per amino acid would not be degeneracy at all — the whole point is that the number varies from six down to one.", cn: "每种氨基酸对应固定个数就谈不上简并了——关键正在于这个数目从六一直变到一。" },
        3: { en: "There are 64 triplets but only 20 amino acids in natural proteins; the surplus is exactly what creates degeneracy.", cn: "三联体有 64 种，而天然蛋白质中的氨基酸只有 20 种；多出来的部分正是简并性的来源。" }
      },
      why_en: "Twenty amino acids cannot be spelled by singlets (4) or doublets (16), so the code uses triplets, and 4 cubed = 64 gives far more combinations than are needed. The surplus is spent on redundancy: some amino acids get six triplets, others four, three, two or one.",
      why_cn: "20 种氨基酸没法用单个（4 种）或两个（16 种）核苷酸拼出来，所以密码必须是三联体，而 4 的三次方 = 64，组合数远多于所需。多出来的部分就用在冗余上：有的氨基酸对应六个三联体，有的四个、三个、两个，也有的只有一个。" },
    { type: "mcq",
      q_en: "Which statement about the codon AUG is correct?",
      q_cn: "关于密码子 AUG，哪一条正确？",
      options: [
        "It codes methionine and ALSO serves as the initiation codon, so it marks both starts and internal methionines",
        "It is used only at the start of a chain and never inside one",
        "It codes methionine only in eukaryotes; in bacteria it is a stop codon",
        "UAA is the initiation codon and AUG one of the terminators"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Dropping the internal role is precisely the problem the ribosome has to solve, since AUG appears in both positions.", cn: "把「链内也用」这一层去掉，恰恰抹掉了核糖体必须解决的那个难题——AUG 在两种位置上都会出现。" },
        2: { en: "The code for amino acids is universal for all organisms, with only the UGA/selenocysteine case noted as an exception.", cn: "氨基酸的遗传密码对所有生物都是通用的，书上只标出 UGA/硒代半胱氨酸这一个例外。" },
        3: { en: "The terminators are UAA, UAG and UGA; AUG is not among them.", cn: "终止密码子是 UAA、UAG、UGA；AUG 不在其中。" }
      },
      why_en: "AUG carries two meanings at once: it is the codon for methionine wherever it appears, and it is also the initiation codon. Because one triplet cannot by itself say which meaning applies, the start site has to be marked by something outside the codon.",
      why_cn: "AUG 同时有两重含义：无论出现在哪里它都编码 methionine，同时它又是起始密码子。既然单凭一个三联体无法区分这两种含义，起始位点就必须由密码子之外的东西来标记。" },
    { type: "short",
      q_en: "What is the relationship between a codon and an anticodon, and where does each one sit?",
      q_cn: "密码子和反密码子是什么关系？各自位于什么地方？",
      accept: ["anticodon", "complementary", "反密码子", "互补", "tRNA"],
      answer_en: "A codon is a group of three nucleotides in the mRNA that determines the addition of one amino acid. The anticodon is the complementary triplet sitting on the anticodon loop of the corresponding tRNA; codon and anticodon pair by complementarity, which is how the mRNA sequence is read one amino acid at a time.",
      answer_cn: "密码子是 mRNA 上决定加入一个氨基酸的三个核苷酸。反密码子是相应 tRNA 反密码子环上与之互补的三联体；两者靠互补配对，mRNA 序列就是这样被一次一个氨基酸地读出来的。" }
  ],

  "4-2-2": [
    { type: "mcq",
      q_en: "Which pair of subunit sizes is right for prokaryotic and eukaryotic ribosomes?",
      q_cn: "原核和真核核糖体的亚基大小，哪一组是对的？",
      options: [
        "Prokaryotes 40S + 60S; eukaryotes 30S + 50S",
        "Prokaryotes 30S + 50S; eukaryotes 40S + 60S",
        "Both use 30S + 50S; only the total differs",
        "Prokaryotes have a single undivided 70S particle with no subunits"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The two organism types are swapped; the eukaryotic subunits are the larger pair.", cn: "两类生物对调了；真核的那一对亚基更大。" },
        2: { en: "The subunits themselves differ between the two, not just the sum.", cn: "两者的亚基本身就不同，不只是加起来的总数不同。" },
        3: { en: "The 70S E. coli ribosome is explicitly built from a small and a large subunit, which can even dissociate under certain conditions.", cn: "大肠杆菌的 70S 核糖体明确由一个小亚基和一个大亚基组成，特定条件下还能解离。" }
      },
      why_en: "Every ribosome is built from a small and a large subunit: 30S and 50S in prokaryotes, 40S and 60S in eukaryotes. The E. coli particle is 70S overall, about 20 nm across and about 2,700 kDa.",
      why_cn: "所有核糖体都由一个小亚基和一个大亚基组成：原核是 30S 和 50S，真核是 40S 和 60S。大肠杆菌的整个颗粒是 70S，直径约 20 nm，质量约 2,700 kDa。" },
    { type: "mcq",
      q_en: "How densely can ribosomes be packed on one mRNA in a polysome?",
      q_cn: "在多聚核糖体中，核糖体在一条 mRNA 上最密可以排到什么程度？",
      options: [
        "About 5 to 15 nm apart, giving a maximum of roughly one ribosome per 80 nucleotides",
        "About one ribosome per 1,000 to 2,000 nucleotides",
        "They touch each other, with no gap at all",
        "Only one ribosome can occupy an mRNA at a time"
      ],
      answer: 0,
      optionRefs: { 1: "4-1-3-2" },
      optionNotes: {
        1: { en: "1,000 to 2,000 nucleotides is the length of an Okazaki fragment in DNA replication — a number from a different process entirely.", cn: "1,000–2,000 个核苷酸是 DNA 复制中 Okazaki 片段的长度，是完全另一个过程的数字。" },
        2: { en: "There is a defined spacing of 5 to 15 nm between neighbouring ribosomes.", cn: "相邻核糖体之间有明确的 5–15 nm 间距。" },
        3: { en: "That is exactly what a polysome is not: many ribosomes translate one message simultaneously.", cn: "多聚核糖体恰恰不是这样：许多核糖体同时翻译同一条信息。" }
      },
      why_en: "Ribosomes in a polysome sit 5 to 15 nm apart, about one per 80 nucleotides at maximum density. The reason they can pack this way is that a ribosome is released from the initiation sequence as soon as it has been activated, freeing that stretch for the next one.",
      why_cn: "多聚核糖体上的核糖体相隔 5–15 nm，最密时约每 80 个核苷酸一个。之所以能排这么密，是因为一个核糖体一旦被起始序列激活就立即被释放，那段序列随即空出来给下一个。" },
    { type: "short",
      q_en: "Ribosomes are called ribonucleoprotein particles. What are the two components, and what does the protein component actually do?",
      q_cn: "核糖体被称为核糖核蛋白颗粒。它由哪两部分组成？其中的蛋白质部分实际做什么？",
      accept: ["rRNA", "enzyme", "factor", "酶", "因子"],
      answer_en: "They are built from rRNA and proteins. The proteins are not merely structural: a number of them are enzymes, or factors that participate directly in protein synthesis.",
      answer_cn: "由 rRNA 和蛋白质构成。其中的蛋白质不只是起结构作用：相当一部分本身就是酶，或是直接参与蛋白质合成的因子。" }
  ],

  "4-2-3-1": [
    { type: "mcq",
      q_en: "Amino acid activation runs in two steps. What is formed at each?",
      q_cn: "氨基酸活化分两步进行，每一步分别生成什么？",
      options: [
        "The amino acid is phosphorylated by ATP to ADP, then dehydrated onto the tRNA",
        "First aminoacyl-adenylate (aminoacyl-AMP) plus pyrophosphate; then the activated amino acid is transferred onto tRNA, releasing AMP",
        "First a peptide bond to the tRNA, then hydrolysis of GTP",
        "GTP provides the energy in both steps, with EF-Tu as the catalyst"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "ATP is cleaved to AMP plus pyrophosphate here, not to ADP, and the amino acid is attached by an ester bond, not by dehydration onto the tRNA.", cn: "这里 ATP 是裂解成 AMP 加焦磷酸，不是变成 ADP；氨基酸靠酯键连上去，不是脱水连上去。" },
        2: { en: "The bond to tRNA is an ESTER bond from the amino acid's carboxyl to the 2-OH or 3-OH of the terminal AMP — a peptide bond is what gets made later, on the ribosome.", cn: "与 tRNA 之间是酯键，由氨基酸的羧基连到末端 AMP 的 2′-OH 或 3′-OH 上——肽键是后来在核糖体上才形成的。" },
        3: { en: "GTP and EF-Tu belong to the delivery step during elongation, not to activation, which is ATP-driven and happens in the cytosol.", cn: "GTP 和 EF-Tu 属于延伸阶段的运送环节，不属于活化；活化由 ATP 驱动，发生在胞质中。" }
      },
      why_en: "Aminoacyl-tRNA synthetases first condense the amino acid with ATP to give aminoacyl-adenylate and pyrophosphate, which is promptly hydrolysed to two Pi and pulls the reaction forward. The activated amino acid is then transferred to the tRNA's CCA end with release of AMP.",
      why_cn: "aminoacyl-tRNA synthetase 先让氨基酸与 ATP 缩合，生成氨酰腺苷酸和焦磷酸，后者随即水解成两个 Pi，把反应拉向前。接着活化的氨基酸被转移到 tRNA 的 CCA 端，放出 AMP。" },
    { type: "mcq",
      q_en: "Where does the Shine-Dalgarno sequence sit, and what problem does it solve?",
      q_cn: "Shine-Dalgarno 序列位于什么地方？它解决的是什么问题？",
      options: [
        "It is a pyrimidine-rich sequence at the 3-prime end of 16S-rRNA that base-pairs with mRNA about 10 nucleotides upstream of AUG, letting the ribosome pick out the true start codon",
        "It is a sequence in eukaryotic mRNA that pairs with 18S-rRNA",
        "It is the anticodon of the initiator tRNA",
        "It is a sequence on 23S-rRNA that positions the peptidyl-transferase"
      ],
      answer: 0,
      optionRefs: { 1: "4-2-3-2" },
      optionNotes: {
        1: { en: "Eukaryotic mRNA has no Shine-Dalgarno-type pairing at all — it uses the cap and eIF-4F plus scanning of the 40S subunit instead.", cn: "真核 mRNA 根本没有 Shine-Dalgarno 式的配对——它靠帽子结构、eIF-4F 以及 40S 亚基的扫描来定位。" },
        2: { en: "The initiator tRNA's binding is notable for NOT being strictly governed by codon-anticodon pairing; the Shine-Dalgarno signal is on the rRNA/mRNA side.", cn: "起始 tRNA 的结合恰恰以「不严格受密码子-反密码子配对支配」著称；Shine-Dalgarno 信号在 rRNA/mRNA 这一侧。" },
        3: { en: "Peptidyl-transferase is an activity of the large subunit, and no positioning sequence of this kind is described for it.", cn: "肽基转移酶是大亚基的活性，书上并没有为它描述这样一段定位序列。" }
      },
      why_en: "AUG marks both the start of translation and internal methionines, so an extra signal is needed. Base-pairing between the pyrimidine-rich 3-prime end of 16S-rRNA and a complementary stretch of the mRNA, centred about 10 nucleotides upstream of AUG, is what identifies the correct initiation codon.",
      why_cn: "AUG 既标记翻译起点，也标记链内的 methionine，所以需要额外信号。16S-rRNA 3′ 端富含嘧啶的一段与 mRNA 上互补序列配对（中心大约在 AUG 上游 10 个核苷酸处），正是靠这个来认出真正的起始密码子。" },
    { type: "mcq",
      q_en: "EF-Tu, EF-Ts and EF-G all act during elongation. Which division of labour is correct?",
      q_cn: "EF-Tu、EF-Ts、EF-G 都在延伸阶段起作用。哪一种分工描述正确？",
      options: [
        "EF-Tu drives translocation; EF-G delivers aminoacyl-tRNA; EF-Ts forms the peptide bond",
        "EF-Tu (with GTP) delivers aminoacyl-tRNA to the A-site; EF-Ts regenerates EF-Tu-GTP; EF-G (with GTP) drives translocation",
        "All three are needed simultaneously at every step of the cycle",
        "EF-G forms the peptide bond, replacing peptidyl-transferase"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The first two roles are swapped, and no elongation factor forms the peptide bond — that is peptidyl-transferase, in the large subunit.", cn: "前两个角色对调了；而且没有哪个延伸因子会形成肽键——形成肽键的是大亚基的 peptidyl-transferase。" },
        2: { en: "They cannot be: EF-G and EF-Tu binding are mutually exclusive, so EF-G must be released before the next cycle begins.", cn: "不可能：EF-G 与 EF-Tu 的结合是互斥的，所以下一轮开始前必须先把 EF-G 放掉。" },
        3: { en: "EF-G drives translocation; the peptide bond is made by peptidyl-transferase during transpeptidation.", cn: "EF-G 驱动的是移位；肽键是在转肽步骤中由 peptidyl-transferase 形成的。" }
      },
      why_en: "One cycle is binding, transpeptidation, translocation. EF-Tu-GTP delivers the aminoacyl-tRNA as a ternary complex, hydrolysing GTP on correct codon-anticodon pairing; EF-Ts then regenerates EF-Tu-GTP from EF-Tu-GDP; and EF-G, again with GTP hydrolysis, moves peptidyl-tRNA and mRNA one codon along.",
      why_cn: "一个循环包括结合、转肽、移位。EF-Tu·GTP 以三元复合物的形式送来氨酰-tRNA，在密码子-反密码子正确配对时水解 GTP；EF-Ts 随后把 EF-Tu·GDP 再生成 EF-Tu·GTP；EF-G 同样水解 GTP，把肽基-tRNA 连同 mRNA 推进一个密码子。" },
    { type: "short",
      q_en: "Why must an amino acid be activated before it can be built into a protein, and where does this happen?",
      q_cn: "为什么氨基酸必须先活化才能装进蛋白质？活化在哪里进行？",
      accept: ["ATP", "tRNA", "aminoacyl", "活化", "能级"],
      answer_en: "Proteins cannot be formed directly from free amino acids: each amino acid must first be raised to a higher energy level as aminoacyl-tRNA. This happens in the cytoplasm, catalysed by aminoacyl-tRNA synthetases, which are specific for each amino acid and its tRNA, need essential -SH groups and require Mg as cofactor.",
      answer_cn: "蛋白质不能直接由游离氨基酸生成：每个氨基酸必须先被提到更高的能级，形成氨酰-tRNA。这一步在胞质中进行，由 aminoacyl-tRNA synthetase 催化——该酶对每种氨基酸及其 tRNA 都是专一的，需要必需的 -SH 基团，并以 Mg 为辅因子。" }
  ],

  "4-2-3-2": [
    { type: "mcq",
      q_en: "How is stop-codon recognition divided between the bacterial release factors?",
      q_cn: "细菌的释放因子之间，终止密码子的识别是怎么分工的？",
      options: [
        "RF-1 recognises UAA or UAG; RF-2 recognises UAA or UGA; RF-3 binds GTP and stimulates the binding of the other two",
        "RF-1 recognises all three stop codons; RF-2 and RF-3 recycle the ribosome",
        "RF-1 recognises UGA only; RF-2 recognises UAG only; RF-3 recognises UAA only",
        "A single factor, eRF, recognises all three stop codons"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Recycling the ribosome is the job of RRF together with EF-G, not of RF-2 and RF-3.", cn: "回收核糖体是 RRF 与 EF-G 的工作，不是 RF-2 和 RF-3 的。" },
        2: { en: "The two reading factors OVERLAP on UAA — that shared codon is why the division is two-plus-one, not three-way.", cn: "两个识别因子在 UAA 上是重叠的——正因为共享这个密码子，分工才是「二加一」而不是「一人一个」。" },
        3: { en: "That is the EUKARYOTIC arrangement, contrasted in this same node with bacteria's RF-1/RF-2/RF-3 division of labour.", cn: "那是真核的做法，本节正是把它与细菌的 RF-1/RF-2/RF-3 分工作对比的。" }
      },
      why_en: "RF-1 and RF-2 each read two of the three stop codons, overlapping on UAA, and both act at the A-site; neither can bind at the same time as EF-G. RF-3, with GTP, does not read a codon itself — it stimulates the binding of RF-1 and RF-2.",
      why_cn: "RF-1 和 RF-2 各识别三个终止密码子中的两个，在 UAA 上重叠，二者都作用于 A 位；它们都不能与 EF-G 同时结合。RF-3 结合 GTP，本身不识别密码子——它的作用是促进 RF-1/RF-2 的结合。" },
    { type: "mcq",
      q_en: "What does the ribosome-releasing factor (RRF) do?",
      q_cn: "核糖体释放因子（RRF）的作用是什么？",
      options: [
        "It recognises the stop codon in the A-site",
        "It transfers the peptidyl group onto water",
        "Together with EF-G and GTP hydrolysis, it releases the inactive ribosome from mRNA and helps dissociate it back into 30S and 50S subunits",
        "It removes the N-terminal formylmethionine from the finished chain"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Stop-codon recognition is the release factors' job (RF-1/RF-2, stimulated by RF-3).", cn: "识别终止密码子是释放因子（RF-1/RF-2，由 RF-3 促进）的工作。" },
        1: { en: "That transfer is INDUCED by release-factor binding and is the chemical heart of termination; RRF acts afterwards.", cn: "那次转移是释放因子结合后诱导发生的，是终止反应的化学核心；RRF 是在其后才起作用的。" },
        3: { en: "Trimming the formyl group or the whole formylmethionine is done later by hydrolytic enzymes, and varies between species.", cn: "切掉甲酰基或整个甲酰甲硫氨酸是随后由水解酶完成的，而且不同物种做法不同。" }
      },
      why_en: "After the peptide has been hydrolysed off and the deaminoacylated tRNA has left, the ribosome is still sitting on the mRNA and is inactive. RRF, with EF-G and the energy of GTP hydrolysis, takes it off the message and splits it back into subunits — which is what makes protein synthesis a cyclical process.",
      why_cn: "肽链被水解下来、脱酰基的 tRNA 也离开之后，核糖体仍留在 mRNA 上且已失活。RRF 与 EF-G 一起、借 GTP 水解的能量，把它从信息链上取下并重新解离成亚基——蛋白质合成之所以是一个循环过程，靠的就是这一步。" },
    { type: "short",
      q_en: "The finished bacterial polypeptide still begins with formylmethionine. What happens to that end afterwards?",
      q_cn: "刚合成好的细菌多肽 N 端仍带着甲酰甲硫氨酸。这个末端随后会怎样？",
      accept: ["formyl", "hydrolytic", "甲酰", "切除"],
      answer_en: "Hydrolytic enzymes adjust the beginning of the chain, and how far they go differs between species: they may cleave off just the formyl group, or the whole formylmethionine residue, or even several of the first amino acids.",
      answer_cn: "由水解酶来修整链的起始端，不同物种修整的程度不同：可能只切掉甲酰基，也可能把整个甲酰甲硫氨酸残基切掉，甚至切掉最前面的好几个氨基酸。" }
  ],

  "4-2-4-1": [
    { type: "mcq",
      q_en: "Which parts of the lac system are the STRUCTURAL genes, and what do they encode?",
      q_cn: "lac 系统中哪些部分是结构基因？它们编码什么？",
      options: [
        "Genes Z, Y and A, encoding beta-galactosidase, galactoside permease and thiogalactoside transacetylase",
        "Genes P and O, encoding the repressor and the inducer",
        "Gene I alone, encoding all three lac enzymes",
        "The operator and the attenuator together"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "P and O are the regulatory (control) site of the operon, not genes for proteins; the repressor is the product of the separate regulator gene I, and the inducer is a small-molecule effector, not a gene product.", cn: "P 和 O 是操纵子的调控位点，不是编码蛋白质的基因；阻遏物是另一个调节基因 I 的产物，而诱导物是小分子效应物，根本不是基因产物。" },
        2: { en: "Gene I sits BESIDE the operon and encodes only the repressor.", cn: "基因 I 位于操纵子旁边，只编码阻遏物。" },
        3: { en: "The attenuator belongs to the trp-operon, and neither it nor the operator encodes a protein.", cn: "衰减子属于 trp 操纵子，而且它和操纵基因都不编码蛋白质。" }
      },
      why_en: "An operon has two parts: the regulatory site (promoter gene P plus operator gene O) and the structural genes. For lac these are Z, Y and A, encoding beta-galactosidase, galactoside permease and thiogalactoside transacetylase. The regulator gene I lies outside the operon proper and makes the diffusible repressor.",
      why_cn: "一个操纵子分两部分：调控位点（启动子基因 P 和操纵基因 O）与结构基因。lac 的结构基因是 Z、Y、A，分别编码 beta-半乳糖苷酶、半乳糖苷透过酶和硫代半乳糖苷转乙酰酶。调节基因 I 位于操纵子本体之外，产生可扩散的阻遏物。" },
    { type: "mcq",
      q_en: "In trp attenuation, what happens when tryptophan is PLENTIFUL?",
      q_cn: "在 trp 衰减调控中，色氨酸充足时会发生什么？",
      options: [
        "The ribosome stalls at the tandem Trp codons, so the 2-3 antiterminator forms and transcription continues",
        "The ribosome, positioned in region 2, prevents hairpin 2-3 from forming; hairpin 3-4 forms instead and acts as a terminator, so transcription stops",
        "The repressor binds the attenuator and blocks RNA-polymerase directly",
        "RNA-polymerase transcribes the leader sequence and then translates it into a functional enzyme"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "That is the LOW-tryptophan case, where scarcity of charged tRNA-Trp stalls the ribosome and the antiterminator wins.", cn: "那是色氨酸缺乏的情形：带电 tRNA-Trp 不足使核糖体停滞，抗终止发夹得以形成。" },
        2: { en: "Attenuation works without any repressor protein — the decisive element is where the translating ribosome sits on the leader mRNA.", cn: "衰减调控不需要任何阻遏蛋白——决定性因素是正在翻译的核糖体停在前导 mRNA 的什么位置。" },
        3: { en: "The leader sequence (trpL, 162 nucleotides) is transcribed but never translated into a peptide product of its own.", cn: "前导序列（trpL，162 个核苷酸）会被转录，但从不翻译成它自己的肽产物。" }
      },
      why_en: "Attenuation is decided in real time by ribosome position. With tryptophan plentiful the ribosome runs on into region 2 and physically blocks the 2-3 hairpin; that lets the 3-4 hairpin form, which is a transcription terminator, so only the short leader transcript is made.",
      why_cn: "衰减是由核糖体的位置实时决定的。色氨酸充足时核糖体顺利前进到区域 2，从物理上挡住 2-3 发夹的形成；于是 3-4 发夹得以形成，它就是转录终止子，结果只合成出那段短的前导转录本。" },
    { type: "mcq",
      q_en: "What is the abortive initiation described at the lac promoter, and what ends it?",
      q_cn: "书上在 lac 启动子处描述的「流产起始」是什么？是什么让它停止的？",
      options: [
        "RNA-polymerase repeatedly makes short RNA oligomers up to 9 nucleotides long until the sigma factor is released and the promoter freed",
        "RNA-polymerase makes an RNA primer of up to 60 nucleotides which is later excised",
        "The repressor repeatedly binds and falls off the operator until the inducer arrives",
        "The core enzyme repeatedly fails to bind until a corepressor stabilises it"
      ],
      answer: 0,
      optionRefs: { 1: "4-1-3-2" },
      optionNotes: {
        1: { en: "An RNA segment of up to 60 nucleotides is the PRIMER made for DNA replication, later excised by DNA polymerase I — a different process entirely.", cn: "长达 60 个核苷酸的 RNA 段是 DNA 复制用的引物，后来由 DNA polymerase I 切除——完全是另一个过程。" },
        2: { en: "Repressor binding is the operator-level switch; abortive initiation is about what the polymerase itself does at the open complex.", cn: "阻遏物结合属于操纵基因层面的开关；流产起始讲的是聚合酶自身在开放复合物处的行为。" },
        3: { en: "A corepressor strengthens repression by acting on the repressor; it has nothing to do with the core enzyme, despite the similar word.", cn: "辅阻遏物是作用于阻遏物、加强阻遏的；虽然名字相近，它与核心酶（core enzyme）无关。" }
      },
      why_en: "The holoenzyme (alpha2-beta-beta-prime-sigma) forms an open complex with the promoter and starts making short RNA oligomers, up to 9 nucleotides, over and over. This premature, abortive phase stops once sigma is released and the promoter is freed, after which the core enzyme carries out real elongation.",
      why_cn: "全酶（α2ββ′σ）与启动子形成开放复合物，反复合成不超过 9 个核苷酸的短 RNA 寡聚物。这个不成熟的流产阶段在 sigma 因子释放、启动子空出之后结束，接着由核心酶进行真正的延伸。" },
    { type: "short",
      q_en: "How many binding sites does the lac repressor actually have on the lac-operon, and what is unusual about the operator's sequence?",
      q_cn: "lac 阻遏物在 lac 操纵子上实际有几个结合位点？操纵基因的序列有什么特别之处？",
      accept: ["palindrom", "O1", "pseudo-operator", "回文"],
      answer_en: "Three: the primary operator O1, which overlaps the lac promoter, plus two pseudo-operators, O2 and O3, lying inside gene lacZ. The operator gene has an almost palindromic structure, which is what makes it easy for the repressor protein to bind that region of DNA.",
      answer_cn: "三个：主操纵基因 O1（它与 lac 启动子重叠），加上位于 lacZ 基因内部的两个假操纵基因 O2 和 O3。操纵基因的序列近乎回文，正是这一点让阻遏蛋白容易结合到这段 DNA 上。" }
  ],

  "4-2-4-2": [
    { type: "mcq",
      q_en: "What is chemically unusual about the 5-prime cap of eukaryotic mRNA?",
      q_cn: "真核 mRNA 的 5′ 帽子在化学上有什么不寻常之处？",
      options: [
        "A 7-methylguanosine joined to the first nucleotide of the transcript by an unusual 5-prime-5-prime triphosphate bridge",
        "A 7-methylguanosine joined by an ordinary 3-prime-5-prime phosphodiester bond",
        "A tail of 20 to 250 adenine nucleotides placed at the 5-prime end",
        "A conserved AAUAA pentanucleotide at the very 5-prime end"
      ],
      answer: 0,
      optionRefs: { 1: "4-1-2" },
      optionNotes: {
        1: { en: "The 3-prime-5-prime phosphodiester bond is the ORDINARY backbone linkage of every nucleic acid; what makes the cap notable is that it is not that bond.", cn: "3′-5′ 磷酸二酯键是所有核酸都有的普通骨架连接；帽子结构之所以引人注意，正是因为它用的不是这种键。" },
        2: { en: "That describes the poly(A) tail, which is at the 3-prime end and is built by poly(A)-polymerase.", cn: "那说的是 poly(A) 尾巴，它在 3′ 端，由 poly(A)-polymerase 合成。" },
        3: { en: "AAUAA is the conserved signal near the 3-prime cleavage/polyadenylation site, not part of the cap.", cn: "AAUAA 是 3′ 端切割/加尾位点附近的保守信号，不属于帽子结构。" }
      },
      why_en: "The cap is a 7-methylguanosine attached through a 5-prime-5-prime triphosphate bridge, so the two sugars face each other head to head instead of running head to tail. Further 2-OH methylation of the first nucleoside gives cap-1, of the first two nucleotides cap-2; without it the structure is cap-0.",
      why_cn: "帽子是一个 7-甲基鸟苷，通过 5′-5′ 三磷酸桥连接，所以两个糖是头对头相接，而不是通常的头尾相连。若第一个核苷的核糖 2′-OH 也被甲基化则为 cap-1，前两个核苷酸都被甲基化则为 cap-2；不再修饰的就是 cap-0。" },
    { type: "mcq",
      q_en: "How long is the poly(A) tail, and how is it made?",
      q_cn: "poly(A) 尾巴有多长？是怎么形成的？",
      options: [
        "20 to 250 nucleotides, built from ATP by poly(A)-polymerase after the transcript is cleaved 15 to 25 nucleotides downstream of AAUAA",
        "1,000 to 2,000 nucleotides, copied directly from a poly(T) stretch in the DNA",
        "Up to 9 nucleotides, made during abortive initiation",
        "About 120 nucleotides, cut out of the primary transcript by ribonucleases"
      ],
      answer: 0,
      optionRefs: { 1: "4-1-3-2", 2: "4-2-4-1" },
      optionNotes: {
        1: { en: "1,000 to 2,000 nucleotides is the size of an Okazaki fragment in DNA replication; and the tail is built enzymatically from ATP, not copied from a template.", cn: "1,000–2,000 个核苷酸是 DNA 复制中 Okazaki 片段的长度；而且尾巴是由 ATP 酶促合成的，不是照模板抄出来的。" },
        2: { en: "Oligomers of up to 9 nucleotides are the abortive initiation products of RNA-polymerase at the promoter.", cn: "不超过 9 个核苷酸的寡聚物，是 RNA 聚合酶在启动子处流产起始的产物。" },
        3: { en: "About 120 nucleotides is the length of 5S rRNA, produced by processing, not the poly(A) tail.", cn: "约 120 个核苷酸是 5S rRNA 的长度，由加工产生，与 poly(A) 尾无关。" }
      },
      why_en: "Polyadenylation is two reactions: the primary transcript is first cleaved 15 to 25 nucleotides downstream of a highly conserved AAUAA pentanucleotide (mutating AAUAA blocks both cleavage and polyadenylation), and poly(A)-polymerase then builds a tail of 20 to 250 adenine nucleotides from ATP.",
      why_cn: "加尾分两个反应：初级转录本先在高度保守的 AAUAA 五核苷酸下游 15–25 个核苷酸处被切开（突变 AAUAA 会同时阻断切割和加尾），随后 poly(A)-polymerase 以 ATP 为原料建起 20–250 个腺苷酸的尾巴。" },
    { type: "mcq",
      q_en: "The book raises the possibility that a small fraction of hnRNA escapes normal processing. What is the consequence it draws from this?",
      q_cn: "书上提出，有一小部分 hnRNA 可能逃过正常加工。它由此推出的结论是什么？",
      options: [
        "Introns are never transcribed in the first place",
        "Those retained intron stretches are translated as part of the protein's sequence, giving related proteins of higher molecular weight — so a single gene could encode several different proteins",
        "The unprocessed hnRNA is degraded in the nucleus, so nothing reaches the cytoplasm",
        "Introns are removed before transcription, at the DNA level"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Introns are transcribed right along with exons — that is exactly why hnRNA is much longer than mature mRNA and has to be spliced.", cn: "内含子是与外显子一起被转录的——正因为如此 hnRNA 才远长于成熟 mRNA，必须经过剪接。" },
        2: { en: "The point of the hypothesis is the opposite: this fraction does reach the cytoplasm and gets translated, introns and all.", cn: "这个假说的意思恰好相反：这部分确实到达了胞质并被翻译，连内含子一起翻译。" },
        3: { en: "Nothing is removed at the DNA level; splicing acts on the primary transcript after transcription.", cn: "DNA 层面不发生任何切除；剪接作用于转录之后的初级转录本。" }
      },
      why_en: "Because introns are transcribed and only removed afterwards, a transcript that skips part of that removal keeps extra coding material. The book takes this as a route to related, higher-molecular-weight proteins from one gene — a second regulatory layer alongside selective mRNA transport into the cytoplasm.",
      why_cn: "由于内含子是先转录、事后才切除的，一条漏掉部分切除的转录本就保留了额外的可翻译片段。书上据此认为，同一个基因可以由此产生相关的、分子量更大的蛋白质——这是与「mRNA 选择性运输入胞质」并列的第二层调控。" },
    { type: "short",
      q_en: "Eukaryotic translation initiation is itself gated by a proinhibitor and an inhibitor. What converts one into the other, and what is the twist about cAMP here?",
      q_cn: "真核翻译起始本身还受一个前抑制物和一个抑制物的调控。什么把前者变成后者？这里关于 cAMP 有什么反常之处？",
      accept: ["cAMP", "protein kinase", "蛋白激酶", "磷酸化"],
      answer_en: "The proinhibitor is converted into the active inhibitor by phosphorylation, catalysed by a protein kinase that IS cAMP-dependent. The twist is that the inhibitor itself is also a protein kinase — but that one is NOT regulated by cAMP.",
      answer_cn: "前抑制物通过磷酸化转变为有活性的抑制物，催化这一步的蛋白激酶是依赖 cAMP 的。反常之处在于：抑制物本身也是一种蛋白激酶，但这一个并不受 cAMP 调节。" }
  ],

  "4-3-1": [
    { type: "mcq",
      q_en: "Post-translational modification is divided into three types of process. Which list is the book's?",
      q_cn: "书上把翻译后修饰分成三类过程。哪一组是书上的分法？",
      options: [
        "Phosphorylation, methylation and glycosylation",
        "Non-covalent interactions determining spatial arrangement; covalent modification of the backbone, especially for transport out of the cell; and covalent modification of amino acid side chains",
        "Folding, transport and degradation",
        "Capping, polyadenylation and splicing"
      ],
      answer: 1,
      optionRefs: { 0: "4-3-3", 3: "4-2-4-2" },
      optionNotes: {
        0: { en: "Those are three of the six SIDE-CHAIN modifications, i.e. members of the third category, not the three categories themselves.", cn: "那是六种侧链修饰中的三种，属于第三类的内部成员，而不是三大类本身。" },
        2: { en: "Degradation is not one of the three; and folding here is the outcome of the first category, not a category name.", cn: "降解不在这三类之内；而折叠是第一类的结果，不是类别的名称。" },
        3: { en: "Capping, polyadenylation and splicing are RNA processing steps, applied to the transcript before translation ever happens.", cn: "加帽、加尾、剪接是 RNA 加工步骤，发生在翻译之前，作用于转录本。" }
      },
      why_en: "The three categories are structural rather than chemical: what holds the chain in shape without covalent change, what cuts or alters the backbone (largely for export), and what is done to the side chains. Section 4.3.1 covers only the first, 4.3.2 the second, 4.3.3 the third.",
      why_cn: "这三类是按性质而非按化学反应划分的：不改变共价结构而决定构象的相互作用；改动主链本身的共价修饰（主要服务于分泌）；以及针对侧链的共价修饰。4.3.1 只讲第一类，4.3.2 讲第二类，4.3.3 讲第三类。" },
    { type: "mcq",
      q_en: "What exactly does protein-disulfide-isomerase do, and why is it needed at all?",
      q_cn: "protein-disulfide-isomerase 到底做什么？为什么需要它？",
      options: [
        "It creates the very first disulfide bond by oxidising thiols with oxidised glutathione",
        "It exchanges disulfide bonds between pairs of cysteine residues, correcting mispaired S-S bonds, because forming an S-S bond is not inherently specific",
        "It rotates the X-Pro peptide bond between cis and trans",
        "It encloses the substrate in a barrel-shaped folding chamber"
      ],
      answer: 1,
      optionRefs: { 0: "4-3-3" },
      optionNotes: {
        0: { en: "Oxidised glutathione accepting hydrogens from thiols is how proinsulin's disulfides are formed; the isomerase's job is correction, not creation.", cn: "氧化型谷胱甘肽从巯基接受氢，是 proinsulin 二硫键的形成方式；异构酶的任务是纠正，不是从无到有地生成。" },
        2: { en: "That is peptidylprolyl-cis,trans-isomerase (PPIase), the second corrective enzyme in Obr. 4.54.", cn: "那是 peptidylprolyl-cis,trans-isomerase（PPIase），Obr. 4.54 里的第二个纠错酶。" },
        3: { en: "The enclosed chamber is the GroEL/GroES chaperonin, a folding system, not a disulfide-editing enzyme.", cn: "那种封闭腔室是 GroEL/GroES 分子伴侣蛋白，属于折叠系统，不是编辑二硫键的酶。" }
      },
      why_en: "Oxidation of two neighbouring cysteine thiols to a disulfide contributes a lot of stability, but the reaction itself has no way of picking the right partners. In a protein with several cysteines the wrong pairing can therefore form, and the isomerase exists to shuffle the bonds until the correct arrangement is reached.",
      why_cn: "把相邻两个半胱氨酸的巯基氧化成二硫键能显著增加稳定性，但这个反应本身没有办法挑对配对对象。半胱氨酸较多的蛋白质因而可能配错，异构酶的存在就是为了不断交换这些键，直到达到正确的配对。" },
    { type: "short",
      q_en: "This section links a purely structural mistake to actual disease. What does it say?",
      q_cn: "本节把一个纯结构上的错误与实际疾病联系了起来。它是怎么说的？",
      accept: ["neurological", "disease", "神经", "疾病"],
      answer_en: "Various serious neurological diseases are caused precisely by incorrect arrangement of protein structures. This is the practical reason the biologically active conformation and the lowest-energy conformation cannot be assumed to be the same molecule, and why folding of many nascent chains has to be guided rather than left to happen.",
      answer_cn: "多种严重的神经系统疾病，正是由蛋白质结构排布错误引起的。这也正是为什么不能想当然地认为「生物学活性构象」就等于「能量最低构象」，以及为什么许多新生肽链的折叠必须被引导，而不能任其自行发生。" }
  ],

  "4-3-2": [
    { type: "mcq",
      q_en: "What does the signal recognition particle (SRP) do, and what becomes of it?",
      q_cn: "信号识别颗粒（SRP）做什么？它最后怎么样了？",
      options: [
        "It binds specifically to the already-synthesised signal sequence, docks the ribosome via its own receptor on the ER membrane, and is then released to bind another signal sequence",
        "It cleaves the signal sequence off once that sequence appears in the ER lumen",
        "It stays bound to the ribosome until translation is finished",
        "It forms the pore through which the growing chain threads into the ER"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Cleavage is done by signal peptidase, a membrane-bound enzyme acting on the lumenal side.", cn: "切除由 signal peptidase 完成，那是一种膜结合酶，在腔面一侧起作用。" },
        2: { en: "SRP is released as soon as the ribosome has attached, precisely so that it can be reused on the next signal sequence.", cn: "核糖体一旦附着，SRP 就被释放，正是为了能在下一条信号序列上重复使用。" },
        3: { en: "The pore is bounded by ribophorin I and II, which pair with the hydrophobic middle of the signal sequence in a beta-sheet.", cn: "孔道由 ribophorin I 和 II 围成，它们与信号序列的疏水中段以 β-片层方式配对。" }
      },
      why_en: "SRP is a ribonucleoprotein that recognises the signal sequence once it has emerged, and a separate SRP receptor on the ER membrane completes the docking. Release of SRP after docking is what makes it catalytic rather than consumed.",
      why_cn: "SRP 是一种核糖核蛋白，在信号序列露出之后识别它，而 ER 膜上另有一个专门的 SRP 受体完成停靠。停靠之后 SRP 被释放，因此它是可反复使用的，而不是被消耗掉。" },
    { type: "mcq",
      q_en: "Where do the signal codons sit on the mRNA, and what does that imply for the protein?",
      q_cn: "信号密码子在 mRNA 上位于什么位置？这对蛋白质意味着什么？",
      options: [
        "Immediately after the initiation codon, so the signal sequence sits at the N-terminus of the chain",
        "Immediately before the stop codon, so the signal sequence sits at the C-terminus",
        "In the 5-prime cap region, before any coding sequence at all",
        "Inside the Shine-Dalgarno sequence"
      ],
      answer: 0,
      optionRefs: { 2: "4-2-4-2", 3: "4-2-3-1" },
      optionNotes: {
        1: { en: "Reversed. A C-terminal signal would only appear once the chain was finished, far too late to direct the ribosome to the ER while the chain is still being made.", cn: "方向反了。C 端信号要等整条链合成完才出现，那时再引导核糖体到内质网早已太晚——而转运恰恰是边合成边进行的。" },
        2: { en: "The cap is a structure on the mRNA that helps the ribosome recognise the message; it is not translated and encodes nothing.", cn: "帽子是 mRNA 上帮助核糖体识别信息的结构；它不被翻译，也不编码任何东西。" },
        3: { en: "The Shine-Dalgarno sequence marks where the start codon is; it lies upstream and is not part of the coding sequence.", cn: "Shine-Dalgarno 序列标记起始密码子的位置；它位于上游，不属于编码序列。" }
      },
      why_en: "Because the signal codons follow immediately after the initiation codon, the signal sequence is the first thing synthesised. That is what allows SRP to bind it and dock the ribosome on the ER while the rest of the chain is still being made and can be threaded straight through the membrane.",
      why_cn: "由于信号密码子紧接在起始密码子之后，信号序列就是最先被合成出来的部分。正因如此，SRP 才能结合它并把核糖体停靠到内质网上，而链的其余部分还在合成中，可以边合成边穿过膜。" },
    { type: "short",
      q_en: "After signal peptidase has cut off the signal sequence, what route does a secreted protein take out of the cell?",
      q_cn: "signal peptidase 切掉信号序列之后，一个分泌蛋白沿什么路线离开细胞？",
      accept: ["ER", "Golgi", "secretory granule", "高尔基", "分泌颗粒"],
      answer_en: "The rest of the chain is transported into the ER cisternae, packaged into microvesicles that bud off the ER and travel to the Golgi apparatus, where the protein may be further modified. In its final form it is released as secretory granules, which travel to target organelles or fuse with the plasma membrane, releasing the protein into the extracellular space.",
      answer_cn: "链的其余部分被送入内质网腔，装入从内质网出芽的微囊泡，运到高尔基体，在那里蛋白质可能被进一步修饰。成熟后以分泌颗粒的形式放出，颗粒运向靶细胞器，或与质膜融合把蛋白质释放到细胞外。" }
  ],

  "4-3-3": [
    { type: "mcq",
      q_en: "Glycosylation runs in two phases. What happens in the FIRST one?",
      q_cn: "糖基化分两个阶段进行。第一阶段发生了什么？",
      options: [
        "Sugars are added one at a time directly onto the finished protein in the Golgi",
        "An activated oligosaccharide core, Glc3Man9(GlcNAc)2, is built on the lipid carrier dolichol phosphate, starting from UDP-N-acetyl-D-glucosamine",
        "Glucosidases and mannosidases trim the sugar chain",
        "The protein's mannose residues are phosphorylated at position 6"
      ],
      answer: 1,
      optionRefs: { 0: "7-10-2" },
      optionNotes: {
        0: { en: "The core is transferred EN BLOC, not residue by residue; individual terminal sugars are added only later, in the Golgi.", cn: "核心寡糖是整块 (en bloc) 转移上去的，不是一个个加的；单个末端糖要到后来在高尔基体才逐个添加。" },
        2: { en: "Trimming by glucosidases and mannosidases happens in the Golgi, after proteosynthesis — that is the later part of phase two, not phase one.", cn: "由葡萄糖苷酶和甘露糖苷酶进行的修剪发生在蛋白质合成之后的高尔基体中，属于后期，不是第一阶段。" },
        3: { en: "Mannose-6-phosphate formation is a late Golgi event, and its role is sorting: it diverts the glycoprotein to the lysosomes.", cn: "甘露糖-6-磷酸的形成是高尔基体后期的事，作用是分选：把糖蛋白改送到溶酶体。" }
      },
      why_en: "Phase one assembles the whole core oligosaccharide away from the protein, on dolichol phosphate. Phase two transfers that finished core en bloc onto the protein while it is still being synthesised in the membrane part of the ER, forming the N-glycosidic bond at an Asn-X-Ser/Thr site.",
      why_cn: "第一阶段是在蛋白质之外、在 dolichol phosphate 上把整个核心寡糖装配好。第二阶段把这个做好的核心整块转移到还在内质网膜部分合成中的蛋白质上，在 Asn-X-Ser/Thr 位点形成 N-糖苷键。" },
    { type: "mcq",
      q_en: "Why does the book single out phosphorylation among the six side-chain modifications?",
      q_cn: "在六类侧链修饰中，书上为什么单独把磷酸化挑出来？",
      options: [
        "Because it always increases the activity of the protein it acts on",
        "Because phosphorylation and dephosphorylation are probably the most important regulatory mechanism for protein activity — and the direction is not fixed: in some proteins phosphorylation raises activity, in others it is removal of the phosphate that does",
        "Because it is the only one that requires a vitamin",
        "Because it is the only modification that occurs on serine"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "This drops the condition that matters most. The book explicitly says the direction goes both ways depending on the protein.", cn: "这漏掉了最关键的条件。书上明确指出方向是双向的，取决于具体蛋白质。" },
        2: { en: "Two other modifications on this list need vitamins: hydroxylation needs vitamin C, carboxylation needs vitamin K.", cn: "这份清单里还有两种修饰需要维生素：羟化需要维生素 C，羧化需要维生素 K。" },
        3: { en: "Serine is also the target of O-glycosidic sugar attachment, so it is not unique to phosphorylation.", cn: "丝氨酸也是 O-糖苷键连接糖基的位点，所以这一点并非磷酸化独有。" }
      },
      why_en: "Phosphorylation of the hydroxyls of serine and threonine, or the phenolic hydroxyl of tyrosine, gives phosphoserine, phosphothreonine and phosphotyrosine. What makes it the key regulatory device is that it can be undone: activity can be switched either by adding the phosphate or by hydrolysing it off, depending on the protein.",
      why_cn: "对丝氨酸、苏氨酸的羟基或酪氨酸的酚羟基进行磷酸化，分别生成磷酸丝氨酸、磷酸苏氨酸和磷酸酪氨酸。它之所以成为关键的调控手段，在于它可逆：视蛋白质而定，加上磷酸或水解掉磷酸都可能是提高活性的那一步。" },
    { type: "mcq",
      q_en: "In proinsulin, how are the disulfide bonds between the two chains formed?",
      q_cn: "在 proinsulin 中，两条链之间的二硫键是怎么形成的？",
      options: [
        "By reaction with oxidised glutathione, which accepts hydrogen atoms from proinsulin's thiol groups onto its own disulfide",
        "By the vitamin-K-dependent carboxylase acting on cysteine",
        "By protein-disulfide-isomerase creating them from scratch",
        "By methylation of the cysteine side chains"
      ],
      answer: 0,
      optionRefs: { 2: "4-3-1" },
      optionNotes: {
        1: { en: "The vitamin-K-dependent carboxylase acts on GLUTAMATE residues, giving gamma-carboxyglutamate in clotting-related plasma glycoproteins.", cn: "依赖维生素 K 的羧化酶作用于谷氨酸残基，在与凝血相关的血浆糖蛋白中生成 γ-羧基谷氨酸。" },
        2: { en: "The isomerase's role is to CORRECT mispaired disulfides by exchanging them, since S-S bond formation is not inherently specific.", cn: "异构酶的作用是通过交换来纠正配错的二硫键，因为 S-S 键的形成本身没有专一性。" },
        3: { en: "Methylation targets the amino groups of Lys/Arg/His and the carboxyls of Glu/Asp — not cysteine thiols.", cn: "甲基化的对象是 Lys/Arg/His 的氨基和 Glu/Asp 的羧基，不是半胱氨酸的巯基。" }
      },
      why_en: "Glutathione is the tripeptide gamma-glutamylcysteinylglycine, carrying a reactive thiol on its cysteine. In its oxidised form it acts as the oxidant: hydrogen atoms move from proinsulin's thiol groups onto glutathione's disulfide, leaving the two insulin chains linked by S-S bonds.",
      why_cn: "谷胱甘肽是三肽 γ-谷氨酰半胱氨酰甘氨酸，其半胱氨酸上带一个活泼巯基。它的氧化型在这里充当氧化剂：氢原子从 proinsulin 的巯基转移到谷胱甘肽的二硫键上，于是胰岛素的两条链之间形成了 S-S 键。" },
    { type: "short",
      q_en: "By which two bond types can sugars be attached to a protein, and which amino acid residues carry each?",
      q_cn: "糖可以通过哪两类键连到蛋白质上？各自连在什么氨基酸残基上？",
      accept: ["asparagine", "serine", "天冬酰胺", "丝氨酸"],
      answer_en: "By an N-glycosidic bond to the free amide group of asparagine, or by an O-glycosidic bond to the hydroxyl of threonine or serine. Both are made by highly specific glycosyltransferases, which recognise not only the sugar but the structure of the polypeptide chain it is going onto, and the sugar donor is always a sugar nucleotide.",
      answer_cn: "一是 N-糖苷键，连到天冬酰胺的游离酰胺基上；二是 O-糖苷键，连到苏氨酸或丝氨酸的羟基上。两者都由高度专一的糖基转移酶催化，这些酶不仅识别糖底物，也识别要连接的多肽链的结构；而糖的供体永远是糖核苷酸。" }
  ],

  "5-1": [
    { type: "mcq",
      q_en: "Which exopeptidase attacks which end of the chain?",
      q_cn: "两类外肽酶各从链的哪一端下手？",
      options: [
        "Aminopeptidases remove the residue with the free amino group (N-terminus); carboxypeptidases remove the residue with the free carboxyl group (C-terminus)",
        "Aminopeptidases work from the C-terminus; carboxypeptidases from the N-terminus",
        "Both work from the N-terminus, differing only in pH optimum",
        "Both cleave in the middle of the chain, like proteinases"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "Swapped. Each enzyme is named for the free group it acts next to, which is the easiest way to keep them straight.", cn: "对调了。每个酶的名字取自它作用处那个游离基团，这也是记住它们最省事的办法。" },
        2: { en: "If both worked from the same end there would be no need for two names; the two classes exist precisely because the two ends are chemically different.", cn: "如果两者都从同一端下手，就没必要有两个名字了；分成两类正是因为两端在化学上不同。" },
        3: { en: "Cleaving in the middle is what ENDOpeptidases (proteinases) do — trypsin, alpha-chymotrypsin, pepsin.", cn: "从中间切开是内肽酶（蛋白酶类）做的事——trypsin、α-chymotrypsin、pepsin。" }
      },
      why_en: "The exo/endo axis is about WHERE the enzyme attacks, independently of the mechanism axis (serine/cysteine/aspartate/metallo-). Exopeptidases always take off one terminal residue at a time, and the two subclasses are distinguished simply by which terminus.",
      why_cn: "外肽酶/内肽酶这条分类轴讲的是「在哪里下手」，与按机理分类（丝氨酸/半胱氨酸/天冬氨酸/金属蛋白酶）那条轴互相独立。外肽酶每次只切下一个末端残基，两个亚类的区别就在于是哪一端。" },
    { type: "mcq",
      q_en: "The pancreas secretes a trypsin inhibitor along with its zymogens. What are its two functions?",
      q_cn: "胰腺在分泌酶原的同时还分泌胰蛋白酶抑制剂。它有哪两项作用？",
      options: [
        "It activates trypsinogen and then keeps trypsin active",
        "By binding trypsin it protects trypsin from autocatalytic breakdown, and it prevents premature activation of chymotrypsinogen and procarboxypeptidase in the gut contents",
        "It lowers the pH of the stomach so pepsinogen can be activated",
        "It is the peptide inhibitor released from the pepsin-inhibitor complex below pH 5"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Activation of trypsinogen is done by enteropeptidase with Ca ions; an inhibitor by definition does not activate.", cn: "trypsinogen 的活化由 enteropeptidase 加 Ca 离子完成；抑制剂按定义不会去活化什么。" },
        2: { en: "It is HCl that acts on pepsinogen in the stomach; the trypsin inhibitor is a pancreatic secretion acting in the small intestine.", cn: "在胃里作用于 pepsinogen 的是 HCl；胰蛋白酶抑制剂是胰腺分泌物，作用在小肠。" },
        3: { en: "That peptide inhibitor belongs to the stomach system: HCl cuts pepsinogen into five peptides plus a pepsin-inhibitor complex, which releases its inhibitor below pH 5.", cn: "那个肽抑制剂属于胃里那一套：HCl 把 pepsinogen 切成五段肽加一个胃蛋白酶-抑制剂复合物，pH 低于 5 时复合物放出抑制剂。" }
      },
      why_en: "The inhibitor is part of the same protective design as the zymogens themselves. Binding trypsin both shields it from destroying itself and, because trypsin is the enzyme that activates all the other pancreatic proenzymes, keeps the whole cascade from firing before it should.",
      why_cn: "这个抑制剂与酶原本身属于同一套保护性设计。它结合 trypsin，一方面使 trypsin 不至于自我降解，另一方面——因为 trypsin 正是激活其他所有胰腺酶原的那个酶——也就防止整条级联提前启动。" },
    { type: "short",
      q_en: "The book classifies proteases on two independent axes. Name the four classes on the MECHANISM axis, with one enzyme for each.",
      q_cn: "书上从两条互相独立的轴对蛋白酶分类。请说出「按反应机理」这条轴上的四类，并各举一个酶。",
      accept: ["serine", "丝氨酸", "cysteine", "半胱氨酸"],
      answer_en: "Serine proteases (trypsin, alpha-chymotrypsin, elastase, coagulation factors), cysteine proteases (papain, the lysosomal cathepsins), aspartate proteases (pepsin, rennin) and metalloproteases (carboxypeptidase, collagenase). The classes are named for the residue or cofactor in the active site. The second, independent axis is site of action, intracellular versus extracellular.",
      answer_cn: "丝氨酸蛋白酶（trypsin、α-chymotrypsin、elastase、凝血因子）、半胱氨酸蛋白酶（papain、溶酶体 cathepsin）、天冬氨酸蛋白酶（pepsin、rennin）和金属蛋白酶（carboxypeptidase、collagenase）。类名取自活性中心的残基或辅因子。另一条互相独立的轴是作用部位：细胞内 vs 细胞外。" }
  ],

  "5-2": [
    { type: "mcq",
      q_en: "Of the three phases of amino acid degradation, which one differs from amino acid to amino acid?",
      q_cn: "氨基酸降解的三个阶段中，哪一个阶段因氨基酸而异？",
      options: [
        "Phase 1, transformation at the alpha-carbon",
        "Phase 2, detoxification of the released ammonia",
        "Phase 3, degradation of the carbon skeleton",
        "All three phases are amino-acid-specific"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Phase 1 is essentially COMMON to almost all amino acids — it is transamination or oxidative deamination in nearly every case.", cn: "第一阶段对几乎所有氨基酸都是共通的——绝大多数情况下就是转氨或氧化脱氨。" },
        2: { en: "Phase 3 is common again: the carbon skeleton is oxidised in the citrate cycle.", cn: "第三阶段又回到共通：碳骨架在柠檬酸循环中被氧化。" },
        3: { en: "That erases the structure of the whole framework — the point of splitting it into three phases is that only the middle one diverges.", cn: "这就把整个框架的结构抹掉了——之所以分成三个阶段，重点正在于只有中间那个阶段是分岔的。" }
      },
      why_en: "The framework is deliberately shaped as shared-diverging-shared: every amino acid loses its amino group the same way, every carbon skeleton ends the same way, and only what happens to the released ammonia is worth learning amino acid by amino acid.",
      why_cn: "这个框架有意做成「共通—分岔—共通」的形状：所有氨基酸脱氨基的方式一样，所有碳骨架的终点一样，只有释放出的氨如何处理这一段，才值得逐个氨基酸地去学。" },
    { type: "mcq",
      q_en: "What is the FINAL degradative mechanism, common to all amino acids?",
      q_cn: "对所有氨基酸都共通的最后一步降解机制是什么？",
      options: [
        "Excretion of the skeleton as urea",
        "Oxidation of the carbon skeleton in the citrate cycle",
        "Beta-oxidation of the skeleton in the mitochondria",
        "Conversion of the skeleton to glucose in the kidney"
      ],
      answer: 1,
      optionRefs: { 0: "5-2-2-2", 2: "8-4-4-2", 3: "7-9-1" },
      optionNotes: {
        0: { en: "Urea disposes of the NITROGEN, in phase 2; the carbon skeleton is a separate problem with a separate answer.", cn: "尿素处理的是氮，属于第二阶段；碳骨架是另一个问题，另有答案。" },
        2: { en: "Beta-oxidation is how fatty acids are degraded; amino acid skeletons enter the citrate cycle instead.", cn: "β-氧化是脂肪酸的降解方式；氨基酸的碳骨架走的是柠檬酸循环。" },
        3: { en: "Making glucose from amino acid skeletons is real but is a biosynthetic outlet, and this node's answer is the oxidative endpoint; besides, catabolism happens mainly in the liver, only to a small extent in the kidneys.", cn: "用氨基酸骨架造葡萄糖确有其事，但那是合成方向的出路，而本节问的是氧化的终点；何况氨基酸分解主要在肝脏进行，肾脏只占很小一部分。" }
      },
      why_en: "After the amino group has gone and the ammonia has been dealt with, what is left is a carbon skeleton, and every one of them ends up oxidised in the citrate cycle — the book cross-references chapter 6.2.2 for the detail.",
      why_cn: "氨基脱掉、氨也处理完之后，剩下的就是碳骨架，而所有碳骨架最终都在柠檬酸循环中被氧化——细节书上回指第 6.2.2 章。" },
    { type: "short",
      q_en: "The book notes that a number of amino acids can be catabolised by SEVERAL different mechanisms. What does this foreshadow about section 5.2.1?",
      q_cn: "书上提到，不少氨基酸可以通过几种不同的机制被分解。这为 5.2.1 节埋下了什么伏笔？",
      accept: ["deamination", "transamination", "脱氨", "转氨"],
      answer_en: "That 5.2.1 will present more than one route for removing the alpha-amino group, rather than a single reaction: simple deamination, dehydration, oxidative deamination and transamination. The prerequisite for degrading any amino acid is removal of the amino group at the alpha-carbon, but there is more than one way to do it.",
      answer_cn: "预示 5.2.1 会给出不止一条脱去 α-氨基的路线，而不是单一反应：简单脱氨、脱水脱氨、氧化脱氨和转氨。任何氨基酸要被降解，前提都是在 α-碳上脱掉氨基，但做法不止一种。" }
  ],

  "5-2-1-1": [
    { type: "mcq",
      q_en: "Simple deamination — loss of ammonia with formation of a double bond — applies to which amino acid in general metabolism?",
      q_cn: "简单脱氨（脱去氨并形成双键）在一般代谢中适用于哪种氨基酸？",
      options: [
        "Serine and threonine",
        "Histidine, converted to urocanic acid",
        "Glutamate, converted to 2-oxoglutarate",
        "All twenty amino acids"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Serine and threonine are deaminated by DEHYDRATION, which is possible only because they carry a hydroxyl on the beta-carbon.", cn: "丝氨酸和苏氨酸走的是脱水脱氨，之所以可行，是因为它们的 β-碳上带羟基。" },
        2: { en: "That is oxidative deamination by glutamate dehydrogenase — deamination coupled to oxidation of the alpha-carbon, not a simple double-bond formation.", cn: "那是 glutamate dehydrogenase 催化的氧化脱氨——脱氨与 α-碳的氧化偶联，不是单纯形成双键。" },
        3: { en: "The whole point of listing four mechanisms is that no single one covers them all; simple deamination is the narrowest of the four.", cn: "之所以要列出四种机制，正是因为没有哪一种能覆盖所有氨基酸；简单脱氨是四者中适用面最窄的。" }
      },
      why_en: "In general metabolism this mechanism applies only to histidine, which loses ammonia to give urocanic acid, later degraded via glutamate. In bacteria and plants — but not generally in mammals — aspartate, phenylalanine and tyrosine are also degraded this way.",
      why_cn: "在一般代谢中这条机制只适用于组氨酸：脱氨生成尿刊酸（urocanic acid），随后经谷氨酸继续降解。在细菌和植物中——但哺乳动物一般不是这样——天冬氨酸、苯丙氨酸和酪氨酸也走这条路。" },
    { type: "mcq",
      q_en: "Mechanistically, what actually happens to the alpha-carbon during OXIDATIVE deamination?",
      q_cn: "在氧化脱氨过程中，α-碳上到底发生了什么？",
      options: [
        "The CH-NH2 group is oxidised to an imine C=NH, which then hydrolyses spontaneously, giving a 2-oxo acid",
        "The amino group is transferred onto a 2-oxo acid, giving a new amino acid",
        "Water is eliminated to create a double bond, which then tautomerises",
        "CO2 is lost from the carboxyl group, giving a primary amine"
      ],
      answer: 0,
      optionRefs: { 1: "5-2-1-2", 3: "5-2-1-2" },
      optionNotes: {
        1: { en: "That is transamination — it moves the nitrogen to another molecule but removes none from the pool.", cn: "那是转氨——它把氮换到另一个分子上，却没有从氨基酸池里移走任何氮。" },
        2: { en: "That is the dehydration route, available only to serine and threonine because they have a beta-hydroxyl.", cn: "那是脱水路线，只有带 β-羟基的丝氨酸和苏氨酸才走得通。" },
        3: { en: "Losing CO2 is decarboxylation, which gives biogenic amines and does NOT remove nitrogen at all.", cn: "脱去 CO2 是脱羧反应，产物是生物胺，而且根本没有脱掉氮。" }
      },
      why_en: "Oxidative deamination is strongly exergonic and is catalysed by dehydrogenases with NAD or NADP as coenzyme. The CH-NH2 group is oxidised to an imine, which needs no enzyme to break down: it hydrolyses spontaneously, leaving a 2-oxo acid and free ammonium.",
      why_cn: "氧化脱氨是强放能反应，由以 NAD 或 NADP 为辅酶的脱氢酶催化。CH-NH2 基团被氧化成亚胺，而亚胺不需要酶就会自发水解，留下 2-氧代酸和游离铵。" },
    { type: "short",
      q_en: "Write out what glutamate dehydrogenase does, including its coenzyme and both products, and say why the book calls it a nodal reaction.",
      q_cn: "写出 glutamate dehydrogenase 催化的反应，包括辅酶和两个产物，并说明书上为什么称它为「枢纽反应」。",
      accept: ["2-oxoglutarate", "NAD", "NH4", "2-氧戊二酸"],
      answer_en: "Glutamate plus NAD or NADP gives, via an alpha-iminoglutarate intermediate, NAD(P)H plus H, and then with water 2-oxoglutarate plus ammonium. It is by far the most significant oxidative deamination, and the glutamate to 2-oxoglutarate interconversion is called a nodal reaction because nearly every amino acid's nitrogen has to pass through this one step to actually leave the pool as free ammonia.",
      answer_cn: "谷氨酸加 NAD 或 NADP，经 α-亚氨基戊二酸中间体生成 NAD(P)H + H，再加水生成 2-氧戊二酸和 NH4。它是最重要的氧化脱氨反应；谷氨酸与 2-氧戊二酸之间的互变被称为枢纽反应，因为几乎所有氨基酸的氮都必须经过这一步，才能以游离氨的形式真正离开氨基酸池。" }
  ],

  "5-2-1-2": [
    { type: "mcq",
      q_en: "Which acceptor does each of the two named aminotransferases use, and what does it produce?",
      q_cn: "书上点名的两个氨基转移酶各用什么受体？各生成什么？",
      options: [
        "Alanine aminotransferase uses 2-oxoglutarate and gives glutamate; glutamate aminotransferase uses pyruvate and gives alanine",
        "Alanine aminotransferase uses pyruvate and gives alanine; glutamate aminotransferase uses 2-oxoglutarate and gives glutamate",
        "Both use oxaloacetate and give aspartate",
        "Both use ammonia directly and give glutamine"
      ],
      answer: 1,
      optionRefs: { 2: "5-2-2-2" },
      optionNotes: {
        0: { en: "The two acceptors are swapped. Each enzyme is named for the amino acid it PRODUCES, which is the quickest way to recover the pairing.", cn: "两个受体对调了。每个酶是按它生成的氨基酸命名的，顺着这一点最容易把配对还原出来。" },
        2: { en: "Oxaloacetate is indeed one of the three usual acceptors, and aspartate transaminase does exactly that — but it is the enzyme drawn in the urea cycle's linked reactions, not one of the two named here.", cn: "oxaloacetate 确实是三种常见受体之一，aspartate transaminase 干的正是这件事——但那是尿素循环连带反应里画的那个酶，不是这里点名的两个。" },
        3: { en: "Fixing free ammonia onto a skeleton is a different reaction type: glutamine synthetase amidates glutamate at the cost of ATP.", cn: "把游离氨固定到骨架上是另一类反应：glutamine synthetase 消耗 ATP 把谷氨酸酰胺化。" }
      },
      why_en: "Transamination transfers an amino group onto the oxo group of a 2-oxo acid, most often pyruvate, 2-oxoglutarate or oxaloacetate, so the products are always a new 2-oxo acid plus a new amino acid. Alanine aminotransferase and glutamate aminotransferase are named after the amino acid each one makes.",
      why_cn: "转氨反应把氨基转移到 2-氧代酸的羰基上，受体最常见的是丙酮酸、2-氧戊二酸或草酰乙酸，因此产物总是一个新的 2-氧代酸加一个新的氨基酸。alanine aminotransferase 和 glutamate aminotransferase 都是按各自生成的氨基酸命名的。" },
    { type: "mcq",
      q_en: "What does the pyridine ring of PLP contribute to catalysis?",
      q_cn: "PLP 的吡啶环在催化中起什么作用？",
      options: [
        "Its protonated, positively charged ring acts as an electron sink, pulling electrons out of the conjugated system so any of the three substituents on the alpha-carbon can leave easily",
        "It acts as the oxidising agent, accepting hydride from the alpha-carbon",
        "Its phosphate group provides the energy that drives the reaction",
        "It holds the lysine residue attached throughout, so the substrate never binds covalently"
      ],
      answer: 0,
      optionNotes: {
        1: { en: "PLP works here as an electron sink, not as a redox cofactor; the book makes the same point about the serine dehydratase reaction, where PLP explicitly does not act as an oxidant.", cn: "PLP 在这里是作为电子阱起作用的，不是氧化还原辅因子；书上在 serine dehydratase 那里也特别说明 PLP 并不充当氧化剂。" },
        2: { en: "The phosphate anchors the coenzyme to the apoenzyme; the driving force comes from the electron-withdrawing ring.", cn: "磷酸基把辅酶锚定在脱辅基酶蛋白上；推动反应的是那个吸电子的环。" },
        3: { en: "Exactly backwards: the incoming amino acid DISPLACES the lysine, converting the internal aldimine into an external one — that is reaction 1.", cn: "正好相反：进来的氨基酸把赖氨酸顶掉，把内部醛亚胺变成外部醛亚胺——那就是反应 1。" }
      },
      why_en: "Once the external aldimine has formed, a chain of conjugated double bonds runs from the bound amino acid to the protonated pyridine nitrogen. That positive charge drains electrons out of the system, which is why the same coenzyme can support three different outcomes: losing the proton gives transamination, losing the carboxyl gives decarboxylation, losing the side chain gives retro-aldol cleavage.",
      why_cn: "外部醛亚胺一旦形成，一串共轭双键就从结合的氨基酸一直连到吡啶环上质子化的氮。那个正电荷把电子从体系中抽走，所以同一个辅酶能支撑三种不同结局：失去质子即转氨，失去羧基即脱羧，失去侧链即逆羟醛裂解。" },
    { type: "short",
      q_en: "In which cellular compartments are transaminases found, and how do the compartments cooperate?",
      q_cn: "转氨酶存在于哪些细胞区室？这些区室怎样协作？",
      accept: ["mitochondria", "线粒体", "cytosol", "胞质"],
      answer_en: "Transaminases occur both in the mitochondria and in the cytosol of eukaryotic cells, and the two compartments cooperate in deamination: glutamate formed in the cytoplasm is carried into the mitochondria by active transport through a specific carrier system, and it is there that glutamate dehydrogenase acts on it.",
      answer_cn: "真核细胞的线粒体和胞质中都有转氨酶，两个区室在脱氨过程中协作：在胞质中生成的谷氨酸经专一的载体系统主动运输进入线粒体，glutamate dehydrogenase 就在那里对它起作用。" }
  ],

  "5-2-2-1": [
    { type: "mcq",
      q_en: "What role does glutamine synthetase play in handling ammonia, and what does its reaction cost?",
      q_cn: "glutamine synthetase 在处理氨的过程中扮演什么角色？它的反应代价是什么？",
      options: [
        "It is the main route for recapturing free ammonia, using NADPH as reductant",
        "It plays only a limited role in regulating blood ammonia, amidating glutamate with ammonium at the cost of ATP to give glutamine",
        "It converts ammonia directly into urea in the liver",
        "It releases ammonia from glutamate for excretion through the gills"
      ],
      answer: 1,
      optionRefs: { 2: "5-2-2-2" },
      optionNotes: {
        0: { en: "The main recapture route is glutamate dehydrogenase, which fixes ammonia onto 2-oxoglutarate using NADPH; glutamine synthetase pays with ATP instead and is only a supporting player.", cn: "主要的回收路线是 glutamate dehydrogenase：它用 NADPH 把氨固定到 2-氧戊二酸上；glutamine synthetase 花的是 ATP，只是辅助角色。" },
        2: { en: "Urea is made by the cyclic, strongly endergonic urea (ornithine) cycle, a separate pathway with its own five enzymes.", cn: "尿素由循环式、强吸能的尿素（鸟氨酸）循环生成，那是另一条有自己五个酶的途径。" },
        3: { en: "Direct diffusion of ammonia through the gills is the ammonotelic strategy of aquatic animals; no enzyme is needed for it at all.", cn: "氨经鳃直接扩散是水生动物的排氨策略，根本不需要酶。" }
      },
      why_en: "The section names two ways of getting free ammonia back onto a carbon skeleton. Glutamate dehydrogenase, driven by NADPH, is the general one. Glutamine synthetase adds ammonium to glutamate's side chain at the cost of ATP, producing a second non-toxic carrier of amide nitrogen, but the book restricts its role in regulating blood ammonia to a limited one.",
      why_cn: "本节给出两种把游离氨重新装回碳骨架的办法。由 NADPH 驱动的 glutamate dehydrogenase 是通用的那一条。glutamine synthetase 则消耗 ATP 把铵加到谷氨酸的侧链上，产生第二种无毒的酰胺氮载体，但书上明确说它在调节血氨浓度方面作用有限。" },
    { type: "mcq",
      q_en: "Ranked by what they cost and what they need, which nitrogen-excretion strategy is the most expensive to synthesise but needs almost no water?",
      q_cn: "按代价和需求来排，哪一种排氮策略合成起来最贵，却几乎不需要水？",
      options: [
        "Ammonotelic — excreting ammonia itself",
        "Ureotelic — excreting urea",
        "Uricotelic — excreting uric acid",
        "All three cost the same; only the toxicity differs"
      ],
      answer: 2,
      optionNotes: {
        0: { en: "Ammonia is free to make — it needs no chemical conversion at all — but it demands a large volume of surrounding water and is toxic if concentrated.", cn: "氨的生成不花钱——它根本不需要化学转化——但它需要大量周围水体稀释，一旦浓缩就有毒。" },
        1: { en: "Urea costs ATP and sits in the middle: safe even when concentrated in limited water, which is what land animals need.", cn: "尿素要花 ATP，处在中间位置：即使在有限水量中被浓缩也安全，这正是陆生动物需要的。" },
        3: { en: "The three trade off precisely against each other — energy cost against water dependence — so they cannot all cost the same.", cn: "这三者恰恰是彼此权衡的关系——能量代价对水的依赖——所以不可能代价相同。" }
      },
      why_en: "The trade-off runs one way: ammonia is cheapest but needs the most water, urea costs ATP but tolerates concentration, and urate costs the most yet needs almost no water and causes no osmotic or toxicity problem even as a solid. That last property is exactly what a sealed egg requires.",
      why_cn: "这个权衡是单向排列的：氨最便宜但最耗水，尿素花 ATP 但耐得住浓缩，尿酸最贵却几乎不耗水，即使呈固体也不造成渗透或毒性问题。最后这一点，正是封闭的蛋所需要的。" },
    { type: "short",
      q_en: "Why is urea the right compromise for a terrestrial animal?",
      q_cn: "为什么尿素对陆生动物来说是恰当的折中方案？",
      accept: ["urea", "尿素", "soluble", "水溶"],
      answer_en: "Terrestrial animals lack the unlimited water supply that would let them simply diffuse ammonia away, so the liver converts ammonia to urea by a cyclic and strongly endergonic process. Urea is far less toxic than free ammonia and highly water-soluble, so it can be concentrated in urine without crystallising.",
      answer_cn: "陆生动物没有可以随意把氨扩散掉的无限水源，所以由肝脏通过一个循环式、强吸能的过程把氨转变成尿素。尿素的毒性远低于游离氨，而且水溶性很好，因此可以在尿中被浓缩而不析出结晶。" }
  ],

  "5-2-2-2": [
    { type: "mcq",
      q_en: "Carbamoyl phosphate synthetase makes the first intermediate of the urea cycle. Where does it sit, and what switches it on?",
      q_cn: "carbamoyl phosphate synthetase 生成尿素循环的第一个中间体。它位于哪里？由什么激活？",
      options: [
        "In the mitochondrial matrix, activated by N-acetylglutamate",
        "In the cytosol, activated by N-acetylglutamate",
        "In the mitochondrial matrix, inhibited by CTP",
        "In the cytosol, activated by ornithine"
      ],
      answer: 0,
      optionRefs: { 2: "4-1-1-2" },
      optionNotes: {
        1: { en: "The activator is right but the compartment is wrong, and the compartment matters: this is the half of the cycle that runs inside the mitochondria.", cn: "激活剂对了但区室错了，而区室在这里很关键：这正是循环中在线粒体内进行的那一半。" },
        2: { en: "CTP inhibition belongs to the OTHER enzyme that uses carbamoyl phosphate — aspartate transcarbamoylase, the committed step of pyrimidine nucleotide biosynthesis.", cn: "受 CTP 抑制的是另一个使用 carbamoyl phosphate 的酶——aspartate transcarbamoylase，嘧啶核苷酸合成的关键步骤。" },
        3: { en: "Ornithine is the SUBSTRATE of the next reaction, not an activator of this one.", cn: "鸟氨酸是下一个反应的底物，不是这一步的激活剂。" }
      },
      why_en: "Carbamoyl phosphate synthetase (E.C. 6.3.4.16) builds carbamoyl phosphate from ammonium, CO2 and 2 ATP — a strongly endergonic reaction — in the mitochondrial matrix, and it is allosterically activated by N-acetylglutamate, itself made in the matrix by acetylation of glutamate.",
      why_cn: "carbamoyl phosphate synthetase（E.C. 6.3.4.16）在线粒体基质中，用 NH4、CO2 和 2 个 ATP 生成 carbamoyl phosphate，是强吸能反应；它受 N-乙酰谷氨酸的变构激活，而后者本身就是在基质中由谷氨酸乙酰化生成的。" },
    { type: "mcq",
      q_en: "Unlike the citrate cycle, the urea cycle is split across two compartments. Which intermediates have to cross the mitochondrial membrane, and in which direction?",
      q_cn: "与柠檬酸循环不同，尿素循环分处两个区室。哪些中间体必须跨过线粒体膜？方向如何？",
      options: [
        "Citrulline leaves the mitochondria for the cytoplasm, and ornithine is transported back in to start another turn",
        "Ornithine leaves the mitochondria and citrulline is transported back in",
        "Arginine leaves and urea is transported back in",
        "Nothing crosses — the whole cycle runs in the mitochondria, exactly like the citrate cycle"
      ],
      answer: 0,
      optionRefs: { 3: "6-2-2-1" },
      optionNotes: {
        1: { en: "The direction is reversed. Citrulline is made inside, from ornithine plus carbamoyl phosphate, so citrulline is the one that must leave.", cn: "方向反了。citrulline 是在里面由 ornithine 加 carbamoyl phosphate 生成的，所以要出去的是 citrulline。" },
        2: { en: "Arginine is formed and consumed in the cytoplasm, and urea is the excretory end product — it is not taken back into the mitochondria.", cn: "arginine 在胞质中生成也在胞质中被消耗，而尿素是排泄终产物——它不会被送回线粒体。" },
        3: { en: "This is exactly the contrast the book draws: the citrate cycle is confined to one organelle, the urea cycle is not.", cn: "这正是书上要对比的地方：柠檬酸循环局限在一个细胞器内，尿素循环不是。" }
      },
      why_en: "Carbamoyl phosphate synthesis and the ornithine carbamoyltransferase step happen in the matrix; argininosuccinate synthetase, the lyase and arginase act in the cytoplasm. So each turn requires citrulline out and ornithine back in, which is the point Obr. 5.5 makes.",
      why_cn: "carbamoyl phosphate 的合成和 ornithine carbamoyltransferase 那一步在基质中进行；argininosuccinate synthetase、裂解酶和 arginase 则在胞质中起作用。因此每转一圈都需要 citrulline 出去、ornithine 回来，这正是 Obr. 5.5 要说明的。" },
    { type: "short",
      q_en: "Which enzyme closes the urea cycle, what reaction type is it, and what are its two products?",
      q_cn: "哪个酶使尿素循环闭合？属于哪一类反应？它的两个产物是什么？",
      accept: ["arginase", "精氨酸酶", "ornithine", "鸟氨酸"],
      answer_en: "Arginase (E.C. 3.5.3.1) hydrolyses arginine. The two products are urea, released as the excretory product, and ornithine, which is transported back into the mitochondria to start another turn — which is exactly what makes the pathway a cycle.",
      answer_cn: "arginase（E.C. 3.5.3.1）水解精氨酸。两个产物是：作为排泄物放出的尿素，以及被运回线粒体开始下一轮的鸟氨酸——正是后者使这条途径成为一个循环。" }
  ],

  "5-2-3-1": [
    { type: "mcq",
      q_en: "What happens to a ketogenic amino acid's carbon skeleton in a starved organism, and why?",
      q_cn: "在饥饿状态下，生酮氨基酸的碳骨架会怎样？为什么？",
      options: [
        "It ends as pyruvate and drives gluconeogenesis and glycogen formation",
        "It is degraded all the way to acetyl-CoA, which exceeds the citrate cycle's metabolic capacity under these conditions and drives ketone-body formation",
        "It is excreted unchanged, because it cannot be used for energy",
        "It is converted to urea along with the nitrogen"
      ],
      answer: 1,
      optionRefs: { 0: "7-9", 3: "5-2-2-2" },
      optionNotes: {
        0: { en: "That is the GLUCOGENIC half of the same classification — the definition turns on which single molecule the skeleton ends as.", cn: "那是同一分类里生糖的那一半——这个分类的判据就是碳骨架最后落在哪一个分子上。" },
        2: { en: "Nothing here is excreted; the whole section is about how the skeleton is used.", cn: "这里没有任何东西被排掉；整节讲的就是碳骨架如何被利用。" },
        3: { en: "Urea disposes of the nitrogen only. The carbon skeleton is a separate stream with a separate fate.", cn: "尿素只处理氮。碳骨架是另一条线，另有归宿。" }
      },
      why_en: "Glucogenic versus ketogenic is decided by the endpoint: pyruvate means the skeleton can feed gluconeogenesis, acetyl-CoA means it cannot. In starvation the acetyl-CoA arriving from ketogenic amino acids overwhelms the citrate cycle's capacity, and the surplus goes into ketone bodies.",
      why_cn: "生糖还是生酮，取决于终点：落在丙酮酸上，碳骨架就能供糖异生；落在乙酰辅酶 A 上就不能。饥饿时由生酮氨基酸涌来的乙酰辅酶 A 超出柠檬酸循环的处理能力，多余的部分转去生成酮体。" },
    { type: "mcq",
      q_en: "Threonine has more than one degradation route. Which pair is correct?",
      q_cn: "苏氨酸有不止一条降解路线。哪一组说法正确？",
      options: [
        "Threonine aldolase cleaves it into glycine plus acetaldehyde; alternatively dehydration gives 2-oxobutyrate, which can be decarboxylated to propionate",
        "It is transaminated directly to pyruvate, as alanine is",
        "It is hydroxylated to serine and then dehydrated",
        "It is cleaved into glycine plus formaldehyde by serine hydroxymethyltransferase"
      ],
      answer: 0,
      optionRefs: { 1: "5-2-3-1" },
      optionNotes: {
        1: { en: "Direct transamination with 2-oxoglutarate is how ALANINE reaches pyruvate; threonine takes the aldolase or the dehydration route.", cn: "用 2-氧戊二酸直接转氨到达丙酮酸的是丙氨酸；苏氨酸走的是醛缩酶或脱水那两条路。" },
        2: { en: "Serine's own route is dehydration by serine dehydratase, or conversion to glycine; threonine is not hydroxylated to serine.", cn: "丝氨酸自己的路线是被 serine dehydratase 脱水，或转成甘氨酸；苏氨酸并不会被羟化成丝氨酸。" },
        3: { en: "Serine hydroxymethyltransferase interconverts glycine and SERINE; threonine's cleavage is done by threonine aldolase and gives acetaldehyde, not formaldehyde.", cn: "serine hydroxymethyltransferase 催化的是甘氨酸与丝氨酸之间的互变；苏氨酸的裂解由 threonine aldolase 完成，产物是乙醛，不是甲醛。" }
      },
      why_en: "The two routes send threonine to two different families: the aldolase route feeds glycine and then serine and pyruvate, while the dehydration route gives 2-oxobutyrate, which can be transaminated to 2-aminobutyrate or decarboxylated aerobically to propionate — threonine's link to the succinyl-CoA family.",
      why_cn: "两条路线把苏氨酸送进两个不同的族：醛缩酶那条通向甘氨酸，再到丝氨酸和丙酮酸；脱水那条生成 2-氧丁酸，它可以被转氨成 2-氨基丁酸，也可以在有氧条件下脱羧成丙酸——这就是苏氨酸通向琥珀酰辅酶 A 族的联系。" },
    { type: "short",
      q_en: "Which enzyme interconverts glycine and serine, and where does this sit in family 1's route to pyruvate?",
      q_cn: "哪个酶催化甘氨酸与丝氨酸之间的互变？它在第一族通向丙酮酸的路线上处在什么位置？",
      accept: ["hydroxymethyltransferase", "glycine", "羟甲基", "甘氨酸"],
      answer_en: "Serine hydroxymethyltransferase. Family 1 runs threonine to glycine to serine to pyruvate, so this enzyme sits at the middle link of that chain; serine is then dehydrated and deaminated to pyruvate by serine dehydratase, and pyruvate goes on to acetyl-CoA.",
      answer_cn: "serine hydroxymethyltransferase（丝氨酸羟甲基转移酶）。第一族的路线是苏氨酸 → 甘氨酸 → 丝氨酸 → 丙酮酸，这个酶正处在中间那一环；丝氨酸随后由 serine dehydratase 脱水脱氨生成丙酮酸，丙酮酸再走向乙酰辅酶 A。" }
  ],

  "5-2-3-2": [
    { type: "mcq",
      q_en: "The book flags the aromatic amino acids on this pathway as hormone precursors. Which assignment is right?",
      q_cn: "书上指出这条途径上的芳香族氨基酸是激素前体。哪一条对应关系是对的？",
      options: [
        "Tryptophan is the precursor of triiodothyronine and thyroxine",
        "Tyrosine is the precursor of noradrenaline, adrenaline and dopamine, and also of triiodothyronine and thyroxine",
        "Phenylalanine gives the catecholamines directly, without any conversion",
        "Leucine is the precursor of the thyroid hormones"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "The thyroid hormones are named as coming from tyrosine; tryptophan is listed among the physiologically significant aromatic amino acids but not as their precursor.", cn: "甲状腺激素书上写明来自酪氨酸；色氨酸虽被列入生理意义重大的芳香族氨基酸，但不是它们的前体。" },
        2: { en: "Phenylalanine must first be hydroxylated to tyrosine by phenylalanine hydroxylase — that one reaction is why Phe is essential and Tyr is not.", cn: "苯丙氨酸必须先由 phenylalanine hydroxylase 羟化成酪氨酸——正是这一个反应使 Phe 成为必需氨基酸而 Tyr 不是。" },
        3: { en: "Leucine is on this pathway but is named for being purely ketogenic, not as a hormone precursor; it is not aromatic at all.", cn: "亮氨酸虽在这条途径上，但书上提到它是因为它是纯生酮的，不是因为它是激素前体；它根本不是芳香族的。" }
      },
      why_en: "Phenylalanine, tyrosine and tryptophan are singled out as physiologically significant beyond energy metabolism. Tyrosine specifically is named as the precursor of noradrenaline, adrenaline and dopamine, and of the thyroid hormones triiodothyronine and thyroxine.",
      why_cn: "苯丙氨酸、酪氨酸和色氨酸被单独指出：它们的生理意义超出能量代谢。其中酪氨酸被明确列为去甲肾上腺素、肾上腺素、多巴胺的前体，也是甲状腺激素三碘甲腺原氨酸和甲状腺素的前体。" },
    { type: "mcq",
      q_en: "Lysine has two alternative degradation pathways. Where do they converge?",
      q_cn: "赖氨酸有两条可选的降解途径。它们在哪里汇合？",
      options: [
        "At 2-oxoadipic acid, and then both go on to glutaryl-CoA — the same intermediate tryptophan reaches by its own longer route",
        "At methylmalonyl-CoA, together with valine",
        "At pyruvate, together with alanine and cysteine",
        "At oxaloacetate, together with aspartate"
      ],
      answer: 0,
      optionRefs: { 1: "5-2-3-3", 2: "5-2-3-1", 3: "5-2-3-4" },
      optionNotes: {
        1: { en: "Methylmalonyl-CoA is the family-4 convergence point for methionine, isoleucine and valine, ending in succinyl-CoA — a glucogenic family, which lysine is not part of.", cn: "methylmalonyl-CoA 是第四族（甲硫氨酸、异亮氨酸、缬氨酸）的汇合点，终点是琥珀酰辅酶 A——那是生糖族，赖氨酸不在其中。" },
        2: { en: "Pyruvate is family 1's endpoint (Ala, Ser, Gly, Thr, Cys), the glucogenic route.", cn: "丙酮酸是第一族（Ala、Ser、Gly、Thr、Cys）的终点，属于生糖路线。" },
        3: { en: "Oxaloacetate is family 5, reached only by aspartate and asparagine.", cn: "草酰乙酸是第五族，只有天冬氨酸和天冬酰胺到达那里。" }
      },
      why_en: "Both lysine routes run down to 2-oxoadipic acid and then to glutaryl-CoA, from which further reactions lead on to acetyl-CoA. Because the diagram gives lysine no glucogenic outlet anywhere, this single destination is why lysine belongs alongside leucine as purely ketogenic.",
      why_cn: "赖氨酸的两条路线都下行到 2-氧己二酸，再到 glutaryl-CoA，随后经一系列反应通向乙酰辅酶 A。由于图中任何地方都没有给赖氨酸画出生糖出口，正是这个唯一去向使它与亮氨酸一样属于纯生酮氨基酸。" },
    { type: "short",
      q_en: "Why is leucine described as PURELY ketogenic, unlike tyrosine?",
      q_cn: "为什么亮氨酸被称为「纯」生酮氨基酸，而酪氨酸不是？",
      accept: ["acetyl-CoA", "acetoacetate", "乙酰乙酸", "乙酰辅酶A"],
      answer_en: "After transamination and oxidative decarboxylation, leucine is degraded directly to both acetyl-CoA and acetoacetate, with no glucogenic branch anywhere in its pathway. Tyrosine's pathway, by contrast, is hydrolytically cleaved into two different end products — fumaric acid, which is glucogenic, and acetoacetate, which is ketogenic — so tyrosine counts as both.",
      answer_cn: "亮氨酸经转氨和氧化脱羧后，直接降解为乙酰辅酶 A 和乙酰乙酸，整条途径上没有任何生糖分支。相比之下，酪氨酸的途径会被水解裂解成两个不同的终产物——生糖的延胡索酸和生酮的乙酰乙酸——所以酪氨酸两者兼具。" }
  ],

  "5-2-3-3": [
    { type: "mcq",
      q_en: "In family 4, where does each amino acid join the route to succinyl-CoA?",
      q_cn: "在第四族中，各个氨基酸分别在什么位置汇入通向琥珀酰辅酶 A 的路线？",
      options: [
        "Valine and isoleucine both enter at propionyl-CoA; methionine enters at methylmalonyl-CoA",
        "Isoleucine enters at propionyl-CoA, methionine also reaches propionyl-CoA via a 2-oxo acid, and valine enters directly at methylmalonyl-CoA",
        "All three enter at succinyl-CoA itself",
        "All three enter at 2-oxoglutarate"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Valine and methionine are swapped: valine feeds in directly at methylmalonyl-CoA, methionine goes through propionyl-CoA.", cn: "缬氨酸和甲硫氨酸对调了：缬氨酸直接汇入 methylmalonyl-CoA，甲硫氨酸经 propionyl-CoA。" },
        2: { en: "Succinyl-CoA is the family's END product; entering there would leave the pathway with nothing to do.", cn: "琥珀酰辅酶 A 是这一族的终产物；从那里进入等于整条途径无事可做。" },
        3: { en: "2-oxoglutarate is family 3's endpoint (Arg, His, Glu, Gln, Pro). It also appears as a printed label under methionine in the family-4 diagram, which this node flags as a probable book error for 2-oxobutyrate.", cn: "2-氧戊二酸是第三族（Arg、His、Glu、Gln、Pro）的终点。它在第四族的图里也印在甲硫氨酸下方，本节指出那很可能是书的笔误，应为 2-氧丁酸。" }
      },
      why_en: "The shared final steps are propionyl-CoA to methylmalonyl-CoA to succinyl-CoA. Isoleucine feeds directly into propionyl-CoA and methionine reaches it through a 2-oxo acid intermediate, while valine joins one step later, directly at methylmalonyl-CoA.",
      why_cn: "共用的末段是 propionyl-CoA → methylmalonyl-CoA → 琥珀酰辅酶 A。异亮氨酸直接汇入 propionyl-CoA，甲硫氨酸经一个 2-氧代酸中间体到达那里，而缬氨酸晚一步汇入，直接进入 methylmalonyl-CoA。" },
    { type: "mcq",
      q_en: "Why is family 4 (Met, Ile, Val) glucogenic?",
      q_cn: "第四族（Met、Ile、Val）为什么是生糖的？",
      options: [
        "Because its final product, succinyl-CoA, is a direct citrate-cycle intermediate",
        "Because its final product is acetyl-CoA",
        "Because it produces ketone bodies once the citrate cycle is saturated",
        "Because all three amino acids are also aromatic"
      ],
      answer: 0,
      optionRefs: { 1: "5-2-3-2", 2: "8-4-4-3" },
      optionNotes: {
        1: { en: "Acetyl-CoA is the KETOgenic endpoint — that is family 2's route, via acetoacetyl-CoA.", cn: "乙酰辅酶 A 是生酮的终点——那是第二族经 acetoacetyl-CoA 的路线。" },
        2: { en: "Ketone-body formation is what happens on the acetyl-CoA side of the classification, not this one.", cn: "生成酮体是分类中乙酰辅酶 A 那一侧的事，不是这一侧。" },
        3: { en: "None of methionine, isoleucine or valine is aromatic; the aromatic ones (Phe, Tyr, Trp) are in family 2.", cn: "甲硫氨酸、异亮氨酸、缬氨酸都不是芳香族；芳香族的（Phe、Tyr、Trp）在第二族。" }
      },
      why_en: "Succinyl-CoA is itself a citrate-cycle intermediate, so a skeleton arriving there enters central carbon metabolism at a point from which glucose can still be made. That is the whole basis of the family's glucogenic label.",
      why_cn: "琥珀酰辅酶 A 本身就是柠檬酸循环的中间物，因此到达那里的碳骨架从一个仍可通向葡萄糖的位点进入中心碳代谢。这就是这一族被标为生糖的全部依据。" },
    { type: "short",
      q_en: "Trace proline's route into family 3, naming the enzyme and the two forms of the intermediate.",
      q_cn: "追踪脯氨酸进入第三族的路线，说出酶名和中间体的两种形式。",
      accept: ["pyrroline", "semialdehyde", "半醛", "吡咯啉"],
      answer_en: "Proline dehydrogenase oxidises proline to delta-1-pyrroline-5-carboxylic acid, which exists in equilibrium with the open-chain gamma-semialdehyde of glutamic acid — the same semialdehyde that arginine's degradation passes through. The semialdehyde becomes glutamate and then 2-oxoglutarate, the family's citrate-cycle entry point.",
      answer_cn: "proline dehydrogenase 把脯氨酸氧化成 Δ1-吡咯啉-5-羧酸，它与开链的谷氨酸 γ-半醛处于平衡——精氨酸降解也经过同一个半醛。该半醛转变为谷氨酸，再到 2-氧戊二酸，即本族进入柠檬酸循环的入口。" }
  ],

  "5-2-3-4": [
    { type: "mcq",
      q_en: "Which amino acid is the most connected node across this material, appearing in three different places?",
      q_cn: "在这部分内容里，哪个氨基酸是联系最广的节点，出现在三个不同位置？",
      options: [
        "Leucine",
        "Aspartate",
        "Glutamate",
        "Lysine"
      ],
      answer: 1,
      optionRefs: { 0: "5-2-3-2", 2: "5-2-3-3", 3: "5-2-3-2" },
      optionNotes: {
        0: { en: "Leucine appears in the acetoacetyl-CoA box and, per family 2, also gives acetyl-CoA directly — but it has no third, glucogenic appearance.", cn: "亮氨酸出现在 acetoacetyl-CoA 那个框里，按第二族它也直接生成乙酰辅酶 A——但它没有第三处、生糖的出现。" },
        2: { en: "Glutamate is the hub of family 3, where five amino acids converge on it before 2-oxoglutarate — an important node, but on one entry point only.", cn: "谷氨酸是第三族的枢纽，五个氨基酸在到达 2-氧戊二酸前汇聚于它——是重要节点，但只对应一个入口。" },
        3: { en: "Lysine is the opposite case: it appears in EXACTLY ONE box in the whole diagram, which is the evidence that it is purely ketogenic.", cn: "赖氨酸恰恰相反：它在整张图里只出现在一个框中，这正是它属于纯生酮氨基酸的证据。" }
      },
      why_en: "Aspartate appears in the family-5 oxaloacetate pair with asparagine, in the fumarate box with tyrosine and phenylalanine, and again as the transamination partner regenerating aspartate from oxaloacetate in the urea cycle's linked reactions. That makes aspartate/oxaloacetate the junction between nitrogen disposal and the amino-acid families.",
      why_cn: "天冬氨酸出现在第五族与天冬酰胺同框的草酰乙酸处，出现在与酪氨酸、苯丙氨酸同框的延胡索酸处，还在尿素循环的连带反应中作为转氨伙伴由草酰乙酸再生。这使天冬氨酸/草酰乙酸成为氮排泄与氨基酸族系之间的交汇点。" },
    { type: "mcq",
      q_en: "Cross-checking Obr. 5.6 against the running text reveals a classification the p.125 opening paragraph left out. Which?",
      q_cn: "把 Obr. 5.6 与正文对照，会发现 p.125 开头那段遗漏的一项分类。是哪一项？",
      options: [
        "Tryptophan appears in both a fumarate box and an acetyl-CoA box, making it dual",
        "Threonine appears in both the acetyl-CoA box and the succinyl-CoA box, making it dual like isoleucine",
        "Lysine appears in two boxes, making it dual",
        "Asparagine appears in the 2-oxoglutarate box"
      ],
      answer: 1,
      optionNotes: {
        0: { en: "Tryptophan appears only in the acetyl-CoA box in this figure; the diagram does not draw a glucogenic route for it, consistent with the book's own scope disclaimer.", cn: "色氨酸在这张图里只出现在乙酰辅酶 A 那个框中；图上没有为它画出生糖路线，这与书自己声明的取材范围一致。" },
        2: { en: "Lysine appears in exactly one box, which is precisely the evidence that it is purely ketogenic rather than dual.", cn: "赖氨酸只出现在一个框中，这恰恰是它属于纯生酮而非两者兼具的证据。" },
        3: { en: "Asparagine belongs to the oxaloacetate box with aspartate; the 2-oxoglutarate box holds Glu, Gln, His, Pro and Arg.", cn: "天冬酰胺属于与天冬氨酸同框的草酰乙酸处；2-氧戊二酸那个框里是 Glu、Gln、His、Pro、Arg。" }
      },
      why_en: "The figure lists threonine in the acetyl-CoA box (with Ile, Leu, Trp) and again in the succinyl-CoA box (with Ile, Met, Val). By the same criterion that makes isoleucine dual — appearing in two boxes because its skeleton splits into two fragments — threonine is dual too, though the opening paragraph named only Ile, Phe, Trp and Tyr.",
      why_cn: "图中把苏氨酸列在乙酰辅酶 A 框内（与 Ile、Leu、Trp 同框），又列在琥珀酰辅酶 A 框内（与 Ile、Met、Val 同框）。按照判定异亮氨酸两者兼具的同一标准——碳骨架裂成两段因而出现在两个框中——苏氨酸也是两者兼具，尽管开头那段只点了 Ile、Phe、Trp、Tyr。" },
    { type: "short",
      q_en: "Obr. 5.6 shows one branch leading away from the citrate cycle rather than into it. What is it, and what does it represent?",
      q_cn: "Obr. 5.6 中有一条分支不是通向柠檬酸循环，而是从它引出。那是什么？代表什么？",
      accept: ["PEP", "pyruvate", "丙酮酸", "glucose"],
      answer_en: "PEP (phosphoenolpyruvate) and D-glucose, shown branching off pyruvate. This branch represents the gluconeogenic endpoint — the outlet that makes an amino acid glucogenic, since a skeleton arriving at pyruvate can be carried on to glucose rather than simply oxidised.",
      answer_cn: "从丙酮酸分出去的 PEP（磷酸烯醇式丙酮酸）与 D-葡萄糖。这条分支代表糖异生的终点——正是这个出口使一个氨基酸成为生糖氨基酸，因为到达丙酮酸的碳骨架可以继续走向葡萄糖，而不只是被氧化掉。" }
  ]

});
