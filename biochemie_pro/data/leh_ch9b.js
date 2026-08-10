/* ============================================================
   Lehninger 8 — Chapter 9, section 9.2, Exploring Protein Function
   on the Scale of Cells or Whole Organisms. DEPTH LAYER, and the
   SECOND Lehninger-only node: the Czech textbook has no
   counterpart. Ruojin ruled this one "主要需要的" on 2026-08-06
   (CORE2_LEHNINGER.md; archived in HANDOFF_LEHNINGER.md section 9b;
   row 9.2 of lehninger_index/lehninger_only_scope.tsv, tagged
   `full`, 10 printed pages). THIS IS WHERE CRISPR LIVES — the
   reason she named it.

   Paired with leh_ch9.js (L-9-1-1, section 9.1) as the a/b file
   pair this project uses for a chapter holding two nodes.

   topicKey "exploring-protein-function" is NEW (the 65th) and
   single-book, as every Lehninger-only node's key must be. It is
   deliberately NOT merged with 9.1's recombinant-dna-technology:
   9.1 is how you get a gene and a protein, 9.2 is how you find out
   what the protein does. Different questions, different sections.

   SCOPE NOTE, measured: RNA interference, siRNA, TALENs, zinc-
   finger nucleases, microarrays and Northern/Western blots all
   grep to ZERO inside 9.2 in this edition. Do not add them here.

   `chapter` is LEHNINGER's chapter 9 — chapter is book-local.
   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-9-2-1",
    book: "lehninger",
    topicKey: "exploring-protein-function",
    chapter: 9,
    section: "9.2",
    czTitle: "Žádná — zkoumání funkce proteinu: srovnávací genomika, RNA-Seq, fúze s GFP, interakce proteinů a CRISPR/Cas9",
    enTitle: "Exploring protein function — the three levels at which a protein can be said to have a function, the methods that answer where and when it is present and what it binds, and CRISPR/Cas9, a bacterial antiviral system turned into a programmable way of asking what happens when the protein is gone",
    cnTitle: "探究蛋白质的功能——「功能」可以在哪三个层面上被谈论、回答「何时何地存在」与「与谁结合」的各种方法，以及 CRISPR/Cas9：一套被改造成可编程工具的细菌抗病毒系统，用来提问「这个蛋白没有了会怎样」",
    pages: [317, 318, 319, 320, 321, 322, 323, 324, 325, 326],
    coverage: "full",
    coverageNote: "Read from Lehninger 8 section 9.2, B-copy text layer pp.1202-1236 in full, end to end through every subheading (Sequence or Structural Relationships Can Suggest Protein Function; When and Where a Protein Is Present in a Cell Can Suggest Protein Function, with RNA-Seq and Transcriptomics, Cellular Proteomes and Mass Spectrometry, Fusion Proteins and Immunofluorescence; Knowing What a Protein Interacts with Can Suggest Its Function, with Purification of Protein Complexes and Yeast Two-Hybrid Analysis; The Effect of Deleting or Altering a Protein Can Suggest Its Function, with CRISPR/Cas Systems; Many Proteins Are Still Undiscovered) plus Table 9-4, Box 9-1 on gene drives, Figures 9-14 to 9-23, and the section's own SUMMARY, covering A printed pp.317-326. MEASURED ABSENCES, so a later session does not add them believing they were missed: RNA interference, siRNA, TALEN, zinc-finger nuclease, microarray and Northern/Western blot all grep to zero inside this section in this edition.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；分子生物学功能研究方法（CRISPR／GFP／双杂交）是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    trace: [
      {
        term: "CRISPR——这个名字描述的是一份档案，不是一个工具",
        what: "全称 **Clustered, Regularly Interspaced Short Palindromic Repeats**（成簇的、规律间隔的短回文重复），指细菌基因组里一串有规律间隔的**短重复序列**——而**重复之间夹着的 spacer（间隔）序列，来自曾经感染过它、却没能杀死它的噬菌体**。**Cas（CRISPR-associated）蛋白**则是一种**核酸酶**。两者合起来是一套**免疫系统**：同一种噬菌体再来时，CRISPR 序列被转录成 RNA，单个 spacer 被切出来成为 **guide RNA (gRNA)**，与一个或多个 Cas 蛋白（某些系统里还要加一条 **tracrRNA**）形成复合物，再**结合并摧毁匹配的病毒 DNA**。**全部概念上的关键就在这一句：细菌不是每次现造一段靶向序列，而是在查阅一份它曾经扛过的感染记录。**",
        from: "不先讲清楚「它本来是一份免疫档案」，后面每一件事都只能死记：**为什么需要一条 RNA 来引导**（因为原系统本来就是靠**存下来的病毒片段**去认病毒的）、**为什么它可编程**（因为引导**只靠碱基配对**，把那段序列改写就行）、**为什么切一刀就能敲掉基因**（细菌那边是摧毁病毒 DNA，搬到真核细胞里就成了造一个**双链断裂**）。还有一句同样重要的定位，能防止把它说得太神：**CRISPR/Cas9 并没有引入一个全新的基因失活原理**。让基因失活的老办法一直都是**把它打断、让修复过程把它搞坏**——真核细胞里这种断裂通常由**非同源末端连接 (NHEJ)** 封上，但**封得不精确**，连接处常有核苷酸缺失或插入，基因就废了。**CRISPR/Cas9 只是让这一刀变得容易瞄准**，这正是自 2011 年起它在很大程度上取代了旧靶向方法的原因。",
        to: "考试里三处。第一，被问「CRISPR 是什么」——**从「它是细菌的免疫系统、是一份感染档案」开讲**，而不是从「一种基因编辑工具」开讲；后者答不出**为什么会有 guide RNA 这个东西**。第二，**工具是怎么从天然系统简化出来的**：酿脓链球菌（*Streptococcus pyogenes*）那套**切 DNA 只需要单一一个 Cas 蛋白——Cas9**；**Jennifer Doudna 与 Emmanuelle Charpentier** 把 **gRNA 和 tracrRNA 融合成一条 sgRNA**，**正是这一步工程改造让系统变得可编程**。第三，**双链断裂 vs 缺口，这一处最容易含混、也最值得答准**：Cas9 有**两个独立的核酸酶结构域**，一个切与 sgRNA 配对的那条链、另一个切对面那条；**只让其中一个失活**，就只切一条链，造成的是一个 **nick**。**这不是无关紧要的变体**——**双链断裂 → NHEJ 粗修 → 基因被随机敲掉**；而 **nick ＋ 一段携带目标改动的供体 DNA → 同源重组修复 → 引入的是特定编辑**。被问「想做精确编辑而不是敲除该怎么办」，答案就在这里。",
        family: "一组名字别混：**CRISPR**（那串重复序列本身，是档案）、**spacer**（档案里存着的病毒片段）、**Cas9**（核酸酶，两个结构域）、**gRNA ＋ tracrRNA**（天然的两条 RNA）、**sgRNA**（工程上融合成的一条）、**NHEJ**（不精确，用来敲除）、**同源重组**（精确，配供体 DNA 用来编辑）。再往外一层是**规模化**：CRISPR 文库让遗传筛选**一次覆盖整个基因组**——每条 sgRNA 里那段靶向序列**同时兼作一个独一无二的条形码**，测序读回来，看每个条形码**丰度的升降**，就知道在那种压力下哪些基因是必需的、可有可无的、甚至是有害的。**用哪种 Cas9 变体决定了产生什么效果**：未改造的**切开、敲除**；**核酸酶失活的 Cas9 只是结合上去、阻断转录**；**融合了阻遏或激活结构域的**则更有效地沉默或增强转录，**完全不切 DNA**。",
        numbers: "sgRNA 里的靶向序列是 **20 bp**，它同时就是那个**条形码**。Cas9 有 **2 个**独立的核酸酶结构域，**只失活其中 1 个**就从双链断裂变成 nick。天然系统需要 **2 条** RNA（gRNA ＋ tracrRNA），工程上融合成 **1 条** sgRNA；来源菌是**酿脓链球菌**。取代旧靶向方法的时间点是 **2011 年**起。文库递送用改造过的**慢病毒载体**（来自 **HIV**，自身增殖所需的基因已被去除），并**以较低的感染复数**递送，好让**大多数细胞只整合 1 个表达盒**——这一条是为了保证「**一个细胞只有一个基因被扰动**」这个前提成立。"
      }
    ],
    mustKnow: {
      en: "CRISPR/Cas9 is not an invention, it is a BACTERIAL IMMUNE SYSTEM that was repurposed. Bacteria keep fragments of the phages that once infected them, filed between short palindromic repeats, and transcribe those fragments into guide RNAs that lead a nuclease to matching viral DNA. Doudna and Charpentier fused the two RNAs into ONE single guide RNA, and because the guide is just base pairing, you can retype its 20-nucleotide targeting sequence to point at anything. Everything else follows: the cut is repaired badly by non-homologous end joining, and a badly repaired gene is a dead gene — which is exactly the experiment you wanted, because the cleanest way to ask what a protein does is to take it away.",
      cn: "CRISPR/Cas9 **不是发明出来的，它是一套被改用的细菌免疫系统**。细菌把曾经感染过它的噬菌体的片段留存下来，归档在一串短回文重复序列之间，再把这些片段转录成 **guide RNA**，引导一个核酸酶去找到匹配的病毒 DNA。Doudna 与 Charpentier 把原本的两条 RNA 融合成**一条 single guide RNA (sgRNA)**；而由于引导靠的**只是碱基配对**，你只要改写它那 **20 个核苷酸**的靶向序列，就能让它指向任何地方。其余的都是顺理成章：切口被 **NHEJ 粗糙地修复**，而一个被修坏的基因就是一个死掉的基因——**这恰恰正是你想要的实验**，因为要问一个蛋白是干什么的，最干净的办法就是**把它拿掉**。"
    },
    summary: {
      en: "Lehninger opens 9.2 by splitting the word function into three, and the split is worth keeping because different methods answer different levels. PHENOTYPIC function is what the protein does to the whole organism — lose it and the organism grows slowly, develops abnormally, or dies. CELLULAR function is the network of interactions it engages in. MOLECULAR function is the precise biochemical activity: which reaction, which ligand. The section then walks through the evidence you can gather for each. Sequence relationships come first: BLAST against the databases at NCBI and Ensembl, and the vocabulary that makes the comparison meaningful — ORTHOLOGS are related genes in different species, PARALOGS are related genes within one species, and SYNTENY, conserved gene ORDER along a chromosome, is extra evidence that two genes really are orthologous. Structural motifs give another handle: a sequence that says ATP hydrolysis, or DNA binding, or a zinc site. Next, when and where. RNA-Seq isolates cellular RNA, fragments it, copies it to DNA with reverse transcriptase and sequences it deeply, so that the NUMBER OF READS reports the abundance of each transcript; it now works on single cells. Mass spectrometry does the same job one level down, cataloguing the proteome directly and reporting modifications as well. For location, a gene fused to the gene for GREEN FLUORESCENT PROTEIN makes a protein that lights up in a living cell — GFP came from a jellyfish, its fluorophore forms autocatalytically from three of its own residues and needs nothing but oxygen, which is why it works in almost any cell you put it in. When a GFP fusion will not do, immunofluorescence visualises the unaltered protein instead, at the cost of having to fix and therefore kill the cell. For interactions, an EPITOPE TAG lets you immunoprecipitate a protein and see what comes down with it; TANDEM AFFINITY PURIFICATION runs that logic twice through two different tags so that only interactions surviving both steps are reported; and YEAST TWO-HYBRID rebuilds a split transcription factor, so that two proteins meeting switches a reporter gene on. Finally, deletion. The general method is to cut the gene and let the cell repair the cut badly, and since 2011 the way to make that cut has been CRISPR/Cas9 — a bacterial defence against bacteriophage, streamlined by Doudna and Charpentier into one protein and one programmable single guide RNA. Its uses now run from routine knockouts through high-throughput screens using barcoded sgRNA libraries delivered in lentiviral vectors, to gene drives that could collapse a pest population, and to clinical trials; the standing worry is off-target cleavage.",
      cn: "Lehninger 在 9.2 开篇就把「功能」这个词**拆成三层**，而这个拆分值得记住，因为不同的方法回答的是不同的层面。**表型功能 (phenotypic)** 是这个蛋白对**整个生物体**做了什么——失去它，生物体就生长变慢、发育异常，或者死亡。**细胞功能 (cellular)** 是它参与的**相互作用网络**。**分子功能 (molecular)** 是精确的生化活性：催化哪个反应、结合哪个配体。随后本节逐一走过为每一层能收集到的证据。**序列关系**排在最前：拿 **BLAST** 去 **NCBI** 和 **Ensembl** 的数据库里搜，再配上让这种比较真正有意义的那套词汇——**直系同源 (orthologs)** 是**不同物种间**的相关基因，**旁系同源 (paralogs)** 是**同一物种内**的相关基因，而 **synteny（共线性）**，即染色体上**基因顺序**的保守，是两个基因确实互为直系同源的额外证据。**结构基序**给出另一个抓手：某段序列意味着 ATP 水解、或 DNA 结合、或一个锌位点。接下来是**何时与何地**。**RNA-Seq** 分离细胞 RNA、打碎、用逆转录酶拷贝成 DNA、再做深度测序，于是**读长数目**就报告了每个转录本的**丰度**；如今它已能用于**单个细胞**。**质谱**在下一个层面做同样的事，直接编目 **proteome**，还能一并报告**修饰**。至于**定位**，把基因与**绿色荧光蛋白 (GFP)** 的基因融合，就得到一个在**活细胞**里会发光的蛋白——GFP 来自水母，它的荧光基团由**自身三个残基自催化**形成、除氧气外**什么都不需要**，这正是它放进几乎任何细胞都能用的原因。当 GFP 融合行不通时，改用**免疫荧光**去看**未经改动**的天然蛋白，代价是必须固定、也就是**杀死**细胞。至于**相互作用**，**表位标签 (epitope tag)** 让你把一个蛋白免疫沉淀下来、看看有谁跟着一起下来；**串联亲和纯化 (TAP)** 把这个逻辑用两个不同标签**跑两遍**，于是只有**两步都活下来**的相互作用才被报告；而**酵母双杂交**则是把一个被拆开的转录因子重新拼起来，于是**两个蛋白相遇**就点亮一个报告基因。最后是**删除**。通用做法是**切开这个基因、让细胞把切口修坏**；而自 2011 年起，制造这一刀的方式就是 **CRISPR/Cas9**——一套细菌对抗噬菌体的防御系统，被 Doudna 与 Charpentier 精简成**一个蛋白加一条可编程的 sgRNA**。它的用途如今从常规敲除，到用慢病毒载体递送**带条形码的 sgRNA 文库**做高通量筛选，到可能让有害物种种群崩溃的**基因驱动**，再到临床试验；始终悬着的隐忧是**脱靶切割**。"
    },
    points: [
      {
        cz: "tři úrovně funkce proteinu",
        en: "FUNCTION MEANS THREE DIFFERENT THINGS, AND THE SECTION IS ORGANISED AROUND THE DIFFERENCE. PHENOTYPIC function describes the protein's effect on the ENTIRE ORGANISM: lose the protein and you may see slower growth, an altered development pattern, or death. CELLULAR function is the network of interactions the protein engages in inside the cell; identifying its partners helps define which metabolic processes it takes part in. MOLECULAR function is the precise biochemical activity — which reaction an enzyme catalyses, which ligand a receptor binds. This is worth holding onto because it tells you which method to reach for: a knockout answers the phenotypic question, immunoprecipitation or two-hybrid answers the cellular one, and only direct biochemistry answers the molecular one. Table 9-4 in the book is exactly this mapping from clue to method.",
        cn: "**「功能」这个词有三种不同的意思，而整节就是围绕这个区别组织的。** **表型功能**描述这个蛋白对**整个生物体**的影响：失去它，可能看到生长变慢、发育模式改变，或者死亡。**细胞功能**是这个蛋白在细胞内参与的**相互作用网络**；鉴定它的伙伴有助于确定它参与了哪些代谢过程。**分子功能**是精确的生化活性——某个酶催化哪个反应、某个受体结合哪个配体。这值得记住，因为它告诉你该伸手去拿哪一种方法：**敲除**回答表型层面的问题，**免疫沉淀或双杂交**回答细胞层面的，而只有**直接的生物化学**才回答分子层面的。书里的 Table 9-4 正是这样一张「线索 → 方法」的对照表。"
      },
      {
        cz: "transkriptom a proteom",
        en: "TWO WORDS THAT NAME A SNAPSHOT, NOT A LIST. The TRANSCRIPTOME is the entire complement of transcribed RNAs present in a cell AT A GIVEN MOMENT; the PROTEOME is the entire complement of proteins present at a given moment. Their studies are transcriptomics and proteomics. The phrase at a given moment is the whole content of the terms — unlike the genome, which is fixed, both of these change with condition, tissue and time, and it is precisely that change which carries the information. Watching how the transcriptome or proteome SHIFTS when one gene is altered is one of the strongest clues to what that gene's product was doing.\n\nIN THE BOOK'S OWN WORDS: “The entire complement of transcribed RNAs present at a given moment in a cell” (A p.317).",
        cn: "**两个命名「快照」而非「清单」的词。** **转录组 (transcriptome)** 是细胞中**在某一给定时刻**存在的全部转录 RNA；**蛋白质组 (proteome)** 是某一给定时刻存在的全部蛋白质。对它们的研究分别叫转录组学和蛋白质组学。「**在某一给定时刻**」这个限定语就是这两个词的全部内涵——与固定不变的**基因组**不同，这两者**随条件、组织和时间而变**，而恰恰是这种变化承载着信息。观察当**某一个基因被改动**时转录组或蛋白质组**如何移动**，是关于该基因产物在做什么的最有力线索之一。"
      },
      {
        cz: "ortolog, paralog, synteny",
        en: "THREE WORDS THAT MAKE A SEQUENCE COMPARISON MEAN SOMETHING. Comparative genomics assigns tentative function by similarity, and it is possible only because of evolution. ORTHOLOGS are genes in DIFFERENT species with a clear sequence and functional relationship to each other; PARALOGS are genes similarly related WITHIN a single species. Function known for a gene in one species can be tentatively transferred to its ortholog in another — easiest between close relatives such as mouse and human, though clear orthologs are identified between bacteria and humans. SYNTENY is the third word and the most useful piece of evidence: conserved gene ORDER along a chromosome. When two genes sit at the same position within related segments whose gene order matches, that shared arrangement is additional evidence for orthology beyond the sequence match alone. The workhorse tool is BLAST, at NCBI and Ensembl. Remember also the scale of ignorance the book states plainly: every newly sequenced genome contains many genes — OFTEN 40% OR MORE — about which little or nothing is known.\n\nIN THE BOOK'S OWN WORDS: “Genes that occur in different species but have a clear sequence and functional relationship” (A p.317); “Genes similarly related to each other within a single species are called paralogs” (A p.317).",
        cn: "**三个让序列比较真正有意义的词。** 比较基因组学靠**相似性**给出暫定的功能归属，而它之所以可行，完全是因为**进化**。**Orthologs（直系同源）**是**不同物种**中彼此有明确序列与功能关系的基因；**paralogs（旁系同源）**是**同一物种内**具有类似关系的基因。在一个物种中已知的基因功能，可以**暂定地**转移到另一个物种的直系同源基因上——在小鼠与人这样的近亲之间最容易，不过在细菌与人之间也已鉴定出明确的直系同源基因。**Synteny（共线性）**是第三个词，也是最有用的一条证据：染色体上**基因顺序**的保守。当两个基因位于基因顺序彼此吻合的相关片段中的**同一位置**时，这种共享的排列方式，就构成了超出单纯序列匹配之外的**额外**直系同源证据。主力工具是 **BLAST**，在 **NCBI** 和 **Ensembl** 上。另外记住书里直白写出的**无知的规模**：每一个新测序的基因组都含有大量基因——**常常占总数的 40% 以上**——我们对它们所知甚少或一无所知。"
      },
      {
        cz: "RNA-Seq — počet čtení je míra množství",
        en: "RNA-SEQ ANSWERS WHEN A GENE IS EXPRESSED, AND THE TRICK IS THAT COUNTING IS BUILT IN. RNA is isolated from a tissue or cell population, FRAGMENTED to a size suited to the sequencing platform, converted to double-stranded DNA with reverse transcriptase, and sequenced deeply. The output reveals both WHICH RNAs are present and HOW MUCH of each — because if more copies of one RNA are present, they simply give rise to more sequencing reads. Two preparation details are worth knowing because they encode a choice. If you want the WHOLE transcriptome, prime the reverse transcriptase with RANDOM HEXAMERS; six bases suffice because RNA-DNA hybrids are more stable than DNA-DNA hybrids. If you want only protein-coding genes, capture the eukaryotic mRNAs by their POLY(A) TAILS on POLY(dT)-COATED BEADS. The method is now sensitive enough for a single cell (scRNA-Seq), which lets you catalogue what is transcribed in different parts of one tissue. Its clinical weight is real: the transcriptional state of a human tissue can be diagnostic of conditions from diabetes to cancer, and it matters most in tumours, where genome instability generates a range of cell types. One honest caveat the book states: the mRNAs present are a clue to the proteins present, but NOT ALL mRNAs ARE IMMEDIATELY TRANSLATED.",
        cn: "**RNA-Seq 回答「一个基因何时被表达」，而它的妙处在于「计数」是天然内建的。** 从组织或细胞群中分离 RNA，**打碎**到与测序平台相称的大小，用**逆转录酶**转成双链 DNA，再做深度测序。输出同时揭示了**哪些** RNA 存在以及**各有多少**——因为如果某种 RNA 的拷贝更多，它就**自然产生更多的测序读长**。有两个制备细节值得知道，因为它们编码了一个选择：如果你要的是**整个**转录组，就用**随机六聚体**引发逆转录酶；六个碱基就够，因为 **RNA-DNA 杂合体比 DNA-DNA 杂合体更稳定**。如果你只要**蛋白编码基因**，就用**包被 poly(dT) 的磁珠**通过真核 mRNA 的 **poly(A) 尾**把它们捕获。这个方法如今灵敏到可用于**单个细胞**（scRNA-Seq），从而能编目同一组织**不同部位**各自在转录什么。它的临床分量是实在的：人体组织的转录状态可以对从糖尿病到癌症的多种情况**具有诊断意义**，而在**肿瘤**中最为要紧——基因组不稳定性在那里造出了一系列不同的细胞类型。书里也诚实地给了一条保留：存在的 mRNA 是关于存在哪些蛋白的线索，但**并非所有 mRNA 都会被立即翻译**。"
      },
      {
        cz: "hmotnostní spektrometrie — proteom přímo",
        en: "MASS SPECTROMETRY IS THE MORE DIRECT ANSWER, AND IT REPORTS SOMETHING RNA-SEQ CANNOT. Assessing the cellular proteome by mass spectrometry accurately catalogues and quantifies the thousands of proteins in a typical cell. It complements RNA-Seq rather than replacing it: RNA-Seq lists what was TRANSCRIBED, mass spectrometry lists what was transcribed AND TRANSLATED, which is the gap the not-all-mRNAs-are-translated caveat opens. And it adds a dimension neither sequencing method has — it reports HOW THOSE PROTEINS ARE MODIFIED, which in turn allows an assessment of their REGULATORY STATE. A phosphorylated enzyme and its unphosphorylated form are the same gene and the same transcript but not the same molecule, and only this method sees the difference.",
        cn: "**质谱是更直接的答案，而且它报告了 RNA-Seq 报告不了的东西。** 用质谱评估细胞的 proteome，能准确编目并定量一个典型细胞中的数千种蛋白。它是对 RNA-Seq 的**补充**而非替代：RNA-Seq 列出的是**被转录**的东西，质谱列出的是**既被转录又被翻译**的东西——这正是「并非所有 mRNA 都被翻译」那条保留所打开的缺口。而且它还多出一个两种测序方法都没有的维度：它报告**这些蛋白是如何被修饰的**，进而使人能够评估它们的**调控状态**。一个磷酸化的酶和它未磷酸化的形式，是同一个基因、同一份转录本，却**不是同一个分子**，而只有这个方法看得见这个差别。"
      },
      {
        cz: "GFP — fluorofor vzniká sám, stačí kyslík",
        en: "GFP WORKS ANYWHERE BECAUSE IT NEEDS NOTHING FROM THE HOST, AND THAT IS THE WHOLE REASON IT TOOK OVER. Green fluorescent protein comes from the jellyfish Aequorea victoria; it was discovered by Osamu Shimomura, and Martin Chalfie then showed that a target gene fused to the GFP gene gives a fusion protein that literally lights up under blue light and can be watched IN A LIVING CELL. The structure is a beta-barrel with the fluorophore at its centre, and the fluorophore is not a cofactor you have to supply — it is generated from THREE OF THE PROTEIN'S OWN RESIDUES, Ser65-Tyr66-Gly67, by an internal rearrangement coupled to a multistep oxidation. Because that reaction is AUTOCATALYTIC and requires no protein or cofactor other than MOLECULAR OXYGEN, GFP folds and fluoresces correctly in almost any cell it is cloned into, and just a few molecules can be seen under the microscope. Roger Tsien's protein engineering, plus related fluorescent proteins isolated from other coelenterates, has since produced variants across the visible spectrum, so different tagged proteins can be told apart by colour in the same cell. Two worked examples from the figure are worth keeping as concrete anchors: a GLR1-GFP fusion lights up a glutamate receptor in the nematode C. elegans, and an E. coli strain expressing a plasmid-binding protein fused to GFP shows bright dots marking exactly where the plasmids sit.\n\nIN THE BOOK'S OWN WORDS: “GFP is a protein derived from the jellyfish” (A p.319).",
        cn: "**GFP 到哪儿都能用，因为它对宿主一无所求，这正是它能大行其道的全部原因。** 绿色荧光蛋白来自水母 *Aequorea victoria*；它由 **Osamu Shimomura** 发现，随后 **Martin Chalfie** 证明，把目的基因与 GFP 基因融合，得到的融合蛋白会在蓝光下**真的发光**，而且能在**活细胞**中被观察。它的结构是一个 β-桶，荧光基团位于桶的中心；而这个荧光基团**不是**一个需要额外供应的辅因子——它是由蛋白**自身的三个残基**（Ser65-Tyr66-Gly67）经过内部重排、偶联一个多步氧化反应**自己生成**的。正因为这个反应是**自催化**的、除**分子氧**外不需要任何蛋白或辅因子，GFP 被克隆进几乎任何细胞都能正确折叠并发光，只需几个分子就能在显微镜下看见。**Roger Tsien** 的蛋白质工程，加上从其他腔肠动物中分离出的相关荧光蛋白，如今已产生了覆盖可见光谱的各种变体，于是同一个细胞里不同的标记蛋白可以**凭颜色**区分开。图中两个具体例子值得当作抓手记住：**GLR1-GFP** 融合蛋白让线虫 *C. elegans* 神经组织里的一个谷氨酸受体发光；而一株表达「结合质粒的蛋白与 GFP 融合体」的 E. coli，会显示出明亮的光点，**恰好标出质粒所在的位置**。"
      },
      {
        cz: "imunofluorescence — sekundární protilátka a biotin-streptavidin",
        en: "WHEN GFP WILL NOT DO, IMMUNOFLUORESCENCE VISUALISES THE UNALTERED PROTEIN, AT A COST. It requires FIXATION of the cell, which means killing it — a trade for seeing the endogenous, untagged protein rather than a fusion that might not fold or express well enough to see. The direct route tags the primary antibody itself with a fluorochrome; more commonly, an unlabelled primary antibody binds the target protein, and a SECOND, fluorochrome-carrying antibody then binds the first — the indirect approach, which AMPLIFIES the signal because several secondary antibodies can bind one primary. A further amplification trick attaches BIOTIN to the primary antibody and detects it with fluorochrome-linked STREPTAVIDIN, exploiting one of the strongest, most specific non-covalent interactions known; each target can then carry multiple fluorochromes. Either way, the readout is the same: a microscopic image in which a bright focus marks the protein's location. The book's own example is a nice piece of biology on top of the method — co-staining a human fibroblast nucleus for DNA polymerase epsilon, PCNA and a brief pulse of BrdU shows the two proteins co-localising exactly where BrdU marks active DNA replication.\n\nIN THE BOOK'S OWN WORDS: “This approach requires fixation (and thus death) of the cell” (A p.320).",
        cn: "**GFP 行不通时，免疫荧光改去看未经改动的天然蛋白，但要付出代价。** 它要求把细胞**固定**，也就是把它**杀死**——用这个代价换来看到**内源、未加标签**的蛋白，而不是一个可能折叠不好或表达量不足以看见的融合蛋白。直接的做法是把荧光基团直接接到**一抗**上；更常见的是用不带标记的一抗去结合目标蛋白，再用**带荧光基团的二抗**去结合一抗——这就是间接法，它能**放大信号**，因为一个一抗上可以结合好几个二抗。还有一种进一步放大的手法：把**生物素**接到一抗上，再用带荧光基团的**链霉亲和素**去检测——利用的是已知**最强、最专一**的非共价相互作用之一；这样每个目标就能挂上多个荧光基团。不论哪种做法，读出的方式都一样：显微图像中一个明亮的焦点标出蛋白的位置。书里自己的例子在方法之上又叠了一层漂亮的生物学——对一个人成纤维细胞的细胞核同时染 DNA 聚合酶 ε、PCNA 和一段短暂脉冲标记的 BrdU，结果显示这两个蛋白**恰好共定位**在 BrdU 标出的、正在进行 DNA 复制的区域。"
      },
      {
        cz: "imunoprecipitace a TAP-tag",
        en: "IMMUNOPRECIPITATION FINDS A PROTEIN'S PARTNERS BY PULLING IT DOWN AND SEEING WHAT COMES WITH IT. Fuse the gene under study to an epitope tag, express the fusion, and precipitate it with an antibody against the epitope — any protein bound to the target at the moment of precipitation comes down too, and mass spectrometry then identifies what came down. The chromatographic version passes a crude extract over a column of immobilised antibody, washes away everything unbound, cleaves the tag from the target with a specific protease, and elutes the complex; the method works with any immobilisable tag, His or GST included. TANDEM AFFINITY PURIFICATION (TAP) improves specificity by running this logic TWICE with two DIFFERENT tags in series — protein A (binds IgG) then a calmodulin-binding peptide (binds immobilised calmodulin), with a specific TEV protease cleavage between the two columns. Only an interaction that survives BOTH purification steps is reported, which is precisely why it minimises false positives: a weak or promiscuous binder that happened to co-purify on the first column is very unlikely to also survive the second, unrelated one.\n\nIN THE BOOK'S OWN WORDS: “The protein of interest is sometimes expressed as a fusion protein with an epitope tag” (A p.320).",
        cn: "**免疫沉淀通过把一个蛋白「拉下来」、看谁跟着一起下来，来找出它的伙伴。** 把目的基因与一个表位标签融合，表达出融合蛋白，再用针对该表位的抗体把它沉淀下来——沉淀那一刻正结合在目标蛋白上的任何蛋白也会**一起下来**，随后用质谱鉴定下来的都是什么。层析版本的做法是把粗提液过一根固定了抗体的柱子，把所有未结合的洗掉，用特异蛋白酶把标签从目标蛋白上切下来，再洗脱复合物；这个方法配合任何可固定化的标签都能用，包括 His 标签和 GST。**串联亲和纯化 (TAP)** 通过把这套逻辑**连续用两个不同的标签跑两遍**来提高专一性——先是 Protein A（结合 IgG），再是一段钙调蛋白结合肽（结合固定化的钙调蛋白），两根柱子之间用特异的 **TEV 蛋白酶**切一刀。**只有两步纯化都活下来**的相互作用才会被报告出来，这正是它能把假阳性降到最低的原因：一个恰好在第一根柱子上被共纯化下来的弱结合物或滥交结合物，极不可能在第二根**毫不相关**的柱子上也照样活下来。"
      },
      {
        cz: "kvasinkový dvojhybridní systém — Gal4p rozdělen na dvě domény",
        en: "YEAST TWO-HYBRID TURNS A PHYSICAL MEETING BETWEEN TWO PROTEINS INTO A YES/NO ANSWER YOU CAN SEE ON A PLATE. The trick rests on the yeast activator Gal4p, which has TWO domains — one that binds a specific DNA sequence, one that activates RNA polymerase — that remain STABLE WHEN SEPARATED but must be brought together for transcription to fire. Fuse protein X to the DNA-binding domain and protein Y to the activation domain, in separate constructs; if X and Y interact, the two domains are brought into proximity, and a REPORTER GENE is switched on — one that either lets the cell grow or gives a coloured product, so interacting pairs are trivially distinguished from non-interacting ones. At scale, one yeast strain library carries many DNA-binding-domain fusions, a second strain carries the activation-domain fusion for the protein of interest, the strains are MATED, and only diploids in which the reporter fires survive selection or turn colour — sequencing the surviving DNA-binding-domain fusion then identifies the partner. The method probes interaction IN VIVO, inside an intact cell, which is its strength; its weakness, stated plainly, is that multiprotein complexes can generate FALSE POSITIVES.\n\nIN THE BOOK'S OWN WORDS: “A sophisticated genetic approach to defining protein-protein interactions” (A p.321); “one that binds a specific DNA sequence, and another that activates RNA polymerase” (A p.322).",
        cn: "**酵母双杂交把两个蛋白之间的一次物理相遇，变成一个在平板上就能看见的是/否答案。** 这个诀窍靠的是酵母激活蛋白 **Gal4p**，它有**两个结构域**——一个结合特定 DNA 序列，一个激活 RNA 聚合酶——这两个结构域**分开时各自稳定**，但**必须被凑到一起**转录才会启动。把蛋白 X 融合到 DNA 结合结构域上，把蛋白 Y 融合到激活结构域上，做成两个独立的构建体；如果 X 和 Y 相互作用，两个结构域就被拉近，一个**报告基因**随之被打开——它要么让细胞得以生长，要么产生有色产物，于是相互作用的一对和不相互作用的一对**一眼就能分辨**。放大到规模化操作时，一株酵母菌株的文库携带许多 DNA 结合结构域融合体，另一株携带目标蛋白的激活结构域融合体，两株**交配 (mated)**，只有报告基因被激活的二倍体才能在选择培养基上存活或变色——对存活下来的那个 DNA 结合结构域融合体的基因测序，就能鉴定出那个伙伴。这个方法是在**活的完整细胞内**探测相互作用，这是它的优势；它的弱点书里也直说了：**多蛋白复合物**可能产生**假阳性**。"
      },
      {
        cz: "proč byl CRISPR/Cas9 potřeba — dvouřetězcový zlom a NHEJ",
        en: "THE OLD WAY TO INACTIVATE A GENE WAS TO BREAK IT AND LET REPAIR RUIN IT, AND CRISPR/CAS9 IS JUST A BETTER WAY TO MAKE THE BREAK. The general strategy for asking what a gene does is to cut it at a functionally critical site, producing a DOUBLE-STRAND BREAK, and let the cell's own repair machinery do the damage. In eukaryotes that break is usually repaired by NON-HOMOLOGOUS END JOINING (NHEJ), which seals the break but IMPRECISELY — nucleotides are often deleted or added at the junction, inactivating the gene. In bacteria the same kind of break is usually repaired more accurately, by homologous recombination, though inactivating mutations still occur. Older targeting methods produced that break less conveniently than CRISPR/Cas9 does, which is why systems developed since 2011 have largely displaced them — CRISPR/Cas9 does not introduce a new principle of gene inactivation, it makes the cut easy to aim.",
        cn: "**过去让一个基因失活的老办法，就是把它打断，让修复过程把它搞坏——而 CRISPR/Cas9 只是一种更好的「打断」方式。** 探究一个基因功能的通用策略，是在一个功能关键的位点把它切开，造成一个**双链断裂**，然后让细胞自己的修复机器去造成损伤。在真核生物中，这种断裂通常由**非同源末端连接 (NHEJ)** 修复，它能封住断口，但**不精确**——连接处常常发生核苷酸的缺失或插入，使基因失活。在细菌中，同类断裂通常由**同源重组**更准确地修复，不过失活性突变仍会出现。较老的靶向方法制造这种断裂远不如 CRISPR/Cas9 方便，这正是自 2011 年起的新系统在很大程度上取代了它们的原因——**CRISPR/Cas9 并没有引入一个全新的基因失活原理，它只是让「这一刀」变得容易瞄准**。"
      },
      {
        cz: "bakteriální imunitní systém — CRISPR pole a spacer sekvence",
        en: "CRISPR IS SPELLED OUT BY ITS OWN NAME, AND THE NAME DESCRIBES AN ARCHIVE, NOT A TOOL. CRISPR stands for Clustered, Regularly Interspaced Short Palindromic Repeats — a series of regularly spaced short repeats sitting in the bacterial genome, with SPACER sequences between them derived from bacteriophages that infected the bacterium before, without killing it. A Cas (CRISPR-associated) protein is a nuclease. Together the CRISPR array and the Cas protein form an immune system that evolved so bacteria could survive phage infection: when the same phage attacks again, the CRISPR sequences are transcribed to RNA, individual spacer sequences are cleaved out as GUIDE RNAs (gRNAs, carrying some adjacent repeat sequence), a gRNA complexes with one or more Cas proteins and, in some systems, with a second RNA called TRACRRNA (trans-activating CRISPR RNA), and the resulting complex binds and destroys the matching viral DNA via the Cas nuclease activity. This is worth holding as the whole conceptual key: the bacterium is not inventing a targeting sequence each time, it is CONSULTING A RECORD of infections it survived before.\n\nIN THE BOOK'S OWN WORDS: “stands for clustered, regularly interspaced short palindromic repeats” (A p.322); “The CRISPR sequences and Cas protein are components of a kind of immune system” (A p.322).",
        cn: "**CRISPR 这个名字本身就说明了它是什么——一份档案，不是一个工具。** CRISPR 全称是 Clustered, Regularly Interspaced Short Palindromic Repeats（成簇的、规律间隔的短回文重复），指细菌基因组中一系列有规律间隔的短重复序列，重复之间是来自**曾经感染过、但没能杀死这个细菌**的噬菌体的 **spacer（间隔）**序列。**Cas（CRISPR-associated）蛋白**是一种核酸酶。CRISPR 阵列与 Cas 蛋白共同构成了一套免疫系统，它进化出来是为了让细菌能在噬菌体感染中存活：当同一种噬菌体再次来袭时，CRISPR 序列被转录成 RNA，单个 spacer 序列被切出来，成为 **guide RNA (gRNA，还带着一段相邻的重复序列)**；一条 gRNA 与一个或多个 Cas 蛋白形成复合物，在某些系统中还要加上第二条叫 **tracrRNA**（反式激活 CRISPR RNA）的 RNA；随后这个复合物结合并通过 Cas 的核酸酶活性摧毁匹配的病毒 DNA。这一点值得当成全部概念上的关键来记住：细菌**不是每次现造一段靶向序列**，而是在**查阅一份它曾经扛过的感染记录**。"
      },
      {
        cz: "Cas9 — dvě nukleázové domény, sgRNA, nick vs. dvouřetězcový zlom",
        en: "THE CURRENT TOOL IS A SIMPLIFICATION OF THE NATURAL SYSTEM DOWN TO ONE PROTEIN AND ONE RNA. The technology became practical with a relatively simple CRISPR/Cas system discovered in Streptococcus pyogenes that needs only a SINGLE Cas protein, Cas9, to cleave DNA. Work by many laboratories, particularly Jennifer Doudna's and Emmanuelle Charpentier's, fused the gRNA and tracrRNA into ONE SINGLE GUIDE RNA (sgRNA) — the engineering step that made the system programmable, because the guide sequence within the sgRNA can simply be REWRITTEN to target almost any genomic sequence. Cas9 itself has TWO SEPARATE NUCLEASE DOMAINS, one cutting the DNA strand paired with the sgRNA and the other cutting the opposite strand; the sgRNA is needed both to PAIR with the target and to ACTIVATE the nuclease domains. Inactivating just one of the two domains gives an enzyme that cuts only one strand — a NICK rather than a double-strand break. This is not a minor variant: a double-strand break is usually repaired by imprecise NHEJ and simply KNOCKS THE GENE OUT, whereas a nick, combined with a donor DNA fragment carrying the desired sequence change, is repaired by homologous recombination with somewhat improved efficiency at introducing a SPECIFIC edit rather than a random one. Delivery follows the same logic as ordinary cloning: plasmids expressing Cas9 and the sgRNA reach microbial cells by electroporation, while mammalian cells receive the components packaged into engineered viruses that deliver them to the nucleus.\n\nIN THE BOOK'S OWN WORDS: “consisting of gRNA and tracrRNA fused into a single guide RNA” (A p.323).",
        cn: "**如今的工具，是把天然系统简化到只剩一个蛋白和一条 RNA。** 这项技术之所以变得实用，靠的是在**酿脓链球菌**（*Streptococcus pyogenes*）中发现的一套相对简单的 CRISPR/Cas 系统，它切开 DNA 只需要**单一一个** Cas 蛋白——**Cas9**。许多实验室的工作，尤其是 **Jennifer Doudna** 与 **Emmanuelle Charpentier** 的工作，把 gRNA 和 tracrRNA 融合成**一条 single guide RNA (sgRNA)**——正是这一步工程改造让这套系统变得**可编程**，因为 sgRNA 里的引导序列可以被**直接改写**，指向几乎任何基因组序列。Cas9 本身有**两个独立的核酸酶结构域**，一个切与 sgRNA 配对的那条 DNA 链，另一个切对面那条链；sgRNA 既要负责与靶序列**配对**，也要负责**激活**这两个核酸酶结构域。只让两个结构域中的**一个**失活，就得到一个只切一条链的酶——造成的是一个**缺口 (nick)** 而非双链断裂。这不是无关紧要的变体：**双链断裂**通常被不精确的 NHEJ 修复，结果就是**简单地把基因敲掉**；而**缺口**配合一段携带目标序列改动的**供体 DNA 片段**，则由同源重组修复，引入**特定**编辑（而非随机改动）的效率会有所提高。递送方式和普通克隆的逻辑一样：表达 Cas9 与 sgRNA 的质粒通过电穿孔进入微生物细胞，而哺乳动物细胞则通过被改造过的病毒把这些组分递送进细胞核。"
      },
      {
        cz: "CRISPR ve vysokoprůchodném screeningu — bar-kódy a lentivirové vektory",
        en: "CRISPR TURNS A GENETIC SCREEN INTO SOMETHING YOU CAN RUN ON THE WHOLE GENOME AT ONCE. A genetic screen introduces a gene PERTURBATION — inactivation or activation — so that each individual cell in a population has ONE gene affected, but across the whole population MOST OR ALL genes are affected in some cell; a selection or stress is then applied, and cells lacking a gene needed to survive it drop out, while cells in which the relevant gene was instead activated may become enriched. CRISPR libraries scale this up: sgRNA libraries targeting virtually every gene in a genome are built with a 20 bp targeting sequence in each sgRNA, which doubles as a unique BAR CODE that sequencing can read back out. The cassettes, also expressing Cas9 or a Cas9 variant, are packaged into engineered LENTIVIRAL vectors (derived from HIV, with its own multiplication genes removed) at a low multiplicity of infection so that most cells integrate only ONE cassette. Which Cas9 variant is used determines the effect: unmodified Cas9 cuts and knocks the gene out; a nuclease-dead Cas9 simply binds and blocks transcription; Cas9 fused to a repressor or activator domain more effectively silences or boosts transcription without cutting DNA at all. After selection, the RISE OR FALL in abundance of each bar code, read by deep sequencing, reports which genes were required, dispensable, or actively harmful under that particular stress.",
        cn: "**CRISPR 让遗传筛选变成了可以一次性覆盖整个基因组的操作。** 一次遗传筛选引入一种基因**扰动**（失活或激活），使群体中**每一个**细胞只有**一个**基因受到影响，但在**整个群体**层面，**几乎所有**基因都在某个细胞里被影响到过；随后施加一次选择或压力，缺少某个存活所需基因的细胞就会**掉队**，而某个基因反而被激活的细胞则可能被**富集**。CRISPR 文库把这套操作规模化：针对基因组中几乎每一个基因构建 sgRNA 文库，每条 sgRNA 中 **20 bp 的靶向序列**同时兼作一个独一无二的**条形码**，测序就能把它读出来。这些同时表达 Cas9 或某个 Cas9 变体的表达盒，被包装进改造过的**慢病毒载体**（来自 HIV，自身增殖所需的基因已被去除），以较低的感染复数递送，使大多数细胞只整合**一个**表达盒。用哪种 Cas9 变体，决定了产生什么效果：未改造的 Cas9 切开 DNA、把基因敲掉；核酸酶失活的 Cas9 只是结合上去、**阻断转录**；融合了阻遏或激活结构域的 Cas9 则能更有效地**沉默或增强转录**，完全不切 DNA。选择之后，通过深度测序读出每个条形码丰度的**上升或下降**，就报告了在那种特定压力下，哪些基因是必需的、可有可无的，或者反而是有害的。"
      },
      {
        cz: "gene drive — X-shredder a nevratnost uvolnění",
        en: "A GENE DRIVE IS CRISPR TURNED AGAINST A WHOLE POPULATION, AND IT IS WORTH KNOWING PRECISELY BECAUSE IT IS IRREVERSIBLE. Box 9-1 describes gene drives as a strategy against invasive species — mosquitoes carrying Zika, introduced rats, cane toads — building on the older observation that selfish DNA elements such as homing endonucleases and transposons can spread through a population on their own. The CRISPR/Cas9 version, the X-SHREDDER strategy already proven in mosquitoes, inserts into the Y chromosome a cassette expressing Cas9 plus several sgRNAs targeting multiple unique sites on the X chromosome, under a regulatory system active only during SPERMATOGENESIS. During spermatogenesis the cassette destroys the X chromosome at multiple sites, so only Y-bearing sperm remain viable; every offspring of an affected male is therefore male, and every one of those males carries the cassette and repeats the effect. As the cassette spreads through the population this way, females become scarce and the population collapses. The book's own caution is the point worth remembering for an exam: this remains laboratory-only, resistance could evolve by mutation at the sgRNA target sites (though multiple sites make this harder), and once males carrying a gene drive are released into the wild it would be essentially impossible to call the effect back.\n\nIN THE BOOK'S OWN WORDS: “Invasive introduced plant and animal species can wreak havoc on any natural environment” (A p.325).",
        cn: "**基因驱动 (gene drive) 是把 CRISPR 对准整个种群，而它值得精确记住，恰恰因为它是不可逆的。** Box 9-1 把基因驱动描述为对付入侵物种的策略——携带寨卡病毒的蚊子、引入的老鼠、海蟾蜍——它建立在一个更早的观察之上：像归巢核酸内切酶和转座子这类「自私 DNA 元件」能够**自行**在种群中扩散。CRISPR/Cas9 版本，也就是已经在蚊子身上得到验证的 **X-shredder（X 染色体粉碎器）**策略，把一个表达 Cas9、外加若干靶向 X 染色体上多个独特位点的 sgRNA 的表达盒插入 **Y 染色体**，并置于一个**只在精子发生期间**活跃的调控系统之下。在精子发生期间，这个表达盒在多个位点摧毁 X 染色体，于是只有携带 Y 染色体的精子能存活；受影响的雄性所生的后代因此**全部是雄性**，而这些雄性又**全都携带着同一个表达盒**，重复这个效果。随着表达盒以这种方式在种群中扩散，雌性变得稀少，种群随之崩溃。书中自己给出的告诫，正是考试上值得记住的要点：这目前**仅限实验室**；抗性可能通过 sgRNA 靶点处的突变演化出来（不过多靶点使这更难发生）；而一旦携带基因驱动的雄性被**释放到野外**，这个效果就基本**无法收回**了。"
      }
    ],
    terms: [
      {
        cz: "CRISPR",
        en: "CRISPR",
        cn: "CRISPR（成簇的规律间隔短回文重复序列）",
        def_en: "Clustered, Regularly Interspaced Short Palindromic Repeats — a bacterial genomic array of short repeats separated by spacer sequences derived from phages the bacterium survived before. Transcribed and processed into guide RNAs that direct a Cas nuclease to matching viral DNA on reinfection. A natural antiviral immune system, repurposed since 2011 as a programmable genome-editing tool.",
        def_cn: "成簇的、规律间隔的短回文重复序列——细菌基因组中一段由短重复序列组成的阵列，重复之间是来自该细菌曾经扛过的噬菌体感染的 spacer 序列。它被转录并加工成 guide RNA，在再次感染时引导 Cas 核酸酶找到匹配的病毒 DNA。这是一套天然的抗病毒免疫系统，自 2011 年起被改造为可编程的基因组编辑工具。"
      },
      {
        cz: "Cas9",
        en: "Cas9",
        cn: "Cas9",
        def_en: "The single CRISPR-associated nuclease from Streptococcus pyogenes that made programmable genome editing practical, needing only one protein rather than a multi-subunit system. Carries two separate nuclease domains, one per DNA strand; inactivating one gives a nickase instead of a double-strand cutter.",
        def_cn: "来自酿脓链球菌的单一 CRISPR 相关核酸酶，正是它让可编程基因组编辑变得实用——只需一个蛋白，而不是一套多亚基系统。带有两个独立的核酸酶结构域，各切一条 DNA 链；使其中一个失活，就得到一个只造成缺口（nick）而非双链切割的酶。"
      },
      {
        cz: "sgRNA — jednotná naváděcí RNA",
        en: "single guide RNA (sgRNA)",
        cn: "单一向导 RNA (sgRNA)",
        def_en: "An engineered fusion of the natural guide RNA and tracrRNA into one molecule, developed principally by Jennifer Doudna and Emmanuelle Charpentier. Its 20-nucleotide targeting sequence pairs with the genomic target and can be rewritten to redirect Cas9 to almost any sequence, which is the entire basis of CRISPR's programmability.",
        def_cn: "把天然的 guide RNA 和 tracrRNA 工程融合成一个分子，主要由 Jennifer Doudna 与 Emmanuelle Charpentier 开发。它 20 个核苷酸长的靶向序列与基因组靶点配对，且可以被改写以把 Cas9 重新导向几乎任何序列——这正是 CRISPR 可编程性的全部基础。"
      },
      {
        cz: "dvouřetězcový zlom a NHEJ",
        en: "double-strand break and NHEJ",
        cn: "双链断裂与 NHEJ",
        def_en: "Cas9's cut with both nuclease domains active produces a double-strand break, which eukaryotic cells usually repair by non-homologous end joining (NHEJ) — a process that seals the break but imprecisely, often deleting or adding nucleotides at the junction and thereby inactivating the gene. This is the default mechanism behind a CRISPR knockout.",
        def_cn: "Cas9 两个核酸酶结构域都有活性时造成的切割是一个双链断裂，真核细胞通常通过非同源末端连接 (NHEJ) 修复它——这个过程能封住断口，但不精确，常常在连接处缺失或插入核苷酸，从而使基因失活。这正是 CRISPR 敲除背后的默认机制。"
      },
      {
        cz: "nick — jednořetězcový zlom",
        en: "nick (single-strand break)",
        cn: "缺口（单链断裂）",
        def_en: "The cut produced when only one of Cas9's two nuclease domains is active. Combined with a donor DNA fragment carrying the desired sequence, a nick is repaired by homologous recombination with somewhat improved efficiency at introducing a specific edit, rather than the random disruption a double-strand break usually produces.",
        def_cn: "当 Cas9 两个核酸酶结构域中只有一个有活性时造成的切口。配合一段携带目标序列的供体 DNA 片段，缺口由同源重组修复，在引入特定编辑（而非双链断裂通常造成的随机破坏）上效率有所提高。"
      },
      {
        cz: "ortolog",
        en: "ortholog",
        cn: "直系同源基因",
        def_en: "A gene in a different species related to a given gene by clear sequence and functional descent from a common ancestor. Function established in one species can be tentatively transferred to its ortholog elsewhere, most reliably between closely related species and supported further by synteny.",
        def_cn: "在不同物种中，与某个给定基因存在明确序列与功能上共同祖先关系的基因。在一个物种中确立的功能，可以暂定地转移到另一个物种中的直系同源基因上；在近缘物种之间最可靠，而共线性 (synteny) 能进一步支持这种判断。"
      },
      {
        cz: "paralog",
        en: "paralog",
        cn: "旁系同源基因",
        def_en: "A gene related by descent to another gene within the SAME species, typically arising from gene duplication. Contrast with an ortholog, which is the corresponding relationship between different species.",
        def_cn: "在同一物种内，与另一个基因存在共同祖先关系的基因，通常源自基因重复。与直系同源（ortholog，指不同物种间的对应关系）相对。"
      },
      {
        cz: "synteny — konzervovaný genový pořádek",
        en: "synteny",
        cn: "共线性",
        def_en: "Conservation of gene ORDER along a chromosome across related species, not merely conservation of the genes themselves. When two genes occupy the same relative position within syntenic segments, that shared arrangement is additional evidence — beyond sequence similarity alone — that they are orthologous.",
        def_cn: "在相关物种间，染色体上基因**顺序**（而不仅仅是基因本身）的保守。当两个基因在具有共线性的片段中占据相同的相对位置时，这种共享的排列方式，就是在单纯序列相似性之外，支持它们互为直系同源的额外证据。"
      },
      {
        cz: "RNA-Seq",
        en: "RNA-Seq",
        cn: "RNA-Seq（RNA 测序）",
        def_en: "Deep sequencing of reverse-transcribed cellular RNA that reveals both which transcripts are present and their relative abundance, since more copies of a transcript yield more sequencing reads. Sensitive enough to run on single cells (scRNA-Seq).",
        def_cn: "对经逆转录的细胞 RNA 进行深度测序，既能揭示哪些转录本存在，也能揭示它们的相对丰度——因为某个转录本的拷贝越多，产生的测序读长就越多。灵敏度已足以用于单个细胞（scRNA-Seq）。"
      },
      {
        cz: "transkriptom",
        en: "transcriptome",
        cn: "转录组",
        def_en: "The entire complement of RNAs transcribed in a cell at a given moment. Unlike the fixed genome, it changes with condition, tissue and time, and that change is itself the informative signal.",
        def_cn: "细胞在某一给定时刻转录出的全部 RNA 的总和。与固定不变的基因组不同，它随条件、组织和时间而变化，而这种变化本身就是有信息量的信号。"
      },
      {
        cz: "proteom",
        en: "proteome",
        cn: "蛋白质组",
        def_en: "The entire complement of proteins present in a cell at a given moment, catalogued and quantified directly by mass spectrometry, which also reports post-translational modifications and thereby a protein's regulatory state.",
        def_cn: "细胞在某一给定时刻存在的全部蛋白质的总和，可由质谱直接编目并定量，质谱还能一并报告翻译后修饰，从而反映蛋白质的调控状态。"
      },
      {
        cz: "GFP — zelený fluorescenční protein",
        en: "green fluorescent protein (GFP)",
        cn: "绿色荧光蛋白 (GFP)",
        def_en: "A beta-barrel protein from the jellyfish Aequorea victoria whose fluorophore forms autocatalytically from three of its own residues (Ser65-Tyr66-Gly67) using only molecular oxygen, requiring no external cofactor. Fused to a gene of interest, it lets the fusion protein's location be watched directly in a living cell.",
        def_cn: "来自水母 Aequorea victoria 的一种 β-桶蛋白，其荧光基团由自身三个残基（Ser65-Tyr66-Gly67）经自催化形成，只需分子氧、不需要任何外源辅因子。与目的基因融合后，能让融合蛋白的定位在活细胞中被直接观察到。"
      },
      {
        cz: "epitopová značka",
        en: "epitope tag",
        cn: "表位标签",
        def_en: "A short protein sequence fused to a protein of interest that is bound tightly by a well-characterized, commercially available antibody. Used to visualize a protein by immunofluorescence, or to immunoprecipitate it and identify what other proteins co-purify with it.",
        def_cn: "与目的蛋白融合的一段短蛋白序列，能被一种性质研究透彻、市面有售的抗体紧密结合。用于通过免疫荧光观察某个蛋白，或将其免疫沉淀下来、鉴定与之共纯化的其他蛋白。"
      },
      {
        cz: "TAP-tag — tandemová afinitní purifikace",
        en: "tandem affinity purification (TAP) tag",
        cn: "串联亲和纯化标签 (TAP)",
        def_en: "Two consecutive affinity tags — typically protein A, then a calmodulin-binding peptide — fused to a target protein and purified through two sequential columns with a protease cleavage between them. Only protein-protein interactions surviving both purification steps are reported, which minimises false positives.",
        def_cn: "融合在目标蛋白上的两个连续亲和标签——通常是 Protein A，再加一段钙调蛋白结合肽——通过两根依次相连的柱子纯化，中间有一步蛋白酶切割。只有能在两步纯化中都存活下来的蛋白-蛋白相互作用才会被报告出来，从而把假阳性降到最低。"
      },
      {
        cz: "kvasinkový dvojhybridní systém",
        en: "yeast two-hybrid analysis",
        cn: "酵母双杂交分析",
        def_en: "A genetic method for detecting protein-protein interactions in vivo, based on the yeast Gal4 protein's two separable domains — a DNA-binding domain and an activation domain — which must be brought into proximity by an interaction between two fused test proteins before a reporter gene is transcribed.",
        def_cn: "一种在体内检测蛋白-蛋白相互作用的遗传学方法，基于酵母 Gal4 蛋白可分离的两个结构域——一个 DNA 结合结构域和一个激活结构域——这两个结构域必须由两个待测融合蛋白之间的相互作用拉近，报告基因才会被转录。"
      },
      {
        cz: "gene drive",
        en: "gene drive",
        cn: "基因驱动",
        def_en: "A CRISPR/Cas9-based cassette engineered to spread through a wild population faster than ordinary inheritance would allow, for example by skewing sex ratio (the X-shredder strategy) to collapse an invasive species. Effective in the laboratory; once released, essentially irreversible.",
        def_cn: "一种基于 CRISPR/Cas9 的表达盒，被设计成能以远超普通遗传规律的速度在野生种群中扩散，例如通过扭曲性别比（X-shredder 策略）来使入侵物种的种群崩溃。在实验室中有效；一旦释放，基本不可逆。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "Why does fusing the gRNA and tracrRNA into a single guide RNA (sgRNA) matter for turning CRISPR/Cas9 into a genome-editing tool?",
        q_cn: "把 gRNA 和 tracrRNA 融合成单一的 sgRNA，为什么对把 CRISPR/Cas9 变成基因组编辑工具至关重要？",
        options: [
          "It increases the size of Cas9 so it can bind more DNA at once",
          "It removes the need for any RNA component, making the system purely protein-based",
          "It collapses the natural two-RNA system into one molecule whose 20-nucleotide targeting sequence can simply be rewritten, so the same Cas9 protein can be redirected to almost any genomic sequence by base pairing alone",
          "It permanently activates Cas9 so it no longer requires a guide sequence to cleave DNA"
        ],
        answer: 2,
        why_en: "In the natural bacterial system the guide RNA and tracrRNA are separate molecules. Doudna and Charpentier's engineering step was to fuse them into one sgRNA, which does two things at once: it simplifies the system to one protein plus one RNA, and it isolates the ONLY sequence-specific part — the 20 bp targeting region — as something you can freely redesign. Because targeting is just Watson-Crick base pairing, changing that one stretch of RNA is enough to send the same Cas9 protein anywhere in a genome you choose. This is why CRISPR/Cas9 is called programmable and older targeting methods were not.",
        why_cn: "在天然的细菌系统中，guide RNA 和 tracrRNA 是两个分开的分子。Doudna 与 Charpentier 的工程改造，就是把它们融合成一条 sgRNA，这同时做成了两件事：把系统简化为一个蛋白加一条 RNA；并且把唯一具有序列特异性的那部分——20 bp 的靶向区——独立出来，变成一段你可以随意重新设计的序列。因为靶向靠的只是 Watson-Crick 碱基配对，改动这一小段 RNA 就足以让同一个 Cas9 蛋白被送到基因组中你选择的任何地方。这正是 CRISPR/Cas9 被称为「可编程」、而更老的靶向方法不是的原因。"
      },
      {
        type: "mcq",
        q_en: "A researcher wants to knock out a gene using CRISPR/Cas9 with unmodified Cas9 (both nuclease domains active). What is the molecular sequence of events, in order?",
        q_cn: "一位研究者想用未改造的 Cas9（两个核酸酶结构域都有活性）通过 CRISPR/Cas9 敲除一个基因。按顺序，分子层面的事件依次是什么？",
        options: [
          "sgRNA binds Cas9 and directly methylates the target sequence, silencing transcription without cutting DNA",
          "The sgRNA-Cas9 complex binds the target sequence, Cas9 cleaves both DNA strands producing a double-strand break, and the cell's own NHEJ repair machinery seals it imprecisely, usually deleting or adding nucleotides and inactivating the gene",
          "Cas9 alone recognises the target by protein-DNA contacts, cuts one strand only, and homologous recombination with a donor fragment repairs it precisely",
          "The sgRNA is translated into a short peptide that competes with the target protein for its binding partner"
        ],
        answer: 1,
        why_en: "This is the ordinary knockout pathway, and it is worth keeping the causal chain straight: sgRNA-directed BINDING, then Cas9's TWO active nuclease domains produce a DOUBLE-STRAND break, and only then does the cell's OWN repair system — not CRISPR itself — do the damage. NHEJ is the default eukaryotic repair pathway for such breaks and it is imprecise by nature, so the inactivation is a side effect of repair, not something Cas9 does directly. This is also why a nick (one domain inactivated) behaves so differently — it is repaired by the more accurate homologous recombination pathway instead, which is the route to a precise edit rather than a knockout.",
        why_cn: "这是普通的敲除路径，值得把因果链理清：先是 sgRNA 引导的结合，然后 Cas9 的两个有活性的核酸酶结构域造成双链断裂，而只有到这一步之后，是细胞自己的修复系统——不是 CRISPR 本身——造成了损伤。NHEJ 是真核生物对这类断裂的默认修复途径，且本质上不精确，所以基因失活是修复的副产品，而不是 Cas9 直接做的事。这也是为什么缺口（只让一个结构域失活）表现如此不同——它改由更准确的同源重组途径修复，这正是通往精确编辑（而非敲除）的路。"
      },
      {
        type: "mcq",
        q_en: "You find a gene of unknown function conserved between mouse and human, occupying the same relative position within a chromosomal segment where several neighbouring genes are also conserved in the same order. What does this pattern add, beyond the sequence similarity alone?",
        q_cn: "你发现一个功能未知的基因在小鼠和人之间保守，并且在一段染色体片段中占据相同的相对位置，该片段内的若干相邻基因也以相同顺序保守。这种模式在单纯的序列相似性之外，还额外提供了什么？",
        options: [
          "Proof that the gene is essential for viability in both species",
          "Evidence of synteny, which strengthens the case that the mouse and human genes are orthologs rather than a coincidental sequence match",
          "Proof that the gene has no paralogs anywhere in either genome",
          "Direct evidence of the gene's molecular function, such as which ligand it binds"
        ],
        answer: 1,
        why_en: "Conserved gene order across a chromosomal segment, in species otherwise related, is synteny — and the section is explicit that synteny is ADDITIONAL evidence for an orthologous relationship, on top of sequence similarity by itself. It does not by itself prove essentiality, rule out paralogs, or reveal molecular function (which reaction, which ligand) — those require different evidence, such as gene-perturbation experiments or direct biochemistry. Synteny answers a narrower, specific question: is this really the SAME gene by descent, or just a coincidentally similar sequence.",
        why_cn: "在其他方面相关的物种之间，一段染色体片段上基因顺序的保守就是共线性 (synteny)——本节明确指出，共线性是在单纯序列相似性之外的额外证据，用来支持一对基因确实互为直系同源。它本身不能证明该基因是必需的，不能排除旁系同源基因的存在，也不能揭示分子功能（催化哪个反应、结合哪个配体）——这些需要不同的证据，比如基因扰动实验或直接的生物化学。共线性回答的是一个更狭窄、更具体的问题：这真的是同一个基因（由共同祖先而来），还是仅仅碰巧序列相似。"
      },
      {
        type: "mcq",
        q_en: "In a CRISPR-based high-throughput genetic screen delivered by lentiviral vectors, what role does the 20 bp targeting sequence within each sgRNA play, beyond directing Cas9 to its target?",
        q_cn: "在通过慢病毒载体递送的 CRISPR 高通量遗传筛选中，每条 sgRNA 中 20 bp 的靶向序列除了引导 Cas9 找到靶点之外，还起什么作用？",
        options: [
          "It has no other role; a separate barcode sequence must always be added elsewhere in the cassette",
          "It also serves as a unique barcode: because it targets one specific gene, sequencing it after selection reveals which gene each surviving or depleted cell had disrupted",
          "It encodes a short peptide that is translated and used as an epitope tag for immunoprecipitation",
          "It determines which of the two Cas9 nuclease domains is active in that particular cell"
        ],
        answer: 1,
        why_en: "The section states this directly: because each sgRNA's 20 bp targeting sequence is specific to one gene, that same sequence doubles as a unique bar code identifier that sequencing can read back out after the screen. This is what makes pooled, genome-scale screening tractable — you do not need to isolate and test each perturbed cell individually; you sequence the population before and after selection and read the RISE or FALL in abundance of each bar code (that is, each targeting sequence) to learn which gene's disruption helped or hurt survival under the applied stress.",
        why_cn: "本节直接说明了这一点：因为每条 sgRNA 的 20 bp 靶向序列都对应唯一一个基因，这段序列同时兼作一个独一无二的条形码，在筛选后测序就能把它读出来。这正是让混合式、全基因组规模的筛选变得可行的关键——你不需要把每个被扰动的细胞单独分离出来测试；你只需要在选择前后对整个群体测序，读出每个条形码（也就是每条靶向序列）丰度的上升或下降，就能知道在所施加的压力下，破坏哪个基因有利或有害于存活。"
      }
    ],
    oral: {
      q_en: "A colleague says CRISPR/Cas9 was 'invented' in a lab in the 2010s. Correct that framing, and then walk through how the natural system was turned into a programmable tool, and how it is now used both to knock a single gene out and to screen an entire genome at once.",
      q_cn: "一位同学说 CRISPR/Cas9 是在 2010 年代的某个实验室里「发明」出来的。请纠正这个说法，然后讲一下天然系统是如何被改造成可编程工具的，以及它现在如何既能敲除单个基因，又能用来筛选整个基因组。",
      model_en: "The framing is backwards: CRISPR/Cas9 was not invented, it was discovered and repurposed. It is a bacterial immune system that evolved to let bacteria survive bacteriophage infection. Bacteria file away spacer sequences from phages that infected them before without killing them, stored between short palindromic repeats in the genome — that whole array is the CRISPR locus. On reinfection by a matching phage, the array is transcribed and processed into guide RNAs, which pair with one or more Cas nuclease proteins, sometimes together with a second RNA called tracrRNA, and the resulting complex finds and destroys the matching viral DNA. What the lab work did, principally Jennifer Doudna and Emmanuelle Charpentier, was find a simplified natural version of this system in Streptococcus pyogenes that uses only a single Cas protein, Cas9, and then fuse its two RNA components — the guide RNA and the tracrRNA — into one single guide RNA, or sgRNA. That fusion is the entire trick: the sgRNA carries a 20-nucleotide targeting sequence that pairs with the DNA target by ordinary base pairing, so rewriting that one stretch redirects the same Cas9 protein to essentially any sequence you choose. Cas9 itself has two separate nuclease domains, one for each DNA strand, and both being active gives a double-strand break. In a eukaryotic cell that break is usually repaired by non-homologous end joining, which is imprecise — it tends to delete or add a few nucleotides at the junction — and that imprecision is exactly what inactivates the gene. So a simple knockout is: deliver Cas9 and an sgRNA targeting your gene, let it cut, let the cell's own sloppy repair do the rest. If you want a precise edit rather than a knockout, you inactivate one of the two nuclease domains so Cas9 only nicks one strand, and supply a donor DNA fragment carrying the sequence you actually want; the nick is repaired by homologous recombination using that donor, with somewhat better efficiency at making the specific change rather than a random one. Scaling this to a whole genome uses the same molecular logic with one extra trick. A library of sgRNAs is built to target virtually every gene, and because each sgRNA's 20 bp targeting sequence is gene-specific, it also works as a unique bar code. These are packaged, along with Cas9 or a Cas9 variant, into engineered lentiviral vectors — HIV-derived, with the genes needed for HIV's own replication removed — and delivered at a low enough multiplicity that most cells pick up only one construct. Which Cas9 variant is used matters: ordinary Cas9 cuts and knocks the gene out, a nuclease-dead Cas9 just sits on the target and blocks transcription, and a Cas9 fused to a repressor or activator domain can silence or boost transcription without cutting DNA at all. The population is then put under a selection or a stress, and afterwards you sequence the bar codes — the rise or fall in abundance of each one tells you whether disrupting that particular gene helped, hurt, or did nothing under that condition. I would close by naming the honest limits: off-target cleavage at unintended sites is still a real concern in therapeutic use, and gene drives — the population-scale application built on the same tool — are essentially irreversible once released, which is why they remain laboratory-only for now.",
      model_cn: "这个说法本身就搞反了：CRISPR/Cas9 不是被「发明」出来的，而是被发现、然后被改用的。它是一套细菌免疫系统，进化出来是为了让细菌能扛过噬菌体感染。细菌把曾经感染过它、但没能杀死它的噬菌体的片段归档起来，存放在基因组里一串短回文重复序列之间——整个这个阵列就是 CRISPR 位点。当同一种噬菌体再次来犯时，这个阵列被转录、加工成 guide RNA，与一个或多个 Cas 核酸酶蛋白配对，有时还搭配一条叫 tracrRNA 的第二条 RNA，随后这个复合物找到并摧毁匹配的病毒 DNA。实验室做的工作——主要是 Jennifer Doudna 和 Emmanuelle Charpentier——是在酿脓链球菌里找到了这套天然系统的一个简化版本，它只用一个 Cas 蛋白（Cas9），然后把它原本的两条 RNA 组分——guide RNA 和 tracrRNA——融合成一条 single guide RNA，也就是 sgRNA。这次融合就是全部的诀窍所在：sgRNA 带着一段 20 个核苷酸的靶向序列，靠普通的碱基配对与 DNA 靶点结合，所以只要改写这一小段，就能把同一个 Cas9 蛋白重新导向你选择的几乎任何序列。Cas9 本身有两个独立的核酸酶结构域，各负责一条 DNA 链，两个都有活性时造成的是双链断裂。在真核细胞中，这种断裂通常由非同源末端连接修复，而这个过程不精确——往往在连接处缺失或插入几个核苷酸——正是这种不精确造成了基因失活。所以一次简单的敲除就是：递送 Cas9 和一条针对目标基因的 sgRNA，让它切一刀，剩下的交给细胞自己那套粗糙的修复。如果想要的是精确编辑而不是敲除，就让两个核酸酶结构域中的一个失活，让 Cas9 只切一条链的缺口，同时提供一段携带你真正想要的序列的供体 DNA；这个缺口由同源重组、借助这段供体来修复，在造成特定改动（而非随机改动）上效率会更高一些。把这套逻辑放大到整个基因组，用的是同一套分子逻辑，只多加了一个巧思。构建一个几乎针对每个基因的 sgRNA 文库，因为每条 sgRNA 20 bp 的靶向序列都是基因特异的，它同时也能当作一个独一无二的条形码。这些序列连同 Cas9 或某个 Cas9 变体一起，被包装进改造过的慢病毒载体——来自 HIV、已去除其自身增殖所需基因——以足够低的感染复数递送，使大多数细胞只带上一个构建体。用哪种 Cas9 变体很重要：普通 Cas9 切一刀、把基因敲掉；核酸酶失活的 Cas9 只是停在靶点上、阻断转录；融合了阻遏或激活结构域的 Cas9 则能不切 DNA 就沉默或增强转录。随后让这个群体经受一次选择或压力，之后对条形码测序——每个条形码丰度的上升或下降，就告诉你在那个条件下，破坏那个特定基因是有利、有害，还是没有影响。最后我会补上诚实的局限：脱靶切割在治疗性应用中仍是真实的隐忧；而建立在同一工具之上、作用于种群规模的基因驱动，一旦释放就基本不可逆，这正是它目前仍仅限实验室的原因。",
      checklist: [
        "Corrected the framing: discovered and repurposed, not invented; named it as a bacterial antiviral immune system",
        "Explained the natural CRISPR array: spacer sequences from past phage infections, stored between repeats",
        "Named the engineering step: Doudna and Charpentier fusing gRNA and tracrRNA into one sgRNA",
        "Said clearly why that fusion matters: the 20 bp targeting sequence can be rewritten to redirect the same Cas9 protein",
        "Described Cas9's two nuclease domains and connected both-active to a double-strand break, one-active to a nick",
        "Explained that NHEJ repair, not Cas9 itself, is what inactivates the gene in a knockout, and that it is imprecise",
        "Contrasted the knockout route (double-strand break + NHEJ) with the precise-edit route (nick + donor DNA + homologous recombination)",
        "Explained the screening scale-up: sgRNA doubles as a bar code, lentiviral delivery, low multiplicity of infection so one cassette per cell",
        "Named at least two Cas9 variants used in screening and what each does (cut / bind-only / repressor-fused / activator-fused)",
        "Explained how the screen readout works: bar code abundance rises or falls after selection",
        "Named at least one real limitation: off-target cleavage, or the irreversibility of a released gene drive"
      ]
    }
  }

);
