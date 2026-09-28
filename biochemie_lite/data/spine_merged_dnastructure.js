/* Merged spines — DNA supercoiling and chromosome structure. 速通简洁版, ONE spine
   per TOPIC.

   These two topics have one member node each, both Lehninger (L-24-2-1 and L-24-3-1),
   and no Czech partner node to fold in. So the merge here is a conversion rather than
   a synthesis: the substance, the numbers and every `src` of the source spines are
   kept, and the prose is rewritten so that each step is ONE claim in order. Lehninger
   chapters 22–26 are not extracted anywhere in this repo, so the source spines are the
   only source — nothing has been added to them, and anything that had to be added to
   make a chain readable would carry `beyond: true`.

   The two chains are written to be read one after the other. Supercoiling ends on the
   two shapes underwinding can take and on the question of where a eukaryote's
   underwinding comes from; chromosome structure answers it at its fifth step, and
   reaches back again at the loop domains and at the condensins. Both reach into
   key:dna-replication, where gyrase works ahead of a fork and topoisomerase IV unlinks
   the daughter chromosomes.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------ DNA 超螺旋 ---- */
window.BIOLITE_SPINE["key:dna-supercoiling"] = {
  assumed: ["DNA", "RNA", "base", "base pair", "nucleotide", "protein", "enzyme", "ATP",
            "hydrogen bond", "double helix", "base stacking", "gene", "cell",
            "chromosome", "bacterium", "bacteria", "eukaryote", "nucleus", "replication",
            "transcription", "plasmid", "electrophoresis", "agarose", "gel",
            "tyrosine", "hydrolysis", "nucleophile", "duplex", "helix", "nick",
            "Escherichia coli", "E. coli", "soap film", "contour length"],
  nodeTitle_en: "DNA supercoiling",
  nodeTitle_cn: "DNA 超螺旋",
  title_en: "Cellular DNA is wound too loosely on purpose — how that looseness is measured exactly, and which enzymes pay to keep it there",
  title_cn: "细胞里的 DNA 是被刻意拧松的 —— 这种松怎么被精确度量，以及是哪些酶花钱把它维持在那里",
  steps: [
    {
      en: "A bacterial chromosome is a closed circle: both strands run the whole way round with no free ends. Purify one away from every protein and it still does not lie flat — it stays coiled, and DNA taken from a given kind of cell comes back to the same amount of coiling every time. **Coiling of the helix axis on itself is supercoiling, and a purified circle coming back to the same amount of it every time shows that a cell puts it there deliberately.** Squeezing a long molecule into a small space would not give a reproducible number.",
      cn: "细菌的染色体是一个闭合环状分子：两条链都首尾相接、没有游离末端。把它从所有蛋白里纯化出来，它仍然不是摊平的 —— 它依然盘绕着，而且同一种细胞来源的 DNA，每次测到的盘绕程度都一样。**螺旋轴自身再盘绕起来就叫超螺旋（supercoiling）；纯化出来的环每次都回到同样的盘绕程度，这说明它是细胞主动放进去的。** 若只是被塞进小空间时顺带产生的，就不会得到一个可重复的数字。",
      src: "A p.891–892"
    },
    {
      link_en: "coiled by how much, and loose or tight compared with what?",
      link_cn: "盘绕多少？相对于什么算松、算紧？",
      en: "Relaxed B-form DNA in solution has 10.5 base pairs per helical turn, and that value is the reference everything here is measured against. **Cellular DNA is underwound: over its length it carries about 5 to 7% fewer helical turns than 10.5 bp per turn calls for.** Too few turns for its length leaves the molecule strained, in the ordinary mechanical sense.",
      cn: "溶液中松弛的 B 型 DNA 是每圈 10.5 个碱基对，一切度量都以它为参照。**细胞里的 DNA 是欠旋（underwound）的：按它的长度算，螺旋圈数比「每圈 10.5 bp」应有的少大约 5–7%，于是这个分子处在力学意义上的应变状态。**",
      src: "A p.892"
    },
    {
      link_en: "strain has to go somewhere, and there are only two places for it",
      link_cn: "应变总得有个去处，而去处只有两个",
      en: "Take 84 bp of relaxed circular DNA: it holds eight helical turns. Remove one and the same 84 bp must accommodate seven, which is 12.0 bp per turn instead of 10.5. That can be absorbed either by coiling the axis of the molecule into a supercoil or by pulling the two strands apart over roughly 10 bp. **Coiling the axis into a supercoil is the route taken almost every time, because bending an axis costs less energy than breaking hydrogen bonds and base stacking.**",
      cn: "拿 84 bp 的松弛环状 DNA：它有 8 圈。去掉 1 圈，同样这 84 bp 就只能容纳 7 圈，也就是每圈 12.0 bp，而不是 10.5。这份应变有两种吸收方式：把分子自身的轴盘绕成一个超螺旋，或者在大约 10 bp 的范围内把两条链分开。**欠旋几乎总是靠把轴盘绕成超螺旋来吸收，因为把轴弯起来花的能量，比拆掉维系两条链的氢键与碱基堆积要少。**",
      src: "A p.892"
    },
    {
      link_en: "and now what the whole arrangement is for",
      link_cn: "接下来才是这整套安排的用处",
      en: "Replication and transcription both have to open the helix, and opening it costs energy. **An underwound molecule has paid part of that cost in advance: its strands separate more easily anywhere along it, so the strain is energy the cell bought with ATP.** That is why a cell actively underwinds its own DNA instead of leaving it relaxed.",
      cn: "复制和转录都必须打开双螺旋，而打开是要花能量的。**欠旋的分子等于预付了其中一部分：欠旋 DNA 上任何一个局部要把两条链分开都更容易 —— 这份应变就是细胞早先用 ATP 买下的储存能量。** 这就是每个细胞都主动把自己的 DNA 拧松、而不让它保持松弛态的原因。",
      src: "A p.892",
      see: [{ id: "L-25-1-1", en: "the replication fork that has to open the helix, and what runs at it", cn: "必须把双螺旋打开的复制叉，以及在它那里运转的东西" }]
    },
    {
      link_en: "an effect worth spending ATP on is worth measuring exactly, and topology supplies an exact number",
      link_cn: "值得花 ATP 去做的事，就值得精确度量 —— 拓扑学给出了一个精确的数字",
      en: "Take one strand of a closed circle and imagine a soap film stretched across it, the way a film sits across a bubble wand. **The linking number, written Lk, is the number of times the other strand pierces that film, and it is always a whole number.** It is counted as positive for the right-handed helix DNA actually forms.",
      cn: "取闭合环状 DNA 的一条链，想象有一张肥皂膜张在它围出的圈上，就像吹泡泡的圈上那层膜。**连环数（linking number，记作 Lk）就是另一条链穿过这张膜的次数，而且它永远是整数。** 对 DNA 实际采取的右手螺旋，按约定记为正数。",
      src: "A p.893"
    },
    {
      link_en: "why that particular count is the useful one",
      link_cn: "为什么偏偏是这个数字有用",
      en: "Lk does not change when the molecule bends, wobbles about with heat, or has a protein bind to it. **Lk changes only if a strand is broken and rejoined, which makes it a topological invariant: no amount of pushing a DNA circle around alters it.** A break in one strand — a nick — leaves Lk undefined altogether, because a nicked circle could in principle be unwound completely.",
      cn: "分子弯折、受热晃动、结合上蛋白，Lk 都不变。**Lk 只有在一条链被打断再接回去时才会改变 —— 这就是说它是一个拓扑不变量：怎么摆弄这个环都改不了它。** 而一条链上的缺口（nick，即单链断口）会让 Lk 干脆没有定义，因为一个带缺口的环原则上可以被整个解开。",
      src: "A p.893–894"
    },
    {
      link_en: "from a count to a number that can be compared between molecules",
      link_cn: "从「一个计数」到「可以跨分子比较的数」",
      recall_en: "the 5 to 7% from four steps up, now with a definition behind it",
      recall_cn: "上面第四步那个 5–7%，现在有了严格定义",
      en: "Relaxed DNA has Lk0 = bp/10.5, so a 4,200 bp circle has Lk0 = 400, and underwinding is the difference, written ΔLk = Lk − Lk0. Superhelical density, written sigma, is that difference as a fraction, sigma = ΔLk/Lk0, which is what makes circles of different sizes comparable. The same 4,200 bp circle found at Lk = 374 has ΔLk = −26 and sigma = −0.065. **Real cellular DNA sits at sigma = −0.05 to −0.07, which is the 5 to 7% underwinding named above, now as a measured number rather than a description.**",
      cn: "松弛 DNA 的 Lk₀ = bp/10.5，所以 4,200 bp 的环 Lk₀ = 400；欠旋的量就是差值 ΔLk = Lk − Lk₀。超螺旋密度（superhelical density，记作 sigma）就是把这个差值化成比例：sigma = ΔLk/Lk₀ —— 有了它，不同大小的环才能互相比较。同一个 4,200 bp 的环若测得 Lk = 374，则 ΔLk = −26，sigma = −0.065。**真实细胞 DNA 落在 sigma = −0.05 到 −0.07，这正是前面那个 5–7% 的欠旋，现在成了一个可测的数字。**",
      src: "A p.894, Worked Example"
    },
    {
      link_en: "and the sign of that number carries the whole vocabulary",
      link_cn: "而这个数的正负号，承载了整套术语",
      en: "Sigma carries a sign, and the sign carries the vocabulary. **Negative sigma means underwound, and underwinding is what negative supercoiling means; the same circle at Lk = 412 has sigma = +0.03, overwound and positively supercoiled.** The axis of an overwound molecule twists the mirror-image way from an underwound one.",
      cn: "sigma 带一个正负号，而这个号承载了整套术语。**sigma 为负就是欠旋，而欠旋正是「负超螺旋」的含义；同一个 4,200 bp 的环若 Lk = 412，则 sigma = +0.03，是过旋（overwound）、正超螺旋。** 过旋分子的轴，向着与欠旋分子相反的镜像方向拧。",
      src: "A p.894–895"
    },
    {
      link_en: "and a difference in linking number alone is visible on a gel",
      link_cn: "而仅仅差一个连环数，在凝胶上就看得见",
      en: "Two DNA molecules with identical sequence and identical length that differ only in linking number are called topoisomers. **Topoisomers separate on an agarose gel because the more supercoiled molecule is more compact and travels faster, and a difference of one in Lk is enough to see** — so the bands on such a gel are individual linking numbers.",
      cn: "序列相同、长度相同、只差一个连环数的两个分子，叫拓扑异构体（topoisomers）。**拓扑异构体能在琼脂糖凝胶上分开：超螺旋越多的分子越紧凑、跑得越快，Lk 只差 1 也看得出来** —— 所以这样一张胶上的每一条带，就是一个个具体的连环数。",
      src: "A p.894–895"
    },
    {
      link_en: "Lk changes only by breaking a strand, so changing it needs an enzyme — and there are exactly two ways to build one",
      link_cn: "Lk 只有靠打断链才能改变，所以改变它必须有酶 —— 而造这种酶恰好只有两种办法",
      en: "**Enzymes that change linking number are topoisomerases; a type I enzyme nicks one strand, passes the other through the gap and reseals, changing Lk by 1 and using no ATP.** No ATP is needed because an active-site tyrosine attacks the backbone and breaks it while holding on to that bond's energy, and a second attack puts the bond back. E. coli topoisomerases I and III work this way. Topoisomerases are classified by how many strands they cut.",
      cn: "**能改变连环数的酶叫拓扑异构酶（topoisomerase）；其中 I 型在一条链上切开缺口，让另一条完好的链从缺口穿过去再封回，每次事件 Lk 改变 1，而且不需要 ATP。** 不需要 ATP，是因为活性中心的酪氨酸进攻并打断骨架，把那个键的能量攥在手里，第二次进攻再把键装回去。大肠杆菌的拓扑异构酶 I 和 III 就是这样工作的。这类酶是按「切几条链」来分类的。",
      src: "A p.895"
    },
    {
      link_en: "the other way to build one",
      link_cn: "另一种造法",
      recall_en: "the same three moves as a type I enzyme — cut, pass through, reseal — but on both strands at once",
      recall_cn: "动作和 I 型一样是「切开、穿过、封回」，只是两条链一起切",
      en: "**A type II topoisomerase cuts both strands of one duplex, passes an entire intact duplex through the gap and reseals it, so Lk changes by 2 and this class hydrolyses ATP.** The eukaryotic enzyme spends two ATP per cycle, which fits the far larger operation of threading a whole double helix through a hole.",
      cn: "**II 型拓扑异构酶把一段双链的两条链都切断，让一整段完好的双链从这个断口穿过去，再封回：每次事件 Lk 改变 2，而这一类确实要水解 ATP。** 真核酶每循环水解两个 ATP —— 这与「把一整条双螺旋穿过一个洞」这个大得多的动作相称。",
      src: "A p.895"
    },
    {
      link_en: "so which of the two puts the underwinding in?",
      link_cn: "那么，欠旋究竟是谁放进去的？",
      en: "In E. coli the type I enzymes relax DNA by removing negative supercoils, which raises Lk. **DNA gyrase is the E. coli type II enzyme and the only one that spends ATP to put negative supercoils in; a bacterium's resting sigma is the balance between gyrase and the type I enzymes.** Eukaryotic type II enzymes, IIalpha and IIbeta, cannot underwind DNA at all — they only relax supercoils of either sign, which leaves open where a eukaryote's underwinding comes from.",
      cn: "在大肠杆菌里，I 型酶通过移除负超螺旋来松弛 DNA，使 Lk 升高。**DNA 促旋酶（DNA gyrase）是大肠杆菌的 II 型酶，也是花 ATP 把负超螺旋放进去的那一个；细菌静息状态的 sigma，就是促旋酶「加」与 I 型酶「减」之间的平衡。** 而真核的 II 型酶（IIα、IIβ）根本不能让 DNA 欠旋，它们只能松弛正负两种超螺旋 —— 那真核细胞的欠旋是哪来的？",
      src: "A p.895–896",
      see: [{ id: "L-24-3-1", en: "where a eukaryote's underwinding comes from — the nucleosome", cn: "真核 DNA 的欠旋来自哪里 —— 核小体" }]
    },
    {
      link_en: "the type II mechanism also solves a problem it was not built for",
      link_cn: "II 型的机制还顺手解决了一个它本不是为之设计的问题",
      en: "Two circular DNA molecules can end up threaded through each other so that neither can be pulled free without breaking DNA, and such an interlinked pair is called a catenane. **Passing one whole duplex through a break in another works just as well when the two duplexes belong to different circles, so a type II topoisomerase can unlink a catenane.** Bacterial topoisomerase IV does little else: at the end of replication the two daughter chromosomes come out interlinked, and they must be unlinked before the cell can divide.",
      cn: "两个环状 DNA 分子可能互相套住，谁也拔不出来，除非把 DNA 切断；这样一对互锁的环叫连环体（catenane）。**「把一整段双链从另一段的断口穿过去」这个动作，在两段双链分属两个不同的环时同样管用，所以 II 型拓扑异构酶可以把连环体解开。** 细菌的拓扑异构酶 IV 几乎只干这一件事：复制结束时两条子代染色体是互锁着出来的，必须先解开，细胞才能分裂。",
      src: "A p.896",
      see: [{ id: "L-25-1-1", en: "the end of replication, where the daughter chromosomes come out interlinked", cn: "复制的收尾 —— 子代染色体正是在那里互锁着出来" }]
    },
    {
      link_en: "one thing left: the same underwinding can take two shapes, and only one of them packages anything",
      link_cn: "还剩一件事：同样的欠旋可以有两种形状，而只有一种真能起到包装作用",
      en: "Free in solution with no protein on it, supercoiled DNA takes the plectonemic shape: extended, narrow, branched right-handed coils, whose axis including its branches runs to about 40% of the DNA's contour length — the shape seen in a picture of a purified plasmid, and not compact enough to package a cell. The same underwinding can instead take the solenoidal shape, tight left-handed turns around an imaginary tube like a hose wound on a reel, and the two are readily interconvertible. **Solenoidal supercoiling is far more compact, holds up only while protein binds it, and is the form that achieves the compaction inside a nucleus.**",
      cn: "在溶液中、身上没有蛋白时，超螺旋 DNA 采取麻花形（plectonemic）：伸展、细长、有分支的右手盘绕，超螺旋轴含分支的长度约为 DNA 全长的 40% —— 这就是纯化质粒照片上看到的形状，而它的紧凑程度不足以包装一个细胞。同样的欠旋也可以采取螺线管形（solenoidal）：围绕一根假想管子的紧密左手盘绕，像花园水管绕在卷轴上；两种形状可以互相转换。**螺线管形紧凑得多，只有在蛋白结合稳定它时才成立，而真正在细胞核里完成压缩的正是这一种形状。**",
      src: "A p.897–898",
      see: [{ id: "L-24-3-1", en: "the protein that stabilises the solenoidal form — the histone octamer", cn: "稳定螺线管形的那个蛋白 —— 组蛋白八聚体" }]
    }
  ],
  terms: [
    { en: "supercoiling", cn: "超螺旋",
      def_en: "Coiling of the double-helix axis upon itself, on top of the coiling of the two strands around each other. In cells it reflects underwinding relative to relaxed B-form DNA, and it is actively created and maintained by enzymes — a stored strain the cell has paid for, and not a packaging by-product.",
      def_cn: "在两条链彼此缠绕之上，双螺旋的轴自身再盘绕起来。在细胞里它反映的是相对于松弛 B 型 DNA 的欠旋，由酶主动制造并维持 —— 是细胞花钱买下的一份储存应变，而不是包装的副产物。" },
    { en: "underwinding", cn: "欠旋",
      def_en: "Carrying fewer helical turns than the relaxed value of 10.5 bp per turn calls for. Cellular DNA is 5 to 7% underwound. The consequence is that separating the two strands at any local spot is easier, which is exactly what replication and transcription need.",
      def_cn: "所带的螺旋圈数少于「每圈 10.5 bp」这一松弛值应有的数目。细胞里的 DNA 欠旋 5–7%。后果是：在任何一个局部把两条链分开都更容易 —— 而这正是复制和转录需要的。" },
    { en: "linking number (Lk)", cn: "连环数 Lk",
      def_en: "For a closed-circular duplex, the number of times one strand pierces an imaginary surface bounded by the other. An integer, positive for a right-handed helix. Invariant under bending, thermal motion and protein binding; it changes only when a strand is transiently broken and rejoined, and it is undefined for a nicked circle.",
      def_cn: "对闭合环状双链而言，一条链穿过以另一条链为边界的假想曲面的次数。是整数，右手螺旋取正。弯折、热运动、蛋白结合都改变不了它；只有当一条链被短暂打断又接回时它才改变，而对带缺口的环它没有定义。" },
    { en: "superhelical density (sigma)", cn: "超螺旋密度 sigma",
      def_en: "sigma = (Lk − Lk0)/Lk0 — the fraction of helical turns removed relative to relaxed DNA, so that molecules of different lengths can be compared. Real cellular DNA sits at −0.05 to −0.07; a negative value means underwound and negatively supercoiled, a positive value overwound and positively supercoiled.",
      def_cn: "sigma =（Lk − Lk₀）/Lk₀ —— 相对于松弛 DNA 被抽掉的螺旋圈数所占的比例，有了它不同长度的分子才能比较。真实细胞 DNA 落在 −0.05 到 −0.07；负值表示欠旋、负超螺旋，正值表示过旋、正超螺旋。" },
    { en: "topoisomers", cn: "拓扑异构体",
      def_en: "Two forms of one circular DNA with the same sequence and the same number of base pairs, differing only in linking number. They separate on an agarose gel because the more supercoiled form is more compact and migrates faster; a difference of one linking number is enough to see.",
      def_cn: "同一个环状 DNA 的两种形式，序列相同、碱基对数目相同，只在连环数上不同。它们能在琼脂糖凝胶上分开，因为超螺旋更多的那个更紧凑、跑得更快；连环数只差 1 也看得出来。" },
    { en: "type I topoisomerase", cn: "I 型拓扑异构酶",
      def_en: "Nicks one strand, passes the unbroken strand through the gap, and reseals — changing linking number by 1 per event and needing no ATP, because an active-site tyrosine keeps the broken bond's energy and a second nucleophilic attack restores it. E. coli topoisomerases I and III relax negative supercoils this way.",
      def_cn: "在一条链上切开缺口，让完好的那条从缺口穿过去，再封回 —— 每次事件连环数改变 1，且不需要 ATP，因为活性中心的酪氨酸攥着被打断那个键的能量，第二次亲核进攻再把它还原。大肠杆菌的拓扑异构酶 I 和 III 就是这样松弛负超螺旋的。" },
    { en: "DNA gyrase", cn: "DNA 促旋酶",
      def_en: "The bacterial type II topoisomerase: it breaks both strands of a duplex, passes an intact duplex through, and reseals, changing linking number by 2 and hydrolysing ATP. It is the only enzyme class that actively introduces negative supercoils; eukaryotic type II enzymes can only relax. A bacterium's resting superhelical density is the balance between gyrase and the type I enzymes.",
      def_cn: "细菌的 II 型拓扑异构酶：把一段双链的两条链都切断，让一整段完好的双链穿过去，再封回，连环数改变 2 并水解 ATP。它是唯一会主动引入负超螺旋的一类酶；真核的 II 型酶只能松弛。细菌静息的超螺旋密度，就是促旋酶与 I 型酶之间的平衡。" },
    { en: "catenane", cn: "连环体",
      def_en: "Two circular DNA molecules topologically interlinked, so that neither can be pulled free without breaking DNA. A type II topoisomerase undoes the link by passing a segment of one circle through a transient double-strand break in the other; bacterial topoisomerase IV is dedicated to doing this to the interlinked daughter chromosomes left at the end of replication.",
      def_cn: "两个在拓扑上互相套住的环状 DNA 分子，不切断 DNA 就谁也拔不出来。II 型拓扑异构酶把其中一个环的一段，从另一个环上短暂的双链断口里穿过去，从而解开；细菌的拓扑异构酶 IV 专门对复制结束时留下的互锁子代染色体做这件事。" },
    { en: "plectonemic and solenoidal supercoiling", cn: "麻花形与螺线管形超螺旋",
      def_en: "Two shapes the same negative supercoiling can adopt. Plectonemic: extended, narrow, branched right-handed coils, the stable form for protein-free DNA in solution, and not compact enough to package a cell. Solenoidal: tight left-handed turns around an imaginary tube, much more compact, stable only when protein binds it — the form that actually packages DNA in a nucleus.",
      def_cn: "同样的负超螺旋可以采取的两种形状。麻花形：伸展、细长、有分支的右手盘绕，是溶液中无蛋白 DNA 的稳定形式，紧凑程度不足以包装一个细胞。螺线管形：围绕假想管子的紧密左手盘绕，紧凑得多，只有蛋白结合时才稳定 —— 真正在细胞核里包装 DNA 的就是它。" }
  ]
};

/* -------------------------------------------------------- 染色体结构与染色质 ---- */
/* This chain answers, at its fifth step, the question the supercoiling chain ends
   on: a eukaryote has no gyrase, so where does its underwinding come from? The
   answer — the nucleosome wrap IS the underwinding — is the hinge between the two
   topics, and both the loop domains and the condensins reach back to it again. */
window.BIOLITE_SPINE["key:chromosome-structure"] = {
  assumed: ["DNA", "RNA", "base pair", "nucleotide", "protein", "enzyme", "ATP", "gene",
            "cell", "nucleus", "eukaryote", "bacterium", "bacteria", "replication",
            "transcription", "chromosome", "genome", "mitosis", "meiosis", "interphase",
            "prophase", "metaphase", "anaphase", "spindle", "centromere", "antibody",
            "arginine", "lysine", "phosphate", "phosphorylation", "plasma membrane",
            "amino acid", "light microscope", "minor groove", "double helix",
            "supercoiling", "underwinding", "linking number", "topoisomerase",
            "DNA gyrase", "duplex", "helix", "nuclease", "DNase", "Escherichia coli",
            "E. coli", "anthrax", "antibiotic", "cancer", "tumour", "chemotherapy",
            "coiled coil", "sequencing", "X chromosome", "dosage compensation"],
  nodeTitle_en: "Chromosome structure and chromatin",
  nodeTitle_cn: "染色体结构与染色质",
  title_en: "Folding 105 µm of DNA into a 5 µm nucleus without tying a knot — and finding that the first fold is where eukaryotic underwinding comes from",
  title_cn: "把 105 µm 的 DNA 折进 5 µm 的细胞核而不打结 —— 并且发现第一道折叠正是真核 DNA 欠旋的来源",
  steps: [
    {
      en: "The word chromosome carries two meanings and both are in use: one is the nucleic acid molecule that holds a cell's genetic information, the other is the darkly stained bodies visible down a light microscope in a dividing nucleus. Between divisions there is nothing chromosome-shaped to see — the material is amorphous through interphase, is duplicated during it into two attached copies called sister chromatids, and condenses into photographable pairs only at prophase of mitosis. **That material is called chromatin, and it is protein and DNA in roughly equal proportions by mass plus a substantial amount of RNA, which is a genuine structural component.**",
      cn: "「染色体」这个词有两个含义，而且两个都在用：一个是携带细胞遗传信息的那个核酸分子；另一个是分裂中的细胞核经染色后、在光学显微镜下看到的那些深色小体。在两次分裂之间根本看不到染色体形状的东西 —— 这些物质在整个间期都是无定形的，并在间期里被复制成两份彼此贴在一起的拷贝，叫姐妹染色单体（sister chromatids），直到有丝分裂前期才凝聚成可以拍照的一对对。**这些物质叫染色质（chromatin），按质量算蛋白与 DNA 大致各半，外加相当量的 RNA —— 这些 RNA 是真正的结构组分。**",
      src: "A p.898–899, Fig. 24-22"
    },
    {
      link_en: "and why chromatin needs a structure at all is a matter of size",
      link_cn: "而染色质之所以非得有一套结构，纯粹是尺寸问题",
      en: "**One human chromosome's DNA is about 105 µm long and the nucleus it must fit into is 5 to 10 µm across — a 10,000-fold compaction, reached by several levels of folding.** Every structure named below is one of those levels.",
      cn: "**一条人类染色体的 DNA 大约长 105 µm，而它必须装进去的细胞核直径只有 5–10 µm —— 这是一万倍的压缩，靠若干层有组织的折叠一层套一层地叠起来。** 下面讲的每一个结构，都是其中的一层。",
      src: "A p.900"
    },
    {
      link_en: "the lowest level is built out of one family of proteins, and their chemistry says what they are for",
      link_cn: "最底下那一层由一类蛋白搭成，而它们的化学性质立刻说明了它们是干什么的",
      en: "Histones are small proteins, Mr 11,000 to 21,000, present in the chromatin of every eukaryotic cell, and they come in five classes: H1, H2A, H2B, H3 and H4. Arginine and lysine are protonated and positively charged at cellular pH. **One residue in four of a histone is arginine or lysine, so it binds the DNA backbone electrostatically; only 2 of H4's 102 residues differ between peas and cows.** H4 differs by only 8 residues between humans and yeast, so nearly every position in it is load-bearing, while H1, H2A and H2B vary noticeably more between species, which is where the adjustable work sits.",
      cn: "组蛋白（histones）是一类小蛋白，分子量 11,000–21,000，存在于每一种真核细胞的染色质中，共五类：H1、H2A、H2B、H3、H4。**组蛋白约每四个残基就有一个是精氨酸或赖氨酸，在细胞 pH 下带正电，以静电方式贴着带负电的 DNA 骨架；H4 的 102 个残基里，豌豆与牛之间只差 2 个。** 人与酵母之间的 H4 也只差 8 个，说明它几乎每个位置都在承重；而 H1、H2A、H2B 的种间差异明显更大，可调节的那部分工作就在它们身上。",
      src: "A p.899, Table 24-5"
    },
    {
      link_en: "eight of those histones plus a fixed length of DNA make the repeating unit",
      link_cn: "其中八个组蛋白加上一段固定长度的 DNA，构成了重复单位",
      en: "Partially unfold a chromosome and DNA appears bound to regularly spaced protein beads, the beads-on-a-string picture. One bead plus the DNA joining it to the next is a nucleosome. **The bead is an octamer of two copies each of H2A, H2B, H3 and H4, with 146 bp of DNA wrapped 1.67 times around it as a left-handed solenoidal supercoil, in a repeat of about 200 bp.** What is left of that 200 bp repeat between beads is linker DNA, bound by histone H1. The 146 is measured rather than estimated: linker DNA is exposed while core DNA is protected, so a brief digestion with a DNase chews the linker away and leaves particles carrying exactly 146 bp. The beads are 10 to 11 nm across, which is why this first level of packing is also called the 10 nm fiber, and wrapping DNA round one core shortens it about sevenfold.",
      cn: "把染色体部分展开，会看到 DNA 结合在一串规则排列的蛋白小球上，也就是「串珠」的图像。一个小球加上连到下一个球的那段 DNA，就是一个核小体（nucleosome）。**小球是 H2A、H2B、H3、H4 各两份组成的八聚体，146 bp 的 DNA 以左手螺线管形超螺旋在它外面缠 1.67 圈，球到球的重复长度约 200 bp。** 这 200 bp 里球与球之间剩下的那段叫连接 DNA（linker DNA），由组蛋白 H1 结合。146 这个数是测出来的：连接 DNA 暴露在外、核心 DNA 受保护，所以用 DNase 短暂消化会把连接段啃掉，留下恰好携带 146 bp 的颗粒。小球直径 10–11 nm，所以这第一层包装也叫 10 nm 纤维；DNA 绕上一个核心，长度缩短约七倍。",
      src: "A p.900–901, Fig. 24-24"
    },
    {
      link_en: "and that wrap answers the question the supercoiling chain ends on",
      link_cn: "而这一圈缠绕，正好回答了超螺旋那条链留下的问题",
      recall_en: "eukaryotic type II topoisomerases can only relax supercoils, so where does a eukaryote's underwinding come from?",
      recall_cn: "真核 II 型拓扑异构酶只会松弛超螺旋，那真核 DNA 的欠旋是哪来的？",
      en: "Winding DNA that tightly round an octamer requires removing about one helical turn, so binding creates one negative solenoidal supercoil — exactly the protein-stabilised shape underwinding takes. Binding breaks no strand, so it cannot change the linking number, and a compensating positive supercoil appears in the free DNA nearby, leaving the net change at zero; a eukaryotic topoisomerase then relaxes that positive supercoil, which is all it can do anyway. **The negative supercoil cannot be relaxed because the histones hold it, so the net linking number falls by one per nucleosome: packaging DNA and underwinding it are one event.** The prediction was tested — assembling chromatin in a tube from purified histones and closed-circular DNA requires a topoisomerase to be present.",
      cn: "把 DNA 这么紧地绕在八聚体上，需要抽掉大约一个螺旋圈，所以结合就制造出一个负的螺线管形超螺旋 —— 正是欠旋在有蛋白稳定时采取的那种形状。结合过程不打断任何一条链，所以它改变不了连环数；于是附近游离的 DNA 上出现一个补偿性的正超螺旋，净变化仍为零，随后真核拓扑异构酶把那个正超螺旋松弛掉 —— 反正它也只会干这个。**那个负超螺旋松不掉，因为组蛋白攥着它，于是每个核小体让净连环数减 1：在真核细胞里，「包装 DNA」与「让 DNA 欠旋」是同一件事。** 这个推论被检验过 —— 在试管里用纯化组蛋白和闭合环状 DNA 组装染色质，必须有拓扑异构酶在场才行。",
      src: "A p.901, Fig. 24-25",
      see: [{ id: "L-24-2-1", en: "supercoiling and linking number, and why gyrase has no eukaryotic counterpart", cn: "超螺旋与连环数，以及为什么促旋酶在真核里没有对应物" }]
    },
    {
      link_en: "where along the DNA does a core sit, and why there?",
      link_cn: "一个核心究竟落在 DNA 的哪一段上？为什么是那里？",
      en: "Nucleosome positions are not random, and the reason is mechanical rather than informational: bending DNA tightly round a core means compressing its minor groove, which a cluster of two or three A=T base pairs makes easy and a run of G≡C resists, so the sequence preference is a stiffness map. **Cores bind best where AA, AT or TT dinucleotides recur at 10 bp intervals: that spacing puts a flexible step on the same face of the helix every turn, so bends add up.** This accounts for up to half of histone positions in living cells — enough to show that sequence really does position nucleosomes, and far from enough to predict them; the rest is credited to non-histone proteins that bind specific sites and nucleate a core beside them.",
      cn: "核小体的位置不是随机的，而原因是力学上的、不是信息上的：要把 DNA 紧紧弯绕在核心上，就得压缩它的小沟，而两三个连续的 A=T 碱基对让小沟容易被压缩、一串 G≡C 则抗拒 —— 所以这里的序列偏好是一张柔韧度地图。**当 AA、AT 或 TT 二核苷酸每隔 10 bp 反复出现时，核心结合得最好：这个间距让每一圈的易弯位点都落在螺旋的同一面上，于是弯曲叠加而不是互相抵消。** 这可以解释活细胞中多达一半的组蛋白位置 —— 足以证明序列确实在定位核小体，又远不足以预测它们；其余归功于那些结合特定位点、并在旁边引发核心组装的非组蛋白蛋白质。",
      src: "A p.901–902, Fig. 24-26"
    },
    {
      link_en: "a core is not a smooth ball — parts of the histones stick out of it",
      link_cn: "核心并不是一个光滑的球 —— 组蛋白有一部分伸在外面",
      en: "The amino-terminal ends of the histones extend out of the particle, some threading between the two DNA coils through holes where the minor grooves of adjacent turns line up. **Histone tails are intrinsically disordered and make the contacts between neighbouring nucleosomes, which is why a chemical mark on a tail changes how tightly a region packs.** Assembly follows a fixed order — a tetramer of two H3 and two H4 binds first, then two H2A-H2B dimers — carried out by dedicated histone chaperones, and one of them, chromatin assembly factor 1, binds a core component of the replication machinery, so new nucleosomes are laid down in step with replication.",
      cn: "组蛋白的氨基端伸出颗粒之外，有些还从相邻螺旋圈小沟对齐处形成的孔洞里穿到两圈 DNA 之间。**这些组蛋白尾巴是内在无序的，而且正是它们构成一个核小体与相邻核小体之间的接触 —— 所以在尾巴上加一个化学标记，会改变这一段堆得多紧。** 组装有固定顺序 —— 先是两个 H3 与两个 H4 组成的四聚体结合，然后是两个 H2A–H2B 二聚体 —— 由专门的组蛋白伴侣完成；其中的染色质组装因子 1（CAF1）直接结合复制机器的一个核心组分，所以新核小体的铺设与复制同步进行。",
      src: "A p.901–902",
      see: [{ id: "L-25-1-1", en: "the replication machinery those new nucleosomes keep step with", cn: "新核小体与之同步的那台复制机器" }]
    },
    {
      link_en: "and swapping a core histone for an alternative version marks a region for a purpose",
      link_cn: "而把某个核心组蛋白换成一个替代版本，等于给这段区域打上用途标记",
      en: "**Information passed to daughter cells but not written in the DNA sequence is epigenetic information: covalent marks on histone tails, plus where histone variants are placed** — alternative forms of the core histones, put in place by dedicated deposition complexes. Four are worth knowing by what they mark: H3.3 and H2AZ sit where transcription is happening, H2AZ keeping a region open by impeding the nucleosome-to-nucleosome contacts that compaction needs; H2AX marks damage, being phosphorylated at Ser139 beside a break in both DNA strands, and blocking that phosphorylation stops repair complexes assembling; CENPA is the H3 variant found at centromeres. Deleting the H2AZ gene is lethal in mammals, as is deleting CENPA in mice. Where a variant sits genome-wide is read out by ChIP-Seq: digest chromatin so the exposed linker is cut while wrapped DNA survives, pull down the nucleosomes carrying the variant with an antibody against it, and sequence the DNA that comes down with them. This counts as heredity because the marks are not wiped at cell division or at meiosis.",
      cn: "**不写在 DNA 序列里、却能传给子细胞或后代的信息叫表观遗传信息，其中大部分是组蛋白尾巴上的共价标记，加上组蛋白变体的安放位置** —— 组蛋白变体就是核心组蛋白的替代形式，由专门的沉积复合物放到位。有四个值得按「它标记什么」来记：H3.3 与 H2AZ 位于正在转录的区域，H2AZ 通过妨碍压缩所需的核小体间接触，把该区域维持在打开状态；H2AX 标记损伤 —— 在 DNA 两条链都断开的断口旁，它的 Ser139 被磷酸化，阻断这个磷酸化，修复复合物就装不起来；CENPA 是着丝粒处的 H3 变体。哺乳动物中敲掉 H2AZ 基因是致死的，小鼠中敲掉 CENPA 也是。某个变体在全基因组上落在哪里，靠 ChIP-Seq 读出来：把染色质消化到暴露的连接段被切断、而缠绕着的那段存活下来，用针对该变体的抗体把带它的核小体沉下来，再测随之下来的 DNA 的序列。这之所以算遗传，是因为这些标记在细胞分裂和减数分裂时不会被抹去。",
      src: "A p.904–905, Box 24-1"
    },
    {
      link_en: "sevenfold from a nucleosome against ten-thousandfold required",
      link_cn: "核小体给出七倍，而需要的是一万倍",
      en: "**Wrapping round a core compacts DNA about sevenfold while a chromosome achieves more than 10,000-fold, so higher levels of organisation must exist above the nucleosome.** Those levels are not yet fully understood. One of them is visible: certain DNA regions attach to a protein core called the chromosomal scaffold, with the DNA held in loops fixed at their bases — strip the histones off a mitotic chromosome and the scaffold is what remains, ringed by naked loops.",
      cn: "**绕核小体一圈只把 DNA 压缩约七倍，而整条染色体要达到一万倍以上，所以上面必然还有更高层次的组织 —— 而这些层次目前尚未被完全弄清。** 其中一层是看得见的：某些 DNA 区域附着在一个称为染色体支架（chromosomal scaffold）的蛋白核心上，DNA 以环的形式挂在上面、环的基部被固定 —— 把有丝分裂染色体上的组蛋白抽掉，剩下的就是这个支架，周围环绕着裸露的 DNA 环。",
      src: "A p.902, Fig. 24-27",
      openQuestion_en: "How the levels between the 10 nm fiber and a metaphase chromosome are actually built is not settled.",
      openQuestion_cn: "从 10 nm 纤维到中期染色体之间的那些层次究竟是怎么搭起来的，目前并无定论。"
    },
    {
      link_en: "and whatever that higher folding is, there is one thing it must avoid",
      link_cn: "而不管更高层的折叠是什么样，有一件事它必须避开",
      recall_en: "the same cut, pass a duplex through, reseal that unlinks a catenane",
      recall_cn: "和解开连环体是同一个动作：切开、让一段双链穿过去、封回",
      en: "The folding above the nucleosome is neither rigid nor random, and what it must avoid is knots: a knotted chromosome cannot be pulled apart at cell division however hard the cell pulls. **Passing one duplex through a break in another is exactly the operation that unties a knot, which is why topoisomerase II is one of the most abundant proteins in a chromosome.**",
      cn: "核小体之上的折叠既不刚性也不随机，而它必须专门避开的东西是打结：一条打了结的染色体，在细胞分裂时无论怎么拉都拉不开。**把一段双链从另一段的断口穿过去，恰恰就是解结的动作 —— 这就是拓扑异构酶 II 成为染色体中含量最高的蛋白之一的原因。**",
      src: "A p.902, Fig. 24-27"
    },
    {
      link_en: "an enzyme a cell cannot live without is a drug target, and two whole classes of medicine come out of this one",
      link_cn: "一个细胞离了就活不成的酶，就是一个药物靶点 —— 而由这一个酶生出了两大类药",
      en: "Without topoisomerases a cell can neither replicate nor package its DNA nor express its genes, and it dies. As antibiotics, the quinolones — from nalidixic acid in 1962 to fluoroquinolones such as ciprofloxacin — block the last step of the bacterial enzyme's cycle, which is the resealing of the strand breaks, so gyrase cuts the DNA and then cannot put it back; ciprofloxacin is broad-spectrum and one of the few antibiotics reliably effective against anthrax, and it can be given to people because it inhibits the human enzymes only at concentrations orders of magnitude above the therapeutic dose. As cancer chemotherapy, aimed at the human enzymes that are present at raised levels in tumour cells, irinotecan and topotecan act on the type I enzyme and doxorubicin and etoposide on the type II. **These drugs share one mechanism, and it is where the side effects come from: they trap the enzyme on DNA with the strands cut, turning it into a machine that makes breaks.** That damages fast-dividing tumour cells and fast-dividing healthy tissue alike.",
      cn: "没有拓扑异构酶，细胞既不能复制、也不能包装自己的 DNA、也无法表达基因，然后死掉。作为抗生素：喹诺酮类 —— 从 1962 年的萘啶酸起步，发展为环丙沙星等氟喹诺酮 —— 阻断细菌酶催化循环的最后一步，也就是把断口封回去这一步，于是促旋酶切开了 DNA 却再也接不回来；环丙沙星是广谱的，也是少数几种对炭疽可靠有效的抗生素之一，之所以能用在人身上，是因为它抑制人的同类酶所需浓度比治疗剂量高出几个数量级。作为抗癌化疗药，靶向的是肿瘤细胞里水平偏高的人自身拓扑异构酶：伊立替康与拓扑替康针对 I 型，多柔比星与依托泊苷针对 II 型。**这些药共有一个机制，副作用也正是从那里来的：它们把酶连同已经切开的 DNA 一起冻住，使它变成一台专门制造断口的机器。** 这既伤害快速分裂的肿瘤细胞，也同样伤害快速分裂的健康组织。",
      src: "A p.906, Box 24-2"
    },
    {
      link_en: "above the scaffold, a chromosome is divided into compartments and then into loops",
      link_cn: "支架之上，染色体先分成区室，再分成一个个环",
      recall_en: "linking number is defined only for a closed domain, which is what pinning a loop creates",
      recall_cn: "连环数只对闭合的结构域才有定义 —— 而把环钉住，造出来的正是这样一个结构域",
      en: "Each chromosome is organised into two kinds of compartment. The highly condensed material of transcriptionally inactive regions, and of regions with no genes in them, is heterochromatin; the partially decondensed material where transcription is happening is euchromatin, and it is euchromatin that carries the H3.3 and H2AZ variants. Within a compartment, DNA is held in large loops called topologically associating domains, averaging about 800,000 bp, whose borders are DNA sites recognised by a protein called CTCF; CTCF binding brings together sequences far apart along the DNA and pins the loop shut at its base. **Pinning a loop bounds it and makes it a topologically closed domain, so a cell can run a different superhelical density in one loop than in its neighbour.**",
      cn: "每条染色体被组织成两类区室：转录不活跃的区域、以及根本没有基因的区域，那些高度凝聚的物质叫异染色质（heterochromatin）；正在进行转录、部分解凝聚的物质叫常染色质（euchromatin）—— 携带 H3.3 和 H2AZ 变体的就是常染色质。在一个区室之内，DNA 被组织成一个个大环，叫拓扑关联结构域（topologically associating domain, TAD），平均约 800,000 bp；它们的边界是被一个叫 CTCF 的蛋白识别的 DNA 位点，CTCF 的结合把沿 DNA 相距很远的序列拉到一起，把环的基部钉住。**把环的基部钉住，既给它划定了边界，也使它成为一个拓扑闭合的结构域 —— 于是细胞不必切开任何东西，就能让这个环内的超螺旋密度不同于隔壁那个环。**",
      src: "A p.903",
      see: [{ id: "L-24-2-1", en: "why a closed domain is the condition linking number requires", cn: "为什么「闭合的结构域」正是连环数要求的前提" }]
    },
    {
      link_en: "the third structural component, named at the start, is the RNA",
      link_cn: "开头点到的第三种结构组分，就是那些 RNA",
      en: "Long noncoding RNAs are RNA molecules generally over 200 nucleotides long that need not encode any protein, and in chromatin they work as scaffolds: proteins bind the RNA, and since some of those proteins also bind DNA, the RNA tethers distant parts of a chromosome together. The showcase is dosage compensation — a female mammal has two X chromosomes carrying over a thousand genes and a male has one, so one X in each female cell is silenced at random. **Xist is a 17,000-nucleotide long noncoding RNA transcribed only from the X to be inactivated; it spreads along that chromosome and condenses it into a Barr body.** Because coat-pigmentation genes sit on the X, each colour patch of a calico cat is a clone of cells that silenced the same X. Xist stops at the edge of its own chromosome, because each chromosome stays inside a subnuclear domain of its own — a chromosome territory — with little intermingling between them; gene-rich chromosomes tend to sit centrally and heterochromatin-rich ones at the nuclear periphery.",
      cn: "长非编码 RNA（lncRNA）是一般长于 200 个核苷酸、不必编码任何蛋白的 RNA 分子；在染色质里它们充当支架：蛋白结合到 RNA 上，而其中一些蛋白同时也能结合 DNA，于是这条 RNA 把染色体上相距很远的部分拴在一起。最好的例子是剂量补偿 —— 雌性哺乳动物有两条 X 染色体、上面携带一千多个基因，雄性只有一条，所以每个雌性细胞里随机沉默掉一条 X。**Xist 是一条约 17,000 个核苷酸的长非编码 RNA，只从那条将被失活的 X 上转录；它沿该染色体铺开、招募蛋白，把它压缩成巴氏小体（Barr body）。** 由于毛色基因就在 X 上，一只三花猫身上每一块颜色斑，都是沉默了同一条 X 的一群细胞的克隆。Xist 停在自己那条染色体的边界处，因为每条染色体都待在自己的染色体领地里、彼此几乎不混杂；富含基因的染色体倾向于居中，富含异染色质的靠近核膜。",
      src: "A p.903–905, Box 24-3"
    },
    {
      link_en: "one class of protein is left, and it is the one that holds the two copies together",
      link_cn: "还剩一类蛋白 —— 就是把两份拷贝拴在一起的那一类",
      en: "SMC proteins, for structural maintenance of chromosomes, are the third major class of chromatin protein after the histones and the topoisomerases, and their shape explains the job: five domains, with the amino- and carboxyl-terminal globular ends each carrying half an ATP-hydrolysing site and joined by two long coiled-coil stretches meeting at a hinge; two such chains pair at their hinges into a V, and closing one N end onto one C end like tweezers completes an ATP site at each tip. **Cohesins are the SMC1-SMC3 pair: with a protein called kleisin they close as a ring around the sister chromatids and hold them linked until separase cuts the ring at anaphase.** Without that link chromosomes cannot be segregated correctly, because the spindle needs a joined pair to orient against, and the ring is cut rather than loosened.",
      cn: "SMC 蛋白（structural maintenance of chromosomes，染色体结构维持蛋白）是继组蛋白和拓扑异构酶之后的第三大类染色质蛋白；它的形状说明了它的工作：五个结构域，氨基端与羧基端两个球状端各携带半个 ATP 水解位点，中间由两段长的卷曲螺旋相连、在一个铰链处相遇；两条这样的链在铰链处配对成一个 V 形，把一端的 N 与另一端的 C 像镊子一样合拢，就在每个尖端补全一个 ATP 位点。**黏连蛋白（cohesins）是 SMC1–SMC3 那一对：它们与一个叫 kleisin 的蛋白一起合拢成环，把两条姐妹染色单体套住，从复制一直拴到后期被分离酶剪断为止。** 没有这个连接，染色体就无法被正确分离，因为纺锤体需要一个成对的对象来定向；而这个环是被剪断的，不是松开的。",
      src: "A p.908–909"
    },
    {
      link_en: "the other SMC pair twists the DNA the other way, which is worth pausing on",
      link_cn: "另一对 SMC 把 DNA 往反方向拧 —— 这一点值得停一下",
      recall_en: "a nucleosome underwinds the DNA it binds; this one does the opposite",
      recall_cn: "核小体让它结合的 DNA 欠旋；这一个正相反",
      en: "Condensins are the SMC2-SMC4 pair, and they drive the condensation of chromosomes as a cell enters mitosis, stabilising loops by binding at each loop's base. **In the laboratory, condensin binding makes DNA overwound, putting positive supercoils in — the exact opposite of the negative supercoil a nucleosome introduces.** Two proteins in the same chromosome twist the DNA in opposite directions, at different stages, for different purposes. A third pair, SMC5-SMC6, works in DNA repair.",
      cn: "凝缩蛋白（condensins）是 SMC2–SMC4 那一对，负责在细胞进入有丝分裂时推动染色体凝聚，并通过结合在每个环的基部来稳定这些环。**在实验室里，凝缩蛋白的结合会让 DNA 过旋、放进正超螺旋 —— 与核小体引入的负超螺旋恰好相反。** 同一条染色体上的两种蛋白，在不同阶段、为不同目的，把 DNA 往相反方向拧。第三对 SMC5–SMC6 在 DNA 修复中工作。",
      src: "A p.908",
      see: [{ id: "L-25-2-1", en: "DNA repair, where SMC5-SMC6 works", cn: "DNA 修复 —— SMC5–SMC6 干活的地方" }]
    },
    {
      link_en: "bacteria face the same problem and solve it without any of this",
      link_cn: "细菌面对同一个问题，却完全不用上面这套来解决",
      recall_en: "cutting inside one loop and finding only that loop relaxed is the direct demonstration that a pinned loop is its own supercoiling compartment",
      recall_cn: "在一个环里切一刀、只有这个环松弛 —— 这就是「钉住的环是自己的超螺旋区室」的直接实验证明",
      en: "In E. coli a scaffold-like structure organises the circular chromosome into about 500 looped domains averaging 10,000 bp, and those domains are topologically constrained: cut the DNA inside one and only that one relaxes, while the rest of the chromosome keeps its supercoiling. Their end points are not fixed, the boundaries most likely moving along the DNA in step with replication. At the lowest level bacteria genuinely differ: abundant histone-like proteins exist, best characterised the two-subunit HU, but they bind and let go within minutes and form no stable repeating particle. **Bacterial DNA is compacted into a nucleoid of about 500 loops averaging 10,000 bp, and it holds no stable repeating particle like a nucleosome.** A bacterium can divide in 15 minutes and its genome is almost all in use, so stable packaging would be a liability. A nucleoid fills a sizeable fraction of the cell and appears anchored at one or more points to the inner face of the plasma membrane.",
      cn: "在大肠杆菌里，一个类支架结构把环状染色体组织成约 500 个平均 10,000 bp 的环状结构域，而这些结构域是拓扑受限的：在其中一个里切断 DNA，只有这一个松弛，染色体其余部分保持超螺旋。它们的端点并不固定，边界很可能随复制在 DNA 上不断移动。在最底层，细菌确实不同：细菌里有大量类组蛋白蛋白，研究得最清楚的是双亚基的 HU，但它们在几分钟内结合又离开，不形成任何稳定的重复颗粒。**细菌的 DNA 被压缩成一个叫拟核（nucleoid）的结构：约 500 个环、每个平均 10,000 bp，里面没有核小体那样的稳定重复颗粒 —— 细菌最快 15 分钟就能分裂一次，基因组几乎全部都在使用中。** 拟核占据细胞相当一部分体积，并且似乎在一处或多处锚定在质膜内表面上。",
      src: "A p.909–910"
    }
  ],
  terms: [
    { en: "chromatin", cn: "染色质",
      def_en: "The chromosomal material of a eukaryotic nucleus: fibres of protein and DNA in roughly equal proportions by mass, plus a substantial amount of associated RNA. Amorphous through interphase; condenses into visible paired sister chromatids at prophase of mitosis.",
      def_cn: "真核细胞核里的染色体物质：由蛋白与 DNA 按质量大致各半构成的纤维，外加相当量的伴随 RNA。整个间期都是无定形的，到有丝分裂前期才凝聚成可见的成对姐妹染色单体。" },
    { en: "histones", cn: "组蛋白",
      def_en: "Small, strongly basic DNA-binding proteins of Mr 11,000 to 21,000 present in every eukaryotic cell's chromatin; arginine plus lysine make up about a quarter of all residues, which is what lets them bind the negatively charged backbone electrostatically. Five classes: H1, H2A, H2B, H3 and H4. H3 and H4 are extraordinarily conserved — 2 residues of 102 separate the H4 of peas from that of cows.",
      def_cn: "分子量 11,000–21,000 的小型强碱性 DNA 结合蛋白，存在于每一种真核细胞的染色质中；精氨酸加赖氨酸约占全部残基的四分之一，正是这一点让它们能以静电方式结合带负电的骨架。共五类：H1、H2A、H2B、H3、H4。H3 与 H4 保守到极致 —— 豌豆与牛的 H4 在 102 个残基里只差 2 个。" },
    { en: "nucleosome", cn: "核小体",
      def_en: "The repeating unit of chromatin: an octamer of two copies each of H2A, H2B, H3 and H4, with 146 bp of DNA wound 1.67 times around it as a left-handed solenoidal supercoil, plus the linker DNA running to the next core. Repeat about 200 bp; beads 10 to 11 nm across; compaction about sevenfold; net linking number change −1 per particle.",
      def_cn: "染色质的重复单位：由 H2A、H2B、H3、H4 各两份组成的八聚体，146 bp 的 DNA 以左手螺线管形超螺旋在它外面缠 1.67 圈，再加上通向下一个核心的连接 DNA。重复长度约 200 bp；小球直径 10–11 nm；压缩约七倍；每个颗粒使净连环数改变 −1。" },
    { en: "linker DNA", cn: "连接 DNA",
      def_en: "The stretch between adjacent nucleosome cores — what is left of the roughly 200 bp repeat after the 146 bp held on the octamer. Histone H1 binds it. Being exposed while core DNA is protected, it is preferentially destroyed by brief nuclease digestion, which is how the 146 bp figure was measured and how core particles are prepared.",
      def_cn: "相邻两个核小体核心之间的那一段 —— 约 200 bp 的重复长度扣掉八聚体上那 146 bp 之后剩下的部分，由组蛋白 H1 结合。它暴露在外而核心 DNA 受保护，所以短暂的核酸酶消化会优先把它毁掉 —— 146 bp 这个数就是这么测出来的，核心颗粒也是这么制备的。" },
    { en: "histone tails", cn: "组蛋白尾巴",
      def_en: "The amino-terminal extensions protruding from a nucleosome core, some threading out between the two DNA coils. Intrinsically disordered, they carry most covalent histone modifications and make the contacts between neighbouring nucleosomes — the mechanical route by which a chemical mark alters how tightly chromatin packs.",
      def_cn: "从核小体核心伸出来的氨基端延伸段，有些还从两圈 DNA 之间穿出去。它们内在无序，携带大部分共价组蛋白修饰，并构成相邻核小体之间的接触 —— 这就是一个化学标记得以改变染色质堆积紧密程度的力学通道。" },
    { en: "epigenetic information", cn: "表观遗传信息",
      def_en: "Information passed to daughter cells at division, or from parent to offspring, that is not encoded in the DNA sequence. Largely covalent histone modifications together with the placement of histone variants. It counts as heredity because the marks survive cell division and meiosis.",
      def_cn: "在分裂时传给子细胞、或由亲代传给后代，却不编码在 DNA 序列里的信息。主要是共价组蛋白修饰，加上组蛋白变体的安放位置。它之所以算遗传，是因为这些标记能挺过细胞分裂和减数分裂。" },
    { en: "histone variants", cn: "组蛋白变体",
      def_en: "Alternative forms of the core histones, placed by dedicated deposition complexes and marking chromatin function. H3.3 and H2AZ sit where transcription is active, H2AZ keeping the region open by impeding compaction; H2AX is phosphorylated at Ser139 beside a double-strand break and is required for repair complexes to assemble; CENPA is the H3 variant at centromeres. H2AZ is essential in mammals; CENPA deletion is lethal in mice.",
      def_cn: "核心组蛋白的替代形式，由专门的沉积复合物放到位，用来标记染色质的功能。H3.3 与 H2AZ 位于转录活跃处，H2AZ 通过妨碍压缩把该区域维持在打开状态；H2AX 在双链断口旁的 Ser139 被磷酸化，是修复复合物得以装配的必要条件；CENPA 是着丝粒处的 H3 变体。H2AZ 在哺乳动物中是必需的；小鼠中敲掉 CENPA 是致死的。" },
    { en: "ChIP-Seq", cn: "染色质免疫沉淀测序",
      def_en: "The method that maps where a histone variant or modification sits across a genome: digest chromatin briefly so exposed linker DNA is cut while wrapped DNA survives, precipitate the nucleosomes carrying the mark with a specific antibody, and sequence the DNA that comes down with them.",
      def_cn: "用来在全基因组范围内定位某个组蛋白变体或修饰的方法：短暂消化染色质，使暴露的连接 DNA 被切断而缠绕着的 DNA 存活；用特异抗体把带该标记的核小体沉淀下来；再测随之下来的 DNA 的序列。" },
    { en: "chromosomal scaffold", cn: "染色体支架",
      def_en: "A proteinaceous core to which certain DNA regions attach, the DNA hanging from it in loops fixed at their bases. Seen by stripping the histones from a mitotic chromosome, which leaves the core ringed by naked loops. One of the higher levels carrying compaction from the nucleosome's sevenfold towards 10,000-fold.",
      def_cn: "一个蛋白质性的核心，某些 DNA 区域附着在它上面，DNA 以环的形式挂着、环的基部被固定。把有丝分裂染色体上的组蛋白抽掉就能看到它，周围环绕着裸露的环。它是把压缩率从核小体的七倍推向一万倍的更高层次之一。" },
    { en: "topologically associating domain and CTCF", cn: "拓扑关联结构域与 CTCF",
      def_en: "Large DNA loops, averaging about 800,000 bp, into which each nuclear compartment is organised. Their borders are sites recognised by the CCCTC-binding factor, CTCF, whose binding brings together sequences far apart along the DNA and pins the loop at its base. Pinning bounds the loop and makes it a topologically closed domain, so its superhelical density can be set independently of its neighbours'.",
      def_cn: "每个核内区室被组织成的大型 DNA 环，平均约 800,000 bp。它们的边界是被 CCCTC 结合因子（CTCF）识别的位点，CTCF 的结合把沿 DNA 相距很远的序列拉到一起，并把环的基部钉住。钉住既划定了环的边界，又使它成为一个拓扑闭合的结构域，于是它的超螺旋密度可以独立于邻居来设定。" },
    { en: "heterochromatin and euchromatin", cn: "异染色质与常染色质",
      def_en: "The two compartments a chromosome is divided into. Heterochromatin is the highly condensed material of transcriptionally inactive regions and of regions without genes; euchromatin is the partly decondensed material where transcription is happening, and it carries the H3.3 and H2AZ variants.",
      def_cn: "一条染色体被分成的两类区室。异染色质是转录不活跃的区域以及没有基因的区域那些高度凝聚的物质；常染色质是正在进行转录、部分解凝聚的物质，携带 H3.3 和 H2AZ 变体。" },
    { en: "Xist and the Barr body", cn: "Xist 与巴氏小体",
      def_en: "Xist is a long noncoding RNA of about 17,000 nucleotides, transcribed only from the X chromosome that is to be inactivated. It spreads along that chromosome from its own gene, recruits proteins and condenses it into a Barr body, which is how mammals equalise X-linked gene dosage between the sexes. Because coat-colour genes lie on the X, each patch of a calico cat is a clone of cells that inactivated the same X.",
      def_cn: "Xist 是一条约 17,000 个核苷酸的长非编码 RNA，只从那条将被失活的 X 染色体上转录。它从自己的基因出发沿该染色体铺开，招募蛋白，把它压缩成一个巴氏小体 —— 哺乳动物就是这样让两性之间 X 连锁基因的剂量相等的。由于毛色基因位于 X 上，三花猫身上每一块斑，都是失活了同一条 X 的一群细胞的克隆。" },
    { en: "cohesins and condensins", cn: "黏连蛋白与凝缩蛋白",
      def_en: "The two eukaryotic SMC dimers. Cohesins (SMC1-SMC3), with kleisin, close as a ring around the sister chromatids and hold them from replication to metaphase; separase cuts the links at anaphase, and without them chromosomes cannot segregate. Condensins (SMC2-SMC4) drive mitotic condensation and, in vitro, overwind DNA — the opposite of what nucleosome binding does.",
      def_cn: "真核的两对 SMC 二聚体。黏连蛋白（SMC1–SMC3）与 kleisin 一起合拢成环，把姐妹染色单体套住，从复制一直拴到中期；后期由分离酶把连接切断，没有它们染色体就无法分离。凝缩蛋白（SMC2–SMC4）推动有丝分裂时的凝聚，并在体外让 DNA 过旋 —— 与核小体结合所做的正相反。" },
    { en: "bacterial nucleoid", cn: "细菌拟核",
      def_en: "The compacted form of bacterial DNA, filling a sizeable fraction of the cell and anchored at one or more points to the inner face of the plasma membrane. In E. coli about 500 looped domains of roughly 10,000 bp each, topologically constrained — cutting inside one relaxes only that one — with boundaries that move rather than being fixed. Histone-like proteins such as HU bind and dissociate within minutes and build no stable repeating particle.",
      def_cn: "细菌 DNA 的压缩形式，占据细胞相当一部分体积，并在一处或多处锚定在质膜内表面。大肠杆菌里约有 500 个环状结构域，每个约 10,000 bp，拓扑受限 —— 在一个里面切断只让这一个松弛 —— 边界不固定而是会移动。类组蛋白蛋白（如 HU）在几分钟内结合又解离，不形成任何稳定的重复颗粒。" }
  ]
};
