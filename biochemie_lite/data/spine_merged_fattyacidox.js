/* Merged spine — fatty acid oxidation. 速通简洁版, ONE spine per TOPIC.

   Five member nodes: L-17-2-1 (Lehninger, the only one that already carried a spine)
   and 8-4-4-2, 8-4-4-3, 8-4-4-4, 10-8 (Biochemie, none of which did). They come out
   here as one chain of sixteen steps.

   The merge rule: the Lehninger telling is the backbone, because it is the better and
   more modern account. The other book is folded in only where it ADDS — a number, a
   name the exam uses, an enzyme the backbone leaves unnamed, a worked case, or a
   consequence Lehninger does not draw. Where both say the same thing, the Lehninger
   sentence stands. Where they disagree, the account that carries a mechanism and a
   cofactor is the one kept, and the disagreement is stated rather than hidden.

   What the other book supplies that Lehninger's section 17.2 does not: the four
   enzymes of the cycle by name and the stereochemical relay between them (trans only,
   then L only), the stearic-acid worked stoichiometry, the per-two-carbon FADH2/NADH
   assignment with the chemical step each comes from, the glycerol half of a fat, and
   the whole of the ketone-body pathway.

   Two nodes overlapped on ketone bodies — 8-4-4-3 with the full HMG-CoA route and all
   three of them, 10-8 with a two-compound compressed version. That is one merge
   decision, taken once: step 16 opens with 10-8's framing (a shared acetyl-CoA pool
   flooded faster than the citrate cycle can drain it) and then gives 8-4-4-3's
   chemistry. It is not said twice.

   `src` letters: "A" is Lehninger 8e, cited by its own page numbers; "B" is Biochemie,
   cited by section and page. A step built from both carries both, separated by a
   middle dot. Lehninger chapter 17 is not extracted anywhere in this repository, so
   every A citation here comes from the L-17-2-1 spine and nothing was added to it.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------- 脂肪酸的氧化分解 ---- */
window.BIOLITE_SPINE["key:fatty-acid-oxidation"] = {
  assumed: ["ATP", "ADP", "AMP", "coenzyme A", "NAD+", "NADH", "NADPH", "FAD", "FADH2",
            "enzyme", "gene", "transcription factor", "cytosol", "amino acid",
            "active site", "substrate", "isozyme", "molecular oxygen", "oxygen",
            "hydrogen peroxide", "water", "carbon dioxide", "double bond", "ester",
            "hydrolysis", "oxidation", "carboxyl group", "carboxylic acid", "alcohol",
            "acid", "proton", "pH", "blood", "urine", "liver", "muscle",
            "adipose tissue", "diet", "starvation", "diabetes", "vitamin", "cofactor",
            "biotin", "vitamin B12", "phosphate", "kinase", "isomer", "stereoisomer",
            "cis", "trans", "citric acid cycle", "respiratory chain", "mitochondrion",
            "organelle", "membrane", "transporter", "antiport", "nuclear receptor",
            "phospholipid", "triacylglycerol", "carbohydrate", "sugar", "glycerol",
            "glyceraldehyde", "aldehyde", "decarboxylation", "condensation", "steroid",
            "terpenoid", "isoprenoid", "coma", "heart", "skeletal muscle", "brain"],
  nodeTitle_en: "Fatty acid oxidation",
  nodeTitle_cn: "脂肪酸的氧化分解",
  title_en: "Why a fatty acid has to pass a gate before it can be burned, what the four reactions behind that gate are actually for, and what happens when more acetyl-CoA arrives than can be spent",
  title_cn: "脂肪酸为什么必须先过一道闸门才能被烧掉，门后那四个反应到底是为了什么，以及当乙酰-CoA 来得比花得掉还快时会发生什么",
  steps: [
    {
      en: "A fat in storage is a triacylglycerol: three fatty acids joined by ester bonds to one glycerol, glycerol being a three-carbon alcohol. Using it as fuel begins with hydrolysis, which splits that molecule back into its two kinds of part, and the two kinds then go different ways. **Glycerol is oxidised to the three-carbon sugar glyceraldehyde and, once phosphorylated, joins carbohydrate metabolism, so only the three fatty acid tails take the route this chain follows.** One stored molecule is therefore two fuels stitched together, and half of it never enters fatty acid oxidation at all.",
      cn: "储存起来的脂肪是三酰甘油：三个脂肪酸通过酯键接在一个甘油上，而甘油是一个三碳的醇。把它当燃料用，第一步是水解，也就是把这个分子拆回它的两类组成部分，而这两类部分随后各走各的路。**甘油被氧化成三碳糖甘油醛，磷酸化之后并入糖类代谢，所以只有那三条脂肪酸尾巴走这条链要讲的路。** 于是一个储存分子其实是两种燃料缝在一起，其中一半根本不进入脂肪酸氧化。",
      src: "B §10.1.2, p.220",
      see: [{ id: "L-10-1-1", en: "what a triacylglycerol is, and why fat rather than glycogen is the store", cn: "三酰甘油是什么，以及为什么储备是脂肪而不是糖原" }]
    },
    {
      link_en: "so what is in a fatty acid tail that makes it worth storing",
      link_cn: "那么脂肪酸尾巴里有什么，值得这样存着",
      en: "A fatty acid is a long unbranched hydrocarbon chain with a carboxyl group at one end. **Almost every carbon in that chain is fully reduced, bonded only to hydrogen and to other carbons, so there is far more to oxidise per gram than in a sugar, whose carbons already carry oxygen.** That is why fat is the storage fuel and sugar the fast one. Getting the energy out means chopping the chain up two carbons at a time and oxidising each piece, and the machinery that does the chopping sits in the mitochondrial matrix, the space enclosed by the inner membrane of a mitochondrion.",
      cn: "脂肪酸是一条一端带羧基的长直链烃。**这条链上几乎每个碳都是完全还原的，只与氢和别的碳成键，所以按每克算，它可供氧化的东西远多于糖，因为糖的碳上已经挂着氧了。** 这就是脂肪当储备燃料、糖当快速燃料的原因。要把能量取出来，就得把这条链两个碳两个碳地剁开、逐块氧化，而干这件事的机器待在线粒体基质里，也就是线粒体内膜围出来的那个空间。",
      src: "A p.607 · B §8.4.4, p.195"
    },
    {
      link_en: "and nothing is done to that chain until it has been given a handle",
      link_cn: "而在这条链被装上一个「把手」之前，什么都做不了",
      en: "A free fatty acid in the cytosol is first activated: an enzyme joins it to coenzyme A through a thioester bond, a high-energy linkage through sulfur, giving a fatty acyl-CoA. The cost of that is written down two ways and both are worth holding. One ATP molecule is consumed, which is literally true and is how the price is usually quoted. **That ATP goes to AMP plus pyrophosphate, and the pyrophosphate is then hydrolysed as well, so two phosphoanhydride bonds are broken and activation really costs the equivalent of two ATP.** The double expense buys two things: the reaction becomes effectively irreversible, and the chain now carries a thioester bond that every later step relies on.",
      cn: "细胞质里的游离脂肪酸首先要被活化：一个酶通过硫酯键（一种经由硫的高能连接）把它接到辅酶 A 上，生成脂酰-CoA。这笔代价有两种写法，两种都值得记住。一个 ATP 被消耗掉，这在字面上成立，通常也是这样报价的。**这个 ATP 走的是 ATP → AMP + 焦磷酸，而焦磷酸随后又被水解掉，所以断掉的是两个磷酸酐键，活化的真实代价相当于两个 ATP。** 这笔加倍的开销买来两样东西：反应实际上变得不可逆；这条链从此带着一个硫酯键，后面每一步都要靠它。",
      src: "A pp.607-608, 611 · B §10.1.2, p.220"
    },
    {
      link_en: "and the activated fuel still cannot get in",
      link_cn: "可活化之后的燃料还是进不去",
      en: "A long-chain fatty acyl-CoA cannot cross the inner mitochondrial membrane by itself. It gets in by a three-step relay named the carnitine shuttle, carnitine being a small hydroxy-amino-acid derivative. **Carnitine acyltransferase I is the enzyme that loads the acyl group onto carnitine, a transporter in the inner membrane trades that acylcarnitine inwards against a free carnitine coming out**, and carnitine acyltransferase II reloads it onto matrix coenzyme A. So the acyl group crosses and coenzyme A does not: the cytosolic and matrix pools of coenzyme A stay separate, each with its own concentration and its own uses.",
      cn: "长链脂酰-CoA 自己过不了线粒体内膜。它靠一个叫肉碱穿梭的三步接力进去，而肉碱是一个小分子的羟基氨基酸衍生物。**肉碱脂酰转移酶 I 把脂酰基装到肉碱上，内膜上的一个转运体把这个脂酰肉碱换进去、同时把一个游离肉碱换出来，肉碱脂酰转移酶 II 再把它装回基质里的辅酶 A 上。** 于是过去的是脂酰基，辅酶 A 并没有过去：胞质和基质的辅酶 A 各成一池，各有各的浓度和用途。",
      src: "A p.613",
      beyond: true,
      beyondNote: "The cited pages name the three-step shuttle and carnitine acyltransferases I and II. That the middle step is an antiport exchanging acylcarnitine for free carnitine, and that the two coenzyme A pools are thereby kept separate, is standard and is added here because the shuttle makes no sense without it."
    },
    {
      link_en: "and now the reason there is a gate here at all",
      link_cn: "现在说这里为什么会有一道闸门",
      en: "A fatty acyl-CoA sitting in the cytosol has two possible fates: mitochondrial enzymes can oxidise it, or cytosolic enzymes can esterify it into triacylglycerols and phospholipids, which is to say into stored fat and into membrane lipid. **Which fate it meets is decided by one quantity, the rate at which the carnitine shuttle carries it inwards**, and that makes the shuttle the committed and rate-limiting step of the whole oxidative pathway. It is why a cell controls fat burning at the door rather than at any of the reactions inside: one decision at the entrance settles what happens to everything behind it.",
      cn: "待在细胞质里的脂酰-CoA 有两种可能去向：被线粒体的酶氧化掉，或者被胞质的酶酯化成三酰甘油和磷脂，也就是变成储存的脂肪和膜脂。**它遇上哪一种，由一个量决定：肉碱穿梭把它往里运的速率；这使肉碱穿梭成为整条氧化通路的承诺步骤与限速步骤。** 这正是细胞把「烧不烧脂肪」控制在门口、而不控制在里面任何一个反应上的原因：门口一个决定，就把后面所有事情都定下来了。",
      src: "A p.613"
    },
    {
      link_en: "so who closes the gate, and when?",
      link_cn: "那么是谁在关这道门，什么时候关？",
      recall_en: "the same gate as the step above, now seen as a switch",
      recall_cn: "还是上一步那道门，现在把它当作开关来看",
      en: "Malonyl-CoA is the first committed intermediate of fatty acid synthesis, the three-carbon unit a cell makes when it is building fatty acids rather than burning them, and malonyl-CoA inhibits carnitine acyltransferase I. **The moment synthesis starts, newly made fatty acids are locked out of the mitochondrion, so a cell cannot build fat and burn fat at the same time.** Running both at once would consume ATP in a circle and release the difference as heat, and this single inhibition is what prevents it.",
      cn: "丙二酰-CoA 是脂肪酸合成的第一个承诺中间物，是细胞在造脂肪酸（而不是烧脂肪酸）时生成的那个三碳单元，而丙二酰-CoA 抑制肉碱脂酰转移酶 I。**合成一开始，新造出来的脂肪酸就被挡在线粒体门外，于是细胞不可能同时造脂肪又烧脂肪。** 两条路一起跑，只会绕着圈子消耗 ATP、把差额变成热，而阻止这件事的就是这一个抑制。",
      src: "A p.613",
      see: [{ id: "L-21-1-1", en: "the same interlock seen from the synthesis side", cn: "从合成那一侧看同一个连锁" }]
    },
    {
      link_en: "that switch acts in seconds. There is a second one that acts in hours",
      link_cn: "那个开关以秒计。还有一个以小时计的",
      en: "Inhibiting an enzyme changes how fast the molecules already present work; changing how many molecules there are takes longer and lasts longer. PPAR-alpha is a nuclear receptor, meaning a transcription factor that binds fatty-acid-like molecules and acts on genes when it does. **Binding one switches on a whole coordinated set of fatty acid oxidation genes at once**: the fatty acid transporter, both carnitine acyltransferases, and the dehydrogenases that run the cycle behind them. So the gate and the machinery behind it are built up together, as one unit, in muscle, adipose tissue and liver. Endurance training raises PPAR-alpha in muscle, which is one reason a trained muscle oxidises fat better than an untrained one.",
      cn: "抑制一个酶，改变的是已经存在的分子干活的快慢；改变分子的数量则更慢，也更持久。PPARα 是一种核受体，也就是一类能结合类似脂肪酸的分子、结合后就作用于基因的转录因子。**结合一个这样的分子，就一次性打开一整套协调的脂肪酸氧化基因：脂肪酸转运体、两个肉碱脂酰转移酶，以及门后跑那个循环的那些脱氢酶。** 于是闸门和它后面的机器，是在肌肉、脂肪组织和肝脏中被当作一个整体一起扩建的。耐力训练会提高肌肉中 PPARα 的水平，这正是受过训练的肌肉比未训练的更会烧脂肪的原因之一。",
      src: "A p.616, figure 17-13"
    },
    {
      link_en: "past the gate, what actually happens to the chain",
      link_cn: "过了门之后，这条链究竟被怎么处理",
      en: "Inside the matrix the chain is shortened by a four-reaction cycle, and each of the first three enzymes hands the next exactly the isomer that next one demands. Acyl-CoA dehydrogenase oxidises the chain using FAD and makes only the trans double bond; enoyl-CoA hydratase requires that trans bond, adds water across it and gives only the L form of the hydroxyacyl-CoA; beta-hydroxyacyl-CoA dehydrogenase requires that L form and oxidises it with NAD+ to a beta-ketoacyl-CoA, which is a chain carrying a carbonyl, a carbon double-bonded to oxygen, on its beta carbon — the third carbon, second from the carboxyl carbon. **Those three reactions, oxidation then hydration then oxidation, exist only to put that carbonyl on the beta carbon, and that is the whole reason the pathway is called beta-oxidation.**",
      cn: "进了基质，这条链靠一个四反应的循环被逐步缩短，而前三个酶中的每一个，都恰好把下一个酶要求的那种异构体交给它。酰基-CoA 脱氢酶用 FAD 把链氧化，只生成反式双键；烯脂酰-CoA 水合酶要求这个反式双键，向它加水，只生成 L 型的羟脂酰-CoA；β-羟脂酰-CoA 脱氢酶要求这个 L 型，用 NAD+ 把它氧化成 β-酮脂酰-CoA，也就是在 β 碳上带着一个羰基（与氧双键相连的碳）的链 —— β 碳是链上第三个碳，从羧基碳数起的第二个。**这三个反应，先氧化、再水合、再氧化，存在的意义只是把那个羰基装到 β 碳上；这就是这条通路被叫做 β-氧化的全部原因。**",
      src: "A pp.608-609, figures 17-8 and 17-9 · B §8.4.4, pp.195-196"
    },
    {
      link_en: "and only now does anything actually get cut off",
      link_cn: "到这时才真的动刀",
      en: "The fourth reaction cuts the bond beside that new carbonyl: a molecule of coenzyme A is added, the chain is split thiolytically, a two-carbon acetyl group leaves on coenzyme A as acetyl-CoA, and a chain two carbons shorter goes round again. Installing a carbonyl beside a carbon-carbon bond in order to make that bond breakable is a motif that recurs elsewhere in metabolism, so recognising it once is worth more than memorising this list. The enzyme here is thiolase, also written beta-ketothiolase and also named acetyl-CoA acyltransferase, and what it does is cleave the beta-ketoacyl-CoA thiolytically with free coenzyme A, CoASH, releasing acetyl-CoA; a printed label calling it beta-ketokinase contradicts the chemistry drawn beside it, since a kinase transfers a phosphate and no phosphate or ATP appears in this step at all. **Each turn yields one acetyl-CoA and two reduced coenzymes — FADH2 from oxidising the acid to an unsaturated acid, NADH from oxidising the hydroxy acid to an oxo acid** — and both are spent in the respiratory chain.",
      cn: "第四个反应切的正是紧挨着那个新羰基的键：加进一分子辅酶 A，链被硫解裂开，一个两碳的乙酰基挂着辅酶 A 离开（即乙酰-CoA），留下短了两个碳的链再走一圈。「在一根碳-碳键旁边装一个羰基，好让这根键变得可断」这个套路在代谢的别处还会出现，所以认出它一次，比把这份清单背下来更值。这里的酶是硫解酶，也写作 β-酮硫解酶，还有一个名字叫乙酰-CoA 酰基转移酶；它做的事是用游离辅酶 A（CoASH）对 β-酮酰基-CoA 进行硫解裂解，放出乙酰-CoA。把它标成 β-酮激酶的写法与画在旁边的化学式自相矛盾，因为激酶转移的是磷酸，而这一步里根本没有磷酸也没有 ATP。**每一轮给出一个乙酰-CoA 和两个还原型辅酶 —— FADH2 来自「酸氧化成不饱和酸」，NADH 来自「羟基酸氧化成酮酸」—— 两者都花在呼吸链上。**",
      src: "B §8.4.4, pp.195-196, §10.1.2, p.220 · A pp.608-609",
      see: [{ id: "L-19-1-1", en: "what the respiratory chain does with them once they arrive", cn: "它们送到之后，呼吸链拿它们做什么" }]
    },
    {
      link_en: "and those four steps are not run by four all-purpose enzymes",
      link_cn: "而这四步并不是由四个万能酶来执行的",
      en: "The first oxidation is carried out by three isozymes of acyl-CoA dehydrogenase, each taking a different range of chain lengths: very-long-chain for 12 to 18 carbons, sitting in the inner membrane itself, and medium-chain for 4 to 14 and short-chain for 4 to 8, both dissolved in the matrix. All three are flavoproteins, proteins with a tightly bound FAD, and their electrons pass to the electron-transferring flavoprotein, which delivers them into the respiratory chain at ubiquinone, the small mobile carrier of the inner membrane — that is the exact junction where fat burning meets breathing. The last three steps are split by chain length too: 12 carbons and up go to the trifunctional protein, an eight-subunit assembly holding all three activities so the intermediate never diffuses away, and below 12 carbons four separate soluble enzymes take over. **Splitting the work by chain length is what makes one mutation give one specific disease instead of a general failure to burn fat.**",
      cn: "第一次氧化由酰基-CoA 脱氢酶的三个同工酶完成，各管一段链长：极长链型管 12 到 18 个碳，本身就长在内膜上；中链型管 4 到 14 个碳、短链型管 4 到 8 个碳，两者都溶在基质里。三者都是黄素蛋白，即紧密结合着一个 FAD 的蛋白；它们的电子交给电子转移黄素蛋白（ETF），由 ETF 在泛醌（内膜中那个小分子流动载体）这一层送进呼吸链 —— 这里正是「烧脂肪」与「呼吸」相接的确切接口。后三步同样按链长分工：12 个碳及以上交给三功能蛋白，一个八亚基的组装体，三种活性都在它身上，中间产物根本不会扩散跑掉；12 个碳以下则由四个各自独立的可溶性酶接手。**正是这种按链长的分工，使得一个突变造成的是一种特定的疾病，而不是「烧不动脂肪」这样笼统的失败。**",
      src: "A p.608, figure 17-8",
      see: [{ id: "6-2-4-2", en: "the complexes those electrons enter, and what ubiquinone does with them", cn: "这些电子进入的复合物，以及泛醌拿它们做什么" }]
    },
    {
      link_en: "and here is what those specific diseases are",
      link_cn: "那些特定的疾病具体是哪些",
      recall_en: "the three chain-length isozymes of the step above",
      recall_cn: "上一步那三个按链长分工的同工酶",
      en: "Stored fat is normally the chief fuel of a contracting muscle, so failing to oxidise it has consequences at once. **A mutation in the gene for medium-chain acyl-CoA dehydrogenase is the commonest inherited defect of fatty acid catabolism in the United States and in northern Europe**: one isozyme broken, other chain lengths handled normally. Loss of the long-chain hydroxyacyl-CoA dehydrogenase activity of the trifunctional protein is one of the most severe disorders in this group, and mutations in its subunits that knock out all three of its activities cause serious heart disease and abnormal skeletal muscle.",
      cn: "储存的脂肪通常是收缩中的肌肉的主要燃料，所以一旦氧化不了，后果立刻显现。**中链酰基-CoA 脱氢酶基因的突变，是美国和北欧人群中最常见的脂肪酸分解代谢遗传缺陷：坏掉的只是一个同工酶，其他链长照常处理。** 三功能蛋白上长链羟脂酰-CoA 脱氢酶活性的丧失，是这一类疾病中最严重的之一；而使它三种活性全部失效的亚基突变，会造成严重的心脏病和骨骼肌异常。",
      src: "A pp.616-617"
    },
    {
      link_en: "now the arithmetic, and it is where the double cost of activation shows up",
      link_cn: "现在算账 —— 活化那笔加倍的开销就在这里显形",
      recall_en: "the two phosphoanhydride bonds broken at activation, nine steps up",
      recall_cn: "九步之前活化时断掉的那两个磷酸酐键",
      en: "Stearic acid is the eighteen-carbon saturated fatty acid, and as stearoyl-CoA it comes apart in eight turns to give nine acetyl-CoA, eight FADH2 and eight NADH — nine rather than eight because the last cut splits a four-carbon acetoacetyl-CoA into two acetyl-CoA at one stroke. Palmitate, the sixteen-carbon one, consumes 23 O2 and yields 16 CO2 together with 108 ATP gross. **The net figure per palmitate is 106, because activation spent the equivalent of two ATP before the chain ever entered the mitochondrion.** Two efficiency numbers go with it and are regularly confused: against a standard free-energy change of about 9,800 kJ per mole for burning palmitate, 106 ATP recover about 33 percent, but recalculated from the concentrations actually present inside a cell the recovery is above 60 percent, so quoting 33 percent alone understates the pathway badly.",
      cn: "硬脂酸是十八碳的饱和脂肪酸，以硬脂酰-CoA 的形式经八轮循环拆完，给出九分子乙酰-CoA、八个 FADH2 和八个 NADH —— 是九不是八，因为最后一刀把四碳的乙酰乙酰-CoA 一下子劈成了两个乙酰-CoA。软脂酸是十六碳的那个，完全氧化消耗 23 分子 O2，生成 16 分子 CO2 和总计 108 个 ATP。**按每分子软脂酸计的净值是 106，因为在这条链进线粒体之前，活化就已经花掉了相当于两个 ATP 的代价。** 与之配套的还有两个效率数字，常被混为一谈：以燃烧软脂酸约 9,800 kJ/mol 的标准自由能变化为分母，106 个 ATP 回收了约 33%；但若按细胞内实际存在的浓度重算，回收率超过 60%，所以只报 33% 会严重低估这条通路。",
      src: "B §8.4.4, p.195 · A p.611"
    },
    {
      link_en: "everything so far assumed a saturated chain with an even number of carbons. Three kinds of chain break that assumption",
      link_cn: "以上全都默认链是饱和的、碳数是偶数的。有三类链打破这个前提",
      en: "A double bond already in the chain stops the cycle, and the reason is geometric: the enzymes of the pathway make and use a trans double bond at one particular position, while the double bonds of a natural unsaturated fatty acid are cis and sit somewhere else. Run linoleoyl-CoA through three ordinary turns and it stalls as a twelve-carbon intermediate the standard enzymes cannot touch. **Two auxiliary enzymes rescue it: enoyl-CoA isomerase moves a double bond to the right place and configuration**, and NADPH-dependent 2,4-dienoyl-CoA reductase removes one of two conflicting double bonds. An older account names an epimerase as the second of the two; the reductase is the one that comes with a mechanism and a cofactor attached, so it is the one to carry. Linoleate gives nine acetyl-CoA in total.",
      cn: "链上原本就有的双键会让循环卡住，原因是几何构型：这条通路的酶生成并使用的，是位于某个特定位置的反式双键，而天然不饱和脂肪酸上的双键是顺式的，位置也不在那儿。把亚油酰-CoA 送进普通循环转三轮，它就卡在一个十二碳中间物上，标准的那几个酶碰都碰不了。**两个辅助酶把它救回来：烯脂酰-CoA 异构酶把双键挪到正确的位置和构型上，依赖 NADPH 的 2,4-二烯脂酰-CoA 还原酶除掉两个互相冲突的双键中的一个。** 较早的说法把第二个酶写成一个差向异构酶；带着机制和辅因子的是那个还原酶，所以记后者。亚油酸总共给出九分子乙酰-CoA。",
      src: "A p.612, figure 17-11 · B §8.4.4, p.195"
    },
    {
      link_en: "the second exception is a chain with an odd number of carbons",
      link_cn: "第二个例外是碳数为奇数的链",
      en: "An odd-numbered chain cannot end in a clean two-carbon piece: the last turn leaves propionyl-CoA, three carbons, which the cycle cannot use. Three extra reactions convert it into something the citric acid cycle can take, and the first of them needs biotin, which is the vitamin cofactor that carries carbon dioxide for carboxylation reactions. **A biotin-dependent carboxylase adds a carbon to give methylmalonyl-CoA, and methylmalonyl-CoA mutase, which requires coenzyme B12, rearranges that into the four-carbon succinyl-CoA**, which is an intermediate of the citric acid cycle. When this route fails, propionate and its metabolites build up in blood and urine: propionic acidemia. Its treatments each attack a different source — severe dietary protein restriction, because degrading amino acids is a major source of propionyl-CoA; carnitine, to help clear the accumulated acyl groups; antibiotics against gut bacteria, which themselves make odd-chain and branched-chain fatty acids; and high-dose biotin for the patients whose defect lies in attaching biotin to the enzyme rather than in the enzyme itself.",
      cn: "奇数碳的链没法以一个干净的两碳片段收尾：最后一轮剩下的是三个碳的丙酰-CoA，循环用不了它。三个额外的反应把它变成柠檬酸循环收得下的东西，其中第一个需要生物素 —— 生物素就是替羧化反应搬运二氧化碳的那个维生素辅因子。**一个依赖生物素的羧化酶先加一个碳，生成甲基丙二酰-CoA；甲基丙二酰-CoA 变位酶（它需要辅酶 B12）再把它重排成四碳的琥珀酰-CoA，也就是柠檬酸循环的一个中间物。** 这条路线失效时，丙酸及其代谢物在血和尿中堆积，这就是丙酸血症。它的几种治疗各打一个来源：严格限制膳食蛋白质，因为氨基酸降解是丙酰-CoA 的一大来源；补充肉碱，帮助清除堆积的酰基；用抗生素对付肠道细菌，因为这些细菌本身会产生奇数碳和支链脂肪酸；以及对那些缺陷在于「把生物素装到酶上」而非酶本身的患者，给予大剂量生物素。",
      src: "A p.613, figure 17-12 · B §8.4.4, p.195"
    },
    {
      link_en: "the third exception is a branch on the chain, and where the branch sits decides everything",
      link_cn: "第三个例外是链上带了个支链 —— 而支链长在哪里，决定一切",
      recall_en: "beta-oxidation exists to put a carbonyl on the beta carbon, six steps up",
      recall_cn: "六步之前说过：β-氧化存在的意义就是在 β 碳上装一个羰基",
      en: "Branched fatty acids are sorted by carbon number: an alpha-branched acid carries its branch on an even-numbered carbon, a beta-branched acid on an odd-numbered one. A branch is usually modest, often a single methyl group, and sits at the end away from the carboxyl group, so ordinary beta-oxidation shortens the chain from the carboxyl end until the branch arrives at the alpha or beta carbon of what is left. A branch on the alpha carbon is no obstacle at all and the chain finishes as acetyl-CoA. **A substituent on the beta carbon makes beta-oxidation impossible rather than merely slow, because the beta carbon is exactly where the pathway has to install its carbonyl.** Phytanic acid is such an acid, a methyl group on its beta carbon, and it comes from an avoidable place: dairy products, the fat of ruminant animals, meat and fish.",
      cn: "支链脂肪酸按碳的编号分类：α-支链的支链长在偶数碳上，β-支链的长在奇数碳上。支链通常不大，往往只是一个甲基，而且长在远离羧基的那一端，所以普通 β-氧化可以先从羧基端把链剪短，直到支链落到剩下这段的 α 碳或 β 碳上。落在 α 碳上完全不构成障碍，链照常走完，终产物就是乙酰-CoA。**而 β 碳上坐着一个取代基，会让 β-氧化变得不可能，而不只是变慢 —— 因为 β 碳恰恰是这条通路必须装上羰基的地方。** 植烷酸就是这样一种酸，β 碳上带着一个甲基；它的来源是可以规避的：乳制品、反刍动物的脂肪、肉类和鱼类。",
      src: "B §8.4.4, pp.195, 197 · A p.618"
    },
    {
      link_en: "so a blocked beta carbon needs a different pathway, in a different compartment",
      link_cn: "于是被堵住的 β 碳需要另一条通路，而且在另一个隔室里",
      en: "Peroxisomes are small organelles that carry out oxidations outside the mitochondrion, and on phytanic acid they run alpha-oxidation, which removes one carbon from the carboxyl end instead of two. Phytanoyl-CoA is hydroxylated on its alpha carbon using molecular oxygen, that product is decarboxylated to an aldehyde one carbon shorter, and the aldehyde is oxidised to an acid whose beta carbon is now clear, so ordinary beta-oxidation can take it from there. **Refsum disease is a genetic defect of phytanoyl-CoA hydroxylase: blood phytanic acid runs very high and severe neurological damage follows, including blindness and deafness.** An older account gets round a beta-methyl branch a different way, by a biotin-dependent carboxylation ending at HMG-CoA. That breaking one alpha-oxidation enzyme is on its own enough to make phytanic acid pile up is the evidence that alpha-oxidation is the route a dietary branched fatty acid actually takes.",
      cn: "过氧化物酶体是在线粒体之外执行氧化反应的小细胞器，对植烷酸它跑的是 α-氧化：每次从羧基端只去掉一个碳，而不是两个。植烷酰-CoA 先在 α 碳上被羟基化（用到分子氧），产物脱羧生成一个短一个碳的醛，醛再被氧化成酸 —— 此时它的 β 碳空出来了，普通 β-氧化就能从这里接手。**Refsum 病就是植烷酰-CoA 羟化酶的遗传缺陷：血中植烷酸极高，随之而来的是严重的神经损害，包括失明和耳聋。** 较早的说法用另一种办法绕开 β-甲基支链：一次依赖生物素的羧化，终点是 HMG-CoA。而「只要坏掉一个 α-氧化的酶，植烷酸就会堆积」这件事本身，正是「膳食支链脂肪酸实际走的是 α-氧化」的证据。",
      src: "A p.618, figure 17-15 · B §8.4.4, p.197",
      openQuestion_en: "How high phytanic acid produces that neurological damage is stated as unknown.",
      openQuestion_cn: "高浓度植烷酸究竟通过什么机制造成这种神经损害，目前尚不清楚。"
    },
    {
      link_en: "and peroxisomes do not only handle branched chains",
      link_cn: "而过氧化物酶体处理的不只是支链",
      recall_en: "the same organelle as the step above, now running the ordinary four-step cycle",
      recall_cn: "还是上一步那个细胞器，这次跑的是普通的四步循环",
      en: "Peroxisomes run a beta-oxidation of their own, with the same four steps, differing from the mitochondrial one in three ways that all matter. It prefers very-long-chain fatty acids, so it handles what the mitochondrial enzymes will not take; its first oxidation passes the electrons straight to O2 and makes hydrogen peroxide, so that step's energy leaves as heat instead of being saved; and the NADH made in its second oxidation cannot be reoxidised inside the peroxisome, so the reducing equivalents and the acetyl-CoA both have to be exported. **A peroxisome is therefore running a chain-shortening service rather than an energy-yielding pathway, and in plant cells it, not the mitochondrion, is the major site of fatty acid oxidation.** Two severe diseases mark this compartment: Zellweger syndrome, in which peroxisomes cannot be assembled at all, and X-linked adrenoleukodystrophy, in which they fail to oxidise very-long-chain fatty acids for want of a working transporter.",
      cn: "过氧化物酶体自己也跑一套 β-氧化，步骤同样是四步，但与线粒体那套有三点不同，而且每一点都有分量。第一，它偏好极长链脂肪酸，处理的正是线粒体的酶不收的那部分；第二，它的第一次氧化把电子直接交给 O2、生成过氧化氢，所以这一步的能量以热散掉而不是被保存；第三，它第二次氧化生成的 NADH 没法在过氧化物酶体内被重新氧化，所以还原当量和乙酰-CoA 都得被输出出去。**所以过氧化物酶体提供的是一项「把链剪短」的服务，而不是一条产能通路；而在植物细胞里，脂肪酸氧化的主要场所正是它而不是线粒体。** 两种重病标记着这个隔室：Zellweger 综合征，过氧化物酶体根本装配不出来；以及 X 连锁肾上腺脑白质营养不良，过氧化物酶体因缺少一个有功能的转运体而无法氧化极长链脂肪酸。",
      src: "A p.617, figure 17-14"
    },
    {
      link_en: "every route so far ends in the same molecule. What if more of it arrives than can be spent?",
      link_cn: "以上每条路的终点都是同一个分子。那如果它来得比花得掉还多呢？",
      recall_en: "HMG-CoA, the compound the beta-methyl branch was said to end at two steps up",
      recall_cn: "HMG-CoA —— 两步之前说 β-甲基支链的终点就是它",
      en: "Beta-oxidation of every kind of fatty acid ends in acetyl-CoA, and acetyl-CoA is a shared pool that the citric acid cycle drains. When it is filled faster than the cycle can drain it — in diabetes, in starvation, and equally on a diet very rich in fat — liver cells condense two acetyl-CoA into acetoacetyl-CoA and then, with a third acetyl-CoA and water, into beta-hydroxy-beta-methylglutaryl-CoA, written HMG-CoA. HMG-CoA is a fork: one way it starts terpenoid and steroid synthesis, the other it is cleaved to acetyl-CoA plus free acetoacetate. **Acetoacetate, the beta-hydroxybutyrate it is enzymatically reduced to and the acetone it decarboxylates to on its own are the three ketone bodies**, and the first two are acids, so as they build up in blood the pH falls. That is ketosis and acidosis together: acetone becomes detectable on the breath, and a prolonged state leads to coma and death. A shorter account of the same flooding, with diabetes as its example, names only two of the products — acetoacetic acid and acetone — and has both arising from two acetyl-CoA directly; two things are corrected against it here rather than reproduced, since beta-hydroxybutyrate is the third ketone body and acetone comes from decarboxylation of acetoacetate rather than from acetyl-CoA in one move.",
      cn: "任何一种脂肪酸的 β-氧化，终点都是乙酰-CoA，而乙酰-CoA 是一个被柠檬酸循环不断抽走的共用池。当它被灌满的速度超过循环抽走的速度时 —— 见于糖尿病、饥饿，以及反过来的高脂饮食 —— 肝细胞就把两个乙酰-CoA 缩合成乙酰乙酰-CoA，再与第三个乙酰-CoA 和水缩合成 β-羟基-β-甲基戊二酸单酰-CoA，写作 HMG-CoA。HMG-CoA 是个岔口：一边通向萜类与类固醇的合成，另一边被裂解成乙酰-CoA 加游离的乙酰乙酸。**乙酰乙酸、由它酶促还原得到的 β-羟基丁酸、以及由它自发脱羧得到的丙酮，就是三种酮体；前两者是酸，所以它们在血中积起来时，血液 pH 会下降。** 这就是酮症与酸中毒一起发生：呼气中能闻到丙酮味，而这种状态持续下去会导致昏迷乃至死亡。同一件「乙酰-CoA 淹没」还有一个更简短的说法，举的例子也是糖尿病，但它只点出两个产物 —— 乙酰乙酸和丙酮 —— 而且把两者都写成由两个乙酰-CoA 直接生成；这里没有照录，而是对它做了两处更正：β-羟基丁酸是第三种酮体；丙酮来自乙酰乙酸的脱羧，而不是由乙酰-CoA 一步而来。",
      src: "B §8.4.4, pp.195, 197 · §10.1.2, p.220",
      see: [{ id: "L-23-5-1", en: "why this, and not the blood sugar, is the acute danger in uncontrolled diabetes", cn: "为什么失控的糖尿病里急性危险是这个，而不是血糖" }]
    }
  ],
  terms: [
    { en: "carnitine shuttle", cn: "肉碱穿梭",
      def_en: "The three-step system that carries a long-chain acyl group into the mitochondrial matrix: acyltransferase I loads it onto carnitine, a membrane transporter exchanges acylcarnitine for free carnitine, and acyltransferase II reloads it onto matrix coenzyme A. Because it decides whether a cytosolic acyl-CoA is burned or esterified into fat, it is the committed and rate-limiting step of fatty acid oxidation.",
      def_cn: "把长链脂酰基送进线粒体基质的三步系统：转移酶 I 把它装到肉碱上，膜上一个转运体用脂酰肉碱换出游离肉碱，转移酶 II 再把它装回基质的辅酶 A 上。由于它决定胞质里的脂酰-CoA 是被烧掉还是被酯化成脂肪，它就是脂肪酸氧化的承诺步骤与限速步骤。" },
    { en: "malonyl-CoA interlock", cn: "丙二酰-CoA 连锁",
      def_en: "Malonyl-CoA, the first committed intermediate of fatty acid synthesis, inhibits carnitine acyltransferase I. This single inhibition is what stops synthesis and breakdown from running at the same time and burning ATP in a circle.",
      def_cn: "丙二酰-CoA 是脂肪酸合成的第一个承诺中间物，它抑制肉碱脂酰转移酶 I。就是这一个抑制，阻止了合成与分解同时运行、绕着圈子烧掉 ATP。" },
    { en: "the four reactions and their stereochemical relay", cn: "四个反应与它们之间的立体化学接力",
      def_en: "Acyl-CoA dehydrogenase (FAD) makes only the trans double bond; enoyl-CoA hydratase requires trans and gives only the L-hydroxyacyl-CoA; beta-hydroxyacyl-CoA dehydrogenase (NAD+) requires L and gives a beta-ketoacyl-CoA; thiolase adds CoASH and cuts off acetyl-CoA. Each enzyme produces exactly the isomer the next one demands, which is why the cycle cannot be entered halfway.",
      def_cn: "酰基-CoA 脱氢酶（FAD）只生成反式双键；烯脂酰-CoA 水合酶要求反式，只生成 L 型羟脂酰-CoA；β-羟脂酰-CoA 脱氢酶（NAD+）要求 L 型，生成 β-酮脂酰-CoA；硫解酶加进 CoASH，切下乙酰-CoA。每个酶生成的恰好是下一个酶要求的那种异构体，所以这个循环没法从中间插进去。" },
    { en: "thiolase, not a kinase", cn: "硫解酶，不是激酶",
      def_en: "The fourth enzyme is thiolase, also called beta-ketothiolase or acetyl-CoA acyltransferase. A printed figure naming it beta-ketokinase contradicts the reaction drawn beside it: coenzyme A is added and a carbon-carbon bond is broken, with no phosphate or ATP anywhere in the step, and a kinase by definition transfers a phosphate.",
      def_cn: "第四个酶是硫解酶，也叫 β-酮硫解酶或乙酰-CoA 酰基转移酶。有的图把它标成 β-酮激酶，这与画在旁边的反应自相矛盾：那里加进的是辅酶 A、断的是碳-碳键，全程没有磷酸也没有 ATP，而激酶按定义转移的是磷酸。" },
    { en: "which coenzyme comes from which step", cn: "哪个辅酶来自哪一步",
      def_en: "Per two-carbon unit removed: one FADH2 from the first dehydrogenation, the oxidation of the acid to an unsaturated acid, and one NADH from the second, the oxidation of the hydroxy acid to an oxo acid. Keeping the two straight is what stops them being swapped in an exam.",
      def_cn: "每去掉一个二碳单元：一个 FADH2 来自第一次脱氢，即「酸氧化成不饱和酸」；一个 NADH 来自第二次脱氢，即「羟基酸氧化成酮酸」。把这两句分清楚，考试时才不会把两种辅酶弄反。" },
    { en: "electron-transferring flavoprotein", cn: "电子转移黄素蛋白（ETF）",
      def_en: "The carrier that takes electrons from the acyl-CoA dehydrogenases and hands them into the respiratory chain at the level of ubiquinone. It is the precise junction between fatty acid oxidation and respiration.",
      def_cn: "把电子从酰基-CoA 脱氢酶那里接过来、在泛醌这一层交进呼吸链的载体。它正是脂肪酸氧化与呼吸之间的确切接口。" },
    { en: "stearate in eight turns, palmitate for 106", cn: "硬脂酸八轮，软脂酸 106",
      def_en: "Stearoyl-CoA (C18) is degraded in 8 turns to 9 acetyl-CoA, 8 FADH2 and 8 NADH — nine because the last cut splits a four-carbon acetoacetyl-CoA into two. Complete oxidation of one palmitate (C16) gives 108 ATP gross but 106 net, because activation broke two phosphoanhydride bonds rather than one. Efficiency is about 33% against standard free energies and above 60% at real intracellular concentrations.",
      def_cn: "硬脂酰-CoA（C18）经 8 轮降解为 9 个乙酰-CoA、8 个 FADH2 和 8 个 NADH —— 是 9 个，因为最后一刀把四碳的乙酰乙酰-CoA 劈成了两个。一分子软脂酸（C16）完全氧化总产 108 个 ATP，净产 106，因为活化断的是两个磷酸酐键而不是一个。效率按标准自由能算约 33%，按细胞内真实浓度算超过 60%。" },
    { en: "propionyl-CoA to succinyl-CoA route", cn: "丙酰-CoA → 琥珀酰-CoA 路线",
      def_en: "How an odd-numbered chain is finished: a biotin-dependent carboxylase converts propionyl-CoA to methylmalonyl-CoA, and methylmalonyl-CoA mutase, which needs coenzyme B12, rearranges that into succinyl-CoA for the citric acid cycle. Failure of the route is propionic acidemia.",
      def_cn: "奇数碳链的收尾方式：一个依赖生物素的羧化酶把丙酰-CoA 变成甲基丙二酰-CoA，需要辅酶 B12 的甲基丙二酰-CoA 变位酶再把它重排成琥珀酰-CoA，交给柠檬酸循环。这条路线失效就是丙酸血症。" },
    { en: "alpha-branched and beta-branched", cn: "α-支链与 β-支链",
      def_en: "Branched fatty acids classed by whether the branch sits on an even-numbered carbon (alpha-branched) or an odd-numbered one (beta-branched). Alpha-branching is no obstacle and the chain finishes as acetyl-CoA; beta-branching blocks beta-oxidation outright, because the beta carbon is where the pathway must install its carbonyl.",
      def_cn: "支链脂肪酸按支链落在偶数碳（α-支链）还是奇数碳（β-支链）分类。α-支链毫无障碍，链照常走完给出乙酰-CoA；β-支链则直接堵死 β-氧化，因为 β 碳正是这条通路必须装上羰基的位置。" },
    { en: "alpha-oxidation", cn: "α-氧化",
      def_en: "A peroxisomal route that shortens a chain by one carbon at a time: the alpha carbon is hydroxylated using molecular oxygen, decarboxylated to an aldehyde, and oxidised to an acid with a clear beta carbon. It exists because phytanic acid carries a methyl on its beta carbon; the defect that blocks it is Refsum disease.",
      def_cn: "过氧化物酶体里一条每次只缩短一个碳的路线：α 碳先用分子氧羟基化，脱羧成醛，再氧化成一个 β 碳空出来的酸。它之所以存在，是因为植烷酸的 β 碳上带着一个甲基；堵住它的缺陷就是 Refsum 病。" },
    { en: "peroxisomal beta-oxidation", cn: "过氧化物酶体 β-氧化",
      def_en: "A parallel four-step pathway that prefers very-long-chain fatty acids, passes the electrons of its first oxidation straight to O2 and loses that energy as heat, and must export its NADH and acetyl-CoA. It is a chain-shortening service rather than an energy-yielding pathway, and the major site in plant cells. Zellweger syndrome and X-linked adrenoleukodystrophy are its failure modes.",
      def_cn: "一条平行的四步通路：偏好极长链脂肪酸，第一次氧化把电子直接交给 O2、能量以热散失，且必须把 NADH 和乙酰-CoA 输出出去。它提供的是「把链剪短」的服务而不是产能，也是植物细胞里的主要场所。Zellweger 综合征和 X 连锁肾上腺脑白质营养不良是它的失效形式。" },
    { en: "ketone bodies", cn: "酮体",
      def_en: "Acetoacetate, beta-hydroxybutyrate and acetone. They appear when acetyl-CoA is made faster than the citric acid cycle can absorb it — in diabetes, in starvation, or on a diet very rich in fat — by the liver route 2 acetyl-CoA to acetoacetyl-CoA to HMG-CoA, which is then cleaved to acetyl-CoA plus free acetoacetate. Acetoacetate is reduced to beta-hydroxybutyrate or decarboxylates on its own to acetone.",
      def_cn: "乙酰乙酸、β-羟基丁酸和丙酮。当乙酰-CoA 的生成快过柠檬酸循环的吸收速度时（糖尿病、饥饿，或高脂饮食）它们就出现，走的是肝脏路线：2 个乙酰-CoA → 乙酰乙酰-CoA → HMG-CoA，HMG-CoA 再裂解成乙酰-CoA 加游离的乙酰乙酸。乙酰乙酸被还原成 β-羟基丁酸，或自发脱羧成丙酮。" },
    { en: "HMG-CoA as a fork", cn: "HMG-CoA 这个岔口",
      def_en: "Beta-hydroxy-beta-methylglutaryl-CoA is the branch point where surplus acetyl-CoA is committed either to terpenoid and steroid biosynthesis or to cleavage into acetyl-CoA plus acetoacetate. The same compound is also the end product of degrading a beta-methyl-branched fatty acid.",
      def_cn: "β-羟基-β-甲基戊二酸单酰-CoA 是那个分岔点：过剩的乙酰-CoA 在这里被定向，要么去合成萜类和类固醇，要么被裂解成乙酰-CoA 加乙酰乙酸。同一个化合物也是 β-甲基支链脂肪酸降解的终产物。" },
    { en: "acidosis and ketosis", cn: "酸中毒与酮症",
      def_en: "Acetoacetate and beta-hydroxybutyrate are carboxylic acids, so accumulating in blood they release protons and the pH falls. The state is ketosis and acidosis together: acetone becomes detectable on the breath, and prolonged, it leads to coma and death.",
      def_cn: "乙酰乙酸和 β-羟基丁酸是羧酸，在血中积起来就释放质子，血液 pH 随之下降。这种状态即酮症与酸中毒并存：呼气中能闻到丙酮味；若持续下去，会导致昏迷乃至死亡。" }
  ]
};
