/* Spines for chapters 11 and 12 — 速通简洁版.

   Membrane dynamics and transport (11.2, 11.3), then signal transduction (12.1, 12.3,
   12.5, 12.6, 12.8, 12.9).

   House style is SPINE_SPEC.md: one chain per node, one claim per step, every noun
   introduced where it is first used, every structural claim followed by what it is for.

   Chapter 12 sections 12.3, 12.5, 12.6, 12.8 and 12.9 are marked `brief` in the source
   and carry a mustKnow and a summary only — no points, no terms, no quiz. Their spines
   are correspondingly short (6–8 steps). Nothing has been padded to reach a length.

   `beyond: true` marks a claim that is standard and examinable but is NOT on the pages
   the node cites. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------ L-11-2-1 */
window.BIOLITE_SPINE["L-11-2-1"] = {
  assumed: ["membrane", "lipid", "protein", "cell", "water", "atp", "enzyme",
            "cholesterol", "phospholipid", "fatty acid", "cytosol", "diffusion",
            "helix", "receptor", "gene", "amino acid", "residue", "temperature",
            "concentration gradient", "free energy", "covalent bond", "dimer",
            "double bond", "eukaryotic cell", "plasma membrane", "protease"],
  nodeTitle_en: "Membrane dynamics",
  nodeTitle_cn: "膜的动态行为",
  title_en: "Sideways is free, across is not — and everything a membrane does follows from that",
  title_cn: "横着走是免费的，竖着过不是 —— 膜的一切行为都从这里来",
  steps: [
    {
      en: "**A biological membrane is a bilayer: two sheets of lipid laid tail to tail, each sheet called a leaflet, with the water-loving head groups facing the water on either side** and the oily hydrocarbon tails packed together in the middle. One asymmetry of that arrangement runs through everything below: a lipid slides sideways within its own leaflet very easily, and crosses to the other leaflet almost never.",
      cn: "**生物膜是一层双层膜（bilayer）：两片脂质尾对尾贴在一起，每一片叫一个单层（leaflet），亲水的头基团朝向两侧的水**，油性的碳氢尾巴挤在中间。这个排布有一个不对称，贯穿下面每一步：脂质在自己这片单层里横向滑动极其容易，越到对面那片单层去却几乎不会发生。",
      src: "A p.377, §11.2"
    },
    {
      link_en: "first, how loose the sheet is at all",
      link_cn: "先说这片膜本身有多松",
      en: "A membrane's fluidity is a spectrum with two named ends. At the ordered end lipids sit in a liquid-ordered state, packed with regular geometry and barely moving. At the other end they are liquid-disordered, chains rotating freely and diffusing sideways. A real membrane sits between the two, and what changes between the ends is how much motion each lipid is allowed, not the overall shape of the sheet. **Long saturated chains such as 16:0 and 18:0 stack neatly and pull towards the ordered end; a double bond puts a permanent kink in a chain, and kinks and shorter chains pull towards the disordered end** — so a cell tunes its own membrane simply by choosing which fatty acids to build into it.",
      cn: "膜的流动性是一个谱系，两端各有名字。有序的一端，脂质处于液态有序（liquid-ordered）状态，以规则几何紧密堆积，几乎不动。另一端是液态无序（liquid-disordered），链自由转动并侧向扩散。真实的膜落在两者之间；在这个谱系上移动时改变的是每个脂质被允许的运动程度，而不是膜整体的形状。**长的饱和链（如 16:0、18:0）叠得整齐，把膜拉向有序一端；一个双键在链上留下一个永久的扭结，扭结和更短的链把膜拉向无序一端** —— 所以细胞只要选择往膜里装哪些脂肪酸，就调好了自己膜的软硬。",
      src: "A p.377, figure 11-17"
    },
    {
      link_en: "and one molecule that does not obey that rule",
      link_cn: "有一个分子不守这条规则",
      en: "**Cholesterol pushes in opposite directions depending on which lipid it is sitting next to.** Beside unsaturated phospholipids, whose kinks keep them loosely packed, its rigid four-ring system fills the gaps and orders them. Beside sphingolipids — membrane lipids whose acyl chains are long and saturated, and which on their own would set into a gel — it gets in the way and keeps them fluid. One molecule therefore buffers the membrane from both ends of the spectrum at once, which is why cholesterol content is a control knob and not just a component.",
      cn: "**胆固醇朝哪个方向推，取决于它旁边坐的是谁。**挨着不饱和磷脂时（这类脂因扭结而堆得松），它那个刚性的四环体系填进空隙，把它们压紧、变有序。挨着 sphingolipid（鞘脂）——这类膜脂的酰基链又长又饱和，单独存在时会凝成胶——它反而碍事，让它们保持流动。所以同一个分子从谱系的两端同时把膜往中间拽 —— 这也是为什么胆固醇含量是一个调节旋钮，而不只是一种成分。",
      src: "A p.377",
      see: [{ id: "L-10-2-2", en: "cholesterol's own structure — where the rigidity comes from", cn: "胆固醇本身的结构 —— 刚性从哪来" }]
    },
    {
      link_en: "with the sheet described, the two moves a lipid can make",
      link_cn: "膜说清楚了，现在看脂质能做的两种动作",
      en: "A lipid in a bilayer can move in two quite different ways. **Sliding sideways inside its own leaflet is lateral diffusion. Crossing to the other leaflet is transbilayer movement, also called flip-flop.** The two differ in rate by an enormous factor. The rest of this chain is what each move costs and what the cell buys with it.",
      cn: "双层膜里的脂质有两种截然不同的动作。**在自己这片单层里横向滑动，叫侧向扩散（lateral diffusion）。越到对面那片单层，叫跨膜移动（transbilayer movement），也叫翻转（flip-flop）。**两者的速率差着极大的倍数。这条线索剩下的部分，就是这两种动作各自要付多少代价、细胞用它换到了什么。",
      src: "A pp.377–379"
    },
    {
      link_en: "how the fast one is actually measured",
      link_cn: "快的那种是怎么测出来的",
      en: "**Lateral diffusion is measured by FRAP — fluorescence recovery after photobleaching.** Membrane lipids are tagged with a fluorescent probe; an intense laser bleaches one small patch of the surface so that patch stops glowing; then the patch is simply watched. Unbleached lipids diffuse in from around it and bleached ones diffuse out, and how fast the glow comes back is a direct measure of the diffusion rate. Some membrane lipids move at up to 1 micrometre per second — fast enough to cross a whole eukaryotic cell in a few seconds. The same experiment on fluorescently tagged proteins gives their lateral mobility too.",
      cn: "**侧向扩散是用 FRAP 测的 —— fluorescence recovery after photobleaching（光漂白后荧光恢复）。**先给膜脂接上荧光探针；用强激光把表面一小块漂白，让这一块不再发光；然后就盯着这一块看。周围没被漂白的脂质扩散进来，被漂白的扩散出去，荧光恢复得多快，就直接是扩散速率。有些膜脂的速度可达每秒 1 微米 —— 快到一个脂质分子几秒钟就能横穿整个真核细胞。同样的实验做在带荧光标记的蛋白上，就测出蛋白的侧向流动性。",
      src: "A p.379, figure 11-19"
    },
    {
      link_en: "a second technique that contradicts the simple picture",
      link_cn: "第二种技术给出了不一样的结果",
      en: "**Single-particle tracking follows one labelled molecule at a time, and it shows that lateral diffusion is not as free as FRAP alone suggests.** A lipid diffuses rapidly inside a small region and only occasionally hops into the neighbouring region — as though corralled by a fence it can jump over but usually does not.",
      cn: "**单颗粒追踪（single-particle tracking）一次只跟一个被标记的分子，它显示侧向扩散并没有 FRAP 单独看上去那么自由。**脂质在一小片区域内快速扩散，只是偶尔跳进相邻的一片 —— 就像被一圈围栏圈住，栏是跳得过去的，但通常不跳。",
      src: "A p.379"
    },
    {
      recall_en: "the fence the previous step inferred — this is what it is made of",
      recall_cn: "上一步推出来的那圈围栏，这一步说它是什么做的",
      en: "The fence is protein, tied down to the cytoskeleton — the network of internal filaments that holds a cell's shape. In the erythrocyte, the red blood cell, two membrane proteins are pinned this way: glycophorin, and the chloride–bicarbonate exchanger that swaps those two ions across the membrane. Both are tethered through a linking protein, ankyrin, to spectrin, a long filamentous cytoskeletal protein. Fixed proteins mark out the corral, the lipids inside it run free. Some membrane proteins stop moving almost completely: acetylcholine receptors sit in dense, nearly crystalline patches at a neuronal synapse, held there by what they are bound to on the inside of the cell. **So lateral movement is real everywhere and uniform nowhere — the cell decides, protein by protein, what glides and what is held in place.**",
      cn: "围栏是蛋白做的，拴在细胞骨架（cytoskeleton）上 —— 细胞骨架就是细胞内部那套支撑形状的丝状网络。在红细胞（erythrocyte）膜上，有两个膜蛋白就是这样被钉住的：glycophorin（血型糖蛋白），以及负责把氯离子和碳酸氢根对换过膜的 chloride–bicarbonate exchanger。两者都通过一个连接蛋白 ankyrin（锚蛋白）拴在 spectrin（血影蛋白）上，后者是一种长的丝状细胞骨架蛋白。固定的蛋白划出围栏，围栏里的脂质自由跑动。有些膜蛋白干脆几乎不动了：乙酰胆碱受体在神经元突触处排成致密的、近乎晶体的斑块，靠它们在细胞内侧结合的东西固定住。**所以侧向移动处处存在，却处处不均一 —— 细胞是一个蛋白一个蛋白地决定谁滑动、谁被摁住。**",
      src: "A pp.379–380, figure 11-21",
      see: [{ id: "L-11-3-1", en: "the chloride–bicarbonate exchanger as a transporter", cn: "氯-碳酸氢根交换体作为转运蛋白" }]
    },
    {
      link_en: "now the other move, the one that costs",
      link_cn: "现在看另一种动作 —— 要花钱的那种",
      en: "**Flip-flop is rare because it means dragging a polar or charged head group out of the water and through the oily core of the bilayer, which is a large, positive free-energy change.** At body temperature it happens very slowly if it happens at all. That slowness is the useful part: the two leaflets can hold completely different lipids, and the difference is maintained for free, by nothing crossing.",
      cn: "**翻转之所以罕见，是因为它意味着把一个极性或带电的头基团从水里拽出来、拖过双层膜中间那层油 —— 这是一个很大的正自由能变化。**在体温下它即使会发生也极其缓慢。而这个「慢」正是有用的地方：两片单层可以装完全不同的脂质，而这个差别是靠「没人过得去」白白维持住的。",
      src: "A pp.377–378"
    },
    {
      link_en: "some processes need it anyway, so the cell pays",
      link_cn: "但有些过程非要它不可，于是细胞掏钱",
      en: "New membrane is built in the endoplasmic reticulum, the internal membrane factory of a eukaryotic cell, and it is built lopsidedly: glycerophospholipids are made on the face towards the cytosol, sphingolipids are made and modified on the face towards the interior, so almost every lipid ends up needing to reach the side it was not built on. **The cell buys a catalyst for the crossing. Flippases move aminophospholipids from the outer to the inner leaflet at a cost of about one ATP per lipid, and are built like the P-type ATPases that pump ions.** Floppases move four lipids the other way, outward — cholesterol, phosphatidylcholine, sphingomyelin and phosphatidylserine — and they belong to the ABC transporter family, the ATP-driven pumps that also clear drugs out of a cell. Scramblases move any phospholipid down its own concentration gradient in either direction and need no ATP at all. Scramblase activity rises sharply when a cell is activated, injured or dying — a controlled randomisation switched on exactly when the asymmetry has stopped being worth keeping.",
      cn: "新的膜是在内质网（endoplasmic reticulum）里造的 —— 真核细胞内部的膜工厂 —— 而且造得很偏心：甘油磷脂在朝向胞质的那一面合成，鞘脂在朝向内腔的那一面合成和修饰，于是几乎每一个脂质最后都需要到达它不是在那儿被造出来的那一侧。**细胞为这个「过河」买了催化剂。翻转酶（flippase）把氨基磷脂从外层搬到内层，每个脂质约花一个 ATP，其结构与泵离子的 P 型 ATP 酶同源。**外翻酶（floppase）把四种脂质往相反方向、也就是往外搬 —— 胆固醇、磷脂酰胆碱、鞘磷脂、磷脂酰丝氨酸 —— 它属于 ABC transporter 家族，也就是那类靠 ATP 驱动、还负责把药物泵出细胞的泵。乱翻酶（scramblase）让任何磷脂顺着自己的浓度梯度往任一方向走，完全不需要 ATP。乱翻酶的活性在细胞被激活、受损或走向死亡时急剧升高 —— 这是一种恰好在「不对称性已经不值得再保」的时刻才打开的、受控的随机化。",
      src: "A pp.377–378",
      see: [{ id: "L-11-3-1", en: "P-type ATPases and ABC transporters in full", cn: "P 型 ATP 酶与 ABC 转运蛋白的完整机制" }]
    },
    {
      recall_en: "the asymmetry two steps up, now with a stake attached",
      recall_cn: "上面第两步说的那个不对称性，这一步给它安上后果",
      en: "Phosphatidylserine is the lipid that makes the asymmetry a matter of life and death. Flippases keep it on the cytoplasmic leaflet, facing inward, at all times. When it appears on the outer surface instead, that appearance is itself a signal: it triggers apoptosis, the cell's programmed and controlled self-destruction, and it marks the cell to be swallowed by a macrophage, a white blood cell that carries phosphatidylserine receptors on its own surface. So the leaflet asymmetry is also a message. **While phosphatidylserine stays inside, the cell reads as alive; the moment it shows on the outside, the cell is flagged for removal.**",
      cn: "磷脂酰丝氨酸（phosphatidylserine）就是让这个不对称性变成生死大事的那个脂质。翻转酶始终把它按在朝内的胞质单层上。一旦它出现在外表面，这个「出现」本身就是信号：它触发 apoptosis（凋亡），即细胞按程序、受控地自我毁灭，并把该细胞标记出来，让巨噬细胞（一种表面带磷脂酰丝氨酸受体的白细胞）来吞掉它。所以两片单层的不对称同时是一句话。**磷脂酰丝氨酸留在里面，细胞读作「活着」；它一露到外面，细胞就被标记为「该清除了」。**",
      src: "A p.378",
      see: [{ id: "L-12-9-1", en: "apoptosis, and what triggers it", cn: "凋亡，以及什么触发它" }]
    },
    {
      link_en: "back inside one leaflet: even there the lipids are not spread evenly",
      link_cn: "回到单层内部：即使在一片单层里，脂质也不是均匀铺开的",
      en: "**Glycosphingolipids — sphingolipids carrying a sugar on the head group — have long saturated acyl chains that stack tightly against cholesterol's rigid rings, so the two cluster together into patches called membrane rafts**, largely shutting out the shorter, kinked chains of glycerophospholipids. A raft is therefore slightly thicker and more ordered than what surrounds it: liquid-ordered islands on a liquid-disordered sea. That extra thickness sorts proteins by the length of their membrane-spanning helix — a helix of 19 to 20 residues is too short to reach across a raft and is excluded, one of 24 to 25 residues is fully stabilised inside and is drawn in. Rafts are also enriched in proteins that carry lipids attached covalently: GPI-anchored proteins on the outer leaflet, doubly acylated ones such as caveolin on the inner. A raft is about 50 nanometres across and holds a few thousand sphingolipids and perhaps 10 to 50 proteins, and rafts together can cover as much as half the cell surface. What rafts are for: gathering particular receptors and signalling proteins into one small patch raises the chance that partners which must meet actually collide. Strip the cholesterol out and the rafts break up — and so does that signalling.",
      cn: "**Glycosphingolipid（糖鞘脂）是头基团上带一个糖的鞘脂，它的酰基链又长又饱和，能和胆固醇的刚性环紧密堆叠，于是两者聚成一小片一小片，叫膜筏（membrane raft）**，把甘油磷脂那些更短、带扭结的链基本排斥在外。所以筏比周围略厚、更有序：漂在液态无序海洋上的液态有序小岛。这点额外的厚度会按跨膜螺旋的长度给蛋白分类 —— 19 到 20 个残基的螺旋太短，够不着筏的厚度，被排除在外；24 到 25 个残基的螺旋在筏里能被完全稳定住，就被吸进来。筏里还富集共价接着脂质的蛋白：外层是 GPI 锚定蛋白，内层是像 caveolin 这样的双酰化蛋白。一个筏直径约 50 纳米，装几千个鞘脂、大约 10 到 50 个蛋白；所有筏加起来可覆盖细胞表面的一半之多。筏有什么用：把特定的受体和信号蛋白拢进同一小块地方，就提高了那些必须相遇的搭档真正撞上的概率。把胆固醇抽走，筏就散了 —— 那条信号通路也跟着散了。",
      src: "A pp.380–381, figure 11-22",
      see: [{ id: "L-12-5-1", en: "rafts seen from the signalling side", cn: "从信号转导那一侧看膜筏" }]
    },
    {
      link_en: "a raft protein that does something more than gather",
      link_cn: "有一个筏蛋白干的事不止是「聚集」",
      en: "Caveolin is a raft protein with a hairpin-shaped hydrophobic domain that hooks into the cytoplasmic leaflet, held there further by three palmitoyl groups, which are 16-carbon fatty acids attached covalently. **Caveolin dimers gather in a cholesterol-rich raft, and once enough of them crowd into one patch the bilayer is forced to curve inward into a small pit called a caveola** — literally a little cave — covering up to about half the plasma membrane's area in some cell types. What that is for: when a signal removes the caveolin, the caveola flattens back into the plane of the membrane and releases stored surface area on demand, so a cell can swell under osmotic or mechanical stress without the bilayer itself having to stretch.",
      cn: "Caveolin（小凹蛋白）是一种筏蛋白，带一个发夹形的疏水结构域勾进胞质那一侧的单层，再由三个棕榈酰基（palmitoyl group，共价接上去的 16 碳脂肪酸）进一步固定。**Caveolin 二聚体聚到富含胆固醇的筏里，当一小片筏里挤进足够多的二聚体，双层膜就被迫向内弯，形成一个小坑，叫 caveola（小凹，字面意思就是「小洞穴」）**；在某些细胞类型里，小凹能占到质膜面积的约一半。这有什么用：当某个信号把 caveolin 撤走，小凹会重新展平回到膜平面，按需释放出储备的表面积 —— 于是细胞能在渗透压或机械应力下胀大，而不必让脂质双层本身被拉伸。",
      src: "A pp.381–382, figure 11-23"
    },
    {
      recall_en: "caveolin bent the bilayer with a crowd of proteins; here are two other ways to get the same bend",
      recall_cn: "caveolin 是靠一群蛋白把膜压弯的；下面是达到同一个弯曲的另外两条路",
      en: "**Curvature has several independent causes, and it is worth collecting them because curvature is the first step towards fusion.** One cause is the shape of a single lipid: cardiolipin carries four fatty acyl chains under one small head group, so it is cone-shaped and acts as a wedge that contracts one leaflet against the other — in E. coli it collects at the two poles of the rod-shaped cell, exactly where the curvature is sharpest. The other cause is a protein scaffold: BAR-domain proteins, named after the first three family members found, assemble into crescent-shaped dimers whose positively charged concave face grips the negatively charged membrane lipids PIP2 and PIP3 and holds the bilayer to that crescent. Some of them additionally drive an amphipathic helix — a helix with one water-liking face and one oil-liking face — into a single leaflet, physically expanding that leaflet against the other. Septins, a family of GTP-binding proteins, use the same amphipathic-helix trick during cell division, exocytosis, phagocytosis and apoptosis.",
      cn: "**膜的弯曲有好几个彼此独立的成因，值得一起收着，因为弯曲是走向融合的第一步。**成因之一是单个脂质的形状：cardiolipin（心磷脂）在一个很小的头基团下面挂着四条脂肪酰链，所以整体呈锥形，像一个楔子，把一片单层相对另一片挤紧 —— 在大肠杆菌里它明显聚集在杆状细胞的两极，正是弯曲最厉害的地方。 成因之二是蛋白搭的支架：BAR 结构域蛋白（名字来自最早发现的三个家族成员）组装成新月形二聚体，其带正电的凹面抓住带负电的膜脂 PIP2 和 PIP3，把双层膜按在这个新月的弧上。有些还会把一段两亲性螺旋（amphipathic helix，一面亲水、一面亲油的螺旋）楔进某一片单层，从物理上把那一片的面积撑得比另一片大。 Septin 是一类结合 GTP 的蛋白，在细胞分裂、胞吐、吞噬和凋亡时用的是同样的两亲性螺旋这一招。",
      src: "A p.382, figures 11-24 and 11-25"
    },
    {
      link_en: "and now what all that curvature is in aid of",
      link_cn: "那么这些弯曲究竟是为了什么",
      en: "**Membrane fusion is two continuous bilayers becoming one without either of them ever leaking**, and Lehninger sets out the five things a fusion protein has to accomplish: the two membranes must recognise each other; their surfaces must come close enough to displace the water bound to the polar head groups; their outer leaflets must merge first, a halfway state called hemifusion; the two bilayers must then merge completely; and where fusion is regulated, as it is in secretion, the whole sequence must wait for the right signal and fire only then.",
      cn: "**膜融合是两张连续的双层膜合成一张，而且全程哪一张都不漏。**Lehninger 列出了一个融合蛋白必须完成的五件事：两张膜必须互相识别；两个表面必须靠得足够近，把结合在极性头基团上的水挤走；两张膜的外侧单层先合并，这个中途状态叫半融合（hemifusion）；然后两张双层完全合并；而在受调控的融合里（比如分泌），整套流程必须等到正确的信号才启动。",
      src: "A pp.382–384, figure 11-26"
    },
    {
      link_en: "one protein family does all five, and a toxin proves how exactly",
      link_cn: "有一个蛋白家族把这五件事全做了，而一种毒素恰好证明了它做得多精确",
      en: "The SNARE proteins are the family that does all five, specifically and over and over. **A v-SNARE on the vesicle and a t-SNARE on the target membrane meet end to end and zip up into a bundle of four long alpha helices** — one of the four contributed by a third protein, SNAP25 — and the zipping physically hauls the two membranes into contact, through hemifusion and on into full fusion. That is exactly how a vesicle loaded with neurotransmitter fuses with a neuron's plasma membrane at a synapse and releases its contents. Botulinum toxin is a bacterial protease that cleaves SNARE proteins and SNAP25: the zipper never closes, the vesicle never fuses, no transmitter is released, and the muscle is paralysed — which is also what Botox does, in very small doses. Tetanus toxin cleaves the same family and produces rigid, locked muscle instead. Both toxins are precise because the zipper they cut is precise.",
      cn: "把这五件事全做了的，是 SNARE 蛋白这一家族，既特异又可以反复使用。**囊泡上的 v-SNARE 和靶膜上的 t-SNARE 端对端相遇，拉上拉链，形成一束由四条长 α 螺旋构成的束** —— 其中一条由第三个蛋白 SNAP25 贡献 —— 这个「拉拉链」的过程在物理上把两张膜拽到一起，经过半融合，一路进入完全融合。装满神经递质的囊泡在突触处与神经元质膜融合、把内容物放出去，走的正是这一套。肉毒毒素（botulinum toxin）是一种细菌蛋白酶，专门切 SNARE 蛋白和 SNAP25：拉链拉不上，囊泡融不了，递质放不出来，肌肉就瘫了 —— 这也正是 Botox 小剂量在做的事。破伤风毒素切的是同一个家族，结果反而是肌肉僵直锁死。两种毒素之所以精准，是因为它们剪的那条拉链本身就精准。",
      src: "A pp.382–384",
      see: [{ id: "L-12-6-1", en: "the synapse from the signalling side", cn: "从信号转导那一侧看突触" }]
    }
  ],
  terms: [
    { en: "leaflet", cn: "单层",
      def_en: "One of the two lipid sheets of a bilayer. The two differ in lipid composition, and that difference survives because lipids essentially do not cross between them.",
      def_cn: "双层膜的两片脂质层之一。两片的脂质组成不同，而这个差别之所以能维持，是因为脂质基本不在两片之间穿越。" },
    { en: "liquid-ordered / liquid-disordered", cn: "液态有序／液态无序",
      def_en: "The two ends of the fluidity spectrum. At one end the chains are packed with regular geometry and barely move; at the other they rotate and diffuse sideways. A real membrane sits between them, tuned by chain length, unsaturation and cholesterol.",
      def_cn: "流动性谱系的两端。一端链以规则几何紧密堆积、几乎不动；另一端链自由转动并侧向扩散。真实的膜介于两者之间，由链长、不饱和度和胆固醇含量共同调节。" },
    { en: "FRAP", cn: "光漂白后荧光恢复",
      def_en: "Fluorescence recovery after photobleaching. Tag membrane lipids or proteins with a fluorescent probe, bleach one small patch with a laser, and time how fast unbleached molecules diffuse back in. That refill rate is the lateral diffusion rate — milliseconds for lipids, up to 1 micrometre per second.",
      def_cn: "给膜脂或膜蛋白接上荧光探针，用激光把一小块漂白，再计时未漂白分子扩散回来的速度。这个「回填」速率就是侧向扩散速率 —— 脂质在毫秒级，最高可达每秒 1 微米。" },
    { en: "flip-flop", cn: "翻转",
      def_en: "Movement of a lipid from one leaflet of a bilayer to the other. Rare on its own, because a polar or charged head group has to be dragged through the hydrophobic core at a large positive free-energy cost. Its rarity is what keeps the two leaflets chemically different.",
      def_cn: "脂质从双层膜的一片单层移到另一片。自发时极其罕见，因为要把极性或带电的头基团拖过疏水核心，自由能代价很大。正是这种罕见维持了两片单层在化学组成上的差别。" },
    { en: "flippase, floppase and scramblase", cn: "翻转酶／外翻酶／乱翻酶",
      def_en: "Three classes of membrane protein that catalyse transbilayer lipid movement. The first drives aminophospholipids inward at about one ATP each and is related to P-type ATPases; the second drives lipids outward and belongs to the ABC transporter family; the third lets any phospholipid follow its own concentration gradient with no ATP, and switches on when a cell is activated, injured or dying.",
      def_cn: "催化脂质跨双层移动的三类膜蛋白。第一类把氨基磷脂往内层搬，每个约耗一个 ATP，与 P 型 ATP 酶同源；第二类把脂质往外层搬，属于 ABC 转运蛋白家族；第三类让任何磷脂顺着自身浓度梯度走，不耗 ATP，在细胞被激活、受损或濒死时被打开。" },
    { en: "membrane raft", cn: "膜筏",
      def_en: "A patch of bilayer where glycosphingolipids and cholesterol pack tightly together, slightly thicker and more ordered than the surrounding membrane. It sorts proteins by transmembrane helix length and concentrates receptors and signalling proteins so that partners meet more often; removing cholesterol disperses it and disrupts that signalling.",
      def_cn: "双层膜上糖鞘脂与胆固醇紧密堆积的一小片区域，比周围略厚、更有序。它按跨膜螺旋的长度筛选蛋白，并把受体与信号蛋白聚在一起，使需要相遇的搭档更常碰上；耗竭胆固醇会让它散开，那条信号通路也随之失灵。" },
    { en: "caveola", cn: "小凹",
      def_en: "An inward pit in the plasma membrane produced when enough caveolin dimers crowd into one cholesterol-rich patch and force the bilayer to curve. Flattening it back releases stored surface area, letting a cell swell without stretching its own lipid bilayer.",
      def_cn: "当足够多的 caveolin 二聚体挤进同一片富含胆固醇的区域、迫使双层膜向内弯曲时形成的小凹陷。把它重新展平就释放出储备的表面积，使细胞能胀大而不必拉伸自己的脂质双层。" },
    { en: "hemifusion", cn: "半融合",
      def_en: "The halfway state in membrane fusion: the two outer leaflets have merged while the two inner leaflets have not, so the two compartments are still separate and neither membrane has leaked.",
      def_cn: "膜融合过程中的中途状态：两张膜的外侧单层已经合并，内侧单层还没有，所以两个腔室仍然分开，两张膜都没有漏。" },
    { en: "SNARE", cn: "SNARE 蛋白",
      def_en: "The protein zipper that fuses a vesicle to a target membrane. A v-SNARE on the vesicle and a t-SNARE on the target zip into a four-helix bundle, one helix from SNAP25, pulling the two membranes together through hemifusion into full fusion. Botulinum and tetanus toxins are proteases that cut exactly these proteins.",
      def_cn: "把囊泡与靶膜融合起来的那条蛋白拉链。囊泡上的 v-SNARE 与靶膜上的 t-SNARE 拉成一个四螺旋束（其中一条螺旋来自 SNAP25），把两张膜拽到一起，经半融合进入完全融合。肉毒毒素与破伤风毒素正是切这几个蛋白的蛋白酶。" }
  ]
};

/* ------------------------------------------------------------------ L-11-3-1 */
window.BIOLITE_SPINE["L-11-3-1"] = {
  assumed: ["membrane", "lipid", "protein", "cell", "water", "atp", "adp", "enzyme",
            "ion", "gene", "glucose", "gradient", "concentration", "helix", "residue",
            "phosphate", "hydrolysis", "cytosol", "bilayer", "plasma membrane",
            "activation energy", "michaelis-menten", "kinetics", "mutation",
            "amino acid", "peptide", "subunit", "dimer", "kidney", "conformation"],
  nodeTitle_en: "Solute transport across membranes",
  nodeTitle_cn: "溶质的跨膜转运",
  title_en: "A bilayer lets almost nothing through, so every solute that crosses has a named protein and a named energy source",
  title_cn: "双层膜几乎什么都不让过，所以每一个能过去的溶质，背后都有一个有名有姓的蛋白和一笔说得清的能量",
  steps: [
    {
      en: "A pure lipid bilayer is almost completely impermeable to anything polar or charged, and the reason is water. A dissolved ion or sugar sits inside a shell of water molecules held to it by attraction; to enter the oily core of the bilayer it has to shed that hydration shell first, and the stripped, unpaired intermediate state is so unfavourable that the activation energy — the energy hill a molecule must climb before the change can happen — is impassably high on a biological timescale. The consequence is the whole of this chain: **essentially everything that crosses a membrane crosses through a protein, and about 2,000 human genes encode nothing else.**",
      cn: "纯脂质双层膜对任何带电或极性的东西几乎完全不通透，原因出在水身上。溶解在水里的离子或糖，外面裹着一层被吸引住的水分子（水化壳，hydration shell）；要进入双层膜中间那层油，它必须先把这层水壳脱掉，而这个被剥光、没有配对的中间状态极其不利 —— 于是活化能（activation energy，分子发生变化前必须翻过的那座能量小山）高到在生物时间尺度上根本翻不过去。这条线索的全部内容都由此而来：**凡是能过膜的东西，基本上都是从一个蛋白里过去的 —— 人类基因组里约有 2,000 个基因专门编码这类蛋白。**",
      src: "A pp.385–386, figure 11-29"
    },
    {
      link_en: "so what does that protein actually do to the hill?",
      link_cn: "那这个蛋白到底把那座山怎么了？",
      en: "**A transport protein does not abolish the cost of stripping the water off — it replaces the lost water contacts with its own noncovalent contacts, so the solute is never left bare**, and the hill it has to climb is much lower. That is the same trick an enzyme plays on a chemical reaction, which is why transport can be described in the language of enzymes at all. Lehninger sorts the routes across a membrane into four: simple diffusion, open only to a few nonpolar compounds; facilitated diffusion, where a transport protein carries a solute down its own gradient at no energy cost; active transport, where a protein pushes a solute up its gradient and must be paid for it; and ion channels, protein-lined holes. Active transport splits again by where the payment comes from — primary active transport is coupled directly to a chemical reaction such as ATP to ADP plus phosphate, secondary active transport is powered by letting a second solute run back down a gradient that primary transport built earlier.",
      cn: "**转运蛋白并没有取消「脱水壳」这笔开销 —— 它用自己的非共价接触去顶替失去的水分子接触，让溶质始终不至于赤裸**，于是那座山被压得低得多。这和酶对化学反应玩的是同一个花招，也正因如此，转运才能用酶的语言来描述。Lehninger 把过膜的路径分成四种：简单扩散（simple diffusion），只对少数非极性化合物开放；易化扩散（facilitated diffusion），转运蛋白顺着溶质自己的梯度把它带过去，不花能量；主动转运（active transport），蛋白把溶质逆着梯度往上推，必须有人付账；以及离子通道（ion channel），即由蛋白围出的孔。主动转运再按「谁付账」分成两种 —— 初级（primary）主动转运直接与一个化学反应偶联，比如 ATP 变成 ADP 加磷酸；次级（secondary）主动转运的动力，来自让另一个溶质沿着初级转运先前建好的梯度倒流回去。",
      src: "A p.385, figure 11-27"
    },
    {
      link_en: "before any of that, what counts as 'down a gradient' for an ion",
      link_cn: "在往下讲之前：对一个离子来说，什么叫「顺着梯度」",
      en: "An uncharged solute such as glucose is driven by one thing only: the difference in its concentration between the two sides. An ion is driven by two things at once, because it carries charge. One is that same concentration difference. The other is the membrane potential, Vm — the voltage across the membrane, measured in millivolts, which in most animal cells is negative inside. Vm opposes any movement that would make it larger and drives any movement that would reduce it. **The two together are the electrochemical gradient, and it is the only thing that decides whether an ion is running downhill or being pushed uphill** — a concentration difference on its own can point the wrong way.",
      cn: "像葡萄糖这样不带电的溶质，只受一件事驱动：它在膜两侧的浓度差。而离子同时受两件事驱动，因为它带电荷。一件仍是浓度差。另一件是膜电位 Vm（membrane potential） —— 跨膜的电压，以毫伏为单位，在多数动物细胞里内侧为负。Vm 会阻止任何使它变大的移动，推动任何使它变小的移动。**两者合起来叫电化学梯度（electrochemical gradient）；一个离子究竟是在「下坡」还是被「往上推」，只由它说了算** —— 单看浓度差是会指错方向的。",
      src: "A pp.385–386, figure 11-28"
    },
    {
      link_en: "the word 'carrier protein' covers two machines that are not alike",
      link_cn: "「载体蛋白」这个词底下其实是两台完全不同的机器",
      en: "A channel and a transporter differ in three measurable ways. Rate: a channel passes 10⁷ to 10⁸ ions per second, close to the physical limit set by diffusion, while a transporter is far slower — the Na⁺K⁺ ATPase manages about 100 per second. Saturability: a transporter has a maximum rate and saturates like an enzyme, a channel does not. Gating: **a channel has one gate and is simply open or shut, whereas a transporter has two gates on opposite sides of the membrane and the two are never open at the same time** — which is exactly why a transporter can never let its substrate leak straight through. A single channel usually stays open only milliseconds, so its activity is measured electrically rather than watched: patch-clamping seals the tip of a fine glass micropipette onto a scrap of membrane containing one or a few channels and records the picoampere current through it. As many as 10⁴ ions cross one channel in a millisecond, which is why a signal that begins with one or two molecules can end as a measurable electrical event.",
      cn: "通道（channel）和转运体（transporter）有三处可测量的差别。速率：通道每秒过 10⁷ 到 10⁸ 个离子，接近扩散所设的物理上限；转运体慢得多 —— Na⁺K⁺ ATP 酶每秒只有约 100 次。可饱和性：转运体像酶一样有最大速率、会饱和，通道不会。门控：**通道只有一个门，非开即关；而转运体有两个门，分别在膜的两侧，并且这两个门从不同时打开** —— 这正是转运体永远不可能让底物「直接漏过去」的原因。单个通道通常只开几毫秒，所以它的活动是用电学方法测的，而不是看出来的：膜片钳（patch-clamping）把一根细玻璃微吸管的尖端密封在一小片含一个或几个通道的膜上，记录流过的皮安级电流。一毫秒内可以有多达 10⁴ 个离子穿过一个通道 —— 所以一个从一两个分子起头的信号，最后能变成一个可测量的电学事件。",
      src: "A pp.386–387, figure 11-30"
    },
    {
      link_en: "the first anonymous 'carrier' given a name",
      link_cn: "把第一个无名「载体」叫出名字",
      en: "**GLUT1 is the transporter that carries glucose into the erythrocyte, the red blood cell, and it is facilitated diffusion in the flesh — about 50,000 times faster than glucose crossing unaided**, and costing nothing, because glucose is only moving down its own gradient. Since GLUT1 neither makes nor destroys glucose, its cycle is fully reversible, and its initial rate fits an equation of the Michaelis-Menten form, V₀ = Vmax[S]out / (Kt + [S]out), where Kt, the transport constant, plays the part Km plays for an enzyme: the outside concentration at which the transporter runs at half speed. GLUT1's Kt for D-glucose is about 6 mM and blood glucose is 4.5 to 5 mM, so GLUT1 normally works at roughly half its maximum — poised to speed up or slow down as blood glucose moves. Its stereospecificity is sharp: D-mannose, which differs by the position of a single hydroxyl, has Kt = 20 mM, D-galactose 30 mM, and the mirror-image L-glucose over 3,000 mM.",
      cn: "**GLUT1 就是把葡萄糖运进红细胞（erythrocyte）的那个转运体，也是「易化扩散」这个词的血肉版本 —— 比葡萄糖自己过膜快约 50,000 倍**，而且不花钱，因为葡萄糖只是在顺自己的梯度往下走。GLUT1 既不生成也不分解葡萄糖，所以它的循环完全可逆，初速度可以拟合成米氏方程的形式：V₀ = Vmax[S]out / (Kt + [S]out)，其中 Kt（转运常数）扮演的角色就是酶的 Km：转运体跑到半速时，膜外那一侧的浓度。GLUT1 对 D-葡萄糖的 Kt 约 6 mM，而血糖是 4.5 到 5 mM，所以 GLUT1 平时就工作在大约一半的速度上 —— 血糖一动，它随时可以加快或放慢。它的立体专一性很锐利：D-甘露糖只差一个羟基的位置，Kt 就是 20 mM；D-半乳糖 30 mM；镜像的 L-葡萄糖超过 3,000 mM。",
      src: "A p.387, figure 11-31"
    },
    {
      recall_en: "the two gates that are never open together — this is what they look like in one real protein",
      recall_cn: "上面说的「两个门从不同时开」，在一个真实蛋白里长这个样子",
      en: "GLUT1 is an integral membrane protein with 12 membrane-spanning helices, several of them amphipathic: polar residues on one face line a hydrophilic channel down the middle, nonpolar residues on the other face touch the membrane lipids. **Transport cycles it between two shapes — T1, with the glucose site open only to the outside, and T2, with the site open only to the inside** — through an intermediate in which the glucose is sequestered and reachable from neither side. Glucose binds T1, the shape change carries it across, T2 releases it inside, and the protein resets. No ATP is spent anywhere in that cycle, which is what makes facilitated diffusion passive. Humans have 12 GLUT proteins with different tissues and different Kt values; GLUT4, in muscle, fat and heart, is the one insulin controls: between meals about 90% of it sits parked in vesicles inside the cell, and insulin makes those vesicles fuse with the plasma membrane within minutes, raising glucose uptake fifteenfold or more. A failure to mobilise GLUT4 is what the glucose tolerance test detects.",
      cn: "GLUT1 是一个整合膜蛋白，有 12 条跨膜螺旋，其中几条是两亲性的：一面的极性残基衬出中间一条亲水通路，另一面的非极性残基贴着膜脂。**转运让它在两种构象之间循环 —— T1，葡萄糖位点只朝膜外开；T2，位点只朝膜内开** —— 中间还经过一个葡萄糖被封住、两侧都够不着的状态。葡萄糖结合在 T1 上，构象变化把它带过去，T2 在内侧把它放掉，蛋白复位。整个循环没有花掉任何 ATP —— 这正是易化扩散之所以是被动的原因。人有 12 个 GLUT 蛋白，分布的组织和 Kt 各不相同；其中 GLUT4 分布在肌肉、脂肪和心脏，是受胰岛素控制的那一个：两餐之间约 90% 的 GLUT4 停在细胞内的囊泡里，胰岛素一来，这些囊泡在几分钟内与质膜融合，使葡萄糖摄取提高十五倍甚至更多。糖耐量试验查的就是「GLUT4 调不动」这件事。",
      src: "A pp.388–390, figures 11-32 and 11-33, table 11-1, box 11-1"
    },
    {
      link_en: "three words that describe what a transporter carries, and one protein that makes them concrete",
      link_cn: "三个描述「转运体带什么」的词，以及一个把它们坐实的蛋白",
      en: "The three names are a count of substrates and their directions. **Uniport carries one solute only, and GLUT1 is one. Symport carries two solutes in the same direction. Antiport carries two in opposite directions.** None of the three says anything about whether energy is being spent. The worked antiport is the chloride–bicarbonate exchanger of the erythrocyte: carbon dioxide from the tissues enters the cell, carbonic anhydrase converts it to bicarbonate, and the bicarbonate has to get straight back out to be carried to the lungs. The exchanger — a dimeric protein crossing the membrane 14 times — speeds bicarbonate transport more than a millionfold, moving one bicarbonate out for one chloride in. Because one negative charge leaves for every one that enters, the exchange is electroneutral and does not disturb Vm. And the coupling is obligatory: take the chloride away and bicarbonate transport stops completely — the transporter physically cannot move one without the other.",
      cn: "这三个词数的是底物的个数和方向。**单向转运（uniport）只带一个溶质，GLUT1 就是；同向转运（symport）把两个溶质往同一方向带；反向转运（antiport）把两个溶质往相反方向带。**这三个词都没有说是否花了能量。反向转运的样板是红细胞的氯-碳酸氢根交换体（chloride–bicarbonate exchanger）：组织来的二氧化碳进入细胞，被碳酸酐酶转成碳酸氢根，而碳酸氢根必须马上出去才能被带到肺。这个交换体是一个跨膜 14 次的二聚体蛋白，把碳酸氢根的转运速率提高了一百万倍以上，每送出一个碳酸氢根就换进一个氯离子。因为出去一个负电荷、进来一个负电荷，这个交换是电中性的，不扰动 Vm。而且这个偶联是强制性的：把氯离子拿走，碳酸氢根的转运完全停止 —— 这个转运体在物理上就不能只搬一个而不搬另一个。",
      src: "A pp.390–391, figures 11-34 and 11-35"
    },
    {
      link_en: "now put a number on 'active transport needs energy'",
      link_cn: "现在给「主动转运需要能量」这句话配上数字",
      en: "For an uncharged solute the bill is ΔGt = RT ln(C₂/C₁): moving one mole against a tenfold concentration difference at 25 °C costs 5.7 kJ/mol, and against a ten-thousandfold difference, 23 kJ/mol. **Moving an ion without a partner of opposite charge separates charge and builds up voltage, and transport that does this is called electrogenic**, so a second term is added: ΔGt = RT ln(C₂/C₁) + ZFΔψ, where Z is the ion's charge, F is the Faraday constant and Δψ is the transmembrane potential. Pumping Ca²⁺ from a cytosol at 10⁻⁷ M out to a fluid at 10⁻³ M, across a 50 mV inside-negative membrane at 37 °C, costs 33 kJ/mol — and both terms work against the cell here, because Ca²⁺ is positive and the inside it is leaving is negative.",
      cn: "对不带电的溶质，账单是 ΔGt = RT ln(C₂/C₁)：在 25 °C 下把一摩尔溶质逆着十倍浓度差搬过去，要花 5.7 kJ/mol；逆着一万倍浓度差，要花 23 kJ/mol。**而搬动一个离子却不带上一个反号电荷的搭档，就会分离电荷、积累电压，这样的转运叫生电性的（electrogenic）**，于是账单要加第二项：ΔGt = RT ln(C₂/C₁) + ZFΔψ，其中 Z 是离子电荷数，F 是法拉第常数，Δψ 是跨膜电位。把 Ca²⁺ 从 10⁻⁷ M 的胞质泵到 10⁻³ M 的胞外液，在 37 °C、内负 50 mV 的膜上，要花 33 kJ/mol —— 而且这里两项都在跟细胞作对，因为 Ca²⁺ 带正电，而它要离开的那一侧是负的。",
      src: "A pp.391–392, worked examples 11-1 and 11-2"
    },
    {
      link_en: "the family that pays that bill with ATP, and how it does the paying",
      link_cn: "用 ATP 付这笔账的那个家族，以及它怎么付",
      en: "P-type ATPases are a family of at least 70 human cation pumps, and the P is for phosphorylation: during every transport cycle a conserved aspartate residue on the pump is phosphorylated and then dephosphorylated again. All of them are blocked by vanadate, an ion shaped like the transition state of phosphate transfer. The worked example is SERCA, the pump that clears Ca²⁺ out of the cytosol into the endoplasmic reticulum. It starts in a shape called E1, with two high-affinity Ca²⁺ sites open to the cytosol. Two Ca²⁺ bind, ATP phosphorylates Asp351, and the pump snaps into E2 — where the same two sites now face the other way and have low affinity, so the Ca²⁺ falls off on the far side. Dephosphorylation resets it to E1. **The whole design is one idea: use a phosphate group to switch a binding site between high affinity facing in and low affinity facing out, and the ion is carried across without ever being gripped in both places at once.** Two Ca²⁺ move per ATP.",
      cn: "P 型 ATP 酶（P-type ATPase）是一个至少有 70 个人类成员的阳离子泵家族，P 指的是磷酸化：每一个转运循环中，泵上一个保守的天冬氨酸残基先被磷酸化、再被去磷酸化。它们全都被钒酸盐（vanadate）抑制 —— 那是一种形状酷似磷酸转移过渡态的离子。样板是 SERCA，把 Ca²⁺ 从胞质清进内质网的那个泵。它从一个叫 E1 的构象出发，两个高亲和力的 Ca²⁺ 位点朝向胞质。两个 Ca²⁺ 结合上来，ATP 把 Asp351 磷酸化，泵翻成 E2 —— 同样这两个位点现在朝向另一侧，而且变成低亲和力，于是 Ca²⁺ 在对面掉了下来。去磷酸化把它复位到 E1。**整套设计就是一个念头：用一个磷酸基团去切换结合位点的「高亲和力朝里」和「低亲和力朝外」，离子就这样被送过去，而且从头到尾没有被两边同时抓住。**每水解一个 ATP 搬两个 Ca²⁺。",
      src: "A pp.392–394, figures 11-37 and 11-38"
    },
    {
      recall_en: "same family, same phosphorylated aspartate — this member is the one that sets the voltage in step 3",
      recall_cn: "同一个家族、同一个被磷酸化的天冬氨酸；这个成员正是第 3 步那个电压的来源",
      en: "**The Na⁺K⁺ ATPase is a P-type ATPase that moves two ions at once: per ATP hydrolysed it carries 3 Na⁺ out of the cell and 2 K⁺ in.** Three positive charges leave for every two that enter, so the pump is electrogenic, and it is directly responsible for the −50 to −70 mV resting membrane potential of most animal cells — the Vm that every ion movement above has to be reckoned against, and the voltage a neuron discharges when it fires. The price is enormous: about 25% of a resting human's entire energy budget is spent on this one reaction.",
      cn: "**Na⁺K⁺ ATP 酶是 P 型 ATP 酶的一个成员，它一次搬两种离子：每水解一个 ATP，把 3 个 Na⁺ 搬出细胞、2 个 K⁺ 搬进来。**出去三个正电荷、进来两个，所以这个泵是生电性的，而且它直接造就了多数动物细胞 −50 到 −70 mV 的静息膜电位 —— 也就是上面每一次离子移动都要拿来算账的那个 Vm，以及神经元放电时所释放的那个电压。代价极大：一个静息状态的人，全身约 25% 的能量预算花在这一个反应上。",
      src: "A p.394, figure 11-39",
      see: [{ id: "L-12-6-1", en: "what a neuron does with that voltage", cn: "神经元拿这个电压来做什么" }]
    },
    {
      link_en: "two more ATP-driven pumps, both moving protons, with opposite jobs",
      link_cn: "另外两类靠 ATP 驱动的泵，搬的都是质子，做的事却相反",
      en: "V-type and F-type ATPases are both proton pumps built from two pieces — a membrane-embedded channel domain and a peripheral domain that handles the ATP. V-type ATPases acidify compartments: fungal and plant vacuoles down to pH 3–6 against a cytosol at 7.5, and animal lysosomes, endosomes, the Golgi and secretory vesicles. F-type ATPases run the same machinery in either direction. **Driven by ATP they pump protons uphill; driven by a large enough proton gradient they run backwards and make ATP instead, and in that direction they are called ATP synthases** — the machine at the end of respiration and photosynthesis. So a pump and the cell's main ATP source are the same object read in opposite directions.",
      cn: "V 型和 F 型 ATP 酶都是质子泵，都由两部分构成 —— 一个嵌在膜里的通道结构域，和一个伸在膜外、处理 ATP 的结构域。V 型 ATP 酶负责把腔室酸化：真菌和植物的液泡可低到 pH 3–6（而胞质是 7.5），动物的溶酶体、内体、高尔基体和分泌囊泡也靠它。F 型 ATP 酶用的是同一套机器，但两个方向都能跑。**由 ATP 驱动时它把质子往高处泵；而当质子梯度足够大时，它倒着转，反过来合成 ATP —— 这个方向上它的名字叫 ATP 合酶**，也就是呼吸链和光合作用末端的那台机器。所以一个泵和细胞的主要 ATP 来源，其实是同一个物体从两个方向读出来的。",
      src: "A pp.394–395, figure 11-40",
      see: [{ id: "L-19-2-1", en: "the ATP synthase running forwards", cn: "ATP 合酶正着转的时候" }]
    },
    {
      link_en: "a second, unrelated ATP-driven family, and the disease it is famous for",
      link_cn: "第二个与之无亲缘关系的 ATP 驱动家族，以及它最出名的那个病",
      en: "**ABC transporters are named for two ATP-binding cassettes — nucleotide-binding domains — which sit beside two transmembrane domains of six helices each.** A substrate binds on the cytoplasmic side, ATP is hydrolysed, and the transporter flips to present the substrate outside, at about one ATP per molecule moved. They export amino acids, peptides, lipids, bile salts and drugs. MDR1 protects the brain and the placenta by pumping toxins back out, and the same activity pumps chemotherapy drugs such as doxorubicin out of a tumour cell — which is what multidrug resistance is. The family's odd member is CFTR: an ABC protein that works as a chloride channel rather than a pump. It opens when both of its nucleotide-binding domains have ATP bound and closes when the ATP on one of them is hydrolysed. Deleting a single residue, Phe508, misfolds it so badly that it is destroyed before it ever reaches the membrane — and that one deletion accounts for about 90% of cystic fibrosis.",
      cn: "**ABC transporter 的名字来自两个 ATP 结合「盒」（ATP-binding cassette，即核苷酸结合结构域），它们旁边是两个各含六条螺旋的跨膜结构域。**底物在胞质一侧结合，ATP 被水解，转运体翻转过来把底物呈递到膜外，大约每搬一个分子花一个 ATP。它们向外泵氨基酸、肽、脂质、胆盐和药物。MDR1 靠把毒物泵回去来保护大脑和胎盘，而同样的活性也会把多柔比星这类化疗药从肿瘤细胞里泵出去 —— 这就是「多药耐药」。这个家族里的异类是 CFTR：一个 ABC 家族的蛋白，干的却是氯离子通道的活，而不是泵。它在两个核苷酸结合结构域都结合上 ATP 时打开，在其中一个上的 ATP 被水解时关闭。只要删掉一个残基 Phe508，它就折叠得极其糟糕，还没到膜上就被销毁 —— 而这一个缺失就占了囊性纤维化病例的约 90%。",
      src: "A pp.395–398, box 11-2"
    },
    {
      recall_en: "the Na⁺ gradient the Na⁺K⁺ ATPase built two steps up is now spent as currency",
      recall_cn: "上面第两步里 Na⁺K⁺ ATP 酶建起来的那个 Na⁺ 梯度，这一步被当成货币花掉",
      en: "**Secondary active transport is a cell spending a gradient the way it would spend ATP.** In the cells lining the gut, a Na⁺-glucose symporter on the surface facing the gut contents lets 2 Na⁺ fall back into the cell and drags 1 glucose in with them, uphill, against glucose's own gradient. The arithmetic: with Na⁺ at 12 mM inside and 145 mM outside, a −50 mV membrane and 37 °C, one mole of Na⁺ coming back in releases 11.2 kJ, so two release 22.4 kJ — enough in principle to concentrate glucose about 6,000-fold inside the cell against the gut. The glucose then leaves through the opposite surface of the same cell into the blood, passively, through GLUT2. So absorbing one glucose from a meal takes three named transporters working in series: the symporter that pulls it in, GLUT2 that lets it out, and the Na⁺K⁺ ATPase quietly maintaining the Na⁺ gradient that pays for all of it. A relative of that symporter, SGLT2 in the kidney, is the target of the gliflozin drugs for type 2 diabetes — block it, glucose is not reabsorbed, and the excess leaves in the urine.",
      cn: "**次级主动转运，就是细胞把一个梯度当成 ATP 那样花掉。**在肠道上皮细胞朝向肠腔的那一面，有一个 Na⁺-葡萄糖同向转运体（Na⁺-glucose symporter）：它放 2 个 Na⁺ 顺梯度回流进细胞，同时把 1 个葡萄糖逆着葡萄糖自己的梯度一起拖进来。算一下账：Na⁺ 内 12 mM、外 145 mM，膜电位 −50 mV，37 °C，一摩尔 Na⁺ 回流释放 11.2 kJ，两摩尔就是 22.4 kJ —— 原则上足以把细胞内的葡萄糖浓缩到肠腔的约 6,000 倍。葡萄糖随后从同一个细胞的另一面被动地经 GLUT2 出去，进入血液。所以从一顿饭里吸收一个葡萄糖，需要三个有名字的转运体串联工作：把它拉进来的同向转运体、把它放出去的 GLUT2，以及在背后默默维持 Na⁺ 梯度、为这一切买单的 Na⁺K⁺ ATP 酶。这个同向转运体在肾脏里的亲戚 SGLT2，正是治疗 2 型糖尿病的「列净类（gliflozin）」药物的靶点 —— 把它堵住，葡萄糖就不被重吸收，多余的随尿排掉。",
      src: "A pp.398–399, figure 11-42, worked example 11-3"
    },
    {
      link_en: "water has the same problem as every other polar molecule, and its own protein",
      link_cn: "水和其他极性分子面对同一个问题，它也有自己的蛋白",
      en: "Aquaporins are the channels through which water crosses a membrane, eleven of them in mammals, each in its own tissues — AQP1 sits at about 2×10⁵ copies in every erythrocyte, and AQP2 in the collecting duct of the kidney is controlled by vasopressin, the antidiuretic hormone: more vasopressin, more water reabsorbed, less urine. The speed is the headline: water crosses an AQP1 channel at about 10⁹ per second, faster than the turnover of catalase, the fastest enzyme known, at 4×10⁷ per second. **And yet an aquaporin refuses to pass H₃O⁺, the hydrated proton — which it must, because letting protons leak through would collapse every electrochemical gradient the pumps above have built.**",
      cn: "水穿过膜走的通道叫水通道蛋白（aquaporin），哺乳动物有十一种，各有各的组织分布 —— AQP1 在每个红细胞里约有 2×10⁵ 个拷贝；而肾脏集合管里的 AQP2 受抗利尿激素 vasopressin 控制：vasopressin 多，重吸收的水就多，尿就少。最抢眼的是速度：水穿过一个 AQP1 通道约为每秒 10⁹ 次，比已知最快的酶——过氧化氢酶（catalase）——每秒 4×10⁷ 次的周转还快。**但即便如此，水通道蛋白拒绝让 H₃O⁺（水合质子）通过 —— 它必须拒绝，因为一旦质子漏得过去，上面那些泵辛苦建起来的每一个电化学梯度都会塌掉。**",
      src: "A pp.399–401, table 11-3"
    },
    {
      recall_en: "back to the hydration shell of step 1 — a channel that strips it deliberately, and uses the stripping to choose",
      recall_cn: "回到第 1 步那层水化壳 —— 有一个通道故意把它剥掉，并且靠「剥」来挑客人",
      en: "The K⁺ channel passes K⁺ about 10⁴ times more readily than Na⁺, even though Na⁺ is the smaller ion — 0.95 Å against 1.33 Å. Four identical subunits form a cone, wide end outside, each contributing two membrane-spanning helices and a short pore helix. An ion enters a wide water-filled vestibule on the cytosolic side, keeping its hydration shell; about two-thirds of the way across, the channel narrows into the selectivity filter and the water has to come off. **The backbone carbonyl oxygens lining the filter take the water's place, and they are spaced to fit a dehydrated K⁺ almost exactly. Na⁺, being smaller, cannot reach all of those oxygens at once, so nothing pays it back for the water it lost — and it stays out.** Selectivity here comes from a set of substitute partners: only one ion fits the spacing of those oxygens, and the width of the hole has nothing to do with it. Four K⁺ sites lie in the filter and ions move through in pairs, hopping from sites 1 and 3 to sites 2 and 4, their mutual repulsion keeping them moving; the two arrangements differ so little in energy that the filter is flat rather than hilly, which is how one channel manages near-diffusion-limited flux and sharp specificity at the same time.",
      cn: "K⁺ 通道让 K⁺ 通过的容易程度约为 Na⁺ 的 10⁴ 倍，尽管 Na⁺ 是更小的那个离子 —— 0.95 Å 对 1.33 Å。四个相同的亚基围成一个锥形（宽端朝细胞外），每个亚基贡献两条跨膜螺旋和一小段孔螺旋。离子从胞质一侧进入一个宽阔的、充满水的前庭，水化壳仍在；走到约三分之二处，通道收窄成选择性过滤器（selectivity filter），水必须脱掉。**衬在过滤器里的主链羰基氧顶替了水的位置，而它们的间距恰好几乎完美地容纳一个脱水的 K⁺。Na⁺ 更小，没法同时够到所有这些氧原子，于是没有任何东西补偿它失去的水 —— 它就进不去。**这里的选择性来自一套「替补搭档」：只有一种离子配得上这圈羰基氧的间距，与孔的宽窄无关。过滤器里有四个 K⁺ 位点，离子成对通过，从 1、3 号位跳到 2、4 号位，彼此的静电排斥推着它们往前走；两种排布的能量差极小，所以过滤器的能量地形是平的而不是一座座山 —— 这正是同一个通道既能接近扩散极限、又能保持锐利专一性的原因。",
      src: "A pp.402–403, figure 11-45"
    }
  ],
  terms: [
    { en: "hydration shell", cn: "水化壳",
      def_en: "The layer of water molecules held around a dissolved ion or polar solute. It has to come off before the solute can enter the oily core of a bilayer, and the cost of removing it is why pure membranes are impermeable to polar species.",
      def_cn: "围在溶解的离子或极性溶质外面的一层水分子。溶质要进入双层膜中间那层油，必须先把它脱掉；脱掉它的代价，正是纯膜对极性物质不通透的原因。" },
    { en: "electrochemical gradient", cn: "电化学梯度",
      def_en: "The two forces acting on an ion taken together — the difference in its concentration across the membrane, and the membrane potential Vm. Only the combination says whether an ion is running downhill; concentration alone can point the wrong way.",
      def_cn: "作用在离子上的两种力的合计 —— 它跨膜的浓度差，加上膜电位 Vm。只有两者合起来才能判断离子是不是在下坡；单看浓度差可能指错方向。" },
    { en: "channel versus transporter", cn: "通道与转运体的区别",
      def_en: "Three differences. Rate: 10⁷–10⁸ ions per second against roughly 10²; saturability: a transporter has a maximum rate, a channel does not; gating: one gate against two that are never open together, which is why a transporter cannot leak.",
      def_cn: "三处差别。速率：每秒 10⁷–10⁸ 个离子，对约 10² 次；饱和性：转运体有最大速率，通道没有；门控：一个门，对两个从不同时打开的门 —— 后者正是转运体不会漏的原因。" },
    { en: "Kt", cn: "转运常数",
      def_en: "The transport constant of a passive transporter: the outside solute concentration at which it runs at half its maximum rate, playing the same part Km plays for an enzyme. GLUT1's value for D-glucose, about 6 mM, sits just above blood glucose.",
      def_cn: "被动转运体的转运常数：转运体达到最大速率一半时膜外的溶质浓度，作用与酶的 Km 相同。GLUT1 对 D-葡萄糖的值约 6 mM，刚好略高于血糖。" },
    { en: "uniport, symport and antiport", cn: "单向／同向／反向转运",
      def_en: "A count of substrates and directions: one solute alone; two in the same direction; two in opposite directions. The classification says nothing about whether energy is being spent.",
      def_cn: "对底物个数与方向的计数：只带一个溶质；两个同向；两个反向。这个分类完全不涉及是否花费能量。" },
    { en: "electrogenic transport", cn: "生电性转运",
      def_en: "Transport that moves net charge across a membrane and therefore changes the voltage across it. The Na⁺K⁺ ATPase, sending 3 Na⁺ out for 2 K⁺ in, is the standard case and is what sets the resting membrane potential.",
      def_cn: "净电荷被搬过膜、因而改变跨膜电压的转运。Na⁺K⁺ ATP 酶送出 3 个 Na⁺、送进 2 个 K⁺，是标准例子，也正是静息膜电位的来源。" },
    { en: "P-type ATPase", cn: "P 型 ATP 酶",
      def_en: "A cation pump that is phosphorylated on a conserved aspartate during each transport cycle, switching an ion-binding site between high affinity facing one side and low affinity facing the other. SERCA and the Na⁺K⁺ pump are members; vanadate blocks all of them.",
      def_cn: "一类阳离子泵，在每个转运循环中于一个保守的天冬氨酸上被磷酸化，从而把离子结合位点在「朝一侧、高亲和力」与「朝另一侧、低亲和力」之间切换。SERCA 与 Na⁺K⁺ 泵都是成员；钒酸盐能抑制它们全部。" },
    { en: "ABC transporter", cn: "ABC 转运蛋白",
      def_en: "A pump named for its two ATP-binding cassettes, exporting drugs, lipids, peptides and bile salts at about one ATP per molecule. MDR1 causes multidrug resistance in tumours; CFTR is the family member that behaves as a chloride channel instead, and its Phe508 deletion causes most cystic fibrosis.",
      def_cn: "以其两个 ATP 结合盒命名的泵，向外输出药物、脂质、肽和胆盐，约每分子花一个 ATP。MDR1 造成肿瘤的多药耐药；CFTR 是这个家族里行为像氯通道的异类，它缺失 Phe508 便导致大多数囊性纤维化。" },
    { en: "secondary active transport", cn: "次级主动转运",
      def_en: "Uphill movement of one solute paid for by letting another run back down a gradient that a primary pump built earlier. The gut's Na⁺-glucose symporter is the case: 2 Na⁺ falling in can concentrate glucose about 6,000-fold.",
      def_cn: "把一个溶质往上搬，账由另一个溶质沿着初级泵先前建好的梯度倒流回来支付。肠道的 Na⁺-葡萄糖同向转运体是范例：2 个 Na⁺ 回流可以把葡萄糖浓缩约 6,000 倍。" },
    { en: "selectivity filter", cn: "选择性过滤器",
      def_en: "The narrow stretch of a K⁺ channel where an ion must give up its hydration shell and is caught instead by backbone carbonyl oxygens spaced to fit dehydrated K⁺. Na⁺ is too small to reach them all at once, which is why the smaller ion is the one excluded.",
      def_cn: "K⁺ 通道中最窄的一段，离子在这里必须交出水化壳，转而被一圈主链羰基氧接住，而这些氧的间距正好容纳脱水的 K⁺。Na⁺ 太小，无法同时够到所有这些氧 —— 所以被挡在外面的反而是更小的那个离子。" }
  ]
};

/* ------------------------------------------------------------------ L-12-1-1 */
window.BIOLITE_SPINE["L-12-1-1"] = {
  assumed: ["cell", "protein", "membrane", "plasma membrane", "enzyme", "hormone",
            "gene", "transcription", "nucleus", "concentration", "atp", "phosphate",
            "phosphorylation", "kinase", "receptor", "ion", "gradient",
            "membrane potential", "affinity", "insulin", "light", "cytosol"],
  nodeTitle_en: "General features of signal transduction",
  nodeTitle_cn: "信号转导的一般特征",
  title_en: "Turning information into chemistry: eight properties, four steps, four receptor types, ten kinds of part",
  title_cn: "把信息变成化学：八个性质、四个步骤、四类受体、十种零件",
  steps: [
    {
      en: "**A signal reaching a cell is information, and what the cell does with it is convert that information into a chemical change. That conversion is what the word signal transduction names**, and Lehninger calls it a universal property of living cells. A ligand — the molecule carrying the signal, a hormone or a neurotransmitter or an odour — is detected by a receptor, a protein with a binding site shaped for that ligand and no other. Read any pathway by looking for the step where information turns into chemistry; everything after that step is ordinary biochemistry.",
      cn: "**到达细胞的信号是「信息」，而细胞对它做的事，是把这份信息转换成一个化学变化。这个转换就是「信号转导（signal transduction）」这个词所指的东西**，Lehninger 称它是活细胞的普遍性质。 配体（ligand） —— 携带信号的那个分子，可以是激素、神经递质或一种气味 —— 被受体（receptor）探测到；受体是一个蛋白，它的结合位点只对这个配体成形，对别的不成形。读任何一条通路时，都去找「信息变成化学」的那一步；那一步之后的一切，都是普通的生物化学。",
      src: "A p.408, §12.1"
    },
    {
      link_en: "the conversion always runs in the same four steps",
      link_cn: "这个转换永远按同样的四步走",
      en: "Step one, a ligand binds its receptor. Step two, the activated receptor acts on the cell's own machinery, either producing a second signal or changing the activity of some protein directly — and the small molecule that carries the message onward inside the cell is called a second messenger. Step three, the metabolism of the target cell — the cell that carries the receptor — changes. Step four, the transduction event ends. **Learn it as four steps and not three: the ending is a step in its own right, and it is the one an answer usually drops.** A signal that could not be switched off would leave the cell stuck in one state for good.",
      cn: "第一步，配体结合到它的受体上。第二步，被激活的受体作用于细胞自身的机器，要么生成一个「第二信号」，要么直接改变某个蛋白的活性 —— 而在细胞内部把消息继续带下去的那个小分子，叫第二信使（second messenger）。第三步，靶细胞的代谢发生改变。第四步，这次转导事件结束。**要按四步记，别按三步：「结束」本身就是独立的一步，而它恰恰是答题时最常被漏掉的一步。**一个关不掉的信号，会让细胞永远卡在同一个状态里。",
      src: "A pp.410–411"
    },
    {
      link_en: "eight properties are shared by every signalling system there is. The first is why the right cell responds",
      link_cn: "所有信号系统共有八个性质。第一个解释的是「为什么响应的是对的那个细胞」",
      en: "**Specificity: the ligand fits the binding site of its complementary receptor, and other molecules in the same fluid do not fit and are ignored.** This is the lock-and-key argument moved from enzymes to receptors. What it buys: a hormone can be released into the bloodstream, which reaches every cell in the body, and still act only on the cells that carry its receptor.",
      cn: "**特异性（specificity）：配体正好嵌进与之互补的受体的结合位点，而同一份体液里的其他分子嵌不进去，也就被无视了。**这是把「锁与钥匙」的论证从酶搬到了受体上。它换来什么：一个激素可以被释放进血液、流经全身每一个细胞，却只对带有它受体的那些细胞起作用。",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "the second is why so little of the ligand is needed",
      link_cn: "第二个解释的是「为什么只要那么一点点配体」",
      en: "**Sensitivity: the receptor holds its ligand with high affinity, which is the same as saying it has a low dissociation constant — the ligand concentration at which half the receptors are occupied.** Because that concentration is low, a very dilute signal is already enough to fill the receptors. What it buys: a hormone can work at nanomolar concentrations, so the cell that makes it does not have to make much.",
      cn: "**敏感性（sensitivity）：受体以很高的亲和力抓住配体 —— 换句话说，它的解离常数（dissociation constant）很低，也就是「一半受体被占据时所需的配体浓度」很低。**正因为这个浓度低，非常稀的信号就已经足以把受体填满。它换来什么：激素可以在纳摩尔级浓度下工作，所以产生它的细胞不必生产很多。",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "the third is the reason cascades exist at all",
      link_cn: "第三个是「级联为什么存在」的全部理由",
      en: "**Amplification: when an enzyme activates an enzyme, which activates another enzyme, the number of affected molecules grows geometrically down the chain.** One activated receptor turns on many copies of the next protein, each of which turns on many of the next. What it buys: a handful of hormone molecules at the cell surface can reorganise the metabolism of a whole cell — and this is the single reason a signalling pathway is built as a cascade rather than as one protein doing the job.",
      cn: "**放大（amplification）：一个酶激活一个酶，那个酶再激活另一个酶，于是受影响的分子数沿着这条链呈几何级数增长。**一个被激活的受体能打开下一级蛋白的许多份拷贝，每一份又打开再下一级的许多份。它换来什么：细胞表面区区几个激素分子，就能把整个细胞的代谢重排一遍 —— 而这正是信号通路之所以被造成「级联」、而不是让一个蛋白独自完成任务的唯一理由。",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "the fourth is why the cell can afford so many pathways",
      link_cn: "第四个解释的是「细胞怎么养得起这么多条通路」",
      en: "**Modularity: proteins with several binding surfaces at once — multivalent proteins — assemble different signalling complexes out of the same interchangeable parts**, and phosphorylation supplies interaction points that can be created and removed at will. Attaching a phosphate to a protein makes a new binding site; taking it off destroys that site again. What it buys: the cell does not need a bespoke protein for every pathway. It recombines a short parts list, which is what makes the whole system affordable.",
      cn: "**模块化（modularity）：一些蛋白同时带着好几个结合面（称为多价蛋白，multivalent protein），它们用同一批可互换的零件拼出不同的信号复合体**；而磷酸化则提供了可以随时造出、又随时抹掉的相互作用位点。给一个蛋白接上一个磷酸基团，就造出一个新的结合位点；把它拿掉，这个位点就没了。它换来什么：细胞不必为每条通路专门定制一套蛋白。它只是把一份很短的零件清单反复重组 —— 整套系统之所以养得起，靠的就是这个。",
      src: "A p.410, figure 12-1",
      see: [{ id: "L-12-5-1", en: "modularity worked out in detail — adaptors and SH2 domains", cn: "模块化的具体机制 —— 衔接蛋白与 SH2 结构域" }]
    },
    {
      link_en: "the fifth is why a constant signal does not give a constant response",
      link_cn: "第五个解释的是「为什么信号一直在，反应却没了」",
      en: "**Desensitization, also called adaptation: activating a receptor also triggers a feedback circuit that switches that same receptor off, or pulls it off the cell surface altogether.** The system turns itself down while the ligand is still there. What it buys: the cell reports changes rather than levels — which is why a smell fades within a minute of walking into a room, while the odour molecules are still in the air.",
      cn: "**脱敏（desensitization），也叫适应（adaptation）：激活一个受体的同时，也会触发一条反馈回路，把这同一个受体关掉，或者干脆把它从细胞表面撤下来。**配体还在，系统已经自己把音量调小了。它换来什么：细胞报告的是「变化」而不是「水平」 —— 所以你走进一个房间，一分钟后就闻不到那股味道了，尽管气味分子仍在空气里。",
      src: "A p.410, figure 12-1",
      see: [{ id: "L-12-3-1", en: "the same desensitization in smell and vision", cn: "嗅觉与视觉里的同一套脱敏机制" }]
    },
    {
      link_en: "the sixth and seventh are the arithmetic of many signals at once",
      link_cn: "第六和第七个，是「同时来了很多信号」时的算术",
      en: "**Integration: when two signals push the same second messenger, or the same membrane potential, in opposite directions, what the cell does is determined by the net of the two.** A cell adds its inputs rather than obeying whichever arrived last. Divergence is the mirror image: one activated receptor is not one output — it can drive two or more pathways that end in different places. Together these two say that a signalling network is not a set of separate wires: many inputs converge on one decision, and one input fans out to several.",
      cn: "**整合（integration）：当两个信号把同一个第二信使、或同一个膜电位往相反方向推时，细胞的行为由两者的净和决定。**细胞把输入加起来，而不是服从最后到的那一个。发散（divergence）是它的镜像：一个被激活的受体并不等于一个输出 —— 它可以驱动两条甚至更多条通路，终点各不相同。 两条合起来说明：信号网络并非一根根彼此隔离的接线 —— 多个输入汇聚成一个决定，一个输入又扇出成好几条。",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "the eighth answers a question the cascade picture itself raises",
      link_cn: "第八个回答的，是「级联」这幅图自己引出的一个问题",
      en: "If a second messenger dissolves freely in the cytosol, why is the response not felt across the whole cell? **Localized response: the enzyme that destroys the messenger is clustered together with the enzyme that makes it, so the messenger is degraded before it can diffuse to distant points.** What it buys: the response stays local and stays brief — the sink is parked next to the source.",
      cn: "如果第二信使能自由溶解在胞质里，为什么整个细胞不会一起响应？**局域化响应（localized response）：销毁这个信使的酶，和制造它的酶挤在一起，所以信使还没扩散到远处就已经被降解掉了。** 它换来什么：反应既局限在原地，又很短暂 —— 因为「下水口」就装在「水龙头」旁边。",
      src: "A p.410, figure 12-1"
    },
    {
      link_en: "with the eight properties in hand, the size of the problem they solve",
      link_cn: "八个性质拿在手上了，再看它们要解决的问题有多大",
      en: "The list of things a cell responds to is enormous: antigens, cell-surface glycoproteins, developmental signals, extracellular matrix components, growth factors, hormones, lack of oxygen, light, mechanical touch, pathogens, neurotransmitters, nutrients, odorants, pheromones and tastants. **And all of it is handled by machinery built from about ten basic types of protein component** — seven-transmembrane receptors, G proteins, membrane enzymes that make or destroy cyclic nucleotides, kinases that phosphorylate those receptors, membrane tyrosine kinases, cyclic-nucleotide-dependent kinases, calcium-binding proteins, calcium-dependent kinases, kinases active during cell division, and non-enzymic scaffold proteins. The ratio is the thing to keep, and it is modularity's payoff in one number: an enormous input space handled by a very short parts list.",
      cn: "细胞需要响应的东西列出来长得吓人：抗原、细胞表面糖蛋白、发育信号、细胞外基质成分、生长因子、激素、缺氧、光、机械触碰、病原体、神经递质、营养物、气味分子、信息素、味觉物质。**而这一切，都由大约十种基本类型的蛋白零件搭出来的机器来处理** —— 七次跨膜受体、G 蛋白、生成或降解环核苷酸的膜酶、给这些受体做磷酸化的激酶、膜上的酪氨酸激酶、依赖环核苷酸的激酶、结合钙的蛋白、依赖钙的激酶、在细胞分裂期活跃的激酶，以及不具酶活性的支架蛋白。要记住的是这个比值，它就是模块化的红利浓缩成一个数字：极其庞大的输入空间，交给一份极短的零件清单。",
      src: "A pp.410–411, tables 12-1 and 12-2"
    },
    {
      link_en: "those parts are wired into exactly four kinds of receptor, sorted by how the signal gets across the membrane",
      link_cn: "这些零件搭成的受体只有四类，分类标准是「信号怎么过膜」",
      en: "**One: G protein-coupled receptors, which act indirectly — the activated receptor switches on a G protein, a protein that binds GTP, and the G protein switches on an enzyme that makes a second messenger.** Adrenaline acting on a beta-adrenergic receptor is the worked case. Two: receptor enzymes, which carry a catalytic activity on their own cytoplasmic end, switched on by ligand binding on the outside — most often a tyrosine kinase, an enzyme that phosphorylates tyrosine residues of chosen target proteins; the insulin receptor is one. Three: gated ion channels, which open or close in response to a ligand or to a change in membrane voltage; Lehninger calls these the simplest signal transducers there are. Four: nuclear receptors, which bind a ligand such as an oestrogen and then change the rate at which particular genes are transcribed.",
      cn: "**第一类：G 蛋白偶联受体（GPCR），它是间接起作用的 —— 被激活的受体先打开一个 G 蛋白（一种结合 GTP 的蛋白），G 蛋白再打开一个制造第二信使的酶。**肾上腺素作用于 β-肾上腺素能受体就是范例。第二类：受体酶（receptor enzyme），它自己朝向胞质的那一端就带着催化活性，由膜外的配体结合打开 —— 最常见的是酪氨酸激酶，也就是给选定靶蛋白的酪氨酸残基加磷酸的酶；胰岛素受体就是其中之一。 第三类：门控离子通道，响应配体或膜电压的变化而开或关；Lehninger 称它们是最简单的信号转导器。 第四类：核受体（nuclear receptor），结合像雌激素这样的配体，然后改变特定基因被转录的速率。",
      src: "A p.411, figure 12-2",
      see: [
        { id: "L-12-6-1", en: "gated ion channels, the third type, in full", cn: "第三类：门控离子通道的完整内容" },
        { id: "L-12-3-1", en: "GPCRs, the first type, at work in the senses", cn: "第一类：GPCR 在感官中的工作" }
      ]
    },
    {
      recall_en: "three of the four types transduce across the membrane; the fourth does something different",
      recall_cn: "四类里有三类是「跨膜转导」，第四类做的事不一样",
      en: "**The nuclear receptor is the odd one out, because with it nothing is transduced across the membrane at all: the ligand is small and oily enough to cross the bilayer by itself**, so it goes in and meets its receptor inside the cell. The other three all exist to solve the problem that the ligand cannot get in. That is also why steroid hormones act slowly, in hours rather than seconds — their effect is a change in how much of a protein gets made, not a change in an enzyme that already exists.",
      cn: "**核受体是四类里的异类，因为在它这里根本没有任何东西被「跨膜转导」：它的配体又小又油，自己就能穿过双层膜**，于是直接进到细胞里面去见受体。另外三类之所以存在，正是为了解决「配体进不去」这个问题。这也是类固醇激素起效慢、以小时而非秒计的原因 —— 它改变的是某个蛋白被造出来多少，而不是某个已经存在的酶的活性。",
      src: "A p.411, figure 12-2",
      beyond: true,
      beyondNote: "That the ligand of a nuclear receptor crosses the bilayer unaided, and the resulting slow timescale of steroid action, are standard and examinable; §12.1 states only that nuclear receptors bind their ligand and change transcription rates."
    },
    {
      link_en: "one warning, which the section saves for the end on purpose",
      link_cn: "最后一个提醒，这一节是故意留到结尾说的",
      en: "A signalling protein is normally named after the situation in which somebody first found it, and then turns out to act somewhere else entirely. **The name is a historical accident recording a discovery, and it is no description of what the protein does.** What follows for revision: do not reason from a name to a function, and do not be surprised when the same protein turns up again under a different heading — in this chapter that is the normal case.",
      cn: "信号蛋白通常是按「谁第一次在什么情境下发现它」来命名的，而后来往往发现它作用于完全不同的地方。**名字是一次发现留下的历史偶然，它并不描述这个蛋白在做什么。** 由此得到的复习原则：不要从名字去推功能；同一个蛋白在另一个标题下再次出现时也不必惊讶 —— 在这一章里，这才是常态。",
      src: "A p.411"
    }
  ],
  terms: [
    { en: "signal transduction", cn: "信号转导",
      def_en: "The conversion of information — a signal picked up by a specific receptor — into a chemical change inside the cell. Lehninger calls it a universal property of living cells, and it always runs in four steps ending with termination.",
      def_cn: "把信息（被特异受体捕捉到的信号）转换成细胞内部的化学变化。Lehninger 称之为活细胞的普遍性质；它总是按四个步骤进行，最后一步是「结束」。" },
    { en: "ligand", cn: "配体",
      def_en: "The molecule that carries the signal and binds the receptor — a hormone, a neurotransmitter, a growth factor, an odour molecule, a nutrient. Its fit into one binding site and no other is what gives a signalling system its specificity.",
      def_cn: "携带信号并结合受体的那个分子 —— 激素、神经递质、生长因子、气味分子、营养物都可以是。它只嵌得进某一个结合位点而嵌不进别的，这正是信号系统特异性的来源。" },
    { en: "second messenger", cn: "第二信使",
      def_en: "A small intracellular molecule whose concentration rises or falls when a receptor is activated, carrying the message onward inside the cell. Because it is freely soluble, the enzyme that destroys it is parked beside the enzyme that makes it, which keeps the response local.",
      def_cn: "一种细胞内的小分子，受体被激活时它的浓度上升或下降，从而把消息在细胞内部继续带下去。由于它可以自由溶解扩散，销毁它的酶就被安置在制造它的酶旁边，以此把反应限制在局部。" },
    { en: "amplification", cn: "放大",
      def_en: "The geometric growth in the number of affected molecules when enzymes switch on enzymes down a chain. It is the whole reason a pathway is built as a cascade, and why a few molecules at the surface can reorganise a cell.",
      def_cn: "酶一级一级地打开酶时，受影响分子数呈几何级数增长。这就是通路被造成级联的全部理由，也是表面上区区几个分子就能把细胞重排一遍的原因。" },
    { en: "desensitization", cn: "脱敏",
      def_en: "A feedback circuit set off by receptor activation that switches the same receptor off or removes it from the cell surface, so a steady signal stops producing a steady response. It is why a smell fades while the odour is still present.",
      def_cn: "受体被激活时同时触发的一条反馈回路，把这个受体关掉或从细胞表面撤走，于是持续的信号不再产生持续的反应。气味还在、人却闻不到了，原因就在这里。" },
    { en: "integration and divergence", cn: "整合与发散",
      def_en: "Two opposite bookkeeping rules. Many inputs pushing one second messenger or one membrane potential in opposite directions give a single net result; one activated receptor can drive several pathways ending in different places.",
      def_cn: "两条方向相反的记账规则。多个输入把同一个第二信使或同一个膜电位往相反方向推时，得到的是一个净结果；而一个被激活的受体可以驱动好几条通路，终点各不相同。" },
    { en: "the four receptor types", cn: "四类受体",
      def_en: "Sorted by how the signal gets across the membrane. G protein-coupled receptors work through a GTP-binding protein on an enzyme that makes a messenger; receptor enzymes carry catalytic activity, usually a tyrosine kinase, on their cytoplasmic end; gated ion channels open or shut; nuclear receptors bind a ligand that crossed the membrane by itself and change transcription rates.",
      def_cn: "按「信号怎么过膜」分类。G 蛋白偶联受体通过一个结合 GTP 的蛋白去作用于制造信使的酶；受体酶在朝向胞质的那一端带着催化活性（通常是酪氨酸激酶）；门控离子通道就是开与关；核受体结合的是自己穿过膜进来的配体，改变的是转录速率。" }
  ]
};

/* ------------------------------------------------------------------ L-12-3-1
   Brief node: the source carries a mustKnow and a summary only (§12.3, A pp.429-432).
   Seven steps is what is actually there. */
window.BIOLITE_SPINE["L-12-3-1"] = {
  assumed: ["cell", "protein", "membrane", "plasma membrane", "enzyme", "hormone",
            "receptor", "ligand", "ion", "second messenger", "signal transduction",
            "membrane potential", "phosphorylation", "brain", "camp", "gtp",
            "concentration", "amplification"],
  nodeTitle_en: "GPCRs in vision, olfaction and gustation",
  nodeTitle_cn: "视觉、嗅觉与味觉里的 GPCR",
  title_en: "The senses were built out of the hormone machinery, with nothing new invented",
  title_cn: "感官是用激素那套机器搭出来的，一样新东西都没发明",
  steps: [
    {
      en: "Seeing, smelling and tasting all pose one problem: something outside a cell — a particle of light, a molecule of odour, a molecule of taste — has to become a change inside it. **Vertebrates solved all three with the same three pieces of hardware they already used for hormones: a G protein-coupled receptor, a heterotrimeric G protein, and a change in the membrane potential of a sensory neuron.**",
      cn: "看见、闻到、尝到，面对的其实是同一个问题：细胞外的某样东西 —— 一个光粒子、一个气味分子、一个味觉分子 —— 必须变成细胞内的一个变化。**脊椎动物解决这三件事，用的是它早已用来应付激素的同样三件硬件：一个 G 蛋白偶联受体（GPCR）、一个异三聚体 G 蛋白，以及一个感觉神经元膜电位的改变。**",
      src: "A p.432, §12.3 summary"
    },
    {
      link_en: "the middle piece, named properly",
      link_cn: "把中间那件硬件的名字说清楚",
      en: "**A heterotrimeric G protein is a switch made of three different subunits that sits on the inner face of the membrane and holds GTP when it is on.** An activated receptor turns it on; it then turns an effector enzyme on or off. Because one receptor can switch on many G proteins in turn, this is where the amplification comes from — the receptor supplies the specificity, and its handover to the G protein supplies the gain. Those are exactly the two jobs a GPCR does for a hormone.",
      cn: "**异三聚体 G 蛋白（heterotrimeric G protein）是一个由三种不同亚基组成的开关，趴在膜的内侧面，处于「开」的状态时手里握着 GTP。**被激活的受体把它打开，它再去打开或关闭一个效应酶。由于一个受体可以接连打开许多个 G 蛋白，放大就是从这里来的 —— 受体提供特异性，它交棒给 G 蛋白提供增益。这恰好就是 GPCR 为激素做的那两件事。",
      src: "A p.432"
    },
    {
      link_en: "vision is the worked case, and it has one extra part",
      link_cn: "视觉是走通的样板，它多出一个零件",
      en: "**Rhodopsin is the GPCR of a retinal rod cell, and what makes it able to see is a small light-absorbing molecule bound inside it, called a chromophore.** Absorbing a particle of light changes the shape of that chromophore, and the changed chromophore forces a conformational change in the rhodopsin around it — so the receptor is activated by light in the same way another GPCR is activated by a hormone arriving. Each excited rhodopsin molecule then switches on at least 500 molecules of transducin, the G protein of the rod cell.",
      cn: "**视紫红质（rhodopsin）就是视网膜杆细胞上的那个 GPCR，而它之所以能「看见」，靠的是嵌在它内部的一个吸光小分子 —— 叫生色团（chromophore）。**吸收一个光粒子会改变这个生色团的形状，而改变了形状的生色团又迫使包在它外面的 rhodopsin 发生构象变化 —— 于是受体被光激活，方式和另一个 GPCR 被到来的激素激活完全一样。随后，每一个被激发的 rhodopsin 分子会打开至少 500 个 transducin 分子，也就是杆细胞里的那个 G 蛋白。",
      src: "A pp.430–431"
    },
    {
      link_en: "what the G protein switches on",
      link_cn: "G 蛋白打开的是什么",
      en: "**The effector enzymes are the same ones the hormone pathways use: adenylyl cyclase, which makes cAMP, and the phosphodiesterases, which destroy cAMP or cGMP.** Turning one of them on or off changes the concentration of that second messenger inside the sensory cell.",
      cn: "**被打开的效应酶，正是激素通路里用的那几个：腺苷酸环化酶（adenylyl cyclase，负责生成 cAMP），以及磷酸二酯酶（phosphodiesterase，负责降解 cAMP 或 cGMP）。**把它们中的一个打开或关掉，就改变了感觉细胞内那个第二信使的浓度。",
      src: "A p.432"
    },
    {
      link_en: "and what that concentration change does",
      link_cn: "而这个浓度变化又做了什么",
      en: "**A change in second-messenger concentration does one of two things: it alters the activity of an enzyme, or it alters how permeable the membrane is to Ca²⁺, Na⁺ and K⁺.** When ions move, the voltage across the membrane moves with them. The sensory cell therefore depolarises — its inside becomes less negative — or hyperpolarises, becoming more negative, and that voltage change is itself the signal, passed on to the sensory centres of the brain.",
      cn: "**第二信使浓度的变化只做两件事之一：改变某个酶的活性，或者改变膜对 Ca²⁺、Na⁺、K⁺ 的通透性。**离子一动，跨膜电压就跟着动。于是感觉细胞发生去极化（depolarise，内侧变得不那么负）或超极化（hyperpolarise，内侧变得更负），而这个电压变化本身就是信号，被送往脑内的感觉中枢。",
      src: "A p.432"
    },
    {
      recall_en: "desensitization was the fifth of the eight shared features; here it is in the nose",
      recall_cn: "脱敏是八个共有性质里的第五个；这里是它在鼻子里的样子",
      en: "**Desensitization here works the way it works everywhere else: the receptor is phosphorylated, and a protein called arrestin then binds it and interrupts the receptor's contact with the G protein.** The receptor is still there and the ligand is still bound, and the chain is broken anyway. That is why a smell fades within a minute while the odour molecules are still arriving at the nose.",
      cn: "**这里的脱敏和别处一模一样：受体先被磷酸化，接着一个叫 arrestin（抑制蛋白）的蛋白结合上去，切断受体与 G 蛋白之间的接触。**受体还在，配体也还结合着，链条却已经断了。这正是为什么一种气味在一分钟内就闻不到了，尽管气味分子还在源源不断地进到鼻子里。",
      src: "A p.432"
    },
    {
      link_en: "what to carry away",
      link_cn: "该带走的是什么",
      en: "**Nothing had to be invented for the senses. A photoreceptor, an odorant receptor and a taste receptor are GPCRs, feeding heterotrimeric G proteins, feeding enzymes that move a second messenger, ending in a membrane potential — which means that learning the hormone cascade once buys vision, smell and taste with it.**",
      cn: "**感官没有另起炉灶。光感受器、气味受体、味觉受体都是 GPCR，往下接异三聚体 G 蛋白，再往下接改变第二信使的酶，终点是一个膜电位 —— 也就是说，把激素那条级联学透一次，视觉、嗅觉和味觉就一并到手了。**",
      src: "A p.432"
    }
  ],
  terms: [
    { en: "heterotrimeric G protein", cn: "异三聚体 G 蛋白",
      def_en: "A three-subunit switch on the inner face of the plasma membrane that holds GTP when on. An activated receptor turns it on and it then turns an effector enzyme on or off; because one receptor activates many of them, this step is where a signal gains its amplification.",
      def_cn: "质膜内侧面上一个由三种亚基构成的开关，处于「开」时结合 GTP。被激活的受体把它打开，它再去开关一个效应酶；由于一个受体能激活许多个，信号的放大就发生在这一步。" },
    { en: "chromophore", cn: "生色团",
      def_en: "The small light-absorbing molecule bound inside rhodopsin. Absorbing light changes its shape, and the change is forced onto the surrounding protein — which is how a particle of light activates a receptor.",
      def_cn: "结合在视紫红质内部的吸光小分子。吸光后它的形状改变，并把这个改变强加给包裹着它的蛋白 —— 一个光粒子就是这样激活一个受体的。" },
    { en: "arrestin", cn: "抑制蛋白",
      def_en: "A protein that binds a phosphorylated receptor and interrupts its contact with the G protein, switching the pathway off while the ligand is still bound. It is why a sustained smell stops being perceived.",
      def_cn: "结合到被磷酸化的受体上、切断它与 G 蛋白接触的蛋白；配体还在结合着，通路已经被关掉。持续存在的气味之所以不再被感知，原因就是它。" }
  ]
};

/* ------------------------------------------------------------------ L-12-5-1
   Brief node: the source carries a mustKnow and a summary only (§12.5, A pp.438-442);
   unlike its neighbours the section has no summary block of its own, so the quotations
   in the source come from the section body on p.439. Eight steps. */
window.BIOLITE_SPINE["L-12-5-1"] = {
  assumed: ["cell", "protein", "membrane", "plasma membrane", "enzyme", "receptor",
            "ligand", "insulin", "kinase", "phosphorylation", "gene", "nucleus",
            "cytosol", "concentration", "signal transduction", "second messenger",
            "gene expression", "metabolism", "lipid", "residue", "domain"],
  nodeTitle_en: "Multivalent adaptor proteins and membrane rafts",
  nodeTitle_cn: "多价衔接蛋白与膜筏",
  title_en: "Signalling complexes are assembled from interchangeable parts, and phosphorylation is what creates the sockets",
  title_cn: "信号复合体是用可互换的零件拼起来的，而磷酸化负责造出插口",
  steps: [
    {
      en: "A phosphorylated tyrosine residue on a protein is a binding site. Attaching a phosphate to a tyrosine creates a small, distinctive, negatively charged patch that was not there before; removing the phosphate destroys it again. **So phosphorylation does two jobs at once: it switches enzymes on and off, and it creates and erases places where other proteins can dock.**",
      cn: "蛋白上一个被磷酸化的酪氨酸（Tyr）残基，就是一个结合位点。给一个 Tyr 接上磷酸，就凭空造出一小块带负电、形状独特的斑块；把磷酸拿掉，这块斑块又消失了。**所以磷酸化同时干两件事：既开关酶的活性，也在制造和抹掉「别的蛋白可以停靠的地方」。**",
      src: "A p.439"
    },
    {
      link_en: "if a phosphotyrosine is a socket, something has to be the plug",
      link_cn: "既然磷酸化的 Tyr 是插口，就得有东西当插头",
      en: "**An SH2 domain is a protein module, about a hundred residues long, whose whole function is to recognise and bind a phosphorylated tyrosine.** A protein carrying one has, in effect, a hand for grabbing anything that has just been phosphorylated on a tyrosine. A PTB domain is a second module that does the same job at a different sequence context, and the human genome encodes at least 24 proteins that carry one, IRS-1 among them.",
      cn: "**SH2 结构域（SH2 domain）是一个约一百个残基长的蛋白模块，它的全部功能就是识别并结合一个被磷酸化的 Tyr。**带着这么一个结构域的蛋白，等于长了一只手，专抓刚刚在 Tyr 上被磷酸化的东西。PTB 结构域（PTB domain）是干同样活儿的第二种模块，只是识别的序列环境不同；人类基因组里至少有 24 个蛋白带有它，IRS-1 就是其中之一。",
      src: "A pp.439–440"
    },
    {
      link_en: "one protein with several such hands is the whole trick",
      link_cn: "一个蛋白同时长好几只这样的手，整个花招就成立了",
      en: "**A protein carrying several binding modules at once is multivalent, and such a protein can serve as an adaptor: it grips two other proteins simultaneously and holds them close together**, even though those two have no affinity for each other at all. IRS-1 is the case in point. Insulin binding to its receptor makes the receptor phosphorylate tyrosines on IRS-1, and those phosphotyrosines then serve as binding sites for SH2-carrying proteins. What that buys: the cell can route a signal to a new destination by changing which adaptor is recruited, rather than by evolving a new pathway.",
      cn: "**一个同时带着好几个结合模块的蛋白叫多价蛋白（multivalent protein），这样的蛋白可以充当衔接蛋白（adaptor）：它同时抓住另外两个蛋白，把它们摁在一起** —— 哪怕这两个蛋白彼此之间毫无亲和力。IRS-1 就是范例。胰岛素结合到它的受体上，受体便去磷酸化 IRS-1 上的若干 Tyr，而这些磷酸化的 Tyr 随即成为带 SH2 结构域的蛋白的结合位点。这换来什么：细胞想把一个信号送到新的目的地，只要换一个被招募来的衔接蛋白就行，而不必进化出一条新通路。",
      src: "A p.439"
    },
    {
      link_en: "the chain the book actually walks through",
      link_cn: "书上真正走通的那条链",
      en: "Grb2 is one such adaptor. It binds a phosphotyrosine on IRS-1 through its SH2 domain and carries a protein called Sos on its other side; **Sos then activates Ras, a small GTP-binding protein, and Ras sets off a MAPK cascade — a chain of protein kinases each phosphorylating the next.** The end of the cascade phosphorylates targets both in the cytosol and in the nucleus, so one insulin molecule at the cell surface produces both a specific metabolic change and a change in which genes are transcribed.",
      cn: "Grb2 就是这样一个衔接蛋白。它用自己的 SH2 结构域结合 IRS-1 上的一个磷酸化 Tyr，另一侧则拎着一个叫 Sos 的蛋白；**Sos 去激活 Ras（一个结合 GTP 的小蛋白），Ras 再点燃一条 MAPK 级联 —— 一串蛋白激酶，一个接一个地把下一个磷酸化。**级联的末端同时磷酸化胞质里和细胞核里的靶蛋白，于是细胞表面的一个胰岛素分子，既造成了特定的代谢改变，也改变了哪些基因被转录。",
      src: "A pp.439–441"
    },
    {
      link_en: "a variant of the same idea, for a whole cascade at once",
      link_cn: "同一个想法的变体，一次管住整条级联",
      en: "**A scaffold protein — a protein with no catalytic activity of its own — exists only to hold a set of proteins together.** KSR carries binding sites for all three kinases of the Raf–MEK–ERK cascade at the same time. What that buys: the three enzymes do not have to find each other by diffusion, so the cascade runs faster, and a kinase held on one scaffold cannot wander off and phosphorylate the targets of a different pathway.",
      cn: "**支架蛋白（scaffold protein）自己没有催化活性，存在的意义就是把一组蛋白拢在一起。**KSR 同时带着 Raf–MEK–ERK 这条级联里全部三个激酶的结合位点。 这换来什么：三个酶不必靠扩散互相找到对方，级联跑得更快；而且被摁在同一个支架上的激酶，也不会跑偏去磷酸化另一条通路的靶蛋白。",
      src: "A p.441"
    },
    {
      recall_en: "so far every platform has been a protein; the next one is not",
      recall_cn: "到此为止每个装配平台都是蛋白；下一个不是",
      en: "A lipid can be an assembly platform too. **PI3K, activated by IRS-1, phosphorylates the membrane lipid PIP₂ to PIP₃, and PIP₃ then becomes a nucleation point where further branches of insulin signalling gather.** What that buys: the docking site is created in the membrane itself, exactly where the receptor is, so a whole branch of the pathway can be switched on by modifying a lipid rather than a protein.",
      cn: "装配平台也可以是一个脂。**PI3K 被 IRS-1 激活后，把膜脂 PIP₂ 磷酸化成 PIP₃，而 PIP₃ 随即成为一个成核点，胰岛素信号的后续分支就在这里聚集。** 这换来什么：停靠位点直接造在膜上、就在受体旁边，所以整整一个分支可以靠「改一个脂」而不是「改一个蛋白」被打开。",
      src: "A pp.439–441"
    },
    {
      recall_en: "rafts were introduced in membrane dynamics as a structural fact; this is what they are for",
      recall_cn: "膜筏在膜动态那一节里是作为结构事实出现的；这里说的是它有什么用",
      en: "**Membrane rafts — patches of bilayer where particular lipids pack tightly together — concentrate particular signalling proteins into the same small piece of membrane.** What that buys: partners that have to meet are held at a high local concentration instead of being spread over the whole cell surface, so they collide far more often than chance would allow.",
      cn: "**膜筏（membrane raft）是双层膜上特定脂质紧密堆积的一小片区域，它把特定的信号蛋白聚拢到同一小块膜里。** 这换来什么：那些必须相遇的搭档被维持在很高的局部浓度上，而不是散布在整个细胞表面 —— 于是它们相撞的频率远高于随机情况。",
      src: "A pp.441–442",
      see: [{ id: "L-11-2-1", en: "what a raft is made of and why it is thicker", cn: "膜筏由什么构成，以及它为什么更厚" }]
    },
    {
      link_en: "the sentence the section ends on",
      link_cn: "本节收尾的那句话",
      en: "Lehninger sums the chemistry up as a language: **protein kinases are the writers, domains such as SH2 are the readers, and phosphatases — the enzymes that take phosphates off — are the erasers.** And the pathways are heavily interconnected rather than separate. What that buys: a cell can integrate several signals into one response and tune the strength of each, which no set of isolated on-off lines could do.",
      cn: "Lehninger 把这套化学总结成一门文字：**蛋白激酶是「写手」，SH2 这类结构域是「读者」，而磷酸酶（把磷酸摘掉的酶）是「橡皮」。**而且这些通路之间是高度互联的，并非各走各的。这换来什么：细胞可以把好几个信号整合成一个反应，并且分别调节各自的强弱 —— 这是任何一组彼此隔离的开关线路都做不到的。",
      src: "A p.442"
    }
  ],
  terms: [
    { en: "SH2 domain", cn: "SH2 结构域",
      def_en: "A protein module of about a hundred residues whose function is to recognise and bind a phosphorylated tyrosine. A protein carrying one can dock onto anything that has just been phosphorylated on a tyrosine.",
      def_cn: "约一百个残基长的蛋白模块，功能是识别并结合被磷酸化的酪氨酸。带有它的蛋白，可以停靠到任何刚在酪氨酸上被磷酸化的东西上。" },
    { en: "adaptor protein", cn: "衔接蛋白",
      def_en: "A multivalent protein that grips two other proteins at once and holds them close together, even when those two have no affinity for each other. Grb2, holding a phosphotyrosine on IRS-1 with one hand and Sos with the other, is the worked case.",
      def_cn: "一个多价蛋白，同时抓住另外两个蛋白并把它们摁在一起 —— 哪怕这两个彼此毫无亲和力。Grb2 一手抓住 IRS-1 上的磷酸化 Tyr、一手拎着 Sos，就是走通的例子。" },
    { en: "scaffold protein", cn: "支架蛋白",
      def_en: "A protein with no catalytic activity that holds a set of enzymes together. KSR binds all three kinases of the Raf–MEK–ERK cascade at once, so they need not find each other by diffusion and cannot stray into another pathway.",
      def_cn: "本身没有催化活性、只负责把一组酶拢在一起的蛋白。KSR 同时结合 Raf–MEK–ERK 级联的三个激酶，使它们不必靠扩散相遇，也不会跑到别的通路上去。" },
    { en: "writers, readers and erasers", cn: "写手、读者与橡皮",
      def_en: "Lehninger's summary of phosphorylation as a language: protein kinases add the marks, modules such as SH2 and PTB domains recognise them, and phosphatases remove them.",
      def_cn: "Lehninger 把磷酸化总结成一门文字：蛋白激酶负责写上标记，SH2 与 PTB 这类结构域负责读，磷酸酶负责擦掉。" }
  ]
};

/* ------------------------------------------------------------------ L-12-6-1
   Brief node: the source carries a mustKnow and a summary only (§12.6, A pp.442-445).
   Seven steps. */
window.BIOLITE_SPINE["L-12-6-1"] = {
  assumed: ["cell", "protein", "membrane", "plasma membrane", "receptor", "ligand",
            "ion", "muscle", "enzyme", "signal transduction", "second messenger",
            "membrane potential", "gradient", "concentration", "brain"],
  nodeTitle_en: "Gated ion channels",
  nodeTitle_cn: "门控离子通道",
  title_en: "The simplest transducer there is: open a hole and let the ions do the rest",
  title_cn: "最简单的转导器：把孔打开，剩下的交给离子",
  steps: [
    {
      en: "**A gated ion channel is a pore through the membrane that opens and shuts on command, and it needs no second messenger and no cascade of enzymes.** The signal opens a hole in the membrane, ions run through it down their own electrochemical gradient, the voltage across the membrane changes, and that change is the response. Lehninger calls these the simplest signal transducers there are. What that buys: speed — there is no chain of reactions that has to run first, so the response takes milliseconds.",
      cn: "**门控离子通道是膜上一个能按指令开合的孔，它不需要第二信使，也不需要一条酶的级联。**信号把膜上的一个孔打开，离子顺着自己的电化学梯度冲过去，跨膜电压随之改变，而这个改变就是响应。Lehninger 称它们是最简单的信号转导器。这换来什么：快 —— 前面没有一串反应要跑，所以响应以毫秒计。",
      src: "A pp.442–445, §12.6"
    },
    {
      link_en: "two things can do the opening",
      link_cn: "能把孔打开的有两样东西",
      en: "A channel is gated either by voltage or by a ligand. **A voltage-gated channel opens when the membrane potential itself reaches a threshold. A ligand-gated channel opens when a specific molecule binds it.** The same cell can therefore respond both to its own electrical state and to a chemical arriving from outside, using the same kind of protein for both.",
      cn: "给通道「开门」的要么是电压，要么是配体。**电压门控通道在膜电位本身达到某个阈值时打开；配体门控通道则在某个特定分子结合上来时打开。**于是同一个细胞既能响应自己的电学状态、又能响应从外面来的化学物质，而两者用的是同一类蛋白。",
      src: "A pp.442–443"
    },
    {
      link_en: "the worked case is the one a nerve runs on",
      link_cn: "样板就是神经赖以工作的那一个",
      en: "**An action potential is a wave of voltage travelling along an axon — the long output fibre of a neuron — carried by voltage-gated Na⁺ and K⁺ channels in sequence.** Na⁺ channels open first and Na⁺ floods in, making the inside less negative: depolarisation. K⁺ channels then open and K⁺ leaves, restoring the negative inside: repolarisation. Each patch of membrane depolarising takes the next patch to its threshold, so the wave propagates itself the whole length of the axon without weakening.",
      cn: "**动作电位（action potential）是一列沿轴突（axon，神经元长长的输出纤维）传播的电压波，由电压门控的 Na⁺ 通道和 K⁺ 通道先后接力完成。**先是 Na⁺ 通道打开、Na⁺ 涌入，内侧变得不那么负：去极化（depolarisation）。接着 K⁺ 通道打开、K⁺ 流出，内侧恢复为负：复极化（repolarisation）。每一小段膜的去极化都把相邻的下一段推到阈值，所以这列波沿整条轴突自我传播，一路不衰减。",
      src: "A pp.442–443"
    },
    {
      link_en: "what happens when the wave reaches the end",
      link_cn: "这列波走到头之后",
      en: "Where an axon ends it meets another cell across a narrow gap, and the whole junction is called a synapse. The arrival of an action potential at the presynaptic side triggers the release of a neurotransmitter — a small molecule stored in vesicles and dumped into the gap. **So an electrical signal is converted into a chemical one in order to cross a gap the current cannot jump.**",
      cn: "轴突的末端隔着一道窄缝与另一个细胞相遇，整个接头叫突触（synapse）。动作电位抵达突触前一侧时，触发神经递质（neurotransmitter）的释放 —— 那是储存在囊泡里、被倾倒进缝隙的小分子。 **也就是说，电信号在这里被转换成化学信号，为的是越过一道电流跳不过去的缝。**",
      src: "A p.443",
      see: [{ id: "L-11-2-1", en: "how the vesicle fuses to release it", cn: "囊泡是怎么融合、把递质放出来的" }]
    },
    {
      link_en: "and how it is converted back",
      link_cn: "又是怎么被转换回去的",
      en: "Acetylcholine is one such transmitter. It diffuses across the gap and binds the acetylcholine receptor on the other side — on a postsynaptic neuron, or on a muscle cell where the junction is called a neuromuscular junction — and that changes the membrane potential there. The elegant part is what the receptor is: **the acetylcholine receptor is itself a cation channel. The receptor and the channel are one protein, so binding the ligand opens the hole directly, with nothing in between.**",
      cn: "乙酰胆碱（acetylcholine）就是这样一种递质。它扩散过缝隙，结合到对面的乙酰胆碱受体上 —— 对面可以是突触后神经元，也可以是肌细胞（这时这个接头叫神经肌肉接头）—— 于是那里的膜电位发生改变。最精巧的地方在于这个受体是什么：**乙酰胆碱受体本身就是一个阳离子通道。受体和通道是同一个蛋白，所以配体一结合，孔就直接打开了，中间什么都没有。**",
      src: "A p.444"
    },
    {
      link_en: "the arithmetic point, and the one worth keeping",
      link_cn: "那条算术式的要点，也是最值得带走的一条",
      en: "A neuron's cell body carries receptors for many different transmitters at once, some opening channels that depolarise it and some opening channels that hyperpolarise it. Its membrane potential at any instant is the sum of every open channel's contribution. What follows: **a neuron adds up its inputs and fires only if the total crosses threshold. It is an integrator, not a relay — it obeys no single one of the cells talking to it.**",
      cn: "一个神经元的胞体上同时带着多种不同递质的受体，有些打开的通道让它去极化，有些打开的通道让它超极化。它在任一瞬间的膜电位，是当时所有打开的通道各自贡献的总和。 由此得到：**神经元把输入加起来，只有总和越过阈值时才放电。它是一个整合器，而不是一个中继器 —— 对任何一个跟它说话的细胞，它都不单独服从。**",
      src: "A p.443"
    },
    {
      link_en: "a clinical consequence that follows from the speed",
      link_cn: "由「快」直接推出来的一个临床后果",
      en: "Many organisms make neurotoxins that attack neuronal ion channels, and such poisons act fast and are deadly. The speed follows from the first step of this chain: **a channel toxin does its damage without any cascade having to run first, so there is nothing slow enough in the pathway to give the victim time.**",
      cn: "许多生物都会产生攻击神经元离子通道的神经毒素，这类毒物起效快、而且致命。 「快」正是从这条线索的第一步推出来的：**通道毒素造成损害时，前面不必先跑完任何一条级联，所以这条通路上没有任何一环慢到能给中毒者留出时间。**",
      src: "A p.445"
    }
  ],
  terms: [
    { en: "gated ion channel", cn: "门控离子通道",
      def_en: "A membrane pore that opens or closes in response to a ligand or to the membrane voltage, letting ions run down their electrochemical gradient and so changing that voltage. The simplest signal transducer there is, and the fastest, because no cascade runs first.",
      def_cn: "膜上的一个孔，响应配体或膜电压而开或关，让离子顺电化学梯度流动、从而改变这个电压。这是最简单也是最快的信号转导器，因为前面不必先跑一条级联。" },
    { en: "action potential", cn: "动作电位",
      def_en: "A self-propagating wave of voltage along an axon: voltage-gated Na⁺ channels open and Na⁺ enters (depolarisation), then K⁺ channels open and K⁺ leaves (repolarisation). Each depolarised patch takes the next one to threshold, so the wave travels without weakening.",
      def_cn: "沿轴突自我传播的电压波：电压门控 Na⁺ 通道打开、Na⁺ 进入（去极化），随后 K⁺ 通道打开、K⁺ 流出（复极化）。每一段去极化的膜把下一段推到阈值，所以这列波传播时不衰减。" },
    { en: "synapse", cn: "突触",
      def_en: "The junction where an axon ends against another cell across a narrow gap. The electrical signal is converted to a chemical one — a neurotransmitter released into the gap — and back to an electrical one on the far side.",
      def_cn: "轴突末端隔着一道窄缝与另一个细胞相接的接头。电信号在这里被转换成化学信号（释放进缝隙的神经递质），到对面再转换回电信号。" }
  ]
};

/* ------------------------------------------------------------------ L-12-8-1
   Brief node: the source carries a mustKnow and a summary only (§12.8, A pp.446-450).
   Seven steps. */
window.BIOLITE_SPINE["L-12-8-1"] = {
  assumed: ["cell", "protein", "enzyme", "kinase", "phosphorylation", "phosphate",
            "atp", "gene", "dna", "residue", "subunit", "concentration",
            "signal transduction", "degradation", "synthesis"],
  nodeTitle_en: "Regulation of the cell cycle by protein kinases",
  nodeTitle_cn: "蛋白激酶对细胞周期的调控",
  title_en: "A clock that runs because it keeps throwing away its own hand",
  title_cn: "一座钟之所以能走，是因为它不断把自己的指针扔掉",
  steps: [
    {
      en: "**The cell cycle is the ordered sequence a eukaryotic cell passes through in order to divide, and what times it is a set of protein kinases called CDKs — cyclin-dependent protein kinases.** They act at specific points in the cycle, phosphorylating key proteins and changing their activities. So the timing of division is a signalling problem, solved with the same phosphorylation chemistry as everything else in this chapter.",
      cn: "**细胞周期（cell cycle）是真核细胞为了分裂而走过的一串有次序的阶段，而给它计时的，是一组叫 CDK（cyclin-dependent protein kinase，细胞周期蛋白依赖性激酶）的蛋白激酶。**它们在周期的特定节点上起作用，磷酸化关键蛋白、改变它们的活性。所以「什么时候分裂」是一个信号问题，用的还是本章其他地方那套磷酸化化学。",
      src: "A p.450, §12.8 summary"
    },
    {
      link_en: "what makes a CDK unusual among kinases",
      link_cn: "CDK 在激酶里特别在哪",
      en: "**A CDK cannot work alone. It is a heterodimer of two subunits: a catalytic subunit, which does the phosphorylating, and a regulatory subunit called a cyclin. The catalytic subunit is inactive unless a cyclin is bound to it.** What that buys: activity now requires two components at once, so the cell has two independent handles on it — it can control how much catalytic subunit exists, or how much cyclin exists, and either one shuts the kinase down.",
      cn: "**CDK 单靠自己不能工作。它是一个由两个亚基组成的异二聚体：一个催化亚基（负责磷酸化），和一个叫 cyclin（细胞周期蛋白）的调节亚基。催化亚基在没有 cyclin 结合上来时是无活性的。** 这换来什么：活性现在需要两个组件同时到位，于是细胞手里有了两个彼此独立的把手 —— 它可以控制催化亚基有多少，也可以控制 cyclin 有多少，任何一个都能把这个激酶关掉。",
      src: "A pp.447–448"
    },
    {
      link_en: "in fact there are four handles, not two",
      link_cn: "其实把手不是两个，是四个",
      en: "**Four things change the activity of a cyclin–CDK pair as the cycle runs: how much of each CDK is made and when; the specific degradation of the cyclin; the phosphorylation and dephosphorylation of critical residues on the CDK itself; and the binding of inhibitory proteins to particular cyclin–CDK pairs.** What that buys: the cell can act on the clock at four independent places, which is what lets one chemistry produce a schedule with distinct stages rather than a single on switch.",
      cn: "**随着周期推进，有四样东西在改变一个 cyclin–CDK 对的活性：每种 CDK 在什么时候、被合成多少；cyclin 的特异性降解；CDK 自身关键残基的磷酸化与去磷酸化；以及抑制性蛋白与特定 cyclin–CDK 对的结合。** 这换来什么：细胞可以在四个彼此独立的位置上对这座钟下手 —— 正因如此，同一套化学才能产生一张分成若干阶段的时刻表，而不只是一个开关。",
      src: "A pp.448–449"
    },
    {
      link_en: "of those four, the second is the one that makes it a clock",
      link_cn: "四者之中，第二个才是让它成为「钟」的那一个",
      en: "**A cyclin carries a short stretch of sequence called the destruction box, and that stretch marks it for ubiquitin tagging: a small protein, ubiquitin, is attached to it as a label meaning 'destroy this', and the labelled cyclin is then fed into a proteasome, the cell's protein shredder, and taken apart.** So a cyclin is deliberately built to be unstable.",
      cn: "**cyclin 里带着一小段序列，叫破坏框（destruction box），这段序列把它标记去接受泛素化：一个叫泛素（ubiquitin）的小蛋白被接上去，作为「销毁此物」的标签，被标记的 cyclin 随即被送进蛋白酶体（proteasome，细胞的蛋白粉碎机）拆掉。**所以 cyclin 是被刻意做成不稳定的。",
      src: "A pp.449–450"
    },
    {
      recall_en: "the destruction box just introduced, wired into a loop",
      recall_cn: "刚说的破坏框，接进一条回路里",
      en: "The rise in cyclin concentration is itself what eventually triggers that destruction. So the level does not simply climb — it climbs, sets off its own removal, falls, and climbs again, oscillating in step with the cycle. **That oscillation is the clock: a quantity that rose and stayed high would mark one event and never a second one, whereas a quantity that rises and is thrown away marks every turn.** The clock works because it destroys its own hand.",
      cn: "cyclin 浓度的上升，本身就是最终触发这场销毁的原因。于是它的水平不会一路爬上去 —— 而是爬升、触发自己被清除、回落、再爬升，随周期振荡。 **这个振荡就是钟：一个升上去就停在高位的量，只能标记一次事件，再也标记不了第二次；而一个升上去又被扔掉的量，每一圈都能标记。**这座钟之所以能走，正是因为它会毁掉自己的指针。",
      src: "A p.450"
    },
    {
      link_en: "the clock can also be stopped from outside",
      link_cn: "这座钟也可以被外面叫停",
      en: "**The cycle has damage checkpoints: places where progression is halted if something is wrong, and a double-strand break in DNA is one of the signals that can stop it.** What that buys: a cell that would otherwise copy a broken chromosome into two daughter cells pauses instead, and repairs it first — so the checkpoint is the cell's defence against passing damage on.",
      cn: "**这个周期上设有损伤检查点（damage checkpoint）：一旦出了问题，推进就在这些地方被叫停，而 DNA 双链断裂就是能叫停它的信号之一。** 这换来什么：一个本来会把断掉的染色体复制给两个子细胞的细胞，会先停下来把它修好 —— 所以检查点是细胞用来防止「把损伤传下去」的那道防线。",
      src: "A pp.449–450",
      see: [{ id: "L-12-9-1", en: "what happens when the checkpoints fail", cn: "检查点失效之后会发生什么" }]
    },
    {
      link_en: "how much of this is actually settled",
      link_cn: "这些内容里，究竟有多少是定论",
      en: "There are scores of known CDK targets, and the list of proteins each cyclin–CDK pair phosphorylates at each stage is far from complete. **The framework — two subunits, four handles, an oscillating cyclin — is solid; the full inventory of what gets phosphorylated, and when, is not.**",
      cn: "已知的 CDK 靶蛋白有几十个，而「每一个 cyclin–CDK 对在每个阶段各自磷酸化哪些蛋白」这份清单，远远没有列完。**框架是牢固的 —— 两个亚基、四个把手、一个振荡的 cyclin；但「究竟什么被磷酸化、在什么时候」的完整清单并不牢固。**",
      src: "A p.449",
      openQuestion_en: "Which proteins each cyclin–CDK pair phosphorylates at each stage of the cycle is still being worked out; the book says plainly that much remains to be learned.",
      openQuestion_cn: "每一个 cyclin–CDK 对在周期的每个阶段分别磷酸化哪些蛋白，目前仍在研究之中；书上直言还有很多有待了解。"
    }
  ],
  terms: [
    { en: "cell cycle", cn: "细胞周期",
      def_en: "The ordered sequence of stages a eukaryotic cell passes through in order to divide. Its timing is set by protein kinases that act at specific points, phosphorylating key proteins.",
      def_cn: "真核细胞为了分裂而经历的一串有次序的阶段。它的时序由在特定节点起作用、磷酸化关键蛋白的蛋白激酶设定。" },
    { en: "CDK", cn: "细胞周期蛋白依赖性激酶",
      def_en: "A heterodimeric protein kinase: a catalytic subunit that is inactive until a regulatory subunit, a cyclin, binds to it. Requiring two components gives the cell two independent ways to switch it off.",
      def_cn: "一种异二聚体蛋白激酶：催化亚基在调节亚基 cyclin 结合上来之前是无活性的。需要两个组件，等于给了细胞两条彼此独立的关闭途径。" },
    { en: "cyclin", cn: "细胞周期蛋白",
      def_en: "The regulatory subunit a CDK cannot work without, deliberately built to be unstable. Its own rising concentration eventually triggers its destruction, so its level oscillates with the cycle instead of accumulating.",
      def_cn: "CDK 少了它就不能工作的那个调节亚基，被刻意做成不稳定的。它自身浓度的上升最终会触发对它的销毁，所以它的水平随周期振荡，而不是一味累积。" },
    { en: "destruction box", cn: "破坏框",
      def_en: "A short sequence in a cyclin that marks it for tagging with ubiquitin and shredding in a proteasome. It is the piece that turns a rising quantity into an oscillating one, and so turns a signal into a clock.",
      def_cn: "cyclin 中的一小段序列，把它标记去接受泛素标签、并在蛋白酶体中被粉碎。正是这一段把一个「上升的量」变成一个「振荡的量」，也就把一个信号变成了一座钟。" },
    { en: "damage checkpoint", cn: "损伤检查点",
      def_en: "A place in the cell cycle where progression halts if something is wrong — a double-strand break in DNA being one such signal. It stops a cell from copying damage into its daughters.",
      def_cn: "细胞周期上的一个位置：一旦出了问题（例如 DNA 双链断裂这样的信号），推进就在此停下。它阻止细胞把损伤复制给子代。" }
  ]
};

/* ------------------------------------------------------------------ L-12-9-1
   Brief node: the source carries a mustKnow and a summary only (§12.9, A pp.451-456).
   Eight steps. */
window.BIOLITE_SPINE["L-12-9-1"] = {
  assumed: ["cell", "protein", "gene", "dna", "mutation", "enzyme", "kinase",
            "receptor", "virus", "signal transduction", "plasma membrane",
            "transcription", "growth factor", "cell division", "embryo"],
  nodeTitle_en: "Oncogenes, tumour suppressor genes and programmed cell death",
  nodeTitle_cn: "癌基因、抑癌基因与程序性细胞死亡",
  title_en: "Cancer as broken signalling, and two classes of gene that break in opposite directions",
  title_cn: "癌症是坏掉的信号转导，而两类基因坏的方向恰好相反",
  steps: [
    {
      en: "**In every kind of cancer the normal regulation of cell division — the machinery that decides whether a cell divides at all — has stopped working, because of defects in one or more genes.** Everything earlier in this chapter described a signalling pathway working correctly. This is the same material read as pathology: a tumour is what a cell does when the pathway that tells it whether to divide has been damaged.",
      cn: "**在每一种癌症里，细胞分裂的正常调控 —— 也就是决定一个细胞到底分不分裂的那套机器 —— 都已经失灵，原因是一个或多个基因出了缺陷。**本章前面讲的都是信号通路正常运转时的样子。下面把同样的材料当作病理来读：肿瘤，就是「告诉细胞该不该分裂」的那条通路被破坏之后，细胞所做的事。",
      src: "A p.452, §12.9"
    },
    {
      link_en: "the first class of gene",
      link_cn: "第一类基因",
      en: "**An oncogene is a gene encoding a defective signalling protein that keeps giving the signal for cell division whether or not the signal is wanted, and that continuous signal is what leads to a tumour.** Oncogenes were first found in tumour-causing viruses and were later shown to be derived from the cell's own genes — the normal, well-behaved version of such a gene is called a proto-oncogene. Any component of the cascades in this chapter can be the broken one: a defective growth factor, a defective receptor, a defective G protein, a defective protein kinase, or a defective nuclear regulator of transcription.",
      cn: "**癌基因（oncogene）是编码一个有缺陷的信号蛋白的基因，这个蛋白不管需不需要，都在持续发出「分裂」的信号，而这个不停的信号就是肿瘤的成因。**癌基因最早是在致瘤病毒里发现的，后来才证明它们来源于细胞自己的基因 —— 这类基因正常、规矩的那个版本，叫原癌基因（proto-oncogene）。本章那些级联里的任何一个组件都可能是坏掉的那个：一个有缺陷的生长因子、受体、G 蛋白、蛋白激酶，或者转录的核内调节因子。",
      src: "A pp.451–452, p.456"
    },
    {
      link_en: "and how such a gene is inherited",
      link_cn: "这样一个基因是怎么遗传的",
      en: "**An oncogene is genetically dominant: one damaged copy is enough to cause trouble, even with a perfectly good copy sitting beside it.** The reason follows from what it does — a protein stuck in the on position keeps shouting 'divide' regardless of what the normal copy is doing, and a normal copy has no way to silence it.",
      cn: "**癌基因在遗传上是显性的：只要有一份拷贝坏了就足以出事，哪怕旁边还放着一份完全正常的拷贝。** 原因就写在它做的事里 —— 一个卡在「开」位上的蛋白会不停地喊「分裂」，不管那份正常拷贝在干什么；而正常拷贝没有办法让它闭嘴。",
      src: "A p.456"
    },
    {
      recall_en: "the opposite of the previous step in both respects",
      recall_cn: "和上一步在两个方面都正好相反",
      en: "**A tumour suppressor gene encodes a regulatory protein whose normal job is to inhibit cell division — it is a brake rather than an accelerator.** Mutations in it are genetically recessive: both copies have to be lost before a tumour can follow, because one working copy still brakes. So the two gene classes fail in opposite directions and are inherited in opposite ways.",
      cn: "**抑癌基因（tumour suppressor gene）编码的调节蛋白，本职工作是抑制细胞分裂 —— 它是刹车，不是油门。**它的突变在遗传上是隐性的：必须两份拷贝都失去，才可能长出肿瘤，因为只要还剩一份能工作的拷贝，刹车就还在。 所以这两类基因坏的方向相反、遗传的方式也相反。",
      src: "A p.456"
    },
    {
      recall_en: "put the dominant and the recessive case together and a consequence falls out",
      recall_cn: "把显性那一类和隐性那一类放在一起，会掉出一个推论",
      en: "**Cancer is generally the result of an accumulation of mutations in oncogenes and tumour suppressor genes, rather than of any single event.** Turning on one accelerator is usually not enough while the brakes still hold, and losing one brake needs a second hit on the other copy. That is why cancer risk climbs with age, and why one carcinogenic exposure rarely produces a tumour on its own.",
      cn: "**癌症通常是癌基因与抑癌基因上突变「累积」的结果，而不是任何单一事件的结果。**只要刹车还在，踩下一个油门通常还不够；而要失去一个刹车，还得等另一份拷贝再挨一下。这正是癌症风险随年龄上升的原因，也是单独一次致癌暴露很少直接长出肿瘤的原因。",
      src: "A p.456"
    },
    {
      link_en: "a third class that is usually forgotten",
      link_cn: "还有第三类，通常被忘掉",
      en: "**Stability genes, also called caretaker genes, encode the proteins that repair major genetic damage. They neither drive division nor brake it — they proofread.** What happens when they are mutated: other mutations stop being repaired, including mutations in proto-oncogenes and in tumour suppressor genes. So damaging one stability gene raises the rate at which every other cancer gene is damaged, which is how the accumulation in the previous step gets started.",
      cn: "**稳定基因（stability gene），也叫看护基因（caretaker gene），编码的是修复重大遗传损伤所需的蛋白。它们既不推动分裂、也不刹车 —— 它们负责校对。** 它们一旦突变会怎样：别的突变从此得不到修复，其中就包括原癌基因和抑癌基因上的突变。所以毁掉一个稳定基因，等于提高了其他所有癌症相关基因被毁掉的速率 —— 上一步说的那种「累积」，往往就是这样开的头。",
      src: "A p.454"
    },
    {
      link_en: "the other half of the section: how a cell is supposed to die",
      link_cn: "本节的另一半：细胞本该怎么死",
      en: "**Apoptosis is programmed, controlled cell death. It runs during normal development of an embryo and continues throughout adult life**, destroying and recycling cells that are unnecessary, damaged or infected. It is triggered by irreparable damage to DNA, and also by signals arriving from outside — TNF, tumour necrosis factor, acts through receptors in the plasma membrane to set it off. What that means for cancer: a cell too damaged to repair is supposed to kill itself, so a cell that has lost the ability to do so keeps dividing with its damage intact.",
      cn: "**凋亡（apoptosis）是程序性的、受控的细胞死亡。它在胚胎的正常发育中运行，并贯穿整个成年期**，负责销毁并回收那些不必要的、受损的或被感染的细胞。触发它的可以是无法修复的 DNA 损伤，也可以是外来的信号 —— TNF（肿瘤坏死因子）就通过质膜上的受体把它启动。这对癌症意味着什么：一个损伤到无法修复的细胞，本应自杀；所以一个失去了自杀能力的细胞，会带着损伤继续分裂下去。",
      src: "A p.455, p.456",
      see: [{ id: "L-11-2-1", en: "the lipid signal that marks an apoptotic cell for removal", cn: "把凋亡细胞标记出来等待清除的那个脂质信号" }]
    },
    {
      link_en: "where this biochemistry became medicine",
      link_cn: "这套生化在哪里变成了医学",
      en: "**Because an oncogene is often a protein kinase stuck on, a small molecule that inhibits exactly that kinase is a treatment.** Imatinib is one: a small-molecule protein kinase inhibitor that has proved nearly 100% effective at bringing about remission in the leukaemia driven by its target kinase. What that demonstrates: naming the broken component in a signalling pathway is not an academic exercise — it identifies a drug target.",
      cn: "**由于癌基因产物常常是一个卡在「开」上的蛋白激酶，那么一个专门抑制这个激酶的小分子，就是一种治疗。**伊马替尼（imatinib）就是这样一个小分子蛋白激酶抑制剂，在由它靶向的那个激酶所驱动的白血病中，缓解率接近 100%。 这说明了什么：把信号通路里坏掉的那个组件叫出名字，并不是纸上功夫 —— 那等于指认了一个药靶。",
      src: "A p.453"
    }
  ],
  terms: [
    { en: "oncogene", cn: "癌基因",
      def_en: "A gene encoding a defective signalling protein that keeps giving the signal for cell division, leading to a tumour. Genetically dominant — one damaged copy suffices, because a protein stuck in the on position cannot be silenced by a normal copy. Its normal counterpart is a proto-oncogene.",
      def_cn: "编码一个有缺陷的信号蛋白、持续发出分裂信号并因而导致肿瘤的基因。遗传上显性 —— 坏一份拷贝就够了，因为卡在「开」位的蛋白无法被正常拷贝制止。它的正常对应物叫原癌基因。" },
    { en: "tumour suppressor gene", cn: "抑癌基因",
      def_en: "A gene encoding a regulatory protein that normally inhibits cell division — a brake. Its mutations are genetically recessive, because one intact copy still brakes, so both copies must be lost before a tumour can follow.",
      def_cn: "编码一个平时抑制细胞分裂的调节蛋白的基因 —— 一个刹车。它的突变在遗传上是隐性的，因为只要还有一份完好的拷贝，刹车就还起作用，必须两份都失去才可能长出肿瘤。" },
    { en: "stability gene", cn: "稳定基因",
      def_en: "Also called a caretaker gene. It encodes proteins that repair major genetic damage, so mutating it leaves every other mutation unrepaired — including those in proto-oncogenes and tumour suppressors. It is how an accumulation of cancer mutations gets started.",
      def_cn: "又叫看护基因。它编码修复重大遗传损伤的蛋白，所以它一旦突变，其他所有突变都得不到修复 —— 包括原癌基因和抑癌基因上的突变。癌症突变的累积往往就是这样开始的。" },
    { en: "apoptosis", cn: "凋亡",
      def_en: "Programmed, controlled cell death, running in embryonic development and throughout adult life to destroy and recycle unnecessary, damaged or infected cells. Triggered by irreparable DNA damage or by external signals such as TNF acting through plasma-membrane receptors.",
      def_cn: "程序性的、受控的细胞死亡，在胚胎发育期和整个成年期都在进行，销毁并回收不必要的、受损的或被感染的细胞。由无法修复的 DNA 损伤触发，也可由 TNF 这类经质膜受体起作用的外来信号触发。" }
  ]
};
