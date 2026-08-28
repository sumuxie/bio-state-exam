/* Merged spines — membranes: architecture, transport, and the bench work. 速通简洁版,
   ONE spine per TOPIC.

   Three topics, fifteen node spines and raw sections between them, come out here as
   three chains. Sizes follow the material, not a target: membrane-architecture holds
   seven member nodes and runs 22 steps, membrane-transport holds five and runs 21
   because two of those five are the longest Lehninger sections in the chapter, and
   working-with-lipids holds three and runs 13.

   NOTHING IS DROPPED. 不要缺失任何节点 — every member node is carried by named steps,
   and no named lipid, transporter, enzyme or number was cut to hit a step count.

   The merge rule is the one used for lipids: the Lehninger telling is the backbone,
   the other book is folded in where it ADDS — a number, a name the exam uses, a
   classification, a consequence the first account does not draw. Where both say the
   same thing, the Lehninger sentence stands and the page numbers of both are carried,
   separated by a middle dot, so no page number is ever attached to the wrong claim.

   Reaches back rather than repeats: what a membrane lipid IS — amphipathy, the
   glycerophospholipid head groups, sphingolipids, cardiolipin — is the
   `key:membrane-lipids` chain and is not re-explained here. What a proton gradient
   across a membrane is finally SPENT on is `key:respiratory-chain`, pointed at from
   the F-type ATPase step of the transport chain.

   Two disagreements between the two books are flagged in the prose where they fall,
   never smoothed over: a route through a protein-lined channel is facilitated
   diffusion by the standard definition even where it is listed under simple
   diffusion; and the last two products of sphingosine breakdown are drawn saturated
   although sphingosine's own C4-C5 double bond is usually described as surviving.

   ONE bold span per field. 极简 mode shows only that span, so it has to read correctly
   with everything else hidden.

   topics: membrane-architecture · membrane-transport · working-with-lipids
*/
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* --------------------------------------------------------------- 膜的结构 ---- */
window.BIOLITE_SPINE["key:membrane-architecture"] = {
  assumed: [
    "cell", "water", "lipid", "protein", "membrane", "plasma membrane", "enzyme",
    "hormone", "toxin", "receptor", "ligand", "gene", "genome", "virus", "bacteria",
    "carbon", "oxygen", "phosphate", "phosphorylation", "tyrosine", "kinase",
    "phosphatase", "amino acid", "side chain", "alpha helix", "residue", "domain",
    "conformational change", "signal transduction", "second messenger",
    "cytosol", "cytoplasm", "nucleus", "mitochondrion", "inner mitochondrial membrane",
    "endoplasmic reticulum", "golgi apparatus", "lysosome", "endosome", "microsome",
    "vesicle", "cytoskeleton", "erythrocyte", "macrophage", "neuron", "synapse",
    "neurotransmitter", "muscle", "eukaryote", "organelle", "compartment",
    "amphipathic", "hydrophobic", "hydrophilic", "polar", "non-polar", "covalent",
    "non-covalent", "van der waals", "free energy", "activation energy", "gradient",
    "concentration", "diffusion", "osmotic", "fatty acid", "acyl chain", "saturated",
    "unsaturated", "double bond", "kink", "glycerophospholipid", "phospholipid",
    "sphingolipid", "glycosphingolipid", "cerebroside", "ganglioside", "sphingosine",
    "cholesterol", "sterol", "cardiolipin", "aminophospholipid",
    "phosphatidylserine", "phosphatidylcholine", "phosphatidylethanolamine",
    "sphingomyelin", "palmitoyl", "carbohydrate", "sugar", "oligosaccharide",
    "glycoprotein", "glycolipid", "atp", "adp", "gtp", "insulin", "apoptosis",
    "secretion", "exocytosis", "phagocytosis", "cell division", "spectrin",
    "ankyrin", "glycophorin", "acetylcholine", "acetylcholine receptor",
    "chloride", "bicarbonate", "escherichia coli", "protease", "fluorescence",
    "laser", "probe", "micrometre", "nanometre", "helix", "dimer", "monolayer"
  ],
  nodeTitle_en: "Membrane architecture",
  nodeTitle_cn: "膜的结构",
  title_en: "Sideways is cheap and across is expensive: a sheet two molecules thick, what the cell can and cannot rearrange in it, and what it costs to bend one",
  title_cn: "沿着膜滑动很便宜，穿过膜很贵：一张两个分子厚的片层，细胞在其中能重排什么、不能重排什么，以及把它弯过来要付多少钱",
  steps: [
    {
      en: "A cell membrane is the structure that separates the inside of a living cell from everything outside it, and a eukaryotic cell then spends more membrane dividing its own inside up: the nucleus and the mitochondrion are each wrapped in one, and the cytoplasm holds further membranous structures — the Golgi apparatus, the endoplasmic reticulum, microsomes. **Every biochemically distinct space in a cell is a space some membrane encloses, so a compartment and its boundary are one object rather than two.**",
      cn: "细胞膜 (cell membrane) 是把活细胞内部与外界隔开的那个结构；真核细胞接着又花更多的膜把自己内部再分开：细胞核和线粒体各被一层膜包着，细胞质里还有别的膜性结构 —— 高尔基体、内质网、微粒体。**细胞里每一个生化上不同的空间，都是某张膜围出来的空间；区室和它的边界是同一样东西，而不是两样。**",
      src: "B §8.5, pp.197–198"
    },
    {
      link_en: "a boundary that only kept two spaces apart would need no chemistry of its own",
      link_cn: "一条只负责把两个空间隔开的边界，本来不需要自己的化学",
      en: "A membrane is a biochemically highly active system: it carries out the selective transport of substances into and out of the space it encloses, it binds hormones and other regulatory signals, it transmits electrical impulses, and it hosts a whole range of enzyme reactions, ATP production among them. **The architectural scheme is the same in every cell, and yet each membrane is functionally specialised: only the inner mitochondrial membrane makes ATP.**",
      cn: "膜是一个生化上高度活跃的系统：它执行物质进出这个空间的选择性转运，结合激素和其他调节信号，传递电脉冲，还承载一大批酶促反应 —— 包括 ATP 的生成。**架构方案在每种细胞里都一样，可每一张膜的功能却是专门化的：只有线粒体内膜负责生成 ATP。**同样，某种激素只结合特定的膜，对另一些膜则完全不起作用。",
      src: "B §8.5, pp.197–198",
      see: [{ id: "6-2-4-5", en: "the machine in that one membrane that makes the ATP", cn: "内膜上那台造 ATP 的机器" }]
    },
    {
      link_en: "so what is a membrane made of, measured by weight",
      link_cn: "那么一张膜按重量算，是由什么造的",
      en: "Biological membranes are built from protein and lipid, and their proportions are not a constant: the protein-to-lipid weight ratio runs from 1:4 all the way to 3:1 depending on where a membrane came from and what it does, so there is no single answer to what a membrane is made of. Carbohydrate is always present as well, 0.5 to 10 percent of the mass. **Membrane carbohydrate is never free: it occurs only as a glycoprotein or as a glycolipid, always attached to something already in the membrane.**",
      cn: "生物膜由蛋白质和脂类造成，而两者的比例不是常数：蛋白质与脂类的重量比从 1:4 一直变到 3:1，取决于这张膜从哪儿来、干什么活 —— 所以「膜由什么组成」根本没有唯一答案。糖类也总是在场，占膜质量的 0.5% 到 10%。**膜上的糖从不以游离形式存在：它只以糖蛋白或糖脂的形式出现，永远挂在膜里已有的某样东西上。**",
      src: "B §8.5.1, p.198"
    },
    {
      recall_en: "the amphipathic lipids of the membrane-lipids chain, now assembled into a sheet",
      recall_cn: "膜脂那条链里的两亲性脂类，现在被装成了一张片层",
      en: "The structural basis of every biological membrane is a bilayer: two lipid monolayers, each one called a leaflet, laid tail to tail so the hydrophobic tails meet in the middle and the hydrophilic heads face the water on either side. **A bilayer is 3.5 to 4.0 nanometres thick, has a markedly non-polar centre and two polar surfaces, and every interaction that holds it together is non-covalent.**",
      cn: "每一张生物膜的结构基础都是双层 (bilayer)：两个脂类单层，每一层叫一个小叶 (leaflet)，尾对尾地排在一起，于是疏水尾巴在中间会合，亲水头基朝向两侧的水。**双层厚 3.5 到 4.0 纳米，中央高度非极性、两个表面是极性的，而把它维系在一起的每一种相互作用都是非共价的。**",
      src: "B §8.5.2, p.198 · A p.377, §11.2",
      see: [{ id: "L-10-2-1", en: "what the lipids in that sheet actually are", cn: "这张片层里的脂类到底是些什么" }]
    },
    {
      link_en: "how loose that sheet is, is the one property a cell continuously tunes",
      link_cn: "这张片层有多松，是细胞一直在调的那个性质",
      en: "Fluidity is a spectrum with two named ends. In the liquid-ordered state lipids sit packed in a regular geometry and barely move; in the liquid-disordered state their chains rotate freely and diffuse sideways. A real membrane sits between the two, and what changes between the ends is how much motion each lipid is allowed, not the overall shape of the sheet. **A higher proportion of saturated fatty acids, longer chains, and more cholesterol each lower fluidity, so a cell tunes its own membrane by choosing what to build into it.**",
      cn: "流动性 (fluidity) 是一个有两个端点的谱系：在液态有序 (liquid-ordered) 态里，脂类以规则的几何方式紧密堆着、几乎不动；在液态无序 (liquid-disordered) 态里，它们的链自由转动、并在平面内侧向扩散。真实的膜落在两者之间，而在这个谱系上变化的是每个脂类被允许的运动量，不是片层的整体形状。**饱和脂肪酸比例越高、链越长、胆固醇越多，流动性就越低 —— 所以细胞靠「往膜里装什么」来调自己的膜。**",
      src: "B §8.5.2, p.198 · A p.377, figure 11-17"
    },
    {
      link_en: "and one of those three ingredients does not push in a single direction",
      link_cn: "而上面三样里有一样，并不朝单一方向使劲",
      en: "**Cholesterol orders unsaturated phospholipids by filling the gaps their kinks leave open, and it keeps sphingolipids fluid, whose long saturated chains would otherwise set into a gel.** One molecule therefore buffers a membrane from both ends of the spectrum at once, which is what makes cholesterol content a control knob rather than one more ingredient in a list.",
      cn: "**胆固醇让不饱和磷脂变得有序 —— 它用刚性的四并环填进那些弯折留下的空隙；同时它又让鞘脂保持流动 —— 鞘脂那些又长又饱和的链本来会凝成胶状。**于是同一个分子同时从谱系的两端把膜缓冲住，这正是胆固醇含量成为一个调节旋钮、而不只是清单上又一样配料的原因。",
      src: "A p.377"
    },
    {
      link_en: "a lipid inside that sheet can make two moves, and they cost wildly different amounts",
      link_cn: "片层里的一个脂类能做两种运动，而两者的代价差得极远",
      en: "**Sliding sideways within its own leaflet is lateral diffusion; crossing to the other leaflet is transbilayer movement, also called flip-flop, and the two differ in rate by an enormous factor.** Everything a cell can make the two leaflets do differently follows from that one difference, so the next steps are what each move costs and what the cell buys with it.",
      cn: "**在自己那一层里侧向滑动，叫侧向扩散 (lateral diffusion)；跨到另一层去，叫跨膜运动 (transbilayer movement)，也就是翻转 (flip-flop) —— 两者的速率差着一个极大的倍数。**细胞能让两个小叶做出的一切差别，都由这一个差别推出来；所以接下来说的是每种运动要花多少钱、细胞又用它买到了什么。",
      src: "A pp.377–379"
    },
    {
      link_en: "the cheap move is measured rather than assumed",
      link_cn: "便宜的那种运动是被测出来的，不是假定的",
      en: "Lateral diffusion is measured by FRAP — fluorescence recovery after photobleaching. Membrane lipids are tagged with a fluorescent probe, an intense laser bleaches one small patch of the surface so that patch stops glowing, and then the patch is simply watched: unbleached lipids diffuse in from around it and bleached ones diffuse out, and how fast the glow comes back is the diffusion rate. **Some membrane lipids move at up to 1 micrometre per second, fast enough to cross a whole eukaryotic cell in a few seconds.**",
      cn: "侧向扩散是用 FRAP 测的 —— 光漂白后荧光恢复 (fluorescence recovery after photobleaching)。给膜脂接上荧光探针，用强激光把表面一小块漂白、使它不再发光，然后就只是盯着这块看：没被漂白的脂类从周围扩散进来，被漂白的扩散出去，而光恢复得多快，就是扩散速率。**有些膜脂的移动速度可达每秒 1 微米，快到能在几秒内穿过整个真核细胞；同样的实验用在荧光标记的蛋白上，测出的就是蛋白的侧向流动性。**",
      src: "A p.379, figure 11-19"
    },
    {
      recall_en: "the sideways move of one step up, now measured a second way that contradicts it",
      recall_cn: "上一步那种侧向运动，换第二种方法去测，结果和它相抵触",
      en: "Single-particle tracking follows one labelled molecule at a time, and it shows a lipid diffusing rapidly inside a small region and only occasionally hopping into the next one, as though corralled by a fence it can jump but usually does not. **The fence is protein: in the erythrocyte, glycophorin and the chloride-bicarbonate exchanger are tethered through a linking protein, ankyrin, to spectrin, a filamentous protein of the cytoskeleton.** Some membrane proteins stop moving almost entirely — acetylcholine receptors sit in dense, nearly crystalline patches at a neuronal synapse — so lateral movement is real everywhere and uniform nowhere.",
      cn: "单颗粒追踪 (single-particle tracking) 一次只跟一个被标记的分子，它看到的是：脂类在一小片区域内快速扩散，只是偶尔跳进相邻的一片，像被一圈能跳过、但通常不跳的篱笆圈着。**篱笆是蛋白做的：在红细胞里，血型糖蛋白 (glycophorin) 和氯－碳酸氢根交换体都通过连接蛋白锚蛋白 (ankyrin)，拴在细胞骨架的丝状蛋白血影蛋白 (spectrin) 上。**有些膜蛋白干脆几乎不动了 —— 乙酰胆碱受体在神经元突触处排成致密的、近乎晶体的斑块 —— 所以侧向运动到处都真实存在，却处处不均一。",
      src: "A pp.379–380, figure 11-21"
    },
    {
      link_en: "now the expensive move, and what its expense buys",
      link_cn: "接下来是贵的那种运动，以及这份贵换来了什么",
      en: "Flip-flop is rare because it means dragging a polar or charged head group out of the water and through the oily core of the bilayer, which is a large positive free-energy change, so at body temperature it happens very slowly if it happens at all. **The slowness of flip-flop maintains the asymmetry of lipid composition between the two leaflets — cerebrosides and gangliosides sit in the outer one — and maintains it for free, by nothing crossing.** How pronounced the asymmetry is varies with the type of membrane, with its function, and even with its age.",
      cn: "翻转之所以罕见，是因为它意味着把一个极性或带电的头基从水里拽出来、拖过双层中间那层油，这是一个很大的正自由能变化 —— 所以在体温下，它就算发生也极慢。**正是这份慢，维持着两个小叶之间脂类组成的不对称性（asymmetry）—— 脑苷脂和神经节苷脂都待在外层 —— 而且维持它是免费的：靠没有东西跨过去。**不对称到什么程度，随膜的种类、随它的功能、甚至随它的「年龄」而变。",
      src: "B §8.5.2, p.198 · A pp.377–378"
    },
    {
      link_en: "some processes need the crossing anyway, so a cell buys a catalyst for it",
      link_cn: "有些过程偏偏需要跨过去，于是细胞花钱雇一个催化剂",
      en: "New membrane is built lopsidedly in the endoplasmic reticulum: glycerophospholipids are made on the face towards the cytosol and sphingolipids are made or modified on the face towards the interior, so nearly every lipid has to reach the side it was not built on. **Three proteins catalyse the crossing: a flippase moves aminophospholipids inward at one ATP per lipid, a floppase moves lipids outward, and a scramblase moves any phospholipid either way for free.** Flippases are built like the ion pumps of the transport chain and floppases belong to the ABC transporter family; scramblase activity rises sharply when a cell is activated, injured or dying.",
      cn: "新膜是在内质网里偏着造出来的：甘油磷脂在朝向胞质的一面合成，鞘脂在朝向腔内的一面合成或修饰，于是几乎每个脂类都得跑到自己不是在那儿造出来的那一侧去。**催化这次跨越的有三种蛋白：翻转酶 (flippase) 把氨基磷脂往内层搬，每搬一个约耗一个 ATP；外翻酶 (floppase) 把脂类往外层搬；乱翻酶 (scramblase) 则让任何磷脂两个方向都能走，而且完全免费。**翻转酶的结构和转运那条链里的离子泵是一路的，外翻酶属于 ABC 转运蛋白家族；乱翻酶的活性在细胞被激活、受损或濒死时急剧上升。",
      src: "A pp.377–378"
    },
    {
      recall_en: "the leaflet asymmetry from two steps up, now with a life at stake",
      recall_cn: "两步之前那个小叶不对称，现在关乎一条命",
      en: "Phosphatidylserine is held on the cytoplasmic leaflet by flippases at all times, facing inward. **Phosphatidylserine appearing on the outer surface is itself the death signal: it triggers apoptosis and marks the cell to be swallowed by a macrophage.** A macrophage carries phosphatidylserine receptors on its own surface, so the asymmetry is not a structural curiosity: while the lipid stays inside, the cell reads as alive; the moment it shows outside, the cell is flagged for removal.",
      cn: "磷脂酰丝氨酸始终被翻转酶按在胞质那一侧、朝内。**磷脂酰丝氨酸出现在外表面，这件事本身就是死亡信号：它触发凋亡，并把这个细胞标记成「该被巨噬细胞吞掉」。**巨噬细胞自己表面带着磷脂酰丝氨酸受体，所以这份不对称不是结构上的趣味：只要这个脂类还在里面，细胞读起来就是活的；它一露到外面，细胞就被挂上了清除的标签。",
      src: "A p.378"
    },
    {
      link_en: "up to three quarters of a membrane's mass is protein, held in two quite different ways",
      link_cn: "膜的质量里最多四分之三是蛋白，而它们被固定的方式有两种，很不一样",
      en: "A peripheral membrane protein sits on the surface and interacts only with the polar heads of the lipids — bound non-covalently, through the polar side chains of its own amino acids — so a relatively simple procedure releases it and it can be isolated as a pure protein. An integral membrane protein is embedded in the bilayer and held by hydrophobic interaction between its non-polar side chains and the fatty-acid tails; some anchor from one side only, others span the membrane completely. **A protein that touches only the heads can be washed off a membrane, and a protein sitting in the oily core cannot.**",
      cn: "外周膜蛋白 (peripheral membrane protein) 待在表面，只与脂类的极性头基相互作用，通过自身氨基酸的极性侧链以非共价方式结合 —— 所以用比较简单的手续就能把它释放下来，作为纯蛋白分离出去。整合膜蛋白 (integral membrane protein) 嵌在双层里，靠自身非极性侧链与脂肪酸尾巴之间的疏水相互作用被扣住；有的只从一侧锚进去，有的完全贯穿整张膜。**只碰到极性头基的蛋白，用比较简单的手续就能从膜上洗下来；坐在疏水核心里的蛋白洗不下来。**",
      src: "B §8.5.2, p.199"
    },
    {
      link_en: "and every one of those components is in motion",
      link_cn: "而上面每一个组分都在运动",
      en: "The fluid mosaic model is the name for that constant motion. A membrane protein rotates about its own axis and moves laterally within the plane of the membrane, and after moving it can undergo a conformational change, which often signals a further conformational change in an immediate neighbour and is in that sense a regulatory factor of its own. **The flip-flop that lipids manage has never been found for a protein, so a protein's orientation across the membrane is permanent.**",
      cn: "流体镶嵌模型 (fluid mosaic model) 就是给这种持续运动起的名字。膜蛋白绕自身的轴旋转，也在膜平面内侧向移动；移动之后它可以发生构象变化，而这种变化常常又成为紧邻的另一个蛋白发生构象变化的信号 —— 在这个意义上它本身就是一种调节因素。**脂类做得到的那种翻转，在膜蛋白身上从来没有被观察到，所以一个蛋白跨膜的朝向一旦定下来就是永久的。**",
      src: "B §8.5.2, p.199"
    },
    {
      link_en: "sorted by what they are for rather than by how they are held",
      link_cn: "换成按「干什么用」来分，而不是按「怎么被固定」",
      en: "Membrane proteins, integral and peripheral alike, divide by role into structural and dynamic ones, and the boundary between the two is not sharp. A structural protein maintains the structure and the mutual interactions of a membrane's components: it is often elongated and fibrous, lies on the hydrophilic surface, and works as a kind of anchoring rope. **Dynamic proteins come in three kinds: transport proteins, catalytic proteins, and receptor proteins that bind a hormone, a toxin or a transmitter on the outer face.**",
      cn: "膜蛋白 —— 无论整合的还是外周的 —— 按作用分成结构性的和动态性的两类，而两者之间的界线并不清晰。结构蛋白维持膜各组分的结构与相互作用：它常常细长、呈纤维状，躺在亲水表面上，起一种锚定绳索的作用。**动态蛋白有三种：转运蛋白、催化蛋白，以及在膜外侧结合激素、毒素或递质的受体蛋白。**受体结合之后给出的信号，会引起膜内或膜所围空间里的生化变化。",
      src: "B §8.5.2, p.200",
      see: [{ id: "8-5-3-1", en: "what the transport ones actually do", cn: "其中转运那一类到底在做什么" }]
    },
    {
      link_en: "back inside one leaflet, where the lipids are not spread evenly either",
      link_cn: "回到单个小叶内部 —— 那里的脂类同样不是均匀铺开的",
      en: "Glycosphingolipids carry long saturated acyl chains that stack tightly against cholesterol's rigid ring system, so the two cluster together into patches called membrane rafts, largely shutting out the shorter and often kinked chains around them. A raft is therefore slightly thicker and more ordered than its surroundings, which sorts proteins by the length of their membrane-spanning helix: 19 to 20 residues is too short to reach across a raft and is excluded, 24 to 25 residues is fully stabilised inside and is drawn in. **A raft is about 50 nanometres across, holds a few thousand sphingolipids and 10 to 50 proteins, and rafts together can cover half the cell surface.**",
      cn: "糖鞘脂带着又长又饱和的酰基链，能和胆固醇的刚性环系统紧紧叠在一起，于是两者聚成一小片一小片、叫作膜筏 (membrane raft) 的区域，把周围那些更短、常常带弯折的链基本排除在外。因此筏比周围略厚、也更有序，而这一点会按跨膜螺旋的长度给蛋白分类：19 到 20 个残基太短，够不着筏的厚度，被排除在外；24 到 25 个残基在里面能被完全稳定，反而被吸进去。**一片筏直径约 50 纳米，装着几千个鞘脂和 10 到 50 个蛋白，而所有筏加起来能覆盖细胞表面的一半。**把胆固醇抽走，筏就散了。",
      src: "A pp.380–381, figure 11-22"
    },
    {
      link_en: "one raft protein does more than gather things together",
      link_cn: "有一种筏蛋白做的事不止是「把东西聚起来」",
      en: "Caveolin is a raft protein with a hairpin-shaped hydrophobic domain hooked into the cytoplasmic leaflet and held there further by three palmitoyl groups. **Caveolin dimers crowding into one cholesterol-rich raft force the bilayer to curve inward into a small pit called a caveola, and removing the caveolin flattens the pit out again.** What that buys: a cell releases stored surface area on demand and swells under osmotic or mechanical stress without the bilayer itself having to stretch.",
      cn: "小凹蛋白 (caveolin) 是一种筏蛋白，带着一个发夹形的疏水结构域钩进胞质那一侧的小叶，再由三个棕榈酰基进一步固定。**足够多的小凹蛋白二聚体挤进同一片富含胆固醇的筏里，就迫使双层向内弯成一个小坑，叫小凹 (caveola)；而把小凹蛋白撤掉，这个坑又会重新摊平。**这换来的是：细胞可以按需放出储备的表面积，在渗透压或机械应力下胀开，而双层本身根本不必被拉伸。",
      src: "A pp.381–382, figure 11-23"
    },
    {
      recall_en: "caveolin bent the bilayer with a crowd of proteins; here are two other routes to the same bend",
      recall_cn: "小凹蛋白是靠一群蛋白把双层压弯的；下面是通向同一个弯折的另外两条路",
      en: "**Curvature has several independent causes, and collecting them is worth the trouble, because curvature is the first step towards fusion.** Cardiolipin carries four acyl chains under one small head group, so it is cone-shaped and acts as a wedge that contracts one leaflet against the other — in E. coli it collects at the two poles of the rod-shaped cell, exactly where curvature is sharpest. BAR-domain proteins assemble into crescent-shaped dimers whose positively charged concave face grips the negatively charged lipids PIP2 and PIP3 and holds the bilayer to that crescent; some also drive an amphipathic helix into one leaflet, physically expanding it against the other. Septins, a family of GTP-binding proteins, use the same helix trick during cell division, exocytosis, phagocytosis and apoptosis.",
      cn: "**弯曲有好几个彼此独立的成因，值得把它们收在一起 —— 因为弯曲是走向融合的第一步。**心磷脂在一个小小的头基下面挂着四条酰基链，所以是锥形的，像一个楔子，把一个小叶相对另一个收紧 —— 在大肠杆菌里它明显聚集在杆状细胞的两极，正是弯得最厉害的地方。BAR 结构域蛋白组装成新月形的二聚体，用带正电的凹面抓住带负电的脂类 PIP2 和 PIP3，把双层贴在这个新月上；有些还往一个小叶里插进一段两亲性螺旋，从物理上把那一层相对另一层撑大。隔膜蛋白 (septin) 是一类结合 GTP 的蛋白，在细胞分裂、胞吐、吞噬和凋亡时用的是同一个螺旋花招。",
      src: "A p.382, figures 11-24 and 11-25"
    },
    {
      link_en: "and here is what all that bending is in aid of",
      link_cn: "而这一切弯曲，是为了下面这件事",
      en: "Membrane fusion is two continuous bilayers becoming one without either of them ever leaking, and it has five requirements: the two membranes must recognise each other; their surfaces must come close enough to displace the water bound to the polar head groups; their outer leaflets must merge first; the two bilayers must then merge completely; and where fusion is regulated, as it is in secretion, the whole sequence must wait for the right signal. **The outer leaflets of the two membranes merge first, a halfway state called hemifusion, and only then do the two bilayers merge completely.**",
      cn: "膜融合是两张连续的双层合成一张、而两张都始终没有漏 —— 它有五个要求：两张膜必须彼此识别；两个表面必须靠得足够近，把结合在极性头基上的水挤开；两者的外层小叶必须先合并；两个双层随后必须完全合并；而在受调控的融合里（比如分泌），整个次序必须等到正确的信号才启动。**两张膜的外层小叶先合并，这个中途状态叫半融合 (hemifusion)，之后两个双层才完全合并。**",
      src: "A pp.382–384, figure 11-26"
    },
    {
      link_en: "one protein family satisfies all five, and a toxin shows how precisely",
      link_cn: "有一个蛋白家族把这五条全做到了，而一种毒素证明了它有多精确",
      en: "**A v-SNARE on the vesicle and a t-SNARE on the target membrane meet end to end and zip up into a bundle of four long alpha helices, one of the four contributed by a third protein, SNAP25.** The zipping hauls the two membranes into contact, through hemifusion and on into full fusion, which is exactly how a vesicle loaded with neurotransmitter fuses with a neuron's plasma membrane at a synapse. Botulinum toxin is a bacterial protease that cleaves SNARE proteins and SNAP25: the zipper never closes, no transmitter is released, and the muscle is paralysed — which is what Botox does in very small doses. Tetanus toxin cleaves the same family and locks muscle rigid instead.",
      cn: "**囊泡上的 v-SNARE 与靶膜上的 t-SNARE 端对端相遇，拉链一样合成一束四条长 α 螺旋，其中一条由第三个蛋白 SNAP25 提供。**这次「拉拉链」在物理上把两张膜拽到一起，经过半融合直到完全融合 —— 装满神经递质的囊泡在突触处与神经元质膜融合，走的正是这条路。肉毒毒素是一种细菌蛋白酶，切断 SNARE 蛋白和 SNAP25：拉链永远合不上，递质放不出来，肌肉就麻痹了 —— 小剂量使用时，这就是 Botox。破伤风毒素切的是同一个家族，结果反而是肌肉僵直。",
      src: "A pp.382–384"
    },
    {
      recall_en: "the rafts of five steps up, now doing something instead of merely being something",
      recall_cn: "五步之前那些筏，现在在做事，而不只是在那儿存在着",
      en: "Attaching a phosphate to a tyrosine on a protein creates a small, distinctive, negatively charged patch that was not there before, and an SH2 domain is a protein module about a hundred residues long whose whole function is to bind such a patch. A protein carrying several binding modules at once is multivalent and can serve as an adaptor, gripping two proteins that have no affinity for each other at all and holding them close together. **A membrane raft raises the local concentration of the partners that have to meet, so proteins inside one collide far more often than being spread over a whole cell surface would allow.**",
      cn: "在蛋白的一个酪氨酸上挂一个磷酸，就造出一小块原先没有的、独特的带负电区域；而 SH2 结构域是一段约一百个残基长的蛋白模块，它的全部功能就是结合这样一块区域。同时带着好几个这种结合模块的蛋白是多价的 (multivalent)，可以充当衔接蛋白 (adaptor)：抓住两个彼此毫无亲和力的蛋白，把它们并排按在一起。**膜筏抬高了那些必须相遇的搭档的局部浓度，所以筏内的蛋白相撞的次数，远多于它们摊在整个细胞表面时所能有的次数。**",
      src: "A pp.439–442"
    },
    {
      link_en: "and the platform they assemble on need not be a protein at all",
      link_cn: "而它们拼装所依托的平台，根本不必是蛋白",
      en: "PI3K, switched on by IRS-1 — the protein the insulin receptor phosphorylates — converts the membrane lipid PIP2 into PIP3, and PIP3 then becomes a nucleation point where further branches of insulin signalling gather. **A docking site made in the membrane itself sits exactly where the receptor is, so a whole branch of a pathway is switched on by modifying one lipid rather than a protein.** Lehninger sums the chemistry up as a language: protein kinases are the writers, domains such as SH2 are the readers, and phosphatases are the erasers.",
      cn: "PI3K 被 IRS-1（胰岛素受体所磷酸化的那个蛋白）打开后，把膜脂 PIP2 变成 PIP3，而 PIP3 随即成为一个成核点，胰岛素信号后续的分支就在那里聚集。**一个直接造在膜里的对接位点，恰好就在受体所在的位置上 —— 于是整整一条支路是靠修饰一个脂类、而不是修饰一个蛋白被打开的。**Lehninger 把这套化学总结成一门语言：蛋白激酶是书写者，SH2 这类结构域是阅读者，磷酸酶是橡皮擦。",
      src: "A pp.439–442"
    }
  ],
  terms: [
    { en: "cell membrane", cn: "细胞膜",
      def_en: "The structure separating a cell's internal space from its external environment. In a eukaryote the same kind of structure goes on to separate one internal space from another, so every compartment named in this chain has a boundary of this sort.",
      def_cn: "把细胞的内部空间与外部环境隔开的那个结构。在真核细胞里，同一类结构还继续把一个内部空间与另一个内部空间隔开，所以这条主线里点到的每一个区室，都有一道这样的边界。" },
    { en: "bilayer / leaflet", cn: "双层／小叶",
      def_en: "Two lipid monolayers laid tail to tail, 3.5 to 4.0 nanometres thick, with a markedly non-polar centre and two polar surfaces. Each monolayer is a leaflet. Everything holding the structure together is non-covalent.",
      def_cn: "两个脂类单层尾对尾排在一起，厚 3.5 到 4.0 纳米，中央高度非极性、两个表面极性。每个单层叫一个小叶。维系这个结构的一切都是非共价的。" },
    { en: "protein-to-lipid weight ratio", cn: "蛋白质与脂类的重量比",
      def_en: "Runs from 1:4 to 3:1 depending on the origin and function of a membrane, which is why there is no single composition to memorise. Carbohydrate is always present as well, 0.5 to 10 percent of the mass, only ever as a glycoprotein or a glycolipid.",
      def_cn: "随膜的来源和功能从 1:4 变到 3:1 —— 所以没有一个「膜的组成」可背。糖类也总是在场，占质量的 0.5% 到 10%，而且只以糖蛋白或糖脂的形式存在。" },
    { en: "fluidity", cn: "流动性",
      def_en: "A spectrum between a liquid-ordered state, where lipids are packed in regular geometry and barely move, and a liquid-disordered state, where chains rotate freely and diffuse sideways. More saturation, longer chains and more cholesterol all push towards the ordered end.",
      def_cn: "介于液态有序（脂类以规则几何堆积、几乎不动）与液态无序（链自由转动并侧向扩散）之间的一个谱系。饱和度更高、链更长、胆固醇更多，都把膜推向有序那一端。" },
    { en: "lateral diffusion", cn: "侧向扩散",
      def_en: "Sideways movement within one leaflet, and it is nearly free. Measured by FRAP: bleach a fluorescent patch and time how fast the glow returns. Up to 1 micrometre per second, though single-particle tracking shows the lipids are corralled by protein fences tied to the cytoskeleton.",
      def_cn: "在同一个小叶内的侧向移动，几乎不要钱。用 FRAP 测：把一小块荧光漂白，再计时光恢复得多快。可达每秒 1 微米 —— 不过单颗粒追踪显示，脂类被拴在细胞骨架上的蛋白篱笆圈着。" },
    { en: "flip-flop / transbilayer movement", cn: "翻转／跨膜运动",
      def_en: "Crossing from one leaflet to the other. Rare, because a polar or charged head group has to be dragged through the oily core, a large positive free-energy change. Its rarity is what maintains leaflet asymmetry for free, and no protein has ever been seen to do it.",
      def_cn: "从一个小叶跨到另一个。很罕见，因为极性或带电的头基必须被拖过中间那层油，是一个很大的正自由能变化。正因为它罕见，小叶的不对称性才免费得以维持；而蛋白从未被观察到这样做。" },
    { en: "flippase / floppase / scramblase", cn: "翻转酶／外翻酶／乱翻酶",
      def_en: "The three catalysts that move a lipid across a bilayer. Flippase carries aminophospholipids inward at about one ATP per lipid; floppase carries lipids outward and belongs to the ABC transporter family; scramblase moves any phospholipid either way and needs no ATP, and its activity rises sharply on activation, injury or apoptosis.",
      def_cn: "把脂类搬过双层的三种催化剂。翻转酶把氨基磷脂往内层搬，每个约一个 ATP；外翻酶往外层搬，属于 ABC 转运蛋白家族；乱翻酶两个方向都行、不需要 ATP，其活性在细胞激活、受损或凋亡时急剧上升。" },
    { en: "phosphatidylserine exposure", cn: "磷脂酰丝氨酸外露",
      def_en: "Normally kept on the cytoplasmic leaflet at all times. Appearing on the outer surface triggers apoptosis and marks the cell for engulfment by a macrophage carrying receptors for that lipid. Leaflet asymmetry is therefore also a message read by another cell.",
      def_cn: "正常情况下始终被按在胞质那一侧。一旦出现在外表面，就触发凋亡，并把细胞标记为该被带有该脂类受体的巨噬细胞吞掉。所以小叶不对称同时也是一条被别的细胞读取的消息。" },
    { en: "peripheral / integral membrane protein", cn: "外周膜蛋白／整合膜蛋白",
      def_en: "Peripheral proteins touch only the polar heads, bound non-covalently through polar side chains, and are released by relatively simple means. Integral proteins sit in the hydrophobic core, held by their non-polar side chains; some anchor from one side, others span the membrane.",
      def_cn: "外周蛋白只接触极性头基，通过极性侧链非共价结合，用比较简单的办法就能释放。整合蛋白坐在疏水核心里，靠非极性侧链固定；有的只从一侧锚入，有的贯穿整张膜。" },
    { en: "fluid mosaic model", cn: "流体镶嵌模型",
      def_en: "The name for the constant motion of a membrane's components. A protein rotates and moves laterally within the plane, and the conformational change that follows can signal a further change in a neighbour. No protein has ever been found to flip-flop, so its orientation across the membrane is permanent.",
      def_cn: "给膜各组分持续运动起的名字。蛋白会旋转、也在平面内侧向移动，随之而来的构象变化又能成为邻居发生变化的信号。蛋白从未被发现会翻转，所以它跨膜的朝向是永久的。" },
    { en: "structural / dynamic membrane proteins", cn: "结构膜蛋白／动态膜蛋白",
      def_en: "The division by role, with no sharp boundary. Structural ones are often fibrous, lie on the hydrophilic surface and act as anchoring ropes. Dynamic ones come in three kinds: transport, catalytic, and receptor proteins that bind a hormone, toxin or transmitter on the outer face.",
      def_cn: "按作用做的划分，界线并不清晰。结构性的常呈纤维状、躺在亲水表面、起锚定绳索的作用。动态性的有三种：转运蛋白、催化蛋白，以及在外侧结合激素、毒素或递质的受体蛋白。" },
    { en: "membrane raft", cn: "膜筏",
      def_en: "A patch where glycosphingolipids with long saturated chains pack against cholesterol, slightly thicker and more ordered than its surroundings. It admits transmembrane helices of 24 to 25 residues and excludes those of 19 to 20. About 50 nanometres across; rafts can cover half the cell surface, and their job is to raise the local concentration of signalling partners.",
      def_cn: "长饱和链的糖鞘脂与胆固醇堆在一起形成的一小片区域，比周围略厚、更有序。它接纳 24 到 25 个残基的跨膜螺旋，排斥 19 到 20 个残基的。直径约 50 纳米；所有筏可覆盖细胞表面的一半，其作用是抬高信号搭档的局部浓度。" },
    { en: "caveolin / caveola", cn: "小凹蛋白／小凹",
      def_en: "Caveolin is a raft protein with a hairpin hydrophobic domain and three palmitoyl anchors. Enough of its dimers in one raft bend the bilayer inward into a pit, the caveola; removing caveolin flattens it, releasing stored surface area so a cell can swell without the bilayer stretching.",
      def_cn: "小凹蛋白是一种筏蛋白，带发夹形疏水结构域和三个棕榈酰锚。足够多的二聚体聚在一片筏里，就把双层向内压成一个坑 —— 小凹；撤走小凹蛋白，坑摊平，放出储备的表面积，于是细胞能胀大而双层不必被拉伸。" },
    { en: "membrane curvature", cn: "膜弯曲",
      def_en: "Three independent causes, and it matters because curvature is the first step towards fusion. A cone-shaped lipid such as cardiolipin acts as a wedge; BAR-domain dimers grip PIP2 and PIP3 with a positively charged crescent; an amphipathic helix driven into one leaflet expands it against the other.",
      def_cn: "三个彼此独立的成因；它要紧，是因为弯曲是走向融合的第一步。心磷脂那样的锥形脂类当楔子；BAR 结构域二聚体用带正电的新月面抓住 PIP2 和 PIP3；插进一个小叶的两亲性螺旋把那一层相对另一层撑大。" },
    { en: "hemifusion", cn: "半融合",
      def_en: "The halfway state in membrane fusion, in which the outer leaflets of the two membranes have merged and the two bilayers have not. One of the five things a fusion protein must accomplish, along with recognition, close approach, complete merger and, where fusion is regulated, waiting for a signal.",
      def_cn: "膜融合过程中的中途状态：两张膜的外层小叶已经合并，两个双层还没有。它是融合蛋白必须完成的五件事之一，另外四件是识别、贴近、完全合并，以及在受调控的融合中等待信号。" },
    { en: "the SNARE zipper", cn: "SNARE 拉链",
      def_en: "A v-SNARE on a vesicle and a t-SNARE on the target membrane zip into a four-helix bundle, one helix from SNAP25, hauling the membranes together through hemifusion into full fusion. Botulinum toxin cleaves this complex and paralyses; tetanus toxin cleaves the same family and locks muscle rigid.",
      def_cn: "囊泡上的 v-SNARE 与靶膜上的 t-SNARE 合成一束四螺旋（其中一条来自 SNAP25），把两张膜拽到一起，经半融合直到完全融合。肉毒毒素切断这个复合体导致麻痹；破伤风毒素切同一家族，导致肌肉僵直。" },
    { en: "SH2 domain / adaptor", cn: "SH2 结构域／衔接蛋白",
      def_en: "Phosphorylating a tyrosine creates a small negatively charged patch; an SH2 domain of about a hundred residues binds it. A protein carrying several such modules is multivalent and holds together two proteins with no affinity for each other. Rafts do the same job physically, by raising local concentration.",
      def_cn: "磷酸化一个酪氨酸就造出一小块带负电的区域；约一百个残基的 SH2 结构域负责结合它。带着好几个这种模块的蛋白是多价的，能把两个彼此无亲和力的蛋白按在一起。膜筏用物理办法做同样的事：抬高局部浓度。" }
  ]
};

/* --------------------------------------------------------------- 膜转运 ---- */
window.BIOLITE_SPINE["key:membrane-transport"] = {
  assumed: [
    "cell", "water", "lipid", "protein", "membrane", "plasma membrane", "bilayer",
    "leaflet", "enzyme", "kinetics", "michaelis-menten", "substrate", "gradient",
    "concentration", "diffusion", "equilibrium", "free energy", "activation energy",
    "hydrophobic", "hydrophilic", "polar", "non-polar", "amphipathic", "helix",
    "residue", "aspartate", "phosphorylation", "conformational change", "domain",
    "subunit", "atp", "adp", "phosphate", "hydrolysis", "ion", "cation", "anion",
    "sodium", "potassium", "calcium", "chloride", "bicarbonate", "proton",
    "carbon dioxide", "carbonic anhydrase", "glucose", "sugar", "monosaccharide",
    "disaccharide", "amino acid", "peptide", "bile salt", "drug", "antibiotic",
    "hormone", "insulin", "vasopressin", "receptor", "ligand", "toxin", "vitamin",
    "erythrocyte", "hepatocyte", "kidney", "gut", "intestine", "muscle", "neuron",
    "axon", "synapse", "neurotransmitter", "acetylcholine", "brain", "placenta",
    "tumour", "urine", "blood", "cytosol", "cytoplasm", "mitochondrion", "lysosome",
    "endosome", "golgi apparatus", "vacuole", "vesicle", "secretory vesicle",
    "endoplasmic reticulum", "organelle", "compartment", "eukaryote", "bacteria",
    "fungus", "virus", "dna", "macromolecule", "granule", "gene", "genome",
    "mutation", "diabetes", "cystic fibrosis", "chemotherapy", "doxorubicin",
    "catalase", "turnover number", "millivolt", "membrane potential", "voltage",
    "electric current", "depolarisation", "cyclic peptide", "carbonyl", "hydroxyl",
    "stereospecificity", "cholesterol", "glycerophospholipid", "sphingolipid"
  ],
  nodeTitle_en: "Membrane transport",
  nodeTitle_cn: "膜转运",
  title_en: "A bilayer lets almost nothing polar through, so every solute that crosses has a named protein and a named energy source behind it",
  title_cn: "双层膜几乎不让任何极性物质通过，所以每一个能过去的溶质，背后都有一个有名字的蛋白和一份有名字的能量",
  steps: [
    {
      en: "Neither a fully impermeable nor a fully permeable membrane is found in nature: biological membranes are selectively permeable, which is to say semipermeable — some substances pass freely, others cannot pass at all. The reason a polar substance cannot is water. A dissolved ion or sugar sits inside a shell of water molecules held to it by attraction, and entering the oily core of a bilayer means shedding that shell first, an intermediate state so unfavourable that the energy hill in front of it is impassable on a biological timescale. **Essentially everything polar that crosses a membrane crosses through a protein, and about 2,000 human genes encode nothing else.**",
      cn: "自然界里既没有完全不通透的膜，也没有完全通透的膜：生物膜是选择性通透的，也就是半透的 (semipermeable) —— 有些物质自由通过，另一些根本过不去。极性物质过不去的原因是水：溶解的离子或糖被一层因吸引而附着的水分子壳裹着，要进入双层中间那层油，先得把这层水化壳脱掉，而这个中间态极不利，前面那道能垒在生物学的时间尺度上根本翻不过去。**凡是极性的东西要跨膜，基本都得穿过一个蛋白；人类约有 2,000 个基因编码的正是这类蛋白。**",
      src: "B §8.5.3, p.200 · A pp.385–386, figure 11-29"
    },
    {
      link_en: "so what does a protein do to a hill that high?",
      link_cn: "那么，蛋白对这么高的一道坡做了什么？",
      en: "A transport protein does not abolish the cost of stripping the water off — it replaces the lost water contacts with its own noncovalent contacts, so the solute is never left bare, and the hill it must climb is far lower. That is the same trick an enzyme plays on a chemical reaction, which is why transport can be described in the language of enzymes at all. **Four routes cross a membrane: simple diffusion, facilitated diffusion running down a gradient at no cost, active transport running up a gradient and having to be paid for, and ion channels.**",
      cn: "转运蛋白并没有取消「把水剥掉」的代价 —— 它用自己的非共价接触替代失去的水接触，让溶质从不裸露，于是要爬的坡低得多。这正是酶对一个化学反应所用的同一个花招，也正因如此，转运才能用酶的语言来描述。**跨膜有四条路：简单扩散；顺梯度、不花钱的易化扩散；逆梯度、必须付费的主动转运；以及离子通道。**主动转运又按「钱从哪儿来」再分：初级直接偶联一个放能化学反应，次级则靠让另一种溶质沿着先前建好的梯度回流来供能。",
      src: "A p.385, figure 11-27"
    },
    {
      link_en: "the cheapest route first, the one that needs no protein at all",
      link_cn: "先说最便宜的那条路 —— 根本不需要蛋白的那条",
      en: "Passive transport is a substance crossing a membrane by diffusion, from higher to lower concentration, with no energy spent, and it comes in two kinds, simple and facilitated. **Simple diffusion is a lipophilic substance dissolving straight into the membrane lipids and coming out the other side: no protein, no energy, nothing but solubility and a gradient.** Water and small molecules also cross through a micropore inside an integral protein and through transient defects in the bilayer — and a route that runs through a protein is facilitated diffusion by the standard definition, not simple diffusion, which is worth stating, since the three routes are sometimes listed together under one heading.",
      cn: "被动转运 (passive transport) 就是物质靠扩散跨膜、从高浓度走向低浓度、不花能量；它分两种：简单的和易化的。**简单扩散 (simple diffusion) 就是亲脂物质直接溶进膜脂、再从另一侧出来：不要蛋白、不要能量，只要溶解度和一个梯度。**水和小分子还会经由整合蛋白内部的微孔、以及双层上一时的缺陷通过 —— 而按通行定义，走蛋白孔道的那条路属于易化扩散、不属于简单扩散；这一点值得说明，因为这三条路有时被并在同一个标题下列出。",
      src: "B §8.5.3, p.200, Obr. 8.3 · A p.385"
    },
    {
      link_en: "before any of that, what counts as downhill for an ion",
      link_cn: "在这一切之前：对一个离子来说，什么才算「顺坡」",
      en: "An uncharged solute such as glucose is driven by one thing only: the difference in its concentration between the two sides. An ion is driven by two things at once, because it carries charge — that same concentration difference, and the membrane potential Vm, the voltage across the membrane, measured in millivolts and negative inside in most animal cells. Vm opposes any movement that would make it larger and drives any movement that would reduce it. **A concentration difference and a membrane potential together are the electrochemical gradient, and it alone decides whether an ion runs downhill or is being pushed uphill.**",
      cn: "像葡萄糖这样不带电的溶质，只被一件事推动：它在两侧的浓度差。离子则同时被两件事推动，因为它带电荷 —— 一是同样的浓度差，二是膜电位 Vm，即跨膜的电压，以毫伏计，在多数动物细胞里内侧为负。Vm 阻碍任何会让它变大的移动，推动任何会让它变小的移动。**浓度差与膜电位合起来就是电化学梯度 (electrochemical gradient)，只有它才决定一个离子是在顺坡跑、还是正被往上推。**",
      src: "A pp.385–386, figure 11-28"
    },
    {
      link_en: "now the second kind of passive transport, the one that does need a protein",
      link_cn: "接着是被动转运的第二种 —— 确实需要蛋白的那种",
      en: "Facilitated diffusion requires a carrier molecule, usually an integral membrane protein with a specific binding capacity for the substance it moves: the substance binds the carrier, the carrier changes so that the substance appears on the other side of the membrane, the substance is released there, and the carrier returns to its original state. **Facilitated diffusion is specific, saturable and inhibitable — the carrier behaves like an enzyme, and the equations of enzyme kinetics describe it.**",
      cn: "易化扩散 (facilitated diffusion) 需要一个载体分子，通常是整合膜蛋白，它对所转运的物质有专一的结合能力：物质结合到载体上，载体发生变化使该物质出现在膜的另一侧，物质在那里被释放，载体再回到原来的状态。**易化扩散具有特异性、可饱和性和可抑制性 —— 载体的行为像一个酶，酶动力学方程就能描述它。**",
      src: "B §8.5.3, p.201, Obr. 8.4"
    },
    {
      link_en: "and that anonymous carrier has a name, a number, and a tissue",
      link_cn: "而那个无名的载体，有名字、有数字、也有它待的组织",
      en: "GLUT1 is the transporter that carries glucose into the erythrocyte, about 50,000 times faster than glucose crosses unaided and at no cost at all, since the sugar is only moving down its own gradient. Its initial rate fits an equation of the Michaelis-Menten form in which Kt, the transport constant, plays the part Km plays for an enzyme: the outside concentration at which the transporter runs at half its maximum. **The Kt of GLUT1 for D-glucose is about 6 mM, against a blood glucose of 4.5 to 5 mM, so the transporter normally works at roughly half speed, poised to go faster or slower.** Its stereospecificity is sharp: D-mannose, which differs by the position of a single hydroxyl, has a Kt of 20 mM, D-galactose 30 mM, and the mirror-image L-glucose over 3,000 mM.",
      cn: "GLUT1 是把葡萄糖运进红细胞的那个转运体，比葡萄糖自己穿膜快约 5 万倍，而且完全不花钱 —— 因为糖只是在顺自己的梯度走。它的初速率符合米氏方程形式的公式，其中转运常数 Kt 扮演酶里 Km 的角色：转运体跑到最大速率一半时的外侧浓度。**GLUT1 对 D-葡萄糖的 Kt 约 6 mM，而血糖是 4.5 到 5 mM，所以它平时就在半速上工作，随时可以加快或放慢。**它的立体专一性很锐利：只差一个羟基位置的 D-甘露糖 Kt 是 20 mM，D-半乳糖 30 mM，而镜像的 L-葡萄糖超过 3,000 mM。",
      src: "A p.387, figure 11-31"
    },
    {
      recall_en: "the carrier of the step above, seen as a shape instead of as a rate",
      recall_cn: "上一步那个载体，这次看的是它的形状，而不是它的速率",
      en: "GLUT1 is an integral protein with 12 membrane-spanning helices, several of them amphipathic: polar residues on one face line a hydrophilic channel down the middle, non-polar residues on the other face touch the membrane lipids. **Transport cycles it between T1, with the glucose site open only to the outside, and T2, with that site open only to the inside, and no ATP is spent anywhere in the cycle.** Humans have 12 GLUT proteins with different tissues and different Kt values; GLUT4, in muscle, fat and heart, is the one insulin controls — between meals about 90 percent of it sits parked in vesicles inside the cell, and insulin makes those vesicles fuse with the plasma membrane within minutes, raising glucose uptake fifteenfold or more.",
      cn: "GLUT1 是一个整合膜蛋白，有 12 条跨膜螺旋，其中好几条是两亲性的：一面的极性残基排出中央的亲水孔道，另一面的非极性残基贴着膜脂。**转运让它在 T1（葡萄糖位点只朝外开）与 T2（该位点只朝内开）之间循环，而整个循环里没有任何一处花掉 ATP。**人有 12 个 GLUT 蛋白，组织分布与 Kt 值各不相同；肌肉、脂肪和心脏里的 GLUT4 是受胰岛素控制的那一个 —— 两餐之间约 90% 的它停在细胞内的囊泡里，胰岛素让这些囊泡在几分钟内与质膜融合，把葡萄糖摄取抬高十五倍以上。无法动员 GLUT4，正是糖耐量试验查出来的东西。",
      src: "A pp.388–390, figures 11-32 and 11-33, table 11-1, box 11-1"
    },
    {
      link_en: "one phrase, carrier protein, covers two machines that are not alike",
      link_cn: "「载体蛋白」这一个说法，罩着两台并不相像的机器",
      en: "A channel and a transporter differ in three measurable ways. Rate: a channel passes 10⁷ to 10⁸ ions per second, close to the physical limit set by diffusion, while a transporter is far slower, the Na⁺K⁺ ATPase managing about 100 per second. Saturability: a transporter has a maximum rate and saturates like an enzyme, a channel does not. **Gating: a channel has one gate and is open or shut, whereas a transporter has two gates on opposite sides that are never open at once, so it can never let its substrate leak straight through.** A single channel usually stays open only milliseconds, so its activity is measured electrically rather than watched: patch-clamping seals the tip of a fine glass micropipette onto a scrap of membrane holding one or a few channels and records the picoampere current through it.",
      cn: "通道与载体有三个可测量的差别。速率：通道每秒通过 10⁷ 到 10⁸ 个离子，接近扩散设定的物理极限，而载体慢得多 —— Na⁺K⁺ ATP 酶大约每秒 100 个。可饱和性：载体像酶一样有最大速率、会饱和，通道不会。**门控：通道只有一个门，非开即关；而载体有两个门，分处膜的两侧，且绝不同时打开 —— 所以它永远不可能让底物直接漏过去。**单个通道通常只开几毫秒，所以它的活动不是「看」出来的，而是用电测的：膜片钳把细玻璃微吸管的尖端封在含一个或几个通道的一小片膜上，记录流过的皮安级电流。",
      src: "A pp.386–387, figure 11-30"
    },
    {
      link_en: "three words that count substrates and directions, and one protein that makes them concrete",
      link_cn: "三个只数「几种底物、朝哪个方向」的词，外加一个把它们坐实的蛋白",
      en: "Uniport carries one solute only, and GLUT1 is a uniporter; symport carries two solutes in the same direction; antiport carries two in opposite directions. None of the three says anything about whether energy is being spent. The worked antiport is the chloride-bicarbonate exchanger of the erythrocyte: carbon dioxide from the tissues enters the cell, carbonic anhydrase turns it into bicarbonate, and that bicarbonate has to get straight back out again to be carried to the lungs. **One bicarbonate goes out for one chloride in, so the exchange is electroneutral, and the coupling is obligatory: take the chloride away and bicarbonate transport stops completely.**",
      cn: "单向转运 (uniport) 只运一种溶质，GLUT1 就是一个；共转运 (symport) 把两种溶质往同一方向运；逆向转运 (antiport) 把两种往相反方向运。这三个词都不说明是否花了能量。做实的逆向转运例子是红细胞的氯－碳酸氢根交换体：组织来的二氧化碳进入细胞，碳酸酐酶把它变成碳酸氢根，而这个碳酸氢根必须马上再出去、被送到肺。**出去一个碳酸氢根就进来一个氯，所以这次交换是电中性的；而且这种偶联是强制的：把氯拿走，碳酸氢根的转运就彻底停住。**这个跨膜 14 次的二聚体整合蛋白，把碳酸氢根的转运速率提高了一百万倍以上。",
      src: "B §8.5.3, p.201 · A pp.390–391, figures 11-34 and 11-35"
    },
    {
      link_en: "everything so far ran downhill; the rest of this chain runs uphill",
      link_cn: "到这里为止全是顺坡；这条链剩下的部分都在爬坡",
      en: "Active transport requires an energy supply and always proceeds against the concentration gradient of the substance moved. For an uncharged solute the bill is RT ln(C₂/C₁): one mole against a tenfold difference at 25 °C costs 5.7 kJ/mol, and against a ten-thousandfold difference, 23 kJ/mol. **Moving an ion with no partner of opposite charge separates charge and builds up voltage, and transport that does this is called electrogenic, so a second term, ZFΔψ, is added to the bill.** Pumping Ca²⁺ from a cytosol at 10⁻⁷ M out to a fluid at 10⁻³ M, across a 50 mV inside-negative membrane at 37 °C, costs 33 kJ/mol — and both terms work against the cell here, since calcium is positive and the inside it is leaving is negative.",
      cn: "主动转运 (active transport) 需要供给能量，并且总是逆着被转运物质的浓度梯度进行。对不带电的溶质，账单是 RT ln(C₂/C₁)：25 °C 下逆十倍浓度差搬一摩尔要 5.7 kJ/mol，逆一万倍要 23 kJ/mol。**搬一个离子而没有反电荷的搭档同行，就会分离电荷、积起电压 —— 这样的转运被称为生电性 (electrogenic) 的，于是账单上要加第二项 ZFΔψ。**在 37 °C、跨膜电位 50 mV（内负）的条件下，把 Ca²⁺ 从 10⁻⁷ M 的胞质泵到 10⁻³ M 的细胞外液，要花 33 kJ/mol —— 这里两项都在跟细胞作对，因为钙带正电，而它要离开的那一侧是负的。",
      src: "B §8.5.3, p.201 · A pp.391–392, worked examples 11-1 and 11-2"
    },
    {
      link_en: "primary active transport is the kind that pays with ATP directly",
      link_cn: "初级主动转运，就是直接用 ATP 付账的那一种",
      en: "In primary active transport the energy comes straight from ATP and the cleavage of a macroergic bond, which is why such pumps are called ATPase pumps. P-type ATPases are a family of at least 70 human cation pumps, and the P stands for phosphorylation: a conserved aspartate on the pump is phosphorylated and then dephosphorylated once per transport cycle, and every member is blocked by vanadate, an ion shaped like the transition state of phosphate transfer. **SERCA begins in a shape with two high-affinity calcium sites facing the cytosol, and phosphorylating that aspartate flips it into a shape whose same two sites face the lumen with low affinity.** The calcium falls off on the far side, dephosphorylation resets the pump, and two calcium ions move per ATP hydrolysed.",
      cn: "在初级主动转运里，能量直接来自 ATP 与一个高能键的断裂，所以这类泵被叫作 ATP 酶泵。P 型 ATP 酶是一个至少 70 个成员的人类阳离子泵家族，P 代表磷酸化 (phosphorylation)：泵上一个保守的天冬氨酸在每个转运周期里先被磷酸化、再被去磷酸化；家族每个成员都被钒酸盐抑制，那是一个形状像磷酸转移过渡态的离子。**SERCA 起始于这样一个构象：两个高亲和力的钙位点朝向胞质；而把那个天冬氨酸磷酸化，就把它翻成另一个构象 —— 同样这两个位点改朝腔内，亲和力变低。**钙于是在另一侧脱落，去磷酸化让泵复位，每水解一个 ATP 搬两个钙离子。",
      src: "B §8.5.3, p.201 · A pp.392–394, figures 11-37 and 11-38"
    },
    {
      recall_en: "same family and same phosphorylated aspartate — this member sets the voltage of four steps up",
      recall_cn: "同一个家族、同一个被磷酸化的天冬氨酸 —— 这个成员定的正是四步之前那个电压",
      en: "**The Na⁺K⁺ ATPase is a P-type ATPase that moves two ions at once: per ATP hydrolysed it carries 3 Na⁺ out of the cell and 2 K⁺ in.** Three positive charges leave for every two that enter, so the pump is electrogenic, and it is directly responsible for the −50 to −70 mV resting membrane potential of most animal cells — the very Vm that every ion movement in this chain has to be reckoned against, and the voltage a neuron discharges when it fires. The price is enormous: about 25 percent of a resting human's entire energy budget goes through this one reaction.",
      cn: "**Na⁺K⁺ ATP 酶是一个 P 型 ATP 酶，一次搬两种离子：每水解一个 ATP，它把 3 个 Na⁺ 送出细胞、把 2 个 K⁺ 送进来。**每进两个正电荷就出去三个，所以这个泵是生电性的；多数动物细胞 −50 到 −70 mV 的静息膜电位正是它直接造成的 —— 也就是这条链里每一次离子移动都要拿来算账的那个 Vm，以及神经元放电时释放掉的那个电压。代价极其庞大：一个静息状态的人，整份能量预算里约 25% 都走这一个反应。",
      src: "A p.394, figure 11-39"
    },
    {
      link_en: "two more ATP-driven pumps, both moving protons, with opposite jobs",
      link_cn: "另外两类由 ATP 驱动的泵，搬的都是质子，干的活却相反",
      en: "V-type and F-type ATPases are both proton pumps built from two pieces: a membrane-embedded proton-channel domain, and a peripheral domain that handles the ATP. V-type ATPases acidify compartments — fungal and plant vacuoles to pH 3 to 6 against a cytosol at 7.5, and animal lysosomes, endosomes, the Golgi and secretory vesicles. **An F-type ATPase driven by ATP pumps protons uphill, and the very same machine driven backwards by a large enough proton gradient makes ATP instead, at which point it is called ATP synthase.** So a pump and a cell's main source of ATP are one object read in opposite directions.",
      cn: "V 型与 F 型 ATP 酶都是质子泵，都由两块拼成：一块嵌在膜里的质子通道结构域，一块处理 ATP 的外周结构域。V 型 ATP 酶负责把区室变酸 —— 真菌和植物的液泡降到 pH 3 到 6（胞质是 7.5），以及动物的溶酶体、内体、高尔基体和分泌囊泡。**F 型 ATP 酶被 ATP 驱动时把质子往高处泵；而同一台机器被足够大的质子梯度反着推时，改为合成 ATP —— 这时它就叫 ATP 合酶。**于是「泵」和「细胞主要的 ATP 来源」其实是同一个东西，只是读的方向相反。",
      src: "A pp.394–395, figure 11-40",
      see: [{ id: "L-19-2-1", en: "where that proton gradient is built, and what it is finally spent on", cn: "那个质子梯度是在哪儿建起来的、最后又花在什么上" }]
    },
    {
      link_en: "a second, unrelated ATP-driven family, and the disease it is famous for",
      link_cn: "第二个与之无关的、由 ATP 驱动的家族，以及它最出名的那个疾病",
      en: "ABC transporters are named for two ATP-binding cassettes — nucleotide-binding domains — sitting beside two transmembrane domains of six helices each: a substrate binds on the cytoplasmic side, ATP is hydrolysed, and the transporter flips to present that substrate outside, at about one ATP per molecule moved. They export amino acids, peptides, lipids, bile salts and drugs, and MDR1 protects the brain and the placenta by pumping toxins back out — the same activity that pumps doxorubicin out of a tumour cell and is called multidrug resistance. **CFTR is the family's odd member: an ABC protein working as a chloride channel rather than a pump, and deleting one residue of it, Phe508, accounts for about 90 percent of cystic fibrosis.**",
      cn: "ABC 转运蛋白得名于两个结合 ATP 的「盒」—— 即核苷酸结合结构域 —— 它们挨着两个各含六条螺旋的跨膜结构域：底物在胞质一侧结合，ATP 被水解，转运体翻转、把底物呈到外面，大约每搬一个分子花一个 ATP。它们输出氨基酸、肽、脂类、胆汁盐和药物；MDR1 把毒素泵回去，保护大脑和胎盘 —— 同样的活性也把多柔比星泵出肿瘤细胞，这就是多药耐药。**CFTR 是这个家族里的怪成员：一个作为氯离子通道、而不是作为泵工作的 ABC 蛋白；把它的一个残基 Phe508 缺失掉，就占了囊性纤维化病例的约 90%。**",
      src: "A pp.395–398, box 11-2"
    },
    {
      recall_en: "the sodium gradient the Na⁺K⁺ ATPase built three steps up, now spent as currency",
      recall_cn: "三步之前 Na⁺K⁺ ATP 酶建起来的那个钠梯度，现在被当成货币花掉",
      en: "Secondary active transport uses the energy of a concentration gradient of a different substance, established earlier by primary transport. In the cells lining the gut, a sodium-glucose symporter on the surface facing the gut contents lets 2 Na⁺ fall back into the cell and drags 1 glucose in with them, uphill against glucose's own gradient. **With sodium at 12 mM inside and 145 mM outside, a −50 mV membrane and 37 °C, two returning sodium ions release 22.4 kJ, enough in principle to concentrate glucose 6,000-fold inside the cell.** The glucose then leaves the opposite surface of that same cell into the blood, passively, through GLUT2 — so absorbing one glucose from a meal takes three named transporters working in series. A relative of the symporter, SGLT2 in the kidney, is the target of the gliflozin drugs for type 2 diabetes: block it and the excess glucose leaves in the urine.",
      cn: "次级主动转运用的是另一种物质的浓度梯度所含的能量，而那个梯度是先前由初级转运建起来的。在肠道上皮细胞里，朝向肠腔那一面的钠－葡萄糖共转运体让 2 个 Na⁺ 落回细胞内，同时拽 1 个葡萄糖一起进来 —— 逆着葡萄糖自己的梯度。**在钠内 12 mM、外 145 mM、膜电位 −50 mV、37 °C 的条件下，两个钠离子回流释放 22.4 kJ，原则上足以把细胞内的葡萄糖浓缩到肠腔的 6,000 倍。**葡萄糖随后从同一个细胞的另一面、经 GLUT2 被动地进入血液 —— 所以从一餐饭里吸收一个葡萄糖，要三个有名字的转运体串联着干。这个共转运体的亲戚 SGLT2 在肾脏里，是治疗 2 型糖尿病的格列净类药物的靶点：把它挡住，多余的葡萄糖就随尿排掉。",
      src: "B §8.5.3, p.201 · A pp.398–399, figure 11-42, worked example 11-3"
    },
    {
      link_en: "and a carrier can also do chemistry to its cargo on the way through",
      link_cn: "载体还能在半路上对自己运的货做化学反应",
      en: "**Group translocation is transport in which the carrier chemically modifies its cargo on the way through — a phosphorylation or a hydrolysis — so it is an enzyme as well as a carrier.** It is used for the more complex organic molecules: carbohydrates, amino acids, disaccharides and peptides.",
      cn: "**基团转位 (group translocation) 是这样一种转运：载体在货物穿过的途中对它做了化学修饰 —— 比如一次磷酸化或一次水解 —— 所以这个载体同时也是一个酶。**它用在比较复杂的有机分子上：糖类、氨基酸、二糖和肽。",
      src: "B §8.5.3, p.201"
    },
    {
      link_en: "ions get two specialised carriers of their own, and one of them is not a protein at all",
      link_cn: "离子有两种专门的载体，其中一种根本不是蛋白",
      en: "A specialised carrier for an ion is either an ionophore, a substance of non-protein nature, or an ion channel, which is a membrane protein. Valinomycin is the worked ionophore: a small cyclic peptide that wraps a K⁺ ion in six carbonyl oxygens and neutralises its charge, while its own outer surface stays entirely non-polar, so the whole complex is hydrophobic enough to diffuse through the lipid bilayer. **Valinomycin and monensin are antibiotics because collapsing an ion gradient kills a cell: that gradient is what secondary transport and energy conservation both run on.**",
      cn: "专门运离子的载体有两种：一种是离子载体 (ionophore)，属于非蛋白性质的物质；另一种是离子通道 (ion channel)，那是膜蛋白。做实的离子载体是缬氨霉素：一个小的环状肽，用六个羰基氧把一个 K⁺ 裹起来、中和它的电荷，而它自己的外表面完全非极性，于是整个复合物疏水到足以在脂双层里扩散。**缬氨霉素和莫能菌素之所以是抗生素，是因为把离子梯度弄塌就能杀死细胞：次级转运与能量储存靠的都是那个梯度。**",
      src: "B §8.5.3, p.201 · A p.400, figure 11-43"
    },
    {
      link_en: "water crosses far too fast for dissolving-in-the-lipid to explain, and it has its own protein",
      link_cn: "水过膜快得远不是「溶进脂里」所能解释的，它有自己的蛋白",
      en: "Aquaporins are the channels through which water crosses a membrane, eleven of them in mammals, each with its own tissues: AQP1 sits at about 2×10⁵ copies in every erythrocyte, and AQP2 in the collecting duct of the kidney is controlled by vasopressin, the antidiuretic hormone — more vasopressin, more water reabsorbed, less urine. **Water crosses an AQP1 channel at about 10⁹ per second, faster than the turnover of catalase — the fastest enzyme known — and yet an aquaporin refuses to pass a proton.** It has to refuse: letting protons leak through would collapse every electrochemical gradient the pumps above have built.",
      cn: "水通道蛋白 (aquaporin) 是水跨膜时走的通道，哺乳动物有十一种，各有自己的组织：AQP1 在每个红细胞里约有 2×10⁵ 个拷贝；肾集合管上皮的 AQP2 受抗利尿激素血管加压素控制 —— 加压素多，重吸收的水就多，尿就少。**水通过一个 AQP1 通道的速率约为每秒 10⁹ 个，比已知最快的酶过氧化氢酶的周转数还快，而水通道蛋白却拒绝让质子通过。**它必须拒绝：让质子漏过去，上面那些泵辛苦建起来的每一个电化学梯度都会塌掉。",
      src: "A pp.399–401, table 11-3"
    },
    {
      recall_en: "the hydration shell of the very first step — here a channel strips it deliberately and uses the stripping to choose",
      recall_cn: "第一步里那层水化壳 —— 这里有个通道故意把它剥掉，并用「剥」这件事来做选择",
      en: "The K⁺ channel passes K⁺ about 10⁴ times more readily than Na⁺, even though Na⁺ is the smaller ion, 0.95 Å against 1.33 Å. Four identical subunits form a cone, wide end outside, each contributing two membrane-spanning helices and a short pore helix. An ion enters a wide water-filled vestibule on the cytosolic side with its hydration shell intact; about two-thirds of the way across, the channel narrows into the selectivity filter and the water has to come off. **The backbone carbonyl oxygens lining that filter take the water's place and fit a dehydrated K⁺ almost exactly, while Na⁺ cannot reach all of them at once and is never repaid for the water it lost.** Selectivity here is a set of substitute partners rather than a hole of a particular width, and mutating the filter residues abolishes it.",
      cn: "K⁺ 通道让 K⁺ 通过的容易程度约为 Na⁺ 的 10⁴ 倍，尽管 Na⁺ 是更小的那个离子 —— 0.95 Å 对 1.33 Å。四个相同的亚基组成一个圆锥（宽端朝外），每个贡献两条跨膜螺旋加一条短的孔道螺旋。离子先从胞质一侧进入一个宽阔的、充满水的前庭，水化壳还完好；走到大约三分之二处，通道收窄成选择性滤器，水必须脱掉。**排在滤器内壁的主链羰基氧顶替了水的位置，其间距几乎正好贴合脱水的 K⁺；而 Na⁺ 没法同时够到它们全部，失去的水也就没有任何补偿。**这里的选择性靠的是一组替补搭档，而不是一个特定宽度的孔；把滤器上的残基突变掉，选择性就没有了。",
      src: "A pp.402–403, figure 11-45"
    },
    {
      link_en: "a channel that opens on command is the simplest signal transducer there is",
      link_cn: "一个能按指令打开的通道，是最简单的信号转导器",
      en: "A gated ion channel opens and shuts on command, and it needs no second messenger and no cascade of enzymes: the signal opens a hole, ions run through it down their own electrochemical gradient, the voltage across the membrane changes, and that change is the response. **A channel is gated either by voltage, opening when the membrane potential itself reaches a threshold, or by a ligand, opening when a specific molecule binds it.** What that buys is speed — with no chain of reactions to run through first, the response takes milliseconds.",
      cn: "门控离子通道按指令开合，它不需要第二信使，也不需要一条酶的级联：信号把孔打开，离子顺着自己的电化学梯度冲过去，跨膜电压随之改变，而这个改变就是响应。**给通道开门的要么是电压 —— 膜电位本身达到某个阈值时打开；要么是配体 —— 某个特定分子结合上来时打开。**这换来的是快：前面没有一串反应要跑，响应以毫秒计。",
      src: "A pp.442–443"
    },
    {
      link_en: "and a neuron is built out of exactly that",
      link_cn: "而神经元正是由这个搭起来的",
      en: "An action potential is a self-propagating wave of voltage along an axon: voltage-gated Na⁺ channels open and sodium enters, which is depolarisation, then K⁺ channels open and potassium leaves, which is repolarisation. Its arrival at the end of a presynaptic neuron triggers the release of a neurotransmitter — acetylcholine, for example — which crosses the gap and binds specific receptors on the far side, changing Vm there. **A neuron's membrane potential at any instant is the sum of every open channel's contribution, so a nerve cell adds its inputs up instead of obeying any one of them.** Neurotoxins made by many organisms attack neuronal ion channels, and they act fast precisely because no cascade has to run first.",
      cn: "动作电位是沿轴突自我传播的一波电压：电压门控的 Na⁺ 通道打开、钠内流，这是去极化；接着 K⁺ 通道打开、钾外流，这是复极化。它抵达突触前神经元末端时，触发神经递质的释放 —— 比如乙酰胆碱 —— 递质越过间隙，结合对面的特异受体，改变那里的 Vm。**神经元在任一瞬间的膜电位，是当时每一个开着的通道各自贡献的总和 —— 所以神经细胞是把输入加起来，而不是听从其中任何一个。**许多生物制造的神经毒素攻击的正是神经元的离子通道，而它们起效快，恰恰是因为前面不必先跑一条级联。",
      src: "A pp.443–445"
    },
    {
      link_en: "the largest cargo cannot use any of that, so the membrane itself is rebuilt",
      link_cn: "最大的货物上面这些路一条也走不了，于是膜本身被重新搭一遍",
      en: "The most complicated membrane transport moves macromolecules — proteins, DNA — or whole particles such as membranes, viruses and granules, and it works by locally restructuring the membrane: submicroscopic changes for a macromolecule, microscopically visible ones for a particle, which are pinocytosis for droplets of fluid and phagocytosis for solid particles. **Transport of this kind is named by direction: endocytosis carries material towards the inside of the cell, exocytosis carries it out.**",
      cn: "最复杂的膜转运搬的是大分子 —— 蛋白质、DNA —— 或者整颗的颗粒，比如膜、病毒、颗粒体；它靠的是把膜局部重新改建：大分子对应亚显微的变化，颗粒对应显微镜下看得见的变化，也就是吞取液滴的胞饮作用和吞取固体颗粒的吞噬作用。**这一类转运按方向命名：胞吞作用 (endocytosis) 把物质带向细胞内部，胞吐作用 (exocytosis) 把它带出去。**",
      src: "B §8.5.3, p.201",
      see: [{ id: "L-11-2-1", en: "the protein zipper that fuses the vesicle when it gets there", cn: "囊泡到位之后，把两张膜拉上的那条蛋白拉链" }]
    }
  ],
  terms: [
    { en: "semipermeability", cn: "半透性",
      def_en: "Neither a fully impermeable nor a fully permeable membrane occurs in nature. Some substances pass freely and others cannot pass at all, and what blocks a polar solute is the shell of water it must shed to enter the oily core.",
      def_cn: "自然界里既没有完全不通透的膜，也没有完全通透的膜。有些物质自由通过，另一些根本过不去；挡住极性溶质的，是它进入油性核心前必须脱掉的那层水化壳。" },
    { en: "electrochemical gradient", cn: "电化学梯度",
      def_en: "The two forces acting on an ion at once — its concentration difference across the membrane, and the membrane potential Vm, in millivolts, negative inside in most animal cells. Only both together decide whether an ion is running downhill or being pushed uphill.",
      def_cn: "同时作用在一个离子上的两种力 —— 它的跨膜浓度差，以及膜电位 Vm（以毫伏计，多数动物细胞内侧为负）。只有两者合起来，才决定这个离子是在顺坡跑还是正被往上推。" },
    { en: "simple / facilitated diffusion", cn: "简单扩散／易化扩散",
      def_en: "Both are passive: down a gradient, no energy spent. Simple diffusion is a lipophilic substance dissolving straight into the membrane lipids, with no protein involved. Facilitated diffusion needs a carrier, and it is therefore specific, saturable and inhibitable — a protein-lined route is facilitated even when it is listed elsewhere as simple.",
      def_cn: "两者都是被动的：顺梯度、不花能量。简单扩散是亲脂物质直接溶进膜脂，没有蛋白参与。易化扩散需要载体，因此具有特异性、可饱和性、可抑制性 —— 走蛋白孔道的那条路属于易化扩散，哪怕别处把它列进了简单扩散。" },
    { en: "GLUT1 and Kt", cn: "GLUT1 与 Kt",
      def_en: "The glucose uniporter of the erythrocyte, 50,000 times faster than unaided crossing and costing nothing. Kt, the transport constant, is the outside concentration giving half the maximum rate, and GLUT1's is about 6 mM against a blood glucose of 4.5 to 5 mM. It cycles between T1, open outward, and T2, open inward.",
      def_cn: "红细胞的葡萄糖单向转运体，比无蛋白辅助的穿膜快 5 万倍，且不花钱。转运常数 Kt 是达到最大速率一半时的外侧浓度，GLUT1 的约为 6 mM，而血糖是 4.5 到 5 mM。它在朝外开的 T1 与朝内开的 T2 之间循环。" },
    { en: "channel versus transporter", cn: "通道与载体之别",
      def_en: "Three measurable differences. Rate: 10⁷ to 10⁸ ions per second against about 100 per second. Saturability: a transporter saturates like an enzyme, a channel does not. Gating: one gate against two gates on opposite sides that are never open at the same time, which is why a transporter cannot leak.",
      def_cn: "三个可测的差别。速率：每秒 10⁷ 到 10⁸ 个离子，对约每秒 100 个。可饱和性：载体像酶一样会饱和，通道不会。门控：一个门，对分处两侧、绝不同时打开的两个门 —— 这正是载体不会漏的原因。" },
    { en: "uniport / symport / antiport", cn: "单向转运／共转运／逆向转运",
      def_en: "A count of substrates and their relative directions, saying nothing about energy. One solute (GLUT1); two in the same direction; two in opposite directions. The worked antiport is the chloride-bicarbonate exchanger, electroneutral and obligatorily coupled: no chloride, no bicarbonate transport.",
      def_cn: "只数底物的个数和相对方向，不说明能量问题。一种溶质（GLUT1）；两种同方向；两种反方向。做实的逆向转运例子是氯－碳酸氢根交换体：电中性，且强制偶联 —— 没有氯，碳酸氢根就运不动。" },
    { en: "primary / secondary active transport", cn: "初级／次级主动转运",
      def_en: "Both run against the gradient and both must be paid for. Primary takes the energy directly from ATP and the cleavage of a macroergic bond, hence ATPase pump. Secondary spends a gradient of a different substance that primary transport built earlier — the sodium-glucose symporter is the case in point.",
      def_cn: "两者都逆梯度、都必须付费。初级直接从 ATP 与高能键的断裂取能，所以叫 ATP 酶泵。次级花的是另一种物质的梯度，而那个梯度是初级转运先前建好的 —— 钠－葡萄糖共转运体就是例子。" },
    { en: "electrogenic transport", cn: "生电性转运",
      def_en: "Moving an ion with no partner of opposite charge separates charge and builds voltage, so a second term ZFΔψ is added to the free-energy bill. The Na⁺K⁺ ATPase is the standing example: 3 Na⁺ out against 2 K⁺ in, which sets the −50 to −70 mV resting potential.",
      def_cn: "搬一个离子而没有反电荷的搭档同行，就会分离电荷、积起电压，于是自由能账单上要加一项 ZFΔψ。Na⁺K⁺ ATP 酶是常备例子：出 3 个 Na⁺、进 2 个 K⁺，由此定下 −50 到 −70 mV 的静息电位。" },
    { en: "P-type ATPase", cn: "P 型 ATP 酶",
      def_en: "At least 70 human cation pumps that phosphorylate and dephosphorylate a conserved aspartate once per cycle, all blocked by vanadate. SERCA moves two calcium ions per ATP by switching one pair of sites from high affinity facing the cytosol to low affinity facing the lumen.",
      def_cn: "至少 70 个成员的人类阳离子泵，每个周期把一个保守的天冬氨酸磷酸化再去磷酸化，全都被钒酸盐抑制。SERCA 每个 ATP 搬两个钙：把同一对位点从「朝胞质、高亲和力」切换成「朝腔内、低亲和力」。" },
    { en: "F-type ATPase / ATP synthase", cn: "F 型 ATP 酶／ATP 合酶",
      def_en: "A proton pump that is fully reversible. Driven by ATP it pumps protons uphill; driven backwards by a large enough proton gradient it synthesises ATP instead, and in that direction it carries the second name. V-type ATPases share the two-piece architecture but only acidify compartments.",
      def_cn: "一个完全可逆的质子泵。被 ATP 驱动时把质子往高处泵；被足够大的质子梯度反着推时，改为合成 ATP —— 朝这个方向工作时用第二个名字。V 型 ATP 酶共用同样的两段式结构，但只负责把区室变酸。" },
    { en: "ABC transporter / CFTR", cn: "ABC 转运蛋白／CFTR",
      def_en: "Named for two ATP-binding cassettes beside two six-helix transmembrane domains; about one ATP per molecule exported. MDR1 pumps toxins out of brain and placenta and chemotherapy drugs out of tumours. CFTR is the exception that works as a chloride channel, and the deletion of Phe508 accounts for about 90 percent of cystic fibrosis.",
      def_cn: "得名于两个结合 ATP 的「盒」，旁边是两个各含六条螺旋的跨膜结构域；每输出一个分子约耗一个 ATP。MDR1 把毒素泵出大脑和胎盘，也把化疗药泵出肿瘤。CFTR 是那个例外 —— 它作为氯通道工作，而 Phe508 的缺失占囊性纤维化的约 90%。" },
    { en: "group translocation", cn: "基团转位",
      def_en: "Transport in which the carrier chemically modifies its cargo during the crossing, by phosphorylation or hydrolysis, so it is an enzyme as well as a carrier. Used for the more complex organic molecules: carbohydrates, amino acids, disaccharides, peptides.",
      def_cn: "载体在货物穿过途中对它做化学修饰（磷酸化或水解）的那种转运，所以载体同时也是酶。用于比较复杂的有机分子：糖类、氨基酸、二糖、肽。" },
    { en: "ionophore", cn: "离子载体",
      def_en: "A carrier for an ion that is not a protein, as opposed to an ion channel, which is. Valinomycin, a small cyclic peptide, wraps a potassium ion in six carbonyl oxygens and hides its charge inside a non-polar surface. Valinomycin and monensin work as antibiotics by collapsing ion gradients.",
      def_cn: "不是蛋白的那种离子搬运工，与之相对的离子通道则是蛋白。缬氨霉素是个小环肽，用六个羰基氧把一个钾离子裹住，把电荷藏在非极性的外壳里。缬氨霉素和莫能菌素靠弄塌离子梯度起抗生素作用。" },
    { en: "aquaporin", cn: "水通道蛋白",
      def_en: "The water channel, eleven in mammals. AQP1 passes about 10⁹ water molecules per second, faster than catalase turns over, and AQP2 in the kidney collecting duct answers to vasopressin. It passes water and refuses protons, because a proton leak would collapse every gradient the pumps built.",
      def_cn: "水的通道，哺乳动物有十一种。AQP1 每秒通过约 10⁹ 个水分子，比过氧化氢酶的周转还快；肾集合管的 AQP2 听血管加压素的。它放水过、却拒绝质子 —— 质子一漏，泵建起来的每个梯度都会塌。" },
    { en: "selectivity filter", cn: "选择性滤器",
      def_en: "The narrow part of a potassium channel where the ion's water shell is stripped and backbone carbonyl oxygens take the water's place, spaced to fit a dehydrated K⁺ almost exactly. Na⁺ is smaller and cannot touch them all at once, so it is not repaid for its lost water and stays out — a 10⁴-fold preference.",
      def_cn: "钾通道最窄的那一段：离子的水化壳在这里被剥掉，主链羰基氧顶上，其间距几乎正好贴合脱水的 K⁺。Na⁺ 更小，没法同时碰到它们全部，失去的水得不到补偿，于是进不去 —— 差距达 10⁴ 倍。" },
    { en: "gated ion channel", cn: "门控离子通道",
      def_en: "A pore that opens on command, gated by voltage reaching a threshold or by a ligand binding. No second messenger and no cascade, so the response takes milliseconds. A neuron's membrane potential is the sum of every open channel's contribution, which makes a nerve cell an integrator rather than a relay.",
      def_cn: "一个按指令打开的孔，门控要么靠电压达到阈值，要么靠配体结合。不需要第二信使、不需要级联，所以响应以毫秒计。神经元的膜电位是所有开着的通道各自贡献之和 —— 这让神经细胞成为整合器，而不是中继器。" },
    { en: "endocytosis / exocytosis", cn: "胞吞作用／胞吐作用",
      def_en: "Bulk transport of macromolecules or whole particles by locally restructuring the membrane, named by direction: inward and outward. Particle uptake is microscopically visible — pinocytosis for droplets of fluid, phagocytosis for solid particles.",
      def_cn: "通过把膜局部改建来搬运大分子或整颗颗粒的大宗转运，按方向命名：向内和向外。颗粒的摄取在显微镜下看得见 —— 吞液滴的是胞饮作用，吞固体颗粒的是吞噬作用。" }
  ]
};

/* ------------------------------------------------------ 和脂类打交道 ---- */
window.BIOLITE_SPINE["key:working-with-lipids"] = {
  assumed: [
    "lipid", "water", "membrane", "protein", "enzyme", "hydrolase", "hydrolysis",
    "kinase", "oxidase", "atp", "cell", "cytoplasm", "cytosol", "mitochondrion",
    "beta-oxidation", "lysosome", "fatty acid", "acyl chain", "saturated",
    "unsaturated", "double bond", "cis", "trans", "glycerol", "ester", "amide",
    "ester bond", "phosphate", "phosphodiester", "choline", "phosphocholine",
    "ethanolamine", "inositol", "serine", "triacylglycerol", "diacylglycerol",
    "wax", "pigment", "sterol", "sterol ester", "cholesterol", "cerebroside",
    "ganglioside", "sphingolipid", "sphingomyelin", "sphingosine", "ceramide",
    "phospholipid", "glycerophospholipid", "phosphatidylcholine", "lecithin",
    "phosphatidylserine", "phosphatidylglycerol", "phosphatidylinositol",
    "linoleic acid", "palmitate", "sugar", "monosaccharide", "glucose", "galactose",
    "sialic acid", "glycosidic bond", "amino acid", "peptide", "isoprene",
    "chloroform", "methanol", "ethanol", "ether", "benzene", "acetone", "solvent",
    "organic solvent", "polarity", "solubility", "hydrogen bond", "electrostatic",
    "hydrophobic effect", "phase", "chromatography", "hplc", "column", "silica gel",
    "thin-layer chromatography", "gas chromatography", "capillary action",
    "boiling point", "helium", "dye", "fluorescence", "iodine", "rhodamine",
    "mass spectrometry", "ion", "electron", "methylene", "methyl ester",
    "molecular mass", "database", "protein data bank", "polyketide", "tetracycline",
    "erythromycin", "lipopolysaccharide", "ubiquinone", "retinal", "progesterone",
    "bile acid", "differentiation", "cancer", "drug"
  ],
  nodeTitle_en: "Working with lipids",
  nodeTitle_cn: "和脂类打交道",
  title_en: "The same enzymes twice over: inside a cell they dismantle a membrane lipid, on a bench they are the scalpel that identifies one",
  title_cn: "同样几个酶用两遍：在细胞里，它们拆掉一个膜脂；在实验台上，它们是鉴定这个膜脂的手术刀",
  steps: [
    {
      en: "Complex lipids are primarily components of biological membranes, and their degradation takes place in the cytoplasm. **A membrane lipid is taken apart in the cytoplasm, while a fatty acid released from it is burned inside the mitochondrion, so one molecule is dismantled in two compartments.** Beta-oxidation, the route that burns the fatty acid, is a mitochondrial process, and this contrast is the reason the location is worth stating at all.",
      cn: "复合脂类主要是生物膜的组分，而它们的降解发生在细胞质里。**膜脂是在细胞质里被拆开的，而从它上面卸下来的脂肪酸却在线粒体内被烧掉 —— 同一个分子，在两个区室里被拆解。**烧掉脂肪酸的那条路（β-氧化）是线粒体内的过程；正是这个对照，让「在哪儿拆」这件事值得说出来。",
      src: "B §8.4.2, p.193"
    },
    {
      link_en: "and the enzymes that take a phospholipid apart are named by where they cut",
      link_cn: "而拆磷脂的那些酶，是按「在哪儿下刀」命名的",
      en: "Phospholipids are degraded by hydrolytic enzymes called phospholipases, which break the ester-type bonds inside the molecule, and four types are distinguished by their site of action on a phosphatidylcholine, also called lecithin. **Phospholipase A1 cuts the ester bond at sn-1 and A2 the one at sn-2, each releasing a fatty acid; phospholipase C cuts on the glycerol side of the phosphate and D on the far side, next to the choline.**",
      cn: "磷脂由一类叫磷脂酶 (phospholipase) 的水解酶降解，它们断开分子内部的酯型键；按在磷脂酰胆碱（也叫卵磷脂）结构上的作用位点，区分出四种。**磷脂酶 A1 切 sn-1 位的酯键、A2 切 sn-2 位的酯键，各释放一个脂肪酸；磷脂酶 C 切磷酸靠甘油那一侧的键，D 切磷酸另一侧、紧挨胆碱的那根键。**",
      src: "B §8.4.2, p.193, and the four arrows on its lecithin figure"
    },
    {
      link_en: "a sphingolipid has no glycerol and no pair of ester chains, so it needs other enzymes",
      link_cn: "鞘脂没有甘油、也没有那一对酯键链，所以要换一批酶",
      en: "Sphingolipids — the sphingomyelins and the gangliosides — are degraded step by step by a series of cytoplasmic hydrolases down to their basic building blocks: ceramide, phosphorylcholine and monosaccharides. **Sphingomyelin is ceramide carrying phosphocholine, and a single enzyme, sphingomyelinase, cuts that one link and releases both pieces at once.**",
      cn: "鞘脂类 —— 鞘磷脂和神经节苷脂 —— 由一系列细胞质水解酶一步步降解，直到它们的基本构件：神经酰胺、磷酸胆碱和单糖。**鞘磷脂就是带着磷酸胆碱的神经酰胺，而单单一个酶（鞘磷脂酶）切开这一根连接，就同时放出两块。**",
      src: "B §8.4.2, p.194"
    },
    {
      link_en: "a ganglioside carries a chain of sugars instead, and it is dismantled from the far end inward",
      link_cn: "神经节苷脂带的是一串糖，而它是从最外头往里拆的",
      en: "A ganglioside is ceramide linked in order to glucose, then galactose carrying a branching N-acetylneuraminic acid, then N-acetylgalactosamine, then a terminal galactose. Degradation runs from that terminal sugar inward: beta-galactosidase removes the terminal galactose, beta-N-acetyl-galactosidase the N-acetylgalactosamine, N-acetylneuraminidase the branching sialic acid, the same beta-galactosidase the next galactose, and beta-glucosidase the glucose, leaving ceramide. **Each enzyme uncovers the bond the next one needs, so one missing enzyme stops the whole chain and the half-degraded lipid accumulates.**",
      cn: "神经节苷脂是神经酰胺依次连着葡萄糖、再连着带有支链 N-乙酰神经氨酸的半乳糖、再连 N-乙酰半乳糖胺、最后是末端半乳糖。降解从那个末端糖开始往里走：β-半乳糖苷酶切掉末端半乳糖，β-N-乙酰半乳糖苷酶切掉 N-乙酰半乳糖胺，N-乙酰神经氨酸酶切掉支链上的唾液酸，同一个 β-半乳糖苷酶再切掉下一个半乳糖，β-葡萄糖苷酶切掉葡萄糖，剩下神经酰胺。**每一个酶都为下一个酶露出它要的那根键 —— 所以少了任何一个酶，整条链就停住，半降解的脂类堆积起来。**",
      src: "B §8.4.2, p.194",
      see: [{ id: "8-2-3-4", en: "what those sugars are doing on the outside of a cell in the first place", cn: "这些糖当初挂在细胞外面是干什么用的" }]
    },
    {
      link_en: "both routes arrive at the same molecule, and it is hydrolysed once more",
      link_cn: "两条路走到同一个分子上，而它还要再被水解一次",
      en: "**Ceramide is hydrolysed by ceramidase, with water, into a free fatty acid and sphingosine, and the fatty acid then leaves for beta-oxidation like any other.** A sphingomyelin needs one cut to reach that point and a ganglioside needs five, so the two converge on the same pair of products by different numbers of steps.",
      cn: "**神经酰胺被神经酰胺酶加水水解，生成一个游离脂肪酸和鞘氨醇；这个脂肪酸随后像其他任何脂肪酸一样，去走 β-氧化。**鞘磷脂只要切一刀就走到这一步，神经节苷脂要切五刀 —— 两者用不同的步数，汇合到同一对产物上。",
      src: "B §8.4.2, p.194"
    },
    {
      link_en: "and the sphingosine backbone is taken apart in three further moves",
      link_cn: "而鞘氨醇这根骨架，还要再拆三下",
      en: "Sphingosine is first activated by a kinase at the cost of ATP into sphingosine-1-phosphate, which is then cleaved into ethanolamine-phosphate plus palmitaldehyde, and an oxidase converts that palmitaldehyde into palmitate. **The last two products are drawn fully saturated, although sphingosine carries a trans double bond between C-4 and C-5 that most other accounts describe as surviving into an unsaturated aldehyde.**",
      cn: "鞘氨醇先由一个激酶耗一个 ATP 活化成鞘氨醇-1-磷酸，后者再被裂解成磷酸乙醇胺加棕榈醛，然后一个氧化酶把棕榈醛变成棕榈酸。**最后这两个产物是按完全饱和画出来的，尽管鞘氨醇自己在 C-4 与 C-5 之间带着一个反式双键 —— 多数别的资料都说这个双键会保留下来，产物是不饱和的醛。**",
      src: "B §8.4.2, p.194",
      beyond: true,
      beyondNote: "That the surviving C4–C5 double bond makes the products hexadecenal and hexadecenoate rather than palmitaldehyde and palmitate is standard elsewhere and is NOT on p.194, whose own diagram labels the saturated pair. Both readings are given so the discrepancy is on the record rather than silently resolved."
    },
    {
      link_en: "the same molecules are also handled on a bench, where the difficulty is the definition of a lipid itself",
      link_cn: "同样这些分子也要在实验台上处理 —— 而那里的困难，正是脂类的定义本身",
      en: "Because lipids are insoluble in water, extracting them and then fractionating them requires organic solvents and some techniques not commonly used on water-soluble molecules such as proteins and carbohydrates. **There are two moves in the whole of this work: rank a mixture by polarity or by solubility in a nonpolar solvent, and where ranking whole molecules fails, cut them into pieces that rank differently.**",
      cn: "因为脂类不溶于水，把它们提取出来、再做分级分离，就需要有机溶剂，以及一些在处理蛋白质、糖类这类水溶性分子时不常用的技术。**整套工作只有两招：按极性、或按在非极性溶剂中的溶解度给混合物排队；而当整分子排队排不开时，就把它切成排队方式不同的碎片。**",
      src: "A p.361, §10.4, figure 10-25"
    },
    {
      link_en: "getting the lipids out of a tissue comes first, and different lipids want different solvents",
      link_cn: "第一步是把脂类从组织里弄出来，而不同的脂类要用不同的溶剂",
      en: "Neutral lipids — triacylglycerols, waxes, pigments — come out of a tissue readily with ethyl ether, chloroform or benzene, solvents in which lipids cannot cluster by the hydrophobic effect. Membrane lipids need something more polar, ethanol or methanol, which weakens the hydrophobic interactions among the lipids and also the hydrogen bonds and electrostatic interactions binding them to membrane proteins — a membrane lipid is held by two grips, and both have to be released. **Chloroform, methanol and water at 1:2:0.8 are miscible and form a single phase in which every lipid dissolves at once, and adding more water afterwards splits the mixture in two.** The lipids stay in the chloroform below while proteins and sugars partition into the methanol and water above.",
      cn: "中性脂类 —— 三酰甘油、蜡、色素 —— 用乙醚、氯仿或苯就很容易从组织里提出来，因为在这些溶剂里脂类无法靠疏水效应聚成团。膜脂需要更极性的东西，乙醇或甲醇：它们既削弱脂类之间的疏水相互作用，也削弱把脂类系在膜蛋白上的氢键和静电相互作用 —— 一个膜脂被两只手抓着，两只手都得松开。**氯仿、甲醇、水按 1:2:0.8 是互溶的，形成单一一相，所有脂类在其中一次性溶解；事后再加水，混合物就分成两层。**脂类留在下层的氯仿里，蛋白质和糖则分配到上层的甲醇与水里。",
      src: "A p.361"
    },
    {
      link_en: "now sort what is in the chloroform, and one sentence about a solid does all the sorting",
      link_cn: "接着给氯仿层里的东西分类 —— 而关于一种固体的一句话，就把分类全做完了",
      en: "In adsorption chromatography an insoluble polar material — silica gel, a form of silicic acid — is packed into a glass column and the lipid mixture in chloroform is applied at the top. **The polar lipids bind tightly to the polar silicic acid while the neutral lipids pass straight through the column and emerge in the first chloroform wash.** The bound ones are then eluted in order of increasing polarity by washing with progressively more polar solvents: acetone brings off uncharged but polar lipids such as cerebrosides, methanol brings off charged ones such as the glycerophospholipids, so the elution order is a readout of head-group chemistry. HPLC is the same principle in a column of smaller particles with the solvent forced through under pressure, and it resolves phosphatidylserine, phosphatidylglycerol and phosphatidylinositol — three lipids differing only in which alcohol sits on the phosphate.",
      cn: "在吸附层析里，一种不溶的极性材料 —— 硅胶，即硅酸的一种形式 —— 被装进玻璃柱，脂类的氯仿溶液从柱顶加进去。**极性脂类紧紧结合在极性的硅酸上，而中性脂类直接穿过柱子，在第一次氯仿洗脱中就流出来。**结合上去的那些，再用极性逐步升高的溶剂按极性递增的顺序洗下来：丙酮洗下不带电但极性的脂类（如脑苷脂），甲醇洗下带电的（如甘油磷脂）—— 所以洗脱顺序其实是头基化学的一次读出。HPLC 是同一个原理，只是柱内颗粒更细、溶剂加压推过去；它能把磷脂酰丝氨酸、磷脂酰甘油和磷脂酰肌醇分开 —— 这三个脂类的差别只在磷酸上挂的那个醇。",
      src: "A p.362"
    },
    {
      recall_en: "the same adsorption as the step above, run flat on a plate, where the direction of travel reverses",
      recall_cn: "和上一步同样的吸附，摊平在一块板上跑 —— 而跑的方向反了过来",
      en: "Thin-layer chromatography spreads silica gel in a thin layer on a glass plate, puts a small sample near one edge, and stands the plate in a shallow layer of organic solvent inside a chamber saturated with that solvent's vapour, so the solvent rises by capillary action and carries the lipids with it. **The less polar lipids move farthest, since they have less tendency to bind the silicic acid, so distance travelled on a plate is inverse polarity.** Two detection reagents report different things: rhodamine, a dye that fluoresces when associated with lipids, shows where lipid is at all, while iodine fumes react reversibly with double bonds, so lipids containing unsaturated fatty acids develop a yellow or brown colour. A band can also be scraped off the plate and the lipid recovered by extraction.",
      cn: "薄层层析把硅胶铺成薄薄一层附在玻璃板上，把少量样品点在靠一边的位置，再把板立在一浅层有机溶剂里，整个装置封在被该溶剂蒸气饱和的槽中；溶剂靠毛细作用往上爬，把脂类一起带上去。**极性越小的脂类跑得越远，因为它们与硅酸结合的倾向更弱 —— 所以在板上，跑的距离与极性成反比。**两种检测试剂报告的是不同的东西：罗丹明是一种与脂类结合时会发荧光的染料，显示的是「哪里有脂类」；而碘蒸气与双键可逆地反应，所以含不饱和脂肪酸的脂类会显出黄色或棕色。含目标条带的区域还可以从板上刮下来，用萃取把脂类回收 —— 于是薄层层析既是分析手段，也是制备手段。",
      src: "A p.362"
    },
    {
      link_en: "the third property is volatility, and most lipids have none",
      link_cn: "第三个性质是挥发性 —— 而多数脂类根本不挥发",
      en: "Gas chromatography separates volatile components by their relative tendencies to dissolve in the inert material packed into the column, or to volatilise and travel through it carried by a current of an inert gas such as helium. Most lipids must be derivatised first to raise their volatility, which is to say lower their boiling point. **For a fatty-acid analysis the lipids are transesterified — heated in methanol with HCl or NaOH — which converts fatty acids esterified to glycerol into their methyl esters.** Swap the glycerol for methanol and one large involatile phospholipid becomes a set of small volatile fatty acyl methyl esters, after which mixtures of various chain lengths and various degrees of unsaturation can be completely resolved.",
      cn: "气相色谱按挥发性组分的两种倾向的相对大小来分离：溶进柱内填充的惰性材料，还是挥发起来、随氦气这类惰性气流穿过柱子。多数脂类必须先衍生化以提高挥发性 —— 也就是降低沸点。**做脂肪酸分析时，把脂类做酯交换 —— 在甲醇里加 HCl 或 NaOH 加热 —— 这一步把酯化在甘油上的脂肪酸变成它们的甲酯。**把甘油换成甲醇，一个又大又不挥发的磷脂就变成一组又小又易挥发的脂酰甲酯；此后，各种链长、各种不饱和度的混合物可以被完全分辨开。",
      src: "A p.362"
    },
    {
      recall_en: "the four phospholipases from the start of this chain, now used as scalpels instead of as catabolic enzymes",
      recall_cn: "这条链开头那四个磷脂酶，现在被当手术刀用，而不是当分解酶用",
      en: "All ester-linked fatty acids in triacylglycerols, phospholipids and sterol esters are released by mild acid or alkaline treatment, and somewhat harsher conditions release the amide-bound fatty acids of sphingolipids — a ranking in itself, since an ester bond breaks more easily than an amide bond. **Phospholipase C releases a water-soluble phosphoryl alcohol and a chloroform-soluble diacylglycerol, so one cut sends the head and the tails into different phases to be characterised separately.** The same enzyme making the same cut on the same lipid inside a living membrane is a signalling event: one reaction, two purposes.",
      cn: "三酰甘油、磷脂和固醇酯里所有以酯键相连的脂肪酸，用温和的酸或碱处理就能释放出来；而要从鞘脂上释放以酰胺键相连的脂肪酸，条件要更剧烈一些 —— 这本身就是一个排序：酯键比酰胺键更容易断。**磷脂酶 C 释放出一个水溶的磷酰醇和一个溶于氯仿的二酰甘油 —— 一刀就把头和尾送进了不同的相，两边可以分别表征。**同一个酶、在同一个脂类上、切下的同一刀，发生在活的膜里时就是一次信号事件：一个反应，两种用途。",
      src: "A p.363, and figure 10-14 on A p.352"
    },
    {
      link_en: "the fourth property is mass, and it is the only one that can place a double bond",
      link_cn: "第四个性质是质量 —— 它是唯一能定出双键位置的那个",
      en: "Two fatty acids of similar length unsaturated at different positions have very similar chemical properties, and their order of elution from a chromatographic procedure often does not distinguish them, so the molecule is broken apart and the pieces are weighed instead. In the worked example a picolinyl ester of linoleic acid of mass 371 is bombarded with electrons, giving a parent ion plus a series of fragments from breaks along the chain. **A uniform series of ions 14 mass units apart records the loss of one methylene group after another from the methyl end, and a gap of 26 instead of 14 marks a double bond.** Counting the gaps locates every double bond in the chain, and the honest limit is worth quoting as it stands: these data alone do not reveal the configuration, cis or trans.",
      cn: "两个链长相近、只是不饱和位置不同的脂肪酸，化学性质非常接近，它们在层析里的洗脱顺序常常分不开它们 —— 于是改成把分子打碎、称碎片。书上做实的例子里，质量 371 的亚油酸 picolinyl 酯被电子轰击，给出一个母离子，外加一串沿链断裂产生的碎片。**一串彼此相差 14 个质量单位的均匀离子，记录的是从甲基端起一个接一个失去亚甲基；而间隔不是 14 而是 26 的地方，就标出一个双键。**把这些间隔数下去，就能定位链上每一个双键；而那条诚实的限度值得照原样引用：仅凭这些数据，无法判断双键的构型是顺式还是反式。",
      src: "A p.363, figure 10-26"
    },
    {
      link_en: "and once the weighing is good enough, one of the earlier steps can be dropped altogether",
      link_cn: "而一旦「称」得够准，前面某一步就可以整个省掉",
      en: "With higher-resolution mass spectrometry, individual lipids can be identified in very complex mixtures without fractionating a crude extract first, an approach called shotgun, which avoids the losses of a preliminary separation and is faster. The LIPID MAPS database sorts every lipid into one of eight chemical categories, each with a two-letter code — fatty acids FA, glycerolipids GL, glycerophospholipids GP, sphingolipids SP, sterol lipids ST, prenol lipids PR, saccharolipids SL, polyketides PK — subdivided into numbered classes, so every lipid carries a unique 12-character identifier. **An animal cell contains more than a thousand different lipid species, each presumably having a specific function, and the word standing there is presumably rather than known.**",
      cn: "有了分辨率更高的质谱，就可以不先对粗提物做分级分离，直接在极复杂的混合物里鉴定出单个脂类 —— 这种做法叫「霰弹枪 (shotgun)」，它避开了初步分离造成的损失，而且更快。LIPID MAPS 数据库把每一种脂类归入八大化学类别之一，每类一个两字母代码 —— 脂肪酸 FA、甘油脂 GL、甘油磷脂 GP、鞘脂 SP、固醇脂 ST、prenol 脂 PR、糖脂 SL、聚酮 PK —— 每类再细分成编号的 class，于是每一种脂类都有一个唯一的 12 字符标识符。**一个动物细胞含有一千多种不同的脂类，每一种「大概」都有某个具体功能 —— 而站在那里的词是「大概」，不是「已知」。**",
      src: "A pp.363–364, table 10-2"
    }
  ],
  terms: [
    { en: "phospholipase A1 / A2 / C / D", cn: "磷脂酶 A1／A2／C／D",
      def_en: "Four hydrolytic enzymes distinguished by where they cut a phospholipid. A1 takes the ester bond at sn-1 and A2 the one at sn-2, each releasing a fatty acid; C cuts on the glycerol side of the phosphate, D on the far side next to the head group. In a cell that is degradation; on a bench the same cuts are an analytical tool.",
      def_cn: "四个按「在磷脂上哪里下刀」区分的水解酶。A1 切 sn-1 位的酯键、A2 切 sn-2 位的，各放出一个脂肪酸；C 切磷酸靠甘油那侧，D 切另一侧、紧挨头基。在细胞里这是降解；在实验台上，同样几刀是分析工具。" },
    { en: "sphingomyelinase", cn: "鞘磷脂酶",
      def_en: "The single enzyme that cuts the link between ceramide and phosphocholine, releasing both pieces at once. One cut is all a sphingomyelin needs, where a ganglioside needs five sugars taken off one at a time first.",
      def_cn: "把神经酰胺与磷酸胆碱之间那根连接切开、同时放出两块的那一个酶。鞘磷脂只要这一刀；而神经节苷脂得先把五个糖一个一个卸掉。" },
    { en: "stepwise ganglioside degradation", cn: "神经节苷脂的逐步降解",
      def_en: "From the terminal sugar inward: beta-galactosidase, beta-N-acetyl-galactosidase, N-acetylneuraminidase, beta-galactosidase again, then beta-glucosidase, leaving ceramide. Each enzyme uncovers the bond the next one needs, so one missing enzyme stops the chain and the half-degraded lipid accumulates.",
      def_cn: "从末端糖往里：β-半乳糖苷酶、β-N-乙酰半乳糖苷酶、N-乙酰神经氨酸酶、再一次 β-半乳糖苷酶，然后 β-葡萄糖苷酶，最后剩下神经酰胺。每个酶为下一个露出它要的键 —— 少一个酶，链就停，半降解的脂类堆积。" },
    { en: "ceramidase", cn: "神经酰胺酶",
      def_en: "Splits ceramide with water into a free fatty acid, which leaves for beta-oxidation, and sphingosine, which is phosphorylated by a kinase at the cost of ATP and then cleaved to ethanolamine-phosphate and a sixteen-carbon aldehyde.",
      def_cn: "加水把神经酰胺劈成游离脂肪酸（随后去走 β-氧化）和鞘氨醇（先由激酶耗一个 ATP 磷酸化，再被裂解成磷酸乙醇胺和一个十六碳的醛）。" },
    { en: "chloroform / methanol / water at 1:2:0.8", cn: "氯仿／甲醇／水 1:2:0.8",
      def_en: "At those proportions the three are miscible and form one phase, in which tissue is homogenised so every lipid dissolves at once. Adding more water afterwards splits the system: lipids stay in the chloroform below, proteins and sugars go into the methanol and water above. One system used first to dissolve, then to separate.",
      def_cn: "在这个比例下三者互溶、形成单一一相，组织在其中匀浆，所有脂类一次溶解。事后再加水，体系分开：脂类留在下层氯仿，蛋白和糖进入上层甲醇与水。同一套溶剂先用来溶开，再用来分开。" },
    { en: "adsorption chromatography on silica gel", cn: "硅胶吸附层析",
      def_en: "Silica gel is an insoluble polar solid. Polar lipids bind it tightly and neutral lipids wash straight through in the first chloroform wash; the bound ones come off in order of increasing polarity — acetone for uncharged polar lipids such as cerebrosides, methanol for charged ones such as glycerophospholipids.",
      def_cn: "硅胶是不溶的极性固体。极性脂类紧紧结合在上面，中性脂类在第一次氯仿洗脱中直接穿过；结合上去的按极性递增依次洗下来 —— 丙酮洗不带电的极性脂类（如脑苷脂），甲醇洗带电的（如甘油磷脂）。" },
    { en: "thin-layer chromatography", cn: "薄层层析",
      def_en: "The same adsorption run upward on a plate by capillary action, where the less polar lipids travel farthest — distance is inverse polarity, the column's fact stated the other way round. Rhodamine fluoresces with lipid in general; iodine fumes react with double bonds, colouring unsaturated lipids yellow or brown.",
      def_cn: "同样的吸附靠毛细作用在板上向上跑，极性越小跑得越远 —— 距离与极性成反比，正是柱层析那件事反过来说一遍。罗丹明对脂类普遍发荧光；碘蒸气与双键反应，把不饱和脂类染成黄色或棕色。" },
    { en: "transesterification to methyl esters", cn: "酯交换成甲酯",
      def_en: "The derivatisation that makes gas chromatography of fatty acids possible: heat the lipids in methanol with HCl or NaOH and the fatty acids esterified to glycerol become methyl esters. One large involatile phospholipid becomes a set of small volatile esters, and chain lengths and unsaturations resolve completely.",
      def_cn: "让脂肪酸能做气相色谱的那一步衍生化：把脂类在甲醇里加 HCl 或 NaOH 加热，酯化在甘油上的脂肪酸就变成甲酯。一个又大又不挥发的磷脂变成一组小而易挥发的酯，链长与不饱和度可被完全分辨。" },
    { en: "14 u and 26 u gaps", cn: "质谱上 14 u 与 26 u 的间隔",
      def_en: "How a chain is read off a mass spectrum. A uniform series of fragment ions 14 mass units apart records the successive loss of methylene groups from the methyl end; where the gap is 26 instead, those are the two carbons of a double bond. Counting the gaps places every double bond — but not whether it is cis or trans.",
      def_cn: "从质谱上读一条链的办法。一串相差 14 个质量单位的碎片离子，记录的是从甲基端起依次失去亚甲基；间隔变成 26 的地方，就是一个双键的那两个碳。数间隔就能定出每个双键 —— 但定不出它是顺式还是反式。" },
    { en: "shotgun lipidomics", cn: "霰弹枪脂质组学",
      def_en: "Putting an unfractionated crude extract straight into high-resolution mass spectrometry. Two justifications of different kinds: it is faster, and it avoids the losses of a preliminary separation, which are uneven and therefore bias a quantification in a way that is hard to correct afterwards.",
      def_cn: "把未分级的粗提物直接送进高分辨质谱。两条理由性质不同：一是更快；二是避开初步分离造成的损失 —— 那些损失并不均匀，会以事后难以校正的方式使定量产生偏倚。" },
    { en: "LIPID MAPS and the lipidome", cn: "LIPID MAPS 与脂质组",
      def_en: "Eight chemical categories with two-letter codes — FA, GL, GP, SP, ST, PR, SL, PK — subdivided into numbered classes, giving every lipid a unique 12-character identifier. The lipidome is the quantitative catalogue of all lipids in one cell type under given conditions, and of how it changes with differentiation, disease or a drug.",
      def_cn: "八个化学类别、各配一个两字母代码 —— FA、GL、GP、SP、ST、PR、SL、PK —— 再细分成编号的 class，于是每种脂类都有唯一的 12 字符标识符。脂质组则是某一细胞类型在特定条件下全部脂类的定量目录，以及它如何随分化、疾病或药物而改变。" }
  ]
};
