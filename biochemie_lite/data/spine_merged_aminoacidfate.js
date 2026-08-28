/* Merged spines — the fate of an amino acid. 速通简洁版, ONE spine per TOPIC.

   Two halves of one story, written as consecutive links in one chain: what happens
   to the amino group, and then what happens to the carbon skeleton left behind.
   The first chain ends pointing at the second; the second opens by pointing back.

     key:amino-group-metabolism   L-18-1-1 + 5-2, 5-2-1-1, 5-2-1-2      (16 steps)
     key:amino-acid-degradation   L-18-3-1 + 5-2-3-1..5-2-3-4           (16 steps)

   The merge rule: the Lehninger telling is the backbone. The other account is folded
   in only where it ADDS — a number, an E.C. number, a name the exam uses, a worked
   case, a consequence the backbone does not draw. Where both say the same thing, the
   Lehninger sentence stands; where they disagree, the account carrying the evidence
   stands and the other is dropped rather than hedged. Every step keeps a `src` naming
   the pages it was read from, and a step built from both carries both, separated by a
   middle dot.

   `src` letters: "A" is Lehninger 8, cited by its own page numbers. "B §5.x" is the
   second textbook, cited by section and by the pages its nodes carry. Lehninger
   chapter 18 is not extracted anywhere in this repository, so the two per-node
   Lehninger spines are the whole of that source; nothing here is added from memory.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------- 氨基去哪儿了：氨基的代谢 ---- */
window.BIOLITE_SPINE["key:amino-group-metabolism"] = {
  assumed: ["ATP", "ADP", "GTP", "GDP", "NAD+", "NADP+", "coenzyme A", "coenzyme",
            "enzyme", "amino acid", "protein", "peptide", "peptide bond", "cytosol",
            "substrate", "active site", "insulin", "pyruvate", "lactate", "glycolysis",
            "allosteric enzyme", "plasma membrane", "receptor", "hormone", "liver",
            "kidney", "muscle", "brain", "blood", "urine", "citric acid cycle",
            "oxaloacetate", "carboxyl group", "amino group", "hydroxyl group",
            "carbonyl group", "methyl group", "side chain", "double bond", "oxidation",
            "hydrolysis", "gluconeogenesis", "glucose", "glycogen", "urea", "ammonia",
            "vitamin", "lysine", "glutamate", "glutamine", "alanine", "aspartate",
            "serine", "threonine", "histidine", "cysteine", "tyrosine", "phenylalanine",
            "glycine", "potassium", "sodium", "chloride", "neurotransmitter", "GABA",
            "diabetes mellitus", "starvation", "protease", "mitochondria", "matrix",
            "duodenum", "pancreas", "stomach", "bacteria", "plants", "acidosis",
            "bicarbonate", "tetrahydrofolate", "acetaldehyde", "imine", "proton",
            "active transport", "skeletal muscle", "blood-brain barrier"],
  nodeTitle_en: "The amino group: collecting it, releasing it, carrying it",
  nodeTitle_cn: "氨基：怎么收集、怎么放出、怎么搬运",
  title_en: "Nitrogen has to be collected before it can be removed, and it must never travel free",
  title_cn: "氮必须先被收集起来才谈得上移走，而且一路上绝不能是游离的",
  steps: [
    {
      en: "A cell has no store for amino acids. Fat goes into droplets and glucose into glycogen, but a surplus amino acid has nowhere to wait, so it is burned, and burning it means dealing with its nitrogen. Three situations put amino acids into the furnace: proteins turn over constantly and the amino acids released are not all needed for new protein; a meal delivers more than protein synthesis can use; and, when carbohydrate is unavailable or cannot be used — in starvation and in uncontrolled diabetes mellitus — the body degrades its own protein for fuel. In mammals this happens mainly in the liver and to a small extent in the kidneys, and across a normal day it supplies only 10 to 15 percent of a human's energy. **That third situation is why an untreated diabetic wastes muscle while blood glucose is high: the fuel is in the blood and the cells cannot take it in, so they take protein apart instead.**",
      cn: "细胞没有氨基酸的储库。脂肪能进脂滴、葡萄糖能变成糖原，可多出来的氨基酸无处可等，于是它被烧掉 —— 而烧掉它，就必须处理它身上的氮。三种情形会把氨基酸送进炉子：蛋白质一直在周转，释放出来的氨基酸并非都被新蛋白需要；一餐送进来的量超过了合成蛋白所能用掉的；以及当糖类拿不到或用不上时（饥饿，以及未受控制的糖尿病），身体拆自己的蛋白当燃料。在哺乳动物里，这件事主要发生在肝脏，肾脏里也有少量；平常一天里，这条路只占人体产能的 10% 到 15%。**第三种情形正是「未经治疗的糖尿病人血糖很高、却在消耗肌肉」的原因：燃料就在血里，细胞却拿不进去，于是转而去拆蛋白质。**",
      src: "A pp.625, 639 · B §5.2, p.118"
    },
    {
      link_en: "and an amino acid being burned comes apart in two before anything else happens to it",
      link_cn: "而一个要被烧掉的氨基酸，在遭遇任何别的事情之前，先被拆成两半",
      en: "An amino acid is a carbon skeleton with an alpha-amino group on it — a nitrogen attached to the carbon next to the carboxyl group — and its degradation runs in three phases: a transformation at that alpha carbon which takes the amino group off, disposal of the ammonia released, and oxidation of the carbon skeleton left behind. The first phase is essentially the same for almost every amino acid, and the individual routes only diverge after it. **The two halves then go different ways: the nitrogen has to be got rid of because free ammonia is poisonous, while the carbon skeleton is burned in the citric acid cycle.** Every claim below follows the nitrogen.",
      cn: "一个氨基酸就是一副碳骨架，上面挂着一个 α-氨基 —— 一个氮，接在紧邻羧基的那个碳上。它的降解分三个阶段：在那个 α 碳上做一次转化，把氨基取下来；处理掉放出来的氨；再把剩下的碳骨架氧化掉。第一阶段对几乎所有氨基酸都一样，各条路线要到这一步之后才分岔。**两半从此分道：氮必须被处理掉，因为游离的氨有毒；而碳骨架被送进柠檬酸循环烧掉。** 下面每一步跟的都是那个氮。",
      src: "A p.625 · B §5.2, p.118",
      see: [{ id: "L-18-3-1", en: "the other half of the story — what becomes of the carbon skeleton", cn: "故事的另一半 —— 碳骨架的下场" }]
    },
    {
      link_en: "before any of that, a dietary protein has to be taken apart, and both stages of the taking apart use the same safety device",
      link_cn: "在这一切之前，膳食蛋白得先被拆开 —— 拆的两个阶段用的是同一个保险装置",
      en: "Protein in the stomach makes the lining release gastrin, a hormone that tells parietal cells to secrete hydrochloric acid and chief cells to secrete pepsinogen; the acid, at pH 1.0 to 2.5, kills most bacteria and unfolds globular proteins — the compactly folded kind a diet is mostly made of — so that the peptide bonds buried inside them become reachable. Pepsinogen is a zymogen, meaning an inactive precursor of an enzyme, and it cuts itself into the protease pepsin only at low pH, so it cannot arm itself anywhere except where it is meant to work. Downstream the trick is repeated: acid arriving in the duodenum triggers secretin, which makes the pancreas secrete bicarbonate and lifts the pH to about 7, peptides trigger cholecystokinin, which releases the pancreatic proteases, and those arrive as zymogens too — enteropeptidase from intestinal cells converts trypsinogen to trypsin, and trypsin then activates all the rest, more trypsinogen included. **Acute pancreatitis is a digestive enzyme activated in the wrong place: the duct out is obstructed, trypsinogen becomes trypsin inside the pancreas, and the organ digests itself.**",
      cn: "胃里的蛋白让胃黏膜释放胃泌素，这个激素叫壁细胞分泌盐酸、主细胞分泌胃蛋白酶原；pH 1.0 到 2.5 的胃酸杀死大多数细菌，并把球状蛋白展开，让埋在里面的肽键变得够得着。胃蛋白酶原是一种酶原，即酶的无活性前体，它只在低 pH 下把自己切成蛋白酶胃蛋白酶，所以除了该干活的地方，别处都没法给自己上膛。往下这个花招又演了一遍：酸进入十二指肠触发促胰液素，让胰腺分泌碳酸氢盐、把 pH 抬到约 7；肽段触发胆囊收缩素，放出胰腺的那些蛋白酶，它们同样以酶原形式出场 —— 肠细胞分泌的肠肽酶把胰蛋白酶原变成胰蛋白酶，胰蛋白酶再去激活其余的一切，连更多的胰蛋白酶原也算在内。**急性胰腺炎就是一个消化酶在错误的地点被激活：出口导管被堵，胰蛋白酶原在胰腺内部变成了胰蛋白酶，器官开始消化自己。**",
      src: "A pp.627-628"
    },
    {
      link_en: "the amino acids reach the liver, and the first reaction most of them meet removes no nitrogen at all",
      link_cn: "氨基酸抵达肝脏，而多数氨基酸遇上的第一个反应，根本不移走任何氮",
      en: "An aminotransferase moves the alpha-amino group of an amino acid onto the alpha carbon of a 2-oxo acid, which is a molecule carrying a carbonyl where an amino acid carries its amino group, and it leaves the matching 2-oxo acid behind. The acceptors in practice are just three: 2-oxoglutarate, also written alpha-ketoglutarate, plus pyruvate and oxaloacetate. Nothing is deaminated on balance, because the acceptor gains an amino group at the same instant the donor loses one, so the size of the amino-group pool does not change and nothing has been excreted. Two practical facts: these enzymes are classed as E.C. 2.6.1 and named for the donor rather than the acceptor, so alanine aminotransferase takes the amino group off alanine; and the equilibrium constant is about 1.0, so one enzyme runs either way depending on which side is in excess. **What the reaction achieves is collection: the amino groups of many different amino acids are gathered onto one carrier, glutamate, so one enzyme downstream can do the removing instead of twenty.**",
      cn: "氨基转移酶把一个氨基酸的 α-氨基挪到某个 2-氧代酸的 α 碳上 —— 2-氧代酸就是在氨基酸挂氨基的那个位置上换成羰基的分子 —— 同时留下与供体对应的 2-氧代酸。实际用到的受体只有三个：2-氧戊二酸（也写作 α-酮戊二酸）、丙酮酸、草酰乙酸。从总账上看什么也没被脱氨：受体得到一个氨基与供体失去一个氨基是同一瞬间的事，氨基池的大小没变，也没有任何东西被排出体外。两个实用事实：这类酶归在 E.C. 2.6.1 下，并且按供体命名而不是按受体，所以丙氨酸氨基转移酶取走的是丙氨酸的氨基；它的平衡常数约为 1.0，所以同一个酶可以视哪边过量而朝任一方向跑。**这个反应真正完成的是收集：把许多不同氨基酸身上的氨基归拢到同一个载体谷氨酸上，好让下游一个酶去做真正的「移走」，而不是二十个。**",
      src: "A p.628 · B §5.2.1, p.120"
    },
    {
      link_en: "and one cofactor makes that chemistry possible, doing the same single thing every time",
      link_cn: "这套化学之所以成立，靠的是一个辅因子 —— 而它每次干的其实是同一件事",
      en: "Pyridoxal phosphate, the working form of vitamin B6, sits in the active site as a prosthetic group, which means it stays bound to its enzyme instead of arriving and leaving as a substrate does. At rest it is joined to a lysine side chain of the enzyme as an aldimine, also called a Schiff base, which is a carbon-nitrogen double bond; an incoming amino acid binds through its own alpha-amino group, displaces that lysine, and forms an external aldimine of its own. Then one bond at the alpha carbon of the substrate is broken, and whatever leaves, the carbon left behind would be an unstable carbanion, a carbon holding a lone pair and a negative charge. In transamination the group that leaves is a proton, and the products are a 2-oxo acid plus the coenzyme in its pyridoxamine phosphate form; the coenzyme only becomes pyridoxal phosphate again once it hands that amino group on to a second 2-oxo acid, so the enzyme works in two half-reactions, a ping-pong mechanism. **Pyridoxal phosphate carries a conjugated ring whose protonated nitrogen acts as an electron sink, taking the negative charge onto itself and holding that carbanion until the reaction finishes.**",
      cn: "磷酸吡哆醛是维生素 B6 的工作形式，它以辅基的身份坐在活性位点里 —— 辅基的意思是它一直结合在酶上，不像底物那样来了又走。静息时它以醛亚胺（又叫 Schiff 碱，即一个碳氮双键）挂在酶的一个赖氨酸侧链上；进来的氨基酸用自己的 α-氨基去结合它，把赖氨酸顶掉，形成一个属于自己的分子外醛亚胺。接着底物 α 碳上的一根键被打断 —— 不论离去的是什么，剩下的那个碳都会是一个不稳定的碳负离子，即带着孤对电子和负电荷的碳。在转氨里离去的是一个质子，产物是一个 2-氧代酸，外加处于磷酸吡哆胺形式的辅酶；辅酶要等到把这个氨基交给第二个 2-氧代酸之后才变回磷酸吡哆醛，所以这个酶是分两个半反应干活的，即乒乓机制。**磷酸吡哆醛带着一个共轭环，环上被质子化的氮充当电子阱，把那份负电荷接到自己身上，把碳负离子稳住直到反应走完。**",
      src: "A pp.629-630 · B §5.2.1, pp.120-121"
    },
    {
      link_en: "and the same coenzyme, breaking a different bond, gives two reactions that are not transamination at all",
      link_cn: "同一个辅酶，换一根键去打断，给出的就是两个根本不是转氨的反应",
      en: "Three groups hang off that alpha carbon, and which reaction an enzyme performs depends only on which of them it presents for breaking. Break off the carboxyl group and the reaction is a decarboxylation, giving a primary amine — the biogenic amines, which are physiologically active molecules; cysteine decarboxylated gives cysteamine and aspartate gives beta-alanine, and both of those are built into coenzyme A. A decarboxylation removes no nitrogen at all. Break off the side chain instead and the reaction is an aldol cleavage, which is possible only where a hydroxyl sits on the beta carbon, so only for serine and threonine: threonine aldolase splits threonine into glycine and acetaldehyde, and serine gives glycine plus a hydroxymethyl group that the tetrahydrofolate system carries away. **One coenzyme therefore supports racemization, decarboxylation, transamination and side-chain cleavage alike, and the coenzyme itself does exactly the same job in all four.**",
      cn: "α 碳上挂着三个基团，一个酶做出哪个反应，只取决于它把哪一个递上去打断。打断羧基，反应就是脱羧，产物是一个伯胺 —— 也就是有生理活性的「生物胺」；半胱氨酸脱羧给出半胱胺，天冬氨酸脱羧给出 β-丙氨酸，这两个都是辅酶 A 的组成部件。脱羧完全不移走氮。改为打断侧链，反应就是一次醛醇裂解，而这只有在 β 碳上带羟基时才可能，所以只轮得到丝氨酸和苏氨酸：苏氨酸醛缩酶把苏氨酸裂成甘氨酸加乙醛，丝氨酸则给出甘氨酸，外加一个由四氢叶酸系统带走的羟甲基。**于是同一个辅酶同时撑起了消旋、脱羧、转氨和侧链裂解，而辅酶自己在这四者里做的完全是同一件事。**",
      src: "B §5.2.1, pp.121-122 · A p.630"
    },
    {
      link_en: "so if collecting amino groups removes none of them, what does?",
      link_cn: "既然收集氨基并不能移走任何氨基，那真正移走它的是什么？",
      en: "Transamination by itself can never take a net amino group out of the pool; it only changes which molecule is carrying one. Removing nitrogen takes a deamination, a reaction that releases it as ammonium, and three of the four routes to that are narrow ones. Simple deamination is the bare loss of ammonia, leaving a double bond behind with no oxidation whatever, and in mammals histidine alone uses it, becoming urocanic acid plus ammonium and being degraded onward by way of glutamate; bacteria and plants use it for aspartate, phenylalanine and tyrosine as well. Deamination by dehydration needs a hydroxyl on the beta carbon, so it is open only to serine and threonine: serine dehydratase, E.C. 4.2.1.13, splits out water to give an aminoacrylate that rearranges through an imine and hydrolyses to pyruvate plus ammonium, and threonine goes the same way to 2-oxobutyrate. **Serine dehydratase uses pyridoxal phosphate too, but not as an oxidising agent: neither simple deamination nor dehydration oxidises anything, and the nitrogen still comes off as ammonium.**",
      cn: "转氨本身永远不能把一个净的氨基从池子里拿走，它只是换了个分子来背着。要把氮移走，需要一次脱氨，即真正把氮以铵离子形式放出来的反应；而通向脱氨的四条路里有三条都很窄。简单脱氨只是失去氨、留下一个双键，全程没有任何氧化；在哺乳动物里只有组氨酸走这条路，变成尿刺酸加铵离子，再经谷氨酸往下降解；细菌和植物还拿它去处理天冬氨酸、苯丙氨酸和酪氨酸。脱水型脱氨需要 β 碳上有羟基，所以只对丝氨酸和苏氨酸开放：丝氨酸脱水酶（E.C. 4.2.1.13）裂出一分子水，得到氨基丙烯酸酯，后者经亚胺互变再水解成丙酮酸加铵离子；苏氨酸同样脱水，得到 2-氧代丁酸。**丝氨酸脱水酶用的也是磷酸吡哆醛，但在这里它不充当氧化剂：简单脱氨和脱水这两条路都没有氧化任何东西，氮却照样以铵离子的形式下来了。**",
      src: "B §5.2.1, pp.118-119"
    },
    {
      link_en: "the fourth route is the one most amino acids actually take",
      link_cn: "第四条路才是大多数氨基酸真正走的那条",
      en: "For most amino acids the deamination is accompanied by oxidation of the alpha carbon, and that pairing is called oxidative deamination. A dehydrogenase carrying NAD+ or NADP+ oxidises the CH-NH2 group to an imine, a carbon-nitrogen double bond, and the imine then hydrolyses on its own to a 2-oxo acid plus ammonium; the reactions are strongly exergonic, and running them forward requires the NADH produced to be reoxidised aerobically, which is one reason they belong in mitochondria. A minor variant uses two flavoproteins instead of a dehydrogenase: D-amino acid oxidase, E.C. 1.4.3.3, whose real job is disposing of D-amino acids because those are not standard protein building blocks, and L-amino acid oxidase, E.C. 1.4.3.2, whose catalytic efficiency is low. **These dehydrogenases are allosteric in one consistent direction: ATP and GTP inhibit them while ADP and GDP activate them, so amino acids are stripped of nitrogen when a cell is short of energy.**",
      cn: "在大多数氨基酸身上，脱氨是伴着 α 碳的氧化一起发生的，这个组合叫氧化脱氨。一个带 NAD+ 或 NADP+ 的脱氢酶把 CH-NH2 基团氧化成亚胺（一个碳氮双键），亚胺随即自发水解成 2-氧代酸加铵离子；这些反应强烈放能，而要让它们朝这个方向跑，就得让生成的 NADH 有氧地被重新氧化掉 —— 这也是它们属于线粒体的原因之一。还有一条次要的变体不用脱氢酶而用两种黄素蛋白：D-氨基酸氧化酶（E.C. 1.4.3.3），它真正的职责是处理掉 D-氨基酸，因为那些不是标准的蛋白质建筑块；以及 L-氨基酸氧化酶（E.C. 1.4.3.2），催化效率很低。**这些脱氢酶的变构调控方向是一致的：ATP 和 GTP 抑制它们，ADP 和 GDP 激活它们，于是细胞缺能量时氨基酸才会被剥掉氮。**",
      src: "B §5.2.1, pp.119-120"
    },
    {
      link_en: "and there is one oxidative deamination that matters more than all the others put together",
      link_cn: "而在所有氧化脱氨里，有一个比其余加起来都重要",
      recall_en: "the collection onto glutamate five steps up is what makes a single removal point possible",
      recall_cn: "五步之前把氮收集到谷氨酸上，正是「只需一个移走点」得以成立的前提",
      en: "Aminotransferases sit in both the cytosol and the mitochondria of a eukaryotic cell, and the two compartments cooperate: glutamate made in the cytosol is carried into the mitochondrion by a specific active-transport carrier. In the matrix, glutamate dehydrogenase, E.C. 1.4.1.2, strips that amino group off as ammonium and hands 2-oxoglutarate back. It is unusual in accepting either NAD+ or NADP+, which the plant and microbial versions do not; it is built from six identical subunits, activated by ADP and inhibited by GTP, and the direction makes sense, because GTP is a citric acid cycle product signalling that 2-oxoglutarate is already plentiful and there is no reason to tear down glutamate to make more of what the cycle has. The allostery is demonstrably real: mutations damaging its GTP site leave the enzyme permanently on, giving hyperinsulinism-hyperammonemia syndrome, with insulin over-secreted after a protein meal, ammonia high in blood and blood glucose low. **An aminotransferase and glutamate dehydrogenase working as a pair is called transdeamination, and it is the whole answer to how twenty amino acids lose their nitrogen through one controlled exit.**",
      cn: "在真核细胞里，氨基转移酶在胞质和线粒体中都有，两个区室是配合着干的：胞质里生成的谷氨酸由一套专一的主动转运载体送进线粒体。在基质里，谷氨酸脱氢酶（E.C. 1.4.1.2）把这个氨基以铵离子的形式剥下来，同时把 2-氧戊二酸交还回去。它不寻常的地方在于 NAD+ 和 NADP+ 它都收，而植物和微生物版本做不到；它由六个相同亚基组成，ADP 激活、GTP 抑制，而这个方向是说得通的：GTP 是柠檬酸循环的产物，意味着 2-氧戊二酸已经不缺，没理由再拆谷氨酸去多造循环里已有的东西。这套变构是可以被证明的：破坏它 GTP 位点的突变让酶永远开着，结果是高胰岛素血症-高氨血症综合征 —— 蛋白质餐后胰岛素分泌过多、血氨升高、血糖偏低。**一个氨基转移酶加上谷氨酸脱氢酶，这一对合起来叫转脱氨基作用；二十种氨基酸如何经由一个受控的出口卸掉氮，答案全在这一对上。**",
      src: "A p.631 · B §5.2.1, pp.119-120"
    },
    {
      link_en: "that works inside one cell. Between organs, the nitrogen needs a different carrier",
      link_cn: "以上都在一个细胞内部。器官之间搬运，氮需要另一个载体",
      en: "Many tissues, the brain among them, generate free ammonia — from degrading nucleotides, for instance — and almost none of it is allowed into the blood as ammonia. Glutamine synthetase attaches it to glutamate to make glutamine, spending one ATP and passing through a gamma-glutamyl phosphate intermediate, and glutamine is what actually travels in the blood. At the far end sits glutaminase: inside the mitochondria of liver, kidney and intestinal cells it takes that amide nitrogen back off as ammonium. In the liver, ammonia from every source is then disposed of by making urea. **So there are two carriers with two ranges: glutamate collects nitrogen inside a cell, glutamine carries it between cells, and free ammonia is never the thing in transit.**",
      cn: "许多组织（脑也在内）会产生游离的氨 —— 比如核苷酸降解时 —— 而其中几乎没有一点被允许以氨的形式进入血液。谷氨酰胺合成酶把它接到谷氨酸上做成谷氨酰胺，花掉一个 ATP，中间经过一个 γ-谷氨酰磷酸中间体；真正在血里跑的是谷氨酰胺。到了另一端是谷氨酰胺酶：在肝、肾和肠细胞的线粒体里，它把这个酰胺氮又以铵离子的形式取下来。在肝脏里，各种来源的氨最后都靠合成尿素处理掉。**所以有两个载体、两种作用范围：谷氨酸在细胞内部收集氮，谷氨酰胺在细胞之间搬运氮，而游离的氨从来不是被运送的那个东西。**",
      src: "A pp.631-632",
      see: [{ id: "L-18-2-1", en: "the urea cycle itself", cn: "尿素循环本身" }]
    },
    {
      link_en: "and the kidney, which does only a small share of this catabolism, uses the same molecule for something else entirely",
      link_cn: "而只承担一小部分分解量的肾脏，拿同一个分子去干一件完全不同的事",
      recall_en: "the same glutamine and the same glutaminase as the step above",
      recall_cn: "还是上一步那个谷氨酰胺、那个谷氨酰胺酶",
      en: "In metabolic acidosis, meaning blood that is too acid, the kidney increases its processing of glutamine, and the increase is regulated rather than incidental. Bicarbonate produced when 2-oxoglutarate is decarboxylated in the citric acid cycle adds a second effect by buffering the blood plasma, and both effects push against the acidosis. The chemistry is the same as in the liver; what differs is where the ammonium is allowed to go. **Ammonium released in the kidney is not sent to the blood and not made into urea: it goes straight into the urine, where it forms salts with metabolic acids and carries them out of the body.**",
      cn: "在代谢性酸中毒（血偏酸）时，肾脏会加大对谷氨酰胺的处理量，而这个增加是受调控的，不是顺带发生的。柠檬酸循环中 2-氧戊二酸脱羧产生的碳酸氢盐又加了第二重效果，在血浆里充当缓冲，两者都在往回顶那个酸中毒。化学与肝里的完全一样，不同的只是这个铵离子被允许去哪里。**肾里放出来的铵离子既不送进血液、也不去做尿素：它直接进入尿液，在尿里与代谢酸成盐，把酸带出体外。**",
      src: "A p.632 · B §5.2, p.118"
    },
    {
      link_en: "working muscle uses yet another carrier, and the reason is about who pays",
      link_cn: "工作中的肌肉又用另一个载体，而理由关乎「谁买单」",
      en: "Hard-contracting skeletal muscle works largely without oxygen, so it makes a great deal of pyruvate and lactate, and breaking down its own protein makes ammonia as well. Both have to reach the liver: the three-carbon acids to be rebuilt into glucose by gluconeogenesis, the nitrogen to be made into urea. Alanine aminotransferase converts pyruvate and glutamate into alanine, and in the liver the same enzyme runs backwards, handing the amino group to 2-oxoglutarate and returning pyruvate, which is an equilibrium constant of 1.0 doing visible work. The glutamate made there either enters mitochondria to be stripped by glutamate dehydrogenase, or is transaminated with oxaloacetate to aspartate, the second nitrogen donor of urea synthesis. **Alanine carries a nitrogen and a three-carbon skeleton to the liver in one molecule, which puts the cost of gluconeogenesis on the liver and leaves the muscle's ATP for contraction.**",
      cn: "剧烈收缩的骨骼肌基本上在缺氧下工作，于是产生大量丙酮酸和乳酸，而拆自己的蛋白又产生氨。两样都得送到肝脏：三碳酸去经糖异生变回葡萄糖，氮去做尿素。丙氨酸氨基转移酶把丙酮酸和谷氨酸变成丙氨酸；到了肝里，同一个酶反着跑，把氨基交给 2-氧戊二酸、把丙酮酸还回来 —— 那个等于 1.0 的平衡常数在这里肉眼可见地干活。在肝里生成的谷氨酸，要么进线粒体被谷氨酸脱氢酶剥掉氨基，要么与草酰乙酸转氨生成天冬氨酸，即尿素合成的第二个氮供体。**丙氨酸一趟把一个氮和一副三碳骨架同时带去肝脏，于是糖异生这笔账记在肝头上，而肌肉里的 ATP 全部留给收缩。**",
      src: "A pp.632-633"
    },
    {
      link_en: "four amino acids have now appeared as carriers, and they are not four out of twenty by chance",
      link_cn: "到此为止出场的载体一共四个，而它们不是从二十个里随便挑出来的",
      recall_en: "glutamate, glutamine, alanine and aspartate, each introduced above as it was needed",
      recall_cn: "谷氨酸、谷氨酰胺、丙氨酸、天冬氨酸 —— 前面每次需要时各自出场过一回",
      en: "Glutamate, glutamine, alanine and aspartate are the four amino acids that transport and distribute amino groups, and all four are present at relatively high concentration in one or many mammalian tissues. Loading nitrogen onto one of them costs a single step, unloading costs a single step, and the carbon they are carrying is itself usable fuel rather than dead weight. **Glutamate, glutamine, alanine and aspartate are each one transamination away from a citric acid cycle intermediate or from pyruvate**, so nitrogen and usable carbon travel together and both arrive somewhere they can be used.",
      cn: "谷氨酸、谷氨酰胺、丙氨酸、天冬氨酸就是负责运输与分配氨基的那四个氨基酸，四者在一种或多种哺乳动物组织中浓度都相对较高。往其中任何一个上装氮只花一步，卸氮也只花一步，而它们载着的碳本身就是能用的燃料，不是死重。**谷氨酸、谷氨酰胺、丙氨酸、天冬氨酸各自都离某个柠檬酸循环中间物或丙酮酸只有一次转氨之遥，于是氮和能用的碳一起走，两者到站之后都用得上。**",
      src: "A p.625"
    },
    {
      link_en: "and at the end of all this transport, the nitrogen has to leave the body in some chemical form",
      link_cn: "而这一路运输的终点，氮总得以某种化学形式离开身体",
      en: "Which form depends largely on how much water the animal has. The grouping does not follow ancestry — sharks are ureotelic and are not short of water — so water is not the only pressure at work. There is a second reading of these molecules worth having: the carbons of urea and of uric acid are highly oxidised, which says that an organism throws carbon away only after taking most of the oxidation energy out of it. **Most aquatic species release ammonia and let the water around them dilute it, most terrestrial animals excrete urea instead, and birds and reptiles excrete uric acid** as a near-solid paste that costs almost no water.",
      cn: "以哪种形式离开，主要取决于这种动物有多少水。这个分组并不跟着亲缘关系走 —— 鲨鱼排尿素，而鲨鱼并不缺水 —— 所以「水」不是唯一在起作用的压力。这些分子还有第二种读法值得拿着：尿素和尿酸的碳都被高度氧化了，这说明生物只有在把碳的氧化能量榨得差不多之后，才会把它扔掉。**多数水生物种直接放出氨，让周围的水稀释它；多数陆生动物改为排出尿素；鸟类和爬行类排出的是尿酸，接近固体的糊状，几乎不费水。**",
      src: "A pp.626-627"
    },
    {
      link_en: "one thing has been asserted throughout and not yet argued: that free ammonia is poisonous. The reason starts with a membrane",
      link_cn: "有一件事前面一直在用、却还没论证：游离的氨有毒。原因要从一张膜说起",
      en: "In blood about 98 percent of ammonia is protonated, as ammonium, and ammonium carries a charge and does not cross a plasma membrane. The remaining 2 percent is uncharged NH3, and uncharged NH3 crosses every membrane easily, the blood-brain barrier included; once inside a cell most of it picks up a proton again and is stuck there as ammonium. The consequences are cognitive impairment, ataxia, seizures, and in extreme cases swelling of the brain and death. **Uncharged ammonia is the only form that can cross a membrane, and it takes up a proton and is trapped as ammonium on arrival, so the trap is one-way and ammonia piles up inside cells.**",
      cn: "血中约 98% 的氨是质子化的铵离子，而铵离子带电，过不了质膜。剩下 2% 是不带电的 NH3，不带电的 NH3 轻易穿过任何膜，包括血脑屏障；一旦进入细胞，其中大部分又抓回一个质子，以铵离子的形式被困在里面。后果是认知损害、共济失调、癫痫样发作，极端情况下脑肿胀直至死亡。**能过膜的只有不带电的氨，而它一到就抓个质子、以铵离子的形式被困住 —— 所以这个陷阱是单向的，氨在细胞里越积越多。**",
      src: "A p.633"
    },
    {
      link_en: "and inside the brain the damage runs along a chain that can be followed step by step",
      link_cn: "而在脑内部，损害沿着一条可以一步步跟下去的链条展开",
      recall_en: "the two enzymes from earlier, glutamate dehydrogenase and glutamine synthetase, now running as a defence",
      recall_cn: "前面那两个酶 —— 谷氨酸脱氢酶和谷氨酰胺合成酶 —— 现在充当防线",
      en: "The first line of defence is to run glutamate dehydrogenase backwards, aminating 2-oxoglutarate to glutamate, and then to make glutamine with glutamine synthetase, which in the brain only astrocytes express; astrocytes are the supporting cells that wrap around neurons and manage their chemical environment. That defence costs the brain glutamate, which is itself a neurotransmitter and the precursor of GABA, another one, so the defence damages the signalling it protects, and it is in any case not enough. Then the ion chain follows. **Ammonium competes with potassium at the Na-K ATPase, the potassium left outside enters neurons through the NKCC1 cotransporter with two chlorides each**, and that chloride load turns the GABA-A response into seizures. If ammonium stays high, the disturbance of ion and water channels swells astrocytes into fatal brain edema.",
      cn: "第一道防线是把谷氨酸脱氢酶反着开，让 2-氧戊二酸氨基化成谷氨酸，再由谷氨酰胺合成酶做成谷氨酰胺 —— 而在脑中只有星形胶质细胞表达谷氨酰胺合成酶；星形胶质细胞是包裹神经元、打理其化学环境的支持细胞。这道防线要花掉谷氨酸，而谷氨酸本身就是一种神经递质，也是另一种神经递质 GABA 的前体，于是防线损伤了它所要保护的信号，何况这点能力本来也不够用。接着是离子这条链。**铵离子在 Na-K ATPase 上与钾竞争，被留在外面的钾经 NKCC1 共转运体进入神经元，每个钾还带进两个氯，而这份氯负荷把 GABA-A 的反应变成了癫痫发作。** 如果铵离子持续偏高，离子通道与水通道的紊乱会让星形胶质细胞肿胀成致命的脑水肿。",
      src: "A p.633",
      openQuestion_en: "How much of the brain's sensitivity comes from glutamate depletion rather than from the ion chain is not settled.",
      openQuestion_cn: "脑的这种敏感性里，有多少来自谷氨酸被耗竭、而不是来自那条离子链，目前并没有定论。",
      see: [{ id: "L-18-3-1", en: "the nitrogen is dealt with; now the carbon skeleton left behind", cn: "氮处理完了；接下来是剩下的那副碳骨架" },
            { id: "5-2-3-4", en: "every skeleton mapped onto its entry point on the citric acid cycle", cn: "每副骨架各自对应到柠檬酸循环上的哪个入口" }]
    }
  ],
  terms: [
    { en: "transamination", cn: "转氨作用",
      def_en: "Transfer of an alpha-amino group onto the alpha carbon of a 2-oxo acid — in practice 2-oxoglutarate, pyruvate or oxaloacetate — leaving the corresponding 2-oxo acid behind. Nothing is deaminated on balance, because the acceptor gains exactly what the donor loses. Its purpose is collection: the amino groups of many amino acids end up on one carrier, glutamate. E.C. 2.6.1; equilibrium constant about 1.0, so freely reversible, and the enzymes are named for the donor.",
      def_cn: "把一个 α-氨基挪到某个 2-氧代酸的 α 碳上（实际用到的是 2-氧戊二酸、丙酮酸、草酰乙酸），留下与供体对应的 2-氧代酸。总账上没有任何脱氨，因为受体得到的正是供体失去的。它的目的是收集：许多氨基酸的氨基最后都落到同一个载体谷氨酸上。归在 E.C. 2.6.1 下；平衡常数约 1.0，可自由逆转，酶按供体命名。" },
    { en: "pyridoxal phosphate", cn: "磷酸吡哆醛",
      def_en: "The working form of vitamin B6, bound to its enzyme as a prosthetic group through a Schiff base to a lysine. It breaks one bond at a substrate's alpha carbon and holds the resulting carbanion on its conjugated ring, which acts as an electron sink. One chemical role supports racemization, decarboxylation, transamination and the aldol cleavage of serine and threonine alike. In transamination it passes through a pyridoxamine phosphate form and is only regenerated by a second half-reaction, which makes the mechanism a ping-pong one.",
      def_cn: "维生素 B6 的工作形式，以辅基身份通过与一个赖氨酸形成的 Schiff 碱结合在酶上。它打断底物 α 碳上的一根键，并把生成的碳负离子稳在自己的共轭环上，环起电子阱的作用。就这一个化学角色，同时撑起了消旋、脱羧、转氨，以及丝氨酸/苏氨酸的醛醇裂解。在转氨里它要先变成磷酸吡哆胺形式，靠第二个半反应才再生 —— 所以机制是乒乓式的。" },
    { en: "four deamination routes", cn: "四条脱氨路线",
      def_en: "Simple deamination, which loses ammonia and leaves a double bond with no oxidation and in mammals serves histidine alone; dehydration, restricted by its chemistry to serine and threonine, run by serine dehydratase E.C. 4.2.1.13; oxidative deamination by NAD(P)+-dependent dehydrogenases, which is what most amino acids use; and a minor oxidase route on two flavoproteins, D-amino acid oxidase E.C. 1.4.3.3 and L-amino acid oxidase E.C. 1.4.3.2.",
      def_cn: "简单脱氨：失去氨、留下双键、不发生氧化，哺乳动物里只服务组氨酸；脱水型：受化学所限只对丝氨酸和苏氨酸开放，由丝氨酸脱水酶（E.C. 4.2.1.13）执行；氧化脱氨：由 NAD(P)+ 依赖的脱氢酶催化，大多数氨基酸走这条；以及次要的氧化酶路线，由两种黄素蛋白承担 —— D-氨基酸氧化酶 E.C. 1.4.3.3 与 L-氨基酸氧化酶 E.C. 1.4.3.2。" },
    { en: "transdeamination", cn: "转脱氨基作用",
      def_en: "An aminotransferase and glutamate dehydrogenase working as a pair: the first collects amino groups onto glutamate in the cytosol, a specific carrier moves that glutamate into the mitochondrion, and the second releases the nitrogen as ammonium in the matrix. This is how twenty amino acids lose their nitrogen through one controlled exit.",
      def_cn: "一个氨基转移酶与谷氨酸脱氢酶配成一对：前者在胞质里把氨基收集到谷氨酸上，一套专一载体把谷氨酸送进线粒体，后者在基质里把氮以铵离子放出。二十种氨基酸就是这样经由一个受控出口卸掉氮的。" },
    { en: "glutamate dehydrogenase", cn: "谷氨酸脱氢酶",
      def_en: "E.C. 1.4.1.2, the matrix enzyme that removes the amino group of glutamate as ammonium and returns 2-oxoglutarate. Six identical subunits, activated by ADP and inhibited by GTP, and unusual in accepting either NAD+ or NADP+. Permanent activation by mutation of its GTP site causes hyperinsulinism-hyperammonemia syndrome.",
      def_cn: "E.C. 1.4.1.2，基质里那个把谷氨酸的氨基以铵离子取下、并交还 2-氧戊二酸的酶。六个相同亚基，ADP 激活、GTP 抑制，而且 NAD+ 和 NADP+ 都收，这一点很不寻常。GTP 位点突变导致它永远开着，就是高胰岛素血症-高氨血症综合征。" },
    { en: "glutamine as nitrogen carrier", cn: "谷氨酰胺作为氮的载体",
      def_en: "Glutamine synthetase attaches free ammonia to glutamate at the cost of one ATP, through a gamma-glutamyl phosphate intermediate, and the product is what travels in the blood. Glutaminase in the mitochondria of liver, kidney and intestine takes the nitrogen off again as ammonium. Glutamate collects within a cell; glutamine carries between cells.",
      def_cn: "谷氨酰胺合成酶花一个 ATP、经 γ-谷氨酰磷酸中间体把游离氨接到谷氨酸上，产物就是真正在血里跑的那个分子。肝、肾、肠线粒体里的谷氨酰胺酶再把这个氮以铵离子取下。谷氨酸在细胞内收集，谷氨酰胺在细胞之间搬运。" },
    { en: "glucose-alanine cycle", cn: "葡萄糖-丙氨酸循环",
      def_en: "Working muscle sends nitrogen and a three-carbon skeleton to the liver in one molecule, alanine, made by alanine aminotransferase from pyruvate and glutamate. The liver runs the same enzyme backwards, recovers the pyruvate for glucose synthesis and the nitrogen for urea. It puts the cost of gluconeogenesis on the liver and leaves the muscle's ATP for contraction.",
      def_cn: "工作中的肌肉把氮和一副三碳骨架装在同一个分子里送去肝脏，这个分子是丙氨酸，由丙氨酸氨基转移酶用丙酮酸和谷氨酸做成。肝里同一个酶反着跑，收回丙酮酸去造葡萄糖、收回氮去做尿素。这把糖异生的账记在肝上，让肌肉的 ATP 全部留给收缩。" },
    { en: "ammonia toxicity", cn: "氨的毒性",
      def_en: "Only the 2 percent of blood ammonia that is uncharged NH3 crosses membranes, and it is re-protonated and trapped inside cells. In the brain, defence costs glutamate; ammonium then competes with potassium at the Na-K ATPase, extracellular potassium enters neurons through NKCC1 with two chlorides, and the chloride load perverts the GABA-A response, giving seizures. Persistent ammonium swells astrocytes into fatal brain edema.",
      def_cn: "血氨里只有 2% 的不带电 NH3 能过膜，它进细胞后重新质子化、被困在里面。在脑中，防御要花掉谷氨酸；随后铵离子在 Na-K ATPase 上与钾竞争，细胞外的钾经 NKCC1 带着两个氯进入神经元，这份氯负荷把 GABA-A 的反应扭曲成癫痫发作。铵离子持续偏高则把星形胶质细胞胀成致命的脑水肿。" }
  ]
};

/* --------------------------------------------- 骨架去哪儿了：氨基酸的降解 ---- */
window.BIOLITE_SPINE["key:amino-acid-degradation"] = {
  assumed: ["ATP", "ADP", "GTP", "NAD+", "NADP+", "coenzyme A", "coenzyme", "cofactor",
            "enzyme", "amino acid", "protein", "peptide", "dipeptide", "cytosol",
            "substrate", "liver", "kidney", "muscle", "skeletal muscle", "brain",
            "blood", "urine", "citric acid cycle", "oxaloacetate", "pyruvate",
            "acetyl-CoA", "acetyl group", "carboxyl group", "amino group",
            "hydroxyl group", "carbonyl group", "side chain", "methyl group",
            "thiol group", "methyl ester", "double bond", "oxidation", "hydrolysis",
            "gluconeogenesis", "glucose", "glycogen", "glycolysis", "urea",
            "urea cycle", "ammonia", "ammonium", "vitamin", "starvation",
            "diabetes mellitus", "insulin", "mitochondria", "matrix", "carbon dioxide",
            "transamination", "deamination", "aminotransferase", "dehydrogenase",
            "glutamate", "glutamine", "alanine", "aspartate", "asparagine", "serine",
            "threonine", "cysteine", "cystine", "glycine", "tyrosine", "phenylalanine",
            "tryptophan", "histidine", "proline", "arginine", "ornithine", "lysine",
            "leucine", "isoleucine", "valine", "methionine", "2-oxo acid",
            "2-oxoglutarate", "alpha-ketoglutarate", "fumarate", "succinyl-CoA",
            "urocanate", "urocanic acid", "serine dehydratase", "pyridoxal phosphate",
            "Schiff base", "imine", "essential amino acid", "fatty acid",
            "fatty acid oxidation", "hormone", "thyroid hormone", "neurotransmitter",
            "dopamine", "adrenaline", "noradrenaline", "serotonin", "acetaldehyde",
            "propionate", "benzene", "plants", "bacteria", "fungi", "gene",
            "casein", "arthritis", "polyethylene glycol", "aspartame",
            "protein synthesis", "newborn screening", "intellectual disability"],
  nodeTitle_en: "The carbon skeleton: twenty routes, six destinations, one sorting rule",
  nodeTitle_cn: "碳骨架：二十条路线、六个终点、一条分类规则",
  title_en: "Once the nitrogen is gone, twenty skeletons collapse onto six molecules, and one piece of arithmetic sorts them all",
  title_cn: "氮走掉之后，二十副骨架收敛到六个分子上，而把它们全部分好类的，是一笔算术",
  steps: [
    {
      recall_en: "the amino group, followed in the first half of this chain all the way out to urea",
      recall_cn: "氨基 —— 这条链的前半段，一路把它跟到了尿素、跟到了身体之外",
      en: "The nitrogen has been collected onto glutamate, released as ammonium and excreted as urea, and what is left of an amino acid is its carbon skeleton: the carbons and hydrogens with the nitrogen gone. Each of the twenty has its own degradation route for that skeleton, and the routes look nothing alike. **Twenty degradation routes converge onto only six molecules — pyruvate, acetyl-CoA, 2-oxoglutarate, succinyl-CoA, fumarate and oxaloacetate — and all six enter the citric acid cycle.** A seventh box, acetoacetyl-CoA, is counted in some tellings; it is a road to acetyl-CoA rather than an endpoint, which is why the same material comes out as six destinations here and seven elsewhere. Six destinations is the thing to learn, not twenty pathways.",
      cn: "氮已经被收集到谷氨酸上、以铵离子放出、最后以尿素排掉了；一个氨基酸剩下的是它的碳骨架：去掉氮之后的那些碳和氢。二十种氨基酸各有各的骨架降解路线，彼此看上去毫不相像。**这二十条降解路线只汇聚到六个分子上 —— 丙酮酸、乙酰-CoA、2-氧戊二酸、琥珀酰-CoA、延胡索酸、草酰乙酸 —— 而这六个全都进入柠檬酸循环。** 有的讲法还会数上第七个框：乙酰乙酰-CoA；它是通向乙酰-CoA 的一条路，而不是一个终点，这就是同一份材料在这里数出六个、在别处数出七个的原因。要记的是六个终点，不是二十条通路。",
      src: "A pp.639-640, figure 18-15 · B §5.2.3, p.125",
      see: [{ id: "L-18-1-1", en: "the first half — where the amino group went", cn: "前半段 —— 那个氨基去了哪里" }]
    },
    {
      link_en: "and one general reaction puts almost every skeleton onto those routes",
      link_cn: "而几乎每一副骨架，都是靠同一个通用反应才走上这些路线的",
      en: "Transamination hands the carbon skeleton on as a 2-oxo acid, and a second general reaction — oxidative decarboxylation — takes the carboxyl group away as carbon dioxide while oxidising what remains. **Oxidative decarboxylation shortens the original skeleton by one carbon and joins the rest to coenzyme A, and the acyl-CoA it makes is the entry point into the routes below.** How much traffic those routes carry is worth fixing at the start: amino acid catabolism normally supplies only 10 to 15 percent of a human's energy, and the flux through it shifts with the balance between how much of an amino acid is available and how much is wanted for building things. These pathways are nowhere near as busy as glycolysis or fatty acid oxidation, and they matter most in exactly two situations — a diet high in protein, and starvation, when the body is dismantling its own protein for fuel.",
      cn: "转氨把碳骨架以 2-氧代酸的形式交出去，接着是第二个通用反应 —— 氧化脱羧：它把羧基以二氧化碳的形式拿走，同时把剩下的部分氧化。**氧化脱羧使原来的骨架短掉一个碳，并把余下的部分接到辅酶 A 上；它生成的酰基-CoA 就是下面各条路线的入口。** 这些路线上的车流量值得一开始就钉住：氨基酸的分解代谢通常只供给人体 10% 到 15% 的能量，而流量随「某种氨基酸有多少可用」与「有多少被拿去造东西」之间的平衡而变动。它们远不像糖酵解或脂肪酸氧化那样繁忙，最要紧的恰好是两种情形 —— 高蛋白饮食，以及饥饿：那时身体正在拆自己的蛋白当燃料。",
      src: "A pp.639-640 · B §5.2.3, p.125"
    },
    {
      link_en: "now the first of the two fates: which skeletons can become glucose",
      link_cn: "现在说两种命运里的第一种：哪些骨架能变成葡萄糖",
      en: "Gluconeogenesis — making glucose out of smaller precursors — starts from oxaloacetate, and every intermediate of the citric acid cycle can be carried round the cycle to top the oxaloacetate pool up. **A skeleton arriving at pyruvate, 2-oxoglutarate, succinyl-CoA, fumarate or oxaloacetate can therefore be turned into glucose and into glycogen, and such amino acids are called glucogenic.** They are the large majority, and this is why feeding amino acids to a starved body drives gluconeogenesis and the laying down of glycogen instead of simply being burnt.",
      cn: "糖异生（由更小的前体造出葡萄糖）从草酰乙酸起步，而柠檬酸循环的每一个中间物都能沿着循环走到草酰乙酸那里，把草酰乙酸池补上去。**所以，凡是能抵达丙酮酸、2-氧戊二酸、琥珀酰-CoA、延胡索酸或草酰乙酸的骨架，都能被转成葡萄糖和糖原，这样的氨基酸就叫生糖氨基酸。** 它们是绝大多数；给一个饥饿的身体补上氨基酸之所以能推动糖异生、能把糖原重新堆起来，而不只是被烧掉，原因就在这里。",
      src: "A p.640 · B §5.2.3, p.125",
      see: [{ id: "L-14-4-1", en: "gluconeogenesis itself, and what one glucose costs", cn: "糖异生本身，以及造一个葡萄糖要花多少" }]
    },
    {
      link_en: "and the one destination that does not work that way",
      link_cn: "而有一个终点不是这样",
      recall_en: "the acetyl group entering the citric acid cycle, and the two carbons that leave as carbon dioxide",
      recall_cn: "乙酰基进入柠檬酸循环，以及随后以二氧化碳形式离开的那两个碳",
      en: "Acetyl-CoA cannot be turned into glucose, and the reason is arithmetic inside the citric acid cycle. **An acetyl group condenses with oxaloacetate on entry, two carbons leave as carbon dioxide one turn later, and the oxaloacetate is handed back unchanged, so the oxaloacetate pool has not grown.** Carbon went in and carbon came out. With no net gain in oxaloacetate there is nothing extra for gluconeogenesis to start from, and this one fact generates the whole classification that follows — worth deriving rather than memorising, because the membership lists fall out of it.",
      cn: "乙酰-CoA 变不成葡萄糖，原因是柠檬酸循环内部的一笔算术。**乙酰基靠与草酰乙酸缩合而进入循环，一圈之后两个碳以二氧化碳的形式离开，草酰乙酸被原样交还，于是草酰乙酸池并没有变大。** 碳进去了，碳也出来了。草酰乙酸没有净增加，糖异生就没有多出来的起点可用；下面整套分类都由这一个事实生成 —— 值得去推而不是去背，因为名单是从它掉出来的。",
      src: "A p.640"
    },
    {
      link_en: "so the exceptions can be worked out before they are looked up",
      link_cn: "于是那些例外，在查表之前就能被推出来",
      en: "A carbon skeleton is under no obligation to stay in one piece: different fragments of one skeleton can end up at different destinations, so an amino acid can deliver part of itself to acetyl-CoA and the rest to fumarate. An amino acid therefore fails to be glucogenic only if its entire skeleton lands on acetyl-CoA or acetoacetyl-CoA. **Only leucine and lysine do that, and they are therefore the two exclusively ketogenic amino acids — every other amino acid can make some contribution to gluconeogenesis.** Seven reach acetoacetyl-CoA or acetyl-CoA in whole or in part and can therefore yield ketone bodies, which are small water-soluble fuels made out of surplus acetyl units: phenylalanine, tyrosine, isoleucine, leucine, tryptophan, threonine and lysine. Take leucine and lysine out of those seven and five are left — tryptophan, phenylalanine, tyrosine, threonine and isoleucine — each of them ketogenic and glucogenic at once, because part of its skeleton goes one way and part the other. Threonine earns its place on that dual list by turning up at acetyl-CoA and at succinyl-CoA alike, and an amino acid degraded to pyruvate is potentially ketogenic too, since pyruvate itself can be converted to acetyl-CoA.",
      cn: "一副碳骨架没有义务保持完整：同一副骨架的不同碎片可以去往不同的终点，所以一个氨基酸完全可以把自己的一部分送到乙酰-CoA、其余送到延胡索酸。因此，一个氨基酸要做不到生糖，唯一的可能是它的整副骨架都落在乙酰-CoA 或乙酰乙酰-CoA 上。**做到这一点的只有亮氨酸和赖氨酸，它们因此是仅有的两个纯生酮氨基酸；除它们之外，每一个氨基酸都能对糖异生有所贡献。** 有七个氨基酸会全部或部分地抵达乙酰乙酰-CoA 或乙酰-CoA，因而能产出酮体（酮体是由多余的乙酰单位做成的小分子水溶性燃料）：苯丙氨酸、酪氨酸、异亮氨酸、亮氨酸、色氨酸、苏氨酸、赖氨酸。把亮氨酸和赖氨酸从这七个里去掉，剩下五个 —— 色氨酸、苯丙氨酸、酪氨酸、苏氨酸、异亮氨酸 —— 这五个既生酮又生糖，因为各自骨架的一部分走这边、另一部分走那边。苏氨酸之所以也算在这份「两栖」名单上，是因为它在乙酰-CoA 和琥珀酰-CoA 两处都出现；而被降解成丙酮酸的氨基酸同样具有潜在的生酮能力，因为丙酮酸本身可以转成乙酰-CoA。",
      src: "A p.640, figure 18-15 · B §5.2.3, pp.125, 129"
    },
    {
      link_en: "and being ketogenic shows up in a person, not only in a diagram",
      link_cn: "而「生酮」会在一个人身上显出来，不只是画在图里",
      en: "There are three ketone bodies: acetoacetate, which the liver makes from acetoacetyl-CoA, and acetone and beta-hydroxybutyrate, which it makes from acetoacetate. Production starts when acetyl units arrive faster than the citric acid cycle can take them, so that the cycle's capacity is exceeded and the surplus has to go somewhere. Carbohydrate is the fuel that would otherwise be burnt first, and two states leave a body unable to use it. **In uncontrolled diabetes mellitus the liver makes large amounts of ketone bodies out of fatty acids and ketogenic amino acids together, because carbohydrate cannot be used.** That is the same situation that made amino acids a fuel in the first place. The other side of it is useful rather than pathological: during starvation the brain can burn ketone bodies in place of glucose, which is what makes a ketogenic skeleton worth having.",
      cn: "酮体有三个：乙酰乙酸，由肝脏从乙酰乙酰-CoA 做出；以及丙酮和 β-羟丁酸，由肝脏从乙酰乙酸做出。当乙酰单位到得比柠檬酸循环收得快、循环的处理容量被超过时，多出来的部分总得有个去处，酮体的生产就是这样开始的。糖类本来是最先被烧掉的那种燃料，而有两种状态会让身体用不上它。**在未受控制的糖尿病里，肝脏把脂肪酸和生酮氨基酸一起当原料，大量制造酮体，因为糖类用不上。** 这恰恰就是「氨基酸一开始成为燃料」的那同一种处境。它的另一面则是有用而非病态的：饥饿期间，脑可以烧酮体来代替葡萄糖 —— 这才是「有一副生酮骨架」值钱的地方。",
      src: "A p.640 · B §5.2.3, p.125",
      see: [{ id: "L-23-5-1", en: "diabetes, and why the ketone bodies are the acute danger", cn: "糖尿病，以及为什么急性的危险是酮体" },
            { id: "L-17-2-1", en: "fatty acid oxidation, the other supplier of those acetyl units", cn: "脂肪酸氧化 —— 那些乙酰单位的另一个供应方" }]
    },
    {
      link_en: "and before the membership lists, one declaration of scope that decides how to read them",
      link_cn: "而在名单开始之前，先有一句关于范围的声明，它决定这些名单该怎么读",
      en: "A full account of every amino acid's individual degradation is necessary for understanding fairly common metabolic disorders, their diagnosis and their therapy, and it clearly exceeds the framework of a set of lecture notes. **What follows is basic principles and schemes rather than exhaustive mechanism, so a road named here is a route to recognise and not a sequence of enzymes to recite.**",
      cn: "把每一种氨基酸各自的降解过程讲全，对于理解相当常见的代谢疾病及其诊断与治疗是必要的，而这显然超出一份讲义的范围。**接下来给出的是基本原理与图式，不是详尽的机制；所以这里点到的一条路，是用来认出来的路线，而不是一串要背下来的酶。**",
      src: "B §5.2.3, pp.125–126"
    },
    {
      link_en: "the membership of the destinations, starting at the three-carbon end",
      link_cn: "六个终点各自的成员名单，先从三碳这一头说起",
      en: "To pyruvate, in whole or in part, go alanine, cysteine, glycine, serine, threonine and tryptophan, and each takes a different road there. Alanine needs one transamination with 2-oxoglutarate and nothing more. Serine is dehydrated and deaminated to pyruvate in a single step by serine dehydratase, or is converted instead to glycine, an interconversion that serine hydroxymethyltransferase runs in both directions. Threonine is cut by threonine aldolase into glycine and acetaldehyde. **Cysteine gets to pyruvate by a longer road: its thiol group is oxidised to cysteine sulfinic acid, transamination gives beta-sulfinylpyruvate, and desulfuration strips the sulfinyl group off outright.** Tryptophan arrives here only as a minor sideline, by way of alanine, its main road being the ketogenic one.",
      cn: "抵达丙酮酸（全部或部分）的是丙氨酸、半胱氨酸、甘氨酸、丝氨酸、苏氨酸、色氨酸，而每一个走的路都不一样。丙氨酸只需要与 2-氧戊二酸转氨一次，别的都不需要。丝氨酸由丝氨酸脱水酶一步脱水并脱氨成丙酮酸，或者改为转成甘氨酸 —— 甘氨酸与丝氨酸之间的这个互变由丝氨酸羟甲基转移酶双向催化。苏氨酸被苏氨酸醛缩酶裂成甘氨酸和乙醛。**半胱氨酸到丙酮酸的路更长：它的巯基先被氧化成半胱氨酸亚磺酸，转氨给出 β-亚磺酰丙酮酸，再由脱硫作用把亚磺酰基整个拿掉。** 色氨酸只以次要支线的身份出现在这里，经由丙氨酸而来，它的主路是生酮的那一条。",
      src: "A pp.650, 655 · B §5.2.3, p.126"
    },
    {
      link_en: "and the ketogenic end, where five amino acids arrive by way of acetoacetyl-CoA",
      link_cn: "再说生酮那一头 —— 五个氨基酸经由乙酰乙酰-CoA 抵达",
      en: "Phenylalanine, tyrosine, tryptophan, lysine and leucine all reach acetyl-CoA through acetoacetate or acetoacetyl-CoA instead of through pyruvate. Phenylalanine is hydroxylated to tyrosine by phenylalanine hydroxylase first, and that one reaction is why phenylalanine is an essential amino acid while tyrosine is not: tyrosine can always be made from phenylalanine, never the reverse. **Tyrosine is transaminated to p-hydroxyphenylpyruvate, oxidatively decarboxylated, then cleaved by water into two products at once: fumarate, which is glucogenic, and acetoacetate, which is ketogenic.** That split is the mechanism behind counting tyrosine and phenylalanine as both. Tryptophan takes the longest road of the five — decarboxylation, oxidation, hydrolysis, deamination and a second oxidative decarboxylation, all the way to glutaryl-CoA — and lysine arrives at the same glutaryl-CoA by either of two routes through 2-oxoadipate; from there both continue to acetoacetyl-CoA. Leucine, after transamination and oxidative decarboxylation, gives acetyl-CoA and acetoacetate directly, with no branch anywhere that could feed back into glucose, and lysine has no such branch either.",
      cn: "苯丙氨酸、酪氨酸、色氨酸、赖氨酸、亮氨酸都到达乙酰-CoA，但走的是经乙酰乙酸或乙酰乙酰-CoA、而不是经丙酮酸的路。苯丙氨酸先由苯丙氨酸羟化酶羟化成酪氨酸，而正是这一个反应决定了苯丙氨酸是必需氨基酸、酪氨酸不是：酪氨酸总能由苯丙氨酸造出来，反过来则永远不行。**酪氨酸经转氨生成对羟苯丙酮酸，再氧化脱羧，最后被水裂解，一次给出两个产物：生糖的延胡索酸，和生酮的乙酰乙酸。** 这一次分岔，就是把酪氨酸和苯丙氨酸算作「两栖」的机制。色氨酸走五者中最长的一条路 —— 脱羧、氧化、水解、脱氨，再一次氧化脱羧，一路到戊二酰-CoA；赖氨酸则经两条可互替的路线、都经过 2-氧己二酸，抵达同一个戊二酰-CoA，两者再由此继续到乙酰乙酰-CoA。亮氨酸经转氨和氧化脱羧后，直接给出乙酰-CoA 和乙酰乙酸，全程没有任何一个分支能反哺回葡萄糖，赖氨酸同样没有这样的分支。",
      src: "A pp.650, 655 · B §5.2.3, pp.126-127, 129"
    },
    {
      link_en: "those three aromatic skeletons are worth more to the body than their fuel value",
      link_cn: "那三副芳香骨架，对身体的价值远不止它们的燃料值",
      en: "Phenylalanine, tyrosine and tryptophan are the aromatic amino acids, meaning each carries a benzene ring on its side chain, and a ring is expensive to build and worth keeping. **Tyrosine is the precursor of dopamine, noradrenaline, adrenaline and the thyroid hormones triiodothyronine and thyroxine, so a skeleton that can be burnt as fuel is also raw material for signalling.** Tryptophan supplies other ring-bearing compounds in the same way. Degrading these three is therefore never purely a matter of energy: whatever is sent down the acetoacetyl-CoA route is not available for making a hormone, and a block anywhere on the phenylalanine route shows up in both accounts at once.",
      cn: "苯丙氨酸、酪氨酸、色氨酸是三个芳香族氨基酸，意思是它们的侧链上各带一个苯环，而一个环造起来很贵、留着很值。**酪氨酸是多巴胺、去甲肾上腺素、肾上腺素以及甲状腺激素三碘甲状腺原氨酸和甲状腺素的前体 —— 一副能被当燃料烧掉的骨架，同时也是信号分子的原料。** 色氨酸同样供应另一些带环的化合物。所以降解这三个从来不只是能量账：送进乙酰乙酰-CoA 那条路的部分，就不能再拿去做激素；而苯丙氨酸这条路上任何一处堵塞，都会在两本账上同时显形。",
      src: "B §5.2.3, p.127"
    },
    {
      link_en: "the five-carbon end, where five very unalike amino acids funnel through one molecule",
      link_cn: "五碳这一头：五个长相毫不相干的氨基酸，挤过同一个分子",
      recall_en: "urocanate and histidine, met in the first half of this chain as the one simple deamination mammals use",
      recall_cn: "尿刺酸和组氨酸 —— 前半段里，哺乳动物唯一用到的那次简单脱氨",
      en: "Arginine, histidine, glutamate, glutamine and proline all enter the citric acid cycle as 2-oxoglutarate, and the immediate precursor in every case is glutamate. Glutamine joins at glutamate directly. Histidine is deaminated to urocanate and hydrolysed onward to glutamate. Proline is a closed ring, and proline dehydrogenase opens it by oxidation to delta-1-pyrroline-5-carboxylate, which sits in equilibrium with the open-chain glutamate gamma-semialdehyde; arginine reaches that same semialdehyde by way of ornithine and one transamination. **Glutamate gamma-semialdehyde is oxidised to glutamate, and glutamate is then deaminated to 2-oxoglutarate, so five unalike skeletons enter the citric acid cycle through a single door.**",
      cn: "精氨酸、组氨酸、谷氨酸、谷氨酰胺、脯氨酸都以 2-氧戊二酸的身份进入柠檬酸循环，而它们的直接前体无一例外都是谷氨酸。谷氨酰胺直接汇入谷氨酸。组氨酸脱氨成尿刺酸，再水解、一路降解成谷氨酸。脯氨酸是一个闭合的环，脯氨酸脱氢酶把它氧化成 Δ1-吡咯啉-5-羧酸，从而把环打开；后者与开链的谷氨酸 γ-半醛处于平衡之中。精氨酸则经由鸟氨酸再转氨一次，抵达同一个半醛。**谷氨酸 γ-半醛被氧化成谷氨酸，谷氨酸再脱氨成 2-氧戊二酸 —— 于是五副毫不相像的骨架，从同一扇门进入柠檬酸循环。**",
      src: "A pp.650, 655 · B §5.2.3, pp.127-128",
      see: [{ id: "L-18-2-1", en: "the urea cycle, where that ornithine comes from", cn: "尿素循环 —— 那个鸟氨酸的出处" }]
    },
    {
      link_en: "and the last two destinations, one reached through a shared acyl-CoA and one reached in a single step",
      link_cn: "最后两个终点：一个要经过共用的酰基-CoA，另一个只需一步",
      recall_en: "aspartate, which the first half of this chain named as the second nitrogen donor of urea synthesis",
      recall_cn: "天冬氨酸 —— 前半段里，尿素合成的第二个氮供体",
      en: "Methionine gives up its methyl group first, and three of its four remaining carbons become the propionyl group of propionyl-CoA by way of 2-oxobutyrate; isoleucine feeds into the same propionyl-CoA, and threonine also reaches 2-oxobutyrate when it is dehydrated rather than cut in two. Propionyl-CoA is converted onward to methylmalonyl-CoA, which is the immediate precursor of succinyl-CoA. **Methionine, isoleucine, valine and threonine all converge on methylmalonyl-CoA and enter the cycle as succinyl-CoA, while only aspartate and asparagine convert directly to oxaloacetate.** Valine is the one that joins at methylmalonyl-CoA without passing through propionyl-CoA at all. Aspartate and asparagine take the shortest route of any amino acid, since aspartate sits one transamination from oxaloacetate and asparagine one hydrolysis from aspartate, and aspartate then turns up in three separate places: at oxaloacetate with asparagine, at fumarate with tyrosine and phenylalanine, and as the nitrogen donor the urea cycle regenerates from oxaloacetate. That makes the aspartate-oxaloacetate pair the busiest junction between nitrogen disposal and carbon oxidation.",
      cn: "甲硫氨酸先交出它的甲基，余下四个碳中的三个经 2-氧丁酸成为丙酰-CoA 的丙酰基；异亮氨酸汇入同一个丙酰-CoA，苏氨酸在脱水（而不是被裂成两半）时也到达 2-氧丁酸。丙酰-CoA 再往下转化成甲基丙二酰-CoA，而甲基丙二酰-CoA 就是琥珀酰-CoA 的直接前体。**甲硫氨酸、异亮氨酸、缬氨酸、苏氨酸最终都汇聚到甲基丙二酰-CoA，并以琥珀酰-CoA 的身份进入循环；而直接转化为草酰乙酸的只有天冬氨酸和天冬酰胺两个。** 缬氨酸是唯一一个根本不经过丙酰-CoA、直接在甲基丙二酰-CoA 处汇入的。天冬氨酸和天冬酰胺走的是所有氨基酸中最短的一条：天冬氨酸离草酰乙酸只有一次转氨，天冬酰胺离天冬氨酸只有一次水解。而天冬氨酸随后在三处分别出现：与天冬酰胺一起出现在草酰乙酸，与酪氨酸、苯丙氨酸一起出现在延胡索酸，以及作为尿素循环由草酰乙酸再生出来的那个氮供体。这使「天冬氨酸-草酰乙酸」这一对成为氮的处理与碳的氧化之间最繁忙的那个路口。",
      src: "A pp.650, 655 · B §5.2.3, pp.127-129",
      see: [{ id: "L-18-2-1", en: "the urea cycle, and the aspartate shunt that ties it to the cycle", cn: "尿素循环，以及把它拴在循环上的天冬氨酸支路" }]
    },
    {
      link_en: "and one box on that family diagram has to be flagged rather than copied out",
      link_cn: "而那张族图上有一个方框，必须标出来，不能照抄",
      en: "Methionine's arrow on the family diagram leads straight down into a box printed '2-oxoglutarate', confirmed at three-times zoom, and that box then leads on to propionyl-CoA. **A box printed '2-oxoglutarate' under methionine is a probable mislabelling: 2-oxoglutarate is a five-carbon acid with no chemical route to a three-carbon product like propionyl-CoA.** It is also already the named end-product of the family one section above, which makes its reappearance here as a methionine intermediate structurally implausible. The standard, universally taught intermediate at exactly this position in the pathway is 2-oxobutyrate, named independently as the threonine-derived precursor of propionate, and it is a name easily mistyped as 2-oxoglutarate given the shared 2-oxo pattern. Treat methionine to 2-oxobutyrate to propionyl-CoA as the biochemically reliable reading, and treat the printed label as a probable error rather than as a fact to memorise.",
      cn: "在那张族图上，甲硫氨酸的箭头直接向下指进一个印着「2-氧戊二酸」的方框（放大三倍核对过），该方框再指向丙酰-CoA。**甲硫氨酸下面那个印着「2-氧戊二酸」的方框，很可能是标错了：2-氧戊二酸是一个五碳酸，在化学上没有任何路径能生成丙酰-CoA 这样的三碳产物。** 而且它在上一节里已经是那一族的终产物，在这里又作为甲硫氨酸的中间体出现，结构上说不通。在通路的这个确切位置上，标准的、被普遍教授的中间体是 2-氧丁酸——它在别处被独立提到，是苏氨酸生成丙酸的前体——而「2-氧丁酸」与「2-氧戊二酸」共用「2-氧…酸」的模式，很容易被误植。请把「甲硫氨酸 → 2-氧丁酸 → 丙酰-CoA」当作生化上可靠的读法，把印出来的那个标注当作一处很可能的错误，而不是一个要背下来的事实。",
      src: "B §5.2.3, pp.127-128"
    },
    {
      link_en: "these routes lean on a small set of cofactors, and two of them do the same kind of job",
      link_cn: "这些路线依赖一小组辅因子，其中两个干的是同一类活",
      en: "**Tetrahydrofolate and S-adenosylmethionine both carry single carbon atoms from one molecule to another, which is what a route needs when a skeleton has one carbon too many or one too few.** Two uses have already gone past: the extra carbon of histidine is removed in a step that uses tetrahydrofolate, and methionine hands its methyl group over as S-adenosylmethionine. The third cofactor is tetrahydrobiopterin, and it is needed by phenylalanine hydroxylase, the enzyme that oxidises phenylalanine to tyrosine — which is why tyrosine is not an essential amino acid while phenylalanine is, and why a failure at that single reaction has consequences out of all proportion to its size.",
      cn: "**四氢叶酸和 S-腺苷甲硫氨酸都负责把单个碳原子从一个分子搬到另一个分子上 —— 当一副骨架多一个碳或少一个碳时，一条路线需要的正是这个。** 上面已经出现过两个用途：组氨酸多出来的那个碳，是在一个用到四氢叶酸的步骤里被移走的；甲硫氨酸则以 S-腺苷甲硫氨酸的形式交出它的甲基。第三个辅因子是四氢生物蝶呤，苯丙氨酸羟化酶需要它 —— 后者把苯丙氨酸氧化成酪氨酸，这正是酪氨酸不是必需氨基酸、而苯丙氨酸是的原因，也是这一个反应一旦失灵、后果远远超出其体量的原因。",
      src: "A pp.641, 644, 655",
      beyond: true,
      beyondNote: "The names of the three cofactors and what they are used for are on the summary page this chain reads (A p.655), and two concrete uses are on A p.650. Their actual chemistry is on A pp.641-646, which is not covered here, so nothing more about how they work is claimed."
    },
    {
      link_en: "one structural fact breaks the rule that all of this happens in the liver",
      link_cn: "有一个结构性事实，打破了「这一切都发生在肝里」这条规则",
      recall_en: "the alanine working muscle sends to the liver, carrying nitrogen and a three-carbon skeleton together",
      recall_cn: "工作中的肌肉送往肝脏的那个丙氨酸 —— 一趟带走一个氮和一副三碳骨架",
      en: "The branched-chain amino acids are isoleucine, leucine and valine, named for the methyl branches on their side chains. Unlike every other amino acid, these three are degraded only outside the liver. **Muscle keeps and burns the branched-chain carbon itself while sending the nitrogen to the liver as alanine, so the two halves of one amino acid are disposed of in two different organs.** Parts of the valine and isoleucine routes run through the same reactions as fatty acid degradation, so the machinery is shared rather than duplicated, which is also why their skeletons travel as acyl-CoA intermediates rather than as free acids.",
      cn: "支链氨基酸指的是异亮氨酸、亮氨酸和缬氨酸，名字来自它们侧链上的甲基分支。与其他所有氨基酸不同，这三个只在肝脏之外被降解。**肌肉自己留下并烧掉支链的碳，同时把氮以丙氨酸的形式送去肝脏 —— 于是同一个氨基酸的两半，是在两个不同的器官里被处理掉的。** 缬氨酸和异亮氨酸路线的一部分，走的还是与脂肪酸降解相同的那些反应，机器是共用的、不是重造一套；这也是为什么它们的骨架是以酰基-CoA 中间体的形态、而不是以游离酸的形态在走。",
      src: "A p.655",
      see: [{ id: "L-17-2-1", en: "the fatty acid reactions those routes borrow", cn: "这些路线借用的那套脂肪酸反应" }]
    },
    {
      link_en: "and when one enzyme of these routes is missing, a pathway becomes a disease",
      link_cn: "而这些路线上少了一个酶，一条通路就变成一种病",
      en: "Phenylketonuria follows from a defective phenylalanine hydroxylase, and it was among the first inheritable metabolic defects ever found in humans. Recognised early enough in infancy, the intellectual disability it causes can be prevented by diet, and that diet has to supply enough phenylalanine and enough tyrosine for protein synthesis and no more — tyrosine included, because a patient who cannot hydroxylate phenylalanine can no longer make tyrosine. Natural proteins such as milk casein have to be hydrolysed first with most of the phenylalanine taken out. **The warning printed on aspartame comes from exactly this: aspartame is a dipeptide of aspartate and the methyl ester of phenylalanine, so sweetening a food with it adds phenylalanine.** Since a lifetime of perfect dietary control is hard and often leaves neurological symptoms anyway, a second treatment was approved in 2018: phenylalanine ammonia lyase, an enzyme from plants, bacteria and fungi, coupled to polyethylene glycol and injected under the skin, which degrades phenylalanine to harmless trans-cinnamic acid plus a small and non-toxic amount of ammonia. Screening newborns is worthwhile at 8 to 10 cases per 100,000.",
      cn: "苯丙酮尿症源于苯丙氨酸羟化酶的缺陷，它是人类最早被发现的遗传性代谢缺陷之一。只要在婴儿期足够早被识别出来，它造成的智力障碍可以靠饮食预防；而这份饮食必须只提供刚够合成蛋白质用的苯丙氨酸和酪氨酸，一点不多 —— 连酪氨酸也要供给，是因为羟化不了苯丙氨酸的病人已经造不出酪氨酸了。牛奶酪蛋白之类的天然蛋白必须先水解、并把其中大部分苯丙氨酸去掉。**阿斯巴甜上印的那行警示正是从这里来的：阿斯巴甜是天冬氨酸与苯丙氨酸甲酯构成的二肽，用它增甜就等于往食物里加苯丙氨酸。** 由于终生完美执行饮食控制很难、而且往往仍留有神经系统症状，2018 年批准了第二种治疗：苯丙氨酸解氨酶 —— 一种来自植物、细菌和真菌的酶，与聚乙二醇偶联后皮下注射，把苯丙氨酸降解成无害的反式肉桂酸，外加少量、无毒的氨。新生儿筛查在每十万人 8 到 10 例的发病率下是划算的。",
      src: "A p.650"
    },
    {
      link_en: "and the same disease has a second cause, which is not in the enzyme at all",
      link_cn: "同一种病还有第二个病因，而它根本不在那个酶身上",
      recall_en: "tetrahydrobiopterin, the cofactor phenylalanine hydroxylase needs",
      recall_cn: "苯丙氨酸羟化酶所需的那个辅因子：四氢生物蝶呤",
      en: "Phenylketonuria can also come from a defect in the enzyme that regenerates tetrahydrobiopterin, leaving the hydroxylase intact but starved of its cofactor. That form is harder to treat, because the same cofactor is required to make L-dopa and 5-hydroxytryptophan — the precursors of norepinephrine and serotonin — so blocking its regeneration cuts off two neurotransmitter routes as well, and treatment has to supply those precursors in the diet along with tetrahydrobiopterin itself. **A cofactor shared between pathways means a single defect appears in all of them at once, which is the general lesson worth carrying away from this whole classification.**",
      cn: "苯丙酮尿症还可以来自另一个缺陷：负责再生四氢生物蝶呤的那个酶坏了，羟化酶本身完好，却拿不到辅因子。这一型更难治，因为同一个辅因子还是合成 L-多巴和 5-羟色氨酸所必需的 —— 这两者分别是去甲肾上腺素和血清素的前体 —— 所以堵住它的再生，等于同时切断两条神经递质路线；因此治疗必须在补充四氢生物蝶呤之外，把这些前体也一并从饮食中给上。**一个辅因子被多条通路共用，就意味着一处缺陷会在所有这些通路上同时显形 —— 这是整套分类里最值得带走的通则。**",
      src: "A p.650"
    },
    {
      link_en: "and one more defect of the same amino acid, which matters far beyond how mild it is",
      link_cn: "同一个氨基酸上还有一个缺陷，它的重要性远远超过它的轻微程度",
      en: "Alkaptonuria comes from a defective homogentisate dioxygenase, further down the phenylalanine route. It is mild: large amounts of homogentisate are excreted and turn the urine black on oxidation, and affected people are prone to a form of arthritis, but there is little else. Its importance is historical. **In the early 1900s Archibald Garrod showed that alkaptonuria is inherited and traced the cause to the absence of one enzyme, which made him the first to connect an inheritable trait with an enzyme.** The line that runs from there to genes carrying the instructions for proteins starts in a pathway of amino acid degradation, with black urine.",
      cn: "尿黑酸症源于苯丙氨酸路线更下游的尿黑酸双加氧酶缺陷。它很轻：大量尿黑酸被排出，氧化后把尿变黑；患者容易发展出一种关节炎，除此之外没有太多别的。它的重要性在历史上。**1900 年代初，Archibald Garrod 证明尿黑酸症是遗传的，并把病因追溯到某一个酶的缺失 —— 他因此成为第一个把可遗传性状与一个酶联系起来的人。** 从那里通往「基因携带蛋白质的指令」的那条线，起点是一条氨基酸降解通路，和一泡变黑的尿。",
      src: "A p.650",
      see: [{ id: "L-22-2-1", en: "the mirror image — building the twenty rather than taking them apart", cn: "镜像的一半 —— 造出这二十个，而不是拆掉它们" }]
    }
  ],
  terms: [
    { en: "the six destinations", cn: "六个终点",
      def_en: "Pyruvate, acetyl-CoA, 2-oxoglutarate, succinyl-CoA, fumarate and oxaloacetate — the molecules that all twenty amino acid skeletons converge onto, every one of them a citric acid cycle intermediate or feeding straight into the cycle. Acetoacetyl-CoA is sometimes counted as a seventh, but it is a road to acetyl-CoA rather than an endpoint, so the same material is given as six here and seven elsewhere.",
      def_cn: "丙酮酸、乙酰-CoA、2-氧戊二酸、琥珀酰-CoA、延胡索酸、草酰乙酸 —— 二十副氨基酸骨架全部汇聚到这几个分子上，它们要么本身就是柠檬酸循环的中间物，要么直接喂进循环。乙酰乙酰-CoA 有时被数作第七个，但它是通向乙酰-CoA 的一条路而不是终点，所以同一份材料在这里是六个、在别处是七个。" },
    { en: "glucogenic", cn: "生糖氨基酸",
      def_en: "An amino acid whose skeleton reaches pyruvate, 2-oxoglutarate, succinyl-CoA, fumarate or oxaloacetate, and can therefore be converted to glucose and to glycogen, because every citric acid cycle intermediate can be carried round to top up the oxaloacetate pool that gluconeogenesis starts from. Every amino acid except leucine and lysine makes some contribution.",
      def_cn: "骨架能抵达丙酮酸、2-氧戊二酸、琥珀酰-CoA、延胡索酸或草酰乙酸的氨基酸，因而能被转成葡萄糖和糖原 —— 因为柠檬酸循环的任何一个中间物都能沿循环走去补上草酰乙酸池，而糖异生正是从草酰乙酸起步的。除亮氨酸和赖氨酸之外，每一个氨基酸都有所贡献。" },
    { en: "ketogenic", cn: "生酮氨基酸",
      def_en: "An amino acid degraded wholly or partly to acetoacetyl-CoA or acetyl-CoA, and therefore able to yield ketone bodies in the liver once the citric acid cycle's capacity for acetyl units is exceeded. Seven qualify — phenylalanine, tyrosine, isoleucine, leucine, tryptophan, threonine, lysine — of which five are glucogenic as well, leaving leucine and lysine as the only exclusively ketogenic pair.",
      def_cn: "全部或部分被降解到乙酰乙酰-CoA 或乙酰-CoA 的氨基酸，因而在柠檬酸循环处理乙酰单位的容量被超过之后，能在肝脏产出酮体。合格的有七个 —— 苯丙氨酸、酪氨酸、异亮氨酸、亮氨酸、色氨酸、苏氨酸、赖氨酸 —— 其中五个同时也生糖，于是只剩亮氨酸和赖氨酸这一对是纯生酮的。" },
    { en: "why acetyl-CoA cannot make glucose", cn: "乙酰-CoA 为什么造不出葡萄糖",
      def_en: "An acetyl group condenses with oxaloacetate on entering the citric acid cycle, two carbons leave as carbon dioxide one turn later, and the oxaloacetate is handed back unchanged, so there is no net gain of oxaloacetate for gluconeogenesis to start from. This single piece of arithmetic is what makes leucine and lysine the exceptions, and the membership lists follow from it rather than having to be memorised.",
      def_cn: "乙酰基靠与草酰乙酸缩合进入柠檬酸循环，一圈之后两个碳以二氧化碳形式离开，而草酰乙酸被原样交还，所以草酰乙酸没有净增加，糖异生也就没有多出来的起点。就是这一笔算术，使亮氨酸和赖氨酸成为例外；名单是从它推出来的，不必去背。" },
    { en: "the five entry families", cn: "五个入口家族",
      def_en: "One way to hold all twenty at once, by the molecule each skeleton lands on. To pyruvate: alanine, cysteine, glycine, serine, threonine, tryptophan. To acetoacetyl-CoA and acetyl-CoA: phenylalanine, tyrosine, tryptophan, lysine, leucine. To 2-oxoglutarate through glutamate: arginine, histidine, glutamate, glutamine, proline. To succinyl-CoA through methylmalonyl-CoA: methionine, isoleucine, valine, threonine. To oxaloacetate: aspartate and asparagine, and no others.",
      def_cn: "把二十个一次握住的一种办法：按每副骨架落在哪个分子上分。到丙酮酸：丙氨酸、半胱氨酸、甘氨酸、丝氨酸、苏氨酸、色氨酸。到乙酰乙酰-CoA 与乙酰-CoA：苯丙氨酸、酪氨酸、色氨酸、赖氨酸、亮氨酸。经谷氨酸到 2-氧戊二酸：精氨酸、组氨酸、谷氨酸、谷氨酰胺、脯氨酸。经甲基丙二酰-CoA 到琥珀酰-CoA：甲硫氨酸、异亮氨酸、缬氨酸、苏氨酸。到草酰乙酸：只有天冬氨酸和天冬酰胺。" },
    { en: "branched-chain amino acids", cn: "支链氨基酸",
      def_en: "Isoleucine, leucine and valine, named for the methyl branches on their side chains. Alone among the twenty, they are degraded only outside the liver: muscle keeps and burns their carbon itself and sends only the nitrogen to the liver, as alanine. Parts of the valine and isoleucine routes run through the same reactions as fatty acid degradation.",
      def_cn: "异亮氨酸、亮氨酸、缬氨酸，名字来自侧链上的甲基分支。二十个里只有这三个是在肝脏之外被降解的：肌肉自己留下并烧掉它们的碳，只把氮以丙氨酸的形式送去肝脏。缬氨酸和异亮氨酸路线的一部分，走的是与脂肪酸降解相同的那些反应。" },
    { en: "phenylketonuria", cn: "苯丙酮尿症",
      def_en: "A defect of phenylalanine hydroxylase, among the first inheritable metabolic defects found in humans. Managed by a diet supplying just enough phenylalanine and tyrosine and no more, which is why aspartame — a dipeptide of aspartate and the methyl ester of phenylalanine — carries a warning; and since 2018 also by PEGylated phenylalanine ammonia lyase injected under the skin. A second form is a defect in regenerating tetrahydrobiopterin, which also blocks L-dopa and 5-hydroxytryptophan synthesis.",
      def_cn: "苯丙氨酸羟化酶的缺陷，人类最早被发现的遗传性代谢缺陷之一。靠只提供刚够用的苯丙氨酸和酪氨酸的饮食来控制 —— 阿斯巴甜（天冬氨酸与苯丙氨酸甲酯构成的二肽）上那行警示就是因此而来；2018 年起还可以皮下注射聚乙二醇偶联的苯丙氨酸解氨酶。第二型是四氢生物蝶呤再生环节的缺陷，它同时堵住 L-多巴和 5-羟色氨酸的合成。" },
    { en: "alkaptonuria", cn: "尿黑酸症",
      def_en: "A defect of homogentisate dioxygenase, further down the phenylalanine route. Mild in itself — black urine and a tendency to arthritis — but historically the largest thing here: Archibald Garrod traced it to the absence of one enzyme in the early 1900s and was the first to connect an inheritable trait with an enzyme.",
      def_cn: "苯丙氨酸路线更下游的尿黑酸双加氧酶缺陷。它本身很轻 —— 尿发黑，容易得一种关节炎 —— 但在历史上是这里最大的一件事：1900 年代初 Archibald Garrod 把病因追溯到某一个酶的缺失，成为第一个把可遗传性状与一个酶联系起来的人。" }
  ]
};
