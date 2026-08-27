/* Merged spines — lipids and membranes. 速通简洁版, ONE spine per TOPIC.

   Six topics that held twenty-nine node spines and raw sections between them come out
   here as six chains of twelve to sixteen steps.

   The merge rule: the Lehninger telling is the backbone, because it is the better and
   more current source. The other book is folded in only where it ADDS — a number, a
   name the exam actually uses, a worked case, or a consequence the first account does
   not draw. Where both say the same thing, the Lehninger sentence stands. Every step
   keeps a `src` naming the pages it was read from; a step built from both carries both,
   separated by a middle dot, so a page number is never attached to the wrong claim.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so the per-node files still resolve and are left untouched.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence — for lipids that
   means the physical reason (why a cis double bond lowers a melting point, why glycerol
   has to be numbered stereospecifically), never the nomenclature table on its own.

   ONE bold span per field. 极简 mode shows only that span, so it has to read correctly
   with everything else hidden.

   topics: storage-lipids · membrane-lipids · lipid-signals-and-pigments ·
           membrane-architecture · membrane-transport · fatty-acid-oxidation
*/
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------ 储存脂类 ---- */
window.BIOLITE_SPINE["key:storage-lipids"] = {
  assumed: [
    "lipid", "water", "carbon", "hydrogen", "oxygen", "double bond", "single bond",
    "ester", "hydrocarbon", "carboxylic acid", "alcohol", "glycerol", "glucose",
    "sugar", "membrane", "enzyme", "hydrolysis", "oxidation", "energy", "protein",
    "cell", "blood", "diet", "chiral", "isomer", "solubility", "melting point",
    "glycogen", "polysaccharide", "carbohydrate", "cholesterol", "hormone", "vitamin",
    "acetyl", "phosphate", "choline", "serine", "inositol", "ethanolamine",
    "sialic acid", "sphingosine", "steroid", "sterol", "phospholipid", "lymph",
    "kidney", "intestine", "gut", "skin", "seed", "plankton", "olive oil", "butter",
    "margarine", "oxygen of the air", "van der waals", "thermal energy", "specific gravity"
  ],
  nodeTitle_en: "Storage lipids",
  nodeTitle_cn: "储存脂类",
  title_en: "Everything here follows from one hydrocarbon chain: how it packs, how badly it dissolves, and what a single cis double bond does to both",
  title_cn: "这里的一切都由同一根碳氢链决定：它怎么堆叠、有多不溶于水，以及一个顺式双键对这两件事做了什么",
  steps: [
    {
      en: "The word lipid comes from the Greek lipos, fat, and it names a class defined by a physical property instead of by a structure: a lipid is a natural nonpolar compound, nearly or completely insoluble in water, and soluble instead in organic solvents such as chloroform, ethanol or ether. No exact structural definition of the group is possible. **A class held together by one physical property rather than by a shared skeleton will do jobs that have nothing to do with each other, and lipids do exactly that.** Fats and oils are the main stored form of carbon and energy. Phospholipids and sterols, the two lipid types that build a membrane, are its main structural material. Lipids present in small amounts act as enzyme cofactors, as electron carriers, as light-absorbing pigments, as hydrophobic anchors that pin proteins to a membrane, as emulsifying agents in the gut, as hormones, and as messengers inside a cell. A lipid layer also insulates against heat, electricity and physical shock, and a lipid coat protects a cell or a whole organism against drying out and against infection.",
      cn: "lipid 这个词来自希腊语 lipos（脂肪），它命名的是一类由物理性质、而不是由结构来定义的东西：脂类是天然的非极性化合物，几乎或完全不溶于水，却溶于氯仿、乙醇、乙醚这类有机溶剂。这一类给不出精确的结构定义。**把这一群东西凑在一起的是同一个物理性质，而不是共同的骨架，所以它们干的活彼此毫不相干。**脂肪与油是碳和能量的主要储存形式；磷脂与固醇这两类造膜的脂类，是膜的主要结构材料；含量很少的那些脂类则充当酶的辅因子、电子载体、吸光色素、把蛋白钉在膜上的疏水锚、消化道里的乳化剂、激素，以及细胞内的信使。此外，一层脂类还能隔绝热、电和物理冲击，一层脂类外衣还能保护细胞或整个生物体不脱水、不被感染。",
      src: "A p.341, §10.1 · CZ p.176, §8.1"
    },
    {
      link_en: "a class with no structural definition still has to be sorted somehow, and one operation does it",
      link_cn: "一个没有结构定义的大类总得有办法分门别类 —— 有一个操作能做到",
      en: "Hydrolysis is splitting a molecule by adding water across one of its bonds, and what comes back out of a lipid when you do that is what names its class. Three groups cover the whole set. Simple lipids give back only an alcohol and fatty acids: the acylglycerols give glycerol plus fatty acids, and the waxes give a long-chain alcohol plus fatty acids. Complex lipids give back one further component as well, and there are five kinds — glycoacylglycerols (sugar, glycerol, fatty acids), phosphoacylglycerols (glycerol, fatty acids, phosphate, and one organic head group: choline, ethanolamine, serine, inositol or a second glycerol), sphingomyelins (sphingosine, fatty acids, phosphate, choline), cerebrosides (sphingosine, fatty acids, sugars) and gangliosides (sphingosine, fatty acids, sugars, sialic acid). Derived lipids are everything of lipid character left over, with a carbon skeleton usually built out of fatty acids: prostaglandins, steroids, carotenoids and the fat-soluble vitamins. **The way to place a lipid you have never met is to hydrolyse it and count the pieces that come back, because each of the eleven classes is defined by exactly that list.**",
      cn: "水解（hydrolysis）就是往分子的某根键上加一分子水、把它劈开；一个脂类被这样劈开后掉出什么，就决定了它属于哪一类。三大组把全部脂类装完。简单脂类 (simple lipids) 只掉出一个醇和脂肪酸：酰基甘油掉出甘油 + 脂肪酸，蜡掉出长链醇 + 脂肪酸。复合脂类 (complex lipids) 还要多掉出一样东西，共五种 —— 糖酰基甘油（糖、甘油、脂肪酸）、磷酸酰基甘油（甘油、脂肪酸、磷酸，外加一个有机头基：胆碱、乙醇胺、丝氨酸、肌醇或第二个甘油）、鞘磷脂（鞘氨醇、脂肪酸、磷酸、胆碱）、脑苷脂（鞘氨醇、脂肪酸、糖）、神经节苷脂（鞘氨醇、脂肪酸、糖、唾液酸）。衍生脂类 (derived lipids) 是剩下的一切具有脂类性质的东西，碳骨架通常由脂肪酸搭成：前列腺素、类固醇、类胡萝卜素和脂溶性维生素。**遇到一个没见过的脂类，办法就是把它水解掉、数一数掉出几样东西 —— 这十一个类别正是靠这份清单定义的。**",
      src: "CZ p.176, Tab. 8.1"
    },
    {
      link_en: "one piece recurs in nearly every one of those classes, so start there",
      link_cn: "上面几乎每一类里都反复出现同一个零件，就从它开始",
      en: "A fatty acid is a carboxylic acid carrying a hydrocarbon chain of 4 to 36 carbons — chemically, a many-carbon aliphatic monocarboxylic acid. It is the hydrophobic spine of a lipid, and its pronounced hydrophobicity is what makes the whole lipid molecule hydrophobic. Most fatty acids are unbranched and fully saturated, meaning no double bond anywhere in the chain; some carry one double bond; some carry several; a few contain three-carbon rings, hydroxyl groups or methyl branches. The ones actually common in nature are unbranched with an even number of carbons between 12 and 24, called the higher fatty acids. **The chain is built two carbons at a time from acetyl units, which is why a natural fatty acid comes out with an even number of carbons and can hardly do otherwise.** Two more regularities: in a fatty acid with a single double bond, that bond usually lies between C-9 and C-10; and in one with several, the double bonds are almost never conjugated but separated by a CH2 group, giving CH=CH-CH2-CH=CH rather than CH=CH-CH=CH, sitting roughly symmetrically about the middle of the chain and almost always in the cis geometry.",
      cn: "脂肪酸 (fatty acid) 是带着一条 4 到 36 个碳的碳氢链的羧酸 —— 化学上说，就是多碳的脂肪族一元羧酸。它是脂类的疏水脊梁，正是它显著的疏水性让整个脂类分子疏水。大多数脂肪酸不分支、完全饱和（链上没有任何双键）；有些带一个双键，有些带好几个；少数含三碳环、羟基或甲基分支。自然界真正常见的那些，是碳数为偶数、长度在 12 到 24 之间的不分支链，叫高级脂肪酸 (higher fatty acids)。**碳链是由乙酰单元一次两个碳搭起来的，所以天然脂肪酸的碳数只能是偶数，几乎没有别的可能。**另外两条规律：只有一个双键的脂肪酸，那个双键通常落在 C-9 与 C-10 之间；有好几个双键的，双键几乎从不共轭，而是被一个 CH2 隔开，形成 CH=CH-CH2-CH=CH 而非 CH=CH-CH=CH，大致对称地分布在链的中段，并且几乎总是顺式。",
      src: "A p.341–342 · CZ p.177, §8.2.1",
      see: [{ id: "L-21-1-1", en: "the two-carbon-at-a-time assembly itself", cn: "「一次两个碳」的合成过程本身" }]
    },
    {
      link_en: "a chain with a length and a few double bonds in it needs a way of being written down",
      link_cn: "一条有长度、又带着几个双键的链，需要一种写下来的办法",
      en: "**The shorthand is chain length, a colon, and the number of double bonds, counted from the carboxyl carbon as C-1, with a double bond named after the lower of the two carbons it joins.** So palmitic acid is 16:0 and oleic acid, whose double bond sits between C-9 and C-10, is 18:1(Delta 9). The carbon next to the carboxyl carbon is the alpha carbon, C-2. Names come in two kinds. A trivial name records where the acid was first got from — palmitic from palm oil, oleic from olive oil. A systematic name states the chain length as a Greek numeral with the ending -anoic for a saturated acid, so 16:0 is hexadecanoic acid, and swaps that ending for -enoic, -dienoic or -trienoic to declare one, two or three double bonds, so 18:2 is octadecadienoic acid. The saturated series worth knowing by name is lauric 12:0, myristic 14:0, palmitic 16:0, stearic 18:0 and arachidic 20:0.",
      cn: "**简写就是「碳链长度 : 双键数目」，编号从羧基碳（C-1）数起，一个双键以它所连的两个碳中编号较小的那个命名。**于是棕榈酸是 16:0；油酸的双键落在 C-9 与 C-10 之间，写作 18:1(Delta 9)。紧挨羧基碳的那个碳是 α 碳，即 C-2。名字分两种：俗名 (trivial name) 记录这个酸最初是从哪里得到的 —— 棕榈酸来自棕榈油，油酸来自橄榄油；系统名 (systematic name) 用希腊数词写出链长，饱和酸用词尾 -anoic，所以 16:0 是十六烷酸；有双键时把词尾换成 -enoic / -dienoic / -trienoic，分别声明一个、两个、三个双键，所以 18:2 是十八碳二烯酸。饱和系列里值得记住名字的是：月桂酸 12:0、豆蔻酸 14:0、棕榈酸 16:0、硬脂酸 18:0、花生酸 20:0。",
      src: "A p.342, key convention · CZ p.178, §8.2.1"
    },
    {
      link_en: "a second numbering exists as well, and the reason it exists is the part worth knowing",
      link_cn: "另外还有第二套编号，而它为什么存在，才是值得知道的那部分",
      en: "A polyunsaturated fatty acid, PUFA for short, is one carrying more than a single double bond. **Two numbering systems exist because what a PUFA does in the body tracks how near its first double bond lies to the methyl end, not to the carboxyl end**, and the two ends are counted in opposite directions. The second count starts at the methyl carbon, the one furthest from the carboxyl group, and calls it 1; that carbon is the omega carbon, written n- in current notation and omega- in the older one. A PUFA whose first double bond falls between C-3 and C-4 of that count is an omega-3 or n-3 acid; between C-6 and C-7, an omega-6 or n-6. Acids sharing a first-double-bond position are spoken of as a series. Eicosapentaenoic acid is the worked example: 20:5(Delta 5,8,11,14,17) in the first convention, n-3 in the second. Others to have: oleic 18:1 Delta 9 is n-9, linoleic 18:2 Delta 9,12 is n-6, alpha-linolenic 18:3 Delta 9,12,15 is n-3, gamma-linolenic 18:3 Delta 6,9,12 is n-6, and arachidonic 20:4 Delta 5,8,11,14 is n-6.",
      cn: "多不饱和脂肪酸 (polyunsaturated fatty acid, PUFA) 指含一个以上双键的脂肪酸。**两套编号之所以并存，是因为一个 PUFA 在体内干什么，取决于它的第一个双键离甲基端有多近、而不是离羧基端有多近，而这两头是从相反方向数的。**第二套从甲基碳（离羧基最远的那个碳）数起，把它记为 1；这个碳就是 omega 碳，现行写法记作 n-，旧写法记作 ω-。第一个双键落在这套编号 C-3 与 C-4 之间的 PUFA 是 omega-3（n-3）脂肪酸；落在 C-6 与 C-7 之间的是 omega-6（n-6）。第一个双键位置相同的一群酸，被称为一个系列 (series)。例子是二十碳五烯酸：第一套写作 20:5(Delta 5,8,11,14,17)，第二套里它是 n-3。其余要记的：油酸 18:1 Delta 9 是 n-9，亚油酸 18:2 Delta 9,12 是 n-6，α-亚麻酸 18:3 Delta 9,12,15 是 n-3，γ-亚麻酸 18:3 Delta 6,9,12 是 n-6，花生四烯酸 20:4 Delta 5,8,11,14 是 n-6。",
      src: "A p.343, key convention · CZ p.177–178, Tab. 8.2"
    },
    {
      link_en: "and the n-3 and n-6 series are where the word essential earns its meaning",
      link_cn: "而 n-3 与 n-6 这两个系列，正是「必需」这个词兑现意义的地方",
      en: "An essential fatty acid is one a mammal cannot make for itself and must take in food. There are two: linoleic acid, 18:2(Delta 9,12), n-6, and alpha-linolenic acid, 18:3(Delta 9,12,15), n-3. A mammal owns two enzyme systems for reshaping a fatty acid: elongases, which lengthen a chain, and desaturases, which put in further double bonds. **No mammalian desaturase can place a double bond further from the carboxyl end than C-9, and that first far double bond is exactly what these two acids already carry.** Given them, the rest follows: from alpha-linolenic acid the body builds eicosapentaenoic acid, EPA, 20:5(Delta 5,8,11,14,17), and docosahexaenoic acid, DHA, 22:6(Delta 4,7,10,13,16,19); from linoleic acid it builds arachidonic acid, 20:4, the n-6 that later becomes the eicosanoid signals. The balance between the two series in the diet matters: the optimal ratio of n-6 to n-3 is between 1:1 and 4:1, while most North American diets run nearer 10:1 to 30:1, and that imbalance is associated with increased cardiovascular risk. The Mediterranean diet, richer in n-3 from leafy vegetables and fish oils, carries lower risk, though whether fish-oil supplements themselves prevent cardiovascular disease is disputed.",
      cn: "必需脂肪酸 (essential fatty acid) 是哺乳动物自己造不出来、必须从食物摄取的脂肪酸，一共两个：亚油酸 (linoleic acid) 18:2(Delta 9,12)、n-6，和 α-亚麻酸 (alpha-linolenic acid) 18:3(Delta 9,12,15)、n-3。**哺乳动物拥有两套酶系统 —— 延长酶 (elongase) 把链加长，去饱和酶 (desaturase) 再插进双键 —— 但它自己的去饱和酶无法把双键放到比 C-9 离羧基端更远的位置上，而这恰恰正是这两个酸已经带着的东西。**有了它们，剩下的就都能造：由 α-亚麻酸造出 EPA 20:5(Delta 5,8,11,14,17) 和 DHA 22:6(Delta 4,7,10,13,16,19)；由亚油酸造出花生四烯酸 20:4，也就是后面变成类二十烷酸信号分子的那个 n-6。膳食中两个系列的比例是有讲究的：n-6 : n-3 的最佳比例在 1:1 到 4:1 之间，而多数北美人的饮食接近 10:1 到 30:1，这种失衡与心血管风险升高相关。以绿叶蔬菜和鱼油提供更多 n-3 的地中海饮食风险较低 —— 不过鱼油补充剂本身能否预防心血管疾病，仍有争议。",
      src: "A p.343 · CZ p.178, §8.2.1",
      beyond: true,
      beyondNote: "That the block is specifically at C-9 — mammals having no desaturase acting beyond that carbon — is standard and examinable; the cited pages state the requirement and the elongase/desaturase route without giving the position of the block."
    },
    {
      link_en: "back to the chain itself, and the cheapest way to make its hydrophobicity concrete",
      link_cn: "回到碳链本身 —— 让「疏水」这件事变具体，最便宜的办法是下面这个",
      en: "**Lauric acid, 12:0, dissolves in water to 0.063 mg/g while glucose, of almost the same molecular mass, dissolves to 1,100 mg/g — four orders of magnitude, and the difference is one hydrocarbon chain.** The rule behind that reads straight down a solubility table: the longer the chain and the fewer the double bonds, the lower the water solubility. At 30 °C, 12:0 gives 0.063 mg/g, 14:0 gives 0.024, 16:0 gives 0.0083, 18:0 gives 0.0034. Solubility in benzene runs the other way over the same series, from 2,600 down to 124 mg/g, and that reversal is the working fact behind every lipid extraction: lipids leave a tissue and go into an organic solvent while the rest of the cell stays behind. What little water solubility a short fatty acid has comes from its carboxyl group, which is polar and ionised at neutral pH.",
      cn: "**月桂酸 12:0，分子量 200，在水中的溶解度是 0.063 mg/g；葡萄糖，分子量 180，溶解度是 1,100 mg/g —— 分子量几乎一样，溶解度差四个数量级，差别就在一条碳氢链上。**背后的规律沿着溶解度表的一列一眼看得见：链越长、双键越少，水溶性越低。30 °C 下，12:0 是 0.063 mg/g，14:0 是 0.024，16:0 是 0.0083，18:0 是 0.0034。同一个系列在苯里的溶解度走向相反，从 2,600 一路降到 124 mg/g —— 这个反向正是一切脂类抽提操作的立足点：脂类会离开组织、跑进有机溶剂，细胞里其余的东西留在原处。短链脂肪酸那一点点水溶性来自它的羧基：羧基是极性的，在中性 pH 下带电离解。",
      src: "A p.343, Table 10-1",
      see: [{ id: "L-10-4-1", en: "extracting and separating lipids in practice", cn: "脂类的抽提与分离的实际做法" }]
    },
    {
      link_en: "the same two variables act on a second property, and this one repays being drawn rather than memorised",
      link_cn: "同样这两个变量还作用在第二个性质上 —— 而这一条值得「画出来」而不是「背下来」",
      recall_en: "chain length and unsaturation again, the same pair that set water solubility one step up",
      recall_cn: "还是链长与不饱和度这一对，和上一步决定水溶性的是同两个变量",
      en: "At room temperature the saturated fatty acids from 12:0 to 24:0 are waxy solids while unsaturated ones of the same length are oily liquids, and the whole difference is how well the molecules pack. In a fully saturated chain every carbon-carbon bond rotates freely, so the chain settles into its fully extended shape, in which neighbouring atoms get in each other's way least; extended chains stack side by side into nearly crystalline arrays, held in van der Waals contact — the weak attraction between atoms lying close together — along their entire length. **A cis double bond is the one bond in the chain that cannot rotate, so it forces a permanent kink; a kinked chain cannot lie flat against its neighbour**, the array packs loosely, and less heat disorders it. That is a lower melting point, and at one chain length the numbers are stearic 18:0 at 69.6 °C, oleic 18:1 at 13.4, linoleic 18:2 at −5, alpha-linolenic 18:3 at −11, and arachidonic 20:4, with four kinks, at −49.5. Chain length acting alone gives 12:0 at 44.2, 14:0 at 53.9, 16:0 at 63.1, 18:0 at 69.6, 20:0 at 76.5, 24:0 at 86.0. The same loose packing also leaves an unsaturated chain chemically less stable, and a double bond sitting nearer the carboxyl group lowers both stability and melting point further still.",
      cn: "室温下，从 12:0 到 24:0 的饱和脂肪酸是蜡状固体，同样长度的不饱和脂肪酸却是油状液体 —— 全部差别就在分子堆得好不好。完全饱和的链上每根碳碳键都能自由旋转，于是链停在完全伸展的形状（这个形状下相邻原子彼此妨碍最小）；伸展的链并排叠成近乎晶体的阵列，沿整条链处在范德华接触（靠得很近的原子之间的弱吸引）之中。**顺式双键是链上唯一不能旋转的那根键，它强行制造一个永久弯折；弯折的链没法平贴在邻居身上：阵列排得松，吸引力更弱，更少的热就足以把它打乱。**这就是熔点更低。同一个链长上的数字：硬脂酸 18:0 是 69.6 °C，油酸 18:1 是 13.4，亚油酸 18:2 是 −5，α-亚麻酸 18:3 是 −11，带四个弯折的花生四烯酸 20:4 是 −49.5。单看链长：12:0 是 44.2，14:0 是 53.9，16:0 是 63.1，18:0 是 69.6，20:0 是 76.5，24:0 是 86.0。同样这份松散堆积还让不饱和链在化学上更不稳定；而双键越靠近羧基，稳定性和熔点降得越多。",
      src: "A p.342–343, figure 10-1 and Table 10-1 · CZ p.178, §8.2.1"
    },
    {
      link_en: "now the molecule the body actually stores, which is three of those chains at once",
      link_cn: "接下来是身体真正拿来储存的那个分子 —— 一次挂三条链",
      en: "Glycerol is a three-carbon alcohol carrying one hydroxyl group on each carbon. Esterify one of them with a fatty acid and the product is a monoacylglycerol; two, a diacylglycerol; all three, a triacylglycerol, also called a triglyceride, a fat, or a neutral fat, and by far the commonest of the three in nature. One carrying the same fatty acid at all three positions is a simple triacylglycerol, named after that acid: the simple triacylglycerols of 16:0, 18:0 and 18:1 are tripalmitin, tristearin and triolein. Most natural fats are mixed, carrying two or three different acids, and naming one then requires the position of each — 1-stearoyl, 2-linoleoyl, 3-palmitoyl glycerol. **Every polar group on both halves is consumed in making the three ester bonds, so no ionisable group survives anywhere in the molecule — and that is what makes a triacylglycerol a neutral lipid.** Being neutral it is nonpolar, hydrophobic and essentially insoluble in water, and its specific gravity is lower than water's, which is why oil floats on vinegar; whether such a lipid is called a neutral fat or a neutral oil says only whether it is solid or liquid at room temperature, which its fatty acids decide. One stereochemical detail carries forward: when C-1 and C-3 carry different fatty acids, C-2 becomes a chiral centre.",
      cn: "甘油 (glycerol) 是三碳醇，每个碳上带一个羟基。用脂肪酸酯化其中一个，产物是单酰甘油；酯化两个，是二酰甘油；三个全酯化，就是三酰甘油 (triacylglycerol) —— 也叫甘油三酯、脂肪或中性脂，是自然界中最常见的一种。三个位置上都是同一种脂肪酸的叫简单三酰甘油，以那种酸命名：16:0、18:0、18:1 的简单三酰甘油分别是三棕榈酸甘油酯、三硬脂酸甘油酯、三油酸甘油酯。天然脂肪绝大多数是混合的，带两三种不同的酸，命名时必须标出每一个的位置 —— 例如 1-硬脂酰-2-亚油酰-3-棕榈酰甘油。**甘油的三个极性羟基与脂肪酸的极性羧基，全部在生成这些酯键时被消耗掉了，整个分子里没有任何可解离的基团剩下 —— 这正是三酰甘油算「中性脂类」的原因。**既然是中性的，它就非极性、疏水、基本不溶于水，比重还比水小，所以油浮在醋上面；至于叫「中性脂」还是「中性油」，只说明它在室温下是固体还是液体，而这由它带的脂肪酸决定。有一个立体化学细节要带到下一个主题去：当 C-1 与 C-3 带着不同的脂肪酸时，C-2 就成了手性中心。",
      src: "A p.344, figure 10-2 · CZ p.178–179, §8.2.2",
      see: [{ id: "L-10-2-1", en: "why glycerol then has to be numbered stereospecifically", cn: "由此为什么甘油必须用立体专一的方式编号" }]
    },
    {
      link_en: "and here is why an animal stores fuel as fat rather than as sugar — two separate reasons, usually collapsed into one",
      link_cn: "接下来是「动物为什么把燃料存成脂肪而不是糖」—— 两个各自独立的理由，人们常把它们并成一个",
      en: "**Fat beats glycogen twice over: a fatty acid's carbons are more reduced, so a gram of triacylglycerol yields more than twice the energy of a gram of carbohydrate**, and being hydrophobic it carries no water at all. Stored polysaccharide, by contrast, drags 2 g of water along per gram, and the organism has to carry that water too. Multiply the two and the difference in depot size is enormous: a moderately obese person carrying 15 to 20 kg of triacylglycerol could meet their energy needs from it for months, whereas the human body can store less than a day's supply as glycogen. Glucose keeps a real advantage as a quick source of energy, and one of its advantages is its ready solubility in water — which is the very solubility that makes it heavy to store. In most eukaryotic cells triacylglycerols form a separate phase of microscopic oily droplets in the watery cytosol. In vertebrates the cell specialised for storing them is the adipocyte, whose single droplet grows so large that it squeezes the nucleus flat against the plasma membrane, and human depots sit under the skin, in the abdominal cavity and in the mammary glands. Plant seeds store the same fuel in oil bodies.",
      cn: "**脂肪在两件事上都赢：脂肪酸的碳比糖的碳更还原，氧化一克三酰甘油放出的能量是一克碳水化合物的两倍以上；而且三酰甘油疏水、根本不带水，储存的多糖却每一克都要拖着 2 克水。**两条相乘，储备量的差别就极其巨大：一个中度肥胖的人脂肪细胞里存着 15 到 20 kg 三酰甘油，靠它可以支撑好几个月的能量需求；而人体以糖原形式储存的能量还不够一天用。葡萄糖作为快速能源仍有实实在在的优势，其中之一就是易溶于水 —— 而正是这份易溶，让它存起来很沉。在大多数真核细胞里，三酰甘油在含水的胞质中形成一个独立的相：显微镜下的油滴。脊椎动物里专门储存它的细胞叫脂肪细胞 (adipocyte)，它那一颗油滴大到把细胞核挤扁贴在质膜上；人体的脂肪库位于皮下、腹腔和乳腺。植物种子则把同样的燃料存在油体 (oil body) 里。",
      src: "A p.345, figure 10-3"
    },
    {
      link_en: "a chain that will not dissolve still has to get from one tissue to another",
      link_cn: "一条不肯溶于水的链，仍然得从一个组织运到另一个组织",
      en: "Vertebrate blood carries fatty acids two ways, and the two ways carry different chemical species. A free fatty acid is one whose carboxyl group is unesterified and therefore still charged; the esterified forms have lost that charge and are even less soluble. **Serum albumin, a carrier protein of the blood, carries the free acid bound noncovalently, while the esterified forms travel packaged inside lipoprotein particles.** A lipoprotein particle is an aggregate of lipid with protein, and the one that carries fat absorbed from a meal is the chylomicron: it takes dietary fatty acids, packed as triacylglycerol, out of the intestine into the lymph and from there into the blood, distributing them round the body.",
      cn: "脊椎动物血液里有两种运脂肪酸的方式，而它们运的是不同的化学物种。**游离脂肪酸（羧基未被酯化、因而带电的那种）以非共价方式挂在载体蛋白血清白蛋白 (serum albumin) 上循环；而酯化形式失去了那个电荷、更不溶于水，只能被打包进脂蛋白颗粒里运走。**脂蛋白颗粒 (lipoprotein particle) 是脂类与蛋白的聚集体；专门运送一餐饭吸收来的脂肪的那一种叫乳糜微粒 (chylomicron)：它把膳食脂肪酸以三酰甘油的形式带出肠道、进入淋巴，再进入血液，分送到全身。",
      src: "A p.344 · CZ p.179, §8.2.2"
    },
    {
      link_en: "stored fuel has to be got out again, and getting it out is the only chemistry a fat does",
      link_cn: "存起来的燃料还得取得出来 —— 而「取出来」是脂肪唯一会做的化学反应",
      en: "**A neutral acylglycerol undergoes exactly one kind of reaction, hydrolysis back to glycerol and free fatty acids, and in a living organism a lipase performs it** — a lipase being an enzyme of the hydrolase class that splits those ester bonds. Adipocytes and germinating seeds both contain lipases, and the fatty acids released are exported to wherever they are needed as fuel. The same depot does two further jobs at the same time. It insulates: triacylglycerol stored under the skin blocks heat loss, which is why seals, walruses, penguins and other warm-blooded polar animals are amply padded with it. And it cushions: fat around the kidneys and the intestines protects those organs against physical shock. In a hibernating animal such as a bear one reserve does all of it at once — the fat laid down before hibernation is the fuel, the blanket and the padding.",
      cn: "**中性酰基甘油只会发生一类反应：水解回甘油和游离脂肪酸；在生物体内执行这个反应的是脂肪酶 (lipase)** —— 脂肪酶是水解酶类的一种酶，负责把那些酯键劈开。脂肪细胞和正在萌发的种子里都含有脂肪酶，释放出的脂肪酸被运到需要燃料的地方。同一个脂肪库还同时兼着两份工。一是保温：皮下储存的三酰甘油阻挡热量流失，所以海豹、海象、企鹅这些温血极地动物身上都厚厚地垫着它。二是缓冲：肾脏和肠道周围的脂肪保护这些器官不受物理冲击。在熊这类冬眠动物身上，同一份储备一次干完三件事 —— 冬眠前积下的脂肪既是燃料，也是被子，还是垫子。",
      src: "A p.345 · CZ p.178–179, §8.2.2"
    },
    {
      link_en: "the same kink that set the melting point decides what a fat is like in a kitchen",
      link_cn: "决定熔点的那个弯折，同样决定了一块脂肪在厨房里是什么样子",
      recall_en: "the kink from the packing step, doing the same work inside a food instead of inside a pure acid",
      recall_cn: "就是堆积那一步里的弯折，只是它现在作用在食物里，而不是在纯脂肪酸里",
      en: "A natural fat is a mixture of simple and mixed triacylglycerols whose fatty acids differ in length and saturation, and the composition of that mixture sets its consistency: at 25 °C olive oil, rich in unsaturated C16 and C18 acids, is liquid; butter, with more saturated C16 and C18, is a soft solid; beef fat, more saturated still, is hard. Leave a lipid-rich food exposed to the oxygen of the air too long and it turns rancid. **Rancidity is oxidative cleavage of the double bonds of unsaturated fatty acids, giving aldehydes and short carboxylic acids light enough to be volatile — which is why spoilage can be smelled.** So the cis double bond that keeps an oil liquid is the same one that lets it spoil.",
      cn: "天然脂肪是简单与混合三酰甘油的混合物，其中脂肪酸的长度与饱和度各不相同，而混合物的组成决定了它的稠度：25 °C 下，富含不饱和 C16、C18 酸的橄榄油是液体；饱和 C16、C18 更多的黄油是软固体；饱和度更高的牛脂则是硬的。富含脂类的食物在空气中的氧里放久了会酸败 (rancid)。**酸败就是不饱和脂肪酸双键被氧化断裂，产物是链更短的醛和羧酸，轻到能挥发起来 —— 所以食物变质是隔着房间就能闻出来的。**于是，让油保持液态的那个顺式双键，正是让它变质的那个双键。",
      src: "A p.345, figure 10-4"
    },
    {
      link_en: "industry attacks exactly that double bond, and pays a price for it",
      link_cn: "工业针对的正是这个双键 —— 而且为此付出了代价",
      en: "Partial hydrogenation converts many cis double bonds in a vegetable oil into single bonds. **Removing kinks lets the chains pack tightly again, so the melting point rises and the oil is nearly solid at room temperature — which is how margarine is made from a vegetable oil.** The product is also more stable at deep-frying temperatures. The unwanted side effect is that some of the surviving cis double bonds are flipped into the trans geometry, whose chains are nearly straight and pack like saturated ones. Dietary trans fatty acids move the blood lipid profile three ways at once: they raise triacylglycerols, raise LDL (low-density lipoprotein, the particle called bad cholesterol) and lower HDL (high-density lipoprotein, the good one), which together is enough to raise the risk of coronary heart disease; they also appear to increase the body's inflammatory response, itself a risk factor. Regulators now limit or ban them in packaged food. One nuance heads off a trick question: natural unsaturated fatty acids are overwhelmingly cis, but trans fatty acids do occur naturally, produced by fermentation in the rumen of dairy animals and eaten in dairy products and meat.",
      cn: "部分氢化 (partial hydrogenation) 把植物油里许多顺式双键变成单键。**弯折被去掉，链就又能紧密堆积，于是熔点升高、油在室温下接近固体 —— 人造黄油就是这么做出来的 —— 而且产物在油炸温度下也更稳定。**不受欢迎的副作用是：残余的一部分顺式双键被翻转成反式 (trans) 构型，这样的链几乎是直的，堆积起来像饱和链一样。膳食中的反式脂肪酸会同时把血脂谱往三个方向推：升高三酰甘油，升高 LDL（低密度脂蛋白，被称作「坏」胆固醇的那种颗粒），降低 HDL（高密度脂蛋白，「好」的那种）—— 仅此三项就足以提高冠心病风险；它们似乎还会增强炎症反应，而炎症本身也是危险因素。如今各国监管机构限制或禁止它们出现在包装食品中。有个细节能挡掉陷阱题：天然不饱和脂肪酸压倒性地是顺式，但反式脂肪酸确实也有天然来源 —— 乳畜瘤胃中的发酵会产生它们，人再从乳制品和肉里吃进去。",
      src: "A p.345, and A p.342 for the rumen exception"
    },
    {
      link_en: "one more storage lipid, and it sits with the fats rather than with the membrane lipids for a reason",
      link_cn: "还有一类储存脂类 —— 它被放在脂肪这边而不是膜脂那边，是有原因的",
      en: "A wax, also called a ceride, is an ester of a long-chain fatty acid (C14 to C36) with a long-chain alcohol (C16 to C30), and it melts at 50 to 100 °C, higher than any triacylglycerol. Beeswax is myricyl palmitate: palmitic acid, 16:0, esterified to the C30 alcohol myricyl alcohol, also called triacontanol. Other wax acids are lignoceric C24, cerotic C26 and myricic C30. Waxes belong with the storage lipids because in plankton, the free-floating microorganisms at the bottom of the marine food chain, wax is the chief storage form of metabolic fuel. **A wax is indigestible to an animal, because an animal's lipases cannot attack that ester bond at all; only the cerases, hydrolases of plants and microorganisms, can cleave it.** Complete insolubility in water and great stability to hydrolysis also make a wax the natural material for a boundary between wet and dry: vertebrate skin glands secrete waxes that keep hair and skin pliable and waterproof, waterfowl spread wax from their preen glands over their feathers, and the shiny leaves and fruit of holly, rhododendron and many tropical plants carry a wax layer that stops water evaporating and keeps parasites out. The same properties are why four named waxes end up in lotions, ointments and polishes: lanolin, which is the wax of sheep's wool, beeswax, carnauba wax from a Brazilian palm, and spermaceti from the whale.",
      cn: "蜡 (wax)，也叫 cerid（ceride），是长链脂肪酸（C14 到 C36）与长链醇（C16 到 C30）形成的酯，熔点 50 到 100 °C，比任何三酰甘油都高。蜂蜡是蜂花酸酯 (myricyl palmitate)：棕榈酸 16:0 与 C30 的醇蜂花醇（也叫三十烷醇）酯化而成。蜡里其他常见的酸有：木蜡酸 C24、蜡酸 C26、蜂花酸 C30。蜡之所以归入储存脂类，是因为在浮游生物 —— 海洋食物链底端那些自由漂浮的微生物 —— 中，蜡是代谢燃料的主要储存形式。**蜡对动物是不可消化的，因为动物的脂肪酶根本啃不动那种酯键；只有植物和微生物的蜡酶 (cerase) 这类水解酶才劈得开它。**完全不溶于水、又极耐水解，这两点还让蜡成为「干湿分界」的天然材料：脊椎动物的皮肤腺分泌蜡，使毛发与皮肤柔韧防水；水禽从尾脂腺取蜡涂抹羽毛；冬青、杜鹃和许多热带植物油亮的叶子与果实上覆着一层蜡，既阻止水分蒸发，也挡住寄生物。正是这些性质，让四种有名字的蜡进了乳液、软膏和上光剂：羊毛脂 (lanolin)，即绵羊羊毛上的蜡；蜂蜡；来自巴西棕榈的巴西棕榈蜡；以及取自鲸的鲸蜡。",
      src: "A p.346, figure 10-5 · CZ p.179, §8.2.2"
    }
  ],
  terms: [
    { en: "lipid", cn: "脂类",
      def_en: "A natural nonpolar compound, nearly or completely insoluble in water and soluble in organic solvents such as chloroform, ethanol or ether. The class is defined by that physical property, not by a shared structure, which is why its members do unrelated jobs.",
      def_cn: "天然的非极性化合物，几乎或完全不溶于水，却溶于氯仿、乙醇、乙醚等有机溶剂。这一类是由这个物理性质、而不是由共同结构定义的 —— 这正是它的成员干着彼此无关的活儿的原因。" },
    { en: "simple / complex / derived lipids", cn: "简单／复合／衍生脂类",
      def_en: "The three-way sort by what hydrolysis gives back. Simple: an alcohol plus fatty acids only (acylglycerols, waxes). Complex: one component further as well (glycoacylglycerols, phosphoacylglycerols, sphingomyelins, cerebrosides, gangliosides). Derived: the remainder of lipid character, skeleton usually built from fatty acids (prostaglandins, steroids, carotenoids, fat-soluble vitamins).",
      def_cn: "按「水解后掉出什么」做的三分法。简单：只掉出一个醇加脂肪酸（酰基甘油、蜡）。复合：还要多掉出一样组分（糖酰基甘油、磷酸酰基甘油、鞘磷脂、脑苷脂、神经节苷脂）。衍生：剩下的一切脂类性质的东西，碳骨架通常由脂肪酸搭成（前列腺素、类固醇、类胡萝卜素、脂溶性维生素）。" },
    { en: "fatty acid", cn: "脂肪酸",
      def_en: "A many-carbon aliphatic monocarboxylic acid, chain 4 to 36 carbons. The common ones are unbranched with an even number of carbons between 12 and 24 — the higher fatty acids — because the chain is assembled two carbons at a time from acetyl units.",
      def_cn: "多碳的脂肪族一元羧酸，碳链 4 到 36 个碳。常见的那些不分支、碳数为 12 到 24 之间的偶数 —— 即高级脂肪酸 —— 因为链是由乙酰单元一次两个碳搭起来的。" },
    { en: "Delta and n- numbering", cn: "Delta 编号与 n- 编号",
      def_en: "Two counts of the same double bond. Delta counts from the carboxyl carbon as C-1 and names the lower-numbered carbon of the pair, so oleic acid is 18:1(Delta 9). The n- count (older form omega-) starts at the methyl carbon instead, and defines the series: first double bond at position 3 makes an n-3 acid, at position 6 an n-6. Both exist because physiological role tracks the methyl end while chemistry tracks the carboxyl end.",
      def_cn: "对同一个双键的两种数法。Delta 从羧基碳 C-1 数起，取所连两碳中编号较小的那个，于是油酸是 18:1(Delta 9)。n-（旧写法 ω-）改从甲基碳数起，用来定义系列：第一个双键在第 3 位就是 n-3，在第 6 位就是 n-6。两套并存，是因为生理作用取决于甲基端，而化学性质取决于羧基端。" },
    { en: "essential fatty acid", cn: "必需脂肪酸",
      def_en: "One a mammal cannot make and must eat: linoleic acid 18:2 n-6 and alpha-linolenic acid 18:3 n-3. Elongases lengthen a chain and desaturases add double bonds, so from those two the body builds arachidonic acid, EPA and DHA — but neither enzyme system can supply the first double bond far from the carboxyl end.",
      def_cn: "哺乳动物造不出、必须吃进来的那种：亚油酸 18:2 n-6 和 α-亚麻酸 18:3 n-3。延长酶把链加长、去饱和酶再加双键，所以身体能由这两个造出花生四烯酸、EPA 和 DHA —— 但这两套酶都无法提供远离羧基端的那第一个双键。" },
    { en: "chain packing", cn: "碳链堆积",
      def_en: "The mechanism behind every melting point here. A saturated chain rotates freely about each carbon-carbon bond, settles fully extended, and stacks into a nearly crystalline array in van der Waals contact along its whole length. A cis double bond cannot rotate and forces a kink; kinked chains stack loosely, attract each other weakly, and need less heat to disorder — a lower melting point, and a chemically less stable molecule.",
      def_cn: "本主题里每一个熔点背后的机制。饱和链的每根碳碳键都能自由旋转，于是停在完全伸展的形状，并叠成近乎晶体的阵列，沿整条链处于范德华接触之中。顺式双键不能旋转，强行制造一个弯折；弯折的链叠得松、彼此吸引弱、需要更少的热就被打乱 —— 熔点更低，分子在化学上也更不稳定。" },
    { en: "triacylglycerol", cn: "三酰甘油",
      def_en: "Three fatty acids in ester linkage with one glycerol. Counts as a neutral lipid because every polar group of both halves is consumed in making those ester bonds, leaving a nonpolar, hydrophobic molecule that will not dissolve in water and floats on it. Called a neutral fat when solid at room temperature and a neutral oil when liquid.",
      def_cn: "三个脂肪酸以酯键连在一个甘油上。它算「中性脂类」，是因为两边所有极性基团都在生成这些酯键时被消耗掉了，剩下一个非极性、疏水的分子，不溶于水并浮在水面上。室温下是固体就叫中性脂，是液体就叫中性油。" },
    { en: "water of hydration", cn: "水合水",
      def_en: "The water a stored polysaccharide must carry with it, 2 g per gram, and which fat does not carry at all. This is the second, physical reason fat outperforms glycogen as a store, separate from the chemical reason that fatty-acid carbons are more reduced. Give both, never one.",
      def_cn: "储存的多糖必须随身携带的水，每克 2 克；而脂肪根本不带。这是脂肪在储存上胜过糖原的第二个、物理的理由，与「脂肪酸的碳更还原」这个化学理由各自独立。两个都要说，不能只说一个。" },
    { en: "lipase", cn: "脂肪酶",
      def_en: "A hydrolase that splits the ester bonds of an acylglycerol, giving glycerol and free fatty acids. Since hydrolysis is the only reaction a neutral acylglycerol undergoes, this one enzyme class is the whole of its chemistry in the body.",
      def_cn: "把酰基甘油的酯键劈开、生成甘油与游离脂肪酸的水解酶。既然水解是中性酰基甘油唯一会发生的反应，那么这一类酶就是它在体内的全部化学。" },
    { en: "chylomicron", cn: "乳糜微粒",
      def_en: "The lipoprotein particle that carries fat absorbed from a meal, packed as triacylglycerol, out of the intestine into the lymph and then the blood. Free fatty acids travel differently — bound to serum albumin — because they still carry a charge.",
      def_cn: "把一餐饭吸收来的脂肪（以三酰甘油形式打包）从肠道带进淋巴、再带进血液的脂蛋白颗粒。游离脂肪酸走的是另一条路 —— 结合在血清白蛋白上 —— 因为它们仍带着电荷。" },
    { en: "rancidity", cn: "酸败",
      def_en: "Oxidative cleavage of the double bonds of unsaturated fatty acids by the oxygen of the air, giving aldehydes and carboxylic acids of shorter chain and therefore high volatility — which is why spoilage can be smelled. The very double bond that keeps an oil liquid is the one that lets it spoil.",
      def_cn: "空气中的氧对不饱和脂肪酸双键的氧化断裂，产生链更短、因而挥发性高的醛和羧酸 —— 所以变质是闻得出来的。让油保持液态的那个双键，正是让它变质的那个双键。" },
    { en: "trans fatty acid", cn: "反式脂肪酸",
      def_en: "Made industrially as a side effect of partial hydrogenation, and naturally by fermentation in the rumen of dairy animals. Its chain is nearly straight and packs like a saturated one. In the diet it raises blood triacylglycerols and LDL, lowers HDL, and appears to raise the inflammatory response.",
      def_cn: "工业上作为部分氢化的副产物产生，天然则由乳畜瘤胃中的发酵产生。它的链几乎是直的，堆积起来像饱和链。膳食中的它升高血中三酰甘油和 LDL、降低 HDL，并似乎增强炎症反应。" },
    { en: "wax / ceride", cn: "蜡",
      def_en: "An ester of a long-chain (C14 to C36) fatty acid with a long-chain (C16 to C30) alcohol, melting at 50 to 100 °C. Beeswax is palmitic acid esterified to the C30 alcohol myricyl alcohol. In plankton it is the chief storage form of metabolic fuel; on land it is a water repellent. Animal lipases cannot attack it — only the cerases of plants and microorganisms cleave it, which is why it is indigestible.",
      def_cn: "长链（C14 到 C36）脂肪酸与长链（C16 到 C30）醇形成的酯，熔点 50 到 100 °C。蜂蜡是棕榈酸与 C30 的蜂花醇酯化而成。在浮游生物中它是代谢燃料的主要储存形式；在陆地上它是防水层。动物脂肪酶啃不动它 —— 只有植物和微生物的蜡酶劈得开，所以它不可消化。" }
  ]
};

/* ------------------------------------------------------------ 膜 脂 ---- */
window.BIOLITE_SPINE["key:membrane-lipids"] = {
  assumed: [
    "membrane", "lipid", "water", "glycerol", "fatty acid", "ester", "ether",
    "phosphate", "phosphoric acid", "sugar", "galactose", "glucose", "oligosaccharide",
    "charge", "hydrolysis", "enzyme", "cell", "protein", "antibody", "mitochondrion",
    "chloroplast", "lysosome", "plasma membrane", "amino group", "hydroxyl", "amide",
    "double bond", "stereochemistry", "mutation", "gene", "neuron", "nerve", "brain",
    "bacteria", "archaea", "eukaryote", "triacylglycerol", "diacylglycerol",
    "cholesterol", "sterol", "phospholipid", "amphipathic", "hydrophobic",
    "hydrophilic", "choline", "ethanolamine", "serine", "inositol", "sialic acid",
    "sphingosine", "glycosidic bond", "polyol", "sulfate", "sulfonate", "acetic acid",
    "platelet", "leukocyte", "inflammation", "allergy", "virus", "interferon",
    "blood group", "transfusion", "cholera", "tetanus", "toxin", "myelin", "axon",
    "thylakoid", "photosynthesis", "soil", "nutrient", "spleen", "liver", "paralysis",
    "serotonin", "smooth muscle", "uterus", "lung", "malignant", "differentiation",
    "glycoprotein", "hormone", "antigen", "ionic strength", "pro-s", "alkyl",
    "ribosome", "genome", "organelle", "endosymbiosis"
  ],
  nodeTitle_en: "Membrane lipids",
  nodeTitle_cn: "膜脂",
  title_en: "One polar head on two nonpolar tails: the head decides charge, recognition and disease, the tails decide what the membrane can survive",
  title_cn: "两条非极性尾巴顶着一个极性头：头决定电荷、识别与疾病，尾巴决定这张膜能扛住什么",
  steps: [
    {
      en: "Start with what a membrane is for. The central architectural feature of a biological membrane is a double layer of lipids, and it acts as a barrier to the passage of polar molecules and ions. Membrane lipids are amphipathic, meaning one end of the molecule is hydrophobic and the other hydrophilic. **A bilayer is not built: hydrophobic ends associating with each other and hydrophilic ends interacting with water drive the molecules into a sheet on their own.** It is the same pair of forces that pulls an oil droplet round. Four general kinds of lipid build one. Phospholipids have a hydrophobic part made of two fatty acids joined to glycerol or to sphingosine. Glycolipids carry a simple sugar or a complex oligosaccharide at the polar end. Archaeal tetraether lipids are two very long alkyl chains ether-linked to a glycerol at both ends. Sterols are built round a rigid system of four fused hydrocarbon rings. Within each kind the huge variety comes from combining different tails with different heads.",
      cn: "先说膜是干什么用的。生物膜的核心构造特征是一个脂类双层，它充当极性分子和离子通过的屏障。膜脂是两亲性 (amphipathic / amfipatie) 的：分子的一头疏水，另一头亲水。**双层不是被「搭」出来的：疏水端彼此结合、亲水端与水相互作用，这两件事自己就把分子赶成一张片层 —— 把油滴拉成圆形的，也正是这一对力。**造膜的脂类有四大类。磷脂的疏水部分是两个脂肪酸连在甘油或鞘氨醇上；糖脂在极性端带一个简单糖或一段复杂寡糖；古菌四醚脂的两条很长的烷基链在两端都以醚键连着甘油；固醇围绕一套刚性的四并环烃体系搭起来。每一类内部巨大的多样性，都来自不同尾巴与不同头的组合。",
      src: "A p.346, §10.2, figure 10-6 · CZ p.180, §8.2.3"
    },
    {
      link_en: "take the commonest kind apart first",
      link_cn: "先把最常见的那一类拆开看",
      en: "A glycerophospholipid, also called a phosphoacylglycerol or simply a phospholipid, is two fatty acids in ester linkage to C-1 and C-2 of a glycerol, with a highly polar or charged group attached to C-3 through a phosphodiester linkage — a phosphate esterified on both sides, once to the glycerol and once to the head-group alcohol. Phospholipids are the most abundant complex lipids in nature and occur chiefly in membranes of every type. Strip the head-group alcohol away and what is left, glycerol with two acyl chains and a bare phosphate, is phosphatidic acid: the simplest member and the parent of all the others, each of which is that same compound with something different hung on the phosphate. Two facts about the tails. As a rule C-1 carries a C16 or C18 saturated fatty acid and C-2 a C18 or C20 unsaturated one, so the two positions are not interchangeable; and because the pair of chains can vary widely, one named phospholipid such as phosphatidylcholine is really a set of molecular species with different chain pairs, distributed differently in each organism and tissue. **The amphipathy that makes a membrane possible comes almost entirely from the head: the bare acylglycerol part contributes very little, and the ionisable head groups supply the hydrophilic end.**",
      cn: "甘油磷脂 (glycerophospholipid)，也叫磷酸酰基甘油 (fosfoacylglycerol) 或干脆叫磷脂，其结构是：两个脂肪酸以酯键连在甘油的 C-1 和 C-2 上，一个高极性或带电的基团通过磷酸二酯键连在 C-3 上 —— 磷酸二酯键就是磷酸两侧都被酯化，一侧接甘油，一侧接头部的醇。磷脂是自然界含量最丰富的复合脂类，主要出现在各种类型的生物膜中。把头部的醇拿掉，剩下的「甘油＋两条酰基链＋一个裸露的磷酸」就是磷脂酸 (phosphatidic acid)：最简单的一个，也是其余所有磷脂的母体 —— 每一个都是它在磷酸上挂了不同的东西。关于尾巴有两件事：按规律，C-1 上是 C16 或 C18 的饱和脂肪酸，C-2 上是 C18 或 C20 的不饱和脂肪酸，所以这两个位置不可互换；而由于这一对链变化很大，一个有名有姓的磷脂（比如磷脂酰胆碱）其实是一组带着不同链对的分子种 (molecular species)，在不同生物、不同组织里分布各异。**让膜成为可能的那份两亲性几乎全部来自头部：光是酰基甘油那一段自己贡献极少，真正提供亲水端的是可解离的头基。**",
      src: "A p.346–347 · CZ p.180, §8.2.3",
      openQuestion_en: "With few exceptions, why a cell makes so many nearly identical lipids — the biological significance of the variation in fatty acids and head groups — is not yet understood.",
      openQuestion_cn: "除少数例外，细胞为什么要造这么多几乎一样的脂类 —— 也就是脂肪酸与头基的这种变化在生物学上的意义 —— 目前仍不清楚。"
    },
    {
      link_en: "and before any of them can be named, the backbone has a stereochemical problem",
      link_cn: "而在给它们任何一个命名之前，骨架本身有一个立体化学上的麻烦",
      en: "Glycerol is prochiral: it has a plane of symmetry through C-2 and therefore no asymmetric carbon, and yet attaching a phosphate at one end converts it into a chiral compound. Read that literally. Free glycerol's two terminal -CH2OH groups are interchangeable, so the molecule has no handedness; the moment a phosphate distinguishes one of them, they stop being interchangeable and the molecule acquires one. **The chain at C-1 and the chain at C-2 are different — one saturated, one unsaturated — and do different jobs, so a name that does not fix which end is which has not identified the molecule at all.** The convention that fixes it is sn, stereospecific numbering, in which C-1 is by definition the group of the prochiral compound that occupies the pro-S position, leaving C-2 in the R configuration. The backbone of most lipids is sn-glycerol 3-phosphate, which is the very same molecule as L-glycerol 3-phosphate and as D-glycerol 1-phosphate: three names, one compound. In archaea the glycerol has the opposite configuration.",
      cn: "甘油是前手性 (prochiral) 的：它有一个穿过 C-2 的对称面，因此没有不对称碳；然而在一端接上磷酸，就把它变成了手性化合物。这句话要照字面读。游离甘油两端的 -CH2OH 可以互换，所以分子没有左右之分；而一旦有一个磷酸把其中一个区分开来，它们就不再可互换，分子于是有了手性。**C-1 上的链和 C-2 上的链本来就不一样 —— 一个饱和、一个不饱和 —— 干的活也不同，所以一个不指明「哪头是哪头」的名字，根本没有确定这个分子。**把它钉死的约定就是 sn（stereospecific numbering，立体专一编号）：按定义，C-1 就是这个前手性化合物中占据 pro-S 位置的那个基团，此时 C-2 为 R 构型。大多数脂类的骨架是 sn-甘油 3-磷酸 —— 它与 L-甘油 3-磷酸、与 D-甘油 1-磷酸是同一个分子：三个名字，一个化合物。古菌里的甘油取相反的构型。",
      src: "A p.346–347, figure 10-7"
    },
    {
      link_en: "with the backbone pinned down, the head group is the only variable left — and it is the one that carries charge",
      link_cn: "骨架钉住之后，剩下的唯一变量就是头部基团 —— 而电荷正是由它带来的",
      en: "The head groups are worth learning as a set, each named for the alcohol hung on phosphatidic acid: phosphatidylethanolamine (PE), phosphatidylcholine (PC), phosphatidylserine (PS), phosphatidylglycerol (PG), and phosphatidylinositol (PI), whose head is the cyclic six-carbon polyol inositol. The doubly esterified phosphate underneath is itself negatively charged at neutral pH, and the alcohol on top may be negative, neutral or positive, so the whole molecule's net charge at pH 7 is a sum: phosphatidic acid −2, phosphatidylethanolamine 0, phosphatidylcholine 0, phosphatidylserine −1, phosphatidylglycerol −1, phosphatidylinositol 4,5-bisphosphate −4, cardiolipin −2. Two of those look odd until you see that a phosphate ester carries about −1.5, one of its -OH groups being only partly ionised at pH 7. **Neutral phosphatidylcholine and phosphatidylethanolamine are a membrane's bulk building material, while phosphatidylinositol 4,5-bisphosphate at −4 is charged enough to be picked out electrostatically.** That is why that one is a signal rather than a brick. These charges contribute greatly to the surface properties of a membrane.",
      cn: "头基值得成套记住，每一个都以「挂在磷脂酸上的那个醇」命名：磷脂酰乙醇胺 (PE)、磷脂酰胆碱 (PC)、磷脂酰丝氨酸 (PS)、磷脂酰甘油 (PG)，以及磷脂酰肌醇 (PI) —— 它的头是六碳环状多元醇肌醇。下面那个双酯化的磷酸在中性 pH 本身就带一个负电荷，而压在它上面的醇可能带负电、中性或带正电，所以整个分子在 pH 7 的净电荷是个加总：磷脂酸 −2，磷脂酰乙醇胺 0，磷脂酰胆碱 0，磷脂酰丝氨酸 −1，磷脂酰甘油 −1，4,5-二磷酸磷脂酰肌醇 −4，心磷脂 −2。其中两个看着奇怪，直到你看到：磷酸酯约带 −1.5，因为它的一个 -OH 在 pH 7 只部分电离。**中性的磷脂酰胆碱与磷脂酰乙醇胺是膜的大宗建材；而带 −4 的 4,5-二磷酸磷脂酰肌醇电荷强到可以被静电方式挑出来 —— 这正是它当信号而不当砖块的原因。**这些电荷极大地影响膜的表面性质。",
      src: "A p.347–348, figure 10-8 · CZ p.180–181, §8.2.3",
      see: [
        { id: "L-10-3-1", en: "the phosphatidylinositols working as signals", cn: "磷脂酰肌醇作为信号分子的工作方式" },
        { id: "L-11-3-1", en: "what a charged membrane surface does to transport", cn: "带电的膜表面对物质转运意味着什么" }
      ]
    },
    {
      link_en: "one of them is worth singling out, because where it sits is an argument about where mitochondria came from",
      link_cn: "其中一个值得单拎出来，因为它待的地方本身就是一个关于线粒体来历的论证",
      en: "Cardiolipin, also named diphosphatidylglycerol (DPG), is a two-tailed glycerophospholipid in which two phosphatidic acid units share one bridging glycerol as their head group — a symmetric molecule carrying four acyl chains. It is found in most bacterial membranes, and in a eukaryotic cell it sits almost exclusively in the inner mitochondrial membrane, where it is also made. **A lipid that bacteria make, that a eukaryote makes only inside its mitochondrion and installs only in that organelle's own inner membrane, is a molecular fingerprint of bacterial ancestry.** It stands beside the mitochondrial genome and the mitochondrial ribosome as evidence for the endosymbiotic origin of the organelle, and should be taken as evidence rather than as decoration.",
      cn: "心磷脂 (cardiolipin)，又名二磷脂酰甘油 (diphosphatidylglycerol, DPG)，是一种双尾甘油磷脂：两个磷脂酸单元共用中间一个甘油作头基 —— 一个对称分子，带着四条酰基链。它存在于大多数细菌膜中；在真核细胞里，它几乎只出现在线粒体内膜上，也在那里合成。**一个细菌会造、真核细胞只在线粒体内部造、而且只装进线粒体自己内膜的脂类，就是细菌祖先的一枚分子指纹。**它与线粒体基因组、线粒体核糖体并列，是该细胞器内共生起源的证据 —— 要当证据看，而不是当点缀。",
      src: "A p.347 · CZ p.181, §8.2.3"
    },
    {
      link_en: "so far every chain has been attached by an ester. Some are not",
      link_cn: "到目前为止每条链都是用酯键接上去的。有些不是",
      en: "In an ether lipid one of the two acyl chains is attached to glycerol in ether linkage rather than ester linkage. If that ether-linked chain is saturated the lipid is an alkyl ether lipid; if it carries a double bond between C-1 and C-2 it is a plasmalogen. The number that makes this memorable: vertebrate heart tissue is uniquely enriched in ether lipids, and about half of all heart phospholipid is plasmalogen. Membranes of halophilic bacteria, of ciliated protists and of certain invertebrates are rich in them too. The one functional handle on offer is a negative one. **The phospholipases that chew fatty acids off a membrane lipid are esterases, and an ether bond is not an ester, so a plasmalogen cannot be taken apart by the ordinary degradative machinery.**",
      cn: "在醚脂 (ether lipid) 里，两条酰基链中有一条以醚键、而不是酯键连在甘油上。若这条醚连的链是饱和的，就是烷基醚脂；若它在 C-1 与 C-2 之间带一个双键，就是缩醛磷脂 (plasmalogen)。让人记得住的数字是：脊椎动物心肌组织异常富含醚脂，心脏磷脂中约有一半是缩醛磷脂。嗜盐细菌、纤毛原生生物和某些无脊椎动物的膜里也富含它们。**能拿到的唯一一个功能上的抓手是否定式的：把酯连的脂肪酸从膜脂上啃下来的磷脂酶都是酯酶，而醚键不是酯键 —— 所以缩醛磷脂是普通降解机器拆不开的那种膜脂。**",
      src: "A p.348",
      openQuestion_en: "The functional significance of ether lipids in these membranes is unknown. Resistance to phospholipases is a suggestion, not an established answer.",
      openQuestion_cn: "醚脂在这些膜里究竟有什么功能意义，目前不清楚。「抗磷脂酶」只是一个猜想，不是已确立的答案。"
    },
    {
      link_en: "and one ether lipid is not a membrane component at all — its chemistry says so",
      link_cn: "而有一个醚脂根本不是膜的组分 —— 它的化学结构就说明了这一点",
      recall_en: "the C-1 / C-2 asymmetry the sn system exists to describe, now doing real work",
      recall_cn: "sn 系统之所以存在就是为了描述 C-1 与 C-2 的不对称；这里它真正派上了用场",
      en: "Platelet-activating factor has a long ether-linked alkyl chain at C-1 of its glycerol, but at C-2 it carries an ester-linked acetic acid in place of a fatty acid, which makes it far more water-soluble than any ordinary glycerophospholipid or plasmalogen; its head-group alcohol is choline. **Replace one of the two long tails with a two-carbon acetyl group and the molecule can no longer sit in a bilayer: it becomes something that travels through water and gets recognised instead.** Released from leukocytes called basophils, it triggers platelet aggregation and the release from platelets of the vasoconstrictor serotonin, acts on liver, smooth muscle, heart, uterine and lung tissue, and plays an important part in inflammation and in the allergic response.",
      cn: "血小板活化因子 (platelet-activating factor) 在甘油 C-1 上带一条醚连的长烷基链，而 C-2 上带的是酯连的乙酸、取代了脂肪酸 —— 这使它比任何普通甘油磷脂或缩醛磷脂水溶性都高得多；它头部的醇是胆碱。**把两条长尾巴中的一条换成一个二碳的乙酰基，分子就再也待不进双层：它转而变成一个能在水里跑、能被识别的东西。**它由称为嗜碱性粒细胞的白细胞释放，引发血小板聚集、促使血小板释放血管收缩剂 5-羟色胺，还作用于肝、平滑肌、心脏、子宫和肺组织，并在炎症与过敏反应中扮演重要角色。",
      src: "A p.349, figure 10-9",
      see: [{ id: "L-10-3-1", en: "the other lipid signals, and how they compare", cn: "其他脂类信号分子，以及它们之间的比较" }]
    },
    {
      link_en: "a whole kingdom builds its membranes without spending any phosphate at all",
      link_cn: "有一整个界，造膜时根本不花一点磷酸",
      en: "A glycoacylglycerol is a 1,2-diacylglycerol carrying a sugar joined by a glycosidic linkage to C-3 and no phosphate anywhere in it. Three are named, and they are the main lipid of the thylakoid membrane, which is the chloroplast membrane system that holds the photosynthetic apparatus: monogalactosyldiacylglycerol (MGDG) with one galactose, digalactosyldiacylglycerol (DGDG) with two stacked galactoses, and sulfoquinovosyldiacylglycerol (SL), whose head is a sugar carrying a CH2-SO3− group — a sulfonate, negatively charged just as a phosphate would be. **Galactolipids make up 70 to 80 per cent of all the membrane lipid of a vascular plant, so the most abundant membrane lipid on this planet is a sugar lipid with no phosphorus in it.** The suggested reason is ecological: phosphate is often the limiting nutrient for a plant in soil, so pressure to save phosphate for more critical roles would favour plants that made phosphate-free lipids. With MGDG and DGDG neutral and SL anionic, a plant has replaced both the neutral head group and the charged one and still spent no phosphate.",
      cn: "糖酰基甘油 (glycoacylglycerol) 是一个 1,2-二酰甘油，在 C-3 上以糖苷键连着一个糖，整个分子不含磷酸。有三个有名字的，它们是类囊体膜（叶绿体中安放光合装置的那套膜系统）的主要脂类：MGDG（单半乳糖基二酰甘油），带一个半乳糖；DGDG（双半乳糖基二酰甘油），带两个叠起来的半乳糖；以及 SL（磺基奎诺糖基二酰甘油），它的头是一个带 CH2-SO3− 的糖 —— 磺酸基，像磷酸一样带负电。**半乳糖脂占维管植物全部膜脂的 70% 到 80%，所以这颗星球上含量最丰富的膜脂，是一种一个磷原子都没有的糖脂。**给出的理由是生态学的：土壤中磷酸常常是植物的限制性营养，因此「把磷酸省下来用于更关键角色」的压力，会让能造无磷脂类的植物占优。MGDG 和 DGDG 是中性的、SL 是阴离子的 —— 植物把中性头基和带电头基都替换掉了，而依然一点磷酸也没花。",
      src: "A p.349, figure 10-10 · CZ p.179, §8.2.3"
    },
    {
      link_en: "the second environmental adaptation, and it changes three things at once",
      link_cn: "第二个环境适应，而它一次改了三样东西",
      recall_en: "one of the three is the ether bond from the plasmalogen step, used here for what it is actually good at",
      recall_cn: "三样里有一样正是缩醛磷脂那一步的醚键，这里用在了它真正擅长的地方",
      en: "Some archaea living in boiling water, at low pH, or at high ionic strength build their membrane lipids from long branched hydrocarbons of 32 carbons linked at each end to a glycerol. Three consequences follow and each answers a different question. First, those linkages are ether bonds, much more stable to hydrolysis at low pH and high temperature than the ester bonds of bacterial and eukaryotic lipids — that is the chemistry of surviving boiling acid. Second, fully extended these lipids are twice the length of a phospholipid or a sphingolipid and span the full width of the plasma membrane. Third, the glycerol in an archaeal lipid has the opposite stereochemical configuration to the one in every bacterial and eukaryotic lipid. **A lipid that reaches all the way through makes the membrane one covalently continuous sheet rather than two leaflets, so there is no middle at which it can be pulled apart.**",
      cn: "有些生活在沸水中、低 pH 下或高离子强度环境里的古菌，用 32 个碳的长支链烃来造膜脂，这些烃在两端都连着一个甘油。由此有三个后果，各回答一个不同的问题。第一，这些连接是醚键，在低 pH 和高温下比细菌与真核生物脂类中的酯键稳定得多 —— 这就是「在沸腾的酸里活下来」的化学。第二，完全伸展时，这些脂是磷脂或鞘脂的两倍长，能横跨整个质膜的宽度。第三，古菌脂里的甘油与所有细菌和真核生物脂类中的甘油取相反的立体构型。**一个从头贯通到尾的脂类，让这张膜成为一整片共价连续的片层，而不是仅靠疏水接触贴在一起的两个小叶 —— 于是它没有一个「中间」可以被撕开。**",
      src: "A p.349, figures 10-6 and 10-7"
    },
    {
      link_en: "now a second backbone entirely, with no glycerol in it",
      link_cn: "接下来是完全另一套骨架，里面根本没有甘油",
      en: "A sphingolipid has a polar head and two nonpolar tails like everything above and contains no glycerol at all. It is built on sphingosine, which is an unsaturated 18-carbon amino-dialcohol — a long chain carrying one amino group and two hydroxyls. The mapping that makes the whole class easy is that carbons C-1, C-2 and C-3 of sphingosine are structurally analogous to the three carbons of glycerol in a glycerophospholipid. **A fatty acid joins sphingosine by an amide bond to the -NH2 on C-2 — to the amino group, not to either hydroxyl — and the product is a ceramide, the core of every sphingolipid there is.** A ceramide is also called N-acylsphingosine, and it is the sphingolipid counterpart of a diacylglycerol. That fatty acid is usually saturated or monounsaturated with 16, 18, 22 or 24 carbons. The three subclasses — sphingomyelins, neutral glycolipids and gangliosides — differ only in the head group hung on the C-1 hydroxyl, and that is the sentence to say first.",
      cn: "鞘脂 (sphingolipid) 和上面所有东西一样是一个极性头加两条非极性尾，而它完全不含甘油。它建立在鞘氨醇 (sphingosine) 上 —— 一种不饱和的 18 碳氨基二元醇：一条长链，带一个氨基和两个羟基。让整个类别变简单的对应关系是：鞘氨醇的 C-1、C-2、C-3 在结构上对应甘油磷脂中甘油的三个碳。**脂肪酸是以酰胺键接到 C-2 上的 -NH2 上的 —— 接的是氨基，而不是任何一个羟基 —— 产物叫神经酰胺 (ceramide)，也叫 N-酰基鞘氨醇；它是鞘脂里与二酰甘油对应的那个东西，也是一切鞘脂的内核。**那个脂肪酸通常是饱和或单不饱和的，含 16、18、22 或 24 个碳。三个亚类 —— 鞘磷脂、中性糖脂、神经节苷脂 —— 彼此的差别只在 C-1 羟基上挂的那个头基，这句话要第一个说出来。",
      src: "A p.350, figure 10-11 · CZ p.181, §8.2.3"
    },
    {
      link_en: "first subclass: put a phosphate head on a ceramide and you have rebuilt a phospholipid",
      link_cn: "第一个亚类：给神经酰胺装一个含磷酸的头，你就把磷脂重造了一遍",
      en: "A sphingomyelin is a ceramide carrying phosphocholine or phosphoethanolamine, ester-linked to the terminal -CH2OH. Complete hydrolysis of one gives back exactly four pieces: a fatty acid, choline, phosphoric acid and sphingosine. Having a phosphate head, sphingomyelins are classified with the glycerophospholipids as phospholipids even though there is no glycerol in them. The convergence goes past the classification. **A sphingomyelin resembles phosphatidylcholine in three-dimensional shape and in carrying no net charge on its head group, so two unrelated backbones arrive at the same molecule seen from outside.** They are especially prominent in nerve-cell membranes and in brain tissue, above all in myelin, the insulating sheath wrapped round an axon.",
      cn: "鞘磷脂 (sphingomyelin) 是神经酰胺的末端 -CH2OH 上以酯键接了磷酸胆碱或磷酸乙醇胺。把一个鞘磷脂彻底水解，恰好掉出四样东西：一个脂肪酸、胆碱、磷酸、鞘氨醇。因为头上带磷酸，鞘磷脂虽然不含甘油，仍与甘油磷脂一并被归为磷脂。**这种趋同还不止于分类：鞘磷脂在一般性质、三维形状、以及「头基不带净电荷」这三点上都与磷脂酰胆碱相像 —— 两套毫不相干的骨架，从外面看却走到了同一个分子上。**它们在神经细胞膜和脑组织中尤其丰富，最集中的地方是髓鞘 (myelin)，也就是包在轴突外面的绝缘鞘。",
      src: "A p.350, figure 10-12 · CZ p.181, §8.2.3"
    },
    {
      link_en: "second and third subclasses: put sugars on instead, and the sugars face outward",
      link_cn: "第二、第三个亚类：换成装糖 —— 而这些糖朝外",
      en: "A glycosphingolipid has one or more sugars joined O-glycosidically to the -OH at C-1 of a ceramide, carries no phosphate at all, and is still amphipathic, since a sugar is as hydrophilic as any phosphate head; its tails are reinforced by very long C24 fatty acids, up to 80 per cent of its fatty-acid content. It sits largely in the outer face of a plasma membrane with its sugars pointing into the space outside the cell. Cerebrosides carry a single sugar, and which sugar tracks the tissue: galactose in neural tissue, glucose in nonneural tissue. About a quarter of brain cerebrosides also carry a sulfate group on carbon 3 of that sugar, and those are called sulfatides. Globosides carry two or more sugars, usually D-glucose, D-galactose or N-acetyl-D-galactosamine; cerebrosides and globosides together are the neutral glycolipids, uncharged at pH 7. **A ganglioside is a glycosphingolipid whose oligosaccharide head ends in at least one residue of N-acetylneuraminic acid, a sialic acid**, and that sialic acid, deprotonated, gives it a negative charge at pH 7. That charge is what separates a ganglioside from a neutral globoside. The naming follows the count: one sialic acid makes the GM series, M for mono, two GD, three GT, four GQ. GM1 decodes on sight as one sialic acid, and its chain runs Gal-GalNAc-Gal-Glc down to the ceramide with the sialyl branch hung on the GalNAc.",
      cn: "糖鞘脂 (glycosphingolipid) 在神经酰胺 C-1 的 -OH 上以 O-糖苷键连着一个或多个糖，完全不含磷酸，却依然是两亲性的 —— 糖和任何磷酸头一样亲水；它的尾巴还被很长的 C24 脂肪酸加强，这类脂肪酸可占其脂肪酸含量的 80%。它主要位于质膜外侧，糖朝细胞外的空间伸。脑苷脂 (cerebroside) 只带一个糖，带哪个糖与组织有关：神经组织里是半乳糖，非神经组织里是葡萄糖。脑内约四分之一的脑苷脂还在那个糖的 3 号碳上带一个硫酸基，这些叫硫苷脂 (sulfatide)。红细胞糖苷脂 (globoside) 带两个或更多糖，通常是 D-葡萄糖、D-半乳糖或 N-乙酰-D-半乳糖胺；脑苷脂与红细胞糖苷脂合称中性糖脂，在 pH 7 不带电。**神经节苷脂 (ganglioside) 是头部寡糖末端一定带至少一个 N-乙酰神经氨酸（一种唾液酸）残基的那一类；去质子化的唾液酸正是它们在 pH 7 带负电、从而区别于中性红细胞糖苷脂的原因。**命名按这个数目走：一个唾液酸是 GM 系列（M 代表 mono），两个是 GD，三个是 GT，四个是 GQ。GM1 一眼就能解码 —— 一个唾液酸 —— 它的糖链是 Gal-GalNAc-Gal-Glc 一路接到神经酰胺，唾液酸支链挂在 GalNAc 上。",
      src: "A p.350–351 · CZ p.181–182, §8.2.3"
    },
    {
      link_en: "and sugars on the outside of a cell are there to be read by something else",
      link_cn: "而细胞外面的糖，存在的意义就是被别的东西读取",
      en: "At least 60 different sphingolipids have been identified in human cellular membranes, and a specific function has been pinned down for only a few. One is settled completely: the carbohydrate parts of certain sphingolipids define the human blood groups, and therefore decide which type of blood a person can safely be given in a transfusion. One nuance prevents over-claiming — the same three oligosaccharides of blood types O, A and B are also found attached to certain blood proteins, so what determines the group is the sugar structure itself and not the molecule it hangs on. Beyond blood groups, surface glycolipids stiffen the membrane and, together with glycoproteins, serve as antigenic markers, as markers of how far a cell has differentiated, in the regulation of cell growth and possibly in the turning of a normal cell into a malignant one, and as the docking sites read by outside agents: glycoprotein hormones, interferons, viruses and bacterial toxins. **Cholera toxin and tetanus toxin both get their grip by binding ganglioside GM1 on the cell surface, so a sugar that exists in order to be recognised can be recognised by the wrong visitor.** The reading can also go wrong from the inside: in Guillain-Barré syndrome the body makes antibodies against its own gangliosides, including those on neurons, and the resulting inflammation damages the peripheral nervous system, causing temporary and sometimes permanent paralysis.",
      cn: "人类细胞膜中已鉴定出至少 60 种不同的鞘脂，而其中只有少数几种的确切功能被定下来。有一个是完全定死的：某些鞘脂的糖类部分决定了人的血型，因而决定了一个人输血时可以安全接受哪一型血。有个细节能防止说过头 —— O、A、B 型的这同样三种寡糖，也出现在某些血液蛋白上，所以决定血型的是糖的结构本身，而不是它挂在什么分子上。除血型之外，表面糖脂还会增加膜的刚性，并与糖蛋白一起充当抗原标志、细胞分化程度的标志，参与细胞生长的调控、乃至正常细胞向恶性转化的过程，同时充当外来者读取的对接位点：糖蛋白激素、干扰素、病毒和细菌毒素。**霍乱毒素和破伤风毒素都是靠结合细胞表面的神经节苷脂 GM1 抓住细胞的 —— 一个为了「被识别」而存在的糖，也会被不该来的访客识别。**这种读取从体内也可能出错：吉兰-巴雷综合征中，身体产生针对自身神经节苷脂（包括神经元上那些）的抗体，由此引发的炎症损伤周围神经系统，导致暂时性、有时是永久性的瘫痪。",
      src: "A p.351, figure 10-13 · CZ p.182, §8.2.3"
    },
    {
      link_en: "membrane lipids are continually replaced, and the taking-apart is where the medicine is",
      link_cn: "膜脂在不断被更新，而「拆解」这一环正是医学所在",
      recall_en: "the head group decides everything again — which enzyme is needed, and which disease follows if it is missing",
      recall_cn: "又是头基决定一切 —— 需要哪个酶，以及它缺席时得哪种病",
      en: "Most cells constantly degrade and replace their membrane lipids, and the machinery is bond-specific: for each hydrolysable bond in a glycerophospholipid there is a specific hydrolytic enzyme in the lysosome. Phospholipases of the A type remove one of the two fatty acids and leave a lysophospholipid; lysophospholipases remove the other. A ganglioside is taken down by a set of lysosomal enzymes that strip its sugars off one at a time, ending at a ceramide. **Because that route runs stepwise, one missing enzyme stalls it and the half-finished product piles up inside the cell, and that is what a lysosomal storage disease is.** More than 50 are known, each from a single mutation in one gene for one lysosomal protein. In Niemann-Pick disease sphingomyelinase, the enzyme that cleaves phosphocholine off sphingomyelin, is defective, sphingomyelin accumulates in brain, spleen and liver, and infants show intellectual disability and early death. In Tay-Sachs disease, the more common one, hexosaminidase A is missing, ganglioside GM2 accumulates in brain and spleen, and the course is progressive developmental delay, paralysis, blindness and death by the age of three or four. Four more pairs sit on the same pathway: beta-galactosidase and generalised gangliosidosis, hexosaminidases A and B together and Sandhoff disease, alpha-galactosidase A and Fabry disease, glucocerebrosidase and Gaucher disease. What is done about it: prospective parents can be tested for abnormal enzyme activity, DNA testing then identifies the exact defect and the risk to offspring, and in an existing pregnancy fetal cells obtained by chorionic villus sampling or amniocentesis are tested the same way.",
      cn: "多数细胞不断降解并更新自己的膜脂，而这套机器是按键专一的：甘油磷脂中每一个可水解的键，在溶酶体里都有一个专门的水解酶对应。A 型磷脂酶切掉两个脂肪酸中的一个，留下溶血磷脂；溶血磷脂酶再切掉另一个。神经节苷脂由一组溶酶体酶一个一个地剥掉糖，最后剩下一个神经酰胺。**正因为这条路是一步一步走的，缺一个酶就会卡住，做了一半的产物在细胞里堆积起来 —— 这就是溶酶体贮积病。**这类病已知 50 多种，每一种都源自某个溶酶体蛋白基因上的单一突变。尼曼-匹克病中，负责把磷酸胆碱从鞘磷脂上切下来的鞘磷脂酶有缺陷，鞘磷脂在脑、脾、肝中积累，患儿出现智力障碍并早年死亡。更常见的泰-萨克斯病中缺乏己糖胺酶 A，神经节苷脂 GM2 在脑和脾中积累，病程是进行性发育迟缓、瘫痪、失明，并在三四岁前死亡。同一条通路上还有另外四对：β-半乳糖苷酶与全身性神经节苷脂贮积症、己糖胺酶 A 与 B 同时缺失与 Sandhoff 病、α-半乳糖苷酶 A 与 Fabry 病、葡萄糖脑苷脂酶与 Gaucher 病。现实中怎么办：可以检测备孕父母的酶活性是否异常，再用 DNA 检测确定确切的缺陷与对后代的风险；已经怀孕的，则通过绒毛取样或羊膜穿刺获取胎儿细胞做同样的检测。",
      src: "A p.352–353, figure 10-14 and box 10-1"
    }
  ],
  terms: [
    { en: "amphipathy", cn: "两亲性",
      def_en: "One molecule with a hydrophobic end and a hydrophilic end. Put many of them in water and they pack into a sheet on their own, hydrophobic ends inward and hydrophilic ends facing the water — which is why a bilayer assembles itself rather than needing to be built. In a phospholipid almost all of the hydrophilic half comes from the ionisable head group, not from the acylglycerol part.",
      def_cn: "同一个分子上一头疏水、一头亲水。把许多这样的分子放进水里，它们自己就排成片层，疏水端朝内、亲水端面向水 —— 这就是双层为什么会自行组装而不需要被搭建。在磷脂里，亲水的那一半几乎全部来自可解离的头基，而不是酰基甘油那一段。" },
    { en: "phosphatidic acid", cn: "磷脂酸",
      def_en: "Glycerol with two fatty acids esterified at C-1 and C-2 and a bare phosphate at C-3. The simplest phospholipid and the parent of every other one: PE, PC, PS, PG, PI and cardiolipin are all this compound with a different alcohol hung on the phosphate through a phosphodiester bond.",
      def_cn: "甘油的 C-1、C-2 上酯化两个脂肪酸、C-3 上带一个裸露磷酸。它是最简单的磷脂，也是其余所有磷脂的母体：PE、PC、PS、PG、PI 和心磷脂，都是它在磷酸上通过磷酸二酯键挂了不同的醇。" },
    { en: "prochirality of glycerol", cn: "甘油的前手性",
      def_en: "Glycerol has a plane of symmetry through C-2 and no asymmetric carbon, so it is achiral and its two terminal -CH2OH groups are interchangeable. Attaching a phosphate to one of them makes them distinguishable and the molecule becomes chiral. This is why a lipid backbone needs a stereochemical convention at all.",
      def_cn: "甘油有一个穿过 C-2 的对称面、没有不对称碳，所以本身不手性，两端的 -CH2OH 可以互换。在其中一端接上磷酸，两端就被区分开来，分子随之变成手性的。这正是脂类骨架为什么需要一套立体化学约定。" },
    { en: "sn, stereospecific numbering", cn: "sn 立体专一编号",
      def_en: "The convention in which C-1 is by definition the group occupying the pro-S position, leaving C-2 in the R configuration. Most lipid backbones are sn-glycerol 3-phosphate, the same molecule as L-glycerol 3-phosphate and as D-glycerol 1-phosphate. It is needed because position 1 usually carries a saturated chain and position 2 an unsaturated one, so the two ends are not interchangeable.",
      def_cn: "按定义把占据 pro-S 位置的基团记作 C-1 的那套约定，此时 C-2 为 R 构型。大多数脂类骨架是 sn-甘油 3-磷酸，与 L-甘油 3-磷酸、D-甘油 1-磷酸是同一个分子。之所以需要它，是因为 1 位通常带饱和链、2 位带不饱和链，两端不可互换。" },
    { en: "PE, PC, PS, PG, PI and DPG", cn: "PE／PC／PS／PG／PI／DPG",
      def_en: "The head-group roster, each written as the alcohol hung on phosphatidic acid: ethanolamine, choline, serine, glycerol, inositol, and a second phosphatidic acid bridged by a central glycerol. Net charges at pH 7: PE and PC neutral and therefore the bulk building material; PS and PG −1; DPG, which is cardiolipin, −2; phosphatidylinositol 4,5-bisphosphate −4, charged enough to be picked out and used as a signal.",
      def_cn: "头基名录，每一个都写成「挂在磷脂酸上的那个醇」：乙醇胺、胆碱、丝氨酸、甘油、肌醇，以及经中央甘油桥接的第二个磷脂酸。pH 7 的净电荷：PE 与 PC 中性，因而是大宗建材；PS、PG 为 −1；DPG（即心磷脂）为 −2；4,5-二磷酸磷脂酰肌醇为 −4，电荷强到可以被挑出来当信号用。" },
    { en: "cardiolipin / diphosphatidylglycerol", cn: "心磷脂／二磷脂酰甘油",
      def_en: "Two phosphatidic acid units sharing one bridging glycerol as their head group — a symmetric molecule with four acyl chains, net charge −2 at pH 7. Present in most bacterial membranes and, in eukaryotes, almost only in the inner mitochondrial membrane where it is also made, which is read as evidence for the endosymbiotic origin of that organelle.",
      def_cn: "两个磷脂酸单元共用中间一个甘油作头基 —— 一个带四条酰基链的对称分子，pH 7 时净电荷 −2。存在于大多数细菌膜；在真核生物里几乎只出现在线粒体内膜，并且也在那里合成 —— 这被读作该细胞器内共生起源的证据。" },
    { en: "ether lipid and plasmalogen", cn: "醚脂与缩醛磷脂",
      def_en: "A membrane lipid with one of its two chains attached to glycerol by an ether bond in place of an ester; if that chain carries a double bond between C-1 and C-2 it is a plasmalogen, and about half of vertebrate heart phospholipid is of that kind. Type A phospholipases are esterases and cannot cut an ether bond, which is the only functional handle available.",
      def_cn: "两条链中有一条用醚键（而非酯键）连在甘油上的膜脂；若这条链在 C-1 与 C-2 之间带一个双键，就叫缩醛磷脂，脊椎动物心脏磷脂中约有一半属于这种。A 型磷脂酶是酯酶，切不动醚键 —— 这是目前唯一一个功能上的抓手。" },
    { en: "platelet-activating factor", cn: "血小板活化因子",
      def_en: "An ether lipid that signals instead of building membrane: a long ether-linked alkyl chain at C-1 but only an ester-linked acetic acid at C-2, which makes it far more water-soluble than a two-tailed lipid and unable to sit in a bilayer. Released from basophils, it drives platelet aggregation and serotonin release and acts in inflammation and allergy.",
      def_cn: "一个当信号而不当建材的醚脂：C-1 上是醚连的长烷基链，C-2 上只有一个酯连的乙酸，这让它比双尾脂类水溶性高得多，也待不进双层。它由嗜碱性粒细胞释放，引发血小板聚集与 5-羟色胺释放，并参与炎症与过敏。" },
    { en: "MGDG, DGDG and SL", cn: "MGDG／DGDG／SL",
      def_en: "The three glycoacylglycerols of the chloroplast thylakoid membrane: one galactose, two stacked galactoses, and a sulfoquinovose whose CH2-SO3− group supplies a negative charge in place of a phosphate. Galactolipids are 70 to 80 per cent of a vascular plant's membrane lipid and therefore probably the most abundant membrane lipids in the biosphere; soil phosphate being a limiting nutrient is the suggested reason they are phosphate-free.",
      def_cn: "叶绿体类囊体膜的三种糖酰基甘油：一个半乳糖、两个叠起的半乳糖，以及一个磺基奎诺糖 —— 它的 CH2-SO3− 提供负电荷、顶替了磷酸。半乳糖脂占维管植物膜脂的 70% 到 80%，因而很可能是生物圈中含量最丰富的膜脂；它们不含磷酸的原因，一般认为是土壤中磷酸常为限制性营养。" },
    { en: "archaeal tetraether lipid", cn: "古菌四醚脂",
      def_en: "Branched 32-carbon hydrocarbons ether-linked to a glycerol at each end, used by archaea in boiling, acidic or highly saline niches. The ether bonds resist hydrolysis where esters would not; fully extended the lipid is twice the length of a phospholipid and spans the whole membrane, so the membrane has no middle at which it can be pulled apart; and its glycerol takes the configuration opposite to every bacterial and eukaryotic one.",
      def_cn: "两端都以醚键连着甘油的 32 碳支链烃，为生活在沸腾、强酸或高盐环境中的古菌所用。醚键在酯键撑不住的地方仍抗水解；完全伸展时它有磷脂的两倍长，横跨整张膜，于是这张膜没有一个可被撕开的「中间」；而它的甘油取的构型，与所有细菌和真核生物的相反。" },
    { en: "ceramide / N-acylsphingosine", cn: "神经酰胺／N-酰基鞘氨醇",
      def_en: "Sphingosine — an unsaturated 18-carbon amino-dialcohol — with a fatty acid joined by an amide bond to the -NH2 on C-2, that is to the amino group and not to either hydroxyl. Since C-1, C-2 and C-3 of sphingosine correspond to the three carbons of glycerol, this is the sphingolipid counterpart of a diacylglycerol, and every sphingolipid is one of these with a head group added at C-1.",
      def_cn: "鞘氨醇（不饱和的 18 碳氨基二元醇）上以酰胺键接了一个脂肪酸，接在 C-2 的 -NH2 上 —— 接的是氨基，而不是任何一个羟基。由于鞘氨醇的 C-1、C-2、C-3 对应甘油的三个碳，它就是鞘脂里与二酰甘油对应的那个东西；而每一个鞘脂都是它在 C-1 上再加一个头基。" },
    { en: "sphingomyelin", cn: "鞘磷脂",
      def_en: "A ceramide with phosphocholine or phosphoethanolamine ester-linked to its terminal hydroxyl; complete hydrolysis returns a fatty acid, choline, phosphoric acid and sphingosine. Classified as a phospholipid despite containing no glycerol, and it matches phosphatidylcholine in shape, general properties and lack of net head-group charge. Concentrated in nerve-cell membranes and in the myelin sheath.",
      def_cn: "神经酰胺的末端羟基上以酯键接了磷酸胆碱或磷酸乙醇胺；彻底水解会掉出脂肪酸、胆碱、磷酸和鞘氨醇。它不含甘油却被归为磷脂，并且在形状、一般性质和「头基不带净电荷」上都与磷脂酰胆碱吻合。集中在神经细胞膜与髓鞘中。" },
    { en: "cerebroside, sulfatide, globoside, ganglioside", cn: "脑苷脂／硫苷脂／红细胞糖苷脂／神经节苷脂",
      def_en: "The glycosphingolipid ladder, all built on a ceramide with sugars O-glycosidically linked at C-1 and no phosphate. One sugar makes a cerebroside — galactose in neural tissue, glucose elsewhere; add a sulfate at carbon 3 of that sugar and it is a sulfatide, about a quarter of brain cerebrosides. Two or more sugars make a globoside. An oligosaccharide ending in at least one sialic acid makes a ganglioside, negatively charged at pH 7 and named GM, GD, GT or GQ for one, two, three or four sialic acids.",
      def_cn: "糖鞘脂的梯子，全都建立在神经酰胺上，C-1 以 O-糖苷键接糖、不含磷酸。一个糖是脑苷脂 —— 神经组织里是半乳糖，其他组织里是葡萄糖；在那个糖的 3 号碳上再加一个硫酸基就是硫苷脂，约占脑内脑苷脂的四分之一。两个或更多糖是红细胞糖苷脂。寡糖末端至少带一个唾液酸的是神经节苷脂，在 pH 7 带负电，按唾液酸数目命名为 GM、GD、GT、GQ。" },
    { en: "lysosomal storage disease", cn: "溶酶体贮积病",
      def_en: "More than 50 are known, each from a single mutation in one gene for one lysosomal protein. Because a membrane lipid is taken apart bond by bond, a missing hydrolase stalls the route and the half-finished product accumulates: sphingomyelinase gives Niemann-Pick, hexosaminidase A gives Tay-Sachs with GM2 piling up, hexosaminidases A and B together give Sandhoff, alpha-galactosidase A gives Fabry, glucocerebrosidase gives Gaucher.",
      def_cn: "已知 50 多种，每一种都源自某个溶酶体蛋白基因上的单一突变。由于膜脂是一个键一个键地被拆开，缺一个水解酶就卡住整条路，做了一半的产物随之堆积：鞘磷脂酶缺陷给出尼曼-匹克病，己糖胺酶 A 缺陷给出泰-萨克斯病并堆积 GM2，己糖胺酶 A 与 B 同时缺陷给出 Sandhoff 病，α-半乳糖苷酶 A 给出 Fabry 病，葡萄糖脑苷脂酶给出 Gaucher 病。" }
  ]
};

/* -------------------------------------------- 脂类信号、辅因子与色素 ---- */
window.BIOLITE_SPINE["key:lipid-signals-and-pigments"] = {
  assumed: [
    "lipid", "membrane", "fatty acid", "cell", "enzyme", "hormone", "receptor",
    "protein", "gene expression", "blood", "plasma membrane", "cytosol",
    "endoplasmic reticulum", "calcium", "phosphorylation", "kinase", "hydroxyl",
    "aromatic ring", "oxidation", "reduction", "electron", "proton", "double bond",
    "light", "photon", "vitamin", "diet", "skin", "liver", "kidney", "bone",
    "intestine", "eye", "platelet", "clot", "inflammation", "asthma", "drug",
    "plant", "insect", "sugar", "polysaccharide", "glycoprotein", "mitochondrion",
    "chloroplast", "atp", "diacylglycerol", "cholesterol", "sphingomyelin",
    "ceramide", "apoptosis", "erythrocyte", "antibiotic", "amphipathic",
    "hydrophobic", "chlorophyll", "photosynthesis", "carotene", "leukemia",
    "acne", "rice", "yeast", "bacteria", "algae", "crustacean", "tomato",
    "potato", "smooth muscle", "uterus", "lung", "fever", "pain", "epinephrine",
    "glucagon", "penicillin", "bee sting", "perfume", "gene", "nucleus",
    "stem cell", "embryo", "immunity", "reproduction", "singlet oxygen",
    "superoxide", "free radical", "antioxidant", "wavelength", "absorption",
    "aldehyde", "alcohol", "ketone", "lactone", "glycoside", "aglycone",
    "bile", "emulsifier", "digestion", "pigment", "isoprene", "terpene",
    "regulation", "protein kinase", "protein kinase c", "secretion", "differentiation"
  ],
  nodeTitle_en: "Lipid signals, cofactors and pigments",
  nodeTitle_cn: "脂类信号、辅因子与色素",
  title_en: "The lipids that do something: one membrane lipid cut into two messengers, four local signals from one fatty acid, and one five-carbon block behind every vitamin and every colour",
  title_cn: "会「做事」的那些脂类：一个膜脂被切成两个信使，一个脂肪酸生出四类局部信号，而一个五碳积木撑起了所有维生素和所有颜色",
  steps: [
    {
      en: "Put the quantities first, because they say why this material is separated out at all. Membrane lipids are 5 to 10 per cent of the dry mass of most cells, and storage lipids more than 80 per cent of the mass of a fat cell, and with some important exceptions those lipids play a passive role: fuel sits there until an enzyme oxidises it, and membrane lipid forms an impermeable barrier round a cell and its compartments. **The lipids in this chain are present in far smaller amounts and are active rather than passive, so quantity is exactly the wrong measure of how much they matter.** They come in four kinds of job. Some are potent signals, either hormones carried in the blood between tissues or messengers generated inside a cell in answer to a signal outside it. Some are enzyme cofactors in electron-transfer reactions and in sugar transfer. Some are pigments whose alternating double bonds absorb visible light, giving vision and photosynthesis their light-catching molecules and pumpkins, carrots and canary feathers their colour. And a very large group are volatile plant lipids that travel through the air, letting a plant call in help and warn its neighbours.",
      cn: "先把数量摆出来，因为它说明了这批材料为什么要单独拿出来讲。膜脂占大多数细胞干重的 5% 到 10%，储存脂类占一个脂肪细胞质量的 80% 以上；而除少数重要例外，这些脂类扮演的是被动角色：燃料就搁在那儿等着被酶氧化，膜脂在细胞及其区室外面围成一道不可透过的屏障。**这条线上的脂类含量要小得多，而且是主动的、不是被动的 —— 所以「量」恰恰是衡量它们有多重要的错误尺度。**它们的活儿分四类。有的是强效信号 —— 或是随血液在组织间传递的激素，或是响应细胞外信号而在细胞内生成的信使。有的是酶的辅因子，用于电子传递反应和糖基转移。有的是色素 —— 交替的双键吸收可见光，为视觉和光合作用提供捕光分子，也给南瓜、胡萝卜和金丝雀羽毛上色。还有一大类是挥发性植物脂类，经空气传播，让植物能叫来帮手、也能提醒邻居。",
      src: "A p.354, §10.3"
    },
    {
      link_en: "start with the messengers made inside the cell, because one of them is a membrane lipid you already know",
      link_cn: "先从细胞内部生成的信使说起，因为其中一个正是你已经认识的膜脂",
      recall_en: "phosphatidylinositol 4,5-bisphosphate is the −4 head group from the membrane lipids, the one charged enough to be picked out",
      recall_cn: "4,5-二磷酸磷脂酰肌醇就是膜脂那边净电荷 −4 的那个头基 —— 电荷强到可以被挑出来的那个",
      en: "Phosphatidylinositol 4,5-bisphosphate, PIP2, sits in the cytoplasmic (that is, inner) face of the plasma membrane as a reservoir of messengers waiting to be released, and the whole cascade runs in one cut. An extracellular signal — the worked example is the hormone vasopressin — switches on a specific phospholipase C in the membrane, and that enzyme hydrolyses PIP2 into two products whose difference is the entire design: inositol 1,4,5-trisphosphate (IP3), which is water-soluble and diffuses away, and diacylglycerol, which stays in the membrane. IP3 triggers release of Ca2+ from the endoplasmic reticulum, the cell's internal calcium store; diacylglycerol together with that raised cytosolic Ca2+ activates protein kinase C — an enzyme that phosphorylates specific proteins and so produces the response. **One cut makes a mobile messenger that goes and fetches calcium and a stationary messenger that waits at the membrane for it, so the kinase switches on only where and when the two halves coincide.** Two nearby molecules work by other logics. Phosphatidylinositol 3,4,5-trisphosphate, PIP3, is never cut but recognised: certain signalling proteins bind it specifically, so making PIP3 assembles multienzyme complexes at the membrane's cytosolic surface — a physical address where PIP2 was a chemical message. And ceramide and sphingomyelin are themselves potent regulators of protein kinases, ceramide or its derivatives acting in cell division, differentiation, migration and apoptosis.",
      cn: "4,5-二磷酸磷脂酰肌醇 (PIP2) 位于质膜的胞质侧（即内侧），充当一个「等着被释放的信使储库」，而整条级联只需要一刀。一个胞外信号 —— 例子是激素加压素 (vasopressin) —— 打开膜上一个特定的磷脂酶 C，这个酶把 PIP2 水解成两个产物，而这两者的差别就是整个设计的要害：1,4,5-三磷酸肌醇 (IP3) 可溶于水、扩散离开；二酰甘油留在膜上。IP3 触发内质网（细胞内部的钙库）释放 Ca2+；二酰甘油再与升高的胞质 Ca2+ 一起激活蛋白激酶 C，后者磷酸化特定蛋白，产生应答。**一刀切出一个会跑的信使去取钙，和一个不动的信使在膜上等它回来 —— 于是这个激酶只在两半重合的地点与时刻才被打开。**旁边还有两个分子走别的逻辑。3,4,5-三磷酸磷脂酰肌醇 (PIP3) 从不被切开，而是被「认出来」：某些信号蛋白专一地结合它，于是生成 PIP3 这件事本身，就在膜的胞质面把多酶复合物组装起来 —— PIP2 是一条化学消息，PIP3 是一个物理地址。而神经酰胺与鞘磷脂本身也是蛋白激酶的强效调节者，神经酰胺或其衍生物参与细胞分裂、分化、迁移与凋亡。",
      src: "A p.354–355, figure 10-16",
      see: [{ id: "L-12-1-1", en: "the full signalling machinery this is a piece of", cn: "这只是其中一环的完整信号转导机制" }]
    },
    {
      link_en: "now the signals that leave the cell but do not go far",
      link_cn: "接下来是那些离开细胞、但走不远的信号",
      en: "Eicosanoids are paracrine hormones, meaning substances that act only on cells near the point where they were made instead of being carried in the blood to act on cells in other tissues or organs. **That delivery model is the exact opposite of a steroid hormone's, and holding the two against each other is the cleanest way to keep both.** They act in reproductive function, in the inflammation, fever and pain that follow injury or disease, in blood clotting and blood-pressure regulation, in gastric acid secretion, and in much else. Their chemistry and their name come from one place: they are made from arachidonate, 20:4(Delta 5,8,11,14), and from eicosapentaenoic acid, EPA, 20:5(Delta 5,8,11,14,17), and they take their general name from the Greek eikosi, twenty. So the dietary omega-6 to omega-3 balance decides which precursor is on hand: series 2 prostaglandins come from arachidonate, series 3 from EPA. Names carry both facts at once — a letter for the functional groups on the ring, a number for the double bonds in the chain — so PGE2 decodes as a prostaglandin with E-type ring substitution and two double bonds.",
      cn: "二十烷酸类 (eicosanoid) 是旁分泌 (paracrine) 激素，意思是它们只作用于自己生成部位附近的细胞，而不经血液运去作用于其他组织或器官的细胞。**这种递送方式与类固醇激素恰好相反，而把两者对着放，正是同时记住它们最干净的办法。**它们参与生殖功能，参与损伤或疾病之后的炎症、发热与疼痛，参与凝血与血压调节，参与胃酸分泌，还参与许多别的过程。它们的化学与名字来自同一处：由花生四烯酸 20:4(Delta 5,8,11,14) 和 EPA 20:5(Delta 5,8,11,14,17) 生成，总名取自希腊语 eikosi（二十）。于是膳食中 omega-6 与 omega-3 的比例决定了哪种前体在手边：2 系列前列腺素由花生四烯酸生成，3 系列由 EPA 生成。命名一次带上两件事 —— 一个字母表示环上的官能团，一个数字表示链上的双键数 —— 于是 PGE2 解码为「E 型环取代、两个双键的前列腺素」。",
      src: "A p.355",
      see: [{ id: "L-10-1-1", en: "where arachidonate and EPA come from in the diet", cn: "花生四烯酸与 EPA 在膳食中的来源" }]
    },
    {
      link_en: "and the four classes are told apart by one structural feature each",
      link_cn: "而这四类各靠一个结构特征就能分辨",
      en: "Prostaglandins (PG) contain a five-carbon ring, made by joining C-8 and C-12 of arachidonate, and are named after the prostate gland they were first isolated from. Their effects are deliberately varied: some contract the smooth muscle of the uterus during menstruation and labour; some affect blood flow to particular organs, the wake-sleep cycle, and how strongly a tissue answers hormones such as epinephrine and glucagon; a third group raise body temperature, producing fever, and cause inflammation and pain. Thromboxanes (TX) have a six-membered ring containing an ether, built the same way with an oxygen atom added; they are made by platelets, also called thrombocytes, and act in forming a clot and cutting blood flow to it. Leukotrienes (LT), first found in leukocytes, contain three conjugated double bonds and have no ring at all. Lipoxins (LX) are linear too, and their distinguishing feature is several hydroxyl groups along the chain. **Two ringed classes then two linear ones, and each name records where its class was first found: prostate, thrombocyte, leukocyte.**",
      cn: "前列腺素 (PG) 含一个五碳环 —— 由花生四烯酸的 C-8 与 C-12 相连而成 —— 名字来自最初分离出它们的前列腺。它们的作用刻意地五花八门：有的在月经和分娩时使子宫平滑肌收缩；有的影响流向特定器官的血流、影响觉醒-睡眠周期，也影响某个组织对肾上腺素和胰高血糖素这类激素的反应强度；还有一组升高体温、引起发热，并造成炎症与疼痛。血栓烷 (TX) 有一个含醚的六元环，造法相同、只多加一个氧原子；它们由血小板（也叫血栓细胞）产生，作用于形成血凝块与减少流向该处的血流。白三烯 (LT) 最初在白细胞中发现，含三个共轭双键，完全没有环。脂氧素 (LX) 也是线性的，判别特征是链上带着好几个羟基。**两类带环、两类线性 —— 而每个名字都记着这一类最初是在哪里被找到的：前列腺、血栓细胞、白细胞。**",
      src: "A p.355, figure 10-17"
    },
    {
      link_en: "one enzyme in that pathway is the target of the commonest drug in the world",
      link_cn: "这条通路上的一个酶，正是世界上最常见的那种药的靶点",
      en: "Nonsteroidal anti-inflammatory drugs — aspirin, ibuprofen and meclofenamate — inhibit cyclooxygenase, also called prostaglandin H2 synthase, which catalyses an early step on the way from arachidonate to the series 2 prostaglandins and thromboxanes, and from EPA to the series 3 versions. **One inhibited enzyme explains two clinical effects: prostaglandins fall, so fever, inflammation and pain fall, and thromboxanes fall, so clotting is affected — one tablet, painkiller and blood thinner.** The leukotrienes need a different drug. Leukotriene D4, made from leukotriene A4, contracts the smooth muscle lining the airways of the lung; overproduction of leukotrienes causes asthmatic attacks, and their synthesis is one target of antiasthmatic drugs such as prednisone. The same contraction at full force is part of anaphylactic shock, the potentially fatal allergic reaction in people hypersensitive to bee stings, penicillin or other agents. The lipoxins are the exception in this family: they are potent anti-inflammatory agents, damping inflammation rather than causing it, and because their synthesis is stimulated by a low daily dose of aspirin — 81 mg — that dose is commonly prescribed for people with cardiovascular disease. Aspirin therefore has two distinct actions, and the small daily dose is chosen for the second one.",
      cn: "非类固醇抗炎药（阿司匹林、布洛芬、甲氯芬那酸）抑制环氧合酶 (cyclooxygenase, COX)，也叫前列腺素 H2 合酶 —— 它催化从花生四烯酸通往 2 系列前列腺素与血栓烷这条路上的一个早期步骤，从 EPA 通往 3 系列产物的那条也一样。**抑制一个酶，同时解释了两种临床效果：前列腺素下来了，发热、炎症和疼痛就下来；血栓烷下来了，凝血就受影响 —— 这就是同一片药既是止痛药又是抗凝药的原因。**白三烯则要靠另一类药。由白三烯 A4 生成的白三烯 D4 使通往肺的气道内衬平滑肌收缩；白三烯产生过多会引发哮喘发作，而它们的合成正是泼尼松等抗哮喘药的靶点之一。同样的收缩若达到极端，就是过敏性休克的一部分 —— 对蜂蜇、青霉素或其他物质高度敏感者可能致命的那种反应。脂氧素是这一族里的例外：它们是强效的抗炎物质，压制炎症而不是引发炎症；而由于每日低剂量（81 mg）阿司匹林会刺激它们的合成，这个剂量常被处方给心血管疾病患者。所以阿司匹林有两个各自独立的作用，而那个每日小剂量选的是第二个。",
      src: "A p.355–356",
      see: [{ id: "L-10-2-2", en: "why a steroid reaches asthma where aspirin does not", cn: "为什么类固醇管得了哮喘、而阿司匹林管不了" }]
    },
    {
      link_en: "plants send signals too, and theirs travel through the air",
      link_cn: "植物也发信号，而它们的信号走空气",
      en: "Plants make thousands of volatile lipophilic compounds, used to attract pollinators, repel herbivores, attract organisms that defend the plant against herbivores, and communicate with other plants. **Take the third of those seriously: the plant does not fight the insect itself, it advertises for a bodyguard.** The worked example is jasmonate, made from the 18:3(Delta 9,12,15) fatty acid of the plant's own membrane lipids, and it triggers the plant's defences in answer to insect-inflicted damage. Two things make it stick. That precursor is alpha-linolenic acid, a dietary essential in humans and a wound alarm in a plant. And jasmonate's methyl ester is the characteristic fragrance of jasmine oil, so the smell people put in perfume is a plant's damage signal. Other plant volatiles are the familiar scents: geraniol in geraniums, beta-pinene in pine trees, limonene in limes, and menthol — all derived either from fatty acids or from compounds made by condensing five-carbon isoprene units.",
      cn: "植物制造成千上万种挥发性亲脂化合物，用来吸引传粉者、驱赶食草动物、招来能替植物对付食草动物的生物，以及与其他植物交流。**第三项要认真对待：植物并不亲自跟虫子打，它是在招保镖。**例子是茉莉酸 (jasmonate)，由植物自身膜脂中的 18:3(Delta 9,12,15) 脂肪酸生成，在昆虫造成损伤时触发植物的防御。有两点让它记得住：这个前体就是 α-亚麻酸 —— 在人是膳食必需脂肪酸，在植物是创伤警报；而茉莉酸的甲酯正是茉莉油的特征香气，所以人们放进香水里的那股味道，是植物的受伤信号。其他植物挥发物都是些熟悉的气味：天竺葵里的香叶醇、松树里的 β-蒎烯、青柠里的柠檬烯，以及薄荷醇 —— 它们要么由脂肪酸衍生而来，要么由五碳异戊二烯单元缩合成的化合物衍生而来。",
      src: "A p.356"
    },
    {
      link_en: "that last phrase — five-carbon units condensed together — is the whole rest of this topic",
      link_cn: "上一句最后那半句「五碳单元缩合起来」，就是本主题余下的全部内容",
      en: "Practically every derived lipid belongs, by the way it is built, to the terpenes, also called isoprenoids: a very large class assembled by condensing one five-carbon monomer, isoprene, over and over. They count as lipids because that hydrocarbon skeleton is hydrophobic enough to fail to dissolve in water. **Terpene names are biosynthetic, so counting five-carbon units gives the name: two make a monoterpene, three a sesquiterpene, four a diterpene, six a triterpene, eight a tetraterpene.** The ladder, written as the actual intermediates: isopentenyl pyrophosphate (IPP) and dimethylallyl pyrophosphate (DMAPP) are the two interconverting C5 units, the hemiterpenes; IPP plus DMAPP gives geranyl pyrophosphate, C10, the monoterpenes; adding another IPP gives farnesyl pyrophosphate, C15, the sesquiterpenes; another gives digeranyl pyrophosphate, C20, the diterpenes; two farnesyl units joined give squalene, C30, the triterpenes; two digeranyl units give phytoene, C40, the tetraterpenes. Mono-, sesqui- and diterpenes are what fragrant essential oils, balsams and resins are largely made of, which is why the scents in the step above sit on this ladder too.",
      cn: "几乎所有衍生脂类，按其搭建方式，都属于萜类 (terpene)，也叫异戊二烯类 (isoprenoid)：一个极大的类别，由一种五碳单体异戊二烯 (isoprene) 反复缩合而成。它们之所以算脂类，是因为这种碳氢骨架疏水到不溶于水。**这套名字是按生物合成、而不是按结构起的，所以数一数五碳单元的个数，名字就直接出来了：两个是单萜，三个是倍半萜，四个是二萜，六个是三萜，八个是四萜。**把这条阶梯写成真实的中间体：IPP（异戊烯基焦磷酸）与 DMAPP（二甲基烯丙基焦磷酸）是两个可互变的 C5 单元，即半萜；IPP + DMAPP 给出香叶基焦磷酸 (C10)，即单萜；再加一个 IPP 给出法尼基焦磷酸 (C15)，即倍半萜；再加一个给出双香叶基焦磷酸 (C20)，即二萜；两个法尼基单元接起来给出角鲨烯 (squalene, C30)，即三萜；两个双香叶基单元给出八氢番茄红素 (phytoene, C40)，即四萜。单萜、倍半萜和二萜正是各种芳香精油、香脂与树脂的主要成分 —— 所以上一步里那些气味也长在这条阶梯上。",
      src: "CZ p.182–183, §8.2.4"
    },
    {
      link_en: "and one rung of that ladder supplies the same tail to five different molecules",
      link_cn: "而这条阶梯上的一级，给五个不同的分子提供了同一条尾巴",
      en: "Phytol is a diterpene alcohol, a C20 isoprenoid chain ending in an -OH. It is part of chlorophyll a and chlorophyll b in higher plants and some algae, and it is what gives vitamin K1 its lipophilic character; hydrophobic chains derived from phytol are also found in vitamin K2, in vitamin E and in coenzyme Q, a family of similar compounds differing in how many isoprenoid units the chain carries, most often 4 to 10. **They share one design — a ring that does the chemistry, plus an isoprenoid tail that only holds the molecule inside a membrane** — so a single kind of tail can serve a pigment, a cofactor and an electron carrier alike. The rings differ: a naphthoquinone in vitamins K1 and K2, a chromanol (benzopyran) in vitamin E, a substituted benzoquinone in coenzyme Q. Vitamin A is the flagged exception in this group — it has the terpenoid look, a cyclohexene ring joined by a polyene chain to a primary alcohol, but its side chain does not come from phytol at all; its precursor is the tetraterpene carotene.",
      cn: "叶绿醇 (phytol) 是一种二萜醇 —— 一条 C20 异戊二烯链，末端带一个 -OH。它是高等植物和某些藻类中叶绿素 a 与 b 的一部分，也正是它赋予维生素 K1 亲脂性；由叶绿醇衍生而来的疏水链还出现在维生素 K2、维生素 E 和辅酶 Q 上 —— 辅酶 Q 是一族作用相似的化合物，彼此之别只在链上带多少个异戊二烯单元，最常见是 4 到 10 个。**它们共享的设计是：一个负责化学的环，加一条什么也不干、只负责把分子按在膜里的异戊二烯尾巴 —— 正因如此，同一条尾巴才能同时服务于一个捕光色素、一个凝血辅因子、一个抗氧化剂和一个电子载体。**环则各不相同：维生素 K1、K2 是萘醌环，维生素 E 是苯并二氢吡喃（chromanol）环，辅酶 Q 是取代的苯醌环。维生素 A 是这一组里被特别标出的例外 —— 它长着萜类的样子（一个环己烯环，经一条多烯链接到一个伯醇上），但它的侧链根本不来自叶绿醇；它的前体是四萜类的胡萝卜素。",
      src: "CZ p.183–184, §8.2.4"
    },
    {
      link_en: "the C30 rung has its own kingdom hanging off it",
      link_cn: "C30 那一级下面挂着自成一国的一大片",
      en: "Squalene, the C30 unsaturated hydrocarbon made from two farnesyl pyrophosphate units, is the precursor of the steroids, and every steroid shares one skeleton: steran, also called perhydrocyclopentanophenanthrene — three six-membered rings fused to one five-membered ring, with the carbons numbered 1 to 17. Steroids differ from one another only in how unsaturated that skeleton is and in which oxygen-containing groups sit at which positions, and on that single frame the functions diverge completely: sex hormones; bile acids, which emulsify lipid in the gut so it can be digested; and cholesterol, a membrane component whose esters carry lipid across membranes and through the bloodstream. A hydrocarbon side chain of 8 to 10 carbons at position 17 plus a hydroxyl at position 3 marks out the sterols, of which cholesterol is the chief animal one. **Cholesterol runs from 0 to 40 per cent of a membrane's total lipid, and because the fused-ring skeleton barely flexes it stiffens whatever bilayer it sits in.** Cholesterol is also the metabolic parent of the bile acids such as cholic acid, of sex hormones such as progesterone and testosterone — both carrying a 3-keto group and a Delta 4 double bond — and, in some organisms, of vitamin D. Plants build the parallel sterols stigmasterol, ergosterol and sitosterol, and from that branch come the cardiac glycosides, steroid poisons that are secondary plant metabolites: digitoxins from foxglove, strophanthins and ouabain from oleander and strophanthus, and the solanines of potato and tomato.",
      cn: "角鲨烯 (squalene) 是由两个法尼基焦磷酸单元造出的 C30 不饱和烃，它是类固醇 (steroid) 的前体；而每一个类固醇都共享同一副骨架：甾烷 (steran)，全名全氢环戊烷并菲 —— 三个六元环稠合一个五元环，碳编号 1 到 17。类固醇之间的差别只在于这副骨架的不饱和程度，以及哪些含氧基团落在哪些位置上；而在这同一副框架上，功能却彻底分岔：性激素；胆汁酸，在肠道里把脂类乳化好让它被消化；以及胆固醇，一种膜组分，其酯负责把脂类运过膜、运过血流。17 位上一条 8 到 10 个碳的烃侧链，加上 3 位上一个羟基，就标出了固醇 (sterol) 这一支，其中动物界最重要的是胆固醇。**胆固醇在不同的膜里占膜总脂的 0% 到 40% 不等；而由于稠环骨架相当不易弯曲，它待在哪张双层里就让那张双层变硬。**胆固醇同时是胆汁酸（如胆酸）、性激素（如孕酮和睾酮，两者都带 3-酮基和 Delta 4 双键）的代谢母体，在某些生物中还是维生素 D 的母体。植物造出平行的植物固醇：豆甾醇、麦角甾醇、谷甾醇；由这一支再生出强心苷 (cardiac glycoside) —— 属于次级代谢物的类固醇毒素：毛地黄的洋地黄毒苷、夹竹桃与羊角拗的毒毛旋花苷与哇巴因，以及马铃薯和番茄里的茄碱。",
      src: "CZ p.184–185, §8.2.4"
    },
    {
      link_en: "one of those steroid derivatives is a vitamin, and sunlight is what makes it",
      link_cn: "这些类固醇衍生物里有一个是维生素 —— 而造出它的是阳光",
      en: "The vitamin D compounds, the calciferols, are counted with the steroids by origin even though they are not steroids in shape, because a steroid is what they are cut out of. **Ultraviolet light opens ring B of the steroid skeleton between carbons 9 and 10, and after a double-bond rearrangement the four-ring frame is a three-ring one with a long open arm.** That photochemical cut is the entire difference between a sterol and a vitamin. In skin, 7-dehydrocholesterol, a cholesterol derivative already present there, is cut that way by the ultraviolet component of sunlight to give cholecalciferol, vitamin D3. Cholecalciferol is not itself biologically active: the liver adds a hydroxyl at C-25, the kidney adds a second at C-1, and the product, 1-alpha,25-dihydroxyvitamin D3 or calcitriol, is the hormone that regulates calcium uptake in the intestine and calcium levels in kidney and bone, acting through receptor proteins in the nucleus. Deficiency gives defective bone formation and rickets, which vitamin D cures dramatically. Vitamin D2, ergocalciferol, is the commercial product made by ultraviolet irradiation of the ergosterol of yeast; it differs only slightly in the side chain, has the same biological effects, and is what is added to milk and butter. So the answer to why sunlight matters for bone runs skin, liver, kidney, nucleus.",
      cn: "维生素 D 类化合物（钙化醇, calciferol）按来源被算进类固醇，尽管它们的形状已经不是类固醇 —— 因为它们是从一个类固醇上剪下来的。**紫外线把类固醇骨架的 B 环在 9 号与 10 号碳之间打开，随后发生双键重排，四环框架变成一个三环加一条张开的长臂 —— 这一刀光化学切割，就是固醇与维生素之间的全部差别。**在皮肤里，本来就存在的胆固醇衍生物 7-脱氢胆固醇被阳光中的紫外线这样切开，生成胆钙化醇（维生素 D3）。胆钙化醇本身没有生物活性：肝脏在 C-25 上加一个羟基，肾脏在 C-1 上再加一个，产物 1α,25-二羟基维生素 D3（骨化三醇, calcitriol）才是那个激素，它通过细胞核内的受体蛋白调节肠道对钙的吸收以及肾与骨中的钙水平。缺乏会造成骨形成缺陷和佝偻病，而补充维生素 D 有戏剧性的疗效。维生素 D2（麦角钙化醇）是紫外线照射酵母麦角甾醇制得的商业产品，仅侧链略有不同，生物效应相同，正是被加进牛奶和黄油里的那一种。所以「为什么晒太阳对骨头重要」的答案是：皮肤 → 肝 → 肾 → 细胞核。",
      src: "A p.356–357 · CZ p.186, §8.2.4"
    },
    {
      link_en: "the other hormone precursor among the vitamins splits into two products doing unrelated jobs",
      link_cn: "维生素里另一个激素前体，分成两个干着不相干活儿的产物",
      en: "Vitamin A1, all-trans-retinol, and its oxidised metabolites retinoic acid and retinal act in development, cell growth and differentiation, and in vision, along two routes that share nothing but a starting material. Route one is a hormone: vitamin A1 or beta-carotene from the diet is converted enzymatically to all-trans-retinoic acid, which acts through a family of nuclear receptor proteins (RAR, RXR, PPAR) to regulate gene expression central to embryonic development, stem-cell differentiation and cell proliferation. Its medicine follows directly — all-trans-retinoic acid treats certain leukaemias and is the active ingredient of tretinoin, sold as Retin-A for severe acne and wrinkled skin. Route two is vision: in the vertebrate eye, retinal bound to the protein opsin forms the photoreceptor pigment rhodopsin. **The photochemical conversion of 11-cis-retinal to all-trans-retinal is the fundamental event in vision, so seeing begins with a photon changing the shape of one double bond.** Unlike most vitamins, vitamin A can be stored for some time, mainly as its ester with palmitic acid, in the liver; it was first isolated from fish liver oils, and eggs, whole milk and butter are good sources.",
      cn: "维生素 A1（全反式视黄醇）及其氧化代谢产物视黄酸与视黄醛，作用于发育、细胞生长与分化以及视觉 —— 走的是两条除起始物外毫无共同之处的路线。第一条是激素路线：膳食中的维生素 A1 或 β-胡萝卜素经酶转化为全反式视黄酸，后者通过一族核受体蛋白（RAR、RXR、PPAR）调控对胚胎发育、干细胞分化和细胞增殖至关重要的基因表达。它的医学用途直接由此而来 —— 全反式视黄酸用于治疗某些白血病，也是维 A 酸（tretinoin，商品名 Retin-A，用于重度痤疮与皮肤皱纹）的活性成分。第二条是视觉路线：在脊椎动物眼中，视黄醛与蛋白 opsin（视蛋白）结合，形成光感受色素视紫红质 (rhodopsin)。**11-顺式视黄醛向全反式视黄醛的光化学转变是视觉的根本事件 —— 所以「看见」始于一个光子改变了一个双键的形状。**与多数维生素不同，维生素 A 能在体内储存一段时间，主要以与棕榈酸形成的酯的形式存于肝脏；它最早从鱼肝油中分离得到，蛋、全脂牛奶和黄油也是良好来源。",
      src: "A p.357, figure 10-20"
    },
    {
      link_en: "and the deficiency numbers are worth quoting exactly, because they turn all of that into public health",
      link_cn: "而缺乏症的数字值得一字不差地引用，因为它把上面这一切变成了公共卫生问题",
      recall_en: "night blindness follows straight from the retinal-rhodopsin mechanism one step up",
      recall_cn: "夜盲直接来自上一步的视黄醛-视紫红质机制",
      en: "Vitamin A deficiency in a pregnant woman can cause congenital malformations and growth retardation in the infant; in an adult the vitamin is essential to vision, immunity and reproduction. Deficiency dries the skin, eyes and mucous membranes and produces night blindness, the early symptom commonly used in diagnosing it — **and it is early precisely because the rod cells, which run on rhodopsin, are the first thing to fail.** The scale: worldwide more than 250 million children and pregnant women are deficient; it causes at least 250,000 cases of irreversible blindness in children each year; half of those children die within a year of losing their sight; and the deficiency is particularly prevalent where rice is the staple food. The intervention answers a question the biology itself raises. Rice has the whole enzymatic machinery for making beta-carotene in its leaves, but those enzymes are far less active in the grain, so the plant is not missing a pathway — it is missing the pathway in the tissue people eat. Introducing two genes gave golden rice, whose grains are enriched in beta-carotene and take on its yellow colour.",
      cn: "孕妇缺乏维生素 A 会导致婴儿先天畸形与生长迟缓；对成人来说，它对视觉、免疫和生殖都不可缺少。缺乏使皮肤、眼睛与黏膜干燥，并造成夜盲 —— 诊断维生素 A 缺乏时常用的早期症状。**它之所以「早」，恰恰因为靠视紫红质工作的视杆细胞是最先失灵的那一批。**规模：全球有超过 2.5 亿儿童与孕妇处于维生素 A 缺乏状态；它每年在儿童中造成至少 25 万例不可逆失明；这些失明儿童中有一半在失明后一年内死亡；而这种缺乏在以稻米为主食的地区尤为普遍。干预措施回答的正是生物学本身提出的问题：水稻在叶子里拥有制造 β-胡萝卜素的全套酶系，但这些酶在谷粒中活性低得多 —— 所以这株植物缺的不是一条通路，而是「在人吃的那个组织里」缺这条通路。引入两个基因就得到了黄金大米，其谷粒富含 β-胡萝卜素，并因此呈现黄色。",
      src: "A p.357–358, figure 10-21"
    },
    {
      link_en: "the other two fat-soluble vitamins are cofactors, and each runs a redox cycle on its ring",
      link_cn: "另外两个脂溶性维生素是辅因子，而各自都在自己的环上跑一个氧化还原循环",
      recall_en: "the chemistry vitamin E blocks is the same oxidative cleavage that makes a cooking oil go rancid, met inside a membrane instead of in a pan",
      recall_cn: "维生素 E 挡下的化学，就是让食用油酸败的那种氧化断裂 —— 只是发生在膜里，而不是在锅里",
      en: "Vitamin E is the collective name for the tocopherols, each a chromanol ring carrying a long saturated isoprenoid side chain. Being hydrophobic they sit in cell membranes, lipid deposits and blood lipoproteins, which is exactly where the damage they prevent happens. **Tocopherols are biological antioxidants: the aromatic ring reacts with and destroys the most reactive oxygen radicals**, protecting unsaturated fatty acids from the oxidation that would leave a cell fragile. They are found in eggs and vegetable oils and are especially abundant in wheat germ; laboratory animals depleted of vitamin E develop scaly skin, muscular weakness and wasting, and sterility. Human deficiency is very rare, and its principal sign is fragile erythrocytes — which is the prediction the mechanism makes, since a red blood cell is little more than a membrane.",
      cn: "维生素 E 是生育酚 (tocopherol) 的总称，每一个都是一个苯并二氢吡喃（chromanol）环带着一条长而饱和的异戊二烯侧链。由于疏水，它们待在细胞膜、脂类沉积和血液脂蛋白里 —— 而它们要防的损伤恰恰就发生在这些地方。**生育酚是生物抗氧化剂：芳香环与最活泼的氧自由基及其他自由基反应并将其摧毁，保护不饱和脂肪酸不被氧化，从而挡住那种会让细胞变脆的膜损伤。**它们见于蛋和植物油，在麦胚中尤其丰富；实验动物在缺乏维生素 E 的饲料上会出现皮肤鳞屑、肌肉无力与消瘦，以及不育。人的缺乏症非常罕见，主要表现是红细胞变脆 —— 而这正是该机制作出的预测，因为红细胞几乎就只是一张膜。",
      src: "A p.359 · CZ p.184, §8.2.4"
    },
    {
      link_en: "the fourth one runs its redox cycle on a protein instead of on a lipid, and a rat poison blocks it",
      link_cn: "第四个把氧化还原循环用在蛋白上而不是脂类上 —— 而一种鼠药正好挡住它",
      en: "The naphthoquinone ring of vitamin K undergoes a cycle of oxidation and reduction during the formation of active prothrombin, a blood plasma protein essential to clotting. Prothrombin is a proteolytic enzyme that splits peptide bonds in fibrinogen, converting it to fibrin, the insoluble fibrous protein that holds a clot together. Deficiency therefore slows clotting; it is extremely uncommon in humans except in a small percentage of infants with haemorrhagic disease of the newborn, a potentially fatal disorder, which is why newborns in the United States routinely get a 1 mg injection of vitamin K. The two forms differ only in the length of the isoprenoid tail and in where they come from. **Vitamin K1, phylloquinone, carries four isoprene units and comes from green plant leaves; vitamin K2, menaquinone, carries eight and is made by bacteria living in the vertebrate intestine.** And the drug: warfarin is a synthetic compound that blocks the formation of active prothrombin. It is particularly poisonous to rats, killing them by internal bleeding — and the same potent rodenticide is an invaluable anticoagulant for people at risk of excessive clotting, such as surgical patients and people with coronary thrombosis.",
      cn: "维生素 K 的萘醌环在活性凝血酶原 (prothrombin) 的形成过程中经历一个氧化-还原循环 —— 凝血酶原是对凝血必不可少的一种血浆蛋白。它是一种蛋白水解酶，切开纤维蛋白原中的肽键，把它变成纤维蛋白 (fibrin)，也就是把血凝块维系在一起的那种不溶性纤维状蛋白。因此缺乏维生素 K 会使凝血变慢；这在人类中极为罕见，除了少数患新生儿出血症的婴儿 —— 一种可能致命的疾病，这也正是美国新生儿常规接受一针 1 mg 维生素 K 注射的原因。**两种形式的差别只在异戊二烯尾巴的长度和来源：维生素 K1（叶绿醌）带四个异戊二烯单元，来自绿色植物叶片；维生素 K2（甲基萘醌）带八个，由生活在脊椎动物肠道里的细菌产生。**至于药物：华法林 (warfarin) 是一种阻断活性凝血酶原形成的合成化合物。它对大鼠尤其毒，靠内出血致死 —— 而同一种强效灭鼠剂，对有过度凝血风险的人（外科手术患者、冠状动脉血栓患者）却是宝贵的抗凝药。",
      src: "A p.359 · CZ p.183, §8.2.4"
    },
    {
      link_en: "two more isoprenoid cofactors, one carrying electrons and one carrying sugars",
      link_cn: "还有两个异戊二烯类辅因子，一个搬电子，一个搬糖",
      en: "Ubiquinone, also called coenzyme Q, and plastoquinone are isoprenoids that work as lipophilic electron carriers in the oxidation-reduction reactions driving ATP synthesis in mitochondria and in chloroplasts respectively. Each is a benzoquinone ring with a polyprenyl tail whose length varies with the organism — 6 to 8 isoprene units in the general depiction, 10 in most mammalian tissues. **Such a quinone can take either one or two electrons and either one or two protons, which lets it stand between a two-electron donor and a one-electron acceptor and hand the electrons on singly.** Dolichols use the same isoprenoid chemistry for a different job: when bacterial cell-wall carbohydrates are assembled, and when sugar units are added to eukaryotic glycoproteins and glycolipids, the sugar to be transferred is first chemically activated by attachment to an isoprenoid alcohol called a dolichol, whose strong hydrophobic interaction with membrane lipids also moors that sugar at the membrane where the transfer happens — an activating group and a mooring at once. Animal dolichols carry 17 to 21 isoprene units (85 to 105 carbons), bacterial ones 11, and those of plants and fungi 14 to 24.",
      cn: "泛醌 (ubiquinone)（也叫辅酶 Q）与质体醌 (plastoquinone) 是异戊二烯类化合物，分别在驱动线粒体和叶绿体中 ATP 合成的氧化还原反应里充当亲脂性电子载体。它们都是一个苯醌环带一条多聚异戊烯尾巴，尾巴长度随生物而异 —— 一般图示是 6 到 8 个异戊二烯单元，大多数哺乳动物组织里是 10 个。**要紧的性质是：这样一个醌能接受一个或两个电子、一个或两个质子 —— 正因如此，它才能夹在「一次给两个电子的供体」和「一次只收一个电子的受体」之间，把电子一个一个传下去。**多萜醇 (dolichol) 用同样的异戊二烯化学做另一件事：在组装细菌细胞壁糖类时，以及在给真核生物的糖蛋白与糖脂加糖时，待转移的糖先连到一个叫多萜醇的异戊二烯醇上而被化学活化；而多萜醇与膜脂之间强烈的疏水相互作用，同时把这个糖系泊在发生转移的那张膜上 —— 既是活化基团，也是系缆桩。动物的多萜醇带 17 到 21 个异戊二烯单元（85 到 105 个碳），细菌的 11 个，植物与真菌的 14 到 24 个。",
      src: "A p.360, figure 10-22 · CZ p.184, §8.2.4",
      see: [{ id: "L-19-1-1", en: "ubiquinone at work in the respiratory chain", cn: "泛醌在呼吸链中的实际工作" }]
    },
    {
      link_en: "and the top rung of the ladder, C40, is the one you can see",
      link_cn: "而阶梯最上面那一级 C40，正是你看得见的那一级",
      recall_en: "the same alternating double bonds that let a photon flip 11-cis-retinal are what make a carotenoid coloured",
      recall_cn: "让光子把 11-顺式视黄醛翻过来的那种交替双键，也正是让类胡萝卜素有颜色的原因",
      en: "The tetraterpenes in nature are without exception of plant origin and are known as the carotenoids: long chains of 3 to 11 conjugated double bonds, meaning single and double bonds alternating along the carbon skeleton. **Alternating bonds let the electrons spread along the whole chain, dropping the energy needed to excite them into the visible range — so the molecule absorbs visible light and has a colour.** More than 400 carotenoids have been described, all derivable from lycopene, the main pigment of tomatoes and rosehips; the most widespread is beta-carotene. They fall in two groups: the carotenes are pure hydrocarbons, while the xanthophylls carry oxygen-containing groups — hydroxyl, epoxide, carbonyl, carboxyl or a sugar residue — and adding such a group shifts the absorption maximum to longer wavelengths, that is, changes the colour. Named xanthophylls: zeaxanthin, the yellow of higher-plant leaves; astaxanthin, the blue-green of crustaceans; fucoxanthin, the brown-red of brown seaweeds. The same conjugated system that makes them useful makes them fragile — isolated carotenoids are readily oxidised by atmospheric oxygen, especially in light, so in nature they are stabilised by binding to protein as carotenoproteins, and in blood serum as chromoproteins. Three jobs follow. They are accessory light-harvesting pigments in photosynthesis. They quench reactive oxygen species — singlet oxygen, the superoxide anion radical, hydroperoxide radicals — and so act as antioxidants. And their all-trans form is the thermodynamically stable one, so absorbing a light quantum drives an endothermic cis-to-trans conversion, which is how a photoreceptive organ registers light. In animals the enzyme-controlled symmetric cleavage of one beta-carotene gives two C20 products, written as two molecules of all-trans-retinal or, once the aldehyde is reduced, two of retinol. Birds get their feather pigments by eating carotenoid-bearing plant material, and the difference in pigmentation between male and female birds comes from differences in intestinal uptake and processing of carotenoids — a sexual ornament that is at bottom a difference in gut chemistry. One last class closes the group: polyketides, lipids built by Claisen condensations, the same chemical logic as fatty-acid synthesis. They are secondary metabolites, not central to metabolism but giving an advantage in some ecological niche, and many are drugs — erythromycin as an antibiotic, amphotericin B as an antifungal, lovastatin as an inhibitor of cholesterol synthesis.",
      cn: "自然界中的四萜无一例外来自植物，统称类胡萝卜素 (carotenoid)：分子里是一长串 3 到 11 个共轭双键 —— 也就是单键与双键沿碳骨架交替排列。**交替的键让电子沿整条链摊开，激发它们所需的能量因而落进可见光范围 —— 于是分子吸收可见光，也就有了颜色。**已描述的类胡萝卜素超过 400 种，全都可由番茄红素 (lycopene)（番茄与玫瑰果的主要色素）衍生而来；最广布的是 β-胡萝卜素。它们分两组：胡萝卜素类是纯烃，叶黄素类 (xanthophyll) 则带含氧基团 —— 羟基、环氧、羰基、羧基或糖残基 —— 而加上这类基团会把吸收最大值推向更长的波长，也就是改变颜色。有名字的叶黄素：玉米黄质，高等植物叶片的黄色；虾青素，甲壳动物的蓝绿色；岩藻黄质，褐藻的棕红色。让它们有用的那套共轭系统，也让它们脆弱 —— 分离出来的类胡萝卜素很容易被空气中的氧氧化，光照下尤甚，所以自然界靠与蛋白结合来稳定它们，形成类胡萝卜素蛋白，在血清里则形成色蛋白 (chromoprotein)。由此有三份工作：它们是光合作用中的辅助捕光色素；它们能猝灭活性氧（单线态氧、超氧阴离子自由基、氢过氧自由基），因而是抗氧化剂；而全反式是它们热力学上最稳定的形式，所以吸收一个光量子会驱动一个吸热的顺式→反式转变 —— 感光器官正是这样登记光的。在动物体内，酶控制的 β-胡萝卜素对称裂解把一个分子切成两个 C20 产物，写作两分子全反式视黄醛，或在醛被还原之后写作两分子视黄醇。鸟类是靠吃含类胡萝卜素的植物材料获得羽毛色素的，而雄鸟与雌鸟色斑上的差别，源自它们在肠道吸收和处理类胡萝卜素方式上的差别 —— 一种性装饰，归根到底是肠道化学上的差别。最后一类为这一群收尾：聚酮 (polyketide)，由 Claisen 缩合搭成，与脂肪酸合成是同一套化学逻辑。它们是次级代谢物 —— 并非代谢的核心，却在某个生态位中带来优势 —— 其中许多是药物：红霉素是抗生素，两性霉素 B 是抗真菌药，洛伐他汀是胆固醇合成抑制剂。",
      src: "A p.360, figure 10-23 · CZ p.186–187, §8.2.4"
    }
  ],
  terms: [
    { en: "IP3 and diacylglycerol", cn: "IP3 与二酰甘油",
      def_en: "The two halves produced by one cut of phosphatidylinositol 4,5-bisphosphate, and their difference is the design: inositol 1,4,5-trisphosphate dissolves and diffuses off to release Ca2+ from the endoplasmic reticulum, while diacylglycerol stays in the membrane. The stationary half plus the returning calcium is what switches protein kinase C on, so the kinase fires only where both coincide.",
      def_cn: "把 4,5-二磷酸磷脂酰肌醇一刀切开得到的两半，而它们的差别就是整个设计：1,4,5-三磷酸肌醇溶于水、扩散离开，去让内质网释放 Ca2+；二酰甘油则留在膜上。不动的那一半加上回来的钙，才把蛋白激酶 C 打开 —— 于是激酶只在两者重合处点火。" },
    { en: "paracrine hormone", cn: "旁分泌激素",
      def_en: "A substance acting only on cells near where it was made, instead of being carried in the blood to other tissues or organs. This is what an eicosanoid is, and it is the exact opposite of how a steroid hormone is delivered.",
      def_cn: "只作用于其生成部位附近细胞的物质，而不是经血液运往其他组织或器官。二十烷酸类就是这样的东西 —— 而这与类固醇激素的递送方式恰好相反。" },
    { en: "the four eicosanoid classes", cn: "二十烷酸类的四个类别",
      def_en: "Prostaglandins carry a five-carbon ring made by joining C-8 and C-12 of arachidonate, and are named for the prostate gland. Thromboxanes carry a six-membered ring containing an ether, built the same way with an oxygen added, and come from platelets. Leukotrienes are linear with three conjugated double bonds, first found in leukocytes. Lipoxins are linear with several hydroxyls along the chain, and are anti-inflammatory.",
      def_cn: "前列腺素带一个由花生四烯酸 C-8 与 C-12 相连而成的五碳环，名字来自前列腺。血栓烷带一个含醚的六元环，造法相同只是多加一个氧，来自血小板。白三烯是线性的、带三个共轭双键，最初在白细胞中发现。脂氧素也是线性的、链上带若干羟基，并且是抗炎的。" },
    { en: "cyclooxygenase", cn: "环氧合酶 (COX)",
      def_en: "Also called prostaglandin H2 synthase, it catalyses an early step from arachidonate to the series 2 prostaglandins and thromboxanes. Aspirin, ibuprofen and meclofenamate inhibit it — one enzyme, which is why a single tablet is both an analgesic and an anticlotting agent. A low daily 81 mg dose of aspirin is prescribed for a different reason: it stimulates synthesis of the anti-inflammatory lipoxins.",
      def_cn: "也叫前列腺素 H2 合酶，催化从花生四烯酸通往 2 系列前列腺素与血栓烷的一个早期步骤。阿司匹林、布洛芬、甲氯芬那酸都抑制它 —— 只是一个酶，而这就是同一片药既止痛又抗凝的原因。每日 81 mg 的小剂量阿司匹林则是为另一个理由开的：它刺激抗炎的脂氧素的合成。" },
    { en: "the terpene ladder", cn: "萜类阶梯",
      def_en: "Isoprenoid names are biosynthetic, so counting five-carbon isoprene units gives the name. IPP and DMAPP are the interconverting C5 hemiterpenes; IPP + DMAPP gives geranyl pyrophosphate C10, the monoterpenes; + IPP gives farnesyl pyrophosphate C15, sesquiterpenes; + IPP gives digeranyl pyrophosphate C20, diterpenes; two farnesyl units give squalene C30, triterpenes; two digeranyl units give phytoene C40, tetraterpenes.",
      def_cn: "异戊二烯类的名字是按生物合成起的，所以数五碳的异戊二烯单元就能得到名字。IPP 与 DMAPP 是可互变的 C5 半萜；IPP + DMAPP 给出香叶基焦磷酸 C10，即单萜；再加 IPP 给出法尼基焦磷酸 C15，即倍半萜；再加给出双香叶基焦磷酸 C20，即二萜；两个法尼基单元给出角鲨烯 C30，即三萜；两个双香叶基单元给出八氢番茄红素 C40，即四萜。" },
    { en: "phytol", cn: "叶绿醇",
      def_en: "A C20 diterpene alcohol, part of chlorophyll a and b, and the source of the lipophilic tail on vitamin K1, vitamin K2, vitamin E and coenzyme Q. It is why those four share one design — a ring that does the chemistry plus an isoprenoid tail that only holds the molecule in a membrane. Vitamin A is the exception: its side chain comes from the tetraterpene carotene instead.",
      def_cn: "一种 C20 二萜醇，是叶绿素 a、b 的一部分，也是维生素 K1、K2、维生素 E 和辅酶 Q 那条亲脂尾巴的来源。正因如此，这四个共享同一套设计 —— 一个负责化学的环，加一条只负责把分子按在膜里的异戊二烯尾巴。维生素 A 是例外：它的侧链来自四萜类的胡萝卜素。" },
    { en: "steran skeleton", cn: "甾烷骨架",
      def_en: "Perhydrocyclopentanophenanthrene: three six-membered rings fused to one five-membered ring, carbons numbered 1 to 17, and the frame every steroid is built on. Steroids differ only in how unsaturated it is and which oxygen-containing groups sit where, yet the functions diverge completely — sex hormones, bile acids as gut emulsifiers, cholesterol as membrane material.",
      def_cn: "全氢环戊烷并菲：三个六元环稠合一个五元环，碳编号 1 到 17，是一切类固醇的框架。类固醇之间只差在这副骨架的不饱和程度和含氧基团的位置上，功能却彻底分岔 —— 性激素、作为肠道乳化剂的胆汁酸、作为膜建材的胆固醇。" },
    { en: "sterol and cholesterol", cn: "固醇与胆固醇",
      def_en: "A sterol is a steroid carrying an 8 to 10 carbon hydrocarbon chain at position 17 and a hydroxyl at position 3; cholesterol is the chief animal one, making up 0 to 40 per cent of a membrane's lipid depending on the membrane and stiffening it because the fused-ring skeleton barely flexes. It is the metabolic parent of bile acids, of progesterone and testosterone, and in some organisms of vitamin D; the plant counterparts are stigmasterol, ergosterol and sitosterol.",
      def_cn: "固醇是 17 位带 8 到 10 个碳的烃侧链、3 位带羟基的类固醇；动物界最重要的是胆固醇，它占膜脂的 0% 到 40%（视膜而定），并因稠环骨架几乎不能弯曲而让膜变硬。它是胆汁酸、孕酮与睾酮的代谢母体，在某些生物中还是维生素 D 的母体；植物中对应的是豆甾醇、麦角甾醇和谷甾醇。" },
    { en: "cardiac glycosides", cn: "强心苷",
      def_en: "Steroid poisons that are secondary plant metabolites, made on the sterol branch: digitoxins from foxglove, strophanthins and ouabain from oleander and strophanthus, and the solanines of potato and tomato. The sugar-free core of one is called its aglycone or genin — digitoxigenin, for example, carries an unsaturated lactone ring at C-17.",
      def_cn: "长在固醇这一支上的次级植物代谢物类固醇毒素：毛地黄的洋地黄毒苷、夹竹桃与羊角拗的毒毛旋花苷与哇巴因，以及马铃薯和番茄的茄碱。去掉糖的核心部分叫苷元（genin）—— 例如洋地黄毒苷元在 C-17 上带一个不饱和内酯环。" },
    { en: "calciferol and calcitriol", cn: "钙化醇与骨化三醇",
      def_en: "Ultraviolet light opens ring B of a steroid between C-9 and C-10 and a double-bond rearrangement follows, which is how 7-dehydrocholesterol in skin becomes cholecalciferol, vitamin D3. Cholecalciferol is inactive: the liver hydroxylates C-25, the kidney hydroxylates C-1, and the product calcitriol is the hormone regulating calcium uptake in the intestine and calcium levels in kidney and bone. Deficiency gives rickets.",
      def_cn: "紫外线把类固醇的 B 环在 C-9 与 C-10 之间打开、随后双键重排 —— 皮肤中的 7-脱氢胆固醇就这样变成胆钙化醇（维生素 D3）。胆钙化醇没有活性：肝在 C-25 上加羟基、肾在 C-1 上加羟基，产物骨化三醇才是那个调节肠道钙吸收与肾、骨中钙水平的激素。缺乏会得佝偻病。" },
    { en: "rhodopsin", cn: "视紫红质",
      def_en: "Retinal bound to the protein opsin in the vertebrate eye, forming the photoreceptor pigment. The photochemical conversion of 11-cis-retinal to all-trans-retinal is the fundamental event in vision, and it is why night blindness is the early sign of vitamin A deficiency — the rod cells fail first.",
      def_cn: "脊椎动物眼中视黄醛与蛋白 opsin 结合形成的光感受色素。11-顺式视黄醛向全反式视黄醛的光化学转变是视觉的根本事件；这也是为什么夜盲是维生素 A 缺乏的早期表现 —— 视杆细胞最先失灵。" },
    { en: "tocopherol", cn: "生育酚",
      def_en: "The collective name for vitamin E, each one a chromanol ring with a long saturated isoprenoid side chain. Being hydrophobic they sit in membranes, lipid deposits and blood lipoproteins, and the aromatic ring reacts with and destroys the most reactive oxygen radicals — blocking the same oxidation that makes a cooking oil go rancid. Human deficiency is rare and shows as fragile red blood cells.",
      def_cn: "维生素 E 的总称，每一个都是带长饱和异戊二烯侧链的苯并二氢吡喃环。由于疏水，它们待在膜、脂类沉积和血液脂蛋白中，而其芳香环与最活泼的氧自由基反应并将其摧毁 —— 挡下的正是让食用油酸败的那种氧化。人的缺乏症罕见，表现为红细胞变脆。" },
    { en: "phylloquinone and menaquinone", cn: "叶绿醌与甲基萘醌",
      def_en: "The two forms of vitamin K, both a naphthoquinone ring with an isoprenoid tail, differing in tail length and source: K1 phylloquinone with four isoprene units from green plant leaves, K2 menaquinone with eight, made by bacteria in the vertebrate intestine. The ring cycles through oxidation and reduction while active prothrombin is formed; warfarin blocks that formation, which makes it both a rat poison and an anticoagulant drug.",
      def_cn: "维生素 K 的两种形式，都是萘醌环加一条异戊二烯尾巴，差别只在尾长与来源：K1 叶绿醌带四个异戊二烯单元，来自绿色植物叶片；K2 甲基萘醌带八个，由脊椎动物肠道细菌产生。这个环在活性凝血酶原形成时经历氧化与还原的循环；华法林阻断这一形成过程 —— 所以它既是鼠药，也是抗凝药。" },
    { en: "dolichol", cn: "多萜醇",
      def_en: "An isoprenoid alcohol to which a sugar unit is attached so as to be chemically activated before transfer — during assembly of bacterial cell-wall carbohydrates and during glycosylation in eukaryotes. Its strong hydrophobic interaction with membrane lipids also moors the attached sugar at the membrane where the transfer happens.",
      def_cn: "一种异戊二烯醇，糖单元先连到它上面而获得化学活化，然后再被转移 —— 用于细菌细胞壁糖类的组装以及真核生物的糖基化。它与膜脂之间强烈的疏水相互作用，还把这个糖系泊在发生转移的那张膜上。" },
    { en: "carotenoid, carotene, xanthophyll", cn: "类胡萝卜素／胡萝卜素／叶黄素",
      def_en: "Plant tetraterpene pigments with 3 to 11 conjugated double bonds, more than 400 described and all derivable from lycopene. Carotenes are pure hydrocarbons; xanthophylls carry oxygen-containing groups, which shift absorption to longer wavelengths and so change the colour — zeaxanthin yellow in leaves, astaxanthin blue-green in crustaceans, fucoxanthin brown-red in brown seaweeds. The conjugated system that gives colour also makes them oxidise easily, so in vivo they are bound to protein as carotenoproteins.",
      def_cn: "带 3 到 11 个共轭双键的植物四萜色素，已描述超过 400 种，全都可由番茄红素衍生。胡萝卜素类是纯烃；叶黄素类带含氧基团，把吸收推向更长波长、因而改变颜色 —— 玉米黄质是叶片的黄，虾青素是甲壳动物的蓝绿，岩藻黄质是褐藻的棕红。给出颜色的那套共轭系统也让它们易被氧化，所以体内靠与蛋白结合成类胡萝卜素蛋白来稳定。" },
    { en: "conjugated double bonds and colour", cn: "共轭双键与颜色",
      def_en: "A carbon chain with alternating single and double bonds. The arrangement lets electrons delocalise along the chain, so the energy needed to excite them drops into the visible range — which is why these molecules have colours people and animals can see, and why absorbing one quantum can flip a cis double bond to trans, as it does in vision.",
      def_cn: "单键与双键交替的碳链。这种排列让电子沿链离域，激发它们所需的能量因而落进可见光范围 —— 这既是这类分子对人和动物呈现颜色的原因，也是吸收一个光量子就能把一个顺式双键翻成反式的原因，视觉里发生的正是这件事。" },
    { en: "polyketide", cn: "聚酮",
      def_en: "A diverse group of lipids built by Claisen condensations, the same chemical logic as fatty acid synthesis. They are secondary metabolites — not central to metabolism, but giving an advantage in some ecological niche — and many are medicines: erythromycin an antibiotic, amphotericin B an antifungal, lovastatin an inhibitor of cholesterol synthesis.",
      def_cn: "由 Claisen 缩合搭成的一大类各式各样的脂，化学逻辑与脂肪酸合成相同。它们是次级代谢物 —— 并非代谢的核心，却在某个生态位中带来优势 —— 其中许多是药物：红霉素是抗生素，两性霉素 B 是抗真菌药，洛伐他汀是胆固醇合成抑制剂。" }
  ]
};
