/* Spines for chapter 5 and chapter 6 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.
   House rules are in SPINE_SPEC.md; the two that do most of the work here are
   "introduce every noun you use" and "every structural claim gets its consequence".

   Chapter 5 §5.1  L-5-1-1  oxygen-binding proteins
   Chapter 6 §6.3  L-6-3-1  enzyme kinetics
   Chapter 6 §6.4  L-6-4-1  four catalytic ideas inside three real enzymes

   `beyond: true` marks detail that is standard and commonly examined but is NOT on
   the source pages the node was read from. Nothing here needed it except where
   marked; the three nodes are unusually well covered by their own pages.

   Numbers are quoted as they stand on the cited pages. Where the source flattens an
   exponent in scanning, the figure is written out in words instead of guessed. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

window.BIOLITE_SPINE["L-5-1-1"] = {
  assumed: ["protein", "amino acid", "enzyme", "gene", "cell", "DNA", "hydrogen bond",
            "pH", "ligand", "buffer", "helix", "alpha helix"],
  nodeTitle_en: "Oxygen-binding proteins",
  nodeTitle_cn: "氧结合蛋白",
  title_en: "Why oxygen needs a caged iron, and how four separate sites become one switch",
  title_cn: "为什么运氧非要一个被关起来的铁，以及四个独立的位点怎么变成一个开关",
  steps: [
    {
      en: "Oxygen dissolves badly in water, so serum cannot carry enough of it dissolved, and oxygen moving through tissue by diffusion stops working beyond a few millimetres. Any animal larger than that needs a protein that picks oxygen up and hands it over. **No amino acid side chain in a protein binds oxygen reversibly**, so the job has to go to a transition metal — a metal that can hold a small molecule and let it go again — and the metal used is iron.",
      cn: "氧在水里溶解度很差，光溶在血清里带不了足够的量；而氧靠扩散穿过组织，超过几毫米就不管用了。比这更大的动物，就必须有一个能把氧接过来、又能把氧交出去的蛋白质。**可是蛋白质里没有任何一种氨基酸侧链能可逆地结合氧，所以这活儿只能交给过渡金属（transition metal）—— 一种能抓住小分子、又能把它松开的金属 —— 而被选中的是铁。**",
      src: "A p.148, §5.1"
    },
    {
      link_en: "and iron arrives with two problems of its own",
      link_cn: "而铁自己带着两个麻烦来",
      en: "Free iron drives the formation of hydroxyl radicals, which are highly reactive fragments that damage DNA and other large molecules. And a free Fe2+ ion is oxidised to Fe3+ the first time it meets oxygen — Fe3+ binds no oxygen at all, so a free iron atom is good for exactly one use. **Iron therefore has to be caged twice while it works. The first cage is heme: a flat protoporphyrin ring whose four nitrogen atoms grip one Fe2+ and donate electrons that help keep it in the Fe2+ state.** Those four bonds leave two more, one on each face of the ring. The second cage is the protein, which buries the heme deep enough that nothing from the solution can reach those two bonds, and parks a conserved histidine permanently on one of them — the proximal His, His93, also written His F8 because it is the eighth residue of helix F. One bond is left over, and that is the oxygen site. The consequence is visible in a blood tube: venous blood is dark purple and arterial blood is bright red, and the difference is whether that sixth bond is occupied.",
      cn: "游离的铁会促成羟自由基（hydroxyl radical，一种活性极高的碎片）的生成，去损伤 DNA 和别的大分子。而游离的 Fe²⁺ 只要碰上一次氧就被氧化成 Fe³⁺，而 Fe³⁺ 根本不结合氧 —— 所以一个游离的铁原子只够用一次。**因此铁必须一边干活、一边被关两层。第一层是 heme（血红素）：一个扁平的原卟啉环，环上四个氮原子夹住一个 Fe²⁺，并给出电子帮它维持在 Fe²⁺ 状态。**这四条键之外还剩两条，环的每一面各一条。第二层是外面的蛋白：它把 heme 埋得很深，溶液里的东西够不到那两条键，同时把一个高度保守的组氨酸永久停在其中一条上 —— 这就是近端组氨酸 proximal His，即 His93，也写作 His F8，因为它是 F 螺旋的第八个残基。于是只剩下一条键，那条就是氧的结合位点。后果在一管血里就看得见：静脉血暗紫、动脉血鲜红，差别就在于那第六条键有没有被占上。",
      src: "A p.148–149, §5.1"
    },
    {
      link_en: "one cofactor, and more than one job",
      link_cn: "同一个辅因子，不止一份工作",
      en: "Globins are a family, not a single protein — proteins built on one shared fold, found in eukaryotes of every class and in archaea and bacteria, all descended from one ancestor. In humans there are at least four. Myoglobin is one chain with one heme and stores oxygen in muscle, most abundantly in seals and whales, which need a reserve for a long dive. Haemoglobin is four chains and transports oxygen in blood. Neuroglobin sits in neurons and helps protect the brain when oxygen or blood supply runs short. Cytoglobin sits at high concentration in blood-vessel walls, where it regulates the level of nitric oxide, a signalling gas — so a globin can be a regulator rather than a carrier. **What the family shares is shape and not sequence: eight alpha-helical segments joined by bends, a pattern called the globin fold, while the sequences have drifted far apart.** Myoglobin is 153 residues with about 78 percent of them inside those eight helices, and the nematode worm Caenorhabditis elegans carries genes for 33 different globins. Structure outlasts sequence.",
      cn: "globin 是一整个家族，不是某一个蛋白 —— 它们共用同一种折叠，见于各类真核生物以及古菌和细菌，全都来自同一个祖先。人身上至少有四种。肌红蛋白 myoglobin：单链、单个 heme，在肌肉里储存氧，在海豹和鲸身上最多，因为长时间潜水需要一份存货。血红蛋白 haemoglobin：四条链，在血液里运输氧。神经球蛋白 neuroglobin：在神经元里，帮助大脑在缺氧或缺血时少受损伤。胞球蛋白 cytoglobin：高浓度地待在血管壁里，在那里调节一氧化氮（一种信号气体）的水平 —— 所以 globin 可以是个调节者，而不必是个搬运工。**这个家族共有的是形状，不是序列：八段 α-螺旋由转角连起来，这个式样叫 globin 折叠（globin fold），而它们的序列早已各奔东西。**肌红蛋白共 153 个残基，其中约 78% 落在那八段螺旋里；线虫 Caenorhabditis elegans 身上带着编码 33 种不同 globin 的基因。结构比序列活得久。",
      src: "A p.149, §5.1",
      see: [
        { id: "6-3-1", en: "the heme proteins side by side, including the ones that do change valence", cn: "各种 heme 蛋白并排比较，包括那些真的会变价的" },
        { id: "L-19-1-1", en: "cytochromes — the same heme deliberately cycling Fe2+/Fe3+ to move electrons", cn: "细胞色素 —— 同一个 heme 故意在 Fe²⁺/Fe³⁺ 之间来回，用来传电子" }
      ]
    },
    {
      link_en: "before anything can be compared, binding needs a number",
      link_cn: "在比较任何东西之前，先得能给「结合」一个数",
      en: "**The dissociation constant Kd is the concentration of ligand — the molecule the protein binds — at which half of the protein's binding sites are filled, in moles per litre.** Note the direction, which is the thing most often reversed: a lower Kd means tighter binding, because a protein that grips hard needs less ligand around to fill half its sites. Getting to 90 percent occupancy takes nine times Kd, which is why a saturation curve flattens so slowly. Real values span ten orders of magnitude, from avidin holding biotin at around a femtomolar — tight enough to count as permanent — up to calmodulin holding calcium in the micromolar range. A quoted Kd is only good for the salt concentration and pH it was measured at. Oxygen is a gas, so nobody measures how much is dissolved; the experiment sets the partial pressure of oxygen in the gas above the liquid, since the amount dissolved is proportional to that pressure. Putting pressure where concentration was turns Kd into P50: the partial pressure at which half the sites are filled.",
      cn: "**解离常数 Kd 就是「配体（ligand，也就是蛋白要结合的那个分子）浓度达到多少时，蛋白的结合位点被占了一半」，单位是摩尔每升。**注意方向，这是最常被搞反的一点：Kd 越小，结合越紧 —— 因为抓得越牢的蛋白，周围只要更少的配体就能填满一半位点。要达到 90% 的占据，配体浓度得是 Kd 的九倍，这就是饱和曲线为什么变平得那么慢。真实数值横跨十个数量级：亲和素抓生物素大约在飞摩尔量级（紧到可以当作不可逆），钙调蛋白抓钙则在微摩尔量级。还有一句必须记住的：报出来的 Kd 只对测定时的盐浓度和 pH 有效。氧是气体，所以没人去测它溶了多少；实验测的是液面上方气相中氧的分压，因为溶进去的量与这个分压成正比。把浓度换成分压，Kd 就变成 P50：位点被占一半时的氧分压。",
      src: "A p.150–151, §5.1"
    },
    {
      link_en: "put myoglobin's number in and its job description falls out",
      link_cn: "把肌红蛋白的数字代进去，它的职务说明就自己掉出来了",
      en: "Myoglobin's P50 is 0.26 kilopascals. That is very low, so myoglobin holds oxygen very tightly — and **something that holds oxygen this tightly stores it rather than delivering it, because it will not let go until the oxygen around it is nearly gone.** That is exactly the job it has. Its binding curve is a rectangular hyperbola: it climbs steeply at low pressure, then bends over and creeps towards a plateau it never quite reaches. That is the only shape a protein with one independent binding site can give, and it is relatively insensitive to small changes in oxygen supply. Hold this curve — the whole argument about haemoglobin is built against it.",
      cn: "肌红蛋白的 P50 只有 0.26 千帕。这个值非常低，说明它把氧抓得很紧 —— **而抓得这么紧的东西是储存氧的，不是输送氧的，因为不到周围的氧快耗光，它是不会松手的。**这恰恰就是它的工作。它的结合曲线是一条直角双曲线：低分压下陡升，然后拐弯，慢慢爬向一个永远够不到的平台。只有一个独立结合位点的蛋白，只能给出这一种形状，而且它对氧供应的小幅变化相当不敏感。把这条曲线记住 —— 后面关于血红蛋白的全部论证，都是踩着它建起来的。",
      src: "A p.150, §5.1"
    },
    {
      link_en: "and the protein around the heme is not just a box for it",
      link_cn: "而 heme 外面那层蛋白，不只是个盒子",
      recall_en: "the proximal His took the fifth bond two steps up; this is the residue facing it",
      recall_cn: "上面第五条键被 proximal His 占走了；这里说的是正对着它的那个残基",
      en: "On the face of the heme opposite the proximal His sits a second histidine, the distal His, His64 or His E7. It never coordinates the iron, and it does two separate jobs. First, it is the defence against carbon monoxide. On free heme, CO binds more than 20,000 times better than oxygen, and if heme behaved that way inside a protein you would be killed by the trace of CO that your own metabolism — the ordinary chemistry running in your cells — turns out every day. **The iron-oxygen complex is much more polar than the iron-CO complex, so the distal His can hydrogen-bond to bound O2 and stabilise it electrostatically while offering CO nothing.** That raises myoglobin's affinity for oxygen specifically, by about 500-fold, and cuts CO's advantage from 20,000-fold on free heme to about 40-fold inside myoglobin. Some invertebrate haemoglobins put two hydrogen-bonding groups in the pocket and end up binding oxygen more tightly than CO, reversing the free-heme order outright. Second, the distal His is the door. The heme is buried, so a rigid protein would let no oxygen in or out at all; instead the side chains flex constantly and open transient cavities, and the distal His swings open and shut over the pocket beside the iron on a nanosecond timescale. A protein structure diagram is a time-average, not a photograph of something rigid.",
      cn: "在 heme 上与 proximal His 相对的那一面，坐着第二个组氨酸：远端组氨酸 distal His，即 His64、His E7。它从不与铁配位，却干着两件不同的事。第一，它是对付一氧化碳的防线。在游离的 heme 上，CO 的结合比氧强 20,000 倍以上；如果 heme 在蛋白里也这么干，你自己代谢每天产生的那一点点 CO 就足以致命。**铁-氧复合物的极性远高于铁-CO 复合物，所以 distal His 能与结合上的 O₂ 形成氢键、以静电方式稳住它，而对 CO 什么也不给。**结果是它专门把肌红蛋白对氧的亲和力提高了约 500 倍，把 CO 的优势从游离 heme 上的两万倍压到肌红蛋白里的约四十倍。某些无脊椎动物的血红蛋白在口袋里放了两个能形成氢键的基团，结果结合氧比结合 CO 还紧，把游离 heme 上的次序整个颠倒了过来。第二，distal His 是那扇门。heme 埋得很深，如果蛋白是刚性的，氧根本进不去也出不来；实际上侧链一直在快速摆动、打开一个个瞬时空腔，而 distal His 就在铁旁边那个口袋上以纳秒级的节奏一开一合。蛋白质结构图是一张时间平均图，不是某个刚性物体的照片。",
      src: "A p.153, §5.1"
    },
    {
      link_en: "myoglobin stores. Delivery is a different molecule and a different problem",
      link_cn: "肌红蛋白管储存。输送是另一个分子、另一个问题",
      en: "Haemoglobin is a tetramer — four chains, one heme each — with a relative molecular mass of 64,500, roughly spherical and nearly 5.5 nanometres across. Adult haemoglobin has two alpha chains of 141 residues and two beta chains of 146. All four subunits look much like each other and much like myoglobin, and yet fewer than half the residues are identical between an alpha and a beta chain, and only 27 residues are identical across all three of myoglobin, alpha and beta. It is dissolved at about 34 percent by weight in the cytosol of erythrocytes — red cells 6 to 9 micrometres across and biconcave, which throw out their nucleus, mitochondria and endoplasmic reticulum as they mature, cannot divide afterwards, and last about 120 days. And here is the number everything below depends on: **blood leaving the lungs is about 96 percent saturated with oxygen, blood coming back past a tissue is about 64 percent saturated, so each 100 millilitres of blood hands over about one third of what it carries** — 6.5 millilitres of oxygen gas.",
      cn: "血红蛋白是一个四聚体 tetramer —— 四条链，每条一个 heme —— 相对分子质量 64,500，大致呈球形，直径近 5.5 纳米。成人血红蛋白由两条 141 个残基的 α 链和两条 146 个残基的 β 链组成。四个亚基彼此长得很像，也很像肌红蛋白；然而 α 与 β 之间相同的残基还不到一半，而在肌红蛋白、α、β 三者中全都相同的只有 27 个。它以约 34%（重量比）溶在红细胞的胞质里 —— 红细胞直径 6 到 9 微米、双凹形，成熟过程中把细胞核、线粒体和内质网都扔掉，此后不能分裂，寿命约 120 天。而下面一切都建立在这个数字上：**离开肺的血氧饱和度约 96%，流经组织后回来的血约 64%，所以每 100 毫升血把自己携带的氧交出去大约三分之一** —— 折合 6.5 毫升氧气。",
      src: "A p.153–154, §5.1"
    },
    {
      link_en: "one third is exactly what a hyperbola cannot deliver",
      link_cn: "而「三分之一」恰恰是双曲线交不出来的东西",
      recall_en: "the hyperbola is myoglobin's curve, three steps up",
      recall_cn: "双曲线就是上面第三步里肌红蛋白那条曲线",
      en: "In the lungs the partial pressure of oxygen is about 13.3 kilopascals; in a working tissue it is about 4. A protein with a hyperbolic curve has one affinity and is trapped by it: bind tightly and it loads in the lungs and refuses to unload in the tissue; bind loosely and it unloads but never loads. No single affinity solves both ends. **Haemoglobin escapes by having two. It has a low-affinity form and a high-affinity form, and it shifts from the first to the second as successive O2 molecules bind, so its curve is a blend of two hyperbolas — S-shaped, or sigmoid.** The first O2 binds weakly to a subunit in the low-affinity form; that binding is communicated to the neighbouring subunits and makes the next switch easier; the fourth O2 binds to a subunit that has already switched, and binds far more tightly than the first did. A protein with a single binding site cannot produce a sigmoid curve even if binding changes its conformation, because every such molecule binds on its own and cannot influence any other — this behaviour, called cooperativity, needs several sites inside one molecule. The vocabulary follows: a protein in which binding at one site changes binding at another is allosteric; the effect is homotropic when the molecule doing the changing is the ordinary ligand itself, which is O2 acting on O2 here, and heterotropic when it is some other molecule.",
      cn: "肺里氧分压约 13.3 千帕，正在干活的组织里约 4 千帕。双曲线型的蛋白只有一个亲和力，于是被它困住：抓得紧，就在肺里装得上、在组织里卸不下；抓得松，就卸得下、装不上。没有任何单一的亲和力能同时解决两头。**血红蛋白的出路是拥有两个亲和力。它有一个低亲和力形式和一个高亲和力形式，随着一个个 O₂ 结合上来，它从前者转向后者，所以它的曲线是两条双曲线的混合 —— S 形，即 sigmoid。**第一个 O₂ 弱弱地结合到一个还处在低亲和力形式的亚基上；这次结合被传给相邻亚基，让下一次转换更容易；第四个 O₂ 结合到一个已经转换过的亚基上，因而比第一个紧得多。只有一个结合位点的蛋白，哪怕结合会改变它的构象，也产生不出 S 形曲线 —— 因为这样的每个分子都各结合各的，谁也影响不了谁。这种行为叫协同性 cooperativity，它要求同一个分子里有好几个位点。术语随之而来：一个位点的结合会改变另一个位点结合性质的蛋白，叫变构蛋白 allosteric；当引起改变的分子就是那个普通配体本身（这里是 O₂ 作用于 O₂），叫同促 homotropic；当它是另一种分子，叫异促 heterotropic。",
      src: "A p.156, §5.1",
      see: [
        { id: "3-7", en: "allosteric enzymes — the same switch used to control a reaction rate", cn: "别构酶 —— 同一个开关被拿去控制反应速率" }
      ]
    },
    {
      link_en: "the two forms have names, structures, and a mechanical link between them",
      link_cn: "这两个形式各有名字、各有结构，而且中间有一条力学链条",
      en: "**The low-affinity form is called T, for tense, and the high-affinity form R, for relaxed.** T is held together by a larger number of ion pairs — side chains of opposite charge locked against each other — many of them across the contacts between unlike subunits, and T is the form that predominates when no oxygen is bound. The contacts are not equal, and the inequality is the mechanism: the alpha1-beta1 contact uses more than 30 residues and never moves, so mild urea treatment splits the tetramer into alpha-beta dimers that stay intact, while the alpha1-beta2 contact uses 19 residues and is the one that slides. Max Perutz worked out the chain of events, and it is purely mechanical. In T the porphyrin ring is slightly puckered and the iron sticks out of it towards the proximal His; when O2 binds it pulls the iron down into the plane of a now flatter ring; the proximal His and the F helix attached to it are dragged along; and that displacement resets the ion pairs at the alpha1-beta2 contact, so the alpha-beta pairs rotate past each other. One small molecule landing on one iron atom is thereby converted into a movement of the whole protein. That rotation also narrows a pocket sitting between the two beta subunits — keep that pocket in mind, because it turns out to have a tenant.",
      cn: "**低亲和力的那个形式叫 T 态（tense，紧张），高亲和力的叫 R 态（relaxed，松弛）。**T 态由更多的离子对（电荷相反的侧链互相锁住）维系，其中很多位于不同类型亚基之间的接触面上；没有氧结合时，占主导的就是 T 态。这些接触面并不对等，而这种不对等正是机制所在：α1-β1 接触用了 30 多个残基，从不移动 —— 用尿素温和处理会把四聚体拆成 αβ 二聚体，而这些二聚体本身完好无损；α1-β2 接触只用 19 个残基，而它才是会滑动的那一个。Max Perutz 把事件链推了出来，而这条链纯粹是力学的：T 态下卟啉环略微皱曲，铁从环里向 proximal His 那一侧突出来；O₂ 一结合，就把铁拉进如今变平的环平面里；与铁相连的 proximal His 连同 F 螺旋一起被拽着走；这个位移又重新排布了 α1-β2 接触面上的离子对，于是两对 αβ 彼此转动滑过。一个小分子落在一个铁原子上，就这样被换算成了整个蛋白的一次运动。这次转动还会让两个 β 亚基之间的一个口袋变窄 —— 请把这个口袋记住，它后面是有房客的。",
      src: "A p.155–156, §5.1"
    },
    {
      link_en: "so cooperativity can be seen. Can it be measured?",
      link_cn: "协同性看得见了。那能不能测出来？",
      en: "Archibald Hill put a number on it in 1910. Plot the logarithm of the ratio of filled to empty sites against the logarithm of the oxygen pressure and the result is a straight line, a Hill plot, whose slope the equation predicts should equal n, the number of binding sites. It does not. **The measured slope reports how strongly the sites interact with each other, and it is called the Hill coefficient, nH.** An nH of 1 means no cooperativity at all, which even a multi-subunit protein shows if its subunits do not communicate; above 1 is positive cooperativity, haemoglobin's case; below 1 is negative cooperativity, where one bound ligand hinders the next, and well-documented examples of that are rare. nH could equal n only if every site filled at the same instant and no partly loaded molecule ever existed, which never happens — so the measured nH is always smaller than the true number of sites. Haemoglobin has four sites and its highest observed nH is about 3. Reading that 3 as a count of subunits is a plain error.",
      cn: "Archibald Hill 在 1910 年给它配上了一个数。把「已占位点与空位点之比」的对数对「氧分压」的对数作图，得到一条直线，叫 Hill 图（Hill plot）；按方程，它的斜率应该等于结合位点数 n。事实并非如此。**实测的斜率报告的是这些位点彼此相互作用有多强，它被称为 Hill 系数 nH。**nH 等于 1，表示完全没有协同 —— 一个多亚基蛋白只要亚基之间不通讯，也会是 1；大于 1 是正协同，即血红蛋白的情形；小于 1 是负协同，即一个配体的结合妨碍下一个，而有充分记载的例子很少见。nH 只有在「所有位点同一瞬间被填满、从不存在半载分子」时才可能等于 n，而这种事从不发生 —— 所以实测的 nH 永远小于真实的位点数。血红蛋白有四个位点，观测到的最大 nH 约为 3。把这个 3 当作亚基数目来读，是一个干脆的错误。",
      src: "A p.157–158, §5.1"
    },
    {
      link_en: "and how do four subunits switch together? Two answers, both still standing",
      link_cn: "那四个亚基究竟是怎么一起转换的？两个答案，至今都还立着",
      en: "**The concerted model, put forward by Monod, Wyman and Changeux in 1965, says the subunits are functionally identical, each has at least two conformations, and all of them switch at the same instant**, so a molecule with its subunits in different conformations never exists — hence its other name, all-or-none. The two conformations sit in equilibrium, ligand binds to both but far more tightly to R, and each successive binding drags the equilibrium further towards R. The sequential model, put forward by Daniel Koshland and colleagues in 1966, instead lets ligand binding change the conformation of one subunit on its own, with a change in one making the same change in its neighbour more likely, which permits many partly switched intermediate states. The two are compatible: the concerted model is the all-or-none limiting case of the sequential one. The same pair of models comes back for allosteric enzymes.",
      cn: "**协同模型（concerted model，又称 MWC 模型）由 Monod、Wyman 与 Changeux 于 1965 年提出：各亚基在功能上完全相同，每个至少有两种构象，而且所有亚基在同一瞬间一起转换** —— 因此任何时候都不存在「各亚基构象不一致」的分子，这也是它别名「全或无模型」的由来。两种构象处在平衡中，配体两者都能结合、但与 R 态紧得多，每多结合一次就把平衡再往 R 拖一点。序变模型（sequential model）由 Daniel Koshland 及同事于 1966 年提出：配体的结合可以只改变一个亚基的构象，而一个亚基变了会让相邻亚基发生同样变化的可能性升高，于是允许存在很多「部分转换」的中间状态。两者并不互斥：协同模型正是序变模型的「全或无」极限情形。讲到别构酶时，同样这一对模型会再来一次。",
      src: "A p.159–160, §5.1",
      openQuestion_en: "Which of the two actually describes haemoglobin has proven very difficult to settle by experiment, and sixty years on the question is still open.",
      openQuestion_cn: "这两个模型究竟哪一个描述的是真实的血红蛋白，在实验上被证明**极难区分**；六十年过去，这个问题仍然没有定论。",
      see: [
        { id: "3-7", en: "the same two models applied to allosteric enzymes", cn: "同样这两个模型被用在别构酶上" }
      ]
    },
    {
      link_en: "a switch that helps you can also be turned against you",
      link_cn: "帮得了你的开关，也能被反过来对付你",
      recall_en: "the same cooperativity of the sigmoid curve, running the wrong way",
      recall_cn: "还是 S 形曲线背后那个协同性，只是这次跑反了方向",
      en: "Carbon monoxide is colourless and odourless and is one of the commonest causes of death by poisoning — nearly 4,000 deaths a year in the United States alone. On haemoglobin it forms carboxyhaemoglobin, written COHb, and because it binds tightly, COHb builds up over time from a steady low-level source: a healthy person sits at 1 percent or less, many smokers at 3 to 8 percent and chain-smokers up to 15, which is why a smoker exposed to a CO source develops symptoms sooner. Symptoms are rare below 10 percent, 15 percent brings a mild headache, 20 to 30 percent a severe headache with nausea, dizziness, confusion and disturbed vision, 30 to 50 percent serious neurological signs, near 50 percent unconsciousness and coma, and death usually follows above 60 percent. Now the part that is genuinely counterintuitive: a person with anaemia manages reasonably well on half the normal amount of haemoglobin, yet losing half of it to CO can kill. **CO does more than take subunits out of service — once it occupies one or two subunits of a tetramer it raises the oxygen affinity of the subunits still free.** Such a tetramer loads oxygen efficiently in the lungs and then releases almost none of it in the tissues. Treatment follows straight from the binding: removed from the source, COHb falls with a half-time of 2 to 6.5 hours; 100 percent oxygen through a mask speeds that about fourfold; 100 percent oxygen at 3 atmospheres brings the half-time down to tens of minutes.",
      cn: "一氧化碳无色无味，是最常见的中毒致死原因之一 —— 仅美国每年就有近 4,000 人死于它。它与血红蛋白结合形成碳氧血红蛋白 carboxyhaemoglobin（COHb）；由于结合很紧，只要有一个持续的低水平来源，COHb 就会随时间累积：健康人在 1% 或以下，许多吸烟者在 3%–8%，重度吸烟者可达 15% —— 这正是吸烟者在同样的 CO 暴露下症状出现更早的原因。低于 10% 很少有症状；15% 轻度头痛；20%–30% 剧烈头痛并伴恶心、头晕、意识模糊、视觉障碍；30%–50% 出现严重神经系统体征；接近 50% 意识丧失、昏迷；超过 60% 通常死亡。接下来是真正反直觉的那部分：贫血的人靠正常量一半的血红蛋白也能过得相当好，可把一半血红蛋白输给 CO 却可能致命。**CO 干的事不止是把亚基从可用池里拿走 —— 它一旦占住四聚体的一两个亚基，就会提高其余空着的亚基对氧的亲和力。**这样的四聚体在肺里高效装载，到了组织几乎什么都不放。治疗方案直接从结合常数推出来：离开污染源后 COHb 下降的半衰期是 2 到 6.5 小时；面罩给 100% 氧可把交换加快约四倍；3 个大气压下给 100% 氧，半衰期缩短到几十分钟。",
      src: "A p.157–159, §5.1, Box 5-1"
    },
    {
      link_en: "the switch has three deliberate controls on it, and the first two are waste",
      link_cn: "这个开关上装了三个有意的控制阀，头两个是废物",
      en: "Haemoglobin carries two more cargoes, in the opposite direction: about 40 percent of the H+ and 15 to 20 percent of the CO2 produced in the tissues travel back to the lungs and kidneys on haemoglobin, the rest handled by dissolved CO2 and by the bicarbonate buffer of the plasma. The two cargoes are linked. CO2 is not very soluble, so erythrocytes are packed with carbonic anhydrase, an enzyme that hydrates CO2 into bicarbonate before bubbles can form — and that hydration releases H+. So a tissue working hard becomes more acidic and richer in CO2 at the same time, and **H+ and CO2 both stabilise T, so both lower haemoglobin's affinity for oxygen. The result is a delivery system that aims itself: oxygen comes off preferentially wherever acid and CO2 are being made, which is wherever oxygen is being consumed**, and in the lung capillaries the whole thing runs backwards. This is the Bohr effect, described by Christian Bohr in 1904. Blood pH is 7.6 in the lungs and 7.2 in the tissues — 0.4 pH units doing real work. Two named mechanisms carry it, and neither is at the heme: H+ protonates His146 (His HC3), the carboxyl-terminal residue of each beta chain, and the protonated form makes an ion pair with Asp94 — one of the very ion pairs that hold T together. CO2 attaches as a carbamate group to the free alpha-amino group at the start of each globin chain, giving carbaminohaemoglobin; that reaction itself releases H+, so it feeds the Bohr effect twice over, and the bound carbamates add further salt bridges that hold T.",
      cn: "血红蛋白还朝反方向运两样货：组织里产生的 H⁺ 约有 40%、CO₂ 约有 15%–20% 是搭着血红蛋白回到肺和肾的，其余由溶解态 CO₂ 和血浆碳酸氢盐缓冲体系承担。这两样货是连在一起的。CO₂ 溶解度不高，所以红细胞里塞满了碳酸酐酶 carbonic anhydrase —— 一种在气泡形成之前就把 CO₂ 水合成碳酸氢根的酶 —— 而这个水合反应会放出 H⁺。于是一块正在卖力工作的组织同时变得更酸、CO₂ 更多；**而 H⁺ 与 CO₂ 都稳定 T 态，所以两者都降低血红蛋白对氧的亲和力。结果是一套会自己瞄准的输送系统：哪里在产酸、产 CO₂，氧就优先卸在哪里 —— 而那正是氧正在被消耗的地方**；到了肺毛细血管，整个过程反着走。这就是 Bohr 效应，由 Christian Bohr 于 1904 年描述。血液 pH 在肺里是 7.6、在组织里是 7.2 —— 0.4 个 pH 单位在实实在在地干活。承担它的是两条有名有姓的机制，而且都不在 heme 上：H⁺ 使 His146（His HC3，每条 β 链的羧基末端残基）质子化，质子化后的它与 Asp94 形成一个离子对 —— 而这正是维系 T 态的那些离子对之一。CO₂ 则以氨基甲酸酯（carbamate）的形式接到每条 globin 链起始端那个游离的 α-氨基上，生成氨基甲酰血红蛋白 carbaminohaemoglobin；这个反应本身又放出 H⁺，因此对 Bohr 效应是双重加成，而结合上的氨基甲酸酯还额外形成盐桥，继续把 T 态按住。",
      src: "A p.160–161, §5.1"
    },
    {
      link_en: "and the third control is the tenant of that pocket",
      link_cn: "而第三个控制阀，就是那个口袋的房客",
      recall_en: "the pocket between the beta subunits, from the T-to-R step",
      recall_cn: "就是 T→R 那一步里，两个 β 亚基之间那个会变窄的口袋",
      en: "2,3-bisphosphoglycerate, BPG, is a small and heavily negatively charged molecule present at high concentration inside erythrocytes, and it lowers haemoglobin's affinity for oxygen sharply. Its site is the cavity between the two beta subunits in the T state, lined with positively charged side chains that grip BPG's negative charges. **Only one BPG binds per tetramer, against four O2, and the cavity closes up on oxygenation — so BPG works by holding the molecule in T.** The sharpest way to see this is its absence: with no BPG, haemoglobin sits mostly in R, loads beautifully in the lungs and fails to release oxygen in the tissues. Purified haemoglobin keeps some BPG that is hard to strip off, so every oxygen-binding curve above was in fact measured with BPG present. Two situations make it physiology. Altitude: at sea level a healthy person delivers to the tissues about 38 percent of the maximum the blood could carry; moved abruptly to 4,500 metres, delivery falls to about 30 percent; but within a few hours erythrocyte BPG rises from about 5 to about 8 millimolar, affinity falls, and because the lung end of the curve is near saturation anyway this costs almost nothing in loading and buys a great deal in unloading — delivery returns to about 37 percent. The whole adaptation is one small metabolite changing concentration, it reverses on the way down, and the same rise happens in hypoxia from failing lungs or circulation. The fetus: it has to pull oxygen out of its mother's blood, so it must bind oxygen more tightly than she does, and it does this by making gamma chains in place of beta chains. The resulting alpha2gamma2 tetramer binds BPG much more weakly and therefore holds oxygen more tightly. Two haemoglobins in one body differing in oxygen affinity because of how hard they answer a regulator, with nothing changed at the oxygen site itself.",
      cn: "2,3-二磷酸甘油酸（2,3-bisphosphoglycerate，BPG）是一个带很多负电荷的小分子，在红细胞里浓度很高，它大幅降低血红蛋白对氧的亲和力。它的结合位点，就是 T 态下两个 β 亚基之间的那个空腔：腔壁排着带正电的侧链，正好抓住 BPG 的负电荷。**每个四聚体只结合一分子 BPG（而 O₂ 是四个），而且氧合后这个腔就消失了 —— 所以 BPG 起作用的方式是把分子按在 T 态。**看清这一点最锐利的办法是看它缺席时：没有 BPG，血红蛋白主要停在 R 态，在肺里装得漂亮，却在组织里放不出氧来。纯化的血红蛋白上总残留着不易除净的 BPG，所以上面每一条氧结合曲线，其实都是在有 BPG 的条件下测的。两个情境把它变成生理学。高海拔：海平面上健康人向组织交付的氧约为血液最大携氧量的 38%；突然被带到 4,500 米，交付量掉到约 30%；但在几小时之内，红细胞里的 BPG 从约 5 毫摩尔升到约 8 毫摩尔，氧亲和力下降 —— 由于曲线的肺端本来就接近饱和，这个调整在装载上几乎不花什么代价，在卸载上却赚了很多，交付量回到约 37%。整套适应，不过是一个小分子代谢物换了个浓度。回到海平面后它会逆转；肺或循环功能不足导致的缺氧，也会发生同样的升高。胎儿：它必须从母亲血里把氧抢过来，所以它结合氧必须比母亲更紧；而它的办法是合成 γ 链来代替 β 链。由此得到的 α₂γ₂ 四聚体与 BPG 结合得弱得多，因而抓氧更紧。同一个身体里的两种血红蛋白，氧亲和力之别来自「对一个调节物应答得有多强」，而氧结合位点本身什么也没改。",
      src: "A p.161–162, §5.1",
      see: [
        { id: "7-8-3", en: "BPG's other life — the cofactor of phosphoglycerate mutase in glycolysis", cn: "BPG 的另一重身份 —— 糖酵解中磷酸甘油酸变位酶的辅因子" }
      ]
    },
    {
      link_en: "and one changed residue on the outside turns the same molecule into a disease",
      link_cn: "而外表面上换掉一个残基，同一个分子就变成了一种病",
      en: "Nearly 500 genetic variants of haemoglobin are known in the human population, almost all rare, most differing by a single residue, and most with minor effects. HbS is the one where the effect is not minor: glutamate at position 6 of the beta chain is replaced by valine. Position 6 lies on the outer surface of the molecule, and exchanging a charged side chain for a hydrophobic one puts a sticky patch there — and a sticky patch on the outside of a soluble protein makes it associate with its neighbours. The timing is the disease: **HbS stays soluble while it carries oxygen and becomes insoluble and polymerises into long tubular fibres when it is deoxygenated, while normal HbA stays soluble either way.** So sickling is triggered by the very oxygen-release step this whole chain has been about, and the fraction of sickled cells climbs sharply as blood is deoxygenated. From there it is mechanics. The fibres stretch the erythrocyte into the long thin sickle shape; sickled cells are fragile and rupture, so haemoglobin falls to about half the normal 15 to 16 grams per 100 millilitres, which is the anaemia; and the deformed cells block capillaries, which is the severe pain and the organ damage. One copy gives sickle cell trait: about 1 percent of erythrocytes sickle on deoxygenation and life is normal provided vigorous exercise and other circulatory stress are avoided. The allele is unusually common in parts of Africa because one copy confers a small but significant resistance to lethal forms of malaria.",
      cn: "人群中已知的血红蛋白遗传变异体近 500 种，几乎都很罕见，多数只差一个残基，效应通常轻微。HbS 是效应不轻微的那一个：β 链第 6 位的谷氨酸被缬氨酸取代。第 6 位在分子的外表面上，把一个带电的侧链换成疏水的，就在那里放了一块粘性斑块 —— 而可溶蛋白外表面上的粘性斑块，会让它和邻居粘在一起。时机才是这个病的要害：**HbS 在带着氧的时候是可溶的，一旦脱氧就变得不溶、聚合成长长的管状纤维，而正常的 HbA 脱氧后照样可溶。**所以镰变正是被这一整条线索一直在讲的那个「释放氧」的步骤触发的 —— 随着血液脱氧，镰变细胞的比例急剧上升。之后就是力学：纤维把红细胞撑成细长的镰刀形；镰变细胞脆弱易破，血红蛋白掉到正常 15–16 克/100 毫升的约一半，这就是贫血；而变形的细胞堵住毛细血管，这就是剧痛和器官损伤。只带一个拷贝的人有镰状细胞性状 sickle cell trait：脱氧时只有约 1% 的红细胞镰变，只要避免剧烈运动和其他循环压力，就能过正常生活。这个等位基因在非洲部分地区异常常见，因为带一个拷贝能对致死型疟疾提供虽小但确实显著的抵抗力。",
      src: "A p.163, §5.1",
      see: [
        { id: "2-2-1", en: "the Glu-to-Val substitution as the textbook case of molecular pathology", cn: "Glu→Val 这个替换作为分子病理学的标准案例" }
      ]
    }
  ],
  terms: [
    { en: "heme", cn: "血红素 heme",
      def_en: "A flat protoporphyrin ring gripping one Fe2+ through four nitrogen atoms, with two further coordination bonds perpendicular to the ring. Inside a globin, one of those two is taken permanently by the proximal His and the other is the oxygen site.",
      def_cn: "一个扁平的原卟啉环，用四个氮原子夹住一个 Fe²⁺，另有两条与环面垂直的配位键。在 globin 内部，其中一条被 proximal His 永久占据，另一条就是氧的结合位点。" },
    { en: "proximal His", cn: "近端组氨酸 proximal His",
      def_en: "His93, also written His F8. It occupies the fifth coordination bond of the iron and holds it. When O2 pulls the iron into the ring plane, this residue and the F helix behind it are dragged along — which is how one bound molecule becomes a movement of the whole protein.",
      def_cn: "His93，也写作 His F8。它占据铁的第五条配位键、把铁把持住。当 O₂ 把铁拉进环平面时，这个残基连同它背后的 F 螺旋一起被拽动 —— 一个结合上的分子就是这样变成整个蛋白的一次运动的。" },
    { en: "distal His", cn: "远端组氨酸 distal His",
      def_en: "His64, also written His E7, on the far face of the heme. It never coordinates the iron. It hydrogen-bonds to bound O2, which raises oxygen affinity about 500-fold and cuts carbon monoxide's advantage from 20,000-fold to about 40-fold; and it swings open and shut on a nanosecond timescale as the gate of the heme pocket.",
      def_cn: "His64，也写作 His E7，位于 heme 的另一面。它从不与铁配位。它与结合上的 O₂ 形成氢键，把氧亲和力提高约 500 倍，从而把一氧化碳的优势从两万倍压到约四十倍；同时它以纳秒级的节奏开合，充当 heme 口袋的闸门。" },
    { en: "globin fold", cn: "globin 折叠",
      def_en: "Eight alpha-helical segments joined by bends. It is what myoglobin, haemoglobin, neuroglobin and cytoglobin share even though their sequences have diverged widely, and it is the standard illustration that structure outlasts sequence in evolution.",
      def_cn: "由转角连接的八段 α-螺旋。尽管肌红蛋白、血红蛋白、神经球蛋白与胞球蛋白的序列早已大幅分化，它们共有的正是这个形状 —— 这是「演化中结构比序列活得久」的标准例证。" },
    { en: "dissociation constant Kd", cn: "解离常数 Kd",
      def_en: "The concentration of ligand at which half the binding sites are filled, in molar units. Lower means tighter. Ninety percent occupancy needs nine times this value, and a quoted figure is valid only for the salt and pH it was measured at.",
      def_cn: "结合位点被占据一半时的配体浓度，单位为摩尔浓度。数值越小、结合越紧。要达到 90% 占据需要九倍于此的浓度；报出来的数值只对测定时的盐浓度和 pH 有效。" },
    { en: "P50", cn: "P50",
      def_en: "The same idea as Kd for a gas: the partial pressure of oxygen at which half the binding sites are filled. Myoglobin's is 0.26 kilopascals, very low, which is why it stores oxygen instead of delivering it.",
      def_cn: "把 Kd 换成气体的版本：结合位点被占据一半时的氧分压。肌红蛋白的 P50 是 0.26 千帕，非常低 —— 这正是它储存氧、而不是输送氧的原因。" },
    { en: "T state and R state", cn: "T 态与 R 态",
      def_en: "Haemoglobin's two conformations. T, for tense, is held by more ion pairs and has low oxygen affinity; R, for relaxed, has high affinity. Oxygen pushes the equilibrium towards R; H+, CO2 and BPG push it back towards T.",
      def_cn: "血红蛋白的两种构象。T 态（紧张）由更多离子对维系，氧亲和力低；R 态（松弛）亲和力高。氧把平衡推向 R；H⁺、CO₂ 与 BPG 把它推回 T。" },
    { en: "cooperativity", cn: "协同性 cooperativity",
      def_en: "Binding at one site raising the affinity of the others, which turns a hyperbolic binding curve into an S-shaped one. A protein with a single site cannot do it, so it is evidence of several sites inside one molecule. It is what lets haemoglobin load at 13.3 kilopascals and unload at 4.",
      def_cn: "一个位点的结合提高其他位点的亲和力，从而把双曲线型的结合曲线变成 S 形。只有一个位点的蛋白做不到这件事，所以它本身就是「同一分子内有多个位点」的证据。正是它让血红蛋白既能在 13.3 千帕装载、又能在 4 千帕卸载。" },
    { en: "homotropic and heterotropic", cn: "同促与异促",
      def_en: "Homotropic means the molecule that changes the binding is the ordinary ligand itself — O2 acting on O2 binding. Heterotropic means it is a different molecule — H+, CO2 and BPG. Haemoglobin shows both at once.",
      def_cn: "同促指引起改变的分子就是那个普通配体本身 —— O₂ 作用于 O₂ 的结合。异促指它是另一种分子 —— H⁺、CO₂ 与 BPG。血红蛋白同时表现出这两种。" },
    { en: "Hill coefficient", cn: "Hill 系数 nH",
      def_en: "The slope of a Hill plot. It reports how strongly the binding sites interact, and it is smaller than the number of sites in every real case: haemoglobin has four sites and reaches about 3. A value of 1 means no interaction, above 1 positive, below 1 negative and rare.",
      def_cn: "Hill 图的斜率。它报告的是结合位点之间相互作用的强度，而且在任何真实体系里都小于位点数：血红蛋白有四个位点，最大约为 3。等于 1 表示没有相互作用，大于 1 为正协同，小于 1 为负协同且很罕见。" },
    { en: "concerted and sequential models", cn: "协同模型与序变模型",
      def_en: "Concerted, from Monod, Wyman and Changeux in 1965: all subunits switch at the same instant, so no mixed molecule exists. Sequential, from Koshland in 1966: subunits switch one at a time. The first is the all-or-none limiting case of the second, and the two have proven very hard to tell apart experimentally.",
      def_cn: "协同模型（Monod、Wyman、Changeux，1965）：所有亚基同一瞬间一起转换，因此不存在构象混合的分子。序变模型（Koshland，1966）：亚基可以一个一个转换。前者是后者的「全或无」极限情形，而两者在实验上极难区分。" },
    { en: "Bohr effect", cn: "Bohr 效应",
      def_en: "H+ and CO2 both stabilise the T state and so lower oxygen affinity, which makes oxygen come off preferentially where acid and CO2 are being made — that is, where it is being used. Largest single contributor: protonated His146 of the beta chain pairing with Asp94. Christian Bohr, 1904.",
      def_cn: "H⁺ 与 CO₂ 都稳定 T 态、从而降低氧亲和力，于是氧被优先释放在正在产酸、产 CO₂ 的地方 —— 也就是正在用氧的地方。最大的单一贡献者：β 链上被质子化的 His146 与 Asp94 配成离子对。Christian Bohr，1904 年。" },
    { en: "carbaminohaemoglobin", cn: "氨基甲酰血红蛋白",
      def_en: "CO2 bound as a carbamate group to the free alpha-amino group at the start of each globin chain. The reaction itself releases H+, so it feeds the Bohr effect twice, and the carbamates add salt bridges that hold the T state.",
      def_cn: "CO₂ 以氨基甲酸酯的形式结合到每条 globin 链起始端那个游离的 α-氨基上。该反应本身放出 H⁺，因此对 Bohr 效应是双重加成；这些氨基甲酸酯还额外形成盐桥，把 T 态按住。" },
    { en: "2,3-bisphosphoglycerate", cn: "2,3-二磷酸甘油酸 BPG",
      def_en: "A small, heavily negative molecule at high concentration in erythrocytes. One binds per tetramer, in the positively charged cavity between the beta subunits of the T state, and it lowers oxygen affinity by holding the molecule in T. It rises from about 5 to about 8 millimolar within hours at altitude.",
      def_cn: "一个带很多负电荷的小分子，在红细胞里浓度很高。每个四聚体只结合一分子，位置是 T 态下两个 β 亚基之间那个带正电的空腔；它通过把分子按在 T 态来降低氧亲和力。在高海拔下数小时内由约 5 毫摩尔升到约 8 毫摩尔。" },
    { en: "HbS and sickle cell anaemia", cn: "HbS 与镰状细胞贫血",
      def_en: "Glutamate at position 6 of the beta chain replaced by valine puts a sticky hydrophobic patch on the outer surface. Deoxygenated HbS polymerises into fibres that deform the cell; oxygenated HbS and normal HbA do not. One copy gives sickle cell trait and significant resistance to lethal malaria.",
      def_cn: "β 链第 6 位由谷氨酸换成缬氨酸，在分子外表面放上一块粘性的疏水斑块。脱氧的 HbS 聚合成纤维、使细胞变形；带氧的 HbS 与正常 HbA 则不会。带一个拷贝即镰状细胞性状，并对致死型疟疾有显著抵抗力。" }
  ]
};

window.BIOLITE_SPINE["L-6-3-1"] = {
  assumed: ["protein", "amino acid", "enzyme", "substrate", "product", "cell", "pH",
            "hydrogen bond", "active site", "ligand", "cofactor", "ATP", "DNA",
            "conformation", "buffer", "helix"],
  nodeTitle_en: "Enzyme kinetics",
  nodeTitle_cn: "酶动力学",
  title_en: "What you measure in a tube, what falls out of the algebra, and what the numbers do and do not mean",
  title_cn: "在试管里你到底测了什么、代数最后掉出来的是什么，以及这些数字能说和不能说什么",
  steps: [
    {
      en: "Here is the whole experiment. Put a known amount of enzyme in a tube, add substrate, and measure how fast product appears. Then change one thing — how much substrate, the pH, add a drug — and measure again. **Watching how a reaction rate answers to what you change is enzyme kinetics, and it is the oldest way of finding out how an enzyme works, older than solving its structure and older than mutating single residues.** One picture has to be in place before any of it makes sense: at any instant every enzyme molecule in the tube is in one of two forms, free enzyme E with nothing bound, and enzyme-substrate complex ES with a substrate molecule sitting in its active site. Everything below is bookkeeping on those two.",
      cn: "整个实验就是这样：往试管里放已知量的酶，加底物，测产物出现得有多快。然后改一样东西 —— 底物加多少、pH 是多少、加不加某种药 —— 再测一次。**看反应速率如何回应你的改动，这门学问就叫酶动力学（enzyme kinetics），而它是弄清一个酶怎么工作的最古老手段，比解它的结构更早，也比逐个突变残基更早。**有一幅图必须先摆好，否则后面全都看不懂：任何一个瞬间，管子里的每一个酶分子都处在两种形式之一 —— 游离酶 E（什么也没结合）和酶-底物复合物 ES（活性位点里坐着一个底物分子）。下面所有内容，都是围绕这两样东西记账。",
      src: "A p.188, §6.3"
    },
    {
      link_en: "and the first problem is that the thing you are varying will not stay still",
      link_cn: "而第一个麻烦是：你要改的那个量自己不肯待着不动",
      en: "You want the rate as a function of substrate concentration, written [S]. But [S] falls while you watch, because the enzyme is eating it. The fix is to measure only the very beginning. **The rate measured over a window in which under two or three percent of the substrate has been used up is the initial velocity, written V0, and over that window [S] can be treated as a constant.** This works because the enzyme is usually present in nanomolar amounts while [S] is five or six orders of magnitude higher. Do it at one substrate concentration after another, plot V0 against [S], and out comes a curve that rises almost in a straight line at low [S], bends over, and creeps towards a ceiling it never touches. That ceiling is the maximum velocity, Vmax, and because the curve never reaches it, Vmax is always obtained by extrapolation and never read straight off the graph. Keep that — it is the entire reason anyone ever bothered to straighten the curve.",
      cn: "你想要的是「速率随底物浓度 [S] 如何变化」。可是你一边看，[S] 一边在掉，因为酶正在把它吃掉。对策是只测最开头那一小段。**在「底物被消耗掉不到百分之二到三」的时间窗里测出的速率，叫初速度（initial velocity），记作 V0；在这个窗口里，[S] 可以当作常数。**这样做行得通，是因为酶通常只有纳摩尔级的量，而 [S] 要高出五到六个数量级。换一个底物浓度再做一次、再做一次，把 V0 对 [S] 作图，就得到一条曲线：低 [S] 时几乎是直线上升，然后拐弯，慢慢爬向一个永远碰不到的天花板。这个天花板就是最大速度 Vmax；而正因为曲线永远够不到它，Vmax 永远是外推出来的，绝不是直接从图上读出来的。把这一点记住 —— 后面有人费劲把曲线拉直，全部理由就在这里。",
      src: "A p.189, §6.3"
    },
    {
      link_en: "and the second problem is that ES is invisible. One assumption gets round it",
      link_cn: "第二个麻烦是 ES 你看不见。有一个假设绕过了它",
      en: "Mix enzyme with a large excess of substrate and there is first a very short transient, the pre-steady state, during which ES builds up from nothing. **After that the reaction settles into a steady state, in which ES is being formed exactly as fast as it is being consumed, so the concentration of ES stays nearly constant for most of the rest of the reaction.** Almost everything measurable happens in that regime, which is why the classical treatment is properly called steady-state kinetics. Three pairs of names sit behind it and the split matters. Victor Henri proposed in 1903, following a suggestion of Adolphe Wurtz, that an ES complex must form at all. Leonor Michaelis and Maud Menten expanded that in 1913 into a general theory, assuming a fast reversible binding step followed by a slower breakdown, with the two in equilibrium. G. E. Briggs and J. B. S. Haldane replaced that in 1925 with the steady-state assumption, and the derivation everyone actually uses is theirs. Being able to say which of the two assumptions you are working under is what separates deriving the equation from reciting it.",
      cn: "把酶和大大过量的底物混在一起，先有一段极短的过渡期，叫前稳态（pre-steady state），其间 ES 从零开始累积。**之后反应落入稳态（steady state）：ES 生成的速率恰好等于它被消耗的速率，于是 ES 的浓度在余下的大部分反应过程中几乎不变。**几乎所有可测量的事都发生在这个区间里，所以整套经典处理的正式名字其实是稳态动力学。它背后站着三对名字，而这个拆分是有意义的。Victor Henri 在 1903 年（承接 Adolphe Wurtz 的提议）提出：必须先形成 ES 复合物这件事本身。Leonor Michaelis 与 Maud Menten 在 1913 年把它扩展成一套普遍理论，假设先有一个快速可逆的结合步骤、再有一个较慢的分解步骤，并设两者处于平衡。G. E. Briggs 与 J. B. S. Haldane 在 1925 年用稳态假设换掉了平衡假设，而今天大家真正在用的推导是他们那一版。能说清自己用的是哪一个假设，正是「推导方程」和「背方程」的分水岭。",
      src: "A p.189–190, §6.3"
    },
    {
      link_en: "with that assumption in hand the algebra is four steps long",
      link_cn: "有了这个假设，代数只有四步",
      en: "Start from E plus S forming ES, and ES going on to E plus P. Early in the reaction there is almost no product, so the reverse step from P back to S is dropped. Step one: write the rate at which ES forms, governed by the rate constant k1, and the rate at which ES disappears, governed by k-1 for falling apart plus k2 for reacting onward. Step two: set those two equal to each other. That equality is the steady-state assumption, said in symbols. Step three: solve it for the concentration of ES, which is legitimate because total enzyme equals free plus bound, and because substrate is in such vast excess that the amount of it tied up on enzyme at any instant is negligible. When the algebra settles, a particular lump of rate constants is left sitting in the denominator — (k2 + k-1)/k1 — and that lump is given a name: the Michaelis constant, Km. Step four: substitute back, and note that at saturating substrate every enzyme molecule is in the ES form, so the coefficient in front becomes Vmax. What you now have is the Michaelis-Menten equation. **Notice how Km arrived: as a collection of three rate constants that fell out of the algebra, never as a statement about how tightly anything binds.**",
      cn: "起点是 E + S 生成 ES，ES 再生成 E + P。反应早期几乎没有产物，所以由 P 回到 S 的逆反应被丢掉。第一步：分别写出 ES 的生成速率（由速率常数 k1 决定）和 ES 的消失速率（由散架的 k-1 加上继续反应的 k2 决定）。第二步：令两者相等。这个等式就是稳态假设，只不过写成了符号。第三步：由它解出 ES 的浓度。这一步合法，是因为总酶量等于游离加结合，而底物大大过量，任一瞬间被酶占住的底物量可以忽略不计。代数化简完毕，分母上剩下一坨特定的速率常数组合 —— (k2 + k-1)/k1 —— 这一坨被起了个名字：米氏常数（Michaelis constant）Km。第四步：代回速率表达式，并注意在饱和底物下每个酶分子都以 ES 形式存在，于是前面的系数变成 Vmax。这样得到的就是米氏方程。**请留意 Km 是怎么出场的：它是从代数里掉出来的三个速率常数的组合，而从来不是一句关于「结合有多紧」的话。**",
      src: "A p.190, §6.3",
      see: [
        { id: "3-3-1", en: "the equation, the plots and the activation-energy picture around it", cn: "方程、作图法，以及围绕它的活化能图景" }
      ]
    },
    {
      link_en: "so where does the familiar one-line definition come from?",
      link_cn: "那大家背的那句一行定义又是从哪来的？",
      en: "Put V0 equal to exactly half of Vmax into the Michaelis-Menten equation, divide through by Vmax, and the algebra collapses to Km + [S] = 2[S], hence Km = [S]. So \"Km is the substrate concentration at which the reaction runs at half its maximum rate\" is a consequence of the equation and not its definition — a very useful, practical one, because it is how Km is actually measured. **There are now two statements about Km and they do different work: the algebraic one, that Km is that lump of rate constants, which is where its meaning lives; and the operational one, that Km is [S] at half Vmax, which is where its measurement lives.** One more thing to hang on to, because it is the fastest check on an exam answer that has drifted: Km has the units of a molar concentration. If an answer is treating it as a speed, the answer is wrong before anything else is considered.",
      cn: "在米氏方程里令 V0 恰好等于 Vmax 的一半，两边同除以 Vmax，代数化简后得到 Km + [S] = 2[S]，于是 Km = [S]。所以 「Km 是反应速率达到最大值一半时的底物浓度」是方程的一个推论，而不是它的定义 —— 这是一个非常有用的、实用的表述，因为 Km 实际上就是这么测出来的。**现在关于 Km 有两句话，各管各的用处：代数上的那句 —— Km 就是那一坨速率常数，它的含义住在这里；操作上的那句 —— Km 是半速时的 [S]，它的测法住在这里**。还有一条必须抓住，因为它是检查考试答案有没有跑偏的最快办法：Km 的量纲是摩尔浓度。如果一个答案在把它当速度用，那这个答案在别的都还没看之前就已经错了。",
      src: "A p.191, §6.3"
    },
    {
      link_en: "and now the thing that is got wrong most often",
      link_cn: "接下来是最常被搞错的那一处",
      en: "**Km is a concentration, and it is not a binding constant. For the two-step scheme Km equals (k2 + k-1)/k1, a mixture of how fast the substrate binds, how fast it falls off again, and how fast the chemistry happens.** It measures how tightly the enzyme holds its substrate under one condition only: if the chemical step is much slower than falling off, k2 becomes negligible, Km reduces to k-1/k1, and that ratio is the dissociation constant Kd of the ES complex. That condition does not hold for most enzymes. Run it the other way — k2 much larger than k-1 — and Km becomes k2/k1, a number about chemistry with nothing to do with binding at all; and more commonly the reaction passes through several further steps after ES forms, which makes Km a complicated function of many constants. So Km cannot be taken as a simple measure of substrate affinity. What it is genuinely good for is this: an enzyme's Km tends to be close to the concentration of its substrate inside the cell. An enzyme working on a scarce metabolite usually has a low Km, one working on an abundant metabolite a high one — so Km tells you where on its own curve that enzyme normally sits in life, and therefore whether its rate is currently sensitive to substrate supply or already flat out.",
      cn: "**Km 是一个浓度，它不是一个结合常数。对那个两步机制，Km = (k2 + k-1)/k1 —— 里面掺着「底物结合有多快」「它散掉有多快」「化学反应有多快」三件事。**它衡量「酶把底物抓得多紧」只有在一种条件下成立：当化学步骤远慢于散架时，k2 可以忽略，Km 退化成 k-1/k1，而这个比值正是 ES 复合物的解离常数 Kd。这个条件对多数酶并不成立。反过来，若 k2 远大于 k-1，Km 就变成 k2/k1 —— 一个关于化学、与结合毫无关系的数；而更常见的情况是 ES 形成之后反应还要再走好几步，那时 Km 会变成许多速率常数的复杂函数。所以 Km 不能被当作底物亲和力的简单量度。那它真正有用的地方在哪里？在这一条：一个酶的 Km 往往与它底物在细胞里的实际浓度相近。作用于稀有代谢物的酶通常 Km 低，作用于丰富代谢物的酶通常 Km 高 —— 于是 Km 告诉你的是：这个酶在活体里平时待在自己那条曲线的哪一段，因而它此刻的速率是对底物供应敏感、还是已经开到了头。",
      src: "A p.192–193, §6.3",
      see: [
        { id: "L-13-5-1", en: "where this rule pays off — which enzyme in a pathway actually responds to supply", cn: "这条规律的回报之处 —— 一条通路里究竟哪个酶会对底物供应作出响应" }
      ]
    },
    {
      link_en: "Vmax has the same trouble: it is not a fundamental property either",
      link_cn: "Vmax 也有同样的毛病：它同样不是一个基本性质",
      en: "Vmax depends on whichever step happens to be the slowest one, so it changes meaning from enzyme to enzyme. In the plain two-step scheme Vmax equals k2 times the total enzyme. But take the very common case where what limits the reaction is the release of product: then at saturation most of the enzyme is sitting there as the enzyme-product complex, and Vmax equals k3 times total enzyme instead. Rather than chase which constant it is each time, define a general one. **kcat is the rate constant of whatever step is rate-limiting, and in general it equals Vmax divided by the total enzyme concentration.** It is also called the turnover number: how many substrate molecules one enzyme molecule converts per unit time when it is saturated. It is a first-order rate constant, so its units are one over time — watch out, because the same quantity is sometimes tabulated per minute and sometimes per second, and reading the unit first is the difference between a right and a wrong answer. The spread across real enzymes is enormous: catalase forty million per second, carbonic anhydrase four hundred thousand, acetylcholinesterase fourteen thousand, the antibiotic-destroying beta-lactamase two thousand, fumarase eight hundred, and the RecA protein, an ATP-splitting enzyme, one half — one turnover every two seconds. Eight orders of magnitude, and all of them are called enzymes.",
      cn: "Vmax 取决于「碰巧哪一步最慢」，所以它的含义会随酶而变。在那个朴素的两步机制里，Vmax 等于 k2 乘以总酶量。但取一个很常见的情形：限速的是产物的释放。那么饱和时，大部分酶就以「酶-产物复合物」的形式待在那里，Vmax 变成 k3 乘以总酶量。与其每次都去追究到底是哪个常数，不如定义一个一般的：**kcat 就是「不管哪一步限速、那一步的速率常数」，一般地也等于 Vmax 除以总酶浓度。**它还有一个名字叫周转数（turnover number）：饱和时，一个酶分子在单位时间里转化掉多少个底物分子。它是一个一级速率常数，单位是时间的倒数 —— 这里要当心：同一个量有时按每分钟列表、有时按每秒列表，先看单位就是对与错的分界。真实酶之间的跨度大得惊人：过氧化氢酶每秒四千万次，碳酸酐酶四十万次，乙酰胆碱酯酶一万四千次，专门拆抗生素的 β-内酰胺酶两千次，延胡索酸酶八百次，而 RecA 蛋白（一种分解 ATP 的酶）只有 0.5 次 —— 两秒钟才转一次。中间横跨八个数量级，而它们全都叫「酶」。",
      src: "A p.192–193, §6.3",
      see: [
        { id: "3-3-3", en: "how enzyme activity is actually assayed and reported", cn: "酶活性到底怎么测、怎么报告" }
      ]
    },
    {
      link_en: "so which of the two numbers tells you that one enzyme is better than another?",
      link_cn: "那么「哪个酶更强」，该看这两个数里的哪一个？",
      en: "Neither, on its own. Two enzymes can share a kcat while the reactions they speed up differ wildly in how fast they would go with no enzyme there at all, and two enzymes can share a Km and differ completely in what they do once the substrate has arrived. The answer is the ratio kcat/Km, called the specificity constant, and it is not an invented index: it is the rate constant for the whole journey from E plus S all the way to E plus P, binding and chemistry counted together. At low substrate the Michaelis-Menten equation collapses into a rate that depends on the concentrations of both enzyme and substrate, which makes it a second-order rate equation and kcat/Km a second-order rate constant. That identity hands it a hard ceiling, and this is the most quotable idea in the whole subject: **enzyme and substrate have to physically bump into each other before anything at all can happen, so kcat/Km can never exceed the rate at which the two diffuse together in water.** That diffusion-controlled limit is of the order of a hundred million to a billion per molar per second. Acetylcholinesterase, crotonase and fumarase are already sitting on that line — they cannot be improved by binding better or reacting faster, only by making water less viscous. Such enzymes are said to have achieved catalytic perfection.",
      cn: "单看任何一个都不行。两个酶可以有相同的 kcat，而它们所加速的那两个反应在完全没有酶时的速率可能天差地别；两个酶也可以有相同的 Km，而底物一到位之后干的事完全不同。答案是比值 kcat/Km，称为专一性常数（specificity constant）；它不是一个凑出来的指标：它就是「从 E + S 一路走到 E + P」这整段旅程的速率常数，结合与化学一起算进去。在低底物浓度下，米氏方程退化成一个同时依赖酶浓度和底物浓度的速率式，所以它是一个二级速率方程，kcat/Km 是一个二级速率常数。这个身份给了它一个硬天花板，也是整门课最值得背下来的一句：**酶和底物必须先在物理上撞上，任何事才可能发生，所以 kcat/Km 永远不可能超过两者在水中扩散到一起的速率。**这个扩散控制的上限，量级是每摩尔每秒一亿到十亿。乙酰胆碱酯酶、巴豆酰辅酶 A 水解酶和延胡索酸酶已经贴在这条线上了 —— 它们没法再靠「结合得更好」或「反应得更快」改进，只能靠把水变稀一点。这样的酶被说成已经达到了「催化的完美」。",
      src: "A p.193, §6.3"
    },
    {
      link_en: "back to the bench. Vmax was an extrapolation, so people straighten the curve",
      link_cn: "回到实验台。Vmax 是外推出来的，所以有人把曲线拉直",
      recall_en: "the curve that never reaches its ceiling, from the initial-velocity step",
      recall_cn: "就是初速度那一步里，那条永远够不到天花板的曲线",
      en: "Take the reciprocal of both sides of the Michaelis-Menten equation and separate the terms, and the hyperbola becomes a straight line: **plot one over the rate against one over [S] and you get the double-reciprocal, or Lineweaver-Burk, plot. Its slope is Km/Vmax, it cuts the vertical axis at 1/Vmax and the horizontal axis at minus 1/Km, so both constants can be read off a ruler.** There is a warning that must travel with it. Taking the reciprocal of a small, noisy rate produces a large, noisy number, so the transformation gives undue weight to the measurements made at low substrate concentration — and those are precisely the points that decide where the line goes. It can therefore distort the errors in the extrapolated Vmax and Km. Current practice is to fit Vmax and Km by nonlinear regression on the untransformed curve, which is more accurate. The double-reciprocal plot survives because it is a good way to display data and because the inhibition patterns below are instantly recognisable on it.",
      cn: "把米氏方程两边取倒数、再把项拆开，双曲线就变成一条直线：**以「速率的倒数」对「[S] 的倒数」作图，得到双倒数图，也叫 Lineweaver-Burk 图。它的斜率是 Km/Vmax，纵轴截距是 1/Vmax，横轴截距是 −1/Km，两个常数都能拿尺子量出来。**但有一条警告必须跟着它一起走：一个又小又带噪声的速率取倒数之后，变成一个又大又带噪声的数，所以这个变换给低底物浓度下的测量点过大的权重 —— 而恰恰是这些点在决定那条直线往哪儿走。因此它会扭曲外推出的 Vmax 和 Km 的误差。现在的做法是直接对未变换的曲线做非线性回归来求 Vmax 和 Km，精度更高。双倒数图之所以还活着，是因为它展示数据很好用，而且下面那几种抑制模式在它上面一眼就能认出来。",
      src: "A p.191–192, §6.3"
    },
    {
      link_en: "one warning before the curve is trusted too far",
      link_cn: "在把这条曲线信得太多之前，还有一句警告",
      en: "The Michaelis-Menten equation does not depend on the two-step mechanism it was derived from. Its working definition is purely about the shape of a curve: any enzyme whose V0 depends on [S] as a hyperbola is said to follow Michaelis-Menten kinetics, and enzymes catalysing reactions with six or eight identifiable steps very often show exactly the same steady-state behaviour. **So a clean hyperbola tells you almost nothing about how many steps a reaction has; fitting the equation is no evidence for the mechanism.** What the fit does still guarantee is the practical rule — Km is [S] at half Vmax. One class of enzymes escapes the equation altogether: the regulatory enzymes, whose rate curves are S-shaped rather than hyperbolic, are the most important exceptions to Michaelis-Menten kinetics.",
      cn: "米氏方程并不依赖于它当初被推导时用的那个两步机制。它实际使用中的定义只关乎曲线的形状：凡是 V0 随 [S] 呈双曲线变化的酶，都被说成遵循米氏动力学；而催化反应有六步或八步可辨认步骤的酶，常常表现出完全相同的稳态行为。**所以一条漂亮的双曲线几乎不能告诉你反应有几步 —— 方程拟合得上，并不构成机制的证据。**拟合仍然保证的，是那条实用规则：Km 等于半速时的 [S]。有一类酶干脆逃出了这个方程：调节酶（regulatory enzymes）的速率曲线是 S 形而不是双曲线，它们是米氏动力学最重要的例外。",
      src: "A p.192, §6.3",
      see: [
        { id: "3-7", en: "regulatory enzymes and their S-shaped curves", cn: "调节酶与它们的 S 形曲线" }
      ]
    },
    {
      link_en: "and most enzymes have two substrates, not one",
      link_cn: "而且多数酶有两个底物，不是一个",
      en: "Nearly two-thirds of all enzymatic reactions have two substrates and two products, so the single-substrate case the equation was built for is the minority — yet the equation still applies, and an enzyme like hexokinase simply has a characteristic Km for each of its substrates. There are two ways to run such a reaction. Either both substrates are bound to the enzyme at the same time, in a non-covalent three-part complex called a ternary complex, with the two binding either in a random order or in a fixed one (fixed when the first substrate creates the shape the second one needs); or the first substrate is converted to product and leaves before the second substrate binds, which is the Ping-Pong, or double-displacement, mechanism. Its physical heart is one clause: substrates A and B never meet each other on the enzyme. And here is how you tell the two apart, which is one graph and nothing else. Vary substrate one while holding substrate two fixed, take the double reciprocal, then repeat the whole family of measurements at several fixed values of substrate two. **Lines that intersect mean a ternary complex forms; lines that are parallel mean Ping-Pong.** Note the shape of that answer — parallel means no ternary complex — because the word parallel comes back below meaning something entirely different, on a plot of substrate against inhibitor rather than substrate against substrate.",
      cn: "将近三分之二的酶促反应是「两个底物、两个产物」，所以方程当初为之而建的单底物情形反倒是少数派 —— 但方程照样适用，像己糖激酶这样的酶，只是对每一个底物各有一个特征性的 Km。这类反应有两种跑法。要么两个底物同时结合在酶上，形成一个非共价的三方复合物，叫三元复合物（ternary complex），两者的结合顺序可以是随机的、也可以是固定的（固定的情形发生在「第一个底物造出了第二个底物所需的形状」时）；要么第一个底物先被转化成产物并离开，然后第二个底物才结合 —— 这就是乒乓机制（Ping-Pong），又叫双置换机制。它的物理内核只有一句：底物 A 和 B 从来没有在酶上碰过面。而怎么把两者区分开？只要一张图。固定第二个底物、改变第一个底物，作双倒数图；再换几个不同的第二底物浓度，把这一族线做出来。**相交的直线说明形成了三元复合物；平行的直线说明是乒乓机制。**请记住这个答案的形状 —— 平行 = 没有三元复合物 —— 因为「平行」这个词下面还会再出现一次，含义完全不同：那时的图是「底物对抑制剂」，而不是「底物对底物」。",
      src: "A p.194–195, §6.3",
      see: [
        { id: "3-3-2", en: "the two mechanisms and the coenzymes that run on them", cn: "这两种机制，以及依赖它们工作的辅酶" }
      ]
    },
    {
      link_en: "changing one condition instead of one concentration points at a specific piece of the enzyme",
      link_cn: "改变的如果不是浓度而是条件，就能指认出酶的某一个具体部件",
      en: "Two experiments do this, and each answers a different question. Change the pH and you find out which side chain is doing the work. **An enzyme has an optimum pH because side chains in its active site can act as weak acids and bases only while they hold one particular state of ionisation**; elsewhere in the protein, losing a proton can break an ionic interaction that was holding the active shape together; and less often, the group being titrated belongs to the substrate. The pH range over which activity changes therefore hints at which residue is involved — a change near pH 7 often points to a histidine. Do not, however, look up a pKa in a table and assume it: inside a protein the local surroundings shift these values, a nearby positive charge can lower the pKa of a lysine, and in acetoacetate decarboxylase one lysine has a pKa of 6.6 against 10.5 for free lysine. The optimum follows the enzyme's habitat rather than any universal number — pepsin peaks near pH 1.6 and works in gastric juice at pH 1 to 2, while glucose 6-phosphatase — an enzyme inside liver cells, where the cytosol sits at pH 7.2 — peaks near 7.8. Change the timescale instead and you find out which step is slow. Steady-state measurements give overall efficiency and can rarely identify the rate-limiting step, so you have to watch the very first turnover, which is often over in seconds or milliseconds. The instrument is a rapid-mixing stopped-flow device: syringes drive enzyme and substrate together, a denaturing acid quenches the reaction at a programmed time, and the product is measured. If product release is slower than product formation, the first turnover runs fast and the rate then drops to the steady-state value — a burst. Extrapolating the steady-state line back to zero time gives the size of that burst, and in the worked case one molecule of product is formed in each active site during it, which is the maximum possible and is the evidence that release is rate-limiting. The enzyme used was RNase P, an enzyme made of RNA. Stated generally: a burst means the rate-limiting step lies after formation of the product being watched, so product dissociation is dictating the steady-state rate.",
      cn: "有两个实验干这件事，各回答一个不同的问题。改 pH，你查出的是「哪一个侧链在干活」。**酶之所以有最适 pH，是因为活性位点里的侧链只有保持在某一种特定的解离状态时才能充当弱酸和弱碱**；而在蛋白的别处，失去一个质子可能会打断某个正维系着活性构象的离子相互作用；还有较少见的一种情形，被滴定的基团在底物上。所以活性发生变化的那个 pH 区间，能提示是哪一类残基在参与 —— 在 pH 7 附近变化，往往指向组氨酸。但不要直接查表抄一个 pKa 就当数：在蛋白内部，局部环境会把这些值推开，附近的一个正电荷就能降低一个赖氨酸的 pKa —— 在乙酰乙酸脱羧酶里，有一个赖氨酸的 pKa 是 6.6，而游离赖氨酸是 10.5。最适值跟随的是这个酶所处的环境，不是什么普适数值 —— 胃蛋白酶最适约 pH 1.6，工作在 pH 1 到 2 的胃液里；肝细胞的葡萄糖-6-磷酸酶最适约 7.8，而胞质是 7.2。改的如果是时间尺度，你查出的就是「哪一步慢」。稳态测量给的是总体效率，几乎无法指认限速步骤，所以你必须去看第一次周转，而它常常几秒或几毫秒就结束了。用的仪器是快速混合的停流装置（stopped-flow device）：注射器把酶和底物推到一起，在预设时刻用变性酸把反应淬灭，再测产物。如果产物的释放慢于产物的生成，第一次周转会跑得很快，随后速率掉到稳态值 —— 这就是「爆发（burst）」。把稳态那条直线外推回零时刻，就读出爆发的幅度；在书里那个实例中，爆发期间每个活性位点各生成一分子产物，这是可能的最大值，也正是「释放限速」的证据。所用的酶是 RNase P，一种由 RNA 构成的酶。一般地说：看到爆发，就说明限速步骤位于所监测产物生成之后，也就是产物的解离在决定稳态速率。",
      src: "A p.195–197, §6.3",
      see: [
        { id: "3-4", en: "the pH and temperature dependence of enzyme reactions", cn: "酶反应对 pH 与温度的依赖" },
        { id: "L-6-4-1", en: "the 1954 burst that caught a covalent intermediate", cn: "1954 年那个抓住共价中间物的爆发实验" }
      ]
    },
    {
      link_en: "and now the reason anyone outside a laboratory cares: molecules that stop enzymes",
      link_cn: "接下来是实验室之外的人为什么在乎这件事：能把酶按停的分子",
      en: "An inhibitor is a molecule that interferes with catalysis, and because enzymes run everything, inhibitors are among the most important drugs there are — aspirin works by blocking the first step of prostaglandin synthesis. **The three reversible kinds are told apart by which form of the enzyme the inhibitor binds, E or ES, and everything else follows from that one choice.** A competitive inhibitor binds the free enzyme, in the active site, competing with the substrate for the same space, and many competitive inhibitors look structurally like the substrate. The equation picks up a factor called alpha, equal to one plus the inhibitor concentration divided by the inhibitor's dissociation constant, and the Km you measure in its presence is alpha times the real Km — an apparent Km. Two consequences. The inhibitor damages nothing: an enzyme with inhibitor bound is not inactivated, so the competition can be tipped back towards the substrate simply by adding more substrate, and Vmax is reached in the end, unchanged. And apparent Km up with Vmax untouched is the diagnostic pattern; on a double-reciprocal plot the two lines meet on the vertical axis, because that intercept is 1/Vmax and Vmax has not moved. The clinical case fits exactly: alcohol dehydrogenase converts methanol into formaldehyde, to which the eyes are particularly sensitive, and ethanol competes for that same enzyme — so methanol poisoning is treated by slow intravenous infusion of ethanol while the kidneys clear the methanol out.",
      cn: "抑制剂（inhibitor）是干扰催化的分子；而因为酶掌管着一切，抑制剂属于最重要的药物之列 —— 阿司匹林起作用的方式就是阻断前列腺素合成的第一步。**三种可逆抑制的区分标准只有一条：抑制剂结合的是酶的哪一种形式，E 还是 ES；其余一切都由这一个选择推出来。**竞争性抑制剂结合的是游离酶，位置就在活性位点，和底物抢同一块地方；许多竞争性抑制剂在结构上与底物很像。方程会多出一个因子 alpha，等于「1 加上抑制剂浓度除以抑制剂的解离常数」；在它存在下测得的 Km 就是 alpha 乘以真实的 Km，称为表观 Km。两个后果。抑制剂什么也没破坏：结合了抑制剂的酶并没有失活，所以只要多加底物，这场竞争就能被扳回底物那一边，最终仍能达到没有改变的 Vmax。以及：表观 Km 升高、Vmax 不动，这个组合就是它的诊断特征；在双倒数图上两条直线交于纵轴，因为那个截距就是 1/Vmax，而 Vmax 没动过。临床例子严丝合缝：乙醇脱氢酶把甲醇转化成甲醛，而眼睛对甲醛特别敏感；乙醇与甲醇争夺同一个酶 —— 所以甲醇中毒的疗法就是缓慢静脉输注乙醇，同时让肾把甲醇清出去。",
      src: "A p.197–198, §6.3",
      see: [
        { id: "3-5", en: "the inhibition types listed with what each does to the constants", cn: "各类抑制的清单，以及每一类对常数的影响" }
      ]
    },
    {
      link_en: "the other two kinds bind somewhere else entirely, and differ in one thing",
      link_cn: "另外两类结合在完全不同的地方，而它们之间只差一件事",
      recall_en: "same question as the step above — which form does it bind, E or ES?",
      recall_cn: "还是上一步那个问题 —— 它结合的是 E 还是 ES？",
      en: "**An uncompetitive inhibitor binds at a site of its own, away from the active site, and binds only to the ES complex — never to free enzyme.** Its factor, alpha prime, multiplies [S] in the denominator rather than Km, and the outcome is that apparent Vmax and apparent Km both fall by exactly the same factor. The reason is worth holding because it makes the result unforgettable: while the inhibitor is bound the enzyme is dead, and the inhibitor is competing with nothing, so it effectively deletes some fraction of the enzyme molecules from the reaction — Vmax depends on how much enzyme there is, so Vmax falls; and because what is deleted is ES and not free enzyme, the substrate concentration needed to reach half of the new, lower Vmax falls by the same proportion, so Km falls with it. Both intercepts move, the slope does not, and the lines with and without inhibitor are parallel, the inhibited one sitting above. Adding more substrate makes this inhibitor worse rather than better, because more substrate means more ES for it to bind. A mixed inhibitor also binds at a site of its own, but it can bind either the free enzyme or the ES complex, so both factors are in play and it usually affects both constants. Vmax always falls, because some fraction of the enzyme is made inactive; apparent Km can go either way, depending on which form the inhibitor binds more strongly. Its lines always intersect and never on an axis. The special case where the inhibitor binds E and ES equally well, which is rarely met in experiments, has historically been called noncompetitive inhibition — noncompetitive is a corner of mixed inhibition, not the other way round. In practice uncompetitive and mixed inhibition are seen only with enzymes that have two or more substrates.",
      cn: "**反竞争性抑制剂（uncompetitive inhibitor）结合在自己的一个位点上，远离活性位点，而且只结合 ES 复合物，从不结合游离酶。**它的因子 alpha prime 乘的是分母里的 [S]，不是 Km；结果是表观 Vmax 与表观 Km 按完全相同的因子一起下降。理由值得记住，因为它让结论忘不掉：抑制剂结合着的时候酶是死的，而抑制剂又不与任何东西竞争，所以它实际上等于把一部分酶分子从反应里删掉了 —— Vmax 取决于有多少酶，所以 Vmax 下降；而被删掉的是 ES、不是游离酶，因此达到「新的、更低的 Vmax 的一半」所需的底物浓度也按同样比例下降，Km 跟着一起降。两个截距都动，斜率不动，于是有抑制剂和无抑制剂的两条直线是平行的，被抑制的那条在上方。对这种抑制剂，加底物只会更糟：底物越多，可供它结合的 ES 就越多。混合型抑制剂（mixed inhibitor）同样结合在自己的位点上，但它游离酶和 ES 复合物都能结合，所以两个因子同时在场，它通常把两个常数都改掉。Vmax 必降，因为总有一部分酶被弄成没有活性；表观 Km 可升可降，取决于它更强地结合哪一种形式。它的直线总是相交，但从不交在坐标轴上。抑制剂对 E 和 ES 结合得同样好的那个特例，在实验中很少遇到，历史上被称为非竞争性抑制 —— 非竞争性是混合型里的一个角落，不是它的上位概念。另外，在实际中，反竞争性抑制和混合型抑制只在有两个或更多底物的酶上被观察到。",
      src: "A p.198–199, §6.3"
    },
    {
      link_en: "and an inhibitor that never lets go at all",
      link_cn: "最后是一种根本不松手的抑制剂",
      en: "**An irreversible inhibitor either bonds covalently to a group on the enzyme that catalysis needs, or destroys that group, or forms a non-covalent association so stable that it may as well be permanent.** Used deliberately, it is a tool for finding out which residue does the catalysis: chymotrypsin treated with diisopropylfluorophosphate ends up with Ser195 covalently modified and completely dead, which is how anyone knows that Ser195 is its catalytic serine. One class is sharper still. A suicide inactivator is harmless in solution, enters the active site, goes through the first few steps of the enzyme's own normal reaction, and is thereby converted into something highly reactive that kills the enzyme — these are also called mechanism-based inactivators, precisely because they hijack the normal mechanism to do it. A molecule inert until it is inside its one target promises few side effects, which is why drug designers want them. The worked case is African sleeping sickness, caused by trypanosomes, single-celled parasites: a vulnerable point in trypanosome metabolism is the pathway that makes polyamines, whose first enzyme, ornithine decarboxylase, is stable in the parasite but replaced rapidly in mammalian cells — so poisoning it permanently costs the parasite far more than the patient. The drug is difluoromethylornithine, and it has proved highly effective. Finally, an irreversible inhibitor does not have to be covalent at all — non-covalent binding is enough if it is tight enough that the inhibitor almost never comes off. How do you design one of those? Not by copying the substrate. Enzymes evolve to bind most tightly to the transition state of the reaction they catalyse, the highest-energy arrangement the reacting molecules pass through — so copy that instead. Stable molecules shaped like a transition state can be built even though the state itself cannot be observed, and they are called transition-state analogs; they fit the active site better than the substrate does, form more weak interactions, and bind more tightly than the substrate does in the ES complex. Linus Pauling suggested the idea in the 1940s. The measured payoff is large: analogs of the glycolytic enzyme aldolase bind more than four orders of magnitude more tightly than its substrates, and across the class they run from a hundred to a hundred million times tighter — good evidence that active sites really are complementary to transition states. The anti-HIV protease inhibitors were designed on exactly this principle.",
      cn: "**不可逆抑制剂（irreversible inhibitor）要么与酶上某个催化所必需的基团共价结合，要么干脆把那个基团破坏掉，要么形成一种稳定到形同永久的非共价结合。**有意去用它，它就是一件工具，用来查出究竟哪一个残基在催化：用二异丙基氟磷酸（DIFP）处理胰凝乳蛋白酶，最后 Ser195 上被共价修饰、酶完全死掉 —— 人们正是这样知道 Ser195 就是它的催化丝氨酸的。其中还有更锐利的一类。自杀性失活剂（suicide inactivator）在溶液里无害，进入活性位点后走完酶自身正常反应的头几步，于是被转化成某种反应性极强的东西，反手把酶杀死 —— 它们也叫基于机制的失活剂，正因为它们劫持的是酶的正常机制。一个「不进入它唯一的靶点就一直是惰性的」分子，有望副作用很少，这就是药物设计者想要它的原因。实例是非洲昏睡病，病原是锥虫（trypanosome，一种单细胞寄生虫）：锥虫代谢的一个脆弱点是合成多胺的那条通路，该通路的第一个酶鸟氨酸脱羧酶在寄生虫体内很稳定，而在哺乳动物细胞里更新很快 —— 所以把它永久毒死，对寄生虫的代价远大于对病人的代价。这个药是二氟甲基鸟氨酸（DFMO），已被证明非常有效。最后一点：不可逆抑制剂根本不必是共价的 —— 只要非共价结合紧到抑制剂几乎从不脱落，就足够了。那这种东西怎么设计？不去模仿底物。酶在演化中被造成与它所催化反应的过渡态（transition state）结合得最紧 —— 过渡态就是反应分子必须经过的那个能量最高的排布 —— 所以要模仿的是它。尽管过渡态本身无法被观察，人们仍能造出形状与之相似的稳定分子，这类分子叫过渡态类似物（transition-state analog）；它们比底物更契合活性位点、形成更多弱相互作用，因而结合得比 ES 复合物里的底物还紧。这个想法由 Linus Pauling 在 1940 年代提出。实测的回报很大：针对糖酵解酶醛缩酶设计的类似物，结合比它的底物紧四个数量级以上；就整个类别而言，从一百倍到一亿倍不等 —— 这是「活性位点确实与过渡态互补」的有力证据。抗 HIV 的蛋白酶抑制剂正是按这条原理设计出来的。",
      src: "A p.200–203, §6.3",
      see: [
        { id: "L-6-4-1", en: "the mechanisms these drugs imitate, residue by residue", cn: "这些药所模仿的机制，一个残基一个残基地讲" },
        { id: "3-5", en: "reversible and irreversible inhibition side by side", cn: "可逆抑制与不可逆抑制的并列" }
      ]
    }
  ],
  terms: [
    { en: "initial velocity V0", cn: "初速度 V0",
      def_en: "The rate measured over a window so early that under two or three percent of the substrate has been used, so its concentration can be treated as constant. The enzyme is usually nanomolar and the substrate five or six orders of magnitude more concentrated, which is what makes this possible.",
      def_cn: "在「底物被消耗掉不到百分之二到三」的极早期时间窗里测得的速率，因而底物浓度可以当作常数。酶通常是纳摩尔量级，底物要高出五到六个数量级，这正是这件事做得成的原因。" },
    { en: "steady state", cn: "稳态",
      def_en: "The regime in which the enzyme-substrate complex is formed exactly as fast as it is consumed, so its concentration stays nearly constant through most of the reaction. Briggs and Haldane, 1925. Almost everything measurable happens here, which is why the classical treatment is steady-state kinetics.",
      def_cn: "酶-底物复合物的生成速率恰好等于它被消耗的速率，因而它的浓度在大部分反应过程中几乎不变的那个区间。由 Briggs 与 Haldane 于 1925 年提出。几乎所有可测量的事都发生在这里，所以整套经典处理叫稳态动力学。" },
    { en: "Michaelis constant", cn: "米氏常数 Km",
      def_en: "The lump of rate constants (k2 + k-1)/k1 that falls out of the derivation, with the units of a molar concentration. Measured as the substrate concentration at which the rate is half of Vmax. It equals the dissociation constant of the enzyme-substrate complex only when the chemical step is much slower than dissociation, which is untrue for most enzymes.",
      def_cn: "推导最后掉出来的那一坨速率常数 (k2 + k-1)/k1，量纲是摩尔浓度。测法是「速率达到 Vmax 一半时的底物浓度」。只有当化学步骤远慢于解离时，它才等于酶-底物复合物的解离常数 —— 而这个条件对多数酶并不成立。" },
    { en: "kcat", cn: "kcat 周转数",
      def_en: "The rate constant of whichever step is rate-limiting, equal to Vmax divided by total enzyme concentration. Also called the turnover number: how many substrate molecules one enzyme molecule converts per unit time at saturation. First-order, so units are one over time — check whether a table is per second or per minute.",
      def_cn: "不管哪一步限速、那一步的速率常数，等于 Vmax 除以总酶浓度。也叫周转数：饱和时一个酶分子每单位时间转化多少个底物分子。它是一级速率常数，单位是时间的倒数 —— 看表时先确认是每秒还是每分钟。" },
    { en: "specificity constant", cn: "专一性常数 kcat/Km",
      def_en: "The ratio kcat over Km, which is the second-order rate constant for the whole journey from free enzyme plus substrate to free enzyme plus product. Because the two must physically meet first, it is capped by the rate at which they diffuse together in water — a hundred million to a billion per molar per second. Enzymes on that ceiling are said to have reached catalytic perfection.",
      def_cn: "kcat 除以 Km，它是「从游离酶加底物一路到游离酶加产物」这整段旅程的二级速率常数。因为两者必须先在物理上相遇，它被「二者在水中扩散到一起的速率」封顶 —— 每摩尔每秒一亿到十亿。顶在这条线上的酶被说成已达到催化的完美。" },
    { en: "double-reciprocal plot", cn: "双倒数图",
      def_en: "One over the rate plotted against one over the substrate concentration, turning the hyperbola into a line of slope Km over Vmax. It weights the noisy low-substrate points too heavily to be a good way of fitting the constants, but it is an excellent way to display data and to recognise an inhibition pattern at a glance.",
      def_cn: "以速率的倒数对底物浓度的倒数作图，把双曲线变成斜率为 Km/Vmax 的直线。它给低底物浓度下那些带噪声的点过大的权重，因此不是求常数的好方法；但它展示数据很好用，也让人一眼认出抑制模式。" },
    { en: "ternary complex and Ping-Pong", cn: "三元复合物与乒乓机制",
      def_en: "The two ways a two-substrate reaction can run. In a ternary complex both substrates sit on the enzyme at once; in Ping-Pong the first leaves as product before the second arrives, so the two substrates never meet on the enzyme. On a double-reciprocal plot, intersecting lines mean a ternary complex and parallel lines mean Ping-Pong.",
      def_cn: "双底物反应的两种跑法。三元复合物：两个底物同时坐在酶上；乒乓机制：第一个先作为产物离开，第二个才来，因此两个底物从不在酶上碰面。在双倒数图上，相交的线表示三元复合物，平行的线表示乒乓机制。" },
    { en: "burst", cn: "爆发 burst",
      def_en: "A fast first turnover, about one product molecule per active site, before the rate drops to its steady value. It shows that the rate-limiting step comes after formation of the product being watched — usually that product release is what limits turnover. Seen with a rapid-mixing stopped-flow device.",
      def_cn: "第一次周转跑得很快、约为每个活性位点一分子产物，随后速率掉到稳态值。它说明限速步骤位于所监测产物生成之后 —— 通常就是产物的释放在限速。要用快速混合的停流装置才看得到。" },
    { en: "competitive inhibition", cn: "竞争性抑制",
      def_en: "The inhibitor binds free enzyme in the active site and competes with the substrate for it. Apparent Km rises, Vmax is unchanged, the double-reciprocal lines meet on the vertical axis, and piling on more substrate wins the competition back. Ethanol against methanol on alcohol dehydrogenase is the therapeutic case.",
      def_cn: "抑制剂结合游离酶的活性位点，与底物争夺同一个位置。表观 Km 升高，Vmax 不变，双倒数图上两线交于纵轴，而多加底物就能把这场竞争扳回来。乙醇在乙醇脱氢酶上顶掉甲醇，就是它的治疗用例。" },
    { en: "uncompetitive inhibition", cn: "反竞争性抑制",
      def_en: "The inhibitor binds only the enzyme-substrate complex, at a site of its own. It deletes a fraction of the enzyme from the reaction, so apparent Vmax and apparent Km fall by exactly the same factor and the double-reciprocal lines come out parallel. Adding substrate makes it worse, because more complex is more to bind.",
      def_cn: "抑制剂只结合酶-底物复合物，结合在自己的一个位点上。它等于把一部分酶从反应里删掉，所以表观 Vmax 与表观 Km 按同一个因子一起下降，双倒数图上两线平行。加底物只会更糟，因为复合物越多、可结合的就越多。" },
    { en: "mixed inhibition", cn: "混合型抑制",
      def_en: "The inhibitor binds at a site of its own and can bind either the free enzyme or the enzyme-substrate complex. Vmax always falls; apparent Km rises or falls depending on which form is bound more strongly; the lines intersect off both axes. The rare case of binding both forms equally is what has historically been called noncompetitive.",
      def_cn: "抑制剂结合在自己的位点上，游离酶和酶-底物复合物都能结合。Vmax 必降；表观 Km 可升可降，取决于它更强地结合哪一种形式；直线相交，但不交在任何一根轴上。两种形式结合得同样好的那种罕见情形，历史上被称为非竞争性抑制。" },
    { en: "suicide inactivator", cn: "自杀性失活剂",
      def_en: "A molecule that is harmless until an enzyme starts to process it, whereupon the first steps of the enzyme's own normal reaction turn it into something highly reactive that kills that enzyme permanently. Also called a mechanism-based inactivator. Difluoromethylornithine against African sleeping sickness is the worked case.",
      def_cn: "在酶开始加工它之前一直无害的分子；一旦酶按自己正常反应的头几步处理它，它就被转化成反应性极强的东西，把这个酶永久杀死。也叫基于机制的失活剂。二氟甲基鸟氨酸治疗非洲昏睡病是它的实例。" },
    { en: "transition-state analog", cn: "过渡态类似物",
      def_en: "A stable molecule shaped like the highest-energy arrangement a reaction passes through rather than like the substrate. Because enzymes evolve to grip that arrangement hardest, such a molecule binds a hundred to a hundred million times more tightly than the substrate. Linus Pauling suggested it in the 1940s; the anti-HIV protease inhibitors are built on it.",
      def_cn: "一个稳定分子，它模仿的是反应必须经过的那个能量最高的排布，而不是底物。因为酶在演化中被造成最紧地抓住那个排布，这样的分子结合得比底物紧一百倍到一亿倍。Linus Pauling 在 1940 年代提出；抗 HIV 蛋白酶抑制剂就建立在它之上。" }
  ]
};

window.BIOLITE_SPINE["L-6-4-1"] = {
  assumed: ["protein", "amino acid", "enzyme", "substrate", "product", "cell", "pH",
            "hydrogen bond", "active site", "ATP", "RNA", "conformation", "peptide bond",
            "cofactor", "glucose", "helix", "ligand"],
  nodeTitle_en: "Examples of enzymatic reactions",
  nodeTitle_cn: "酶促反应实例",
  title_en: "Four catalytic devices watched at work in three real enzymes, and the two drug classes that came out of it",
  title_cn: "四件催化装置在三个真实的酶里如何运作，以及由此长出来的两类药",
  steps: [
    {
      en: "To say you understand an enzyme's mechanism you have to know all of this: every substrate, cofactor, product and regulator; the order in time in which the enzyme-bound intermediates form; the structure of each one; the rates at which they turn into each other; how the enzyme is arranged around each; and how much energy every reacting group contributes. Only a few enzymes are understood to that standard. **Three of them are worked through here — chymotrypsin, hexokinase and enolase — and between them they show four devices doing the actual work.** Covalent catalysis: the enzyme itself is temporarily joined to the substrate by a real chemical bond, so the reaction runs in two halves instead of one. General acid-base catalysis: a side chain of the enzyme hands a proton to the substrate or takes one away, at the moment when moving that proton is what the reaction needs. Transition-state stabilisation: the enzyme grips the awkward halfway arrangement harder than it grips the substrate, which lowers the barrier. Induced fit: the enzyme is the wrong shape until the substrate arrives, and binding pulls it into the working shape. What turns any of these from a word into a mechanism is a residue number and an experiment, and both are below.",
      cn: "要说你懂了一个酶的机制，你必须知道全部这些：所有底物、辅因子、产物和调节物；酶结合的各个中间物按时间的先后顺序；每一个中间物的结构；它们相互转化的速率；酶围绕每一个中间物是怎么排布的；以及每个反应基团各贡献多少能量。达到这个标准的酶只有少数几个。**这里走完的是其中三个 —— 胰凝乳蛋白酶、己糖激酶、烯醇化酶 —— 而它们合起来展示了四件真正在干活的装置。**共价催化：酶自己被一根真正的化学键暂时接到底物上，于是反应分成两半跑，而不是一步跑完。普通酸碱催化：酶的某个侧链在「反应正需要挪动一个质子」的那一刻，把一个质子递给底物、或从底物上取走一个。过渡态稳定化：酶抓住那个别扭的中途排布，比抓住底物还紧，于是把能垒压低。诱导契合：底物没来之前酶的形状是不对的，结合把它拉进工作形状。让这些词变成机制的，是残基编号和实验 —— 下面两样都有。",
      src: "A p.203, §6.4"
    },
    {
      link_en: "start with the enzyme where every one of those numbers is known",
      link_cn: "先从那个每个编号都已知的酶开始",
      en: "Chymotrypsin is a protease from bovine pancreas — a protease is an enzyme that cuts other proteins by hydrolysing their peptide bonds — with a relative molecular mass of 25,191, and it cuts specifically next to the aromatic residues Trp, Phe and Tyr. It speeds up peptide-bond hydrolysis by at least a billionfold. And it does not do that by helping a water molecule attack the peptide bond directly. **Instead a transient covalent acyl-enzyme intermediate forms, so the reaction comes in two distinct halves**: an acylation phase, in which the peptide bond is broken and an ester bond forms between the substrate's carbonyl carbon and the enzyme itself, and a deacylation phase, in which that ester is hydrolysed and the free enzyme is handed back ready for the next round.",
      cn: "胰凝乳蛋白酶（chymotrypsin）是来自牛胰腺的一种蛋白酶 —— 蛋白酶就是靠水解肽键把别的蛋白切开的酶 —— 相对分子质量 25,191，专门切在芳香族残基 Trp、Phe、Tyr 旁边。它把肽键水解的速率至少提高了十亿倍。而它做到这一点，靠的不是帮一个水分子去直接进攻肽键。**取而代之的是：先形成一个瞬时的共价酰基-酶中间物（acyl-enzyme intermediate），于是整个反应分成清清楚楚的两半**：酰化阶段，肽键被切断，底物的羰基碳与酶自身之间形成一个酯键；以及去酰化阶段，那个酯键被水解，游离的酶被交还回来，准备下一轮。",
      src: "A p.204, §6.4",
      see: [
        { id: "5-1", en: "the proteases as a class, and how chymotrypsin itself is switched on", cn: "蛋白酶作为一个类别，以及胰凝乳蛋白酶本身是怎么被激活的" }
      ]
    },
    {
      link_en: "that is a strong claim. Here is how the intermediate was actually caught",
      link_cn: "这是一个很强的断言。而那个中间物究竟是怎么被抓住的",
      en: "Chymotrypsin also hydrolyses small esters, and it does them more slowly, because a smaller substrate gives the enzyme less binding energy to work with. That slowness is the opportunity: it stretches the first turnover out far enough to watch. In 1954 B. S. Hartley and B. A. Kilby followed the hydrolysis of p-nitrophenylacetate by watching p-nitrophenol appear — a coloured product, so a colour meter is enough — and saw a rapid burst of product before the rate settled down to a slower steady value. Extrapolated back to zero time, the burst came to just under one molecule of p-nitrophenol for every enzyme molecule present. **One molecule per enzyme, once, and then slow: that is every enzyme molecule in the tube being acylated exactly once, after which turnover is limited by the slower deacylation step.** A burst means the rate-limiting step lies after release of the product being watched.",
      cn: "胰凝乳蛋白酶也水解小分子酯，而且水解得更慢，因为更小的底物提供给酶的结合能更少。这份「慢」正是机会：它把第一次周转拉长到足以被看见。1954 年，B. S. Hartley 与 B. A. Kilby 追踪对硝基苯乙酸酯的水解，看的是对硝基酚的出现 —— 这是一个有颜色的产物，所以一台比色计就够了 —— 他们看到速率落定成较慢的稳态值之前，先有一次产物的快速「爆发」。把它外推回零时刻，这次爆发相当于「每个在场的酶分子略少于一分子对硝基酚」。**每个酶一分子、只有一次、然后变慢：这说明管子里每一个酶分子都恰好被酰化了一次，此后周转由更慢的去酰化步骤限速。**看到爆发，就意味着限速步骤位于所监测产物释放之后。",
      src: "A p.204–205, §6.4",
      see: [
        { id: "L-6-3-1", en: "the same logic as a general principle, and the stopped-flow device that measures it", cn: "同一套逻辑作为一般原理，以及测量它所用的停流装置" }
      ]
    },
    {
      link_en: "so a serine attacks the substrate. An ordinary serine could not",
      link_cn: "所以是一个丝氨酸出手进攻底物。可普通的丝氨酸做不到这件事",
      en: "The group that attacks is the oxygen of Ser195 — proteases that use a serine this way are called serine proteases. There is a problem with that: the hydroxyl of a serine has a pKa far too high for its deprotonated, nucleophilic form to exist in useful amounts at the pH of a cell. Chymotrypsin solves it with a three-residue device. **Ser195, His57 and Asp102 are joined into a hydrogen-bonding network called the catalytic triad.** When substrate binds, the hydrogen bond between His57 and Asp102 is compressed into a much stronger interaction, and that raises the pKa of His57 from about 7, its value in free histidine, to above 12. His57 is then a far stronger base than an ordinary histidine, strong enough to pull the proton off Ser195 and leave behind an oxygen that is a powerful nucleophile. Later in the same reaction the same His57 works the other way round, handing a proton to the group that is leaving. One residue, two opposite jobs, in one turnover.",
      cn: "出手进攻的是 Ser195 的氧 —— 以这种方式使用丝氨酸的蛋白酶叫丝氨酸蛋白酶。可这里有个问题：丝氨酸羟基的 pKa 太高，在细胞的 pH 下，它那个去质子的、有亲核能力的形式根本不够用。胰凝乳蛋白酶用一个三残基装置解决了它。**Ser195、His57 与 Asp102 连成一个氢键网络，叫催化三联体（catalytic triad）。**底物一结合，His57 与 Asp102 之间的氢键就被压缩成一个强得多的相互作用，这把 His57 的 pKa 从游离组氨酸的约 7 抬高到 12 以上。此时的 His57 已是一个远比普通组氨酸更强的碱，强到足以把质子从 Ser195 上拽下来，留下一个强亲核的氧。在同一次反应的后段，同一个 His57 又反向工作，把一个质子递给正在离去的基团。一个残基，两件相反的活，在同一次周转里。",
      src: "A p.205, 208, §6.4",
      see: [
        { id: "E-histidine", en: "why histidine and no other residue can do this at cellular pH", cn: "为什么在细胞 pH 下只有组氨酸干得了这件事" }
      ]
    },
    {
      link_en: "and the bell-shaped pH curve is not one fact but two, one per side",
      link_cn: "而那条钟形 pH 曲线不是一个事实，是两个 —— 一边一个",
      en: "Chymotrypsin's rate against pH is a bell with its top at pH 8.0. Measure kcat and Km separately at each pH and the bell comes apart into two independent halves with two different residues behind them. The fall below pH 7 belongs to kcat, and it is the protonation of His57: once His57 has a proton of its own it can no longer take one from Ser195, so the first chemical step stops — which is a direct demonstration that acid-base catalysis by a named side chain is doing real work. The fall above pH 8.5 belongs instead to 1 over Km, and it is the amino group of Ile16 losing its proton: that breaks a salt bridge to Asp194, the hydrophobic pocket that grips the aromatic side chain of the substrate closes up, and the substrate can no longer bind properly. **So one side of the curve is about chemistry and the other side is about binding. A pH optimum is not a property of enzymes in general — it is the sum of specific ionisations, and each one can be named.**",
      cn: "胰凝乳蛋白酶的「速率对 pH」是一条钟形曲线，顶点在 pH 8.0。在每个 pH 下分别测 kcat 和 Km，这口钟就裂成两个互相独立的半边，各自背后站着一个不同的残基。pH 7 以下的下降属于 kcat，原因是 His57 被质子化：His57 自己带上质子之后，就再也不能从 Ser195 那里取走一个，第一个化学步骤于是停摆 —— 这直接证明了「某个具名侧链的酸碱催化」在做实实在在的工作。pH 8.5 以上的下降则属于 1/Km，原因是 Ile16 的氨基失去了质子：这打断了它与 Asp194 之间的一座盐桥，那个用来夹住底物芳香侧链的疏水口袋随之关闭，底物再也结合不上去。**所以这条曲线的一边讲的是化学，另一边讲的是结合。「最适 pH」并不是酶的某种笼统性质 —— 它是一组具体解离过程的总和，而每一个都能被点名。**",
      src: "A p.205, §6.4",
      see: [
        { id: "3-4", en: "the pH and temperature dependence stated for enzymes in general", cn: "对酶而言一般性的 pH 与温度依赖" }
      ]
    },
    {
      link_en: "and here is where the enzyme's binding energy is actually spent",
      link_cn: "而酶的结合能究竟花在了哪里，答案就在这里",
      en: "When the Ser195 oxygen attacks the substrate's carbonyl group, a very short-lived tetrahedral intermediate forms — the carbonyl carbon briefly has four groups around it instead of three — and its oxygen picks up a negative charge. That charge appears inside a pocket of the enzyme called the oxyanion hole, where it is stabilised by hydrogen bonds from the amide groups of two peptide bonds in the enzyme's own backbone. One of those two hydrogen bonds, the one from Gly193, exists only in that intermediate and in the transition states leading into and out of it. It is not there when the substrate is simply sitting in the active site. So it lowers the energy needed to reach the hard part of the reaction without stabilising the starting state at all, and lowering the difference between those two is exactly what catalysis is. **The enzyme is built to fit the transition state better than it fits its own substrate, which is a sharper statement than saying the enzyme adapts to the substrate**, and the two should be held side by side rather than swapped for each other.",
      cn: "当 Ser195 的氧进攻底物的羰基时，会形成一个寿命极短的四面体中间物（tetrahedral intermediate） —— 那个羰基碳周围短暂地由三个基团变成四个 —— 而它的氧上带出一个负电荷。这个电荷出现在酶的一个口袋里，这个口袋叫氧负离子洞（oxyanion hole），电荷在那里被两条氢键稳住，氢键来自酶自身主链上两个肽键的酰胺基团。这两条氢键里有一条 —— 来自 Gly193 的那条 —— 只在那个中间物、以及通向它和离开它的过渡态中存在。底物只是老老实实待在活性位点里的时候，这条键并不在。所以它降低的是「到达反应最难那一段所需的能量」，而对起始状态完全不加稳定 —— 而把这两者之间的差值压小，正是催化的定义。**酶是被造成「与过渡态的契合，好过与自己底物的契合」的；这句话比「酶去适应底物」要锐利得多**，两句应当并排放着理解，而不是互相替换。",
      src: "A p.208, §6.4"
    },
    {
      link_en: "which forces a distinction that gets blurred constantly",
      link_cn: "这就逼出一个总被含混带过的区分",
      en: "**An intermediate is any chemical species with a finite lifetime, where finite means longer than a single molecular vibration, about ten to the minus thirteenth of a second. A transition state is the highest-energy arrangement formed along the reaction path, and it has no lifetime at all.** So the difference between them is not that one is a bit more stable than the other; it is whether the thing has a lifetime in the first place. An intermediate is a stage at which bonds have finished forming and the molecule is committed; a transition state is part of the process of reacting. In chymotrypsin the tetrahedral intermediates resemble their own transition states so closely, in structure and in energy, that the distinction is routinely glossed over — including in diagrams. The acyl-enzyme intermediate is the counter-example that keeps it honest: it is stable enough to detect and to study, which is exactly why nobody mistakes it for a transition state. And the payoff is practical: when asked what an enzyme stabilises, the answer is the transition state, and the Gly193 hydrogen bond is the evidence sitting ready to be quoted.",
      cn: "**中间物（intermediate）是任何具有有限寿命的化学物种，这里「有限」的下限很具体：长于一次分子振动，约 10⁻¹³ 秒。过渡态（transition state）是沿反应路径形成的能量最高的排布，它根本没有寿命。**所以两者的差别，不在于「一个比另一个稳定一点」，而在于它到底有没有寿命。中间物是「键已经形成完毕、事情已经定局」的一个阶段；过渡态则是反应过程本身的一部分。在胰凝乳蛋白酶里，四面体中间物在结构和能量上都与它自己的过渡态极为相似，所以这个区分常常被略过 —— 连示意图也在略过。酰基-酶中间物就是那个让这件事保持诚实的反例：它稳定到可以被检出、被研究，正因如此，没有人会把它当成过渡态。而回报是实打实的：被问到「酶稳定的是什么」，答案是过渡态，而 Gly193 那条氢键就是现成可引的证据。",
      src: "A p.207, §6.4"
    },
    {
      link_en: "the covalent route is not the only route, and the difference decides drug design",
      link_cn: "共价这条路并不是唯一的路，而这个差别决定了药怎么设计",
      en: "**Proteases fall into four subclasses by mechanism — serine, cysteine, aspartate and metallo, named after what does the catalysis.** The split is not bookkeeping, because it predicts something: serine and cysteine proteases form covalent enzyme-substrate complexes, and aspartyl proteases and metalloproteases do not. The HIV protease, the enzyme the virus needs to cut its own newly made proteins into working pieces, is an aspartyl protease. Two aspartate residues in its active site, one contributed by each of its two subunits, act as general acid-base catalysts and help a water molecule attack the peptide bond directly. That gives a short-lived tetrahedral intermediate much like chymotrypsin's — but with no acyl-enzyme step anywhere in the reaction. So knowing the subclass tells a drug designer what there is to imitate.",
      cn: "**蛋白酶按机制分成四个亚类 —— 丝氨酸型、半胱氨酸型、天冬氨酸型、金属型，名字来自「是谁在催化」。**这个划分不是记账，因为它能预测一件事：丝氨酸蛋白酶和半胱氨酸蛋白酶形成共价的酶-底物复合物，而天冬氨酸蛋白酶和金属蛋白酶不形成。HIV 蛋白酶 —— 病毒用来把自己刚合成出来的蛋白切成可用零件的那个酶 —— 是一种天冬氨酸蛋白酶。它活性位点上有两个天冬氨酸残基，两个亚基各出一个，充当普通酸碱催化剂，帮助一个水分子直接进攻肽键。由此产生一个短命的四面体中间物，与胰凝乳蛋白酶那个很像 —— 但整个反应里根本没有酰基-酶这一步。所以知道它属于哪个亚类，就等于告诉药物设计者：可以去模仿的是什么。",
      src: "A p.208, §6.4"
    },
    {
      link_en: "and what they imitate is the hardest moment of the reaction",
      link_cn: "而他们模仿的，正是反应最艰难的那一刻",
      recall_en: "the negatively charged oxygen is the one chymotrypsin holds in its oxyanion hole",
      recall_cn: "那个带负电的氧，正是胰凝乳蛋白酶用氧负离子洞握住的那一个",
      en: "The HIV protease inhibitors bind without any covalent bond and yet so tightly that they count as irreversible, and part of that tightness comes from their being designed as transition-state analogs — molecules shaped like the reaction's hardest moment rather than like its substrate. They look structurally varied, but every one of them shares a core: a main chain carrying a hydroxyl group, next to a branch carrying a benzyl group. The benzyl group goes into the enzyme's aromatic pocket, and the hydroxyl beside it mimics the negatively charged oxygen of the tetrahedral intermediate. **The enzyme therefore binds the drug as though the reaction were already at its most difficult point, and cannot let go.** The scale is worth carrying: in 2018, 38 million people were living with HIV and 23.3 million of them were receiving antiretroviral therapy. These catalytic principles are not abstruse ideas to be memorised — applying them saves lives.",
      cn: "HIV 蛋白酶抑制剂完全不靠共价键结合，却紧到可以算作不可逆；这份紧密有一部分来自它们被设计成过渡态类似物 —— 形状模仿反应最艰难那一刻、而不是模仿底物的分子。它们的结构看上去各不相同，但每一个都共有一个核心：一条主链带着一个羟基，旁边有一个带苄基的分支。苄基进入酶的芳香口袋；紧挨着它的那个羟基，模拟的是四面体中间物上那个带负电的氧。**于是酶结合这个药的方式，就像反应已经处在最难的那一点上一样，而且放不开手。**规模值得记住：2018 年有 3,800 万人感染 HIV，其中 2,330 万人正在接受抗逆转录病毒治疗。这些催化原理不是拿来背的晦涩概念 —— 用上它们能救命。",
      src: "A p.209, §6.4"
    },
    {
      link_en: "second enzyme, second device: an enzyme that is the wrong shape until you feed it",
      link_cn: "第二个酶，第二件装置：一个不喂东西就形状不对的酶",
      en: "Hexokinase transfers the outermost phosphoryl group of ATP onto the hydroxyl at carbon 6 of glucose; the yeast enzyme has a relative molecular mass of 107,862, and ATP and ADP always arrive as a complex with a magnesium ion, Mg2+. The problem it has to solve is sharp: that hydroxyl on glucose is chemically much like a water molecule, and water gets into the active site freely and in enormous excess — yet hexokinase prefers glucose to water by a millionfold. It does not manage that by keeping water out. **The empty enzyme is U-shaped and inactive, with the side chains of its active site out of position; when glucose and Mg-ATP bind, the two arms of the U pinch together** and the energy released by binding drives the protein into its catalytically active shape. That is induced fit, with a number attached to it.",
      cn: "己糖激酶（hexokinase）把 ATP 最外侧的磷酰基转移到葡萄糖 6 号碳上的羟基上；酵母来源的这个酶相对分子质量 107,862，而 ATP 和 ADP 总是以与镁离子 Mg²⁺ 的复合物形式到场。它要解决的问题很尖锐：葡萄糖上那个羟基，化学性质与一个水分子很像，而水能自由进入活性位点、而且量大得离谱 —— 可己糖激酶对葡萄糖的偏好比对水高一百万倍。它做到这一点，靠的不是把水挡在外面。**空载的酶呈 U 形、没有活性，活性位点的侧链都不在位；当葡萄糖与 Mg-ATP 结合上来，U 的两条臂夹拢**，结合释放出的能量把蛋白推进具催化活性的形状。这就是诱导契合（induced fit），而且是带着一个数字的诱导契合。",
      src: "A p.209–210, §6.4",
      see: [
        { id: "6-1-1", en: "the same reaction used to show how a costly reaction is paid for by ATP", cn: "同一个反应，用来说明一个耗能反应怎么由 ATP 埋单" },
        { id: "L-14-5-1", en: "hexokinase as a control point in sugar metabolism", cn: "己糖激酶作为糖代谢中的一个控制点" }
      ]
    },
    {
      link_en: "and the shape change was proved by a sugar that is not a substrate",
      link_cn: "而这个构象变化，是被一个「根本不是底物」的糖证明的",
      en: "Xylose is a five-carbon sugar, stereochemically like glucose but one carbon shorter. It binds hexokinase in a position where it cannot be phosphorylated at all. Add it anyway, and the rate at which the enzyme hydrolyses ATP goes up. **Binding xylose is enough on its own to induce the change into the active conformation, and the enzyme, now switched on with nothing proper to work on, is tricked into phosphorylating water instead.** That is the experiment: something that binds, is not a substrate, and switches the enzyme on regardless. It also settles a reasonable-sounding guess in the opposite direction — the guess that only a true substrate has enough affinity to force the conformational change, and that anything binding without evoking it must act as an inhibitor. Xylose binds, evokes it, and speeds up a side reaction.",
      cn: "木糖（xylose）是一种五碳糖，立体化学上像葡萄糖，只是少一个碳。它结合到己糖激酶上的位置，使它根本无法被磷酸化。可你偏偏把它加进去，酶水解 ATP 的速率反而上升了。**光是木糖的结合，就足以诱导酶转入活性构象；而这个已经被打开、手上却没有正经活干的酶，就被「骗」去磷酸化水了。**这就是那个实验：一个能结合、不是底物、照样把酶打开的东西。它同时也了结了一个听起来很有道理的反向猜测 —— 即「只有真正的底物才有足够的亲和力去迫使构象改变，凡是能结合却引不出构象变化的分子就必然充当抑制剂」。木糖能结合、也引出了构象变化，结果是加快了一个副反应。",
      src: "A p.209–210, §6.4"
    },
    {
      link_en: "which moves specificity to a place most people do not look for it",
      link_cn: "而这把「特异性」挪到了大多数人不会去找的地方",
      en: "Water gets into the active site. Xylose gets into the active site. What makes glucose different is what happens after it arrives. **Specificity is not observed in the formation of the enzyme-substrate complex; it is observed in the relative rates of the catalytic steps that follow it.** Glucose is the molecule whose arrival makes the next steps fast. And hexokinase is doing more than one thing at once: the side chains that the conformational change brings into position then carry out general acid-base catalysis and transition-state stabilisation — the same two devices already seen in chymotrypsin. One enzyme, several catalytic devices working together in one active site, which is why treating them as four separate tricks in a list misses how they actually operate.",
      cn: "水能进活性位点。木糖也能进活性位点。葡萄糖之所以不同，差别发生在它进来之后。**特异性并不体现在酶-底物复合物的形成上，它体现在此后各个催化步骤的相对速率上。**葡萄糖就是那个「一到位，后面几步就变快」的分子。而且己糖激酶同时在做不止一件事：被构象变化带到位的那些侧链，接下来执行的是普通酸碱催化和过渡态稳定化 —— 正是在胰凝乳蛋白酶里已经见过的那两件装置。一个酶，好几件催化装置在同一个活性位点里协同工作；这也正是为什么把它们当成清单上四个各自独立的技巧，会错过它们真实的工作方式。",
      src: "A p.210, §6.4"
    },
    {
      link_en: "third enzyme, and the device is a metal ion doing something a list of metal roles misses",
      link_cn: "第三个酶，而这次的装置是一个金属离子在干一件「金属作用清单」漏掉的事",
      en: "A metal ion in an enzyme is usually described as being part of the active site, or a bridge holding the substrate in place, or a stabiliser of the protein's shape. Enolase shows a fourth thing a metal can do, and it is the thing that makes the reaction possible at all. Yeast enolase, relative molecular mass 93,316, a dimer of two subunits of 436 residues each, catalyses the reversible removal of water from 2-phosphoglycerate to give phosphoenolpyruvate — one step of the pathway that breaks glucose down. Lys345 acts as a general base and takes a proton off carbon 2; Glu211 acts as a general acid and gives a proton to the hydroxyl that is leaving. The difficulty is that the proton on carbon 2 is not acidic, so there is nothing there for a base to take. What makes it acidic is a pull on electron density: **the electronegative oxygen atoms of the carboxyl group next door drag electrons away from carbon 2, and in the active site that carboxyl group is gripped by strong ionic interactions with two bound Mg2+ ions, which increases the pull enormously.** Together that is enough to render the carbon-2 protons acidic enough for one to be removed. The same two metal ions then go on to shield the two negative charges of the short-lived enolate intermediate.",
      cn: "酶里的金属离子，通常被描述成三种角色：活性中心的一部分、把底物固定住的桥、或者稳定蛋白空间结构的因素。烯醇化酶（enolase）展示了金属能做的第四件事，而正是这件事让反应成为可能。酵母烯醇化酶相对分子质量 93,316，是由两个各含 436 个残基的亚基组成的二聚体，催化 2-磷酸甘油酸可逆地脱去一分子水，生成磷酸烯醇式丙酮酸 —— 这是分解葡萄糖那条途径中的一步。Lys345 充当普通碱，从 2 号碳上取走一个质子；Glu211 充当普通酸，把一个质子给予正在离去的羟基。难点在于：2 号碳上那个质子本身并不酸，碱根本无从下手。让它变酸的，是对电子密度的拉扯：**紧邻的羧基上那些电负性很强的氧原子把电子从 2 号碳那里拽走；而在活性位点里，这个羧基被两个结合上的 Mg²⁺ 以强离子相互作用握住，把这份拉扯放大了许多。**两者合起来，就足以让 2 号碳上的质子酸到可以被取走一个。随后同样这两个金属离子又去屏蔽那个短命的烯醇负离子中间物上的两个负电荷。",
      src: "A p.210–211, §6.4",
      see: [
        { id: "7-8-3", en: "the same reaction as one step of sugar breakdown", cn: "同一个反应，作为糖分解途径中的一步" },
        { id: "3-2", en: "the roles a metal ion plays inside an enzyme", cn: "金属离子在酶内部扮演的各种角色" }
      ]
    },
    {
      link_en: "and now what all of this was for. A false substrate for a serine enzyme",
      link_cn: "而这一切究竟为了什么。答案是：给一个丝氨酸酶递上一个假底物",
      en: "Alexander Fleming found penicillin in 1928, and 15 more years passed before this unstable compound was understood well enough to be used as a medicine. It blocks the synthesis of peptidoglycan, the rigid mesh outside a bacterium that stops the cell bursting under its own osmotic pressure. The step it attacks is the one that cross-links that mesh, run by an enzyme called a transpeptidase — and here is the connection everything above was building towards: that transpeptidase uses an active-site serine and a covalent mechanism much like chymotrypsin's. Penicillin and its relatives bind it through a segment that mimics one shape of the D-Ala–D-Ala end of the peptidoglycan precursor, except that where the peptide bond should be there is a strained, highly reactive four-membered beta-lactam ring. **The active-site serine attacks that ring and forms a covalent adduct — and the leaving group cannot walk away, because it is still tethered by what is left of the ring, so the enzyme is inactivated permanently.** Wall synthesis stops, and most bacteria die as the fragile inner membrane bursts. Three members worth knowing apart: penicillin G was isolated first and is still among the most effective, but stomach acid destroys it, so it has to be injected; penicillin V is acid-stable and can be swallowed; amoxicillin works against a broad range, is taken by mouth, and is the most prescribed of the class.",
      cn: "Alexander Fleming 于 1928 年发现青霉素，此后又过了 15 年，人们才把这个不稳定的化合物弄懂到足以当药用。它阻断的是肽聚糖（peptidoglycan）的合成 —— 肽聚糖是细菌外面那层刚性网格，正是它挡着细胞不被自身的渗透压撑破。它攻击的那一步，是把这层网格交联起来的那一步，由一个叫转肽酶（transpeptidase）的酶执行 —— 而这里就是上面所有内容一路铺向的那个连接点：这个转肽酶用的是一个活性位点丝氨酸，机制与胰凝乳蛋白酶很相似，也是共价的。青霉素及其同类通过一段模仿肽聚糖前体 D-Ala–D-Ala 末端某种构象的结构与它结合，只不过在本该是肽键的位置上，换成了一个张力很大、反应性很高的四元 β-内酰胺环。**活性位点的丝氨酸进攻这个环、形成共价加合物 —— 而离去基团走不掉，因为它还被这个环剩下的部分拴着，于是该酶被永久失活。**细胞壁合成随之停止，多数细菌因脆弱的内膜在渗透压下破裂而死。三个成员值得分清：青霉素 G 最早被分离出来，至今仍属最有效之列，但会被胃酸破坏，所以必须注射；青霉素 V 耐酸，可以口服；阿莫西林抗菌谱广、可口服，是这一类里处方量最大的。",
      src: "A p.211–212, §6.4"
    },
    {
      link_en: "bacteria answered, and the answer to their answer is a mechanism-based drug",
      link_cn: "细菌回敬了一手，而对这一手的回应，又是一个基于机制的药",
      recall_en: "the same suicide-inactivator idea as the sleeping-sickness drug, in a second setting",
      recall_cn: "和昏睡病那个药是同一个「自杀性失活剂」的想法，换了一个场景",
      en: "Using penicillin selected for bacteria that express beta-lactamases, enzymes that cut the beta-lactam ring open and so destroy the antibiotic; under the pressure of use and overuse the genes for them have spread rapidly through bacterial populations. **The answer was clavulanic acid, a suicide inactivator — a molecule that is harmless until the target enzyme itself activates it.** Clavulanic acid mimics the structure of a beta-lactam antibiotic, so the beta-lactamase attacks it with its own active-site serine and forms a covalent adduct; that adduct then rearranges into a far more reactive species, which a second nucleophile in the same active site attacks, acylating the enzyme and killing it permanently. What arms the poison is the enzyme's own chemistry, which is precisely what a suicide inactivator means. Amoxicillin combined with clavulanic acid is sold as Augmentin.",
      cn: "使用青霉素，筛选出了表达 β-内酰胺酶（beta-lactamase）的细菌 —— 这类酶把 β-内酰胺环切开，从而毁掉抗生素；在使用乃至滥用造成的压力下，编码它们的基因在细菌群体中迅速扩散。**回应是克拉维酸（clavulanic acid），一种自杀性失活剂 —— 一个在被靶酶自己激活之前始终无害的分子。**克拉维酸模仿一种 β-内酰胺抗生素的结构，于是 β-内酰胺酶用自己活性位点的丝氨酸去进攻它、形成共价加合物；这个加合物随后重排成一个反应性强得多的物种，再被同一活性位点里的第二个亲核基团进攻，把酶酰化并永久杀死。给这剂毒药上膛的，正是酶自身的化学过程 —— 这就是「自杀性失活剂」的确切含义。阿莫西林与克拉维酸的合剂，商品名就是 Augmentin。",
      src: "A p.211, 213, §6.4",
      openQuestion_en: "Strains resistant to both already exist, their beta-lactamase mutated so that clavulanic acid no longer reacts with it. Where this ends is not settled: the development of new antibiotics promises to be a growth industry.",
      openQuestion_cn: "对两者**都**耐药的菌株已经出现了：它们的 β-内酰胺酶发生了突变，克拉维酸不再与它反应。这条路通向哪里并没有定论 —— 新抗生素的开发有望成为一个持续增长的产业。"
    }
  ],
  terms: [
    { en: "acyl-enzyme intermediate", cn: "酰基-酶中间物",
      def_en: "The transient covalent species formed when the Ser195 oxygen of chymotrypsin becomes esterified to the substrate's carbonyl carbon. It is stable enough to detect, and it is why the reaction runs in an acylation phase and a deacylation phase rather than in one step.",
      def_cn: "胰凝乳蛋白酶的 Ser195 氧与底物羰基碳酯化后形成的瞬时共价物种。它稳定到可以被检出，也正是这个反应分成酰化与去酰化两个阶段、而非一步跑完的原因。" },
    { en: "burst kinetics", cn: "爆发动力学",
      def_en: "A fast initial release of product, roughly one molecule per enzyme molecule, before the rate settles to a slower steady value. It proves that the rate-limiting step comes after release of the product being watched. Hartley and Kilby saw it in 1954 with p-nitrophenylacetate, and it is the evidence for a covalent intermediate.",
      def_cn: "在速率落到较慢的稳态值之前，产物先有一次快速释放，约为每个酶分子一分子。它证明限速步骤位于所监测产物释放之后。Hartley 与 Kilby 于 1954 年用对硝基苯乙酸酯看到了它，这正是共价中间物的证据。" },
    { en: "catalytic triad", cn: "催化三联体",
      def_en: "The Ser195, His57 and Asp102 hydrogen-bonding network of chymotrypsin. Substrate binding compresses the His-Asp hydrogen bond, which raises His57's pKa from about 7 to above 12, so that it can strip the proton from Ser195 and turn an ordinary hydroxyl into a strong nucleophile.",
      def_cn: "胰凝乳蛋白酶中由 Ser195、His57 与 Asp102 构成的氢键网络。底物的结合压缩了 His-Asp 之间的氢键，把 His57 的 pKa 从约 7 抬到 12 以上，于是它能把质子从 Ser195 上剥下来，把一个普通的羟基变成强亲核试剂。" },
    { en: "oxyanion hole", cn: "氧负离子洞",
      def_en: "A pocket in the enzyme where two backbone amide groups hydrogen-bond to the negative charge that appears on the substrate's carbonyl oxygen in the tetrahedral intermediate. One of those two bonds, from Gly193, exists only in that intermediate and its transition states, so the binding energy is spent on the hard part of the reaction and not on the starting state.",
      def_cn: "酶上的一个口袋：其中两个主链酰胺基团与四面体中间物里底物羰基氧上出现的负电荷形成氢键。这两条键里有一条来自 Gly193，只在该中间物及其过渡态中存在 —— 所以结合能被花在反应最难的那一段上，而不是花在起始状态上。" },
    { en: "tetrahedral intermediate", cn: "四面体中间物",
      def_en: "The very short-lived species formed when a nucleophile adds to a carbonyl carbon, giving that carbon four groups instead of three and putting a negative charge on the oxygen. In chymotrypsin it is held in the oxyanion hole; in the HIV protease it is what the inhibitors are shaped to imitate.",
      def_cn: "亲核基团加到羰基碳上时形成的极短命物种：那个碳周围由三个基团变成四个，氧上带出一个负电荷。在胰凝乳蛋白酶里，它被氧负离子洞握住；在 HIV 蛋白酶里，它正是那些抑制剂在模仿的对象。" },
    { en: "intermediate versus transition state", cn: "中间物与过渡态之别",
      def_en: "An intermediate has a finite lifetime, longer than one molecular vibration at about ten to the minus thirteenth of a second; a transition state is the highest-energy arrangement along the reaction path and has no lifetime whatever. What an enzyme is built to stabilise is the transition state.",
      def_cn: "中间物有有限的寿命，下限是长于一次分子振动，约 10⁻¹³ 秒；过渡态是反应路径上能量最高的排布，根本没有寿命。酶被造出来要稳定的，是过渡态。" },
    { en: "induced fit", cn: "诱导契合",
      def_en: "The enzyme has the wrong shape until its substrate arrives, and the energy released on binding pulls it into the working shape. Hexokinase is the case with a number on it, and xylose is the proof: it binds, cannot be phosphorylated, and induces the change anyway.",
      def_cn: "底物没到之前，酶的形状是不对的；结合时释放出的能量把它拉进能工作的形状。己糖激酶是那个带着数字的例子，而木糖是证据：它能结合、无法被磷酸化，却照样引发了那个变化。" },
    { en: "beta-lactam ring", cn: "β-内酰胺环",
      def_en: "The strained, highly reactive four-membered ring that sits where a peptide bond would be in the D-Ala-D-Ala mimic carried by penicillin. The transpeptidase's active-site serine attacks it, the leaving group stays tethered, and the enzyme is permanently dead.",
      def_cn: "青霉素所带的 D-Ala-D-Ala 模拟结构中，本该是肽键的那个位置上换成的一个张力大、反应性极高的四元环。转肽酶活性位点的丝氨酸进攻它，离去基团仍被拴住，于是该酶被永久杀死。" },
    { en: "suicide inactivator", cn: "自杀性失活剂",
      def_en: "A molecule that stays harmless until the target enzyme runs the first steps of its own normal reaction on it, which converts it into something highly reactive that kills that enzyme for good. Clavulanic acid does this to beta-lactamases, and difluoromethylornithine does it to a trypanosome enzyme.",
      def_cn: "在靶酶用自己正常反应的头几步去处理它之前，一直无害的分子；一旦被处理，它就变成反应性极强的东西，把这个酶彻底杀死。克拉维酸对 β-内酰胺酶就是这么干的，二氟甲基鸟氨酸对锥虫的一个酶也是。" }
  ]
};
