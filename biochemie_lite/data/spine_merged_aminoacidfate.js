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
