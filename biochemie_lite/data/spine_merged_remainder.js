/* Merged spines — the last five untouched topics. 速通简洁版, ONE spine per TOPIC.

     key:urea-cycle                       L-18-2-1 + 5-2-2-1, 5-2-2-2        (16 steps)
     key:amino-acid-derived-molecules     L-22-3-1 + 6-3-2, 6-3-3            (16 steps)
     key:cholesterol-and-isoprenoids      L-10-2-2 + 8-4-3, 9-27             (13 steps)
     key:protein-targeting-and-degradation 4-3-2 + 4-3-3 + 5-1               (17 steps)
     key:oxygen-binding-proteins          L-5-1-1 + 6-3-1                    (15 steps)

   The merge rule, unchanged from the earlier merged files: where a member node already
   has a spine, that spine is the backbone. The other account is folded in only where it
   ADDS — an EC number, a balanced equation, a structure, a naming rule, a number, a
   consequence the backbone does not draw. Where both say the same thing the backbone
   sentence stands; where they disagree, the disagreement is stated rather than smoothed.

   `src` letters: "A" is Lehninger 8, cited by its own page numbers, and is used only in
   the three topics whose member spine reads Lehninger. "B §x, p.y" is the second
   textbook. key:protein-targeting-and-degradation has no Lehninger member at all, so
   every step there carries a B citation and nothing else.

   Node coverage, so nothing is silently dropped:
     urea-cycle          5-2-2-1 → steps 2, 3;  5-2-2-2 → steps 4-10, 12, 14, 15
     derived molecules   6-3-2 → steps 2-5;     6-3-3 → steps 7, 9
     cholesterol         8-4-3 → steps 8, 9;    9-27 → step 13
     targeting           4-3-2 → steps 1-5;     4-3-3 → steps 6-14;  5-1 → steps 15-17
     oxygen carriers     6-3-1 → steps 1, 2;    L-5-1-1 → steps 3-15

   House rules: state the thing; no unbound "the"; name the actual objects; no commentary
   about a textbook; introduce every noun in the same breath it is first used; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span. Cold starts are forbidden in
   the full step text and permitted inside the bold span, which is why a definition
   sometimes sits in the prose outside the bold. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* --------------------------------------------------------- 尿素循环：氮的出口 ---- */
window.BIOLITE_SPINE["key:urea-cycle"] = {
  assumed: ["ATP", "ADP", "AMP", "NAD+", "NADH", "NADPH", "acetyl-CoA", "coenzyme A",
            "enzyme", "amino acid", "protein", "peptide", "cytosol", "substrate",
            "active site", "citric acid cycle", "oxaloacetate", "glutamate", "glutamine",
            "aspartate", "alanine", "arginine", "lysine", "glycine", "histidine",
            "asparagine", "cysteine", "proline", "tyrosine", "serine", "threonine",
            "isoleucine", "leucine", "methionine", "phenylalanine", "tryptophan",
            "valine", "isozyme", "transamination", "aminotransferase", "gene",
            "mitochondria", "matrix", "inner membrane", "liver", "kidney", "blood",
            "urine", "bile", "ammonia", "ammonium", "urea", "uric acid", "bicarbonate",
            "carbon dioxide", "carboxyl group", "amino group", "carbonyl group",
            "amide", "transporter", "allosteric enzyme", "hormone", "starvation",
            "gills", "embryo", "respiration", "pyrophosphate", "hydrolysis",
            "diffusion", "equilibrium", "dehydrogenase", "fumarate", "malate",
            "fumarase", "malate dehydrogenase", "gluconeogenesis", "insulin",
            "seizure", "edema", "phosphoryl group", "crystal"],
  nodeTitle_en: "The urea cycle: two nitrogens, one carbon, and a carrier that comes back",
  nodeTitle_cn: "尿素循环：两个氮、一个碳，和一个会回来的载体",
  title_en: "Nitrogen that could not be re-used has to be built into a safe molecule, and building it costs four phosphate bonds",
  title_cn: "再用不掉的氮必须被造进一个安全分子里，而造它要花四根磷酸键",
  steps: [
    {
      en: "In an animal that excretes urea, the ammonia arriving in the mitochondria of a liver cell has exactly one destination: it is built into urea. Urea then goes into the blood, on to the kidneys, and out in the urine. Hans Krebs and a medical student, Kurt Henseleit, worked the reactions out in 1932, before Krebs found the citric acid cycle, which is why the later discovery that the two cycles are connected is a historical sequence and not a coincidence of names. **Many tissues make ammonia and package it for travel, only the liver turns it into urea, and only the kidney excretes the product — a division of labour across the whole body.**",
      cn: "在排尿素的动物里，抵达肝细胞线粒体的氨只有一个去处：被造成尿素。尿素随后进入血液、到达肾脏、随尿排出。Hans Krebs 与一位医学生 Kurt Henseleit 在 1932 年弄清了这套反应，那时 Krebs 还没有发现柠檬酸循环 —— 所以后来发现两个循环相连，是一个先后关系，而不是名字上的巧合。**许多组织产氨并把它打包上路，只有肝脏把它变成尿素，只有肾脏把产物排掉 —— 这是一套全身范围的分工。**",
      src: "A p.633"
    },
    {
      link_en: "before any nitrogen is thrown away, a cell tries to put it back on a carbon skeleton",
      link_cn: "在把任何氮扔掉之前，细胞先试着把它接回一副碳骨架上",
      recall_en: "the same two enzymes that collected and carried nitrogen in the amino-group chain, now running the other way",
      recall_cn: "氨基代谢那条线上负责收集和搬运氮的同两个酶，现在反着跑",
      en: "Glutamate dehydrogenase catalyses an equilibrium, and read from right to left it is a reductive amination: ammonia plus 2-oxoglutarate — the five-carbon citric acid cycle intermediate also written alpha-ketoglutarate — plus NADPH and a proton give glutamate, NADP+ and water. Glutamine synthetase does something related and smaller, joining ammonium to the side-chain carboxyl of glutamate at the cost of one ATP to give glutamine, and its contribution to setting the ammonia concentration of blood is a limited one. **A cell's first answer to free ammonia is to re-fix it with NADPH onto 2-oxoglutarate, so the very reaction that released the nitrogen is also the reaction that takes it back.**",
      cn: "谷氨酸脱氢酶催化的是一个平衡，把它从右往左读，就是一次还原氨基化：氨 + 2-氧戊二酸（五碳的柠檬酸循环中间物，也写作 α-酮戊二酸）+ NADPH + 一个质子，给出谷氨酸、NADP+ 和水。谷氨酰胺合成酶做的是一件相关而更小的事：花一个 ATP 把铵离子接到谷氨酸的侧链羧基上，做成谷氨酰胺；它对「把血氨浓度定在哪里」的贡献是有限的。**细胞面对游离氨的第一个回答，是用 NADPH 把它重新固定到 2-氧戊二酸上 —— 放出这个氮的那个反应，同时也是把它收回来的那个反应。**",
      src: "B §5.2.2, p.123"
    },
    {
      link_en: "whatever cannot be re-used has to leave the body, and in which chemical form depends on how much water there is",
      link_cn: "用不掉的那部分必须离开身体，而以哪种化学形式离开，取决于有多少水",
      recall_en: "the three-way split of ammonotelic, ureotelic and uricotelic animals, met at the end of the amino-group chain",
      recall_cn: "氨基代谢那条线末尾说过的排氨型、排尿素型、排尿酸型三分法",
      en: "The three strategies trade energy against water. An aquatic animal lets ammonia diffuse out through its gills into the surrounding water, which costs no ATP at all and needs a large volume of water to dilute a toxic compound. A terrestrial animal has no such volume, so its liver spends ATP on a cyclic and strongly endergonic pathway that makes urea, a compound far less toxic than ammonia and soluble enough to be concentrated in urine without crystallising. An egg-laying animal — a bird or a reptile — spends more still and makes uric acid, which dissolves badly. **Poor solubility is a liability for anything meant to stay dissolved and an advantage inside a sealed egg: urate leaves as a suspension of crystals and cannot poison the embryo beside it.**",
      cn: "三种策略是在能量与水之间做交换。水生动物让氨经鳃扩散进周围的水里，完全不花 ATP，代价是需要大量的水去稀释一个有毒化合物。陆生动物没有这样的水量，于是肝脏花 ATP 走一条环式的、强吸能的通路造出尿素 —— 尿素毒性远低于氨，溶解度又足以在尿里被浓缩而不结晶。卵生动物（鸟类、爬行类）花得更多，造的是溶解度很差的尿酸。**溶解度差，对任何要留在溶液里的东西都是缺点，在一枚封闭的蛋里却是优点：尿酸以晶体悬浮液的形式排出，毒不到旁边正在发育的胚胎。**",
      src: "B §5.2.2, p.123 · A pp.626-627"
    },
    {
      link_en: "so what exactly is being built, and how many enzymes does it take?",
      link_cn: "那么究竟要造的是什么，需要几个酶？",
      en: "Urea holds two nitrogen atoms on one carbon, and that carbon comes in as bicarbonate rather than from either of the amino acids that supply the nitrogen. Getting from ammonia to urea takes five enzymatic steps, of which only four form a closed ring: carbamoyl phosphate synthetase I prepares the first nitrogen outside the ring and feeds it in, and the ring itself runs ornithine to citrulline to argininosuccinate to arginine and back to ornithine. Both counts are correct and they answer different questions, so give both. **Five enzymes take ammonia to urea; four of those five make up the cycle proper, and the fifth stands outside it doing the preparation.**",
      cn: "尿素是把两个氮挂在一个碳上，而这个碳是以碳酸氢根的身份进来的，不来自任何一个供氮的氨基酸。从氨走到尿素要五个酶促步骤，其中只有四个构成一个闭合的环：氨甲酰磷酸合成酶 I 在环外把第一个氮准备好、再送进去；环本身是鸟氨酸 → 瓜氨酸 → 精氨基琥珀酸 → 精氨酸 → 回到鸟氨酸。两种数法都对，只是回答的问题不同，所以两个都报出来。**从氨到尿素是五个酶；这五个里有四个构成循环本身，第五个站在环外做准备工作 —— 两种数法都对，只是回答的问题不同。**",
      src: "A pp.633-635 · B §5.2.2, p.124"
    },
    {
      link_en: "and the molecule that goes round the ring is not one you will find in a protein",
      link_cn: "而绕着这个环跑的那个分子，你在蛋白质里是找不到的",
      en: "Ornithine is an amino acid absent from the twenty that build proteins: a five-carbon diamino acid, 2,5-diaminopentanoic acid, which is lysine with one methylene group removed. Carbamoylating its delta-amino group — the amino group at the far end of that five-carbon chain — turns it into citrulline, whose new group is a ureido group, written -NH-C(=O)-NH2. Urea itself is the simple diamide H2N-C(=O)-NH2. Across one turn of the ring nothing is consumed except two nitrogens, the carbon that came in as bicarbonate, and the ATP spent along the way. **Ornithine takes material on at every turn and is regenerated at the end of it, as oxaloacetate is in the citric acid cycle, so a small amount carries unlimited nitrogen pairs out of the body.**",
      cn: "鸟氨酸是一种不在组成蛋白质那二十种之内的氨基酸：一个五碳二氨基酸，2,5-二氨基戊酸，相当于赖氨酸少掉一个亚甲基。把它的 δ-氨基（五碳链另一端那个氨基）氨甲酰化，它就变成瓜氨酸，新添的那个基团叫脲基，写作 -NH-C(=O)-NH2。尿素本身则是简单的二酰胺 H2N-C(=O)-NH2。走完一圈，被消耗掉的只有两个氮、以碳酸氢根身份进来的那个碳，以及一路花掉的 ATP。**鸟氨酸每一圈接一次料、每一圈末尾又被再生出来，与草酰乙酸在柠檬酸循环里做的完全一样，所以很少量的它就能把无限多对氮送出体外。**",
      src: "A p.635 · B §5.2.2, p.125",
      see: [{ id: "L-16-2-1", en: "the same catalytic-carrier argument in the citric acid cycle", cn: "柠檬酸循环里同样的「催化性载体」论证" }]
    },
    {
      link_en: "the first nitrogen is loaded before the ring starts, and that one enzyme spends half the whole budget",
      link_cn: "第一个氮在进环之前就被装好，而这一个酶吃掉了整个预算的一半",
      en: "Carbamoyl phosphate synthetase I — EC 6.3.4.16 — works in the mitochondrial matrix, the compartment enclosed by the inner membrane of a mitochondrion, on ammonium and on the bicarbonate that respiration supplies, and the reaction is strongly endergonic. One ATP phosphorylates the bicarbonate; ammonia then displaces that phosphoryl group to give carbamate; a second ATP phosphorylates the carbamate to give carbamoyl phosphate. It is switched on allosterically by N-acetylglutamate, which is made in the matrix by acetylating glutamate. One trap to avoid: this is form I, in mitochondria, while form II sits in the cytosol and belongs to pyrimidine synthesis — same name, different protein, different compartment, different pathway. **Two activation steps means two ATP, so this single enzyme accounts for half of everything the cycle spends.**",
      cn: "氨甲酰磷酸合成酶 I —— EC 6.3.4.16 —— 在线粒体基质（线粒体内膜围出来的那个区室）里工作，用的是铵离子和呼吸供给的碳酸氢根，反应强烈吸能。一个 ATP 先把碳酸氢根磷酸化；氨随后把那个磷酰基顶掉，生成氨基甲酸；第二个 ATP 再把氨基甲酸磷酸化，给出氨甲酰磷酸。它由 N-乙酰谷氨酸变构开启，而 N-乙酰谷氨酸是在基质里由谷氨酸乙酰化生成的。有个坑要避开：这里说的是 I 型，在线粒体里；II 型在细胞质里，属于嘧啶合成 —— 同名、不同蛋白、不同区室、不同通路。**先磷酸化碳酸氢根、再磷酸化氨基甲酸，两个活化步骤就是两个 ATP，所以单单这一个酶就占了整个循环能量支出的一半。**",
      src: "A pp.634-635 · B §5.2.2, p.124"
    },
    {
      link_en: "loaded, the nitrogen is handed to the carrier and the ring begins",
      link_cn: "装好之后，这个氮被交给载体，环就开始转了",
      en: "Carbamoyl phosphate is an activated carbamoyl group donor, and the phosphate is what makes it reactive. Ornithine transcarbamoylase — EC 2.1.3.3 — hands that group to ornithine, releases phosphate, and gives citrulline; this is the reaction from which the pathway takes its other name, the ornithine cycle. It happens in the matrix, and citrulline then leaves for the cytosol, where the remaining reactions run. **Splitting the pathway between matrix and cytosol means ornithine has to be carried in and citrulline carried out on every turn, and the second nitrogen is added on the far side of that boundary.**",
      cn: "氨甲酰磷酸是一个活化的氨甲酰基供体，让它有反应性的正是那个磷酸。鸟氨酸转氨甲酰酶 —— EC 2.1.3.3 —— 把这个基团交给鸟氨酸，放出磷酸，生成瓜氨酸；这条通路的另一个名字「鸟氨酸循环」就来自这一步。反应发生在基质里，瓜氨酸随后离开、进入细胞质，余下的反应在那里进行。**把通路切在基质与细胞质之间，意味着每转一圈都得把鸟氨酸运进去、把瓜氨酸运出来，而第二个氮是在这条分界的另一侧才加上去的。**",
      src: "A p.635 · B §5.2.2, p.124"
    },
    {
      link_en: "and the second nitrogen does not arrive as ammonia at all",
      link_cn: "而第二个氮根本不是以氨的形式到场的",
      en: "It arrives on aspartate, which is made in the matrix by transaminating glutamate with oxaloacetate and is then carried out to the cytosol. Argininosuccinate synthetase — EC 6.3.4.5 — joins the amino group of aspartate to the carbonyl group of citrulline, and it does so through an activated intermediate: ATP puts AMP onto that carbonyl oxygen, making a citrullyl-AMP, and aspartate then displaces the AMP. **That ATP goes to AMP plus pyrophosphate rather than to ADP, so this one step breaks two high-energy bonds, and regenerating ATP from AMP takes two phosphorylations rather than one.**",
      cn: "它是搭在天冬氨酸上来的：天冬氨酸在基质里由谷氨酸与草酰乙酸转氨生成，再被运到细胞质。精氨基琥珀酸合成酶 —— EC 6.3.4.5 —— 把天冬氨酸的氨基接到瓜氨酸的羰基上，走的是一条经活化中间体的路：ATP 先把 AMP 加到那个羰基氧上，做成瓜氨酰-AMP，随后天冬氨酸把 AMP 顶掉。**这个 ATP 走向的是 AMP 加焦磷酸而不是 ADP，所以单这一步就打断了两根高能键；而把 AMP 变回 ATP 要两次磷酸化，不是一次。**",
      src: "A pp.635-636 · B §5.2.2, p.124"
    },
    {
      link_en: "then the molecule is cut in two, and one half carries no nitrogen at all",
      link_cn: "接着这个分子被切成两半，而其中一半根本不含氮",
      en: "Argininosuccinate lyase, also called argininosuccinase, splits argininosuccinate into arginine and fumarate: both nitrogens stay with the arginine, and the four-carbon skeleton leaves as fumarate. This is the only reversible step in the whole cycle; every other step runs one way. **One-way traffic is good for diagnosis: when an enzyme is missing, the intermediate in front of it piles up and cannot drain back, so whichever one is raised in blood or urine names the enzyme.**",
      cn: "精氨基琥珀酸裂解酶（也叫精氨基琥珀酸酶）把精氨基琥珀酸切成精氨酸和延胡索酸：两个氮都留在精氨酸这边，那副四碳骨架以延胡索酸的形式离开。这是整个循环里唯一可逆的一步，其余每一步都只朝一个方向走。**这种单向性的用处在诊断上：某个酶缺失时，紧挨在它前面的中间物会堆积、又倒不回去，所以测一测血或尿里哪个中间物升高，就点出了缺的是哪个酶。**",
      src: "A p.636 · B §5.2.2, p.124"
    },
    {
      link_en: "and the last step releases the product and hands the carrier back",
      link_cn: "最后一步放出产物，同时把载体交还回来",
      recall_en: "ornithine, the carrier from five steps up, arriving back at its starting point",
      recall_cn: "五步之前那个载体鸟氨酸，回到了它的出发点",
      en: "Arginase — EC 3.5.3.1 — sits in the cytosol and hydrolyses arginine into urea and ornithine, and the ornithine is carried back into the mitochondrion to start another turn. Notice what arginine is doing here: it is not a building block on its way into a protein, it is the immediate precursor of urea, and the reaction that consumes it is a plain hydrolysis with water and nothing else. **With ornithine returning at this point, four reactions stop being four reactions and become a cycle.**",
      cn: "精氨酸酶 —— EC 3.5.3.1 —— 待在细胞质里，把精氨酸水解成尿素和鸟氨酸，鸟氨酸再被送回线粒体，开始下一圈。注意精氨酸在这里的身份：它不是一块正在赶去装进蛋白质的砖，它是尿素的直接前体，而消耗它的反应就是一次只用到水的普通水解。**鸟氨酸在这一步被交还回来 —— 于是那四个反应不再只是排成一列的四个反应，而成了一个循环。**",
      src: "A p.635 · B §5.2.2, p.125"
    },
    {
      link_en: "splitting a pathway across two compartments looks expensive. It costs less than it looks",
      link_cn: "把一条通路切在两个区室里，看起来很贵。实际比看起来便宜",
      en: "The enzymes of many pathways are clustered into a metabolon, meaning a group of enzymes held close enough that the product of one is handed straight to the active site of the next instead of being released. The urea cycle enzymes appear to be arranged this way, with citrulline, argininosuccinate, arginine and ornithine passed from one enzyme to the next and only urea let out into the general pool of cytosolic metabolites. **Two things follow: these intermediates never reach a concentration high enough to cross the cytosol by diffusion, and finding one in blood or urine is therefore meaningful rather than ordinary.**",
      cn: "许多通路的酶会聚成一个代谢子（metabolon）：一组酶挨得足够近，前一个酶的产物直接被递到后一个酶的活性位点上，而不是被释放出来。尿素循环的这些酶看起来正是这样安排的 —— 瓜氨酸、精氨基琥珀酸、精氨酸、鸟氨酸都是从一个酶手里传到下一个酶手里，只有尿素被放进细胞质那个公共的代谢物池。**由此有两个推论：这些中间物根本不必累积到足以靠扩散跑过细胞质的浓度；而一旦在血或尿里查到它们中的一个，那就是有意义的，不是寻常现象。**",
      src: "A p.636",
      openQuestion_en: "That the urea cycle enzymes really form a metabolon is stated as an appearance rather than as an established fact.",
      openQuestion_cn: "尿素循环的这些酶是否真的组成一个代谢子，原文用的是「看起来如此」，并没有当作已确立的事实。"
    },
    {
      link_en: "the fumarate cut off two steps ago still has to get somewhere, and there is no door for it",
      link_cn: "两步之前切下来的那个延胡索酸还得有个去处，而它没有门可走",
      recall_en: "the fumarate released by argininosuccinate lyase",
      recall_cn: "精氨基琥珀酸裂解酶放出来的那个延胡索酸",
      en: "Fumarate is a citric acid cycle intermediate, so in principle it belongs in the matrix, and no transporter carries cytosolic fumarate inwards. It gets in by changing identity first: several citric acid cycle enzymes, fumarase and malate dehydrogenase among them, also exist as cytosolic isozymes, so fumarate is hydrated to malate in the cytosol and malate is carried in on a transporter that does exist. Four enzymes make up this link and also regenerate the aspartate that was consumed: fumarase to malate, malate dehydrogenase with NAD+ to oxaloacetate, aspartate aminotransferase moving an amino group from glutamate onto that oxaloacetate to give aspartate back, and glutamate dehydrogenase refilling the glutamate pool from 2-oxoglutarate and a further ammonium. **These four reactions are the aspartate-argininosuccinate shunt, tying together the pathway that handles an amino acid's nitrogen and the one that handles its carbon skeleton — the Krebs bicycle.**",
      cn: "延胡索酸是柠檬酸循环的中间物，按理该在基质里，而偏偏没有任何转运体能把细胞质里的延胡索酸搬进去。它得先换个身份才进得去：包括延胡索酸酶和苹果酸脱氢酶在内的几个柠檬酸循环的酶，同时还存在细胞质版本的同工酶，于是延胡索酸先在细胞质里被水合成苹果酸，苹果酸再走一个确实存在的转运体进去。构成这条连接、同时把消耗掉的天冬氨酸再生出来的，一共是四个酶：延胡索酸酶给出苹果酸，苹果酸脱氢酶用 NAD+ 给出草酰乙酸，天冬氨酸氨基转移酶把谷氨酸上的氨基挪到草酰乙酸上、还回天冬氨酸，谷氨酸脱氢酶再用 2-氧戊二酸加一个铵离子把谷氨酸池补满。**这套反应叫天冬氨酸-精氨基琥珀酸支路，它把处理氨基酸的氮的通路和处理它碳骨架的通路拴在一起 —— 这一对得了个绰号叫「Krebs 双轮车」。**",
      src: "A pp.636-637 · B §5.2.2, p.125"
    },
    {
      link_en: "which raises an obvious objection: why bring the second nitrogen in on aspartate at all?",
      link_cn: "这就带出一个明显的疑问：第二个氮为什么非要坐天冬氨酸进来？",
      en: "Free ammonium was already available in the matrix, so using aspartate looks like a complicated way to add a second amino group. Two answers. First, adding nitrogen from aspartate is one of the two ordinary ways nitrogen is put into biomolecules generally, so it is not a device invented for urea. Second, and better: a liver cell has to run the malate-aspartate shuttle anyway, because NADH made in the cytosol cannot cross the inner membrane and its electrons get in by reducing oxaloacetate to malate, importing the malate, re-oxidising it inside, converting that oxaloacetate to aspartate and exporting the aspartate. Aspartate aminotransferase keeps the cytosolic balance of glutamate and aspartate and is one of the most active enzymes in a liver cell, which is exactly why it is the enzyme found in blood when liver tissue is damaged. **The urea cycle takes its second nitrogen off a traffic system that has to run whether or not any urea is being made.**",
      cn: "基质里明明已经有游离铵离子，所以绕道天冬氨酸去加第二个氨基，看着确实很绕。有两个回答。第一，从天冬氨酸引入氮，本来就是把氮装进生物分子的两条常规途径之一，并不是为尿素专门发明的装置。第二个更好：肝细胞无论如何都得跑「苹果酸-天冬氨酸穿梭」—— 细胞质里生成的 NADH 过不了内膜，它的电子只能这样进去：把草酰乙酸还原成苹果酸，把苹果酸运进去，在里面重新氧化，再把草酰乙酸转成天冬氨酸送出来。细胞质里谷氨酸与天冬氨酸的平衡由天冬氨酸氨基转移酶维持，它是肝细胞中最活跃的酶之一 —— 这也正是肝组织受损时在血里查到的就是它的原因。**尿素循环的第二个氮，是从苹果酸-天冬氨酸穿梭这套「不管造不造尿素都得转」的运输系统上顺手取下来的。**",
      src: "A p.637"
    },
    {
      link_en: "now the bill, and the rebate that comes with it",
      link_cn: "现在结账，以及随账附上的一笔返还",
      recall_en: "the two ATP at carbamoyl phosphate synthetase, and the one that went all the way to AMP",
      recall_cn: "氨甲酰磷酸合成酶那里的两个 ATP，加上一路走到 AMP 的那一个",
      en: "Written as one balanced equation the pathway reads: 2 ammonium plus bicarbonate plus 3 ATP plus water give urea, 2 ADP, 4 phosphate, AMP and 2 protons. Only three ATP molecules appear there, and the true cost is four high-energy phosphate groups, because the third ATP goes all the way to AMP and its second bond counts too. Part of that is repaid from outside the cycle: the exported fumarate becomes malate, malate is oxidised in the matrix by malate dehydrogenase, and the NADH produced is worth up to 2.5 ATP in respiration. **Counting only what the equation prints understates the price by one phosphate bond, and counting only the cycle overstates it by ignoring the NADH the returning carbon skeleton yields.**",
      cn: "写成一个配平方程，这条通路是：2 铵离子 + 碳酸氢根 + 3 ATP + 水 → 尿素 + 2 ADP + 4 磷酸 + AMP + 2 质子。那里只出现三个 ATP 分子，而真实代价是四个高能磷酸基团 —— 因为第三个 ATP 一路走到 AMP，它的第二根键也得算。这笔账又被循环之外的东西补回一部分：离开的延胡索酸变成苹果酸，苹果酸在基质里被苹果酸脱氢酶氧化，生成的 NADH 在呼吸中最多值 2.5 个 ATP。**只数方程里印出来的，会把价钱少算一根磷酸键；只看循环本身，又会因为忽略碳骨架回程带来的 NADH 而高估它。**",
      src: "A p.638 · B §5.2.2, p.125"
    },
    {
      link_en: "and how fast all this runs is controlled on two very different timescales",
      link_cn: "而这一整套跑多快，是在两个非常不同的时间尺度上被控制的",
      en: "Over days the amounts of enzyme change: all five are made at higher rates in a starving animal and in one on a very-high-protein diet, and at lower rates on a protein-free diet. Over minutes, carbamoyl phosphate synthetase I is switched on by N-acetylglutamate, which N-acetylglutamate synthase makes from acetyl-CoA and glutamate. In mammals that synthase has no other job at all — plants and microorganisms use the same reaction as the first step of making arginine from glutamate, and mammals lack the rest of that route — so the enzyme is kept purely as a signal generator. **Read its inputs as a sensor: glutamate reports how much amino nitrogen arrived, acetyl-CoA that catabolism is running, and arginine, which activates the synthase, that the cycle is stocked.**",
      cn: "以天计，改变的是酶的数量：饥饿的动物和吃极高蛋白饮食的动物体内，这五个酶的合成速率都更高；吃无蛋白饮食时则更低。以分钟计，氨甲酰磷酸合成酶 I 由 N-乙酰谷氨酸开启，而 N-乙酰谷氨酸由 N-乙酰谷氨酸合酶用乙酰-CoA 和谷氨酸做成。在哺乳动物身上这个合酶再没有别的职务 —— 植物和微生物用同一个反应作为「由谷氨酸从头合成精氨酸」的第一步，而哺乳动物缺少这条路线余下的酶 —— 所以它被单纯当作一个信号发生器留了下来。**把它的输入当传感器读：谷氨酸报告来了多少氨基氮，乙酰-CoA 报告分解代谢正在运转，而激活这个合酶的精氨酸，报告循环本身备货充足。**",
      src: "A pp.637-638 · B §5.2.2, p.124"
    },
    {
      link_en: "and what a missing enzyme looks like in a person",
      link_cn: "最后是：缺一个酶，在人身上是什么样子",
      en: "A baby with a severe defect in any of these enzymes looks normal at birth, because the mother's circulation had been clearing the ammonia, and then develops hyperammonemia — cerebral edema, lethargy, hyperventilation — with early death if untreated. The obvious treatment is forbidden, because a protein-free diet is not an option: humans cannot make half of the twenty amino acids and must eat them. A three-way split is more useful than the usual two: nonessential (alanine, asparagine, aspartate, glutamate, serine), conditionally essential in growing children and sometimes in illness (arginine, cysteine, glutamine, glycine, proline, tyrosine), and essential (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine). For missing N-acetylglutamate synthase, carbamoyl glutamate substitutes for the activator; arginine is supplied in three of the enzyme deficiencies and excluded from the diet in arginase deficiency, where it is the substrate that cannot be cleared. **The treatments that work share one idea — send nitrogen out on a different molecule: benzoate joins glycine as hippurate, phenylbutyrate joins glutamine as phenylacetylglutamine.**",
      cn: "在这些酶中任何一个上有严重缺陷的婴儿，出生时看起来是正常的 —— 因为此前一直是母体循环在替他清氨 —— 随后出现高氨血症：脑水肿、嗜睡、过度换气；不治疗通常早期死亡。那个显而易见的治法是被禁止的，因为无蛋白饮食不是选项：人类造不出二十种氨基酸里的一半，必须吃进来。分成三栏比通常的两栏更有用：非必需（丙氨酸、天冬酰胺、天冬氨酸、谷氨酸、丝氨酸）；条件必需，即在生长中的儿童身上、有时在患病期间必需（精氨酸、半胱氨酸、谷氨酰胺、甘氨酸、脯氨酸、酪氨酸）；必需（组氨酸、异亮氨酸、亮氨酸、赖氨酸、甲硫氨酸、苯丙氨酸、苏氨酸、色氨酸、缬氨酸）。若缺的是 N-乙酰谷氨酸合酶，就用氨甲酰谷氨酸顶替那个激活剂；精氨酸在其中三种酶缺陷里作为补充给予，而在精氨酸酶缺陷中反过来必须从饮食里剔除 —— 那里它正是清不掉的那个底物。**管用的疗法共用同一个想法 —— 让氮搭另一个分子出去：苯甲酸与甘氨酸结合成马尿酸，苯丁酸与谷氨酰胺结合成苯乙酰谷氨酰胺，两者都随尿排出。**",
      src: "A pp.638-639",
      see: [{ id: "L-18-3-1", en: "the other half of the story — what becomes of the carbon skeleton", cn: "故事的另一半 —— 碳骨架的下场" }]
    }
  ],
  terms: [
    { en: "ornithine", cn: "鸟氨酸",
      def_en: "A five-carbon diamino acid, 2,5-diaminopentanoic acid, which is lysine minus one methylene group and is not among the twenty amino acids of proteins. Its job in the urea cycle is to be the thing that comes back: it takes material on at each turn and is regenerated at the end of each turn, the role oxaloacetate plays in the citric acid cycle.",
      def_cn: "一个五碳二氨基酸，2,5-二氨基戊酸，相当于赖氨酸少一个亚甲基，不属于组成蛋白质的那二十种。它在尿素循环里的职责就是「那个会回来的东西」：每圈接一次料，每圈末尾又被再生出来 —— 与草酰乙酸在柠檬酸循环里的角色相同。" },
    { en: "four high-energy phosphate groups", cn: "四个高能磷酸基团",
      def_en: "The cost of one urea, although the balanced equation prints only three ATP: 2 ammonium + bicarbonate + 3 ATP + water give urea + 2 ADP + 4 phosphate + AMP + 2 protons. Two ATP go at carbamoyl phosphate synthetase I, and the third goes all the way to AMP at argininosuccinate synthetase, so its second bond counts. Part comes back as the exported fumarate returns as malate and yields NADH.",
      def_cn: "造一个尿素的代价，尽管配平方程里只印出三个 ATP：2 铵离子 + 碳酸氢根 + 3 ATP + 水 → 尿素 + 2 ADP + 4 磷酸 + AMP + 2 质子。两个 ATP 花在氨甲酰磷酸合成酶 I 上；第三个在精氨基琥珀酸合成酶那里一路走到 AMP，所以它的第二根键也要算。其中一部分随后被补回：离开的延胡索酸以苹果酸的形式回来，产生 NADH。" },
    { en: "the five enzymes with their EC numbers", cn: "五个酶及其 EC 编号",
      def_en: "Carbamoyl phosphate synthetase I, EC 6.3.4.16, in the matrix, outside the ring. Then the ring: ornithine transcarbamoylase, EC 2.1.3.3, in the matrix; argininosuccinate synthetase, EC 6.3.4.5, in the cytosol; argininosuccinate lyase, the only reversible step; and arginase, EC 3.5.3.1, which releases urea and hands ornithine back.",
      def_cn: "氨甲酰磷酸合成酶 I（EC 6.3.4.16），在基质里、在环之外。然后是环本身：鸟氨酸转氨甲酰酶（EC 2.1.3.3），基质；精氨基琥珀酸合成酶（EC 6.3.4.5），细胞质；精氨基琥珀酸裂解酶，唯一可逆的一步；精氨酸酶（EC 3.5.3.1），放出尿素并把鸟氨酸交还。" },
    { en: "aspartate-argininosuccinate shunt", cn: "天冬氨酸-精氨基琥珀酸支路",
      def_en: "The four reactions linking the urea cycle to the citric acid cycle and regenerating the aspartate that supplies urea's second nitrogen: fumarase to malate, malate dehydrogenase to oxaloacetate, aspartate aminotransferase to aspartate, and glutamate dehydrogenase refilling glutamate. No transporter moves cytosolic fumarate inwards, which is why it must become malate first. The pair of cycles is nicknamed the Krebs bicycle.",
      def_cn: "把尿素循环与柠檬酸循环连起来、并再生出供给尿素第二个氮的天冬氨酸的四个反应：延胡索酸酶给出苹果酸，苹果酸脱氢酶给出草酰乙酸，天冬氨酸氨基转移酶给出天冬氨酸，谷氨酸脱氢酶补满谷氨酸池。没有转运体能把细胞质的延胡索酸搬进去，所以它必须先变成苹果酸。这一对循环的绰号叫「Krebs 双轮车」。" },
    { en: "nitrogen-export therapy", cn: "把氮换个分子排出的疗法",
      def_en: "Treatment of a urea cycle defect by sending nitrogen out on another molecule: benzoate becomes benzoyl-CoA and joins glycine as hippurate; phenylbutyrate becomes phenylacetyl-CoA and joins glutamine as phenylacetylglutamine. Both products are harmless and leave in the urine. Neither drug touches ammonia directly — it consumes an amino acid, and the cell takes ammonia out of the blood to replace it.",
      def_cn: "治疗尿素循环缺陷的办法是让氮搭另一个分子出去：苯甲酸变成苯甲酰-CoA，与甘氨酸结合成马尿酸；苯丁酸变成苯乙酰-CoA，与谷氨酰胺结合成苯乙酰谷氨酰胺。两个产物都无害，随尿排出。两种药都不直接碰氨：它们消耗掉一个氨基酸，细胞为了补回它，就从血里把氨取走了。" },
    { en: "three excretion strategies", cn: "三种排氮策略",
      def_en: "Ammonotelic animals, mostly aquatic, let ammonia diffuse out through the gills at no energy cost but need abundant water. Ureotelic animals, terrestrial, spend ATP on a cyclic endergonic pathway to make urea, which is far less toxic and stays soluble when concentrated in urine. Uricotelic animals, birds and reptiles, spend more still on uric acid, whose poor solubility lets it be excreted as crystals — safe to store inside a sealed egg.",
      def_cn: "排氨型（多为水生）让氨经鳃扩散出去，不花能量，但需要大量的水。排尿素型（陆生）花 ATP 走一条环式吸能通路造尿素，尿素毒性低得多，在尿中浓缩仍可溶。排尿酸型（鸟类、爬行类）花得更多去造尿酸，尿酸溶解度差，正好以晶体形式排出 —— 在封闭的蛋里可以安全地以固体存放。" }
  ]
};

/* ------------------------------------------- 氨基酸变成的分子：从卟啉到一氧化氮 ---- */
window.BIOLITE_SPINE["key:amino-acid-derived-molecules"] = {
  assumed: ["ATP", "NADPH", "NAD+", "FAD", "FMN", "enzyme", "cofactor", "coenzyme A",
            "amino acid", "protein", "peptide", "glycine", "glutamate", "glutamine",
            "arginine", "cysteine", "methionine", "tyrosine", "tryptophan", "histidine",
            "phenylalanine", "ornithine", "aspartate", "alanine", "lysine",
            "succinyl-CoA", "citric acid cycle", "S-adenosylmethionine", "haemoglobin",
            "erythrocyte", "liver", "kidney", "spleen", "bile", "blood", "urine",
            "serum albumin", "transfer RNA", "peptidoglycan", "cellulose",
            "deoxyribonucleotide", "membrane", "free radical", "calmodulin",
            "neurotransmitter", "receptor", "hormone", "vitamin", "skeletal muscle",
            "DNA", "oxidation", "reduction", "hydroxyl group", "carboxyl group",
            "methyl group", "amino group", "disulfide bond", "sulfhydryl group",
            "pyridoxal phosphate", "decarboxylation", "racemization", "chlorophyll",
            "cytochrome", "ferritin", "vasodilator", "antioxidant", "peroxide",
            "Parkinson disease", "tuberculosis", "epilepsy", "schizophrenia",
            "allergy", "ulcer", "anaemia", "ultraviolet light", "glucuronide"],
  nodeTitle_en: "Molecules made by editing an amino acid: heme, its pigments, and the signals",
  nodeTitle_cn: "由氨基酸改造出来的分子：血红素、它降解出的色素，以及那些信号",
  title_en: "One four-ring cage assembled from glycine, taken apart into the colours you already know, and a set of small signals each one amino acid away",
  title_cn: "一个由甘氨酸搭起来的四环笼，被拆成你早就认识的那些颜色；此外还有一批离某个氨基酸只有一步之遥的小信号",
  steps: [
    {
      en: "A porphyrin is a relatively complex flat structure built from four pyrrole rings — five-membered nitrogen-containing heterocycles — joined to one another by four bridges. Put an iron in the middle of one and the result is heme, the group that carries oxygen in haemoglobin. The cage is assembled from four molecules of porphobilinogen, and each porphobilinogen from two molecules of delta-aminolevulinate, a compound also written 5-aminolevulinate because its amino group sits on carbon 5. **Delta-aminolevulinate is therefore the committed precursor of every porphyrin a cell makes, and the enzyme that produces it is where the whole pathway is regulated.**",
      cn: "卟啉是一个相对复杂的扁平结构，由四个吡咯环（含氮的五元杂环）通过四座桥彼此相连。往中央放一个铁，得到的就是血红素 —— 血红蛋白里负责携氧的那个基团。这个笼由四分子胆色素原搭成，而每分子胆色素原又由两分子 δ-氨基乙酰丙酸搭成；后者也写作 5-氨基乙酰丙酸，因为它的氨基挂在第 5 号碳上。**于是 δ-氨基乙酰丙酸就是细胞所造一切卟啉的承诺前体，而生产它的那个酶，正是整条通路的调控点。**",
      src: "A pp.816-817 · B §6.3, p.146"
    },
    {
      link_en: "and that precursor is made two entirely different ways, depending on the kingdom",
      link_cn: "而这个前体有两种完全不同的做法，取决于你问的是哪一界",
      en: "In higher eukaryotes, mammals included, glycine condenses with succinyl-CoA taken straight out of the citric acid cycle, coenzyme A and carbon dioxide are lost, and the product is delta-aminolevulinate; the enzyme is delta-aminolevulinate synthase. In plants, algae and most bacteria the starting material is glutamate instead, by a strikingly roundabout route: the glutamate is first esterified onto a transfer RNA — the molecule of protein synthesis — reduced by NADPH to glutamate 1-semialdehyde, cut off the tRNA, and handed to an aminotransferase. **Heme is built out of two things a cell is already making anyway, glycine and a citric acid cycle intermediate, so its synthesis is a side branch off metabolism rather than a pathway of its own.**",
      cn: "在包括哺乳动物在内的高等真核生物里，甘氨酸与直接取自柠檬酸循环的琥珀酰-CoA 缩合，失去辅酶 A 和二氧化碳，产物就是 δ-氨基乙酰丙酸；催化的酶叫 δ-氨基乙酰丙酸合酶。在植物、藻类和多数细菌里，起始材料换成了谷氨酸，路线绕得惊人：谷氨酸先被酯化到一个转运 RNA（蛋白质合成用的那种分子）上，由 NADPH 还原成谷氨酸-1-半醛，再从 tRNA 上切下来，交给一个转氨酶。**血红素是拿细胞本来就在造的两样东西搭出来的 —— 甘氨酸，加上一个柠檬酸循环中间物 —— 所以它的合成是代谢分出的一条支路，而不是一条自成一体的通路。**",
      src: "A p.817 · B §6.3, p.146"
    },
    {
      link_en: "from there to the finished ring is a fixed series of condensations, each one losing something",
      link_cn: "从这里到成品的环，是一串固定的缩合反应，每一步都丢掉点东西",
      en: "Two delta-aminolevulinate condense with the loss of two waters into porphobilinogen — a pyrrole ring carrying an aminomethyl substituent and two acid side chains. Four porphobilinogen then condense, losing four ammonia, into a linear tetrapyrrole: four pyrrole rings joined in an open chain. That chain cyclises to uroporphyrinogen III — a closed macrocycle that still carries eight carboxyl groups. Losing four carbon dioxide gives coproporphyrinogen III — propionate side chains are left at the other positions. A further oxidation, losing two more carbon dioxide, gives protoporphyrin IX — the ring that now carries vinyl groups. **The route from delta-aminolevulinate to protoporphyrin IX is one long decarboxylation: eight carboxyl groups at the start, and by the end most of them have been taken off.**",
      cn: "两分子 δ-氨基乙酰丙酸缩合、失去两分子水，成为胆色素原 —— 一个带着氨甲基取代基和两条酸性侧链的吡咯环。四分子胆色素原再缩合、失去四分子氨，成为线型四吡咯（四个吡咯环连成开链），后者环化成尿卟啉原 III，一个仍带着八个羧基的闭合大环。失去四个二氧化碳得到粪卟啉原 III，其余位置上留着丙酸侧链。再经一次氧化、又失去两个二氧化碳，得到原卟啉 IX，此时环上带上了乙烯基。**从 δ-氨基乙酰丙酸到原卟啉 IX 这一路，本质是一场漫长的脱羧：起点上有八个羧基，到终点时大部分已经被摘掉。**",
      src: "B §6.3, p.147"
    },
    {
      link_en: "and the names along that route are not arbitrary — each one states a chemical fact",
      link_cn: "而这一路上的名字并不是随便起的 —— 每个名字都在陈述一个化学事实",
      en: "A compound whose name ends in -ogen, as uroporphyrinogen and coproporphyrinogen do, has its four pyrrole rings joined by methylene bridges, written -CH2-, and is therefore one of the more reduced intermediates. A compound without that ending, protoporphyrin and heme among them, has methine bridges instead, written =CH-. The prefix carries information too: uro- compounds still hold their eight carboxyl groups, while proto- compounds are already mostly decarboxylated. **Reading the name tells you both how far along the pathway a molecule sits and how reduced its bridges are, so the nomenclature does the work a memorised list would otherwise have to do.**",
      cn: "名字以 -原（-ogen）结尾的化合物，例如尿卟啉原和粪卟啉原，四个吡咯环之间是亚甲基桥（-CH2-），因而属于比较还原的中间物。名字没有这个结尾的，例如原卟啉和血红素，桥则是次甲基（=CH-）。前缀同样带着信息：尿-（uro-）类还保留着八个羧基，而原-（proto-）类已经大部分脱羧。**光读名字，就能同时知道一个分子走到了通路的哪一步、以及它的桥有多还原 —— 命名法替你做完了原本要靠死记清单才做得到的事。**",
      src: "B §6.3, p.147"
    },
    {
      link_en: "and the order of the last step is the opposite of what most people guess",
      link_cn: "而最后一步的顺序，和多数人猜的正好相反",
      en: "Protoporphyrin IX is the finished cage with no metal in it. Iron goes in last, into the completed ring, coordinated by the four pyrrole nitrogens at its centre, and the enzyme that inserts it is ferrochelatase. Regulation needs no memorising: heme feedback-inhibits the early steps of its own synthesis. Through further transformations, closely analogous pathways lead on from the same intermediates to the cytochromes, to oxidases and oxygenases, and to chlorophyll. **One ring skeleton, with different metals and side chains, serves oxygen transport, electron transport and photosynthesis alike, which is why the porphyrin route is a general one.**",
      cn: "原卟啉 IX 是一个已经完工、中间还没有金属的笼。铁是最后才装进去的 —— 装进已经完成的环里，由环中央的四个吡咯氮配位 —— 而把它插进去的酶叫亚铁螯合酶。调控不用背：血红素反馈抑制自己合成通路的早期步骤。经过进一步的转化，从同样这些中间物出发的高度类似的通路，还通向各种细胞色素、氧化酶与加氧酶，以及叶绿素。**同一副环骨架，换金属、换侧链，就同时服务于氧的运输、电子的传递和光合作用 —— 所以卟啉这条路线不是血红蛋白专用的，而是通用的。**",
      src: "A p.818 · B §6.3, p.147",
      see: [{ id: "6-3-1", en: "the heme proteins side by side, and which of them change the iron's valence", cn: "各种血红素蛋白并列比较，以及其中哪些会让铁变价" }]
    },
    {
      link_en: "block this pathway anywhere and the block itself becomes the disease",
      link_cn: "把这条通路堵在任何一处，这个「堵」本身就成了病",
      en: "Block any enzyme of the pathway and the specific precursors upstream of the block pile up in erythrocytes, body fluids and the liver. In acute intermittent porphyria, the commonest form, most people who inherit it are heterozygotes and stay symptom-free because one working gene copy makes enough enzyme; a poorly understood nutritional or environmental trigger then lets delta-aminolevulinate and porphobilinogen accumulate, and the attack is acute abdominal pain with neurological dysfunction. King George III's episodes of apparent madness fit that picture. In a second form, a ferrochelatase that works too slowly lets protoporphyrin accumulate, and protoporphyrin exposed to light releases free radicals that damage membrane proteins and lipids, so these patients must avoid bright indoor light as well as sunlight; afamelanotide, released slowly from an implant under the skin, relieves it by stimulating melanin production. A rarer form stains the urine red, makes the teeth fluoresce under ultraviolet light, leaves the skin abnormally sun-sensitive and causes anaemia — a combination that may be where the vampire legends came from. **The porphyrias are not a list to memorise: they are what one branching biosynthetic pathway does when it is stopped at different points.**",
      cn: "把这条通路上任何一个酶堵住，堵点上游那些特定的前体就会在红细胞、体液和肝脏里堆积。最常见的是急性间歇性卟啉病：多数携带者是杂合子、平时并无症状，因为一份正常基因拷贝造出的酶已经够用；随后某个尚不清楚的营养或环境诱因让 δ-氨基乙酰丙酸和胆色素原积累起来，发作时是急性腹痛加神经功能障碍。英王乔治三世那些看似疯癫的发作，符合这幅图景。第二种是亚铁螯合酶活性降低、原卟啉积累，而原卟啉一见光就释放自由基、损伤膜蛋白和膜脂，所以这些患者不但要避开日光，连明亮的室内光也得躲；由皮下小植入体缓慢释放的 afamelanotide 通过刺激黑色素生成来缓解它。还有一种更罕见的：尿液被染红、牙齿在紫外光下发荧光、皮肤对日光异常敏感，并伴有贫血 —— 这几样凑在一起，可能正是吸血鬼传说的来源。**卟啉病不是一张要背的清单：它就是「一条分岔的生物合成通路被堵在不同位置时会发生什么」。**",
      src: "A p.819"
    },
    {
      link_en: "now the other direction: what happens to heme when a red cell dies",
      link_cn: "现在换个方向：一个红细胞死掉时，它的血红素去了哪里",
      en: "Heme released from dying erythrocytes in the spleen is taken apart in a fixed order: a bridge between two pyrrole rings is oxidised, the iron atom is released, and only then is the ring opened. Heme oxygenase carries out that first step and makes three things at once — biliverdin, a linear open tetrapyrrole; free Fe2+, captured immediately by ferritin because loose iron is dangerous; and carbon monoxide. Because heme is turned over continuously, about 1 percent of a person's heme is bound to carbon monoxide at any moment, with no environmental exposure of any kind. **That three-move order — oxidise a bridge, release the metal, open the ring — is how every porphyrin is dismantled, not only the heme of haemoglobin.**",
      cn: "在脾脏里，从死亡红细胞释放出来的血红素是按固定顺序被拆开的：先氧化两个吡咯环之间的一座桥，再放掉那个铁原子，最后才把环打开。血红素加氧酶负责第一步，同时产出三样东西 —— 胆绿素，一个线性开环的四吡咯；游离 Fe2+，因为散落的铁很危险，立刻被铁蛋白捕获；以及一氧化碳。由于血红素在不断更新，一个人体内任何时刻约有 1% 的血红素结合着一氧化碳，而这与任何环境暴露都无关。**「先氧化一座桥、再放掉金属、然后才开环」这三步顺序，是一切卟啉被拆解的方式，不只是血红蛋白的血红素。**",
      src: "A p.817 · B §6.3, p.147"
    },
    {
      link_en: "and the second step is an experiment you have already run on yourself",
      link_cn: "而第二步，是一个你已经在自己身上做过的实验",
      en: "Biliverdin reductase converts biliverdin to bilirubin — the second open tetrapyrrole of the sequence, and the yellow one. Both are bile pigments, meaning breakdown products of a porphyrin ring that the body secretes in bile. **You can watch the two-enzyme sequence in a bruise: the black or purple is haemoglobin from damaged red cells, the green that follows is biliverdin, and the yellow after that is bilirubin.**",
      cn: "胆绿素还原酶把胆绿素变成胆红素 —— 这个序列里第二个开链四吡咯，也是黄色的那个。两者都是胆色素，即身体随胆汁分泌出去的卟啉环降解产物。**这两个酶的整个序列，你可以在一块瘀青上看完：最初的黑紫色是从受损红细胞里释放的血红蛋白，随后转成的绿色是胆绿素，再之后的黄色是胆红素。**",
      src: "A p.820 · B §6.3, p.147"
    },
    {
      link_en: "follow the bilirubin out of the body and two everyday colours get explained",
      link_cn: "跟着胆红素走出身体，两种日常的颜色就有了解释",
      en: "Bilirubin is largely insoluble, so it travels in blood bound to serum albumin. The liver converts it to bilirubin diglucuronide, soluble enough to be secreted in bile into the small intestine, where microbial enzymes turn it mostly into urobilinogen; some urobilinogen is reabsorbed and reaches the kidney, where it becomes urobilin, and what stays in the intestine becomes stercobilin. Note that the two accounts differ in one detail worth keeping: one gives urobilinogen as the intermediate that microbes make and the kidney converts, while the other says only that further reduction of bilirubin yields stercobilin, which together with urobilin colours urine and stool. When liver function is impaired or bile secretion blocked, bilirubin leaks back into the blood and yellows the skin and the whites of the eyes, which is jaundice; newborns are often jaundiced because they have not yet made enough of the enzyme that attaches the glucuronides, and a fluorescent lamp treats it by driving a photochemical conversion of bilirubin into more soluble compounds. **Urobilin is what makes urine yellow and stercobilin is what makes faeces red-brown, so both everyday colours are the far end of heme breakdown.**",
      cn: "胆红素基本不溶，所以它在血中结合着血清白蛋白运送。肝脏把它转成胆红素二葡糖醛酸苷，溶解度足以随胆汁分泌进小肠；肠道微生物的酶在那里把它主要变成尿胆素原，其中一部分被重吸收、到达肾脏并在那里变成尿胆素，留在肠道里的那部分则变成粪胆素。两套说法在一个细节上不同，值得留着：一套给出尿胆素原作为「微生物做出、肾脏再转化」的中间物；另一套只说胆红素进一步还原生成粪胆素，粪胆素与尿胆素一起给尿液和粪便上色。当肝功能受损或胆汁分泌受阻时，胆红素漏回血中，把皮肤和眼白染黄，这就是黄疸；新生儿常发黄，是因为还没造出足够的那个「挂上葡糖醛酸」的酶，而用一盏荧光灯就能治：光化学反应把胆红素变成更易溶的化合物。**尿液的黄色来自尿胆素，粪便的红棕色来自粪胆素 —— 这两种日常颜色都是血红素降解的最末端。**",
      src: "A p.818 · B §6.3, p.147"
    },
    {
      link_en: "and then the surprise that changes what the whole pathway is for",
      link_cn: "接着是那个改变整条通路性质的意外",
      recall_en: "the carbon monoxide and the bilirubin from the two steps above, seen a second time",
      recall_cn: "上面两步里的一氧化碳和胆红素，在这里被重新看了一遍",
      en: "At the very low concentrations heme degradation produces, that carbon monoxide acts as a signalling molecule — a vasodilator, like nitric oxide though less potent, with further effects on neurotransmission. And bilirubin, the pigment of jaundice, is the most abundant antioxidant in mammalian tissue and accounts for most of the antioxidant activity of serum, apparently mattering most in the developing brain of a newborn. That reframes jaundice: the cell damage there is probably bilirubin in excess of the albumin available to dissolve it, rather than bilirubin being poisonous in itself. Because the products matter, the pathway is regulated at its first step, and humans carry three heme oxygenases: one inducible by a long list of stresses — shear stress, hypoxia, hyperoxia, heat shock, ultraviolet light, hydrogen peroxide; one expressed constantly, mainly in brain and testes; and a third with no catalytic activity at all, which may work as an oxygen sensor. **This pathway looks like disposal and is a source of signals: both of its named products do work, which is why it is regulated at all.**",
      cn: "在血红素降解所产生的极低浓度下，那个一氧化碳充当信号分子 —— 一种血管舒张剂，作用与一氧化氮类似但较弱，此外还影响神经传递。而黄疸的那个色素胆红素，是哺乳动物组织中含量最丰富的抗氧化剂，血清抗氧化活性大部分由它承担，其保护作用看来在新生儿正在发育的大脑里最为要紧。这就把黄疸重新定义了：那里的细胞损伤很可能是「胆红素超出了可用来溶解它的白蛋白的量」，而胆红素本身谈不上有毒。正因为这些产物有用，这条通路在第一步就受调控；人类有三种血红素加氧酶：一种可被一长串应激诱导 —— 切应力、缺氧、高氧、热休克、紫外线、过氧化氢；一种持续表达，主要在脑和睾丸；第三种完全没有催化活性，可能改行做氧感受器。**这条通路看着像在处理废物，其实是一个信号来源：它两个有名字的产物都在干活，正因如此它才需要被调控。**",
      src: "A p.819"
    },
    {
      link_en: "the same subject keeps going, and the rest is one move repeated: edit an amino acid, get a working molecule",
      link_cn: "同一个题目还没完，而其余部分是同一个动作的重复：改一改某个氨基酸，就得到一个能干活的分子",
      en: "Creatine is assembled from glycine and arginine, with S-adenosylmethionine donating a methyl group, and its phosphorylated form, phosphocreatine, is the energy buffer of skeletal muscle. Glutathione is a tripeptide of glutamate, cysteine and glycine, and the way to think of it is as a redox buffer; its oxidised form is simply two glutathiones joined by a disulfide bond. **Glutathione's three jobs each reach a different subject: it keeps protein sulfhydryl groups reduced, keeps the iron of heme as Fe2+, and supplies reducing power for making deoxyribonucleotides.**",
      cn: "肌酸由甘氨酸和精氨酸拼成，甲基由 S-腺苷甲硫氨酸提供；它的磷酸化形式磷酸肌酸，是骨骼肌的能量缓冲物质。谷胱甘肽是由谷氨酸、半胱氨酸、甘氨酸构成的三肽，最好把它当作一个氧化还原缓冲剂来理解；它的氧化形式不过是两分子谷胱甘肽由一根二硫键连起来。**谷胱甘肽的三项工作各自通向一个不同的题目：让蛋白质的巯基保持还原态、让血红素上的铁保持 Fe2+、以及为脱氧核糖核苷酸的合成提供还原力。**",
      src: "A pp.820-821"
    },
    {
      link_en: "and one enzyme that uses it explains a line on a vitamin bottle",
      link_cn: "而用到它的一个酶，解释了保健品标签上的一行字",
      en: "Glutathione peroxidase removes toxic peroxides, and it carries a covalently bound selenium atom in the form of selenocysteine — an amino acid with selenium where cysteine has sulfur. **That selenium is essential for the enzyme's activity, and that is the biochemical reason selenium is a required dietary trace element at all.**",
      cn: "谷胱甘肽过氧化物酶负责清除有毒的过氧化物，而它身上带着一个共价结合的硒原子，形式是硒代半胱氨酸 —— 一个把半胱氨酸的硫换成硒的氨基酸。**这个硒是该酶活性所必需的；这就是硒之所以成为一种必需膳食微量元素的全部生化理由。**",
      src: "A p.820"
    },
    {
      link_en: "another edit — swapping a molecule's handedness — turns a bacterium into a target",
      link_cn: "另一种改动 —— 把分子的手性换过来 —— 把细菌变成了靶子",
      en: "D-amino acids do not generally occur in proteins, but bacterial peptidoglycan, the mesh that is the bacterial cell wall, contains both D-alanine and D-glutamate. They are made straight from the ordinary L isomers by amino acid racemases, which use pyridoxal phosphate as their cofactor. Because racemisation matters to a bacterium and not to us, alanine racemase is a good drug target: cycloserine is used against tuberculosis, and L-fluoroalanine has been tested as an antibacterial. **The honest caveat explains a whole class of side effects: these inhibitors also hit some of the human enzymes that need the same cofactor.**",
      cn: "D-型氨基酸一般不出现在蛋白质里，但细菌的肽聚糖 —— 构成细菌细胞壁的那张网 —— 同时含有 D-丙氨酸和 D-谷氨酸。它们是由氨基酸消旋酶直接从普通的 L-型转过来的，这类酶用磷酸吡哆醛作辅因子。由于「消旋」对细菌要紧、对我们不要紧，丙氨酸消旋酶就是一个好药靶：环丝氨酸用于治疗结核，L-氟丙氨酸也被试作抗菌药。**而那句老实的补充解释了一整类副作用：这些抑制剂同样会打到人体内一些需要同一个辅因子的酶。**",
      src: "A p.820"
    },
    {
      link_en: "in plants the same starting materials become most of what you can smell and taste",
      link_cn: "在植物那边，同样的起始材料变成了你闻得到、尝得到的大部分东西",
      en: "Lignin, the rigid polymer that stiffens wood, is built from phenylalanine and tyrosine and is second only to cellulose in abundance in plant tissue, and its structure is complex and still not well understood. Tryptophan becomes indole-3-acetate, better known as auxin, the plant growth hormone — a signal a plant makes in one place and acts on in another. The same two aromatic amino acids also give the tannins that inhibit oxidation in wine, the alkaloids including morphine, and the flavour compounds of cinnamon oil, nutmeg, cloves, vanilla and cayenne pepper. **Two aromatic amino acids account for wood, a growth hormone, a class of drugs and most of a spice rack, all by the same trick of editing a side chain.**",
      cn: "木质素 —— 让木材变硬的那种刚性聚合物 —— 由苯丙氨酸和酪氨酸造成，在植物组织中的丰度仅次于纤维素；它的结构很复杂，至今仍未被充分弄清。色氨酸变成吲哚-3-乙酸，也就是更常听到的名字「生长素」，植物的生长激素 —— 一个植物在一处产生、在另一处起作用的信号。同样这两个芳香族氨基酸还给出抑制葡萄酒氧化的单宁、包括吗啡在内的生物碱，以及肉桂油、肉豆蔻、丁香、香草和辣椒的风味化合物。**两个芳香族氨基酸，撑起了木材、一种生长激素、一类药物，以及香料架上的大半 —— 靠的都是同一招：改造侧链。**",
      src: "A p.822"
    },
    {
      link_en: "and in a nervous system, one chemical step does almost all of it",
      link_cn: "而在神经系统里，几乎全部工作由同一个化学步骤完成",
      recall_en: "the same pyridoxal phosphate as the bacterial racemases two steps up, doing a different job",
      recall_cn: "和上面第二步细菌消旋酶用的是同一个磷酸吡哆醛，干的却是另一件事",
      en: "The common move is decarboxylation, and it is another pyridoxal-phosphate-dependent reaction. Tyrosine gives the catecholamines — dopamine, norepinephrine, epinephrine — whose levels track blood pressure among other things; Parkinson disease goes with underproduction of dopamine and was traditionally treated with L-dopa, while overproduction in the brain may be linked to schizophrenia. Glutamate gives GABA, an inhibitory transmitter whose underproduction is associated with epileptic seizures, and GABA analogues treat epilepsy and hypertension. Tryptophan gives serotonin in two steps. Histidine gives histamine, a powerful vasodilator released in quantity during an allergic response and also a stimulant of gastric acid secretion, which is why cimetidine, a structural analogue of histamine that blocks its receptor, heals duodenal ulcers by shutting that secretion down. Methionine and ornithine give the polyamines spermine and spermidine, which help package DNA, and ornithine decarboxylase, the first enzyme of that route, is itself the target of several powerful drugs. **Taking one carboxyl group off an amino acid is the single chemical step behind almost every biological amine, from a neurotransmitter to the molecule an antihistamine is designed around.**",
      cn: "共同的动作是脱羧，而这又是一个依赖磷酸吡哆醛的反应。酪氨酸给出儿茶酚胺 —— 多巴胺、去甲肾上腺素、肾上腺素 —— 它们的水平与血压等指标相关；帕金森病伴随多巴胺生成不足，传统上用 L-多巴治疗，而脑内生成过多则可能与精神分裂症有关。谷氨酸给出 GABA，一种抑制性递质，它生成不足与癫痫发作相关，而 GABA 类似物用于治疗癫痫与高血压。色氨酸经两步给出血清素。组氨酸给出组胺，一种强力血管舒张剂，在过敏反应中被大量释放，同时也刺激胃酸分泌 —— 这就是为什么阻断组胺受体的组胺结构类似物西咪替丁，能通过关掉胃酸分泌来促进十二指肠溃疡愈合。甲硫氨酸与鸟氨酸给出多胺精胺与亚精胺，它们参与 DNA 的包装；而这条路线的第一个酶鸟氨酸脱羧酶，本身就是好几种强效药物的靶点。**从一个氨基酸上摘掉一个羧基，就是几乎所有生物胺背后那唯一的化学步骤 —— 从神经递质，到抗组胺药所围绕设计的那个分子。**",
      src: "A p.821"
    },
    {
      link_en: "and the last product here is the strangest one",
      link_cn: "本题最后一个产物，也是最古怪的那个",
      en: "Until the mid-1980s nitric oxide was known mainly as a component of smog, and finding that it is a biological messenger was a genuine surprise. It is made from arginine in an NADPH-dependent five-electron oxidation by nitric oxide synthase, a dimeric enzyme each of whose subunits carries four cofactors at once — FMN, FAD, tetrahydrobiopterin and an Fe3+ heme. It is a small gas that diffuses through membranes freely, yet it is so reactive that its range is about one millimetre from where it was made, which makes it a strictly local signal rather than a hormone carried in blood. In humans it works in neurotransmission, in blood clotting and in the control of blood pressure. **Nitric oxide cannot be stored at all, so how much is available is settled entirely at the moment of synthesis — switched on by the synthase binding Ca2+-calmodulin.**",
      cn: "直到 1980 年代中期，一氧化氮主要还是作为雾霾成分为人所知；发现它是一种生物信使，是一个真正的意外。它由精氨酸经一次依赖 NADPH 的五电子氧化生成，催化者是一氧化氮合酶，一个二聚体酶，其每个亚基同时携带四种辅因子 —— FMN、FAD、四氢生物蝶呤，以及一个 Fe3+ 血红素。它是一种能自由扩散穿膜的小气体分子，反应性却强到作用半径只有约一毫米，这使它成为一个严格局部的信号，而不是随血液输送的激素。在人体内，它参与神经传递、血液凝固和血压调控。**一氧化氮根本无法贮存，所以「有多少可用」完全在合成的那一刻被决定 —— 由合酶结合 Ca2+-钙调蛋白来开启。**",
      src: "A pp.822, 824"
    }
  ],
  terms: [
    { en: "delta-aminolevulinate", cn: "δ-氨基乙酰丙酸",
      def_en: "The committed precursor of every porphyrin, also written 5-aminolevulinate. Two molecules condense into porphobilinogen, and four porphobilinogen build the ring. It is made two entirely different ways — from glycine plus succinyl-CoA in higher eukaryotes, and from glutamate through a glutamyl-transfer-RNA intermediate in plants, algae and most bacteria — and the synthase that produces it is the regulatory point of the whole pathway.",
      def_cn: "一切卟啉的承诺前体，也写作 5-氨基乙酰丙酸。两分子缩合成胆色素原，四分子胆色素原搭成环。它有两种完全不同的做法：高等真核生物用甘氨酸加琥珀酰-CoA，植物、藻类和多数细菌用谷氨酸经谷氨酰-tRNA 中间体；而生产它的合酶，是整条通路的调控点。" },
    { en: "the porphyrin naming rule", cn: "卟啉命名规则",
      def_en: "A name ending in -ogen means the four pyrrole rings are joined by methylene bridges, -CH2-, so the compound is one of the more reduced intermediates; without that ending, as in protoporphyrin and heme, the bridges are methine, =CH-. The prefix says how far the decarboxylations have gone: uro- compounds still carry eight carboxyl groups, proto- compounds are mostly decarboxylated and carry vinyl groups.",
      def_cn: "名字以 -原（-ogen）结尾，表示四个吡咯环之间是亚甲基桥 -CH2-，属于比较还原的中间物；没有这个结尾的（原卟啉、血红素）桥是次甲基 =CH-。前缀则说明脱羧走到哪里：尿-（uro-）类仍带八个羧基，原-（proto-）类已大部分脱羧并带上乙烯基。" },
    { en: "the three-move degradation order", cn: "降解的三步顺序",
      def_en: "Oxidise a bridge between two pyrrole rings, release the iron atom, then open the ring. Heme oxygenase performs it and yields biliverdin, free Fe2+ that ferritin captures at once, and carbon monoxide. The same order applies to every porphyrin derivative and not only to the heme of haemoglobin, which is why it is worth holding as a pattern rather than as a fact about one molecule.",
      def_cn: "先氧化两个吡咯环之间的一座桥，再放掉铁原子，然后才打开环。执行者是血红素加氧酶，产物是胆绿素、被铁蛋白立刻捕获的游离 Fe2+，以及一氧化碳。同一顺序适用于所有卟啉衍生物，不只是血红蛋白的血红素 —— 所以值得当作一个模式来记，而不是关于某一个分子的事实。" },
    { en: "bilirubin as an antioxidant", cn: "作为抗氧化剂的胆红素",
      def_en: "The yellow pigment of jaundice is the most abundant antioxidant in mammalian tissue and supplies most of the antioxidant activity of serum, apparently mattering most in a newborn's developing brain. That reframes jaundice: the cell damage is probably bilirubin in excess of the serum albumin available to dissolve it, rather than the molecule being poisonous in itself.",
      def_cn: "黄疸的那个黄色色素，是哺乳动物组织中含量最丰富的抗氧化剂，血清抗氧化活性大部分由它承担，其保护作用看来在新生儿正在发育的大脑里最要紧。这就把黄疸重新定义了：细胞损伤很可能是「胆红素超出了可用来溶解它的血清白蛋白的量」，而不是这个分子本身有毒。" },
    { en: "urobilin and stercobilin", cn: "尿胆素与粪胆素",
      def_en: "The end products of bilirubin's passage through the gut. Intestinal microbes convert secreted bilirubin diglucuronide to urobilinogen; some is reabsorbed and converted in the kidney to urobilin, which is what makes urine yellow, while what stays behind becomes stercobilin, which is what makes faeces red-brown. A shorter account gives stercobilin simply as a further reduction product of bilirubin, without naming urobilinogen.",
      def_cn: "胆红素走完肠道之后的终产物。肠道微生物把分泌出来的胆红素二葡糖醛酸苷转成尿胆素原；一部分被重吸收、在肾脏变成尿胆素，尿液的黄色由它而来；留下的那部分变成粪胆素，粪便的红棕色由它而来。另一种较简的说法直接把粪胆素说成胆红素进一步还原的产物，不提尿胆素原。" },
    { en: "PLP-dependent decarboxylation", cn: "依赖磷酸吡哆醛的脱羧",
      def_en: "The single chemical step behind almost all the biological amines: tyrosine to the catecholamines, glutamate to GABA, tryptophan to serotonin, histidine to histamine, ornithine to the polyamines. The same cofactor also serves the bacterial racemases that make the D-alanine and D-glutamate of peptidoglycan, which is why drugs aimed at those racemases also disturb human enzymes.",
      def_cn: "几乎所有生物胺背后那唯一的化学步骤：酪氨酸到儿茶酚胺、谷氨酸到 GABA、色氨酸到血清素、组氨酸到组胺、鸟氨酸到多胺。同一个辅因子也服务于制造肽聚糖里 D-丙氨酸和 D-谷氨酸的细菌消旋酶 —— 这正是针对那些消旋酶的药物同时会扰动人体酶的原因。" }
  ]
};

/* ------------------------------------------ 胆固醇与异戊二烯类：一副骨架的多种用法 ---- */
window.BIOLITE_SPINE["key:cholesterol-and-isoprenoids"] = {
  assumed: ["cholesterol", "membrane", "lipid", "fatty acid", "hydroxyl", "ester",
            "ring", "hydrocarbon", "carbon", "oxygen", "oxidation", "water", "blood",
            "hormone", "receptor", "gene expression", "enzyme", "cell", "nucleus",
            "vitamin", "skin", "intestine", "plant", "fungus", "bacteria", "eukaryote",
            "polar", "nonpolar", "amphipathic", "triacylglycerol", "glycerophospholipid",
            "lipase", "phospholipid", "calcium", "inflammation", "asthma", "drug",
            "detergent", "emulsify", "bile", "liver", "citric acid cycle", "glycolysis",
            "photosynthesis", "respiratory chain", "nucleic acid", "amino acid",
            "ammonia", "protein biosynthesis", "cell wall", "carotenoid", "quinone",
            "ubiquinone", "plastoquinone", "acetyl-CoA", "NADPH", "ATP", "arthritis",
            "aspirin", "morphine", "melanin", "testosterone", "cortisol", "aldosterone",
            "cosmetics", "evolution", "anabolic"],
  nodeTitle_en: "Cholesterol and the isoprenoids: one rigid scaffold, edited over and over",
  nodeTitle_cn: "胆固醇与异戊二烯类：同一副刚性骨架，被反复改写",
  title_en: "A four-ring hydrocarbon made amphipathic by one hydroxyl, and what changes each time that hydroxyl or that side chain is altered",
  title_cn: "一个靠单个羟基获得两亲性的四并环烃，以及每改动一次这个羟基或那条侧链会发生什么",
  steps: [
    {
      en: "A sterol is a structural lipid present in the membranes of most eukaryotic cells, built round the steroid nucleus: four fused rings, three of six carbons and one of five, lettered A to D. Two mechanical facts follow at once — the nucleus is almost planar, and it is relatively rigid, because fused rings do not allow rotation about their carbon-carbon bonds. **A fatty acyl chain rotates freely about every carbon-carbon bond and can therefore extend, bend or kink, so putting a rigid sterol in among such chains stiffens the membrane.**",
      cn: "固醇（sterol）是存在于大多数真核细胞膜中的结构脂类，核心是类固醇核：四个稠合的环，三个六碳环、一个五碳环，依次标为 A 到 D。两个力学事实立刻随之而来 —— 这个核几乎是平面的，而且相当刚硬，因为稠合的环不允许绕自己的碳碳键旋转。**脂酰链绕每一根碳碳键都能自由旋转，因而能伸展、弯折、打结；把一个刚硬的固醇塞进这样一堆链中间，膜就变硬了。**",
      src: "A p.352",
      see: [{ id: "L-11-2-1", en: "what cholesterol does to membrane fluidity, measured", cn: "胆固醇对膜流动性的影响，测出来的数字" }]
    },
    {
      link_en: "and this rigid hydrocarbon has to live among phospholipids, which means it needs a polar end",
      link_cn: "而这个刚硬的烃要挤在磷脂中间生活，就必须有一个极性的一端",
      en: "Cholesterol, the major sterol in animal tissues, is amphipathic, and the description is worth taking apart in three pieces. Its polar head group is the hydroxyl at carbon 3, a single oxygen atom against twenty-odd carbons, which is the smallest polar head of any membrane lipid. Its nonpolar body is the steroid nucleus plus the hydrocarbon side chain at carbon 17, so the side chain counts as part of the body and not as a separate feature. And that body is about as long as a 16-carbon fatty acid in its extended form, which is the commonest saturated chain in the lipids cholesterol sits among. **Cholesterol is exactly the right length to lie alongside a phospholipid tail, with its one hydroxyl reaching the watery surface where the phospholipid head groups already are.**",
      cn: "胆固醇是动物组织中主要的固醇，它是两亲性的，而这句描述值得拆成三块看。它的极性头基是 3 号碳上的羟基 —— 一个氧原子对上二十几个碳，是所有膜脂里最小的极性头。它非极性的身体是类固醇核加上 17 号碳上的烃基侧链，所以那条侧链算作身体的一部分，而不是另一项特征。而这个身体的长度大致相当于一个 16 碳脂肪酸完全伸展的形式 —— 那正是胆固醇周围那些脂类里最常见的饱和链。**胆固醇的长度恰好可以贴着一条磷脂尾巴躺下，而它唯一的那个羟基正好够到磷脂头基所在的那层水面。**",
      src: "A p.352"
    },
    {
      link_en: "so what happens when the cell needs to store or move it, where being polar is a liability?",
      link_cn: "那么当细胞要储存或搬运它时怎么办 —— 在那种场合，带极性反而是累赘",
      recall_en: "the same move that makes a triacylglycerol neutral: consume the polar groups in ester bonds",
      recall_cn: "和让三酰甘油变「中性」的是同一招：把极性基团消耗在酯键里",
      en: "For storage and transport, that hydroxyl condenses with a fatty acid to form a sterol ester — cholesterol with its one polar group consumed in an ester bond. The membrane form and the transport form of cholesterol therefore differ by exactly one ester bond. **Capping the only polar group turns an amphipathic membrane component into a fully nonpolar molecule, fit for the inside of a lipid droplet or the core of a lipoprotein particle.**",
      cn: "为了储存和运输，那个羟基与一个脂肪酸缩合，形成固醇酯。于是胆固醇的「膜形式」与「运输形式」之间，恰好只差一个酯键。**把唯一的极性基团封起来，一个两亲性的膜组分就变成了彻底非极性的分子 —— 正适合待在脂滴内部或脂蛋白颗粒的核心里。**",
      src: "A p.352"
    },
    {
      link_en: "other kingdoms use their own version of the same molecule, and one whole domain of life cannot make it",
      link_cn: "其他界各有自己那一版同类分子，而有一整个生命域根本造不出它",
      en: "Similar sterols occur elsewhere in the eukaryotes: stigmasterol in plants, ergosterol in fungi. Then the sentence to get exactly right — bacteria cannot synthesize sterols, although a few bacterial species can incorporate sterols made elsewhere into their membranes. This is the cleanest case in the whole subject of a biosynthetic capability being confined to one domain of life, and it stands beside the ether lipids of the archaea as evidence that membrane composition tracks ancestry. **The claim is about capability rather than about content: bacteria cannot make sterols, and a few species solve that by taking up somebody else's.**",
      cn: "真核生物里别处也有类似的固醇：植物是豆甾醇，真菌是麦角甾醇。接下来这句话要一字不差地记准 —— 细菌不能合成固醇，不过少数细菌种类能把别处造好的固醇整合进自己的膜里。这是整个题目里「一整项生物合成能力被限制在一个生命域内」最干净的例子，它与古菌的醚脂并列，共同说明膜的组成随亲缘关系而变。**这句话说的是「能力」，而不是「含量」：细菌根本造不出固醇，而少数种类靠把别人造好的拿过来用，解决了这个问题。**",
      src: "A p.352"
    },
    {
      link_en: "now the distinction the two words hide, and it is exact",
      link_cn: "现在说这两个词掩盖着的那个区别 —— 它是精确的",
      en: "Steroids are oxidised derivatives of sterols. Three separate claims are packed into that, each checkable against a drawing: a steroid carries extra oxygen-containing groups on the rings; it keeps the four fused rings of the nucleus; and it lacks the alkyl side chain that cholesterol carries at carbon 17 on ring D. A third property follows from the first two, which is that a steroid is more polar than cholesterol — more oxygen and less hydrocarbon. Testosterone, beta-estradiol, cortisol and aldosterone are all drawn without cholesterol's long tail and all carry oxygen functions on the rings. **The pair of definitions is clean: keep the side chain at carbon 17 and the molecule is a sterol; remove it and oxidise the rings and it is a steroid.**",
      cn: "类固醇（steroid）是固醇的氧化衍生物。这句话里塞了三个各自独立、又都能对着结构图核对的论断：类固醇的环上多带了含氧基团；它保留着核里那四个稠合环；而它缺少胆固醇在 D 环 17 号碳上带着的那条烷基侧链。由前两条又推出第三条性质：类固醇比胆固醇更极性 —— 氧更多、烃更少。睾酮、β-雌二醇、皮质醇、醛固酮画出来全都没有胆固醇那条长尾巴，而且环上都带着含氧基团。**这一对定义很干净：留着 17 号碳上那条侧链的是固醇；把它去掉、再把环氧化，就是类固醇。**",
      src: "A p.356"
    },
    {
      link_en: "and being a lipid changes how a hormone is delivered and what it can do once it arrives",
      link_cn: "而「本身是脂类」这件事，改变了一个激素如何被送达、以及到达之后能做什么",
      en: "Steroid hormones move through the bloodstream on protein carriers from where they are produced to a target tissue, enter its cells, bind highly specific receptor proteins in the nucleus, and trigger changes in gene expression and so in metabolism. Three of those four claims follow from the molecule being a lipid: it needs a protein carrier to cross an aqueous bloodstream at all, it walks straight into a cell because a lipid bilayer is no barrier to it, and its receptor being in the nucleus means the output is a change in which genes are expressed. The named examples come with jobs attached — testosterone from the testes, beta-estradiol from the ovaries and placenta, cortisol from the adrenal cortex regulating glucose metabolism, and aldosterone, also adrenal, regulating salt excretion. **Affinity for these receptors is very high, so nanomolar concentrations or lower already produce a response — which is the practical reason such compounds are powerful drugs at very small doses.**",
      cn: "类固醇激素挂在蛋白载体上随血流从产生部位到达靶组织，进入那里的细胞，与细胞核中高度专一的受体蛋白结合，引发基因表达、进而代谢的改变。这四个论断里有三个都由「它是脂类」推出：它必须挂在蛋白载体上才能穿过含水的血流；它能径直走进细胞，因为脂双层对它不构成屏障；而它的受体在细胞核里，意味着输出是「哪些基因被表达」发生变化。点名的例子都带着各自的活 —— 睾酮来自睾丸，β-雌二醇来自卵巢与胎盘，皮质醇来自肾上腺皮质、调节葡萄糖代谢，醛固酮同样来自肾上腺皮质、调节盐的排泄。**这些受体的亲和力极高，所以纳摩尔甚至更低的浓度就已经能引起反应 —— 这正是这类化合物在极小剂量下就很有力的现实原因。**",
      src: "A p.356"
    },
    {
      link_en: "one steroid drug works by shutting off a different lipid class at its source, and that is what separates two kinds of anti-inflammatory",
      link_cn: "有一个类固醇药物，是靠在源头掐断另一类脂来起效的 —— 而这正是两类抗炎药的分界",
      en: "Arachidonate is a 20-carbon polyunsaturated fatty acid sitting esterified at carbon 2 of a membrane glycerophospholipid, and it is the raw material for the eicosanoids: short-range signal molecules made and used near where they are produced, in four classes — prostaglandins, thromboxanes, leukotrienes and lipoxins. Nothing can be made from arachidonate until it is cut off that position, and the enzyme that cuts a fatty acid off carbon 2 is phospholipase A2. Prednisone is a steroid drug with strong anti-inflammatory activity, mediated in part by inhibiting that release and so inhibiting the synthesis of all four classes; it is used in asthma and rheumatoid arthritis, and the words in part matter, because this inhibition is one component of its action rather than the whole of it. Aspirin instead inhibits cyclooxygenase, an enzyme partway down only one branch, so prostaglandins and thromboxanes stop while leukotrienes and lipoxins continue. **Where the pathway is interrupted is the whole distinction between a steroidal and a nonsteroidal anti-inflammatory, and it is why a steroid reaches leukotriene-driven asthma and aspirin does not.**",
      cn: "花生四烯酸是一个 20 碳的多不饱和脂肪酸，以酯键待在膜甘油磷脂的 2 号碳上，是二十烷酸类的原料 —— 二十烷酸类是在产生地附近就地起作用的短程信号分子，共四类：前列腺素、血栓烷、白三烯和脂氧素。在花生四烯酸从那个位置上被切下来之前，什么也造不出来；而把脂肪酸从 2 号碳切下来的酶，就是磷脂酶 A2。泼尼松是一种抗炎活性很强的类固醇药物，其活性部分由「抑制这次释放、从而抑制那四类的合成」介导，用于哮喘与类风湿关节炎；「部分」这两个字要留着，因为这项抑制构成它作用的一部分，而非全部。阿司匹林抑制的则是环氧合酶 —— 只在其中一条分支上、位置更靠下的一个酶；于是前列腺素和血栓烷停了，白三烯和脂氧素照常。**「在通路的哪一处下手」就是类固醇抗炎药与非类固醇抗炎药之间的全部区别，也正是类固醇管得了由白三烯驱动的哮喘、而阿司匹林管不了的原因。**",
      src: "A p.356",
      see: [{ id: "L-10-3-1", en: "the eicosanoids themselves, class by class", cn: "二十烷酸类本身，一类一类地讲" }]
    },
    {
      link_en: "the same molecule has a job in the gut, and the word for it is doing real work",
      link_cn: "同一个分子在肠道里还有一份工作，而描述它的那个词是实打实的",
      recall_en: "the insolubility of a triacylglycerol is what creates the problem this solves",
      recall_cn: "三酰甘油的不溶性，正是这一步要解决的那个问题的来源",
      en: "Bile acids are polar derivatives of cholesterol that act as detergents in the intestine, emulsifying dietary fats so that digestive lipases can reach them; taurocholic acid is the standard drawn example. The word detergent explains the whole thing. A dietary triacylglycerol is nonpolar and essentially insoluble in water, so in the gut it forms large droplets with very little surface, and a lipase is a water-soluble enzyme that can only work at that surface. A bile acid is amphipathic — a cholesterol skeleton made polar on one face — so it coats the droplets and breaks them into many small ones. **A bile acid hydrolyses nothing itself: it multiplies the surface area available to the enzyme, and so makes hydrolysis possible.**",
      cn: "胆汁酸是胆固醇的极性衍生物，在肠道里充当去污剂，把膳食脂肪乳化，好让消化性脂肪酶够得着它们；书上画出的标准例子是牛磺胆酸。「去污剂」这个词就把整件事讲清楚了。膳食里的三酰甘油非极性、基本不溶于水，所以在肠道里聚成大油滴、表面积很小；而脂肪酶是水溶性的酶，只能在那个表面上干活。胆汁酸是两亲性的 —— 一个在一侧被改造得带极性的胆固醇骨架 —— 于是它裹住油滴、把大油滴打散成许多小油滴。**胆汁酸自己不水解任何东西：它做的事情是把酶可用的表面积成倍放大，从而让水解真正成为可能。**",
      src: "A p.352"
    },
    {
      link_en: "and that same conversion is the only way cholesterol ever leaves an animal at all",
      link_cn: "而正是这同一次转化，是胆固醇离开动物体的唯一途径",
      en: "Terpenoids, including the steroids, are synthesised in the cells of higher organisms, animals and plants alike, and as a rule those same organisms do not metabolise them for energy or for carbon. They are excreted instead, and their further fate is not sufficiently mapped; it is presumed that heterotrophic bacteria — bacteria that live on organic compounds made by somebody else — may use them. Cholesterol is a partial exception in route rather than in principle, because it is excreted from an animal body only after prior conversion to bile acids and their salts. **Almost everything a cell makes is eventually broken down for energy or building material, and this whole family is the exception: it is made, used, and then thrown away intact.**",
      cn: "萜类（terpenoid，包括类固醇在内）是在高等生物 —— 动物和植物 —— 的细胞里合成的，而通常这些生物自己并不把它们当能量或碳源代谢掉。它们是被排出体外的，而排出之后的去向尚未被充分弄清；一般推测异养细菌（靠别人造出的有机物过活的细菌）可能用得上它们。胆固醇算是路径上的部分例外，而不是原则上的例外：它只有先转化成胆汁酸及其盐，才能从动物体内排出。**细胞造出来的东西几乎都会被分解成能量或建筑材料，而这一整族恰恰是例外：造出来、用掉，然后原样扔掉。**",
      src: "B §8.4.3, p.194"
    },
    {
      link_en: "and a second derivative starts in the skin rather than the liver",
      link_cn: "而另一个衍生物的起点在皮肤，不在肝脏",
      en: "Vitamin D3, cholecalciferol, is normally formed in the skin from 7-dehydrocholesterol, a cholesterol derivative, in a photochemical reaction driven by the ultraviolet component of sunlight. So a membrane sterol becomes, by way of sunlight, a hormone that regulates calcium. One classification oddity is worth knowing rather than being tripped by: that photochemical step opens one of the rings. **A vitamin D compound is counted among the steroid substances by origin while no longer having the intact four-ring nucleus by structure.**",
      cn: "维生素 D3，即胆钙化醇，通常是在皮肤里由 7-脱氢胆固醇（一个胆固醇衍生物）经一个由阳光紫外线成分驱动的光化学反应生成的。于是一个膜上的固醇，经由阳光，变成了一个调节钙的激素。有一个分类上的怪处，与其被它绊倒不如先知道：那个光化学步骤打开了其中一个环。**维生素 D 类化合物按来源被归入类固醇物质，而按结构它已经不再拥有完整的四并环核。**",
      src: "A p.357",
      beyond: true,
      beyondNote: "The ring-opening explanation of why vitamin D sits awkwardly in the steroid class is not spelled out on A p.357, which gives the photochemical origin; the activation chemistry is developed in L-10-3-1.",
      see: [{ id: "L-10-3-1", en: "vitamin D activated, and the other fat-soluble vitamins", cn: "维生素 D 的活化，以及其余脂溶性维生素" }]
    },
    {
      link_en: "plants use the same four-ring scaffold for signalling too, with an output no animal has",
      link_cn: "植物也拿同一套四并环骨架做信号，而它的输出是动物根本没有的",
      en: "Vascular plants contain brassinolide, a steroidlike compound and a potent growth regulator: it raises the rate of stem elongation and affects the orientation of cellulose microfibrils in the cell wall during growth. **The rigid four-ring skeleton is a signalling scaffold in both kingdoms, and in a plant its output is the architecture of a cell wall, which has no animal counterpart at all.**",
      cn: "维管植物含有油菜素内酯，一个类固醇样的化合物，也是一种强效的生长调节物质：它提高茎伸长的速率，并影响生长过程中细胞壁里纤维素微纤丝的取向。**这套刚性的四并环骨架在两个界里都是信号支架；而在植物里，它的输出是细胞壁的构造，这在动物中完全没有对应物。**",
      src: "A p.356"
    },
    {
      link_en: "and one sentence gathers everything above into a single biosynthetic family",
      link_cn: "最后有一句话，把上面的一切收进同一个生物合成家族",
      recall_en: "the three-phase terpenoid route already walked through: acetyl-CoA to mevalonate, mevalonate to isopentenyl pyrophosphate and on to squalene",
      recall_cn: "已经走过的萜类三阶段路线：乙酰-CoA 到甲羟戊酸，甲羟戊酸到异戊烯焦磷酸，再到角鲨烯",
      en: "The sterols of all eukaryotes are synthesised from simple five-carbon isoprene subunits, and so are the fat-soluble vitamins, the quinones and the dolichols; the same list appears again as sterols, steroids, dolichols, vitamins A, E, D and K, ubiquinone, plastoquinone and the coloured carotenoid pigments. Count what is inside it: the membrane sterol, every steroid hormone, the sugar-carrying dolichols, all four fat-soluble vitamins, both electron-carrying quinones and the pigments — one family, assembled from the same five-carbon block by head-to-tail and head-to-head condensations that start at acetyl-CoA and pass through mevalonate. **One vocabulary note for moving between textbooks: this family is called the isoprenoids in one account and the terpenes in another, and both names cover the same compounds.**",
      cn: "所有真核生物的固醇都由简单的五碳异戊二烯单元合成，脂溶性维生素、醌类和多萜醇也是如此；同一份名单再出现一次时是：固醇、类固醇、多萜醇、维生素 A、E、D、K、泛醌、质体醌，以及带颜色的类胡萝卜素色素。数一数里面都有什么：膜上的固醇、所有类固醇激素、搬运糖的多萜醇、四种脂溶性维生素、两种传递电子的醌，还有那些色素 —— 一个家族，全部由同一种五碳积木拼成，靠的是从乙酰-CoA 出发、经甲羟戊酸的头尾缩合与头头缩合。**换书阅读时的一个词汇提示：这一族在一套说法里叫异戊二烯类（isoprenoid），在另一套里叫萜类（terpene），两个名字指的是同一批化合物。**",
      src: "A p.352 and A p.360",
      see: [{ id: "8-3-7", en: "the three phases of the terpenoid route, from acetyl-CoA to mevalonate onward", cn: "萜类路线的三个阶段，从乙酰-CoA 到甲羟戊酸再往下" }]
    },
    {
      link_en: "and plants build far more of these than animals do, for a reason that has nothing to do with chemistry",
      link_cn: "而植物造出的这类东西远比动物多，理由与化学毫无关系",
      en: "In their basic processes, plant metabolic pathways do not differ fundamentally from animal ones: the citric acid cycle, protein biosynthesis, nucleic acids, glycolysis and the respiratory chain are shared. Plants have their specifics in a number of places — the biosynthesis of essential amino acids and fatty acids, and the ability to build ammonia into organic molecules. Some pathways, especially anabolic ones, are entirely specific to plants and lead to the secondary plant metabolites, which are apparently unnecessary for the plant, meaning that no individual plant cell needs them to stay alive. That word apparently carries everything, because their biosynthesis is not self-serving, at least from an evolutionary point of view. Many of them are used in the pharmaceutical industry, in the food industry and in cosmetics. **Plants carry a far greater range of secondary metabolites than animals because they cannot migrate away from a hostile environment, so chemical protection and defence arose instead.**",
      cn: "在基本过程上，植物的代谢途径与动物的并无根本差别：柠檬酸循环、蛋白质生物合成、核酸、糖酵解与呼吸链都是共有的。植物在若干地方有其特殊之处 —— 必需氨基酸与脂肪酸的生物合成，以及把氨结合进有机分子的能力。某些途径（尤其是合成代谢途径）为植物完全特有，并通向次生植物代谢物；这些东西对植物「表面上」是不必要的，意思是没有哪个植物细胞靠它们才能活下去。而「表面上」这三个字承担了全部分量，因为至少从演化的角度看，它们的生物合成并非无目的的自我消遣。其中许多被用于制药工业、食品工业与化妆品。**植物的次生代谢物种类远多于动物，是因为它们无法从不利环境中迁走，于是转而生出了一整套建立在化学基础上的保护与防御机制。**",
      src: "B §9.5, pp.216-217"
    }
  ],
  terms: [
    { en: "the steroid nucleus", cn: "类固醇核",
      def_en: "Four fused rings, three of six carbons and one of five, lettered A to D. Almost planar and relatively rigid, because fused rings do not allow rotation about carbon-carbon bonds — the opposite of the free rotation that lets a saturated acyl chain extend, and the reason a sterol stiffens the membrane it sits in.",
      def_cn: "四个稠合的环，三个六碳环、一个五碳环，标为 A 到 D。几乎是平面的，而且相当刚硬，因为稠合的环不允许绕碳碳键旋转 —— 这与「自由旋转让饱和脂酰链得以伸展」正好相反，也正是固醇会让它所在的膜变硬的原因。" },
    { en: "sterol versus steroid", cn: "固醇与类固醇之别",
      def_en: "Steroids are oxidised derivatives of sterols: they keep the four-ring nucleus, they lack the alkyl side chain attached to ring D of cholesterol, and they are more polar. The marker of a sterol is a hydrocarbon side chain at carbon 17 plus the hydroxyl at carbon 3. Keep the side chain and it is one; remove it and oxidise the rings and it is the other.",
      def_cn: "类固醇是固醇的氧化衍生物：保留四并环核，缺少胆固醇 D 环上那条烷基侧链，并且更极性。固醇的标志则是 17 号碳上的烃基侧链加 3 号碳上的羟基。留着侧链就是前者；去掉它再把环氧化，就是后者。" },
    { en: "the fate of terpenoids and steroids", cn: "萜类与类固醇的下场",
      def_en: "As a rule, the organism that synthesises them does not metabolise them for energy or carbon at all. They are excreted, and their further fate is not sufficiently mapped, with heterotrophic bacteria presumed to use them. Cholesterol leaves an animal body only after conversion to bile acids and their salts — the same conversion that gives the gut its detergent.",
      def_cn: "通则是：合成它们的生物根本不把它们当能量或碳源代谢掉。它们被排出体外，之后的去向尚未被充分弄清，一般推测异养细菌会利用它们。胆固醇只有先转化成胆汁酸及其盐才能离开动物体 —— 而这正是给肠道提供去污剂的那次转化。" },
    { en: "the isoprenoid family", cn: "异戊二烯族",
      def_en: "Sterols, steroids, dolichols, vitamins A, E, D and K, ubiquinone, plastoquinone and the carotenoid pigments, all built from five-carbon isoprene units by head-to-tail and head-to-head condensations starting at acetyl-CoA and passing through mevalonate. One account calls the family isoprenoids, another calls the same compounds terpenes.",
      def_cn: "固醇、类固醇、多萜醇、维生素 A/E/D/K、泛醌、质体醌和类胡萝卜素色素，全都由五碳异戊二烯单元拼成 —— 从乙酰-CoA 出发、经甲羟戊酸，靠头尾缩合与头头缩合装配。一套说法把这一族叫异戊二烯类，另一套把同样这些化合物叫萜类。" },
    { en: "secondary plant metabolites", cn: "次生植物代谢物",
      def_en: "Products of plant-specific, mostly anabolic pathways, apparently unnecessary in the sense that no individual cell needs them to stay alive, and evolutionarily justified as chemical protection and defence. A plant cannot migrate away from an unfavourable environment, which is why its range of them is far greater than an animal's; and they are the reason so much of the pharmaceutical, food and cosmetics industry starts from plants.",
      def_cn: "植物特有的、主要为合成代谢的通路的产物；说它们「表面上不必要」，只是指没有哪个细胞靠它们才能活下去，而从演化上看它们是化学性的保护与防御。植物无法从不利环境中迁走，这正是它们这类物质的种类远多于动物的原因；也正是制药、食品与化妆品行业有那么大一部分要从植物开始的原因。" }
  ]
};

/* --------------------------------- 蛋白质的定向、修饰与降解：造完之后还没完 ---- */
window.BIOLITE_SPINE["key:protein-targeting-and-degradation"] = {
  assumed: ["DNA", "RNA", "mRNA", "protein", "peptide", "polypeptide", "dipeptide",
            "enzyme", "amino acid", "side chain", "ribosome", "receptor", "membrane",
            "plasma membrane", "endoplasmic reticulum", "Golgi apparatus", "lysosome",
            "organelle", "cytoplasm", "hydrolysis", "hydrophobic", "beta sheet",
            "disulfide bond", "sulfhydryl group", "insulin", "trypsin",
            "carboxypeptidase", "initiation codon", "translation", "hormone",
            "blood plasma", "N-terminus", "C-terminus", "secretion", "asparagine",
            "serine", "threonine", "tyrosine", "lysine", "arginine", "histidine",
            "glutamate", "aspartate", "proline", "cysteine", "glycine", "phenylalanine",
            "tryptophan", "leucine", "valine", "collagen", "hydroxyl group",
            "carboxyl group", "amino group", "amide", "oxidation", "phosphate",
            "mannose", "galactose", "glucose", "sialic acid", "vitamin C", "vitamin K",
            "conformation", "glycoprotein", "blood clotting", "chemotaxis", "sulfate",
            "ester", "calcium", "stomach", "small intestine", "pancreas", "duodenum",
            "bile", "liver", "pH", "hydrochloric acid", "pepsin", "chymotrypsin",
            "elastase", "papain", "collagenase", "urea", "bacteria", "nucleotide",
            "porphyrin", "melanin", "creatinine", "energy", "half-life", "anion",
            "cofactor", "active site", "substrate", "conformational change"],
  nodeTitle_en: "After the ribosome: addressing a protein, editing it, and taking it apart",
  nodeTitle_cn: "核糖体之后：给蛋白写地址、改造它，再把它拆掉",
  title_en: "A finished chain is not yet a working protein — it is cut to length, chemically edited, and finally hydrolysed back to amino acids",
  title_cn: "一条造完的链还不是能干活的蛋白 —— 它要被切到正确长度、被化学改造，最后再被水解回氨基酸",
  steps: [
    {
      en: "Proteins destined for secretion out of the cell, and probably lysosomal proteins too, are often synthesised first as larger molecules — preproteins, or preproproteins — and converted to the biologically active form later by partial hydrolysis, in which one or more peptide fragments are cut off the original chain. Blood plasma proteins are made this way. **The protein a cell releases is shorter than the protein its ribosome made, and the difference is not waste: cutting is the last step of manufacture.**",
      cn: "注定要被分泌到细胞外的蛋白（很可能溶酶体蛋白也是），常常先以更大的分子被合成出来 —— 叫前体蛋白或前-前体蛋白 —— 之后再经部分水解转成有生物活性的形态，其间会从原链上切下一段或几段肽。血浆蛋白就是这样造出来的。**细胞放出去的蛋白比它的核糖体造出来的那条短，而这个差额并不是浪费：切割正是制造的最后一道工序。**",
      src: "B §4.3.2, p.110"
    },
    {
      link_en: "and the extra piece is at one particular end, for a reason",
      link_cn: "而多出来的那截长在特定的一端，这是有原因的",
      en: "A pre- or preproform carries a signal sequence — a stretch of amino acids encoded by codons that follow immediately after the initiation codon, the AUG at which reading begins — so the signal sequence sits at the N-terminus of the chain. According to the signal hypothesis, its primary job is to attach the ribosome to a receptor on the outer face of the endoplasmic reticulum, so the ribosome making the protein is delivered before the protein exists. The attachment is mediated by SRP, the signal recognition particle: a ribonucleoprotein that binds specifically to a signal sequence once it has been synthesised, while a separate SRP receptor on the endoplasmic reticulum membrane takes part in docking the ribosome. Once the ribosome has attached, SRP is released and is free to bind another signal sequence. **Being encoded first means the address is translated first, so it exists and can be read while most of the protein has not been made yet.**",
      cn: "前体或前-前体形式带着一段信号序列 —— 一段由紧跟在起始密码子（阅读从那里开始的 AUG）之后的密码子编码的氨基酸 —— 因此信号序列位于链的 N 端。按照信号假说，它的首要任务是把核糖体接到内质网外表面的一个受体上，于是在蛋白存在之前，正在造它的核糖体就先被送过去了。这次对接由 SRP（信号识别颗粒）介导：一种核糖核蛋白，特异性地结合已经被合成出来的信号序列；内质网膜上另有一个专门的 SRP 受体参与核糖体的对接。核糖体一旦接上，SRP 就被释放，可以去结合另一段信号序列。**「编码在最前面」意味着地址最先被翻译出来：蛋白的大部分还没造出来时，这个地址就已经存在、并且可以被读取了。**",
      src: "B §4.3.2, pp.110-111"
    },
    {
      link_en: "and the sequence itself is built of two chemically opposite halves",
      link_cn: "而这段序列本身，是由化学性质相反的两截拼成的",
      en: "A signal sequence carries predominantly hydrophobic amino acids in its middle part and charged amino acids at the end of the chain, so the charged end stays outside the endoplasmic reticulum membrane while the hydrophobic middle buries itself in the nonpolar interior; that mismatch is what fixes which way round the sequence goes in. The inserted middle then forms a beta sheet with two neighbouring membrane proteins, ribophorin I and ribophorin II, and that non-covalent interaction forces open a pore bounded by the ribophorins, through which the rest of the growing chain threads into the endoplasmic reticulum. **The chain is pushed across the membrane while it is still being made, so it never has to fold up in the cytoplasm first and be unfolded again to fit through.**",
      cn: "信号序列的中段以疏水氨基酸为主，链的末端则是带电氨基酸；于是带电的那一端留在内质网膜外，疏水的中段把自己埋进膜的非极性内部 —— 正是这种不匹配定死了这段序列以哪个朝向插进去。插进去的中段随后与相邻的两个膜蛋白（核糖蛋白 I 与核糖蛋白 II）形成 β-折叠，这一非共价相互作用迫使一个由核糖蛋白围成的孔道打开，正在生长的链其余部分就从中穿进内质网。**这条链是一边合成、一边被推过膜的，所以它根本不必先在细胞质里折好、再被拆开才塞得进去。**",
      src: "B §4.3.2, p.111"
    },
    {
      link_en: "and the address is destroyed on arrival",
      link_cn: "而地址在抵达时就被销毁",
      en: "As soon as the end of the signal sequence appears inside the lumen of the endoplasmic reticulum, signal peptidase — an enzyme bound to the membrane — cleaves it off hydrolytically, and the preproprotein becomes a proprotein at that moment. The rest of the chain passes into the cisternae, is packed into microvesicles that bud off and travel to the Golgi apparatus, where it may be modified further, and in its final form it is released as secretory granules that either travel to target organelles or fuse with the plasma membrane. **Fusing a vesicle with the plasma membrane puts its contents outside the cell without anything crossing a bilayer, which is why secretion needs no second pore.**",
      cn: "信号序列的末端一出现在内质网腔内，信号肽酶 —— 一个结合在膜上的酶 —— 立刻把它水解切除；就在那一刻，前-前体蛋白变成了前体蛋白。链的其余部分进入内质网池腔，被装进从上面出芽的微囊泡，运往高尔基体、在那里可能被进一步修饰；最终形态则以分泌颗粒的形式释出，这些颗粒或者运到目标细胞器，或者与质膜融合。**囊泡与质膜融合，就把内容物送到了细胞外，而全程没有任何东西真正穿过一层双分子膜 —— 这正是分泌不需要第二个孔道的原因。**",
      src: "B §4.3.2, p.111"
    },
    {
      link_en: "and many proteins are cut twice, not once — one worked example carries its own history in its structure",
      link_cn: "而许多蛋白被切的不是一刀，是两刀 —— 有一个例子把自己的来历写在了结构里",
      en: "Many proteins, especially secreted ones, undergo a two-step proteolytic modification, usually in the Golgi apparatus: the signal sequence is released first, and selective proteolysis follows. The two cuts do two different jobs — the first ends the delivery, the second creates the activity — so a protein can be finished, in place, and still inactive until the second cut is made. Insulin is the worked case. It is synthesised as preproinsulin with an N-terminal signal sequence of 23 amino acids; removing that gives proinsulin, in which the finished A chain is the C-terminal part, the B chain is the N-terminal part, and the two are joined in the middle by the C-peptide. Selective proteolysis then excises the C-peptide, using at least two enzymes: one with trypsin-like specificity cuts it out, and a carboxypeptidase removes the dipeptide of two basic amino acids by which it was attached. **Insulin's A and B chains start out as one continuous chain, which is how they came to be aligned correctly, and after the cut only three disulfide bonds hold them together.**",
      cn: "许多蛋白（尤其是分泌型的）要经历两步蛋白水解修饰，通常在高尔基体中进行：先释放信号序列，随后是选择性蛋白水解。这两刀干的是两件不同的事 —— 第一刀结束投递，第二刀创造活性 —— 所以一个蛋白可以已经造完、已经就位，却在第二刀落下之前一直没有活性。胰岛素就是走完全程的那个例子。它以前胰岛素原的形式合成，N 端带一段 23 个氨基酸的信号序列；切掉它得到胰岛素原：其中已经成形的 A 链是 C 端那一段，B 链是 N 端那一段，两者中间由 C 肽连着。随后选择性蛋白水解把 C 肽切出去，至少用到两种酶：一种具类胰蛋白酶特异性的酶把它切下来，一种羧肽酶再把当初连接它的、由两个碱性氨基酸组成的二肽去掉。**胰岛素的 A 链与 B 链原本是一条连续的链 —— 它们当初之所以能对得准正因如此；而切开之后，把它们维系在一起的只剩三根二硫键。**",
      src: "B §4.3.2, p.111",
      see: [{ id: "4-3-1", en: "the isomerase that gets those cysteine pairings right", cn: "把那几对半胱氨酸配对弄对的异构酶" }]
    },
    {
      link_en: "cutting is one kind of finishing. The other kind changes side chains without shortening anything",
      link_cn: "切割是收尾的一种。另一种收尾根本不缩短什么，它改的是侧链",
      en: "The side chains of a nascent chain can be covalently modified in six ways: glycosylation, hydroxylation, carboxylation, oxidation of sulfhydryl groups to disulfide bonds, methylation, and phosphorylation together with sulfation. **Twenty amino acids are what a gene can specify, and these six reactions are how a cell gets chemistry the genetic code cannot write.**",
      cn: "新生链上的侧链可以通过六种方式被共价修饰：糖基化、羟基化、羧基化、巯基氧化成二硫键、甲基化，以及磷酸化连同硫酸化。**基因能指定的只有二十种氨基酸；而这六个反应，正是细胞获得遗传密码写不出来的那些化学性质的办法。**",
      src: "B §4.3.3, p.111"
    },
    {
      link_en: "the first, and one of the most significant",
      link_cn: "第一种，也是最重要的之一",
      en: "Glycosylation happens in the endoplasmic reticulum and the Golgi apparatus. A sugar is attached either by an N-glycosidic bond to the free amide group of asparagine, or by an O-glycosidic bond to the hydroxyl of threonine or serine. The enzymes are highly specific glycosyltransferases, and their substrate is always a sugar nucleotide — a sugar activated by being joined to a nucleotide, which is what makes the transfer possible. **A glycosyltransferase recognises the structure of the polypeptide it is to decorate as well as which sugar it is carrying, so the same enzyme will not decorate the wrong protein.**",
      cn: "糖基化发生在内质网与高尔基体中。糖或者通过 N-糖苷键接到天冬酰胺的游离酰胺基上，或者通过 O-糖苷键接到苏氨酸或丝氨酸的羟基上。催化的酶是高度特异的糖基转移酶，而它们的底物永远是一个糖核苷酸 —— 即被连到核苷酸上而获得活化的糖，正是这一点让转移成为可能。**糖基转移酶识别的不只是自己带着哪种糖，还有它要装点的那条多肽的结构 —— 所以同一个酶不会去装点错误的蛋白。**",
      src: "B §4.3.3, p.112"
    },
    {
      link_en: "and the sugar tree is not built on the protein at all, to begin with",
      link_cn: "而这棵糖树，一开始根本不是长在蛋白上的",
      en: "Glycosylation runs in two phases. In the first, UDP-N-acetyl-D-glucosamine binds a high-molecular-weight lipid carrier called dolichol phosphate, and a series of reactions builds an activated oligosaccharide core on it, written Glc3Man9(GlcNAc)2-P-P-Dol. In the second, that finished core is transferred in one piece onto the protein, in the membrane part of the endoplasmic reticulum, while the chain is still being synthesised, forming the N-glycosidic bond. The signal marking an asparagine for it is a three-residue sequence: Asn-X-Ser or Asn-X-Thr, where X is any amino acid except proline. **Three residues of sequence are the whole instruction for where a sugar chain goes, so a glycosylation site can be read straight off a protein's sequence.**",
      cn: "糖基化分两个阶段。第一阶段，UDP-N-乙酰-D-葡糖胺结合到一个高分子量脂质载体（多萜醇磷酸）上，经一连串反应在它上面搭出一个活化的寡糖核心，写作 Glc3Man9(GlcNAc)2-P-P-Dol。第二阶段，造好的核心整块转移到蛋白上 —— 在内质网的膜结构部分，而肽链此时仍在合成中 —— 形成 N-糖苷键。标记某个天冬酰胺接受它的信号是一段三残基序列：Asn-X-Ser 或 Asn-X-Thr，其中 X 是除脯氨酸以外的任意氨基酸。**「糖链接在哪里」的全部指令就是三个残基，所以糖基化位点可以直接从蛋白序列上读出来。**",
      src: "B §4.3.3, p.112"
    },
    {
      link_en: "and the chain is then cut back down and rebuilt in the Golgi, where one small change redirects the whole protein",
      link_cn: "到了高尔基体，这条糖链又被剪回去、再重建 —— 而其中一处小改动，会把整个蛋白改道",
      en: "In the Golgi apparatus the sugar chain is trimmed: glucosidases take the D-glucose residues off and mannosidases take off a variable number of D-mannose residues. Further glycosyltransferases then add three more sugars in turn — N-acetyl-D-glucosamine, D-galactose, and sialic acids as the terminal ones. One standard core is therefore built for every protein and then cut back by different amounts and rebuilt differently, which is how a single starting structure yields many different finished sugar chains. Some D-mannose residues are instead phosphorylated at position 6, giving D-mannose-6-phosphate. **That single phosphate diverts the glycoprotein into the lysosomes: one group on one sugar decides whether a protein leaves the cell or reaches its digestive compartment.**",
      cn: "在高尔基体里，糖链被修剪：葡糖苷酶把 D-葡萄糖残基摘掉，甘露糖苷酶再摘掉数目不等的 D-甘露糖残基。随后其他糖基转移酶依次加上三种糖 —— N-乙酰-D-葡糖胺、D-半乳糖，以及作为末端糖的唾液酸。于是每个蛋白先得到同一个标准核心，再被剪掉不同的量、又按不同方式重建 —— 一个共同的起始结构，就这样长出许多种不同的成品糖链。另有一些 D-甘露糖残基会在第 6 位被磷酸化，生成 D-甘露糖-6-磷酸。**就这一个磷酸，把糖蛋白从分泌路线上拨开、送进溶酶体：一个糖上的一个基团，决定了蛋白是离开细胞、还是被送进细胞的消化隔室。**",
      src: "B §4.3.3, pp.112-113"
    },
    {
      link_en: "the second and third modifications both add oxygen to a side chain, and each one makes a vitamin indispensable",
      link_cn: "第二种和第三种修饰都是往侧链上添氧，而每一种都让某个维生素变得不可或缺",
      en: "Mammalian collagens commonly contain 4-hydroxyproline, 3-hydroxyproline and 5-hydroxylysine, made by three specific hydroxylases in the cisternae of the endoplasmic reticulum. The reaction needs oxygen, 2-oxoglutarate, L-ascorbic acid — which is vitamin C — and Fe2+; the 2-oxoglutarate is decarboxylated as it goes, and one oxygen atom from the carboxyl it releases ends up in the new hydroxyl group. Carboxylation was first detected in the plasma glycoproteins involved in blood clotting: a carboxylase on the inner wall of the endoplasmic reticulum membrane carboxylates glutamic acid residues to gamma-carboxyglutamyl groups, so that side chain now carries two carboxyl groups instead of one, and this carboxylase strictly requires vitamin K. **Two carboxyl groups on one short side chain make a pincer that grips a positive ion, which is what a clotting factor needs and a plain glutamate cannot provide.**",
      cn: "哺乳动物的胶原蛋白中常见 4-羟脯氨酸、3-羟脯氨酸、5-羟赖氨酸，由内质网池腔中三种特异的羟化酶生成。反应需要氧、2-氧戊二酸、L-抗坏血酸（也就是维生素 C）以及 Fe2+；反应进行时 2-氧戊二酸发生脱羧，它放出的那个羧基上的一个氧原子最终进入新生成的羟基。羧基化最早是在参与血液凝固的血浆糖蛋白中被发现的：内质网膜内壁上的一个羧化酶把谷氨酸残基羧基化成 γ-羧基谷氨酰基团，于是这条侧链带的是两个羧基而不是一个；这个羧化酶严格需要维生素 K。**一条短侧链上有两个羧基，就成了一把能夹住正离子的钳子 —— 这正是凝血因子所需要的，而普通的谷氨酸给不了。**",
      src: "B §4.3.3, p.113",
      beyond: true,
      beyondNote: "p.113 gives both reactions with their vitamin requirements. That scurvy is the disease of the failed hydroxylation, and that the two carboxyls exist in order to chelate calcium, are standard and are not named on that page."
    },
    {
      link_en: "the fourth modification was already met while folding, and it needs an oxidant the cell keeps in stock",
      link_cn: "第四种修饰在讲折叠时已经见过，而它需要一个细胞常备的氧化剂",
      en: "Oxidising the sulfhydryl groups of an adjacent pair of cysteine residues to cystine forms a disulfide bond, which fixes the chain in a particular configuration that is not always the energetically optimal one — a covalent bond is what lets a protein hold a shape it would otherwise fall out of. In proinsulin those bonds are formed by reaction with oxidised glutathione, the tripeptide gamma-glutamylcysteinylglycine, whose cysteine carries a reactive thiol: hydrogen atoms from proinsulin's own sulfhydryl groups are transferred onto the disulfide of that oxidised glutathione. Forming an S-S bond is not itself specific. **With more than two cysteines in a protein, which one pairs with which is essential to activity, so protein-disulfide-isomerase exchanges disulfide bonds until the pairing is the native one.**",
      cn: "把相邻一对半胱氨酸残基的巯基氧化成胱氨酸，就形成一根二硫键；其效果是把肽链固定在某一个特定构象里，而这个构象并不总是能量上最优的那个 —— 正是一根共价键，让蛋白能维持住一个它本来会滑出去的形状。在胰岛素原里，这些键是通过与氧化型谷胱甘肽反应形成的：谷胱甘肽是三肽 γ-谷氨酰-半胱氨酰-甘氨酸，其半胱氨酸上带着一个活泼的巯基；胰岛素原自身巯基上的氢原子被转移到那个氧化型谷胱甘肽的二硫键上。而生成一根 S–S 键本身并没有特异性。**当一个蛋白含有两个以上半胱氨酸时，哪个与哪个配对对活性至关重要 —— 于是蛋白质二硫键异构酶不断交换二硫键，直到配对与天然状态一致。**",
      src: "B §4.3.3, p.113"
    },
    {
      link_en: "fifth modification, and it goes after charge",
      link_cn: "第五种修饰，它冲着电荷去",
      en: "Methylation targets charged side chains. The carboxyl groups of glutamate and aspartate are methylated to O-methylesters, giving for example 4-methylglutamate. The amino groups of lysine, arginine and histidine become mono-, di- or tri-N-methyl derivatives; for lysine the epsilon-amino group goes in turn to epsilon-N-methyllysine, epsilon-N-dimethyllysine and finally epsilon-N-trimethyllysine, whose nitrogen carries three methyl groups. What it is for shows in two concrete cases: methylation regulates the bacterial proteins involved in chemotaxis, which is movement along a concentration gradient, and faulty methylation of sperm proteins is a relatively common cause of infertility. **Every one of these reactions puts a methyl group where a charge or a hydrogen bond used to be, which is how a small addition changes what a side chain can touch.**",
      cn: "甲基化针对的是带电的侧链。谷氨酸和天冬氨酸的羧基被甲基化成 O-甲酯，例如生成 4-甲基谷氨酸。赖氨酸、精氨酸、组氨酸的氨基则变成带一个、两个或三个甲基的 N-甲基衍生物；以赖氨酸为例，其 ε-氨基依次变成 ε-N-甲基赖氨酸、ε-N-二甲基赖氨酸，最后是氮上带三个甲基的 ε-N-三甲基赖氨酸。它有什么用，看两个具体例子：甲基化调节参与趋化性（即沿浓度梯度运动）的细菌蛋白；而精子蛋白甲基化出错，是不育症一个相当常见的原因。**这些反应无一例外，都是把一个甲基放到原本是电荷或氢键的位置上 —— 一个小小的添加，就这样改变了侧链能接触什么。**",
      src: "B §4.3.3, pp.113-114"
    },
    {
      link_en: "sixth modification, and one property sets it apart from the other five",
      link_cn: "第六种修饰，而有一条性质把它与另外五种区分开",
      recall_en: "glycosylation, hydroxylation, carboxylation, disulfide formation and methylation, all of which stay put once made",
      recall_cn: "糖基化、羟基化、羧基化、二硫键、甲基化 —— 这几种加上去就不动了",
      en: "Phosphorylating the hydroxyl of serine or threonine, or the phenolic hydroxyl of tyrosine, gives phosphoserine, phosphothreonine and phosphotyrosine; phosphorylating lysyl, arginyl or histidyl groups is substantially less common. Phosphorylation and dephosphorylation together are probably the most important mechanism there is for controlling the biological activity of proteins, above all of enzymes and protein hormones, and the direction has to be learned protein by protein: in some, adding the phosphate switches the conformation to a more active one; in others, removing it raises activity. A related reaction converts proteins to sulfoesters or amides — in gastrin, a stomach hormone, tyrosyl residues are esterified with sulfate. **A phosphate group can be taken off again by hydrolysis, so the other five modifications define what a protein is while phosphorylation is a switch that is thrown routinely in both directions.**",
      cn: "把丝氨酸或苏氨酸的羟基、或酪氨酸的酚羟基磷酸化，得到磷酸丝氨酸、磷酸苏氨酸、磷酸酪氨酸；赖氨酰、精氨酰、组氨酰基团的磷酸化则少见得多。磷酸化与去磷酸化合在一起，很可能是控制蛋白质（尤其是酶和蛋白质激素）生物活性最重要的机制；而方向必须一个蛋白一个蛋白地记：对有些蛋白，加上磷酸会把构象切换成活性更高的那一个；对另一些，反倒是把磷酸拿掉才提高活性。与之相关的一个反应把蛋白转成硫酸酯或酰胺 —— 例如在胃泌素（一种胃部激素）中，酪氨酰残基被硫酸酯化。**一个磷酸基团可以再被水解掉，所以另外五种修饰定义了这个蛋白「是什么」，而磷酸化是一个可以反复来回扳动的开关。**",
      src: "B §4.3.3, p.114",
      see: [{ id: "L-15-3-1", en: "a cascade built entirely out of adding and removing phosphates", cn: "一整条完全由「加磷酸、去磷酸」搭成的级联" }]
    },
    {
      link_en: "a protein that has been addressed, cut and edited still does not last forever. Now the other end of its life",
      link_cn: "一个已经写好地址、切好、改造好的蛋白，也并非永久存在。现在看它生命的另一端",
      en: "Most proteins in the body are constantly degraded and resynthesised, a process called protein turnover; human serum albumin has a half-life of 20 to 25 days. Hydrolytic cleavage of a peptide bond happens spontaneously in acidic or alkaline conditions, but in an organism it is catalysed by proteases, also called peptidases or proteinases, which belong to the C-N hydrolases, and the equilibrium of the reaction is markedly shifted towards cleavage. Proteases are classified in two independent ways. By the residue or cofactor in the active site there are four groups: serine proteases (trypsin, alpha-chymotrypsin, elastase, the coagulation factors), cysteine proteases (papain, the lysosomal cathepsins), aspartate proteases (pepsin, rennin) and metalloproteases (carboxypeptidase, collagenase). By where they attack the chain there are two: endopeptidases cut in the middle of a protein or a large polypeptide, and exopeptidases always remove one terminal residue at a time — aminopeptidases from the free amino end, carboxypeptidases from the free carboxyl end. **Those two layers are why digestion runs in stages, from protein to peptides to free amino acids, rather than all at once.**",
      cn: "体内大多数蛋白都在持续地被降解、又被重新合成，这个过程叫蛋白质更新（turnover）；人血清白蛋白的半衰期是 20 到 25 天。肽键的水解裂解在酸性或碱性条件下会自发发生，但在生物体内由蛋白酶（也叫肽酶或蛋白水解酶）催化，它们属于 C-N 水解酶类，而反应平衡明显偏向裂解一侧。蛋白酶有两套彼此独立的分类。按活性中心里的残基或辅因子分四类：丝氨酸蛋白酶（胰蛋白酶、α-糜蛋白酶、弹性蛋白酶、各种凝血因子）、半胱氨酸蛋白酶（木瓜蛋白酶、溶酶体组织蛋白酶）、天冬氨酸蛋白酶（胃蛋白酶、凝乳酶）、金属蛋白酶（羧肽酶、胶原酶）。按在链的什么位置下手分两类：内肽酶在蛋白或较大多肽的中间切，外肽酶则每次只切下一个末端残基 —— 氨肽酶从游离氨基那端，羧肽酶从游离羧基那端。**正是「按机制分四类、按位置分两类」这两层，使消化分阶段进行：蛋白 → 多肽 → 游离氨基酸，而不是一步到位。**",
      src: "B §5.1, pp.115-117"
    },
    {
      link_en: "and each of these enzymes cuts at its own kind of residue, at its own pH",
      link_cn: "而这些酶各自在自己那类残基上、在自己的 pH 下切割",
      en: "Pepsin works in the stomach at pH 1.5 to 2.5 and is unusual in cleaving on both sides of phenylalanine and of tyrosine, plus one fixed site between leucine and glutamate. Trypsin works in the small intestine at pH 7.5 to 8.5 and cleaves only after arginine or lysine. Alpha-chymotrypsin works in the small intestine at pH 7.8 and cleaves only after phenylalanine, tyrosine, tryptophan or leucine. Cathepsin B, found inside cells at pH 5 to 6, and papain, from the papaya plant at pH 8, share an identical specificity pattern — after arginine, after lysine, and beside phenylalanine — which fits their both being cysteine proteases. Among the exopeptidases, carboxypeptidase in the small intestine removes the residue bearing the free carboxyl terminus, and aminopeptidase in the intestinal mucosa removes the residue bearing the free amino terminus. **Two enzymes from utterly different organisms cut at the same residues because specificity follows the catalytic mechanism rather than the source.**",
      cn: "胃蛋白酶在胃里、pH 1.5 到 2.5 下工作，特别之处是它在苯丙氨酸和酪氨酸的两侧都能切，此外还有一个固定位点在亮氨酸与谷氨酸之间。胰蛋白酶在小肠、pH 7.5 到 8.5 下工作，只在精氨酸或赖氨酸之后切。α-糜蛋白酶在小肠、pH 7.8 下工作，只在苯丙氨酸、酪氨酸、色氨酸或亮氨酸之后切。组织蛋白酶 B（在细胞内，pH 5 到 6）与木瓜蛋白酶（来自番木瓜，pH 8）有着完全相同的特异性模式 —— 精氨酸之后、赖氨酸之后、以及苯丙氨酸旁边 —— 这与二者同属半胱氨酸蛋白酶相符。外肽酶方面，小肠里的羧肽酶切下带游离羧基末端的那个残基，肠黏膜里的氨肽酶切下带游离氨基末端的那个残基。**来自完全不同生物的两个酶会在相同的残基处下刀，因为特异性跟的是催化机制，而不是来源。**",
      src: "B §5.1, p.116"
    },
    {
      link_en: "and every one of the digestive ones is made switched off, which is the only reason the organs making them survive",
      link_cn: "而每一个消化酶都是以关闭状态被造出来的 —— 造它们的器官能活下来，全靠这一点",
      recall_en: "the hormone-driven digestion sequence already followed once, from gastrin and hydrochloric acid to enteropeptidase and trypsin",
      recall_cn: "已经跟过一遍的那条由激素驱动的消化序列：从胃泌素、盐酸，到肠肽酶与胰蛋白酶",
      en: "Most digestive enzymes are biosynthesised as proproteins, also called zymogens, and activated after translation by partial proteolysis. In the stomach, hydrochloric acid cleaves pepsinogen into five peptides plus a complex of pepsin with an inhibitor; below pH 5 that complex releases its peptide inhibitor, giving free pepsin, which degrades dietary proteins into larger polypeptides called peptones. In the small intestine, enteropeptidase with Ca2+ converts trypsinogen to trypsin, releasing the peptide Val-Asp-Asp-Asp-Asp-Lys, and trypsin then activates the rest: chymotrypsinogen to pi-chymotrypsin, releasing Ser-Arg, or to delta-chymotrypsin, releasing a 15-amino-acid polypeptide, and chymotrypsin itself converts both onward to the final active alpha-chymotrypsin; proelastase to elastase; procarboxypeptidase to carboxypeptidase. Peptones are then cut to oligopeptides by trypsin, chymotrypsin and elastase, to di- and tripeptides by the carboxy- and aminopeptidases, and finally to L-amino acids by dipeptidases and tripeptidases of the intestinal mucosal epithelium. The pancreas also secretes a trypsin inhibitor — a pancreatic protein that binds trypsin and holds it. **Binding trypsin protects it from breaking itself down and stops the other zymogens from being activated too early in the gut contents.**",
      cn: "大多数消化酶都以前体蛋白（也叫酶原）的形式合成，在翻译之后靠部分蛋白水解被激活。在胃里，盐酸把胃蛋白酶原裂解成五个肽段，外加一个「胃蛋白酶 + 抑制剂」的复合物；pH 低于 5 时该复合物放出它的肽抑制剂，给出游离的胃蛋白酶，后者把食物蛋白降解成较大的多肽，叫做胨（peptone）。在小肠里，肠肽酶加 Ca2+ 把胰蛋白酶原变成胰蛋白酶，同时放出肽段 Val-Asp-Asp-Asp-Asp-Lys；胰蛋白酶再去激活其余的：糜蛋白酶原变成 π-糜蛋白酶（放出 Ser-Arg）或 δ-糜蛋白酶（放出一个 15 个氨基酸的多肽），而糜蛋白酶自己又把这两者进一步转成最终有活性的 α-糜蛋白酶；弹性蛋白酶原变成弹性蛋白酶；羧肽酶原变成羧肽酶。胨随后被胰蛋白酶、糜蛋白酶和弹性蛋白酶切成寡肽，被羧肽酶与氨肽酶切成二肽和三肽，最后由肠黏膜上皮的二肽酶与三肽酶切成 L-氨基酸。胰腺在分泌这些酶原的同时，还分泌一种胰蛋白酶抑制剂 —— 一个结合并按住胰蛋白酶的胰腺蛋白。**把胰蛋白酶按住不放，既保护它不至于把自己拆掉，又防止其余那些酶原在肠内容物里被过早激活。**",
      src: "B §5.1, pp.117-118"
    },
    {
      link_en: "and what all that hydrolysis is for, in the end",
      link_cn: "而这一切水解，归根到底是为了什么",
      en: "The free amino acids released by protein hydrolysis form a metabolic pool with four fates: resynthesis into other peptides and proteins; biosynthesis of other products containing nitrogen, sulfur or rings — nucleotides, porphyrins, amines, melanin, creatinine, hormones; oxidation of the carbon skeleton for energy; and excretion of the nitrogen by way of ammonia and urea. About 200 grams of L-amino acids are absorbed into the human bloodstream per day. **For a heterotroph, amino acids are the only source of nitrogen, sulfur, aromatic rings and branched aliphatic structures, so dietary protein cannot be replaced by eating more of anything else.**",
      cn: "蛋白质水解释放出的游离氨基酸构成一个代谢库，有四个去向：重新合成为其他肽和蛋白质；生物合成其他含氮、含硫或含环的产物 —— 核苷酸、卟啉、胺类、黑色素、肌酐、激素；把碳骨架氧化以获取能量；以及经氨与尿素把氮排出体外。人体每天约有 200 克 L-氨基酸被吸收进入血液。**对异养生物而言，氨基酸是氮、硫、芳香环和支链脂肪结构的唯一来源，所以膳食蛋白无法靠多吃别的任何东西来替代。**",
      src: "B §5.1, pp.115, 118",
      see: [{ id: "5-2-3-4", en: "where each carbon skeleton enters the citric acid cycle once its nitrogen is gone", cn: "氮被卸掉之后，每副碳骨架各自从柠檬酸循环的哪个入口进去" }]
    }
  ],
  terms: [
    { en: "signal sequence and SRP", cn: "信号序列与 SRP",
      def_en: "An N-terminal stretch of amino acids, hydrophobic in its middle and charged at its end, encoded by the codons immediately after the initiation codon. SRP, the signal recognition particle, is a ribonucleoprotein that binds it and docks the ribosome at an SRP receptor on the endoplasmic reticulum, then is released for reuse. The hydrophobic middle forms a beta sheet with ribophorins I and II, opening the pore the growing chain threads through, and signal peptidase cuts the sequence off as soon as its end reaches the lumen.",
      def_cn: "一段位于 N 端的氨基酸，中段疏水、末端带电，由紧跟起始密码子的那些密码子编码。SRP（信号识别颗粒）是结合它的核糖核蛋白，把核糖体对接到内质网上的 SRP 受体，随后被释放、可再次使用。疏水中段与核糖蛋白 I、II 形成 β-折叠，打开正在生长的链穿过的孔道；信号序列的末端一到腔内，信号肽酶就把它切掉。" },
    { en: "the six covalent side-chain modifications", cn: "六种共价侧链修饰",
      def_en: "Glycosylation, hydroxylation, carboxylation, oxidation of sulfhydryl groups to disulfide bonds, methylation, and phosphorylation together with sulfation. Twenty amino acids are what a gene can specify, and these six are how a cell gets chemistry the code cannot write. Only phosphorylation is routinely undone, by hydrolysis, which is what makes it a switch while the other five define what a protein is.",
      def_cn: "糖基化、羟基化、羧基化、巯基氧化成二硫键、甲基化，以及磷酸化连同硫酸化。基因能指定的只有二十种氨基酸，而这六种正是细胞获得密码写不出的化学性质的办法。其中只有磷酸化可以按常规靠水解撤销 —— 这使它成为开关，而另外五种定义了这个蛋白「是什么」。" },
    { en: "Asn-X-Ser/Thr and mannose-6-phosphate", cn: "Asn-X-Ser/Thr 与甘露糖-6-磷酸",
      def_en: "Two pieces of address written into a sugar chain. Asn-X-Ser or Asn-X-Thr, with X anything except proline, is the three-residue signal marking an asparagine for N-linked glycosylation, so a site can be read off a sequence. Phosphorylating a mannose of the finished chain at position 6 diverts that glycoprotein off the secretory route and into the lysosome.",
      def_cn: "写在糖链上的两段地址。Asn-X-Ser 或 Asn-X-Thr（X 为除脯氨酸外的任意氨基酸）是标记某个天冬酰胺接受 N-连接糖基化的三残基信号，所以位点可以从序列上读出来。而把成品糖链上某个甘露糖的第 6 位磷酸化，就把这个糖蛋白从分泌路线拨去溶酶体。" },
    { en: "four mechanism classes, two site classes", cn: "四类机制、两类作用位点",
      def_en: "By the residue or cofactor in the active site: serine proteases (trypsin, alpha-chymotrypsin, elastase, coagulation factors), cysteine proteases (papain, lysosomal cathepsins), aspartate proteases (pepsin, rennin), metalloproteases (carboxypeptidase, collagenase). By where they cut: endopeptidases in the middle of a chain, exopeptidases one terminal residue at a time — aminopeptidases from the free amino end, carboxypeptidases from the free carboxyl end.",
      def_cn: "按活性中心的残基或辅因子分：丝氨酸蛋白酶（胰蛋白酶、α-糜蛋白酶、弹性蛋白酶、凝血因子）、半胱氨酸蛋白酶（木瓜蛋白酶、溶酶体组织蛋白酶）、天冬氨酸蛋白酶（胃蛋白酶、凝乳酶）、金属蛋白酶（羧肽酶、胶原酶）。按切割位置分：内肽酶在链中间切，外肽酶每次切一个末端残基 —— 氨肽酶从游离氨基端，羧肽酶从游离羧基端。" },
    { en: "the zymogen cascade and its activation peptides", cn: "酶原级联及其激活肽",
      def_en: "Hydrochloric acid cuts pepsinogen into five peptides plus a pepsin-inhibitor complex, which releases the inhibitor below pH 5. Enteropeptidase with Ca2+ converts trypsinogen to trypsin, releasing Val-Asp-Asp-Asp-Asp-Lys; trypsin then makes pi-chymotrypsin (releasing Ser-Arg) or delta-chymotrypsin (releasing a 15-residue polypeptide), and chymotrypsin converts both to alpha-chymotrypsin; also proelastase to elastase and procarboxypeptidase to carboxypeptidase. A pancreatic trypsin inhibitor is secreted alongside them.",
      def_cn: "盐酸把胃蛋白酶原切成五个肽段外加一个「胃蛋白酶-抑制剂」复合物，后者在 pH 低于 5 时放出抑制剂。肠肽酶加 Ca2+ 把胰蛋白酶原变成胰蛋白酶，放出 Val-Asp-Asp-Asp-Asp-Lys；胰蛋白酶再做出 π-糜蛋白酶（放出 Ser-Arg）或 δ-糜蛋白酶（放出一个 15 残基多肽），糜蛋白酶把两者都转成 α-糜蛋白酶；此外弹性蛋白酶原变弹性蛋白酶、羧肽酶原变羧肽酶。胰腺还同时分泌一种胰蛋白酶抑制剂。" },
    { en: "the amino acid pool", cn: "氨基酸库",
      def_en: "Four fates for the free amino acids that hydrolysis releases: resynthesis into other proteins; biosynthesis of nitrogen-, sulfur- and ring-containing products such as nucleotides, porphyrins, amines, melanin, creatinine and hormones; oxidation of the carbon skeleton for energy; and excretion of the nitrogen through ammonia and urea. About 200 grams are absorbed into human blood per day, and for a heterotroph they are the only source of nitrogen, sulfur, aromatic rings and branched aliphatic structures.",
      def_cn: "水解释放出的游离氨基酸有四个去向：重新合成其他蛋白；合成含氮、含硫、含环的产物，如核苷酸、卟啉、胺类、黑色素、肌酐、激素；把碳骨架氧化取能；以及经氨与尿素排出氮。人体每天约吸收 200 克进入血液；而对异养生物来说，它们是氮、硫、芳香环与支链脂肪结构的唯一来源。" }
  ]
};

/* ------------------------------------------------- 氧结合蛋白：一个被关起来的铁 ---- */
window.BIOLITE_SPINE["key:oxygen-binding-proteins"] = {
  assumed: ["protein", "amino acid", "enzyme", "gene", "cell", "DNA", "hydrogen bond",
            "pH", "ligand", "buffer", "helix", "alpha helix", "subunit", "tetramer",
            "dimer", "conformation", "ion pair", "salt bridge", "side chain",
            "histidine", "glutamate", "aspartate", "valine", "lysine", "proton",
            "blood", "plasma", "lung", "tissue", "muscle", "brain", "neuron",
            "erythrocyte", "cytosol", "mitochondria", "endoplasmic reticulum",
            "nucleus", "membrane", "oxidation", "reduction", "electron",
            "electron transport", "respiratory chain", "cytochrome", "catalase",
            "peroxidase", "chlorophyll", "photosynthesis", "magnesium", "copper",
            "iron", "free radical", "carbon dioxide", "carbonic anhydrase",
            "bicarbonate", "nitric oxide", "allosteric enzyme", "equilibrium",
            "partial pressure", "logarithm", "anaemia", "malaria", "seizure",
            "coma", "smoking", "altitude", "fetus", "placenta", "haemoglobin",
            "myoglobin", "heme", "porphyrin", "prosthetic group", "biotin",
            "avidin", "calmodulin", "archaea", "bacteria", "eukaryote", "nematode",
            "capillary", "urea"],
  nodeTitle_en: "Oxygen-binding proteins: one ring, one caged iron, four sites acting as one",
  nodeTitle_cn: "氧结合蛋白：同一个环、一个被关起来的铁，四个位点当成一个用",
  title_en: "Why oxygen needs a caged iron, what else the same ring is used for, and how four separate sites become one switch",
  title_cn: "为什么运氧非要一个被关起来的铁、同一个环还被拿去干什么，以及四个独立位点怎么变成一个开关",
  steps: [
    {
      en: "A porphyrin is a relatively complex structure of four pyrrole rings — five-membered heterocycles each containing one nitrogen — joined to one another by four methine bridges, written =CH-. Its rich system of conjugated double bonds, meaning alternating single and double bonds running right round the ring, predetermines absorption in the visible part of the spectrum. **Every porphyrin compound is therefore coloured, and nature has reused this one ring many times over for jobs that have very little in common.**",
      cn: "卟啉是一个相对复杂的结构：四个吡咯环（各含一个氮的五元杂环）由四座次甲基桥（=CH-）彼此相连。它那套丰富的共轭双键体系 —— 也就是绕环一周交替出现的单键与双键 —— 预先决定了它在可见光区有吸收。**于是每一种卟啉化合物都是有颜色的；而自然界把这同一个环反复借用了很多次，去干一些彼此关系不大的活。**",
      src: "B §6.3, p.146",
      see: [{ id: "6-3-2", en: "how that ring is built, from glycine and succinyl-CoA", cn: "这个环是怎么从甘氨酸和琥珀酰-CoA 搭起来的" }]
    },
    {
      link_en: "and the nine jobs it does split cleanly in two, on a single criterion",
      link_cn: "而它承担的九份工作，按一个判据干净地分成两半",
      en: "Seven of the nine porphyrin proteins cycle their metal ion through oxidation states, which is what a valence change means: plant peroxidase and animal peroxidase, which oxidise using hydrogen peroxide on a heme cycling Fe2+ and Fe3+; catalase, which decomposes two hydrogen peroxide into two water and one oxygen; cytochrome oxidase, the terminal oxidation enzyme, whose prosthetic group is a heme together with copper ions; cytochrome c and cytochrome b, both carrying electrons; and the oxygenases, which introduce oxygen into substrates. The remaining two do not: haemoglobin, transporting oxygen on a heme whose iron stays Fe2+ because binding oxygen is not itself a redox event, and chlorophyll, converting light energy to chemical energy on a porphyrin holding a magnesium ion. **One scaffold serves two entirely different purposes, and which one it is serving is decided by whether the metal at its centre changes valence.**",
      cn: "九种卟啉蛋白中有七种会让金属离子在不同氧化态之间循环 —— 这就是「价态变化」的意思：植物过氧化物酶和动物过氧化物酶，它们借助过氧化氢进行氧化，血红素上的铁在 Fe2+ 与 Fe3+ 之间往返；过氧化氢酶，把两分子过氧化氢分解成两分子水加一分子氧；细胞色素氧化酶，末端氧化的那个酶，辅基是血红素加上铜离子；细胞色素 c 与细胞色素 b，两者都在传递电子；以及加氧酶，把氧引入底物。剩下两种不变价：血红蛋白，用一个铁始终保持 Fe2+ 的血红素运输氧，因为结合氧本身并不是一次氧化还原事件；以及叶绿素，在一个含镁离子的卟啉上把光能转成化学能。**同一副骨架服务于两种完全不同的用途，而它此刻服务的是哪一种，由「中心的金属会不会变价」决定。**",
      src: "B §6.3, p.146",
      see: [{ id: "L-19-1-1", en: "the cytochromes — the same heme deliberately cycling Fe2+ and Fe3+", cn: "细胞色素 —— 同一个血红素被刻意用来在 Fe2+ 与 Fe3+ 之间循环" }]
    },
    {
      link_en: "take the one that does not change valence, and ask why a metal is needed there at all",
      link_cn: "拿那个不变价的来说，先问一句：那里为什么非要一个金属",
      en: "Oxygen dissolves badly in water, so serum cannot carry enough of it dissolved, and oxygen moving through tissue by diffusion stops working beyond a few millimetres. Any animal larger than that needs a protein that picks oxygen up and hands it over. **No amino acid side chain in a protein binds oxygen reversibly, so the job has to go to a transition metal — one that can hold a small molecule and let it go again — and the metal used is iron.**",
      cn: "氧在水里溶解度很差，光溶在血清里带不了足够的量；而氧靠扩散穿过组织，超过几毫米就不管用了。比这更大的动物，就必须有一个能把氧接过来、又能把氧交出去的蛋白质。**蛋白质里没有任何一种氨基酸侧链能可逆地结合氧，所以这活儿只能交给过渡金属 —— 一种能抓住小分子、又能把它松开的金属 —— 而被选中的是铁。**",
      src: "A p.148"
    },
    {
      link_en: "and iron arrives with two problems of its own",
      link_cn: "而铁自己带着两个麻烦来",
      en: "Free iron drives the formation of hydroxyl radicals, which are highly reactive fragments that damage DNA and other large molecules. And a free Fe2+ ion is oxidised to Fe3+ the first time it meets oxygen, while Fe3+ binds no oxygen at all, so a free iron atom is good for exactly one use. Iron is therefore caged twice while it works. The first cage is heme, a flat protoporphyrin ring whose four nitrogen atoms grip one Fe2+ and donate electrons that help keep it in the Fe2+ state; those four bonds leave two more, one on each face of the ring. The second cage is the protein, which buries the heme deep enough that nothing in solution reaches those two bonds and parks a conserved histidine permanently on one of them — the proximal His, His93, also written His F8 because it is the eighth residue of helix F. **One coordination bond is left over, and that one is the oxygen site: venous blood is dark purple and arterial blood bright red according to whether it is occupied.**",
      cn: "游离的铁会促成羟自由基（活性极高、会损伤 DNA 和其他大分子的碎片）的生成。而游离的 Fe2+ 只要碰上一次氧就被氧化成 Fe3+，而 Fe3+ 根本不结合氧 —— 所以一个游离的铁原子只够用一次。因此铁在干活时被关了两层。第一层是血红素：一个扁平的原卟啉环，四个氮原子夹住一个 Fe2+，并给出电子帮它维持在 Fe2+ 状态；这四条键之外还剩两条，环的每一面各一条。第二层是外面的蛋白：它把血红素埋得很深，溶液里的东西够不到那两条键，同时把一个高度保守的组氨酸永久停在其中一条上 —— 近端组氨酸 His93，也写作 His F8，因为它是 F 螺旋的第八个残基。**只剩下一条配位键，那条就是氧的结合位点：静脉血暗紫、动脉血鲜红，差别就在于它有没有被占上。**",
      src: "A pp.148-149"
    },
    {
      link_en: "one cofactor, and more than one job",
      link_cn: "同一个辅因子，不止一份工作",
      en: "Globins are a family rather than a single protein — proteins built on one shared fold, found in eukaryotes of every class and in archaea and bacteria, all descended from one ancestor. Humans have at least four. Myoglobin is one chain with one heme and stores oxygen in muscle, most abundantly in seals and whales, which need a reserve for a long dive. Haemoglobin is four chains and transports oxygen in blood. Neuroglobin sits in neurons and helps protect the brain when oxygen or blood supply runs short. Cytoglobin sits at high concentration in blood-vessel walls, where it regulates the level of nitric oxide — a signalling gas — so a globin can be a regulator as well as a carrier. Myoglobin is 153 residues with about 78 percent of them inside its helices, and the nematode Caenorhabditis elegans carries genes for 33 different globins. **What the family shares is shape and not sequence: eight alpha-helical segments joined by bends, a pattern called the globin fold, while the sequences have drifted far apart.**",
      cn: "球蛋白（globin）是一整个家族，而不是某一个蛋白 —— 它们共用同一种折叠，见于各类真核生物以及古菌和细菌，全都来自同一个祖先。人身上至少有四种。肌红蛋白：单链、单个血红素，在肌肉里储存氧，在海豹和鲸身上最多，因为长时间潜水需要一份存货。血红蛋白：四条链，在血液里运输氧。神经球蛋白：在神经元里，帮助大脑在缺氧或缺血时少受损伤。胞球蛋白：高浓度地待在血管壁里，在那里调节一氧化氮（一种信号气体）的水平 —— 所以球蛋白可以是调节者，不必只当搬运工。肌红蛋白共 153 个残基，其中约 78% 落在它那些螺旋里；线虫 Caenorhabditis elegans 身上带着编码 33 种不同球蛋白的基因。**这个家族共有的是形状而不是序列：八段 α-螺旋由转角连起来，这个式样叫球蛋白折叠，而序列早已各奔东西。**",
      src: "A p.149"
    },
    {
      link_en: "before anything can be compared, binding needs a number",
      link_cn: "在比较任何东西之前，先得能给「结合」一个数",
      en: "The dissociation constant Kd is the concentration of ligand — the molecule the protein binds — at which half of the protein's binding sites are filled, in moles per litre. Note the direction, which is the thing most often reversed: a lower Kd means tighter binding, because a protein that grips hard needs less ligand around to fill half its sites, and reaching 90 percent occupancy takes nine times Kd, which is why a saturation curve flattens so slowly. Real values span ten orders of magnitude, from avidin holding biotin at around a femtomolar up to calmodulin holding calcium in the micromolar range, and a quoted value is only good for the salt concentration and pH it was measured at. Oxygen is a gas, so the experiment sets the partial pressure of oxygen above the liquid instead, since the amount dissolved is proportional to that pressure; putting pressure where concentration was turns Kd into P50. **Myoglobin's P50 is 0.26 kilopascals, which is very low, and something that holds oxygen this tightly stores it rather than delivering it: it will not let go until the oxygen around it is nearly gone.**",
      cn: "解离常数 Kd 就是「配体（蛋白要结合的那个分子）浓度达到多少时，蛋白的结合位点被占了一半」，单位是摩尔每升。注意方向，这是最常被搞反的一点：Kd 越小，结合越紧 —— 因为抓得越牢的蛋白，周围只要更少的配体就能填满一半位点；而要达到 90% 的占据，浓度得是 Kd 的九倍，这就是饱和曲线为什么变平得那么慢。真实数值横跨十个数量级：亲和素抓生物素约在飞摩尔量级，钙调蛋白抓钙则在微摩尔量级；而报出来的数值只对测定时的盐浓度和 pH 有效。氧是气体，所以实验改测液面上方氧的分压，因为溶进去的量与这个分压成正比；把浓度换成分压，Kd 就变成 P50。**肌红蛋白的 P50 只有 0.26 千帕，非常低；而抓氧抓得这么紧的东西是储存氧的，不是输送氧的：不到周围的氧快耗光，它不会松手。**",
      src: "A pp.150-151"
    },
    {
      link_en: "and the protein around the heme is not merely a box for it",
      link_cn: "而血红素外面那层蛋白，不只是个盒子",
      recall_en: "the proximal His took the fifth coordination bond three steps up; this is the residue facing it across the ring",
      recall_cn: "三步之前第五条配位键被近端组氨酸占走了；这里说的是隔着环正对着它的那个残基",
      en: "On the face of the heme opposite the proximal His sits a second histidine, the distal His, His64 or His E7, which never coordinates the iron and does two separate jobs. First, it is the defence against carbon monoxide: on free heme, carbon monoxide binds more than 20,000 times better than oxygen, and if heme behaved that way inside a protein a person would be killed by the trace of it their own metabolism turns out every day. The iron-oxygen complex is much more polar than the iron-carbon monoxide complex, so the distal His hydrogen-bonds to bound oxygen and stabilises it electrostatically while offering carbon monoxide nothing; that raises myoglobin's oxygen affinity about 500-fold and cuts carbon monoxide's advantage to about 40-fold. Some invertebrate haemoglobins put two hydrogen-bonding groups in the pocket and end up binding oxygen more tightly than carbon monoxide, reversing the free-heme order outright. **Second, the distal His is the door: the heme is buried, side chains flex constantly and open transient cavities, and this residue swings open and shut on a nanosecond timescale.**",
      cn: "在血红素上与近端组氨酸相对的那一面，坐着第二个组氨酸：远端组氨酸 His64，也写作 His E7。它从不与铁配位，却干着两件不同的事。第一，它是对付一氧化碳的防线：在游离的血红素上，一氧化碳的结合比氧强 20,000 倍以上；如果血红素在蛋白里也这么干，一个人自身代谢每天产生的那一点点一氧化碳就足以致命。铁-氧复合物的极性远高于铁-一氧化碳复合物，所以远端组氨酸能与结合上的氧形成氢键、以静电方式稳住它，而对一氧化碳什么也不给；结果是把肌红蛋白对氧的亲和力提高约 500 倍，把一氧化碳的优势压到约四十倍。某些无脊椎动物的血红蛋白在口袋里放了两个能形成氢键的基团，结果结合氧比结合一氧化碳还紧，把游离血红素上的次序整个颠倒过来。**第二，远端组氨酸是那扇门：血红素埋得很深，侧链一直在快速摆动、打开一个个瞬时空腔，而这个残基以纳秒级的节奏一开一合。**",
      src: "A p.153"
    },
    {
      link_en: "myoglobin stores. Delivery is a different molecule and a different problem",
      link_cn: "肌红蛋白管储存。输送是另一个分子、另一个问题",
      en: "Haemoglobin is a tetramer — four chains, one heme each — of relative molecular mass 64,500, roughly spherical and nearly 5.5 nanometres across, with two alpha chains of 141 residues and two beta chains of 146 in the adult form. All four subunits look much like each other and much like myoglobin, and yet fewer than half the residues are identical between an alpha and a beta chain, and only 27 are identical across all three. It is dissolved at about 34 percent by weight in the cytosol of erythrocytes, which are 6 to 9 micrometres across and biconcave, throw out their nucleus, mitochondria and endoplasmic reticulum as they mature, cannot divide afterwards, and last about 120 days. **Blood leaving the lungs is about 96 percent saturated and blood returning past a tissue about 64 percent, so each 100 millilitres hands over about a third of its load — 6.5 millilitres of oxygen gas.**",
      cn: "血红蛋白是一个四聚体 —— 四条链，每条一个血红素 —— 相对分子质量 64,500，大致呈球形，直径近 5.5 纳米；成人形式由两条 141 个残基的 α 链和两条 146 个残基的 β 链组成。四个亚基彼此长得很像，也很像肌红蛋白；然而 α 与 β 之间相同的残基还不到一半，三者全都相同的只有 27 个。它以约 34%（重量比）溶在红细胞的胞质里 —— 红细胞直径 6 到 9 微米、双凹形，成熟过程中把细胞核、线粒体和内质网都扔掉，此后不能分裂，寿命约 120 天。**离开肺的血氧饱和度约 96%，流经组织后回来的约 64%，所以每 100 毫升血把自己携带的氧交出去大约三分之一 —— 折合 6.5 毫升氧气。**",
      src: "A pp.153-154"
    },
    {
      link_en: "one third is exactly what a single-affinity protein cannot deliver",
      link_cn: "而「三分之一」恰恰是单一亲和力的蛋白交不出来的东西",
      recall_en: "myoglobin's curve three steps up: a rectangular hyperbola, the only shape one independent binding site can give",
      recall_cn: "三步之前肌红蛋白那条曲线：一条直角双曲线，单个独立结合位点唯一能给出的形状",
      en: "In the lungs the partial pressure of oxygen is about 13.3 kilopascals and in a working tissue about 4. A protein with a hyperbolic binding curve has one affinity and is trapped by it: bind tightly and it loads in the lungs and refuses to unload in the tissue; bind loosely and it unloads but never loads. Haemoglobin escapes by having two affinities, a low-affinity form and a high-affinity form, and it shifts from the first to the second as successive oxygen molecules bind, so its curve is a blend of two hyperbolas — S-shaped, or sigmoid. The first oxygen binds weakly to a subunit in the low-affinity form, that binding is communicated to the neighbouring subunits and makes the next switch easier, and the fourth binds far more tightly than the first did. The vocabulary follows: a protein in which binding at one site changes binding at another is allosteric, the effect is homotropic when the molecule doing the changing is the ordinary ligand itself and heterotropic when it is another molecule. **A protein with a single binding site cannot give a sigmoid curve even if binding changes its shape, because each such molecule binds on its own — cooperativity needs several sites inside one molecule.**",
      cn: "肺里氧分压约 13.3 千帕，正在干活的组织里约 4 千帕。双曲线型的蛋白只有一个亲和力，于是被它困住：抓得紧，就在肺里装得上、在组织里卸不下；抓得松，就卸得下、装不上。血红蛋白的出路是拥有两个亲和力：一个低亲和力形式、一个高亲和力形式；随着一个个氧分子结合上来，它从前者转向后者，所以它的曲线是两条双曲线的混合 —— S 形，即 sigmoid。第一个氧弱弱地结合到一个还处在低亲和力形式的亚基上，这次结合被传给相邻亚基、让下一次转换更容易，第四个氧结合得比第一个紧得多。术语随之而来：一个位点的结合会改变另一个位点结合性质的蛋白叫变构蛋白；引起改变的分子就是那个普通配体本身时叫同促，是另一种分子时叫异促。**只有一个结合位点的蛋白，哪怕结合会改变它的形状，也给不出 S 形曲线，因为这样的每个分子都各结合各的 —— 协同性要求同一个分子里有好几个位点。**",
      src: "A p.156",
      see: [{ id: "3-7", en: "allosteric enzymes — the same switch used to control a reaction rate", cn: "别构酶 —— 同一个开关被用来控制反应速率" }]
    },
    {
      link_en: "the two forms have names, structures, and a mechanical link between them",
      link_cn: "这两个形式各有名字、各有结构，而且中间有一条力学链条",
      en: "The low-affinity form is called T, for tense, and the high-affinity form R, for relaxed. T is held together by a larger number of ion pairs, many of them across the contacts between unlike subunits, and it predominates when no oxygen is bound. The contacts are unequal, and the inequality is the mechanism: the alpha1-beta1 contact uses more than 30 residues and never moves, so mild urea treatment splits the tetramer into intact alpha-beta dimers, while the alpha1-beta2 contact uses 19 residues and is the one that slides. Max Perutz worked out the chain of events, and it is purely mechanical: in T the porphyrin ring is slightly puckered and the iron sticks out of it towards the proximal His; oxygen binding pulls the iron down into the plane of a now flatter ring; the proximal His and the F helix attached to it are dragged along; and that displacement resets the ion pairs at the alpha1-beta2 contact, so the alpha-beta pairs rotate past each other. That rotation also narrows a pocket between the two beta subunits, which turns out later to have a tenant. **One small molecule landing on one iron atom is converted, through a rigid ring and one helix, into a movement of the whole protein.**",
      cn: "低亲和力的那个形式叫 T 态（tense，紧张），高亲和力的叫 R 态（relaxed，松弛）。T 态由更多的离子对维系，其中很多位于不同类型亚基之间的接触面上；没有氧结合时占主导的就是它。这些接触面并不对等，而这种不对等正是机制所在：α1-β1 接触用了 30 多个残基、从不移动，所以用尿素温和处理会把四聚体拆成完好的 αβ 二聚体；α1-β2 接触只用 19 个残基，而它才是会滑动的那一个。Max Perutz 把事件链推了出来，而这条链纯粹是力学的：T 态下卟啉环略微皱曲，铁从环里向近端组氨酸那一侧突出来；氧一结合，就把铁拉进如今变平的环平面里；与铁相连的近端组氨酸连同 F 螺旋一起被拽着走；这个位移又重新排布了 α1-β2 接触面上的离子对，于是两对 αβ 彼此转动滑过。这次转动还会让两个 β 亚基之间的一个口袋变窄 —— 那个口袋后面会证明是有房客的。**一个小分子落在一个铁原子上，经由一个刚性的环和一根螺旋，被换算成整个蛋白的一次运动。**",
      src: "A pp.155-156"
    },
    {
      link_en: "cooperativity can be seen. Can it be measured, and how do four subunits switch together?",
      link_cn: "协同性看得见了。那它能不能被测出来 —— 以及四个亚基究竟怎么一起转换？",
      en: "Archibald Hill put a number on it in 1910: plot the logarithm of the ratio of filled to empty sites against the logarithm of oxygen pressure and the result is a straight line, whose slope the equation predicts should equal the number of binding sites. It does not. The measured slope reports how strongly the sites interact and is called the Hill coefficient; a value of 1 means no cooperativity at all, above 1 is positive cooperativity, and below 1 is negative cooperativity, where one bound ligand hinders the next, of which well-documented examples are rare. It could equal the number of sites only if every site filled at the same instant, so it is always smaller: haemoglobin has four sites and its highest observed value is about 3, and reading that 3 as a count of subunits is a plain error. Two models describe how the switching happens. **Monod, Wyman and Changeux's concerted model of 1965 has all subunits switching at one instant, so no partly switched molecule exists; Koshland's sequential model of 1966 switches them one at a time.**",
      cn: "Archibald Hill 在 1910 年给它配上了一个数：把「已占位点与空位点之比」的对数对「氧分压」的对数作图，得到一条直线；按方程，它的斜率应该等于结合位点数。事实并非如此。实测的斜率报告的是这些位点彼此相互作用有多强，被称为 Hill 系数；等于 1 表示完全没有协同，大于 1 是正协同，小于 1 是负协同（一个配体的结合妨碍下一个），而有充分记载的例子很少见。它只有在所有位点同一瞬间被填满时才可能等于位点数，所以它永远更小：血红蛋白有四个位点，观测到的最大值约为 3，而把这个 3 当作亚基数目来读是一个干脆的错误。描述「怎么一起转换」的有两个模型。**Monod、Wyman 与 Changeux 1965 年的协同模型让所有亚基在同一瞬间转换，因而不存在部分转换的分子；Koshland 1966 年的序变模型则允许它们一个一个地转。**",
      src: "A pp.157-160",
      openQuestion_en: "Which of the two actually describes haemoglobin has proven very difficult to settle by experiment, and sixty years on the question is still open; the concerted model is the all-or-none limiting case of the sequential one, so they are not exclusive.",
      openQuestion_cn: "这两个模型究竟哪一个描述的是真实的血红蛋白，在实验上被证明极难区分；六十年过去仍无定论。协同模型正是序变模型的「全或无」极限情形，所以两者并不互斥。",
      see: [{ id: "3-7", en: "the same two models applied to allosteric enzymes", cn: "同样这两个模型被用在别构酶上" }]
    },
    {
      link_en: "a switch that helps you can also be turned against you",
      link_cn: "帮得了你的开关，也能被反过来对付你",
      recall_en: "the same cooperativity behind the sigmoid curve, running the wrong way",
      recall_cn: "还是 S 形曲线背后那个协同性，只是这次跑反了方向",
      en: "Carbon monoxide is colourless and odourless and is one of the commonest causes of death by poisoning — nearly 4,000 deaths a year in the United States alone. On haemoglobin it forms carboxyhaemoglobin, and because it binds tightly, that builds up over time from a steady low-level source: a healthy person sits at 1 percent or less, many smokers at 3 to 8 percent and chain-smokers up to 15, which is why a smoker exposed to a source develops symptoms sooner. Symptoms are rare below 10 percent, 15 percent brings a mild headache, 20 to 30 percent a severe headache with nausea, dizziness, confusion and disturbed vision, 30 to 50 percent serious neurological signs, near 50 percent unconsciousness and coma, and death usually follows above 60 percent. A person with anaemia manages reasonably well on half the normal amount of haemoglobin, yet losing half of it to carbon monoxide can kill, and treatment follows straight from the binding: removed from the source, carboxyhaemoglobin falls with a half-time of 2 to 6.5 hours, 100 percent oxygen through a mask speeds that about fourfold, and 100 percent oxygen at 3 atmospheres brings it down to tens of minutes. **Once carbon monoxide occupies one or two subunits it raises the oxygen affinity of the subunits still free, so that tetramer loads in the lungs and then releases almost nothing in the tissues.**",
      cn: "一氧化碳无色无味，是最常见的中毒致死原因之一 —— 仅美国每年就有近 4,000 人死于它。它与血红蛋白结合形成碳氧血红蛋白；由于结合很紧，只要有一个持续的低水平来源，它就会随时间累积：健康人在 1% 或以下，许多吸烟者在 3%–8%，重度吸烟者可达 15% —— 这正是吸烟者在同样暴露下症状出现更早的原因。低于 10% 很少有症状；15% 轻度头痛；20%–30% 剧烈头痛并伴恶心、头晕、意识模糊、视觉障碍；30%–50% 出现严重神经系统体征；接近 50% 意识丧失、昏迷；超过 60% 通常死亡。贫血的人靠正常量一半的血红蛋白也能过得相当好，可把一半血红蛋白输给一氧化碳却可能致命；而治疗方案直接从结合推出来：离开污染源后碳氧血红蛋白下降的半衰期是 2 到 6.5 小时，面罩给 100% 氧可加快约四倍，3 个大气压下给 100% 氧则缩短到几十分钟。**一氧化碳一旦占住四聚体的一两个亚基，就会提高其余空着的亚基对氧的亲和力 —— 这样的四聚体在肺里装得上，到了组织却几乎什么都不放。**",
      src: "A pp.157-159"
    },
    {
      link_en: "the switch has three deliberate controls on it, and the first two are waste products",
      link_cn: "这个开关上装了三个有意的控制阀，头两个是废物",
      en: "About 40 percent of the protons and 15 to 20 percent of the carbon dioxide produced in the tissues travel back to the lungs and kidneys on haemoglobin, the rest handled by dissolved carbon dioxide and by the bicarbonate buffer of the plasma. The two cargoes are linked: carbon dioxide is not very soluble, so erythrocytes are packed with carbonic anhydrase, which hydrates it into bicarbonate before bubbles can form, and that hydration releases protons. So a tissue working hard becomes more acidic and richer in carbon dioxide at once. Blood pH is 7.6 in the lungs and 7.2 in the tissues, and two named mechanisms carry the effect, neither of them at the heme: a proton protonates His146, the carboxyl-terminal residue of each beta chain, and the protonated form makes an ion pair with Asp94, one of the very ion pairs that hold T together; and carbon dioxide attaches as a carbamate to the free alpha-amino group at the start of each globin chain, giving carbaminohaemoglobin, a reaction that itself releases a proton and adds further salt bridges holding T. **Protons and carbon dioxide both stabilise T and so lower oxygen affinity, which aims the delivery system: oxygen comes off wherever acid and carbon dioxide are being made.**",
      cn: "组织里产生的质子约有 40%、二氧化碳约有 15%–20% 是搭着血红蛋白回到肺和肾的，其余由溶解态二氧化碳和血浆碳酸氢盐缓冲体系承担。这两样货是连在一起的：二氧化碳溶解度不高，所以红细胞里塞满了碳酸酐酶，它在气泡形成之前就把二氧化碳水合成碳酸氢根，而这个水合会放出质子。于是一块正在卖力工作的组织同时变得更酸、二氧化碳更多。血液 pH 在肺里是 7.6、在组织里是 7.2；承担这个效应的是两条有名有姓的机制，而且都不在血红素上：质子使每条 β 链的羧基末端残基 His146 质子化，质子化后的它与 Asp94 形成一个离子对 —— 而这正是维系 T 态的那些离子对之一；二氧化碳则以氨基甲酸酯的形式接到每条球蛋白链起始端那个游离的 α-氨基上，生成氨基甲酰血红蛋白，这个反应本身又放出一个质子，并额外形成盐桥继续把 T 态按住。**质子与二氧化碳都稳定 T 态、因而降低对氧的亲和力，这就给输送系统装上了准星：哪里在产酸、产二氧化碳，氧就卸在哪里。**",
      src: "A pp.160-161"
    },
    {
      link_en: "and the third control is the tenant of that pocket",
      link_cn: "而第三个控制阀，就是那个口袋的房客",
      recall_en: "the pocket between the beta subunits that narrows during the T-to-R rotation",
      recall_cn: "T 到 R 那次转动中会变窄的、两个 β 亚基之间的那个口袋",
      en: "2,3-bisphosphoglycerate, BPG, is a small and heavily negatively charged molecule present at high concentration inside erythrocytes, and it lowers haemoglobin's oxygen affinity sharply. Its site is that cavity between the two beta subunits in the T state, lined with positively charged side chains that grip its negative charges; only one BPG binds per tetramer against four oxygen, and the cavity closes on oxygenation, so it works by holding the molecule in T. Its absence is the sharpest way to see this: with no BPG haemoglobin sits mostly in R, loads beautifully and fails to release oxygen in the tissues. Two situations make it physiology. At sea level a healthy person delivers about 38 percent of the maximum the blood could carry; moved abruptly to 4,500 metres delivery falls to about 30 percent, but within hours erythrocyte BPG rises from about 5 to about 8 millimolar, affinity falls, and delivery returns to about 37 percent — the whole adaptation being one small metabolite changing concentration, and it reverses on the way down. A fetus must pull oxygen out of its mother's blood, so it makes gamma chains in place of beta chains, and the resulting tetramer binds BPG much more weakly. **Two haemoglobins in one body differ in oxygen affinity purely by how hard they answer a regulator, with nothing changed at the oxygen site itself.**",
      cn: "2,3-二磷酸甘油酸（BPG）是一个带很多负电荷的小分子，在红细胞里浓度很高，它大幅降低血红蛋白对氧的亲和力。它的结合位点就是 T 态下两个 β 亚基之间的那个空腔：腔壁排着带正电的侧链，正好抓住它的负电荷；每个四聚体只结合一分子 BPG（而氧是四个），氧合后这个腔就闭合了 —— 所以它起作用的方式是把分子按在 T 态。看清这一点最锐利的办法是看它缺席时：没有 BPG，血红蛋白主要停在 R 态，装得漂亮，却在组织里放不出氧来。两个情境把它变成生理学。海平面上健康人交付的氧约为血液最大携氧量的 38%；突然被带到 4,500 米，交付量掉到约 30%，但在几小时之内红细胞里的 BPG 从约 5 毫摩尔升到约 8 毫摩尔，亲和力下降，交付量回到约 37% —— 整套适应不过是一个小分子代谢物换了个浓度，回到海平面后它会逆转。胎儿必须从母亲血里把氧抢过来，于是它合成 γ 链来代替 β 链，由此得到的四聚体与 BPG 结合得弱得多。**同一个身体里的两种血红蛋白，氧亲和力之别纯粹来自「对一个调节物应答得有多强」，而氧结合位点本身什么也没改。**",
      src: "A pp.161-162",
      see: [{ id: "7-8-3", en: "BPG's other life — the cofactor of phosphoglycerate mutase in glycolysis", cn: "BPG 的另一重身份 —— 糖酵解中磷酸甘油酸变位酶的辅因子" }]
    },
    {
      link_en: "and one changed residue on the outside turns the same molecule into a disease",
      link_cn: "而外表面上换掉一个残基，同一个分子就变成了一种病",
      en: "Nearly 500 genetic variants of haemoglobin are known in the human population, almost all rare, most differing by a single residue and most with minor effects. HbS is the one where the effect is not minor: glutamate at position 6 of the beta chain is replaced by valine. Position 6 lies on the outer surface, and exchanging a charged side chain for a hydrophobic one puts a sticky patch there, which makes the molecule associate with its neighbours. The mechanics follow: the fibres stretch the erythrocyte into a long thin sickle shape; sickled cells are fragile and rupture, so haemoglobin falls to about half the normal 15 to 16 grams per 100 millilitres, which is the anaemia; and the deformed cells block capillaries, which is the severe pain and the organ damage. One copy gives sickle cell trait, with about 1 percent of erythrocytes sickling on deoxygenation and normal life provided vigorous exercise and other circulatory stress are avoided, and the allele is unusually common in parts of Africa because one copy confers significant resistance to lethal forms of malaria. **HbS stays soluble while it carries oxygen and polymerises into long tubular fibres when it is deoxygenated, so sickling is triggered by the very oxygen-release step this whole chain has been about.**",
      cn: "人群中已知的血红蛋白遗传变异体近 500 种，几乎都很罕见，多数只差一个残基，效应通常轻微。HbS 是效应不轻微的那一个：β 链第 6 位的谷氨酸被缬氨酸取代。第 6 位在分子的外表面上，把一个带电的侧链换成疏水的，就在那里放了一块粘性斑块，于是分子开始与邻居粘在一起。之后就是力学：纤维把红细胞撑成细长的镰刀形；镰变细胞脆弱易破，血红蛋白掉到正常 15–16 克/100 毫升的约一半，这就是贫血；而变形的细胞堵住毛细血管，这就是剧痛和器官损伤。只带一个拷贝的人有镰状细胞性状：脱氧时约 1% 的红细胞镰变，只要避免剧烈运动和其他循环压力就能过正常生活；这个等位基因在非洲部分地区异常常见，因为带一个拷贝能对致死型疟疾提供显著的抵抗力。**HbS 带着氧时是可溶的，一脱氧就聚合成长长的管状纤维 —— 所以镰变正是被这一整条线索一直在讲的那个「释放氧」的步骤触发的。**",
      src: "A p.163",
      see: [{ id: "2-2-1", en: "the Glu-to-Val substitution as the textbook case of molecular pathology", cn: "谷氨酸变缬氨酸，分子病理学的标准案例" }]
    }
  ],
  terms: [
    { en: "porphyrin proteins and the valence criterion", cn: "卟啉蛋白与「变不变价」这个判据",
      def_en: "Nine uses of one ring, split by whether the central metal cycles through oxidation states. Seven do: plant and animal peroxidase, catalase, cytochrome oxidase (heme plus copper), cytochrome c, cytochrome b, and the oxygenases. Two do not: haemoglobin, whose Fe2+ stays Fe2+ because binding oxygen is not a redox event, and chlorophyll, whose porphyrin holds magnesium and captures light.",
      def_cn: "同一个环的九种用法，按「中心金属会不会在氧化态之间循环」分开。七种会：植物与动物过氧化物酶、过氧化氢酶、细胞色素氧化酶（血红素加铜）、细胞色素 c、细胞色素 b，以及加氧酶。两种不会：血红蛋白（Fe2+ 始终是 Fe2+，因为结合氧不是氧化还原事件）和叶绿素（卟啉中心是镁，负责捕光）。" },
    { en: "proximal His and distal His", cn: "近端组氨酸与远端组氨酸",
      def_en: "His93, also written His F8, takes the fifth coordination bond of the iron and holds it; when oxygen pulls the iron into the ring plane, this residue and the F helix behind it are dragged along, which is how one bound molecule becomes a movement of the whole protein. His64, His E7, never coordinates the iron: it hydrogen-bonds to bound oxygen, raising affinity about 500-fold and cutting carbon monoxide's advantage to about 40-fold, and it swings open and shut on a nanosecond timescale as the gate of the pocket.",
      def_cn: "His93（也写作 His F8）占住铁的第五条配位键并抓住它；氧把铁拉进环平面时，这个残基连同它背后的 F 螺旋一起被拽走 —— 这就是「一个分子的结合变成整个蛋白的一次运动」的由来。His64（His E7）从不与铁配位：它与结合上的氧形成氢键，把亲和力提高约 500 倍、把一氧化碳的优势压到约 40 倍；同时它以纳秒级节奏开合，充当口袋的门。" },
    { en: "Kd, P50 and the Hill coefficient", cn: "Kd、P50 与 Hill 系数",
      def_en: "Kd is the ligand concentration at which half the binding sites are filled; lower means tighter, and 90 percent occupancy needs nine times that value. P50 is the same idea for a gas, a partial pressure — myoglobin's is 0.26 kilopascals. The Hill coefficient is the slope of a Hill plot and reports how strongly sites interact, always smaller than the number of sites: haemoglobin has four and reaches about 3, so reading it as a subunit count is an error.",
      def_cn: "Kd 是「结合位点被占一半时的配体浓度」；越小结合越紧，占到 90% 需要它的九倍。P50 是同一想法用于气体时的分压 —— 肌红蛋白的是 0.26 千帕。Hill 系数是 Hill 图的斜率，报告位点之间相互作用有多强，永远小于位点数：血红蛋白有四个位点、系数约 3，所以把它读成亚基数目是错的。" },
    { en: "T state and R state", cn: "T 态与 R 态",
      def_en: "Haemoglobin's two conformations. T, for tense, is held by more ion pairs and has low oxygen affinity; R, for relaxed, has high affinity. Oxygen pushes the equilibrium towards R while protons, carbon dioxide and BPG push it back towards T. The alpha1-beta1 contact of more than 30 residues never moves; the alpha1-beta2 contact of 19 residues is the one that slides.",
      def_cn: "血红蛋白的两种构象。T 态（紧张）由更多离子对维系，对氧亲和力低；R 态（松弛）亲和力高。氧把平衡推向 R，而质子、二氧化碳和 BPG 把它推回 T。用了 30 多个残基的 α1-β1 接触面从不移动；只用 19 个残基的 α1-β2 接触面才是会滑动的那一个。" },
    { en: "Bohr effect", cn: "Bohr 效应",
      def_en: "Protons and carbon dioxide both stabilise the T state and so lower oxygen affinity, which makes oxygen come off preferentially where acid and carbon dioxide are being made — that is, where it is being used. Blood pH is 7.6 in the lungs and 7.2 in the tissues. The largest single contributor is protonated His146 of the beta chain pairing with Asp94; carbon dioxide binds as a carbamate at each chain's alpha-amino group, releasing a further proton.",
      def_cn: "质子与二氧化碳都稳定 T 态、因而降低氧亲和力，于是氧优先在「正在产酸、产二氧化碳」的地方卸下 —— 也就是正在用氧的地方。血液 pH 在肺里 7.6、在组织里 7.2。单项贡献最大的是 β 链上质子化的 His146 与 Asp94 配成离子对；二氧化碳则以氨基甲酸酯的形式结合在每条链的 α-氨基上，又放出一个质子。" },
    { en: "HbS and sickle cell anaemia", cn: "HbS 与镰状细胞贫血",
      def_en: "Glutamate at position 6 of the beta chain replaced by valine puts a sticky hydrophobic patch on the outer surface. Deoxygenated HbS polymerises into fibres that deform the cell; oxygenated HbS and normal haemoglobin do not, so sickling is triggered by oxygen release itself. One copy gives sickle cell trait, with about 1 percent of cells sickling, and significant resistance to lethal malaria.",
      def_cn: "β 链第 6 位的谷氨酸换成缬氨酸，在分子外表面放上一块疏水的粘性斑块。脱氧的 HbS 聚合成纤维、把细胞撑变形；带氧的 HbS 和正常血红蛋白都不会 —— 所以镰变是被「放氧」这一步本身触发的。带一个拷贝的人有镰状细胞性状，约 1% 的细胞镰变，同时对致死型疟疾有显著抵抗力。" }
  ]
};
