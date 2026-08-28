/* Spine for chapter 8 §8.1 and §8.2 — 真核基因表达调控的概念、一般规律，以及转录水平调控.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 290–310.
   Handwritten marginalia on the scan are marked 手写批注 in the src field of the step
   that uses them; where the handwriting adds something the printed text does not say,
   the step is flagged beyond: true.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No inversion.
   2. NO UNBOUND definite reference.
   3. NAME THE ACTUAL OBJECTS. An L exon 4500 bp upstream; six GC boxes between
      −70 and −110; 72 bp of SV40; a leucine every six residues.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (recall_en / recall_cn).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   THE ARC ACROSS THE TWO NODES. M-8-1 asks what a eukaryotic gene physically is.
   The answer is: interrupted by introns, monocistronic, one member of a family whose
   members are used at different times, and wrapped in chromatin behind a nuclear
   envelope. Every one of those facts opens a place where expression can be controlled,
   and the section closes by laying those places out as levels. M-8-2 then walks into
   the first and largest of them. Transcription is controlled by DNA sequences that do
   not themselves encode anything — a core promoter that fixes where polymerase Ⅱ
   starts, upstream elements and enhancers that fix how often — and by the proteins
   that read those sequences. The last third of M-8-2 is about those proteins: how a
   trans-acting factor recognises one stretch of DNA out of a genome (four kinds of
   DNA-binding domain) and what it does once it is holding on (three kinds of
   activation domain). */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-8-1 */
window.BIOLITE_SPINE["M-8-1"] = {
  /* Declared rather than left implicit, as SPINE_SPEC asks. The first group is the
     ordinary vocabulary of a molecular biology course; the second is background
     chemistry and cell biology that this section leans on without teaching. Nothing
     load-bearing is parked here: exon, intron, interrupted gene, the GT–AG rule,
     constitutive and alternative splicing, gene family, housekeeping gene, temporal
     and spatial specificity are all introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "rRNA", "tRNA", "cDNA", "gene", "genome", "chromosome",
            "chromatin", "cell", "nucleus", "cytoplasm", "protein", "polypeptide",
            "peptide", "amino acid", "residue", "enzyme", "nuclease", "transcription",
            "translation", "transcript", "primary transcript", "base pair", "promoter",
            "polymerase", "RNA polymerase", "reverse transcriptase", "prokaryote",
            "eukaryote", "bacterium", "virus", "yeast", "mitochondrion", "embryo",
            "tissue", "organ", "mutation", "evolution", "development", "differentiation",
            "hormone", "substrate", "cell cycle", "oxygen", "iron", "glycine", "alanine",
            "actin", "tubulin", "collagen", "interferon", "myoglobin", "secondary structure",
            "homology", "hairpin", "methylation", "recombinant", "recombination",
            "expression", "replication", "phosphodiester bond", "nucleotide", "strand"],
  nodeTitle_en: "Eukaryotic gene regulation — the concepts and the general rules",
  nodeTitle_cn: "真核基因表达调控相关概念和一般规律",
  title_en: "A eukaryotic gene is interrupted, monocistronic and one member of a family, and **every place where its expression can be controlled is opened by one of those facts about how the gene is built**",
  title_cn: "真核基因是断裂的、单顺反子的、家族中的一员——而**真核基因能被调控的每一个位置，都是由「这个基因是怎么造出来的」当中的某一条打开的**",
  steps: [
    {
      en: "A genome is all the genetic information a cell or a virus carries, taking in every chromosome and the DNA of every subcellular organelle. A gene is the piece of DNA needed to produce one polypeptide chain or one functional RNA, and it covers the coding region, the regions upstream and downstream of it, and the interrupting sequences that sit between the coding pieces. Gene expression is what a gene does when it is transcribed and translated into a protein or an RNA molecule with a specific biological function. **Expression answers to signals from inside and outside the cell, and that answering is the process named by gene regulation.**",
      cn: "基因组（genome）是一个细胞或病毒所携带的全部遗传信息，包括每一条染色体和所有亚细胞器的 DNA 序列。基因（gene）则是产生一条肽链或一个功能 RNA 所必需的那段 DNA，它包括编码区、编码区上下游的区域，以及夹在编码片段之间的间断序列。基因表达（gene expression）就是这段 DNA 经转录、翻译，产生具有特异生物学功能的蛋白质分子或 RNA 分子的过程。**基因表达受内源和外源信号的调节，被调节的这个过程就叫基因表达调控（gene regulation）。**",
      src: "现分 p.290"
    },
    {
      link_en: "and the first surprise about that piece of DNA is that it does not run continuously",
      link_cn: "而这段 DNA 的第一个意外，是它并不连续",
      en: "Most eukaryotic genes are built from two kinds of sequence: the protein-coding pieces are exons, and the non-coding pieces that interrupt them are introns — a word Gilbert coined for sequence present in the primary transcript or in the genomic DNA and absent from the mature mRNA, rRNA or tRNA. Exons coding different regions of one protein sit apart from each other, separated by introns of unequal length, so the gene reads as a mosaic and is called an interrupted gene. The collagen gene is about 40 kb long and carries at least 40 introns, the shortest 50 bp and the longest 2000 bp. **In a higher eukaryote the exons often account for under 10% of a gene: mammalian dihydrofolate reductase is 25–31 kb of DNA whose six exons come to only 2 kb.**",
      cn: "大多数真核基因由两类序列组成：编码蛋白质的片段叫外显子（exon），把它们隔开的非编码片段叫内含子（intron）——Gilbert 最早用 intron 一词指那些存在于初级转录产物或基因组 DNA 中、却不出现在成熟 mRNA、rRNA、tRNA 里的核苷酸序列。编码同一个蛋白不同区域的各个外显子并不连续排在一起，而被长短不等的内含子隔开，形成镶嵌排列，所以真核基因又被称为断裂基因（interrupted gene）。胶原蛋白基因长约 40 kb，至少有 40 个内含子，短的只有 50 bp，长的可达 2000 bp。**在高等真核基因里，外显子往往占不到全长的 10%：哺乳动物二氢叶酸还原酶基因全长 25～31 kb，6 个外显子加起来只有 2 kb。**",
      src: "现分 p.290（表 8-1、图 8-1）"
    },
    {
      link_en: "and that mosaic has a hard practical consequence the moment the gene is moved",
      link_cn: "而这种镶嵌结构，一旦要把基因搬家，就会立刻带来一个很硬的后果",
      en: "Only eukaryotes can cut introns out of a transcript and produce a functional mRNA and protein, and prokaryotes generally lack this ability. A few eukaryotic genes carry no introns at all: the histone genes and the α- and β-interferon genes are the cases named. Reverse transcriptase copies a mature mRNA into cDNA — complementary DNA — so a cDNA molecule holds the exons alone with no intron left in it. **Expressing a eukaryotic gene in a prokaryotic cell therefore begins with constructing a recombinant gene whose introns have been removed; without that step the protein under study does not come out.**",
      cn: "只有真核生物具备把内含子从转录产物中切除、产生功能型 mRNA 和蛋白质的能力，原核生物一般没有这个本领。少数真核基因根本不带内含子：组蛋白基因和 α 型、β 型干扰素基因就是书上点名的例子。反转录酶以成熟 mRNA 为模板产生 cDNA——即互补 DNA——所以 cDNA 分子里只有外显子，没有内含子。**因此要在原核细胞里表达一个真核基因，第一步是构建一个已经切除内含子的重组基因；少了这一步，就拿不到所研究的那个蛋白质。**",
      src: "现分 p.291, p.292"
    },
    {
      link_en: "so what are introns there for in the first place?",
      link_cn: "那么内含子本身到底是干什么用的？",
      en: "What introns are physiologically for is not currently known. Removing the introns from some genes still leaves an mRNA that works, while the SV40 T-antigen gene behaves the other way: strip its introns and its mature mRNA is completely blocked from moving into the cytoplasm. **What the interrupted arrangement does give is potential recombination sites inside the coding regions of important proteins**, so those DNA sequences get ample opportunity to duplicate and recombine — which is very favourable to the evolution of eukaryotic genes.",
      cn: "内含子的生理功能目前尚不清楚。在某些基因中，把内含子完全除去，照样可以产生有活性的 mRNA；而 SV40 T 抗原基因正好相反：一旦除去内含子，成熟 mRNA 运入细胞质的过程就完全被阻断。**断裂基因这种结构形式，为某些重要蛋白质的编码区域提供了进行重组的潜在位点，使这些 DNA 序列有充分的机会进行重复和组合——这非常有利于真核基因的进化。**",
      openQuestion_en: "why introns exist at all is not answered on these pages, and is not a settled question.",
      openQuestion_cn: "内含子究竟为什么存在，这几页没有给出答案，学科本身也还没有定论。",
      src: "现分 p.291"
    },
    {
      link_en: "and if introns are to be cut out cleanly, something has to mark where each one begins and ends",
      link_cn: "而要把内含子干净地切下来，就得有东西标出它从哪里开始、到哪里结束",
      en: "The exon–intron junction is the boundary sequence where an exon meets an intron, and it has two properties. The two ends of one intron share no extensive homology, so they cannot pair with each other — no hairpin secondary structure can form across the intron before splicing. The junction sequence itself is very short and yet highly conserved, which is why it is taken to be closely tied to the splicing machinery and to serve as the signal sequence for RNA splicing. **Conserved junctions turn up in essentially every higher-eukaryotic gene, pointing at one shared splicing mechanism; mitochondrial genes and yeast tRNA genes carry no such conserved sequence, so their processing must run some other way.**",
      cn: "外显子－内含子连接区（exon-intron junction）就是外显子与内含子的交界序列，它有两个重要特征。第一，一个内含子的两端序列之间没有广泛的同源性，因此两端不能互补——在剪接加工之前，内含子的上游序列与下游序列不可能通过碱基配对形成发夹二级结构。第二，连接区序列虽然很短，却高度保守，因此它很可能与剪接机制密切相关，是 RNA 剪接的信号序列。这类**保守的连接区几乎存在于所有高等真核生物基因中，说明可能存在共同的剪接加工机制；而线粒体基因和酵母 tRNA 基因中不存在这类保守序列，它们的加工剪接必然走另一条路。**",
      src: "现分 p.291"
    },
    {
      link_en: "and the two bases at each end of an intron turn out to be almost always the same two",
      link_cn: "而内含子两端的那两个碱基，几乎永远是同样的两个",
      en: "Sequence analysis shows that almost every intron starts with GT at its 5′ end and ends with AG at its 3′ end, and that regularity is called the GT–AG rule, written 5′GT……AG3′. Because the two ends differ, they orient the intron: splicing runs along the intron from left to right, so the 5′ junction is the left splice site, also called the donor site, and the 3′ junction is the right splice site, also called the acceptor site. **GT–AG is the reading at the level of the gene, meaning on the DNA; on the pre-mRNA the T has already been transcribed as U, so the same rule reads GU–AG there.**",
      cn: "序列分析表明，几乎每个内含子 5′ 端起始的两个碱基都是 GT，3′ 端最后两个碱基总是 AG；由于这两个碱基高度保守而且普遍，这条规律被称为 GT–AG 法则，即 5′GT……AG 3′。内含子两端的序列不同，因此可以定向标明它的两个末端：按剪接加工沿内含子自左向右进行的原则，5′ 端接头序列叫左剪接位点，又称供体位点（donor site）；3′ 端接头序列叫右剪接位点，又称受体位点（acceptor site）。**GT–AG 是在基因即 DNA 层面上的写法；到了 mRNA 前体上，T 已经被转录成 U，同一条法则在那里读作 GU–AG。**",
      src: "现分 p.291（手写批注）"
    },
    {
      link_en: "with the boundaries marked, the cell can cut the same way every time — or not",
      link_cn: "边界既然标好了，细胞就可以每次都按同一种方式切——也可以不",
      en: "Splicing removes the introns from a primary transcript and joins the exons that stay in the mature mRNA, and a gene whose transcript is always spliced the same way is doing constitutive splicing. The myoglobin heavy-chain gene has 41 exons and is still spliced precisely into one mature mRNA. **Constitutive splicing yields exactly one mature mRNA from one transcript, so a gene spliced this way encodes exactly one polypeptide.**",
      cn: "剪接把内含子从初级转录产物上去掉，把保留在成熟 mRNA 中的外显子拼接起来；一个基因的转录产物如果每次都按同一种方式剪接，这种方式就叫组成型剪接。肌红蛋白重链基因有 41 个外显子，仍然能被精确地剪接成一个成熟的 mRNA。**组成型剪接的结果是一个转录产物只产生一种成熟 mRNA，所以这样剪接的基因只编码一条多肽。**",
      src: "现分 p.292"
    },
    {
      link_en: "and a great many eukaryotic genes are not spliced the same way every time",
      link_cn: "而相当多的真核基因，并非每次都按同一种方式剪接",
      en: "A good many eukaryotic primary transcripts can be spliced in more than one way, and the process by which one gene gives different mRNAs through different splicing is called alternative splicing. Two upstream choices feed into it: transcription started from a different promoter, or a transcript cut at a different poly(A) site, gives a primary transcript with a different secondary structure, and that altered structure changes how it is spliced. **Alternative splicing lets one gene yield different mRNAs and so translate into different proteins.**",
      cn: "不少真核基因的原始转录产物可以按不同的方式剪接；同一基因的转录产物由于不同的剪接方式而形成不同 mRNA 的过程，就叫选择性剪接。它有两个上游来源：转录时选用了不同的启动子，或者在转录产物上选用了不同的多(A)位点，都会使初级转录产物具有不同的二级结构，从而影响剪接过程。**选择性剪接让一个基因产生不同的 mRNA，并翻译成不同的蛋白质。**",
      src: "现分 p.292"
    },
    {
      link_en: "one gene read two ways in two organs makes this concrete",
      link_cn: "同一个基因在两个器官里被读成两样，这件事有一个具体的例子",
      en: "Mouse α-amylase is an enzyme that liver and salivary gland both synthesise, from one and the same gene. In the two tissues the coding sequence of the amylase mRNA is identical: coding begins at exon 2, and only the length of the 5′ starting portion differs. In liver the first 161 bases of the mRNA are encoded by an L exon lying 4500 bp upstream of the exon-2 transcription start site, and in salivary gland the first 50 bases are encoded by an S exon 7300 bp upstream; transcripts started at the S exon are over 100 times as abundant as those started at L. **An L exon is itself part of an intron sequence in the salivary gland version of the gene — one gene whose intron becomes another gene exon, which is where the difference in expression between the two tissues comes from.**",
      cn: "小鼠 α–淀粉酶是一个在肝和唾液腺中都合成、并且由同一个基因编码的酶。在这两种组织里，淀粉酶 mRNA 的编码序列完全相同：编码序列起始于第 2 号外显子，只有 5′ 端起始部分的长度不同。在肝中，mRNA 5′ 端的 161 个碱基由位于第 2 号外显子转录起始点上游 4500 bp 处的 L 外显子编码；在唾液腺中，5′ 端的 50 个碱基由上游 7300 bp 处的 S 外显子编码，而且由 S 外显子起始的转录产物是由 L 外显子起始者的 100 倍以上。**L 外显子本身只是唾液腺淀粉酶基因中内含子序列的一部分——一个基因的内含子成为另一个基因的外显子，这正是两种组织间表达差异的来源。**",
      src: "现分 p.292（图 8-2）"
    },
    {
      link_en: "one gene at a time is the wrong unit anyway: related eukaryotic genes come in sets",
      link_cn: "何况「一个基因」本来就不是合适的单位——真核里相关的基因是成套出现的",
      en: "In prokaryotic cells closely related genes are often organised into an operon — the whole set placed under one promoter and transcribed as a single polycistronic mRNA. Eukaryotic DNA is monocistronic, and an operon under one promoter is rare; instead related eukaryotic genes are grouped into functional sets, and such a set is called a gene family. **Members of one family are sometimes packed tightly together as a gene cluster, but more often they are scattered over different parts of one chromosome or even sit on different chromosomes, each with its own pattern of regulation.**",
      cn: "在原核细胞中，密切相关的基因往往组成操纵子——整个体系被置于一个启动子的控制之下，以多顺反子 mRNA 的方式转录。真核细胞的 DNA 是单顺反子结构，很少出现置于一个启动子控制之下的操纵子；真核中相关的基因是按功能成套组合的，这样的一套就被称为基因家族（gene family）。**同一家族中的成员有时紧密地排列在一起、成为一个基因簇，但更多的时候分散在同一染色体的不同部位、甚至位于不同的染色体上，各自具有不同的表达调控模式。**",
      src: "现分 p.292, p.293"
    },
    {
      link_en: "the simplest kind of family is a row of copies, and the rRNA genes are it",
      link_cn: "最简单的一类家族，就是一排拷贝——rRNA 基因正是这一类",
      en: "A simple multigene family is one whose genes lie head to tail in tandem, and the rRNA genes are the standard case. In E. coli the 16S, 23S and 5S rRNA genes are joined into one transcription unit whose product is a pre-rRNA with a sedimentation coefficient of 30S, about 6500 nucleotides long: it is first specifically methylated, then cut at defined sites by RNase Ⅲ, RNase P and RNase E, and finally trimmed by nucleases that degrade the non-essential stretches, giving mature 16S rRNA, tRNA, 23S rRNA and 5S rRNA. RNase P, one of the enzymes doing that cutting, is a ribozyme, meaning an enzyme made of RNA. At least 100 positions of the eukaryotic precursor are methylated, mainly at the 2–OH of the ribose, snoRNAs take part in the cutting, and 5S rRNA is a separate transcription unit transcribed by RNA polymerase Ⅲ. **A eukaryotic pre-rRNA is one 45S transcript of about 14 000 nucleotides carrying 18S, 5.8S and 28S rRNA together — a single transcription unit with a single start point, whose three rRNAs are produced from it by post-transcriptional processing.**",
      cn: "简单多基因家族中的基因一般以串联方式前后相连，rRNA 基因就是这一类的代表。在大肠杆菌中，16S、23S 和 5S rRNA 基因联合成一个转录单位，产物是沉降系数为 30S、约 6500 个核苷酸的前 rRNA：初级转录产物先被特异性甲基化，再由 RNase Ⅲ、RNase P 和 RNase E 在特定位点切开，最后由特定核酸酶降解掉部分非必需序列，得到成熟的 16S rRNA、tRNA、23S rRNA 和 5S rRNA。参与切割的 RNase P 是一个核酶，即由 RNA 构成的酶。真核前体上至少有 100 处被甲基化（主要是核糖 2–OH 的甲基化），切割加工需要 snoRNAs 参与；5S rRNA 则作为一个独立的转录单位，由 RNA 聚合酶Ⅲ完成转录。**真核生物的前 rRNA 是一条 45S、约 14 000 个核苷酸的转录产物，18S、5.8S 和 28S 三种 rRNA 都在这一条里面——它是单一转录单位、只有一个起始点，三种 rRNA 靠转录后加工从这条前体上产生。**",
      src: "现分 p.293（图 8-3、图 8-4、手写批注）"
    },
    {
      link_en: "a step up in complexity: several such families side by side, each transcribed on its own",
      link_cn: "再复杂一层：几个这样的家族并排放着，各自独立转录",
      en: "A complex multigene family is made of several related gene families separated from one another by spacer sequences, each family working as an independent transcription unit. Sea urchin histones are the worked case: five genes encoding five different histones sit inside a fragment of about 6000 bp separated by spacers, and this five-gene tandem unit may be repeated as many as 1000 times across the sea urchin genome. Each gene is transcribed into a monocistronic RNA, these RNAs carry no introns, all the genes lie on the same DNA strand and are transcribed in the same direction, and the transcription and translation rate of each is regulated — histones are synthesised in quantity only when conditions suit chromosome replication, with H₂A, H₂B, H₃ and H₄ in equal molar amounts and H₁ at exactly half. In one particular cell not all of the tandem units are transcribed: **different units are transcribed at different stages of embryonic development and in different tissues, which hints at histone subtypes of differing specificity** and at a developmental control deciding which unit is used.",
      cn: "复杂多基因家族一般由几个相关的基因家族构成，家族之间由间隔序列隔开，每个家族作为独立的转录单位。海胆的组蛋白基因家族是标准例子：5 个分别编码不同组蛋白的基因处在一个约 6000 bp 的片段中，彼此被间隔序列隔开，这个由 5 个基因组成的串联单位在整个海胆基因组中可能重复多达 1000 次。串联单位中的每一个基因分别被转录成单顺反子 RNA，这些 RNA 都没有内含子，各基因在同一条 DNA 链上按同一方向转录，而且每个基因的转录与翻译速度都受到调节——组蛋白只有在适合于染色体复制的情况下才大量合成，H₂A、H₂B、H₃ 和 H₄ 摩尔数相等，H₁ 的量恰好是前者的一半。**在一个特定的细胞中，并非所有串联的单位都得到转录：胚胎发育的不同阶段、不同组织中，被转录的是不同的串联单位，这暗示存在专一性不同的组蛋白亚类，以及一套发育调控机制。**",
      src: "现分 p.293, p.294（图 8-5）"
    },
    {
      link_en: "and one family switches its members on and off right through a human life",
      link_cn: "而有一个家族，把成员的开关一直排到人的一生里去",
      en: "Haemoglobin is the main carrier of molecular oxygen in animals: a tetramer of two α and two β subunits plus a haem prosthetic group holding an iron atom. Several different forms of α and of β appear at different stages of an individual, and each set of genes forms a cluster. The human α-globin cluster is on the short arm of chromosome 16 and covers about 30 kb, with ζ as the embryonic gene. The β-globin cluster is on the short arm of chromosome 11 and covers 50–60 kb, with ε embryonic, Gγ and Aγ fetal — two β-type chains present in equal amounts that differ at one position of the peptide, glycine in one chain and alanine in the other — and δ and β adult. **Embryonic haemoglobin is 2ζ₂2ε₂, the fetus runs α₂γ₂, and after birth 98% of haemoglobin is α₂β₂ with 2% α₂δ₂: one protein assembled from a different pair of genes at each stage of life.**",
      cn: "血红蛋白是所有动物体内输送分子氧的主要载体：由 2α2β 组成的四聚体，加上一个结合铁原子的血红素辅基之后，形成功能性血红蛋白。在个体发育的不同阶段，会出现几种不同形式的 α 和 β 亚基，每一套基因各自成簇。人 α 珠蛋白基因簇位于 16 号染色体短臂上，约占 30 kb，其中 ζ 为胚胎期基因。β 珠蛋白基因簇位于 11 号染色体短臂上，占 50～60 kb，其中 ε 为胚胎期基因，Gγ 和 Aγ 为胎儿型基因——这是两类等分子数的 β 型链，在肽链的同一位点上，一条含甘氨酸、另一条含丙氨酸——δ 和 β 为成人期基因。**胚胎型血红蛋白是 2ζ₂2ε₂，胎儿期用 α₂γ₂，出生后 98% 的血红蛋白是 α₂β₂、2% 是 α₂δ₂：同一个蛋白质，在人生的每一个阶段由不同的一对基因装配出来。**",
      src: "现分 p.294, p.295（表 8-2、图 8-6、图 8-8）"
    },
    {
      link_en: "and the order those genes are used in is written on the chromosome itself",
      link_cn: "而它们被使用的先后顺序，就写在染色体上",
      recall_en: "the same globin cluster from the step just above",
      recall_cn: "就是上一步那两个珠蛋白基因簇",
      en: "Within each of the two clusters the order in which the genes are arranged is the order in which they are expressed during development, so the map of the chromosome reads as a timetable: 5′ to 3′ across the β cluster runs ε, Gγ, Aγ, δ, β, meaning embryo, fetus, adult. The family itself was built by duplication: the ancestral globin arose about 800 million years ago and was encoded by a single gene, and the modern globin family evolved from that one ancestral gene through a series of duplications, mutations and transpositions. **Two β-chain genes duplicated and mutated again during mammalian evolution to give the fetal ε and γ globins, and fetal haemoglobin has a higher affinity for oxygen than the adult form, which is favourable to the fetus developing quickly.**",
      cn: "在这两个基因簇中，基因排列的顺序就是它们在发育阶段的表达顺序，所以染色体图读起来像一张时间表：β 簇从 5′ 到 3′ 依次是 ε、Gγ、Aγ、δ、β，也就是胚胎、胎儿、成人。这个家族本身是靠重复建起来的：原始珠蛋白大约产生于 8 亿年前、由单基因编码，现代珠蛋白基因家族是由同一个原始基因通过一系列重复、突变和转位演变而成的。**在哺乳动物的进化过程中，两条 β 链基因又发生突变和重复，形成了胎儿中的 ε 和 γ 型珠蛋白；胎儿血红蛋白对氧的亲和力比成人更大，因而有利于胎儿的快速发育。**",
      src: "现分 p.295, p.296（图 8-7、图 8-8）"
    },
    {
      link_en: "sorting genes by when they are switched on gives three classes, not two",
      link_cn: "按「什么时候被打开」给基因分类，分出来的是三类而不是两类",
      en: "By how they answer a stimulus, genes divide into constitutive expression and selective expression. Genes expressed continuously in every cell of an individual are called housekeeping genes and their mode is constitutive gene expression: they are the genes required for cell structure and metabolism — those encoding rRNA, actin and tubulin among them — and they are kept at a comparatively high level. **A housekeeping gene holds that level whatever else the cell is doing, which is why rRNA, actin and tubulin genes are used as the controls in RT–PCR.** On the other side, an inducible gene is one that a particular environmental signal activates so that its product increases, and a repressible gene is one an environmental signal suppresses; regulation of both works mostly by setting the rate of transcription and of translation, which changes the level of the encoded product.",
      cn: "根据对刺激的反应模式，基因表达可分为组成性表达和选择性表达两大类。在个体的所有细胞中持续表达的基因通常被称为管家基因（housekeeping gene），其表达模式就叫组成性基因表达：这些基因是细胞结构和代谢过程中所必需的——编码 rRNA、肌动蛋白、微管蛋白的基因都在此列——而且通常能保持较高的表达量。**管家基因的表达量不随细胞正在做什么而变，所以实验研究中常把 rRNA、肌动蛋白或微管蛋白基因用作 RT–PCR 的对照。**另一侧，在特定环境信号刺激下被激活、表达产物增加的基因叫可诱导基因（inducible gene），被环境信号所抑制的叫可阻遏基因（repressible gene）；对这两类基因的调控大多是在调节其转录和翻译的速率，从而改变编码产物的水平。",
      src: "现分 p.296"
    },
    {
      link_en: "and being switched on always has an address as well as a date",
      link_cn: "而「被打开」这件事，除了时间，还有地点",
      recall_en: "the globin switch two steps up is the textbook case of the time half",
      recall_cn: "上面两步那个珠蛋白的更替，就是「时间」这一半的标准例子",
      en: "Temporal specificity means a given gene is expressed strictly in a particular time order, as function requires; in a multicellular organism it is also called stage specificity, and the human globin genes running ε to γ to β are the case already in hand. Spatial specificity means a gene product appears in a particular spatial order among tissues as the individual grows, and because that distribution follows from which cells sit in which organ it is also called cell or tissue specificity — the genes regulating segment formation in the Drosophila embryo show it plainly. **Expression that is specific in both time and space is what maintains proliferation and differentiation of cells, maintains the growth and development of the individual, and helps the organism adapt to changes outside it.**",
      cn: "基因表达的时间特异性（temporal specificity）是指某一特定基因的表达严格按特定的时间顺序发生；在多细胞生物中它又称阶段特异性（stage specificity），人体不同类型珠蛋白基因从 ε 到 γ 再到 β 的更替，就是现成的例子。空间特异性（spatial specificity）是指某种基因产物在个体生长过程中按不同组织的空间顺序出现；这种分布差异实际上由细胞在不同器官的分布所决定，所以又称细胞或组织特异性——果蝇胚胎发育中许多调节体节形成的基因，就显著地表现出这一点。**在时间和空间上都特异的表达调控，维持着细胞的增殖与分化、个体的生长与发育，也有助于生物体更好地适应外界环境的变化。**",
      src: "现分 p.296"
    },
    {
      link_en: "so where along the path from DNA to protein does the control actually get applied?",
      link_cn: "那么，从 DNA 到蛋白质这条路上，控制究竟加在哪一步？",
      en: "Eukaryotic regulation splits along two axes. One axis is duration: transient or reversible regulation corresponds to what a prokaryotic cell does about a change in conditions, covering the rise and fall of a substrate or a hormone and the adjustment of enzyme activity in different phases of the cell cycle, while developmental or irreversible regulation is the part that decides the whole course of growth, differentiation and development. The other axis is the step at which control is applied: transcriptional regulation, which divides into DNA regulation at the genetic level and chromatin regulation at the epigenetic level, and post-transcriptional regulation, which divides into RNA processing, translational regulation and protein maturation and processing. **The most obvious feature of eukaryotic gene regulation is that a particular gene can be activated at a particular time in a particular cell**, so differentiation and development run as a scheduled, ordered and irreversible programme rather than as a reply to the nutrients at hand.",
      cn: "真核基因调控可以沿两个方向切开。一个方向是持续时间：瞬时调控又称可逆性调控，相当于原核细胞对环境条件变化所做出的反应，包括某种底物或激素水平的升降、细胞周期不同阶段中酶活性的调节；发育调控又称不可逆调控，它决定了真核细胞生长、分化、发育的全部进程。另一个方向是调控加在哪一步：转录水平调控往下分为遗传水平的 DNA 调控和表观遗传水平的染色质调控；转录后水平调控往下分为 RNA 加工成熟过程的调控、翻译水平的调控和蛋白质加工水平的调控。**真核基因表达调控最明显的特征，是能在特定时间、特定的细胞中激活特定的基因，从而实现「预定」的、有序的、不可逆转的分化与发育过程，而非仅仅对眼前的营养水平作出反应。**",
      src: "现分 p.297（图 8-9）"
    }
  ]
};
