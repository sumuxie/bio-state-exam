/* Spines for chapters 23, 24 and 25 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.
   House rules are in biochemie_lite/SPINE_SPEC.md; `tools/check-spine.py` enforces
   the ones a machine can see. Every noun a step uses is introduced in that step or
   declared in `assumed`.

   Nodes here:
     L-23-2-1  tissue-specific metabolism — the organ axis
     L-23-3-1  hormonal regulation of fuel metabolism
     L-23-4-1  obesity and body-mass regulation (brief by instruction)
     L-23-5-1  diabetes mellitus (brief by instruction)
     L-24-2-1  DNA supercoiling
     L-24-3-1  chromosome structure
     L-25-1-1  DNA replication
     L-25-2-1  DNA repair
     L-25-3-1  DNA recombination                                             */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ 24.2 */
window.BIOLITE_SPINE["L-24-2-1"] = {
  assumed: ["dna", "rna", "base", "base pair", "nucleotide", "protein", "enzyme",
            "atp", "hydrogen bond", "double helix", "gene", "cell", "chromosome",
            "bacterium", "eukaryote", "nucleus", "replication", "transcription",
            "plasmid", "electrophoresis", "tyrosine", "hydrolysis"],
  nodeTitle_en: "DNA supercoiling",
  nodeTitle_cn: "DNA 超螺旋",
  title_en: "Cellular DNA is deliberately wound too loosely, and everything else in this section is either how to measure that or how the cell maintains it",
  title_cn: "细胞里的 DNA 是被刻意「拧松」的 —— 这一节其余内容，要么是怎么精确度量这种松，要么是细胞怎么维持它",
  steps: [
    {
      en: "A bacterial chromosome is a closed circle: both strands run the whole way round with no free ends. Purify one away from every protein and it still does not lie flat — it stays coiled up, and DNA from a given kind of cell comes back to the same amount of coiling every time. **Coiling of the helix axis on itself is called supercoiling, and that reproducibility is the evidence that the cell puts it there on purpose, rather than it being left over from squeezing DNA into a small space.**",
      cn: "细菌的染色体是一个**闭合环状分子**：两条链都首尾相接、没有游离末端。把它从所有蛋白里纯化出来，它仍然不是摊平的 —— 它依然是盘绕着的，而且**同一种细胞来源的 DNA，每次测到的盘绕程度都一样**。**螺旋轴自身再盘绕起来，这件事叫超螺旋（supercoiling）；而「每次都一样」正是它由细胞主动放进去、而不是被塞进小空间时顺带产生的证据。**",
      src: "A p.891–892"
    },
    {
      link_en: "coiled how much, and loose or tight relative to what?",
      link_cn: "盘绕多少？相对于什么算松、算紧？",
      en: "Relaxed B-form DNA in solution has 10.5 base pairs per helical turn, and that is the reference everything is measured against. **Cellular DNA is underwound: along its length it carries fewer helical turns than 10.5 bp per turn would call for — about 5 to 7% fewer.** Too few turns for its length means the molecule is strained, in the ordinary mechanical sense.",
      cn: "溶液中松弛的 B 型 DNA 是**每圈 10.5 个碱基对**，一切度量都以它为参照。**细胞里的 DNA 是欠旋（underwound）的：以它的长度算，它带的螺旋圈数比「每圈 10.5 bp」应有的少 —— 少大约 5–7%。** 圈数不够，就意味着这个分子处在**应变（strain）**状态 —— 就是力学上普通的那个意思。",
      src: "A p.892"
    },
    {
      link_en: "strain has to go somewhere, and there are only two places for it",
      link_cn: "应变总得有个去处，而去处只有两个",
      en: "Take 84 bp of relaxed circular DNA: it holds eight turns. Remove one turn and the same 84 bp must now accommodate seven, which is 12.0 bp per turn instead of 10.5. The molecule can absorb that either by coiling its own axis into a supercoil, or by pulling the two strands apart over roughly 10 bp. **Cells take the first route almost every time, because bending the axis costs less energy than breaking what holds a pair of strands together: hydrogen bonds and base stacking.**",
      cn: "拿 84 bp 的松弛环状 DNA：它有 8 圈。去掉 1 圈，同样这 84 bp 就只能容纳 7 圈，也就是**每圈 12.0 bp**，而不是 10.5。这份应变有两种吸收方式：把自己的轴盘绕成一个超螺旋，或者干脆在大约 10 bp 的范围内把两条链分开。**细胞几乎每次都走第一条路，因为把轴弯起来所花的能量，比拆掉维系两条链的东西要少 —— 那两样东西是氢键和碱基堆积（base stacking）。**",
      src: "A p.892"
    },
    {
      link_en: "and now the point of the whole arrangement",
      link_cn: "接下来才是这整套安排的用处",
      en: "Replication and transcription both have to open the helix, and opening it costs energy. **An underwound molecule has already paid part of that cost in advance: strand separation is easier at any local spot along an underwound DNA, so the strain is stored energy the cell bought earlier with ATP and can spend wherever it needs to open the helix.** That is why every cell actively underwinds its own DNA instead of leaving it relaxed.",
      cn: "复制和转录都必须**打开双螺旋**，而打开是要花能量的。**一个欠旋的分子等于已经预付了其中一部分：欠旋 DNA 上任何一个局部要把两条链分开都更容易 —— 所以这份应变是细胞早先用 ATP 买下、可以在任何需要开链的地方花掉的储存能量。**这就是每个细胞都主动把自己的 DNA 拧松、而不让它保持松弛态的原因。",
      src: "A p.892"
    },
    {
      link_en: "an effect worth spending ATP on is worth measuring exactly, and topology gives an exact number",
      link_cn: "值得花 ATP 去做的事，就值得精确度量 —— 拓扑学给出了一个精确的数字",
      en: "Take one strand of a closed circle and imagine a soap film stretched across it, the way a film sits across a bubble wand. **The linking number, written Lk, is the number of times the other strand pierces that film.** It is always a whole number, and it is counted as positive for the right-handed helix DNA actually forms.",
      cn: "取闭合环状 DNA 的**一条链**，想象有一张肥皂膜张在它围出的圈上，就像吹泡泡的圈上那层膜。**连环数（linking number，记作 Lk），就是另一条链穿过这张膜的次数。**它永远是整数；对 DNA 实际采取的右手螺旋，按约定记为正数。",
      src: "A p.893"
    },
    {
      link_en: "why that particular count is the useful one",
      link_cn: "为什么偏偏是这个数字有用",
      en: "Lk does not change when the molecule bends, wobbles about with heat, or has a protein bind to it. **It changes only if a strand is broken and rejoined, which makes Lk a topological invariant — no amount of pushing the DNA around alters it.** A break in one strand — a nick — leaves Lk undefined altogether, because a nicked circle could in principle be unwound completely.",
      cn: "分子弯折、受热晃动、结合上蛋白，Lk 都不变。**它只有在一条链被打断再接回去时才会变 —— 这就是说 Lk 是一个拓扑不变量：怎么摆弄这个 DNA 都改不了它。**而**一条链上的缺口（nick，即单链断口）**会让 Lk 干脆没有定义，因为一个带缺口的环原则上可以被整个解开。",
      src: "A p.893–894"
    },
    {
      link_en: "from a count to a number you can compare between molecules",
      link_cn: "从「一个计数」到「可以跨分子比较的数」",
      en: "Relaxed DNA has Lk0 = bp/10.5, so a 4,200 bp circle has Lk0 = 400. Underwinding is the difference, ΔLk = Lk − Lk0. **Superhelical density, written sigma, is that difference as a fraction: sigma = ΔLk/Lk0, which is what makes circles of different sizes comparable.** The same 4,200 bp circle found at Lk = 374 has ΔLk = −26 and sigma = −0.065. **Real cellular DNA sits at sigma = −0.05 to −0.07, which is the 5 to 7% underwinding stated above, now as a measured number.**",
      recall_en: "the 5–7% from three steps up, now with a definition behind it",
      recall_cn: "上面第三步那个 5–7%，现在有了严格定义",
      cn: "松弛 DNA 的 **Lk₀ = bp/10.5**，所以 4,200 bp 的环 Lk₀ = 400。欠旋的量就是差值 **ΔLk = Lk − Lk₀**。**超螺旋密度（superhelical density，记作 sigma），就是把这个差值化成比例：sigma = ΔLk/Lk₀ —— 有了它，不同大小的环才能互相比较。**同一个 4,200 bp 的环若测得 Lk = 374，则 ΔLk = −26，sigma = −0.065。**真实细胞 DNA 落在 sigma = −0.05 到 −0.07，这就是上面那个 5–7% 的欠旋，现在成了一个可测的数。**",
      src: "A p.894, Worked Example"
    },
    {
      link_en: "and the sign of that number carries the whole vocabulary",
      link_cn: "而这个数的正负号，承载了整套术语",
      en: "**Negative sigma means underwound, and underwinding is exactly what negative supercoiling means; the same 4,200 bp circle at Lk = 412 would have sigma = +0.03, overwound, positively supercoiled, its axis twisting the mirror-image way.** Two molecules with identical sequence and identical length differing only in Lk are called topoisomers, and they separate on an agarose gel: the more supercoiled one is more compact and runs faster, and even a difference of one in Lk shows up.",
      cn: "**sigma 为负就是欠旋，而欠旋正是「负超螺旋」的含义；同一个 4,200 bp 的环若 Lk = 412，则 sigma = +0.03，是过旋（overwound）、正超螺旋，轴向反方向拧。**序列相同、长度相同、只差一个 Lk 的两个分子，叫**拓扑异构体（topoisomers）**；它们能在琼脂糖凝胶上分开：超螺旋越多的分子越紧凑、跑得越快，**Lk 只差 1 也能看出来**。",
      src: "A p.894–895"
    },
    {
      link_en: "Lk changes only by breaking a strand, so changing it requires an enzyme, and there are exactly two ways to build one",
      link_cn: "Lk 只有靠打断链才能改变，所以改变它必须有酶 —— 而造这种酶恰好只有两种办法",
      en: "**Enzymes that change Lk are called topoisomerases, and they are classified by how many strands they cut.** A type I topoisomerase nicks one strand, passes the unbroken strand through the gap, and reseals it: **Lk changes by 1 per cycle, and no ATP is needed** — an active-site tyrosine attacks the backbone and breaks it, holding on to the bond energy, and a second attack puts the bond back.",
      cn: "**能改变 Lk 的酶叫拓扑异构酶（topoisomerase），按它切几条链来分类。** 其中 **I 型**拓扑异构酶在**一条**链上切开缺口，让另一条完好的链从缺口穿过去，再封回：**每个循环 Lk 改变 1，而且不需要 ATP** —— 活性中心的酪氨酸进攻并打断骨架，把那个键的能量攥在手里，第二次进攻再把键装回去。",
      src: "A p.895"
    },
    {
      link_en: "the other way to build one",
      link_cn: "另一种造法",
      recall_en: "same three moves as type I — cut, pass through, reseal — but on both strands at once",
      recall_cn: "动作和 I 型一样是「切开、穿过、封回」，只是两条链一起切",
      en: "A type II topoisomerase breaks both strands of one duplex and passes an entire intact duplex through the gap before resealing it: **Lk changes by 2 per event, and this one does need ATP** — two molecules hydrolysed per cycle in the eukaryotic enzyme — which fits the far larger operation of threading a whole double helix through a hole.",
      cn: "**II 型**拓扑异构酶把一段双链的**两条链都**切断，让**一整段完好的双链**从这个双链缺口穿过去，再封回：**每次事件 Lk 改变 2，而这一类确实需要 ATP** —— 真核酶每循环水解两个分子 —— 这与「把一整条双螺旋穿过一个洞」这个大得多的动作相称。",
      src: "A p.895"
    },
    {
      link_en: "which of them puts the underwinding in?",
      link_cn: "那么，欠旋究竟是谁放进去的？",
      en: "In E. coli the type I enzymes, topoisomerases I and III, relax DNA by removing negative supercoils, raising Lk. **The type II enzyme there is called DNA gyrase, and it is the one that spends ATP to put negative supercoils in, lowering Lk. The cell's resting sigma is simply the balance between gyrase adding and the type I enzymes removing.** Eukaryotic type II enzymes, IIalpha and IIbeta, cannot underwind DNA at all — they only relax supercoils of either sign, which leaves the question of where a eukaryote's underwinding comes from.",
      cn: "在大肠杆菌里，**I 型**酶（拓扑异构酶 I 和 III）通过**移除负超螺旋**来松弛 DNA，使 Lk 升高。**那里的 II 型酶叫 DNA 促旋酶（DNA gyrase），它才是花 ATP 把负超螺旋放进去、使 Lk 降低的那一个。细胞静息状态的 sigma，就是促旋酶「加」与 I 型酶「减」之间的平衡。**而真核的 II 型酶（IIα、IIβ）**根本不能**让 DNA 欠旋 —— 它们只能松弛正负两种超螺旋。那真核细胞的欠旋是哪来的？",
      src: "A p.895–896",
      see: [{ id: "L-24-3-1", en: "where a eukaryote's underwinding comes from — the nucleosome", cn: "真核的欠旋从哪来 —— 核小体" }]
    },
    {
      link_en: "the type II mechanism also solves a problem it was not designed for",
      link_cn: "II 型的机制还顺手解决了一个它本不是为之设计的问题",
      en: "Two circular DNA molecules can end up threaded through each other so that neither can be pulled free without breaking DNA; such an interlinked pair is called a catenane. **Passing one whole duplex through a break in another works just as well when the two duplexes belong to two different circles, so a type II topoisomerase can decatenate them.** Bacterial topoisomerase IV does little else: at the end of replication the two daughter chromosomes come out interlinked, and they must be decatenated before the cell can divide.",
      cn: "两个环状 DNA 分子可能互相套住，谁也拔不出来，除非把 DNA 切断；这样一对互锁的环叫**连环体（catenane）**。**「把一整段双链从另一段的断口穿过去」这个动作，在两段双链分属两个不同的环时同样管用，所以 II 型拓扑异构酶可以把它们解开（decatenation）。**细菌的**拓扑异构酶 IV** 几乎只干这一件事：复制结束时两条子代染色体是互锁着出来的，必须先解开，细胞才能分裂。",
      src: "A p.896",
      see: [{ id: "L-25-1-1", en: "the end of replication, where the daughter chromosomes come out interlinked", cn: "复制的终止 —— 子代染色体互锁着出来的那一步" }]
    },
    {
      link_en: "one thing left: the same underwinding can take two different shapes, and only one of them packages anything",
      link_cn: "还剩一件事：同样的欠旋可以有两种形状，而只有一种真能起到包装作用",
      en: "Free in solution, with no protein on it, supercoiled DNA takes the plectonemic shape: extended, narrow, branched right-handed coils, with the supercoil axis including its branches running to about 40% of the DNA's contour length. **That is the shape seen in a picture of a purified plasmid, and it is not compact enough to package a cell.** The same underwinding can instead take the solenoidal shape — tight left-handed turns around an imaginary tube, like a garden hose wound neatly on a reel — which is far more compact but holds up only when protein binds it. **The two are readily interconvertible, and it is solenoidal supercoiling, not plectonemic, that actually achieves the compaction inside a nucleus.**",
      cn: "在溶液中、身上没有蛋白时，超螺旋 DNA 采取**麻花形（plectonemic）**：伸展、细长、有分支的右手盘绕，超螺旋轴（含分支）的长度约为 DNA 全长的 **40%**。**这就是纯化质粒照片上看到的形状，而它的紧凑程度不足以包装一个细胞。**同样的欠旋也可以采取**螺线管形（solenoidal）** —— 围绕一根假想管子的紧密**左手**盘绕，像花园水管整齐地绕在卷轴上 —— 紧凑得多，但**只有在蛋白结合稳定它时才成立**。**两种形状可以互相转换；真正在细胞核里完成压缩的是螺线管形，不是麻花形。**",
      src: "A p.897–898",
      see: [{ id: "L-24-3-1", en: "the protein that stabilises the solenoidal form — the histone octamer", cn: "稳定螺线管形的那个蛋白 —— 组蛋白八聚体" }]
    }
  ],
  terms: [
    { en: "supercoiling", cn: "超螺旋",
      def_en: "Coiling of the double-helix axis upon itself, on top of the coiling of the two strands around each other. In cells it reflects underwinding relative to relaxed B-form, is actively created and maintained by enzymes, and is therefore a stored strain the cell has paid for, not a packaging by-product.",
      def_cn: "双螺旋的**轴**自身再盘绕起来，叠加在两条链彼此缠绕之上。细胞内的超螺旋反映的是相对于松弛 B 型的欠旋，由酶主动制造并维持，因而是细胞出钱买下的储存应变，而不是包装的副产物。" },
    { en: "underwinding", cn: "欠旋",
      def_en: "Carrying fewer helical turns than the relaxed value of 10.5 bp per turn calls for. Cellular DNA is 5–7% underwound. The consequence is that separating the two strands at any local spot is easier, which is what replication and transcription need.",
      def_cn: "螺旋圈数比松弛值（每圈 10.5 bp）应有的少。细胞 DNA 欠旋 5–7%。后果是任何局部把两条链分开都更容易 —— 这正是复制和转录所需要的。" },
    { en: "linking number", cn: "连环数 Lk",
      def_en: "For a closed-circular duplex, the number of times one strand pierces an imaginary surface bounded by the other. An integer, positive for a right-handed helix. Invariant under bending, thermal motion and protein binding; it changes only when a strand is transiently broken and rejoined, and it is undefined for a nicked circle.",
      def_cn: "对闭合环状双链而言，一条链穿过由另一条链围成的假想曲面的次数。整数，右手螺旋记为正。弯折、热运动、蛋白结合都不改变它；只有一条链被暂时打断再接回时才改变。带缺口的环没有定义。" },
    { en: "superhelical density", cn: "超螺旋密度 sigma",
      def_en: "sigma = (Lk − Lk0)/Lk0 — the fraction of helical turns removed relative to relaxed DNA, so that molecules of different lengths can be compared. Real cellular DNA sits at −0.05 to −0.07; a negative value means underwound and negatively supercoiled, a positive value overwound and positively supercoiled.",
      def_cn: "sigma = (Lk − Lk₀)/Lk₀ —— 相对松弛 DNA 被去掉的螺旋圈数比例，使不同长度的分子可以互相比较。真实细胞 DNA 在 −0.05 到 −0.07；负值代表欠旋、负超螺旋，正值代表过旋、正超螺旋。" },
    { en: "topoisomers", cn: "拓扑异构体",
      def_en: "Two forms of one circular DNA with the same sequence and the same number of base pairs, differing only in linking number. They separate on an agarose gel because the more supercoiled form is more compact and migrates faster; a difference of one linking number is enough to see.",
      def_cn: "同一个环状 DNA 的两种形式，序列与碱基对数完全相同，只差连环数。它们能在琼脂糖凝胶上分开，因为超螺旋更多的形式更紧凑、迁移更快；连环数差 1 就足以看出来。" },
    { en: "type I topoisomerase", cn: "I 型拓扑异构酶",
      def_en: "Nicks one strand, passes the unbroken strand through the gap, reseals — changing linking number by 1 per event and needing no ATP, because the active-site tyrosine keeps the broken bond's energy and a second nucleophilic attack restores it. E. coli topoisomerases I and III relax negative supercoils this way.",
      def_cn: "在一条链上切开缺口，让另一条完好的链穿过，再封回 —— 每次事件连环数改变 1，不需要 ATP，因为活性中心的酪氨酸保留了断键的能量，第二次亲核进攻把它装回去。大肠杆菌的拓扑异构酶 I 和 III 以此松弛负超螺旋。" },
    { en: "DNA gyrase", cn: "DNA 促旋酶",
      def_en: "The bacterial type II topoisomerase: it breaks both strands of a duplex, passes an intact duplex through, and reseals, changing linking number by 2 and hydrolysing ATP. It is the only enzyme class that actively introduces negative supercoils; eukaryotic type II enzymes can only relax. Bacterial resting superhelical density is the balance between gyrase and the type I enzymes.",
      def_cn: "细菌的 II 型拓扑异构酶：切断一段双链的两条链，让一整段完好的双链穿过，再封回，连环数改变 2，并水解 ATP。它是唯一能主动引入负超螺旋的一类酶；真核 II 型酶只能松弛。细菌静息超螺旋密度即促旋酶与 I 型酶之间的平衡。" },
    { en: "catenane", cn: "连环体",
      def_en: "Two circular DNA molecules topologically interlinked, so that neither can be pulled free without breaking DNA. A type II topoisomerase undoes the link by passing a segment of one circle through a transient double-strand break in the other; bacterial topoisomerase IV is dedicated to doing this to the interlinked daughter chromosomes left at the end of replication.",
      def_cn: "两个在拓扑上互锁的环状 DNA，不切断 DNA 就分不开。II 型拓扑异构酶把一个环的一段穿过另一个环上的暂时双链断口，从而解开；细菌的拓扑异构酶 IV 专职处理复制末尾留下的互锁子代染色体。" },
    { en: "plectonemic and solenoidal supercoiling", cn: "麻花形与螺线管形超螺旋",
      def_en: "Two shapes the same negative supercoiling can adopt. Plectonemic: extended, narrow, branched right-handed coils, the stable form for protein-free DNA in solution, and not compact enough to package a cell. Solenoidal: tight left-handed turns around an imaginary tube, much more compact, stable only when protein binds it — the form that actually packages DNA in a nucleus.",
      def_cn: "同一份负超螺旋可以采取的两种形状。麻花形：伸展、细长、有分支的右手盘绕，是溶液中无蛋白 DNA 的稳定形式，紧凑程度不足以包装细胞。螺线管形：围绕假想管子的紧密左手盘绕，紧凑得多，只有蛋白结合稳定时才成立 —— 真正在细胞核里完成 DNA 包装的就是它。" }
  ]
};

/* ------------------------------------------------------------------ 24.3 */
window.BIOLITE_SPINE["L-24-3-1"] = {
  assumed: ["dna", "rna", "base pair", "nucleotide", "protein", "enzyme", "atp",
            "gene", "cell", "nucleus", "eukaryote", "bacterium", "replication",
            "transcription", "mitosis", "meiosis", "antibody", "arginine", "lysine",
            "phosphate", "plasma membrane", "amino acid", "phosphorylation",
            "methylation", "acetylation", "x-ray diffraction", "supercoiling",
            "linking number", "topoisomerase", "dna gyrase", "underwinding",
            "minor groove", "escherichia coli", "anthrax", "spindle"],
  nodeTitle_en: "The structure of chromosomes",
  nodeTitle_cn: "染色体的结构",
  title_en: "Folding 105 µm of DNA into a 5 µm nucleus without tying a knot, and finding that the first fold is also where eukaryotic underwinding comes from",
  title_cn: "把 105 µm 的 DNA 折进 5 µm 的细胞核而不打结 —— 并且发现第一道折叠恰恰就是真核 DNA 欠旋的来源",
  steps: [
    {
      en: "The word chromosome carries two meanings and both are used. **One is the nucleic acid molecule that holds a cell's genetic information; the other is the darkly stained bodies visible down a light microscope in a dividing nucleus.** Between divisions there is nothing shaped like a chromosome to see: the material sits amorphous through interphase, is duplicated during it into two associated copies called sister chromatids, and only condenses into photographable pairs at prophase of mitosis. **The material itself is called chromatin, and it is protein and DNA in roughly equal proportions by mass plus a substantial amount of RNA — the RNA is a genuine structural component and not a contaminant.**",
      cn: "「**染色体**」这个词有两个含义，而且两个都在用。**一个是携带细胞遗传信息的那个核酸分子；另一个是分裂中的细胞核经染色后、在光学显微镜下看到的那些深色小体。**在两次分裂之间，根本看不到什么染色体形状的东西：这些物质在整个**间期**都是无定形的，并在间期里被复制成两份彼此贴在一起的拷贝，叫**姐妹染色单体（sister chromatids）**，直到**有丝分裂前期**才凝聚成可以拍照的一对对。**这些物质本身叫染色质（chromatin），按质量算是蛋白与 DNA 大致各半，外加相当量的 RNA —— 这些 RNA 是真正的结构组分，不是杂质。**",
      src: "A p.898–899, Fig. 24-22"
    },
    {
      link_en: "and the reason chromatin needs a structure at all is a matter of size",
      link_cn: "而染色质之所以非得有一套结构，纯粹是尺寸问题",
      en: "A human chromosome's DNA is about 105 µm long, and the nucleus it has to fit inside is 5 to 10 µm across. **That is a 10,000-fold compaction, and it is reached through several levels of organised folding stacked on one another.** Every structure below is one of those levels.",
      cn: "一条人类染色体的 DNA 大约长 **105 µm**，而它必须装进去的细胞核直径只有 **5–10 µm**。**这是一万倍的压缩，靠的是若干层有组织的折叠一层套一层地叠起来。**下面讲的每一个结构，都是其中的一层。",
      src: "A p.900"
    },
    {
      link_en: "the first level is built out of one family of proteins, and their chemistry says immediately what they are for",
      link_cn: "第一层由一类蛋白搭成，而它们的化学性质立刻说明了它们是干什么的",
      en: "**Histones are small proteins, Mr 11,000 to 21,000, found in the chromatin of every eukaryotic cell, and about one residue in four is arginine or lysine.** Those two side chains are protonated and positively charged at cellular pH, while the DNA backbone is negatively charged, so a histone binds DNA electrostatically along its whole length. **There are five classes — H1, H2A, H2B, H3 and H4 — and the conservation of two of them is the telling fact: only 2 of the 102 residues of H4 differ between peas and cows, and only 8 between humans and yeast.** A protein that has drifted by two residues from plants to mammals is one in which nearly every position is load-bearing. H1, H2A and H2B vary noticeably more, which is where the adjustable, species-specific work sits.",
      cn: "**组蛋白（histones）是一类小蛋白，分子量 11,000–21,000，存在于每一种真核细胞的染色质中，其残基约有四分之一是精氨酸或赖氨酸。**这两个侧链在细胞 pH 下被质子化、带正电，而 DNA 骨架带负电，所以组蛋白沿着 DNA 的全长以静电方式结合它。**共五类 —— H1、H2A、H2B、H3、H4 —— 其中两类的保守程度是最能说明问题的事实：H4 的 102 个残基里，豌豆与牛之间只差 2 个，人与酵母之间只差 8 个。**一个从植物到哺乳动物只漂移了两个残基的蛋白，意味着它几乎每个位置都在承重。H1、H2A、H2B 的变异明显更大，可调节的、物种特异的那部分工作就在它们身上。",
      src: "A p.899, Table 24-5"
    },
    {
      link_en: "eight of those histones plus a fixed length of DNA make the repeating unit",
      link_cn: "其中八个组蛋白加上一段固定长度的 DNA，构成了重复单位",
      en: "Partially unfold a chromosome and DNA appears bound to regularly spaced protein beads, the beads-on-a-string picture. **One bead plus the DNA joining it to the next is a nucleosome, and its numbers are worth holding exactly: the bead is an octamer of two copies each of H2A, H2B, H3 and H4; 146 bp of DNA wraps around it 1.67 times as a left-handed solenoidal supercoil; the repeat from bead to bead is about 200 bp, and the remaining stretch between beads is linker DNA, bound by histone H1.** The 146 is measured, not estimated: linker DNA is exposed and core DNA is protected, so a brief digestion with a DNase chews the linker away and leaves particles carrying exactly 146 bp. **The beads are 10 to 11 nm across, which is why this first level of packing is also called the 10 nm fiber, and wrapping DNA around one core shortens it about sevenfold.**",
      cn: "把染色体部分展开，会看到 DNA 结合在一串规则排列的蛋白小球上，也就是「串珠（beads-on-a-string）」的图像。**一个小球加上连到下一个球的那段 DNA，就是一个核小体（nucleosome）；它的几个数字值得原样记住：小球是由 H2A、H2B、H3、H4 各两份组成的八聚体；146 bp 的 DNA 以左手螺线管形超螺旋在它外面缠 1.67 圈；球到球的重复长度约 200 bp，球与球之间剩下的那段叫连接 DNA（linker DNA），由组蛋白 H1 结合。**146 这个数是测出来的，不是估的：连接 DNA 暴露在外、核心 DNA 受保护，所以用 DNase 短暂消化会把连接段啃掉，留下恰好携带 146 bp 的颗粒。**小球直径 10–11 nm，所以这第一层包装也叫 10 nm 纤维；DNA 绕上一个核心，长度缩短约七倍。**",
      src: "A p.900–901, Fig. 24-24"
    },
    {
      link_en: "and now the wrap answers the question left hanging in the supercoiling section",
      link_cn: "而这一圈缠绕，正好回答了超螺旋那一节留下的问题",
      recall_en: "eukaryotic type II topoisomerases can only relax, so where does eukaryotic underwinding come from?",
      recall_cn: "真核 II 型拓扑异构酶只会松弛，那真核 DNA 的欠旋是哪来的？",
      en: "**The wrap is the underwinding.** Winding DNA that tightly round an octamer requires removing about one helical turn, so binding creates one negative solenoidal supercoil — exactly the protein-stabilised shape underwinding takes. **Binding breaks no strand, so it cannot change the linking number; a compensating positive supercoil therefore appears in the free DNA nearby, leaving the net change at zero.** A eukaryotic topoisomerase then relaxes that positive supercoil, which is all it can do anyway. **The negative one cannot be relaxed because the histones hold it, so the net linking number falls by one per nucleosome.** The prediction was tested: assembling chromatin in a tube from purified histones and closed-circular DNA requires a topoisomerase to be present. **In a eukaryote, packaging DNA and underwinding it are one event described twice.**",
      cn: "**这一圈缠绕本身就是欠旋。**把 DNA 这么紧地绕在八聚体上，需要抽掉大约一个螺旋圈，所以结合就制造出**一个负的螺线管形超螺旋** —— 正是欠旋在有蛋白稳定时采取的那种形状。**结合过程不打断任何一条链，所以它不可能改变连环数；于是附近游离的 DNA 上必然出现一个补偿性的正超螺旋，净变化仍为零。**接着真核拓扑异构酶把那个正超螺旋松弛掉 —— 反正它也只会干这个。**那个负的松不掉，因为组蛋白攥着它；结果就是每个核小体让净连环数减 1。**这个推论被检验过：在试管里用纯化组蛋白和闭合环状 DNA 组装染色质，必须有拓扑异构酶在场才行。**在真核细胞里，「包装 DNA」和「让 DNA 欠旋」是同一件事的两种说法。**",
      src: "A p.901, Fig. 24-25",
      see: [{ id: "L-24-2-1", en: "supercoiling, linking number, and why gyrase has no eukaryotic counterpart", cn: "超螺旋、连环数，以及真核为什么没有促旋酶的对应物" }]
    },
    {
      link_en: "where along the DNA does a core sit, and why there?",
      link_cn: "一个核心究竟落在 DNA 的哪一段上？为什么是那里？",
      en: "**Nucleosome positions are not random, and the reason is mechanical rather than informational.** Bending DNA tightly round a core means compressing its minor groove, and a cluster of two or three A=T base pairs makes that easy while a run of G≡C resists it — so the sequence preference is a stiffness map, not a code being read. **Cores bind particularly well where AA, AT or TT dinucleotides are staggered at 10 bp intervals, because a 10 bp spacing puts a flexible step on the same face of the helix every turn and the bends then add up instead of cancelling. This accounts for up to half of histone positions in living cells** — enough to prove sequence really does position nucleosomes, and far from enough to predict them; the rest is credited to non-histone proteins that bind specific sites and nucleate a core beside them.",
      cn: "**核小体的位置不是随机的，而原因是力学上的，不是信息上的。**要把 DNA 紧紧弯绕在核心上，就得压缩它的小沟；**两三个连续的 A=T 碱基对让小沟容易被压缩，而一串 G≡C 则抗拒**——所以这里的序列偏好是一张**柔韧度地图**，不是一段被读取的密码。**当 AA、AT 或 TT 二核苷酸以 10 bp 的间隔错开排列时，核心结合得特别好：因为 10 bp 的间隔使得每一圈都有一个易弯的位点落在螺旋的同一面上，弯曲于是叠加而不是互相抵消。这可以解释活细胞中多达一半的组蛋白位置**—— 足以证明序列确实在定位核小体，又远不足以预测它们；其余部分归功于那些结合特定位点、并在旁边引发核心组装的非组蛋白蛋白质。",
      src: "A p.901–902, Fig. 24-26"
    },
    {
      link_en: "the core is not a smooth ball — parts of the histones stick out of it",
      link_cn: "核心并不是一个光滑的球 —— 组蛋白有一部分是伸在外面的",
      en: "The amino-terminal ends of the histones extend out of the particle, some threading between the two DNA coils through holes where the minor grooves of adjacent turns line up. **These tails are intrinsically disordered — they have no fixed structure of their own — and they form the contacts between one nucleosome and its neighbours, which is why a chemical mark placed on a tail changes how tightly the region packs.** Assembly follows a fixed order — a tetramer of two H3 and two H4 binds first, then two H2A-H2B dimers — carried out by dedicated histone chaperones; one of them, chromatin assembly factor 1, binds directly to a core component of the replication machinery, so new nucleosomes are laid down in step with replication.",
      cn: "组蛋白的**氨基端**伸出颗粒之外，有些还从相邻螺旋圈小沟对齐处形成的孔洞里穿到两圈 DNA 之间。**这些尾巴是内在无序的 —— 它们自身没有固定结构 —— 而且正是它们构成一个核小体与相邻核小体之间的接触；这就是为什么在尾巴上加一个化学标记，会改变该区域堆得多紧。**组装有固定顺序 —— 先是两个 H3 与两个 H4 组成的四聚体结合，然后是两个 H2A–H2B 二聚体 —— 由专门的**组蛋白伴侣（histone chaperones）**完成；其中的**染色质组装因子 1（CAF1）**直接结合复制机器的一个核心组分，所以新核小体的铺设与复制同步进行。",
      src: "A p.901–902"
    },
    {
      link_en: "and swapping a core histone for an alternative version marks the region for a purpose",
      link_cn: "而把某个核心组蛋白换成一个替代版本，等于给这段区域打上用途标记",
      en: "**Information passed to daughter cells or to offspring without being encoded in the DNA sequence is called epigenetic information, and most of it consists of covalent marks on histone tails together with the placement of histone variants.** Four variants are worth knowing by what they mark: **H3.3 and H2AZ** sit where transcription is happening, H2AZ keeping the region open by impeding the nucleosome-to-nucleosome contacts that compaction needs; **H2AX** marks damage, being phosphorylated at Ser139 beside a break in both DNA strands, and blocking that phosphorylation stops the repair complexes assembling; **CENPA** is the H3 variant found at centromeres. Deleting the H2AZ gene is lethal in mammals, as is deleting CENPA in mice. **Where a variant sits genome-wide is read out by ChIP-Seq: digest chromatin so the exposed linker is cut and the wrapped DNA survives, pull down the nucleosomes carrying the variant with an antibody against it, and sequence the DNA that comes down with them.** This counts as heredity because the marks are not wiped at cell division or at meiosis.",
      cn: "**不写在 DNA 序列里、却能传给子细胞或后代的信息，叫表观遗传信息（epigenetic information）；其中大部分是组蛋白尾巴上的共价标记，加上组蛋白变体（histone variants）的安放位置。**有四个变体值得按「它标记什么」来记：**H3.3 与 H2AZ** 位于正在转录的区域，H2AZ 通过妨碍压缩所需的核小体间接触，把该区域维持在打开状态；**H2AX** 标记损伤 —— 在 DNA 两条链都断开的断口旁，它的 Ser139 被磷酸化，实验上阻断这个磷酸化，修复复合物就装不起来；**CENPA** 是着丝粒处的 H3 变体。哺乳动物中敲掉 H2AZ 基因是致死的，小鼠中敲掉 CENPA 也是。**某个变体在全基因组上落在哪里，靠 ChIP-Seq 读出来：把染色质消化到暴露的连接段被切断、而缠绕着的那段存活下来，用针对该变体的抗体把带它的核小体沉下来，再测随之下来的那些 DNA 的序列。**这之所以算遗传，是因为这些标记在细胞分裂和减数分裂时不会被抹去。",
      src: "A p.904–905, Box 24-1"
    },
    {
      link_en: "sevenfold from the nucleosome against ten-thousandfold required — the shortfall is the argument for everything above it",
      link_cn: "核小体给出七倍，而需要一万倍 —— 这个缺口就是「上面还有结构」的论据",
      en: "**Wrapping round a core compacts DNA about sevenfold and the chromosome achieves more than 10,000-fold, so higher levels of organisation must exist — and the book says plainly that they are not yet fully understood.** Two things about them are known. The folding is neither rigid nor random, and what it must specifically avoid is knots: a knotted chromosome cannot be pulled apart at cell division however hard the cell pulls. **Certain DNA regions attach to a protein core called the chromosomal scaffold, with the DNA held in loops fixed at their bases** — strip the histones off a mitotic chromosome and the scaffold is what remains, surrounded by naked loops. **The knot problem has a named solution: passing one duplex through another is exactly the operation that unties a knot, which is why topoisomerase II is one of the most abundant proteins in a chromosome.**",
      cn: "**绕核小体一圈把 DNA 压缩约七倍，而整条染色体要达到一万倍以上，所以上面必然还有更高层次的组织 —— 而教材直说：这些层次目前尚未被完全弄清。**关于它们有两点是明确的。折叠既不刚性也不随机，而它必须专门避开的东西是**打结**：一条打了结的染色体，在细胞分裂时无论怎么拉都拉不开。**某些 DNA 区域附着在一个称为染色体支架（chromosomal scaffold）的蛋白核心上，DNA 以环的形式挂在上面、环的基部被固定** —— 把有丝分裂染色体上的组蛋白抽掉，剩下的就是这个支架，周围环绕着裸露的 DNA 环。**打结的问题有一个具名的解法：把一段双链从另一段中穿过去，恰恰就是解结的动作 —— 这就是拓扑异构酶 II 成为染色体中含量最高的蛋白之一的原因。**",
      src: "A p.902, Fig. 24-27"
    },
    {
      link_en: "an enzyme a cell cannot live without is a drug target, and two whole classes of medicine come out of this one",
      link_cn: "一个细胞离了就活不成的酶，就是一个药物靶点 —— 而由这一个酶生出了两大类药",
      en: "Without topoisomerases a cell can neither replicate nor package its DNA nor express its genes, and it dies. **As antibiotics: the quinolones, starting from nalidixic acid in 1962 and developed into fluoroquinolones such as ciprofloxacin, block the last step of the bacterial enzyme's cycle — the resealing of the strand breaks — so gyrase cuts the DNA and then cannot put it back.** Ciprofloxacin is broad-spectrum and is one of the few antibiotics reliably effective against anthrax; the quinolones can be given to people at all because they inhibit the human enzymes only at concentrations orders of magnitude above the therapeutic dose. **As cancer chemotherapy, aimed at the human enzymes, which are present at raised levels in tumour cells:** irinotecan and topotecan against the type I enzyme, doxorubicin and etoposide against the type II. **The mechanism they share is the one that explains the side effects — they trap the enzyme on DNA with the strands already cut, turning it into a machine that makes breaks**, which damages fast-dividing tumour cells and fast-dividing healthy tissue alike.",
      cn: "没有拓扑异构酶，细胞既不能复制、也不能包装自己的 DNA、也无法表达基因，然后死掉。**作为抗生素：喹诺酮类（quinolones）—— 从 1962 年的萘啶酸起步，发展为环丙沙星（ciprofloxacin）等氟喹诺酮 —— 阻断细菌酶催化循环的最后一步，也就是把断口封回去这一步；于是促旋酶切开了 DNA，却再也接不回来。**环丙沙星是广谱的，也是少数几种对炭疽可靠有效的抗生素之一；喹诺酮之所以能用在人身上，是因为它抑制人的同类酶所需浓度比治疗剂量高出几个数量级。**作为抗癌化疗药，靶向的是人自身的拓扑异构酶 —— 肿瘤细胞里这些酶的水平偏高：**伊立替康（irinotecan）与拓扑替康（topotecan）针对 I 型，多柔比星（doxorubicin）与依托泊苷（etoposide）针对 II 型。**它们共有的机制正好解释了副作用 —— 它们把酶连同已经切开的 DNA 一起冻在那里，使它变成一台专门制造断口的机器**，这既伤害快速分裂的肿瘤细胞，也同样伤害快速分裂的健康组织。",
      src: "A p.906, Box 24-2"
    },
    {
      link_en: "above the scaffold, the chromosome is divided into compartments and then into loops",
      link_cn: "支架之上，染色体先分成区室，再分成一个个环",
      en: "Each chromosome is organised into two kinds of compartment, one transcriptionally active and one not. **The highly condensed material of inactive regions, and of regions with no genes in them, is called heterochromatin; the partially decondensed material where transcription is happening is euchromatin, and it is the euchromatin that carries the H3.3 and H2AZ variants.** Within a compartment, DNA is held in large loops called topologically associating domains, averaging about 800,000 bp, whose borders are DNA sites recognised by a protein called CTCF; CTCF binding brings together sequences far apart along the DNA and pins the loop shut at its base. **Pinning a loop does two jobs: it bounds the loop, and it makes that loop a topologically closed domain, so the cell can run a different superhelical density inside one loop than in its neighbour without cutting anything.**",
      cn: "每条染色体被组织成两类区室：一类正在转录，一类没有。**转录不活跃的区域、以及根本没有基因的区域，那些高度凝聚的物质叫异染色质（heterochromatin）；正在进行转录、部分解凝聚的物质叫常染色质（euchromatin）—— 携带 H3.3 和 H2AZ 变体的就是常染色质。**在一个区室之内，DNA 被组织成一个个大环，叫**拓扑关联结构域（topologically associating domain, TAD）**，平均约 800,000 bp；它们的边界是被一个叫 **CTCF** 的蛋白识别的 DNA 位点，CTCF 的结合把沿 DNA 相距很远的序列拉到一起，把环的基部钉住。**钉住一个环干了两件事：给这个环划定边界；并且使这个环成为一个拓扑闭合的结构域 —— 于是细胞不必切开任何东西，就能让这个环内部的超螺旋密度不同于隔壁那个环。**",
      src: "A p.903",
      see: [{ id: "L-24-2-1", en: "why a closed domain is the condition linking number requires", cn: "为什么「拓扑闭合」正是连环数成立的前提" }]
    },
    {
      link_en: "the third structural component, promised at the start, is the RNA",
      link_cn: "开头许下的第三种结构组分，就是那些 RNA",
      en: "**Long noncoding RNAs are RNA molecules generally over 200 nucleotides long that need not encode any protein, and in chromatin they work as scaffolds: proteins bind the RNA, and since some of those proteins also bind DNA, the RNA tethers distant parts of a chromosome together.** The showcase is dosage compensation. A female mammal has two X chromosomes carrying over a thousand genes and a male has one, so one X in each female cell is silenced at random. **The agent is a long noncoding RNA called Xist, about 17,000 nucleotides, transcribed only from the X that is to be inactivated; it spreads outwards along that chromosome from its own gene, recruits proteins, and condenses it into the compact object called a Barr body — and because coat-pigmentation genes sit on the X, each colour patch of a calico cat is a clone of cells that silenced the same X.** Xist stops at the edge of its own chromosome, because each chromosome stays inside its own subnuclear domain — its chromosome territory — with little intermingling between them; gene-rich chromosomes tend to sit centrally and heterochromatin-rich ones at the nuclear periphery.",
      cn: "**长非编码 RNA（lncRNA）是一般长于 200 个核苷酸、不必编码任何蛋白的 RNA 分子；在染色质里它们充当支架：蛋白结合到 RNA 上，而其中一些蛋白同时也能结合 DNA，于是这条 RNA 把染色体上相距很远的部分拴在一起。**最好的例子是**剂量补偿**。雌性哺乳动物有两条 X 染色体、上面携带一千多个基因，雄性只有一条，所以每个雌性细胞里随机沉默掉一条 X。**执行者是一个叫 Xist 的长非编码 RNA，约 17,000 个核苷酸，只从那条将被失活的 X 上转录；它从自己的基因出发沿该染色体向外铺开，招募蛋白，把它压缩成一个致密的小体，叫巴氏小体（Barr body）—— 而由于毛色基因就在 X 上，一只三花猫身上每一块颜色斑，都是沉默了同一条 X 的一群细胞的克隆。**Xist 停在自己那条染色体的边界处，因为每条染色体都待在自己的**染色体领地（chromosome territory）**里、彼此几乎不混杂；富含基因的染色体倾向于居中，富含异染色质的靠近核膜。",
      src: "A p.903–905, Box 24-3"
    },
    {
      link_en: "one class of protein is left, and it is the one that holds copies together",
      link_cn: "还剩一类蛋白 —— 就是把拷贝拴在一起的那一类",
      en: "**SMC proteins, for structural maintenance of chromosomes, are the third major class of chromatin protein after the histones and the topoisomerases.** The shape explains the job: five domains, with the amino- and carboxyl-terminal globular ends each carrying half an ATP-hydrolysing site and joined by two long coiled-coil stretches meeting at a hinge; two such chains pair at their hinges into a V, and closing one N end onto one C end like tweezers completes an ATP site at each tip. **Cohesins are the SMC1-SMC3 pair: together with a protein called kleisin they are thought to close as a ring around the two sister chromatids, holding them linked from the moment replication makes them until metaphase. Without that link the chromosomes cannot be segregated correctly, because the spindle needs a joined pair to orient against. The ring is cut rather than loosened — at anaphase an enzyme called separase removes the cohesin links.**",
      cn: "**SMC 蛋白（structural maintenance of chromosomes，染色体结构维持蛋白）是继组蛋白和拓扑异构酶之后的第三大类染色质蛋白。**它的形状说明了它的工作：五个结构域，氨基端与羧基端两个球状端各携带**半个** ATP 水解位点，中间由两段长的卷曲螺旋相连、在一个铰链处相遇；两条这样的链在铰链处配对成一个 **V 形**，把一端的 N 与另一端的 C 像镊子一样合拢，就在 V 的每个尖端补全一个 ATP 位点。**黏连蛋白（cohesins）是 SMC1–SMC3 那一对：它们与一个叫 kleisin 的蛋白一起，被认为是合拢成一个环把两条姐妹染色单体套住，从复制刚把它们造出来一直拴到中期。没有这个连接，染色体就无法被正确分离，因为纺锤体需要一个成对的对象来定向。这个环是被剪断的，不是松开的 —— 后期由一个叫分离酶（separase）的酶把黏连蛋白连接切除。**",
      src: "A p.908–909"
    },
    {
      link_en: "the other SMC pair twists the DNA the other way, which is worth pausing on",
      link_cn: "另一对 SMC 把 DNA 往反方向拧 —— 这一点值得停一下",
      recall_en: "a nucleosome underwinds the DNA it binds; this one does the opposite",
      recall_cn: "核小体让它结合的 DNA 欠旋；这一个正相反",
      en: "**Condensins are the SMC2-SMC4 pair, and they drive the condensation of chromosomes as a cell enters mitosis, stabilising loops by binding at each loop's base.** The detail worth carrying away is what they do to the twist: **in the laboratory, condensin binding makes the DNA overwound, putting positive supercoils in — the exact opposite of the negative supercoil a nucleosome introduces.** Two proteins in the same chromosome twist the DNA in opposite directions, at different stages, for different purposes. A third pair, SMC5-SMC6, works in DNA repair.",
      cn: "**凝缩蛋白（condensins）是 SMC2–SMC4 那一对，负责在细胞进入有丝分裂时推动染色体凝聚，并通过结合在每个环的基部来稳定这些环。**最值得带走的细节是它对「拧」的影响：**在实验室里，凝缩蛋白的结合会让 DNA 过旋，放进正超螺旋 —— 与核小体引入的负超螺旋恰好相反。**同一条染色体上的两种蛋白，在不同阶段、为不同目的，把 DNA 往相反方向拧。第三对 SMC5–SMC6 在 DNA 修复中工作。",
      src: "A p.908",
      see: [{ id: "L-25-2-1", en: "DNA repair, where SMC5-SMC6 works", cn: "DNA 修复 —— SMC5–SMC6 工作的地方" }]
    },
    {
      link_en: "bacteria face the same problem and solve it without any of this",
      link_cn: "细菌面对同一个问题，却完全不用上面这套来解决",
      en: "**Bacterial DNA is compacted into a structure called the nucleoid, which fills a sizeable fraction of the cell and appears anchored at one or more points to the inner face of the plasma membrane.** In E. coli a scaffold-like structure organises the circular chromosome into about 500 looped domains averaging 10,000 bp. **Two properties: the domains are topologically constrained — cut the DNA inside one and only that one relaxes, while the rest of the chromosome keeps its supercoiling, which is the direct experimental demonstration that a pinned loop is its own supercoiling compartment — and their end points are not fixed, the boundaries most likely moving along the DNA in step with replication.** At the bottom level bacteria genuinely differ: abundant histone-like proteins exist, the best characterised being the two-subunit HU, but they bind and let go within minutes and form no stable repeating particle. **The reason offered is functional: a bacterium can divide in 15 minutes where a eukaryotic cell may wait hours or months, and a far larger fraction of a bacterial genome is being transcribed or replicated at any moment — stable packaging would be a liability in a genome that is almost all in use.**",
      cn: "**细菌的 DNA 被压缩成一个叫拟核（nucleoid）的结构，它占据细胞相当一部分体积，并且似乎在一处或多处锚定在质膜内表面上。**在大肠杆菌里，一个类支架结构把环状染色体组织成约 **500 个环状结构域**，每个平均 **10,000 bp**。**两个性质：这些结构域是拓扑受限的 —— 在其中一个里切断 DNA，只有这一个松弛，染色体其余部分保持超螺旋；这正是「钉住的环是自己的超螺旋区室」这句话的直接实验证明 —— 以及它们的端点并不固定，边界很可能随复制在 DNA 上不断移动。**在最底层，细菌确实不同：细菌里有大量**类组蛋白蛋白（histone-like proteins）**，研究得最清楚的是双亚基的 **HU**，但它们在几分钟内结合又离开，不形成任何稳定的重复颗粒。**教材给出的理由是功能性的：细菌最快 15 分钟就能分裂一次，而真核细胞可能几小时甚至几个月才分裂；而且细菌基因组中正在被转录或复制的比例要高得多 —— 对一个几乎全部都在使用中的基因组来说，稳固的包装是一种负担。**",
      src: "A p.909–910"
    }
  ],
  terms: [
    { en: "chromatin", cn: "染色质",
      def_en: "The chromosomal material of a eukaryotic nucleus: fibres of protein and DNA in roughly equal proportions by mass, plus a substantial amount of associated RNA. Amorphous through interphase; condenses into visible paired sister chromatids at prophase of mitosis.",
      def_cn: "真核细胞核里的染色体物质：蛋白与 DNA 按质量大致各半的纤维，外加相当量的结合 RNA。整个间期都是无定形的，到有丝分裂前期才凝聚成可见的成对姐妹染色单体。" },
    { en: "histones", cn: "组蛋白",
      def_en: "Small, strongly basic DNA-binding proteins (Mr 11,000–21,000) present in every eukaryotic cell's chromatin; arginine plus lysine make up about a quarter of all residues, which is what lets them bind the negatively charged backbone electrostatically. Five classes: H1, H2A, H2B, H3, H4. H3 and H4 are extraordinarily conserved — 2 residues of 102 separate the H4 of peas from that of cows.",
      def_cn: "存在于每一种真核细胞染色质中的小分子强碱性 DNA 结合蛋白（分子量 11,000–21,000）；精氨酸加赖氨酸约占全部残基的四分之一，这使它们能以静电方式结合带负电的骨架。共五类：H1、H2A、H2B、H3、H4。H3 与 H4 极端保守 —— 豌豆与牛的 H4 在 102 个残基里只差 2 个。" },
    { en: "nucleosome", cn: "核小体",
      def_en: "The repeating unit of chromatin: an octamer of two copies each of H2A, H2B, H3 and H4, with 146 bp of DNA wound 1.67 times around it as a left-handed solenoidal supercoil, plus the linker DNA running to the next core. Repeat about 200 bp; beads 10–11 nm across; compaction about sevenfold; net linking number change −1 per particle.",
      def_cn: "染色质的重复单位：H2A、H2B、H3、H4 各两份组成的八聚体，146 bp 的 DNA 以左手螺线管形超螺旋在其外缠 1.67 圈，加上通向下一个核心的连接 DNA。重复长度约 200 bp；珠子直径 10–11 nm；压缩约七倍；每个颗粒使净连环数减 1。" },
    { en: "linker DNA", cn: "连接 DNA",
      def_en: "The stretch between adjacent nucleosome cores — what is left of the roughly 200 bp repeat after the 146 bp held on the octamer. Histone H1 binds it. Being exposed while core DNA is protected, it is preferentially destroyed by brief nuclease digestion, which is how the 146 bp figure was measured and how core particles are prepared.",
      def_cn: "相邻核小体核心之间的那一段 —— 约 200 bp 重复长度中，除去缠在八聚体上的 146 bp 所剩下的部分。组蛋白 H1 结合于此。它暴露在外而核心 DNA 受保护，所以短暂核酸酶消化会优先破坏它；146 bp 这个数字就是这样测得的，核心颗粒也是这样制备的。" },
    { en: "histone tails", cn: "组蛋白尾巴",
      def_en: "The amino-terminal extensions protruding from a nucleosome core, some threading out between the two DNA coils. Intrinsically disordered, they carry most covalent histone modifications and make the contacts between neighbouring nucleosomes — the mechanical route by which a chemical mark alters how tightly chromatin packs.",
      def_cn: "从核小体核心伸出的氨基端延伸段，有些从两圈 DNA 之间穿出。它们内在无序，携带绝大多数共价组蛋白修饰，并构成相邻核小体之间的接触 —— 这正是一个化学标记改变染色质堆积紧密程度的力学途径。" },
    { en: "epigenetic information", cn: "表观遗传信息",
      def_en: "Information passed to daughter cells at division, or from parent to offspring, that is not encoded in the DNA sequence. Largely covalent histone modifications together with the placement of histone variants. It counts as heredity because the marks survive cell division and meiosis.",
      def_cn: "在分裂时传给子细胞、或由亲代传给子代，却并未写在 DNA 序列里的信息。主要由共价组蛋白修饰和组蛋白变体的安放位置构成。它之所以算遗传，是因为这些标记能挺过细胞分裂与减数分裂。" },
    { en: "histone variants", cn: "组蛋白变体",
      def_en: "Alternative forms of the core histones, placed by dedicated deposition complexes and marking chromatin function. H3.3 and H2AZ sit where transcription is active, H2AZ keeping the region open by impeding compaction; H2AX is phosphorylated at Ser139 beside a double-strand break and is required for repair complexes to assemble; CENPA is the H3 variant at centromeres. H2AZ is essential in mammals; CENPA deletion is lethal in mice.",
      def_cn: "核心组蛋白的替代形式，由专门的沉积复合物安放，标记染色质的功能。H3.3 与 H2AZ 位于转录活跃处，H2AZ 通过妨碍压缩把该区域维持在打开状态；H2AX 在双链断口旁的 Ser139 被磷酸化，是修复复合物得以装配的必要条件；CENPA 是着丝粒处的 H3 变体。哺乳动物中 H2AZ 不可或缺，小鼠中敲除 CENPA 致死。" },
    { en: "ChIP-Seq", cn: "染色质免疫沉淀测序",
      def_en: "The method that maps where a histone variant or modification sits across a genome: digest chromatin briefly so exposed linker DNA is cut while wrapped DNA survives, precipitate the nucleosomes carrying the mark with a specific antibody, and sequence the DNA that comes down with them.",
      def_cn: "用于在全基因组尺度上定位某种组蛋白变体或修饰的方法：短暂消化染色质，使暴露的连接 DNA 被切断而缠绕着的 DNA 存活，用特异抗体沉淀带有该标记的核小体，再对随之沉下来的 DNA 测序。" },
    { en: "chromosomal scaffold", cn: "染色体支架",
      def_en: "A proteinaceous core to which certain DNA regions attach, the DNA hanging from it in loops fixed at their bases. Seen by stripping the histones from a mitotic chromosome, which leaves the scaffold ringed by naked loops. One of the higher levels carrying compaction from the nucleosome's sevenfold towards 10,000-fold; those levels are not yet fully understood.",
      def_cn: "某些 DNA 区域附着其上的蛋白核心，DNA 以基部固定的环形式挂在上面。把有丝分裂染色体的组蛋白抽掉即可看到它被裸露的环围绕。它是把压缩从核小体的七倍推向一万倍的更高层次之一；这些层次目前尚未被完全弄清。" },
    { en: "topologically associating domain and CTCF", cn: "拓扑关联结构域与 CTCF",
      def_en: "Large DNA loops, averaging about 800,000 bp, into which each nuclear compartment is organised. Their borders are sites recognised by the CCCTC-binding factor, CTCF, whose binding brings together sequences far apart along the DNA and pins the loop at its base. Pinning bounds the loop and makes it a topologically closed domain, so its superhelical density can be set independently of its neighbours'.",
      def_cn: "每个核内区室被组织成的大型 DNA 环，平均约 800,000 bp。它们的边界是被 CCCTC 结合因子（CTCF）识别的位点；CTCF 的结合把沿 DNA 相距很远的序列拉到一起，把环钉在基部。钉住既划定了环的边界，也使它成为拓扑闭合的结构域，于是它的超螺旋密度可以独立于邻近环来设定。" },
    { en: "heterochromatin and euchromatin", cn: "异染色质与常染色质",
      def_en: "The two compartments a chromosome is divided into. Heterochromatin is the highly condensed material of transcriptionally inactive regions and of regions without genes; euchromatin is the partly decondensed material where transcription is happening, and it carries the H3.3 and H2AZ variants.",
      def_cn: "一条染色体被划分成的两类区室。异染色质是转录不活跃区域、以及无基因区域的高度凝聚物质；常染色质是正在转录、部分解凝聚的物质，携带 H3.3 与 H2AZ 变体。" },
    { en: "Xist and the Barr body", cn: "Xist 与巴氏小体",
      def_en: "Xist is a long noncoding RNA of about 17,000 nucleotides, transcribed only from the X chromosome that is to be inactivated. It spreads along that chromosome from its own gene, recruits proteins and condenses it into a Barr body, which is how mammals equalise X-linked gene dosage between the sexes. Because coat-colour genes lie on the X, each patch of a calico cat is a clone of cells that inactivated the same X.",
      def_cn: "Xist 是一条约 17,000 个核苷酸的长非编码 RNA，只从将被失活的那条 X 染色体上转录。它从自身基因出发沿该染色体铺开，招募蛋白，把它压缩成巴氏小体 —— 哺乳动物就是这样在两性之间拉平 X 连锁基因的剂量。由于毛色基因位于 X 上，三花猫身上的每一块斑，都是失活了同一条 X 的细胞克隆。" },
    { en: "cohesins and condensins", cn: "黏连蛋白与凝缩蛋白",
      def_en: "The two eukaryotic SMC dimers. Cohesins (SMC1-SMC3), with kleisin, close as a ring around the sister chromatids and hold them from replication to metaphase; separase cuts the links at anaphase, and without them chromosomes cannot segregate. Condensins (SMC2-SMC4) drive mitotic condensation and, in vitro, overwind DNA — the opposite of what nucleosome binding does.",
      def_cn: "真核的两种 SMC 二聚体。黏连蛋白（SMC1–SMC3）与 kleisin 一起合拢成环套住姐妹染色单体，从复制一直拴到中期；后期由分离酶切断连接，没有它们染色体就无法分离。凝缩蛋白（SMC2–SMC4）推动有丝分裂的凝聚，并在体外使 DNA 过旋 —— 与核小体结合的效果相反。" },
    { en: "bacterial nucleoid", cn: "细菌拟核",
      def_en: "The compacted form of bacterial DNA, filling a sizeable fraction of the cell and anchored at one or more points to the inner face of the plasma membrane. In E. coli about 500 looped domains of roughly 10,000 bp each, topologically constrained — cutting inside one relaxes only that one — with boundaries that move rather than being fixed. Histone-like proteins such as HU bind and dissociate within minutes and build no stable repeating particle.",
      def_cn: "细菌 DNA 的压缩形式，占据细胞相当体积，并在一处或多处锚定于质膜内表面。大肠杆菌中约有 500 个环状结构域，每个约 10,000 bp，拓扑受限 —— 在其中一个内部切断只使这一个松弛 —— 边界不固定而是会移动。类组蛋白蛋白（如 HU）在数分钟内结合又解离，不构成任何稳定的重复颗粒。" }
  ]
};

/* ------------------------------------------------------------------ 25.1 */
window.BIOLITE_SPINE["L-25-1-1"] = {
  assumed: ["dna", "rna", "base", "base pair", "nucleotide", "protein", "enzyme",
            "atp", "gtp", "adp", "amp", "gene", "cell", "nucleus", "eukaryote",
            "bacterium", "chromosome", "virus", "hydrogen bond", "hydrolysis",
            "phosphodiester bond", "nucleophile", "aspartate", "adenine", "guanine",
            "ribose", "thymidine kinase", "herpes simplex virus", "cell cycle",
            "mitosis", "ubiquitin", "cyclin", "plasma membrane", "supercoiling",
            "topoisomerase", "dna gyrase", "escherichia coli", "chromatin",
            "nucleosome", "base stacking", "transition state", "yeast", "thymine",
            "phosphoryl group transfer", "pyrophosphate", "tautomer", "catenane",
            "exonuclease", "nuclease", "helicase", "primase", "dna ligase",
            "leading strand", "lagging strand", "replication fork", "template",
            "methylation", "phosphorylation", "denaturation", "magnesium"],
  nodeTitle_en: "DNA replication",
  nodeTitle_cn: "DNA 复制",
  title_en: "A DNA polymerase cannot start a chain, cannot afford to fall off, and cannot afford to be wrong — every part of a replication fork answers one of those three",
  title_cn: "DNA 聚合酶不能起头、不能掉下来、也不能出错 —— 复制叉上的每一个零件，都是在回答这三件事之一",
  steps: [
    {
      en: "Four statements about replication are usually handed over as bare facts, and each one was an experiment. **Semiconservative — each daughter duplex keeps one parent strand — was established by Meselson and Stahl in 1957.** John Cairns then grew E. coli on tritium-labelled thymine and made photographic images of its DNA: the intact chromosome is one huge circle, and DNA taken from replicating cells carries an extra loop, **which shows that both strands are being copied at the same time, and that the ends of that loop are moving points, which he named replication forks. Variants of the same experiment showed the two forks travel in opposite directions.** A loop in a photograph still cannot say where it started, because a circle has no landmarks, so Ross Inman supplied some. **The 48,502 bp chromosome of bacteriophage lambda — lambda is a virus that infects bacteria — can be denatured selectively at its unusually A=T-rich stretches, since an A=T pair comes apart more easily than a G≡C pair, and the reproducible pattern of single-stranded bubbles that results works as a ruler. Measured against it, replication loops always began at one and the same place, which turned a single origin from an assumption into a measurement; the place itself was named an origin.**",
      cn: "关于复制，通常有四句话被当作现成的事实交给你，而每一句背后都是一个实验。**「半保留」—— 每条子代双链保留一条亲代链 —— 由 Meselson 与 Stahl 于 1957 年确立。**随后 John Cairns 用氚标记的胸腺嘧啶培养大肠杆菌，把它的 DNA 拍成照片：完整的染色体是**一个巨大的环**，而从正在复制的细胞里取出的 DNA 上多出一个**环泡**，**这说明两条链是同时被复制的，而且这个环泡的两端是移动着的点 —— 他把这两个点命名为复制叉（replication fork）。同一实验的各种变体表明，两个叉朝相反方向前进。**但照片上的环泡仍然说不出它是从哪里开始的，因为圆环上没有地标 —— 于是 Ross Inman 造了几个。**λ 噬菌体（bacteriophage lambda，一种感染细菌的病毒）的染色体长 48,502 bp，可以在它那些异常富含 A=T 的区段上被选择性变性 —— 因为 A=T 配对比 G≡C 更容易被拆开 —— 由此得到的一套可重复的单链泡图案，就是一把尺子。用这把尺子去量，复制环泡每次都从同一个位置开始；这就把「单一起点」从一个假设变成了一次测量，而那个位置本身被命名为起点（origin）。**",
      src: "A p.915–916, Fig. 25-1"
    },
    {
      link_en: "with the geography settled, the chemistry",
      link_cn: "地理问题解决了，接下来是化学",
      en: "**The growing strand's free 3'-OH attacks the innermost phosphorus of the incoming deoxynucleoside triphosphate; a phosphodiester bond forms and pyrophosphate leaves.** Two magnesium ions sit in the active site doing different jobs — one strips the proton off that 3'-OH so it attacks harder, the other holds the incoming triphosphate and helps the pyrophosphate depart — and both are pinned by three aspartate residues, two of which are conserved in every DNA polymerase known. **The bond swap itself releases almost no free energy, so what actually drives the chain to get longer is two other things: the base stacking and base pairing that stabilise the lengthened product, and the 19 kJ/mol released when a separate enzyme hydrolyses the pyrophosphate afterwards.**",
      cn: "**正在延长的链上那个游离的 3′-OH，进攻进来的脱氧核苷三磷酸最靠内的那个磷原子；形成一个磷酸二酯键，焦磷酸离去。**活性中心里有**两个镁离子**，各干各的活 —— 一个把 3′-OH 上的质子拽走，让它进攻得更狠；另一个抓住进来的三磷酸、帮助焦磷酸离开 —— 两个都由**三个天冬氨酸残基**固定，其中两个在已知的每一种 DNA 聚合酶里都保守。**这个换键过程本身几乎不释放自由能，所以真正推动链变长的是另外两样东西：使延长后的产物更稳定的碱基堆积与碱基配对，以及随后由另一个酶水解焦磷酸时放出的 19 kJ/mol。**",
      src: "A p.917, Fig. 25-3"
    },
    {
      link_en: "the enzyme has two absolute requirements, and the second one creates every other problem in this chain",
      link_cn: "这个酶有两个绝对要求，而第二个要求制造了下面全部的麻烦",
      en: "One is a template. **The other, stated exactly: every DNA polymerase can add nucleotides only to a strand that already exists — a short stretch already paired to the template and carrying a free 3'-OH, which is called a primer, its free end being the primer terminus. Many primers are short pieces of RNA rather than DNA, laid down by dedicated enzymes.** Follow what this one limitation causes, because it is the thread through everything below: an enzyme that cannot start a chain is why a primer-making enzyme has to exist, why one of the two new strands has to be built in separate pieces, why a second polymerase is needed to take the RNA primers out again, why a ligase is needed to seal what is left, and — where a chromosome is a line rather than a circle — why the ends of a chromosome are a problem.",
      cn: "一个是**模板**。另一个，原话是这样：每一种 DNA 聚合酶都只能把核苷酸加到一条已经存在的链上 —— 一段已经和模板配上对、并带有游离 3′-OH 的短链，这段短链叫引物（primer），它的游离末端叫引物末端（primer terminus）。很多引物是短短的一段 RNA 而不是 DNA，由专门的酶铺下去。接下来看这**一条**限制引出了什么，因为这是贯穿以下所有内容的那根线：**一个不能自己起头的酶，正是「必须存在一个造引物的酶」的原因，是「两条新链中有一条必须分成若干段来造」的原因，是「需要第二种聚合酶把 RNA 引物再拆掉」的原因，是「需要连接酶把剩下的缺口封上」的原因 —— 以及在染色体是线状而非环状的地方，是「染色体末端成了一个问题」的原因。**",
      src: "A p.917–918, Fig. 25-4",
      see: [{ id: "L-26-1-1", en: "transcription, where the polymerase can start a chain from nothing", cn: "转录 —— 那里的聚合酶可以凭空起头" }]
    },
    {
      link_en: "the other constraint is accuracy, and it is built in three multiplying layers",
      link_cn: "另一个约束是精确度 —— 它由三层相乘的机制搭成",
      en: "**Layer one is selection by shape, not only by hydrogen bonding.** An A=T pair and a G≡C pair have almost the same geometry, and a polymerase active site is a hole sized to that shared shape. **So a wrong nucleotide that can still hydrogen-bond to the template generally will not fit the hole, and is rejected before any phosphodiester bond is made.** Measured in a tube, a DNA polymerase inserts one wrong nucleotide per 10,000 to 100,000 correct ones — often because a base is briefly in an unusual tautomeric form and pairs wrongly.",
      cn: "**第一层是按形状挑选，而不只是靠氢键。**A=T 与 G≡C 这两种配对的**几何形状几乎相同**，而聚合酶的活性中心是一个按这个共同形状开出来的洞。**所以一个虽然能和模板形成氢键、但是错误的核苷酸，通常塞不进这个洞，在任何磷酸二酯键形成之前就被拒掉了。**在试管里测得的数值是：DNA 聚合酶每插入 10,000–100,000 个正确核苷酸，会插错一个 —— 常常是因为某个碱基短暂地处在不寻常的互变异构形式，从而配错了对。",
      src: "A p.917–918, Fig. 25-5"
    },
    {
      link_en: "one wrong base in ten thousand is nowhere near good enough, so a second layer catches what the first misses",
      link_cn: "万分之一还远远不够，于是第二层去捡第一层漏掉的",
      recall_en: "the shape of the active site, one step up, is what makes this possible",
      recall_cn: "上一步说的活性中心形状，正是这一层得以成立的前提",
      en: "The active site holds two positions: an incoming nucleotide is first held at the insertion site, and once the bond is made the enzyme slides forward and the new pair moves to the postinsertion site. **A mismatched pair sitting there blocks that slide, and the kinetic pause is the opening — a 3'→5' exonuclease activity clips the wrong nucleotide back off, which is what proofreading means.** Two things about it are worth having exactly. **Proofreading is something other than the polymerisation reaction run backwards, and putting the right nucleotide in afterwards costs three high-energy bonds, so accuracy is paid for in ATP-equivalents.** It improves accuracy 100- to 1,000-fold, leaving one error per 1,000,000 to 100,000,000 bases.",
      cn: "活性中心里有**两个位置**：进来的核苷酸先被扣在**插入位点（insertion site）**，键形成之后酶向前滑一格，新配对移到**插入后位点（postinsertion site）**。**一个配错的碱基对停在那里会卡住这一滑，而这个动力学停顿就是机会 —— 一个 3′→5′ 外切酶活性把错的核苷酸剪回去，这就是校对（proofreading）。**关于它有两点值得原样记住。**校对是另一回事，而非把聚合反应倒放一遍**；而且事后把正确的核苷酸补进去要花掉**三个高能键** —— 也就是说，精确度是用 ATP 当量买来的。**它把准确度提高 100–1,000 倍**，剩下的错误率是每 1,000,000–100,000,000 个碱基一个。",
      src: "A p.918–919, Fig. 25-6"
    },
    {
      link_en: "still short of what is actually measured, so there is a third layer",
      link_cn: "这仍然达不到实测值，所以还有第三层",
      en: "The measured accuracy in E. coli is **one mistake per 1,000,000,000 to 10,000,000,000 nucleotides added**, and the remaining factor comes from a separate enzyme system that goes over the finished DNA and repairs base pairs left mismatched after replication. Multiply the three layers together and the number becomes something worth saying out loud: **for a 4,600,000 bp chromosome, one error occurs per 1,000 to 10,000 copies of the entire genome.**",
      cn: "大肠杆菌里实测的准确度是：**每加入 1,000,000,000–10,000,000,000 个核苷酸才出一个错**；剩下的那个倍数来自一套独立的酶系统，它在复制之后把留下来的错配碱基对逐个修好。把三层乘起来，得到的数字值得念出声来：**对一条 4,600,000 bp 的染色体而言，整个基因组每被复制 1,000–10,000 遍，才出现一个错误。**",
      src: "A p.917, p.919",
      see: [{ id: "L-25-2-1", en: "mismatch repair — the third layer, in full", cn: "错配修复 —— 第三层的完整机制" }]
    },
    {
      link_en: "so which enzyme does the copying? The obvious candidate turned out to be the wrong one",
      link_cn: "那么究竟是哪个酶在抄写？最显眼的那个候选，结果是错的",
      en: "The first DNA polymerase purified from E. coli, by Arthur Kornberg from 1955, accounts for over 90% of the polymerase activity in a cell extract, and it was assumed to be the replicating enzyme. **A polymerase either falls off after adding a nucleotide or stays on and adds another, and the average number it adds before letting go is called its processivity** — 3 to 200 for that first enzyme, now called polymerase I. Four things ruled it out. **It adds 600 nucleotides per minute, at least 100 times too slow for the speed a fork actually moves; its processivity is low; many genes turned out to be needed for replication, so no single enzyme acts alone; and decisively, in 1969 Cairns isolated a strain whose polymerase I was inactive, and it was abnormally sensitive to agents that damage DNA yet perfectly alive.** A cell that cannot make working polymerase I still copies its chromosome — so polymerase I does cleanup during replication, recombination and repair, and polymerase III, found in the search that followed, does the copying.",
      cn: "第一个从大肠杆菌里纯化出来的 DNA 聚合酶（Arthur Kornberg 自 1955 年起），占细胞提取物中聚合酶活性的 **90% 以上**，当时自然被认为就是复制酶。**一个聚合酶加完一个核苷酸后，要么掉下来，要么留在原地再加一个；它在松手之前平均能加多少个核苷酸，这个数叫持续合成能力（processivity）**—— 那第一个酶（现在叫聚合酶 I）的数值是 **3–200**。有四条证据把它排除了。**它每分钟只加 600 个核苷酸，比复制叉实际前进的速度慢至少 100 倍；它的持续合成能力很低；后来发现复制需要很多基因参与，所以不可能由单独一个酶完成；而最决定性的一条是：1969 年 Cairns 分离到一株聚合酶 I 失活的菌株，它对损伤 DNA 的试剂异常敏感，却活得好好的。**一个造不出有活性聚合酶 I 的细胞照样复制自己的染色体 —— 所以聚合酶 I 干的是复制、重组和修复中的**收尾工作**，而在随后的搜寻中找到的**聚合酶 III** 才是抄写者。",
      src: "A p.916–917, p.919, Table 25-1"
    },
    {
      link_en: "and what polymerase III has that polymerase I lacks is the surprise here",
      link_cn: "而聚合酶 III 比聚合酶 I 多出来的那样东西，是这里最出人意料的地方",
      recall_en: "processivity, defined one step up",
      recall_cn: "上一步定义过的持续合成能力",
      en: "**Processivity is not a property of the polymerase at all.** Strip polymerase III of its two beta subunits and it becomes far too likely to fall off to copy a chromosome. **Those two subunits pair into a closed donut that encircles the DNA and slides along with the enzyme — a sliding clamp — and simply preventing the polymerase from letting go raises its processivity above 500,000.** A closed ring cannot thread itself on, so there is a machine for that too: a five-subunit ATP-driven loader binds ATP and the closed clamp, and the binding strains the ring until it springs open at one join; the freshly primed DNA is slipped in through the break; then hydrolysis of that ATP lets the ring snap shut around it. The ATP here buys no chemistry — it buys the timing of an opening and a shutting.",
      cn: "**持续合成能力根本不是聚合酶自身的性质。**把聚合酶 III 的两个 **β 亚基**拿掉，它掉下来的概率就高到无法抄完一条染色体。**这两个亚基配成一个闭合的甜甜圈，套在 DNA 上、随着酶一起滑动 —— 这就是滑动夹（sliding clamp）；仅仅是「不让聚合酶松手」这一件事，就把它的持续合成能力提到 500,000 以上。**一个闭合的环没法自己套上去，所以还有一台专门的机器：一个由五个亚基组成、靠 ATP 驱动的装载器结合 ATP 和闭合的夹子，这个结合把环拉扯到在某一个接缝处弹开；刚加好引物的 DNA 从这个豁口滑进去；随后水解那个 ATP，环就啪地合拢在它周围。这里的 ATP 买的不是化学反应 —— 买的是「什么时候开、什么时候关」。",
      src: "A p.917, p.920, p.926, Fig. 25-13"
    },
    {
      link_en: "and the rest of that enzyme's architecture explains how the two new strands stay in step",
      link_cn: "而这个酶其余的构造，解释了两条新链是怎么保持同步的",
      en: "**Polymerase III has nine kinds of subunit, and its two activities sit on separate polypeptides: alpha polymerises, epsilon proofreads.** With a third subunit they make a core polymerase, which copies DNA but lets go too easily on its own. **Up to three cores are tied together by that same five-subunit clamp loader, and adding the beta clamps turns the assembly into the polymerase III holoenzyme.** The design logic is the sentence to keep: the cores copying the two strands are physically joined to each other, which is the only reason their synthesis can be coordinated — and it is also why the template for the strand made in pieces has to be looped back, so that both cores can travel the same way while the two templates run in opposite directions.",
      cn: "**聚合酶 III 有九种亚基，而它的两种活性坐在不同的多肽上：α 负责聚合，ε 负责校对。**它们加上第三个亚基构成一个**核心聚合酶（core polymerase）**，能抄 DNA，但单独存在时太容易松手。**最多三个核心被刚才那个五亚基装载器拴在一起，再装上 β 夹，整个组装体就成了聚合酶 III 全酶（holoenzyme）。**这里的设计逻辑是最该记住的一句：抄写两条链的那几个核心在物理上是连在一起的，这是它们的合成能够被协调的唯一原因 —— 也正因如此，那条分成若干段来造的链，它的模板必须折回成一个环，好让两个核心朝同一个方向前进，而两条模板本身的走向是相反的。",
      src: "A p.920–921, Table 25-2, Fig. 25-8"
    },
    {
      link_en: "before any of that can run, the helix has to be opened at the origin — and it opens without an enzyme melting anything",
      link_cn: "而在这一切开动之前，双螺旋必须在起点处被打开 —— 而且开链时没有任何酶去「熔」它",
      en: "**The E. coli origin, oriC, is a defined 245 bp of sequence: five copies of a 9 bp repeat plus three further sites that bind an initiator protein called DnaA, and a neighbouring A=T-rich stretch named the DNA unwinding element.** DnaA is a switch: it binds ATP and hydrolyses it slowly, and only the ATP-bound form is active. **Eight ATP-bound DnaA molecules assemble into a right-handed helical stack and the origin DNA wraps tightly around them. That tight right-handed wrap forces a positive supercoil into the neighbouring DNA, and the strain of it pulls the A=T-rich element apart. No enzyme melts that stretch; the torsional strain of the wrapping does it, and the stretch is A=T-rich because A=T yields first.** Then a second ATP-driven protein, DnaC, cracks open the ring-shaped hexameric helicase DnaB and **loads two DnaB rings back to back, one on each separated strand. DnaB travels 5'→3' along single-stranded DNA, so the two rings walk away from each other: the bidirectionality this node opened with as an observation is the consequence of loading two helicases in opposite orientations.** Single-strand binding protein then coats the separated strands, and DNA gyrase relieves the twisting stress piling up ahead of each fork.",
      cn: "**大肠杆菌的起点 oriC 是一段确定的 245 bp 序列：五份 9 bp 重复序列，外加另外三个位点，都结合一个叫 DnaA 的起始蛋白；旁边还有一段富含 A=T 的区段，叫 DNA 解链元件（DNA unwinding element）。**DnaA 是一个开关：它结合 ATP 并缓慢水解之，**只有结合 ATP 的形式是活性的**。八个结合了 ATP 的 DnaA 叠成一个右手螺旋，起点的 DNA 紧紧缠绕在它们外面。这一圈紧密的右手缠绕，把一个正超螺旋硬挤进旁边的 DNA 里，而这份应变把那段富含 A=T 的元件拉开了。没有任何酶去熔这一段；是缠绕带来的扭转应变干的，而这一段之所以富含 A=T，是因为 A=T 先撑不住。接着第二个靠 ATP 驱动的蛋白 **DnaC** 把环形六聚体解旋酶 **DnaB** 的环撑开，**背对背装上两个 DnaB 环，分开的两条链上各一个。DnaB 沿单链 5′→3′ 前进，所以这两个环朝彼此相反的方向走开：本节开头作为「观察结果」出现的双向性，原来是「以相反取向装了两个解旋酶」的后果。**随后**单链结合蛋白（SSB）**覆盖分开的两条链，**DNA 促旋酶**化解在每个叉前方堆积起来的扭转应力。",
      src: "A p.922–923, Fig. 25-9, Fig. 25-10, Table 25-3",
      see: [{ id: "L-24-2-1", en: "why gyrase is the enzyme that relieves stress ahead of a fork", cn: "为什么化解叉前方应力的正是促旋酶" }]
    },
    {
      link_en: "opening the origin is the one regulated step, and two devices make sure it happens exactly once per cell cycle",
      link_cn: "打开起点是唯一受调控的一步，而有两套装置保证它每个细胞周期只发生一次",
      en: "**The first switches DnaA off as soon as its job is done.** Once polymerase III has been loaded together with its beta clamps — which is itself the signal that initiation finished — a protein called Hda binds those same clamps and makes DnaA hydrolyse its ATP; the inactive ADP form falls off the origin, and getting back to the ATP form takes a deliberate 20 to 40 minutes. **The second is a methylation clock. An enzyme called Dam methylase puts a methyl group on the adenine of every GATC sequence, and oriC carries 11 GATC sites in its 245 bp against a genome-wide average of one per 256 bp.** Right after a fork has passed, the old strand of the origin carries those methyl groups and the new strand does not — **a state called hemimethylation, which a protein named SeqA binds, holding the origin at the plasma membrane and out of use until Dam methylase has fully methylated it again.** The logic is worth saying out loud: **hemimethylation is a chemical mark meaning this origin has already fired, it is created automatically by the act of copying, and it decays at a fixed rate. The cell counts rounds of replication by reading methyl groups.**",
      cn: "**第一套在 DnaA 干完活的瞬间就把它关掉。**一旦聚合酶 III 连同它的 β 夹被装上 —— 这件事本身就是「起始已完成」的信号 —— 一个叫 **Hda** 的蛋白就结合到这些夹子上，促使 DnaA 水解自己的 ATP；失活的 ADP 形式从起点脱落，而要回到 ATP 形式需要**刻意拖长的 20–40 分钟**。**第二套是一个甲基化时钟。一个叫 Dam 甲基化酶的酶在每一个 GATC 序列的腺嘌呤上加一个甲基，而 oriC 在它的 245 bp 里带了 11 个 GATC 位点，全基因组的平均密度则是每 256 bp 才一个。**复制叉刚过去时，起点的旧链上带着这些甲基而新链上没有 —— **这个状态叫半甲基化（hemimethylation）；一个叫 SeqA 的蛋白结合它，把起点扣在质膜上、暂时不许使用，直到 Dam 甲基化酶把它重新完全甲基化为止。**这里的逻辑值得念出声：**半甲基化是一个化学标记，意思是「这个起点已经用过了」；它由「复制」这个动作自动产生，并以固定速率消失。细胞是靠读甲基基团来数自己复制了几轮的。**",
      src: "A p.923–924"
    },
    {
      link_en: "with two forks running, the actual copying is a piece of choreography, and it exists because of the primer rule",
      link_cn: "两个叉跑起来之后，真正的抄写是一段编排好的舞蹈 —— 而它之所以存在，全因为那条引物规则",
      recall_en: "the polymerase that cannot start a chain, from the fourth step",
      recall_cn: "第四步那个「不能自己起头」的聚合酶",
      en: "**A primase called DnaG lays down a 10 to 60 nucleotide RNA primer, working in physical contact with the DnaB helicase.** One core polymerase then runs continuously along the strand whose template lets it move the same way as the fork, while the other cores cycle over and over on the looped template of the strand that has to be made in pieces: **helicase unwinds, primase occasionally lays a primer, the loader parks a new clamp at that primer, and when a piece is finished the core drops its old clamp and grabs the new one.** Each piece is called an Okazaki fragment, and it runs 1,000 to 2,000 nucleotides in bacteria and only 150 to 200 in eukaryotes. **The RNA primer is then taken out by polymerase I, or by RNase H1, which is a nuclease that destroys RNA wherever it is paired to DNA; polymerase I fills the gap with DNA; and DNA ligase seals the remaining nick, having first activated the phosphate by attaching an AMP group — bacterial ligases usually take that AMP from NAD+, while viral and eukaryotic ligases take it from ATP.**",
      cn: "**一个叫 DnaG 的引物酶（primase）铺下一段 10–60 个核苷酸的 RNA 引物，工作时与 DnaB 解旋酶保持物理接触。**随后一个核心聚合酶沿着「模板方向恰好让它与叉同向前进」的那条链连续跑下去，而另外的核心则在那条必须分段合成的链的**环状模板**上一遍遍循环：**解旋酶解开双链，引物酶时不时铺一段引物，装载器把一个新夹子停在那段引物上，一段做完之后核心松开旧夹子、抓住新夹子。**每一段叫一个**冈崎片段（Okazaki fragment）**，在细菌中长 1,000–2,000 个核苷酸，在真核中只有 150–200 个。**RNA 引物随后由聚合酶 I 拆掉，或者由 RNase H1 拆掉 —— 那是一种专门降解「与 DNA 配着对的 RNA」的核酸酶；聚合酶 I 用 DNA 把缺口填上；DNA 连接酶把剩下的切口封死 —— 封之前它先给那个磷酸接上一个 AMP 基团来活化它：细菌的连接酶通常从 NAD⁺ 取这个 AMP，而病毒和真核的连接酶从 ATP 取。**",
      src: "A p.924–926, Fig. 25-14, Fig. 25-15",
      see: [{ id: "4-1-3-2", en: "the ligase mechanism in three steps, given more fully there", cn: "连接酶的三步机制 —— 那里讲得更完整" }]
    },
    {
      link_en: "the forks have to be stopped, and finishing the sequence leaves a problem no further synthesis can touch",
      link_cn: "两个叉必须被叫停 —— 而序列抄完之后还剩下一个「再怎么合成也解决不了」的问题",
      en: "**The terminus region of the circular chromosome carries ten copies of a 20 bp sequence called Ter, in two clusters pointing opposite ways. Each Ter binds a protein called Tus, and a Tus-Ter pair stops a fork coming from one direction only — which builds a trap a fork can enter but not leave.** Only one such complex acts per cycle, the first one either fork reaches; the other fork simply halts when it runs into the stopped one. **Then comes the part synthesis cannot fix: the two finished chromosomes come out threaded through one another like two links of a chain, a catenane. Nothing covalent joins them, and that is exactly why they cannot be pulled apart — each circle is covalently closed, so one has to be cut, the other passed through, and the cut resealed. In E. coli topoisomerase IV does it, and only then can the two chromosomes go to separate daughter cells.** Copying a closed circle is a topology problem at both ends: gyrase ahead of the fork, topoisomerase IV behind it.",
      cn: "**环状染色体的终止区带有十份 20 bp 的 Ter 序列，分成朝向相反的两簇。每个 Ter 结合一个叫 Tus 的蛋白，而一个 Tus–Ter 复合体只拦截来自一个方向的复制叉 —— 于是搭出一个「叉进得来、出不去」的陷阱。**每个周期只有一个这样的复合体起作用，就是两个叉中先到的那一个所遇到的那个；另一个叉撞上停住的那个之后自然也就停了。**接下来是合成解决不了的部分：两条完成的染色体出来时像链条的两个环节一样互相套着，形成一个连环体（catenane）。它们之间没有任何共价键相连，而这正是它们分不开的原因 —— 每个环自身都是共价闭合的，所以只能切开一个、让另一个穿过去、再把切口封回。大肠杆菌里干这活的是拓扑异构酶 IV；只有这一步做完，两条染色体才能进入不同的子细胞。**抄写一个闭合环，两头都是拓扑问题：叉前面是促旋酶，叉后面是拓扑异构酶 IV。",
      src: "A p.927–928, Fig. 25-16, Fig. 25-17",
      see: [{ id: "L-24-2-1", en: "decatenation, and why only a type II topoisomerase can do it", cn: "解连环，以及为什么只有 II 型拓扑异构酶做得到" }]
    },
    {
      link_en: "a eukaryotic cell runs the same machine, and one piece of arithmetic forces its biggest difference",
      link_cn: "真核细胞跑的是同一台机器，而一道算术逼出了它最大的那个差别",
      en: "**A eukaryotic fork moves about 50 nucleotides per second, one-twentieth of the bacterial rate, so copying an average human chromosome from a single origin would take over 500 hours. Human chromosomes carry 30,000 to 50,000 origins instead.** Firing each of them exactly once per cycle is called licensing: with cyclins destroyed at the end of mitosis, an origin recognition complex plus two loading proteins install two inactive rings of the MCM2-7 helicase at each origin, and that assembly is the licence; S-phase cyclin-CDK complexes then switch the helicases on and at the same time block any new licence from being issued. **The key step is identical to the bacterial one — loading the replicative helicase — although MCM2-7 travels the other way, 3'→5' along the other template strand.** Three polymerases divide the work: **epsilon copies the continuous strand, delta the one made in pieces, both of them proofreading, while alpha is a combined polymerase-primase that starts each piece and has no proofreading at all, which is why it hands over immediately.** The sliding clamp here is called PCNA, and its three-dimensional shape is remarkably like the bacterial beta subunit even though no similarity is visible in their sequences.",
      cn: "**真核复制叉每秒前进约 50 个核苷酸，是细菌速率的二十分之一；照这个速度，从单一起点抄完一条平均大小的人类染色体要花 500 多小时。于是人类染色体上有 30,000–50,000 个起点。**让每个起点在每个周期恰好点火一次，这套控制叫**许可（licensing）**：有丝分裂末期细胞周期蛋白被销毁之后，一个**起点识别复合体**加上两个装载蛋白，在每个起点装上**两个**无活性的 **MCM2-7** 解旋酶环，这套组装体就是那张许可证；进入 S 期后，细胞周期蛋白–CDK 复合体把解旋酶打开，同时封死任何新许可证的签发。**关键的一步与细菌完全相同 —— 装载复制解旋酶 —— 只不过 MCM2-7 走的方向相反，沿另一条模板链 3′→5′ 前进。**三种聚合酶分工：**ε 抄连续的那条链，δ 抄分段合成的那条，两者都会校对；而 α 是一个「聚合酶–引物酶」二合一，负责给每一段起头，并且完全没有校对功能 —— 所以它起完头就立刻交班。**这里的滑动夹叫 **PCNA**，它的三维形状与细菌的 β 亚基惊人地相似，尽管两者的序列上看不出任何相似性。",
      src: "A p.928–929, Fig. 25-18"
    },
    {
      link_en: "and the primer rule from the fourth step turns out to be a drug",
      link_cn: "而第四步那条引物规则，最后变成了一种药",
      recall_en: "every polymerase can only extend a strand that already has a free 3'-OH",
      recall_cn: "每一种聚合酶都只能延长一条已经带有游离 3′-OH 的链",
      en: "Many DNA viruses bring their own DNA polymerase, and an enzyme the host does not have is a drug target. **Aciclovir, developed by Gertrude Elion and George Hitchings, is guanine attached to an incomplete ribose ring, and it is selective three times over.** First, it does nothing until it is phosphorylated, and the enzyme that phosphorylates it is a thymidine kinase encoded by the herpes simplex virus itself, which binds the drug 200 times more tightly than the cell's own kinase does — so the drug is switched on essentially only inside infected cells. Second, the resulting acyclo-GTP inhibits the viral polymerase far more strongly than it inhibits the cell's own. **Third, and this is the payoff of the whole chain: the incomplete sugar ring has no 3'-OH, so once acyclo-GTP has been built into DNA there is nothing left for the next nucleotide to attack, and the chain simply stops there.**",
      cn: "很多 DNA 病毒自带一个 DNA 聚合酶，而宿主没有的酶就是一个药物靶点。**阿昔洛韦（aciclovir，由 Gertrude Elion 与 George Hitchings 研发）是鸟嘌呤接在一个不完整的核糖环上，它的选择性来自三重叠加。**第一，它必须先被磷酸化才起作用，而给它磷酸化的酶是**单纯疱疹病毒自己编码的胸苷激酶**，后者结合这个药的紧密程度是细胞自身激酶的 **200 倍** —— 所以这个药基本上只在被感染的细胞里被打开。第二，由此生成的 acyclo-GTP 对病毒聚合酶的抑制远强于对细胞自身聚合酶的抑制。**第三，也是整条链的收束：那个不完整的糖环上没有 3′-OH，所以一旦 acyclo-GTP 被接进 DNA，下一个核苷酸就没有东西可以进攻了，链就在那里停住。**",
      src: "A p.929–930"
    }
  ],
  terms: [
    { en: "primer", cn: "引物",
      def_en: "A stretch of nucleic acid already paired to the template and carrying a free 3'-OH, to which a polymerase can add. The free 3' end is the primer terminus. Many are short RNAs made by a dedicated enzyme. Every DNA polymerase needs one, and that single limitation generates primase, discontinuous synthesis, primer removal, ligation, and the end-replication problem of linear chromosomes.",
      def_cn: "一段已经与模板配对、并带有游离 3′-OH 的核酸，聚合酶可以往上加。那个游离的 3′ 端叫引物末端。很多引物是由专门的酶合成的短 RNA。每一种 DNA 聚合酶都需要它，而正是这一条限制催生了引物酶、不连续合成、引物拆除、连接反应，以及线状染色体的末端复制问题。" },
    { en: "processivity", cn: "持续合成能力",
      def_en: "The average number of nucleotides a polymerase adds before it lets go of the template. 3 to 200 for DNA polymerase I, over 500,000 for the polymerase III holoenzyme. It is not an intrinsic property of the polymerase — the sliding clamp confers it.",
      def_cn: "一个聚合酶在松开模板之前平均能加上的核苷酸数目。DNA 聚合酶 I 是 3–200，聚合酶 III 全酶超过 500,000。它并非聚合酶自身的固有性质 —— 是滑动夹赋予的。" },
    { en: "sliding clamp", cn: "滑动夹",
      def_en: "Two beta subunits paired into a closed donut that encircles the DNA and slides along with the polymerase, preventing it from dissociating. One per active core. A five-subunit ATP-driven loader strains the closed ring open at one join, admits the primed DNA, then hydrolyses ATP to shut it. The eukaryotic counterpart is PCNA, near-identical in shape with no sequence similarity.",
      def_cn: "两个 β 亚基配成的闭合甜甜圈，套住 DNA 并随聚合酶一起滑动，防止它脱落。每个活性核心配一个。一个由五个亚基组成、靠 ATP 驱动的装载器把闭合的环在某个接缝处撑开，让加好引物的 DNA 进去，再水解 ATP 把它合上。真核的对应物是 PCNA —— 形状几乎相同，序列上却毫无相似性。" },
    { en: "proofreading", cn: "校对",
      def_en: "The 3'→5' exonuclease activity that clips off a nucleotide just added wrongly. It works through a kinetic pause: a mismatched pair in the postinsertion site blocks the enzyme's forward slide, which is the opportunity to excise. It is something other than polymerisation run backwards, it costs three high-energy bonds per correction, and it improves accuracy 100- to 1,000-fold.",
      def_cn: "把刚刚加错的核苷酸剪掉的 3′→5′ 外切酶活性。它依靠一个动力学停顿：插入后位点上的错配阻断了酶向前滑动，这就是切除的机会。它并不是把聚合反应倒放一遍；每纠正一次要花掉三个高能键；它把准确度提高 100–1,000 倍。" },
    { en: "oriC", cn: "oriC 起点",
      def_en: "The 245 bp E. coli replication origin: five 9 bp repeats plus three further DnaA sites, an A=T-rich DNA unwinding element, and 11 GATC sequences against a genome average of one per 256 bp. Everything about initiation happens here.",
      def_cn: "大肠杆菌 245 bp 的复制起点：五份 9 bp 重复序列，加另外三个 DnaA 位点、一段富含 A=T 的解链元件，以及 11 个 GATC 序列（全基因组平均每 256 bp 才一个）。起始阶段的一切都发生在这里。" },
    { en: "DnaA protein", cn: "DnaA 蛋白",
      def_en: "The bacterial initiator, active when it has ATP bound and inactive with ADP. Eight ATP-bound copies stack into a right-handed helix that the origin DNA wraps tightly around; the positive supercoil that wrapping forces into the neighbouring DNA is what pulls the A=T-rich unwinding element apart. No enzyme melts that stretch — torsional strain does.",
      def_cn: "细菌的起始蛋白，结合 ATP 时有活性，结合 ADP 时无活性。八份结合 ATP 的分子叠成一个右手螺旋，起点 DNA 紧紧缠绕其上；缠绕硬挤进邻近 DNA 的那个正超螺旋，才是把富含 A=T 的解链元件拉开的力量。没有酶去熔它 —— 干这事的是扭转应变。" },
    { en: "DnaB and DnaC", cn: "DnaB 与 DnaC",
      def_en: "DnaB is the hexameric ring-shaped replicative helicase of E. coli, travelling 5'→3' along single-stranded DNA. DnaC is the ATP-driven loader that cracks the ring open and installs two DnaB hexamers back to back in the unwinding element, one on each separated strand — which is why a single initiation event produces two forks moving in opposite directions. Loading the helicase is the key step of initiation, in bacteria and eukaryotes alike.",
      def_cn: "DnaB 是大肠杆菌环形六聚体复制解旋酶，沿单链 5′→3′ 前进。DnaC 是靠 ATP 驱动的装载器，把这个环撑开，在解链元件处背对背装上两个 DnaB 六聚体，分开的两条链上各一个 —— 这就是一次起始事件产生两个反向复制叉的原因。装载解旋酶是起始阶段的关键一步，细菌与真核皆然。" },
    { en: "hemimethylation", cn: "半甲基化",
      def_en: "Dam methylase methylates the adenine of every GATC. Just after a fork passes, the parent strand of oriC carries those methyl groups and the new strand does not; the protein SeqA binds this state and holds the origin at the plasma membrane, out of use, until full methylation is restored. The mark means this origin has already fired, is made automatically by copying, and decays at a fixed rate — so a cell counts rounds of replication by reading methyl groups.",
      def_cn: "Dam 甲基化酶给每一个 GATC 的腺嘌呤加上甲基。复制叉刚过去时，oriC 的亲代链带着甲基而新链没有；SeqA 蛋白结合这种状态，把起点扣在质膜上暂停使用，直到完全甲基化恢复。这个标记的含义是「此起点已点火」，由复制动作自动产生，并以固定速率消失 —— 细胞就是靠读甲基来数复制轮数的。" },
    { en: "Okazaki fragment", cn: "冈崎片段",
      def_en: "One of the separate pieces in which the discontinuously synthesised strand is built, each begun from its own RNA primer. 1,000 to 2,000 nucleotides in bacteria, 150 to 200 in eukaryotes. The primer is removed by polymerase I or RNase H1, the gap filled with DNA, and the nick sealed by DNA ligase.",
      def_cn: "不连续合成的那条链所分成的一个个片段，每一段都从自己的 RNA 引物起头。细菌中 1,000–2,000 个核苷酸，真核中 150–200 个。引物由聚合酶 I 或 RNase H1 拆除，缺口用 DNA 填上，切口由 DNA 连接酶封死。" },
    { en: "Ter and Tus", cn: "Ter 与 Tus",
      def_en: "Ten copies of a 20 bp Ter sequence sit in the terminus region of the E. coli chromosome in two oppositely oriented clusters. Each binds the protein Tus, and a Tus-Ter complex arrests a replication fork approaching from one direction only, which builds a trap a fork can enter but not leave. Only one complex acts per cycle.",
      def_cn: "大肠杆菌染色体的终止区里有十份 20 bp 的 Ter 序列，分成朝向相反的两簇。每一份都结合 Tus 蛋白；一个 Tus–Ter 复合体只拦截从一个方向来的复制叉，于是构成一个「进得来、出不去」的陷阱。每个周期只有一个复合体起作用。" },
    { en: "licensing", cn: "复制许可",
      def_en: "The eukaryotic once-per-cycle control. With cyclins destroyed at the end of mitosis, an origin recognition complex with two loading proteins installs two inactive MCM2-7 helicase rings at each origin; that assembly is the licence to replicate. S-phase cyclin-CDK complexes then activate the helicases and simultaneously prevent any new licence being issued, so an origin cannot fire twice in one cycle.",
      def_cn: "真核细胞「每周期只复制一次」的控制机制。有丝分裂末期细胞周期蛋白被销毁后，起点识别复合体连同两个装载蛋白，在每个起点装上两个无活性的 MCM2-7 解旋酶环 —— 这套组装体就是复制许可证。进入 S 期后，细胞周期蛋白–CDK 复合体把解旋酶激活，同时阻止任何新许可证签发，于是一个起点在一个周期里无法点火两次。" }
  ]
};

/* ------------------------------------------------------------------ 25.2 */
window.BIOLITE_SPINE["L-25-2-1"] = {
  assumed: ["dna", "rna", "base", "base pair", "nucleotide", "protein", "enzyme",
            "atp", "gene", "cell", "eukaryote", "bacterium", "chromosome",
            "replication", "replication fork", "template", "helicase", "dna ligase",
            "exonuclease", "endonuclease", "nuclease", "deoxyribose", "adenine",
            "cytosine", "guanine", "thymine", "uracil", "purine", "pyrimidine",
            "cysteine", "proline", "collagen", "folate", "flavin", "fad",
            "free radical", "hydrolysis", "deamination", "methylation", "cancer",
            "mammal", "yeast", "salmonella", "escherichia coli", "histidine",
            "ionizing radiation", "oxidative metabolism", "neuron", "colon",
            "single-strand binding protein", "proofreading", "processivity",
            "alpha-ketoglutarate", "dioxygenase", "chromatin", "recombination"],
  nodeTitle_en: "DNA repair",
  nodeTitle_cn: "DNA 修复",
  title_en: "A damaged protein is thrown away; a damaged DNA strand is rebuilt from the other one — and every repair system in this chain is that one sentence applied to a different kind of damage",
  title_cn: "受损的蛋白被丢掉，受损的 DNA 链则照着另一条链重建 —— 下面每一套修复系统，都是这一句话用在不同类型的损伤上",
  steps: [
    {
      en: "A damaged protein or RNA molecule is simply degraded and remade from the gene, because the information to rebuild it is still on file in DNA. **DNA has no such higher copy to be read back from, so keeping its information intact is not one job among others; it is the job the cell cannot delegate.** The measured version is worth holding: **the DNA of a typical mammalian cell picks up many thousands of lesions in 24 hours, and fewer than 1 in 1,000 of them ends up as a permanent change in sequence. The entire difference is repair.** So the cell is not preventing damage — it is tolerating an enormous amount of it and correcting almost all of it afterwards.",
      cn: "一个受损的蛋白或 RNA 分子，直接被降解掉、再照着基因重造一个，因为重建它所需的信息还完好地存在 DNA 里。**DNA 自己没有这样一份「更上层的拷贝」可供回读，所以维护它的信息完整并不是众多工作中的一项，而是细胞唯一无法外包的那一项。**测出来的版本值得记住：**一个典型哺乳动物细胞的 DNA 在 24 小时内会累积成千上万处损伤（lesion），而其中最终变成序列上永久改变的不到千分之一。这中间全部的差额，就是修复。**所以细胞并不是在阻止损伤 —— 它是在容忍巨量的损伤，然后事后把它们几乎全部改回来。",
      src: "A p.930"
    },
    {
      link_en: "and the reason correcting it afterwards is even possible is one structural fact",
      link_cn: "而「事后还能改回来」之所以成立，靠的是一个结构事实",
      en: "**DNA is double-stranded and the two strands carry the same information, so the undamaged strand is a record of what the damaged one is supposed to say.** That is the whole basis of accurate repair, and two consequences run through everything below. **First, repair systems cut the damage out and rebuild the gap from the intact strand, rather than trying to mend the damaged piece where it lies.** Second, the one situation treated as a crisis is the one where the second strand is missing or damaged too — and at that point the only options left are to copy from another chromosome carrying the same sequence, or to guess.",
      cn: "**DNA 是双链的，而两条链携带同一份信息，所以未受损的那条链就是「受损那条本该写什么」的记录。**这就是精确修复的全部依据，而由此引出的两个后果贯穿以下所有内容。**第一，各种修复系统的做法都是把损伤切除掉、再照着完好的那条链把缺口重建起来，而不是试图就地把坏掉的那一块修好。**第二，唯一被当作**危机**来处理的情形，正是第二条链也缺失或也受损的那一种 —— 到那一步，只剩两个选择：从另一条带有同样序列的染色体上抄，或者猜。",
      src: "A p.930–931, p.938"
    },
    {
      link_en: "what is at stake when repair fails has a name and a number",
      link_cn: "修复失败时的后果，有一个名字，也有一个数字",
      en: "**A lesion that is not repaired before the DNA is copied becomes a permanent change in the nucleotide sequence, which is what a mutation is** — either one base pair swapped for another, or one or more base pairs inserted or deleted. A mutation landing in nonessential DNA, or having negligible effect on a gene's function, is silent; a few are advantageous; most of the rest are neutral or harmful. **The link to cancer was measured rather than asserted, by the Ames test: a Salmonella strain carrying a mutation that breaks an enzyme of histidine synthesis is plated without histidine, where almost nothing can grow, and a suspected mutagen on a paper disc causes back-mutations that restore the pathway — so a mutation rate becomes a countable number of colonies. Over 90% of compounds shown to cause cancer in animal trials score as mutagens on that plate.** One refinement is a real lesson: compounds are also tested after incubation with a liver extract, because some are mutagenic only after the body's own metabolism has transformed them.",
      cn: "**一处损伤如果在 DNA 被复制之前没修好，就变成核苷酸序列上的永久改变 —— 这就是突变（mutation）**：要么是一个碱基对被换成另一个，要么是一个或多个碱基对被插入或删除。落在非必需 DNA 上、或对基因功能影响可忽略的突变叫**沉默突变**；少数突变是有利的；其余大多是中性或有害的。**它与癌症的关联是被测出来的，不是断言出来的 —— 靠的是 Ames 试验：取一株组氨酸合成酶被突变破坏的沙门氏菌，铺在不含组氨酸的培养基上，那里几乎什么都长不出来；把待测的诱变剂放在一张滤纸片上，它引起的回复突变会把这条通路修好 —— 于是突变率变成了可以数的菌落数。在动物实验中被证明致癌的化合物里，超过 90% 在这块平板上也表现为诱变剂。**还有一处改良是真正的实验教训：化合物还要在与**肝脏提取物**一起温育之后再测一次，因为有些化合物**只有**在被身体自身的代谢改造之后才有诱变性。",
      src: "A p.930"
    },
    {
      link_en: "two things about repair as a whole, before any single mechanism",
      link_cn: "在讲任何一套具体机制之前，先说关于修复整体的两件事",
      en: "**Nearly 200 human genes encode proteins dedicated to DNA repair, and losing the function of one of them often produces genomic instability and a raised cancer risk.** Redundancy is normal: some common lesions can be handled by several separate systems. **The second fact cuts against almost everything else you have learned about metabolism. Repair is extraordinarily inefficient energetically — an explicit exception to the pattern in almost every metabolic pathway, where each ATP is accounted for and spent well.** When the integrity of the genetic information is what is at stake, the chemical energy invested seems almost beside the point. That claim is demonstrated three separate times below: over a thousand base pairs destroyed to correct one, a whole protein molecule consumed per base repaired, and a deliberately raised mutation rate accepted as the price of continuing at all.",
      cn: "**人类基因组中有将近 200 个基因专门编码 DNA 修复蛋白，其中任何一个失去功能，往往就带来基因组不稳定和癌症风险升高。**冗余是常态：一些常见损伤可以由好几套彼此独立的系统来处理。**第二件事与这门课其余部分的调子相反：修复在能量上极其不划算 —— 这是对「几乎每一条代谢通路里每一个 ATP 都被精打细算地花掉」这一规律的明确例外。**当赌注是遗传信息的完整性时，投进去多少化学能几乎无关紧要。这个论断在下面被演示了三次：为纠正一个碱基而毁掉一千多个碱基对；每修好一个碱基就消耗掉一整个蛋白分子；以及把「主动提高突变率」作为「还能继续下去」的代价接受下来。",
      src: "A p.931, Table 25-5"
    },
    {
      link_en: "first system: the mismatches replication leaves behind, where the hard part is not finding them",
      link_cn: "第一套系统：复制留下的错配 —— 而这里难的并不是找到它们",
      recall_en: "this is the third layer of the replication accuracy budget, after shape selection and proofreading",
      recall_cn: "这就是复制精确度预算里的第三层，排在形状挑选和校对之后",
      en: "Correcting the rare mismatched base pairs left after replication improves overall fidelity by a further factor of 100 to 1,000. The difficulty is which strand to change: at a G-T mismatch both bases are perfectly normal DNA bases, and nothing chemical marks either as the error — repair the parent strand and a copying error becomes a permanent mutation. E. coli solves it with a clock. **An enzyme called Dam methylase puts a methyl group on the adenine of every GATC sequence, and for a few seconds to minutes after a replication fork passes, the old strand carries those methyl groups while the new one does not yet. That transient half-methylated state is the label saying which strand is new.** The controls make the logic airtight: methylate both strands at a GATC and few mismatches get repaired; methylate neither and repair happens with no preference for either strand. **Repair is a race against Dam methylase finishing its job, because once the site is fully methylated the evidence of which strand was new is gone.**",
      cn: "把复制之后残留的少数错配碱基对纠正过来，会使总体保真度再提高 100–1,000 倍。难的是「该改哪一条链」：在一个 G-T 错配上，两个碱基都是完全正常的 DNA 碱基，化学上没有任何东西标出哪一个才是错的 —— 一旦改了亲代那条链，一个抄写错误就变成了永久突变。大肠杆菌用一个**时钟**解决它。**一个叫 Dam 甲基化酶的酶在每一个 GATC 序列的腺嘌呤上加一个甲基；而复制叉刚过去的几秒到几分钟里，旧链带着这些甲基，新链还没有。这个短暂的「半甲基化」状态，就是标明哪条链是新链的标签。**几个对照实验把逻辑封死了：把一个 GATC 的两条链都甲基化，错配几乎修不了；两条链都不甲基化，修复照样发生，但对两条链毫无偏好。**修复是一场与 Dam 甲基化酶赛跑的比赛 —— 一旦位点被完全甲基化，「哪条链是新的」这条证据就消失了。**",
      src: "A p.931–933, Fig. 25-20",
      see: [{ id: "L-25-1-1", en: "the same Dam methylase, timing replication initiation", cn: "同一个 Dam 甲基化酶 —— 在那里给复制起始计时" }]
    },
    {
      link_en: "the mismatch and the label can be a thousand base pairs apart, so the machinery has to connect two distant places",
      link_cn: "错配与那个标签之间可能隔着上千个碱基对，所以机器必须把两个遥远的地点连起来",
      en: "**MutS scans the DNA and clamps onto a mismatch — it binds every kind except C-C. MutL joins it, and the pair slides along the DNA in either direction hunting for a half-methylated GATC. MutH rides with them carrying a nuclease activity that stays switched off until such a site is found, and there it cuts the unmethylated strand.** A helicase, single-strand binding protein and one of four exonucleases then chew that strand away from the cut all the way through the mismatch, polymerase III fills the gap and ligase seals it. **Here is the first demonstration that repair is extravagant: the cut can be over 1,000 bp from the mismatch, so more than a thousand nucleotides are destroyed and resynthesised to correct one wrong base.**",
      cn: "MutS 沿 DNA 扫描，遇到错配就箍成一个夹子 —— 除 C-C 之外的每一种错配它都结合。MutL 加入进来，两者组成的复合体沿 DNA 向任一方向滑动，寻找一个半甲基化的 GATC。MutH 跟着一起走，身上带着一个核酸酶活性，在找到这样一个位点之前一直关着；到了那里，它把未甲基化的那条链切开。接着一个解旋酶、单链结合蛋白，以及四种外切酶中的一种，把那条链从切口一路啃到错配处，聚合酶 III 把缺口填上，连接酶封死。**这里就是「修复很奢侈」的第一次演示：切口可能距离错配 1,000 bp 以上，也就是说，为了纠正一个错误碱基，要毁掉并重新合成一千多个核苷酸。**",
      src: "A p.933–934, Fig. 25-21, Fig. 25-22"
    },
    {
      link_en: "eukaryotes kept two of those three proteins, and the missing one leaves a hole in the story",
      link_cn: "真核细胞保留了这三个蛋白里的两个，而缺掉的那一个在故事里留下了一个洞",
      en: "**Eukaryotic cells have proteins matching MutS and MutL — chiefly an MSH2-MSH6 pair for single mismatches, an MSH2-MSH3 pair for longer mispaired loops, and an MLH1-PMS1 pair that binds and stabilises them — but nothing matching MutH.** The methylation clock is a bacterial solution and does not carry across: research has established that GATC sequences are not involved in eukaryotes. **The clinical consequence is direct: defects in mismatch repair cause hereditary nonpolyposis colon cancer, one of the commonest inherited cancer-susceptibility syndromes, with cancer usually appearing at an early age; defects in at least five mismatch repair genes can produce it, most often in hMLH1 and hMSH2.** Losing the ability to correct one wrong base in a million makes colon cancer close to inevitable.",
      cn: "**真核细胞有与 MutS 和 MutL 对应的蛋白 —— 主要是结合单碱基错配的 MSH2–MSH6 对、结合较长错配环的 MSH2–MSH3 对，以及结合并稳定它们的 MLH1–PMS1 对 —— 却没有任何与 MutH 对应的东西。**那个甲基化时钟是细菌的解法，搬不过来：已有研究确认真核细胞里并不涉及 GATC 序列。**临床后果非常直接：错配修复缺陷导致遗传性非息肉病性结肠癌（HNPCC），这是最常见的遗传性肿瘤易感综合征之一，发病年龄通常很早；至少五个错配修复基因的缺陷都能导致它，最常见的是 hMLH1 和 hMSH2。**失去「把百万分之一的错误碱基改回来」的能力，就足以让结肠癌几乎无法避免。",
      src: "A p.932, p.934",
      openQuestion_en: "How a eukaryotic cell tells the newly synthesised strand from the template is not known.",
      openQuestion_cn: "真核细胞究竟怎么分辨哪一条是新合成的链、哪一条是模板，目前并不知道。"
    },
    {
      link_en: "second system: bases damaged by ordinary chemistry, where only the base comes out",
      link_cn: "第二套系统：被普通化学反应弄坏的碱基 —— 而这里只把碱基取出来",
      en: "**A DNA glycosylase is an enzyme that recognises one particular kind of damaged base and cuts the bond between that base and its sugar, so the base falls out and the sugar-phosphate backbone stays whole. That first step gives the pathway its name, base-excision repair.** What is left is a position in the backbone with no base on it, called an AP site or abasic site. **Each glycosylase is specific for one lesion, which is why a cell carries many of them** — for hypoxanthine, which is what adenine becomes when it loses its amino group; for 8-hydroxyguanine and formamidopyrimidine from oxidised purines; for methylated bases such as 3-methyladenine. AP sites also appear on their own, from slow spontaneous breaking of that same base-sugar bond, so the rest of this pathway is needed whether a glycosylase ever acted or not.",
      cn: "**DNA 糖基化酶（DNA glycosylase）是一类酶，每一种识别某一种特定的受损碱基，并把这个碱基与它的糖之间的键切断，于是碱基掉下来，而糖–磷酸骨架完好无损。正是这第一步给了这条通路名字：碱基切除修复（base-excision repair）。**剩下的是骨架上一个没有碱基的位置，叫 **AP 位点（apurinic/apyrimidinic site）**，也叫无碱基位点。**每一种糖基化酶只针对一种损伤，所以细胞里有很多种** —— 针对次黄嘌呤（腺嘌呤脱掉氨基后就变成它）；针对嘌呤被氧化后生成的 8-羟基鸟嘌呤和甲酰胺基嘧啶；针对 3-甲基腺嘌呤之类的甲基化碱基。AP 位点也会自己出现 —— 那个碱基–糖之间的键会缓慢地自发断裂 —— 所以无论糖基化酶有没有动过手，这条通路的后半段都是必需的。",
      src: "A p.934–935"
    },
    {
      link_en: "one of those glycosylases answers a question the rest of the course leaves open",
      link_cn: "其中一种糖基化酶，回答了这门课其余部分一直没答的一个问题",
      en: "Cytosine loses its amino group spontaneously and continuously in every cell, and what it becomes is uracil. **Uracil DNA glycosylases remove exactly that uracil from DNA, and cells lacking the enzyme show a high rate of G≡C becoming A═T, because an uncorrected uracil pairs with adenine at the next round of copying. The enzyme does not touch uracil in RNA, and does not touch thymine in DNA.** Now the argument. **Thymine is 5-methyluracil. If DNA used uracil as one of its four bases, a uracil arising from a damaged cytosine would be chemically identical to a uracil that belongs there, and no enzyme could tell damage from information. Because DNA uses thymine, every uracil found in DNA is by definition an error and can be removed on sight.** How much this matters shows in the numbers: most bacteria have one uracil glycosylase, humans have at least four with different specialities, including one that travels with the replication machinery and one for single-stranded DNA, where cytosine loses its amino group 100 times faster than in a duplex.",
      cn: "在每一个细胞里，胞嘧啶都在自发地、持续地脱掉氨基，而它脱氨之后变成的就是**尿嘧啶**。**尿嘧啶 DNA 糖基化酶专门把这种尿嘧啶从 DNA 里取走；缺少这个酶的细胞，G≡C 变成 A═T 的速率很高，因为一个没被清掉的尿嘧啶在下一轮复制时会与腺嘌呤配对。这个酶不碰 RNA 里的尿嘧啶，也不碰 DNA 里的胸腺嘧啶。**接下来是那个论证。**胸腺嘧啶就是 5-甲基尿嘧啶。假如 DNA 用尿嘧啶作它四个碱基之一，那么由受损胞嘧啶产生的尿嘧啶，与本来就该在那里的尿嘧啶在化学上完全相同，任何酶都无法区分「损伤」与「信息」。正因为 DNA 用的是胸腺嘧啶，DNA 里出现的每一个尿嘧啶按定义就是错误，见到就能清掉。**这件事有多重要，从数字上看得出来：大多数细菌只有一种尿嘧啶糖基化酶，而人至少有四种、各有分工，其中一种随复制机器一起移动，另一种专管单链 DNA —— 单链上胞嘧啶脱氨的速度是双链上的 100 倍。",
      src: "A p.935",
      openQuestion_en: "The book says this may be one reason DNA evolved to contain thymine rather than uracil, and the hedge should be kept: it is a strong and widely repeated argument, not a proven one.",
      openQuestion_cn: "教材的原话是「这**可能**是 DNA 演化成含胸腺嘧啶而非尿嘧啶的原因之一」，这个保留语气应当照搬：这是一个有力且广为流传的论证，但并非已被证明。"
    },
    {
      link_en: "the base is out; why not simply put a correct one back?",
      link_cn: "碱基已经取走了 —— 那为什么不直接放一个正确的回去？",
      en: "**Because the empty sugar left in the backbone is itself a lesion: it is chemically reactive and the strand is liable to break there. Putting a base back would repair the information and leave the molecule damaged.** So the whole nucleotide goes. **An AP endonuclease cuts the backbone at the abasic site, a short segment including it is removed, DNA polymerase I lays down replacement DNA using the intact strand as the template, and DNA ligase seals the remaining nick.** In eukaryotes the replacement is done by DNA polymerases beta, iota and lambda, each of which carries a second activity that clips out the abasic sugar as well as a polymerase activity, so one enzyme both removes the sugar and fills a gap that is often a single nucleotide long.",
      cn: "**因为骨架上留下的那个空糖本身就是一处损伤：它化学上活泼，链在那里容易断。放一个碱基回去，等于把信息修好了，却把分子留在受损状态。**所以整个核苷酸都要换掉。**一个 AP 内切酶在无碱基位点处切开骨架，把包含它的一小段切除，DNA 聚合酶 I 以完好的那条链为模板铺上替换的 DNA，DNA 连接酶把剩下的切口封死。**在真核细胞里，替换这一步由 DNA 聚合酶 β、ι 和 λ 完成 —— 它们除了聚合酶活性之外还各带一个能把那个无碱基糖剪掉的活性，所以同一个酶既清走糖、又把缺口填上，而这个缺口往往只有一个核苷酸长。",
      src: "A p.935, p.940, Fig. 25-23"
    },
    {
      link_en: "third system: damage too bulky to be handled base by base, recognised by a completely different principle",
      link_cn: "第三套系统：体积太大、没法按碱基逐个处理的损伤 —— 而它的识别原理完全不同",
      recall_en: "a glycosylase recognises one damaged base; this one recognises a shape",
      recall_cn: "糖基化酶识别的是某一个受损碱基；这一套识别的是一个形状",
      en: "**Nucleotide-excision repair handles lesions bulky enough to distort the double helix, and it recognises the distortion rather than any particular damaged base — which is why one system copes with chemically unrelated damage.** The enzyme is called an excinuclease, and the name records what makes it unusual: **it cuts the backbone twice, once on each side of the distortion, and lifts the damaged piece out whole.** In E. coli the cuts release a fragment of 12 to 13 nucleotides; in humans, 27 to 29. **The bacterial version is the ABC excinuclease: a UvrA dimer scans and finds the lesion, hands it to UvrB, UvrC joins, the two of them make the two cuts, and the UvrD helicase pulls the fragment out.** Polymerase I then fills the gap in E. coli, polymerase epsilon in humans, and ligase seals it. What its substrate list shows about shape-recognition: it takes cyclobutane pyrimidine dimers and 6-4 photoproducts, both from ultraviolet light, and also bulky adducts such as benzo[a]pyrene-guanine, which forms in DNA on exposure to cigarette smoke. One system, sunlight and tobacco alike.",
      cn: "**核苷酸切除修复（nucleotide-excision repair）处理那些体积大到足以扭曲双螺旋的损伤；它识别的是这个扭曲，而不是某个具体的受损碱基 —— 这正是同一套系统能应付化学性质毫不相干的各种损伤的原因。**它的酶叫**切补核酸酶（excinuclease）**，这个名字记录了它的特别之处：**它把骨架切两刀，扭曲的两侧各一刀，把受损的那一段整块提出来。**在大肠杆菌里，两刀之间放出的片段是 12–13 个核苷酸；在人是 27–29 个。**细菌的版本叫 ABC 切补核酸酶：一个 UvrA 二聚体扫描并找到损伤，交给 UvrB，UvrC 加入，两者各切一刀，再由 UvrD 解旋酶把片段抽出来。**随后大肠杆菌用聚合酶 I、人用聚合酶 ε 把缺口填上，连接酶封死。它的底物清单说明了「按形状识别」有多强：**环丁烷嘧啶二聚体**和 **6-4 光产物**（两者都由紫外线造成），以及**苯并[a]芘–鸟嘌呤加合物**之类的大体积加合物 —— 后者是在接触香烟烟雾时在 DNA 里形成的。同一套系统，日光和烟草通吃。",
      src: "A p.935–936, Fig. 25-24"
    },
    {
      link_en: "what that system looks like when it is missing, and why humans suffer more than a bacterium would",
      link_cn: "这套系统缺失时是什么样子 —— 以及人为什么比细菌更遭殃",
      en: "**Xeroderma pigmentosum is the disease of broken nucleotide-excision repair. Because that pathway is the only route humans have for repairing pyrimidine dimers, patients are extremely sensitive to light and readily develop sunlight-induced skin cancers; most also have neurological problems, presumably because they cannot repair the lesions generated by the high oxidative metabolism of neurons.** Defects in any of at least seven proteins cause it, giving the genetic groups XPA to XPG — two of them in complexes that recognise the damage, five of them parts of the human excinuclease itself. **The reason it is so severe is lost redundancy: most microorganisms have backup routes for pyrimidine dimers and placental mammals do not**, which has led to the suggestion — flagged in the source as a suggestion — that early mammals were small, furry, nocturnal animals with little need to repair ultraviolet damage. One backup does remain, a polymerase that copies straight past a T-T dimer and puts two adenines opposite it, which is the right answer; losing that polymerase gives a variant form of the same disease. Two other inherited syndromes complete the picture: hereditary nonpolyposis colon cancer from mismatch repair defects, and defects in BRCA1 and BRCA2, found in about 10% of breast and ovarian cancers, where one job of BRCA2 is to load a protein called Rad51 onto DNA at breaks that run through both strands.",
      cn: "**着色性干皮病（xeroderma pigmentosum, XP）就是核苷酸切除修复坏掉时的样子。由于这条通路是人类修复嘧啶二聚体的唯一途径，患者对光极端敏感，很容易发生日光诱发的皮肤癌；多数患者还伴有神经系统异常，推测是因为他们无法修复神经元高氧化代谢所产生的损伤。**至少七个蛋白中任何一个出缺陷都能致病，由此分出 **XPA 到 XPG** 七个遗传组 —— 其中两个属于识别损伤的复合物，五个是人切补核酸酶本身的组件。**它之所以如此严重，原因是冗余的丧失：大多数微生物对嘧啶二聚体都备有后备通路，而有胎盘的哺乳动物没有。**这引出了一个推测（教材本身也标明这只是推测）：早期哺乳动物是体型小、有毛、夜行的动物，几乎不需要修复紫外损伤。有一条后备确实还留着：一个能径直越过 T-T 二聚体、并在它对面放上两个腺嘌呤的聚合酶 —— 而那正是正确答案；失去这个聚合酶会得同一种病的变异型。另外两种遗传综合征补全了这幅图：错配修复缺陷造成的遗传性非息肉病性结肠癌，以及 BRCA1 与 BRCA2 的缺陷（见于约 10% 的乳腺癌和卵巢癌）—— BRCA2 的一项工作，是在两条链都断开的断口处把一个叫 Rad51 的蛋白装载到 DNA 上。",
      src: "A p.932, Box 25-1",
      see: [{ id: "L-25-3-1", en: "what Rad51 does once it is loaded — recombinational repair", cn: "Rad51 装上去之后干什么 —— 重组修复" }]
    },
    {
      link_en: "fourth system: the one that removes nothing at all",
      link_cn: "第四套系统：什么都不切除的那一套",
      en: "Some damage is simply reversed on the spot. **First, photoreactivation: a DNA photolyase splits a cyclobutane pyrimidine dimer back into two separate pyrimidines using the energy of absorbed light — light undoing what light did.** It carries two light-absorbing groups, a reduced flavin in all organisms plus a folate in E. coli and yeast; the folate acts as an antenna catching blue photons and passes the energy to the flavin, which donates an electron to the dimer and lets it rearrange back. Placental mammals have lost these enzymes, which is why the previous step's redundancy is gone. **Second, a protein that repairs one base and dies doing it — the sharpest illustration here of how extravagant repair is. O6-methylguanine, formed by alkylating agents, is dangerous because it pairs with thymine instead of cytosine. A protein called O6-methylguanine-DNA methyltransferase repairs it by transferring the offending methyl group onto one of its own cysteine residues — and that transfer permanently methylates and inactivates the protein. It is therefore not really an enzyme at all, since an enzyme comes out of a reaction unchanged: one entire protein molecule is consumed to correct one damaged base.** Third, oxidative demethylation: methyl groups landing on adenine and cytosine in single-stranded DNA block base pairing directly, and the AlkB protein takes them off oxidatively, using the same chemistry family as the enzyme that hydroxylates proline in collagen.",
      cn: "有些损伤干脆被就地逆转。**第一，光复活（photoreactivation）：DNA 光解酶（photolyase）利用吸收到的光的能量，把一个环丁烷嘧啶二聚体重新劈回两个独立的嘧啶 —— 光把光造成的事撤销掉。**它带有两个吸光基团：所有生物都有的还原型黄素，加上大肠杆菌和酵母里的一个叶酸；叶酸充当**天线**接住蓝光光子，把能量传给黄素，激发态黄素给二聚体一个电子，让它重排回去。有胎盘的哺乳动物已经丢掉了这类酶 —— 这正是上一步所说的冗余消失的原因。**第二，自杀蛋白，也是本节关于「奢侈」最锋利的例证。O⁶-甲基鸟嘌呤由烷化剂造成，它的危险在于会与胸腺嘧啶配对而不是与胞嘧啶配对。一个叫 O⁶-甲基鸟嘌呤-DNA 甲基转移酶的蛋白负责修复它：把那个甲基转移到自己的一个半胱氨酸残基上 —— 而这一次转移就把这个蛋白永久甲基化、彻底失活。所以它其实算不上一个酶，因为酶按定义在反应后应当不变：修好一个受损碱基，消耗掉一整个蛋白分子。**第三，氧化脱甲基：落在单链 DNA 上腺嘌呤和胞嘧啶氨基上的甲基会直接妨碍碱基配对，而 **AlkB** 蛋白把它们氧化着摘掉，用的是与「给胶原蛋白里的脯氨酸加羟基」那个酶同属一个化学家族的机制。",
      src: "A p.937–938, Fig. 25-25, Fig. 25-26, Fig. 25-27"
    },
    {
      link_en: "every system so far assumed an intact complementary strand — here is the case where there is none",
      link_cn: "以上每一套系统都假定有一条完好的互补链 —— 现在来看没有互补链的情形",
      recall_en: "the structural fact from the second step: repair works because the other strand still holds the information",
      recall_cn: "第二步那个结构事实：修复之所以成立，是因为另一条链还保存着信息",
      en: "**For a break running through both strands, a cross-link joining both strands, or damage in DNA that is single-stranded at the time, the complementary strand is itself damaged or simply absent, and every mechanism above becomes unavailable.** How does that happen? Most often when a replication fork runs into a lesion that has not been repaired. **The polymerase may disengage and start again further along, leaving the lesion behind in an unreplicated single-stranded gap; or, if the fork arrives at a lesion that is in the middle of being repaired and therefore has a temporary break in one strand, the fork's arrival turns that single-strand break into a break through both strands.** Ionising radiation and oxidative reactions cause the same lesions directly. **Two avenues remain, and no others: take the missing information from a separate chromosome carrying the same sequence, or replicate past the lesion without being able to read it.** This is where repair and recombination stop being two subjects.",
      cn: "**对于贯穿两条链的断裂、把两条链连在一起的交联，或者发生在当时正处于单链状态的 DNA 上的损伤，互补链本身也受了损、或者干脆不存在，于是上面每一套机制都用不上了。**这种情形怎么出现的？最常见的是复制叉撞上一处尚未修复的损伤。**聚合酶可能脱开、跑到更远处重新起头，把那处损伤留在一段未被复制的单链缺口里；或者，如果复制叉到达的是一处正在被修复、因而某条链上带有临时断口的损伤，那么叉的到来就把这个单链断口变成了贯穿两条链的断裂。**电离辐射和氧化反应也能直接造成同样的损伤。**只剩两条路，没有第三条：到另一条带有同样序列的染色体上去取回丢失的信息，或者在读不出模板的情况下硬着头皮复制过去。**修复与重组正是从这里开始不再是两个话题。",
      src: "A p.938–939, Fig. 25-28",
      see: [{ id: "L-25-3-1", en: "the first avenue — recombinational repair from a homologous chromosome", cn: "第一条路 —— 从同源染色体进行的重组修复" }]
    },
    {
      link_en: "the second avenue is a system that deliberately raises the mutation rate, and it is defended rather than hidden",
      link_cn: "第二条路是一套刻意提高突变率的系统 —— 而教材对它是辩护，不是掩饰",
      en: "**In bacteria, replicating past an unreadable lesion is part of a stress response to heavy DNA damage called the SOS response, in which 40 or more proteins are induced. Two of them, UmuC and UmuD, exist for this purpose; UmuD is cut down to a shorter form that joins UmuC and RecA to make DNA polymerase V, which can copy past lesions that would otherwise stop replication dead.** It is inaccurate because it has to be: correct base pairing is often impossible at a lesion, so the errors are not a flaw in the enzyme. **The structural reason is worth having: the translesion polymerases have no proofreading exonuclease and a more open active site that can accommodate a damaged template base — a tight, shape-selective site would reject the lesion and stall, which is the very thing they exist to avoid, and a loose site cannot discriminate correct incoming nucleotides either.** Fidelity falls about 100-fold, to roughly one error in 1,000. **The defence: this is a desperation strategy. UmuC and UmuD are fully induced only late in the response and only when damage is heavy and every replication fork is blocked. The mutations kill some cells and damage others, and that is the price a species pays for getting past an otherwise absolute block.** Eukaryotes contain the same risk differently: their low-fidelity polymerases have specialised repair jobs and write only a few nucleotides at a time, which is what makes a sloppy enzyme safe to keep.",
      cn: "**在细菌里，「在读不出模板的情况下复制过去」属于一套应对大量 DNA 损伤的应激反应，叫 SOS 反应，其中有 40 多个蛋白被诱导。其中两个 —— UmuC 与 UmuD —— 就是为此而存在的；UmuD 被剪短成一个较短的形式，与 UmuC 和 RecA 组成 DNA 聚合酶 V，它能越过那些本来会让复制彻底停住的损伤继续抄下去。**它不准确，是因为它**必须**不准确：在一处损伤上往往根本无法正确配对，所以这些错误并不是酶的缺陷。**结构上的原因值得记住：这些跨损伤聚合酶没有校对外切酶，而且活性中心更敞开、能容纳一个受损的模板碱基 —— 一个紧致的、按形状挑选的活性中心会直接拒绝这个损伤并停摆，而那恰恰是它们存在的目的所要避免的；可是敞开的活性中心也就分辨不出进来的核苷酸对不对了。**保真度因此下降约 100 倍，降到大约千分之一的错误率。**教材的辩护是：这是一种孤注一掷的策略。UmuC 与 UmuD 只在反应的**晚期**才被完全诱导，而且只有在损伤严重、**所有**复制叉都被堵住时才被启用。由此产生的突变会杀死一部分细胞、给另一部分留下有害突变 —— 而这就是一个物种为了跨过一个否则绝对无法逾越的障碍所付的代价。**真核细胞用另一种办法控制同样的风险：它们那些低保真度的聚合酶各有专门的修复任务，而且每次只写几个核苷酸 —— 这正是一个粗糙的酶还能被安全地留着的原因。",
      src: "A p.939–940"
    }
  ],
  terms: [
    { en: "mutation", cn: "突变",
      def_en: "A permanent change in the nucleotide sequence of DNA, produced when a lesion goes unrepaired and is then copied and passed on. Either one base pair substituted for another, or one or more base pairs inserted or deleted. Silent if it falls in nonessential DNA or barely affects a gene's function; rarely advantageous; most non-silent ones are neutral or harmful.",
      def_cn: "DNA 核苷酸序列上的永久改变，产生于一处损伤未被修复、随后被复制并传下去。要么是一个碱基对被另一个取代，要么是一个或多个碱基对被插入或删除。落在非必需 DNA 上、或对基因功能几乎无影响的，是沉默突变；有利的极少；其余非沉默突变多为中性或有害。" },
    { en: "Ames test", cn: "Ames 试验",
      def_en: "A cheap bacterial assay for mutagenicity. A Salmonella strain whose histidine-synthesis enzyme has been broken by a mutation is plated without histidine, where almost nothing grows; a mutagen on a paper disc causes back-mutations that restore the pathway, and the colonies are counted. Over 90% of compounds shown carcinogenic in animal trials score as mutagens. Compounds are also tested after incubation with liver extract, since some become mutagenic only after metabolism.",
      def_cn: "一种廉价的细菌致突变性检测。取一株组氨酸合成酶被突变破坏的沙门氏菌，铺在无组氨酸培养基上，那里几乎长不出东西；滤纸片上的诱变剂引起回复突变、修复该通路，数菌落即可。动物实验中证实致癌的化合物有 90% 以上在此表现为诱变剂。化合物还要与肝脏提取物温育后再测一次，因为有些只有经代谢改造后才具诱变性。" },
    { en: "mismatch repair", cn: "错配修复",
      def_en: "The system correcting the rare mismatched base pairs left after replication, worth a further 100- to 1,000-fold in fidelity. Its difficulty is not detection but strand choice: at a G-T mismatch both bases are normal, and correcting the template strand would make a copying error permanent. E. coli identifies the new strand by the transient half-methylated state of GATC sites just behind the fork. Defects cause hereditary nonpolyposis colon cancer.",
      def_cn: "纠正复制后残留的少数错配碱基对的系统，再带来 100–1,000 倍的保真度提升。它的难点不在检测而在选链：G-T 错配上两个碱基都是正常碱基，若改了模板链，抄写错误就成了永久突变。大肠杆菌靠复制叉刚过去时 GATC 位点短暂的半甲基化状态来辨认新链。缺陷导致遗传性非息肉病性结肠癌。" },
    { en: "MutS, MutL and MutH", cn: "MutS、MutL 与 MutH",
      def_en: "The three E. coli proteins that connect a mismatch to a distant strand label. MutS scans and clamps onto the mismatch (all kinds except C-C); MutL joins and the pair slides either way looking for a half-methylated GATC; MutH carries a nuclease that stays off until such a site is found and then cuts the unmethylated strand. Helicase, single-strand binding protein and one of four exonucleases then remove everything from the cut through the mismatch — over 1,000 bp for one wrong base.",
      def_cn: "把错配与远处的链标签连接起来的三个大肠杆菌蛋白。MutS 扫描并箍住错配（除 C-C 外的各种）；MutL 加入，两者向任一方向滑动寻找半甲基化 GATC；MutH 带着一个核酸酶，在找到该位点之前一直关闭，找到后切开未甲基化的链。随后解旋酶、单链结合蛋白与四种外切酶之一，把从切口到错配之间的一切清除掉 —— 为一个错误碱基毁掉一千多个碱基对。" },
    { en: "DNA glycosylase", cn: "DNA 糖基化酶",
      def_en: "An enzyme that recognises one particular kind of damaged base and cuts the bond between base and sugar, so the base leaves and the backbone stays whole. Each is specific for one lesion, hence the many kinds — for uracil from deaminated cytosine, hypoxanthine from deaminated adenine, 8-hydroxyguanine from oxidised purine, alkylated bases such as 3-methyladenine.",
      def_cn: "识别某一种特定受损碱基、并切断碱基与糖之间那个键的酶，于是碱基离开而骨架完好。每一种只针对一种损伤，所以种类很多 —— 针对胞嘧啶脱氨生成的尿嘧啶、腺嘌呤脱氨生成的次黄嘌呤、嘌呤氧化生成的 8-羟基鸟嘌呤，以及 3-甲基腺嘌呤之类的烷基化碱基。" },
    { en: "AP site", cn: "AP 位点",
      def_en: "A position in DNA where the base has gone but the sugar-phosphate backbone remains — left by a glycosylase, or arising from slow spontaneous breaking of the base-sugar bond. It is not fixed by putting a base back, because the empty sugar is itself reactive and the strand breaks there; an AP endonuclease cuts the backbone, the whole nucleotide is replaced, and ligase seals the nick.",
      def_cn: "DNA 上碱基已经离开、而糖–磷酸骨架仍在的位置 —— 由糖基化酶留下，或由碱基–糖键缓慢自发断裂产生。它不能靠放回一个碱基来修，因为那个空糖本身就活泼、链会在那里断；AP 内切酶切开骨架，整个核苷酸被替换，再由连接酶封口。" },
    { en: "base-excision repair", cn: "碱基切除修复",
      def_en: "The pathway for chemically damaged bases, named for its first step: a glycosylase removes only the base, leaving an AP site. An AP endonuclease then cuts the backbone, a short segment is excised, DNA polymerase I fills from the intact strand, and ligase seals. In eukaryotes polymerases beta, iota and lambda do the filling, each also carrying an activity that clips out the abasic sugar.",
      def_cn: "针对化学受损碱基的通路，名字来自它的第一步：糖基化酶只取走碱基，留下一个 AP 位点。随后 AP 内切酶切开骨架，切除一小段，DNA 聚合酶 I 照着完好的链把它填回，连接酶封口。真核中由聚合酶 β、ι、λ 填补，它们各自还带有一个能剪掉无碱基糖的活性。" },
    { en: "nucleotide-excision repair", cn: "核苷酸切除修复",
      def_en: "The pathway for bulky lesions that distort the helix. It recognises the distortion rather than a particular base, which is why one system handles chemically unrelated damage — pyrimidine dimers, 6-4 photoproducts, benzo[a]pyrene-guanine from cigarette smoke. An excinuclease cuts the backbone twice, once each side of the distortion, releasing 12–13 nucleotides in E. coli and 27–29 in humans; a helicase pulls the piece out, a polymerase fills, ligase seals.",
      def_cn: "针对使双螺旋变形的大体积损伤的通路。它识别的是这个变形而不是某个碱基，所以同一套系统能处理化学上毫不相干的损伤 —— 嘧啶二聚体、6-4 光产物、香烟烟雾造成的苯并[a]芘–鸟嘌呤加合物。切补核酸酶在变形两侧各切一刀，大肠杆菌放出 12–13 个核苷酸、人 27–29 个；解旋酶把它抽出，聚合酶填补，连接酶封口。" },
    { en: "excinuclease", cn: "切补核酸酶",
      def_en: "The enzyme of nucleotide-excision repair, named for the property that sets it apart from an ordinary endonuclease: it makes two specific cuts, one either side of a lesion, and lifts the damaged stretch out as one piece. In E. coli it is the ABC excinuclease, built from UvrA, UvrB and UvrC; in humans it is a large multisubunit complex whose components are five of the seven proteins whose loss causes xeroderma pigmentosum.",
      def_cn: "核苷酸切除修复所用的酶，名字来自它区别于普通内切酶的性质：它切两刀，损伤两侧各一刀，把受损段整块提走。大肠杆菌里是由 UvrA、UvrB、UvrC 组成的 ABC 切补核酸酶；人体内则是一个大型多亚基复合物，其组件正是那七个「缺失会导致着色性干皮病」的蛋白中的五个。" },
    { en: "xeroderma pigmentosum", cn: "着色性干皮病",
      def_en: "The human disease of failed nucleotide-excision repair. Since that pathway is the only route humans have for pyrimidine dimers, patients are extremely light-sensitive and readily develop sunlight-induced skin cancers; most also have neurological problems. Seven genetic groups, XPA to XPG. It is this severe because placental mammals have lost the backup routes most microorganisms keep.",
      def_cn: "核苷酸切除修复失效所致的人类疾病。由于该通路是人类修复嘧啶二聚体的唯一途径，患者对光极端敏感、极易罹患日光诱发的皮肤癌，多数还伴神经系统异常。分为 XPA 至 XPG 七个遗传组。之所以如此严重，是因为有胎盘哺乳动物丢失了大多数微生物仍保有的后备通路。" },
    { en: "DNA photolyase", cn: "DNA 光解酶",
      def_en: "Direct repair that splits a cyclobutane pyrimidine dimer back into two pyrimidines using the energy of absorbed light — light reversing what light caused. It carries a reduced flavin in all organisms plus a folate in E. coli and yeast; the folate is an antenna catching blue photons and passing the energy to the flavin, which donates an electron to the dimer. Placental mammals have lost these enzymes.",
      def_cn: "一种直接修复：利用吸收到的光的能量，把环丁烷嘧啶二聚体劈回两个嘧啶 —— 光逆转光造成的损伤。所有生物都带一个还原型黄素，大肠杆菌和酵母另带一个叶酸；叶酸作天线捕获蓝光光子并把能量传给黄素，激发的黄素向二聚体给出一个电子。有胎盘的哺乳动物已丢失这类酶。" },
    { en: "O6-methylguanine-DNA methyltransferase", cn: "O⁶-甲基鸟嘌呤-DNA 甲基转移酶",
      def_en: "Direct repair of O6-methylguanine, an alkylation lesion that is dangerous because it pairs with thymine instead of cytosine. The protein moves the methyl group onto one of its own cysteine residues, which permanently methylates and inactivates it — so it is not strictly an enzyme, since an enzyme comes out of a reaction unchanged. One whole protein molecule per damaged base is the section's sharpest illustration of how much a cell will spend on its genome.",
      def_cn: "对 O⁶-甲基鸟嘌呤的直接修复。这处烷基化损伤之所以危险，是因为它会与胸腺嘧啶而非胞嘧啶配对。该蛋白把甲基转移到自己的一个半胱氨酸残基上，从而把自己永久甲基化并失活 —— 所以它严格说来不是酶，因为酶在反应后应当不变。每修一个受损碱基消耗一整个蛋白分子，这是本节关于「细胞肯为基因组花多少」最锋利的例证。" },
    { en: "SOS response", cn: "SOS 反应",
      def_en: "A bacterial stress response to heavy DNA damage, inducing 40 or more proteins. Some, such as UvrA and UvrB of the error-free excision repair, are already present and merely raised; UmuC and UmuD exist specifically for error-prone repair. UmuD is cut to a shorter form that joins UmuC and RecA as DNA polymerase V. Both umu genes are fully induced only late, and only when damage is heavy and all replication forks are blocked.",
      def_cn: "细菌对大量 DNA 损伤的应激反应，诱导 40 多个蛋白。有些（如无差错切除修复中的 UvrA、UvrB）本来就有，只是被提高表达；UmuC 与 UmuD 则专为易错修复而存在。UmuD 被剪短后与 UmuC、RecA 组成 DNA 聚合酶 V。两个 umu 基因只在反应晚期、且损伤严重、所有复制叉都被堵住时才被完全诱导。" },
    { en: "translesion synthesis", cn: "跨损伤合成",
      def_en: "Replicating straight past a lesion the normal machinery cannot read, necessarily inaccurate because correct base pairing is often impossible there. The polymerases that do it have no proofreading exonuclease and a more open active site able to hold a damaged template base — both required by the job and both the source of the error rate, which drops fidelity to about one error in 1,000. Eukaryotes contain the risk by giving these polymerases specialised repair jobs and only a few nucleotides to write.",
      def_cn: "在正常机器读不出的损伤处径直复制过去，必然不准确，因为在损伤处往往根本无法正确配对。执行它的聚合酶没有校对外切酶，活性中心也更敞开、能容下一个受损的模板碱基 —— 这两点都是任务本身所要求的，也都是错误率的来源，保真度因此降到约千分之一。真核细胞的控制办法是：只给这些聚合酶专门的修复任务，且每次只让它们写几个核苷酸。" }
  ]
};

/* ------------------------------------------------------------------ 25.3 */
window.BIOLITE_SPINE["L-25-3-1"] = {
  assumed: ["dna", "rna", "base", "base pair", "nucleotide", "protein", "enzyme",
            "atp", "nad", "gene", "allele", "cell", "eukaryote", "bacterium",
            "chromosome", "chromatin", "centromere", "spindle", "replication",
            "replication fork", "template", "helicase", "nuclease", "endonuclease",
            "exonuclease", "dna ligase", "primase", "kinase", "phosphorylation",
            "nucleophile", "phosphodiester bond", "tyrosine", "serine",
            "glutamate", "aspartate", "lysine", "hydroxyl", "antibody",
            "immunoglobulin", "lymphocyte", "bone marrow", "stem cell", "genome",
            "gamete", "diploid", "haploid", "meiosis", "mitosis", "cell cycle",
            "hemoglobin", "sickle cell", "rna splicing", "antibiotic", "virus",
            "phage", "plasmid", "maize", "yeast", "escherichia coli", "cohesin",
            "single-strand binding protein", "cancer", "mutation", "menopause",
            "ovulation", "gestation", "down syndrome", "haplotype",
            "single-strand break", "double-strand break", "nonhomologous end joining"],
  nodeTitle_en: "DNA recombination",
  nodeTitle_cn: "DNA 重组",
  title_en: "A break through both strands has no template left in the molecule, so the cell fetches the only other copy of that sequence in existence — and everything in this chain follows from that one move",
  title_cn: "两条链一起断掉时，分子内部再无模板可用 —— 于是细胞去把世上唯一另一份该序列的拷贝取来。下面的一切，都由这一个动作推出",
  steps: [
    {
      en: "Genetic recombination means rearranging genetic information within or between DNA molecules, and it comes in three classes that differ in what each one **requires**. Homologous recombination exchanges material between any two DNAs, or two parts of one DNA, that share a long stretch of nearly identical sequence: **the actual bases are irrelevant so long as the two match, so this class has no target motif at all — its requirement is a match.** Site-specific recombination is the opposite — **exchange happens only at one short defined sequence and nowhere else.** Transposition moves a short segment of DNA from one chromosomal position to another, **needs no similarity of sequence, and picks its destination more or less at random**; these jumping genes were first seen in maize in the 1940s by Barbara McClintock, decades before anyone believed her.",
      cn: "遗传重组（genetic recombination）指的是在 DNA 分子内部或分子之间重排遗传信息；它分三类，而三者的区别在于各自**要求什么**。同源重组（homologous recombination）在任意两条 DNA、或同一条 DNA 的两段之间交换材料，条件是它们共有一长段几乎相同的序列：**具体是哪些碱基完全无所谓，只要两边对得上 —— 所以这一类根本没有靶序列，它的要求就是「配得上」。**位点特异性重组（site-specific recombination）正相反 —— **交换只发生在某一段短而确定的序列上，别处一律不发生。**转座（transposition）把一小段 DNA 从染色体上的一个位置搬到另一个位置，**不需要序列相似，落点也基本上是随机的**；这些「跳跃基因」是 Barbara McClintock 在 1940 年代于玉米中最先看到的，比任何人愿意相信她的时间早了几十年。",
      src: "A p.940–941"
    },
    {
      link_en: "and the first of those three exists because of a limit the repair systems ran into",
      link_cn: "而这三类中的第一类之所以存在，是因为修复系统撞上了一个极限",
      recall_en: "every repair system needed an intact complementary strand as the record of what was lost",
      recall_cn: "每一套修复系统都需要一条完好的互补链，作为「丢失的信息原本是什么」的记录",
      en: "**When a break runs through both strands there is no such record left inside the molecule, so the cell goes and finds the only other copy of that sequence in existence and uses it. That is homologous recombination, and when its purpose is repair it is called recombinational DNA repair — which in bacteria is what it is mostly for.** Its usual target is one specific catastrophe: **rebuilding a replication fork that collapsed at a damage site.** Follow how the collapse happens, because it is caused by repair itself. **Every excision pathway leaves a temporary break in one strand while it works. If a replication fork arrives at a site being repaired, with a break present in one template strand, one arm of the fork is cut loose and the fork falls apart.** Repair in progress plus replication in progress equals a broken chromosome.",
      cn: "**当断裂贯穿两条链时，分子内部再没有这样一份记录了；于是细胞去把世上唯一另一份该序列的拷贝找出来，拿它来用。这就是同源重组；当它的目的是修复时，它被叫作重组修复（recombinational DNA repair）—— 而在细菌里，它主要就是干这个的。**它通常针对的是一场特定的灾难：**重建在损伤处塌陷掉的复制叉。**来看这场塌陷是怎么发生的，因为它正是修复本身造成的。**每一条切除通路在工作时都会在一条链上留下一个临时断口。如果一个复制叉到达一处正在被修复、因而某条模板链上带着断口的位置，叉的一条臂就被切断，整个叉散架。**修复正在进行，加上复制正在进行，等于一条断掉的染色体。",
      src: "A p.941, Fig. 25-29",
      see: [{ id: "L-25-2-1", en: "the repair systems whose transient nicks cause this", cn: "留下这些临时断口的那些修复系统" }]
    },
    {
      link_en: "the rescue runs in five steps, and each one has a reason",
      link_cn: "抢救分五步，每一步都有它的道理",
      en: "**One: the broken end is processed by chewing away the strand that ends in 5', which leaves a single-stranded tail ending in 3'** — note that the cell deliberately destroys some of its own DNA in order to make a tool. **Two: a recombinase coats that 3' tail and drives strand invasion — the 3' end pushes into the intact double helix on the other arm of the fork and pairs with the strand complementary to it. This is the step that recovers the lost information, and it works only because the invaded duplex carries the same sequence.** Three: the result is a branched structure where three DNA segments meet. **Four: the branch point travels along, converting the branch into an X-shaped crossover called a Holliday intermediate, after Robin Holliday, who postulated it before anyone had seen one.** Five: a specialised nuclease cuts the X apart — resolves it — ligase seals the nicks, and the fork is back.",
      cn: "**第一步：把断口加工一下 —— 把以 5′ 结尾的那条链啃掉，留下一条以 3′ 结尾的单链尾巴** —— 请注意，细胞是在**刻意毁掉自己的一部分 DNA，为的是造出一件工具**。**第二步：一个重组酶（recombinase）包裹住这条 3′ 尾巴，驱动链侵入（strand invasion）—— 这个 3′ 端挤进复制叉另一条臂上那段完好的双螺旋，与和它互补的那条链配上对。这一步才是把丢失的信息找回来的那一步，而它之所以可行，正是因为被侵入的那段双链带着同样的序列。**第三步：由此得到一个三段 DNA 交汇的**分支结构**。**第四步：分支点沿着 DNA 移动，把这个分支变成一个 X 形的交叉结构，叫 Holliday 中间体 —— 名字来自 Robin Holliday，他在任何人看见它之前就把它推想了出来。**第五步：一个专门的核酸酶把这个 X 切开 —— 叫「拆解（resolve）」—— 连接酶封住切口，复制叉就回来了。",
      src: "A p.941–942"
    },
    {
      link_en: "the enzyme that makes the 3' tail has a trick in it worth knowing",
      link_cn: "造出那条 3′ 尾巴的酶，里面藏着一个值得知道的机关",
      en: "RecBCD is a helicase and a nuclease in one protein. It binds linear DNA at a free broken end — so its substrate specificity is itself a damage signal, since an intact circular bacterial chromosome has no free ends — and travels inward, unwinding and destroying as it goes, powered by ATP: RecB is a motor running 3'→5' on one strand while RecD runs 5'→3' on the other. Then the switch. **On meeting a short sequence called chi, (5')GCTGGTGG, which binds tightly to the RecC subunit, the enzyme greatly reduces its destruction of the strand ending in 3' and steps up its destruction of the strand ending in 5' — manufacturing exactly the 3' tail the next step needs.** So chi is a switch telling a chewing enzyme to stop eating the strand the cell is about to want. **The E. coli genome carries 1,009 chi sites, each raising recombination frequency 5- to 10-fold within 1,000 bp of itself**, which makes this a genome-wide design rather than a curiosity.",
      cn: "RecBCD 把解旋酶和核酸酶做在同一个蛋白里。它结合线性 DNA 上一个游离的断口 —— 所以它的底物专一性本身就是一个损伤信号，因为完好的环状细菌染色体根本没有游离末端 —— 然后一路向内推进，边解开边降解，由 ATP 驱动：RecB 是一条链上 3′→5′ 的马达，RecD 是另一条链上 5′→3′ 的马达。接着是那个机关。**遇到一段叫 chi 的短序列 (5′)GCTGGTGG（它与 RecC 亚基上的一个位点紧密结合）之后，这个酶大幅**减少**对 3′ 端那条链的降解，同时**加大**对 5′ 端那条链的降解 —— 造出来的正是下一步所需要的那条 3′ 尾巴。**所以 chi 是一个开关，它告诉一个正在啃的酶：别再啃那条细胞马上要用的链了。**大肠杆菌基因组里有 1,009 个 chi 位点，每一个都把自身 1,000 bp 范围内的重组频率提高 5–10 倍**，可见这是一项全基因组尺度的设计，而不是一个奇闻。",
      src: "A p.942, Fig. 25-30"
    },
    {
      link_en: "and the recombinase that uses the tail does not work as a single molecule",
      link_cn: "而使用这条尾巴的那个重组酶，并不是以单个分子的形式工作的",
      en: "**RecA is the bacterial recombinase, and its active form is an ordered helical filament of up to several thousand subunits assembled cooperatively on DNA.** One RecA molecule does nothing useful: the homology search and the strand invasion belong to the polymer, which coats the single-stranded DNA and presents it stretched out and organised. **Assembly has an obstacle — single-strand binding protein is already sitting on exactly the DNA RecA needs, and it blocks the first few subunits from nucleating a filament. The cell's answer is economical: RecBCD itself acts as the RecA loader, so the same enzyme that manufactures the 3' tail installs the protein that will use it.** Worth noticing where else this protein appears: RecA is also a component of the error-prone polymerase that copies past unreadable lesions, so one protein sits at the junction of the accurate way out of a double-strand break and the desperate one.",
      cn: "**RecA 是细菌的重组酶，而它的活性形式是一条在 DNA 上协同组装起来的、可达数千个亚基的有序螺旋纤维。**单个 RecA 分子毫无用处：**同源性搜索**和**链侵入**属于这条聚合物 —— 它包裹住单链 DNA，把它拉伸开、摆整齐地呈递出来。**组装有一个障碍：单链结合蛋白（SSB）本来就趴在 RecA 所需要的那段 DNA 上，它挡住最初几个亚基，使纤维无法成核。细胞的对策很省事：RecBCD 自己充当 RecA 的装载器 —— 于是「造出 3′ 尾巴的那个酶」同时也把「将要用这条尾巴的那个蛋白」安装上去。**还值得注意这个蛋白出现在别的什么地方：RecA 也是那个「越过读不出的损伤硬抄过去」的易错聚合酶的组件之一 —— 所以同一个蛋白同时站在「走出双链断裂的精确路线」和「孤注一掷的那条路线」的岔口上。",
      src: "A p.942–943, Fig. 25-31",
      see: [{ id: "L-25-2-1", en: "the desperate route — translesion synthesis and the SOS response", cn: "孤注一掷的那条路 —— 跨损伤合成与 SOS 反应" }]
    },
    {
      link_en: "cutting the X apart is not the end, because a repaired fork is not yet a working fork",
      link_cn: "把 X 切开还不算完，因为「修好的叉」还不等于「能跑的叉」",
      en: "**The bacterial RuvC protein resolves the Holliday intermediate, cutting it on opposing sides of the junction so that two continuous arms remain in each product, and ligase seals the nicks.** Then a problem that is easy to forget: **the machinery that assembles a replication fork is built to act at oriC, the one origin, and this fork is in the middle of a chromosome. So bacteria have a separate route called origin-independent restart** — combinations of four proteins, PriA, PriB, PriC and DnaT, work with DnaC to load the DnaB helicase onto the rebuilt fork, primase then lays an RNA primer, and polymerase III reassembles on the helicase; the assemblies involved are called replication restart primosomes. **Keeping a whole dedicated protein system for this says something: fork collapse is not a rare accident a cell tolerates, it is common enough to be worth building for.**",
      cn: "**细菌的 RuvC 蛋白负责拆解 Holliday 中间体：它在交叉点的对侧各切一刀，使每一个产物里都保留两条连续的臂，再由连接酶封住切口。**接下来是一个很容易被忘掉的问题：**装配复制叉的那套机器，是为在 oriC 这唯一一个起点上工作而造的，而现在这个叉在染色体中间。所以细菌另有一条路，叫不依赖起点的复制重启（origin-independent restart）** —— PriA、PriB、PriC、DnaT 这四个蛋白的不同组合与 DnaC 一起，把 DnaB 解旋酶装到重建好的叉上，引物酶随后铺一段 RNA 引物，聚合酶 III 在解旋酶上重新组装；参与其中的这些组装体叫**复制重启引发体（replication restart primosome）**。**为这件事专门养着一整套蛋白系统，本身就说明了一件事：复制叉塌陷不是细胞偶尔忍一忍的稀有事故，而是常见到值得专门为它造一套机器。**",
      src: "A p.943"
    },
    {
      link_en: "in a eukaryote the same chemistry has a second job, and this one is not optional",
      link_cn: "在真核细胞里，同样的化学还有第二项工作 —— 而这一项没得商量",
      en: "**Meiosis is the two divisions that turn a diploid germ-line cell into haploid gametes: DNA is replicated once, then the cell divides twice with no replication in between. The first division separates the two homologous chromosomes; the second separates the two sister chromatids within each.** Here is the mechanical requirement. Chromosomes that are to be pulled apart must first be physically joined, because spindle fibres pull on the centromeres and the resulting tension is the signal that this pair is correctly aligned; if both centromeres of a pair happen to be attached to the same pole there is no tension, a kinase senses its absence and strips the attachments so the cell can try again. For the second division the links already exist — cohesins laid down at replication hold sister chromatids together. **For the first division the two chromosomes to be separated are homologs, not products of a recent replication, so they carry no cohesins and no other attachment. The links have to be manufactured, and recombination is what manufactures them: the exchange is visible down a light microscope as crossing over, at points called chiasmata.** The genetic diversity generated on the way is real, and it is secondary — the primary product is a handle the spindle can pull against.",
      cn: "**减数分裂（meiosis）是把二倍体生殖系细胞变成单倍体配子的两次分裂：DNA 只复制一次，然后细胞连分两次、中间不再复制。第一次分裂分开的是两条同源染色体，第二次分开的是每条里面的两条姐妹染色单体。**接下来是那个力学要求。**将要被拉开的染色体，必须先在物理上被连在一起 —— 因为纺锤丝拉的是着丝粒，由此产生的张力才是「这一对已经正确对齐」的信号；如果一对染色体的两个着丝粒碰巧连到了同一极，就没有张力，一个激酶感知到张力的缺失，把连接拆掉，让细胞重来一次。**第二次分裂所需的连接本来就有 —— 复制时铺下的黏连蛋白把姐妹染色单体拴在一起。而第一次分裂要分开的两条染色体是同源染色体，并不是刚刚复制出来的产物，所以它们身上没有黏连蛋白，也没有任何其他连接。这些连接必须被制造出来，而制造它们的正是重组：这种交换在光学显微镜下看得见，叫交叉互换（crossing over），发生的位置叫交叉点（chiasma）。沿途产生的遗传多样性是真实的，但它是次要产物 —— 首要产物是一个能让纺锤体拉住的把手。",
      src: "A p.944–946"
    },
    {
      link_en: "the eukaryotic mechanism is the bacterial one with a different cast, and one of the new names is why this matters in a clinic",
      link_cn: "真核的机制就是细菌那一套换了演员 —— 而新演员里有一个名字，正是这一节在临床上重要的原因",
      recall_en: "resection to a 3' tail, strand invasion, a Holliday intermediate, resolution — the same four moves as the bacterial fork rescue",
      recall_cn: "切出 3′ 尾巴、链侵入、Holliday 中间体、拆解 —— 与细菌抢救复制叉完全是同样的四个动作",
      en: "**Four features: the homologous chromosomes align; a break through both strands is made in one of them and an exonuclease chews the ends back to leave 3' single-stranded tails; those 3' ends invade the intact duplex of the homolog, and branch migration or replication follows, giving a pair of Holliday intermediates; cutting the two crossovers yields complete recombinant products.** Once an invading 3' end has paired with the homolog, a stretch of hybrid DNA exists made of strands from two different parents, and the pair of intermediates can be cut two ways — one leaves the flanking DNA unrecombined, the other recombines it, and both happen in living cells. **The eukaryotic recombinases are Rad51 and Dmc1, the counterparts of RecA, and Rad51 is loaded onto DNA by BRCA2. That is the same BRCA2 whose inherited defects account for about 10% of breast and ovarian cancers: a woman carrying such a mutation cannot efficiently load the recombinase that repairs breaks through both strands, so the accurate route is impaired and damage accumulates.**",
      cn: "**四个要点：两条同源染色体先对齐；在其中一条上造成一个贯穿两条链的断裂，外切酶把断端啃回去，留下 3′ 单链尾巴；这些 3′ 端侵入同源染色体上完好的双链，随后是分支迁移或复制，形成一对 Holliday 中间体；把这两个交叉切开，就得到完整的重组产物。**一旦侵入的 3′ 端与同源染色体配上对，就存在一段由**两个不同来源的链**组成的**杂合 DNA**；而这一对中间体有两种切法 —— 一种切法使两侧的 DNA 不发生重组，另一种使它们发生重组，活细胞里两种都会出现。**真核的重组酶是 Rad51 和 Dmc1，即 RecA 的对应物；而把 Rad51 装载到 DNA 上的是 BRCA2。这正是那个「遗传性缺陷占乳腺癌与卵巢癌约 10%」的 BRCA2：携带这种突变的女性无法高效地装载那个修复双链断裂的重组酶，于是精确的那条路受损，损伤不断累积。**",
      src: "A p.947, Fig. 25-34"
    },
    {
      link_en: "and this exchange is what makes a genetic map possible, with one honest caveat",
      link_cn: "而这种交换正是遗传图谱得以成立的原因 —— 但有一个必须说清的保留",
      en: "Two homologous chromosomes are not identical: the order of genes is the same, but some genes may differ slightly in sequence, that is, carry different alleles. **The example is exact — one chromosome may carry the allele for hemoglobin A and the other the allele for hemoglobin S, and the difference between them may be a single base pair among millions.** Recombination shuffles which alleles end up together on one chromosome, and that is the whole of its contribution to diversity here. **The mapping argument: if crossing over can happen with roughly equal probability anywhere along two homologous chromosomes, then the frequency of recombination between two points is roughly proportional to the distance between them, so a recombination frequency is a ruler. Two genes far apart are separated by a crossover often; two close together, rarely.** The caveat is worth keeping: **crossing over is not entirely random, and hot spots have been found on many eukaryotic chromosomes, so a map distance obtained this way is not a physical distance in base pairs and will be wrong wherever recombination is locally unusual.**",
      cn: "两条同源染色体并不完全相同：基因的排列顺序一样，但某些基因的序列可能略有差别 —— 也就是携带不同的**等位基因（allele）**。**教材给的例子很精确：一条染色体上可能带血红蛋白 A 的等位基因，另一条带血红蛋白 S（镰状细胞）的等位基因，而两者之间的差别可能只是数百万个碱基对中的一个。**重组所做的，就是重新洗牌哪些等位基因最终落在同一条染色体上；在这个层面上，它对多样性的贡献仅此而已。**制图的论证是：如果交叉互换在两条同源染色体上任何位置发生的概率大致相等，那么两点之间发生重组的频率就大致正比于它们之间的距离 —— 于是重组频率就是一把尺子。相距远的两个基因经常被一次交叉分开；靠得近的两个则很少被分开。**那个保留值得记住：**交叉互换并非完全随机，许多真核染色体上已发现热点；所以这样得到的图距并不是以碱基对计的物理距离，凡是局部重组行为异常的地方，它都会出错。**",
      src: "A p.947, Fig. 25-35"
    },
    {
      link_en: "when those manufactured links fail, the consequence in humans is measurable and large",
      link_cn: "当那些被制造出来的连接失效时，在人身上的后果既可测量，又非常大",
      recall_en: "the links exist so that spindle tension can verify alignment",
      recall_cn: "那些连接的存在，是为了让纺锤体的张力能验证对齐是否正确",
      en: "**If alignment and recombination in the first meiotic division are not correct and complete, segregation goes wrong and a gamete ends up with no copy or two copies of a chromosome. A cell with the wrong number of chromosomes is aneuploid.** The rates climb with complexity: about 1 in 10,000 meiotic events in yeast, 1 in 100 in mice, **and 10% to 30% of fertilised human eggs, which the source says is almost certainly an underestimate. Aneuploidy is the leading cause of pregnancy loss and the leading genetic cause of developmental and mental disability**; the few trisomic fetuses reaching birth generally carry three copies of chromosome 13, 18 or 21. The maternal age effect has a mechanism rather than just a statistic. Human egg production begins before birth: meiosis starts in the fetus at 12 to 13 weeks, the chromosomes line up and generate their crossovers, and then the cells stop in an arrested phase called the dictyate stage with those crossovers already in place — where they wait anywhere from 13 to 50 years until ovulation lets one finish. The crossovers have to survive that whole wait, and the rate of trisomy climbs as they age.",
      cn: "**如果减数第一次分裂中的对齐与重组不正确、不完整，分离就会出错，配子最终会一份该染色体也没有、或者拿到两份。染色体数目不对的细胞叫非整倍体（aneuploid）。**这个比率随生物复杂度上升：酵母约每 10,000 次减数分裂 1 次，小鼠 1/100，**而人受精卵中占 10%–30%，教材说这几乎肯定还是低估。非整倍体是妊娠丢失的首要原因，也是发育与智力障碍的首要遗传原因**；少数能出生的三体胎儿一般是 13、18 或 21 号染色体三份（21 三体即唐氏综合征）。「母亲年龄效应」有机制可讲，不只是一个统计数字。人的卵子发生始于出生之前：减数分裂在胎儿 12–13 周时开始，染色体排好队、生成交叉，然后细胞就停住了，进入一个叫核网期（dictyate stage）的停滞阶段 —— 交叉已经就位地待在那里，一等就是 13 到 50 年，直到排卵才让其中一个细胞把分裂做完。这些交叉必须挺过整段等待，而随着它们老化，三体的发生率就往上爬。",
      src: "A p.946, Box 25-2"
    },
    {
      link_en: "the same repair defect that causes those cancers can be turned into a way of killing them",
      link_cn: "而造成那些癌症的同一个修复缺陷，可以反过来变成杀死它们的办法",
      en: "A human chromosome is millions of base pairs of elaborate chromatin, so how does a repair protein find a break at all? **Part of the answer is PARP1, a first responder that scans for damage — especially breaks in one strand — and on finding one builds an elaborate branched polymer out of NAD, attached to itself and to nearby proteins. The polymer is a flag marking where the damage is, and repair proteins are recruited to it.** Lose PARP1 and single-strand breaks pile up; when the chromosome is next replicated, those become breaks through both strands. **Now put two facts together. A breast or ovarian tumour with a BRCA1 or BRCA2 defect has already lost the accurate repair of double-strand breaks. Take PARP1 away as well and it dies, while normal cells, which still have working BRCA, survive.** That reasoning produced a drug class: **olaparib, the first PARP1 inhibitor, approved in 2014, gave a fourfold increase in progression-free survival as maintenance treatment for women with BRCA-deficient tumours.** Attacking the backup pathway in a cell whose primary pathway is already gone is the general principle.",
      cn: "一条人类染色体是数百万碱基对的复杂染色质 —— 那么一个修复蛋白究竟怎么**找到**一处断口？**答案的一部分是 PARP1：它是一个第一响应者，在 DNA 上扫描损伤，尤其是单条链上的断口；一旦找到，它就用 NAD 造出一大团有分支的聚合物，接在自己身上、也连到附近的蛋白上。这团聚合物是一面旗，标出损伤的位置，修复蛋白被招募到这里来。**失去 PARP1，单链断口就会堆积；等到染色体下一次被复制，这些单链断口就变成贯穿两条链的断裂。**现在把两件事放在一起。一个带 BRCA1 或 BRCA2 缺陷的乳腺或卵巢肿瘤，已经失去了对双链断裂的精确修复。再把 PARP1 也拿掉，它就死了；而正常细胞的 BRCA 还好好的，活得下来。**这条推理造出了一类药：**奥拉帕利（olaparib），第一个 PARP1 抑制剂，2014 年获批；对 BRCA 缺陷肿瘤的女性作为维持治疗，使无进展生存期提高了四倍。**在一个「主通路已经没了」的细胞里去打它的后备通路 —— 这就是那条通则。",
      src: "A p.948, Box 25-3"
    },
    {
      link_en: "and when there is no second copy to fetch at all, the cell falls back on something cruder",
      link_cn: "而当根本没有第二份拷贝可取时，细胞退而求其次，用一种粗糙得多的办法",
      en: "Outside replication there is no sister chromatid, so recombinational repair is simply not available, and a broken chromosome would kill the cell. **The fallback is nonhomologous end joining: the two broken ends are trimmed and ligated straight back together. State the cost plainly — it does not conserve the original sequence, and it is frankly a mutagenic process.** Even so it handles most repair of double-strand breaks outside meiosis in mammals, where a diploid cell has an undamaged homolog to balance small losses and a non-germ-line mutation is not inherited; in yeast, with a small genome and little room for lost information, recombination does most of the work instead. **The mechanism: a Ku70-Ku80 pair binds the broken ends first and acts as the scaffold everything else assembles on; it recruits the kinase DNA-PKcs and the nuclease Artemis, the two ends are held together, DNA-PKcs phosphorylates Artemis, and phosphorylated Artemis trims back single-stranded overhangs and hairpins. Strands from the two different ends then anneal wherever short complementary patches happen to be found — which is exactly why sequence is lost.** Polymerase mu or lambda fills the small gaps and a complex of XRCC4, XLF and DNA ligase IV seals the nicks. Ends are not joined at random, because chromatin holds the two ends of one break near each other.",
      cn: "在不复制的时期没有姐妹染色单体，重组修复根本用不上，而一条断掉的染色体会要了细胞的命。**退路是非同源末端连接（nonhomologous end joining, NHEJ）：把两个断端修剪一下，直接连回去。代价要说清楚 —— 它不保留原来的序列，而且坦白说就是一个致突变的过程。**即便如此，在哺乳动物中，减数分裂之外的双链断裂修复大多由它承担：二倍体细胞有一条未受损的同源染色体来平衡小的丢失，而非生殖系的突变也不会遗传下去；相比之下酵母基因组小、丢不起信息，那里大部分工作仍由重组完成。**机制是这样：Ku70–Ku80 二聚体最先结合断端，充当其余一切在其上组装的支架；它招募激酶 DNA-PKcs 和核酸酶 Artemis，两个断端被并拢固定，DNA-PKcs 使 Artemis 磷酸化，而磷酸化后的 Artemis 把单链突出端和发夹修剪掉。接着，来自两个不同断端的链会在任何恰好互补的短片段处退火配对 —— 这正是序列丢失的原因。**聚合酶 μ 或 λ 把小缺口填上，由 XRCC4、XLF 与 DNA 连接酶 IV 组成的复合体把切口封死。断端并不是随机乱接的，因为染色质结构把同一个断口的两端保持在彼此附近。",
      src: "A p.948–950"
    },
    {
      link_en: "second class: recombination that happens at one sequence only, and its chemistry answers an energy question",
      link_cn: "第二类：只在某一段序列上发生的重组 —— 而它的化学回答了一个能量问题",
      en: "**A site-specific recombination system needs only two things: a recombinase, and a defined recombination site of 20 to 200 bp where it acts.** Follow the tyrosine class. **The recombinase binds each of two sites, cuts one DNA strand at each, and holds the cut end on itself as a covalent phosphotyrosine bond. That linkage preserves the energy of the phosphodiester bond that was broken, so no ATP is needed downstream — the energy is parked on the enzyme and spent again when the strands are rejoined to new partners, through a Holliday intermediate.** The whole thing then repeats at a second point in each site. Enzymes of the serine class cut both strands of each site at once and rejoin them with no Holliday intermediate. **In both classes the exchange is reciprocal and precise, and the recombination sites are regenerated intact when the reaction finishes: nothing is gained, lost or degraded.** The summary worth memorising: a recombinase is a site-specific endonuclease and a ligase in one package. Recombination sites are not palindromes, so each one has an orientation, and two sites line up in the same orientation during the reaction. **Two sites on the same DNA molecule pointing opposite ways give an inversion of the DNA between them; two pointing the same way give a deletion of it. Two sites on different DNA molecules give an intermolecular exchange, and if one of the molecules is circular the result is an insertion — which is exactly how a phage integrates itself into a bacterial chromosome.** A concrete use closes a loop with the start of this chain. Recombinational repair of a circular bacterial chromosome sometimes produces a deleterious by-product: resolving a Holliday intermediate one way and finishing replication can give one contiguous dimeric chromosome instead of two monomers, and covalently linked chromosomes cannot be handed to two daughter cells — the dividing cell gets stuck. E. coli's XerCD system converts dimers back to monomers, and the reaction it performs is precisely the site-specific deletion just described.",
      cn: "**一套位点特异性重组系统只需要两样东西：一个重组酶，以及它作用其上的一段确定的重组位点，长 20–200 bp。**先看**酪氨酸类**。**重组酶分别结合两个位点，在每个位点上切开一条 DNA 链，并把切断的那一端以共价的磷酸酪氨酸键挂在自己身上。这个连接把被切断的那个磷酸二酯键的能量保存了下来，所以后续步骤不需要 ATP —— 能量寄存在酶身上，等到把链接到新的伙伴上时再花出去，中途经过一个 Holliday 中间体。**然后整个过程在每个位点的第二个位置再来一遍。**丝氨酸类**的酶则同时切开每个位点的两条链，不经过 Holliday 中间体就重新接好。**两类都一样：交换是**互易而精确**的，反应结束时重组位点被完好地重新生成 —— 没有任何东西被增加、丢失或降解。**最该背下来的一句总结：一个重组酶就是「位点特异性内切酶 + 连接酶」打包在一起。重组位点不是回文序列，所以每一个都有**方向**；反应时两个位点以相同的方向对齐。**同一条 DNA 上、方向相反的两个位点，会把它们之间的 DNA 倒转（inversion）；方向相同的两个位点，会把中间那段删除（deletion）。位于不同 DNA 分子上的两个位点则发生分子间交换；若其中一个分子是环状的，结果就是插入（insertion）—— 噬菌体整合进细菌染色体走的正是这一步。**有一个具体用途与本节开头合上了环。环状细菌染色体的重组修复有时会产生一个有害的副产品：把 Holliday 中间体按某一种方式拆解、再把复制做完，得到的可能不是两条单体染色体，而是一条首尾相连的二聚体染色体；而共价连在一起的染色体没法分给两个子细胞 —— 分裂中的细胞就此卡住。大肠杆菌的 XerCD 系统把二聚体变回单体，而它执行的反应，恰恰就是刚才说的那种位点特异性删除。",
      src: "A p.951–952, Fig. 25-38, Fig. 25-39"
    },
    {
      link_en: "third class: segments that move on their own, which the source calls molecular parasites",
      link_cn: "第三类：会自己搬家的片段 —— 教材称它们为分子寄生物",
      en: "**A transposon is a segment of DNA that jumps from a donor site to a target site with no requirement for similar sequence and a more or less random destination — perhaps the simplest of molecular parasites, adapted to replicate passively inside a host's chromosomes.** Landing inside an essential gene would be lethal, so transposition is tightly regulated and usually rare. **Insertion sequences carry only what transposition needs: the terminal sequences plus the gene for the transposase. Complex transposons carry extra genes as well — antibiotic resistance among them, and the spread of resistance through disease-causing bacteria is largely transposon-mediated.** There is a structural signature worth recognising: **inserting a transposon duplicates a 5 to 10 bp stretch of the target sequence, leaving a short direct repeat on each side. That is a consequence of the staggered cut used to insert it, so finding such repeats flanking a sequence is evidence that the sequence arrived by transposition.** Two ways to move: direct transposition cuts the element out and relocates it, leaving a double-strand break in the donor that the repair systems above must now handle; replicative transposition copies the element and leaves the original behind, passing through a joined intermediate called a cointegrate that is later separated by site-specific recombination — the third class of recombination finishing a job the first one started. The chemistry underneath both is the same: **the liberated 3'-hydroxyls at the transposon's ends act as nucleophiles and attack phosphodiester bonds in the target DNA.** Nearly half the human genome is made of transposable elements.",
      cn: "**转座子（transposon）是一段 DNA，它从供体位点跳到靶位点，不要求序列相似，落点也基本随机 —— 教材说，它们大概是最简单的分子寄生物，其生存之道就是被动地在宿主染色体内复制。**落进一个必需基因里会致死，所以转座被严格调控，通常很少发生。插入序列（insertion sequence）只携带转座所必需的东西：两端的序列，加上转座酶的基因。复杂转座子（complex transposon）则另外携带别的基因 —— 其中就有抗生素抗性；而抗性在致病菌群中的扩散，很大程度上是由转座介导的。有一个结构签名值得会认：**转座子插入时会把靶序列上一段 5–10 bp 的短序列复制一份，于是插入片段两侧各留下一段短的正向重复。这是插入时那一刀「错位切割」的必然结果 —— 所以在一段序列两侧发现这样的重复，就是它由转座而来的证据。**搬家有两种方式：**直接转座把元件切下来搬走，在供体处留下一个双链断裂，交给上面那些修复系统去善后；复制型转座则把元件复制一份、把原件留在原处，中途经过一个叫共整合体（cointegrate）的连体中间产物，随后由位点特异性重组把它分开** —— 第三类重组开的头，由第二类来收尾。两条路底下的化学是同一套：**转座子两端游离出来的 3′-羟基充当亲核试剂，去进攻靶 DNA 上的磷酸二酯键。**人类基因组中将近一半由各种可转座元件构成。",
      src: "A p.951–953, Fig. 25-40, Fig. 25-41"
    },
    {
      link_en: "and the last case is a programmed rearrangement that solves an arithmetic problem which looks impossible",
      link_cn: "最后一个案例，是一次被编排好的重排 —— 它解决了一道看上去无解的算术题",
      recall_en: "the 3'-hydroxyl attacking a phosphodiester bond, from the transposition step just above",
      recall_cn: "上一步转座里那个「3′-羟基去进攻磷酸二酯键」的动作",
      en: "A human makes millions of different antibodies from a genome of about 20,000 genes. Take the IgG kappa light chain. In an undifferentiated cell its coding information sits in three kinds of separate segment: 40 different V segments encoding the first 95 residues of the variable region, 5 different J segments encoding its remaining 12, and 1 C segment for the constant region. As a bone-marrow stem cell becomes a mature B lymphocyte, a recombination system joins one V to one J and deletes what lay between: **40 × 5 = 200 combinations.** The joining is deliberately imprecise, unlike the site-specific recombination above, and the extra variation at the junction raises that by a factor of at least 2.5, to about 500. **Heavy chains give over 5,000, and any heavy chain can pair with any light chain: at least 2.5 million different IgGs. Each mature B lymphocyte makes only one antibody — the range belongs to the population of cells, not to any one of them.** The mechanism is where this chain closes: **RAG1 and RAG2 bind recombination signal sequences beside each V and J segment, cut one strand, and the liberated 3'-hydroxyl then attacks a phosphodiester bond in the other strand to make the double-strand break — the same chemistry as transposition — and the ends are joined by nonhomologous end joining. The excised DNA even has the sequence structure of a transposon, and in a test tube RAG1 and RAG2 can insert it into other DNA molecules.**",
      cn: "一个人用大约 20,000 个基因的基因组，造出数以百万计的不同抗体。以 IgG 的 κ 轻链为例。在未分化的细胞里，它的编码信息分散在三种独立的片段中：40 个不同的 V 片段，编码可变区的前 95 个残基；5 个不同的 J 片段，编码可变区剩下的 12 个残基；以及 1 个编码恒定区的 C 片段。当骨髓干细胞分化为成熟 B 淋巴细胞时，一套重组系统把一个 V 与一个 J 接到一起，并把中间的 DNA 删除：**40 × 5 = 200 种组合。**这个连接是**刻意不精确**的（与上面那种位点特异性重组正相反），接口处额外产生的变异又把这个数至少乘上 2.5 倍，达到约 500 种。**重链能给出 5,000 种以上，而任何一条重链都能与任何一条轻链配对：至少 250 万种不同的 IgG。每个成熟 B 淋巴细胞只造一种抗体 —— 这个巨大的范围属于整个细胞群体，而不属于其中任何一个细胞。**而机制正是本节合环的地方：**RAG1 与 RAG2 结合每个 V 和 J 片段旁边的重组信号序列，切开一条链；游离出来的 3′-羟基随即进攻另一条链上的磷酸二酯键，造成双链断裂 —— 与转座是同一套化学 —— 而两端由非同源末端连接接起来。被切出去的那段 DNA，其序列结构甚至就是大多数转座子的样子；在试管里，RAG1 和 RAG2 还能把它插进别的 DNA 分子中去。**",
      src: "A p.954–955, Fig. 25-43",
      openQuestion_en: "Whether the vertebrate immune system evolved in part from ancient transposons is raised by the source as a question and marked as speculation: the properties of the rearrangement system suggest it, but it cannot be known for certain. Keep the hedge when repeating it.",
      openQuestion_cn: "脊椎动物免疫系统是否部分地由古老的转座子演化而来 —— 教材把这当作一个**问题**提出，并明确标为推测：重排系统的性质提示了这一点，但无法确知。转述时请把这个保留语气一并带上。"
    }
  ],
  terms: [
    { en: "homologous recombination", cn: "同源重组",
      def_en: "Exchange between any two DNAs, or two parts of one DNA, sharing a long stretch of nearly identical sequence. The actual bases are irrelevant so long as the two match — it has no target motif, only a requirement for similarity. Largely a way of repairing breaks that run through both strands; in eukaryotes it additionally manufactures the physical links meiosis needs.",
      def_cn: "任意两条 DNA、或同一条 DNA 的两段之间的交换，条件是它们共有一长段几乎相同的序列。具体是哪些碱基无关紧要，只要两边对得上 —— 它没有靶序列，只有「相似」这一个要求。主要用于修复贯穿两条链的断裂；在真核生物中还额外承担制造减数分裂所需物理连接的任务。" },
    { en: "recombinational DNA repair", cn: "重组修复",
      def_en: "The name homologous recombination goes by when its purpose is repair, which in bacteria is its main role. Usually aimed at rebuilding a replication fork that collapsed: a fork arriving at a lesion under repair, where one template strand carries a temporary break, loses an arm, and recombination with the intact duplex on the other arm restores it.",
      def_cn: "同源重组在以修复为目的时的名字；在细菌里这是它的主要角色。通常用于重建塌陷的复制叉：复制叉到达一处正在被修复、某条模板链上带临时断口的损伤，一条臂被切断，靠与另一条臂上完好的双链重组把它恢复。" },
    { en: "strand invasion", cn: "链侵入",
      def_en: "The central step of homologous recombination: a single-stranded 3' tail, made by chewing away the strand that ends in 5' at a break, is coated by a recombinase and pushes into an intact duplex carrying the same sequence, pairing with the strand complementary to it. This is the step that recovers the lost information, and it works only because the invaded duplex is homologous.",
      def_cn: "同源重组的核心一步：在断口处把以 5′ 结尾的链啃掉而得到的 3′ 单链尾巴，被重组酶包裹后挤进一段带有同样序列的完好双链，与和它互补的那条链配对。这一步才是把丢失的信息找回来的一步，而它之所以可行，正因为被侵入的双链是同源的。" },
    { en: "Holliday intermediate", cn: "Holliday 中间体",
      def_en: "The X-shaped crossover formed when the branch point made by strand invasion migrates along the DNA; named for Robin Holliday, who postulated it before it had been seen. It is resolved by nucleases such as bacterial RuvC, which cuts on opposing sides of the junction so each product keeps two continuous arms; ligase then seals the nicks. Which of two ways it is cut decides whether the flanking DNA ends up recombined.",
      def_cn: "链侵入所形成的分支点沿 DNA 移动后得到的 X 形交叉结构；名字来自 Robin Holliday，他在它被看到之前就推想了出来。由 RuvC 之类的核酸酶拆解：在交叉点对侧各切一刀，使每个产物保留两条连续的臂，再由连接酶封口。按两种切法中的哪一种去切，决定了两侧的 DNA 是否发生重组。" },
    { en: "RecBCD and chi", cn: "RecBCD 与 chi 序列",
      def_en: "A helicase and nuclease in one protein. It binds linear DNA at a free broken end — itself a damage signal, since an intact circular chromosome has none — and travels inward unwinding and degrading, RecB as a 3'→5' motor on one strand and RecD as a 5'→3' motor on the other. On meeting the chi sequence (5')GCTGGTGG it cuts back its destruction of the 3'-ending strand and steps up the 5' one, manufacturing the 3' tail strand invasion needs. E. coli carries 1,009 chi sites, each raising local recombination 5- to 10-fold.",
      def_cn: "解旋酶与核酸酶合于一身的蛋白。它结合线性 DNA 上游离的断口 —— 这本身就是损伤信号，因为完好的环状染色体没有断口 —— 然后向内推进、边解开边降解：RecB 是一条链上 3′→5′ 的马达，RecD 是另一条链上 5′→3′ 的马达。遇到 chi 序列 (5′)GCTGGTGG 后，它减少对 3′ 端链的降解、加大对 5′ 端链的降解，从而造出链侵入所需的 3′ 尾巴。大肠杆菌有 1,009 个 chi 位点，每个把局部重组频率提高 5–10 倍。" },
    { en: "RecA", cn: "RecA",
      def_en: "The bacterial recombinase, unusual in that its active form is an ordered helical filament of up to several thousand subunits assembled cooperatively on single-stranded DNA — one molecule does nothing, the homology search and strand invasion belong to the polymer. Single-strand binding protein blocks nucleation of the filament, and RecBCD itself acts as the loader that overcomes this. The same RecA is a component of the error-prone translesion polymerase.",
      def_cn: "细菌的重组酶，特别之处在于它的活性形式是一条在单链 DNA 上协同组装的、可达数千亚基的有序螺旋纤维 —— 单个分子毫无作用，同源性搜索和链侵入属于这条聚合物。单链结合蛋白会阻断纤维成核，而 RecBCD 自己充当装载器来克服它。同一个 RecA 也是那个易错的跨损伤聚合酶的组件。" },
    { en: "origin-independent restart", cn: "不依赖起点的复制重启",
      def_en: "How a replication fork is rebuilt after recombinational repair, since the normal fork-assembly machinery is built to act at the single origin and not in mid-chromosome. Combinations of PriA, PriB, PriC and DnaT work with DnaC to load the DnaB helicase onto the reconstructed fork, primase lays an RNA primer, and polymerase III reassembles. Keeping a whole dedicated system for this shows how common fork collapse is.",
      def_cn: "重组修复之后复制叉如何被重建 —— 因为常规的复制叉装配机器是为在唯一的起点上工作而造的，不能在染色体中段动手。PriA、PriB、PriC、DnaT 的不同组合与 DnaC 一起把 DnaB 解旋酶装到重建好的叉上，引物酶铺下 RNA 引物，聚合酶 III 重新组装。为此专门养一整套系统，说明复制叉塌陷有多常见。" },
    { en: "chiasma", cn: "交叉点",
      def_en: "The point where recombination has physically joined two homologous chromosomes during the first meiotic division, visible down a light microscope as crossing over. The links exist because chromosomes to be pulled apart must first be joined: spindle fibres pull, the resulting tension is the signal that the pair is aligned correctly. Sister chromatids get their links from cohesins; homologs have none, so recombination has to make them.",
      def_cn: "减数第一次分裂中重组把两条同源染色体在物理上连起来的位置，在光学显微镜下表现为交叉互换。这些连接之所以必须存在：将要被拉开的染色体必须先被连上 —— 纺锤丝拉扯，由此产生的张力才是「这一对已正确对齐」的信号。姐妹染色单体的连接来自黏连蛋白；同源染色体没有，所以只能由重组来制造。" },
    { en: "Rad51, Dmc1 and BRCA2", cn: "Rad51、Dmc1 与 BRCA2",
      def_en: "The eukaryotic counterparts of RecA. Rad51 and Dmc1 carry out strand invasion, and BRCA2 loads Rad51 onto DNA, doing the job the bacterial RecF/RecO/RecR set does. Inherited BRCA2 defects account for about 10% of breast and ovarian cancers: without efficient loading of the recombinase, the accurate route out of a break through both strands is impaired and damage accumulates.",
      def_cn: "RecA 的真核对应物。Rad51 与 Dmc1 执行链侵入，而 BRCA2 把 Rad51 装载到 DNA 上，干的是细菌 RecF/RecO/RecR 那一套的活。BRCA2 的遗传性缺陷占乳腺癌与卵巢癌的约 10%：重组酶装载不上去，走出双链断裂的那条精确路线就受损，损伤不断累积。" },
    { en: "aneuploidy and the dictyate stage", cn: "非整倍体与核网期",
      def_en: "Aneuploidy is having the wrong number of chromosomes, the consequence of incorrect or incomplete alignment and recombination in the first meiotic division. Rates rise with complexity — 1 in 10,000 meiotic events in yeast, 1 in 100 in mice, 10% to 30% of fertilised human eggs. It is the leading cause of pregnancy loss and the leading genetic cause of developmental disability. Human female meiosis starts in the fetus, makes its crossovers, then arrests in the dictyate stage for 13 to 50 years — which is why trisomy rates climb with age.",
      def_cn: "非整倍体即染色体数目不对，源自减数第一次分裂中对齐与重组不正确或不完整。比率随复杂度上升 —— 酵母每 10,000 次减数分裂 1 次，小鼠 1/100，人受精卵 10%–30%。它是妊娠丢失的首要原因，也是发育障碍的首要遗传原因。人类女性的减数分裂始于胎儿期，生成交叉后停在核网期长达 13–50 年 —— 这正是三体率随年龄上升的原因。" },
    { en: "PARP1 and olaparib", cn: "PARP1 与奥拉帕利",
      def_en: "PARP1 is a first responder that scans DNA for damage, especially breaks in one strand, and on finding one builds a branched polymer from NAD on itself and on nearby proteins — a flag that recruits repair proteins to the site. Without it, single-strand breaks accumulate and become double-strand breaks at the next replication. In a tumour that has already lost BRCA-dependent repair of double-strand breaks, removing PARP1 as well is lethal to the tumour and not to normal cells. Olaparib, approved 2014, gave a fourfold increase in progression-free survival.",
      def_cn: "PARP1 是一个第一响应者，在 DNA 上扫描损伤（尤其是单链断口），找到后就用 NAD 在自己和邻近蛋白上造出一团有分支的聚合物 —— 这是一面旗，把修复蛋白招募到该位点。没有它，单链断口累积，并在下一次复制时变成双链断裂。对于已经失去 BRCA 依赖性双链断裂修复的肿瘤，再拿掉 PARP1 就是致命的，而正常细胞无恙。奥拉帕利于 2014 年获批，使无进展生存期提高四倍。" },
    { en: "nonhomologous end joining", cn: "非同源末端连接",
      def_en: "The fallback for a break through both strands when no sister chromatid exists to copy from. The two ends are trimmed and ligated straight back together, which does not conserve the original sequence and is frankly mutagenic. Ku70-Ku80 binds the ends as a scaffold and recruits DNA-PKcs and the nuclease Artemis; phosphorylated Artemis trims overhangs and hairpins, strands from the two ends anneal at chance short complementary patches, polymerase mu or lambda fills, and XRCC4-XLF-ligase IV seals. It handles most double-strand break repair outside meiosis in mammals.",
      def_cn: "当没有姐妹染色单体可抄时，处理贯穿两条链断裂的退路。把两个断端修剪后直接连回去 —— 这不保留原序列，坦白说就是致突变的。Ku70–Ku80 结合断端充当支架，招募 DNA-PKcs 和核酸酶 Artemis；磷酸化的 Artemis 修剪突出端与发夹，两个断端的链在偶然互补的短片段处退火，聚合酶 μ 或 λ 填补，XRCC4–XLF–连接酶 IV 封口。在哺乳动物中，减数分裂之外的双链断裂修复大多由它承担。" },
    { en: "site-specific recombination", cn: "位点特异性重组",
      def_en: "Recombination limited to one short defined sequence. A system needs only a recombinase and a recombination site of 20 to 200 bp. Tyrosine-class enzymes cut one strand per site and hold the end as a covalent phosphotyrosine bond, which preserves the broken phosphodiester bond's energy so no ATP is needed downstream. The exchange is reciprocal and precise, and the sites are regenerated intact — a recombinase is a site-specific endonuclease and a ligase in one package.",
      def_cn: "只在一段短而确定的序列上发生的重组。一套系统只需要一个重组酶和一段 20–200 bp 的重组位点。酪氨酸类的酶在每个位点切开一条链，并把断端以共价磷酸酪氨酸键挂在自己身上，从而保存被切断的磷酸二酯键的能量，后续步骤无需 ATP。交换是互易而精确的，位点在反应结束时被完好重生 —— 一个重组酶就是「位点特异性内切酶 + 连接酶」的合体。" },
    { en: "inversion, deletion, insertion and XerCD", cn: "倒转、删除、插入与 XerCD",
      def_en: "Recombination sites are nonpalindromic and therefore oriented, and the outcome of site-specific recombination follows from geometry alone. Two sites on one DNA pointing opposite ways invert the DNA between them; pointing the same way, they delete it. Sites on different molecules exchange between them, giving an insertion if one is circular — how a phage integrates. E. coli's XerCD uses the deletion reaction to convert the dimeric chromosomes sometimes left by recombinational repair back into monomers, without which the dividing cell gets stuck.",
      def_cn: "重组位点不是回文序列，因而有方向；位点特异性重组的结果完全由几何决定。同一条 DNA 上方向相反的两个位点把中间的 DNA 倒转；方向相同则把它删除。位于不同分子上的位点在两者之间交换，若其中一个是环状的就得到插入 —— 噬菌体整合正是如此。大肠杆菌的 XerCD 利用删除反应，把重组修复有时留下的二聚体染色体变回单体；没有它，分裂中的细胞会卡住。" },
    { en: "transposon", cn: "转座子",
      def_en: "A segment of DNA that jumps from a donor site to a target site without needing similar sequence, landing more or less at random — perhaps the simplest of molecular parasites. Insertion sequences carry only the terminal sequences and the transposase gene; complex transposons carry extra genes, and antibiotic-resistance spread is largely transposon-mediated. Insertion duplicates 5 to 10 bp of the target, leaving a short direct repeat each side — a signature of the staggered cut. Nearly half the human genome is transposable elements.",
      def_cn: "从供体位点跳到靶位点的一段 DNA，不需要序列相似，落点大体随机 —— 大概是最简单的分子寄生物。插入序列只带两端序列和转座酶基因；复杂转座子另带别的基因，抗生素抗性的扩散很大程度上由转座介导。插入会把靶序列上 5–10 bp 复制一份，在两侧各留下一段短正向重复 —— 这是错位切割留下的签名。人类基因组中将近一半是可转座元件。" },
    { en: "V(D)J rearrangement", cn: "V(D)J 重排",
      def_en: "The programmed recombination that assembles immunoglobulin genes, letting about 20,000 human genes yield millions of antibodies. The IgG kappa light chain is encoded as 40 V segments, 5 J segments and 1 C segment; as a bone-marrow stem cell becomes a B lymphocyte, one V is joined to one J and the DNA between is deleted, giving 200 combinations, raised to about 500 because the junction is deliberately imprecise. Heavy chains give over 5,000, so at least 2.5 million IgGs. RAG1 and RAG2 cut at recombination signal sequences using the chemistry of transposition, and the ends are joined by nonhomologous end joining.",
      def_cn: "组装免疫球蛋白基因的编排式重组，使约 20,000 个人类基因产出数百万种抗体。IgG 的 κ 轻链由 40 个 V 片段、5 个 J 片段和 1 个 C 片段编码；骨髓干细胞分化为 B 淋巴细胞时，一个 V 与一个 J 相接、中间的 DNA 被删除，得到 200 种组合；由于接口刻意不精确，提高到约 500 种。重链给出 5,000 种以上，故至少 250 万种 IgG。RAG1 与 RAG2 在重组信号序列处切割，用的是转座的化学，两端由非同源末端连接接起来。" }
  ]
};

/* ------------------------------------------------------------------ 23.2 */
window.BIOLITE_SPINE["L-23-2-1"] = {
  assumed: ["atp", "adp", "nadph", "glucose", "glycogen", "glycolysis",
            "gluconeogenesis", "citric acid cycle", "oxidative phosphorylation",
            "acetyl-coa", "pyruvate", "lactate", "fatty acid", "triacylglycerol",
            "phospholipid", "cholesterol", "amino acid", "protein", "enzyme",
            "isozyme", "km", "allosteric", "transamination", "deamination",
            "urea", "ammonia", "mitochondrion", "plasma membrane", "cytosol",
            "hormone", "insulin", "glucagon", "epinephrine", "camp",
            "phosphorylation", "cell", "blood", "liver", "hepatocyte", "muscle",
            "brain", "neuron", "heart", "kidney", "lung", "adipose tissue",
            "adipocyte", "lipase", "lipoprotein", "chylomicron", "glut2",
            "hexokinase", "pentose phosphate pathway", "ribose 5-phosphate",
            "glucose 6-phosphate", "pyruvate dehydrogenase", "atp synthase",
            "electron transfer", "proton gradient", "nmr", "pet",
            "cori cycle", "blood-brain barrier", "erythrocyte", "hemoglobin",
            "action potential", "atherosclerosis", "glycine", "arginine",
            "methionine", "creatine"],
  nodeTitle_en: "Tissue-specific metabolism",
  nodeTitle_cn: "组织特异性代谢",
  title_en: "The same pathways, run at different settings by different organs — with the liver deciding and the brain fed first",
  title_cn: "同样的通路，被不同器官开在不同的档位上 —— 由肝脏做决定，而大脑优先吃饱",
  steps: [
    {
      en: "Metabolism is usually organised by pathway and by regulation. **A third axis is which organ, and it is the one an oral question lands on: what is your brain running on right now, and why do a sprinter's legs and a marathon runner's legs burn different fuel?** Each tissue has a specialised job — muscle moves things, adipose tissue stores and insulates, neurons pump ions to make electrical signals, and the liver processes what arrives and distributes it to everyone else. **The clearest evidence of the liver's centrality is a piece of vocabulary: every other tissue and organ in the body is collectively called extrahepatic, which means outside the liver. An entire body is named by not being one organ.** **The portal vein runs straight from the digestive organs to the liver, so the liver has first access to everything absorbed from a meal — every other organ downstream receives what the liver has decided to release.** The second piece is a split at the intestine. **Most sugars and amino acids, and some rebuilt triacylglycerols, travel by blood capillaries to the liver; the remaining triacylglycerols go to adipose tissue by way of the lymphatic system instead, bypassing the liver altogether.** Fat and sugar do not even take the same road out of the gut.",
      cn: "代谢通常按**通路**和**调控**两条轴来讲。**第三条轴是「哪个器官」——而口试的问题恰恰落在这条轴上：你的大脑此刻在烧什么？为什么短跑运动员的腿和马拉松运动员的腿烧的是不同的燃料？**每种组织各有专职 —— 肌肉负责运动，脂肪组织负责储存和保温，神经元靠泵离子产生电信号，而肝脏负责加工送来的东西并分配给其他所有人。**肝脏居于中心地位，最清楚的证据是一个词：身体里其余所有组织和器官被统称为「肝外的（extrahepatic）」，意思就是「肝脏以外的」。整个身体是用「不是那一个器官」来命名的。** **门静脉（portal vein）从消化器官直通肝脏，所以肝脏对一餐里吸收的一切拥有优先取用权 —— 下游的每一个器官拿到的，都是肝脏决定放出来的那一份。**第二处结构是在肠道那里的分流。**大部分糖和氨基酸、以及一部分重新组装好的三酰甘油，经血液毛细血管去肝脏；剩下的三酰甘油则改走淋巴系统去脂肪组织，完全绕过肝脏。**脂肪和糖，连出肠道的路都不是同一条。",
      src: "A p.848"
    },
    {
      link_en: "an organ that decides for everyone else has to be able to change its mind, and that is a measurable quantity",
      link_cn: "一个替所有人做决定的器官，必须能改主意 —— 而这是一个可以量出来的量",
      en: "What arrives at the liver depends on the diet and on how long ago you ate; what the rest of the body wants depends on which organ, doing what, in what nutritional state. **The liver's answer is to rebuild its own enzyme complement. On a protein-rich diet, hepatocytes make more of the enzymes that break amino acids down — amino acid catabolism — and more of the enzymes of gluconeogenesis. Within hours of a switch to a diet high in carbohydrate — sugars and starch — those fall, and the same cells raise their output of the enzymes of carbohydrate metabolism and of fat synthesis.** Underneath is one structural fact: **liver enzymes are made and destroyed at 5 to 10 times the turnover rate of enzymes in a tissue such as muscle.** Other tissues adjust too, but none is this adaptable — an organ that can rebuild its catalytic machinery several times faster than anything else can afford to be the organ that changes its mind.",
      cn: "送到肝脏的是什么，取决于饮食和距上一餐多久；身体其余部分想要什么，取决于是哪个器官、在做什么、处于什么营养状态。**肝脏的应对方式是把自己的酶配置重建一遍。高蛋白饮食时，肝细胞多造氨基酸分解代谢和糖异生的酶；一旦换成高碳水饮食，几小时之内这些酶的水平就开始下降，同一批细胞转而多造糖代谢和脂肪合成的酶。**底下垫着一个结构事实：**肝脏酶的合成与降解速率，是肌肉之类组织中酶周转速率的 5–10 倍。**别的组织也会调整，但没有一个有这样的适应力 —— 一个能把自己的催化机器重建得比谁都快好几倍的器官，才有资格当那个「改主意」的器官。",
      src: "A p.849"
    },
    {
      link_en: "so how does the liver decide whether to take a glucose molecule or leave it? One enzyme's affinity",
      link_cn: "那么肝脏怎么决定一个葡萄糖分子是拿走还是放过？靠一个酶的亲和力",
      en: "**The hepatocyte's glucose transporter, GLUT2, lets glucose diffuse in and out freely, so the glucose concentration inside a liver cell is essentially the blood concentration. The liver does not control uptake at the door; it controls it at the first enzyme.** That enzyme is glucokinase, also called hexokinase IV, and it differs from the hexokinases of other tissues in exactly two ways. **Its Km for glucose is 10 mM, far above the low-Km isozymes elsewhere, and it is not inhibited by its own product, glucose 6-phosphate.** Read off both consequences. **A high Km means it is nowhere near saturated at ordinary concentrations, so when blood glucose rises after a meal the liver keeps phosphorylating instead of maxing out — it can mop up. No product inhibition means it does not stop just when glucose 6-phosphate is accumulating, which is exactly when the liver is supposed to be storing.** And the high Km cuts the other way, which is the part to say out loud: **when blood glucose is low the liver barely phosphorylates any, so it does not burn the sugar in glycolysis. That spares glucose for other tissues.** One enzyme's affinity constant is the reason the brain is fed before the liver is.",
      cn: "**肝细胞的葡萄糖转运体 GLUT2 让葡萄糖自由进出，所以肝细胞内的葡萄糖浓度基本上就等于血糖浓度。肝脏不在门口控制摄取，它在第一个酶那里控制。**这个酶叫**葡萄糖激酶（glucokinase）**，也叫己糖激酶 IV，它与其他组织的己糖激酶只差两点。**它对葡萄糖的 Km 是 10 mM，远高于别处那些低 Km 的同工酶；而且它不被自己的产物葡萄糖-6-磷酸抑制。**两个后果都要读出来。**Km 高，意味着在通常浓度下它离饱和还远得很，所以饭后血糖升高时肝脏能一直磷酸化下去而不至于「顶到头」—— 它兜得住一顿饭。没有产物抑制，意味着它不会恰好在葡萄糖-6-磷酸开始堆积时停手 —— 而那正是肝脏本该储存的时刻。**而高 Km 还有反向的一面，这一面要在考试里说出声：**血糖低时，肝脏几乎不去磷酸化葡萄糖，也就不会把糖拿去糖酵解烧掉。这就把葡萄糖省给了别的组织。**一个酶的亲和力常数，就是「大脑先于肝脏吃饱」的原因。",
      src: "A p.849"
    },
    {
      link_en: "once phosphorylated, that glucose is at a junction with five exits, and choosing among them is the liver's whole job",
      link_cn: "一旦被磷酸化，这个葡萄糖就站在一个五岔路口上 —— 而在五条路里做选择，就是肝脏的全部工作",
      en: "Glucose 6-phosphate sits at the crossroads of carbohydrate metabolism in the liver, and the priority order matters more than the list. **First, export: a phosphatase strips the phosphate off and free glucose leaves for the blood. This is the predominant route when glucose 6-phosphate is scarce, because blood glucose has to be held around 4 to 5 mM to supply the brain — the liver's first obligation is not to itself.** Second, storage as liver glycogen. **Third, oxidation through glycolysis to acetyl-CoA — but note the counterintuitive part: the preferred fuel for making ATP in a hepatocyte is fatty acids, so the liver largely does not burn the sugar it is handling.** Fourth, that acetyl-CoA also builds fatty acids, triacylglycerols, phospholipids and cholesterol, much of which is shipped out to other tissues as blood lipoproteins. **Fifth, the pentose phosphate pathway, giving NADPH for those syntheses and ribose 5-phosphate for nucleotides — and the same NADPH is what the liver uses to detoxify drugs, food additives and preservatives, compounds that do not occur naturally and are called xenobiotics.**",
      cn: "葡萄糖-6-磷酸位于肝脏糖代谢的十字路口上，而**优先顺序**比这份清单本身更重要。**第一条，输出：一个磷酸酶把磷酸切掉，游离葡萄糖离开、进入血液。在葡萄糖-6-磷酸供应有限时，这是占主导的那条路 —— 因为血糖必须维持在 4–5 mM 左右来供养大脑。肝脏的第一义务不是对自己。**第二条，存成肝糖原。**第三条，经糖酵解氧化成乙酰辅酶 A —— 但注意这里反直觉的地方：肝细胞制造 ATP 的首选燃料是脂肪酸，所以肝脏基本上并不烧它经手的那些糖。**第四条，这些乙酰辅酶 A 也用来造脂肪酸、三酰甘油、磷脂和胆固醇，其中很大一部分作为血浆脂蛋白运给别的组织。**第五条，磷酸戊糖途径，给出上述合成所需的 NADPH，以及供核苷酸合成用的核糖-5-磷酸 —— 而同样这份 NADPH，正是肝脏用来解毒药物、食品添加剂和防腐剂的东西；这些自然界本不存在、由人类活动造出来的化合物叫外源性物质（xenobiotics）。**",
      src: "A p.849–850, Fig. 23-10"
    },
    {
      link_en: "amino acids arriving at the liver set up a second traffic between organs",
      link_cn: "抵达肝脏的氨基酸，建立起器官之间的第二条交通线",
      en: "Amino acids reaching the liver are used for protein synthesis — the liver makes most of the plasma proteins — passed on to other organs, or turned into nucleotides and hormones. **What is left over is transaminated or deaminated to pyruvate and citric acid cycle intermediates, the ammonia released becomes urea for excretion, and the carbon goes to glucose by gluconeogenesis or to acetyl-CoA.** Out of that comes an inter-organ cycle worth naming. **In the interval between meals some muscle protein is degraded; the amino groups are handed by transamination onto pyruvate, making alanine; alanine travels to the liver, which strips the nitrogen off into urea and turns the pyruvate back into blood glucose. That is the glucose-alanine cycle, and it smooths out the swings in blood glucose between meals.** It is the nitrogen-carrying twin of the lactate route: **muscle sends the liver carbon as lactate and carbon-plus-nitrogen as alanine, and gets glucose back both times — but only the alanine route also solves muscle's ammonia problem, because muscle cannot make urea.**",
      cn: "到达肝脏的氨基酸有几个去处：用于蛋白质合成 —— **大多数血浆蛋白就是肝脏造的** —— 转送给其他器官，或作为核苷酸与激素的前体。**用不掉的那些被转氨或脱氨，变成丙酮酸和柠檬酸循环中间物；放出的氨变成尿素排掉；碳骨架则经糖异生变成葡萄糖，或者变成乙酰辅酶 A。**由此形成了一条值得命名的器官间循环。**两餐之间，一部分肌肉蛋白被降解；氨基通过转氨作用交给丙酮酸，生成丙氨酸（alanine）；丙氨酸前往肝脏，肝脏把氮摘下来做成尿素，把丙酮酸变回血糖。这就是葡萄糖–丙氨酸循环，它把两餐之间的血糖波动抹平。**它是乳酸那条路线的「带氮版孪生兄弟」：**肌肉把碳以乳酸的形式送给肝脏，把碳加氮以丙氨酸的形式送给肝脏，两次都换回葡萄糖 —— 但只有丙氨酸这条路同时解决了肌肉的排氨问题，因为肌肉自己不能合成尿素。**",
      src: "A p.850, Fig. 23-11"
    },
    {
      link_en: "and the liver exports one more fuel, which is usually met only as a disease",
      link_cn: "肝脏还输出另一种燃料 —— 而这种燃料通常只在讲疾病时被提到",
      en: "Fatty acids are the liver's own main oxidative fuel most of the time. **Acetyl-CoA the liver does not need is converted to acetoacetate and beta-hydroxybutyrate — ketone bodies — which circulate to other tissues and are burned there in the citric acid cycle.** The property that makes the whole arrangement worth building: **fatty acids cannot cross the blood-brain barrier and ketone bodies can, so fat converted into a small water-soluble acid reaches a brain that fat itself never could.** The quantities show this is a designed route rather than an overflow: **ketone bodies supply up to a third of the heart's energy, and 60 to 70% of the brain's during prolonged fasting.** Hold both framings at once. **The same molecules are a normal, quantitatively major fuel travelling between organs, and, when nothing restrains the flow that makes them, an acid load large enough to kill.**",
      cn: "多数时候，脂肪酸就是肝脏自己的主要氧化燃料。**肝脏用不掉的乙酰辅酶 A 被转成乙酰乙酸和 β-羟丁酸 —— 也就是酮体（ketone bodies）—— 它们随血液前往其他组织，在那里进入柠檬酸循环被烧掉。**这套安排之所以值得建立，靠的是一个性质：**脂肪酸过不了血脑屏障，而酮体过得去 —— 于是脂肪一旦被转换成小分子水溶性酸，就能到达它本身永远到不了的大脑。**数量说明这是一条**被设计出来的路线**，而不是溢流：**酮体可以供应心脏多达三分之一的能量，在长时间禁食时供应大脑能量的 60–70%。**两种理解要同时握住：**同样这些分子，既是器官之间一种正常的、数量上占主导的燃料；而当制造它们的那股流量失去约束时，它们又是一份足以致命的酸负荷。**",
      src: "A p.850–851, Fig. 23-12"
    },
    {
      link_en: "the tissue that stores what the liver makes, in numbers",
      link_cn: "储存肝脏所造之物的那个组织，用数字说话",
      en: "**A white adipocyte is a large sphere 30 to 70 micrometres across, filled by a single lipid droplet that is about 65% of the cell's mass and squashes the nucleus and mitochondria into a thin layer against the plasma membrane.** The droplet holds triacylglycerols and sterol esters and is wrapped in a phospholipid **monolayer** rather than a bilayer, since one face of it is lipid already, with the polar head groups facing the cytosol. White adipose tissue is about 15% of the mass of a healthy young adult. **One common assumption needs correcting: adipose tissue can make fatty acids from glucose, but in humans much of the fatty acid synthesis happens in hepatocytes — the liver largely makes the fat and adipose largely stores it**, receiving it as very-low-density lipoproteins from the liver and as chylomicrons from the gut.",
      cn: "**一个白色脂肪细胞是直径 30–70 微米的大球，被一个单一的脂滴（lipid droplet）填满 —— 这个脂滴约占细胞质量的 65%，把细胞核和线粒体挤成贴着质膜的薄薄一层。**脂滴里装的是三酰甘油和固醇酯，外面裹着一层磷脂**单层**而不是双层（因为它朝内的那一面本来就是脂），极性头基朝向细胞质。白色脂肪组织约占一个健康年轻成人体重的 **15%**。**有一个常见的想当然需要纠正：脂肪组织确实能由葡萄糖合成脂肪酸，但在人体内，很大一部分脂肪酸合成发生在肝细胞里 —— 肝脏主要负责造脂肪，脂肪组织主要负责存脂肪**，脂肪以极低密度脂蛋白的形式从肝脏来，以乳糜微粒的形式从肠道来。",
      src: "A p.851, Fig. 23-13"
    },
    {
      link_en: "getting fat back out is not a tap being opened, it is a gate being unlocked",
      link_cn: "把脂肪放出来，不是拧开一个龙头，而是打开一道门",
      en: "When fuel demand rises, lipases inside the adipocyte hydrolyse the stored triacylglycerols and the free fatty acids travel to skeletal muscle, the heart, and in starvation the liver. **But the droplet is coated with a protein called perilipin, which physically denies the lipases access to what is inside. Epinephrine triggers the cAMP-dependent phosphorylation of perilipin, and that is what opens the door; hormone-sensitive lipase is separately switched on by phosphorylation as well. Insulin counterbalances epinephrine: lipase activity falls.** So the body's whole fat store is locked or unlocked by two hormones acting on a coat protein.",
      cn: "燃料需求上升时，脂肪细胞内的脂肪酶把储存的三酰甘油水解掉，游离脂肪酸前往骨骼肌、心脏，在饥饿时还前往肝脏。**但脂滴表面裹着一个叫**周脂素（perilipin）**的蛋白，它在物理上不让脂肪酶碰到里面的东西。肾上腺素触发周脂素的 cAMP 依赖性磷酸化，而这一步才是把门打开的动作；激素敏感脂肪酶（hormone-sensitive lipase）也另外被磷酸化激活。胰岛素与肾上腺素反向抵消，降低脂肪酶活性。**于是全身的脂肪库，是由两种激素作用在一个「外壳蛋白」上来上锁和开锁的。",
      src: "A p.851–852"
    },
    {
      link_en: "two things about adipose tissue look like design faults and are not",
      link_cn: "脂肪组织有两件事看着像设计缺陷，其实不是",
      en: "**First, up to 70% of the fatty acids the lipases release are re-esterified inside the same cell, rebuilding the triacylglycerols that were just taken apart. Each turn costs ATP, because the fatty acids have to be re-activated, so the net output is heat.** Calling that futile misses the point: **a cycle already running at 70% gives the tissue a large standing flux that can be redirected instantly by shifting the balance a few per cent either way, and the ATP is the price of that responsiveness.** Second, and the better exam answer: **the glycerol backbone released by the adipocyte's own lipases cannot be reused, because adipocytes have no glycerol kinase and so cannot phosphorylate free glycerol. The glycerol phosphate needed to rebuild a triacylglycerol is therefore made from pyruvate instead, by a route called glyceroneogenesis that uses cytosolic PEP carboxykinase** — a gluconeogenic enzyme doing a job that has nothing to do with making glucose. One absent enzyme dictates an entire detour.",
      cn: "**第一件：脂肪酶释放出来的脂肪酸，多达 70% 会在同一个细胞里被重新酯化回去，把刚拆开的三酰甘油又装回来。每转一圈都要花 ATP，因为脂肪酸必须重新活化 —— 所以净产出是热。**把这叫「无效循环」是没看懂重点：**一个已经开在 70% 的循环，等于给这个组织一股随时待命的大流量；只要把平衡往任一边挪动几个百分点，流向就立刻改变 —— ATP 买的就是这份反应速度。**第二件，也是更好的考试答案：**脂肪细胞自己的脂肪酶释放出来的甘油骨架无法再利用，因为脂肪细胞没有甘油激酶（glycerol kinase），没法给游离甘油加磷酸。于是重建三酰甘油所需的甘油磷酸改由丙酮酸来造，走的是一条叫甘油异生（glyceroneogenesis）的路线，用的是胞质型 PEP 羧激酶** —— 一个糖异生的酶，干着一件与造葡萄糖毫无关系的活。少一个酶，就规定了一整条绕路。",
      src: "A p.852"
    },
    {
      link_en: "and one kind of fat tissue makes that heat on purpose",
      link_cn: "而有一种脂肪组织，是专门为了产热而存在的",
      en: "**Brown adipocytes are smaller and polygonal, store their fat in several small droplets rather than one, and carry far more mitochondria and a richer blood supply — and it is the cytochromes of those mitochondria plus the haemoglobin of the capillaries that make the tissue brown.** The mechanism is one protein. **Uncoupling protein 1, also called thermogenin, gives protons a route back into the mitochondrial matrix that bypasses ATP synthase, so the energy of the gradient comes out as heat.** Say it precisely: electron transfer still runs, arguably faster because the gradient never builds up to oppose it, but nothing is phosphorylated. **A newborn carries 1 to 5% of its body mass as brown fat, deposited exactly where the heat protects what matters — over the vessels to the head, the major abdominal vessels, and the pancreas, adrenals and kidneys — because a newborn cannot shiver effectively.** An adult keeps almost none, under 0.1% of body mass. **But cold exposure or beta-adrenergic stimulation converts white adipocytes sitting nearby into beige adipocytes, which have multiple droplets, are mitochondria-rich, and make uncoupling protein 1** — and a peptide hormone released by exercising muscle, irisin, triggers the same conversion, so the fuel keeps burning long after the exercise stops.",
      cn: "**棕色脂肪细胞更小、呈多边形，脂肪存成好几个小脂滴而不是一个大的，线粒体多得多、血供也丰富得多 —— 而使这个组织呈棕色的，正是这些线粒体里的细胞色素加上毛细血管里的血红蛋白。**机制就是一个蛋白。**解偶联蛋白 1（uncoupling protein 1，又叫产热素 thermogenin）给质子提供了一条绕开 ATP 合酶、回到线粒体基质的通路，于是质子梯度的能量以热的形式出来。**要说得精确：**电子传递照常进行**，甚至可以说更快，因为梯度从来没机会建立起来去对抗它 —— 只是什么都没有被磷酸化。**新生儿身上有 1–5% 的体重是棕色脂肪，而且正好沉积在「热能保护要害」的位置 —— 通向头部的血管、腹部大血管，以及胰腺、肾上腺和肾脏周围 —— 因为新生儿还不能有效地发抖产热。**成年人几乎不剩，不到体重的 0.1%。**但受冷或 β-肾上腺素能刺激，会把旁边的白色脂肪细胞转变成米色脂肪细胞（beige adipocytes）：多个脂滴、富含线粒体、并且制造解偶联蛋白 1** —— 而运动中的肌肉释放的一种肽激素**鸢尾素（irisin）**也能触发同样的转变，于是运动结束很久之后，燃料还在继续烧。",
      src: "A p.852–853, Fig. 23-14"
    },
    {
      link_en: "muscle is really two tissues, and it burns a different fuel at every intensity",
      link_cn: "肌肉其实是两种组织，而且每一个强度档位烧的燃料都不一样",
      en: "**Slow-twitch or red muscle gives relatively low tension but resists fatigue, making its ATP by oxidative phosphorylation; it is packed with mitochondria and densely supplied with blood vessels to bring the oxygen. Fast-twitch or white muscle has fewer mitochondria and less blood supply but develops more tension and develops it faster, and it tires sooner because it spends ATP faster than it can replace it.** Now the fuel ladder, which is the part to be able to recite. **At rest, muscle burns free fatty acids from adipose tissue. In light activity it adds blood glucose. At maximum, blood flow simply cannot deliver oxygen fast enough, so the muscle breaks its own stored glycogen down to lactate by fermentation** — which responds faster to a sudden demand than oxidative phosphorylation can. **And the detail worth the mark: each glucose unit taken from glycogen yields three ATP rather than two, because phosphorolysis releases glucose 1-phosphate directly and so spares the ATP that the hexokinase step would have cost.** Two honest limits: muscle glycogen is only about 1% of the tissue's weight, and accumulating lactate lowers pH and makes the muscle less efficient. Afterwards the heavy breathing supplies extra oxygen for oxidative phosphorylation **in the liver**, whose ATP drives gluconeogenesis from the lactate that travelled there — the glucose returns to the muscle, completing the Cori cycle.",
      cn: "**慢肌（slow-twitch）也叫红肌，产生的张力相对较小但极耐疲劳，靠氧化磷酸化制造 ATP；它线粒体密集、血管丰富，好把氧送进来。快肌（fast-twitch）也叫白肌，线粒体较少、血供也差，但能产生更大的张力、而且更快产生；它更早疲劳，因为它花 ATP 比补 ATP 快。**接下来是**燃料阶梯**，这是必须能背下来的部分。**静息时，肌肉烧的是脂肪组织送来的游离脂肪酸。轻度活动时，再加上血糖。全力活动时，血流根本来不及把氧送到，于是肌肉把自己储存的糖原发酵分解成乳酸** —— 发酵对突然出现的需求响应得比氧化磷酸化快，这才是用它的理由。**还有一个能拿分的细节：从糖原上取下的每一个葡萄糖单位产出的是三个 ATP 而不是两个，因为磷酸解直接放出葡萄糖-1-磷酸，省下了己糖激酶那一步本该花掉的 ATP。**两个必须如实说明的限制：肌糖原只占肌肉重量约 **1%**；而乳酸堆积会降低 pH、使肌肉效率下降。事后的大口喘气，供的是**肝脏**里氧化磷酸化所需的额外氧气；肝脏用这些 ATP 驱动糖异生，把随血液送来的乳酸变回葡萄糖，葡萄糖再回到肌肉 —— **Cori 循环**就此闭合。",
      src: "A p.853–855, Fig. 23-15, Fig. 23-17"
    },
    {
      link_en: "muscle also holds a third energy currency, and it turns into a blood test",
      link_cn: "肌肉还持有第三种能量货币 —— 而它最后变成了一项血液检查",
      en: "**Phosphocreatine sits in muscle at 10 to 30 mM, three to five times the ATP concentration at rest, and creatine kinase uses it to regenerate ATP from ADP the instant contraction starts; during recovery the same enzyme runs the reaction backwards and refills the store.** The evidence is unusually direct: **phosphorus NMR of an exercising limb shows the ATP signal barely moving throughout, while the phosphocreatine signal falls and then refills. That is exactly what a buffer looks like — the buffered species stays constant and the reservoir absorbs the change.** The clinical payoffs are three. **Heart muscle has its own creatine kinase isozyme, Mb, which is absent from blood normally and appears there when a heart attack damages the myocardium: it rises within 2 hours, peaks 12 to 36 hours after the event, and returns to normal in 3 to 5 days, so one measurement both confirms the diagnosis and dates it.** Second, creatine and phosphocreatine break down spontaneously to creatinine, which healthy kidneys clear, so a blood creatinine above the normal 0.8 to 1.4 mg/dL indicates impaired kidney function. **Third, a supplement finding worth repeating accurately: taking dietary creatine into muscle efficiently requires continuous exercise, and without exercise creatine supplementation is of little value.** Plants contain no creatine, so a vegan's only source is synthesis from glycine, arginine and methionine.",
      cn: "**磷酸肌酸（phosphocreatine）在肌肉里的浓度是 10–30 mM，静息时是 ATP 浓度的三到五倍；收缩一开始，肌酸激酶（creatine kinase）就用它把 ADP 变回 ATP；恢复期同一个酶把反应倒着跑，把这个储备重新填满。**证据异常直接：**对正在运动的肢体做磷 NMR，全程 ATP 的信号几乎不动，而磷酸肌酸的信号先下降、恢复时再回升。这正是一个缓冲体系该有的样子 —— 被缓冲的那一方保持恒定，储库吸收全部变化。**临床上的回报有三项。**心肌有自己的肌酸激酶同工酶 Mb，正常时不出现在血液里；心肌梗死损伤心肌时它被释放出来：2 小时内升高，事件发生后 12–36 小时达峰，3–5 天回到正常 —— 所以一次测量既能确诊，又能给事件定时间。**第二，肌酸和磷酸肌酸会自发降解成**肌酐（creatinine）**，健康的肾脏把它清除掉；所以血肌酐高于正常的 0.8–1.4 mg/dL，提示肾功能受损。**第三，一条关于补剂的结论值得原样转述：要让膳食肌酸高效地进入肌肉，必须有持续的运动；没有运动，补肌酸意义不大。**植物不含肌酸，所以纯素食者的唯一来源是由甘氨酸、精氨酸和甲硫氨酸从头合成。",
      src: "A p.854–857, Fig. 23-16, Box 23-1"
    },
    {
      link_en: "heart muscle is built the opposite way from skeletal muscle, and its commonest catastrophe follows from that",
      link_cn: "心肌的构造与骨骼肌正相反 —— 而它最常见的灾难正由此推出",
      recall_en: "skeletal muscle works in bursts and can go anaerobic when pushed",
      recall_cn: "骨骼肌是间歇工作的，被逼急了可以转无氧",
      en: "**Heart muscle contracts continuously in a regular rhythm and its metabolism is completely aerobic at all times. Mitochondria make up almost half the volume of its cells. It burns mainly free fatty acids, plus some glucose and ketone bodies taken from the blood, all oxidised aerobically. And it holds almost nothing in reserve: no large stores of lipid or glycogen, and enough phosphocreatine for a few seconds of contraction.** Put those together and the pathology is a deduction rather than a separate fact. **An organ that is obligately aerobic, carries seconds of reserve, and cannot switch to fermentation has no way to survive an interruption of its oxygen supply — so when a vessel is blocked by lipid deposits or a clot, the muscle downstream dies. That is a myocardial infarction**, and the Mb isozyme that shows up in blood afterwards is released by exactly this cell death. **What the design is sustaining makes it intelligible: steady aerobic metabolism lets a human heart pump nearly 6 litres a minute, about 350 litres an hour, on the order of 200 million litres over 70 years.**",
      cn: "**心肌以规律的节奏连续收缩，其代谢在任何时候都是完全需氧的。线粒体占据了心肌细胞将近一半的体积。它主要烧游离脂肪酸，外加从血里取来的一些葡萄糖和酮体，全部需氧氧化。而它几乎不留任何储备：没有大量的脂质或糖原储存，磷酸肌酸也只够收缩几秒钟。**把这几条放在一起，那个病理就成了一个**推论**，而不是另外一条要背的事实。**一个强制需氧、只带着几秒钟储备、又无法切换到发酵的器官，根本没有办法熬过供氧中断 —— 所以当血管被脂质沉积或血栓堵住时，下游的心肌就死掉。这就是心肌梗死**；而事后出现在血里的 Mb 同工酶，正是由这场细胞死亡释放出来的。**看看这套设计在支撑什么，就明白它为何如此：稳定的需氧代谢让人的心脏每分钟泵出将近 6 升血，每小时约 350 升，70 年下来在 2 亿升的量级上。**",
      src: "A p.855, Fig. 23-18"
    },
    {
      link_en: "and the organ all of this has been feeding",
      link_cn: "以上这一切一直在供养的那个器官",
      en: "**Neurons of the adult mammalian brain normally use only glucose as fuel; astrocytes, the other major brain cell type, can oxidise fatty acids. The brain is about 2% of body mass and accounts for almost 20% of the body's resting oxygen consumption, with over 90% of neuronal ATP coming from oxidative phosphorylation. It keeps very little glycogen, so it depends on incoming blood glucose continuously.** What that enormous ATP bill is spent on is a single pump: **the electrogenic Na+/K+ ATPase, which moves two K+ in and three Na+ out per cycle — electrogenic exactly because those numbers differ, so net charge is moved every turn.** The membrane potential it maintains is what an action potential discharges as it sweeps along the neuron. **The contingency plan is where the ketone bodies pay off. Neurons cannot use fatty acids from the blood at all, but they can get up to 60% of their energy from oxidising beta-hydroxybutyrate — which matters in prolonged fasting, after liver glycogen is gone, because it lets the brain run on body fat that it could otherwise never touch. That spares muscle protein**, until severe starvation makes muscle the brain's last source of glucose by way of gluconeogenesis. **The order of sacrifice is glycogen, then fat as ketone bodies, then the body's own muscle.**",
      cn: "**成年哺乳动物脑中的神经元通常只用葡萄糖作燃料；脑中另一大类细胞星形胶质细胞（astrocytes）则能氧化脂肪酸。大脑约占体重的 2%，却占去全身静息耗氧量的将近 20%，神经元 ATP 的 90% 以上来自氧化磷酸化。它几乎不存糖原，所以持续依赖血液送来的葡萄糖。**这笔巨额 ATP 账单花在了**一个泵**上：**生电性的 Na⁺/K⁺-ATP 酶，每个循环把两个 K⁺ 泵进来、三个 Na⁺ 泵出去 —— 它之所以「生电」，恰恰因为这两个数不相等，每转一圈就净搬走一份电荷。**它维持的跨膜电位，正是动作电位沿神经元扫过时所释放掉的东西。**而应急方案，就是酮体兑现的地方。神经元完全不能利用血中的脂肪酸，但它们可以从氧化 β-羟丁酸中获得多达 60% 的能量 —— 这在长时间禁食、肝糖原耗尽之后至关重要，因为它让大脑得以靠身体的脂肪运转，而脂肪本来是大脑碰都碰不到的。这就省下了肌肉蛋白质**，直到严重饥饿时，肌肉成为大脑经由肝脏糖异生获得葡萄糖的最后来源。**牺牲的顺序是：先糖原，再以酮体形式动用脂肪，最后才是身体自己的肌肉。**",
      src: "A p.855–856, Fig. 23-19"
    },
    {
      link_en: "one tissue is left, the one that connects all the others",
      link_cn: "还剩一种组织 —— 就是把其余所有组织连起来的那一种",
      en: "**Blood mediates every metabolic interaction between tissues**: nutrients from gut to liver and from liver and adipose to everywhere else, waste from extrahepatic tissues to liver and kidney, oxygen from lung to tissue and CO2 back, and hormonal signals — in that last role the circulatory system resembles the nervous system, both integrating the activities of separate organs. **An adult has 5 to 6 L of it, almost half occupied by cells, and more than 70% of the dissolved solids are plasma proteins.** The cleanest case of structure dictating metabolism is the red cell: **an erythrocyte loses its nucleus and its mitochondria while it differentiates, so it relies on glycolysis alone for ATP — the cell that carries oxygen around the body cannot use any of it**, and its lactate goes to the liver like the muscle's. **Blood glucose is held at about 4.5 mM, and the clinical face of the brain's dependence is a ladder: at 70 mg per 100 mL a person is uncomfortable and mentally confused, further falls bring coma and convulsions, 40 and below is severe hypoglycaemia, and extreme hypoglycaemia kills.** Which is why holding that one number steady gets a whole regulatory system to itself.",
      cn: "**血液居间促成组织之间的每一次代谢往来**：营养物从肠道到肝脏、从肝脏和脂肪组织到其他各处；废物从肝外组织送到肝脏和肾脏；氧气从肺到组织、CO₂ 反向运回；还有激素信号 —— 在最后这项角色上，循环系统与神经系统相似，两者都在整合不同器官的活动。**一个成年人有 5–6 升血，其中将近一半的体积被细胞占据，而溶解的固形物中 70% 以上是血浆蛋白。**「结构决定代谢」最干净的例子是红细胞：**红细胞在分化过程中丢掉了细胞核和线粒体，所以它只能靠糖酵解获得 ATP —— 这个在全身运送氧气的细胞，自己一点氧都用不了**；它产生的乳酸和肌肉的一样送去肝脏。**血糖被维持在约 4.5 mM；而大脑的这份依赖在临床上表现为一道阶梯：降到每 100 mL 70 mg 时，人会感到不适、思维混乱；继续下降会昏迷、抽搐；40 以下是严重低血糖；极度低血糖会致死。**这就是为什么「把这一个数字稳住」值得拥有一整套独立的调控系统。",
      src: "A p.857–858, Fig. 23-20, Fig. 23-21",
      see: [{ id: "L-23-3-1", en: "the regulatory system that holds blood glucose steady", cn: "把血糖稳住的那套调控系统" }]
    }
  ],
  terms: [
    { en: "extrahepatic", cn: "肝外的",
      def_en: "Literally outside the liver — the standard collective term for every other tissue and organ. The existence of the word is itself evidence of the liver's centrality: the rest of the body is routinely named by not being this one organ.",
      def_cn: "字面意思是「肝脏以外的」—— 对其余所有组织和器官的标准统称。这个词本身就是肝脏中心地位的证据：身体的其余部分习惯性地被用「不是这一个器官」来命名。" },
    { en: "glucokinase", cn: "葡萄糖激酶",
      def_en: "The liver's hexokinase isozyme, hexokinase IV. Its Km for glucose is 10 mM, far above the low-Km isozymes of other tissues, and it is not inhibited by its product glucose 6-phosphate. Together those mean the liver mops glucose up when blood glucose is high and barely touches it when blood glucose is low — which spares glucose for the brain.",
      def_cn: "肝脏的己糖激酶同工酶，即己糖激酶 IV。它对葡萄糖的 Km 为 10 mM，远高于其他组织那些低 Km 的同工酶，而且不被产物葡萄糖-6-磷酸抑制。两点合起来意味着：血糖高时肝脏把葡萄糖兜进来，血糖低时它几乎不碰 —— 从而把葡萄糖省给大脑。" },
    { en: "glucose-alanine cycle", cn: "葡萄糖–丙氨酸循环",
      def_en: "Between meals, some muscle protein is degraded and the amino groups are transaminated onto pyruvate to make alanine, which travels to the liver; the liver deaminates it, makes glucose from the pyruvate by gluconeogenesis and urea from the ammonia. The nitrogen-carrying counterpart of the lactate route, and it also solves muscle's ammonia problem, since muscle cannot make urea.",
      def_cn: "两餐之间，一部分肌肉蛋白被降解，氨基经转氨作用交给丙酮酸生成丙氨酸，丙氨酸前往肝脏；肝脏把它脱氨，由丙酮酸经糖异生生成葡萄糖，由氨生成尿素。它是乳酸路线的带氮对应物，同时解决了肌肉的排氨问题 —— 因为肌肉自己不能合成尿素。" },
    { en: "ketone bodies as exported fuel", cn: "作为输出燃料的酮体",
      def_en: "Acetoacetate and beta-hydroxybutyrate, made in the liver from acetyl-CoA it does not need and circulated to other tissues to burn. The decisive property is that they cross the blood-brain barrier where fatty acids cannot, so fat turned into a small water-soluble acid can feed a brain that fat itself never reaches. Up to a third of the heart's energy and 60–70% of the brain's in prolonged fasting.",
      def_cn: "乙酰乙酸与 β-羟丁酸，由肝脏用自己用不掉的乙酰辅酶 A 制成，随血液送到其他组织去烧。关键性质在于它们能穿过血脑屏障，而脂肪酸不能 —— 于是被转换成小分子水溶性酸的脂肪，能喂养脂肪本身永远到不了的大脑。可供心脏能量的三分之一，长时间禁食时供大脑能量的 60–70%。" },
    { en: "perilipin", cn: "周脂素",
      def_en: "The protein coating an adipocyte's lipid droplet, physically denying the lipases access to the stored triacylglycerols. Epinephrine triggers its cAMP-dependent phosphorylation, which opens the droplet; insulin opposes the effect. The gate on the body's fat store.",
      def_cn: "包裹脂肪细胞脂滴的蛋白，在物理上不让脂肪酶接触储存的三酰甘油。肾上腺素触发它的 cAMP 依赖性磷酸化，把脂滴打开；胰岛素则起反向作用。它就是身体脂肪库上的那道门。" },
    { en: "glyceroneogenesis", cn: "甘油异生",
      def_en: "Making the glycerol phosphate needed to rebuild a triacylglycerol out of pyruvate, using cytosolic PEP carboxykinase. Adipocytes need this route because they lack glycerol kinase and so cannot reuse the free glycerol their own lipases release — one absent enzyme dictating an entire detour.",
      def_cn: "用丙酮酸制造重建三酰甘油所需的甘油磷酸，所用的酶是胞质型 PEP 羧激酶。脂肪细胞必须走这条路，是因为它们没有甘油激酶，无法再利用自身脂肪酶释放出来的游离甘油 —— 少一个酶，规定了一整条绕路。" },
    { en: "uncoupling protein 1", cn: "解偶联蛋白 1",
      def_en: "Also called thermogenin, made by brown and beige adipocytes. It gives protons a route back into the mitochondrial matrix that bypasses ATP synthase, so the energy of the gradient is released as heat instead of conserved as ATP. Electron transfer continues, arguably faster; phosphorylation does not happen.",
      def_cn: "又叫产热素，由棕色和米色脂肪细胞制造。它给质子提供一条绕开 ATP 合酶、返回线粒体基质的通路，于是质子梯度的能量以热的形式释放，而不是被保存为 ATP。电子传递照常进行（甚至更快），但磷酸化不发生。" },
    { en: "beige adipocytes", cn: "米色脂肪细胞",
      def_en: "Cells among the white adipocytes that cold exposure or beta-adrenergic stimulation converts into brown-like cells: multiple lipid droplets, mitochondria-rich, making uncoupling protein 1. They are how an adult, who retains almost no true brown fat, can still generate heat without shivering. Irisin, a peptide hormone from exercising muscle, triggers the same conversion.",
      def_cn: "散布在白色脂肪细胞之间的细胞，受冷或 β-肾上腺素能刺激后转变为类棕色细胞：多个脂滴、富含线粒体、制造解偶联蛋白 1。成年人几乎不剩真正的棕色脂肪，靠的就是它们来实现非寒战产热。运动中的肌肉释放的肽激素鸢尾素也能触发同样的转变。" },
    { en: "red and white muscle", cn: "红肌与白肌",
      def_en: "Red (slow-twitch) muscle gives relatively low tension but resists fatigue, making ATP by oxidative phosphorylation; it is mitochondria-rich and densely vascularised. White (fast-twitch) muscle has fewer mitochondria and less blood supply but develops greater tension faster, and tires sooner because it spends ATP faster than it can regenerate it.",
      def_cn: "红肌（慢肌）产生的张力相对较小但耐疲劳，靠氧化磷酸化制造 ATP，线粒体密集、血管丰富。白肌（快肌）线粒体较少、血供较差，但张力更大、起效更快，也更早疲劳 —— 因为它花 ATP 快过补 ATP。" },
    { en: "phosphocreatine", cn: "磷酸肌酸",
      def_en: "Muscle's ATP buffer, at 10 to 30 mM and three to five times the resting ATP concentration. Creatine kinase regenerates ATP from ADP during contraction and refills the store during recovery. Phosphorus NMR of an exercising limb shows the ATP signal barely moving while phosphocreatine falls — the signature of a buffer.",
      def_cn: "肌肉的 ATP 缓冲物，浓度 10–30 mM，是静息 ATP 浓度的三到五倍。肌酸激酶在收缩时用它把 ADP 变回 ATP，恢复期再把储备填满。对运动中的肢体做磷 NMR，ATP 信号几乎不动而磷酸肌酸下降 —— 这正是缓冲体系的标志。" },
    { en: "creatine kinase Mb", cn: "肌酸激酶 Mb 同工酶",
      def_en: "The creatine kinase isozyme unique to heart muscle. Normally absent from blood, it appears when a heart attack damages the myocardium: rising within 2 hours, peaking 12 to 36 hours after the event, back to normal in 3 to 5 days — so one measurement both confirms the diagnosis and dates it.",
      def_cn: "心肌特有的肌酸激酶同工酶。正常时血中没有；心肌梗死损伤心肌时出现：2 小时内升高，事件后 12–36 小时达峰，3–5 天回到正常 —— 所以一次测量既确诊又能给事件定时间。" },
    { en: "Na+/K+ ATPase", cn: "Na⁺/K⁺-ATP 酶",
      def_en: "The pump that most of the brain's enormous ATP bill is spent on. It moves two K+ in and three Na+ out per cycle, and it is called electrogenic precisely because those numbers differ, so net charge crosses the membrane every turn. The potential it maintains is what an action potential discharges as it travels along a neuron.",
      def_cn: "大脑那笔巨额 ATP 账单主要花在的那个泵。每个循环把两个 K⁺ 泵入、三个 Na⁺ 泵出；之所以称它「生电性」，正因为这两个数不相等，每转一圈就有净电荷跨膜。它维持的电位，正是动作电位沿神经元传导时所释放掉的东西。" }
  ]
};

/* ------------------------------------------------------------------ 23.3 */
window.BIOLITE_SPINE["L-23-3-1"] = {
  assumed: ["atp", "adp", "camp", "glucose", "glycogen", "glycolysis",
            "gluconeogenesis", "citric acid cycle", "acetyl-coa", "pyruvate",
            "phosphoenolpyruvate", "fatty acid", "triacylglycerol", "protein",
            "enzyme", "allosteric", "transcription", "translation", "gene",
            "cell", "membrane", "plasma membrane", "exocytosis", "vesicle",
            "receptor", "tyrosine kinase", "second messenger", "phosphorylation",
            "hormone", "insulin", "glucagon", "epinephrine", "norepinephrine",
            "cortisol", "steroid hormone", "pancreas", "liver", "muscle",
            "adipose tissue", "brain", "adrenal gland", "pituitary",
            "blood glucose", "blood-brain barrier", "ketone body", "acetone",
            "glut2", "glut4", "glucokinase", "glycogen synthase",
            "glycogen phosphorylase", "pyruvate kinase", "pyruvate dehydrogenase",
            "lipoprotein lipase", "acetyl-coa carboxylase", "calcium",
            "potassium", "depolarization", "hyperglycemia", "diabetes mellitus",
            "perilipin", "hormone-sensitive lipase", "glucose 6-phosphate",
            "glucose 6-phosphatase", "pep carboxykinase", "pfk-1", "fbpase-1"],
  nodeTitle_en: "Hormonal regulation of fuel metabolism",
  nodeTitle_cn: "燃料代谢的激素调控",
  title_en: "One number to defend — blood glucose near 4.5 mM — and four hormones answering on four timescales, with a cell that measures sugar by burning it",
  title_cn: "要守住的只有一个数字 —— 血糖约 4.5 mM —— 四种激素在四个时间尺度上作答，其中一个细胞靠「烧糖」来测糖",
  steps: [
    {
      en: "**The whole of this subject is one physiological problem, and naming it is half of any oral answer: blood glucose has to be held near 4.5 mM, minute by minute, whether you have just eaten a large meal or have not eaten for six weeks.** Four hormones do it — **insulin, glucagon, epinephrine and cortisol** — and they are worked through three normal states of the body: **well fed, fasted, and starving.** Everything below is one of those four hormones answering that one question.",
      cn: "**整个主题就是一个生理问题；把这个问题说出来，口试答案就完成了一半：血糖必须被维持在 4.5 mM 左右，分分秒秒都是如此 —— 不论你刚吃完一顿大餐，还是已经六周没进食。**做这件事的是四种激素 —— **胰岛素（insulin）、胰高血糖素（glucagon）、肾上腺素（epinephrine）和皮质醇（cortisol）** —— 而它们被放在身体的三种正常状态里来讲：**饱食、禁食、饥饿。**以下每一条，都是这四种激素之一在回答这一个问题。",
      src: "A p.859"
    },
    {
      link_en: "first hormone, and what its message actually says",
      link_cn: "第一种激素，以及它传的话到底是什么",
      en: "**Insulin's message is that blood glucose is higher than it needs to be, and its answer is to take glucose out of the blood and lock it away.** Enzyme by enzyme: **GLUT4 glucose transporters that were sitting in intracellular vesicles move to the plasma membrane**, which is how muscle and adipose tissue can take up glucose at all — note that this is an existing protein being relocated, not a new one being made, which is why insulin acts within minutes. In liver, glucokinase expression rises; **in both liver and muscle, insulin activates glycogen synthase and inactivates glycogen phosphorylase**, so the same two enzymes are pushed in the direction opposite to the one glucagon and epinephrine push them. Insulin also acts on four more: it raises PFK-1 activity through PFK-2; it raises the activity of the pyruvate dehydrogenase complex, which is the gateway from glycolysis into the citric acid cycle; and it raises acetyl-CoA carboxylase in liver and lipoprotein lipase — the enzyme that unloads fat from circulating lipoproteins — in adipose tissue. **Acetyl-CoA the citric acid cycle does not need goes into fatty acid synthesis, so the net effect of the whole list is one thing: excess blood glucose after a meal is converted into two storage forms, glycogen and triacylglycerol.**",
      cn: "**胰岛素传的话是「血糖比需要的高」，而它的回答是：把葡萄糖从血里取走、锁起来。**一个酶一个酶地看：**原本待在细胞内囊泡里的 GLUT4 葡萄糖转运体移动到质膜上** —— 肌肉和脂肪组织正是靠这一步才谈得上摄取葡萄糖；请注意这是把一个**已有的**蛋白搬个位置，而不是新造一个，这就是胰岛素能在几分钟内起效的原因。在肝脏，葡萄糖激酶的表达上调；**在肝和肌肉里，胰岛素都激活糖原合酶、失活糖原磷酸化酶** —— 也就是把同样这两个酶，往与胰高血糖素和肾上腺素相反的方向推。胰岛素还作用于另外四个：通过 PFK-2 提高 PFK-1 的活性；提高丙酮酸脱氢酶复合体（糖酰解通向柠檬酸循环的那道门）的活性；并提高肝脏的乙酰辅酶 A 羧化酶，以及脂肪组织的脂蛋白脂肪酶 —— 后者是把脂肪从循环中的脂蛋白上卸下来的酶。**柠檬酸循环用不掉的乙酰辅酶 A 进入脂肪酸合成 —— 于是这一整张清单的净效果只有一件事：饭后多余的血糖被转换成两种储存形式，糖原和三酰甘油。**",
      src: "A p.859–860, Table 23-3"
    },
    {
      link_en: "and the deepest thing here is not what insulin does, but how the body decides to release it",
      link_cn: "而这里最深的一点不是胰岛素做了什么，而是身体如何决定放出它",
      en: "**The insulin-secreting beta cell of the pancreas has no glucose receptor. It measures glucose by metabolising it.** Glucose enters through the GLUT2 transporter, is immediately phosphorylated by glucokinase, and enters glycolysis; **the higher the flux, the higher the ATP concentration in the cytosol; the raised ATP closes an ATP-gated potassium channel; closing that channel depolarises the membrane; depolarisation opens voltage-gated calcium channels; and the calcium that comes in triggers exocytosis of insulin. The sensor is glycolysis itself.** One step in that chain is worth pausing on, because it runs against intuition: **it is the closing of a potassium channel that depolarises the cell, because an open potassium channel is what was holding the membrane negative in the first place.**",
      cn: "**分泌胰岛素的胰腺 β 细胞没有葡萄糖受体。它是靠「代谢葡萄糖」来测量葡萄糖的。**葡萄糖经 GLUT2 转运体进入，立刻被葡萄糖激酶磷酸化，进入糖酵解；**通量越高，胞质里的 ATP 浓度就越高；升高的 ATP 关闭一个 ATP 门控钾通道；通道一关，膜就去极化；去极化打开电压门控钙通道；进来的钙触发胰岛素的胞吐。传感器就是糖酵解本身。**这条链上有一步值得停一下，因为它与直觉相反：**去极化是由钾通道的「关闭」造成的 —— 因为一开始把膜维持在负电位的，正是开着的钾通道。**",
      src: "A p.860–861"
    },
    {
      link_en: "and the loop closes on the same reaction it opened on, which is what makes this a sensor and not a switch",
      link_cn: "而这个环路是在它开始的那同一个反应上闭合的 —— 这正是它是「传感器」而不是「开关」的原因",
      en: "**Once insulin has done its job and blood glucose falls, the beta cell registers the fall as a diminished flux through the glucokinase reaction, and secretion slows or stops.** The consequence is the sentence worth quoting: **this feedback holds the blood glucose concentration nearly constant despite large fluctuations in what and when you eat.** Note where the feedback lives — not in a hierarchy of glands reporting to one another, but inside one cell, through the rate of a metabolic reaction.",
      cn: "**胰岛素干完活、血糖下降之后，β 细胞把这次下降读作「经葡萄糖激酶反应的通量减小了」，于是分泌减慢或停止。**由此得到值得原样引用的一句：**这种反馈使血糖浓度在饮食内容与进食时间大幅波动的情况下，仍然几乎保持恒定。**请注意这个反馈住在哪里 —— 它不在一层层腺体互相汇报的等级结构里，而在**一个细胞内部**，靠的是一个代谢反应的速率。",
      src: "A p.861"
    },
    {
      link_en: "the best evidence that this is a real mechanism rather than a tidy diagram: one channel is both a drug target and a disease gene",
      link_cn: "这套机制不是画得好看的示意图而是真实存在的最佳证据：同一个通道既是药物靶点，又是致病基因",
      en: "**The ATP-gated potassium channel is an octamer — four identical Kir6.2 subunits surrounded by four SUR1 subunits.** Three things happen to it. **The sulfonylureas, oral medicines used in type 2 diabetes mellitus, bind the SUR1 subunit and work by closing the channel and stimulating insulin release — which is exactly what glucose itself would have done.** Mutations that jam the channel permanently **open** mean the cell can never depolarise, so insulin is never released: that is neonatal diabetes mellitus, with severe hyperglycaemia requiring insulin therapy. **Mutations that jam it shut cause insulin release that will not stop, and one treatment is surgical removal of part of the pancreas to reduce insulin production.** A mechanism that can be broken in both directions, with the predicted consequence each time, is a mechanism.",
      cn: "**这个 ATP 门控钾通道是一个八聚体 —— 四个相同的 Kir6.2 亚基，外面围着四个 SUR1 亚基。**围绕它有三件事。**磺脲类药物（sulfonylureas，用于 2 型糖尿病的口服药）结合 SUR1 亚基，其作用方式就是把通道关上、刺激胰岛素释放 —— 也正是葡萄糖自己本来会做的事。**使通道永久卡在**开**位的突变，意味着细胞永远无法去极化，胰岛素也就永远放不出来：这就是**新生儿糖尿病**，伴严重高血糖，必须用胰岛素治疗。**使它卡在关位的突变，则造成停不下来的胰岛素释放，其治疗手段之一是手术切除部分胰腺以减少胰岛素产量。**一个能被往两个方向弄坏、而且每次都出现预期后果的机制，才是真正的机制。",
      src: "A p.861–862, Fig. 23-25"
    },
    {
      link_en: "second hormone, the mirror image — with one restriction that is the classic exam trap",
      link_cn: "第二种激素，是前一种的镜像 —— 但有一条限制，正是最经典的考试陷阱",
      en: "**Glucagon's message is that blood glucose is too low.** The restriction is where it can deliver that message. **Its primary target is the liver; it reaches adipose tissue too, but it does not reach muscle — whereas epinephrine does.** So the answer that glucagon mobilises muscle glycogen to raise blood glucose is wrong twice over: **muscle cells carry no glucagon receptors, and muscle glycogen could not raise blood glucose in any case, because muscle has no glucose 6-phosphatase and therefore cannot release free glucose into the blood at all.**",
      cn: "**胰高血糖素传的话是「血糖太低了」。**那条限制在于：它能把这句话送到哪里。**它的首要靶器官是肝脏；它也到得了脂肪组织，但它到不了肌肉 —— 而肾上腺素到得了。**所以「胰高血糖素动员肌糖原来升高血糖」这个答案错了两次：**肌细胞根本没有胰高血糖素受体；而且就算有，肌糖原也升不了血糖 —— 因为肌肉没有葡萄糖-6-磷酸酶，压根没法把游离葡萄糖放进血液。**",
      src: "A p.862–863, Table 23-4"
    },
    {
      link_en: "and in the liver, the elegant part is that one metabolite does two opposite jobs at once",
      link_cn: "而在肝脏里，最漂亮的一点是：一个代谢物同时干了两件相反的事",
      en: "Glucagon breaks liver glycogen down, and then does something neater. **It lowers the concentration of fructose 2,6-bisphosphate, which is simultaneously an activator of PFK-1 and an inhibitor of FBPase-1 — so removing it switches glycolysis off and gluconeogenesis on in the same move.** It also blocks the exit: **glucagon inhibits pyruvate kinase, so phosphoenolpyruvate accumulates, which pushes carbon back up the gluconeogenic route**, and it induces the synthesis of PEP carboxykinase. **Every one of these actions is carried out by cAMP-dependent protein phosphorylation.**",
      cn: "胰高血糖素先把肝糖原分解掉，然后做了一件更漂亮的事。**它降低果糖-2,6-二磷酸的浓度 —— 而这个分子同时是 PFK-1 的激活剂和 FBPase-1 的抑制剂；所以把它撤走，等于同一个动作里既关掉糖酵解、又打开糖异生。**它还把出口堵上：**胰高血糖素抑制丙酮酸激酶，于是磷酸烯醇式丙酮酸堆积起来，把碳推回糖异生那条路**；同时它诱导 PEP 羧激酶的合成。**上述每一个作用，都是由 cAMP 依赖的蛋白磷酸化来执行的。**",
      src: "A p.862–863"
    },
    {
      link_en: "and in adipose tissue it opens the fat store, which is what keeps the brain supplied",
      link_cn: "而在脂肪组织里它打开脂肪库 —— 这正是大脑得以继续有糖可用的原因",
      recall_en: "the same perilipin gate epinephrine opens",
      recall_cn: "与肾上腺素打开的是同一道周脂素之门",
      en: "**In adipose tissue glucagon triggers the cAMP-dependent phosphorylation of perilipin, the coat protein that keeps lipases off the lipid droplet, and of hormone-sensitive lipase — so fatty acids are released into the blood.** Follow the point of that: **almost every tissue can burn those fatty acids, so almost every tissue stops competing for glucose. That is what sparing glucose for the brain actually consists of.**",
      cn: "**在脂肪组织里，胰高血糖素触发 cAMP 依赖的磷酸化，作用于周脂素（perilipin，那个把脂肪酶挡在脂滴外面的外壳蛋白）和激素敏感脂肪酶 —— 于是脂肪酸被释放进血液。**要看清这一步的意义：**几乎每一种组织都能烧这些脂肪酸，于是几乎每一种组织都不再来抢葡萄糖。所谓「把葡萄糖省给大脑」，实际内容就是这个。**",
      src: "A p.863"
    },
    {
      link_en: "before the fasting programme makes sense, take stock of what there is to spend",
      link_cn: "在禁食的那套程序讲得通之前，先清点一下有多少可花的家底",
      en: "**A healthy adult has three kinds of fuel reserve: glycogen, triacylglycerol, and the body's own tissue protein.** They are not comparable in size. **A 70 kg man carries about 15 kg of adipose triacylglycerol against 0.23 kg of total glycogen — roughly sixtyfold in mass and much more than that in energy.** Put that as time and it sticks: **stored fat could keep a basal rate of metabolism going for about three months, and a very obese adult has enough stored fuel to endure a fast of more than a year. Glycogen is gone within a day** — which is exactly why a fasting programme has to exist at all.",
      cn: "**一个健康成年人有三类燃料储备：糖原、三酰甘油，以及身体自己的组织蛋白。**它们的量级完全不在一个档次上。**一个 70 kg 的男性身上有约 15 kg 的脂肪三酰甘油，而全部糖原只有 0.23 kg —— 质量上差约六十倍，能量上差得更多。**把它换算成时间就记得住了：**储存的脂肪足以维持基础代谢率约三个月；一个极度肥胖的成年人储存的燃料足以熬过一年以上的禁食。而糖原一天之内就用完了** —— 这正是「必须存在一套禁食程序」的原因。",
      src: "A p.863–864, Table 23-5"
    },
    {
      link_en: "and here is why a starving body starts producing ketone bodies, which is a mechanism and not just an observation",
      link_cn: "接下来是「饥饿的身体为什么开始产酮体」—— 这是一个机制，而不只是一个观察结果",
      en: "**In starvation the liver degrades those of its own proteins that are most expendable in an organism not taking in food, and feeds their carbon skeletons into gluconeogenesis.** Now the consequence that is easy to miss. **Making glucose that way drains citric acid cycle intermediates out of the cycle, so entry of acetyl-CoA into the cycle is inhibited and acetyl-CoA accumulates.** Fatty acid oxidation goes on producing acetyl-CoA that the cycle can no longer accept — **and that, rather than simply an excess of fat, is why the level of ketone bodies in the blood rises after a few days of fasting.**",
      cn: "**饥饿时，肝脏降解自己那些「在一个不进食的机体里最可省」的蛋白，把它们的碳骨架送进糖异生。**接下来是最容易被漏掉的后果。**用这种方式造葡萄糖，会把柠檬酸循环的中间物从循环里抽走，于是乙酰辅酶 A 进入循环这一步被抑制，乙酰辅酶 A 开始堆积。**而脂肪酸氧化仍在源源不断地产生循环已经接不下的乙酰辅酶 A —— **这才是「禁食几天之后血中酮体水平上升」的原因，而不仅仅是「脂肪太多」。**",
      src: "A p.864"
    },
    {
      link_en: "and the reason those ketone bodies matter is a barrier, not a preference",
      link_cn: "而这些酮体之所以重要，原因是一道屏障，不是一种偏好",
      en: "**Fatty acids do not cross the blood-brain barrier and ketone bodies do, so ketone bodies supplement glucose as an energy source for the brain during a long fast.** The measured time course over six weeks of starvation shows them almost unmeasurable at the start and rising sharply after two to four days. **One of them, acetone, is a minor product that is not metabolised at all and leaves in the breath — which is the bedside sign.** And the end of the sequence is stated plainly: **when the fat reserves are gone, degradation of essential proteins begins, and that leads to loss of heart and liver function and, in prolonged starvation, to death.**",
      cn: "**脂肪酸过不了血脑屏障，而酮体过得去 —— 所以在长时间禁食期间，酮体补充葡萄糖，成为大脑的能源。**在长达六周的饥饿实测时程中，酮体一开始几乎测不到，两到四天后急剧上升。**其中一种叫丙酮（acetone），是含量较少的一种，完全不被代谢，随呼气排出 —— 这就是床旁的那个体征。**而这一序列的结尾说得很直白：**脂肪储备耗尽之后，必需蛋白开始被降解，由此导致心脏与肝脏功能丧失；长期饥饿的结局是死亡。**",
      src: "A p.864–866, Fig. 23-28"
    },
    {
      link_en: "third hormone, which differs from glucagon in two ways: when it arrives and where it can go",
      link_cn: "第三种激素，它与胰高血糖素有两点不同：什么时候到，以及能去哪里",
      en: "**Epinephrine is anticipatory. Neuronal signals from the brain trigger its release from the adrenal medulla before the work is done, not after** — and it prepares the delivery system as well as the fuel, increasing the rate and strength of the heartbeat and raising the blood pressure. **In reach, it gets muscle, which glucagon does not: epinephrine promotes the anaerobic breakdown of muscle glycogen to lactate by fermentation.** The most instructive part is what it does to one metabolite. **Epinephrine raises the concentration of fructose 2,6-bisphosphate, a potent allosteric activator, and so turns glycolysis up — the same metabolite glucagon lowers, moved the opposite way in a different organ.** A second messenger means whatever the receiving cell is equipped to make it mean. Epinephrine also reinforces itself by stimulating glucagon secretion and inhibiting insulin secretion.",
      cn: "**肾上腺素是「预支型」的。来自大脑的神经信号在活儿干完之前、而不是之后，触发它从肾上腺髓质释放** —— 而且它不仅准备燃料，也准备运输系统：加快并加强心跳、升高血压。**在覆盖范围上，它到得了肌肉，而胰高血糖素到不了：肾上腺素促使肌糖原经发酵无氧分解为乳酸。**最有教益的是它对某一个代谢物做的事。**肾上腺素提高果糖-2,6-二磷酸（一个强效别构激活剂）的浓度，从而把糖酵解开大 —— 而这正是胰高血糖素所降低的那同一个代谢物，在另一个器官里被朝相反方向推动。**第二信使的含义，取决于接收它的细胞装备了什么去解读它。肾上腺素还通过刺激胰高血糖素分泌、抑制胰岛素分泌来强化自身的效果。",
      src: "A p.864–865"
    },
    {
      link_en: "the fourth hormone differs in kind, not merely in trigger, and one sentence makes the whole set coherent",
      link_cn: "第四种激素不只是触发条件不同，而是**种类**上就不同 —— 而有一句话让这一整组变得连贯",
      en: "**Cortisol is released by anxiety, fear, pain, haemorrhage, infection, low blood glucose and starvation, and it acts by changing the kinds and amounts of enzymes its target cells synthesise, rather than by regulating the activity of enzyme molecules that already exist.** That single difference is why steroid hormones are slow. **Insulin, glucagon and epinephrine phosphorylate enzymes that are already there and act in seconds to minutes; cortisol has to have new enzymes transcribed and translated, and acts over hours.** What it makes: **cortisol promotes gluconeogenesis by stimulating the synthesis of PEP carboxykinase — the same enzyme glucagon induces, reached by a different route — so the effects of cortisol counterbalance those of insulin.**",
      cn: "**皮质醇由焦虑、恐惧、疼痛、失血、感染、低血糖和饥饿所释放；它的作用方式是改变靶细胞所合成的酶的种类与数量，而不是去调节已经存在的酶分子的活性。**仅这一点差别，就是类固醇激素为什么慢的原因。**胰岛素、胰高血糖素和肾上腺素磷酸化的是本来就在那里的酶，作用以秒到分钟计；皮质醇必须让新的酶先被转录、再被翻译出来，作用以小时计。**它让细胞造什么：**皮质醇通过刺激 PEP 羧激酶的合成来促进糖异生 —— 与胰高血糖素诱导的是同一个酶，只是走了另一条路 —— 所以皮质醇的效果与胰岛素的效果相互抵消。**",
      src: "A p.865–866"
    },
    {
      link_en: "and leaving that fourth hormone switched on has a visible price",
      link_cn: "而让第四种激素一直开着，代价是看得见的",
      en: "**Sustained cortisol release loses its adaptive value and begins to damage muscle and bone, and to impair endocrine and immune function** — the predictable cost of a hormone whose job is to break muscle protein down for gluconeogenic carbon. Two diseases mark the two directions. **A pituitary tumour that makes the adrenal glands overproduce cortisol gives Cushing disease; underproduction of cortisol gives Addison disease, treated by administering hydrocortisone, which is simply the pharmaceutical name for cortisol.**",
      cn: "**皮质醇的持续释放会失去它的适应意义，开始损伤肌肉和骨骼，并损害内分泌与免疫功能** —— 对一个「以分解肌肉蛋白换取糖异生碳源」为职责的激素来说，这是可以预料的代价。两种疾病标出了两个方向。**垂体肿瘤使肾上腺过量产生皮质醇，就是库欣病（Cushing disease）；皮质醇产生不足则是艾迪生病（Addison disease），治疗方法是给予氢化可的松（hydrocortisone）—— 那不过是皮质醇的药名。**",
      src: "A p.866"
    }
  ],
  terms: [
    { en: "the blood glucose set point", cn: "血糖调定点",
      def_en: "About 4.5 mM, normally 70 to 100 mg per 100 mL — the concentration the whole four-hormone system exists to defend, minute by minute. Naming the number is the fastest way to show that this topic is a control problem rather than a list of hormones.",
      def_cn: "约 4.5 mM，通常为每 100 mL 70–100 mg —— 整套四激素系统存在的目的，就是分分秒秒守住这个浓度。把这个数字说出来，是最快地表明「这是一个控制问题，而不是一张激素清单」的办法。" },
    { en: "GLUT4", cn: "GLUT4",
      def_en: "The insulin-responsive glucose transporter of muscle and adipose tissue. It is not made on demand: insulin causes GLUT4 already sitting in intracellular vesicles to move to the plasma membrane, which is why insulin acts within minutes rather than hours.",
      def_cn: "肌肉和脂肪组织中对胰岛素起反应的葡萄糖转运体。它不是临时造的：胰岛素让本来待在细胞内囊泡里的 GLUT4 移到质膜上 —— 这正是胰岛素在几分钟而不是几小时内起效的原因。" },
    { en: "glucokinase as the sensor", cn: "作为传感器的葡萄糖激酶",
      def_en: "In the pancreatic beta cell, glucokinase is not merely the first enzyme of glycolysis but the measuring device: glucose entering is immediately phosphorylated by it and enters glycolysis, so the rate of that reaction is the cell's reading of blood glucose — on the way up and on the way down. Its high Km is what lets it report across the physiological range instead of saturating.",
      def_cn: "在胰腺 β 细胞里，葡萄糖激酶不只是糖酵解的第一个酶，更是那台测量仪：进来的葡萄糖立刻被它磷酸化并进入糖酵解，所以这个反应的速率就是该细胞对血糖的读数 —— 上升时如此，下降时也如此。它的高 Km 使它能在整个生理范围内报数，而不会一下就饱和。" },
    { en: "ATP-gated potassium channel", cn: "ATP 门控钾通道",
      def_en: "An octamer of four Kir6.2 subunits surrounded by four SUR1 subunits, and the device that turns a metabolic signal into an electrical one. Rising ATP closes it; closure depolarises the membrane, because an open potassium channel is what held the membrane negative; depolarisation admits the calcium that triggers insulin exocytosis. Sulfonylurea drugs close it deliberately; mutations that jam it open cause neonatal diabetes and mutations that jam it shut cause unstoppable insulin release.",
      def_cn: "由四个 Kir6.2 亚基外围四个 SUR1 亚基组成的八聚体，是把代谢信号变成电信号的那个装置。ATP 升高把它关上；关闭导致膜去极化 —— 因为原本把膜维持在负电位的正是开着的钾通道；去极化让钙进来，触发胰岛素胞吐。磺脲类药物有意把它关上；使它卡在开位的突变导致新生儿糖尿病，卡在关位的突变导致停不下来的胰岛素释放。" },
    { en: "fructose 2,6-bisphosphate", cn: "果糖-2,6-二磷酸",
      def_en: "The regulatory metabolite that turns glycolysis and gluconeogenesis in opposite directions at once, since it activates PFK-1 and inhibits FBPase-1. Glucagon lowers it in liver, switching glycolysis off and gluconeogenesis on; epinephrine raises it in muscle, turning glycolysis up. One molecule, two organs, opposite directions.",
      def_cn: "同时把糖酵解和糖异生推向相反方向的那个调节代谢物 —— 因为它激活 PFK-1、抑制 FBPase-1。胰高血糖素在肝脏里降低它，于是糖酵解关闭、糖异生开启；肾上腺素在肌肉里提高它，于是糖酵解开大。一个分子，两个器官，方向相反。" },
    { en: "why glucagon cannot use muscle glycogen", cn: "胰高血糖素为什么用不上肌糖原",
      def_en: "Two reasons, and the answer needs both. Muscle cells carry no glucagon receptors, so the message never arrives; and muscle has no glucose 6-phosphatase, so even if its glycogen were broken down the glucose could not leave the cell to raise blood glucose. Glucagon's primary target is the liver, with adipose tissue second. Epinephrine, unlike glucagon, does reach muscle.",
      def_cn: "有两个理由，答案必须都给。肌细胞没有胰高血糖素受体，所以这条消息根本到不了；而且肌肉没有葡萄糖-6-磷酸酶，所以即使肌糖原被分解，葡萄糖也出不了细胞、升不了血糖。胰高血糖素的首要靶器官是肝脏，其次是脂肪组织。肾上腺素则与它不同 —— 肾上腺素到得了肌肉。" },
    { en: "the three fuel reserves", cn: "三类燃料储备",
      def_en: "Glycogen, triacylglycerol and tissue protein. Their sizes are not comparable: in a 70 kg man, 0.23 kg of glycogen against 15 kg of fat. Glycogen is the buffer for hours, fat the reserve for about three months of basal metabolism, and protein the fuel of last resort — whose consumption is itself the pathology of starvation.",
      def_cn: "糖原、三酰甘油和组织蛋白。三者的量级不可比：一个 70 kg 男性有 0.23 kg 糖原，却有 15 kg 脂肪。糖原是以小时计的缓冲，脂肪是够基础代谢约三个月的储备，而蛋白质是最后手段 —— 而消耗蛋白质这件事本身，就是饥饿的病理。" },
    { en: "cortisol as the slow hormone", cn: "作为慢激素的皮质醇",
      def_en: "A hormone that alters metabolism by changing which enzymes a target cell synthesises and how much of them, rather than by regulating the activity of enzyme molecules that already exist. That is the mechanistic reason steroid hormones act over hours while the cAMP hormones act over seconds, and it is the comparison most often asked for.",
      def_cn: "一种通过改变靶细胞合成哪些酶、合成多少来改变代谢的激素，而不是通过调节已经存在的酶分子的活性。这正是「类固醇激素以小时计起效，而 cAMP 类激素以秒计起效」的机制性原因，也是最常被要求比较的那一点。" }
  ]
};

/* ------------------------------------------------------------------ 23.4 */
window.BIOLITE_SPINE["L-23-4-1"] = {
  assumed: ["atp", "amp", "adp", "hormone", "receptor", "neuron", "brain",
            "hypothalamus", "peptide", "protein", "enzyme", "gene", "cell",
            "blood", "insulin", "adipose tissue", "adipocyte", "fatty acid",
            "triacylglycerol", "lipid", "glucose", "muscle", "liver", "colon",
            "stomach", "phosphorylation", "tyrosine", "transcription",
            "protein synthesis", "sympathetic nervous system", "kinase",
            "protein kinase", "obesity", "appetite", "exercise",
            "gut microbiome", "probiotic", "prebiotic"],
  nodeTitle_en: "Obesity and the regulation of body mass",
  nodeTitle_cn: "肥胖与体重的调节",
  title_en: "Fat is not a warehouse, it is a gland that reports how full it is — which is why body mass behaves like a defended set point",
  title_cn: "脂肪不是仓库，而是一个会汇报自己有多满的腺体 —— 这就是体重表现得像一个被守卫的调定点的原因",
  steps: [
    {
      en: "**Obesity is defined by a single number, the body mass index: weight in kilograms divided by height in metres squared. 25 to 30 is overweight, over 30 is obese, over 40 is severely obese, and more than 40% of U.S. adults are now in the obese range.** A number that simple invites the assumption that body mass is an accumulating balance — what came in minus what went out. **The subject of this chain is why it behaves instead like a quantity the body actively defends.**",
      cn: "**肥胖由一个数字来定义，即体重指数（body mass index，BMI）：体重公斤数除以身高米数的平方。25–30 为超重，超过 30 为肥胖，超过 40 为重度肥胖；目前美国成年人中有 40% 以上落在肥胖区间。**一个这么简单的数字，容易让人以为体重是一本流水账 —— 进来的减去出去的。**而这条线索要讲的，正是它为什么反而表现得像一个被身体主动守卫的量。**",
      src: "A p.867"
    },
    {
      link_en: "the mechanism starts with a hormone made by the fat itself",
      link_cn: "机制的起点，是脂肪自己造的一种激素",
      en: "**Adipose tissue produces leptin, a hormone that regulates feeding behaviour and energy expenditure so as to maintain adequate reserves of fat.** The crucial detail is what sets how much is made: **leptin production and release increase with the number and the size of the adipocytes, so the amount of leptin in the blood is a report on the size of the store.** Adipose tissue is therefore not a warehouse that happens to be full or empty; it is an endocrine organ whose output says how full it is.",
      cn: "**脂肪组织产生瘦素（leptin），这是一种调节进食行为与能量消耗、以维持足够脂肪储备的激素。**关键细节在于「造多少」由什么决定：**瘦素的产生与释放随脂肪细胞的数量和体积增加而增加 —— 所以血中瘦素的量，就是一份关于「库存有多大」的报告。**因此脂肪组织并不是一个碰巧装满或空着的仓库；它是一个内分泌器官，它的输出说明的正是自己有多满。",
      src: "A p.867, p.875"
    },
    {
      link_en: "and the message that report carries is short",
      link_cn: "而这份报告所携带的消息很短",
      en: "**The leptin receptor is encoded by a gene called db and is expressed mainly in neurons of the arcuate nucleus of the hypothalamus, a small region at the base of the brain. Leptin arriving there carries one message: reserves are sufficient. The response is reduced food intake and increased energy expenditure**, and leptin also stimulates the sympathetic nervous system, the branch of the nervous system that raises heart rate and mobilises fuel. **That is the whole reason body mass behaves like a regulated set point rather than an accumulating balance: the size of the store is measured and reported, and the report changes both sides of the ledger.**",
      cn: "**瘦素受体由一个叫 db 的基因编码，主要表达在下丘脑弓状核（arcuate nucleus，脑底部的一个小区域）的神经元上。抵达那里的瘦素带着一条消息：储备够了。相应的反应是减少进食、增加能量消耗**；瘦素同时还刺激交感神经系统 —— 也就是那一支提高心率、动员燃料的神经系统。**这就是「体重表现得像一个被调节的调定点、而不是一本越记越多的流水账」的全部原因：库存的大小被测量、被汇报，而这份汇报同时改变了账本的两边。**",
      src: "A p.867–869"
    },
    {
      link_en: "how does a receptor on a neuron turn into a change in appetite? The receptor works the way a growth-factor receptor does",
      link_cn: "一个神经元上的受体，怎么变成食欲的改变？这个受体的工作方式与生长因子受体相同",
      en: "**When leptin binds the extracellular parts of two receptor monomers, the two come together as a dimer and are phosphorylated on several tyrosine residues.** Those phosphorylated tyrosines are the docking sites that start the signal on its way into the cell, so a hormone concentration in the blood becomes a change in which genes a hypothalamic neuron transcribes.",
      cn: "**当瘦素结合到两个受体单体的胞外部分上时，这两个单体聚成一个二聚体，并在若干个酪氨酸残基上被磷酸化。**这些被磷酸化的酪氨酸就是停靠位点，信号由此往细胞内部传下去 —— 于是血液中的一个激素浓度，变成了下丘脑神经元转录哪些基因的改变。",
      src: "A p.869"
    },
    {
      link_en: "and the neurons that receive it are arranged as a push-pull pair, which is the part with a consequence",
      link_cn: "而接收这条消息的神经元排成了一对「推–拉」结构 —— 这才是有后果的那部分",
      en: "**Two populations of neurosecretory cells sit in the arcuate nucleus. Anorexigenic cells release appetite-suppressing peptides, among them alpha-MSH; orexigenic cells release the appetite-stimulating peptide NPY. Each type inhibits the other.** Work out what that arrangement means, because it is the point: **any stimulus that switches one population on switches the other off at the same time, so appetite moves as a single quantity rather than as two independent pushes.**",
      cn: "**弓状核里坐着两群神经分泌细胞。厌食性（anorexigenic）细胞释放抑制食欲的肽，其中包括 α-MSH；促食性（orexigenic）细胞释放刺激食欲的肽 NPY。两类细胞互相抑制。**要想清楚这种排布意味着什么，因为这才是重点：**任何让其中一群兴奋起来的刺激，同时就把另一群关掉了 —— 于是「食欲」是作为一个整体的量在移动，而不是两股各自独立的推力。**",
      src: "A p.869–870"
    },
    {
      link_en: "and two hormones from the digestive tract push on that same pair",
      link_cn: "而消化道来的两种激素，推的正是同一对细胞",
      en: "**Ghrelin, released by the stomach, activates the NPY cells and so stimulates appetite. PYY3-36, released by the colon, inhibits them and so reduces it.** They act on the same push-pull pair the leptin signal acts on, which is how a long-term report about the size of the fat store and a short-term report about what is currently in the gut are combined into one decision. **A concrete case fixes the mechanism: people with Prader-Willi syndrome, whose hunger is famously unrelenting, have raised blood levels of ghrelin.**",
      cn: "**胃释放的胃饥饿素（ghrelin）激活 NPY 细胞，从而刺激食欲；结肠释放的 PYY3-36 抑制它们，从而降低食欲。**它们作用于瘦素信号所作用的那同一对「推–拉」细胞 —— 这就是「一份关于脂肪库存大小的长期报告」与「一份关于消化道里此刻有什么的短期报告」被合并成一个决定的方式。**有一个具体病例把这个机制钉住：普拉德–威利综合征（Prader-Willi syndrome）患者以饥饿感永不缓解著称，而他们血中的胃饥饿素水平是升高的。**",
      src: "A p.873"
    },
    {
      link_en: "adipose tissue reports twice, and the second hormone works on metabolism rather than on appetite",
      link_cn: "脂肪组织汇报了两次，而第二种激素作用于代谢而不是食欲",
      en: "**The second hormone made by adipose tissue is adiponectin. It stimulates the uptake and oxidation of fatty acids, inhibits fatty acid synthesis, and makes muscle and liver more sensitive to insulin.** So where leptin changes how much you eat, adiponectin changes what the tissues do with what arrives.",
      cn: "**脂肪组织造的第二种激素是脂联素（adiponectin）。它促进脂肪酸的摄取与氧化、抑制脂肪酸合成，并使肌肉和肝脏对胰岛素更敏感。**所以，瘦素改变的是「你吃多少」，脂联素改变的是「组织拿送到的东西做什么」。",
      src: "A p.870"
    },
    {
      link_en: "and it acts largely through one enzyme that is worth knowing in its own right",
      link_cn: "而它主要通过一个本身就值得单独认识的酶起作用",
      en: "**Adiponectin acts largely through AMP-activated protein kinase, AMPK, which monitors a cell's energy status by responding to the ratio of AMP to ATP.** The logic of that ratio: **spending ATP produces ADP and AMP, so a rising AMP/ATP ratio is a direct chemical statement that this cell is running short. When AMPK senses that, lipid synthesis is inhibited and the use of lipid as fuel is stimulated** — stop building, start burning. **The same sensor is switched on by exercise, and through its actions in the brain it affects the metabolism of the whole animal, not only the cell it sits in.**",
      cn: "**脂联素主要通过 AMP 激活的蛋白激酶（AMP-activated protein kinase, AMPK）起作用；AMPK 通过对 AMP 与 ATP 的比值作出反应，来监测一个细胞的能量状态。**这个比值的逻辑是：**花掉 ATP 会产生 ADP 和 AMP，所以 AMP/ATP 比值升高，就是一句直接的化学陈述：这个细胞不够用了。AMPK 感知到这一点时，脂质合成被抑制，而把脂质当燃料用被促进** —— 停止建造，开始燃烧。**同一个传感器也被运动打开；而且通过它在脑内的作用，它影响的是整只动物的代谢，不只是它所在的那个细胞。**",
      src: "A p.870–871"
    },
    {
      link_en: "three more inputs, each named for what it ties body mass to",
      link_cn: "还有三个输入，每一个都以「它把体重系在什么上」而得名",
      en: "**mTORC1 is a protein complex that ties protein synthesis to nutrient availability, so a cell builds protein only when the raw material is there.** **PPARs are transcriptional regulators of fat burning; one of them, PPAR-delta, is a key regulator of fat oxidation and responds to changes in dietary lipid** — so what is eaten alters which enzymes of fat oxidation are made. **And endocannabinoids, signalling lipids made by the body itself, are a further input to appetite.**",
      cn: "**mTORC1 是一个把蛋白质合成与营养供给绑在一起的蛋白复合物 —— 只有在原料到位时，细胞才建造蛋白质。** **PPAR 家族是脂肪燃烧的转录调控因子；其中的 PPAR-δ 是脂肪氧化的关键调节者，并对膳食脂质的变化作出反应** —— 也就是说，吃进什么会改变细胞造哪些脂肪氧化的酶。**而内源性大麻素（endocannabinoids，身体自己制造的信号脂质）是食欲的又一个输入。**",
      src: "A p.872"
    },
    {
      link_en: "and one input is not the body's own tissue at all",
      link_cn: "还有一个输入，根本不属于身体自己的组织",
      en: "**The gut microbiome — the population of microorganisms living in the intestine — is a further influence on body mass, and it can be manipulated: probiotics are microbial species added directly to the gut that disfavour the laying down of fat, and prebiotics are the food supplied to encourage such species.** It belongs in this chain because it is one more thing the arithmetic of calories in and calories out does not capture.",
      cn: "**肠道微生物组（gut microbiome，即生活在肠道里的那群微生物）是影响体重的又一个因素，而且它可以被人为改变：益生菌（probiotics）是直接加进肠道、不利于脂肪沉积的微生物种类；益生元（prebiotics）则是为鼓励这类微生物而供给的食物。**它之所以属于这条线索，是因为它又是一件「摄入卡路里减去消耗卡路里」这道算术题算不进去的东西。",
      src: "A p.874"
    },
    {
      link_en: "so what does the whole arrangement add up to?",
      link_cn: "那么这一整套安排加起来是什么？",
      recall_en: "the set point from the third step, now with all its inputs named",
      recall_cn: "第三步说的那个调定点 —— 现在它的各个输入都有了名字",
      en: "**Body mass is defended rather than accumulated, and the defence has a measuring device (leptin, reporting the size of the fat store), a controller (the mutually inhibiting pair of neuron types in the arcuate nucleus), short-term corrections from the gut (ghrelin and PYY3-36), and a metabolic arm (adiponectin acting through AMPK).** That is why losing weight by eating less is fought back against by a system that reads the falling store as a fall in leptin and answers with more appetite and less expenditure.",
      cn: "**体重是被守卫的，不是被累积的；而这套守卫有一个测量装置（瘦素，汇报脂肪库存的大小）、一个控制器（弓状核里那对互相抑制的神经元）、来自消化道的短期修正（胃饥饿素与 PYY3-36），以及一条代谢支路（脂联素经 AMPK 起作用）。**这就是为什么「少吃减重」会遭到反击：这套系统把下降的库存读作瘦素的下降，然后用「更饿、更省」来作答。",
      src: "A p.867–875"
    }
  ],
  terms: [
    { en: "leptin", cn: "瘦素",
      def_en: "A hormone made by adipose tissue that regulates feeding behaviour and energy expenditure so as to maintain adequate fat reserves. Production and release rise with the number and size of adipocytes, so the blood level reports the size of the store. Its receptor, encoded by the db gene, sits mainly on neurons of the hypothalamic arcuate nucleus; the message it carries is that reserves are sufficient — eat less, spend more.",
      def_cn: "脂肪组织制造的一种激素，通过调节进食行为与能量消耗来维持足够的脂肪储备。它的产生与释放随脂肪细胞的数量和体积上升，所以血中水平就是对库存大小的汇报。它的受体由 db 基因编码，主要位于下丘脑弓状核的神经元上；它带去的消息是「储备够了」—— 少吃、多消耗。" },
    { en: "arcuate nucleus", cn: "弓状核",
      def_en: "A small region at the base of the brain, in the hypothalamus, holding the two neuron populations that set appetite: anorexigenic cells releasing appetite-suppressing peptides such as alpha-MSH, and orexigenic cells releasing the appetite-stimulating peptide NPY. Each inhibits the other, so any stimulus that turns one on turns the other off.",
      def_cn: "位于下丘脑、脑底部的一个小区域，容纳着决定食欲的两群神经元：释放 α-MSH 等抑食肽的厌食性细胞，以及释放促食肽 NPY 的促食性细胞。两者互相抑制，所以任何让一群兴奋的刺激，同时就关掉了另一群。" },
    { en: "ghrelin and PYY3-36", cn: "胃饥饿素与 PYY3-36",
      def_en: "The two short-term signals from the digestive tract that push on the same pair of neuron populations leptin acts on. Ghrelin from the stomach activates the NPY cells and stimulates appetite; PYY3-36 from the colon inhibits them and reduces it. Blood ghrelin is raised in Prader-Willi syndrome, whose hunger is unrelenting.",
      def_cn: "来自消化道的两个短期信号，作用于瘦素所作用的同一对神经元群。胃分泌的胃饥饿素激活 NPY 细胞、刺激食欲；结肠分泌的 PYY3-36 抑制它们、降低食欲。普拉德–威利综合征患者饥饿感永不缓解，其血中胃饥饿素水平升高。" },
    { en: "adiponectin", cn: "脂联素",
      def_en: "The second hormone made by adipose tissue. It stimulates fatty acid uptake and oxidation, inhibits fatty acid synthesis, and sensitises muscle and liver to insulin, acting largely through AMP-activated protein kinase. Where leptin changes how much is eaten, adiponectin changes what the tissues do with it.",
      def_cn: "脂肪组织制造的第二种激素。它促进脂肪酸的摄取与氧化、抑制脂肪酸合成，并使肌肉和肝脏对胰岛素更敏感，主要通过 AMP 激活的蛋白激酶起作用。瘦素改变的是吃多少，脂联素改变的是组织拿它做什么。" },
    { en: "AMP-activated protein kinase", cn: "AMP 激活的蛋白激酶",
      def_en: "The cell's energy sensor. It responds to the ratio of AMP to ATP: spending ATP makes ADP and AMP, so a rising ratio states chemically that the cell is running short. When it senses that, lipid synthesis is inhibited and the use of lipid as fuel is stimulated. Exercise switches on the same sensor, and through its actions in the brain it affects the metabolism of the whole animal.",
      def_cn: "细胞的能量传感器。它对 AMP 与 ATP 的比值作出反应：花掉 ATP 会生成 ADP 和 AMP，所以比值升高就是一句化学上的陈述 —— 这个细胞不够用了。它感知到这一点时，脂质合成被抑制，把脂质当燃料用被促进。运动打开的是同一个传感器；而通过它在脑内的作用，它影响整只动物的代谢。" }
  ]
};

/* ------------------------------------------------------------------ 23.5 */
window.BIOLITE_SPINE["L-23-5-1"] = {
  assumed: ["glucose", "blood glucose", "insulin", "hormone", "receptor",
            "protein", "enzyme", "cell", "blood", "urine", "hemoglobin",
            "pancreas", "liver", "muscle", "adipose tissue", "brain",
            "fatty acid", "acetyl-coa", "ketone body", "carboxylic acid",
            "proton", "buffer", "bicarbonate", "ph", "acidosis",
            "gluconeogenesis", "obesity", "hypertension", "amp-activated protein kinase",
            "ppar", "potassium", "exocytosis", "glut4", "kidney", "coma",
            "autoimmune", "antibody", "fasting"],
  nodeTitle_en: "Diabetes mellitus",
  nodeTitle_cn: "糖尿病",
  title_en: "Two different diseases under one name — failing at opposite ends of the same axis — and an acid, not the sugar, as the acute danger",
  title_cn: "一个名字底下的两种不同的病 —— 在同一条轴的两端坏掉 —— 而急性危险来自一种酸，不是糖",
  steps: [
    {
      en: "**Diabetes mellitus is common enough that the numbers are worth carrying: about 9% of the U.S. population, and nearly 25% of those over 65, show some abnormality in the handling of glucose — a disturbance of glucose metabolism — indicating diabetes or a tendency towards it.** It comes in two clinical classes, and the point of this chain is that they are two different diseases sharing one name.",
      cn: "**糖尿病常见到数字本身就值得记住：美国人口中约 9%，而 65 岁以上人群中将近 25%，在处理葡萄糖这件事上表现出某种异常 —— 即葡萄糖代谢的紊乱 —— 提示糖尿病或糖尿病倾向。**它分成两个临床类别 —— 而这条线索要说的是：它们是共用一个名字的两种不同的病。",
      src: "A p.875"
    },
    {
      link_en: "and the two classes fail at opposite ends of the same axis",
      link_cn: "而这两类是在同一条轴的两端坏掉的",
      en: "**Type 1, called insulin-dependent diabetes mellitus, is not enough insulin: the beta cells that make it are gone. Type 2, called non-insulin-dependent diabetes mellitus, is enough insulin that the tissues no longer answer.** Say the axis out loud and both halves follow: **one end is a failure of supply, the other a failure of response — which is why the two need different treatments.**",
      cn: "**1 型，叫胰岛素依赖型糖尿病（IDDM），问题是胰岛素不够：制造它的 β 细胞没了。2 型，叫非胰岛素依赖型糖尿病（NIDDM），问题是胰岛素够，但组织不再理它。**把这条轴说出声，两半就都跟着出来了：**一端是供给失效，另一端是响应失效 —— 这正是两者治疗方式不同的原因。**",
      src: "A p.875–876"
    },
    {
      link_en: "the second of those has a name worth stating precisely",
      link_cn: "其中第二种的名称值得说得精确一些",
      en: "**The hallmark of type 2 diabetes is insulin resistance: a state in which more insulin is required to produce the same effect.** Note what that does to a blood test — **insulin can be normal or even high while glucose is high too, which is the opposite of what type 1 looks like.** Type 2 tracks obesity in the industrialised world, but the relationship needs stating carefully in both directions: **although 80% of people with type 2 diabetes are obese, most obese people do not develop type 2 diabetes.**",
      cn: "**2 型糖尿病的标志是胰岛素抵抗（insulin resistance）：需要更多的胰岛素才能产生同样的效果。**注意这一点在化验单上意味着什么 —— **胰岛素可以正常甚至偏高，而血糖同时也高；这与 1 型的样子正好相反。**在工业化国家，2 型糖尿病随肥胖上升，但这个关系必须两个方向都说清楚：**2 型糖尿病患者中有 80% 是肥胖的，但大多数肥胖者并不会发展成 2 型糖尿病。**",
      src: "A p.876, p.878"
    },
    {
      link_en: "and what usually comes before it has its own name",
      link_cn: "而通常先于它出现的那个状态，也有自己的名字",
      en: "**Metabolic syndrome is the frequent prelude to type 2 diabetes, and it is a cluster rather than a single defect: obesity, hypertension, elevated blood lipids, and insulin resistance together.** Naming the cluster matters because it says the four travel as a set rather than arriving independently.",
      cn: "**代谢综合征（metabolic syndrome）常常是 2 型糖尿病的前奏，而它是一组表现、不是单一缺陷：肥胖、高血压、血脂升高，以及胰岛素抵抗，四者同时出现。**给这一组命名之所以重要，是因为它说明这四样是**结伴而行**的，而不是各自独立地出现。",
      src: "A p.879"
    },
    {
      link_en: "how the diagnosis is actually made, and it is quantitative",
      link_cn: "诊断实际上是怎么做的 —— 而且是定量的",
      en: "**The sensitive criterion is HbA1c, a glucose derivative of haemoglobin that forms in the blood.** Follow why that is the useful measurement: **a blood glucose reading is a snapshot, while HbA1c accumulates and so reflects the average blood glucose over a long period. One measurement therefore reports on weeks, not on this morning.**",
      cn: "**敏感的诊断指标是 HbA1c，一种在血液中形成的血红蛋白的葡萄糖衍生物。**要跟上「为什么它才是有用的测量」这一点：**一次血糖读数只是一张快照，而 HbA1c 会累积，因而反映的是较长时期内血糖的平均值。所以一次测量报告的是好几周，而不是今天早上。**",
      src: "A p.877"
    },
    {
      link_en: "and the confirming test is a controlled challenge",
      link_cn: "而确诊的检查，是一次受控的负荷试验",
      en: "**The glucose-tolerance test confirms it: fast overnight, drink 100 g of glucose, then measure blood glucose every 30 minutes. In a healthy person the level rises to no more than about 9 or 10 mM and little or no glucose appears in the urine.** The design is worth noticing — **the test does not ask what your blood glucose is, it asks how fast the system can put a known load away.**",
      cn: "**葡萄糖耐量试验（glucose-tolerance test）用来确诊：隔夜禁食，喝下 100 g 葡萄糖，然后每 30 分钟测一次血糖。健康人的血糖最高升到约 9–10 mM，尿里几乎没有或完全没有葡萄糖出现。**这个设计值得注意 —— **它问的不是「你的血糖是多少」，而是「这套系统把一份已知的负荷收走要多快」。**",
      src: "A p.877"
    },
    {
      link_en: "and now the part that kills, which is not the sugar",
      link_cn: "接下来是真正会致命的那部分 —— 而它不是糖",
      en: "**Without insulin restraining it, fat is mobilised and oxidised heavily, acetyl-CoA is produced faster than the citric acid cycle can accept it, and the liver converts the excess to ketone bodies.** Here is the link that turns a metabolic fact into an emergency. **Ketone bodies are carboxylic acids: they ionise in the blood and release protons. In uncontrolled diabetes their production can overwhelm the capacity of the blood's bicarbonate buffering system, and the pH falls — that is acidosis, and together with the ketosis it is ketoacidosis, which is potentially fatal.**",
      cn: "**在没有胰岛素约束的情况下，脂肪被大量动员和氧化，乙酰辅酶 A 的产生快过柠檬酸循环所能接受的速度，肝脏把多出来的部分转成酮体。**接下来这一环，把一个代谢事实变成了急症。**酮体是羧酸：它们在血液中电离，放出质子。在未控制的糖尿病中，它们的产生量可以压垮血液碳酸氢盐缓冲体系的容量，pH 随之下降 —— 这就是酸中毒；与酮症合在一起就是酮症酸中毒（ketoacidosis），可能致命。**",
      src: "A p.876–877"
    },
    {
      link_en: "treatment for the first class follows directly from what is missing",
      link_cn: "第一类的治疗，直接由「缺什么」推出",
      en: "**Type 1 requires insulin therapy — the missing hormone supplied from outside — together with careful, lifelong control of the balance between dietary intake and activity.** The balance is the hard part rather than the injection: **an outside supply of insulin cannot sense blood glucose the way a beta cell does, so the timing and the dose have to be matched by hand to what is eaten and what is done.**",
      cn: "**1 型需要胰岛素治疗 —— 从体外补上缺失的那个激素 —— 并且需要终身仔细地控制饮食摄入与活动量之间的平衡。**难的是这个平衡，而不是打针本身：**从外面来的胰岛素无法像 β 细胞那样感知血糖，所以给药的时机和剂量必须由人手动去匹配「吃了什么」和「做了什么」。**",
      src: "A p.876"
    },
    {
      link_en: "and the treatments for the second class are a map of everything else in this chapter",
      link_cn: "而第二类的各种治疗，正是本章其余内容的一张地图",
      en: "**Weight loss, and in some cases bariatric surgery, come first, because reducing the fat store attacks the insulin resistance itself.** Then the drugs, each of which acts through a mechanism met earlier. **Sulfonylureas close the beta cell's ATP-gated potassium channel, forcing insulin secretion — doing by drug exactly what a rise in glucose would have done. Metformin acts through an enzyme called AMP-activated protein kinase, which is the cell's energy sensor. Thiazolidinediones act through PPAR-gamma, a transcriptional regulator of fat handling. And a further class acts on GLP-1, a signal released by the gut that amplifies insulin release after a meal.**",
      cn: "**首选是减重，某些情况下包括减重手术（bariatric surgery）—— 因为缩小脂肪库存正是直接针对胰岛素抵抗本身。**然后是药物，而每一种的作用机制在前面都出现过。**磺脲类关闭 β 细胞的 ATP 门控钾通道，强制胰岛素分泌 —— 用药物做了血糖升高本来会做的那件事。二甲双胍（metformin）通过一个叫 AMP 激活的蛋白激酶的酶起作用 —— 它就是细胞的能量传感器。噻唑烷二酮类（thiazolidinediones）通过 PPAR-γ 这个脂质处理的转录调控因子起作用。而另一类药物作用于 GLP-1 —— 那是肠道释放的、在餐后放大胰岛素释放的一个信号。**",
      src: "A p.878–879"
    },
    {
      link_en: "so what is the one thing to hold from all of this?",
      link_cn: "那么从这一切里要握住的一件事是什么？",
      recall_en: "the axis from the second step, with everything else hung on it",
      recall_cn: "第二步说的那条轴 —— 其余一切都挂在它上面",
      en: "**One name covers a failure of insulin supply and a failure of insulin response, and every difference between the two follows from which end of that axis has broken: what the blood test shows, what the treatment is, and whether obesity is part of the story.** And the acute danger is shared: **in either type, insulin failing to restrain the flow of fat into ketone bodies turns a fuel into an acid load.**",
      cn: "**一个名字底下，一边是胰岛素供给的失效，一边是胰岛素响应的失效；而两者之间的每一处差别，都由「这条轴的哪一端坏了」推出：化验单上看到什么、治疗是什么、以及肥胖是不是故事的一部分。**而急性危险是两者共有的：**无论哪一型，一旦胰岛素约束不住流向酮体的那股脂肪，一种燃料就变成了一份酸负荷。**",
      src: "A p.875–879"
    }
  ],
  terms: [
    { en: "type 1 and type 2 diabetes", cn: "1 型与 2 型糖尿病",
      def_en: "Two failures at opposite ends of one axis. Type 1 (insulin-dependent) is not enough insulin, the beta cells that make it having been lost; it requires insulin therapy plus lifelong control of intake against activity. Type 2 (non-insulin-dependent) is enough insulin that the tissues no longer answer; its hallmark is insulin resistance, and it tracks obesity — 80% of people with it are obese, though most obese people never develop it.",
      def_cn: "同一条轴两端的两种失效。1 型（胰岛素依赖型）是胰岛素不够 —— 制造它的 β 细胞已经丧失；治疗需要补充胰岛素，并终身控制摄入与活动之间的平衡。2 型（非胰岛素依赖型）是胰岛素够而组织不再理它；标志是胰岛素抵抗，并随肥胖上升 —— 患者中 80% 肥胖，尽管大多数肥胖者从不发展成它。" },
    { en: "insulin resistance", cn: "胰岛素抵抗",
      def_en: "A state in which more insulin is needed to produce the same effect. It is what makes type 2 diabetes look different on a blood test from type 1: insulin can be normal or high while glucose is high too.",
      def_cn: "需要更多胰岛素才能产生同样效果的状态。正是它让 2 型糖尿病在化验单上与 1 型看起来不同：胰岛素可以正常甚至偏高，而血糖同时也高。" },
    { en: "HbA1c", cn: "糖化血红蛋白 HbA1c",
      def_en: "A glucose derivative of haemoglobin that forms in the blood, and the sensitive diagnostic criterion for diabetes. It accumulates, so unlike a blood glucose reading — which is a snapshot — it reflects the average blood glucose over a long period: one measurement reports on weeks.",
      def_cn: "在血液中形成的一种血红蛋白葡萄糖衍生物，是糖尿病的敏感诊断指标。它会累积，因此与「只是一张快照」的血糖读数不同，它反映的是较长时期内的平均血糖：一次测量报告的是好几周。" },
    { en: "glucose-tolerance test", cn: "葡萄糖耐量试验",
      def_en: "The confirming test: fast overnight, drink 100 g of glucose, then measure blood glucose every 30 minutes. A healthy person's rises to no more than about 9 to 10 mM, with little or no glucose appearing in the urine. It asks not what the blood glucose is but how fast the system can put a known load away.",
      def_cn: "确诊用的检查：隔夜禁食，喝下 100 g 葡萄糖，之后每 30 分钟测一次血糖。健康人最高升到约 9–10 mM，尿中几乎不出现葡萄糖。它问的不是血糖是多少，而是这套系统把一份已知负荷收走要多快。" },
    { en: "ketoacidosis", cn: "酮症酸中毒",
      def_en: "The acute danger of uncontrolled diabetes, and the link is chemical rather than merely metabolic. Ketone bodies are carboxylic acids: they ionise in the blood and release protons. When their production overwhelms the capacity of the blood's bicarbonate buffering system, the pH falls — acidosis — and together with the ketosis this is ketoacidosis, which is potentially fatal.",
      def_cn: "未控制糖尿病的急性危险，而这一环是化学上的、不只是代谢上的。酮体是羧酸：它们在血中电离并放出质子。当它们的产生量压垮血液碳酸氢盐缓冲体系的容量时，pH 下降 —— 这是酸中毒；与酮症合起来就是酮症酸中毒，可能致命。" },
    { en: "metabolic syndrome", cn: "代谢综合征",
      def_en: "The frequent prelude to type 2 diabetes, and a cluster rather than a single defect: obesity, hypertension, elevated blood lipids and insulin resistance together. Naming the cluster says that the four travel as a set rather than arriving independently.",
      def_cn: "2 型糖尿病常见的前奏，是一组表现而非单一缺陷：肥胖、高血压、血脂升高与胰岛素抵抗同时出现。给这一组命名，说明这四样是结伴而行的，而不是各自独立出现的。" }
  ]
};
