/* Merged spines — protein synthesis. 速通简洁版, ONE spine per TOPIC.

   Three topics held ten node spines between them (129 steps); they come out here as
   three chains of sixteen.

   The merge rule: the Lehninger telling is the backbone. Czech material is folded in
   only where it ADDS — a number, a name the exam uses, a worked case, a mechanism the
   other account does not carry at all. Where both say the same thing, the Lehninger
   sentence stands. Where they disagree, the better-supported side is kept and the
   thing that settles it is said out loud. Every step keeps a `src` naming the pages it
   was read from, and a step built from both carries both, separated by a middle dot.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------- 遗传密码 ---- */
window.BIOLITE_SPINE["key:genetic-code"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "mRNA", "tRNA", "rRNA", "ribosome", "hydrogen bond",
            "purine", "pyrimidine", "mitochondria", "liver", "intestine", "yeast",
            "transcription", "translation", "nucleus", "cytoplasm", "complementary",
            "base pairing", "polypeptide", "peptide bond", "virus", "retrovirus",
            "protist", "phenylalanine", "proline", "lysine", "threonine",
            "histidine", "methionine", "tryptophan", "isoleucine", "leucine",
            "serine", "arginine", "valine", "glutamine", "glycine", "alanine",
            "adenosine", "cytidine", "uridine", "inosine", "hypoxanthine",
            "molecular weight", "template", "helix", "hairpin"],
  nodeTitle_en: "The genetic code",
  nodeTitle_cn: "遗传密码",
  title_en: "Why the code has to be read in threes, how each of its 64 words was identified, and the places a real cell reads it differently from the table",
  title_cn: "为什么密码必须三个一读、它的 64 个词分别是怎么被认出来的，以及真实细胞在哪些地方读得和密码表不一样",
  steps: [
    {
      en: "Information leaves a gene in two named stages. Transcription is the copying of one DNA strand into RNA; translation is the reading of that RNA into a chain of amino acids. Those two operations are not of the same kind. Transcription rewrites nucleotides as nucleotides, so every base in the DNA has one base in the RNA standing for it and nothing has to be looked up anywhere. Translation rewrites nucleotides as amino acids, and there are four kinds of base against the twenty kinds of amino acid found in natural proteins. **Only translation changes the alphabet, so only translation needs a code** — a fixed rule stating which group of bases stands for which amino acid — and this whole chain is that rule, how it was found, and where real cells depart from it.",
      cn: "信息离开一个基因要经过两个各有其名的阶段。转录是把 DNA 的一条链抄成 RNA；翻译是把这条 RNA 读成一串氨基酸。这两个操作不属于同一类。转录把核苷酸改写成核苷酸，所以 DNA 上每一个碱基在 RNA 上都有一个碱基与它对应，什么都不用去查。翻译把核苷酸改写成氨基酸，而天然蛋白质里是四种碱基对二十种氨基酸。**只有翻译换了字母表，所以也只有翻译需要一套密码 —— 一条规定「哪一组碱基代表哪一个氨基酸」的固定规则 —— 而这整条主线讲的就是这条规则、它是怎么被找出来的，以及真实细胞在哪里偏离它。**",
      src: "§4.2.1, p.92 · A p.1006"
    },
    {
      link_en: "so how many bases make one word?",
      link_cn: "那么一个词由几个碱基组成？",
      en: "Four kinds of base taken one at a time give four combinations; taken in pairs they give sixteen. Both are fewer than twenty, so neither can name every amino acid. Taken in threes they give 4³ = 64. A group of three bases that specifies one amino acid is called a codon. **Sixty-four words have to carry twenty-one meanings — twenty amino acids and stop — so the code was forced to be redundant** before anyone had identified a single one of its words, and every later property of the code follows from that surplus.",
      cn: "四种碱基一个一个地取，只有 4 种组合；两个一组地取，16 种。两者都少于二十，都点不完全部氨基酸。三个一组地取，得到 4³ = 64 种。指定一个氨基酸的这样一组三个碱基，叫一个密码子（codon）。**六十四个词要承载二十一种含义 —— 二十种氨基酸加一个「停」—— 所以早在任何人认出它的第一个词之前，这套密码就已经被逼成冗余的了；而密码此后的每一条性质，都是这份「多出来」的后果。**",
      src: "A p.1006 · §4.2.1, pp.93–94"
    },
    {
      link_en: "and three properties of how those triplets are read have to be fixed before anything else makes sense",
      link_cn: "而在别的都说得通之前，必须先把「这些三联体怎么读」的三条性质定下来",
      en: "The reading is nonoverlapping: no nucleotide belongs to two codons at once, so neighbouring codons put no constraint on each other. There is no punctuation between codons; a message is simply a run of contiguous triplets. And the reading starts from a defined point, runs in one direction, and takes groups of equal size, which together fix a reading frame — one particular codon is the first, and every third nucleotide after it begins a new one. **A sequence can be cut into triplets starting at its first, second or third base, so any single strand of DNA or RNA has three possible reading frames**, and normally only one of the three encodes a protein.",
      cn: "读取是不重叠的（nonoverlapping）：没有任何一个核苷酸同时属于两个密码子，所以相邻密码子彼此不构成约束。密码子之间没有标点；一条信息就是一串首尾相接的三联体。而读取从一个确定的起点开始、沿一个方向、按大小相等的组进行，这三条合起来定下阅读框（reading frame）—— 某一个特定的密码子是第一个，此后每隔三个核苷酸开始一个新的。**一条序列可以从第 1、第 2 或第 3 个碱基起切成三联体，所以任何单链 DNA 或 RNA 都有三个可能的阅读框，而通常只有其中一个编码蛋白。**",
      src: "A p.1007 · §4.2.1, p.93"
    },
    {
      link_en: "and the group size was proved to be three before a single codon's meaning was known, by breaking the frame",
      link_cn: "而「一组三个」这件事，是在任何一个密码子的含义被认出之前、靠打断阅读框证明的",
      en: "Add or remove one base pair in a gene and every amino acid after that point changes, because the frame has shifted and each following triplet is read one letter off. Add or remove three, and the remaining triplets are intact: one residue is gained or lost and the rest of the protein is normal. Combining an insertion with a deletion a short distance away damages the residues between the two and restores the correct sequence downstream. **A group size of three is the only one that fits all three results at once, which is how the size of a codon was settled genetically** — by damaging the frame and then repairing it — years before any word in the code had been read.",
      cn: "在一个基因里增加或删除一个碱基对，那一点之后的每一个氨基酸都会变，因为阅读框移位了，之后的每个三联体都错开一个字母。增加或删除三个，剩下的三联体完好无损：多一个或少一个残基，蛋白的其余部分正常。把一个插入与附近不远处的一个缺失合起来，会破坏两者之间的残基，而下游序列恢复正常。**只有「三个一组」能同时符合这三个结果 —— 密码子的大小就是这样从遗传学上定下来的，靠的是先把阅读框弄坏、再把它修回来，而这比密码里任何一个词被读出来还早了好几年。**",
      src: "A p.1007"
    },
    {
      link_en: "so much for the shape of the code; now the meanings, attacked three ways, none of them sufficient alone",
      link_cn: "密码的形状说完了；接下来是含义 —— 从三条路进攻，每一条单独都不够",
      en: "Nirenberg and Matthaei, in 1961, incubated poly(U) — an RNA of nothing but uridylate — with an E. coli extract, GTP, ATP, and the twenty amino acids split across twenty tubes, each tube holding a different radioactive one. Radioactive polypeptide appeared in exactly one tube. Poly(C) then gave polyproline and poly(A) gave polylysine. Polyguanylate gave nothing at all, because a guanine-rich strand folds four strands together into a tetraplex, which is a four-stranded structure a ribosome cannot bind. **The tube that went radioactive was the phenylalanine tube, and that one result fixed the first word of the code: UUU is phenylalanine.**",
      cn: "1961 年，Nirenberg 与 Matthaei 把 poly(U)（一条只由尿苷酸构成的 RNA）与大肠杆菌抽提物、GTP、ATP，以及分装在二十支试管里、每管放一种带放射性的氨基酸的那二十种氨基酸一起温育。放射性多肽只在其中一支试管里出现。随后 poly(C) 给出聚脯氨酸，poly(A) 给出聚赖氨酸。聚鸟苷酸什么也没给出，因为富含鸟嘌呤的链会把四条链折在一起形成四链体（tetraplex），那是一种核糖体结合不上去的四链结构。**变成放射性的那一支是苯丙氨酸管，而这一个结果就定下了密码的第一个词：UUU 是苯丙氨酸。**",
      src: "A p.1007",
      see: [{ id: "L-8-2-1", en: "the G-tetraplex, and what else it is used for", cn: "G-四链体，以及它还被用来做什么" }]
    },
    {
      link_en: "where did those defined polymers come from? From an enzyme that needs no template — which is also why they could only go so far",
      link_cn: "这些成分确定的聚合物是哪来的？来自一个不需要模板的酶 —— 而这也正是它们只能走到这一步的原因",
      en: "Polynucleotide phosphorylase, found by Severo Ochoa, polymerises ribonucleoside diphosphates into RNA with no template at all, and the base composition of the product simply mirrors the ratio fed in: five parts ADP to one part CDP gives a polymer about five-sixths adenylate, with the bases in random order. Feeding known mixtures and comparing expected against observed incorporation therefore assigned a base composition to most amino acids. **What that method could not give is the order of the three bases, and order is exactly what a codon consists of**, so composition alone left every triplet ambiguous and a second method was needed.",
      cn: "多核苷酸磷酸化酶（polynucleotide phosphorylase）由 Severo Ochoa 发现，它完全不用模板就把核糖核苷二磷酸聚合成 RNA，而产物的碱基组成只是简单地反映投料比例：五份 ADP 配一份 CDP，得到的聚合物约六分之五是腺苷酸，碱基顺序随机。于是投喂已知配比、再比较预期与实测的掺入频率，就给多数氨基酸定出了碱基组成。**这个办法给不出的是那三个碱基的顺序，而顺序恰恰就是一个密码子的全部内容 —— 所以光有组成，每个三联体都还是含糊的，必须再来第二种方法。**",
      src: "A p.1007"
    },
    {
      link_en: "second method: make the ribosome itself report which tRNA a triplet calls for",
      link_cn: "第二种方法：让核糖体自己报出某个三联体召来的是哪个 tRNA",
      en: "Nirenberg and Leder found in 1964 that an isolated ribosome binds one specific aminoacyl-tRNA — a tRNA already loaded with its amino acid — when the matching messenger is present, and that a messenger only three nucleotides long is enough. Poly(U) with Phe-tRNA binds; poly(U) with any other aminoacyl-tRNA does not. Running every triplet against every charged tRNA assigned 54 of the 64. **It stopped at 54 because some triplets bound nothing and others bound more than one thing, so reading one triplet at a time could not finish the table on its own either.**",
      cn: "1964 年 Nirenberg 与 Leder 发现，只要有相应的信使在场，分离出来的核糖体就会结合某一种特定的氨酰-tRNA（aminoacyl-tRNA）—— 即已经装上自己氨基酸的 tRNA —— 而且信使只要三个核苷酸长就够了。poly(U) 加 Phe-tRNA 会结合；poly(U) 加其他任何氨酰-tRNA 都不结合。把每个三联体对每一种带电荷的 tRNA 跑一遍，认出了 64 个中的 54 个。**它停在 54，是因为有些三联体什么也不结合、另一些结合了不止一种 —— 所以「一次读一个三联体」这条路也没能靠自己把整张表读完。**",
      src: "A p.1008"
    },
    {
      link_en: "third method: build an RNA whose sequence, and not merely its composition, is known",
      link_cn: "第三种方法：造一条不只组成已知、连顺序都已知的 RNA",
      en: "Khorana developed chemistry for synthesising RNA with a repeating unit of two to four bases. (AC)ₙ — ACACAC… — read in triplets is nothing but ACA and CAC alternating, and it produced equal amounts of threonine and histidine; the composition data already said a histidine codon holds one A and two C, and only CAC fits, so CAC is His and ACA is Thr. The three strategies together assigned 61 codons to amino acids, the remaining three were identified as termination signals, and every meaning was settled by 1966. One honest footnote: none of these experiments should have worked without initiation codons, which nobody yet knew about, and the conditions used happened to relax the requirement. **A repeating copolymer delivers base order as well as base composition, and order is the one piece the other two strategies could not supply.**",
      cn: "Khorana 发展了合成「重复单元为二到四个碱基」的 RNA 的化学。(AC)ₙ —— ACACAC… —— 按三联体读，无非就是 ACA 和 CAC 交替，它产出等量的苏氨酸和组氨酸；而组成数据早已表明组氨酸密码子含一个 A 和两个 C，只有 CAC 符合，所以 CAC 是 His，ACA 是 Thr。三条路合起来，61 个密码子被指派给氨基酸，剩下三个被认定为终止信号，全部含义在 1966 年尘埃落定。一个诚实的脚注：在不知道起始密码子存在的情况下，这些实验本来根本不该成功 —— 当时所用的条件恰好放松了对起始的要求。**重复共聚物既给出碱基组成、也给出碱基顺序，而顺序正是另外两条路唯一供不出的那一件东西。**",
      src: "A p.1008"
    },
    {
      link_en: "three of the 64 mean stop, and that turns the code into a way of finding genes in raw sequence",
      link_cn: "64 个里有 3 个的意思是「停」—— 这把密码变成了在原始序列里找基因的办法",
      en: "AUG is the commonest signal to begin a polypeptide, and it means methionine when it occurs inside one; UAA, UAG and UGA specify no amino acid and are the termination codons, also called stop or nonsense codons. A message therefore carries its own punctuation, one triplet saying begin and three saying end. Three stops out of 64 means that in random sequence about one codon in every twenty is a stop, so a long run without one is surprising, and that is the definition: a stretch of 50 or more consecutive codons containing no termination codon is an open reading frame, and long ones usually are protein-coding genes. A protein of molecular weight 60,000 needs 500 or more codons, ten times that threshold. **A sequence has three frames and its complementary strand three more, so a search for open reading frames has to examine all six or it will miss every gene written on the other strand.**",
      cn: "AUG 是启动一条多肽最常见的信号，而它出现在多肽内部时表示甲硫氨酸；UAA、UAG、UGA 不指定任何氨基酸，它们是终止密码子（也叫 stop 密码子、无义密码子）。于是一条信息自带标点：一个三联体说「从这里开始」，三个三联体说「到这里结束」。64 个里有 3 个是终止，意味着随机序列里平均每二十个密码子就有一个是终止，所以一长串里一个终止都没有，是件出乎意料的事 —— 定义正是这样来的：连续 50 个或更多、其中没有终止密码子的一段，叫开放阅读框（open reading frame），长的开放阅读框通常就是编码蛋白的基因。分子量 60,000 的蛋白需要 500 个以上密码子，是这个阈值的十倍。**一条序列有三个框，它的互补链还有三个，所以搜开放阅读框必须把六个框都查一遍，否则写在另一条链上的基因会被全部漏掉。**",
      src: "A p.1009 · §4.2.1, p.94, Tab. 4.3"
    },
    {
      link_en: "the 61 remaining codons are shared out very unevenly, and the word for that is easy to misread",
      link_cn: "剩下的 61 个密码子分配得极不均匀，而形容这件事的那个词很容易被误读",
      en: "The code is degenerate: an amino acid may be specified by more than one codon. The sharing is uneven — methionine and tryptophan have one codon each, nine amino acids have two, isoleucine has three, five amino acids have four, and arginine, leucine and serine have six each. Here is the guard-rail, because this is the standard misreading: degenerate means many-to-one and never one-to-many, since each codon specifies exactly one amino acid, which is what lets a message be read unambiguously while the code is redundant. **Codons for the same amino acid mostly differ only in their third base, so the third base carries the least information of the three — which is the observation the next step explains.**",
      cn: "这套密码是简并的（degenerate）：一个氨基酸可以由不止一个密码子指定。分配并不均匀 —— 甲硫氨酸和色氨酸各只有一个密码子，九种氨基酸有两个，异亮氨酸有三个，五种有四个，精氨酸、亮氨酸、丝氨酸各有六个。这里要立一道护栏，因为它是标准误读点：简并的意思是多对一，绝不是一对多，因为每一个密码子只指定一个氨基酸 —— 正因如此，密码可以冗余而信息仍被无歧义地读出。**编码同一氨基酸的密码子大多只在第三个碱基上不同，所以三个碱基里第三个携带的信息最少 —— 而这正是下一步要解释的现象。**",
      src: "A p.1009 · §4.2.1, p.94, Tab. 4.3"
    },
    {
      link_en: "and a codon is never inspected — it is paired with, which is why one tRNA can serve more than one codon",
      link_cn: "而密码子从来不是被「检查」的，它是被「配上对」读出来的 —— 这正是一个 tRNA 能服务多个密码子的原因",
      recall_en: "the surplus of 64 over 20 from the second step, now paid for on the tRNA side",
      recall_cn: "第二步说的「64 比 20 多出来的那部分」，这一步在 tRNA 这一侧结账",
      en: "Nothing reads an mRNA and decides what it says. A tRNA carries a three-base sequence of its own, the anticodon, and a tRNA whose anticodon matches simply sticks, so the amino acid on its far end is the one that gets added. Codon and anticodon lie antiparallel, so the codon's first base pairs with the anticodon's third and the codon's third with the anticodon's first, and that last pairing is loose — Crick named it wobble. Some anticodons carry inosinate, a nucleotide whose base is hypoxanthine, and inosinate can hydrogen-bond weakly with A, U or C, so a yeast arginine tRNA with the anticodon (5')ICG reads CGA, CGU and CGC. **The first base of the anticodon fixes how many codons that tRNA can read — C or A one, U or G two, inosinate three** — so a minimum of 32 tRNAs covers all 61 sense codons, and E. coli in fact keeps 47 different tRNA genes in 86 copies.",
      cn: "没有任何东西去读一条 mRNA、再决定它说了什么。一个 tRNA 自己带着一段三碱基序列，叫反密码子（anticodon）；反密码子匹配的那条 tRNA 只是贴上去而已，于是它另一端挂着的氨基酸就成了被加上去的那一个。密码子与反密码子反向平行，所以密码子的第一个碱基与反密码子的第三个配对、密码子的第三个与反密码子的第一个配对，而最后这一对配得松 —— Crick 把它命名为摆动（wobble）。某些反密码子含次黄嘌呤核苷酸（inosinate），其碱基是次黄嘌呤，而它能与 A、U、C 形成较弱的氢键，所以酵母里反密码子为 (5′)ICG 的那条精氨酸 tRNA 能读 CGA、CGU、CGC。**反密码子的第一个碱基决定这条 tRNA 能读几个密码子 —— C 或 A 读一个，U 或 G 读两个，次黄嘌呤核苷酸读三个 —— 于是最少 32 个 tRNA 就能覆盖全部 61 个有义密码子，而大肠杆菌实际上备着 47 个不同的 tRNA 基因、共 86 个拷贝。**",
      src: "A p.1012 · §4.2.1, p.93"
    },
    {
      link_en: "and the looseness is not sloppiness — it is what makes translation fast enough to be worth doing",
      link_cn: "而这份「松」不是马虎 —— 正是它让翻译快到值得一做",
      en: "A tRNA has to leave its codon as soon as its amino acid has been handed over, and how fast it leaves depends on how tightly it is held. If all three bases paired strongly, tRNAs would dissociate too slowly, and that alone would cap the rate of protein synthesis. **Codon-anticodon pairing is a deliberate balance between accuracy and speed, and the loose third pair is what buys the throughput — degeneracy is the price paid for it.**",
      cn: "一个 tRNA 一旦把氨基酸交出去就必须离开它的密码子，而它离开得多快，取决于它被抓得多紧。如果三个碱基都配得很牢，tRNA 解离得太慢，光这一条就会把蛋白合成的速率卡死。**密码子与反密码子的配对是准确性与速度之间一个刻意的平衡，松的那一对正是买来通量的东西 —— 简并就是为它付出的价钱。**",
      src: "A p.1012"
    },
    {
      link_en: "and the same looseness shows up again as a measurable resistance to mutation",
      link_cn: "同样这份「松」，还以另一种面貌出现：可测量的抗突变能力",
      recall_en: "the third-base looseness of the wobble step, seen now from the mutation side",
      recall_cn: "摆动那一步说的第三碱基之松，现在从突变这一侧再看一遍",
      en: "The assignment of codons to amino acids is measurably resistant to the commonest kinds of mutation, and three measurements say so. A single substitution at the third base changes the encoded amino acid only about 25% of the time, so most such changes are silent mutations, meaning the nucleotide differs and the amino acid does not. The commonest missense mutation is a transition, which is a purine replaced by a purine or a pyrimidine by a pyrimidine, and all three codon positions show some resistance to transitions. A change at the first base usually does alter the amino acid, but usually to a chemically similar one: the valine codon GUU becomes isoleucine as AUU or leucine as CUU, and all three of those side chains are hydrophobic. **Alternative codes generated at random are almost always less mutation-resistant than the real one, which says the real code was streamlined by selection before the last common ancestor of all life.**",
      cn: "密码子到氨基酸的这套指派，对最常见的那几类突变有可测量的抵抗力，三项测量说明了这一点。第三个碱基上的单碱基替换只有约 25% 的情况会改变编码的氨基酸，所以这类改变大多是沉默突变（silent mutation）—— 核苷酸变了，氨基酸没变。最常见的错义突变是转换（transition），即嘌呤换嘌呤、嘧啶换嘧啶，而三个密码子位置对转换都表现出一定抵抗力。第一个碱基上的改变通常确实会换掉氨基酸，但换成的往往是化学性质相近的一个：缬氨酸密码子 GUU 变成 AUU 就是异亮氨酸、变成 CUU 就是亮氨酸，这三个侧链都疏水。**随机生成的替代密码几乎总是比真实的这套更不抗突变 —— 这说明真实的密码在所有生命的最后共同祖先出现之前，就已经被选择精简过。**",
      src: "A p.1013"
    },
    {
      link_en: "run one message end to end with real bases, before the exceptions start",
      link_cn: "在讲例外之前，先用真实的碱基从头到尾走一遍",
      en: "A DNA strand 5'-AGAGGTGCT-3', paired with 3'-TCTCCACGA-5', is transcribed into the mRNA 5'-AGAGGUGCU-3'. Read in threes that is AGA-GGU-GCU. The tRNAs whose anticodons are UCU, CCA and CGA pair with those three codons and deliver arginine, glycine and alanine. **Nine nucleotides of DNA become three amino acids of protein, -Arg-Gly-Ala-, and every step of that conversion is base pairing — nothing inside a cell ever consults the code as a table.**",
      cn: "一条 DNA 链 5′-AGAGGTGCT-3′（与之配对的是 3′-TCTCCACGA-5′）被转录成 mRNA 5′-AGAGGUGCU-3′。三个一组读，就是 AGA-GGU-GCU。反密码子分别为 UCU、CCA、CGA 的三条 tRNA 与这三个密码子配对，分别送来精氨酸、甘氨酸和丙氨酸。**九个 DNA 核苷酸变成三个氨基酸 -Arg-Gly-Ala-，而这次转换的每一步都是碱基配对 —— 细胞内部从来没有任何东西把这套密码当成一张表去查。**",
      src: "§4.2.1, p.94, Obr. 4.35"
    },
    {
      link_en: "the same table is used by almost everything alive, and how it varies says why it can only vary a little",
      link_cn: "几乎所有活物都在用同一张表 —— 而它变化的方式，恰好说明了它为什么只能小变",
      en: "Two things define the code, and neither of them is the mRNA: the anticodons on tRNAs, which decide where in a polypeptide a given amino acid is placed, and the specificity of the aminoacyl-tRNA synthetases, the enzymes deciding which amino acid goes onto which tRNA. Changing the code therefore means changing a tRNA gene, usually its anticodon, and almost any sudden change of that kind is catastrophic, so variants survive only where few proteins are affected. That is exactly where they are found. Most known variants sit in mitochondrial DNA, which encodes only 10 to 20 proteins with its own tRNAs; vertebrate mitochondrial DNA gets by with 22 tRNAs, below the minimum of 32, using looser wobble rules still. The commonest variation is UGA read as tryptophan instead of stop, the second commonest AUA read as methionine instead of isoleucine. Outside mitochondria, Mycoplasma capricolum reads UGA as Trp, some ciliated protists read UAA and UAG as glutamine, and Candida albicans reads CUG as serine rather than leucine, a swap dated to 150–170 million years ago. **Calling the code universal is right about the table and wrong about its readers: no completely different code has ever been found, yet a dozen small reassignments have**, and every one of them sits in a small genome or on a termination codon, because those are the only places an altered tRNA is survivable.",
      cn: "有两样东西定义这套密码，而两样都不是 mRNA：tRNA 上的反密码子，它决定某个氨基酸被放在多肽的哪个位置；以及氨酰-tRNA 合成酶（aminoacyl-tRNA synthetase）的特异性 —— 这类酶决定哪个氨基酸被装到哪条 tRNA 上。所以改动密码就等于改动一个 tRNA 基因（通常是它的反密码子），而这类突然的改动几乎必然是灾难性的，于是变体只能在「受影响的蛋白很少」的地方存活。观察到的正是如此。已知的变体大多在线粒体 DNA 里，那里只编码 10 到 20 个蛋白、且自带 tRNA；脊椎动物线粒体只用 22 个 tRNA 就够（低于 32 的下限），靠的是更松的摆动规则。最常见的变体是 UGA 被读成色氨酸而不是终止，其次是 AUA 被读成甲硫氨酸而不是异亮氨酸。线粒体之外：丝状支原体（Mycoplasma capricolum）把 UGA 读作 Trp，一些纤毛虫把 UAA 和 UAG 读作谷氨酰胺，白色念珠菌（Candida albicans）把 CUG 读作丝氨酸而非亮氨酸，这次改写被定年在 1.5 亿到 1.7 亿年前。**说密码「通用」，对表格而言是对的，对读表的人而言是错的：从来没有发现过一套完全不同的密码，却发现了十来处小的重新指派，而它们无一例外地落在小基因组里或落在终止密码子上 —— 因为只有在那里，一条被改动的 tRNA 才活得下来。**",
      src: "A p.1010 · §4.2.1, p.94"
    },
    {
      link_en: "and three tricks let a cell read one particular message against the table without changing the code at all",
      link_cn: "还有三种花招，让细胞在完全不改动密码的前提下，把某一条特定信息读得与表不同",
      en: "Selenocysteine is inserted at UGA whenever a sequence element called SECIS is present elsewhere on the same message; without that element the same triplet ends translation, so one triplet has two meanings and a sequence somewhere else decides which applies. Some genes make the ribosome change reading frame at a defined point: in Rous sarcoma virus the pol frame is offset from the gag frame by one base pair, the shift lets the ribosome bypass the stop at the end of gag, and it happens in about 5% of translations, so the reverse transcriptase is made at one-twentieth the amount of the structural Gag protein — a stoichiometry control rather than an error rate. And RNA editing alters a message after it has been made: ADAR enzymes turn adenosine into inosine, which translation reads as G, and an APOBEC enzyme found only in the intestine turns one C into U at the codon for residue 2,153 of apolipoprotein B, converting a glutamine codon into UAA, so intestine makes the half-length apoB-48 while liver makes the full-length apoB-100 from one gene. **None of these three changes the code — each changes one message, or one reading of one message — so a DNA sequence read through the table does not always predict the protein that comes out.**",
      cn: "只要同一条信息上别处存在一个叫 SECIS 的序列元件，硒代半胱氨酸（selenocysteine）就会在 UGA 处被插进去；没有这个元件时，同一个三联体终止翻译 —— 于是一个三联体有了两种含义，而用哪一种由别处的一段序列决定。有些基因让核糖体在一个确定的位置换阅读框：劳斯肉瘤病毒里 pol 的框相对 gag 错开一个碱基对，这一移位让核糖体绕过 gag 末端的终止密码子，而它发生在约 5% 的翻译中，所以逆转录酶的产量只有结构蛋白 Gag 的二十分之一 —— 这是化学计量控制，不是错误率。而 RNA 编辑（RNA editing）在信息造好之后改动它：ADAR 类酶把腺苷变成次黄嘌呤核苷，翻译把后者读作 G；一种只存在于肠道的 APOBEC 把载脂蛋白 B 第 2,153 号残基密码子上的一个 C 变成 U，把谷氨酰胺密码子变成 UAA，于是同一个基因在肠道给出半长的 apoB-48、在肝脏给出全长的 apoB-100。**这三样没有一样改动了密码 —— 每一样改动的都是某一条信息、或对某一条信息的某一次读取 —— 所以照着表去读一段 DNA 序列，并不总能预测出最后出来的蛋白。**",
      src: "A p.1013 · A p.1014 · §4.2.1, p.94"
    }
  ],
  terms: [
    { en: "codon", cn: "密码子",
      def_en: "A group of three bases on an mRNA specifying which single amino acid is added next to the growing chain. Three is the smallest group that works, since four bases taken singly give 4 and in pairs 16, both fewer than 20, while triplets give 64.",
      def_cn: "mRNA 上的三个碱基，规定接下来往链上加的是哪一个氨基酸。三个是最小可行的组：四种碱基单取给 4 种、两两取给 16 种，都不足 20，而三联体给 64 种。" },
    { en: "reading frame", cn: "阅读框",
      def_en: "Which nucleotide the counting in threes starts from. Triplets are read one after another with no nucleotide shared and nothing written between them, so a sequence has three frames and its complement three more. Inserting or deleting one base changes every downstream amino acid; three leaves the remaining triplets intact — the genetic proof that a codon is three bases.",
      def_cn: "三个一组的数法从哪个核苷酸开始。三联体一个接一个地读，没有核苷酸被共用，之间也不写任何东西，所以一条序列有三个框、它的互补链还有三个。插入或删除一个碱基会改变下游每一个氨基酸；三个则剩下的三联体完好 —— 这是「密码子是三个碱基」的遗传学证明。" },
    { en: "polynucleotide phosphorylase", cn: "多核苷酸磷酸化酶",
      def_en: "Ochoa's template-independent enzyme, which strings ribonucleoside diphosphates into RNA whose base composition simply mirrors the ratio supplied, in random order. It made the homopolymers and random copolymers the code was first attacked with — which is exactly why those experiments gave base composition and never base order.",
      def_cn: "Ochoa 发现的不依赖模板的酶，把核糖核苷二磷酸串成 RNA，产物的碱基组成只是简单反映投料比例，顺序随机。最初攻打密码用的同聚物和随机共聚物就是它做的 —— 这也正是那些实验只能给出碱基组成、永远给不出碱基顺序的原因。" },
    { en: "open reading frame", cn: "开放阅读框",
      def_en: "A run of 50 or more consecutive codons containing no termination codon. Since three of 64 codons are stops, about one codon in twenty is a stop in random sequence, so a long uninterrupted run marks a probable protein-coding gene. A protein of Mr 60,000 needs 500 or more codons, and a search must cover all six frames.",
      def_cn: "连续 50 个或更多、其中没有终止密码子的密码子串。由于 64 个密码子里有 3 个是终止，随机序列里平均每二十个就有一个终止，所以一长段不被打断的串，标记的多半是一个编码蛋白的基因。分子量 60,000 的蛋白需要 500 个以上密码子，而搜索必须覆盖全部六个框。" },
    { en: "degeneracy", cn: "简并性",
      def_en: "Most amino acids being specified by more than one triplet — six each for Arg, Leu and Ser, four for five amino acids, three for Ile, two for nine, and one each for Met and Trp. The mapping runs many-to-one and never one-to-many, so a redundant code is still read unambiguously.",
      def_cn: "大多数氨基酸由不止一个三联体指定 —— Arg、Leu、Ser 各六个，五种氨基酸各四个，Ile 三个，九种各两个，Met 与 Trp 各一个。这个映射是多对一、绝不是一对多，所以冗余的密码仍然被无歧义地读出。" },
    { en: "wobble and inosinate", cn: "摆动与次黄嘌呤核苷酸",
      def_en: "The codon's third base pairs loosely with the anticodon's first, so one tRNA can read more than one codon. The anticodon's first base sets the count: C or A reads one, U or G reads two, and a nucleotide whose base is hypoxanthine reads three, pairing weakly with A, U or C. The looseness is functional — tight pairing at all three positions would make tRNAs dissociate too slowly and cap the rate of protein synthesis.",
      def_cn: "密码子的第三个碱基与反密码子的第一个配得松，所以一个 tRNA 能读不止一个密码子。反密码子第一个碱基决定读几个：C 或 A 读一个，U 或 G 读两个，碱基为次黄嘌呤的那个核苷酸读三个 —— 它能与 A、U、C 形成较弱的氢键。这份松是有功能的：三个位置都配得牢，tRNA 解离太慢，会把蛋白合成的速率卡住。" },
    { en: "the 32-tRNA minimum", cn: "32 个 tRNA 的下限",
      def_en: "Crick's fourth wobble rule: 32 tRNAs suffice for all 61 sense codons — 31 for the amino acids plus one for initiation. Real cells run above it (E. coli has 47 tRNA genes in 86 copies); vertebrate mitochondria run below it, decoding their own genes with 22, using still looser wobble rules.",
      def_cn: "Crick 摆动规则的第四条：32 个 tRNA 足以覆盖全部 61 个有义密码子 —— 31 个给氨基酸，加一个用于起始。真实细胞在这之上（大肠杆菌 47 个 tRNA 基因、86 个拷贝）；脊椎动物线粒体在这之下，只用 22 个就把自己的基因读完，靠的是更松的摆动规则。" },
    { en: "silent mutation and transition", cn: "沉默突变与转换",
      def_en: "A change of nucleotide that leaves the encoded amino acid unaltered; a substitution at the third base is of that kind about 75% of the time. A transition replaces a purine with a purine or a pyrimidine with a pyrimidine and is the commonest missense mutation — and it is exactly what the code is measurably resistant to.",
      def_cn: "改变了核苷酸却没有改变编码氨基酸的那种变化；第三碱基上的替换约 75% 属于此类。转换指嘌呤换嘌呤、嘧啶换嘧啶，是最常见的错义突变 —— 而这套密码可测量地抵抗的正是它。" },
    { en: "what defines the code", cn: "密码由什么定义",
      def_en: "Not the mRNA: the anticodons on tRNAs, which decide where an amino acid is placed, and the specificity of the aminoacyl-tRNA synthetases, which decide which amino acid a tRNA carries. Altering the code therefore means altering a tRNA gene — which is why variants persist only in small genomes, mostly mitochondrial, and mostly at termination codons.",
      def_cn: "不是由 mRNA 定义：而是由 tRNA 上的反密码子（决定氨基酸被放在哪里）和氨酰-tRNA 合成酶的特异性（决定某条 tRNA 带的是哪个氨基酸）共同定义。所以改动密码就等于改动一个 tRNA 基因 —— 这正是变体只在小基因组（大多是线粒体）里、且大多发生在终止密码子上的原因。" },
    { en: "selenocysteine and SECIS", cn: "硒代半胱氨酸与 SECIS",
      def_en: "An amino acid inserted at UGA whenever a particular sequence element is present elsewhere on the same message; without that element the same triplet ends translation. One triplet with two meanings, decided by a sequence outside the codon — a recoding of one message rather than a changed code.",
      def_cn: "只要同一条信息上别处存在某个特定序列元件，就会在 UGA 处被插入的氨基酸；没有那个元件时，同一个三联体终止翻译。一个三联体两种含义，由密码子之外的一段序列决定 —— 这是对单条信息的重新读取，而不是密码被改了。" },
    { en: "translational frameshifting", cn: "翻译移码",
      def_en: "A deliberate change of reading frame at a defined point, so one transcript gives two related proteins. In Rous sarcoma virus the pol frame is offset from gag by one base pair; the shift bypasses the gag stop codon and occurs in about 5% of translations, so reverse transcriptase is made at a twentieth the level of Gag. It is a stoichiometry control, not an error rate.",
      def_cn: "在确定位置刻意改变阅读框，使一条转录本给出两个相关的蛋白。劳斯肉瘤病毒里 pol 的框相对 gag 错开一个碱基对；移位绕过 gag 的终止密码子，发生在约 5% 的翻译中，于是逆转录酶的量只有 Gag 的二十分之一。这是化学计量控制，不是错误率。" },
    { en: "ADAR and APOBEC", cn: "ADAR 与 APOBEC",
      def_en: "Two families of editing enzyme. The first deaminates adenosine to inosine, which translation reads as G — an A-to-G change that never happened in the DNA. The second deaminates cytidine to uridine; an intestine-only member turns the Gln codon at residue 2,153 of apolipoprotein B into a UAA stop, so intestine makes apoB-48 and liver makes apoB-100 from one gene.",
      def_cn: "两类编辑酶。前者把腺苷脱氨成次黄嘌呤核苷，翻译把它读作 G —— 相当于一次「DNA 里从未发生过」的 A 变 G。后者把胞苷脱氨成尿苷；只存在于肠道的那个成员把载脂蛋白 B 第 2,153 号残基的 Gln 密码子变成 UAA 终止密码子，于是同一个基因在肠道给出 apoB-48、在肝脏给出 apoB-100。" }
  ]
};

/* --------------------------------------------------------------- 翻译 ---- */
window.BIOLITE_SPINE["key:translation"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "mRNA", "tRNA", "rRNA", "ribosome", "codon", "anticodon",
            "ATP", "GTP", "GDP", "phosphate", "hydrolysis", "nucleus", "cytoplasm",
            "cytosol", "mitochondria", "chloroplast", "magnesium", "ester",
            "pyrophosphate", "carboxyl group", "hydroxyl group", "amino group",
            "peptide bond", "polypeptide", "subunit", "molecular weight",
            "transcription", "translation", "prokaryote", "eukaryote", "membrane",
            "reading frame", "termination codon", "initiation codon", "helicase",
            "antibiotic", "toxin", "castor bean", "yeast", "isoleucine", "valine",
            "methionine", "alanine", "proline", "cysteine", "histidine", "adenine",
            "lysine", "arginine", "helix", "electron microscopy",
            "endoplasmic reticulum", "sedimentation coefficient"],
  nodeTitle_en: "Protein synthesis",
  nodeTitle_cn: "蛋白质的合成",
  title_en: "Where the fidelity of translation actually comes from, why the machine that does it is made of RNA, and what one peptide bond really costs",
  title_cn: "翻译的保真度究竟来自哪里、干这活的那台机器为什么是 RNA 做的，以及一个肽键真实的代价",
  steps: [
    {
      en: "Making a polymer, meaning a long chain of repeating units, is usually described in three stages: initiation, elongation and termination, which is how DNA and RNA synthesis are described. Protein synthesis takes five, because those three are bracketed by two more — activation of the amino acids before any chain is started, and folding and processing of the finished chain afterwards. Each stage runs on its own set of factors, a factor being a protein that binds, does one thing and comes off again, with catalytic ability but not classified as an enzyme. Counting only four stages does not save anything, because the trimming of a finished chain has to be added back in at the end regardless. **The middle three stages build the chain and the two outer ones are what make the chain correct, so fidelity and final function both live outside the part that does the joining.**",
      cn: "造一个聚合物（由重复单元连成的长链）通常按三个阶段来讲：起始、延长、终止 —— DNA 和 RNA 的合成就是这么讲的。蛋白质合成要按五个阶段来讲，因为那三个阶段的两头各多一个：链开始之前对氨基酸的活化，以及链造完之后的折叠与加工。每个阶段依靠各自的一组因子（factor）—— 因子是一种「结合上去、做一件事、然后离开」的蛋白，有催化能力但不被归为酶。只数四个阶段并不省事，因为成品链的修剪无论如何都要在末尾补回来。**中间三个阶段把链造出来，外面两个阶段是让这条链正确的原因 —— 所以保真度和最终功能，都住在「负责连接」的那部分之外。**",
      src: "A p.1015 · §4.2.3, p.95, Tab. 4.4"
    },
    {
      link_en: "so what does activation actually accomplish? Two separate things, in one reaction",
      link_cn: "那么活化到底完成了什么？两件互不相干的事，在同一个反应里",
      en: "Building a chain of defined sequence has two requirements. The carboxyl group of each amino acid must be activated so that a peptide bond can form, which is the energy requirement; and each amino acid must be linked to the piece of mRNA information specifying it, which is the information requirement. Both are met by one act: attaching the amino acid to a tRNA through an ester bond to the terminal adenosine of that tRNA's CCA end, after which the tRNA is said to be charged. The enzymes are the aminoacyl-tRNA synthetases, one for each amino acid, of molecular weight around 100,000, carrying one or more essential -SH groups and requiring Mg²⁺. They fall into two classes of ten: class I attaches the amino acid to the 2'-hydroxyl of that terminal adenosine and then shifts it to the 3'-hydroxyl, class II delivers it straight to the 3'-hydroxyl, and the two classes approach opposite faces of the tRNA. **One enzyme per amino acid is where the specificity of the whole system lives, because charging is the only step at which an amino acid's own chemistry is ever inspected.**",
      cn: "要造出一条序列确定的链，必须满足两个要求。每个氨基酸的羧基必须被活化，肽键才能形成 —— 这是能量方面的要求；每个氨基酸与「指定它的那段 mRNA 信息」之间必须建立联系 —— 这是信息方面的要求。两者由同一个动作一并满足：通过一个酯键把氨基酸挂到某条 tRNA 的 CCA 末端那个腺苷上，此后这条 tRNA 被称为已充电（charged）。干这件事的酶是氨酰-tRNA 合成酶（aminoacyl-tRNA synthetase），每种氨基酸一个，分子量约 100,000，带有一个或多个必需的 -SH 基团，并需要 Mg²⁺。它们分成各十个的两大类：I 类把氨基酸接到末端腺苷的 2′-羟基上、再挪到 3′-羟基；II 类直接送到 3′-羟基；两类分别从 tRNA 相对的两个面靠上去。**「一种氨基酸一个酶」正是整套系统特异性的住处，因为充电是唯一一处会去检查氨基酸自身化学结构的步骤。**",
      src: "A p.1020 · §4.2.3, p.96",
      openQuestion_en: "There is no evidence that the two classes of synthetase share a common ancestor, and why two structurally unrelated enzyme families evolved for what is essentially the same reaction is not known.",
      openQuestion_cn: "没有证据表明这两类合成酶有共同祖先；为什么本质相同的一个反应会演化出两套结构上毫不相干的酶，目前并不知道。"
    },
    {
      link_en: "and it does that in two steps, with the ATP spent in the first",
      link_cn: "它分两步完成，ATP 花在第一步",
      en: "First the amino acid reacts with ATP to give an aminoacyl-adenylate, also written aminoacyl-AMP, releasing pyrophosphate which is promptly hydrolysed to two phosphates and pulls the reaction forward. Second, the activated amino acid is transferred onto the tRNA, AMP leaves, and the product is an aminoacyl-tRNA. The energy taken from ATP is now held in the bond between the amino acid and its tRNA. **Forming the peptide bond later costs the ribosome nothing extra, because breaking this ester bond is what pays for it — activation is what makes the peptide bond downhill enough to happen at all.**",
      cn: "第一步，氨基酸与 ATP 反应生成氨酰腺苷酸（aminoacyl-AMP），放出焦磷酸；焦磷酸随即被水解成两个磷酸，把反应往前拉。第二步，被活化的氨基酸转移到 tRNA 上，AMP 离去，产物就是氨酰-tRNA。从 ATP 拿来的能量，如今存在氨基酸与它的 tRNA 之间那根键里。**后面生成肽键时核糖体不必再额外付账，因为断开这根酯键就是账款本身 —— 活化正是使肽键变得足够「顺坡」、从而真能发生的原因。**",
      src: "§4.2.3, p.96, Obr. 4.38–4.39 · A p.1020"
    },
    {
      link_en: "and once the amino acid is on the tRNA, nothing downstream ever looks at it again",
      link_cn: "而氨基酸一旦挂上 tRNA，下游就再也没有任何一步看过它",
      en: "The identity of the amino acid attached to a tRNA is never checked on the ribosome. The experiment that shows it is deliberately perverse: charge a tRNA with the wrong amino acid, which can be done in the laboratory, feed it into a translation system, and that wrong amino acid is efficiently incorporated at whatever codon that tRNA's anticodon reads — efficiently, not slowly and not at reduced yield. **The synthetase is the sole guardian of which amino acid goes where: a mistake it makes is final and invisible to every later step**, and the wrong residue appears where the anticodon says rather than where its own chemistry would belong.",
      cn: "tRNA 上挂的是哪个氨基酸，核糖体从来不查。证明这一点的实验是故意反着做的：在实验室里把一条 tRNA 装上错误的氨基酸，再把它投进翻译体系，这个错误的氨基酸就会被高效地掺进蛋白，位置由这条 tRNA 的反密码子读到的那个密码子决定 —— 是高效，不是变慢，也不是产率下降。**哪个氨基酸放在哪里，唯一的守门人就是合成酶：它一旦出错，这个错误就是终局性的、对后面每一步都不可见，而错误的残基出现在反密码子所指的位置，不是它自身化学性质该去的位置。**",
      src: "A p.1020 · §4.2.3, p.96"
    },
    {
      link_en: "so how well can one enzyme tell two nearly identical amino acids apart?",
      link_cn: "那么，一个酶把两个几乎一模一样的氨基酸分开，能做到多好？",
      en: "Isoleucine and valine differ by a single CH₂ group, and Ile-tRNA synthetase prefers isoleucine over valine by a factor of only 200 — about what one extra CH₂ of binding energy is worth, and nowhere near enough. Yet valine is put in place of isoleucine only about once in 3,000. The extra factor is bought with a double sieve, meaning two successive substrate-specific filters whose effects multiply: filter one is the binding and activation site, which excludes anything larger than isoleucine, and filter two is a separate hydrolytic site on the same enzyme into which the slightly smaller activated valine fits and is destroyed, while activated isoleucine is too large to enter. Most synthetases can also cut the finished ester bond of a charged tRNA, and do it far faster when the tRNA is charged wrongly; those whose amino acid has no close look-alike, cysteine's for one, barely proofread at all. The overall error rate of protein synthesis is about one mistake per 10,000 residues, far worse than DNA replication. **A flawed protein is degraded and passed to no descendant while a mistake in DNA is inherited by every cell that follows**, so translation is built to be exactly as accurate as it is worth paying for rather than as accurate as possible.",
      cn: "异亮氨酸与缬氨酸只差一个 CH₂，而 Ile-tRNA 合成酶偏好异亮氨酸胜过缬氨酸的倍数只有 200 —— 大约就是多一个 CH₂ 的结合能所值，远远不够。可是缬氨酸被误放到异亮氨酸位置上的频率只有约三千分之一。多出来的部分是用双筛（double sieve）买来的，即两道先后串联、效果相乘的底物特异性过滤器：第一道是结合与活化位点，把比异亮氨酸大的一律排除；第二道是同一个酶上另一个独立的水解位点，略小一点的活化缬氨酸塞得进去、在那里被销毁，而活化的异亮氨酸太大、进不去。多数合成酶还能切断已充电 tRNA 上那个成品酯键，而且在 tRNA 装错时切得快得多；那些氨基酸没有近似替身的合成酶（比如半胱氨酸的那个）几乎不做校对。蛋白质合成的总体错误率约为每 10,000 个残基出错一个，远差于 DNA 复制。**有缺陷的蛋白会被降解、不传给任何后代，而 DNA 上的错误会被之后每一个细胞继承 —— 所以翻译不是为了「尽可能准」而造的，而是为了「恰好准到值这个价」而造的。**",
      src: "A p.1022"
    },
    {
      link_en: "and the synthetase has a second recognition problem, invisible if you only think about amino acids",
      link_cn: "合成酶还有第二个识别问题 —— 如果你只想着氨基酸，这个问题是看不见的",
      recall_en: "the same enzyme as the double sieve, now choosing between tRNAs instead of between amino acids",
      recall_cn: "还是双筛那一步的同一个酶，只是这次要在 tRNA 之间挑，而不是在氨基酸之间挑",
      en: "A synthetase must be specific for one amino acid and for the right tRNAs, and telling dozens of tRNAs apart matters to fidelity just as much. The rules for that are called the second genetic code, and they are more complicated than those of the first: nucleotides shared by every tRNA are useless for discrimination, so the positions that actually discriminate cluster in the amino acid arm and the anticodon arm, the anticodon included, and ten or more nucleotides may be involved. The alanine system is the clean exception — from bacteria to humans the alanine enzyme mainly recognises a single G-U base pair in the amino acid arm of the alanine tRNA, and a synthetic RNA hairpin of as few as seven base pairs is charged efficiently provided it carries that one pair. **Adding a new amino acid to the code therefore means building a new synthetase-tRNA pair**, which is exactly what the two natural additions, selenocysteine and pyrrolysine, and every laboratory expansion amount to.",
      cn: "一个合成酶必须既对某一种氨基酸专一，也对正确的那些 tRNA 专一，而在几十条 tRNA 之间分辨清楚，对保真度同样重要。这套规则被称为第二套遗传密码（the second genetic code），而且比第一套更复杂：在所有 tRNA 里都相同的核苷酸对分辨毫无用处，所以真正起区分作用的位置集中在氨基酸臂和反密码子臂（包括反密码子本身），参与的核苷酸可能有十个以上。丙氨酸系统是那个干净的例外 —— 从细菌到人，丙氨酸那个酶主要认的就是丙氨酸 tRNA 氨基酸臂上的一对 G-U 碱基；一段人工合成的 RNA 发夹，哪怕只有七对碱基，只要带着这一对，就能被高效充电。**所以给密码增加一个新氨基酸，就必须造一套新的合成酶-tRNA 配对 —— 自然界那两个新增（硒代半胱氨酸和吡咯赖氨酸）和实验室里的每一次扩展，做的都是这件事。**",
      src: "A p.1023"
    },
    {
      link_en: "now the machine that reads the message, and the biggest surprise about it is what its active site is made of",
      link_cn: "现在说读这条信息的机器 —— 而关于它最大的意外，是它的活性中心由什么构成",
      en: "A ribosome is a ribonucleoprotein particle, meaning it is built from rRNA and protein together, in two unequal subunits that clamp around the mRNA threading through the cleft between them: 30S and 50S in prokaryotes, 40S and 60S in eukaryotes. The bacterial particle is 70S, about 20 nm across and 2,700 kDa, and 30S plus 50S gives 70S rather than 80S because a sedimentation coefficient tracks a particle's shape and density along with its mass. The small subunit has a head, cleft, platform, neck and body, the large subunit a central protuberance, ridge, valley and stalk; under certain conditions the two dissociate again, which is how their components were identified and is also how a cell recycles subunits from one message to the next. An E. coli cell holds 15,000 or more ribosomes, close to a quarter of its dry weight, about 65% RNA and 35% protein — and a number of those proteins are enzymes or factors taking part directly in synthesis rather than scaffolding. High-resolution structures showed no protein at all within 18 Å of the site where a peptide bond is made: **peptidyl transferase activity belongs to the 23S rRNA of the large subunit, so the ribosome is a ribozyme and every peptide bond in every cell is made by RNA**.",
      cn: "核糖体是一个核糖核蛋白（ribonucleoprotein）颗粒，意思是它由 rRNA 与蛋白质共同构成；它是两个不等大的亚基，夹住穿过两者裂缝的 mRNA 合在一起：原核是 30S 与 50S，真核是 40S 与 60S。细菌的那个颗粒是 70S，直径约 20 nm，质量约 2,700 kDa；30S 加 50S 得到 70S 而不是 80S，因为沉降系数同时跟着颗粒的形状和密度走，不只跟着质量走。小亚基分头部、裂隙、平台、颈部、体部，大亚基分中央突起、脊、谷、柄；在特定条件下两者会重新解离 —— 当初辨认出它们各个组分靠的就是这一点，细胞把亚基从一条信息回收到下一条信息，靠的也是这一点。一个大肠杆菌细胞里有 15,000 个以上核糖体，接近其干重的四分之一，其中约 65% 是 RNA、35% 是蛋白 —— 而这些蛋白里有不少本身就是酶、或是直接参与合成的因子，并非只搭骨架。**高分辨率结构显示：形成肽键的那个位点 18 Å 之内根本没有蛋白。肽基转移酶活性属于大亚基的 23S rRNA —— 所以核糖体是一个核酶，每一个细胞里的每一个肽键都是 RNA 做出来的。**",
      src: "A p.1017 · §4.2.2, pp.94–95, Obr. 4.36",
      see: [{ id: "L-26-4-1", en: "what it takes to call an RNA an enzyme", cn: "把一条 RNA 称作酶，需要满足什么" }]
    },
    {
      link_en: "and one ribosome per message would waste most of the message",
      link_cn: "一条信息上只放一个核糖体，会把这条信息浪费掉大半",
      en: "Once the initiation region of an mRNA has started one ribosome, that stretch is released and can start the next, so many ribosomes read one message at the same time; such a complex is a polyribosome, or polysome. They sit 5 to 15 nm apart, a maximal density of roughly one ribosome per 80 nucleotides, and that spacing is the ceiling on how fast a single message can be translated. The classic picture is an electron micrograph of the silk glands of the caterpillar Bombyx mori: a row of ribosomes along one mRNA, each trailing a growing chain of fibroin, which is the silk protein, and the trailing chains get longer along the row. Where a ribosome sits also decides where its product goes — a eukaryotic ribosome works free in the cytoplasm or bound to the rough endoplasmic reticulum, and a chain made on the rough endoplasmic reticulum is fed into the membrane system as it is built, while a prokaryote, having no endoplasmic reticulum, translates only on free ribosomes and polysomes. **A message is read many times over simultaneously because its start region is occupied only briefly, so a cell never waits for the first ribosome to finish before beginning the second copy.**",
      cn: "mRNA 上的起始区一旦启动了一个核糖体，这段序列就被释放出来，可以去启动下一个，于是许多核糖体同时读同一条信息；这样的复合体叫多聚核糖体（polyribosome / polysome）。它们彼此相距 5 到 15 nm，最大密度约为每 80 个核苷酸一个核糖体，而这个间距就是「一条信息最快能被翻译到多快」的上限。经典画面是家蚕（Bombyx mori）幼虫丝腺的电子显微照片：一列核糖体排在同一条 mRNA 上，每一个后面拖着一条正在生长的丝心蛋白（fibroin，即丝蛋白）链，而沿着这一列，拖着的链越来越长。核糖体待在哪里，还决定了它的产物去哪里 —— 真核核糖体既可以游离在细胞质中，也可以结合在粗面内质网上；在粗面内质网上合成的链，一边合成一边被送进膜系统，而原核生物没有内质网，只能在游离的核糖体和多聚核糖体上翻译。**一条信息之所以能被同时读许多遍，是因为它的起始区只被短暂占用 —— 所以细胞从不必等第一个核糖体做完，才开始造第二份拷贝。**",
      src: "§4.2.2, p.95, Obr. 4.37 · §4.2.3, p.102 · A p.1017",
      see: [{ id: "4-3-2", en: "how a chain made on the rough endoplasmic reticulum is taken across the membrane", cn: "在粗面内质网上合成的链是怎样被送过膜的" }]
    },
    {
      link_en: "the chain has to be started, and one tRNA is given a privilege no other tRNA has",
      link_cn: "链总得起头 —— 而有一条 tRNA 享有别的 tRNA 都没有的特权",
      en: "A bacterial ribosome has three sites for a tRNA: the aminoacyl site A, where an incoming charged tRNA binds by codon-anticodon pairing; the peptidyl site P, which holds the tRNA carrying the growing chain; and the exit site E, which holds only uncharged tRNAs on their way out. Methionine has one codon, AUG, which is also the start signal, so a cell keeps two different methionine tRNAs and the difference between a starting AUG and an internal one is carried by the tRNA rather than by the codon. In bacteria an ordinary Met-tRNA synthetase charges both without discriminating, and then a transformylase — the selective step — adds a formyl group to the methionine on the initiator tRNA only. That formyl group does two jobs: it keeps this species out of internal positions in a chain, and it lets it bind an initiation site that accepts nothing else. **Formylmethionyl-tRNA is the only charged tRNA that binds first to the P site**; every other one, including the elongator methionyl-tRNA carrying the identical amino acid, enters at A and moves later to P and then E.",
      cn: "细菌核糖体上有三个 tRNA 位点：氨酰位 A，新来的已充电 tRNA 在这里靠密码子-反密码子配对结合；肽基位 P，容纳携带正在生长的链的那条 tRNA；出口位 E，只容纳干完活、正在离场的未充电 tRNA。甲硫氨酸只有一个密码子 AUG，而它同时也是起始信号，所以细胞备了两条不同的甲硫氨酸 tRNA —— 起始的 AUG 与内部的 AUG 之间的区别由 tRNA 承担，而不是由密码子承担。在细菌里，普通的 Met-tRNA 合成酶不加区分地给两条都充电，然后由一个转甲酰酶（transformylase）—— 这才是有选择性的那一步 —— 只在起始 tRNA 的甲硫氨酸上加一个甲酰基。这个甲酰基干两件事：它使这一物种进不了链的内部位置，同时让它能结合一个别的谁都进不去的起始位点。**甲酰甲硫氨酰-tRNA 是唯一一条直接先结合 P 位的已充电 tRNA；其他每一条（包括携带同一个氨基酸的延长型甲硫氨酰-tRNA）都从 A 位进入，之后才移到 P、再到 E。**",
      src: "A p.1028 · §4.2.3, p.97"
    },
    {
      link_en: "and starting in the right place is checked three separate times before a single bond is made",
      link_cn: "而「起始位置正确」这件事，在第一个键形成之前被独立检查了三次",
      en: "Initiation opens by taking a ribosome apart: IF3 binds the 30S subunit and, helped by IF1, drives the dissociation of the spent 70S particle left over from the previous round, after which IF3 keeps the subunits from rejoining too early while IF1 sits in the A site so that no tRNA can bind there. The mRNA binds next, with the starting AUG guided into place by a Shine-Dalgarno sequence — a short purine-rich stretch 8 to 13 bp upstream of the start codon that base-pairs with a complementary pyrimidine-rich stretch near the 3' end of the 16S rRNA. IF2 then arrives carrying GTP together with the initiator tRNA, whose anticodon pairs with the start codon; the 50S subunit joins, the GTP on IF2 is hydrolysed, all three factors leave, and the product is a 70S initiation complex with formylmethionyl-tRNA in P and an empty A site over the second codon, which is exactly the starting position of the elongation cycle. **The initiator is fixed in the P site by three independent recognitions — the codon-anticodon pair, the Shine-Dalgarno pairing with the rRNA, and the contacts between the P site and the tRNA itself** — which is the double sieve principle again: fidelity here is bought by multiplying independent checks.",
      cn: "起始阶段一上来先拆核糖体：IF3 结合 30S 亚基，并在 IF1 协助下，把上一轮遗留的、无活性的 70S 颗粒拆开；此后 IF3 阻止两个亚基过早重新合拢，而 IF1 坐在 A 位上，使任何 tRNA 都结合不上去。随后 mRNA 结合上来，起始的 AUG 由 Shine-Dalgarno 序列引导就位 —— 那是起始密码子上游 8 到 13 bp 处一小段富含嘌呤的序列，与 16S rRNA 3′ 端附近一段富含嘧啶的互补序列配对。接着 IF2 带着 GTP 与起始 tRNA 一同到达，起始 tRNA 的反密码子此时与起始密码子配上对；50S 亚基合上来，IF2 上的 GTP 被水解，三个因子全部离开，产物是一个 70S 起始复合物：甲酰甲硫氨酰-tRNA 在 P 位，A 位空着并正对第二个密码子 —— 而这恰恰就是延长循环的起跑姿势。**起始者在 P 位上的定位，由三次相互独立的识别共同锁定 —— 密码子与反密码子的配对、Shine-Dalgarno 与 rRNA 的配对，以及 P 位与这条 tRNA 本身之间的接触 —— 这又是双筛的原理：这里的保真度是靠把独立的检查相乘买来的。**",
      src: "A p.1028 · §4.2.3, p.98, Obr. 4.41"
    },
    {
      link_en: "a eukaryotic cell finds the same start codon by an entirely different method, and one consequence follows at once",
      link_cn: "真核细胞用完全不同的办法找同一个起始密码子，而一个后果立刻随之而来",
      en: "A eukaryotic message has no Shine-Dalgarno sequence to pair with the rRNA of its small subunit, and a eukaryotic cell calls on at least twelve initiation factors — the helpers that assemble a ribosome onto a message — where a bacterium uses three. The charged initiator tRNA, carrying plain methionine rather than formylmethionine, is delivered by eIF2 with GTP onto the 40S subunit, giving a 43S preinitiation complex. The mRNA meanwhile binds eIF4F, which is three proteins: eIF4E, which grips the 5' cap; eIF4A, an RNA helicase that unwinds structure in the message; and eIF4G, a linker binding eIF4E at one end and the preinitiation complex at the other. eIF4G also binds the poly(A) binding protein sitting at the far end of the message, so the mRNA is pulled into a circle — the structural basis of a great deal of translational regulation. Adding the message gives a 48S complex, which scans along the RNA from the cap until it meets an AUG, eIF4A opening any structure in the way, and the 60S subunit then joins. **A bacterium finds its start codon by base-pairing to a fixed landmark and a eukaryote finds it by scanning from the end of the molecule**, and that single difference is why one bacterial mRNA can carry several genes, each with its own landmark, while a eukaryotic one essentially cannot.",
      cn: "真核信息上没有能与小亚基 rRNA 配对的 Shine-Dalgarno 序列，而真核细胞用的起始因子至少有十二个，不是三个。已充电的起始 tRNA 带的是普通甲硫氨酸而非甲酰甲硫氨酸，由 eIF2 携 GTP 送上 40S 亚基，形成 43S 前起始复合物。与此同时 mRNA 结合 eIF4F，那是三个蛋白：eIF4E 抓住 5′ 帽；eIF4A 是一个 RNA 解旋酶，把信息上的二级结构解开；eIF4G 是连接件，一端结合 eIF4E，另一端结合前起始复合物。eIF4G 还结合停在信息另一端的 poly(A) 结合蛋白，于是 mRNA 被拉成一个圈 —— 这是大量翻译水平调控的结构基础。加上信息后得到 48S 复合物，它从帽子出发沿 RNA 扫描直到遇上一个 AUG，路上的结构由 eIF4A 打开，然后 60S 亚基合上来。**细菌靠与一个固定地标碱基配对来找起始密码子，真核靠从分子一端扫描过去来找 —— 正是这一条差别，使得一条细菌 mRNA 可以携带好几个基因、各带各的地标，而真核 mRNA 基本上做不到。**",
      src: "A p.1029 · §4.2.3, p.102"
    },
    {
      link_en: "with the chain started, every round of elongation opens with a delivery — and the delivery is also the check",
      link_cn: "链一旦起头，每一轮延长都从一次投递开始 —— 而这次投递同时就是那道检查",
      en: "A charged tRNA binds the A site only weakly on its own, so it arrives as a ternary complex: the tRNA, the protein EF-Tu and GTP travelling together as one package. That package binds A, the GTP is hydrolysed once codon and anticodon have paired correctly, and EF-Tu leaves carrying GDP; EF-Ts then strips that GDP off so a fresh GTP can bind, which makes EF-Ts a nucleotide exchange factor rather than a catalyst. The tRNA docks first by its anticodon, in the decoding centre of the small subunit, and only afterwards does its far end — some 70 Å away, at the other tip of the twisted L the molecule folds into — swing across into the catalytic centre of the large subunit, a movement called accommodation. The EF-Tu complexes carrying GTP and then GDP each persist only a few milliseconds, and a wrongly paired tRNA normally falls out of the A site during one of those windows; substitute a slowly hydrolysed GTP analogue and the windows lengthen, fidelity improves and the rate of synthesis falls. **Proofreading on the ribosome is a delay rather than an inspection, and it establishes only that codon and anticodon are correctly paired** — it says nothing at all about which amino acid the tRNA is carrying.",
      cn: "一条已充电的 tRNA 单独结合 A 位时结合得很弱，所以它是以三元复合物的形式抵达的：这条 tRNA、蛋白 EF-Tu、以及 GTP。复合物结合到 A 位，密码子与反密码子正确配对之后 GTP 才被水解，EF-Tu 带着 GDP 离开；随后 EF-Ts 把那个 GDP 剥下来，好让新的 GTP 接上 —— 所以 EF-Ts 是一个核苷酸交换因子，而不是催化剂。这条 tRNA 先用反密码子在小亚基的解码中心里对接上，之后它的另一端 —— 在约 70 Å 之外，位于这个分子折成的扭曲 L 形的另一个尖端 —— 才摆过去进入大亚基的催化中心，这个动作叫就位（accommodation）。带 GTP 和随后带 GDP 的两种 EF-Tu 复合物各只存在几毫秒，配错的 tRNA 通常就在其中一个窗口里从 A 位掉出去；换用水解很慢的 GTP 类似物，窗口就变长，保真度上升而合成速率下降。**核糖体上的校对是一段延迟，不是一次检查；而且它只能确认密码子与反密码子配对正确 —— 对「这条 tRNA 带的是哪个氨基酸」，它一个字也没说。**",
      src: "A p.1031 · A p.1035 · §4.2.3, p.99, Obr. 4.42"
    },
    {
      link_en: "then the bond itself, and the step that moves everything along by exactly one codon",
      link_cn: "然后是键本身，以及把一切精确推进一个密码子的那一步",
      en: "The bond is made by the amino group of the amino acid in the A site attacking the ester link that holds the growing chain to the tRNA in the P site, so the whole chain is transferred forward onto the incoming amino acid and never the other way round. Immediately afterwards each tRNA straddles two sites at once, which is a hybrid binding state: the uncharged one reaches into E and the chain-bearing one into P, while both anticodons stay put. Translocation then moves the ribosome exactly one codon toward the 3' end, carrying the chain-bearing tRNA fully into P and the spent tRNA into E, from which it leaves; this needs EF-G, also called translocase, and one more GTP, so two GTP are spent per residue added. EF-G and EF-Tu cannot occupy the ribosome at the same time, and that mutual exclusion is what stops the steps of a cycle running out of order. **EF-G can take the A site because its carboxyl-terminal part imitates a tRNA anticodon loop in both shape and charge distribution**: a protein has evolved to look like an RNA in order to occupy an RNA's seat.",
      cn: "这个键的形成，是 A 位上那个氨基酸的氨基去进攻「把生长中的链拴在 P 位 tRNA 上」的那个酯键 —— 所以整条链被向前转移到新来的氨基酸上，绝不是反过来。紧接着，两条 tRNA 各自同时跨在两个位点上，这叫杂合结合态（hybrid binding state）：未充电的那条伸进 E，带着链的那条伸进 P，而两个反密码子都留在原处。然后是转位（translocation）：核糖体朝 3′ 端精确移动一个密码子，把带链的 tRNA 完全送进 P、把用完的 tRNA 送进 E，它从那里离场；这一步需要 EF-G（又叫转位酶）和另一个 GTP，所以每加一个残基要花掉两个 GTP。EF-G 与 EF-Tu 不能同时占据核糖体，而这种互斥正是防止一个循环里的各步骤乱序的机制。**EF-G 之所以能占住 A 位，是因为它的羧基末端部分在形状和电荷分布上都在模仿一个 tRNA 的反密码子环：一个蛋白演化成看起来像 RNA，只为了占住一个 RNA 的座位。**",
      src: "A p.1032 · §4.2.3, p.100, Obr. 4.42–4.43"
    },
    {
      link_en: "at the end, the same catalyst is pointed at a different molecule and the chain comes off",
      link_cn: "到了终点，同一个催化剂被指向另一个分子，链就下来了",
      en: "There is no tRNA for a stop codon, so when UAA, UAG or UGA arrives in the A site nothing pairs with it and elongation halts for want of anything to continue it. A release factor then fills that empty site: RF1 reads UAG and UAA, RF2 reads UGA and UAA, RF3 is a GTP-binding accessory, and a eukaryote does the whole job with a single factor, eRF, which recognises all three stop codons on its own. Release factors carry domains thought to mimic tRNA structure, which is the same trick EF-G uses. Recycling then follows in order: the factors leave, EF-G with ribosome recycling factor splits off the large subunit, IF3 pushes the spent tRNA out, and the mRNA is released last, leaving the small subunit with IF3 on it — the state initiation begins from. A bacterial chain afterwards has its formyl group, or its whole formylmethionine, or even several of its first residues trimmed away by hydrolytic enzymes, so the first residue of a finished protein is usually not the one the start codon specified. Termination invents no new chemistry: **a bound release factor induces peptidyl transferase to transfer the finished chain to a water molecule instead of to another amino acid**, which leaves a free carboxylate end and simply lets the chain go.",
      cn: "终止密码子没有对应的 tRNA，所以当 UAA、UAG 或 UGA 进入 A 位时，没有任何东西与它配对，延长因为无以为继而停下。随后一个释放因子（release factor）填上这个空位：RF1 读 UAG 和 UAA，RF2 读 UGA 和 UAA，RF3 是一个结合 GTP 的辅助因子；而真核细胞用单独一个因子 eRF 就把整件事办了，它独自识别全部三个终止密码子。释放因子同样带有被认为在模仿 tRNA 结构的结构域 —— 与 EF-G 用的是同一个花招。随后是按顺序的回收：因子们离开，EF-G 与核糖体回收因子把大亚基卸下来，IF3 把用完的 tRNA 推出去，mRNA 最后被释放，剩下带着 IF3 的小亚基 —— 而这恰好是起始所要开始的那个状态。细菌肽链事后还要被水解酶修剪：可能只切甲酰基，可能切掉整个甲酰甲硫氨酸，甚至连最初的几个残基一起切掉 —— 所以成品蛋白的第一个残基，通常并不是起始密码子所指定的那一个。**终止没有发明任何新化学：结合上去的释放因子诱导肽基转移酶把完成的链转移到一个水分子上、而不是转移到另一个氨基酸上，于是链得到一个游离的羧酸根末端，就这样被放走。**",
      src: "A p.1036 · §4.2.3, p.101, Obr. 4.44–4.45 · §4.2.3, pp.101–102",
      openQuestion_en: "What RF3 specifically does has not been firmly established; it is thought to release the ribosomal subunit.",
      openQuestion_cn: "RF3 具体做什么，目前并没有被确凿地确定；一般认为它负责把核糖体亚基放开。",
      see: [{ id: "4-3-2", en: "the other things done to a chain after it is finished", cn: "链造完之后还要对它做的其他事" }]
    },
    {
      link_en: "add up what one peptide bond cost, and the answer says what the cell was actually buying",
      link_cn: "把一个肽键的花费加起来，答案会说明细胞真正买的是什么",
      en: "Item by item: making one charged tRNA spends two high-energy phosphates, because ATP goes all the way to AMP and the pyrophosphate is then hydrolysed; an extra ATP is spent every time proofreading destroys a wrongly activated amino acid; one GTP goes in the delivery step and another in translocation. The total is more than four nucleoside triphosphates hydrolysed per peptide bond on average. Set that against what a peptide bond is worth: at least 122 kJ/mol is spent to make a bond whose own hydrolysis releases only about 21 kJ/mol, a net change of about −101 kJ/mol, an enormous and deliberate over-payment. What the cell is buying is a peptide bond between two specified amino acids, so **every one of those high-energy phosphates is maintaining the alignment between a codon and an amino acid — energy here is the price of information rather than of chemistry**.",
      cn: "逐项来算：造一条已充电的 tRNA 要花掉两个高能磷酸键，因为 ATP 一路走到 AMP，随后焦磷酸又被水解；每当校对销毁一个被错误活化的氨基酸，就要额外再花一个 ATP；投递那一步花一个 GTP，转位再花一个。平均每形成一个肽键，水解掉四个以上的核苷三磷酸。把这个数字与一个肽键本身的价值对照：至少花掉 122 kJ/mol，去造一个自身水解只放出约 21 kJ/mol 的键，净变化约 −101 kJ/mol —— 这是一笔巨大的、有意为之的超额支付。**细胞买的是「两个指定的氨基酸之间的一个肽键」，所以这些高能磷酸键每一个都在维持密码子与氨基酸之间的对应关系 —— 这里的能量是信息的价钱，而不是化学的价钱。**",
      src: "A p.1036"
    },
    {
      link_en: "and because each stage is a separate stage, each one has a compound that stops it there",
      link_cn: "而正因为每个阶段彼此独立，每一个阶段都有一个化合物能把它就地卡住",
      recall_en: "the five stages of the first step, now met one at a time from the outside",
      recall_cn: "第一步说的那五个阶段，这一步从外部一个一个地被撞上",
      en: "Most of these compounds exploit small differences between bacterial and eukaryotic machinery, which is why most are relatively harmless to us. Puromycin, from the mould Streptomyces alboniger, resembles the 3' end of a charged tRNA closely enough to enter the A site and actually accept the growing chain, but it resembles only that end, so it cannot be translocated and falls off carrying the chain with it. Tetracyclines block the A site so that no charged tRNA can be delivered. Chloramphenicol blocks peptidyl transfer on bacterial, mitochondrial and chloroplast ribosomes while sparing the eukaryotic cytosol; cycloheximide is its exact mirror image, blocking only the eukaryotic 80S peptidyl transferase, which is why it is a laboratory reagent and not a drug. Streptomycin causes misreading of the code at low concentrations and blocks initiation at high ones. Two protein toxins are aimed at us instead: diphtheria toxin attaches an ADP-ribose group to a modified histidine of the eukaryotic elongation factor eEF2 and inactivates it, so translocation stops; and ricin, from the castor bean, removes a specific adenine base from the 28S rRNA and thereby inactivates the large subunit. **Each of these compounds arrests translation at one named stage, so the list of them is also a list of the stages, and every one of them is an experiment on the step it blocks.**",
      cn: "这些化合物大多利用细菌与真核机器之间的细微差别，这也是它们对我们大多相对无害的原因。嘌呤霉素（puromycin）来自霉菌 Streptomyces alboniger，它像已充电 tRNA 的 3′ 端像到足以进入 A 位、并且真的接下正在生长的链 —— 但它只像那一端，所以无法被转位，于是带着链一起掉下来。四环素类（tetracycline）堵住 A 位，使任何已充电的 tRNA 都送不进来。氯霉素（chloramphenicol）阻断细菌、线粒体、叶绿体核糖体上的肽基转移，却放过真核胞质；放线菌酮（cycloheximide）是它的精确镜像，只阻断真核 80S 的肽基转移酶 —— 这正是它只能当实验试剂而不能当药的原因。链霉素（streptomycin）低浓度下引起密码的误读，高浓度下阻断起始。另有两种蛋白毒素针对的是我们：白喉毒素（diphtheria toxin）把一个 ADP-核糖基接到真核延长因子 eEF2 上一个被修饰过的组氨酸残基上使其失活，于是转位停止；蓖麻毒素（ricin）来自蓖麻子，从 28S rRNA 上摘掉一个特定的腺嘌呤碱基，由此使大亚基失活。**这些化合物每一个都把翻译卡在某一个有名字的阶段上，所以它们的清单同时也是阶段的清单 —— 而每一个化合物，都是对它所阻断的那一步做的一次实验。**",
      src: "A p.1039"
    }
  ],
  terms: [
    { en: "the five stages", cn: "五个阶段",
      def_en: "Activation, initiation, elongation, termination, folding and processing. The three middle ones are the generic pattern shared with DNA and RNA synthesis; the two outer ones are counted separately because they are what secure fidelity and proper function rather than chain length.",
      def_cn: "活化、起始、延长、终止、折叠与加工。中间三个是与 DNA、RNA 合成共用的通用格式；外面两个之所以被单列，是因为它们保障的是保真度与最终功能，而不是链的长度。" },
    { en: "the two requirements met by charging", cn: "充电一并满足的两个要求",
      def_en: "The carboxyl of each amino acid must be activated so a peptide bond can form (energy), and each amino acid must be linked to the mRNA information specifying it (information). An ester bond from the amino acid to the CCA end of a tRNA does both at once — which is why charging is a stage in its own right and not a preparatory detail.",
      def_cn: "每个氨基酸的羧基必须被活化，肽键才能形成（能量）；每个氨基酸必须与指定它的那段 mRNA 信息建立联系（信息）。从氨基酸到 tRNA 的 CCA 末端的一根酯键，一次同时办成两件 —— 所以充电是一个独立的阶段，而不是一个准备性细节。" },
    { en: "aminoacyl-adenylate", cn: "氨酰腺苷酸",
      def_en: "The high-energy intermediate formed from an amino acid and ATP, with pyrophosphate released and promptly hydrolysed to pull the reaction forward; the amino acid then moves from it onto tRNA and AMP leaves.",
      def_cn: "由氨基酸与 ATP 生成的高能中间体，放出的焦磷酸随即被水解、把反应往前拉；氨基酸随后从它转移到 tRNA 上，AMP 离去。" },
    { en: "the double sieve", cn: "双筛",
      def_en: "Two successive substrate-specific filters whose effects multiply. Filter one, the activation site, excludes anything larger than the correct amino acid; filter two, a separate hydrolytic site on the same enzyme, destroys anything small enough to have slipped through. Ile-tRNA synthetase turns a 200-fold preference into a 1-in-3,000 error rate this way; synthetases whose amino acid has no look-alike barely proofread at all.",
      def_cn: "两道先后串联、效果相乘的底物特异性过滤器。第一道是活化位点，排除一切比正确氨基酸更大的；第二道是同一个酶上另一个独立的水解位点，销毁一切小到能溜过第一道的。Ile-tRNA 合成酶就是这样把 200 倍的偏好变成三千分之一的错误率；而那些氨基酸没有相似替身的合成酶几乎不做校对。" },
    { en: "the ribosome never checks the cargo", cn: "核糖体从不检查货物",
      def_en: "A tRNA deliberately charged with the wrong amino acid has that amino acid efficiently incorporated at whatever codon its anticodon reads. So the synthetase is the sole guardian of which amino acid goes where; its mistakes are final and invisible downstream, and the wrong residue lands where the anticodon says, not where its own chemistry would suggest.",
      def_cn: "一条被故意装上错误氨基酸的 tRNA，会让那个氨基酸被高效地掺入到「它的反密码子读到的那个密码子」的位置上。所以哪个氨基酸放在哪里，唯一的守门人是合成酶；它的错误是终局性的、对下游不可见，而错误的残基落在反密码子说的位置，不是它自身化学性质会暗示的位置。" },
    { en: "the second genetic code", cn: "第二套遗传密码",
      def_en: "The rules by which a synthetase recognises its own tRNA rather than its own amino acid. Discriminating positions cluster in the amino acid arm and the anticodon arm; ten or more nucleotides may be involved. In the alanine system a single G-U pair suffices, and a seven-base-pair hairpin carrying it is charged efficiently. Adding a new amino acid to the code therefore means building a new synthetase-tRNA pair.",
      def_cn: "合成酶用来认出「自己的 tRNA」（而不是「自己的氨基酸」）的那套规则。起区分作用的位置集中在氨基酸臂和反密码子臂；可能涉及十个以上核苷酸。丙氨酸系统里，一对 G-U 就够了，带着它的七碱基对发夹也能被高效充电。所以给密码新增一个氨基酸，就意味着造一套新的合成酶-tRNA 配对。" },
    { en: "peptidyl transferase is 23S rRNA", cn: "肽基转移酶就是 23S rRNA",
      def_en: "The activity that makes the peptide bond belongs to the 23S rRNA of the large subunit and not to any ribosomal protein: no protein lies within 18 Å of the active site. The subunits are huge RNA molecules with proteins on the surface, and a number of those proteins are enzymes or synthesis factors rather than scaffolding. Every peptide bond in every cell is therefore made by RNA.",
      def_cn: "形成肽键的那个活性属于大亚基的 23S rRNA，而不属于任何核糖体蛋白：活性中心 18 Å 之内没有蛋白。两个亚基是巨大的 RNA 分子，蛋白位于表面，而其中不少蛋白本身是酶或合成因子，并非只搭骨架。所以每一个细胞里的每一个肽键都是 RNA 做出来的。" },
    { en: "polyribosome", cn: "多聚核糖体",
      def_en: "Many ribosomes bound to one mRNA and translating it at once, 5 to 15 nm apart, at most about one per 80 nucleotides. It forms because the initiation region is released as soon as it has started a ribosome, long before that ribosome reaches the end of the gene. The classic picture is the fibroin polysomes of a Bombyx mori silk gland, with the trailing chains getting longer along the row.",
      def_cn: "许多核糖体结合在同一条 mRNA 上同时翻译，间距 5–15 nm，最多约每 80 个核苷酸一个。它之所以能形成，是因为起始区一旦启动了一个核糖体就被释放，远早于那个核糖体走到基因末尾。经典画面是家蚕丝腺的丝心蛋白多聚核糖体，沿着一列，拖着的链越来越长。" },
    { en: "A, P and E sites and the initiator's privilege", cn: "A、P、E 位与起始者的特权",
      def_en: "Aminoacyl, peptidyl and exit. A and P hold charged tRNAs; E holds only uncharged ones on their way out. Formylmethionyl-tRNA is the only charged tRNA that binds first to the P site, every other one entering at A — and during initiation IF1 physically blocks A. A transformylase is the selective step, adding the formyl group only to the initiator, which both keeps it out of internal positions and lets it bind the initiation site.",
      def_cn: "氨酰位、肽基位、出口位。A 和 P 容纳已充电的 tRNA；E 只容纳正在离场的未充电 tRNA。甲酰甲硫氨酰-tRNA 是唯一直接先结合 P 位的已充电 tRNA，其他每一条都从 A 位进入 —— 而起始过程中 IF1 实际堵住了 A 位。有选择性的那一步是转甲酰酶：它只给起始者加甲酰基，既让它进不了内部位置，又让它能结合起始位点。" },
    { en: "Shine-Dalgarno sequence", cn: "Shine-Dalgarno 序列",
      def_en: "A purine-rich stretch in an mRNA, 8 to 13 bp upstream of the initiation codon, that base-pairs with a complementary pyrimidine-rich stretch near the 3' end of the 16S rRNA. It is what distinguishes the starting AUG from every internal one, it lies entirely outside the reading frame, and it is one of the three independent recognitions fixing the initiator in the P site.",
      def_cn: "mRNA 上一段富含嘌呤的序列，位于起始密码子上游 8 到 13 bp 处，与 16S rRNA 3′ 端附近一段富含嘧啶的互补序列配对。它正是把起始的 AUG 与所有内部 AUG 区分开的东西，完全位于阅读框之外，也是把起始者锁在 P 位的三次独立识别之一。" },
    { en: "scanning versus base pairing", cn: "扫描 vs 碱基配对",
      def_en: "A bacterium locates the start codon by pairing a Shine-Dalgarno sequence to the 16S rRNA — a fixed landmark, which can be repeated for each gene on one message. A eukaryote loads at the 5' cap through eIF4F and scans along until an AUG appears. That single difference is why bacterial mRNAs can carry several genes and eukaryotic ones essentially cannot.",
      def_cn: "细菌靠 Shine-Dalgarno 序列与 16S rRNA 配对来定位起始密码子 —— 那是一个固定地标，一条信息上每个基因都可以各有一个。真核则通过 eIF4F 在 5′ 帽处上样，沿着扫描到出现 AUG 为止。就这一条差别，决定了细菌 mRNA 能携带好几个基因，而真核 mRNA 基本上不能。" },
    { en: "accommodation", cn: "就位",
      def_en: "The conformational change that swings a newly bound tRNA's aminoacyl end into the peptidyl transferase site, after its anticodon has already docked in the decoding centre some 70 Å away. Binding and reacting are two separate motions, and the interval between them is what makes proofreading on the ribosome possible at all.",
      def_cn: "在反密码子已经在约 70 Å 之外的解码中心对接完成之后，把新结合的 tRNA 的氨酰端摆进肽基转移酶位点的那次构象变化。结合与反应是两个分开的动作，而两者之间的间隙正是核糖体上能够校对的全部前提。" },
    { en: "proofreading as a delay", cn: "作为「延迟」的校对",
      def_en: "The EF-Tu complexes with GTP and with GDP each last only a few milliseconds, and a wrongly paired tRNA falls out of the A site during one of those windows. A slowly hydrolysed GTP analogue lengthens the windows: fidelity improves and rate falls — the direct demonstration that translation balances speed against accuracy. It establishes only that codon and anticodon are paired, never which amino acid is aboard.",
      def_cn: "带 GTP 和带 GDP 的两种 EF-Tu 复合物各只存在几毫秒，配错的 tRNA 就在其中一个窗口里从 A 位掉出去。换用水解很慢的 GTP 类似物会拉长窗口：保真度上升、速率下降 —— 这是「翻译在速度与准确性之间取平衡」的直接证明。它只能确认密码子与反密码子配上了，永远说不出车上装的是哪个氨基酸。" },
    { en: "translocation", cn: "转位",
      def_en: "The EF-G-driven, GTP-consuming move of peptidyl-tRNA and mRNA from A to P by exactly one codon, with the spent tRNA leaving through E, passing through a hybrid state in which each tRNA straddles two sites. EF-G and EF-Tu cannot be bound at once, which keeps the steps of a cycle in order, and EF-G takes the A site by imitating a tRNA anticodon loop in shape and charge.",
      def_cn: "由 EF-G 驱动、消耗 GTP 的一步：肽酰-tRNA 与 mRNA 从 A 位移到 P 位，恰好一个密码子的距离，用完的 tRNA 经 E 位离开，途中经过每条 tRNA 各跨两个位点的杂合态。EF-G 与 EF-Tu 不能同时结合，这使一个循环的各步骤保持顺序；而 EF-G 靠在形状和电荷上模仿 tRNA 的反密码子环来占住 A 位。" },
    { en: "the cost of one peptide bond", cn: "一个肽键的代价",
      def_en: "More than four NTPs on average: two high-energy phosphates per charged tRNA, an extra ATP whenever proofreading destroys a wrongly activated amino acid, one GTP in delivery and one in translocation. At least 122 kJ/mol spent on a bond whose own hydrolysis releases about 21 kJ/mol. The over-payment buys a bond between two specified amino acids — energy as the price of information.",
      def_cn: "平均四个以上核苷三磷酸：每条已充电 tRNA 两个高能磷酸键，每次校对销毁错误活化的氨基酸再加一个 ATP，投递一个 GTP、转位一个 GTP。至少 122 kJ/mol 花在一个自身水解只放出约 21 kJ/mol 的键上。这笔超额支付买到的是「两个指定氨基酸之间」的键 —— 能量是信息的价钱。" },
    { en: "puromycin, chloramphenicol and cycloheximide", cn: "嘌呤霉素、氯霉素、放线菌酮",
      def_en: "Puromycin resembles the 3' end of a charged tRNA closely enough to enter the A site and accept the chain, but not closely enough to be translocated, so it falls off and ends synthesis early. Chloramphenicol blocks peptidyl transfer on bacterial, mitochondrial and chloroplast ribosomes; cycloheximide blocks only the eukaryotic 80S one, which is why it is a reagent and not a drug.",
      def_cn: "嘌呤霉素像已充电 tRNA 的 3′ 端像到足以进入 A 位并接下链，却不足以被转位，于是掉下来、提前终止合成。氯霉素阻断细菌、线粒体、叶绿体核糖体上的肽基转移；放线菌酮只阻断真核 80S 的那个 —— 所以它是试剂而不是药。" },
    { en: "diphtheria toxin and ricin", cn: "白喉毒素与蓖麻毒素",
      def_en: "The two protein toxins aimed at eukaryotic translation. Diphtheria toxin attaches an ADP-ribose group to a modified histidine of elongation factor eEF2 and inactivates it, so translocation stops. Ricin, from the castor bean, removes a specific adenine base from the 28S rRNA and thereby inactivates the large ribosomal subunit.",
      def_cn: "两种针对真核翻译的蛋白毒素。白喉毒素把一个 ADP-核糖基接到延长因子 eEF2 上一个被修饰过的组氨酸上，使其失活，转位停止。蓖麻毒素来自蓖麻子，从 28S rRNA 上摘掉一个特定的腺嘌呤碱基，由此使核糖体大亚基失活。" }
  ]
};

/* ------------------------------------------------------- 基因表达的调控 ---- */
window.BIOLITE_SPINE["key:gene-regulation-proteins"] = {
  assumed: ["DNA", "RNA", "gene", "base", "nucleotide", "protein", "enzyme", "cell",
            "amino acid", "hydrogen bond", "chromosome", "genome", "mRNA", "tRNA",
            "ribosome", "codon", "transcription", "translation", "nucleus",
            "cytoplasm", "cytosol", "membrane", "substrate", "yeast", "lactose",
            "galactose", "glucose", "zinc", "asparagine", "glutamine", "glutamate",
            "lysine", "arginine", "serine", "threonine", "proline", "leucine",
            "histidine", "tryptophan", "thymine", "cytosine", "adenine", "guanine",
            "purine", "pyrimidine", "alpha helix", "beta turn", "van der Waals",
            "double helix", "helix", "hairpin", "palindrome", "prokaryote",
            "eukaryote", "RNA polymerase", "promoter", "sigma factor", "holoenzyme",
            "subunit", "terminator", "effector", "cortisol", "estrogen",
            "progesterone", "testosterone", "insulin", "thyroxine", "collagen",
            "hemoglobin", "heme", "iron", "hormone", "receptor", "protein kinase",
            "cAMP", "histone", "phosphorylation", "methylation", "cancer", "tumour",
            "centromere", "phosphate", "ATP", "GTP", "molecular weight"],
  nodeTitle_en: "Gene regulation: the proteins that read DNA, and what they read it for",
  nodeTitle_cn: "基因调控：读 DNA 的那些蛋白，以及它们为什么要读",
  title_en: "How a bacterium switches a group of genes with one protein or one stalled ribosome, how a protein finds one site among millions, and why a eukaryotic gene is off until something turns it on",
  title_cn: "细菌怎样用一个蛋白、或一个卡住的核糖体开关一整组基因，一个蛋白怎样在几百万个位点里找到属于它的那一个，以及真核基因为什么在被打开之前一直关着",
  steps: [
    {
      en: "Seven processes together set how much of a protein is present in a cell: transcription initiation, processing of the transcript, how long the RNA survives, how much of it is translated, chemical modification of the protein, where the protein is sent, and how fast it is destroyed. Regulating any of them costs energy, and for many genes, especially in eukaryotes, a considerable amount of it — a cost that is nevertheless small beside transcribing and translating a gene that was not needed. Control runs in two directions: negative regulation, also called repression, slows the copying of a gene into RNA, and positive regulation, also called stimulation, has a regulatory protein speed that copying up. Both exist for the same reason, since a cell must not waste materials on a protein it has no use for and must not run short of one it needs. **Control at transcription initiation is the best documented of the seven, and it is the only one that can switch many genes with interdependent jobs together**, because it acts before anything gene-specific has been made.",
      cn: "有七个过程一起决定一个蛋白在细胞里有多少：转录起始、转录本的加工、这条 RNA 能存活多久、它被翻译多少、蛋白的化学修饰、蛋白被送到哪里，以及它被销毁得多快。调控其中任何一个都要花能量，对许多基因（尤其是真核基因）花得还不少 —— 但这笔开销与「真把一个不需要的基因转录并翻译出来」相比仍然很小。控制有两个方向：负调节（阻遏）减缓基因被抄成 RNA 的速度，正调节（刺激）则由一个调节蛋白把这种抄写加快。两者存在的理由相同：细胞既不能浪费材料去造一个用不上的蛋白，也不能让需要的那个短缺。**七个过程里，转录起始这一环的控制被研究得最透；而且它是唯一一个能把多个职能互相依赖的基因一起开关的环节，因为它作用在任何基因特异性产物被造出来之前。**",
      src: "A p.1055 · §4.2.4, p.102"
    },
    {
      link_en: "and before any regulatory protein enters, the promoter is already regulating",
      link_cn: "而在任何调控蛋白登场之前，启动子自己就已经在调控了",
      en: "A promoter — the DNA sequence RNA polymerase binds in order to start transcribing the gene beside it — is not one fixed sequence. Promoter sequences vary a great deal, which changes how tightly the polymerase binds and therefore how often transcription starts: some E. coli genes are transcribed once a second and others less than once per cell generation, and with no regulatory protein present at all the promoter sequence alone can change the frequency of initiation by a factor of 1,000 or more. One convention has to be stated before any of these sequences can be read: they are always written as they appear in the nontemplate strand, meaning the strand whose sequence matches the RNA, with the 5' end on the left and numbering from the transcription start site, so the E. coli consensus reads TTGACA at -35 and TATAAT at -10. **Genes whose products are needed at all times, such as the enzymes of central metabolism, are called housekeeping genes and are expressed at a roughly constant level**, and for them the promoter sequence may be the only regulation there is; for every other gene it sets the basal rate that regulatory proteins then work on.",
      cn: "启动子（RNA 聚合酶为了开始转录旁边那个基因而结合的那段 DNA）并不是一条固定的序列。启动子序列差别很大，这改变了聚合酶结合得有多紧，也就改变了转录多久起始一次：有些大肠杆菌基因每秒转录一次，另一些还不到每代一次；在完全没有调控蛋白的情况下，单靠启动子序列就能让起始频率相差 1,000 倍以上。在读这些序列之前，必须先把一条约定说清楚：它们永远写成非模板链上的样子 —— 也就是序列与 RNA 一致的那条链 —— 5′ 端在左，从转录起点开始编号；所以大肠杆菌的共有序列是 -35 处的 TTGACA 和 -10 处的 TATAAT。**产物任何时候都需要的基因（比如中心代谢的那些酶）叫管家基因（housekeeping gene），它们的表达水平大致恒定，对它们来说启动子序列可能就是全部的调控；而对其他每一个基因，启动子定下的是调控蛋白随后在其上动手的基础速率。**",
      src: "A p.1056",
      see: [{ id: "L-26-1-1", en: "the same convention, and the strand naming behind it", cn: "同一条约定，以及它背后的链命名" }]
    },
    {
      link_en: "everything else is done by three classes of protein, which between them give four patterns of response",
      link_cn: "其余的都由三类蛋白完成，而它们合起来给出四种响应模式",
      en: "Specificity factors change which promoters RNA polymerase will bind, and the sigma subunits are exactly this: σ⁷⁰ recognises most E. coli promoters while σ³² redirects the same enzyme to the heat shock promoters. Repressors bind a site called an operator near a promoter and block the polymerase from binding or from moving on, which is negative regulation. Activators bind DNA and make the polymerase work better at that promoter, often at promoters it binds weakly or not at all, which is positive regulation. Now the four patterns, which is where a simple two-way switch stops being enough. A signal molecule can make a repressor let go of its operator and switch transcription on, or make it bind and switch transcription off; symmetrically, a signal can make an activator let go and inhibit transcription, or bind and induce it. **A signal can therefore raise or lower transcription in either case, so the words positive and negative name which kind of protein is involved and never the direction in which the signal pushes.**",
      cn: "特异性因子改变 RNA 聚合酶愿意结合哪些启动子，σ 亚基正是这一类：σ⁷⁰ 识别大肠杆菌的大多数启动子，σ³² 把同一个酶改派到热激启动子上。阻遏蛋白结合在启动子附近一个叫操纵基因（operator）的位点上，挡住聚合酶结合或前进，这叫负调控。激活蛋白结合 DNA 并让聚合酶在该启动子上工作得更好，它们常出现在聚合酶本来结合很弱、甚至根本不结合的启动子旁，这叫正调控。接下来是四种模式 —— 一个简单的二档开关在这里不够用了。一个信号分子可以让阻遏蛋白松开操纵基因，把转录打开；也可以让它结合上去，把转录关掉。对称地，一个信号可以让激活蛋白松开，从而抑制转录；也可以让它结合，从而诱导转录。**所以两种情况下信号都可能升高或降低转录 —— 「正」「负」两个字命名的是牵涉到哪一类蛋白，绝不是信号把转录往哪个方向推。**",
      src: "A p.1056"
    },
    {
      link_en: "and in a bacterium the unit being regulated is a group of genes, not one gene",
      link_cn: "而在细菌里，被调控的单位是一组基因，不是单个基因",
      en: "Many bacterial mRNAs are polycistronic, meaning several genes sit on a single transcript, so one promoter is the point of regulation for all of them at once. A cluster of genes together with the promoter and the sequences that regulate it is an operon: two to six genes is common and some hold twenty or more. Beside it sits a regulator gene — gene I in the lactose system — whose product is diffusible, made at one place on the chromosome and travelling through the cell to the site it controls, so a regulator gene need not sit next to the operon it governs. The identity and order of the genes inside an operon are not random: they often encode subunits of one protein complex, and being made from one transcript, on adjacent ribosomes, at the same time and place, is directly what lets those subunits assemble. François Jacob and Jacques Monod described two adjacent lactose genes regulated together by an element at one end of the cluster in 1960, and **that paper introduced the words operon and operator — after which gene regulation could be discussed in molecular terms for the first time**.",
      cn: "许多细菌 mRNA 是多顺反子的（polycistronic），意思是一条转录本上有好几个基因，于是一个启动子同时就是它们全部的调控点。一簇基因加上它的启动子以及调控它的那些序列，叫一个操纵子（operon）：二到六个基因是常见的，有些含二十个以上。它旁边有一个调节基因 —— 在乳糖系统里是 I 基因 —— 其产物是可扩散的：它在染色体的某一处被造出来，穿过细胞走到它所控制的位点，所以一个调节基因不必紧挨着它所管辖的操纵子。操纵子里基因的身份和顺序都不是随机的：它们常常编码同一个蛋白复合物的各个亚基，而「出自同一条转录本、在相邻的核糖体上、在同一时间同一地点被造出来」这件事本身，就直接让这些亚基能够组装。**1960 年 François Jacob 与 Jacques Monod 描述了两个相邻的乳糖基因被基因簇一端的一个元件一起调控，那篇论文引入了「操纵子」和「操纵基因」这两个词 —— 此后基因调控才第一次可以用分子的语言讨论。**",
      src: "A p.1058 · §4.2.4, p.103, Obr. 4.46"
    },
    {
      link_en: "the lactose operon is three genes, one repressor and one small molecule",
      link_cn: "乳糖操纵子就是三个基因、一个阻遏物和一个小分子",
      en: "The lac structural genes are Z, Y and A, encoding β-galactosidase, which splits lactose into galactose and glucose, galactoside permease, which carries lactose into the cell, and thiogalactoside transacetylase; transcribing them as one unit means a cell never acquires the ability to take lactose up without also acquiring the ability to use it. The product of gene I is the repressor, and a low-molecular-weight effector decides which way it behaves: a corepressor strengthens repression, while an inducer — frequently the enzyme's own substrate or a derivative of it — binds the repressor and stops it binding DNA, which makes the rule read directly as build the enzyme only when there is something for it to act on. The lac operator is very nearly a palindrome, a sequence followed by its own reverse complement, and the repressor holds the main operator O1 plus one of two secondary sites, O2 and O3, that sit inside gene lacZ, with the DNA between them looped out. **O1 overlaps the lac promoter, and that is what makes repression physical: two proteins cannot occupy the same DNA at once, so a repressor sitting there leaves RNA polymerase nowhere to bind** — and deleting the two secondary sites costs a full order of magnitude, 1,000-fold repression falling to about 100-fold.",
      cn: "lac 的结构基因是 Z、Y、A，分别编码 β-半乳糖苷酶（把乳糖切成半乳糖和葡萄糖）、半乳糖苷透过酶（把乳糖运进细胞）和硫代半乳糖苷转乙酰酶；把它们作为一个单元一起转录，意味着细胞绝不会只获得「摄取乳糖」的能力而没有「利用乳糖」的能力。I 基因的产物是阻遏物（repressor），而一个低分子量的效应物决定它往哪边倒：辅阻遏物（corepressor）加强阻遏，诱导物（inducer）—— 常常就是该酶自己的底物或其衍生物 —— 结合阻遏物、使它无法再结合 DNA，于是规则可以直接读出来：只有当有东西供它作用时，才把这个酶造出来。lac 操纵基因几乎是回文的，即一段序列后面跟着它自己的反向互补序列；阻遏物占住主操纵位点 O1，外加位于 lacZ 基因内部的两个次级位点 O2 和 O3 之一，中间的 DNA 环出去。**O1 与 lac 启动子重叠，这正是阻遏之所以是物理性的原因：两个蛋白不可能同时占住同一段 DNA，阻遏物坐在那里，RNA 聚合酶就无处可结合 —— 而把那两个次级位点删掉要付出整整一个数量级，阻遏从 1,000 倍降到约 100 倍。**",
      src: "A p.1059 · §4.2.4, pp.103–104, Obr. 4.46–4.47"
    },
    {
      link_en: "and the switch has to leak, or it could never be switched on",
      link_cn: "而这个开关必须漏，否则它永远打不开",
      en: "Repression is not absolute. A repressed cell still holds a few molecules of β-galactosidase and permease, made on the rare occasions when the repressor lets go, and that residue is essential, because the molecule that actually induces the operon is allolactose, an isomer of lactose. Lactose has to be carried in by the few pre-existing permease molecules and converted to allolactose by the few pre-existing β-galactosidase molecules. Induction — the switching-on of an operon by its own signal molecule — then raises β-galactosidase 1,000-fold, exactly undoing the repression. One laboratory tool follows directly: IPTG is a galactoside that induces the operon and cannot be metabolised, so it separates lactose's role as food from its role as signal, which is why it appears in every induction protocol. **A perfectly tight switch could never be turned on by its own substrate, so the leak in this one is a design requirement rather than a defect.**",
      cn: "阻遏并不是绝对的。处于阻遏状态的细胞里仍然留有几个 β-半乳糖苷酶和透过酶分子，来自阻遏物偶尔松手的那些时刻；而这点残余是必不可少的，因为真正诱导这个操纵子的分子是异构乳糖（allolactose），乳糖的一个异构体。乳糖必须先由那几个已经存在的透过酶分子运进来，再由那几个已经存在的 β-半乳糖苷酶分子转成异构乳糖。诱导（一个操纵子被它自己的信号分子打开）随后把 β-半乳糖苷酶提高 1,000 倍，恰好抵消阻遏。由此直接产生一个实验工具：IPTG 是一种能诱导该操纵子、却不能被代谢的半乳糖苷，它把乳糖「作为食物」的角色与「作为信号」的角色分开 —— 这正是它出现在每一份诱导方案里的原因。**一个关得严丝合缝的开关，永远没法被它自己的底物打开 —— 所以这个开关会漏，是设计要求而不是缺陷。**",
      src: "A p.1059"
    },
    {
      link_en: "and when the operator is free at last, starting transcription is still not instantaneous",
      link_cn: "而操纵基因终于空出来之后，启动转录仍然不是一蹴而就的",
      en: "The RNA polymerase holoenzyme — the complete enzyme, subunits α₂ββ'σ — forms an open complex with the promoter and then repeatedly makes short RNA oligomers of up to 9 nucleotides and lets them go again. This abortive initiation continues until the σ factor is released and the promoter is cleared, after which the core enzyme α₂ββ' elongates the transcript properly. **Starting is the difficult step of transcription, and abortive initiation is what a polymerase failing to get started actually looks like**: the products are real RNA, made on the real template, and simply too short to be anything.",
      cn: "RNA 聚合酶全酶（即亚基为 α₂ββ′σ 的完整酶）与启动子形成开放复合物，随后反复合成长度不超过 9 个核苷酸的短 RNA 寡聚体，又反复把它们放掉。这种流产性起始一直持续到 σ 因子被释放、启动子被腾空，此后由核心酶 α₂ββ′ 正式延伸转录本。**起始才是转录里难的那一步；而「聚合酶起不了步」的真实样子，就是流产性起始：产物是真的 RNA、在真的模板上造出来的，只是短到什么也算不上。**",
      src: "§4.2.4, p.104"
    },
    {
      link_en: "a second operon, controlled a completely different way — with no regulatory protein on the DNA at all",
      link_cn: "第二个操纵子，控制方式完全不同 —— DNA 上根本没有调控蛋白",
      en: "The trp operon of E. coli encodes five polypeptides that make up three enzymes of tryptophan synthesis. RNA polymerase first transcribes only a leader sequence, trpL, 162 nucleotides long, and near the end of that leader sits a further regulatory element, the attenuator, at which transcription can be stopped after nothing but the leader has been made — so a cell can abandon a gene it has already started. The leader encodes a short leader peptide, and a ribosome translates it just behind the RNA polymerase that is still transcribing. Four stretches of the leader RNA, numbered 1 to 4, can pair with each other in two mutually exclusive ways: 2 with 3, or 3 with 4. **The measuring device in this system is the ribosome's own position on the message, because how far the ribosome has got decides which of those two pairings is able to form.**",
      cn: "大肠杆菌的 trp 操纵子编码五条多肽，组成色氨酸合成所需的三个酶。RNA 聚合酶首先只转录一段前导序列 trpL，长 162 个核苷酸；在这段前导序列末端附近还有一个调节元件，叫衰减子（attenuator）—— 转录可以在只造出前导序列之后就在这里停下，于是细胞能够放弃一个已经开了头的基因。前导序列编码一条短短的前导肽，一个核糖体紧跟在仍在转录的 RNA 聚合酶后面翻译它。前导 RNA 上有四个区段，编号 1 到 4，它们能以两种互斥的方式互相配对：2 与 3 配，或者 3 与 4 配。**这套系统里的测量装置就是核糖体自己在信息上的位置，因为核糖体走到了哪里，决定了那两种配对里哪一种能够形成。**",
      src: "§4.2.4, p.105, Obr. 4.48–4.49"
    },
    {
      link_en: "and the leader peptide contains exactly the thing the cell wants to measure",
      link_cn: "而前导肽里含的，恰恰就是细胞想测量的那样东西",
      recall_en: "a hairpin terminator is a G+C-rich stem followed by a run of U, from the transcription chain",
      recall_cn: "发夹式终止子是富含 G+C 的茎后面跟一串 U —— 转录那条主线讲过",
      en: "The leader peptide contains a tandem pair of tryptophan codons. With tryptophan abundant the ribosome moves smoothly and comes to rest over region 2, physically preventing hairpin 2-3 from forming; hairpin 3-4 forms instead, hairpin 3-4 is a transcription terminator, and transcription stops after 162 nucleotides rather than after the whole operon. With tryptophan scarce there is not enough tryptophanyl-tRNA to read those two codons, the ribosome stalls in region 1, region 2 is then free to pair with region 3, and hairpin 2-3 is an antiterminator that uses up region 3 so that hairpin 3-4 cannot form — the polymerase reads straight through a terminator that no longer exists and transcribes the structural genes. Attenuation of this kind requires a ribosome to be translating a message while RNA polymerase is still making it, which is possible only where no nuclear membrane separates the two. **The cell measures its tryptophan supply by whether its own ribosome can get past two tryptophan codons, which is a direct reading of charged tRNA with no sensor protein anywhere in the system.**",
      cn: "前导肽里含有连续两个色氨酸密码子。色氨酸充足时，核糖体走得顺畅，最后停在区段 2 上，从物理上阻止发夹 2-3 形成；于是形成的是发夹 3-4，而发夹 3-4 是一个转录终止子，转录在 162 个核苷酸之后停下，而不是在整个操纵子之后。色氨酸稀缺时，能读那两个密码子的色氨酰-tRNA 不够，核糖体卡在区段 1，这时区段 2 空出来与区段 3 配对，而发夹 2-3 是一个抗终止子：它把区段 3 用掉了，发夹 3-4 就无从形成 —— 聚合酶直接通读过一个已经不存在的终止子，把结构基因转录下去。这种衰减作用要求：RNA 聚合酶还在合成这条信息的时候，就已经有一个核糖体在翻译它 —— 这只有在两者之间没有核膜相隔的地方才做得到。**细胞衡量自己的色氨酸供应，靠的是「自己的核糖体能不能越过两个色氨酸密码子」—— 这是对荷载 tRNA 的直接读数，整套系统里没有任何一个传感蛋白。**",
      src: "§4.2.4, p.105, Obr. 4.49",
      see: [{ id: "L-26-1-1", en: "the hairpin terminator this borrows, and the rho-dependent kind", cn: "这里借用的那种发夹式终止子，以及依赖 rho 的那一种" }]
    },
    {
      link_en: "so now the question none of that has answered: how does a protein find its one site among millions?",
      link_cn: "现在轮到上面全都没有回答的那个问题：一个蛋白怎么在几百万个位点里找到属于它的那一个？",
      en: "A regulatory protein binds its target sequence 10⁴ to 10⁶ times more tightly than it binds any other DNA sequence, using a DNA-binding domain — a self-contained region of the protein that does the binding — of only 60 to 90 amino acid residues, with the part actually touching the DNA smaller still. The discrimination comes from the major groove, which is the wider of the two grooves spiralling along a double helix: most of the chemical groups that differ between one base pair and another are hydrogen-bond donors and acceptors exposed there, and most of the protein-DNA contacts that decide specificity are hydrogen bonds. Contacts in the minor groove are possible, but its hydrogen-bonding patterns do not distinguish one base pair from another. The side chains doing most of that bonding are those of Asn, Gln, Glu, Lys and Arg, and some pairings are clean enough to look like a rule — the two hydrogen bonds Gln or Asn can make to the N-6 and N-7 positions of adenine cannot form with any other base, and Arg can make two to the N-7 and O-6 of guanine — yet examining many structures showed that one protein can read an A=T pair through a Gln-adenine contact while another reads the same pair through a van der Waals pocket that fits thymine's methyl group. **No simple amino-acid-to-base code exists, and the practical consequence is blunt: nobody can yet look at the structure of a DNA-binding protein and infer the DNA sequence it binds.**",
      cn: "一个调控蛋白结合自己的目标序列，比结合任何其他 DNA 序列紧 10⁴ 到 10⁶ 倍，用的是一个只有 60 到 90 个氨基酸残基的 DNA 结合结构域（即蛋白里专门负责结合的那个自成一体的区域），其中真正碰到 DNA 的部分还更小。这份分辨力来自大沟 —— 沿双螺旋盘旋的两条沟里较宽的那条：碱基对之间彼此不同的化学基团大多是暴露在那里的氢键供体和受体，而决定特异性的蛋白-DNA 接触也大多是氢键。小沟里也可以有接触，但那里的氢键模式区分不出一个碱基对与另一个。承担大部分成键的侧链是 Asn、Gln、Glu、Lys、Arg，其中有些配对干净得像是一条规则 —— Gln 或 Asn 与腺嘌呤 N-6、N-7 之间那两个氢键与任何其他碱基都形不成，Arg 与鸟嘌呤的 N-7 和 O-6 之间也能形成两个 —— 可是把大量结构看过去之后发现，一个蛋白可以用 Gln 与腺嘌呤的接触去读一个 A=T，另一个蛋白却用一个正好容纳胸腺嘧啶甲基的范德华口袋去读同一个 A=T。**并不存在一套简单的「氨基酸对碱基」的密码，而实际后果说得很直白：目前还没有人能看着一个 DNA 结合蛋白的结构，就推断出它结合的 DNA 序列。**",
      src: "A p.1060 · A p.1061",
      openQuestion_en: "Whether some more complex set of recognition rules exists, and could one day let a binding sequence be predicted from a structure, is open.",
      openQuestion_cn: "是否存在某套更复杂的识别规则、将来能让人从结构预测出结合序列，这个问题仍然开放。"
    },
    {
      link_en: "a site of twenty base pairs is short, and symmetry is how the shortness is made up for",
      link_cn: "二十个碱基对的位点太短了 —— 补上这份短的办法是对称",
      recall_en: "the almost-palindromic lac operator from the lactose step, now explained rather than described",
      recall_cn: "乳糖那一步说的「几乎是回文的」lac 操纵基因，这一步不是描述它，而是解释它",
      en: "The binding sites for regulatory proteins are often inverted repeats — a short sequence followed by its own reverse complement — and two subunits of the same protein bind them cooperatively, one subunit on each half, so the protein reads twice as much sequence as any one subunit could. That is the structural reason a lac operator is very nearly a palindrome. The Lac repressor is unusual even so: it is a tetramer built as two tethered dimers, each dimer contacting 17 bp within a 22 bp region, and a cell holds only about 20 tetramers. One nonpolar exception to the hydrogen-bond picture is worth carrying, since it is the only shape-based read in the whole system: the surface near C-5 of a pyrimidine, where thymine is told from cytosine by its protruding methyl group. **The Lac repressor binds its site with a dissociation constant near 10⁻¹⁰ M and discriminates against other DNA by about 10⁶-fold — the budget of the step before, met in a real protein by reading two half-sites at once.**",
      cn: "调控蛋白的结合位点常常是反向重复 —— 一小段序列后面跟着它自己的反向互补序列 —— 而同一个蛋白的两个亚基协同地结合上去，一边一个亚基，于是这个蛋白读到的序列长度是任何单个亚基所能读的两倍。这正是 lac 操纵基因几乎是回文的结构性原因。饶是如此，Lac 阻遏蛋白仍然特别：它是一个四聚体，由两个拴在一起的二聚体构成，每个二聚体在一个 22 bp 的区域内接触 17 bp，而一个细胞里只有约 20 个四聚体。氢键那幅图景有一个非极性的例外值得随身带着，因为它是整个系统里唯一一次靠形状读取：嘧啶 C-5 附近的那个表面 —— 胸腺嘧啶靠它突出来的甲基与胞嘧啶区分开。**Lac 阻遏蛋白结合自己位点的解离常数接近 10⁻¹⁰ M，对其他 DNA 的分辨约为 10⁶ 倍 —— 上一步算的那笔账，在一个真实的蛋白身上靠「一次读两个半位点」兑现了。**",
      src: "A p.1061"
    },
    {
      link_en: "and reaching into a groove needs a small structure, which is exactly what is hard to build",
      link_cn: "而伸进一条沟里需要一个小结构 —— 而小结构恰恰是最难做的",
      en: "To touch bases inside the major groove a protein needs a small substructure protruding stably from its surface, and small structures are intrinsically unstable, because there is not enough of them to bury a hydrophobic core; the recognised DNA-binding motifs are the solutions to that problem. The helix-turn-helix is about 20 residues in two short α-helical segments of 7 to 9 residues each, joined by a β turn; it is not stable on its own but is the working part of a larger domain, and one of its two helices is the recognition helix, stacked against the rest of the protein so that it sticks out and lies in or nearly in the major groove. The Lac repressor has one. The zinc finger is about 30 residues forming an elongated loop pinched together at its base by a single Zn²⁺ ion held by four Cys residues or by two Cys and two His, and one finger binds DNA weakly, so proteins carry several and bind with all of them at once — Zif268 has three and one frog DNA-binding protein has 37. The homeodomain is 60 residues whose DNA-binding segment is related to the helix-turn-helix; it is named after the homeotic genes that decide which body part develops where, it is highly conserved from flies to humans, and the DNA encoding it is called the homeobox. **The point most often got wrong about a zinc finger is that the zinc never touches the DNA: it only holds the small motif in shape, and everything that actually reads a base is protein.**",
      cn: "要碰到大沟内部的碱基，蛋白需要一个能稳定地从表面伸出来的小结构，而小结构天生不稳定，因为它没有足够的体量把疏水核心埋起来；那几个被认出来的 DNA 结合基序就是这个问题的解法。螺旋-转角-螺旋（helix-turn-helix）约 20 个残基，是两段各 7 到 9 个残基的短 α 螺旋由一个 β 转角连起来；它自己单独并不稳定，而是一个更大结构域里干活的那部分，两段螺旋中的一段叫识别螺旋，它靠在蛋白其余部分上从而突出出来，结合时正好或几乎正好躺在大沟里。Lac 阻遏蛋白就有一个。锌指（zinc finger）约 30 个残基，形成一个细长的环，环的根部被单个 Zn²⁺ 掐住，由四个 Cys、或两个 Cys 加两个 His 固定；单个锌指与 DNA 结合得很弱，所以蛋白带好几个、一起上 —— Zif268 有三个，一种蛙的 DNA 结合蛋白有 37 个。同源异型域（homeodomain）长 60 个残基，其 DNA 结合片段与螺旋-转角-螺旋同源；它的名字来自决定哪个身体部件长在哪里的同源异型基因，从果蝇到人高度保守，而编码它的那段 DNA 叫同源异型框。**关于锌指最常被弄错的一点是：锌本身从不碰 DNA —— 它只是把这个小基序的形状撑住，真正读碱基的一切都是蛋白。**",
      src: "A p.1061 · A p.1062"
    },
    {
      link_en: "two more motifs make dimers rather than contacts, and dimers are what make the final arithmetic come out",
      link_cn: "还有两个基序做的是二聚体而不是接触 —— 而正是二聚体让最后那笔账算得过来",
      en: "The leucine zipper is an amphipathic α helix with hydrophobic residues concentrated on one face, and that face is the contact surface between the two polypeptides of a dimer; its signature is a Leu residue at every seventh position. The name records a picture that turned out to be wrong, since those Leu residues lie side by side as the two helices wind around each other into a coiled coil rather than interdigitating like the teeth of a zip, and a separate basic region rich in Lys and Arg does the DNA binding. The basic helix-loop-helix is about 50 residues forming two short amphipathic helices joined by a loop, and it mediates dimerisation in the same way, with an adjacent basic sequence again binding the DNA; it is a different thing from the helix-turn-helix despite the names. Now the counting problem: if every gene needed its own dedicated activator, the number of activator genes would have to equal the number of regulated genes and a genome would spend itself regulating itself, yet about 300 yeast transcription factors regulate many thousands of genes. Two multiplying effects resolve it — most genes are read by several factors at once, so a gene is specified by the combination rather than by any unique factor, and dimerisation multiplies the repertoire again, since a family of four leucine-zipper proteins gives up to ten dimeric species, four homodimers plus six heterodimers. **A small number of protein types generates a large number of distinct regulators, and those are combined again at each promoter**, and that double multiplication is how 300 factors cover thousands of genes.",
      cn: "亮氨酸拉链（leucine zipper）是一条两亲性 α 螺旋，疏水残基集中在一个面上，而这个面就是二聚体两条多肽之间的接触面；它的标志是每隔七个位置出现一个 Leu。这个名字记录的是一幅后来被证明错了的图像：这些 Leu 是并排排列的 —— 两条螺旋互相盘绕成一个卷曲螺旋 —— 而不是像拉链齿那样彼此交错插入；结合 DNA 的是另一段富含 Lys 和 Arg 的碱性区。碱性螺旋-环-螺旋（basic helix-loop-helix）约 50 个残基，形成由一个环连起来的两条短两亲性螺旋，以同样的方式负责二聚化，仍由旁边一段碱性序列去结合 DNA；尽管名字像，它与螺旋-转角-螺旋是两回事。接下来是那个计数问题：如果每个基因都需要一个专属的激活蛋白，激活蛋白基因的数目就必须等于被调控基因的数目，基因组会把自己耗在调控自己上；可酵母里约 300 个转录因子调控着数千个基因。两个相乘的效应解开了它 —— 大多数基因同时被好几个因子读取，所以决定一个基因身份的是那一组因子的组合而不是某个独一无二的因子；而二聚化又把可用清单乘了一遍，因为四种亮氨酸拉链蛋白构成的家族最多可以给出十种二聚体，即四个同源二聚体加六个异源二聚体。**少数几种蛋白类型生成大量彼此不同的调控实体，而这些实体又在每个启动子上被再组合一次 —— 正是这两次相乘，让 300 个因子覆盖了数千个基因。**",
      src: "A p.1063 · A p.1065"
    },
    {
      link_en: "and now the inversion that makes a eukaryotic cell a different problem altogether",
      link_cn: "接下来是那次反转 —— 它使真核细胞成为一个完全不同的问题",
      en: "The transcriptional ground state is the activity of a promoter and the transcription machinery in a living cell with no regulatory sequences present, meaning what happens by default. In bacteria that state is on: RNA polymerase reaches essentially every promoter and initiates at some level with neither activator nor repressor, which is why bacterial regulation is so often a repressor switching something off. In eukaryotes that state is off: a strong promoter is inactive unless regulatory proteins act on it, and almost every gene needs activating to be transcribed at all. Two reasons stand behind the switch to positive control — an average gene in a multicellular organism has six regulatory sites and a dozen is common, so requiring several activators makes accidental firing vanishingly unlikely; and negatively regulating some 20,000 human genes would mean every cell synthesising every repressor at all times. Eukaryotic DNA is also wound around protein spools called nucleosomes and packed into chromatin, about 10% of it in a condensed, transcriptionally inactive form called heterochromatin and the rest in less condensed euchromatin, which is where transcription can happen rather than where it is happening. Chromatin remodeling changes three things — where the nucleosomes sit, which variant histones are in them, and which chemical groups are attached to those histones — with SWI/SNF ejecting nucleosomes near transcription start sites while ISWI tidies their spacing so chromatin can be assembled and silenced. During transcription histone H3 is methylated at Lys4 and Lys36, and those methyl groups are what let histone acetyltransferases bind and acetylate particular lysines. A lysine side chain's positive charge is what grips the negatively charged phosphates of the DNA backbone, so **acetylating several lysines on H3 and H4 removes that charge and loosens the nucleosome's whole grip: methylation is the recruiting signal and acetylation is the structural change**.",
      cn: "转录基态是指：在活细胞里、没有任何调控序列在场时，一个启动子与转录机器所具有的活性 —— 也就是默认状态下会发生什么。细菌的这个状态是「开」：RNA 聚合酶基本上能够到每一个启动子，在既没有激活蛋白也没有阻遏蛋白时就能以某个水平起始 —— 这正是细菌调控里最常见的事件是「阻遏蛋白把某个东西关掉」的原因。真核的这个状态是「关」：一个强启动子若没有调控蛋白对它动手就是不活动的，而几乎每个基因都需要被激活才会被转录。改用正调控背后有两条理由 —— 多细胞生物里一个基因平均有六个调控位点、十来个也常见，所以要求好几个激活蛋白同时到位，误触发的概率就小到可以忽略；而若把约两万个人类基因都靠负调控，每个细胞在任何时刻都得把所有阻遏蛋白合成出来。真核 DNA 还缠在叫核小体（nucleosome）的蛋白线轴上、打包成染色质，其中约 10% 处于致密、转录上不活动的异染色质，其余是较松散的常染色质 —— 那是「转录可以发生的地方」，不是「转录正在发生的地方」。染色质重塑改动三样东西：核小体停在哪里、里面装的是哪些变体组蛋白、这些组蛋白上被接了哪些化学基团 —— SWI/SNF 把转录起点附近的核小体顶掉，而 ISWI 把核小体的间距理整齐，好让染色质被装配、被沉默。转录进行时，组蛋白 H3 在 Lys4 和 Lys36 处被甲基化，正是这些甲基使组蛋白乙酰转移酶能够结合上来、在特定的赖氨酸上接乙酰基。**赖氨酸侧链的正电荷正是抓住 DNA 骨架上负电磷酸的东西，所以在 H3 和 H4 上乙酰化好几个赖氨酸就把这个电荷去掉、松开了核小体的整个抓力：甲基化是招募信号，乙酰化是结构改变。**",
      src: "A p.1075 · A p.1076 · A p.1077",
      see: [{ id: "L-24-3-1", en: "nucleosomes, histone tails and how a chromosome is packed", cn: "核小体、组蛋白尾巴，以及染色体是怎么被打包的" }]
    },
    {
      link_en: "and the sequences a eukaryotic activator binds break every intuition an operator gave you",
      link_cn: "而真核激活蛋白结合的那些序列，会推翻操纵基因给你的每一个直觉",
      en: "The sequences transcription activators bind are called enhancers in higher eukaryotes and upstream activator sequences in yeast, and three of their properties contradict how an operator behaves. Distance: an enhancer may sit hundreds or thousands of base pairs upstream of the start site. Position: it may sit downstream instead, inside the gene itself. Orientation: with the right proteins bound it raises transcription at nearby promoters regardless of which way round it lies in the DNA. An operator works because it physically sits between the polymerase and the gene, and an enhancer cannot possibly work that way, so the DNA has to loop — promoted by architectural regulators, which are abundant chromatin proteins that bind DNA with little sequence specificity, chief among them the HMG proteins, named for how fast they run in a gel. Mediator, a complex of 25 polypeptides in yeast and 30 in humans, is the major eukaryotic coactivator: it binds the carboxyl-terminal tail of RNA polymerase II's largest subunit, and different activators contact different parts of it, which is how many separate signals converge on one machine. Activators bind first and recruit the acetyltransferases and remodelers, then Mediator, which provides the surface on which TBP or TFIID, then TFIIB, then the remaining basal factors and the polymerase assemble. Yeast coordinates its galactose genes with no operon at all: they sit on several chromosomes and are transcribed separately but share promoters read by one activator, Gal4p, which Gal80p holds inactive until galactose binds a third protein, Gal3p, that releases it — and glucose overrides the whole circuit through a separate catabolite repression system. **Assembling a working polymerase at a eukaryotic promoter is nothing like flicking a switch: for some genes it takes minutes, and for certain genes of higher eukaryotes it can take days.**",
      cn: "转录激活蛋白结合的那些序列，在高等真核里叫增强子（enhancer），在酵母里叫上游激活序列，而它们有三条性质与操纵基因的行为相抵触。距离：一个增强子可能位于起点上游几百甚至几千个碱基对处。位置：它也可能反过来位于下游、就在基因内部。方向：只要结合了合适的蛋白，无论它在 DNA 里正着放还是反着放，它都能提高附近启动子的转录。操纵基因之所以起作用，是因为它实实在在挡在聚合酶与基因之间；增强子不可能这样起作用，所以 DNA 必须成环 —— 成环由建筑性调控因子促成，那是一类在染色质里含量丰富、结合 DNA 时序列特异性很低的蛋白，其中最主要的是 HMG 蛋白，名字来自它们在凝胶里跑得快。中介体（Mediator）是酵母里 25 条、人里 30 条多肽的复合物，是真核最主要的共激活因子：它结合 RNA 聚合酶 II 最大亚基的羧基末端尾巴，而不同的激活蛋白接触它的不同部位 —— 众多彼此独立的信号就是这样汇聚到同一台机器上的。激活蛋白最先结合，招来乙酰转移酶和重塑器，再招来中介体；中介体提供台面，TBP 或 TFIID 在上面装配，然后是 TFIIB，然后是其余的基础因子和聚合酶。酵母协调自己的半乳糖基因时根本不用操纵子：这些基因分布在好几条染色体上、各自单独转录，却共用由同一个激活蛋白 Gal4p 读取的启动子；Gal80p 把 Gal4p 按住不放，直到半乳糖结合第三个蛋白 Gal3p、由它把 Gal4p 放出来 —— 而只要有葡萄糖在，另一套分解代谢物阻遏系统就会把整条线路整个压过去。**在真核启动子上装配出一台能工作的聚合酶，一点也不像啪地拨一下开关：有些基因要几分钟，高等真核的某些基因可以要好几天。**",
      src: "A p.1078 · A p.1080 · A p.1081"
    },
    {
      link_en: "and a signal from outside the cell reaches these proteins by one of two opposite routes",
      link_cn: "而细胞外的信号够到这些蛋白，走的是两条相反的路之一",
      en: "Steroid hormones, and the thyroid and retinoid hormones that work the same way, are hydrophobic enough to diffuse straight through the plasma membrane, so they need no membrane receptor; once inside they bind intracellular receptors that are themselves transcription activators, which is the whole point — such a receptor is the activator and not a relay that eventually causes transcription. The hormone-receptor complex binds a hormone response element — a specific DNA sequence of two six-nucleotide halves, either adjacent or three nucleotides apart — as a dimer, with each half read by one subunit's pair of zinc fingers. Type I receptors, for estrogen, progesterone, androgen and cortisol, wait in the cytoplasm bound to a heat shock protein that the hormone releases, after which the receptor dimerises and goes to its site; type II receptors, such as the thyroid hormone receptor, are already on their DNA site with a corepressor holding them inactive until the hormone throws it off. A non-steroid hormone never enters the cell: its pathway raises cytosolic cyclic AMP, cyclic AMP releases the catalytic part of protein kinase A, that part enters the nucleus and attaches a phosphate to a protein called CREB, and phosphorylated CREB binds cAMP response elements near certain genes and switches them on. Control does not stop when a message is finished either — a maturing reticulocyte destroys its nucleus, leaving stored mRNAs as the only thing left to control, and when heme runs short a kinase phosphorylates an initiation factor, which is then trapped by the protein that would have recycled it, so globin synthesis stops before globin chains with no heme to fill them can precipitate. **A steroid hormone carries its own transcription factor into the nucleus with it, while a peptide hormone stays outside and sends a phosphate group up a cascade** to modify a transcription factor that was already there.",
      cn: "类固醇激素，以及以同样方式工作的甲状腺激素和类视黄醇激素，疏水到足以直接扩散穿过质膜，所以不需要膜受体；进入细胞后，它们结合的胞内受体本身就是转录激活蛋白 —— 这才是要点所在：这样一个受体就是激活蛋白，而不是一个「最终导致转录」的中继站。激素-受体复合物以二聚体形式结合一段激素响应元件（由两个六核苷酸半位点构成的特定序列），每一半由一个亚基的两个锌指读取。I 型受体（雌激素、孕激素、雄激素、皮质醇的受体）待在胞质里结合着一个热激蛋白，激素一到就把它放开，随后受体二聚化、前往自己的位点；II 型受体（例如甲状腺激素受体）本来就停在自己的 DNA 位点上，被一个共抑制因子按住不动，直到激素把它甩掉。非类固醇激素从不进入细胞：它的通路提高胞质里环腺苷酸的浓度，环腺苷酸放开蛋白激酶 A 的催化部分，后者进入细胞核给一个叫 CREB 的蛋白接上一个磷酸，被磷酸化的 CREB 随后结合某些基因附近的 cAMP 响应元件，把它们打开。而信息做好了，控制也并没有停 —— 正在成熟的网织红细胞会毁掉自己的细胞核，能控制的就只剩下储存的那些 mRNA；缺血红素时，一个激酶给一个起始因子加上磷酸，该因子随即被「本该把它回收再用」的那个蛋白困住，于是珠蛋白的合成停下，赶在没有血红素可装的珠蛋白链沉淀出来之前。**类固醇激素把自己的转录因子随身带进细胞核，而肽类激素待在外面、沿一条级联送进一个磷酸基团，去修饰一个本来就在那里的转录因子。**",
      src: "A p.1083 · A p.1084 · A p.1085 · §4.2.4, p.108"
    }
  ],
  terms: [
    { en: "the seven processes", cn: "七个过程",
      def_en: "What together set how much of a protein is present: transcription initiation, transcript processing, RNA survival, how much translation happens, chemical modification of the protein, where it is sent, and how fast it is destroyed. Only the first can switch many genes with interdependent jobs together, because it acts before anything gene-specific has been made.",
      def_cn: "共同决定一个蛋白有多少的那些环节：转录起始、转录本加工、RNA 存活时间、被翻译多少、蛋白的化学修饰、被送到哪里、被销毁得多快。只有第一个能把多个职能互相依赖的基因一起开关，因为它作用在任何基因特异性产物被造出来之前。" },
    { en: "constitutive expression and housekeeping genes", cn: "组成型表达与管家基因",
      def_en: "Genes whose products are needed at all times, such as the enzymes of central metabolism, are expressed at a roughly constant level. For them the promoter sequence may be the only level of regulation there is, since promoter sequence alone can vary initiation frequency by a factor of 1,000 or more.",
      def_cn: "产物任何时候都需要的基因（比如中心代谢的那些酶）以大致恒定的水平表达。对它们来说，启动子序列可能就是全部的调控层级 —— 单靠启动子序列就能让起始频率相差 1,000 倍以上。" },
    { en: "the three classes of regulatory protein", cn: "调控蛋白的三大类",
      def_en: "Specificity factors change which promoters the polymerase will bind (the sigma subunits; σ³² redirects it to heat shock promoters). Repressors bind operators and impede the polymerase — negative regulation. Activators bind DNA and improve the polymerase's work at that promoter — positive regulation. Positive and negative name the protein, not the direction the signal pushes.",
      def_cn: "特异性因子改变聚合酶会结合哪些启动子（σ 亚基；σ³² 把它改派到热激启动子）。阻遏蛋白结合操纵基因、阻碍聚合酶 —— 这是负调控。激活蛋白结合 DNA、让聚合酶在该启动子上干得更好 —— 这是正调控。「正」「负」说的是蛋白的类型，不是信号推的方向。" },
    { en: "operon", cn: "操纵子",
      def_en: "A cluster of genes on one polycistronic transcript, together with the promoter and the sequences regulating them, so one promoter controls the lot; two to six genes is common and some hold twenty or more. Gene order is not random — the genes often encode subunits of one complex, and being translated together on adjacent ribosomes directly enables those subunits to assemble.",
      def_cn: "同一条多顺反子转录本上的一簇基因，连同控制它们的启动子与调控序列，于是一个启动子管住全部；二到六个基因常见，有些含二十个以上。基因顺序不是随机的 —— 它们常编码同一复合物的各亚基，而在相邻核糖体上被一起翻译，直接使这些亚基能够组装。" },
    { en: "inducer and corepressor", cn: "诱导物与辅阻遏物",
      def_en: "The two kinds of low-molecular-weight effector that decide which way a repressor behaves. A corepressor strengthens repression; an inducer, frequently the enzyme's own substrate or a derivative of it, binds the repressor and stops it binding DNA — so the rule reads directly as build the enzyme only when there is something for it to act on.",
      def_cn: "决定阻遏物往哪边倒的两类低分子量效应物。辅阻遏物加强阻遏；诱导物（常常就是该酶自己的底物或其衍生物）结合阻遏物、使它无法再结合 DNA —— 于是规则可以直接读出来：只有当有东西供它作用时，才把这个酶造出来。" },
    { en: "basal transcription as the precondition for induction", cn: "基础转录是诱导的前提",
      def_en: "Lac repression lowers initiation 1,000-fold, or only about 100-fold without the two secondary operators, leaving a few permease and β-galactosidase molecules per cell. That residue is essential, because the inducer is allolactose and not lactose — lactose must be admitted by pre-existing permease and isomerised by pre-existing β-galactosidase. A perfectly tight switch could not be turned on. IPTG induces without being metabolised, separating food from signal.",
      def_cn: "lac 的阻遏把起始降到千分之一；若没有那两个次级操纵位点则只降到约百分之一，于是每个细胞里仍留有几个透过酶和 β-半乳糖苷酶分子。这点残余必不可少，因为诱导物是异构乳糖而不是乳糖 —— 乳糖必须由已存在的透过酶运进来、由已存在的 β-半乳糖苷酶转化。关得严丝合缝的开关是打不开的。IPTG 能诱导却不被代谢，把「食物」与「信号」分开。" },
    { en: "abortive initiation", cn: "流产性起始",
      def_en: "The RNA polymerase holoenzyme repeatedly making and dropping RNA pieces of up to 9 nucleotides at a promoter, until sigma is released and the core enzyme gets elongation going. It is what a polymerase failing to get started actually looks like — real RNA on the real template, simply too short to be anything.",
      def_cn: "RNA 聚合酶全酶在启动子处反复合成又放掉不超过 9 个核苷酸的 RNA 小片段，直到 σ 被释放、核心酶把延伸带起来。这就是「聚合酶起不了步」的真实样子 —— 真的模板上造出来的真 RNA，只是短到什么也算不上。" },
    { en: "attenuation", cn: "衰减作用",
      def_en: "Control of the trp operon by the position of a ribosome on the 162-nucleotide trpL leader. The leader peptide holds a tandem pair of Trp codons; with Trp plentiful the ribosome rests over region 2, hairpin 3-4 forms and terminates transcription, and with Trp scarce the ribosome stalls in region 1, the antiterminator hairpin 2-3 forms and the polymerase reads through. It needs transcription and translation in one compartment, so no eukaryote can use it.",
      def_cn: "靠核糖体在 162 个核苷酸的 trpL 前导序列上的位置来控制 trp 操纵子。前导肽里有连续两个 Trp 密码子；色氨酸充足时核糖体停在区段 2，形成发夹 3-4 而终止转录；色氨酸稀缺时核糖体卡在区段 1，形成抗终止子发夹 2-3，聚合酶通读过去。它要求转录与翻译在同一个隔室里，所以任何真核生物都用不了。" },
    { en: "the major groove as the read surface", cn: "作为读取面的大沟",
      def_en: "Most of the groups that differ between base pairs are hydrogen-bond donors and acceptors exposed in the wider of the two grooves, and most specificity-determining protein-DNA contacts are hydrogen bonds. The minor groove's hydrogen-bonding patterns do not discriminate. The single nonpolar exception is thymine, told from cytosine by the methyl group protruding near C-5 — the only shape-based read in the system.",
      def_cn: "碱基对之间彼此不同的基团，大多是暴露在两条沟中较宽那条里的氢键供体和受体，而决定特异性的蛋白-DNA 接触也大多是氢键。小沟里的氢键模式无法区分碱基对。唯一的非极性例外是胸腺嘧啶 —— 靠 C-5 附近突出的甲基与胞嘧啶区分开，这是整个系统里唯一一次靠形状读取。" },
    { en: "no amino-acid-to-base code", cn: "不存在氨基酸对碱基的密码",
      def_en: "Asn, Gln, Glu, Lys and Arg do most of the base hydrogen bonding, and some pairings are clean — Gln or Asn to adenine N-6 and N-7, Arg to guanine N-7 and O-6. But one protein can read an A=T pair through a Gln contact while another reads it through a van der Waals pocket fitting thymine's methyl, so no code exists and a binding sequence still cannot be inferred from a structure.",
      def_cn: "与碱基形成氢键的主要是 Asn、Gln、Glu、Lys、Arg，其中一些配对很干净 —— Gln 或 Asn 对腺嘌呤的 N-6 与 N-7，Arg 对鸟嘌呤的 N-7 与 O-6。但一个蛋白可以用 Gln 的接触读一个 A=T，另一个蛋白却用一个容纳胸腺嘧啶甲基的范德华口袋读同一个 —— 所以并不存在这样的密码，也仍然无法从结构推出结合序列。" },
    { en: "inverted repeats and cooperative dimers", cn: "反向重复与协同二聚体",
      def_en: "A short sequence followed by its own reverse complement, bound cooperatively by two subunits of one protein, one on each half, so the protein reads twice as much sequence as a single subunit could — which is why a lac operator is nearly a palindrome. The Lac repressor is a tetramer of two tethered dimers, each contacting 17 bp within 22 bp, about 20 tetramers per cell, Kd near 10⁻¹⁰ M and 10⁶-fold discrimination.",
      def_cn: "一小段序列后面跟着它自己的反向互补序列，由同一个蛋白的两个亚基协同结合、一边一个，于是这个蛋白读到的序列是单个亚基所能读的两倍 —— 这正是 lac 操纵基因几乎是回文的原因。Lac 阻遏蛋白是两个拴在一起的二聚体构成的四聚体，每个二聚体在 22 bp 内接触 17 bp，每个细胞约 20 个四聚体，解离常数接近 10⁻¹⁰ M，分辨约 10⁶ 倍。" },
    { en: "helix-turn-helix, zinc finger and homeodomain", cn: "螺旋-转角-螺旋、锌指与同源异型域",
      def_en: "Three ways of getting a small stable structure into the major groove. About 20 residues in two short helices joined by a β turn, one of them the recognition helix lying in the groove; the Lac repressor has one. About 30 residues held at the base by one Zn²⁺ on four Cys or two Cys and two His — the zinc never touches DNA — each binding weakly, so proteins carry several (Zif268 three, one frog protein 37). And 60 residues related to the first of the three, named after the homeotic genes, encoded by a homeobox and conserved from flies to humans.",
      def_cn: "把一个稳定的小结构送进大沟的三种办法。约 20 个残基、两条短螺旋由一个 β 转角相连，其中一条是躺在沟里的识别螺旋；Lac 阻遏蛋白就有一个。约 30 个残基，根部由一个 Zn²⁺ 通过四个 Cys 或两 Cys 两 His 掐住 —— 锌本身从不碰 DNA —— 单个结合很弱，所以蛋白带好几个（Zif268 三个，某种蛙的蛋白 37 个）。以及 60 个残基、与前一种同源的那个，名字来自同源异型基因，由同源异型框编码，从果蝇到人保守。" },
    { en: "leucine zipper versus helix-loop-helix", cn: "亮氨酸拉链 vs 螺旋-环-螺旋",
      def_en: "Both mediate dimerisation rather than DNA binding, with a separate basic region rich in Lys and Arg doing the binding. The zipper is an amphipathic helix with Leu at every seventh position; those residues lie side by side as the helices wind into a coiled coil rather than interdigitating as the name suggests. The basic helix-loop-helix is about 50 residues, two short helices and a loop, and is a different thing from the helix-turn-helix.",
      def_cn: "两者负责的都是二聚化而不是结合 DNA，结合 DNA 的是另一段富含 Lys 和 Arg 的碱性区。拉链是每隔七位一个 Leu 的两亲性螺旋；这些残基并排排列、两条螺旋盘成卷曲螺旋，而不是像名字暗示的那样交错插入。碱性螺旋-环-螺旋约 50 个残基，两条短螺旋加一个环，与螺旋-转角-螺旋是两回事。" },
    { en: "combinatorial control", cn: "组合式控制",
      def_en: "About 300 yeast transcription factors regulate thousands of genes, because most genes are read by several factors at once, so identity comes from the combination rather than from any unique factor. Dimerisation multiplies the repertoire again: a family of four leucine-zipper proteins gives up to ten dimeric species, four homodimers plus six heterodimers. An average gene in a multicellular organism has six regulatory sites and a dozen is common.",
      def_cn: "酵母约 300 个转录因子调控数千个基因，因为大多数基因同时被好几个因子读取，所以身份来自组合而不是来自某个独一无二的因子。二聚化又把清单乘了一遍：四种亮氨酸拉链蛋白的家族最多给出十种二聚体，即四个同源二聚体加六个异源二聚体。多细胞生物里一个基因平均有六个调控位点，十来个也常见。" },
    { en: "transcriptional ground state", cn: "转录基态",
      def_en: "The activity of a promoter and the transcription machinery in a living cell with no regulatory sequences present. In bacteria it is on — the polymerase reaches essentially every promoter and initiates at some level, which is why bacterial regulation is so often negative. In eukaryotes it is off — a strong promoter is inactive without regulatory proteins, and almost every gene needs activating. That one inversion makes eukaryotic regulation positive, chromatin-first and combinatorial.",
      def_cn: "在活细胞里、没有任何调控序列时，一个启动子与转录机器所具有的活性。细菌里是「开」—— 聚合酶基本上能够到每个启动子并以某个水平起始，这正是细菌调控常常是负向的原因。真核里是「关」—— 没有调控蛋白，强启动子也不活动，几乎每个基因都要被激活。仅这一次反转，就使真核调控成为以正向为主、以染色质为先、以组合为核心的。" },
    { en: "methylation recruits, acetylation loosens", cn: "甲基化招募，乙酰化松开",
      def_en: "During transcription H3 is methylated at Lys4 and Lys36, and those methyl groups enable histone acetyltransferases to bind, which then acetylate particular lysines. So one mark is the recruiting signal and the other the structural change. The chemistry: a lysine's positive charge is what grips the DNA backbone's phosphates, and acetylation removes that charge, so the nucleosome's grip loosens.",
      def_cn: "转录时 H3 在 Lys4 和 Lys36 被甲基化，这些甲基使组蛋白乙酰转移酶能够结合上来，后者随即在特定赖氨酸上加乙酰基。所以一种标记是招募信号，另一种是结构改变。化学上：赖氨酸的正电荷正是抓住 DNA 骨架磷酸的东西，乙酰化把这个电荷去掉，核小体的抓力于是松开。" },
    { en: "enhancer and upstream activator sequence", cn: "增强子与上游激活序列",
      def_en: "The sequences transcription activators bind — the first name used in higher eukaryotes, the second in yeast. Three properties contradict an operator: it may be thousands of base pairs upstream; it may be downstream, inside the gene; and it works whichever way round it lies in the DNA. Since it cannot sit between polymerase and gene, the DNA has to loop — which is why architectural regulators such as the HMG proteins exist.",
      def_cn: "转录激活蛋白结合的序列 —— 前一个名字用于高等真核，后一个用于酵母。三条性质与操纵基因相抵触：它可以在上游几千个碱基对处；它可以在下游、在基因内部；而且无论正反方向放置都起作用。既然它不可能挡在聚合酶与基因之间，DNA 就必须成环 —— 这正是 HMG 蛋白这类建筑性调控因子存在的理由。" },
    { en: "Mediator", cn: "中介体",
      def_en: "The major eukaryotic coactivator, 25 polypeptides in yeast and 30 in humans with many core subunits conserved from fungi to humans. It binds the carboxyl-terminal tail of RNA polymerase II's largest subunit, is required for basal and regulated transcription at many promoters, and provides the surface the basal factors and the polymerase assemble on. Different activators contact different parts of it, so many separate signals converge on one machine.",
      def_cn: "真核最主要的共激活因子，酵母里 25 条多肽、人里 30 条，许多核心亚基从真菌到人保守。它结合 RNA 聚合酶 II 最大亚基的羧基末端尾巴，许多启动子的基础转录与受调控转录都需要它，并提供基础因子与聚合酶装配的台面。不同的激活蛋白接触它的不同部位，于是众多彼此独立的信号汇聚到同一台机器上。" },
    { en: "hormone response element and the two receptor types", cn: "激素响应元件与两型受体",
      def_en: "Steroid, thyroid and retinoid hormones diffuse through the plasma membrane and bind intracellular receptors that are themselves transcription activators. The receptor binds a sequence of two six-nucleotide halves as a dimer, each half read by one subunit's pair of zinc fingers. Type I receptors (estrogen, progesterone, androgen, cortisol) wait in the cytoplasm with a heat shock protein and are brought to the DNA by the hormone; type II (thyroid) are already on the DNA with a corepressor and are released by it.",
      def_cn: "类固醇、甲状腺和类视黄醇激素扩散穿过质膜，结合的胞内受体本身就是转录激活蛋白。受体以二聚体结合一段由两个六核苷酸半位点构成的序列，每一半由一个亚基的两个锌指读取。I 型受体（雌激素、孕激素、雄激素、皮质醇）与热激蛋白一起等在胞质，由激素带上 DNA；II 型（甲状腺激素）本就停在 DNA 上、被共抑制因子按住，由激素解除。" }
  ]
};
