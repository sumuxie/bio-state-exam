/* Merged spines — nucleic acids. 速通简洁版, ONE spine per TOPIC.

   The two books are not two subjects. These three topics held twelve node spines
   between them (147 steps); they come out here as three chains of sixteen.

   The merge rule: the Lehninger telling is the backbone. Czech material is folded in
   only where it ADDS — a number, a name the exam uses, a worked case, a consequence
   the other account does not draw. Where both say the same thing, the Lehninger
   sentence stands. Every step keeps a `src` naming the pages it was read from, and a
   step built from both carries both, separated by a middle dot.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ 转录 ---- */
window.BIOLITE_SPINE["key:transcription"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "double helix", "base pair", "hydrogen bond", "ATP", "GTP",
            "phosphate", "nucleus", "cytoplasm", "mitochondria", "chloroplast",
            "ribosome", "virus", "influenza", "yeast", "chromosome", "genome",
            "replication", "primer", "template", "complementary", "heat shock",
            "helicase", "kinase", "methyl group", "nuclease", "centrifuge"],
  nodeTitle_en: "Transcription and RNA processing",
  nodeTitle_cn: "转录与 RNA 加工",
  title_en: "How one strand of a gene becomes RNA, and what is done to that RNA before it can be used",
  title_cn: "一个基因的一条链怎么变成 RNA，以及这条 RNA 在能用之前被做了什么",
  steps: [
    {
      en: "A gene never serves as the direct template for making a protein. Its information leaves DNA in two named stages: transcription, which is the copying of one DNA strand into RNA, and translation, which is the reading of that RNA into a chain of amino acids. Crick set the permitted routes out in 1953 as the central dogma — DNA directs its own replication and its transcription into RNA, and RNA directs its translation into protein — with two special transfers alongside: an RNA-directed RNA polymerase in some viruses and plants, and reverse transcriptase, which is an RNA-directed DNA polymerase carried by some RNA viruses. The copying is also selective: only particular genes are copied at any one time, and the whole set of RNA a cell makes under one set of conditions is called its transcriptome. Only about 2% of human DNA codes for protein, yet about 76% of it is transcribed, and most of what comes out is noncoding RNA, meaning RNA that is never translated into a protein. **The one transfer never demonstrated is DNA specifying a protein directly, and that missing arrow is what the RNA intermediate exists to fill**: everything a gene does to a cell, it does through an RNA copy of itself.",
      cn: "一个基因从来不会被直接拿去当造蛋白质的模板。它的信息离开 DNA 要经过两个有名字的阶段：转录，即把 DNA 的一条链抄成 RNA；翻译，即把这条 RNA 读成一串氨基酸。Crick 在 1953 年把信息允许走的路线写成了中心法则 —— DNA 指导自身的复制，也指导自身向 RNA 的转录；RNA 又指导自身向蛋白质的翻译 —— 旁边还有两条特殊传递：某些病毒和植物里有 RNA 指导的 RNA 聚合酶，某些 RNA 病毒里有逆转录酶，即 RNA 指导的 DNA 聚合酶。这个抄写还是有选择的：任何时刻只有特定的基因被抄；一个细胞在一组给定条件下做出来的全部 RNA，叫它的转录组。人类 DNA 里只有约 2% 编码蛋白，实测却有约 76% 被转录，而抄出来的大多是非编码 RNA，即永远不会被翻译成蛋白的 RNA。**唯一从未被证实的传递，是 DNA 直接指定蛋白质；而这条缺席的箭头正是 RNA 中间体存在的理由：一个基因对细胞所做的一切，都要通过一份自己的 RNA 拷贝来完成。**",
      src: "§4.1.4, p.85, Obr. 4.26 · A p.960",
      openQuestion_en: "What most of those noncoding transcripts actually do is not known, and the pace at which they keep being found has made that gap larger rather than smaller.",
      openQuestion_cn: "这些非编码转录本里绝大多数到底在做什么，目前并不知道；而且它们被发现的速度越快，这个缺口反而越大。",
      see: [{ id: "L-26-3-1", en: "the arrows that run backwards, and where your own cells use them", cn: "倒着走的那些箭头，以及你自己的细胞在哪里用到它们" }]
    },
    {
      link_en: "so what is the copying itself, chemically?",
      link_cn: "那么「抄」这个动作本身，化学上是什么样子？",
      en: "RNA polymerase is the enzyme that builds an RNA chain on a DNA template. Its substrates are the four ribonucleoside triphosphates — ATP, GTP, CTP and UTP — and its chemistry is the same reaction DNA polymerases use: the 3'-hydroxyl at the growing end attacks the innermost phosphorus of the incoming triphosphate, pyrophosphate leaves, and the chain grows 5' to 3' because that is the end carrying the free hydroxyl. Two Mg²⁺ ions sit between those phosphates and three Asp residues that are conserved in the RNA polymerases of every species; one metal helps the hydroxyl attack, the other helps the pyrophosphate leave. One small detail is needed later: the 5'-triphosphate of the very first residue is never cleaved off. **RNA polymerase needs no primer at all — it starts a chain from nothing** — so nothing has to be cut back out and replaced afterwards, and transcription has no equivalent of the primer removal and the fragment joining that DNA replication cannot do without.",
      cn: "RNA 聚合酶就是以 DNA 为模板搭出一条 RNA 链的酶。它的底物是四种核糖核苷三磷酸 —— ATP、GTP、CTP、UTP —— 化学与 DNA 聚合酶完全相同：链的生长端上的 3′-羟基进攻进来的三磷酸最里侧那个磷，焦磷酸离去；链沿 5′→3′ 生长，因为带着游离羟基的正是那一端。两个 Mg²⁺ 夹在这些磷酸与三个在所有物种 RNA 聚合酶里都保守的 Asp 残基之间，一个帮羟基进攻，一个帮焦磷酸离开。有一个小细节后面要用：第一个残基的 5′-三磷酸从来不被切掉。**RNA 聚合酶完全不需要引物 —— 它能从零起头造一条链 —— 所以事后没有任何东西需要被切掉、换掉；DNA 复制离不开的那套「拆引物、连片段」，在转录里根本不存在。**",
      src: "A p.961 · §4.1.4, p.88, Obr. 4.31"
    },
    {
      link_en: "only one of the two strands is copied, and the naming of the other one inverts every sequence you will write down",
      link_cn: "两条链只有一条被抄 —— 而另一条链的命名，会把你今后写下的每条序列都翻个面",
      en: "The two DNA strands are named by what they do here. The strand actually copied is the template strand. Its partner is the nontemplate strand, whose base sequence is identical to the RNA with U wherever the DNA has T; it is also called the coding strand, and because that label is used both ways in print, the safe habit is to say which strand is copied rather than to trust the name. Which of the two is copied is decided per gene and never per chromosome: the adenovirus genome is 36,000 bp long, most of its genes are read off one strand and a few off the other, in the opposite direction. **Every promoter and regulatory sequence — a promoter being the stretch of DNA a polymerase binds in order to start — is written as it appears on the strand that is not copied**, 5' to 3'; read it as the copied strand instead and every one of those sequences comes out as its own reverse complement.",
      cn: "两条 DNA 链是按它们在这里干什么来命名的。真正被抄的那条叫模板链。它的搭档叫非模板链，碱基序列与 RNA 完全一致，只是 DNA 里是 T、RNA 里是 U；它也被叫作编码链，而这个称呼在书面上两种用法都有，所以稳妥的习惯是直接说「哪条链被抄」，而不要指望这个标签。哪条链被抄是逐个基因决定的，绝不是逐条染色体决定的：腺病毒基因组长 36,000 bp，大多数基因读的是其中一条链，少数几个读另一条，方向相反。**所有启动子和调控序列 —— 启动子就是聚合酶为了起始而结合的那段 DNA —— 写下来时用的都是「不被抄的那条链」上的样子，5′ 到 3′；如果你把它当成被抄的那条来读，每一条序列都会变成它自己的反向互补序列。**",
      src: "A p.962 · §4.1.4, p.87"
    },
    {
      link_en: "and what the enzyme physically does to the DNA while it runs",
      link_cn: "那这个酶跑起来的时候，在物理上把 DNA 怎么样了",
      recall_en: "the 8 bp hybrid here is one of only two ways an RNA ever becomes double-stranded",
      recall_cn: "这里的 8 bp 杂合链，是 RNA 能变成双链的仅有两种情况之一",
      en: "The enzyme opens a short stretch of the helix and carries the opening along with it. About 17 bp are held unwound — that opening is a transcription bubble — with an 8 bp RNA-DNA hybrid inside it, after which the RNA peels away and the duplex closes again behind. The chain grows at 50 to 90 nucleotides per second, and the enzyme covers about 35 bp of DNA while it does so. The likelier picture of the motion is that the RNA travels in a straight line while the DNA rotates beneath it, and in most cellular DNA that rotation is blocked by bound proteins. So **positive supercoils pile up ahead of the bubble and negative ones behind it** — supercoils being over- and under-winding of the double helix itself — and topoisomerases, the enzymes that cut DNA, let it turn and reseal it, are what take them out again.",
      cn: "这个酶把螺旋撑开一小段，并带着这个开口一起往前走。约 17 bp 被撑开 —— 这个开口就叫转录泡 —— 泡里有一段 8 bp 的 RNA-DNA 杂合链，过了这段 RNA 就剥离，双链在后面重新合上。链的延长速度是每秒 50 到 90 个核苷酸，酶在 DNA 上覆盖约 35 bp。关于这个运动，更可能的图景是：RNA 沿直线前进，而 DNA 在它下方转动；而细胞里的 DNA 大多被结合蛋白挡着转不动。**于是泡的前方堆出正超螺旋、后方堆出负超螺旋 —— 所谓超螺旋，就是双螺旋自身的过度缠绕或缠绕不足 —— 而把它们拆掉的是拓扑异构酶，即那类会把 DNA 切开、让它转动、再接回去的酶。**",
      src: "A p.961 · §4.1.4, pp.89–90, Obr. 4.30",
      see: [{ id: "L-24-2-1", en: "supercoiling and the topoisomerases in full", cn: "超螺旋与拓扑异构酶的完整讨论" }]
    },
    {
      link_en: "the enzyme has to start somewhere, and where it starts is written in the DNA rather than carried by the enzyme",
      link_cn: "酶总得从某处开始 —— 而「从哪里开始」写在 DNA 上，不是酶自己带着的",
      en: "A promoter is a DNA sequence that RNA polymerase binds, which fixes where transcription of the neighbouring gene begins. The numbering is a convention worth learning once: the base pair matching the first nucleotide of the RNA is +1, everything upstream gets negative numbers, and there is no position zero. E. coli polymerase covers roughly -70 to +30, and the commonest bacterial promoters carry two consensus sequences inside that span, TATAAT centred at -10 and TTGACA centred at -35, with an AT-rich UP element at -40 to -60 in some very highly expressed genes. Where a promoter sits can itself be the control point: in the lactose system it overlaps the operator, which is the short site a regulatory protein binds, and two proteins cannot occupy overlapping DNA at once, so a repressor sitting on the operator physically blocks the polymerase from binding at all. **Promoter efficiency depends on those sequences, on the spacing between them, and on their distance from the start, so changing a single base pair can slow binding by several orders of magnitude** — the promoter alone sets a basal rate that differs enormously from gene to gene, before any regulatory protein has said anything.",
      cn: "启动子是 RNA 聚合酶结合的一段 DNA 序列，它固定了旁边那个基因从哪里开始转录。编号是一个学一次就够的约定：与 RNA 第一个核苷酸对应的碱基对是 +1，上游全是负数，而且没有 0 号位。大肠杆菌聚合酶覆盖大约 -70 到 +30；在这个范围内，最常见的细菌启动子带两段共有序列，-10 处的 TATAAT 和 -35 处的 TTGACA，某些表达量极高的基因在 -40 到 -60 还有一段富含 AT 的 UP 元件。启动子长在哪里，本身就可以是控制点：在乳糖系统里它与操纵基因重叠 —— 操纵基因就是调控蛋白结合的那一小段位点 —— 两个蛋白不可能同时占住重叠的同一段 DNA，所以坐在操纵基因上的阻遏蛋白，从物理上就挡住了聚合酶的结合。**启动子的效率取决于这些序列本身、它们之间的间距、以及它们离起点的距离，所以改动一个碱基对就能让结合速率慢几个数量级 —— 在任何调控蛋白开口之前，启动子自己已经把各基因的基础表达水平定得天差地别。**",
      src: "A p.963 · §4.1.4, p.89, Obr. 4.29",
      see: [{ id: "4-2-4-1", en: "the lac operon, where that obstruction is the whole mechanism", cn: "lac 操纵子 —— 挡路就是它的全部机制" }]
    },
    {
      link_en: "and the bacterial enzyme carries one subunit whose only job is to find those sequences",
      link_cn: "而细菌的这个酶带着一个亚基，它唯一的任务就是去找这些序列",
      en: "The E. coli enzyme has five core subunits, written α₂ββ', plus a sixth called the sigma subunit, whose job is to steer the enzyme to promoters; core plus sigma is the holoenzyme, α₂ββ'σ. Getting started then resolves into four named states, and regulation acts on them separately: closed complex, with the holoenzyme bound and the DNA still fully double-stranded; open complex, with 12 to 15 bp unwound from inside the -10 sequence to about +2; initiation, where the first bonds are made and the complex changes shape; and promoter clearance, where the enzyme moves off the promoter. Any one of those four can be the step a promoter mutation acts on, which is what makes the single-base-pair sensitivity mechanical rather than magical. Once synthesis is under way sigma dissociates and the core enzyme polymerises on alone, and the released sigma can bind a different core and form a new initiation complex elsewhere. **Sigma is a reusable targeting device rather than part of the catalytic machine: it is spent entirely on the decision of where to start.**",
      cn: "大肠杆菌的这个酶有五个核心亚基，写作 α₂ββ′，外加第六个叫 σ 亚基的，任务是把酶引到启动子上；核心加 σ 叫全酶，即 α₂ββ′σ。「开始」随后被拆成四个有名字的状态，而调控是分别作用在每一个上的：闭合复合物，全酶已结合、DNA 仍是完整双链；开放复合物，从 -10 序列内部到约 +2 解开 12 到 15 bp；起始，头几个键形成、复合物变构；启动子清空，酶离开启动子往前走。这四步里任何一步都可能是某个启动子突变真正作用的那一步 —— 上一步说的「改一个碱基对差几个数量级」，正因如此才是机制而不是玄学。合成一旦开始，σ 就解离下来，核心酶独自完成聚合；放出来的 σ 可以结合另一个核心酶，在别处组成新的起始复合物。**σ 是一件可重复使用的定位装置，而不是催化机器的一部分：它全部花在「从哪里开始」这一个决定上。**",
      src: "A p.964 · §4.1.4, p.88"
    },
    {
      link_en: "and swapping that one subunit switches a whole set of genes",
      link_cn: "而换掉这一个亚基，就切换了一整套基因",
      en: "E. coli has several different sigma subunits, each recognising a different set of promoters. The ordinary one is σ⁷⁰; when the cell is heat-stressed it is replaced by σ³², which takes the very same core enzyme to the heat shock promoters instead. Which sigmas are available is itself controlled three ways: by how fast each one is made and destroyed, by chemical modification that switches individual ones on and off, and by anti-sigma proteins, which bind a particular sigma and hold it out of use. **Changing that one subunit therefore switches on a whole set of genes at once and changes the cell's physiology, with no change whatever to the enzyme that does the copying.**",
      cn: "大肠杆菌有好几种不同的 σ 亚基，各自识别一套不同的启动子。平常那个是 σ⁷⁰；细胞受热胁迫时它被 σ³² 换掉，同一个核心酶就被带到热激启动子上去了。哪些 σ 可用，本身又受三重控制：各自的合成与降解速度、把个别 σ 开关掉的化学修饰、以及抗 σ 蛋白 —— 它结合住某个特定的 σ，把它扣住不让用。**所以换掉一个小亚基，就等于一次性打开一整套基因、改变细胞的生理状态，而真正干抄写活的那个酶一点没变。**",
      src: "A p.964"
    },
    {
      link_en: "and it has to be told where to stop, because stopping in the wrong place cannot be undone",
      link_cn: "它还必须被告知在哪里停 —— 因为停错地方是无法挽回的",
      recall_en: "a hairpin is one RNA strand folding back and pairing with itself",
      recall_cn: "所谓发夹，就是一条 RNA 折回来和自己配上对",
      en: "RNA synthesis is processive, meaning the enzyme adds a great many nucleotides before letting go, and it has to be: an enzyme that released a transcript early could not resume that same RNA and would have to start again from the beginning of the gene. So stopping is signalled, in two ways. A rho-independent terminator is a G+C-rich palindrome, which is a sequence followed by its own reverse complement, so the new RNA folds back on itself into a hairpin centred 15 to 20 nucleotides before the end, and next to it sits a run of 4 to 10 A residues in the template, read as U residues. A rho-dependent terminator has no such run; it carries a CA-rich rut element instead, where the protein rho binds the RNA and walks along it 5' to 3' on ATP until it catches the paused enzyme. **The hairpin works by tearing apart several A=U pairs of the RNA-DNA hybrid, which are the weakest pairing available, so the transcript falls off by itself**; where the sequence cannot manage that, an enzyme is spent prising it off instead.",
      cn: "RNA 合成是持续性的，意思是酶要接上非常多个核苷酸才松手 —— 而且必须如此：一个提前放开转录本的酶没法接着抄同一条 RNA，只能从基因开头重来。所以「停」是要被信号通知的，方式有两种。不依赖 rho 的终止子是一段富含 G+C 的回文序列 —— 回文即一段序列后面跟着它自己的反向互补序列 —— 于是新生 RNA 折回自身形成一个发夹，中心位于终点前 15 到 20 个核苷酸处；紧挨着它的是模板上 4 到 10 个 A，被抄成 U。依赖 rho 的终止子没有这一串 A；它带的是一段富含 CA 的 rut 元件，蛋白 rho 在那里结合到 RNA 上，靠 ATP 沿 RNA 从 5′ 向 3′ 走，直到追上停顿的酶。**发夹起作用的方式，是把 RNA-DNA 杂合链里好几对 A=U 拽开 —— A=U 是所有配对里最弱的 —— 于是转录本自己脱落；而序列自己办不到的地方，就得花一个酶去把它撬下来。**",
      src: "A p.967 · §4.1.4, p.90, Obr. 4.32",
      openQuestion_en: "How rho actually causes release, once it reaches the paused polymerase, is not known.",
      openQuestion_cn: "rho 追上停顿的聚合酶之后，究竟怎样导致转录本释放，目前并不知道。"
    },
    {
      link_en: "in a bacterium the transcript is read before it is finished; a nucleus makes that impossible, and everything below follows from it",
      link_cn: "在细菌里，转录本还没写完就已经在被读了；核膜让这件事做不成 —— 下面全部内容都由此而来",
      en: "In bacteria there is no membrane between the DNA and the machinery that makes protein, so ribosomes start reading a message while RNA polymerase is still making it, and a protein called NusG binds the ribosome and the polymerase at the same time to hold the two complexes together. A nuclear envelope removes that option, putting transcription in the nucleus and translation in the cytoplasm. Inside that nucleus the single bacterial enzyme is replaced by three. Pol I sits in the nucleolus and makes the precursor that is cut up into a ribosome's 18S, 5.8S and 28S rRNAs. Pol II sits in the nucleoplasm and makes mRNA and many noncoding RNAs. Pol III, also in the nucleoplasm, makes tRNAs, the 5S rRNA and other small specialised RNAs, and some of the sequences it needs lie inside the gene, downstream of the start, rather than upstream where a promoter is normally expected. Mitochondria and chloroplasts keep RNA polymerases of their own, which resemble bacterial ones and are far simpler than any of the three nuclear enzymes. **Which enzyme transcribes a gene is decided by what class of RNA that gene encodes, so the division of labour in a nucleus is a division by product.**",
      cn: "细菌里 DNA 和造蛋白的机器之间没有膜，所以 RNA 聚合酶还在合成一条信息时，核糖体就已经开始读它了；一个叫 NusG 的蛋白同时结合核糖体与聚合酶，把两个复合物拴在一起。核膜取消了这个可能：转录在核内，翻译在胞质。而在这个核里，细菌那一个酶被三个取代。Pol I 在核仁里，做后来被切成核糖体 18S、5.8S、28S rRNA 的那份前体。Pol II 在核质里，做 mRNA 和许多非编码 RNA。Pol III 同样在核质里，做 tRNA、5S rRNA 和其他小型专用 RNA；它需要的一部分序列位于基因内部、起点的下游，而不是通常预期的上游。线粒体和叶绿体保留着自己的 RNA 聚合酶，它们更像细菌的酶，比三个核内酶简单得多。**一个基因由哪个酶来转录，取决于它编码的是哪一类 RNA —— 所以核内的分工是按产物分的。**",
      src: "A p.968 · §4.1.4, p.88"
    },
    {
      link_en: "so what are those classes, and what is each one built for?",
      link_cn: "那么这些类别是什么，每一类又是为什么活儿造的？",
      en: "Four classes account for almost all of a cell's RNA. Messenger RNA carries the information from a gene to a ribosome; its length is set by the peptide it encodes, so it is heterogeneous in size, and it is only about 5% of the RNA in E. coli. Ribosomal RNA is the structural material of the ribosome itself, and it is about 80%. Transfer RNA is the smallest, and it ferries one activated amino acid to the ribosome; it folds into a cloverleaf and works as an adaptor, holding its amino acid at a 3' end that reads …pCpCpA in every tRNA there is, and reading three bases of the message with an anticodon triplet at the far end of the fold. Small nuclear RNA sits in the machine that cuts transcripts. An RNA is named by its sedimentation coefficient, written S, which is how fast it travels through a solution in a centrifuge and rises with mass and with compactness: prokaryotes have 23S rRNA at about 3,700 nucleotides, 16S at about 1,700 and 5S at about 120, while eukaryotes have 5S, 5.8S, 18S and 28S. **Most of a cell's RNA carries no message at all — it is building material for the machine that reads messages.**",
      cn: "四个类别几乎占尽了细胞里的全部 RNA。信使 RNA 把信息从基因带到核糖体；它的长度由所编码的肽决定，因此大小参差不齐，在大肠杆菌里只占全部 RNA 的约 5%。核糖体 RNA 是核糖体本身的结构材料，约占 80%。转运 RNA 最小，负责把一个活化的氨基酸运到核糖体；它折成一片三叶草，充当转接头：一端抓着氨基酸，那个 3′ 端在所有 tRNA 里都是 …pCpCpA；折叠的另一端用一个反密码子三联体去读信息里的三个碱基。小核 RNA 待在那台负责切转录本的机器里。一种 RNA 是按它的沉降系数命名的，写作 S，即它在离心机里穿过溶液的快慢，质量越大、越紧凑这个数越大：原核有 23S rRNA 约 3,700 个核苷酸、16S 约 1,700 个、5S 约 120 个；真核有 5S、5.8S、18S、28S。**细胞里绝大部分 RNA 根本不携带任何信息 —— 它们是那台读取信息的机器的建筑材料。**",
      src: "§4.1.4, pp.86–87, Tab. 4.2",
      see: [{ id: "L-27-1-1", en: "the code those anticodon triplets spell out", cn: "反密码子三联体拼出的那套密码" },
            { id: "L-27-2-1", en: "the ribosome built out of that rRNA", cn: "用这些 rRNA 搭起来的核糖体" }]
    },
    {
      link_en: "Pol II cannot find a promoter by itself, and the tail it drags decides what happens to the RNA next",
      link_cn: "Pol II 自己找不到启动子；而它拖着的那条尾巴，决定 RNA 接下来会遭遇什么",
      en: "Pol II is a twelve-subunit enzyme whose three largest subunits are recognisably related to the bacterial ones, and what it cannot do alone is start. It needs general transcription factors, which are proteins required at every Pol II promoter, and they assemble in a fixed order: TBP, the TATA-binding protein, binds a short A-and-T-rich TATA box about 30 bp upstream, or else arrives inside a large complex called TFIID at the roughly 80% of human promoters that have no TATA box; then TFIIB, TFIIA, TFIIF together with Pol II, and finally TFIIE and TFIIH, whose helicase opens the DNA exactly as the bacterial closed-to-open transition does. The finished assembly is the preinitiation complex, and counting every subunit it can exceed fifty polypeptides against six for the bacterial holoenzyme. The largest subunit of Pol II ends in a long tail made of many repeats of the same seven amino acids, -YSPTSPS-, 26 repeats in yeast and 52 in mouse and human, and kinases add phosphates to it at initiation and keep changing them through elongation. **The pattern of phosphates on that tail determines which RNA-processing machinery is bound to the complex**, so capping, splicing and tailing are not a later stage beginning when transcription ends — they are recruited onto a transcript that is still attached to the polymerase making it.",
      cn: "Pol II 是一个十二亚基的酶，其中最大的三个亚基与细菌的对应亚基明显同源；它自己做不到的事是「开始」。它需要通用转录因子，即每个 Pol II 启动子都要用到的那些蛋白，而且它们按固定顺序装配：TBP（TATA 结合蛋白）结合上游约 30 bp 处一段富含 A 和 T 的 TATA 盒；在没有 TATA 盒的启动子上（约占人类启动子的 80%），TBP 改为藏在一个叫 TFIID 的大复合物里前来。接着是 TFIIB、TFIIA、带着 Pol II 的 TFIIF，最后是 TFIIE 与 TFIIH —— 后者的解旋酶把 DNA 撑开，干的正是细菌里从闭合到开放那一步的活。装好的这一坨叫前起始复合物，把所有亚基数进去可以超过五十条多肽，对照细菌全酶的六个。Pol II 最大的那个亚基末端拖着一条长尾巴，由同样七个氨基酸 -YSPTSPS- 重复很多次构成，酵母 26 个重复、小鼠和人 52 个；起始时激酶在它上面加磷酸，延长过程中还不断改变这些磷酸。**这条尾巴上的磷酸模式决定了哪一套 RNA 加工机器结合在复合物上 —— 所以加帽、剪接、加尾并不是转录结束后才开始的下一阶段，它们是被召集到「还挂在聚合酶上的转录本」上来的。**",
      src: "A p.969"
    },
    {
      link_en: "and three drugs stop transcription at three different steps, which is what makes each of them a clean experiment",
      link_cn: "有三种药分别卡在转录的三个不同步骤上——正因如此，每一种都是一次干净的实验",
      en: "Actinomycin D inhibits elongation by RNA polymerase in both bacteria and eukaryotes: the planar portion of the molecule intercalates into double-helical DNA between successive GC base pairs, deforming the duplex so the polymerase cannot move along it, and because it works in intact cells as well as in extracts it is used to identify which cellular processes depend on ongoing RNA synthesis. Rifampin inhibits bacterial RNA synthesis specifically by preventing the promoter clearance step: it binds near the active site so the RNA product cannot extend beyond 2 to 3 nucleotides, it is a central antibiotic for tuberculosis, more than 600,000 cases of rifampin-resistant TB are reported each year, and resistance is often a mutation in the binding site at Asp516, His526 or Ser531 of the beta subunit. Alpha-amanitin is the third: produced by the death cap mushroom Amanita phalloides, it blocks Pol II and, at higher concentrations, Pol III. **Alpha-amanitin touches neither Pol I nor bacterial RNA polymerase, so exposing a eukaryotic cell to it leaves only mitochondrial transcription running and marks every new mRNA as mitochondrial.** It is highly toxic to humans, and an amount the size of a grain of rice contains a lethal dose.",
      cn: "actinomycin D 在细菌和真核中都抑制 RNA 聚合酶的延伸：这个分子的平面部分嵌插（intercalate）进双螺旋 DNA 里连续的 GC 碱基对之间，使双螺旋变形，聚合酶便无法沿着它移动；而由于它在完整细胞里和在细胞提取物里同样有效，它被用来鉴定哪些细胞过程依赖于正在进行的 RNA 合成。rifampin 则特异地抑制细菌的 RNA 合成，办法是阻断 promoter clearance 这一步：它结合在活性位点附近，使 RNA 产物延伸不过 2 到 3 个核苷酸；它是治疗结核病的核心抗生素，每年报告的 rifampin 耐药结核病例超过 60 万，而耐药常常是 β 亚基结合位点上 Asp516、His526 或 Ser531 的突变。α-amanitin 是第三种：它由毒鹅膏（Amanita phalloides）产生，阻断 Pol II，浓度更高时还阻断 Pol III。**α-amanitin 既不碰 Pol I，也不碰细菌 RNA 聚合酶——所以把真核细胞暴露给它，还在跑的就只剩线粒体转录，新出现的 mRNA 便都是线粒体来源的。** 它对人剧毒，一粒米大小的量就含有致死剂量。",
      src: "A p.971 · A p.972"
    },
    {
      link_en: "so what is done to it",
      link_cn: "那到底对它做了些什么",
      en: "A newly made RNA is rarely usable as it stands. The first transcript of a eukaryotic gene is substantially longer than the message the cell needs: the stretches cut out of it are called introns, the stretches kept and joined up are exons, and the cutting-and-joining is splicing. Three things are done to a eukaryotic messenger RNA — a cap is put on the 5' end, the introns are spliced out, and a long run of A residues is added to the 3' end. Transfer and ribosomal RNAs are processed too, by cutting rather than by splicing: ribonucleases cut them out of one longer primary transcript in a primary and then a secondary round, and a single bacterial rRNA transcript yields the mature 16S at 1,541 nucleotides, the 23S at 2,904, the 5S at 120, and several tRNAs besides, so cutting that one molecule delivers the parts of a ribosome already in the right proportions. **A eukaryotic message is always a processed product, so the length of a gene and the length of the mRNA it yields are two different numbers.**",
      cn: "刚做出来的 RNA 很少能直接用。真核基因的第一个转录本比细胞需要的那份信息长得多：从它里面被切掉的那些段叫内含子，留下并接起来的叫外显子，这个切除加连接的过程叫剪接。对真核信使 RNA 要做三件事 —— 5′ 端加帽、把内含子剪掉、3′ 端加上一长串 A。转运 RNA 和核糖体 RNA 同样要加工，但靠的是切而不是剪：核糖核酸酶分初级和次级两轮，把它们从一条更长的初级转录本上切下来；一条细菌 rRNA 转录本切出成熟的 16S（1,541 个核苷酸）、23S（2,904 个）、5S（120 个），外加若干 tRNA —— 切这一个分子，核糖体的零件就已经按正确比例配齐了。**真核生物的信息永远是加工后的产物，所以一个基因的长度和它给出的 mRNA 的长度，是两个不同的数字。**",
      src: "A p.972 · §4.1.4, p.86 and p.91, Obr. 4.33"
    },
    {
      link_en: "the two ends first, because both of them are protections",
      link_cn: "先说两端，因为这两样都是保护",
      en: "The first nucleotide RNA polymerase lays down keeps its 5'-triphosphate, and the cap is built directly onto it: a guanosine residue is joined back-to-front through a 5'-to-5' linkage that no ordinary RNA bond resembles, and then methyl groups are added. The 3' end receives a poly(A) tail, which is a long run of adenylate residues added after transcription and copied from no template at all. Influenza carries no capping enzymes and steals one instead — its polymerase grabs a capped host transcript, cuts a short capped piece off the 5' end, and uses that stolen fragment to start viral RNA synthesis, which is the most direct evidence that a message without a cap is not usable. The tail is the opposite kind of lesson: many bacterial mRNAs get poly(A) tails as well, and there the tail stimulates decay instead of preventing it, so what a tail means has to be read off the organism and not off the chemistry. **A capped 5' end no longer looks like an end, so the nucleases that chew inwards from one cannot get a grip on it**, and the cap doubles as the landmark the protein-making machinery uses to find the message at all.",
      cn: "RNA 聚合酶放下的第一个核苷酸保留着自己的 5′-三磷酸，帽子就直接搭在它上面：一个鸟苷残基以头对头的方式、通过一个 5′-对-5′ 的连接接上去 —— 普通 RNA 里没有任何键长这样 —— 随后再加上甲基。3′ 端得到的是 poly(A) 尾巴，即转录之后接上去的一长串腺苷酸，不抄自任何模板。流感病毒不带加帽酶，于是去偷一个：病毒聚合酶抓住宿主一条已加帽的转录本，从 5′ 端切下一小段带帽的片段，用它来起头合成病毒 RNA —— 这是「没有帽子的信息不能用」最直接的证据。尾巴给的是相反方向的教训：许多细菌 mRNA 也会加 poly(A) 尾，而在那里尾巴促进降解、而不是阻止降解 —— 所以尾巴意味着什么，要看是什么生物，而不是看化学。**加了帽的 5′ 端不再像一个「端」，那些从 5′ 端往里啃的核酸酶因此无从下口；同时帽子还兼作地标，造蛋白的机器正是靠它才找得到这条信息。**",
      src: "A p.973–975"
    },
    {
      link_en: "now the middle of the message: two attacks by a hydroxyl group, and that is all splicing is",
      link_cn: "现在说信息的中段：两次羟基进攻，剪接的全部内容就是这个",
      en: "Splicing is two sequential transesterifications, meaning two reactions in which one ester linkage is swapped for another, each one a hydroxyl group attacking a phosphodiester bond. First, the 2'-hydroxyl of one particular adenosine sitting well inside the intron — that adenosine is the branch point — attacks the 5' splice site, cutting the RNA there and tying the intron's own 5' end back onto that adenosine, so the intron loops out as a lariat. Second, the 3'-hydroxyl of the now-freed upstream exon attacks the 3' splice site, cutting there and joining the two exons together, and the intron leaves as the lariat. The invariant GU at the intron's 5' edge and AG at its 3' edge are markers that a recognition step reads in order to find the site, and about 1% of human introns do not even use them, being removed by a separate machine that reads AU and AC instead. **The nucleophile is an adenosine buried inside the intron and not either boundary sequence, so the chemistry of splicing happens at a position the boundaries only point to.**",
      cn: "剪接就是两次接连发生的酯交换 —— 即两次「一个酯键换成另一个酯键」的反应，每一次都是一个羟基去进攻一个磷酸二酯键。第一次：内含子内部某一个特定腺苷的 2′-羟基 —— 这个腺苷叫分支点 —— 进攻 5′ 剪接位点，在那里把 RNA 切开，并把内含子自己的 5′ 端接回到这个腺苷上，于是内含子套成一个套索。第二次：刚被放开的上游外显子的 3′-羟基进攻 3′ 剪接位点，在那里切开，并把两个外显子接到一起，内含子以套索的形式离场。内含子 5′ 边不变的 GU 和 3′ 边不变的 AG，是识别步骤用来找到位点的标记；而且约 1% 的人类内含子根本不用它们，由另一套读 AU 和 AC 的机器切除。**真正的亲核基团是埋在内含子内部的一个腺苷，而不是任何一端的边界序列 —— 所以剪接的化学发生在一个「边界只是指向它」的位置上。**",
      src: "A p.976"
    },
    {
      link_en: "which exons a cell keeps is itself a decision, and a decision can be forced",
      link_cn: "留下哪些外显子本身就是一个决定 —— 而决定是可以被强行改变的",
      en: "One pre-mRNA can be spliced in more than one way: entire exons can be left out or put in, and a splice site a few nucleotides away from the usual one can be used instead. This is alternative splicing, and it produces several different proteins from one gene. It affects a small fraction of yeast transcripts and more than 95% of human genes, which resolves a real puzzle — how complex an organism is does not track how many protein-coding genes it has. Spinal muscular atrophy shows what forcing that decision is worth. Patients lack a working SMN1 gene but still carry a near-identical copy, SMN2, which by default skips exon 7 and therefore makes an unstable, useless protein. **Nusinersen is a short synthetic piece of nucleic acid designed to be complementary to the exact sequence in the SMN2 transcript that causes exon 7 to be skipped**. It pairs with that sequence and hides it from the splicing machinery, exon 7 goes in, working SMN protein appears, and the disease stops progressing — splicing is a drug target, and this is what it looks like when the target is hit.",
      cn: "同一条前体 mRNA 可以有不止一种剪法：整个外显子可以被跳过或被保留，也可以改用离常规位点只差几个核苷酸的另一个位点。这叫可变剪接，它让一个基因产出好几种不同的蛋白。它影响酵母转录本中的一小部分，以及超过 95% 的人类基因 —— 这解决了一个真实的困惑：一个生物有多复杂，并不随它有多少编码蛋白的基因而变化。脊髓性肌萎缩症则说明了「强行改变这个决定」值多少钱。患者缺少一个有功能的 SMN1 基因，但身上还有一个几乎完全相同的拷贝 SMN2，而 SMN2 默认会跳过第 7 外显子，因此做出一个不稳定、没有用的蛋白。诺西那生是一段人工合成的短核酸，被设计成与 SMN2 转录本上「导致第 7 外显子被跳过」的那段序列互补。**它与那段序列配对、把它从剪接机器眼前遮住，第 7 外显子于是被留下，有功能的 SMN 蛋白出现，病程停止推进 —— 剪接是一个药物靶点，而打中这个靶点，长的就是这个样子。**",
      src: "A p.981"
    },
    {
      link_en: "and the catalyst doing all of this cutting turns out not to be a protein",
      link_cn: "而干这些切割活的催化剂，原来根本不是蛋白",
      recall_en: "the same two hydroxyl attacks as three steps up, running with no protein enzyme present at all",
      recall_cn: "和上面第三步是同样的两次羟基进攻，只是全程没有任何蛋白酶参与",
      en: "Group I and group II introns splice themselves out of a transcript with no protein catalyst whatsoever. Thomas Cech and colleagues showed it in 1982 in a form worth having concretely: they took a ribosomal RNA gene from Tetrahymena, introns and all, transcribed it with purified bacterial RNA polymerase in a tube containing no Tetrahymena protein at all, and the RNA that came out spliced itself accurately anyway. An RNA with catalytic activity is called a ribozyme. Two more are at work in you now. The spliceosome, the machine of small RNAs plus dozens of proteins that removes most eukaryotic introns, has its catalytic centre arranged almost identically to that of a self-splicing group II intron, so the protein-studded machine still has an RNA active site. And RNase P, which trims the 5' end of every tRNA precursor, cuts precisely with its protein component removed. **A reaction with the correct product ran in a vessel provably containing no protein that could catalyse it, so the catalyst was the RNA** — and a molecule that both carries a sequence and catalyses a reaction is why an RNA world is proposed for a stage of life before proteins and DNA took those two jobs over.",
      cn: "I 型和 II 型内含子不靠任何蛋白催化剂，就把自己从转录本里剪出去。Thomas Cech 及其同事 1982 年的演示值得记住它具体的样子：他们取了四膜虫的一个核糖体 RNA 基因，连内含子一起，用纯化的细菌 RNA 聚合酶、在一支完全不含四膜虫蛋白的试管里转录它 —— 出来的 RNA 照样把自己准确地剪掉了。有催化活性的 RNA 叫核酶。另有两个此刻正在你体内运转。剪接体 —— 那台由小 RNA 加几十个蛋白组成、负责切除大多数真核内含子的机器 —— 它的催化中心与一个自剪接 II 型内含子的排布方式几乎完全一致，所以这台装满蛋白的机器，活性中心仍然是 RNA。还有 RNase P，负责削每一条 tRNA 前体的 5′ 端，把蛋白组分拿掉之后照样切得很准。**一个产物正确的反应，发生在一个可以证明不含任何能催化它的蛋白的容器里，所以催化剂就是这条 RNA —— 而一个既携带序列又能催化反应的分子，正是「RNA 世界」被提出来的理由：在蛋白和 DNA 接管这两项工作之前，生命曾有过那样一个阶段。**",
      src: "A p.976, p.979, p.985 and p.999",
      openQuestion_en: "How life on Earth actually began is not settled, and an RNA world is a hypothesis that ribozymes make plausible rather than a demonstrated history.",
      openQuestion_cn: "地球生命究竟是怎么开始的并没有定论；RNA 世界是一个被核酶变得可信的假说，而不是一段已被证明的历史。",
      see: [{ id: "L-27-2-1", en: "the ribosome, and the evidence that its active site is RNA", cn: "核糖体，以及它的活性中心是 RNA 的证据" }]
    }
  ],
  terms: [
    { en: "central dogma", cn: "中心法则",
      def_en: "Crick's 1953 statement of where information may flow: DNA to DNA, DNA to RNA, RNA to protein, with special reverse transfers in some viruses and plants. DNA specifying a protein directly has never been demonstrated.",
      def_cn: "Crick 1953 年关于信息可以往哪流的表述：DNA 到 DNA、DNA 到 RNA、RNA 到蛋白质；某些病毒和植物中还有特殊的反向传递。DNA 直接指定蛋白质这条路从未被证实。" },
    { en: "template strand and coding strand", cn: "模板链与编码链",
      def_en: "The strand copied by RNA polymerase is the template. Its partner has the same sequence as the RNA with U for T, and every regulatory sequence is written in that partner by convention, 5' to 3'. Which strand is copied is decided per gene, not per chromosome.",
      def_cn: "被 RNA 聚合酶抄的那条是模板链。它的搭档序列与 RNA 相同（T 换成 U），按惯例所有调控序列都写成搭档链的样子，5′ 到 3′。哪条链被抄是逐个基因决定的，不是逐条染色体决定的。" },
    { en: "promoter", cn: "启动子",
      def_en: "The DNA sequence RNA polymerase binds in order to fix where transcription of the neighbouring gene starts. Numbered from +1 at the first RNA nucleotide with no zero; TATAAT at -10 and TTGACA at -35 in bacteria. Efficiency is so sequence-sensitive that one base pair can change binding by orders of magnitude.",
      def_cn: "RNA 聚合酶为了固定「旁边这个基因从哪里开始转录」而结合的那段 DNA 序列。编号以 RNA 第一个核苷酸为 +1、没有 0 号位；细菌里 -10 处 TATAAT、-35 处 TTGACA。它对序列极其敏感，改一个碱基对就能让结合速率差几个数量级。" },
    { en: "sigma subunit", cn: "σ 亚基",
      def_en: "The sixth subunit of the bacterial holoenzyme, α₂ββ'σ, which steers the core enzyme to one set of promoters and then dissociates and is reused. E. coli has several — σ⁷⁰ ordinarily, σ³² under heat stress — so swapping one subunit switches a whole gene set on. Anti-sigma proteins bind one and hold it out of use.",
      def_cn: "细菌全酶 α₂ββ′σ 里的第六个亚基，把核心酶引向一套启动子，随后脱落、可以再用。大肠杆菌有好几种 —— 平时 σ⁷⁰，热胁迫时 σ³² —— 所以换一个亚基就打开一整套基因。抗 σ 蛋白结合住某个 σ，把它扣住不让用。" },
    { en: "transcription bubble", cn: "转录泡",
      def_en: "The 17 bp of DNA held unwound inside the moving enzyme, with an 8 bp RNA-DNA hybrid in it. Moving it means rotating DNA that is usually pinned, so positive supercoils pile up ahead and negative ones behind, and topoisomerases remove them.",
      def_cn: "被移动中的酶撑开的那 17 bp DNA，里面有一段 8 bp 的 RNA-DNA 杂合链。让它前进就得让通常被固定住的 DNA 转动，于是前方堆正超螺旋、后方堆负超螺旋，由拓扑异构酶拆掉。" },
    { en: "rho-independent and rho-dependent terminators", cn: "不依赖 rho 与依赖 rho 的终止子",
      def_en: "The first is a G+C-rich palindrome followed by 4 to 10 template A residues: the transcript folds into a hairpin that tears apart the weak A=U pairs of the hybrid and falls off. The second carries a CA-rich rut element where the protein rho binds the RNA and walks 5' to 3' on ATP until it reaches the paused enzyme.",
      def_cn: "前者是一段富含 G+C 的回文序列，后面跟着模板上 4 到 10 个 A：转录本折成发夹，把杂合链里弱的 A=U 拽开，于是脱落。后者带一段富含 CA 的 rut 元件，rho 蛋白在那里结合 RNA，靠 ATP 从 5′ 向 3′ 走，直到追上停顿的酶。" },
    { en: "sedimentation coefficient", cn: "沉降系数",
      def_en: "How fast a molecule travels through solution in a centrifuge, written in S; it rises with mass and with compactness, and it is how the rRNAs are named — 23S, 16S and 5S in prokaryotes, 28S, 18S, 5.8S and 5S in eukaryotes.",
      def_cn: "分子在离心机中穿过溶液的快慢，以 S 表示；质量越大、越紧凑其值越高。rRNA 就是按它命名的 —— 原核 23S、16S、5S，真核 28S、18S、5.8S、5S。" },
    { en: "preinitiation complex", cn: "前起始复合物",
      def_en: "The assembly at a Pol II promoter: TBP, or TFIID where there is no TATA box, then TFIIB, TFIIA, TFIIF with Pol II, then TFIIE and TFIIH. Counting subunits it can exceed fifty polypeptides against six for the bacterial holoenzyme; TFIIH supplies both the helicase and a kinase for the polymerase's tail.",
      def_cn: "Pol II 启动子上的装配体：TBP（没有 TATA 盒时改由 TFIID 带来），然后 TFIIB、TFIIA、带着 Pol II 的 TFIIF，最后 TFIIE 与 TFIIH。数亚基可以超过五十条多肽，对照细菌全酶的六个；TFIIH 同时提供解旋酶和给聚合酶尾巴加磷酸的激酶。" },
    { en: "CTD", cn: "CTD（羧基末端结构域）",
      def_en: "A tail on Pol II's largest subunit made of repeats of -YSPTSPS-, 26 in yeast and 52 in humans. Its pattern of phosphates changes through elongation and determines which processing machinery is bound, which is what makes capping, splicing and tailing happen on a transcript still attached to the polymerase.",
      def_cn: "Pol II 最大亚基上的一条尾巴，由 -YSPTSPS- 重复构成，酵母 26 个、人 52 个。延长过程中它的磷酸模式不断变化，决定哪套加工机器结合上来 —— 加帽、剪接、加尾之所以发生在「还挂在聚合酶上的转录本」上，原因就在这里。" },
    { en: "intron / exon / splicing", cn: "内含子／外显子／剪接",
      def_en: "A eukaryotic transcript is longer than the cell needs. The stretches cut out are introns, the ones kept and joined are exons, and the cutting-and-joining is splicing — two transesterifications begun by the 2'-hydroxyl of a branch-point adenosine, which leaves the intron as a lariat.",
      def_cn: "真核转录本比细胞需要的长。被切掉的段叫内含子，留下并连接起来的叫外显子，这个切除加连接的过程叫剪接 —— 两次酯交换，由分支点腺苷的 2′-羟基发动，内含子以套索的形式离场。" },
    { en: "alternative splicing", cn: "可变剪接",
      def_en: "Splicing one pre-mRNA in more than one way — skipping or keeping whole exons, or using a splice site a few nucleotides from the usual one — so one gene yields several proteins. It affects more than 95% of human genes, and the drug nusinersen works by forcing one such decision in the SMN2 transcript.",
      def_cn: "同一条前体 mRNA 有不止一种剪法 —— 跳过或保留整个外显子，或改用离常规位点几个核苷酸的另一个位点 —— 于是一个基因给出好几种蛋白。它影响超过 95% 的人类基因；诺西那生这个药，正是靠强行改变 SMN2 转录本上的这样一个决定起作用的。" },
    { en: "ribozyme", cn: "核酶",
      def_en: "An RNA with catalytic activity. Group I and group II introns cut themselves out with no protein present, the spliceosome's catalytic centre is RNA arranged almost as a group II intron is, and RNase P trims tRNA precursors with its protein component removed.",
      def_cn: "有催化活性的 RNA。I 型与 II 型内含子在没有蛋白在场时把自己切出去；剪接体的催化中心是 RNA，排布方式几乎与 II 型内含子相同；RNase P 在去掉蛋白组分后照样能削 tRNA 前体。" }
  ]
};

/* -------------------------------------------------------------- 核苷酸与核酸 ---- */
/* The chapter 8 spine was read and approved as it stood, so its telling is kept
   step for step wherever it appears here. What the Czech sections add is the
   monomer itself and the backbone — which the approved chain never states, because
   it opens at the double helix — plus the naming ladder, the pairing geometry, and
   the water content at which B turns into A. Those are folded in around it. */
window.BIOLITE_SPINE["key:nucleotides"] = {
  assumed: ["DNA", "RNA", "gene", "protein", "enzyme", "cell", "base", "nucleotide",
            "double helix", "hydrogen bond", "ATP", "ADP", "AMP", "phosphate", "sugar",
            "ribose", "amino acid", "hormone", "receptor", "ribosome", "cofactor",
            "coenzyme", "active site", "bacteria", "catalysis", "chromosome",
            "hydrophobic", "ester", "amide", "telomere", "transcription"],
  nodeTitle_en: "Nucleotides and nucleic acid structure",
  nodeTitle_cn: "核苷酸与核酸的结构",
  title_en: "One repeating unit of three parts, how the double helix was worked out from it, and what the same unit does when it is not in a chain",
  title_cn: "一个由三部分组成的重复单元、双螺旋是怎么从它推出来的，以及这个单元不在链里时又在干什么",
  steps: [
    {
      en: "A nucleic acid is a chain of one repeating unit, and that unit has exactly three parts: a nitrogen-containing ring called a base, a five-carbon sugar called a pentose, and a residue of phosphoric acid, the phosphate. A unit carrying all three is a nucleotide; a base joined to a pentose with no phosphate at all is a nucleoside, so the two words differ by exactly one phosphate group. The base is held to carbon 1 of the pentose by an N-glycosidic bond, which runs from a nitrogen of the base to that sugar carbon — from N9 in a purine and from N1 in a pyrimidine. **That single bond is the whole of what holds a base onto the chain: break it and the chain survives intact, carrying a sugar with no base at all.**",
      cn: "核酸是一条由同一种重复单元串成的链，而这个单元恰好由三部分组成：一个含氮的环，叫碱基；一个五碳糖，叫戊糖；以及一个磷酸残基，即磷酸。三部分齐全的单元就是核苷酸；碱基只接在戊糖上、一个磷酸都没有，那叫核苷 —— 所以这两个词的差别恰好是一个磷酸基团。碱基通过一根 N-糖苷键接在戊糖的第 1 位碳上，这根键从碱基上的一个氮出发连到糖的那个碳 —— 嘌呤用 N9，嘧啶用 N1。**把碱基固定在链上的，全部就是这一根键：断掉它，链完好无损，只是那个糖上没有碱基了。**",
      src: "§4.1, p.66 and p.67, Obr. 4.2",
      see: [{ id: "L-8-3-1", en: "losing a base from an intact chain, and what repairs it", cn: "完整的链上掉了一个碱基，以及什么来修它" }]
    },
    {
      link_en: "so, which bases, and what are they all called?",
      link_cn: "那么，是哪些碱基，它们又都叫什么？",
      en: "Five bases carry almost all of the work. Adenine and guanine are purines, meaning the ring system is two rings fused together; cytosine, uracil and thymine are pyrimidines, a single six-membered ring. In a written sequence each is one letter: A, G, C, U, T. The names then fall into a ladder with regular endings — adenine gives the nucleoside adenosine and the nucleotide adenylate, abbreviated AMP; guanine gives guanosine and GMP; uracil gives uridine and UMP; cytosine gives cytidine and CMP — so a purine nucleoside ends in -osine, a pyrimidine nucleoside ends in -idine, and adding the phosphate turns the ending into -ylate. Replace the ribose with 2-deoxy-D-ribose and every name takes the prefix deoxy-, giving dAMP, dGMP and dCMP; that row contains no uracil at all, because thymine stands in its place as dTMP. **Uracil occurs practically only in RNA and thymine predominantly in DNA, which makes the base the quicker of the two tests: find a U and you are holding RNA.**",
      cn: "承担几乎全部工作的碱基有五种。腺嘌呤（adenine, A）和鸟嘌呤（guanine, G）属于嘌呤，意思是它们的环系由两个环稠合而成；胞嘧啶（cytosine, C）、尿嘧啶（uracil, U）和胸腺嘧啶（thymine, T）属于嘧啶，只有一个六元环。写成序列时每一种只用一个字母：A、G、C、U、T。名字随后排成一道词尾规整的阶梯 —— 腺嘌呤给出核苷腺苷、核苷酸腺苷酸（缩写 AMP）；鸟嘌呤给出鸟苷和 GMP；尿嘧啶给出尿苷和 UMP；胞嘧啶给出胞苷和 CMP —— 所以嘌呤核苷以 -osine 结尾，嘧啶核苷以 -idine 结尾，加上磷酸后词尾变成 -ylate。把核糖换成 2-脱氧-D-核糖，每个名字都加上前缀 deoxy-，得到 dAMP、dGMP、dCMP；这一行里根本没有尿嘧啶，因为那个位置由胸腺嘧啶顶上，写作 dTMP。**尿嘧啶实际上只出现在 RNA 里，胸腺嘧啶主要出现在 DNA 里，所以碱基是两者中更快的判据：看到 U，手上拿的就是 RNA。**",
      src: "§4.1, pp.66–67, Tab. 4.1"
    },
    {
      link_en: "and the units are strung together by one kind of bond, which makes the chain very dull on purpose",
      link_cn: "而把这些单元串起来的只有一种键 —— 这条链单调得恰到好处",
      en: "Nucleosides are joined by phosphodiester bonds: one phosphate esterified twice over, to carbon 3 of one pentose and to carbon 5 of the next. RNA can additionally form a 2'-5' linkage, because ribose keeps the hydroxyl at carbon 2 that deoxyribose has lost, and an extra reactive hydroxyl means RNA can be joined in a way DNA simply cannot be. **The result is a monotonous backbone of alternating sugar and phosphate with the bases hanging off the side, so the only thing that differs from one nucleic acid to another is the order of the bases.**",
      cn: "核苷之间靠磷酸二酯键连起来：一个磷酸酯化两次，一头连到某个戊糖的第 3 位碳，另一头连到下一个戊糖的第 5 位碳。RNA 还可以额外形成 2′-5′ 连接，因为核糖保留着第 2 位碳上的羟基，而脱氧核糖没有；糖上多出一个能反应的羟基，就意味着 RNA 能以一种 DNA 根本做不到的方式被连接起来。**结果是一条糖与磷酸交替、单调重复的骨架，碱基挂在侧面 —— 因此不同核酸之间唯一不同的东西，就是碱基的排列顺序。**",
      src: "§4.1.2, p.72, Obr. 4.7",
      beyond: true,
      beyondNote: "p.72 states that RNA can also form 2'-5' linkages. That a spliced-out intron is held in a lasso by exactly such a bond is developed elsewhere, not on this page."
    },
    {
      link_en: "a backbone built this way has two different ends, so it has a direction — and a direction has consequences everywhere later",
      link_cn: "这样搭出来的骨架两端不同，所以它有方向 —— 而方向在后面到处都有后果",
      en: "One end of a chain carries a free 5' position and the other a free 3' position, so a nucleic acid runs one way and not the other; by convention a sequence is written with the 5' end on the left, so ACG means adenosine at the 5' end and guanosine at the 3' end. In a double helix the two chains are antiparallel: one runs 5' to 3' upward through the helix while its partner runs 5' to 3' downward. **Every enzyme that copies DNA works only 5' to 3', so at a fork where the two strands being copied face opposite ways, one new strand can be made continuously and the other cannot.**",
      cn: "一条链的一端留着自由的 5′ 位，另一端留着自由的 3′ 位，所以核酸有一个走向；按惯例序列写作 5′ 端在左，因此 ACG 表示 5′ 端是腺苷、3′ 端是鸟苷。在双螺旋里，两条链是反平行的：一条沿 5′→3′ 在螺旋中向上走，另一条沿 5′→3′ 向下走。**所有复制 DNA 的酶都只能按 5′→3′ 工作，所以在两条被抄的链朝向相反的复制叉上，一条新链可以连续合成，另一条不能。**",
      src: "§4.1.2, p.72 and p.73",
      see: [{ id: "L-25-1-1", en: "what a replication fork actually does about that", cn: "复制叉究竟拿这件事怎么办" }]
    },
    {
      link_en: "that is the chain. Now the shape it takes, and how anyone worked that out",
      link_cn: "链讲完了。现在说它摆出的形状，以及这形状当初是怎么被推出来的",
      en: "The double helix was worked out from four experiments, and the first of them showed that DNA carries heredity at all. Pneumococcus comes in two forms: S bacteria have a polysaccharide capsule and kill mice; R bacteria have no capsule and do not. Add an extract of heat-killed S bacteria to living R bacteria and the R bacteria turn into S bacteria, permanently and heritably. **Avery, MacLeod and McCarty purified that extract step by step, and what was left when they had finished was DNA.**",
      cn: "双螺旋是从四组实验推出来的，其中第一组证明了 DNA 确实携带遗传信息。肺炎链球菌有两型：S 菌有多糖荚膜，能让小鼠死亡；R 菌没有荚膜，不致死。把加热杀死的 S 菌提取物加进活的 R 菌里，R 菌变成了 S 菌，而且这个性状会一代代传下去。**Avery、MacLeod 与 McCarty 一步步纯化那份提取物，纯化到最后剩下的是 DNA。**",
      src: "A p.269",
      beyond: true,
      beyondNote: "The S/R strains are Griffith's 1928 setup, carried in as context; §8.2 itself opens at Avery."
    },
    {
      link_en: "that showed DNA can carry it. This one showed protein does not",
      link_cn: "上一组证明 DNA 能携带遗传信息；这一组排除了蛋白",
      en: "A phage is a virus that infects bacteria: a protein coat with DNA inside, which sticks to a cell and injects something into it. Hershey and Chase labelled the coat with sulfur-35 and the DNA with phosphorus-32 — sulfur is in protein and not in DNA, phosphorus is in DNA and not in protein, so the two labels cannot be confused. They let the phage infect E. coli, then knocked the spent coats off the cells in a kitchen blender. **The phosphorus went into the cells and the sulfur stayed outside: DNA entered, protein did not.**",
      cn: "噬菌体（phage）是专门感染细菌的病毒：一个蛋白外壳，里面装着 DNA，它贴到细菌上、往里注射东西。Hershey 与 Chase 用 ³⁵S 标记外壳、用 ³²P 标记 DNA —— 硫只在蛋白里、不在 DNA 里，磷只在 DNA 里、不在蛋白里，所以两个标记不会混。他们让噬菌体感染大肠杆菌，再用厨房搅拌机把用完的空壳从细胞上打下来。**磷进了细胞，硫留在外面：进去的是 DNA，不是蛋白。**",
      src: "A p.269"
    },
    {
      link_en: "so the material is DNA. What shape is it?",
      link_cn: "所以遗传物质是 DNA。那它长什么样？",
      en: "Chargaff measured base composition species by species and found A equal to T and G equal to C every time, while the ratio between species varies. **Any model put forward for the shape of DNA had to produce those two equalities.**",
      cn: "Chargaff 一个物种一个物种地测碱基组成，每次都得到 A = T、G = C，而物种之间的比例各不相同。**任何为 DNA 形状提出的模型，都必须给出这两个等式。**",
      src: "A p.270"
    },
    {
      link_en: "and the second constraint on any shape came off a piece of film",
      link_cn: "对形状的第二个约束，来自一张底片",
      en: "Franklin and Wilkins' x-ray pattern had two spacings in it: 3.4 Å between stacked bases and 34 Å for one full turn, from which ten base pairs per turn follows. One correction goes with that number. Ten is the value in a dried fibre; in solution the helix has 10.5 base pairs per turn. **Give 10.5 in an exam, because a cell is wet and the dried figure is an artefact of the sample.**",
      cn: "Franklin 与 Wilkins 的 X 射线衍射图上有两个周期：堆叠碱基之间 3.4 Å，一整圈 34 Å，由此得到每圈十个碱基对。这个数字要配一处更正：十是干燥纤维里的数值，溶液中每圈是 10.5 个碱基对。**考试答 10.5 —— 因为细胞是湿的，干燥状态下那个数字是样品带来的假象。**",
      src: "A p.272"
    },
    {
      link_en: "and that difference between dry and wet is where the letters A and B come from",
      link_cn: "而「干」和「湿」的这个差别，正是 A 和 B 这两个字母的来历",
      en: "A right-handed double helix has two unequal channels spiralling up its outside — a wide major groove and a narrow minor groove — and the edges of the bases face into them, so a protein can read the sequence from outside without the two strands being pulled apart. What changes between one helical form and another is largely those grooves. Franklin's fibres gave two different diffraction patterns depending on how much water they held, and the two patterns were simply labelled A and B; the switch happens when the relative water content around the DNA falls to about 75%, and A is wider and flatter than B, with a deep major groove and a very shallow minor one. A third form, Z, is left-handed, named after the zigzag its backbone traces, and it is formed by particular sequences such as d(CGCATGCG) in particular stretches of a chromosome. **That is all the letters mean: A is the drier fibre, B is the wetter one, and DNA inside a cell is wet, so B is the form it is normally in.**",
      cn: "右手双螺旋的外侧盘旋着两条宽窄不等的沟槽 —— 宽的叫主沟，窄的叫次沟 —— 碱基的边缘朝向沟内，所以蛋白质可以从外面读出序列，而不必把两条链拉开。一种螺旋形式与另一种之间变的，主要就是这两条沟。Franklin 的纤维含水量不同，给出的衍射图也不同，这两张图当时就被简单地标成 A 和 B；周围相对含水量降到约 75% 时发生转变，A 比 B 更宽更扁，主沟很深、次沟很浅。第三种是 Z 型，左手螺旋，名字来自它骨架走出的锯齿形（zigzag），由某些特定序列（例如 d(CGCATGCG)）在染色体的某些特定区段形成。**这两个字母的全部含义就是这个：A 是较干的那张，B 是较湿的那张；细胞里的 DNA 是湿的，所以它平常就处在 B 型。**",
      src: "A p.272–273 · §4.1.2, p.75, Obr. 4.11",
      beyond: true,
      beyondNote: "The humidity dependence is on both sets of pages; that the letters are simply the two pattern labels is standard history, added here because the naming was asked about.",
      openQuestion_en: "What Z-DNA does in a cell is an open question — the structure is solid, the function is not.",
      openQuestion_cn: "Z-DNA 在细胞里究竟做什么，是一个悬而未决的问题 —— 结构是确定的，功能不是。",
      see: [{ id: "L-28-1-1", en: "how a protein actually reads bases through the major groove", cn: "蛋白究竟怎么通过主沟读碱基" }]
    },
    {
      link_en: "and inside that helix, which base goes with which is decided by one kind of bond",
      link_cn: "而在这个螺旋内部，谁和谁配对由一种键决定",
      en: "For spatial reasons hydrogen bonds form only between particular partners: adenine with thymine through two hydrogen bonds, guanine with cytosine through three. Both pairs have the same geometry — 10.85 Å between the two C1' atoms and a glycosidic-bond angle of 51.5° — so a pair of any sequence fits the same helix without making the backbone bulge or pinch. Because a base has exactly one legal partner, the sequence of one strand fixes the sequence of the other: the two are complementary though never identical, so each strand is a full set of instructions for rebuilding the strand opposite it. **Hydrogen bonds decide which base pairs with which. That is specificity, and it is the whole of what they contribute.**",
      cn: "出于空间上的原因，氢键只在特定的搭档之间形成：腺嘌呤与胸腺嘧啶之间两个氢键，鸟嘌呤与胞嘧啶之间三个氢键。两种配对的几何完全相同 —— 两个 C1′ 原子之间 10.85 Å，糖苷键夹角 51.5° —— 所以任何序列的碱基对都能装进同一个螺旋，不会让骨架鼓出来或缩进去。由于每个碱基只有一个合法搭档，一条链的序列就把另一条链的序列定死了：两条链互补但绝不相同，因此每一条链本身就是重建对面那条链的一整套说明书。**氢键决定谁和谁配对。这就是特异性，而它们贡献的也仅止于此。**",
      src: "§4.1.2, p.73, Obr. 4.9 · A p.271"
    },
    {
      link_en: "so if not hydrogen bonds, then what actually holds the two strands together?",
      link_cn: "那如果不是氢键，究竟是什么把两条链维系住的？",
      en: "Two things do it. Metal cations such as Mg²⁺ and Mn²⁺ sit on the backbone and shield the negative charges on its phosphates, which are fully ionised at pH 7 and would otherwise push the two strands apart. And the bases, being flat, lie face to face all the way up the middle of the helix like a stack of coins — that face-to-face contact is worth energy, it is held together mainly by hydrophobic forces in water, and it is what stacking means. **Stacking and cation shielding are what make the two strands hard to pull apart, and they are why GC-rich DNA is more stable** — counting hydrogen bonds, three against two, predicts the same thing for the wrong reason.",
      cn: "有两样东西在起作用。一是 Mg²⁺、Mn²⁺ 这类金属阳离子贴在骨架上，屏蔽掉磷酸的负电荷 —— pH 7 时这些磷酸完全解离，否则会把两条链推开。二是碱基本身是扁平的，它们在螺旋中央一路面对面地叠上去，像一摞硬币 —— 这种面对面的接触本身就值能量，在水中主要靠疏水力维系，这就是「堆积（stacking）」的意思。**把两条链拉开之所以困难，靠的是堆积与阳离子屏蔽；富含 GC 的 DNA 更稳定，原因也在这里 —— 数氢键（三个对两个）会得到同一个结论，但理由是错的。**",
      src: "A p.271 · §4.1.2, p.74, Obr. 4.10"
    },
    {
      link_en: "so far, the plain duplex. It is not the only thing DNA does",
      link_cn: "以上都是普通双链。DNA 能做的不止这些",
      en: "A base already in a Watson-Crick pair still has a free face pointing into the major groove — the N-7, O6 and N6 atoms of purines, called the Hoogsteen positions — and a third strand can hydrogen-bond there, giving a triplex. What it is for: these polypurine and polypyrimidine tracts sit in the regions that regulate expression of some eukaryotic genes, so a stretch of DNA can switch by changing shape rather than by changing sequence. Four guanine-rich strands can also pair instead of two, giving a G-tetraplex. **What that one is for: the guanine-rich single strand at the end of a chromosome folds into a G-tetraplex, which is how a telomere caps itself.**",
      cn: "已经配好对的碱基还有一面朝着主沟空着 —— 嘌呤的 N-7、O6、N6，叫 Hoogsteen 位点 —— 第三条链可以在那里形成氢键，得到三链体（triplex）。有什么用：这些多聚嘌呤／多聚嘧啶区段正好位于某些真核基因的调控区，所以一段 DNA 可以靠改变形状来开关，而不必改变序列。四条富含鸟嘌呤的链也能互相配对而不是两条，得到 G-四链体。**后者有什么用：染色体末端那段富含鸟嘌呤的单链会折成一个 G-四链体 —— 端粒就是这样把自己封住的。**",
      src: "A p.274, figure 8-20",
      beyond: true,
      beyondNote: "The telomere connection is standard and examinable; §8.2 introduces the G-tetraplex as a structure and does not develop the telomere on these pages.",
      see: [{ id: "L-9-1-1", en: "telomeres, and how chromosome ends are studied", cn: "端粒，以及染色体末端怎么被研究" },
            { id: "L-28-3-1", en: "how eukaryotic genes are actually regulated", cn: "真核基因调控的完整机制" }]
    },
    {
      link_en: "and two commoner departures from the plain duplex need no third strand at all",
      link_cn: "另有两种更常见的「离开普通双链」，根本不需要第三条链",
      en: "The simplest deviation is a bend: bends occur in the DNA helix wherever four or more adenosine residues appear sequentially in one strand, and six adenosines in a row produce a bend of about 18 degrees, which matters because some proteins bind bent DNA. A palindrome is a word or sentence spelled identically forward and backward — ROTATOR, or NURSES run — and in DNA it means an inverted repeat, a self-complementary sequence in one strand repeated in the opposite orientation in the paired strand. **Self-complementarity within a strand is what confers the potential to form a hairpin, which folds one strand back on itself, or a cruciform, which uses both strands of the duplex.** A mirror repeat has a symmetric sequence within each strand, but mirror repeats do not have complementary sequences within the same strand and therefore form neither, so symmetry alone is not enough.",
      cn: "最简单的偏离是弯折：只要一条链上连续出现四个或更多腺苷残基，DNA 螺旋在那里就会弯，而连续六个腺苷产生约 18 度的弯折——这之所以要紧，是因为有些蛋白结合的正是弯折的 DNA。回文（palindrome）指正读反读拼写完全相同的词或句子——ROTATOR，或者 NURSES run——在 DNA 里它指的是反向重复：一条链上自身互补的序列，在配对链上以相反方向重复出现。**一条链内部的自身互补性，正是形成发夹或十字形的潜力所在：发夹由一条链折回自身构成，十字形则动用双链的两条链。** 镜像重复在每条链内部序列对称，但镜像重复在同一条链内并不具有互补序列，因此两者都形成不了——光有对称性是不够的。",
      src: "A p.273 · A p.274, Figure 8-19"
    },
    {
      link_en: "DNA is double-stranded from the start. RNA is not, and everything below follows from that",
      link_cn: "DNA 从一开始就是双链，RNA 不是 —— 下面几条全都由此而来",
      en: "RNA is made as a single strand, so it folds back on itself wherever two nearby stretches are complementary. **That fold is a hairpin, and a hairpin is a signal: one appearing in a growing transcript is what makes RNA polymerase let go and stop transcribing.**",
      cn: "RNA 以单链形式合成，所以只要附近两段互补，它就会折回自身。**这个折叠就是发夹 —— 而发夹是一个信号：正在延长的转录本上出现一个发夹，RNA 聚合酶就会松开、停止转录。**",
      src: "A p.275–277"
    },
    {
      link_en: "and when it does pair, the geometry is not DNA's",
      link_cn: "而它一旦配上对，几何形状也和 DNA 不一样",
      recall_en: "the one hydroxyl at carbon 2 named in the second step, now deciding a shape",
      recall_cn: "第二步说过的第 2 位碳上那一个羟基，现在决定了一个形状",
      en: "An RNA strand ends up double-stranded in exactly two situations: it folds back and pairs with itself, which is the hairpin above, or it pairs with the DNA template it is being copied from, which is the hybrid inside the polymerase. Both of those short duplexes are A-form, never B-form, and the rest of the molecule is single-stranded and no helix at all. **DNA gets to pick B because its sugar has no 2'-hydroxyl; RNA has one, it does not fit B-form geometry, and so a paired stretch of RNA has no choice — A is the only form open to it.**",
      cn: "一条 RNA 只有两种情况会变成双链：一是它折回来和自己配对，就是上一步说的发夹；二是它和正在被抄写的那条 DNA 模板配对，就是聚合酶内部那段杂合链。这两种短双链都是 A 型、绝不会是 B 型；分子的其余部分是单链，根本不构成螺旋。**DNA 之所以能选 B 型，是因为它的糖上没有 2′-羟基；RNA 有，而这个羟基塞不进 B 型的几何 —— 所以配上对的 RNA 没得选，A 型是它唯一能用的形式。**",
      src: "A p.275–277 · §4.1, p.67"
    },
    {
      link_en: "a single strand that folds has a shape, and a shape can be an active site",
      link_cn: "会折叠的单链就有形状，而形状可以成为活性中心",
      recall_en: "the same move as the hairpin two steps up — folding is what gives a single strand a shape",
      recall_cn: "和上面发夹是同一个动作 —— 折叠正是单链获得形状的方式",
      en: "A eukaryotic gene is transcribed into an RNA longer than the cell needs; the stretches cut out are introns, the ones kept and joined up are exons, and the cutting-and-joining is splicing. An intron is not a separate molecule — it is part of the same RNA, until it is removed. Now the point: a single strand that folds has a fixed three-dimensional shape, and a shape can hold two reacting groups in position, which is what an active site is. A group I or group II intron folds into one and then cuts itself out of the transcript with no protein involved. Two more are worth having: RNase P, whose catalytic part is RNA, trims tRNA precursors to length; and the ribosome forms every peptide bond in a cell with RNA at its active site, not protein. **An intron is itself RNA, so an intron removing itself is RNA catalysing a reaction on RNA — and an RNA with catalytic activity is called a ribozyme.**",
      cn: "真核基因转录出来的 RNA 比细胞实际需要的长；被剪掉的那些段叫内含子，留下并接在一起的叫外显子，这个剪切拼接的过程叫剪接。内含子不是另一个分子 —— 在被切掉之前，它就是同一条 RNA 的一部分。关键在这里：会折叠的单链就有固定的三维形状，而形状可以把两个要反应的基团摆到正确的相对位置上，这就是活性中心。I 型或 II 型内含子折出这样一个结构，然后不靠任何蛋白把自己从转录本里剪出去。另外两个值得记：RNase P 的催化部分是 RNA，负责把 tRNA 前体切到正确长度；核糖体形成细胞里每一个肽键，其活性中心是 RNA 而不是蛋白。**内含子本身就是 RNA，所以「内含子自己剪自己」就是 RNA 在催化一个针对 RNA 的反应 —— 而有催化活性的 RNA 就叫核酶。**",
      src: "A p.275–277",
      openQuestion_en: "Why introns are there at all is a separate question, and not a settled one.",
      openQuestion_cn: "至于内含子当初为什么会存在，那是另一个问题，而且并没有定论。",
      see: [{ id: "L-27-2-1", en: "the ribosome as a ribozyme", cn: "核糖体是一个核酶" }]
    },
    {
      link_en: "and the same three-part unit, left loose instead of strung into a chain, does three other jobs entirely",
      link_cn: "而同样这个三部分的单元，如果不串进链里、就那么松散地待着，它干的完全是另外三件事",
      en: "ATP is the central carrier of chemical energy in cells, and that role belongs to a single loose nucleotide doing nothing whatever with its base as a letter of a message. Second, NAD, FAD and coenzyme A are cofactors carrying out completely unrelated chemistry — NAD and FAD move electrons, coenzyme A carries acyl groups — yet all three contain an adenosine that takes no direct part in the reaction, because the adenosine is a binding handle: an enzyme grips it and uses that grip to pull the business end of the cofactor into its active site. The measurement that settles it is worth the space: strip the adenosine off acetoacetyl-CoA and its reactivity as a substrate for β-ketoacyl-CoA transferase falls by a factor of 10⁶. Third, a nucleotide can be a message — cyclic AMP, made from ATP by adenylyl cyclase, is the common second messenger produced when a hormone arrives at the cell surface; ppGpp is made by bacteria when amino acids run short and shuts off rRNA and tRNA synthesis so no more unusable ribosomes get built; and ATP and ADP act as neurotransmitters, which is why the anticlotting drug clopidogrel works by blocking a receptor for one of them. **One chemical scaffold — base, sugar, phosphate — is reused across four unrelated jobs, and nothing about the base-pairing role predicts any of the other three.**",
      cn: "ATP 是细胞中化学能的中心载体，而承担这个角色的就是一个游离的单个核苷酸，它的碱基在这里完全没有被当作信息里的一个字母来用。第二，NAD、FAD 和辅酶 A 都是辅因子，干的化学彼此毫不相干 —— NAD 和 FAD 搬电子，辅酶 A 搬酰基 —— 可这三者身上都含有一个腺苷，而这个腺苷并不直接参与反应，因为它是一个「结合用的把手」：酶抓住它，靠这一抓把辅因子上真正干活的那一端拽进自己的活性中心。一锤定音的那个测量值得占篇幅：把腺苷从乙酰乙酰辅酶 A 上去掉，它作为 β-酮脂酰辅酶 A 转移酶底物的反应性下降 10⁶ 倍。第三，核苷酸可以是一条消息 —— 环化 AMP 由 ATP 经腺苷酸环化酶生成，是激素抵达细胞表面时产生的常见第二信使；ppGpp 由细菌在氨基酸不够时产生，关掉 rRNA 和 tRNA 的合成，于是不再造那些用不上的核糖体；ATP 和 ADP 还充当神经递质，抗血小板药氯吡格雷正是靠阻断其中一个的受体起作用的。**一套化学骨架 —— 碱基、糖、磷酸 —— 被重复使用在四件互不相干的工作上，而碱基配对那个角色，对其余三个一点预测力都没有。**",
      src: "A p.294–296",
      see: [{ id: "L-13-3-1", en: "what ATP actually does with that energy", cn: "ATP 究竟拿这份能量做什么" },
            { id: "L-12-1-1", en: "the signalling cascades cAMP sits inside", cn: "cAMP 所处的那些信号级联" }]
    }
  ],
  terms: [
    { en: "nucleoside", cn: "核苷",
      def_en: "A base joined to a pentose and nothing else, through an N-glycosidic bond at carbon 1 of the sugar — from N9 in a purine, from N1 in a pyrimidine.",
      def_cn: "碱基与戊糖结合、到此为止的化合物，二者通过糖第 1 位碳上的 N-糖苷键相连 —— 嘌呤从 N9 出发，嘧啶从 N1 出发。" },
    { en: "nucleotide", cn: "核苷酸",
      def_en: "A base, a pentose and a phosphate together — one phosphate more than a nucleoside, and the repeating unit of DNA and RNA. Left loose in the cytosol the same molecule carries energy, acts as a cofactor handle, and serves as a signal.",
      def_cn: "碱基、戊糖与磷酸三者合一 —— 比核苷多一个磷酸，是 DNA 与 RNA 的重复单元。同一个分子游离在胞质中时，还搬运能量、充当辅因子的把手、并作为信号使用。" },
    { en: "pentose", cn: "戊糖",
      def_en: "The five-carbon sugar of the repeating unit: D-ribose in RNA, 2-deoxy-D-ribose in DNA, the two differing only by a hydroxyl at carbon 2. That one group forbids B-form geometry to paired RNA and makes RNA the more fragile molecule.",
      def_cn: "重复单元中的五碳糖：RNA 用 D-核糖，DNA 用 2-脱氧-D-核糖，二者只差第 2 位碳上的一个羟基。正是这一个基团让配对的 RNA 用不了 B 型几何，也让 RNA 成为较易被破坏的那一个。" },
    { en: "phosphodiester bond", cn: "磷酸二酯键",
      def_en: "One phosphate esterified twice, to carbon 3 of one pentose and carbon 5 of the next; it is what makes a nucleic acid a chain, and it leaves a backbone so monotonous that only the base order differs between one nucleic acid and another.",
      def_cn: "一个磷酸酯化两次，一头接某个戊糖的第 3 位碳、一头接下一个戊糖的第 5 位碳；核酸之所以成链靠的就是它，而它留下的骨架单调到只剩碱基顺序在变。" },
    { en: "antiparallel strands", cn: "反平行链",
      def_en: "The two chains of a duplex run in opposite 5' to 3' directions. Since every copying enzyme works only 5' to 3', this is why the two new strands at a replication fork cannot be made the same way.",
      def_cn: "双链中两条链的 5′→3′ 方向彼此相反。既然所有复制酶都只能 5′→3′ 工作，这就是复制叉上两条新链无法用同一种方式合成的原因。" },
    { en: "base pairing", cn: "碱基配对",
      def_en: "Hydrogen bonding restricted by geometry to A with T through two bonds and G with C through three. Both pairs have identical width, 10.85 Å between C1' atoms, and identical glycosidic angle, 51.5°, so any sequence fits the same helix. It supplies specificity, not stability.",
      def_cn: "受几何限制的氢键结合：A 配 T（两个氢键）、G 配 C（三个氢键）。两种配对的宽度相同（C1′ 之间 10.85 Å），糖苷键夹角相同（51.5°），所以任何序列都能装进同一个螺旋。它提供的是特异性，不是稳定性。" },
    { en: "base stacking", cn: "碱基堆积",
      def_en: "The flat faces of successive bases lying against each other up the middle of the helix, like a stack of coins, held mainly by hydrophobic forces in water. Together with cation shielding of the phosphates it is what holds the two strands together.",
      def_cn: "相邻碱基的扁平面在螺旋中央一路贴合叠起，像一摞硬币，在水中主要靠疏水力维系。它与阳离子对磷酸负电荷的屏蔽一起，才是把两条链维系住的原因。" },
    { en: "major groove / minor groove", cn: "主沟／次沟",
      def_en: "The two unequal channels spiralling up the outside of a double helix. The base edges face into them, so sequence can be read from outside without separating the strands, and what differs between the A, B and Z forms is largely their shape.",
      def_cn: "双螺旋外侧盘旋而上的两条宽窄不等的沟槽。碱基边缘朝向沟内，因此不必分开两条链就能从外部读出序列；A、B、Z 三种形式之间的差别，主要也就在这两条沟的形状上。" },
    { en: "double helix", cn: "双螺旋",
      def_en: "The typical right-handed twisted conformation taken by the two strands of DNA, B-DNA being the form found in a cell. Calling it typical is exact rather than vague: it is the shape most sequences take under cellular conditions, and the departures from it further down this chain are departures from this.",
      def_cn: "DNA 两条链所取的、典型的右手盘绕构象，细胞里存在的形式是 B-DNA。说「典型」是精确而非含糊：它是多数序列在细胞条件下所取的形状，而本主线后面讲的那些偏离，偏离的正是它。" },
    { en: "monocistronic / polycistronic mRNA", cn: "单顺反子／多顺反子 mRNA",
      def_en: "An mRNA coding for one polypeptide is monocistronic; one coding for two or more different polypeptides is polycistronic. Bacteria and archaea use both, while in eukaryotes most mRNAs are monocistronic — the structural reason an operon is a bacterial arrangement rather than a universal one.",
      def_cn: "编码一条多肽的 mRNA 是单顺反子，编码两条或更多不同多肽的是多顺反子。细菌与古菌两者兼用，而真核生物的 mRNA 大多是单顺反子——这正是操纵子属于细菌式安排、而不是普遍安排的结构性原因。" },
    { en: "A, B and Z forms", cn: "A / B / Z 型",
      def_en: "A and B are the labels Franklin's two fibre-diffraction patterns received — A from the drier fibre, B from the wetter, the switch happening near 75% relative water content. Cellular DNA is wet and is therefore B. Z is left-handed, named for the zigzag of its backbone and formed by sequences such as d(CGCATGCG). Paired RNA is always A.",
      def_cn: "A 与 B 是 Franklin 两张纤维衍射图的标号 —— A 来自较干的纤维，B 来自较湿的，转变发生在相对含水量约 75% 处。细胞里的 DNA 是湿的，所以是 B 型。Z 型是左手螺旋，名字来自骨架的锯齿形，由 d(CGCATGCG) 这类序列形成。配上对的 RNA 永远是 A 型。" },
    { en: "phage", cn: "噬菌体",
      def_en: "A virus that infects bacteria — a protein coat with DNA inside. It sticks to a cell and injects its contents, which is what made it the right tool for asking whether protein or DNA carries heredity.",
      def_cn: "专门感染细菌的病毒 —— 一个蛋白外壳，里面装着 DNA。它贴到细菌上，把内容物注射进去；正因为如此，它才成了「究竟是蛋白还是 DNA 携带遗传信息」这个问题的合适工具。" },
    { en: "S and R pneumococcus", cn: "S 型与 R 型肺炎球菌",
      def_en: "S has a polysaccharide capsule and is lethal to mice; R has no capsule and is harmless. The pair is what makes transformation visible.",
      def_cn: "S 型有多糖荚膜、对小鼠致死；R 型无荚膜、无害。正是这一对差别让「转化」这件事看得见。" },
    { en: "Hoogsteen positions", cn: "Hoogsteen 位点",
      def_en: "The N-7, O6 and N6 atoms of a purine, which face into the major groove and stay free after Watson-Crick pairing. A third strand binds here, giving a triplex; those tracts sit in the regulatory regions of some eukaryotic genes.",
      def_cn: "嘌呤的 N-7、O6、N6 原子，朝向主沟，在 Watson-Crick 配对后仍然空着。第三条链结合在这里，形成三链体；这些区段位于某些真核基因的调控区。" },
    { en: "G-tetraplex", cn: "G-四链体",
      def_en: "Four-stranded DNA formed by guanosine-rich sequences. Stable over a wide range of conditions but needing a very high proportion of guanosine; the guanine-rich single strand at a chromosome end folds into one, which is how a telomere caps itself.",
      def_cn: "由富含鸟苷的序列形成的四链 DNA。在很宽的条件范围内稳定，但需要很高比例的鸟苷；染色体末端那段富含鸟嘌呤的单链就折成这种结构 —— 端粒靠它把自己封住。" },
    { en: "intron / exon / splicing", cn: "内含子／外显子／剪接",
      def_en: "A eukaryotic transcript is longer than the cell needs. The stretches cut out are introns, the ones kept and joined are exons, and the cutting-and-joining is splicing. An intron is RNA, part of the same molecule, until it is removed.",
      def_cn: "真核转录本比细胞需要的长。被切掉的段叫内含子，留下并连接起来的叫外显子，这个切除与连接的过程叫剪接。内含子就是 RNA，是同一条分子的一部分，直到它被切掉为止。" },
    { en: "adenosine as a binding handle", cn: "作为结合把手的腺苷",
      def_en: "The adenine-plus-ribose portion carried by NAD, FAD and coenzyme A, taking no direct part in the chemistry those cofactors perform. It lets an enzyme grip the cofactor and pull its reactive end into the active site: removing it from acetoacetyl-CoA drops reactivity toward β-ketoacyl-CoA transferase by 10⁶.",
      def_cn: "NAD、FAD 和辅酶 A 身上那段「腺嘌呤 + 核糖」，并不直接参与这些辅因子所完成的化学。它让酶抓住辅因子、把其反应端拽进活性中心：把它从乙酰乙酰辅酶 A 上去掉，对 β-酮脂酰辅酶 A 转移酶的反应性下降 10⁶ 倍。" },
    { en: "second messenger", cn: "第二信使",
      def_en: "An intracellular signal generated when an extracellular signal reaches the cell surface. Cyclic AMP, made from ATP by adenylyl cyclase, is the common one produced in response to hormones; bacteria use ppGpp to shut off rRNA and tRNA synthesis during amino acid starvation.",
      def_cn: "胞外信号抵达细胞表面时在细胞内部生成的信号。由 ATP 经腺苷酸环化酶生成的环化 AMP 是响应激素时最常见的一种；细菌则用 ppGpp 在氨基酸饥饿时关掉 rRNA 与 tRNA 的合成。" }
  ]
};

/* ---------------------------------------------------------------- DNA 复制 ---- */
window.BIOLITE_SPINE["key:dna-replication"] = {
  assumed: ["DNA", "RNA", "base", "base pair", "nucleotide", "protein", "enzyme", "ATP",
            "ADP", "AMP", "NAD+", "gene", "cell", "nucleus", "eukaryote", "bacterium",
            "chromosome", "virus", "hydrogen bond", "hydrolysis", "phosphodiester bond",
            "nucleophile", "aspartate", "lysine", "adenine", "guanine", "thymine",
            "ribose", "pyrophosphate", "tautomer", "exonuclease", "nuclease",
            "template", "complementary", "antiparallel", "double helix", "supercoiling",
            "topoisomerase", "DNA gyrase", "base stacking", "cell cycle", "mitosis",
            "cyclin", "plasma membrane", "methylation", "electron microscopy",
            "ultraviolet", "herpes simplex virus", "thymidine kinase", "recombination"],
  nodeTitle_en: "DNA replication",
  nodeTitle_cn: "DNA 复制",
  title_en: "A DNA polymerase cannot start a chain, cannot afford to fall off, and cannot afford to be wrong — every part of a replication fork answers one of those three",
  title_cn: "DNA 聚合酶不能起头、不能掉下来、也不能出错 —— 复制叉上的每一个零件，都是在回答这三件事之一",
  steps: [
    {
      en: "Four statements about replication are usually handed over as bare facts, and each one was an experiment. Semiconservative — each daughter duplex keeps one whole parent strand and pairs it with one newly made strand — was established by Meselson and Stahl in 1957. John Cairns then grew E. coli on tritium-labelled thymine and made photographic images of its DNA: the intact chromosome is one huge circle, and DNA from replicating cells carries an extra loop, giving the shape called a theta structure after the Greek letter it resembles. That picture shows both strands being copied at the same time, and the two points where the loop meets the unopened circle are moving points, which Cairns named replication forks; variants of the experiment showed the two forks travel in opposite directions. A loop in a photograph still cannot say where it started, because a circle has no landmarks, so Ross Inman supplied some: the 48,502 bp chromosome of bacteriophage lambda can be denatured selectively at its unusually A=T-rich stretches, since an A=T pair comes apart more easily than a G≡C pair, and the reproducible pattern of single-stranded bubbles works as a ruler. Measured against that ruler, **replication loops always began at one and the same place, which turned a single origin from an assumption into a measurement** — and that place was named an origin.",
      cn: "关于复制，通常有四句话被当作现成的事实交给你，而每一句背后都是一个实验。「半保留」—— 每条子代双链保留一整条亲代链，并让它与一条新造的链配对 —— 由 Meselson 与 Stahl 于 1957 年确立。随后 John Cairns 用氚标记的胸腺嘧啶培养大肠杆菌，把它的 DNA 拍成照片：完整的染色体是一个巨大的环，而正在复制的细胞里取出的 DNA 上多出一个环泡，这个形状因像希腊字母 θ 而被称为 θ 结构。这幅图说明两条链是同时被复制的；环泡与尚未打开的圆圈相接的那两个点是移动着的点，Cairns 把它们命名为复制叉，而同一实验的各种变体表明两个叉朝相反方向前进。但照片上的环泡仍然说不出它是从哪里开始的，因为圆环上没有地标 —— 于是 Ross Inman 造了几个：λ 噬菌体的染色体长 48,502 bp，可以在它那些异常富含 A=T 的区段上被选择性变性（因为 A=T 配对比 G≡C 更容易拆开），由此得到的一套可重复的单链泡图案就是一把尺子。**用这把尺子去量，复制环泡每次都从同一个位置开始 —— 这就把「单一起点」从一个假设变成了一次测量，而那个位置本身被命名为起点。**",
      src: "A p.915–916, Fig. 25-1 · §4.1.3, p.82, Obr. 4.21"
    },
    {
      link_en: "with the geography settled, the chemistry",
      link_cn: "地理问题解决了，接下来是化学",
      en: "The growing strand's free 3'-hydroxyl attacks the innermost phosphorus of the incoming deoxynucleoside triphosphate, a phosphodiester bond forms, and pyrophosphate leaves. Two magnesium ions sit in the active site doing different jobs — one strips the proton off that hydroxyl so it attacks harder, the other holds the incoming triphosphate and helps the pyrophosphate depart — and both are pinned by three aspartate residues, two of which are conserved in every DNA polymerase known. Because the new bond is always made at a free 3'-hydroxyl, a DNA chain can only grow 5' to 3', with no exception anywhere in biology. **The bond swap itself releases almost no free energy, so what actually drives the chain to get longer is two other things: the stacking and pairing that stabilise the lengthened product**, and the 19 kJ/mol released when a separate enzyme hydrolyses the pyrophosphate afterwards.",
      cn: "正在延长的链上那个游离的 3′-羟基，进攻进来的脱氧核苷三磷酸最靠内的那个磷原子；形成一个磷酸二酯键，焦磷酸离去。活性中心里有两个镁离子，各干各的活 —— 一个把 3′-羟基上的质子拽走、让它进攻得更狠，另一个抓住进来的三磷酸、帮助焦磷酸离开 —— 两个都由三个天冬氨酸残基固定，其中两个在已知的每一种 DNA 聚合酶里都保守。由于新键永远生成在一个游离的 3′-羟基上，DNA 链只能沿 5′→3′ 生长，生物学上无一例外。**这个换键过程本身几乎不释放自由能，所以真正推动链变长的是另外两样东西：使延长后的产物更稳定的碱基堆积与碱基配对，以及随后由另一个酶水解焦磷酸时放出的 19 kJ/mol。**",
      src: "A p.917, Fig. 25-3 · §4.1.3, p.78"
    },
    {
      link_en: "and the enzyme has one further requirement, which creates every other problem in this chain",
      link_cn: "这个酶还有一个要求，而它制造了下面全部的麻烦",
      en: "Every DNA polymerase can add nucleotides only to a strand that already exists — a short stretch already paired to the template and carrying a free 3'-hydroxyl, which is called a primer, its free end being the primer terminus. Many primers are short pieces of RNA rather than DNA, laid down by dedicated enzymes, and RNA is used precisely because an RNA polymerase can start a chain from nothing while a DNA polymerase cannot. Follow what this one limitation causes, because it is the thread through everything below: **an enzyme that cannot start a chain is why a primer-making enzyme has to exist, why one of the two new strands has to be built in separate pieces**, why a second polymerase is needed to take the RNA primers out again, why a ligase is needed to seal what is left, and — where a chromosome is a line rather than a circle — why the ends of a chromosome are a problem.",
      cn: "每一种 DNA 聚合酶都只能把核苷酸加到一条已经存在的链上 —— 一段已经和模板配上对、并带有游离 3′-羟基的短链，这段短链叫引物，它的游离末端叫引物末端。很多引物是短短的一段 RNA 而不是 DNA，由专门的酶铺下去；之所以用 RNA，正是因为 RNA 聚合酶能从零起头，而 DNA 聚合酶不能。**接下来看这一条限制引出了什么，因为这是贯穿以下所有内容的那根线：一个不能自己起头的酶，正是「必须存在一个造引物的酶」的原因，是「两条新链中有一条必须分成若干段来造」的原因，是「需要第二种聚合酶把 RNA 引物再拆掉」的原因，是「需要连接酶把剩下的缺口封上」的原因 —— 以及在染色体是线状而非环状的地方，是「染色体末端成了一个问题」的原因。**",
      src: "A p.917–918, Fig. 25-4 · §4.1.3, p.78 and p.83",
      see: [{ id: "L-26-1-1", en: "transcription, where the polymerase can start a chain from nothing", cn: "转录 —— 那里的聚合酶可以从零起头" }]
    },
    {
      link_en: "put that rule together with antiparallel strands and the two new strands cannot be made the same way",
      link_cn: "把这条规则和反平行的两条链放在一起，两条新链就不可能用同一种做法造出来",
      recall_en: "a chain grows only 5' to 3', from the step above",
      recall_cn: "上一步说的：链只能沿 5′→3′ 生长",
      en: "The two template strands run in opposite directions, so a fork moving one way exposes one template that can be read in the direction the fork is opening and one that cannot. One new strand therefore grows 5' to 3' in the same direction the fork moves, practically without interruption, and that one is the leading strand. The other must also be made 5' to 3', but for it that direction points backwards, away from the fork, so it can only be built in short pieces, each started near the fork and extended backwards until it runs into the piece made before; that one is the lagging strand and its pieces are Okazaki fragments, 1,000 to 2,000 nucleotides long in bacteria and only 150 to 200 in eukaryotes. **Replication is therefore semidiscontinuous: one strand made in a single run, the other assembled from thousands of separate pieces, every one of them starting from its own RNA primer.**",
      cn: "两条模板链的走向相反，所以一个朝某个方向前进的复制叉，露出的两条模板中，一条正好可以顺着叉打开的方向读，另一条不行。于是有一条新链沿 5′→3′ 生长、方向与复制叉一致，几乎一路不停，这条叫先导链。另一条同样必须沿 5′→3′ 合成，但对它来说这个方向是朝后的、背离复制叉，因此只能一小段一小段地造：每段在叉附近起头、向后延伸，直到撞上前一段为止 —— 这条叫滞后链，这些小段叫冈崎片段，细菌中长 1,000–2,000 个核苷酸，真核中只有 150–200 个。**所以复制是半不连续的：一条链一气呵成，另一条由数以千计的独立小段拼成，而每一小段都从自己的 RNA 引物起头。**",
      src: "§4.1.3, p.82 · A p.925"
    },
    {
      link_en: "the other constraint is accuracy, and it is built in three multiplying layers",
      link_cn: "另一个约束是精确度 —— 它由三层相乘的机制搭成",
      en: "Layer one is selection by shape, not only by hydrogen bonding. An A=T pair and a G≡C pair have almost the same geometry, and a polymerase active site is a hole sized to that shared shape, so a wrong nucleotide that can still hydrogen-bond to the template generally will not fit the hole and is rejected before any bond is made. Measured in a tube, that leaves one wrong nucleotide per 10,000 to 100,000 — often because a base was briefly in an unusual tautomeric form and paired wrongly. Layer two catches what layer one misses. The active site holds two positions: an incoming nucleotide is first held at the insertion site, and once the bond is made the enzyme slides forward and the new pair moves to the postinsertion site; a mismatched pair sitting there blocks that slide, and the kinetic pause is the opening for a 3' to 5' exonuclease activity to clip the wrong nucleotide back off. That is proofreading — one active site writes and a second reads back over what was just written, at the same end of the same strand — it is something other than the polymerisation reaction run backwards, it costs three high-energy bonds per correction, and it improves accuracy 100- to 1,000-fold. Layer three is a separate enzyme system that goes over the finished DNA afterwards and repairs base pairs left mismatched, which brings the measured accuracy in E. coli to one mistake per 1,000,000,000 to 10,000,000,000 nucleotides added. **Multiply the three layers together and the number is worth saying out loud: for a chromosome of 4,600,000 bp, one error occurs per 1,000 to 10,000 copies of the entire genome.**",
      cn: "第一层是按形状挑选，而不只是靠氢键。A=T 与 G≡C 这两种配对的几何形状几乎相同，而聚合酶的活性中心是一个按这个共同形状开出来的洞；所以一个虽然能与模板形成氢键、但错误的核苷酸，通常塞不进这个洞，在任何键形成之前就被拒掉了。在试管里测，这样仍会每 10,000–100,000 个插错一个 —— 常常是因为某个碱基短暂地处在不寻常的互变异构形式，从而配错了对。第二层去捡第一层漏掉的。活性中心里有两个位置：进来的核苷酸先被扣在插入位点，键形成之后酶向前滑一格，新配对移到插入后位点；一个配错的碱基对停在那里会卡住这一滑，而这个动力学停顿，就是 3′→5′ 外切酶活性把错的核苷酸剪回去的机会。这就是校对 —— 一个活性位点写，另一个在同一条链的同一端回头读一遍刚写下的东西 —— 它并不是把聚合反应倒放一遍，每纠正一次要花掉三个高能键，而它把准确度提高 100 到 1,000 倍。第三层是一套独立的酶系统，它在复制完成之后把留下来的错配碱基对逐个修好，从而把大肠杆菌里实测的准确度带到「每加入 1,000,000,000 到 10,000,000,000 个核苷酸才出一个错」。**把三层乘起来，得到的数字值得念出声来：对一条 4,600,000 bp 的染色体而言，整个基因组每被复制 1,000 到 10,000 遍，才出现一个错误。**",
      src: "A p.917–919, Fig. 25-5, Fig. 25-6 · §4.1.3, p.78, Obr. 4.16",
      see: [{ id: "L-25-2-1", en: "mismatch repair — the third layer, in full", cn: "错配修复 —— 第三层的完整机制" }]
    },
    {
      link_en: "so which enzyme does the copying? The obvious candidate turned out to be the wrong one",
      link_cn: "那么究竟是哪个酶在抄写？最显眼的那个候选，结果是错的",
      en: "E. coli has three DNA polymerases, I, II and III; all three polymerise and all three proofread with a 3' to 5' exonuclease. The first purified, by Arthur Kornberg from 1955, accounts for over 90% of the polymerase activity in a cell extract, and it was assumed to be the replicating enzyme. A polymerase either falls off after adding a nucleotide or stays on and adds another, and the average number it adds before letting go is called its processivity — 3 to 200 for that first enzyme, now called polymerase I. Four things ruled it out: it adds 600 nucleotides per minute, at least 100 times too slow for the speed a fork actually moves; its processivity is low; many genes turned out to be needed for replication, so no single enzyme acts alone; and decisively, in 1969 Cairns isolated a strain whose polymerase I was inactive, and it was abnormally sensitive to agents that damage DNA yet perfectly alive. **A cell that cannot make working polymerase I still copies its chromosome, so polymerase I does cleanup during replication, recombination and repair**, and polymerase III — found in the search that followed — is the replicase.",
      cn: "大肠杆菌有三种 DNA 聚合酶：I、II、III；三者都能聚合，也都带 3′→5′ 外切核酸酶用于校对。最先被纯化出来的那个（Arthur Kornberg 自 1955 年起）占细胞提取物中聚合酶活性的 90% 以上，当时自然被认为就是复制酶。一个聚合酶加完一个核苷酸后，要么掉下来、要么留在原地再加一个；它在松手之前平均能加多少个核苷酸，这个数叫持续合成能力 —— 那第一个酶（现在叫聚合酶 I）的数值是 3 到 200。有四条证据把它排除了：它每分钟只加 600 个核苷酸，比复制叉实际前进的速度慢至少 100 倍；它的持续合成能力很低；后来发现复制需要很多基因参与，所以不可能由单独一个酶完成；而最决定性的一条是 1969 年 Cairns 分离到一株聚合酶 I 失活的菌株，它对损伤 DNA 的试剂异常敏感，却活得好好的。**一个造不出有活性聚合酶 I 的细胞照样复制自己的染色体，所以聚合酶 I 干的是复制、重组和修复中的收尾工作，而随后的搜寻中找到的聚合酶 III 才是复制酶。**",
      src: "A p.916–917, p.919, Table 25-1 · §4.1.3, p.80"
    },
    {
      link_en: "and the cleanup enzyme's third activity is what makes it able to clean up at all",
      link_cn: "而这个收尾的酶之所以能收尾，全靠它的第三个活性",
      en: "Besides polymerising and proofreading, DNA polymerase I carries a separate and unrelated 5' to 3' nuclease activity that cuts inside the chain, within a double-helical stretch, starting at a nick — a break in one strand's backbone with the other strand intact — and taking out up to 10 nucleotides at once. Run that nuclease and the polymerase together and the nuclease removes nucleotides ahead of the nick while the polymerase fills in behind it, so the nick itself travels along the molecule toward the 3' end with the DNA otherwise unchanged: this is nick translation, and it is how an RNA primer is taken out during replication and how an ultraviolet-induced pyrimidine dimer — two adjacent pyrimidines welded together by light — is excised and patched in one pass. Limited proteolysis, meaning cutting the protein at a few exposed points and no further, splits the enzyme into a 36,000 molecular weight fragment carrying the whole 5' to 3' nuclease and a 67,000 piece called the Klenow fragment carrying the polymerase and the proofreading exonuclease. **The Klenow fragment can copy DNA and proofread it but cannot remove a primer, because the activity that does that left with the small fragment** — so the three jobs really are three separate active centres.",
      cn: "除了聚合和校对，DNA 聚合酶 I 还带一个独立、与前两者无关的 5′→3′ 核酸酶活性：它在链的内部、在双螺旋区域里切割，从一个缺口开始 —— 缺口就是一条链骨架上的断裂而对面那条链完好 —— 一次可以取走多达 10 个核苷酸。把这个核酸酶和聚合酶一起开动，核酸酶在缺口前方切走核苷酸、聚合酶在后方补上，于是缺口本身沿分子向 3′ 端移动，而 DNA 的其余部分毫无改变：这就是缺口平移；正常复制中撤掉 RNA 引物靠它，切除紫外线造成的嘧啶二聚体（两个相邻嘧啶被光焊在一起）并在同一趟里补好，也靠它。有限蛋白水解 —— 只在少数几个暴露位点把蛋白切开、到此为止 —— 把这个酶拆成两块：分子质量 36,000 的小片段带走了全部 5′→3′ 核酸酶活性，67,000 的大片段叫 Klenow 片段，带着聚合酶活性和校对用的外切核酸酶。**Klenow 片段能复制 DNA、也能校对，却不能去除引物，因为干那件事的活性跟着小片段走了 —— 所以这三项工作确实是三个彼此独立的活性中心。**",
      src: "§4.1.3, p.79, Obr. 4.17, Obr. 4.18, pp.79–80",
      see: [{ id: "L-25-2-1", en: "the repair systems that excision belongs to", cn: "这个切除活性所属的那些修复系统" }]
    },
    {
      link_en: "and what polymerase III has that polymerase I lacks is the surprise here",
      link_cn: "而聚合酶 III 比聚合酶 I 多出来的那样东西，是这里最出人意料的地方",
      recall_en: "processivity, defined one step up as how many nucleotides an enzyme adds before letting go",
      recall_cn: "上一步定义过的持续合成能力：松手之前平均能加多少个核苷酸",
      en: "Strip polymerase III of its two beta subunits and it becomes far too likely to fall off to copy a chromosome. Those two subunits pair into a closed donut that encircles the DNA and slides along with the enzyme — a sliding clamp — and a closed ring cannot thread itself on, so there is a machine for that too: a five-subunit ATP-driven loader binds ATP and the closed clamp, and the binding strains the ring until it springs open at one join; the freshly primed DNA is slipped in through the break; then hydrolysis of that ATP lets the ring snap shut around it. The ATP here buys no chemistry — it buys the timing of an opening and a shutting. **Processivity is not a property of the polymerase at all: simply preventing the enzyme from letting go raises it from a few hundred nucleotides to above 500,000.**",
      cn: "把聚合酶 III 的两个 β 亚基拿掉，它掉下来的概率就高到无法抄完一条染色体。这两个亚基配成一个闭合的甜甜圈，套在 DNA 上、随着酶一起滑动 —— 这就是滑动夹；而一个闭合的环没法自己套上去，所以还有一台专门的机器：一个由五个亚基组成、靠 ATP 驱动的装载器结合 ATP 和闭合的夹子，这个结合把环拉扯到在某一个接缝处弹开，刚加好引物的 DNA 从豁口滑进去，随后水解那个 ATP，环就啪地合拢在它周围。这里的 ATP 买的不是化学反应，买的是「什么时候开、什么时候关」。**持续合成能力根本不是聚合酶自身的性质：仅仅是「不让它松手」这一件事，就把它从几百个核苷酸提到 500,000 以上。**",
      src: "A p.917, p.920, p.926, Fig. 25-13"
    },
    {
      link_en: "and the rest of that enzyme's architecture explains how the two new strands stay in step",
      link_cn: "而这个酶其余的构造，解释了两条新链是怎么保持同步的",
      en: "Polymerase III has nine kinds of subunit, and its two activities sit on separate polypeptides: alpha polymerises, epsilon proofreads. With a third subunit they make a core polymerase, which copies DNA but lets go too easily on its own; up to three cores are tied together by that same five-subunit clamp loader, and adding the beta clamps turns the assembly into the polymerase III holoenzyme. The whole thing, with the primer-making machinery beside it, is called a replisome. **The cores copying the two strands are physically joined to each other, which is the only reason their synthesis can be coordinated** — and it is why the template of the strand made in pieces has to loop back around the replisome, so that both cores travel the same way while the two templates run in opposite directions.",
      cn: "聚合酶 III 有九种亚基，而它的两种活性坐在不同的多肽上：α 负责聚合，ε 负责校对。它们加上第三个亚基构成一个核心聚合酶，能抄 DNA，但单独存在时太容易松手；最多三个核心被刚才那个五亚基装载器拴在一起，再装上 β 夹，整个组装体就成了聚合酶 III 全酶。这一整套，连同旁边造引物的机器，合称复制体。**抄写两条链的那几个核心在物理上是连在一起的，这是它们的合成能够被协调的唯一原因 —— 也正因如此，分段合成的那条链，它的模板必须绕着复制体翻折成环，好让两个核心朝同一个方向前进，而两条模板本身的走向是相反的。**",
      src: "A p.920–921, Table 25-2, Fig. 25-8 · §4.1.3, p.84, Obr. 4.25"
    },
    {
      link_en: "before any of that can run, the helix has to be opened at the origin — and it opens without an enzyme melting anything",
      link_cn: "而在这一切开动之前，双螺旋必须在起点处被打开 —— 而且开链时没有任何酶去「熔」它",
      en: "The E. coli origin, oriC, is a defined 245 bp of sequence: five copies of a 9 bp repeat plus three further sites that bind an initiator protein called DnaA, and a neighbouring A=T-rich stretch named the DNA unwinding element. DnaA binds ATP and hydrolyses it slowly, and only the ATP-bound form is active; eight ATP-bound molecules assemble into a right-handed helical stack, and the origin DNA wraps tightly around them. Then a second ATP-driven protein, DnaC, cracks open the ring-shaped hexameric helicase DnaB and loads two DnaB rings back to back, one on each separated strand; DnaB travels 5' to 3' along single-stranded DNA, so the two rings walk away from each other, and the bidirectionality this chain opened with as an observation turns out to be the consequence of loading two helicases in opposite orientations. Single-strand binding protein then coats the separated strands, because two strands just pulled apart are perfectly complementary and would otherwise snap back together, and DNA gyrase relieves the twisting stress piling up ahead of each fork. **No enzyme melts that first stretch of DNA: the tight right-handed wrap forces a positive supercoil into the neighbouring helix, and the strain of it pulls the A=T-rich element apart** — which is why that element is A=T-rich, because A=T yields first.",
      cn: "大肠杆菌的起点 oriC 是一段确定的 245 bp 序列：五份 9 bp 重复序列，外加另外三个位点，都结合一个叫 DnaA 的起始蛋白；旁边还有一段富含 A=T 的区段，叫 DNA 解链元件。DnaA 结合 ATP 并缓慢水解之，只有结合 ATP 的形式是活性的；八个结合了 ATP 的分子叠成一个右手螺旋，起点的 DNA 紧紧缠绕在它们外面。接着第二个靠 ATP 驱动的蛋白 DnaC 把环形六聚体解旋酶 DnaB 的环撑开，背对背装上两个 DnaB 环，分开的两条链上各一个；DnaB 沿单链 5′→3′ 前进，所以这两个环朝彼此相反的方向走开 —— 本主线开头作为「观察结果」出现的双向性，原来是「以相反取向装了两个解旋酶」的后果。随后单链结合蛋白覆盖分开的两条链，因为刚被拉开的两条链彼此完全互补、否则会立刻弹回去重新配上；DNA 促旋酶则化解在每个叉前方堆积起来的扭转应力。**没有任何酶去熔最初那一段 DNA：紧密的右手缠绕把一个正超螺旋硬挤进旁边的螺旋里，而这份应变把富含 A=T 的解链元件拉开了 —— 这一段之所以富含 A=T，正是因为 A=T 先撑不住。**",
      src: "A p.922–923, Fig. 25-9, Fig. 25-10 · §4.1.3, p.80, Obr. 4.19",
      see: [{ id: "L-24-2-1", en: "why gyrase is the enzyme that relieves stress ahead of a fork", cn: "为什么化解叉前方应力的偏偏是促旋酶" }]
    },
    {
      link_en: "opening the origin is the one regulated step, and two devices make sure it happens exactly once per cell cycle",
      link_cn: "打开起点是唯一受调控的一步，而有两套装置保证它每个细胞周期只发生一次",
      en: "The first switches DnaA off as soon as its job is done. Once polymerase III has been loaded together with its beta clamps — which is itself the signal that initiation finished — a protein called Hda binds those same clamps and makes DnaA hydrolyse its ATP; the inactive ADP form falls off the origin, and getting back to the ATP form takes a deliberate 20 to 40 minutes. The second is a methylation clock. An enzyme called Dam methylase puts a methyl group on the adenine of every GATC sequence, and oriC carries 11 GATC sites in its 245 bp against a genome-wide average of one per 256 bp. Right after a fork has passed, the old strand of the origin carries those methyl groups and the new strand does not — a state called hemimethylation, which a protein named SeqA binds, holding the origin at the plasma membrane and out of use until Dam methylase has fully methylated it again. **Hemimethylation is a chemical mark meaning this origin has already fired; it is created automatically by the act of copying and it decays at a fixed rate**, so a cell counts rounds of replication by reading methyl groups.",
      cn: "第一套在 DnaA 干完活的瞬间就把它关掉。一旦聚合酶 III 连同它的 β 夹被装上 —— 这件事本身就是「起始已完成」的信号 —— 一个叫 Hda 的蛋白就结合到这些夹子上，促使 DnaA 水解自己的 ATP；失活的 ADP 形式从起点脱落，而要回到 ATP 形式需要刻意拖长的 20 到 40 分钟。第二套是一个甲基化时钟。一个叫 Dam 甲基化酶的酶在每一个 GATC 序列的腺嘌呤上加一个甲基，而 oriC 在它的 245 bp 里带了 11 个 GATC 位点，全基因组的平均密度则是每 256 bp 才一个。复制叉刚过去时，起点的旧链上带着这些甲基而新链上没有 —— 这个状态叫半甲基化；一个叫 SeqA 的蛋白结合它，把起点扣在质膜上、暂时不许使用，直到 Dam 甲基化酶把它重新完全甲基化为止。**半甲基化是一个化学标记，意思是「这个起点已经用过了」；它由复制这个动作自动产生，并以固定速率消失 —— 细胞就是靠读甲基基团来数自己复制了几轮的。**",
      src: "A p.923–924"
    },
    {
      link_en: "with two forks running, the actual copying is a piece of choreography, and it exists because of the primer rule",
      link_cn: "两个叉跑起来之后，真正的抄写是一段编排好的舞蹈 —— 而它之所以存在，全因为那条引物规则",
      recall_en: "the polymerase that cannot start a chain, from the third step",
      recall_cn: "第三步那个「不能自己起头」的聚合酶",
      en: "A primase called DnaG lays down a 10 to 60 nucleotide RNA primer, working in physical contact with the DnaB helicase. One core polymerase then runs continuously along the leading-strand template, while the other cores cycle over and over on the looped template of the lagging strand: helicase unwinds, primase occasionally lays a primer, the loader parks a new clamp at that primer, and when a piece is finished the core drops its old clamp and grabs the new one. The RNA primer is then taken out by polymerase I, or by RNase H1, which is a nuclease that destroys RNA wherever it is paired to DNA, and polymerase I fills the gap with DNA. **What is left is a nick — two DNA ends sitting next to each other, correctly paired to the template, with no bond between them — and every one of the thousands of Okazaki fragments ends in one.**",
      cn: "一个叫 DnaG 的引物酶铺下一段 10 到 60 个核苷酸的 RNA 引物，工作时与 DnaB 解旋酶保持物理接触。随后一个核心聚合酶沿先导链模板连续跑下去，而另外的核心则在滞后链那条翻折成环的模板上一遍遍循环：解旋酶解开双链，引物酶时不时铺一段引物，装载器把一个新夹子停在那段引物上，一段做完之后核心松开旧夹子、抓住新夹子。RNA 引物随后由聚合酶 I 拆掉，或者由 RNase H1 拆掉 —— 那是一种专门降解「与 DNA 配着对的 RNA」的核酸酶 —— 再由聚合酶 I 用 DNA 把缺口填上。**剩下的是一个缺口：两个 DNA 末端已经并排、也都与模板配对正确，只是彼此之间还没有键 —— 而数以千计的冈崎片段，每一段末尾都留着这样一个缺口。**",
      src: "A p.924–926, Fig. 25-14, Fig. 25-15 · §4.1.3, p.83, Obr. 4.23, Obr. 4.24"
    },
    {
      link_en: "and all of that shape can be looked at directly, which is where the evidence came from",
      link_cn: "而这些形状都可以直接看到 —— 证据正是从那里来的",
      en: "Circular DNA can be twisted further upon itself, and the result is a supercoil: under electron microscopy it shows up as a series of progressively more compact circular forms. The same technique caught replication in the act: electron micrographs of Drosophila DNA show a replication 'eye', an opened stretch with a fork at either end, and the single-stranded regions near those forks lie in a trans configuration. **A replication eye is a picture of the semiconservative mechanism rather than an inference: an eye with two forks is what a duplex opening from one origin in both directions must look like.**",
      cn: "环状 DNA 可以进一步自身扭曲，结果就是超螺旋：在电子显微镜下，它表现为一系列越来越紧密的环状构象。同一种技术也当场拍到了复制：果蝇 DNA 的电镜照片显示出一个复制「眼」——一段被撑开的区域，两端各有一个复制叉——而这些叉附近的单链区域呈 trans 构型。**复制眼是半保留机制的一张照片，而不是对它的一次推断：一条双链从一个起点向两个方向打开，看上去就必然是一个带两个叉的「眼」。**",
      src: "§4.1.3, p.78, Obr. 4.15 · §4.1.2, p.75, Obr. 4.12"
    },
    {
      link_en: "one bond left to make, and one enzyme makes it — but the reaction runs uphill",
      link_cn: "还差一根键，由一个酶来做 —— 但这个反应是上坡的",
      en: "DNA ligase forms the phosphodiester bond between the 3'-hydroxyl of one strand end and the 5'-phosphate of the other. The reaction is endergonic, so it has to be paid for, and it is paid for in three steps. First the enzyme reacts with ATP or with NAD+ and ends up carrying AMP covalently, joined through a phosphoamide bond to the ε-amino group of one of its own lysine residues, with pyrophosphate released from ATP or nicotinamide-ribose-phosphate from NAD+; bacterial ligases characteristically take that AMP from NAD+, while viral and eukaryotic ligases take it from ATP. Second, the AMP is handed from the lysine onto the DNA's 5'-phosphate, giving a DNA-adenylate. Third, the 3'-hydroxyl of the other end attacks that activated phosphate, the new bond forms, and AMP leaves. Ligase also cannot join two single-stranded molecules — at least part of the DNA has to be double-helical already, so the two ends are held next to each other while the bond is made — which fits all three of its jobs exactly, since in joining Okazaki fragments, in closing a gap left after damage was cut out, and in splicing strands during recombination, the ends are always aligned by a template. **The whole cofactor is spent making one 5'-phosphate reactive enough to be attacked, and that is what turns an uphill joining reaction into a downhill one.**",
      cn: "DNA 连接酶在一端的 3′-羟基与另一端的 5′-磷酸之间形成磷酸二酯键。这个反应是吸能的，所以必须付账，而账分三步付。第一步，酶与 ATP 或 NAD+ 反应，最后共价地带上一个 AMP，通过磷酰胺键接在它自己某个赖氨酸残基的 ε-氨基上，同时从 ATP 放出焦磷酸、或从 NAD+ 放出烟酰胺-核糖-磷酸；细菌的连接酶典型地从 NAD+ 取这个 AMP，病毒和真核的连接酶从 ATP 取。第二步，这个 AMP 从赖氨酸转交到 DNA 的 5′-磷酸上，形成 DNA-腺苷酸。第三步，另一端的 3′-羟基进攻这个被活化的磷酸，新键生成，AMP 离去。连接酶还无法把两条独立的单链接起来 —— DNA 至少要有一部分已经是双螺旋，好让两个末端在成键时被并排固定住 —— 这条限制恰好与它的三项任务全部吻合：连接冈崎片段、封闭切除损伤后留下的缺口、以及重组时把链拼接起来，每一种情形下两个末端都已经由模板对齐好了。**整个辅因子花掉，只为把一个 5′-磷酸变得足够活泼、值得被进攻 —— 正是这一手把一个上坡的连接反应变成了下坡的。**",
      src: "§4.1.3, p.80 and p.81, Obr. 4.20 · A p.926",
      see: [{ id: "L-25-3-1", en: "recombination, and why a break needs another copy of the sequence", cn: "重组，以及为什么一处断裂需要另一份序列拷贝" }]
    },
    {
      link_en: "the forks have to be stopped, and finishing the sequence leaves a problem no further synthesis can touch",
      link_cn: "两个叉必须被叫停 —— 而序列抄完之后还剩下一个「再怎么合成也解决不了」的问题",
      en: "The terminus region of the circular chromosome carries ten copies of a 20 bp sequence called Ter, in two clusters pointing opposite ways. Each Ter binds a protein called Tus, and a Tus-Ter pair stops a fork coming from one direction only, which builds a trap a fork can enter but not leave; only one such complex acts per cycle, the first one either fork reaches, and the other fork halts when it runs into the stopped one. Then comes the part synthesis cannot fix: the two finished chromosomes come out threaded through one another like two links of a chain, which is a catenane. **Nothing covalent joins the two circles, and that is exactly why they cannot be pulled apart** — each one is covalently closed, so one has to be cut, the other passed through, and the cut resealed, which in E. coli is done by topoisomerase IV, and only then can the two chromosomes go to separate daughter cells.",
      cn: "环状染色体的终止区带有十份 20 bp 的 Ter 序列，分成朝向相反的两簇。每个 Ter 结合一个叫 Tus 的蛋白，而一个 Tus–Ter 复合体只拦截来自一个方向的复制叉，于是搭出一个「叉进得来、出不去」的陷阱；每个周期只有一个这样的复合体起作用，就是两个叉中先到的那一个所遇到的那个，另一个叉撞上停住的那个之后自然也就停了。接下来是合成解决不了的部分：两条完成的染色体出来时像链条的两个环节一样互相套着，这叫连环体。**两个环之间没有任何共价键相连，而这正是它们分不开的原因 —— 每个环自身都是共价闭合的，所以只能切开一个、让另一个穿过去、再把切口封回；大肠杆菌里干这活的是拓扑异构酶 IV，只有这一步做完，两条染色体才能进入不同的子细胞。**",
      src: "A p.927–928, Fig. 25-16, Fig. 25-17",
      see: [{ id: "L-24-2-1", en: "decatenation, and why only a type II topoisomerase can do it", cn: "解连环，以及为什么只有 II 型拓扑异构酶做得到" }]
    },
    {
      link_en: "a eukaryotic cell runs the same machine, and one piece of arithmetic forces its biggest difference",
      link_cn: "真核细胞跑的是同一台机器，而一道算术逼出了它最大的那个差别",
      en: "A eukaryotic fork moves about 50 nucleotides per second, one-twentieth of the bacterial rate, so copying an average human chromosome from a single origin would take over 500 hours; human chromosomes carry 30,000 to 50,000 origins instead. Firing each of them exactly once per cycle is called licensing: with cyclins destroyed at the end of mitosis, an origin recognition complex plus two loading proteins install two inactive rings of the MCM2-7 helicase at each origin, and that assembly is the licence; S-phase cyclin-CDK complexes then switch the helicases on and at the same time block any new licence from being issued. Three polymerases divide the work — epsilon copies the continuous strand, delta the one made in pieces, both of them proofreading, while alpha is a combined polymerase-primase that starts each piece and has no proofreading at all, which is why it hands over immediately — and the sliding clamp here is called PCNA, whose shape is remarkably like the bacterial beta subunit even though no similarity is visible in their sequences. **The key step is identical to the bacterial one, loading the replicative helicase, although MCM2-7 travels the other way, 3' to 5' along the other template strand.**",
      cn: "真核复制叉每秒前进约 50 个核苷酸，是细菌速率的二十分之一；照这个速度，从单一起点抄完一条平均大小的人类染色体要花 500 多小时，于是人类染色体上有 30,000 到 50,000 个起点。让每个起点在每个周期恰好点火一次，这套控制叫「许可」：有丝分裂末期细胞周期蛋白被销毁之后，一个起点识别复合体加上两个装载蛋白，在每个起点装上两个无活性的 MCM2-7 解旋酶环，这套组装体就是那张许可证；进入 S 期后，细胞周期蛋白–CDK 复合体把解旋酶打开，同时封死任何新许可证的签发。三种聚合酶分工 —— ε 抄连续的那条链，δ 抄分段合成的那条，两者都会校对；而 α 是一个「聚合酶–引物酶」二合一，负责给每一段起头，并且完全没有校对功能，所以它起完头就立刻交班 —— 这里的滑动夹叫 PCNA，它的形状与细菌的 β 亚基惊人地相似，尽管两者的序列上看不出任何相似性。**关键的一步与细菌完全相同，就是装载复制解旋酶，只不过 MCM2-7 走的方向相反，沿另一条模板链 3′→5′ 前进。**",
      src: "A p.928–929, Fig. 25-18"
    },
    {
      link_en: "and the primer rule from the third step turns out, in the end, to be a drug",
      link_cn: "而第三步那条引物规则，最后变成了一种药",
      recall_en: "every polymerase can only extend a strand that already has a free 3'-hydroxyl",
      recall_cn: "每一种聚合酶都只能延长一条已经带有游离 3′-羟基的链",
      en: "Many DNA viruses bring their own DNA polymerase, and an enzyme the host does not have is a drug target. Aciclovir, developed by Gertrude Elion and George Hitchings, is guanine attached to an incomplete ribose ring, and it is selective three times over. First, it does nothing until it is phosphorylated, and the enzyme that phosphorylates it is a thymidine kinase encoded by the herpes simplex virus itself, which binds the drug 200 times more tightly than the cell's own kinase does, so the drug is switched on essentially only inside infected cells. Second, the resulting acyclo-GTP inhibits the viral polymerase far more strongly than the cell's own. Third, and this is the payoff of the whole chain: **the incomplete sugar ring has no 3'-hydroxyl, so once acyclo-GTP has been built into DNA there is nothing left for the next nucleotide to attack**, and the chain simply stops there.",
      cn: "很多 DNA 病毒自带一个 DNA 聚合酶，而宿主没有的酶就是一个药物靶点。阿昔洛韦（由 Gertrude Elion 与 George Hitchings 研发）是鸟嘌呤接在一个不完整的核糖环上，它的选择性来自三重叠加。第一，它必须先被磷酸化才起作用，而给它磷酸化的酶是单纯疱疹病毒自己编码的胸苷激酶，后者结合这个药的紧密程度是细胞自身激酶的 200 倍，所以这个药基本上只在被感染的细胞里被打开。第二，由此生成的 acyclo-GTP 对病毒聚合酶的抑制远强于对细胞自身聚合酶的抑制。**第三，也是整条主线的收束：那个不完整的糖环上没有 3′-羟基，所以一旦 acyclo-GTP 被接进 DNA，下一个核苷酸就没有东西可以进攻了，链就在那里停住。**",
      src: "A p.929–930"
    }
  ],
  terms: [
    { en: "semiconservative replication", cn: "半保留复制",
      def_en: "Each daughter double helix keeps one whole parental strand and pairs it with one newly made strand. Established by Meselson and Stahl in 1957, and visible directly in the theta structure of a replicating circular chromosome.",
      def_cn: "每个子代双螺旋保留一整条亲代链，并让它与一条新合成的链配对。由 Meselson 与 Stahl 于 1957 年确立，在正在复制的环状染色体的 θ 结构上可以直接看到。" },
    { en: "primer", cn: "引物",
      def_en: "A stretch of nucleic acid already paired to the template and carrying a free 3'-hydroxyl, to which a polymerase can add. Its free end is the primer terminus. Many are short RNAs, because an RNA polymerase can start a chain from nothing. This single requirement generates primase, discontinuous synthesis, primer removal, ligation, and the end-replication problem of linear chromosomes.",
      def_cn: "一段已经与模板配对、并带有游离 3′-羟基的核酸，聚合酶可以往上加；它的游离末端叫引物末端。很多引物是短 RNA，因为 RNA 聚合酶能从零起头。正是这一条要求催生了引物酶、不连续合成、引物拆除、连接反应，以及线状染色体的末端复制问题。" },
    { en: "leading and lagging strand", cn: "先导链与滞后链",
      def_en: "The strand whose template lets it grow the same way the fork moves is made in one uninterrupted run; the other must grow backwards from the fork and is assembled from Okazaki fragments, 1,000 to 2,000 nucleotides in bacteria and 150 to 200 in eukaryotes. Replication is therefore semidiscontinuous.",
      def_cn: "模板方向恰好让它与复制叉同向前进的那条链，一气呵成地合成；另一条必须背离复制叉往回长，由冈崎片段拼成，细菌中 1,000–2,000 个核苷酸、真核中 150–200 个。所以复制是半不连续的。" },
    { en: "processivity", cn: "持续合成能力",
      def_en: "The average number of nucleotides a polymerase adds before it lets go of the template. 3 to 200 for DNA polymerase I, over 500,000 for the polymerase III holoenzyme. It is not an intrinsic property of the enzyme — the sliding clamp confers it.",
      def_cn: "一个聚合酶在松开模板之前平均能加上的核苷酸数目。DNA 聚合酶 I 是 3–200，聚合酶 III 全酶超过 500,000。它并非酶自身的固有性质 —— 是滑动夹赋予的。" },
    { en: "proofreading", cn: "校对",
      def_en: "The 3' to 5' exonuclease activity that clips off a nucleotide just added wrongly, working through a kinetic pause: a mismatched pair in the postinsertion site blocks the enzyme's forward slide, which is the opportunity to excise. It is something other than polymerisation run backwards, costs three high-energy bonds per correction, and improves accuracy 100- to 1,000-fold.",
      def_cn: "把刚刚加错的核苷酸剪掉的 3′→5′ 外切酶活性，依靠一个动力学停顿：插入后位点上的错配阻断了酶向前滑动，这就是切除的机会。它并不是把聚合反应倒放一遍；每纠正一次要花掉三个高能键；它把准确度提高 100 到 1,000 倍。" },
    { en: "nick translation", cn: "缺口平移",
      def_en: "The 5' to 3' nuclease of DNA polymerase I removing nucleotides ahead of a single-strand break while the polymerase fills in behind it, so the break travels toward the 3' end. It is how an RNA primer is taken out and how excised ultraviolet damage is patched in the same pass.",
      def_cn: "DNA 聚合酶 I 的 5′→3′ 核酸酶在单链断裂处前方切走核苷酸、聚合酶在后方补上，于是断裂沿分子向 3′ 端移动。RNA 引物的去除，以及紫外损伤切除后在同一趟里补好，靠的都是它。" },
    { en: "Klenow fragment", cn: "Klenow 片段",
      def_en: "The 67,000 molecular weight piece left when limited proteolysis takes the 5' to 3' nuclease away from DNA polymerase I. It still polymerises and still proofreads, but it cannot remove a primer — which is the direct demonstration that the enzyme's three jobs are three separate active centres.",
      def_cn: "有限蛋白水解把 5′→3′ 核酸酶从 DNA 聚合酶 I 上切走后剩下的那块，分子质量 67,000。它仍能聚合、仍能校对，却不能去除引物 —— 这直接证明了这个酶的三项工作是三个彼此独立的活性中心。" },
    { en: "sliding clamp", cn: "滑动夹",
      def_en: "Two beta subunits paired into a closed donut that encircles the DNA and slides along with the polymerase, preventing it from dissociating. A five-subunit ATP-driven loader strains the closed ring open at one join, admits the primed DNA, then hydrolyses ATP to shut it. The eukaryotic counterpart is PCNA, near-identical in shape with no sequence similarity.",
      def_cn: "两个 β 亚基配成的闭合甜甜圈，套住 DNA 并随聚合酶一起滑动，防止它脱落。一个由五个亚基组成、靠 ATP 驱动的装载器把闭合的环在某个接缝处撑开，让加好引物的 DNA 进去，再水解 ATP 把它合上。真核的对应物是 PCNA，形状几乎相同，序列上却毫无相似性。" },
    { en: "replisome", cn: "复制体",
      def_en: "The whole multiprotein assembly at one fork: up to three core polymerases tied together by the clamp loader, their beta clamps, the helicase and the primase. Because the cores are physically joined, the lagging-strand template must loop around the assembly so both cores travel the same way.",
      def_cn: "一个复制叉上的整套多蛋白组装体：最多三个核心聚合酶被装载器拴在一起，加上它们的 β 夹、解旋酶和引物酶。正因为这些核心在物理上连着，滞后链模板必须绕着这套装置翻折成环，好让两个核心朝同一个方向前进。" },
    { en: "oriC and DnaA", cn: "oriC 起点与 DnaA 蛋白",
      def_en: "The 245 bp E. coli origin holds five 9 bp repeats plus three further sites for the initiator protein, an A=T-rich unwinding element, and 11 GATC sequences against a genome average of one per 256 bp. Eight ATP-bound initiator molecules stack into a right-handed helix that the origin wraps tightly around, and the positive supercoil that wrapping forces into the neighbouring DNA is what pulls the A=T-rich element apart — no enzyme melts it.",
      def_cn: "大肠杆菌 245 bp 的起点带有五份 9 bp 重复序列、另外三个供起始蛋白结合的位点、一段富含 A=T 的解链元件，以及 11 个 GATC 序列（全基因组平均每 256 bp 才一个）。八份结合 ATP 的起始蛋白叠成一个右手螺旋，起点紧紧缠绕其上；缠绕硬挤进邻近 DNA 的那个正超螺旋，才是把富含 A=T 的解链元件拉开的力量 —— 没有酶去熔它。" },
    { en: "DnaB and DnaC", cn: "DnaB 与 DnaC",
      def_en: "DnaB is the hexameric ring-shaped replicative helicase of E. coli, travelling 5' to 3' along single-stranded DNA. DnaC is the ATP-driven loader that cracks the ring open and installs two DnaB hexamers back to back, one on each separated strand — which is why a single initiation event produces two forks moving in opposite directions.",
      def_cn: "DnaB 是大肠杆菌环形六聚体复制解旋酶，沿单链 5′→3′ 前进。DnaC 是靠 ATP 驱动的装载器，把这个环撑开，背对背装上两个 DnaB 六聚体，分开的两条链上各一个 —— 这就是一次起始事件产生两个反向复制叉的原因。" },
    { en: "hemimethylation", cn: "半甲基化",
      def_en: "Dam methylase methylates the adenine of every GATC. Just after a fork passes, the parent strand of oriC carries those methyl groups and the new strand does not; SeqA binds that state and holds the origin at the plasma membrane, out of use, until full methylation is restored. The mark is made automatically by copying and decays at a fixed rate, so a cell counts rounds of replication by reading methyl groups.",
      def_cn: "Dam 甲基化酶给每一个 GATC 的腺嘌呤加上甲基。复制叉刚过去时，oriC 的亲代链带着甲基而新链没有；SeqA 结合这种状态，把起点扣在质膜上暂停使用，直到完全甲基化恢复。这个标记由复制动作自动产生，并以固定速率消失 —— 细胞就是靠读甲基来数复制轮数的。" },
    { en: "DNA ligase", cn: "DNA 连接酶",
      def_en: "Seals a nick by forming a phosphodiester bond between a 3'-hydroxyl and a 5'-phosphate. The reaction runs uphill, so an AMP taken from NAD+ in bacteria or from ATP in viruses and eukaryotes is first attached to a lysine of the enzyme, then handed to the 5'-phosphate to activate it. It cannot join two single strands: the ends must already be aligned by a template.",
      def_cn: "通过在 3′-羟基与 5′-磷酸之间成磷酸二酯键来封闭缺口。这个反应是上坡的，所以先把一个 AMP（细菌取自 NAD+，病毒与真核取自 ATP）接到酶的一个赖氨酸上，再转交给 5′-磷酸把它活化。它不能连接两条单链：两个末端必须已经由模板对齐。" },
    { en: "Ter and Tus", cn: "Ter 与 Tus",
      def_en: "Ten copies of a 20 bp sequence sit in the terminus region of the E. coli chromosome in two oppositely oriented clusters, each binding a protein that arrests a replication fork approaching from one direction only. Together they build a trap a fork can enter but not leave; only one complex acts per cycle.",
      def_cn: "大肠杆菌染色体的终止区里有十份 20 bp 的序列，分成朝向相反的两簇，每一份都结合一个只拦截单一方向来叉的蛋白。两者合起来构成一个「进得来、出不去」的陷阱；每个周期只有一个复合体起作用。" },
    { en: "catenane", cn: "连环体",
      def_en: "Two finished circular chromosomes threaded through one another like links of a chain. Nothing covalent joins them, which is exactly why they cannot be separated by pulling: each circle is covalently closed, so topoisomerase IV must cut one, pass the other through, and reseal.",
      def_cn: "两条完成的环状染色体像链条的环节一样互相套着。它们之间没有任何共价键相连 —— 这正是拉不开的原因：每个环自身都是共价闭合的，所以必须由拓扑异构酶 IV 切开一个、让另一个穿过去、再封回。" },
    { en: "licensing", cn: "复制许可",
      def_en: "The eukaryotic once-per-cycle control. With cyclins destroyed at the end of mitosis, an origin recognition complex with two loading proteins installs two inactive MCM2-7 helicase rings at each of a chromosome's 30,000 to 50,000 origins; S-phase cyclin-CDK complexes then activate those helicases and simultaneously prevent any new licence being issued.",
      def_cn: "真核细胞「每周期只复制一次」的控制机制。有丝分裂末期细胞周期蛋白被销毁后，起点识别复合体连同两个装载蛋白，在染色体那 30,000–50,000 个起点上各装两个无活性的 MCM2-7 解旋酶环；进入 S 期后，细胞周期蛋白–CDK 复合体把这些解旋酶激活，同时阻止任何新许可证签发。" }
  ]
};
