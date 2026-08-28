/* Questions for chapter 6, written alongside its spines.

   Covers M-6-2 (基因敲除技术, spine_ch6.js, printed 211–218) and M-6-3
   (蛋白质及 RNA 相互作用技术, spine_ch6_interactions.js, printed 219–228).
   data/questions.js is a separate file with a separate owner and is not touched here.

   A MEASURED DEFECT IN THE PARENT CORPUS, DELIBERATELY NOT REPRODUCED. 89% of the
   questions in the corpus these were written against could be answered by picking
   the longest option: the author had put the reasoning into the right answer and
   left the distractors as bare stubs. Every item below is built the other way — the
   correct option is cut to its bare claim, the reasoning lives in why_en / why_cn,
   and in EVERY item the longest of the four options is a distractor. Answer
   positions are spread over indices 1, 2 and 3, four items each per node.

   The productive shape here is a question that gives a RESULT and asks what may be
   concluded from it, or that asks what a method CANNOT show — an empty c lane under
   ACO1, an absent 535 nm emission, a yeast two-hybrid hit. Those are the questions
   whose answers are worth holding. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-6-2 */
window.BIOLITE_Q["M-6-2"] = [
  {
    "type": "mcq",
    "q_en": "A targeting vector carries neo inside the target's critical exon and HSV-tk outside the two homology arms. Why outside?",
    "q_cn": "打靶载体把 neo 放在靶基因最关键的外显子内部，把 HSV-tk 放在两条同源臂的外侧。为什么放在外侧？",
    "options": [
      "So that G418 and ganciclovir can be added to the dish at two different times",
      "So that HSV-tk is transcribed only after the neo cassette has disrupted the exon",
      "Homologous recombination copies in only what lies between the arms",
      "So that HSV-tk recombines with the chromosome at a second, unrelated locus and marks it"
    ],
    "answer": 2,
    "why_en": "Recombination through the two arms brings in the sequence between them and leaves the flanking HSV-tk behind, so a correctly targeted cell has no thymidine kinase and ganciclovir does not touch it. A random insertion swallows the whole linear construct, HSV-tk included, and ganciclovir kills it.",
    "why_cn": "经由两条同源臂发生的重组，只把夹在中间的序列拷进去，把外侧的 HSV-tk 丢在外面；所以正确打靶的细胞没有胸腺嘧啶激酶，丙氧鸟苷对它无效。随机插入则是整条线性载体一起进去，HSV-tk 也跟着进去，于是被丙氧鸟苷杀死。"
  },
  {
    "type": "mcq",
    "q_en": "An ES-cell line grows in G418 and ganciclovir together. What follows?",
    "q_cn": "一个 ES 细胞系在 G418 和丙氧鸟苷同时存在下长了出来。由此可以得到什么？",
    "options": [
      "The targeted allele is homozygous and the cells can be injected without further checks",
      "The line is enriched for correct targeting and still needs PCR and Southern blot",
      "Both chromosomal copies of the target have been replaced by the neo cassette",
      "The construct integrated at random and lost HSV-tk during the integration event"
    ],
    "answer": 1,
    "why_en": "Selection enriches and never proves: a cell can survive both drugs for reasons nobody designed, so every surviving line is checked by PCR and Southern blot. Recombination also altered only one of the two chromosomes, so nothing here is homozygous yet.",
    "why_cn": "筛选只做富集，从不做证明：细胞能在两种药里活下来，可能出于你没设想的原因，所以每一个活下来的细胞系都要用 PCR 和 Southern 杂交验过。而且重组只改了两条染色体中的一条，此时还谈不上纯合。"
  },
  {
    "type": "mcq",
    "q_en": "What decides which stretch of a target gene Cre deletes?",
    "q_cn": "是什么决定了 Cre 会删掉靶基因的哪一段？",
    "options": [
      "The orientation of the Cre gene relative to the promoter driving it",
      "The length of the 34 bp LoxP site, which Cre measures before it cuts",
      "Which tissue-specific promoter was chosen to express Cre in the mouse",
      "Where the two LoxP sites were placed in the targeting vector"
    ],
    "answer": 3,
    "why_en": "Cre joins two LoxP sites pointing the same way and deletes everything between them, so the placement of the sites decides what disappears. The promoter driving Cre decides when and in which tissue the deletion happens, which is a different question.",
    "why_cn": "Cre 把两个方向相同的 LoxP 接到一起，并删掉夹在它们中间的一切，所以「删掉什么」由两个 LoxP 放在哪里决定。驱动 Cre 的启动子决定的是「什么时候、在哪个组织里删」，那是另一个问题。"
  },
  {
    "type": "mcq",
    "q_en": "Deleting a physiologically important gene in every cell from the first division usually kills the embryo. Which design was built for that?",
    "q_cn": "一个担着重要生理功能的基因，若从第一次分裂起就在每个细胞里删掉，通常导致胚胎死亡。哪一种设计正是为此而生的？",
    "options": [
      "Gene trapping with a promoterless GUS reporter inserted at random",
      "A binary vector carrying the gene of interest between a left and a right border",
      "Conditional knockout, with Cre under a controlled promoter",
      "Positive-negative selection with G418 and ganciclovir given together"
    ],
    "answer": 2,
    "why_en": "A conditional knockout puts the removal under a promoter that is tissue-specific or drug-inducible, so the animal develops normally and loses the gene afterwards in one tissue. A complete knockout that kills the embryo tells you almost nothing about the gene's job in an adult organ.",
    "why_cn": "条件型基因敲除把「删」这个动作交给一个组织特异性的或可药物诱导的启动子，于是动物先正常发育，之后才在某一个组织里丢掉这个基因。一个致死的完全敲除，几乎说不出这个基因在成年器官里做什么。"
  },
  {
    "type": "mcq",
    "q_en": "Why does a gene-trap construct carry a reporter with no promoter of its own?",
    "q_cn": "基因捕获载体上的报告基因，为什么自己不带启动子？",
    "options": [
      "Because a promoter would drive the construct to integrate at a preferred chromosomal site",
      "Because it can then be expressed only where it has interrupted an active gene",
      "Because the reporter must be transcribed from the U6 promoter supplied by the vector",
      "Because a promoterless construct integrates by homologous recombination rather than at random"
    ],
    "answer": 1,
    "why_en": "Landing in a random spot the promoterless reporter stays silent; landing inside a gene the cell is already transcribing, it is carried along and makes a fusion protein. So the insertion reports itself, and sequencing the DNA flanking the marker names the gene that was hit.",
    "why_cn": "落在随机的地方，这个不带启动子的报告基因就是哑的；落进一个细胞本来就在转录的基因里，它被那个基因的转录带着一起表达，产生融合蛋白。于是插入事件自己报告自己，再测标记两侧的序列，就知道被打中的是哪个基因。"
  },
  {
    "type": "mcq",
    "q_en": "T-DNA has no preferred integration site in the plant genome. How is that turned into a method?",
    "q_cn": "T-DNA 在植物基因组里没有专一的整合位点。这一点是怎么被变成一种方法的？",
    "options": [
      "The Vir proteins are engineered to recognise a chosen 20 bp target sequence",
      "Acetosyringone is applied to the root so that integration is directed to expressed genes",
      "The Ti plasmid is cut with a restriction enzyme that leaves a single integration site",
      "Enough independent insertion lines are made that every gene is hit in one of them"
    ],
    "answer": 3,
    "why_en": "A large enough collection of independent insertion lines becomes a knockout library that is searched rather than built to order. Arabidopsis suits it: little redundant sequence and densely packed genes, so nearly every insertion destroys some gene's function.",
    "why_cn": "独立插入的株系足够多，就成了一个可以检索、而不必逐个定做的敲除突变体文库。拟南芥特别合适：冗余序列少、基因密度高，几乎每一个插入都会毁掉某个基因的功能。"
  },
  {
    "type": "mcq",
    "q_en": "What distinguishes a binary vector system from a co-integrate system?",
    "q_cn": "双元载体系统与共整合载体系统的区别在哪里？",
    "options": [
      "The gene of interest is moved onto the Ti plasmid by homologous recombination in Agrobacterium",
      "The helper plasmid keeps its T-DNA region and loses its Vir functions entirely",
      "The two plasmids never recombine and each replicates independently",
      "The shuttle plasmid supplies the auxin and cytokinin genes that form the crown gall"
    ],
    "answer": 2,
    "why_en": "In a binary system the helper Ti plasmid keeps Vir and has lost its T-DNA entirely, while a separate shuttle plasmid carries the gene between a left and a right border that Vir recognises and cuts. Recombination inside Agrobacterium is the co-integrate route.",
    "why_cn": "双元系统里，辅助 Ti 质粒只保留 Vir 功能、T-DNA 区已整个删掉，而另一个穿梭质粒把目的基因夹在 Vir 能识别并切割的左臂与右臂之间。在农杆菌体内靠同源重组挪过去，那是共整合系统的做法。"
  },
  {
    "type": "mcq",
    "q_en": "To aim Cas9 at a new site in a genome, what has to change?",
    "q_cn": "要把 Cas9 瞄向基因组上一个新的位点，需要改的是什么？",
    "options": [
      "The RuvC-like and HNH nuclease domains of the Cas9 protein",
      "The 20 nt guide sequence at the 5' end of the sgRNA",
      "The zinc-finger units that give the nuclease its sequence recognition",
      "The PAM, which is redesigned from 5'-NGG-3' to match the new target"
    ],
    "answer": 1,
    "why_en": "Changing those 20 nt is the entire act of retargeting, and the Cas9 protein is never redesigned. That is the difference from a zinc-finger nuclease or a TALEN, where hitting a new site means engineering a new protein; and the PAM is read off the genome, not designed.",
    "why_cn": "改这 20 nt 就是重新瞄准的全部动作，Cas9 蛋白本身一次都不用重新设计。这正是它与锌指核酸酶、TALEN 的差别：后两者要打新位点就得重新改造蛋白。而 PAM 是从基因组上找出来的，不是设计出来的。"
  },
  {
    "type": "mcq",
    "q_en": "In a bacterium, what does Cas9's requirement for a PAM accomplish?",
    "q_cn": "在细菌体内，Cas9「必须有 PAM 才切」这个要求，起到的作用是什么？",
    "options": [
      "It raises the cutting rate at a protospacer to about 10 to the minus 2 per generation",
      "It places the cut exactly three bases downstream of the protospacer",
      "It confines cutting to type II CRISPR systems and excludes types I and III",
      "It keeps Cas9 off the spacers in the cell's own CRISPR array"
    ],
    "answer": 3,
    "why_en": "The PAM sits on the invader's DNA and not in the bacterium's own CRISPR array, so requiring it is what stops Cas9 cutting the very spacers that program it. The cut falls at the third base upstream of the PAM, not downstream.",
    "why_cn": "PAM 在入侵者的 DNA 上，而细菌自己的 CRISPR 序列里没有；所以「必须有 PAM」正是 Cas9 不会去切那些给它编程的间隔序列的原因。切点落在 PAM 上游第三个碱基处，不是下游。"
  },
  {
    "type": "mcq",
    "q_en": "A CRISPR edit in a plant leaves a few inserted or deleted bases and no selectable marker. When is T7 endonuclease I used to find it?",
    "q_cn": "植物里的 CRISPR 编辑只留下几个碱基的插入或缺失，也不留下任何筛选标记。什么情况下要用 T7 核酸内切酶 I 来找它？",
    "options": [
      "When the cut destroyed a restriction site, so the wild-type product no longer digests",
      "When the edit is homozygous in the T0 generation and no PCR product can be amplified",
      "When no suitable restriction site is available at the target",
      "When Southern blot shows the neo cassette has integrated at more than one locus"
    ],
    "answer": 2,
    "why_en": "If the cut destroys a restriction site, the wild-type PCR product still digests into two fragments while the mutant's stays one band, and that is enough. Where no suitable site exists, the product is melted and re-annealed so mutant and wild-type strands mispair, and T7 endonuclease I cuts only mismatched duplexes. Sequencing confirms either way.",
    "why_cn": "如果这一刀恰好破坏了一个酶切位点，野生型 PCR 产物仍能被切成两条片段、突变体的还是一条带，这就够用了。找不到合适位点时，就把产物变性再复性，让突变型与野生型的链错配，再用只切错配双链的 T7 核酸内切酶 I 显示出来。两条路最后都要测序确认。"
  }
];
