/* Merged spines — everything that feeds into glycolysis or leads out of it. 速通简洁版,
   ONE spine per TOPIC. Four topics, sixteen member nodes, four chains.

     key:feeder-pathways-glycolysis   7-6, 7-6-1, 7-10-1, 7-10-2, 7-10-3, 7-11-1-1, 7-11-1-2
     key:pentose-phosphate-pathway    7-6-2, 7-6-3, 7-7-1, 7-7-2
     key:fates-of-pyruvate            7-8-4, 7-8-5
     key:gluconeogenesis              7-9, 7-9-1, L-14-4-1

   Fifteen of the sixteen had no spine, so those chains are written from the state-exam
   textbook alone; `B` in a `src` is that book, chapter 7. The sixteenth, L-14-4-1, has a
   spine of thirteen steps and is the only Lehninger member anywhere in these four topics,
   so `A` citations appear in the gluconeogenesis chain and nowhere else — that chain uses
   the L-14-4-1 spine as its backbone and folds 7-9 and 7-9-1 into it.

   急速简化成主线不代表同意删除任何内容. Chains are sized to their material, not to a step
   count: 19 steps for seven nodes, 16 for four, 12 for two, 16 for three. Every named
   enzyme, every named intermediate and every number the sources print is carried.

   Node → step map, so nothing can quietly fall out:
     feeder      7-11-1-1  1-3     7-10-1  7-8     7-6-1   11-12    7-10-3  17-19
                 7-11-1-2  4-6     7-6     9-10    7-10-2  13-16
     pentose     7-7-1     1-5     7-6-2   6-8     7-6-3   9-10     7-7-2   11-16
     pyruvate    7-8-4     1-5     7-8-5   6-12
     gluconeo    L-14-4-1  1-16    7-9     2,3,7,9,10,12    7-9-1   14

   The threads:
     feeder      the gut takes a polysaccharide apart with water → the same class of enzyme
                 does it everywhere → but what comes out is not all glucose → only three
                 moves interconvert sugars → one of them needs the sugar tied to UDP → so
                 how a sugar gets tied to UDP → and that same UDP machinery carries
                 galactose all the way to glucose-1-phosphate, which is where glycolysis
                 picks it up.
     pentose     the pathway makes two things for two unrelated jobs → oxidise glucose at
                 C-1 and lose a CO2, and you have both → oxidise the other end instead and
                 you get vitamin C and a different pentose → and once the fragment-transfer
                 enzymes are on the table, the same pentoses can be reached with no
                 oxidation at all.
     pyruvate    one molecule, three destinations, and the two anaerobic ones exist for a
                 reason that has nothing to do with their products.
     gluconeo    the demand is a number → seven of ten reactions simply reverse → three are
                 measured too far downhill to reverse → three bypasses, their enzymes, their
                 compartments and their cost → and the cost is what buys direction.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. Every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read correctly
   with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------ 进入糖酵解之前：糖从哪里来 ---- */
window.BIOLITE_SPINE["key:feeder-pathways-glycolysis"] = {
  assumed: ["hydrolysis", "hydrolase", "enzyme", "coenzyme", "prosthetic group",
            "substrate", "specificity", "equilibrium", "oxidation", "reduction",
            "condensation", "ester", "alcohol", "hydroxyl", "carbonyl", "aldehyde",
            "ketone", "carboxyl", "amino group", "acetyl", "acyl", "phosphate",
            "pyrophosphate", "inorganic phosphate", "ATP", "ADP", "UTP", "UDP",
            "GDP", "CMP", "NAD+", "NADH", "kinase", "mutase", "transferase",
            "isomerase", "cell", "tissue", "organ", "liver", "pancreas", "saliva",
            "intestine", "urine", "blood", "hormone", "drug", "detoxification",
            "microorganism", "bacteria", "plant", "animal", "yeast", "malt",
            "monosaccharide", "disaccharide", "oligosaccharide", "polysaccharide",
            "carbohydrate", "sugar", "glucose", "galactose", "fructose", "mannose",
            "ribose", "xylose", "hexose", "pentose", "tetrose", "triose", "heptose",
            "aldose", "ketose", "starch", "amylose", "amylopectin", "glycogen",
            "cellulose", "maltose", "isomaltose", "lactose", "sucrose", "dextrin",
            "glucosamine", "sialic acid", "glycoprotein", "glycolipid",
            "glucuronic acid", "glucose-6-phosphate", "glucose-1-phosphate",
            "glyceraldehyde-3-phosphate", "dihydroxyacetone phosphate",
            "ribulose-5-phosphate", "xylulose-5-phosphate", "glycolysis",
            "citric acid cycle", "biosynthesis", "helix", "branch point"],
  nodeTitle_en: "What feeds glycolysis",
  nodeTitle_cn: "为糖酵解供料的那些通路",
  title_en: "How a polysaccharide is taken apart, how a glycosidic bond is put back together, and the three moves that turn any other sugar into the one glycolysis actually burns",
  title_cn: "多糖是怎么被拆开的、糖苷键又是怎么被重新接上的，以及把别的糖变成糖酵解真正烧的那一种，一共只有三种动作",
  steps: [

    /* ------------------------------------------------------------ 7-11-1-1 ---- */
    {
      en: "Polysaccharides are chains of many sugar units joined end to end, and an organism takes them apart in two separate places using two different chemistries. **In the digestive tract polysaccharides are broken by hydrolases, which are enzymes that cleave a bond using water, while inside a cell the same chains are broken by phosphorolysis instead.** Amylases are the important digestive enzymes here: they cleave starch — both its unbranched amylose and its branched amylopectin — and glycogen down to maltose units, and three of them are distinguished, alpha-, beta- and gamma-amylase.",
      cn: "多糖是许多糖单元首尾相连的长链，而生物体在两个彼此分开的地方、用两套不同的化学把它拆开。**在消化道里，多糖由水解酶拆开——水解酶就是用水去断键的酶；而在细胞内部，同样的链改由磷酸解来拆。**这里的主角是淀粉酶：它把淀粉（包括不分支的直链淀粉和分支的支链淀粉）和糖原一路切成麦芽糖单位，而淀粉酶又分三种：α-、β- 和 γ-淀粉酶。",
      src: "B §7.11, pp.172-173",
      see: [
        { id: "7-11-2-1", en: "phosphorolysis, the intracellular route, in full", cn: "细胞内那条路——磷酸解的完整过程" }
      ]
    },
    {
      link_en: "the first of the three cuts inside the chain",
      link_cn: "三种里的第一种，是在链的内部下刀",
      en: "Alpha-amylase is an endoglycosidase, meaning an enzyme that cuts within a chain rather than at its end, and its name comes from the form of the maltose it finally releases: alpha-maltose, which then equilibrates with the beta form by mutarotation. **Amylose is wound into a helix, and alpha-amylase first cuts the bonds sitting one helical turn apart, producing oligosaccharides six to seven glucose units long before it releases any maltose.** On amylopectin it cuts in no particular order and never attacks a branch point, so what it leaves behind is maltose plus the unsplit branched cores. Alpha-amylases turn up in three named places: saliva, the pancreas and malt.",
      cn: "α-淀粉酶是内切糖苷酶，也就是在链的内部下刀、而不是从末端下刀的酶；它的名字来自它最终放出的麦芽糖的构型：α-麦芽糖——之后再经变旋与 β 型达成平衡。**直链淀粉盘成螺旋，而 α-淀粉酶先切开相隔一个螺旋圈的那些键，生成 6 到 7 个葡萄糖单位长的寡糖，之后才开始放出麦芽糖。**对支链淀粉，它的切割没有次序可言，而且从不进攻分支点，所以留下的是麦芽糖加上没被切开的分支核心。α-淀粉酶出现在三个地方：唾液、胰腺和麦芽。",
      src: "B §7.11.1, pp.172-173"
    },
    {
      link_en: "the second type cuts at the other place entirely",
      link_cn: "第二种，下刀的位置完全不同",
      recall_en: "the opposite of alpha-amylase one step up: inside the chain there, at the end here",
      recall_cn: "和上一步的 α-淀粉酶正好相反：那边切链内，这边切链端",
      en: "Beta-amylase is an exoglycosidase — it chews maltose units off the ends of a chain instead of cutting inside it — and it too is named for what it releases, beta-maltose, which likewise mutarotates to the alpha form. **Beta-amylase hydrolyses amylose practically completely, but on amylopectin it stops short before every branch point, leaving a relatively high-molecular-weight residue called a dextrin.** Beta-amylases are found predominantly in the plant kingdom.",
      cn: "β-淀粉酶是外切糖苷酶——它从链的末端一个个啃下麦芽糖单位，而不是在链内部下刀——它的名字同样来自放出的产物：β-麦芽糖，也同样会变旋成 α 型。**β-淀粉酶几乎能把直链淀粉完全水解，但对支链淀粉，它在每一个分支点前就停住，留下一段分子量相当高的残余，叫做糊精。**β-淀粉酶主要分布在植物界。",
      src: "B §7.11.1, pp.172-173"
    },

    /* ------------------------------------------------------------ 7-11-1-2 ---- */
    {
      link_en: "so what is actually left on the plate when those two have finished?",
      link_cn: "那么这两个干完之后，盘子里剩下的到底是什么？",
      en: "The final products of starch or glycogen breakdown by alpha- and beta-amylase are two disaccharides, maltose and isomaltose, with isomaltose coming specifically from the branch regions, plus some free glucose released wherever an oligosaccharide happened to carry an odd number of glucose residues. **Maltose is taken the last step down to free glucose by alpha-D-glucosidase, the intestinal enzyme also called maltase, so the amylases by themselves never finish the job they start.**",
      cn: "α-和 β-淀粉酶分解淀粉或糖原的终产物是两个二糖——麦芽糖和异麦芽糖，其中异麦芽糖专门来自分支区域——此外还有一部分游离葡萄糖，来自那些恰好含奇数个葡萄糖残基的寡糖被切开的地方。**把麦芽糖送到游离葡萄糖那最后一步的是 α-D-葡萄糖苷酶，也就是肠道里那个又叫麦芽糖酶的酶；所以淀粉酶自己从来收不了它开的这个尾。**",
      src: "B §7.11.1, p.173",
      see: [
        { id: "7-3-2", en: "maltose and isomaltose as reducing disaccharides", cn: "作为还原性二糖的麦芽糖与异麦芽糖" }
      ]
    },
    {
      link_en: "and the third amylase does not need any help at all",
      link_cn: "而第三种淀粉酶根本不需要谁来帮忙",
      en: "Gamma-amylase is the third digestive amylase, and it cleaves glucose units straight off glycogen. **Gamma-amylase alone among the three hydrolyses both the 1-4 and the 1-6 bonds, which is why it can degrade a glycogen molecule completely by itself, and it occurs in the liver.** Its name carries no meaning beyond its being the third amylase type discovered.",
      cn: "γ-淀粉酶是第三种消化性淀粉酶，它直接从糖原上切下葡萄糖单位。**三种淀粉酶里只有 γ-淀粉酶同时水解 1-4 键和 1-6 键，正因如此它单枪匹马就能把一个糖原分子完全分解掉；它存在于肝脏中。**「γ」这个名字除了表示它是第三个被发现的淀粉酶之外，没有别的含义。",
      src: "B §7.11.1, p.173"
    },
    {
      link_en: "one polysaccharide passes straight through, and the reason is an enzyme we do not have",
      link_cn: "有一种多糖是原封不动穿过去的，原因是我们缺一个酶",
      en: "Cellulases are the enzymes that hydrolyse cellulose, and they occur mainly in microorganisms and only rarely in animals. **An animal living on cellulose relies on its microflora — the microorganisms in its gut, as in the rumen of a ruminant — because the animal makes no cellulase of its own.**",
      cn: "纤维素酶是水解纤维素的酶，它主要存在于微生物中，在动物体内很少见。**靠纤维素为生的动物依赖的是它的微生物群——也就是肠道里的那些微生物，比如反刍动物瘤胃里的那一群——因为动物自己根本不产纤维素酶。**",
      src: "B §7.11.1, p.173",
      see: [
        { id: "7-4-1-2", en: "why the cellulose bond is the one we cannot touch", cn: "为什么纤维素那条键是我们动不了的" }
      ]
    },

    /* -------------------------------------------------------------- 7-10-1 ---- */
    {
      link_en: "all of those enzymes belong to one class, and the class has one defining specificity",
      link_cn: "以上这些酶属于同一类，而这一类的定义性特点只有一条",
      en: "A glycoside is a sugar whose anomeric carbon carries an alkoxy group in place of its free hydroxyl, and hydrolysing one puts that hydroxyl back: a beta-D-glycoside plus water gives the free sugar plus ROH, catalysed by beta-D-glucosidase, with the equilibrium lying towards cleavage. **Enzymes that cleave a glycosidic bond are called glycosidases, and they are specific twice over: to which sugar is bound, and to whether the bond is alpha or beta.** Glycosidases are classified among the hydrolases. Towards the aglycone, which is the non-sugar part of a glycoside, they show very little specificity, and that is why they are named by sugar and configuration together: alpha-D-glucosidase, beta-D-glucosidase, alpha- and beta-D-galactosidase, beta-D-fructofuranosidase.",
      cn: "糖苷是异头碳上以烷氧基取代了游离羟基的糖，而把它水解掉，就是把那个羟基装回去：一个 β-D-糖苷加水，在 β-D-葡萄糖苷酶催化下，给出游离的糖加 ROH，平衡偏向裂解一侧。**能切开糖苷键的酶叫糖苷酶，而它的专一性是双重的：既专一于结合的是哪一种糖，也专一于那条键是 α 还是 β。**糖苷酶被归在水解酶之下。对配基——也就是糖苷中的非糖部分——它们的专一性很低；正因如此，它们是按「糖 + 构型」一起命名的：α-D-葡萄糖苷酶、β-D-葡萄糖苷酶、α- 与 β-D-半乳糖苷酶、β-D-呋喃果糖苷酶。",
      src: "B §7.10, p.170",
      see: [
        { id: "7-2-6", en: "the glycosidic bond itself, and what an aglycone is", cn: "糖苷键本身，以及配基是什么" }
      ]
    },
    {
      link_en: "one glycosidase preparation is older than almost any other, and it can also run backwards",
      link_cn: "有一份糖苷酶制剂比几乎所有别的酶都古老，而且它还能倒着跑",
      en: "Emulsin, obtained from almonds, is one of the longest-known enzymes of all, and it is a mixture of various glycosidases rather than a single protein: beta-D-glucosidase predominates in it, and alpha-D-glucosidase is entirely absent. **A glycosidase transfers the sugar residue onto water, so with enough of any substance carrying a free hydroxyl present it transfers that residue onto the hydroxyl instead, synthesising a glycoside.** That synthetic direction is an atypical reaction for these enzymes.",
      cn: "乳化素得自杏仁，是已知历史最悠久的酶之一；它是多种糖苷酶的混合物而不是单一蛋白：其中 β-D-葡萄糖苷酶占优势，而 α-D-葡萄糖苷酶完全没有。**糖苷酶做的事是把糖基转移到水分子上；所以只要体系里有足够多带游离羟基的物质，它就会把糖基转到那个羟基上去，于是合成出一个糖苷。**不过，这个合成方向对这些酶来说是非典型的反应。",
      src: "B §7.10, p.170",
      openQuestion_en: "Whether emulsin comes from sweet or from bitter almonds is left unresolved here: the source read for this chain says sweet, while the classical amygdalin-hydrolysing preparation is usually attributed to bitter almonds. Both readings are on the record and neither has been checked against a second source.",
      openQuestion_cn: "乳化素到底来自甜杏仁还是苦杏仁，这里没有定论：本条依据的来源写的是甜杏仁，而经典的水解苦杏仁苷的制剂通常被归给苦杏仁。两种说法都记在案上，都还没有拿第二个来源核对过。"
    },

    /* ---------------------------------------------------------------- 7-6 ---- */
    {
      link_en: "cleaving those bonds releases sugars, and not one of them has to be glucose",
      link_cn: "把这些键切开会放出糖，而其中没有哪一个非得是葡萄糖不可",
      en: "What digestion releases includes galactose, fructose and mannose alongside glucose, and an organism interconverts carbohydrates with one another using only three types of reaction. **Move one changes the steric arrangement at a single carbon atom, meaning the position of one hydroxyl group, and that is epimerisation; the aldose-to-ketose interconversion beside it is isomerisation.** Neither of the two changes the number of carbon atoms at all.",
      cn: "消化放出来的东西，除了葡萄糖还有半乳糖、果糖和甘露糖；而生物体把糖与糖互相转化，一共只用三类反应。**第一种动作改变一个碳原子上的立体构型，也就是挪动一个羟基的位置，这叫差向异构化；和它并列的醛糖⇌酮糖互变，叫异构化。**这两种反应都完全不改变碳原子的数目。",
      src: "B §7.6, p.159"
    },
    {
      link_en: "the other two moves do change the carbon count, in opposite ways",
      link_cn: "另外两种动作会改变碳数，而且方向相反",
      en: "Move two is oxidative degradation of one carbon atom: the sugar is dehydrogenated to a beta-oxo acid, which is an acid carrying a keto group on the second carbon from the carboxyl, and that acid then decarboxylates. **Oxidative degradation is how a hexose becomes a pentose, shortening the chain by one carbon, whereas move three transfers two- or three-carbon fragments between sugars and conserves every carbon.** A transferred fragment always leaves a ketose and always lands on an aldose, and that is how trioses, tetroses, pentoses and heptoses all arise out of hexoses.",
      cn: "第二种动作是把一个碳原子氧化降解：先把糖脱氢成 β-氧代酸——也就是从羧基数起第二个碳上带酮基的酸——然后这个酸脱羧。**氧化降解正是己糖变成戊糖的方式，链恰好缩短一个碳；而第三种动作在糖与糖之间搬运二碳或三碳片段，一个碳都不丢。**被搬走的片段总是从酮糖出发、总是落在醛糖上；三碳糖、四碳糖、戊糖和庚糖就是这样从己糖里长出来的。",
      src: "B §7.6, p.159"
    },

    /* -------------------------------------------------------------- 7-6-1 ---- */
    {
      link_en: "epimerisation has two worked cases, and one of them carries a condition",
      link_cn: "差向异构化有两个实例，其中一个带着一个前提条件",
      en: "Epimerisation is a change in the steric arrangement at one carbon atom, and its first case decides the whole of galactose metabolism. **Glucose and galactose interconvert by epimerisation, and the reaction takes uridine diphosphate — UDP — as its coenzyme, so it happens on a UDP-sugar and never on the free sugar.** The second case needs no such help: ribulose-5-phosphate and xylulose-5-phosphate are epimers of each other and interconvert directly.",
      cn: "差向异构化就是一个碳原子上立体构型的改变，而它的第一个实例决定了整个半乳糖代谢。**葡萄糖与半乳糖之间的互变是差向异构化，这个反应以尿苷二磷酸（UDP）为辅酶，所以它发生在 UDP-糖身上，从不发生在游离糖身上。**第二个实例不需要这种帮助：核酮糖-5-磷酸与木酮糖-5-磷酸互为差向异构体，直接互变。",
      src: "B §7.6.1, p.160"
    },
    {
      link_en: "and isomerisation, the move beside it, has two cases of its own",
      link_cn: "和它并列的异构化，也有它自己的两个实例",
      en: "Isomerisation is the shift of the carbonyl group onto the neighbouring carbon atom, which turns an aldose into a ketose and back again. **Two pairs interconvert this way: glucose with fructose in the plain unphosphorylated form, and glyceraldehyde-3-phosphate with dihydroxyacetone phosphate in phosphorylated form.** The second of those two pairs is a reaction glycolysis itself runs, immediately after it cuts a hexose in half.",
      cn: "异构化是羰基向相邻碳原子的转移，它把醛糖变成酮糖、也把酮糖变回醛糖。**有两对是这样互变的：葡萄糖与果糖，以未磷酸化的普通形式；以及 3-磷酸甘油醛与磷酸二羟丙酮，以磷酸化的形式。**后面这一对，正是糖酵解自己在把己糖劈成两半之后紧接着跑的那个反应。",
      src: "B §7.6.1, p.160",
      see: [
        { id: "7-8-1", en: "where that triose-phosphate isomerisation sits in glycolysis", cn: "那个丙糖磷酸异构化在糖酵解里的位置" }
      ]
    },

    /* -------------------------------------------------------------- 7-10-2 ---- */
    {
      link_en: "so how is a glycosidic bond ever made, when the equilibrium runs the other way?",
      link_cn: "那么，既然平衡偏向裂解，糖苷键到底是怎么造出来的？",
      recall_en: "the hydrolysis equilibrium six steps up lay towards cleavage, so synthesis cannot simply be it reversed",
      recall_cn: "上面第六步说过水解的平衡偏向裂解，所以合成不可能就是把它倒着跑",
      en: "Glycosides and oligosaccharides are built chiefly by glycosyltransferases, which are enzymes that do not hydrolyse anything and whose specificity mirrors that of the glycosidases: specific to the sugar transferred and to the bond formed. **A monosaccharide must be activated before any transferase will move it, meaning converted into a macroergic derivative, and the activating group is a nucleoside diphosphate.** UDP is the usual one; mannose is activated by guanosine diphosphate instead, and the sialic acids by cytidine monophosphate.",
      cn: "糖苷与寡糖主要由糖基转移酶搭建：这类酶完全不做水解，而它们的专一性与糖苷酶如出一辙——既专一于所转移的糖，也专一于所形成的键。**在任何转移酶动手之前，单糖必须先被活化，也就是先变成一个高能（macroergic）衍生物，而担任活化基团的是核苷二磷酸。**最常见的是 UDP；甘露糖改用鸟苷二磷酸活化，唾液酸则用胞苷一磷酸。",
      src: "B §7.10, pp.170-171"
    },
    {
      link_en: "activating glucose takes three steps, and only the last is the activation proper",
      link_cn: "活化葡萄糖要走三步，而只有最后一步才是真正的活化",
      en: "A kinase and one ATP give glucose-6-phosphate, and that is rearranged to glucose-1-phosphate. **Glucose-1-phosphate then reacts enzymatically with UTP to give uridine diphosphoglucose, written UDP-Glc, and pyrophosphate leaves as the other product of the same reaction.** UDP-Glc is the macroergic form of glucose that every glycosyltransferase draws on.",
      cn: "先由一个激酶加一个 ATP 生成葡萄糖-6-磷酸，它再重排为葡萄糖-1-磷酸。**接着葡萄糖-1-磷酸与 UTP 发生酶促反应，生成尿苷二磷酸葡萄糖（缩写 UDP-Glc），而同一个反应的另一个产物是离去的焦磷酸。**UDP-Glc 就是每一个糖基转移酶所取用的、葡萄糖的高能形式。",
      src: "B §7.10, pp.170-171",
      see: [
        { id: "L-15-2-1", en: "the same UDP-glucose, seen from glycogen synthesis", cn: "同一个 UDP-葡萄糖，从糖原合成那一侧看" }
      ]
    },
    {
      link_en: "with the sugar activated, one machine builds everything",
      link_cn: "糖一旦被活化，同一套机器就什么都能搭",
      recall_en: "the same UDP-sugar that the glucose-to-galactose epimerisation demanded three steps up",
      recall_cn: "就是上面第三步里，葡萄糖⇌半乳糖差向异构所要求的那个 UDP-糖",
      en: "From an activated monosaccharide — under glycosyltransferase catalysis, and with an acceptor carrying a free hydroxyl group — glycosides, disaccharides, oligosaccharides and polysaccharides can all be biosynthesised, and the same route builds the sugar components of glycoproteins and glycolipids. **Lactose shows how it runs: UDP-galactose plus glucose gives UDP plus lactose, the galactose residue moving from its activated form straight onto a free hydroxyl of glucose.**",
      cn: "从一个被活化的单糖出发，在糖基转移酶催化下、只要有带游离羟基的受体在场，糖苷、二糖、寡糖乃至多糖都能被合成出来；糖蛋白和糖脂上的糖链部分，走的也是同一条路。**乳糖把这件事演示得很清楚：UDP-半乳糖 + 葡萄糖 → UDP + 乳糖，半乳糖基就这样从它的活化形式直接搬到葡萄糖的一个游离羟基上。**",
      src: "B §7.10, pp.170-171",
      see: [
        { id: "7-5", en: "the oligosaccharides those transferases hang on proteins", cn: "这些转移酶挂到蛋白上的那些寡糖" }
      ]
    },
    {
      link_en: "and the same activated sugar does a second job that has nothing to do with building",
      link_cn: "同一个活化糖还干着第二件事，和「搭建」毫无关系",
      en: "UDP-glucose can be oxidised as well as donated. **UDP-glucose is enzymatically oxidised, with NAD+ as the hydrogen acceptor, to UDP-glucuronic acid, and a transferase then couples that to a hydroxy-compound to give a glucosiduronate plus free UDP.** The hydroxy-compound may be the body's own, a hormone for instance, or something brought in from outside, a drug or a foreign substance in food. This reaction takes place in the liver, and it is a route of detoxification: the conjugate is what leaves the body.",
      cn: "UDP-葡萄糖除了供出糖基，还可以被氧化。**UDP-葡萄糖在酶促下被氧化——以 NAD+ 作氢受体——生成 UDP-葡萄糖醛酸；随后一个转移酶把它与某个羟基化合物偶联，给出葡萄糖醛酸苷加游离的 UDP。**这个羟基化合物既可以是体内自身的东西，比如某个激素，也可以是从外面进来的东西，比如药物或食物里的异物。该反应在肝脏中进行，是一条解毒途径：真正排出体外的是这个结合物。",
      src: "B §7.10, pp.170-171"
    },

    /* -------------------------------------------------------------- 7-10-3 ---- */
    {
      link_en: "and a nucleotide-bound sugar can be rebuilt on the spot, without ever being let go",
      link_cn: "而结合在核苷酸上的糖，可以就地改造，全程不必松手",
      en: "UDP-glucose and UDP-galactose interconvert through UDP-glucose-4-epimerase — an enzyme that inverts the configuration at C-4 of the sugar ring and changes nothing else about it. **The epimerase works on the sugar while it is still tied to UDP, so glucose becomes galactose with no free sugar ever released, and the equilibrium settles at a glucose-to-galactose ratio of 1 to 3.**",
      cn: "UDP-葡萄糖与 UDP-半乳糖通过 UDP-葡萄糖-4-差向异构酶互相转化，这个酶只翻转糖环上 C-4 的构型，别的什么都不改。**差向异构酶作用的是结合在核苷酸上的糖，所以葡萄糖变成半乳糖的全程都没有游离糖被放出来；这个平衡最终停在葡萄糖比半乳糖 1 比 3 上。**",
      src: "B §7.10, p.172"
    },
    {
      link_en: "and galactose gets onto UDP by an exchange rather than by direct attachment",
      link_cn: "而半乳糖上到 UDP 上，靠的是一次交换，不是直接挂上去",
      en: "**Hexose-1-phosphate uridylyltransferase holds UDP-glucose plus galactose-1-phosphate in equilibrium with UDP-galactose plus glucose-1-phosphate, and that is how galactose gets onto UDP.** Both halves of the exchange are sugar phosphates, so nothing has to be activated twice.",
      cn: "**己糖-1-磷酸尿苷酰转移酶让「UDP-葡萄糖 + 半乳糖-1-磷酸」与「UDP-半乳糖 + 葡萄糖-1-磷酸」处于平衡，而半乳糖正是通过这次交换结合到 UDP 辅酶上的。**交换的两边都是糖磷酸，所以不必把谁再活化一遍。",
      src: "B §7.10, p.172"
    },
    {
      link_en: "three enzymes together, and galactose has arrived where glycolysis can take it",
      link_cn: "三个酶合在一起，半乳糖就走到了糖酵解能接手的地方",
      en: "Free galactose enters through galactokinase — the enzyme that phosphorylates it to galactose-1-phosphate at the cost of one ATP. **Galactokinase, the uridylyltransferase and the 4-epimerase acting together carry galactose all the way to glucose-1-phosphate, and this is the single most important metabolic pathway galactose has.** Glucose-1-phosphate is one mutase step from glucose-6-phosphate, which is the compound glycolysis takes up.",
      cn: "游离半乳糖的入口是半乳糖激酶，它消耗一个 ATP 把半乳糖磷酸化成半乳糖-1-磷酸。**半乳糖激酶、尿苷酰转移酶和 4-差向异构酶三者协同，把半乳糖一路送到葡萄糖-1-磷酸——这是半乳糖最重要的一条代谢途径。**而葡萄糖-1-磷酸离葡萄糖-6-磷酸只差一个变位酶，后者正是糖酵解接手的那个化合物。",
      src: "B §7.10, p.172",
      see: [
        { id: "7-8-1", en: "glycolysis, which begins at glucose-6-phosphate", cn: "从葡萄糖-6-磷酸开始的糖酵解" }
      ]
    }
  ],
  terms: [
    { en: "hydrolases versus phosphorolysis", cn: "水解酶与磷酸解",
      def_en: "The two chemistries that take a polysaccharide apart, told apart by which molecule attacks the bond. Water attacks in the digestive tract and the residue leaves as a free sugar; inorganic phosphate attacks inside a cell and the residue leaves already phosphorylated, which saves an ATP.",
      def_cn: "拆多糖的两套化学，区别只在于是谁去进攻那条键。消化道里进攻的是水，糖基以游离糖的形式离开；细胞内进攻的是无机磷酸，糖基离开时已经带着磷酸，因此省下一个 ATP。" },
    { en: "endoglycosidase / exoglycosidase", cn: "内切糖苷酶／外切糖苷酶",
      def_en: "Where the enzyme cuts. Alpha-amylase cuts within the chain and releases alpha-maltose; beta-amylase cuts maltose off the ends and releases beta-maltose. Both names come from the anomeric form of the product, not from the bond attacked.",
      def_cn: "指的是酶在哪里下刀。α-淀粉酶在链内部切、放出 α-麦芽糖；β-淀粉酶从末端切下麦芽糖、放出 β-麦芽糖。两个名字都来自产物的异头构型，而不是来自被进攻的那条键。" },
    { en: "dextrin", cn: "糊精",
      def_en: "The high-molecular-weight residue left when beta-amylase stops short at amylopectin's branch points. It exists because that enzyme cannot pass a 1-6 bond, so it is the fingerprint of branching in a digest.",
      def_cn: "β-淀粉酶在支链淀粉的分支点前停住之后留下的高分子量残余。它之所以存在，是因为该酶跨不过 1-6 键；所以它是消化产物里「有分支」的指纹。" },
    { en: "maltase, alpha-D-glucosidase", cn: "麦芽糖酶（α-D-葡萄糖苷酶）",
      def_en: "The intestinal enzyme that splits maltose into two glucose units. The amylases stop at maltose and isomaltose, so without this last step no free glucose reaches the blood from starch at all.",
      def_cn: "把麦芽糖切成两个葡萄糖的肠道酶。淀粉酶只走到麦芽糖和异麦芽糖为止，所以少了这最后一步，淀粉根本送不出游离葡萄糖进血。" },
    { en: "glycosidase", cn: "糖苷酶",
      def_en: "A hydrolase cleaving a glycosidic bond, specific both to the sugar and to whether the bond is alpha or beta, and barely specific at all to the aglycone. That second specificity is why starch and cellulose, both nothing but glucose, are not both digestible.",
      def_cn: "水解糖苷键的水解酶，既专一于糖、也专一于键是 α 还是 β，而对配基几乎没有专一性。正是第二重专一性，使得同样只由葡萄糖构成的淀粉与纤维素，并不是都能被消化。" },
    { en: "glycosyltransferase", cn: "糖基转移酶",
      def_en: "The non-hydrolysing enzyme that makes a glycosidic bond by moving an activated sugar residue onto an acceptor with a free hydroxyl. Synthesis never runs hydrolysis backwards: the sugar is paid for first, as a nucleoside-diphosphate derivative, and that payment is what makes the joining step go forward.",
      def_cn: "不做水解、靠把活化的糖基搬到带游离羟基的受体上来成糖苷键的酶。合成从不把水解倒着跑：糖要先付账、先变成核苷二磷酸衍生物，正是这笔预付款让连接这一步得以向前进行。" },
    { en: "UDP-Glc, uridine diphosphoglucose", cn: "UDP-葡萄糖（尿苷二磷酸葡萄糖）",
      def_en: "The activated, macroergic form of glucose, made from glucose-1-phosphate and UTP with pyrophosphate released. It is the donor for building glycosidic bonds, the substrate that becomes UDP-glucuronic acid for detoxification in the liver, and the form in which glucose is epimerised to galactose.",
      def_cn: "葡萄糖被活化后的高能形式，由葡萄糖-1-磷酸与 UTP 生成，同时放出焦磷酸。它既是搭建糖苷键的供体，又是在肝脏里变成 UDP-葡萄糖醛酸去解毒的底物，还是葡萄糖被差向异构成半乳糖时所处的形式。" },
    { en: "glucosiduronate", cn: "葡萄糖醛酸苷",
      def_en: "What a transferase makes by coupling UDP-glucuronic acid to a hydroxy-compound, whether the body's own hormone or a drug taken in from outside. The reaction happens in the liver, and the conjugate is the form in which the substance leaves the body.",
      def_cn: "转移酶把 UDP-葡萄糖醛酸与某个羟基化合物偶联而成的东西，那个化合物可以是体内的激素，也可以是外来的药物。反应在肝脏进行，而这个结合物就是该物质离开身体时的形态。" },
    { en: "the galactose route", cn: "半乳糖的那条路",
      def_en: "Galactokinase phosphorylates free galactose to galactose-1-phosphate; hexose-1-phosphate uridylyltransferase exchanges it onto UDP; UDP-glucose-4-epimerase flips C-4, equilibrium 1 to 3 in favour of galactose. The three together deliver glucose-1-phosphate, one mutase step from glycolysis.",
      def_cn: "半乳糖激酶把游离半乳糖磷酸化成半乳糖-1-磷酸；己糖-1-磷酸尿苷酰转移酶把它交换到 UDP 上；UDP-葡萄糖-4-差向异构酶翻转 C-4，平衡是 1 比 3、偏向半乳糖。三者合起来交出葡萄糖-1-磷酸，离糖酵解只差一个变位酶。" }
  ]
};

/* ------------------------------------------------------------ 磷酸戊糖途径 ---- */
window.BIOLITE_SPINE["key:pentose-phosphate-pathway"] = {
  assumed: ["cytosol", "cell", "enzyme", "coenzyme", "equilibrium", "oxidation",
            "reduction", "dehydrogenation", "decarboxylation", "hydrolysis",
            "ester", "lactone", "carbonyl", "aldehyde", "ketone", "carboxyl",
            "hydroxyl", "primary alcohol", "phosphate", "phosphorylation",
            "NADP+", "NADPH", "NAD+", "CO2", "ATP", "RNA", "DNA", "nucleotide",
            "nucleic acid", "vitamin", "urine", "hormone", "monosaccharide",
            "sugar", "glucose", "fructose", "ribose", "hexose", "pentose",
            "tetrose", "triose", "heptose", "aldose", "ketose", "epimer",
            "glucose-6-phosphate", "fructose-6-phosphate",
            "fructose-1,6-bisphosphate", "glyceraldehyde-3-phosphate",
            "dihydroxyacetone phosphate", "ribose-5-phosphate",
            "ribulose-5-phosphate", "xylulose-5-phosphate", "glucuronic acid",
            "ascorbic acid", "xylitol", "glycolysis", "citric acid cycle",
            "respiratory chain", "biosynthesis", "fatty acid", "cholesterol",
            "thiamine", "L-series", "D-series"],
  nodeTitle_en: "The pentose phosphate pathway",
  nodeTitle_cn: "磷酸戊糖途径",
  title_en: "Two products for two unrelated jobs, two ends of the same sugar that can be oxidised, and a second route to the same pentoses that oxidises nothing at all",
  title_cn: "两个产物服务于两件互不相干的工作、同一个糖的两端都可以被氧化，以及一条什么都不氧化、却到达同样磷酸戊糖的第二条路线",
  steps: [

    /* -------------------------------------------------------------- 7-7-1 ---- */
    {
      en: "The pentose phosphate pathways run in the cytosol and make two products for two completely unrelated jobs. **NADPH is the reduced coenzyme spent on reductions in biosynthesis, and ribose-5-phosphate is the five-carbon sugar phosphate used to build RNA, DNA and the nucleotide coenzymes.** A cell often needs one of the two and not the other, which is exactly why there are two routes to the pentose phosphates and only one of them makes NADPH.",
      cn: "磷酸戊糖途径在细胞质里运行，产出两样东西，服务于两件毫不相干的工作。**NADPH 是被还原的辅酶，花在生物合成中的各种还原反应上；核糖-5-磷酸则是五碳的糖磷酸，用来搭 RNA、DNA 和各种核苷酸辅酶。**细胞常常只需要其中一样而不需要另一样——这正是通往磷酸戊糖有两条路线、而只有一条产 NADPH 的原因。",
      src: "B §7.7, p.162",
      see: [
        { id: "4-1", en: "the nucleic acids that ribose-5-phosphate is built into", cn: "核糖-5-磷酸所构成的那些核酸" }
      ]
    },
    {
      link_en: "the first route starts by oxidising glucose at the end where its carbonyl sits",
      link_cn: "第一条路线从「羰基所在的那一端」开始氧化葡萄糖",
      en: "Glucose can be oxidised at C-1 or at C-6, and a CO2 is lost afterwards in both cases; the C-1 case is the more significant of the two. **D-glucose-6-phosphate dehydrogenase takes hydrogen off glucose-6-phosphate onto NADP+, giving NADPH and a lactone, which is a cyclic ester closed between the sugar's own acid and hydroxyl groups.**",
      cn: "葡萄糖既可以在 C-1 位被氧化，也可以在 C-6 位被氧化，两种情况之后都会脱掉一个 CO2；其中 C-1 那一路更为重要。**D-葡萄糖-6-磷酸脱氢酶把葡萄糖-6-磷酸上的氢取走、交给 NADP+，生成 NADPH 和一个内酯——内酯就是由糖自身的酸与羟基闭合而成的环状酯。**",
      src: "B §7.7, p.162; B §7.6.2, pp.160-161"
    },
    {
      en: "Lactonase is the enzyme that hydrolyses that ring open again. **Hydrolysis of 6-phosphogluconolactone gives 6-phosphogluconate, which is the open-chain carboxylic acid that the rest of this branch works on.**",
      cn: "内酯酶把那个环重新水解开。**6-磷酸葡糖酸内酯水解之后给出 6-磷酸葡糖酸，也就是这条支路后面所有反应真正加工的那个开链羧酸。**",
      src: "B §7.7, p.162"
    },
    {
      link_en: "and now the same molecule is oxidised a second time, which is where the carbon is lost",
      link_cn: "接着同一个分子被第二次氧化，而碳就是在这里丢掉的",
      recall_en: "the beta-oxo acid is move two from the interconversion rules: dehydrogenate, then decarboxylate",
      recall_cn: "这个 β-氧代酸就是糖互变三种动作里的第二种：先脱氢，再脱羧",
      en: "6-phosphogluconate is dehydrogenated a second time onto NADP+, and what that oxidation makes is a beta-oxo acid: the 6-phosphate ester of 3-oxogluconate. **A beta-oxo acid decarboxylates readily, so it loses CO2 and gives ribulose-5-phosphate, and since NADP+ accepted electrons at both oxidations the branch nets 2 NADPH per glucose-6-phosphate.**",
      cn: "6-磷酸葡糖酸被第二次脱氢、氢仍交给 NADP+，而这次氧化的产物是一个 β-氧代酸：3-氧代葡糖酸的 6-磷酸酯。**β-氧代酸很容易脱羧，于是它丢掉 CO2、给出核酮糖-5-磷酸；而因为两次氧化的电子受体都是 NADP+，这条支路每消耗一个葡萄糖-6-磷酸就净产 2 个 NADPH。**",
      src: "B §7.7, pp.162-163",
      openQuestion_en: "Which enzyme catalyses this oxidative decarboxylation is left unstated in the source read for this chain. The dehydrogenase and the lactonase before it are both named there and this one is not, in the running text and in the pathway figure alike, so no name is supplied here rather than one being written in from memory.",
      openQuestion_cn: "催化这一步氧化脱羧的到底是哪个酶，本条所依据的来源没有说。它前面的脱氢酶和内酯酶都被点了名，唯独这一步没有——正文和途径图里都没有；所以这里宁可空着，也不凭记忆补一个名字上去。"
    },
    {
      en: "Ribulose-5-phosphate is a ketose, and the characteristic product of this branch is an aldose. **The last step of the oxidative branch isomerises ribulose-5-phosphate to ribose-5-phosphate by moving the carbonyl group from C-2 to C-1, and ribose-5-phosphate is what nucleotide synthesis takes.**",
      cn: "核酮糖-5-磷酸是酮糖，而这条支路的特征产物是一个醛糖。**氧化支路的最后一步把核酮糖-5-磷酸异构化为核糖-5-磷酸，做法是把羰基从 C-2 挪到 C-1；而核苷酸合成取用的正是核糖-5-磷酸。**",
      src: "B §7.7, p.163"
    },

    /* -------------------------------------------------------------- 7-6-2 ---- */
    {
      link_en: "now the other end of the very same sugar",
      link_cn: "现在看同一个糖的另一端",
      recall_en: "the mirror of the C-1 oxidation four steps up: one molecule, opposite ends",
      recall_cn: "和上面第四步的 C-1 氧化互为镜像：同一个分子，两个相反的端",
      en: "Oxidising glucose at C-6 instead — at the terminal primary alcohol — gives glucuronate. **Glucuronate binds undesirable substances, whether the body's own or brought in from outside, and they leave the body in that bound form in the urine.** Glucuronate can also be broken down further, and the route it takes crosses over into the L-series.",
      cn: "改在 C-6 位、也就是末端伯醇上氧化葡萄糖，得到的是葡萄糖醛酸。**葡萄糖醛酸能结合各种不需要的物质，不论是体内自身的还是外面进来的，而它们就以这种结合形式随尿液离开身体。**葡萄糖醛酸也可以被继续分解，而它接下来走的路会跨进 L 系。",
      src: "B §7.6.2, pp.160-161"
    },
    {
      en: "The aldehyde group of glucuronate is enzymatically reduced, with NADPH and H+ as the hydrogen donor, to give L-gulonate. **The carbon chain effectively flips in that reduction — what was C-6 in glucuronate becomes C-1 in gulonate — which is how a sugar acid of the D-series crosses into the L-series.** One branch runs on from L-gulonate through L-gulonolactone to L-ascorbate, which is vitamin C.",
      cn: "葡萄糖醛酸的醛基在酶促下被还原，供氢的是 NADPH + H+，产物是 L-古洛糖酸。**在这次还原中碳链等于翻了个个儿——葡萄糖醛酸里的 C-6 变成了古洛糖酸里的 C-1——D 系的糖酸就是这样跨进 L 系的。**从 L-古洛糖酸出发的一条支路，经 L-古洛糖酸内酯通向 L-抗坏血酸，也就是维生素 C。",
      src: "B §7.6.2, pp.160-161",
      see: [
        { id: "7-2-2", en: "ascorbic acid as a sugar acid, and its enediol group", cn: "作为糖酸的抗坏血酸，以及它的烯二醇基团" }
      ]
    },
    {
      link_en: "the other branch out of L-gulonate ends up back at a pentose phosphate",
      link_cn: "从 L-古洛糖酸出发的另一条支路，最后又回到了一个磷酸戊糖",
      en: "The other branch is a dehydrogenation at C-3 onto NAD+, which makes the beta-oxo acid 3-keto-L-gulonate, and that decarboxylates to L-xylulose. **L-xylulose is reduced by NADPH to xylitol, dehydrogenated again to D-xylulose, and phosphorylated to D-xylulose-5-phosphate, which is a substrate of the transketolase reactions.** In pentosuria it is L-xylulose that appears in the urine.",
      cn: "另一条支路是在 C-3 位向 NAD+ 脱氢，生成 β-氧代酸 3-酮-L-古洛糖酸，后者脱羧给出 L-木酮糖。**L-木酮糖被 NADPH 还原成木糖醇，再一次脱氢变成 D-木酮糖，然后被磷酸化为 D-木酮糖-5-磷酸——而它正是转酮醇酶反应的底物。**在戊糖尿症中，出现在尿里的就是 L-木酮糖。",
      src: "B §7.6.2, pp.160-161"
    },

    /* -------------------------------------------------------------- 7-6-3 ---- */
    {
      link_en: "so much for oxidation; the remaining move was fragment transfer, and two enzymes do it",
      link_cn: "氧化说到这里；剩下那种动作是片段转移，由两个酶来做",
      en: "Aldolase cleaves fructose-1,6-bisphosphate into dihydroxyacetone phosphate and glyceraldehyde-3-phosphate, and the reaction is drawn as reversible. **Aldolase does one thing only: it makes two triose phosphates out of one hexose, or one hexose out of two triose phosphates, and nothing more general than that.**",
      cn: "醛缩酶把果糖-1,6-二磷酸劈成磷酸二羟丙酮和 3-磷酸甘油醛，而这个反应是以可逆的双向箭头画出来的。**醛缩酶只干一件事：把一个己糖变成两个丙糖磷酸，或者把两个丙糖磷酸拼回一个己糖，除此之外再无更广的本事。**",
      src: "B §7.6.3, p.161",
      see: [
        { id: "7-8-1", en: "the same cut, seen as the middle of glycolysis", cn: "同一刀，从糖酵解正中间看过去" }
      ]
    },
    {
      en: "Transaldolase transfers a dihydroxyacetone residue, three carbon atoms, from one sugar onto a different aldose, so it is not tied to remaking the hexose the residue came from. **Transaldolase needs no coenzyme at all, and it moves three carbon atoms at a time without oxidising anything anywhere.**",
      cn: "转醛醇酶把一个二羟丙酮残基——三个碳——从一种糖转移到另一种醛糖上，所以它并不被限定为只能把残基所来自的那个己糖重新拼回去。**转醛醇酶完全不需要辅酶——一个都不要；它一次搬三个碳，从酮糖搬到醛糖，而全程不发生任何氧化。**",
      src: "B §7.6.3, p.161"
    },

    /* -------------------------------------------------------------- 7-7-2 ---- */
    {
      link_en: "and the two-carbon fragment has its own enzyme, with its own coenzyme",
      link_cn: "而二碳片段有它自己的酶，也有它自己的辅酶",
      en: "Transketolase — the enzyme that moves the two-carbon fragment — carries it as active glycolaldehyde, and its coenzyme is thiamine diphosphate. **A transferred fragment always leaves a ketose and always lands on an aldose, whether it is the two carbons transketolase moves or the three transaldolase moves.**",
      cn: "转酮醇酶——负责搬运二碳片段的那个酶——把这个片段以「活性乙醇醛」的形式携带，它的辅酶是焦磷酸硫胺素。**被搬运的片段总是从酮糖出发、总是落在醛糖上，无论搬的是转酮醇酶那两个碳，还是转醛醇酶那三个碳。**",
      src: "B §7.7, p.162; B §7.6, p.159"
    },
    {
      link_en: "with those two enzymes on the table, the same pentoses can be reached with no oxidation at all",
      link_cn: "有了这两个酶，同样的磷酸戊糖可以在完全不氧化的情况下到达",
      en: "The second route to the pentose phosphates makes no NADPH whatsoever. **Transketolase takes two carbon atoms from fructose-6-phosphate and gives them to glyceraldehyde-3-phosphate, and the products are xylulose-5-phosphate and erythrose-4-phosphate.** Glyceraldehyde-3-phosphate is constantly available, because glycolysis produces it by cleaving fructose-1,6-bisphosphate.",
      cn: "通往磷酸戊糖的第二条路线一个 NADPH 也不产。**转酮醇酶从果糖-6-磷酸上取走两个碳、交给 3-磷酸甘油醛，产物是木酮糖-5-磷酸和赤藓糖-4-磷酸。**3-磷酸甘油醛是随时都有的，因为糖酵解裂解果糖-1,6-二磷酸时就在不断产生它。",
      src: "B §7.7, pp.162-163"
    },
    {
      en: "Erythrose-4-phosphate is the four-carbon aldose just left over, and it becomes the acceptor in the next transfer. **Transaldolase moves three carbons from a second fructose-6-phosphate onto erythrose-4-phosphate, giving sedoheptulose-7-phosphate — a seven-carbon ketose — plus glyceraldehyde-3-phosphate.**",
      cn: "赤藓糖-4-磷酸就是刚刚剩下的那个四碳醛糖，它成为下一次转移的受体。**转醛醇酶把三个碳从第二分子果糖-6-磷酸搬到赤藓糖-4-磷酸上，产物是景天庚酮糖-7-磷酸——一个七碳酮糖——外加 3-磷酸甘油醛。**",
      src: "B §7.7, pp.162-163"
    },
    {
      link_en: "and one more transfer closes the route on two pentoses",
      link_cn: "再搬一次，这条路线就落在两个戊糖上",
      recall_en: "the same ribulose-5-phosphate the oxidative branch reached by losing a CO2",
      recall_cn: "就是氧化支路靠丢掉一个 CO2 才到达的那个核酮糖-5-磷酸",
      en: "Sedoheptulose-7-phosphate and glyceraldehyde-3-phosphate meet in a second transketolase reaction, the seven-carbon sugar donating the two carbon atoms. **Two pentoses come out of it, ribose-5-phosphate and xylulose-5-phosphate; xylulose-5-phosphate is then epimerised to ribulose-5-phosphate and isomerised on to ribose-5-phosphate.**",
      cn: "景天庚酮糖-7-磷酸与 3-磷酸甘油醛在第二次转酮醇酶反应里相遇，供出那两个碳的是七碳糖。**从中出来两个戊糖：核糖-5-磷酸和木酮糖-5-磷酸；木酮糖-5-磷酸随后被差向异构成核酮糖-5-磷酸，再异构化为核糖-5-磷酸。**",
      src: "B §7.7, pp.162-163"
    },
    {
      link_en: "count the carbons across the three reactions and nothing has gone missing",
      link_cn: "把这三个反应的碳数一算，一个都没少",
      en: "**Two hexoses and one triose become three pentoses: 2 times 6 plus 3 is 15, and 3 times 5 is 15, so no carbon leaves as CO2 anywhere along this route.** Every transformation in it is reversible, so run backwards it turns three pentoses into two hexoses and one triose. Forwards it serves a cell that needs far more ribose-5-phosphate than NADPH; backwards it serves one that has pentoses to dispose of.",
      cn: "**两个己糖加一个丙糖变成三个戊糖：2×6+3 = 15，3×5 = 15，所以这条路线上没有任何一个碳以 CO2 的形式跑掉。**这条路线上的每一步转化都是可逆的，所以反着跑就把三个戊糖变回两个己糖加一个丙糖。正着跑，服务于「需要的核糖-5-磷酸远多于 NADPH」的细胞；反着跑，服务于「手上有戊糖要处理掉」的细胞。",
      src: "B §7.7, p.163"
    },
    {
      link_en: "join the reverse direction back onto the oxidative branch and the whole thing closes into a cycle",
      link_cn: "把反向那一段接回氧化支路，整件事就闭合成一个循环",
      en: "Isomerise fructose-6-phosphate back to glucose-6-phosphate, and a pentose cycle closes that could in principle oxidise glucose completely. **Glucose-6-phosphate would be oxidised six times over, at 2 NADPH a turn, to give 6 ribose-5-phosphate and from them 2 glyceraldehyde-3-phosphate — 12 NADPH per glucose-6-phosphate.** Those two triose phosphates would then be broken down by glycolysis, the citric acid cycle and the respiratory chain. Organisms do not actually break glucose down this way: these routes serve the biosynthesis of the pentose phosphates that nucleic acids need, with NADPH produced alongside for fatty acid and cholesterol synthesis, or without it.",
      cn: "把果糖-6-磷酸异构化回葡萄糖-6-磷酸，一个戊糖循环就闭合了，它原则上可以把葡萄糖完全氧化掉。**葡萄糖-6-磷酸要被氧化六轮、每轮 2 个 NADPH，才能给出 6 个核糖-5-磷酸，再由它们产生 2 个 3-磷酸甘油醛——每个葡萄糖-6-磷酸合计 12 个 NADPH。**那两个丙糖磷酸随后由糖酵解、柠檬酸循环和呼吸链分解掉。生物体实际上并不这样分解葡萄糖：这些路线服务的是核酸所需磷酸戊糖的生物合成，可以顺带产出 NADPH 供脂肪酸和胆固醇合成使用，也可以不产。",
      src: "B §7.7, p.163"
    }
  ],
  terms: [
    { en: "the two products", cn: "两个产物",
      def_en: "NADPH and ribose-5-phosphate, made in the cytosol for two jobs that have nothing to do with each other: reductions in biosynthesis, and the building of RNA, DNA and nucleotide coenzymes. A cell frequently wants one and not the other, and the whole two-route architecture follows from that.",
      def_cn: "NADPH 和核糖-5-磷酸，在细胞质里被造出来，服务于两件毫不相干的工作：生物合成中的还原反应，以及 RNA、DNA 与核苷酸辅酶的搭建。细胞常常只要其中一样——整套「两条路线」的结构就是从这一点推出来的。" },
    { en: "oxidative branch", cn: "氧化支路",
      def_en: "Glucose-6-phosphate to a lactone by D-glucose-6-phosphate dehydrogenase, lactone to 6-phosphogluconate by lactonase, then a second dehydrogenation to a beta-oxo acid that loses CO2 and gives ribulose-5-phosphate. NADP+ takes the electrons both times, so 2 NADPH per glucose-6-phosphate.",
      def_cn: "D-葡萄糖-6-磷酸脱氢酶把葡萄糖-6-磷酸变成内酯，内酯酶把内酯变成 6-磷酸葡糖酸，再一次脱氢生成 β-氧代酸、脱掉 CO2 得到核酮糖-5-磷酸。两次的电子受体都是 NADP+，所以每个葡萄糖-6-磷酸给出 2 个 NADPH。" },
    { en: "the C-6 oxidation branch", cn: "C-6 氧化那条支路",
      def_en: "Oxidising the terminal primary alcohol instead of the carbonyl end gives glucuronate, which conjugates unwanted substances for excretion in the urine. Reducing its aldehyde flips the chain into the L-series as L-gulonate, from which one branch makes ascorbate and the other reaches D-xylulose-5-phosphate.",
      def_cn: "氧化的是末端伯醇而不是羰基那一端，得到葡萄糖醛酸，它把不需要的物质结合起来随尿排出。把它的醛基还原，碳链就翻进 L 系成为 L-古洛糖酸；由此一条支路造出抗坏血酸，另一条走到 D-木酮糖-5-磷酸。" },
    { en: "transketolase and transaldolase", cn: "转酮醇酶与转醛醇酶",
      def_en: "The two fragment-transfer enzymes. Transketolase moves two carbons as active glycolaldehyde and needs thiamine diphosphate; transaldolase moves three carbons as a dihydroxyacetone residue and needs no coenzyme at all. In both, the donor is a ketose and the acceptor an aldose, and neither oxidises anything.",
      def_cn: "两个负责搬片段的酶。转酮醇酶以「活性乙醇醛」的形式搬两个碳，需要焦磷酸硫胺素；转醛醇酶以二羟丙酮残基的形式搬三个碳，完全不需要辅酶。两者的供体都是酮糖、受体都是醛糖，而且都不发生氧化。" },
    { en: "non-oxidative route", cn: "非氧化途径",
      def_en: "Three reactions with no NADPH anywhere: transketolase on fructose-6-phosphate and glyceraldehyde-3-phosphate, transaldolase onto erythrose-4-phosphate, transketolase again on sedoheptulose-7-phosphate. Two hexoses plus one triose give three pentoses, 15 carbons in and 15 out, and every step is reversible.",
      def_cn: "三个反应，全程没有 NADPH：转酮醇酶作用于果糖-6-磷酸与 3-磷酸甘油醛，转醛醇酶把三碳搬到赤藓糖-4-磷酸上，转酮醇酶再作用于景天庚酮糖-7-磷酸。两个己糖加一个丙糖给出三个戊糖，进 15 个碳、出 15 个碳，而且每一步都可逆。" },
    { en: "pentose cycle", cn: "戊糖循环",
      def_en: "What closes when the reverse non-oxidative direction is joined to the oxidative branch and fructose-6-phosphate is isomerised back to glucose-6-phosphate. Six turns would give 12 NADPH per glucose-6-phosphate — but organisms do not run it that way, and the routes exist to supply pentose phosphates.",
      def_cn: "把非氧化途径的反向那一段接回氧化支路、再把果糖-6-磷酸异构化回葡萄糖-6-磷酸，闭合成的东西。跑六轮，每个葡萄糖-6-磷酸能给出 12 个 NADPH——但生物体并不这样跑，这些路线存在的目的是供应磷酸戊糖。" }
  ]
};
/* ------------------------------------------------------------ 丙酮酸的去向 ---- */
window.BIOLITE_SPINE["key:fates-of-pyruvate"] = {
  assumed: ["cell", "tissue", "muscle", "organism", "enzyme", "coenzyme",
            "prosthetic group", "cofactor", "substrate", "equilibrium",
            "oxidation", "reduction", "dehydrogenation", "decarboxylation",
            "aldehyde", "keto acid", "carboxyl", "acetyl", "acyl", "thioester",
            "disulfide", "sulfur", "Gibbs energy", "redox potential",
            "flavoprotein", "FAD", "NAD+", "NADH", "CO2", "ATP", "oxygen",
            "anaerobic", "aerobic", "mitochondrion", "respiratory chain",
            "citric acid cycle", "fermentation", "yeast", "microorganism",
            "glucose", "glycolysis", "pyruvate", "lactate", "ethanol",
            "acetaldehyde", "coenzyme A", "acetyl-CoA", "lipoic acid",
            "thiamine", "thiazole", "alanine", "valine", "isoleucine",
            "leucine", "transamination", "glyceraldehyde-3-phosphate",
            "succinyl-CoA", "dimer", "subunit"],
  nodeTitle_en: "The fates of pyruvate",
  nodeTitle_cn: "丙酮酸的去向",
  title_en: "One molecule with three destinations, and the two anaerobic ones exist for a reason that has nothing at all to do with the products they make",
  title_cn: "一个分子，三个去向；而其中两条无氧的路之所以存在，理由和它们造出来的产物毫无关系",
  steps: [

    /* -------------------------------------------------------------- 7-8-4 ---- */
    {
      en: "The reactions running from glucose down to pyruvate are very similar in almost every organism and almost every cell type. **What differs from organism to organism is what happens to pyruvate afterwards, and pyruvate has exactly three destinations: ethanol, lactate, or acetyl-CoA.**",
      cn: "从葡萄糖一路到丙酮酸的那些反应，在几乎所有生物、几乎所有细胞类型里都非常相似。**真正因生物而异的是丙酮酸之后的遭遇，而丙酮酸恰好只有三个去向：乙醇、乳酸，或者乙酰辅酶 A。**",
      src: "B §7.8.1, p.167",
      see: [
        { id: "7-8-1", en: "the run from glucose to pyruvate itself", cn: "从葡萄糖到丙酮酸那一段本身" }
      ]
    },
    {
      link_en: "destination one, and it takes two enzymes",
      link_cn: "第一个去向，要用两个酶",
      en: "Yeast and some other organisms convert pyruvate to ethanol, and the process is called alcoholic fermentation. **Pyruvate decarboxylase splits CO2 off pyruvate to give acetaldehyde: pyruvate plus H+ yields acetaldehyde plus CO2, and the prosthetic group of that enzyme is thiamine diphosphate.** That decarboxylation runs as the first step of an oxidative decarboxylation — a decarboxylation and an oxidation happening in one motion — and that pattern comes back at the end of this chain.",
      cn: "酵母和另外一些生物把丙酮酸变成乙醇，这个过程叫酒精发酵。**丙酮酸脱羧酶从丙酮酸上劈下 CO2、给出乙醛：丙酮酸 + H+ → 乙醛 + CO2，而这个酶的辅基是焦磷酸硫胺素。**这次脱羧是作为「氧化脱羧」的第一步进行的——这个模式在本条主线的末尾还会回来。",
      src: "B §7.8.1, pp.167-168"
    },
    {
      en: "**Alcohol dehydrogenase then reduces acetaldehyde to ethanol using NADH: acetaldehyde plus NADH plus H+ stands in equilibrium with ethanol plus NAD+.** Two things came out of those two steps, and the one the cell was after is the second: ethanol is waste, and NAD+ is the point.",
      cn: "**接着醇脱氢酶用 NADH 把乙醛还原成乙醇：乙醛 + NADH + H+ 与 乙醇 + NAD+ 处于平衡。**这两步给出了两样东西，而细胞真正要的是后一样：乙醇是废物，NAD+ 才是目的。",
      src: "B §7.8.1, pp.167-168"
    },
    {
      link_en: "destination two reaches the same result in a single step",
      link_cn: "第二个去向，一步就到达同样的结果",
      recall_en: "the parallel of the alcohol route one step up: something is reduced, and NAD+ comes back",
      recall_cn: "和上一步的乙醇路线平行：还原掉一样东西，把 NAD+ 换回来",
      en: "A range of microorganisms form lactate from pyruvate instead, and cells of higher organisms do the same whenever the oxygen supply falls short, as in intensively working muscle. **Lactate dehydrogenase reduces pyruvate with NADH: pyruvate plus NADH plus H+ stands in equilibrium with lactate plus NAD+, one step where the alcohol route took two.**",
      cn: "另有多种微生物把丙酮酸变成乳酸；而高等生物的细胞在供氧不足时也走同一条路，比如剧烈工作的肌肉。**乳酸脱氢酶用 NADH 把丙酮酸还原：丙酮酸 + NADH + H+ 与 乳酸 + NAD+ 处于平衡——乙醇那条路要两步，这里一步就够。**",
      src: "B §7.8.1, p.168"
    },
    {
      link_en: "and now the reason both of those routes exist at all",
      link_cn: "现在说这两条路到底为什么存在",
      en: "**Regenerating NAD+ is what both of those reductions are for: without it glycolysis cannot get past glyceraldehyde-3-phosphate, and no ATP forms or is regenerated at all.** Oxidising glyceraldehyde-3-phosphate consumes NAD+, a cell holds very little of it at any moment, and anaerobic conditions offer no other way of handing the hydrogen back. Only a small part of the energy held in glucose is released by converting it anaerobically to lactate or to ethanol.",
      cn: "**这两次还原都是为了把 NAD+ 再生出来：没有它，糖酵解就过不了 3-磷酸甘油醛那一步，一个 ATP 也生成不了、再生不了。**氧化 3-磷酸甘油醛要消耗 NAD+，而细胞任何时刻手上的 NAD+ 都极少，厌氧条件下又没有别的办法把氢还回去。不过，把葡萄糖厌氧地转成乳酸或乙醇，只能放出它所含能量中很小的一部分。",
      src: "B §7.8.1, p.168"
    },

    /* -------------------------------------------------------------- 7-8-5 ---- */
    {
      link_en: "destination three is where nearly all of the energy actually is",
      link_cn: "第三个去向，才是能量几乎全部所在的地方",
      en: "Far more energy is obtained aerobically, through the citric acid cycle and the respiratory chain, and the compound that enters them is acetyl-CoA. **Acetyl-CoA is formed inside mitochondria by oxidative decarboxylation of pyruvate: pyruvate plus NAD+ plus CoA gives acetyl-CoA plus CO2 plus NADH plus H+.** The NAD+ that reaction needs is regenerated from NADH by passing electrons to oxygen in the mitochondrial respiratory chain, exactly as the NAD+ of the glyceraldehyde-3-phosphate step is.",
      cn: "有氧途径——柠檬酸循环加呼吸链——能拿到多得多的能量，而进入它们的化合物是乙酰辅酶 A。**乙酰辅酶 A 在线粒体内部由丙酮酸经氧化脱羧生成：丙酮酸 + NAD+ + CoA → 乙酰辅酶 A + CO2 + NADH + H+。**这个反应所需的 NAD+，是靠线粒体呼吸链把电子交给氧、从 NADH 那里再生出来的——和 3-磷酸甘油醛那一步所用的 NAD+ 一模一样。",
      src: "B §7.8.1, p.168"
    },
    {
      link_en: "one machine does the whole conversion, and it is not one enzyme",
      link_cn: "整个转化由一台机器完成，而它不是单个酶",
      en: "A multienzyme complex catalyses that conversion, and what the complex makes possible is decarboxylation and oxidation happening at the same moment, which is what an oxidative decarboxylation of an alpha-keto acid means. **The pyruvate dehydrogenase complex uses thiamine diphosphate, lipoic acid and coenzyme A on the substrate, with FAD and finally NAD+ taking part in regenerating the lipoic acid.**",
      cn: "催化这个转化的是一个多酶复合体；这个复合体让脱羧与氧化同时发生，而这正是「α-酮酸的氧化脱羧」这个说法的含义。**丙酮酸脱氢酶复合体在底物上用到焦磷酸硫胺素、硫辛酸和辅酶 A，而 FAD 以及最后的 NAD+ 参与的是硫辛酸的再生。**",
      src: "B §7.8.1, pp.168-169"
    },
    {
      en: "**Three enzymes make up the complex: pyruvate dehydrogenase decarboxylates pyruvate, dihydrolipoyl transacetylase moves the acetyl group, and dihydrolipoyl dehydrogenase reoxidises the lipoic acid.** Dihydrolipoyl transacetylase also forms the structural core of the assembly; pyruvate dehydrogenase, as alpha2-beta2 dimers, and dihydrolipoyl dehydrogenase are arranged around that core.",
      cn: "**这个复合体由三个酶组成：丙酮酸脱氢酶负责给丙酮酸脱羧，二氢硫辛酰转乙酰基酶负责搬运乙酰基，二氢硫辛酰脱氢酶负责把硫辛酸重新氧化回来。**二氢硫辛酰转乙酰基酶同时还是整个装配体的结构核心；丙酮酸脱氢酶（以 α2β2 二聚体的形式）和二氢硫辛酰脱氢酶就围着这个核心排布。",
      src: "B §7.8.1, pp.168-169"
    },
    {
      link_en: "the mechanism, in the order the two carbons actually travel",
      link_cn: "按那两个碳真实的行进顺序，把机理走一遍",
      en: "CO2 comes off pyruvate first, and what is left binds to C-2 of the thiazole ring of thiamine diphosphate as active acetaldehyde. **Transferring that aldehyde onto lipoic acid opens the disulfide ring of the lipoic acid and turns the aldehyde group into an acetyl group held by a high-energy thioester bond.** This transfer is the actual dehydrogenation, and the Gibbs energy of oxidising an aldehyde is conserved in that thioester bond.",
      cn: "首先从丙酮酸上脱下 CO2，剩下的部分以「活性乙醛」的形式结合在焦磷酸硫胺素噻唑环的 C-2 位上。**把这个醛基转移到硫辛酸上，会打开硫辛酸的二硫环，并把醛基变成一个由高能硫酯键系住的乙酰基。**这次转移才是真正的脱氢（氧化）步骤，而氧化一个醛所得的吉布斯自由能，就被保存在那条硫酯键里。",
      src: "B §7.8.1, pp.168-169"
    },
    {
      en: "**The acetyl group is then transferred onward from lipoic acid to coenzyme A without difficulty, and the product is acetyl-CoA: the compound this whole complex exists to make.** The energy kept in the thioester bond is what makes that onward transfer easy, so acetyl-CoA leaves the complex still carrying it.",
      cn: "**随后乙酰基从硫辛酸很容易地继续转移到辅酶 A 上，产物就是乙酰辅酶 A——整台复合体存在的目的就是造出它。**让这一次继续转移变得容易的，正是保存在硫酯键里的那份能量；所以乙酰辅酶 A 离开复合体时，仍然带着它。",
      src: "B §7.8.1, pp.168-169"
    },
    {
      link_en: "the lipoic acid has been left reduced, and putting it back is where the last two carriers come in",
      link_cn: "硫辛酸被留在了还原态，而把它复原，正是最后两个载体登场的地方",
      en: "**A flavoprotein dehydrogenates dihydrolipoic acid back to lipoic acid, and its redox potential is far more negative than usual — which is exactly what lets it hand the hydrogen on to NAD+.** That NAD+ is then reoxidised in the respiratory chain, and about three molecules of ATP come out of it.",
      cn: "**一种黄素蛋白把二氢硫辛酸重新脱氢、变回硫辛酸；它的氧化还原电位比一般黄素蛋白负得多——而这恰恰就是它能把氢继续交给 NAD+ 的原因。**这个 NAD+ 随后在呼吸链中被重新氧化，从中产出大约三个 ATP。",
      src: "B §7.8.1, pp.168-169"
    },
    {
      link_en: "and this mechanism is not a one-off; it is a pattern used in several places",
      link_cn: "而这套机理不是孤例，它是好几处都在用的一个模式",
      en: "Oxidative decarboxylation of an alpha-keto acid to an acyl-CoA is a far more generally used process than this single case. **The same mechanism turns alpha-ketoglutarate into succinyl-CoA in the citric acid cycle, and it processes the alpha-keto acids that transamination makes out of alanine, valine, isoleucine and leucine.**",
      cn: "把 α-酮酸氧化脱羧成酰基辅酶 A，是一个应用远比这一例广泛的过程。**同一套机理在柠檬酸循环里把 α-酮戊二酸变成琥珀酰辅酶 A，也用来处理丙氨酸、缬氨酸、异亮氨酸和亮氨酸经转氨作用生成的那些 α-酮酸。**",
      src: "B §7.8.1, p.169",
      see: [
        { id: "L-16-2-1", en: "alpha-ketoglutarate to succinyl-CoA, in the cycle itself", cn: "循环里那一步：α-酮戊二酸到琥珀酰辅酶 A" }
      ]
    }
  ],
  terms: [
    { en: "the three fates", cn: "三个去向",
      def_en: "Ethanol in yeast, lactate in many microorganisms and in oxygen-starved muscle, acetyl-CoA in mitochondria whenever oxygen is there. The route to pyruvate is nearly universal; the choice made after it is what separates a fermenting cell from a respiring one.",
      def_cn: "酵母走乙醇，许多微生物和缺氧的肌肉走乳酸，而只要有氧，线粒体里就走乙酰辅酶 A。通往丙酮酸的那一段几乎是普适的；真正把发酵的细胞和呼吸的细胞分开的，是它之后的选择。" },
    { en: "why fermentation exists", cn: "发酵为什么存在",
      def_en: "To regenerate NAD+, not to make ethanol or lactate — those are waste. Oxidising glyceraldehyde-3-phosphate consumes NAD+, a cell holds very little, and with no oxygen there is nowhere else to put the hydrogen; without the handback, glycolysis stops there and yields no ATP.",
      def_cn: "为了把 NAD+ 再生出来，而不是为了造乙醇或乳酸——那些是废物。氧化 3-磷酸甘油醛要消耗 NAD+，细胞手上又极少，没有氧时氢也没有别处可放；不把它还回去，糖酵解就停在那一步，一个 ATP 也拿不到。" },
    { en: "pyruvate dehydrogenase complex", cn: "丙酮酸脱氢酶复合体",
      def_en: "The mitochondrial multienzyme assembly that decarboxylates and oxidises pyruvate in one motion. Three enzymes: pyruvate dehydrogenase, dihydrolipoyl transacetylase (also the structural core), dihydrolipoyl dehydrogenase. Five cofactors: thiamine diphosphate, lipoic acid, coenzyme A, FAD, NAD+.",
      def_cn: "线粒体里的多酶装配体，一个动作之内同时完成对丙酮酸的脱羧和氧化。三个酶：丙酮酸脱氢酶、二氢硫辛酰转乙酰基酶（同时是结构核心）、二氢硫辛酰脱氢酶。五个辅因子：焦磷酸硫胺素、硫辛酸、辅酶 A、FAD、NAD+。" },
    { en: "high-energy thioester bond", cn: "高能硫酯键",
      def_en: "Where the energy of the oxidation is kept. The aldehyde on thiamine diphosphate is transferred to lipoic acid, opening its disulfide ring and becoming an acetyl group on sulfur; that bond's energy is what then makes the transfer onto coenzyme A go easily.",
      def_cn: "氧化所得的能量被存放的地方。焦磷酸硫胺素上的醛基被转移到硫辛酸上，打开它的二硫环，变成连在硫上的乙酰基；正是这条键里的能量，让接下来向辅酶 A 的转移变得轻而易举。" },
    { en: "oxidative decarboxylation of an alpha-keto acid", cn: "α-酮酸的氧化脱羧",
      def_en: "The general pattern, of which pyruvate to acetyl-CoA is one instance. Alpha-ketoglutarate to succinyl-CoA in the citric acid cycle is another, and so is the handling of the alpha-keto acids transamination makes from alanine, valine, isoleucine and leucine.",
      def_cn: "一个通用模式，丙酮酸变乙酰辅酶 A 只是其中一例。柠檬酸循环里 α-酮戊二酸变琥珀酰辅酶 A 是另一例；丙氨酸、缬氨酸、异亮氨酸、亮氨酸经转氨生成的 α-酮酸如何被处理，也是同一例。" }
  ]
};

/* ---------------------------------------------------------------- 糖异生 ---- */
window.BIOLITE_SPINE["key:gluconeogenesis"] = {
  assumed: ["glycolysis", "glycogen", "liver", "hepatocyte", "kidney", "muscle",
            "brain", "erythrocyte", "testis", "adipocyte", "blood", "tissue",
            "cell", "organ", "seedling", "yeast", "bacteria", "plant", "animal",
            "mammal", "enzyme", "coenzyme", "substrate", "isozyme", "equilibrium",
            "cytosol", "mitochondrion", "endoplasmic reticulum", "membrane",
            "transporter", "hormone", "glucagon", "amino acid", "protein",
            "glucose", "pyruvate", "lactate", "glycerol", "fatty acid",
            "triacylglycerol", "acetyl-CoA", "sucrose", "acetate", "propionate",
            "alanine", "glutamine", "aspartic acid", "leucine", "lysine",
            "valine", "isoleucine", "fumarate", "succinyl-CoA",
            "alpha-ketoglutarate", "citric acid cycle", "ATP", "ADP", "GTP",
            "GDP", "NADH", "NAD+", "AMP", "phosphate", "inorganic phosphate",
            "bicarbonate", "CO2", "Mg2+", "lysine residue", "amide bond",
            "hexokinase", "pyruvate kinase", "aldolase", "kinase", "phosphatase",
            "dehydrogenase", "transamination", "keto acid", "free energy",
            "photosynthesis", "cell wall", "urine", "fast", "exercise"],
  nodeTitle_en: "Gluconeogenesis",
  nodeTitle_cn: "糖异生",
  title_en: "Seven of the ten reactions simply reverse, three are measured too far downhill to reverse, and the cost of bypassing those three is exactly what buys the pathway its direction",
  title_cn: "十个反应里有七个只是反着跑，三个被实测为下坡太陡、退不回来；而绕过这三个所花的钱，买到的正是这条通路的「方向」",
  steps: [

    /* ----------------------------------------------------------- L-14-4-1 ---- */
    {
      en: "Some tissues run almost entirely on glucose: the brain and nervous system, and with them the erythrocytes, the testes, the renal medulla and embryonic tissue. **The brain alone requires about 120 g of glucose a day, which is more than half of all the glucose stored as glycogen in muscle and liver put together.** So the whole store is smaller than two days of one organ's demand, and between meals, through a longer fast, or after hard exercise it runs out. Gluconeogenesis, literally the new making of sugar, is the pathway that builds glucose from non-carbohydrate precursors, and the reactions are essentially the same in all animals, plants, fungi and microorganisms.",
      cn: "有些组织几乎完全靠葡萄糖运转：脑与神经系统，还有红细胞、睾丸、肾髓质和胚胎组织。**光是脑，每天就需要约 120 g 葡萄糖——这比肌肉和肝里以糖原形式储存的全部葡萄糖加起来的一半还多。**所以整个库存撑不到一个器官两天的用量；两餐之间、较长的禁食中，或者剧烈运动之后，它就见底了。糖异生（字面意思就是「新造糖」）这条通路，用非糖类前体造出葡萄糖；它的反应在所有动物、植物、真菌和微生物里本质上都相同。",
      src: "A p.533"
    },
    {
      link_en: "which organs run it, what they run it on, and the loop that name belongs to",
      link_cn: "哪些器官在跑这条路、用什么原料跑，以及那个回路叫什么名字",
      en: "In mammals gluconeogenesis happens mainly in the liver, less in the renal cortex — the outer layer of the kidney — and in the epithelial cells lining the small intestine, and the glucose made there goes into the blood for every other tissue. The precursors that matter in animals are three-carbon compounds, lactate, pyruvate and glycerol, together with certain amino acids. **Skeletal muscle lacks the main gluconeogenic enzymes, so its lactate travels in the blood to the liver, is rebuilt into glucose there, and returns to the muscle by blood — the Cori cycle.** Muscle can still oxidise that lactate aerobically; what it cannot do is turn it back into glucose. Outside animals the pathway serves other ends: a plant seedling converts stored fat and protein into sucrose for transport, and many microorganisms start it from acetate, lactate or propionate in their growth medium.",
      cn: "在哺乳动物里，糖异生主要发生在肝，其次是肾皮质（肾的外层）和小肠上皮细胞；在那里造出的葡萄糖进入血液，供给其余所有组织。动物体内要紧的前体是三碳化合物——乳酸、丙酮酸、甘油——外加某些氨基酸。**骨骼肌缺少主要的糖异生酶，所以它产生的乳酸随血液到肝，在肝里被重新造成葡萄糖，再随血液回到肌肉——这就是 Cori 循环。**肌肉仍然可以有氧地把那些乳酸氧化掉；它做不到的是把乳酸变回葡萄糖。在动物之外，这条通路服务于别的目的：植物幼苗把储存的脂肪和蛋白转成蔗糖以便运输，许多微生物则从培养基里的乙酸、乳酸或丙酸出发。",
      src: "A p.533; B §7.9, p.170"
    },
    {
      link_en: "so why not simply run glycolysis backwards?",
      link_cn: "那么，为什么不干脆把糖酵解倒着跑？",
      en: "Anaerobic glycolysis makes so much lactate that part of it can be spent on resynthesising glucose and glycogen, and in principle that resynthesis could run as a straightforward reversal of glycolysis. **Seven of the ten enzymatic reactions of gluconeogenesis are exactly the reverse of glycolytic ones; three cannot be, because in a living cell those three run far too far downhill to be pushed back up.**",
      cn: "厌氧糖酵解产生的乳酸多到其中一部分可以拿去重新合成葡萄糖和糖原；而原则上，这个再合成可以就是把糖酵解直接倒过来跑。**糖异生十个酶促反应里有七个恰好就是糖酵解反应的逆过程；另外三个不行——因为在活细胞里，这三步下坡下得太陡，推不回去。**",
      src: "B §7.9, p.169; A p.534"
    },
    {
      link_en: "and that claim is not asserted here, it is measured",
      link_cn: "而这个说法在这里不是断言，是被量出来的",
      en: "The three are glucose to glucose-6-phosphate by hexokinase, fructose-6-phosphate to fructose-1,6-bisphosphate by PFK-1, and phosphoenolpyruvate to pyruvate by pyruvate kinase. Measured in erythrocytes at pH 7, their actual cellular free-energy changes are −33.4, −22.2 and −16.7 kJ/mol, while all seven shared steps sit between −6 and +25, which is near zero. **Read the cellular values and not the standard ones: the aldolase reaction has the largest positive standard value of all ten steps, +23.8 kJ/mol, and yet inside the cell it runs between −6 and 0.**",
      cn: "这三步是：hexokinase 催化的葡萄糖 → 葡萄糖-6-磷酸；PFK-1 催化的果糖-6-磷酸 → 果糖-1,6-二磷酸；pyruvate kinase 催化的磷酸烯醇丙酮酸 → 丙酮酸。在红细胞、pH 7 条件下实测，它们在细胞内的实际自由能变化分别是 −33.4、−22.2、−16.7 kJ/mol，而共用的那七步全都落在 −6 到 +25 之间，也就是接近零。**要读细胞内的数值，不要读标准值：aldolase 那一步的标准值是全部十步里最大的正数，+23.8 kJ/mol，可它在细胞里跑的却是 −6 到 0。**",
      src: "A p.534-535"
    },
    {
      link_en: "the first bypass is the complicated one, and it runs through two compartments",
      link_cn: "第一条绕行路线最复杂，它横跨两个区室",
      en: "Pyruvate cannot be pushed back to phosphoenolpyruvate by reversing pyruvate kinase, so a roundabout route is used which in eukaryotes needs enzymes in the cytosol and in the mitochondrion both. Pyruvate is carried into the mitochondrion, or made there out of alanine by transamination, which is the moving of an amino group onto a keto acid. **Pyruvate carboxylase is a mitochondrial enzyme requiring the coenzyme biotin: it spends one ATP to add bicarbonate as CO2 to pyruvate, and what comes out is oxaloacetate.** Oxaloacetate is the four-carbon acid that carries the carbon onward. The chemistry has two beats: ATP first phosphorylates bicarbonate into a mixed anhydride called carboxyphosphate, and biotin then displaces that phosphate to become carboxybiotin. Biotin is tied to the enzyme by an amide bond to the ε-amino group of a lysine residue, and that long biotinyl-lysine arm swings the loaded CO2 from the site that makes it to the site that delivers it onto pyruvate. So the ATP is not spent on the bond that ends up forming — it is spent on making the CO2 carriable.",
      cn: "丙酮酸没法靠把 pyruvate kinase 反过来跑而被推回磷酸烯醇丙酮酸，所以要走一条远路；在真核生物里，这条路同时需要胞质和线粒体里的酶。丙酮酸先被运进线粒体，或者在线粒体里由丙氨酸经转氨作用生成——转氨作用就是把一个氨基挪到某个酮酸上。**丙酮酸羧化酶是一个需要辅酶生物素（biotin）的线粒体酶：它花掉一个 ATP，把碳酸氢根以 CO2 的形式加到丙酮酸上，出来的东西是草酰乙酸。**草酰乙酸就是接着往下运碳的那个四碳酸。这段化学分两拍：ATP 先把碳酸氢根磷酸化成一个混合酸酐，叫羧基磷酸；然后生物素把那个磷酸顶掉，自己变成羧基生物素。生物素通过一条酰胺键拴在酶上某个赖氨酸残基的 ε-氨基上，这条长长的「生物素-赖氨酸臂」把装好的 CO2 从「制造它的位点」荡到「把它交给丙酮酸的位点」。所以那个 ATP 并没有花在最终形成的那根键上——它花在「把 CO2 变得可搬运」这件事上。",
      src: "A p.534-535; B §7.9, p.169"
    },
    {
      link_en: "and one sentence in that step is pure regulation",
      link_cn: "而这一步里有一句话，纯粹是在讲调控",
      en: "Pyruvate carboxylase is the first regulatory enzyme of gluconeogenesis, and it requires acetyl-CoA as a positive effector, meaning a molecule that binds it and turns it up. Acetyl-CoA is produced by fatty acid oxidation, so a build-up of it announces that fatty acids are available as fuel. **A cell does not start making glucose because glucose is scarce; it starts because fat is there to burn instead, so the signal is an abundance of the alternative fuel.** The same acetyl-CoA is at that moment a negative modulator of pyruvate dehydrogenase, so one metabolite pushes pyruvate away from acetyl-CoA and towards oxaloacetate in the same instant. Keep one thing separate: this same reaction also replenishes citric acid cycle intermediates, and there the oxaloacetate stays in the cycle instead of being drawn off towards glucose.",
      cn: "丙酮酸羧化酶是糖异生通路上的第一个调节酶，它需要乙酰辅酶 A 作为正效应物——也就是一个结合上去、把它调高的分子。乙酰辅酶 A 由脂肪酸氧化产生，所以它的积累宣告的是「有脂肪酸可以当燃料」。**细胞开始造葡萄糖，并非由于葡萄糖短缺；它开始，是因为有脂肪可以拿来烧——所以信号是「替代燃料很充裕」。**与此同时，同一个乙酰辅酶 A 又是丙酮酸脱氢酶的负调节物，于是同一个代谢物在同一瞬间，把丙酮酸从乙酰辅酶 A 那边推向草酰乙酸。有一件事要分开记：同一个反应也用来回补柠檬酸循环的中间产物，那时草酰乙酸留在循环里，而不是被抽去造葡萄糖。",
      src: "A p.535",
      see: [
        { id: "L-16-2-1", en: "why the cycle needs its oxaloacetate replenished", cn: "循环为什么需要有人来补草酰乙酸" }
      ]
    },
    {
      link_en: "the second half of the same bypass, and the detour in it is not a detour",
      link_cn: "同一条绕行路线的后半段——而其中那段「绕路」其实并不是绕路",
      en: "The inner mitochondrial membrane has no transporter for oxaloacetate, so oxaloacetate is reduced to malate by mitochondrial malate dehydrogenase at the cost of NADH before it can leave, crosses on its own transporter, and is reoxidised in the cytosol. **PEP carboxykinase then converts that oxaloacetate to phosphoenolpyruvate using GTP, and not ATP, as the phosphoryl donor, and it releases the CO2 again.** Oxaloacetate is phosphorylated far more easily than pyruvate is, because forming the enol is easier. And the excursion has a purpose beyond the carbon: the cytosolic NADH-to-NAD+ ratio is orders of magnitude lower than the mitochondrial one, and reoxidising malate in the cytosol delivers exactly the NADH that gluconeogenesis spends further up, reducing 1,3-bisphosphoglycerate. The detour carries electrons, and the carbon comes along with them.",
      cn: "线粒体内膜上没有草酰乙酸的转运蛋白，所以草酰乙酸必须先由线粒体的苹果酸脱氢酶消耗 NADH 还原成苹果酸才能出去；苹果酸走自己的转运蛋白出膜，在胞质里被重新氧化。**随后 PEP 羧激酶把那个草酰乙酸转成磷酸烯醇丙酮酸，用的磷酰基供体是 GTP 而不是 ATP，并且把那个 CO2 又放了出去。**草酰乙酸比丙酮酸容易磷酸化得多，因为它的烯醇式更容易形成。而这趟绕行的意义还不止于碳：胞质里 NADH 对 NAD+ 的比值比线粒体里低好几个数量级，而在胞质中把苹果酸重新氧化，交付的正是糖异生在更上游——还原 1,3-二磷酸甘油酸那一步——要花掉的 NADH。这条绕路搬的是电子，碳只是跟着一起走。",
      src: "A p.535-536; B §7.9, p.169"
    },
    {
      link_en: "add the bypass up, and notice what the two CO2 molecules were for",
      link_cn: "把这条绕行加总，然后注意那两个 CO2 是干什么用的",
      en: "The four reactions sum to pyruvate plus ATP plus GTP plus bicarbonate giving phosphoenolpyruvate plus ADP plus GDP plus Pi plus CO2, with a standard free-energy change of +0.9 kJ/mol and an actual cellular value of about −25 kJ/mol, because phosphoenolpyruvate is consumed so fast elsewhere that its concentration stays low. **The CO2 that pyruvate carboxylase adds is the same molecule PEP carboxykinase removes: carboxylate and then decarboxylate is how a cell activates pyruvate.** Two high-energy phosphate equivalents are spent to phosphorylate one pyruvate, where glycolysis running the other way got only one ATP out of that same step. The identical trick activates acetyl-CoA for fatty acid synthesis, so it is a pattern to recognise. One variant: when lactate is the starting material, oxidising it to pyruvate already gives cytosolic NADH, so no malate export is needed and a separate mitochondrial isozyme of PEP carboxykinase makes phosphoenolpyruvate inside the organelle for export.",
      cn: "四个反应加总得到：丙酮酸 + ATP + GTP + 碳酸氢根 → 磷酸烯醇丙酮酸 + ADP + GDP + Pi + CO2，标准自由能变化 +0.9 kJ/mol，而实测胞内浓度算出的实际值约为 −25 kJ/mol——因为磷酸烯醇丙酮酸在别处被消耗得太快、浓度一直很低。**丙酮酸羧化酶加上去的那个 CO2，正是 PEP 羧激酶拿掉的同一个分子：先羧化、再脱羧，这就是细胞活化丙酮酸的办法。**为把一个丙酮酸磷酸化要花掉两个高能磷酸当量，而糖酵解朝另一个方向跑时，同一步只拿到一个 ATP。一模一样的把戏被用来活化乙酰辅酶 A 以合成脂肪酸，所以这是一个要认出来的模式。还有一个变体：当起始物是乳酸时，把它氧化成丙酮酸本身就给出了胞质 NADH，于是不需要输出苹果酸；这时由 PEP 羧激酶的一个线粒体同工酶在细胞器内部造出磷酸烯醇丙酮酸再运出去。",
      src: "A p.536-537"
    },
    {
      link_en: "and from that compound upward, nothing special is needed at all",
      link_cn: "而从这个化合物往上，就什么特别的手段都不需要了",
      en: "**From phosphoenolpyruvate upward, gluconeogenesis proceeds as a straightforward reversal of glycolysis: the enolase, mutase, kinase, dehydrogenase, isomerase and aldolase steps all run backwards.** Every one of those reactions sits near equilibrium inside the cell, which is precisely why nothing special is needed to make them go the other way.",
      cn: "**从磷酸烯醇丙酮酸往上，糖异生就是把糖酵解直接倒过来跑：烯醇化酶、变位酶、激酶、脱氢酶、异构酶、醛缩酶那几步统统反着走。**这些反应在细胞里全都处在接近平衡的位置——正因如此，让它们朝另一个方向走并不需要任何特别的手段。",
      src: "B §7.9, p.169"
    },
    {
      link_en: "two departures are left, and both of them sit at the very end",
      link_cn: "只剩两处偏离，而且都在最末尾",
      en: "Fructose-1,6-bisphosphate is hydrolysed to fructose-6-phosphate and inorganic phosphate, and glucose itself arises by hydrolysis of glucose-6-phosphate, likewise releasing inorganic phosphate instead of making ATP. The two enzymes are fructose-1,6-bisphosphatase, called FBPase-1 to distinguish it from the regulatory FBPase-2, and glucose-6-phosphatase; their standard free-energy changes are −16.3 and −13.8 kJ/mol, and both reactions are plain hydrolyses rather than kinases run in reverse. **Notice what both hydrolyses throw away: the phosphate a kinase paid a whole ATP to attach is released as inorganic phosphate and lost, and that waste is what buys direction.**",
      cn: "果糖-1,6-二磷酸被水解成果糖-6-磷酸和无机磷酸；葡萄糖本身则由葡萄糖-6-磷酸水解而来，同样是放出无机磷酸，而不是生成 ATP。这两个酶是果糖-1,6-二磷酸酶（叫 FBPase-1，以便与起调控作用的 FBPase-2 区分开）和葡萄糖-6-磷酸酶；它们的标准自由能变化分别是 −16.3 和 −13.8 kJ/mol，而且这两个反应都是干干净净的水解，不是「激酶反着跑」。**注意这两次水解扔掉了什么：激酶当初花了一整个 ATP 才装上去的那个磷酸，如今被当作无机磷酸放掉、白白损失——而这份浪费买到的就是「方向」。**",
      src: "B §7.9, p.169; A p.536-537"
    },
    {
      link_en: "and where the last of those two enzymes sits decides which organs can feed the blood",
      link_cn: "而后一个酶坐在哪里，决定了哪些器官有资格给血液供糖",
      en: "Glucose-6-phosphatase is a magnesium-activated membrane protein in the lumen of the endoplasmic reticulum, present in hepatocytes, kidney cells and small-intestine epithelium and in no other tissue. Any other tissue would be harmed by having it, because it would hydrolyse the very glucose-6-phosphate that tissue needs for glycolysis, and the phosphate group is what keeps glucose inside a cell at all. **Muscle stores glycogen and can break it down, but muscle has no glucose-6-phosphatase, so muscle glycogen can never raise blood glucose — it only ever fuels the muscle it sits in.**",
      cn: "葡萄糖-6-磷酸酶是一个由镁激活的膜蛋白，位于内质网腔内，只存在于肝细胞、肾细胞和小肠上皮细胞里，别的组织都没有。别的组织如果有它反而会受害，因为它会去水解那个组织自己做糖酵解所需要的葡萄糖-6-磷酸；而磷酸基团正是把葡萄糖扣在细胞内的那样东西。**肌肉储存糖原、也能分解糖原，但肌肉没有葡萄糖-6-磷酸酶，所以肌糖原永远抬不高血糖——它只能给它所在的那块肌肉供能。**",
      src: "A p.537",
      see: [
        { id: "L-15-2-1", en: "glycogen breakdown, and the same enzyme met from the other side", cn: "糖原分解，以及从另一侧碰上的同一个酶" }
      ]
    },
    {
      link_en: "so what does one glucose actually cost?",
      link_cn: "那么造一个葡萄糖到底要花多少？",
      en: "The whole synthesis from pyruvate to free blood glucose sums to 2 pyruvate plus 4 ATP plus 2 GTP plus 2 NADH plus 4 water giving 1 glucose plus 4 ADP plus 2 GDP plus 6 Pi plus 2 NAD+. **Six high-energy phosphate groups go into one glucose, four from ATP and two from GTP, plus two NADH — against the two ATP that glycolysis returned on the way down.** Counted per triose phosphate instead, the same bill comes to three high-energy phosphates: one for forming carboxybiotin, one for the decarboxylative phosphorylation of oxaloacetate, and one for the reduction of 3-phosphoglycerate. Two trioses to a glucose makes six, so the two ways of counting agree exactly.",
      cn: "从丙酮酸到游离血糖的整个合成加总为：2 丙酮酸 + 4 ATP + 2 GTP + 2 NADH + 4 H2O → 1 葡萄糖 + 4 ADP + 2 GDP + 6 Pi + 2 NAD+。**造一个葡萄糖要投进六个高能磷酸基团，四个来自 ATP、两个来自 GTP，另加两个 NADH——而糖酵解下坡时只还了两个 ATP 回来。**换成按每个丙糖磷酸来算，同一笔账是三个高能磷酸：一个用于形成羧基生物素，一个用于草酰乙酸的脱羧磷酸化，一个用于 3-磷酸甘油酸的还原。一个葡萄糖要两个丙糖磷酸，3×2 = 6——两种数法完全对得上。",
      src: "A p.537-538; B §7.9, p.170"
    },
    {
      link_en: "and why is a cell willing to pay it?",
      link_cn: "那细胞为什么肯付这个钱？",
      en: "Most of that cost is what makes gluconeogenesis irreversible, and two numbers say it plainly: under intracellular conditions the overall free-energy change of glycolysis is at least −63 kJ/mol, and the overall change of gluconeogenesis is −16 kJ/mol. **Both pathways run downhill in the same cell at the same time, which is only possible because they are not the same set of reactions, and that is why the three bypasses exist.** There is a second reason to pay: simply excreting pyruvate would throw away the more than ten ATP its complete aerobic oxidation could have produced.",
      cn: "这份开销的大部分，买的正是「糖异生不可逆」这件事；两个数字把它说实了：在细胞内条件下，糖酵解总的自由能变化至少是 −63 kJ/mol，糖异生总的自由能变化是 −16 kJ/mol。**同一个细胞、同一时刻，两条方向相反的通路都在下坡；这之所以可能，唯一的原因是它们并不是同一套反应——那三条绕行路线正是为此而存在。**还有第二个肯付钱的理由：直接把丙酮酸排掉，等于扔掉它完全有氧氧化本可产出的十个以上 ATP。",
      src: "A p.538"
    },

    /* -------------------------------------------------------------- 7-9-1 ---- */
    {
      link_en: "and the list of things that can be turned into glucose is much wider than lactate",
      link_cn: "而「能被变成葡萄糖的东西」远不止乳酸",
      en: "An amino acid can be converted to glucose on one condition: its breakdown must supply either pyruvate or a four-carbon dicarboxylic acid. **Alanine supplies pyruvate and aspartic acid a four-carbon dicarboxylic acid, and any such acid is a citric acid cycle intermediate, so it reaches oxaloacetate and enters the pathway.** Amino acids that can undergo net conversion to glucose this way are called glucogenic, and the entry points are pyruvate, alpha-ketoglutarate, succinyl-CoA, fumarate and oxaloacetate. Of the 20 common amino acids only leucine and lysine cannot furnish carbon for net glucose synthesis, and eighteen of twenty is far easier to hold than a list of eighteen names. Alanine and glutamine matter most physiologically, because they are the main carriers of amino groups from other tissues to the liver, and once those groups are stripped off in liver mitochondria the skeletons left behind — pyruvate and alpha-ketoglutarate — go straight into gluconeogenesis.",
      cn: "一个氨基酸能不能变成葡萄糖，只取决于一个条件：它的分解必须提供丙酮酸，或者一个四碳二羧酸。**丙氨酸提供的是丙酮酸，天冬氨酸提供的是四碳二羧酸；而任何这样的酸都是柠檬酸循环的中间产物，所以它能到达草酰乙酸，像丙酮酸一样进入这条通路。**能这样净转化为葡萄糖的氨基酸叫生糖氨基酸，入口有五个：丙酮酸、α-酮戊二酸、琥珀酰辅酶 A、延胡索酸、草酰乙酸。20 种常见氨基酸里，只有亮氨酸和赖氨酸不能为葡萄糖的净合成提供碳——「二十里有十八」比记十八个名字容易得多。其中丙氨酸和谷氨酰胺在生理上最要紧，因为它们是把氨基从其他组织运到肝去的主要载体；氨基在肝线粒体里被摘掉之后，剩下的骨架（分别是丙酮酸和 α-酮戊二酸）直接进入糖异生。",
      src: "B §7.9.1, p.170; A p.538, Table 14-4"
    },
    {
      link_en: "and the one substrate that famously cannot be used, with the reason spelled out",
      link_cn: "还有那个众所周知不能用的底物——把理由说清楚",
      en: "**No net conversion of fatty acids to glucose occurs in mammals, and the reason is a chain of three clauses, each of which blocks a different escape route.** Catabolism of most fatty acids yields only acetyl-CoA; acetyl-CoA cannot serve as a glucose precursor, because the pyruvate dehydrogenase reaction that made it is irreversible; and mammalian cells have no other pathway back from acetyl-CoA to pyruvate. Plants, yeast and many bacteria do have one, the glyoxylate cycle, which converts acetyl-CoA to oxaloacetate, and that is how a germinating seedling lives on stored seed oil before it has leaves. Two qualifications keep the answer honest. Mammals can use the glycerol released when a triacylglycerol is broken up: glycerol kinase phosphorylates it, and oxidising the middle carbon gives dihydroxyacetone phosphate, an intermediate of this very pathway. And adipocytes, which have no glycerol kinase, run a truncated version called glyceroneogenesis — pyruvate down to dihydroxyacetone phosphate, then reduction to glycerol-3-phosphate — because they need a glycerol backbone to build fat onto.",
      cn: "**哺乳动物体内不存在脂肪酸到葡萄糖的净转化，理由是一条三段式的链条，每一段各堵死一条逃生路。**第一，大多数脂肪酸的分解只产生乙酰辅酶 A。第二，乙酰辅酶 A 不能充当葡萄糖前体，因为造出它的那个丙酮酸脱氢酶反应是不可逆的。第三，哺乳动物细胞里没有别的通路能把乙酰辅酶 A 送回丙酮酸。植物、酵母和许多细菌有这样一条——乙醛酸循环，它把乙酰辅酶 A 变成草酰乙酸；一株还没长出叶子的萌发幼苗，靠的就是种子里储存的油。两条限定让这个回答保持诚实。哺乳动物确实能用三酰甘油被拆开时放出的甘油：甘油激酶把它磷酸化，再把中间那个碳氧化，就得到磷酸二羟丙酮——正是这条通路上的一个中间产物。而没有甘油激酶的脂肪细胞，跑的是一个截短版本，叫甘油异生：从丙酮酸走到磷酸二羟丙酮，再还原成 3-磷酸甘油——因为它们需要一副甘油骨架，好把脂肪搭上去。",
      src: "A p.538",
      see: [
        { id: "L-17-2-1", en: "where the acetyl-CoA from fatty acids actually goes", cn: "脂肪酸来的乙酰辅酶 A 究竟去了哪里" }
      ]
    },
    {
      link_en: "last: both directions sit in the same cytosol, so they have to be switched against each other",
      link_cn: "最后：两个方向同处一个胞质，所以必须彼此对着开关",
      en: "In animals both pathways run largely in the cytosol, which forces them into reciprocal and coordinated regulation — each opposed pair of enzymes governed together and in opposite directions. FBPase-1 is strongly inhibited by AMP, so when the ATP supply is low the ATP-hungry synthesis of glucose slows, while that same AMP relieves ATP's inhibition of PFK-1. **The dominant regulator is fructose-2,6-bisphosphate, and its most important property is that no flux runs through it at all, so a cell can raise and lower it purely as information.** It activates PFK-1 and inhibits FBPase-1 in the same instant, and the load-bearing measurement is that at physiological concentrations of everything else, PFK-1 is virtually inactive without it. So the gluconeogenic switch reads: fat available, energy charge high, fructose-2,6-bisphosphate low — and glucagon is the hormone that lowers it.",
      cn: "在动物体内，两条通路大部分都在胞质里跑，这就逼出了互反而协同的调控。FBPase-1 被 AMP 强烈抑制，所以当 ATP 供应偏低时，那条很费 ATP 的造糖路线就减速；而同一个 AMP 又解除了 ATP 对 PFK-1 的抑制。**起主导作用的调节物是果糖-2,6-二磷酸，而它最要紧的性质是：完全没有通量从它身上流过，所以细胞可以纯粹把它当成「信息」来抬高或压低。**它同时激活 PFK-1、抑制 FBPase-1；而最吃重的那个测量结果是：在其他一切都处于生理浓度时，没有它，PFK-1 几乎完全没有活性。所以糖异生这一侧的开关读数是：脂肪可用、能荷高、果糖-2,6-二磷酸低——而把它压低的那个激素是胰高血糖素。",
      src: "A p.534, 542",
      see: [
        { id: "L-14-5-1", en: "the whole switching mechanism, in full", cn: "整套开关机制的完整版" }
      ]
    }
  ],
  terms: [
    { en: "gluconeogenesis", cn: "糖异生",
      def_en: "The pathway that builds glucose from non-carbohydrate precursors — pyruvate, lactate, glycerol and glucogenic amino acids. Seven of its ten reactions are shared with glycolysis run backwards; the other three are bypasses, because the glycolytic steps they replace are far too exergonic in the cell to reverse.",
      def_cn: "用非糖类前体——丙酮酸、乳酸、甘油和生糖氨基酸——造出葡萄糖的通路。它十个反应里有七个与糖酵解反着跑共用；另外三个是绕行，因为它们所替换的那三个糖酵解步骤在细胞里放能太多、退不回来。" },
    { en: "Cori cycle", cn: "科里循环",
      def_en: "The circuit in which lactate made by anaerobic glycolysis in skeletal muscle travels to the liver, is rebuilt into glucose there, and returns to muscle by blood. It exists because muscle lacks the gluconeogenic enzymes and the liver has them.",
      def_cn: "骨骼肌在无氧糖酵解中产生的乳酸去到肝、在那里被重新造成葡萄糖、再随血液回到肌肉的那个回路。它之所以存在，是因为肌肉缺少糖异生的酶，而肝有。" },
    { en: "pyruvate carboxylase", cn: "丙酮酸羧化酶",
      def_en: "The mitochondrial, biotin-requiring enzyme that spends ATP to add bicarbonate as CO2 to pyruvate, giving oxaloacetate. It is the first regulatory enzyme of the pathway, and acetyl-CoA turns it up — so the trigger for making glucose is the availability of fat, not the shortage of sugar.",
      def_cn: "需要生物素的线粒体酶，花掉 ATP 把碳酸氢根以 CO2 的形式加到丙酮酸上，生成草酰乙酸。它是这条通路上第一个调节酶，而乙酰辅酶 A 把它调高——所以触发造糖的是「有脂肪可用」，而不是「糖不够了」。" },
    { en: "biotin and carboxybiotin", cn: "生物素与羧基生物素",
      def_en: "Biotin is the coenzyme that carries activated CO2, tied to its enzyme by an amide bond to a lysine ε-amino group. ATP first phosphorylates bicarbonate to the mixed anhydride carboxyphosphate; biotin then displaces the phosphate to become carboxybiotin, and the long biotinyl-lysine arm swings it to the second active site.",
      def_cn: "生物素是搬运活化 CO2 的辅酶，通过一条酰胺键拴在酶上某个赖氨酸的 ε-氨基上。ATP 先把碳酸氢根磷酸化成混合酸酐羧基磷酸；生物素再把磷酸顶掉、变成羧基生物素，然后由那条长长的生物素-赖氨酸臂把它荡到第二个活性位点。" },
    { en: "PEP carboxykinase", cn: "PEP 羧激酶",
      def_en: "The magnesium-dependent enzyme converting oxaloacetate to phosphoenolpyruvate with GTP as phosphoryl donor, releasing the same CO2 added a step earlier. Carboxylating and then decarboxylating is how pyruvate is activated — the same trick later activates acetyl-CoA for fatty acid synthesis.",
      def_cn: "依赖镁的酶，用 GTP 作磷酰基供体把草酰乙酸转成磷酸烯醇丙酮酸，并把上一步刚加上去的那个 CO2 放掉。先羧化、再脱羧，就是活化丙酮酸的办法——同样的把戏后来被用来活化乙酰辅酶 A 以合成脂肪酸。" },
    { en: "FBPase-1 and glucose-6-phosphatase", cn: "FBPase-1 与葡萄糖-6-磷酸酶",
      def_en: "The two bypass enzymes of the second and third irreversible steps, both plain hydrolyses rather than kinases run backwards. The phosphate a kinase paid an ATP to attach is thrown away as inorganic phosphate, and that waste is what buys the pathway its direction.",
      def_cn: "第二和第三个不可逆步骤的绕行酶，两者都是干净的水解，而不是「激酶反着跑」。激酶当初花一个 ATP 装上去的那个磷酸，被当作无机磷酸扔掉——而这份浪费买到的正是这条通路的方向。" },
    { en: "glucose-6-phosphatase in the ER lumen", cn: "内质网腔里的葡萄糖-6-磷酸酶",
      def_en: "A membrane protein of the endoplasmic reticulum lumen, present only in hepatocytes, kidney cells and small-intestine epithelium. Only those three tissues can strip the phosphate and export glucose to the blood, and that single localisation is why muscle glycogen cannot raise blood sugar.",
      def_cn: "内质网腔内的一个膜蛋白，只存在于肝细胞、肾细胞和小肠上皮细胞里。只有这三种组织能把磷酸摘掉、把葡萄糖输出到血里；仅凭这一条定位，就决定了肌糖原为什么升不了血糖。" },
    { en: "glucogenic amino acid", cn: "生糖氨基酸",
      def_en: "An amino acid whose breakdown supplies pyruvate or a four-carbon dicarboxylic acid, so its carbon can reach oxaloacetate and be converted to glucose. Alanine is the pyruvate example and aspartic acid the dicarboxylic one; of the 20 common amino acids only leucine and lysine cannot.",
      def_cn: "分解后能提供丙酮酸、或四碳二羧酸的氨基酸，因而它的碳可以到达草酰乙酸、被转化成葡萄糖。丙氨酸是丙酮酸那一类的例子，天冬氨酸是二羧酸那一类的例子；20 种常见氨基酸里只有亮氨酸和赖氨酸不行。" },
    { en: "glyoxylate cycle", cn: "乙醛酸循环",
      def_en: "The pathway from acetyl-CoA to oxaloacetate that plants, yeast and many bacteria have and mammals do not. Its absence is the reason no net conversion of fatty acids to glucose happens in mammals; its presence is how a germinating seedling lives on stored seed oil.",
      def_cn: "从乙酰辅酶 A 通往草酰乙酸的通路，植物、酵母和许多细菌有，哺乳动物没有。它的缺席，正是哺乳动物身上不存在脂肪酸到葡萄糖净转化的原因；它的存在，则是萌发幼苗能靠种子储油活下去的原因。" }
  ]
};
