/* Spine for chapter 8 §8.2 — 真核基因表达的转录水平调控.

   Transcribed from the scan of《现代分子生物学》第五版, printed pages 298–310.
   Handwritten marginalia on the scan are marked 手写批注 in the src field of the step
   that uses them; where the handwriting adds something the printed text does not say,
   the step is flagged beyond: true.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No inversion.
   2. NO UNBOUND definite reference.
   3. NAME THE ACTUAL OBJECTS. A TATA box 25–30 bp upstream; two 72 bp repeats of
      SV40; AATAAA turned into AAGAAA; six GC boxes between −70 and −110; 300 000
      molecules of CTF per cell; a leucine every six residues.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (recall_en / recall_cn).
   And every structural claim carries its consequence.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   WHERE THIS PICKS UP. M-8-1 ends by laying out the levels at which a eukaryotic
   gene can be controlled, and names transcription as the first and largest of them.
   This node walks into it and stops at the end of §8.2's account of trans-acting
   factors; it does not repeat the interrupted gene, the gene family or the
   time-and-space specificity that M-8-1 established.

   THE ARC, in three movements.
   (i) THE MACHINE AT THE START SITE. A promoter has two halves that answer two
   different questions — the core promoter and its TATA box fix WHERE transcription
   begins, the upstream elements fix HOW OFTEN. Polymerase Ⅱ is brought there by the
   TFⅡ factors in a fixed order, and its own tail, the CTD, then carries a different
   phosphate mark at initiation, at elongation and after termination. That tail is the
   best single item in the section: one molecule reporting which stage it is in.
   The movement closes at the other end of the gene, at the poly(A) site and AATAAA.
   (ii) CONTROL FROM A DISTANCE. Enhancers work at any distance and in either
   orientation, which strips position of any explanatory power and pushes the whole
   question onto the proteins; silencers and insulators are the same idea with the
   sign and the scope changed.
   (iii) THE PROTEINS THEMSELVES. A trans-acting factor keeps recognition and
   activation in two separable domains — the fact the yeast two-hybrid method rests
   on. Four kinds of DNA-binding domain say how one protein finds one stretch of DNA
   in a genome; three kinds of activation domain say what it does once it is there. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-8-2 */
window.BIOLITE_SPINE["M-8-2"] = {
  /* Declared rather than left implicit, as SPINE_SPEC asks. The first group is the
     ordinary vocabulary of a molecular biology course, most of it established in
     M-8-1; the second is background chemistry, structural vocabulary and the proper
     names used only as examples. Nothing load-bearing is parked here: promoter, core
     promoter, TATA box, upstream promoter element, CTD, TBP, TAF, poly(A) site,
     enhancer, silencer, insulator, cis-acting element, trans-acting factor,
     transcription factor, co-regulator, DNA-binding domain, activation domain,
     H–T–H, homeodomain, zinc finger, bZIP and bHLH are all introduced in the prose
     at first use. */
  assumed: ["DNA", "RNA", "mRNA", "rRNA", "tRNA", "gene", "genome", "chromosome",
            "chromatin", "cell", "nucleus", "cytoplasm", "protein", "polypeptide",
            "peptide", "amino acid", "residue", "enzyme", "nuclease", "transcription",
            "translation", "transcript", "primary transcript", "base pair",
            "polymerase", "RNA polymerase", "prokaryote", "eukaryote", "bacterium",
            "virus", "yeast", "exon", "intron", "splicing", "operon", "expression",
            "mutation", "point mutation", "deletion", "evolution", "development",
            "differentiation", "embryo", "tissue", "recombinant", "recombination",
            "hormone", "receptor", "ligand", "kinase", "phosphorylation", "phosphate",
            "dimer", "monomer", "conformation", "domain", "motif", "helix",
            "alpha helix", "double helix", "major groove", "minor groove",
            "secondary structure", "hydrophobic", "electron microscope",
            "topoisomerase", "nuclear matrix", "serine", "proline", "tyrosine",
            "threonine", "glutamine", "leucine", "cysteine", "histidine", "lysine",
            "arginine", "asparagine", "aspartate", "glutamate", "glycine", "alanine",
            "zinc", "cadmium", "steroid", "glucocorticoid", "estrogen", "globin",
            "haemoglobin", "histone", "interferon", "immunoglobulin", "Drosophila",
            "SV40", "adenovirus", "cytomegalovirus", "metallothionein", "target",
            "selection", "insertion", "template"],
  nodeTitle_en: "Regulation at the level of transcription",
  nodeTitle_cn: "真核基因表达的转录水平调控",
  title_en: "Transcription is set by DNA that encodes nothing and by the proteins that read it, and **where a gene starts, how often it starts and in which cell it starts are fixed by three different pieces of that DNA and by which proteins the cell has to read them**",
  title_cn: "转录水平的调控落在两类东西上：不编码任何产物的 DNA 序列，以及读这些序列的蛋白质——而**「从哪里起始」「起始得多频繁」「在哪种细胞里起始」，分别由这段 DNA 的三个不同部分、以及这个细胞手里有哪些蛋白来读它们所决定**",
  steps: [
    {
      en: "What decides how often a eukaryotic gene is transcribed comes in two kinds, and each kind is named for the way it acts. Cis-acting elements are DNA sequences carried by the gene itself — the promoter, the enhancer and the silencer — and they encode no product at all. Trans-acting factors are the proteins, and some RNAs, that bind those elements and regulate expression from them. The third participant is RNA polymerase, and a eukaryote has three of them, each transcribing a different kind of RNA product. **Only RNA polymerase Ⅱ transcribes the precursor of messenger RNA, so regulating a protein-coding gene comes down to whatever steers polymerase Ⅱ onto that gene's promoter.**",
      cn: "决定一个真核基因转录多频繁的东西分成两类，命名的依据是它们各自怎么起作用。顺式作用元件（cis-acting elements）是基因自身携带的 DNA 序列——启动子（promoter）、增强子（enhancer）、沉默子（silencer）——它们本身不编码任何产物。反式作用因子（trans-acting factors）则是结合到这些元件上、并由此调控基因表达的蛋白质，以及一部分 RNA。第三个参与者是 RNA 聚合酶：真核生物有 3 种，分别催化转录不同的 RNA 产物。**只有 RNA 聚合酶Ⅱ能转录信使 RNA 前体，所以调控一个蛋白质编码基因，归根到底就是「什么东西把聚合酶Ⅱ引到这个基因的启动子上」。**",
      src: "现分 p.298（图 8-10、图 8-11）"
    },
    {
      link_en: "so start at the sequence that puts polymerase Ⅱ in place",
      link_cn: "那就从「把聚合酶Ⅱ安放到位」的那段序列开始",
      en: "A eukaryotic promoter is a group of independently functioning DNA sequences lying between the transcription start site, numbered +1, and 100–200 bp upstream of it, each element 7 to 20 bp long, and together they decide the start point and the transcription frequency of RNA polymerase Ⅱ. A promoter has two halves. The core promoter is the minimum DNA sequence needed for polymerase Ⅱ to begin transcription properly: the start site itself, plus the TATA box, an element sitting 25–30 bp upstream of the start site. **A core promoter working on its own can fix the transcription start site and produce a basal level of transcription, so where a gene starts and how often it starts are settled by two different pieces of DNA.**",
      cn: "真核基因的启动子，是位于转录起始位点（+1）及其 5′ 上游 100～200 bp 以内的一组具有独立功能的 DNA 序列，每个元件长 7～20 bp，它们共同决定 RNA 聚合酶Ⅱ的转录起始点和转录频率。启动子分成两半。核心启动子（core promoter）是保证 RNA 聚合酶Ⅱ正常起始转录所必需的最少 DNA 序列，包括转录起始位点本身，以及位于起始位点上游 –25～–30 bp 处的 TATA 盒。**核心启动子单独起作用时，只能确定转录起始位点并产生基础水平的转录——「从哪里起始」和「起始得多频繁」，是由两段不同的 DNA 分别决定的。**",
      src: "现分 p.299（图 8-10）"
    },
    {
      link_en: "which leaves the frequency to the other half",
      link_cn: "于是「多频繁」这件事，就落在另一半上",
      en: "The upstream promoter elements (UPE) are the other half of a promoter, and two of them are named: the CAAT box, whose sequence is CCAAT and which usually lies near −70 bp, and the GC box, whose sequence is GGGCGG. **Both work through TFⅡD — a protein complex that assembles on the core promoter — to regulate how often transcription is initiated and so raise transcription efficiency, while leaving the start point where the core promoter put it.**",
      cn: "上游启动子元件（upstream promoter element，UPE）是启动子的另一半，其中两个是：CAAT 盒，序列为 CCAAT，通常位于 –70 bp 附近；以及 GC 盒，序列为 GGGCGG。**两者都通过 TFⅡD——一个装配在核心启动子上的蛋白质复合物——来调节转录起始的频率、提高转录效率，而起始点仍然由核心启动子说了算。**",
      src: "现分 p.300"
    },
    {
      link_en: "and the enzyme those elements are steering carries a tail that turns out to matter more than any of them",
      link_cn: "而这些元件所引导的那个酶，身上带着一条尾巴，它比上面任何一个元件都更要紧",
      en: "RNA polymerase Ⅱ is a regulatory protein that binds the core promoter sequence TATA box, directly or indirectly, and starts transcription, and it forms a transcription initiation complex with the help of transcription factors. It is built from at least 10 to 12 subunits of relative molecular mass between 1×10⁴ and 2.4×10⁵, some of them shared with polymerases Ⅰ and Ⅲ. The carboxyl end of its largest subunit, the one of 2.4×10⁵, carries a repeated seven-residue sequence Tyr₁–Ser₂–Pro₃–Thr₄–Ser₅–Pro₆–Ser₇, and that repeat region is called the carboxy-terminal domain (CTD). **Serine 2 and serine 5 of the heptad are the main phosphorylation sites, and phosphorylating them changes the conformation of some of the prolines, which lets the CTD bind other transcription-related factors more readily.**",
      cn: "RNA 聚合酶Ⅱ是一类能够直接或间接与启动子核心序列 TATA 盒特异结合、并启动转录的调节蛋白，它在转录因子的帮助下形成转录起始复合物。它由至少 10～12 个亚基组成，各亚基相对分子质量在 1×10⁴～2.4×10⁵ 之间，其中有些亚基也在聚合酶Ⅰ、Ⅲ中共用。2.4×10⁵ 的最大亚基，其羧基端带有一段由 7 个氨基酸残基组成的重复序列 Tyr₁–Ser₂–Pro₃–Thr₄–Ser₅–Pro₆–Ser₇，这段重复区就叫羧基端结构域（CTD）。**7 元重复序列上第 2 位和第 5 位的丝氨酸是主要的磷酸化位点；磷酸化会使其中部分脯氨酸的构象发生变化，让 CTD 更容易与其他转录相关因子结合。**",
      src: "现分 p.300"
    },
    {
      link_en: "but polymerase Ⅱ does not reach a promoter by itself",
      link_cn: "但聚合酶Ⅱ并非自己走到启动子上的",
      en: "Under physiological conditions RNA polymerase Ⅱ transcribing a gene binds more than twenty protein factors to form a transcription initiation complex, and the general ones are written TFⅡ. TFⅡD, TFⅡB and TFⅡF together with polymerase Ⅱ form the most primitive complex on the promoter and begin transcribing mRNA; adding TFⅡE and TFⅡH gives the complete transcription complex, which transcribes long RNA chains; adding TFⅡA raises the transcription efficiency further. TFⅡD is built around TBP, the TATA-box binding protein, together with the TAFs, which are the TBP-associated factors. **As polymerase Ⅱ slides along the template, TFⅡD and TFⅡA stay behind on the transcription start site while every other factor travels with the polymerase toward the 3′ end, so the start site is left marked by the two factors that recognised it.**",
      cn: "生理条件下，RNA 聚合酶Ⅱ转录某个基因时，通常需要与 20 种以上的蛋白质因子结合，形成转录起始复合物；其中这些通用因子写作 TFⅡ。TFⅡD、TFⅡB 和 TFⅡF 与 RNA 聚合酶Ⅱ在启动子上形成最初级的复合物，开始转录 mRNA；加入 TFⅡE 和 TFⅡH 后形成完整的转录复合物，转录出长链 RNA；再加入 TFⅡA，可进一步提高转录效率。TFⅡD 以 TBP（TATA 区结合蛋白）为核心，加上一批 TAF，即 TBP 相关因子。**聚合酶Ⅱ沿模板滑动时，TFⅡD 和 TFⅡA 滞留在转录起始位点上，其余因子都随聚合酶向模板 3′ 端移动——起始位点因此始终由识别它的那两个因子占着。**",
      openQuestion_en: "Whether polymerase Ⅱ arrives already assembled with its factors and is then placed on the DNA by TBP (one-step binding), or TBP and eleven TBP-associated factors load onto the TATA box one after another (stepwise binding), is argued both ways, and these pages carry the two hypotheses without deciding between them.",
      openQuestion_cn: "聚合酶Ⅱ究竟是先与大量转录因子结合成复合体、再由 TBP 帮着结合到 DNA 上（一步结合），还是 TBP 与 11 个 TBP 相关因子先后结合到 TATA 盒上（分步结合），目前是两种并存的假说，这几页并没有在两者之间下结论。",
      src: "现分 p.300（图 8-12）"
    },
    {
      link_en: "and once the complex is built, the CTD begins to keep time",
      link_cn: "复合物一旦搭好，CTD 就开始报时",
      recall_en: "the heptad Y₁S₂P₃T₄S₅P₆S₇ from two steps up",
      recall_cn: "上面两步那条 7 元重复序列 Y₁S₂P₃T₄S₅P₆S₇",
      en: "Phosphorylation of serine 2 and serine 5 runs as a cycle through one round of transcription. At initiation, serine 5 must be phosphorylated before a transcription initiation complex can form, and that same phosphate recruits the capping enzyme — the enzyme that puts the cap on the 5′ end of the mRNA. During elongation, phosphorylated serine 5 is progressively dephosphorylated while serine 2 is progressively converted to its phosphorylated form, and phosphorylated serine 2 is what makes 3′ RNA processing run properly during termination. After transcription finishes, both serines of the heptad are held dephosphorylated, which helps the transcription complex come apart so that polymerase Ⅱ can bind a new promoter and start a fresh round. **One and the same tail carries a different mark at each stage — serine 5 at initiation, serine 2 during elongation, neither of them afterwards — so a single polymerase molecule reports which stage of transcription it is in.**",
      cn: "第 2 位和第 5 位丝氨酸的磷酸化，在一轮转录中走的是一个循环。转录起始阶段，5 位丝氨酸的磷酸化是形成转录起始复合物的必要前提；同一个磷酸基还负责募集加帽酶——就是给 mRNA 5′ 端加帽的那个酶。转录延伸阶段，已磷酸化的 5 位丝氨酸逐步去磷酸化，2 位丝氨酸逐步转为磷酸化形式，而 2 位的磷酸化正是保证转录终止过程中 3′ RNA 加工顺利进行的东西。转录结束后，7 元重复序列上的两个丝氨酸都保持去磷酸化状态，有助于转录复合物解离，使聚合酶Ⅱ能与新的启动子结合、启动新一轮转录。**同一条尾巴在每个阶段带着不同的标记——起始时 Ser5、延伸时 Ser2、结束后两个都不带——所以单看一个聚合酶分子，就能知道它正处在转录的哪一个阶段。**",
      src: "现分 p.301（手写批注：起始／延伸／终止三段磷酸化循环图）"
    },
    {
      link_en: "the cycle ends at the far end of the gene, where a second short conserved sequence is waiting",
      link_cn: "这个循环结束在基因的另一端，那里等着另一段很短的保守序列",
      en: "Almost every eukaryotic gene carries a poly(A) site near its 3′ end, and 15–30 bp upstream of that site lies the conserved sequence AATAAA, which is required for the primary transcript to be cut accurately and given its poly(A) tail. **Changing AATAAA into AAGAAA by point mutation leaves the gene's transcriptional activity intact and blocks the processing of the mRNA, so the transcript is still made and no functional mRNA comes out of it.** RNA polymerase Ⅱ itself does not stop at the poly(A) site: most known primary transcripts run 0.5–2 kb past it, and no single site with a specific transcription-terminating property has been found so far. A terminator is the region at the end of a gene where transcription stops, and the mouse β-globin terminator will terminate an adenovirus gene while the terminator of Agrobacterium's nopaline synthase gene will terminate almost any foreign gene, which argues for a shared termination mechanism.",
      cn: "几乎所有真核基因的 3′ 端都存在一个多(A)位点，该位点上游 15～30 bp 处的保守序列 AATAAA，对于初级转录产物的准确切割及加多(A)尾是必需的。**点突变把 AATAAA 变成 AAGAAA，基因的转录活性照旧保持，mRNA 的剪接加工却被阻断——转录产物照样做出来，却产生不了有功能的 mRNA。**RNA 聚合酶Ⅱ本身并不在多(A)位点终止转录：大部分已知基因的初级转录产物还带着多(A)位点下游 0.5～2 kb 的序列，而且迄今没有发现哪个单一位点具有特异的转录终止性能。终止区（terminator）就是基因末端让转录停下来的那段区域；小鼠 β–珠蛋白基因的终止区能用来终止腺病毒基因的转录，农杆菌胭脂碱合成酶基因的终止区几乎能终止所有外源基因，这说明可能存在共同的转录终止机制。",
      src: "现分 p.301"
    },
    {
      link_en: "everything so far sits within 200 bp of the start; a second kind of element works from thousands of bases away",
      link_cn: "到此为止的一切都挤在起始点 200 bp 以内；另有一类元件，从几千个碱基以外起作用",
      en: "An enhancer is a DNA sequence that markedly raises the transcription frequency of a gene linked to it. Enhancers were first found upstream of the SV40 early genes, as two direct repeats of 72 bp each. Deleting both 72 bp repeats lowers expression a great deal, and putting one repeat back — at its original place, or anywhere else in the recombinant DNA — restores normal transcription of the gene. **Cloning the human β-globin gene onto DNA carrying a 72 bp repeat raises its expression in the body more than 200-fold, and it does so with the repeat 3 kb upstream of the transcription start site or 2.5 kb downstream of it.**",
      cn: "增强子（enhancer）是指能使与它连锁的基因转录频率明显增加的 DNA 序列。它最早发现于 SV40 早期基因的上游，是两个长 72 bp 的正向重复序列。把这两个 72 bp 重复序列同时删除，基因表达水平会降低很多；而只要把其中一个重复序列放回原处、或者放到重组 DNA 上的任何位置，转录就恢复正常。**把人 β–血红蛋白基因克隆到带有 72 bp 重复序列的 DNA 上，这个基因在体内的表达提高 200 倍以上；即使那段 72 bp 位于转录起始位点上游 3 kb 或下游 2.5 kb，仍然如此。**",
      src: "现分 p.301"
    },
    {
      link_en: "that one experiment is already four of the six properties enhancers turn out to have",
      link_cn: "这一个实验，其实已经把增强子六条特性里的四条摆出来了",
      en: "Six properties of enhancers are set out. ① The enhancing effect is large: usually 10–200-fold, sometimes over a thousandfold — a globin gene under the human cytomegalovirus enhancer is transcribed 600–1000 times as often as normal. ② The effect is independent of position and orientation, whether the enhancer reads 5′→3′ or 3′→5′, sits 3000 bp from the target gene, or lies downstream of it. ③ Most enhancers are repeated sequences about 50 bp long, suited to binding protein factors, and they usually hold a core sequence (G)TGGA/TA/TA/T(G) that the enhancing effect requires. ④ The effect is strictly tissue- and cell-specific, which shows that an enhancer functions only by interacting with particular proteins, the transcription factors. ⑤ There is no gene specificity: one enhancer shows its effect on different combinations of genes. ⑥ Many enhancers answer to signals from outside — the enhancer upstream of the metallothionein gene's promoter region responds to the concentration of zinc and cadmium around the cell. **An enhancer acts at any distance, in either orientation and on any gene, so what decides whether it fires in a given cell is which transcription factors that cell contains: the specificity is carried by the proteins.**",
      cn: "增强子有六条特性。① 增强效应十分明显：一般使转录频率增加 10～200 倍，有的可增加上千倍——经人巨大细胞病毒增强子增强后的珠蛋白基因，表达频率比正常转录高 600～1000 倍。② 增强效应与其位置和取向无关：无论增强子以 5′→3′ 还是 3′→5′ 排列，甚至与靶基因相距 3000 碱基对、或位于靶基因下游，都照样表现出增强效应。③ 大多为重复序列，一般长约 50 bp，适合与某些蛋白因子结合，其内部常含有一个核心序列 (G)TGGA/TA/TA/T(G)，这段核心是产生增强效应所必需的。④ 增强效应有严密的组织和细胞特异性，说明增强子只有与特定蛋白质（即转录因子）相互作用才能发挥功能。⑤ 没有基因专一性，可以在不同的基因组合上表现增强效应。⑥ 许多增强子还受外部信号的调控——金属硫蛋白基因启动区上游所带的增强子，就能对环境中的锌、镉浓度作出反应。**增强子在任何距离、任何取向、任何基因上都能起作用，所以决定它在某个细胞里发不发力的，是这个细胞里有哪些转录因子：特异性是由蛋白质携带的。**",
      src: "现分 p.301, p.302"
    },
    {
      link_en: "so how does a sequence 3 kb away reach the start site at all?",
      link_cn: "那么，一段在 3 kb 之外的序列，究竟怎么够得着起始位点？",
      en: "Enhancers often appear as loops under the electron microscope, and enhancing activity depends on whether the distance involved is an odd or an even multiple of half a turn of the DNA double helix, which is 5 bp. Three mechanisms are proposed: bending the double helix near the template, or, with trans-acting factors taking part, forming a protein-mediated loop that joins enhancer to promoter and activates transcription; fixing the template at a particular place in the nucleus such as on the nuclear matrix, where DNA topoisomerase can change the tension of the double helix and help polymerase Ⅱ bind and slide along it; and serving as the entry point through which trans-acting factors or polymerase Ⅱ get into chromatin. A vector carrying a reporter gene — lacZ — behind a basal promoter too weak to drive it on its own is integrated into a genome, and lacZ is expressed only where the insertion site happens to lie near an enhancer, which reads out when and where that enhancer acts. **Activity that follows an odd-or-even 5 bp periodicity means an enhancer has to come round onto the right face of the helix before it works, so distance matters to it as a geometry problem rather than as a length.**",
      cn: "增强子在电镜下常呈现环状结构，而它的活性与所涉距离是半周 DNA 双螺旋（5 bp）的奇数倍还是偶数倍有关。书中给出三种可能的作用机制：其一，影响模板附近的 DNA 双螺旋结构，使双螺旋弯折，或在反式作用因子参与下，以蛋白质之间的相互作用为媒介，在增强子与启动子之间形成「成环」连接，从而活化转录；其二，把模板固定在细胞核内特定位置，例如连接在核基质上，有利于 DNA 拓扑异构酶改变双螺旋的张力，促进聚合酶Ⅱ在 DNA 链上结合和滑动；其三，增强子区可以作为反式作用因子或聚合酶Ⅱ进入染色质结构的「入口」。还有一种现成的用法：把带有报告基因 lacZ 和一个本身不足以启动它的基本启动子的转化载体整合进基因组，只有当插入位点附近有增强子时 lacZ 才表达，由此就能读出那个增强子在什么时间、什么部位起作用。**增强子的活性按 5 bp 的奇偶倍数变化，说明它必须转到 DNA 螺旋正确的那一面上才起作用——距离对增强子而言是一个几何问题，而非一个长度问题。**",
      src: "现分 p.302"
    },
    {
      link_en: "two more elements are named beside the enhancer, one with the sign reversed and one that draws a boundary",
      link_cn: "在增强子旁边还并列着另外两个元件：一个把符号反过来，一个划出边界",
      beyond: true,
      beyondNote: "印刷正文只在 p.298 的顺式作用元件清单里点了 silencer 的名字。沉默子作为「负性调节元件」的定义，以及 insulator 这一整条，都写在 8.2.2 标题上方的红笔旁注里，正文没有。",
      en: "Two further cis-acting elements are named alongside the enhancer, and both act on the same transcription an enhancer raises. **A silencer is a negative regulatory element that lowers the transcription of a gene, and an insulator blocks activation or repression from passing along the chromosome, which confines a chromosome's activity to one domain.**",
      cn: "在增强子旁边，还并列着另外两个顺式作用元件，它们作用的对象与增强子所提高的是同一件事——转录。**沉默子（silencer）是负性调节元件，它降低与之连锁的基因的转录；绝缘子（insulator）则阻止激活或阻遏沿染色体传递，从而把染色体的活性限定在一个结构域之内。**",
      src: "现分 p.301（手写批注）"
    },
    {
      link_en: "an element with no product of its own can do nothing until a protein reads it, so the rest of the section is about those proteins",
      link_cn: "一个自己不编码产物的元件，在蛋白质来读它之前什么也做不了；所以这一段往后讲的全是这些蛋白质",
      en: "Trans-acting factors are the proteins that bind cis-acting elements, and by function they come in three classes: the basal transcription factors, which recognise promoter elements; the transcriptional regulators, which recognise enhancers or silencers; and the co-regulators, which take part in transcriptional control without any DNA–protein interaction of their own. The first two together are called transcription factors (TF), and they divide into transcriptional activators and transcriptional repressors, which bind the sequences upstream of the transcription start point or a distant enhancer element and so decide the time and the place at which different genes are expressed. **A co-regulator has no DNA-binding activity at all and works through protein–protein interaction that changes a transcription factor's conformation: a co-activator acts together with an activator, a co-repressor with a repressor.**",
      cn: "反式作用因子就是结合到顺式作用元件上的蛋白质，按功能分成三类：能识别启动子元件的基本转录因子；能识别增强子或沉默子的转录调节因子；以及不需要通过 DNA–蛋白质相互作用就参与转录调控的共调节因子（co-factor）。前两类合称转录因子（transcription factor，TF），又分为转录激活因子和转录阻遏因子——它们识别并结合转录起始点上游序列或远端增强子元件，从而决定不同基因在时间和空间上的特异性表达。**共调节因子本身没有任何 DNA 结合活性，靠蛋白质–蛋白质相互作用改变转录因子的分子构象来起效：与激活因子协同的那一类叫共激活因子，与阻遏因子协同的那一类叫共阻遏因子。**",
      src: "现分 p.302（图 8-13）"
    },
    {
      link_en: "and a factor that does bind DNA is built from two parts that can be told apart",
      link_cn: "而一个真的结合 DNA 的因子，是由两块可以彼此区分的部件搭起来的",
      en: "A directly acting activator has two domains. Its DNA-binding domain is what gives the target site its specificity: the particular sequence of that domain decides which promoter or enhancer the protein recognises. Its transcription-activation domain is the part that does the activating. The DNA-binding domain binds its own sequence and thereby carries the activation domain to the basal transcription region nearby, and an activator with no activation domain of its own can still function by working with a co-activator that has one. **The two domains are separable pieces of one protein, and yeast two-hybrid rests on exactly that: one protein fused to a DNA-binding domain, another to an activation domain, and a reporter gene that switches on when the two are brought together.** In the three-hybrid version an RNA that binds both fusion proteins is what brings them together, so the reporter reports an RNA–protein interaction.",
      cn: "直接起作用的激活因子有两个结构域。DNA 结合域决定靶位点的特异性：正是这个结构域的特定序列，决定了这个蛋白识别哪个启动子或哪个增强子。转录激活域则是负责「激活」的那一块。DNA 结合域结合到自己的序列上，顺带把转录激活域带到附近的基础转录区域；而本身没有转录激活域的激活因子，仍可以和一个带激活域的共激活因子一起行使功能。**两个结构域是同一个蛋白质上可以拆开的两块，酵母双杂交正建立在这一点上：把一个蛋白融合到 DNA 结合域上，另一个融合到转录激活域上，当两者被拉到一起时，下游的报告基因就被打开。**在酵母三杂交里，把两个融合蛋白牵到一起的是一条能同时结合两者的 RNA，于是报告基因报告的是 RNA 与蛋白质之间的相互作用。",
      /* Keys quoted, which is what check-spans needs: its field scan looks for a bare
         `en:` / `cn:` followed by a quoted string, and a `see` label — which carries no
         bold run by design — otherwise reads to it as a step field with zero bold runs. */
      see: [{ "id": "M-6-3", "en": "yeast two-hybrid, which this makes possible", "cn": "酵母双杂交，正是靠这一点才成立" }],
      src: "现分 p.302, p.303, p.304（图 8-14）"
    },
    {
      link_en: "the boxes from the start of this chain each have a named protein that reads them",
      link_cn: "这条链开头讲过的那几个盒子，各自都有一个有名有姓的蛋白在读",
      recall_en: "the TATA box, CAAT box and GC box from the first three steps",
      recall_cn: "开头三步里的 TATA 盒、CAAT 盒和 GC 盒",
      en: "Four transcription factors are the most widely studied, and each is named by what it recognises: TFⅡD recognises the TATA region, CTF recognises the CAAT region, SP1 recognises GGGCGG, and HSF recognises the promoter region of the heat-shock protein genes. One cell can hold about 60 000 molecules of SP1 and as many as 300 000 of CTF. In the SV40 early gene promoter six GC boxes lie in tandem in the same orientation between −70 and −110, and when that gene is actively expressed all six are bound by SP1; on the thymidine kinase gene promoter one GC box sits 5′ of the TATA region and another 5′ of the CAAT region. **SP1 bound to a GC box can reach, on different faces of the DNA strand, both the CAAT-binding factor CTF (or NF1) and the TATA-binding factor TFⅡD at once, which is how it helps polymerase Ⅱ recognise one particular type of promoter.**",
      cn: "被广泛研究的转录因子主要有四个，每一个都以「识别什么」得名：识别 TATA 区的 TFⅡD、识别 CAAT 区的 CTF、识别 GGGCGG 的 SP1，以及识别热激蛋白启动区的 HSF。已知每个细胞中约含 60 000 个 SP1，而 CTF 的含量高达每细胞 300 000 个。在 SV40 早期基因启动子区，–70～–110 之间有 6 个 GC 区同方向串联排列，基因活跃表达时 6 个区全部与 SP1 结合；在胸腺嘧啶激酶基因的启动子上，TATA 区和 CAAT 区的 5′ 上游端各有一个 GC 区。**结合在 GC 区上的 SP1，能在 DNA 链的不同方向上同时与 CAAT 区结合因子 CTF（或 NF1）和 TATA 区结合因子 TFⅡD 发生作用，正是靠这一点，它促进 RNA 聚合酶Ⅱ识别某一特定类型的启动子。**",
      src: "现分 p.304（表 8-3）"
    },
    {
      link_en: "so how does one protein find one stretch of DNA in a whole genome? four kinds of DNA-binding domain answer that",
      link_cn: "那么，一个蛋白怎么在整个基因组里找到那一段 DNA？回答它的是四类 DNA 结合域",
      en: "The first kind of DNA-binding domain is the helix-turn-helix (H–T–H): at least two α helices in one protein, with a turn between them formed by residues carrying short side chains. Replacing residues in the helix nearer the carboxyl end changes how the protein binds in the major groove of the DNA double helix. Proteins encoded by homeobox genes carry an H–T–H — the yeast MAT mating-type locus and the Drosophila segmentation genes antp, ftz and ubx among them. A homeodomain is the 60-residue conserved sequence such a gene encodes, first cloned from Drosophila homeotic loci, whose gene products decide the development of the body; that region is 80–90% conserved across twenty Drosophila genes and still 35–40% conserved against mammals, and mutating certain of its nucleotides in Oct-2 or in Drosophila eve and ftz stops those factors interacting with DNA at all. **Of a homeodomain's three helices the first two lie on the outside and the third sits in the major groove, while the extra arm at its N terminus binds in the minor groove — two contacts rather than one, which is what makes the binding stable.**",
      cn: "第一类 DNA 结合域是螺旋–转折–螺旋（helix-turn-helix，H–T–H）：一个蛋白分子中至少有两个 α 螺旋，中间由短侧链氨基酸残基形成「转折」。替换近羧基端那个 α 螺旋中的氨基酸残基，会影响该蛋白在 DNA 双螺旋大沟中的结合。由同源盒（homeobox）基因编码的蛋白都带有 H–T–H——控制酵母交配型的 *MAT* 基因座，以及果蝇体节发育的调节基因 *antp*、*ftz*、*ubx*，都在此列。同源域（homeodomain）就是这类基因所编码的那段 60 个保守氨基酸的序列，最早从果蝇 *homeotic loci* 中克隆得到，该位点的基因产物决定躯体发育；这段区域在 20 个果蝇基因之间保守性高达 80%～90%，与亲缘很远的哺乳类相比同源率也在 35%～40% 以上，而突变 Oct-2 或果蝇 *eve*、*ftz* 同源转换区的某些核苷酸，可以完全阻止这些转录因子与 DNA 相互作用。**同源域的三个螺旋里，第一、第二个靠在外侧，第三个嵌进 DNA 大沟，而其 N 端的多余臂则结合到小沟里——两个接触点而不是一个，结合因此才稳定。**",
      src: "现分 p.305, p.306（图 8-15、表 8-4、图 8-16）"
    },
    {
      link_en: "the second kind needs a metal atom before it can hold its shape at all",
      link_cn: "第二类结构，要先有一个金属原子，才撑得起自己的形状",
      en: "The second kind is the zinc finger, whose family covers zinc finger, zinc twist and zinc cluster structures; the number of residues between its characteristic cysteines and histidines is essentially constant, and it has transcriptional regulatory activity only when zinc takes part. In one repeat a zinc atom sits at the centre, held by coordination bonds to a pair of cysteines and a pair of histidines — that arrangement is the Cys2/His2 form — and it joins an α helix to the base of an antiparallel β sheet, while the lysines and arginines projecting from the finger loop make the contact with DNA. Repeated fingers put their helices in the major groove almost in a line, and the binding is very firm and highly specific, so a protein carrying one or several clusters of fingers is taken to be a transcription factor even where its function is unknown, as with TDF, Kruppel and Hunchback. A second sequence, Cys—X₂—Cys—X₁₃—Cys—X₂—Cys, is called the Cys2/Cys2 finger; steroid receptors carry two of these in a row, and the two zinc atoms assemble two α helices into something resembling an H–T–H, which then binds as a homodimer or heterodimer in two neighbouring major grooves. **Swapping the estrogen receptor's two zinc fingers for the glucocorticoid receptor's makes that fusion protein bind the glucocorticoid target GRE and stop recognising the estrogen target ERE, so the fingers decide which sequence is read.**",
      cn: "第二类是锌指（zinc finger）结构，这个家族大体分为锌指、锌扭（twist）和锌簇（cluster）三种，其特有的半胱氨酸与组氨酸残基之间的氨基酸残基数基本恒定，而且只有在有锌参与时才具备转录调控活性。在一个重复单元中，锌原子居中，通过配位键与一对半胱氨酸和一对组氨酸相连——这种排布就是 Cys2/His2 型——把一个 α 螺旋与一个反向平行 β 片层的基部连接起来；锌指环上突出的赖氨酸、精氨酸则参与与 DNA 的结合。重复出现的锌指把各自的螺旋几乎连成一线地排在大沟中，结合很牢固、特异性也很高；因此一个蛋白只要拥有一个或多个成簇的锌指区，即便功能未知也被归为转录因子，TDF、Kruppel、Hunchback 就是这样被收进表里的。另一种序列 Cys—X₂—Cys—X₁₃—Cys—X₂—Cys 被称为 Cys2/Cys2 锌指；类固醇激素受体家族含有连续的两个这种锌指，两个锌原子把两个 α 螺旋装配成类似 H–T–H 的结构，再以同源或异源二聚体的方式结合在相邻的两个大沟中。**把雌激素受体蛋白中的两个锌指区换成糖皮质素受体的锌指区，这个融合蛋白就只与糖皮质素受体的靶序列 GRE 结合、不再识别雌激素受体自身的靶序列 ERE——决定读哪一段序列的，正是锌指区本身。**",
      src: "现分 p.306, p.307（图 8-17、表 8-5、表 8-6）"
    },
    {
      link_en: "the last two kinds share one trick: neither works as a single molecule",
      link_cn: "最后两类共用同一个办法：单个分子都不管用",
      en: "The basic-leucine zipper (bZIP) is the third kind, found in the C/EBP family of proteins of the liver, the intestinal epithelium, fat cells and some brain cells, which bind the CCAAT region and viral enhancers. Their carboxy-terminal 35 residues form an α helix carrying a leucine every six residues, so every seventh leucine comes out on the same side of the helix, and the leucine faces of two such helices are the basis of a zipper-type dimer. The leucine zipper region binds no DNA itself; the 20–30 basic residues at the amino end are what binds, and without dimerisation the affinity of that basic region for DNA drops sharply, so the DNA-binding domain here is the basic region and the zipper taken together. The fourth kind is the basic-helix-loop-helix (bHLH): in E12 and E47, the proteins that bind the enhancer of the immunoglobulin κ light-chain gene, 100–200 carboxy-terminal residues form two amphipathic α helices separated by a non-helical loop, with a basic region at the amino end; MyoD-1, Myc and Max belong here. **A bHLH protein binds DNA only as a homodimer or heterodimer, and a heterodimer whose partner has no basic region — Id, or E12 — clearly loses affinity for the target DNA, so pairing a factor with such a partner switches it off.**",
      cn: "第三类是碱性–亮氨酸拉链（basic-leucine zipper），即 bZIP 结构，存在于肝、小肠上皮、脂肪细胞及某些脑细胞中的一大类 C/EBP 家族蛋白里，它们的特征是能与 CCAAT 区和病毒的增强子结合。这类蛋白羧基端的 35 个氨基酸残基能形成 α 螺旋，其中每隔 6 个氨基酸就有一个亮氨酸残基，于是每第 7 个亮氨酸都出现在螺旋的同一方向；两条螺旋上的亮氨酸一侧，就是形成拉链型二聚体的基础。亮氨酸拉链区本身并不结合 DNA，真正结合 DNA 的是肽链氨基端 20～30 个富含碱性氨基酸的结构域；而若不形成二聚体，该碱性区对 DNA 的亲和力明显降低——所以这里的 DNA 结合结构域，实际是碱性区与亮氨酸拉链区合起来的整体。第四类是碱性–螺旋–环–螺旋（basic-helix/loop/helix），即 bHLH 结构：在免疫球蛋白 κ 轻链基因的增强子结合蛋白 E12 与 E47 中，羧基端 100～200 个氨基酸残基形成两个由非螺旋环状结构隔开的双性 α 螺旋，氨基端则是碱性区；MyoD-1、Myc 及其结合蛋白 Max 都属于此类。**bHLH 类蛋白只有形成同源或异源二聚体时才有足够的 DNA 结合能力，而当异源二聚体中的一方不含碱性区（如 Id 或 E12）时，该二聚体明显缺乏对靶 DNA 的亲和力——给一个因子配一个没有碱性区的搭档，就是把它关掉的办法。**",
      src: "现分 p.308, p.309（图 8-19、图 8-20、图 8-21）"
    },
    {
      link_en: "recognition is only half of a factor's job; the other half is what it does once it is holding on",
      link_cn: "识别只是一个因子工作的一半；另一半是它抓住之后干什么",
      recall_en: "the second of the two separable domains, from the yeast two-hybrid step",
      recall_cn: "就是酵母双杂交那一步里，可拆开的两个结构域中的第二个",
      en: "In eukaryotes the function of a trans-acting factor is made precise and complicated by protein–protein interaction, and a complete regulatory job is usually carried out as a complex, which means some transcription factors never bind DNA at all. **Having a transcription-activation domain is therefore the one structural feature every trans-acting factor is judged by, since a factor that never touches DNA itself can still act through the complex it joins.** An activation domain relies on 30–100 amino acid residues lying outside the DNA-binding domain, and three kinds are described. ① The negatively charged, acidic helix: the two activation domains of the mammalian glucocorticoid receptor, Jun of the AP1 family and GAL4 all have one, it induces transcription initiation only weakly on its own, and it probably binds a general factor of the TFⅡD complex or polymerase Ⅱ itself and stabilises the initiation complex. ② The glutamine-rich domain: SP1, the protein that binds the GC box of a promoter, has four regions taking part in activation, and its strongest holds few polar amino acids and about 25% glutamine; Oct1/2, Jun, AP2 and the serum response factor SRF carry one too. ③ The proline-rich domain: the carboxyl end of the CTF–NF1 factor is 20–30% proline and forms an α helix only with difficulty; Oct2, Jun, AP2 and SRF carry one of these as well.",
      cn: "在真核生物中，反式作用因子的功能由于受蛋白质–蛋白质相互作用的调节而变得精密、复杂，完整的转录调控功能通常以复合物的方式完成——这意味着并非每个转录因子都直接结合 DNA。**是否具有转录活化域，因此成为反式作用因子唯一的结构基础：一个自己从不接触 DNA 的因子，仍然可以通过它所加入的复合物起作用。**转录活化域通常依赖于 DNA 结合结构域以外的 30～100 个氨基酸残基，大体有三种特征性结构。① 带负电荷的螺旋结构：哺乳动物糖皮质激素受体的两个转录活化域、AP1 家族的 Jun 以及 GAL4 都具有酸性螺旋结构；这种结构单独诱导转录起始的活性并不强，它们可能与 TFⅡD 复合物中某个通用因子或 RNA 聚合酶Ⅱ本身结合，起稳定转录起始复合物的作用。② 富含谷氨酰胺的结构：SP1 是启动子 GC 盒的结合蛋白，除结合 DNA 的锌指结构外，它共有 4 个参与转录活化的区域，其中最强的那个很少有极性氨基酸，谷氨酰胺却约占该区氨基酸总数的 25%；Oct1/2、Jun、AP2、血清应答因子（SRF）也都有这种结构域。③ 富含脯氨酸的结构：CTF–NF1 因子的羧基端富含脯氨酸，达 20%～30%，很难形成 α 螺旋；Oct2、Jun、AP2、SRF 等因子中同样存在富含脯氨酸的结构域。",
      src: "现分 p.310（图 8-22）"
    }
  ]
};
