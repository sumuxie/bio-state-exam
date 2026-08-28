/* Questions for the four misc nodes, written against their spines.

   M-2-6 DNA 的转座 and M-2-7 SNP 的理论与应用 live in data/spine_misc.js;
   M-3-9 RNA 的编辑、再编码和化学修饰 and M-3-10 mRNA 转运 live in data/spine_misc2.js.
   Item counts follow how much each spine actually carries: 8 / 6 / 8 / 4 = 26.
   M-3-10 is seven steps on a page and a half; four items is the honest number.

   TWO MEASURED DEFECTS, DELIBERATELY NOT REPRODUCED. The parent bank was re-measured
   at 42% of items answerable by picking the visibly longest option and 60% of answers
   sitting at index 1. The obvious fix — cutting the correct option to a bare claim —
   was tried on this project and merely inverted the exploit into "pick the shortest".
   So the rule here is the one tools/check-mcq.py states: the correct option and its
   distractors are written to COMPARABLE length, and in essentially every item below
   at least one distractor is longer than the correct option and at least one is
   shorter, so length carries no signal in either direction. Answer positions are
   spread across all four indices. Reasoning lives in why_en / why_cn, which the
   reader sees after answering.

   The shape leaned on: a result or a scenario, followed by "what follows from it" —
   an 8 bp direct repeat, a truncated apolipoprotein B in intestine, a Ds that starts
   moving only after a cross. Distractors are drawn from the neighbouring subsection:
   the right players in the wrong order, the correct effect attributed to the wrong
   molecule. */
window.BIOLITE_Q = window.BIOLITE_Q || {};

/* ===================================================================== M-2-6 */
window.BIOLITE_Q["M-2-6"] = [
  {
    "type": "mcq",
    "q_en": "A newly sequenced insertion carries the direct repeat ATGCATTC on each of its two flanks. What does the LENGTH of that repeat report?",
    "q_cn": "一段新测出来的插入序列，两侧各带着一份正向重复 ATGCATTC。这份重复的「长度」报告的是什么？",
    "options": [
      "The length of the inverted repeat sitting at the two ends of the element itself",
      "The number of host bases the transposase deleted from the target gene it hit",
      "The distance between the two staggered cuts the transposase made in the host",
      "How many times this element has already transposed within the same host genome"
    ],
    "answer": 2,
    "why_en": "The transposase does not cut the host straight across: it cuts the two strands a few bases apart, and DNA polymerase fills in the single-stranded overhangs left on either side. Filling in a staggered cut writes the host target sequence twice, so the repeat is short and its length is exactly the offset between the two cuts — hence 4 to 15 bp.",
    "why_cn": "转座酶不会把宿主 DNA 齐齐切断：它在两条链上错开几个碱基各切一刀，随后 DNA 聚合酶把两侧留下的单链突出末端补齐。把一个 staggered cut 补平，就等于把宿主靶序列写了两遍——所以这份重复很短，而它的长度恰好等于两个切口之间的错开距离，也就是 4~15 bp 的来处。"
  },
  {
    "type": "mcq",
    "q_en": "An insertion sequence carries no host gene whatever. What then lies between its two inverted repeats?",
    "q_cn": "插入序列（IS）不含有任何宿主基因。那么夹在它两端反向重复之间的，是什么？",
    "options": [
      "One open reading frame, encoding the transposase that recognises those ends",
      "A drug-resistance gene, together with the resolvase that finishes off the move",
      "Two short direct repeats, copied from the host DNA at the target site",
      "A 38 bp inverted repeat pair and the beta-lactamase gene of the TnA family"
    ],
    "answer": 0,
    "why_en": "An IS is exactly two things: a pair of ends the transposase recognises, and between them the instructions for making that transposase. Everything else on the list belongs to the neighbours — resolvase and beta-lactamase to TnA, the direct repeats to the host DNA outside the element, not inside it.",
    "why_cn": "一个 IS 恰好只有两样东西：一对能被 transposase 识别的末端，以及夹在中间的、造出这个 transposase 的说明书。其余选项都属于邻居：resolvase 与 beta-lactamase 是 TnA 家族的，而 direct repeat 在因子外侧的宿主 DNA 上，不在因子内部。"
  },
  {
    "type": "mcq",
    "q_en": "A plasmid carries a tetracycline-resistance gene with an identical copy of IS10 on each side of it. What follows?",
    "q_cn": "一个质粒上，一个四环素抗性基因两侧各有一份完全相同的 IS10。由此可以得到什么？",
    "options": [
      "Each IS10 copy still transposes on its own, and the resistance gene stays put",
      "The two IS10 copies are the direct repeats left behind by a staggered cut",
      "The resistance gene is transcribed from a promoter inside the left-hand IS10",
      "The span between the two IS10 copies now moves as one composite transposon"
    ],
    "answer": 3,
    "why_en": "That layout is how a composite transposon arises: an IS landing at each end of a functional gene makes the entire span between them mobile. Once the composite exists, its two IS can no longer move by themselves — their function has been modified so that they act only on the composite, whose transposition they then determine and regulate.",
    "why_cn": "这个摆法本身就说明了 composite transposon 是怎么来的：一个 IS 插到功能基因的一端、另一个插到另一端，夹在中间的整段就变得可以移动了。复合型转座子一旦形成，两端的 IS 就不能再单独移动——它们的功能已被修饰成只作用于这个复合体，而整体的转座能力恰恰由这两个 IS 决定和调节。"
  },
  {
    "type": "mcq",
    "q_en": "A maize line carries a Ds element that never moves. Crossed to a line carrying Ac, the Ds begins transposing. Why?",
    "q_cn": "某个玉米株系带着一个从不移动的 Ds 因子；与一个带 Ac 的株系杂交后，这个 Ds 开始转座了。为什么？",
    "options": [
      "Ac inserts into Ds and gives it the inverted repeats that it had been missing",
      "Ac supplies the transposase as a trans-acting protein, and Ds encodes none",
      "Ac methylates the two Ds ends so that the target site will accept them",
      "Ac recombines homologously with Ds, and that is what relocates the Ds"
    ],
    "answer": 1,
    "why_en": "A nonautonomous element is stable on its own and cannot transpose at all; what it lacks is the enzyme, not the ends. An autonomous element supplies the transposase as a diffusible trans-acting protein — and only within its own family, so an Ac serves the Ds of its family and does nothing whatever for another family's.",
    "why_cn": "nonautonomous element 单独存在时是稳定的、根本不能转座；它缺的是酶，不是末端。autonomous element 提供的是可扩散的反式作用蛋白，也就是 transposase——而且只在本家族内部提供：一个 Ac 服务于本家族的 Ds，对另一个家族的则毫无作用。"
  },
  {
    "type": "mcq",
    "q_en": "After a transposition event the element is found at its new site and is still present at the old one. What does that say about the mechanism?",
    "q_cn": "一次转座之后，因子出现在新位点上，而原来的位置上它仍然在。这说明这个机制是怎么回事？",
    "options": [
      "The cell holds two chromosomes and the element moved on only one of them",
      "The element excised cleanly and then re-inserted at its original address",
      "Transposition ran through replication, so what reached the new site is a copy",
      "Homologous recombination between the two sites restored the original sequence"
    ],
    "answer": 2,
    "why_en": "The word transposition suggests an element leaving its old address, and that is the wrong picture: one copy commonly stays exactly where it was and a copy is what turns up at the new site. Transposition therefore depends on DNA replication, and that is the line between it and homologous recombination — recombination moves material, transposition multiplies it.",
    "why_cn": "「转座」这个词听上去像是因子搬离了旧地址，而这幅图像是错的：一个拷贝常常仍留在原处，出现在新位点上的只是它的一个拷贝。所以转座依赖 DNA replication——这也正是它与同源重组的分界线：recombination 把材料从一处挪到另一处，transposition 则把材料变多。"
  },
  {
    "type": "mcq",
    "q_en": "Replicative transposition leaves two copies of one element close together on a chromosome, pointing in opposite directions. Homologous recombination between them gives what?",
    "q_cn": "复制型转座在染色体上留下相距不远、方向相反的两份同一因子。两者之间发生同源重组，结果是什么？",
    "options": [
      "The stretch of host DNA lying between the two copies is inverted",
      "The stretch of host DNA lying between the two copies is deleted instead",
      "A composite transposon whose two flanks are those two copies",
      "A polar mutation in every operon lying between the two copies"
    ],
    "answer": 0,
    "why_en": "Two identical sequences in one region are a substrate for recombination between them, and the outcome is decided by which way they point: same orientation deletes the DNA between them, opposite orientations inverts that same stretch. This is the third genetic consequence of transposition, and it needs the second copy that replicative transposition supplies.",
    "why_cn": "同一区域里的两份相同序列，本身就是两者之间发生同源重组的底物，而结局由方向决定：同向的两份之间重组，夹在中间的宿主 DNA 被缺失；反向的两份之间重组，同一段则被倒位。这是转座的第三条遗传学效应，它需要的正是复制型转座提供的第二个拷贝。"
  },
  {
    "type": "mcq",
    "q_en": "An IS transposes at 10^-3 to 10^-4 per generation and excises again at 10^-6 to 10^-10. What does that gap buy an experimenter?",
    "q_cn": "一个 IS 的转座频率是 10^-3~10^-4/世代，而重新切出去的频率是 10^-6~10^-10/世代。这个差距给实验者买来了什么？",
    "options": [
      "A mutation frequent enough to compete with homologous recombination in the cell",
      "An insertion mutation that in practice never reverts, marking a locus stably",
      "A way of restoring the original sequence whenever the insertion is not wanted",
      "An element that leaves its old address each time the transposase acts on it"
    ],
    "answer": 1,
    "why_en": "Insertion beats its own reversal by two to seven orders of magnitude, so a transposon insertion is a mutation that in practice never undoes itself. That is what makes it usable as a stable genetic marker, and it is why dropping an element into a gene is a ready-made way of building a new mutant. Transposition is still far rarer than homologous recombination.",
    "why_cn": "插入比它自己的回复高出两到七个数量级，所以一次转座插入是一个实际上不会自行撤销的突变。这正是它能被当作稳定遗传标记来用的原因，也是「把一个因子丢进某个基因里」成为构建新突变体的现成手段的原因。至于频率，转座仍然远低于 homologous recombination。"
  },
  {
    "type": "mcq",
    "q_en": "An IS inserts near the front of an operon, and the structural genes in the back half of that operon stop being expressed as well. What is this?",
    "q_cn": "一个 IS 插进某个操纵子的前半部分，结果该操纵子后半部分的结构基因也一并不表达了。这是什么？",
    "options": [
      "A chromosomal aberration, of the kind homologous recombination produces",
      "An evolutionary consequence, assembling distant genes into one expression unit",
      "The short direct repeat of host sequence generated at the insertion site",
      "A polar mutation, the insertion reaching past the gene it actually landed in"
    ],
    "answer": 3,
    "why_en": "Insertion inside a gene gives an insertion mutation; insertion in the front half of an operon gives a polar mutation as well, in which the structural genes behind it are switched off too. The chromosomal aberration is the third consequence and needs two copies of the element, and building a new expression unit out of distant genes is the fourth, evolutionary one.",
    "why_cn": "插进基因内部得到 insertion mutation；插在操纵子前半部分，还会额外造成极性突变（polar mutation），使它后面的结构基因也一并失活。染色体畸变是第三条效应，需要因子的两个拷贝；把相距甚远的基因拼成一个表达单元，则是第四条、进化尺度上的效应。"
  }
];

/* ===================================================================== M-2-7 */
window.BIOLITE_Q["M-2-7"] = [
  {
    "type": "mcq",
    "q_en": "Transitions make up roughly two-thirds of all human SNPs, so the substitutions at a site are far from equally likely. What produces that excess?",
    "q_cn": "转换（transition）约占人类 SNP 总量的三分之二，可见一个位点上的替换远非等概率。多出来的这部分是怎么产生的？",
    "options": [
      "Methylation of a CpG stalls the replication fork, and the polymerase inserts a T",
      "A methylated cytosine in a CpG deaminates spontaneously and becomes a thymine",
      "A coding region varies at one-fifth the rate of the sequence surrounding it",
      "Purines outnumber pyrimidines in the genome, so purine-to-purine change dominates"
    ],
    "answer": 1,
    "why_en": "The cytosine of a CpG dinucleotide is the most mutable position in the human genome. Most of those cytosines are methylated, and a methylated cytosine loses its amino group on its own and becomes a thymine — no replication error, no damaging agent. C to T is a pyrimidine for a pyrimidine, that is, a transition, and repeating it genome-wide is where the two-thirds comes from.",
    "why_cn": "CpG 二核苷酸上的 cytosine 是人类基因组中最易突变的位点。这些 C 大多是甲基化的，而 methylated cytosine 会自发脱去氨基变成 thymine——不需要复制出错，也不需要任何损伤因子。C→T 是嘧啶换嘧啶，也就是 transition；把这件事在全基因组上重复一遍，那多出来的三分之二就出来了。"
  },
  {
    "type": "mcq",
    "q_en": "A 200 kb region holds several hundred known SNP positions, yet typing eight of them describes most of the variation in it. What makes that work?",
    "q_cn": "一段 200 kb 的区域里有几百个已知 SNP 位点，但只测其中 8 个，就能描述这个区域的大部分变异。这件事为什么成立？",
    "options": [
      "Only eight of those positions sit inside a coding region and can alter a protein",
      "The rest are rSNPs, and a non-coding position carries no genetic variation",
      "Genotyping measures frequencies, so a small sample stands in for the region",
      "Neighbouring SNP alleles are inherited as one block, and a few tag SNPs report it"
    ],
    "answer": 3,
    "why_en": "Alleles at neighbouring SNP positions travel to the offspring as a single block, a haplotype, and most chromosomal regions carry only a few common haplotypes. So typing one SNP inside a block reports on the others in the same block, and a handful of tag SNPs covers the region — which is what made a genome-wide study finite, and what the HapMap project was built to map.",
    "why_cn": "相邻 SNP 的等位位点是作为一个整体（haplotype，单倍型）传给后代的，而大多数染色体区域只有少数几个常见单倍型。于是测一个块里的一个 SNP，就等于报告了同一块里的其余 SNP，少数几个 tag SNP 就覆盖了整段区域——这正是全基因组 SNP 研究得以有限的原因，也是 HapMap 计划要绘制的东西。"
  },
  {
    "type": "mcq",
    "q_en": "The variation rate inside a coding region is only one-fifth of the rate in the sequence around it. What does that mean for the three positional classes of SNP?",
    "q_cn": "编码区内的变异率只有周围序列的五分之一。这对按位置划分的三类 SNP 意味着什么？",
    "options": [
      "cSNPs are markedly fewer than either pSNPs or rSNPs, yet likeliest to matter",
      "cSNPs are the commonest of the three, coding sequence being under most pressure",
      "pSNPs cannot alter a protein at all, so they drop out of disease association work",
      "rSNPs are the synonymous class, their base change leaving the protein untouched"
    ],
    "answer": 0,
    "why_en": "Coding sequence is the most conserved of the three compartments, so the positions likeliest to matter are the positions rarest to find. The classification is by position: cSNP in a coding region, pSNP in a regulatory region, rSNP in the non-coding sequence between genes. Synonymous and non-synonymous is a further split inside the cSNP class alone, and a pSNP alters how much protein is made.",
    "why_cn": "三块区域里编码区最保守，所以最可能有影响的位点，恰好是最难找到的位点。分类依据是位置：cSNP 在编码区，pSNP 在调控区，rSNP 在基因间的非编码区。synonymous 与 non-synonymous 是 cSNP 内部再分的一层，而 pSNP 改变的是基因表达量的多少。"
  },
  {
    "type": "mcq",
    "q_en": "SNPs became the third generation of genetic marker, after RFLP and the microsatellite (SSR) markers. Which property earned them the place?",
    "q_cn": "继 RFLP 和微卫星标记（SSR）之后，SNP 成为第三代遗传标记。是哪一条性质让它坐上这个位置的？",
    "options": [
      "They are read out by sequencing, a method the earlier marker classes cannot use",
      "They lie only inside genes, where a base change can be tied to a phenotype",
      "They are the commonest form of polymorphism and are inherited very stably",
      "They fall one per 300 to 1 000 bp, a density no RFLP site can be found at"
    ],
    "answer": 2,
    "why_en": "A marker is only useful if it stays put between generations and can be found often enough to cover a genome, and a SNP is both: the simplest and commonest polymorphism there is, with very high genetic stability. SNPs are not confined to genes at all — cSNPs are the rarest of the three positional classes — and RFLP is itself read out by cutting and sizing DNA, not by sequencing.",
    "why_cn": "一个标记有没有用，取决于它在世代之间稳不稳、以及密不密到足以覆盖整个基因组；SNP 两条都占：它是最简单也最常见的多态性形式，而且遗传稳定性很高。SNP 并不局限在基因内部——cSNP 恰恰是三类里最少的一类；而 RFLP 本身靠酶切和片段大小读出，并不靠测序。"
  },
  {
    "type": "mcq",
    "q_en": "A lab takes SNPs already held in a database and measures which allele each of 500 people carries. Which job is that?",
    "q_cn": "某实验室拿数据库里已有的 SNP，去测 500 个人各自带的是哪个等位位点。这是哪一件工作？",
    "options": [
      "SNP discovery, for which DNA sequencing remains the commonest method used",
      "Haplotype mapping, needing one tag SNP chosen out of every chromosomal region",
      "An association study, since allele frequencies are compared across a population",
      "Genotyping, which asks which allele is carried at a position already known"
    ],
    "answer": 3,
    "why_en": "Discovery and genotyping answer different questions: one asks where the variable positions are, the other asks which allele this person carries at a position already known. Genotyping runs on gene chips, Taqman, molecular beacons or pyrosequencing; sequencing is still how a new SNP is found. An association study additionally compares patients against non-patients.",
    "why_cn": "发现与分型回答的是不同的问题：一个问「可变的位点在哪里」，另一个问「在一个已知位点上，这个人带的是哪个等位位点」。genotyping 用基因芯片、Taqman、molecular beacon 或 pyrosequencing 来做；而找一个新 SNP，目前最常见的办法仍是测序。association study 还要额外把患者与非患者比一比。"
  },
  {
    "type": "mcq",
    "q_en": "One SNP falls in every 300 to 1 000 bp of human DNA. What does that give for a single person's genome?",
    "q_cn": "人类 DNA 中每 300~1 000 个碱基对就有一个 SNP。对一个人的基因组而言，这意味着多少？",
    "options": [
      "Between 3 million and 10 million SNP positions, the raw material of every study",
      "About 1.5 million, which is the count HapMap has so far placed on chromosomes",
      "Roughly 269 of them per chromosome, one for each DNA sample HapMap genotyped",
      "Fewer than 1 million, since a coding region varies at one-fifth of that rate"
    ],
    "answer": 0,
    "why_en": "Three billion base pairs divided by one SNP per 300 to 1 000 bp gives 3 to 10 million positions in one individual, which is the raw material every population and disease-association study works from. The 1.5 million figure is how many SNPs the HapMap project had precisely located, and 269 was its number of DNA samples, from 4 populations.",
    "why_cn": "三十亿碱基对除以「每 300~1 000 bp 一个」，得到一个个体身上 300 万~1 000 万个位点——这就是所有群体研究和疾病关联研究所用的原料。150 万是 HapMap 已精确定位到染色体上的 SNP 数目，而 269 是它所用的 DNA 样品份数，来自 4 个不同人种。"
  }
];

/* ===================================================================== M-3-9 */
window.BIOLITE_Q["M-3-9"] = [
  {
    "type": "mcq",
    "q_en": "An intron excises itself from a mitochondrial transcript with no free guanosine anywhere in the reaction, and comes away as a lariat. What was the nucleophile?",
    "q_cn": "线粒体的一条转录本上，某个内含子在反应体系里没有任何游离鸟苷的情况下自我切除，并且以套索（lariat）的形状离开。充当亲核基团的是什么？",
    "options": [
      "The 2'-OH of an adenosine near the intron's own 3' end, with Mg2+ required",
      "The 3'-OH of a free guanosine nucleotide, held in a pocket inside the intron",
      "The 3'-OH of the upstream exon, attacking the intron's 5' splice site first",
      "A branch-point A handed to the intron by the major spliceosome complex"
    ],
    "answer": 0,
    "why_en": "That is a group II self-splicing intron: it carries its own nucleophile, the 2'-OH of an adenosine near its 3' end, which attacks the phosphodiester bond at the 5' end and folds the intron back on itself into a lariat. A group I intron uses a free guanosine or guanosine nucleotide instead and leaves as a linear molecule. The upstream exon's 3'-OH does attack, but only in the second transesterification.",
    "why_cn": "这是 Ⅱ 类自剪接内含子：它的亲核基团长在自己身上，即靠近 3′ 端的一个腺苷酸的 2′-OH，它攻击 5′ 端的磷酸二酯键，同时让内含子折回自身形成 lariat。Ⅰ 类内含子用的是游离的鸟苷或鸟苷酸，切下来是线性分子。上游外显子的 3′-OH 确实会去攻击，但那是第二次转酯反应的事。"
  },
  {
    "type": "mcq",
    "q_en": "A group I intron splices itself with no protein present at all, and yet attacks one particular phosphodiester bond rather than the one beside it. What fixes that position?",
    "q_cn": "Ⅰ 类内含子在完全没有蛋白质参与的情况下自我剪接，却偏偏攻击某一个特定的磷酸二酯键，而不是旁边那一个。是什么把位置定下来的？",
    "options": [
      "A spliceosome docks onto the 5' splice site and holds the guanosine in place",
      "The lariat branch point pairs with the 3' splice site and measures the distance",
      "A pocket holds the guanosine, and an internal guide sequence pairs the 5' site",
      "Two inverted repeats at the intron's flanks mark the ends that are acted on"
    ],
    "answer": 2,
    "why_en": "The intron folds into a conserved secondary structure with two working parts: a pocket that accommodates the guanosine or guanosine nucleotide, and an internal guide sequence that base-pairs with the 5' splice site. Holding the nucleophile still and pinning the splice site down by base pairing is how an RNA with no protein cuts at one position and not a neighbouring one.",
    "why_cn": "内含子折叠成一个保守的二级结构，其中有两个干活的部件：容纳鸟苷或鸟苷酸的口袋，以及一段与 5′ 剪接位点配对的 internal guide sequence。把亲核基团扣住、再用碱基配对把剪接位点钉住，这就是一条没有蛋白质帮忙的 RNA 只切在这一处、不切在旁边那一处的办法。"
  },
  {
    "type": "mcq",
    "q_en": "The apolipoprotein B gene has one DNA sequence in every tissue, yet liver makes a 4 563-residue protein and intestine makes one of half the mass matching its N-terminal part. What happened?",
    "q_cn": "载脂蛋白 B 基因在所有组织中 DNA 序列都相同，可肝里造出 4 563 个氨基酸的蛋白，肠里造出的只有它一半的相对分子质量、而且正是全长蛋白的 N 端那一截。发生了什么？",
    "options": [
      "The intestinal transcript was spliced at an alternative 3' site and lost exons",
      "Site-specific deamination turned the CAA at codon 2 153 into a UAA stop codon",
      "A guide RNA directed uracil insertion, which shifted the frame at codon 2 153",
      "The intestinal ribosome hopped 50 nucleotides and left the reading frame early"
    ],
    "answer": 1,
    "why_en": "The two mRNAs are identical except at codon 2 153, where a cytosine deaminase has turned CAA into UAA — a glutamine codon into a stop. One base changed in the message, and one DNA sequence yields a full-length protein in one tissue and a truncated one in another. The DNA is not touched, which is exactly what makes this editing and not a mutation.",
    "why_cn": "两条 mRNA 完全相同，只有第 2 153 位密码子例外：胞嘧啶脱氨酶把 CAA 变成了 UAA——谷氨酰胺密码子变成了终止密码子。信息上改了一个碱基，同一份 DNA 序列就在一个组织里给出全长蛋白、在另一个组织里给出截短的蛋白。而 DNA 一个碱基都没被动过，这正是它算 editing 而不算突变的原因。"
  },
  {
    "type": "mcq",
    "q_en": "An adenine deaminase acting on RNA will attack essentially any adenosine in a double-stranded region. How does editing of glutamate receptor mRNA still land on one site?",
    "q_cn": "作用于 RNA 的腺嘌呤脱氨酶，对双链区里的任何一个腺苷酸几乎都能下手。那么谷氨酸受体 mRNA 的编辑，为什么仍然只落在一个位点上？",
    "options": [
      "The enzyme reads a conserved sequence motif that flanks every edited adenosine",
      "Inosine forms only where the transcript has already been capped and polyadenylated",
      "A guide RNA pairs with the target and leaves the adenosine to be edited unpaired",
      "The deaminase works inside a complex whose RNA-binding regions pick the site"
    ],
    "answer": 3,
    "why_en": "The specificity is not in the enzyme. Editing takes place inside a complex holding the catalytic deaminase subunit together with additional RNA-binding regions, and those extra regions are what select the one target site. The unpaired-adenine trick belongs to the other mechanism entirely, where a guide RNA directs uracil insertion rather than deamination.",
    "why_cn": "特异性不在酶身上。RNA 编辑发生在一个复合体里，复合体既有具催化作用的脱氨酶亚基，又有附加的 RNA 结合区，正是这些附加区域把要编辑的那一个靶位点挑了出来。至于「未配对的腺嘌呤」，那是另一套机制的事：guide RNA 指导的是尿嘧啶插入，不是脱氨基。"
  },
  {
    "type": "mcq",
    "q_en": "Cytochrome b mRNA of Leishmania carries many uracil residues that no nuclear gene encodes. What decides how many go in, and where?",
    "q_cn": "利什曼原虫的细胞色素 b mRNA 上带着许多任何核基因都没有编码过的尿嘧啶残基。是什么决定了插进去几个、插在哪里？",
    "options": [
      "A cytosine deaminase converts C into U at every position the transcript exposes",
      "The spliceosome puts in one uracil for each intron it takes out of the transcript",
      "Each unpaired adenine on the guide RNA is a template position for one uracil",
      "The ribosome adds them as it hops, which is what keeps the reading frame intact"
    ],
    "answer": 2,
    "why_en": "A guide RNA pairs with the region to be edited over a considerable stretch and holds unpaired adenines that stand open as gaps in the duplex; each of those is a template position for one inserted uracil. Once the insertions are made the guide RNA dissociates and the mRNA goes on to be translated. Deamination is the other mechanism, and it substitutes a base rather than adding one.",
    "why_cn": "guide RNA 与被编辑区有相当长的一段互补配对，它自身留着一些未配对的腺嘌呤，在双链里空出一个个缺口；每一个缺口就是一个尿嘧啶的插入模板位。插入完成后 guide RNA 从 mRNA 上解离，mRNA 随即被拿去翻译。脱氨基是另一套机制，它替换碱基，而不是添碱基。"
  },
  {
    "type": "mcq",
    "q_en": "Programmed +1/-1 frameshifting and ribosome hopping are classed as recoding rather than as editing. On what grounds?",
    "q_cn": "核糖体程序性 +1/−1 移码和核糖体跳跃，被归为再编码（recoding）而不是编辑。依据是什么？",
    "options": [
      "The mRNA stays exactly as transcribed; only the grouping into codons changes",
      "They act on rRNA and on tRNA rather than on the mRNA that is being translated",
      "They insert and delete nucleotide residues, which deamination editing cannot do",
      "They happen in the nucleus before export, and editing happens in the cytoplasm"
    ],
    "answer": 0,
    "why_en": "Editing rewrites the sequence of the message — bases substituted, uridines inserted or deleted. Recoding leaves the sequence alone and changes the decoding rule: shifting the frame by one, or skipping 50 nucleotides in a single jump, means the ribosome cuts the same mRNA into codons differently from the way the DNA laid them out.",
    "why_cn": "编辑改写的是信息本身的序列——碱基被替换、尿苷被插入或删除。再编码不动序列，改的是解码规则：把读框移动一位，或者一次跳过 50 个核苷酸，意味着核糖体把同一条 mRNA 切成密码子的方式，与 DNA 当初排布它们的方式不一样了。"
  },
  {
    "type": "mcq",
    "q_en": "A finished protein is found to carry selenocysteine, the 21st amino acid. What had to happen at that codon during translation?",
    "q_cn": "一条做好的蛋白质被发现带着第 21 种氨基酸硒代半胱氨酸。翻译时，那个密码子上必须发生什么？",
    "options": [
      "A tRNA charged with selenocysteine read a codon vacated by a synonymous change",
      "The message was edited so that a UAA became a codon specifying an amino acid",
      "The ribosome hopped 50 nucleotides and skipped the terminator lying in between",
      "A codon that the table calls a stop was read through and taken as an amino acid"
    ],
    "answer": 3,
    "why_en": "Selenocysteine and pyrrolysine, the 21st and 22nd amino acids, are both encoded through terminator read-through, which is one of the forms of recoding alongside frameshifting and hopping. Editing a stop codon away is a different mechanism and would change the mRNA sequence; here the sequence is unchanged and the decoding rule is the thing that differs.",
    "why_cn": "第 21 和第 22 种氨基酸——硒代半胱氨酸与吡咯赖氨酸——都是通过终止子通读而编码的，这与移码、核糖体跳跃并列，同属再编码的表现方式。把终止密码子编辑掉是另一套机制，那会改变 mRNA 序列；而这里序列没变，变的是解码规则。"
  },
  {
    "type": "mcq",
    "q_en": "Human rRNA carries 106 methylation products and 95 pseudouridine products, and no conserved sequence marking those positions has been found. How is the modification still site-specific?",
    "q_cn": "仅人细胞的 rRNA 上就有 106 种甲基化产物和 95 种假尿嘧啶产物，而至今没有找到标记这些位点的特征性保守序列。化学修饰为什么仍然是位点特异的？",
    "options": [
      "The methylase reads a D box written into the rRNA itself at each such position",
      "A snoRNA base-pairs with the rRNA and so picks out the position to be modified",
      "Modification happens at random, and only correctly modified rRNA is exported",
      "Pseudouridine is made first, and its ring then marks the neighbouring methyl sites"
    ],
    "answer": 1,
    "why_en": "A snoRNA of only 70 to 100 nucleotides finds the address by base pairing: in yeast, U24 snoRNA pairs with a 14-base stretch of rRNA and one nucleotide inside that paired region ends up methylated. The D box is on the snoRNA, not on the rRNA, and is currently taken to be the methylase's recognition site — so one short RNA both finds the position and brings in the enzyme.",
    "why_cn": "一条只有 70~100 个核苷酸的 snoRNA 靠碱基配对找地址：酵母里 U24 snoRNA 与 rRNA 上 14 个碱基的一段配对，配对区内的某一个核苷酸最终带上了甲基。D box 长在 snoRNA 上、不在 rRNA 上，目前一般被认为是甲基化酶的识别位点——于是一条很短的 RNA 既找到了位置，又把落笔的酶带了过来。"
  }
];

/* ==================================================================== M-3-10 */
window.BIOLITE_Q["M-3-10"] = [
  {
    "type": "mcq",
    "q_en": "A transcript has been capped and polyadenylated, but one intron is still sitting in it. Where is that molecule, and why?",
    "q_cn": "一条转录本已经加了帽、也做了多腺苷酸化，但里面还留着一个内含子没切掉。这条分子此刻在哪里，为什么？",
    "options": [
      "In the cytoplasm, the cap and the poly(A) tail being the two transport signals",
      "Still inside the nucleus, since maturity is the qualification for being let out",
      "At the pore, where the spliceosome takes the last intron out as the RNA passes",
      "In the cytoplasm, and translated until the ribosome reaches a premature stop"
    ],
    "answer": 1,
    "why_en": "A eukaryotic mRNA goes to the cytoplasm once its maturation is complete: capped at the 5' end, cleared of its introns, polyadenylated — all three, and the crossing comes afterwards. An mRNA still being worked on is still inside the nucleus, which is the whole point of putting the processing before the door rather than after it.",
    "why_cn": "真核 mRNA 要等加工成熟之后才去细胞质：5′ 端加帽、去除内含子、多腺苷酸化——三件事都做完，然后才穿膜。一条还在被加工的 mRNA，人一定还在核里；把加工放在门之前而不是门之后，要的就是这个效果。"
  },
  {
    "type": "mcq",
    "q_en": "What does the export machinery actually read off an mRNA that arrives at the nuclear pore?",
    "q_cn": "一条 mRNA 到了核孔跟前，出核的那套机器实际读的是它身上的什么？",
    "options": [
      "The free 3' end of its poly(A) tail, which the transport receptor binds directly",
      "The GTP the RNA carries with it, hydrolysed by the pore as the molecule goes",
      "The set of proteins loaded onto it, whose signals a transport receptor reads",
      "Its intron-exon boundaries, counted to confirm that splicing has been finished"
    ],
    "answer": 2,
    "why_en": "A mature mRNA has to bind a group of proteins carrying the signal for transport across the nuclear membrane, and a transport receptor recognises those signals and guides the RNA through the pore. So which RNA is allowed to leave is decided by what the cell loaded onto it during processing — and once outside, those proteins dissociate and return to the nucleus for the next round.",
    "why_cn": "成熟 mRNA 必须结合一组携带跨核膜转运信号的蛋白质，转运受体识别这些信号，再引着这条 RNA 穿过核孔。于是「哪条 RNA 获准离开」取决于细胞在加工过程中给它装了什么；而到了细胞质，这批蛋白质就解离下来，回到核里参与下一轮运输。"
  },
  {
    "type": "mcq",
    "q_en": "Export of an mRNA is active transport, paid for by the hydrolysis of GTP. What does paying per molecule shipped buy the cell?",
    "q_cn": "mRNA 的出核是主动转运，由 GTP 水解供能。「每送走一条分子就付一次钱」，给细胞买来了什么？",
    "options": [
      "A rate high enough that transcription and translation can go on at the same time",
      "A pore wide enough to admit an mRNA still bound to its transport proteins",
      "A store of energy in the phosphodiester bonds, drawn on later in translation",
      "An action performed on each single mRNA, and therefore one it can withhold"
    ],
    "answer": 3,
    "why_en": "Because export costs a hydrolysed GTP per molecule, it is something the cell does to each mRNA one at a time rather than something that happens by diffusion — and an action performed deliberately is an action that can be refused. That is what the regulation by a whole series of proteins acts on. Storing the energy of phosphodiester bonds belongs to self-splicing, not to export.",
    "why_cn": "正因为每送出一条分子都要水解掉 GTP，出核就成了细胞对每一条 mRNA 逐个主动施行的动作，而不是靠扩散自己发生的事；既然是主动施行的，也就可以不施行。那一系列蛋白质的精细调控，作用的正是这一点。至于「把磷酸酯键的能量贮存起来」，那是自剪接的事，不是转运的事。"
  },
  {
    "type": "mcq",
    "q_en": "A bacterium has no step of this kind at all: its ribosomes start translating a message while it is still being transcribed. What does the eukaryotic arrangement make possible that the bacterial one does not?",
    "q_cn": "细菌根本没有这一步：信息还在被转录，它的核糖体就开始翻译了。真核这套安排让什么成为可能，而细菌那套做不到？",
    "options": [
      "A checkpoint between transcription and translation, made room for by the envelope",
      "A faster response, a message being translated while it is still being transcribed",
      "A place to add the cap and the poly(A) tail after the message has been read",
      "A pool of ribosomes held inside the nucleus until a message has finished maturing"
    ],
    "answer": 0,
    "why_en": "The nuclear envelope stands between where an mRNA is made and where ribosomes read it, so the two processes happen in separate compartments and one boundary has to be crossed. Separating them in space is what creates room for an inspection between them, and export through the pore is that inspection: RNA processed wrongly or already damaged is kept on the nuclear side, because the protein it would otherwise yield could endanger the cell.",
    "why_cn": "核膜横在「mRNA 被造出来的地方」和「核糖体读它的地方」之间，两个过程因此发生在分开的区室里，中间必须穿过一道界。把它们在空间上分开，才腾出了在中间设一道检查的余地；而经核孔的转运就是这道检查：加工错误或已受损伤的 RNA 被拦在核膜里侧，因为它一旦被翻译，出来的东西会危害细胞。"
  }
];
