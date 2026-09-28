/* Five spines that have nothing in common except why they are here.

   Transcribed from the scan of《现代分子生物学》第五版: printed pages 063–067
   (§2.6 转座, §2.7 SNP), 106–112 (§3.9 RNA 编辑/再编码/化学修饰, §3.10 mRNA 转运)
   and 270–274 (§7.5 固氮基因调控).

   WHY THESE FIVE SIT IN ONE FILE. They are the leftovers of the coverage survey.
   Every other section in this app belongs to a block — 基因功能研究技术, 真核基因表达
   调控 — where several neighbouring sections were all missing at once. These five are
   singletons: each one scored NEAR-ABSENT or THIN across all six existing trainers
   (pesbexplain, pesbpro, labhandbook, the biochemistry layer with its 68 leh_*.js
   files, exam30, jiri_bank) with no titled node anywhere naming the topic, and each
   one has neighbours on both sides that came back COVERED. There is no block to put
   them in, so they are collected here.

   THE ONE THAT NEEDS A CAVEAT. §7.5 came back COVERED on the first pass. Splitting
   the probe apart showed the four titled nodes it matched are all biochemistry nodes
   about the CHEMISTRY OF NITROGEN FIXATION — nitrogenase, the ATP cost, ammonia
   assimilation. Not one of them is about the REGULATION of the nif genes: NifA, σ⁵⁴,
   the NifL and NtrC cascades, the nodule. The verdict was wrong because the probe
   could not tell a pathway from the control of a pathway, and the section is kept.
   The nitrogenase steps below are the run-up; the section proper starts at §7.5.2.

   HOUSE STYLE — the seven rules of SPINE_SPEC.md, followed literally:
   1. STATE THE THING. No "not X, but Y".
   2. NO UNBOUND "THE".
   3. NAME THE ACTUAL OBJECTS. λ∷IS1 and a 38 bp inverted repeat; codon 2 153 of
      apolipoprotein B; R. trifolii on clover; 11 nmol/L of free oxygen in a nodule.
   4. NO COMMENTARY ABOUT THE TEXTBOOK.
   5. INTRODUCE EVERY NOUN in the same breath as its first use.
   6. STATE THE SCOPE, concretely.
   7. REACH BACK (`recall_en` / `recall_cn`).
   And every structural claim carries its consequence: an inverted repeat that is
   described and not used for anything has not finished.

   EXACTLY ONE bold run per field: the 极简 view renders that span alone, so it has
   to stand up with everything else hidden.

   WHAT IS NOT ON THE PAGE is flagged with `beyond: true` and a `beyondNote`. The
   transcript marks illegible handwriting ⟨?⟩; nothing has been invented to fill one. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== M-2-6 */
window.BIOLITE_SPINE["M-2-6"] = {
  /* Declared rather than left implicit. The first group is the molecular-biology
     furniture a reader of chapter 2 already has; the second group are ordinary
     English words that happen to also be glossary entries. Nothing load-bearing is
     parked here — IS, transposase, inverted repeat, target-site duplication,
     composite transposon, TnA, autonomous and nonautonomous element are all
     introduced in the prose at first use. */
  assumed: ["DNA", "RNA", "gene", "genome", "chromosome", "plasmid", "bacterium",
            "enzyme", "protein", "cell", "mutation", "operon", "promoter",
            "transcription", "translation", "base pair", "sequence", "virus",
            "DNA polymerase", "homologous recombination", "homologous",
            "recombination", "structural gene",
            "antibiotic", "yeast", "phenotype", "marker", "insertion", "domain",
            "orientation", "repeat"],
  nodeTitle_en: "Transposition — DNA that moves",
  nodeTitle_cn: "DNA 的转座",
  title_en: "A transposable element is a piece of DNA that moves to new positions in a genome, and **every move rearranges the genome: a gene is inactivated, a resistance gene is carried somewhere it has never been, or a whole stretch of chromosome is deleted or turned back to front**",
  title_cn: "可移位因子（transposable element）是一段能移动到基因组新位置上的 DNA，而**每一次移动都在重排基因组：一个基因被打掉、一个抗药性基因被带到它从未到过的地方，或者整整一段染色体被删除、被倒过来**",
  steps: [
    {
      en: "DNA transposition, also called 移位, is a rearrangement of genetic material carried out by a transposable element — a piece of DNA able to move from one position in a genome to another. Compared with homologous recombination, transposition happens at a much lower frequency. **Transposition still carries weight, because it accounts for many of the gene deletions and inversions found in bacteria, and because dropping a transposable element into a gene is a ready-made way of building a new mutant.**",
      cn: "DNA 的转座，也叫移位（transposition），是由可移位因子（transposable element，一段能从基因组的一个位置移到另一个位置的 DNA）介导的遗传物质重排现象。和同源重组比，转座发生的频率要低得多。**转座仍然分量很重：它能解释在细菌里发现的许多基因缺失和倒转现象，而且把一个可移位因子丢进某个基因，本来就是构建新突变体的现成手段。**",
      src: "现分 p.063"
    },
    {
      link_en: "and the name turns out to describe the wrong thing",
      link_cn: "而且这个名字其实描述错了对象",
      en: "The word transposition suggests that an element leaves its old address. In transposition one copy of the element commonly stays exactly where it was, and what turns up at the new site is a copy of it. **Transposition therefore depends on DNA replication, and that is the line between it and homologous recombination: recombination moves material from one place to another, transposition multiplies it.**",
      cn: "「转座」这个词听上去像是因子搬离了原来的地址。真实情况是：转座过程中，可移位因子的一个拷贝常常仍然留在原来位置上，在新位点上出现的仅仅是它的一个拷贝。**所以转座依赖于 DNA 的复制——这也正是它与同源重组的分界线：同源重组把材料从一处挪到另一处，转座则把材料变多。**",
      src: "现分 p.063"
    },
    {
      link_en: "so what exactly is the unit that does this",
      link_cn: "那么，干这件事的那个单位到底是什么",
      en: "A transposon (Tn) is the basic unit on chromosomal DNA that can replicate itself and change its position. Barbara McClintock found the first ones in the 1940s while doing genetics on maize, and decades of work since have shown transposons in every organism examined. **More than 35% of the human genome is transposon sequence, and most of that 35% is associated with disease.**",
      cn: "转座子（transposon，Tn）就是存在于染色体 DNA 上、可自主复制和位移的基本单位。Barbara McClintock 在 20 世纪 40 年代做玉米遗传学研究时最先发现了它们；此后几十年的研究表明，所有被检查过的生物体内都有转座子。**人类基因组中有 35% 以上的序列是转座子序列，而这 35% 里大部分与疾病相关。**",
      src: "现分 p.063"
    },
    {
      link_en: "they come in two classes, and the simpler one carries nothing at all",
      link_cn: "转座子分两大类，其中简单的那一类什么都不带",
      en: "Transposons fall into two classes: insertion sequences (IS) and composite transposons. An IS is the simplest kind — it carries no host gene whatever, only the protein that mediates its own movement — and it is a normal component of bacterial chromosome and plasmid DNA, a bacterial cell usually holding fewer than 10 of them. Insertions are numbered the way mutations are: λ∷IS1 says that one IS1 has landed inside the genome of λ, a virus that infects bacteria. **An IS can stand alone as an independent unit or sit inside a larger transposon as one of its components, and wherever it lands inside a gene, that gene is left mutant.**",
      cn: "转座子分为两大类：插入序列（insertional sequence，IS）和复合型转座子（composite transposon）。IS 是最简单的一类——它不含有任何宿主基因，只带着介导自身移动的蛋白质——而且它是细菌染色体或质粒 DNA 的正常组成部分，一个细菌细胞常带有少于 10 个 IS。插入用与突变相同的标准命名法编号：λ∷IS1 表示有一个 IS1 插入到了 λ 噬菌体（一种感染细菌的病毒）基因组内。**IS 既可以作为独立存在的单元，也可以作为其他更大的转座子的组成部分；而它不论落进哪个基因里，那个基因都会因此突变。**",
      src: "现分 p.064"
    },
    {
      link_en: "and its two ends are built so that one enzyme can find them",
      link_cn: "而它的两端，是为了让一种酶能找到它们而生的",
      en: "A common IS is a small piece of DNA of about 1 kb whose two ends are an inverted repeat — the same sequence read in opposite directions, so the two ends are mirror images of one another. Every known IS except IS1 carries a single open reading frame — one uninterrupted stretch that can be translated — with its translation start immediately next to the first inverted repeat and its stop at or near the second. That reading frame encodes the transposase — the enzyme that performs the move. **An IS is therefore exactly two things: a pair of ends the transposase recognises, and, between them, the instructions for making the transposase.** IS1 is the exception, carrying two separate reading frames, so only a frameshift read-through yields a functional transposase.",
      cn: "常见的 IS 都是很小的 DNA 片段（约 1 kb），两端是反向重复区（inverted repeat）——同一段序列被反向读一次，于是两端互为镜像。除 IS1 以外，所有已知的 IS 都只有一个开放读码框（一段不被打断、可以翻译的序列），翻译起始点紧挨着第一个反向重复区，终止点位于第二个反向重复区或其附近。这个读码框编码的正是转座酶 transposase——执行移动这一动作的酶。**于是一个 IS 恰好只有两样东西：一对能被转座酶识别的末端，以及夹在中间的、造出这个转座酶的说明书。**IS1 是例外，它含有两个分开的读码框，只有移码通读才能产生功能型转座酶。",
      src: "现分 p.064"
    },
    {
      link_en: "the move also leaves a mark on the host DNA, not only on the element",
      link_cn: "这一次移动还在宿主 DNA 上留下印记，而不只在因子身上",
      en: "Transposition copies a short stretch of the host target site, 4 to 15 base pairs of it, and that copy ends up on both sides of the newly inserted element as a direct repeat — the same sequence in the same orientation, one at each flank. A worked example runs ATGCA on the target, and after the move ATGCA appears twice, once on either side of the element. **Two signatures therefore mark a transposon insertion and are read straight off a sequence: an inverted repeat at each of the element's own ends, and, just outside those, a short direct repeat of host sequence.**",
      cn: "转座时往往复制宿主靶位点上的一小段 DNA（4~15 碱基对），这份拷贝最后出现在新插入因子的两侧，成为正向重复区（direct repeat）——同一段序列、同一方向，两端各一份。书上的例子是靶序列 ATGCA：转座之后，ATGCA 在因子两侧各出现一次。**于是有两个可以直接从序列上读出来的标志，共同标记一次转座子插入：因子自身两端各有一个反向重复序列，而紧靠这两端的外侧，各有一小段宿主序列的正向重复。**",
      src: "现分 p.064（图 2-40）"
    },
    {
      link_en: "and that duplication has a mechanical reason for existing",
      link_cn: "而这份重复之所以存在，有一个力学上的原因",
      recall_en: "the 4–15 bp direct repeat of the step above",
      recall_cn: "上一步那段 4~15 bp 的正向重复",
      en: "A transposase does not cut the host DNA straight across. It makes two cuts a few bases apart on the two strands, a staggered cut, so the element arrives joined to a single-stranded overhang on each side, and DNA polymerase then fills those overhangs in against the strand opposite. **Filling in a staggered cut writes the host target sequence twice, once on each side of the insert, which is why the duplication is short, and why its length is exactly the distance between the two cuts.**",
      cn: "转座酶并不把宿主 DNA 齐齐切断。它在两条链上错开几个碱基各切一刀——交错切口（staggered cut）——于是因子插进来时，两侧各连着一段单链突出末端；随后 DNA 聚合酶以对面那条链为模板，把这两段突出末端补齐。**把一个交错切口补齐，就等于把宿主靶序列写了两遍，插入片段两侧各一遍——这就是那份重复为什么很短，以及它的长度为什么恰好等于两个切口之间的距离。**",
      src: "现分 p.064（图 2-40）",
      beyond: true,
      beyondNote: "印刷页 064 与图 2-40 把「转座时复制靶位点 4~15 bp、形成两端正向重复」当作事实给出，但没有讲交错切口与补平这一机制。机制部分是标准内容，不在所引页面上。"
    },
    {
      link_en: "and how often does any of this happen",
      link_cn: "那这一切发生得有多频繁",
      en: "Each IS transposes at 10⁻³ to 10⁻⁴ per generation. The reverse event — the element excising again and restoring the original sequence — is far rarer, at 10⁻⁶ to 10⁻¹⁰ per generation. **Insertion beats its own reversal by two to seven orders of magnitude, so a transposon insertion is a mutation that in practice never undoes itself, which is what makes it usable as a stable genetic marker.**",
      cn: "每个 IS 的转座频率一般是 10⁻³~10⁻⁴/世代。反向事件——因子重新切出去、把原序列恢复回来——则低得多，为 10⁻⁶~10⁻¹⁰/世代。**插入比它自己的回复高出两到七个数量级，所以一次转座插入是一个实际上不会自行撤销的突变；这正是它能被当作稳定遗传标记来用的原因。**",
      src: "现分 p.064"
    },
    {
      link_en: "put two IS on either side of something useful and you get the second class",
      link_cn: "把两个 IS 放在某个有用东西的两侧，就得到了第二类转座子",
      recall_en: "the second of the two classes named four steps up",
      recall_cn: "上面第四步说的两大类里的第二类",
      en: "A composite transposon is a transposon carrying host genes, typically drug-resistance genes, with two identical or highly homologous IS as its two flanks. That layout says how one arises: an IS inserting at each end of a functional gene makes the whole span between them mobile. **Once a composite transposon exists its two IS can no longer move by themselves, because their function has been modified so that they act only on the composite — and the transposition of the whole unit is determined and regulated by those same IS.**",
      cn: "复合型转座子是一类带有某些抗药性基因（或其他宿主基因）的转座子，其两翼是两个相同或高度同源的 IS。这个摆法本身就说明了它是怎么来的：IS 插入到某个功能基因的两端时，夹在中间的整段就变得可以移动了。**复合型转座子一旦形成，两端的 IS 就不能再单独移动了，因为它们的功能已被修饰成只作用于这个复合体——而整个单元的转座能力，恰恰是由这两个 IS 决定和调节的。**",
      src: "现分 p.064（图 2-41）"
    },
    {
      link_en: "and one family of large transposons manages the same trick with no IS at all",
      link_cn: "而有一类体积庞大的转座子，根本不用 IS 也做成了同一件事",
      en: "The TnA family is a group of large transposons, over 5 000 base pairs, whose ends carry no IS. Each TnA carries three genes: one encoding β-lactamase (AmpR), the enzyme that destroys ampicillin, and two more that transposition itself requires, a transposase and a resolvase. **Every TnA transposon carries a 38 bp inverted repeat at each flank, and that pair of repeats is all the transposase needs in order to recognise its own ends, so a 5 kb block containing an antibiotic-resistance gene travels as one piece.**",
      cn: "TnA 家族是一类体积庞大（5 000 碱基对以上）、两端不带 IS 的转座子。每个 TnA 带有 3 个基因：一个编码 β-内酰胺酶（AmpR，即分解氨苄青霉素的那个酶），另两个是转座作用所必需的——转座酶与解离酶。**所有 TnA 类转座子两翼都带有 38 bp 的反向重复序列，而转座酶要认出自己的两端，需要的就只是这一对重复——于是一个 5 kb 大小、内含抗生素抗性基因的整块，就能整体搬家。**",
      src: "现分 p.065（图 2-42）"
    },
    {
      link_en: "all of that was bacterial; the same architecture turns up in maize",
      link_cn: "以上都是细菌里的事；同一套结构在玉米里同样出现",
      en: "Transposons occur in prokaryotic cells such as E. coli, in lower eukaryotic cells such as yeast, and in higher eukaryotes: maize and Drosophila each carry several transposons that are distributed at random through the genome and can move repeatedly. Almost every higher organism examined has sequences of this kind, and the genome of a higher eukaryote may well be more fluid than a prokaryotic one. Geneticists described maize 控制因子 — controlling factors, elements deciding somatic variation — early in the 20th century, and **McClintock's work on the Ac-Ds system at Cornell and Cold Spring Harbor broke the idea that genes sit at fixed places on a chromosome**, an idea confirmed at the molecular level only 30 years later, when she was given the Nobel Prize in Physiology or Medicine.",
      cn: "转座子既存在于原核细胞（如大肠杆菌）和低等真核细胞（如酵母）中，也存在于高等真核生物：玉米和果蝇里都发现了多个在基因组内随机分布、并且能重复移动的转座子。几乎所有被检查过的高等生物基因组中都有这类序列，而且高等真核生物基因组的流动性可能比原核生物还要大些。**早在 20 世纪初，遗传学家就已发现玉米中存在决定体细胞变异的「控制因子」（其实就是转座子）；McClintock 在康奈尔大学和冷泉港实验室对 Ac-Ds 系统所做的工作，打破了基因固定排列于染色体上的概念——这个概念 30 多年后才在分子水平上得到证实，并使她获得诺贝尔生理学或医学奖。**",
      src: "现分 p.065"
    },
    {
      link_en: "and the maize system splits into an element that can move and one that has to be helped",
      link_cn: "而玉米这套系统分成两半：一个自己能动，一个必须有人帮",
      en: "Maize controlling factors form two classes. An autonomous element, of which Ac is the example, can excise itself and transpose on its own. A nonautonomous element, of which Ds is the example, is stable when it is by itself and cannot transpose at all; it gains the ability to transpose as soon as an autonomous element of the same family is present in the genome, and then behaves like that element. **What an autonomous element supplies is a trans-acting protein, the transposase, and it supplies it only inside its own family: an Ac serves the Ds elements of its family and does nothing at all for a different family's.** Maize transposons carry the same signature as an IS, an inverted repeat at each flank of the element and two short direct repeats at the target insertion site.",
      cn: "玉米的控制因子分成两大类。自主性因子（autonomous element，代表是 Ac）具有自主剪接和转座的功能。非自主性因子（nonautonomous element，代表是 Ds）单独存在时是稳定的，根本不能转座；一旦基因组中存在与它同家族的自主性因子，它就获得转座能力，并表现得与那个因子一样。**自主性因子提供的东西是一个反式作用蛋白，也就是转座酶，而且它只在自己这一家族内部提供：一个 Ac 服务于本家族的 Ds，对另一个家族的则毫无作用。**玉米转座子带着与 IS 相同的标志：转座子两翼各有一个反向重复序列，靶 DNA 插入位点上有两个短的正向重复序列。",
      src: "现分 p.065（Ac、Ds 的英文全称 activator / dissociation 见该页手写批注）"
    },
    {
      link_en: "so what does a genome actually suffer from all this",
      link_cn: "那么，基因组究竟因此承受了什么",
      en: "Transposition has four genetic consequences, and the first two land at the insertion site. Any IS or Tn inserting inside a gene causes an insertion mutation, and one that inserts in the front half of an operon can cause a polar mutation, in which the structural genes in the back half of that operon are switched off as well. **A transposon carrying a drug-resistance gene does two things in one move: it inactivates the target sequence it landed in, and at the same moment it makes that site drug-resistant — which is how a resistance gene arrives at a place it has never been.**",
      cn: "转座的遗传学效应有四条，头两条都落在插入位点上。任何 IS 或 Tn 插进某个基因内部，都会引起插入突变；如果插入位于某操纵子的前半部分，还可能造成极性突变，导致该操纵子后半部分的结构基因也一并表达失活。**带有抗药性基因的转座子一次动作办两件事：既在它落进去的靶序列上造成插入突变，同时又使这个位点获得抗药性——一个抗性基因就是这样到达它从未到过的地方的。**",
      src: "现分 p.065, p.066"
    },
    {
      link_en: "the third consequence needs two copies of the element, and replicative transposition supplies them",
      link_cn: "第三条效应需要因子有两个拷贝，而复制型转座恰好提供了它们",
      recall_en: "one copy staying behind, from the second step of this spine",
      recall_cn: "本条链第二步说的「一个拷贝留在原位」",
      en: "The third consequence is a chromosomal aberration, and it appears when replicative transposition puts a second copy of the element close to the original one in the host DNA. Two copies of the same sequence in one region are a substrate for homologous recombination between them, and the outcome is decided by which way the two copies point. **Recombination between two copies in the same orientation deletes the host chromosomal DNA lying between them; recombination between two copies in opposite orientations inverts that same stretch instead.**",
      cn: "第三条效应是染色体畸变，它出现在复制型转座把因子的第二个拷贝放到宿主 DNA 上原有位点附近的时候。同一区域内的两份相同序列，本身就是两者之间发生同源重组的底物，而结局由这两份拷贝的方向决定。**同源重组若发生在两个正向重复的转座区之间，就导致夹在中间的宿主染色体 DNA 缺失；若发生在两个反向重复的转座区之间，同一段序列则被倒位。**",
      src: "现分 p.066"
    },
    {
      link_en: "and the fourth consequence is only visible on an evolutionary timescale",
      link_cn: "第四条效应只有在进化的时间尺度上才看得见",
      en: "The fourth consequence is evolutionary. Transposition brings together genes that had been sitting far apart on a chromosome and assembles them into a single operon or expression unit. **Genes that were never neighbours end up transcribed and regulated as one unit, which can produce a gene with a biological function neither parent sequence had, and a protein molecule that did not previously exist.**",
      cn: "第四条效应是进化上的。转座作用把染色体上原本相距甚远的基因组合到一起，构建成一个操纵子或表达单元。**原来从不相邻的基因，最终被当作一个单位一起转录、一起调控——这可能产生具有全新生物学功能的基因，以及此前并不存在的蛋白质分子。**",
      src: "现分 p.066"
    }
  ]
};

/* ===================================================================== M-2-7 */
window.BIOLITE_SPINE["M-2-7"] = {
  /* Nothing load-bearing is parked here: SNP, allele, transition, transversion,
     haplotype, cSNP/pSNP/rSNP, tag SNP and every detection method are introduced
     in the prose at first use. */
  assumed: ["DNA", "RNA", "gene", "genome", "chromosome", "cell", "protein",
            "enzyme", "nucleotide", "base", "base pair", "sequence", "mutation",
            "amino acid", "codon", "translation", "transcription", "coding region",
            "PCR", "electrophoresis", "sequencing", "restriction enzyme",
            "polymerase", "marker", "population", "allele", "locus",
            "cytosine", "thymine", "guanine", "adenine", "methylation",
            "methylated", "deamination", "polymorphism", "genotype",
            "susceptibility", "hybridisation", "individual", "purine",
            "pyrimidine", "amino group", "methyl group", "chromatography",
            "target"],
  nodeTitle_en: "SNPs — one base of difference, and what it is good for",
  nodeTitle_cn: "SNP 的理论与应用",
  title_en: "Two human genomes differ at one base in every few hundred, and **because those single-base differences are inherited in blocks, a few tag positions describe most of the variation in a population — which is what turns a one-letter difference into a map**",
  title_cn: "两个人的基因组每几百个碱基就差一个碱基，而**正因为这些单碱基差异是成块遗传的，少数几个标签位点就足以描述一个群体里的大部分变异——这就是一个「一个字母的差别」变成一张地图的过程**",
  steps: [
    {
      en: "SNP is short for single nucleotide polymorphism, 单核苷酸多态性: a polymorphism in genomic DNA caused by the mutation of one single nucleotide, A, T, C or G. Each base type found at the same position on a chromosome is one allele of that position. **A SNP is the simplest and the commonest form of polymorphism in a genome, and it has very high genetic stability** — which is why it became the third generation of genetic marker, after restriction fragment length polymorphism (RFLP) and the microsatellite markers (SSR).",
      cn: "SNP 是 single nucleotide polymorphism 的缩写，中文叫单核苷酸多态性：指基因组 DNA 序列中由于单个核苷酸（A、T、C 和 G）的突变而引起的多态性。染色体 DNA 同一位置上的每一种碱基类型，叫做一个等位位点。**SNP 是基因组中最简单、最常见的多态性形式，而且遗传稳定性很高——这正是它继限制性片段长度多态性（RFLP）和微卫星标记（SSR）之后，成为第三代遗传标记的原因。**",
      src: "现分 p.066"
    },
    {
      link_en: "and the single base does not change at random",
      link_cn: "而这个单碱基的改变并非随机",
      en: "The change at a SNP position may be a transversion, which is a purine swapped for a pyrimidine or the reverse, or a transition, which is a purine swapped for the other purine or a pyrimidine for the other pyrimidine. **Transitions make up roughly two-thirds of all SNPs, so the substitutions possible at a site are far from equally likely and one class of change dominates the whole catalogue.**",
      cn: "SNP 位点上的变化可能是颠换（transversion），即嘌呤换成嘧啶或反过来；也可能是转换（transition），即嘌呤换成另一种嘌呤、嘧啶换成另一种嘧啶。**转换约占 SNP 总量的 2/3 左右，所以一个位点上可能发生的替换远非等概率，整个目录被其中一类改变主导着。**",
      src: "现分 p.066"
    },
    {
      link_en: "and the reason for that bias is a chemical one",
      link_cn: "而这种偏倚的原因是化学上的",
      en: "The cytosine residue of a CpG dinucleotide — a C followed immediately by a G along one strand — is the most mutable position in the human genome. Most of those cytosines carry a methyl group, and a methylated cytosine deaminates spontaneously, losing its amino group and becoming a thymine. **A methylated CpG is a C that turns into a T on its own, with no replication error and no damaging agent involved, and repeating that across a genome is what produces the two-thirds excess of transitions.**",
      cn: "CpG 二核苷酸（同一条链上一个 C 紧跟着一个 G）上的胞嘧啶残基，是人类基因组中最易发生突变的位点。这些胞嘧啶大多数是甲基化的，而甲基化的胞嘧啶会自发地脱去氨基，变成胸腺嘧啶。**一个甲基化的 CpG 就是一个会自己变成 T 的 C——不需要复制出错，也不需要任何损伤因子；把这件事在整个基因组上重复一遍，就得到了那多出来的三分之二转换。**",
      src: "现分 p.066（该页手写批注：C 脱氨成 T，在 CpG 岛）"
    },
    {
      link_en: "so how many of them does one person carry",
      link_cn: "那么一个人身上到底带着多少个",
      en: "SNPs are spread right across the human genome at a frequency of about 1% or higher. The estimate is one SNP in every 300 to 1 000 base pairs of human DNA. **One human individual therefore carries 3 million to 10 million SNPs, which is the raw material every population study and every disease-association study below works from.**",
      cn: "SNP 广泛存在于人类基因组中，发生频率约为 1% 或更高。据估计，人类 DNA 中每 300~1 000 个碱基对就有一个 SNP。**于是一个人类个体身上携带着 300 万~1 000 万个 SNP——下面所有群体研究和疾病关联研究，用的都是这批原料。**",
      src: "现分 p.066"
    },
    {
      link_en: "and they travel to the next generation in groups, not one at a time",
      link_cn: "而它们是成组传给下一代的，不是一个一个走的",
      en: "A haplotype, 单倍型, is a group of linked SNP alleles lying in one region of a chromosome. Alleles at neighbouring SNP positions tend to be passed to the offspring as a single block. One worked case has SNP1 with alleles A and G and SNP2 with alleles G and T close together on the same chromosome, so the chromosome pair shows only two of the four arithmetically possible combinations. **Inheritance in blocks is what makes a genome-wide SNP study finite: typing one SNP inside a block reports on every other SNP in the same block.**",
      cn: "单倍型（haplotype）就是位于染色体上某一区域内、一组相互关联的 SNP 等位位点。相邻 SNP 的等位位点倾向于以一个整体遗传给后代。书上的例子是同一条染色体上靠得很近的 SNP1（等位位点 A 与 G）和 SNP2（等位位点 G 与 T），于是这一对染色体上只出现算术上四种组合中的两种。**成块遗传，正是全基因组 SNP 研究得以有限的原因：测一个块里的一个 SNP，就等于报告了同一块里其余所有 SNP。**",
      src: "现分 p.066（图 2-43）"
    },
    {
      link_en: "where a SNP sits decides what it can do",
      link_cn: "一个 SNP 坐在哪里，决定了它能干什么",
      en: "By position in the genome SNPs split three ways: cSNP is a SNP in a gene coding region, pSNP is a SNP in a gene regulatory region, and rSNP is a random SNP in the non-coding sequence between genes. The variation rate inside a coding region is only one-fifth of the rate in the sequence around it. **Coding sequence is the most conserved of the three compartments, so cSNPs are markedly fewer than either of the other two classes — the positions likeliest to matter are the positions rarest to find.**",
      cn: "按在基因组中的分布位置，SNP 分为三类：cSNP 是位于基因编码区的 SNP，pSNP 是位于基因调控区的 SNP，rSNP 是位于基因间随机非编码区的 SNP。编码区内的变异率仅占周围序列的 1/5。**三块区域里编码区最保守，所以 cSNP 的总量显著少于另外两类——最可能有影响的位点，恰好是最难找到的位点。**",
      src: "现分 p.066"
    },
    {
      link_en: "and inside the coding class the split goes one level further",
      link_cn: "而在编码区这一类里，还要再分一层",
      en: "A synonymous cSNP is one whose change to the coding sequence leaves the amino acid sequence of the translated protein untouched, the mutated base and the original base meaning the same thing. A non-synonymous cSNP is one whose base change does alter the protein sequence, and with it the protein function. A pSNP, sitting in a regulatory region, alters how much of the gene is expressed. **Non-synonymous cSNPs and pSNPs are the two classes that carry weight in disease: one alters what the protein is, the other alters how much of it there is.**",
      cn: "同义 cSNP（synonymous cSNP）指的是：它所导致的编码序列改变，不影响翻译出来的蛋白质的氨基酸序列，突变碱基与未突变碱基的含义相同。非同义 cSNP（non-synonymous cSNP）指的是：碱基序列的改变会使以其为蓝本翻译的蛋白质序列发生改变，从而影响蛋白质的功能。而位于基因调控区的 pSNP，改变的是基因表达量的多少。**非同义 cSNP 和 pSNP 是在疾病发生发展上真正有分量的两类：一类改变蛋白质是什么，另一类改变蛋白质有多少。**",
      src: "现分 p.066, p.067"
    },
    {
      link_en: "and finding a new one is a different job from typing one already known",
      link_cn: "而「发现一个新的」和「给一个已知的定型」是两件不同的工作",
      en: "The traditional way to detect a SNP borrows existing techniques: RFLP, PCR single-strand conformation polymorphism (PCR-SSCP), capillary electrophoresis, and denaturing high-performance liquid chromatography (DHPLC). DNA sequencing remains the commonest way to obtain a new SNP. Genotyping is the separate job — taking SNPs already held in a database and measuring their sequence and their frequency in a particular population, by gene chip, Taqman, molecular beacon or pyrosequencing. **Discovery and genotyping answer different questions: one asks where the variable positions are, the other asks which allele this person carries at a position already known.**",
      cn: "传统的 SNP 检测方法是采用已有技术：RFLP、PCR-单链构象多态性（PCR-SSCP）、毛细管电泳，以及变性高效液相色谱（DHPLC）。而目前国际上最常见的获得新 SNP 的办法，仍然是 DNA 测序法。基因型分型（genotyping）则是另一件事——利用数据库中已有的 SNP，研究特定人群中的序列和发生频率，手段包括基因芯片、Taqman、分子导标（molecular beacon）和焦磷酸测序法（pyrosequencing）。**发现与分型回答的是不同的问题：一个问「可变的位点在哪里」，另一个问「在一个已知位点上，这个人带的是哪个等位位点」。**",
      src: "现分 p.067"
    },
    {
      link_en: "and the block structure is what made a whole-species map affordable",
      link_cn: "而正是成块的结构，让一张覆盖全物种的图谱变得负担得起",
      recall_en: "the haplotype block from four steps up is the thing being mapped",
      recall_cn: "上面第四步那个单倍型块，正是这里要绘制的对象",
      en: "Most chromosomal regions carry only a few common haplotypes, and those few account for most of the polymorphism between one person and another in a population. A region may hold very many SNP positions, and yet a handful of tag SNPs chosen from it will still report most of the genetic polymorphism pattern of that whole region. **The International HapMap Project started in October 2002 to map exactly that: more than 1.5 million SNPs have been precisely located on the chromosomes**, and 269 DNA samples from 4 different human populations have been genotyped against them, the next density target being one SNP per 500 bp.",
      cn: "大多数染色体区域只有少数几个常见的单体型，而这几个就代表了一个群体中人与人之间的大部分多态性。某一个区域可能有很多 SNP 位点，但只用从中选出的少数几个标签 SNP，就能提供该区域内大多数的遗传多态性模式。**2002 年 10 月正式启动的国际人类基因组单倍型图计划（HapMap 计划），要绘制的正是这张图：目前已有超过 150 万个 SNP 被精确定位于各条染色体上，并已用来自 4 个不同人种的 269 份 DNA 样品做了基因型分型；下一期的目标是使总密度达到每 500 bp 一个 SNP。**",
      src: "现分 p.067"
    },
    {
      link_en: "and with a map in hand, two questions become answerable",
      link_cn: "有了这张图，两个问题就变得可以回答了",
      en: "The logic of an association study is one sentence: when the frequency of a genetic marker is clearly higher among patients than among non-patients, that marker is likely to be linked to the disease. Run over metabolic pathways and millions of SNPs, that has already yielded susceptibility genes for hypertension, asthma, rheumatoid arthritis, lung cancer and prostate cancer, and a finished haplotype map is meant to do the same for diabetes, cancer, heart disease and stroke. **Because a set of SNPs describes the genetic differences between individuals, the same catalogue supports individualised prescribing**: correlate SNPs with one person's sensitivity or tolerance to a drug, and a treatment plan can be attached to a genotype.",
      cn: "关联分析的逻辑只有一句话：当一个遗传标记的频率在患者中明显超过非患者时，就表明该标记可能与这种疾病相关。把它跑遍大量代谢通路和上百万个 SNP，已经找到了高血压、哮喘、类风湿关节炎、肺癌、前列腺癌等的易感基因；而一张绘制完成的单倍型图，要为糖尿病、癌症、心脏病、中风等复杂疾病做同样的事。**由于一套 SNP 就描述了个体之间的遗传差异，同一份目录也支撑着个性化用药：把 SNP 与某个人对药物的敏感或耐受关联起来，治疗方案就能挂在基因型上。**",
      src: "现分 p.067"
    }
  ]
};
