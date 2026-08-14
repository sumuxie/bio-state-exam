/* ============================================================
   Lehninger 8 — Chapter 9, section 9.3. Third node from chapter 9,
   after L-9-1-1 (leh_ch9.js) and L-9-2-1 (leh_ch9b.js).

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」,
   and she said of this section specifically 「基因组学可以简单讲」.
   Only `summary` + `mustKnow`. Written to the pattern of `leh_ch12b.js`.

   ⚠️ PAGE RANGE MEASURED IN A, AND THE MAPPING IS WRONG AT THE END BY
   TWO PAGES. `lehninger_only_scope.tsv` says A 326-334. Measured:
   the heading and "Since the report of the first complete human
   genomes" are on printed p.326 (start correct), but SUMMARY 9.3 --
   "Nearly half of the DNA is derived from parasitic transposons",
   "Simple-sequence repeats make up the centromere and telomeres" --
   is on printed p.336, not 334. So the section runs 326-336, eleven
   pages rather than nine. This is the fourth range in this batch of
   eleven that the mapping got wrong; the rule holds.

   CZECH COVERAGE, word-boundary matched before writing:
     sekvenov 0, SNP 0, proteom 0, bioinformati 0, haplotyp 0.
     `genom` scores 5 and they are NOT genomics: 4 hits in 6-2-3
     (starch/sucrose biosynthesis) and 1 in 9-27, using the word in
     passing. The Lehninger layer was checked too, since L-9-1-1 and
     L-9-2-1 are next door: `genomics` scores 1 in L-9-2-1 and 2 in
     L-26-2-1, in both cases naming the field rather than covering it.

   topicKey starts a NEW single-book key, `genomics`. It is deliberately
   NOT merged into L-9-1-1's `recombinant-dna-technology` or L-9-2-1's
   `exploring-protein-function`: 9.1 is how you get a gene, 9.2 is how
   you find out what its protein does, and 9.3 is what you learn from
   reading whole genomes and comparing them — three different questions,
   which is the same reasoning that kept 9.1 and 9.2 apart.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };
window.BIOCHEM.topics = (window.BIOCHEM.topics || []).concat([
  {
    id: "L-9-3-1",
    book: "lehninger",
    topicKey: "genomics",
    chapter: 9,
    section: "9.3",
    czTitle: "Žádná — genomika a příběh člověka (9.3): co se dozvíme, když přečteme celý genom",
    enTitle: "Genomics and the human story — a brief orientation: what a whole genome says that a single gene cannot, and how little of ours is actually genes",
    cnTitle: "基因组学与人类的故事——只作科普性了解：读完整个基因组能说出什么单个基因说不出的事，以及我们的基因组里真正是「基因」的部分有多少",
    pages: [326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336],
    coverage: "partial",
    coverageNote: "Brief node by instruction -- Ruojin 2026-08-10 (这些都是浅浅带过, 科普性质, mustKnow 有就行), and for this section specifically 「基因组学可以简单讲」. Section 9.3 read end to end, A printed pp.326-336. ⚠️ `lehninger_only_scope.tsv` marks 9.3 `brief` AND ITS RANGE IS WRONG AT THE END BY TWO PAGES: it says 326-334, but the heading is measurably on printed p.326 and SUMMARY 9.3 on printed p.336, so the section is eleven pages, not nine. Czech coverage measured with word-boundary matching before writing: sekvenov 0, SNP 0, proteom 0, bioinformati 0, haplotyp 0. `genom` scores 5 and none of them is genomics -- 4 are in 6-2-3 on starch and sucrose biosynthesis and 1 in 9-27, all using the word in passing. The Lehninger layer was checked too because L-9-1-1 and L-9-2-1 sit next door: `genomics` scores 1 in L-9-2-1 and 2 in L-26-2-1, naming the field rather than covering it. topicKey is a NEW single-book key, `genomics`, deliberately not merged into L-9-1-1's `recombinant-dna-technology` or L-9-2-1's `exploring-protein-function` -- 9.1 is how you obtain a gene, 9.2 is how you find out what its protein does, 9.3 is what whole-genome comparison tells you; the same reasoning that kept 9.1 and 9.2 apart. NOT COVERED: the annotation pipelines, the statistics of GWAS, and the detail of the sequencing chemistries (the methods themselves are in L-9-1-1).",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；基因组学、SNP 与人类演化是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "The headline number is the one that overturns the intuition: only about 30% of human DNA lies in the exons AND introns of protein-coding genes, and “Nearly half of the DNA is derived from parasitic transposons” (A p.336). We are, by mass, more mobile-element wreckage than gene. Second thing to hold: any two people differ by roughly 1 base in every 1,000, and those single-base differences (SNPs) travelling together on a chromosome as a haplotype are the unit that both disease-gene hunting and human-migration history are actually built on.",
      cn: "最该记住的是那个**推翻直觉的数字**：人类 DNA 中**只有约 30%** 落在编码蛋白基因的**外显子加内含子**里，而「**将近一半的 DNA 来自寄生性的转座子**」（A p.336）。⚠️ **按质量算，我们身上「可移动元件的残骸」比「基因」还多。** 第二件要记的：**任何两个人之间大约每 1,000 个碱基差 1 个**，而这些**单碱基差异（SNP）**在染色体上**成串一起遗传**时构成的**单倍型 (haplotype)**，**正是「找致病基因」和「重建人类迁徙史」两件事共同依赖的那个单位。**"
    },
    summary: {
      en: "A short orientation to what changed once sequencing became routine. Since the first complete human genomes in 2001, genomes from every known bacterial family have been sequenced, completed eukaryotic genomes number in the tens of thousands, and the list now includes extinct species such as Homo neanderthalensis and humans who died in past millennia. The picture of our own genome is the part worth carrying, because it is not what most people expect: about 30% of human DNA is in the exons and introns of protein-coding genes, “Nearly half of the DNA is derived from parasitic transposons” (A p.336) — LTR retrotransposons, LINEs and SINEs — much of the remainder encodes RNAs of many types, and “Simple-sequence repeats make up the centromere and telomeres”. Short tandem repeats (STRs) among those simple sequences are what forensic DNA analysis actually measures. Between individuals, the variation is small and structured: millions of single-base differences called single nucleotide polymorphisms (SNPs), with each person differing from the next by on average 1 bp in every 1,000, plus larger deletions, insertions and rearrangements. SNPs sitting close together on a chromosome are rarely separated by recombination and so are inherited as a block — a haplotype — which makes them convenient markers for populations and for individuals within them. From there the section opens onto two uses: comparative genomics against other primates, to find both the alterations that define humanity and the ones that cause inherited disease; and the reconstruction of the evolution and migration of human ancestors over many millennia.",
      cn: "一节简短的定位性内容，讲的是**测序变成常规操作之后，什么改变了**。自 **2001 年**第一批完整人类基因组发表以来，**每一个已知细菌科**的基因组都被测过，**完成的真核基因组数以万计**，名单上如今还包括**已灭绝的物种**，例如**尼安德特人 (Homo neanderthalensis)**，以及**几千年前死去的人类个体**。关于我们自己基因组的那幅图景最值得带走，因为**它和多数人预期的不一样**：**约 30%** 的人类 DNA 位于**编码蛋白基因的外显子和内含子**中，「**将近一半的 DNA 来自寄生性的转座子**」（A p.336）——**LTR 逆转座子、LINE 和 SINE**——**其余大部分编码各种各样的 RNA**，而「**简单序列重复构成着丝粒和端粒**」。这些简单序列中的**短串联重复 (STR)**，正是**法医 DNA 分析**实际测量的东西。个体之间的差异**很小、而且是有结构的**：数以百万计的**单碱基差异**，称为**单核苷酸多态性 (SNP)**，**平均每 1,000 bp 有 1 个差异**，此外还有更大的缺失、插入和重排。在染色体上**彼此靠得很近的 SNP 很少被重组拆开**，因此**成块遗传**——这就是**单倍型 (haplotype)**——从而成为**标记人群和人群中个体的便利工具**。由此本节通向两种用途：**与其他灵长类做比较基因组学**，既用来找出**定义「人之为人」的那些改变**，也用来**定位遗传病的致病基因**；以及**重建人类祖先数千年间的演化与迁徙**。"
    }
  }
]);
