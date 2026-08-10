/* ============================================================
   Lehninger 8 — Chapter 9, section 9.1, Studying Genes and Their
   Products. DEPTH LAYER, and a LEHNINGER-ONLY section: the Czech
   textbook has no counterpart at all. Ruojin ruled this one
   "主要需要的" on 2026-08-06 (CORE2_LEHNINGER.md; the ruling is
   archived in HANDOFF_LEHNINGER.md section 9b, and the section is
   row 9.1 of lehninger_index/lehninger_only_scope.tsv, tagged
   `full`, 16 printed pages).

   WHY THIS NODE EXISTS. Measured 2026-08-08 across the ten Czech
   data files: CRISPR, Cas9, PCR, klonov, restrikc, plasmid,
   plazmid, knihovn and sekvenov all grep to ZERO. The ten hits on
   "Sanger" in ch10 are the insulin sequence of 1953, not a method.
   So this is not extra depth on something already taught — it is
   subject matter the app did not contain.

   topicKey "recombinant-dna-technology" is NEW (the 64th) and is
   deliberately single-book: there is no Czech node to join. That
   is expected for a Lehninger-only section and is not a defect.

   `chapter` here is LEHNINGER's chapter 9, not the Czech book's —
   chapter is book-local.
   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-9-1-1",
    book: "lehninger",
    topicKey: "recombinant-dna-technology",
    chapter: 9,
    section: "9.1",
    czTitle: "Žádná — klonování DNA, restrikční endonukleasy, vektory, exprese rekombinantních proteinů a knihovny",
    enTitle: "Studying genes and their products — why cutting DNA at palindromes makes cloning possible, how a vector plus a selectable marker turns a rare event into a colony you can pick, and how the cloned gene is then expressed, mutated and purified by its tag",
    cnTitle: "研究基因及其产物——为什么在回文序列上切开 DNA 使克隆成为可能、载体加选择标记如何把一个稀有事件变成一个可以挑起来的菌落，以及克隆到的基因随后如何被表达、突变和凭标签纯化",
    pages: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316],
    coverage: "full",
    coverageNote: "Read from Lehninger 8 section 9.1, B-copy text layer pp.1154-1201 in full, end to end through every subheading (Genes Can Be Isolated by DNA Cloning; Restriction Endonucleases and DNA Ligases Yield Recombinant DNA; Cloning Vectors Allow Amplification of Inserted DNA Segments; Cloned Genes Can Be Expressed to Amplify Protein Production; Many Different Systems Are Used to Express Recombinant Proteins; Alteration of Cloned Genes Produces Altered Proteins; Terminal Tags Provide Handles for Affinity Purification; The Polymerase Chain Reaction Offers Many Options for Cloning Experiments; DNA Libraries Are Specialized Catalogs of Genetic Information) plus the section's own SUMMARY, covering A printed pp.301-316. Tables 9-1, 9-2 and 9-3 and Figures 9-1 to 9-13 were read as text. NOT covered here and deliberately left out: DNA sequencing and CRISPR, which this edition places in sections 8 and 9.2 respectively and which grep to zero inside 9.1.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；分子生物学方法（克隆／PCR／载体）是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    trace: [
      {
        term: "restriction endonuclease 限制性内切酶——它先是防御装置，然后才成为工具",
        what: "**Werner Arber** 在 **1960 年代初**发现，这个酶在细菌里的生物学功能是**识别并切开外源 DNA**——比如入侵病毒的 DNA，这样的 DNA 就被称为「**受到限制的 (restricted)**」。随之而来的显然追问是：**细胞自己的染色体上也有同样的序列，为什么没被切掉？** 答案是宿主自己那份序列被一个专一的 **DNA 甲基化酶甲基化**了，而**甲基化会阻止切割**。核酸酶与它配套的甲基化酶合称 **restriction-modification system**。**所以，让这个酶在实验室里如此好用的那份专一性，本来是细菌免疫系统的副产品。**",
        from: "让**克隆**得以成立的，是这个酶身上**两个巧合叠在一起**：**识别序列是回文的**（通常 **4–6 bp**），而且**很多酶是错位切开的**——每一端留下 **2–4 个未配对的单链核苷酸**，这就是 **sticky ends（黏性末端）**。**回文 ＋ 错位**合起来的后果正是全部关键：**同一个酶切出来的每一个片段，末端都是同一段单链**，因此**任意两个这样的片段都能互相退火配对——目的基因和载体也不例外**。另一些酶则在相对的磷酸二酯键上把两条链**齐平**切断，留下 **blunt ends（平末端）**。实际后果**立刻就来了，而且是会考的**：平末端的连接**效率低于**互补黏性末端，因为黏性末端之间的碱基配对能在 ligase 工作时**把两段拽在一起**；而带有**不同、不互补**黏性末端的片段**基本上根本连不上**——**EcoRI 切出的片段接不上 BamHI 切出的片段**。**这就是为什么目的基因和载体必须用同一个酶来切。**",
        to: "考试里三处。第一，被问「**克隆为什么能成立**」——从**回文 ＋ 错位切**讲起，落到「同一个酶切出的片段末端相同，所以彼此能配对」。第二，**三型里只有一型好用**，这一条经常单独考：**I 型和 III 型**是庞大的多亚基复合物、**同时**带内切酶和甲基化酶活性，用起来很别扭；**II 型**（**Hamilton Smith 于 1970 年**首次分离）更简单、**不需要 ATP**，而且——**这是决定性的性质**——它水解切开的是**识别序列本身内部**的特定磷酸二酯键，**所以你确切知道切口落在哪里**。第三，**命名规则**看着随意其实不是，值得花一分钟：**种名三字母缩写 ＋（有时）一个菌株字母 ＋ 罗马数字**表示这是从该物种分离出的第几个酶。所以 **BamHI ＝ 从 *Bacillus amyloliquefaciens* 的 H 菌株中鉴定出的第一个 (I) 限制性内切酶**。",
        family: "两个到处都会遇到的**工程学便利**，要和本卡一起记：**①** 如今要克隆的片段多半是用 **PCR** 生成的，而**精心设计引物可以加上染色体里原本没有的 DNA**——引物带一段**不与模板退火的 5′ 延伸**，里面含有一个酶切位点，它**照样被复制进产物**；随后在这些**新造出来的位点**上切开扩增产物，就能**按需造出黏性末端**。**②** 为桥接两个待连接末端而插入的短合成 DNA 片段叫 **linker（接头）**；带有**多个不同识别序列**的 linker 就是 **multiple cloning site (MCS，多克隆位点)**——**正是它让现代载体可以反复使用**，因为它给你一份「在哪儿下刀」的菜单，于是同一个骨架能接纳许多不同的插入片段。⚠️ 还有一个**值得并排记住的对照**：**CRISPR 同样是细菌的抗噬菌体防御被改造成了工具**（见 `L-9-2-1`）。**「细菌免疫系统」是分子生物学工具箱反复回去取货的同一个抽屉。**",
        numbers: "识别序列通常长 **4–6 bp**，且是**回文**的；错位切开在每一端留下 **2–4 个**未配对的单链核苷酸。时间线与人：**Werner Arber，1960 年代初**发现其防御功能；**Hamilton Smith，1970 年**首次分离 II 型；随后 **Daniel Nathans** 用它们来绘制和分析基因与基因组，证明了这类酶的价值。如今已从不同细菌物种中发现**数千种** II 型酶，识别 **100 多种**不同序列。**II 型不需要 ATP。** 另外记一笔：保护宿主的那个**甲基化，与后来在真核基因调控里起作用的是同一套化学**。"
      }
    ],
    mustKnow: {
      en: "Cloning works because of one lucky fact about restriction endonucleases: they cut PALINDROMIC sequences, and many cut them OFF-CENTRE. So every fragment produced by a given enzyme ends in the same short single strand, and any two such fragments will therefore anneal to each other — the gene and the vector included. Everything else in this section is bookkeeping around that. The second idea is just as important and is easy to miss: transformation is very inefficient, so you never FIND the cell that took up your DNA. You arrange conditions in which only that cell can live.",
      cn: "克隆之所以成立，靠的是 restriction endonuclease 的一个巧合：它们识别的是**回文序列**，而且很多是**错位切开**的。于是同一个酶切出来的每一个片段，末端都是同一段单链——因此任意两个这样的片段都能互相退火配对，**目的基因和载体也不例外**。这一节其余的内容都是围绕这件事的记账。第二个同样重要、却很容易被忽略的想法是：转化的效率极低，所以你从来不是去**找**那个吸收了 DNA 的细胞——你是**布置出一个只有它能活下来的环境**。"
    },
    summary: {
      en: "A researcher wants one gene out of a chromosome of hundreds of millions of base pairs. Lehninger opens section 9.1 with exactly that problem and answers it with five steps: get the DNA segment, pick a small DNA that can replicate on its own, join the two covalently, move the result into a host, and then identify the host cells that took it. The enzymes that make step one and step three possible are restriction endonucleases and DNA ligase. Restriction endonucleases exist in bacteria as a defence — Werner Arber worked out in the early 1960s that their job is to destroy incoming viral DNA, while the cell's own DNA is protected by methylation at the same sequence, a pairing called a restriction-modification system. Type II enzymes, first isolated by Hamilton Smith in 1970, are the useful ones: no ATP, and they cut inside the recognition sequence itself. Those sequences are 4 to 6 bp and palindromic, and when the cut is staggered the fragments carry sticky ends that base-pair with any other fragment cut by the same enzyme. That, and not any deep principle, is why a gene and a vector can be joined at all — and why an EcoRI fragment will not ligate to a BamHI fragment. The vector supplies the rest. A plasmid carries an origin of replication that sets its copy number, one or more antibiotic-resistance genes so that cells carrying it survive a treatment that kills everything else, and a cluster of unique restriction sites to cut open; pBR322 of 1977 is the teaching example, 4,361 bp with ampicillin and tetracycline resistance. Bigger inserts need bigger vehicles: BACs hold 100,000 to 300,000 bp at one or two copies per cell, and YACs, which are real chromosomes with a centromere and two telomeres, hold up to two million. Once the gene is in, an expression vector adds what a eukaryotic gene lacks in a bacterium — a promoter, an operator, a ribosome-binding site — and the protein can reach a tenth of the cell's total protein. Hosts differ in what they can do: bacteria are cheap but often dump eukaryotic proteins into insoluble inclusion bodies, yeast folds and modifies better, baculovirus-infected insect cells better still, cultured mammalian cells best and most expensively. The cloned gene can then be altered deliberately by site-directed mutagenesis — the book's example changes Lys72 of RecA to Arg and gets a protein that binds ATP but cannot hydrolyse it — or fused to a tag so that affinity chromatography does the purification in one step. Finally, PCR extends the toolkit: RT-PCR reaches RNA, qPCR counts copies, and a cDNA library made from mRNA catalogues exactly the genes a tissue was expressing.",
      cn: "研究者想从几亿碱基对的染色体里取出**一个**基因。Lehninger 9.1 就是以这个问题开篇的，答案是五步：拿到目的 DNA 片段、选一个能自主复制的小 DNA、把两者共价连接、把产物送进宿主、再把吸收了它的宿主细胞挑出来。让第一步和第三步成为可能的酶，是 **restriction endonuclease** 和 **DNA ligase**。restriction endonuclease 在细菌里本来是**防御装置**——Werner Arber 在 1960 年代初弄清楚它的职责是摧毁入侵的病毒 DNA，而细胞自己的 DNA 在同一序列上被甲基化保护起来，这一对搭档叫 restriction-modification system。真正好用的是 **II 型**（Hamilton Smith 于 1970 年首次分离）：不需要 ATP，而且就在识别序列**内部**切开。这些序列长 4–6 bp、是**回文**的；当切口是错位的，片段就带上 **sticky ends**，能和任何被同一个酶切开的片段配对。基因和载体之所以能接到一起，靠的就是这件事，没有什么更深的原理——这也是为什么 EcoRI 切出的片段接不上 BamHI 切出的片段。其余的由载体提供。**plasmid** 带一个决定拷贝数的复制起点 ori、一个或多个抗生素抗性基因（好让带着它的细胞在杀死其余一切的处理中活下来）、以及一簇可供切开的唯一酶切位点；1977 年的 **pBR322** 是教科书例子，4,361 bp，带氨苄和四环素抗性。更大的插入片段需要更大的载具：**BAC** 装 100,000–300,000 bp，每个细胞只有一两个拷贝；**YAC** 干脆就是真正的染色体，带着丝粒和两个端粒，能装到两百万 bp。基因进去以后，**expression vector** 补上真核基因在细菌里所缺的东西——启动子、操纵基因、核糖体结合位点——蛋白产量可以达到细胞总蛋白的十分之一。宿主各有所长：细菌便宜，但常把真核蛋白丢进不溶的**包涵体**；酵母折叠和修饰得更好；杆状病毒感染的昆虫细胞更好；培养的哺乳动物细胞最好，也最贵。克隆到的基因随后可以被**定点突变**刻意改动——书里的例子把 RecA 的 Lys72 换成 Arg，得到一个能结合 ATP 却无法水解它的蛋白——或者融合上一个**标签**，让亲和层析一步完成纯化。最后，PCR 把工具箱又扩了一圈：RT-PCR 够得到 RNA，qPCR 能数拷贝数，而由 mRNA 建成的 **cDNA 文库**，恰好编目了某个组织当时正在表达的那些基因。"
    },
    points: [
      {
        cz: "pět kroků klonování",
        en: "CLONING IS FIVE STEPS, AND IT IS WORTH LEARNING THEM AS A LIST because every later complication hangs off one of them. (1) Obtain the DNA segment to be cloned — cut it out with restriction endonucleases, shear the genomic DNA randomly, or, most often now that sequences are in databases, amplify it by PCR or simply synthesise it. (2) Select a small DNA molecule capable of AUTONOMOUS REPLICATION — this is the cloning vector, and the word vector just means carrier. Most are modified versions of small DNAs that occur naturally in bacteria or eukaryotes; viral DNAs also serve. (3) Join the two fragments COVALENTLY, which DNA ligase does; the product, carrying covalently linked segments from two or more sources, is recombinant DNA. (4) Move the recombinant DNA out of the test tube and INTO A HOST, which supplies the enzymatic machinery for replication. (5) Select or identify the host cells that actually contain it. The collective name for all of this is recombinant DNA technology, informally genetic engineering. E. coli was the first host and is still the most common.",
        cn: "**克隆是五步，值得当成一张清单来记**，因为后面所有的复杂性都挂在其中某一步上。(1) **拿到目的 DNA 片段**——用 restriction endonuclease 切下来、把基因组 DNA 随机剪切，或者（如今序列大多已在数据库里，这是最常见的做法）用 PCR 扩增，甚至直接人工合成。(2) **选一个能自主复制的小 DNA 分子**——这就是 cloning vector，vector 这个词的意思不过是「载具」。多数载体是对细菌或真核生物中天然存在的小 DNA 的改造版；病毒 DNA 也可以担此角色。(3) **把两个片段共价连接**，这由 DNA ligase 完成；产物含有来自两个或更多来源的共价连接片段，就叫 **recombinant DNA**。(4) **把重组 DNA 从试管移进宿主**，宿主提供复制所需的酶机器。(5) **选出或鉴定出真正含有它的宿主细胞**。这一整套的统称是 recombinant DNA technology，非正式叫法是基因工程。E. coli 是第一个被使用的宿主，至今仍是最常用的。"
      },
      {
        cz: "restrikční endonukleasa je obrana, ne nástroj",
        en: "THE ENZYME WAS A DEFENCE BEFORE IT WAS A TOOL, and this is the single most useful thing to understand about it. Werner Arber discovered in the early 1960s that the biological function of restriction endonucleases in bacteria is to recognise and cleave FOREIGN DNA — the DNA of an infecting virus, for example. Such DNA is said to be restricted. The obvious question is why the enzyme does not destroy the cell's own chromosome, which contains the same sequence: the answer is that the host's own copy of that sequence is METHYLATED by a specific DNA methylase, and methylation blocks cleavage. The nuclease and its matching methylase together are called a restriction-modification system. So the specificity that makes the enzyme useful in the laboratory is a by-product of a bacterial immune system, and the methylation that protects the host is the same chemistry that will later matter for eukaryotic gene regulation.\n\nIN THE BOOK'S OWN WORDS: “the biological function of restriction endonucleases is to recognize and cleave foreign DNA” (A p.303).",
        cn: "**这个酶先是防御装置，然后才成为工具**，这是关于它最值得理解的一件事。Werner Arber 在 1960 年代初发现，restriction endonuclease 在细菌里的生物学功能是识别并切开**外源 DNA**——比如入侵病毒的 DNA。这样的 DNA 被称为「受到限制的」(restricted)。显而易见的问题是：细胞自己的染色体上也有同样的序列，为什么没被切掉？答案是宿主自己那份序列被一个专一的 DNA 甲基化酶**甲基化**了，而甲基化会阻止切割。核酸酶与它配套的甲基化酶合称 **restriction-modification system**。所以，让这个酶在实验室里如此好用的那份专一性，其实是细菌免疫系统的副产品；而保护宿主的那个甲基化，与后来在真核基因调控里起作用的是同一套化学。"
      },
      {
        cz: "II. typ — proč právě ten",
        en: "THERE ARE THREE TYPES AND ONLY ONE OF THEM IS USEFUL. Types I and III are large multisubunit complexes carrying BOTH the endonuclease and the methylase activities, which makes them awkward. Type II restriction endonucleases, first isolated by Hamilton Smith in 1970, are simpler, REQUIRE NO ATP, and — the decisive property — catalyse hydrolytic cleavage of particular phosphodiester bonds WITHIN THE RECOGNITION SEQUENCE ITSELF, so you know exactly where the cut falls. Daniel Nathans then demonstrated their utility by using them to map and analyse genes and genomes. Thousands of type II enzymes are now known from different bacterial species, recognising more than 100 different sequences. The naming convention is worth a moment because it looks arbitrary and is not: the name is a three-letter abbreviation of the bacterial species, sometimes a strain letter, then a roman numeral for which enzyme it was from that species. BamHI is thus the FIRST restriction endonuclease characterised from Bacillus amyloliquefaciens, strain H.\n\nIN THE BOOK'S OWN WORDS: “There are three types of restriction endonucleases, designated I, II, and III” (A p.303); “are simpler, require no ATP, and catalyze the hydrolytic cleavage of particular phosphodiester bonds” (A p.303).",
        cn: "**一共三型，只有一型好用。** I 型和 III 型是庞大的多亚基复合物，**同时**带着内切酶活性和甲基化酶活性，用起来很别扭。**II 型** restriction endonuclease（Hamilton Smith 于 1970 年首次分离）更简单，**不需要 ATP**，而且——这是决定性的性质——它水解切开的是**识别序列本身内部**的特定磷酸二酯键，所以你确切知道切口落在哪里。随后 Daniel Nathans 用它们来绘制和分析基因与基因组，证明了这类酶的价值。如今已从不同细菌物种中发现了数千种 II 型酶，识别 100 多种不同序列。**命名规则**值得花一分钟，因为它看着随意其实不是：名字是细菌**种名的三字母缩写**，有时再加一个**菌株**字母，最后用罗马数字表示这是从该物种分离出的第几个酶。所以 **BamHI** 就是从 *Bacillus amyloliquefaciens* **H 菌株**中鉴定出的**第一个 (I)** restriction endonuclease。"
      },
      {
        cz: "palindrom, lepivé a tupé konce",
        en: "PALINDROMIC RECOGNITION SEQUENCE PLUS AN OFF-CENTRE CUT IS THE WHOLE TRICK. Recognition sequences are usually 4 to 6 bp long and are palindromic. Some enzymes make STAGGERED cuts on the two strands, leaving two to four nucleotides of one strand unpaired at each end; these are STICKY ENDS, so called because they can base-pair with each other or with the complementary sticky ends of any other fragment. Others cut both strands straight across at opposing phosphodiester bonds, leaving BLUNT ENDS with no unpaired bases. The practical consequences follow immediately and are examinable. Ligation is LESS EFFICIENT for blunt ends than for complementary sticky ends, because base pairing holds the sticky ends together while ligase works. And fragments with DIFFERENT, non-complementary sticky ends generally are not ligated at all — a fragment generated by EcoRI will not link to one generated by BamHI. That is why the gene and the vector are cut with the SAME enzyme.\n\nIN THE BOOK'S OWN WORDS: “The recognition sequences are usually 4 to 6 bp long and are palindromic” (A p.303); “These unpaired strands are referred to as sticky ends” (A p.304); “leaving no unpaired bases on the ends, often called blunt ends” (A p.304).",
        cn: "**回文识别序列加上错位切开，就是全部的诀窍。** 识别序列通常长 4–6 bp，且是**回文**的。有些酶在两条链上**错位**切开，每一端留下 2–4 个未配对的单链核苷酸，这就是 **sticky ends（黏性末端）**——之所以叫黏，是因为它们能彼此配对，也能与任何其他片段的互补黏性末端配对。另一些酶则在相对的磷酸二酯键上把两条链**齐平切断**，留下没有未配对碱基的 **blunt ends（平末端）**。实际后果立刻就来了，而且是会考的：平末端的连接**效率低于**互补黏性末端，因为黏性末端之间的碱基配对能在 ligase 工作时把两段拽在一起；而带有**不同**、不互补黏性末端的片段基本上根本连不上——EcoRI 切出的片段接不上 BamHI 切出的片段。这就是为什么**目的基因和载体要用同一个酶来切**。"
      },
      {
        cz: "linker a mnohočetné klonovací místo (MCS)",
        en: "TWO ENGINEERING CONVENIENCES THAT SHOW UP EVERYWHERE. First, the fragment to be cloned is most often generated by PCR, and careful primer design lets you ADD DNA that was never in the chromosome: the primer carries a non-complementary 5' extension containing a restriction site, which does not anneal to the target but is nevertheless copied into the product. Cleaving the amplified fragment at those added sites creates sticky ends to order. Second, a short synthetic DNA fragment inserted to bridge two ends being ligated is called a LINKER; a linker carrying recognition sequences for several different restriction endonucleases is called a MULTIPLE CLONING SITE (MCS), and it is what makes a modern vector reusable — it gives you a menu of places to cut so the same backbone accepts many different inserts.",
        cn: "**两个到处都会遇到的工程学便利。** 第一，要克隆的片段如今多半是用 PCR 生成的，而**精心设计引物**可以让你**加上染色体里原本没有的 DNA**：引物带一段不互补的 5′ 延伸，里面含有一个酶切位点；这段延伸不与模板退火，却照样被复制进产物中。随后在这些新加的位点上切开扩增产物，就能**按需造出黏性末端**。第二，为桥接两个待连接末端而插入的短合成 DNA 片段叫 **linker（接头）**；带有多个不同 restriction endonuclease 识别序列的 linker，就叫 **multiple cloning site (MCS，多克隆位点)**——正是它让现代载体可以反复使用：它给你一份「在哪儿下刀」的菜单，于是同一个骨架能接纳许多不同的插入片段。"
      },
      {
        cz: "první rekombinantní DNA — Lobban a Kaiser, Berg",
        en: "THE FIRST RECOMBINANT DNA WAS MADE BEFORE RESTRICTION ENZYMES WERE AVAILABLE, which is a useful reminder that sticky ends are a concept, not a particular enzyme. Before type II restriction endonucleases were widely available, investigators generated sticky ends by the combined action of bacteriophage lambda exonuclease and terminal transferase: the lambda exonuclease chews back the 5' ends to expose single-stranded 3' ends, and terminal transferase then adds HOMOPOLYMERIC TAILS to those 3' ends — give one fragment a poly(dA) tail and the other a poly(dT) tail and they will anneal. Peter Lobban and Dale Kaiser used this method in 1971 in the first experiments to join naturally occurring DNA fragments. Similar methods were used soon afterwards in Paul Berg's laboratory to join DNA from simian virus 40 (SV40) to DNA from bacteriophage lambda, creating the first recombinant DNA molecule containing segments from DIFFERENT SPECIES.",
        cn: "**第一个重组 DNA 是在 restriction enzyme 可用之前做出来的**——这提醒我们，黏性末端是一个**概念**，不是某一个特定的酶。在 II 型 restriction endonuclease 尚未普及之前，研究者用**噬菌体 λ 外切酶**加**末端转移酶**的联合作用来制造黏性末端：λ 外切酶从 5′ 端咬回去，暴露出单链的 3′ 端；末端转移酶再在这些 3′ 端上添加**同聚物尾巴 (homopolymeric tails)**——给一个片段加 poly(dA) 尾、给另一个加 poly(dT) 尾，它们就会退火配对。**Peter Lobban 与 Dale Kaiser 于 1971 年**用这个方法完成了首次连接天然 DNA 片段的实验。不久之后，**Paul Berg** 实验室用类似方法把猿猴病毒 40 (SV40) 的 DNA 与噬菌体 λ 的 DNA 连接起来，造出了第一个含有**来自不同物种**片段的重组 DNA 分子。"
      },
      {
        cz: "plasmid — ori, marker, jedinečná místa, malá velikost",
        en: "WHAT MAKES A PLASMID A USEFUL VECTOR, read off pBR322. A plasmid is a circular DNA molecule that replicates SEPARATELY from the host chromosome; naturally occurring bacterial plasmids run from 5,000 to 400,000 bp, and many are little more than molecular parasites, though some earn their keep by conferring antibiotic resistance or a new capability — the Ti plasmid of Agrobacterium tumefaciens lets its host colonise plant cells. pBR322, built in 1977, shows the four features a cloning vector needs. (1) An ORIGIN OF REPLICATION (ori), where cellular enzymes start replication; an associated regulatory system holds pBR322 at 10 to 20 copies per cell. (2) GENES CONFERRING ANTIBIOTIC RESISTANCE, here to ampicillin (AmpR) and tetracycline (TetR), which is how cells containing the plasmid are selected. (3) SEVERAL UNIQUE RESTRICTION SITES (PstI, EcoRI, BamHI, SalI, PvuII) providing places to cut the plasmid open and insert foreign DNA. Unique matters: an enzyme that cut twice would remove a piece of the vector. (4) SMALL SIZE — 4,361 bp — which eases entry into cells and manipulation, and which was achieved by trimming away everything from a larger parent plasmid that the biochemist does not need.\n\nIN THE BOOK'S OWN WORDS: “A plasmid is a circular DNA molecule that replicates separately from the host chromosome” (A p.305); “Naturally occurring bacterial plasmids range in size from 5,000 to 400,000 bp” (A p.305).",
        cn: "**是什么让一个 plasmid 成为好用的载体**——照着 pBR322 读。plasmid 是**独立于宿主染色体复制**的环状 DNA 分子；天然细菌质粒大小从 5,000 到 400,000 bp 不等，许多不过是分子层面的寄生物，但也有些是有贡献的，比如赋予抗生素抗性或某种新能力——*Agrobacterium tumefaciens* 的 **Ti 质粒**让宿主能够定殖植物细胞。1977 年构建的 **pBR322** 展示了一个克隆载体需要的四项特征。(1) **复制起点 (ori)**，细胞的酶在此启动复制；配套的调控系统把 pBR322 维持在**每细胞 10–20 个拷贝**。(2) **抗生素抗性基因**，这里是氨苄青霉素 (AmpR) 和四环素 (TetR)，这正是筛选出含质粒细胞的手段。(3) **若干唯一的酶切位点**（PstI、EcoRI、BamHI、SalI、PvuII），提供切开质粒、插入外源 DNA 的地方。**「唯一」很关键**：一个会切两刀的酶会把载体切掉一块。(4) **体积小**——4,361 bp——便于进入细胞、也便于操作；这是通过从一个更大的亲本质粒上**削掉一切生化学家不需要的序列**得到的。"
      },
      {
        cz: "kopie na buňku a nekompatibilita",
        en: "COPY NUMBER IS SET BY THE ORIGIN, AND TWO PLASMIDS WITH THE SAME ORIGIN CANNOT COEXIST. The replication origins used in common plasmid vectors were originally taken from naturally occurring plasmids, and each is regulated to maintain a particular copy number; depending on which origin is used, that number ranges from one to hundreds or thousands per cell, which gives the investigator a real choice — high copy number for yield, low copy number for stability. The consequence to remember: two different plasmids CANNOT function in the same cell if they use the SAME origin of replication, because the regulation of one interferes with the replication of the other. Such plasmids are said to be INCOMPATIBLE. So if you want to put two or more plasmids into one bacterial cell, each must carry a different replication origin.\n\nIN THE BOOK'S OWN WORDS: “each of these origins is regulated to maintain a particular plasmid copy number” (A p.306); “Two different plasmids cannot function in the same cell if they use the same origin” (A p.306).",
        cn: "**拷贝数由复制起点决定，而两个用同一起点的质粒无法共存。** 常用质粒载体里的复制起点最初都取自天然质粒，每一种都被调控以维持特定的拷贝数；用哪个起点，拷贝数就从每细胞一个到几百上千个不等，这给了研究者真实的选择余地——**高拷贝求产量，低拷贝求稳定**。要记住的后果是：两个不同的质粒如果使用**相同的复制起点**，就**不能**在同一个细胞里共存，因为对其中一个的调控会干扰另一个的复制。这样的质粒被称为**不相容 (incompatible)**。所以如果你想把两个或更多质粒放进同一个细菌细胞，**每一个都必须带不同的复制起点**。"
      },
      {
        cz: "transformace, elektroporace, selekční vs. screenovatelný marker",
        en: "GETTING DNA IN IS INEFFICIENT, WHICH IS WHY SELECTION EXISTS. In the laboratory small plasmids enter bacteria by TRANSFORMATION: cells and plasmid DNA are incubated together at 0 degrees C in calcium chloride, then given a HEAT SHOCK by shifting rapidly to 37-43 degrees C. For reasons not well understood, some of the treated cells take up the DNA. Some species, such as Acinetobacter baylyi, are naturally competent and need no such treatment. The alternative is ELECTROPORATION, a high-voltage pulse that transiently makes the membrane permeable to large molecules. Either way, RELATIVELY FEW CELLS take up the plasmid — so a method is needed to find them, and there are two kinds. A SELECTABLE MARKER either permits a cell to grow (positive selection) or kills it (negative selection) under defined conditions; antibiotic resistance is the standard example, and pBR322 provides both. A SCREENABLE MARKER encodes a protein that makes the cell produce a coloured or fluorescent molecule; the cells are not harmed, and the ones carrying the plasmid are simply identified by the colour of their colonies.\n\nIN THE BOOK'S OWN WORDS: “small plasmids can be introduced into bacterial cells by a process called transformation” (A p.306); “If gene expression is disrupted by the introduction of a cloned DNA segment, the colony is white” (A p.307).",
        cn: "**把 DNA 送进去这件事效率很低，这正是 selection 存在的理由。** 实验室里小质粒通过**转化 (transformation)** 进入细菌：细胞与质粒 DNA 在 **0 °C 的氯化钙**溶液中一起温育，然后迅速升温到 **37–43 °C** 施加**热激**。出于尚未完全清楚的原因，部分经此处理的细胞会吸收 DNA。有些物种（如 *Acinetobacter baylyi*）**天然感受态**，不需要这套处理。另一条路是**电穿孔 (electroporation)**：一个高压脉冲让膜暂时对大分子通透。无论哪种方式，**只有相当少的细胞**会吸收质粒——所以必须有办法把它们找出来，而办法有两类。**选择标记 (selectable marker)** 在特定条件下要么允许细胞生长（正选择），要么杀死细胞（负选择）；抗生素抗性是标准例子，pBR322 两者都提供。**筛选标记 (screenable marker)** 编码一个让细胞产生**有色或荧光**分子的蛋白；细胞不受伤害，带质粒的那些仅凭菌落颜色就能认出来。"
      },
      {
        cz: "BAC — velké inzerty, par geny, modrobílá selekce",
        en: "PLASMIDS RUN OUT AT ABOUT 15,000 bp, AND BACs TAKE OVER. Transformation with purified DNA becomes less successful as plasmid size increases, so it is difficult to clone segments longer than about 15,000 bp in an ordinary plasmid. Bacterial artificial chromosomes (BACs) typically carry 100,000 to 300,000 bp. A BAC vector without an insert is a relatively simple plasmid, and it solves the size problem with three additions. First, a stable origin that maintains only ONE OR TWO COPIES per cell — deliberately low, because a low copy number limits the opportunities for unwanted RECOMBINATION between copies, which would otherwise scramble a large cloned insert over time. Second, PAR GENES, taken from the F plasmid, encoding proteins that direct reliable distribution of the recombinant chromosomes to daughter cells at division — necessary precisely because there are so few copies to go round. Third, both marker types: chloramphenicol resistance (CamR) for positive selection, and a lacZ gene positioned so that an insert DISRUPTS it. On plates containing X-gal, colonies with intact lacZ make active beta-galactosidase and turn BLUE; colonies whose lacZ was interrupted by the insert you wanted stay WHITE. White colonies are the ones to pick.",
        cn: "**质粒到大约 15,000 bp 就到头了，接力的是 BAC。** 用纯化 DNA 做转化，随着质粒变大成功率下降，所以在普通质粒里很难克隆超过约 **15,000 bp** 的片段。**细菌人工染色体 (BAC)** 通常装载 **100,000–300,000 bp**。不带插入片段的 BAC 载体本身只是个相对简单的质粒，它靠三项增补解决了大小问题。第一，一个**稳定的复制起点**，只维持**每细胞 1–2 个拷贝**——**故意压低**，因为低拷贝数减少了拷贝之间发生**非预期重组**的机会，否则大片段插入物会随时间被打乱。第二，取自 **F 质粒的 par 基因**，编码的蛋白负责在分裂时把重组染色体**可靠地分配**给子细胞——正因为拷贝数太少，这一步才必需。第三，两类标记都有：**氯霉素抗性 (CamR)** 用于正选择，以及一个位置经过安排的 **lacZ** 基因，使得插入片段会**打断**它。在含 **X-gal** 的平板上，lacZ 完整的菌落产生有活性的 β-半乳糖苷酶而变**蓝**；lacZ 被你想要的插入片段打断的菌落则保持**白色**。**要挑的是白色菌落。**"
      },
      {
        cz: "YAC — skutečný chromosom: ori, CEN, dva TEL",
        en: "A YAC IS NOT A PLASMID PRETENDING — IT IS A CHROMOSOME. Yeast artificial chromosomes carry the largest inserts, up to about 2 x 10^6 bp, and they do it by containing everything a eukaryotic chromosome needs to survive in the yeast nucleus: a yeast ORIGIN of replication, TWO SELECTABLE MARKERS, a CENTROMERE (CEN) and TWO TELOMERES (TEL) for stability and proper segregation at division. In use, the vector is grown as a circular bacterial plasmid, then cut: one enzyme (BamHI in the book's figure) removes the DNA lying between the two telomere sequences, leaving the telomeres at the ends of a now-linear molecule, and a second cut (EcoRI) splits it into two VECTOR ARMS, each carrying a different selectable marker. Genomic DNA is partially digested, size-separated by PULSED FIELD GEL ELECTROPHORESIS (ordinary gels cannot resolve pieces this big), ligated between the two arms, and used to transform yeast SPHEROPLASTS — cells pretreated to degrade the wall. Requiring BOTH markers for growth guarantees that only cells with a genuine arm-insert-arm chromosome survive. Two size facts are worth keeping: inserts over 150,000 bp are nearly as stable as normal chromosomes, whereas those under 100,000 bp are gradually lost during mitosis — and a YAC missing a telomere at either end is rapidly degraded.\n\nIN THE BOOK'S OWN WORDS: “Research on large genomes and the associated need for high” (A p.307).",
        cn: "**YAC 不是假装成染色体的质粒——它就是染色体。** 酵母人工染色体承载最大的插入片段，可达约 **2 × 10⁶ bp**，靠的是它含有一条真核染色体在酵母核内存活所需的全部要件：酵母**复制起点 (ori)**、**两个选择标记**、一个**着丝粒 (CEN)** 和**两个端粒 (TEL)**，后两者负责稳定性与分裂时的正确分离。使用时，载体先作为环状细菌质粒扩增，然后切开：一个酶（书中图里是 **BamHI**）切除位于两段端粒序列**之间**的 DNA，把端粒留在现已线性化的分子两端；第二刀（**EcoRI**）把它分成**两条载体臂**，各带一个不同的选择标记。基因组 DNA 经**部分酶解**、用**脉冲场凝胶电泳**按大小分离（普通凝胶分不开这么大的片段）、连接到两条臂之间，再用于转化酵母**原生质球 (spheroplast)**——即经预处理降解了细胞壁的细胞。**要求两个标记同时存在**才能生长，这就保证了只有真正带着「臂—插入片段—臂」结构染色体的细胞能活下来。两个尺寸事实值得记住：插入片段**超过 150,000 bp** 时几乎和正常染色体一样稳定，而**小于 100,000 bp** 的则在有丝分裂中逐渐丢失；另外，**任一端缺少端粒的 YAC 会被迅速降解**。"
      },
      {
        cz: "expresní vektor a kyvadlový vektor",
        en: "A CLONING VECTOR KEEPS A GENE; AN EXPRESSION VECTOR MAKES THE PROTEIN. Eukaryotic genes carry the sequences needed for transcription and regulation in their own cells, but those sequences DO NOT FUNCTION in bacteria — a eukaryotic gene dropped into E. coli lacks a bacterial promoter (where RNA polymerase binds to start mRNA synthesis), a ribosome-binding site (which allows translation), and other regulatory sequences. An EXPRESSION VECTOR supplies them, positioned correctly relative to the inserted gene: a well-characterised promoter (P) and its regulatory elements sit next to the MCS, so a gene inserted there is transcribed from that promoter, with the end encoding the protein's AMINO TERMINUS placed CLOSEST TO THE PROMOTER. An OPERATOR (O) permits regulation by a repressor, a ribosome-binding site improves translation, a transcription-termination sequence improves mRNA yield and stability, and a selectable marker allows the usual selection. Separately, a plasmid carrying multiple replication origins can be propagated in more than one species — for example in both yeast and E. coli — and is called a SHUTTLE VECTOR.\n\nIN THE BOOK'S OWN WORDS: “the regulated expression of a cloned gene are called expression vectors” (A p.309).",
        cn: "**cloning vector 保存基因；expression vector 造出蛋白。** 真核基因带着它在自己细胞里转录和调控所需的序列，但那些序列**在细菌里不起作用**——一个真核基因丢进 E. coli，缺的是细菌**启动子**（RNA 聚合酶结合以启动 mRNA 合成的位置）、**核糖体结合位点**（使翻译得以进行）以及其他调控序列。**expression vector** 把这些补上，并且相对于插入基因摆在正确位置：一个性质研究得很透的启动子 (P) 及其调控元件紧邻 MCS，于是插在那里的基因就由该启动子转录，而**编码蛋白氨基端的那一端要离启动子最近**。**操纵基因 (O)** 让阻遏物得以调控，**核糖体结合位点**改善翻译，**转录终止序列**改善 mRNA 的量与稳定性，**选择标记**则提供常规筛选。另外，带有多个复制起点、因而能在**不止一个物种**中扩增的质粒（例如在酵母和 E. coli 中都能用），叫做**穿梭载体 (shuttle vector)**。"
      },
      {
        cz: "hostitelské systémy — bakterie, kvasinky, hmyz, savčí buňky",
        en: "EVERY HOST IS A TRADE-OFF, AND THE TRADE IS ALWAYS FOLDING AND MODIFICATION AGAINST COST. BACTERIA, especially E. coli, remain the most common: regulatory sequences are well understood, growth is cheap, DNA goes in and out easily, and fermenters give huge yields. But many heterologous proteins do not fold correctly, many miss the posttranslational modification or proteolytic cleavage they need, and eukaryotic proteins frequently aggregate into insoluble precipitates called INCLUSION BODIES. Expression can be so efficient that the product is 10% or more of cellular protein, at which point some foreign proteins KILL the host — so expression is limited to the few hours before harvest. Two bacterial systems are named: the LACTOSE OPERON promoter, which is convenient but LEAKY (not fully off without lactose, a problem if the product is toxic) and not always efficient enough; and the BACTERIOPHAGE T7 system, where the gene is fused to a T7 promoter and transcribed not by E. coli's polymerase but by separately cloned, tightly regulated T7 RNA polymerase — very efficient and properly switchable. YEAST (S. cerevisiae) works on the same principles, using the GAL1 and GAL10 promoters, which are ON in galactose and OFF in glucose, so expression is controlled by the choice of medium; being a eukaryote, yeast folds and modifies eukaryotic proteins more accurately. INSECT CELLS use baculoviruses. MAMMALIAN CELLS in culture use engineered adenoviruses and retroviruses, give the most faithful modification and can express transiently or permanently, but tissue culture is very expensive — so this route is used to TEST FUNCTION in vivo rather than to manufacture.",
        cn: "**每个宿主都是一次权衡，而权衡的两端永远是「折叠与修饰」对「成本」。** **细菌**（尤其 E. coli）仍最常用：调控序列研究得透、培养便宜、DNA 进出容易、发酵罐能给出巨大产量。但许多异源蛋白折叠不正确，许多得不到所需的翻译后修饰或蛋白酶切割，真核蛋白还常常聚集成不溶的沉淀，叫**包涵体 (inclusion bodies)**。表达可以高效到产物占细胞总蛋白的 **10% 以上**，而到了这个程度，有些外源蛋白会**杀死宿主**——所以表达要限制在收获前的**几个小时**内。书中点名两个细菌系统：**乳糖操纵子**启动子，方便但**渗漏**（没有乳糖时也关不严，如果产物有毒就是麻烦），而且效率有时不够；以及 **T7 噬菌体系统**，把基因融合到 T7 启动子下，由**单独克隆、严格调控**的 T7 RNA 聚合酶（而非 E. coli 自己的聚合酶）来转录——效率很高，且能真正开关。**酵母** (*S. cerevisiae*) 原理相同，用 **GAL1/GAL10 启动子**，在半乳糖中**开**、在葡萄糖中**关**，所以靠**选培养基**就能控制表达；且因为它是真核生物，对真核蛋白的折叠和修饰更准确。**昆虫细胞**用杆状病毒。培养的**哺乳动物细胞**用改造过的腺病毒和逆转录病毒，修饰最忠实，还能选择瞬时或永久表达，但组织培养**非常昂贵**——所以这条路主要用来**在体内检验功能**，而不是用来生产。"
      },
      {
        cz: "bakulovirus a bacmid",
        en: "THE INSECT SYSTEM IS WORTH KNOWING FOR ITS YIELD AND FOR ONE PIECE OF VOCABULARY. Baculoviruses are insect viruses with double-stranded DNA genomes; infecting larval hosts, they kill the larvae and turn them into virus factories. Late in infection they make large amounts of two proteins, p10 and polyhedrin, NEITHER OF WHICH is needed for virus production in cultured cells — so both genes can be replaced by the gene for a heterologous protein, which is then produced at up to 25% of total protein. The virus used is Autographa californica multicapsid nucleopolyhedrovirus (AcMNPV). Its genome of 134,000 bp is too large for direct cloning and purification is cumbersome, so the practical solution is a BACMID: a large circular DNA containing the whole baculovirus genome plus sequences allowing it to replicate in E. coli. The gene of interest is cloned into a small plasmid and combined with the bacmid by SITE-SPECIFIC RECOMBINATION in vivo. Note the vocabulary: the word TRANSFECTION, rather than transformation, is used when the introduced DNA includes viral sequences and leads to viral replication.\n\nIN THE BOOK'S OWN WORDS: “Baculoviruses are insect viruses with double-stranded DNA genomes” (A p.311).",
        cn: "**昆虫系统值得记住，一是因为它的产量，二是因为一个词。** 杆状病毒是双链 DNA 基因组的昆虫病毒；感染幼虫宿主后杀死幼虫，把它变成病毒工厂。感染晚期它们大量产生两个蛋白 **p10** 和 **多角体蛋白 (polyhedrin)**，而这两个在培养细胞中产生病毒时**都不需要**——所以两个基因都可以被异源蛋白的基因替换，产量可达总蛋白的 **25%**。所用病毒是 *Autographa californica* 多核衣壳核多角体病毒 (**AcMNPV**)。它 **134,000 bp** 的基因组太大，无法直接克隆，纯化也很麻烦，于是实际方案是 **bacmid**：一个包含整个杆状病毒基因组、外加使其能在 E. coli 中复制的序列的大型环状 DNA。目的基因先克隆进一个小质粒，再通过体内的**位点特异性重组**与 bacmid 合并。注意这个词：当导入的 DNA 含有病毒序列并导致病毒复制时，用的是 **transfection（转染）** 而不是 transformation。"
      },
      {
        cz: "cílená mutageneze — RecA Lys72 na Arg",
        en: "SITE-DIRECTED MUTAGENESIS IS HOW YOU ASK A PROTEIN WHAT A SINGLE RESIDUE DOES. Alter the DNA of the cloned gene and you alter the protein. If suitable restriction sites flank the region of interest, simply cut out that segment and replace it with a synthetic one identical except for the desired change. When no convenient sites exist, use OLIGONUCLEOTIDE-DIRECTED MUTAGENESIS: denature the cloned gene, anneal two short complementary synthetic strands carrying the desired base change to opposite strands of the circular vector — a single mismatch in 30 to 40 bp does not prevent annealing — and let them PRIME synthesis in both directions around the plasmid. After several PCR cycles the mutation-containing DNA predominates and is used to transform bacteria. The book's worked example is the best kind: RecA is a 352-residue protein whose Lys at position 72 is involved in ATP hydrolysis; changing Lys72 to Arg gives a variant that BINDS ATP BUT CANNOT HYDROLYSE IT, which is exactly the tool needed to separate binding from hydrolysis in the protein's mechanism. Changes need not be small — whole domains can be deleted by cutting and religating, and parts of two different genes can be joined to give a FUSION PROTEIN.\n\nIN THE BOOK'S OWN WORDS: “be replaced individually by site-directed mutagenesis” (A p.312).",
        cn: "**定点突变是你向一个蛋白提问「某一个残基到底在做什么」的方式。** 改动克隆基因的 DNA，就改动了蛋白。如果目标区域两侧恰好有合适的酶切位点，直接把那一段切下来，换成一段除了目标改动之外完全相同的合成序列即可。**没有**方便的位点时，就用**寡核苷酸介导的诱变**：把克隆基因变性，让两条携带目标碱基改动的短互补合成链退火到环状载体的两条链上——**30–40 bp 中的单个错配不会阻止退火**——再让它们作为**引物**沿着质粒双向合成。经过几轮 PCR 循环后，含突变的 DNA 占据优势，即可用于转化细菌。书里那个实例是最好的一类：**RecA** 是一个 352 残基的蛋白，其 **72 位的 Lys** 参与 ATP 水解；把 **Lys72 换成 Arg**，得到的变体**能结合 ATP 却无法水解它**——这恰恰是把「结合」与「水解」在机制上拆开所需要的工具。改动不必很小：整个结构域可以通过切开再连接而删除，两个不同基因的部分也可以拼接，给出**融合蛋白 (fusion protein)**。"
      },
      {
        cz: "afinitní značky — His-tag, GST, MBP",
        en: "A TAG TURNS ANY PROTEIN INTO ONE THAT AFFINITY CHROMATOGRAPHY CAN CATCH. Affinity chromatography is among the most efficient purification methods, but most proteins bind no ligand that can conveniently be immobilised. The fix is genetic: fuse the target gene to a gene encoding a peptide or protein that binds a simple, stable ligand tightly and specifically. Lehninger's table gives Protein A (59 kDa, binds the Fc portion of IgG), (His)6 (0.8 kDa, binds Ni2+), glutathione-S-transferase or GST (26 kDa, binds glutathione), maltose-binding protein (41 kDa, binds maltose), beta-galactosidase (116 kDa, binds TPEG) and the chitin-binding domain (5.7 kDa, binds chitin). The GST example shows the whole cycle: the fusion protein is expressed, a crude extract is passed through a column of glutathione immobilised on cross-linked agarose beads, everything else washes through, and the fusion protein is eluted gently with high salt or with FREE glutathione competing for the binding site. Two practical points that separate a good answer from a memorised one. The larger tags, such as maltose-binding protein, add SOLUBILITY and stability, rescuing proteins that would otherwise be inactive through misfolding. And every tag is a risk: even a small tag can perturb folding and hence the result, and even after protease cleavage one or a few extra residues REMAIN on the protein — so the effect of the tag must be controlled for, not assumed absent.\n\nIN THE BOOK'S OWN WORDS: “Affinity chromatography is one of the most efficient methods for purifying proteins” (A p.313).",
        cn: "**标签把任意一个蛋白变成亲和层析抓得住的蛋白。** 亲和层析是效率最高的纯化方法之一，但多数蛋白并不结合任何便于固定化的配体。解决办法是遗传学的：把目的基因与一个编码「能紧密而专一地结合某种简单稳定配体」的肽或蛋白的基因**融合**。Lehninger 的表格给出：**Protein A**（59 kDa，结合 IgG 的 Fc 部分）、**(His)₆**（0.8 kDa，结合 **Ni²⁺**）、**谷胱甘肽-S-转移酶 GST**（26 kDa，结合谷胱甘肽）、**麦芽糖结合蛋白 MBP**（41 kDa，结合麦芽糖）、**β-半乳糖苷酶**（116 kDa，结合 TPEG）以及**几丁质结合结构域**（5.7 kDa，结合几丁质）。GST 的例子展示了完整循环：表达融合蛋白，把粗提液通过固定有谷胱甘肽的交联琼脂糖珠柱，其余蛋白全部流穿弃去，最后用**高盐**或**游离谷胱甘肽**竞争结合位点，温和地把融合蛋白洗脱下来。两个能把好答案与背诵区分开的实用要点：**较大的标签**（如 MBP）能额外提供**可溶性**与稳定性，挽救那些否则会因错误折叠而失活的蛋白；而**每一个标签都是风险**——即使很小的标签也可能扰动折叠、进而扰动结果，而且即便用蛋白酶切掉，**仍会有一到几个多余残基留在蛋白上**。所以标签的影响必须**通过对照来排除**，而不是假定它不存在。"
      },
      {
        cz: "RT-PCR a qPCR",
        en: "TWO PCR VARIANTS THAT ANSWER DIFFERENT QUESTIONS. REVERSE TRANSCRIPTASE PCR (RT-PCR) reaches RNA: the first cycle uses reverse transcriptase, which works like DNA polymerase but copies an RNA template into DNA; from then on ordinary DNA polymerases and standard protocols take over. Its diagnostic use follows directly — because only living cells are transcribing, RT-PCR distinguishes sequences from living cells from those of dead tissue. QUANTITATIVE PCR (qPCR, also called real-time PCR) counts instead: the reaction runs in the presence of a reporter oligonucleotide carrying both a FLUOROPHORE and a QUENCHER, so it is dark until it anneals to the amplified segment, which separates the two and lets fluorescence appear. Signal therefore rises exponentially with product, then plateaus as reagents are exhausted. The readout is CT, the cycle number at which fluorescence first crosses a set threshold: a sequence present in greater amounts at the start reaches the threshold EARLIER, and a no-template control shows only slow background drift. So qPCR reveals, for example, genes amplified in tumour cells. Combine the two and you have the standard way to compare the amount of a particular mRNA between conditions — that is, to monitor gene expression.",
        cn: "**两个回答不同问题的 PCR 变体。** **逆转录 PCR (RT-PCR)** 够得到 RNA：第一轮循环使用**逆转录酶**，它像 DNA 聚合酶一样工作，但以 RNA 为模板合成 DNA；此后就交给普通 DNA 聚合酶和标准流程。它的诊断用途直接由此而来——因为**只有活细胞在转录**，RT-PCR 能把来自活细胞的序列与来自死组织的区分开。**定量 PCR (qPCR，又称实时 PCR)** 则是用来**数数**的：反应在一条同时带有**荧光基团**和**淬灭基团**的报告寡核苷酸存在下进行，所以起初是暗的；一旦它与扩增出的片段退火配对，两者被分开，荧光才出现。因此信号随产物呈指数上升，待试剂耗尽后进入平台期。读出的量是 **CT**，即荧光首次越过设定阈值的循环数：**起始量更多的序列会更早**达到阈值；无模板对照则只显示缓慢的背景漂移。所以 qPCR 能揭示比如肿瘤细胞中被扩增的基因。把两者结合起来，就是比较不同条件下某一特定 mRNA 含量的标准方法——也就是**监测基因表达**。"
      },
      {
        cz: "cDNA knihovna a kombinatorická knihovna",
        en: "A LIBRARY IS A CATALOGUE, AND WHICH CATALOGUE DEPENDS ON WHAT YOU PUT IN IT. A DNA library is a collection of DNA clones gathered for gene discovery or for determining gene or protein function. A cDNA LIBRARY is built from mRNA: extract the mRNA from an organism or from particular cells or tissues, use REVERSE TRANSCRIPTASE to make complementary DNAs, ligate oligonucleotides of known sequence to the 3' end of the first strand to prime second-strand synthesis, then clone the resulting double-stranded cDNA into a vector. If the host is E. coli, each cell carries one cloned sequence and the library runs to millions of cells and millions of segments. The interpretive point is the whole value of it: such a library CONTAINS NO DNA THAT WAS NOT TRANSCRIBED, so the presence of a gene in it means that gene WAS BEING EXPRESSED in those cells under those conditions. A COMBINATORIAL GENE LIBRARY is the opposite in scope — many variants of ONE gene, made for example by amplifying a segment with a deliberately inaccurate DNA polymerase so each clone carries one or two random base changes. You then select from it the variants of the enzyme with improved properties, or simply read off which changes were tolerated and which were not.\n\nIN THE BOOK'S OWN WORDS: “A DNA library is a collection of DNA clones” (A p.315).",
        cn: "**文库就是目录，而是哪一种目录，取决于你往里放了什么。** DNA 文库是为了**基因发现**或**确定基因／蛋白功能**而收集的一组 DNA 克隆。**cDNA 文库**由 mRNA 建成：从生物体或特定细胞、组织中提取 mRNA，用**逆转录酶**合成互补 DNA，把已知序列的寡核苷酸连接到第一链的 3′ 端以引发第二链合成，再把得到的双链 cDNA 克隆进载体。如果宿主是 E. coli，每个细胞携带一个克隆序列，整个文库可达数百万细胞、数百万个片段。而**它全部的价值在于这个解读要点**：这样的文库里**不含任何未被转录的 DNA**，所以某个基因出现在其中，就意味着在**那些细胞、那些条件下，该基因当时正在表达**。**组合基因文库**在范围上正好相反——它是**同一个基因**的许多变体，例如用一个**故意不准确**的 DNA 聚合酶扩增某一片段，使每个克隆带上一两个随机碱基改变。然后你可以从中**筛选**出性质改良的酶变体，或者干脆读出哪些改变是可耐受的、哪些不是。"
      }
    ],
    terms: [
      {
        cz: "restrikční endonukleasa",
        en: "restriction endonuclease",
        cn: "限制性内切核酸酶",
        def_en: "A bacterial enzyme that recognises a specific short palindromic sequence (the recognition sequence or restriction site) and cleaves DNA there. Its natural role is defence: it destroys incoming foreign DNA, while the host's own copy of the sequence is protected by methylation. Type II enzymes, isolated by Hamilton Smith in 1970, need no ATP and cut inside the recognition sequence itself, which is why they, and not types I or III, are the laboratory tool.",
        def_cn: "一类细菌酶，识别特定的短回文序列（识别序列／限制性位点）并在该处切开 DNA。它的天然角色是**防御**：摧毁入侵的外源 DNA，而宿主自身那份序列则由甲基化加以保护。**II 型**（Hamilton Smith 于 1970 年分离）不需要 ATP，且就在识别序列**内部**切开——这正是它、而非 I 型或 III 型成为实验室工具的原因。"
      },
      {
        cz: "restrikčně-modifikační systém",
        en: "restriction-modification system",
        cn: "限制-修饰系统",
        def_en: "The paired restriction endonuclease and its corresponding DNA methylase. The methylase marks the host's own recognition sequences so the nuclease cannot cut them; foreign DNA arrives unmethylated and is destroyed. This is how a bacterium distinguishes self from non-self at the level of DNA sequence.",
        def_cn: "限制性内切酶与其配套 DNA 甲基化酶组成的搭档。甲基化酶给宿主自己的识别序列做上标记，使核酸酶无法切割；外源 DNA 到达时未被甲基化，因而被摧毁。这就是细菌在 **DNA 序列层面**区分「自我」与「非我」的方式。"
      },
      {
        cz: "lepivé konce",
        en: "sticky ends",
        cn: "黏性末端",
        def_en: "The short single-stranded overhangs (two to four nucleotides) left when a restriction endonuclease cuts the two strands in a staggered fashion. Because the recognition sequence is palindromic, every fragment cut by that enzyme carries the same overhang, so any two of them can base-pair. Contrast blunt ends, cut straight across; blunt ligation works but is less efficient, and non-complementary sticky ends generally will not ligate at all.",
        def_cn: "restriction endonuclease **错位**切开两条链时留下的短单链突出端（2–4 个核苷酸）。由于识别序列是**回文**的，该酶切出的每个片段都带有**相同的**突出端，因此任意两个都能碱基配对。对比 **blunt ends（平末端）**，那是齐平切断的；平末端也能连接，但效率更低，而**不互补的**黏性末端基本上根本连不上。"
      },
      {
        cz: "klonovací vektor",
        en: "cloning vector",
        cn: "克隆载体",
        def_en: "A small DNA molecule capable of autonomous replication, used to carry an inserted DNA segment into a host cell and be copied there. The word vector simply means carrier. A usable one needs an origin of replication, at least one selectable marker, and unique restriction sites to be cut open at; small size helps it enter cells.",
        def_cn: "一个能**自主复制**的小 DNA 分子，用来把插入的 DNA 片段带进宿主细胞并在其中被复制。vector 一词的意思就是「载具」。一个可用的载体需要：**复制起点**、至少一个**选择标记**，以及可供切开的**唯一酶切位点**；体积小则有助于进入细胞。"
      },
      {
        cz: "plasmid",
        en: "plasmid",
        cn: "质粒",
        def_en: "A circular DNA molecule that replicates separately from the host chromosome, 5,000 to 400,000 bp in nature. Its origin of replication sets the copy number, from one to thousands per cell. Two plasmids using the same origin are incompatible and cannot be maintained in the same cell. The teaching example is pBR322 (1977, 4,361 bp, AmpR and TetR, 10-20 copies per cell).",
        def_cn: "一种**独立于宿主染色体复制**的环状 DNA 分子，天然大小 5,000–400,000 bp。它的**复制起点决定拷贝数**，从每细胞一个到上千个不等。使用**相同复制起点**的两个质粒**不相容**，无法在同一细胞中共存。教科书例子是 **pBR322**（1977 年，4,361 bp，带 AmpR 与 TetR，每细胞 10–20 拷贝）。"
      },
      {
        cz: "rekombinantní DNA",
        en: "recombinant DNA",
        cn: "重组 DNA",
        def_en: "A DNA molecule comprising covalently linked segments from two or more sources, made by joining a fragment to a vector with DNA ligase. The first molecule joining segments from different species was made in Paul Berg's laboratory, linking SV40 DNA to bacteriophage lambda DNA, shortly after Lobban and Kaiser first joined naturally occurring fragments in 1971.",
        def_cn: "由**两个或更多来源**的片段共价连接而成的 DNA 分子，通过用 DNA ligase 把目的片段与载体连接得到。第一个连接**不同物种**片段的分子出自 **Paul Berg** 实验室，把 SV40 DNA 与噬菌体 λ DNA 连在一起；此前不久，**Lobban 与 Kaiser 于 1971 年**首次连接了天然存在的 DNA 片段。"
      },
      {
        cz: "selekční marker",
        en: "selectable marker",
        cn: "选择标记",
        def_en: "A gene on the vector that either permits a cell to grow (positive selection) or kills it (negative selection) under defined conditions — typically antibiotic resistance. It exists because transformation is inefficient: rather than finding the rare cell that took up the DNA, you create conditions in which only that cell survives. Distinguish from a screenable marker, which harms nothing and merely makes the right colonies a different colour.",
        def_cn: "载体上的一个基因，在特定条件下要么**允许**细胞生长（正选择），要么**杀死**细胞（负选择）——典型的就是抗生素抗性。它之所以存在，是因为**转化效率极低**：与其去寻找那个吸收了 DNA 的稀有细胞，不如**创造出只有它能存活的条件**。要与 **screenable marker（筛选标记）**区分开——后者不伤害任何细胞，只是让对的菌落呈现不同颜色。"
      },
      {
        cz: "modrobílá selekce (lacZ / X-gal)",
        en: "blue-white screening (lacZ / X-gal)",
        cn: "蓝白斑筛选",
        def_en: "A screenable marker system. The vector carries lacZ, encoding beta-galactosidase, positioned so that a cloned insert disrupts it. On plates containing X-gal, colonies with intact lacZ convert the colourless X-gal to a blue product and turn blue; colonies whose lacZ was interrupted by the desired insert stay white. The white colonies are the ones carrying the insert.",
        def_cn: "一套**筛选标记**系统。载体带有编码 β-半乳糖苷酶的 **lacZ**，其位置经过安排，使得克隆插入片段会**打断**它。在含 **X-gal** 的平板上，lacZ 完整的菌落把无色的 X-gal 转化为蓝色产物而变**蓝**；lacZ 被目标插入片段打断的菌落则保持**白色**。**带有插入片段的是白色菌落。**"
      },
      {
        cz: "BAC — bakteriální umělý chromosom",
        en: "bacterial artificial chromosome (BAC)",
        cn: "细菌人工染色体",
        def_en: "A plasmid vector engineered to carry very long inserts, typically 100,000 to 300,000 bp, where an ordinary plasmid tops out near 15,000 bp. It uses a stable origin holding it at one or two copies per cell — low deliberately, to limit recombination between copies that would scramble a large insert — plus par genes from the F plasmid to ensure each daughter cell gets a copy, and both a selectable marker (CamR) and a screenable one (lacZ).",
        def_cn: "经改造以承载超长插入片段的质粒载体，通常 **100,000–300,000 bp**，而普通质粒到约 15,000 bp 就到顶了。它使用一个**稳定的复制起点**将拷贝数维持在**每细胞 1–2 个**——**故意压低**，以减少拷贝间发生重组、进而打乱大片段插入物的机会——外加取自 **F 质粒的 par 基因**确保每个子细胞都能分到一份，并同时具备**选择标记 (CamR)** 和**筛选标记 (lacZ)**。"
      },
      {
        cz: "YAC — kvasinkový umělý chromosom",
        en: "yeast artificial chromosome (YAC)",
        cn: "酵母人工染色体",
        def_en: "A vector carrying everything a eukaryotic chromosome needs in the yeast nucleus — a yeast origin, a centromere (CEN), two telomeres (TEL) and two selectable markers — and therefore able to hold inserts up to about 2 x 10^6 bp. Requiring both markers ensures only genuine arm-insert-arm constructs survive. Inserts over 150,000 bp are nearly as stable as normal chromosomes; those under 100,000 bp are gradually lost in mitosis, and a YAC missing either telomere is rapidly degraded.",
        def_cn: "一种携带真核染色体在酵母核内所需全部要件的载体——酵母**复制起点**、一个**着丝粒 (CEN)**、**两个端粒 (TEL)** 和**两个选择标记**——因而能容纳高达约 **2 × 10⁶ bp** 的插入片段。**要求两个标记同时存在**，可保证只有真正的「臂—插入片段—臂」构建体能存活。插入片段**超过 150,000 bp** 时几乎与正常染色体一样稳定；**小于 100,000 bp** 的在有丝分裂中逐渐丢失；而**缺少任一端粒**的 YAC 会被迅速降解。"
      },
      {
        cz: "expresní vektor",
        en: "expression vector",
        cn: "表达载体",
        def_en: "A cloning vector that additionally carries the transcription and translation signals needed to make the protein, not merely keep the gene: a promoter, an operator for repressor control, a ribosome-binding site, and often a transcription-termination sequence. Necessary because a eukaryotic gene's own regulatory sequences do not function in a bacterium. The gene end encoding the protein's amino terminus is placed closest to the promoter.",
        def_cn: "一种克隆载体，额外携带**造出蛋白**（而不只是保存基因）所需的转录与翻译信号：**启动子**、供阻遏物调控的**操纵基因**、**核糖体结合位点**，通常还有**转录终止序列**。之所以必需，是因为真核基因自身的调控序列**在细菌里不起作用**。基因中编码蛋白**氨基端**的那一端要摆得**离启动子最近**。"
      },
      {
        cz: "inkluzní tělíska",
        en: "inclusion bodies",
        cn: "包涵体",
        def_en: "The insoluble intracellular precipitates that many eukaryotic proteins form when overexpressed in bacteria, because they fail to fold correctly in that environment. They are the standard reason a bacterial expression attempt yields plenty of protein and no activity, and the standard argument for moving to yeast, insect or mammalian cells — or for using a large solubilising tag such as maltose-binding protein.",
        def_cn: "许多真核蛋白在细菌中过表达时形成的**不溶性胞内沉淀**，原因是它们在那个环境里无法正确折叠。它们是「细菌表达拿到了大量蛋白却没有活性」这一结果的标准原因，也是转向**酵母、昆虫或哺乳动物细胞**、或者改用 **MBP 这类大型增溶标签**的标准理由。"
      },
      {
        cz: "cílená mutageneze",
        en: "site-directed mutagenesis",
        cn: "定点突变",
        def_en: "Deliberately changing specified residues of a protein by altering the DNA of its cloned gene, either by replacing a restriction fragment with a synthetic one or, when no convenient sites exist, by annealing mutagenic oligonucleotides that prime synthesis around the plasmid. Lehninger's example: RecA Lys72 to Arg gives a protein that binds ATP but cannot hydrolyse it, separating binding from hydrolysis.",
        def_cn: "通过改动克隆基因的 DNA 来**刻意改变**蛋白中指定的残基；做法或是用一段合成片段替换某个限制性片段，或者在没有合适位点时，让携带突变的寡核苷酸退火并作为引物沿质粒合成。Lehninger 的例子：**RecA 的 Lys72 换成 Arg**，得到一个能结合 ATP 却**无法水解**它的蛋白，从而把「结合」与「水解」拆开。"
      },
      {
        cz: "afinitní značka (tag)",
        en: "affinity tag",
        cn: "亲和标签",
        def_en: "A peptide or protein fused to a target protein by joining their genes, chosen because it binds a simple, stable, immobilisable ligand — so the fusion protein can be captured on a column and everything else washed away. Common ones: (His)6 on Ni2+, GST on glutathione, maltose-binding protein on maltose, protein A on the Fc of IgG. Large tags add solubility. Every tag can perturb folding, and protease removal still leaves a residue or two behind, so its effect must be controlled for.",
        def_cn: "通过把基因拼接在一起，与目的蛋白**融合**的一段肽或蛋白；之所以选它，是因为它能结合某种简单、稳定、可固定化的配体——于是融合蛋白能被柱子捕获，其余一切被洗掉。常见的有：**(His)₆** 对 **Ni²⁺**、**GST** 对谷胱甘肽、**MBP** 对麦芽糖、**Protein A** 对 IgG 的 Fc。大标签能额外**增溶**。但**任何标签都可能扰动折叠**，而且用蛋白酶切除后仍会**残留一两个残基**，所以必须**用对照排除**它的影响。"
      },
      {
        cz: "cDNA knihovna",
        en: "cDNA library",
        cn: "cDNA 文库",
        def_en: "A collection of clones made from a cell's mRNA by reverse transcriptase, therefore containing only sequences that were actually transcribed. Its interpretive value follows from that exclusion: finding a gene in the library means that gene was being expressed in those cells under those conditions. Contrast a combinatorial gene library, which holds many random variants of a single gene for selecting improved forms.",
        def_cn: "由细胞的 mRNA 经**逆转录酶**制成的一组克隆，因此**只包含真正被转录过的序列**。它的解读价值正来自这种「排除」：在文库中找到某个基因，就意味着**在那些细胞、那些条件下该基因当时正在表达**。对比**组合基因文库**，后者保存的是**单个基因**的大量随机变体，用于筛选性质改良的形式。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "Why can a DNA fragment and a plasmid vector be joined at all, and why must both be cut with the same restriction endonuclease?",
        q_cn: "为什么一段 DNA 片段和一个质粒载体能够被连接起来？又为什么两者必须用同一种 restriction endonuclease 来切？",
        options: [
          "DNA ligase recognises vector sequences specifically, so any fragment can be joined to any vector",
          "The recognition sequence is palindromic and the cut is staggered, so every fragment cut by a given enzyme ends in the same single-stranded overhang and any two such ends base-pair; different enzymes leave non-complementary ends that generally will not ligate",
          "Both molecules are circular, and circular DNAs anneal to one another spontaneously",
          "The host cell's recombination machinery joins the fragment to the vector after transformation"
        ],
        answer: 1,
        why_en: "This is the whole basis of cloning. Recognition sequences are 4 to 6 bp and palindromic, and a staggered cut therefore leaves the same two-to-four-nucleotide overhang on every fragment that enzyme produces — the sticky end. Complementary sticky ends base-pair, holding the two pieces together while DNA ligase forms the phosphodiester bonds. It follows directly that an EcoRI fragment will not ligate to a BamHI fragment: their overhangs are different and do not pair. Blunt ends, from enzymes that cut straight across, can be ligated but less efficiently, because nothing holds the ends together for the ligase.",
        why_cn: "这就是克隆的**全部基础**。识别序列长 4–6 bp 且是**回文**的，因此错位切开会在该酶产生的**每一个**片段上留下相同的 2–4 核苷酸突出端——即黏性末端。互补的黏性末端碱基配对，在 DNA ligase 形成磷酸二酯键期间把两段拽在一起。由此直接得出：**EcoRI 切出的片段接不上 BamHI 切出的片段**，因为它们的突出端不同、无法配对。齐平切断的酶产生的平末端也能连接，但效率更低，因为没有东西能在 ligase 工作时把两端固定在一起。"
      },
      {
        type: "mcq",
        q_en: "A bacterial restriction endonuclease cleaves foreign DNA at a specific sequence. Why does it not cleave the same sequence in the host cell's own chromosome?",
        q_cn: "细菌的 restriction endonuclease 在特定序列处切开外源 DNA。为什么它不切开宿主自己染色体上的同一序列？",
        options: [
          "The host sequence is methylated by a matching DNA methylase, and methylation blocks cleavage",
          "The host chromosome is protected because it is bound to histone-like proteins that hide the site",
          "The enzyme is confined to the periplasm and never reaches the chromosome",
          "The host chromosome does not contain the recognition sequence, having lost it by mutation"
        ],
        answer: 0,
        why_en: "The nuclease and a specific DNA methylase form a restriction-modification system. The methylase marks the host's own copies of the recognition sequence; incoming viral DNA arrives unmethylated and is destroyed — the DNA is said to be restricted. Werner Arber worked this out in the early 1960s. It is worth seeing this as a bacterial way of distinguishing self from non-self at the level of sequence, and worth noticing that the same chemistry — methylation of DNA — reappears later as a regulatory mark in eukaryotes.",
        why_cn: "核酸酶与一个专一的 DNA 甲基化酶组成 **restriction-modification system**。甲基化酶给宿主自己那些识别序列做上标记；入侵的病毒 DNA 到达时**未被甲基化**，因而被摧毁——这样的 DNA 被称为「受到限制的」。**Werner Arber** 在 1960 年代初弄清了这一点。值得把它看作细菌在**序列层面区分自我与非我**的一种方式，也值得注意：**DNA 甲基化**这同一套化学，后来会在真核生物中作为一种**调控标记**重新出现。"
      },
      {
        type: "mcq",
        q_en: "You need to clone a 200,000 bp segment of human genomic DNA. Which vector is appropriate, and what feature makes it work?",
        q_cn: "你需要克隆一段 200,000 bp 的人类基因组 DNA。应该用哪种载体？是什么特征让它能胜任？",
        options: [
          "An ordinary plasmid such as pBR322, because its origin can be adjusted to a high copy number",
          "An expression vector, because the transcription-termination sequence stabilises long inserts",
          "A BAC, whose origin holds it at one or two copies per cell, limiting recombination between copies that would otherwise scramble a large insert, with par genes ensuring each daughter cell gets one",
          "A shuttle vector, because propagation in two species halves the recombination rate"
        ],
        answer: 2,
        why_en: "Transformation with purified DNA gets less efficient as the plasmid grows, so ordinary plasmids top out near 15,000 bp of insert. BACs carry 100,000 to 300,000 bp. The key design point is counter-intuitive: the copy number is deliberately kept at one or two per cell, because multiple copies of a long cloned segment in one cell give recombination the opportunity to rearrange it unpredictably. Holding the copy number that low then creates a segregation problem at cell division, which the par genes — borrowed from the F plasmid — solve. A YAC would also serve at this size, and is the answer above about 300,000 bp.",
        why_cn: "用纯化 DNA 做转化，随着质粒变大效率下降，所以普通质粒的插入片段上限约为 **15,000 bp**。**BAC** 承载 **100,000–300,000 bp**。关键的设计要点是反直觉的：拷贝数被**故意**维持在每细胞 1–2 个，因为同一细胞中存在长片段克隆的**多个拷贝**，会给重组提供机会、不可预测地重排它。而把拷贝数压到这么低，又带来了分裂时的**分配问题**，这由借自 **F 质粒的 par 基因**解决。在这个尺寸上 **YAC** 同样可用；超过约 300,000 bp 时，YAC 就是答案。"
      },
      {
        type: "mcq",
        q_en: "A eukaryotic protein is overexpressed in E. coli. Large amounts of protein are obtained, but it has no catalytic activity. What is the most likely explanation, and what does the section suggest doing about it?",
        q_cn: "一个真核蛋白在 E. coli 中过表达。拿到了大量蛋白，但它没有催化活性。最可能的解释是什么？本节建议怎么处理？",
        options: [
          "The promoter was too weak; switch from the T7 system to the lactose operon promoter",
          "The protein misfolded and aggregated into insoluble inclusion bodies, and/or lacks posttranslational modification; move to yeast, insect or mammalian cells, or use a large solubilising tag such as maltose-binding protein",
          "The gene was inserted with its amino-terminal end furthest from the promoter, which reverses the sequence",
          "Bacteria degrade all heterologous proteins, so no eukaryotic protein can be expressed in E. coli"
        ],
        answer: 1,
        why_en: "This is the characteristic failure of bacterial expression and the reason other hosts exist. Bacteria are cheap, well understood and scale beautifully in fermenters, but many heterologous proteins do not fold correctly there and many do not receive the posttranslational modifications or proteolytic processing they need; eukaryotic proteins frequently aggregate as inclusion bodies. Yeast folds and modifies more accurately because it is itself a eukaryote, baculovirus-infected insect cells often reproduce higher-eukaryote modification patterns, and cultured mammalian cells do best of all but are very expensive — which is why they are used to test function rather than to manufacture. The cheaper first move is a large tag such as maltose-binding protein, which adds solubility and stability.",
        why_cn: "这是细菌表达的**典型失败模式**，也正是其他宿主存在的理由。细菌便宜、研究透彻、在发酵罐里放大得极好，但许多异源蛋白在那里折叠不正确，许多也得不到所需的翻译后修饰或蛋白酶加工；真核蛋白常常聚集成**包涵体**。**酵母**本身是真核生物，折叠与修饰更准确；**杆状病毒感染的昆虫细胞**往往能重现高等真核生物的修饰模式；培养的**哺乳动物细胞**最好，但非常昂贵——所以它们被用来**检验功能**而非生产。更便宜的第一招是换一个像 **MBP** 这样的大标签，它能额外提供可溶性与稳定性。"
      },
      {
        type: "mcq",
        q_en: "What does the presence of a particular gene in a cDNA library tell you that its presence in a genomic library does not?",
        q_cn: "某个基因出现在 cDNA 文库中，能告诉你什么是它出现在基因组文库中所不能告诉你的？",
        options: [
          "That the gene contains no introns anywhere in the genome",
          "That the gene was being transcribed — expressed — in the cells and under the conditions used to build the library",
          "That the gene is essential for viability in the organism it came from",
          "That the gene product is a soluble protein rather than a membrane protein"
        ],
        answer: 1,
        why_en: "A cDNA library is built by extracting mRNA and copying it to DNA with reverse transcriptase, so by construction it contains no genomic DNA that was not transcribed. That exclusion is the whole point: finding a gene there is evidence of expression in those particular cells under those particular conditions, which a genomic library — which contains everything regardless of expression — cannot tell you. Note what the answer does not claim. It says nothing about introns being absent from the genome, only that they are absent from this DNA copy of the message; and nothing about the gene being essential or its product soluble.",
        why_cn: "cDNA 文库是通过提取 mRNA、再用**逆转录酶**把它拷贝成 DNA 建成的，所以**从构造上就不含任何未被转录的基因组 DNA**。这种「排除」正是它的全部意义所在：在其中找到某个基因，就是**该基因在那些特定细胞、那些特定条件下被表达**的证据——而基因组文库（不论是否表达，什么都包含）无法告诉你这一点。注意这个答案**没有**主张什么：它没说内含子在基因组中不存在，只是说它们不在这份 mRNA 的 DNA 拷贝里；也没说这个基因是必需的，或它的产物是可溶的。"
      }
    ],
    oral: {
      q_en: "You have identified a human enzyme you believe causes a disease. Take me from the chromosome to a tube of the pure protein, and say at each stage what could go wrong.",
      q_cn: "你已经鉴定出一个你认为导致某种疾病的人类酶。请从染色体讲到一管纯化的蛋白，并在每个阶段说明可能出什么问题。",
      model_en: "The problem is one of scale: the gene is a few thousand base pairs inside a chromosome of hundreds of millions, so the answer is cloning, which is five steps. First I obtain the segment. Since the sequence will be in a database, I would amplify it by PCR rather than cut it out of genomic DNA, and I would design the primers with non-complementary 5' extensions carrying restriction sites — those tails do not anneal to the template but are copied into the product, so cutting the product gives me sticky ends exactly where I want them. Second, I choose a vector. For a gene of a few thousand base pairs an ordinary plasmid is right; pBR322 is the classic teaching example, with an origin of replication that sets the copy number, antibiotic resistance genes for selection, unique restriction sites, and a small size that helps it enter cells. If I needed a hundred thousand base pairs I would use a BAC, and beyond that a YAC, which is a real chromosome with a centromere and two telomeres. Third, I cut both the insert and the vector with the SAME enzyme and join them with DNA ligase. It must be the same enzyme, because the recognition sequences are palindromic and the staggered cut leaves complementary sticky ends; an EcoRI end will not pair with a BamHI end. Fourth, I move the recombinant plasmid into a host, usually E. coli, by transformation in calcium chloride with a heat shock, or by electroporation. Fifth — and this is the step people underrate — I select. Transformation is very inefficient, so I never look for the cell that took up my DNA; I plate on antibiotic so that only cells carrying the plasmid survive, and if the vector has a lacZ disrupted by the insert I plate on X-gal too and pick the white colonies rather than the blue ones. Now to get protein rather than DNA I need an expression vector, because the human gene's own promoter and regulatory sequences do not work in a bacterium. The vector supplies a promoter, an operator so a repressor can hold it off, and a ribosome-binding site, with the amino-terminal end of the gene placed nearest the promoter. I would prefer the T7 system to the lactose promoter, because the lac system is leaky — it is not fully off without lactose — and that matters if the protein is toxic to the host, which it may well be, since expression can reach ten percent of cellular protein. What can go wrong here is the classic failure: a human protein in E. coli often misfolds and precipitates as inclusion bodies, or never receives the posttranslational modifications it needs, so I get plenty of protein and no activity. The remedies in order of cost are a large solubilising tag such as maltose-binding protein, then yeast, which folds and modifies more accurately because it is a eukaryote and where I would use the GAL1 promoter and simply switch the carbon source, then baculovirus-infected insect cells, then cultured mammalian cells, which are the most faithful and by far the most expensive. For purification I would fuse an affinity tag — a hexahistidine tag binding immobilised nickel is the smallest and most convenient, GST binding glutathione the textbook example — pass the crude extract over the matrix, wash everything else through and elute gently with free ligand or high salt. Two cautions on tags: they can perturb folding, and even after cleaving the tag with a protease one or two extra residues remain, so I need controls that show the tag is not producing my result. Finally, to ask what the enzyme's active site actually does, I would use site-directed mutagenesis, either swapping in a synthetic restriction fragment or annealing mutagenic oligonucleotides that prime synthesis around the plasmid. The model result is the book's: changing Lys72 of RecA to Arg gives a protein that binds ATP but cannot hydrolyse it — a single substitution that separates binding from catalysis, which is exactly the kind of question the whole exercise was for.",
      model_cn: "问题的本质是尺度：这个基因只有几千 bp，却藏在一条几亿 bp 的染色体里，所以答案是**克隆**，一共五步。**第一，拿到片段。** 既然序列已在数据库中，我会用 **PCR 扩增**而不是从基因组 DNA 里切下来，并把引物设计成带**不互补的 5′ 延伸**、其中含酶切位点——这些尾巴不与模板退火，却会被复制进产物，于是切开产物就能在我想要的位置得到黏性末端。**第二，选载体。** 几千 bp 的基因用普通**质粒**就对；pBR322 是经典教学例子，有决定拷贝数的**复制起点**、供筛选的**抗生素抗性基因**、**唯一酶切位点**，以及有助于进入细胞的**小体积**。如果需要十万 bp 我会用 **BAC**，再大就用 **YAC**——那是带着丝粒和两个端粒的**真正染色体**。**第三，用同一个酶**切开插入片段和载体，再用 **DNA ligase** 连接。**必须是同一个酶**，因为识别序列是回文的、错位切开留下的是互补黏性末端；EcoRI 的末端配不上 BamHI 的末端。**第四，把重组质粒送进宿主**，通常是 E. coli，用**氯化钙加热激**的转化，或者**电穿孔**。**第五——这一步最常被低估——筛选。** 转化效率极低，所以我从不去「寻找」那个吸收了 DNA 的细胞；我把它涂在含抗生素的平板上，让**只有带质粒的细胞能活**；如果载体上有被插入片段打断的 **lacZ**，我还会加 **X-gal**，然后**挑白色菌落而不是蓝色的**。接下来，要拿到蛋白而不只是 DNA，我需要**表达载体**，因为人类基因自己的启动子和调控序列**在细菌里不工作**。载体提供**启动子**、供阻遏物关闭它的**操纵基因**、以及**核糖体结合位点**，并把基因的**氨基端**一侧摆得离启动子最近。我会优先选 **T7 系统**而非乳糖启动子，因为 lac 系统**渗漏**——没有乳糖时也关不严——而这在蛋白对宿主有毒时很要紧，况且它很可能有毒，因为表达量能达到细胞总蛋白的 **10%**。这里会出的问题是那个经典失败：人类蛋白在 E. coli 中常常**错误折叠、沉淀为包涵体**，或者始终得不到所需的翻译后修饰，于是我拿到了大量蛋白却**没有活性**。按成本排序的补救办法是：先换一个像 **MBP** 这样的大型**增溶标签**；再换**酵母**（它本身是真核生物，折叠与修饰更准确，我会用 **GAL1 启动子**，靠**换碳源**来开关）；再换**杆状病毒感染的昆虫细胞**；最后是培养的**哺乳动物细胞**，最忠实也贵得多。**纯化**时我会融合一个**亲和标签**——**六聚组氨酸标签**结合固定化的镍是最小最方便的，**GST** 结合谷胱甘肽是教科书例子——把粗提液过柱，其余全部洗穿，再用**游离配体或高盐**温和洗脱。关于标签有两点要小心：它可能**扰动折叠**；而且即使用蛋白酶切掉，仍会**残留一两个残基**，所以我需要对照来证明结果不是标签造成的。**最后**，要问这个酶的活性位点到底在做什么，我会用**定点突变**，或换入一段合成的限制性片段，或让携带突变的寡核苷酸退火并沿质粒引发合成。范本结果就是书里那个：把 **RecA 的 Lys72 换成 Arg**，得到一个**能结合 ATP 却无法水解**它的蛋白——一个把结合与催化拆开的单点替换，而这正是整套操作要回答的那类问题。",
      checklist: [
        "Named all five cloning steps in order, including selection as a step in its own right",
        "Said the insert and vector must be cut with the SAME enzyme, and gave the palindrome/sticky-end reason",
        "Listed what makes a vector usable: origin (and copy number), selectable marker, unique restriction sites, small size",
        "Scaled the vector to the insert: plasmid to about 15 kb, then BAC, then YAC, and said what a YAC contains",
        "Distinguished transformation (CaCl2 + heat shock, or electroporation) from selection, and explained WHY selection is needed",
        "Distinguished a selectable marker from a screenable one, with blue-white/X-gal as the example and white as the colony to pick",
        "Explained that an expression vector is needed because eukaryotic regulatory sequences do not work in bacteria, and named promoter, operator and ribosome-binding site",
        "Preferred T7 over lac and gave the leakiness reason, linking it to toxicity at high expression",
        "Named inclusion bodies and missing posttranslational modification as the characteristic bacterial failure, with the host escalation in cost order",
        "Described affinity-tag purification with a named tag and its ligand, and the elution step",
        "Gave at least one caution about tags: perturbed folding, or residues left behind after protease cleavage",
        "Finished with site-directed mutagenesis and a concrete example of what a single substitution can separate"
      ]
    }
  }

);
