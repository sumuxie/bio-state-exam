/* Spine for §8.3 — 真核基因表达的染色质修饰和表观遗传调控.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 311–328.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. Chicken erythroblasts and oviduct cells; 500 rDNA
      copies becoming two million; codon 273 of p53; K9, K14, K18, K23, K27.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (recall_en / recall_cn).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   VOCABULARY IS THIS EDITION'S. The fifth edition does not use the names Xist,
   HOTAIR, SWI/SNF, MeCP2, DNMT1 or DNMT3a anywhere in this section. It says MeCP1,
   and it calls the two DNA methyltransferases 日常型 (maintenance) and 从头合成型
   (de novo). Nothing here is imported from outside those pages; a claim that had to
   come from elsewhere would carry beyond: true and say so.

   THE ARC. One question runs through all eighteen steps: the base sequence of a
   cell is fixed, so how does a liver cell read different genes from a red-cell
   precursor? Steps 1–3 give the one class of answers that does change the genome —
   amplification and rearrangement — and then everything after leaves the sequence
   alone. Chromatin has to be opened before it can be transcribed (4–6), a methyl on
   the DNA decides whether it opens (7–11), an acetyl on the histone tails decides
   the same thing from the protein side (12–14), a methyl on those tails writes an
   address that spreads and is copied into the daughter cell (15–17), and a methyl
   on the transcript itself does the job once more after transcription (18). The
   through-line of the whole section is that a mark recruits the enzyme that writes
   it — which is simultaneously why heterochromatin spreads and why any of this is
   heritable at all. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-8-3 */
window.BIOLITE_SPINE["M-8-3"] = {
  /* Declared rather than left implicit, as SPINE_SPEC asks. Group one is what a
     reader arriving at chapter 8 genuinely holds; group two is ordinary vocabulary
     that happens to also be a glossary entry. Nothing load-bearing is parked here:
     chromatin, nucleosome, histone, euchromatin, heterochromatin, CpG island,
     5-mC, HAT, HDAC, MeCP1, HKMT, PRMT, LSD1 and m⁶A are all introduced in the
     prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "rRNA", "gene", "exon", "intron", "promoter",
            "enhancer", "transcription", "translation", "replication", "chromosome",
            "genome", "enzyme", "protein", "cell", "nucleus", "embryo", "mutation",
            "amino acid", "lysine", "arginine", "serine", "cytosine", "adenine",
            "guanine", "thymine", "base pair", "codon", "RNA polymerase",
            "transcription factor", "ribosome", "meiosis", "splicing", "antibody",
            "immunoglobulin", "cancer", "yeast", "template", "complex", "domain",
            "subunit", "family", "marker", "signal", "activity", "affinity",
            "charge", "structure", "region", "site", "unit", "residue", "group",
            "sequence", "expression", "differentiation", "development"],
  nodeTitle_en: "Chromatin modification and epigenetic regulation",
  nodeTitle_cn: "真核基因表达的染色质修饰和表观遗传调控",
  title_en: "The base sequence stays the same and which genes a cell can read changes anyway, because **a methyl group on the DNA and an acetyl or methyl group on the histone tails decide how tightly chromatin is packed, and only loosened chromatin gets transcribed**",
  title_cn: "碱基序列一个都没变，细胞能读的基因却变了，因为**DNA 上的一个甲基、组蛋白尾巴上的一个乙酰基或甲基，决定了染色质包得有多紧；而只有松开的染色质才会被转录**",
  steps: [
    {
      en: "Epigenetic regulation of gene expression is the structural adjustment made before transcription starts, at the level of chromatin — the DNA-and-protein material a eukaryotic chromosome is actually built out of. It has two arms: modification of the DNA itself, which is DNA methylation, and modification of the histones — the proteins that eukaryotic DNA is wound onto — which is histone acetylation and histone methylation. **The base sequence is left untouched and the function changes anyway, and a daughter cell inherits the change; that combination is what the word epigenetic names.**",
      cn: "真核基因表达的表观遗传调控（epigenetic regulation），指的是在转录发生之前、在染色质（chromatin，即真核染色体里 DNA 与蛋白质缠在一起的那种物质）这个层面上做的结构调整。它有两条线：一是对 DNA 本身的修饰，即 DNA 甲基化（DNA methylation）；二是对组蛋白（histone，DNA 缠绕其上的那类蛋白质）的修饰，即组蛋白乙酰化（histone acetylation）与组蛋白甲基化（histone methylation）。**碱基序列一个都没变，功能却变了，而且这种改变还能被子代细胞继承；「表观遗传」这个词说的正是这两件事凑在一起。**",
      src: "现分 p.311"
    },
    {
      link_en: "one class of eukaryotic control does change the sequence, and it is worth getting out of the way first",
      link_cn: "有一类真核调控确实改动了序列，先把它放在一边",
      en: "A whole class of control in eukaryotes works by altering the DNA template itself, through gene loss, gene amplification, gene rearrangement and translocation — which is what separates it from control at the transcriptional or translational level, where the genome is left as it stands. Gene amplification is a large and specific rise in the copy number of one gene: a Xenopus oocyte starts with about 500 copies of its rRNA gene (rDNA), and by the diplotene stage of meiosis it holds about 2 million, an increase of nearly 4 000-fold, enough to assemble 10¹² ribosomes for the heavy protein synthesis of cleavage and early embryo. **Once the oocyte matures the surplus rDNA is degraded away, and by the time division has produced a few hundred cells the excess is gone — the amplification is a temporary production run with an end date.**",
      cn: "真核生物有一整类调控，是直接改动 DNA 模板本身的，方式包括基因丢失、基因扩增、基因重排和移位——这一点使它区别于转录水平和翻译水平的调控，后两者并不动基因组本身。基因扩增（gene amplification）指的是某些基因的拷贝数专一性地大量增加：非洲爪蟾卵母细胞原本约有 500 个 rRNA 基因（rDNA）拷贝，到减数分裂 I 的双线期已增至约 200 万个，扩增近 4 000 倍，足够合成 10¹² 个核糖体，供卵裂期和胚胎期大量合成蛋白质之用。**卵母细胞一旦成熟，多余的 rDNA 就被逐渐降解；等分裂到几百个细胞时，过剩现象已完全消失——这次扩增是一场有期限的临时扩产。**",
      src: "现分 p.311, p.312"
    },
    {
      link_en: "and the other way to change the template is to move a piece of it",
      link_cn: "改动模板的另一条路，是把它的某一段挪个地方",
      en: "Gene rearrangement means moving a gene from a position far from any promoter to a position right beside one, which is what starts its transcription. Immunoglobulin genes are the standard case: the human heavy-chain locus IGH on chromosome 14 carries 86 V segments, 30 D segments, 9 J segments and 11 C segments, lying far apart in the embryonic cell, and as a B lymphocyte differentiates, DNA recombination within the chromosome joins one of each into a single gene with expression activity. The human globin family changes gear by the same kind of event: deletion of spacer S₁ joins regulator gene R₁ to acceptor gene A₁ and the neighbouring structural gene makes the ε chain; loss of S₂ forms R₂A₂ and the γ chain between months 3 and 9; loss of S₃ after birth forms R₃A₃ and switches on β and δ. **Rearrangement is how one genome puts out a different protein at each developmental stage without keeping a separate regulatory system for every stage.**",
      cn: "基因重排（gene rearrangement）就是把一个基因从远离启动子的地方挪到紧挨启动子的位置，从而启动它的转录。免疫球蛋白基因是标准例子：人 14 号染色体上的重链基因座 IGH 带有 86 个 V 片段、30 个 D 片段、9 个 J 片段和 11 个 C 片段，在胚胎细胞中彼此相隔很远；B 淋巴细胞分化时，染色体内 DNA 重组把四类片段各取其一连成一个有表达活性的基因。人珠蛋白基因家族靠同一类事件换挡：间隔序列 S₁ 缺失，使调节基因 R₁ 与受体基因 A₁ 相连，邻近的结构基因转录出 ε 链；S₂ 缺失形成 R₂A₂，在胚胎 3～9 个月转录出 γ 链；出生后 S₃ 缺失形成 R₃A₃，激活 β 与 δ。**重排让同一套基因组在不同发育阶段拿出不同的蛋白，而不必为每个阶段各配一套独立的调控系统。**",
      src: "现分 p.313（表 8-7、图 8-25）"
    },
    {
      link_en: "everything from here on leaves the sequence alone and works on how tightly it is packed",
      link_cn: "从这里往后，序列一个碱基都不动，动的是它被包得多紧",
      en: "Active transcription of a eukaryotic gene happens on euchromatin, which is the loosely packed portion of chromatin, as against the densely packed portion called heterochromatin. Before transcription begins, a particular region unwinds and relaxes into free DNA: the nucleosome — the repeating unit chromatin is built from — is removed or altered there, and the local conformation of the DNA itself can change, in places turning from the ordinary right-handed form into a left-handed form named Z-DNA. **Opening that region is what exposes the structural gene and lets transcription factors bind the promoter DNA and trigger transcription, so loosening the chromatin is itself the switch.**",
      cn: "真核基因的活跃转录发生在常染色质（euchromatin）上，即染色质中包装较松的那一部分，与包装致密的异染色质（heterochromatin）相对。转录发生之前，特定区域会解旋松弛成自由 DNA：那里的核小体（nucleosome，即构成染色质的重复结构单元）被消除或改变，DNA 局部构象也会变化，有的地方甚至从常见的右旋型变成左旋型，即 Z-DNA。**把这段区域打开，结构基因才暴露出来，转录因子才能结合到启动区 DNA 上并诱发转录——松开染色质这个动作本身就是开关。**",
      src: "现分 p.311"
    },
    {
      link_en: "how loose a stretch is can be read off with an enzyme",
      link_cn: "一段染色质有多松，用一种酶就能读出来",
      en: "DNase I is an enzyme that cuts DNA, and a gene in the active state is degraded by it far more readily than a gene in the inactive state. In chromatin from chicken erythroblasts, which are precursors of red blood cells, the β-globin gene is cut much more easily than the ovalbumin gene; in chromatin from chicken oviduct cells the preference is exactly the reverse, and ovalbumin is the one degraded first. **Sensitivity to DNase I follows which genes that particular tissue is transcribing, so a nuclease reads out the open state of chromatin gene by gene and tissue by tissue.**",
      cn: "DNA 酶 I（DNase I）是一种切割 DNA 的酶；处于活跃状态的基因，比非活跃状态的基因更容易被它降解。鸡成红细胞（erythroblast，红细胞的前体细胞）的染色质里，β-血红蛋白基因比卵清蛋白基因更容易被切开；而在鸡输卵管细胞的染色质里，优先被降解的恰好反过来，是卵清蛋白基因。**对 DNA 酶 I 的敏感性，跟着「这块组织正在转录哪些基因」走；于是一个核酸酶就能逐基因、逐组织地把染色质的开放状态读出来。**",
      src: "现分 p.311"
    },
    {
      link_en: "and that sensitivity concentrates at a few short spots rather than spreading evenly",
      link_cn: "而这种敏感性集中在几个很短的点上，并非均匀铺开",
      recall_en: "the same nuclease as the step above, now used to map a position",
      recall_cn: "和上一步是同一种核酸酶，这次用来定位",
      en: "Chromatin carrying an actively expressed gene contains one or several DNase I hypersensitive sites, which are short stretches attacked far faster than everything around them, and most of them sit in the promoter region at the gene's 5′ end. On the Drosophila salivary gland chromosome, the sgs4 gene has one such site about 330 bp and another about 405 bp upstream of its transcription unit, and a mutant that has lost the roughly 100 bp of DNA containing both can no longer synthesise the protein that gene encodes. The chicken β-globin gene puts its hypersensitive region at −50 to −280 bp, and S1 nuclease, an enzyme that cuts only single-stranded DNA, does hydrolyse the chromosomal DNA there while the gene is actively expressed. **Part of the promoter sequence has come apart into single strands and can no longer stay wound on the nucleosome, so it lies bare on the histone surface — the same exposure that lets RNA polymerase bind is what lets a nuclease cut.**",
      cn: "活跃表达基因所在的染色质上，一般有一个或数个 DNA 酶 I 超敏感位点（hypersensitive site），即比周围被切得快得多的那些短区段，它们大多位于基因 5′ 端的启动区。果蝇唾腺染色体上，sgs4 基因转录区上游约 330 bp 和约 405 bp 处各有一个超敏感位点；有一种突变体缺失了包含这两个位点在内的约 100 个碱基对，就再也不能合成该基因的产物，说明两个完整的超敏感位点是这个基因转录所必需的。鸡 β-血红蛋白基因的超敏感区在 5′ 端 −50～−280 碱基对；用只切单链 DNA 的 S1 核酸酶处理该基因活跃表达时的染色体 DNA，确实有 DNA 被水解。**启动区的部分序列解开成了单链，无法继续缠在核小体上，于是裸露在组蛋白表面——让 RNA 聚合酶结合的正是这份暴露，让核酸酶下刀的也是它。**",
      src: "现分 p.311, p.312"
    },
    {
      link_en: "so what decides whether a region opens? on the DNA side, a single methyl group",
      link_cn: "那么一段区域开不开，由什么决定？在 DNA 这一侧，由一个甲基决定",
      en: "DNA methylation puts a methyl group onto a base — the main product is 5-methylcytosine (5-mC), with smaller amounts of N⁶-methyladenine and 7-methylguanine. Methylation shuts down the activity of certain genes and demethylation — taking those methyl groups off again — brings a gene back into expression, because methylation alters chromatin structure, DNA conformation, DNA stability and the way DNA and protein interact. Its level is highest near the centromere and over transposons, pseudogenes and small-RNA coding regions — broadly the parts of the genome kept inactive — and it takes part in chromosome imprinting and in the inactivation of an X chromosome. In eukaryotes 5-mC appears mostly at CpG, meaning a cytosine with a guanine next to it on the same strand, and a methylated cytosine deaminates spontaneously and easily to thymine, so CpG turns up across the genome far less often than its base composition predicts. **Where CpG dinucleotides do survive in a run, that stretch is called a CpG island; housekeeping genes are rich in CpG islands at their promoters, and those islands are held unmethylated.**",
      cn: "DNA 甲基化是在碱基上加一个甲基，主要产物是 5-甲基胞嘧啶（5-mC），另有少量 N⁶-甲基腺嘌呤和 7-甲基鸟嘌呤。甲基化能关闭某些基因的活性，而去甲基化（demethylation，即把这些甲基去掉）则诱导基因重新活化表达；原因是甲基化改变了染色质结构、DNA 构象、DNA 稳定性以及 DNA 与蛋白质相互作用的方式。它的分布是有偏向的：着丝粒附近水平最高，高水平区域涵盖多数转座子、假基因和小 RNA 编码区，也就是基因组里大体不活跃的那些部分；它还参与染色体印迹和 X 染色体失活的调控。真核生物的 5-mC 主要出现在 CpG 序列，即一个胞嘧啶后面紧跟一个鸟嘌呤；被甲基化的胞嘧啶极易自发脱氨变成胸腺嘧啶，所以 CpG 在基因组中出现的频率远低于按碱基组成算出来的频率。**CpG 成串出现的那段序列被称为 CpG 岛（CpG island）；管家基因的启动区富含 CpG 岛，而这些 CpG 岛是不被甲基化的。**",
      src: "现分 p.314, p.315"
    },
    {
      link_en: "a pattern that switches genes off is only useful if it survives replication",
      link_cn: "一套用来关基因的甲基化模式，得能挺过 DNA 复制才有用",
      en: "Eukaryotic cells carry two methyltransferase activities, meaning two kinds of enzyme that transfer a methyl group onto DNA. The maintenance type, 日常型, acts on a half-methylated double helix in which the mother strand carries the marks and the newly made strand does not: it has a high affinity for half-methylated DNA and rapidly methylates the cytosine sitting opposite each methylcytosine, which is how a methylation pattern comes through DNA replication and cell division unchanged. The de novo type, 从头合成型, converts an unmethylated CpG into mCpG with no guidance from a mother strand, and does it slowly. **De novo methylation is the activity that decides which particular gene comes under methylation control in the first place, and maintenance methylation is what makes that decision heritable.**",
      cn: "真核细胞内存在两种甲基化酶活性，即两类把甲基转移到 DNA 上的酶。日常型甲基转移酶（maintenance）作用于半甲基化的双链：母链（模板链）带甲基而新合成链不带，该酶对半甲基化 DNA 有很高的亲和力，迅速把与甲基胞嘧啶相对的那个胞嘧啶甲基化，从而保证 DNA 复制及细胞分裂之后甲基化模式不变。从头合成型甲基转移酶（de novo）则把未甲基化的 CpG 变成 mCpG，不需要母链指导，但速度很慢。**决定哪个特异基因落进甲基化调控之下的，是从头合成型甲基转移酶；而让这个决定能被遗传下去的，是日常型甲基转移酶。**",
      src: "现分 p.315"
    },
    {
      link_en: "a methyl group is small, so how does it reach a protein that has not touched it?",
      link_cn: "一个甲基那么小，它是怎么影响到根本没碰它的蛋白的？",
      recall_en: "Z-DNA, the left-handed form named three steps up",
      recall_cn: "三步之前提到过的左旋型，即 Z-DNA",
      en: "A methyl group acts on transcription by changing the shape of the DNA. Histone H₁ complexed with methylated CCGG-containing DNA and the same H₁ complexed with the unmethylated version give conformations that differ greatly, and past a certain degree of methylation the double helix converts from ordinary B-DNA to Z-DNA. Z-DNA is contracted and its helix is deepened, so the elements that many protein factors depend on for binding are drawn down into the major groove where they are hard to reach. **Methylation lowers the efficiency with which transcription factors bind promoter DNA, and methylated DNA is also a poorer in vitro template for RNA polymerase, so the block falls exactly at the step where a protein has to touch the double helix.**",
      cn: "甲基基团是靠改变 DNA 的形状来影响转录的。组蛋白 H₁ 与含 CCGG 序列的甲基化 DNA、非甲基化 DNA 分别形成复合体时，DNA 的构型差别很大；甲基化达到一定程度，双螺旋会由常规的 B-DNA 过渡到 Z-DNA。Z-DNA 结构收缩、螺旋加深，许多蛋白质因子赖以结合的元件被缩进大沟里，够不着。**甲基化降低了转录因子与启动区 DNA 的结合效率，带甲基的 DNA 作为 RNA 聚合酶体外转录模板的活性也更低——阻断恰好发生在蛋白质必须接触双螺旋的那一步。**",
      src: "现分 p.315"
    },
    {
      link_en: "which makes methylation a quantity rather than a yes-or-no",
      link_cn: "于是甲基化是个连续的量，而不是一个是非题",
      en: "5-mC is distributed unevenly along a gene — the 5′ and 3′ ends are rich in methylation sites — and it is the density of methylation over the promoter that correlates with how strongly transcription is repressed. Three globin genes differ enough in CpG density to make the point: mouse α-globin has 28 CpG in 1.4 kb, one per 50 bp; human γ-globin has 26 in 3.3 kb, one per 126 bp; human α-globin has 141 in 1.5 kb, one per 10 bp. Introduced into human HeLa cells with every CpG methylated, all three stay silent; fit an SV40 enhancer to the promoter and the two low-density genes are expressed again, the high-density human α gene is transcribed when only partly methylated, and it stays silent when its dense CpG is fully methylated. Repression strength runs in parallel with the binding of MeCP1 — methyl CpG-binding protein 1 — which grips methylated DNA more tightly as density rises. **Whether a promoter still transcribes is settled by the balance between two quantities: the density of methylated CpG, and the strength of the promoter itself.**",
      cn: "5-mC 在基因上的分布并不均匀——5′ 端和 3′ 端往往富含甲基化位点——而与转录受抑制程度密切相关的，是启动区上甲基化的密度。三个珠蛋白基因的 CpG 密度差别足以说明问题：小鼠 α-珠蛋白基因 1.4 kb 内有 28 个 CpG（相当于每 50 bp 一个），人 γ-珠蛋白基因 3.3 kb 内有 26 个（每 126 bp 一个），人 α-珠蛋白基因 1.5 kb 内有 141 个（每 10 bp 一个）。把它们导入人 HeLa 细胞：CpG 一旦被完全甲基化，三个基因都不表达；在启动区装上 SV40 增强子后，两个低密度基因恢复表达，高密度的人 α-珠蛋白基因在只部分甲基化时也能被转录，而在高密度 CpG 被完全甲基化时仍然不转录。抑制的强度与 MeCP1（methyl CpG-binding protein 1）结合 DNA 的能力成正相关，密度越高它抓得越牢。**一个启动子还转不转录，由两个量之间的平衡决定：甲基化 CpG 的密度，和启动子本身的强度。**",
      src: "现分 p.315–316（图 8-27、图 8-28）"
    },
    {
      link_en: "and the same methyl group has a second, permanent effect on the sequence under it",
      link_cn: "同一个甲基，对它底下那段序列还有第二个、不可逆的后果",
      en: "Methylation raises the mutation frequency of the site it marks. A 5-mC that loses its amino group becomes thymine, and a T is hard for the repair machinery to recognise as wrong and correct, so deamination at a given 5-mC writes a heritable C → T transition into the DNA, and if the site lies in a functional region the expression of that gene is disordered. More than a third of human hereditary disease caused by base transitions traces back to methylation of the cytosine in CpG. In brain tumours, breast cancer and rectal cancer, codon 273 of the p53 gene contains a CpG and commonly mutates from CGT to CAT or TGT, turning arginine into histidine or cysteine; in non-small-cell lung cancer the C → T rate at that one position reaches 59.3%. **5-mC is therefore an endogenous mutagen as well as a switch: the same chemistry that reversibly silences a gene also rewrites its sequence permanently.**",
      cn: "DNA 甲基化还提高了该位点的突变频率。5-mC 脱去氨基后生成胸腺嘧啶（T），而 T 不易被修复系统识别和矫正，于是特定部位的 5-mC 脱氨基会在 DNA 分子中引入一个可遗传的 C → T 转换；若这个位点落在功能区域，就可能造成该基因表达的紊乱。人体中由碱基转换引起的遗传病，有三分之一以上源自 CpG 中胞嘧啶的甲基化。在脑瘤、乳腺癌和直肠癌细胞中，p53 基因第 273 位密码子含有 CpG 序列，常由 CGT 突变为 CAT 或 TGT（Arg → His 或 Cys）；非小细胞肺癌中该位点 C → T 的突变频率高达 59.3%。**所以 5-mC 既是开关，也是内源性诱变剂：同一种化学修饰可逆地关掉一个基因，也永久地改写了它的序列。**",
      src: "现分 p.314, p.317"
    },
    {
      link_en: "the other half of the modifications sits on the proteins the DNA is wound around",
      link_cn: "另一半修饰不做在 DNA 上，做在 DNA 缠绕的那些蛋白上",
      recall_en: "the nucleosome, named when the region was first opened up",
      recall_cn: "核小体——前面讲染色质打开时点过一次名",
      en: "A nucleosome is the basic structural unit of chromatin: a histone octamer, made of two tetramers each containing H₂A, H₂B, H₃ and H₄, with DNA wound twice around it, followed by a spacer of 20 to 200 bp before the next one, so that under the electron microscope a run of nucleosomes looks like a string of beads about 10 nm across. A further histone, H₁, binds outside the nucleosome core and stabilises both the run of nucleosomes and the higher-order structure of chromatin. The N-terminal part of each core histone points outward and is called its tail. **A histone tail carries the residues that get modified — acetyl, phosphate, methyl and ubiquitin groups sit on named lysines and serines such as K9, K14, K18, K23 and K27 of H₃ — so the tail is the surface on which chromatin gets written.**",
      cn: "核小体（nucleosome）是组成染色质的基本结构单元：由组蛋白八聚体（两个各含 H₂A、H₂B、H₃ 和 H₄ 的四聚体）与缠绕其上两圈的 DNA 组成，相邻核小体之间有 20～200 bp 的间隔区；电镜下一列核小体看上去像一串珠子，每颗直径约 10 nm。另一种组蛋白 H₁ 结合在核小体核心之外，起到稳定核小体序列和染色质高级结构的作用。每个核心组蛋白朝向外部的 N 端部分被称为「尾巴」。**组蛋白尾巴上带着那些会被修饰的残基——乙酰基、磷酸基、甲基和泛素基团分别加在指定的赖氨酸、丝氨酸上，例如 H₃ 的 K9、K14、K18、K23、K27——所以尾巴就是染色质被写字的那个面。**",
      src: "现分 p.317（图 8-29）"
    },
    {
      link_en: "put an acetyl group on that tail and the packing loosens",
      link_cn: "在这条尾巴上加一个乙酰基，包装就松了",
      en: "Histone acetyltransferase (HAT) is the enzyme that acetylates a histone tail, and histone deacetylase (HDAC) is the enzyme that removes the acetyl group again. Acetylation lands on lysine residues of the N-terminal tail, and the side-chain amino group of a lysine carries a positive charge which the acetyl group neutralises. With that positive charge gone, the tail loses affinity for the negatively charged DNA, the nucleosome takes up a conformation that suits binding by transcription regulatory proteins, and those proteins reach the chromatin more easily. Many transcription activators have HAT activity of their own: the catalytic subunit of the transcription-linked HATs is a homologue of the yeast regulatory protein GCN5, which acetylates H₃ and H₄; TAFⅡ250 is a subunit of the TFⅡD complex and acetylates the same two; the coactivators PCAF and p300/CBP do it too, p300/CBP reaching all four of H₂A, H₂B, H₃ and H₄. **Nucleosomes built from acetylated histones are looser than nucleosomes built from unmodified ones, and a looser nucleosome raises the transcriptional activity of that stretch of genome — acetylation is the activating mark.**",
      cn: "组蛋白乙酰基转移酶（histone acetyltransferase，HAT）是给组蛋白尾巴加乙酰基的酶，组蛋白去乙酰化酶（histone deacetylase，HDAC）是把乙酰基再摘下来的酶。乙酰化加在 N 端尾巴的赖氨酸残基上，而赖氨酸侧链的氨基带正电荷，乙酰基把这个正电荷中和掉。正电荷一没，尾巴与带负电的 DNA 之间的亲和性就下降，核小体的构象转向有利于转录调节蛋白结合，这些蛋白也就更容易接触到染色质。许多转录激活因子本身就带 HAT 活性：与转录有关的 HAT 催化亚基是酵母调控蛋白 GCN5 的同源物，而 GCN5 能乙酰化 H₃ 和 H₄；TAFⅡ250 是 TFⅡD 复合物的一个亚基，同样使 H₃、H₄ 乙酰化；转录共激活子 PCAF 与 p300/CBP 也是如此，后者能使 H₂A、H₂B、H₃、H₄ 四种都乙酰化。**受乙酰化修饰的组蛋白形成的核小体，比未修饰的松散；而核小体一松，这一段基因组的转录活性就提高——乙酰化是那个「开」的标记。**",
      src: "现分 p.317, p.318, p.319（图 8-30）"
    },
    {
      link_en: "take the acetyl off again and the same mechanism runs backwards",
      link_cn: "把乙酰基摘掉，同一套机制就反着走",
      recall_en: "the deacetylase named alongside HAT in the step above",
      recall_cn: "上一步和 HAT 一起点过名的那种去乙酰化酶",
      en: "Deacetylation silences genes, and it is aimed rather than general. The yeast deacetylase Rpd3 and the human HDAC1 both act inside very large protein complexes: Rpd3 specifically strips acetyl groups off histones, the nucleosomes then pack closer together, and together with the transcriptional corepressor Sin3 the complex represses transcription of the gene at whose promoter it sits. Retinoblastoma protein (Rb) is a tumour suppressor, a protein whose loss releases cell division, and it binds transcription activators of the E2F class at the promoters of cell-cycle genes; Rb bound to E2F then recruits HDAC1, that promoter region is specifically deacetylated, the chromatin there condenses and the target gene loses its transcriptional activity. **A deacetylase complex has to be brought to one promoter before it can act, so which genes fall silent is decided by whatever protein does the recruiting — for the cell-cycle genes, the recruiter is Rb.**",
      cn: "去乙酰化使基因沉默，而且它是有指向的，并非全面铺开。酵母的 Rpd3 与人的 HDAC1 都在很大的蛋白复合体中发挥作用：Rpd3 能特异性去除组蛋白上的乙酰基团，核小体随之相互靠近，再在转录共抑制子 Sin3 的协同下，抑制其所在启动子区基因的转录。视网膜母细胞瘤蛋白（retinoblastoma protein，Rb）是一种肿瘤抑制因子，即一旦失去就会放开细胞分裂的那类蛋白；它与 E2F 类转录激活因子在细胞周期基因的启动子上结合，结合了 E2F 的 Rb 再把 HDAC1 募集过来，使该启动子区发生特异性的去乙酰化，该区段染色质浓缩，靶基因的转录活性随之消失。**去乙酰化酶复合体必须先被带到某一个启动子上才起作用，所以「哪些基因被沉默」是由负责募集它的那个蛋白决定的——在细胞周期基因这里，负责募集的就是 Rb。**",
      src: "现分 p.318, p.319（图 8-31、图 8-32）"
    },
    {
      link_en: "the same tails also take methyl groups, and a methyl carries an address",
      link_cn: "同一条尾巴上还能加甲基，而一个甲基是带地址含义的",
      en: "Lysine residues on a histone tail can be methylated as well, and the meaning depends on which lysine of which histone is carrying how many methyl groups. H3K9me3 — three methyl groups on lysine 9 of histone H₃ — is found at the centromere and the telomere and marks constitutive heterochromatin, which is the portion held condensed permanently. H3K27me3 is found on silenced genes and goes with repression of expression. H3K4me3 is concentrated at transcription start sites, H3K36me3 is spread across the whole transcribed region, and both are read as marks of a transcriptionally active region. **One chemical group means opposite things at different residues: a methyl on K9 or K27 of H₃ shuts a region down, and a methyl on K4 or K36 marks it as being transcribed.**",
      cn: "组蛋白尾巴上的赖氨酸同样能被甲基化，而含义取决于甲基加在哪个组蛋白的哪个赖氨酸上、加了几个。H3K9me3，即组蛋白 H₃ 第 9 位赖氨酸上的三甲基化，常见于中心粒和端粒，标记组成型异染色质，也就是长期保持致密的那一部分。H3K27me3 出现在沉默基因上，与基因表达的抑制相伴。H3K4me3 富集在转录起始位点，H3K36me3 遍布整个转录区，两者都被视作转录活性区的标记。**同一个化学基团加在不同残基上，意思正好相反：甲基加在 H₃ 的 K9 或 K27 上，是把这块区域关掉；加在 K4 或 K36 上，则是标出它正在被转录。**",
      src: "现分 p.319, p.320（表 8-8）"
    },
    {
      link_en: "and a mark that has landed pulls in the enzyme that made it, which has two consequences at once",
      link_cn: "而一个已经落下的标记会把写它的酶拉过来，这一件事带来两个后果",
      recall_en: "the maintenance methyltransferase copying a DNA pattern through replication used the same trick",
      recall_cn: "前面日常型甲基转移酶把甲基化模式带过复制，用的是同一个手法",
      en: "Facultative heterochromatinisation covers gene regions that need silencing at particular stages of growth, and the commonest animal example is the one X chromosome that is randomly inactivated in a female: it carries very high levels of H3K27me3, which is bound by polycomb repressor complexes (PRCs), and one member of the core PRC, E(Z), is itself the H3K27 methyltransferase, so the mark spreads outward from a nucleation centre and heterochromatinises a whole neighbouring stretch. At centromeres and telomeres HP1 forms dimers that recognise and bind H3K9me2/3 and then recruit the H3K9 methyltransferase SUV39, which trimethylates freshly assembled histones nearby and holds those regions constitutively heterochromatic. **When a mother cell divides, the marks on its chromatin recruit the matching methyltransferase to the newly replicated DNA, so the daughter is stamped at the same positions — that is how an epigenetic mark is inherited.**",
      cn: "非组成型异染色质化多发生在不同生长发育时期一些需要被沉默的基因区域，动物中最常见的形式就是雌性体内随机失活的那条 X 染色体：它带有很高水平的 H3K27me3，而 H3K27me3 上往往结合着 polycomb 抑制复合物（PRCs）；核心 PRC 的成员之一 E(Z) 本身就是 H3K27 甲基转移酶，于是这个标记从异染色质成核中心向周围扩散，把附近一整段染色质都异染色质化。中心粒和端粒一带则由 HP1 形成二聚体识别并结合 H3K9me2/3，再招募 H3K9 甲基转移酶 SUV39，给邻近新组装的组蛋白打上三甲基，使这些区域始终维持异染色质状态。**母细胞分裂时，染色质上已有的标记把相应的甲基转移酶招到新复制的 DNA 旁边，于是子代细胞在相同位置被打上同样的标记——表观修饰之所以可遗传，靠的全部就是这一步招募。**",
      src: "现分 p.320, p.321（图 8-33）"
    },
    {
      link_en: "writing a mark and erasing it are two separate enzyme families, and the erasers were found late",
      link_cn: "写标记和擦标记是两类不同的酶，而擦的那一类是很晚才被发现的",
      en: "Two kinds of residue on a histone accept a methyl group, lysine and arginine, so the methyltransferases split into histone lysine methyltransferases (HKMT), almost all of which carry a catalytic region called the SET domain, and protein arginine methyltransferases (PRMT). How many methyls an HKMT can add is set by the steric hindrance built from a few key amino acids at its catalytic centre: DIM5 catalyses mono-, di- and trimethylation of H3K9 while SET7/9 manages only monomethylation of H3K4, and swapping the corresponding core amino acids between the two swaps their capabilities as well. Removal was long assumed impossible, and only from 2002 were histone demethylases found: LSD1, the lysine-specific demethylase, uses FAD as its cofactor and demethylates H3K4me1/2, while the jumonji domain carried by JMJD2 and many others is the catalytic region that can strip a trimethyl group. **LSD1 bound to the Co-REST repressor complex demethylates H3K4me1/2 and LSD1 bound to the androgen receptor demethylates H3K9, so one demethylase activates or represses transcription according to the partner it is working with.**",
      cn: "组蛋白上有两种残基可以被甲基化修饰，赖氨酸（Lys）和精氨酸（Arg），据此把组蛋白甲基转移酶分成两类：组蛋白赖氨酸甲基转移酶（histone lysine methyltransferase，HKMT），它们几乎都拥有一个叫 SET 结构域的催化活性区；以及蛋白质精氨酸甲基转移酶（protein arginine methyltransferase，PRMT）。一个 HKMT 能加几个甲基，由其催化中心几个关键氨基酸构成的空间位阻决定：DIM5 能催化 H3K9 的单、双、三甲基化，而 SET7/9 只能催化 H3K4 的单甲基化；把两者相应的核心氨基酸互换，这两种能力也跟着互换。很长一段时间里，人们认为组蛋白甲基化是稳定存在的，2002 年以后才逐渐发现去甲基化酶：最早的赖氨酸去甲基化酶 LSD1（lysine-specific demethylase）以 FAD 为辅助因子，催化 H3K4me1/2 的去甲基化；而 JMJD2 等许多酶所带的 jumonji 结构域，则是能脱掉三甲基的催化活性区。**LSD1 与 Co-REST 抑制复合物结合时催化 H3K4me1/2 的去甲基化，与雄激素受体结合时催化 H3K9 的去甲基化——同一个去甲基化酶是激活还是抑制转录，取决于跟它搭档的是谁。**",
      src: "现分 p.321, p.322（图 8-35、图 8-36）"
    },
    {
      link_en: "and one more methyl group waits on the transcript itself, after all of this is over",
      link_cn: "以上都做完之后，转录产物本身上还有一个甲基在等着",
      en: "Chemical modification of RNA changes that molecule's own activity, localisation and stability; eukaryotic RNA carries more than 100 chemical modifications, of which only a very few are widespread on mRNA. N⁶-methyladenosine (m⁶A) is the common one — a methyl group on the sixth-position nitrogen of an adenine in an mRNA — present at sites on nearly 7 000 mRNAs in mouse and human cells, and it leaves ordinary base pairing intact, which is why its biological function was reported only long after the modification itself was found. Regulation by m⁶A takes three components: a methyltransferase complex built around METTL3 that writes the mark into the mRNA, a demethylase such as FTO or ALKBH5 that erases it, and a reader protein that binds it through an RNA-binding region called YTH, whose affinity for methylated RNA is several times that for unmethylated. Its route of action is a change of RNA secondary structure: methylating an adenine in a stem-loop destabilises base pairs and lengthens the uridine-rich single strand opposite, bringing the binding site within reach of a protein such as HNRNPC. **m⁶A regulates gene expression after transcription — the routes are splicing, nuclear export, stability and translation — so a gene can be turned down without either its DNA or its chromatin being touched.**",
      cn: "RNA 水平的化学修饰会影响 RNA 自身的活性、定位和稳定性；真核生物的 RNA 上存在 100 多种化学修饰，而广泛存在于 mRNA 上的只有极少数。N⁶-甲基腺苷化修饰（m⁶A）就是其中较常见的一种，指 mRNA 中腺嘌呤第 6 位氮原子上的甲基化；小鼠和人类细胞中将近 7000 种 mRNA 带有 m⁶A 位点。它不影响 RNA 基本的碱基配对能力，所以这种修饰很早就被发现，生物学功能却到很晚才被报道。m⁶A 调控基因表达需要三类组分：把修饰信息写入 mRNA 的甲基化酶复合物（以 METTL3 为核心）、把它擦除的去甲基化酶（如 FTO 与 ALKBH5），以及通过一个叫 YTH 的 RNA 结合域读取它的蛋白——YTH 结合甲基化 RNA 的亲和力比结合非甲基化 RNA 高数倍。它起作用的路径是改变 RNA 的二级结构：茎-环上的腺嘌呤被甲基化后，碱基对的稳定性被破坏、对面富含尿嘧啶的单链变长，结合位点因此更靠近 HNRNPC 这类蛋白。**m⁶A 是在转录之后调控基因表达的，影响剪接、核输出、稳定性和翻译；于是一个基因可以在 DNA 和染色质都没被碰过的情况下被调低。**",
      src: "现分 p.322–326（图 8-37、图 8-40、图 8-41）"
    }
  ]
};
