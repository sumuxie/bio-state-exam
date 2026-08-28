/* Merged spines — fatty acid and lipid biosynthesis, and fat mobilization.
   速通简洁版, ONE spine per TOPIC.

   TOPIC 1, key:fatty-acid-biosynthesis — eleven member nodes: L-21-1-1 (Lehninger,
   the only one that already carried a spine) and 8-3-1, 8-3-2, 8-3-3, 8-3-4, 8-3-5,
   8-3-6, 8-3-7, 8-3-8, 8-3-9, 10-9 (Biochemie, none of which did). They come out here
   as one chain of twenty-six steps.

   The step count is set by the material, not the other way round. Eleven nodes carry
   three separate subjects — the fatty acid synthase and its control, the assembly of
   glycerolipids from phosphatidic acid, and the terpenoid route to cholesterol — and
   a fourteen-step chain could only cover them by dropping named enzymes. Nothing is
   dropped. Every member node is carried by at least one step:

     8-3-1   steps 1, 2, 6        compartments, acetyl-CoA sources, the carboxylase
     8-3-2   steps 7, 8           ACP, its two SH groups, loading and condensation
     8-3-3   steps 9, 10, 11, 12  steps III-VI, seven cycles, release, thiokinase
     8-3-4   steps 13, 17         the overall balance, palmitate's three fates
     8-3-5   step 22              activated precursors, phosphatidic acid
     8-3-6   step 23              diacylglycerol and CDP-diacylglycerol, two families
     8-3-7   step 24              the three phases, phase A to mevalonate
     8-3-8   step 25              phase B, IPP through squalene and phytoene
     8-3-9   steps 24, 26         HMG-CoA reductase as control point, phase C
     10-9    steps 7, 16, 22      the three differences, bound intermediates, glycerol
     L-21-1-1 steps 1, 3, 4, 5, 6, 7, 9, 11, 12, 14, 15, 17, 18, 19, 20, 21

   The merge rule is the one already used for the oxidation chain: the Lehninger
   telling is the backbone where both books cover the same ground, because it carries
   the mechanism and the control; the other book is folded in wherever it ADDS — the
   six numbered steps and their enzymes by name, the CO2 balance, the whole of
   glycerolipid assembly, and the whole of the terpenoid route, none of which the
   Lehninger section reaches. Where the two disagree, both readings are given and the
   disagreement is stated: the site of chain elongation (step 17), and the printed
   'via malonyl-CoA' label on the first condensation of the mevalonate route (step 24).

   This chain is the mirror of key:fatty-acid-oxidation, which is already merged. It
   reaches back to it with recall_* at steps 2, 9 and 15 and must not contradict it.
   Two places where they touch: the malonyl-CoA interlock, which the oxidation chain
   sees from the gate side and this one from the synthesis side; and the claim that
   beta-oxidation is a source of acetyl-CoA for synthesis, which step 15 qualifies.

   TOPIC 2, key:fat-mobilization — two member nodes, 8-4-1 and 8-4-4-1, neither with a
   spine. Six steps, because two nodes carry two reactions: a lipase hydrolysis and a
   two-step activation. Node coverage: 8-4-1 in steps 1 and 2, 8-4-4-1 in steps 3-6.

   `src` letters: "A" is Lehninger 8e, cited by its own page numbers; "B" is
   Biochemie, cited by section and page. A step built from both carries both,
   separated by a middle dot. Lehninger chapter 17 is not extracted anywhere in this
   repository; the two A citations in the mobilization chain come from the already
   merged oxidation chain and nothing was added to them.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so L-21-1-1's own spine still resolves and is left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------- 脂质的生物合成 ---- */
window.BIOLITE_SPINE["key:fatty-acid-biosynthesis"] = {
  assumed: ["ATP", "ADP", "AMP", "Pi", "coenzyme A", "NAD+", "NADH", "NADP+", "NADPH",
            "FAD", "CTP", "CMP", "UDP", "pyrophosphate", "phosphate", "enzyme", "gene",
            "isozyme", "substrate", "active site", "cofactor", "coenzyme", "vitamin",
            "biotin", "kinase", "isomerase", "phosphatase", "transferase", "reductase",
            "dehydratase", "carboxylase", "synthase", "polypeptide", "protein",
            "domain", "dimer", "amino acid", "cysteine", "serine", "residue",
            "cytosol", "cytoplasm", "mitochondrion", "mitochondrial matrix",
            "inner mitochondrial membrane", "membrane", "transporter", "organelle",
            "endoplasmic reticulum", "chloroplast", "plastid", "peroxisome",
            "citric acid cycle", "citrate synthase", "oxaloacetate", "malate",
            "pyruvate", "glycolysis", "pentose phosphate pathway", "Calvin cycle",
            "respiratory chain", "beta oxidation", "beta-oxidation", "acetyl-CoA",
            "acyl-CoA", "malonyl-CoA", "palmitoyl-CoA", "thioester", "ester",
            "ester bond", "hydrolysis", "oxidation", "reduction", "condensation",
            "decarboxylation", "oxidative decarboxylation", "carboxyl group",
            "carboxylic acid", "methyl group", "hydroxyl group", "aldehyde",
            "carbonyl", "alcohol", "double bond", "cis", "trans", "isomer",
            "structural isomer", "saturated fatty acid", "unsaturated fatty acid",
            "fatty acid", "palmitate", "palmitic acid", "stearate", "glycerol",
            "glyceraldehyde", "triacylglycerol", "triglyceride", "phospholipid",
            "glycolipid", "lipid", "sterol", "cholesterol", "steroid", "carbohydrate",
            "sugar", "glucose", "galactose", "inositol", "choline", "ethanolamine",
            "carnitine", "adipocyte", "adipose tissue", "liver", "hepatocyte", "diet",
            "blood", "hormone", "glucagon", "epinephrine", "allosteric",
            "feedback inhibition", "phosphorylation", "covalent modification",
            "electron", "electron microscope", "flavoprotein", "cytochrome",
            "ferredoxin", "molecular oxygen", "oxygen", "water", "carbon dioxide",
            "aspirin", "platelet", "inflammation", "asthma", "atherosclerosis",
            "anabolism", "catabolism", "vitamin A", "retinol", "beta-carotene"],
  nodeTitle_en: "Fatty acid and lipid biosynthesis",
  nodeTitle_cn: "脂肪酸与脂质的生物合成",
  title_en: "Why building a fatty acid begins with a transport problem, what the machine that builds it never lets go of, and how the same acetyl-CoA becomes a stored fat, a membrane phospholipid or cholesterol",
  title_cn: "为什么造一条脂肪酸要从一个运输问题开始，造它的那台机器从不松手的是什么，以及同一个乙酰-CoA 怎样分别变成储存脂肪、膜磷脂和胆固醇",
  steps: [
    {
      en: "Fatty acids are assembled in the cytosol, while their raw material acetyl-CoA is made inside the mitochondrion, and the inner mitochondrial membrane will not let acetyl-CoA across. In a eukaryotic cell the apparatus is split three ways: the basic pathway that builds a saturated chain up to sixteen or eighteen carbons runs in the cytoplasm, an elongase system extends chains beyond that, and a desaturase system bound to the endoplasmic reticulum turns saturated chains into unsaturated ones. **Before any chemistry starts there is a transport problem, and solving it answers two more: where the reducing power comes from, and how a cell stops itself building and burning fatty acids at once.**",
      cn: "脂肪酸是在胞质里组装的，而它的原料乙酰-CoA 是在线粒体内部造出来的，线粒体内膜又不放乙酰-CoA 通过。在真核细胞里，这套装置分在三个区室：从头造出直到十六或十八个碳的饱和链的基本途径在细胞质里跑，一套延长酶系统负责把链接得更长，而结合在内质网上的一套去饱和酶系统把饱和链变成不饱和链。**在任何化学反应开始之前，先摆着一个运输问题；解开它顺带回答另外两个问题：还原力从哪里来，以及细胞怎样不让自己一边造脂肪酸一边烧脂肪酸。**",
      src: "B §8.3, p.187 · A p.745"
    },
    {
      link_en: "so where does that acetyl-CoA come from in the first place",
      link_cn: "那这个乙酰-CoA 一开始是从哪来的",
      recall_en: "beta-oxidation, the chain this one is the mirror of",
      recall_cn: "β-氧化——这条链正是它的镜像",
      en: "Acetyl-CoA is the basic building unit of de novo fatty acid synthesis, and it has two sources. One is fatty acids themselves, taken apart by beta-oxidation. The other, and the main one, is carbohydrate. **Most of the carbon in a newly built fatty acid arrives from carbohydrate rather than from other fat: glycolysis makes pyruvate, and oxidative decarboxylation of pyruvate gives acetyl-CoA and CO2.**",
      cn: "乙酰-CoA 是从头合成脂肪酸的基本建构单元，它有两个来源。一个是脂肪酸自己，被 β-氧化拆出来。另一个，也是主要的那个，是糖类。**新造出来的脂肪酸里，大部分碳来自糖类而不是来自别的脂肪：糖酵解生成丙酮酸，丙酮酸氧化脱羧给出乙酰-CoA 和 CO2。**",
      src: "B §8.3, p.187"
    },
    {
      link_en: "the acetyl group leaves the mitochondrion in disguise",
      link_cn: "乙酰基是乔装出线粒体的",
      en: "Inside the mitochondrion acetyl-CoA condenses with oxaloacetate to give citrate, which is the ordinary citrate synthase reaction of the citric acid cycle. Citrate does have a transporter in the inner membrane, so it crosses. In the cytosol an enzyme called citrate lyase spends one ATP to split it back into acetyl-CoA and oxaloacetate. **An acetyl group is carried out as part of a larger molecule the membrane is willing to pass and rebuilt on the far side, and that is the outward leg of the citrate shuttle.**",
      cn: "在线粒体内部，乙酰-CoA 与草酰乙酸缩合生成柠檬酸，这就是柠檬酸循环里那个普通的柠檬酸合酶反应。柠檬酸在内膜上是有转运体的，所以它过得去。到了胞质，一个叫柠檬酸裂解酶的酶花掉一个 ATP，把它重新劈回乙酰-CoA 和草酰乙酸。**乙酰基是作为一个更大分子的一部分被带出去的——那个分子恰好是膜肯放行的——再在另一边重新拆装出来；这就是柠檬酸穿梭出去的那一程。**",
      src: "A pp.751-752"
    },
    {
      link_en: "and the return leg is the half that pays",
      link_cn: "回程才是给整条途径买单的那一半",
      en: "Oxaloacetate cannot simply go back, because the inner membrane has no oxaloacetate transporter. So it is reduced to malate, and malic enzyme — the enzyme that converts malate to pyruvate and CO2 — generates NADPH as it does so. **One palmitate costs 14 NADPH, and this return leg supplies roughly half of them while the pentose phosphate pathway supplies the rest, so one shuttle delivers both carbon and reducing power.**",
      cn: "草酰乙酸不能就这么回去，因为内膜上根本没有草酰乙酸转运体。于是它被还原成苹果酸，再由苹果酸酶——那个把苹果酸转化为丙酮酸和 CO2 的酶——在此过程中生成 NADPH。**合成一分子软脂酸要花 14 个 NADPH，这条回程提供其中大约一半，其余由磷酸戊糖途径提供：同一条穿梭既送来了碳，也送来了一半还原力。**",
      src: "A p.752",
      see: [{ id: "7-7-1", en: "the pentose phosphate pathway, source of the other half", cn: "磷酸戊糖途径，另一半还原力的来源" }]
    },
    {
      link_en: "and one measurement explains why building and burning can share a compartment",
      link_cn: "有一组实测数字解释了「造」和「烧」为什么能共处一室",
      en: "Anabolism — the building of molecules — runs on NADPH, while catabolism, their breakdown, runs on NAD+. In a liver cell's cytosol the ratio [NADPH]/[NADP+] is about 75, a strongly reducing setting, while [NADH]/[NAD+] in that same cytosol is about 8 x 10^-4. **Two pools of nearly identical molecules are held at opposite redox poise in one compartment, which lets reductive fatty acid synthesis and oxidative glucose breakdown proceed side by side.** In a plant the reducing pool sits in the chloroplast, and fatty acid synthesis moves there with it.",
      cn: "合成代谢——把分子造出来——靠 NADPH，而分解代谢，也就是把分子拆掉，靠 NAD+。在肝细胞的胞质里，[NADPH]/[NADP+] 约为 75，是一个强还原性的环境；而同一份胞质里的 [NADH]/[NAD+] 约为 8 x 10^-4。**两个结构几乎相同的库，在同一个隔室里被维持在完全相反的氧化还原电位上，还原性的脂肪酸合成与氧化性的葡萄糖分解才能并肩进行而互不干扰。** 在植物里，还原性的那个库位于叶绿体，脂肪酸合成也跟着搬过去。",
      src: "A p.751"
    },
    {
      link_en: "now the committed step, and the ATP spent on it looks wasted until the step after",
      link_cn: "接下来是承诺步骤——花在它上面的那个 ATP 看着像白花，直到下一步",
      en: "Acetyl-CoA carboxylase attaches a carboxyl group to acetyl-CoA and gives malonyl-CoA, which is acetyl-CoA carrying one extra carboxyl: CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi. The enzyme needs the vitamin cofactor biotin, and the printed equation gives Mn2+ as its divalent cation where most references give Mg2+. In animals one polypeptide carries all three parts — a biotin carrier protein, a biotin carboxylase and a transcarboxylase — and the biotin rides a long flexible arm that swings the carboxyl from the first active site to the second. The reaction is irreversible and rate-limiting. **That carboxyl is put on only so that it can come off again: eliminating it at the next step is what makes the condensation favourable, so the ATP buys thermodynamics rather than carbon.** The running prose spells the product 'matonyl-CoA' rather than malonyl-CoA: that is almost certainly a print error, since the structural equation immediately following it unambiguously draws the malonate skeleton, and it is reported throughout here as malonyl-CoA.",
      cn: "乙酰-CoA 羧化酶把一个羧基接到乙酰-CoA 上，生成丙二酰-CoA，也就是多带一个羧基的乙酰-CoA：CO2 + 乙酰-CoA + ATP -> 丙二酰-CoA + ADP + Pi。这个酶需要维生素辅因子生物素；印出来的方程式给的二价阳离子是 Mn2+，而多数参考书给的是 Mg2+。在动物体内，一条多肽同时带着三个部分——生物素载体蛋白、生物素羧化酶、转羧酶——生物素装在一条长而柔软的臂上，把羧基从第一个活性位点甩到第二个。反应不可逆，而且限速。**这个羧基装上去，只是为了能再卸下来：它在下一步被消去，正是让那次缩合变得有利的原因；所以那个 ATP 买的不是碳，买的是热力学。** 正文把这个产物拼成了「matonyl-CoA」而不是 malonyl-CoA：这几乎肯定是印刷错误，因为紧随其后的结构方程式明确画出了丙二酸（malonate）骨架；本主线通篇按丙二酰-CoA 处理。",
      src: "B §8.3, pp.187-188 · A pp.745-746"
    },
    {
      link_en: "and the chemistry runs on one machine that never lets go",
      link_cn: "而这些化学反应跑在一台从不松手的机器上",
      en: "Synthesis runs on a soluble multienzyme complex whose core is an acyl carrier protein, abbreviated ACP, which binds acetate and malonate through thioester bonds. One ACP carries two different sulfhydryl groups: a peripheral one from a cysteine residue of the polypeptide, and a central one at the end of a phosphopantetheine arm — the same structural unit found forming part of free coenzyme A, a cross-reference made explicitly rather than left to be noticed. ACP is in effect that same prosthetic arm permanently tethered to a dedicated carrier protein instead of floating free as CoA. In mammals the seven catalytic activities sit as seven domains of one large polypeptide — fatty acid synthase I — which works as a dimer of two independently operating subunits. **Because ACP belongs to the same chain as every active site it feeds, no intermediate is ever released into solution, and only the finished sixteen- and eighteen-carbon acyl-CoA leave the complex.** Bacteria and plants use separable enzymes for the same chemistry, which is why antibiotics and herbicides can be aimed at their version alone.",
      cn: "合成跑在一个可溶的多酶复合体上，它的核心是一个酰基载体蛋白，缩写为 ACP，能通过硫酯键结合乙酸和丙二酸。一个 ACP 带着两个不同的巯基：一个外周的，来自多肽链上的半胱氨酸残基；一个中心的，长在磷酸泛酰巯基乙胺臂的末端——它与游离辅酶 A 中的结构单元相同，这一处对照是被明确写出来的，而不是留给读者自己发现。ACP 实质上就是同一条辅基臂被永久固定在一个专门的载体蛋白上，而不像 CoA 那样游离飘着。在哺乳动物中，那七种催化活性是同一条大多肽上的七个结构域——脂肪酸合酶 I——它以二聚体形式工作，两个亚基各自独立运转。**由于 ACP 与它所服务的每一个活性位点都在同一条链上，中间产物从不被释放到溶液里，离开复合体的只有做完的十六碳和十八碳酰基-CoA。** 细菌和植物用可分开的一组酶干同样的活，这正是抗生素和除草剂能只瞄准它们那一版的原因。",
      src: "B §8.3, p.188 · §10.1.2, p.220 · A pp.746-748"
    },
    {
      link_en: "loading first, then the one reaction that makes the chain longer",
      link_cn: "先装料，再是那个真正把链接长的反应",
      en: "Loading uses two transferases: acetyltransferase puts an acetyl group on the peripheral cysteine sulfhydryl, and malonyltransferase puts a malonyl group on the central phosphopantetheine sulfhydryl. Acetyltransferase acts only in the first, initiating round; in every later round only malonyltransferase is used. Then beta-ketoacyl-ACP synthase condenses malonyl-ACP with acetyl-ACP, releasing CO2 and a free ACP sulfhydryl and giving acetoacetyl-ACP — the first four-carbon intermediate of the growing chain. **Losing CO2 from the malonyl group is what drives that condensation, which is why a cell paid an ATP to put the carboxyl there one step earlier.**",
      cn: "装料用两个转移酶：乙酰基转移酶把乙酰基装到外周的半胱氨酸巯基上，丙二酰基转移酶把丙二酰基装到中心的磷酸泛酰巯基乙胺巯基上。乙酰基转移酶只在第一轮起始时出场；此后每一轮只用丙二酰基转移酶。接着 β-酮脂酰-ACP 合成酶把丙二酰-ACP 与乙酰-ACP 缩合，放出 CO2 和一个游离的 ACP 巯基，生成乙酰乙酰-ACP——生长链上第一个四碳中间体。**推动这次缩合的，正是丙二酰基上脱掉的那个 CO2；这就是细胞上一步要花一个 ATP 把羧基装上去的理由。**",
      src: "B §8.3, pp.188-189 · A p.746"
    },
    {
      link_en: "and the three reactions that follow are ones already known",
      link_cn: "接下来那三个反应，其实早就学过了",
      recall_en: "the same three reactions as beta-oxidation, taken in the reverse order",
      recall_cn: "和 β-氧化是同样的三个反应，只是顺序反过来",
      en: "Three reactions finish the round: beta-ketoacylreductase reduces the keto group of acetoacetyl-ACP with NADPH to beta-hydroxybutyryl-ACP; beta-hydroxyacyl dehydratase removes water and leaves an alpha,beta-unsaturated acyl-ACP; and alpha,beta-enoylreductase saturates that double bond with a second NADPH, giving butyryl-ACP — a saturated four-carbon acyl group. **Reduction, dehydration and reduction are the reactions of beta-oxidation run in reverse order, so anyone who knows how a fatty acid is taken apart already knows three quarters of how one is built.**",
      cn: "三个反应把这一轮做完：β-酮脂酰还原酶用 NADPH 把乙酰乙酰-ACP 的酮基还原成 β-羟丁酰-ACP；β-羟脂酰脱水酶脱去一分子水，留下一个 α,β-不饱和的脂酰-ACP；α,β-烯酰还原酶再用第二个 NADPH 把那个双键还原，给出丁酰-ACP——一个饱和的四碳酰基。**还原、脱水、再还原，就是 β-氧化那三个反应倒着跑；所以会拆脂肪酸的人，已经会了造脂肪酸的四分之三。**",
      src: "B §8.3, p.189 · A p.746",
      see: [{ id: "8-4-4-2", en: "beta-oxidation, the same three reactions the other way", cn: "β-氧化：同样三个反应，反着走" }]
    },
    {
      link_en: "and one more move frees the machine for another round",
      link_cn: "再有一个动作，机器就腾出来跑下一轮了",
      en: "The finished four-carbon butyryl group is transferred from the central phosphopantetheine sulfhydryl back to the peripheral cysteine one, which leaves the central sulfhydryl empty for the next malonyl group. That new malonyl condenses with the butyryl chain to give six carbons, and the same reduction, dehydration and reduction follow. **A chain therefore grows exactly two carbons at a time, from a fixed methyl end towards a carboxyl end that moves outwards as each new two-carbon unit is added.**",
      cn: "做好的四碳丁酰基从中心的磷酸泛酰巯基乙胺巯基上被转回外周的半胱氨酸巯基，中心那个巯基就空出来，等着下一个丙二酰基。新的丙二酰基与丁酰链缩合，得到六个碳，然后是同样的还原、脱水、再还原。**于是一条链每次恰好长两个碳：甲基端固定不动，而羧基端随着每加一个二碳单元就往外推一截。**",
      src: "B §8.3, p.189"
    },
    {
      link_en: "count the carbons, because the count is easy to get backwards",
      link_cn: "把碳数一遍——这个数很容易记反",
      en: "Seven condensation cycles in all build the sixteen-carbon palmitoyl-ACP. Those sixteen carbons amount to eight two-carbon acetyl units, yet acetyl-CoA itself enters the reaction directly only once, as the primer of the first round; every other two-carbon piece arrives by way of malonyl-CoA. **The primer is never carboxylated, and its methyl and carboxyl carbons end as C-16 and C-15 of palmitate, which is why the balance needs 8 acetyl-CoA but only 7 carboxylations and 7 ATP.**",
      cn: "总共七轮缩合，造出十六碳的软脂酰-ACP。这十六个碳相当于八个二碳的乙酰单位，可乙酰-CoA 本身只以自己的身份直接参加过一次反应——第一轮的引物；其余每一个二碳片段都是经丙二酰-CoA 送来的。**引物从不被羧化，它的甲基碳和羧基碳最后成了软脂酸的 C-16 和 C-15；这就是收支表要 8 个乙酰-CoA、却只要 7 次羧化和 7 个 ATP 的原因。**",
      src: "B §8.3, p.189 · A p.749"
    },
    {
      link_en: "and the chain stops at sixteen carbons",
      link_cn: "链停在十六个碳",
      en: "A thioesterase activity built into the same multifunctional protein hydrolyses the finished sixteen-carbon chain off ACP, which is how synthesis ends. A free fatty acid cannot enter a further pathway as it stands, so thiokinase re-activates it to palmitoyl-CoA before it is built into a lipid. **Why the synthase halts at sixteen carbons rather than carrying on is stated as not well understood, and repeating that as it stands is a stronger answer than inventing a reason.**",
      cn: "同一条多功能蛋白里内置的一个硫酯酶活性，把做好的十六碳链从 ACP 上水解下来，合成就此结束。游离脂肪酸原样进不了下一条途径，所以硫激酶要把它重新活化成软脂酰-CoA，才能拿去造脂质。**至于合酶为什么停在十六个碳而不继续往下接，书上只说原因尚不清楚；照原样把这句说出来，比现编一个理由更有力。**",
      src: "B §8.3, p.189 · A p.750",
      openQuestion_en: "Why chain elongation by the synthase halts at sixteen carbons is not understood.",
      openQuestion_cn: "合酶为什么恰好在十六个碳处停止延长，目前没有解释。"
    },
    {
      link_en: "now the whole account on one line",
      link_cn: "现在把整笔账写成一行",
      en: "The overall balance is 8 acetyl-CoA + 7 ATP + 14 NADPH -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH, run by seven enzyme activities and ACP together. Eight molecules of free coenzyme A come off: one from the priming acetyl-CoA and one from each of the seven malonyl-CoA. **CO2 goes in seven times at the carboxylase and comes out seven times at the condensation, so its net contribution is zero and not one of its carbons stays in palmitate.**",
      cn: "总平衡式是 8 乙酰-CoA + 7 ATP + 14 NADPH -> 软脂酸 + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH，由七种酶活性连同 ACP 一起完成。放出八分子游离辅酶 A：一分子来自作引物的乙酰-CoA，另外七分子分别来自七个丙二酰-CoA。**CO2 在羧化酶那里进去七次，又在缩合那里出来七次，净贡献为零，它的碳一个也没留在软脂酸里。**",
      src: "B §8.3, p.190"
    },
    {
      link_en: "the rate-limiting step is where control acts, and it is controlled three ways at once",
      link_cn: "限速步骤就是调控的落点，而它同时被三种方式控制",
      recall_en: "the carboxylase from the committed step above, now as the control point",
      recall_cn: "上面承诺步骤里那个羧化酶，这里成了控制点",
      en: "Citrate is an allosteric activator of acetyl-CoA carboxylase and raises its Vmax, so the molecule that carries acetyl groups out to the cytosol is also the signal switching on the enzyme that consumes them: a rising supply is its own instruction to start. Palmitoyl-CoA, the pathway's own main product, is a feedback inhibitor. AMP-activated protein kinase — the kinase roused by glucagon, epinephrine or a high AMP concentration — phosphorylates at least three serine residues. **That phosphorylation both inactivates the carboxylase and desensitises it to citrate, a double shutdown for a cell short of energy or told to mobilise fuel rather than store it.** The active, unphosphorylated form assembles into filaments visible in an electron microscope.",
      cn: "柠檬酸是乙酰-CoA 羧化酶的别构激活剂，提高它的 Vmax：于是把乙酰基运到胞质的那个分子，同时也是打开消耗乙酰基那个酶的信号——供应上升本身就是「开工」的指令。软脂酰-CoA，这条途径自己的主产物，是它的反馈抑制剂。AMP 活化蛋白激酶——被胰高血糖素、肾上腺素或高浓度 AMP 唤醒的那个激酶——把至少三个丝氨酸残基磷酸化。**这次磷酸化既让羧化酶失活，又降低它对柠檬酸的敏感度；对一个缺能量、或被要求动员燃料而非储存燃料的细胞来说，这是一次双重关闭。** 有活性的、未磷酸化的那种形式会聚成细丝，电镜下看得见。",
      src: "A p.753"
    },
    {
      link_en: "and one molecule keeps synthesis and breakdown from running together",
      link_cn: "而有一个分子专门不让「造」和「烧」同时开工",
      recall_en: "the two sources of acetyl-CoA named near the start; this qualifies the first of them",
      recall_cn: "开头说过乙酰-CoA 有两个来源；这里要给第一个加上限定",
      en: "If synthesis and beta-oxidation ran at once the pair would be a futile cycle, spending ATP to build what is being taken apart at the same moment. One link forbids it: malonyl-CoA, the first committed intermediate of synthesis, inhibits carnitine acyltransferase I, the enzyme that loads a fatty acid onto carnitine for carriage into the mitochondrion. **Breakdown is blocked at the transport step the moment synthesis starts, so in an animal the acetyl-CoA from fatty acid oxidation is not a real source of material for building fatty acids.**",
      cn: "如果合成与 β-氧化同时开工，这一对就构成一个无效循环：花着 ATP 去造一样正在被拆掉的东西。一条连线禁止了它：丙二酰-CoA，合成途径的第一个承诺中间物，抑制肉碱脂酰转移酶 I，也就是把脂肪酸装到肉碱上、送进线粒体的那个酶。**合成一开始，分解就在运输这一步被卡住；所以在动物体内，脂肪酸氧化产生的乙酰-CoA 算不上合成脂肪酸的真实原料来源。**",
      src: "A p.753 · B §8.3, p.187",
      see: [{ id: "8-4-4-1", en: "the activation step this inhibition sits upstream of", cn: "这个抑制作用所在的上游活化步骤" }]
    },
    {
      link_en: "three differences separate building from burning, and they are the standard answer",
      link_cn: "「造」与「烧」之间有三点差异，这三点就是标准答案",
      en: "Synthesis starts from acetyl-CoA and is formally similar to degradation, and three differences separate them. First, synthesis opens with a carboxylation to malonyl-CoA, a step degradation has no counterpart to. Second, the hydrogen donor for synthesis is NADPH while oxidation produces NADH, the two nicotinamide coenzymes being kept functionally apart. Third, and this is the first half of that difference, synthesis is separated from degradation within the cell: degradation is localized in the mitochondria, synthesis runs in the cytoplasm on a multienzyme complex. That third difference is the compartmentation principle applied to a concrete pair of pathways rather than a fact about these two alone. **A complex that holds every intermediate bound and releases only the finished sixteen- and eighteen-carbon acyl-CoA cannot be run backwards, and no other pathway can intercept it halfway.**",
      cn: "合成的起点仍是乙酰-CoA，形式上与分解相似，而三点差异把它们分开。第一，合成以一次羧化开场，生成丙二酰-CoA，分解里根本没有对应的步骤。第二，合成的供氢体是 NADPH，而氧化产生 NADH，这两种烟酰胺辅酶在功能上被分隔开。第三（这也是该差异的前半）：细胞内合成与分解是被分开的 —— 分解定位在线粒体，合成则在细胞质中的一个多酶复合体上进行。这第三点其实是区室化原则被应用到一对具体途径上，而不只是关于这两条途径本身的事实。**一个把每个中间产物都攥在手里、只放出做完的十六碳和十八碳酰基-CoA 的复合体，既没法被倒着跑，也没法被别的途径半路截走。**",
      src: "B §10.1.2, p.220"
    },
    {
      link_en: "so what happens to a finished palmitate",
      link_cn: "那么做好的软脂酸去哪儿",
      en: "Palmitate has three fates. It can be used as it stands in the cytoplasm to build a simple or a complex lipid; it can be elongated by further two-carbon units; or, as fate three, palmitic acid can be dehydrogenated to form an unsaturated fatty acid — that transformation is stated on its own, without the location being repeated, and the location is the ER-bound desaturase system named earlier. Two accounts differ on where elongation happens: one puts the elongase system in the mitochondrial matrix, the other describes elongation systems in both the smooth endoplasmic reticulum and mitochondria and calls the reticulum system the more active of the two. **Elongation carries the chain on to stearate and beyond using coenzyme A rather than ACP as the carrier, and is otherwise the same chemistry as palmitate synthesis.**",
      cn: "软脂酸有三条去路：在细胞质里原样用掉，去造一种单纯或复合脂质；被再接上若干个二碳单元而延长；或者是去向三——软脂酸被脱氢生成不饱和脂肪酸。这条去向只写了「转化」本身、没有重复它发生在哪里，而地点就是前面点过的那套结合在内质网上的去饱和酶系统。关于延长发生在哪里，两种说法不一致：一种把延长酶系统放在线粒体基质，另一种说光面内质网和线粒体两处都有延长系统，且内质网那套更活跃。**延长把链接到硬脂酸乃至更长，用的载体是辅酶 A 而不是 ACP，其余的化学与软脂酸合成完全相同。**",
      src: "B §8.3, p.190 · A p.754"
    },
    {
      link_en: "desaturation runs into a hard limit, and that limit is an entire nutritional fact",
      link_cn: "去饱和会撞上一堵硬墙，而那堵墙就是一整条营养学事实",
      en: "Desaturation places a single cis double bond between C-9 and C-10, giving the two commonest monounsaturated fatty acids of animal tissue — palmitoleate (16:1) and oleate (18:1). A mammal cannot introduce a double bond beyond carbon 9. **Linoleate (18:2) and alpha-linolenate (18:3) cannot be made at all and have to come from plant material in the diet, and that single limit is the whole definition of an essential fatty acid.** From linoleate the body makes arachidonate — a twenty-carbon polyunsaturated fatty acid — and from alpha-linolenate it makes EPA and DHA.",
      cn: "去饱和在 C-9 与 C-10 之间装上一个顺式双键，给出动物组织里最常见的两种单不饱和脂肪酸——棕榈油酸（16:1）和油酸（18:1）。哺乳动物无法在第 9 号碳之外引入双键。**于是亚油酸（18:2）与 α-亚麻酸（18:3）根本造不出来，必须从膳食里的植物性材料获得；所谓「必需脂肪酸」，指的就只是这一件事。** 由亚油酸，机体制造花生四烯酸——一种二十碳的多不饱和脂肪酸；由 α-亚麻酸，制造 EPA 与 DHA。",
      src: "A p.754",
      see: [{ id: "8-2-1-2", en: "essential fatty acids in the structural chapter", cn: "结构那一章里的必需脂肪酸" }]
    },
    {
      link_en: "and the enzyme that installs a double bond belongs to an odd class",
      link_cn: "而装上双键的那个酶属于一类怪酶",
      en: "Fatty acyl-CoA desaturase is a mixed-function oxidase, a class in which two different substrates are oxidised at the same time by one molecule of O2 — here the fatty acyl-CoA itself and NADPH, each losing two electrons. The electrons travel a short chain of carriers: a flavoprotein called cytochrome b5 reductase, and cytochrome b5 itself. **All three components sit in the smooth endoplasmic reticulum, which is why desaturation is located there rather than in the mitochondrion, where the chain would instead be taken apart.** Plants do the same job in the chloroplast stroma with a different donor — reduced ferredoxin.",
      cn: "脂酰-CoA 去饱和酶是一种混合功能氧化酶，这一类酶的特点是两种不同的底物被同一个 O2 分子同时氧化——这里是脂酰-CoA 本身和 NADPH，各失去两个电子。电子沿一条短的载体链传递：一个叫细胞色素 b5 还原酶的黄素蛋白，以及细胞色素 b5 本身。**这三个组分都待在光面内质网上，去饱和之所以定位在那里，原因就在这；而在线粒体里，这条链等着它的是被拆掉。** 植物在叶绿体基质里用另一种供体干同样的活——还原态的铁氧还蛋白。",
      src: "A p.755"
    },
    {
      link_en: "and the essential fatty acids matter because of what one of them becomes",
      link_cn: "必需脂肪酸之所以要紧，是因为其中一种会变成什么",
      recall_en: "arachidonate, which came from linoleate two steps up",
      recall_cn: "花生四烯酸——两步之前由亚油酸来的那个",
      en: "On a hormonal signal or an injury, an enzyme called phospholipase A2 cuts arachidonate out of a membrane phospholipid. Enzymes of the smooth endoplasmic reticulum then convert it through cyclooxygenase — also named prostaglandin H2 synthase and abbreviated COX — into PGH2, the branch point from which many prostaglandins and all thromboxanes come. These products are the eicosanoids: short-range signalling lipids built from twenty- and twenty-two-carbon polyunsaturated fatty acids. **Two COX isozymes closely similar in sequence do different jobs: one makes the prostaglandins that keep the stomach secreting protective mucin, the other those mediating inflammation, pain and fever.**",
      cn: "在激素信号或损伤发生时，一个叫磷脂酶 A2 的酶把花生四烯酸从膜磷脂上切下来。光面内质网上的酶再通过环氧合酶——它也叫前列腺素 H2 合酶，缩写 COX——把它变成 PGH2，这个分岔点产生许多前列腺素和全部血栓烷。这些产物统称类二十烷酸：由二十碳和二十二碳多不饱和脂肪酸做成的短程信号脂质。**COX 有两个序列高度相似的同工酶，干的活却不同：一个造那些让胃持续分泌保护性黏蛋白的前列腺素，另一个造那些介导炎症、疼痛与发热的前列腺素。**",
      src: "A pp.757-758"
    },
    {
      link_en: "which turns the pharmacology into biochemistry you can derive",
      link_cn: "于是这门药理学变成了可以推出来的生化",
      en: "Aspirin irreversibly inactivates both isozymes by acetylating a serine residue in the active site, and ibuprofen and naproxen hit the same pair. **Blocking the inflammation isozyme relieves pain while blocking the gastric one at the same time removes the stomach's protection, which is exactly where the gastric side effects come from.** Drugs selective for the inflammation isozyme were built for that reason; rofecoxib and valdecoxib were later withdrawn over increased heart attack and stroke risk, and celecoxib remains in use with caution. Beyond PGH2 the path forks. Thromboxane synthase in platelets makes thromboxane A2, which causes vasoconstriction and platelet aggregation — the opening moves of clotting — so a small regular dose of aspirin lowers the risk of heart attack and stroke while a larger single dose merely relieves pain. The other fork is linear: lipoxygenases make leukotrienes, and leukotrienes are not inhibited by aspirin or the other non-steroidal anti-inflammatory drugs, which is the biochemical reason those drugs do nothing for asthma.",
      cn: "阿司匹林把活性位点上的一个丝氨酸残基乙酰化，不可逆地使两个同工酶都失活；布洛芬和萘普生打的是同一对。**挡住管炎症的那个同工酶，疼痛就缓解；同时把管胃的那个也挡住，胃就失去保护——胃部副作用正是从这里来的。** 针对炎症那个同工酶的选择性药物就是为此而造：罗非昔布与伐地昔布后来因心梗与卒中风险升高而撤市，塞来昔布在谨慎使用中保留。过了 PGH2，路分成两支。血小板里的血栓烷合酶造出血栓烷 A2，它引起血管收缩与血小板聚集——凝血的头几步——所以长期小剂量阿司匹林能降低心梗与卒中风险，而单次大剂量只是止痛。另一支是线性的：脂加氧酶制造白三烯，而白三烯不被阿司匹林或其他非甾体抗炎药抑制，这就是这类药对哮喘无效的生化原因。",
      src: "A pp.758-759"
    },
    {
      link_en: "an acyl chain is not yet a lipid, and building one needs three activated parts",
      link_cn: "一条酰基链还不是脂质；造一个脂质要三样活化好的材料",
      en: "Anabolic enzymes act on activated forms rather than on free compounds, and lipid synthesis needs three of them: glycerol activated as glycerol phosphate, fatty acids activated as acyl-CoA, and the organic bases of phospholipid head groups activated by CTP, CTP being the nucleotide that activates those head-group bases before their incorporation into a phospholipid. Glycerol phosphate is an indirect product of glycolysis, so making a fat needs a contribution from sugar metabolism. In a fat cell, glycerol phosphate takes one acyl-CoA and then a second, releasing coenzyme A each time. **The product is phosphatidic acid — a diacylglycerol carrying a phosphate at C-3 — and it is the first natural intermediate and the branch point every later lipid comes off.** One didactic caveat: the introductory sentence promises triacylglycerol synthesis, yet the diagram on that page alone stops at phosphatidic acid, which is not yet a triacylglycerol, and the remaining dephosphorylation and third acylation are shown on the page after it.",
      cn: "合成代谢的酶作用的是活化态而不是游离化合物，而脂质合成需要三种活化态：甘油活化成磷酸甘油，脂肪酸活化成脂酰-CoA，磷脂头部的有机碱由 CTP 活化 —— CTP 就是那个在这些头部碱基掺入磷脂之前把它们活化的核苷酸。磷酸甘油是糖酵解的间接产物，所以造一分子脂肪必须有糖代谢的贡献。在脂肪细胞里，磷酸甘油先接一个脂酰-CoA、再接第二个，每次放出一分子辅酶 A。**产物是磷脂酸——C-3 位带一个磷酸基的二酰甘油——它是第一个天然中间体，也是后面所有脂质分岔出去的那个点。** 有一处教学提示：引言句承诺要讲三酰甘油的合成，可这一页上的插图本身只走到磷脂酸，那还不是三酰甘油；剩下的去磷酸化和第三次酰化画在下一页上。",
      src: "B §8.3, p.190 · §10.1.2, p.220"
    },
    {
      link_en: "and that glycerol phosphate closes a loop between two whole classes of nutrient",
      link_cn: "而这个磷酸甘油，在两大类养分之间闭合了一个回路",
      recall_en: "glycerol phosphate as an indirect product of glycolysis, one step up",
      recall_cn: "上一步说的「磷酸甘油是糖酵解的间接产物」",
      en: "Sugar metabolism supplies the glycerophosphate backbone of a fat — glycerophosphate being the glycerol phosphate of the step above, the three-carbon spine the acyl chains hang from — and hydrolysis of that fat by a lipase returns the glycerol to sugar metabolism, so the loop runs in both directions. **The two nutrient classes exchange the backbone freely, and they do not exchange the acyl carbon: an animal turns sugar into fatty acids, and cannot turn those fatty acids back into sugar.** The asymmetry is worth keeping in mind whenever a diagram makes fat and carbohydrate look interconvertible — one third of the molecule is, and the other two thirds are not.",
      cn: "糖代谢提供脂肪的甘油磷酸骨架，而脂肪酶把这分脂肪水解之后，甘油又回到糖代谢里去 —— 这个回路两个方向都走得通。**两类养分自由交换的是骨架，不交换的是酰基上的碳：动物能把糖变成脂肪酸，却不能把这些脂肪酸变回糖。** 每当一张图让脂肪和糖看起来可以随意互变时，这处不对称都值得记着 —— 分子里有三分之一确实可以互变，另外三分之二不行。",
      src: "B §8.3, p.190 · §10.1.2, p.220",
      see: [{ id: "8-4-1", en: "the lipase hydrolysis that returns the glycerol", cn: "把甘油送回去的那一步脂肪酶水解" }]
    },
    {
      link_en: "and phosphatidic acid takes one of two routes, which decides the product family",
      link_cn: "磷脂酸有两条去路，选哪条决定产物属于哪一族",
      en: "Removing the phosphate gives diacylglycerol, and from there four things follow: a third acyl-CoA completes a triglyceride, CDP-ethanolamine gives phosphatidylethanolamine, CDP-choline gives phosphatidylcholine, and two successive UDP-galactose transfers give the plant membrane glycolipids monogalactosyldiacylglycerol and digalactosyldiacylglycerol. Phosphatidylcholine can also swap its head group with free serine, releasing choline, to give phosphatidylserine — a base exchange rather than a CDP-activated route. **Activating phosphatidic acid with CTP instead gives CDP-diacylglycerol, and from that come phosphatidylglycerol, cardiolipin and phosphatidylinositol — two activations, two product families.** One branch is worth stating exactly as far as it goes and no farther: CDP-diacylglycerol plus myo-inositol, releasing CMP, gives phosphatidylinositol, which the diagram marks as the precursor of further products while naming none of them and detailing none of them — a genuine gap in the coverage, not filled in here with invented phosphoinositide names.",
      cn: "去掉磷酸得到二酰甘油，从这里分出四条路：第三个脂酰-CoA 把三酰甘油补完；CDP-乙醇胺给出磷脂酰乙醇胺；CDP-胆碱给出磷脂酰胆碱；两次连续的 UDP-半乳糖转移给出植物膜糖脂单半乳糖基二酰甘油和双半乳糖基二酰甘油。磷脂酰胆碱还能与游离丝氨酸交换头部基团、放出胆碱，生成磷脂酰丝氨酸——这是碱基交换，不走 CDP 活化那条路。**换成用 CTP 把磷脂酸活化，得到的是 CDP-二酰甘油，由它给出磷脂酰甘油、心磷脂和磷脂酰肌醇——两种活化方式，两个产物家族。** 其中有一支值得严格照原样讲、不多讲一步：CDP-二酰甘油加肌醇（myo-inositol）、放出 CMP，生成磷脂酰肌醇；插图把它标为若干「后续产物」的前体，却既没有给这些产物命名，也没有给出细节——这是覆盖上的一处真实空白，此处不拿臆造的磷酸肌醇衍生物名字去填。",
      src: "B §8.3, p.191"
    },
    {
      link_en: "the third family of lipids is built from the same acetyl-CoA, three units at a time",
      link_cn: "第三类脂质用的还是同一个乙酰-CoA，一次三个单元",
      en: "Derived lipids here means terpenoids, cholesterol among them, and their synthesis divides into three phases: A from acetyl-CoA to mevalonate, B from mevalonate to an unsaturated hydrocarbon, and C from that hydrocarbon to a functional terpenoid. Phase A joins three acetyl-CoA into the six-carbon mevalonic acid, which is 3-methyl-3,5-dihydroxyvaleric acid. Two acetyl-CoA condense to acetoacetyl-CoA — a four-carbon thioester — then a third acetyl-CoA and water give beta-hydroxy-beta-methylglutaryl-CoA, written HMG-CoA, and HMG-CoA reductase reduces that with 2 NADPH to mevalonate. The printed scheme labels the first condensation as going via malonyl-CoA with CO2 released — standard accounts instead give a simple thiolase condensation releasing only coenzyme A — and that disagreement is worth carrying rather than smoothing over. **HMG-CoA reductase is the key regulatory enzyme of the whole route, which is why it is of medical interest for lowering cholesterol and for treating atherosclerosis.**",
      cn: "这里说的衍生脂质主要指萜类，胆固醇也在其中，它们的合成分为三个阶段：A 阶段从乙酰-CoA 到甲羟戊酸，B 阶段从甲羟戊酸到不饱和烃，C 阶段从那个烃到有功能的萜类。A 阶段把三个乙酰-CoA 拼成六碳的甲羟戊酸，也就是 3-甲基-3,5-二羟基戊酸。两个乙酰-CoA 缩合成乙酰乙酰-CoA——一个四碳的硫酯——第三个乙酰-CoA 加水给出 β-羟基-β-甲基戊二酸单酰-CoA，写作 HMG-CoA；HMG-CoA 还原酶再用 2 个 NADPH 把它还原成甲羟戊酸。印出来的图把第一次缩合标成「经由丙二酰-CoA」并放出 CO2，而标准说法是一次简单的硫解酶缩合、只放出辅酶 A——这处分歧值得原样带着，而不是抹平。**HMG-CoA 还原酶是整条路线的关键调节酶，这正是它在降胆固醇与治疗动脉粥样硬化上具有医学意义的原因。**",
      src: "B §8.3, pp.191-192, p.193"
    },
    {
      link_en: "phase B turns mevalonate into the five-carbon unit everything else is built from",
      link_cn: "B 阶段把甲羟戊酸变成那个五碳单元，后面的一切都由它搭出来",
      en: "Three kinases phosphorylate mevalonate with 3 ATP to 3-phospho-5-pyrophosphomevalonic acid, which then loses both Pi and CO2 to give isopentenyl pyrophosphate — the first activated five-carbon isoprene unit. An isomerase interconverts it with its structural isomer, named dimethylallyl pyrophosphate. **Chains then grow head-to-tail: isopentenyl plus dimethylallyl pyrophosphate give the ten-carbon geranyl pyrophosphate, and a further five-carbon unit gives the fifteen-carbon farnesyl pyrophosphate.** Two farnesyl pyrophosphate join head-to-head into squalene — thirty carbons, with a marked centre of symmetry in the drawn structure. A parallel branch reaches the twenty-carbon geranylgeranyl pyrophosphate and then, head-to-head, the forty-carbon phytoene — the entry point of the carotenoids. One printed figure runs a right-hand column geranyl-PP to geranylgeranyl-PP to phytoene, making geranylgeranyl-PP the product of a single head-to-tail condensation from geranyl-PP. That cannot balance, since ten carbons plus five make fifteen and not twenty, and standard references make geranylgeranyl-PP the product of farnesyl-PP plus IPP, one step further along. It is reproduced here as printed rather than silently corrected, and the flag is strengthened by an earlier page of the same account, which already has farnesyl-PP plus IPP giving the C20 diterpene correctly — so one figure disagrees rather than a convention being followed. If asked, give geranylgeranyl-PP as farnesyl-PP plus IPP; if asked to reproduce this figure, reproduce it and say what does not add up.",
      cn: "三个激酶用 3 个 ATP 把甲羟戊酸磷酸化成 3-磷酸-5-焦磷酸甲羟戊酸，它随后同时失去 Pi 和 CO2，给出异戊烯基焦磷酸——第一个活化的五碳异戊二烯单位。一个异构酶让它与自己的结构异构体互变，那个异构体名叫二甲丙烯基焦磷酸。**接下来链按「头对尾」生长：异戊烯基焦磷酸加二甲丙烯基焦磷酸给出十碳的香叶基焦磷酸，再加一个五碳单元给出十五碳的法尼基焦磷酸。** 两个法尼基焦磷酸「头对头」拼成角鲨烯——三十个碳，画出来的结构上标着一个对称中心。另有一条平行分支走到二十碳的香叶基香叶基焦磷酸，再「头对头」得到四十碳的八氢番茄红素——类胡萝卜素家族的入口。有一张印出来的图，右侧一列是 GPP → GGPP → phytoene，等于把香叶基香叶基焦磷酸（GGPP）当成香叶基焦磷酸（GPP）一步头尾缩合的产物。这笔账合不上：十碳加五碳是十五不是二十；标准文献里 GGPP 是法尼基焦磷酸（farnesyl-PP）加 IPP 的产物，要再往后一步。此处按原样保留，不做无声更正；而同一份材料更早的一页其实已经把「farnesyl-PP + IPP 给出 C20 二萜」写对了 —— 所以这是一张图出错，而不是全书遵循的某种约定。考试时 GGPP 请答 farnesyl-PP + IPP；若要求复现这张图，就照画，并指出哪里对不上。",
      src: "B §8.3, p.192"
    },
    {
      link_en: "and phase C is where a hydrocarbon becomes a working molecule",
      link_cn: "C 阶段是烃变成能干活的分子的地方",
      en: "Phase C follows no single general scheme. It is a collection of enzyme-controlled modifications: most often oxidations that introduce hydroxyl, aldehyde, carbonyl or carboxyl groups, and shortening or lengthening of a chain by one or more methyl groups; closing rings of three to nine members is very common. Phase B ends at squalene and phytoene, and phase C is where squalene's cyclization onward to lanosterol and cholesterol happens. The squalene branch is worked out in full: squalene monooxygenase converts squalene to 2,3-squalene epoxide, a cyclase converts that to the cyclic sterol lanosterol, and about twenty further reactions that remove and shift methyl groups turn lanosterol into cholesterol in animals. **Phase A is very well researched and phase B's basics are known, while phase C is often still biochemically unexplored, so the confident part of this account stops before its last stage.**",
      cn: "C 阶段没有单一的通用方案。它是一组由酶控制的修饰：最常见的是引入羟基、醛基、羰基或羧基的氧化反应，以及用一个或多个甲基把链缩短或延长；闭合成三到九元环也非常常见。B 阶段止于角鲨烯与八氢番茄红素，而角鲨烯经环化继续走向羊毛甾醇与胆固醇，正是 C 阶段的事。角鲨烯这一支是完整给出的：角鲨烯单加氧酶把角鲨烯变成 2,3-角鲨烯环氧化物，一个环化酶把它变成环状固醇羊毛甾醇，再经约二十步脱除和转移甲基的反应，在动物体内把羊毛甾醇变成胆固醇。**A 阶段研究得很透，B 阶段的基本面貌已知，而 C 阶段在相当多的情况下仍未被生化阐明；所以这套讲法有把握的部分，止于它的最后一段之前。**",
      src: "B §8.3, p.193",
      openQuestion_en: "Phase C — the conversion of an unsaturated hydrocarbon into a functional terpenoid — is in a good number of cases still biochemically unexplored.",
      openQuestion_cn: "C 阶段，即把不饱和烃转化为有功能的萜类，在相当多的情况下仍未被生物化学阐明。"
    }
  ],
  terms: [
    { en: "citrate shuttle", cn: "柠檬酸穿梭",
      def_en: "The route by which acetyl groups leave the mitochondrion, needed because the inner membrane is impermeable to acetyl-CoA. Acetyl-CoA condenses with oxaloacetate to citrate, citrate crosses on its own transporter, and cytosolic citrate lyase splits it back at the cost of one ATP. The return leg pays: with no oxaloacetate transporter, oxaloacetate is reduced to malate, and malic enzyme converts malate to pyruvate and CO2 while making NADPH — about half of the 14 a palmitate costs.",
      def_cn: "乙酰基离开线粒体所走的路线；之所以需要它，是因为内膜不让乙酰-CoA 通过。乙酰-CoA 与草酰乙酸缩合成柠檬酸，柠檬酸靠自己的转运体跨膜，胞质的柠檬酸裂解酶花一个 ATP 把它劈回来。回程才是买单的一段：既然没有草酰乙酸转运体，草酰乙酸就被还原成苹果酸，苹果酸酶再把它变成丙酮酸和 CO2，同时生成 NADPH——大约是一分子软脂酸所需 14 个中的一半。" },
    { en: "acetyl-CoA carboxylase", cn: "乙酰-CoA 羧化酶",
      def_en: "The biotin-dependent enzyme that carboxylates acetyl-CoA to malonyl-CoA at the cost of one ATP: CO2 + acetyl-CoA + ATP -> malonyl-CoA + ADP + Pi, with Mn2+ given as the divalent cation. Irreversible, and the rate-limiting step. In animals one multifunctional polypeptide whose biotin rides a flexible arm between two active sites. The carboxyl it adds is eliminated again at the condensation, so the ATP buys thermodynamics rather than carbon.",
      def_cn: "依赖生物素的酶，花一个 ATP 把乙酰-CoA 羧化成丙二酰-CoA：CO2 + 乙酰-CoA + ATP -> 丙二酰-CoA + ADP + Pi，二价阳离子写作 Mn2+。反应不可逆，且是限速步骤。在动物体内是一条多功能多肽，生物素装在柔性臂上，在两个活性位点之间摆动。它装上去的羧基在缩合时又被消去，所以那个 ATP 买的是热力学而不是碳。" },
    { en: "ACP and its two sulfhydryl groups", cn: "ACP 与它的两个巯基",
      def_en: "The acyl carrier protein at the core of the synthase carries a peripheral SH from a cysteine residue and a central SH at the end of a phosphopantetheine arm — the same unit found in free coenzyme A. Acetyl loads on the peripheral SH, malonyl on the central one; after each round the grown chain is transferred back to the peripheral SH so the central one is free for the next malonyl.",
      def_cn: "合酶核心的酰基载体蛋白带着两个巯基：一个外周的来自半胱氨酸残基，一个中心的长在磷酸泛酰巯基乙胺臂末端——与游离辅酶 A 里的是同一个单元。乙酰基装在外周巯基上，丙二酰基装在中心巯基上；每轮结束后长出来的链被转回外周巯基，中心巯基空出来迎接下一个丙二酰基。" },
    { en: "fatty acid synthase I", cn: "脂肪酸合酶 I",
      def_en: "The mammalian synthase: seven catalytic activities as domains of one large polypeptide, working as a dimer. Because ACP belongs to the same chain as every active site it feeds, no intermediate is released into solution and only finished C16 and C18 acyl-CoA leave. Bacteria and plants use separable enzymes for the same chemistry, which is why antibiotics and herbicides can be aimed at their version alone.",
      def_cn: "哺乳动物的合酶：七种催化活性是同一条大多肽上的七个结构域，以二聚体形式工作。由于 ACP 与它服务的每个活性位点同在一条链上，中间产物不被释放到溶液里，离开的只有做完的 C16 与 C18 酰基-CoA。细菌和植物用可分开的酶做同样的化学，这正是抗生素和除草剂能只针对它们那一版的原因。" },
    { en: "the six numbered steps", cn: "六个编号步骤",
      def_en: "I loading, by acetyltransferase (first round only) and malonyltransferase (every round); II condensation by beta-ketoacyl-ACP synthase, releasing CO2 and giving acetoacetyl-ACP; III reduction by beta-ketoacylreductase with NADPH; IV dehydration by beta-hydroxyacyl dehydratase; V reduction by alpha,beta-enoylreductase with a second NADPH, giving butyryl-ACP; VI transfer of the chain from the central SH back to the peripheral SH.",
      def_cn: "I 装料，由乙酰基转移酶（只在第一轮）和丙二酰基转移酶（每一轮）完成；II 缩合，由 β-酮脂酰-ACP 合成酶完成，放出 CO2 得到乙酰乙酰-ACP；III 还原，β-酮脂酰还原酶用 NADPH；IV 脱水，β-羟脂酰脱水酶；V 再还原，α,β-烯酰还原酶用第二个 NADPH，得到丁酰-ACP；VI 把链从中心巯基转回外周巯基。" },
    { en: "the balance sheet for palmitate", cn: "软脂酸的收支表",
      def_en: "8 acetyl-CoA + 7 ATP + 14 NADPH -> palmitate + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH. Seven condensations mean seven carboxylations, so CO2 goes in and comes out in equal amount and contributes nothing to the product. The primer acetyl-CoA is never carboxylated, which is why 8 acetyl-CoA need only 7 ATP; its methyl and carboxyl carbons end as C-16 and C-15.",
      def_cn: "8 乙酰-CoA + 7 ATP + 14 NADPH -> 软脂酸 + 7 ADP + 7 Pi + 14 NADP+ + 8 CoASH。七次缩合意味着七次羧化，所以 CO2 进出等量、对产物毫无贡献。作引物的那个乙酰-CoA 从不被羧化，这就是 8 个乙酰-CoA 只要 7 个 ATP 的原因；它的甲基碳和羧基碳最后成了 C-16 与 C-15。" },
    { en: "three differences from degradation", cn: "与分解的三点差异",
      def_en: "The standard answer. One, synthesis opens with a carboxylation to malonyl-CoA that degradation has no counterpart to. Two, the hydrogen donor is NADPH where oxidation makes NADH. Three, degradation sits in the mitochondrion and synthesis in the cytoplasm, on a multienzyme complex that holds every intermediate bound and releases only C16 and C18 acyl-CoA — so it cannot be reversed or intercepted.",
      def_cn: "标准答案。其一，合成以一次羧化开场生成丙二酰-CoA，分解没有对应步骤。其二，供氢体是 NADPH，而氧化生成的是 NADH。其三，分解在线粒体、合成在细胞质，跑在一个把所有中间产物攥住、只放出 C16 与 C18 酰基-CoA 的多酶复合体上——所以它既不能倒着跑，也不能被截走。" },
    { en: "reciprocal regulation by malonyl-CoA", cn: "丙二酰-CoA 的拮抗调控",
      def_en: "The single link that stops synthesis and beta-oxidation running together as a futile cycle. Malonyl-CoA, the first committed intermediate of synthesis, inhibits carnitine acyltransferase I, so breakdown is blocked at the transport step the moment synthesis begins. It follows that in an animal, acetyl-CoA from fatty acid oxidation is not a real source of material for fatty acid synthesis.",
      def_cn: "阻止合成与 β-氧化同时运行、变成无效循环的那一条连线。丙二酰-CoA 是合成的第一个承诺中间物，它抑制肉碱脂酰转移酶 I，于是合成一开始，分解就在运输这一步被卡住。由此可推：在动物体内，脂肪酸氧化产生的乙酰-CoA 并不是脂肪酸合成的真实原料来源。" },
    { en: "essential fatty acids", cn: "必需脂肪酸",
      def_en: "Linoleate (18:2) and alpha-linolenate (18:3), which a mammal cannot make because it cannot introduce a double bond beyond carbon 9, and which must therefore come from plant material in the diet. That single synthetic limit is the entire definition. Linoleate yields arachidonate, the precursor of the eicosanoids; alpha-linolenate yields EPA and DHA.",
      def_cn: "亚油酸（18:2）与 α-亚麻酸（18:3）。哺乳动物无法在第 9 号碳之外引入双键，所以造不出它们，必须从膳食中的植物性材料获得；所谓「必需」，指的就只是这一条合成能力上的限制。由亚油酸得到花生四烯酸，即类二十烷酸的前体；由 α-亚麻酸得到 EPA 与 DHA。" },
    { en: "phosphatidic acid as the branch point", cn: "作为分岔点的磷脂酸",
      def_en: "Glycerol phosphate plus two acyl-CoA gives phosphatidic acid, a diacylglycerol with a phosphate at C-3. Dephosphorylating it to diacylglycerol leads to triglycerides, phosphatidylethanolamine, phosphatidylcholine, phosphatidylserine and the galactolipids MGDG and DGDG. Activating it with CTP to CDP-diacylglycerol leads instead to phosphatidylglycerol, cardiolipin and phosphatidylinositol.",
      def_cn: "磷酸甘油接上两个脂酰-CoA 得到磷脂酸，即 C-3 位带磷酸的二酰甘油。把它去磷酸成二酰甘油，通向三酰甘油、磷脂酰乙醇胺、磷脂酰胆碱、磷脂酰丝氨酸以及半乳糖脂 MGDG 与 DGDG；用 CTP 把它活化成 CDP-二酰甘油，则通向磷脂酰甘油、心磷脂和磷脂酰肌醇。" },
    { en: "the three phases of terpenoid synthesis", cn: "萜类合成的三个阶段",
      def_en: "A, acetyl-CoA to mevalonate through acetoacetyl-CoA and HMG-CoA, closed by HMG-CoA reductase with 2 NADPH — very well researched. B, mevalonate through isopentenyl pyrophosphate to squalene or phytoene by head-to-tail then head-to-head condensations — basics known. C, that hydrocarbon to a functional terpenoid, chiefly by oxidations, methyl shortening or lengthening, and ring closure — in many cases still unexplored.",
      def_cn: "A 阶段，乙酰-CoA 经乙酰乙酰-CoA 和 HMG-CoA 到甲羟戊酸，由 HMG-CoA 还原酶用 2 个 NADPH 收尾——研究得很透。B 阶段，甲羟戊酸经异戊烯基焦磷酸，靠头对尾再头对头的缩合到角鲨烯或八氢番茄红素——基本面貌已知。C 阶段，那个烃变成有功能的萜类，主要靠氧化、甲基的增减和环化——很多情况下仍未阐明。" },
    { en: "HMG-CoA reductase", cn: "HMG-CoA 还原酶",
      def_en: "The NADPH-dependent enzyme that reduces HMG-CoA to mevalonate, using 2 NADPH, and the key regulatory enzyme of the whole terpenoid and cholesterol route — which is why it carries medical interest for lowering cholesterol and for treating atherosclerosis.",
      def_cn: "依赖 NADPH 的酶，用 2 个 NADPH 把 HMG-CoA 还原成甲羟戊酸；它是整条萜类与胆固醇路线的关键调节酶——这正是它在降胆固醇与治疗动脉粥样硬化上具有医学意义的原因。" },
    { en: "head-to-tail and head-to-head", cn: "头对尾与头对头",
      def_en: "The two ways isoprene units join. Head-to-tail lengthens a chain by five carbons at a time: C5 + C5 to geranyl pyrophosphate (C10), then to farnesyl pyrophosphate (C15), then to geranylgeranyl pyrophosphate (C20). Head-to-head joins two finished chains and doubles the carbon count, giving squalene (C30) from two farnesyl and phytoene (C40) from two geranylgeranyl, and it is what puts a centre of symmetry in the product.",
      def_cn: "异戊二烯单位相接的两种方式。头对尾每次把链加长五个碳：C5 + C5 得到香叶基焦磷酸（C10），再到法尼基焦磷酸（C15），再到香叶基香叶基焦磷酸（C20）。头对头把两条做好的链接在一起、碳数加倍：两个法尼基得到角鲨烯（C30），两个香叶基香叶基得到八氢番茄红素（C40）；产物上的对称中心就是这样来的。" }
  ]
};

/* ------------------------------------------------- 脂肪的动员：水解与活化 ---- */
window.BIOLITE_SPINE["key:fat-mobilization"] = {
  assumed: ["ATP", "ADP", "AMP", "Pi", "coenzyme A", "enzyme", "cytoplasm", "cytosol",
            "mitochondrion", "hydrolysis", "oxidation", "ester", "ester bond",
            "thioester", "fatty acid", "free fatty acid", "acyl-CoA",
            "triacylglycerol", "triglyceride", "glycerol", "glyceraldehyde",
            "carbohydrate", "sugar", "lipid", "phosphate", "pyrophosphate",
            "anabolism", "catabolism", "beta oxidation", "beta-oxidation",
            "adipose tissue", "diet"],
  nodeTitle_en: "Fat mobilization: hydrolysis and activation",
  nodeTitle_cn: "脂肪的动员：水解与活化",
  title_en: "One hydrolysis takes a stored fat apart, and one two-step activation is the gate a fatty acid must pass before it can go anywhere at all",
  title_cn: "一次水解把储存的脂肪拆开，而一次两步的活化，是脂肪酸能去任何地方之前必须过的那道门",
  steps: [
    {
      en: "A simple lipid in storage is a triacylglycerol: one glycerol esterified with three fatty acids, and the main storage substance of an organism. Taking it apart needs one hydrolytic step and no more. **Lipases — hydrolytic enzymes present in the cytoplasm — cut the ester bonds that join the fatty acids to the glycerol, and the reaction is a plain hydrolysis of triacylglycerol with water.**",
      cn: "储存起来的单纯脂质就是三酰甘油：一个甘油与三个脂肪酸成酯，也是生物体内主要的储备物质。把它拆开只要一步水解，再无其他。**脂肪酶——存在于细胞质中的水解酶——切开把脂肪酸接在甘油上的那些酯键；这个反应就是三酰甘油加水的一次朴素水解。**",
      src: "B §8.4.1, p.193",
      see: [{ id: "L-10-1-1", en: "why the store is fat rather than glycogen", cn: "为什么储备是脂肪而不是糖原" }]
    },
    {
      link_en: "and why a triacylglycerol is the molecule worth keeping a store of",
      link_cn: "为什么值得存起来的偏偏是三酰甘油这种分子",
      en: "Triacylglycerols — each one glycerol carrying three fatty acids, also written triglycerides — are described as the main storage substance of organisms, the form in which reserve energy is actually held. **A fat store is a store of fatty acids locked up in ester bonds, so none of it reaches metabolism until a lipase hydrolysis has released them, and mobilization begins right there.**",
      cn: "三酰甘油——一个甘油带三个脂肪酸，也写作甘油三酯——是生物体内主要的储备物质，是储备能量真正被保存下来的形式。**脂肪储备就是被酯键锁住的脂肪酸储备，所以在脂肪酶水解把它们放出来之前，其中没有一分能进入代谢；动员正是从这里开始。**",
      src: "B §8.4.1, p.193"
    },
    {
      link_en: "and the two halves of that molecule go to different places",
      link_cn: "而这个分子的两半各奔东西",
      recall_en: "the same split as at the head of the fatty acid oxidation chain",
      recall_cn: "和脂肪酸氧化那条链开头的分家是同一件事",
      en: "Hydrolysis hands back free fatty acids and glycerol, which are two products with entirely different destinations. **Glycerol is oxidised to the three-carbon sugar glyceraldehyde and, once phosphorylated, joins carbohydrate metabolism, so only the fatty acid half takes the route the rest of this chain follows.**",
      cn: "水解交还的是游离脂肪酸和甘油，这是去向完全不同的两类产物。**甘油被氧化成三碳糖甘油醛，磷酸化之后并入糖类代谢；所以只有脂肪酸那一半走这条链后面要讲的路。**",
      src: "B §8.4.1, p.193 · §10.1.2, p.220",
      beyond: true,
      beyondNote: "p.193 gives the hydrolysis and names its two products, and stops there. Where the glycerol goes is on p.220, outside this topic's two member nodes, and is taken from there so that the glycerol half is not left unaccounted for and so that this chain agrees with the already merged fatty acid oxidation chain.",
      see: [{ id: "10-8", en: "the glycerol half followed to the end", cn: "把甘油那一半跟到底" }]
    },
    {
      link_en: "and a free fatty acid cannot go anywhere as it stands",
      link_cn: "而游离脂肪酸原样哪儿也去不了",
      en: "A free fatty acid enters no metabolic pathway at all, catabolic or anabolic, until it has been activated — that is, converted into a thioester with coenzyme A. **Activation is a common gate: the same conversion is required before a fatty acid can be oxidised and before it can be built into a lipid, so it belongs to both directions equally.**",
      cn: "游离脂肪酸在被活化之前，进不了任何代谢途径，无论分解还是合成——所谓活化，就是把它变成与辅酶 A 结合的硫酯。**活化是一道共用的门：脂肪酸要被氧化，或者要被拿去造脂质，都得先做这同一次转化，所以它对两个方向是同等的。**",
      src: "B §8.4.4, p.194"
    },
    {
      link_en: "activation happens in two steps, through an intermediate too short-lived to isolate",
      link_cn: "活化分两步走，中间经过一个短命到抓不住的中间体",
      en: "In the first step the free fatty acid reacts with ATP and coenzyme A, inorganic pyrophosphate leaves, and the intermediate is written RCH₂CO-AMP — the acyl group of the fatty acid carried on AMP. **What forms is an acyl-adenylate, the fatty acid joined to AMP, and it is unstable and transient rather than a compound that accumulates and can be isolated.**",
      cn: "第一步，游离脂肪酸与 ATP 和辅酶 A 反应，无机焦磷酸离去，中间体写作 RCH₂CO-AMP——脂肪酸的酰基挂在 AMP 上。**生成的是酰基腺苷酸，也就是脂肪酸接在 AMP 上；它不稳定、瞬时，并不是一个会积累起来、可以分离出来的化合物。**",
      src: "B §8.4.4, p.195"
    },
    {
      link_en: "and the second step finishes the job",
      link_cn: "第二步把这件事做完",
      en: "The acyl-adenylate reacts with a further coenzyme A in a step catalysed by an enzyme named thiokinase, giving the activated fatty acid as an acyl-CoA thioester and releasing AMP. **The net equation is free fatty acid plus ATP plus coenzyme A giving acyl-CoA plus AMP plus pyrophosphate, so the ATP goes to AMP and not to ADP.**",
      cn: "酰基腺苷酸再与一分子辅酶 A 反应，这一步由一个名叫硫激酶的酶催化，生成作为酰基-CoA 硫酯的活化脂肪酸，并放出 AMP。**净反应式是：游离脂肪酸 + ATP + 辅酶 A -> 酰基-CoA + AMP + 焦磷酸；所以这个 ATP 走的是到 AMP，而不是到 ADP。**",
      src: "B §8.4.4, p.195"
    },
    {
      link_en: "and the price of that gate is higher than the equation shows",
      link_cn: "而这道门的价钱，比方程式上写的要高",
      recall_en: "the same activation as at the head of the fatty acid oxidation chain, where its true cost is worked out",
      recall_cn: "和脂肪酸氧化那条链开头的活化是同一件事，那里把真实代价算过",
      en: "Going to AMP rather than to ADP is what makes activation expensive. The pyrophosphate released is itself hydrolysed afterwards, so two phosphoanhydride bonds are broken instead of one. **Activation therefore costs the equivalent of two ATP, and that double expense buys two things: an effectively irreversible reaction, and a thioester bond every later step depends on.**",
      cn: "走到 AMP 而不是 ADP，正是活化昂贵的原因。放出来的焦磷酸随后自己也被水解掉，于是断的是两个磷酸酐键而不是一个。**所以活化的代价相当于两个 ATP；这笔加倍的开销买来两样东西：一个实际上不可逆的反应，以及后面每一步都要依赖的那个硫酯键。**",
      src: "B §8.4.4, p.195 · A pp.607-608",
      beyond: true,
      beyondNote: "p.195 draws the reaction ending at AMP and pyrophosphate and does not follow the pyrophosphate any further. That the pyrophosphate is then hydrolysed, making the real cost two ATP, comes from Lehninger pp.607-608 by way of the already merged fatty acid oxidation chain, and is kept here so the two chains do not disagree about the same reaction.",
      see: [{ id: "8-4-4-2", en: "what the activated chain is then put through", cn: "活化后的链接下来被怎么处理" }]
    }
  ],
  terms: [
    { en: "lipase", cn: "脂肪酶",
      def_en: "A hydrolytic enzyme present in the cytoplasm that cleaves the ester bonds of a triacylglycerol, releasing free fatty acids and glycerol. That single reaction is the whole of simple-lipid breakdown; everything after it acts on one half or the other.",
      def_cn: "存在于细胞质中的水解酶，切开三酰甘油的酯键，放出游离脂肪酸和甘油。单纯脂质的分解就只有这一个反应；之后的一切都只作用于其中一半。" },
    { en: "activation of a fatty acid", cn: "脂肪酸的活化",
      def_en: "The two-step, ATP- and coenzyme-A-dependent conversion of a free fatty acid into its CoA thioester, required before it can enter any metabolic pathway at all, catabolic or anabolic. Step 1 gives an acyl-adenylate and releases pyrophosphate; step 2, catalysed by thiokinase, gives the acyl-CoA and releases AMP.",
      def_cn: "把游离脂肪酸转化为它的辅酶 A 硫酯的两步反应，依赖 ATP 和辅酶 A；脂肪酸进入任何代谢途径之前都得先做这件事，分解与合成一视同仁。第一步生成酰基腺苷酸并放出焦磷酸；第二步由硫激酶催化，生成酰基-CoA 并放出 AMP。" },
    { en: "acyl-adenylate", cn: "酰基腺苷酸",
      def_en: "The intermediate of fatty acid activation: the fatty acid joined to AMP, formed in the first step with loss of pyrophosphate. Unstable and transient, which is why it is drawn in brackets rather than listed as a product.",
      def_cn: "脂肪酸活化的中间体：脂肪酸接在 AMP 上，在第一步生成并脱去焦磷酸。它不稳定、瞬时，所以图上用方括号标出，而不是当作产物列出。" },
    { en: "the real cost of activation", cn: "活化的真实代价",
      def_en: "One ATP is consumed, which is how the price is usually quoted, but it goes to AMP plus pyrophosphate and the pyrophosphate is hydrolysed as well. Two phosphoanhydride bonds are therefore broken, so activation costs the equivalent of two ATP — buying an effectively irreversible reaction and the thioester bond every later step relies on.",
      def_cn: "消耗一个 ATP，通常也是这样报价的；但它走的是到 AMP 加焦磷酸，而焦磷酸随后也被水解。于是断掉的是两个磷酸酐键，活化的代价相当于两个 ATP——买来的是一个实际上不可逆的反应，以及后面每一步都要靠的那个硫酯键。" }
  ]
};
