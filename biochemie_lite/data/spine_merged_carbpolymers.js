/* Merged spines — what sugar units are built into: the polysaccharides, the sugar
   chains carried on proteins, the biosynthesis of starch, sucrose and cellulose, and
   the fixation of CO2 that supplies the carbon for all of it. 速通简洁版, ONE spine
   per TOPIC.

   Four chains, fourteen member nodes:
     key:polysaccharides              7-4, 7-4-1-1, 7-4-1-2, 7-4-2          (no member
                                      node had a spine before this file)
     key:glycoconjugates              7-5, L-7-4-1
     key:starch-sucrose-biosynthesis  6-2-3, L-20-6-1
     key:co2-assimilation             9-15, 9-16, 9-17, 9-18, 9-19, L-20-4-1

   Sizing rule that overrides the ten-to-fifteen-step guidance in SPINE_SPEC.md:
   不要缺失任何节点 — 急速简化成主线不代表同意删除任何内容. A four-node chain gets
   twelve to sixteen steps and a six-node chain sixteen to twenty-two, and no named
   polysaccharide, enzyme or number has been dropped to hit a count. Node → step map
   is printed above each chain so nothing can quietly fall out.

   A = Lehninger, B = the state-exam course book. A step read from both carries both,
   separated by a middle dot. Where a member node had a spine already (L-7-4-1,
   L-20-6-1, L-20-4-1) that spine is the backbone of its chain, re-bolded to one span
   per field and joined to the material of the nodes merged with it.

   Reaching back: the monosaccharide chain (key:monosaccharides) has already
   established the sugars themselves — D-glucose and its epimers, pyranose and
   furanose rings, the anomeric carbon, the O- and N-glycosidic bond, amino sugars,
   uronic acids, reducing versus non-reducing. None of that is re-explained here; it
   is declared in `assumed`. The light reactions that pay for CO2 fixation are in
   key:photosynthetic-pigments and key:photochemical-reaction-centers, and what goes
   wrong at rubisco when O2 wins is key:photorespiration-c4-cam; the CO2 chain points
   at both. Glycogen is developed as a pathway in key:glycogen-metabolism.

   ONE bold span per field, 60–200 characters in English and 40–120 in Chinese.
   极简 mode shows only that span, so it has to read correctly as a standing claim
   with everything else hidden — but a cold start is never fixed by pushing a
   definition into the bold span. It is fixed in the prose of the step. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------------- 多糖 (7-4 … 7-4-2) ----
   Node → step map:
     7-4       1-3      7-4-1-2   8-10
     7-4-1-1   4-7      7-4-2    11-15
   One placement flag kept out of the prose so it does not read as commentary: the
   book prints mannans as the last entry under storage polysaccharides, immediately
   before the structural heading, although yeast cell-wall mannan is structural. The
   chain names mannans and their occurrence and does not assign them a function. */
window.BIOLITE_SPINE["key:polysaccharides"] = {
  assumed: ["monosaccharide", "disaccharide", "oligosaccharide", "polysaccharide",
            "carbohydrate", "sugar", "glucose", "fructose", "galactose", "mannose",
            "xylose", "arabinose", "glucosamine", "galactosamine", "sucrose",
            "maltose", "isomaltose", "cellobiose", "lactose", "amino sugar",
            "uronic acid", "glucuronic acid", "galacturonic acid", "iduronic acid",
            "acetyl", "N-acetyl", "sulfate", "sulfuric acid", "ester",
            "esterification", "hydroxyl", "carboxyl", "amino group", "hydrogen bond",
            "hydrolysis", "acid", "enzyme", "protein", "glycoprotein", "glycolipid",
            "lipid", "aromatic", "alcohol", "pyranose", "furanose",
            "anomeric carbon", "glycosidic bond", "O-glycosidic bond",
            "reducing end", "non-reducing end", "relative molecular mass",
            "micelle", "helix", "iodine", "cell", "cell wall", "membrane",
            "connective tissue", "cartilage", "blood", "blood clotting",
            "prothrombin", "thrombin", "fibrinogen", "mast cell", "liver", "muscle",
            "bacteria", "yeast", "fungi", "plant", "animal", "insect", "crustacean",
            "wood", "cotton", "biosphere", "organic carbon", "energy", "metabolism",
            "starch", "glycogen", "cellulose", "chitin", "inulin", "dextran",
            "hyaluronic acid", "chondroitin sulfate", "heparin", "lignin", "pectin",
            "hemicellulose"],
  nodeTitle_en: "Polysaccharides",
  nodeTitle_cn: "多糖",
  title_en: "Almost every polysaccharide is made of the same sugar, so everything — fuel, fibre, and the gel that fills the space between cells — is decided by how that sugar is joined",
  title_cn: "几乎所有多糖都是同一种糖做的，所以一切——燃料、纤维、以及填满细胞间隙的那团凝胶——都由这个糖「怎么连」来决定",
  steps: [

    /* ---------------------------------------------------------------- 7-4 ---- */
    {
      en: "Most of the carbohydrate in nature occurs as polysaccharide of high relative molecular mass, a polysaccharide being a chain of many monosaccharide units joined end to end. Complete hydrolysis of one, catalysed either by acid or by an enzyme, gives back monosaccharides or their simple derivatives. **Polysaccharides are also called glycans, and hydrolysing almost any of them returns D-glucose: the monomer is nearly always the same one, and only the joining differs.**",
      cn: "自然界中大多数糖类都以相对分子质量很高的多糖形式存在；多糖就是许多单糖单元首尾相连成的长链。把一个多糖完全水解——酸催化或酶催化都行——得到的是单糖或它们的简单衍生物。**多糖也叫聚糖（glykan）；而水解几乎任何一个多糖，回来的都是 D-葡萄糖：单体几乎总是同一个，不同的只是连接方式。**",
      src: "B §7.4, p.155"
    },
    {
      link_en: "so which units actually turn up when a polysaccharide is taken apart?",
      link_cn: "那么，把多糖拆开时，实际会出现哪些单元？",
      en: "D-glucose is by far the commonest monosaccharide unit of polysaccharides, and the other units that occur commonly in nature are D-mannose, D- and L-galactose, D-xylose and D-arabinose. **Hydrolysis also returns derivatives rather than plain sugars: the amino sugars D-glucosamine and D-galactosamine, and the uronic acids.** A uronic acid is a sugar oxidised at the far end of its chain, so that it carries a carboxyl group there.",
      cn: "D-葡萄糖是迄今为止多糖中最常见的单糖单位，自然界中常见的其他单位是 D-甘露糖、D- 与 L-半乳糖、D-木糖和 D-阿拉伯糖。**水解还会放出并非普通糖的衍生物：氨基糖 D-葡萄糖胺与 D-半乳糖胺，以及糖醛酸——也就是链另一端被氧化成羧基的糖。**",
      src: "B §7.4, p.155"
    },
    {
      link_en: "three variables, and the first of them gives the whole classification",
      link_cn: "三个变量，而第一个就给出了全部分类",
      en: "Polysaccharides differ from one another in three things only: which monosaccharide residue they are built of, how long the chain is, and how much that chain branches. **A homoglycan contains only one kind of monosaccharide unit and is usually named after it — a glucan is built of D-glucose and a mannan of D-mannose — while a heteroglycan contains two or more kinds.** A second and independent division sorts polysaccharides by what they do in the organism: storage or structural. Both divisions are used below, storage first.",
      cn: "多糖彼此之间只在三件事上不同：由哪种单糖残基构成、链有多长、分支有多密。**只含一种单糖单位的叫同多糖，而且通常直接按那种糖命名——由 D-葡萄糖构成的叫葡聚糖，由 D-甘露糖构成的叫甘露聚糖；含两种或以上单糖单位的则叫杂多糖。**另有一种彼此独立的分法，按它在生物体内干什么来分：储存性与结构性。下面两种分法都要用到，先从储存说起。",
      src: "B §7.4, p.155"
    },

    /* ------------------------------------------------------------ 7-4-1-1 ---- */
    {
      link_en: "the plant's store is one substance with two different glucans inside it",
      link_cn: "植物的储备是一种物质，里面装着两种不同的葡聚糖",
      en: "Starch is the storage polysaccharide of plants, built of D-glucose units, and it contains two types of glucan. The first is amylose: long unbranched chains in which the D-glucose residues are joined α(1→4), polydisperse in size, running from a relative molecular mass of a few thousand up to 500,000. **In water amylose forms hydrated micelles, and inside such a micelle the polysaccharide chain is coiled into a helix; those micelles are what gives the blue colour with iodine.**",
      cn: "淀粉是植物的储存多糖，由 D-葡萄糖单位构成，其中含两类葡聚糖。第一类是直链淀粉：D-葡萄糖残基以 α(1→4) 连接的长而不分支的链，链长多分散，相对分子质量从几千一直到 500 000。**直链淀粉在水中形成水合胶束，多糖链在胶束内部盘绕成螺旋；遇碘显蓝色的，正是这些胶束。**",
      src: "B §7.4.1, p.156"
    },
    {
      link_en: "the second glucan differs in one feature and the iodine test reads it off",
      link_cn: "第二类葡聚糖只差一个特征，而碘试验把它直接读了出来",
      en: "The second glucan of starch is amylopectin, and its molecule is branched: an α(1→4) main chain carries side chains attached by α(1→6) bonds, the same arrangement glycogen uses. The side branches are approximately 12 D-glucose residues long, branching occurs roughly at every 12th D-glucose residue, and the relative molecular mass reaches up to 1,000,000. **Amylopectin forms micelles in solution as well, and they give a red-violet colour with iodine where amylose gives blue, so the iodine colour reads out the branching.**",
      cn: "淀粉里的第二类葡聚糖是支链淀粉，它的分子是有分支的：α(1→4) 的主链上以 α(1→6) 键挂着侧链，与糖原的连接方式相同。侧支约 12 个 D-葡萄糖残基长，大约每 12 个 D-葡萄糖残基出现一个分支点，相对分子质量可达 1 000 000。**支链淀粉在溶液中同样形成胶束，但它遇碘显红紫色，而直链淀粉显蓝色——所以碘的颜色直接读出了分支程度。**",
      src: "B §7.4.1, p.156"
    },
    {
      link_en: "the animal's store is the same architecture with one number changed",
      link_cn: "动物的储备是同一套架构，只改了一个数字",
      recall_en: "amylopectin one step up: α(1→4) chain, α(1→6) branch points",
      recall_cn: "就是上一步的支链淀粉：α(1→4) 的链，α(1→6) 的分支点",
      en: "Glycogen is the storage polysaccharide of animals, stored chiefly in the liver and in muscle, and its structure resembles that of amylopectin. **Glycogen is much more branched — a branch point at roughly every 8th to 10th D-glucose residue against amylopectin's every 12th — and every branch is one more free end to mobilise the store from.** Its relative molecular mass is very high — about 1,000,000 for muscle glycogen and about 16 million for liver glycogen — and glycogen molecules nonetheless stay water-soluble, taking the shape of a flattened ellipsoid.",
      cn: "糖原是动物的储存多糖，主要储存在肝脏和肌肉里，结构上与支链淀粉相似。**糖原的分支密得多：大约每 8 到 10 个 D-葡萄糖残基就有一个分支点，而支链淀粉是每 12 个——每多一个分支，就多一个可以动员这份储备的游离末端。**它的相对分子质量很高：肌糖原约 1 000 000，肝糖原约 1600 万；即便如此糖原仍然可溶于水，分子呈扁平的椭球形。",
      src: "B §7.4.1, p.156",
      see: [
        { id: "7-12-1", en: "how glycogen is actually built and broken down", cn: "糖原究竟怎样被合成和分解" }
      ]
    },
    {
      link_en: "three more storage polysaccharides, and two of them are not glucose at all",
      link_cn: "还有三种储存多糖，其中两种根本不是葡萄糖做的",
      en: "Dextrans are the storage polysaccharides of yeasts and bacteria, likewise built of D-glucose units, but joined predominantly by α(1→6) bonds; they can be exceptionally branched, with branch points at (1→2), (1→3) or (1→4) according to the organism they come from. **Inulin is a plant polysaccharide built of D-fructose units joined β(2→1), and its chain is terminated by a D-glucose residue, so it ends in what is in effect a sucrose unit.** Mannans are homopolysaccharides built of D-mannose units, and they are found in yeasts, in bacteria and in plants.",
      cn: "右旋糖酐是酵母和细菌的储存多糖，同样由 D-葡萄糖单位构成，但主要以 α(1→6) 键连接；它们可以异常地多分支，分支点位于 (1→2)、(1→3) 或 (1→4)，视来源生物而定。**菊粉是一种植物多糖，由 D-果糖单位以 β(2→1) 连接而成，链末端是一个 D-葡萄糖残基，所以它实际上是以一个蔗糖单位收尾的。**甘露聚糖是由 D-甘露糖单位构成的同多糖，见于酵母、细菌和植物。",
      src: "B §7.4.1, pp.156-157"
    },

    /* ------------------------------------------------------------ 7-4-1-2 ---- */
    {
      link_en: "now the structural half of the same classification, and it turns on one bond",
      link_cn: "现在换到同一套分类的结构那一半，而它取决于一条键",
      recall_en: "the same D-glucose as amylose, joined β instead of α",
      recall_cn: "还是直链淀粉里那个 D-葡萄糖，只是连接方式从 α 换成了 β",
      en: "Cellulose makes up approximately 50 % of the total organic carbon in the biosphere: wood is 50 % cellulose, and cotton fibre is nearly pure cellulose. It is built of unbranched chains of D-glucose units joined by β(1→4) glycosidic bonds, and this β arrangement, unlike an α one, allows the formation of very long and very straight chains. **Each successive D-glucose residue is rotated 180° relative to the one before it, and each pyranose ring oxygen hydrogen-bonds to the hydroxyl at C-3 of the following residue.**",
      cn: "纤维素约占生物圈全部有机碳的 50 %：木材的 50 % 是纤维素，棉纤维几乎是纯纤维素。它由 D-葡萄糖单位经 β(1→4) 糖苷键连成的不分支长链构成，而这种 β 排列不同于 α 排列，能形成非常长、非常平直的链。**每一个后续的 D-葡萄糖残基都相对前一个旋转 180°，而每一个吡喃环上的氧都与下一个残基 C-3 位的羟基形成氢键。**",
      src: "B §7.4.1, p.157"
    },
    {
      link_en: "a straight chain can be packed, and a packed chain has to be tied to its neighbours",
      link_cn: "平直的链才能被码放整齐，而码放整齐的链需要被绑在一起",
      en: "Straight chains allow fibril formation, and cellulose fibrils are firmly bound together by other high-molecular substances: hemicelluloses, which are predominantly D-xylans, chains of D-xylose units joined β(1→4); pectins, which are polymers containing D-galacturonic acid; and a protein called extension. Wood contains, alongside these substances, one further macromolecular substance. **That substance is lignin, and lignin is made of polymerised aromatic alcohols, so lignin is not itself a carbohydrate even though it sits among the substances that hold cellulose together.** Cellulose is the main structural component of plant cell walls, and it is this whole arrangement — straight chains, fibrils, cross-linking substances — that lets the polysaccharide fulfil that supportive function.",
      cn: "平直的链使微纤维的形成成为可能，而纤维素微纤维之间由另外几种高分子物质牢牢绑在一起：半纤维素，主要是 D-木聚糖，也就是 D-木糖以 β(1→4) 连成的链；果胶，含 D-半乳糖醛酸的聚合物；以及一种叫 extension 的蛋白。木材里除这些之外还有一种大分子物质。**这种物质是木质素；木质素由聚合的芳香醇构成，所以尽管它就待在那些把纤维素绑在一起的物质中间，它本身并不是糖类。**纤维素是植物细胞壁的主要结构成分，而正是这一整套安排——平直的链、微纤维、交联的辅助物质——让一个多糖能担起支撑的功能。",
      src: "B §7.4.1, p.157"
    },
    {
      link_en: "and the same fibre chemistry, built from an amino sugar instead",
      link_cn: "同一套纤维化学，只是改用氨基糖来搭",
      en: "Chitin is a structural polysaccharide similar to cellulose, built of N-acetyl-D-glucosamine units joined by β(1→4) bonds. **Its repeating unit is accordingly the disaccharide chitobiose, and chitin occurs in fungi and forms the base of the crustacean shell and of the insect exoskeleton, the cuticle.**",
      cn: "几丁质是一种与纤维素类似的结构多糖，由 N-乙酰-D-葡萄糖胺单位以 β(1→4) 键连接而成。**因此它的重复单位是二糖几丁二糖；几丁质存在于真菌中，也构成甲壳类外壳和昆虫外骨骼（角质层）的基础。**",
      src: "B §7.4.1, p.157"
    },

    /* -------------------------------------------------------------- 7-4-2 ---- */
    {
      link_en: "everything so far was built from plain sugars. The last class is built from the derivatives",
      link_cn: "以上全是用普通的糖搭的。最后一类是用衍生物搭的",
      recall_en: "the amino sugars and uronic acids named in step 2, now as building units in their own right",
      recall_cn: "第 2 步点到的氨基糖和糖醛酸，这里成了独当一面的建筑单元",
      en: "The basic components of some polysaccharides are amino sugars or uronic acids, and most such substances form the ground substance of connective tissue — the material occupying the space between its cells. That intercellular ground substance is composed of fibrous proteins, of glycoproteins, and of proteoglycans. **A proteoglycan is a protein with heteropolysaccharide molecules covalently bound to it, and those heteropolysaccharides are the glycosaminoglycans, formerly called acid mucopolysaccharides.**",
      cn: "有些多糖的基本组分是氨基糖或糖醛酸，而这类物质大多构成结缔组织的基质——也就是填在结缔组织细胞之间的那些材料。这层细胞间基质由纤维状蛋白、糖蛋白和蛋白聚糖组成。**蛋白聚糖就是一个蛋白，上面共价连着若干杂多糖分子；而这些杂多糖就是糖胺聚糖，旧称酸性粘多糖。**",
      src: "B §7.4.2, pp.157-158"
    },
    {
      link_en: "and one repeating unit describes all of them",
      link_cn: "而所有这些糖胺聚糖，用一个重复单位就能描述完",
      en: "A glycosaminoglycan molecule is built of disaccharide units in which one uronic-acid residue is bonded glycosidically to an acetylated amino sugar, predominantly at position 3, and those disaccharide units are then joined to each other by a 1→4 bond into a linear macromolecule. **The sugar hydroxyls, or the amino group of the amino sugar, may be esterified with sulfuric acid, which makes these substances very acidic: a chain of fixed negative charge, and it holds water.** Every glycosaminoglycan derives either from hyaluronic acid or from the chondroitin-sulfate acids, and those are the next two steps.",
      cn: "一个糖胺聚糖分子由二糖单位构成：其中一个糖醛酸残基以糖苷键连到一个乙酰化的氨基糖上，主要连在 3 号位；这些二糖单位再彼此以 1→4 键相连，成为线性大分子。**糖残基的羟基、或者氨基糖的氨基，都可以被硫酸酯化，这使这类物质酸性很强：一条带着固定负电荷的链，而它抓得住水。**每一个糖胺聚糖都来自透明质酸或硫酸软骨素类酸，接下来两步正是这两者。",
      src: "B §7.4.2, pp.157-158"
    },
    {
      en: "Hyaluronic acid is composed of D-glucuronic acid and N-acetyl-D-glucosamine. **A smaller amount of it is a component of every type of connective tissue, and a larger amount occurs in three places: the umbilical cord, the vitreous humour, and synovial fluid.** The vitreous humour is the jelly filling the eyeball and synovial fluid is the fluid inside a joint, so both larger deposits sit where a tissue has to stay soft and wet.",
      cn: "透明质酸由 D-葡萄糖醛酸和 N-乙酰-D-葡萄糖胺构成。**少量的它是每一类结缔组织都有的组分，而大量的它只出现在三个地方：脐带、玻璃体和滑液。**玻璃体是填满眼球的那团胶冻，滑液是关节腔里的液体——两处大量沉积，都落在「组织必须保持柔软而湿润」的地方。",
      src: "B §7.4.2, p.158"
    },
    {
      en: "Chondroitin sulfates participate in building connective tissues together with hyaluronic acid. **Chondroitin-6-sulfate, also called chondroitin C, is composed of D-glucuronic acid and N-acetyl-D-galactosamine, and carries a sulfuric-acid residue bonded to the hydroxyl group at position C-6.**",
      cn: "硫酸软骨素与透明质酸一起参与结缔组织的构建。**6-硫酸软骨素，又称软骨素 C，由 D-葡萄糖醛酸和 N-乙酰-D-半乳糖胺构成，并在 C-6 位的羟基上连着一个硫酸残基。**",
      src: "B §7.4.2, p.158"
    },
    {
      link_en: "and one substance built the same way that does a completely different job",
      link_cn: "最后一个，搭法相同，干的活却完全不同",
      en: "Heparin has a structure similar to that of the glycosaminoglycans while not being a typical component of connective tissue. It is composed of D-glucosamine-N-sulfate residues together with D-glucuronic and L-iduronic acids and their sulfate esters: its basic disaccharide unit is either D-glucurono-2-sulfate or L-idurono-2-sulfate, bonded α(1→4) to N-sulfo-D-glucosamine-6-sulfate. Heparin occurs in larger amount in mast cells, where it is bound to protein, and it has been found as well in the extracellular space of a whole range of tissues. **Heparin prevents blood from clotting, and it does so twice over: it inhibits the conversion of prothrombin to thrombin, and it inhibits the action of thrombin on fibrinogen.**",
      cn: "肝素的结构与糖胺聚糖相似，但它并不是结缔组织的典型组分。它由 N-硫酸-D-葡萄糖胺残基，加上 D-葡萄糖醛酸、L-艾杜糖醛酸及其硫酸酯构成：基本二糖单位是 D-葡萄糖醛酸-2-硫酸酯或 L-艾杜糖醛酸-2-硫酸酯，以 α(1→4) 键连到 N-硫酸-D-葡萄糖胺-6-硫酸酯上。肝素大量存在于肥大细胞中，在那里与蛋白结合；在多种组织的细胞外间隙里也发现了它。**肝素阻止血液凝固，而且是从两处下手：它抑制凝血酶原向凝血酶的转化，也抑制凝血酶对纤维蛋白原的作用。**",
      src: "B §7.4.2, p.158"
    }
  ],
  terms: [
    { en: "glycan", cn: "聚糖（多糖）",
      def_en: "Another name for a polysaccharide: a chain of many monosaccharide units of high relative molecular mass, giving monosaccharides or their derivatives on complete hydrolysis. Members differ in the residue they are built of, in chain length, and in degree of branching.",
      def_cn: "多糖的另一个名字：由许多单糖单位构成、相对分子质量很高的链，完全水解后给出单糖或其衍生物。彼此的差别只在于由哪种残基构成、链有多长、分支有多密。" },
    { en: "homoglycan / heteroglycan", cn: "同多糖／杂多糖",
      def_en: "The structural division of polysaccharides: one kind of monosaccharide unit against two or more. The first group is usually named after its residue — glucan from D-glucose, mannan from D-mannose — and the second is where amino sugars and uronic acids appear.",
      def_cn: "多糖的结构分类：只含一种单糖单位，还是含两种以上。前者通常按残基命名——D-葡萄糖给出葡聚糖，D-甘露糖给出甘露聚糖；氨基糖和糖醛酸则出现在后者里。" },
    { en: "amylose", cn: "直链淀粉",
      def_en: "The unbranched component of starch, α(1→4)-linked D-glucose, of relative molecular mass from a few thousand to 500,000. In water it forms hydrated micelles in which the chain coils into a helix, and those give the blue colour with iodine.",
      def_cn: "淀粉中不分支的那一部分，α(1→4) 连接的 D-葡萄糖，相对分子质量从几千到 500 000。它在水中形成水合胶束，链在胶束内盘成螺旋，遇碘显蓝色的就是它。" },
    { en: "amylopectin", cn: "支链淀粉",
      def_en: "The branched component of starch: an α(1→4) main chain with α(1→6) side branches about 12 residues long, one branch roughly every 12th residue, relative molecular mass up to 1,000,000. Its micelles give a red-violet colour with iodine.",
      def_cn: "淀粉中有分支的那一部分：α(1→4) 主链上挂着 α(1→6) 侧链，侧支约 12 个残基长，约每 12 个残基一个分支点，相对分子质量可达 1 000 000。它的胶束遇碘显红紫色。" },
    { en: "dextran", cn: "右旋糖酐",
      def_en: "The storage glucan of yeasts and bacteria: D-glucose joined predominantly α(1→6), capable of exceptional branching, with branch points at (1→2), (1→3) or (1→4) according to the producing organism.",
      def_cn: "酵母和细菌的储存葡聚糖：D-葡萄糖主要以 α(1→6) 连接，可以异常多分支，分支点在 (1→2)、(1→3) 或 (1→4)，视产生它的生物而定。" },
    { en: "inulin", cn: "菊粉",
      def_en: "A plant polysaccharide of D-fructose units joined β(2→1), with the chain terminated by a D-glucose residue, that is by what amounts to a sucrose unit. It is the polysaccharide in which fructose takes the five-membered furanose ring.",
      def_cn: "一种植物多糖，由 D-果糖单位以 β(2→1) 连接，链末端是一个 D-葡萄糖残基，也就是以一个蔗糖单位收尾。果糖在它里面取的是五元的呋喃糖环。" },
    { en: "chitobiose", cn: "几丁二糖",
      def_en: "The repeating disaccharide of chitin: two N-acetyl-D-glucosamine units joined β(1→4). It stands to chitin exactly as cellobiose stands to cellulose.",
      def_cn: "几丁质的重复二糖单位：两个 N-乙酰-D-葡萄糖胺以 β(1→4) 相连。它之于几丁质，正如纤维二糖之于纤维素。" },
    { en: "glycosaminoglycan", cn: "糖胺聚糖",
      def_en: "A heteropolysaccharide of repeating disaccharide units, each a uronic acid bonded glycosidically to an acetylated amino sugar at position 3, the units joined 1→4. Sulfate esterification of the hydroxyls or of the amino group makes the chain strongly acidic. Formerly called an acid mucopolysaccharide.",
      def_cn: "由重复二糖单位构成的杂多糖：每个二糖是一个糖醛酸以糖苷键连到乙酰化氨基糖的 3 号位，单位之间以 1→4 相连。羟基或氨基被硫酸酯化后，整条链酸性很强。旧称酸性粘多糖。" },
    { en: "proteoglycan", cn: "蛋白聚糖",
      def_en: "A protein carrying covalently bound glycosaminoglycan chains, and one of the three components of the intercellular ground substance of connective tissue, alongside fibrous proteins and glycoproteins.",
      def_cn: "共价连着糖胺聚糖链的蛋白，是结缔组织细胞间基质的三种组分之一，另外两种是纤维状蛋白和糖蛋白。" },
    { en: "extension protein", cn: "extension 蛋白",
      def_en: "One of the three high-molecular substances binding cellulose fibrils together in wood, the other two being the hemicelluloses and the pectins. It is a protein, not a carbohydrate.",
      def_cn: "木材中把纤维素微纤维绑在一起的三种高分子物质之一，另外两种是半纤维素和果胶。它是蛋白，不是糖类。" },
    { en: "lignin", cn: "木质素",
      def_en: "The wood macromolecule made of polymerised aromatic alcohols. It occurs alongside the substances that bind cellulose fibrils and is not a carbohydrate, which is the one thing worth carrying about it from a carbohydrate chapter.",
      def_cn: "木材里由聚合芳香醇构成的大分子。它与那些绑住纤维素微纤维的物质共处，但并不是糖类——这正是从糖类这一章里关于它唯一值得带走的一条。" }
  ]
};

/* ------------------------------------------------- 糖缀合物 (7-5, L-7-4-1) ----
   Node → step map:
     7-5       1-3        L-7-4-1   1, 4-15
   The Lehninger member node's own spine is the backbone from step 4 on; the other
   member node supplies how a glycan is attached to a protein in the first place,
   which the Lehninger chain never states, so that goes first. */
window.BIOLITE_SPINE["key:glycoconjugates"] = {
  assumed: ["cell", "protein", "amino acid", "serine", "threonine", "asparagine",
            "hydroxyl", "amide", "nitrogen", "oxygen", "sugar", "carbohydrate",
            "monosaccharide", "disaccharide", "oligosaccharide", "polysaccharide",
            "glucose", "mannose", "galactose", "fucose", "amino sugar",
            "N-acetylglucosamine", "N-acetylgalactosamine", "sialic acid",
            "neuraminic acid", "glycosidic bond", "O-glycosidic bond",
            "N-glycosidic bond", "alpha configuration", "beta configuration",
            "sulfate", "phosphate", "peptide", "nucleotide", "nucleic acid",
            "base", "DNA", "RNA", "gene", "enzyme", "hormone", "immunoglobulin",
            "antibody", "membrane", "plasma membrane", "membrane protein",
            "connective tissue", "blood", "blood plasma", "blood group", "virus",
            "influenza", "hydrogen bond", "hydrophobic interaction", "affinity",
            "Kd", "Golgi complex", "lysosome", "organelle", "endocytosis",
            "X-ray crystallography", "manganese", "calcium", "Trp", "indole ring",
            "Arg", "His", "Ser", "Asn", "copper", "tumour", "metastasis",
            "inflammation", "malaria", "glycoprotein", "glycolipid", "lectin",
            "integrin", "erythrocyte", "hepatocyte", "pituitary gland"],
  nodeTitle_en: "Oligosaccharides bound to proteins",
  nodeTitle_cn: "结合于蛋白质的寡糖",
  title_en: "A sugar chain on a protein is an address rather than a fuel: how it is fastened on, why a branched chain holds more information than a peptide of the same length, and what reads it",
  title_cn: "蛋白质上的糖链是地址而不是燃料：它怎样被拴上去、为什么同样长度的分支糖链比肽携带更多信息，以及谁在读它",
  steps: [

    /* ---------------------------------------------------------------- 7-5 ---- */
    {
      en: "A monosaccharide is a single sugar unit such as glucose or mannose; a short chain of several of them joined end to end is an oligosaccharide, also called a glycan; a protein carrying a glycan is a glycoprotein. Glycoproteins are found wherever something has to be recognised: among the enzymes, among the hormones, among the immunoglobulins, among the high-molecular components of connective tissue, and among the integral membrane proteins. Glycobiology is the study of what those attached chains are and what they do, and its claim is that cells use specific oligosaccharides to encode information about four things: where inside the cell a newly made protein should go, how two cells recognise each other, how a cell differentiates and a tissue develops, and what a signal passing between cells says. **One chemical language serves all four — a protein finding its compartment, two cells finding each other, a tissue building itself, and a message crossing from one cell to the next.**",
      cn: "单糖是一个单独的糖单元，比如葡萄糖或甘露糖；几个单糖首尾相连成的短链叫寡糖，也叫聚糖（glycan）；身上挂着一条聚糖的蛋白叫糖蛋白。糖蛋白出现在一切需要「被认出来」的地方：一些酶、一些激素、免疫球蛋白、结缔组织的高分子组分，以及整合膜蛋白。糖生物学（glycobiology）研究的就是这些挂上去的糖链是什么、又在干什么，而它的主张是：细胞用特定的寡糖来编码四类信息——新造出来的蛋白该送到细胞内的哪个位置、两个细胞如何互相识别、一个细胞如何分化并使组织发育，以及细胞之间传递的信号说了什么。**同一套化学语言同时服务于这四件事——一个蛋白找到自己的隔间、两个细胞找到彼此、一块组织把自己建起来，以及一条消息从一个细胞传到另一个细胞。**",
      src: "A p.254 · B §7.5, p.158"
    },
    {
      link_en: "before any of that, the chain has to be fastened to the protein, and there are exactly two fastenings",
      link_cn: "在讲这些之前，糖链得先被拴在蛋白上，而拴法恰好只有两种",
      en: "An oligosaccharide chain is bound to a protein in one of two ways, each named after the atom of the amino acid residue that the sugar bonds to. **An O-glycosidic bond joins the chain to the hydroxyl group of a serine or a threonine residue; an N-glycosidic bond joins it to the amide nitrogen of an asparagine residue.** The two worked single-residue examples are N-acetyl-D-galactosamine, abbreviated GalNAc, bound O-glycosidically to a serine, and N-acetyl-D-glucosamine, abbreviated GlcNAc, bound N-glycosidically to an asparagine.",
      cn: "寡糖链与蛋白质的结合方式只有两种，各自按糖所连接的那个氨基酸残基上的原子命名。**O-糖苷键把糖链连在丝氨酸或苏氨酸残基的羟基上；N-糖苷键则把它连在天冬酰胺残基的酰胺氮上。**书上给的两个单残基实例是：N-乙酰-D-半乳糖胺（缩写 GalNAc）以 O-糖苷键连在丝氨酸上，N-乙酰-D-葡萄糖胺（缩写 GlcNAc）以 N-糖苷键连在天冬酰胺上。",
      src: "B §7.5, pp.158-159"
    },
    {
      link_en: "and every chain fastened the second way starts from the same five sugars",
      link_cn: "而所有用第二种方式拴上去的糖链，都从同样的五个糖开始",
      en: "Oligosaccharides bound N-glycosidically all share one starting piece. **That shared piece is a pentasaccharide core: three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues, and all the diversity comes from what is attached to it afterwards.** Two N-linked types are drawn out: a mannose type, several branching mannose residues sitting over the GlcNAc-GlcNAc-Asn core, and a complex type, two NeuAc-Gal-GlcNAc branches over that same core together with a fucose residue on the core GlcNAc nearest the asparagine. The O-linked example runs NeuAc-Gal-GalNAc onto a serine, with a NeuAc branch of its own. Six sugars carry standard abbreviations in these trees: β-L-fucose is Fuc, β-D-galactose is Gal, N-acetyl-β-D-galactosamine is GalNAc, N-acetyl-β-D-glucosamine is GlcNAc, β-D-mannose is Man, and N-acetylneuraminic acid — sialic acid — is NeuAc, the one drawn with an extra glycerol-like three-carbon tail on its ring.",
      cn: "以 N-糖苷键结合的寡糖，起手的那一段都是同一个。**这段共同的起手就是五糖核心：三个 D-甘露糖基残基加两个 N-乙酰-D-葡萄糖胺基残基；糖蛋白寡糖的巨大多样性，来自后续挂到这个核心上的东西。**书上画了两种 N-连接类型：甘露糖型，若干分支的甘露糖残基坐在 GlcNAc-GlcNAc-Asn 核心之上；复杂型，同一个核心之上是两条 NeuAc-Gal-GlcNAc 分支，外加一个连在最靠近天冬酰胺的核心 GlcNAc 上的岩藻糖。O-连接的例子则是 NeuAc-Gal-GalNAc 接在丝氨酸上，另带一个 NeuAc 分支。这些树状图里有六个糖用标准缩写：β-L-岩藻糖是 Fuc，β-D-半乳糖是 Gal，N-乙酰-β-D-半乳糖胺是 GalNAc，N-乙酰-β-D-葡萄糖胺是 GlcNAc，β-D-甘露糖是 Man，而 N-乙酰神经氨酸（唾液酸）是 NeuAc——环上多挂一条甘油状三碳尾巴的就是它。",
      src: "B §7.5, pp.158-160"
    },

    /* ------------------------------------------------------------ L-7-4-1 ---- */
    {
      link_en: "why a sugar, of all molecules, is the right thing to write information in",
      link_cn: "在所有分子里，为什么偏偏是糖适合用来写信息",
      en: "A peptide is a string of amino acids and a nucleic acid is a string of nucleotides. An oligosaccharide is a tree: branched structures, which do not occur in nucleic acids or proteins, are common in oligosaccharides — a single real glycoprotein glycan can hold 14 monosaccharide residues of four different kinds, linked (1→2), (1→3), (1→4), (1→6), (2→3) and (2→6), some in the alpha and some in the beta configuration. Now count. From 20 available monosaccharide subunits, many billions of different hexasaccharides are possible, against 6.4 x 10^7 hexapeptides from 20 amino acids and only 4,096 hexanucleotides from four bases, and allowing one or more residues to be sulfated raises the sugar figure by a further two orders of magnitude. Two honest limits travel with that arithmetic: only a subset of those combinations is ever made, because the biosynthetic enzymes and the supply of precursors restrict it — and even after that cut, the information packed into a glycan far surpasses what a nucleic acid of the same modest size can hold. So **each oligosaccharide presents a unique three-dimensional face: a word in the sugar code, readable by the proteins that meet it.**",
      cn: "一条肽是氨基酸串成的线，一条核酸是核苷酸串成的线。而寡糖是一棵树：分支结构在核酸和蛋白质里都不出现，在寡糖里却很常见——一条真实的糖蛋白聚糖可以含 14 个单糖残基、分属四种不同的糖，连接方式有 (1→2)、(1→3)、(1→4)、(1→6)、(2→3) 和 (2→6)，有的是 α 构型、有的是 β 构型。现在来数一数。用 20 种可用的单糖单元，可以组出数十亿种不同的六糖；相比之下，20 种氨基酸只给出 6.4 x 10^7 种六肽，四种碱基只给出 4,096 种六核苷酸；再允许其中一个或多个残基被硫酸化，糖的数目还要再抬高两个数量级。这笔算术要带着两条诚实的限定一起走：实际造出来的只是其中一小部分，因为生物合成酶和前体的供应把它限制住了——而即使砍掉这一大截，一条聚糖里装下的信息量仍然远超同样大小的核酸。所以**每一条寡糖都呈现出一张独一无二的三维「面孔」：糖密码里的一个词，供遇到它的蛋白质读取。**",
      src: "A p.254"
    },
    {
      link_en: "a word is only a word if something reads it",
      link_cn: "一个词得有人读，才算是一个词",
      en: "**A lectin is a protein that binds carbohydrates with high specificity and with moderate to high affinity.** Lectins are the readers of the sugar code, and they are not a specialised curiosity: they work in cell-cell recognition, in signalling, in adhesion, and in directing newly synthesised proteins to the right compartment inside the cell. Plant lectins are abundant in seeds, where they probably serve as deterrents to insects and other predators — which is why they are cheap to obtain in bulk, and incidentally why some raw legumes are toxic. A purified plant lectin immobilised on a column sorts proteins by their sugar rather than by their charge, size or sequence, and that is the only routine laboratory method that reads the glycan directly.",
      cn: "**凝集素（lectin）是一类以高特异性、中等到高亲和力结合糖的蛋白质，也就是糖密码的读者。**而且它们绝不是某个角落里的稀奇玩意：它们参与细胞间识别、信号传导、黏附，以及把新合成的蛋白送往细胞内正确的隔间。植物凝集素在种子里含量很高，在那里大概是用来吓退昆虫和其他捕食者的——这也是它们能被大量廉价获得的原因，顺带解释了为什么有些生豆子有毒。把纯化的植物凝集素固定在层析柱上，就得到一台按「糖」来分选蛋白质的机器，而不是按电荷、大小或序列——这是唯一一种直接读取聚糖的常规实验方法。",
      src: "A p.254"
    },
    {
      link_en: "so what does a reader actually decide? Start with how long a protein is allowed to live",
      link_cn: "那读者究竟决定什么？先从「一个蛋白被允许活多久」说起",
      en: "**Neu5Ac, a sialic acid, sits at the ends of the oligosaccharide chains of many blood plasma glycoproteins, and while it is there it protects those proteins from uptake and degradation in the liver.** Strip it off and the galactose residue underneath is exposed. A hepatocyte — a liver cell — carries in its plasma membrane lectins called asialoglycoprotein receptors, asialo- meaning without sialic acid, and they bind precisely those unprotected galactose residues; binding triggers endocytosis, and the glycoprotein is swallowed and destroyed. Ceruloplasmin, a copper-carrying serum glycoprotein with several chains ending in Neu5Ac, is the worked case. A terminal sialic acid is a valid ticket, and losing it is a death sentence.",
      cn: "**Neu5Ac 是一种唾液酸，它坐在许多血浆糖蛋白的寡糖链末端；只要它还在那儿，这些蛋白就不会被肝脏摄取和降解。**把它剥掉，底下的半乳糖残基就暴露出来。肝细胞（hepatocyte）的质膜上带着一类凝集素，叫去唾液酸糖蛋白受体（asialoglycoprotein receptor），asialo- 的意思就是「没有唾液酸的」，它们结合的正是这些失去保护的半乳糖残基；一结合就触发内吞，糖蛋白被吞进去销毁。铜蓝蛋白（ceruloplasmin）是一个含铜的血清糖蛋白，好几条糖链都以 Neu5Ac 结尾，正是书上举的实例。末端唾液酸是一张有效车票，丢了它就是死刑判决。",
      src: "A p.254",
      openQuestion_en: "What actually strips the sialic acid off a serum glycoprotein in the body is unclear — it may be a sialidase made by an invading organism, or a steady slow release by extracellular enzymes. The clock is well described at the reading end and undetermined at the winding end.",
      openQuestion_cn: "在体内究竟是什么把唾液酸从血清糖蛋白上摘下来的，目前并不清楚——可能是入侵微生物产生的 sialidase，也可能是胞外酶缓慢而持续地把它释放掉。这只钟的「读数」一端描述得很清楚，「上发条」的一端还没定论。"
    },
    {
      link_en: "the same clock, run on a whole cell instead of on one protein",
      link_cn: "同一只钟，这回走在一整个细胞上，而不是一个蛋白上",
      recall_en: "the terminal Neu5Ac of the step above, now protecting an entire red cell",
      recall_cn: "还是上一步那个末端 Neu5Ac，只是这次它保护的是一整个红细胞",
      en: "A newly synthesised erythrocyte — a red blood cell — carries several membrane glycoproteins whose oligosaccharide chains end in Neu5Ac, and a similar mechanism is apparently what removes old erythrocytes from the mammalian bloodstream. The demonstration is a single subtraction: withdraw blood from an experimental animal, treat it in vitro with neuraminidase — an enzyme, also called a sialidase, that clips terminal sialic acid residues off — and put the blood back. The treated erythrocytes disappear from the circulation within a few hours, while erythrocytes withdrawn and reintroduced without the neuraminidase treatment go on circulating for days. **Hours against days, with one enzymatic treatment as the only difference between them.**",
      cn: "新合成的红细胞（erythrocyte）膜上有好几种糖蛋白，它们的寡糖链同样以 Neu5Ac 结尾，而把衰老红细胞从哺乳动物血流中清除掉的，看起来就是同一套机制。证明它的实验只有一处差别：从实验动物体内抽血，在体外用神经氨酸酶（neuraminidase）处理——这是一种酶，也叫 sialidase，专门把末端唾液酸残基剪掉——然后把血输回去。经过处理的红细胞在几小时内就从循环中消失，而同样抽出、同样输回、只是没做酶处理的红细胞，则继续循环好几天。**几小时对好几天：两者之间唯一的差别，就是有没有做那一次把末端唾液酸剪掉的酶处理而已。**",
      src: "A p.254–255"
    },
    {
      link_en: "and the same clock again, this time setting the shape of a hormone curve",
      link_cn: "还是同一只钟，这次它决定了一条激素曲线的形状",
      en: "Luteinizing hormone and thyrotropin are polypeptide hormones made in the pituitary gland, and both carry N-linked oligosaccharides ending in the disaccharide GalNAc4S(β1→4)GlcNAc — GalNAc4S being N-acetylgalactosamine sulfated on the -OH at C-4. A lectin receptor on hepatocytes recognises that particular disaccharide, and the receptor-hormone interaction mediates uptake and destruction of the hormone, lowering its concentration in the blood. So the blood level of each of these hormones undergoes a periodic rise, caused by pulsatile secretion from the pituitary, and a fall, caused by constant destruction in the liver. The falling edge of every pulse is a sugar-mediated clearance whose rate is set by one sulfated disaccharide — which is why **a hormone's potency in a living animal cannot be predicted from its receptor affinity alone: its glycan decides how long it is present to act at all.**",
      cn: "黄体生成素（luteinizing hormone）和促甲状腺激素（thyrotropin）都是垂体产生的多肽激素，两者都带着 N-连接的寡糖，末端是二糖 GalNAc4S(β1→4)GlcNAc——其中 GalNAc4S 指的是 C-4 位 -OH 被硫酸化的 N-乙酰半乳糖胺。肝细胞上有一个凝集素受体专门识别这个二糖，受体与激素一结合，就介导激素的摄取和销毁，把它在血中的浓度降下来。于是这两种激素的血中水平呈现周期性的上升（来自垂体的脉冲式分泌）和下降（来自肝脏持续不断的销毁）。每一次脉冲的下降沿，都是一次由糖介导的清除，而它的速率由一个硫酸化二糖决定——这也是为什么**一种激素在活体里的效力，光看它的受体亲和力是算不出来的：它的聚糖决定了它究竟能在场多久。**",
      src: "A p.254"
    },
    {
      link_en: "a clock decides how long. The next job decides where — starting with a white cell that has to get out of a blood vessel",
      link_cn: "钟决定「多久」。下一项工作决定「在哪里」——先从一个必须离开血管的白细胞说起",
      en: "Selectins are a family of plasma membrane lectins that mediate cell-cell recognition and adhesion, and the worked process is how a leukocyte — a white blood cell — crosses a capillary wall to reach infected tissue. It happens in two steps with two different chemistries, and the split is the whole design. Step one is sugar-mediated and weak: **P-selectin on capillary endothelial cells binds a specific oligosaccharide on the surface glycoproteins of a passing leukocyte, and that binding slows the leukocyte into a roll.** The roll runs along the endothelial lining, and each individual contact breaks easily, so the cell rolls instead of stopping dead. Step two is protein-mediated and strong: integrin molecules in the leukocyte's plasma membrane bind an adhesion protein on the endothelial cell, and now the leukocyte stops and crosses the capillary wall into the tissue. Two further selectins complete this homing — E-selectin on the endothelial cell and L-selectin on the leukocyte, each reading its partner's oligosaccharide — and several of the selectins essential to it bind specifically to the tetrasaccharide sialyl Lewis x, Neu5Ac-(α2→3)-Gal-(β1→4)(α-L-Fuc-[1→4])-GlcNAc.",
      cn: "选择素（selectin）是一族质膜凝集素，负责介导细胞间的识别与黏附，书上的实例是白细胞（leukocyte）如何穿过毛细血管壁、到达受感染的组织。这件事分两步完成，用的是两套不同的化学，而这个拆分本身就是整个设计的关键。第一步由糖介导，而且很弱：**毛细血管内皮细胞表面的 P-selectin 结合路过白细胞表面糖蛋白上的某个特定寡糖，这一结合把白细胞减速，让它沿着内皮内衬「滚」起来。**每一个单独的接触都很容易断开，所以细胞是在滚，而不是一下子刹死。第二步由蛋白介导，而且很强：白细胞质膜上的整合素（integrin）结合内皮细胞上的一个黏附蛋白，这下白细胞停住，穿过毛细血管壁进入组织。另外两个选择素补齐了这套归巢过程——内皮细胞上的 E-selectin 和白细胞上的 L-selectin，各自读取对方细胞上的寡糖——而其中几个关键的选择素，专门结合一个四糖：sialyl Lewis x，即 Neu5Ac-(α2→3)-Gal-(β1→4)(α-L-Fuc-[1→4])-GlcNAc。",
      src: "A p.255"
    },
    {
      link_en: "that address is read by more than white cells, and the clinical weight runs both ways",
      link_cn: "读这张地址标签的不止白细胞，而且临床后果朝两个方向都成立",
      en: "Human selectins mediate the inflammatory responses in rheumatoid arthritis, asthma, psoriasis, multiple sclerosis and the rejection of transplanted organs, so there is great interest in drugs that block selectin-mediated adhesion: carbohydrate derivatives that mimic the sialyl Lewis x portion and compete for the selectin binding site, or compounds that alter how the oligosaccharide is built in the first place. The same address label appears in oncology. **Many carcinomas express sialyl Lewis x, and shed into the circulation it promotes tumour cell survival and metastasis — the tumour cell wears the leukocyte's homing address and uses its machinery.**",
      cn: "人的选择素参与介导类风湿关节炎、哮喘、银屑病、多发性硬化以及移植器官排斥中的炎症反应，所以人们非常想找到能阻断选择素介导黏附的药物：一类是模仿 sialyl Lewis x 那一段的糖衍生物，去竞争选择素的结合位点；另一类则设法改变这个寡糖本身的合成。同一张地址标签在肿瘤学里也出现了。**许多癌都表达 sialyl Lewis x，而它被脱落到循环中时会促进肿瘤细胞的存活与转移——肿瘤细胞挂着白细胞的归巢地址，也就借走了白细胞的归巢机器。**",
      src: "A p.255"
    },
    {
      link_en: "a virus reads the same surface, and it needs to read it twice — once to get in, once to get out",
      link_cn: "病毒读的是同一片表面，而且它要读两次——一次为了进去，一次为了出来",
      recall_en: "the sialidase from the red-cell experiment four steps up, now carried by the virus itself and used on purpose",
      recall_cn: "就是上面红细胞实验里那个 sialidase，这回它长在病毒自己身上，而且是被有意使用的",
      en: "Several animal viruses, influenza among them, attach to a host cell through an interaction with the oligosaccharides displayed on that cell's surface. Influenza's lectin is the HA (hemagglutinin) protein, and it is essential for viral entry and infection — so the first move of an influenza infection is a lectin reading a sugar. The elegance is on the way out. Newly made viral particles bud off wrapped in a piece of the host plasma membrane, which means they are covered in exactly the oligosaccharides their own HA binds, and would stick to the cell and to each other. **The answer is a viral sialidase trimming the terminal sialic acid off the host cell oligosaccharides, which releases the new particles and stops them clumping, so infection can go another round.** Hence the drugs: oseltamivir (Tamiflu) and zanamivir (Relenza) are sugar analogues that inhibit the viral sialidase by competing with the host oligosaccharides for its binding site — which blocks release and causes the particles to aggregate, two blocks for one drug. Resistance is a small structural story worth having: oseltamivir fits the site by pushing a nearby Glu residue out of the way, and a mutation putting the larger Tyr side chain where a His used to sit means the drug can no longer shift that Glu, so it binds much less well and the mutant virus is effectively resistant.",
      cn: "包括流感在内的好几种动物病毒，都是通过与宿主细胞表面展示的寡糖相互作用来附着上去的。流感病毒的凝集素就是 HA（hemagglutinin，血凝素）蛋白，它是病毒进入和感染所必需的——所以流感感染的第一个动作，就是一个凝集素在读一个糖。真正精巧的地方在出去的时候。新造好的病毒颗粒出芽时会裹上一块宿主质膜，也就是说它们浑身覆盖着自己的 HA 正好会结合的那些寡糖，本该黏在细胞上、也黏在彼此身上。**答案是病毒自带一个 sialidase，把宿主细胞寡糖末端的唾液酸剪掉，从而释放新颗粒、也让它们不再互相聚集，下一轮感染才能开始。**由此就有了那两种药：oseltamivir（达菲）和 zanamivir（乐感清）是糖类似物，它们与宿主细胞寡糖竞争病毒 sialidase 的结合位点，从而抑制这个酶——一举堵住两条路：病毒出不来，出来的还会聚成团。耐药的机制是一个值得记住的小结构故事：oseltamivir 是靠把附近一个 Glu 残基推开才挤进结合位点的；一个突变把原来的 His 换成侧链更大的 Tyr 之后，药物再也推不动那个 Glu，结合能力大幅下降，突变病毒就等于耐药了。",
      src: "A p.255–256"
    },
    {
      link_en: "and the same surface chemistry is where several major parasites hide",
      link_cn: "而好几种重要寄生虫，藏身的也正是这同一片糖表面",
      en: "Some of the most devastating human parasitic diseases are caused by eukaryotic microorganisms that display unusual surface oligosaccharides, in some cases known to be protective for the parasite — trypanosomes, which cause African sleeping sickness and Chagas disease; Plasmodium falciparum, which causes malaria; and Entamoeba histolytica, which causes amoebic dysentery. **That is why the pathways by which those parasites build their oligosaccharides have attracted so much drug-discovery effort: the coat is the target.**",
      cn: "有几种最凶险的人类寄生虫病，病原都是真核微生物，而它们在表面展示着不寻常的寡糖，其中有些已知对寄生虫本身有保护作用——锥虫（trypanosome，引起非洲昏睡病和恰加斯病）、恶性疟原虫（Plasmodium falciparum，引起疟疾），以及溶组织内阿米巴（Entamoeba histolytica，引起阿米巴痢疾）。**这就是为什么这些寄生虫合成寡糖的途径吸引了如此多的药物开发投入：那层外衣本身就是靶点。**",
      src: "A p.256"
    },
    {
      link_en: "everything so far has been outside the cell. Lectins also work inside it, and there the sugar is a postal address",
      link_cn: "以上全发生在细胞外。凝集素在细胞内也干活，而在那里，糖是一个邮政地址",
      en: "Lectins act intracellularly as well, sorting proteins for transport to particular compartments: **an oligosaccharide carrying mannose 6-phosphate, recognised by a lectin, is a molecular zip code that tags a newly synthesised protein in the Golgi complex for transfer to the lysosome** — the organelle in which the cell digests things, and which therefore has to be filled with degradative enzymes without those enzymes being released anywhere else. X-ray crystallography of that lectin, the mannose 6-phosphate receptor, shows what specificity looks like atom by atom: every hydroxyl group of the mannose is hydrogen-bonded to the protein, the phosphate is hydrogen-bonded to Arg111 and coordinated to a manganese ion, and His105 is hydrogen-bonded to one of the phosphate oxygens — a complete complementary set rather than one contact. And then the part that turns a binding protein into a delivery vehicle: the lysosome has a lower internal pH than the Golgi complex, and on arrival the receptor loses its affinity for mannose 6-phosphate and lets the cargo go into the lysosomal matrix. His105, protonated at that lower pH, is thought to be the residue that causes the release.",
      cn: "凝集素在细胞内部同样干活，负责把蛋白分选到特定的隔间去：**一条带有甘露糖-6-磷酸的寡糖被某个凝集素识别，就成了一个分子邮编，把高尔基体中新合成的蛋白标记为「送往溶酶体」**——溶酶体就是细胞用来消化东西的细胞器，因此必须被灌满降解酶，同时又不能让这些酶漏到别处去。对这个凝集素（即甘露糖-6-磷酸受体）做的 X 射线晶体学，把「特异性」在原子层面长什么样摆了出来：甘露糖的每一个羟基都与蛋白形成氢键，磷酸基与 Arg111 形成氢键并与一个锰离子配位，His105 则与磷酸的一个氧原子形成氢键——这是一整套互补接触，而不是孤零零的一个。接下来才是把「结合蛋白」变成「运输工具」的那一步：溶酶体内部的 pH 比高尔基体低，货物一到，受体就失去了对甘露糖-6-磷酸的亲和力，把它放进溶酶体基质里。一般认为，正是在较低 pH 下被质子化的 His105，导致了这次松手。",
      src: "A p.256–257",
      see: [
        { id: "4-3-3", en: "how the mannose 6-phosphate tag gets put on in the first place", cn: "甘露糖-6-磷酸这个标签最初是怎么被挂上去的" }
      ]
    },
    {
      link_en: "one puzzle has been left standing since the lectins were defined: high specificity paired with only moderate affinity",
      link_cn: "从定义凝集素那一步起，有个疑问一直悬着：高特异性，却只有中等亲和力",
      recall_en: "the leukocyte that rolls instead of sticking, four steps up — this is why it rolls",
      recall_cn: "上面那个「滚而不粘」的白细胞——这一步说的就是它为什么会滚",
      en: "The two halves are engineered separately. Specificity comes from complementarity: in its carbohydrate-binding site a lectin has a subtle molecular complementarity that permits interaction only with its correct carbohydrate partner, and a divalent metal ion such as Ca2+ or Mn2+ is often part of that site — the manganese in the mannose 6-phosphate receptor is exactly this. Affinity is built rather than intrinsic: a single carbohydrate binding domain, or CBD, often binds its oligosaccharide only modestly, with a Kd in the micromolar to millimolar range, and the effective affinity is raised by lectin multivalency, one lectin molecule carrying several CBDs. Against a cluster of oligosaccharides, as a membrane surface presents, each one engages a different CBD; with several lectin receptors on the cell as well, the resulting avidity can be very high, enabling cooperative events such as cell attachment and rolling. **Weak-times-many is a different thing from strong: each P-selectin contact breaks under flow so the leukocyte keeps rolling, and there are enough contacts at once that it does not simply wash away.** Only weak-times-many gives a contact that is reversible and tunable.",
      cn: "这两半是分开造出来的。特异性来自互补：凝集素的糖结合位点具有精细的分子互补性，只允许它与正确的糖搭档发生相互作用，而这个位点里常常还嵌着一个二价金属离子，比如 Ca²⁺ 或 Mn²⁺——上一步甘露糖-6-磷酸受体里的那个锰，就是这么回事。亲和力则是「搭出来」的，而不是天生的：单个糖结合结构域（carbohydrate binding domain，CBD）与它的寡糖结合往往并不强，Kd 在微摩尔到毫摩尔量级；真正的有效亲和力靠凝集素多价性（multivalency）抬上来——一个凝集素分子身上带着好几个 CBD。面对膜表面那种成簇排列的寡糖，每一条寡糖各自占住一个 CBD；再加上细胞上本来就有多个凝集素受体，最终的亲合力（avidity）可以非常高，足以支撑细胞黏附、滚动这类协同性事件。**「弱 × 多」和「强」是两回事：每一个 P-selectin 接触都会在血流冲刷下断开，所以白细胞一直在滚；而同时存在的接触又足够多，所以它不会被直接冲走。**只有「弱 × 多」才给得出一个可逆、可调的接触。",
      src: "A p.256–257"
    },
    {
      link_en: "one last general question: a sugar is covered in hydroxyls, so how does a protein grip one sugar rather than any other?",
      link_cn: "最后一个一般性问题：糖表面全是羟基，蛋白凭什么抓住这个糖而不是别的糖？",
      en: "Many sugars have a more polar side and a less polar side. **The more polar side hydrogen-bonds with the lectin, while the less polar side undergoes hydrophobic interactions with nonpolar amino acid residues, such as the indole ring of Trp.** The sum of those general contacts, laid on top of the specific complementarity and any bound divalent metal ion, is what produces the observed high-affinity, high-specificity binding of a lectin to its carbohydrate ligand.",
      cn: "很多糖都有一面比较极性、一面比较不极性。**极性较强的那一面与凝集素形成氢键，极性较弱的那一面则通过疏水作用与非极性氨基酸残基接触，比如 Trp 的吲哚环。**把这些一般性的接触加起来，再叠上前面说的特异性互补和那个结合着的二价金属离子，就得到了实际观测到的结果：凝集素对它的糖配体既亲和力高、又高度专一。",
      src: "A p.257"
    }
  ],
  terms: [
    { en: "pentasaccharide core", cn: "五糖核心",
      def_en: "The starting piece every N-glycosidically bound oligosaccharide is built on: three D-mannosyl residues and two N-acetyl-D-glucosaminyl residues. Everything attached to it afterwards is where the diversity of glycoprotein sugar chains comes from.",
      def_cn: "每一条以 N-糖苷键结合的寡糖共同的起手段落：三个 D-甘露糖基残基加两个 N-乙酰-D-葡萄糖胺基残基。糖蛋白糖链的多样性，全来自后续挂在它上面的东西。" },
    { en: "glycan", cn: "聚糖",
      def_en: "A short chain of monosaccharide units joined end to end, when it is attached to a protein or a lipid. Being branched, it can take far more distinguishable forms than a string of the same length: many billions of hexasaccharides against 6.4 x 10^7 hexapeptides and 4,096 hexanucleotides.",
      def_cn: "首尾相连的一小段单糖链，挂在蛋白或脂质上时这样称呼。因为它是分支的，同样长度下可区分的形式远多于线性链：数十亿种六糖，对 6.4 x 10^7 种六肽和 4,096 种六核苷酸。" },
    { en: "the sugar code", cn: "糖密码",
      def_en: "The idea that a glycan's structure is readable information. Each one presents a unique three-dimensional face, a word, read by proteins that meet it. Reality is smaller than the combinatorics because the biosynthetic enzymes and the supply of precursors restrict what is actually made.",
      def_cn: "把一条聚糖的结构当作可读信息的这个想法。每一条都呈现出独一无二的三维面孔，也就是一个词，由遇到它的蛋白读取。真实情况比组合数小得多，因为合成酶和前体供应限制了实际能造出来的东西。" },
    { en: "lectin", cn: "凝集素",
      def_en: "A protein that binds carbohydrates with high specificity and moderate to high affinity. These work in cell-cell recognition, signalling, adhesion and intracellular protein targeting. Plant ones are abundant in seeds, probably as deterrents to predators, and immobilised on a column they sort proteins by their glycan.",
      def_cn: "一类以高特异性、中等到高亲和力结合糖的蛋白。它们参与细胞间识别、信号传导、黏附以及胞内蛋白定向。植物来源的在种子里含量很高，多半是用来吓退捕食者的；固定在层析柱上就能按聚糖分选蛋白。" },
    { en: "asialoglycoprotein receptor", cn: "去唾液酸糖蛋白受体",
      def_en: "A hepatocyte plasma membrane lectin binding oligosaccharide chains whose galactose residues have lost their protecting terminal Neu5Ac, which triggers endocytosis and destruction. Ceruloplasmin is the worked case; the same logic retires aged erythrocytes, which vanish within hours once treated with neuraminidase.",
      def_cn: "肝细胞质膜上的一种凝集素，结合那些末端 Neu5Ac 已经掉了、半乳糖残基暴露出来的糖链，一结合就触发内吞与降解。铜蓝蛋白是书上的实例；衰老红细胞退役用的是同一套逻辑——经神经氨酸酶处理后几小时内就从循环中消失。" },
    { en: "selectin", cn: "选择素",
      def_en: "A family of plasma membrane lectins mediating cell-cell adhesion. P-selectin on endothelium slows a leukocyte into a roll; integrin then arrests it so it can cross the capillary wall. Several of them read the tetrasaccharide sialyl Lewis x, which many carcinomas also display, promoting metastasis when shed.",
      def_cn: "一族介导细胞间黏附的质膜凝集素。内皮上的 P-selectin 把白细胞减速成滚动，随后由整合素把它刹停，使它能穿过毛细血管壁。其中几个读的是四糖 sialyl Lewis x，而许多癌也展示这个四糖，脱落到循环中时会促进转移。" },
    { en: "HA and viral sialidase", cn: "HA 与病毒 sialidase",
      def_en: "Influenza enters by its hemagglutinin lectin binding host surface oligosaccharides, and leaves by an enzyme trimming terminal sialic acid so progeny particles are released and do not clump. Oseltamivir and zanamivir are sugar analogues competing for that enzyme; a His-to-Tyr change stops oseltamivir displacing a neighbouring Glu, giving resistance.",
      def_cn: "流感靠血凝素这个凝集素结合宿主表面寡糖而进入，靠一个把末端唾液酸剪掉的酶而离开，使子代颗粒得以释放且不互相聚集。oseltamivir 和 zanamivir 是竞争这个酶的糖类似物；一个 His 变 Tyr 的突变使 oseltamivir 推不动旁边的 Glu，于是耐药。" },
    { en: "mannose 6-phosphate receptor", cn: "甘露糖-6-磷酸受体",
      def_en: "The lectin that reads the lysosomal zip code. Every mannose hydroxyl hydrogen-bonds to the protein, the phosphate to Arg111 and to a manganese ion, His105 to a phosphate oxygen. At the lysosome's lower pH, protonated His105 is thought to make the receptor let its cargo go.",
      def_cn: "读溶酶体邮编的那个凝集素。甘露糖的每个羟基都与蛋白形成氢键，磷酸与 Arg111 成氢键并配位一个锰离子，His105 与磷酸的一个氧成氢键。到了 pH 更低的溶酶体，被质子化的 His105 被认为就是让受体松手的那一步。" },
    { en: "multivalency", cn: "多价性",
      def_en: "One lectin molecule carrying several carbohydrate binding domains, so that a cluster of oligosaccharides is engaged many times at once. A single domain binds only modestly, with micromolar to millimolar Kd; many such contacts together give a high avidity that is still reversible, which is what lets a leukocyte roll rather than stick.",
      def_cn: "一个凝集素分子身上带着好几个糖结合结构域，于是一簇寡糖会被同时抓住许多次。单个结构域结合并不强，Kd 在微摩尔到毫摩尔量级；许多这样的接触加在一起给出很高却仍可逆的亲合力，这正是白细胞能滚而不粘住的原因。" },
    { en: "avidity", cn: "亲合力",
      def_en: "The total strength of a multivalent interaction, as against the affinity of any single binding site. High values built from many weak, individually breakable contacts are what make cooperative and reversible events such as cell attachment and rolling possible.",
      def_cn: "多价相互作用的总强度，与任何单个结合位点的亲和力相对而言。由许多个别可断的弱接触堆出来的高数值，正是细胞黏附、滚动这类协同而又可逆的事件得以发生的原因。" }
  ]
};

/* ------------------------- 淀粉、蔗糖与纤维素的生物合成 (6-2-3, L-20-6-1) ----
   Node → step map:
     L-20-6-1  1-12, 14-16      6-2-3  12-13
   The Lehninger member node's spine is the backbone, re-bolded to one span per
   field; the other member node is the glyoxylate cycle, which the Lehninger chain
   reaches from the seed's side and the course book reaches from the citrate cycle's
   side, so the two meet at steps 12 and 13 and the accounting is carried from the
   book: the five reused enzymes, the overall equation, and the 8 ATP. */
window.BIOLITE_SPINE["key:starch-sucrose-biosynthesis"] = {
  assumed: ["ATP", "ADP", "UTP", "UDP", "Pi", "PPi", "NAD+", "NADH", "FAD", "FADH2",
            "CoA", "acetyl-CoA", "coenzyme A", "glucose", "fructose", "sucrose",
            "starch", "glycogen", "cellulose", "amylose", "amylopectin", "amylase",
            "monosaccharide", "disaccharide", "polysaccharide", "sugar",
            "anomeric carbon", "reducing end", "non-reducing end", "glycosidic bond",
            "hexose", "triose", "glucose 1-phosphate", "glucose 6-phosphate",
            "fructose 6-phosphate", "fructose 1,6-bisphosphate",
            "dihydroxyacetone phosphate", "3-phosphoglycerate", "phosphoenolpyruvate",
            "pyruvate", "oxaloacetate", "citrate", "isocitrate", "succinate",
            "fumarate", "malate", "citrate cycle", "citric acid cycle", "glycolysis",
            "gluconeogenesis", "Calvin cycle", "photosynthesis", "hexokinase",
            "phosphofructokinase", "aconitase", "fumarase", "citrate synthase",
            "malate dehydrogenase", "isocitrate dehydrogenase",
            "pyruvate dehydrogenase", "PEP carboxykinase", "isozyme", "enzyme",
            "kinase", "phosphatase", "phosphorylation", "allosteric regulation",
            "hydrolysis", "equilibrium", "free energy", "cell", "cytosol",
            "chloroplast", "plastid", "mitochondrion", "peroxisome", "membrane",
            "plasma membrane", "cell wall", "organelle", "leaf", "seed", "root",
            "tuber", "phloem", "osmosis", "turgor pressure", "fatty acid",
            "triacylglycerol", "glycerol", "beta oxidation", "germination",
            "bacteria", "plant", "animal", "Ser", "protein kinase"],
  nodeTitle_en: "Biosynthesis of starch, sucrose and cellulose",
  nodeTitle_cn: "淀粉、蔗糖与纤维素的生物合成",
  title_en: "One chemistry asked where three times, why the nucleotide is the answer, and how a seed with no light turns stored fat into the plant's transport sugar",
  title_cn: "同一套化学，把「在哪里做」问了三遍——答案写在核苷酸上；以及一颗没有光的种子怎样把贮存的脂肪变成整株植物的运输糖",
  steps: [

    /* ----------------------------------------------------------- L-20-6-1 ---- */
    {
      en: "A cell never adds free glucose to a growing polysaccharide, a polysaccharide being any long chain of sugar units, starch and cellulose among them. **It first attaches the sugar to a nucleotide: glucose bonded to a nucleoside diphosphate, which is what ADP-glucose and UDP-glucose are.** An enzyme of the glycosyltransferase family — a transferase whose job is to move a sugar from a donor onto an acceptor — then hands that glucose to the non-reducing end of the chain, which is the end whose terminal sugar has no free anomeric carbon, and lets the nucleotide go. That is the whole chemistry of this chain, and it is the chemistry already used for glycogen. What changes between starch, sucrose and cellulose is where it happens.",
      cn: "细胞从来不会把游离的葡萄糖直接接到正在延长的多糖上。**它先把糖挂到一个核苷二磷酸上，做成 ADP-葡萄糖、UDP-葡萄糖这样的糖核苷酸，再由一个糖基转移酶把这个葡萄糖交到链的非还原端上，同时把核苷二磷酸丢掉。**这就是整条主线全部的化学，而且它正是糖原合成用的那一套。淀粉、蔗糖、纤维素之间变化的，只是「在哪里做」。",
      src: "A p.733, §20.6",
      see: [
        { id: "7-12-1", en: "the same mechanism worked out for glycogen", cn: "同一套机制在糖原上的完整版本" }
      ]
    },
    {
      link_en: "why bother activating it at all?",
      link_cn: "那为什么非要先「活化」一步？",
      en: "Forming a glycosidic bond releases almost no energy, so the reaction sits near equilibrium and runs either way; concentration alone would decide whether a cell builds its polymer or takes it apart. A phosphoanhydride bond is the kind of high-energy bond that joins one phosphate of ATP to the next. **Attaching the sugar to a nucleotide puts such a phosphoanhydride bond onto it in advance, and breaking that bond during the transfer pushes the whole reaction one way.** Activation is therefore how a reversible reaction is made irreversible, and irreversibility is the precondition for being able to regulate anything at all.",
      cn: "形成一个糖苷键几乎不放能，所以这个反应处在平衡附近、两个方向都能走；单靠浓度就能决定细胞是在造多糖还是在拆多糖。磷酸酐键就是把 ATP 上一个磷酸连到下一个磷酸的那种高能键。**把糖挂到核苷酸上，等于预先在它身上装了这样一根磷酸酐键；转移时这根键断掉，整个反应就被推成单向。**所以「活化」是把一个可逆反应变成不可逆反应的手段，而不可逆正是「能被调控」的前提。",
      src: "A p.733"
    },
    {
      link_en: "first destination: starch, and it is glycogen with two substitutions",
      link_cn: "第一个去向：淀粉——它就是换了两个零件的糖原",
      en: "Starch is a polymer of glucose in α1→4 linkage, built inside plastids, which are the plant's double-membraned organelles: chloroplasts for the starch a leaf lives on overnight, and amyloplasts of seeds, roots and tubers for the starch a potato is. **ADP-glucose is made by condensing glucose 1-phosphate with ATP; starch synthase transfers residues to the non-reducing end; a branching enzyme puts in the α1→6 branches of amylopectin.** Line those three up against glycogen synthesis and only two things have changed: the donor, and the compartment the reaction sits in. The plastid also holds inorganic pyrophosphatase, an enzyme that destroys the PPi released, so the activation step cannot run backwards — overall about −50 kJ/mol from glucose 1-phosphate. The scale is worth one number: starch supplies more than 80 % of human dietary calories worldwide.",
      cn: "淀粉是 α1→4 连接的葡萄糖聚合物，造在质体内部——质体就是植物那类双层膜细胞器：叶绿体里的淀粉是叶片夜里赖以过活的，种子、根、块茎里的淀粉体中的淀粉则是「一个土豆」。**ADP-葡萄糖由葡萄糖-1-磷酸与 ATP 缩合而成；淀粉合酶把残基加到非还原端；一个分支酶装上支链淀粉的 α1→6 分支。**把这三步和糖原合成并排放，改变的只有供体和隔间。质体里还有无机焦磷酸酶，把放出的 PPᵢ 就地毁掉，于是活化那一步回不去了——从葡萄糖-1-磷酸起算，总的 ΔG′° 约 −50 kJ/mol。规模值得记一个数：淀粉提供了全世界人类膳食热量的 80 % 以上。",
      src: "A p.733"
    },
    {
      link_en: "and one absence in the plant cytosol turns out to be load-bearing",
      link_cn: "而植物胞质里缺的一个酶，后来成了承重结构",
      en: "Inorganic pyrophosphatase is present in plant plastids and absent from the plant cytosol. In most cells it is that enzyme's activity which makes every PPi-releasing biosynthetic reaction one-way. Take it away and cytosolic PPi sits at about 0.3 mM — high enough to keep reactions such as the one making UDP-glucose readily reversible in both directions. **Irreversibility is made rather than given: it comes from removing a product, and a compartment that declines to remove that product has kept its options open.** Which option, exactly, comes out at the end of this chain.",
      cn: "无机焦磷酸酶在植物质体里有，在植物胞质里没有。在多数细胞里，正是这个酶的活性让每一个放出 PPᵢ 的生物合成反应变成单向的。把它拿走，胞质里的 PPᵢ 就维持在约 0.3 mM——高到足以让「生成 UDP-葡萄糖」这一类反应在两个方向上都能顺畅进行。**不可逆是被造出来的，不是天生的：它来自「把某个产物移走」；而一个不肯移走它的隔间，是特意给自己留了余地。**具体留了哪一手，这条主线的最后会揭晓。",
      src: "A p.734"
    },
    {
      link_en: "so why two different nucleotides at all?",
      link_cn: "那为什么要用两种不同的核苷酸？",
      recall_en: "the plastid/cytosol split from the two steps above, now given its purpose",
      recall_cn: "上面两步里的「质体／胞质」之分，在这里被赋予了目的",
      en: "Starch is built from ADP-glucose inside the plastid; sucrose is built from UDP-glucose in the cytosol. **Two donors in two compartments means two separate pools, and two separate pools mean two independent knobs: the plant can make more starch without automatically making less sucrose.** If both routes drew on UDP-glucose they would compete for one pool and would have to move together. The choice of nucleotide is compartmentation written at the level of a molecule, and it is the answer to why the same sugar is carried on two different carriers.",
      cn: "淀粉用质体内的 ADP-葡萄糖造，蔗糖用胞质里的 UDP-葡萄糖造。**两个供体分处两个隔间，就意味着两个彼此独立的池子；两个池子就意味着两个各自独立的旋钮：植物可以多造淀粉，而不必因此自动少造蔗糖。**假如两条路都取自 UDP-葡萄糖，它们就要抢同一个池子，只能一动全动。核苷酸的选择，是「分区」这件事被写在分子层面上的形式——这就是「同一种糖为什么要挂在两种载体上」的答案。",
      src: "A p.733–734"
    },
    {
      link_en: "second destination: sucrose. And there is a structural reason it is the one that travels",
      link_cn: "第二个去向：蔗糖。而「为什么是它去旅行」有一个结构上的理由",
      en: "Sucrose joins the anomeric C-1 of glucose to the anomeric C-2 of fructose, the anomeric carbon being the one that opens and closes the sugar ring; in every other common disaccharide one of the two is left free. **Sucrose spends both anomeric carbons in the same bond, so no common carbohydrate-splitting enzyme hydrolyses that linkage and no open-chain aldehyde is left over.** Two useful things follow. Amylase, the starch-splitting enzyme of saliva and gut, cannot touch it, so the sugar survives the journey through the phloem instead of being eaten on the way; and with no open-chain aldehyde it cannot react non-enzymatically with the amino groups of proteins the way glucose does. A transport sugar has to be inert in both senses, and this one is.",
      cn: "蔗糖把葡萄糖的异头碳 C-1 和果糖的异头碳 C-2 连在一起——异头碳就是那个负责开环闭环的碳；在其他常见的双糖里，两个异头碳总有一个是空着的。**蔗糖把两个都花在了同一根键上，于是常见的糖裂解酶都水解不了这根键，也不再剩下开链的醛式。**由此有两个好处：唾液和肠道里分解淀粉的淀粉酶动不了它，所以这个糖能活着走完韧皮部的旅程，不会半路被吃掉；而没有开链醛式，它也不会像葡萄糖那样非酶促地跟蛋白质的氨基反应。一个运输用的糖必须在这两个意义上都是惰性的，而蔗糖正是如此。",
      src: "A p.733",
      see: [
        { id: "7-3-1", en: "sucrose as the non-reducing disaccharide", cn: "作为非还原性二糖的蔗糖" }
      ]
    },
    {
      link_en: "and its synthesis looks wasteful until you look at the two numbers",
      link_cn: "而它的合成看起来很浪费，直到你看那两个数字",
      en: "Sucrose is made in two steps: sucrose 6-phosphate synthase joins UDP-glucose to fructose 6-phosphate, then sucrose 6-phosphate phosphatase takes the phosphate off again. Why phosphorylate a product only to remove the phosphate? Because the synthase reaction releases only about −5.7 kJ/mol — near equilibrium, reversible, and therefore useless as a commitment. The hydrolysis that follows releases about −16.5 kJ/mol and drags the pair over. **Learn the shape rather than the numbers: a near-isoenergetic bond-forming step, followed by an irreversible hydrolysis that pulls it forward.** A cell buys direction by hydrolysing something afterwards, and the same move has already appeared at hexokinase, the enzyme that traps glucose inside a cell by phosphorylating it, and at the two bisphosphatases of the Calvin cycle.",
      cn: "蔗糖分两步造：蔗糖-6-磷酸合酶把 UDP-葡萄糖接到果糖-6-磷酸上，然后蔗糖-6-磷酸磷酸酶再把那个磷酸去掉。为什么先给产物加一个磷酸、只为了再把它拿掉？因为合酶那一步只放出约 −5.7 kJ/mol——处在平衡附近，可逆，因而作为「承诺步骤」毫无用处；紧随其后的水解放出约 −16.5 kJ/mol，把这一对整体拉了过去。**要记的是这个形状，而不是这两个数：一个几乎不放能的成键步骤，后面跟一个把它拽向前的不可逆水解。**细胞是靠「事后水解掉某样东西」来买到方向的——把葡萄糖磷酸化从而扣在细胞里的己糖激酶、Calvin 循环里那两个二磷酸酶，用的都是同一招。",
      src: "A p.733–734"
    },
    {
      link_en: "before any regulator, see what is being regulated — the leaf is squeezed from both sides",
      link_cn: "在讲任何调控因子之前，先看清被调控的是什么——叶片是被两头夹住的",
      en: "A triose phosphate is a three-carbon sugar carrying a phosphate group, and what the Calvin cycle makes of it can be stored in the chloroplast as starch, exported as sucrose, or both. The ceiling: five-sixths of it must be recycled to regenerate the cycle's CO2 acceptor, so drawing off more than one-sixth slows the cycle or stops it. **Every triose phosphate carries a phosphate group out with it, so a chloroplast that hoards triose phosphate has hoarded the Pi its own ATP synthase needs to make ATP.** Export too much carbon and the cycle runs out of acceptor; export too little and it runs out of phosphate. Every device in the next three steps exists to keep the flux between those two walls.",
      cn: "三碳糖磷酸是一个带着磷酸基的三碳糖；Calvin 循环造出的三碳糖磷酸可以留在叶绿体里变成淀粉，可以变成蔗糖输出，也可以两者都做。上限：其中六分之五必须被回收，用来再生循环的 CO₂ 受体——所以抽走超过六分之一，循环就会变慢乃至停下。**下限常被忽略：每一个三碳糖磷酸都带着一个磷酸基一起离开，所以一个囤着三碳糖磷酸不放的叶绿体，同时也囤住了 ATP 合酶造 ATP 所需的 Pᵢ。**碳输出得太多，循环缺受体；输出得太少，循环缺磷。接下来三步里的每一个装置，都是为了把通量夹在这两堵墙之间。",
      src: "A p.734",
      see: [
        { id: "L-20-4-1", en: "the switches that turn the Calvin cycle on and off", cn: "把 Calvin 循环打开和关上的那些开关" }
      ]
    },
    {
      link_en: "the cytosolic regulator moves opposite to the thing it regulates, and that inversion is the mechanism",
      link_cn: "胞质里那个调控分子的浓度，与它所调控的东西反向变化——这个反向就是机制本身",
      en: "Fructose 2,6-bisphosphate is a pure regulator: it is an intermediate of no pathway, and its only job is to inhibit fructose 1,6-bisphosphatase and to stimulate the PPi-dependent phosphofructokinase that runs the same step backwards. A high concentration of it therefore pushes the cytosol away from sucrose and toward glycolysis. **Its concentration varies inversely with the rate of photosynthesis, because the kinase that makes it is inhibited by dihydroxyacetone phosphate and by 3-phosphoglycerate and stimulated by Pi.** Active photosynthesis produces the first two while consuming the third, so light lowers fructose 2,6-bisphosphate, the brake on sucrose synthesis comes off, and in the dark the whole circuit runs backwards and the cell burns sugar instead of making it. One metabolite, two enzymes, opposite effects, and the sign is set by the light.",
      cn: "果糖-2,6-二磷酸是一个纯粹的调控分子：它不是任何途径的中间物，唯一的职责就是抑制果糖-1,6-二磷酸酶、并激活那个把同一步反过来跑的「依赖 PPᵢ 的磷酸果糖激酶」。所以它浓度高，胞质就被推离蔗糖、推向糖酵解。**它的浓度与光合速率反向变化，原因是：造它的那个激酶被磷酸二羟丙酮和 3-磷酸甘油酸抑制、被 Pᵢ 激活。**而活跃的光合作用恰好生产前两者、消耗后者；于是光把它压低，蔗糖合成的刹车松开；到了黑暗里整条回路反向运行，细胞改成烧糖而不是造糖。一个代谢物、两个酶、相反的效果，而正负号由光来定。",
      src: "A p.734, figure 20-42"
    },
    {
      link_en: "the second cytosolic control point is worth reading for its architecture",
      link_cn: "胞质里第二个控制点，值得看的是它的架构",
      en: "Sucrose 6-phosphate synthase is activated allosterically by glucose 6-phosphate and inhibited by Pi. On top of that sits covalent control: a protein kinase phosphorylates one Ser residue and makes the enzyme less active, and a phosphatase reverses that. **Glucose 6-phosphate also inhibits the kinase that would switch the enzyme off, and Pi also inhibits the phosphatase that would switch it back on, so each signal acts twice in the same direction.** That is why this arrangement amplifies rather than merely repeats. The physiological reading is plain: plenty of hexose phosphate opens sucrose synthesis, and high Pi — which is what a slow photosynthesis leaves behind — closes it.",
      cn: "蔗糖-6-磷酸合酶被葡萄糖-6-磷酸别构激活、被 Pᵢ 抑制。在这之上还叠了一层共价调控：一个蛋白激酶把它某个 Ser 残基磷酸化，使它活性下降，而一个磷酸酶把这个磷酸去掉、逆转之。**关键在架构：葡萄糖-6-磷酸同时还抑制那个「会把它关掉」的激酶，而 Pᵢ 同时还抑制那个「会把它重新打开」的磷酸酶——每个信号都作用两次，方向一致。**所以这套安排起的是放大作用，而不是简单的重复。生理上的读法很直白：己糖磷酸充裕就打开蔗糖合成；Pᵢ 高就关上——而 Pᵢ 高正是光合作用变慢之后留下的局面。",
      src: "A p.734–735, figure 20-43"
    },
    {
      link_en: "and the third control point sits in the other compartment, reading the same metabolites",
      link_cn: "第三个控制点在另一个隔间里，读的却是同样的代谢物",
      recall_en: "the two-knob argument from the nucleotide step, now with the knobs identified",
      recall_cn: "前面「两个旋钮」那一步的论证，现在把旋钮指出来了",
      en: "ADP-glucose pyrophosphorylase, the enzyme that makes starch's donor, is activated by 3-phosphoglycerate — which accumulates when photosynthesis is active — and inhibited by Pi, so it reads the ratio of the two. Now line the three control points up, because as a set they say something no one of them says alone. **The signal of active photosynthesis opens both outlets at once and Pi closes both: the plant opens starch and sucrose together when carbon is abundant, and closes both when phosphate is short.** One genuine coupling sits on top: when sucrose export backs up, the 3-phosphoglycerate that would have been drawn off accumulates instead, activating this very enzyme — so a leaf whose export is blocked falls back on storage automatically.",
      cn: "ADP-葡萄糖焦磷酸化酶——制造淀粉那个供体的酶——被 3-磷酸甘油酸激活（光合活跃时它会积累），被 Pᵢ 抑制，所以它读的是这两者的比值。现在把三个控制点并排放好，因为它们作为一组说出了单看任何一个都说不出的话。**「光合正在进行」这个信号同时打开两个出口，而 Pᵢ 同时关上两个：碳充裕时植物把淀粉和蔗糖两条路一起打开，磷短缺时一起关上。**上面还叠着一处真正的耦合：当蔗糖输出堵住时，本该被抽走的 3-磷酸甘油酸转而积累起来，恰好激活这个酶——于是一片输出受阻的叶子会自动改走「存起来」这条路。",
      src: "A p.735, figure 20-44"
    },
    {
      link_en: "everything so far assumed a leaf in sunlight. A germinating seed has neither",
      link_cn: "以上一切都预设了「一片晒着太阳的叶子」。而一颗正在萌发的种子两样都没有",
      en: "A seed underground has no light and no leaves; what it has is stored oil. Its triacylglycerols are hydrolysed to fatty acids, which are oxidised to acetyl-CoA inside glyoxysomes — specialised peroxisomes that appear only during germination — and the acetyl-CoA enters the glyoxylate cycle, which is the citrate cycle with two steps replaced. **Isocitrate lyase splits isocitrate into succinate and glyoxylate instead of letting it be decarboxylated, and malate synthase then condenses that glyoxylate with a second acetyl-CoA to give malate.** Both decarboxylations of the citrate cycle are bypassed, so two acetyl groups go in and four carbons come out as succinate rather than leaving as two CO2. The two steps that drop out have names worth having: isocitrate dehydrogenase, which is reaction 4 of the citrate cycle, and 2-oxoglutarate dehydrogenase, which is reaction 5 — one single non-oxidative, non-decarboxylating cleavage replaces both of them, and no CO2 is released where isocitrate lyase acts. Keeping the carbon is the entire point: a seed is turning fat into sugar. And the compartments are load-bearing rather than decorative. Citrate synthase, aconitase and malate dehydrogenase are shared between the two cycles, yet the seed builds a separate glyoxysomal isozyme of each instead of borrowing the mitochondrial ones — because one acetyl-CoA that wanders into the mitochondrial citrate cycle is decarboxylated twice and lost as CO2. Only the succinate leaves, for the mitochondrion; the oxaloacetate made from it reaches the cytosol, where PEP carboxykinase converts it to phosphoenolpyruvate and gluconeogenesis carries it on to fructose 6-phosphate and sucrose.",
      cn: "一颗埋在土里的种子既没有光也没有叶子；它有的是贮存的油。它的三酰甘油被水解成脂肪酸，脂肪酸在乙醛酸循环体——一种只在萌发期才出现的特化过氧化物酶体——里被氧化成乙酰-CoA，乙酰-CoA 随即进入乙醛酸循环；而这个循环就是把柠檬酸循环里的两步换掉。**异柠檬酸裂解酶把异柠檬酸劈成琥珀酸和乙醛酸，不让它被脱羧；接着苹果酸合酶把那个乙醛酸与第二个乙酰-CoA 缩合，生成苹果酸。**柠檬酸循环的两次脱羧都被绕过了，于是两个乙酰基进去，出来的是四个碳的琥珀酸，而不是两个 CO₂ 跑掉。掉出去的那两步值得记住名字：异柠檬酸脱氢酶，也就是柠檬酸循环的反应 4；以及 2-氧戊二酸脱氢酶，反应 5 —— 一次非氧化、不脱羧的裂解把这两步一起顶替掉，异柠檬酸裂解酶作用的这一处一个 CO₂ 都不放。「把碳留住」就是全部要点：一颗种子正在把脂肪变成糖。而这些隔间是承重的，不是装饰：柠檬酸合酶、顺乌头酸酶、苹果酸脱氢酶本是两个循环共用的，可种子偏偏为每一个都另造一份乙醛酸循环体专用的同工酶，而不去借线粒体那一份——因为只要有一个乙酰-CoA 溜进线粒体的柠檬酸循环，它就会被脱羧两次、以 CO₂ 的形式丢掉。离开乙醛酸循环体的只有琥珀酸，去往线粒体；由它生成的草酰乙酸进入胞质，PEP 羧激酶把它变成磷酸烯醇式丙酮酸，再由糖异生一路走到果糖-6-磷酸和蔗糖。",
      src: "A p.735–736, p.740, figure 20-45 · B §6.2.3, p.140"
    },
    {
      link_en: "the same cycle, counted rather than told — and the count is the whole argument",
      link_cn: "同一个循环，这回是算账而不是叙事——而这笔账就是全部论证",
      recall_en: "the two enzymes of the step above are the two reactions that distinguish the two cycles",
      recall_cn: "上一步那两个酶，正是把两个循环区分开来的那两个反应",
      en: "Around those two reactions the glyoxylate cycle reuses five enzymes of the citrate cycle outright: citrate synthase and aconitase build and isomerise citrate to isocitrate from oxaloacetate plus the first acetyl-CoA, and succinate dehydrogenase, fumarase and malate dehydrogenase carry the succinate on to a second malate and oxaloacetate. The overall equation is 2 acetyl-CoA + 2 NAD+ + FAD + 3 H2O → oxaloacetate + 2 NADH + H+ + FADH2 + 2 CoA-SH. **Two acetyl-CoA go in, no CO2 comes out, and one new four-carbon oxaloacetate is the net gain — which one turn of the plain citrate cycle can never achieve.** In the plain cycle 2 carbons enter as acetyl and exactly 2 leave as CO2, so the net is always zero. In proportion to its 2 NADH and 1 FADH2, 8 mol ATP arise per turn, and the two concrete consequences are that many bacteria can grow on acetate, or on any other compound yielding acetyl-CoA, as their carbon source, and that germinating oil-seed plants can break down their stored fatty acids and obtain from them both the carbohydrate and the energy they need.",
      cn: "围绕那两个反应，乙醛酸循环把柠檬酸循环的五个酶原样重用：柠檬酸合酶和顺乌头酸酶先由草酰乙酸加第一分子乙酰-CoA 构建柠檬酸并异构成异柠檬酸；琥珀酸脱氢酶、延胡索酸酶、苹果酸脱氢酶则把琥珀酸一路带到第二个苹果酸和草酰乙酸。总反应式是 2 乙酰-CoA + 2 NAD⁺ + FAD + 3 H₂O → 草酰乙酸 + 2 NADH + H⁺ + FADH₂ + 2 CoA-SH。**两分子乙酰-CoA 进去，一个 CO₂ 都不出来，净得一个新的四碳草酰乙酸——这是普通柠檬酸循环转一圈永远做不到的。**在普通循环里，2 个碳以乙酰的形式进去，正好 2 个碳以 CO₂ 的形式出来，净收益永远是零。按其 2 个 NADH 与 1 个 FADH₂ 折算，每转一圈产生 8 摩尔 ATP；两个具体后果是：许多细菌能以乙酸盐、或任何别的能生成乙酰-CoA 的化合物作为碳源生长；而萌发的油料种子在分解贮存的脂肪酸之后，能由此获得所需的糖类和能量。",
      src: "B §6.2.3, pp.140-141"
    },
    {
      link_en: "which gives the cleanest answer to a question people usually answer wrongly",
      link_cn: "由此可以给出一个常被答错的问题的最干净的答案",
      en: "An animal cannot make glucose from the two carbons of acetyl-CoA, and the reason is the absence of two enzymes rather than any energetic barrier. The pyruvate dehydrogenase reaction is effectively irreversible, so acetyl-CoA cannot be walked back into pyruvate; and animals have no isocitrate lyase and no malate synthase, so there is no way round either. Say it as two missing enzymes, because the energetics are perfectly fine — a germinating seed does exactly this every spring. Two riders keep the answer honest. The word net matters: fatty acid carbons do appear in glucose after passing through the citrate cycle, but two carbons enter and two leave as CO2, so nothing is gained. **The glycerol backbone of a triacylglycerol is glucogenic in animals too, so the honest claim is about the fatty acids and not about fat.** Glycerol enters gluconeogenesis after oxidation to dihydroxyacetone phosphate. A third rider is about where this answer comes from. One account goes no further than saying the pathway occurs in some microorganisms and plants; it never states in those words that animals lack it, and it never names the enzymes they are missing. Attributing the inability to genomes that encode neither isocitrate lyase nor malate synthase is standard biochemistry filling in that implicit scoping, not a sentence being quoted.",
      cn: "动物无法用乙酰-CoA 的那两个碳造出葡萄糖，而原因是缺了两个酶，而非任何能量上的障碍。丙酮酸脱氢酶那一步实际上不可逆，所以乙酰-CoA 走不回丙酮酸；而动物既没有异柠檬酸裂解酶、也没有苹果酸合酶，所以也没有绕道可走。答题时要把它说成「缺两个酶」，因为热力学完全没问题——每年春天，一颗萌发的种子都在做这件事。有两条补充能让答案诚实。第一，「净」这个字要紧：脂肪酸的碳确实会经柠檬酸循环出现在葡萄糖里，但进去两个碳、又有两个碳以 CO₂ 离开，所以没有净增。**第二，三酰甘油的甘油骨架在动物体内同样是生糖的——它被氧化成磷酸二羟丙酮后进入糖异生；所以老实的说法针对的是脂肪酸，而不是「脂肪」。**还有第三条，是关于这个答案从哪儿来的。有一种说法只讲到「这条途径见于某些微生物和植物」为止；它并没有用这样的措辞说动物缺乏它，也没有点出动物缺的是哪两个酶。把这份无能归因于「基因组既不编码异柠檬酸裂解酶、也不编码苹果酸合酶」，是标准生化知识把那处隐含的范围界定补齐，而不是在引用某一句原话。",
      src: "A p.736"
    },
    {
      link_en: "third destination: cellulose. Its difficulty is topological rather than chemical",
      link_cn: "第三个去向：纤维素。它的难处在拓扑，不在化学",
      recall_en: "the missing cytosolic pyrophosphatase, ten steps back, is what makes its supply line possible",
      recall_cn: "前面第四步里「胞质缺失的焦磷酸酶」，正是它的供应线得以成立的原因",
      en: "Cellulose is a linear β1→4 polymer that gives a plant cell wall its rigidity and stops the cell bursting when water flows in — more than 10^11 metric tons of it are made each year. **Cellulose must be synthesised from precursors inside the cell and deposited outside the plasma membrane, which is a problem starch and glycogen never have to solve.** The machine is a rosette: six particles in a hexagon about 30 nm across, each holding about three cellulose synthase molecules. UDP-glucose is taken on the cytoplasmic face and the growing chain extruded through a transmembrane channel. Three features follow. Synthesis has to be highly processive, because a chain longer than six to eight glucose units is insoluble and could never be re-bound once released — some run to 15,000 units. Six times three is eighteen, and eighteen chains crystallising side by side as they emerge is exactly one microfibril, which is why the machine is a hexamer and not a single enzyme. And the configuration inverts: glucose is α-linked in UDP-glucose and β1→4 in the product. The donor is supplied by sucrose synthase, an enzyme named after its reverse reaction — in the plant it takes sucrose apart, giving UDP-glucose plus fructose, and it can only run that way because the cytosol left its PPi in place.",
      cn: "纤维素是 β1→4 的线性聚合物，它给植物细胞壁刚性、并在水往里流时防止细胞胀破——全世界每年合成的量超过 10¹¹ 公吨。**纤维素必须用细胞内部的前体合成，却要沉积在质膜外面——这是淀粉和糖原从来不必解决的问题。**干这活的机器是一个 rosette（玫瑰花结）：六个颗粒排成一个约 30 nm 宽的正六边形，每个颗粒里大约装三个纤维素合酶分子。UDP-葡萄糖在胞质一侧被取用，正在延长的链经跨膜通道被挤到外面去。由此有三个特征：一，合成必须高度持续，因为超过 6–8 个葡萄糖单位的链就不溶于水，一旦松手就再也接不回去——有些链长达 15 000 个单位；二，六乘三等于十八，而十八条链在露出膜面时并排结晶，恰好就是一根微纤丝，这正是这台机器必须是六聚体而不是单个酶的原因；三，构型发生翻转：葡萄糖在 UDP-葡萄糖里是 α 连接的，在产物里却是 β1→4。供体由蔗糖合酶提供，这个酶是按它的逆反应命名的——在植物体内它做的事是把蔗糖拆开，生成 UDP-葡萄糖加果糖；而它之所以能朝这个方向跑，正是因为胞质把自己的 PPᵢ 留在了原地。",
      src: "A p.736–738, figures 20-46, 20-47",
      see: [
        { id: "7-4-1-2", en: "cellulose as a structural polysaccharide", cn: "作为结构多糖的纤维素" }
      ]
    },
    {
      link_en: "and the whole thing ends by dissolving its own headings",
      link_cn: "最后，整套内容把自己的小标题溶解掉",
      en: "The pathways here interconnect so completely that the useful picture is one of pools rather than of separate routes. Three pools are named: the hexose phosphates, the pentose 5-phosphates, and the triose phosphates. Within a pool the free-energy changes are small and the members re-equilibrate almost immediately, so draining one member is corrected at once — which is exactly why every regulator in this chain acts on the enzymes that move carbon between pools and between compartments, and never on the interconversions inside a pool. At the level of the whole plant the same logic gives source and sink. **A photosynthetic leaf exports sucrose into the phloem, its high sucrose content draws in water by osmosis, and the turgor pressure pushes the sap toward roots, tubers and bulbs.** In those tissues the sucrose becomes starch or fuel. And the direction reverses on a daily cycle: by day the leaf exports, and at night it lives off the starch it made and supplies the rest of the plant from that.",
      cn: "这里的各条通路彼此连通得如此彻底，以至于有用的图景是「一个个池子」，而不是「一条条独立的路线」。书上点名了三个池子：己糖磷酸、戊糖-5-磷酸、三碳糖磷酸。池子内部各成员之间的自由能变化很小，几乎立刻重新达到平衡，所以抽走其中一个成员会被马上补回来——这正是这条主线里每一个调控因子都作用在「把碳从一个池子搬到另一个池子、从一个隔间搬到另一个隔间」的酶上，而从不作用于池子内部相互转化的原因。在整株植物的层面上，同一套逻辑给出源与库。**进行光合作用的叶片把蔗糖输出到韧皮部，高蔗糖含量靠渗透把水吸进来，升高的膨压把汁液推向根、块茎和鳞茎，蔗糖在那里变成淀粉或燃料。**而这个方向每天翻转一次：白天叶片输出，夜里它靠自己白天造的淀粉过活，并由此供养植株其余部分。",
      src: "A p.738–740, figures 20-48, 20-49"
    },
    {
      link_en: "and one group of organisms runs the citrate cycle backwards to the same purpose, building carbon instead of burning it",
      link_cn: "还有一类生物把柠檬酸循环反过来用，目的相同：造碳而不是烧碳",
      recall_en: "the cycle that oxidises an acetyl group completely to two CO2, now with its degradative phase skipped",
      recall_cn: "那个把乙酰基彻底氧化成两个 CO2 的循环，现在把它的降解阶段整个跳过",
      en: "Some microorganisms and plants run a modification of the citrate cycle in which the acetyl group is not degraded at all. **The degradative phase is skipped, and acetyl-CoA is used instead to synthesise four-carbon dicarboxylic acids, which then feed other biosyntheses** — so the same set of enzymes that exists to burn carbon is run as a route for building it. That is what lets a germinating seed turn stored fat into sugar, which an animal cannot do, and it is the reason a plant can live on acetyl-CoA as a carbon source rather than only as a fuel.",
      cn: "某些微生物和植物运行的是柠檬酸循环的一种变体，其中乙酰基根本不被降解。**降解阶段被整个跳过，乙酰-CoA 转而被用来合成四碳二羧酸，后者再去供给别的生物合成** —— 于是同一套本来用于烧碳的酶，被当成造碳的路线来跑。正是这一点让萌发的种子能把储存的脂肪变成糖（动物做不到这件事），也正是植物能把乙酰-CoA 当碳源而不只是当燃料的原因。",
      src: "B §6.2.3, pp.140-141",
      see: [
        { id: "L-14-4-1", en: "why an animal cannot make glucose from acetyl-CoA, and what the glyoxylate cycle changes", cn: "动物为什么不能用乙酰-CoA 造葡萄糖，以及乙醛酸循环改变了什么" }
      ]
    }
  ],
  terms: [
    { en: "sugar nucleotide", cn: "糖核苷酸",
      def_en: "A monosaccharide carried on a nucleoside diphosphate, and the form in which glucose is always donated to a growing polysaccharide, never as the free sugar. The activation is thermodynamic: forming a glycosidic bond is close to isoenergetic and therefore reversible, so a high-energy phosphoanhydride bond is pre-attached and its cleavage drives the transfer one way. Which nucleotide is used marks the compartment.",
      def_cn: "挂在核苷二磷酸上的单糖，也是葡萄糖被交给正在延长的多糖时唯一的形式——从来不是游离的糖。活化的意义在热力学上：成糖苷键几乎不放能、因而可逆，所以先在糖身上预装一根高能磷酸酐键，靠它断裂把转移推成单向。用哪种核苷酸，标记的是隔间。" },
    { en: "the missing cytosolic pyrophosphatase", cn: "胞质中缺失的焦磷酸酶",
      def_en: "Inorganic pyrophosphatase hydrolyses PPi at about −19.2 kJ/mol, and in most cells its activity is what makes PPi-liberating biosynthetic reactions irreversible. In plants it is present in plastids and absent from the cytosol, so cytosolic PPi sits near 0.3 mM — high enough to keep reactions such as that of UDP-glucose pyrophosphorylase readily reversible. That reversibility is what lets sucrose synthase run backwards to supply the cellulose machinery.",
      def_cn: "无机焦磷酸酶水解 PPᵢ 约放出 −19.2 kJ/mol，在多数细胞里正是它的活性让放出 PPᵢ 的生物合成反应变得不可逆。在植物中它存在于质体、却不存在于胞质，所以胞质 PPᵢ 维持在约 0.3 mM——高到足以让 UDP-葡萄糖焦磷酸化酶那类反应保持可逆。正是这份可逆，让蔗糖合酶能倒着跑去供应纤维素机器。" },
    { en: "sucrose synthase", cn: "蔗糖合酶",
      def_en: "An enzyme named after the reverse of the reaction it actually catalyses in a plant. It runs sucrose plus UDP to UDP-glucose plus fructose — taking sucrose apart in order to regenerate an activated glucose donor — and a membrane-bound form supplies UDP-glucose locally to the cellulose synthesis complex. The name is a standing trap: this enzyme degrades sucrose, while sucrose 6-phosphate synthase makes it.",
      def_cn: "一个按其逆反应命名的酶。它实际跑的是蔗糖 + UDP → UDP-葡萄糖 + 果糖——把蔗糖拆开，以便再生出一个活化的葡萄糖供体；其膜结合形式就地把 UDP-葡萄糖供给纤维素合成复合体。这个名字是个长期的坑：它降解蔗糖，而造蔗糖的是蔗糖-6-磷酸合酶。" },
    { en: "fructose 2,6-bisphosphate in plants", cn: "植物中的果糖-2,6-二磷酸",
      def_en: "A pure regulator — an intermediate of no pathway — that decides whether cytosolic triose phosphate becomes sucrose or is burned. It inhibits fructose 1,6-bisphosphatase and stimulates the PPi-dependent phosphofructokinase, so a high concentration pushes the cell toward glycolysis and away from sucrose. Its level runs inversely to the rate of photosynthesis.",
      def_cn: "一个纯粹的调控分子——不是任何途径的中间物——由它决定胞质里的三碳糖磷酸是变成蔗糖还是被烧掉。它抑制果糖-1,6-二磷酸酶、激活依赖 PPᵢ 的磷酸果糖激酶，所以浓度高就把细胞推向糖酵解、推离蔗糖。它的水平与光合速率反向变化。" },
    { en: "the two-sided squeeze on triose phosphate", cn: "三碳糖磷酸受到的两头挤压",
      def_en: "Five-sixths of what the Calvin cycle makes must be recycled to regenerate the CO2 acceptor, so drawing off more than one-sixth slows or stops the cycle — that is the ceiling. But each such molecule also carries a phosphate group out of the chloroplast, so hoarding it starves the chloroplast of the Pi that ATP synthase needs — that is the floor.",
      def_cn: "Calvin 循环造出来的东西有六分之五必须回收，用来再生 CO₂ 受体，所以抽走超过六分之一就会拖慢乃至停住循环——这是上限。但每一个这样的分子离开时也带走一个磷酸基，囤着不放就等于让叶绿体缺了 ATP 合酶所需的 Pᵢ——这是下限。" },
    { en: "glyoxysome", cn: "乙醛酸循环体",
      def_en: "A specialised peroxisome appearing only during seed germination, housing both fatty acid oxidation and the glyoxylate cycle. Its existence is a design requirement: acetyl-CoA entering the mitochondrial citrate cycle would be decarboxylated twice and lost as CO2, so the fat-to-sugar route is kept physically apart from the machinery that would burn it. Only succinate is exported.",
      def_cn: "一种只在种子萌发期出现的特化过氧化物酶体，脂肪酸氧化和乙醛酸循环都在里面。它的存在是设计上的必然：乙酰-CoA 一旦进入线粒体的柠檬酸循环就会被脱羧两次、以 CO₂ 丢掉，所以「脂肪变糖」这条路必须在物理上远离那台会烧掉它的机器。输出的只有琥珀酸。" },
    { en: "isocitrate lyase and malate synthase", cn: "异柠檬酸裂解酶与苹果酸合酶",
      def_en: "The only two enzymes unique to the glyoxylate cycle, and the entire difference between a seed and an animal on the question of making sugar from fat. One splits isocitrate into succinate and glyoxylate instead of letting it be decarboxylated; the other condenses that glyoxylate with a second acetyl-CoA to give malate. Between them both decarboxylations of the citrate cycle are bypassed, so two acetyl groups yield a four-carbon product.",
      def_cn: "乙醛酸循环独有的仅有两个酶，也是「种子能把脂肪变成糖、动物不能」的全部差别所在。一个把异柠檬酸劈成琥珀酸和乙醛酸，不让它被脱羧；另一个把那个乙醛酸与第二分子乙酰-CoA 缩合成苹果酸。两者合起来绕过了柠檬酸循环的两次脱羧，于是两个乙酰基给出一个四碳产物。" },
    { en: "the cellulose rosette", cn: "纤维素 rosette 复合体",
      def_en: "The machine that solves cellulose's topological problem — the polymer must be built from cytosolic precursors and deposited outside the plasma membrane. Six particles in a hexagon about 30 nm across, each holding about three cellulose synthase molecules, take UDP-glucose on the cytoplasmic face and extrude the chain through a transmembrane channel. Six times three is eighteen chains, which co-crystallise as they emerge into exactly one microfibril.",
      def_cn: "解决纤维素拓扑难题的那台机器——聚合物必须用胞质里的前体来造，却要沉积在质膜外面。六个颗粒排成约 30 nm 宽的六边形，每个约含三个纤维素合酶分子，在胞质面取用 UDP-葡萄糖，把链经跨膜通道挤出去。六乘三是十八条链，它们一露头就并排结晶成恰好一根微纤丝。" },
    { en: "source and sink tissues", cn: "源组织与库组织",
      def_en: "The whole-plant version of the same logic. A tissue with net CO2 fixation — a photosynthetic leaf — exports sucrose into the phloem; the high sucrose content draws water in by osmosis and the raised turgor pressure pushes the sap toward roots, tubers and bulbs, where sucrose becomes starch, fuel, or hexose phosphates for the cell wall. The direction reverses between day and night.",
      def_cn: "同一套逻辑在整株植物层面上的版本。净固定 CO₂ 的组织——进行光合作用的叶片——把蔗糖输出到韧皮部；高蔗糖含量靠渗透吸水，升高的膨压把汁液推向根、块茎和鳞茎，蔗糖在那里变成淀粉、燃料，或供细胞壁用的己糖磷酸。这个方向在白天与夜里之间翻转。" }
  ]
};

/* ------------------ CO₂ 的同化 (9-15 … 9-19, L-20-4-1) ----
   Node → step map:
     9-15   1-2      9-17   5-7      9-19  10-13
     9-16   3-4      9-18   8-9      L-20-4-1  14-22
   Six member nodes, so twenty-two steps: the course book supplies the cycle itself,
   enzyme by enzyme through all thirteen numbered steps of its own figure, and the
   Lehninger member node supplies the switches that decide whether the cycle runs at
   all. One step carries `beyond`: the link between eight large subunits and eight
   active sites is an inference from the book's own two statements, and one recalled
   parallel with haemoglobin is chapter 5 material. */
window.BIOLITE_SPINE["key:co2-assimilation"] = {
  assumed: ["ATP", "ADP", "NADPH", "NADP+", "NADH", "NAD+", "CO2", "carbon dioxide",
            "O2", "oxygen", "H2O", "water", "Pi", "phosphate", "inorganic phosphate",
            "electron", "photon", "light", "proton", "pH", "Mg2+", "manganese",
            "chloroplast", "stroma", "thylakoid", "lumen", "plastid", "organelle",
            "membrane", "cytosol", "cell", "leaf", "plant", "animal", "enzyme",
            "coenzyme", "active site", "substrate", "allosteric regulation",
            "covalent modification", "phosphorylation", "disulfide bond", "lysine",
            "kinase", "phosphatase", "isomerase", "epimerase", "aldolase",
            "transketolase", "dehydrogenase", "carboxylase", "oxygenase",
            "carboxylation", "decarboxylation", "hydrolysis", "photosystem",
            "photosystem I", "photosynthesis", "charge separation", "ATP synthase",
            "ferredoxin", "thioredoxin", "photophosphorylation", "glycolysis",
            "gluconeogenesis", "pentose phosphate pathway", "pentose cycle",
            "citrate cycle", "citric acid cycle", "glycogen metabolism", "sucrose",
            "starch", "cellulose", "glucose", "fructose", "saccharide", "sugar",
            "hexose", "pentose", "triose", "triose phosphate", "aldose", "ketose",
            "glucose 6-phosphate", "fructose 6-phosphate",
            "fructose 1,6-bisphosphate", "dihydroxyacetone phosphate",
            "3-phosphoglycerate", "ribose 5-phosphate", "amino acid", "protein",
            "fatty acid", "lipid", "nucleotide", "nucleic acid", "pigment",
            "secondary metabolite", "haemoglobin", "hemoglobin", "antiporter",
            "Nobel Prize"],
  nodeTitle_en: "Photosynthetic fixation of CO2",
  nodeTitle_cn: "CO₂ 的光合固定",
  title_en: "Thirteen enzyme steps that turn air into sugar, of which only four fix and reduce carbon — and the switches that make sure none of them runs when the light is off",
  title_cn: "把空气变成糖的十三步酶促反应，其中真正固定并还原碳的只有四步——以及那些确保光一关它们就全停的开关",
  steps: [

    /* --------------------------------------------------------------- 9-15 ---- */
    {
      en: "The reactions of photosynthesis that follow immediately on the photochemical processes of the photosystems and on charge separation are summarised by a single arrow: CO2, acted on by the enzymes of the chloroplast and consuming NADPH and ATP, becomes C6H12O6. In higher plants the whole process takes place in the chloroplasts and consists of a series of enzyme reactions requiring ATP and the coenzyme NADPH. **Forming an organic compound, the saccharide C6H12O6, out of the inorganic compound CO2 is what is called the fixation, or the assimilation, of atmospheric carbon dioxide.**",
      cn: "紧接在光系统的光化学过程与电荷分离之后的那些光合反应，可以用一个箭头概括：CO₂ 在叶绿体的酶的作用下、消耗 NADPH 与 ATP，变成 C₆H₁₂O₆。在高等植物中，整个过程发生在叶绿体内，由一系列需要 ATP 和辅酶 NADPH 的酶促反应构成。**由无机化合物 CO₂ 生成有机化合物、也就是糖类 C₆H₁₂O₆ 的这件事，就叫大气二氧化碳的固定或同化。**",
      src: "B §9.1.4, p.209"
    },
    {
      link_en: "two names in common use for this stage each mislead in their own way",
      link_cn: "这一阶段有两个常用名称，各自以自己的方式误导人",
      en: "'Dark phase', or 'dark reaction', suggests that this conversion does not occur in the light, and it occurs in the light perfectly well. 'Light-independent photosynthetic reaction' is no better, because CO2 fixation is a sequence of reactions that runs, in light or in darkness, only for as long as there is a sufficient supply of the NADPH and ATP produced by the photosystems out of light energy. **What is true is narrower than either name: no step of CO2 fixation is itself photochemical, and in the dark the sequence runs on a supply the light has already made, until that supply is gone.**",
      cn: "「暗相」或「暗反应」暗示这种转换不在光下发生，而它在光下进行得很好。「不依赖光的光合反应」也不见得更好，因为 CO₂ 固定是一系列反应，它无论在光下还是黑暗中，都只在光系统用光能造出的 NADPH 与 ATP 供应充足的期间内运行。**真正成立的说法比这两个名字都窄：CO₂ 固定里没有任何一步本身是光化学反应；而在黑暗中，这串反应烧的是光已经造好的那份存货，存货用完就停。**",
      src: "B §9.1.4, p.209"
    },

    /* --------------------------------------------------------------- 9-16 ---- */
    {
      link_en: "the summary equation invites two further misreadings, and the first is about the atoms",
      link_cn: "总方程还会引出另外两种误读，第一种是关于原子的",
      en: "Six CO2 going to one C6H12O6 states how much carbon enters and how much sugar could be assembled out of it. **The carbon atoms of six CO2 molecules do not become part of one and the same saccharide molecule: that relation is a summary equation and not a claim about the fate of any particular six carbons.**",
      cn: "六个 CO₂ 变成一个 C₆H₁₂O₆，说的是有多少碳进来、以及用它能组装出多少糖。**进入反应的六个 CO₂ 分子的碳原子，并不会成为同一个糖分子的一部分：这个关系式只是一笔总账，而不是对某特定六个碳去向的论断。**",
      src: "B §9.1.4, p.209"
    },
    {
      link_en: "and the second is about what the whole business is for",
      link_cn: "第二种误读是关于「这件事到底是为了什么」",
      en: "The goal of photosynthetic CO2 fixation is not merely the synthesis of hexoses and subsequently of cellulose or starch. **The greater part of the fixed carbon is transported into the central metabolic pathways, the citrate cycle among them, and serves as a source of energy and of carbon for further biosyntheses.** Those biosyntheses are of other saccharides, amino acids, proteins, fatty acids, lipids, nucleotides, nucleic acids, pigments, and the so-called secondary plant metabolites, so essentially every class of biomolecule in a plant traces back to this point. The reactions of CO2 fixation were described by M. Calvin, who received the Nobel Prize in 1961, together with A. A. Benson and J. A. Bassham, and they are designated either by the names of their discoverers or, briefly, as the Calvin cycle.",
      cn: "光合 CO₂ 固定的目标并不只是合成己糖、进而合成纤维素或淀粉。**被固定的碳，更大的一部分被输送进中心代谢途径——书上举的例子是柠檬酸循环——在那里作为化学能源与碳源，供进一步的生物合成使用。**这些生物合成包括其他糖类、氨基酸、蛋白质、脂肪酸、脂质、核苷酸、核酸、色素，以及所谓的次生植物代谢物；也就是说，植物体内几乎每一类生物分子都可以追溯到这里。CO₂ 固定的各步反应由 M. Calvin（1961 年诺贝尔奖得主）与 A. A. Benson、J. A. Bassham 描述，人们或者用发现者的名字称呼它，或者简称为卡尔文循环。",
      src: "B §9.1.4, p.209"
    },

    /* --------------------------------------------------------------- 9-17 ---- */
    {
      link_en: "so start where the carbon comes in",
      link_cn: "那就从碳进来的地方开始",
      en: "The first reaction of the Calvin cycle is the capture of inorganic CO2 and its incorporation into the structure of an organic compound, ribulose-1,5-bisphosphate, abbreviated RuBP, which is a five-carbon sugar carrying one phosphate at each end. Chemically this reaction is a carboxylation. **The catalyst is ribulosebisphosphate carboxylase/oxygenase — RubisCO — a soluble protein located in the stroma of the chloroplasts and one of the most widespread high-molecular-mass proteins on Earth.** The double-barrelled name announces the oxygenase side-activity in advance — a second reaction, taking O2 instead of CO2, developed later as photorespiration.",
      cn: "卡尔文循环的第一步反应，是捕获无机的 CO₂ 并把它结合进一个有机化合物的结构里，这个化合物是核酮糖-1,5-二磷酸（缩写 RuBP），一个两端各带一个磷酸的五碳糖。就化学而言，这一步是羧化。**催化它的是核酮糖二磷酸羧化酶/加氧酶——RubisCO——一种位于叶绿体基质中的可溶蛋白，也是地球上分布最广的高分子量蛋白之一。**它这个双名称已经预先宣告了「加氧酶」这项副活性——那是另一个反应，接上去的是 O₂ 而不是 CO₂，后面会作为光呼吸展开。",
      src: "B §9.1.4, pp.209-210",
      see: [
        { id: "L-20-5-1", en: "what the oxygenase activity costs, and what plants do about it", cn: "加氧酶活性的代价，以及植物为此做了什么" }
      ]
    },
    {
      link_en: "its architecture is easy to garble, so count it once",
      link_cn: "它的构造很容易记岔，所以认真数一遍",
      en: "RubisCO consists of two types of subunit, small (S) and large (L), and the functional enzyme is a dimeric molecule composed of monomers each containing 4 small and 4 large subunits, drawn in top view and in side view. **The mechanism then has eight active sites, each catalysing the same conversion — and eight is what that subunit description gives, since a dimer of 4S+4L monomers carries 8 large subunits in total.**",
      cn: "RubisCO 由大小两类亚基构成，小的记作 S、大的记作 L；功能酶是一个二聚体分子，由每个含 4 个小亚基和 4 个大亚基的单体组成，书上画了俯视图与侧视图。**接着讲机理时出现的是八个活性位点，每一个都催化同样的转变——而「八」正是上面那套亚基描述给出的数：4S+4L 的单体成二聚体，一共带 8 个大亚基。**",
      src: "B §9.1.4, pp.209-210",
      beyond: true,
      beyondNote: "That the eight catalytic sites are carried by the eight large subunits is an inference joining the book's two statements — the 4S+4L dimer and the eight active sites. Pages 209-210 print both numbers and never connect them, so the connection is flagged rather than passed off as read off the page."
    },
    {
      link_en: "and the mechanism contains one surprise about which molecule is activated",
      link_cn: "而机理里藏着一个意外：被活化的到底是哪个分子",
      en: "Each of those active sites catalyses the conversion of RuBP into an enolate ion, also written endiolate, and that ion, being a reactive compound, is what can bind a CO2 molecule. **RubisCO activates RuBP and never activates CO2: a six-carbon intermediate arises, drawn as a β-oxo acid, and it hydrolyses very rapidly into two molecules of 3-phosphoglycerate.** The labelled sequence is therefore RuBP, then endiolate, then β-oxo acid, then two PG. The first stable product of CO2 fixation is accordingly 3-phosphoglycerate, a three-carbon compound, and plants using the Calvin cycle mechanism are called C-3 plants after it. Stable is doing the work in that sentence: the endiolate and the β-oxo acid come first, and neither of them persists.",
      cn: "这些活性位点中的每一个，都催化 RuBP 变成一个烯醇（烯二醇）负离子；这个离子是个活泼的化合物，正是它能够结合一个 CO₂ 分子。**RubisCO 活化的是 RuBP，从来不是 CO₂：随后生成一个六碳中间体，画作 β-氧代酸，它极迅速地水解成两分子 3-磷酸甘油酸。**所以图上标出的序列是：RuBP → 烯二醇 → β-氧代酸 → 两个 PG。于是 CO₂ 固定的第一个稳定产物是三碳的 3-磷酸甘油酸，采用卡尔文循环机制的植物也因此被称为 C-3 植物。「稳定」这个词在这里很关键：烯二醇和 β-氧代酸出现得更早，但两者都不持久。",
      src: "B §9.1.4, p.210"
    },

    /* --------------------------------------------------------------- 9-18 ---- */
    {
      link_en: "the next two steps are ones you have already learned, running the other way",
      link_cn: "接下来两步是你早就学过的，只是方向反过来",
      en: "3-Phosphoglycerate is converted in two steps, at the expense of ATP and NADPH, into glyceraldehyde-3-phosphate, abbreviated GAP. The two steps are named after their enzymes: phosphoglycerate kinase spends ATP and gives 1,3-bisphosphoglycerate, and glyceraldehyde phosphate dehydrogenase spends NADPH, releases inorganic phosphate and gives GAP. **This pair of steps is known from glycolysis, where it runs in the opposite direction: the reductive part of the Calvin cycle is the payoff phase of glycolysis played backwards, NADPH in place of NADH.**",
      cn: "3-磷酸甘油酸经两步、消耗 ATP 与 NADPH，转变为 3-磷酸甘油醛（缩写 GAP）。磷酸甘油酸激酶花掉 ATP，生成 1,3-二磷酸甘油酸；磷酸甘油醛脱氢酶花掉 NADPH、放出无机磷酸，生成 GAP。**这两步在糖酵解里已经出现过，只是那里方向相反：卡尔文循环的还原部分，就是糖酵解产能阶段的倒放，只把 NADH 换成了 NADPH。**",
      src: "B §9.1.4, p.210",
      see: [
        { id: "7-8-1", en: "glycolysis, where the same two steps run forwards", cn: "糖酵解——同样这两步在那里是正着跑的" }
      ]
    },
    {
      link_en: "and from here on nothing is oxidised or reduced any further",
      link_cn: "从这里往后，再没有任何东西被氧化或还原",
      en: "Glyceraldehyde-3-phosphate is the key compound of the Calvin cycle, the branch point at which carbon either leaves as product or continues round to regenerate the acceptor. It is worked up further by four possible pathways, and these involve only the modification and internal conversion of variously phosphorylated saccharides: isomerisation, which is aldose-ketose conversion; epimerisation, which is inversion of configuration at a single chiral centre; dephosphorylation; and phosphorylation. All four reaction types are already included in the pentose cycle, no carbon is oxidised or reduced here, and whichever pathway is taken the product is always ribulose-5-phosphate, abbreviated Ru5P. That compound is then phosphorylated by an ATP-dependent kinase to ribulose-1,5-bisphosphate, the starting compound of the whole process, and the cycle is thereby actually closed. **Counting cofactors around one turn gives two ATP-consuming steps — the phosphoglycerate kinase of the reductive part, and this kinase of the regeneration — against a single NADPH-consuming step.**",
      cn: "3-磷酸甘油醛是卡尔文循环的关键化合物，是碳的分岔点：或者作为产物离开，或者继续绕行以再生受体。它可经四条可能的途径被进一步处理，而这些途径只涉及各种磷酸化糖类的修饰与内部转换：异构化，也就是醛糖-酮糖互变；差向异构化，也就是单个手性中心构型的翻转；去磷酸化；以及磷酸化。这四类反应在磷酸戊糖循环里全都出现过，这一段中没有任何碳被进一步氧化或还原，而且无论走哪条途径，产物永远是核酮糖-5-磷酸（缩写 Ru5P）。随后 Ru5P 被一个 ATP 依赖性激酶磷酸化为核酮糖-1,5-二磷酸，也就是整个过程的起始化合物，循环由此真正闭合。**把一圈里的辅因子数一数：耗 ATP 的有两步——还原部分的磷酸甘油酸激酶，和再生这一步的激酶；耗 NADPH 的只有一步。**",
      src: "B §9.1.4, p.210",
      see: [
        { id: "7-7-1", en: "the pentose phosphate pathway, where these four reaction types come from", cn: "这四类反应的来处：磷酸戊糖途径" }
      ]
    },

    /* --------------------------------------------------------------- 9-19 ---- */
    {
      link_en: "now the whole cycle enzyme by enzyme, in the order the figure numbers them",
      link_cn: "现在按图上的编号顺序，把整个循环一个酶一个酶地走一遍",
      en: "The full scheme has thirteen numbered enzyme steps, and the first four are the fixation and reduction half. **Steps 1 to 4 are the fixation and reduction half, in this order: phosphoribulokinase, ribulosebisphosphate carboxylase, phosphoglycerate kinase, glyceraldehyde-3-phosphate dehydrogenase.** Step 1 makes ribulose-1,5-bisphosphate out of ribulose-5-phosphate at the cost of ATP; step 2 adds CO2 and yields two 3-phosphoglycerates; step 3 spends ATP and gives 1,3-bisphosphoglycerate; step 4 spends NADPH, releases Pi, and gives glyceraldehyde-3-phosphate.",
      cn: "完整的图有十三个编号的酶促步骤，前四步是固定与还原的那一半。**第 1 到 4 步是固定与还原的那一半，依次是：磷酸核酮糖激酶、核酮糖二磷酸羧化酶、磷酸甘油酸激酶、3-磷酸甘油醛脱氢酶。**第 1 步耗 ATP，由核酮糖-5-磷酸造出核酮糖-1,5-二磷酸；第 2 步加上 CO₂，产出两分子 3-磷酸甘油酸；第 3 步花掉 ATP，生成 1,3-二磷酸甘油酸；第 4 步花掉 NADPH、放出 Pᵢ，生成 3-磷酸甘油醛。",
      src: "B §9.1.4, pp.211-212"
    },
    {
      link_en: "and at the fourth step the product carbon walks out of the diagram",
      link_cn: "而在第 4 步，将要变成产物的碳就走出了这张图",
      en: "The arrow labelled 'products' leaves the cycle at glyceraldehyde-3-phosphate, and everything drawn after that point exists only to regenerate the acceptor. Step 5 is triose phosphate isomerase, which interconverts GAP and dihydroxyacetone phosphate. **Step 6 is aldolase, condensing those two trioses into fructose-1,6-bisphosphate, and step 7 is fructose bisphosphatase, hydrolysing off a phosphate to give fructose-6-phosphate.**",
      cn: "标着「产物」的箭头是在 3-磷酸甘油醛这里离开循环的，而图上此点之后的一切，存在的唯一理由就是把受体再生出来。第 5 步是磷酸丙糖异构酶，在 GAP 与磷酸二羟丙酮之间互变。**第 6 步是醛缩酶，把这两个三碳糖缩合成果糖-1,6-二磷酸；第 7 步是果糖二磷酸酶，水解掉一个磷酸，给出果糖-6-磷酸。**",
      src: "B §9.1.4, pp.211-212"
    },
    {
      link_en: "four steps of pure carbon shuffling follow, and two enzymes are used twice",
      link_cn: "接下来是四步纯粹的碳骨架搬运，其中两个酶各用了两次",
      en: "Step 8 is transketolase, giving erythrose-4-phosphate and xylulose-5-phosphate; step 9 is aldolase for the second time, giving sedoheptulose-1,7-bisphosphate, a seven-carbon bisphosphate; step 10 is sedoheptulose bisphosphatase, releasing Pi to give sedoheptulose-7-phosphate; step 11 is transketolase again, giving ribose-5-phosphate and xylulose-5-phosphate. **Aldolase and transketolase each act at two different points of the cycle, which is why each of them carries two of the thirteen numbers.**",
      cn: "第 8 步是转酮酶，生成赤藓糖-4-磷酸与木酮糖-5-磷酸；第 9 步是醛缩酶第二次出场，生成景天庚酮糖-1,7-二磷酸，一个七碳的二磷酸；第 10 步是景天庚酮糖二磷酸酶，放出 Pᵢ 生成景天庚酮糖-7-磷酸；第 11 步是转酮酶再次出场，生成核糖-5-磷酸与木酮糖-5-磷酸。**醛缩酶和转酮酶各自在循环的两个不同位点起作用，所以在这十三个编号里，它们两个各占了两个号。**",
      src: "B §9.1.4, pp.211-212"
    },
    {
      link_en: "two pentoses, one destination, and then the net yield",
      link_cn: "两种戊糖、一个终点，然后是净产出",
      en: "Step 12 is phosphopentose epimerase, converting xylulose-5-phosphate into ribulose-5-phosphate, and step 13 is ribose phosphate isomerase, converting ribose-5-phosphate into ribulose-5-phosphate: two different pentoses, one common destination, which is the concrete form of the claim that the end point is always Ru5P. Two of the thirteen steps are bisphosphatases releasing Pi — fructose bisphosphatase at 7 and sedoheptulose bisphosphatase at 10. **Those two hydrolytic steps are what make the regenerative arm run one way only, and they are accordingly the natural regulatory points of the whole cycle.** The net yield is one molecule of fructose-6-phosphate, transformed via glucose-6-phosphate onward to glucose, to cellulose, and into the general metabolic pathways: glycolysis, the citrate cycle, and the biosyntheses.",
      cn: "第 12 步是磷酸戊糖差向异构酶，把木酮糖-5-磷酸转成核酮糖-5-磷酸；第 13 步是核糖磷酸异构酶，把核糖-5-磷酸转成核酮糖-5-磷酸：两种不同的戊糖，一个共同的终点——这正是「终点永远是 Ru5P」那句话的具体形式。十三步里有两步是放出 Pᵢ 的二磷酸酶：第 7 步的果糖二磷酸酶和第 10 步的景天庚酮糖二磷酸酶。**正是这两步水解，使再生这条臂只能朝一个方向运行；它们也因此成为整个循环天然的调控位点。**净产出是一分子果糖-6-磷酸，它经葡萄糖-6-磷酸继续走向葡萄糖、纤维素，以及一般代谢途径：糖酵解、柠檬酸循环和各类生物合成。",
      src: "B §9.1.4, pp.211-212"
    },

    /* ----------------------------------------------------------- L-20-4-1 ---- */
    {
      link_en: "the cycle is now complete. Everything that follows is about whether it is allowed to run",
      link_cn: "循环到这里讲完了。以下全部是关于「它有没有被允许运转」",
      en: "The Calvin cycle is reductive and expensive, spending ATP and NADPH on every turn. Running it in the dark would be doubly wrong — there is no ATP or NADPH to run it with, and the carbon it fixed would have to come out of the sugar the leaf made during the day. So every regulatory device below answers one question: is the light on? Four devices are named: reduction of disulfide bonds by electrons flowing from photosystem I, the changes in pH and Mg2+ concentration that illumination produces, ordinary allosteric regulation by metabolic intermediates, and covalent modification by phosphorylation. **The last two are the mechanisms already familiar from glycolysis and glycogen metabolism; the first two exist only in an organelle that is being illuminated, and they carry most of the answer.**",
      cn: "卡尔文循环是还原性的，而且很贵：每转一圈都要花掉 ATP 和 NADPH。在黑暗里跑它是双重错误——既没有 ATP 和 NADPH 可用，它固定的碳还得从叶片白天造好的糖里掏出来。所以下面每一个调控装置，回答的都是同一个问题：光开着吗？书上列了四个装置：来自光系统 I 的电子对二硫键的还原、光照引起的 pH 与 Mg²⁺ 浓度变化、代谢中间物的常规别构调节，以及磷酸化这种共价修饰。**后两个是糖酵解和糖原代谢里早就熟悉的机制；前两个只存在于「正在被光照的细胞器」里，而答案主要由它们承担。**",
      src: "A p.719, §20.4"
    },
    {
      link_en: "before the switches, two numbers that explain why a switch is worth building",
      link_cn: "在讲开关之前，先看两个数字——它们解释了「为什么值得造一个开关」",
      en: "Rubisco is extraordinarily slow: at 25 °C one rubisco molecule fixes only three CO2 per second. Plants compensate with sheer quantity — about 250 mg/mL in the stroma, an active-site concentration near 4 mM, almost half of all soluble chloroplast protein, and probably the most abundant enzyme in the biosphere. **Read the two facts as one chain: slow enzyme, therefore enormous quantity, therefore an enormous investment of nitrogen in one protein, therefore worth switching it off when it cannot be used.** That chain is the reason the rest of this material exists.",
      cn: "rubisco 慢得离谱：25 °C 下一个 rubisco 分子每秒只固定 3 个 CO₂。植物的对策是堆数量——基质中约 250 mg/mL，活性位点浓度约 4 mM，占叶绿体可溶性蛋白将近一半，很可能是整个生物圈里最丰富的酶。**这两个事实要当成一条因果链来读：酶慢，所以要造得极多；造得极多，就等于把巨量的氮压在一个蛋白上；压得这么重，就非常值得在它用不上的时候把它关掉。**这条链，就是后面所有内容存在的理由。",
      src: "A p.720"
    },
    {
      link_en: "and the first surprise: this enzyme does not work as made",
      link_cn: "第一个意外：这个酶造出来是不能直接用的",
      recall_en: "the same chemistry appears in haemoglobin — CO2 carbamoylating a protein to change what it does",
      recall_cn: "同样的化学在血红蛋白那里出现过——CO₂ 通过氨甲酰化改变一个蛋白的行为",
      en: "A rubisco molecule must be activated before it can catalyse anything. A CO2 molecule reacts non-enzymatically with the amino group of a lysine in the active site, producing a carbamoyl-lysine — a lysine side chain carrying a carbamate group, Lys-NH-COO−. That carbamate carries a negative charge, the negative charge creates a binding site for Mg2+, and only the Mg2+ form of the enzyme is active. **CO2 is rubisco's activator and rubisco's substrate at the same time, at two different sites, and they are two different CO2 molecules.** One is bonded to the lysine and never becomes sugar; the other is added to ribulose 1,5-bisphosphate and does. Two things follow. Raising the CO2 concentration does more than supply substrate — it also raises the fraction of enzyme that is switched on, so the response to elevated CO2 is larger than a plain substrate-saturation argument predicts. And because carbamoylation is a reaction of a free amino group, it goes faster in alkaline conditions, which is the hinge connecting it to the light-induced pH rise two steps below.",
      cn: "一个 rubisco 分子必须先被激活，才能催化任何反应。一个 CO₂ 分子会非酶促地与活性位点上一个赖氨酸的氨基反应，生成氨甲酰赖氨酸——也就是侧链上挂了一个氨甲酰基的赖氨酸，Lys-NH-COO⁻。这个氨甲酰基带负电，负电荷造出一个 Mg²⁺ 结合位点，而只有结合了 Mg²⁺ 的那种形式才有活性。**CO₂ 同时是 rubisco 的激活剂和它的底物，作用在两个不同的位点上，而且是两个不同的 CO₂ 分子。**一个接在赖氨酸上、永远不会变成糖；另一个被加到核酮糖-1,5-二磷酸上、会变成糖。由此有两个推论：第一，提高 CO₂ 浓度不只是「多给底物」，它同时提高了处于开启状态的酶的比例，所以对高 CO₂ 的响应比单纯的底物饱和论证所预测的更大；第二，氨甲酰化是一个自由氨基参与的反应，因此在碱性条件下更快——这正是它与两步之后「光引起的 pH 上升」之间的铰链。",
      src: "A p.721, figure 20-30",
      beyond: true,
      beyondNote: "The parallel with carbaminohaemoglobin — CO2 carbamoylating the N-terminal amino groups of haemoglobin and lowering its oxygen affinity — is chapter 5 material, carried in here because it is the same chemistry; pp.719-727 do not mention it."
    },
    {
      link_en: "and a second surprise that inverts what enzyme kinetics taught you",
      link_cn: "第二个意外，它把酶动力学教给你的直觉倒了过来",
      en: "Ribulose 1,5-bisphosphate is rubisco's own substrate. **It binds tightly to an uncarbamoylated active site and locks the enzyme closed with the lysine out of reach, so what the substrate inhibits is activation and not catalysis.** An uncarbamoylated rubisco holding its substrate is a dead end: it cannot turn the substrate over because it was never switched on, and it cannot be switched on because the substrate is in the way. The plant's answer is an enzyme whose entire job is to rescue another enzyme from its own substrate — rubisco activase promotes an ATP-dependent release of the bound ribulose 1,5-bisphosphate, freeing the lysine for CO2 and then for Mg2+. Note the cost: activating rubisco itself spends ATP, so it only makes sense while the light reactions are running.",
      cn: "核酮糖-1,5-二磷酸就是 rubisco 自己的底物。**它会牢牢结合在尚未氨甲酰化的活性位点上，把酶锁在关闭构象里、让赖氨酸够不着；所以它抑制的是「激活」，而不是「催化」。**一个还没氨甲酰化、却已经抓着底物的 rubisco 就是死局：它没法把底物转化掉，因为它压根没被打开；它也没法被打开，因为底物挡在那儿。植物的解法是造一个酶，专门负责把另一个酶从它自己的底物手里救出来——rubisco activase 以耗 ATP 的方式促使已结合的核酮糖-1,5-二磷酸释放，把赖氨酸腾出来交给 CO₂、再交给 Mg²⁺。注意它的代价：激活 rubisco 本身就要花 ATP，所以这件事只在光反应正在运转时才划算。",
      src: "A p.721"
    },
    {
      link_en: "now the second device, and it needs no receptor at all",
      link_cn: "接下来是第二个装置，它完全不需要任何受体",
      recall_en: "closes the loop opened two steps up, where carbamoylation was said to prefer alkaline conditions",
      recall_cn: "把上面两步埋下的伏笔收回来——氨甲酰化偏好碱性条件",
      en: "Pumping protons out of the stroma into the thylakoid lumen — the space enclosed by the flattened membrane sacs inside the chloroplast — does two things in one event. The first is the gradient that drives ATP synthase. The second is that the compartment the protons left turns alkaline, stromal pH rising from about 7 to about 8, while Mg2+ flows the other way as charge compensation, from 1–3 mM up to 3–6 mM in the stroma. Several stromal enzymes have simply evolved pH optima and Mg2+ requirements sitting exactly where the illuminated stroma sits, so there is no receptor, no second messenger and no cascade. Rubisco is the first example: the same event that supplies it with ATP and NADPH also raises the pH that speeds its carbamoylation and supplies the Mg2+ that completes its active site. **Fructose 1,6-bisphosphatase is the second, and illumination raises its activity more than a hundredfold, which is the return on one pH unit and a few millimolar of Mg2+.**",
      cn: "把质子从基质泵进类囊体腔——也就是叶绿体内那些扁平膜囊围起来的空间——这一个动作同时干了两件事。第一件是产生驱动 ATP 合酶的梯度；第二件是质子离开的那个区室变碱了——基质 pH 从约 7 升到约 8，同时 Mg²⁺ 作为电荷补偿反向流动，把基质中的 Mg²⁺ 从 1–3 mM 抬到 3–6 mM。好几个基质酶干脆把自己的 pH 最适值和 Mg²⁺ 需求，演化到正好落在「被光照的基质」所处的位置上，于是这里没有受体、没有第二信使、没有级联。第一个例子就是 rubisco：给它送来 ATP 和 NADPH 的那同一个事件，同时抬高了让它氨甲酰化更快的 pH，又送来了补全它活性位点的 Mg²⁺。**第二个例子是果糖-1,6-二磷酸酶：光照使它的活性上升一百倍以上——这就是一个 pH 单位加几毫摩尔 Mg²⁺ 换来的回报。**",
      src: "A p.725, figure 20-36"
    },
    {
      link_en: "one transporter is easy to skim past, and it is doing two jobs at once",
      link_cn: "有一个转运体很容易被一眼扫过，而它一次干了两件事",
      en: "The inner chloroplast membrane is impermeable to most phosphorylated compounds, fructose 6-phosphate, glucose 6-phosphate and fructose 1,6-bisphosphate among them, and that impermeability is what makes the stroma a separate metabolic compartment at all. What can cross is one specific antiporter, an exchanger that swaps one Pi for one triose phosphate, either dihydroxyacetone phosphate or 3-phosphoglycerate. Count what a single exchange achieves: carbon leaves for the cytosol, where it starts sucrose synthesis, and Pi enters the stroma, where photophosphorylation needs it. **Because the exchange is one for one, carbon cannot leave unless phosphate comes in, which is why a chloroplast exporting too little triose phosphate runs out of Pi and stalls.**",
      cn: "叶绿体内膜对大多数磷酸化化合物不通透，包括果糖-6-磷酸、葡萄糖-6-磷酸和果糖-1,6-二磷酸；正是这种不通透，才使基质成为一个独立的代谢区室。能跨膜的是一个专一的反向转运体，它以 1 个 Pᵢ 换 1 个三碳糖磷酸——换出的是磷酸二羟丙酮或 3-磷酸甘油酸。数一数一次交换办成了什么：碳被送到胞质，在那里开始合成蔗糖；同时 Pᵢ 进入基质，而光合磷酸化正需要它。**由于交换是一比一的，碳不出则磷不入、磷不入则碳不走——所以一个三碳糖磷酸输出太少的叶绿体，会因为缺 Pᵢ 而停摆。**",
      src: "A p.724, figures 20-33, 20-34",
      see: [
        { id: "L-20-6-1", en: "where the exported triose phosphate goes", cn: "输出去的三碳糖磷酸后来去了哪里" }
      ]
    },
    {
      link_en: "and now the most elegant device, because what it reads is not a concentration",
      link_cn: "接下来是最精巧的那个装置——因为它读的根本不是浓度",
      en: "Assimilating CO2 needs a lot of ATP and NADPH, and both rise in the stroma on illumination; the plant measures neither, and taps the electron stream itself. Electrons flow from photosystem I to ferredoxin; an enzyme called ferredoxin:thioredoxin reductase passes them to thioredoxin, which is a small soluble protein carrying a disulfide bond; reduced thioredoxin then cleaves a critical disulfide bond in each target enzyme, and that reductive cleavage brings a conformational change which raises the enzyme's activity. **What is sensed is the reduced state of ferredoxin, which exists only while photosystem I is turning over, so the targets are on while photons arrive and off within seconds of their stopping.** No metabolite has to accumulate or decay: it is the difference between reading a fuel gauge and reading the ignition.",
      cn: "同化 CO₂ 要花大量 ATP 和 NADPH，光照时这两者在基质里都会升高；而植物两个都不测量，它直接从电子流上接线。电子从光系统 I 流到铁氧还蛋白（ferredoxin）；一个叫 ferredoxin:thioredoxin 还原酶的酶把电子交给硫氧还蛋白（thioredoxin），那是一个带二硫键的小可溶蛋白；还原态的 thioredoxin 再去把每个靶酶上的一个关键二硫键切开，而这次还原性断裂带来一次构象改变，使该酶活性上升。**被感知的是 ferredoxin 的还原状态——只有在光系统 I 正在周转时它才存在；于是靶酶在光子到达期间是开的，光子一停几秒内就关。**全程不需要任何代谢物先积累起来或先降解掉：这相当于「看油表」和「看点火开关」的区别。",
      src: "A p.725–727, figure 20-37"
    },
    {
      link_en: "which enzymes get this switch is not arbitrary, and one of them gets it backwards",
      link_cn: "这个开关装在哪几个酶上并不是随便挑的，而其中一个装反了",
      recall_en: "the two bisphosphatases are the same two irreversible steps counted in the thirteen",
      recall_cn: "那两个二磷酸酶，正是十三步里数出来的那两个不可逆步骤",
      en: "Four Calvin cycle enzymes are activated this way, and three are named: ribulose 5-phosphate kinase, fructose 1,6-bisphosphatase and sedoheptulose 1,7-bisphosphatase. The two bisphosphatases are the cycle's irreversible steps, and ribulose 5-phosphate kinase is the ATP-spending step that commits carbon to making the acceptor rubisco will use, so the light switch has been placed on the irreversible, committing, energy-spending steps. Then one enzyme reads the same signal the other way. Glucose 6-phosphate dehydrogenase is the first enzyme of the oxidative pentose phosphate pathway, the route that makes NADPH by oxidising glucose 6-phosphate, and reduction of a critical disulfide by electrons from ferredoxin inactivates it. **One pathway makes NADPH by oxidising sugar while the Calvin cycle spends NADPH to make sugar, so the reduction that switches the Calvin enzymes on switches the competing enzyme off.**",
      cn: "有四个卡尔文循环的酶用这种方式被激活，书上点名了三个：核酮糖-5-磷酸激酶、果糖-1,6-二磷酸酶、景天庚酮糖-1,7-二磷酸酶。两个二磷酸酶正是循环里不可逆的那两步，而核酮糖-5-磷酸激酶是那个花 ATP、把碳投入「制造 rubisco 要用的受体」的承诺步骤——也就是说，光开关被装在了不可逆的、承诺性的、耗能的步骤上。接着有一个酶把同一个信号读反了：葡萄糖-6-磷酸脱氢酶是氧化磷酸戊糖途径的第一个酶，那条途径靠氧化葡萄糖-6-磷酸来生产 NADPH，而来自 ferredoxin 的电子把它的一个关键二硫键还原，结果是使它失活。**一条途径靠氧化糖来产 NADPH，而卡尔文循环靠消耗 NADPH 来造糖；于是把卡尔文那几个酶打开的那次还原，同时把竞争者关掉。**",
      src: "A p.725–726"
    },
    {
      link_en: "collapse the whole thing into one sentence, then say what it does not cover",
      link_cn: "把整套东西收成一句话，再说清它没有覆盖什么",
      en: "Every device here answers the question is the light on, and each answers it by reading a different physical consequence of the light reactions running. Rubisco reads CO2 through carbamoylation and Mg2+ through its active-site complex, both favoured by the alkaline stroma; fructose 1,6-bisphosphatase reads pH and Mg2+ directly and gains over a hundredfold; four enzymes read the redox state of ferredoxin, the most immediate report of photosystem I turnover there is, and glucose 6-phosphate dehydrogenase reads the same signal and does the opposite; the Pi antiporter enforces the accounting that ties carbon export to phosphate import. None of these is a receptor and none is a hormone — they are enzymes whose properties sit where the illuminated stroma sits. **All of that explains what switches the cycle on and off, and says nothing about how fast it runs once on: that is set by rubisco's three per second, and by a competing reaction with O2.**",
      cn: "这里的每一个装置都在回答「光开着吗」，而每一个都是通过读取「光反应正在运转」的某一个不同的物理后果来回答的。rubisco 经氨甲酰化读 CO₂、经活性位点复合物读 Mg²⁺，而这两件事都被偏碱的基质所偏好；果糖-1,6-二磷酸酶直接读 pH 和 Mg²⁺，增益一百倍以上；四个酶读 ferredoxin 的氧化还原态——那是关于「光系统 I 是否在周转」最直接的报告；葡萄糖-6-磷酸脱氢酶读同一个信号，作用相反；Pᵢ 反向转运体则强制执行「碳出必须磷入」这本账。这里没有一个是受体，也没有一个是激素——它们只是一些把自身性质安放在「被光照的基质」所处位置上的酶。**以上解释的全都是循环怎样被打开和关闭，完全没有说它开着的时候跑多快：那由 rubisco 每秒三个的速率，以及一个与 O₂ 竞争的反应决定。**",
      src: "A p.719–727",
      see: [
        { id: "L-20-5-1", en: "the competing reaction with O2, and what plants do about it", cn: "那个与 O₂ 竞争的反应，以及植物为此做了什么" }
      ]
    }
  ],
  terms: [
    { en: "fixation of CO2", cn: "CO₂ 固定",
      def_en: "Incorporation of inorganic carbon dioxide into an organic compound, in the chloroplast stroma, by chloroplast enzymes, at the expense of ATP and NADPH. Also called assimilation of atmospheric carbon dioxide. No step of it is itself photochemical, and in the dark it runs only as long as the supply the light made holds out.",
      def_cn: "把无机的二氧化碳结合进有机化合物，在叶绿体基质里、由叶绿体的酶完成，代价是 ATP 与 NADPH。也叫大气二氧化碳的同化。它没有任何一步本身是光化学反应，而在黑暗中它只能靠光先前造好的那份存货维持。" },
    { en: "summary equation", cn: "总方程",
      def_en: "An equation stating only the net stoichiometry of what goes in and what comes out. It makes no claim about which atom ends up where, so reading 6 CO2 to C6H12O6 as though those six carbons landed in one sugar molecule is the error the book warns against.",
      def_cn: "只陈述投入与产出净化学计量的方程式。它对「哪个原子最后落在哪里」什么都没说，所以把 6 CO₂ → C₆H₁₂O₆ 读成「那六个碳落进同一个糖分子」，正是教材警告的那个错误。" },
    { en: "RubisCO", cn: "RubisCO（核酮糖二磷酸羧化酶/加氧酶）",
      def_en: "The soluble stromal enzyme catalysing the first reaction of the Calvin cycle, and one of the most widespread high-molecular-mass proteins on Earth: a dimer of monomers each carrying 4 small and 4 large subunits, with eight active sites. It is also extraordinarily slow, three CO2 per second per molecule at 25 °C, which is why a plant carries so much of it.",
      def_cn: "催化卡尔文循环第一步反应的可溶性基质酶，也是地球上分布最广的高分子量蛋白之一：由每个含 4 个小亚基和 4 个大亚基的单体构成的二聚体，共八个活性位点。它同时慢得离谱，25 °C 下每分子每秒只固定 3 个 CO₂——这正是植物要把它造得那么多的原因。" },
    { en: "endiolate", cn: "烯二醇（烯醇）离子",
      def_en: "The reactive intermediate formed from ribulose-1,5-bisphosphate by RubisCO, and the nucleophile that actually attacks CO2. Its existence is the point of the mechanism: the enzyme activates its sugar substrate, and never activates the carbon dioxide.",
      def_cn: "RubisCO 由核酮糖-1,5-二磷酸生成的那个活泼中间物，也是真正去进攻 CO₂ 的亲核体。它的存在就是整个机理的要点：酶活化的是自己的糖底物，从不活化二氧化碳。" },
    { en: "C-3 plants", cn: "C-3 植物",
      def_en: "Plants whose first stable product of CO2 fixation is the three-carbon 3-phosphoglycerate, that is, those using the Calvin cycle directly. The word stable carries the definition: an enolate ion and a six-carbon β-oxo acid both come earlier, and neither persists.",
      def_cn: "CO₂ 固定的第一个稳定产物是三碳的 3-磷酸甘油酸的那些植物，也就是直接使用卡尔文循环的植物。「稳定」二字承担着定义：一个烯二醇负离子和一个六碳 β-氧代酸都出现得更早，但两者都不持久。" },
    { en: "carbamoylation of rubisco", cn: "rubisco 的氨甲酰化",
      def_en: "The covalent activation step. A CO2 molecule reacts non-enzymatically with the amino group of an active-site lysine to give a carbamoyl-lysine, whose negative charge creates the Mg2+ site; only the Mg2+ complex works. So carbon dioxide acts as both substrate and activator, at different sites and as different molecules. Being a reaction of a free amino group, it goes faster in alkaline conditions.",
      def_cn: "那一步共价激活。一个 CO₂ 分子非酶促地与活性位点上赖氨酸的氨基反应，生成氨甲酰赖氨酸，它的负电荷造出 Mg²⁺ 位点；只有结合 Mg²⁺ 的复合物才有活性。于是二氧化碳既是底物又是激活剂，位点不同、分子也不同。因为这是自由氨基参与的反应，碱性条件下更快。" },
    { en: "rubisco activase", cn: "rubisco 活化酶",
      def_en: "An ATP-dependent enzyme whose whole job is to rescue another enzyme from its own substrate. Ribulose 1,5-bisphosphate binds tightly to an uncarbamoylated active site and locks it closed with the lysine unreachable, so the substrate inhibits activation rather than catalysis; this enzyme promotes ATP-dependent release of that bound substrate. Switching rubisco on therefore costs ATP, so it only pays while the light reactions run.",
      def_cn: "一个耗 ATP 的酶，全部职责就是把另一个酶从它自己的底物手里救出来。核酮糖-1,5-二磷酸牢牢结合在尚未氨甲酰化的活性位点上，把它锁成关闭构象、赖氨酸够不着，所以底物抑制的是激活而不是催化；这个酶以耗 ATP 的方式促使那份底物释放。于是「把 rubisco 打开」本身就要花 ATP，只有光反应在跑时才划算。" },
    { en: "the light-induced stromal pH and Mg2+ shift", cn: "光照引起的基质 pH 与 Mg²⁺ 位移",
      def_en: "The signal with no receptor. Pumping protons out of the stroma into the thylakoid lumen makes the gradient that drives ATP synthase and, in the same act, leaves the stroma alkaline — pH about 7 to about 8. Mg2+ moves the other way as charge compensation, from 1–3 mM to 3–6 mM. Several stromal enzymes have pH optima and Mg2+ requirements placed exactly there, so illumination activates them with no signalling machinery at all.",
      def_cn: "一个没有受体的信号。把质子从基质泵进类囊体腔，既造出驱动 ATP 合酶的梯度，也在同一个动作里让基质变碱——pH 从约 7 到约 8。Mg²⁺ 作为电荷补偿反向移动，从 1–3 mM 到 3–6 mM。好几个基质酶的 pH 最适值和 Mg²⁺ 需求恰好就落在那里，于是光照不靠任何信号机器就把它们激活了。" },
    { en: "the ferredoxin-thioredoxin system", cn: "ferredoxin–thioredoxin 系统",
      def_en: "The relay that turns light into enzyme activity. Electrons from photosystem I reach ferredoxin; ferredoxin:thioredoxin reductase passes them to thioredoxin, a small soluble disulfide-containing protein; reduced thioredoxin cleaves a critical disulfide in each target, and the reduction brings a conformational change that raises activity. What is sensed is the reduced state of ferredoxin, which exists only while photosystem I turns over — an ignition switch rather than a fuel gauge.",
      def_cn: "把光变成酶活性的那条中继线。来自光系统 I 的电子到达 ferredoxin；ferredoxin:thioredoxin 还原酶把它们交给 thioredoxin，一个带二硫键的小可溶蛋白；还原态的 thioredoxin 切开每个靶酶上的一个关键二硫键，这次还原带来构象改变、抬高活性。被感知的是 ferredoxin 的还原状态，而它只在光系统 I 周转时存在——这是点火开关，不是油表。" },
    { en: "the Pi / triose phosphate antiporter", cn: "Pᵢ／三碳糖磷酸反向转运体",
      def_en: "A one-for-one exchanger in the inner chloroplast membrane, which is otherwise impermeable to phosphorylated compounds — that impermeability is what makes the stroma a separate metabolic compartment. It swaps inorganic phosphate for dihydroxyacetone phosphate or 3-phosphoglycerate, doing two jobs in one event: exporting carbon to the cytosol as the start of sucrose synthesis, and importing the phosphate photophosphorylation needs.",
      def_cn: "叶绿体内膜上的一个一比一交换器；这层膜对磷酸化化合物本来不通透，而正是这种不通透使基质成为独立的代谢区室。它用无机磷酸换磷酸二羟丙酮或 3-磷酸甘油酸，一次交换办两件事：把碳送到胞质、作为蔗糖合成的开端，同时把光合磷酸化所需的磷酸运进来。" }
  ]
};
