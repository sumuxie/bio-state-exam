/* Spines for chapters 26, 27 and 28 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE — the seven rules, followed literally:

   1. STATE THE THING. No "not X, but Y", no rhetorical inversion.
   2. NO UNBOUND "THE". Never a definite reference to something not yet named.
   3. NAME THE ACTUAL OBJECTS. Twenty tubes each holding a different labelled amino
      acid; a mushroom; a castor bean; a fly larva with two posteriors.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN YOU USE, in the same breath as the first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK. When a step is the parallel or the opposite of one earlier in the
      same spine, say so and point at it (`recall_en` / `recall_cn`).

   And every structural claim carries its consequence — 「这些东西一般有啥用？」

   THE ARC. These eight nodes are one continuous story and they start where the
   chapter 8 spine (L-8-2-1) stopped. That spine ended on RNA: a single strand that
   folds back into a hairpin, a paired stretch that has no choice but the A-form, a
   transcript longer than the cell needs whose extra pieces are introns, and introns
   that cut themselves out with no protein involved. Every one of those four returns
   here doing a job:

     L-26-1-1  the hairpin becomes the stop signal, and the A-form hybrid sits inside
               the polymerase
     L-26-2-1  splicing in full, and what else is done to a transcript
     L-26-3-1  the arrow that runs backwards — RNA read as a template
     L-26-4-1  whether "RNA enzyme" is a measurement or a metaphor
     L-27-1-1  what the finished RNA means: the code
     L-27-2-1  the machine that reads it, whose own active site is RNA
     L-28-1-1  how a protein finds one site in a chromosome
     L-28-3-1  why a eukaryotic gene is off until something turns it on

   `beyond: true` marks detail that is standard and examinable but is NOT on the pages
   the node was read from; every such step says why in `beyondNote`.
   `openQuestion_*` marks a question the subject has not settled. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== L-26-1-1 */
window.BIOLITE_SPINE["L-26-1-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "double helix", "base pair", "hydrogen bond", "ATP",
            "phosphate", "nucleus", "mitochondria", "chloroplast", "ribosome",
            "tuberculosis", "heat shock"],
  nodeTitle_en: "DNA-dependent synthesis of RNA",
  nodeTitle_cn: "以 DNA 为模板合成 RNA",
  title_en: "How one strand of a gene gets copied into RNA, and why every step of it is a place to regulate",
  title_cn: "一个基因的一条链是怎么被抄成 RNA 的，以及为什么每一步都是调控点",
  steps: [
    {
      en: "Copying DNA into DNA duplicates a whole chromosome; copying DNA into RNA does not. **Transcription** — making an RNA copy of a stretch of DNA — is **selective**: only particular genes are copied at any one time, and some parts of a genome are never copied into RNA at all. The sum of all the RNA a cell makes under one set of conditions is called its **transcriptome**. Only about 2% of human DNA codes for protein, so you would expect only a small slice of it to be transcribed; the measured figure is **about 76%**, and most of what comes out is **ncRNA — noncoding RNA, RNA that is never translated into a protein**.",
      cn: "把 DNA 抄成 DNA，抄的是整条染色体；把 DNA 抄成 RNA 不是这样。**转录（transcription）** —— 把一段 DNA 抄成一份 RNA —— 是**有选择的**：任何时刻只有特定的基因被抄，基因组里还有一些区段从来不会被抄成 RNA。一个细胞在一组给定条件下做出来的全部 RNA，叫它的**转录组（transcriptome）**。人类 DNA 里只有约 **2%** 编码蛋白，按理说被转录的应该只是一小部分；实测值却是 **约 76%**，而且抄出来的大多不是 mRNA，而是 **ncRNA —— 非编码 RNA，永远不会被翻译成蛋白的 RNA**。",
      src: "A p.960",
      openQuestion_en: "What most of those noncoding transcripts actually do is not known, and the pace at which they keep being found has made that gap larger rather than smaller.",
      openQuestion_cn: "这些非编码转录本里，绝大多数到底在做什么，目前并不知道；而且它们被发现的速度越快，这个缺口反而越大。"
    },
    {
      link_en: "so what does the copying itself look like, chemically?",
      link_cn: "那么「抄」这个动作本身，化学上是什么样子？",
      en: "**RNA polymerase** is the enzyme that builds an RNA chain on a DNA template. Its chemistry is the same reaction DNA polymerases use: the **3'-hydroxyl** at the growing end of the chain attacks the innermost phosphorus of the incoming ribonucleoside triphosphate, and pyrophosphate leaves. **Two Mg²⁺ ions** are held between those phosphates and **three Asp residues that are conserved in the RNA polymerases of every species** — one metal helps the hydroxyl attack, the other helps the pyrophosphate leave, and both stabilise the transition state. Two differences from DNA replication are worth holding: **transcription needs no primer**, and **only one of the two DNA strands is template for any particular RNA**. One small detail matters later: **the 5'-triphosphate of the very first residue is never cleaved off**, and in eukaryotes that surviving triphosphate is what the capping machinery builds on.",
      cn: "**RNA 聚合酶（RNA polymerase）**就是以 DNA 为模板搭出一条 RNA 链的酶。它的化学与 DNA 聚合酶相同：链的生长端上的 **3′-羟基**进攻进来的核糖核苷三磷酸最里侧的那个磷，焦磷酸离去。**两个 Mg²⁺** 被夹在这些磷酸基与**三个在所有物种的 RNA 聚合酶里都保守的 Asp 残基**之间 —— 一个金属帮羟基进攻，另一个帮焦磷酸离开，两个一起稳定过渡态。与 DNA 复制的两点差别值得记住：**转录不需要引物（primer）**，而且**对任何一条特定的 RNA 来说，两条 DNA 链里只有一条是模板**。还有一个细节后面要用：**第一个残基的 5′-三磷酸从来不被切掉**，在真核细胞里，加帽机器正是搭在这个留下来的三磷酸上。",
      src: "A p.961"
    },
    {
      link_en: "one strand is template — and the naming of the other one inverts every sequence in this chapter",
      link_cn: "只有一条链是模板 —— 而另一条链的命名，会把本章所有序列都翻个面",
      en: "The two DNA strands are named by what they do in transcription. The strand actually copied is the **template strand**. Its partner is the **nontemplate strand**, also called the **coding strand**, and it is the one whose base sequence is identical to the RNA, with U wherever the DNA has T. Now the trap: **every regulatory sequence in this chapter is written as it appears on the coding strand, 5' to 3'.** Read it as the copied strand instead and everything inverts: every **promoter** sequence in this chapter — a promoter being the DNA the polymerase binds in order to start — would come out written as its own reverse complement. And which strand is the coding strand is decided **per gene**, never per chromosome: the adenovirus genome is 36,000 bp long, most of its genes are read off one strand and a few off the other, in the opposite direction.",
      cn: "两条 DNA 链是按它们在转录中干什么来命名的。真正被抄的那条叫**模板链（template strand）**。它的搭档叫**非模板链（nontemplate strand）**，也叫**编码链（coding strand）**，它的碱基序列与 RNA 完全一致，只是 DNA 里是 T、RNA 里是 U。陷阱在这里：**本章里所有调控序列，写的都是编码链上的样子，5′ 到 3′。**如果你把它当成被抄的那条来读，一切都会翻面：本章里每一个**启动子（promoter）**序列 —— 启动子就是聚合酶为了起始而结合的那段 DNA —— 都会被你写成它自己的反向互补序列。而且哪条链是编码链，是**逐个基因**决定的，绝不是逐条染色体决定的：腺病毒基因组长 36,000 bp，大多数基因读的是其中一条链，少数几个读另一条，方向相反。",
      src: "A p.962"
    },
    {
      link_en: "so much for the naming. What does the enzyme physically do to the DNA?",
      link_cn: "命名说完了。那这个酶在物理上把 DNA 怎么样了？",
      recall_en: "the 8 bp hybrid here is one of the two situations in which RNA becomes double-stranded at all, and it is A-form",
      recall_cn: "这里的 8 bp 杂合链，正是 RNA 能变成双链的两种情况之一，而且是 A 型",
      en: "The enzyme opens a short stretch of the helix and carries the opening along with it. In E. coli the numbers are measured: **about 17 bp are held unwound** — a **transcription bubble** — with **an 8 bp RNA-DNA hybrid** inside it, after which the RNA peels away and the duplex closes again behind. The chain grows at **50 to 90 nucleotides per second**, and the enzyme covers about **35 bp** of DNA while it does so. Moving that bubble means rotating the DNA, and rotation is blocked in most cellular DNA by bound proteins, so **positive supercoils pile up ahead of the bubble and negative supercoils behind it** — supercoils being over- and under-winding of the double helix itself. **Topoisomerases**, the enzymes that cut, rotate and reseal DNA, are what remove them; transcription is one of the two processes that keep making the work those enzymes exist to do.",
      cn: "这个酶把螺旋撑开一小段，并带着这个开口一起往前走。大肠杆菌里的数字是量出来的：**约 17 bp 被撑开**，形成一个**转录泡（transcription bubble）**，泡里有一段 **8 bp 的 RNA-DNA 杂合链**，过了这段 RNA 就剥离，双链在后面重新合上。链的延长速度是**每秒 50 到 90 个核苷酸**，酶在 DNA 上覆盖约 **35 bp**。让这个泡往前移动，就必须让 DNA 转动，而细胞里的 DNA 大多被结合蛋白挡着转不动，于是**泡的前方堆出正超螺旋、后方堆出负超螺旋** —— 所谓超螺旋，就是双螺旋自身的过度缠绕或缠绕不足。把它们拆掉的是**拓扑异构酶（topoisomerase）**，即那类会把 DNA 切开、转动、再接上的酶；转录正是不断制造这份工作的两个过程之一。",
      src: "A p.961",
      see: [{ id: "L-24-2-1", en: "supercoiling and the topoisomerases in full", cn: "超螺旋与拓扑异构酶的完整机制" }]
    },
    {
      link_en: "and it makes mistakes, at a rate that would be intolerable in DNA",
      link_cn: "而且它会出错，错误率放在 DNA 上是不可接受的",
      en: "**RNA polymerases have no separate proofreading exonuclease** — no second active site that chews a wrong base back off the growing end, of the kind many DNA polymerases carry. The measured error rate follows: **about 1 wrong ribonucleotide in every 10,000 to 100,000**, orders of magnitude worse than chromosomal replication. The reason a cell tolerates it is the reason worth carrying, because it generalises: **many RNA copies are made from one gene and nearly all of them are eventually degraded and replaced, so a mistake in one RNA molecule costs far less than a mistake in the permanent copy stored in DNA.** Fidelity is bought where the information is permanent and skipped where it is disposable.",
      cn: "**RNA 聚合酶没有独立的校对外切酶（proofreading exonuclease）** —— 也就是许多 DNA 聚合酶都带的那种、能把接错的碱基从生长端啃回去的第二活性中心。错误率随之而来：**每 10,000 到 100,000 个核糖核苷酸出错一个**，比染色体复制差好几个数量级。细胞为什么容忍它，这个理由才是值得带走的，因为它是普适的：**一个基因会被抄出很多份 RNA，而几乎所有 RNA 最终都会被降解、被替换，所以一条 RNA 上的错误，代价远小于 DNA 里那份永久拷贝上的错误。**信息是永久的地方就买保真度，信息是一次性的地方就省下来。",
      src: "A p.963",
      openQuestion_en: "Bacterial RNA polymerase and eukaryotic Pol II do pause at a mispaired base and can remove it by running the polymerase reaction backwards — whether that counts as true proofreading, and how much it contributes, is unresolved.",
      openQuestion_cn: "细菌 RNA 聚合酶和真核 Pol II 确实会在错配处停顿，也能靠把聚合反应倒着跑一遍把错配去掉 —— 但这算不算真正的校对、贡献有多大，目前没有定论。"
    },
    {
      link_en: "the enzyme has to start somewhere, and where it starts is where regulation acts",
      link_cn: "这个酶总得从某处开始，而它从哪里开始，正是调控发生的地方",
      en: "A **promoter** is a DNA sequence that RNA polymerase binds to, which fixes where transcription of the neighbouring gene starts. The numbering is a convention worth learning once: **the base pair corresponding to the first nucleotide of the RNA is +1**, everything upstream gets negative numbers, and **there is no position zero**. E. coli polymerase covers roughly **-70 to +30**. Within that, the commonest bacterial promoters carry two consensus sequences: **TATAAT centred at -10 and TTGACA centred at -35** — written on the coding strand, per the convention above. A third, AT-rich **UP element** sits between -40 and -60 in some very highly expressed genes. What makes promoters worth this attention is their sensitivity: **efficiency depends on the sequences, on the spacing between them and on their distance from the start, and a single base pair change can slow binding by several orders of magnitude.** So the promoter alone sets a basal rate of expression that differs enormously from gene to gene, before any regulatory protein has said anything.",
      cn: "**启动子（promoter）**是 RNA 聚合酶结合的一段 DNA 序列，它固定了旁边那个基因从哪里开始转录。编号是一个学一次就够的约定：**对应 RNA 第一个核苷酸的那个碱基对是 +1**，上游全是负数，而且**没有 0 号位**。大肠杆菌聚合酶覆盖大约 **-70 到 +30**。在这个范围内，最常见的细菌启动子带两段共有序列：**-10 处的 TATAAT 和 -35 处的 TTGACA**，按上一步的约定，写的都是编码链。第三段富含 AT 的 **UP 元件**位于 -40 到 -60，出现在一些表达量极高的基因里。启动子值得花这么多注意力，是因为它太敏感：**效率取决于这些序列本身、它们之间的间距、以及它们离起点的距离，改动一个碱基对就能让结合速率慢几个数量级。**所以在任何调控蛋白开口之前，启动子自己就已经把各个基因的基础表达水平定得天差地别。",
      src: "A p.963"
    },
    {
      link_en: "how does anyone know a protein sits at -10 and -35? By making the DNA it covers survive",
      link_cn: "怎么知道有个蛋白就停在 -10 和 -35？让它盖住的那段 DNA 活下来",
      en: "**Footprinting** is the method: radiolabel one end of one DNA strand, then cut the DNA randomly, on average once per molecule, and separate the fragments by length. Without a bound protein you get a continuous ladder of every possible length. With the protein bound, the stretch it covers is shielded from cutting, so **those lengths are missing and the ladder shows a gap** — the footprint. RNA polymerase leaves a footprint of **60 to 80 bp**, and the protected region contains the -10 and -35 sequences. This is what turns \"the polymerase binds the promoter\" from an assertion into a measurement of exactly which bases it touches.",
      cn: "**足迹法（footprinting）**是这样做的：把一条 DNA 链的一端做放射性标记，然后随机切断 DNA，平均每条分子切一刀，再按长度把片段分开。没有蛋白结合时，你会得到一条从短到长连续的梯子。有蛋白结合时，它盖住的那一段挡住了刀，**这些长度就缺席了，梯子上出现一个空档** —— 这就是足迹。RNA 聚合酶留下的足迹是 **60 到 80 bp**，被保护的区域里正好包含 -10 和 -35 序列。这一步把「聚合酶结合启动子」从一句断言，变成了「它到底碰到哪些碱基」的实测结果。",
      src: "A p.965"
    },
    {
      link_en: "and getting started is not one event but a sequence of states",
      link_cn: "而「起始」不是一个事件，是一串状态",
      en: "The E. coli enzyme has five core subunits plus one more, the **sigma subunit**, whose job is to steer the enzyme to promoters; core plus sigma is called the **holoenzyme**. Initiation then resolves into named states, and this matters because regulation acts on them separately. **Closed complex**: the holoenzyme is bound to the promoter and the DNA is still fully double-stranded. **Open complex**: 12 to 15 bp are unwound, from inside the -10 sequence to about +2. **Initiation**: the first bonds are made and the complex changes shape into its elongating form. **Promoter clearance**: the enzyme moves away from the promoter. **Any one of these four can be the step a promoter mutation acts on**, which is what makes the single-base-pair sensitivity of the previous step mechanically intelligible rather than magical.",
      cn: "大肠杆菌的这个酶有五个核心亚基，外加一个 **σ 亚基（sigma subunit）**，它的任务是把酶引到启动子上；核心加 σ 叫**全酶（holoenzyme）**。起始随后被拆成几个有名字的状态，而这很重要，因为调控是分别作用在每个状态上的。**闭合复合物（closed complex）**：全酶结合在启动子上，DNA 仍是完整双链。**开放复合物（open complex）**：12 到 15 bp 被解开，从 -10 序列内部一直到约 +2。**起始**：头几个键形成，复合物变构成延长形式。**启动子清空（promoter clearance）**：酶离开启动子往前走。**这四步里任何一步都可能是某个启动子突变真正作用的那一步** —— 上一步说的「改一个碱基对差几个数量级」，正是因此才是机制而不是玄学。",
      src: "A p.964"
    },
    {
      link_en: "sigma is more than a subunit — it is a switch for whole sets of genes",
      link_cn: "σ 不只是一个亚基 —— 它是整套基因的开关",
      en: "Once elongation begins **sigma dissociates at random** and is replaced by **NusA**, a protein that binds the elongating enzyme competitively; NusA leaves when transcription finishes, the enzyme comes off the DNA, and a sigma can bind again. Now the payoff. E. coli has **several different sigma subunits**, each recognising a different set of promoters: the ordinary one is **σ⁷⁰**, and when the cell is heat-stressed it is replaced by **σ³²**, which takes the same enzyme to the heat shock promoters instead. **Swapping that one subunit therefore switches on a whole set of genes at once and changes the cell's physiology.** Which sigmas are available is itself controlled three ways: by how fast each is made and destroyed, by chemical modification that switches individual ones on and off, and by **anti-sigma proteins**, which bind a particular sigma and hold it out of use.",
      cn: "延长一旦开始，**σ 就随机脱落**，由 **NusA** 取代 —— NusA 是一个竞争性地结合在延长中的酶上的蛋白；转录结束时 NusA 离开，酶从 DNA 上下来，另一个 σ 又可以结合上去。回报在这里。大肠杆菌有**好几种不同的 σ 亚基**，各自识别一套不同的启动子：平常那个是 **σ⁷⁰**，细胞受热胁迫时它被 **σ³²** 换掉，同一个酶就被带到热激启动子上去了。**所以换掉一个小亚基，就等于一次性打开一整套基因，改变细胞的生理状态。**哪些 σ 可用，本身又受三重控制：各自的合成与降解速度、把个别 σ 开关掉的化学修饰、以及**抗 σ 蛋白（anti-sigma protein）** —— 它结合住某个特定的 σ，把它扣住不让用。",
      src: "A p.964"
    },
    {
      link_en: "and it has to be told where to stop, because stopping in the wrong place is unrecoverable",
      link_cn: "它还必须被告知在哪里停 —— 因为停错地方是无法挽回的",
      recall_en: "the hairpin used here is the same fold introduced in the chapter 8 spine: one RNA strand folding back on itself",
      recall_cn: "这里用到的发夹，就是第 8 章那条主线里讲的同一个折叠：一条 RNA 折回来和自己配对",
      en: "RNA synthesis is **processive** — the enzyme adds a great many nucleotides before letting go — and it has to be, because **an enzyme that released a transcript early could not resume that same RNA and would have to start again from the beginning of the gene**. So stopping is signalled, in two ways. A **rho-independent terminator** has two features: a self-complementary sequence that makes the new RNA fold back into a **hairpin**, centred 15 to 20 nucleotides before the end, and a conserved run of three A residues in the template read as U residues just after it. The enzyme pauses there, and **the hairpin forming pulls apart several A=U pairs of the RNA-DNA hybrid** — A=U being the weakest pairing available — so the transcript falls off. A **rho-dependent terminator** has no such A run; it carries a CA-rich **rut element** instead, where the protein **rho** binds the RNA and walks along it 5' to 3', driven by an ATP-dependent helicase — an enzyme that pulls RNA and DNA apart — until it catches the paused enzyme and releases the transcript.",
      cn: "RNA 合成是**持续性的（processive）** —— 酶要接上非常多个核苷酸才松手 —— 而且必须如此，因为**一个提前放开转录本的酶没法接着抄同一条 RNA，只能从基因开头重来**。所以「停」是要被信号通知的，方式有两种。**不依赖 rho 的终止子（rho-independent terminator）**有两个特征：一段自身互补的序列，让新生 RNA 折回来形成**发夹（hairpin）**，中心位于终点前 15 到 20 个核苷酸处；紧接其后是模板链上保守的三个 A，被抄成三个 U。酶在那里停顿，而**发夹一形成，就把 RNA-DNA 杂合链里好几对 A=U 拽开** —— A=U 是所有配对里最弱的 —— 转录本于是脱落。**依赖 rho 的终止子**没有这段 A；它带的是一段富含 CA 的 **rut 元件**，蛋白 **rho** 在那里结合到 RNA 上，靠一个 ATP 驱动的解旋酶活性沿 RNA 从 5′ 向 3′ 走，直到追上停顿的酶，把转录本放掉。",
      src: "A p.967",
      openQuestion_en: "How rho actually causes release, once it reaches the paused polymerase, is not known.",
      openQuestion_cn: "rho 追上停顿的聚合酶之后，究竟怎样导致转录本释放，目前并不知道。",
      see: [{ id: "L-8-2-1", en: "where the hairpin came from — RNA folding back on itself", cn: "发夹的来历 —— RNA 折回来和自己配对" }]
    },
    {
      link_en: "in a bacterium the transcript is being read before it is finished, which ties the two processes together",
      link_cn: "在细菌里，转录本还没写完就已经在被读了 —— 这把两个过程绑在一起",
      en: "In bacteria there is no membrane between the DNA and the machinery that makes protein, so **ribosomes start reading an mRNA — a transcript that will be translated into protein — while RNA polymerase is still making it**. The link is physical: a protein called **NusG binds to the ribosome and to RNA polymerase at the same time**, holding the two complexes together, with the consequence that **how fast the message is being read affects how fast it is being written**. In eukaryotes this is impossible, because the nuclear envelope puts transcription in the nucleus and translation in the cytoplasm. That single architectural fact is behind most of the differences in the rest of this spine.",
      cn: "细菌里 DNA 和造蛋白的机器之间没有膜，所以 **RNA 聚合酶还在合成 mRNA（会被翻译成蛋白的那种转录本）时，核糖体就已经开始读它了**。这个联系是物理性的：一个叫 **NusG** 的蛋白**同时结合核糖体和 RNA 聚合酶**，把两个复合物拴在一起，后果是**读得多快，会影响写得多快**。真核细胞做不到这件事，因为核膜把转录放在核内、把翻译放在胞质。这一条建筑学上的事实，就是本主线后面绝大多数差别的来源。",
      src: "A p.967"
    },
    {
      link_en: "and inside a nucleus there is not one polymerase but three, each with its own product list",
      link_cn: "而核里不是一个聚合酶，是三个，各有各的产物清单",
      en: "A eukaryotic nucleus contains **three RNA polymerases**, and the division of labour is examinable as a list. **Pol I** makes pre-ribosomal RNA, the precursor that is cut up into the 18S, 5.8S and 28S rRNAs of a ribosome. **Pol II** makes mRNA and many ncRNAs. **Pol III** makes tRNAs — the small RNAs that carry amino acids — plus the 5S rRNA and other small specialised ncRNAs, including the U6 RNA of the splicing machinery. Two oddities worth keeping. Some of the sequences Pol III needs for regulated initiation lie **inside the gene**, downstream of the start, rather than upstream where a promoter is normally expected. And **mitochondria and chloroplasts have their own RNA polymerases, which resemble bacterial ones and are far less elaborate than any of the three nuclear enzymes** — an endosymbiotic ancestry sitting in plain sight, and the fact that makes the last step of this spine possible.",
      cn: "真核细胞核里有**三种 RNA 聚合酶**，分工可以直接当清单背。**Pol I** 做前体核糖体 RNA，即后来被切成核糖体的 18S、5.8S、28S rRNA 的那份前体。**Pol II** 做 mRNA 和许多 ncRNA。**Pol III** 做 tRNA（携带氨基酸的那类小 RNA），外加 5S rRNA 和其他小型专用 ncRNA，包括剪接机器里的 U6 RNA。两个值得记的怪处。Pol III 调控性起始所需的一部分序列位于**基因内部**、起点的下游，而不是通常预期的上游。还有：**线粒体和叶绿体有自己的 RNA 聚合酶，它们更像细菌的酶，比三个核内酶简单得多** —— 内共生的来历就摆在明面上，而这也正是本主线最后一步能成立的原因。",
      src: "A p.968"
    },
    {
      link_en: "Pol II cannot find a promoter by itself. It needs a crowd",
      link_cn: "Pol II 自己找不到启动子，它需要一大群帮手",
      en: "Pol II is a **12-subunit enzyme** of over 510,000 molecular weight whose three largest subunits are recognisably related to the bacterial ones, so the extra size hides a deep conservation. What it cannot do alone is start. It needs **general transcription factors**, proteins required at every Pol II promoter, and they assemble in a fixed order. **TBP — the TATA-binding protein — binds the TATA box**, a short A-and-T-rich sequence about 30 bp upstream; at promoters with no TATA box, which is roughly 80% of human promoters, TBP arrives instead inside a large complex called **TFIID**. Then **TFIIB**, then **TFIIA**, then **TFIIF together with Pol II**, then **TFIIE and TFIIH**. The finished assembly is the **preinitiation complex**, and counting every subunit it can exceed **fifty polypeptides** — against six for the bacterial holoenzyme. Two of the parts do jobs you have already seen: **TFIID acts as a scaffold spanning over 70 bp and thereby fixes where transcription starts**, which is how a promoter with no TATA box gets positioned at all; and **TFIIH carries a helicase that opens the DNA**, doing the same work as the bacterial closed-to-open transition.",
      cn: "Pol II 是一个**十二亚基**的酶，分子量超过 510,000，其中最大的三个亚基与细菌的对应亚基明显同源 —— 所以「更大」底下藏着的是高度保守。它自己做不到的事是「开始」。它需要**通用转录因子（general transcription factor）**，即每个 Pol II 启动子都要用到的那些蛋白，而且它们按固定顺序装配。**TBP（TATA 结合蛋白）结合 TATA 盒**，即上游约 30 bp 处一段富含 A 和 T 的短序列；在没有 TATA 盒的启动子上（约占人类启动子的 80%），TBP 改为藏在一个叫 **TFIID** 的大复合物里前来。接着是 **TFIIB**，然后 **TFIIA**，然后 **TFIIF 带着 Pol II**，最后 **TFIIE 与 TFIIH**。装好的这一坨叫**前起始复合物（preinitiation complex）**，把所有亚基数进去可以超过**五十条多肽** —— 对照细菌全酶的六个。其中两个部件做的是你已经见过的活：**TFIID 当支架，跨过 70 多个碱基对，由此固定转录从哪里开始**，没有 TATA 盒的启动子正是靠它定位的；而 **TFIIH 带一个把 DNA 撑开的解旋酶**，干的就是细菌里从闭合到开放那一步的活。",
      src: "A p.969"
    },
    {
      link_en: "and one subunit of Pol II carries a tail that decides what happens to the RNA next",
      link_cn: "而 Pol II 的一个亚基上拖着一条尾巴，它决定 RNA 接下来会遭遇什么",
      en: "The largest subunit of Pol II ends in a long tail made of many repeats of the same seven amino acids, **-YSPTSPS-**, on a floppy linker: **26 repeats in yeast, 52 in mouse and human**. It is called the **carboxyl-terminal domain**, or **CTD**, and it works as a clock made of phosphates. At initiation a kinase inside TFIIH — and other kinases, including CDK9 — phosphorylate many places on it, mostly on Ser residues, and that phosphorylation changes the shape of the whole complex and starts transcription. **Through elongation the pattern of phosphates on the CTD keeps changing, and which pattern is present determines which RNA-processing machinery is bound to the complex.** At termination the tail is stripped of phosphates and the machinery is recycled. **The consequence is the thing to carry: capping, splicing and tailing are not a later stage that begins when transcription ends — they are recruited onto a transcript that is still attached to the polymerase, by the pattern on this tail.**",
      cn: "Pol II 最大的那个亚基末端拖着一条长尾巴，由同样七个氨基酸 **-YSPTSPS-** 重复很多次构成，接在一段松软的连接段上：**酵母 26 个重复，小鼠和人 52 个**。它叫**羧基末端结构域（carboxyl-terminal domain，CTD）**，工作方式是一个由磷酸构成的时钟。起始时，TFIIH 内部的一个激酶 —— 以及包括 CDK9 在内的其他激酶 —— 在它上面多处加磷酸，主要加在 Ser 上，这个磷酸化改变整个复合物的构象，转录随之开始。**在延长过程中，CTD 上的磷酸模式不断变化，而当下是哪种模式，就决定了哪一套 RNA 加工机器结合在复合物上。**终止时尾巴上的磷酸被去掉，机器回收再用。**要带走的结论是：加帽、剪接、加尾并不是转录结束后才开始的下一阶段 —— 它们是被这条尾巴上的模式召集到「还挂在聚合酶上的转录本」上的。**",
      src: "A p.969",
      see: [{ id: "L-26-2-1", en: "what that machinery then does to the transcript", cn: "这套机器随后对转录本做了什么" }]
    },
    {
      link_en: "and because each of these steps is a separate step, each one has a drug that stops it",
      link_cn: "而正因为这些步骤彼此独立，每一步都有一个能把它卡死的药",
      en: "Three compounds, each a clean experiment on a different step. **Actinomycin D** blocks elongation in bacteria and eukaryotes alike: its flat portion slides in between two stacked G-C pairs — **intercalation** — deforming the duplex so the enzyme cannot move along it. **Rifampin** blocks **promoter clearance** specifically, binding near the bacterial active site so the RNA never gets past 2 or 3 nucleotides; it is a front-line drug for tuberculosis, which kills about 1.8 million people a year, and **more than 600,000 rifampin-resistant cases are reported annually, mostly from mutations at Asp516, His526 and Ser531 of one polymerase subunit**. **α-Amanitin**, from the death cap mushroom *Amanita phalloides*, blocks **Pol II**, and Pol III at higher doses. Its selectivity is the useful part, and it is a list of what it spares: **not Pol I, not bacterial polymerase, and not the mushroom's own Pol II**. Because mitochondrial polymerase is bacteria-like and also spared, dosing a eukaryotic cell with α-amanitin leaves only mitochondrial transcription running, which is how that transcription is looked at on its own. An amount the size of a grain of rice is a lethal dose for a human.",
      cn: "三个化合物，每一个都是对某一步的干净实验。**放线菌素 D（actinomycin D）**在细菌和真核里都阻断延长：它扁平的那部分插进两对堆叠的 G-C 之间 —— 这叫**嵌入（intercalation）** —— 把双链撑变形，酶就没法沿着它走。**利福平（rifampin）**专门阻断**启动子清空**，结合在细菌活性中心附近，使 RNA 永远超不过 2 到 3 个核苷酸；它是结核病的一线药，而结核病每年约夺去 180 万人的生命，**每年报告的利福平耐药病例超过 60 万，多数来自聚合酶某个亚基上 Asp516、His526、Ser531 的突变**。**α-鹅膏蕈碱（α-amanitin）**来自毒鹅膏 *Amanita phalloides*，阻断 **Pol II**，剂量更高时也阻断 Pol III。它的选择性才是有用的地方，而这份选择性是一张「它不碰谁」的清单：**不碰 Pol I，不碰细菌聚合酶，也不碰这蘑菇自己的 Pol II**。由于线粒体聚合酶像细菌的、同样不受影响，给真核细胞加 α-鹅膏蕈碱之后就只剩线粒体转录还在跑 —— 这正是单独观察线粒体转录的办法。对人而言，一粒米大小的量就是致死量。",
      src: "A p.971"
    }
  ],
  terms: [
    { en: "template strand and coding strand", cn: "模板链与编码链",
      def_en: "The strand copied by RNA polymerase is the template. Its partner, the nontemplate or coding strand, has the same sequence as the RNA (U for T), and every regulatory sequence is written in it by convention, 5' to 3'. Which strand is coding is decided per gene, not per chromosome.",
      def_cn: "被 RNA 聚合酶抄的那条是模板链。它的搭档叫非模板链或编码链，序列与 RNA 相同（T 换成 U），按惯例所有调控序列都写成编码链的样子，5′ 到 3′。哪条链是编码链是逐个基因决定的，不是逐条染色体决定的。" },
    { en: "promoter numbering", cn: "启动子编号",
      def_en: "The base pair matching the first nucleotide of the RNA is +1; upstream positions are negative; there is no zero. E. coli polymerase spans about -70 to +30, with TATAAT at -10, TTGACA at -35 and an AT-rich UP element at -40 to -60 in some very highly expressed genes.",
      def_cn: "与 RNA 第一个核苷酸对应的碱基对是 +1，上游为负数，没有 0 号位。大肠杆菌聚合酶覆盖约 -70 到 +30，-10 处 TATAAT，-35 处 TTGACA，某些高表达基因在 -40 到 -60 还有一段富含 AT 的 UP 元件。" },
    { en: "closed complex, open complex, promoter clearance", cn: "闭合复合物、开放复合物、启动子清空",
      def_en: "The resolvable states of bacterial initiation: promoter bound but DNA still double-stranded; 12-15 bp unwound; then the enzyme moving away after the first bonds are made. A promoter mutation can act on any one of them, which is why a single base pair can change binding by orders of magnitude.",
      def_cn: "细菌起始可分辨的几个状态：结合了启动子但 DNA 仍是双链；解开 12-15 bp；头几个键形成后酶离开启动子。启动子突变可以作用在其中任何一步，这正是改一个碱基对能让结合速率差几个数量级的原因。" },
    { en: "footprinting", cn: "足迹法",
      def_en: "Label one end of one DNA strand, cut the DNA randomly about once per molecule, and run the fragments out by length. A bound protein shields the stretch it covers, so those lengths are missing and the ladder shows a gap. RNA polymerase leaves a 60-80 bp footprint containing -10 and -35.",
      def_cn: "把一条 DNA 链的一端做标记，随机切断（平均每分子一刀），按长度分开片段。结合上去的蛋白挡住它覆盖的那一段，这些长度就缺席，梯子上出现空档。RNA 聚合酶的足迹是 60-80 bp，其中包含 -10 与 -35。" },
    { en: "sigma subunit and anti-sigma proteins", cn: "σ 亚基与抗 σ 蛋白",
      def_en: "Sigma steers RNA polymerase to a set of promoters; core plus sigma is the holoenzyme. E. coli has several sigmas — σ⁷⁰ ordinarily, σ³² under heat stress — so swapping one subunit switches a whole gene set. Availability is set by synthesis and degradation, by modification, and by anti-sigma proteins that bind and sequester one.",
      def_cn: "σ 把 RNA 聚合酶引向一套启动子；核心加 σ 是全酶。大肠杆菌有好几种 σ —— 平时 σ⁷⁰，热胁迫时 σ³² —— 所以换一个亚基就切换一整套基因。哪些 σ 可用，由合成与降解速度、化学修饰、以及把 σ 扣住不放的抗 σ 蛋白决定。" },
    { en: "rho-independent and rho-dependent terminators", cn: "不依赖 rho 与依赖 rho 的终止子",
      def_en: "The first makes the RNA fold into a hairpin 15-20 nucleotides before the end, followed by three template A residues read as U; the hairpin tears apart the weak A=U pairs of the hybrid and the transcript falls off. The second carries a CA-rich rut element where rho binds the RNA and walks 5' to 3' on ATP until it reaches the paused enzyme.",
      def_cn: "前者让 RNA 在终点前 15-20 个核苷酸处折成发夹，其后是模板上三个 A、抄成三个 U；发夹把杂合链里弱的 A=U 拽开，转录本脱落。后者带一段富含 CA 的 rut 元件，rho 在那里结合 RNA，靠 ATP 从 5′ 向 3′ 走，直到追上停顿的酶。" },
    { en: "NusA and NusG", cn: "NusA 与 NusG",
      def_en: "NusA replaces sigma on the elongating enzyme and leaves when transcription finishes. NusG binds the ribosome and RNA polymerase at once, physically coupling transcription to translation in bacteria, so translation rate affects transcription rate. The nuclear envelope makes this impossible in eukaryotes.",
      def_cn: "NusA 在延长中的酶上取代 σ，转录结束时离开。NusG 同时结合核糖体与 RNA 聚合酶，在细菌里把转录与翻译物理地耦合起来，于是翻译速度会影响转录速度。核膜使真核细胞做不到这件事。" },
    { en: "preinitiation complex", cn: "前起始复合物",
      def_en: "The assembly at a Pol II promoter: TBP (or TFIID where there is no TATA box, about 80% of human promoters), then TFIIB, TFIIA, TFIIF with Pol II, then TFIIE and TFIIH. Counting subunits it can exceed fifty polypeptides. TFIID is a scaffold over 70 bp that fixes the start site; TFIIH supplies both the helicase and the CTD kinase.",
      def_cn: "Pol II 启动子上的装配体：TBP（没有 TATA 盒时改由 TFIID 带来，约占人类启动子的 80%），然后 TFIIB、TFIIA、TFIIF 带着 Pol II，最后 TFIIE 与 TFIIH。数亚基可以超过五十条多肽。TFIID 是跨 70 多个碱基对的支架，用来固定起点；TFIIH 同时提供解旋酶和给 CTD 加磷酸的激酶。" },
    { en: "CTD", cn: "CTD（羧基末端结构域）",
      def_en: "A tail on Pol II's largest subunit made of repeats of -YSPTSPS-, 26 in yeast and 52 in humans, on a disordered linker. Phosphorylated at initiation, its pattern of phosphates changes through elongation and determines which RNA-processing components are bound; it is stripped at termination. This is what makes capping, splicing and tailing co-transcriptional.",
      def_cn: "Pol II 最大亚基上的一条尾巴，由 -YSPTSPS- 重复构成，酵母 26 个、人 52 个，接在一段无序连接段上。起始时被磷酸化，延长过程中磷酸模式不断变化，决定哪套 RNA 加工组件结合上来；终止时磷酸被去掉。加帽、剪接、加尾之所以与转录同时发生，原因就在这里。" },
    { en: "actinomycin D, rifampin, α-amanitin", cn: "放线菌素 D、利福平、α-鹅膏蕈碱",
      def_en: "Actinomycin D intercalates between stacked G-C pairs and blocks elongation everywhere. Rifampin blocks bacterial promoter clearance, stopping the RNA at 2-3 nucleotides; it is a front-line TB drug and resistance maps to Asp516, His526 and Ser531. α-Amanitin blocks Pol II and, higher, Pol III, sparing Pol I, bacterial polymerase and the death cap's own Pol II.",
      def_cn: "放线菌素 D 嵌入堆叠的 G-C 之间，在哪里都阻断延长。利福平阻断细菌的启动子清空，把 RNA 卡在 2-3 个核苷酸；它是结核一线药，耐药定位到 Asp516、His526、Ser531。α-鹅膏蕈碱阻断 Pol II、剂量高时也阻断 Pol III，但放过 Pol I、细菌聚合酶，以及毒鹅膏自己的 Pol II。" }
  ]
};

/* ===================================================================== L-26-2-1 */
window.BIOLITE_SPINE["L-26-2-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "hydrogen bond", "nucleus", "cytoplasm", "virus",
            "influenza", "ATP", "phosphate", "yeast"],
  nodeTitle_en: "RNA processing",
  nodeTitle_cn: "RNA 加工",
  title_en: "What is done to a transcript before it is usable, and why RNA turned out to be doing the doing",
  title_cn: "一条转录本在能用之前被做了什么，以及为什么做这件事的原来是 RNA 自己",
  steps: [
    {
      en: "A newly made RNA is rarely usable as it stands. Almost every RNA in a eukaryotic cell, and many in bacteria, is **processed** — cut, trimmed, chemically modified, or had pieces spliced out — before it does its job. For a eukaryotic **mRNA**, the RNA that will be translated into protein, three things are done: **a cap is put on the 5' end, an intron is cut out and the flanking exons joined, and a long run of A residues is added to the 3' end.** Everything below is those three, plus what happens to the molecule afterwards.",
      cn: "刚做出来的 RNA 很少能直接用。真核细胞里几乎每一条 RNA、细菌里的许多条，在干活之前都要经过**加工（processing）** —— 被切、被削、被化学修饰，或者被剪掉一段。对真核 **mRNA**（会被翻译成蛋白的那种 RNA）来说，要做三件事：**5′ 端加帽、把内含子切掉并把两侧的外显子接起来、3′ 端加上一长串 A。**下面讲的就是这三件事，外加分子在这之后的遭遇。",
      src: "A p.972",
      see: [{ id: "L-8-2-1", en: "where intron, exon and splicing were first named", cn: "内含子、外显子、剪接最初是在哪里被命名的" }]
    },
    {
      link_en: "start with the cap, because it is built on something that was there from the first second",
      link_cn: "先说帽子，因为它是搭在一个从第一秒就存在的东西上的",
      en: "The first nucleotide RNA polymerase lays down keeps its **5'-triphosphate** — three phosphates in a row, never cleaved off. **The cap is built directly onto that surviving triphosphate**: a guanosine residue is joined to it back-to-front, through a 5'-to-5' linkage that no ordinary RNA bond resembles, and then methyl groups are added. Two consequences follow from the odd linkage. **The 5' end of a capped mRNA no longer looks like an end**, so the enzymes that chew RNA inwards from a 5' end cannot get a grip on it; and the cap becomes the landmark that the protein-making machinery uses to find the message at all.",
      cn: "RNA 聚合酶放下的第一个核苷酸保留着自己的 **5′-三磷酸** —— 一连三个磷酸，从来不被切掉。**帽子就是直接搭在这个留下来的三磷酸上的**：一个鸟苷残基以「头对头」的方式接上去，形成一个 5′-对-5′ 的连接，普通 RNA 里没有任何键长这样，随后再加上甲基。这个古怪连接带来两个后果：**加了帽的 mRNA，它的 5′ 端就不再像一个「端」了**，那些从 5′ 端往里啃 RNA 的酶因此无从下口；同时帽子成了造蛋白的机器用来找到这条信息的地标。",
      src: "A p.973"
    },
    {
      link_en: "and the three jobs are not done one after another — they are done at once, by one schedule",
      link_cn: "而这三件事不是一件做完再做下一件 —— 它们同时进行，由同一份时间表安排",
      recall_en: "the schedule is the phosphate pattern on the polymerase's tail",
      recall_cn: "这份时间表就是聚合酶尾巴上的磷酸模式",
      en: "The capping, splicing and tail-adding machines are **organised in association with each other and with the phosphorylated tail of RNA polymerase II** — the repeating heptad tail that changes its pattern of phosphates as transcription proceeds. **So one tail on one enzyme schedules all three operations, and all three happen on a transcript that is still attached to the polymerase that is making it.** Processing is not a later department the RNA is sent to. It is happening while the RNA is being written.",
      cn: "加帽、剪接、加尾这三套机器**彼此关联地组织在一起，并且都挂靠在 RNA 聚合酶 II 那条被磷酸化的尾巴上** —— 就是那条随转录进行而不断改变磷酸模式的七肽重复尾巴。**于是一个酶上的一条尾巴排了这三件事的班，而且三件事都发生在「还挂在正在合成它的聚合酶上」的转录本身上。**加工不是 RNA 被送去的下一个部门，它是在 RNA 正被写出来的同时发生的。",
      src: "A p.973",
      see: [{ id: "L-26-1-1", en: "the tail, and how its phosphate pattern is set", cn: "那条尾巴，以及它的磷酸模式是怎么被设定的" }]
    },
    {
      link_en: "a virus with no capping enzymes of its own shows how valuable a cap is",
      link_cn: "一个自己没有加帽酶的病毒，说明了帽子有多值钱",
      en: "Influenza carries no capping enzymes. What it does instead is called **cap-snatching**: the viral polymerase grabs a capped host transcript, cuts a short capped piece off its 5' end, and uses that stolen fragment as the primer on which viral RNA synthesis begins. **A cap is worth stealing, which is the most direct evidence that an mRNA without one is not usable.**",
      cn: "流感病毒不带任何加帽酶。它的做法叫**抢帽（cap-snatching）**：病毒聚合酶抓住宿主一条已加帽的转录本，从它的 5′ 端切下一小段带帽的片段，再用这段偷来的片段当引物，从它开始合成病毒 RNA。**帽子值得偷 —— 这是「没有帽子的 mRNA 不能用」最直接的证据。**",
      src: "A p.974"
    },
    {
      link_en: "the other end gets a tail, and the same chemical addition means opposite things in the two kingdoms",
      link_cn: "另一端加的是尾巴，而同一个化学添加在两界里意思相反",
      en: "The 3' end of a eukaryotic mRNA receives a **poly(A) tail** — a long run of adenylate residues added after transcription, not copied from any template. In a eukaryotic cell **the tail helps protect the message from being destroyed by nucleases**, the enzymes that cut RNA. Many bacterial mRNAs also get poly(A) tails, and there **the tail stimulates decay instead of preventing it**. The identical chemical addition, with the opposite biological consequence, so what a tail means has to be read off the organism and not off the chemistry.",
      cn: "真核 mRNA 的 3′ 端会得到一条 **poly(A) 尾巴** —— 转录之后接上去的一长串腺苷酸，不抄自任何模板。在真核细胞里，**这条尾巴帮助保护这条信息不被核酸酶（切 RNA 的酶）毁掉**。许多细菌 mRNA 也会加上 poly(A) 尾，而在那里，**这条尾巴不是防止降解，而是促进降解**。同一个化学添加，生物学后果相反 —— 所以尾巴意味着什么，要看是什么生物，而不是看化学。",
      src: "A p.975"
    },
    {
      link_en: "now the middle of the message: two attacks by a hydroxyl group, and that is all splicing is",
      link_cn: "现在说信息的中段：两次羟基进攻，剪接的全部内容就是这个",
      en: "**Splicing is two sequential transesterifications** — two reactions in which one ester linkage is swapped for another, each one a hydroxyl group attacking a phosphodiester bond. **First**, the **2'-hydroxyl of one particular adenosine sitting well inside the intron — the branch point —** attacks the 5' splice site, cutting the RNA there and tying the intron's own 5' end back onto that adenosine, so the intron loops out as a **lariat**. **Second**, the 3'-hydroxyl of the now-freed upstream exon attacks the 3' splice site, cutting there and joining the two exons together. The intron leaves as the lariat. **The nucleophile is therefore an adenosine buried inside the intron, not either boundary sequence:** the invariant GU at the intron's 5' edge and AG at its 3' edge are markers a recognition step reads in order to find the site, and about **1% of human introns do not even use them**, being removed by a separate machine that reads AU and AC instead.",
      cn: "**剪接就是两次接连发生的酯交换（transesterification）** —— 两次「一个酯键换成另一个酯键」的反应，每一次都是一个羟基去进攻一个磷酸二酯键。**第一次**：**内含子内部某一个特定腺苷的 2′-羟基 —— 这个腺苷叫分支点（branch point）** —— 进攻 5′ 剪接位点，在那里把 RNA 切开，并把内含子自己的 5′ 端接回到这个腺苷上，于是内含子套成一个**套索（lariat）**。**第二次**：刚被放开的上游外显子的 3′-羟基进攻 3′ 剪接位点，在那里切开，并把两个外显子接到一起。内含子以套索的形式离场。**所以真正的亲核基团是埋在内含子内部的一个腺苷，而不是任何一端的边界序列：**内含子 5′ 边不变的 GU 和 3′ 边不变的 AG，是识别步骤用来找到位点的标记；而且**约 1% 的人类内含子根本不用它们**，它们由另一套读 AU 和 AC 的机器切除。",
      src: "A p.976"
    },
    {
      link_en: "and the catalyst for this can be the RNA itself, which was shown in a tube containing no relevant protein",
      link_cn: "而催化这件事的可以是 RNA 自己 —— 这是在一支不含任何相关蛋白的试管里证明的",
      recall_en: "the same two attacks as the step above, running with no protein enzyme present at all",
      recall_cn: "和上一步是同样的两次进攻，只是全程没有任何蛋白酶参与",
      en: "**Group I and group II introns are self-splicing**: they cut themselves out of a transcript with no protein catalyst whatsoever. The demonstration, by Thomas Cech and colleagues in 1982, is worth having in its concrete form, because it is what makes the claim testable rather than rhetorical. They took a ribosomal RNA gene from *Tetrahymena*, introns and all, and transcribed it **with purified bacterial RNA polymerase, in a tube containing no *Tetrahymena* protein at all** — and the RNA that came out spliced itself accurately anyway. **A reaction with the correct product occurred in a vessel provably containing no protein capable of catalysing it, so the catalyst was the RNA.** An RNA with catalytic activity is called a **ribozyme**.",
      cn: "**I 型和 II 型内含子是自剪接的**：它们不靠任何蛋白催化剂就把自己从转录本里切出去。Thomas Cech 及其同事 1982 年的那次演示，值得记住它具体的样子，因为正是这个样子让这个主张变成可检验的而不是修辞性的。他们取了*四膜虫（Tetrahymena）*的一个核糖体 RNA 基因，连内含子一起，**用纯化的细菌 RNA 聚合酶、在一支完全不含四膜虫蛋白的试管里**转录它 —— 出来的 RNA 照样把自己准确地剪掉了。**一个产物正确的反应，发生在一个可以证明不含任何能催化它的蛋白的容器里，所以催化剂就是这条 RNA 本身。**有催化活性的 RNA 叫**核酶（ribozyme）**。",
      src: "A p.976",
      see: [
        { id: "L-26-4-1", en: "how you prove an RNA is really an enzyme", cn: "怎样证明一条 RNA 真的是酶" },
        { id: "L-8-2-1", en: "group I and group II introns, first met", cn: "I 型与 II 型内含子的初次登场" }
      ]
    },
    {
      link_en: "and the machine that splices ordinary nuclear transcripts turns out to run on the same chemistry",
      link_cn: "而剪接普通核内转录本的那台机器，跑的原来是同一套化学",
      en: "Most eukaryotic introns are removed not by themselves but by the **spliceosome**, a machine of small RNAs plus dozens of proteins that assembles on each intron. Comparing its structure with that of a self-splicing group II intron shows their catalytic centres are **arranged in a nearly identical manner**. **So the elaborate protein-studded machine still has an RNA active site, and it looks like a self-splicing intron that acquired proteins rather than a protein machine built from scratch.** The proteins assemble and position; the chemistry is still RNA's.",
      cn: "大多数真核内含子不是自己切自己，而是由**剪接体（spliceosome）**切掉的 —— 那是一台由小 RNA 加几十个蛋白组成、在每个内含子上现场装配的机器。把它的结构和一个自剪接的 II 型内含子相比，两者的催化中心**排布方式几乎完全一致**。**所以这台装满蛋白的复杂机器，活性中心仍然是 RNA；它看起来像一个后来招募了蛋白的自剪接内含子，而不是从零搭起来的蛋白机器。**蛋白负责装配和定位，化学仍然是 RNA 干的。",
      src: "A p.979"
    },
    {
      link_en: "which exons a cell keeps is itself a decision, and it is made differently in different cells",
      link_cn: "留下哪些外显子本身就是一个决定，而不同细胞做的决定不一样",
      en: "One pre-mRNA can be spliced in more than one way. **Entire exons can be left out (skipped) or put in (retained), and splice sites a few nucleotides away from the usual ones can be used instead** — this is **alternative splicing**, and it produces several different proteins from one gene. It affects a small fraction of yeast transcripts and **more than 95% of human genes**. That number resolves a real puzzle: how complex an organism is does not track how many protein-coding genes it has, and alternative splicing is one of the main reasons the protein count runs far ahead of the gene count.",
      cn: "同一条前体 mRNA 可以有不止一种剪法。**整个外显子可以被跳过（skipped）或被保留（retained），也可以改用离常规位点只差几个核苷酸的另一个剪接位点** —— 这叫**可变剪接（alternative splicing）**，它让一个基因产出好几种不同的蛋白。它影响酵母转录本中的一小部分，以及**超过 95% 的人类基因**。这个数字解决了一个真实的困惑：一个生物有多复杂，并不随它有多少编码蛋白的基因而变化；而蛋白的数目远远超过基因的数目，可变剪接正是主要原因之一。",
      src: "A p.981"
    },
    {
      link_en: "and because it is a decision, it can be forced — one licensed drug does exactly that",
      link_cn: "既然是决定，就可以被强行改变 —— 有一个已上市的药做的正是这件事",
      en: "Spinal muscular atrophy is caused by loss of a working **SMN protein**, and it used to kill in infancy without exception. Patients lack a functional *SMN1* gene, but they still carry a near-identical copy, *SMN2* — which by default **skips exon 7** and therefore makes an unstable, useless protein. **Nusinersen** is a short synthetic piece of nucleic acid, designed to be complementary to the exact sequence in the *SMN2* transcript that causes exon 7 to be skipped. It pairs with that sequence and hides it from the splicing machinery, exon 7 is put in, working SMN protein appears, and the disease stops progressing. **Splicing is a drug target, and this is what it looks like when the target is hit.**",
      cn: "脊髓性肌萎缩症的病因是缺少能用的 **SMN 蛋白**，过去无一例外在婴儿期致死。患者缺少一个有功能的 *SMN1* 基因，但他们身上还有一个几乎完全相同的拷贝 *SMN2* —— 而 *SMN2* 默认会**跳过第 7 外显子**，因此做出一个不稳定、没有用的蛋白。**诺西那生（nusinersen）**是一段人工合成的短核酸，被设计成与 *SMN2* 转录本上「导致第 7 外显子被跳过」的那段序列互补。它与那段序列配对、把它从剪接机器眼前遮住，第 7 外显子于是被留下，有功能的 SMN 蛋白出现，病程停止推进。**剪接是一个药物靶点 —— 而打中这个靶点，长的就是这个样子。**",
      src: "A p.981"
    },
    {
      link_en: "mRNA is not the only transcript that gets processed. A tRNA is trimmed at both ends",
      link_cn: "被加工的不只有 mRNA。tRNA 两头都要被削",
      en: "A **tRNA** — the small RNA that carries one amino acid to the protein-making machinery — is transcribed longer than it will end up, and is trimmed at both ends. The enzyme that removes the extra RNA from the 5' end is **RNase P**, found in every organism, and **RNase P is itself a ribozyme**: in bacteria the RNA part alone does the cutting precisely, with the protein component removed. **That is the second independent case of RNA catalysis in this spine, in a completely different enzyme from the introns above** — which is what turns self-splicing from a curiosity into a general fact about what RNA can do.",
      cn: "**tRNA**（把一个氨基酸送到造蛋白机器那里去的小 RNA）转录出来时比最终长度长，两头都要削。把 5′ 端多余 RNA 去掉的酶叫 **RNase P**，所有生物都有；而 **RNase P 自己就是一个核酶**：在细菌里，把蛋白组分拿掉之后，单靠它的 RNA 部分照样切得很准。**这是本主线里第二个独立的 RNA 催化案例，而且发生在一个与上面那些内含子完全不同的酶里** —— 正是这一点，把自剪接从一件奇闻变成了关于「RNA 能做什么」的普遍事实。",
      src: "A p.985"
    },
    {
      link_en: "and the other end of a tRNA is built without copying anything at all",
      link_cn: "而 tRNA 的另一端，是在完全不抄任何东西的情况下造出来的",
      en: "Every tRNA ends in the same three bases, **C-C-A**, and that is where the amino acid gets attached. **This CCA is missing from all eukaryotic tRNA precursors and from some bacterial ones**, and it is added afterwards by an enzyme called **tRNA nucleotidyltransferase**. What makes it worth a step of its own: **this enzyme holds the three ribonucleoside triphosphates in three separate binding sites and lays them down in that order, with no DNA or RNA template anywhere.** The order is dictated by the shape of the protein. A defined nucleotide sequence, produced without copying anything.",
      cn: "每条 tRNA 都以同样的三个碱基 **C-C-A** 结尾，氨基酸就挂在那里。**所有真核 tRNA 前体、以及一部分细菌 tRNA 前体上都没有这个 CCA**，它是事后由一个叫 **tRNA 核苷酸转移酶（tRNA nucleotidyltransferase）**的酶加上去的。它值得单占一步的理由是：**这个酶把三种核糖核苷三磷酸分别放在三个独立的结合位点里，按那个顺序一个个接上去，全程没有任何 DNA 或 RNA 模板。**顺序是由蛋白自己的形状规定的。一段确定的核苷酸序列，在没有抄任何东西的情况下被造了出来。",
      src: "A p.985"
    },
    {
      link_en: "processing does not end when a mature molecule exists — how long it survives is regulated too",
      link_cn: "加工并不在成熟分子出现时结束 —— 它能活多久，同样受调控",
      en: "How much of a given RNA is present in a cell depends on how fast it is destroyed as well as on how fast it is made, and **the two lifetimes differ by two orders of magnitude between kingdoms: a bacterial mRNA has a half-life of about 1.5 minutes, a vertebrate cell's average mRNA about 3 hours.** That fits what each needs — a bacterium reprograms its protein output as its surroundings change, a vertebrate cell keeps most products for far longer. The routes differ too. **Bacterial decay starts with an endonuclease** — an enzyme that cuts a nucleic acid somewhere in the middle rather than nibbling from an end — **cutting the message in two**, despite the 5'-triphosphate that would otherwise protect it. **A eukaryotic mRNA is first decapped and its poly(A) tail shortened** — the two protections of the earlier steps removed — and only then can exonucleases, including a large multi-subunit machine called the **exosome**, chew it up. **Degradation is not the absence of regulation; a great deal of regulation happens there.**",
      cn: "细胞里某条 RNA 有多少，既取决于它被造出来的速度，也取决于它被毁掉的速度，而**两界之间的寿命差了两个数量级：细菌 mRNA 的半衰期约 1.5 分钟，脊椎动物细胞 mRNA 的平均半衰期约 3 小时。**这与各自的需要相符 —— 细菌要随环境变化重排自己的蛋白产出，脊椎动物细胞的大多数产物则要用很久。路线也不同。**细菌的降解从一个内切核酸酶开始** —— 这类酶在核酸中段下刀，而不是从一端一点点啃 —— **它把信息拦腰切断**，尽管 5′-三磷酸本来是保护它的。**真核 mRNA 则先被去帽、poly(A) 尾被缩短** —— 前面两步讲的两道保护先被拆掉 —— 然后外切核酸酶（包括一台叫**外切体（exosome）**的多亚基大机器）才能把它啃掉。**降解不是「没有调控」；大量调控恰恰发生在那里。**",
      src: "A p.987"
    },
    {
      link_en: "and one last class of RNA is carved out of a longer transcript purely in order to switch other genes off",
      link_cn: "最后还有一类 RNA，被从更长的转录本里切出来，唯一的用途就是关掉别的基因",
      en: "A **microRNA**, or **miRNA**, is a finished RNA about **22 nucleotides long** whose sequence is complementary to a region of some other cell's mRNA. Its production is a pipeline in two compartments. A long primary transcript is cut in the nucleus by an enzyme called **Drosha** into a short hairpin precursor; the precursor is exported to the cytoplasm; there a second enzyme, **Dicer**, cuts it again to the mature 22-nucleotide length; and that piece is loaded into a protein complex called **RISC**. RISC then finds messages the miRNA can pair with. **Where the match is near-perfect it cuts the mRNA outright; where the match is only partial it blocks translation instead** — translation being the reading of a message into a protein. The scale is the reason this is not a footnote: **about 1,500 human genes encode miRNAs, and between them they affect the expression of most protein-coding genes** — large-scale regulation done by base pairing alone.",
      cn: "**微 RNA（microRNA，miRNA）**是一条约 **22 个核苷酸长**的成品 RNA，序列与某条别的 mRNA 的某个区段互补。它的产出是一条跨两个区室的流水线：一条很长的初级转录本先在细胞核里被一个叫 **Drosha** 的酶切成一个短发夹前体；前体被运出到胞质；在那里第二个酶 **Dicer** 再切一刀，得到成熟的 22 个核苷酸；这一小段随后被装进一个叫 **RISC** 的蛋白复合物。RISC 去寻找 miRNA 能配对的信息。**配对近乎完美的，它直接把 mRNA 切断；只有部分配对的，它转而阻断翻译** —— 所谓翻译，就是把一条信息读成一个蛋白。规模才是它不算脚注的原因：**人类约有 1,500 个基因编码 miRNA，它们合起来影响绝大多数编码蛋白的基因的表达** —— 靠单纯的碱基配对完成的大规模调控。",
      src: "A p.985",
      see: [{ id: "L-28-3-1", en: "RNA interference as a regulatory system, a laboratory tool and a class of drugs", cn: "RNA 干扰：调控系统、实验工具、以及一类药物" }]
    }
  ],
  terms: [
    { en: "cap", cn: "帽子（5′ 帽）",
      def_en: "A guanosine joined back-to-front, through a 5'-to-5' linkage, onto the 5'-triphosphate the first transcribed nucleotide never lost, then methylated. Because the linkage makes the end no longer look like an end, nucleases that attack from a 5' end cannot start there, and the cap is the landmark the translation machinery uses to find the message.",
      def_cn: "一个鸟苷以头对头的方式、通过 5′-对-5′ 的连接接到第一个核苷酸从未失去的那个 5′-三磷酸上，再加甲基。这个连接让 5′ 端不再像一个端，从 5′ 端进攻的核酸酶无从下口；同时帽子是翻译机器用来找到这条信息的地标。" },
    { en: "branch point and lariat", cn: "分支点与套索",
      def_en: "The branch point is an adenosine well inside the intron whose 2'-hydroxyl performs the first attack of splicing, tying the intron's 5' end back onto itself so it loops out as a lariat. It, and not the GU...AG boundary sequences, is the chemical target; those boundaries are markers a recognition step reads.",
      def_cn: "分支点是内含子内部的一个腺苷，它的 2′-羟基发动剪接的第一次进攻，把内含子的 5′ 端接回自身，使内含子套成一个套索。真正的化学靶点是它，而不是 GU…AG 那两段边界序列；边界只是识别步骤读的标记。" },
    { en: "self-splicing introns", cn: "自剪接内含子",
      def_en: "Group I and group II introns excise themselves with no protein catalyst. Shown by Cech in 1982: a Tetrahymena rRNA gene transcribed with purified bacterial RNA polymerase, in a tube containing no Tetrahymena protein, spliced itself accurately. An RNA with catalytic activity is a ribozyme.",
      def_cn: "I 型与 II 型内含子不靠任何蛋白催化剂把自己切出去。Cech 1982 年的证明：一个四膜虫 rRNA 基因，用纯化的细菌 RNA 聚合酶、在不含四膜虫蛋白的试管里转录，出来的 RNA 照样把自己准确剪掉。有催化活性的 RNA 就是核酶。" },
    { en: "alternative splicing", cn: "可变剪接",
      def_en: "Splicing one pre-mRNA in more than one way — skipping or retaining whole exons, or using a splice site a few nucleotides from the usual one — so one gene yields several proteins. It affects more than 95% of human genes, and is a large part of why protein diversity runs so far ahead of gene count.",
      def_cn: "同一条前体 mRNA 有不止一种剪法 —— 跳过或保留整个外显子，或改用离常规位点几个核苷酸的另一个位点 —— 于是一个基因给出好几种蛋白。它影响超过 95% 的人类基因，也是蛋白多样性远超基因数目的主要原因之一。" },
    { en: "nusinersen", cn: "诺西那生",
      def_en: "A short synthetic nucleic acid complementary to the sequence in the SMN2 transcript that causes exon 7 to be skipped. It pairs there, hides the sequence from the splicing machinery, forces exon 7 in, and restores working SMN protein — a licensed treatment for spinal muscular atrophy.",
      def_cn: "一段人工合成的短核酸，与 SMN2 转录本上「导致第 7 外显子被跳过」的序列互补。它在那里配对，把该序列从剪接机器眼前遮住，强行留下第 7 外显子，恢复有功能的 SMN 蛋白 —— 已获批用于治疗脊髓性肌萎缩症。" },
    { en: "tRNA nucleotidyltransferase", cn: "tRNA 核苷酸转移酶",
      def_en: "The enzyme that adds the terminal CCA — missing from all eukaryotic tRNA precursors — onto a tRNA's 3' end, where the amino acid will attach. It holds the three ribonucleoside triphosphates in three separate sites and lays them down in order, with no template of any kind; the order comes from the shape of the protein.",
      def_cn: "把末端 CCA（所有真核 tRNA 前体都缺这一段）加到 tRNA 3′ 端的酶，氨基酸就挂在那里。它把三种核糖核苷三磷酸分别放在三个独立位点上、按顺序接下去，完全没有任何模板；顺序来自蛋白本身的形状。" },
    { en: "microRNA and RISC", cn: "微 RNA 与 RISC",
      def_en: "A ~22-nucleotide RNA cut out of a long transcript by Drosha in the nucleus and by Dicer in the cytoplasm, then loaded into the RISC protein complex. RISC cuts an mRNA that matches nearly perfectly and blocks translation of one that matches partly. About 1,500 human genes encode them, affecting most protein-coding genes.",
      def_cn: "约 22 个核苷酸的 RNA，先在核内被 Drosha、再在胞质被 Dicer 从一条长转录本上切出来，然后装进 RISC 蛋白复合物。RISC 对配对近乎完美的 mRNA 直接切断，对部分配对的阻断翻译。人类约有 1,500 个基因编码它们，影响绝大多数编码蛋白的基因。" }
  ]
};

/* ===================================================================== L-26-3-1 */
window.BIOLITE_SPINE["L-26-3-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "virus", "influenza", "chromosome", "genome", "mRNA", "cancer",
            "coronavirus", "SARS", "COVID-19"],
  nodeTitle_en: "RNA-dependent synthesis of RNA and DNA",
  nodeTitle_cn: "以 RNA 为模板合成 RNA 和 DNA",
  title_en: "The arrow that runs backwards, and the three places your own cells use it",
  title_cn: "那个反着走的箭头，以及你自己的细胞用到它的三个地方",
  steps: [
    {
      en: "Everything so far has run one way: DNA is copied into DNA, and DNA is read into RNA. **In every one of those reactions the template — the strand being read — is DNA.** Some enzymes read an **RNA** template instead, and this step is the whole subject: an enzyme that reads RNA and writes DNA runs the information backwards, from the disposable copy into the permanent store.",
      cn: "到目前为止一切都朝一个方向走：DNA 被抄成 DNA，DNA 被读成 RNA。**在上述每一个反应里，模板 —— 也就是被读的那条链 —— 都是 DNA。**有些酶读的模板是 **RNA**，而这一整节讲的就是这件事：一个读 RNA、写 DNA 的酶，等于把信息倒着走了一遍 —— 从一次性的拷贝，回流进永久的存储。",
      src: "A p.988"
    },
    {
      link_en: "the enzyme has a name, and it was found in a class of virus that cannot live without it",
      link_cn: "这个酶有名字，而且是在一类离了它就活不了的病毒里被发现的",
      en: "An enzyme that builds DNA on an RNA template is an **RNA-dependent DNA polymerase**, usually called a **reverse transcriptase**. It was first found in **retroviruses** — animal viruses whose genome is RNA and which must **convert that RNA genome into double-stranded DNA** as part of their life cycle, so that the DNA copy can be inserted into a host chromosome. The virus particle carries the enzyme inside it, because the host cell has none to lend.",
      cn: "以 RNA 为模板造 DNA 的酶叫 **RNA 依赖的 DNA 聚合酶（RNA-dependent DNA polymerase）**，通常叫**逆转录酶（reverse transcriptase）**。它最早是在**逆转录病毒（retrovirus）**里发现的 —— 这类动物病毒的基因组是 RNA，而它们的生活史要求**把这份 RNA 基因组转换成双链 DNA**，好让这份 DNA 拷贝插进宿主染色体。病毒颗粒把这个酶自带在里面，因为宿主细胞没有这种酶可借。",
      src: "A p.988"
    },
    {
      link_en: "a retroviral genome is small enough to name gene by gene",
      link_cn: "逆转录病毒的基因组小到可以一个基因一个基因地点名",
      en: "A retrovirus typically has **three genes: *gag*, *pol* and *env*.** *gag* — the name is short for group associated antigen — encodes the structural proteins of the particle; *pol* encodes the reverse transcriptase along with the other enzymes the virus needs; *env* encodes the proteins of the envelope that lets the particle enter a cell. **Three genes is the whole of it**, which is why a retrovirus has to make each gene do more than one job, and why the frameshifting trick of the genetic code turns up in exactly this virus.",
      cn: "逆转录病毒一般有**三个基因：*gag*、*pol*、*env*。***gag*（名字来自 group associated antigen）编码病毒颗粒的结构蛋白；*pol* 编码逆转录酶以及病毒需要的其他几个酶；*env* 编码包膜蛋白，颗粒靠包膜进入细胞。**全部就这三个基因** —— 所以逆转录病毒必须让每个基因身兼数职，而遗传密码那边的移码（frameshifting）花招，正好就出现在这类病毒身上。",
      src: "A p.989",
      see: [{ id: "L-27-1-1", en: "translational frameshifting in Rous sarcoma virus, which is how one transcript makes both Gag and the reverse transcriptase", cn: "劳斯肉瘤病毒的翻译移码 —— 一条转录本同时给出 Gag 和逆转录酶的办法" }]
    },
    {
      link_en: "and the same reaction, run in a tube, became one of the standard tools of molecular biology",
      link_cn: "而同样的反应搬进试管，成了分子生物学的标准工具之一",
      en: "Give a purified reverse transcriptase an mRNA and the four deoxynucleoside triphosphates, and it writes out a DNA copy of that message. **The product is called cDNA — complementary DNA — and it is a DNA version of a gene with the introns already gone**, because the mRNA it was copied from had already been spliced. That is how a eukaryotic gene is put into a bacterium, which has no splicing machinery and could not otherwise read it.",
      cn: "给纯化的逆转录酶一条 mRNA 和四种脱氧核苷三磷酸，它就写出这条信息的 DNA 拷贝。**产物叫 cDNA（互补 DNA），它是一个「内含子已经不在了」的基因的 DNA 版本**，因为被抄的那条 mRNA 早就剪接过了。把一个真核基因塞进细菌里用的就是这一招 —— 细菌没有剪接机器，否则根本读不了那个基因。",
      src: "A p.995",
      see: [{ id: "L-9-1-1", en: "cDNA as a laboratory reagent, in full", cn: "作为实验试剂的 cDNA，完整讲法" }]
    },
    {
      link_en: "in a person, the same viruses cause disease, and some of them cause it by carrying a stolen gene",
      link_cn: "在人身上，同一批病毒会致病，其中一些致病的方式是带着一个偷来的基因",
      en: "Retroviruses cause human disease, including **AIDS** and several cancers. The cancer mechanism is worth stating precisely: some retroviruses carry an **oncogene**, a gene whose product makes an infected cell grow and divide abnormally. **The virus is not damaging the cell's growth control from outside — it is delivering a copy of a growth-control gene into the chromosome and leaving it switched on.**",
      cn: "逆转录病毒会引起人的疾病，包括**艾滋病（AIDS）**和若干种癌症。致癌的机制值得说准确：有些逆转录病毒带着一个**癌基因（oncogene）**，即其产物会让被感染的细胞异常地生长和分裂的基因。**病毒不是从外面破坏细胞的生长调控 —— 它是把一份生长调控基因的拷贝送进染色体，并让它一直开着。**",
      src: "A p.989"
    },
    {
      link_en: "and because one enzyme is doing all of this, it is the obvious drug target",
      link_cn: "而既然这一切都由一个酶完成，它就是最明显的药物靶点",
      en: "HIV, the retrovirus that causes AIDS, was attacked at exactly that point. **Azidothymidine — AZT — was synthesised in 1964 by Jerome Horwitz as a candidate anticancer drug and failed at that job**, and it sat unused until 1985, when it was found to work against AIDS by blocking HIV's reverse transcriptase. **A compound already made, already characterised and already discarded became the first treatment for a new disease**, which is why failed compounds are kept rather than thrown away.",
      cn: "引起艾滋病的逆转录病毒 HIV，正是在这一点上被攻击的。**叠氮胸苷（azidothymidine，AZT）由 Jerome Horwitz 于 1964 年合成，本来是候选抗癌药，在那个用途上失败了**，此后一直闲置，直到 1985 年被发现能通过阻断 HIV 的逆转录酶来治疗艾滋病。**一个早已合成、早已表征、早已被弃用的化合物，成了一种新疾病的第一个疗法** —— 失败的化合物之所以要留着而不是扔掉，原因就在这里。",
      src: "A p.991"
    },
    {
      link_en: "and one number explains why treating that virus has been so hard",
      link_cn: "而有一个数字解释了为什么治这个病毒这么难",
      en: "**Reverse transcriptases have no 3'→5' proofreading exonuclease** — no second active site that removes a wrongly added base from the growing end — and they make **about 1 error in every 20,000 nucleotides added.** The consequence is a very high mutation rate and correspondingly fast evolution: a population of virus in one patient is a swarm of variants, so a drug that works today selects for the variant that resists it, and **new disease-causing strains keep appearing.** The missing proofreading step is not a defect from the virus's point of view; it is where its adaptability comes from.",
      cn: "**逆转录酶没有 3′→5′ 校对外切酶** —— 没有那个能把接错的碱基从生长端去掉的第二活性中心 —— 它们**每接约 20,000 个核苷酸出错一个**。后果是极高的突变率和相应极快的演化：一个病人体内的病毒群体是一大堆变体的混合，所以今天有效的药会筛选出对它耐药的那个变体，而且**新的致病株不断出现。**从病毒的角度看，缺少校对不是缺陷，它正是适应能力的来源。",
      src: "A p.990"
    },
    {
      link_en: "the same chemistry is at work inside your own cells, in three places. First, sequences that move",
      link_cn: "同样的化学也在你自己的细胞里运作，共三处。第一处是会移动的序列",
      en: "A **transposon** is a segment of DNA that can move from one place in a genome to another. **Many eukaryotic transposons are related to retroviruses and move the same way: the segment is transcribed into RNA, that RNA is copied back into DNA by a reverse transcriptase, and the DNA copy inserts somewhere else.** The original stays where it was, so each move leaves one more copy behind — which is why sequences of this kind have accumulated to occupy a large fraction of a mammalian genome.",
      cn: "**转座子（transposon）**是基因组里能从一个位置搬到另一个位置的一段 DNA。**许多真核转座子与逆转录病毒同源，搬家方式也一样：这段序列先被转录成 RNA，这条 RNA 再被逆转录酶抄回 DNA，DNA 拷贝插进别处。**原件留在原地，所以每搬一次就多留下一份拷贝 —— 这类序列之所以在哺乳动物基因组里累积到占很大比例，原因就在这里。",
      src: "A p.992"
    },
    {
      link_en: "second, an intron that puts itself back into a gene it has already left",
      link_cn: "第二处：一个内含子把自己塞回一个它已经离开过的基因",
      en: "A **group II intron** — one of the introns that splices itself out of a transcript with no protein enzyme — can also run the reaction in reverse: **the excised intron RNA inserts itself into the DNA of a gene at the site it came from, and a reverse transcriptase encoded by the intron itself then copies it back into DNA there.** The movement is called **retrohoming**, homing because the intron goes to the one specific site it belongs at. **An intron is therefore not only a passenger in a transcript; it can be a mobile element that maintains its own presence in a genome.**",
      cn: "**II 型内含子** —— 就是那类不靠蛋白酶、自己把自己从转录本里剪出去的内含子 —— 也能把反应倒过来跑：**被切出来的内含子 RNA 把自己插进某个基因的 DNA 里、插在它原本所在的那个位点上，然后由内含子自己编码的一个逆转录酶在那里把它抄回成 DNA。**这个移动叫**归巢式逆转座（retrohoming）**，「归巢」是因为内含子回到的正是它归属的那一个特定位点。**所以内含子不只是转录本上的搭车客；它可以是一个靠自己维持在基因组中存在的可移动元件。**",
      src: "A p.992",
      see: [{ id: "L-8-2-1", en: "group I and group II introns, and self-splicing", cn: "I 型与 II 型内含子，以及自剪接" }]
    },
    {
      link_en: "third, the enzyme that finishes the ends of your chromosomes, which no ordinary polymerase can finish",
      link_cn: "第三处：把你染色体末端收尾的那个酶 —— 普通聚合酶收不了这个尾",
      en: "A linear chromosome has a problem at each end: an ordinary DNA polymerase cannot fill in the very last stretch, so each round of copying would leave the chromosome slightly shorter. **Telomerase**, discovered by Carol Greider and Elizabeth Blackburn, solves it by adding a repeated sequence — a **telomere** — onto each end. **Telomerase is a specialised reverse transcriptase, and the RNA template it reads is carried inside the enzyme itself.** So a piece of chromosome is built from a template that is not part of any chromosome: the enzyme brings its own instructions with it.",
      cn: "线性染色体的两端各有一个问题：普通 DNA 聚合酶补不上最末那一小段，于是每复制一轮，染色体就会短一点。**端粒酶（telomerase）**由 Carol Greider 与 Elizabeth Blackburn 发现，它的解法是在每一端加上一段重复序列 —— 也就是**端粒（telomere）**。**端粒酶是一种特化的逆转录酶，而它读的那份 RNA 模板就装在这个酶自己身体里。**于是有一段染色体是照着「不属于任何染色体的模板」造出来的：这个酶把说明书随身带着。",
      src: "A p.993",
      see: [
        { id: "L-8-2-1", en: "how a telomere caps itself once it is built", cn: "端粒造好之后是怎么把自己封住的" },
        { id: "L-9-1-1", en: "telomeres and how chromosome ends are studied", cn: "端粒，以及染色体末端怎么被研究" }
      ]
    },
    {
      link_en: "and one last enzyme in this family reads RNA and writes RNA, which is why it has no host counterpart to hide behind",
      link_cn: "这一家族还有最后一个酶，读 RNA 写 RNA —— 正因如此，它在宿主里找不到同类可以躲",
      en: "An **RNA-dependent RNA polymerase**, or **replicase**, copies an RNA template into RNA. The bacteriophage Qβ carries one; so do the eukaryotic RNA viruses, including influenza and the coronaviruses of SARS and COVID-19, and for several of them the viral chromosome doubles as the mRNA from which the viral proteins are made. **Every RNA virus other than the retroviruses has to encode a replicase of its own, because a host cell has no enzyme that copies RNA into RNA.** That is what makes a replicase such a clean drug target: **the reaction it catalyses does not happen anywhere in the uninfected cell, so a compound that blocks it has nothing of yours to damage.**",
      cn: "**RNA 依赖的 RNA 聚合酶（RNA-dependent RNA polymerase）**，又叫**复制酶（replicase）**，以 RNA 为模板抄出 RNA。噬菌体 Qβ 带一个；真核 RNA 病毒也带，包括流感病毒和引起 SARS 与 COVID-19 的冠状病毒，其中有几种的病毒染色体本身同时充当合成病毒蛋白的 mRNA。**除逆转录病毒之外，每一种 RNA 病毒都必须自己编码一个复制酶，因为宿主细胞根本没有把 RNA 抄成 RNA 的酶。**复制酶之所以是极干净的药靶，原因正在这里：**它催化的反应在未感染的细胞里根本不发生，所以阻断它的化合物没有你自己的东西可以伤害。**",
      src: "A p.994"
    }
  ],
  terms: [
    { en: "reverse transcriptase", cn: "逆转录酶",
      def_en: "An RNA-dependent DNA polymerase: it builds DNA on an RNA template, running information from the disposable copy back into the permanent store. First found in retroviruses, which must convert their RNA genome into double-stranded DNA to be inserted into a host chromosome, and which carry the enzyme inside the particle because the host has none.",
      def_cn: "RNA 依赖的 DNA 聚合酶：以 RNA 为模板造 DNA，把信息从一次性的拷贝倒流回永久存储。最早在逆转录病毒里发现 —— 这类病毒必须把 RNA 基因组转换成双链 DNA 才能插进宿主染色体，而且要自带这个酶，因为宿主没有。" },
    { en: "gag, pol, env", cn: "gag、pol、env",
      def_en: "The three genes of a typical retrovirus. gag (group associated antigen) encodes the particle's structural proteins, pol the reverse transcriptase and the virus's other enzymes, env the envelope proteins that let the particle enter a cell. Three genes is the whole genome, which is why each has to do more than one job.",
      def_cn: "典型逆转录病毒的三个基因。gag（group associated antigen）编码颗粒的结构蛋白，pol 编码逆转录酶和病毒的其他酶，env 编码让颗粒进入细胞的包膜蛋白。整个基因组就这三个基因，所以每个都得身兼数职。" },
    { en: "AZT", cn: "AZT（叠氮胸苷）",
      def_en: "Azidothymidine, synthesised by Jerome Horwitz in 1964 as a candidate anticancer drug, which failed at that. In 1985 it was found to act against AIDS by blocking HIV's reverse transcriptase — an already-made, already-discarded compound becoming the first treatment for a new disease.",
      def_cn: "叠氮胸苷，Jerome Horwitz 1964 年合成的候选抗癌药，在那个用途上失败。1985 年被发现能通过阻断 HIV 的逆转录酶治疗艾滋病 —— 一个早已合成、早已被弃用的化合物，成了一种新疾病的第一个疗法。" },
    { en: "retrohoming", cn: "归巢式逆转座",
      def_en: "A group II intron inserting its excised RNA back into the DNA of the gene at the exact site it came from, after which a reverse transcriptase encoded by the intron itself copies it into DNA there. An intron can therefore be a mobile element maintaining its own presence in a genome, not merely a passenger in a transcript.",
      def_cn: "II 型内含子把切出来的 RNA 插回它原本所在基因的那个确切位点，再由内含子自己编码的逆转录酶在那里把它抄成 DNA。所以内含子可以是一个靠自己维持存在的可移动元件，而不只是转录本上的搭车客。" },
    { en: "telomerase", cn: "端粒酶",
      def_en: "The enzyme, found by Carol Greider and Elizabeth Blackburn, that adds the repeated telomere sequence to the end of a linear chromosome, which an ordinary DNA polymerase cannot finish. It is a specialised reverse transcriptase carrying its own RNA template inside itself — so a piece of chromosome is built from a template that is not part of any chromosome.",
      def_cn: "由 Carol Greider 与 Elizabeth Blackburn 发现的酶，负责在线性染色体末端加上重复的端粒序列 —— 那一段普通 DNA 聚合酶补不上。它是一种特化的逆转录酶，把自己的 RNA 模板装在体内 —— 于是有一段染色体是照着「不属于任何染色体的模板」造出来的。" },
    { en: "replicase", cn: "复制酶",
      def_en: "An RNA-dependent RNA polymerase, copying an RNA template into RNA. Carried by bacteriophage Qβ and by eukaryotic RNA viruses including influenza and the SARS and COVID-19 coronaviruses. Every RNA virus except the retroviruses must encode one, because no host enzyme copies RNA into RNA — which is what makes it so clean a drug target.",
      def_cn: "RNA 依赖的 RNA 聚合酶，以 RNA 为模板抄出 RNA。噬菌体 Qβ 带它，真核 RNA 病毒也带，包括流感和引起 SARS 与 COVID-19 的冠状病毒。除逆转录病毒外，每种 RNA 病毒都必须自己编码一个，因为宿主没有任何酶把 RNA 抄成 RNA —— 这正是它作为药靶极其干净的原因。" }
  ]
};

/* ===================================================================== L-26-4-1 */
window.BIOLITE_SPINE["L-26-4-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "hydrogen bond", "substrate", "catalyst", "ribosome",
            "peptide bond", "ester", "amide"],
  nodeTitle_en: "Catalytic RNAs and the RNA world hypothesis",
  nodeTitle_cn: "核酶与 RNA 世界假说",
  title_en: "How you prove an RNA is really an enzyme, and what follows if it is",
  title_cn: "怎样证明一条 RNA 真的是酶，以及如果它是，那意味着什么",
  steps: [
    {
      en: "Several RNAs met earlier do chemistry: **group I and group II introns cut themselves out of a transcript with no protein present, and RNase P trims the 5' end of a tRNA precursor with its protein component removed.** An RNA that accelerates a reaction is called a **ribozyme**. This spine asks a different question about them — **whether calling such an RNA an enzyme is a measurement or a figure of speech.**",
      cn: "前面见过的好几条 RNA 都在做化学：**I 型和 II 型内含子在没有任何蛋白在场的情况下把自己从转录本里切出去，RNase P 在去掉蛋白组分之后照样能削 tRNA 前体的 5′ 端。**能加速反应的 RNA 叫**核酶（ribozyme）**。这条主线要问的是另一个问题 —— **把这样一条 RNA 称为「酶」，究竟是一次测量，还是一种修辞。**",
      src: "A p.995",
      see: [{ id: "L-26-2-1", en: "what a ribozyme is, worked through splicing and RNase P", cn: "核酶是什么 —— 从剪接和 RNase P 讲起" }]
    },
    {
      link_en: "the answer is a list of five properties, each one of which can be tested",
      link_cn: "答案是一张五条属性的清单，每一条都能被检验",
      en: "Ribozymes and protein enzymes share five features, and **each of the five is something you can go and measure rather than assert**: a **folded three-dimensional structure**; **inactivation by denaturation**, meaning the activity is lost when that structure is unfolded; **acceleration of a reaction rate**; **saturable kinetics**, meaning that piling on more substrate stops helping once every catalyst molecule is busy; and **reaction specificity**, meaning it acts on one substrate and not on others that resemble it. **Anything showing all five is an enzyme by the same criteria a protein has to meet.**",
      cn: "核酶与蛋白酶共享五个特征，而**这五条每一条都是可以去测的，而不是靠断言的**：有**折叠好的三维结构**；会被**变性灭活**，即结构一旦被展开活性就没了；能**加速反应速率**；具有**可饱和的动力学**，即当每一个催化剂分子都忙起来之后，再加底物也没用了；以及**反应特异性**，即它只作用于一种底物，而不作用于与之相似的其他底物。**同时具备这五条的东西就是酶 —— 用的是蛋白也必须通过的同一套标准。**",
      src: "A p.1001"
    },
    {
      link_en: "take the second of those five literally: a ribozyme can be denatured exactly as a protein can",
      link_cn: "把第二条按字面理解：核酶可以像蛋白一样被变性",
      en: "**Ribozymes are inactivated by heating above their melting temperature** — the temperature at which a folded structure comes apart — **or by adding a denaturing agent**, a chemical that unfolds it at ordinary temperature. That is the same experiment done on a protein enzyme, with the same outcome. **The activity therefore belongs to the folded shape and not to the sequence as such**, which is what makes an active site an active site.",
      cn: "**把核酶加热到超过它的熔解温度（melting temperature） —— 即折叠结构散开的那个温度 —— 或者加入变性剂**（一种在常温下就能把它展开的化学试剂），它就失活。这与在蛋白酶上做的是同一个实验，结果也相同。**所以活性属于那个折叠出来的形状，而不属于序列本身** —— 一个活性中心之所以是活性中心，靠的正是这一点。",
      src: "A p.996",
      see: [{ id: "L-8-3-1", en: "melting, and what a melting temperature measures", cn: "熔解，以及熔解温度到底量的是什么" }]
    },
    {
      link_en: "and the third property, that a catalyst is not used up, is a number",
      link_cn: "而第三条 ——「催化剂不被消耗」—— 是一个数字",
      en: "A catalyst has to come out of the reaction unchanged and go round again, which is exactly what distinguishes it from a reagent consumed by the reaction. Measured: **each ribozyme molecule processes about 100 substrate molecules per hour and is not altered in the reaction.** **That number is the difference between an RNA that catalyses a reaction and an RNA that merely participates in one** — a self-splicing intron rearranging its own bonds once is doing chemistry to itself, whereas turning over a hundred separate substrates is catalysis in the ordinary sense.",
      cn: "催化剂必须原样从反应里出来、再转下一圈 —— 这正是它与「被反应消耗掉的试剂」的区别。实测数字：**每个核酶分子每小时处理约 100 个底物分子，并且在反应中不发生改变。这个数字正是「催化反应的 RNA」与「只是参与了反应的 RNA」之间的分界** —— 一个自剪接内含子把自己的键重排一次，那是对自己做化学；而周转一百个各自独立的底物，那是通常意义上的催化。",
      src: "A p.997"
    },
    {
      link_en: "so which RNAs have actually been put through this?",
      link_cn: "那么，到底哪些 RNA 真的被这样检验过？",
      en: "Three are the best characterised. **The self-splicing group I introns**, the ones found in a *Tetrahymena* ribosomal RNA transcript. **RNase P**, the enzyme that cuts the 5' end off a tRNA precursor, whose catalytic part is its RNA. And the **hammerhead ribozyme**, a small RNA named for the shape its folded structure takes, which cuts a phosphodiester bond in an RNA strand and is small enough to be studied atom by atom. **A small, self-contained example matters here for the same reason a small enzyme does anywhere: it can be solved completely.**",
      cn: "被表征得最透的有三个。**自剪接的 I 型内含子**，就是在*四膜虫*核糖体 RNA 转录本里发现的那些。**RNase P**，把 tRNA 前体 5′ 端切掉的那个酶，其催化部分是它的 RNA。以及**锤头核酶（hammerhead ribozyme）**，一条因折叠后的形状而得名的小 RNA，它切断一条 RNA 链上的一个磷酸二酯键，而且小到可以一个原子一个原子地研究。**在这里，一个小而自足的例子之所以重要，与任何领域里一个小酶之所以重要是同一个道理：它能被彻底解出来。**",
      src: "A p.997"
    },
    {
      link_en: "and what they do chemically is a very short list, which is itself informative",
      link_cn: "而它们在化学上会做的事是一张很短的清单 —— 这份清单本身就说明问题",
      en: "Almost everything these RNAs do comes down to **two reactions: transesterification**, swapping one ester linkage for another, **and hydrolysis of a phosphodiester bond**, cutting the backbone with water. **A protein enzyme has twenty side chains to work with; an RNA has four bases and a backbone, and its chemical repertoire is correspondingly narrow.** The narrowness is the honest limitation of RNA as a catalyst, and it is why the next steps have to argue rather than simply assert.",
      cn: "这些 RNA 做的事几乎全部归结为**两个反应：酯交换（transesterification）**，即把一个酯键换成另一个酯键；**以及磷酸二酯键的水解**，即用水把骨架切开。**蛋白酶有二十种侧链可用；一条 RNA 只有四种碱基和一条骨架，化学手段相应地很窄。**这份狭窄正是 RNA 作为催化剂诚实的局限，也正因如此，下面几步必须论证，而不能直接断言。",
      src: "A p.1001"
    },
    {
      link_en: "against that narrowness, RNA has one trick available to no protein",
      link_cn: "但相对于这份狭窄，RNA 有一个蛋白完全用不上的花招",
      en: "When the substrate is itself an RNA, **the catalyst can line the substrate up by base-pairing with it** — holding it in exactly the position required, using the same complementarity that holds a double helix together. **No protein enzyme has that option**, because a protein cannot base-pair with anything; a protein has to build a binding pocket out of side chains, one substrate at a time. **So a ribozyme acting on RNA can achieve its positioning almost for free, which is why the reactions RNA catalyses in cells are overwhelmingly reactions on RNA.**",
      cn: "当底物本身就是 RNA 时，**催化剂可以靠与底物碱基配对把它摆正** —— 用维系双螺旋的那同一种互补性，把底物固定在所需的确切位置上。**任何蛋白酶都没有这个选项**，因为蛋白没法与任何东西碱基配对；蛋白必须用侧链一个底物一个底物地搭出结合口袋。**所以作用于 RNA 的核酶，几乎是免费地解决了定位问题 —— 这正是细胞里由 RNA 催化的反应绝大多数都是针对 RNA 的反应的原因。**",
      src: "A p.997"
    },
    {
      link_en: "and these are not relics kept in a drawer — three of them are running in you right now",
      link_cn: "而这些不是收在抽屉里的遗物 —— 其中三个此刻正在你体内运转",
      en: "RNA-based catalysis is at work in living cells today, in three places named earlier in this arc: **tRNA processing**, where RNase P cuts every tRNA precursor to length; **nuclear pre-mRNA splicing**, where the spliceosome's catalytic centre is RNA; and **translation** — the making of protein from a message — **where an RNA component of the ribosome catalyses the formation of every peptide bond in the cell.** That last one is the heaviest: **the single most universal reaction in biology is catalysed by RNA, not by protein.**",
      cn: "以 RNA 为基础的催化今天就在活细胞里运转，共三处，都在这条主线前面出现过：**tRNA 加工**，RNase P 把每一条 tRNA 前体切到正确长度；**核内前体 mRNA 的剪接**，剪接体的催化中心是 RNA；以及**翻译** —— 即照着一条信息造出蛋白 —— **在那里，核糖体的一个 RNA 组分催化了细胞里每一个肽键的形成。**最后这一条分量最重：**生物学里最普遍的那个反应，是由 RNA 催化的，不是蛋白。**",
      src: "A p.998",
      see: [{ id: "L-27-2-1", en: "the ribosome, and the evidence that its active site is RNA", cn: "核糖体，以及它的活性中心是 RNA 的证据" }]
    },
    {
      link_en: "and from all of that the section draws one large conclusion",
      link_cn: "由以上这一切，本节引出一个很大的结论",
      en: "Life needs something that stores information and something that catalyses reactions. Today DNA does the first and protein does the second, and **each of those two depends on the other, which makes the origin of either hard to account for.** RNA does both — it carries a sequence and it can catalyse — so the proposal is an **RNA world**: a stage in the evolution of life on Earth in which **RNA was the central information carrier and the central catalyst, before proteins and DNA took over those two jobs.** **The existence of ribozymes is the strongest single piece of evidence for it**, because it shows the double role is chemically possible rather than merely convenient to imagine.",
      cn: "生命需要一样东西来存储信息，还需要一样东西来催化反应。今天前者由 DNA 承担、后者由蛋白承担，而**这两样各自都依赖对方，于是无论从哪一样开始都很难说清它是怎么来的。**RNA 两样都能干 —— 它携带序列，也能催化 —— 于是有了 **RNA 世界（RNA world）**这个设想：地球生命演化中的一个阶段，**RNA 既是核心的信息载体，也是核心的催化剂，此后蛋白和 DNA 才接管了这两项工作。核酶的存在是支持它的最强的一项证据**，因为它表明这种「一身二任」在化学上是可能的，而不只是想起来方便。",
      src: "A p.999",
      openQuestion_en: "How life on Earth actually began is not settled, and an RNA world is a hypothesis that ribozymes make plausible — not a demonstrated history.",
      openQuestion_cn: "地球生命究竟是怎么开始的，并没有定论；RNA 世界是一个被核酶变得可信的假说，而不是一段已被证明的历史。"
    },
    {
      link_en: "and the hypothesis can be pushed on experimentally, by evolving RNAs in a tube",
      link_cn: "而这个假说可以在实验上被推进 —— 办法是在试管里演化 RNA",
      en: "**SELEX** is the method, and the name says what it does: systematic evolution of ligands by exponential enrichment. Start with a pool of RNA molecules of random sequence, select the few that show some wanted property, amplify those, and repeat — **evolution run in a tube, at a speed the laboratory chooses.** It has produced **aptamers**, RNAs that bind a chosen target such as an amino acid, a nucleotide or a dye, and it has produced **new ribozymes that catalyse ester and amide bond formation** among other reactions. **So RNA can be made to do chemistry it is not observed doing in any cell**, which strengthens the argument in the previous step by widening what RNA is shown capable of, without by itself demonstrating that any of it ever happened.",
      cn: "**SELEX** 就是这个方法，名字本身说明了它做什么：systematic evolution of ligands by exponential enrichment（指数富集的配体系统演化）。先做一池序列随机的 RNA 分子，挑出其中少数表现出所需性质的，把它们扩增，再重复 —— **就是在试管里跑演化，速度由实验室自己定。**它做出了**适配体（aptamer）**，即能结合选定靶标（比如某个氨基酸、某个核苷酸、某种染料）的 RNA；也做出了**能催化酯键和酰胺键形成**等反应的**新核酶**。**所以 RNA 可以被逼着去做它在任何细胞里都没被观察到做过的化学** —— 这通过拓宽「RNA 被证明能做什么」而加强了上一步的论证，但它本身并不证明这些事情曾经发生过。",
      src: "A p.1000"
    }
  ],
  terms: [
    { en: "the five criteria", cn: "五条判据",
      def_en: "What a ribozyme shares with a protein enzyme, each one measurable: a folded three-dimensional structure; loss of activity on denaturation; acceleration of a reaction rate; saturable kinetics; and reaction specificity. Meeting all five is what makes calling an RNA an enzyme a measurement rather than a metaphor.",
      def_cn: "核酶与蛋白酶共有、且每一条都可测的五点：折叠好的三维结构；变性即失活；能加速反应速率；动力学可饱和；反应具特异性。五条全部满足，才使「把 RNA 叫作酶」成为一次测量而不是一个比喻。" },
    { en: "hammerhead ribozyme", cn: "锤头核酶",
      def_en: "A small ribozyme named for the shape of its folded structure, which cuts a phosphodiester bond in an RNA strand. Small enough to be solved completely, which is why it is one of the three best-characterised ribozymes alongside the group I self-splicing introns and RNase P.",
      def_cn: "一个因折叠后形状而得名的小核酶，功能是切断 RNA 链上的一个磷酸二酯键。它小到可以被彻底解出结构，因此与 I 型自剪接内含子、RNase P 并列为表征得最透的三个核酶。" },
    { en: "base pairing as a positioning device", cn: "用碱基配对来定位",
      def_en: "When a ribozyme's substrate is itself RNA, the catalyst can hold it in place by pairing with it — the same complementarity that holds a double helix together. No protein enzyme has this option, which is why RNA catalysis in cells acts overwhelmingly on RNA. It partly offsets RNA's narrow chemical repertoire of transesterification and phosphodiester hydrolysis.",
      def_cn: "当核酶的底物本身就是 RNA 时，催化剂可以靠与它配对把它固定住 —— 用的是维系双螺旋的同一种互补性。蛋白酶没有这个选项，这也是细胞里的 RNA 催化绝大多数都作用于 RNA 的原因。它在一定程度上弥补了 RNA 只会酯交换和磷酸二酯键水解这一狭窄的化学手段。" },
    { en: "RNA world", cn: "RNA 世界",
      def_en: "The proposal that RNA was the central information carrier and the central catalyst in an early stage of life on Earth, before proteins and DNA took over those two jobs. Ribozymes are the strongest evidence for it, since they show one molecule can do both. It is a hypothesis about the origin of life, not a demonstrated history.",
      def_cn: "这样一个设想：在地球生命的早期阶段，RNA 既是核心的信息载体也是核心的催化剂，此后蛋白和 DNA 才接管这两项工作。核酶是支持它的最强证据，因为核酶表明同一种分子确实可以身兼二任。它是关于生命起源的假说，不是已被证明的历史。" },
    { en: "SELEX and aptamers", cn: "SELEX 与适配体",
      def_en: "Systematic evolution of ligands by exponential enrichment: start from a pool of random-sequence RNA, select the molecules showing a wanted property, amplify them, repeat. Evolution run in a tube. It has yielded aptamers — RNAs binding a chosen amino acid, nucleotide or dye — and new ribozymes catalysing ester and amide bond formation.",
      def_cn: "指数富集的配体系统演化：从一池随机序列 RNA 出发，挑出表现出所需性质的分子，扩增，重复。就是在试管里跑演化。它产出了适配体（能结合选定的氨基酸、核苷酸或染料的 RNA），也产出了能催化酯键与酰胺键形成的新核酶。" }
  ]
};

/* ===================================================================== L-27-1-1 */
window.BIOLITE_SPINE["L-27-1-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "mRNA", "tRNA", "ribosome", "hydrogen bond", "purine",
            "pyrimidine", "mitochondria", "liver", "intestine", "yeast",
            "phenylalanine", "proline", "lysine", "threonine", "histidine",
            "methionine", "tryptophan", "isoleucine", "leucine", "serine",
            "arginine", "valine", "glutamine", "adenosine", "cytidine", "uridine",
            "inosine", "hypoxanthine", "epilepsy", "depression"],
  nodeTitle_en: "The genetic code",
  nodeTitle_cn: "遗传密码",
  title_en: "How the code was actually cracked, why 32 tRNAs are enough, and the four ways real cells read it differently from the table",
  title_cn: "密码到底是怎么被破译的，为什么 32 个 tRNA 就够，以及真实细胞在哪四个地方读得和表格不一样",
  steps: [
    {
      en: "Four kinds of base have to specify twenty kinds of amino acid. Taken one at a time they give 4 combinations, in pairs 16 — both too few. **In threes they give 4³ = 64, which is enough, so at least three nucleotides are needed per amino acid.** A group of three that specifies one amino acid is a **codon**.",
      cn: "四种碱基必须指定二十种氨基酸。一个一个地取，只有 4 种组合；两个两个地取，16 种 —— 都不够。**三个三个地取，得到 4³ = 64 种，够了，所以每个氨基酸至少需要三个核苷酸。**指定一个氨基酸的这样一组三个碱基，叫一个**密码子（codon）**。",
      src: "A p.1006"
    },
    {
      link_en: "and three properties of how those triplets are read have to be fixed before anything else makes sense",
      link_cn: "而在别的都说得通之前，必须先把「这些三联体怎么读」的三条性质定下来",
      en: "**First, the reading is nonoverlapping**: no nucleotide belongs to two codons at once, so neighbouring codons put no constraint on each other and far more amino acid sequences are possible than an overlapping scheme would allow. **Second, there is no punctuation** — nothing sits between one codon and the next, and a message is simply a run of contiguous triplets. **Third, and following from the first two, a message has a reading frame**: one particular codon is the first, and every third nucleotide after it starts a new codon. Since a sequence can be cut into triplets starting at its first, second or third base, **any single-stranded DNA or RNA sequence has three possible reading frames, and usually only one of them encodes a protein.**",
      cn: "**第一，读取是不重叠的（nonoverlapping）**：没有任何一个核苷酸同时属于两个密码子，所以相邻密码子彼此不构成约束，可能的氨基酸序列因此比重叠方案下多得多。**第二，没有标点** —— 一个密码子和下一个之间什么都不放，一条信息就是一串首尾相接的三联体。**第三，由前两条推出，一条信息有阅读框（reading frame）**：某一个特定的密码子是第一个，此后每隔三个核苷酸开始一个新密码子。由于一条序列可以从第 1、第 2 或第 3 个碱基起切成三联体，**任何单链 DNA 或 RNA 序列都有三个可能的阅读框，而通常只有其中一个编码蛋白。**",
      src: "A p.1007"
    },
    {
      link_en: "and the triplet was proved to be a triplet before a single codon was known, by breaking the frame",
      link_cn: "而「三联体」这件事，是在任何一个密码子被认出之前、靠打断阅读框证明的",
      en: "Add or remove **one** base pair in a gene and every amino acid after that point changes, because the frame has shifted and each subsequent triplet is read one letter off. Add or remove **three**, and the remaining triplets are intact — one residue is gained or lost and the rest of the protein is normal. **A group size of three is the only one that fits both results**, which is how the size of a codon was settled genetically. Combining an insertion with a deletion nearby damages the amino acids between them and restores the correct sequence downstream, which is the same argument run once more.",
      cn: "在一个基因里增加或删除**一个**碱基对，那一点之后的每一个氨基酸都会变，因为阅读框移位了，之后的每个三联体都错开一个字母。增加或删除**三个**，剩下的三联体完好无损 —— 多一个或少一个残基，蛋白的其余部分正常。**只有「三个一组」能同时符合这两个结果**，密码子的大小就是这样从遗传学上定下来的。把一个插入和附近的一个缺失合起来，会破坏两者之间的氨基酸，而下游序列恢复正常 —— 这是同一个论证再跑一遍。",
      src: "A p.1007"
    },
    {
      link_en: "so much for the shape of the code. Now the meanings — attacked three different ways, none sufficient alone",
      link_cn: "密码的形状说完了。接下来是含义 —— 从三条路进攻，每一条单独都不够",
      recall_en: "polyguanylate fails here for the reason given in the chapter 8 spine: four G-rich strands pair into a tetraplex",
      recall_cn: "聚鸟苷酸在这里失败的原因，第 8 章那条主线讲过：四条富含 G 的链会配成四链体",
      en: "**Strategy one, 1961: synthetic homopolymers.** Nirenberg and Matthaei incubated **poly(U)** — an RNA of nothing but uridylate — with an E. coli extract, GTP, ATP, and the twenty amino acids split across **twenty tubes, each holding a different radioactive one**. Radioactive polypeptide — a chain of amino acids joined end to end — appeared in exactly one tube: the phenylalanine tube. **UUU encodes Phe.** Poly(C) then gave polyproline and poly(A) gave polylysine. Polyguanylate gave nothing at all, because a guanine-rich strand folds four strands together into a **tetraplex** that a ribosome cannot bind.",
      cn: "**第一条路，1961 年：合成的同聚物。**Nirenberg 与 Matthaei 把 **poly(U)**（一条只由尿苷酸构成的 RNA）与大肠杆菌抽提物、GTP、ATP，以及分装在**二十支试管里、每管放一种带放射性的氨基酸**的那二十种氨基酸一起温育。放射性多肽只在一支试管里出现 —— 苯丙氨酸那支。**UUU 编码 Phe。**随后 poly(C) 给出聚脯氨酸，poly(A) 给出聚赖氨酸。聚鸟苷酸什么也没给出，因为富含鸟嘌呤的链会把四条链折在一起形成**四链体（tetraplex）**，核糖体结合不上去。",
      src: "A p.1007",
      see: [{ id: "L-8-2-1", en: "the G-tetraplex, and what else it is used for", cn: "G-四链体，以及它还被用来做什么" }]
    },
    {
      link_en: "where did those defined polymers come from? From an enzyme that needs no template — and that is also why they could only go so far",
      link_cn: "这些成分确定的聚合物是哪来的？来自一个不需要模板的酶 —— 而这也正是它们只能走到这一步的原因",
      en: "**Polynucleotide phosphorylase**, discovered by Severo Ochoa, **polymerises ribonucleoside diphosphates into RNA with no template at all**, and the base composition of what comes out simply mirrors the ratio fed in: five parts ADP to one part CDP gives a polymer about five-sixths adenylate, with the bases in random order. Feeding known mixtures and comparing expected with observed amino acid incorporation therefore assigned a **base composition** to most amino acids. **What it could not give was the order of the three bases**, which is exactly the information a codon consists of, so a second method was needed.",
      cn: "**多核苷酸磷酸化酶（polynucleotide phosphorylase）**由 Severo Ochoa 发现，它**完全不用模板就把核糖核苷二磷酸聚合成 RNA**，而产物的碱基组成只是简单地反映投料比例：五份 ADP 配一份 CDP，得到的聚合物约六分之五是腺苷酸，碱基顺序随机。于是投喂已知配比、再比较预期与实测的氨基酸掺入频率，就给多数氨基酸定出了**碱基组成**。**它给不出的是那三个碱基的顺序** —— 而顺序恰恰就是一个密码子的全部内容，所以还需要第二种方法。",
      src: "A p.1007"
    },
    {
      link_en: "second method: make the ribosome itself report which tRNA a triplet calls for",
      link_cn: "第二种方法：让核糖体自己报出某个三联体召来的是哪个 tRNA",
      en: "**Strategy two, 1964: the trinucleotide binding assay.** Nirenberg and Leder found that an isolated ribosome binds one specific **aminoacyl-tRNA** — a tRNA already loaded with its amino acid — when the matching messenger is present, and that **a messenger only three nucleotides long is enough**. Poly(U) plus Phe-tRNA binds; poly(U) plus any other aminoacyl-tRNA does not. Running every triplet against every charged tRNA **assigned 54 of the 64**. It stopped there because for some triplets nothing bound, and for others more than one thing bound.",
      cn: "**第二条路，1964 年：三核苷酸结合试验。**Nirenberg 与 Leder 发现，只要有相应的信使在场，分离出来的核糖体就会结合某一种特定的**氨酰-tRNA（aminoacyl-tRNA）**（即已经装上自己氨基酸的 tRNA），而且**信使只要三个核苷酸长就够了**。poly(U) 加 Phe-tRNA 会结合；poly(U) 加其他任何氨酰-tRNA 都不结合。把每个三联体对每一种带电荷的 tRNA 跑一遍，**认出了 64 个中的 54 个**。它停在这里，是因为有些三联体什么也不结合，另一些则结合了不止一种。",
      src: "A p.1008"
    },
    {
      link_en: "third method: build an RNA whose sequence, not just its composition, is known",
      link_cn: "第三种方法：造一条不只组成已知、连顺序都已知的 RNA",
      en: "**Strategy three: Khorana's defined repeating copolymers.** He developed chemistry to synthesise RNA with a repeating sequence of two to four bases. **(AC)ₙ — ACACAC… — read in triplets is nothing but ACA and CAC alternating**, and it produced equal amounts of threonine and histidine. The composition data already said a histidine codon has one A and two C. **Only CAC fits that, so CAC is His and ACA is Thr.** Combining the three strategies assigned **61 codons** to amino acids; the remaining three were identified as termination signals, and every meaning was settled by **1966**. One honest footnote: these experiments should not have worked at all without initiation codons, which nobody yet knew about — the conditions used happened to relax the requirement.",
      cn: "**第三条路：Khorana 的确定重复共聚物。**他发展了合成「重复单元为二到四个碱基」的 RNA 的化学。**(AC)ₙ —— ACACAC… —— 按三联体读，无非就是 ACA 和 CAC 交替**，它产出等量的苏氨酸和组氨酸。组成数据早已表明，组氨酸密码子含一个 A 和两个 C。**只有 CAC 符合，所以 CAC 是 His，ACA 是 Thr。**三条路合起来，**61 个密码子**被指派给氨基酸；剩下三个被认定为终止信号，全部含义在 **1966 年**尘埃落定。一个诚实的脚注：在不知道起始密码子存在的情况下，这些实验本来根本不该成功 —— 当时所用的条件恰好放松了对起始的要求。",
      src: "A p.1008"
    },
    {
      link_en: "and three of the 64 mean stop, which turns the code into a way of finding genes in raw sequence",
      link_cn: "64 个里有 3 个的意思是「停」—— 这把密码变成了在原始序列里找基因的办法",
      en: "**AUG is the commonest signal to begin a polypeptide**, and it also means methionine when it occurs inside one. **UAA, UAG and UGA are termination codons**, also called stop or nonsense codons, and they specify no amino acid. Now the statistic that follows: three of 64 are stops, so **in random sequence about 1 codon in every 20 is a stop.** A long run without one is therefore surprising, and that is the definition: **a stretch of 50 or more consecutive codons containing no termination codon is an open reading frame, an ORF**, and long ORFs usually are protein-coding genes. Two calibrations. A protein of molecular weight 60,000 needs an ORF of **500 or more** codons, ten times the threshold. And because a sequence has three frames, and its complementary strand three more, **an ORF search has to examine all six.**",
      cn: "**AUG 是启动一条多肽最常见的信号**，而它出现在多肽内部时表示甲硫氨酸。**UAA、UAG、UGA 是终止密码子**，也叫停止密码子或无义密码子，它们不指定任何氨基酸。随之而来的是这个统计事实：64 个里有 3 个是终止，所以**在随机序列里平均每 20 个密码子就有 1 个是终止。**因此一长串里一个终止都没有，是件出乎意料的事 —— 而定义正是这样来的：**连续 50 个或更多密码子里没有终止密码子的一段，叫开放阅读框（open reading frame，ORF）**，长的 ORF 通常就是编码蛋白的基因。两个校准。分子量 60,000 的蛋白需要 **500 个以上**密码子的 ORF，是阈值的十倍。而且由于一条序列有三个框、它的互补链还有三个，**搜 ORF 必须把六个框都查一遍。**",
      src: "A p.1009"
    },
    {
      link_en: "the 61 sense codons are shared out very unevenly, and the word for that is easy to misread",
      link_cn: "61 个有义密码子分配得极不均匀，而形容这件事的那个词很容易被误读",
      en: "The code is **degenerate**: an amino acid may be specified by more than one codon. **The sharing is not uniform** — methionine and tryptophan have **one** codon each; nine amino acids have **two**; isoleucine has **three**; five amino acids have **four**; and arginine, leucine and serine have **six**. Now the guard-rail, because this is the standard misreading: **degenerate does not mean ambiguous. The mapping runs many-to-one and never one-to-many: each codon specifies exactly one amino acid.** That is what lets a message be read unambiguously while the code is redundant. One more pattern from the table itself: **the third base matters least, and codons for the same amino acid mostly differ only there** — which is the observation the next step explains.",
      cn: "这套密码是**简并的（degenerate）**：一个氨基酸可以由不止一个密码子指定。**分配并不均匀** —— 甲硫氨酸和色氨酸各只有**一个**密码子；九种氨基酸有**两个**；异亮氨酸有**三个**；五种有**四个**；精氨酸、亮氨酸、丝氨酸各有**六个**。接下来是护栏，因为这里是标准误读点：**简并不等于歧义。这个映射是多对一，绝不是一对多：每一个密码子只指定一个氨基酸。**正因如此，密码可以冗余而信息仍然被无歧义地读出。表格本身还有一个规律：**第三个碱基最不重要，编码同一氨基酸的密码子大多只在那里不同** —— 这正是下一步要解释的现象。",
      src: "A p.1009"
    },
    {
      link_en: "if a tRNA had to match all three bases exactly, a cell would need 61 of them. It does not",
      link_cn: "如果一个 tRNA 必须三个碱基全部严格配对，细胞就需要 61 个。它不需要",
      en: "A tRNA pairs with a codon through a three-base sequence of its own — the **anticodon** — and the two lie antiparallel, so **the first base of the codon pairs with the third base of the anticodon** and the third codon base pairs with the first anticodon base. **That third pairing is loose, which Crick named wobble.** The chemistry behind the extreme case: some anticodons carry **inosinate**, a nucleotide whose base is hypoxanthine, and **inosinate can hydrogen-bond with A, U or C**, though weakly. A yeast arginine tRNA with the anticodon (5')ICG accordingly reads CGA, CGU and CGC. Crick's rules follow: the first two codon bases always form strong Watson-Crick pairs and carry most of the specificity, while **the first base of the anticodon fixes how many codons that tRNA can read — C or A reads one, U or G reads two, inosinate reads three, the maximum for any tRNA. A minimum of 32 tRNAs therefore covers all 61 sense codons**, 31 plus one for starting. Real cells run above that: E. coli has 47 different tRNA genes, 86 copies in all.",
      cn: "一个 tRNA 靠自己的一段三碱基序列 —— **反密码子（anticodon）** —— 与密码子配对，两者反向平行，所以**密码子的第一个碱基与反密码子的第三个碱基配对**，密码子的第三个碱基与反密码子的第一个碱基配对。**第三对配得松，Crick 把这叫作摆动（wobble）。**极端情形背后的化学是：某些反密码子含**次黄嘌呤核苷酸（inosinate）**，其碱基是次黄嘌呤，而**次黄嘌呤核苷酸能与 A、U、C 三者形成氢键**，尽管很弱。因此酵母里反密码子为 (5′)ICG 的那个精氨酸 tRNA 能读 CGA、CGU、CGC。Crick 的规则随之而来：密码子头两个碱基永远形成强 Watson-Crick 配对，承担大部分特异性；而**反密码子的第一个碱基决定这个 tRNA 能读几个密码子 —— C 或 A 读一个，U 或 G 读两个，次黄嘌呤核苷酸读三个，这是任何 tRNA 的上限。于是最少 32 个 tRNA 就能覆盖全部 61 个有义密码子**：31 个加一个用于起始。真实细胞比这多：大肠杆菌有 47 个不同的 tRNA 基因，一共 86 个拷贝。",
      src: "A p.1012"
    },
    {
      link_en: "and the looseness is not sloppiness — it is what makes translation fast enough",
      link_cn: "而这份「松」不是马虎 —— 正是它让翻译快得起来",
      en: "A tRNA has to leave its codon as soon as its amino acid has been handed over, and how fast it leaves depends on how tightly it is held. **If all three bases paired strongly, tRNAs would dissociate too slowly and that would cap the rate of protein synthesis.** So the loose third pair is doing a job: **codon-anticodon pairing is a deliberate balance between accuracy and speed**, and degeneracy is how throughput is bought.",
      cn: "一个 tRNA 一旦把氨基酸交出去就必须离开它的密码子，而它离开得多快，取决于它被抓得多紧。**如果三个碱基都配得很牢，tRNA 解离得太慢，蛋白合成的速率就会被卡住。**所以松的那一对是在干活：**密码子与反密码子的配对是准确性与速度之间一个刻意的平衡**，而简并正是买来通量的办法。",
      src: "A p.1012"
    },
    {
      link_en: "and the same looseness shows up again as a measurable resistance to mutation",
      link_cn: "同样这份「松」，还以另一种面貌出现：可测量的抗突变能力",
      recall_en: "the third-base looseness of the wobble step, seen now from the mutation side",
      recall_cn: "摆动那一步说的第三碱基之松，现在从突变这一侧再看一遍",
      en: "The code is **not an arbitrary assignment**; it is measurably resistant to the commonest kind of mutation. Three pieces of evidence. **At the third base, a single substitution changes the encoded amino acid only about 25% of the time**, so most such changes are **silent mutations** — the nucleotide differs and the amino acid does not. **The commonest missense mutation is a transition**, a purine replaced by a purine or a pyrimidine by a pyrimidine, and all three codon positions show some resistance to transitions. **At the first base a change usually does alter the amino acid, but usually to a chemically similar one**: the valine codon GUU becomes AUU, which is isoleucine, or CUU, which is leucine — all three hydrophobic, so the effect on a folded protein is often small. Then the decisive test: **alternative codes generated at random are almost always less mutation-resistant than the real one**, which says the real code was streamlined by selection before the last common ancestor of all life.",
      cn: "这套密码**不是随手指派的**；它对最常见的那类突变有可测量的抵抗力。三条证据。**在第三个碱基上，单碱基替换只有约 25% 的情况会改变编码的氨基酸**，所以这类改变大多是**沉默突变（silent mutation）** —— 核苷酸变了，氨基酸没变。**最常见的错义突变是转换（transition）**，即嘌呤换嘌呤、嘧啶换嘧啶，而三个密码子位置对转换都表现出一定的抵抗力。**在第一个碱基上，改变通常确实会换掉氨基酸，但换成的往往是化学性质相近的一个**：缬氨酸密码子 GUU 变成 AUU 就是异亮氨酸，变成 CUU 就是亮氨酸 —— 三者都疏水，所以对折叠好的蛋白影响常常很小。然后是决定性的检验：**随机生成的替代密码，几乎总是比真实的这套更不抗突变** —— 这说明真实的密码在所有生命的最后共同祖先出现之前，就已经被选择精简过。",
      src: "A p.1013"
    },
    {
      link_en: "so the table is nearly universal. Where it does vary, the mechanism of variation says why it can only vary a little",
      link_cn: "所以这张表几乎是通用的。而它变化的机制，恰好说明了它为什么只能小变",
      en: "**The code is defined by two things, and neither of them is the mRNA**: the **anticodons on tRNAs**, which decide where in a polypeptide a given amino acid is placed, and the specificity of the **aminoacyl-tRNA synthetases**, the enzymes that decide which amino acid goes onto which tRNA. **To change the code you must therefore change a tRNA gene, usually its anticodon** — and since almost any sudden change would be catastrophic, changes survive only where few proteins are affected, meaning small genomes, and especially at the three termination codons, which do not occur inside genes. That is precisely what is observed. **Most known variants are in mitochondrial DNA**, which encodes only 10 to 20 proteins with its own tRNAs; vertebrate mitochondrial DNA encodes 13 proteins, 2 rRNAs and just **22 tRNAs**, below the minimum of 32, using looser wobble rules still. **The commonest single variation is UGA read as tryptophan instead of stop; the second is AUA read as methionine instead of isoleucine.** Outside mitochondria: the one known bacterial case is UGA for Trp again, in *Mycoplasma capricolum*; some ciliated protists read UAA and UAG as glutamine; and *Candida albicans* reads CUG as serine rather than leucine, a swap dated to 150–170 million years ago and survivable because CUG is rarely used for Leu in its relatives. **No completely different code has ever been found**, so the variants argue for a single origin rather than against it.",
      cn: "**这套密码由两样东西定义，而两样都不是 mRNA**：**tRNA 上的反密码子**，它决定某个氨基酸被放在多肽的哪个位置；以及**氨酰-tRNA 合成酶（aminoacyl-tRNA synthetase）**的特异性 —— 这类酶决定哪个氨基酸被装到哪条 tRNA 上。**所以要改动密码，就必须改动一个 tRNA 基因，通常是它的反密码子** —— 而由于几乎任何突然的改动都是灾难性的，改动只能在「受影响的蛋白很少」的地方存活下来，也就是小基因组，尤其是在三个终止密码子上，因为它们不出现在基因内部。观察到的正是如此。**已知的变体大多在线粒体 DNA 里**，那里只编码 10 到 20 个蛋白，且自带 tRNA；脊椎动物线粒体 DNA 编码 13 个蛋白、2 个 rRNA，以及仅仅 **22 个 tRNA**，低于 32 的下限 —— 靠的是更松的摆动规则。**最常见的单个变体是 UGA 被读成色氨酸而不是终止；第二常见的是 AUA 被读成甲硫氨酸而不是异亮氨酸。**线粒体之外：已知唯一的细菌案例还是 UGA 读作 Trp，出现在*丝状支原体（Mycoplasma capricolum）*；一些纤毛虫把 UAA 和 UAG 读作谷氨酰胺；*白色念珠菌（Candida albicans）*把 CUG 读作丝氨酸而非亮氨酸，这次改写被定年在 1.5 亿到 1.7 亿年前，之所以能挺过来，是因为在它的近亲里 CUG 本来就很少用于 Leu。**从来没有发现过一套完全不同的密码**，所以这些变体是支持而不是反对「单一起源」。",
      src: "A p.1010"
    },
    {
      link_en: "first of two ways a real cell departs from the table: the ribosome is made to change frame on purpose",
      link_cn: "真实细胞偏离表格的两条路，第一条：让核糖体故意换框",
      recall_en: "the reading frame from the third step of this spine, shifted deliberately rather than by a mutation",
      recall_cn: "本主线第三步说的阅读框，这次是被故意移位，而不是被突变打乱",
      en: "A few genes are built so that the ribosome **changes reading frame at a defined point**, which lets **one transcript yield two related but different proteins**. The worked case is Rous sarcoma virus, a retrovirus whose *gag* and *pol* genes overlap: **the *pol* frame is offset from the *gag* frame by one base pair**, and the shift lets the ribosome bypass the stop codon at the end of *gag* and keep going into *pol*, producing one long protein that is afterwards cut into pieces. The quantitative part is what makes it elegant: **the shift happens in about 5% of translations, so the reverse transcriptase is made at roughly one-twentieth the amount of the structural Gag protein.** **This is a stoichiometry control, not an error rate** — the virus needs much structure and little enzyme, and it gets that ratio out of one transcript by tuning how often the ribosome slips. The same trick makes two different subunits of E. coli DNA polymerase III — the enzyme that copies the bacterial chromosome — from a single *dnaX* transcript.",
      cn: "有少数基因是这样构造的：核糖体**在一个确定的位置换阅读框**，从而让**一条转录本给出两个相关但不同的蛋白**。经典案例是劳斯肉瘤病毒，一种 *gag* 与 *pol* 基因相互重叠的逆转录病毒：***pol* 的框相对 *gag* 的框错开一个碱基对**，这一移位让核糖体绕过 *gag* 末端的终止密码子、继续读进 *pol*，产出一条长蛋白，事后再被切成几段。定量的那部分才是精妙所在：**移位发生在约 5% 的翻译中，所以逆转录酶的产量大约只有结构蛋白 Gag 的二十分之一。这是一个化学计量控制，而非错误率** —— 病毒需要大量结构蛋白和少量酶，它就靠调节核糖体滑动的频率，从一条转录本里拿到这个比例。同样的花招让大肠杆菌 DNA 聚合酶 III 的两个不同亚基出自同一条 *dnaX* 转录本。",
      src: "A p.1013"
    },
    {
      link_en: "second way: change the message itself after it has been transcribed",
      link_cn: "第二条路：在转录之后，直接改动信息本身",
      en: "**RNA editing** is the addition, deletion or alteration of nucleotides in an RNA after it has been made, changing what the message means when translated. **Addition**: in the mitochondria of some protists, including *Trypanosoma brucei*, the transcript of a cytochrome oxidase subunit does not match the protein that is needed, and an editing process **inserts four U residues that shift the reading frame**. It is templated, not random — a class of **guide RNAs** pairs with the transcript and specifies where the U residues go, and that pairing includes G=U pairs, so RNA-RNA recognition is not confined to Watson-Crick geometry. **Alteration**: enzymes remove an amino group from a base in place. **ADAR enzymes convert adenosine to inosine, and translation reads inosine as G** — an A-to-G change that never happened in the DNA. ADARs work only on double-stranded stretches of RNA, and human transcripts supply plenty, because human DNA holds **more than a million 300 bp Alu elements, about 10% of the genome**, so an average new human mRNA carries 10 to 20 of them and folds back on itself readily; defects in ADAR function are associated with amyotrophic lateral sclerosis, epilepsy and major depression. **APOBEC enzymes convert cytidine to uridine**, and their showcase is apolipoprotein B: **liver makes the full-length apoB-100, while an APOBEC found only in the intestine converts one C to a U at the codon for residue 2,153, turning a glutamine codon into the stop codon UAA and producing apoB-48, the amino-terminal half.** One gene, two tissues, two proteins. **So a DNA sequence read through the code does not always predict the protein**, because the message that reaches the ribosome may no longer be a faithful copy of the gene.",
      cn: "**RNA 编辑（RNA editing）**是在 RNA 造好之后对其核苷酸进行增添、删除或改动，从而改变这条信息被翻译出来的含义。**增添**：在某些原生生物（包括*布氏锥虫 Trypanosoma brucei*）的线粒体里，细胞色素氧化酶某个亚基的转录本与所需的蛋白对不上，而一个编辑过程会**插入四个 U，把阅读框移位**。这是有模板的，不是随机的 —— 一类**指导 RNA（guide RNA）**与转录本配对，规定 U 加在哪里，而这种配对里包含 G=U 配对，可见 RNA 与 RNA 的识别并不限于 Watson-Crick 几何。**改动**：一些酶就地把碱基上的氨基去掉。**ADAR 类酶把腺苷变成次黄嘌呤核苷，而翻译把次黄嘌呤核苷读作 G** —— 相当于一次「DNA 里从未发生过」的 A 变 G。ADAR 只作用于 RNA 的双链区段，而人类转录本供得很足，因为人类 DNA 里有**超过一百万个 300 bp 的 Alu 元件，约占基因组的 10%**，所以一条新合成的人类 mRNA 平均带 10 到 20 个，很容易折回来自身配对；ADAR 功能缺陷与肌萎缩侧索硬化、癫痫和重度抑郁相关。**APOBEC 类酶把胞苷变成尿苷**，它们的招牌案例是载脂蛋白 B：**肝脏造出全长的 apoB-100，而一种只存在于肠道的 APOBEC 把第 2,153 号残基密码子上的一个 C 变成 U，把一个谷氨酰胺密码子变成终止密码子 UAA，产出 apoB-48，也就是肝脏那个蛋白的氨基端一半。**一个基因，两个组织，两个蛋白。**所以照着密码去读一段 DNA 序列，并不总能预测出蛋白**，因为送到核糖体的那条信息，可能已经不是这个基因的忠实拷贝了。",
      src: "A p.1014"
    }
  ],
  terms: [
    { en: "nonoverlapping code and reading frame", cn: "不重叠密码与阅读框",
      def_en: "Triplets are read one after another with no nucleotide shared between two codons and nothing written between them, and one particular codon sets the frame. Any sequence therefore has three frames, six counting the complementary strand. Inserting or deleting one base changes every downstream amino acid; three leaves the remaining triplets intact — the genetic proof that a codon is three bases.",
      def_cn: "三联体一个接一个地读，没有核苷酸被两个密码子共用，之间也不写任何东西，而某一个特定密码子定下阅读框。所以任何序列都有三个框，算上互补链是六个。插入或删除一个碱基会改变下游每一个氨基酸；删三个则剩下的三联体完好 —— 这是「密码子是三个碱基」的遗传学证明。" },
    { en: "polynucleotide phosphorylase", cn: "多核苷酸磷酸化酶",
      def_en: "Ochoa's template-independent enzyme, which polymerises ribonucleoside diphosphates into RNA whose base composition simply mirrors the ratio supplied, in random order. It made the homopolymers and random copolymers the code was first attacked with — which is exactly why those experiments gave base composition and not base order.",
      def_cn: "Ochoa 发现的不依赖模板的酶，把核糖核苷二磷酸聚合成 RNA，产物的碱基组成只是简单反映投料比例，顺序随机。最初攻打密码用的同聚物和随机共聚物就是它做的 —— 这也正是那些实验只能给出碱基组成而给不出顺序的原因。" },
    { en: "open reading frame", cn: "开放阅读框",
      def_en: "A run of 50 or more consecutive codons containing no termination codon. Since three of 64 codons are stops, about 1 codon in 20 is a stop in random sequence, so a long uninterrupted run marks a probable protein-coding gene. A protein of Mr 60,000 needs 500 or more codons, and a search must cover all six frames.",
      def_cn: "连续 50 个或更多、其中没有终止密码子的密码子串。由于 64 个密码子里有 3 个是终止，随机序列里平均每 20 个就有 1 个终止，所以一长段不被打断的串，标记的多半是一个编码蛋白的基因。分子量 60,000 的蛋白需要 500 个以上密码子，而搜索必须覆盖全部六个框。" },
    { en: "wobble and inosinate", cn: "摆动与次黄嘌呤核苷酸",
      def_en: "The codon's third base pairs loosely with the anticodon's first, so one tRNA can read more than one codon. The anticodon's first base sets the count: C or A reads one, U or G reads two, inosinate — whose base is hypoxanthine — reads three, pairing with A, U or C. The looseness is functional: tight pairing at all three positions would make tRNAs dissociate too slowly and cap the rate of protein synthesis.",
      def_cn: "密码子的第三个碱基与反密码子的第一个配得松，所以一个 tRNA 能读不止一个密码子。反密码子第一个碱基决定读几个：C 或 A 读一个，U 或 G 读两个，次黄嘌呤核苷酸（其碱基是次黄嘌呤）读三个，能与 A、U、C 配对。这份松是有功能的：三个位置都配得牢，tRNA 解离太慢，会把蛋白合成的速率卡住。" },
    { en: "the 32-tRNA minimum", cn: "32 个 tRNA 的下限",
      def_en: "Crick's fourth wobble rule: 32 tRNAs suffice for all 61 sense codons — 31 for the amino acids plus one for initiation. Real cells run above it (E. coli has 47 tRNA genes in 86 copies); vertebrate mitochondria run below it, decoding their own genes with only 22, using still looser wobble rules.",
      def_cn: "Crick 摆动规则的第四条：32 个 tRNA 足以覆盖全部 61 个有义密码子 —— 31 个给氨基酸，加一个用于起始。真实细胞在这之上（大肠杆菌 47 个 tRNA 基因、86 个拷贝）；脊椎动物线粒体在这之下，只用 22 个就把自己的基因读完，靠的是更松的摆动规则。" },
    { en: "silent mutation and transition", cn: "沉默突变与转换",
      def_en: "A silent mutation changes the nucleotide but not the encoded amino acid; a substitution at the third base is silent about 75% of the time. A transition replaces a purine with a purine or a pyrimidine with a pyrimidine and is the commonest missense mutation — and it is exactly what the code is measurably resistant to.",
      def_cn: "沉默突变改变核苷酸但不改变编码的氨基酸；第三碱基上的替换约 75% 是沉默的。转换指嘌呤换嘌呤、嘧啶换嘧啶，是最常见的错义突变 —— 而这套密码可测量地抵抗的正是它。" },
    { en: "the code is defined by two things", cn: "密码由两样东西定义",
      def_en: "Not by the mRNA: by the anticodons on tRNAs, which decide where an amino acid is placed, and by the specificity of the aminoacyl-tRNA synthetases, which decide which amino acid a tRNA carries. Altering the code therefore means altering a tRNA gene — which is why variants persist only in small genomes, mostly mitochondrial, and mostly at termination codons.",
      def_cn: "不是由 mRNA 定义：而是由 tRNA 上的反密码子（决定氨基酸被放在哪里）和氨酰-tRNA 合成酶的特异性（决定某条 tRNA 带的是哪个氨基酸）共同定义。所以改动密码就等于改动一个 tRNA 基因 —— 这正是变体只在小基因组（大多是线粒体）里、且大多发生在终止密码子上的原因。" },
    { en: "translational frameshifting", cn: "翻译移码",
      def_en: "A deliberate change of reading frame at a defined point, so one transcript gives two related proteins. In Rous sarcoma virus the pol frame is offset from gag by one base pair; the shift bypasses the gag stop codon and occurs in about 5% of translations, so reverse transcriptase is made at a twentieth the level of Gag. It is a stoichiometry control, not an error rate.",
      def_cn: "在确定位置刻意改变阅读框，使一条转录本给出两个相关的蛋白。劳斯肉瘤病毒里 pol 的框相对 gag 错开一个碱基对；移位绕过 gag 的终止密码子，发生在约 5% 的翻译中，于是逆转录酶的量只有 Gag 的二十分之一。这是化学计量控制，不是错误率。" },
    { en: "ADAR and APOBEC", cn: "ADAR 与 APOBEC",
      def_en: "ADAR enzymes deaminate adenosine to inosine, which translation reads as G; they act only on double-stranded RNA, which the million-plus Alu elements of the human genome supply in abundance, and ADAR defects are associated with ALS, epilepsy and major depression. APOBEC enzymes deaminate cytidine to uridine; an intestine-only APOBEC turns the Gln codon at residue 2,153 of apoB into a UAA stop, so intestine makes apoB-48 and liver makes apoB-100 from one gene.",
      def_cn: "ADAR 类酶把腺苷脱氨成次黄嘌呤核苷，翻译把它读作 G；它们只作用于双链 RNA，而人类基因组里上百万个 Alu 元件提供了充足的双链区，ADAR 功能缺陷与 ALS、癫痫、重度抑郁相关。APOBEC 类酶把胞苷脱氨成尿苷；一种只存在于肠道的 APOBEC 把 apoB 第 2,153 号残基的 Gln 密码子变成 UAA 终止密码子，于是同一个基因在肠道给出 apoB-48、在肝脏给出 apoB-100。" }
  ]
};

/* ===================================================================== L-27-2-1 */
window.BIOLITE_SPINE["L-27-2-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "mRNA", "tRNA", "rRNA", "ribosome", "codon", "anticodon",
            "ATP", "GTP", "phosphate", "hydrolysis", "nucleus", "cytoplasm",
            "mitochondria", "chloroplast", "magnesium", "isoleucine", "valine",
            "methionine", "alanine", "proline", "cysteine", "histidine",
            "castor bean", "yeast", "antibiotic"],
  nodeTitle_en: "Protein synthesis",
  nodeTitle_cn: "蛋白质的合成",
  title_en: "Where the fidelity of translation actually comes from, and why the machine that does it is made of RNA",
  title_cn: "翻译的保真度究竟来自哪里，以及为什么干这活的那台机器是 RNA 做的",
  steps: [
    {
      en: "Making a polymer — a long chain of repeating units — is usually described in three stages: **initiation, elongation, termination**, which is how DNA and RNA synthesis were described. Protein synthesis is described in **five**, because those three are bracketed by two more: **activation of the amino acids before synthesis begins, and folding and processing of the finished chain afterwards.** The two outer stages are not bookkeeping. **The middle three build the chain; the two outer ones are what make the chain correct** — and the rest of this spine is mostly about the first of them.",
      cn: "造一个聚合物（由重复单元连成的长链）通常按三个阶段来讲：**起始、延长、终止** —— DNA 和 RNA 的合成就是这么讲的。蛋白质合成要按**五个**阶段来讲，因为那三个阶段的两头各多一个：**合成开始之前对氨基酸的活化，以及合成完成之后对成品链的折叠与加工。**外面这两个阶段不是记账。**中间三个阶段把链造出来；外面两个阶段是让这条链正确的原因** —— 而本主线余下的篇幅大多在讲其中的第一个。",
      src: "A p.1015"
    },
    {
      link_en: "so what does activation actually accomplish? Two separate things, in one reaction",
      link_cn: "那么活化到底完成了什么？两件互不相干的事，在同一个反应里",
      en: "To build a chain with a defined sequence, two requirements have to be met. **The carboxyl group of each amino acid must be activated so a peptide bond can form**, which is the energy requirement. **And a link must be established between each amino acid and the information in the mRNA that specifies it**, which is the information requirement. **Both are met by the same act: attaching the amino acid to a tRNA** through an ester bond to the terminal adenosine of that tRNA's CCA end. A tRNA carrying its amino acid is said to be **charged**. The enzymes that do this are the **aminoacyl-tRNA synthetases**, one for each amino acid, and they fall into two classes of ten: **class I attaches the amino acid to the 2'-hydroxyl of that terminal adenosine and then shifts it to the 3'-hydroxyl, class II delivers it straight to the 3'-hydroxyl**, and the two classes approach opposite faces of the tRNA.",
      cn: "要造出一条序列确定的链，必须满足两个要求。**每个氨基酸的羧基必须被活化，肽键才能形成** —— 这是能量方面的要求。**而且每个氨基酸与「指定它的那段 mRNA 信息」之间必须建立联系** —— 这是信息方面的要求。**两者由同一个动作一并满足：把氨基酸挂到一条 tRNA 上**，通过一个酯键连到该 tRNA 的 CCA 末端那个腺苷上。带着氨基酸的 tRNA 被称为**已充电（charged）**。干这件事的酶是**氨酰-tRNA 合成酶（aminoacyl-tRNA synthetase）**，每种氨基酸一个，分成各十个的两大类：**I 类把氨基酸接到末端腺苷的 2′-羟基上、再挪到 3′-羟基；II 类直接送到 3′-羟基**，而且两类分别从 tRNA 相对的两个面靠上去。",
      src: "A p.1020",
      openQuestion_en: "There is no evidence that the two classes of synthetase share a common ancestor, and why two structurally unrelated enzyme families evolved for what is essentially the same reaction is not known.",
      openQuestion_cn: "没有证据表明这两类合成酶有共同祖先；为什么本质相同的一个反应会演化出两套结构上毫不相干的酶，目前并不知道。"
    },
    {
      link_en: "and once the amino acid is on the tRNA, nothing downstream ever checks it again",
      link_cn: "而氨基酸一旦挂上 tRNA，下游就再也没有任何一步检查过它",
      en: "**The identity of the amino acid attached to a tRNA is never checked on the ribosome.** The experiment that shows this is deliberately perverse: charge a tRNA with the wrong amino acid, which can be done in the laboratory, feed it into a translation system, and **that wrong amino acid is efficiently incorporated into the protein at whatever codon that tRNA's anticodon reads.** Efficiently — not slowly, not at reduced yield. The machine cannot tell, so it does not hesitate. **The consequence is the organising fact of this whole spine: the synthetase is the sole guardian of which amino acid goes where, a mistake it makes is final and invisible to every later step, and the wrong residue appears at the position the anticodon specifies rather than anywhere the amino acid itself would suggest.**",
      cn: "**tRNA 上挂的是哪个氨基酸，核糖体从来不查。**证明这一点的实验是故意反着做的：在实验室里把一条 tRNA 装上错误的氨基酸，再把它投进翻译体系，**这个错误的氨基酸就会被高效地掺进蛋白，位置由这条 tRNA 的反密码子读到的那个密码子决定。**是高效 —— 不是变慢，也不是产率下降。机器分辨不出来，所以它不犹豫。**由此得出的结论是整条主线的组织性事实：哪个氨基酸放在哪里，唯一的守门人就是合成酶；它一旦出错，这个错误就是终局性的、对后面每一步都不可见；而错误的残基出现的位置由反密码子决定，与这个氨基酸自身的化学性质毫无关系。**",
      src: "A p.1020"
    },
    {
      link_en: "so how good can one enzyme be at telling two nearly identical amino acids apart?",
      link_cn: "那么，一个酶把两个几乎一模一样的氨基酸分开，能做到多好？",
      en: "Isoleucine and valine differ by a single CH₂ group, and **Ile-tRNA synthetase prefers isoleucine over valine by a factor of only 200** — about what one extra CH₂ of binding energy is worth, and nowhere near enough. Yet **valine is put in place of isoleucine only about 1 time in 3,000.** The extra factor of ten and more is bought with a **double sieve**, on the principle that **two successive substrate-specific filters multiply**. Filter one is the binding-and-activation site, which excludes anything larger than isoleucine. Filter two is **a separate hydrolytic site on the same enzyme**, and the geometry is the whole trick: valine's side chain is slightly **smaller**, so **the activated valine intermediate fits into that second site and is destroyed there, while the activated isoleucine intermediate is too large to enter it.** The first sieve rejects everything too big; the second destroys everything small enough to have slipped through. A third filter follows: most synthetases can also cut the finished ester bond of a charged tRNA, and do it far faster when the tRNA is charged wrongly. **Synthetases whose amino acid has no close look-alike, cysteine's for instance, barely proofread at all** — the activation site alone is already enough for them. Add all of this up and **the overall error rate of protein synthesis is about 1 mistake per 10,000 amino acids incorporated**, far worse than DNA replication — and the reason it is allowed to be worse is biological rather than chemical: **a flawed protein is destroyed when the cell degrades it and is passed to no descendant, whereas a mistake in DNA is inherited by every cell that comes after.** The accuracy reached is enough for the economics, since most protein molecules contain no mistake at all and one defective copy among many good ones does not matter. **Translation is not built to be as accurate as possible; it is built to be exactly as accurate as it is worth paying for.**",
      cn: "异亮氨酸与缬氨酸只差一个 CH₂，而 **Ile-tRNA 合成酶偏好异亮氨酸胜过缬氨酸的倍数只有 200** —— 大约就是多一个 CH₂ 的结合能所值，远远不够。可是**缬氨酸被误放到异亮氨酸位置上的频率只有约三千分之一。**多出来的十倍以上，是用**双筛（double sieve）**买来的，原理是**两道先后串联的底物特异性过滤器，效果是相乘的**。第一道筛是结合与活化位点，把比异亮氨酸大的一律排除。第二道筛是**同一个酶上另一个独立的水解位点**，而几何关系就是全部诀窍：缬氨酸的侧链略**小**，所以**活化后的缬氨酸中间物塞得进第二个位点、在那里被销毁，而活化后的异亮氨酸中间物太大、进不去。**第一道筛掉所有太大的；第二道销毁所有小到能溜过第一道的。之后还有第三道过滤：多数合成酶还能切断已充电 tRNA 上那个成品酯键，而且在 tRNA 装错时切得快得多。**那些氨基酸没有近似替身的合成酶（比如半胱氨酸的那个）几乎不做校对** —— 光靠活化位点对它们来说就已经够了。把这一切加起来，**蛋白质合成的总体错误率约为每掺入 10,000 个氨基酸出错一个**，远差于 DNA 复制 —— 而允许它更差的理由是生物学的而不是化学的：**有缺陷的蛋白在被细胞降解时就消失了，不传给任何后代；而 DNA 上的错误会被之后每一个细胞继承。**已达到的准确度对经济账来说够用，因为绝大多数蛋白分子一个错误都没有，而众多正确拷贝中夹一个次品也无关紧要。**翻译不是为了「尽可能准」而造的；它是为了「恰好准到值这个价」而造的。**",
      src: "A p.1022"
    },
    {
      link_en: "and the synthetase has a second recognition problem, one that is invisible if you only think about amino acids",
      link_cn: "合成酶还有第二个识别问题 —— 如果你只想着氨基酸，这个问题是看不见的",
      recall_en: "the same enzyme as the double sieve, now choosing between tRNAs instead of between amino acids",
      recall_cn: "还是双筛那一步的同一个酶，只是这次要在 tRNA 之间挑，而不是在氨基酸之间挑",
      en: "A synthetase must be specific for one amino acid **and** for the right tRNAs, and telling dozens of tRNAs apart matters to the fidelity of translation just as much. **The rules for that are called the second genetic code**, and they are more complicated than those of the first. Nucleotides that are the same in every tRNA are useless for telling them apart, so **the positions that actually discriminate cluster in two places: the amino acid arm and the anticodon arm, the anticodon included**, with a few elsewhere; ten or more nucleotides may be involved. **The alanine system is the beautiful exception**: from bacteria to humans, the main thing the alanine enzyme recognises is **a single G-U base pair in the amino acid arm of the alanine tRNA**, and a synthetic RNA hairpin of as few as seven base pairs is charged efficiently provided it carries that one pair. That is also why **adding a new amino acid to the code requires building a new synthetase-tRNA pair**, which is exactly what the two natural additions, selenocysteine and pyrrolysine, and the laboratory ones amount to.",
      cn: "一个合成酶必须既对某一种氨基酸专一，**也**对正确的那些 tRNA 专一，而在几十条 tRNA 之间分辨清楚，对翻译保真度同样重要。**这套规则被称为第二套遗传密码（the second genetic code）**，而且比第一套更复杂。在所有 tRNA 里都相同的核苷酸对分辨毫无用处，所以**真正起区分作用的位置集中在两处：氨基酸臂和反密码子臂（包括反密码子本身）**，另有少数散在别处；参与的核苷酸可能有十个以上。**丙氨酸系统是那个漂亮的例外**：从细菌到人，丙氨酸那个酶主要认的就是**丙氨酸 tRNA 氨基酸臂上的一对 G-U 碱基**；一段人工合成的 RNA 发夹，哪怕只有七对碱基，只要带着这一对，就能被高效充电。这也正是**给密码增加一个新氨基酸就必须造一套新的合成酶-tRNA 配对**的原因 —— 自然界那两个新增（硒代半胱氨酸和吡咯赖氨酸）和实验室里那些，做的都是这件事。",
      src: "A p.1023"
    },
    {
      link_en: "now the machine that reads the message — and the biggest surprise about it is what its active site is made of",
      link_cn: "现在说读这条信息的机器 —— 而关于它最大的意外，是它的活性中心由什么构成",
      en: "A ribosome is two unequal subunits that clamp together around the mRNA, which threads through the cleft between them. The bacterial one is **70S**, of molecular weight about **2.7 million**, made of a **50S** and a **30S** subunit. Two arithmetic notes. **S values do not add up when subunits combine**, because S is roughly proportional to the two-thirds power of mass — doubling the mass multiplies S by about 1.6, which is why 30 plus 50 lands near 70. And an E. coli cell holds **15,000 or more ribosomes, close to a quarter of its dry weight**, about 65% RNA and 35% protein. Now the result that reorganised the subject. When the first high-resolution structures were solved, **the subunits turned out to be huge RNA molecules with the proteins decorating the surface**, and, most importantly, **there is no protein within 18 Å of the active site where a peptide bond is made.** **The peptidyl transferase activity — the making of the peptide bond itself — belongs to the 23S rRNA of the large subunit. The ribosome is a ribozyme**, and every peptide bond in every cell is made by RNA.",
      cn: "一个核糖体是两个不等大的亚基，夹住 mRNA 合在一起，mRNA 从两者之间的裂缝里穿过。细菌的那个是 **70S**，分子量约 **270 万**，由一个 **50S** 和一个 **30S** 亚基构成。两点算术提醒。**亚基合并时 S 值不是相加的**，因为 S 大致正比于质量的三分之二次方 —— 质量翻倍，S 只乘约 1.6，这就是 30 加 50 落在 70 附近的原因。另外，一个大肠杆菌细胞里有 **15,000 个以上核糖体，接近其干重的四分之一**，其中约 65% 是 RNA、35% 是蛋白。接下来是重组了整个学科的那个结果。第一批高分辨率结构解出来时，**这两个亚基原来是巨大的 RNA 分子，蛋白只是点缀在表面**；而最重要的是，**形成肽键的那个活性中心，18 Å 之内没有任何蛋白。肽基转移酶活性属于 23S rRNA。核糖体是一个核酶**，每一个细胞里的每一个肽键都是 RNA 做出来的。",
      src: "A p.1017",
      see: [{ id: "L-26-4-1", en: "what it takes to call an RNA an enzyme", cn: "把一条 RNA 称作酶，需要满足什么" }]
    },
    {
      link_en: "and a ribosome has three tRNA seats, one of which the initiator is allowed to sit in first",
      link_cn: "核糖体上有三个 tRNA 座位，其中一个允许起始者直接坐进去",
      en: "A bacterial ribosome has three sites for a tRNA: **the aminoacyl site (A), the peptidyl site (P), and the exit site (E)**. A and P hold charged tRNAs; **E holds only uncharged tRNAs that have finished their work and are leaving.** Now the privilege that defines initiation. Methionine has one codon, AUG, which is also the start signal, so a cell keeps **two different methionine tRNAs and the difference between a starting AUG and an internal one is carried by the tRNA rather than by the codon.** In bacteria the starting one is charged in two steps: an ordinary Met-tRNA synthetase attaches methionine to both methionine tRNAs without discriminating, and then **a transformylase — which is the selective step — adds a formyl group onto the methionine, but only on the initiator tRNA.** That formyl group does two jobs: **it keeps this species out of internal positions in a chain, and it lets it bind an initiation site that accepts nothing else.** Hence the privilege: **the formylmethionyl-tRNA is the only charged tRNA that binds first to the P site.** Every other one, including the elongator methionyl-tRNA carrying the identical amino acid, enters at A and only later moves to P and then E.",
      cn: "细菌核糖体上有三个 tRNA 位点：**氨酰位（A）、肽基位（P）、出口位（E）**。A 和 P 容纳已充电的 tRNA；**E 只容纳干完活、正在离场的未充电 tRNA。**接下来是定义了「起始」的那项特权。甲硫氨酸只有一个密码子 AUG，而它同时也是起始信号，所以细胞备了**两条不同的甲硫氨酸 tRNA —— 起始的 AUG 与内部的 AUG 之间的区别由 tRNA 承担，而不是由密码子承担。**在细菌里，起始那条是分两步充电的：普通的 Met-tRNA 合成酶不加区分地把甲硫氨酸接到两条甲硫氨酸 tRNA 上，然后**一个转甲酰酶（transformylase）—— 这才是有选择性的那一步 —— 在甲硫氨酸上加一个甲酰基，但只加在起始 tRNA 上。**这个甲酰基干两件事：**它使这一物种进不了链的内部位置，同时让它能结合一个别的谁都进不去的起始位点。**特权由此而来：**甲酰甲硫氨酰-tRNA 是唯一一条直接先结合 P 位的已充电 tRNA。**其他每一条（包括携带同一个氨基酸的延长型甲硫氨酰-tRNA）都从 A 位进入，之后才移到 P、再到 E。",
      src: "A p.1028"
    },
    {
      link_en: "and starting in the right place is checked three separate times before a single bond is made",
      link_cn: "而「起始位置正确」这件事，在第一个键形成之前被独立检查了三次",
      en: "Bacterial initiation needs seven things: the 30S subunit, the mRNA, the formylmethionyl-tRNA, three initiation factors, GTP, the 50S subunit, and magnesium. **Step one**: the 30S subunit binds **IF3**, which stops the two subunits joining too early, and **IF1**, which sits in the A site so no tRNA can bind there; the mRNA then binds, with the starting AUG guided into place by a **Shine-Dalgarno sequence** — a short purine-rich stretch in the mRNA, 8 to 13 bp upstream of the start codon, that base-pairs with a complementary pyrimidine-rich stretch near the 3' end of the 16S rRNA. **Step two**: **IF2** arrives carrying GTP together with the initiator tRNA, whose anticodon now pairs with the start codon. **Step three**: the 50S subunit joins, the GTP on IF2 is hydrolysed, and all three factors leave; the product is a working **70S initiation complex**. Now the part worth more than the steps: **the initiator's placement in the P site is fixed by three independent recognitions — the codon-anticodon pair, the Shine-Dalgarno pairing with the rRNA, and the contacts between the P site and the tRNA itself.** **That is the same principle as the double sieve: fidelity in this system is always bought by multiplying independent checks, never by making one check better.**",
      cn: "细菌起始需要七样东西：30S 亚基、mRNA、甲酰甲硫氨酰-tRNA、三个起始因子、GTP、50S 亚基，以及镁。**第一步**：30S 亚基结合 **IF3**（阻止两个亚基过早合拢）和 **IF1**（坐在 A 位上，使任何 tRNA 都结合不上去）；随后 mRNA 结合上来，起始的 AUG 由 **Shine-Dalgarno 序列**引导就位 —— 那是 mRNA 上起始密码子上游 8 到 13 bp 处一小段富含嘌呤的序列，与 16S rRNA 3′ 端附近一段富含嘧啶的互补序列配对。**第二步**：**IF2** 带着 GTP 与起始 tRNA 一同到达，起始 tRNA 的反密码子此时与起始密码子配上对。**第三步**：50S 亚基合上来，IF2 上的 GTP 被水解，三个因子全部离开；产物是一个可工作的 **70S 起始复合物**。接下来这一点比步骤本身更值钱：**起始者在 P 位上的定位，由三次相互独立的识别共同锁定 —— 密码子与反密码子的配对、Shine-Dalgarno 与 rRNA 的配对，以及 P 位与这条 tRNA 本身之间的接触。这与双筛是同一个原理：在这个系统里，保真度永远是靠把独立的检查相乘买来的，而不是靠把某一道检查做得更好。**",
      src: "A p.1028"
    },
    {
      link_en: "a eukaryotic cell finds the same start codon by an entirely different method, and one consequence follows immediately",
      link_cn: "真核细胞用完全不同的办法找同一个起始密码子，而一个后果立刻随之而来",
      en: "A eukaryotic cell uses **at least twelve initiation factors**, and the logic differs more than the parts list does. The charged initiator tRNA is delivered by **eIF2** with GTP onto the 40S subunit, giving a **43S preinitiation complex**. Meanwhile the mRNA binds **eIF4F**, which is three proteins: **eIF4E**, which grips the 5' cap; **eIF4A**, an RNA helicase that unwinds structure in the message; and **eIF4G**, a linker that binds eIF4E at one end and the preinitiation complex at the other. **eIF4G also binds the poly(A) binding protein sitting on the far end of the message, so the mRNA is pulled into a circle** — the structural basis of a great deal of translational regulation. Adding the message gives a **48S complex**, which then **scans along the RNA from the cap until it meets an AUG**, eIF4A opening any structure in the way; the 60S subunit then joins. **Note the difference in principle: a bacterium finds the start codon by base-pairing to a fixed landmark, a eukaryote finds it by scanning from the end of the molecule.** **That single difference is why one bacterial mRNA can carry several genes, each with its own landmark, and a eukaryotic one essentially cannot.**",
      cn: "真核细胞用**至少十二个起始因子**，而差别在逻辑上比在零件清单上更大。已充电的起始 tRNA 由 **eIF2** 带着 GTP 送上 40S 亚基，形成 **43S 前起始复合物**。与此同时 mRNA 结合 **eIF4F**，那是三个蛋白：**eIF4E** 抓住 5′ 帽；**eIF4A** 是一个 RNA 解旋酶，把信息上的二级结构解开；**eIF4G** 是连接件，一端结合 eIF4E，另一端结合前起始复合物。**eIF4G 还结合停在信息另一端的 poly(A) 结合蛋白，于是 mRNA 被拉成一个圈** —— 这是大量翻译水平调控的结构基础。加上信息后得到 **48S 复合物**，它随后**从帽子出发沿 RNA 扫描，直到遇上一个 AUG**，路上的结构由 eIF4A 打开；然后 60S 亚基合上来。**注意原理上的差别：细菌靠与一个固定地标碱基配对来找起始密码子，真核靠从分子一端扫描过去来找。正是这一条差别，使得一条细菌 mRNA 可以携带好几个基因、各带各的地标，而真核 mRNA 基本上做不到。**",
      src: "A p.1029"
    },
    {
      link_en: "with the chain started, each round of elongation begins with a delivery, and the delivery has two motions",
      link_cn: "链一旦起头，每一轮延长都从一次投递开始，而这次投递分两个动作",
      en: "A charged tRNA binds the A site only weakly on its own, so it is delivered as a three-part package: **the tRNA, the protein EF-Tu, and GTP.** The package binds the A site, the GTP is hydrolysed, and EF-Tu leaves carrying GDP; **EF-Ts** then strips that GDP off so a new GTP can bind, which makes EF-Ts a nucleotide exchange factor rather than a catalyst. The extra event is the one that matters mechanically. **The tRNA docks first by its anticodon, in the decoding centre of the small subunit; only afterwards does its far end — some 70 Å away, at the other tip of the twisted L the molecule folds into — swing across into the catalytic centre of the large subunit. That swing is called accommodation.** **Binding and reacting are therefore two separate motions separated in time and space, and that gap is exactly what makes proofreading on the ribosome possible at all**, because a wrongly paired tRNA is given an interval in which to fall off before any chemistry happens.",
      cn: "一条已充电的 tRNA 单独结合 A 位时结合得很弱，所以它是被包成三件一组投递的：**这条 tRNA、蛋白 EF-Tu、以及 GTP。**这个包结合到 A 位，GTP 被水解，EF-Tu 带着 GDP 离开；随后 **EF-Ts** 把那个 GDP 剥下来，好让新的 GTP 接上 —— 所以 EF-Ts 是一个核苷酸交换因子，而不是催化剂。真正在机制上要紧的是那个额外动作。**这条 tRNA 先用反密码子在小亚基的解码中心里对接上；之后它的另一端 —— 在约 70 Å 之外，位于这个分子折成的扭曲 L 形的另一个尖端 —— 才摆过去，进入大亚基的催化中心。这个摆动叫作就位（accommodation）。所以「结合」与「反应」是在时间和空间上分开的两个动作，而这个间隙正是核糖体上能够进行校对的全部前提** —— 配错的 tRNA 因此得到一段时间，可以在任何化学反应发生之前先掉下来。",
      src: "A p.1031"
    },
    {
      link_en: "and that proofreading turns out to be a delay rather than an inspection, which is measurable",
      link_cn: "而这种校对原来是一段延迟，不是一次检查 —— 而且可以测出来",
      recall_en: "the same trade-off the wobble rules reach from the other end, where loose third-base pairing exists so that tRNAs can leave fast enough",
      recall_cn: "摆动规则从另一头得到的是同一个取舍：第三碱基配得松，正是为了让 tRNA 走得够快",
      en: "The EF-Tu complex carrying GTP, and the one carrying GDP after hydrolysis, **each persist for only a few milliseconds before coming apart**, and those two brief windows are when the codon-anticodon pairing gets proofread. **A wrongly paired tRNA normally just falls out of the A site during one of them.** The demonstration is a clean trade-off measurement: **substitute a GTP analogue that is hydrolysed slowly, and the windows lengthen — fidelity improves and the rate of protein synthesis falls.** **So translation has been optimised to balance speed against accuracy, not to maximise either.** And the limit must be said in the same breath: **this proofreading establishes only that the codon and anticodon are correctly paired. It says nothing about which amino acid the tRNA is carrying** — that was decided at the very first stage and is never revisited.",
      cn: "带着 GTP 的 EF-Tu 复合物，以及水解之后带着 GDP 的那个，**各自只存在几毫秒就散开**，而这两个短暂的窗口正是密码子-反密码子配对被校对的时段。**配错的 tRNA 通常就在其中某个窗口里从 A 位掉出去。**证明它的是一次干净的取舍测量：**换用一个水解很慢的 GTP 类似物，窗口就变长 —— 保真度上升，蛋白合成速率下降。所以翻译是被优化成在速度与准确性之间取平衡的，而不是把其中任何一项最大化。**而局限必须在同一口气里说出来：**这种校对只能确认密码子与反密码子配对正确，它对「这条 tRNA 带的是哪个氨基酸」一个字也没说** —— 那件事在第一个阶段就定了，此后再没有被重新检查过。",
      src: "A p.1035"
    },
    {
      link_en: "the bond itself, and then the step that moves everything along by exactly one codon",
      link_cn: "然后是键本身，以及把一切精确推进一个密码子的那一步",
      en: "The bond is made by the amino group of the amino acid in the A site attacking the ester link that holds the growing chain to the tRNA in the P site. **Note the direction: the whole chain is transferred forward onto the incoming amino acid, never the other way round.** Immediately afterwards each tRNA straddles two sites at once — a **hybrid binding state**, the uncharged one reaching into E and the chain-bearing one into P, while the anticodons stay put. Then **translocation**: the ribosome moves **exactly one codon** toward the 3' end, which carries the chain-bearing tRNA fully into P and the spent tRNA into E, from which it leaves. This needs **EF-G**, also called translocase, and one more GTP — so **two GTP are spent per residue added**, one in the delivery and one here. The structural insight is worth collecting: **EF-G can take the A site because its shape mimics that of the EF-Tu-tRNA package, its carboxyl-terminal part imitating a tRNA anticodon loop in both shape and charge distribution.** **A protein has evolved to look like an RNA in order to occupy an RNA's seat**, and two more things in this spine do the same trick.",
      cn: "这个键的形成，是 A 位上那个氨基酸的氨基去进攻「把生长中的链拴在 P 位 tRNA 上」的那个酯键。**注意方向：整条链被向前转移到新来的氨基酸上，绝不是反过来。**紧接着，两条 tRNA 各自同时跨在两个位点上 —— 这叫**杂合结合态（hybrid binding state）**，未充电的那条伸进 E，带着链的那条伸进 P，而两个反密码子仍留在原处。然后是**转位（translocation）**：核糖体朝 3′ 端**精确移动一个密码子**，把带链的 tRNA 完全送进 P、把用完的 tRNA 送进 E，它从那里离场。这一步需要 **EF-G**（又叫转位酶）和另一个 GTP —— 所以**每加一个残基要花掉两个 GTP**，一个在投递、一个在这里。这里的结构学洞见值得收集起来：**EF-G 之所以能占住 A 位，是因为它的形状模仿了 EF-Tu-tRNA 那个包，它的羧基末端部分在形状和电荷分布上都在模仿一个 tRNA 的反密码子环。一个蛋白演化成看起来像 RNA，只为了占住一个 RNA 的座位** —— 而本主线里还有两样东西玩同样的花招。",
      src: "A p.1032"
    },
    {
      link_en: "at the end, the same catalyst is pointed at a different molecule and the chain comes off",
      link_cn: "到了终点，同一个催化剂被指向另一个分子，链就下来了",
      en: "There is no tRNA for a stop codon. Instead a **release factor** binds the A site when a stop codon arrives: **RF1 reads UAG and UAA, RF2 reads UGA and UAA**, and **RF3** is a GTP-binding accessory. Release factors also **have domains thought to mimic tRNA structure** — the second instance of the same trick. The chemistry is worth stating precisely: **the bound release factor induces peptidyl transferase to transfer the finished chain to a water molecule instead of to another amino acid.** **Termination invents no new chemistry; it redirects the existing catalyst onto a different nucleophile, and that nucleophile is water.** Recycling then follows in order: the release factors leave, EF-G and **ribosome recycling factor** take their place and GTP hydrolysis splits off the large subunit, IF3 replaces them and pushes the spent tRNA out, and the mRNA is released last — leaving the small subunit with IF3 on it, which is exactly the state initiation begins from.",
      cn: "终止密码子没有对应的 tRNA。取而代之的是，终止密码子到来时由一个**释放因子（release factor）**结合 A 位：**RF1 读 UAG 和 UAA，RF2 读 UGA 和 UAA**，而 **RF3** 是一个结合 GTP 的辅助因子。释放因子同样**带有被认为在模仿 tRNA 结构的结构域** —— 这是同一个花招的第二例。化学过程值得说准确：**结合上去的释放因子诱导肽基转移酶把完成的链转移到一个水分子上，而不是转移到另一个氨基酸上。终止没有发明任何新化学；它只是把现成的催化剂改指向另一个亲核试剂，而这个亲核试剂是水。**随后是按顺序的回收：释放因子离开，EF-G 与**核糖体回收因子（ribosome recycling factor）**接手，GTP 水解把大亚基卸下来，IF3 取代它们并把用完的 tRNA 推出去，mRNA 最后被释放 —— 剩下带着 IF3 的小亚基，而这恰好就是起始所要开始的那个状态。",
      src: "A p.1036",
      openQuestion_en: "What RF3 specifically does has not been firmly established; it is thought to release the ribosomal subunit.",
      openQuestion_cn: "RF3 具体做什么，目前并没有被确凿地确定；一般认为它负责把核糖体亚基放开。"
    },
    {
      link_en: "add up what one peptide bond cost, and the answer explains what the cell was actually buying",
      link_cn: "把一个肽键的花费加起来，答案会说明细胞真正买的是什么",
      en: "Item by item: making one charged tRNA spends **two high-energy phosphates**, because ATP goes all the way to AMP and the pyrophosphate is then hydrolysed. **An extra ATP** is spent every time proofreading destroys a wrongly activated amino acid. **One GTP** goes in the delivery step and **another** in translocation. **The total is more than four NTPs hydrolysed per peptide bond, on average.** Now the comparison that makes the number mean something: **at least 122 kJ/mol is spent to make a bond whose own hydrolysis releases only about 21 kJ/mol**, a net change of about −101 kJ/mol. That is an enormous, deliberate over-payment, and what it buys is stated exactly: **the goal is not a peptide bond, it is a peptide bond between two specified amino acids.** **Every one of those high-energy phosphates is maintaining the alignment between a codon and an amino acid. Energy here is the price of information, not of chemistry.**",
      cn: "逐项来算：造一条已充电的 tRNA 要花掉**两个高能磷酸键**，因为 ATP 一路走到 AMP，随后焦磷酸又被水解。每当校对销毁一个被错误活化的氨基酸，就要额外再花**一个 ATP**。投递那一步花**一个 GTP**，转位再花**一个**。**总计：平均每形成一个肽键，水解掉四个以上的核苷三磷酸。**接下来是让这个数字有意义的对照：**至少花掉 122 kJ/mol，去造一个自身水解只放出约 21 kJ/mol 的键**，净变化约 −101 kJ/mol。这是一笔巨大的、有意为之的超额支付，而它买到的是什么，可以说得非常准确：**目标不是「一个肽键」，而是「两个指定的氨基酸之间的一个肽键」。这些高能磷酸键，每一个都在维持密码子与氨基酸之间的对应关系。这里的能量是信息的价钱，不是化学的价钱。**",
      src: "A p.1036"
    },
    {
      link_en: "and because each stage is a separate stage, each one has a compound that stops it there",
      link_cn: "而正因为每个阶段彼此独立，每一个阶段都有一个化合物能把它就地卡住",
      recall_en: "the same logic as the transcription inhibitors: a compound that stops one step is also an experiment on that step",
      recall_cn: "和转录抑制剂是同一个逻辑：能卡住某一步的化合物，同时也是对那一步的实验",
      en: "Most of these compounds exploit small differences between bacterial and eukaryotic machinery, which is why most are relatively harmless to us. **Puromycin**, from the mould *Streptomyces alboniger*, works by imposture: **it resembles the 3' end of a charged tRNA closely enough to enter the A site and actually accept the growing chain — but it resembles only that end, so it cannot be translocated, and it falls off carrying the chain with it**, ending synthesis early. **Tetracyclines** block the A site so no charged tRNA can be delivered. **Chloramphenicol** blocks peptidyl transfer on bacterial ribosomes, and on mitochondrial and chloroplast ones, sparing the eukaryotic cytosol; **cycloheximide** is its exact mirror image, blocking only the eukaryotic 80S peptidyl transferase, which is why it is a laboratory reagent rather than a drug. **Streptomycin** does two different things by dose: **it causes misreading of the code at low concentrations and blocks initiation at high ones.** Two protein toxins are aimed at us rather than at bacteria. **Diphtheria toxin**, from *Corynebacterium diphtheriae*, **attaches an ADP-ribose group to a modified histidine residue of the eukaryotic elongation factor eEF2 and inactivates it, so translocation stops**; the cells that die of it form the grey membrane over the throat that names the disease. **Ricin**, from the castor bean, **removes a specific adenine base from the 28S rRNA and thereby inactivates the large subunit** — the agent of the 1978 umbrella killing of Georgi Markov.",
      cn: "这些化合物大多利用细菌与真核机器之间的细微差别，这也是它们对我们大多相对无害的原因。**嘌呤霉素（puromycin）**来自霉菌 *Streptomyces alboniger*，靠冒名顶替起作用：**它像已充电 tRNA 的 3′ 端像到足以进入 A 位、并且真的接下生长中的链 —— 但它只像那一端，所以无法被转位，于是带着链一起掉下来**，合成提前终止。**四环素类（tetracycline）**堵住 A 位，使任何已充电的 tRNA 都送不进来。**氯霉素（chloramphenicol）**阻断细菌核糖体上的肽基转移，也阻断线粒体和叶绿体核糖体上的，但放过真核胞质；**放线菌酮（cycloheximide）**是它的精确镜像，只阻断真核 80S 的肽基转移酶 —— 这正是它只能当实验试剂而不能当药的原因。**链霉素（streptomycin）**按剂量做两件不同的事：**低浓度下引起密码的误读，高浓度下阻断起始。**另有两种蛋白毒素针对的是我们而不是细菌。**白喉毒素（diphtheria toxin）**来自*白喉棒状杆菌 Corynebacterium diphtheriae*，**把一个 ADP-核糖基接到真核延长因子 eEF2 上一个被修饰过的组氨酸残基上，使其失活，于是转位停止**；被它杀死的细胞在咽喉上形成的灰色膜，正是这个病名字的由来。**蓖麻毒素（ricin）**来自蓖麻子，**从 28S rRNA 上摘掉一个特定的腺嘌呤碱基，由此使大亚基失活** —— 1978 年 Georgi Markov 雨伞谋杀案用的就是它。",
      src: "A p.1039"
    }
  ],
  terms: [
    { en: "the five stages", cn: "五个阶段",
      def_en: "Activation, initiation, elongation, termination, folding and processing. The three middle ones are the generic pattern shared with DNA and RNA synthesis; the two outer ones are added because they are what secure fidelity and proper function rather than chain length.",
      def_cn: "活化、起始、延长、终止、折叠与加工。中间三个是与 DNA、RNA 合成共用的通用格式；外面两个之所以被单列，是因为它们保障的是保真度与最终功能，而不是链的长度。" },
    { en: "the two requirements met by charging", cn: "充电一并满足的两个要求",
      def_en: "The carboxyl of each amino acid must be activated so a peptide bond can form (energy), and each amino acid must be linked to the mRNA information specifying it (information). Attaching the amino acid to a tRNA by an ester bond to the CCA end does both at once — which is why charging is a stage in its own right and not a preparatory detail.",
      def_cn: "每个氨基酸的羧基必须被活化，肽键才能形成（能量）；每个氨基酸必须与指定它的那段 mRNA 信息建立联系（信息）。通过一个酯键把氨基酸挂到 tRNA 的 CCA 末端，一次同时办成两件 —— 所以充电是一个独立的阶段，而不是一个准备性细节。" },
    { en: "the double sieve", cn: "双筛",
      def_en: "Two successive substrate-specific filters whose effects multiply. Filter one, the activation site, excludes anything larger than the correct amino acid; filter two, a separate hydrolytic site on the same enzyme, destroys anything small enough to have slipped through. Ile-tRNA synthetase turns a 200-fold preference into a 1-in-3,000 error rate this way; synthetases whose amino acid has no look-alike barely proofread at all.",
      def_cn: "两道先后串联、效果相乘的底物特异性过滤器。第一道是活化位点，排除一切比正确氨基酸更大的；第二道是同一个酶上另一个独立的水解位点，销毁一切小到能溜过第一道的。Ile-tRNA 合成酶就是这样把 200 倍的偏好变成三千分之一的错误率；而那些氨基酸没有相似替身的合成酶几乎不做校对。" },
    { en: "the ribosome never checks the cargo", cn: "核糖体从不检查货物",
      def_en: "A tRNA deliberately charged with the wrong amino acid has that amino acid efficiently incorporated at whatever codon its anticodon reads. So the synthetase is the sole guardian of which amino acid goes where; its mistakes are final and invisible downstream, and the wrong residue lands where the anticodon says, not where the amino acid would suggest.",
      def_cn: "一条被故意装上错误氨基酸的 tRNA，会让那个氨基酸被高效地掺入到「它的反密码子读到的那个密码子」的位置上。所以哪个氨基酸放在哪里，唯一的守门人是合成酶；它的错误是终局性的、对下游不可见，而错误的残基落在反密码子说的位置，不是这个氨基酸自身会暗示的位置。" },
    { en: "the second genetic code", cn: "第二套遗传密码",
      def_en: "The rules by which a synthetase recognises its own tRNA rather than its own amino acid. Discriminating positions cluster in the amino acid arm and the anticodon arm; ten or more nucleotides may be involved. In the alanine system a single G-U pair suffices, and a seven-base-pair hairpin carrying it is charged efficiently. Adding a new amino acid to the code therefore means building a new synthetase-tRNA pair.",
      def_cn: "合成酶用来认出「自己的 tRNA」（而不是「自己的氨基酸」）的那套规则。起区分作用的位置集中在氨基酸臂和反密码子臂；可能涉及十个以上核苷酸。丙氨酸系统里，一对 G-U 就够了，带着它的七碱基对发夹也能被高效充电。所以给密码新增一个氨基酸，就意味着造一套新的合成酶-tRNA 配对。" },
    { en: "peptidyl transferase is 23S rRNA", cn: "肽基转移酶就是 23S rRNA",
      def_en: "The activity that makes the peptide bond belongs to the 23S rRNA of the large subunit, not to any ribosomal protein: no protein lies within 18 Å of the active site. The subunits are huge RNA molecules with the proteins decorating the surface. Every peptide bond in every cell is therefore made by RNA — the ribosome is a ribozyme.",
      def_cn: "形成肽键的那个活性属于大亚基的 23S rRNA，而不属于任何核糖体蛋白：活性中心 18 Å 之内没有蛋白。两个亚基是巨大的 RNA 分子，蛋白只点缀在表面。所以每一个细胞里的每一个肽键都是 RNA 做出来的 —— 核糖体是一个核酶。" },
    { en: "A, P and E sites and the initiator's privilege", cn: "A、P、E 位与起始者的特权",
      def_en: "Aminoacyl, peptidyl and exit. A and P hold charged tRNAs; E holds only uncharged ones on their way out. The formylmethionyl-tRNA is the only charged tRNA that binds first to the P site, every other one entering at A — and during initiation IF1 physically blocks the A site. The formyl group both keeps the initiator out of internal positions and lets it bind the initiation site.",
      def_cn: "氨酰位、肽基位、出口位。A 和 P 容纳已充电的 tRNA；E 只容纳正在离场的未充电 tRNA。甲酰甲硫氨酰-tRNA 是唯一直接先结合 P 位的已充电 tRNA，其他每一条都从 A 位进入 —— 而起始过程中 IF1 实际堵住了 A 位。甲酰基既让起始者进不了内部位置，又让它能结合起始位点。" },
    { en: "Shine-Dalgarno sequence", cn: "Shine-Dalgarno 序列",
      def_en: "A purine-rich stretch of four to nine residues in the mRNA, 8 to 13 bp upstream of the initiation codon, that base-pairs with a complementary pyrimidine-rich stretch near the 3' end of the 16S rRNA. It is what distinguishes the starting AUG from every internal one, and it is one of the three independent recognitions that fix the initiator in the P site.",
      def_cn: "mRNA 上一段四到九个残基、富含嘌呤的序列，位于起始密码子上游 8 到 13 bp 处，与 16S rRNA 3′ 端附近一段富含嘧啶的互补序列配对。它正是把起始的 AUG 与所有内部 AUG 区分开的东西，也是把起始者锁在 P 位的三次独立识别之一。" },
    { en: "scanning versus base pairing", cn: "扫描 vs 碱基配对",
      def_en: "A bacterium locates the start codon by pairing a Shine-Dalgarno sequence to the 16S rRNA — a fixed landmark, which can be repeated for each gene on one message. A eukaryote locates it by loading at the 5' cap and scanning along until an AUG appears. That single difference is why bacterial mRNAs can carry several genes and eukaryotic ones essentially cannot.",
      def_cn: "细菌靠 Shine-Dalgarno 序列与 16S rRNA 配对来定位起始密码子 —— 那是一个固定地标，一条信息上每个基因都可以各有一个。真核靠在 5′ 帽处上样、沿着扫描到出现 AUG 为止。就这一条差别，决定了细菌 mRNA 能携带好几个基因，而真核 mRNA 基本上不能。" },
    { en: "accommodation", cn: "就位",
      def_en: "The conformational change that swings a newly bound tRNA's aminoacyl end into the peptidyl transferase site, after its anticodon has already docked in the decoding centre some 70 Å away. Binding and reacting are two separate motions, and the interval between them is what makes proofreading on the ribosome possible.",
      def_cn: "在反密码子已经在约 70 Å 之外的解码中心对接完成之后，把新结合的 tRNA 的氨酰端摆进肽基转移酶位点的那次构象变化。结合与反应是两个分开的动作，而两者之间的间隙正是核糖体上能够校对的前提。" },
    { en: "proofreading as a delay", cn: "作为「延迟」的校对",
      def_en: "The EF-Tu complexes with GTP and with GDP each last only a few milliseconds, and a wrongly paired tRNA falls out of the A site during one of those windows. A slowly hydrolysed GTP analogue lengthens the windows: fidelity improves and rate falls — the direct demonstration that translation balances speed against accuracy. It establishes only that codon and anticodon are paired, never which amino acid is aboard.",
      def_cn: "带 GTP 和带 GDP 的两种 EF-Tu 复合物各只存在几毫秒，配错的 tRNA 就在其中一个窗口里从 A 位掉出去。换用水解很慢的 GTP 类似物会拉长窗口：保真度上升、速率下降 —— 这是「翻译在速度与准确性之间取平衡」的直接证明。它只能确认密码子与反密码子配上了，永远说不出车上装的是哪个氨基酸。" },
    { en: "molecular mimicry on the ribosome", cn: "核糖体上的分子模仿",
      def_en: "Three separate things occupy tRNA seats by looking like tRNA. EF-G's carboxyl-terminal part mimics a tRNA anticodon loop in shape and charge distribution, so it can take the A site during translocation; release factors have domains thought to mimic tRNA; and puromycin mimics the 3' end of a charged tRNA. The ribosome's sites are shape-recognition devices, and they can be spoofed.",
      def_cn: "有三样东西靠「长得像 tRNA」占住 tRNA 的座位。EF-G 的羧基末端在形状和电荷分布上模仿 tRNA 的反密码子环，因此能在转位时占住 A 位；释放因子带有被认为模仿 tRNA 的结构域；嘌呤霉素模仿已充电 tRNA 的 3′ 端。核糖体的位点是形状识别装置，而形状识别是可以被冒充的。" },
    { en: "the cost of one peptide bond", cn: "一个肽键的代价",
      def_en: "More than four NTPs on average: two high-energy phosphates per charged tRNA, an extra ATP whenever proofreading destroys a wrongly activated amino acid, one GTP in delivery and one in translocation. At least 122 kJ/mol spent on a bond whose own hydrolysis releases about 21 kJ/mol. The over-payment buys a bond between two specified amino acids — energy as the price of information.",
      def_cn: "平均四个以上核苷三磷酸：每条已充电 tRNA 两个高能磷酸键，每次校对销毁错误活化的氨基酸再加一个 ATP，投递一个 GTP、转位一个 GTP。至少 122 kJ/mol 花在一个自身水解只放出约 21 kJ/mol 的键上。这笔超额支付买到的是「两个指定氨基酸之间」的键 —— 能量是信息的价钱。" },
    { en: "puromycin, chloramphenicol and cycloheximide", cn: "嘌呤霉素、氯霉素、放线菌酮",
      def_en: "Puromycin resembles the 3' end of a charged tRNA closely enough to enter the A site and accept the chain, but not closely enough to be translocated, so it falls off and ends synthesis early. Chloramphenicol blocks peptidyl transfer on bacterial, mitochondrial and chloroplast ribosomes; cycloheximide blocks only the eukaryotic 80S one, which is why it is a reagent and not a drug.",
      def_cn: "嘌呤霉素像已充电 tRNA 的 3′ 端像到足以进入 A 位并接下链，却不足以被转位，于是掉下来、提前终止合成。氯霉素阻断细菌、线粒体、叶绿体核糖体上的肽基转移；放线菌酮只阻断真核 80S 的那个 —— 所以它是试剂而不是药。" },
    { en: "diphtheria toxin and ricin", cn: "白喉毒素与蓖麻毒素",
      def_en: "The two protein toxins aimed at eukaryotic translation. Diphtheria toxin attaches an ADP-ribose group to a modified histidine of elongation factor eEF2 and inactivates it, so translocation stops. Ricin, from the castor bean, removes a specific adenine base from the 28S rRNA and thereby inactivates the large ribosomal subunit.",
      def_cn: "两种针对真核翻译的蛋白毒素。白喉毒素把一个 ADP-核糖基接到延长因子 eEF2 上一个被修饰过的组氨酸上，使其失活，转位停止。蓖麻毒素来自蓖麻子，从 28S rRNA 上摘掉一个特定的腺嘌呤碱基，由此使核糖体大亚基失活。" }
  ]
};

/* ===================================================================== L-28-1-1 */
window.BIOLITE_SPINE["L-28-1-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "hydrogen bond", "chromosome", "genome", "mRNA",
            "ribosome", "yeast", "lactose", "galactose", "glucose", "zinc",
            "asparagine", "glutamine", "glutamate", "lysine", "arginine",
            "thymine", "cytosine", "adenine", "guanine", "leucine", "proline",
            "alpha helix", "beta turn", "van der Waals", "double helix"],
  nodeTitle_en: "The proteins and RNAs of gene regulation",
  nodeTitle_cn: "基因调控的蛋白与 RNA",
  title_en: "How a protein finds one twenty-base-pair site among 4.6 million, and why no code tells it how",
  title_cn: "一个蛋白怎样在 460 万个碱基对里找到一个二十碱基对的位点，以及为什么没有任何密码告诉它怎么找",
  steps: [
    {
      en: "Regulating a gene costs energy — for many genes, especially in eukaryotes, a considerable investment of it. **That cost is nevertheless small beside the cost of actually transcribing and translating a gene that was not needed**, which is the whole justification for the machinery below. **Seven processes together set how much of a protein is present**: transcription initiation, processing of the transcript, how long the RNA survives, how much it is translated, chemical modification of the protein, where the protein is sent, and how fast it is destroyed. Control at the first of those, **transcription initiation**, is the best documented and is the subject here; it is also the only one that can **switch many genes with interdependent jobs together**, since it acts before anything gene-specific has been made.",
      cn: "调控一个基因是要花能量的 —— 对许多基因（尤其是真核基因）来说，花得还不少。**但这笔开销与「真的把一个不需要的基因转录并翻译出来」的开销相比仍然很小**，这正是下面这一整套机器存在的全部理由。**共有七个过程一起决定一个蛋白有多少**：转录起始、转录本的加工、这条 RNA 能存活多久、它被翻译多少、蛋白的化学修饰、蛋白被送到哪里，以及它被销毁得多快。其中第一个 —— **转录起始** —— 的控制被研究得最透，也是这里要讲的；而且它是唯一一个能**把多个职能互相依赖的基因一起开关**的环节，因为它作用在任何基因特异性产物被造出来之前。",
      src: "A p.1055"
    },
    {
      link_en: "and before any regulatory protein enters, the promoter is already regulating",
      link_cn: "而在任何调控蛋白登场之前，启动子自己就已经在调控了",
      en: "A **promoter** — the DNA sequence RNA polymerase binds in order to start transcribing the gene next to it — is not one fixed sequence. **Promoter sequences vary a great deal, which changes how tightly the polymerase binds and therefore how often transcription starts: some E. coli genes are transcribed once per second, others less than once per cell generation.** With no regulatory protein present at all, **promoter sequence alone can change the frequency of initiation by a factor of 1,000 or more**, and the direction is systematic — a mutation away from the consensus usually weakens a bacterial promoter and one toward it usually strengthens it. **One whole class of genes is regulated this way and no other**: genes whose products are needed at all times, such as the enzymes of central metabolism, are called **housekeeping genes**, they are expressed at a roughly constant level — **constitutive expression** — and for them the promoter sequence may be the only level of regulation there is. For every other gene, the promoter sets the **basal** rate that regulatory proteins then work on.",
      cn: "**启动子（promoter）**（RNA 聚合酶为了开始转录旁边那个基因而结合的那段 DNA）并不是一条固定的序列。**启动子序列差别很大，这改变了聚合酶结合得有多紧，也就改变了转录多久起始一次：有些大肠杆菌基因每秒转录一次，另一些还不到每代一次。**在完全没有调控蛋白的情况下，**单靠启动子序列就能让起始频率相差 1,000 倍以上**，而方向是有规律的 —— 偏离共有序列的突变通常削弱细菌启动子，靠近共有序列的通常增强它。**有一整类基因就只受这一种调控**：产物任何时候都需要的基因（比如中心代谢的那些酶）叫作**管家基因（housekeeping gene）**，它们的表达水平大致恒定 —— 这叫**组成型表达（constitutive expression）** —— 对它们来说，启动子序列可能就是全部的调控层级。对其他所有基因，启动子定下的是**基础**速率，调控蛋白在这个基础上再动手。",
      src: "A p.1056"
    },
    {
      link_en: "and one convention has to be stated before any of those sequences can be read",
      link_cn: "在读任何这些序列之前，必须先把一条约定说清楚",
      en: "**DNA sequences in this subject are always written as they exist in the nontemplate strand** — the strand whose sequence matches the RNA rather than the strand that is copied — **with the 5' end on the left, and numbered from the transcription start site, positive to the right and negative to the left.** So the E. coli consensus reads, left to right: an AT-rich UP element, then **TTGACA at -35**, then **TATAAT at -10**, then the start. **Read those off the copied strand instead and every promoter in this subject inverts into its reverse complement.**",
      cn: "**这个领域里的 DNA 序列，永远写成非模板链上的样子** —— 也就是序列与 RNA 一致的那条链，而不是被抄的那条 —— **5′ 端在左，从转录起点开始编号，向右为正、向左为负。**所以大肠杆菌的共有序列从左到右读是：一段富含 AT 的 UP 元件，然后是 **-35 处的 TTGACA**，然后是 **-10 处的 TATAAT**，然后是起点。**如果改成照被抄的那条链去读，这个领域里的每一个启动子都会翻成它的反向互补序列。**",
      src: "A p.1056",
      see: [{ id: "L-26-1-1", en: "the same convention, and the strand naming behind it", cn: "同一条约定，以及它背后的链命名" }]
    },
    {
      link_en: "everything else is done by three classes of protein, which produce four patterns of response",
      link_cn: "其余的都由三类蛋白完成，而它们给出四种响应模式",
      en: "**Specificity factors** change which promoters RNA polymerase will bind — the sigma subunits are exactly this, with σ⁷⁰ recognising most E. coli promoters and σ³² redirecting the same enzyme to the heat shock promoters. **Repressors** bind a site called an **operator** near a promoter and block the polymerase from binding or from moving on; **regulation by a repressor is called negative regulation**. **Activators** bind DNA and make the polymerase work better at that promoter, often at promoters the polymerase binds weakly or not at all, so that little happens without them; **this is positive regulation**. Now the four patterns, which is where a two-way switch model is not enough. A signal molecule can make a **repressor** let go of its operator, switching transcription **on**, or make it bind, switching transcription **off**. Symmetrically, a signal can make an **activator** let go, inhibiting transcription, or bind, inducing it. **So a signal can raise or lower transcription in either case, and the words positive and negative describe which kind of protein is involved, not which direction the signal pushes.** In eukaryotes an activator often binds an **enhancer** thousands of base pairs from the promoter; the intervening DNA loops out, helped by **architectural regulators** bound along the way, and the activator reaches the polymerase through go-between proteins called **coactivators**.",
      cn: "**特异性因子（specificity factor）**改变 RNA 聚合酶愿意结合哪些启动子 —— σ 亚基就是这一类：σ⁷⁰ 识别大肠杆菌的大多数启动子，σ³² 把同一个酶改派到热激启动子上。**阻遏蛋白（repressor）**结合在启动子附近一个叫**操纵基因（operator）**的位点上，挡住聚合酶结合或前进；**由阻遏蛋白实现的调控叫负调控（negative regulation）**。**激活蛋白（activator）**结合 DNA 并让聚合酶在该启动子上工作得更好，它们常出现在聚合酶本来结合很弱、甚至根本不结合的启动子旁，所以没有它们就几乎什么都不发生；**这叫正调控（positive regulation）**。接下来是四种模式 —— 一个「二档开关」的模型在这里不够用。一个信号分子可以让**阻遏蛋白**松开操纵基因，把转录**打开**；也可以让它结合上去，把转录**关掉**。对称地，一个信号可以让**激活蛋白**松开，从而抑制转录；也可以让它结合，从而诱导转录。**所以两种情况下信号都可能升高或降低转录，而「正」「负」两个字描述的是牵涉到哪一类蛋白，不是信号把转录往哪个方向推。**在真核里，激活蛋白常结合在离启动子几千个碱基对之外的**增强子（enhancer）**上；中间的 DNA 会环出去，由沿途结合的**建筑性调控因子（architectural regulator）**协助，而激活蛋白通过中间人蛋白 —— **共激活因子（coactivator）** —— 够到聚合酶。",
      src: "A p.1056"
    },
    {
      link_en: "and proteins are no longer the only regulators on the list",
      link_cn: "而调控者名单上，如今不只有蛋白",
      en: "A **long noncoding RNA**, or **lncRNA**, is defined by two purely operational criteria: it is **more than 200 nucleotides long**, which separates it from the small functional RNAs, and it **contains no open reading frame encoding a protein**, which separates it from an mRNA. Both can be checked from sequence alone. **Tens of thousands are expressed in a mammalian cell**, and their known jobs are given as a list rather than as one mechanism, because the class is defined by what it is not: positioning nucleosomes, altering chromatin structure, controlling DNA methylation and histone modification, silencing transcription, and both activating and repressing it.",
      cn: "**长非编码 RNA（long noncoding RNA，lncRNA）**由两条纯粹操作性的判据定义：它**长于 200 个核苷酸**，这把它与小型功能 RNA 分开；它**不含编码蛋白的开放阅读框**，这把它与 mRNA 分开。两条都可以只凭序列判定。**哺乳动物细胞里有几万种在表达**，而它们已知的职能只能列成清单、给不出单一机制，因为这一类是用「它不是什么」来定义的：给核小体定位、改变染色质结构、控制 DNA 甲基化与组蛋白修饰、使转录沉默，以及既激活也抑制转录。",
      src: "A p.1056",
      see: [{ id: "L-28-3-1", en: "two lncRNAs doing specific jobs, one of them in tumours", cn: "两个各司其职的 lncRNA，其中一个与肿瘤相关" }]
    },
    {
      link_en: "bacteria coordinate genes by a trick of arrangement that eukaryotes cannot use",
      link_cn: "细菌靠一种排列上的花招来协调基因，而真核用不了这一招",
      en: "Many bacterial mRNAs are **polycistronic** — several genes on a single transcript — so **one promoter is the point of regulation for all of them at once**. A cluster of genes plus its promoter and the sequences that regulate it is an **operon**. Two to six genes is common and some operons hold twenty or more. **The identity and order of the genes in an operon are not random**: genes in one operon often encode subunits of a single protein complex, and because those subunits are made from one transcript, on adjacent ribosomes, at the same time and place, **being translated together directly enables them to assemble.** Gene order on the chromosome is therefore a statement about how a protein complex is built, not only about how it is regulated. In 1960 François Jacob and Jacques Monod described two adjacent lactose-metabolism genes — one for **β-galactosidase**, which cleaves lactose into galactose and glucose, one for **galactoside permease**, which carries lactose into the cell — being regulated together by an element at one end of the cluster. **That paper introduced the words operon and operator, and with it gene regulation could be discussed in molecular terms for the first time.** In higher eukaryotes almost every protein-coding gene is transcribed on its own, which is why the coordination has to be done some other way.",
      cn: "许多细菌 mRNA 是**多顺反子的（polycistronic）** —— 一条转录本上有好几个基因 —— 所以**一个启动子同时就是这些基因全部的调控点**。一簇基因加上它的启动子以及调控它的那些序列，叫一个**操纵子（operon）**。二到六个基因是常见的，有些操纵子含二十个以上。**一个操纵子里基因的身份和顺序都不是随机的**：同一操纵子里的基因常常编码同一个蛋白复合物的各个亚基，而由于这些亚基出自同一条转录本、在相邻的核糖体上、在同一时间同一地点被造出来，**被一起翻译这件事本身就直接让它们能够组装。**所以染色体上的基因顺序，说的是一个蛋白复合物怎么被搭起来，而不只是它怎么被调控。1960 年 François Jacob 与 Jacques Monod 描述了两个相邻的乳糖代谢基因 —— 一个编码 **β-半乳糖苷酶**，把乳糖切成半乳糖和葡萄糖；一个编码**半乳糖苷透过酶**，把乳糖运进细胞 —— 它们被基因簇一端的一个元件一起调控。**那篇论文引入了「操纵子」和「操纵基因」这两个词，基因调控从此第一次可以用分子的语言讨论。**在高等真核里，几乎每个编码蛋白的基因都是单独转录的，所以协调必须换个办法来做。",
      src: "A p.1058"
    },
    {
      link_en: "and the lac operon carries one piece of logic that is easy to miss and completely decides how it works",
      link_cn: "而乳糖操纵子里有一处逻辑很容易被漏掉，却完全决定了它怎么运作",
      en: "The **Lac repressor** binds the main operator plus one of two secondary sites nearby, with the DNA between them looped out; either arrangement blocks initiation. The numbers matter: **binding lowers the rate of initiation by a factor of 10³, and by only about 10² if the two secondary sites are deleted**, so those secondary sites are worth a full order of magnitude. Now the piece of logic. **Repression is not absolute** — a repressed cell still holds a few molecules of β-galactosidase and permease, made on the rare occasions when the repressor lets go — **and that residue is essential, because the molecule that actually induces the operon is not lactose but allolactose, an isomer of lactose.** Lactose has to be carried in by the few pre-existing permease molecules and converted to allolactose by the few pre-existing β-galactosidase molecules. **A perfectly tight switch could never be turned on by its own substrate.** **Induction** — the switching-on of an operon by its own signal molecule — then raises β-galactosidase 10³-fold, exactly undoing the repression. One tool follows from this: **IPTG** is a galactoside that induces the operon and **cannot be metabolised**, so it separates lactose's role as food from its role as signal — which is why it appears in every induction protocol.",
      cn: "**Lac 阻遏蛋白**结合主操纵基因，外加附近两个次级位点之一，中间的 DNA 环出去；两种排布都能挡住起始。数字很重要：**结合上去把起始速率降到千分之一（10³ 倍），而如果把两个次级位点删掉，就只降到百分之一（约 10² 倍）** —— 所以那两个次级位点值整整一个数量级。接下来是那处逻辑。**阻遏并不是绝对的** —— 处于阻遏状态的细胞里仍然留有少数几个 β-半乳糖苷酶和透过酶分子，来自阻遏蛋白偶尔松手的那些时刻 —— **而这点残余是必不可少的，因为真正诱导这个操纵子的分子不是乳糖，而是异构乳糖（allolactose），乳糖的一个异构体。**乳糖必须先由那几个已经存在的透过酶分子运进来，再由那几个已经存在的 β-半乳糖苷酶分子转成异构乳糖。**一个关得严丝合缝的开关，永远没法被它自己的底物打开。**诱导随后把 β-半乳糖苷酶提高 10³ 倍，恰好抵消阻遏。由此产生一个工具：**IPTG** 是一种能诱导该操纵子、却**不能被代谢**的半乳糖苷，它把乳糖「作为食物」的角色与「作为信号」的角色分开 —— 这正是它出现在每一份诱导实验方案里的原因。",
      src: "A p.1059"
    },
    {
      link_en: "so now the question none of the above has answered: how does a protein find its one site?",
      link_cn: "现在轮到上面全都没有回答的那个问题：一个蛋白怎么找到属于它的那一个位点？",
      en: "The budget first. **A regulatory protein binds its target sequence 10⁴ to 10⁶ times more tightly than it binds any other DNA sequence**, using a compact **DNA-binding domain** — a self-contained region of the protein that does the binding — of only 60 to 90 amino acid residues, with the part actually touching the DNA smaller still. Where does that discrimination come from? **From the major groove**, the wider of the two grooves that spiral along a double helix. **Most of the chemical groups that differ between one base pair and another are hydrogen-bond donors and acceptors exposed in the major groove**, and most of the protein-DNA contacts that decide specificity are hydrogen bonds. Contacts in the **minor groove** are possible, but the hydrogen-bonding patterns there do not distinguish one base pair from another. **There is exactly one nonpolar exception, and it is the only shape-based read in the system: the surface near C-5 of a pyrimidine, where thymine is told from cytosine by its protruding methyl group.**",
      cn: "先算账。**一个调控蛋白结合自己的目标序列，比结合任何其他 DNA 序列紧 10⁴ 到 10⁶ 倍**，用的是一个只有 60 到 90 个氨基酸残基的紧凑**DNA 结合结构域（DNA-binding domain）**，其中真正碰到 DNA 的那部分还更小。这份分辨力从哪来？**从大沟（major groove）来** —— 也就是沿双螺旋盘旋的两条沟里较宽的那条。**碱基对之间彼此不同的那些化学基团，大多是暴露在大沟里的氢键供体和受体**，而决定特异性的蛋白-DNA 接触也大多是氢键。**小沟（minor groove）**里也可以有接触，但那里的氢键模式区分不出一个碱基对与另一个。**恰好有一个非极性的例外，也是整个系统里唯一一次靠形状读取：嘧啶 C-5 附近的那个表面 —— 胸腺嘧啶靠它突出来的甲基与胞嘧啶区分开。**",
      src: "A p.1060"
    },
    {
      link_en: "and if it is all hydrogen bonds, you would expect a code. There is none",
      link_cn: "既然全靠氢键，你会预期存在一套密码。并没有",
      en: "On the protein side, the side chains that hydrogen-bond to bases most often are those of **Asn, Gln, Glu, Lys and Arg**. Some pairings are clean enough to look like a code: **the two hydrogen bonds Gln or Asn can make to the N-6 and N-7 positions of adenine cannot form with any other base, and Arg can make two to the N-7 and O-6 of guanine.** But examining many structures showed that **a protein can recognise the same base pair in more than one way** — one protein reads an A=T pair with a Gln-adenine contact, another reads it with a van der Waals pocket that fits thymine's methyl group. **So there is no simple amino-acid-to-base code**, and the practical consequence is stated bluntly: **nobody can yet look at the structure of a DNA-binding protein and infer the DNA sequence it binds.**",
      cn: "在蛋白这一侧，最常与碱基形成氢键的侧链是 **Asn、Gln、Glu、Lys、Arg**。有些配对干净得像是一套密码：**Gln 或 Asn 与腺嘌呤 N-6、N-7 之间能形成的那两个氢键，与任何其他碱基都形不成；Arg 与鸟嘌呤的 N-7 和 O-6 之间也能形成两个。**但把大量结构看过去之后发现，**同一个碱基对，一个蛋白可以用不止一种方式识别** —— 有的蛋白用 Gln 与腺嘌呤的接触来读一个 A=T，有的用一个正好容纳胸腺嘧啶甲基的范德华口袋来读同一个 A=T。**所以并不存在一套简单的「氨基酸对碱基」的密码**，而实际后果说得很直白：**目前还没有人能看着一个 DNA 结合蛋白的结构，就推断出它结合的 DNA 序列。**",
      src: "A p.1061",
      openQuestion_en: "Whether some more complex set of recognition rules exists, and could one day let a binding sequence be predicted from a structure, is open.",
      openQuestion_cn: "是否存在某套更复杂的识别规则、将来能让人从结构预测出结合序列，这个问题仍然开放。"
    },
    {
      link_en: "one site of twenty base pairs is short. Symmetry is how the shortness is made up for",
      link_cn: "二十个碱基对的位点太短了。补上这份短的办法是对称",
      en: "**The binding sites for regulatory proteins are often inverted repeats — a short sequence followed by its own reverse complement — and two subunits of the same protein bind them cooperatively**, one on each half, so the protein reads twice as much sequence as any one subunit could. That is the structural reason the lac operator is very nearly a palindrome. The Lac repressor is unusual even so: **it is a tetramer built as two tethered dimers, each dimer contacting 17 bp within a 22 bp region**, and there are only about **20 tetramers in a cell**. It binds its site with a dissociation constant near **10⁻¹⁰ M** and discriminates against other DNA by about **10⁶** — the budget of two steps ago, met in a real protein.",
      cn: "**调控蛋白的结合位点常常是反向重复 —— 一小段序列后面跟着它自己的反向互补序列 —— 而同一个蛋白的两个亚基协同地结合上去**，一边一个，于是这个蛋白读到的序列长度是任何单个亚基所能读的两倍。这正是乳糖操纵基因几乎是回文的结构性原因。饶是如此，Lac 阻遏蛋白仍然特别：**它是一个四聚体，由两个拴在一起的二聚体构成，每个二聚体在一个 22 bp 的区域内接触 17 bp**，而一个细胞里只有约 **20 个四聚体**。它结合自己位点的解离常数接近 **10⁻¹⁰ M**，对其他 DNA 的分辨约为 **10⁶** 倍 —— 两步之前算的那笔账，在一个真实的蛋白身上兑现了。",
      src: "A p.1061"
    },
    {
      link_en: "and reaching into a groove requires a small structure, which is exactly what is hard to build",
      link_cn: "而伸进一条沟里需要一个小结构 —— 而小结构恰恰是最难做的",
      en: "To touch bases inside the major groove, a protein needs a **small substructure that protrudes stably from its surface**, and small structures are intrinsically unstable, because there is not enough of them to bury a hydrophobic core. The recognised **DNA-binding motifs** are the solutions to that problem. **The helix-turn-helix is about 20 residues in two short α-helical segments of 7 to 9 residues each, joined by a β turn.** It is not stable on its own — it is the working part of a larger domain — and **one of its two helices is the recognition helix, stacked against the rest of the protein so that it sticks out, and it lies in or nearly in the major groove when bound.** The Lac repressor has one. **The zinc finger is about 30 residues forming an elongated loop pinched together at its base by a single Zn²⁺ ion, held by four Cys residues or by two Cys and two His.** The point most often got wrong: **the zinc never touches the DNA** — it only holds the small motif in shape. **One zinc finger binds DNA weakly, so proteins carry several and bind with all of them at once**: the protein Zif268 has three, and one frog DNA-binding protein has 37. Zinc fingers are common in eukaryotes and there are few known bacterial examples.",
      cn: "要碰到大沟内部的碱基，蛋白需要一个**能稳定地从表面伸出来的小结构**，而小结构天生不稳定，因为它没有足够的体量把疏水核心埋起来。那几个被认出来的 **DNA 结合基序（DNA-binding motif）**就是这个问题的解法。**螺旋-转角-螺旋（helix-turn-helix）约 20 个残基，是两段各 7 到 9 个残基的短 α 螺旋，由一个 β 转角连起来。**它自己单独并不稳定 —— 它是一个更大结构域里干活的那部分 —— 而**两段螺旋中的一段叫识别螺旋（recognition helix），它靠在蛋白其余部分上从而突出出来，结合时正好或几乎正好躺在大沟里。**Lac 阻遏蛋白就有一个。**锌指（zinc finger）约 30 个残基，形成一个细长的环，环的根部被单个 Zn²⁺ 掐住，由四个 Cys、或两个 Cys 加两个 His 固定。**最常被弄错的一点：**锌本身从不碰 DNA** —— 它只是把这个小基序的形状撑住。**单个锌指与 DNA 结合得很弱，所以蛋白带好几个、一起上**：蛋白 Zif268 有三个，一种蛙的 DNA 结合蛋白有 37 个。锌指在真核里很常见，细菌里已知的例子很少。",
      src: "A p.1061"
    },
    {
      link_en: "two more binding motifs, one of which is named after the genes it was found in",
      link_cn: "还有两个结合基序，其中一个的名字来自它被发现时所在的那些基因",
      en: "**The homeodomain is 60 residues long, and its DNA-binding segment is related to the helix-turn-helix.** It is named after the **homeotic genes**, the genes that decide which body part develops where, in which it was first found, and it is highly conserved from flies to humans; **the stretch of DNA encoding it is called the homeobox.** **The RNA recognition motif, or RRM, is 90 to 100 residues arranged as a four-strand antiparallel β sheet packed against two α helices.** It occurs in some eukaryotic activators, where it may do double duty and bind both DNA and RNA — **and an activator with one can be regulated by an lncRNA that competes with the DNA for the same surface**, which is how the RNA regulators of an earlier step act directly on a protein regulator.",
      cn: "**同源异型域（homeodomain）长 60 个残基，其 DNA 结合片段与螺旋-转角-螺旋同源。**它的名字来自**同源异型基因（homeotic gene）** —— 决定哪个身体部件长在哪里的那些基因，它最初就是在那里被发现的 —— 而且从果蝇到人高度保守；**编码它的那段 DNA 叫同源异型框（homeobox）。RNA 识别基序（RNA recognition motif，RRM）有 90 到 100 个残基，排成一个四股反平行 β 折叠，贴着两条 α 螺旋。**它出现在一些真核激活蛋白里，在那里可能身兼两职、既结合 DNA 也结合 RNA —— **而带有这个基序的激活蛋白，可以被一条 lncRNA 调控：这条 RNA 与 DNA 争夺同一个表面**，这正是前面说的那些 RNA 调控者直接作用于一个蛋白调控者的方式。",
      src: "A p.1062"
    },
    {
      link_en: "and a regulatory protein needs a second kind of domain — for touching other proteins, not DNA",
      link_cn: "调控蛋白还需要第二类结构域 —— 用来碰别的蛋白，而不是碰 DNA",
      en: "Many eukaryotic activators bind DNA **as dimers**, and some of their structural domains exist purely to make the dimer — **so dimerisation is not an accessory; it is generally a prerequisite, and without it there is no DNA binding at all.** **The leucine zipper is an amphipathic α helix with hydrophobic residues concentrated on one face, and that face is the contact surface between the two polypeptides of a dimer**; its signature is **a Leu residue at every seventh position**, forming a straight line up the hydrophobic side. **The name records a picture that turned out to be wrong: the Leu residues were first thought to interdigitate like the teeth of a zip, and they in fact lie side by side as the two helices wind around each other into a coiled coil.** A protein with a leucine zipper usually has a **separate** DNA-binding region, rich in the basic residues Lys and Arg, which grip the negatively charged phosphates of the backbone — **the zipper makes the dimer, the basic region binds the DNA.** **The basic helix-loop-helix is about 50 residues forming two short amphipathic helices joined by a loop, and it is a different thing from the helix-turn-helix despite the names**: helix-loop-helix mediates dimerisation, with an adjacent basic sequence again doing the DNA binding.",
      cn: "许多真核激活蛋白是**以二聚体的形式**结合 DNA 的，而它们的某些结构域纯粹是为了形成二聚体而存在 —— **所以二聚化不是附属功能；它通常是前提条件，没有它就根本不会结合 DNA。亮氨酸拉链（leucine zipper）是一条两亲性 α 螺旋，疏水残基集中在一个面上，而这个面就是二聚体两条多肽之间的接触面**；它的标志是**每隔七个位置出现一个 Leu**，在疏水面上排成一条直线。**这个名字记录的是一幅后来被证明错了的图像：当初以为这些 Leu 像拉链齿一样彼此交错插入，实际上它们是并排排列的 —— 两条螺旋互相盘绕成一个卷曲螺旋。**带亮氨酸拉链的蛋白通常另有一个**独立的** DNA 结合区，富含碱性残基 Lys 和 Arg，用来抓住骨架上带负电的磷酸 —— **拉链负责做二聚体，碱性区负责结合 DNA。碱性螺旋-环-螺旋（basic helix-loop-helix）约 50 个残基，形成由一个环连起来的两条短两亲性螺旋；尽管名字像，它与螺旋-转角-螺旋是两回事**：螺旋-环-螺旋负责二聚化，仍然由旁边一段碱性序列去结合 DNA。",
      src: "A p.1063"
    },
    {
      link_en: "and dimerisation is what makes the final counting problem come out right",
      link_cn: "而正是二聚化，让最后那个计数问题算得过来",
      recall_en: "the dimers of the step above, now counted rather than described",
      recall_cn: "上一步说的二聚体，这一步不是描述它，而是数它",
      en: "Feel the counting problem before the answer. In a eukaryote most genes are transcribed on their own and most need an activator, so **if each gene needed its own dedicated activator, the number of activator genes would have to equal the number of regulated genes and the genome would spend itself regulating itself.** The observed numbers say otherwise: **in yeast about 300 transcription factors regulate many thousands of genes.** The resolution comes in two multiplying steps. **First, the mapping is many-to-many: most genes are regulated by several factors at once, so what specifies a gene is the combination of factors at it rather than any one unique factor — this is combinatorial control.** **Second, the repertoire itself is multiplied by dimerisation**, because within one structural family a dimer can form between two identical proteins, a **homodimer**, or between two different members, a **heterodimer**. Do the arithmetic once: **a family of four different leucine-zipper proteins gives up to ten dimeric species** — four homodimers plus the six possible pairs — and different combinations regulate different genes. **A small number of protein types generates a large number of distinct regulators, and those are then combined again at each promoter. That double multiplication is how 300 factors cover thousands of genes.**",
      cn: "先感受一下这个计数问题，再看答案。在真核里，大多数基因是各自单独转录的，而且大多数需要一个激活蛋白，**如果每个基因都需要一个专属的激活蛋白，那么激活蛋白基因的数目就必须等于被调控基因的数目，基因组会把自己耗在调控自己上。**实测数字并非如此：**酵母里约 300 个转录因子调控着数千个基因。**解法分两步，而且是相乘的。**第一，这个映射是多对多的：大多数基因同时被好几个因子调控，所以决定一个基因身份的是「这个基因上那一组因子的组合」，而不是某一个独一无二的因子 —— 这叫组合式控制（combinatorial control）。第二，可用的因子清单本身又被二聚化乘了一遍**，因为在同一个结构家族内部，二聚体既可以由两个相同的蛋白组成（**同源二聚体，homodimer**），也可以由两个不同成员组成（**异源二聚体，heterodimer**）。把这笔账算一次：**四种不同的亮氨酸拉链蛋白构成的家族，最多可以给出十种二聚体** —— 四个同源二聚体加上六种可能的配对 —— 而不同的组合调控不同的基因。**少数几种蛋白类型生成大量彼此不同的调控实体，而这些实体又在每个启动子上被再组合一次。正是这两次相乘，让 300 个因子覆盖了数千个基因。**",
      src: "A p.1065",
      see: [{ id: "L-28-3-1", en: "combinatorial control worked out with real numbers, and why eukaryotes use positive control", cn: "用真实数字算清楚的组合式控制，以及真核为什么用正调控" }]
    }
  ],
  terms: [
    { en: "constitutive expression and housekeeping genes", cn: "组成型表达与管家基因",
      def_en: "Genes whose products are needed at all times, such as the enzymes of central metabolism, are expressed at a roughly constant level. For them the promoter sequence may be the only level of regulation there is, since promoter sequence alone can vary initiation frequency by a factor of 1,000 or more.",
      def_cn: "产物任何时候都需要的基因（比如中心代谢的那些酶）以大致恒定的水平表达。对它们来说，启动子序列可能就是全部的调控层级 —— 单靠启动子序列就能让起始频率相差 1,000 倍以上。" },
    { en: "the three classes of regulatory protein", cn: "调控蛋白的三大类",
      def_en: "Specificity factors change which promoters the polymerase will bind (the sigma subunits; σ³² redirects it to heat shock promoters). Repressors bind operators and impede the polymerase — negative regulation. Activators bind DNA and improve the polymerase's work at that promoter — positive regulation. Positive and negative name the protein, not the direction the signal pushes.",
      def_cn: "特异性因子改变聚合酶会结合哪些启动子（σ 亚基；σ³² 把它改派到热激启动子）。阻遏蛋白结合操纵基因、阻碍聚合酶 —— 这是负调控。激活蛋白结合 DNA、让聚合酶在该启动子上干得更好 —— 这是正调控。「正」「负」说的是蛋白的类型，不是信号推的方向。" },
    { en: "enhancer, DNA looping, coactivator", cn: "增强子、DNA 成环、共激活因子",
      def_en: "A eukaryotic activator often binds an enhancer thousands of base pairs from the promoter. The intervening DNA loops out, helped by architectural regulators bound along the way, and the activator reaches the polymerase through go-between proteins called coactivators.",
      def_cn: "真核激活蛋白常结合在离启动子几千个碱基对之外的增强子上。中间的 DNA 环出去，由沿途结合的建筑性调控因子协助，而激活蛋白通过中间人蛋白（共激活因子）够到聚合酶。" },
    { en: "long noncoding RNA", cn: "长非编码 RNA",
      def_en: "A noncoding RNA more than 200 nucleotides long that carries no protein-encoding open reading frame — the length separating it from small functional RNAs, the missing reading frame from mRNA, and both checkable from sequence alone. Tens of thousands are expressed in a mammalian cell; jobs include nucleosome positioning, chromatin structure, DNA methylation, silencing, activation and repression.",
      def_cn: "长于 200 个核苷酸、且不含编码蛋白的开放阅读框的非编码 RNA —— 长度把它与小型功能 RNA 分开，缺阅读框把它与 mRNA 分开，两条都可只凭序列判定。哺乳动物细胞里有几万种在表达；职能包括核小体定位、染色质结构、DNA 甲基化、沉默、激活与抑制。" },
    { en: "polycistronic mRNA and gene order", cn: "多顺反子 mRNA 与基因顺序",
      def_en: "Several genes on one bacterial transcript, so one promoter regulates them all; two to six genes is common, some operons hold twenty or more. Gene order is not random — genes in one operon often encode subunits of a single complex, and being translated together on adjacent ribosomes at the same time and place directly enables them to assemble.",
      def_cn: "一条细菌转录本上有好几个基因，于是一个启动子把它们全管了；二到六个常见，有些操纵子含二十个以上。基因顺序不是随机的 —— 同一操纵子里的基因常编码同一复合物的各亚基，而在同一时间地点、在相邻核糖体上被一起翻译，直接使它们能够组装。" },
    { en: "basal transcription as the precondition for induction", cn: "基础转录是诱导的前提",
      def_en: "Lac repression is not absolute: it lowers initiation 10³-fold, or only ~10²-fold without the two secondary operators, leaving a few permease and β-galactosidase molecules per cell. That residue is essential, because the inducer is allolactose, not lactose — lactose must be admitted by pre-existing permease and isomerised by pre-existing β-galactosidase. A perfectly tight switch could not be turned on.",
      def_cn: "乳糖操纵子的阻遏不是绝对的：它把起始降到千分之一，若没有那两个次级操纵基因则只降到约百分之一，于是每个细胞里仍留有几个透过酶和 β-半乳糖苷酶分子。这点残余必不可少，因为诱导物是异构乳糖而不是乳糖 —— 乳糖必须由已存在的透过酶运进来、由已存在的 β-半乳糖苷酶转成异构乳糖。关得严丝合缝的开关是打不开的。" },
    { en: "the major groove as the read surface", cn: "作为读取面的大沟",
      def_en: "Most of the groups that differ between base pairs are hydrogen-bond donors and acceptors exposed in the major groove, and most specificity-determining protein-DNA contacts are hydrogen bonds. The minor groove's hydrogen-bonding patterns do not discriminate. The single nonpolar exception is thymine, told from cytosine by its protruding methyl group near C-5.",
      def_cn: "碱基对之间彼此不同的基团大多是暴露在大沟里的氢键供体和受体，而决定特异性的蛋白-DNA 接触也大多是氢键。小沟里的氢键模式无法区分碱基对。唯一的非极性例外是胸腺嘧啶 —— 靠 C-5 附近突出的甲基与胞嘧啶区分开。" },
    { en: "no amino-acid-to-base code", cn: "不存在氨基酸对碱基的密码",
      def_en: "Asn, Gln, Glu, Lys and Arg do most of the base hydrogen bonding, and some pairings are clean — Gln or Asn to adenine N-6 and N-7, Arg to guanine N-7 and O-6. But a protein can recognise the same base pair in more than one way, so no code exists, and a binding sequence still cannot be inferred from a structure.",
      def_cn: "与碱基形成氢键的主要是 Asn、Gln、Glu、Lys、Arg，其中一些配对很干净 —— Gln 或 Asn 对腺嘌呤的 N-6 与 N-7，Arg 对鸟嘌呤的 N-7 与 O-6。但同一个碱基对可以被一个蛋白用不止一种方式识别，所以并不存在这样的密码，也仍然无法从结构推出结合序列。" },
    { en: "helix-turn-helix and zinc finger", cn: "螺旋-转角-螺旋与锌指",
      def_en: "Two DNA-binding motifs. Helix-turn-helix: about 20 residues in two short helices joined by a β turn, one of them the recognition helix that lies in the major groove; the Lac repressor has one. Zinc finger: about 30 residues held at the base by one Zn²⁺ on four Cys or two Cys and two His — the zinc never touches DNA — and each finger binds weakly, so proteins carry several (Zif268 three, one frog protein 37).",
      def_cn: "两个 DNA 结合基序。螺旋-转角-螺旋：约 20 个残基，两条短螺旋由一个 β 转角连接，其中一条是躺在大沟里的识别螺旋；Lac 阻遏蛋白就有一个。锌指：约 30 个残基，根部由一个 Zn²⁺ 通过四个 Cys 或两 Cys 两 His 掐住 —— 锌本身从不碰 DNA —— 单指结合很弱，所以蛋白带好几个（Zif268 三个，某种蛙的蛋白 37 个）。" },
    { en: "leucine zipper versus helix-loop-helix", cn: "亮氨酸拉链 vs 螺旋-环-螺旋",
      def_en: "Both mediate dimerisation rather than DNA binding, with a separate basic region doing the binding. The leucine zipper is an amphipathic helix with Leu at every seventh position; the residues lie side by side as the helices wind into a coiled coil rather than interdigitating as the name suggests. The basic helix-loop-helix is about 50 residues, two short helices and a loop, and is a different thing from the helix-turn-helix.",
      def_cn: "两者负责的都是二聚化而不是结合 DNA，结合 DNA 的是另一段碱性区。亮氨酸拉链是每隔七位一个 Leu 的两亲性螺旋；这些残基是并排排列、两条螺旋盘成卷曲螺旋，而不是像名字暗示的那样交错插入。碱性螺旋-环-螺旋约 50 个残基，两条短螺旋加一个环，与螺旋-转角-螺旋是两回事。" },
    { en: "combinatorial control", cn: "组合式控制",
      def_en: "About 300 yeast transcription factors regulate thousands of genes, because most genes are read by several factors at once, so identity comes from the combination rather than from any unique factor. Dimerisation multiplies the repertoire again: a family of four leucine-zipper proteins gives up to ten dimeric species, four homodimers plus six pairs.",
      def_cn: "酵母约 300 个转录因子调控数千个基因，因为大多数基因同时被好几个因子读取，所以特异性来自组合而不是来自某个独一无二的因子。二聚化又把清单乘了一遍：四种亮氨酸拉链蛋白的家族最多给出十种二聚体，即四个同源二聚体加六种配对。" }
  ]
};

/* ===================================================================== L-28-3-1 */
window.BIOLITE_SPINE["L-28-3-1"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "chromosome", "genome", "mRNA", "nucleus", "cytoplasm",
            "yeast", "galactose", "glucose", "zinc", "lysine", "arginine",
            "serine", "threonine", "proline", "glutamine", "histidine",
            "cortisol", "estrogen", "progesterone", "testosterone", "insulin",
            "vitamin D", "thyroxine", "collagen", "hemoglobin", "heme", "iron",
            "bone marrow", "placenta", "fruit fly", "mouse", "cancer", "tumour",
            "HIV", "poliovirus", "alpha helix", "double helix"],
  nodeTitle_en: "Regulation of gene expression in eukaryotes",
  nodeTitle_cn: "真核生物的基因表达调控",
  title_en: "Why a eukaryotic gene is off until something turns it on, and what has to be dismantled first",
  title_cn: "为什么真核基因在被打开之前一直是关着的，以及在那之前必须先拆掉什么",
  steps: [
    {
      en: "**The transcriptional ground state is the activity of a promoter and the transcription machinery in a living cell with no regulatory sequences present** — what happens by default. **In bacteria that state is on**: RNA polymerase reaches essentially every promoter and initiates at some level with no activator and no repressor, which is why bacterial regulation is so often a repressor switching something off. **In eukaryotes that state is off**: a strong promoter is inactive in a living cell unless regulatory proteins act on it, and almost every gene needs activating to be transcribed at all. **Five things follow from that single inversion**, and they are the outline of everything below: access to a promoter is restricted by how the DNA is packaged; positive mechanisms dominate over negative ones; regulation by long noncoding RNAs is far more common; regulatory proteins are larger and are assemblies of several subunits; and transcription in the nucleus is separated from translation in the cytoplasm in both space and time. **Carrying across the bacterial operon picture — a cluster of genes under one promoter, held shut by a repressor until a signal pulls it off — gets the sign of the whole system backwards.**",
      cn: "**转录基态（transcriptional ground state）是指：在活细胞里、没有任何调控序列在场时，一个启动子与转录机器所具有的活性** —— 也就是默认状态下会发生什么。**细菌的这个状态是「开」**：RNA 聚合酶基本上能够到每一个启动子，在没有激活蛋白也没有阻遏蛋白的情况下就能以某个水平起始 —— 这正是细菌调控里最常见的事件是「阻遏蛋白把某个东西关掉」的原因。**真核的这个状态是「关」**：一个强启动子在活细胞里，若没有调控蛋白对它动手，就是不活动的；而几乎每个基因都需要被激活才会被转录。**仅由这一次反转，就推出五件事**，它们正是下文的提纲：启动子的可及性受 DNA 包装方式限制；正向机制压倒负向机制；由长非编码 RNA 实现的调控常见得多；调控蛋白更大，而且是多亚基的组装体；核内的转录与胞质内的翻译在空间和时间上都被分开。**把操纵子那套图景搬过来，会把整个系统的正负号弄反。**",
      src: "A p.1075",
      see: [{ id: "L-28-1-1", en: "the operon and the three classes of regulatory protein", cn: "操纵子，以及调控蛋白的三大类" }]
    },
    {
      link_en: "so start where the default comes from: the packaging",
      link_cn: "那就从默认状态的来源讲起：包装",
      en: "Eukaryotic DNA is wound around protein spools called **nucleosomes** and packed into **chromatin**. **About 10% of the chromatin in a typical cell is in a more condensed form called heterochromatin, which is transcriptionally inactive** and is generally found at particular chromosome structures such as centromeres; the rest, less condensed, is **euchromatin**. And the standard trap: **some, but not all, of the euchromatin is transcriptionally active — euchromatin is where transcription can happen, not where it is happening.** **Transcriptionally active regions differ from heterochromatin in exactly three measurable ways: where the nucleosomes sit, which variant histone proteins are in them, and which chemical groups have been attached to those proteins.** Changing those three is collectively called **chromatin remodeling**, and it has two effects: **it makes a stretch of chromosome physically accessible, and it labels that stretch chemically so the right regulatory proteins will bind there.** The physical half of that work is done by four families of ATP-driven **remodeler** — machines that unwrap, slide, remove or exchange nucleosomes. **SWI/SNF ejects nucleosomes from the DNA near transcription start sites**, in a reversible cycle: it engulfs a nucleosome and spends ATP peeling the DNA partly off, exposing a binding site; once a transcription factor has bound there the nucleosome is ejected; and when transcription is no longer wanted a nucleosome can be put back, displacing the factor again. **ISWI mostly does the opposite, tidying the spacing of nucleosomes so that chromatin can be assembled and silenced.** **CHD does both, depending on which member of the family it is.** **INO80 remodels both for transcription and for DNA repair, and its relative SWR1 swaps one histone pair out of a nucleosome for a variant pair** — installing exactly the variant that marks a region as active. **So a cell keeps several specialised machines, some of which open chromatin and some of which close it.**",
      cn: "真核 DNA 缠在叫作**核小体（nucleosome）**的蛋白线轴上，打包成**染色质（chromatin）**。**典型细胞里约 10% 的染色质处于更致密的形式，叫异染色质（heterochromatin），它在转录上是不活动的**，通常出现在着丝粒等特定染色体结构处；其余较松散的部分叫**常染色质（euchromatin）**。标准陷阱在这里：**常染色质中有一部分（而非全部）在转录上是活跃的 —— 常染色质是「转录可以发生的地方」，不是「转录正在发生的地方」。转录活跃的区域与异染色质恰好在三个可测量的方面不同：核小体停在哪里、里面装的是哪些变体组蛋白、以及这些蛋白上被接了哪些化学基团。**改动这三样，统称**染色质重塑（chromatin remodeling）**，它有两个效果：**让一段染色体在物理上变得可及，并且给这一段打上化学标签，好让正确的调控蛋白结合到那里。**这项工作中物理的那一半，由四个家族的 ATP 驱动**重塑器（remodeler）**完成 —— 它们负责把核小体解开、滑移、移走或替换。**SWI/SNF 把转录起点附近的核小体从 DNA 上顶掉**，走的是一个可逆的循环：它把核小体包住、消耗 ATP 剥下一部分 DNA，露出一个结合位点；转录因子在那里结合之后，核小体被顶掉；不再需要转录时，核小体又可以放回去，把因子挤走。**ISWI 大体上做相反的事：把核小体的间距理整齐，好让染色质被装配、被沉默。CHD 两件事都做，取决于是家族里的哪个成员。INO80 既为转录也为 DNA 修复而重塑，它的亲戚 SWR1 则把核小体里的一对组蛋白换成一对变体** —— 装上去的恰恰就是那个标记「此区域活跃」的变体。**所以细胞备了好几台各有专长的机器，有的打开染色质、有的关上染色质。**",
      src: "A p.1075",
      see: [{ id: "L-24-3-1", en: "nucleosomes, histone tails and how a chromosome is packed", cn: "核小体、组蛋白尾巴，以及染色体是怎么被打包的" }]
    },
    {
      link_en: "the second layer is chemical, and the order in which two of the marks are made is the mechanism",
      link_cn: "第二层是化学的，而其中两种标记的先后顺序，正是机制本身",
      en: "The **histones**, the proteins a nucleosome is built from, are modified by adding methyl groups to Lys or Arg, phosphate groups to Ser or Thr, acetyl groups, or whole small proteins. Each histone has a compact central part and a **Lys-rich tail that sticks out from the particle**, and the modifications are concentrated on those tails, which is why the tails stick out at all. Now the sequence, which is the mechanism rather than a list. **During transcription, histone H3 is methylated at Lys4 near the start of the coding region and at Lys36 within it. Those methyl groups are what enable histone acetyltransferases to bind**, and those enzymes then attach acetyl groups to particular Lys residues. **So methylation is the recruiting signal and acetylation is the structural change** — not two parallel marks. And the chemistry of the structural change is one you can reconstruct: **a lysine side chain carries a positive charge, that positive charge is what grips the negatively charged phosphates of the DNA backbone, and acetylating it removes the charge. Acetylate several lysines on H3 and H4 and the whole nucleosome's grip on the DNA loosens.**",
      cn: "**组蛋白（histone）**，也就是构成核小体的那些蛋白，可以被修饰：在 Lys 或 Arg 上加甲基，在 Ser 或 Thr 上加磷酸，加乙酰基，或者接上整个小蛋白。每个组蛋白有一个致密的中心部分，以及**一条从颗粒上伸出来、富含 Lys 的尾巴**，修饰集中在这些尾巴上 —— 这也正是尾巴伸出来的意义所在。接下来是顺序，那才是机制而不是清单。**转录进行时，组蛋白 H3 在编码区起点附近的 Lys4 处、以及编码区内部的 Lys36 处被甲基化。正是这些甲基使得组蛋白乙酰转移酶能够结合上来**，这些酶随后在特定的 Lys 上接乙酰基。**所以甲基化是招募信号，乙酰化是结构改变** —— 不是两个并列的标记。而这个结构改变的化学，你可以自己推出来：**赖氨酸侧链带正电，正是这个正电抓住 DNA 骨架上带负电的磷酸，而给它加乙酰基就把这个电荷去掉了。在 H3 和 H4 上乙酰化好几个赖氨酸，整个核小体抓 DNA 的力量就松了。**",
      src: "A p.1076"
    },
    {
      link_en: "erasing the marks matters as much as writing them — and one of the erasers explains a cancer",
      link_cn: "擦掉标记与写上标记同样重要 —— 而其中一种橡皮擦解释了一类癌症",
      en: "When a gene is no longer wanted, the methyl and acetyl groups nearby are removed, restoring an inactive state. **Two classes of demethylase remove a methyl group, both releasing it as formaldehyde**: the LSD enzymes, and a class carrying a **JmjC domain**, of which a mammalian genome encodes more than twenty. Now the connection that makes this examinable. **The JmjC enzymes belong to the same α-ketoglutarate-dependent hydroxylase family as the enzyme that hydroxylates proline in collagen, and they are strongly inhibited by 2-hydroxyglutarate** — an unusual metabolite made in quantity by a **mutant form of isocitrate dehydrogenase that is common in human cancers**. **Follow it through: a mutation in a citric-acid-cycle enzyme makes a metabolite that was never meant to be there, that metabolite blocks a whole family of histone demethylases because they share its cofactor chemistry, and the tumour therefore shows global changes in gene expression.** Acetyl groups, meanwhile, are removed by **histone deacetylases**, including the **sirtuins**, which require NAD⁺ — so chromatin state is tied to the cell's energy and redox status. And silencing is not only subtraction: **new marks are added to label chromatin inactive, canonically methylation of H3 at Lys9.** **Methylation of H3 at Lys4 and Lys36 accompanies active transcription while methylation of the same protein at Lys9 marks heterochromatin — the same residue type, the same modification, opposite meanings according to position.** That positional dependence is the strongest evidence for the proposal that these patterns amount to a **histone code**.",
      cn: "当一个基因不再被需要时，附近的甲基和乙酰基会被去掉，恢复到不活动的状态。**两类去甲基酶负责摘掉甲基，两类都把它以甲醛的形式放出**：LSD 类，以及带 **JmjC 结构域**的一类 —— 哺乳动物基因组编码二十多个后者。接下来是让这件事变得可考的那个联系。**JmjC 类酶与「给胶原蛋白里的脯氨酸加羟基」的那个酶同属 α-酮戊二酸依赖的羟化酶家族，而它们被 2-羟基戊二酸强烈抑制** —— 那是一种由**人类癌症中常见的异柠檬酸脱氢酶突变型**大量产生的异常代谢物。**把这条线走完：一个柠檬酸循环酶上的突变，产出一种本不该存在的代谢物；这种代谢物因为与整整一族组蛋白去甲基酶共用同一套辅因子化学而把它们全部卡住；这个肿瘤于是表现出全局性的基因表达改变。**另一边，乙酰基由**组蛋白去乙酰酶（histone deacetylase）**摘掉，其中包括需要 NAD⁺ 的 **sirtuin** —— 于是染色质状态与细胞的能量和氧化还原状态挂上了钩。而沉默不只是做减法：**还会加上新的标记来给染色质贴「不活动」的标签，最典型的就是 H3 的 Lys9 甲基化。H3 的 Lys4 和 Lys36 甲基化伴随活跃转录，而同一个蛋白的 Lys9 甲基化标记异染色质 —— 同一种残基、同一种修饰，位置不同、含义相反。**正是这种对位置的依赖，成了「这些模式构成一套**组蛋白密码（histone code）**」这一设想最强的证据。",
      src: "A p.1077",
      see: [{ id: "L-24-3-1", en: "the histone tails these marks are written on", cn: "这些标记写在上面的那些组蛋白尾巴" }]
    },
    {
      link_en: "and now the two reasons a eukaryote regulates positively, the second of which is pure arithmetic",
      link_cn: "接下来是真核采用正调控的两个理由，第二个纯粹是算术",
      en: "**Reason one is combinatorial control, and it is about genome size.** In a large genome, a protein binds non-specifically more often, and any single recognition sequence is more likely to occur somewhere by accident. Requiring **several** activators each to find its own site solves both at once, because the chance of all of them occurring together at the wrong place is vanishingly small. The numbers: **the average gene in a multicellular organism has six regulatory sites and a dozen is common**, so **specificity comes from the combination rather than from any one site being unique.** It also economises: no new regulator is needed for each new gene, though regulatory proteins still account for 5% to 10% of all protein-coding genes. Work the illustration once: two families of three leucine-zipper proteins each, dimerising freely, give six dimeric species per family; **a gene with one site for each family therefore has 36 possible regulatory combinations from just six proteins** — and real genes have six or more sites. **Reason two is efficiency.** If the roughly **20,000 human genes were negatively regulated, every cell would have to synthesise every repressor at all times**, at concentrations high enough to keep each unwanted gene covered. **Under positive control most genes are off by default and a cell makes only the activators it needs at that moment.** Negative regulation still exists from yeast to humans, and some of it uses lncRNAs, which are cheaper to make than repressor proteins.",
      cn: "**第一个理由是组合式控制，它关乎基因组的大小。**在一个大基因组里，蛋白发生非特异性结合的机会更多，而任何单一识别序列在某处偶然出现的概率也更高。要求**好几个**激活蛋白各自找到自己的位点，一次解决这两个问题，因为它们全部在同一个错误地点同时出现的概率小到可以忽略。数字是：**多细胞生物里一个基因平均有六个调控位点，十来个也很常见**，所以**特异性来自组合，而不是来自某一个位点独一无二。**它同时也省钱：不必为每个新基因配一个新调控者 —— 尽管调控蛋白仍占全部编码蛋白基因的 5% 到 10%。把那个示例算一遍：两个家族、各三个亮氨酸拉链蛋白，自由二聚，每个家族给出六种二聚体；**如果一个基因给每个家族各留一个位点，那么仅凭六个蛋白就有 36 种可能的调控组合** —— 而真实基因有六个或更多位点。**第二个理由是效率。**如果人类那约 **20,000 个基因全都靠负调控，那么每个细胞在任何时刻都必须把所有阻遏蛋白全都合成出来**，而且浓度要高到足以把每一个不需要的基因都盖住。**在正调控之下，大多数基因默认是关着的，细胞只造它此刻需要的那些激活蛋白。**从酵母到人，负调控依然存在，其中一部分用的是 lncRNA —— 造 RNA 比造阻遏蛋白便宜。",
      src: "A p.1077"
    },
    {
      link_en: "and the sequences an activator binds break every intuition an operator gave you",
      link_cn: "而激活蛋白结合的那些序列，会推翻操纵基因给你的每一个直觉",
      en: "The sequences that transcription activators bind are called **enhancers** in higher eukaryotes and **upstream activator sequences**, or UASs, in yeast. **Three of their properties contradict how a bacterial operator behaves** — an operator being the site a repressor binds in order to sit in the polymerase's way. **Distance**: an enhancer may sit hundreds or thousands of base pairs upstream of the start site. **Position**: it may sit downstream instead, inside the gene itself. **Orientation**: with the right proteins bound, it increases transcription at nearby promoters **regardless of which way round it is in the DNA**. An operator works because it physically sits between the polymerase and the gene; **an enhancer cannot possibly work that way, which is why the DNA has to loop.** Looping is promoted by **architectural regulators**, abundant chromatin proteins that bind DNA with little sequence specificity, chief among them the **HMG proteins** — named for how fast they run in a gel, not for anything biological — and looping brings the two distant protein complexes into direct contact. Assembling a working polymerase at a eukaryotic promoter needs **five kinds of protein together**: activators, architectural regulators, the chromatin modifiers and remodelers already described, coactivators, and the basal transcription factors required at most promoters.",
      cn: "转录激活蛋白结合的那些序列，在高等真核里叫**增强子（enhancer）**，在酵母里叫**上游激活序列（upstream activator sequence，UAS）**。**它们有三条性质与细菌的操纵基因（operator）相抵触** —— 操纵基因就是阻遏蛋白结合、从而挡在聚合酶前面的那个位点。**距离**：一个增强子可能位于起点上游几百甚至几千个碱基对处。**位置**：它也可能反过来位于下游，就在基因内部。**方向**：只要结合了合适的蛋白，它就能提高附近启动子的转录，**无论它在 DNA 里是正着放还是反着放**。操纵基因之所以起作用，是因为它实实在在挡在聚合酶与基因之间；**增强子不可能这样起作用 —— 这正是 DNA 必须成环的原因。**成环由**建筑性调控因子（architectural regulator）**促成，那是一类在染色质里含量丰富、结合 DNA 时序列特异性很低的蛋白，其中最主要的是 **HMG 蛋白** —— 名字来自它们在凝胶里跑得快，与任何生物学性质无关 —— 成环把相隔很远的两个蛋白复合物拉到直接接触。要在一个真核启动子上装配出能工作的聚合酶，需要**五类蛋白一起上**：激活蛋白、建筑性调控因子、前面已经讲过的染色质修饰与重塑蛋白、共激活因子，以及大多数启动子都需要的基础转录因子。",
      src: "A p.1078"
    },
    {
      link_en: "and the assembly has a fixed order, with one component acting as the surface everything else lands on",
      link_cn: "而这次装配有固定的顺序，其中一个组件充当所有其他东西降落的台面",
      en: "**Mediator, a complex of 25 polypeptides in yeast and 30 in humans, is the major eukaryotic coactivator**, and many of its core subunits are conserved from fungi to humans, so it is not a peripheral accessory. **It binds tightly to the carboxyl-terminal tail of RNA polymerase II's largest subunit, it is needed for both basal and regulated transcription at many promoters, and it stimulates the phosphorylation of that tail.** **Different activators contact different parts of Mediator, which is how many separate signals converge on one machine.** The order of assembly. **Activators bind first**, and many of them have real affinity for their sites even inside condensed chromatin, so their binding is what triggers everything else; one activator binding can make it easier for the next, gradually displacing nucleosomes. **The activators then recruit the histone acetyltransferases and the remodelers such as SWI/SNF, and then Mediator. Mediator provides the surface on which TBP or TFIID assembles, then TFIIB, then the remaining basal factors and Pol II.** One number defeats the usual mental image of a switch: **for some genes assembly takes minutes; for certain genes of higher eukaryotes it can take days.**",
      cn: "**中介体（Mediator）是酵母里 25 条、人里 30 条多肽的复合物，是真核最主要的共激活因子**，它的许多核心亚基从真菌到人都保守 —— 所以它不是外围配件。**它紧密结合 RNA 聚合酶 II 最大亚基的羧基末端尾巴；许多启动子上的基础转录和受调控转录都需要它；而且它促进那条尾巴的磷酸化。不同的激活蛋白接触中介体的不同部位 —— 众多彼此独立的信号就是这样汇聚到同一台机器上的。**装配顺序如下。**激活蛋白最先结合**，而且其中许多即使在致密染色质里也对自己的位点有真实的亲和力，所以它们的结合正是触发其余一切的那一步；一个激活蛋白结合上去，可以让下一个更容易结合，核小体被逐步挤开。**随后激活蛋白招来组蛋白乙酰转移酶和 SWI/SNF 之类的重塑器，再招来中介体。中介体提供台面，TBP 或 TFIID 在上面装配，然后是 TFIIB，然后是其余的基础因子和 Pol II。**有一个数字足以击碎「开关」这个惯常的心理图像：**有些基因的装配要几分钟；高等真核的某些基因，这个过程可以要好几天。**",
      src: "A p.1080",
      see: [{ id: "L-26-1-1", en: "the polymerase tail Mediator binds, and the basal factors", cn: "中介体结合的那条聚合酶尾巴，以及那些基础因子" }]
    },
    {
      link_en: "one worked system shows all of it at once — and shows a eukaryote coordinating genes without an operon",
      link_cn: "有一个完整的实例把上述一切一次演示完 —— 并且演示了真核怎样不靠操纵子协调基因",
      en: "The yeast genes for taking in and metabolising galactose sit **on several different chromosomes and are each transcribed separately**, because yeast has no operons. **They are nevertheless regulated together, because they carry similar promoters recognised by one set of proteins** — that is the eukaryotic answer to the problem an operon solves by physical linkage. Each of those promoters has a TATA box, an initiator sequence and an upstream activator sequence read by the activator **Gal4p**. The switch is three proteins deep. **Gal80p binds Gal4p and holds it inactive. Galactose binds a third protein, Gal3p, and Gal3p then acts on the Gal80p-Gal4p complex and releases Gal4p to do its job.** Notice what kind of control that is: **the inducer binds neither the DNA nor the activator — it binds a third protein that removes an inhibitor.** Freed Gal4p then does exactly what the previous step described: it recruits a histone-acetylating complex, then SWI/SNF, then Mediator. And now the override. **Glucose is yeast's preferred carbon source, and when glucose is present most of these genes are repressed whether galactose is there or not**, through a separate catabolite repression system. **A beautifully built inducible circuit can be outranked entirely by a second circuit answering a more important question.**",
      cn: "酵母里负责摄取和代谢半乳糖的那些基因**分布在好几条不同的染色体上，各自单独转录**，因为酵母没有操纵子。**它们却被一起调控，因为它们带着相似的启动子，由同一套蛋白识别** —— 这就是真核对「操纵子靠物理连锁解决的那个问题」的回答。这些启动子每个都有一个 TATA 盒、一段起始序列，以及一段由激活蛋白 **Gal4p** 读取的上游激活序列。这个开关有三层蛋白。**Gal80p 结合 Gal4p，把它按住不让它起作用。半乳糖结合第三个蛋白 Gal3p，Gal3p 随后作用于 Gal80p-Gal4p 复合物，把 Gal4p 放出来干活。**注意这是哪一种控制：**诱导物既不结合 DNA，也不结合激活蛋白 —— 它结合的是第三个蛋白，而那个蛋白负责挪走一个抑制者。**被放出来的 Gal4p 接下来做的正是上一步描述过的事：先招来一个组蛋白乙酰化复合物，再招 SWI/SNF，再招中介体。然后是那个压倒性的覆盖。**葡萄糖是酵母偏好的碳源，而只要有葡萄糖在，这些基因大多被抑制，无论有没有半乳糖**，靠的是另一套独立的分解代谢物阻遏系统。**一个设计得再漂亮的诱导型线路，也可能被另一条回答更重要问题的线路整个压过去。**",
      src: "A p.1081"
    },
    {
      link_en: "and an activator turns out to be built from interchangeable parts, which was proved by swapping them",
      link_cn: "而激活蛋白原来是由可互换的零件搭成的 —— 这一点是靠把零件对调证明的",
      en: "**A transcription activator has a distinct domain for binding a specific DNA sequence and one or more separate domains for activating transcription.** Three examples show that the activating half is chemically diverse. **Gal4p's activation domain is full of acidic residues**, and substituting quite different peptide sequences for it showed that **being acidic is what matters, while the exact sequence can vary a great deal**. **Sp1's two activation domains are 25% glutamine**, and glutamine-rich domains are common in other activators. **CTF1's activation domain is more than 20% proline.** Acidic, Gln-rich, Pro-rich: three chemically different solutions to one job. **The proof of modularity is the domain-swapping experiment.** Join CTF1's proline-rich activation domain to Sp1's DNA-binding domain, and the chimera binds Sp1's sites and activates the nearby promoter just as intact Sp1 would. The converse control is the telling half: **replace Gal4p's DNA-binding domain with the DNA-binding domain of a bacterial repressor, and the chimera neither binds the yeast site nor activates the galactose genes — unless the yeast site in the DNA is itself replaced by the bacterial recognition site, at which point it works.** **The activation domain does not care where it is delivered; the DNA-binding domain decides only where.**",
      cn: "**一个转录激活蛋白有一个专门结合特定 DNA 序列的结构域，外加一个或多个独立的、负责激活转录的结构域。**三个例子说明「激活」这一半在化学上五花八门。**Gal4p 的激活结构域富含酸性残基**，而用差异很大的其他肽段去替换它的实验表明：**要紧的是「呈酸性」，而具体序列可以变化很大。Sp1 的两个激活结构域里 25% 是谷氨酰胺**，富含谷氨酰胺的结构域在其他激活蛋白里也常见。**CTF1 的激活结构域里超过 20% 是脯氨酸。**酸性、富 Gln、富 Pro：同一件工作的三种化学上完全不同的解法。**证明模块化的是结构域对调实验。**把 CTF1 富含脯氨酸的激活结构域接到 Sp1 的 DNA 结合结构域上，这个嵌合体就结合 Sp1 的位点、激活附近的启动子，与完整的 Sp1 一模一样。反过来的对照才是点睛之笔：**把 Gal4p 的 DNA 结合结构域换成一个细菌阻遏蛋白的 DNA 结合结构域，这个嵌合体既不结合酵母那个位点，也不激活半乳糖基因 —— 除非把 DNA 里的酵母位点本身也换成细菌的识别位点，这时它就能工作了。激活结构域不在乎自己被送到哪里；DNA 结合结构域决定的只是「哪里」。**",
      src: "A p.1082"
    },
    {
      link_en: "so how does a signal from outside the cell reach one of these? Two routes, and they are opposites",
      link_cn: "那么细胞外的信号怎么够到这些蛋白？两条路，而且是相反的两条",
      en: "**Steroid hormones, and the thyroid and retinoid hormones that work the same way, are hydrophobic enough to pass straight through the plasma membrane by diffusion**, so they need no membrane receptor — and that same water-insolubility is why they travel through the blood on carrier proteins rather than free. Once inside, **they bind intracellular receptors that are themselves transcription activators.** That phrase is the whole point: **the receptor is not a relay that eventually causes transcription — the receptor is the activator.** The hormone-receptor complex binds a **hormone response element** — a specific DNA sequence made of two six-nucleotide halves, either adjacent or three nucleotides apart — **and the receptor binds as a dimer with each half read by one subunit's pair of zinc fingers.** **Two receptor types.** **Type I receptors — for estrogen, progesterone, androgen and cortisol — wait in the cytoplasm bound to a heat shock protein**; the hormone releases that protein, the receptor dimerises and goes to its DNA site. **Type II receptors, such as the thyroid hormone receptor, are already on their DNA site with a corepressor holding them inactive**; the hormone binds and a shape change throws the corepressor off. **So type I is brought to the DNA by its hormone, and type II is already there and is released by it.** The hormone-binding part differs greatly from receptor to receptor, and **single amino acid changes there can abolish the response — some people unable to respond to cortisol, testosterone, vitamin D or thyroxine carry exactly such mutations.**",
      cn: "**类固醇激素，以及以同样方式工作的甲状腺激素和类视黄醇激素，疏水到足以靠扩散直接穿过质膜**，所以它们不需要膜受体 —— 而同样的水不溶性也意味着它们在血液里必须搭着载体蛋白走，不能自由溶解。进入细胞后，**它们结合的胞内受体本身就是转录激活蛋白。**这句话就是全部要点：**这个受体不是一个「最终导致转录」的中继站 —— 这个受体就是激活蛋白。**激素-受体复合物结合一段**激素响应元件（hormone response element）**，那是一段由两个六核苷酸半位点构成的特定 DNA 序列，两半或者相邻、或者相隔三个核苷酸，**而受体以二聚体形式结合，每一半由一个亚基的两个锌指读取。受体分两型。I 型受体 —— 雌激素、孕激素、雄激素、皮质醇的受体 —— 待在胞质里，结合着一个热激蛋白**；激素一到就把这个热激蛋白放开，受体二聚化，前往它的 DNA 位点。**II 型受体（例如甲状腺激素受体）本来就停在自己的 DNA 位点上，被一个共抑制因子按住不动**；激素一结合，构象变化就把共抑制因子甩掉。**所以 I 型是被自己的激素带到 DNA 上的，II 型本来就在那里、被激素解除封印。**这些受体上结合激素的那部分彼此差别很大，而**那里的单个氨基酸改变就能让响应完全消失 —— 有些人对皮质醇、睾酮、维生素 D 或甲状腺素没有反应，带的正是这类突变。**",
      src: "A p.1083"
    },
    {
      link_en: "the second route sends a phosphate instead of a molecule, and one RNA competes with the DNA itself",
      link_cn: "第二条路送的是一个磷酸而不是一个分子；而有一条 RNA 直接和 DNA 抢同一个受体",
      en: "**A non-steroid hormone never enters the cell.** Its pathway raises the cytosolic concentration of cyclic AMP; cyclic AMP releases the catalytic part of **protein kinase A**, which enters the nucleus and attaches a phosphate to a protein called **CREB**; phosphorylated CREB then binds **cAMP response elements** near certain genes and switches them on. **Contrast the two routes deliberately: a steroid hormone carries its own transcription factor into the nucleus with it, while a peptide hormone stays outside and sends a phosphate group up a cascade to modify a transcription factor that was already there.** And one lncRNA acts directly on this machinery. **GAS5 inhibits the cortisol receptor by competing with DNA for the receptor's DNA-binding site** — which means it must mimic a hormone response element closely enough to occupy that site. It inhibits the closely related androgen, progesterone and mineralocorticoid receptors too, and separately it soaks up a microRNA that would otherwise suppress several tumour-suppressing proteins. **The arithmetic follows: GAS5 is suppressed in a wide range of tumours, which raises steroid signalling and raises that microRNA's activity at the same time, and low GAS5 correlates with worse outcomes for cancer patients.**",
      cn: "**非类固醇激素从不进入细胞。**它的通路提高胞质里环腺苷酸的浓度；环腺苷酸放开**蛋白激酶 A** 的催化部分，后者进入细胞核，给一个叫 **CREB** 的蛋白接上一个磷酸；被磷酸化的 CREB 随后结合某些基因附近的 **cAMP 响应元件**，把它们打开。**把两条路刻意对照一下：类固醇激素把自己的转录因子随身带进细胞核，而肽类激素待在外面，沿一条级联送进一个磷酸基团，去修饰一个本来就在那里的转录因子。**而有一条 lncRNA 直接作用在这套机器上。**GAS5 通过与 DNA 争夺受体的 DNA 结合位点来抑制皮质醇受体** —— 这意味着它必须把激素响应元件模仿到足以占住那个位点。它同样抑制与之近缘的雄激素、孕激素和盐皮质激素受体；另外它还吸附一条微 RNA，而那条微 RNA 本来会压制若干个抑癌蛋白。**账就这样算出来了：GAS5 在很多种肿瘤里被压低，这同时抬高了类固醇信号和那条微 RNA 的活性，而低 GAS5 与癌症患者更差的预后相关。**",
      src: "A p.1084"
    },
    {
      link_en: "and a eukaryote regulates translation far more than a bacterium does, for a reason that follows from having a nucleus",
      link_cn: "真核对翻译的调控远多于细菌 —— 理由直接来自「有一个细胞核」这件事",
      en: "In a eukaryote a transcript must be processed and exported before it can be translated, which puts a real delay between switching a gene on and having its protein. **So when a protein is needed quickly, a message already sitting in the cytoplasm but held switched off can be released with no delay at all.** It is decisive in two further settings: genes measured in millions of base pairs, whose transcription takes hours, and cells with no nucleus, where transcriptional control is unavailable altogether. **Four mechanisms.** (1) **Phosphorylating an initiation factor**: the initiation factors are the proteins that assemble a ribosome onto a message, and phosphorylating one usually makes it less active — a **general** depression of translation. (2) **Repressor proteins binding the mRNA directly**, many of them at sites in the untranslated stretch beyond the stop codon, from where they block initiation — **gene-specific**. (3) **Binding proteins that pull apart the link between two initiation factors**, released again by phosphorylation when growth resumes. (4) **Noncoding RNAs binding the message.** The worked case ends in chemistry. **A maturing reticulocyte destroys its nucleus, leaving a cell packed with hemoglobin and with mRNAs deposited earlier — so stored messages are the only thing left to control.** When the cell runs short of iron or heme, a kinase is activated that phosphorylates an initiation factor; **the phosphorylated factor then forms a stable complex with the protein that would have recycled it, and is trapped there, so globin synthesis stops.** **Globin production is thereby coupled to heme availability, which matters because globin chains with no heme to fill them precipitate.**",
      cn: "在真核里，一条转录本必须先加工、再输出，才能被翻译，这在「打开一个基因」和「拿到它的蛋白」之间插入了实实在在的延迟。**所以当某个蛋白需要被迅速拿到时，一条已经躺在胞质里、只是被按住不译的信息，可以毫无延迟地被放开。**另有两种情形让它变得决定性：以百万碱基对计的超长基因，转录要花好几个小时；以及没有细胞核的细胞，那里根本没有转录水平的控制可用。**四种机制。**(1) **给一个起始因子加磷酸**，通常使它活性下降 —— 这是对翻译的**全局性**压低。(2) **阻遏蛋白直接结合 mRNA**，其中许多结合在终止密码子之后那段不被翻译的序列上，从那里阻断起始 —— 这是**基因特异性**的。(3) **一类结合蛋白把两个起始因子之间的连接拆开**，生长恢复时再由磷酸化把它放开。(4) **非编码 RNA 结合信息。**那个完整实例的结尾落在化学上。**正在成熟的网织红细胞会毁掉自己的细胞核，剩下一个装满血红蛋白、以及早先存放的 mRNA 的细胞 —— 于是能控制的就只剩这些储存的信息了。**当细胞缺铁或缺血红素时，一个激酶被激活，给一个起始因子加上磷酸；**被磷酸化的这个因子随即与「本该把它回收再用」的那个蛋白形成稳定复合物、被困在那里，于是珠蛋白的合成停止。由此珠蛋白的产量与血红素的供应挂上了钩 —— 这很要紧，因为没有血红素可装的珠蛋白链会沉淀出来。**",
      src: "A p.1085"
    },
    {
      link_en: "and one more regulatory system began as biology, became a laboratory tool, and is now becoming drugs",
      link_cn: "还有一套调控系统：先是生物学，后来成了实验工具，如今正在变成药物",
      recall_en: "the same microRNAs and the same two cutting enzymes that were introduced as RNA processing",
      recall_cn: "还是那些微 RNA、那两个切割酶 —— 当初是作为 RNA 加工介绍的",
      en: "**In higher eukaryotes, microRNAs silence many genes**: a microRNA pairs with an mRNA, usually in the untranslated stretch past the stop codon, and the message is either degraded or blocked from being translated. **The phenomenon was first described and explained by Craig Mello and Andrew Fire.** Its three natural jobs are not obvious and are worth listing: **controlling the timing of developmental events; defending against invading RNA viruses, which matters especially in plants, since a plant has no immune system; and holding transposons in check.** The scale: **thousands are known in higher eukaryotes and they may affect the regulation of a third of mammalian genes.** **Now the tool.** Introduce into a cell a double-stranded RNA matching virtually any message, and the enzyme Dicer cuts it into **small interfering RNAs** that find and silence that message. **This is RNA interference, and its value as a method is precise: it switches off a gene's function without making a mutant organism.** In plants almost any gene can be shut down this way; a nematode will swallow working RNA, so putting the duplex in the worm's food suppresses the target. **And now the drugs.** Such RNAs have blocked HIV and poliovirus in cultured human cells; the obstacle was delivery, since human tissues are full of enzymes that destroy RNA, and with that improved there are now **more than a dozen such drugs in advanced clinical trials.** One framing fact to close on: **a mammalian genome encodes more noncoding RNA than it does mRNA.**",
      cn: "**在高等真核里，微 RNA 使许多基因沉默**：一条微 RNA 与一条 mRNA 配对（通常配在终止密码子之后那段不被翻译的序列上），这条信息要么被降解、要么被阻止翻译。**这个现象最早由 Craig Mello 与 Andrew Fire 描述并解释。**它在自然界的三项职责并不显然，值得列出来：**控制发育事件的时序；抵御入侵的 RNA 病毒 —— 这一点在植物里尤其要紧，因为植物没有免疫系统；以及把转座子摁住。**规模：**高等真核里已知有数千种，它们可能影响哺乳动物三分之一基因的调控。接下来是工具。**把一条与几乎任何信息相匹配的双链 RNA 导入细胞，Dicer 酶就会把它切成**小干扰 RNA（small interfering RNA）**，去找到并沉默那条信息。**这就是 RNA 干扰（RNA interference），而它作为方法的价值可以说得很准确：它关掉一个基因的功能，而不需要造出一个突变体。**在植物里，几乎任何基因都能这样被关掉；线虫会把有活性的 RNA 吃进去，所以只要把双链 RNA 放进虫子的食物里，目标基因就被压下去了。**再接下来是药。**这类 RNA 已在培养的人类细胞里阻断了 HIV 和脊髓灰质炎病毒；障碍一直是递送，因为人体组织里满是毁 RNA 的酶 —— 而随着递送手段改进，如今已有**十多种这类药物进入后期临床试验。**最后用一个定调的事实收尾：**哺乳动物基因组编码的非编码 RNA 比它编码的 mRNA 还多。**",
      src: "A p.1085",
      see: [{ id: "L-26-2-1", en: "how a microRNA is made, from Drosha to RISC", cn: "一条微 RNA 是怎么造出来的 —— 从 Drosha 到 RISC" }]
    },
    {
      link_en: "and the hardest regulatory problem of all is building a body, which is done as a cascade in a fixed order",
      link_cn: "而最难的调控问题是造一个身体 —— 做法是一条固定顺序的级联",
      en: "**More genes are expressed during early development than at any other time of life** — a sea urchin egg holds about 18,500 different mRNAs against about 6,000 in a differentiated tissue. A protein whose local concentration makes the tissue around it take a particular form is a **morphogen**. Three classes of pattern-setting gene act one after another. **Maternal genes** are expressed in the unfertilised egg; their mRNAs lie dormant until fertilisation, then supply most of the early proteins, and some of them fix which end of the embryo is which. **Segmentation genes** act after fertilisation and set the number of body segments, in three sub-classes in order: **gap genes divide the embryo into a few broad regions, then pair-rule and segment polarity genes mark out the 14 stripes that become the 14 segments.** **Homeotic genes** act last and decide which organ or appendage grows in which segment. **The logical problem all this solves is that if every division gave two identical daughters, an organism could never be more than a ball of identical cells.** The solution is gradients, and **bicoid** is the worked example: **its mRNA is deposited near one pole of the egg by the nurse cells around it, and after fertilisation the protein spreads out into a concentration gradient running from that pole**, so different cells inherit different amounts and take different paths. Two facts to keep. **Bicoid contains a homeodomain**, the DNA-binding module of an earlier step. And **Bicoid does two jobs — transcription factor for several segmentation genes, translational repressor of certain mRNAs — and it acts by threshold**, so as its concentration falls along the gradient its effect changes with position. **The control experiment is decisive and easy to remember: a mother that does not express bicoid deposits none, and her larva develops two posteriors and dies.**",
      cn: "**早期发育中表达的基因比生命中任何其他时期都多** —— 海胆卵里有约 18,500 种不同的 mRNA，而一个已分化的组织里约 6,000 种。一个蛋白，如果它的局部浓度决定了周围组织长成什么形态，就叫**形态发生素（morphogen）**。三类模式基因依次起作用。**母源基因（maternal gene）**在未受精卵里表达；它们的 mRNA 一直静默到受精，随后供应早期绝大部分蛋白，其中一些确定了胚胎的哪一端是哪一端。**分节基因（segmentation gene）**在受精后起作用，定下体节的数目，分三个亚类按顺序动作：**间隙基因（gap gene）把胚胎划成几个大区，然后成对法则基因和体节极性基因划出 14 道条纹，也就是日后的 14 个体节。同源异型基因（homeotic gene）**最后动作，决定哪个器官或附肢长在哪个体节上。**这一整套要解决的逻辑难题是：如果每次分裂都给出两个一模一样的子细胞，一个生物就永远只能是一团相同细胞。**解法是梯度，而 **bicoid** 是那个完整实例：**它的 mRNA 由周围的滋养细胞存放在卵的一极附近，受精后蛋白从那一极扩散出去、形成一条浓度梯度**，于是不同的细胞继承到不同的量，走上不同的路。两件事要记住。**Bicoid 蛋白含有一个同源异型域**，就是前面讲过的那个 DNA 结合模块。而且 **Bicoid 身兼两职 —— 既是若干分节基因的转录因子，也是某些 mRNA 的翻译阻遏蛋白 —— 并且按阈值起作用**，所以随着浓度沿梯度下降，它的效果在不同位置上并不相同。**那个对照实验既决定性又好记：一只不表达 bicoid 的母亲不会存放任何 bicoid，她的幼虫会长出两个后端，然后死掉。**",
      src: "A p.1088"
    },
    {
      link_en: "and the last three findings all point at the same conclusion about where new forms come from",
      link_cn: "而最后三项发现，全都指向关于「新形态从哪里来」的同一个结论",
      recall_en: "the homeotic genes of the step above, now counted across species",
      recall_cn: "上一步说的同源异型基因，这一步是跨物种地数它们",
      en: "**The homeotic genes sit in clusters, and those clusters are conserved to an astonishing degree: a fruit fly has one, a human has four, and the genes inside them are recognisably the same from nematodes to humans — they have been part of the developmental program of multicellular life for more than 500 million years.** The number to quote: **the products of one mouse gene and one fly gene of this family differ in a single amino acid residue.** **Yet a human grows no antennae, so the difference in outcome lies in the downstream genes these regulators control, not in the regulators themselves.** Two more findings say the same thing. **The differences between the beaks of Galápagos finches trace largely to how much and how early just two genes are expressed** — one of them confirmed by driving it hard in chicken embryos and seeing the beak change. **And the gene that triggers eye development is the same in flies and mammals: put the fly version into a mouse and it triggers the development of mouse eyes.** **Very few mutations are needed to make a large change in form, those mutations act on regulation, and no new genes are required.** The same conclusion turns up in the laboratory: **a skin cell can be returned to the state of an early embryonic cell — able to give rise to all three germ layers — by making it express four transcription factors.** **Identity is a pattern of gene expression, and a pattern can be rewritten.**",
      cn: "**同源异型基因成簇存在，而这些基因簇保守到令人吃惊的程度：果蝇有一簇，人有四簇，而簇内的基因从线虫到人都认得出是同一批 —— 它们参与多细胞生物的发育程序已超过五亿年。**要背的那个数字：**这一家族里，小鼠的一个基因产物与果蝇的一个基因产物只差一个氨基酸残基。可是人不长触角 —— 所以结果上的差别在于这些调控者所控制的下游基因，而不在这些调控者本身。**另两项发现说的是同一件事。**加拉帕戈斯雀喙形的差别，主要可以追溯到仅仅两个基因表达得有多强、有多早** —— 其中一个是靠在鸡胚里强行高表达它、看到喙形改变而得到确认的。**而触发眼睛发育的那个基因，在果蝇和哺乳动物里是同一个：把果蝇的那份放进小鼠体内，它触发的是小鼠的眼睛发育。要在形态上做出一个很大的改变，需要的突变非常少，这些突变作用于调控，而且不需要任何新基因。**同一个结论也出现在实验室里：**一个皮肤细胞可以被送回早期胚胎细胞的状态 —— 能够生成全部三个胚层 —— 办法是让它表达四个转录因子。身份是一套基因表达的模式，而模式是可以被改写的。**",
      src: "A p.1089"
    }
  ],
  terms: [
    { en: "transcriptional ground state", cn: "转录基态",
      def_en: "The activity of a promoter and the transcription machinery in a living cell with no regulatory sequences present. In bacteria it is on — the polymerase reaches essentially every promoter and initiates at some level, which is why bacterial regulation is so often negative. In eukaryotes it is off — a strong promoter is inactive without regulatory proteins, and almost every gene needs activating. That one inversion makes eukaryotic regulation positive, chromatin-first and combinatorial.",
      def_cn: "在活细胞里、没有任何调控序列时，一个启动子与转录机器所具有的活性。细菌里是「开」—— 聚合酶基本上能够到每个启动子并以某个水平起始，这正是细菌调控常常是负向的原因。真核里是「关」—— 没有调控蛋白，强启动子也不活动，几乎每个基因都要被激活。仅这一次反转，就使真核调控成为以正向为主、以染色质为先、以组合为核心的。" },
    { en: "heterochromatin and euchromatin", cn: "异染色质与常染色质",
      def_en: "About 10% of chromatin is condensed heterochromatin, transcriptionally inactive and found at structures such as centromeres. The rest is euchromatin — where transcription can happen, not where it is happening, since only some of it is active. Active regions differ from heterochromatin in three measurable ways: nucleosome positioning, which histone variants are present, and which covalent marks have been added.",
      def_cn: "约 10% 的染色质是致密的异染色质，转录上不活动，出现在着丝粒等结构处。其余是常染色质 —— 那是「转录可以发生的地方」，不是「正在发生的地方」，因为其中只有一部分是活跃的。活跃区域与异染色质在三个可测量方面不同：核小体位置、含有哪些变体组蛋白、以及加了哪些共价标记。" },
    { en: "the four remodeler families", cn: "四类重塑器",
      def_en: "ATP-driven machines that unwrap, slide, remove or exchange nucleosomes, and they are not interchangeable. SWI/SNF ejects nucleosomes near transcription start sites in a reversible cycle. ISWI mostly tidies nucleosome spacing for assembly and silencing. CHD does both depending on the member. INO80 remodels for transcription and for DNA repair, and its relative SWR1 installs the histone variant that marks active regions.",
      def_cn: "由 ATP 驱动、负责解开、滑移、移走或替换核小体的机器，彼此不可互换。SWI/SNF 在转录起点附近以可逆循环顶掉核小体。ISWI 主要是把核小体间距理整齐，以便装配与沉默。CHD 视成员而定，两件事都做。INO80 既为转录也为 DNA 修复而重塑，其亲戚 SWR1 负责装上标记活跃区域的那个组蛋白变体。" },
    { en: "methylation recruits, acetylation loosens", cn: "甲基化招募，乙酰化松开",
      def_en: "During transcription H3 is methylated at Lys4 and Lys36, and those methyl groups enable histone acetyltransferases to bind, which then acetylate particular lysines. So methylation is the recruiting signal and acetylation the structural change. The chemistry: a lysine's positive charge is what grips the DNA backbone's phosphates, and acetylation removes that charge, so the nucleosome's grip loosens.",
      def_cn: "转录时 H3 在 Lys4 和 Lys36 被甲基化，这些甲基使组蛋白乙酰转移酶能够结合上来，后者随即在特定赖氨酸上加乙酰基。所以甲基化是招募信号，乙酰化是结构改变。化学上：赖氨酸的正电荷正是抓住 DNA 骨架磷酸的东西，乙酰化把这个电荷去掉，核小体的抓力于是松开。" },
    { en: "JmjC demethylases and 2-hydroxyglutarate", cn: "JmjC 去甲基酶与 2-羟基戊二酸",
      def_en: "One of the two demethylase classes, releasing the methyl group as formaldehyde; a mammalian genome encodes more than twenty. They belong to the α-ketoglutarate-dependent hydroxylase family that also contains collagen prolyl hydroxylase, and they are strongly inhibited by 2-hydroxyglutarate, made in quantity by the mutant isocitrate dehydrogenase common in human cancers — so one metabolic mutation produces global changes in gene expression.",
      def_cn: "两类去甲基酶之一，把甲基以甲醛形式放出；哺乳动物基因组编码二十多个。它们属于 α-酮戊二酸依赖的羟化酶家族（胶原脯氨酰羟化酶也在其中），并被 2-羟基戊二酸强烈抑制 —— 后者由人类癌症中常见的异柠檬酸脱氢酶突变型大量产生，于是一个代谢突变就造成全局性的基因表达改变。" },
    { en: "the histone code, and Lys9 versus Lys4", cn: "组蛋白密码，以及 Lys9 对 Lys4",
      def_en: "The proposal that patterns of covalent histone modification are read by enzymes that alter chromatin structure. Lehninger states it as a proposal. Its strongest support is positional: methylation of H3 at Lys4 and Lys36 accompanies active transcription, while methylation of H3 at Lys9 marks heterochromatin — the same residue type, the same modification, opposite meanings by position.",
      def_cn: "这样一个设想：共价组蛋白修饰的模式会被那些改变染色质结构的酶读取。教材把它作为「设想」陈述。最强的支持来自位置：H3 的 Lys4 与 Lys36 甲基化伴随活跃转录，而 H3 的 Lys9 甲基化标记异染色质 —— 同一种残基、同一种修饰、位置不同、含义相反。" },
    { en: "why eukaryotes use positive control", cn: "真核为什么用正调控",
      def_en: "Two arguments. Combinatorial control: the average gene in a multicellular organism has six regulatory sites and a dozen is common, so requiring several activators makes accidental firing vanishingly unlikely and lets a limited repertoire cover a large genome. Efficiency: negatively regulating 20,000 human genes would mean every cell synthesising every repressor at all times, whereas positive control means making only the activators currently needed.",
      def_cn: "两条论证。组合式控制：多细胞生物的基因平均有六个调控位点、十来个也常见，所以要求多个激活蛋白同时到位，就使误触发的概率小到可忽略，也让有限的因子清单覆盖一个大基因组。效率：若两万个人类基因都靠负调控，每个细胞任何时刻都得把所有阻遏蛋白造出来；而正调控只需造此刻需要的那些激活蛋白。" },
    { en: "enhancer and upstream activator sequence", cn: "增强子与上游激活序列",
      def_en: "The sequences transcription activators bind — enhancers in higher eukaryotes, UASs in yeast. Three properties contradict the operator: an enhancer may be thousands of base pairs upstream; it may be downstream, inside the gene; and it works regardless of its orientation in the DNA. Since it cannot sit between polymerase and gene, the DNA has to loop — which is why architectural regulators exist.",
      def_cn: "转录激活蛋白结合的序列 —— 高等真核里叫增强子，酵母里叫 UAS。三条性质与操纵基因相抵触：它可以在上游几千个碱基对处；它可以在下游、在基因内部；而且无论正反方向放置都起作用。既然它不可能挡在聚合酶与基因之间，DNA 就必须成环 —— 这正是建筑性调控因子存在的理由。" },
    { en: "architectural regulators and Mediator", cn: "建筑性调控因子与中介体",
      def_en: "The two components that let a distant activator reach the polymerase. Architectural regulators — chiefly the HMG proteins, named for how fast they run in a gel — bind DNA with little sequence specificity and loop the intervening stretch so separated complexes can touch. Mediator, 25 polypeptides in yeast and 30 in humans with many core subunits conserved from fungi to humans, binds the Pol II tail, is required for basal and regulated transcription at many promoters, and provides the surface the preinitiation complex assembles on.",
      def_cn: "让远处的激活蛋白够到聚合酶的两个部件。建筑性调控因子（主要是 HMG 蛋白，名字来自它们在凝胶里跑得快）结合 DNA 时序列特异性很低，把中间那段环起来，好让分开的复合物相互接触。中介体在酵母里 25 条多肽、人里 30 条，许多核心亚基从真菌到人保守；它结合 Pol II 的尾巴，许多启动子的基础转录与受调控转录都需要它，并提供前起始复合物装配的台面。" },
    { en: "the yeast galactose switch", cn: "酵母半乳糖开关",
      def_en: "A eukaryotic system coordinating genes without an operon: the genes sit on several chromosomes and are transcribed separately, but share promoters read by one set of proteins. Gal80p holds the activator Gal4p inactive; galactose binds a third protein, Gal3p, which then releases Gal4p. So the inducer binds neither the DNA nor the activator, but a third protein that removes an inhibitor. Glucose overrides the whole circuit through a separate catabolite repression system.",
      def_cn: "一个不靠操纵子协调基因的真核系统：这些基因分布在几条染色体上、各自转录，却共用由同一套蛋白识别的启动子。Gal80p 把激活蛋白 Gal4p 按住；半乳糖结合第三个蛋白 Gal3p，后者再把 Gal4p 放出来。所以诱导物既不结合 DNA 也不结合激活蛋白，而是结合一个负责挪走抑制者的第三方蛋白。葡萄糖通过另一套分解代谢物阻遏系统压过整条线路。" },
    { en: "modular activators and domain swapping", cn: "模块化激活蛋白与结构域对调",
      def_en: "An activator is a DNA-binding domain plus one or more separate activation domains, and the two act independently. Three chemically different activation domains do the same job: acidic (Gal4p — what matters is being acidic, not the exact sequence), glutamine-rich (Sp1, 25% Gln) and proline-rich (CTF1, over 20% Pro). Swapping proves it: CTF1's activation domain on Sp1's DNA-binding domain works like Sp1, while Gal4p carrying a bacterial DNA-binding domain works only if the DNA site is swapped to match.",
      def_cn: "一个激活蛋白 = 一个 DNA 结合结构域 + 一个或多个独立的激活结构域，两者各自独立起作用。三种化学上不同的激活结构域干同一件事：酸性的（Gal4p —— 要紧的是「呈酸性」而非具体序列）、富谷氨酰胺的（Sp1，25% Gln）、富脯氨酸的（CTF1，超过 20% Pro）。对调实验可证：把 CTF1 的激活结构域接到 Sp1 的 DNA 结合结构域上，效果与 Sp1 一样；而带细菌 DNA 结合结构域的 Gal4p，只有把 DNA 位点也换成对应的才起作用。" },
    { en: "hormone response element and the two receptor types", cn: "激素响应元件与两型受体",
      def_en: "Steroid, thyroid and retinoid hormones diffuse through the plasma membrane and bind intracellular receptors that are themselves transcription activators. The receptor binds a hormone response element — two six-nucleotide halves, adjacent or three nucleotides apart — as a dimer, each half read by one subunit's pair of zinc fingers. Type I receptors (estrogen, progesterone, androgen, cortisol) wait in the cytoplasm with a heat shock protein and are brought to the DNA by the hormone; type II (thyroid) are already on the DNA with a corepressor and are released by it.",
      def_cn: "类固醇、甲状腺和类视黄醇激素扩散穿过质膜，结合的胞内受体本身就是转录激活蛋白。受体以二聚体结合激素响应元件（两个六核苷酸半位点，相邻或相隔三个核苷酸），每一半由一个亚基的两个锌指读取。I 型受体（雌激素、孕激素、雄激素、皮质醇）与热激蛋白一起等在胞质，由激素带上 DNA；II 型（甲状腺激素）本就停在 DNA 上、被共抑制因子按住，由激素解除。" },
    { en: "translational repression and the heme switch", cn: "翻译阻遏与血红素开关",
      def_en: "A eukaryotic transcript must be processed and exported before use, so a repressed message already in the cytoplasm responds faster. Four mechanisms: phosphorylating an initiation factor (global), repressor proteins on the untranslated stretch past the stop codon (gene-specific), binding proteins that break the link between two initiation factors, and noncoding RNAs. The reticulocyte has destroyed its nucleus, so stored messages are all it can control: short of heme, a kinase phosphorylates an initiation factor, which is then trapped by the protein that would recycle it, and globin synthesis stops — because globin chains with no heme precipitate.",
      def_cn: "真核转录本必须先加工、再输出才能用，所以已在胞质里被按住的信息响应更快。四种机制：给起始因子加磷酸（全局性）、阻遏蛋白结合终止密码子之后那段不翻译的序列（基因特异性）、结合蛋白拆开两个起始因子之间的连接、以及非编码 RNA。网织红细胞已毁掉细胞核，能控制的只剩储存的信息：缺血红素时，一个激酶给起始因子加磷酸，该因子随即被「本该回收它的那个蛋白」困住，珠蛋白合成停止 —— 因为没有血红素的珠蛋白链会沉淀。" },
    { en: "RNA interference", cn: "RNA 干扰",
      def_en: "Gene silencing by small RNAs, first described and explained by Craig Mello and Andrew Fire. Natural jobs: timing developmental events, defending against RNA viruses (crucial in plants, which have no immune system) and restraining transposons; thousands are known and they may affect a third of mammalian genes. Introducing a designed duplex RNA lets Dicer make small interfering RNAs against almost any gene — switching off its function without making a mutant organism. Delivery, once the obstacle, has improved enough for more than a dozen such drugs to reach advanced trials.",
      def_cn: "由小 RNA 实现的基因沉默，最早由 Craig Mello 与 Andrew Fire 描述并解释。自然职责：控制发育事件的时序、抵御 RNA 病毒（对没有免疫系统的植物尤其关键）、摁住转座子；已知有数千种，可能影响哺乳动物三分之一的基因。导入一条设计好的双链 RNA，Dicer 就能针对几乎任何基因做出小干扰 RNA —— 关掉它的功能，而不必造出突变体。递送曾是障碍，如今改进到已有十多种这类药物进入后期试验。" },
    { en: "maternal, segmentation and homeotic genes", cn: "母源基因、分节基因、同源异型基因",
      def_en: "The three classes of pattern-regulating gene, acting in succession. Maternal genes are expressed in the unfertilised egg, stay dormant until fertilisation, supply most early proteins and fix polarity. Segmentation genes then set segment number — gap genes first dividing the embryo into broad regions, then pair-rule and segment polarity genes marking out 14 stripes. Homeotic genes act last and decide which appendage grows where. Bicoid is the worked morphogen: deposited at one pole, forming a gradient, carrying a homeodomain, acting both as transcription factor and translational repressor, and by threshold — without it the larva has two posteriors.",
      def_cn: "三类模式调控基因，依次起作用。母源基因在未受精卵里表达，静默到受精，供应早期大部分蛋白并确定极性。分节基因随后定下体节数目 —— 先由间隙基因把胚胎划成几个大区，再由成对法则基因与体节极性基因划出 14 道条纹。同源异型基因最后动作，决定哪个附肢长在哪里。Bicoid 是那个完整的形态发生素实例：存放在一极、形成梯度、带一个同源异型域、既是转录因子又是翻译阻遏蛋白、按阈值起作用 —— 没有它，幼虫会长出两个后端。" },
    { en: "new forms come from regulation, not new genes", cn: "新形态来自调控，不是新基因",
      def_en: "Homeotic gene clusters are conserved for over 500 million years — a fly has one, a human four, and one mouse and one fly product differ by a single residue, yet humans grow no antennae, so the difference lies in the downstream genes controlled. Galápagos finch beak differences trace to how much and how early two genes are expressed; the fly eye-development gene triggers mouse eyes in a mouse. Very few mutations are needed, they act on regulation, and no new genes are required — and in the laboratory a skin cell is returned to an embryonic state by expressing four transcription factors.",
      def_cn: "同源异型基因簇保守超过五亿年 —— 果蝇一簇、人四簇，小鼠与果蝇的一对产物只差一个残基，可人不长触角，所以差别在于被控制的下游基因。加拉帕戈斯雀的喙形差异可追溯到两个基因表达得多强多早；果蝇的眼发育基因放进小鼠会触发小鼠的眼睛。需要的突变极少，它们作用于调控，而且不需要新基因 —— 在实验室里，让皮肤细胞表达四个转录因子，就能把它送回胚胎状态。" }
  ]
};

/* SPINE_FILE_END */
