/* Spines for §1.3, §2.2 and §3.3 — 速通简洁版.

   One chain per node. Each step is ONE claim, written to be read straight through.

   HOUSE STYLE — all seven rules come from the reader saying which sentence stopped
   them, so they are followed literally here:

   1. STATE THE THING. No "not X, but Y", no rhetorical inversion.
   2. NO UNBOUND "THE". Never a definite reference to something not yet named.
   3. NAME THE ACTUAL OBJECTS. A teakettle, a semipermeable bag, two flasks of marbles,
      a can of cola. An experiment described in the abstract is not memorable.
   4. NO COMMENTARY ABOUT THE TEXTBOOK. Nothing about what a section supplies or what
      an examiner might ask. That is the other app's job.
   5. INTRODUCE EVERY NOUN YOU USE, in the same breath as the first use.
   6. STATE THE SCOPE, concretely. "Some of them" is not a scope.
   7. REACH BACK. When a step is the parallel or the opposite of one earlier in the
      same spine, say so and point at it (`recall_en` / `recall_cn`).

   And every structural claim carries its consequence — 「这些东西一般有啥用？」

   `beyond: true` marks detail that is standard and examinable but is NOT on the pages
   the node was read from. Two places use it, both flagged in `beyondNote`.

   The three spines are one arc and cross-reference each other: §1.3 asks how far a
   cell sits from equilibrium, §2.2 measures one particular equilibrium (water's own),
   and §3.3 uses the charge that §2.2's pK values predict to pull one protein out of
   a cell. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ===================================================================== L-1-3-1 */
window.BIOLITE_SPINE["L-1-3-1"] = {
  assumed: ["cell", "enzyme", "protein", "nucleic acid", "molecule", "glucose",
            "ATP", "ADP", "oxygen", "carbon dioxide", "temperature", "heat",
            "equilibrium", "equilibrium constant", "concentration", "reaction"],
  nodeTitle_en: "Physical foundations",
  nodeTitle_cn: "物理基础",
  title_en: "How far from equilibrium a cell actually sits, and what it costs to stay there",
  title_cn: "细胞离平衡到底有多远，以及待在那里要付出什么",
  steps: [
    {
      en: "A system that exchanges neither matter nor energy with its surroundings is called isolated; one that exchanges energy alone is closed; one that exchanges both is open. **A living organism is an open system, and that is what lets it hold its internal concentrations steady for a lifetime.** A closed system cannot do it.",
      cn: "与环境既不交换物质、也不交换能量的系统叫 isolated（孤立系统）；只交换能量的叫 closed（封闭系统）；两样都交换的叫 open（开放系统）。**活的生物体是开放系统 —— 正因为如此，它才能一辈子把体内的浓度维持在恒定水平。**封闭系统做不到这件事。",
      src: "A §1.3, pp.18–27"
    },
    {
      link_en: "and a constant concentration turns out not to mean that nothing is happening",
      link_cn: "而浓度恒定，并不代表里面什么都没发生",
      en: "The haemoglobin carrying oxygen to your brain right now was built within the past month and will be entirely replaced within the next; the glucose from your last meal will have become carbon dioxide or fat before the day is out, and fresh glucose will have taken its place. The blood concentration of each stays almost flat all day anyway. That is a **dynamic steady state: synthesis exactly matches breakdown, so the level holds while the material underneath it turns over completely. Holding it costs energy every second.** When a cell can no longer obtain energy it dies, and then decays toward equilibrium with its surroundings — for a cell, equilibrium is death.",
      cn: "此刻正把氧气送往你大脑的血红蛋白，是过去一个月里造出来的，下一个月会被全部换掉；你上一餐的葡萄糖，今天结束前就会变成二氧化碳或脂肪，再由新的葡萄糖补上。可是这两样东西在血里的浓度，一整天几乎是平的。这就是 **dynamic steady state（动态稳态）：合成速率与分解速率恰好相抵，所以水平不动，而底下的物质其实换了个遍。维持它每一秒都在烧能量。**细胞一旦再也拿不到能量就死亡，然后朝着与环境的平衡衰变下去 —— 对细胞来说，平衡就是死亡。",
      src: "A §1.3, pp.18–27"
    },
    {
      link_en: "so how far from equilibrium is that? It can be measured, on one reaction",
      link_cn: "那到底离平衡有多远？这件事可以在一个具体反应上量出来",
      en: "ATP is the molecule a cell uses to carry chemical energy from the reactions that release it to the reactions that need it. It breaks down to ADP plus a free phosphate ion in solution, written Pi. Two numbers describe that reaction. The equilibrium constant is the ratio of product to reactant concentrations once the reaction has finished moving, and for ATP breakdown it is about 2 x 10^5 M. The mass-action ratio, Q, is the same ratio worked out from the concentrations actually present at this moment — and the concentrations measured inside real cells, roughly 5 mM ATP, 0.5 mM ADP and 5 mM Pi, give Q = (0.5)(5)/(5) = 5 x 10^-4 M. The two differ by about nine orders of magnitude. **ATP is enormously more plentiful, and ADP enormously scarcer, than equilibrium would ever allow.** The cell holds that gap open by continuously extracting energy from nutrients such as glucose and spending it to rebuild ATP from ADP and Pi.",
      cn: "ATP 是细胞用来搬运化学能的分子：把放能反应里放出来的能量，搬到需要能量的反应那里去。它分解成 ADP 加上一个溶液里的游离磷酸离子（写作 Pi）。描述这个反应要用两个数。equilibrium constant（平衡常数）是反应不再移动之后，产物与反应物的浓度之比 —— ATP 分解的这个值约为 2 x 10^5 M。mass-action ratio（质量作用比，记作 Q）是同一个比值，但用此时此刻实际存在的浓度算出来 —— 而真实细胞里实测的浓度大约是 ATP 5 mM、ADP 0.5 mM、Pi 5 mM，于是 Q = (0.5)(5)/(5) = 5 x 10^-4 M。两者相差约九个数量级。**ATP 比平衡所允许的多得多，ADP 比平衡所允许的少得多。**细胞靠不断从葡萄糖这类营养物里提取能量、再用这些能量把 ADP 和 Pi 重新做成 ATP，才把这个差距一直撑开。",
      src: "A p.24, Worked Example 1-1",
      see: [{ id: "L-13-3-1", en: "ATP's free energy measured under real cellular conditions", cn: "在真实细胞条件下测量 ATP 的自由能" }]
    },
    {
      link_en: "why would a cell spend its whole life pushing uphill like that?",
      link_cn: "细胞为什么要一辈子这样往上坡推？",
      en: "**Entropy is the randomness of a system's components, and three concrete cases show what raises it.** A teakettle: switch off the burner under water at 100 °C and the heat spreads into the kitchen, raising its temperature immeasurably. No work is done, the energy is all still there, and with no temperature difference left anywhere it can never do work again — and it never flows back into the kettle by itself. Glucose oxidation: one glucose plus six oxygen, seven molecules, become six carbon dioxide plus six water, twelve molecules. A reaction that increases the number of molecules, or turns a solid into a liquid or a gas, gives the pieces more freedom of movement, so entropy rises. 125 letters: arranged as a passage of Shakespeare they carry enormous meaning; scrambled they carry none, and the ordered version is the entropy-poor one. A living organism is highly ordered, non-random and immensely information-rich — an entropy-poor structure, which nature's drift toward randomness is always pulling apart. Energy spent continuously is what stops that.",
      cn: "**Entropy（熵）是一个系统各组分的随机程度，三个具体例子说明什么会让它上升。**一、水壶：把 100 °C 沸水下面的炉火关掉，热就散进厨房，把厨房的温度提高了微不足道的一点点。没有做任何功，能量一点没少，可是各处温度一样了，它再也做不了功 —— 而且它绝不会自己流回水壶。二、葡萄糖氧化：一个葡萄糖加六个氧，共七个分子，变成六个二氧化碳加六个水，共十二个分子。凡是让分子数目增加、或者把固体变成液体或气体的反应，都给了这些碎片更大的活动自由，于是熵上升。三、125 个字母：排成一段莎士比亚，含义极其丰富；打乱之后毫无意义 —— 有序的那一版才是熵贫乏的那一版。活的生物体高度有序、毫不随机、信息量极大，是一个熵贫乏的结构，而自然界朝无序的漂移一直在拆它。持续花掉的能量，就是用来顶住这件事的。",
      src: "A p.22, Box 1-3"
    },
    {
      link_en: "entropy is one of two terms in the quantity that decides whether a reaction will go",
      link_cn: "熵是「反应会不会进行」那个量里的两项之一",
      en: "**Free energy is defined as G = H − TS, where H is enthalpy — the heat content, which roughly reflects how many bonds of what kinds a molecule has — S is entropy and T is absolute temperature.** For a reaction at constant temperature, ΔG = ΔH − TΔS. The signs are worth fixing now, because they invert easily under pressure: ΔH is negative when a reaction gives off heat, ΔS is positive when a reaction makes the system more random, and a process tends to happen on its own only when ΔG is negative. Here is what that costs a cell. Proteins and nucleic acids have a positive free energy of formation: each is less stable, and far more ordered, than a loose mixture of the monomers it was built from. Building one is uphill by definition, so a cell cannot simply let it happen — it has to pay for every one.",
      cn: "**自由能的定义是 G = H − TS，其中 H 是 enthalpy（焓，热含量，大致反映一个分子有多少个什么样的化学键），S 是熵，T 是绝对温度。**恒温下的反应则有 ΔG = ΔH − TΔS。符号现在就定死，因为紧张的时候最容易记反：放热的反应 ΔH 为负，让系统更随机的反应 ΔS 为正，而一个过程只有在 ΔG 为负时才倾向于自发进行。这对细胞意味着一笔开销。蛋白质和核酸的生成自由能是正的：相对于组成它们的单体的松散混合物，它们都更不稳定、也有序得多。按定义，造一个就是上坡，所以细胞不能听任其自然发生 —— 每造一个都得掏钱。",
      src: "A §1.3, pp.18–27",
      see: [{ id: "1-5", en: "Gibbs energy derived from internal energy, with chemical potential and activity", cn: "从内能出发推导吉布斯能，以及化学势与活度" }]
    },
    {
      link_en: "so how does a cell pay for an uphill reaction?",
      link_cn: "那细胞怎么替一个上坡反应买单？",
      en: "Start with weights and string. A raised weight sliding down can lift a smaller weight, and two conditions make that work: a string and pulley physically connect the two, and the large weight was itself raised earlier by some earlier input of energy. Friction takes a cut, so the work recovered is always somewhat less than the energy released. Now the chemical version. Reaction 1, glucose + Pi → glucose 6-phosphate, is endergonic — it needs energy put in and does not happen on its own. Reaction 2, ATP → ADP + Pi, is strongly exergonic, meaning it releases free energy. These two share a common intermediate: Pi, consumed by the first and produced by the second. That shared species is the string and pulley. It cancels from both sides, letting the two be added into Reaction 3: glucose + ATP → glucose 6-phosphate + ADP. **A negative sum of free-energy changes is necessary and is not enough on its own: without a shared intermediate physically linking them, two reactions with a favourable sum simply run side by side and transfer nothing.**",
      cn: "先看重物和绳子。一个被举高的重物落下时可以把一个较小的重物提起来，成立要靠两个条件：一套绳索滑轮把两者物理地连在一起，以及那个大重物先前曾被某次能量输入举高过。摩擦要抽成，所以回收到的功总是略少于放出的能量。换成化学版本。反应 1：葡萄糖 + Pi → 6-磷酸葡萄糖，是 endergonic（吸能） 的 —— 必须往里输入能量，自己不会发生。反应 2：ATP → ADP + Pi，是强 exergonic（放能） 的，也就是会释放自由能。这两个反应共有一个中间产物：Pi，被前者消耗、被后者生成。这个共有的东西就是那套绳索滑轮。它从两边消去，于是两个反应可以相加，得到反应 3：葡萄糖 + ATP → 6-磷酸葡萄糖 + ADP。**自由能变化之和为负是必要条件，光有它还不够：没有一个把两者物理连起来的共有中间产物，两个总和有利的反应只会各跑各的，什么能量也传不过去。**",
      src: "A p.24, Fig. 1-26"
    },
    {
      link_en: "and once they are summed, the arithmetic is two lines",
      link_cn: "一旦相加，算术就只有两行",
      en: "**When two reactions sum to a third, their standard free-energy changes add.** Glucose + Pi → glucose 6-phosphate has a standard free-energy change of +13.8 kJ/mol, positive, so it will not run. ATP → ADP + Pi has −30.5 kJ/mol. Adding: +13.8 + (−30.5) = −16.7 kJ/mol for glucose + ATP → glucose 6-phosphate + ADP. Negative, so it proceeds.",
      cn: "**两个反应相加得到第三个反应时，它们的标准自由能变化也直接相加。**葡萄糖 + Pi → 6-磷酸葡萄糖的标准自由能变化是 +13.8 kJ/mol，为正，所以不会进行。ATP → ADP + Pi 是 −30.5 kJ/mol。相加：+13.8 + (−30.5) = −16.7 kJ/mol，对应葡萄糖 + ATP → 6-磷酸葡萄糖 + ADP。结果为负，所以它会进行。",
      src: "A p.25, Worked Example 1-2"
    },
    {
      link_en: "where does a standard free-energy change come from in the first place?",
      link_cn: "那标准自由能变化本身又是从哪来的？",
      recall_en: "this is the Q and the equilibrium constant from the ATP measurement, now written as one equation",
      recall_cn: "这就是前面量 ATP 时用的 Q 和平衡常数，现在被写进同一个式子里",
      en: "**The actual free-energy change of a reaction depends on two separate things: a constant belonging to the reaction itself, and how far the present concentrations sit from equilibrium.** ΔG = ΔG° + RT ln Q. At equilibrium there is no driving force left and no work can be done, so ΔG = 0 and Q has become the equilibrium constant K — which leaves ΔG° = −RT ln K. Read that in the direction that is useful: K much greater than 1 gives a large negative ΔG°; K much less than 1 gives a large positive ΔG°. And since K can be measured on the bench, this is how standard free-energy changes are obtained in the first place. Keep the two apart: ΔG° is one fixed number per reaction, while ΔG moves with the cell's own concentrations and can change sign.",
      cn: "**一个反应实际的自由能变化取决于两样彼此独立的东西：反应自身固有的一个常数，以及当前浓度离平衡有多远。**ΔG = ΔG° + RT ln Q。在平衡时不再有推动力，也做不了功，所以 ΔG = 0，而 Q 已经变成了平衡常数 K —— 于是剩下 ΔG° = −RT ln K。按有用的方向读它：K 远大于 1，ΔG° 就是很大的负值；K 远小于 1，ΔG° 就是很大的正值。而由于 K 可以在实验台上测出来，标准自由能变化最初就是这样得到的。两个量务必分开：ΔG° 对每个反应只有一个固定值，而 ΔG 会随细胞自身的浓度移动，甚至可以变号。",
      src: "A §1.3, pp.18–27"
    },
    {
      link_en: "and here is the one thing that equation refuses to tell you",
      link_cn: "而这个式子有一件事是死也不肯告诉你的",
      en: "**A thermodynamic constant of this kind shows where the final equilibrium lies and says nothing whatever about how long it takes to get there. Speed is a separate subject — kinetics.** A reaction can have a large negative ΔG and still, in practice, never happen.",
      cn: "**这一类热力学常数只表明最终的平衡位于何处，至于要花多久才走到那里，它一个字也不说。速度是另一门学问 —— kinetics（动力学）。**一个反应可以有很大的负 ΔG，而实际上永远不发生。",
      src: "A §1.3, pp.18–27"
    },
    {
      link_en: "back to ATP, with two things about it corrected",
      link_cn: "回到 ATP，有两处要纠正",
      recall_en: "the first correction is the nine-orders-of-magnitude measurement, three steps up, used as an explanation",
      recall_cn: "第一处纠正，就是上面那个「相差九个数量级」的测量结果，这次拿它当解释用",
      en: "Take the equilibrium constant for ATP breakdown as 2.22 x 10^5 M, put it into ΔG° = −RT ln K at 25 °C, and out comes −30.5 kJ/mol. Running that backwards, making one mole of ATP costs +30.5 kJ under standard conditions — and inside a cell it costs more still, roughly 50 kJ/mol, because cellular concentrations are nowhere near the standard 1 M. First correction: **ATP breakdown is strongly exergonic in cells because every living cell holds ATP far above its equilibrium concentration.** Its phosphoanhydride bonds are ordinary bonds; the sustained disequilibrium is what makes ATP the universal carrier of chemical energy. Second correction, and this one is missed more often: an endergonic reaction is driven by the transfer of a phosphoryl group from ATP onto another molecule — glucose, in the case above — which keeps part of ATP's chemical potential inside the product. ATP hydrolysed uselessly into solution warms the cell and drives nothing at all.",
      cn: "取 ATP 分解的平衡常数为 2.22 x 10^5 M，在 25 °C 下代入 ΔG° = −RT ln K，得到 −30.5 kJ/mol。反过来算，在标准条件下合成一摩尔 ATP 要 +30.5 kJ —— 而在细胞里代价还要更高，约 50 kJ/mol，因为细胞里的浓度离标准的 1 M 差得很远。第一处纠正：**ATP 在细胞里之所以强烈放能，是因为每一个活细胞都把 ATP 维持在远高于其平衡浓度的水平。**它的 phosphoanhydride bond（磷酸酐键）是普通的键；让 ATP 成为化学能通用载体的，是这种被持续维持的非平衡状态。 第二处纠正，而且这一处更常被漏掉：驱动吸能反应的是一个 phosphoryl group（磷酰基）从 ATP 转移到另一个分子上（上面那个例子里就是转到葡萄糖上），这一步把 ATP 原有的一部分化学势保留在了产物里。ATP 要是白白水解到溶液里，只会让细胞变热，什么也驱动不了。",
      src: "A p.25, Worked Example 1-3"
    },
    {
      link_en: "structurally, where in the molecule does that energy sit?",
      link_cn: "从结构上看，这些能量在分子的哪个位置？",
      en: "**ATP carries two phosphoanhydride bonds — the linkages joining its three phosphates in a row — and these are what supply the free energy for coupled endergonic reactions.** A cell cleaves the molecule in two different ways, and they are not interchangeable. Removing the end phosphoryl group alone breaks one phosphoanhydride bond and gives ADP + Pi; that is the strongly exergonic route used in the glucose 6-phosphate case above. Releasing the last two phosphates together gives inorganic pyrophosphate, abbreviated PPi. The worth of such a bond is stated as a free-energy change per mole, and that number comes from a measured equilibrium constant rather than from anything visible in a structural formula.",
      cn: "**ATP 上有两个 phosphoanhydride bond（磷酸酐键） —— 就是把它那三个磷酸一个接一个连起来的键 —— 偶联的吸能反应所用的自由能正是由它们提供的。**细胞有两种切开这个分子的方式，二者不可互换。只把末端那个磷酰基摘下来，断的是一个磷酸酐键，得到 ADP + Pi；上面 6-磷酸葡萄糖那个例子用的就是这条强放能途径。把末端两个磷酸一起放出来，得到 inorganic pyrophosphate（无机焦磷酸，缩写 PPi）。这种键值多少钱，是以每摩尔的自由能变化来表述的，而这个数字来自实测的平衡常数，并不是从结构式上看出来的。",
      src: "A p.21, Fig. 1-25",
      see: [{ id: "L-13-3-1", en: "why ATP is almost never simply hydrolysed, and what the phosphoryl group is handed to", cn: "为什么 ATP 几乎从不被单纯水解，以及磷酰基究竟被交给了谁" }]
    },
    {
      link_en: "now the quantity that decides how long it takes, which the free-energy change never touched",
      link_cn: "现在轮到那个决定「要花多久」的量 —— 自由能变化从头到尾没碰过它",
      recall_en: "the answer to the warning two steps up: rates are kinetics, and this is the quantity kinetics uses",
      recall_cn: "这是对上面那条告诫的回答：速度属于动力学，而这就是动力学用的那个量",
      en: "Between reactants and products stands a barrier. Bonds have to be distorted first into a transition state whose free energy is higher than either the reactant or the product, and the climb from the reactant's ground state up to that transition state is the activation energy, ΔG‡. It is unrelated to the reaction's ΔG — which is why a strongly exergonic reaction can be immeasurably slow. **An enzyme works by offering a surface complementary to the transition state in shape, polarity and charge.** Binding that transition state is itself exergonic, and the energy released by the binding pays down the barrier. Holding two reactants side by side in a favourable orientation adds more, raising the odds of a productive collision by orders of magnitude. Together these bring many enzyme-catalysed reactions to about 10^6 times the uncatalysed rate. An enzyme changes how fast equilibrium is reached and cannot move where that equilibrium lies.",
      cn: "反应物和产物之间横着一道能垒。化学键必须先被扭曲成一个 transition state（过渡态），它的自由能比反应物和产物都高；从反应物基态爬到这个过渡态的高度差，就是 activation energy（活化能，ΔG‡）。它和该反应的 ΔG 毫无关系 —— 所以一个强放能的反应也可以慢到测不出来。**酶的做法是提供一个表面，在形状、极性和电荷上都与过渡态互补。**与过渡态的结合本身是放能的，而这一结合放出的能量正好用来抵掉能垒。把两个反应物并排按在有利的取向上，又添了一份力，使有效碰撞的概率提高若干数量级。两者合起来，让许多酶催化反应达到未催化时的约 10^6 倍。酶改变的是多快到达平衡，它挪不动平衡本身的位置。",
      src: "A p.26, Fig. 1-27",
      see: [{ id: "L-6-4-1", en: "transition-state complementarity watched inside three real enzymes", cn: "在三个真实的酶里看过渡态互补是怎么实现的" },
             { id: "L-6-3-1", en: "how reaction rate is actually measured and what the constants mean", cn: "反应速率究竟怎么测，那些常数又代表什么" }]
    },
    {
      link_en: "that split resolves something that otherwise looks self-contradictory",
      link_cn: "这个区分能解开一个乍看自相矛盾的说法",
      recall_en: "the uphill macromolecules from the free-energy step: less stable, and still lying around for years",
      recall_cn: "回到自由能那一步里「上坡」的大分子：更不稳定，却还是能在那儿放上好几年",
      en: "**A biological macromolecule is thermodynamically less stable than the monomers it is made of, and kinetically stable all the same, because breaking it down without a catalyst takes years rather than seconds** — long enough to be irrelevant on the timescale of the organism carrying it.",
      cn: "**生物大分子在热力学上比组成它的单体更不稳定，同时它在动力学上又是稳定的，因为不靠催化剂把它拆掉需要以年计、而不是以秒计** —— 长到在携带它的那个生物体的时间尺度上根本无关紧要。",
      src: "A p.26, Fig. 1-27"
    },
    {
      link_en: "one energy carrier was named at the start. There is a second, and it is not interchangeable with the first",
      link_cn: "开头点名了一种能量载体。还有第二种，而且两者不能互换",
      en: "**The degradative pathways that break nutrients down and release free energy are collectively catabolism; the synthetic pathways that build large molecules from small precursors, always at an energy cost, are anabolism; the whole network of both is metabolism.** The energy catabolism releases drives ATP synthesis, and that is exactly how the cellular ATP concentration is kept far above equilibrium. ATP is the link between the two halves, earned in exergonic reactions and spent in endergonic ones, the way money is in an economy. There is a second currency: catabolism also produces the reduced electron carriers NADH and NADPH, together written NAD(P)H, which hand over electrons instead of a phosphoryl group. Their jobs are divided — NADH tends to feed the processes that generate ATP, NADPH tends to supply the reducing steps of biosynthesis. Both sit at low concentration, so neither can act as a reservoir and both must be regenerated by catabolism constantly.",
      cn: "**把营养物拆开、并放出自由能的降解途径，统称 catabolism（分解代谢）；从小前体造出大分子、并且永远要花能量的合成途径，叫 anabolism（合成代谢）；两者构成的整张网络就是 metabolism（代谢）。**分解代谢放出的能量驱动 ATP 的合成，细胞里的 ATP 浓度正是这样才被维持在远高于平衡的水平。ATP 是两半之间的那个环节：在放能反应里挣到，在吸能反应里花掉，就像经济里的钱。还有第二种货币：分解代谢同时还产出还原型电子载体 NADH 和 NADPH（合写作 NAD(P)H），它们交出去的是电子，而不是磷酰基。两者分工不同 —— NADH 倾向于供给产生 ATP 的过程，NADPH 倾向于供给生物合成里的还原步骤。两者浓度都很低，所以谁都当不了储备库，都必须由分解代谢不断再生。",
      src: "A p.26, Fig. 1-28",
      see: [{ id: "6-1-3", en: "catabolic and anabolic processes, and why both run stepwise", cn: "分解代谢与合成代谢，以及两者为什么都分成很多小步" },
             { id: "L-19-1-1", en: "what happens to NADH's electrons after catabolism hands them over", cn: "分解代谢把电子交给 NADH 之后，这些电子的去向" }]
    },
    {
      link_en: "last question: a cell makes thousands of molecules at once, in the proportions it needs today. What stops it overshooting?",
      link_cn: "最后一个问题：细胞同时造成千上万种分子，而且是按今天需要的比例造。是什么让它不造过头？",
      en: "Feedback inhibition. In E. coli, isoleucine is made by a pathway of five enzymes in five steps. **When isoleucine accumulates beyond what protein synthesis is consuming, it inhibits the catalytic activity of the first enzyme of its own pathway** — the entry step — so production slows immediately and nothing downstream is wastefully made. Two qualifications come with it. Treating metabolism as a set of separate pathways is a useful way to organise it and an oversimplification: there are thousands of intermediates, many of them belonging to more than one pathway, so a change in any one metabolite's concentration ripples outward through a web. And regulation is layered: the activity of enzymes that already exist is one layer, and control over how many of those enzymes get made, through gene expression, is another. A full account of metabolic control needs both layers.",
      cn: "靠 feedback inhibition（反馈抑制）。在大肠杆菌里，异亮氨酸由一条五个酶、五步的途径合成。**当异亮氨酸积累到超过蛋白质合成所消耗的量时，它会抑制自己这条途径中第一个酶的催化活性** —— 也就是入口那一步 —— 于是生产立刻减速，下游也不会浪费性地造出任何东西。随之而来有两条限定。把代谢看成一组彼此分开的途径，是一种有用的整理方式，同时也是一种过度简化：中间产物有成千上万种，其中许多同时属于不止一条途径，所以任何一种代谢物浓度的变化都会顺着一张网向外扩散。而且调控是分层的：已经存在的那些酶的活性是一层，通过基因表达控制这些酶被造出多少，是另一层。要把代谢调控说完整，两层都得说。",
      src: "A p.27",
      see: [{ id: "L-22-2-1", en: "feedback inhibition of amino acid synthesis, including the isoleucine pathway", cn: "氨基酸合成的反馈抑制，包括异亮氨酸这条途径" },
             { id: "L-13-5-1", en: "metabolic regulation measured rather than listed, and the steady state quantified", cn: "把代谢调控量出来而不是列出来，以及稳态的定量描述" }]
    }
  ],
  terms: [
    { en: "isolated / closed / open system", cn: "孤立／封闭／开放系统",
      def_en: "Isolated exchanges neither matter nor energy with its surroundings; closed exchanges energy alone; open exchanges both. A living organism is open, which is the precondition for holding a steady state indefinitely.",
      def_cn: "孤立系统与环境既不交换物质也不交换能量；封闭系统只交换能量；开放系统两样都交换。生物体是开放系统，这是它能长期维持稳态的前提。" },
    { en: "dynamic steady state", cn: "动态稳态",
      def_en: "Concentrations stay nearly constant because the rate of formation matches the rate of removal, while the material itself turns over completely. It sits far from equilibrium and needs energy every second; a cell that can no longer obtain energy decays toward equilibrium, which for a cell means death.",
      def_cn: "浓度几乎恒定，原因是生成速率与清除速率相抵，而物质本身其实换了个遍。它远离平衡，每一秒都要花能量；再也拿不到能量的细胞会朝平衡衰变，对细胞而言那就是死亡。" },
    { en: "mass-action ratio, Q", cn: "质量作用比 Q",
      def_en: "The product-over-reactant concentration ratio actually present at this moment, as against the equilibrium constant, which is that same ratio once the reaction has stopped moving. Comparing the two measures the distance from equilibrium: for ATP breakdown in cells, Q is about 5 x 10^-4 M against an equilibrium constant of about 2 x 10^5 M.",
      def_cn: "此刻实际存在的产物／反应物浓度之比，区别于平衡常数（同一个比值在反应不再移动之后的取值）。两者一比就量出了离平衡的距离：细胞内 ATP 分解的 Q 约为 5 x 10^-4 M，而平衡常数约为 2 x 10^5 M。" },
    { en: "entropy, S", cn: "熵 (S)",
      def_en: "The randomness of a system's components. It rises when heat is spread out and randomised, when a reaction increases the number of molecules, and when order and information are lost. Organisms are highly ordered and therefore entropy-poor, which is why they can be maintained only by spending energy.",
      def_cn: "系统各组分的随机程度。热被摊开随机化、反应使分子数目增加、有序性与信息丧失时，它都会上升。生物体高度有序、因而熵贫乏，所以只有靠花能量才维持得住。" },
    { en: "exergonic / endergonic", cn: "放能／吸能",
      def_en: "Exergonic: the products hold less free energy than the reactants, ΔG is negative, and free energy is released that can do work. Endergonic: ΔG is positive and energy has to be put in for the reaction to go.",
      def_cn: "放能：产物的自由能低于反应物，ΔG 为负，释放出可以做功的自由能。吸能：ΔG 为正，必须输入能量反应才走得动。" },
    { en: "shared intermediate", cn: "共有中间产物",
      def_en: "A species produced by one reaction and consumed by another, which is what physically permits the two to be added into one coupled reaction. Without it, a favourable sum of free-energy changes transfers no energy: the two reactions just run side by side.",
      def_cn: "一个反应生成、另一个反应消耗的物质，正是它在物理上使两个反应得以合并成一个偶联反应。没有它，自由能变化之和再有利也传不过去能量，两个反应只会各跑各的。" },
    { en: "phosphoryl group transfer", cn: "磷酰基转移",
      def_en: "How ATP actually drives an endergonic reaction: a phosphoryl group moves from ATP onto an acceptor molecule, keeping part of ATP's chemical potential inside the product. ATP hydrolysed into solution instead of transferred drives nothing.",
      def_cn: "ATP 驱动吸能反应的真实做法：一个磷酰基从 ATP 移到受体分子上，把 ATP 的一部分化学势留在产物里。若不是转移而是水解到溶液里，则什么也驱动不了。" },
    { en: "phosphoanhydride bond", cn: "磷酸酐键",
      def_en: "The linkage joining one phosphate to the next in ATP's row of three. ATP carries two of them. Breaking one to release the end phosphoryl group as Pi is strongly exergonic; an alternative cleavage releases the last two phosphates together as inorganic pyrophosphate, PPi.",
      def_cn: "把 ATP 那一排三个磷酸一个接一个连起来的键，ATP 上有两个。断开其中一个、以 Pi 的形式放出末端磷酰基是强放能的；另一种断法把末端两个磷酸一起放出来，成为无机焦磷酸 PPi。" },
    { en: "activation energy", cn: "活化能",
      def_en: "The free-energy climb from a reactant's ground state up to the transition state, which has to be surmounted before a reaction can go. It is unrelated to that reaction's ΔG, so a strongly exergonic reaction can still be immeasurably slow. Enzymes lower it and leave ΔG and the equilibrium position untouched.",
      def_cn: "从反应物基态爬到过渡态的那段自由能差，反应必须越过它才走得动。它与该反应的 ΔG 无关，所以强放能的反应也可能慢到测不出来。酶降低的是它，而 ΔG 和平衡位置分毫不动。" },
    { en: "transition state", cn: "过渡态",
      def_en: "The distorted, highest-free-energy arrangement of bonds that lies between reactant and product. An enzyme's surface is complementary to it in shape, polarity and charge, and the energy released on binding it is what pays down the activation barrier.",
      def_cn: "介于反应物与产物之间、化学键被扭曲、自由能最高的那个构型。酶的表面在形状、极性和电荷上都与它互补，而结合它时放出的能量正是用来抵掉活化能垒的。" },
    { en: "catabolism / anabolism", cn: "分解代谢／合成代谢",
      def_en: "Catabolism is the degradative pathways that break nutrients down and release free energy; anabolism is the synthetic pathways that build large molecules from small precursors and always cost energy. ATP is the link earned in one and spent in the other, and NAD(P)H is a second link carrying electrons rather than a phosphoryl group.",
      def_cn: "分解代谢是把营养物拆开、放出自由能的降解途径；合成代谢是从小前体造大分子、并且永远要花能量的合成途径。ATP 是两者之间的环节，在一边挣、在另一边花；NAD(P)H 是第二个环节，搬运的是电子而不是磷酰基。" },
    { en: "feedback inhibition", cn: "反馈抑制",
      def_en: "The end product of a pathway inhibits the first enzyme of that same pathway, so accumulation slows production immediately and nothing downstream is made wastefully. The five-step isoleucine pathway of E. coli is the worked case.",
      def_cn: "途径的终产物抑制这条途径中的第一个酶，因此终产物一积累，生产立刻减速，下游也不会白造东西。大肠杆菌那条五步的异亮氨酸途径就是具体的例子。" }
  ]
};

/* ===================================================================== L-2-2-1 */
window.BIOLITE_SPINE["L-2-2-1"] = {
  assumed: ["water", "proton", "ion", "molecule", "acid", "base", "salt",
            "amino acid", "protein", "enzyme", "blood", "equilibrium",
            "equilibrium constant", "concentration", "logarithm", "electric field"],
  nodeTitle_en: "The ionization of water",
  nodeTitle_cn: "水的电离",
  title_en: "Why pH 7 is a measured constant, and why every pK is the same kind of number",
  title_cn: "为什么 pH 7 是测出来的常数，以及为什么每一个 pK 都是同一类数字",
  steps: [
    {
      en: "Water has a slight tendency to ionize, reversibly, into a hydrogen ion and a hydroxide ion. Being reversible, that reaction has an equilibrium constant, and its value is not assumed: electrical-conductivity measurements on pure water give 1.8 x 10^-16 M at 25 °C. Almost none of the water is ionized at any moment, so water's own concentration stays at a constant 55.5 M — which is just 1,000 g/L divided by 18.015 g/mol — and that constant can be folded into the equilibrium constant itself. **What comes out is the ion product of water: Kw = [H+][OH-] = 1.0 x 10^-14 M² at 25 °C.**",
      cn: "水有轻微的倾向发生可逆电离，生成一个氢离子和一个氢氧根离子。既然可逆，这个反应就有一个平衡常数，而这个数值不是假定的：对纯水做电导测量，25 °C 下得到 1.8 x 10^-16 M。任何时刻水都几乎没有电离，所以水自身的浓度就固定在 55.5 M —— 这不过是 1,000 g/L 除以 18.015 g/mol —— 而这个常数可以并进平衡常数里去。**出来的结果就是 水的离子积：Kw = [H+][OH-] = 1.0 x 10^-14 M²（25 °C）。**",
      src: "A pp.54–55"
    },
    {
      link_en: "and pH 7 falls straight out of that number",
      link_cn: "pH 7 就是从这个数字里直接掉出来的",
      en: "Neutral means the two ion concentrations are equal. If they are equal and their product is 1.0 x 10^-14 M², each of them must be the square root of that, 10^-7 M, and the negative logarithm of 10^-7 is 7. So 7 is derived from a conductivity measurement on pure water; the fact that it lands on a round number is a convenience. **The consequence to keep is that Kw is a constant, so the two concentrations are locked together: push one up and the other must come down by the same factor.**",
      cn: "中性的意思是两种离子的浓度相等。如果两者相等、乘积又是 1.0 x 10^-14 M²，那么每一个都必须是它的平方根，即 10^-7 M，而 10^-7 的负对数就是 7。所以 7 是从对纯水的一次电导测量里推出来的；它恰好落在一个整数上，只是顺手而已。**要记住的推论是：Kw 是常数，所以两个浓度被锁死在一起 —— 把一个推上去，另一个必须按同样的倍数降下来。**",
      src: "A pp.54–55"
    },
    {
      link_en: "one warning about the scale before using it",
      link_cn: "在用这个尺度之前，先记一条警告",
      en: "**pH is defined as −log[H+], and the letter p in front of any quantity simply means take the negative logarithm of it — which is all that pKa and pOH are.** pOH is defined the same way, and pH + pOH = 14 always. The concentration has to be in molar units, which is where most arithmetic slips happen. And the scale is logarithmic rather than arithmetic: two solutions one pH unit apart differ tenfold in hydrogen ion concentration, and nothing is being said about the absolute difference. A can of cola at pH 3.0, or red wine at pH 3.7, carries roughly ten thousand times the hydrogen ion concentration of blood at pH 7.4.",
      cn: "**pH 的定义是 −log[H+]，而任何量前面加一个 p，含义就只是「取它的负对数」 —— pKa 和 pOH 无非如此。**pOH 同样这么定义，而且任何情况下 pH + pOH = 14。浓度必须用 molar（摩尔浓度） 表示，算术失误多半出在这里。而且这个尺度是对数的，不是算术的：两个溶液相差一个 pH 单位，意味着氢离子浓度差十倍，至于绝对差值，它一个字也没说。一罐 pH 3.0 的可乐、或者 pH 3.7 的红酒，其氢离子浓度大约是 pH 7.4 血液的 一万倍。",
      src: "A pp.55–56, Table 2-5"
    },
    {
      link_en: "and one surprise about how a proton actually gets from place to place",
      link_cn: "关于质子究竟怎么从一处跑到另一处，还有一个意外",
      en: "The dissociation product is written H+, and a free proton does not exist in solution: a hydrogen ion formed in water is hydrated to a hydronium ion, H3O+, essentially instantly, because water molecules are already hydrogen-bonded to one another. Now the surprising part. Hydronium and hydroxide ions migrate in an electric field far faster than ordinary ions such as sodium, potassium and chloride, and the reason is not their size. **No individual proton travels far through the solution at all: one is released at one end of a hydrogen-bonded chain of water molecules and another appears at the far end**, so charge crosses a long distance while no particle does. Hydroxide moves the same way in the opposite direction. What this buys: acid-base reactions in water are exceptionally fast, which is why a proton transfer is never the slow step in an enzyme mechanism.",
      cn: "解离产物写作 H+，而溶液里并不存在游离质子：水中生成的氢离子会被水合成 hydronium ion（水合氢离子，H3O+），而且几乎是瞬时的，因为水分子之间本来就以氢键相连。接下来才是意外之处。水合氢离子和氢氧根离子在电场中的迁移远快于钠、钾、氯这类普通离子，原因不在它们的大小。**没有任何一个质子真的在溶液里跑了很远：一条氢键相连的水分子链，一端放出一个质子，远端就出现另一个质子**，于是电荷跨越了很长的距离，而没有任何粒子跨越。氢氧根以同样的方式朝相反方向移动。这换来了什么：水溶液中的酸碱反应异常之快 —— 所以在一个酶的机制里，质子转移从来不会是限速的那一步。",
      src: "A p.54, Fig. 2-13",
      see: [{ id: "L-2-1-1", en: "why water hydrogen-bonds to itself in the first place", cn: "水为什么一开始就会和自己形成氢键" }]
    },
    {
      link_en: "so much for water. Now the acids that matter in a cell",
      link_cn: "水说完了。现在说细胞里真正要紧的那些酸",
      en: "An acid is a proton donor and a base is a proton acceptor. When acetic acid gives up its proton it becomes acetate, and the two of them together are **a conjugate acid-base pair: acetic acid and acetate are one substance in two states, and which state you are holding is decided by the pH of the solution.** Hydrochloric, sulfuric and nitric acid ionize completely in dilute solution, so they have nothing left to decide — and that is exactly why the biochemically interesting acids are the ones that give their proton away only partly. Those are the weak acids, and every ionizable group on an amino acid is one.",
      cn: "酸是质子供体，碱是质子受体。乙酸让出质子就成了乙酸根，两者合起来就是一对 **conjugate acid-base pair（共轭酸碱对）：乙酸和乙酸根是同一种物质的两种状态，你手上拿的是哪一种，由溶液的 pH 决定。**盐酸、硫酸、硝酸在稀溶液中完全电离，已经没什么可决定的了 —— 而这恰恰说明，生化上有意思的是那些只把质子部分让出去的酸。它们就是弱酸，氨基酸上每一个可电离基团都是一个弱酸。",
      src: "A p.57, Fig. 2-15"
    },
    {
      link_en: "each weak acid has one number attached to it, and reading it the right way round is everything",
      link_cn: "每个弱酸都挂着一个数字，而把它读对方向就是全部关键",
      recall_en: "the same move as water's own ionization two steps up — a reversible reaction, so an equilibrium constant",
      recall_cn: "和上面水自身的电离是同一个动作 —— 可逆反应，所以有一个平衡常数",
      en: "The tendency of an acid HA to give up its proton is its equilibrium constant, called the ionization constant or the acid dissociation constant, Ka; pKa is its negative logarithm. Stronger acids have larger ionization constants and therefore smaller pKa values — the stronger the tendency to let the proton go, the lower the pKa. Now read that backwards, because backwards is the useful direction: **a group's pKa is the pH at which it is half ionized. So a pKa tells you the pH at which that particular group changes charge, which is the only thing about it a protein actually cares about.**",
      cn: "酸 HA 让出质子的倾向，就是它的平衡常数，称为 ionization constant（电离常数）或 acid dissociation constant（酸解离常数）Ka；pKa 是它的负对数。更强的酸有更大的电离常数，因而 pKa 更小 —— 放掉质子的倾向越强，pKa 越低。现在把这句话反过来读，因为反过来才是有用的方向：**一个基团的 pKa，就是它半电离时的那个 pH。所以 pKa 告诉你的是：这个基团在哪个 pH 上改变电荷 —— 而蛋白质在意的也就只有这一件事。**",
      src: "A p.57, Fig. 2-15"
    },
    {
      link_en: "where does a pKa come from? From one specific experiment",
      link_cn: "pKa 从哪来？从一个具体的实验来",
      en: "A titration curve is that experiment. Take a measured volume of the weak acid, add a strong base of known concentration in small increments until the acid is used up, judge the end point with an indicator dye or a pH meter, and plot the pH against the amount of base added. **Amounts are counted in equivalents, where one equivalent is the quantity of a substance that will react with, or supply, one mole of hydrogen ions.** One mole of an acid with a single ionizable proton is one equivalent; one mole of an acid with two is two equivalents. That is why glycine's titration curve has two steps rather than one: glycine has two ionizable groups, so it takes two equivalents of base to titrate one mole of it.",
      cn: "滴定曲线就是这个实验。取一定体积的弱酸，用已知浓度的强碱分小份加进去，直到酸被消耗完，终点用指示剂或 pH 计判断，再以 pH 对所加碱的量作图。**用量以 equivalent（当量）计：一当量是指能与一摩尔氢离子反应、或能提供一摩尔氢离子的那么多物质。**只有一个可电离质子的酸，一摩尔就是一当量；有两个的，一摩尔就是两当量。所以甘氨酸的滴定曲线有两级而不是一级：甘氨酸有两个可电离基团，滴定一摩尔它要用掉两当量的碱。",
      src: "A p.58, Fig. 2-16"
    },
    {
      link_en: "and the whole experiment exists for one place on that curve",
      link_cn: "而整个实验的意义，全在曲线上的一个位置",
      en: "**At the midpoint of each step half the acid has dissociated, so proton donor and proton acceptor are present at equal concentration — and there the pH is numerically equal to the pK.** For acetic acid that midpoint sits at pH 4.76, which is its pKa. The midpoint is also the flattest part of the curve, which means added acid or base moves the pH least there: that is where the pair buffers best. The useful buffering region runs from roughly 10% to 90% titration of the weak acid, spread either side of the midpoint.",
      cn: "**在每一级的中点上，一半的酸已经解离，因此质子供体和质子受体等浓度共存 —— 而在那里，pH 在数值上等于 pK。**对乙酸来说，这个中点在 pH 4.76，也就是它的 pKa。中点同时还是曲线最平坦的地方，意思是在那里加酸或加碱对 pH 的推动最小：那正是这对酸碱缓冲能力最强的位置。有用的 buffering region（缓冲区间）大致从弱酸被滴定 10% 延伸到 90%，分布在中点两侧。",
      src: "A p.58, Fig. 2-16"
    },
    {
      link_en: "put glycine on that curve and two numbers come off it",
      link_cn: "把甘氨酸放上这条曲线，能读下来两个数字",
      en: "Glycine is an amino acid whose side chain carries no ionizable group, so its only two titratable groups are the carboxyl group and the amino group of the backbone itself. The carboxyl group has Ka = 4.57 x 10^-3 M, so pKa 2.34; the amino group has Ka = 2.51 x 10^-10 M, so pKa 9.60. **The isoelectric point, pI, is the pH at which the molecule carries no net charge, and for an amino acid with two ionizable groups it is the mean of the two: pI = (2.34 + 9.60)/2 = 5.97.** Worth saying out loud, because it is easy to assume otherwise: an amino acid with no ionizable side chain is isoelectric well below neutrality. Other pKa values off the same scale: acetic acid 4.76, ammonium 9.25, dihydrogen phosphate 6.86, carbonic acid 3.77, bicarbonate 10.2, monohydrogen phosphate 12.4.",
      cn: "甘氨酸是一个侧链上没有可电离基团的氨基酸，所以它能被滴定的基团只有主链本身的羧基和氨基这两个。羧基的 Ka = 4.57 x 10^-3 M，即 pKa 2.34；氨基的 Ka = 2.51 x 10^-10 M，即 pKa 9.60。**isoelectric point（等电点，pI）是分子净电荷为零时的那个 pH，而对一个有两个可电离基团的氨基酸来说，它就是两者的平均值：pI = (2.34 + 9.60)/2 = 5.97。**这一点值得念出来，因为很容易想当然地以为相反：一个侧链不可电离的氨基酸，其等电点明显低于中性。同一条尺度上另外几个 pKa：乙酸 4.76、铵离子 9.25、磷酸二氢根 6.86、碳酸 3.77、碳酸氢根 10.2、磷酸一氢根 12.4。",
      src: "A p.57, Fig. 2-15",
      see: [{ id: "2-1-2", en: "the acid-base properties of amino acids and where pI comes into their behaviour", cn: "氨基酸的酸碱性质，以及 pI 在其行为中的位置" },
             { id: "E-histidine", en: "histidine, the one side chain whose pKa sits at the pH your cells run at", cn: "组氨酸 —— 唯一一个 pKa 正好落在细胞工作 pH 上的侧链" }]
    },
    {
      link_en: "two kinds of point now live on one curve, and they are opposites",
      link_cn: "现在同一条曲线上住着两类点，而它们性质相反",
      recall_en: "the pK midpoint from two steps up, now set against the pI just calculated",
      recall_cn: "上面两步说的那个 pK 中点，现在拿来和刚算出的 pI 对着看",
      en: "At a pK the proton donor and acceptor concentrations are equal, the curve is flattest, and buffering is at its strongest. The isoelectric point of an amino acid with two ionizable groups falls between two such steps, where one ionization has finished and the next has not begun — the steep part of the curve, where a small addition of acid or base swings the pH furthest and buffering is at its weakest. **Same curve, two readings, opposite in character: maximum buffering at a pK, minimum buffering at the pI.**",
      cn: "在 pK 处，质子供体与受体浓度相等，曲线最平坦，缓冲能力最强。而一个有两个可电离基团的氨基酸，其等电点落在两级之间：前一步电离已经结束、下一步还没开始 —— 那是曲线最陡的一段，少量加酸或加碱就能让 pH 摆动最大，缓冲能力最弱。**同一条曲线，两个读数，性质相反：pK 处缓冲最强，pI 处缓冲最弱。**",
      src: "A pp.58–59",
      beyond: true,
      beyondNote: "The midpoint-equals-pK result and the marked buffering regions are on pp.58-59; the isoelectric point itself belongs to §3.1. Setting the two side by side is an inference drawn here, and it should be given as reasoning rather than as something read off the page."
    },
    {
      link_en: "line several weak acids up and one general rule becomes visible",
      link_cn: "把几种弱酸排在一起，一条普遍规则就显出来了",
      en: "Acetic acid, dihydrogen phosphate and ammonium titrated on the same pH axis give curves of the same shape, simply slid along the axis to 4.76, 6.86 and 9.25. **Nothing else about the curve changes. So a pKa fixes where on the pH scale a group does its work, and only that.** Acetic acid, with the largest Ka and smallest pKa, is the strongest of the three and is already half dissociated at pH 4.76; ammonium, the weakest, waits until pH 9.25. What this is for: amino acid side chains carry ionizable groups with different pKa values, so different amino acids change charge at different pH values and therefore have different pI values — and that difference is what ion-exchange chromatography and electrophoresis separate proteins on.",
      cn: "把乙酸、磷酸二氢根和铵离子放在同一条 pH 轴上滴定，得到的是 形状完全相同的曲线，只是沿轴分别滑到 4.76、6.86 和 9.25。**曲线的其他方面一点没变。所以 pKa 决定的只有一件事：这个基团在 pH 尺度的哪个位置干活。**乙酸的 Ka 最大、pKa 最小，是三者中最强的酸，在 pH 4.76 就已经半解离；铵离子最弱，要等到 pH 9.25。这有什么用：氨基酸侧链上带着 pKa 各不相同的可电离基团，所以不同的氨基酸在不同 pH 下改变电荷，因而有不同的 pI —— 而离子交换色谱和电泳分离蛋白，靠的正是这个差别。",
      src: "A p.59, Fig. 2-17",
      see: [{ id: "L-3-3-1", en: "ion exchange and isoelectric focusing, where those pI differences do the separating", cn: "离子交换与等电聚焦 —— pI 的差别在这里被拿来做分离" }]
    },
    {
      link_en: "one caution before trusting any tabulated pKa",
      link_cn: "在相信任何一张表里的 pKa 之前，先留一个心眼",
      recall_en: "the same conditions problem as Kw, which was quoted at 25 °C and only at 25 °C",
      recall_cn: "和 Kw 遇到的是同一个「条件」问题 —— Kw 那个值也只在 25 °C 下成立",
      en: "Like every equilibrium constant, Ka and pKa are defined for stated conditions of concentration and temperature, and concentrated buffer solutions do not behave ideally. Dihydrogen phosphate is quoted as pKa 7.2 in some places and 6.86 in others: 7.2 is an apparent value, uncorrected for the effect of buffer concentration and defined at 25 °C, while 6.86 is corrected for buffer concentration and measured at the physiological temperature of 37 °C, so 6.86 is closer to what holds inside a warm-blooded animal. Carbonic acid has the same kind of discrepancy. What to do with it: **when a pKa you are handed differs from the one you remember, ask under what conditions it was measured before assuming either one is wrong.**",
      cn: "和所有平衡常数一样，Ka 与 pKa 都是在给定的浓度和温度条件下定义的，而浓缓冲液并不表现出理想行为。磷酸二氢根的 pKa 有的地方写 7.2、有的地方写 6.86：7.2 是表观值，没有对缓冲液浓度的影响作校正，而且定义在 25 °C；6.86 则已对缓冲液浓度作了校正，并在 37 °C 的生理温度下测定，所以 6.86 更接近温血动物体内的实际情形。碳酸也有同类的出入。该怎么处理：**如果别人给你的 pKa 和你记得的不一样，先问它是在什么条件下测的，再去判断谁对谁错。**",
      src: "A p.59"
    },
    {
      link_en: "and finally, why anyone measures a pH at all",
      link_cn: "最后：到底为什么要测 pH",
      en: "**pH sets the ionization state of every group that has a pKa, and those ionization states set the structure of a protein and the activity of an enzyme** — so a small change in pH can produce a large change in what a protein does. That is why blood and urine pH are read in diagnosis. In severe uncontrolled diabetes the pH of blood plasma often falls below its normal 7.4, a condition called acidosis; a pH above normal is alkalosis. How the body actually holds blood pH steady — buffers, the bicarbonate system and the Henderson-Hasselbalch equation — is a separate subject that starts from the flat stretch of curve named above.",
      cn: "**pH 决定每一个带 pKa 的基团处于什么电离状态，而这些电离状态决定蛋白质的结构和酶的活性** —— 所以 pH 的一点小变化，可以让蛋白做的事发生很大变化。这就是诊断中要看血液和尿液 pH 的原因。重度、未受控制的糖尿病患者，血浆 pH 常常低于正常的 7.4，这种情况叫 acidosis（酸中毒）；高于正常则叫 alkalosis（碱中毒）。至于身体究竟怎么把血液 pH 稳住 —— 缓冲体系、碳酸氢盐系统、Henderson-Hasselbalch 方程 —— 那是另一个题目，而它的起点正是上面说过的那段平坦曲线。",
      src: "A p.56, Box 2-1",
      see: [{ id: "L-2-3-1", en: "buffers proper, the Henderson-Hasselbalch equation and the bicarbonate system", cn: "缓冲体系本身、Henderson-Hasselbalch 方程与碳酸氢盐系统" },
             { id: "3-4", en: "how enzyme activity actually varies with pH, and what a pH optimum is", cn: "酶活性随 pH 如何变化，以及所谓最适 pH 是什么" }]
    }
  ],
  terms: [
    { en: "ion product of water", cn: "水的离子积",
      def_en: "The product [H+][OH-], equal to 1.0 x 10^-14 M² at 25 °C. It comes from folding water's own constant 55.5 M concentration into the equilibrium constant for its ionization, whose value of 1.8 x 10^-16 M was obtained by conductivity measurement on pure water. Because the product is fixed, the two concentrations are locked together.",
      def_cn: "[H+][OH-] 的乘积，25 °C 时等于 1.0 x 10^-14 M²。它来自把水自身恒定的 55.5 M 浓度并进其电离平衡常数，而那个常数值 1.8 x 10^-16 M 是对纯水做电导测量得到的。由于乘积固定，两个浓度被锁在一起。" },
    { en: "hydronium ion", cn: "水合氢离子",
      def_en: "H3O+, what a hydrogen ion becomes essentially instantly on forming in water. A bare proton does not exist in solution, so H+ written in an equation is shorthand for this.",
      def_cn: "H3O+，氢离子在水中一形成就几乎瞬时变成的东西。溶液里不存在裸露的质子，所以方程里写的 H+ 其实是它的简写。" },
    { en: "proton hopping", cn: "质子跳跃",
      def_en: "How H+ and OH- move through water far faster than sodium or chloride: a proton leaves one end of a hydrogen-bonded chain of water molecules while another appears at the far end, so charge travels a long way although no single particle does. This is why acid-base reactions in water are exceptionally fast.",
      def_cn: "H+ 与 OH- 在水中远快于钠或氯的移动方式：一条氢键相连的水分子链，一端走掉一个质子，远端就出现另一个，于是电荷走了很远，而没有任何单个粒子走远。这就是水中酸碱反应异常之快的原因。" },
    { en: "conjugate acid-base pair", cn: "共轭酸碱对",
      def_en: "A proton donor together with the proton acceptor it turns into on losing that proton — acetic acid and acetate, ammonium and ammonia. One substance in two states, with the pH relative to the pKa deciding which state predominates.",
      def_cn: "一个质子供体，连同它失去质子后变成的那个质子受体 —— 乙酸与乙酸根、铵离子与氨。同一种物质的两种状态，由 pH 相对 pKa 的位置决定哪一种占多数。" },
    { en: "pKa", cn: "pKa",
      def_en: "The negative logarithm of the acid dissociation constant Ka. The stronger the acid, the smaller the value. In practice it is the pH at the midpoint of that group's titration step — the pH at which the group is half ionized, and therefore the pH at which it changes charge and buffers best.",
      def_cn: "酸解离常数 Ka 的负对数。酸越强，这个值越小。实际操作中它就是该基团滴定级中点处的 pH —— 该基团半电离时的 pH，因而也是它改变电荷、缓冲能力最强的 pH。" },
    { en: "equivalent", cn: "当量",
      def_en: "The counting unit of a titration: the amount of a substance that will react with, or supply, one mole of hydrogen ions. One mole of an acid with a single ionizable proton supplies one mole of hydrogen ions and so counts as one; one mole of glycine, carrying two ionizable groups, counts as two — which is why glycine's titration curve has two steps.",
      def_cn: "滴定里的计数单位：能与一摩尔氢离子反应、或能提供一摩尔氢离子的那么多物质。只有一个可电离质子的酸，一摩尔提供一摩尔氢离子，所以算一份；甘氨酸带两个可电离基团，一摩尔就算两份 —— 这正是甘氨酸滴定曲线有两级的原因。" },
    { en: "buffering region", cn: "缓冲区间",
      def_en: "The flat stretch of a titration curve around a pKa, running from roughly 10% to 90% titration of the weak acid, where added acid or base changes the pH least. It peaks at the midpoint, where donor and acceptor concentrations are equal.",
      def_cn: "滴定曲线上环绕某个 pKa 的那段平坦区间，大致从弱酸被滴定 10% 到 90%，在这里加酸或加碱对 pH 的改变最小。极大值在中点，即供体与受体浓度相等之处。" },
    { en: "isoelectric point", cn: "等电点",
      def_en: "The pH at which a molecule carries no net charge. For an amino acid with two ionizable groups it is the mean of the two pKa values — 5.97 for glycine. It falls on the steep part of the titration curve, between two ionization steps, so buffering there is weakest.",
      def_cn: "分子净电荷为零时的那个 pH。对有两个可电离基团的氨基酸来说，它是两个 pKa 的平均值 —— 甘氨酸为 5.97。它落在滴定曲线陡峭的那一段、两级电离之间，所以那里缓冲能力最弱。" },
    { en: "acidosis / alkalosis", cn: "酸中毒／碱中毒",
      def_en: "Blood plasma pH below its normal 7.4, as often happens in severe uncontrolled diabetes, is acidosis; above normal is alkalosis. Both matter because pH sets the ionization state of every group with a pKa, and through that the structure and activity of proteins.",
      def_cn: "血浆 pH 低于正常的 7.4（重度、未受控制的糖尿病常常如此）就是酸中毒；高于正常则是碱中毒。两者之所以要紧，是因为 pH 决定每一个带 pKa 的基团的电离状态，并借此决定蛋白质的结构与活性。" }
  ]
};

/* ===================================================================== L-3-3-1 */
window.BIOLITE_SPINE["L-3-3-1"] = {
  assumed: ["protein", "enzyme", "cell", "amino acid", "substrate", "product",
            "buffer", "salt", "molecule", "membrane", "gene", "ATP",
            "centrifugation", "solubility", "concentration", "pH"],
  nodeTitle_en: "Working with proteins",
  nodeTitle_cn: "蛋白质操作技术",
  title_en: "How you get one protein out of the thousands in a cell, and how you know when it is pure",
  title_cn: "怎么把一种蛋白从细胞里成千上万种蛋白中弄出来，以及凭什么说它已经纯了",
  steps: [
    {
      en: "To study one protein you first have to separate it from the thousands of others around it, in pure form, and then be able to measure its properties. There is a modern shortcut and it comes with a price: **genetic-engineering methods give an easier route to purification by adding a few or many extra amino acid residues to one or both ends of the protein, and in many cases that added stretch alters what the protein does.** Getting an unaltered native protein therefore means either cutting the addition off afterwards or using the classical bench methods below. That is the honest reason ammonium sulfate is still worth learning.",
      cn: "要研究一种蛋白，你首先得把它从周围成千上万种其他蛋白里以纯品的形式分出来，然后还要能测它的性质。有一条现代捷径，但它是要付代价的：**基因工程方法提供了更省事的纯化途径，做法是在蛋白的一端或两端加上少则几个、多则许多氨基酸残基，而在很多情况下，这段加上去的东西会改变蛋白的功能。**所以要拿到未经改造的天然蛋白，要么事后把它切掉，要么就用下面这些经典的实验台方法。这就是硫酸铵盐析今天仍然值得学的老实理由。",
      src: "A p.83"
    },
    {
      link_en: "so, from a live cell to something you can put on a column",
      link_cn: "那就从活细胞开始，一直做到能上柱的样品",
      en: "Break the cells open and what you have is a crude extract — every soluble protein in the cell, together. (If you want a particular organelle, differential centrifugation comes first and separates the subcellular fractions.) Then the proteins are separated into groups on the basis of a property such as size or charge, and that process is called fractionation. The early steps use solubility, which depends in a complicated way on pH, temperature and salt concentration. **Adding certain salts lowers protein solubility — an effect called salting out — and ammonium sulfate is particularly good at selectively precipitating some proteins while leaving others dissolved**; low-speed centrifugation then removes whatever has come out of solution. The salt now has to come back out, and that is what dialysis does: the preparation goes into a bag of semipermeable membrane suspended in a much larger volume of buffer, and the membrane lets salt and buffer through while the protein, being far bigger, stays inside.",
      cn: "把细胞破开，你得到的是 crude extract（粗提液） —— 细胞里所有可溶蛋白，全在一起。（如果你要的是某个特定细胞器，那就先做差速离心，把亚细胞组分分开。）接下来按大小或电荷之类的性质把这些蛋白分成若干组，这个过程叫 fractionation（分级分离）。前面几步利用的是溶解度，而溶解度以复杂的方式取决于 pH、温度和盐浓度。**加入某些盐会降低蛋白的溶解度 —— 这个效应叫 salting out（盐析） —— 而硫酸铵特别擅长选择性地把一部分蛋白沉下来、让另一部分留在溶液里**；随后用低速离心把析出来的东西移走。现在盐又必须弄出去，这正是 dialysis（透析）的活：把制备物装进半透膜做的袋子，悬在体积大得多的缓冲液里，膜让盐和缓冲液通过，而蛋白因为大得多，留在袋内。",
      src: "A pp.84, 86"
    },
    {
      link_en: "and the order of the steps is decided by arithmetic, not by taste",
      link_cn: "而步骤的先后是算出来的，不是凭喜好排的",
      en: "**Cheap crude procedures such as salting out go first, when the total volume and the number of contaminating proteins are both at their greatest.** Every completed step shrinks the sample, which is what makes the sophisticated and expensive chromatographic procedures affordable at the end. Cost and volume fall together, so the methods sort themselves into the right order. One further rule: several different methods have to be used in sequence, each separating on a different property, because no single property distinguishes one protein from all the rest.",
      cn: "**像盐析这种又便宜又粗放的手段排在最前面，因为那时总体积最大、杂蛋白的种类也最多。**每完成一步样品都变小一点，正因如此，精细而昂贵的层析方法到了后期才负担得起。成本和体积是一起往下走的，所以这些方法会自动排到正确的位置上。还有一条规则：必须依次用上好几种不同的方法，每一种按不同的性质分离 —— 因为没有任何单一性质能把一种蛋白和其余所有蛋白区分开。",
      src: "A p.86"
    },
    {
      link_en: "three of those methods share one piece of apparatus, so set the apparatus up once",
      link_cn: "其中三种方法共用同一套装置，所以先把装置一次说清楚",
      en: "A column holds a porous solid with chosen chemical properties — the stationary phase — and a buffered solution, the mobile phase, flows down through it. The protein sample is layered on top in the same buffer and percolates downward as a band that keeps widening, individual proteins moving faster or slower according to their properties. Fractions of the liquid coming out of the bottom are collected in order, each is tested for the protein you want, and the positive ones are pooled as the product of that step. Two effects fight each other here. **A longer column improves separation, because the proteins have more distance in which to pull apart. Every band also spreads out by diffusion as time passes, which blurs them back together.** In one worked case, protein A separates cleanly from B and C while diffusional spreading keeps B and C from separating completely. This is the whole reason for high-performance liquid chromatography: HPLC drives the sample down with high-pressure pumps, through matrix material tough enough to survive the pressure, so the transit time is short and diffusion gets less time to act. HPLC wins resolution without using any new property at all.",
      cn: "柱子里装着一种化学性质经过挑选的多孔固体 —— 即 stationary phase（固定相） —— 而一种缓冲溶液，即 mobile phase（流动相），从中自上而下流过。蛋白样品用同样的缓冲液铺在柱顶，以一条不断变宽的带向下渗透，不同的蛋白按各自的性质走得或快或慢。从柱底流出来的液体被依次分部收集，每一份都检测有没有你要的那个蛋白，阳性的合并起来，作为这一步的产物。这里有两种效应在互相对抗。**柱子越长分离越好，因为蛋白有更长的距离可以拉开。而每一条带同时也会随时间推移因扩散而变宽，又把它们糊回一起。**在书上演示的一个例子里，蛋白 A 与 B、C 分得很干净，而扩散扩宽使 B 和 C 无法完全分开。这就是 HPLC（高效液相层析）存在的全部理由：它用高压泵把样品往下赶，配上能扛住这种压力的更高品质基质材料，于是在柱上停留的时间很短，留给扩散作用的时间也就少了。HPLC 提高分辨率，靠的完全不是什么新的性质。",
      src: "A p.84, Fig. 3-16; A p.86"
    },
    {
      link_en: "first column: it reads charge",
      link_cn: "第一根柱子：它读的是电荷",
      en: "Ion-exchange chromatography is the column that reads charge: it exploits differences in the sign and size of a protein's net electric charge at a given pH. The matrix is a synthetic polymer, a resin, carrying charged groups bound to it — and here is the naming trap: a resin with bound anionic (negative) groups is called a cation exchanger, and one with bound cationic groups is an anion exchanger. The name says what the column catches, not what the column carries. So a cation exchanger is itself negative and holds back positively charged proteins. Get that backwards and every prediction inverts. Worked case: peptide A has a pI of 5.1 and is therefore net negative at neutral pH; peptide B has a pI of 7.8 and is net positive. On a cation exchanger, B is held back and A comes off first. On an anion exchanger, A is held back and B comes off first. **The rule that survives every version of the question: the protein whose charge is opposite to the resin's is the one that sticks, and whatever sticks comes off last.** Separation is tuned by running a gradient of pH, which shifts the proteins' ionization states, or of salt, whose free ions compete for the resin's charges.",
      cn: "ion-exchange chromatography（离子交换层析）就是那根读电荷的柱子：它利用的是蛋白在给定 pH 下净电荷的符号和大小的差异。基质是一种合成聚合物（树脂），上面结合着带电基团 —— 命名陷阱就在这里：结合着阴离子（负电）基团的叫 cation exchanger（阳离子交换剂），结合着阳离子基团的叫 anion exchanger（阴离子交换剂）。名字说的是柱子抓什么，而不是柱子自己带什么。所以阳离子交换剂本身带负电，扣住的是带正电的蛋白。这一点搞反，后面每一个预测都会颠倒。具体例子：肽 A 的 pI 是 5.1，所以在中性 pH 下净带负电；肽 B 的 pI 是 7.8，净带正电。在阳离子交换柱上，B 被扣住，A 先出来。在阴离子交换柱上，A 被扣住，B 先出来。**无论题目怎么变都成立的那条规则是：电荷与树脂相反的那个蛋白会被粘住，而被粘住的最后才出来。**要优化分离，就跑一个 pH 梯度（改变蛋白的电离状态）或一个盐梯度（游离盐离子去竞争树脂上的电荷）。",
      src: "A p.85, Fig. 3-17; A p.86, Worked Example 3-1",
      see: [{ id: "L-2-2-1", en: "where a protein's pI comes from, and why it is the mean of two pK values", cn: "蛋白的 pI 从哪来，以及它为什么是两个 pK 的平均值" }]
    },
    {
      link_en: "second column: it reads size, and the result runs backwards from what the name suggests",
      link_cn: "第二根柱子：它读的是大小，而结果和名字给人的印象正好反过来",
      en: "**Size-exclusion chromatography, also called gel filtration, separates by size — and large proteins come off the column before small ones.** The solid phase is cross-linked polymer beads with cavities of a particular engineered size inside them. Large proteins cannot get into the cavities, so they take the short route around the outside of the beads and reach the bottom quickly. Small proteins go inside, and the labyrinth in there makes their path much longer, so they are slowed down. The column works as a detour: anything small enough to fit inside a bead is forced to travel further, and travelling further takes longer. What the column really measures is how much of the beads' internal volume a molecule is allowed into. It can also give a size: run a set of standard proteins whose retention times are reproducible, plot retention time against log Mr to get a standard curve, and read an unknown's approximate Mr off that curve.",
      cn: "**size-exclusion chromatography（尺寸排阻层析，也叫 gel filtration 凝胶过滤）按大小分离 —— 而大蛋白比小蛋白更早从柱里出来。**固定相是交联聚合物小球，球内部有特意做出来的、特定尺寸的空腔。大蛋白钻不进这些空腔，只能沿小球外面走近路，很快就到柱底。小蛋白钻得进去，而里面那套迷宫让它们的路径长出很多，于是被拖慢。这根柱子起的是绕路的作用：凡是小到能塞进小球里的，都被迫多走一段，而多走就更慢。这根柱子真正测量的，是一个分子被允许进入小球内部体积的多少。它也能给出大小：跑一组保留时间可重复的标准蛋白，以保留时间对 log Mr 作图得到标准曲线，再把未知样品的保留时间在曲线上读出来，得到近似的 Mr。",
      src: "A p.85, Fig. 3-17; A p.86"
    },
    {
      link_en: "third column: it ignores physical properties altogether and reads what the protein does",
      link_cn: "第三根柱子：它根本不看物理性质，只看这个蛋白会做什么",
      en: "**Affinity chromatography separates on binding specificity, which means it separates on function.** The beads carry a chemical group attached to them by a covalent bond — a ligand, meaning a group or molecule that binds to a macromolecule such as a protein. Any protein in the mixture with an affinity for that ligand binds the beads and is held back; everything else runs straight through. The example says the whole idea in one line: if the protein you want does its job by binding ATP, attach something resembling ATP to the beads, and the column now selects exactly the proteins that do that job. Two ways to get the protein off again, and they work differently. High salt is the blunt one: it interferes with ionic interactions and weakens the binding generally. Free ligand is the specific one: ligand added in solution competes with the ligand bolted to the beads and releases the protein — with the consequence that a protein eluted this way often arrives still bound to the ligand used to elute it. The modern version closes the loop with the caveat this spine opened on: an engineered tag fused onto the protein gives affinity chromatography something to grip, so purity jumps enormously in a single step, and in many cases the tag can afterwards be cut off and native function fully restored.",
      cn: "**affinity chromatography（亲和层析）按结合特异性分离，也就是说，它按功能分离。**小球上以共价键接着一个化学基团 —— 即 ligand（配体），指的是能与蛋白这类大分子结合的一个基团或分子。混合物里凡是对这个配体有亲和力的蛋白都会结合到小球上、被扣住；其余的径直流过。书上的例子一句话说尽这个思路：如果你要的蛋白靠结合 ATP 干活，那就把一个类似 ATP 的东西接到小球上，这根柱子现在挑出来的，恰好就是干这份活的那些蛋白。把蛋白弄下来有两条路，作用方式不同。高盐是钝的那条：它干扰离子相互作用，笼统地削弱结合。游离配体是特异的那条：往溶液里加配体，去和拴在小球上的配体竞争，从而把蛋白放出来 —— 随之而来的后果是，这样洗脱下来的蛋白往往还结合着用来洗脱它的那个配体。现代版本正好和这条 spine 开头那个提醒接上了：把一个人工设计的 tag（标签）融合到蛋白上，亲和层析就有了可以抓的东西，于是一步之内纯度就大幅跃升；而且在许多情况下，标签事后可以切掉，天然功能完全恢复。",
      src: "A p.85, Fig. 3-17; A p.86",
      see: [{ id: "L-9-2-1", en: "engineered tags and the other ways a protein's function is probed", cn: "人工标签，以及探究蛋白功能的其他手段" }]
    },
    {
      link_en: "every step above assumed something that has to be arranged before any of it starts",
      link_cn: "上面每一步都预设了一件事，而这件事必须在动手之前就安排好",
      en: "You have to be able to find your protein among all the others, and put a number on how much of it is there, at every single stage. That means an assay. **For an enzyme the assay measures what the enzyme does: the increase in the rate at which its substrate is turned into product when the enzyme is present.** Six things have to be known before that measurement means anything: the overall equation of the reaction; a way of following either the substrate disappearing or the product appearing; whether the enzyme needs cofactors such as metal ions or coenzymes; how the activity depends on substrate concentration; the pH at which activity is highest; and a temperature range in which the enzyme stays both stable and active. Assays are run at that best pH, usually between 25 and 38 °C, and at very high substrate concentration — high enough that the measured initial rate is proportional to the amount of enzyme present rather than to how much substrate happens to be around.",
      cn: "你必须能在所有其他蛋白当中找到你的那个蛋白，并且给「有多少」这件事一个数字 —— 每一个阶段都要能做到。这就意味着你得有一套 assay（活性测定）。**对酶来说，测定量的是这个酶所做的事：加了酶之后，底物转化为产物的速率增加了多少。**在这个测量有意义之前，有六件事必须先知道：所催化反应的总方程式；一种能追踪底物消失或产物出现的分析方法；这个酶要不要金属离子或辅酶之类的辅因子；活性如何随底物浓度变化；活性最高时的 pH；以及酶能保持稳定且有活性的温度区间。测定就在那个最合适的 pH 下进行，温度一般在 25 到 38 °C 之间，并且用很高的底物浓度 —— 高到让测得的初速率与酶的量成正比，而不是与手头恰好有多少底物成正比。",
      src: "A pp.89–90",
      see: [{ id: "3-3-3", en: "expressing how much enzyme you have as activity rather than as mass", cn: "为什么酶的量要用活性来表示，而不是用质量" },
             { id: "L-6-3-1", en: "why a high substrate concentration makes the rate report enzyme concentration", cn: "为什么底物浓度足够高时，速率反映的就是酶的浓度" }]
    },
    {
      link_en: "that assay yields two numbers, and confusing them is the classic mistake",
      link_cn: "这套测定给出两个数字，而把它们搞混是最经典的错误",
      en: "By international agreement, 1.0 unit of enzyme activity is the amount of enzyme that converts 1.0 micromole of substrate into product per minute at 25 °C under the best conditions for it. From there: activity means the total number of units in the solution. Specific activity means the number of units per milligram of total protein. Two flasks of marbles make the difference visible. Both flasks hold the same number of red marbles, which stand for the enzyme you want; the second flask holds far fewer marbles of every other colour. The two flasks have the same activity and different specific activities, because in the second one the red marbles are a larger share of everything present. **So specific activity does not measure how much enzyme you have. It measures what fraction of the protein in your hand is the enzyme you want.**",
      cn: "按国际约定，1.0 个酶活性单位是指：在最适条件下、25 °C 时，每分钟把 1.0 微摩尔底物转化为产物所需的那么多酶。由此：activity（活性）指的是溶液里的总单位数。specific activity（比活性）指的是每毫克总蛋白所含的单位数。两瓶弹珠能让这个区别看得见。两个瓶子里红弹珠的数目一样多，红弹珠代表你要的那个酶；第二个瓶子里其他各种颜色的弹珠少得多。两瓶的活性相同，比活性却不同，因为在第二个瓶子里，红弹珠在全部东西中所占的比例更大。**所以比活性量的根本不是「我有多少酶」。它量的是「我手上这堆蛋白里，有多大比例是我要的那一个」。**",
      src: "A p.90"
    },
    {
      link_en: "now put every step of the purification in a table and do two divisions",
      link_cn: "现在把纯化的每一步列成一张表，做两次除法",
      en: "A purification table records, for each step, the fraction volume, the total protein, the total activity and the specific activity. A worked enzyme purification runs: crude extract, 1,400 mL, 10,000 mg protein, 100,000 units, specific activity 10; ammonium sulfate precipitation, 280 mL, 3,000 mg, 96,000 units, 32; ion exchange, 90 mL, 400 mg, 80,000 units, 200; size exclusion, 80 mL, 100 mg, 60,000 units, 600; affinity, 6 mL, 3 mg, 45,000 units, 15,000. **Division one — final specific activity over starting specific activity, 15,000/10 — gives the purification factor: 1,500-fold. Division two — final total activity over starting total activity, 45,000/100,000 — gives the yield: 45%.** These two pull against each other, because every step that raises purity throws some of the product away, so a protocol has to be judged on both at once. Notice the volumes as well: 1,400 mL collapsing to 6 mL is the physical reason the expensive methods are affordable at the end.",
      cn: "一张纯化表记录每一步的组分体积、总蛋白、总活性和比活性。书上演示的一次酶纯化是这样走的：粗提液，1,400 mL，10,000 mg 蛋白，100,000 单位，比活性 10；硫酸铵沉淀，280 mL，3,000 mg，96,000 单位，32；离子交换，90 mL，400 mg，80,000 单位，200；尺寸排阻，80 mL，100 mg，60,000 单位，600；亲和层析，6 mL，3 mg，45,000 单位，15,000。**第一次除法 —— 最终比活性除以初始比活性，15,000/10 —— 给出纯化倍数：1,500 倍。第二次除法 —— 最终总活性除以初始总活性，45,000/100,000 —— 给出回收率：45%。**这两个数互相拉扯，因为每一个提高纯度的步骤都要扔掉一部分产物，所以评价一个方案必须同时看这两个数。顺便看一眼体积：从 1,400 mL 塌缩到 6 mL —— 这就是那些昂贵方法到了后期才负担得起的物理原因。",
      src: "A p.87, Table 3-5"
    },
    {
      link_en: "why the columns of that table move the way they do is the part to understand",
      link_cn: "表里那几列为什么这样变化，才是要真正理解的部分",
      recall_en: "the ratio from the marbles two steps up, now watched changing down a whole table",
      recall_cn: "上面弹珠那一步说的那个比值，现在看它沿着整张表一路变化",
      en: "Total activity falls at every step, because there is always some loss to inactivation and to non-ideal interactions with the chromatographic material. Total protein falls at every step too, since removing unwanted protein is the entire objective. Specific activity is one divided by the other, so it rises only when the denominator falls faster than the numerator — which is what a successful step is: the loss of non-specific protein is far greater than the loss of activity. **Total activity is falling while specific activity is rising, and understanding that one sentence is understanding the whole purification.** And it gives the word pure an operational definition instead of a vague one: a protein is taken to be pure when further purification steps fail to raise its specific activity, and when only a single species can be detected, for example on an SDS gel. Two criteria that are independent of each other — one functional, one physical. The same logic covers proteins that are not enzymes, through whatever the protein does: a transport protein is assayed by its binding to the molecule it transports, a hormone or a toxin by the biological effect it produces — a growth hormone by how much it stimulates cultured cells — and some structural proteins make up such a large fraction of a tissue that they can be extracted and purified with no functional assay at all.",
      cn: "总活性每一步都在下降，因为总会有一些损失来自失活，以及与层析材料之间的非理想相互作用。总蛋白每一步也在下降，因为去掉不想要的蛋白本来就是全部目的。比活性是二者相除，所以只有当分母降得比分子快时它才会上升 —— 而一个成功的步骤正是这样：非特异性蛋白的损失远大于活性的损失。**总活性在往下掉，比活性却在往上涨 —— 把这一句话弄懂，就等于把整个纯化弄懂了。**而且它把「纯」这个字从含糊变成了一个可操作的定义：当进一步的纯化步骤再也提不高比活性、并且只能检测到单一物种（比如在一块 SDS 凝胶上）时，就认为这个蛋白纯了。两条彼此独立的判据 —— 一条是功能上的，一条是物理上的。对不是酶的蛋白，同样的逻辑通过「这个蛋白做什么」照样成立：转运蛋白用它与所转运分子的结合来测定，激素和毒素用它们产生的生物学效应来测定 —— 生长激素就看它对培养细胞的刺激有多强 —— 而某些结构蛋白在组织里所占的比例大到根本不需要功能测定就能提取纯化。",
      src: "A p.90"
    },
    {
      link_en: "that second criterion needs a method of its own, and it is a very different kind of method",
      link_cn: "第二条判据需要它自己的方法，而那是一种性质完全不同的方法",
      en: "Electrophoresis is what happens when an electric field is put across a slab of gel holding a protein sample: charged molecules migrate through the gel, and how far each one travels is what you read off it afterwards. It contributes nothing to purification, and it often damages a protein's structure and with it the protein's function. It is a way of looking rather than a way of making. What it is good at: estimating quickly how many different proteins are in a mixture, judging how pure a preparation is, and determining a protein's isoelectric point and approximate molecular weight. The physics is one short relation and it decides everything that follows. Electrophoretic mobility is a molecule's velocity divided by the electrical potential driving it, and it equals the net charge Z divided by the frictional coefficient f — and f depends in part on the protein's shape. **So how far a protein migrates in a gel is a function of its size and of its shape at once. That is the problem: two unknowns folded into one measurement, so a plain gel cannot report a mass.** A small heavily charged protein and a large weakly charged one can run to the same place, and an elongated protein is held back relative to a compact one of identical mass. The gel itself is cross-linked polyacrylamide, which acts as a molecular sieve in the ordinary direction — it slows large molecules down, the opposite of what the size-exclusion column does. Every useful electrophoretic method that follows is a trick for pinning one of those two variables still.",
      cn: "所谓电泳，就是把一个电场加在装有蛋白样品的一块凝胶上：带电分子在胶里迁移，而事后你要读的，就是每一种走了多远。 它对纯化毫无贡献，而且常常损伤蛋白的结构，连带损伤蛋白的功能。它是一种「看」的手段，而不是一种「造」的手段。它擅长的是：快速估计混合物里有多少种不同的蛋白、判断一份制备物有多纯，以及测定蛋白的等电点和近似分子量。它的物理原理就是一条简短的关系式，而这条关系式决定了后面的一切。electrophoretic mobility（电泳迁移率）等于分子的速度除以驱动它的电势，同时也等于净电荷 Z 除以摩擦系数 f —— 而 f 部分地取决于蛋白的形状。**所以蛋白在凝胶里跑多远，同时是它的大小和它的形状的函数。问题就在这里：两个未知量被折进了同一个测量值，所以一块普通的凝胶报不出质量。**一个电荷很高的小蛋白和一个电荷很低的大蛋白可能跑到同一个位置；而一个细长的蛋白，相对于同质量的紧凑蛋白会被拖住。凝胶本身是交联聚丙烯酰胺，它起分子筛的作用，而且是按通常的方向起作用 —— 它减慢大分子，和尺寸排阻柱恰好相反。后面每一种有用的电泳方法，都是把这两个变量之一按住不动的花招。",
      src: "A p.87, Fig. 3-18; A p.88"
    },
    {
      link_en: "and one detergent pins both of them at the same time",
      link_cn: "而有一种去污剂，一次把两个都按住了",
      recall_en: "the two variables from the mobility relation one step up, dealt with one after the other",
      recall_cn: "上一步那条迁移率关系式里的两个变量，这里一个一个地被处理掉",
      en: "Sodium dodecyl sulfate, SDS, is a detergent whose tail is a 12-carbon chain, and three facts about it do all the work. First, it binds in proportion to size: a protein binds about 1.4 times its own weight of SDS, close to one SDS molecule per amino acid residue — so how much is bound is set by how many residues there are, which is to say by mass. Second, the charge is swamped: the sulfate groups of all that bound SDS contribute a large net negative charge that makes the protein's own charge insignificant, so every protein ends up with a similar charge-to-mass ratio. The numerator Z now tracks mass instead of amino acid composition. Third, the shape is erased: SDS binding partially unfolds proteins, so nearly all of them take on a similar rodlike shape and the denominator f stops varying. **Both variables are pinned, and what is left is mass — so electrophoresis in the presence of SDS separates almost purely by mass, with smaller polypeptides running faster.** The bands are then stained with a dye such as Coomassie blue, which binds protein and not the gel, so a purification can be followed by watching the number of bands drop after each step. ⚠️ The trap: if a protein is built from two or more different subunits, SDS pulls those subunits apart and each one gives its own band. An SDS gel therefore reports the mass of a subunit. Sedimentation in an ultracentrifuge weighs the intact assembled particle instead, so for a tetramer the two methods legitimately return numbers differing about fourfold — both correct, answering different questions.",
      cn: "十二烷基硫酸钠（SDS）是一种去污剂，它的尾巴是一条十二个碳的链，而关于它的三个事实包办了全部工作。第一，它的结合量与大小成比例：一个蛋白结合的 SDS 约为自身重量的 1.4 倍，差不多每个氨基酸残基结合一分子 SDS —— 所以结合了多少，取决于有多少个残基，也就是取决于质量。第二，电荷被淹没：结合上去的这么多 SDS，其硫酸基贡献了巨大的净负电荷，使蛋白自身的电荷变得无关紧要，于是每一种蛋白最后都有相近的电荷质量比。分子 Z 现在跟着质量走，不再跟着氨基酸组成走。第三，形状被抹平：SDS 的结合会把蛋白部分展开，于是几乎所有蛋白都变成相似的棒状，分母 f 不再变化。**两个变量都被按住了，剩下的就只有质量 —— 所以在 SDS 存在下的电泳几乎纯粹按质量分离，越小的多肽跑得越快。**之后用考马斯亮蓝之类的染料给条带染色，它结合蛋白而不结合凝胶本身，于是可以靠观察每一步之后条带数目的减少来跟踪纯化进程。⚠️ 陷阱：如果一个蛋白由两种或更多不同的亚基搭成，SDS 会把这些亚基拆开，每个亚基给出自己的一条带。所以 SDS 凝胶报告的是一个亚基的质量。而超速离心中的沉降称量的是完整组装起来的那个颗粒，所以对一个四聚体来说，两种方法给出的数字相差约四倍是完全正当的 —— 两者都对，只是回答的问题不同。",
      src: "A p.88",
      beyond: true,
      beyondNote: "SDS separating subunits is on p.88. The contrast with sedimentation in an ultracentrifuge is drawn from the protein-properties material rather than from pp.83-90, and is carried in here because the two methods are routinely compared."
    },
    {
      link_en: "so how do you turn a band's position into a number?",
      link_cn: "那怎么把一条带的位置变成一个数字？",
      en: "Run a set of standard proteins of known molecular weight in one lane as markers and the unknown in another. **A plot of the markers' log Mr against how far each one migrated is a straight line, and the unknown's molecular weight is read straight off that line.** The logarithm is what matters here: migration is linear in log Mr rather than in Mr, so a gel separates a 20,000 from a 40,000 far more clearly than a 200,000 from a 220,000.",
      cn: "**在一条泳道里跑一组分子量已知的标准蛋白作为 marker（标志物），未知样品跑在另一条泳道。把这些标志物的 log Mr 对各自迁移的距离作图，得到的是一条直线，未知蛋白的分子量就直接从这条直线上读出来。关键在那个对数：迁移与 log Mr 成线性，而不是与 Mr 成线性，所以一块凝胶区分 20,000 和 40,000，要比区分 200,000 和 220,000 清楚得多。**",
      src: "A p.88, Fig. 3-19"
    },
    {
      link_en: "one more property left to separate on, and combining it with mass is worth more than either alone",
      link_cn: "还剩一种性质可以拿来分离，而把它和质量组合起来，价值远超各自单干",
      recall_en: "charge again, the property ion exchange read at the start — used here to make a protein stop rather than to make it stick",
      recall_cn: "又是电荷 —— 开头那根离子交换柱读的就是它；这次用它让蛋白停下来，而不是让蛋白粘住",
      en: "Isoelectric focusing separates by pI. A mixture of low molecular weight organic acids and bases, called ampholytes, is allowed to distribute itself in an electric field across the gel, and doing so sets up a stable pH gradient along it. **Each protein then migrates until it reaches the pH that equals its own pI, and stops there. It stops because at that pH its net charge is zero, so the electric field has nothing left to pull on** — the protein has become invisible to the field rather than blocked by anything. Two-dimensional electrophoresis runs the two separations at right angles: isoelectric focusing first, in a thin strip of gel, then the strip is laid along the edge of a slab gel and SDS-PAGE is run down it. Horizontal position now reports pI and vertical position reports molecular weight, which resolves proteins of identical molecular weight that differ in pI, and proteins of similar pI that differ in molecular weight — neither of which either method could do on its own. Thousands of cellular proteins can be separated this way, and an individual spot can then be cut out of the gel and identified by mass spectrometry.",
      cn: "isoelectric focusing（等电聚焦）按 pI 分离。让一批低分子量的有机酸和碱 —— 称为 ampholytes（两性电解质） —— 在电场中沿凝胶自行分布，这一分布就在胶上建立起一个稳定的 pH 梯度。**随后每一种蛋白往前迁移，直到抵达 pH 等于它自己 pI 的那个位置，就停在那里。它停下来的原因是：在那个 pH 下它的净电荷为零，电场再无处着力** —— 蛋白是对电场变成了隐形，而不是被什么东西挡住了。双向电泳把两种分离沿垂直的两个方向做：先在一条细长胶条里做等电聚焦，然后把这条胶沿边缘放到板状胶上，往下跑 SDS-PAGE。于是水平位置报告 pI，垂直位置报告分子量，这样既能分开分子量相同而 pI 不同的蛋白，也能分开 pI 相近而分子量不同的蛋白 —— 这两件事任何一种方法单干都做不到。用这种办法可以分开成千上万种细胞蛋白，而单个斑点还能从胶上切下来，用质谱鉴定它是什么。",
      src: "A p.89, Figs. 3-20 and 3-21",
      see: [{ id: "L-3-4-1", en: "what mass spectrometry does with that spot once it is cut out", cn: "斑点切下来之后，质谱拿它做什么" },
             { id: "2-2-6", en: "the other question asked of the same toolbox — how heavy is this protein", cn: "同一套工具箱被问的另一个问题 —— 这个蛋白有多重" }]
    }
  ],
  terms: [
    { en: "fractionation", cn: "分级分离",
      def_en: "Treating a crude extract so that its proteins separate into groups on the basis of one property such as size or charge. A purification is a sequence of these, each using a different property, because no single property tells one protein from all the rest.",
      def_cn: "对粗提液施加处理，让其中的蛋白按某一种性质（大小、电荷等）分成若干组。一次纯化就是这样一连串的操作，每一步换一种性质 —— 因为没有任何单一性质能把一种蛋白与其余所有蛋白区分开。" },
    { en: "crude extract", cn: "粗提液",
      def_en: "What you get by breaking cells open: every soluble protein of the cell together in one solution. It is the starting row of a purification table, and its volume and contaminant count are the largest anything will ever be.",
      def_cn: "把细胞破开之后得到的东西：细胞里所有可溶蛋白混在同一份溶液里。它是纯化表的第一行，而它的体积和杂质数目是整个过程中的最大值。" },
    { en: "salting out", cn: "盐析",
      def_en: "Lowering protein solubility by adding salt. Ammonium sulfate is particularly good at precipitating some proteins selectively while leaving others in solution, and low-speed centrifugation then removes the precipitate. Cheap and crude, so it goes first; the salt is then taken back out by dialysis.",
      def_cn: "靠加盐降低蛋白的溶解度。硫酸铵特别擅长有选择地沉淀一部分蛋白、让另一部分留在溶液里，随后用低速离心把沉淀移走。它便宜又粗放，所以排在最前面；盐再靠透析弄出去。" },
    { en: "dialysis", cn: "透析",
      def_en: "Separating proteins from small solutes by size: the preparation sits in a semipermeable bag suspended in a much larger volume of buffer, the membrane passes salt and buffer, and the protein stays inside because it is too big to cross.",
      def_cn: "按大小把蛋白和小分子溶质分开：制备物装在半透膜袋子里，悬在体积大得多的缓冲液中，膜让盐和缓冲液通过，而蛋白因为太大过不去，留在袋内。" },
    { en: "stationary phase / mobile phase", cn: "固定相／流动相",
      def_en: "The two parts of a chromatography column: a porous solid with chosen chemical properties packed in the column, and a buffered solution flowing down through it carrying the sample. Everything that separates proteins on a column comes from how the two differ in what they hold onto.",
      def_cn: "层析柱的两个部分：装在柱里的、化学性质经过挑选的多孔固体，以及从中向下流过、带着样品的缓冲溶液。柱子能分开蛋白，全靠这两者「抓住什么」的差别。" },
    { en: "cation exchanger", cn: "阳离子交换剂",
      def_en: "A resin carrying bound anionic (negative) groups, named for the ions it exchanges rather than for the ones it carries. Being negative, it holds back positively charged proteins. Reverse the name in your head and every elution prediction inverts.",
      def_cn: "带有结合态阴离子（负电）基团的树脂，名字取自它交换的离子，而不是它自己带的离子。它本身带负电，所以扣住的是带正电的蛋白。名字一旦记反，所有洗脱顺序的预测都会颠倒。" },
    { en: "size-exclusion chromatography", cn: "尺寸排阻层析",
      def_en: "Beads with internal cavities of a set size. Large proteins cannot get in and take the short path around the beads, so they elute first; small proteins go in and are slowed by a labyrinthine path. The column works as a detour. Calibrated against standards, it also gives an approximate Mr.",
      def_cn: "内部带有特定尺寸空腔的小球。大蛋白进不去，走小球外面的近路，所以先被洗脱；小蛋白进得去，被迷宫般的路径拖慢。这根柱子起的是绕路的作用。用标准品标定后，它也能给出近似的 Mr。" },
    { en: "affinity chromatography", cn: "亲和层析",
      def_en: "Separation by binding specificity, and therefore by function: a ligand is attached to the beads and only proteins that bind it are held back. Eluted with high salt, which weakens ionic interactions bluntly, or with free ligand, which competes the protein off specifically. An engineered tag turns it into a one-step purification.",
      def_cn: "按结合特异性分离，因而是按功能分离：把一个配体接到小球上，只有能结合它的蛋白才被扣住。洗脱可用高盐（笼统地削弱离子相互作用）或游离配体（特异地把蛋白竞争下来）。配上人工标签，它就成了一步纯化。" },
    { en: "ligand", cn: "配体",
      def_en: "A group or molecule that binds to a macromolecule such as a protein. In affinity chromatography it is bolted to the beads, so that the column selects proteins by what they bind rather than by how big or how charged they are.",
      def_cn: "能与蛋白这类大分子结合的一个基团或分子。在亲和层析里它被拴在小球上，于是柱子挑蛋白靠的是「它结合什么」，而不是「它多大、带多少电」。" },
    { en: "unit of enzyme activity", cn: "酶活性单位",
      def_en: "By international agreement, the amount of enzyme that converts 1.0 micromole of substrate to product per minute at 25 °C under optimal conditions. Assays use a very high substrate concentration so that the initial rate measured is proportional to how much enzyme is present.",
      def_cn: "按国际约定，指在最适条件下、25 °C 时每分钟把 1.0 微摩尔底物转化为产物所需的那么多酶。测定时用很高的底物浓度，好让测得的初速率与酶的量成正比。" },
    { en: "specific activity", cn: "比活性",
      def_en: "Enzyme units per milligram of total protein, as against activity, which is the total units in the solution. It measures what fraction of the protein present is the enzyme you want, so it rises during purification, and it stops rising once the enzyme is pure.",
      def_cn: "每毫克总蛋白所含的酶单位数；而「活性」指的是溶液里的总单位数。它量的是「现有蛋白里有多大比例是你要的那个酶」，所以纯化过程中它会上升，而一旦酶纯了，它就不再上升。" },
    { en: "purification factor / yield", cn: "纯化倍数／回收率",
      def_en: "The two numbers a purification table gives up. Purification factor is final specific activity divided by starting specific activity (15,000/10 = 1,500-fold in the worked case). Yield is final total activity divided by starting total activity (45,000/100,000 = 45%). They pull against each other, since raising purity always costs product.",
      def_cn: "一张纯化表能交出来的两个数字。纯化倍数＝最终比活性÷初始比活性（书上那个例子是 15,000/10＝1,500 倍）。回收率＝最终总活性÷初始总活性（45,000/100,000＝45%）。两者互相拉扯，因为提高纯度总要以损失产物为代价。" },
    { en: "electrophoretic mobility", cn: "电泳迁移率",
      def_en: "A molecule's velocity divided by the electrical potential driving it, and equally its net charge Z divided by the frictional coefficient f. Since f reflects shape, migration in a plain gel depends on size and shape at once, which is why a plain gel cannot measure mass and why SDS is needed.",
      def_cn: "分子的速度除以驱动它的电势，同时也等于净电荷 Z 除以摩擦系数 f。由于 f 反映形状，普通凝胶里的迁移同时取决于大小和形状 —— 所以普通凝胶测不了质量，也所以才需要 SDS。" },
    { en: "SDS-PAGE", cn: "SDS 聚丙烯酰胺凝胶电泳",
      def_en: "SDS binds about 1.4 times a protein's weight, roughly one molecule per residue. Its sulfates swamp the protein's own charge so all proteins share a charge-to-mass ratio, and it partially unfolds them into similar rods. Both terms of Z over f are pinned, leaving mass — of subunits, since SDS pulls subunits apart.",
      def_cn: "SDS 的结合量约为蛋白自身重量的 1.4 倍，大致每个残基一分子。它的硫酸基淹没了蛋白自身的电荷，使所有蛋白有相近的电荷质量比；同时把蛋白部分展开成相似的棒状。Z 除以 f 里的两项都被按住，剩下的就是质量 —— 而且是亚基的质量，因为 SDS 会把亚基拆开。" },
    { en: "isoelectric focusing", cn: "等电聚焦",
      def_en: "Ampholytes distribute themselves in an electric field to set up a pH gradient across a gel; each protein migrates until the pH equals its pI, where its net charge is zero and the field can no longer move it. The protein stops by becoming invisible to the field.",
      def_cn: "两性电解质在电场中自行分布，在胶上建立起一个 pH 梯度；每种蛋白一直迁移到 pH 等于其 pI 的位置，在那里净电荷为零，电场再也推不动它。蛋白停下来，是因为它对电场变成了隐形的。" },
    { en: "ampholytes", cn: "两性电解质",
      def_en: "Low molecular weight organic acids and bases that arrange themselves along an electric field and thereby create the stable pH gradient that isoelectric focusing needs.",
      def_cn: "低分子量的有机酸和碱，它们会沿电场自行排布，从而造出等电聚焦所需要的那个稳定 pH 梯度。" }
  ]
};
