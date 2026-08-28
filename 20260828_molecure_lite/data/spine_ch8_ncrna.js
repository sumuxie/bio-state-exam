/* Spine for §8.4 — 非编码 RNA 对真核基因表达的调控.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 328–340
   (§8.4 opens on p.328, at the end of the §8.3 scan, with the petunia experiment).

   WHY THIS NODE EXISTS. The measured gap here is not the vocabulary — siRNA, miRNA
   and lncRNA are named all over the existing corpus — it is the CHAIN. No node
   anywhere carries pri-miRNA → Drosha+DGCR8 → pre-miRNA → Exportin 5/RanGTP →
   Dicer → RISC → seed → cut, in order, with the numbers attached. A reader who
   holds the words and not the order cannot answer a single question about it.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. White petunias; MEX3 injected into a worm gonad;
      6.5 nm between PAZ and the cutting site; nucleotides 2–8; the cut between 9
      and 10; a 90 kb paternal transcript called Kcnq1ot1.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`) — the miRNA half is built on the siRNA
      half, so Dicer, RISC and the seed are pointed back at rather than restated.
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   THE ARC. Three quarters of the genome is transcribed and under 3% becomes
   protein, so most of what a eukaryotic cell makes is RNA that regulates other
   genes. The chain runs: an experiment that went the wrong way (white petunias)
   → double-stranded RNA is the active form → Dicer is a ruler that cuts it to
   21–23 nt → RISC is one Argonaute holding one guide strand → seven nucleotides
   (2–8) pick the target and PIWI cuts between 9 and 10 → the same machinery,
   fed by a gene the cell owns, is miRNA, which either cuts the message or leaves
   it intact and stops its translation → and above 200 bp the noncoding RNA stops
   pairing with messages altogether and starts moving chromatin-modifying enzymes
   around, as a signal, a decoy, a guide or a scaffold.

   SCOPE NOTE. This edition carries no separate circRNA, piRNA or antisense-RNA
   subsection; circular lncRNA appears only as one of the six classes in 8.4.3,
   and it is written here only in that place. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-8-4 */
window.BIOLITE_SPINE["M-8-4"] = {
  /* Declared rather than left implicit. The first group is the ordinary molecular
     furniture the chapter has been standing on since §8.1; the second group are
     everyday words that happen to also be glossary entries, and defining each of
     them would pad every step without teaching anything. Nothing load-bearing is
     parked here: siRNA, Dicer, RISC, Argonaute, the seed, pri-/pre-miRNA, Drosha,
     DGCR8, Exportin 5, lncRNA, Xist, Gas5, COLDAIR, ANRIL and HOTAIR are all
     introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "mRNA", "gene", "genome", "genomic", "allele", "exon",
            "intron", "promoter", "enhancer", "transcription", "translation",
            "transcript", "polymerase", "RNA polymerase II", "nucleus", "cytoplasm",
            "nucleotide", "base pair", "template", "primer", "protein", "peptide",
            "enzyme", "nuclease", "domain", "dimer", "cell", "embryo", "chromosome",
            "chromatin", "histone", "methylation", "acetylation", "phosphate",
            "hydroxyl", "cap", "poly(A)", "poly(a)", "3'UTR", "ribosome",
            "polysome", "eIF4A", "eIF2", "virus", "viral", "transposon", "plasmid",
            "phenotype", "mutation", "Northern blot", "in situ hybridization",
            "ATP", "GTP", "magnesium", "receptor", "ligand", "pigment", "phloem",
            "molecule", "complex", "scaffold", "signal", "target", "region",
            "sequence", "strand", "duplex", "stem-loop", "hairpin", "silencing"],
  nodeTitle_en: "Noncoding RNA as a regulator of eukaryotic genes",
  nodeTitle_cn: "非编码 RNA 对真核基因表达的调控",
  title_en: "Three quarters of the human genome is transcribed and under 3% of it ends up as protein, so **most of what a eukaryotic genome transcribes is noncoding RNA whose job is to regulate other genes**",
  title_cn: "人类基因组约四分之三的基因能被转录，最终翻译成蛋白质的不到 3%，**真核基因组转录出来的大部分是不编码蛋白质的 RNA，它们的工作是调控别的基因**",
  steps: [
    {
      en: "A noncoding RNA (ncRNA) is an RNA that is never translated into protein, and a eukaryotic genome makes a great many of them. They are sorted by length: small noncoding RNA under 200 nt, which covers short interfering RNA (siRNA) and microRNA (miRNA), and long noncoding RNA (lncRNA) over 200 nt. **siRNA and miRNA both work by silencing genes, so a cell can shut a gene down with an RNA it transcribes on purpose, and the sequence of that RNA is what picks which gene goes quiet.**",
      cn: "非编码 RNA（non-coding RNA，ncRNA）就是不编码蛋白质的 RNA，真核基因组里有大量这样的 RNA。按长度分成两类：小分子非编码 RNA（小于 200 nt），包括干扰小 RNA（short interfering RNA，siRNA）和微 RNA（miRNA）；以及长链非编码 RNA（lncRNA，大于 200 nt）。**siRNA 和 miRNA 都是靠基因沉默起作用的，所以细胞可以用一条自己转录出来的 RNA 去关掉一个基因，而由这条 RNA 的序列决定关掉的是哪一个。**",
      src: "现分 p.328（图 8-42）"
    },
    {
      link_en: "the first sighting of this came out of an experiment that produced the opposite of what it was built for",
      link_cn: "第一次看见这件事，是一个做出了相反结果的实验",
      en: "In 1988 researchers pushed extra copies of a pigment gene into petunias — the aim was a deeper flower colour — and some of the transgenic plants came out white. Introducing either the sense strand or the antisense strand of a target gene could drive the endogenous gene's expression down, an effect named co-suppression, and in nematode worms and in flies the same effect is called RNA interference (RNAi). RNAi was pinned down in 1998 by microinjecting antisense MEX3 mRNA and double-stranded MEX3 RNA (dsRNA) into worm gonad cells and reading endogenous MEX3 in the embryos by in situ hybridization: the antisense RNA lowered MEX3 a little, and the dsRNA left almost none detectable. **Double-stranded RNA silences an endogenous gene far more efficiently than either single strand does, and an introduced RNA only silences genes homologous to it, so base pairing is what this mechanism runs on.**",
      cn: "1988 年，研究者往牵牛花里多导入几份色素基因，想让花色更深，结果有些转基因植株反而开出了白花。后来发现，不论导入的是靶基因的正义链（sense）还是反义链（antisense），都可能让内源靶基因的表达量下降，这个现象被称为共抑制（co-suppression）；在线虫和果蝇的研究里，同样的现象叫 RNA 干扰（RNA interference，RNAi）。1998 年，研究者把 *MEX3* 基因的反义 mRNA 和双链 RNA（dsRNA）分别显微注射进线虫性腺细胞，再用原位杂交检测子代胚胎中内源 *MEX3* 的水平：注射反义 RNA 的胚胎里 *MEX3* 只略有下降，注射双链 RNA 的胚胎里几乎检测不到。**双链 RNA 干扰内源基因的效率远高于单链 RNA，而且引入的外源 RNA 只对同源基因有高沉默效率——这套机制是靠碱基配对认靶的。**",
      src: "现分 p.328, p.329（图 8-43）"
    },
    {
      link_en: "and the length of the pieces left behind names the molecule that does the work",
      link_cn: "而剩下的碎片有多长，正好说出了真正干活的分子是什么",
      en: "An in vitro RNAi system built from Drosophila cell extract shows what becomes of the dsRNA: both its sense and its antisense strand are cut into 21–23 nt pieces whether or not the target mRNA is present, the target mRNA is itself degraded into fragments differing in length by 21–23 nt, and the whole process needs ATP for energy. **The small RNA that mediates this silencing is the short interfering RNA, siRNA, 21–23 nt long — the matching step size in the degraded mRNA is the evidence that the small RNA is what does the cutting.**",
      cn: "用果蝇细胞提取物做成的体外 RNAi 系统可以看清楚：不论有没有靶 mRNA，导入的 dsRNA 的正义链和反义链都会被切成 21～23 nt 的小片段；相应的靶 mRNA 也被降解成彼此长度差为 21～23 nt 的片段；整个过程需要 ATP 供能。**介导这种沉默现象的小片段 RNA 就是干扰小 RNA（short interfering RNA，siRNA），长 21～23 nt——靶 mRNA 上那个一致的降解步长，正是判断降解由这条小 RNA 介导的证据。**",
      src: "现分 p.329"
    },
    {
      link_en: "a molecule that short still has two strands, and only one of them does the work",
      link_cn: "这么短的分子仍然有两条链，而只有一条真正干活",
      en: "A typical siRNA duplex is 21 nt, of which 19 nt are base-paired, with two unpaired nucleotides overhanging each 3′ end and a phosphate group on each 5′ end. The two strands are not equals: the one that stays and mediates degradation of the mRNA is the guide strand, and the other is the passenger strand, which is degraded before the complex becomes functional. **siRNA is made from double-stranded RNA the cell did not write — viral RNA, RNA brought in by the environment or by an experimenter, and the cell's own repeated genomic segments and transposons.**",
      cn: "一条典型的 siRNA 双链长 21 nt，其中 19 nt 形成配对双链，两个 3′ 端各突出两个不配对核苷酸，5′ 端为磷酸基团。两条链地位不同：留下来介导 mRNA 降解的那条叫引导链（guide strand），另一条叫乘客链（passenger strand），在复合体获得功能之前就被降解掉。**siRNA 来自细胞自己没有写过的双链 RNA——病毒 RNA、由环境或实验引入的外源 RNA，以及基因组自身的重复片段和转座子序列。**",
      src: "现分 p.329"
    },
    {
      link_en: "so something has to cut a long duplex to that exact length, every time",
      link_cn: "于是必须有东西把长双链每次都切到那个长度",
      en: "Dicer is an RNase III protein — a nuclease that cuts double-stranded RNA — and it carries a pair of RNase III domains, a double-stranded RNA binding domain, a helicase domain and a PAZ domain. The PAZ domain grips the two unpaired 3′ nucleotides of the duplex, and the two RNase III domains form an intramolecular dimer — each of them cuts one strand, so the pair makes a double-strand break. **PAZ sits about 6.5 nm from the RNase III cutting site, which is the length of some twenty nucleotides, so Dicer is itself a ruler: it holds one end and cuts at a fixed distance, turning out siRNA 21–23 nt long.**",
      cn: "Dicer 是一类 RNase Ⅲ 蛋白，即切割双链 RNA 的核酸酶；它包含一对 RNase Ⅲ 结构域、一个双链 RNA 结合域、一个解旋酶结构域和一个 PAZ 结构域。PAZ 结构域抓住双链 RNA 两个 3′ 端的不配对核苷酸；两个 RNase Ⅲ 结构域形成分子内二聚体，各催化剪切一条链，造成双链断裂。**PAZ 结构域与 RNase Ⅲ 催化切点相距约 6.5 nm，正相当于二十几个核苷酸的长度——所以 Dicer 本身就是一把裁剪的尺子：咬住一端，在固定距离上下刀，切出长 21～23 个核苷酸的 siRNA。**",
      src: "现分 p.329（图 8-45）"
    },
    {
      link_en: "a cut duplex still has to be handed over to the protein that will use it",
      link_cn: "切下来的双链还得交到真正使用它的蛋白手里",
      en: "Loading needs the double-stranded RNA binding protein R2D2, which carries two tandem double-stranded RNA binding domains and binds the thermally more stable end of the small duplex; since the guide strand's 5′ end is usually the less stable one, R2D2 ends up on the guide strand's 3′ side. Dicer and R2D2 form a heterodimer, and Dicer, R2D2 and the siRNA together are the RISC loading complex. R2D2 then recruits Argonaute, which is the protein that will hold the guide strand: Argonaute exchanges first with Dicer and then with R2D2 until the whole small duplex sits inside it, and it degrades the passenger strand. **What is left is an active silencing complex, RISC (RNA induced silencing complex): one Argonaute protein holding one single-stranded guide RNA, ready to go looking for a message.**",
      cn: "siRNA 的装载需要双链 RNA 结合蛋白 R2D2：它有两个一前一后的双链 RNA 结合结构域，结合小双链 RNA 上热稳定性较高的那一端；由于引导链 5′ 端的稳定性一般较差，R2D2 常结合在引导链 3′ 端一侧。Dicer 和 R2D2 形成异源二聚体，Dicer/R2D2/siRNA 三者构成 RISC 装载复合物。随后 R2D2 招募 Argonaute（AGO）蛋白，即最终握住引导链的那个蛋白：Argonaute 先与 Dicer 交换、再与 R2D2 交换，把整条双链小 RNA 转载进自己体内，并把乘客链降解掉。**剩下的就是有活性的沉默复合物（RNA induced silencing complex，RISC）：一个 Argonaute 蛋白握着一条单链引导 RNA，可以出去找靶 mRNA 了。**",
      src: "现分 p.329, p.330（图 8-44）"
    },
    {
      link_en: "and which message it finds is decided by seven nucleotides",
      link_cn: "而它找到哪条 mRNA，由七个核苷酸决定",
      recall_en: "the guide strand from two steps up is the part that now does the recognising",
      recall_cn: "上面两步里那条引导链，现在负责的就是「认靶」",
      en: "Inside an assembled RISC the guide strand's 5′ end is bound by Argonaute's MID domain and its 3′ end by the PAZ domain, so the strand lies stretched across the MID/PIWI interface. Nucleotides 2 to 8 of the siRNA are the core seed sequence, which is the stretch that provides the specific pairing with the target mRNA. About ten base pairs of the mRNA–siRNA pair sit in the PIWI domain, and PIWI catalyses the cut. **The cut falls between nucleotides 9 and 10, the severed mRNA leaves RISC, and that same RISC goes on to the next message — one guide RNA cuts many transcripts.**",
      cn: "在装配好的 RISC 中，引导链 5′ 端与 Argonaute 的 MID 结构域结合，再延伸 MID/PIWI 界面至 3′ 端与 PAZ 结合，整条链被拉开铺在界面上。siRNA 的第 2～8 个核苷酸是核心种子序列（seed sequence），即提供与靶 mRNA 特异性配对的那一段。长约 10 个核苷酸的 mRNA–siRNA 配对物位于 PIWI 功能域，由 PIWI 催化切割。**切割往往发生在第 9、10 个核苷酸之间；被切断的 mRNA 离开 RISC，同一个 RISC 再去结合下一条靶 mRNA——一条引导 RNA 能切掉很多条转录本。**",
      src: "现分 p.331（图 8-46）"
    },
    {
      link_en: "one guide cutting many transcripts is still not enough to silence a whole plant",
      link_cn: "一条引导链切很多条转录本，仍然不足以让整株植物沉默",
      en: "RNA-dependent RNA polymerase (RDRP) is an enzyme that copies RNA from an RNA template, and it amplifies siRNA into secondary siRNA. A mature eukaryotic mRNA is coated by a 5′ cap-binding protein and a 3′ poly(A)-binding protein, and that coat keeps RDRP away from it. When those binding proteins are missing, RDRP binds the bare mRNA, copies it into double-stranded RNA, and Dicer turns that into siRNA which degrades the transcript — which doubles as the cell's way of clearing a faulty mRNA. **On an mRNA whose coat is intact, an existing siRNA serves as the primer — RDRP extends it into a duplex, so secondary siRNAs pair with new regions of the target and, in plants, travel cell to cell and through the phloem into other tissues.**",
      cn: "RNA 依赖的 RNA 聚合酶（RNA-dependent RNA polymerase，RDRP）是一种以 RNA 为模板合成 RNA 的酶，它使 siRNA 继续扩增，产生次级 siRNA 的放大效应（植物、线虫、酵母中都有这套机制，哺乳动物和果蝇的基因组分析里没有找到相关基因）。成熟的真核 mRNA 两端结合着 5′ 帽子结合蛋白和 3′ 多腺苷酸结合蛋白，这层保护使 RDRP 无法靠近。当细胞中缺少这些结合蛋白时，RDRP 就以裸露的 mRNA 为模板扩增出双链 RNA，经 Dicer 切割产生 siRNA 来降解它——这也可以视作机体清除错误 mRNA 的机制。**对于结合蛋白完好的 mRNA，已有的 siRNA 充当扩增引物，由 RDRP 延伸成双链；新产生的次级 siRNA 与靶 mRNA 的不同区域配对，在植物中还能在细胞间近距离传递、并通过韧皮部传播到其他组织。**",
      src: "现分 p.331（图 8-47）"
    },
    {
      link_en: "so what is a cell keeping all this machinery for",
      link_cn: "那么，细胞养着这一整套机器是为了什么",
      en: "siRNA silencing acts at two levels: post-transcriptional degradation of the mRNA, which needs a nuclease and magnesium ions, and heterochromatin formation at the chromosome level, meaning DNA packed so tightly that it is not transcribed. **RNAi regulates gene expression at and after transcription, keeps the genome stable, and defends the genome against invading nucleic acid: a host dices viral RNA into siRNA, assembles RISC and destroys the virus.**  In plants that protection travels through plasmodesmata and the phloem, so cells that were never infected are armed in advance. Viruses answer with RNAs resembling the host's own resistance genes, and the same machinery then degrades the host's resistance mRNA and leaves uninfected cells more susceptible.",
      cn: "siRNA 介导的基因沉默发生在两个水平上：转录后水平上把 mRNA 降解掉（需要核酸酶催化和镁离子的帮助），以及染色体水平上形成异染色质，即把 DNA 包得紧到无法转录。**RNAi 的生物学意义有三条：在转录水平与转录后水平参与基因表达调控、维持基因组的稳定、保护基因组免受外源核酸侵入——宿主把病毒 RNA 切成 siRNA、组装成 RISC，把病毒降解掉。**这种保护在植物里还能通过胞间连丝和韧皮组织传出去，让没被感染的细胞和组织提前具备抗病毒能力。病毒则进化出与宿主抗病基因序列相似的 RNA，借同一套机制降解宿主抗病基因的 mRNA，反而增加了未被侵染细胞的易感性——双方像在军备竞赛。",
      src: "现分 p.330, p.331, p.332"
    },
    {
      link_en: "everything so far started from RNA the cell did not write; the next class is written in the genome itself",
      link_cn: "到此为止的一切都始于细胞没写过的 RNA；下一类却是基因组自己写的",
      en: "In 1993 *lin-4*, a gene of the nematode Caenorhabditis elegans, was confirmed as the first microRNA — a small RNA that regulates another gene without coding for any protein. *lin-4* negatively regulates the Lin-14 protein, whose level has to start falling at the beginning of the first larval stage for the worm to develop normally. Open reading frame prediction on the *lin-4* genomic sequence found that it encodes no protein at all, and Northern blotting found two transcripts from the same region in the same direction, 61 and 22 nucleotides long; the 61 nt species folds into an imperfectly paired stem–loop and the 22 nt species is the one that acts. **The 22 nt piece of *lin-4* base-pairs with repeated sequences in the 3′UTR of *lin-14* mRNA, forming a *lin-4*:*lin-14* RNA–RNA hybrid, which is how one gene regulates another after transcription with neither of them making a protein.**",
      cn: "1993 年，线虫（Caenorhabditis elegans）的 *lin-4* 被确定为第一个 microRNA——一种不编码蛋白质、却调控别的基因的小 RNA。*lin-4* 负调控 Lin-14 蛋白，使该蛋白水平在线虫第一幼虫期初期开始下降，保证幼虫具有正常的发育模式。对 *lin-4* 的基因组序列做开放阅读框预测，发现它根本不编码蛋白质；Northern 印迹进一步显示，它的转录物在同一区域、同一转录方向上形成一大一小两个片段（61 个和 22 个核苷酸），大片段折成不完美配对的茎–环结构，小片段才是真正起作用的 miRNA。**22 nt 的 *lin-4* 小片段与 *lin-14* mRNA 3′UTR 区的重复序列互补配对，形成 *lin-4*:*lin-14* RNA–RNA 杂合结构——一个基因就这样在转录后调控了另一个基因，双方都不必做出蛋白质。**",
      src: "现分 p.332（图 8-48）"
    },
    {
      link_en: "and a 22 nt product has to be cut out of a transcript far longer than itself",
      link_cn: "而一段 22 nt 的产物，必须从比它长得多的转录本上切下来",
      en: "miRNA genes are transcribed by RNA polymerase II from promoter regions of their own, so their expression is regulated in time and space: the first transcript is pri-miRNA, which carries a 5′ cap and a 3′ poly(A) tail like an mRNA and whose transcription is blocked by the RNA polymerase II inhibitor α-amanitin. Somewhere inside the pri-miRNA is a stretch of imperfectly paired stem–loop. **Drosha — an RNase III in the nucleus — cuts the pri-miRNA on both sides of that stem–loop and releases a precursor about 70 nucleotides long, called pre-miRNA, with a 5′ phosphate, a 3′ hydroxyl and a 2–3 nt unpaired 3′ end.**  Drosha cuts in the right place only with a double-stranded RNA binding protein alongside it: DGCR8 in mammals, Pasha in Drosophila, Pash-1 in the worm.",
      cn: "miRNA 基因由 RNA 聚合酶 Ⅱ 从它们自己的启动子区转录，因而表达受各种时空调节：最初的转录产物叫 pri-miRNA，和 mRNA 一样 5′ 端加帽、3′ 端带多腺苷酸，其转录能被 RNA 聚合酶 Ⅱ 的抑制剂 α-鹅膏蕈碱（alpha-amanitin）抑制。pri-miRNA 中间有一段不完美配对的茎–环结构。**核内的 RNase Ⅲ 内切核酸酶 Drosha 在这段茎–环的 5′ 侧和 3′ 侧各切一刀，放出长约 70 个核苷酸的前体，即 pre-miRNA：5′ 端带磷酸基团、3′ 端为羟基、切割端有 2～3 个核苷酸的 3′ 不配对碱基。**Drosha 要切得准，还需要一类双链 RNA 结合蛋白在旁边帮忙：哺乳动物中是 DGCR8，果蝇中是 Pasha，线虫中是 Pash-1。",
      src: "现分 p.332, p.333"
    },
    {
      link_en: "the precursor was made in the nucleus and the messages it must find are in the cytoplasm",
      link_cn: "前体是在核里做出来的，而它要找的 mRNA 都在胞质里",
      recall_en: "Dicer, the 6.5 nm ruler from the siRNA half, makes the second cut",
      recall_cn: "siRNA 那半段里那把 6.5 nm 的尺子 Dicer，负责第二刀",
      en: "The pre-miRNA is carried out of the nucleus by Exportin 5 together with RanGTP, which is Ran protein loaded with GTP. In the cytoplasm the RNase III is Dicer, and it cuts off the loop end of the stem–loop, leaving a double-stranded miRNA about 21 nucleotides long, the miRNA–miRNA* duplex. One of those two strands is loaded into Argonaute as the mature miRNA and the other is discarded. **Which strand survives is decided by thermodynamics: the strand whose 5′ end is the less stably paired one is the more likely to become the functional miRNA.**",
      cn: "切割后的 pre-miRNA 经由 Exportin 5/RanGTP（即结合了 GTP 的 Ran 蛋白）运出细胞核，进入胞质。胞质中的 RNase Ⅲ 是 Dicer，它切开 pre-miRNA 茎–环结构环的那一端，形成长约 21 个核苷酸的双链 miRNA，即 miRNA–miRNA*。两条链里只有一条被装进 Argonaute、成为之后真正行使功能的成熟 miRNA，另一条被弃掉。**哪一条链成为 miRNA，由热力学决定：5′ 端相对不稳定的那条链，更有可能成为成熟 miRNA。**",
      src: "现分 p.333（图 8-49）"
    },
    {
      link_en: "plants make the same product with a different set of enzymes",
      link_cn: "植物用另一套酶做出同样的产物",
      en: "Plants have no Drosha homologue: both cuts on the pri-miRNA are made inside the nucleus by DCL1 (Dicer-Like1), which is the plant homologue of Dicer, and the double-stranded miRNA it produces is carried out of the nucleus by HASTY, the homologue of Exportin 5. **The methyltransferase HEN1 then methylates the free 3′ hydroxyls at both ends of the plant miRNA duplex — a methylated 3′ end is protected from degradation and helps a mature RISC form.**",
      cn: "植物中没有 Drosha 的同源基因：pri-miRNA 的两步切割都在细胞核内由 Dicer 的同源基因 Dicer-Like1（*DCL1*）完成，切出的双链 miRNA 由 Exportin 5 的同源基因 *HASTY* 运出细胞核。**甲基转移酶 HEN1 会把植物双链 miRNA 两个 3′ 端的自由羟基甲基化，以羟甲基的形式存在——甲基化的 3′ 端不受降解，还有助于形成成熟的 RISC。**",
      src: "现分 p.333（图 8-49）"
    },
    {
      link_en: "and a loaded miRNA can do two different things to the message it finds",
      link_cn: "而装载好的 miRNA，对它找到的那条 mRNA 可以做两件事",
      recall_en: "the first of the two is the siRNA route from the seed step above",
      recall_cn: "第一件事就是上面种子序列那一步里 siRNA 走的那条路",
      en: "A miRNA loaded into RISC can do what an siRNA does — pair with a complementary mRNA and have it degraded — and in flies that route needs, besides the AGO protein, GW182, the deadenylation genes NOT1 and CAF1 and the decapping genes DCP, so the message loses its poly(A) tail and its cap before it goes. **A miRNA can instead repress translation: the protein level of the target gene drops while the level of its mRNA stays where it was, so a gene is switched off with its transcript still sitting intact in the cytoplasm.**  Where in translation this happens is unsettled. One experiment bounds it: a miRNA transfected into a human cell line, with translation blocked by hippuristanol — an inhibitor of eIF4A — moved the target mRNA out of the translating polyribosomes quickly and left more free ribosomes detectable, which points at the miRNA:mRNA pair obstructing assembly of a working ribosome on the message, a ribosome drop-off.",
      cn: "装进 RISC 的 miRNA 可以做 siRNA 做的事——与互补配对的 mRNA 结合并使其降解；在果蝇中这条路除 AGO 蛋白外，还需要 GW182、脱腺苷基因（NOT1/CAF1）和脱帽相关基因（DCP），也就是先经历「脱帽脱尾」，而 GW182 还能与多腺苷酸结合蛋白（PABP）相互作用。**miRNA 也可以改为抑制 mRNA 的翻译：靶基因的蛋白质水平被压下去，而它的 mRNA 水平不变——基因被关掉的时候，转录本还完好地待在胞质里。**翻译抑制究竟发生在哪个阶段尚无定论。有一个实验给出了边界：把 miRNA 转染进人的实验细胞系，用 eIF4A 抑制剂 hippuristanol 阻断翻译，再经密度梯度离心分析核糖体，发现有 miRNA 的体系中靶 mRNA 很快从翻译的多核糖体中移出、游离核糖体增多；据此推测 miRNA:mRNA 配对分子阻碍了有功能的核糖体与 mRNA 的结合与装配，使核糖体发生「drop-off」。",
      src: "现分 p.333, p.334（图 8-50）"
    },
    {
      link_en: "the other half of the noncoding transcriptome is not small at all, and it stops pairing with messages",
      link_cn: "非编码转录本的另一半根本不小，而且它不再去和 mRNA 配对",
      en: "A long noncoding RNA (lncRNA) is a noncoding RNA longer than 200 bp; most are transcribed by RNA polymerase II, processed by capping, polyadenylation or splicing, and poorly conserved between species. lncRNAs are classified by where the gene sits: sense lncRNA shares a promoter with a protein-coding gene and overlaps it; antisense lncRNA is inserted in reverse orientation inside a known protein-coding gene; intronic lncRNA lies in an intron of one; intergenic lncRNA lies between two of them; enhancer lncRNA comes from the enhancer region of one; and circular lncRNA is a covalently closed loop, generally produced by alternative splicing of a protein-coding gene. **A lncRNA class is a statement about position on the genome — sense, antisense, intronic, intergenic, enhancer or circular — and position is what decides which genes are within that lncRNA's reach.**",
      cn: "长链非编码 RNA（lncRNA）指长度大于 200 bp 的非编码 RNA：多由 RNA 聚合酶 Ⅱ 转录，经 5′ 加帽、多腺苷酸化或剪切方式加工，物种间保守性差。分类依据的是基因组位点或相关 DNA 链的特征：正义 lncRNA 与某个蛋白编码基因共享启动子并与之重叠；反义 lncRNA 以反向方式插在某个已知蛋白编码基因中；基因内 lncRNA 位于某蛋白编码基因的内含子区；基因间 lncRNA 位于两个蛋白编码基因之间；增强子 lncRNA 位于某蛋白编码基因的增强子区域；环状 lncRNA 则是通过共价键闭合成环的 lncRNA，一般来自蛋白编码基因的可变剪切。**给 lncRNA 分类，说的其实是它在基因组上长在什么位置——正义、反义、基因内、基因间、增强子、环状——而位置决定了哪些基因落在这条 lncRNA 够得着的范围里。**",
      src: "现分 p.334, p.335（图 8-51）"
    },
    {
      link_en: "the first of four ways a lncRNA works is simply being transcribed at the right place and moment",
      link_cn: "lncRNA 的四种工作方式里，第一种就是「在对的地点和时刻被转录出来」",
      en: "A lncRNA can work in four ways: as a signal molecule, a decoy molecule, a guide molecule or a scaffold molecule. As a signal, a lncRNA is expressed in a cell-type-specific way and responds to outside stimuli, so its transcription is itself specific in time and space and marks a developmental stage, and it can act on transcription initiation, elongation or termination of a nearby gene — part of this class regulates, and part of it is only a by-product of transcription. Genomic imprinting is the case where the expression of a gene depends on whether the allele came from the mother or from the father, and lncRNAs carry it out: in mouse placenta the 90 kb paternal lncRNA *Kcnq1ot1* and the lncRNA *Air* gather on the promoter chromatin of the silenced allele, interact with the histone methyltransferase G9a and with PRC2, and lay down repressive histone modifications allele by allele. **The lncRNA *Xist* is what inactivates an X chromosome: it is expressed from the X that will be silenced and coats it while transcription continues, large numbers of histones there are methylated, and the genes on that chromosome stop being expressed.**  Its antisense transcript *Tsix* suppresses *Xist*, while another noncoding RNA, *Jpx*, accumulates on the inactive X and activates *Xist*.",
      cn: "lncRNA 调控基因表达有四种方式：作为信号分子、诱饵分子、引导分子和骨架分子。先说信号分子：大部分 lncRNA 由 RNA 聚合酶 Ⅱ 转录，表现出细胞类型特异的表达并能响应各种外界刺激，说明其表达在转录水平就受调控；因此每条 lncRNA 的转录本身具有时空表达特异性，可以标记发育阶段，并参与调控邻近基因的转录起始、延伸或终止——这一类里一部分真有调控功能，另一部分只是转录的副产物。基因印记指一个基因的表达只取决于来自母本还是父本的等位基因，而执行这件事的正是 lncRNA：小鼠胎盘中，来自父本、长 90 kb 的 *Kcnq1ot1* 与 *Air* 聚集在被沉默等位基因的启动子染色质区域，与组蛋白甲基转移酶 G9a 和 PRC2 互作，以等位基因特异的方式介导抑制性组蛋白修饰。**X 染色体失活靠的是 lncRNA *Xist*：它在将要失活的那条 X 染色体上表达，一边转录一边覆盖住这条染色体，其上大量组蛋白被甲基化，该染色体上的基因表达随之被抑制。**它的反义转录物 *Tsix* 抑制 *Xist* 的表达，而另一种非编码 RNA *Jpx* 会在失活的 X 染色体中积累，进一步激活 *Xist*。",
      src: "现分 p.335, p.336（图 8-52）"
    },
    {
      link_en: "a lncRNA can also work by binding a protein and then doing nothing else with it",
      link_cn: "lncRNA 还可以只是结合住一个蛋白，然后什么都不再做",
      en: "A decoy lncRNA is transcribed, binds a protein target and adds no further function, so it acts as a molecular filter that draws RNA-binding proteins — transcription factors, chromatin modifiers, other regulators — onto itself and away from where they would otherwise work. Two cases. The human DHFR gene — dihydrofolate reductase — has a lncRNA transcribed upstream of its weak promoter, and that lncRNA binds the promoter sequence together with general transcription factor IIB (TFIIB) into a stable noncoding RNA–DNA complex, which stops the pre-initiation complex gathering on the major promoter; silence that lncRNA with a specific siRNA and TFIIB stays on the major promoter. **The lncRNA *Gas5* — growth arrest-specific 5 — folds a stem–loop that mimics a glucocorticoid response element, so it competes for the DNA-binding region of the glucocorticoid receptor and keeps that receptor off the chromosome.**  A cell in which *Gas5* is acting is therefore resistant to glucocorticoid.",
      cn: "诱饵分子型的 lncRNA 被转录出来后结合在蛋白质靶点上，不再附加额外的功能——它相当于一种「分子过滤器」，把 RNA 结合蛋白（转录因子、染色质修饰子或其他类型的调控因子）诱导到自己身上，从而带离它们本来该起作用的地方。两个例子。人 DHFR 基因（二氢叶酸还原酶，dihydrofolate reductase）弱启动子上游的 lncRNA，与启动子序列以及通用转录因子 ⅡB（TF ⅡB）结合，形成稳固的非编码 RNA–DNA 复合体，抑制前起始复合体在主启动子上聚集；而当这条 lncRNA 被特异的 siRNA 沉默后，TF ⅡB 仍然占据在主启动子上。**lncRNA *Gas5*（生长停滞特异转录物 5，growth arrest-specific 5）用一个茎–环结构模拟糖皮质激素响应元件的 DNA 基序，竞争性结合糖皮质激素受体的 DNA 结合区域，把受体挡在染色体之外。**受 *Gas5* 作用的细胞因此进入一种耐糖皮质激素的状态。",
      src: "现分 p.336, p.337（图 8-53）"
    },
    {
      link_en: "the last two ways both end at chromatin, and they differ in how many complexes the RNA holds at once",
      link_cn: "最后两种方式都落在染色质上，区别在于这条 RNA 一次抓住几个复合体",
      en: "A guide lncRNA binds an RNA-binding protein and positions that ribonucleoprotein complex on a chosen target, in cis on a neighbouring gene or in trans on a distant one: *Air* gathers at a promoter, recruits G9a and has H3K9 methylated on the allelic target until it falls silent, and the cold-induced plant lncRNA *COLDAIR* guides PRC2 onto the flowering repressor *FLC* during vernalization and trimethylates H3K27 there, which is how a stable repressive chromatin state is built and kept. A scaffold lncRNA goes one step further: it has several distinct functional regions, binds several effector proteins at the same time, and so works as a central platform that packages different complexes into one unit. *ANRIL* — an antisense noncoding RNA sharing its locus with *INK4b* — interacts directly with components of both PRC1 and PRC2, and breaking either interaction relieves the transcriptional repression of *INK4b*. **The lncRNA *HOTAIR* binds PRC2 at its 5′ end, which trimethylates H3K27, and the LSD1/CoREST/REST complex at its 3′ end, which demethylates H3K4 — one RNA silences a gene by adding a repressive mark and removing an activating one.**  *HOTAIR* is raised in primary and metastatic breast cancer, and losing it lowers the invasiveness of those cells.",
      cn: "引导分子型的 lncRNA 结合 RNA 结合蛋白，把这个核糖核蛋白复合体安放到特定靶点上，或以顺式（作用于邻近的基因）、或以反式（作用于远处的基因）介导基因表达的改变：*Air* 在启动子区域聚集并招募 G9a，使等位靶点上的 H3K9 甲基化而沉默；受冷诱导的植物 lncRNA *COLDAIR* 在春化过程中把 PRC2 引到开花抑制子 *FLC* 上，通过三甲基化 H3K27 抑制其表达——这就是建立并维持稳定抑制性染色质的方式。骨架分子型再进一步：它具有不同的功能区域，能在同一时间结合多个效应分子，因而是一个把不同复合体打包成一个整体的中心平台。反义非编码 RNA *ANRIL* 与 *INK4b* 位于同一位点，能与 PRC1、PRC2 复合体的组分直接互作；二者之间任意一个互作被打破，都会影响 *INK4b* 的转录抑制。**lncRNA *HOTAIR* 的 5′ 端连着使 H3K27 三甲基化的 PRC2，3′ 端连着使 H3K4 去甲基化的 LSD1/CoREST/REST 复合体——一条 RNA 同时给靶基因加上抑制性标记、拿掉激活性标记，把基因关掉。**在原发性和转移性乳腺癌中 *HOTAIR* 表达升高，而癌细胞中 *HOTAIR* 的缺失会降低细胞的侵袭性。",
      src: "现分 p.337, p.338, p.339, p.340（图 8-58）"
    }
  ]
};
