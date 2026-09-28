/* Spine for Lehninger 9.2, 9.3 and chapter 10 — 速通简洁版.

   House style is SPINE_SPEC.md. One chain per node, one claim per step, every noun
   introduced where it is first used, every structural claim followed by its
   consequence. `beyond: true` marks material that is standard and examinable but is
   not on the pages the node was read from.

   Nodes in this file: L-9-2-1, L-9-3-1, L-10-1-1, L-10-2-1, L-10-2-2, L-10-3-1,
   L-10-4-1.  L-9-1-1 lives in spine_ch7_9.js and is not touched here. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ================================================================ L-9-2-1 ==== */
window.BIOLITE_SPINE["L-9-2-1"] = {
  assumed: [
    "protein", "gene", "genome", "DNA", "RNA", "mrna", "cell", "enzyme", "nucleus",
    "chromosome", "bacteria", "virus", "yeast", "antibody", "plasmid", "column",
    "amino acid", "sequence", "mutation", "phenotype", "ligand", "receptor",
    "transcription", "translation", "phosphorylation"
  ],
  nodeTitle_en: "Exploring protein function",
  nodeTitle_cn: "探究蛋白质的功能",
  title_en: "You have a gene and no idea what its protein does — the four kinds of evidence, ending with taking the protein away",
  title_cn: "你有一个基因，却不知道它的蛋白在做什么 —— 四类证据，最后一类是把这个蛋白拿掉",
  steps: [
    {
      en: "The word **function** means three different things about a protein, and each one is answered by a different experiment. **Phenotypic** function is what the protein does to the whole organism: remove it and the organism grows slowly, develops abnormally, or dies. **Cellular** function is the set of other molecules it works with inside a cell. **Molecular** function is the exact biochemical activity — which reaction it catalyses, which ligand it binds. Holding the three apart tells you which method to reach for.",
      cn: "**「功能」**这个词，对一个蛋白来说有**三种不同的意思**，每一种由不同的实验回答。**表型功能 (phenotypic)**：这个蛋白对**整个生物体**做了什么 —— 把它去掉，生物体生长变慢、发育异常，或者死亡。**细胞功能 (cellular)**：它在细胞里和哪些分子一起工作。**分子功能 (molecular)**：确切的生化活性 —— 催化哪个反应、结合哪个配体。把这三层分开，才知道该伸手去拿哪一种方法。",
      src: "A p.317, §9.2"
    },
    {
      link_en: "the cheapest evidence first, because it costs no bench work at all",
      link_cn: "先看最便宜的证据，因为它完全不用做实验",
      en: "A new protein sequence is first compared with sequences whose function is already known. **BLAST** is the program that does the comparison: it takes your sequence and searches the public sequence databases at **NCBI** and **Ensembl** for anything similar. Similarity is usable evidence only because of evolution — two similar sequences are similar because they descend from one ancestral sequence, and a shape that has been kept usually kept its job as well. Three words decide whether a hit actually means anything. **Orthologs** are related genes in **different** species; **paralogs** are related genes **within one** species, usually made by gene duplication. Function established for a gene in one species can be carried over tentatively to its ortholog in another, most safely between close relatives such as mouse and human. **Synteny** is the extra evidence: it is conservation of gene **order** along a chromosome, so when two genes sit at the same position inside segments whose neighbouring genes also match, that shared arrangement supports orthology beyond the sequence match alone. Sequence alone does not get you far enough, and the book says so plainly: every newly sequenced genome still contains many genes — **often 40% or more** — about which little or nothing is known.",
      cn: "拿到一段新的蛋白序列，第一步是把它和**已知功能**的序列比较。**BLAST** 就是做这件比较的程序：把你的序列丢进去，到 **NCBI** 和 **Ensembl** 的公共序列数据库里搜出所有相似的。相似性之所以能当证据，**完全是因为进化** —— 两段序列相似，是因为它们来自同一段祖先序列；而一个被保留下来的形状，通常连同它的活儿一起被保留了下来。一个搜索结果到底算不算数，取决于三个词。**直系同源 (orthologs)** 是**不同物种**之间的相关基因；**旁系同源 (paralogs)** 是**同一物种内部**的相关基因，通常由基因重复产生。在一个物种里确立的功能，可以**暂定地**搬到另一个物种的直系同源基因上 —— 在小鼠与人这样的近亲之间最稳妥。**共线性 (synteny)** 是额外那条证据：它指的是染色体上**基因顺序**的保守，所以当两个基因位于「邻居也彼此对得上」的片段中的同一位置时，这种共享的排列方式就在单纯的序列相似之外，进一步支持它们互为直系同源。光靠序列走不了多远，书里也直说了：每一个新测序的基因组里仍然有大量基因 —— **常常占四成以上** —— 我们对它们几乎一无所知。",
      src: "A p.317"
    },
    {
      link_en: "so go to the cell and ask when and where the protein is actually present",
      link_cn: "那就到细胞里去问：这个蛋白究竟在什么时候、什么地方出现",
      en: "Two words are needed first. The **transcriptome** is the whole set of RNAs a cell has transcribed **at one given moment**; the **proteome** is the whole set of proteins present at one given moment. The phrase *at one given moment* is the entire content of both words: a genome is fixed, while these two change with tissue, condition and time — and that change is what carries the information. Watching how the transcriptome shifts when one gene is altered is one of the strongest clues to what that gene's product was doing.",
      cn: "先要两个词。**转录组 (transcriptome)** 是细胞在**某一给定时刻**转录出来的全部 RNA；**蛋白质组 (proteome)** 是**某一给定时刻**存在的全部蛋白。「**在某一给定时刻**」这半句就是这两个词的全部内涵：基因组是固定的，而这两者随组织、条件和时间**变化** —— 而正是这种变化承载着信息。当你改动某一个基因，去看转录组**如何移动**，这是关于该基因产物在干什么的最有力线索之一。",
      src: "A p.317"
    },
    {
      link_en: "the method that reads the transcriptome, and the reason it counts as well as lists",
      link_cn: "读取转录组的方法 —— 以及它为什么不只是「列清单」，还能「数数」",
      en: "**RNA-Seq** is deep sequencing of a cell's RNA: the RNA is isolated, **fragmented** to a size the sequencing machine likes, copied into double-stranded DNA by **reverse transcriptase** — an enzyme that makes DNA from an RNA template — and sequenced. Counting comes free, and that is the whole trick: **if a cell holds more copies of one RNA, that RNA simply gives rise to more sequencing reads**, so read number reports abundance. Two preparation choices are worth knowing because each encodes a decision. For the **whole** transcriptome, prime the reverse transcriptase with **random hexamers**, six-base primers that land everywhere; six bases suffice because an RNA-DNA hybrid is more stable than a DNA-DNA one. For protein-coding genes only, catch the eukaryotic messenger RNAs by their **poly(A) tails** on beads coated with **poly(dT)**. The method now runs on a **single cell**, which is how you catalogue what is transcribed in different parts of one tissue — and it matters most in a tumour, where genome instability has produced a range of cell types. One honest limit: the messenger RNAs present are a clue to the proteins present, because **not every messenger RNA is translated straight away**.",
      cn: "**RNA-Seq** 就是对细胞 RNA 做深度测序：分离 RNA，**打碎**到测序仪喜欢的长度，用**逆转录酶**（一种以 RNA 为模板合成 DNA 的酶）拷贝成双链 DNA，再测序。「计数」是白送的，而这正是它的全部妙处：**某种 RNA 在细胞里拷贝越多，它产生的测序读长就越多**，于是读长数目直接报告了丰度。有两个制备上的选择值得知道，因为每个都编码了一个决定。要**整个**转录组，就用**随机六聚体**（落在到处都能落的六碱基引物）来引发逆转录；六个碱基就够，因为 **RNA-DNA 杂合体比 DNA-DNA 杂合体更稳定**。只要蛋白编码基因，就用包被 **poly(dT)** 的磁珠，通过真核 mRNA 的 **poly(A) 尾**把它们钓出来。这个方法如今灵敏到能用于**单个细胞**，于是可以编目同一组织**不同部位**各自在转录什么 —— 而它在**肿瘤**里最要紧，因为基因组不稳定性在那里造出了一系列不同的细胞类型。一条诚实的限制：存在的 mRNA 只是关于存在哪些蛋白的**线索**，因为**并非每一条 mRNA 都会马上被翻译**。",
      src: "A p.318"
    },
    {
      link_en: "and the method that closes exactly that gap",
      link_cn: "而下面这个方法，补的正是这个缺口",
      en: "**Mass spectrometry** — separating molecules by mass and charge — catalogues and quantifies the thousands of proteins in a cell directly. It complements RNA-Seq: RNA-Seq lists what was **transcribed**, mass spectrometry lists what was transcribed **and** translated. It also adds one dimension no sequencing method has: it reports **how each protein is modified**, and therefore its regulatory state. **A phosphorylated enzyme and its unphosphorylated form come from the same gene and the same transcript and are different molecules, and only this method sees the difference.**",
      cn: "**质谱 (mass spectrometry)** —— 按质量与电荷把分子分开 —— 直接编目并定量一个细胞里的数千种蛋白。它是对 RNA-Seq 的**补充**：RNA-Seq 列出的是**被转录**的东西，质谱列出的是**既被转录又被翻译**的东西。它还多出一个维度，任何测序方法都没有：它报告**每个蛋白是怎样被修饰的**，从而报告它的**调控状态**。**一个磷酸化的酶和它未磷酸化的形式，来自同一个基因、同一条转录本，却是两个不同的分子 —— 只有这个方法看得见这个差别。**",
      src: "A p.318"
    },
    {
      link_en: "abundance is not location, and location needs a lamp",
      link_cn: "丰度不等于位置；要看位置，得给它点一盏灯",
      en: "**Green fluorescent protein (GFP)** is a protein from the jellyfish *Aequorea victoria* that glows green under blue light. Fuse your gene to the GFP gene and the cell makes one fusion protein carrying both jobs, so your protein can be watched **while the cell is alive**. It works almost anywhere for one structural reason: GFP is a barrel of beta strands with its light-emitting group at the centre, and that group is generated **autocatalytically from three of GFP's own residues**, Ser65-Tyr66-Gly67, needing nothing from the host except **molecular oxygen**. **No cofactor to supply means no cell that cannot support it**, and a few molecules are enough to see down a microscope. Osamu Shimomura found the protein and Martin Chalfie showed the fusion trick works; Roger Tsien's engineering, plus related proteins from other sea animals, produced variants across the visible spectrum, so two tagged proteins can be told apart **by colour in the same cell**. Concrete cases: a GLR1-GFP fusion lights up a glutamate receptor in the nematode *Caenorhabditis elegans*, and *Escherichia coli* expressing GFP fused to a plasmid-binding protein shows bright dots exactly where its plasmids sit.",
      cn: "**绿色荧光蛋白 (GFP)** 是来自水母 *Aequorea victoria* 的一个蛋白，在蓝光下发绿光。把你的基因和 GFP 的基因融合，细胞就造出一个身兼两职的融合蛋白，于是你的蛋白可以在**细胞还活着的时候**被观察。它几乎放到哪儿都能用，原因是一个结构上的事实：GFP 是一个 β 折叠围成的桶，发光基团位于桶心，而这个基团是**由 GFP 自身的三个残基自催化生成的** —— Ser65-Tyr66-Gly67 —— 除**分子氧**之外不向宿主索取任何东西。**不需要额外提供辅因子，就意味着没有哪个细胞供不起它**；显微镜下几个分子就够看见。Osamu Shimomura 发现了这个蛋白，Martin Chalfie 证明融合这一招行得通；Roger Tsien 的蛋白质工程，加上从其他海洋动物里分到的同类荧光蛋白，做出了覆盖可见光谱的各种变体，于是同一个细胞里两个被标记的蛋白可以**靠颜色**分开。两个具体例子：**GLR1-GFP** 融合体点亮线虫 *Caenorhabditis elegans* 里的一个谷氨酸受体；表达「质粒结合蛋白 + GFP」的 *Escherichia coli* 则显示出明亮的光点，**恰好标出质粒所在的位置**。",
      src: "A p.319"
    },
    {
      link_en: "a fusion protein is still an altered protein, and sometimes that is unacceptable",
      link_cn: "但融合蛋白终究是被改动过的蛋白，有时这不能接受",
      en: "**Immunofluorescence** locates the **unaltered**, native protein instead, using an antibody that carries a fluorescent dye. The cheap gain in signal is the **indirect** version: an unlabelled first antibody binds your protein, and several dye-carrying **second** antibodies then bind that first one. That is signal **amplification** — one target ends up wearing many dyes instead of one. A stronger version of the same trick uses **biotin** — a small vitamin that **streptavidin**, a bacterial protein, grips in one of the tightest non-covalent interactions known. Attach biotin to the first antibody, detect it with dye-linked streptavidin, and every target again carries several dyes. The cost is stated bluntly and is the thing to remember: **this approach requires fixation of the cell, and therefore its death.** You trade a living cell for an honest, untagged one.",
      cn: "**免疫荧光 (immunofluorescence)** 换一条路，去看**未经改动的天然蛋白**，用的是一个带荧光染料的抗体。最便宜的信号增益来自**间接法**：先用一个不带标记的一抗结合你的蛋白，再让若干个带染料的**二抗**去结合这个一抗。这就是信号**放大 (amplification)** —— 一个目标身上挂的不再是一个染料，而是很多个。同一招还有更强的版本：用**生物素 (biotin)** —— 一种小分子维生素，**链霉亲和素 (streptavidin)**（一种细菌蛋白）抓住它靠的是已知最紧的非共价相互作用之一。把生物素接到一抗上，再用连着染料的链霉亲和素去检测，每个目标同样挂上好几个染料。代价书里写得很直白，也正是要记住的那句：**这个做法要求把细胞固定，也就是把它杀死。** 你是拿「活细胞」换了「没被加标签的真实蛋白」。",
      src: "A p.320"
    },
    {
      link_en: "that answers where. The cellular level asks who with",
      link_cn: "以上回答的是「在哪」。细胞层面的问题是「和谁一起」",
      en: "An **epitope tag** is a short peptide stuck onto your protein for which a well-characterised antibody already exists commercially. Express the tagged protein, precipitate it with that antibody, and **whatever was bound to your protein at that moment comes down with it**; mass spectrometry then names the passengers. **Tandem affinity purification (TAP)** runs the same logic twice with two **different** tags in series — protein A, which binds immobilised IgG, then a calmodulin-binding peptide, which binds immobilised calmodulin, with a cut by the specific TEV protease between the two columns. Only an interaction that survives **both** steps is reported, and that is exactly why it suppresses false positives: a weak or promiscuous binder that happened to ride along on the first column is very unlikely to survive a second, unrelated one.",
      cn: "**表位标签 (epitope tag)** 是接在你的蛋白上的一小段肽，市面上已经有性质研究透彻的抗体专门认它。表达带标签的蛋白，用那个抗体把它沉淀下来，**那一刻结合在你的蛋白上的东西就跟着一起下来**；随后用质谱点名这些「搭车的」。**串联亲和纯化 (TAP)** 把同一套逻辑用**两个不同的标签**连着跑两遍 —— 先是 Protein A（结合固定化的 IgG），再是一段钙调蛋白结合肽（结合固定化的钙调蛋白），两根柱子之间用特异的 **TEV 蛋白酶**切一刀。**只有两步都活下来**的相互作用才被报告，而这正是它压住假阳性的原因：一个碰巧在第一根柱子上蹭下来的弱结合物或滥交结合物，极不可能在第二根**毫不相关**的柱子上也照样活下来。",
      src: "A p.320–321"
    },
    {
      link_en: "both of those pull proteins out of a broken cell. The next one asks the question inside a living one",
      link_cn: "上面两招都是从「被打碎的细胞」里往外捞。下面这招是在活细胞内部提问",
      recall_en: "the same trade the GFP-versus-immunofluorescence step made, now on the interaction side",
      recall_cn: "和上面 GFP 对免疫荧光那一步是同一笔交易，只是换到了「相互作用」这一侧",
      en: "**Yeast two-hybrid analysis** turns a physical meeting between two proteins into a yes/no answer visible on a plate. It exploits **Gal4p**, a yeast protein that switches genes on and is built from **two** parts — one binds a specific DNA sequence, the other activates RNA polymerase. **Those two parts stay folded and stable when separated, and transcription fires only when they are brought close together.** So fuse protein X to the DNA-binding part and protein Y to the activating part, in two separate constructs; if X and Y touch each other, the two parts of Gal4p are dragged into proximity and a **reporter gene** — a gene whose product either lets the cell grow on selective medium or turns it a colour — is switched on. At scale, one yeast strain library carries many DNA-binding fusions, a second strain carries the activating fusion for your protein, the strains are **mated**, and only the diploids whose reporter fires survive or change colour; sequencing the fusion they carry names the partner. Strength: it probes the interaction **inside an intact living cell**. Weakness, stated plainly: multiprotein complexes generate false positives.",
      cn: "**酵母双杂交 (yeast two-hybrid)** 把两个蛋白之间的一次物理相遇，变成平板上肉眼可见的是/否答案。它利用的是 **Gal4p** —— 酵母里一个负责把基因打开的蛋白，由**两个部分**构成：一个结合特定 DNA 序列，另一个激活 RNA 聚合酶。**这两部分分开时各自折叠稳定，而只有被凑到一起，转录才会启动。** 于是把蛋白 X 融合到 DNA 结合的那部分上、把蛋白 Y 融合到激活的那部分上，做成两个独立构建体；如果 X 和 Y 真的碰在一起，Gal4p 的两部分就被拽到一处，一个**报告基因**（其产物要么让细胞在选择培养基上长起来，要么让它变色）随之被打开。规模化时，一株酵母的文库携带许多 DNA 结合部分的融合体，另一株携带你那个蛋白的激活部分融合体，两株**交配 (mated)**，只有报告基因被点亮的二倍体才存活或变色；把它携带的融合基因测序，就点出了那个伙伴。优势：它是在**完整的活细胞内部**探测相互作用。弱点书里也直说：**多蛋白复合物会造出假阳性**。",
      src: "A p.321–322"
    },
    {
      link_en: "the phenotypic level has only one honest experiment: take the protein away",
      link_cn: "表型层面只有一个诚实的实验：把这个蛋白拿掉",
      en: "The general strategy is older than any editing tool: **cut the gene at a functionally critical site and let the cell's own repair machinery ruin it.** In eukaryotes the cut — a **double-strand break**, both strands of the DNA severed at the same place — is usually sealed by **non-homologous end joining (NHEJ)**, a repair process that rejoins the two ends **imprecisely**, often deleting or adding a few nucleotides at the junction. A few nucleotides added or lost inside a coding sequence wrecks the reading frame, so the gene is dead — which is what the experiment wanted. **CRISPR/Cas9 did not introduce a new principle of gene inactivation. It made the cut easy to aim**, which is why systems developed from 2011 largely displaced the older targeting methods.",
      cn: "这个总策略比任何编辑工具都老：**在一个功能关键的位点把基因切开，让细胞自己的修复机器把它搞坏。** 在真核细胞里，这一刀造成的是**双链断裂**（DNA 两条链在同一处都被切断），通常由**非同源末端连接 (NHEJ)** 封上 —— 这是一种把两个断端**不精确**地接回去的修复过程，连接处常常少几个或多几个核苷酸。编码序列里多几个少几个核苷酸就毁了阅读框，基因就死了 —— 而这正是这个实验想要的。**CRISPR/Cas9 并没有引入一个全新的基因失活原理，它只是让这一刀变得容易瞄准** —— 这就是 2011 年以来发展出的这套系统在很大程度上取代了旧靶向方法的原因。",
      src: "A p.322"
    },
    {
      link_en: "and to understand why aiming it is so easy, read the name",
      link_cn: "而要理解它为什么那么容易瞄准，读一下这个名字",
      en: "**CRISPR** stands for **Clustered, Regularly Interspaced Short Palindromic Repeats** — a stretch of a bacterial genome made of short repeated sequences at regular intervals, with a different **spacer** sequence sitting between each pair of repeats. Every spacer is a piece of a bacteriophage — a virus of bacteria — that infected this bacterium before and failed to kill it. A **Cas (CRISPR-associated) protein** is a nuclease, an enzyme that cuts nucleic acid. Together the two are an **immune system**: when the same phage comes back, the repeat array is transcribed into RNA, individual spacers are cut out of that RNA as **guide RNAs (gRNA)**, a guide RNA joins one or more Cas proteins — in some systems together with a second RNA called **tracrRNA** — and the complex finds the matching viral DNA by base pairing and destroys it. **The whole conceptual key is this: the bacterium is consulting a written record of infections it survived, rather than inventing a targeting sequence each time.**",
      cn: "**CRISPR** 是 **Clustered, Regularly Interspaced Short Palindromic Repeats**（成簇的、规律间隔的短回文重复）的缩写 —— 细菌基因组里一段由**规律间隔的短重复序列**组成的阵列，每两个重复之间夹着一段各不相同的 **spacer（间隔）**序列。**每一段 spacer 都是一个噬菌体（感染细菌的病毒）的片段** —— 那个噬菌体曾经感染过这个细菌，却没能杀死它。**Cas（CRISPR-associated）蛋白**是一种核酸酶，即切核酸的酶。两者合起来就是一套**免疫系统**：当同一种噬菌体再来时，这串重复阵列被转录成 RNA，单个 spacer 从这条 RNA 上被切出来，成为 **guide RNA (gRNA)**；一条 gRNA 与一个或多个 Cas 蛋白结合（某些系统里还要加上第二条叫 **tracrRNA** 的 RNA），这个复合物靠**碱基配对**找到匹配的病毒 DNA 并把它摧毁。**全部概念上的钥匙就是这一句：细菌是在查阅一份「我扛过哪些感染」的书面档案，而它每次并不现造一段靶向序列。**",
      src: "A p.322"
    },
    {
      link_en: "so the guide is base pairing, and anything that is base pairing can be retyped",
      link_cn: "既然引导靠的是碱基配对，那么凡是碱基配对的东西都可以重打一遍",
      en: "The tool is that natural system stripped down. *Streptococcus pyogenes* carries a CRISPR/Cas system simple enough that cutting DNA needs only **one** Cas protein, **Cas9**. Jennifer Doudna's and Emmanuelle Charpentier's laboratories fused the guide RNA and the tracrRNA into **one single guide RNA (sgRNA)** — **that fusion is the engineering step that made the system programmable**, because the **20-nucleotide** targeting sequence inside an sgRNA can simply be **rewritten** to point Cas9 at almost any sequence in any genome. The sgRNA has two jobs at once: it **pairs** with the target and it **activates** Cas9's cutting machinery. Delivery follows ordinary cloning practice — plasmids carrying Cas9 and the sgRNA go into microbial cells by electroporation, and into mammalian cells packaged inside engineered viruses that carry them to the nucleus.",
      cn: "工具就是把这套天然系统剥到只剩骨架。**酿脓链球菌 (*Streptococcus pyogenes*)** 带有一套简单到「切 DNA 只需要**一个** Cas 蛋白」的 CRISPR/Cas 系统，这个蛋白叫 **Cas9**。**Jennifer Doudna** 与 **Emmanuelle Charpentier** 的实验室把 guide RNA 和 tracrRNA **融合成一条 single guide RNA (sgRNA)** —— **正是这一步工程改造让整套系统变得可编程**，因为 sgRNA 里那段 **20 个核苷酸**的靶向序列可以被**直接改写**，把 Cas9 指向任何基因组中几乎任何一段序列。sgRNA 同时干两件事：与靶序列**配对**，并**激活** Cas9 的切割装置。递送方式就是普通克隆那一套 —— 带 Cas9 与 sgRNA 的质粒靠电穿孔进微生物细胞；进哺乳动物细胞则打包在改造过的病毒里，由病毒把它们送进细胞核。",
      src: "A p.322–323"
    },
    {
      link_en: "one detail inside Cas9 decides whether you get a knockout or an edit",
      link_cn: "Cas9 内部的一个细节，决定了你拿到的是「敲除」还是「编辑」",
      recall_en: "it works by choosing which repair pathway gets the damage — NHEJ from three steps up, or homologous recombination",
      recall_cn: "它靠的是「让哪条修复通路来处理这个损伤」—— 上面第三步说的 NHEJ，还是同源重组",
      en: "Cas9 carries **two separate nuclease domains**: one cuts the DNA strand that the sgRNA has paired with, the other cuts the opposite strand. Leave both active and you get a double-strand break, NHEJ repairs it badly, and **the gene is knocked out at a random junction**. Inactivate just **one** of the two domains and the enzyme cuts one strand only, making a **nick** — a single-strand break. Supply, alongside it, a **donor DNA fragment carrying the sequence change you want**, and the nick is repaired by **homologous recombination**, which copies the donor and therefore installs a **specific** edit instead of random damage. **Double-strand break plus NHEJ is how you delete a gene; a nick plus a donor is how you rewrite one.** That is the answer when the question is how to make a precise change rather than a knockout.",
      cn: "Cas9 带有**两个独立的核酸酶结构域**：一个切「与 sgRNA 配上对」的那条链，另一个切对面那条。两个都留着有活性，得到的就是**双链断裂**，NHEJ 粗糙地封上，**基因在一个随机的连接处被敲掉**。只让两个结构域中的**一个**失活，酶就只切一条链，造成一个 **nick（缺口）**，即单链断裂。这时再补上一段**携带你想要的序列改动的供体 DNA**，这个缺口就由**同源重组**来修复 —— 同源重组会照抄供体，于是装进去的是**特定的编辑**，而不是随机的破坏。**双链断裂 ＋ NHEJ 用来删掉一个基因；缺口 ＋ 供体用来改写一个基因。** 「我想做精确编辑而不是敲除」的答案就在这里。",
      src: "A p.323"
    },
    {
      link_en: "and once one gene can be perturbed on demand, the whole genome can be perturbed at once",
      link_cn: "而一旦「按需扰动一个基因」成立，就可以一次性扰动整个基因组",
      en: "A **genetic screen** introduces a **perturbation** — inactivation or activation of a gene — so that each individual cell in a population has **one** gene affected while across the whole population **most or all** genes are affected in some cell. Apply a stress, and cells missing a gene they needed to survive it drop out. CRISPR scales this: an **sgRNA library** covering nearly every gene in a genome is built, and the **20 bp** targeting sequence inside each sgRNA doubles as a unique **bar code** that deep sequencing reads back out. The cassettes travel in engineered **lentiviral vectors** — vectors derived from HIV with its own multiplication genes removed — delivered at low multiplicity of infection so that **most cells take up only one cassette**, which is what keeps *one perturbation per cell* true. Which Cas9 variant rides along sets the effect: unmodified Cas9 cuts and knocks out; a nuclease-dead Cas9 merely sits on the DNA and blocks transcription; Cas9 fused to a repressor or activator domain silences or boosts transcription **without cutting DNA at all**. After selection, the **rise or fall of each bar code** says which genes were required, dispensable, or actively harmful under that stress.",
      cn: "一次**遗传筛选 (genetic screen)** 引入一个**扰动**（让某个基因失活或激活），使群体中**每个细胞只有一个**基因受影响，而在**整个群体**层面**几乎所有**基因都在某个细胞里被影响过。施加一种压力，缺了「活下去所必需的那个基因」的细胞就掉队。CRISPR 把这套做法规模化：构建覆盖基因组中几乎每个基因的 **sgRNA 文库**，而每条 sgRNA 里那 **20 bp** 的靶向序列**同时兼作一个独一无二的条形码 (bar code)**，深度测序能把它读回来。这些表达盒装在改造过的**慢病毒载体 (lentiviral vector)** 里 —— 载体源自 HIV，其自身增殖所需的基因已被去除 —— 以**较低的感染复数**递送，好让**大多数细胞只拿到一个表达盒**，这一条正是保证「一个细胞只有一个扰动」这个前提成立的关键。同车携带的是哪种 Cas9 变体，决定了产生什么效果：未改造的 Cas9 切开、敲除；**核酸酶失活的 Cas9** 只是趴在 DNA 上、**阻断转录**；融合了阻遏或激活结构域的 Cas9 则**完全不切 DNA**，只沉默或增强转录。选择之后，**每个条形码丰度的上升或下降**就告诉你：在那种压力下，哪些基因是必需的、可有可无的，或者反而是有害的。",
      src: "A p.323–324"
    },
    {
      link_en: "the same machinery pointed at a whole wild population, and it does not come back",
      link_cn: "同一套装置对准整个野生种群 —— 而且收不回来",
      en: "A **gene drive** is a cassette engineered to spread through a wild population faster than ordinary inheritance allows. The proven design in mosquitoes is the **X-shredder**: insert into the **Y chromosome** a cassette expressing Cas9 plus several sgRNAs aimed at multiple unique sites on the **X chromosome**, under a control system active only during **spermatogenesis**, the making of sperm. During spermatogenesis the cassette destroys the X chromosome at several places at once, so only Y-bearing sperm stay viable; every offspring of such a male is male, every one of those males carries the same cassette, and the effect repeats. **Females become scarce and the population collapses.** Two cautions belong with it: resistance could evolve by mutation at the sgRNA target sites, which is why multiple sites are used, and **once males carrying a gene drive are released into the wild the effect is essentially impossible to call back.** It remains laboratory work.",
      cn: "**基因驱动 (gene drive)** 是一个被设计成「在野生种群中扩散得比普通遗传快得多」的表达盒。在蚊子身上已经验证的设计叫 **X-shredder（X 染色体粉碎器）**：往 **Y 染色体**里插入一个表达盒，它表达 Cas9 外加若干条瞄准 **X 染色体**上多个独特位点的 sgRNA，并置于一个**只在精子发生 (spermatogenesis) 期间**才活跃的调控系统之下。精子发生期间，这个表达盒同时在多个位点摧毁 X 染色体，于是只有带 Y 染色体的精子还能存活；这样一头雄性的后代**全是雄性**，而这些雄性**全都携带同一个表达盒**，效果不断重复。**雌性变得稀少，种群随之崩溃。** 两条告诫要一起记住：抗性可能通过 sgRNA 靶点处的突变演化出来 —— 这正是要用多个靶点的原因；而**一旦携带基因驱动的雄性被放到野外，这个效果基本无法收回**。目前它仍然只停留在实验室里。",
      src: "A p.325, Box 9-1"
    }
  ],
  terms: [
    { en: "ortholog", cn: "直系同源基因",
      def_en: "A gene in a different species descended from the same ancestral gene, with a clear sequence and functional relationship. Function established in one species can be carried over tentatively — most safely between close relatives, and more safely still when gene order around it also matches.",
      def_cn: "不同物种中源自同一祖先基因、序列与功能关系明确的基因。在一个物种里确立的功能可以暂定地搬过去 —— 近亲之间最稳妥，而当它周围的基因顺序也对得上时更稳妥。" },
    { en: "paralog", cn: "旁系同源基因",
      def_en: "A gene descended from the same ancestral gene as another one inside a **single** species, usually created by duplication of that gene. The within-species counterpart of an ortholog.",
      def_cn: "在**同一个物种内部**与另一个基因源自同一祖先基因的基因，通常由该基因的重复产生。它是直系同源在物种内部的对应物。" },
    { en: "synteny", cn: "共线性",
      def_en: "Conservation of gene **order** along a chromosome between related species, rather than conservation of the genes alone. Two genes at the same relative position within matching segments are more likely to be orthologous than sequence similarity by itself can show.",
      def_cn: "相关物种之间染色体上**基因顺序**的保守，而不只是基因本身的保守。位于彼此吻合的片段中相同相对位置的两个基因，比单靠序列相似所能显示的更可能互为直系同源。" },
    { en: "transcriptome", cn: "转录组",
      def_en: "All the RNA a cell has transcribed at one given moment. Unlike a genome, which is fixed, it changes with tissue, condition and time — and that change is the informative part.",
      def_cn: "一个细胞在某一给定时刻转录出来的全部 RNA。与固定的基因组不同，它随组织、条件和时间变化 —— 而这种变化正是有信息量的部分。" },
    { en: "proteome", cn: "蛋白质组",
      def_en: "All the proteins present in a cell at one given moment. Mass spectrometry catalogues and quantifies them directly and also reports how each is chemically modified, which is a read-out of its regulatory state.",
      def_cn: "一个细胞在某一给定时刻存在的全部蛋白。质谱可以直接编目并定量它们，还能一并报告每个蛋白被怎样化学修饰 —— 这就是它调控状态的读出。" },
    { en: "RNA-Seq", cn: "RNA 测序",
      def_en: "Deep sequencing of a cell's RNA after reverse transcription into DNA. More copies of a transcript give more reads, so abundance is measured without any extra step. Sensitive enough for one cell.",
      def_cn: "把细胞 RNA 逆转录成 DNA 后做深度测序。某个转录本拷贝越多，产生的读长越多，于是不用额外步骤就测到了丰度。灵敏度已足以用于单个细胞。" },
    { en: "green fluorescent protein", cn: "绿色荧光蛋白 (GFP)",
      def_en: "A beta-barrel protein from the jellyfish Aequorea victoria whose light-emitting group forms autocatalytically from three of its own residues, Ser65-Tyr66-Gly67, using only molecular oxygen. Because it needs nothing from the host cell, a gene fused to it can be watched in almost any living cell.",
      def_cn: "来自水母 Aequorea victoria 的 β 桶状蛋白，其发光基团由自身三个残基（Ser65-Tyr66-Gly67）自催化生成，只需要分子氧。因为它对宿主细胞一无所求，与它融合的基因几乎可以在任何活细胞里被观察。" },
    { en: "immunofluorescence", cn: "免疫荧光",
      def_en: "Locating a native, untagged protein with a dye-carrying antibody. The indirect version amplifies the signal by binding several dyed second antibodies to one unlabelled first antibody. It requires fixation of the cell, and therefore its death.",
      def_cn: "用带荧光染料的抗体去定位天然的、未加标签的蛋白。间接法通过让若干个带染料的二抗结合一个不带标记的一抗来放大信号。它要求把细胞固定，也就是把细胞杀死。" },
    { en: "epitope tag", cn: "表位标签",
      def_en: "A short peptide fused to a protein under study, chosen because a well-characterised commercial antibody binds it tightly. Used to precipitate that protein and identify everything that came down bound to it.",
      def_cn: "融合在待研究蛋白上的一小段肽，选它是因为市面上已有性质透彻、结合很紧的抗体。用来把该蛋白沉淀下来，再鉴定跟着一起下来的所有东西。" },
    { en: "tandem affinity purification", cn: "串联亲和纯化 (TAP)",
      def_en: "Two different affinity tags in series on one target protein — protein A, then a calmodulin-binding peptide — purified over two columns with a protease cut in between. Only partners surviving both steps are reported, which is what suppresses false positives.",
      def_cn: "在一个目标蛋白上串联两个不同的亲和标签 —— 先 Protein A，再一段钙调蛋白结合肽 —— 过两根柱子，中间切一刀。只有两步都活下来的伙伴才被报告，这正是它压住假阳性的原因。" },
    { en: "yeast two-hybrid analysis", cn: "酵母双杂交",
      def_en: "Detecting a protein-protein contact inside a living yeast cell by splitting the activator Gal4p into its DNA-binding and activating parts, fusing one candidate protein to each, and reading out a reporter gene that fires only when a contact drags the two parts together.",
      def_cn: "在活的酵母细胞内检测蛋白之间的接触：把激活蛋白 Gal4p 拆成 DNA 结合部分和激活部分，把两个候选蛋白各融合一个，再读出报告基因 —— 只有当接触把两部分拽到一起时，报告基因才被点亮。" },
    { en: "CRISPR", cn: "CRISPR",
      def_en: "Clustered, Regularly Interspaced Short Palindromic Repeats — an array of short repeats in a bacterial genome with spacer sequences between them, each spacer a fragment of a phage that infected the bacterium before without killing it. Transcribed and processed into guide RNAs that lead a Cas nuclease to matching viral DNA. A filed record of survived infections, repurposed since 2011 into a programmable editing tool.",
      def_cn: "成簇的、规律间隔的短回文重复 —— 细菌基因组中一串短重复序列，重复之间夹着 spacer，每段 spacer 都是曾经感染过它却没能杀死它的噬菌体的片段。它被转录并加工成 guide RNA，引导 Cas 核酸酶找到匹配的病毒 DNA。这是一份「扛过的感染」的存档，自 2011 年起被改造成可编程的编辑工具。" },
    { en: "single guide RNA", cn: "单一向导 RNA (sgRNA)",
      def_en: "The engineered fusion of a bacterium's natural guide RNA with its tracrRNA into one molecule, made principally in Jennifer Doudna's and Emmanuelle Charpentier's laboratories. Its 20-nucleotide targeting stretch pairs with the genomic target and can be retyped at will, which is the whole basis of programmability.",
      def_cn: "把细菌天然的 guide RNA 与 tracrRNA 工程融合成一个分子，主要由 Jennifer Doudna 与 Emmanuelle Charpentier 的实验室完成。它 20 个核苷酸的靶向段与基因组靶点配对，并且可以随意改写 —— 这就是可编程性的全部基础。" },
    { en: "non-homologous end joining", cn: "非同源末端连接 (NHEJ)",
      def_en: "The eukaryotic repair route that rejoins the two ends of a severed DNA duplex without using a template, sealing the break imprecisely and often deleting or adding nucleotides at the junction. A coding sequence repaired this way usually loses its reading frame, which is what turns a Cas9 cut into a knockout.",
      def_cn: "真核细胞把被切断的 DNA 双链两个断端不用模板直接接回去的修复途径，封口不精确，连接处常常缺失或插入核苷酸。编码序列这样被修复后通常丢掉阅读框 —— 这正是 Cas9 的一刀变成敲除的原因。" },
    { en: "nick", cn: "缺口",
      def_en: "A break in one strand of a DNA duplex only, made by Cas9 when just one of its two nuclease domains is left active. Combined with a donor DNA fragment it is repaired by homologous recombination, which installs a specific chosen edit rather than random damage.",
      def_cn: "只在 DNA 双链的一条链上出现的断口，由只保留一个核酸酶结构域活性的 Cas9 造成。配上一段供体 DNA 片段，它由同源重组修复，装进去的是特定的、你选定的编辑，而不是随机的破坏。" },
    { en: "gene drive", cn: "基因驱动",
      def_en: "A CRISPR/Cas9 cassette engineered to spread through a wild population faster than ordinary inheritance allows — the X-shredder design destroys the X chromosome during sperm formation so that only male offspring result, all of them carrying the cassette, until females run out. Laboratory-only, and once released essentially irreversible.",
      def_cn: "一个被设计成在野生种群中扩散得远快于普通遗传的 CRISPR/Cas9 表达盒 —— X-shredder 设计在精子发生期间摧毁 X 染色体，于是后代全是雄性、且全都携带该表达盒，直到雌性耗尽。目前仅限实验室；一旦释放基本不可逆。" }
  ]
};

/* ================================================================ L-9-3-1 ====
   A short spine on purpose. Section 9.3 was read as a brief orientation
   (Ruojin, 2026-08-10: 基因组学可以简单讲), so this node carries the two numbers
   that change how you picture a human genome, and stops. */
window.BIOLITE_SPINE["L-9-3-1"] = {
  assumed: [
    "genome", "gene", "DNA", "base", "chromosome", "protein", "cell", "sequencing",
    "mutation", "inheritance", "evolution"
  ],
  nodeTitle_en: "Genomics and the human story",
  nodeTitle_cn: "基因组学与人类的来历",
  title_en: "Two numbers from a whole human genome: how little of it is gene, and how little of it differs between two people",
  title_cn: "整个人类基因组给出的两个数字：其中真正是基因的有多少，以及两个人之间不同的有多少",
  steps: [
    {
      en: "Reading one gene tells you about one product. Reading a **whole genome** — every base of DNA an organism carries — lets you ask two questions no single gene can answer: **what the DNA is mostly made of**, and **how one person's DNA differs from another's**. Both answers arrive as a number, and both numbers are surprising.",
      cn: "读一个基因，你了解的是一个产物。读**整个基因组** —— 一个生物体携带的每一个 DNA 碱基 —— 才能问两个单个基因回答不了的问题：**这些 DNA 大部分究竟是什么**，以及**一个人的 DNA 和另一个人差在哪里**。两个答案都以一个数字的形式出现，而两个数字都出人意料。",
      src: "A p.326–336, §9.3"
    },
    {
      link_en: "the first number, and it overturns the picture most people carry",
      link_cn: "第一个数字，它推翻了大多数人心里的那幅图",
      en: "**Only about 30% of human DNA lies inside protein-coding genes at all** — and that 30% counts both the **exons**, the stretches that are kept in the finished messenger RNA, **and** the **introns**, the stretches that are transcribed and then cut back out. **The part that actually specifies amino acids is a small fraction of a small fraction.** So sequencing a human genome is a long way from listing its proteins.",
      cn: "**人类 DNA 中真正落在蛋白编码基因里的，只有约 30%** —— 而这 30% 里既包括**外显子 (exon)**（留在成熟 mRNA 里的那些段），**也**包括**内含子 (intron)**（先被转录、随后又被切掉的那些段）。**真正规定氨基酸的那部分，是一小部分里的一小部分。** 所以「测出一个人类基因组」离「列出它的蛋白清单」还远得很。",
      src: "A p.336"
    },
    {
      link_en: "so if 70% is not gene, what is it?",
      link_cn: "那么，剩下那 70% 不是基因，又是什么？",
      en: "Lehninger puts it in one sentence: “Nearly half of the DNA is derived from parasitic **transposons**.” A transposon is a segment of DNA that copies or moves itself to a new position in the genome, carrying the machinery to do so and nothing that serves the host. **By mass, a human genome is more transposon wreckage than gene.**",
      cn: "Lehninger 用一句话说完：“**Nearly half of the DNA is derived from parasitic transposons**”（近一半的 DNA 来自寄生性的转座子）。**转座子 (transposon)** 是一段能把自己复制或搬到基因组新位置去的 DNA，它带着完成这件事所需的装置，却不带任何对宿主有用的东西。**按重量算，人类基因组里转座子的残骸比基因还多。**",
      src: "A p.336",
      beyond: true,
      beyondNote: "The quoted sentence and the fraction are on A p.336; how a transposon actually moves is developed in chapter 25 and is carried in here only far enough to name the noun.",
      openQuestion_en: "Whether that transposon-derived half does anything for us is a separate question, and not a settled one.",
      openQuestion_cn: "这来自转座子的一半究竟对我们有没有用处，是另一个问题，而且并没有定论。"
    },
    {
      link_en: "the second number, and it is about the difference between two people rather than the content of one",
      link_cn: "第二个数字，说的是两个人之间的差别，而不是一个人体内有什么",
      en: "**Any two people differ by roughly 1 base in every 1,000.** Across three billion bases that is millions of differences, and yet as a fraction it is tiny — which is why the interesting work is not in listing the differences but in tracking **which ones travel together**.",
      cn: "**任意两个人之间，大约每 1000 个碱基里有 1 个不同。** 放在三十亿个碱基上，这是几百万处差异；但作为比例又极小 —— 这正是为什么真正有价值的工作不在于把差异一条条列出来，而在于追踪**哪些差异是结伴而行的**。",
      src: "A p.336"
    },
    {
      link_en: "each of those differences has a name",
      link_cn: "每一处这样的差异都有一个名字",
      en: "A **single nucleotide polymorphism (SNP)** is a position in the genome where different people carry different single bases. **On its own one SNP says almost nothing** — it is one letter among three billion, and most sit outside any gene.",
      cn: "**单核苷酸多态性 (SNP)** 指基因组上的某个位置，不同的人在那里带着不同的单个碱基。**单看一个 SNP 几乎什么也说明不了** —— 它只是三十亿个字母里的一个，而且大多数根本不落在任何基因里。",
      src: "A p.336"
    },
    {
      link_en: "they become useful in blocks, and the block has a name too",
      link_cn: "它们成块出现时才有用，而这个块也有名字",
      recall_en: "this is the *which ones travel together* from two steps up",
      recall_cn: "这就是上面两步说的「哪些差异结伴而行」",
      en: "SNPs that sit close together on the same chromosome are inherited as a set, because the chromosome is passed on in long pieces. **A set of SNPs travelling together this way is a haplotype, and the haplotype — not the individual SNP — is the unit that actually gets used.**",
      cn: "位于同一条染色体上、彼此靠得很近的 SNP 是**成套遗传**的，因为染色体是一大段一大段传下去的。**这样结伴而行的一组 SNP 就叫一个单倍型 (haplotype)，而真正被拿来用的单位是单倍型，不是单个 SNP。**",
      src: "A p.336"
    },
    {
      link_en: "and two entirely different fields are built on that one unit",
      link_cn: "而两个完全不同的领域，都建立在这一个单位之上",
      en: "**Disease-gene hunting**: find a haplotype carried more often by people with a condition than by people without it, and the variant responsible lies somewhere inside that block — which narrows the search from a whole genome to one stretch of one chromosome. **Human migration history**: two populations that share a haplotype share an ancestor who carried it, so the geographic distribution of haplotypes traces where people came from and in what order. **The same blocks, read for medicine in one case and for history in the other.**",
      cn: "**找致病基因**：找出一个在患病者中比在未患病者中更常见的单倍型，那么负责的那个变异就落在这个块里的某处 —— 搜索范围于是从整个基因组缩小到一条染色体上的一段。**人类迁徙史**：两个群体共享同一个单倍型，说明他们共享一位携带过它的祖先，于是单倍型的地理分布就画出了人从哪里来、按什么顺序来。**同样的一批块，一边读出的是医学，另一边读出的是历史。**",
      src: "A p.326–336"
    }
  ],
  terms: [
    { en: "exon", cn: "外显子",
      def_en: "A stretch of a gene that survives into the finished messenger RNA and is therefore available to specify amino acids.",
      def_cn: "基因中保留到成熟 mRNA 里、因而能够规定氨基酸的那些段。" },
    { en: "intron", cn: "内含子",
      def_en: "A stretch of a gene that is transcribed and then cut back out of the RNA before it is used. It counts as part of the gene and does not specify amino acids.",
      def_cn: "基因中先被转录、随后又在 RNA 被使用前切掉的那些段。它算作基因的一部分，但不规定氨基酸。" },
    { en: "transposon", cn: "转座子",
      def_en: "A segment of DNA that copies or moves itself to a new position in a genome, carrying what it needs to do so and nothing that serves its host. Nearly half of human DNA is derived from these.",
      def_cn: "一段能把自己复制或搬到基因组新位置去的 DNA，自带完成此事所需的装置，却不带任何对宿主有用的东西。人类 DNA 中近一半源自它们。" },
    { en: "single nucleotide polymorphism", cn: "单核苷酸多态性 (SNP)",
      def_en: "A position in the genome at which different individuals carry different single bases. Two people differ at roughly one position in every thousand.",
      def_cn: "基因组上的一个位置，不同个体在那里携带不同的单个碱基。两个人大约每一千个位置有一个不同。" },
    { en: "haplotype", cn: "单倍型",
      def_en: "A group of nearby single-base differences on one chromosome that are inherited together as a block, because chromosomes are passed on in long pieces. This block, rather than any one difference in it, is the unit used for finding disease genes and for tracing human migrations.",
      def_cn: "同一条染色体上彼此靠近、作为一整块一起遗传的一组单碱基差异 —— 因为染色体是一大段一大段传下去的。用来找致病基因、追踪人类迁徙的单位是这个块，而不是块里的任何单个差异。" }
  ]
};

/* ================================================================ L-10-1-1 ===
   The thread: a lipid is defined by a physical property, so every claim in this
   node comes back to what a hydrocarbon chain does — how it packs, how badly it
   dissolves, and what a cis double bond does to both. */
window.BIOLITE_SPINE["L-10-1-1"] = {
  assumed: [
    "lipid", "water", "carbon", "hydrogen", "oxygen", "double bond", "single bond",
    "ester", "hydrocarbon", "carboxylic acid", "alcohol", "glycerol", "glucose",
    "membrane", "enzyme", "hydrolysis", "oxidation", "energy", "protein", "cell",
    "blood", "diet", "chiral", "isomer", "solubility", "melting point", "glycogen",
    "polysaccharide", "carbohydrate", "cholesterol"
  ],
  nodeTitle_en: "Storage lipids",
  nodeTitle_cn: "储存脂类",
  title_en: "Everything here follows from one hydrocarbon chain: how it packs, how badly it dissolves, and what a cis double bond does to both",
  title_cn: "这里的一切都由同一根碳氢链决定：它怎么堆叠、有多不溶于水，以及一个顺式双键对这两件事做了什么",
  steps: [
    {
      en: "A biological lipid is defined by a **physical property rather than by a structure**: lipids are “a chemically diverse group of compounds, the common and defining feature of which is their insolubility in water.” No exact structural definition is possible, and the book says so. **The consequence is that their jobs are as varied as their chemistry**: fats and oils are the main stored form of energy; phospholipids and sterols are the main structural material of membranes; and lipids present in small quantities act as enzyme cofactors, electron carriers, light-absorbing pigments, hydrophobic anchors that pin proteins to a membrane, chaperones that help membrane proteins fold, emulsifying agents in the gut, hormones, and messengers inside a cell.",
      cn: "**生物脂类是用一个物理性质、而不是一个结构来定义的**：脂类是“**一群化学上千差万别的化合物，其共同的、也是定义性的特征是不溶于水**”。不存在更精确的结构定义，书里自己就是这么写的。**由此带来的后果是：它们的活儿和它们的化学一样杂。** 脂肪与油是能量的主要储存形式；磷脂与固醇是膜的主要结构材料；此外还有含量很少的一些脂类，充当酶的辅因子、电子载体、吸光色素、把蛋白钉在膜上的疏水锚、帮助膜蛋白折叠的伴侣、消化道里的乳化剂、激素，以及细胞内的信使。",
      src: "A p.341, §10.1"
    },
    {
      link_en: "so start with the piece that recurs in nearly all of them",
      link_cn: "那就从几乎所有脂类里都反复出现的那个零件开始",
      en: "A **fatty acid** is a carboxylic acid carrying a hydrocarbon chain of **4 to 36 carbons**. Most are unbranched and fully saturated; some carry one or more double bonds; a few contain three-carbon rings, hydroxyl groups or methyl branches. Two regularities in the common ones are worth having, because each has a cause. **The most abundant fatty acids have an even number of carbons in an unbranched chain of 12 to 24, and the even number “results from the mode of synthesis of these compounds, which involves successive condensations of two-carbon acetyl units”** — the chain is built two carbons at a time, so it can only come out even. **And the double bonds of a polyunsaturated fatty acid are almost never conjugated: they are separated by a CH2 group, giving CH=CH-CH2-CH=CH rather than CH=CH-CH=CH.** In most fatty acids with a single double bond, that bond lies between C-9 and C-10.",
      cn: "**脂肪酸 (fatty acid)** 是带着一条 **4 到 36 个碳**的碳氢链的羧酸。大多数不分支且完全饱和；有些带一个或多个双键；少数含三碳环、羟基或甲基分支。常见脂肪酸有两条规律值得记住，因为每一条都有原因。**最常见的脂肪酸在 12 到 24 个碳的不分支链上都是偶数个碳，而这个偶数“来自这些化合物的合成方式：连续缩合二碳的乙酰单元”** —— 碳链是**一次接两个碳**建起来的，所以它只可能是偶数。**而多不饱和脂肪酸的双键几乎从不共轭：它们之间隔着一个 CH2，形成 CH=CH-CH2-CH=CH，而非 CH=CH-CH=CH。** 在大多数只有一个双键的脂肪酸里，那个双键位于 C-9 与 C-10 之间。",
      src: "A p.341–342",
      see: [{ id: "L-21-1-1", en: "the two-carbon-at-a-time assembly itself", cn: "「一次两个碳」的合成过程本身" }]
    },
    {
      link_en: "and a chain with a length and some double bonds in it needs a way of being written down",
      link_cn: "而一条有长度、又带着几个双键的链，需要一种写下来的办法",
      en: "The standard shorthand is **chain length : number of double bonds**, so palmitic acid is **16:0** and oleic acid is **18:1**. Numbering starts at the carboxyl carbon, which is **C-1**; the carbon next to it is the alpha carbon, **C-2**. A double-bond position is written as a superscript on **Delta** and names the **lower-numbered** carbon of the two it joins, so oleic acid, whose double bond sits between C-9 and C-10, is **18:1(Delta 9)**.",
      cn: "标准简写是**碳链长度 : 双键数目**，于是**棕榈酸是 16:0**，**油酸是 18:1**。编号从羧基碳开始，它是 **C-1**；紧挨着它的是 α 碳，即 **C-2**。双键位置写成 **Delta** 的上标，并且取它所连的两个碳中**编号较小**的那个，于是双键位于 C-9 与 C-10 之间的油酸写作 **18:1(Delta 9)**。",
      src: "A p.342, key convention"
    },
    {
      link_en: "a second numbering exists as well, and the reason it exists is the part worth knowing",
      link_cn: "另外还有第二套编号，而它为什么存在，才是值得知道的那部分",
      en: "The book gives the reason directly: “Because the physiological role of PUFAs is related more to the position of the first double bond near the **methyl** end of the chain than to that near the carboxyl end, an alternative nomenclature is sometimes used.” PUFA is short for **polyunsaturated fatty acid**, meaning one with more than one double bond. In this second count the **methyl carbon** — the far end, most distant from the carboxyl group — is called the **omega carbon** and numbered 1, so the carboxyl carbon now carries the highest number. **A PUFA whose first double bond falls between C-3 and C-4 of that count is an omega-3 fatty acid; between C-6 and C-7, an omega-6.** Eicosapentaenoic acid is the worked example: 20:5(Delta 5,8,11,14,17) in the standard convention, an omega-3 in this one. **Two systems exist because biology cares which end of the chain a double bond is near, and the two ends are numbered from opposite directions.**",
      cn: "书里直接给了理由：“**因为多不饱和脂肪酸的生理作用，更多地取决于第一个双键离链的甲基端有多近，而非离羧基端有多近，所以有时会用另一套命名法。**” PUFA 是 **polyunsaturated fatty acid（多不饱和脂肪酸）**的缩写，指含一个以上双键的脂肪酸。在第二套数法里，**甲基碳** —— 链的另一头、离羧基最远的那个碳 —— 被称为 **omega 碳**并编号为 1，于是羧基碳反而变成编号最大的。**第一个双键落在这套编号 C-3 与 C-4 之间的 PUFA 就是 omega-3 脂肪酸；落在 C-6 与 C-7 之间的就是 omega-6。** 书里的例子是二十碳五烯酸：在标准命名里是 20:5(Delta 5,8,11,14,17)，在这一套里是 omega-3。**两套系统之所以并存，是因为生物学在意的是双键靠近链的哪一头，而这两头是从相反方向编号的。**",
      src: "A p.343, key convention"
    },
    {
      link_en: "and the omega-3 family is where the word essential earns its meaning",
      link_cn: "而 omega-3 这一族，正是「必需」这个词兑现意义的地方",
      en: "Humans need the omega-3 PUFA **alpha-linolenic acid**, 18:3(Delta 9,12,15), and “do not have the enzymatic capacity to synthesize it and must therefore obtain” it from food. From it humans then build two further omega-3 PUFAs important in cellular function: **eicosapentaenoic acid (EPA)**, 20:5(Delta 5,8,11,14,17), and **docosahexaenoic acid (DHA)**, 22:6(Delta 4,7,10,13,16,19). **An imbalance between omega-6 and omega-3 in the diet is associated with increased cardiovascular risk**: the optimal dietary ratio of omega-6 to omega-3 is between **1:1 and 4:1**, while the ratio in most North American diets is nearer **10:1 to 30:1**. The Mediterranean diet, which is associated with lower cardiovascular risk, is richer in omega-3 PUFAs from leafy vegetables and fish oils — though the book adds honestly that the exact role of fish-oil supplements in preventing cardiovascular disease is controversial.",
      cn: "人需要 omega-3 的 **α-亚麻酸 (alpha-linolenic acid)**，即 18:3(Delta 9,12,15)，并且“**没有合成它的酶学能力，因此必须从食物中获得**”。人再用它造出另外两个对细胞功能重要的 omega-3 PUFA：**二十碳五烯酸 (EPA)**，20:5(Delta 5,8,11,14,17)，以及**二十二碳六烯酸 (DHA)**，22:6(Delta 4,7,10,13,16,19)。**膳食中 omega-6 与 omega-3 的失衡与心血管风险升高相关**：最佳的 omega-6 : omega-3 膳食比例在 **1:1 到 4:1** 之间，而多数北美人的饮食接近 **10:1 到 30:1**。与较低心血管风险相关的地中海饮食，从绿叶蔬菜和鱼油中获得更多 omega-3 PUFA —— 不过书里也诚实地补了一句：鱼油补充剂在预防心血管疾病中的确切作用**仍有争议**。",
      src: "A p.343"
    },
    {
      link_en: "now back to the chain itself, and the cheapest way to make its hydrophobicity concrete",
      link_cn: "回到碳链本身 —— 让「疏水」这件事变具体，最便宜的办法是下面这个",
      en: "The physical properties of a fatty acid are set by the **length** of its hydrocarbon chain and its **degree of unsaturation**, and the nonpolar chain is why it barely dissolves in water. **Lauric acid, 12:0, molecular mass 200, dissolves in water to 0.063 mg/g. Glucose, molecular mass 180, dissolves to 1,100 mg/g.** Nearly the same mass, four orders of magnitude apart. The rule behind that is visible straight down one column of Table 10-1: **the longer the chain and the fewer the double bonds, the lower the water solubility** — at 30 °C, 12:0 gives 0.063 mg/g, 14:0 gives 0.024, 16:0 gives 0.0083, 18:0 gives 0.0034. The benzene column in that same table runs the other way, from 2,600 down to 124 mg/g, **and that reversal is the working fact behind every lipid extraction: lipids leave the tissue and go into an organic solvent.** What little water solubility a short fatty acid has comes from its carboxylic acid group, which is polar and ionised at neutral pH.",
      cn: "一个脂肪酸的物理性质由碳氢链的**长度**和**不饱和程度**决定，而这条非极性的链正是它几乎不溶于水的原因。**月桂酸，12:0，分子量 200，在水中的溶解度是 0.063 mg/g；葡萄糖，分子量 180，溶解度是 1,100 mg/g。** 分子量几乎一样，溶解度差四个数量级。背后的规律沿着 Table 10-1 的一列一眼看得见：**链越长、双键越少，水溶性越低** —— 30 °C 下，12:0 是 0.063 mg/g，14:0 是 0.024，16:0 是 0.0083，18:0 是 0.0034。同一张表里苯溶解度那一列走向相反，从 2,600 一路降到 124 mg/g，**而这个反向正是一切脂类抽提操作的立足点：脂类会离开组织、跑进有机溶剂。** 短链脂肪酸那一点点水溶性来自它的羧基 —— 羧基是极性的，在中性 pH 下带电离解。",
      src: "A p.343, Table 10-1",
      see: [{ id: "L-10-4-1", en: "extracting and separating lipids in practice", cn: "脂类的抽提与分离的实际做法" }]
    },
    {
      link_en: "and now the claim in this chapter that repays being drawn rather than memorised",
      link_cn: "接下来是本章里最值得「画出来」而不是「背下来」的那一条",
      recall_en: "same two variables as the solubility step just above — chain length and unsaturation — acting on a different property",
      recall_cn: "和上一步溶解度用的是同样两个变量 —— 链长与不饱和度 —— 只是作用在另一个性质上",
      en: "At room temperature the saturated fatty acids from 12:0 to 24:0 are waxy solids while unsaturated ones of the same length are oily liquids, and “this difference in melting points is due to different degrees of packing of the fatty acid molecules.” **Take it in two halves. In a fully saturated chain there is free rotation about every carbon-carbon bond, so the most stable shape is the fully extended one, in which neighbouring atoms get in each other's way least; extended chains stack side by side into nearly crystalline arrays, in van der Waals contact — the weak attraction between atoms lying close together — along their whole length. A cis double bond is the one bond in the chain that cannot rotate, and it forces a permanent kink; a kinked chain cannot lie flat against its neighbour, so the array is poorly ordered and the attractions holding it together are weaker. Less thermal energy is then enough to disorder it, which is to say the melting point is lower.** Table 10-1 turns that into numbers at one chain length: **stearic 18:0 melts at 69.6 °C, oleic 18:1(Delta 9) at 13.4, linoleic 18:2 at −5, alpha-linolenic 18:3 at −11**, and arachidonic 20:4, with four kinks, at **−49.5**. The saturated series shows chain length acting on its own: 12:0 at 44.2, 14:0 at 53.9, 16:0 at 63.1, 18:0 at 69.6, 20:0 at 76.5, 24:0 at 86.0. **Same carbons, different kinks, an eighty-degree spread.**",
      cn: "室温下，从 12:0 到 24:0 的饱和脂肪酸是蜡状固体，而同样长度的不饱和脂肪酸是油状液体，“**熔点上的这个差别，源自脂肪酸分子堆积程度的不同**”。**分两半来看。在完全饱和的链里，每一根碳碳单键都能自由旋转，所以最稳定的形状是完全伸展的那一种 —— 在这个形状下相邻原子彼此妨碍最小；伸展的链并排叠成近乎晶体的阵列，沿着整条链的长度处在范德华接触（靠得很近的原子之间的弱吸引）之中。而顺式双键是链上唯一不能旋转的那根键，它强行制造一个永久的弯折；弯折的链没法平贴在邻居身上，于是阵列排得很差，维系它的吸引力也更弱。这时只要更少的热能就足以把它打乱 —— 换句话说，熔点更低。** Table 10-1 把这件事在同一个链长上变成数字：**硬脂酸 18:0 熔点 69.6 °C，油酸 18:1(Delta 9) 是 13.4，亚油酸 18:2 是 −5，α-亚麻酸 18:3 是 −11**，而带四个弯折的花生四烯酸 20:4 是 **−49.5**。饱和系列则单独展示链长的作用：12:0 是 44.2，14:0 是 53.9，16:0 是 63.1，18:0 是 69.6，20:0 是 76.5，24:0 是 86.0。**同样的碳数，不同的弯折，拉开八十度。**",
      src: "A p.342–343, figure 10-1 and Table 10-1"
    },
    {
      link_en: "a chain that will not dissolve still has to get from one tissue to another",
      link_cn: "一条不肯溶于水的链，仍然得从一个组织运到另一个组织",
      en: "There are **two** transport modes in vertebrate blood and they carry **different chemical species**. A **free fatty acid** — one whose carboxylate group is unesterified and therefore charged — circulates bound noncovalently to a carrier protein such as **serum albumin**. But most of the fatty acid in blood plasma is present as an ester or an amide; lacking that charged carboxylate, such derivatives are even less water-soluble than the free acid, and they travel as **lipoprotein particles**, which are aggregates of lipid with protein. **Albumin carries the free acid; lipoproteins carry the esterified forms.**",
      cn: "脊椎动物血液里有**两种**运输方式，而它们运的是**不同的化学物种**。**游离脂肪酸 (free fatty acid)** —— 羧基未被酯化、因而带电的那种 —— 以非共价结合的方式挂在载体蛋白上循环，例如**血清白蛋白 (serum albumin)**。但血浆里的脂肪酸大多以酯或酰胺的形式存在；这些衍生物没有那个带电的羧基，比游离酸**更不溶于水**，它们以**脂蛋白颗粒 (lipoprotein particle)** 的形式运输 —— 脂蛋白颗粒是脂类与蛋白的聚集体。**白蛋白运游离酸，脂蛋白运酯化形式。**",
      src: "A p.344"
    },
    {
      link_en: "and the storage form is the esterified one, three at a time",
      link_cn: "而储存形式正是那种酯化形式 —— 一次三个",
      en: "A **triacylglycerol** — also called a triglyceride, a fat, or a neutral fat — is **three fatty acids in ester linkage with one glycerol**. One carrying the same fatty acid in all three positions is a **simple** triacylglycerol and is named after that acid: the simple triacylglycerols of 16:0, 18:0 and 18:1 are **tripalmitin, tristearin and triolein**. Most natural ones are **mixed**, carrying two or three different acids, and naming those requires the **position** of each — for example 1-stearoyl, 2-linoleoyl, 3-palmitoyl glycerol. **Why it counts as neutral: glycerol's polar hydroxyls and the fatty acids' polar carboxylates are all consumed in making the ester linkages, so nothing polar is left, and the molecule is nonpolar, hydrophobic and essentially insoluble in water.** Lipids also have a lower specific gravity than water, which is why oil floats on vinegar. One stereochemical detail to carry forward: **when C-1 and C-3 of the glycerol carry different fatty acids, C-2 becomes a chiral centre.**",
      cn: "**三酰甘油 (triacylglycerol)** —— 也叫甘油三酯、脂肪或中性脂 —— 是**三个脂肪酸以酯键连在一个甘油上**。三个位置上是同一种脂肪酸的叫**简单**三酰甘油，并以那种酸命名：16:0、18:0、18:1 的简单三酰甘油分别是 **tripalmitin（三棕榈酸甘油酯）、tristearin（三硬脂酸甘油酯）、triolein（三油酸甘油酯）**。天然的绝大多数是**混合**三酰甘油，带两种或三种不同的酸，给它们命名必须标出每一个的**位置** —— 例如 1-硬脂酰-2-亚油酰-3-棕榈酰甘油。**它为什么算「中性」：甘油的极性羟基和脂肪酸的极性羧基，全部在生成酯键时被消耗掉了，于是没有任何极性基团剩下，整个分子非极性、疏水、基本不溶于水。** 脂类的比重也比水小，这就是油会浮在醋上面的原因。有一个立体化学细节要带到下一节去：**当甘油的 C-1 和 C-3 带着不同的脂肪酸时，C-2 就成了一个手性中心。**",
      src: "A p.344, figure 10-2",
      see: [{ id: "L-10-2-1", en: "why glycerol then has to be numbered stereospecifically", cn: "由此为什么甘油必须用立体专一的方式编号" }]
    },
    {
      link_en: "and here is why an animal stores fuel as fat instead of as sugar — two separate reasons, usually collapsed into one",
      link_cn: "接下来是「动物为什么把燃料存成脂肪而不是糖」—— 两个各自独立的理由，人们常把它们并成一个",
      en: "The book states them as two. **First, the chemistry: the carbon atoms of a fatty acid are more reduced than those of a sugar, so oxidising a gram of triacylglycerol yields more than twice the energy of oxidising a gram of carbohydrate.** **Second, the physics, and this is the half people forget: a triacylglycerol is hydrophobic and therefore unhydrated, while stored polysaccharide carries 2 g of water per gram and the organism has to carry that water too.** Multiply the two and the difference in depot size is enormous — moderately obese people carrying 15 to 20 kg of triacylglycerol in their fat cells could meet their energy needs for **months** from it, whereas “the human body can store less than a day's energy supply in the form of glycogen.” The comparison is closed honestly: glucose has real advantages as a quick source of energy, one of them being its ready solubility in water — **which is the very solubility that makes it heavy to store**. In humans the depots sit under the skin, in the abdominal cavity and in the mammary glands. In most eukaryotic cells triacylglycerols form a separate phase of microscopic oily droplets in the watery cytosol; in vertebrates the **adipocyte**, a cell specialised for storing fat, holds one droplet so large that it squeezes the nucleus flat against the plasma membrane, and plant seeds store the same fuel in **oil bodies**.",
      cn: "书里把它们**当成两条**来讲。**第一条是化学：脂肪酸的碳原子比糖的碳原子更还原，所以氧化一克三酰甘油放出的能量，是氧化一克碳水化合物的两倍以上。** **第二条是物理，也正是大家会忘掉的那一半：三酰甘油疏水，因而不带水合水；而储存的多糖每一克要带着 2 克水，生物体连这些水也得一起背着。** 两条相乘，储备量的差别就极其巨大 —— 一个中度肥胖的人，脂肪细胞里存着 15 到 20 kg 三酰甘油，靠它可以支撑**好几个月**的能量需求；而“**人体以糖原形式储存的能量还不够一天用**”。这个比较收尾收得诚实：葡萄糖作为**快速**能源有实实在在的优势，其中之一就是它易溶于水 —— **而正是这份易溶，让它存起来很沉**。人体的脂肪库位于皮下、腹腔和乳腺。在大多数真核细胞里，三酰甘油在含水的胞质中形成一个独立的相 —— 显微镜下的油滴；脊椎动物里专门储脂的细胞叫**脂肪细胞 (adipocyte)**，它的油滴大到把细胞核挤扁贴在质膜上；植物种子则把同样的燃料存在**油体 (oil body)** 里。",
      src: "A p.345, figure 10-3"
    },
    {
      link_en: "stored fuel has to be got out again, and the same depot does a second job",
      link_cn: "存起来的燃料还得取得出来 —— 而同一个脂肪库还兼着第二份工",
      en: "Adipocytes and germinating seeds contain **lipases**, enzymes that hydrolyse stored triacylglycerols and release the fatty acids for export to wherever they are needed as fuel. The second job is **insulation**: triacylglycerol stored under the skin insulates against cold, which is why seals, walruses, penguins and other warm-blooded polar animals are amply padded with it. **In a hibernating animal such as a bear the same reserve does both at once — the fat laid down before hibernation is the fuel and the blanket.**",
      cn: "脂肪细胞和正在萌发的种子里含有**脂肪酶 (lipase)** —— 水解储存的三酰甘油、把脂肪酸释放出来运到需要燃料之处的酶。第二份工是**保温**：皮下储存的三酰甘油隔绝寒冷，所以海豹、海象、企鹅这些温血极地动物身上都厚厚地垫着它。**在熊这类冬眠动物身上，同一份储备同时干两件事 —— 冬眠前积下的脂肪既是燃料，也是被子。**",
      src: "A p.345"
    },
    {
      link_en: "and one causal chain runs from the kink all the way into your kitchen",
      link_cn: "而有一条因果链，从那个弯折一直通到你的厨房",
      recall_en: "the kink is the one from the packing step, doing the same work inside a food instead of inside a pure acid",
      recall_cn: "这里的弯折就是堆积那一步里的弯折，只是它现在作用在食物里，而不是在纯脂肪酸里",
      en: "Natural fats are mixtures of simple and mixed triacylglycerols whose fatty acids differ in length and saturation, and the composition of the mixture sets the consistency: **at 25 °C olive oil, rich in unsaturated C16 and C18 acids, is liquid; butter, with more saturated C16 and C18, is a soft solid; beef fat, more saturated still, is hard.** Leave a lipid-rich food exposed to the oxygen of the air too long and it goes **rancid**; the smell and taste come from “the oxidative cleavage of double bonds in unsaturated fatty acids,” which produces aldehydes and carboxylic acids of shorter chain length and therefore higher volatility — **the fragments are light enough to reach your nose, and that is what you are smelling.** So the cis double bond is at once what keeps an oil liquid and what lets it spoil. **Partial hydrogenation attacks exactly that: it converts many cis double bonds to single bonds, which raises the melting temperature so the oil is more nearly solid at room temperature — this is how margarine is made from vegetable oil — and it leaves the oil more stable at deep-frying temperatures.**",
      cn: "天然脂肪是简单与混合三酰甘油的混合物，其中脂肪酸的长度与饱和度各不相同，而混合物的组成决定了稠度：**25 °C 下，富含不饱和 C16、C18 酸的橄榄油是液体；饱和 C16、C18 更多的黄油是软固体；饱和度更高的牛脂则是硬的。** 富含脂类的食物在空气中的氧里放久了会**酸败 (rancid)**，那股气味和味道来自“**不饱和脂肪酸双键的氧化断裂**” —— 它产生链更短、因而挥发性更高的醛和羧酸，**这些碎片轻到能飘进你的鼻子，你闻到的就是它们。** 所以顺式双键**既是**让油保持液态的东西，**也是**让它变质的东西。**部分氢化针对的正是这一点：它把许多顺式双键变成单键，于是熔点升高、油在室温下更接近固体 —— 人造黄油就是这样从植物油做出来的 —— 并且油在油炸温度下更稳定。**",
      src: "A p.345, figure 10-4"
    },
    {
      link_en: "and the same process has a side effect nobody wanted",
      link_cn: "而同一个工艺有一个没人想要的副作用",
      en: "Partial hydrogenation “has another, undesirable, effect: some cis double bonds are converted to **trans** double bonds.” Dietary **trans fatty acids** shift the blood lipid profile three ways at once: they **raise** triacylglycerols, **raise** LDL — low-density lipoprotein, the particle called “bad” cholesterol — and **lower** HDL, high-density lipoprotein, the “good” one. Those three changes alone are enough to increase the risk of coronary heart disease, and a fourth and less certain effect is added: trans fatty acids appear to increase the body's inflammatory response, itself a risk factor. Regulators around the world now limit or ban them in prepared and packaged foods. **One nuance that pre-empts a trick question: trans fats are also natural. Natural unsaturated fatty acids are overwhelmingly cis, and the named exception is “the trans fatty acids produced by fermentation in the rumen of dairy animals,” which people then eat in dairy products and meat.**",
      cn: "部分氢化“**还有另一个不受欢迎的效果：一部分顺式双键被转变成反式 (trans) 双键**”。膳食中的**反式脂肪酸 (trans fatty acid)** 会同时把血脂谱往三个方向推：**升高**三酰甘油，**升高** LDL（低密度脂蛋白，被称作「坏」胆固醇的那种颗粒），**降低** HDL（高密度脂蛋白，即「好」的那种）。仅这三项变化就足以增加冠心病风险；书里还加了第四个、把握较小的效应：反式脂肪酸似乎会增强身体的**炎症反应**，而炎症反应本身也是一个危险因素。如今世界各地的监管机构都在限制或禁止预制与包装食品中使用它们。**有一个细节能提前挡掉陷阱题：反式脂肪也有天然来源。天然的不饱和脂肪酸压倒性地是顺式，而书里点名的例外是“乳畜瘤胃中发酵产生的反式脂肪酸”，人再从乳制品和肉里把它们吃进去。**",
      src: "A p.345, and A p.342 for the rumen exception"
    },
    {
      link_en: "one more storage lipid, and it sits here rather than with the membrane lipids for a reason",
      link_cn: "还有一类储存脂类 —— 它被放在这里而不是和膜脂放在一起，是有原因的",
      en: "A **wax** is an ester of a long-chain fatty acid (**C14 to C36**, saturated or unsaturated) with a long-chain **alcohol** (**C16 to C30**), and waxes melt at **60 to 100 °C**, higher than triacylglycerols do. Beeswax is triacontanoyl palmitate — palmitic acid esterified to the C30 alcohol triacontanol, the compound also known as myricyl alcohol. **The reason waxes belong in a chain about stored fuel: “In plankton, the free-floating microorganisms at the bottom of the food chain for marine animals, waxes are the chief storage form of metabolic fuel.”** Their second role is water repellence, and it follows from the same insolubility: skin glands in vertebrates secrete waxes that keep hair and skin pliable, lubricated and waterproof; waterfowl spread wax from their preen glands to keep feathers water-repellent; and the shiny leaves of holly, rhododendron, poison ivy and many tropical plants carry a thick wax layer that stops water evaporating and keeps parasites out. The same properties are why lanolin from lamb's wool, beeswax, carnauba wax from a Brazilian palm and jojoba wax end up in lotions, ointments and polishes.",
      cn: "**蜡 (wax)** 是**长链脂肪酸**（**C14 到 C36**，饱和或不饱和）与**长链醇**（**C16 到 C30**）形成的酯，熔点 **60 到 100 °C**，比三酰甘油高。蜂蜡是三十烷酰棕榈酸酯 —— 棕榈酸与 C30 的醇三十烷醇 (triacontanol) 酯化而成，这个醇也叫**蜂花醇 (myricyl alcohol)**。**蜡之所以属于这条「储存燃料」的线：“在浮游生物 —— 海洋动物食物链底端那些自由漂浮的微生物 —— 中，蜡是代谢燃料的主要储存形式。”** 它的第二个角色是**防水**，而这同样出自它的不溶性：脊椎动物的皮肤腺分泌蜡，使毛发与皮肤柔韧、润滑、防水；水禽从尾脂腺取蜡涂抹羽毛，使羽毛不沾水；冬青、杜鹃、毒漆藤和许多热带植物那些油亮的叶子上覆着一层厚蜡，既阻止水分蒸发，也挡住寄生物。正是这些性质，让羊毛脂、蜂蜡、来自巴西棕榈的巴西棕榈蜡和荷荷巴蜡进了乳液、软膏和上光剂。",
      src: "A p.346, figure 10-5"
    }
  ],
  terms: [
    { en: "fatty acid", cn: "脂肪酸",
      def_en: "A carboxylic acid carrying a hydrocarbon chain of 4 to 36 carbons. The most abundant have an even number of carbons in an unbranched chain of 12 to 24, because the chain is assembled two carbons at a time from acetyl units.",
      def_cn: "带一条 4 到 36 个碳的碳氢链的羧酸。最常见的那些在 12 到 24 个碳的不分支链上都是偶数个碳，因为链是由乙酰单元一次两个碳地拼起来的。" },
    { en: "chain-length shorthand with Delta positions", cn: "「链长 : 双键数」简写与 Delta 编号",
      def_en: "Chain length and number of double bonds separated by a colon. Positions are counted from the carboxyl carbon as C-1 and written as a superscript on Delta, naming the lower-numbered carbon of the pair: oleic acid is 18:1(Delta 9).",
      def_cn: "碳链长度与双键数目之间用冒号隔开。位置从羧基碳 C-1 数起，写作 Delta 的上标，并取所连两碳中编号较小的那个：油酸是 18:1(Delta 9)。" },
    { en: "omega numbering", cn: "omega 编号",
      def_en: "A second count that starts at the methyl carbon, the end furthest from the carboxyl group, and calls it 1. It exists because a polyunsaturated fatty acid's physiological role tracks how near its first double bond lies to the methyl end. First double bond at C-3 of that count makes an omega-3, at C-6 an omega-6.",
      def_cn: "第二套编号，从离羧基最远的甲基碳数起，把它记为 1。它之所以存在，是因为多不饱和脂肪酸的生理作用取决于第一个双键离甲基端有多近。在这套编号里第一个双键在 C-3 就是 omega-3，在 C-6 就是 omega-6。" },
    { en: "polyunsaturated fatty acid", cn: "多不饱和脂肪酸 (PUFA)",
      def_en: "One with more than a single double bond. Its double bonds are almost never conjugated: a CH2 group separates them. Humans cannot make alpha-linolenic acid, 18:3, and must eat it, then convert it to EPA and DHA.",
      def_cn: "含一个以上双键的脂肪酸。它的双键几乎从不共轭，彼此之间隔着一个 CH2。人不能自己合成 α-亚麻酸 18:3，必须从食物摄取，再把它转化成 EPA 和 DHA。" },
    { en: "chain packing", cn: "碳链堆积",
      def_en: "The mechanism behind every melting point in this node. A saturated chain rotates freely about each carbon-carbon bond, so it settles fully extended and stacks into a nearly crystalline array in van der Waals contact along its whole length. A cis double bond cannot rotate and forces a kink; kinked chains stack poorly, attract each other weakly, and need less heat to disorder — hence a lower melting point.",
      def_cn: "本节中每一个熔点背后的机制。饱和链的每根碳碳键都能自由旋转，于是它停在完全伸展的形状上，并叠成近乎晶体的阵列，沿整条链处于范德华接触之中。顺式双键不能旋转，强行制造一个弯折；弯折的链叠得差、彼此吸引弱、需要更少的热就被打乱 —— 熔点因此更低。" },
    { en: "triacylglycerol", cn: "三酰甘油",
      def_en: "Three fatty acids in ester linkage with one glycerol. Counts as a neutral fat because every polar group of both halves is consumed in making those ester bonds, leaving a nonpolar, hydrophobic molecule that will not dissolve in water and floats on it.",
      def_cn: "三个脂肪酸以酯键连在一个甘油上。它算「中性脂」，是因为两边所有的极性基团都在生成这些酯键时被消耗掉了，剩下一个非极性、疏水的分子，不溶于水并且浮在水面上。" },
    { en: "simple versus mixed triacylglycerol", cn: "简单三酰甘油与混合三酰甘油",
      def_en: "Simple ones carry the same fatty acid in all three positions and take its name — tripalmitin, tristearin, triolein. Mixed ones carry two or three different acids and must be named with the position of each. Most naturally occurring fats are mixed.",
      def_cn: "简单的那种三个位置上是同一种脂肪酸，并以它命名 —— 三棕榈酸甘油酯、三硬脂酸甘油酯、三油酸甘油酯。混合的那种带两种或三种不同的酸，命名时必须标出每一个的位置。天然脂肪绝大多数是混合的。" },
    { en: "water of hydration", cn: "水合水",
      def_en: "The water a stored polysaccharide carries with it, 2 g per gram, and which fat does not carry at all. This is the second, physical reason fat outperforms glycogen as a store, separate from the chemical reason that fatty-acid carbons are more reduced. Give both, never one.",
      def_cn: "储存的多糖必须随身携带的水，每克多糖 2 克水；而脂肪根本不带。这是脂肪在储存上胜过糖原的第二个、物理的理由，与「脂肪酸的碳更还原」这个化学理由各自独立。两个都要说，不能只说一个。" },
    { en: "adipocyte", cn: "脂肪细胞",
      def_en: "The vertebrate cell specialised for storing fat. Its single droplet of triacylglycerol grows so large that it squeezes the nucleus flat against the plasma membrane. Plant seeds store the same fuel in oil bodies instead.",
      def_cn: "脊椎动物中专门储存脂肪的细胞。它那一个三酰甘油油滴大到把细胞核挤扁贴在质膜上。植物种子则把同样的燃料存在油体里。" },
    { en: "rancidity", cn: "酸败",
      def_en: "Oxidative cleavage of the double bonds of unsaturated fatty acids by the oxygen of the air, giving aldehydes and carboxylic acids of shorter chain and therefore higher volatility — which is why spoilage can be smelled. The very double bond that keeps an oil liquid is the one that lets it spoil.",
      def_cn: "空气中的氧对不饱和脂肪酸双键的氧化断裂，产生链更短、因而挥发性更高的醛和羧酸 —— 所以变质是闻得出来的。让油保持液态的那个双键，正是让它变质的那个双键。" },
    { en: "trans fatty acid", cn: "反式脂肪酸",
      def_en: "Made industrially as a side effect of partial hydrogenation, and naturally by fermentation in the rumen of dairy animals. In the diet these raise blood triacylglycerols and LDL, lower HDL, and appear to raise the inflammatory response; regulators now limit or ban them in packaged food.",
      def_cn: "工业上作为部分氢化的副产物产生，天然则由乳畜瘤胃中的发酵产生。膳食中的它们升高血中三酰甘油和 LDL、降低 HDL，并似乎增强炎症反应；如今各国监管机构限制或禁止它们出现在包装食品中。" },
    { en: "wax", cn: "蜡",
      def_en: "An ester of a long-chain (C14 to C36) fatty acid with a long-chain (C16 to C30) alcohol, melting at 60 to 100 °C. Beeswax is palmitic acid esterified to the C30 alcohol triacontanol. In plankton it is the chief storage form of metabolic fuel, which is why it belongs with the storage lipids; on land it is a water repellent.",
      def_cn: "长链（C14 到 C36）脂肪酸与长链（C16 到 C30）醇形成的酯，熔点 60 到 100 °C。蜂蜡是棕榈酸与 C30 的醇三十烷醇酯化而成。在浮游生物中它是代谢燃料的主要储存形式 —— 这正是它归入储存脂类的原因；在陆地上它是防水层。" }
  ]
};

/* ================================================================ L-10-2-1 ===
   The thread: a membrane lipid is a polar head on two nonpolar tails, so the
   head decides charge, recognition and disease, while the tails and the bond
   that attaches them decide what environment the membrane can survive. */
window.BIOLITE_SPINE["L-10-2-1"] = {
  assumed: [
    "membrane", "lipid", "water", "glycerol", "fatty acid", "ester", "ether",
    "phosphate", "sugar", "galactose", "glucose", "oligosaccharide", "charge",
    "hydrolysis", "enzyme", "cell", "protein", "antibody", "mitochondrion",
    "chloroplast", "lysosome", "plasma membrane", "amino group", "hydroxyl",
    "double bond", "stereochemistry", "mutation", "gene", "neuron", "bacteria",
    "eukaryote", "triacylglycerol", "diacylglycerol", "cholesterol", "sterol",
    "phospholipid", "amphipathic", "hydrophobic", "hydrophilic"
  ],
  nodeTitle_en: "Structural lipids in membranes",
  nodeTitle_cn: "膜中的结构脂类",
  title_en: "One polar head on two nonpolar tails: the head decides charge, recognition and disease, the tails decide what the membrane can survive",
  title_cn: "两条非极性尾巴顶着一个极性头：头决定电荷、识别与疾病，尾巴决定这张膜能扛住什么",
  steps: [
    {
      en: "Start with what a membrane is for. “The central architectural feature of biological membranes is a double layer of lipids, which acts as a barrier to the passage of polar molecules and ions.” Membrane lipids are **amphipathic**: one end of the molecule is hydrophobic, the other hydrophilic. **That double layer assembles itself** — “the association of their hydrophobic regions with each other and their hydrophilic interactions with water direct their packing into sheets called membrane bilayers.” **The same two forces that pull an oil droplet round are what hold a cell membrane together.** Four general kinds of lipid build one: **phospholipids**, whose hydrophobic part is two fatty acids joined to glycerol or to sphingosine; **glycolipids**, which carry a simple sugar or a complex oligosaccharide at the polar end; **archaeal tetraether lipids**, with two very long alkyl chains ether-linked to a glycerol at **both** ends; and **sterols**, built round a rigid system of four fused hydrocarbon rings. Within each kind the huge variety comes from combining different tails with different heads.",
      cn: "先说膜是干什么的。“**生物膜的核心构造特征是一个脂类双层，它充当极性分子和离子通过的屏障。**”膜脂是**两亲性 (amphipathic)** 的：分子的一头疏水，另一头亲水。**这个双层是自己组装起来的** —— “**它们疏水区之间的相互结合，以及亲水区与水之间的相互作用，把它们排布成称为膜双层的片层。**” **把油滴拉成圆形的那两种力，就是把细胞膜维系住的力。** 有四类脂构成膜：**磷脂 (phospholipid)**，其疏水部分是两个脂肪酸连在甘油或鞘氨醇上；**糖脂 (glycolipid)**，极性端带一个简单糖或一段复杂寡糖；**古菌四醚脂 (archaeal tetraether lipid)**，两条很长的烷基链在**两端**都以醚键连在甘油上；以及**固醇 (sterol)**，围绕一套刚性的四并环烃体系搭起来。每一类内部巨大的多样性，都来自不同尾巴与不同头的组合。",
      src: "A p.346, §10.2, figure 10-6"
    },
    {
      link_en: "take the commonest kind apart first",
      link_cn: "先把最常见的那一类拆开看",
      en: "A **glycerophospholipid**, also called a phosphoglyceride, has **two fatty acids in ester linkage to C-1 and C-2 of a glycerol, and a highly polar or charged group attached to C-3 through a phosphodiester linkage** — a phosphate esterified on both sides, once to the glycerol and once to the head-group alcohol. Strip the head-group alcohol away and what is left, glycerol with two acyl chains and a bare phosphate, is **phosphatidic acid**; every glycerophospholipid is that compound with something different hung on the phosphate.",
      cn: "**甘油磷脂 (glycerophospholipid)**，也叫磷酸甘油酯，其结构是：**两个脂肪酸以酯键连在甘油的 C-1 和 C-2 上，一个高极性或带电的基团通过磷酸二酯键连在 C-3 上** —— 磷酸二酯键就是磷酸两侧都被酯化，一侧接甘油，一侧接头部的醇。把头部的醇拿掉，剩下的「甘油＋两条酰基链＋一个裸露的磷酸」就是**磷脂酸 (phosphatidic acid)**；每一个甘油磷脂都是这个化合物在磷酸上挂了不同的东西。",
      src: "A p.346"
    },
    {
      link_en: "and before any of them can be named, the backbone has a stereochemical problem",
      link_cn: "而在给它们任何一个命名之前，骨架本身有一个立体化学上的麻烦",
      en: "**Glycerol is prochiral: it has a plane of symmetry through C-2 and therefore no asymmetric carbon, yet “attachment of phosphate at one end converts it into a chiral compound.”** Read that literally. Free glycerol's two terminal -CH2OH groups are interchangeable, so the molecule is not chiral; the moment a phosphate distinguishes one of them, they stop being interchangeable and the molecule has a handedness. **Why any of this matters: the chain at C-1 and the chain at C-2 do different jobs, so a name that does not fix which end is which does not identify the molecule.** The convention that fixes it is the **sn**, or **stereospecific numbering**, system, “in which C-1 is, by definition, the group of the prochiral compound that occupies the pro-S position,” with C-2 then in the R configuration. The backbone of most lipids is **sn-glycerol 3-phosphate** — which is the very same molecule as **L-glycerol 3-phosphate** and as **D-glycerol 1-phosphate**. **Three names, one compound.** In archaea the glycerol has the other configuration.",
      cn: "**甘油是前手性 (prochiral) 的：它有一个穿过 C-2 的对称面，因此没有不对称碳；然而“在一端接上磷酸，就把它变成了一个手性化合物”。** 这句话要照字面读。游离甘油两端的 -CH2OH 是可互换的，所以分子不手性；而一旦有一个磷酸把其中一个区分开来，它们就不再可互换，分子于是有了左右之分。**这一切之所以重要：C-1 上的链和 C-2 上的链干的是不同的活，所以一个不指明「哪头是哪头」的名字，根本没有确定这个分子。** 把它钉死的约定就是 **sn（stereospecific numbering，立体专一编号）**系统，“**其中 C-1 按定义就是这个前手性化合物中占据 pro-S 位置的那个基团**”，此时 C-2 为 R 构型。大多数脂类的骨架是 **sn-甘油 3-磷酸** —— 而它与 **L-甘油 3-磷酸**、与 **D-甘油 1-磷酸**是**同一个分子**。**三个名字，一个化合物。** 在古菌里，甘油取的是另一种构型。",
      src: "A p.346–347, figure 10-7"
    },
    {
      link_en: "with the backbone pinned down, the head group is the only variable left — and it is the one that carries charge",
      link_cn: "骨架钉住之后，剩下的唯一变量就是头部基团 —— 而电荷正是由它带来的",
      en: "In every glycerophospholipid the phosphate of that phosphodiester bond — the doubly esterified phosphate named one step up — **is negatively charged at neutral pH**. The alcohol sitting on top of it may itself be negatively charged, neutral, or positively charged: negative in phosphatidylinositol 4,5-bisphosphate, neutral in phosphatidylserine, positive in phosphatidylcholine and in phosphatidylethanolamine. So the whole molecule's net charge at pH 7 is a sum, and the sums are worth having: **phosphatidic acid −2, phosphatidylethanolamine 0, phosphatidylcholine 0, phosphatidylserine −1, phosphatidylglycerol −1, phosphatidylinositol 4,5-bisphosphate −4, cardiolipin −2.** Two of those look odd until you read the footnote: a phosphate **ester** carries about −1.5, because one of its -OH groups is only partly ionised at pH 7. **What the list is for: phosphatidylcholine and phosphatidylethanolamine, being neutral, are the bulk material of a membrane, while phosphatidylinositol 4,5-bisphosphate at −4 is charged enough to be picked out electrostatically — which is exactly why that one is a signalling molecule rather than a brick.** These charges contribute greatly to the surface properties of a membrane.",
      cn: "在每一个甘油磷脂里，磷酸二酯键上的磷酸在中性 pH 下都**带一个负电荷**。压在它上面的那个醇本身可能带负电（如 4,5-二磷酸磷脂酰肌醇）、中性（如磷脂酰丝氨酸），也可能带正电（如磷脂酰胆碱和磷脂酰乙醇胺）。所以整个分子在 pH 7 的净电荷是个加总，而这些加总值值得记住：**磷脂酸 −2，磷脂酰乙醇胺 0，磷脂酰胆碱 0，磷脂酰丝氨酸 −1，磷脂酰甘油 −1，4,5-二磷酸磷脂酰肌醇 −4，心磷脂 −2。** 其中两个看着奇怪，直到你读到脚注：磷酸**酯**大约带 −1.5，因为它的一个 -OH 在 pH 7 下只部分电离。**这张表有什么用：磷脂酰胆碱和磷脂酰乙醇胺是中性的，是膜的「大宗建材」；而 4,5-二磷酸磷脂酰肌醇带 −4，电荷强到可以被静电方式挑出来 —— 这正是它成为信号分子而不是砖块的原因。** 这些电荷极大地影响膜的表面性质。",
      src: "A p.347–348, figure 10-8",
      see: [
        { id: "L-10-3-1", en: "the phosphatidylinositols working as signals", cn: "磷脂酰肌醇作为信号分子的工作方式" },
        { id: "L-11-3-1", en: "what a charged membrane surface does to transport", cn: "带电的膜表面对物质转运意味着什么" }
      ]
    },
    {
      link_en: "the tails vary too, and here the book says outright that it does not know why",
      link_cn: "尾巴也在变，而在这件事上书里直说自己不知道原因",
      en: "Because the two fatty acids can be almost any of a wide variety, one named phospholipid — phosphatidylcholine, say — is really several **molecular species**, each with its own pair of chains; the distribution of those species is specific to the organism, to the tissue, and even to the particular glycerophospholipid within one cell. There is one general rule to hold: **a glycerophospholipid usually carries a C16 or C18 saturated fatty acid at C-1 and a C18 or C20 unsaturated one at C-2.**",
      cn: "由于那两个脂肪酸几乎可以是各种各样中的任何一种，一个有名有姓的磷脂 —— 比如磷脂酰胆碱 —— 实际上是好几个**分子种 (molecular species)**，各自带着自己的一对链；这些分子种的分布因生物体、因组织、甚至因同一细胞内的不同甘油磷脂而异。有一条总规律要记住：**甘油磷脂通常在 C-1 上带一个 C16 或 C18 的饱和脂肪酸，在 C-2 上带一个 C18 或 C20 的不饱和脂肪酸。**",
      src: "A p.347",
      openQuestion_en: "“With few exceptions, the biological significance of the variation in fatty acids and head groups is not yet understood.” That sentence is the honest answer if you are asked why a cell makes so many nearly identical lipids.",
      openQuestion_cn: "“**除少数例外，脂肪酸与头部基团的这种变化在生物学上的意义尚不清楚。**” 如果被问到「细胞为什么要造这么多几乎一样的脂类」，这句话就是诚实的答案。"
    },
    {
      link_en: "one glycerophospholipid is worth singling out, because where it sits is an argument about where mitochondria came from",
      link_cn: "有一个甘油磷脂值得单拎出来，因为它待的地方本身就是一个关于线粒体来历的论证",
      en: "**Cardiolipin** is “a two-tailed glycerophospholipid in which two phosphatidic acid moieties share the same glycerol as their head group” — one symmetric molecule carrying **four** acyl chains. It is found in most bacterial membranes, and in a eukaryotic cell it sits almost exclusively in the **inner mitochondrial membrane**, where it is also made — “a location consistent with the endosymbiosis hypothesis for the origin of these organelles.” **Take that as evidence rather than decoration: a lipid that bacteria make, that a eukaryote makes only inside its mitochondrion and puts only into that organelle's own inner membrane, is a molecular fingerprint of bacterial ancestry, standing beside the mitochondrial genome and the mitochondrial ribosome.**",
      cn: "**心磷脂 (cardiolipin)** 是“**一种双尾甘油磷脂，其中两个磷脂酸部分共用同一个甘油作为它们的头部基团**” —— 一个对称的分子上带着**四条**酰基链。它存在于大多数细菌的膜里；而在真核细胞中，它几乎只出现在**线粒体内膜**上，也在那里合成 —— “**这个定位与关于这些细胞器起源的内共生假说相符。**” **要把这当成证据，而不是点缀：一个细菌会造、真核细胞只在线粒体内部造、而且只装进线粒体自己内膜的脂类，就是细菌祖先的一枚分子指纹 —— 与线粒体基因组、线粒体核糖体并列。**",
      src: "A p.347"
    },
    {
      link_en: "so far every chain has been attached by an ester. Some are not",
      link_cn: "到目前为止每条链都是用酯键接上去的。有些不是",
      en: "In an **ether lipid** “one of the two acyl chains is attached to glycerol in ether, rather than ester, linkage.” If that ether-linked chain is saturated the lipid is an alkyl ether lipid; if it carries a double bond between C-1 and C-2 it is a **plasmalogen**. The number that makes this memorable: **“Vertebrate heart tissue is uniquely enriched in ether lipids; about half of the heart phospholipids are plasmalogens.”** Membranes of halophilic bacteria, of ciliated protists and of certain invertebrates are also rich in them. **The only functional handle offered is a negative one, and it is the honest one: the phospholipases that chew ester-linked fatty acids off a membrane lipid are esterases, and an ether bond is not an ester — so a plasmalogen is a membrane lipid the ordinary degradative machinery cannot take apart.**",
      cn: "在**醚脂 (ether lipid)** 里，“**两条酰基链中的一条以醚键、而非酯键连在甘油上**”。若这条醚连的链是饱和的，就是烷基醚脂；若它在 C-1 与 C-2 之间带一个双键，就是**缩醛磷脂 (plasmalogen)**。让人记得住的那个数字：**“脊椎动物心肌组织异常富含醚脂；心脏磷脂中约有一半是缩醛磷脂。”** 嗜盐细菌、纤毛原生生物和某些无脊椎动物的膜里也富含它们。**书里给出的唯一一个功能上的抓手是个否定式的，而它也是诚实的那个：把酯连的脂肪酸从膜脂上啃下来的磷脂酶是酯酶，而醚键并非酯键 —— 所以缩醛磷脂是普通降解机器拆不开的那种膜脂。**",
      src: "A p.348",
      openQuestion_en: "“The functional significance of ether lipids in these membranes is unknown.” Resistance to phospholipases is a suggestion, not an established answer.",
      openQuestion_cn: "“**醚脂在这些膜里的功能意义尚不清楚。**” 「抗磷脂酶」只是一个猜想，并非已确立的答案。"
    },
    {
      link_en: "and one ether lipid is not a membrane component at all — its chemistry says so",
      link_cn: "而有一个醚脂根本不是膜的组分 —— 它的化学结构就说明了这一点",
      recall_en: "the C-1 / C-2 asymmetry the sn system exists to describe, now doing real work",
      recall_cn: "sn 系统之所以存在，就是为了描述 C-1 与 C-2 的这种不对称；这里它真正派上了用场",
      en: "**Platelet-activating factor** has a long ether-linked alkyl chain at C-1 of the glycerol, but at C-2 it carries an ester-linked **acetic acid** in place of a fatty acid, “which makes the compound much more water-soluble than most glycerophospholipids and plasmalogens”; its head-group alcohol is choline. **Read the design: replace one of the two long tails with a two-carbon acetyl group and the molecule stops being able to sit in a bilayer and becomes something that travels through water and gets recognised.** What it then does: released from leukocytes called basophils, it triggers platelet aggregation and the release from platelets of the vasoconstrictor serotonin, acts on liver, smooth muscle, heart, uterine and lung tissue, and plays an important part in inflammation and in the allergic response.",
      cn: "**血小板活化因子 (platelet-activating factor)** 在甘油的 C-1 上带一条醚连的长烷基链，而在 C-2 上带的是酯连的**乙酸**，取代了脂肪酸 —— “**这使得该化合物比大多数甘油磷脂和缩醛磷脂水溶性高得多**”；它头部的醇是胆碱。**读一下这个设计：把两条长尾巴中的一条换成一个二碳的乙酰基，分子就再也待不进双层，而变成了一个能在水里跑、能被识别的东西。** 它随后干什么：由称为嗜碱性粒细胞的白细胞释放，引发血小板聚集、并促使血小板释放血管收缩剂 5-羟色胺；它还作用于肝、平滑肌、心脏、子宫和肺组织，并在**炎症和过敏反应**中扮演重要角色。",
      src: "A p.349, figure 10-9",
      see: [{ id: "L-10-3-1", en: "the other lipid signals, and how they compare", cn: "其他脂类信号分子，以及它们之间的比较" }]
    },
    {
      link_en: "a whole kingdom builds its membranes without spending any phosphate at all",
      link_cn: "有一整个界，造膜时根本不花一点磷酸",
      en: "A **galactolipid** is a 1,2-diacylglycerol with **one or two galactose residues** joined by a glycosidic linkage to C-3 — **and no phosphate anywhere in it.** These sit in the thylakoid membranes of chloroplasts, and “they make up 70% to 80% of the total membrane lipids of a vascular plant, and are therefore probably the most abundant membrane lipids in the biosphere.” **The most common membrane lipid on this planet is therefore a sugar lipid.** The explanation offered is ecological: phosphate is often the limiting nutrient for a plant in soil, so “perhaps the evolutionary pressure to conserve phosphate for more critical roles favored plants that made phosphate-free lipids.” Plants also make **sulfolipids**, in which a **sulfonated glucose** residue is joined glycosidically to a diacylglycerol; the sulfonate group carries a negative charge like the phosphate group of a phospholipid. **So the plant has replaced both the neutral head group and the anionic one, and still spent no phosphate.**",
      cn: "**半乳糖脂 (galactolipid)** 是一个 1,2-二酰甘油，在 C-3 上通过糖苷键连着**一个或两个半乳糖残基** —— **整个分子里没有磷酸。** 它们位于叶绿体的类囊体膜中，而“**它们占维管植物全部膜脂的 70% 到 80%，因此很可能是生物圈中含量最丰富的膜脂**”。**换句话说，这颗星球上最常见的膜脂是一种糖脂。** 书里给出的解释是生态学的：土壤中磷酸常常是植物的限制性营养，所以“**也许是「把磷酸省下来用于更关键角色」这一进化压力，让那些能造无磷脂类的植物占了优势**”。植物还造**硫脂 (sulfolipid)**：一个**磺化的葡萄糖**残基以糖苷键连在二酰甘油上；磺酸基带的负电荷与磷脂里磷酸基所带的相当。**于是植物把中性头基和阴离子头基都替换掉了，而依然一点磷酸也没花。**",
      src: "A p.349, figure 10-10"
    },
    {
      link_en: "the second environmental adaptation, and it changes three things at once",
      link_cn: "第二个环境适应，而它一次改了三样东西",
      recall_en: "one of the three is the ether bond from the plasmalogen step, used here for what it is actually good at",
      recall_cn: "三样里有一样正是缩醛磷脂那一步里的醚键，这里用在了它真正擅长的地方",
      en: "Some archaea living in boiling water, at low pH, or at high ionic strength build membrane lipids from long **branched** hydrocarbons of 32 carbons, linked at **each end** to a glycerol. Three consequences follow, and each answers a different question. **First, those linkages are ether bonds, “much more stable to hydrolysis at low pH and high temperature than are the ester bonds found in the lipids of bacteria and eukaryotes” — that is the chemistry of surviving boiling acid.** **Second, fully extended these lipids “are twice the length of phospholipids and sphingolipids, and can span the full width of the plasma membrane,” so the membrane is one covalently continuous sheet instead of two leaflets held together only by hydrophobic contact — there is no middle at which it can be pulled apart.** **Third, the glycerol in an archaeal lipid has the opposite stereochemical configuration to the one in every bacterial and eukaryotic lipid.** Three independent structural differences, all pointing the same way.",
      cn: "有些生活在沸水中、低 pH 下或高离子强度环境里的古菌，用 32 个碳的长**支链**烃来造膜脂，这些烃在**两端**都连着一个甘油。由此有三个后果，每个回答一个不同的问题。**第一，这些连接是醚键，“**在低 pH 和高温下比细菌与真核生物脂类中的酯键稳定得多**” —— 这就是「在沸腾的酸里活下来」的化学。** **第二，完全伸展时，这些脂“**是磷脂和鞘脂的两倍长，能够横跨整个质膜的宽度**”，于是这张膜是一整片共价连续的片层，而非仅靠疏水接触贴在一起的两个小叶 —— 它没有一个「中间」可以被撕开。** **第三，古菌脂里的甘油，与所有细菌和真核生物脂类中的甘油取相反的立体构型。** 三个彼此独立的结构差异，全都指向同一个方向。",
      src: "A p.349, figures 10-6 and 10-7"
    },
    {
      link_en: "now a second backbone entirely, with no glycerol in it",
      link_cn: "接下来是完全另一套骨架，里面根本没有甘油",
      en: "A **sphingolipid** has a polar head and two nonpolar tails like everything above, and **contains no glycerol at all**. It is built on **sphingosine**, a long-chain amino alcohol, plus one long-chain fatty acid and a polar head group. The mapping that makes the whole class easy: **carbons C-1, C-2 and C-3 of sphingosine “are structurally analogous to the three carbons of glycerol in glycerophospholipids.”** Attach a fatty acid by an **amide** bond to the -NH2 on C-2 — **to the amino group, not to either hydroxyl** — and the product is a **ceramide**, which is therefore structurally similar to a diacylglycerol. **Every sphingolipid is a ceramide with a head group on it.** That fatty acid is usually saturated or monounsaturated with 16, 18, 22 or 24 carbons. The three subclasses — sphingomyelins, neutral glycolipids, and gangliosides — **differ only in the head group**, which is the sentence to say first.",
      cn: "**鞘脂 (sphingolipid)** 和上面所有东西一样，是一个极性头加两条非极性尾，而它**完全不含甘油**。它建立在**鞘氨醇 (sphingosine)** 上 —— 一种长链氨基醇 —— 再加一个长链脂肪酸和一个极性头基。让整个类别变简单的对应关系是：**鞘氨醇的 C-1、C-2、C-3 “**在结构上与甘油磷脂中甘油的三个碳相对应**”。** 把一个脂肪酸以**酰胺键**接到 C-2 上的 -NH2 上 —— **接在氨基上，而不是接在任何一个羟基上** —— 得到的就是**神经酰胺 (ceramide)**，因此它在结构上与二酰甘油相似。**每一个鞘脂都是「一个神经酰胺 ＋ 一个头基」。** 那个脂肪酸通常是饱和或单不饱和的，含 16、18、22 或 24 个碳。三个亚类 —— 鞘磷脂、中性糖脂、神经节苷脂 —— **彼此的差别只在头基**，这句话要第一个说出来。",
      src: "A p.350, figure 10-11"
    },
    {
      link_en: "first subclass: put a phosphate head on a ceramide and you have rebuilt a phospholipid",
      link_cn: "第一个亚类：给神经酰胺装一个含磷酸的头，你就把磷脂重造了一遍",
      en: "**Sphingomyelins** carry phosphocholine or phosphoethanolamine as their head group, so despite having no glycerol they are classified with the glycerophospholipids as **phospholipids**. **The convergence goes further than the classification: a sphingomyelin resembles phosphatidylcholine in its general properties, in its three-dimensional shape, and in having no net charge on its head group.** They are especially prominent in **myelin**, the insulating sheath around nerve fibres.",
      cn: "**鞘磷脂 (sphingomyelin)** 的头基是磷酸胆碱或磷酸乙醇胺，所以尽管不含甘油，它仍与甘油磷脂一并被归为**磷脂**。**这种趋同还不止于分类：鞘磷脂在一般性质、三维形状、以及「头基不带净电荷」这三点上都与磷脂酰胆碱相像。** 它们在**髓鞘 (myelin)** —— 包在神经纤维外面的绝缘鞘 —— 中尤其丰富。",
      src: "A p.350, figure 10-12"
    },
    {
      link_en: "second and third subclasses: put sugars on instead, and the sugars face outward",
      link_cn: "第二、第三个亚类：换成装糖 —— 而这些糖朝外",
      en: "A **glycosphingolipid** has one or more sugars joined directly to the -OH at C-1 of a ceramide, carries **no phosphate**, and sits largely in the **outer** face of a plasma membrane, where its sugars point into the space outside the cell. **Cerebrosides** carry a single sugar, and which sugar tracks the tissue: **galactose** in the plasma membranes of **neural** tissue, **glucose** in **nonneural** tissue. **Globosides** carry two or more sugars — usually D-glucose, D-galactose or N-acetyl-D-galactosamine. Cerebrosides and globosides together are called **neutral** glycolipids, because they carry no charge at pH 7. **Gangliosides**, the most complex of them, have oligosaccharide head groups ending in one or more residues of **N-acetylneuraminic acid (Neu5Ac), a sialic acid**; “deprotonated sialic acid gives gangliosides the negative charge at pH 7 that distinguishes them from globosides.” The naming follows the count: **one sialic acid makes the GM series (M for mono), two GD, three GT, four GQ** — so GM1 decodes on sight as a ganglioside with one sialic acid.",
      cn: "**糖鞘脂 (glycosphingolipid)** 在神经酰胺 C-1 的 -OH 上直接连着一个或多个糖，**不含磷酸**，并且主要位于质膜的**外**侧，糖朝向细胞外的空间。**脑苷脂 (cerebroside)** 只带一个糖，而带哪个糖与组织有关：**神经**组织质膜里是**半乳糖**，**非神经**组织里是**葡萄糖**。**红细胞糖苷脂 (globoside)** 带两个或更多糖，通常是 D-葡萄糖、D-半乳糖或 N-乙酰-D-半乳糖胺。脑苷脂与红细胞糖苷脂合称**中性**糖脂，因为它们在 pH 7 不带电。**神经节苷脂 (ganglioside)** 是其中最复杂的，头部寡糖末端带一个或多个 **N-乙酰神经氨酸 (Neu5Ac) 残基，即一种唾液酸 (sialic acid)**；“**去质子化的唾液酸赋予神经节苷脂在 pH 7 的负电荷，这正是它们区别于红细胞糖苷脂之处。**”命名就按这个数目走：**一个唾液酸是 GM 系列（M 代表 mono，单个），两个是 GD，三个是 GT，四个是 GQ** —— 所以 GM1 一眼就能解码：带一个唾液酸的神经节苷脂。",
      src: "A p.350–351"
    },
    {
      link_en: "and sugars on the outside of a cell are there to be read by something else",
      link_cn: "而细胞外面的糖，存在的意义就是被别的东西读取",
      en: "At least 60 different sphingolipids have been identified in human cellular membranes, and “a specific function for only a few sphingolipids has been discovered thus far.” One is nailed down completely: **“The carbohydrate moieties of certain sphingolipids define the human blood groups and therefore determine the type of blood that individuals can safely receive in blood transfusions.”** One nuance prevents over-claiming: the same three oligosaccharides of blood types O, A and B are **also** found attached to certain blood proteins, **so the determinant is the sugar structure itself and not the molecule it is hung on**. Two diseases show the same sugars being read by other agents. In **Guillain-Barré syndrome** the body makes antibodies against its own gangliosides, including those on neurons, and the resulting inflammation damages the peripheral nervous system, causing temporary and sometimes permanent paralysis. In **cholera**, the toxin made by the intestinal bacterium *Vibrio cholerae* gets into a cell by first attaching to specific gangliosides on the surface of the intestinal epithelium.",
      cn: "人类细胞膜中已鉴定出至少 **60 种**不同的鞘脂，而“**迄今只有少数几种鞘脂被发现有确切的功能**”。有一个是完全钉死了的：**“某些鞘脂的糖类部分决定了人的血型，因而决定了一个人在输血时可以安全接受哪一型血。”** 有一个细节可以防止说过头：O、A、B 型的这同样三种寡糖，**也**出现在某些血液蛋白上 —— **所以决定血型的是糖的结构本身，而不是它挂在什么分子上。** 两种疾病展示了同样这些糖被别的东西读取。**吉兰-巴雷综合征 (Guillain-Barré syndrome)** 中，身体产生针对自身神经节苷脂（包括神经元上的那些）的抗体，由此引发的炎症损伤周围神经系统，导致暂时性、有时是永久性的瘫痪。**霍乱**中，肠道细菌*霍乱弧菌 (Vibrio cholerae)* 产生的毒素要进入细胞，先得贴到肠上皮细胞表面特定的神经节苷脂上。",
      src: "A p.351, figure 10-13"
    },
    {
      link_en: "membrane lipids are continually replaced, and the taking-apart is where the medicine is",
      link_cn: "膜脂在不断被更新，而「拆解」这一环正是医学所在",
      recall_en: "the head group again decides everything — which enzyme is needed, and which disease follows if it is missing",
      recall_cn: "又是头基决定一切 —— 需要哪个酶，以及它缺席时得哪种病",
      en: "Most cells constantly degrade and replace their membrane lipids, and the machinery is bond-specific: **“For each hydrolyzable bond in a glycerophospholipid, there is a specific hydrolytic enzyme in the lysosome.”** Phospholipases of the A type remove one of the two fatty acids and leave a lysophospholipid; lysophospholipases remove the other. A ganglioside is taken down by a set of lysosomal enzymes that strip its sugar units off **one at a time**, ending at a ceramide. **Because the route is stepwise, a single missing enzyme stalls it, and the half-finished product piles up: “A genetic defect in any of these hydrolytic enzymes leads to the accumulation of gangliosides in the cell, with severe medical consequences.”** More than 50 such **lysosomal storage diseases** are known, each from a single mutation in one gene for one lysosomal protein. **Niemann-Pick disease**: sphingomyelinase, the enzyme that cleaves phosphocholine off sphingomyelin, is defective, sphingomyelin accumulates in brain, spleen and liver, and infants show intellectual disability and early death. **Tay-Sachs disease**, more common: hexosaminidase A is missing, ganglioside GM2 accumulates in brain and spleen, and the course is progressive developmental delay, paralysis, blindness and death by the age of three or four. Four more enzyme-disease pairs sit on the same pathway: beta-galactosidase and generalised gangliosidosis, hexosaminidases A and B together and Sandhoff disease, alpha-galactosidase A and Fabry disease, glucocerebrosidase and Gaucher disease. **What is done about it: prospective parents can be tested for abnormal enzyme activity, DNA testing then identifies the exact defect and the risk to offspring, and in an existing pregnancy fetal cells obtained by chorionic villus sampling or amniocentesis can be tested the same way.**",
      cn: "多数细胞不断降解并更新自己的膜脂，而这套机器是**按键专一**的：**“甘油磷脂中每一个可水解的键，在溶酶体里都有一个专门的水解酶对应。”** A 型磷脂酶切掉两个脂肪酸中的一个，留下溶血磷脂；溶血磷脂酶再切掉另一个。神经节苷脂由一组溶酶体酶**一个一个地**剥掉糖单元，最后剩下一个神经酰胺。**正因为这条路是一步一步走的，缺一个酶就会卡住，而做了一半的产物就堆积起来：“这些水解酶中任何一个的遗传缺陷，都会导致神经节苷脂在细胞内积累，并带来严重的医学后果。”** 这类**溶酶体贮积病**已知有 50 多种，每一种都源自某个溶酶体蛋白基因上的单一突变。**尼曼-匹克病 (Niemann-Pick)**：负责把磷酸胆碱从鞘磷脂上切下来的鞘磷脂酶有缺陷，鞘磷脂在脑、脾、肝中积累，患儿出现智力障碍并早年死亡。**泰-萨克斯病 (Tay-Sachs)** 更常见：缺乏己糖胺酶 A，神经节苷脂 GM2 在脑和脾中积累，病程是进行性发育迟缓、瘫痪、失明，并在三四岁前死亡。同一条通路上还有另外四对酶与疾病：β-半乳糖苷酶与全身性神经节苷脂贮积症、己糖胺酶 A 与 B 同时缺失与 Sandhoff 病、α-半乳糖苷酶 A 与 Fabry 病、葡萄糖脑苷脂酶与 Gaucher 病。**现实中怎么办：可以检测备孕父母的酶活性是否异常，再用 DNA 检测确定确切的缺陷和对后代的风险；已经怀孕的，则可通过绒毛取样或羊膜穿刺获取胎儿细胞做同样的检测。**",
      src: "A p.352–353, figure 10-14 and box 10-1"
    }
  ],
  terms: [
    { en: "amphipathic", cn: "两亲性",
      def_en: "Having a hydrophobic end and a hydrophilic end in one molecule. Put many such molecules in water and they pack into a sheet on their own, hydrophobic ends inward and hydrophilic ends facing the water — this is why a bilayer assembles itself rather than needing to be built.",
      def_cn: "同一个分子上一头疏水、一头亲水。把许多这样的分子放进水里，它们自己就会排成片层，疏水端朝内、亲水端面向水 —— 这就是双层为什么会自行组装、而不需要被搭建起来。" },
    { en: "glycerophospholipid", cn: "甘油磷脂",
      def_en: "Two fatty acids esterified to C-1 and C-2 of a glycerol, with a polar or charged group joined to C-3 through a phosphodiester bond. Strip the head-group alcohol off and phosphatidic acid remains, so all of them are that one compound with different things hung on the phosphate.",
      def_cn: "两个脂肪酸酯化在甘油的 C-1 和 C-2 上，一个极性或带电基团通过磷酸二酯键连在 C-3 上。把头部的醇去掉就剩下磷脂酸，所以它们全都是这一个化合物在磷酸上挂了不同东西。" },
    { en: "prochirality of glycerol", cn: "甘油的前手性",
      def_en: "Glycerol has a plane of symmetry through C-2 and no asymmetric carbon, so it is achiral; its two terminal -CH2OH groups are interchangeable. Attaching a phosphate to one of them makes them distinguishable and the molecule becomes chiral. This is the reason a lipid backbone needs a stereochemical convention at all.",
      def_cn: "甘油有一个穿过 C-2 的对称面、没有不对称碳，因此本身不手性；它两端的 -CH2OH 是可互换的。在其中一端接上磷酸，两端就被区分开来，分子随之变成手性的。这正是脂类骨架为什么需要一套立体化学约定。" },
    { en: "sn, stereospecific numbering", cn: "sn 立体专一编号",
      def_en: "The convention in which C-1 is by definition the group occupying the pro-S position, leaving C-2 in the R configuration. Most lipid backbones are sn-glycerol 3-phosphate, the same molecule as L-glycerol 3-phosphate and as D-glycerol 1-phosphate. It is needed because the chain at position 1 and the chain at position 2 do different jobs.",
      def_cn: "按定义把占据 pro-S 位置的基团记作 C-1 的那套约定，此时 C-2 为 R 构型。大多数脂类骨架是 sn-甘油 3-磷酸，与 L-甘油 3-磷酸、D-甘油 1-磷酸是同一个分子。之所以需要它，是因为 1 位上的链和 2 位上的链干的活不一样。" },
    { en: "cardiolipin", cn: "心磷脂",
      def_en: "Two phosphatidic acid units sharing one glycerol as their head group — a symmetric molecule with four acyl chains, net charge −2 at pH 7. Present in most bacterial membranes and, in eukaryotes, almost only in the inner mitochondrial membrane where it is also made, which is read as consistent with the endosymbiotic origin of that organelle.",
      def_cn: "两个磷脂酸单元共用一个甘油作头基 —— 一个带四条酰基链的对称分子，pH 7 时净电荷 −2。存在于大多数细菌膜中；在真核生物里几乎只出现在线粒体内膜，并且也在那里合成 —— 这被读作与该细胞器的内共生起源相符。" },
    { en: "ether lipid", cn: "醚脂",
      def_en: "A membrane lipid with one of its two chains attached to glycerol by an ether bond in place of an ester. If that chain carries a double bond between C-1 and C-2 it is called a plasmalogen; about half of vertebrate heart phospholipid is of that kind. Type A phospholipases are esterases and cannot cut an ether bond, which is the only functional handle the book offers.",
      def_cn: "两条链中有一条用醚键（而非酯键）连在甘油上的膜脂。若这条链在 C-1 与 C-2 之间带一个双键，就叫缩醛磷脂；脊椎动物心脏磷脂中约有一半属于这种。A 型磷脂酶是酯酶，切不动醚键 —— 这是书里给出的唯一一个功能上的抓手。" },
    { en: "platelet-activating factor", cn: "血小板活化因子",
      def_en: "An ether lipid that acts as a signal instead of building membrane: a long ether-linked alkyl chain at C-1 but only an ester-linked acetic acid at C-2, which makes it far more water-soluble than a two-tailed lipid. Released from basophils, it drives platelet aggregation and serotonin release and acts in inflammation and allergy.",
      def_cn: "一个当信号而不当建材的醚脂：C-1 上是醚连的长烷基链，而 C-2 上只有一个酯连的乙酸，这使它比双尾脂类水溶性高得多。它由嗜碱性粒细胞释放，引发血小板聚集与 5-羟色胺释放，并参与炎症与过敏。" },
    { en: "galactolipid", cn: "半乳糖脂",
      def_en: "A 1,2-diacylglycerol carrying one or two galactose residues glycosidically linked at C-3, with no phosphate at all. Found in chloroplast thylakoid membranes, where these make up 70 to 80 per cent of a vascular plant's membrane lipid and are therefore probably the most abundant membrane lipids in the biosphere. The suggested reason is that soil phosphate is often the limiting nutrient.",
      def_cn: "一个 1,2-二酰甘油，在 C-3 上以糖苷键带着一个或两个半乳糖残基，全分子不含磷酸。它们位于叶绿体类囊体膜中，占维管植物膜脂的 70% 到 80%，因而很可能是生物圈中含量最丰富的膜脂。给出的理由是：土壤中的磷酸常常是限制性营养。" },
    { en: "archaeal tetraether lipid", cn: "古菌四醚脂",
      def_en: "Branched 32-carbon hydrocarbons ether-linked to a glycerol at each end, used by archaea in boiling, acidic or highly saline niches. The ether bonds resist hydrolysis where esters would not; the fully extended lipid is twice the length of a phospholipid and spans the whole membrane, so the membrane has no middle at which it can be pulled apart.",
      def_cn: "两端都以醚键连着甘油的 32 碳支链烃，为生活在沸腾、强酸或高盐环境中的古菌所用。醚键在酯键撑不住的地方仍抗水解；完全伸展时它有磷脂的两倍长，横跨整张膜，于是这张膜没有一个可以被撕开的「中间」。" },
    { en: "ceramide", cn: "神经酰胺",
      def_en: "Sphingosine with a fatty acid joined by an amide bond to the -NH2 on C-2 — to the amino group, not to either hydroxyl. Since C-1, C-2 and C-3 of sphingosine correspond to the three carbons of glycerol, this is the sphingolipid counterpart of a diacylglycerol, and every sphingolipid is one of these with a head group added.",
      def_cn: "鞘氨醇上以酰胺键接了一个脂肪酸，接在 C-2 的 -NH2 上 —— 接的是氨基，而不是任何一个羟基。由于鞘氨醇的 C-1、C-2、C-3 对应甘油的三个碳，它就是鞘脂里与二酰甘油对应的那个东西；而每一个鞘脂都是它再加一个头基。" },
    { en: "glycosphingolipid", cn: "糖鞘脂",
      def_en: "A ceramide with one or more sugars joined directly to the -OH at C-1 and no phosphate, sitting largely in the outer face of a plasma membrane with its sugars pointing out of the cell. Cerebrosides carry one sugar, globosides two or more, and both are uncharged at pH 7; gangliosides end in sialic acid and are negatively charged.",
      def_cn: "神经酰胺 C-1 的 -OH 上直接连着一个或多个糖、且不含磷酸的脂类，主要位于质膜外侧，糖朝细胞外伸。脑苷脂带一个糖，红细胞糖苷脂带两个或更多，两者在 pH 7 都不带电；神经节苷脂末端带唾液酸，因而带负电。" },
    { en: "the GM, GD, GT and GQ series", cn: "GM／GD／GT／GQ 系列",
      def_en: "Gangliosides are named by how many N-acetylneuraminic acid residues terminate their oligosaccharide head group: one gives the GM series (M for mono), two GD, three GT, four GQ. Deprotonated sialic acid is what gives this family its negative charge at pH 7 and separates it from the neutral globosides.",
      def_cn: "神经节苷脂按头部寡糖末端的 N-乙酰神经氨酸残基数目命名：一个是 GM 系列（M 代表单个），两个是 GD，三个是 GT，四个是 GQ。去质子化的唾液酸正是这一族在 pH 7 带负电、从而与中性红细胞糖苷脂区分开来的原因。" },
    { en: "lysosomal storage disease", cn: "溶酶体贮积病",
      def_en: "More than 50 are known, each from a single mutation in one gene for one lysosomal protein. Because a membrane lipid is taken apart bond by bond, a missing hydrolase stalls the route and the half-finished product accumulates: sphingomyelinase gives Niemann-Pick, hexosaminidase A gives Tay-Sachs with GM2 piling up, hexosaminidases A and B give Sandhoff, alpha-galactosidase A gives Fabry, glucocerebrosidase gives Gaucher.",
      def_cn: "已知 50 多种，每一种都源自某个溶酶体蛋白基因上的单一突变。由于膜脂是一个键一个键地被拆开，缺一个水解酶就卡住整条路，做了一半的产物随之堆积：鞘磷脂酶缺陷给出尼曼-匹克病，己糖胺酶 A 缺陷给出泰-萨克斯病并堆积 GM2，己糖胺酶 A 与 B 同时缺陷给出 Sandhoff 病，α-半乳糖苷酶 A 给出 Fabry 病，葡萄糖脑苷脂酶给出 Gaucher 病。" }
  ]
};

/* ================================================================ L-10-2-2 ===
   One thread, not a whole section: a rigid four-ring hydrocarbon made
   amphipathic by a single hydroxyl, and what happens to its job each time that
   hydroxyl or that side chain is altered. */
window.BIOLITE_SPINE["L-10-2-2"] = {
  assumed: [
    "cholesterol", "membrane", "lipid", "fatty acid", "hydroxyl", "ester", "ring",
    "hydrocarbon", "carbon", "oxygen", "oxidation", "water", "blood", "hormone",
    "receptor", "gene expression", "enzyme", "cell", "nucleus", "vitamin",
    "skin", "intestine", "plant", "fungus", "bacteria", "eukaryote", "polar",
    "nonpolar", "amphipathic", "triacylglycerol", "glycerophospholipid", "lipase",
    "phospholipid", "calcium", "inflammation", "asthma", "drug"
  ],
  nodeTitle_en: "Cholesterol, steroids and the isoprenoid family",
  nodeTitle_cn: "胆固醇、类固醇，以及异戊二烯族",
  title_en: "A rigid four-ring hydrocarbon made amphipathic by one hydroxyl — and what changes each time that hydroxyl or that side chain is altered",
  title_cn: "一个靠单个羟基获得两亲性的刚性四并环烃 —— 每改动一次这个羟基或那条侧链，它的角色就变一次",
  steps: [
    {
      en: "A **sterol** is a structural lipid present in the membranes of most eukaryotic cells, built round the **steroid nucleus**, “consisting of four fused rings, three with six carbons and one with five,” lettered **A to D**. Two mechanical facts follow at once: “The steroid nucleus is almost planar and is relatively rigid; the fused rings do not allow rotation about C-C bonds.” **That is the exact opposite of a fatty acyl chain, which rotates freely about every carbon-carbon bond and can therefore extend, bend or kink — and it is precisely why putting a sterol into a membrane stiffens it.**",
      cn: "**固醇 (sterol)** 是存在于大多数真核细胞膜中的结构脂类，其核心是**类固醇核 (steroid nucleus)** —— “**由四个稠合的环构成，三个是六碳环，一个是五碳环**”，四个环依次标为 **A 到 D**。两个力学事实立刻随之而来：“**类固醇核几乎是平面的，而且相当刚硬；稠合的环不允许绕 C-C 键旋转。**” **这与脂酰链恰恰相反 —— 脂酰链绕每一根碳碳键都能自由旋转，因而能伸展、弯折、打结；而这正是把一个固醇塞进膜里会让膜变硬的原因。**",
      src: "A p.352, figure 10-15",
      see: [{ id: "L-11-2-1", en: "what cholesterol does to membrane fluidity, measured", cn: "胆固醇对膜流动性的作用，以及它是怎么被测出来的" }]
    },
    {
      link_en: "and this rigid hydrocarbon has to live among phospholipids, which means it needs a polar end",
      link_cn: "而这个刚硬的烃要挤在磷脂中间生活，就必须有一个极性的一端",
      en: "The description is unusually precise, and it is worth taking apart in three pieces: “Cholesterol, the major sterol in animal tissues, is amphipathic, with a polar head group (the hydroxyl group at C-3) and a nonpolar hydrocarbon body (the steroid nucleus and the hydrocarbon side chain at C-17) about as long as a 16-carbon fatty acid in its extended form.” **One, the polar head is a single hydroxyl — one oxygen atom against twenty-odd carbons, the smallest polar head of any lipid in this chapter. Two, the nonpolar body includes the side chain at C-17, not only the rings. Three, the length is calibrated against a 16-carbon fatty acid, which is the commonest saturated chain in the membrane lipids cholesterol sits among.** Put the three together and you can picture it: **cholesterol is exactly the right length to lie alongside a phospholipid tail, with its one hydroxyl reaching the watery surface where the phospholipid head groups already are.**",
      cn: "书里的描述异常精确，值得拆成三块来看：“**胆固醇，动物组织中主要的固醇，是两亲性的：极性头基是 C-3 上的羟基，非极性的身体是类固醇核加上 C-17 上的烃基侧链，其长度大致相当于一个 16 碳脂肪酸的完全伸展形式。**” **第一，极性头就是一个羟基 —— 一个氧原子对上二十几个碳，是本章所有脂类里最小的极性头。第二，非极性的身体包括 C-17 上的侧链，而不只是那几个环。第三，长度是拿一个 16 碳脂肪酸作尺子量的，而这正是胆固醇周围那些膜脂里最常见的饱和链。** 把三点合起来就能想象出画面：**胆固醇的长度恰好可以贴着一条磷脂尾巴躺下，而它唯一的那个羟基正好够到磷脂头基所在的那层水面。**",
      src: "A p.352"
    },
    {
      link_en: "so what happens when the cell needs to store or move it, where being polar is a liability?",
      link_cn: "那么当细胞要储存或搬运它时怎么办 —— 在那种场合，带极性反而是累赘",
      recall_en: "the same move that makes a triacylglycerol neutral: consume the polar groups in ester bonds",
      recall_cn: "和让三酰甘油变「中性」的是同一招：把极性基团消耗在酯键里",
      en: "“For storage and transport of the sterol, this hydroxyl group condenses with a fatty acid to form a **sterol ester**.” **Cap the only polar group and an amphipathic membrane component becomes a fully nonpolar molecule, fit for the inside of a lipid droplet or the core of a lipoprotein particle.** The membrane form and the transport form of cholesterol therefore differ by exactly one ester bond.",
      cn: "“**为了储存和运输这个固醇，这个羟基与一个脂肪酸缩合，形成固醇酯 (sterol ester)。**” **把唯一的极性基团封起来，一个两亲性的膜组分就变成了彻底非极性的分子 —— 正适合待在脂滴内部或脂蛋白颗粒的核心里。** 于是胆固醇的「膜形式」与「运输形式」之间，恰好只差一个酯键。",
      src: "A p.352, figure 10-15 caption"
    },
    {
      link_en: "other kingdoms use their own version of the same molecule, and one whole domain of life cannot make it",
      link_cn: "其他界各有自己那一版同类分子，而有一整个生命域根本造不出它",
      en: "Similar sterols occur elsewhere in the eukaryotes: **stigmasterol** in plants, **ergosterol** in fungi. Then the sentence to get exactly right: “**Bacteria cannot synthesize sterols; a few bacterial species, however, can incorporate exogenous sterols into their membranes.**” **The claim is about capability, not about content — bacteria cannot make sterols, and a few species solve that by taking up somebody else's.** This is the cleanest statement in the chapter of a whole biosynthetic capability being confined to one domain of life, and it stands beside the archaeal ether lipids as evidence that membrane composition tracks ancestry.",
      cn: "真核生物里别处也有类似的固醇：植物是**豆甾醇 (stigmasterol)**，真菌是**麦角甾醇 (ergosterol)**。接下来这句话要一字不差地记准：“**细菌不能合成固醇；不过少数细菌种类能把外源固醇整合进自己的膜里。**” **这句话说的是「能力」，而不是「含量」—— 细菌造不出固醇，少数种类靠拿别人的来解决问题。** 这是本章里关于「一整项生物合成能力被限制在一个生命域内」最干净的陈述，它与古菌的醚脂并列，共同说明膜的组成随亲缘关系而变。",
      src: "A p.352"
    },
    {
      link_en: "now the distinction the two words hide, and it is exact",
      link_cn: "现在说这两个词掩盖着的那个区别 —— 它是精确的",
      en: "“**Steroids are oxidized derivatives of sterols; they have the sterol nucleus but lack the alkyl chain attached to ring D of cholesterol, and they are more polar than cholesterol.**” Three separate claims, each checkable against a drawing. **Oxidised** — a steroid carries extra oxygen-containing groups on the rings. **Nucleus kept** — the four fused rings are still there. **Side chain lost** — this is the discriminating feature, since cholesterol carries a hydrocarbon side chain at C-17 on ring D and a steroid does not. The third claim follows from the other two: more oxygen and less hydrocarbon makes a more polar molecule. **The pair of definitions is therefore clean: keep the C-17 chain and it is a sterol; remove it and oxidise the rings and it is a steroid.** Testosterone, beta-estradiol, cortisol and aldosterone are all drawn without cholesterol's long tail and all carry oxygen functions on the rings.",
      cn: "“**类固醇 (steroid) 是固醇的氧化衍生物；它们保留固醇核，但缺少胆固醇 D 环上连着的那条烷基侧链，并且比胆固醇更极性。**” 三个各自独立的论断，每一个都能对着结构图核对。**氧化** —— 类固醇的环上多带了含氧基团。**保留核** —— 那四个稠合环还在。**失去侧链** —— 这才是判别特征，因为胆固醇在 D 环的 C-17 上带着一条烃基侧链，而类固醇没有。第三条由前两条推出：氧更多、烃更少，分子自然更极性。**于是这一对定义很干净：留着 C-17 那条链的是固醇；把它去掉、再把环氧化，就是类固醇。** 睾酮、β-雌二醇、皮质醇、醛固酮，画出来全都没有胆固醇那条长尾巴，而且环上都带着含氧基团。",
      src: "A p.356, figure 10-18"
    },
    {
      link_en: "and being a lipid changes how a hormone is delivered and what it can do once it arrives",
      link_cn: "而「本身是脂类」这件事，改变了一个激素如何被送达、以及到达之后能做什么",
      en: "The whole delivery route is packed into one line: “Steroid hormones move through the bloodstream (on protein carriers) from their site of production to target tissues, where they enter cells, bind to highly specific receptor proteins in the **nucleus**, and trigger changes in gene expression and thus metabolism.” **Four claims, and three of them follow from the molecule being a lipid: it needs a protein carrier to cross an aqueous bloodstream at all, it can walk straight into a cell because a lipid bilayer is no barrier to it, and its receptor being in the nucleus means the output is a change in which genes are expressed rather than a change in the activity of an enzyme already present.** Then the potency: “Because hormones have very high affinity for their receptors, very low concentrations of hormones (**nanomolar or less**) are sufficient to produce responses in target tissues” — which is the practical reason these are powerful drugs at very small doses. The named examples come with jobs attached: **testosterone**, the male sex hormone made in the testes; **beta-estradiol**, the female sex hormone made in the ovaries and placenta; **cortisol**, made in the adrenal cortex, which regulates glucose metabolism; and **aldosterone**, also adrenal, which regulates salt excretion.",
      cn: "“**类固醇激素随血流（挂在蛋白载体上）从产生部位到达靶组织，在那里进入细胞，与细胞核中高度专一的受体蛋白结合，引发基因表达、进而代谢的改变。**” **四个论断，其中三个都由「它是脂类」推出：它必须挂在蛋白载体上才能穿过含水的血流；它能径直走进细胞，因为脂双层对它不构成屏障；而它的受体在细胞核里，意味着输出是「哪些基因被表达」发生变化，而不是「已经在场的某个酶」活性发生变化。** 接着是效价：“**由于激素对其受体亲和力极高，很低的浓度（纳摩尔或更低）就足以在靶组织中引起反应**” —— 这正是这类药物在极小剂量下就很有力的现实原因。书里点名的例子都带着各自的活：**睾酮**，睾丸产生的雄性激素；**β-雌二醇**，卵巢与胎盘产生的雌性激素；**皮质醇**，肾上腺皮质产生，调节葡萄糖代谢；**醛固酮**，同样来自肾上腺皮质，调节盐的排泄。",
      src: "A p.356"
    },
    {
      link_en: "one steroid drug works by shutting off a different lipid class at its source, and that is what separates two kinds of anti-inflammatory",
      link_cn: "有一个类固醇药物，是靠在源头掐断另一类脂来起效的 —— 而这正是两类抗炎药的分界",
      en: "**Arachidonate** is a 20-carbon polyunsaturated fatty acid that sits esterified at **C-2** of a membrane glycerophospholipid, and it is the raw material for the **eicosanoids** — short-range signal molecules made and used near where they are produced, in four classes: prostaglandins, thromboxanes, leukotrienes and lipoxins. **Nothing can be made from arachidonate until it is cut off that C-2 position, and the enzyme that cuts a fatty acid off C-2 is phospholipase A2.** “Prednisone is a steroid drug with strong anti-inflammatory activity, mediated **in part** by the inhibition of arachidonate release by phospholipase A2 and consequent inhibition of the synthesis of prostaglandins, thromboxanes, leukotrienes, and lipoxins,” used in asthma and rheumatoid arthritis. **Cutting the supply at the source stops all four classes at once.** Compare a nonsteroidal drug such as aspirin, which inhibits cyclooxygenase, an enzyme partway down only one branch: prostaglandins and thromboxanes stop, leukotrienes and lipoxins continue. **That difference in where the pathway is interrupted is the whole distinction between a steroidal and a nonsteroidal anti-inflammatory — and it is why a steroid reaches asthma, which is driven by leukotrienes, and aspirin does not.** Keep the words *in part*: this inhibition is stated as one component of prednisone's action, rather than the whole of it.",
      cn: "**花生四烯酸 (arachidonate)** 是一个 20 碳的多不饱和脂肪酸，它以酯键待在膜甘油磷脂的 **C-2** 位上，是**二十烷酸类 (eicosanoid)** 的原料 —— 二十烷酸类是在产生地附近就地起作用的短程信号分子，共四类：前列腺素、血栓烷、白三烯和脂氧素。**在花生四烯酸从 C-2 位上被切下来之前，什么也造不出来；而把脂肪酸从 C-2 切下来的酶，就是磷脂酶 A2。** “**泼尼松 (prednisone) 是一种具有强抗炎活性的类固醇药物，其活性部分由「抑制磷脂酶 A2 释放花生四烯酸、从而抑制前列腺素、血栓烷、白三烯和脂氧素的合成」介导**”，用于哮喘与类风湿关节炎。**在源头掐断供应，四类产物同时停摆。** 对比阿司匹林这类非类固醇药：它抑制的是环氧合酶 —— 只在其中一条分支上、位置更靠下的一个酶；于是前列腺素和血栓烷停了，白三烯和脂氧素照常。**「在通路的哪一处下手」这个差别，就是类固醇抗炎药与非类固醇抗炎药之间的全部区别 —— 也正因如此，类固醇管得了由白三烯驱动的哮喘，而阿司匹林管不了。** 「**部分**」这两个字要留着：书里说的是这项抑制构成泼尼松作用的一部分，而非它的全部。",
      src: "A p.356",
      see: [{ id: "L-10-3-1", en: "the eicosanoids themselves, class by class", cn: "二十烷酸类本身，逐类展开" }]
    },
    {
      link_en: "the same molecule has a job in the gut, and the word for it is doing real work",
      link_cn: "同一个分子在肠道里还有一份工作，而描述它的那个词是实打实的",
      recall_en: "the insolubility of a triacylglycerol is what creates the problem this solves",
      recall_cn: "三酰甘油的不溶性，正是这一步要解决的那个问题的来源",
      en: "**Bile acids** “are polar derivatives of cholesterol that act as **detergents** in the intestine, emulsifying dietary fats to make them more readily accessible to digestive lipases,” taurocholic acid being the drawn example. **Unpack the word detergent, because it explains the whole thing. A dietary triacylglycerol is nonpolar and essentially insoluble in water, so in the gut it forms large droplets with very little surface. A lipase is a water-soluble enzyme and can only work at that surface. A bile acid is amphipathic — a cholesterol skeleton made polar on one face — so it coats the droplets and breaks them into many small ones, multiplying the surface area available to the enzyme. It hydrolyses nothing itself; it makes hydrolysis possible.**",
      cn: "**胆汁酸 (bile acid)** “**是胆固醇的极性衍生物，在肠道中充当去污剂 (detergent)，把膳食脂肪乳化，使消化性脂肪酶更容易接触到它们**”，书里画出的例子是牛磺胆酸。**把「去污剂」这个词拆开，整件事就清楚了。膳食里的三酰甘油非极性、基本不溶于水，所以在肠道里聚成大油滴，表面积很小。而脂肪酶是水溶性的酶，只能在那个表面上干活。胆汁酸是两亲性的 —— 一个在一侧被改造得带极性的胆固醇骨架 —— 于是它裹住油滴、把大油滴打散成许多小油滴，成倍地放大了酶可用的表面积。它自己不水解任何东西；它让水解成为可能。**",
      src: "A p.352",
      beyond: true,
      beyondNote: "One addition from outside these pages, because it completes the story: conversion to bile acids and their salts is the only route by which cholesterol leaves the animal body at all. Lehninger chapter 10 gives the structure and the digestive function; the excretion claim comes from the Czech layer's node on terpenoid and steroid fate."
    },
    {
      link_en: "and a second derivative starts in the skin rather than the liver",
      link_cn: "而另一个衍生物的起点在皮肤，不在肝脏",
      en: "**Vitamin D3, cholecalciferol, “is normally formed in the skin from 7-dehydrocholesterol in a photochemical reaction driven by the UV component of sunlight”** — and 7-dehydrocholesterol is a cholesterol derivative. **So a membrane sterol becomes, by way of sunlight, a hormone that regulates calcium.** One classification oddity worth knowing rather than being tripped by: the photochemical step opens one of the rings, so a vitamin D compound is counted among the steroid substances by origin while no longer having the intact four-ring nucleus by structure.",
      cn: "**维生素 D3，即胆钙化醇 (cholecalciferol)，“**通常在皮肤中由 7-脱氢胆固醇经一个由阳光紫外线成分驱动的光化学反应生成**”** —— 而 7-脱氢胆固醇是胆固醇的衍生物。**于是一个膜上的固醇，经由阳光，变成了一个调节钙的激素。** 有一个分类上的怪处，与其被它绊倒不如先知道：那个光化学步骤打开了其中一个环，所以维生素 D 类化合物按**来源**被归入类固醇物质，而按**结构**它已不再拥有完整的四并环核。",
      src: "A p.357",
      beyond: true,
      beyondNote: "The ring-opening explanation of why vitamin D sits awkwardly in the steroid class is not spelled out on A p.357, which gives the photochemical origin; the activation chemistry is developed in L-10-3-1.",
      see: [{ id: "L-10-3-1", en: "vitamin D activated, and the other fat-soluble vitamins", cn: "维生素 D 的活化，以及其他脂溶性维生素" }]
    },
    {
      link_en: "plants use the same four-ring scaffold for signalling too, with an output no animal has",
      link_cn: "植物也拿同一套四并环骨架做信号，而它的输出是动物根本没有的",
      en: "The plant version is given in one line: “Vascular plants contain the steroidlike **brassinolide**, a potent growth regulator that increases the rate of stem elongation and affects the orientation of cellulose microfibrils in the cell wall during growth.” **So the rigid four-ring skeleton is a signalling scaffold in both kingdoms — and in a plant its output is the architecture of a cell wall, which has no animal counterpart at all.**",
      cn: "“**维管植物含有类固醇样的油菜素内酯 (brassinolide)，一种强效的生长调节物质，它提高茎伸长的速率，并影响生长过程中细胞壁里纤维素微纤丝的取向。**” **于是这套刚性的四并环骨架在两个界里都是信号支架 —— 而在植物里，它的输出是细胞壁的构造，这在动物中完全没有对应物。**",
      src: "A p.356, figure 10-18"
    },
    {
      link_en: "and one sentence gathers everything in this chain, plus most of the next node, into a single family",
      link_cn: "最后有一句话，把这条线上的一切、外加下一个节点的大部分内容，收进同一个家族",
      en: "“The sterols of all eukaryotes are synthesized from simple **five-carbon isoprene** subunits, as are the fat-soluble vitamins, quinones, and dolichols,” and again at the end of the chapter with the list extended: “Like sterols, steroids, dolichols, vitamins A, E, D, and K, ubiquinone, and plastoquinone, these pigments are synthesized from five-carbon isoprene derivatives.” **Count what is inside that list: the membrane sterol, every steroid hormone, the sugar-carrying dolichols, all four fat-soluble vitamins, both electron-carrying quinones, and the coloured carotenoid pigments — one biosynthetic family, assembled from the same five-carbon block.** The isoprene structure itself is printed in the chapter; the pathway that condenses the blocks is chapter 21's. **One vocabulary note for moving between textbooks: Lehninger calls this family isoprenoids and does not use the word terpene, which other books use for the same compounds.**",
      cn: "“**所有真核生物的固醇都由简单的五碳异戊二烯 (isoprene) 单元合成，脂溶性维生素、醌类和多萜醇也是如此**”；到本章末尾这句话又出现一次，名单更长：“**与固醇、类固醇、多萜醇、维生素 A、E、D、K、泛醌和质体醌一样，这些色素也由五碳异戊二烯衍生物合成。**” **数一数这份名单里都有什么：膜上的固醇、所有类固醇激素、搬运糖的多萜醇、四种脂溶性维生素、两种传递电子的醌，以及带颜色的类胡萝卜素 —— 一个生物合成家族，全部由同一种五碳积木拼成。** 异戊二烯本身的结构就印在本章里；把这些积木缩合起来的通路属于第 21 章。**换书阅读时的一个词汇提示：Lehninger 把这一族称作 isoprenoids（异戊二烯类），并不使用 terpene（萜）这个词，而别的教科书用后者指同一批化合物。**",
      src: "A p.352 and A p.360"
    }
  ],
  terms: [
    { en: "the steroid nucleus", cn: "类固醇核",
      def_en: "Four fused rings, three of six carbons and one of five, lettered A to D. Almost planar and relatively rigid, because fused rings do not allow rotation about C-C bonds — the exact opposite of the free rotation that lets a saturated acyl chain extend, and the reason a sterol stiffens the membrane it sits in.",
      def_cn: "四个稠合的环，三个六碳、一个五碳，依次标为 A 到 D。它几乎平面且相当刚硬，因为稠合的环不允许绕 C-C 键旋转 —— 这与「让饱和脂酰链得以伸展的自由旋转」恰好相反，也正是固醇会让所在的膜变硬的原因。" },
    { en: "cholesterol's amphipathy", cn: "胆固醇的两亲性",
      def_en: "Polar head: the hydroxyl at C-3, and nothing else — one oxygen against twenty-odd carbons, the smallest polar head of any lipid in the chapter. Nonpolar body: the four-ring nucleus plus the hydrocarbon side chain at C-17, together about as long as a 16-carbon fatty acid extended. The length is calibrated against the acyl chains it lies among.",
      def_cn: "极性头：C-3 上的羟基，仅此而已 —— 一个氧对上二十几个碳，是本章所有脂类里最小的极性头。非极性身体：四并环核加 C-17 上的烃基侧链，合起来大约相当于一个完全伸展的 16 碳脂肪酸。这个长度是拿它周围那些脂酰链作尺子量的。" },
    { en: "sterol ester", cn: "固醇酯",
      def_en: "Cholesterol's single polar group, the C-3 hydroxyl, condensed with a fatty acid for storage and transport. Capping the one polar group turns an amphipathic membrane component into a fully nonpolar molecule fit for a lipid droplet or a lipoprotein core — the same logic that leaves a triacylglycerol neutral.",
      def_cn: "为了储存和运输，胆固醇唯一的极性基团 —— C-3 羟基 —— 与一个脂肪酸缩合。把这唯一的极性基团封住，两亲性的膜组分就变成彻底非极性的分子，适合待在脂滴或脂蛋白核心里 —— 与三酰甘油之所以呈「中性」是同一个道理。" },
    { en: "sterol versus steroid", cn: "固醇与类固醇之别",
      def_en: "Steroids are oxidised derivatives of sterols: they keep the four-ring nucleus, they lack the alkyl side chain attached to ring D of cholesterol, and they are more polar. Conversely the marker of a sterol is a hydrocarbon side chain at C-17 plus the C-3 hydroxyl. Keep the C-17 chain and it is one; remove it and oxidise the rings and it is the other.",
      def_cn: "类固醇是固醇的氧化衍生物：保留四并环核，缺少胆固醇 D 环上的那条烷基侧链，并且更极性。反过来，固醇的标志是 C-17 上的烃基侧链加上 C-3 的羟基。留着 C-17 那条链就是前者；去掉它并把环氧化就是后者。" },
    { en: "steroid hormone delivery", cn: "类固醇激素的递送方式",
      def_en: "Carried through the blood on protein carriers, entering target cells directly because a lipid bilayer is no barrier to a lipid, and binding receptors in the nucleus — so the output is a change in gene expression rather than in the activity of an enzyme already present. Very high receptor affinity means nanomolar or lower concentrations suffice.",
      def_cn: "挂在蛋白载体上随血流运送；因为脂双层对脂类不构成屏障，它直接进入靶细胞；受体在细胞核里 —— 所以输出是基因表达的改变，而非已在场的某个酶活性的改变。对受体极高的亲和力意味着纳摩尔或更低的浓度就够。" },
    { en: "arachidonate and the eicosanoids", cn: "花生四烯酸与二十烷酸类",
      def_en: "Arachidonate is a 20-carbon polyunsaturated fatty acid esterified at C-2 of a membrane glycerophospholipid, and it is the raw material for four classes of short-range signal: prostaglandins, thromboxanes, leukotrienes and lipoxins. None can be made until phospholipase A2 releases it from that C-2 position.",
      def_cn: "花生四烯酸是一个 20 碳多不饱和脂肪酸，酯化在膜甘油磷脂的 C-2 位上，是四类短程信号分子的原料：前列腺素、血栓烷、白三烯、脂氧素。在磷脂酶 A2 把它从 C-2 位释放出来之前，这四类一个也造不出来。" },
    { en: "steroidal versus nonsteroidal anti-inflammatory", cn: "类固醇抗炎药与非类固醇抗炎药",
      def_en: "Prednisone acts in part by blocking phospholipase A2, cutting the arachidonate supply at its source, so all four eicosanoid classes stop. Aspirin blocks cyclooxygenase partway down one branch, so prostaglandins and thromboxanes stop while leukotrienes and lipoxins continue — which is why the steroid reaches leukotriene-driven asthma and aspirin does not.",
      def_cn: "泼尼松的作用部分来自阻断磷脂酶 A2，在源头掐断花生四烯酸的供应，于是四类二十烷酸全部停摆。阿司匹林阻断的是位于其中一条分支中途的环氧合酶，于是前列腺素与血栓烷停了，白三烯与脂氧素照常 —— 这就是为什么类固醇管得了由白三烯驱动的哮喘，阿司匹林管不了。" },
    { en: "bile acid", cn: "胆汁酸",
      def_en: "A polar derivative of cholesterol, taurocholic acid for example, acting as a detergent in the intestine: it coats large insoluble fat droplets and breaks them into many small ones, multiplying the surface at which a water-soluble lipase can work. It hydrolyses nothing itself — it makes hydrolysis possible.",
      def_cn: "胆固醇的极性衍生物，例如牛磺胆酸，在肠道中充当去污剂：它裹住不溶的大油滴，把它们打散成许多小油滴，成倍放大水溶性脂肪酶可以工作的表面。它自己不水解任何东西 —— 它让水解成为可能。" },
    { en: "brassinolide", cn: "油菜素内酯",
      def_en: "A steroidlike growth regulator of vascular plants: it raises the rate of stem elongation and affects the orientation of cellulose microfibrils in the cell wall during growth. The same four-ring signalling scaffold as an animal steroid hormone, with an output that has no animal counterpart.",
      def_cn: "维管植物的一种类固醇样生长调节物质：它提高茎伸长的速率，并影响生长期间细胞壁中纤维素微纤丝的取向。与动物类固醇激素是同一套四并环信号支架，而它的输出在动物里没有对应物。" },
    { en: "the isoprenoid family", cn: "异戊二烯族",
      def_en: "Sterols, steroids, dolichols, vitamins A, E, D and K, ubiquinone, plastoquinone and the carotenoid pigments are all built from five-carbon isoprene units, with the condensing pathway in chapter 21. Lehninger uses the name isoprenoid throughout and does not use the word terpene, which other textbooks apply to the same compounds.",
      def_cn: "固醇、类固醇、多萜醇、维生素 A／E／D／K、泛醌、质体醌以及类胡萝卜素色素，全部由五碳异戊二烯单元搭成，缩合通路在第 21 章。Lehninger 全书使用 isoprenoid 这个名字，不使用 terpene（萜）—— 而别的教科书用后者指同一批化合物。" }
  ]
};

/* ================================================================ L-10-3-1 ===
   The thread: the lipids in this node are present in tiny amounts and do
   something, where the storage and membrane lipids mostly sit there. Four kinds
   of doing — signal, cofactor, pigment, and a message sent through the air. */
window.BIOLITE_SPINE["L-10-3-1"] = {
  assumed: [
    "lipid", "membrane", "fatty acid", "cell", "enzyme", "hormone", "receptor",
    "protein", "gene expression", "blood", "plasma membrane", "cytosol",
    "endoplasmic reticulum", "calcium", "phosphorylation", "kinase", "hydroxyl",
    "aromatic ring", "oxidation", "reduction", "electron", "proton", "double bond",
    "light", "vitamin", "diet", "skin", "liver", "kidney", "bone", "intestine",
    "eye", "platelet", "clot", "inflammation", "asthma", "drug", "plant", "insect",
    "sugar", "polysaccharide", "glycoprotein", "mitochondrion", "chloroplast",
    "ATP", "diacylglycerol", "cholesterol", "sphingomyelin", "ceramide",
    "apoptosis", "erythrocyte", "antibiotic", "amphipathic", "hydrophobic"
  ],
  nodeTitle_en: "Lipids as signals, cofactors and pigments",
  nodeTitle_cn: "作为信号、辅因子与色素的脂类",
  title_en: "The lipids that do something: a membrane lipid cut into two messengers, four local signals from one fatty acid, and four vitamins with four mechanisms",
  title_cn: "会「做事」的那些脂类：一个膜脂被切成两个信使、一个脂肪酸生出四类局部信号、四种维生素各有各的机制",
  steps: [
    {
      en: "Put the quantities first, because they say why this material is separated out at all. Membrane lipids are 5% to 10% of the dry mass of most cells, and storage lipids more than 80% of the mass of a fat cell. “With some important exceptions, these lipids play a passive role in the cell; lipid fuels are stored until oxidized by enzymes, and membrane lipids form impermeable barriers around cells and cellular compartments.” **The lipids in this chain are present in far smaller amounts and are active rather than passive**, and they come in four kinds of job: **potent signals**, either hormones carried in the blood between tissues or messengers generated inside a cell in response to a signal outside it; **enzyme cofactors** in electron-transfer reactions and in sugar transfer; **pigments** whose alternating double bonds absorb visible light, giving vision and photosynthesis their light-catching molecules and pumpkins, carrots and canary feathers their colour; and a very large group of **volatile plant lipids** that travel through the air, letting a plant call in help and warn its neighbours.",
      cn: "先把数量摆出来，因为它说明了这批材料为什么要单独拿出来讲。膜脂占大多数细胞干重的 **5% 到 10%**，储存脂类占一个脂肪细胞质量的 **80% 以上**。“**除少数重要例外，这些脂类在细胞中扮演被动角色；脂类燃料被储存着，直到被酶氧化；膜脂在细胞和细胞区室周围形成不可透过的屏障。**” **而这条线上的脂类含量要小得多，并且是主动的而非被动的**，它们的活儿分四类：**强效信号** —— 或是随血液在组织间传递的激素，或是响应细胞外信号而在细胞内生成的信使；**酶的辅因子** —— 用于电子传递反应和糖基转移；**色素** —— 交替的双键吸收可见光，为视觉和光合作用提供捕光分子，也给南瓜、胡萝卜和金丝雀羽毛上色；以及一大类**挥发性植物脂类** —— 它们经空气传播，让植物能叫来帮手、也能提醒邻居。",
      src: "A p.354, §10.3"
    },
    {
      link_en: "start with the messengers made inside the cell, because one of them is a membrane lipid you already know",
      link_cn: "先从细胞内部生成的信使说起，因为其中一个正是你已经认识的膜脂",
      recall_en: "phosphatidylinositol 4,5-bisphosphate is the −4 head group from the membrane-lipid node, the one charged enough to be picked out",
      recall_cn: "4,5-二磷酸磷脂酰肌醇就是膜脂那一节里净电荷 −4 的那个头基 —— 电荷强到可以被挑出来的那个",
      en: "**Phosphatidylinositol 4,5-bisphosphate (PIP2)** sits in the **cytoplasmic**, that is inner, face of the plasma membrane, where it serves as a reservoir of messengers waiting to be released. The cascade runs in one cut. An extracellular signal — the book's example is the hormone **vasopressin** — activates a specific **phospholipase C** in the membrane, and that enzyme hydrolyses PIP2 into **two** products whose difference is the entire design: **inositol 1,4,5-trisphosphate (IP3), which is water soluble and therefore diffuses away, and diacylglycerol, which stays in the membrane.** IP3 triggers release of Ca2+ from the endoplasmic reticulum, the cell's internal calcium store. Diacylglycerol together with that raised cytosolic Ca2+ then activates **protein kinase C** — an enzyme that phosphorylates specific proteins and so produces the cell's response. **Read the architecture rather than memorising arrows: one cut makes a mobile messenger that goes and fetches calcium and a stationary messenger that waits at the membrane for the calcium to arrive, so the kinase switches on only where and when the two halves coincide.**",
      cn: "**4,5-二磷酸磷脂酰肌醇 (PIP2)** 位于质膜的**胞质侧**（即内侧），在那里充当一个「等着被释放的信使储库」。整条级联只需要一刀。一个胞外信号 —— 书里的例子是激素**加压素 (vasopressin)** —— 激活膜上一个特定的**磷脂酶 C**，这个酶把 PIP2 水解成**两个**产物，而这两个产物的差别就是整个设计的要害：**1,4,5-三磷酸肌醇 (IP3) 可溶于水，因此扩散离开；而二酰甘油留在膜上。** IP3 触发内质网（细胞内部的钙库）释放 Ca2+。二酰甘油再与升高的胞质 Ca2+ 一起激活**蛋白激酶 C**，后者磷酸化特定蛋白，产生细胞的应答。**要读的是这个架构，而不是背箭头：一刀切出一个会跑的信使去取钙，和一个不动的信使在膜上等钙到来 —— 于是这个激酶只在两半重合的地点与时刻才被打开。**",
      src: "A p.354",
      see: [{ id: "L-12-1-1", en: "the full signalling machinery this is a piece of", cn: "这只是其中一环的完整信号转导机制" }]
    },
    {
      link_en: "two more intracellular lipid signals, and the first works by the opposite logic",
      link_cn: "还有两个细胞内脂类信号，其中第一个走的是相反的逻辑",
      en: "**Phosphatidylinositol 3,4,5-trisphosphate (PIP3) is never cut — it is recognised.** Certain signalling proteins bind specifically to PIP3 in the plasma membrane, so making PIP3 in response to an outside signal assembles multienzyme complexes at the membrane's cytosolic surface. **PIP2 is consumed and its fragments are the message; PIP3 survives and the message is that a set of proteins now has an address to gather at — a chemical signal against a physical scaffold, from the same skeleton, differing only in which inositol hydroxyls carry phosphate.** The second signal comes from the sphingolipids: “Both ceramide and sphingomyelin are potent regulators of protein kinases, and ceramide or its derivatives are involved in the regulation of cell division, differentiation, migration, and programmed cell death (also called apoptosis).” **The molecule introduced elsewhere as the structural parent of every sphingolipid turns out to have an active job of its own** — the second structural lipid on this page to do so.",
      cn: "**3,4,5-三磷酸磷脂酰肌醇 (PIP3) 从不被切开 —— 它是被「认出来」的。** 某些信号蛋白专一地结合质膜上的 PIP3，于是「响应外部信号生成 PIP3」这件事本身，就在膜的胞质面把多酶复合物组装了起来。**PIP2 被消耗掉，它的碎片就是消息；PIP3 完好无损，而消息是「一批蛋白现在有了一个集合地址」—— 一个是化学信号，一个是物理支架，出自同一个骨架，差别只在肌醇的哪些羟基带上了磷酸。** 第二个信号来自鞘脂：“**神经酰胺与鞘磷脂都是蛋白激酶的强效调节者，而神经酰胺或其衍生物参与细胞分裂、分化、迁移以及程序性细胞死亡（也叫凋亡）的调控。**” **那个在别处被当作「一切鞘脂的结构母体」介绍的分子，原来自己也有一份主动的工作** —— 这已是这一页上第二个这样的结构脂类了。",
      src: "A p.354–355, figure 10-16"
    },
    {
      link_en: "now the signals that leave the cell but do not go far",
      link_cn: "接下来是那些离开细胞、但走不远的信号",
      en: "**Eicosanoids** are “**paracrine** hormones, substances that act only on cells near the point of hormone synthesis instead of being transported in the blood to act on cells in other tissues or organs.” **That delivery model is the exact opposite of a steroid hormone's, and the contrast is the cleanest way to hold both.** Eicosanoids act in reproductive function; in the inflammation, fever and pain that follow injury or disease; in blood clotting and blood-pressure regulation; in gastric acid secretion; and in much else. Their chemistry and their name come from one place: they are made from **arachidonate, 20:4(Delta 5,8,11,14)**, and from **eicosapentaenoic acid, EPA, 20:5(Delta 5,8,11,14,17)**, “from which they take their general name (Greek *eikosi*, ‘twenty').” **So the dietary omega-6 to omega-3 balance decides which precursor is available: series 2 prostaglandins are made from arachidonate, series 3 from EPA.** Names carry both facts — a letter for the functional groups on the ring and a number for the double bonds in the chain, so **PGE2** decodes as a prostaglandin with E-type ring substitution and two double bonds.",
      cn: "**二十烷酸类 (eicosanoid)** 是“**旁分泌 (paracrine) 激素，即只作用于合成部位附近细胞的物质，而不是经血液运送去作用于其他组织或器官的细胞。**” **这种递送方式与类固醇激素恰好相反，而这个对照正是同时记住两者最干净的办法。** 二十烷酸类参与生殖功能；参与损伤或疾病之后的炎症、发热与疼痛；参与凝血与血压调节；参与胃酸分泌；以及许多别的过程。它们的化学与名字来自同一处：它们由**花生四烯酸 20:4(Delta 5,8,11,14)** 和**二十碳五烯酸 EPA 20:5(Delta 5,8,11,14,17)** 生成，“**它们的总名就取自这里（希腊语 eikosi，「二十」）。**” **于是膳食中 omega-6 与 omega-3 的比例决定了哪种前体可用：2 系列前列腺素由花生四烯酸生成，3 系列由 EPA 生成。** 命名把这两件事都带上了 —— 一个字母表示环上的官能团，一个数字表示链上的双键数，于是 **PGE2** 解码为「E 型环取代、两个双键的前列腺素」。",
      src: "A p.355",
      see: [{ id: "L-10-1-1", en: "where arachidonate and EPA come from in the diet", cn: "花生四烯酸与 EPA 在膳食中的来源" }]
    },
    {
      link_en: "and the four classes are told apart by one structural feature each",
      link_cn: "而这四类各靠一个结构特征就能分辨",
      en: "**Prostaglandins (PG)** “contain a five-carbon ring, and their name derives from the prostate gland from which they were first isolated”; the ring is made by joining C-8 and C-12 of arachidonate. Their effects are deliberately varied — some contract the smooth muscle of the uterus during menstruation and labour; some affect blood flow to particular organs, the wake-sleep cycle, and how strongly a tissue responds to hormones such as epinephrine and glucagon; and a third group raise body temperature, producing fever, and cause inflammation and pain. **Thromboxanes (TX)** “have a six-membered ring containing an ether,” built the same way with an oxygen atom added; they are made by platelets, also called thrombocytes, and act in forming a clot and cutting blood flow to it. **Leukotrienes (LT)**, first found in leukocytes, “contain three conjugated double bonds” and have no ring at all. **Lipoxins (LX)** are linear too, and “their distinguishing feature is the presence of several hydroxyl groups along the chain.” **Two ringed classes, then two linear ones — and each name records where it was first found: prostate, thrombocyte, leukocyte.**",
      cn: "**前列腺素 (PG)** “**含一个五碳环，其名字来自最初分离出它们的前列腺**”；这个环由花生四烯酸的 C-8 与 C-12 相连而成。它们的作用刻意地五花八门 —— 有的在月经和分娩时使子宫平滑肌收缩；有的影响流向特定器官的血流、影响觉醒-睡眠周期、也影响某个组织对肾上腺素和胰高血糖素这类激素的反应强度；还有一组升高体温、引起发热，并造成炎症与疼痛。**血栓烷 (TX)** “**有一个含醚的六元环**”，造法相同，只是多加了一个氧原子；它们由血小板（也叫血栓细胞）产生，作用于形成血凝块以及减少流向该处的血流。**白三烯 (LT)** 最初在白细胞中发现，“**含三个共轭双键**”，完全没有环。**脂氧素 (LX)** 也是线性的，“**其判别特征是链上带有若干个羟基**”。**两类带环，两类线性 —— 而每个名字都记着它最初是在哪里被找到的：前列腺、血栓细胞、白细胞。**",
      src: "A p.355, figure 10-17"
    },
    {
      link_en: "one enzyme in that pathway is the target of the commonest drug in the world",
      link_cn: "这条通路上的一个酶，正是世界上最常见的那种药的靶点",
      en: "Nonsteroidal anti-inflammatory drugs (NSAIDs) — aspirin, ibuprofen and meclofenamate — “inhibit the enzyme **cyclooxygenase** or COX (also called prostaglandin H2 synthase), which catalyzes an early step in the pathway from arachidonate to series 2 prostaglandins and thromboxanes,” and from EPA to the series 3 versions. **One inhibited enzyme explains two clinical effects at once: fever, inflammation and pain fall because prostaglandins fall, and clotting is affected because thromboxanes are, which is why the same tablet is both a painkiller and a blood thinner.** The leukotrienes need a different drug. Leukotriene D4, made from leukotriene A4, contracts the smooth muscle lining the airways of the lung; “overproduction of leukotrienes causes asthmatic attacks, and leukotriene synthesis is one target of antiasthmatic drugs such as prednisone.” The same contraction, at full force, is part of **anaphylactic shock**, the potentially fatal allergic reaction in people hypersensitive to bee stings, penicillin or other agents.",
      cn: "非类固醇抗炎药 (NSAID) —— 阿司匹林、布洛芬、甲氯芬那酸 —— “**抑制环氧合酶 (cyclooxygenase, COX，也叫前列腺素 H2 合酶)，该酶催化从花生四烯酸通往 2 系列前列腺素与血栓烷这条通路上的一个早期步骤**”，从 EPA 通往 3 系列产物的那条也一样。**抑制一个酶，同时解释了两种临床效果：前列腺素下来了，发热、炎症和疼痛就下来；血栓烷下来了，凝血就受影响 —— 这就是同一片药既是止痛药又是抗凝药的原因。** 白三烯则要靠另一类药。由白三烯 A4 生成的白三烯 D4 使通往肺的气道内衬平滑肌收缩；“**白三烯产生过多会引发哮喘发作，而白三烯的合成正是泼尼松等抗哮喘药的靶点之一。**” 同样的收缩若达到极端，就是**过敏性休克 (anaphylactic shock)** 的一部分 —— 对蜂蜇、青霉素或其他物质高度敏感者可能致命的那种过敏反应。",
      src: "A p.355–356",
      see: [{ id: "L-10-2-2", en: "why a steroid reaches asthma where aspirin does not", cn: "为什么类固醇管得了哮喘、而阿司匹林管不了" }]
    },
    {
      link_en: "and the fourth class explains a prescription millions of people hold",
      link_cn: "而第四类，解释了几亿人手上那一张处方",
      en: "**Lipoxins are potent ANTI-inflammatory agents** — the one class in this family that damps inflammation rather than causing it. The detail worth memorising: “Because their synthesis is stimulated by low doses (81 mg) of aspirin taken daily, this low dose is commonly prescribed for individuals with cardiovascular disease.” **Aspirin therefore has two distinct actions — inhibiting cyclooxygenase, and stimulating lipoxin synthesis — and the small daily dose is chosen for the second one, not the first.**",
      cn: "**脂氧素是强效的「抗」炎物质** —— 是这一族里唯一压制炎症、而非引发炎症的一类。值得背下来的细节：“**由于每日服用低剂量（81 mg）阿司匹林会刺激它们的合成，这个低剂量常被处方给心血管疾病患者。**” **所以阿司匹林有两个各自独立的作用 —— 抑制环氧合酶，以及刺激脂氧素合成 —— 而那个每日小剂量选的是第二个，不是第一个。**",
      src: "A p.356"
    },
    {
      link_en: "plants send signals too, and theirs travel through the air",
      link_cn: "植物也发信号，而它们的信号走空气",
      en: "Plants make thousands of volatile lipophilic compounds, used “to attract pollinators, repel herbivores, attract organisms that defend the plant against herbivores, and communicate with other plants.” **Take the third one seriously: the plant does not fight the insect itself, it advertises for a bodyguard.** The worked example is **jasmonate**, made from the 18:3(Delta 9,12,15) fatty acid of the plant's own membrane lipids, and it “triggers the plant's defenses in response to insect-inflicted damage.” **Two things make it stick. That precursor is alpha-linolenic acid — a dietary essential in humans and a wound alarm in a plant. And jasmonate's methyl ester is the characteristic fragrance of jasmine oil, so the smell people put in perfume is a plant's damage signal.** Other plant volatiles are the familiar scents: **geraniol** in geraniums, **beta-pinene** in pine trees, **limonene** in limes, and **menthol** — all “derived from fatty acids or from compounds made by the condensation of five-carbon isoprene units.”",
      cn: "植物制造成千上万种挥发性亲脂化合物，用来“**吸引传粉者、驱赶食草动物、招来能替植物对付食草动物的生物，以及与其他植物交流。**” **第三项要认真对待：植物并不亲自跟虫子打，它是在招保镖。** 书里的例子是**茉莉酸 (jasmonate)**，由植物自身膜脂中的 18:3(Delta 9,12,15) 脂肪酸生成，它“**在昆虫造成损伤时触发植物的防御。**” **有两点让它记得住。这个前体就是 α-亚麻酸 —— 在人是膳食必需脂肪酸，在植物是创伤警报。而茉莉酸的甲酯正是茉莉油的特征香气，所以人们放进香水里的那股味道，是植物的受伤信号。** 其他植物挥发物都是些熟悉的气味：天竺葵里的**香叶醇 (geraniol)**、松树里的 **β-蒎烯**、青柠里的**柠檬烯 (limonene)**，以及**薄荷醇** —— 它们全都“**由脂肪酸衍生而来，或者由五碳异戊二烯单元缩合形成的化合物衍生而来。**”",
      src: "A p.356"
    },
    {
      link_en: "the fat-soluble vitamins come next, and two of them are not really vitamins",
      link_cn: "接下来是脂溶性维生素 —— 其中两个其实算不上维生素",
      en: "Early nutritional work split the vitamins into those soluble in nonpolar organic solvents and those extractable with water, and “the fat-soluble group was resolved into the four vitamin groups A, D, E, and K, all of which are **isoprenoid** compounds synthesized by the condensation of multiple isoprene units.” Two of the four, **D and A, are hormone precursors** rather than cofactors. **Vitamin D3, cholecalciferol, takes three steps in three organs and is inactive until the last of them.** The **skin** makes it from **7-dehydrocholesterol** — a cholesterol derivative already present there — in a photochemical reaction driven by the ultraviolet component of sunlight. “**Vitamin D3 is not itself biologically active**”: the **liver** adds a hydroxyl at C-25, and the **kidney** adds a second at C-1, giving **1-alpha,25-dihydroxyvitamin D3, calcitriol** — the hormone that regulates calcium uptake in the intestine and calcium levels in kidney and bone, acting through specific receptor proteins in the nucleus. Deficiency gives defective bone formation and **rickets**, which vitamin D cures dramatically. **Vitamin D2, ergocalciferol**, is a commercial product made by ultraviolet irradiation of the ergosterol of yeast, differs only slightly in the side chain, has the same biological effects, and is what is added to milk and butter. **So the answer to why sunlight matters for bone runs skin, liver, kidney, nucleus.**",
      cn: "早期营养学研究把维生素分成溶于非极性有机溶剂的和可用水提取的两类，而“**脂溶性那一组又分解为 A、D、E、K 四个维生素族，它们全都是由多个异戊二烯单元缩合而成的异戊二烯类化合物。**” 四个当中有两个 —— **D 与 A —— 是激素前体**，而非辅因子。**维生素 D3（胆钙化醇）要走三步、经三个器官，而在最后一步之前它是无活性的。** **皮肤**在阳光紫外线驱动的光化学反应中，由 7-脱氢胆固醇造出它。“**维生素 D3 本身没有生物活性**”：**肝脏**在 C-25 上加一个羟基，**肾脏**在 C-1 上再加一个，得到 **1α,25-二羟基维生素 D3，即骨化三醇 (calcitriol)** —— 这个激素通过细胞核内特定的受体蛋白，调节肠道对钙的吸收以及肾与骨中的钙水平。缺乏会导致骨形成缺陷和**佝偻病**，而补充维生素 D 有戏剧性的疗效。**维生素 D2（麦角钙化醇）**是商业产品，由紫外线照射酵母的麦角甾醇制得，仅在侧链上略有不同，生物效应相同，也正是被添加进牛奶和黄油里的那一种。**所以「为什么晒太阳对骨头重要」的答案是：皮肤 → 肝 → 肾 → 细胞核。**",
      src: "A p.356–357"
    },
    {
      link_en: "the other hormone precursor splits into two products that do completely unrelated jobs",
      link_cn: "另一个激素前体分成两个产物，而这两个产物干的是完全不相干的活",
      en: "**Vitamin A1, all-trans-retinol**, and its oxidised metabolites **retinoic acid** and **retinal** “act in the processes of development, cell growth and differentiation, and vision.” **Route one is a hormone.** Vitamin A1 or beta-carotene from the diet is converted enzymatically to all-trans-retinoic acid, “a retinoid hormone that acts through a family of nuclear receptor proteins (RAR, RXR, PPAR) to regulate gene expression central to embryonic development, stem cell differentiation, and cell proliferation.” Its medicine follows directly: all-trans-retinoic acid treats certain leukaemias and is the active ingredient of tretinoin, Retin-A, used for severe acne and wrinkled skin. **Route two is vision.** In the vertebrate eye, retinal bound to the protein **opsin** forms the photoreceptor pigment **rhodopsin**, and “the photochemical conversion of 11-cis-retinal to all-trans-retinal is the fundamental event in vision.” **A change in the shape of one double bond, driven by a photon, is where seeing begins.** Unlike most vitamins, vitamin A can be stored for some time, mainly as its ester with palmitic acid, in the liver; it was first isolated from fish liver oils, and eggs, whole milk and butter are good sources. The other source is beta-carotene, whose **symmetric cleavage yields two molecules of all-trans-retinal**.",
      cn: "**维生素 A1（全反式视黄醇）**及其氧化代谢产物**视黄酸 (retinoic acid)** 与**视黄醛 (retinal)** “**作用于发育、细胞生长与分化，以及视觉等过程。**” **第一条路线是激素。** 膳食中的维生素 A1 或 β-胡萝卜素经酶转化为全反式视黄酸，“**一种类视黄醇激素，通过一族核受体蛋白（RAR、RXR、PPAR）调控对胚胎发育、干细胞分化和细胞增殖至关重要的基因表达。**” 它的医学用途直接由此而来：全反式视黄酸用于治疗某些白血病，也是治疗重度痤疮和皮肤皱纹的药物维 A 酸（tretinoin，Retin-A）的活性成分。**第二条路线是视觉。** 在脊椎动物眼中，视黄醛与蛋白 **opsin（视蛋白）**结合形成光感受色素**视紫红质 (rhodopsin)**，而“**11-顺式视黄醛向全反式视黄醛的光化学转变，是视觉的根本事件。**” **由一个光子驱动的、一个双键形状的改变，就是「看见」的起点。** 与多数维生素不同，维生素 A 能在体内储存一段时间，主要以与棕榈酸形成的酯的形式存于肝脏；它最早从鱼肝油中分离得到，蛋、全脂牛奶和黄油也是良好来源。另一个来源是 β-胡萝卜素，其**对称裂解产生两分子全反式视黄醛**。",
      src: "A p.357, figure 10-20"
    },
    {
      link_en: "and the deficiency numbers are worth quoting exactly, because they turn all of that into public health",
      link_cn: "而缺乏症的数字值得一字不差地引用，因为它把上面这一切变成了公共卫生问题",
      recall_en: "night blindness follows straight from the retinal-rhodopsin mechanism one step up",
      recall_cn: "夜盲直接来自上一步的视黄醛-视紫红质机制",
      en: "Vitamin A deficiency in a pregnant woman can cause congenital malformations and growth retardation in the infant; in an adult the vitamin is essential to vision, immunity and reproduction. Deficiency dries the skin, eyes and mucous membranes and produces **night blindness**, “an early symptom commonly used in diagnosing vitamin A deficiency” — **and it is early precisely because the rod cells, which run on rhodopsin, fail first.** The scale: worldwide more than 250 million children and pregnant women suffer vitamin A deficiency; it causes at least 250,000 cases of irreversible blindness in children each year; **half of those children die within a year of losing their sight**; and the deficiency is particularly prevalent where rice is a staple food. The intervention answers a question the biology itself raises. **Rice has the whole enzymatic machinery for making beta-carotene in its leaves, but those enzymes are much less active in the grain — the plant is not missing a pathway, it is missing the pathway in the tissue people eat.** Introducing **two** genes gave golden rice, whose grains are enriched in beta-carotene and take on its yellow colour.",
      cn: "孕妇缺乏维生素 A 会导致婴儿先天畸形与生长迟缓；对成人来说，这个维生素对视觉、免疫和生殖都不可缺少。缺乏使皮肤、眼睛与黏膜干燥，并造成**夜盲**，“**这是诊断维生素 A 缺乏时常用的早期症状**” —— **而它之所以「早」，恰恰因为靠视紫红质工作的视杆细胞最先失灵。** 规模：全球有超过 **2.5 亿**儿童与孕妇处于维生素 A 缺乏状态；它每年在儿童中造成至少 **25 万**例不可逆失明；**这些失明儿童中有一半在失明后一年内死亡**；而这种缺乏在以稻米为主食的地区尤为普遍。干预措施回答的正是生物学本身提出的一个问题。**水稻在叶子里拥有制造 β-胡萝卜素的全套酶系，但这些酶在谷粒中活性低得多 —— 这株植物缺的并不是一条通路，而是「在人吃的那个组织里」缺这条通路。** 引入**两个**基因就得到了黄金大米，其谷粒富含 β-胡萝卜素，并因此呈现胡萝卜素的黄色。",
      src: "A p.357–358, figure 10-21"
    },
    {
      link_en: "the other two fat-soluble vitamins are cofactors, and each one is a redox cycle of an aromatic ring",
      link_cn: "另外两个脂溶性维生素是辅因子，而各自的机制都是一个芳香环的氧化还原循环",
      recall_en: "the chemistry vitamin E blocks is the same oxidative cleavage that makes a cooking oil go rancid, met inside a membrane instead of in a pan",
      recall_cn: "维生素 E 挡下的化学，就是让食用油酸败的那种氧化断裂 —— 只是发生在膜里，而不是在锅里",
      en: "**Vitamin E** is the collective name for the **tocopherols**, each a substituted aromatic ring carrying a long isoprenoid side chain. Being hydrophobic they sit in cell membranes, lipid deposits and blood lipoproteins — **which is exactly where the damage they prevent happens**. The mechanism: tocopherols are biological **antioxidants**, and “the aromatic ring reacts with and destroys the most reactive forms of oxygen radicals and other free radicals, protecting unsaturated fatty acids from oxidation and preventing oxidative damage to membrane lipids, which can cause cell fragility.” Tocopherols are found in eggs and vegetable oils and are especially abundant in wheat germ; laboratory animals depleted of vitamin E develop scaly skin, muscular weakness and wasting, and sterility. **Human deficiency is very rare, and its principal sign is fragile erythrocytes — which is the prediction the mechanism makes, since a red blood cell is little more than a membrane.**",
      cn: "**维生素 E** 是**生育酚 (tocopherol)** 的总称，每一个都是一个带长异戊二烯侧链的取代芳香环。由于疏水，它们待在细胞膜、脂类沉积和血液脂蛋白里 —— **而它们要防的损伤恰恰就发生在这些地方**。机制：生育酚是生物**抗氧化剂**，“**其芳香环与最活泼的那些氧自由基及其他自由基反应并将其摧毁，从而保护不饱和脂肪酸不被氧化，防止膜脂受到氧化损伤 —— 后者会导致细胞变脆。**” 生育酚见于蛋和植物油，在麦胚中尤其丰富；实验动物在缺乏维生素 E 的饲料上会出现皮肤鳞屑、肌肉无力与消瘦，以及不育。**人的缺乏症非常罕见，其主要表现是红细胞变脆 —— 而这正是该机制所作出的预测，因为红细胞几乎就只是一张膜。**",
      src: "A p.359"
    },
    {
      link_en: "the fourth one runs its redox cycle on a protein instead of on a lipid, and a rat poison blocks it",
      link_cn: "第四个把氧化还原循环用在蛋白上而不是脂类上 —— 而一种鼠药正好挡住它",
      en: "The aromatic ring of **vitamin K** “undergoes a cycle of oxidation and reduction during the formation of active **prothrombin**, a blood plasma protein essential in blood clotting.” Prothrombin is a proteolytic enzyme that splits peptide bonds in fibrinogen, converting it to **fibrin**, the insoluble fibrous protein that holds a clot together. Deficiency therefore slows clotting; it is extremely uncommon in humans except in a small percentage of infants with **haemorrhagic disease of the newborn**, a potentially fatal disorder — **which is why newborns in the United States are routinely given a 1 mg injection of vitamin K**. Two sources: **vitamin K1, phylloquinone**, from green plant leaves, and **vitamin K2, menaquinone**, made by **bacteria living in the vertebrate intestine**. And the drug: **warfarin** is a synthetic compound that inhibits the formation of active prothrombin. It is particularly poisonous to rats, killing them by internal bleeding — and “ironically, this potent rodenticide is also an invaluable anticoagulant drug for treating humans at risk for excessive blood clotting,” such as surgical patients and people with coronary thrombosis.",
      cn: "**维生素 K** 的芳香环“**在活性凝血酶原 (prothrombin) 形成过程中经历一个氧化与还原的循环** —— 凝血酶原是一种对凝血必不可少的血浆蛋白。”凝血酶原是一种蛋白水解酶，它切开纤维蛋白原中的肽键，把它转变为**纤维蛋白 (fibrin)** —— 那种把血凝块维系在一起的不溶性纤维状蛋白。因此缺乏维生素 K 会使凝血变慢；这在人类中极为罕见，除了少数患**新生儿出血症**的婴儿 —— 这是一种可能致命的疾病，**这也正是美国的新生儿常规接受一针 1 mg 维生素 K 注射的原因**。两个来源：**维生素 K1（叶绿醌）**来自绿色植物叶片，**维生素 K2（甲基萘醌）**由**生活在脊椎动物肠道里的细菌**产生。至于药物：**华法林 (warfarin)** 是一种抑制活性凝血酶原形成的合成化合物。它对大鼠尤其毒，靠内出血致死 —— 而“**具有讽刺意味的是，这种强效灭鼠剂同时也是治疗有过度凝血风险者的宝贵抗凝药**”，例如外科手术患者和冠状动脉血栓患者。",
      src: "A p.359"
    },
    {
      link_en: "two more isoprenoid cofactors, one carrying electrons and one carrying sugars",
      link_cn: "还有两个异戊二烯类辅因子，一个搬电子，一个搬糖",
      en: "**Ubiquinone**, also called coenzyme Q, and **plastoquinone** “are isoprenoids that function as lipophilic electron carriers in the oxidation-reduction reactions that drive ATP synthesis in mitochondria and chloroplasts, respectively.” The property that matters is that each can accept **either one or two electrons and either one or two protons** — **which is what lets one of them sit between a two-electron donor and a one-electron acceptor and pass the electrons on singly.** **Dolichols** use the same isoprenoid chemistry for a different job: when bacterial cell-wall carbohydrates are assembled, and when sugar units are added to eukaryotic glycoproteins and glycolipids, “the sugar units to be added are chemically activated by attachment to isoprenoid alcohols called dolichols,” whose strong hydrophobic interactions with membrane lipids also **anchor** the attached sugar at the membrane where the transfer happens. **So a dolichol is an activating group and a mooring at the same time.** Two numbers, with the organism attached, because different sources count differently: in most mammalian tissues ubiquinone has **10** isoprene units; animal dolichols have **17 to 21** (85 to 105 carbon atoms), bacterial ones 11, and those of plants and fungi 14 to 24.",
      cn: "**泛醌 (ubiquinone)**（也叫辅酶 Q）与**质体醌 (plastoquinone)** “**是异戊二烯类化合物，分别在驱动线粒体和叶绿体中 ATP 合成的氧化还原反应里充当亲脂性电子载体。**” 要紧的性质是：它们各自都能接受**一个或两个电子、以及一个或两个质子** —— **正因如此，它们才能夹在「一次给两个电子的供体」和「一次只收一个电子的受体」之间，把电子一个一个传下去。** **多萜醇 (dolichol)** 用同样的异戊二烯化学做另一件事：在组装细菌细胞壁糖类时，以及在给真核生物的糖蛋白与糖脂添加糖单元时，“**待添加的糖单元通过连接到称为多萜醇的异戊二烯醇上而被化学活化**”，而多萜醇与膜脂之间强烈的疏水相互作用同时把这个糖**锚定**在发生转移的那张膜上。**所以多萜醇既是活化基团，也是系缆桩。** 两个数字，并注明生物类别，因为不同来源数的东西不一样：大多数哺乳动物组织里泛醌有 **10** 个异戊二烯单元；动物的多萜醇有 **17 到 21** 个（85 到 105 个碳），细菌的 11 个，植物与真菌的 14 到 24 个。",
      src: "A p.360, figure 10-22",
      see: [{ id: "L-19-1-1", en: "ubiquinone at work in the respiratory chain", cn: "泛醌在呼吸链中的实际工作" }]
    },
    {
      link_en: "and the last two classes: the ones you can see, and the ones in the pharmacy",
      link_cn: "最后两类：看得见的那些，和药房里的那些",
      en: "**Conjugated dienes** “have carbon chains with alternating single and double bonds,” and “because this structural arrangement allows the delocalization of electrons, the compounds can be excited by low-energy electromagnetic radiation (visible light), giving them colors visible to humans and other animals.” **Alternating bonds let electrons spread along the chain, which makes the energy gap small enough for visible light to lift them — so the molecule has a colour.** Carotene is yellow-orange; canthaxanthin is bright red and zeaxanthin bright yellow. One consequence worth keeping: **birds get the pigments that colour their feathers by eating plant material containing carotenoids, and “the differences in pigmentation between male and female birds are the result of differences in intestinal uptake and processing of carotenoids” — a sexual ornament that is, at bottom, a difference in gut chemistry.** The section closes on **polyketides**, lipids built by Claisen condensations, the same chemical logic as fatty acid synthesis. They are **secondary metabolites** — “compounds that are not central to an organism's metabolism but serve some subsidiary function that gives the organism an advantage in some ecological niche” — and many are drugs: **erythromycin** as an antibiotic, **amphotericin B** as an antifungal, **lovastatin** as an inhibitor of cholesterol synthesis.",
      cn: "**共轭二烯**“**的碳链上单键与双键交替**”，而“**由于这种结构排列允许电子离域，这类化合物可以被低能量的电磁辐射（可见光）激发，从而对人和其他动物呈现出颜色。**” **交替的键让电子沿着链摊开，能级差因而小到可见光就能把它们抬起来 —— 于是这个分子有了颜色。** 胡萝卜素是黄橙色；角黄素 (canthaxanthin) 鲜红，玉米黄质 (zeaxanthin) 鲜黄。有一个后果值得记住：**鸟类是靠吃含类胡萝卜素的植物材料获得羽毛色素的，而“雄鸟与雌鸟色斑上的差别，源自它们在肠道吸收和处理类胡萝卜素方式上的差别”—— 一种性装饰，归根到底是肠道化学上的差别。** 本节以**聚酮 (polyketide)** 收尾：这类脂由 Claisen 缩合搭成，与脂肪酸合成是同一套化学逻辑。它们是**次级代谢物** —— “**并非某个生物体代谢核心的化合物，但承担某种辅助功能，使该生物在某个生态位中占优势**” —— 其中许多是药物：**红霉素**作为抗生素，**两性霉素 B** 作为抗真菌药，**洛伐他汀**作为胆固醇合成的抑制剂。",
      src: "A p.360, figure 10-23"
    }
  ],
  terms: [
    { en: "phosphatidylinositol 4,5-bisphosphate", cn: "4,5-二磷酸磷脂酰肌醇 (PIP2)",
      def_en: "A membrane phospholipid in the cytoplasmic face of the plasma membrane, held there as a reservoir of messengers. A specific phospholipase C, switched on by an extracellular signal such as vasopressin, cuts it into water-soluble IP3 and membrane-retained diacylglycerol.",
      def_cn: "位于质膜胞质侧的一种膜磷脂，作为信使储库存放在那里。一个特定的磷脂酶 C 在加压素这类胞外信号的激活下，把它切成可溶于水的 IP3 与留在膜上的二酰甘油。" },
    { en: "IP3 and diacylglycerol", cn: "IP3 与二酰甘油",
      def_en: "The two halves produced by one cut, and their difference is the design: inositol 1,4,5-trisphosphate dissolves and diffuses off to release Ca2+ from the endoplasmic reticulum, while diacylglycerol stays put. The stationary half plus the returning calcium is what switches protein kinase C on, so the kinase fires only where both coincide.",
      def_cn: "一刀切出的两半，而它们的差别就是整个设计：1,4,5-三磷酸肌醇溶于水、扩散离开，去让内质网释放 Ca2+；二酰甘油则原地不动。不动的那一半加上回来的钙，才把蛋白激酶 C 打开 —— 于是激酶只在两者重合处点火。" },
    { en: "PIP3 as a nucleation point", cn: "作为成核位点的 PIP3",
      def_en: "Phosphatidylinositol 3,4,5-trisphosphate is recognised rather than cleaved: certain signalling proteins bind it specifically, so making it assembles multienzyme complexes at the cytosolic surface of the plasma membrane. A physical address, where PIP2 is a chemical message.",
      def_cn: "3,4,5-三磷酸磷脂酰肌醇是被识别的，而不是被切开的：某些信号蛋白专一地结合它，于是生成它这件事就在质膜胞质面把多酶复合物组装起来。它是一个物理地址，而 PIP2 是一条化学消息。" },
    { en: "paracrine hormone", cn: "旁分泌激素",
      def_en: "A substance acting only on cells near where it was made, instead of being carried in the blood to other tissues or organs. This is what an eicosanoid is, and it is the exact opposite of how a steroid hormone is delivered.",
      def_cn: "只作用于其生成部位附近细胞的物质，而不是经血液运往其他组织或器官。二十烷酸类就是这样的东西 —— 而这与类固醇激素的递送方式恰好相反。" },
    { en: "the four eicosanoid classes", cn: "二十烷酸类的四个类别",
      def_en: "Prostaglandins carry a five-carbon ring made by joining C-8 and C-12 of arachidonate, and are named for the prostate gland. Thromboxanes carry a six-membered ring containing an ether, built the same way with an oxygen added, and come from platelets. Leukotrienes are linear with three conjugated double bonds, first found in leukocytes. Lipoxins are linear with several hydroxyls along the chain, and are anti-inflammatory.",
      def_cn: "前列腺素带一个由花生四烯酸 C-8 与 C-12 相连而成的五碳环，名字来自前列腺。血栓烷带一个含醚的六元环，造法相同只是多加一个氧，来自血小板。白三烯是线性的、带三个共轭双键，最初在白细胞中发现。脂氧素也是线性的、链上带若干羟基，并且是抗炎的。" },
    { en: "cyclooxygenase", cn: "环氧合酶 (COX)",
      def_en: "Also called prostaglandin H2 synthase, it catalyses an early step from arachidonate to the series 2 prostaglandins and thromboxanes. Aspirin, ibuprofen and meclofenamate inhibit it — one enzyme, which is why a single tablet is both an analgesic and an anticlotting agent.",
      def_cn: "也叫前列腺素 H2 合酶，催化从花生四烯酸通往 2 系列前列腺素与血栓烷的一个早期步骤。阿司匹林、布洛芬、甲氯芬那酸都抑制它 —— 只是一个酶，而这就是同一片药既止痛又抗凝的原因。" },
    { en: "low-dose aspirin and the lipoxins", cn: "小剂量阿司匹林与脂氧素",
      def_en: "Lipoxin synthesis is stimulated by low daily doses of aspirin, 81 mg, which is why that dose is prescribed for people with cardiovascular disease. Aspirin therefore has two separate actions, and the small dose is chosen for the anti-inflammatory one rather than for enzyme inhibition.",
      def_cn: "脂氧素的合成由每日 81 mg 的小剂量阿司匹林所刺激 —— 这就是心血管疾病患者被处方这个剂量的原因。阿司匹林因此有两个各自独立的作用，而小剂量选的是抗炎的那一个，而不是抑酶的那一个。" },
    { en: "jasmonate", cn: "茉莉酸",
      def_en: "A plant signal made from the 18:3(Delta 9,12,15) fatty acid of the plant's own membrane lipids, triggering its defences in response to insect damage. Its methyl ester is the characteristic fragrance of jasmine oil, so a perfume ingredient is a plant's wound alarm. The precursor is alpha-linolenic acid, a dietary essential in humans.",
      def_cn: "由植物自身膜脂中的 18:3(Delta 9,12,15) 脂肪酸生成的植物信号，在昆虫造成损伤时触发防御。它的甲酯就是茉莉油的特征香气 —— 于是一种香水原料其实是植物的创伤警报。它的前体是 α-亚麻酸，在人是膳食必需脂肪酸。" },
    { en: "calcitriol", cn: "骨化三醇",
      def_en: "The active hormone made in three steps in three organs: ultraviolet light on 7-dehydrocholesterol in the skin gives cholecalciferol, the liver hydroxylates C-25, the kidney hydroxylates C-1. Cholecalciferol itself is inactive. Calcitriol regulates calcium uptake in the intestine and calcium levels in kidney and bone, through nuclear receptor proteins.",
      def_cn: "分三步、经三个器官生成的活性激素：紫外线作用于皮肤中的 7-脱氢胆固醇生成胆钙化醇，肝脏在 C-25 上加羟基，肾脏在 C-1 上加羟基。胆钙化醇本身无活性。骨化三醇通过核受体蛋白调节肠道对钙的吸收以及肾与骨中的钙水平。" },
    { en: "rhodopsin", cn: "视紫红质",
      def_en: "Retinal bound to the protein opsin in the vertebrate eye, forming the photoreceptor pigment. The photochemical conversion of 11-cis-retinal to all-trans-retinal is the fundamental event in vision, and it is why night blindness is the early sign of vitamin A deficiency — the rod cells fail first.",
      def_cn: "脊椎动物眼中视黄醛与蛋白 opsin 结合形成的光感受色素。11-顺式视黄醛向全反式视黄醛的光化学转变是视觉的根本事件；这也是为什么夜盲是维生素 A 缺乏的早期表现 —— 视杆细胞最先失灵。" },
    { en: "tocopherol", cn: "生育酚",
      def_en: "The collective name for vitamin E, each one a substituted aromatic ring with a long isoprenoid side chain. Being hydrophobic they sit in membranes, lipid deposits and blood lipoproteins, and the aromatic ring reacts with and destroys the most reactive oxygen radicals — protecting unsaturated fatty acids from the same oxidation that makes a cooking oil go rancid. Human deficiency is rare and shows as fragile red blood cells.",
      def_cn: "维生素 E 的总称，每一个都是带长异戊二烯侧链的取代芳香环。由于疏水，它们待在膜、脂类沉积和血液脂蛋白中，而其芳香环与最活泼的氧自由基反应并将其摧毁 —— 保护不饱和脂肪酸不被氧化，也就是挡下让食用油酸败的那种氧化。人的缺乏症罕见，表现为红细胞变脆。" },
    { en: "warfarin", cn: "华法林",
      def_en: "A synthetic compound that inhibits the formation of active prothrombin and so blocks what vitamin K's redox cycle contributes to clotting. It is particularly poisonous to rats, killing by internal bleeding — and the same molecule is an invaluable anticoagulant for people at risk of excessive clotting.",
      def_cn: "一种抑制活性凝血酶原形成的合成化合物，因而阻断维生素 K 的氧化还原循环对凝血的贡献。它对大鼠尤其毒，靠内出血致死 —— 而同一个分子对有过度凝血风险的人来说是宝贵的抗凝药。" },
    { en: "dolichol", cn: "多萜醇",
      def_en: "An isoprenoid alcohol to which a sugar unit is attached so as to be chemically activated before transfer — during assembly of bacterial cell-wall carbohydrates and during glycosylation in eukaryotes. Its strong hydrophobic interaction with membrane lipids also moors the attached sugar at the membrane where the transfer happens.",
      def_cn: "一种异戊二烯醇，糖单元先连到它上面而获得化学活化，然后再被转移 —— 用于细菌细胞壁糖类的组装以及真核生物的糖基化。它与膜脂之间强烈的疏水相互作用，还把这个糖系泊在发生转移的那张膜上。" },
    { en: "conjugated diene", cn: "共轭二烯",
      def_en: "A carbon chain with alternating single and double bonds. The arrangement lets electrons delocalise along the chain, so the energy needed to excite them drops into the visible range — which is why these molecules have colours people and animals can see.",
      def_cn: "单键与双键交替的碳链。这种排列让电子沿链离域，激发它们所需的能量因而落进可见光范围 —— 这就是这类分子对人和动物呈现颜色的原因。" },
    { en: "polyketide", cn: "聚酮",
      def_en: "A diverse group of lipids built by Claisen condensations, the same chemical logic as fatty acid synthesis. They are secondary metabolites — not central to metabolism, but giving an advantage in some ecological niche — and many are medicines: erythromycin an antibiotic, amphotericin B an antifungal, lovastatin an inhibitor of cholesterol synthesis.",
      def_cn: "由 Claisen 缩合搭成的一大类各式各样的脂，化学逻辑与脂肪酸合成相同。它们是次级代谢物 —— 并非代谢的核心，却在某个生态位中带来优势 —— 其中许多是药物：红霉素是抗生素，两性霉素 B 是抗真菌药，洛伐他汀是胆固醇合成抑制剂。" }
  ]
};

/* ================================================================ L-10-4-1 ===
   The thread: a lipid is defined by being insoluble in water, so every method
   here exploits one physical property — solubility, then polarity, then
   volatility, then mass — and where ranking fails, the molecule gets cut. */
window.BIOLITE_SPINE["L-10-4-1"] = {
  assumed: [
    "lipid", "water", "solvent", "solubility", "polarity", "polar", "nonpolar",
    "charge", "hydrogen bond", "protein", "carbohydrate", "sugar", "fatty acid",
    "glycerol", "ester", "amide", "hydrolysis", "enzyme", "membrane", "tissue",
    "cell", "column", "mass", "ion", "double bond", "chain length", "unsaturation",
    "cis", "trans", "triacylglycerol", "phospholipid", "sphingolipid",
    "glycerophospholipid", "diacylglycerol", "phosphatidylcholine", "cerebroside",
    "cholesterol", "hormone", "cancer", "drug", "hydrophobic effect"
  ],
  nodeTitle_en: "Working with lipids",
  nodeTitle_cn: "脂类的实验操作",
  title_en: "Each method exploits one physical property — solubility, polarity, volatility, mass — and where ranking fails, the molecule gets cut",
  title_cn: "每一种方法各利用一个物理性质 —— 溶解性、极性、挥发性、质量 —— 而排序不管用时，就把分子切开",
  steps: [
    {
      en: "The methods follow straight from the definition of the class: “Because lipids are insoluble in water, their extraction and subsequent fractionation require the use of organic solvents and some techniques not commonly used in the purification of water-soluble molecules such as proteins and carbohydrates.” **There are only two moves in the whole section.** One: “in general, complex mixtures of lipids are separated by differences in polarity or solubility in nonpolar solvents” — every separation here ranks lipids on one axis, from neutral to charged. Two: “lipids that contain ester- or amide-linked fatty acids can be hydrolyzed by treatment with acid or alkali or with specific hydrolytic enzymes (phospholipases, glycosidases) to yield their components for analysis” — **where ranking a whole molecule is not enough, cut it into pieces that rank differently.**",
      cn: "这些方法直接来自这一类物质的定义：“**由于脂类不溶于水，对它们的抽提和随后的分级需要使用有机溶剂，以及一些在纯化蛋白质、糖类等水溶性分子时并不常用的技术。**” **整节只有两个动作。** 其一：“**一般来说，复杂的脂类混合物是按极性差异、或在非极性溶剂中溶解度的差异来分离的**” —— 这里每一种分离都把脂类排在同一根轴上，从中性排到带电。其二：“**含酯连或酰胺连脂肪酸的脂类，可以用酸、碱处理，或用特异的水解酶（磷脂酶、糖苷酶）水解，得到其组分供分析**” —— **当给整个分子排序不够用时，就把它切成排序方式不同的碎片。**",
      src: "A p.361, §10.4, figure 10-25"
    },
    {
      link_en: "start with getting the lipids out of the tissue, and note that different lipids need different solvents",
      link_cn: "先说怎么把脂类从组织里弄出来 —— 注意不同的脂类需要不同的溶剂",
      en: "Neutral lipids — triacylglycerols, waxes, pigments — “are readily extracted from tissues with ethyl ether, chloroform, or benzene, solvents that do not permit lipid clustering driven by the hydrophobic effect.” Membrane lipids need more, and the reason is worth reading twice: they “are more effectively extracted by more polar organic solvents, such as ethanol or methanol, **which reduce the hydrophobic interactions among lipid molecules while also weakening the hydrogen bonds and electrostatic interactions that bind membrane lipids to membrane proteins**.” **A membrane lipid is held by two different grips — by other lipids and by proteins — and both have to be released before it will come out.**",
      cn: "中性脂类 —— 三酰甘油、蜡、色素 —— “**很容易用乙醚、氯仿或苯从组织中抽提出来，这些溶剂不允许由疏水效应驱动的脂类聚集。**”膜脂需要的更多，而原因值得读两遍：它们“**用极性更强的有机溶剂（如乙醇或甲醇）抽提更有效，这类溶剂在降低脂类分子之间疏水相互作用的同时，也削弱把膜脂结合在膜蛋白上的氢键和静电相互作用。**” **一个膜脂被两种不同的手抓着 —— 被别的脂类抓着，也被蛋白抓着 —— 两只手都得松开，它才出得来。**",
      src: "A p.361"
    },
    {
      link_en: "and the standard recipe does two opposite things with one set of solvents",
      link_cn: "而标准配方用同一套溶剂做了两件相反的事",
      en: "The common extractant is chloroform, methanol and water, “initially in volume proportions (**1:2:0.8**) that are **miscible**, producing a **single** phase.” Tissue is homogenised in that one phase, so every lipid dissolves at once. **Then more water is added and the mixture splits into two layers: methanol/water on top, chloroform below. “The lipids remain in the chloroform layer, and the more polar molecules such as proteins and sugars partition into the methanol/water layer.”** **One solvent system used twice — first as a universal solvent, then, after a deliberate change in composition, as the separation itself.**",
      cn: "常用的抽提剂是氯仿、甲醇和水，“**最初按体积比 1:2:0.8 混合，此时三者互溶，形成单一相。**”组织在这一个相里匀浆，于是所有脂类一次性溶解。**随后再加水，混合物分成两层：上层是甲醇／水，下层是氯仿。“脂类留在氯仿层里，而蛋白质和糖这类更极性的分子则分配进甲醇／水层。”** **同一套溶剂体系被用了两次 —— 先当万能溶剂，再经一次刻意的组成改变，本身变成了分离手段。**",
      src: "A p.361"
    },
    {
      link_en: "now sort what is in the chloroform, and the sorting principle is one sentence about a solid",
      link_cn: "接着把氯仿层里的东西分开 —— 而分离原理只是关于一种固体的一句话",
      en: "In adsorption chromatography, “an insoluble, polar material such as **silica gel** (a form of silicic acid, Si(OH)4) is packed into a glass column,” and the lipid mixture in chloroform is applied at the top. What follows is a straight competition for that polar surface: “**the polar lipids bind tightly to the polar silicic acid, but the neutral lipids pass directly through the column and emerge in the first chloroform wash.**” The bound ones are then eluted “in order of increasing polarity, by washing the column with solvents of progressively higher polarity” — **acetone** brings off uncharged but polar lipids such as cerebrosides, **methanol** brings off very polar or charged ones such as the glycerophospholipids. **The elution order is a readout of head-group chemistry: a cerebroside carries sugars and no charge, a glycerophospholipid carries a charged phosphodiester, and the column ranks them in exactly that order.** HPLC is the same principle in a column of smaller particles with the solvent forced through under pressure, and it is good enough to separate phosphatidylserine, phosphatidylglycerol and phosphatidylinositol — **three lipids that differ only in which alcohol sits on the phosphate.**",
      cn: "在吸附层析中，“**一种不溶的极性材料，例如硅胶（silica gel，硅酸 Si(OH)4 的一种形式），被装进玻璃柱**”，脂类混合物溶在氯仿里从柱顶加入。接下来是对这个极性表面的一场直接竞争：“**极性脂类紧紧结合在极性的硅酸上，而中性脂类径直穿过柱子，在第一次氯仿洗脱中就流出来。**”结合住的那些随后“**按极性递增的顺序、用极性逐步升高的溶剂洗脱下来**” —— **丙酮**洗下不带电但极性的脂类（如脑苷脂），**甲醇**洗下极性很强或带电的脂类（如甘油磷脂）。**洗脱顺序就是头基化学的读出：脑苷脂带糖而不带电，甘油磷脂带一个带电的磷酸二酯 —— 柱子给出的排序恰好如此。** HPLC 是同一原理，只是柱料颗粒更小、溶剂在高压下被推过去；它的分辨率足以分开磷脂酰丝氨酸、磷脂酰甘油和磷脂酰肌醇 —— **这三个脂类之间的差别，仅仅是磷酸上坐着哪一个醇。**",
      src: "A p.362"
    },
    {
      link_en: "the same adsorption run flat on a plate, where the direction of travel surprises people",
      link_cn: "同样的吸附，摊平在一块板上做 —— 而移动方向常常出人意料",
      en: "Thin-layer chromatography spreads silica gel in a thin layer on a glass plate, puts a small sample near one edge, and stands the plate in a shallow layer of organic solvent inside a chamber saturated with that solvent's vapour. “As the solvent rises on the plate by capillary action, it carries lipids with it. **The less polar lipids move farthest, as they have less tendency to bind to the silicic acid.**” **So on a plate, distance travelled is inverse polarity — the same fact as the column, where the polar lipids were the ones that stayed behind, stated the other way round.** Two detection reagents, and they report different things: spraying with **rhodamine**, a dye that fluoresces when associated with lipids, shows where lipid is at all; exposing the plate to **iodine fumes** shows unsaturation specifically, since “iodine reacts reversibly with the double bonds in fatty acids, such that lipids containing unsaturated fatty acids develop a yellow or brown color.” **One spray tells you where the lipids are, the other tells you which of them have double bonds.** The method is preparative as well: a band can be scraped off the plate and the lipid recovered by extraction.",
      cn: "薄层层析把硅胶铺成薄薄一层贴在玻璃板上，在靠近一边处点上少量样品，再把板立在浅浅一层有机溶剂里，整套装置封在被该溶剂蒸气饱和的槽中。“**溶剂靠毛细作用沿板上升，把脂类一起带上去。极性较小的脂类走得最远，因为它们与硅酸结合的倾向更小。**” **所以在板上，走得远近与极性成反比 —— 这和柱子上「极性脂类被留下」是同一个事实的另一种说法。** 两种显色试剂，报告的是不同的东西：喷**罗丹明 (rhodamine)** —— 一种与脂类结合时会发荧光的染料 —— 显示的是「哪里有脂」；把板暴露在**碘蒸气**中，显示的则专门是不饱和度，因为“**碘与脂肪酸中的双键可逆地反应，于是含不饱和脂肪酸的脂类会显出黄色或棕色。**” **一种喷雾告诉你脂在哪儿，另一种告诉你其中哪些带双键。** 这个方法也可用于制备：把一条带从板上刮下来，再用溶剂把脂抽提回来。",
      src: "A p.362"
    },
    {
      link_en: "the third property is volatility, and most lipids do not have it — which is what the next step is for",
      link_cn: "第三个性质是挥发性，而大多数脂类没有 —— 下一步就是为此而设",
      en: "Gas chromatography “separates volatile components of a mixture according to their relative tendencies to dissolve in the inert material packed in the chromatography column or to volatilize and move through the column, carried by a current of an inert gas such as helium.” **Two things compete: dissolving in the packing, and riding the gas.** “Some lipids are naturally volatile, but most must first be derivatized to increase their volatility (that is, lower their boiling point).” The standard derivatisation for a fatty-acid analysis is one specific reaction: the lipids are **transesterified**, “heated in a methanol/HCl or methanol/NaOH mixture to convert fatty acids esterified to glycerol into their methyl esters.” **Swap the glycerol for methanol and one large involatile phospholipid becomes a set of small volatile fatty acyl methyl esters.** These are then loaded and the column heated; the esters most soluble in the packing dissolve into it, while the less soluble are carried out first by the gas. **What it delivers is the thing that makes a fatty-acid table possible in the first place: “mixtures of fatty acids of various chain lengths and various degrees of unsaturation can be completely resolved.”**",
      cn: "气相层析“**按混合物中挥发性组分「溶进层析柱内所填惰性材料」与「挥发并被惰性气体（如氦）气流带着穿过柱子」这两种倾向的相对大小，把它们分开。**” **两件事在竞争：溶进填料，和搭着气体走。** “**有些脂类天然就有挥发性，但大多数必须先经衍生化来提高挥发性（也就是降低沸点）。**”脂肪酸分析的标准衍生化就是一个特定反应：把脂类**酯交换 (transesterified)**，“**在甲醇／HCl 或甲醇／NaOH 混合液中加热，把酯化在甘油上的脂肪酸转化成它们的甲酯。**” **把甘油换成甲醇，一个又大又不挥发的磷脂就变成了一批又小又易挥发的脂酰甲酯。** 随后上样、加热柱子；在填料中溶解度最高的酯溶进填料，溶解度较低的先被气流带出来。**它给出的结果，正是「脂肪酸表」之所以能被做出来的前提：“不同链长、不同不饱和度的脂肪酸混合物可以被完全分辨开。”**",
      src: "A p.362"
    },
    {
      link_en: "when ranking a whole molecule is not enough, cut it — and the crude version already sorts two bond types",
      link_cn: "当给整个分子排序不够用时，就把它切开 —— 而最粗糙的切法已经能分开两种键",
      en: "“All ester-linked fatty acids in triacylglycerols, phospholipids, and sterol esters are released by mild acid or alkaline treatment, and somewhat harsher hydrolysis conditions release amide-bound fatty acids from sphingolipids.” **That is a ranking in itself: an ester bond breaks more easily than an amide bond, so the two ways a fatty acid can be attached — ester to a glycerol, amide to a sphingosine — can be separated simply by how hard you push.**",
      cn: "“**三酰甘油、磷脂和固醇酯中所有酯连的脂肪酸，用温和的酸或碱处理即可释放；而把酰胺连的脂肪酸从鞘脂上释放出来，则需要稍严苛一些的水解条件。**” **这本身就是一种排序：酯键比酰胺键更容易断，所以脂肪酸挂上去的两种方式 —— 与甘油成酯、与鞘氨醇成酰胺 —— 只靠「下手多重」就能分开。**",
      src: "A p.363"
    },
    {
      link_en: "and an enzyme cuts one named bond instead of every bond of a type",
      link_cn: "而酶切的是一个指定的键，而不是某一类键里的每一个",
      en: "“Phospholipases A, C, and D each split particular bonds in phospholipids and yield products with characteristic solubilities and chromatographic behaviors.” **The worked example shows the whole idea in one cut: “Phospholipase C, for example, releases a water-soluble phosphoryl alcohol (such as phosphocholine from phosphatidylcholine) and a chloroform-soluble diacylglycerol, each of which can be characterized separately to determine the structure of the intact phospholipid.”** **The enzyme is chosen precisely because its two products go into different phases — the head into water, the tails into chloroform — after which each can be run separately on a plate or a column.** And note what that cut is: **the same enzyme making the same cut on the same lipid is a signalling event when a hormone triggers it in a living membrane. One reaction, two purposes — a message in the cell, a reagent on the bench.**",
      cn: "“**磷脂酶 A、C、D 各自切开磷脂中特定的键，产生溶解性与层析行为各具特征的产物。**” **书里的例子一刀就展示了全部思路：“例如磷脂酶 C 释放出一个水溶性的磷酰醇（如从磷脂酰胆碱得到磷酸胆碱）和一个可溶于氯仿的二酰甘油，两者可以分别表征，从而确定完整磷脂的结构。”** **选这个酶，正是因为它的两个产物会跑进不同的相 —— 头进水里，尾巴进氯仿 —— 之后各自上板或上柱去跑。** 而且要注意这一刀是什么：**同一个酶、在同一个脂上、切同一刀，当它由激素在活的膜上触发时，就是一次信号事件。一个反应，两种用途 —— 在细胞里是消息，在实验台上是试剂。**",
      src: "A p.363, and figure 10-14 on A p.352",
      see: [{ id: "L-10-3-1", en: "the same cut read as a signal", cn: "同一刀被当作信号来读" }]
    },
    {
      link_en: "the fourth property is mass, and it is the only one that can place a double bond",
      link_cn: "第四个性质是质量 —— 也是唯一能定位双键的那一个",
      en: "The problem is stated first: “The chemical properties of similar lipids (for example, two fatty acids of similar length unsaturated at different positions, or two isoprenoids with different numbers of isoprene units) are very much alike, and their order of elution from the various chromatographic procedures often does not distinguish between them.” **Chromatography ranks bulk properties, and moving a double bond two carbons along barely changes any of them.** Mass spectrometry sidesteps that entirely: it breaks the molecule apart and weighs the pieces, so components of a mixture “can be simultaneously separated and identified by their unique pattern of fragmentation.”",
      cn: "先把问题说清楚：“**相似脂类的化学性质（例如两个长度相近但不饱和位置不同的脂肪酸，或两个异戊二烯单元数不同的异戊二烯类化合物）非常接近，它们在各种层析方法中的洗脱顺序往往区分不开它们。**” **层析排的是整体性质，而把一个双键沿链移动两个碳，几乎不改变其中任何一项。** 质谱则绕开了这一切：它把分子打碎、再称碎片的重量，于是混合物中的组分“**可以凭其独特的碎裂模式被同时分离并鉴定出来。**”",
      src: "A p.363"
    },
    {
      link_en: "and the way a spectrum is read is simple enough to say out loud",
      link_cn: "而一张谱图怎么读，简单到可以直接讲出来",
      en: "Take the worked example. The fatty acid is first turned into a derivative that stops the double bonds from migrating when the molecule is broken apart by electron bombardment — here a picolinyl ester of linoleic acid, 18:2(Delta 9,12), Mr 371, in which the alcohol is picolinol. Bombardment gives a parent ion M+ at m/z 371, plus a series of smaller fragments from breaks along the chain. **Now read it in three passes. The prominent ions at m/z 92, 108, 151 and 164 all contain the pyridine ring of the picolinol, which confirms that the compound really is the intended derivative. The molecular ion at 371 confirms a C18 fatty acid with two double bonds. Then walk the chain from the methyl end: “the uniform series of ions 14 atomic mass units (u) apart represents loss of each successive methyl and methylene group from the methyl end of the acyl chain (beginning at C-18),” down to m/z 300; “this is followed by a gap of 26 u for the carbons of the terminal double bond, at m/z = 274; a further gap of 14 u for the C-11 methylene group, at m/z = 260; and so forth.”** **A run of 14s is a saturated stretch; a 26 is a double bond; counting the gaps locates every double bond in the chain.** And the honest limit, worth quoting as it stands: “although these data alone do not reveal the configuration (cis or trans) of the double bonds.”",
      cn: "看书里那个例子。脂肪酸先被做成一种衍生物，好让分子被电子轰击打碎时双键不会移位 —— 这里用的是亚油酸 18:2(Delta 9,12) 的吡啶甲醇酯 (picolinyl ester)，分子量 371，其中的醇是 picolinol。轰击给出母离子 M+，m/z 371，外加一系列由链上断裂产生的更小碎片。**读它分三遍。m/z 92、108、151、164 这几个显著离子都含有 picolinol 的吡啶环，这证实该化合物确实是预期的那个衍生物。m/z 371 的分子离子确认这是一个带两个双键的 C18 脂肪酸。然后从甲基端沿链走：“彼此相差 14 原子质量单位 (u) 的那一串均匀离子，代表从酰基链甲基端（自 C-18 起）逐个失去甲基和亚甲基”，一直到 m/z 300；“接着是一个 26 u 的间隔，对应末端双键的那两个碳，位于 m/z 274；再一个 14 u 的间隔对应 C-11 的亚甲基，位于 m/z 260；如此类推。”** **连着一串 14 就是一段饱和链；出现 26 就是一个双键；把这些间隔数一遍，链上每一个双键的位置就定下来了。** 而那条诚实的限制值得原样引用：“**尽管仅凭这些数据还不能揭示双键的构型（顺式还是反式）。**”",
      src: "A p.363, figure 10-26"
    },
    {
      link_en: "and once the mass measurement is good enough, one of the earlier steps can be dropped",
      link_cn: "而一旦质量测得足够准，前面某一步就可以省掉",
      en: "With higher-resolution mass spectrometry “it is possible to identify individual lipids in very complex mixtures without first fractionating the lipids in a crude extract.” This **shotgun** approach “avoids losses during the preliminary separation of lipid subclasses, and it is faster.” **Two justifications of different kinds, and the first is the interesting one: every purification step loses material, and it does not lose it evenly, so fractionating before quantifying biases the answer in a way that is hard to correct afterwards. Skipping the step removes the bias along with the work.** The classical route — separate the classes first by thin-layer, adsorption or gas chromatography or HPLC, then identify each by mass spectrometry — is kept alongside it, and both routes end at the same destination.",
      cn: "有了分辨率更高的质谱，“**就有可能在不先对粗提物做脂类分级的情况下，直接鉴定极复杂混合物中的单个脂类。**”这种**霰弹枪 (shotgun) 法**“**避免了在脂类亚类预分离过程中的损失，而且更快。**” **两条理由属于不同性质，而第一条才是有意思的那条：每一步纯化都会损失材料，而且损失得并不均匀，所以「先分级再定量」会给答案带来事后很难校正的偏差。省掉这一步，偏差和工作量一起省掉了。** 经典路线 —— 先用薄层、吸附、气相层析或 HPLC 把大类分开，再用质谱逐个鉴定 —— 仍与它并列保留，两条路线通向同一个终点。",
      src: "A p.363, figure 10-25"
    },
    {
      link_en: "and all this cataloguing needs an agreed filing system",
      link_cn: "而这一切编目工作需要一套公认的归档系统",
      en: "The **LIPID MAPS** Lipidomics Gateway, a database modelled on the Protein Data Bank, “has its own classification system that places each lipid species in one of **eight chemical categories**, each designated by two letters.” They are: **fatty acids (FA)** — oleate, stearoyl-CoA; **glycerolipids (GL)** — di- and triacylglycerols; **glycerophospholipids (GP)** — phosphatidylcholine, phosphatidylserine; **sphingolipids (Sp)** — sphingomyelin, ganglioside GM2; **sterol lipids (ST)** — cholesterol, progesterone, bile acids; **prenol lipids (PR)** — farnesol, geraniol, retinal, ubiquinone; **saccharolipids (SL)** — lipopolysaccharide; and **polyketides (PK)** — tetracycline, erythromycin, aflatoxin B1. Each category is subdivided into numbered classes: all glycerophosphocholines are GP01, those with two ester-linked fatty acids are GP0101, and those with one ether-linked chain at position 1 and an ester at position 2 are GP0102. Every lipid, “including lipid types not yet discovered,” therefore has a unique **12-character identifier**, the LM_ID. **And the honest closing note is what makes the scheme usable rather than dogmatic: “The eight chemical categories in Table 10-2 do not coincide perfectly with the less formal categorization according to biological function that we have used in this chapter… Each method of classification has its advantages.”** The structural lipids of a membrane, for instance, span two of the eight categories at once.",
      cn: "**LIPID MAPS** Lipidomics Gateway 是一个仿照 Protein Data Bank 建起来的数据库，它“**有自己的一套分类系统，把每一个脂类物种归入八大化学类别之一，每一类用两个字母表示。**”这八类是：**脂肪酸 (FA)** —— 油酸、硬脂酰-CoA；**甘油脂 (GL)** —— 二酰甘油与三酰甘油；**甘油磷脂 (GP)** —— 磷脂酰胆碱、磷脂酰丝氨酸；**鞘脂 (Sp)** —— 鞘磷脂、神经节苷脂 GM2；**固醇脂 (ST)** —— 胆固醇、孕酮、胆汁酸；**戊烯醇脂 (PR)** —— 法尼醇、香叶醇、视黄醛、泛醌；**糖脂类 (SL)** —— 脂多糖；**聚酮 (PK)** —— 四环素、红霉素、黄曲霉毒素 B1。每一类再细分为编号的小类：所有甘油磷酸胆碱都是 GP01，其中两个脂肪酸都以酯键相连的是 GP0101，而 1 位为醚连、2 位为酯连的是 GP0102。于是每一个脂类 ——“**包括尚未被发现的脂类型**”—— 都有一个唯一的 **12 位标识符**，即 LM_ID。**而收尾那句诚实话，正是这套方案之所以好用而非教条的原因：“Table 10-2 里的八大化学类别，与本章所用的、按生物学功能划分的那种不那么正式的分类，并不完全吻合……每一种分类方法各有其长处。”** 举个例子：膜的结构脂类一下子就横跨了八类中的两类。",
      src: "A p.363–364, Table 10-2"
    },
    {
      link_en: "and the point of cataloguing everything is stated with unusual care",
      link_cn: "而「把一切都编目」的意义，被表述得异常谨慎",
      en: "“The application of mass spectrometric techniques with high throughput and high resolution can provide quantitative catalogs of all the lipids present in a specific cell type under particular conditions — the **lipidome** — and of the ways in which the lipidome **changes** with differentiation, disease such as cancer, or drug treatment.” **Notice the shape of that claim: it is not a claim about function, it is a claim about a measurable quantity that changes, and the changes are what may eventually suggest the functions.** The scale is then given: “An animal cell contains more than a thousand different lipid species, each **presumably** having a specific function.”",
      cn: "“**把高通量、高分辨率的质谱技术用上，就能给出「某一特定细胞类型在特定条件下所含全部脂类」的定量目录 —— 即脂质组 (lipidome) —— 以及这个脂质组如何随分化、随癌症这类疾病、随药物处理而变化。**” **注意这个论断的形状：它并不是关于功能的论断，而是关于一个「会变化的可测量」的论断 —— 而这些变化，才是日后可能提示出功能的东西。** 随后给出的是规模：“**一个动物细胞含有一千多种不同的脂类物种，每一种大概都有其特定的功能。**”",
      src: "A p.364",
      openQuestion_en: "The word *presumably* is the book's own. It does not claim that each of those thousand lipids has a known function — only that each is presumed to have one. Keeping that distinction is worth more than the number.",
      openQuestion_cn: "「**大概 (presumably)**」这个词是书里自己用的。它并没有声称那一千多种脂类每一种都有已知的功能，只说推测每一种都有。守住这个区别，比记住那个数字更有价值。"
    }
  ],
  terms: [
    { en: "the chloroform / methanol / water extraction", cn: "氯仿／甲醇／水抽提",
      def_en: "At volume proportions 1:2:0.8 the three are miscible and form one phase, in which tissue is homogenised so that every lipid dissolves at once. Adding more water afterwards splits the system in two — methanol/water above, chloroform below — with lipids in the chloroform and proteins and sugars in the methanol/water. One system used first to dissolve and then to sort.",
      def_cn: "按体积比 1:2:0.8 时三者互溶、形成单一相，组织在其中匀浆，所有脂类一次性溶解。随后加水会把体系分成两层 —— 上层甲醇／水，下层氯仿 —— 脂类留在氯仿里，蛋白质和糖进甲醇／水层。同一套体系先用来溶解，再用来分离。" },
    { en: "silica gel as a polar stationary phase", cn: "作为极性固定相的硅胶",
      def_en: "An insoluble polar solid, a form of silicic acid Si(OH)4. Polar lipids bind it tightly while neutral ones pass straight through in the first chloroform wash; the bound ones come off in order of increasing polarity, acetone for uncharged polar lipids such as cerebrosides and methanol for charged ones such as glycerophospholipids.",
      def_cn: "一种不溶的极性固体，是硅酸 Si(OH)4 的一种形式。极性脂类紧紧结合其上，中性脂类则在第一次氯仿洗脱时径直穿过；结合住的按极性递增依次洗下来 —— 丙酮洗下脑苷脂这类不带电的极性脂，甲醇洗下甘油磷脂这类带电的。" },
    { en: "thin-layer chromatography", cn: "薄层层析 (TLC)",
      def_en: "The same adsorption principle run upward on a silica-coated plate by capillary action, where the less polar lipids travel farthest because they bind the silicic acid less. Rhodamine spray fluoresces wherever there is lipid; iodine vapour reacts reversibly with double bonds so that unsaturated lipids turn yellow or brown. Bands can be scraped off and re-extracted.",
      def_cn: "同样的吸附原理，靠毛细作用在涂硅胶的板上向上跑 —— 极性较小的脂类走得最远，因为它们与硅酸结合得少。喷罗丹明，凡有脂处即发荧光；碘蒸气与双键可逆反应，于是不饱和脂类显黄色或棕色。条带可以刮下来重新抽提。" },
    { en: "transesterification", cn: "酯交换",
      def_en: "The derivatisation that makes gas chromatography of fatty acids possible: heating the lipids in methanol with HCl or NaOH converts fatty acids esterified to glycerol into their methyl esters. One large involatile phospholipid becomes a set of small volatile esters, and mixtures differing in chain length and unsaturation can then be completely resolved.",
      def_cn: "让脂肪酸的气相层析成为可能的衍生化步骤：把脂类在甲醇加 HCl 或 NaOH 中加热，把酯化在甘油上的脂肪酸转成它们的甲酯。一个又大又不挥发的磷脂变成一批小而易挥发的酯，此后不同链长、不同不饱和度的混合物就能被完全分辨开。" },
    { en: "phospholipase C as an analytical reagent", cn: "作为分析试剂的磷脂酶 C",
      def_en: "The same enzyme that degrades phospholipids inside a cell, used on the bench as a scalpel: it releases a water-soluble phosphoryl alcohol, phosphocholine from phosphatidylcholine, and a chloroform-soluble diacylglycerol, so one cut sends head and tails into different phases and each can be characterised separately.",
      def_cn: "与细胞内降解磷脂的是同一个酶，在实验台上被当作手术刀用：它释放出一个水溶性的磷酰醇（从磷脂酰胆碱得到磷酸胆碱）和一个溶于氯仿的二酰甘油，于是一刀就把头和尾送进不同的相，各自分别表征。" },
    { en: "the 14 u and 26 u gaps", cn: "谱图上的 14 u 与 26 u 间隔",
      def_en: "How a fatty acid's structure is read off a mass spectrum. A uniform series of fragment ions 14 atomic mass units apart records the successive loss of methyl and methylene groups from the methyl end of the chain; a gap of 26 instead marks the two carbons of a double bond. Counting the gaps locates every double bond — though not whether it is cis or trans.",
      def_cn: "从质谱上读出脂肪酸结构的方法。彼此相差 14 原子质量单位的一串均匀碎片离子，记录的是从链的甲基端逐个失去甲基和亚甲基；若间隔变成 26，那就是一个双键的两个碳。把间隔数一遍，就定出了每一个双键的位置 —— 但定不出它是顺式还是反式。" },
    { en: "the shotgun approach", cn: "霰弹枪法",
      def_en: "Putting an unfractionated crude lipid extract straight into high-resolution mass spectrometry, with no chromatographic separation first. It avoids the losses that occur during preliminary separation of lipid subclasses, and it is faster — an accuracy argument and a throughput argument, which are not the same kind of reason.",
      def_cn: "把未分级的粗脂提取物直接送进高分辨质谱，完全不先做层析分离。它避免了脂类亚类预分离过程中的损失，而且更快 —— 一个是准确性的理由，一个是通量的理由，两者性质并不相同。" },
    { en: "LIPID MAPS and the LM_ID", cn: "LIPID MAPS 分类与 LM_ID",
      def_en: "Eight two-letter chemical categories — fatty acids FA, glycerolipids GL, glycerophospholipids GP, sphingolipids Sp, sterol lipids ST, prenol lipids PR, saccharolipids SL, polyketides PK — subdivided into numbered classes so that every lipid, including ones not yet discovered, gets a unique 12-character identifier. The book notes that these eight do not coincide with its own grouping by biological function, and that each scheme has its advantages.",
      def_cn: "八个用两个字母表示的化学类别 —— 脂肪酸 FA、甘油脂 GL、甘油磷脂 GP、鞘脂 Sp、固醇脂 ST、戊烯醇脂 PR、糖脂类 SL、聚酮 PK —— 再细分为编号的小类，于是每一个脂类（包括尚未发现的）都有一个唯一的 12 位标识符。书里指出，这八类与它自己按生物学功能所作的分组并不吻合，而每一种方案各有长处。" },
    { en: "lipidome", cn: "脂质组",
      def_en: "The quantitative catalogue of all lipids present in one cell type under particular conditions, and of how that catalogue changes with differentiation, with a disease such as cancer, or with drug treatment. An animal cell holds more than a thousand lipid species, each presumably having a specific function — presumably being the book's own word.",
      def_cn: "某一细胞类型在特定条件下所含全部脂类的定量目录，以及这个目录如何随分化、随癌症这类疾病、随药物处理而变化。一个动物细胞含有一千多种脂类物种，每一种「大概」都有特定功能 —— 「大概」是书里自己用的词。" }
  ]
};
