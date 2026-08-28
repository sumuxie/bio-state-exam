/* Merged spine — monosaccharides and what is built from one. 速通简洁版, ONE spine per TOPIC.

   Fifteen nodes go in and one chain comes out: 7-1, 7-1-1, 7-1-2-1, 7-1-2-2, 7-1-3-1,
   7-1-3-2, 7-1-4, 7-2-1, 7-2-2, 7-2-3, 7-2-4, 7-2-5, 7-2-6, 7-3-1, 7-3-2. There is no
   Lehninger member node in this topic, so every claim here comes from the state-exam
   textbook, chapter 7, pp.148-155; B in a `src` is that book. Nothing is added from
   memory: no step needed a bridging statement, so no step carries `beyond`. The one
   place the printed source does not check out is carried as an `openQuestion` on step 23.

   Not one of the fifteen had a spine before this file, so the reader arrives at
   carbohydrate structure with nothing. That is why the chain is 32 steps and not the
   house fifteen: 急速简化成主线不代表删除任何内容. Every node is carried, every named
   sugar is kept, and every number the book prints (2^n, +112°, +18.4°, +52.7°, the
   eight D-aldohexoses, the four reducing disaccharides) is in the chain.

   Node → step map, so nothing can quietly fall out:
     7-1      1-3      7-1-3-1  13-16    7-2-2   21-22    7-2-6   28-29
     7-1-1    4-7      7-1-3-2  17       7-2-3   23-24    7-3-1   30-31
     7-1-2-1  8-10     7-1-4    18       7-2-4   25-26    7-3-2   32
     7-1-2-2  11-12    7-2-1    19-20    7-2-5   27

   The thread: carbohydrates are abundant because they do four unrelated jobs → the unit
   doing them is a monosaccharide → its stereochemistry is a count, not a list → in water
   it is a ring, and ring closure invents a new stereocentre → that new centre is the one
   position everything downstream acts on: it mutarotates, it esterifies, it oxidises and
   reduces, it takes an amino group, it loses an oxygen, and when it is capped by an
   alkoxy group the sugar becomes a glycoside — which is how two sugars, then ten, then a
   polysaccharide get built.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------------------ 单糖 ---- */
window.BIOLITE_SPINE["key:monosaccharides"] = {
  assumed: ["aldehyde", "ketone", "hydroxyl", "carbonyl", "carboxyl", "methyl",
            "alcohol", "primary alcohol", "ester", "acid", "amine", "amino group",
            "acetyl", "acyl", "hydrogen", "oxygen", "nitrogen", "carbon", "sulfuric",
            "phosphoric", "phosphate", "sulfate", "double bond", "oxidation",
            "reduction", "hydrolysis", "condensation", "stereoisomer", "isomer",
            "configuration", "conformation", "mirror image", "substituent",
            "heterocycle", "cyclohexane", "methanol", "pyruvic acid", "pyruvate",
            "equilibrium", "solution", "crystal", "polarimeter", "polarised light",
            "vitamin", "scurvy", "detoxification", "DNA", "RNA", "nucleic acid",
            "nucleotide", "base", "gene", "genetic information", "protein",
            "glycoprotein", "glycolipid", "lipopolysaccharide", "lipid",
            "phospholipid", "membrane", "cell", "cell wall", "cell surface",
            "bacteria", "plant", "insect", "crustacean", "mammal", "milk", "blood",
            "blood group", "hemolymph", "exoskeleton", "biosphere", "organic matter",
            "energy", "metabolism", "enzyme", "starch", "glycogen", "cellulose",
            "chitin", "inulin", "heparin", "chondroitin sulfate", "sucrose",
            "hyaluronic acid", "glucuronic acid", "polysaccharide", "oligosaccharide",
            "disaccharide", "monosaccharide", "carbohydrate", "sugar", "glucose",
            "fructose", "galactose", "mannose", "ribose", "deoxyribose", "xylose",
            "arabinose", "lactone", "enediol", "inositol", "glycerol", "sorbitol",
            "chair conformation", "Fischer projection", "Haworth projection"],
  nodeTitle_en: "Monosaccharides",
  nodeTitle_cn: "单糖",
  title_en: "Why the sugar family tree is a count and not a list, why a sugar in water is a ring, and why the one carbon that ring closure invents decides everything that happens afterwards",
  title_cn: "为什么糖的家族树是数出来的而不是背出来的、为什么水里的糖是个环，以及为什么闭环时凭空造出的那一个碳，决定了后面发生的一切",
  steps: [

    /* ---------------------------------------------------------------- 7-1 ---- */
    {
      en: "Carbohydrates are organic compounds built out of sugar units, and in nature they belong among the most widespread substances there are. **Carbohydrates make up the largest share of all organic matter on Earth, and that abundance follows from their doing four unrelated jobs at once: fuel, genetic backbone, structure, recognition.**",
      cn: "糖类是由糖单元构成的有机化合物，在自然界属于分布最广的一类物质。**糖类占地球上全部有机物的最大份额，而这个丰度来自它同时干着四件互不相干的活：燃料、遗传骨架、结构支撑、识别。**",
      src: "B §7.1, p.148"
    },
    {
      link_en: "the first two jobs, in the book's own order",
      link_cn: "先说前两件活",
      en: "Job one is energy storage: starch in plants and glycogen in animals are both polysaccharides, meaning chains of many sugar units joined end to end, and both can be mobilised very readily. **What starch and glycogen release on being broken down is D-glucose, and D-glucose is the primary compound a cell uses to obtain energy.** Job two is the genetic backbone: D-ribose and 2-deoxy-D-ribose are five-carbon sugars forming part of the basic chain of RNA and DNA, and the conformational flexibility of a sugar ring is what makes the storage and expression of genetic information possible.",
      cn: "第一件活是能量储存：植物里的淀粉和动物里的糖原都是多糖，也就是许多糖单元首尾相连的长链，而且两者都能被非常容易地动员。**淀粉和糖原被分解时放出的是 D-葡萄糖，而 D-葡萄糖正是细胞获取能量所用的首要化合物。**第二件活是遗传骨架：D-核糖与 2-脱氧-D-核糖是五碳糖，构成 RNA 与 DNA 的基本链；糖环的构象柔性正是遗传信息得以储存和表达的前提。",
      src: "B §7.1, p.148"
    },
    {
      en: "Job three is structural support: polysaccharides are the basic components of bacterial and plant cell walls, and of the exoskeleton of insects and crustaceans. **Cellulose is the main component of plant cell walls, and it is also the single most abundant organic compound anywhere in the biosphere.** Job four is recognition: carbohydrates form part of glycoproteins, which are proteins carrying a carbohydrate component and which sit either on the surface of cells and subcellular particles or inside secreted proteins, and it is precisely those carbohydrate portions that do the recognising. Carbohydrate is also bound to lipid, in membrane glycolipids and in lipopolysaccharides.",
      cn: "第三件活是结构支撑：多糖是细菌和植物细胞壁的基本组分，也是昆虫和甲壳类外骨骼的组分。**纤维素是植物细胞壁的主要成分，同时也是整个生物圈里含量最丰富的那一种有机化合物，没有第二个。**第四件活是识别：糖类是糖蛋白的组成部分——糖蛋白就是带着糖链的蛋白，或者位于细胞与亚细胞颗粒的表面，或者存在于分泌蛋白之中——而负责识别的正是那些糖链部分。糖也可以与脂质结合，成为膜糖脂和脂多糖的组分。",
      src: "B §7.1, p.148",
      see: [
        { id: "7-4-1-2", en: "cellulose and chitin as structural polysaccharides", cn: "作为结构多糖的纤维素与几丁质" },
        { id: "7-5", en: "the oligosaccharides bound to proteins", cn: "结合在蛋白质上的寡糖" }
      ]
    },

    /* -------------------------------------------------------------- 7-1-1 ---- */
    {
      link_en: "so what is the unit all four jobs are done with?",
      link_cn: "那么，这四件活是用什么单元干的？",
      en: "A monosaccharide is the simplest sugar there is: an aldehyde or a ketone carrying two or more hydroxyl groups, general formula (CH2O)n. **A monosaccharide whose carbonyl is an aldehyde is called an aldose, and one whose carbonyl is a ketone is called a ketose — that single distinction is the entire aldose/ketose classification.** The smallest monosaccharides have n = 3 and are called trioses: glyceraldehyde is the aldotriose and dihydroxyacetone the ketotriose.",
      cn: "单糖是最简单的糖：带着两个或更多羟基的醛或酮，通式 (CH2O)n。**羰基是醛的单糖叫醛糖，羰基是酮的单糖叫酮糖——「醛糖／酮糖」这套分类的全部内容就只有这一条区别。**最小的单糖 n = 3，称为丙糖：甘油醛是醛丙糖，二羟丙酮是酮丙糖。",
      src: "B §7.1.1, p.148"
    },
    {
      link_en: "and one of those two trioses is where the whole naming system starts",
      link_cn: "而整套命名系统的起点，就是这两个丙糖里的一个",
      en: "Glyceraldehyde has one asymmetric carbon, meaning a carbon carrying four different substituents, so glyceraldehyde exists as two mirror-image forms: D-glyceraldehyde and L-glyceraldehyde. **The prefixes D- and L- state absolute configuration, and D-glyceraldehyde — drawn with its hydroxyl on the right in the projection formula — is the parent compound of the entire D-series.**",
      cn: "甘油醛有一个不对称碳原子，也就是一个连着四个不同取代基的碳，因此甘油醛以两种互为镜像的形式存在：D-甘油醛和 L-甘油醛。**前缀 D- 与 L- 表示的是绝对构型，而投影式里羟基画在右侧的 D-甘油醛，就是整个 D 系化合物的母体。**",
      src: "B §7.1.1, p.148"
    },
    {
      link_en: "and here is the trap that letter sets",
      link_cn: "这个字母埋着一个坑",
      en: "Optical rotation is the direction a substance turns the plane of polarised light: (+) for clockwise, called dextrorotatory, and (-) for counter-clockwise, called levorotatory. **Belonging to the D-series or the L-series says nothing about a sugar's optical rotation: configuration and measured rotation are two separate properties, and either sign goes with either series.**",
      cn: "旋光性指的是一种物质把偏振光的振动面转向哪一边：(+) 是顺时针，称为右旋；(-) 是逆时针，称为左旋。**一个糖属于 D 系还是 L 系，对它的旋光方向什么都没说——构型和实测旋光是两个彼此独立的性质，任一符号都可以配任一系列。**",
      src: "B §7.1.1, p.148"
    },
    {
      en: "Sugars are also named by how many carbons they carry: four carbons is a tetrose, five a pentose, six a hexose, seven a heptose. **In any sugar with more than one asymmetric carbon the D- or L- label is read off one carbon only: the asymmetric carbon farthest from the aldehyde or ketone group.** That carbon is the one nearest the terminal CH2OH.",
      cn: "糖还按碳原子数命名：四个碳叫四碳糖，五个叫戊糖，六个叫己糖，七个叫庚糖。**只要一个糖有不止一个不对称碳，D 或 L 这个标签就只看其中一个碳：离醛基或酮基最远的那个不对称碳，也就是最靠近末端 CH2OH 的那个。**",
      src: "B §7.1.1, p.148"
    },

    /* ------------------------------------------------------------ 7-1-2-1 ---- */
    {
      link_en: "with that rule fixed, the whole family can be counted rather than memorised",
      link_cn: "这条规则一定下来，整个家族就可以数出来，而不必去背",
      en: "A molecule containing n asymmetric carbons and no plane of symmetry exists in 2 to the power n stereoisomeric forms. **Extending the aldotriose chain by one HCOH group gives an aldotetrose with two asymmetric carbons, so four of them exist: D-erythrose, D-threose, L-erythrose and L-threose.** Two of those four sit in the D-series, D-erythrose and D-threose, and two in the L-series.",
      cn: "一个含 n 个不对称碳、又没有对称面的分子，共有 2 的 n 次方种立体异构体。**把醛丙糖的链延长一个 HCOH 基团就得到醛丁糖，它有两个不对称碳，所以一共四个：D 系的 D-赤藓糖和 D-苏糖，L 系的 L-赤藓糖和 L-苏糖。**",
      src: "B §7.1.2, pp.148-149"
    },
    {
      en: "An aldopentose has three asymmetric centres, so eight exist, four in the D-series and four in the L-series; the D four are D-ribose, D-arabinose, D-xylose and D-lyxose. **An aldohexose carries four asymmetric carbons, so sixteen exist, and the eight D-aldohexoses are D-allose, D-altrose, D-glucose, D-mannose, D-gulose, D-idose, D-galactose and D-talose.**",
      cn: "醛戊糖有三个不对称中心，所以一共八个，D 系四个、L 系四个；D 系的四个是 D-核糖、D-阿拉伯糖、D-木糖、D-来苏糖。**醛己糖有四个不对称碳，所以一共十六个，其中八个 D-醛己糖是：D-阿洛糖、D-阿卓糖、D-葡萄糖、D-甘露糖、D-古洛糖、D-艾杜糖、D-半乳糖、D-塔罗糖。**",
      src: "B §7.1.2, pp.148-149"
    },
    {
      link_en: "three of those sixteen do nearly all the biochemistry, and they sit next to each other",
      link_cn: "这十六个里有三个几乎包办了全部生化，而且它们彼此挨着",
      en: "D-glucose, D-mannose and D-galactose are the three commonest aldohexoses, and the family tree puts them one small change apart: D-glucose differs from D-mannose only in the configuration at C-2, and from D-galactose only in the configuration at C-4. **Monosaccharides differing in configuration at exactly one asymmetric carbon are called epimers, so D-glucose and D-mannose are epimers at C-2, and D-glucose and D-galactose are epimers at C-4.**",
      cn: "D-葡萄糖、D-甘露糖、D-半乳糖是最常见的三个醛己糖，而家族树把它们摆得只差一处：D-葡萄糖与 D-甘露糖只在 C-2 的构型上不同，与 D-半乳糖只在 C-4 的构型上不同。**恰好只在一个不对称碳的构型上不同的单糖，称为差向异构体（表异构体）；所以 D-葡萄糖与 D-甘露糖是 C-2 差向异构体，D-葡萄糖与 D-半乳糖是 C-4 差向异构体。**",
      src: "B §7.1.2, pp.148-149"
    },

    /* ------------------------------------------------------------ 7-1-2-2 ---- */
    {
      link_en: "the ketoses are counted the same way, from a different starting compound",
      link_cn: "酮糖用同样的方法数，只是起点不同",
      recall_en: "the parallel of the aldose tree, which grew out of glyceraldehyde three steps up",
      recall_cn: "这和上面三步的醛糖树平行，那棵树是从甘油醛长出来的",
      en: "The ketose series is derived from dihydroxyacetone by the same stepwise HCOH extension that grew the aldoses out of glyceraldehyde. **Dihydroxyacetone has no asymmetric carbon at all, so it is optically inactive — and every ketose therefore carries one asymmetric carbon fewer than the aldose of the same chain length.** The reason it has none is that its C-2 is a symmetric ketone carbon.",
      cn: "酮糖系列是从二羟丙酮出发、用与醛糖同样的逐步延长 HCOH 的方式推出来的。**二羟丙酮根本没有不对称碳，因为它的 C-2 是一个对称的酮基碳，所以它没有旋光性——于是每一个酮糖都比同样链长的醛糖少一个不对称碳。**",
      src: "B §7.1.2, pp.149-150"
    },
    {
      link_en: "and one asymmetric carbon fewer halves the count at every level",
      link_cn: "少一个不对称碳，每一层的数目就减半",
      en: "A ketotetrose has just one asymmetric carbon, so only two of them exist: D-erythrulose and L-erythrulose, against four aldotetroses at the same chain length. **Four ketopentoses exist, the D pair being D-ribulose and D-xylulose, and eight ketohexoses exist, of which the commonest by far is D-fructose.** The four D-ketohexoses come two from each ketopentose: D-psicose and D-fructose from D-ribulose, D-sorbose and D-tagatose from D-xylulose.",
      cn: "酮丁糖只有一个不对称碳，所以只有两个：D-赤藓酮糖和 L-赤藓酮糖——而同样链长的醛丁糖有四个。**酮戊糖有四个，其中 D 系的一对是 D-核酮糖和 D-木酮糖；酮己糖有八个，而其中最常见的是 D-果糖。**四个 D-酮己糖是每个酮戊糖各生两个：由 D-核酮糖生出 D-阿洛酮糖和 D-果糖，由 D-木酮糖生出 D-山梨糖和 D-塔格糖。",
      src: "B §7.1.2, pp.149-150"
    },

    /* ------------------------------------------------------------ 7-1-3-1 ---- */
    {
      link_en: "all of that was drawn as an open chain, and in water a sugar is not an open chain",
      link_cn: "以上画的全是开链，而在水里，糖并不是开链",
      en: "The carbonyl group of a monosaccharide is very reactive, and that reactivity is exactly what closes the sugar into a ring. **In D-glucose the aldehyde at C-1 reacts with the hydroxyl on C-5, forming an intramolecular hemiacetal, and the six-membered ring produced is called a pyranose, after pyran.** In D-fructose it is the keto group at C-2 that reacts with the C-5 hydroxyl, forming a hemiketal, and that five-membered ring is called a furanose, after furan; pyran and furan are the reference six- and five-membered oxygen heterocycles.",
      cn: "单糖的羰基非常活泼，而正是这份活泼把糖闭合成了环。**在 D-葡萄糖里，C-1 上的醛基与 C-5 上的羟基反应，形成分子内半缩醛，得到的六元环称为吡喃糖，得名于吡喃。**在 D-果糖里，则是 C-2 上的酮基与 C-5 的羟基反应，形成半缩酮，得到的五元环称为呋喃糖，得名于呋喃；吡喃与呋喃分别是作为参照的六元和五元含氧杂环。",
      src: "B §7.1.3, pp.149-151"
    },
    {
      link_en: "a ring needs a way of being drawn on flat paper",
      link_cn: "环需要一种能画在纸面上的画法",
      en: "A Haworth formula draws the ring as a plane seen in perspective, with the substituents on each carbon placed above or below that plane, and it is converted from the open-chain Fischer formula by a fixed rule. **The primary alcohol group goes above the ring plane for the D-series and below it for the L-series, and any substituent standing on the right in the Fischer formula goes below the plane.**",
      cn: "哈沃斯式把环画成一个透视中的平面，各个碳上的取代基分别放在这个平面的上方或下方；它由开链的费歇尔式按一条固定规则转换而来。**这条规则分两半：伯醇基在 D 系画在环平面上方、在 L 系画在下方；而在费歇尔式中位于右侧的取代基，一律画在环平面的下方。**",
      src: "B §7.1.3, pp.149-151"
    },
    {
      link_en: "and closing the ring quietly creates a stereocentre that the open chain never had",
      link_cn: "而闭环这一步，悄悄造出了一个开链里根本没有的立体中心",
      en: "Ring closure turns C-1 from a carbonyl carbon into a carbon bearing four different substituents, so cyclisation of a hexose or a pentose generates a brand-new asymmetric carbon. **C-1 is called the anomeric carbon, its two possible configurations give the two anomers alpha-D-glucose and beta-D-glucose, and in a ketose such as fructose the anomeric carbon is C-2 instead of C-1.**",
      cn: "闭环把 C-1 从一个羰基碳变成了一个带四个不同取代基的碳，所以己糖或戊糖的环化会凭空产生一个新的不对称碳。**C-1 被称为异头碳，它的两种可能构型给出两个异头物 α-D-葡萄糖和 β-D-葡萄糖；而在果糖这类酮糖里，异头碳是 C-2 而不是 C-1。**",
      src: "B §7.1.3, pp.149-151"
    },
    {
      link_en: "which of the two ring sizes a sugar actually takes depends on whether it is free",
      link_cn: "一个糖到底成五元环还是六元环，取决于它是不是游离的",
      en: "A sugar can close into either ring size, and what decides it is whether the sugar stands free or is built into something larger. **D-fructose takes the furanose ring when it is bound into sucrose, into the polysaccharide inulin and into some phosphate esters, whereas free D-fructose prefers the six-membered pyranose ring.** The same split holds for pentoses: D-ribose and 2-deoxy-D-ribose are furanose rings when bound in nucleic acids, while free D-ribose occurs predominantly as a pyranose.",
      cn: "一个糖两种环都能闭合，决定权在于它是游离存在，还是被装进了更大的分子里。**D-果糖在被装进蔗糖、多糖菊粉和某些磷酸酯时取呋喃糖环，而游离的 D-果糖则更偏好六元的吡喃糖环。**戊糖也是同一分法：D-核糖和 2-脱氧-D-核糖结合在核酸中时是呋喃环，而游离的 D-核糖主要以吡喃糖形式存在。",
      src: "B §7.1.3, pp.149-151",
      see: [
        { id: "4-1", en: "the nucleic acids those furanose rings are built into", cn: "那些呋喃环所构成的核酸" }
      ]
    },

    /* ------------------------------------------------------------ 7-1-3-2 ---- */
    {
      link_en: "four drawings of alpha-D-glucopyranose are printed side by side, and they trip people up",
      link_cn: "α-D-吡喃葡萄糖有四张并排的图，很多人在这里被绊住",
      en: "Alpha-D-glucopyranose is drawn four ways in succession: the acyclic Fischer form, a cyclic Fischer projection whose vertical bracket joins C-1 to C-5 through the ring oxygen, the Haworth projection, and a stereo-projection in the chair conformation. **Those four drawings are one single compound and not four compounds, and the chair conformation is simply the real three-dimensional shape of that same pyranose ring.** D-glucose is also drawn in five Haworth forms at once — alpha- and beta-pyranose, the acyclic chain, alpha- and beta-furanose — but no furanose fraction of free D-glucose is ever quantified anywhere in chapter 7, so read the glucofuranose drawings as a structural possibility rather than as a species present at equilibrium.",
      cn: "α-D-吡喃葡萄糖被连续画成四种样子：无环费歇尔式、用一条竖直括号经环氧连接 C-1 与 C-5 的环状费歇尔投影式、哈沃斯投影式，以及椅式构象的立体投影。**这四张图画的是同一个化合物，不是四个化合物；椅式构象不过是同一个吡喃糖环真实的三维形状。**D-葡萄糖还被一次画成五种哈沃斯形式——α- 与 β-吡喃糖、无环链、α- 与 β-呋喃糖——但第 7 章从未在任何地方给出游离 D-葡萄糖中呋喃糖形式的比例，所以那两张呋喃葡萄糖只能读作一种结构上的可能，而不是平衡中真实存在的物种。",
      src: "B §7.1.3, p.152"
    },

    /* -------------------------------------------------------------- 7-1-4 ---- */
    {
      link_en: "and the two anomers do not stay put",
      link_cn: "而两个异头物并不会各自待着不动",
      recall_en: "the anomeric carbon two steps up is the position that is changing here",
      recall_cn: "这里在变的，就是上面两步说的那个异头碳",
      en: "Alpha-D-glucose and beta-D-glucose interconvert readily in solution, passing through the open-chain form as the intermediate, and because the two anomers differ in their physical constants — above all in optical rotation — the interconversion can be watched directly on a polarimeter. **Specific rotation is +112 degrees for alpha-D-glucose and +18.4 for beta-D-glucose, and crystals of either one drift to the same equilibrium value of +52.7: that drift is called mutarotation.** The equilibrium mixture it settles at is an alpha/beta mixture containing only a very small amount of the acyclic form.",
      cn: "α-D-葡萄糖与 β-D-葡萄糖在溶液中很容易相互转化，中间经过开链形式；而由于两个异头物的物理常数不同——首先就是旋光度不同——这个转化可以直接在旋光仪上看到。**α-D-葡萄糖的比旋光度是 +112°，β-D-葡萄糖是 +18.4°，而把任何一种的结晶溶进水里，都会漂移到同一个平衡值 +52.7°：这个漂移就叫变旋现象。**它最终停在的平衡混合物是 α/β 混合物，其中只含极少量的无环形式。",
      src: "B §7.1.4, p.151"
    },

    /* -------------------------------------------------------------- 7-2-1 ---- */
    {
      link_en: "so much for the sugar itself; everything from here on is what gets hung on it",
      link_cn: "糖本身说到这里为止；往下全是挂在它身上的东西",
      en: "The hydroxyl groups of a monosaccharide can be esterified, and which acid does the esterifying matters enormously. A polybasic acid is one carrying more than one acidic hydrogen, and phosphoric acid is the case that counts here. **Esterifying a sugar with a polybasic acid converts the electroneutral sugar molecule into an ion, and that charge changes how the sugar behaves inside a cell.** Phosphate esters are biochemically the most important sugar esters of all: sugars are metabolised almost exclusively in the form of their phosphate esters.",
      cn: "单糖的羟基可以被酯化，而由哪种酸来酯化，差别极大。**用多元酸——也就是不止一个可解离氢的酸，比如磷酸——去酯化一个糖，就把原本电中性的糖分子变成了离子，而这个电荷改变了它在细胞里的行为方式。**磷酸酯是生化上最重要的糖酯：糖几乎完全是以磷酸酯的形式被代谢的。",
      src: "B §7.2.1, p.152",
      see: [
        { id: "7-8-1", en: "glycolysis, where those phosphate esters are the working currency", cn: "糖酵解——磷酸酯正是那里的通用货币" }
      ]
    },
    {
      en: "A sugar phosphate is also a reactive intermediate for forming glycosidic bonds, which are bonds running from a sugar's anomeric carbon out to another molecule, through either an oxygen or a nitrogen. **5-phosphoribosyl-1-bisphosphate — abbreviated PRPP — is the worked example: it is the phosphorylated sugar that carries ribose into the synthesis of nucleotides.** A second kind of sugar ester appears in the heteroglycans, which are polysaccharides built from more than one kind of sugar unit: there a sugar hydroxyl is esterified with sulfuric acid, as in heparin and in chondroitin sulfate.",
      cn: "糖磷酸酯同时也是形成糖苷键的反应性中间体；糖苷键就是从糖的异头碳出发、经由一个氧或一个氮连到另一个分子上的键。**5-磷酸核糖-1-焦（双）磷酸——缩写 PRPP——就是书里给的例子：它是把核糖送进核苷酸合成的那个磷酸化糖。**另一类糖酯出现在杂聚糖里，杂聚糖是由不止一种糖单元构成的多糖：其中糖的羟基是被硫酸酯化的，肝素和硫酸软骨素就是这样。",
      src: "B §7.2.1, p.152",
      see: [
        { id: "7-4-2", en: "heparin and chondroitin sulfate in full, as heteropolysaccharides", cn: "作为杂多糖的肝素与硫酸软骨素" }
      ]
    },

    /* -------------------------------------------------------------- 7-2-2 ---- */
    {
      link_en: "next, what happens if the sugar is oxidised",
      link_cn: "接下来，如果把糖氧化会怎样",
      en: "Oxidising a sugar makes an acid, and which carbon gets oxidised is what names the acid. **Oxidation of an aldose's carbonyl group gives an aldonic acid, whereas oxidation of the terminal primary alcohol group at the far end of the chain gives a uronic acid instead.** A cyclic aldose is oxidised directly to the lactone of its aldonic acid, a lactone being an internal ester in which an acid is closed onto a hydroxyl of its own molecule, and hydrolysis then releases the free acid from that lactone.",
      cn: "把糖氧化就得到酸，而被氧化的是哪个碳，决定了这个酸叫什么。**氧化醛糖的羰基，得到的是醛糖酸；而氧化链另一端的末端伯醇基，得到的则是糖醛酸——被氧化的是哪一端，决定了这个酸叫什么。**环状的醛糖会被直接氧化成其醛糖酸的内酯——内酯就是酸与自身分子上的一个羟基闭合而成的分子内酯——随后再由水解从内酯中释放出游离酸。",
      src: "B §7.2.2, pp.152-153"
    },
    {
      link_en: "and one sugar acid is famous enough to be a vitamin",
      link_cn: "其中一个糖酸有名到成了维生素",
      en: "The most important sugar acid of all is ascorbic acid, isolated historically as the antiscorbutic vitamin, the substance that cures scurvy. **Ascorbic acid is chemically the lactone of 2-oxo-L-gulonic acid, and its enediol group — two hydroxyls on one double bond — is what makes it a strong reducing agent.** Losing that hydrogen converts it into the oxidised form called dehydroascorbic acid. Ascorbic acid is found predominantly in plants.",
      cn: "最重要的糖酸是抗坏血酸，历史上是作为抗坏血病维生素被分离出来的——也就是能治坏血病的那种物质。**抗坏血酸在化学上是 2-氧代-L-古洛糖酸的内酯，它带着一个烯二醇基团——同一条双键的两个碳上各有一个羟基——这正是它成为强还原剂的原因。**失去那个氢，它就变成脱氢抗坏血酸。抗坏血酸主要分布在植物中。",
      src: "B §7.2.2, pp.152-153"
    },

    /* -------------------------------------------------------------- 7-2-3 ---- */
    {
      link_en: "the opposite operation, reduction, gives a class with a property worth noticing",
      link_cn: "反过来做还原，得到的一类东西有个值得注意的性质",
      recall_en: "the mirror of the oxidation two steps up: same carbonyl, opposite direction",
      recall_cn: "和上面两步的氧化互为镜像：同一个羰基，方向相反",
      en: "Reducing a monosaccharide's carbonyl group, rather than oxidising it, gives a sugar alcohol, which is called an alditol. **Reducing D-glucose gives D-glucitol, whose older name is sorbitol, and D-mannose gives D-mannitol; reduction kills the anomeric centre, so an alditol has no anomers and no reducing end.** An alditol therefore does not mutarotate either. That is also why several different sugars reduce to one and the same alditol: D-glucitol is obtained from D-fructose and from L-sorbose as well. The two cases are not alike, though. D-fructose is a ketose, so reducing its C-2 carbonyl creates a stereocentre that was not there before, and it is created without selectivity — the product is a pair of epimers, D-glucitol alongside D-mannitol, rather than D-glucitol alone. The L-sorbose case is the industrially important one: the relationship between D-glucitol and L-sorbose is well documented and is used in the synthesis of vitamin C.",
      cn: "把单糖的羰基还原而不是氧化，得到的是糖醇，称为 alditol（糖醇类）。**还原 D-葡萄糖得到 D-葡萄糖醇，旧称山梨醇；还原 D-甘露糖得到 D-甘露糖醇。还原会把异头中心毁掉，所以糖醇没有异头物、不变旋，也不再有还原端。**这同时解释了为什么几种不同的糖会还原成同一个糖醇：D-果糖和 L-山梨糖也都给出 D-葡萄糖醇。不过这两种情形并不一样。D-果糖是酮糖，还原它 C-2 上的羰基会新造出一个原本没有的立体中心，而且造得没有选择性 —— 产物是一对差向异构体，D-葡萄糖醇旁边还有 D-甘露糖醇，而不是只有 D-葡萄糖醇。L-山梨糖那一例则有工业分量：D-葡萄糖醇与 L-山梨糖之间的这层关系有据可查，并被用在维生素 C 的合成上。",
      src: "B §7.2.3, p.153",
      openQuestion_en: "A fourth source of D-glucitol is printed as L-glucose, and that one does not check out: carrying L-glucose through the aldose tree and renaming the product by the D-numbering convention gives D-gulitol, not D-glucitol, which points at L-gulose. Which of the two names is meant is unresolved here.",
      openQuestion_cn: "书上还写了第四个来源 L-葡萄糖，而这一个对不上：把 L-葡萄糖沿醛糖树推下来、再按 D 系编号惯例给产物命名，得到的是 D-古洛糖醇而不是 D-葡萄糖醇，这指向的是 L-古洛糖。到底是哪一个，这里没有定论。"
    },
    {
      en: "Three further sugar alcohols occur in nature: ribitol, glycerol and inositol. **Inositol is a cyclohexane derivative, a six-carbon ring carrying six hydroxyls, and it occurs both as a component of phospholipids and as phytic acid, its own hexaphosphate ester.**",
      cn: "自然界里还有另外三种糖醇：核糖醇、甘油和肌醇。**肌醇是环己烷的衍生物，是一个带六个羟基的六碳环而不是开链；它既作为磷脂的组分存在，也以植酸的形式存在，植酸就是它的六磷酸酯。**",
      src: "B §7.2.3, p.153"
    },

    /* -------------------------------------------------------------- 7-2-4 ---- */
    {
      link_en: "swap a hydroxyl for something else and the sugar changes trade",
      link_cn: "把一个羟基换成别的东西，糖就改行了",
      en: "An amino sugar is a sugar in which one hydroxyl group has been replaced, formally, by an amino group. **Three of them matter biochemically: D-glucosamine, which is 2-deoxy-2-amino-D-glucose, D-galactosamine, which is 2-deoxy-2-amino-D-galactose, and neuraminic acid.** In cells that amino group is very often acylated by an organic acid residue, above all by acetyl: N-acetyl-D-glucosamine is bound into the polysaccharide chitin and into glycolipids, glycoproteins and heteroglycans, while N-acetyl-D-galactosamine is an important component of glycoproteins and glycolipids.",
      cn: "氨基糖就是形式上把一个羟基换成氨基的糖。**其中三个在生化上重要：D-葡萄糖胺，即 2-脱氧-2-氨基-D-葡萄糖；D-半乳糖胺，即 2-脱氧-2-氨基-D-半乳糖；以及神经氨酸。**在细胞里，这个氨基常常被有机酸残基酰化，尤其是被乙酰基：N-乙酰-D-葡萄糖胺结合在多糖几丁质里，也结合在糖脂、糖蛋白和杂聚糖里；N-乙酰-D-半乳糖胺则是糖蛋白和糖脂的重要组分。",
      src: "B §7.2.4, p.153"
    },
    {
      en: "Neuraminic acid is built, formally, by an aldol condensation of pyruvic acid with D-mannosamine, an aldol condensation being a carbon-carbon bond made between an activated carbon and a carbonyl carbon. **Neuraminic acid never occurs free: what cells contain are its N-acetyl and N-glycolyl derivatives, key components of membrane glycolipids, blood-group substances and many glycoproteins.**",
      cn: "神经氨酸在形式上是由丙酮酸与 D-甘露糖胺经羟醛缩合构成的；羟醛缩合就是在一个被活化的碳与一个羰基碳之间成一条碳-碳键。**神经氨酸从不以游离形式出现：细胞里真正含有的是它的 N-乙酰基和 N-羟乙酰基衍生物，而这些正是膜糖脂、血型物质以及许多其他糖蛋白的关键组分。**",
      src: "B §7.2.4, p.153"
    },

    /* -------------------------------------------------------------- 7-2-5 ---- */
    {
      link_en: "and taking a hydroxyl away entirely, rather than swapping it",
      link_cn: "再看把一个羟基整个拿掉，而不是换掉",
      en: "A deoxy sugar is a sugar in which a hydroxyl group has been replaced by a hydrogen, and losing that one oxygen changes what the sugar is for. **2-deoxy-D-ribose is D-ribose minus the oxygen at C-2, and that single missing oxygen is the whole structural difference between the backbone of DNA and that of RNA.** It is the most important deoxy sugar there is. Two 6-deoxyhexoses also occur naturally: L-fucose, which is 6-deoxy-L-galactose, contained in milk oligosaccharides and in glycoproteins, and L-rhamnose, which is 6-deoxy-L-mannose, found in glycosides.",
      cn: "脱氧糖就是把一个羟基换成氢的糖，而少掉这一个氧，糖的用途就变了。**2-脱氧-D-核糖是最重要的脱氧糖：它就是 D-核糖少掉 C-2 上的那个氧，而这一个缺失的氧，就是 DNA 骨架与 RNA 骨架之间的全部结构差别。**自然界里还有两个 6-脱氧己糖：L-岩藻糖，即 6-脱氧-L-半乳糖，存在于乳低聚糖和糖蛋白中；以及 L-鼠李糖，即 6-脱氧-L-甘露糖，存在于糖苷中。",
      src: "B §7.2.5, p.153"
    },

    /* -------------------------------------------------------------- 7-2-6 ---- */
    {
      link_en: "now cap the anomeric carbon itself, and the sugar stops being a sugar in one respect",
      link_cn: "现在把异头碳本身封住，糖在某一点上就不再是糖了",
      recall_en: "the same anomeric carbon that mutarotation was moving through",
      recall_cn: "就是变旋现象所经过的那个异头碳",
      en: "Replacing the hemiacetal hydroxyl of a sugar, the one sitting on its anomeric carbon, with an alkoxy group gives a glycoside. **Heating D-glucose in methanol containing HCl is the worked case: it yields the two acetals methyl-alpha-D-glucoside and methyl-beta-D-glucoside, one for each configuration of the anomeric carbon.** The new bond from C-1 to methanol's oxygen atom is a glycosidic bond, more precisely an O-glycosidic bond, and the non-sugar portion of a glycoside is called its aglycone.",
      cn: "把糖的半缩醛羟基——也就是长在异头碳上的那个——换成烷氧基，得到的就是糖苷。**书里给的例子是把 D-葡萄糖在含 HCl 的甲醇中加热：生成两个缩醛，methyl-α-D-葡萄糖苷和 methyl-β-D-葡萄糖苷，异头碳的两种构型各一个。**从 C-1 连到甲醇氧原子上的这条新键叫糖苷键，更确切地说是 O-糖苷键；糖苷中的非糖部分则称为配基（aglykon）。",
      src: "B §7.2.6, pp.153-154"
    },
    {
      en: "The anomeric carbon can bond to the nitrogen atom of an amine just as readily as to an oxygen, and that bond is called an N-glycosidic bond. **RNA and DNA are N-glycosides: their sugar is joined to its base through an N-glycosidic bond, and in these naturally occurring substances that bond always has the beta configuration.** O-glycosides are mainly a plant-kingdom affair; in mammalian organs they appear chiefly as glucuronosides, which are the O-glycosides of D-glucuronic acid, formed as products of detoxifying foreign substances. And when the alcohol supplying the oxygen is itself a second monosaccharide, this very same O-glycosidic bond is what builds disaccharides, oligosaccharides and polysaccharides.",
      cn: "异头碳与胺的氮原子成键，和与氧成键一样容易，这样的键称为 N-糖苷键。**RNA 与 DNA 就是 N-糖苷：它们的糖通过 N-糖苷键连在碱基上，而在这些天然物质中，这条键永远是 β 构型。**O-糖苷主要是植物界的事；在哺乳动物器官里，它们主要以葡萄糖醛酸苷的形式出现，也就是 D-葡萄糖醛酸的 O-糖苷，是异物解毒的产物。而当提供氧的那个醇本身就是第二个单糖时，正是这同一条 O-糖苷键，把二糖、寡糖和多糖搭建了起来。",
      src: "B §7.2.6, pp.153-154",
      see: [
        { id: "7-4", en: "the polysaccharides that bond goes on to build", cn: "这条键接着搭出来的那些多糖" }
      ]
    },

    /* -------------------------------------------------------------- 7-3-1 ---- */
    {
      link_en: "so start with two sugars, and one question decides everything about the product",
      link_cn: "那就从两个糖开始；产物的一切，由一个问题决定",
      en: "An oligosaccharide is a chain of up to ten monosaccharide residues joined by O-glycosidic bonds, and anything longer than ten is a polysaccharide. **If the glycosidic bond consumes the hemiacetal hydroxyl of both sugar units, none is left free, and the disaccharide is non-reducing: it neither mutarotates nor forms further glycosides.** If instead the anomeric C-1 of one sugar bonds to any hydroxyl of the other except its hemiacetal one, one free hemiacetal hydroxyl survives, and the disaccharide is reducing: it mutarotates and it can form glycosides.",
      cn: "寡糖是至多十个单糖残基以 O-糖苷键连成的链，超过十个就是多糖。**如果糖苷键把两个糖单元各自的半缩醛羟基都用掉了，就一个游离的都不剩，这个二糖就是非还原性的：它不变旋，自己也不能再形成糖苷。**反过来，如果一个糖的异头碳 C-1 连到另一个糖除半缩醛羟基以外的任何羟基上，就还留着一个游离的半缩醛羟基，这个二糖就是还原性的：它会变旋，也能形成糖苷。",
      src: "B §7.3, pp.154-155"
    },
    {
      link_en: "three non-reducing ones carry names worth having",
      link_cn: "非还原的一类里有三个名字值得记住",
      en: "Sucrose, trehalose and raffinose are the three non-reducing oligosaccharides named. **Sucrose is O-alpha-D-glucopyranosyl-beta-D-fructofuranoside, cane and beet sugar, very widespread in plants and hydrolysed very easily back to D-glucose and D-fructose.** Trehalose is O-alpha-D-glucopyranosyl-alpha-D-glucopyranoside, found in plants and in the hemolymph of insects. Raffinose is a trisaccharide, 6-O-alpha-D-galactosyl-alpha-D-glucopyranosyl-beta-D-fructofuranoside, which amounts to a galactoside of sucrose; it is widespread in plants alongside stachyose, which carries one further O-alpha-D-galactosyl residue.",
      cn: "被点名的非还原性寡糖有三个：蔗糖、海藻糖和棉子糖。**蔗糖是 O-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷，也就是甘蔗糖和甜菜糖，在植物界分布极广，而且极易水解回 D-葡萄糖和 D-果糖。**海藻糖是 O-α-D-吡喃葡萄糖基-α-D-吡喃葡萄糖苷，存在于植物和昆虫的血淋巴中。棉子糖是一个三糖，6-O-α-D-半乳糖基-α-D-吡喃葡萄糖基-β-D-呋喃果糖苷，相当于蔗糖的半乳糖苷；它在植物界与水苏糖并存，水苏糖比它多一个 O-α-D-半乳糖基残基。",
      src: "B §7.3, pp.154-155"
    },

    /* -------------------------------------------------------------- 7-3-2 ---- */
    {
      link_en: "and four reducing ones, where the bond position is the whole story",
      link_cn: "还原的一类有四个，而故事全在键接在哪个位置上",
      en: "Four reducing oligosaccharides carry names worth having: cellobiose, maltose, isomaltose and lactose all keep one free hemiacetal hydroxyl, so all four mutarotate and can all form glycosides. **Maltose is 4-O-alpha-D-glucopyranosyl-D-glucopyranose and cellobiose 4-O-beta-D-glucopyranosyl-D-glucopyranose: the same two glucoses, one bond different, two completely different fates.** Maltose is malt sugar, released by the breakdown of starch; cellobiose is the repeating unit of cellulose. Isomaltose is 6-O-alpha-D-glucopyranosyl-D-glucopyranose, obtained from starch hydrolysate specifically at the places where the linear chain branches, so it is the disaccharide fingerprint of a branch point. Lactose is 4-O-beta-D-galactopyranosyl-D-glucopyranose, milk sugar, the most important sugar in the milk of all mammals.",
      cn: "纤维二糖、麦芽糖、异麦芽糖和乳糖都保留着一个游离的半缩醛羟基，所以这四个都会变旋，也都能形成糖苷。**麦芽糖是 4-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，纤维二糖是 4-O-β-D-吡喃葡萄糖基-D-吡喃葡萄糖：同样是两个葡萄糖，只差一条键的构型，命运却完全不同。**麦芽糖由淀粉分解放出，纤维二糖则是纤维素的重复单元。异麦芽糖是 6-O-α-D-吡喃葡萄糖基-D-吡喃葡萄糖，同样得自淀粉水解产物，但专门来自线性链发生分支的那些位点，所以它就是分支点在二糖层面的指纹。乳糖是 4-O-β-D-吡喃半乳糖基-D-吡喃葡萄糖，也就是乳汁里的糖，是所有哺乳动物乳汁中最重要的糖。",
      src: "B §7.3, p.155",
      see: [
        { id: "7-4-1-1", en: "starch and glycogen, the polymers maltose and isomaltose come out of", cn: "麦芽糖与异麦芽糖所来自的淀粉和糖原" },
        { id: "L-7-4-1", en: "why a sugar chain carries more information than a peptide of the same length", cn: "为什么同样长度的糖链比肽链携带更多信息" }
      ]
    }
  ],
  terms: [
    { en: "monosaccharide", cn: "单糖",
      def_en: "The simplest sugar unit: an aldehyde or a ketone carrying two or more hydroxyl groups, general formula (CH2O)n. Everything in this chain is either one of these, one of these with a group swapped, or a chain of them.",
      def_cn: "最简单的糖单元：带两个或更多羟基的醛或酮，通式 (CH2O)n。这条主线上的一切，要么就是它，要么是它换掉一个基团，要么是许多个它连成的链。" },
    { en: "aldose / ketose", cn: "醛糖／酮糖",
      def_en: "The whole first classification of sugars, and it turns on one thing: whether the carbonyl is an aldehyde or a ketone. A ketose has its carbonyl at C-2, so it carries one asymmetric carbon fewer than the aldose of the same chain length, and every ketose level has half as many members.",
      def_cn: "糖的第一层分类，全部区别只在一件事上：羰基是醛还是酮。酮糖的羰基在 C-2，比同链长的醛糖少一个不对称碳，所以每一层酮糖的成员数只有醛糖的一半。" },
    { en: "D-/L- configuration", cn: "D/L 构型",
      def_en: "An absolute-configuration label, read off the asymmetric carbon farthest from the carbonyl group; D-glyceraldehyde, with its hydroxyl on the right in projection, is the reference. It says nothing about which way the sugar rotates polarised light — that is measured, and either sign can go with either series.",
      def_cn: "一个绝对构型的标签，只看离羰基最远的那个不对称碳；参照物是投影式中羟基在右侧的 D-甘油醛。它并不说明这个糖把偏振光转向哪边——旋光方向是测出来的，任一符号都可以配任一系列。" },
    { en: "epimer", cn: "差向异构体（表异构体）",
      def_en: "Two monosaccharides differing in configuration at exactly one asymmetric carbon. D-glucose and D-mannose differ only at C-2; D-glucose and D-galactose only at C-4. This is why the three commonest aldohexoses sit next to each other on the family tree.",
      def_cn: "恰好只在一个不对称碳的构型上不同的两个单糖。D-葡萄糖与 D-甘露糖只差 C-2，D-葡萄糖与 D-半乳糖只差 C-4。这正是最常见的三个醛己糖在家族树上彼此相邻的原因。" },
    { en: "hemiacetal / hemiketal", cn: "半缩醛／半缩酮",
      def_en: "What forms when a sugar's own carbonyl reacts with one of its own hydroxyls: an aldehyde gives the first, a ketone the second. In D-glucose C-1 reaches C-5 and closes a six-membered ring; in D-fructose C-2 reaches C-5 and closes a five-membered one.",
      def_cn: "糖自己的羰基与自己的一个羟基反应之后形成的东西：醛给出前者，酮给出后者。D-葡萄糖是 C-1 够到 C-5，闭成六元环；D-果糖是 C-2 够到 C-5，闭成五元环。" },
    { en: "pyranose / furanose", cn: "吡喃糖／呋喃糖",
      def_en: "The six-membered and five-membered cyclic forms of a sugar, named after pyran and furan, the reference oxygen heterocycles of those two sizes. Which one a sugar takes depends on whether it stands free or is built into something: fructose is furanose in sucrose but pyranose when free, and ribose is furanose in a nucleic acid but pyranose when free.",
      def_cn: "糖的六元环与五元环形式，得名于同样大小的参照含氧杂环吡喃与呋喃。一个糖取哪一种，看它是游离的还是被装进了别的分子：果糖在蔗糖里是呋喃糖、游离时是吡喃糖，核糖在核酸里是呋喃糖、游离时是吡喃糖。" },
    { en: "anomeric carbon", cn: "异头碳",
      def_en: "The asymmetric carbon that ring closure creates out of the old carbonyl carbon — C-1 in an aldose, C-2 in a ketose. Its two configurations are the alpha and beta anomers, and it is the single position that mutarotation, glycoside formation, oxidation to a lactone and the reducing/non-reducing split all act on.",
      def_cn: "闭环时由原来的羰基碳变出来的那个不对称碳——醛糖是 C-1，酮糖是 C-2。它的两种构型就是 α 与 β 两个异头物；变旋、成苷、氧化成内酯、还原性与非还原性之分，全都作用在这一个位置上。" },
    { en: "Haworth formula", cn: "哈沃斯投影式",
      def_en: "A perspective drawing of the sugar ring as a plane, substituents above or below it, converted from the open-chain formula by a fixed rule: primary alcohol above the plane for the D-series, and anything drawn on the right in the Fischer formula below the plane.",
      def_cn: "把糖环画成一个透视平面、取代基分列上下的画法，由开链式按固定规则转换而来：D 系的伯醇基在平面上方，费歇尔式中画在右侧的取代基一律在平面下方。" },
    { en: "mutarotation", cn: "变旋现象",
      def_en: "The drift in a sugar solution's optical rotation as one pure anomer equilibrates, through the open-chain form, into the anomer mixture. For D-glucose it runs from +112 degrees (alpha) or +18.4 degrees (beta) to +52.7 degrees either way, and the mixture at the end holds only a very small amount of open chain.",
      def_cn: "一种纯异头物经开链形式趋向异头物混合物时，溶液旋光度发生的漂移。对 D-葡萄糖而言，从 +112°（α）或 +18.4°（β）出发，两边都漂到 +52.7°；最终的混合物里只含极少量开链形式。" },
    { en: "sugar phosphate ester", cn: "糖磷酸酯",
      def_en: "A sugar hydroxyl esterified with phosphoric acid. Because phosphoric acid is polybasic, the ester carries a charge, so an electroneutral sugar becomes an ion — and sugars are metabolised almost exclusively in this form. PRPP is the example that carries ribose into nucleotide synthesis.",
      def_cn: "糖的羟基与磷酸酯化的产物。磷酸是多元酸，所以这个酯带电荷，本来电中性的糖就变成了离子——而糖几乎完全是以这种形式被代谢的。PRPP 就是把核糖送进核苷酸合成的那个例子。" },
    { en: "aldonic acid / uronic acid", cn: "醛糖酸／糖醛酸",
      def_en: "The two acids an aldose gives on oxidation, told apart by which end was oxidised: the carbonyl end gives the first, the terminal primary alcohol the second. A cyclic aldose oxidises straight to the lactone, and hydrolysis frees the acid from it.",
      def_cn: "醛糖被氧化得到的两种酸，区别只在氧化的是哪一端：羰基端给出前者，末端伯醇给出后者。环状醛糖会被直接氧化成内酯，再由水解把酸释放出来。" },
    { en: "ascorbic acid", cn: "抗坏血酸（维生素 C）",
      def_en: "The antiscorbutic vitamin, chemically the lactone of 2-oxo-L-gulonic acid. Its enediol group — two hydroxyls on the two carbons of one double bond — makes it a strong reducing agent; losing that hydrogen gives dehydroascorbic acid. Found predominantly in plants.",
      def_cn: "抗坏血病维生素，化学上是 2-氧代-L-古洛糖酸的内酯。它的烯二醇基团——同一条双键的两个碳上各一个羟基——使它成为强还原剂；失去那个氢就变成脱氢抗坏血酸。主要分布在植物中。" },
    { en: "alditol", cn: "糖醇",
      def_en: "The product of reducing a sugar's carbonyl group: D-glucose gives D-glucitol (sorbitol), D-mannose gives D-mannitol. Reduction destroys the anomeric centre, so these do not mutarotate and have no reducing end, which is also why several different sugars collapse onto one and the same product.",
      def_cn: "把糖的羰基还原之后的产物：D-葡萄糖给出 D-葡萄糖醇（山梨醇），D-甘露糖给出 D-甘露糖醇。还原把异头中心毁掉了，所以它们不变旋、也没有还原端——这同时解释了为什么几种不同的糖会收敛到同一个产物上。" },
    { en: "amino sugar", cn: "氨基糖",
      def_en: "A sugar with one hydroxyl replaced, formally, by an amino group, which in cells is nearly always acetylated. D-glucosamine, D-galactosamine and neuraminic acid are the three that matter; these are the units structural and recognition polymers are built from, not fuel.",
      def_cn: "形式上把一个羟基换成氨基的糖，而在细胞里这个氨基几乎总是被乙酰化的。重要的是三个：D-葡萄糖胺、D-半乳糖胺和神经氨酸。它们是结构性多糖和识别性糖链的建筑单元，不是燃料。" },
    { en: "deoxy sugar", cn: "脱氧糖",
      def_en: "A sugar with one hydroxyl replaced by a hydrogen. 2-deoxy-D-ribose is D-ribose minus the oxygen at C-2, and that one oxygen is the whole structural difference between the DNA backbone and the RNA backbone; L-fucose and L-rhamnose are the 6-deoxyhexoses.",
      def_cn: "把一个羟基换成氢的糖。2-脱氧-D-核糖就是 D-核糖少掉 C-2 上那个氧，而这一个氧就是 DNA 骨架与 RNA 骨架的全部结构差别；L-岩藻糖和 L-鼠李糖则是 6-脱氧己糖。" },
    { en: "glycoside", cn: "糖苷",
      def_en: "A sugar whose hemiacetal hydroxyl has been replaced by an alkoxy group, which locks the ring shut. Locked shut means no open chain is left, so it neither mutarotates nor reduces; the non-sugar part is the aglycone.",
      def_cn: "半缩醛羟基被烷氧基取代的糖，这一换就把环锁死了。锁死意味着不再有开链形式，于是它既不变旋也没有还原性；非糖的那一部分就是配基。" },
    { en: "O-glycosidic bond / N-glycosidic bond", cn: "O-糖苷键／N-糖苷键",
      def_en: "The bond running from a sugar's anomeric carbon out through an oxygen, or out through the nitrogen of an amine. The first builds disaccharides, oligosaccharides and polysaccharides when the partner is another sugar; the second joins the sugar to a base in RNA and DNA, always in the beta configuration.",
      def_cn: "从糖的异头碳出发、经由一个氧、或经由胺的一个氮连出去的键。当搭档是另一个糖时，前者搭出二糖、寡糖和多糖；后者则在 RNA 和 DNA 里把糖连到碱基上，而且永远是 β 构型。" },
    { en: "reducing and non-reducing disaccharide", cn: "还原性与非还原性二糖",
      def_en: "One question tells them apart: is a free hemiacetal hydroxyl left after the bond is made? Joined anomeric-to-anomeric, both are used up and the product neither mutarotates nor forms glycosides — sucrose and trehalose. Leave one free and it mutarotates and reduces — maltose, cellobiose, isomaltose, lactose.",
      def_cn: "只用一个问题就能分开：成键之后还剩不剩一个游离的半缩醛羟基？异头碳对异头碳连起来，两个都用掉了，产物既不变旋也不能成苷——蔗糖、海藻糖属此。留下一个游离的，它就会变旋、也有还原性——麦芽糖、纤维二糖、异麦芽糖、乳糖属此。" }
  ]
};

