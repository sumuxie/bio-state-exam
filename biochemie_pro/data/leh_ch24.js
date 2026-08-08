/* ============================================================
   Lehninger 8 — Chapter 24, section 24.2, DNA Supercoiling.
   DEPTH LAYER, and a Lehninger-only node: Czech node 4-1-3-1 has
   exactly ONE glossary-level mention of supercoiled DNA ("环状DNA
   进一步自身扭曲的形式" — circular DNA further twisted upon
   itself), no linking number, no topoisomerase mechanism, no
   superhelical-density math, no plectonemic/solenoidal distinction.
   Confirmed by grep before writing this node. Ruojin ruled this one
   "主要需要的" on 2026-08-06 (CORE2_LEHNINGER.md; archived in
   HANDOFF_LEHNINGER.md section 9b; row 24.2 of
   lehninger_index/lehninger_only_scope.tsv, tagged `full`,
   9 printed pages).

   FOURTH Lehninger-only node, after leh_ch9.js (L-9-1-1),
   leh_ch9b.js (L-9-2-1) and leh_ch22b.js (L-22-2-1). Same
   conventions: czTitle opens with "Žádná —", cnNote.status is
   "pending" with an honest reason.

   topicKey "dna-supercoiling" is NEW and single-book. Deliberately
   NOT merged into the existing "dna-replication" key (carried by
   Czech 4-1-3-1/4-1-3-2 and L-25-1-1): that key is about the
   mechanics of the replication fork (polymerases, helicases,
   ligases), a different subject from DNA topology and compaction,
   even though topoisomerases matter to both. Forcing a join here
   would mislead a reader clicking "same topic" on 4-1-3-1.

   File is `leh_ch24.js`, the first node for Lehninger chapter 24.
   Section 24.3 (Structure of Chromosomes) will be the chapter's
   second node, in leh_ch24b.js, per this project's a/b convention.

   `chapter` is LEHNINGER's chapter 24 — chapter is book-local.
   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-24-2-1",
    book: "lehninger",
    topicKey: "dna-supercoiling",
    chapter: 24,
    section: "24.2",
    czTitle: "Žádná — superhelicita DNA: proč je DNA v buňce podtočená, linking number a topoizomerasy",
    enTitle: "DNA supercoiling — why cellular DNA is deliberately underwound rather than relaxed, the topological number that measures it precisely, and the two enzyme classes that spend energy to keep it that way",
    cnTitle: "DNA 超螺旋——为什么细胞里的 DNA 是被刻意欠旋而非处于松弛态、精确度量这种欠旋的拓扑学数字，以及花费能量来维持这种状态的两类酶",
    pages: [890, 891, 892, 893, 894, 895, 896, 897, 898],
    coverage: "full",
    coverageNote: "Read from Lehninger 8 section 24.2, B-copy text layer pp.3115-3141 in full, end to end through every subheading (Most Cellular DNA Is Underwound; DNA Underwinding Is Defined by Topological Linking Number; Topoisomerases Catalyze Changes in the Linking Number of DNA; DNA Compaction Requires a Special Form of Supercoiling) plus Worked Example 24-1, Table 24-4, Figures 24-8 through 24-21, and the section's own SUMMARY, covering A printed pp.890-898. Czech node 4-1-3-1 was checked before writing this: it carries exactly one glossary-level term, 'supercoiled (superhelical) DNA', with a one-sentence definition and no linking number, no topoisomerase mechanism, and no superhelical-density math -- confirmed to be the entire Czech-layer content on this subject.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；linking number 与拓扑异构酶机制是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Cellular DNA is not relaxed, it is deliberately underwound by about 5-7%, and that underwinding is stored strain the cell spends ATP to create and maintain — not a side effect of packaging, but a prerequisite for it. The reason is mechanical: prying the two strands of B-DNA apart takes energy, and a DNA molecule that already carries structural strain from having too few helical turns gives some of that energy up front, which is exactly what replication and transcription need every time they open the helix.",
      cn: "细胞里的 DNA **不是**处于松弛态——它被**刻意欠旋**了大约 5–7%，而这种欠旋是细胞**花费 ATP 主动制造并维持**的储存应变，不是包装的副产品，而是包装的**前提**。原因是机械上的：把 B-DNA 的两条链撬开需要能量，而一个本身就因螺旋圈数不足而带有结构应变的 DNA 分子，等于**提前预支**了一部分这份能量——这正是复制和转录每次打开双螺旋时所需要的。"
    },
    summary: {
      en: "Lehninger opens 24.2 with a question worth keeping as the frame: how is DNA compacted so extremely while remaining accessible? Two things do the compacting -- cations and polyamines neutralising the backbone's negative charges, and a structural alteration called supercoiling, which is the section's actual subject. The physical basis: purified closed-circular DNA is almost never found relaxed, regardless of source, and each cell maintains a characteristic degree of supercoiling -- this is intrinsic, cell-regulated strain, not an artifact. The strain comes from underwinding: fewer helical turns than B-form's 10.5 bp/turn. That deficit has to go somewhere, and cells resolve it overwhelmingly by coiling the axis on itself (a supercoil) rather than by separating strands outright, because coiling costs less energy than breaking base pairs -- but the underwound state does make local strand separation easier, which is the whole functional point. The section then makes this precise with topology. Linking number (Lk) is a genuine topological invariant of closed-circular DNA -- it cannot change without transiently breaking a strand, no matter how the molecule bends or deforms. Relaxed DNA has Lk0 = bp/10.5; underwinding by two turns gives Lk = Lk0-2. The size-independent measure is superhelical density, sigma = (Lk-Lk0)/Lk0, and real cellular DNA sits at sigma = -0.05 to -0.07 -- negative because the DNA is underwound, giving negative supercoiling; overwinding would give positive sigma and positive supercoiling, the mirror-image twist. Two molecules differing only in Lk are topoisomers. Changing Lk requires an enzyme: topoisomerases are the section's other main character, split into type I (nick one strand, pass the other through, reseal -- changes Lk by 1, no ATP needed) and type II (break both strands, pass an intact duplex through the gap -- changes Lk by 2, needs ATP). Bacterial DNA gyrase is the type II enzyme that actively introduces negative supercoils; type I enzymes generally relax them; the balance between the two sets the cell's steady-state sigma. Type II enzymes have a second trick worth remembering: because they pass one whole duplex through a break in another, they can decatenate -- untangle two topologically interlinked circles, a catenane -- which matters directly at the end of DNA replication. Finally, supercoiled DNA takes one of two physical shapes. Free in solution it is plectonemic: extended, narrow, branched, right-handed coils. Bound to protein, as in the eukaryotic nucleus, it becomes solenoidal: tight left-handed turns around the protein, far more compact -- this is the shape that actually achieves cellular packaging, even though plectonemic supercoiling is what you see when DNA is studied in isolation.",
      cn: "Lehninger 在 24.2 开篇提出一个值得记住的框架性问题：DNA 是如何被压缩到如此极致、却仍能保持可及性的？完成压缩靠两件事——阳离子和多胺中和骨架上的负电荷，以及一种叫**超螺旋**的结构改变，这才是本节真正的主题。物理基础是：纯化的闭环 DNA 几乎从不处于松弛态，不论其来源如何，而且**每个细胞都维持着一个特有的超螺旋程度**——这是**内在的、受细胞调控的**应变，不是人为假象。这份应变来自**欠旋**：螺旋圈数少于 B 型的每圈 10.5 bp。这个「缺口」必须有个去处，细胞绝大多数时候选择让轴线自身盘绕（形成超螺旋），而不是直接把链拉开，因为盘绕消耗的能量比破坏碱基对要少——但欠旋状态确实让局部链分离变得更容易，而这正是它在功能上的全部意义所在。本节随后用拓扑学把这件事说精确。**Linking number (Lk)** 是闭环 DNA 一个真正的**拓扑不变量**——无论分子怎么弯曲变形，它都不会改变，除非某条链被**短暂打断**。松弛态 DNA 的 Lk₀ = 碱基对数/10.5；欠旋两圈，Lk = Lk₀ − 2。与尺寸无关的度量是**超螺旋密度** σ = (Lk − Lk₀)/Lk₀，真实的细胞 DNA 处在 σ = −0.05 到 −0.07——是负值，因为 DNA 被欠旋，对应**负超螺旋**；若是过度缠绕，则得到正的 σ 和**正超螺旋**，是镜像方向的扭转。只在 Lk 上不同的两个分子叫**拓扑异构体**。改变 Lk 需要酶：**拓扑异构酶**是本节的另一位主角，分两类——**I 型**（切开一条链、让另一条链穿过缺口、再封上——每次改变 Lk 1 个单位，不需要 ATP）和 **II 型**（切开两条链，让一整段完整的双链穿过缺口——每次改变 Lk 2 个单位，需要 ATP）。细菌的 **DNA 促旋酶 (DNA gyrase)** 是主动引入负超螺旋的 II 型酶；I 型酶通常负责松弛超螺旋；两者的平衡决定了细胞稳态下的 σ 值。II 型酶还有第二个值得记住的本事：因为它们能让一整段完整双链穿过另一条链的断口，所以它们能**解连环 (decatenate)**——解开两个拓扑上相互套连的环（连环体，catenane）——这在 DNA 复制**收尾**时直接派上用场。最后，超螺旋 DNA 会呈现两种物理形态之一。在溶液中游离时是 **plectonemic（质粒式）**：伸展、细窄、带分支的右手螺旋。结合到蛋白上时，如在真核细胞核里，它变成 **solenoidal（螺线管式）**：绕着蛋白紧密缠绕的左手圈——压缩程度高得多——这才是真正实现细胞内包装的形态，尽管在离体研究 DNA 时看到的通常是 plectonemic 形态。"
    },
    points: [
      {
        cz: "podtočení jako uložená energie, ne vedlejší efekt",
        en: "UNDERWINDING IS STORED, CELL-REGULATED STRAIN — NOT AN ACCIDENT OF PACKAGING. Purified closed-circular DNA, freed from every protein, is almost never found relaxed, and DNA from a given cellular source shows a CHARACTERISTIC degree of supercoiling every time. That reproducibility is the key evidence: if supercoiling were just an incidental byproduct of squeezing DNA into a small space, it would not come back to the same value after purification, with all the packaging proteins gone. Instead it tells you supercoiling is an INTRINSIC property of DNA tertiary structure that cells actively regulate with enzymes (see below), and that the resulting strained state is a form of stored energy the cell has deliberately paid for.",
        cn: "**欠旋是被储存的、受细胞调控的应变——不是包装的意外副产品。** 纯化的闭环 DNA，即便已经完全脱去所有蛋白，也几乎从不呈松弛态；而且来自某个特定细胞来源的 DNA，每次都表现出一个**特有的**超螺旋程度。这种可重复性正是关键证据：如果超螺旋只是把 DNA 塞进狭小空间的偶然副产品，那么在纯化、所有包装蛋白都已脱除之后，它就不会**每次都回到同一个数值**。相反，这说明超螺旋是 DNA 三级结构的一种**内在**属性，由细胞用酶**主动调控**（见下文），而由此产生的应变态，是细胞刻意付出代价换来的一种**储存能量**。"
      },
      {
        cz: "proč se DNA raději svine, než by se rozpletla",
        en: "COILING IS THE CHEAPER WAY TO ABSORB THE STRAIN, WHICH IS WHY SUPERCOILING HAPPENS AT ALL. An 84 bp segment of relaxed circular DNA holds eight helical turns (84/10.5). Remove one turn and the same 84 bp now has to accommodate only seven turns — 12.0 bp/turn instead of 10.5 — a real deviation from the most stable B-form structure, so the molecule is thermodynamically strained. That strain has to be absorbed somehow, and there are in principle two ways: coil the DNA axis on itself into a supercoil, or separate the two strands over roughly 10 bp. Cells overwhelmingly choose the FIRST route, because coiling the axis generally costs LESS ENERGY than breaking the hydrogen bonds and base-stacking that hold paired strands together. This is worth stating precisely because of what it implies for the second option: the underwound state does not usually force strand separation outright, but it does make LOCAL separation easier wherever an enzyme needs it — which is the functional payoff the whole system is built for.",
        cn: "**盘绕是吸收这份应变更便宜的方式，这正是超螺旋之所以会发生的原因。** 一段 84 bp 的松弛环状 DNA 段含有八圈螺旋（84/10.5）。去掉一圈，同样这 84 bp 现在只能容纳七圈——变成每圈 12.0 bp 而不是 10.5——这是对最稳定的 B 型结构的真实偏离，于是分子处于热力学应变之中。这份应变必须被吸收掉，原则上有两条路：让 DNA 轴线自身盘绕成超螺旋，或者在大约 10 bp 的范围内把两条链拉开。细胞**绝大多数时候选第一条路**，因为让轴线盘绕通常比破坏维系配对链的氢键和碱基堆积**消耗更少的能量**。这一点值得说精确，因为它对第二个选项有直接推论：欠旋状态通常**不会**直接强迫链分离，但它确实让**局部**分离——只要某个酶需要它——变得更容易，而这正是整套系统为之而建的**功能回报**。"
      },
      {
        cz: "linking number — topologická invarianta",
        en: "LINKING NUMBER IS A GENUINE TOPOLOGICAL INVARIANT: NOTHING SHORT OF BREAKING A STRAND CAN CHANGE IT. Visualize one circular strand as the boundary of a surface, like the soap film on a bubble wand — the linking number (Lk) is the number of times the OTHER strand pierces that surface, and it is always an integer, positive by convention for the right-handed helix DNA actually adopts. The property that makes Lk useful: it does not vary under ANY continuous deformation — bending, thermal motion, protein binding — as long as both strands stay intact. It changes only when the backbone is broken and rejoined, which is exactly the operation topoisomerases perform. For relaxed DNA, Lk0 simply equals bp divided by ~10.5 (bp per turn); a 2,100 bp relaxed circle has Lk0 = 200. If either strand carries a break (a nick), the strands could in principle be unraveled completely, so Lk is UNDEFINED for nicked DNA — topological properties require an unbroken closed circle on both strands.",
        cn: "**Linking number 是一个真正的拓扑不变量：除了打断一条链之外，什么都改变不了它。** 把其中一条环状链想象成一个曲面的边界，就像吹泡泡棒上绷着的肥皂膜——**linking number (Lk)** 就是**另一条链**穿过这个曲面的次数，它永远是整数，按惯例对 DNA 实际采用的右手螺旋取正值。让 Lk 有用的性质是：只要两条链都**保持完整**，它在**任何连续形变**下——弯曲、热运动、蛋白结合——都**不会改变**。只有当骨架被打断又重新连接时它才会变，而这恰恰就是拓扑异构酶所做的事。对于松弛态 DNA，Lk₀ 就等于碱基对数除以约 10.5（每圈碱基对数）；一个 2,100 bp 的松弛环，Lk₀ = 200。如果任一条链带有一个断口（缺刻），两条链原则上可以被完全解开，所以对有缺刻的 DNA 而言 Lk 是**未定义**的——拓扑性质要求两条链都构成完整的闭环。"
      },
      {
        cz: "ΔLk a superhelicitní hustota σ — počítání",
        en: "SUPERHELICAL DENSITY IS THE SIZE-INDEPENDENT NUMBER WORTH BEING ABLE TO CALCULATE COLD. Underwinding is expressed as ΔLk = Lk - Lk0. Removing two turns from a 2,100 bp circle (Lk0 = 200) gives Lk = 198, so ΔLk = -2. Because ΔLk alone does not let you compare DNAs of different sizes, the section defines superhelical density sigma = ΔLk/Lk0 = (Lk-Lk0)/Lk0. For that example, sigma = -0.01: 1% of the helical turns present in relaxed B-form have been removed. Real cellular DNAs cluster tightly at sigma = -0.05 to -0.07 (5-7% underwound) — the negative sign IS the definition of negative supercoiling, exactly what underwinding produces; overwinding gives positive sigma and positive supercoiling, a mirror-image twist of the DNA axis. The book's own worked example is worth reproducing as a calculation template: a 4,200 bp circle has Lk0 = 4,200/10.5 = 400; at Lk = 374, ΔLk = -26 and sigma = -26/400 = -0.065 (negatively supercoiled); the SAME molecule at Lk = 412 gives ΔLk = +12 and sigma = +0.03 (positively supercoiled) — one molecule, two topoisomers, opposite sign depending only on Lk.",
        cn: "**超螺旋密度是那个与尺寸无关、值得能够冷静算出来的数字。** 欠旋量表示为 ΔLk = Lk − Lk₀。从一个 2,100 bp 的环上去掉两圈（Lk₀ = 200）得到 Lk = 198，所以 ΔLk = −2。因为单独一个 ΔLk 无法拿来比较不同大小的 DNA，本节定义了**超螺旋密度** σ = ΔLk/Lk₀ = (Lk − Lk₀)/Lk₀。对上面的例子，σ = −0.01：松弛 B 型中原有螺旋圈数的 1% 被去掉了。真实的细胞 DNA 密集地落在 σ = −0.05 到 −0.07（欠旋 5%–7%）——负号**正是**负超螺旋的定义，正是欠旋所造成的；过度缠绕会给出正的 σ 和正超螺旋，是 DNA 轴线镜像方向的扭转。书里自带的实例值得当作计算模板复现一遍：一个 4,200 bp 的环，Lk₀ = 4,200/10.5 = 400；当 Lk = 374 时，ΔLk = −26，σ = −26/400 = −0.065（负超螺旋）；**同一个分子**当 Lk = 412 时，ΔLk = +12，σ = +0.03（正超螺旋）——同一个分子，两个拓扑异构体，正负号仅仅取决于 Lk。"
      },
      {
        cz: "topoizomerasy typu I a II — mechanismus a spotřeba ATP",
        en: "TYPE I AND TYPE II TOPOISOMERASES ARE DISTINGUISHED BY HOW MANY STRANDS THEY CUT AND BY HOW MUCH Lk CHANGES PER EVENT, AND ONLY ONE CLASS NEEDS ATP. Type I enzymes nick ONE strand, pass the UNBROKEN strand through the gap, then reseal — changing Lk by 1 per catalytic cycle, no ATP required (the mechanism conserves a high-energy bond: the active-site tyrosine's nucleophilic attack that breaks the strand is undone by a second nucleophilic attack that reseals it, so one high-energy linkage is simply traded for another). Type II enzymes break BOTH strands of one duplex and pass an ENTIRE INTACT duplex through that double-strand gap before resealing — changing Lk by 2 per event, and this DOES require ATP (two ATP bound and hydrolysed per cycle in the eukaryotic mechanism), consistent with the much larger, more energetically demanding operation of threading a whole duplex through a transient break. In E. coli, type I enzymes (topoisomerases I and III) generally RELAX DNA by removing negative supercoils (increasing Lk); the type II enzyme, called DNA gyrase, is the one that actively INTRODUCES negative supercoils (decreasing Lk) using ATP — so the bacterial cell's steady-state supercoiling level is set by the balance between gyrase adding negative supercoils and type I enzymes removing them. Eukaryotic type II enzymes (IIalpha, IIbeta) cannot introduce negative supercoils at all; they only relax both positive and negative supercoils.",
        cn: "**I 型和 II 型拓扑异构酶的区别在于各自切几条链、每次事件改变多少 Lk，而且只有一类需要 ATP。** **I 型**酶切开**一条**链，让**未断的那条**穿过缺口，再封上——每个催化循环改变 Lk **1** 个单位，**不需要 ATP**（这个机制守恒了一个高能键：活性位点酪氨酸的亲核进攻打断了链，随后第二次亲核进攻把它重新封上，所以只是**一个高能键换了另一个**）。**II 型**酶切开**一条**双链的**两条**链，让**整段完整的**另一条双链穿过这个双链缺口，再封上——每次事件改变 Lk **2** 个单位，而这**确实需要 ATP**（真核机制中每个循环结合并水解**两个** ATP），这与「让一整段双链穿过一个瞬时断口」这种能量需求大得多的操作是相符的。在 *E. coli* 中，I 型酶（拓扑异构酶 I 和 III）通常通过去除负超螺旋来**松弛** DNA（增大 Lk）；II 型酶，叫 **DNA 促旋酶 (DNA gyrase)**，是那个用 ATP **主动引入**负超螺旋（减小 Lk）的酶——所以细菌细胞稳态下的超螺旋水平，就由促旋酶添加负超螺旋、I 型酶去除负超螺旋这两者的平衡决定。真核 II 型酶（IIα、IIβ）**完全无法**引入负超螺旋；它们只能松弛正、负两种超螺旋。"
      },
      {
        cz: "dekatenace — druhá funkce topoizomerasy II",
        en: "TYPE II TOPOISOMERASES HAVE A SECOND JOB THAT FOLLOWS DIRECTLY FROM THEIR MECHANISM: UNTANGLING TWO SEPARATE DNA CIRCLES. Because a type II enzyme's whole trick is passing one intact duplex through a transient double-strand break in ANOTHER duplex, the same mechanism works just as well when the two duplexes belong to two DIFFERENT circular DNA molecules that are topologically interlinked — a structure called a catenane. Passing one circle's segment through a break in the other DECATENATES them, separating two circles that could not otherwise be pulled apart without breaking DNA. Some topoisomerases specialise in exactly this: bacterial topoisomerase IV is dedicated to chromosome untangling at cell division, which matters directly at the end of DNA replication, when the two daughter chromosomes end up interlinked and must be decatenated before the cell can divide.",
        cn: "**II 型拓扑异构酶还有第二项工作，直接源自它们的机制本身：解开两个各自独立的 DNA 环之间的缠绕。** 因为 II 型酶的整套诀窍就是让一整段完整双链穿过**另一段**双链上的一个瞬时双链断口，同样这套机制在这两段双链分别属于**两个不同的**、拓扑上相互套连的环状 DNA 分子时，也照样管用——这样的结构叫**连环体 (catenane)**。让一个环的一段穿过另一个环上的断口，就能把它们**解连环 (decatenate)**——分开两个原本除非打断 DNA 否则无法拉开的环。有些拓扑异构酶就专门干这个：细菌的**拓扑异构酶 IV** 专职负责细胞分裂时的染色体解缠，这在 **DNA 复制收尾**时直接派上用场——两条子代染色体最终会相互套连，必须先解连环，细胞才能分裂。"
      },
      {
        cz: "plektonemická vs. solenoidální — dvě tváře stejného podtočení",
        en: "THE SAME UNDERWOUND DNA CAN TAKE TWO PHYSICALLY DIFFERENT SHAPES, AND ONLY ONE OF THEM ACTUALLY PACKAGES A CELL. Supercoiled DNA free in solution, unconstrained by protein, takes the PLECTONEMIC form: extended, narrow, right-handed coils that branch, with the supercoil axis (including branches) running to about 40% of the DNA's contour length. This is what you see studying isolated DNA in the lab, but it is NOT compact enough on its own to package cellular DNA. A second, dramatically different form, SOLENOIDAL supercoiling, is available to the same underwound DNA: tight LEFT-handed turns around an imaginary tube, resembling a garden hose neatly wound on a reel, far more compact than the plectonemic form. Plectonemic and solenoidal are readily interconvertible — they are two shapes the SAME negative supercoiling can adopt — but plectonemic is the more stable form in free solution, while solenoidal requires stabilisation by protein binding, exactly the situation in eukaryotic chromosomes. The point worth keeping: solenoidal supercoiling, not plectonemic, is the primary mechanism by which underwinding actually achieves DNA compaction in cells — what a purified, protein-free plasmid shows you in an electron micrograph is the wrong shape to explain how DNA fits in a nucleus.",
        cn: "**同样欠旋的 DNA 可以呈现两种物理上截然不同的形态，而只有其中一种真正实现了细胞内的压缩。** 游离于溶液中、不受蛋白约束的超螺旋 DNA 呈 **plectonemic（质粒式）**形态：伸展、细窄、带分支的右手螺旋，超螺旋轴线（含分支）总长约为 DNA 轮廓长度的 40%。这正是在实验室里研究离体 DNA 时看到的样子，但它**本身**并不够紧凑，无法实现细胞内的 DNA 包装。同样这段欠旋的 DNA 还能采取第二种、截然不同的形态——**solenoidal（螺线管式）**超螺旋：紧密的**左手**圈，绕着一根想象中的管子盘绕，就像花园水管整齐地缠在卷盘上，比 plectonemic 形态紧凑得多。plectonemic 与 solenoidal 之间很容易相互转换——它们是**同一种**负超螺旋能采取的两种形态——但在自由溶液中 plectonemic 更稳定，而 solenoidal 需要**蛋白结合**来稳定，这正是真核染色体里的情形。值得记住的一点是：真正在细胞里靠欠旋实现 DNA 压缩的主要机制是 **solenoidal**，而不是 plectonemic——一份纯化的、不含蛋白的质粒在电镜下呈现的形态，其实是**错误的**那一种，无法解释 DNA 是怎么塞进细胞核的。"
      }
    ],
    terms: [
      {
        cz: "superhelicita (DNA supercoiling)",
        en: "DNA supercoiling",
        cn: "DNA 超螺旋",
        def_en: "The further coiling of the DNA double-helix axis upon itself, distinct from the coiling of the two strands into the helix itself. Generally reflects underwinding of cellular DNA relative to relaxed B-form, and is an intrinsic, cell-regulated property, not an incidental packaging artifact.",
        def_cn: "DNA 双螺旋轴线在自身基础上的进一步盘绕，不同于两条链本身盘绕成螺旋这件事。通常反映细胞 DNA 相对于松弛 B 型的欠旋，是一种内在的、受细胞调控的性质，不是包装带来的偶然假象。"
      },
      {
        cz: "linking number (Lk)",
        en: "linking number (Lk)",
        cn: "连接数 (Lk)",
        def_en: "A topological invariant of closed-circular double-stranded DNA: the number of times one strand pierces an imaginary surface bounded by the other strand. Always an integer, positive for DNA's right-handed interwinding. Unchanged by any deformation that keeps both strands intact; changes only when a strand is transiently broken and rejoined, the operation topoisomerases perform.",
        def_cn: "闭环双链 DNA 的一个拓扑不变量：一条链穿过由另一条链所界定的一个假想曲面的次数。永远是整数，对 DNA 实际的右手互绕取正值。只要两条链都保持完整，任何形变都不会改变它；只有当某条链被短暂打断又重新连接时——即拓扑异构酶所做的操作——它才会改变。"
      },
      {
        cz: "superhelicitní hustota σ",
        en: "superhelical density (sigma)",
        cn: "超螺旋密度 (σ)",
        def_en: "A size-independent measure of underwinding: sigma = (Lk-Lk0)/Lk0, the fraction of helical turns removed relative to relaxed DNA. Real cellular DNAs sit at sigma = -0.05 to -0.07. Negative sigma means negative supercoiling (from underwinding); positive sigma means positive supercoiling (from overwinding).",
        def_cn: "衡量欠旋程度、与尺寸无关的量：σ = (Lk − Lk₀)/Lk₀，即相对于松弛态 DNA 被去除的螺旋圈数比例。真实的细胞 DNA 处在 σ = −0.05 到 −0.07。σ 为负对应负超螺旋（源自欠旋）；σ 为正对应正超螺旋（源自过度缠绕）。"
      },
      {
        cz: "topoizomery",
        en: "topoisomers",
        cn: "拓扑异构体",
        def_en: "Two forms of a circular DNA molecule that differ only in a topological property such as linking number, with identical base-pair sequence and count. Separable by agarose gel electrophoresis, since supercoiled (more compact) molecules migrate faster than relaxed ones, and even a difference of Lk = 1 produces a detectably different mobility.",
        def_cn: "两种环状 DNA 分子形式，仅在诸如 linking number 这样的拓扑性质上不同，碱基对序列和数目完全相同。可用琼脂糖凝胶电泳分离，因为超螺旋（更紧凑）的分子迁移得比松弛的快，即便 Lk 只差 1 也能产生可分辨的迁移率差异。"
      },
      {
        cz: "topoizomerasa typu I",
        en: "type I topoisomerase",
        cn: "I 型拓扑异构酶",
        def_en: "An enzyme that nicks one DNA strand, passes the unbroken strand through the gap, and reseals it, changing linking number by 1 per catalytic event. Requires no ATP -- the active-site tyrosine's nucleophilic attack that breaks the strand is reversed by a second nucleophilic attack, trading one high-energy bond for another. In E. coli, type I enzymes (I and III) generally relax DNA by removing negative supercoils.",
        def_cn: "一类切开 DNA 一条链、让未断的那条链穿过缺口、再重新封上的酶，每次催化事件改变 linking number 1 个单位。不需要 ATP——活性位点酪氨酸的亲核进攻打断链，随后被第二次亲核进攻逆转，本质是一个高能键换了另一个。在 E. coli 中，I 型酶（I 和 III）通常通过去除负超螺旋来松弛 DNA。"
      },
      {
        cz: "topoizomerasa typu II (DNA gyráza)",
        en: "type II topoisomerase (DNA gyrase)",
        cn: "II 型拓扑异构酶（DNA 促旋酶）",
        def_en: "An enzyme that breaks both strands of one DNA duplex and passes an entire intact duplex through the double-strand gap before resealing, changing linking number by 2 per event, using ATP. The bacterial version, DNA gyrase, actively introduces negative supercoils; eukaryotic type II enzymes can only relax supercoils, not introduce negative ones. The same mechanism lets type II enzymes decatenate topologically interlinked DNA circles.",
        def_cn: "一类切开一条 DNA 双链的两条链、让另一条完整的双链穿过这个双链缺口后再封上的酶，每次事件用 ATP 改变 linking number 2 个单位。细菌版本 DNA 促旋酶主动引入负超螺旋；真核 II 型酶只能松弛超螺旋，不能引入负超螺旋。同一套机制也让 II 型酶能够解开拓扑上相互套连的 DNA 环（连环体）的连环。"
      },
      {
        cz: "katenan a dekatenace",
        en: "catenane and decatenation",
        cn: "连环体与解连环",
        def_en: "A catenane is two circular DNA molecules topologically interlinked, unable to be separated without breaking DNA. Type II topoisomerases decatenate them by passing a segment of one circle through a transient break in the other. Bacterial topoisomerase IV specialises in this, resolving the interlinked daughter chromosomes left over at the end of DNA replication.",
        def_cn: "连环体 (catenane) 指两个拓扑上相互套连的环状 DNA 分子，若不打断 DNA 就无法分开。II 型拓扑异构酶通过让一个环的一段穿过另一个环上的瞬时断口来解连环 (decatenation)。细菌的拓扑异构酶 IV 专职负责这件事，解开 DNA 复制收尾时留下的相互套连的子代染色体。"
      },
      {
        cz: "plektonemické superstáčení",
        en: "plectonemic supercoiling",
        cn: "质粒式超螺旋",
        def_en: "The form of negative supercoiling taken up by underwound DNA free in solution: extended, narrow, branched, right-handed coils, with the supercoil axis running to about 40% of the DNA's contour length. Not compact enough on its own to package cellular DNA.",
        def_cn: "游离于溶液中的欠旋 DNA 所呈现的负超螺旋形态：伸展、细窄、带分支的右手螺旋，超螺旋轴线长度约为 DNA 轮廓长度的 40%。本身不够紧凑，无法实现细胞内的 DNA 包装。"
      },
      {
        cz: "solenoidální superstáčení",
        en: "solenoidal supercoiling",
        cn: "螺线管式超螺旋",
        def_en: "An alternative form of negative supercoiling: tight left-handed turns around an imaginary tube, resembling a garden hose wound on a reel, requiring stabilisation by protein binding. Far more compact than plectonemic supercoiling and the primary mechanism by which underwinding achieves DNA compaction in eukaryotic chromosomes.",
        def_cn: "负超螺旋的另一种形态：紧密的左手圈，绕着一根想象中的管子盘绕，如同缠在卷盘上的花园水管，需要蛋白结合来稳定。比质粒式超螺旋紧凑得多，是真核染色体中欠旋实现 DNA 压缩的主要机制。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "A closed-circular plasmid of 3,150 bp has a linking number of 285. What is its superhelical density, and is it positively or negatively supercoiled?",
        q_cn: "一个 3,150 bp 的闭环质粒，linking number 为 285。它的超螺旋密度是多少？是正超螺旋还是负超螺旋？",
        options: [
          "Lk0 = 300, sigma = -0.05, negatively supercoiled",
          "Lk0 = 300, sigma = +0.05, positively supercoiled",
          "Lk0 = 285, sigma = 0, relaxed",
          "Lk0 = 315, sigma = -0.10, negatively supercoiled"
        ],
        answer: 0,
        why_en: "First find Lk0 for the relaxed molecule: 3,150 bp / 10.5 bp per turn = 300. Then Delta-Lk = Lk - Lk0 = 285 - 300 = -15. Superhelical density sigma = Delta-Lk / Lk0 = -15/300 = -0.05. The negative sign means the molecule has fewer helical turns than relaxed B-form -- it is underwound, which by definition is negative supercoiling. This value, -0.05, sits right at the low end of the normal cellular range (-0.05 to -0.07), so it is also a biologically realistic answer, not an extreme or unusual case.",
        why_cn: "先求松弛态分子的 Lk₀：3,150 bp ÷ 10.5 bp/圈 = 300。然后 ΔLk = Lk − Lk₀ = 285 − 300 = −15。超螺旋密度 σ = ΔLk/Lk₀ = −15/300 = −0.05。负号意味着这个分子的螺旋圈数比松弛 B 型少——它是欠旋的，按定义就是负超螺旋。这个数值 −0.05 恰好落在正常细胞范围（−0.05 到 −0.07）的低端，所以这也是一个生物学上真实合理的答案，不是极端或异常情况。"
      },
      {
        type: "mcq",
        q_en: "Why does purified, protein-free closed-circular DNA extracted from cells remain highly supercoiled, rather than relaxing back to the B-form structure once it is out of the cell?",
        q_cn: "为什么从细胞中提取出来的、纯化的、不含蛋白的闭环 DNA 依然高度超螺旋，而不是一旦离开细胞就松弛回 B 型结构？",
        options: [
          "Because the extraction process itself introduces artificial supercoiling that was not present in the living cell",
          "Because supercoiling in a closed circle is a topological property fixed by the linking number, which cannot change without transiently breaking a DNA strand -- so as long as both strands remain intact and uncut, the underwound state (and its supercoiling) persists regardless of whether proteins are present",
          "Because DNA is inherently unstable in the B-form and always prefers the supercoiled state even in isolation from any cellular context",
          "Because residual salt ions from the extraction buffer physically hold the supercoils in place"
        ],
        answer: 1,
        why_en: "The section's key point is that supercoiling in an intact closed circle is a topological property, and topological properties are unaffected by any deformation -- including removal of bound proteins -- as long as no strand is broken. The underwound state (Lk different from Lk0) was set inside the cell by topoisomerases, and once the DNA is a closed circle with both strands intact, that Lk value is locked in: there is no continuous path from the underwound state back to relaxed without transiently cutting a strand, which purification does not do. This is exactly why the persistence of supercoiling after purification is used as evidence that supercoiling is intrinsic to DNA structure rather than a protein-dependent packaging artifact.",
        why_cn: "本节的关键论点是：完整闭环中的超螺旋是一种**拓扑性质**，而拓扑性质在任何形变下——包括去除结合的蛋白——都不受影响，只要没有链被打断。欠旋状态（Lk 不同于 Lk₀）是在细胞内由拓扑异构酶设定的，一旦 DNA 是一个两条链都完整的闭环，这个 Lk 值就被**锁定**了：从欠旋态回到松弛态之间不存在一条不打断链的连续路径，而纯化过程并不会打断链。这正是为什么「纯化后超螺旋依然存在」被用作证据，说明超螺旋是 DNA 结构本身固有的性质，而不是依赖蛋白的包装假象。"
      },
      {
        type: "mcq",
        q_en: "A type II topoisomerase changes linking number by 2 per catalytic event and requires ATP, while a type I topoisomerase changes Lk by only 1 and requires no ATP. What mechanistic difference between the two enzyme classes explains both of these facts at once?",
        q_cn: "II 型拓扑异构酶每次催化事件改变 linking number 2 个单位、需要 ATP；I 型拓扑异构酶只改变 1 个单位、不需要 ATP。这两类酶之间的什么机制差异能同时解释这两个事实？",
        options: [
          "Type II enzymes work twice as fast as type I enzymes, so they simply complete two type-I-style reactions in the time it takes type I to complete one",
          "Type I enzymes nick only one strand and pass the other, unbroken strand through the gap before resealing (one high-energy bond traded for another, no net energy input needed); type II enzymes break both strands of one duplex and pass an entire second duplex through that double-strand gap, a larger, more energy-demanding operation that changes two links' worth of topology at once and is powered by ATP hydrolysis",
          "Type II enzymes use ATP only to recognise their DNA substrate, not to perform the strand-passage step itself",
          "The difference is purely genetic naming convention with no underlying mechanistic distinction"
        ],
        answer: 1,
        why_en: "The magnitude of the Lk change and the ATP requirement both trace back to the same mechanistic fact: how much DNA gets cut and passed through in one event. Type I enzymes break only ONE strand and thread the other, still-intact strand through that single break -- a small, low-energy operation where the enzyme's active-site tyrosine simply trades one high-energy phosphotyrosine-type bond for another during the break-and-reseal cycle, changing Lk by exactly 1. Type II enzymes break BOTH strands of one duplex, creating a double-strand gap large enough for an entire second duplex segment to pass through before resealing -- a mechanically bigger, more energy-intensive operation that necessarily changes Lk by 2 (both strands crossing the gap twice, in effect) and needs ATP hydrolysis (two ATP per cycle in the eukaryotic enzyme) to drive the conformational changes involved in opening the gate, passing the duplex, and resealing.",
        why_cn: "Lk 改变量的大小和是否需要 ATP，两者都追溯到同一个机制事实：一次事件里到底切开并穿过了多少 DNA。I 型酶只切开**一条**链，让另一条**仍然完整**的链穿过这一个断口——这是一个小规模、低能耗的操作，酶活性位点的酪氨酸在「切开-重新封上」的循环中，不过是把一个高能磷酸酪氨酸型的键换成了另一个，恰好改变 Lk **1** 个单位。II 型酶切开一条双链的**两条**链，造出一个足够大的双链缺口，让**整段第二条双链**从中穿过后再封上——这是机械上更大、能耗更高的操作，必然改变 Lk **2** 个单位（相当于两条链都穿过了缺口），并且需要 **ATP 水解**（真核酶每个循环两个 ATP）来驱动开门、穿过双链、重新封口这一系列构象变化。"
      }
    ],
    oral: {
      q_en: "A classmate says 'DNA supercoiling is just what happens when you cram DNA into a small space -- it's a packaging side effect, nothing more.' Correct this, walking through the evidence that supercoiling is intrinsic and regulated, the topological quantity that measures it, and the two enzyme classes that create and remove it.",
      q_cn: "一位同学说「DNA 超螺旋不过是把 DNA 塞进一个小空间里发生的现象——就是个包装的副作用，没别的了。」请纠正这个说法，讲一下证明超螺旋是内在且受调控的证据、度量它的拓扑学量，以及创造和消除它的两类酶。",
      model_en: "The claim gets the causality backwards, and the cleanest evidence against it is what happens when you take packaging out of the picture entirely. Purify a closed-circular plasmid, strip away every protein, and it does not relax back to B-form -- it stays highly supercoiled, and DNA from a given cellular source shows a characteristic, reproducible degree of supercoiling every time. If supercoiling were merely a squeeze-into-a-small-space artifact, removing the squeeze (and the proteins doing the squeezing) should relax the DNA. It does not, because supercoiling in a closed circle is a topological property: it is set by the linking number, Lk, which cannot change under any bending, thermal motion, or protein interaction -- only by transiently breaking a strand. Once cellular enzymes have set an underwound Lk inside the cell, that value is locked in as long as the circle stays closed, regardless of what happens to the surrounding proteins afterward. So the real picture is: underwinding is deliberate, cell-regulated strain, stored ahead of time, precisely because separating DNA strands for replication or transcription costs energy, and a molecule that already carries structural strain from having too few helical turns gives some of that energy up front. The underwound state is quantified as superhelical density, sigma equals (Lk minus Lk0) over Lk0, where Lk0 is the linking number of the same DNA fully relaxed -- bp divided by about 10.5. Real cellular DNAs sit tightly at sigma around -0.05 to -0.07, negative because the DNA is underwound; that is negative supercoiling, and overwinding would give positive sigma and positive supercoiling instead. Two enzyme classes actively set and adjust this value, and they are not optional bystanders -- they consume real cellular resources to do it. Type I topoisomerases nick one strand, pass the other through, and reseal, changing Lk by 1 with no ATP needed. Type II topoisomerases -- DNA gyrase in bacteria -- break both strands of one duplex and pass an entire second duplex through the gap, changing Lk by 2, and this does require ATP, because it is a much larger mechanical operation. In bacteria, gyrase actively introduces negative supercoils using that ATP, while type I enzymes relax them, and the balance between the two sets the cell's steady-state sigma -- which is itself evidence of active regulation, not passive packaging. Type II enzymes have a second job that follows from the same mechanism: because they can pass one whole duplex through a break in another, they can also decatenate two topologically interlinked DNA circles, which matters directly when daughter chromosomes end up tangled together at the end of replication. Finally, even the physical shape of supercoiling argues against the packaging-side-effect view: free in solution, underwound DNA takes the plectonemic form, extended and branched, which is not compact enough to package a cell's DNA on its own. The form that actually achieves compaction, solenoidal supercoiling -- tight left-handed turns around bound protein -- requires protein in the first place. So supercoiling does not result from squeezing DNA into a small space -- packaging depends on supercoiling, not the other way around, and specifically it depends on the solenoidal form that only exists because protein binding stabilises it.",
      model_cn: "这个说法把因果关系搞反了，而反驳它最干净的证据就是：把「包装」这个因素完全拿掉之后会发生什么。纯化一个闭环质粒，剥掉所有蛋白，它并不会松弛回 B 型——它依然高度超螺旋，而且来自某个特定细胞来源的 DNA，每次都表现出一个特有的、可重复的超螺旋程度。如果超螺旋只是「被挤进小空间」的假象，那么去掉这种挤压（以及施加挤压的蛋白）应该会让 DNA 松弛下来。但它没有，因为闭环中的超螺旋是一种拓扑性质：它由 linking number（Lk）设定，而 Lk 在任何弯曲、热运动或蛋白相互作用下都不会改变——只有短暂打断某条链才会改变它。一旦细胞内的酶设定好了一个欠旋的 Lk 值，只要这个环保持闭合，这个数值就被锁定了，不管之后周围的蛋白发生了什么。所以真实的图景是：欠旋是**刻意的、受细胞调控的**应变，是**提前储存**起来的——之所以这样做，恰恰是因为复制或转录时把 DNA 链分开需要消耗能量，而一个本身就因螺旋圈数不足而带有结构应变的分子，等于**提前预支**了一部分这份能量。这种欠旋状态被量化为超螺旋密度，σ 等于 (Lk 减 Lk₀) 除以 Lk₀，其中 Lk₀ 是同一段 DNA 完全松弛时的 linking number——碱基对数除以约 10.5。真实的细胞 DNA 紧密地落在 σ 约 −0.05 到 −0.07 之间，是负值，因为 DNA 被欠旋；这就是负超螺旋，而过度缠绕则会给出正的 σ 和正超螺旋。有两类酶主动设定并调整这个数值，它们不是可有可无的旁观者——它们要消耗真实的细胞资源才能做到这件事。**I 型**拓扑异构酶切开一条链、让另一条穿过、再封上，改变 Lk 1 个单位，不需要 ATP。**II 型**拓扑异构酶——细菌里的 DNA 促旋酶——切开一条双链的两条链，让整段第二条双链穿过缺口，改变 Lk 2 个单位，而这**确实需要 ATP**，因为这是机械上大得多的操作。在细菌中，促旋酶用这份 ATP 主动引入负超螺旋，而 I 型酶负责松弛它们，两者的平衡决定了细胞稳态下的 σ 值——这本身就是**主动调控**、而非被动包装的证据。II 型酶还有第二项工作，直接源自同一套机制：因为它们能让一整段双链穿过另一条链上的断口，所以它们也能解开两个拓扑上相互套连的 DNA 环的连环——这在两条子代染色体在复制收尾时相互缠绕在一起的时候，直接派上用场。最后，就连超螺旋的物理形态本身，也和「包装副作用」这种看法相矛盾：游离于溶液中的欠旋 DNA 呈现的是 plectonemic 形态，伸展且带分支，本身并不够紧凑，无法单独实现细胞 DNA 的包装。真正实现压缩的形态——solenoidal 超螺旋，即绕着结合蛋白的紧密左手圈——本身就**需要蛋白**才能存在。所以并不是把 DNA 挤进一个小空间导致了超螺旋——恰恰相反，包装**依赖于**超螺旋，而且具体依赖的是那种唯有蛋白结合才能稳定存在的 solenoidal 形态。",
      checklist: [
        "Cited the persistence of supercoiling after purification (protein-free, still supercoiled, characteristic degree) as evidence it is intrinsic, not a packaging side effect",
        "Explained linking number (Lk) as a true topological invariant, unchanged by any deformation short of a transient strand break",
        "Connected underwinding to stored energy that facilitates strand separation for replication/transcription, not merely to compaction",
        "Defined superhelical density sigma = (Lk-Lk0)/Lk0 and gave the typical cellular range (-0.05 to -0.07)",
        "Distinguished type I (nicks one strand, no ATP, Lk changes by 1) from type II (breaks both strands, needs ATP, Lk changes by 2) topoisomerases",
        "Named DNA gyrase as the bacterial type II enzyme that actively introduces negative supercoils",
        "Explained decatenation as a second function of type II topoisomerases, tied to the end of DNA replication",
        "Distinguished plectonemic (free in solution, not compact enough alone) from solenoidal (protein-stabilised, achieves real compaction) supercoiling",
        "Concluded that packaging depends on supercoiling rather than the reverse"
      ]
    }
  }

);
