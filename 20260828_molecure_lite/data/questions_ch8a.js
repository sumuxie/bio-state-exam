/* Questions for chapter 8 §8.1 and §8.2, written against the spines and nothing else.

   Covers M-8-1 (真核基因表达调控相关概念和一般规律, spine_ch8_regulation.js, printed
   290–297) and M-8-2 (真核基因表达的转录水平调控, spine_ch8_transcription.js, printed
   298–310). Nine items per node.

   THE TWO MEASURED DEFECTS, DELIBERATELY NOT REPRODUCED. The parent corpus was
   re-measured at 42% of items answerable by picking the visibly longest option and
   60% of answers parked at index 1. The first fix tried on this project — cutting the
   correct option to a bare claim and moving the reasoning into why_en / why_cn — only
   inverted the exploit, so what is done here instead is: the correct option and its
   distractors carry the SAME specificity and come out at comparable length, in every
   item, and the reasoning still lives in why_en / why_cn where the reader meets it
   after answering. Answer positions are spread 0/1/2/3 across the eighteen items.

   M-8-2 leaves one question open on the printed pages — whether the initiation
   complex assembles in one step or stepwise — and no item below asks the reader to
   decide it. The silencer/insulator item rests on a step the spine flags beyond: true,
   and its why says so.

   Distractors are drawn from the neighbouring subsection: the E. coli 30S rRNA
   processing route against the eukaryotic 45S one, the upstream elements against the
   core promoter, the activation domain against the DNA-binding domain. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-8-1 */
window.BIOLITE_Q["M-8-1"] = [
  {
    "type": "mcq",
    "q_en": "An examiner asks you to write out the intron boundary rule as it reads on the pre-mRNA. What do you write?",
    "q_cn": "考官要你把内含子两端的边界法则按 mRNA 前体上的读法写出来。你写什么？",
    "options": [
      "GU at the 5' donor site and AG at the 3' acceptor site",
      "GT at the 5' donor site and AG at the 3' acceptor site",
      "AG at the 5' donor site and GU at the 3' acceptor site",
      "GU at the 5' donor site and AU at the 3' acceptor site"
    ],
    "answer": 0,
    "why_en": "GT–AG is the reading at the level of the gene, meaning on the DNA; on the pre-mRNA the T has already been transcribed as U, so the same rule reads GU–AG. The two ends are different from each other, which is what orients the intron: the 5' junction is the left or donor site, the 3' junction the right or acceptor site.",
    "why_cn": "GT–AG 是在基因即 DNA 层面上的写法；到了 mRNA 前体上，T 已经被转录成 U，同一条法则在那里读作 GU–AG。内含子两端序列不同，正是这一点给它定了向：5′ 端接头是左剪接位点即供体位点，3′ 端接头是右剪接位点即受体位点。"
  },
  {
    "type": "mcq",
    "q_en": "The two ends of one intron share no extensive homology with each other. Which statement does that measurement rule out?",
    "q_cn": "一个内含子的两端序列之间没有广泛的同源性。这个测定结果排除了下面哪一条？",
    "options": [
      "The junction sequence is very short and yet highly conserved",
      "Mitochondrial and yeast tRNA genes must be processed some other way",
      "The junction serves as the signal sequence for RNA splicing",
      "The intron pairs its two ends into a hairpin before splicing"
    ],
    "answer": 3,
    "why_en": "Two ends with no homology cannot base-pair with each other, so no hairpin secondary structure can form across the intron before splicing — that is exactly what the absence of homology is reported for. The other three statements stand on the same page: the junction is short, conserved, and taken to be the splicing signal, and the genes that lack such conserved junctions must process their transcripts another way.",
    "why_cn": "两端没有同源性就不能互补配对，所以剪接之前内含子上下游不可能形成发夹二级结构——「没有同源性」这个结果，报告的正是这件事。另外三条都在同一页上：连接区很短、高度保守、被认为是 RNA 剪接的信号序列；而不含这类保守序列的线粒体基因和酵母 tRNA 基因，其加工必然走另一条路。"
  },
  {
    "type": "mcq",
    "q_en": "The myoglobin heavy-chain gene has 41 exons and its transcript is spliced the same way every time. How many polypeptides does it encode?",
    "q_cn": "肌红蛋白重链基因有 41 个外显子，其转录产物每次都按同一种方式剪接。它编码几条多肽？",
    "options": [
      "Forty-one, since every exon is translated as a short chain of its own",
      "One, since constitutive splicing gives one mature mRNA per transcript",
      "Two, since the 5' and the 3' halves use different poly(A) sites",
      "Several, since 41 exons allow many combinations to be assembled"
    ],
    "answer": 1,
    "why_en": "Splicing that runs the same way every time is constitutive splicing, and it yields exactly one mature mRNA from one transcript, so the gene encodes exactly one polypeptide however many exons it has. Different combinations, different poly(A) sites and different start promoters belong to alternative splicing, which this gene is not doing.",
    "why_cn": "每次都按同一种方式剪接，就是组成型剪接：一个转录产物只产生一种成熟 mRNA，所以不管有多少个外显子，这个基因只编码一条多肽。不同的外显子组合、不同的多(A)位点、不同的起始启动子，那是选择性剪接的事，而这个基因并没有在做选择性剪接。"
  },
  {
    "type": "mcq",
    "q_en": "Mouse liver and salivary gland both make α-amylase from one and the same gene. Comparing the two mRNAs, what is different?",
    "q_cn": "小鼠的肝和唾液腺都由同一个基因合成 α–淀粉酶。比较两种组织的 mRNA，不同的是什么？",
    "options": [
      "The coding sequence, since each tissue uses a different exon 2",
      "The number of introns removed, which is larger in salivary gland",
      "Only the 5' starting portion, from the L exon or from the S exon",
      "The poly(A) tail, whose length is set by the tissue's own promoter"
    ],
    "answer": 2,
    "why_en": "Coding begins at exon 2 and the coding sequence is identical in the two tissues; only the length of the 5' starting portion differs. In liver the first 161 bases come from an L exon 4500 bp upstream of the exon-2 start site, in salivary gland the first 50 bases from an S exon 7300 bp upstream, and S-started transcripts are over 100 times as abundant. The L exon is itself part of an intron in the salivary gland version of the gene.",
    "why_cn": "编码序列起始于第 2 号外显子，两种组织里完全相同，不同的只是 5′ 端起始部分的长度。肝中 mRNA 前 161 个碱基由第 2 号外显子转录起始点上游 4500 bp 处的 L 外显子编码；唾液腺中前 50 个碱基由上游 7300 bp 处的 S 外显子编码，而且由 S 外显子起始的转录产物是 L 者的 100 倍以上。L 外显子本身，正是唾液腺型基因里内含子序列的一部分。"
  },
  {
    "type": "mcq",
    "q_en": "A eukaryotic gene is put into E. coli on its genomic sequence and no protein comes out. What has to be fixed first?",
    "q_cn": "把一个真核基因按其基因组序列放进大肠杆菌，拿不到蛋白质。首先要解决的是什么？",
    "options": [
      "Rebuild the gene from cDNA, so no intron is left in the construct",
      "Add a second promoter, since one cannot drive a foreign gene alone",
      "Supply the bacterium with snoRNAs, so the transcript gets processed",
      "Remove the 5' cap site, which E. coli cannot read on a foreign mRNA"
    ],
    "answer": 0,
    "why_en": "Only eukaryotes can cut introns out of a transcript and produce a functional mRNA and protein; prokaryotes generally lack that ability. So expressing a eukaryotic gene in a prokaryotic cell begins with constructing a recombinant gene whose introns have been removed, and reverse transcriptase copying a mature mRNA into cDNA gives exactly that — exons alone, no intron left. Histone genes and the α- and β-interferon genes are the ones that carry no introns to begin with.",
    "why_cn": "只有真核生物能把内含子从转录产物上切除、产生功能型 mRNA 和蛋白质，原核生物一般没有这个本领。所以要在原核细胞里表达真核基因，第一步就是构建一个已经切除内含子的重组基因；而反转录酶以成熟 mRNA 为模板产生的 cDNA，正好只有外显子、没有内含子。组蛋白基因和 α 型、β 型干扰素基因，则是本来就不带内含子的例子。"
  },
  {
    "type": "mcq",
    "q_en": "In a eukaryotic cell 18S, 5.8S and 28S rRNA turn up together in fixed proportion however the cell is treated. What accounts for that?",
    "q_cn": "在真核细胞里，无论怎么处理细胞，18S、5.8S 和 28S rRNA 总是按固定比例一同出现。原因是什么？",
    "options": [
      "Three tandem promoters that fire together under one shared factor",
      "RNA polymerase Ⅲ transcribing all three from the 5S transcription unit",
      "Three separate transcripts trimmed by RNase Ⅲ, RNase P and RNase E",
      "One 45S transcript with a single start point, cut into all three"
    ],
    "answer": 3,
    "why_en": "A eukaryotic pre-rRNA is one 45S transcript of about 14 000 nucleotides carrying 18S, 5.8S and 28S together: a single transcription unit with a single start point, whose three rRNAs are produced from it by post-transcriptional processing, with snoRNAs taking part in the cutting. RNase Ⅲ, RNase P and RNase E cutting a 30S precursor is the E. coli account from the same step, and 5S rRNA is the separate unit transcribed by polymerase Ⅲ.",
    "why_cn": "真核生物的前 rRNA 是一条 45S、约 14 000 个核苷酸的转录产物，18S、5.8S、28S 都在这一条里面：单一转录单位、只有一个起始点，三种 rRNA 靠转录后加工从这条前体上产生，切割过程需要 snoRNAs 参与。由 RNase Ⅲ、RNase P、RNase E 切割 30S 前体，那是同一步里大肠杆菌的做法；5S rRNA 则是独立的转录单位，由 RNA 聚合酶Ⅲ转录。"
  },
  {
    "type": "mcq",
    "q_en": "Along the human β-globin cluster the genes read 5' to 3' as ε, Gγ, Aγ, δ, β. What does that order on the chromosome correspond to?",
    "q_cn": "人 β 珠蛋白基因簇从 5′ 到 3′ 依次排着 ε、Gγ、Aγ、δ、β。染色体上的这个顺序，对应的是什么？",
    "options": [
      "The order each gene was added to the cluster during duplication",
      "The order in which the genes are expressed during development",
      "The order of their oxygen affinities, from the lowest to the highest",
      "The order the exons are spliced within one primary transcript"
    ],
    "answer": 1,
    "why_en": "Within each cluster the order the genes are arranged in is the order they are expressed in during development, so the chromosome map reads as a timetable: embryo, fetus, adult. Embryonic haemoglobin is 2ζ₂2ε₂, the fetus runs α₂γ₂, and after birth 98% is α₂β₂ with 2% α₂δ₂. The family was indeed built by duplication, mutation and transposition from one ancestral globin gene of about 800 million years ago, but the physical order is not a record of that.",
    "why_cn": "在每个基因簇内部，基因排列的顺序就是它们在发育阶段的表达顺序，所以染色体图读起来像一张时间表：胚胎、胎儿、成人。胚胎型血红蛋白是 2ζ₂2ε₂，胎儿期用 α₂γ₂，出生后 98% 是 α₂β₂、2% 是 α₂δ₂。这个家族确实是由 8 亿年前的一个原始珠蛋白基因经重复、突变和转位建立起来的，但染色体上的物理顺序并不是那个过程的记录。"
  },
  {
    "type": "mcq",
    "q_en": "Why are the actin and tubulin genes taken as the reference in an RT–PCR experiment?",
    "q_cn": "RT–PCR 实验里，为什么拿肌动蛋白和微管蛋白基因作对照？",
    "options": [
      "They are inducible genes and so answer the treatment being tested",
      "They carry no introns, so genomic DNA gives the same product size",
      "They are expressed continuously in every cell at a steady high level",
      "They are transcribed by RNA polymerase Ⅲ, which is not regulated"
    ],
    "answer": 2,
    "why_en": "Genes expressed continuously in every cell of an individual are housekeeping genes, and their mode is constitutive expression: they are needed for cell structure and metabolism — rRNA, actin and tubulin among them — and are kept at a comparatively high level whatever else the cell is doing, which is what makes them usable as a reference. An inducible gene is one a particular environmental signal activates, and a repressible one is what a signal suppresses; either would move with the treatment.",
    "why_cn": "在个体所有细胞中持续表达的基因叫管家基因，其表达模式是组成性表达：它们是细胞结构和代谢所必需的——rRNA、肌动蛋白、微管蛋白都在此列——表达量不随细胞正在做什么而变，能保持较高水平，所以才能拿来作对照。可诱导基因是被特定环境信号激活的，可阻遏基因是被信号抑制的，这两类都会跟着处理一起动。"
  },
  {
    "type": "mcq",
    "q_en": "A cell raises an enzyme's activity as a substrate accumulates and lowers it again once the substrate is gone. Which kind of regulation is that?",
    "q_cn": "底物积累时细胞提高某个酶的活性，底物耗尽后又把它降回去。这属于哪一类调控？",
    "options": [
      "Transient regulation, reversible and answering current conditions",
      "Developmental regulation, irreversible and setting the whole course",
      "Spatial regulation, fixing which tissue the gene product appears in",
      "Epigenetic regulation, applied to chromatin rather than to the DNA"
    ],
    "answer": 0,
    "why_en": "Eukaryotic regulation splits along two axes. One is duration: transient or reversible regulation corresponds to what a prokaryotic cell does about a change in conditions, and the rise and fall of a substrate or a hormone is its named case, while developmental or irreversible regulation decides the whole course of growth, differentiation and development. The other axis is the step at which control is applied — transcriptional, dividing into DNA and chromatin regulation, and post-transcriptional, dividing into RNA processing, translation and protein maturation.",
    "why_cn": "真核基因调控沿两个方向切开。一个方向是持续时间：瞬时调控又称可逆性调控，相当于原核细胞对环境条件变化所作的反应，某种底物或激素水平的升降正是书上点名的例子；发育调控又称不可逆调控，决定生长、分化、发育的全部进程。另一个方向是调控加在哪一步：转录水平调控往下分为 DNA 调控和染色质调控，转录后水平调控往下分为 RNA 加工、翻译和蛋白质加工的调控。"
  }
];

/* ===================================================================== M-8-2 */
window.BIOLITE_Q["M-8-2"] = [
  {
    "type": "mcq",
    "q_en": "Two reporter constructs are made from one gene: in the first the TATA box is deleted, in the second the CAAT box. What is expected?",
    "q_cn": "用同一个基因做两个报告构建：一个删掉 TATA 盒，另一个删掉 CAAT 盒。预期会看到什么？",
    "options": [
      "Losing TATA lowers the rate; losing CAAT moves the start site",
      "Both deletions move the start site, both being promoter elements",
      "Losing TATA loses the start point; losing CAAT lowers the rate",
      "Neither changes anything, an enhancer replacing either element"
    ],
    "answer": 2,
    "why_en": "The core promoter — the start site itself plus a TATA box 25–30 bp upstream of it — is the minimum DNA needed for polymerase Ⅱ to begin properly, and working on its own it fixes the start site and gives a basal level of transcription. The upstream promoter elements, the CAAT box near −70 bp and the GC box GGGCGG, work through TFⅡD to set how often initiation happens and leave the start point where the core promoter put it.",
    "why_cn": "核心启动子——转录起始位点本身，加上位于其上游 –25～–30 bp 的 TATA 盒——是保证聚合酶Ⅱ正常起始转录所必需的最少 DNA；它单独起作用时，确定转录起始位点并产生基础水平的转录。上游启动子元件，即 –70 bp 附近的 CAAT 盒和序列为 GGGCGG 的 GC 盒，则通过 TFⅡD 调节转录起始的频率，而起始点仍由核心启动子说了算。"
  },
  {
    "type": "mcq",
    "q_en": "A polymerase Ⅱ molecule is caught with serine 2 of its CTD heptad phosphorylated and serine 5 not. Where in a round of transcription is it?",
    "q_cn": "抓到一个聚合酶Ⅱ分子，其 CTD 七元重复上第 2 位丝氨酸已磷酸化、第 5 位没有。它处在一轮转录的哪个阶段？",
    "options": [
      "At initiation, serine 2 being required to build the initiation complex",
      "Off the DNA already, both marks being removed when transcription ends",
      "Not yet loaded, the heptad being unphosphorylated before it binds",
      "In elongation, heading for the 3' processing that ends the round"
    ],
    "answer": 3,
    "why_en": "Phosphorylation of serine 2 and serine 5 of the heptad Y₁S₂P₃T₄S₅P₆S₇ runs as a cycle. Serine 5 must be phosphorylated before an initiation complex can form, and that same phosphate recruits the capping enzyme. During elongation serine 5 is progressively dephosphorylated while serine 2 is progressively phosphorylated, and phosphorylated serine 2 is what makes 3' RNA processing run properly at termination. Afterwards both are held dephosphorylated so the complex can come apart.",
    "why_cn": "七元重复序列 Y₁S₂P₃T₄S₅P₆S₇ 上第 2 位与第 5 位丝氨酸的磷酸化走的是一个循环。起始阶段，5 位丝氨酸磷酸化是形成转录起始复合物的必要前提，同一个磷酸基还负责募集加帽酶。延伸阶段，已磷酸化的 5 位逐步去磷酸化，2 位逐步转为磷酸化形式，而 2 位的磷酸化正是保证终止过程中 3′ RNA 加工顺利进行的东西。转录结束后两个丝氨酸都保持去磷酸化，有助于复合物解离。"
  },
  {
    "type": "mcq",
    "q_en": "Polymerase Ⅱ slides off along the template toward the 3' end. Which factors are left behind sitting on the transcription start site?",
    "q_cn": "聚合酶Ⅱ沿模板向 3′ 端滑走。留在转录起始位点上的是哪些因子？",
    "options": [
      "TFⅡD and TFⅡA, which stay on the site that they recognised",
      "TFⅡE and TFⅡH, which had completed the transcription complex",
      "TFⅡB and TFⅡF, which had made the most primitive complex",
      "TBP by itself, released from the TAFs as elongation begins"
    ],
    "answer": 0,
    "why_en": "As polymerase Ⅱ slides along the template, TFⅡD and TFⅡA stay behind on the start site while every other factor travels with the polymerase toward the 3' end, so the site is left marked by the two factors that recognised it. TFⅡD, TFⅡB and TFⅡF with polymerase Ⅱ form the most primitive complex on the promoter; adding TFⅡE and TFⅡH gives the complete complex that transcribes long chains; adding TFⅡA raises efficiency further. TFⅡD is TBP plus its TAFs.",
    "why_cn": "聚合酶Ⅱ沿模板滑动时，TFⅡD 和 TFⅡA 滞留在转录起始位点上，其余因子都随聚合酶向 3′ 端移动，起始位点因此始终由识别它的那两个因子占着。TFⅡD、TFⅡB、TFⅡF 与聚合酶Ⅱ在启动子上形成最初级的复合物；加入 TFⅡE、TFⅡH 后形成能转录长链 RNA 的完整复合物；再加入 TFⅡA 可进一步提高效率。TFⅡD 则是 TBP 加上一批 TAF。"
  },
  {
    "type": "mcq",
    "q_en": "One enhancer raises transcription 3 kb upstream, 2.5 kb downstream, and in either orientation, yet fires in some tissues and not others. What carries that specificity?",
    "q_cn": "同一个增强子在上游 3 kb、下游 2.5 kb、正反两种取向下都能增强转录，却只在某些组织里起作用。这种特异性由什么携带？",
    "options": [
      "Its distance from the start site, which differs between cell types",
      "Which transcription factors that particular cell happens to contain",
      "Its orientation, read 5'→3' in some tissues and 3'→5' in others",
      "Its (G)TGGA/TA/TA/T(G) core sequence, rewritten in each tissue"
    ],
    "answer": 1,
    "why_en": "The enhancing effect is independent of position and orientation and shows no gene specificity — one enhancer works on different combinations of genes — but it is strictly tissue- and cell-specific, which shows that an enhancer functions only by interacting with particular proteins, the transcription factors. So position has been stripped of explanatory power and the specificity is carried by the proteins the cell contains. The core sequence is required for the effect, but it is not rewritten from tissue to tissue.",
    "why_cn": "增强效应与位置和取向无关，也没有基因专一性——同一个增强子可以在不同的基因组合上表现增强效应——但它有严密的组织和细胞特异性，这说明增强子只有与特定蛋白质即转录因子相互作用才能发挥功能。于是位置本身不再有解释力，特异性由这个细胞里有哪些蛋白携带。核心序列是产生增强效应所必需的，但它并不逐个组织地改写。"
  },
  {
    "type": "mcq",
    "q_en": "A point mutation turns AATAAA into AAGAAA 20 bp upstream of a gene's poly(A) site. What is found afterwards?",
    "q_cn": "点突变把某基因多(A)位点上游 20 bp 处的 AATAAA 变成 AAGAAA。之后测到的是什么？",
    "options": [
      "Transcription halts at the mutated site and no transcript is made",
      "Transcription is abolished, AATAAA being the gene's terminator",
      "Transcription is unchanged and no functional mRNA comes out of it",
      "Transcription doubles, polymerase Ⅱ running past the poly(A) site"
    ],
    "answer": 2,
    "why_en": "The conserved AATAAA 15–30 bp upstream of the poly(A) site is required for the primary transcript to be cut accurately and given its poly(A) tail. Changing it to AAGAAA leaves transcriptional activity intact and blocks the processing, so the transcript is still made and no functional mRNA comes out of it. Polymerase Ⅱ does not stop at the poly(A) site in any case: most known primary transcripts run 0.5–2 kb past it, and no single site with a specific transcription-terminating property has been found.",
    "why_cn": "多(A)位点上游 15～30 bp 处的保守序列 AATAAA，对初级转录产物的准确切割及加多(A)尾是必需的。把它变成 AAGAAA，基因的转录活性照旧保持，加工却被阻断——转录产物照样做出来，却产生不了有功能的 mRNA。聚合酶Ⅱ本来也不在多(A)位点终止：大部分已知基因的初级转录产物还带着该位点下游 0.5～2 kb 的序列，而且迄今没发现哪个单一位点具有特异的转录终止性能。"
  },
  {
    "type": "mcq",
    "q_en": "An element stops an enhancer's activation from reaching a gene further along the chromosome, without lowering transcription anywhere by itself. What is it?",
    "q_cn": "有一个元件，它阻止增强子的激活作用沿染色体传到更远处的基因上，本身却并不降低任何地方的转录。它是什么？",
    "options": [
      "A silencer, the negative element that lowers a linked gene's transcription",
      "An upstream promoter element, which sets how often initiation happens",
      "A core promoter, the least DNA polymerase Ⅱ needs to start properly",
      "An insulator, which confines a chromosome's activity to one domain"
    ],
    "answer": 3,
    "why_en": "An insulator blocks activation or repression from passing along the chromosome, which confines a chromosome's activity to one domain; a silencer is the negative regulatory element that lowers the transcription of the gene linked to it, which is a different job. Note that both definitions come from a margin note on the scan rather than from the printed text, which names the silencer only in its list of cis-acting elements.",
    "why_cn": "绝缘子阻止激活或阻遏沿染色体传递，从而把染色体的活性限定在一个结构域之内；沉默子则是降低与之连锁基因转录的负性调节元件，做的是另一件事。要注意：这两条定义都出自扫描件上的红笔旁注，印刷正文只在顺式作用元件的清单里点了 silencer 的名字。"
  },
  {
    "type": "mcq",
    "q_en": "Yeast two-hybrid switches a reporter gene on when two fusion proteins are brought together. Which property of an activator is it resting on?",
    "q_cn": "酵母双杂交在两个融合蛋白被拉到一起时打开报告基因。它靠的是激活因子的哪一条性质？",
    "options": [
      "The DNA-binding domain does the activating once it holds its site",
      "Recognition and activation sit in two separable domains of one protein",
      "An activator has to dimerise before either of its domains can work",
      "The activation domain is what decides which promoter is recognised"
    ],
    "answer": 1,
    "why_en": "A directly acting activator has two domains: the DNA-binding domain, whose own sequence decides which promoter or enhancer is recognised, and the transcription-activation domain, which does the activating and is carried to the basal transcription region by the first. They are separable pieces of one protein, which is exactly what lets one protein be fused to a DNA-binding domain and another to an activation domain. In the three-hybrid version an RNA that binds both fusions is what brings them together.",
    "why_cn": "直接起作用的激活因子有两个结构域：DNA 结合域，正是这个结构域的特定序列决定它识别哪个启动子或哪个增强子；以及转录激活域，负责「激活」，由前者顺带把它带到附近的基础转录区域。两者是同一个蛋白上可以拆开的两块，这才使得一个蛋白能融合到 DNA 结合域、另一个融合到转录激活域上。在酵母三杂交里，把两个融合蛋白牵到一起的是一条能同时结合两者的 RNA。"
  },
  {
    "type": "mcq",
    "q_en": "Swapping the estrogen receptor's two zinc fingers for the glucocorticoid receptor's makes the fusion protein bind GRE and stop recognising ERE. What does that show?",
    "q_cn": "把雌激素受体的两个锌指区换成糖皮质素受体的锌指区，这个融合蛋白就结合 GRE、不再识别 ERE。这说明了什么？",
    "options": [
      "That zinc has to take part before a receptor can regulate transcription",
      "That the transcription-activation domain picks the target sequence",
      "That the zinc fingers decide which DNA sequence the protein reads",
      "That a steroid receptor binds DNA as a heterodimer and never alone"
    ],
    "answer": 2,
    "why_en": "Only the fingers were exchanged and the target changed with them, so it is the DNA-binding domain that carries the sequence specificity. Steroid receptors carry two Cys2/Cys2 fingers in a row, whose two zinc atoms assemble two α helices into something resembling an H–T–H that binds as a homodimer or heterodimer in two neighbouring major grooves. Zinc is indeed needed for regulatory activity, and dimers are indeed formed, but neither is what this particular swap demonstrates.",
    "why_cn": "被换掉的只有锌指区，而靶序列跟着一起换了，所以携带序列特异性的正是 DNA 结合域。类固醇激素受体含有连续两个 Cys2/Cys2 锌指，两个锌原子把两个 α 螺旋装配成类似 H–T–H 的结构，再以同源或异源二聚体的方式结合在相邻的两个大沟中。锌确实是转录调控活性所必需的，二聚体也确实会形成，但这两条都不是这次替换所证明的东西。"
  },
  {
    "type": "mcq",
    "q_en": "A protein takes part in transcriptional regulation and has no DNA-binding activity of its own at all. How does it act?",
    "q_cn": "一个蛋白参与转录调控，自己却完全没有 DNA 结合活性。它靠什么起作用？",
    "options": [
      "Through protein–protein contact that changes a factor's conformation",
      "By binding the CAAT box through a glutamine-rich region instead",
      "By bringing RNA polymerase Ⅲ to the enhancer of the target gene",
      "By methylating the core promoter so TFⅡD cannot assemble there"
    ],
    "answer": 0,
    "why_en": "Trans-acting factors come in three functional classes: the basal transcription factors that recognise promoter elements, the transcriptional regulators that recognise enhancers or silencers, and the co-regulators, which take part in transcriptional control without any DNA–protein interaction of their own. A co-regulator works by protein–protein interaction that changes a transcription factor's conformation — a co-activator with an activator, a co-repressor with a repressor. The glutamine-rich region is one of the three activation-domain types, carried by SP1, which does bind DNA.",
    "why_cn": "反式作用因子按功能分三类：识别启动子元件的基本转录因子、识别增强子或沉默子的转录调节因子，以及不需要通过 DNA–蛋白质相互作用就参与转录调控的共调节因子。共调节因子靠蛋白质–蛋白质相互作用改变转录因子的分子构象来起效：与激活因子协同的叫共激活因子，与阻遏因子协同的叫共阻遏因子。富含谷氨酰胺的区域则是三类转录活化域之一，带着它的 SP1 是结合 DNA 的。"
  }
];
