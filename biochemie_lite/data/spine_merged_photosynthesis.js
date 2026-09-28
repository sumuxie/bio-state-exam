/* Merged spines — the photosynthetic pigments, and the photochemical reaction centres.
   速通简洁版, ONE spine per TOPIC.

   Two chains, written together because they are one story cut in half. The first
   chain (8 nodes, 9-1 to 9-8) runs from "what makes an organism autotrophic" to
   "why a leaf is green and what the accessory pigments are for", and stops at the
   moment the collected energy arrives somewhere. The second chain (7 nodes, 9-9 to
   9-14 plus the Lehninger layer) starts at that moment and runs to ATP and NADPH.

   Sizing rule that overrides the ten-to-fifteen-step guidance in SPINE_SPEC.md:
   不要缺失任何节点. Eight member nodes and seven member nodes cannot be carried by
   fourteen steps without dropping named pigments, named complexes and numbers, so
   the chains are 21 and 23 steps. No named pigment, complex or figure value has
   been left out to hit a count.

   Reaching: photorespiration / C-4 / CAM is already merged as its own chain, so
   both chains here point forward into it with `see`. The respiratory chain is also
   already merged and is the mechanistic twin of the light reactions — a reader who
   holds one is told, at each point of contact, exactly where the other differs
   (shared carrier kit, Complex III versus cytochrome b6f, and the reversed
   orientation of the ATP synthase).

   A = Lehninger, B = the Czech course book. A step read from both carries both,
   separated by a middle dot.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so no per-node spine is written for the member nodes.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly as a standing claim with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------------------------ 光合色素 (9-1 … 9-8) ---- */
window.BIOLITE_SPINE["key:photosynthetic-pigments"] = {
  assumed: ["ATP", "ADP", "NADPH", "NADP+", "NADH", "NAD+", "CO2", "carbon dioxide",
            "O2", "oxygen", "H2O", "water", "H2S", "hydrogen sulfide", "sulfur",
            "nitrogen", "nitrate", "nitrite", "sulfate", "cysteine", "amino acid",
            "aromatic amino acid", "glucose", "hexose", "saccharide", "sugar",
            "carbon", "electron", "proton", "photon", "light", "wavelength",
            "nanometre", "spectrum", "absorption", "energy", "chemical energy",
            "free energy", "Gibbs energy", "temperature", "membrane", "protein",
            "lipid", "bilayer", "organelle", "mitochondrion", "inner mitochondrial membrane",
            "bacteria", "cyanobacteria", "algae", "red algae", "plant", "leaf",
            "double bond", "conjugated", "ion", "magnesium", "iron", "metal",
            "alcohol", "ester", "hydrophobic", "soluble", "oxidation", "reduction",
            "oxidation-reduction", "redox", "enzyme", "pigment", "colour",
            "haemoglobin", "bile", "steroid", "maize", "second"],
  nodeTitle_en: "Photosynthetic pigments",
  nodeTitle_cn: "光合色素",
  title_en: "What an autotroph can do that nothing else can, why the oxygen comes out of water and never out of CO2, and why three chemically unrelated molecules all work as pigments",
  title_cn: "自养生物会而别人不会的那件事、为什么氧来自水而绝不来自 CO₂，以及三种化学上毫不相干的分子为什么都能当色素",
  terms: [
    { en: "autotroph and the five metabolisms", cn: "自养生物与五类特有代谢",
      def_en: "An organism that covers its whole energy requirement from solar energy and builds every substance of its own body from CO2, water and minerals, needing no preformed organic carbon. Five metabolic processes are present in it and missing from a heterotroph: photosynthetic assimilation of CO2 together with the photochemical decomposition of water; assimilation of atmospheric nitrogen; reduction of nitrates, nitrites and sulfates with the biosynthesis of cysteine; biosynthesis of the aromatic amino acids; and formation of secondary plant metabolites. The list is the syllabus of the whole chapter, and its second item is corrected later — nitrogen fixation belongs to bacteria, not to plants.",
      def_cn: "完全靠太阳能覆盖自身全部能量需求、只用 CO₂、水和无机盐就能造出自己身体每一种物质的生物，不需要任何现成的有机碳。有五类代谢过程存在于它体内、而异养生物没有：CO₂ 的光合同化连同水的光化学分解；大气氮的同化；硝酸盐、亚硝酸盐、硫酸盐的还原以及半胱氨酸的生物合成；芳香族氨基酸的生物合成；次生植物代谢物的形成。这份清单就是全章的提纲，而其中第二条后文会自我更正 —— 固氮是细菌的本事，不是植物的。" },
    { en: "the general equation and its one variable", cn: "通式与其中唯一的变量",
      def_en: "H2D + A gives H2A + D, with hv above the arrow, the pigments named below it, and ATP branching off as a side product. H2D is the donor and A the acceptor of both electrons and protons, which is why the donor carries an H2. For every photosynthesizing organism without exception the acceptor A is carbon dioxide, so the scheme specialises to H2D + CO2 giving (CH2O) + D, where (CH2O) is shorthand for a saccharide. Only the donor varies: water in oxygenic photosynthesis, hydrogen sulfide in some bacteria, which give off sulfur where a plant gives off oxygen.",
      def_cn: "H₂D + A → H₂A + D，箭头上方写 hv、下方写色素，并从箭头分出一支生成 ATP。H₂D 是供体、A 是受体，收授的既是电子也是质子 —— 供体要写成 H₂D 正是因为这个。对一切光合生物无一例外，受体 A 都是二氧化碳，所以通式具体化为 H₂D + CO₂ → (CH₂O) + D，其中 (CH₂O) 是「一个糖」的简写。变的只有供体：产氧光合作用用水，某些细菌用硫化氢 —— 后者放出的是硫，而植物放出的是氧。" },
    { en: "the chloroplast compartments", cn: "叶绿体的各个区室",
      def_en: "A chloroplast is bounded by an outer and an inner membrane with an intermembrane space between them. Inside it, a thylakoid is a closed sac-like membrane structure — Greek thylakos, a sac — with an inner and an outer space that can be told apart, as in the inner mitochondrial membrane. A stack of thylakoids is a granum; the ones running between stacks are stromal thylakoids; the space enclosed inside a thylakoid is its lumen; the soluble interior of the chloroplast outside the thylakoids is the stroma. Light reactions run in the membrane, CO2 fixation runs in the stroma, and that split governs the whole chapter.",
      def_cn: "叶绿体由外膜和内膜围起来，两者之间是膜间隙。里面的类囊体 (thylakoid) 是封闭的囊状膜结构 —— 希腊语 thylakos 就是「囊」 —— 可以区分内腔与外部空间，和线粒体内膜一样。一摞类囊体叫基粒 (granum)；在摞与摞之间穿行的叫基质类囊体；类囊体内部围起来的空间叫腔 (lumen)；类囊体之外、叶绿体内部那部分可溶空间叫基质 (stroma)。光反应在膜里跑，CO₂ 固定在基质里跑 —— 整章都由这个分区管着。" },
    { en: "three shapes, one optical property", cn: "三个形状，一种光学性质",
      def_en: "Chlorophylls are porphyrins: four pyrrole rings closed into a macrocycle by methine bridges, with magnesium held in the centre where haem holds iron, plus a phytyl tail of twenty carbon atoms. Phycobilins are the same four pyrroles left open as a chain, like the bile pigments biliverdin, bilirubin and stercobilin. Carotenoids are isoprenoids, relatives of the steroids through shared isoprene units; beta-carotene and lutein are the worked examples. Closed ring, open chain, long chain — and all three absorb visible light for one shared reason, an extended system of alternating double bonds.",
      def_cn: "叶绿素属卟啉：四个吡咯环由次甲基桥闭合成大环，中心扣着镁 —— 血红素在同一位置扣的是铁 —— 外加一条二十个碳的植基尾巴。藻胆素是同样的四个吡咯，只是没有闭环、摊成一条链，像胆绿素、胆红素、粪胆素这些胆色素。类胡萝卜素属异戊二烯类，通过共有的异戊二烯单元与类固醇沾亲；β-胡萝卜素和叶黄素是书上举的两个例子。闭环、开链、长链 —— 三者都吸收可见光，理由只有一个：一长串交替的双键。" },
    { en: "why only the red band is usable", cn: "为什么只有红光那一段能用",
      def_en: "Chlorophylls absorb in two regions, 415 to 440 nanometres in the blue and 640 to 700 nanometres in the red, and the spectra of chlorophyll a and chlorophyll b are alike in both shape and position because they differ by one substituent on ring II. Only the red band is significant for photosynthesis. The blue band excites electrons into the second singlet excited state, whose lifetime is too short for the excitation to start the following redox reactions; the red band reaches the first singlet excited state, which lasts long enough to be spent. The decisive quantity is excited-state lifetime, not photon energy — the blue photon carries more.",
      def_cn: "叶绿素在两个区域吸收：蓝光区 415–440 nm 与红光区 640–700 nm；叶绿素 a 与 b 的光谱在形状和位置上都很像，因为二者只差环 II 上的一个取代基。对光合作用有意义的只有红光那一段。蓝光把电子激发到第 2 单线激发态，该态寿命太短，来不及启动后续的氧化还原反应；红光激发到第 1 单线激发态，它活得够久，能被花掉。起决定作用的是激发态寿命，而不是光子能量 —— 蓝光光子的能量反而更多。" },
    { en: "accessory pigments and spectral coverage", cn: "辅助色素与光谱覆盖",
      def_en: "Every thylakoid pigment except the chlorophyll a of a reaction centre has an auxiliary function only: it captures quanta and passes the energy of its excited state to that chlorophyll a, never performing photochemistry itself. Three names are used for the class — auxiliary, accessory, supplementary — and it is defined by what it does, complementing and broadening the spectrum of photosynthetically effective radiation. Membership: other chlorophylls including chlorophyll b; in cyanobacteria and red algae the biliproteins, that is the phycobilins, phycoerythrin and phycocyanin, extending into blue and red; and carotenoids, supplementing the yellow-green. Together the curves cover practically the whole visible solar spectrum.",
      def_cn: "类囊体里除反应中心那个叶绿素 a 之外的每一种色素都只有辅助功能：捕获量子、把自身激发态的能量交给那个叶绿素 a，自己从不做光化学。这一类有三个名字 —— 辅助、附属、补充 —— 而它是按功能定义的：补充并拓宽光合有效辐射的光谱。成员包括：其他叶绿素（叶绿素 b 也在内）；蓝细菌与红藻里的胆蛋白，也就是藻胆素，即藻红蛋白和藻蓝蛋白，把有效辐射拓展到蓝区和红区；以及类胡萝卜素，补上黄绿那一段。这些曲线合起来，几乎覆盖了整个可见区的太阳光谱。" }
  ],
  steps: [
    {
      en: "A photosynthesizing organism is autotrophic, and that word carries a strong claim: it covers its entire energy requirement at the expense of solar energy, and it synthesizes the basic nutrients and every substance needed to build its own body out of carbon dioxide, water and mineral substances alone. **An autotroph is not merely something that photosynthesises — it needs nothing preformed, and a heterotroph is the same list read backwards: an organism that has to eat its organic carbon.**",
      cn: "光合生物是自养的 (fotoautotrof)，而这个词含着一个很强的主张：它完全靠太阳能覆盖自身全部能量需求，并且只用二氧化碳、水和矿物质，就能合成基本养分以及构建自身躯体所需的每一种物质。**自养生物不只是「会光合作用」而已 —— 它什么现成的东西都不需要；而异养生物就是这份清单倒过来读：有机碳必须靠吃。**",
      src: "B §9.1, p.202"
    },
    {
      link_en: "and what exactly can it do that a heterotroph cannot?",
      link_cn: "那它到底会哪些异养生物不会的事？",
      en: "Five metabolic processes are present in a plant organism and missing from a heterotroph, and those five are the syllabus of everything that follows. The first is photosynthetic assimilation of carbon dioxide together with the photochemical decomposition of water and the resulting formation of molecular oxygen. **Carbon dioxide taken in and water taken apart are named as one item, not two, and that pairing is what the basis of photosynthesis means: neither half is worth anything without the other.**",
      cn: "有五类代谢过程存在于植物体内、而异养生物没有 —— 这五条就是后文全部内容的提纲。第一类是二氧化碳的光合同化，连同水的光化学分解及由此产生的分子氧。**「把二氧化碳收进来」和「把水拆开」被算作一条而不是两条，这一组合正是教材所说的「光合作用的基础」：两半分开，哪一半都不值钱。**",
      src: "B §9.1, p.202"
    },
    {
      link_en: "and the other four",
      link_cn: "另外四条",
      en: "Second, assimilation of atmospheric nitrogen. Third, reduction of nitrates, nitrites and sulfates together with the biosynthesis of cysteine. Fourth, biosynthesis of the aromatic amino acids. Fifth, formation of secondary plant metabolites, which are products of anabolic pathways specific to plants and apparently not required for the plant's own life. **Item two gets corrected inside the same chapter: fixing nitrogen straight out of the air is a bacterial ability, so a plant reaches atmospheric nitrogen only through a bacterial partner.**",
      cn: "第二，大气氮的同化。第三，硝酸盐、亚硝酸盐和硫酸盐的还原，以及半胱氨酸的生物合成。第四，芳香族氨基酸的生物合成。第五，次生植物代谢物的形成 —— 那是一些植物特有的合成途径的产物，看上去对植物自己的生存并非必需。**第二条会在同一章里被更正：直接从空气里固氮是细菌的本事，不是植物的；植物要够到大气氮，只能通过细菌伙伴。**",
      src: "B §9.1, p.202",
      see: [{ id: "9-23", en: "nitrogenase — who actually fixes atmospheric nitrogen", cn: "固氮酶 —— 到底是谁在固定大气氮" },
            { id: "9-27", en: "the secondary plant metabolites of item five", cn: "第五条里的次生植物代谢物" }]
    },
    {
      link_en: "item one, written as generally as it can be written",
      link_cn: "第一条，用最一般的方式写出来",
      en: "Photosynthesis is the biological conversion of radiant energy into chemical energy, and in its most general form it is written H2D + A giving H2A + D, with hv above the arrow, the pigments named below it, and ATP branching off the arrow as a side product. **H2D is the donor and A the acceptor of both electrons and protons, and the H2 is written in on purpose: what crosses is not electrons alone, so the donor has to arrive carrying hydrogen with it.** Throughout the chapter the usable radiant energy is called simply light, which is a stated convention and not a claim that only visible light works.",
      cn: "光合作用是辐射能向化学能的生物学转换；写成最一般的形式，就是 H₂D + A → H₂A + D，箭头上方写 hv、下方写色素，并从箭头上分出一支生成 ATP。**H₂D 是供体、A 是受体，收授的既是电子也是质子；那个 H₂ 是特意写上去的 —— 过去的不只是电子，所以供体必须带着氢一起来。** 全章把可利用的辐射能一律简称为「光」，这是明说的约定，并不是主张只有可见光才起作用。",
      src: "B §9.1, pp.202–203"
    },
    {
      link_en: "one side of that equation never changes, and the other side is the whole variety of photosynthesis",
      link_cn: "这个式子里有一边永远不变，另一边则装下了光合作用的全部多样性",
      en: "For all photosynthesizing organisms without exception the acceptor A is carbon dioxide, so the general scheme specialises to H2D + CO2 giving (CH2O) + D, where (CH2O) is shorthand for a saccharide — a formula unit, not a real molecule. What varies between organisms is the donor. Some bacteria run H2S + CO2 giving (CH2O) + S. **Those bacteria give off sulfur exactly where a plant gives off oxygen, which is the cleanest available proof that the by-product comes out of the donor and never out of the carbon dioxide.**",
      cn: "对一切光合生物无一例外，受体 A 都是二氧化碳，所以通式具体化为 H₂D + CO₂ → (CH₂O) + D，其中 (CH₂O) 是「一个糖」的简写 —— 是个化学式单位，不是一个真实分子。不同生物之间变的是供体。某些细菌跑的是 H₂S + CO₂ → (CH₂O) + S。**这些细菌在植物放氧的那个位置上放出的是硫 —— 这是「副产物来自供体、绝不来自二氧化碳」最干净利落的证明。**",
      src: "B §9.1, pp.202–203"
    },
    {
      link_en: "and one sentence fixes what the rest of the chapter will and will not answer",
      link_cn: "而有一句话定下了本章后面会回答什么、不会回答什么",
      en: "Photosynthesis can be studied on several levels, and the ecological one takes as its object a porost — a whole stand or canopy of plants rather than a single leaf or chloroplast. The physical, physiological and ecological aspects are then stated plainly to lie outside these lecture notes and will not be described in more detail. **Everything that follows is therefore deliberately biochemistry only, which is worth knowing whenever the chapter seems to skip a question you expected it to answer.**",
      cn: "光合作用可以在好几个层面上研究，而生态学层面研究的对象是 porost——整片植物群落或冠层，而不是单独一片叶子或一个叶绿体。随后教材明说：物理学、生理学与生态学方面不会在本讲义里被更详细地描述。**因此后文全部内容都是有意只讲生物化学——当本章似乎跳过了你以为它会回答的问题时，知道这一点是有用的。**",
      src: "B §9.1, pp.203–204"
    },
    {
      link_en: "so what happens when the donor is water?",
      link_cn: "那供体换成水会怎样？",
      en: "Autotrophs other than the sulfur bacteria use water molecules as the donor of electrons and protons, and that is what oxygenic photosynthesis means. Two water molecules must be split photochemically to make one molecule of O2, so the basic equation is written 2 H2O + CO2 giving (CH2O) + O2 + H2O. **A water sits on each side of that arrow and could be cancelled, and it is left standing on purpose: the arithmetic survives cancelling, but the claim that the oxygen came out of water does not.**",
      cn: "除硫细菌以外的自养生物，以水分子作为电子与质子的供体 —— 这就是产氧光合作用的意思。要生成一个 O₂ 分子，必须光化学地拆开两个水分子，所以基本方程写作 2 H₂O + CO₂ → (CH₂O) + O₂ + H₂O。**箭头两边各有一个水，本来可以约掉，却是特意留着的：约掉之后算术照样成立，但「氧是从水里出来的」这句话就没了。**",
      src: "B §9.1, p.203"
    },
    {
      link_en: "scaled up to one sugar, the same insistence, and a number",
      link_cn: "放大到一分子糖，同样的坚持，外加一个数值",
      en: "For one hexose: 12 H2O + 6 CO2 giving C6H12O6 + 6 O2 + 6 H2O, with a standard free energy change at pH 7 of +2867 kilojoules per mole. Twelve waters go in and six come back out, because it takes two waters to make each of the six oxygen molecules. **A positive value means the equation as written runs uphill and has to be paid for, and reversed it is the free energy released when a hexose is completely oxidised — the same number.**",
      cn: "生成一分子己糖时：12 H₂O + 6 CO₂ → C₆H₁₂O₆ + 6 O₂ + 6 H₂O，pH 7 下的标准自由能变为 +2867 kJ/mol。进去十二个水、出来六个水，因为六个氧分子中的每一个都要拆两个水才凑得出。**正号意味着按所写方向这个反应是往上走的、必须有人付账；把它反过来，同一个数值就是一分子己糖被完全氧化时放出的自由能 —— 光合作用与呼吸作用之所以老被对举，原因就在这里。**",
      src: "B §9.1, p.203",
      see: [{ id: "10-11", en: "the other direction of that same number — the citrate cycle and the respiratory chain", cn: "同一个数值的另一个方向 —— 柠檬酸循环与呼吸链" }]
    },
    {
      link_en: "where does all this actually happen?",
      link_cn: "那这一切究竟发生在哪里？",
      en: "Everything up to and including CO2 fixation runs in the thylakoid membranes of cyanobacteria, algae and higher plants — the name comes from the Greek thylakos, a sac, and thylakoidos, sac-like. A thylakoid is a closed membrane structure in which an inner and an outer space can be told apart, exactly as in the inner mitochondrial membrane. **A closed membrane with two tellable-apart sides is the precondition for storing energy as a gradient across it, which is why the same shape turns up in a mitochondrion and in a chloroplast.**",
      cn: "直到 CO₂ 固定为止的全部过程，都在蓝细菌、藻类和高等植物的类囊体膜中进行。名字来自希腊语 thylakos（囊）和 thylakoidos（囊状）：类囊体是一种封闭的膜结构，其中可以区分出内腔与外部空间 —— 和线粒体内膜完全一样。**一张封闭的、两侧可以分辨的膜，是「把能量存成跨膜梯度」的前提条件；这就是为什么线粒体和叶绿体里会出现同一个形状。**",
      src: "B §9.1, pp.202–203",
      beyond: true,
      beyondNote: "The pages give the structural analogy to the inner mitochondrial membrane and the inner/outer space of a thylakoid; that a closed two-sided membrane is the precondition for storing energy as a gradient is the bridge to chapter 6, not a sentence on p.202.",
      see: [{ id: "8-5", en: "what a biological membrane is made of, before it is a thylakoid", cn: "在成为类囊体之前，生物膜本身是什么做的" }]
    },
    {
      link_en: "and the thylakoids themselves are housed in something with named parts",
      link_cn: "而类囊体本身，装在一个各部分都有名字的东西里",
      en: "In plants the thylakoids sit inside a subcellular particle called a chloroplast, bounded by an outer membrane and an inner membrane with an intermembrane space between them. A stack of thylakoids is a granum; those running between the stacks are stromal thylakoids; the space enclosed inside a thylakoid is called its lumen; and the soluble interior of the chloroplast outside the thylakoids is the stroma, where CO2 is fixed and reduced and saccharides are synthesized. **Light reactions happen inside the thylakoid membrane and carbon fixation happens outside it in the stroma, and that one split is the structural key to every later step.**",
      cn: "在植物里，类囊体被安置在一种叫叶绿体的亚细胞颗粒中：外面是外膜和内膜，两者之间是膜间隙。一摞类囊体叫基粒 (granum)；在摞与摞之间穿行的叫基质类囊体；类囊体内部围起来的空间叫腔 (lumen)；而类囊体之外、叶绿体内部那部分可溶空间叫基质 (stroma)，CO₂ 的固定与还原、糖类的合成都在那里进行。**光反应发生在类囊体膜里，固碳发生在膜外的基质中 —— 这一个分区，就是后面每一步的结构钥匙。**",
      src: "B §9.1, pp.202–203"
    },
    {
      link_en: "before the mechanism, one sorting that tells you which questions this account will answer",
      link_cn: "在进入机理之前，先有一次分类，它告诉你这套叙述会回答哪些问题",
      en: "The study of photosynthesis splits into four disciplines separated by the time scale of the events each one watches, not by subject matter. Physics takes the absorption of radiation by the pigment molecules and the transfer of energy into the reaction centre, which is the site where that collected energy is finally converted; these run in 10 to the minus 15 up to 10 to the minus 8 seconds and are independent of temperature. They are the primary processes, ending with the separation of electric charge in the reaction centres — strictly the last of them is already photochemical, because it initiates oxidation-reduction events. **Only the primary processes depend on light immediately, and they are the only temperature-independent part: everything slower is enzyme chemistry spending what the light has already earned.**",
      cn: "对光合作用的研究分成四门学科，分开它们的是各自所看事件的时间尺度，而不是题材。物理学管色素分子对辐射的吸收，以及能量向反应中心 (reakční centrum) 的传递 —— 反应中心就是这些收集来的能量最终被转换的地方；这些过程在 10⁻¹⁵ 到 10⁻⁸ 秒之间完成，且与温度无关。它们就是所谓初级过程，终点是反应中心里电荷的分离 —— 严格说来其中最后一步已属光化学，因为它启动了氧化还原事件。**只有初级过程是直接依赖光的，也只有它们不依赖温度：比它们慢的一切都是酶促化学，花的是光已经挣来的本钱。**",
      src: "B §9.1, pp.203–204"
    },
    {
      link_en: "and the three slower disciplines, each with its own window",
      link_cn: "另外三门更慢的学科，各有各的时间窗口",
      en: "Biochemistry occupies two windows at once, and the two are separated by a membrane: one inside the thylakoid, one outside it. In the thylakoid membranes and their submembrane particles: the whole complex of electron and proton transfer including the photolysis of water, which is the photochemical splitting of water, yielding ATP and NADPH, at 10 to the minus 10 up to 10 to the minus 2 seconds. In the chloroplast stroma outside those membranes: CO2 fixation, the formation of the saccharide products, photorespiration and nitrogen metabolism, at 10 to the minus 3 up to 10 to the plus 2 seconds. Physiology takes gas exchange between chloroplasts and the air around plant tissues and the transport and use of the products, from tissues up to whole plants, at 1 to 10 to the 4 seconds. Ecology is the top of the hierarchy: sets of plants and whole stands, at 10 to the 3 seconds and more, meaning hours, days and years. **Two of the four windows are biochemistry, and the boundary between them is the compartment boundary again — fast inside the membrane, slow outside it in the stroma.**",
      cn: "生物化学同时占着两个窗口，而分开这两个窗口的是一张膜：一个在类囊体里，一个在它外面。在类囊体膜及其亚膜颗粒中：整套电子与质子传递过程，包括水的光解（即水的光化学分解），产物是 ATP 与 NADPH，时间为 10⁻¹⁰ 到 10⁻² 秒。在膜之外的叶绿体基质中：CO₂ 固定、糖类产物的生成、光呼吸与氮代谢，时间为 10⁻³ 到 10² 秒。生理学管叶绿体与植物组织周围空气之间的气体交换，以及产物的运输与利用，层次从组织直到整株植物，时间为 1 到 10⁴ 秒。生态学是这一层级的最高层：植物群体与整个群落，10³ 秒以上，也就是小时、天和年。**四个窗口里有两个属于生物化学，而它们之间的界线又是那条区室界线 —— 膜内快，膜外基质里慢。**",
      src: "B §9.1, pp.203–204",
      see: [{ id: "9-20", en: "photorespiration, the slow-window process named here", cn: "光呼吸 —— 这里点到的那个慢窗口过程" }]
    },
    {
      link_en: "now the pigments themselves, and there are exactly three kinds",
      link_cn: "现在轮到色素本身，而它恰好分成三类",
      en: "There are three categories of photosynthetic pigment, and each category is a shape. Chlorophylls are porphyrins: four pyrrole rings, the five-membered nitrogen-containing rings, closed into a macrocycle. Phycobilins carry the same four pyrroles left open as a chain. Carotenoids are isoprenoids, long molecules built by repeating the five-carbon isoprene unit. **Three chemically unrelated things work as pigments for one shared reason: each carries a long run of alternating double bonds, which shifts absorption into the visible range.**",
      cn: "光合色素有三大类，而每一类其实是一个形状。叶绿素属卟啉：四个吡咯环 —— 就是那种含氮的五元环 —— 闭合成一个大环。藻胆素带的是同样的四个吡咯，只是没有闭环、摊成一条链。类胡萝卜素属异戊二烯类，由五个碳的异戊二烯单元反复接长而成。**三种化学上毫不相干的东西都能当色素，共同的理由只有一个：每一种都带着一长串交替的双键，而延伸的共轭系统正是把吸收挪进可见光区的那个东西。**",
      src: "B §9.1.1, pp.204–205"
    },
    {
      link_en: "each of the three has a relative you have already met",
      link_cn: "这三类各自都有一个你早就见过的亲戚",
      recall_en: "the closed-versus-open contrast is the same one as between haem and its degradation products",
      recall_cn: "「闭环对开链」这个对比，和血红素与它的降解产物之间是同一个对比",
      en: "A chlorophyll is a porphyrin like haem, the pigment found in haemoglobin and in the cytochromes, differing in the central metal — magnesium where haem has iron. A phycobilin is an open tetrapyrrole like the bile pigments biliverdin, bilirubin and stercobilin. A carotenoid is an isoprenoid and therefore a relative of the steroids, a relationship running through the shared isoprene building blocks rather than through any similarity of shape; beta-carotene and lutein are the two worked examples. **Opening a closed tetrapyrrole is one chemical event showing up on both sides of biology: the open chain is a phycobilin in an alga and the yellow of a healing bruise in a human.**",
      cn: "叶绿素是卟啉，和血红素同类 —— 血红素就是血红蛋白与细胞色素里的那个色素；差别在中心金属：叶绿素是镁，血红素是铁。藻胆素是开链四吡咯，和胆绿素、胆红素、粪胆素这些胆色素同类。类胡萝卜素是异戊二烯类，因而与类固醇沾亲，这层关系走的是共有的异戊二烯构件，而不是形状上的相像；β-胡萝卜素和叶黄素是书上举的两个例子。**「把闭合的四吡咯打开」是一件在生物学两侧都露面的真实化学事件：同一条开链，在藻类里是捕光的藻胆素，在人身上是淤青褪色时的那抹黄。**",
      src: "B §9.1.1, pp.204–205",
      beyond: true,
      beyondNote: "The pages name biliverdin, bilirubin and stercobilin as the comparison for the open-chain phycobilins; that bilirubin is the yellow of a healing bruise is standard and examinable but comes from the porphyrin-degradation material, not from these pages.",
      see: [{ id: "6-3-1", en: "the porphyrin proteins and what the central metal decides", cn: "卟啉蛋白，以及中心金属决定了什么" },
            { id: "6-3-3", en: "where biliverdin and bilirubin come from — porphyrin degradation", cn: "胆绿素和胆红素从哪来 —— 卟啉的降解" },
            { id: "8-2-4-6", en: "carotenoids and xanthophylls as tetraterpenes", cn: "作为四萜的类胡萝卜素与叶黄素类" }]
    },
    {
      link_en: "of the three, one class is compulsory, so it is worth taking apart",
      link_cn: "三类里有一类是必备的，值得拆开来看",
      en: "Chlorophylls are the obligatory and most important photosynthetic pigments, obligatory meaning that no photosynthetic system does without them while the others vary by organism, and every chlorophyll shares one structure. The head is a porphyrin: tetrapyrroles joined to one another by methine bridges, which are the CH units that complete a conjugated system all the way round the macrocycle, with the central magnesium. The tail is an alcohol, most often the phytyl residue containing twenty carbon atoms, itself an isoprenoid. **The porphyrin head is always the part responsible for the photochemical properties, and the long hydrophobic tail does nothing optical at all: it holds the pigment inside the membrane.**",
      cn: "叶绿素是必备且最重要的光合色素 —— 「必备」的意思是没有任何光合系统能缺了它，而其余各类则因生物而异；所有叶绿素共有同一套结构。头部是卟啉：四吡咯彼此由次甲基桥连接，也就是那些 CH 单元，它们让共轭系统沿大环一圈接通；中心扣着镁。尾巴是一个醇，最常见的是含二十个碳原子的植基残基，它本身也是异戊二烯类。**卟啉头部始终是负责光化学性质的那一部分，而那条长长的疏水尾巴在光学上什么也不做：它存在的意义，就是把色素固定在类囊体膜里。**",
      src: "B §9.1.1, p.205"
    },
    {
      link_en: "and inside that one class, one member is doing something the others are not",
      link_cn: "而在这一类内部，有一个成员在做别人不做的事",
      en: "Chlorophyll a is universally distributed among organisms with the oxygenic type of photosynthesis, and bacteriochlorophyll, the chlorophyll of the anoxygenic photosynthetic bacteria, has a somewhat different structure. That universality is the evidence offered for a strong conclusion: **only chlorophyll a is the actual transformer of energy in photosynthesis, the single pigment taking part directly in the primary photochemical act — turning radiation into chemical energy.** Chlorophyll b differs from chlorophyll a by one substituent on ring II, and on this argument chlorophyll b and every other pigment are accessories feeding energy to chlorophyll a.",
      cn: "叶绿素 a 在产氧型光合作用的生物中普遍存在；而细菌叶绿素 —— 不产氧的光合细菌所用的那种叶绿素 —— 结构上有所不同。这种普遍性，正是下面这个强结论所依据的证据：**只有叶绿素 a 才是光合作用中真正的能量转换者，是唯一直接参与初级光化学过程的色素 —— 而所谓初级光化学过程，就是把电磁辐射能变成化学能。** 叶绿素 b 与叶绿素 a 只差环 II 上的一个取代基；按这个论证，叶绿素 b 以及其余所有色素都是辅助者，只负责把能量喂给叶绿素 a。",
      src: "B §9.1.1, p.205"
    },
    {
      link_en: "what light does a chlorophyll actually take?",
      link_cn: "那叶绿素究竟拿走了什么光？",
      en: "The absorption spectra of chlorophyll a and chlorophyll b are strikingly similar in both the shape and the position of their absorption bands, which follows directly from that one ring-II substituent. Both absorb in two regions: 415 to 440 nanometres in the blue, and 640 to 700 nanometres in the red. **Only the red region is significant for photosynthesis, and the reason is not how much energy the photon carries, because the blue photon carries more of it and is still thrown away.**",
      cn: "叶绿素 a 与叶绿素 b 的吸收光谱在吸收带的形状和位置上都惊人地相似 —— 这直接来自环 II 上那一个取代基。两者都在两个区域吸收：蓝区 415–440 nm，红区 640–700 nm。**对光合作用有意义的只有红区；而理由并不在于光子带了多少能量 —— 蓝光光子带得更多，照样被扔掉。**",
      src: "B §9.1.1, p.205"
    },
    {
      link_en: "so the reason has to be something other than energy, and it is",
      link_cn: "所以理由只能是能量之外的东西 —— 确实如此",
      en: "The blue band corresponds to excitation of electrons into the second singlet excited state, an excited electronic state whose lifetime is too short for that excitation to be used to start the subsequent oxidation-reduction reactions. The red band corresponds to excitation into the first singlet excited state, which is long-lived enough to be spent. **What separates a usable absorption band from a useless one is excited-state lifetime, so the surplus energy of a blue photon is lost as heat before any chemistry can begin.**",
      cn: "蓝区那一段对应的是电子被激发到第 2 单线激发态 —— 那是一种电子激发态，寿命太短，这份激发来不及用来启动后续的氧化还原反应。红区那一段对应的是被激发到第 1 单线激发态，它活得够久，可以被花掉。**把「能用的吸收带」和「没用的吸收带」分开的是激发态寿命；所以蓝光光子多出来的那份能量，在任何化学反应开始之前就以热的形式散掉了。**",
      src: "B §9.1.1, p.205"
    },
    {
      link_en: "and one everyday fact drops straight out of the red band",
      link_cn: "从红区那一段，直接掉出一个日常事实",
      en: "The complementary colour to red is green, meaning the colour perceived when the red is removed from white light. **Chlorophylls take the red and leave the green, so the green of the plant world is leftover light — the part the pigments could not absorb, reaching an eye entirely unused.**",
      cn: "红色的互补色是绿色 —— 所谓互补色，就是从白光里把红拿走之后所看到的那种颜色。**叶绿素取走红光、留下绿光，所以植物世界的绿是「剩下的光」：色素吸不掉的那一部分，原封不动地进了眼睛。**",
      src: "B §9.1.1, p.205"
    },
    {
      link_en: "which raises the problem the accessory pigments exist to solve",
      link_cn: "而这恰好抛出了辅助色素存在的理由",
      en: "All the pigments in the thylakoids other than the chlorophyll a of the reaction centre have an auxiliary function only: they capture quanta of the incident radiation and transfer the energy of their excited state onto that chlorophyll a. Three names are used for the same class — auxiliary, accessory and supplementary — and the class is defined by what it does, which is to complement and broaden the spectrum of photosynthetically effective radiation. **An accessory pigment never performs the photochemistry itself, it only hands energy inward, so which accessory pigments an organism carries is a statement about what light actually reaches it.**",
      cn: "类囊体里除反应中心那个叶绿素 a 之外的一切色素，都只有辅助功能：捕获入射辐射的量子，并把自身激发态的能量传递给那个叶绿素 a。同一类色素有三个名字 —— 辅助、附属、补充 —— 而这一类是按它做的事来定义的：补充并拓宽光合有效辐射的光谱。**辅助色素自己从不做光化学，只负责把能量往里递；所以一种生物带哪些辅助色素，说的其实是「什么样的光真的能照到它」。**",
      src: "B §9.1.1, pp.205–206"
    },
    {
      link_en: "so who is in that class, and what does the class add up to?",
      link_cn: "那这一类里都有谁，合起来又顶什么用？",
      en: "Membership runs: other types of chlorophyll, chlorophyll b included; in cyanobacteria and in red algae the biliproteins, which are the phycobilins, extending the photosynthetically effective radiation into the blue and the red regions, with phycoerythrin and phycocyanin as the two named examples; and carotenoids, supplementing the radiation in the yellow-green part of the spectrum, which is exactly where both chlorophylls absorb weakest. Laid over the envelope of the solar spectrum across 400 to 700 nanometres, those curves together cover practically the whole visible region. **Every pigment on its own leaves holes in its spectrum, and chlorophyll leaves one right in the middle where the sun delivers hardest, so the accessory pigments exist to fill that middle in.**",
      cn: "成员如下：其他类型的叶绿素，叶绿素 b 也在内；在蓝细菌与红藻中是胆蛋白，也就是藻胆素，把光合有效辐射拓展到蓝区与红区，书上点名的两个例子是藻红蛋白和藻蓝蛋白；以及类胡萝卜素，补上光谱中黄绿那一段 —— 那恰恰是两种叶绿素吸收最弱的区域。把这些曲线叠在 400–700 nm 的太阳光谱包络上，它们合起来几乎覆盖了整个可见区。**每一种色素单独看，光谱里都有窟窿，而叶绿素的窟窿正好开在太阳输出最强的正中间 —— 辅助色素存在的意义，就是把这个中间补上。**",
      src: "B §9.1.1, pp.205–206"
    },
    {
      link_en: "and every one of those pigments is delivering its energy to the same address",
      link_cn: "而这些色素全都在把能量送往同一个地址",
      en: "All the captured energy travels to one destination, and what happens on arrival is a different kind of event from anything above: a chlorophyll a in a reaction centre gives up an electron, and the energy stops being energy and becomes a separated electric charge. The stable products of that are ATP and NADPH, and both are spent outside the thylakoid membrane, in the stroma, on fixing and reducing CO2. **Pigment chemistry ends at the reaction centre, and everything after it is ordinary redox chemistry that would run in the dark given a supply of ATP and NADPH.**",
      cn: "所有被捕获的能量都往同一个目的地走，而抵达时发生的事，性质与上面任何一步都不同：反应中心里的一个叶绿素 a 交出一个电子 —— 能量不再是能量，变成了被分开的电荷。这件事的稳定产物是 ATP 和 NADPH，而这两样都是在类囊体膜之外、在基质里被花掉的，用于 CO₂ 的固定与还原。**色素化学到反应中心为止；它之后的一切都是普通的氧化还原化学 —— 只要有 ATP 和 NADPH 供着，在黑暗里照样跑。**",
      src: "B §9.1.1, pp.205–206 · B §9.1.3, pp.206–207",
      see: [{ id: "9-11", en: "the primary photochemical act itself, and what makes that one chlorophyll different", cn: "初级光化学作用本身，以及那一个叶绿素凭什么不一样" },
            { id: "9-15", en: "where the ATP and NADPH get spent — CO2 fixation", cn: "ATP 和 NADPH 花在哪 —— CO₂ 的固定" },
            { id: "9-19", en: "the Calvin cycle in full, and its net yield", cn: "完整的 Calvin 循环及其净产率" }]
    }
  ]
};

/* --------------------------------------- 光化学反应中心 (9-9 … 9-14, L-20-2-1) ---- */
window.BIOLITE_SPINE["key:photochemical-reaction-centers"] = {
  assumed: ["ATP", "ADP", "NADPH", "NADP+", "NADH", "NAD+", "CO2", "carbon dioxide",
            "O2", "oxygen", "H2O", "water", "H2S", "hydrogen sulfide", "sulfur",
            "phosphate", "inorganic phosphate", "electron", "proton", "photon",
            "light", "wavelength", "nanometre", "absorption", "spectrum", "energy",
            "chemical energy", "free energy", "Gibbs energy", "redox potential",
            "electrochemical potential", "oxidation", "reduction", "oxidation-reduction",
            "redox", "radical", "orbital", "charge", "electric charge", "gradient",
            "pH", "acid", "concentration", "membrane", "bilayer", "phospholipid",
            "lipid", "glycolipid", "protein", "subunit", "amino acid", "tyrosine",
            "threonine", "enzyme", "kinase", "phosphatase", "phosphorylation",
            "organelle", "mitochondrion", "inner mitochondrial membrane",
            "respiratory chain", "chloroplast", "thylakoid", "stroma", "lumen",
            "granum", "pigment", "chlorophyll", "chlorophyll a", "chlorophyll b",
            "carotenoid", "accessory pigment", "antenna", "bacteria", "cyanobacteria",
            "algae", "plant", "leaf", "manganese", "calcium", "copper", "iron",
            "magnesium", "haem", "cytochrome", "quinone", "herbicide", "second",
            "picosecond", "millivolt", "reactive oxygen species", "Calvin cycle",
            "photosynthesis", "photorespiration", "evolution", "species", "acetate",
            "succinate", "malate", "sulfide", "crystal structure", "habitat"],
  nodeTitle_en: "Photochemical reaction centres",
  nodeTitle_cn: "光化学反应中心",
  title_en: "The one place in a leaf where light stops being energy, why a plant needs two photosystems where a bacterium needs one, and the counting problems that follow",
  title_cn: "叶子里唯一让光不再是能量的那个位置、为什么细菌一个光系统就够而植物要两个，以及由此产生的几个「数目对不上」",
  terms: [
    { en: "quantum yield", cn: "量子产额",
      def_en: "The fraction of excitations that lead to the desired outcome. Its high value in an intact photosynthetic system shows that electron donation to the primary acceptor outcompetes the two alternative ways of losing an excitation, fluorescence and conversion into heat, which remain available and simply lose the race.",
      def_cn: "激发中导向目标结果的那一部分所占的比例。它在完整光合系统里数值很高，这说明「把电子交给初级受体」压倒了另外两条失去激发的途径——荧光与转化为热；那两条路依然存在，只是竞争不过它。" },
    { en: "what the thylakoid membrane borrows and what it adds", cn: "类囊体膜借来的与新增的",
      def_en: "Structurally and functionally the closest relative of a thylakoid membrane is the inner mitochondrial membrane, the seat of the respiratory chain. It holds fewer phospholipids and carries glycolipids in addition — monogalactosyldiacylglycerol, digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol. Its electron and proton carriers are analogues of the mitochondrial ones: quinones, cytochromes, iron-sulfur proteins, flavoproteins, NADP oxidized or reduced. Exactly two components have no mitochondrial counterpart — plastocyanin, a blue copper protein of relative molecular mass 1 to 2 times ten thousand, broad absorption maximum near 597 nanometres, standard potential at pH 7 of 370 millivolts; and the oxygen-evolving complex, made only of non-pigmented proteins.",
      def_cn: "类囊体膜在结构和功能上最近的亲戚，是呼吸链所在的线粒体内膜。它的磷脂较少，另外带糖脂 —— 单半乳糖基二酰基甘油、双半乳糖基二酰基甘油、硫代异鼠李糖基二酰基甘油。它的电子与质子载体都是线粒体那套的类似物：醌类、细胞色素、铁硫蛋白、黄素蛋白，以及氧化态或还原态的 NADP。真正在线粒体里找不到对应物的只有两样 —— 质体蓝素 (plastocyanin)，一种蓝色含铜蛋白，相对分子质量 1 到 2 万，宽吸收峰约 597 nm，pH 7 下标准电位 370 mV；以及放氧复合体 (OEC)，它完全由非色素蛋白构成。" },
    { en: "special pair and exciton", cn: "特殊对与激子",
      def_en: "Total chlorophyll to reaction-centre chlorophyll runs at about 200 to 1, so almost every chlorophyll in a thylakoid is an antenna molecule that only absorbs. Antenna molecules pass an exciton — a packet of excitation energy — from neighbour to neighbour with no electron and no charge moving, which is why there is no charge separation anywhere in an antenna. Two chlorophylls at a reaction centre are held close enough to share bonding orbitals and react as one compound when excited: that special pair hands an electron to an acceptor and is left a positively charged radical. Chemically it is ordinary chlorophyll; its microenvironment in the pigment-protein complex is what makes photooxidation possible. Reaction-centre pigments are named by absorption maximum — P870 in bacteria, P680 and P700 in oxygenic photosynthesis.",
      def_cn: "总叶绿素与反应中心叶绿素之比约为 200 比 1，所以类囊体里几乎每一个叶绿素都只是天线分子，只管吸光。天线分子把激子 (exciton)——一包激发能量——从邻居传给邻居，其间没有电子移动、也没有电荷移动，这正是天线里不存在电荷分离的原因。反应中心的两个叶绿素被固定得足够近，近到共用成键轨道、受激时表现得像一个化合物：这个 special pair 把一个电子交给受体，自己变成带正电的自由基。它化学上就是普通叶绿素；使光氧化成为可能的是它在色素蛋白复合体中的微环境。反应中心色素按吸收峰命名 —— 细菌里是 P870，产氧光合作用里是 P680 与 P700。" },
    { en: "photosystem, and why orientation is the point", cn: "光系统，以及「取向」为何是关键",
      def_en: "A photosystem is the reaction centre together with its nearest acceptors and donors of electrons, the corresponding binding proteins and the light-harvesting pigments. Photosystems are integral pigment-protein complexes penetrating the phospholipid bilayer, and because they are oriented the charge separation is oriented across the membrane — a charge separation in free solution simply recombines. The separated charges are then stabilised from both sides: on the acceptor side A1 minus plus A2 gives A1 plus A2 minus, on the donor side D2 plus P plus gives D2 plus plus P. The primary donor is the pigment P in the reaction centre itself; D2 is only the secondary donor.",
      def_cn: "光系统 (fotosystém, PS) 是反应中心连同它最近的电子受体与供体、相应的结合蛋白以及捕光色素。光系统是贯穿磷脂双层的整合型色素蛋白复合体；正因为它是定向的，电荷分离才是跨膜定向的 —— 自由溶液里的电荷分离只会复合掉。被分开的电荷随后从两侧被稳定住：受体侧 A₁⁻ + A₂ → A₁ + A₂⁻，供体侧 D₂ + P⁺ → D₂⁺ + P。初级电子供体是反应中心里的色素 P 本身；D₂ 只是次级供体。" },
    { en: "one photosystem or two, and what the Z scheme is", cn: "一个还是两个光系统，以及 Z 方案到底是什么",
      def_en: "A photosynthetic bacterium has one reaction centre of one of two kinds. Purple bacteria run the pheophytin-quinone kind at P870 in a closed loop whose only product is a proton gradient and hence ATP; green sulfur bacteria run the iron-sulfur kind at P840, closed or linear to NAD+, replacing the lost electron by oxidising hydrogen sulfide to elemental sulfur. Oxygenic photosynthesis has both kinds in series and most likely arose by combining two simpler bacterial photosystems: PS II is the pheophytin-quinone kind at P680, PS I the iron-sulfur kind at P700. Hence the lying letter Z, hence two lifts per electron and eight photons per O2. Against redox potential the couple of O2 and water sits at 820 millivolts and the couple of NADP+ and NADPH at minus 320 millivolts.",
      def_cn: "一个光合细菌只有一个反应中心，属于两型之一。紫细菌用去镁叶绿素-醌型，特殊对 P870，走闭合回路，唯一产物是质子梯度、进而是 ATP；绿硫细菌用铁硫型，特殊对 P840，可闭合也可线性地把电子送到 NAD⁺，丢掉的电子靠把硫化氢氧化成单质硫补回来。产氧光合作用两型串联，且很可能就是由两套更简单的细菌光系统合并而来：PSII 是 P680 的去镁叶绿素-醌型，PSI 是 P700 的铁硫型。于是有了那个横倒的字母 Z，于是每个电子要被抬两次、每放一个 O₂ 要花八个光子。在氧化还原电位坐标上，O₂/H₂O 电对在 820 mV，NADP⁺/NADPH 电对在 −320 mV。" },
    { en: "apparent versus real proton transfer", cn: "表观的与真实的质子传递",
      def_en: "Two different things build the thylakoid proton gradient and only one of them is transport. The transfer is apparent when protons are merely consumed on one side of the membrane, in the reduction of NADP+, and released on the other, in the photolysis of water. It is real when protons are physically carried across, and that is done by the hydrophobic plastoquinone molecules working with the cytochrome b6f complex inside the membrane. On illumination the proton concentration rises throughout the whole lumen — the protons are delocalised, so the gradient is a bulk property of that space rather than a local one — while at the outer surface it falls.",
      def_cn: "有两件不同的事在建立类囊体的质子梯度，而其中只有一件是「运输」。当质子只是在膜的一侧被消耗（NADP⁺ 的还原）、在另一侧被释放（水的光解）时，这种传递是表观的。当质子确实被搬过膜时，才是真实的 —— 而这是由疏水的质体醌分子在膜内与细胞色素 b₆f 复合体一起完成的。光照时整个腔内的质子浓度都升高 —— 质子是离域的，所以这个梯度是整个腔的整体性质，而不是局部性质 —— 而外表面的浓度则下降。" },
    { en: "the thylakoid as a mitochondrion turned inside out", cn: "类囊体是翻过来的线粒体",
      def_en: "The last supramolecular thylakoid complex is the ATP-synthase, containing only non-pigmented proteins, analogous in composition and function to the mitochondrial enzyme, equalising the transmembrane difference while making ATP from ADP and inorganic phosphate. Its orientation is reversed: in photosynthetic redox reactions protons move from outside inwards into the thylakoid, and the knobs of the synthase protrude on the outer surface and let protons through from inside out. Both reversals agree with each other, so the mitochondrial picture converts to this one by mirroring both at once. An explanation is offered — the evolution of membranes and their different constriction and self-enclosure — and it is offered as an explanation, not as a demonstrated mechanism.",
      def_cn: "类囊体上最后一个超分子复合体是 ATP 合酶：只含非色素蛋白，组成与功能都类似于线粒体那个酶，它拉平跨膜差值，同时由 ADP 和无机磷酸合成 ATP。它的取向是反的：在光合氧化还原反应里质子从外向内进入类囊体，而合酶的球头朝外表面凸出，让质子由内向外通过。两处反转彼此自洽，所以只要把这两点同时镜像一下，线粒体的图就变成了类囊体的图。教材给了一个解释 —— 膜的演化及其不同方式的缢缩与自我封闭 —— 而它只是作为一种解释提出的，不是已证实的机制。" },
    { en: "the oxygen-evolving centre as a counting device", cn: "会数数的放氧复合体",
      def_en: "A cluster of four manganese ions, one calcium ion and five oxygens, written Mn4CaO5, chair-shaped, held on the lumen face of PS II by three peripheral proteins. It exists to fix an arithmetic mismatch: P680 plus accepts one electron at a time, oxidising two waters to O2 releases four at once, and no single photon of visible light carries enough energy to break a bond in water. The cluster accumulates one oxidising equivalent per photon through Tyr_Z, a tyrosine in D1 that gives up a proton and an electron together and takes both back by oxidising the cluster, until it carries a charge of 4 plus and takes four electrons from two waters in one act. The four protons are released into the lumen, so it is a proton pump that pumps nothing.",
      def_cn: "一个由四个锰离子、一个钙离子和五个氧组成的簇，写作 Mn₄CaO₅，形如一把椅子，由三个外周蛋白扶在 PSII 面向腔的一侧。它的存在是为了解决一道算术不匹配：P680⁺ 一次只收一个电子，而把两个水氧化成 O₂ 一次要放出四个，而且可见光的单个光子根本不够能量打断水里的键。这个簇每来一个光子就多攒一个氧化当量，中转站是 D1 上的 Tyr_Z —— 一个同时失去质子和电子、再靠氧化这个簇把两者拿回来的酪氨酸 —— 直到它带上 +4 电荷，才一次性从两个水分子拿走四个电子。那四个质子被放进腔里，所以它是一台什么也不泵的质子泵。" }
  ],
  steps: [
    {
      en: "Structurally a thylakoid membrane resembles other biological membranes, but its closest relative both structurally and functionally is the inner mitochondrial membrane, which is the seat of the respiratory chain. Two differences in composition are named: thylakoid membranes contain fewer phospholipids, and they additionally carry glycolipids — monogalactosyldiacylglycerol, digalactosyldiacylglycerol and sulfoquinovosyldiacylglycerol, the last of the three being the sulfur-containing member. **The membrane that runs the light reactions is built to the same plan as the membrane that runs the respiratory chain, so nearly everything already held about the mitochondrion carries straight across.**",
      cn: "就结构而言，类囊体膜与其他生物膜相似；但在结构和功能两方面与它最接近的，是呼吸链所在的线粒体内膜。教材点了两处组成上的差别：类囊体膜的磷脂较少，而且额外带有糖脂 —— 单半乳糖基二酰基甘油、双半乳糖基二酰基甘油、硫代异鼠李糖基二酰基甘油，其中最后一个是含硫的那位。**跑光反应的这张膜，和跑呼吸链的那张膜是同一套图纸造出来的，所以关于线粒体已经掌握的东西，几乎可以原样搬过来。**",
      src: "B §9.1.2, p.206",
      see: [{ id: "L-19-1-1", en: "the mitochondrial respiratory chain in full — the twin of everything below", cn: "完整的线粒体呼吸链 —— 下面一切内容的孪生兄弟" }]
    },
    {
      link_en: "so how much of the respiratory chain is reused, and what is actually new?",
      link_cn: "那呼吸链有多少被原样搬来，真正新增的又是什么？",
      en: "For electron and proton transport the carriers operating in the thylakoid membrane are analogues of the mitochondrial ones: quinones, cytochromes, iron-sulfur proteins, flavoproteins, and NADP in its oxidized or reduced form. Beyond that shared kit, organisms with oxygenic photosynthesis — the kind that takes its electrons from water and releases O2 — have exactly two things a mitochondrion does not. Plastocyanin is a blue copper protein of relative molecular mass 1 to 2 times ten thousand, with a broad absorption maximum around 597 nanometres and a standard redox potential at pH 7 of 370 millivolts. The other is a specific set of non-pigmented proteins responsible for the oxygen-evolving reactions, named the oxygen-evolving complex and abbreviated OEC. **Only two components here have no mitochondrial counterpart, a copper carrier and the water-splitting machinery — and the water-splitting machinery carries no pigment at all.**",
      cn: "在电子与质子传递方面，类囊体膜里运行的载体都是线粒体那套的类似物：醌类、细胞色素、铁硫蛋白、黄素蛋白，以及氧化态或还原态的 NADP。除这套共用工具之外，产氧光合生物恰好还有两样线粒体没有的东西。质体蓝素 (plastocyanin) 是一种蓝色含铜蛋白，相对分子质量 1 到 2 万，宽吸收峰约在 597 nm，pH 7 下的标准氧化还原电位为 370 mV。另一样是一组专门的非色素蛋白，负责放氧反应，叫做放氧复合体，缩写 OEC。**这里只有两个组分在线粒体里找不到对应物：一个铜载体，和裂解水的那套机构 —— 而裂解水的机构本身完全不带色素。**",
      src: "B §9.1.2, p.206",
      see: [{ id: "6-2-4-1", en: "the same carriers on the mitochondrial side — quinones, cytochromes, Fe-S proteins", cn: "线粒体那一侧的同一批载体 —— 醌、细胞色素、铁硫蛋白" }]
    },
    {
      link_en: "and now the one place in all of it where light does something chemical",
      link_cn: "现在来看这一切当中，唯一让光做出化学行为的那个位置",
      en: "The biochemical account of photosynthesis begins in the reaction centre, abbreviated RC, of a photosystem, and the ratio of total chlorophyll to chlorophyll in the reaction centres is about 200, so roughly one chlorophyll molecule in two hundred sits where chemistry can happen. Nothing chemical separates that one from the rest; the difference is geometry. **Two reaction-centre chlorophylls are held close enough to share bonding orbitals and to react as a single compound when excited, and that pair is called the special pair.** An electron in it is lifted into a higher-energy orbital and handed to an acceptor waiting alongside: the acceptor goes negative, the pair is left one electron short as a positively charged radical, and light has stopped being energy and become a separated electric charge.",
      cn: "光合作用的生化叙述从光系统的反应中心（缩写 RC）开始；而总叶绿素与反应中心叶绿素之比约为 200，也就是说大约每两百个叶绿素分子里，只有一个待在能发生化学反应的位置上。它在化学上与其余那些一模一样，使它与众不同的是几何位置。**反应中心的两个叶绿素被固定得足够近，近到共用成键轨道、受激时表现得像一个单一化合物 —— 这一对就叫 special pair（特殊对）。** 它里面的一个电子被抬到更高能量的轨道上，交给旁边等着的一个受体：受体带上负电，这一对少了一个电子、成为带正电的自由基 —— 到这里，光已经不再是能量，而成了被分开的电荷。",
      src: "A p.707 · B §9.1.3, pp.206–207"
    },
    {
      link_en: "and the other hundred and ninety-nine?",
      link_cn: "那另外一百九十九个呢？",
      en: "They form an antenna, which is a collector: an excited pigment molecule passes its energy to a neighbouring chlorophyll, exciting that one and dropping back itself, and the hop repeats from molecule to molecule until the excitation reaches the special pair. The travelling packet of excitation energy is called an exciton, and what travels is energy alone, so no electron and no charge moves and there is no charge separation anywhere in a light-harvesting system. **An energy hop is fast and cheap while an electron transfer is slow and expensive, which is exactly why a cell builds two hundred collectors to feed one converter.**",
      cn: "它们组成天线 (anténa)，也就是一套收集装置：一个被激发的色素分子把能量传给邻近的叶绿素，把邻居激发起来、自己落回基态；这一跳在分子之间一路重复，直到激发抵达 special pair。这个在分子间跑动的激发能量包叫激子 (exciton)，跑的只有能量，所以没有电子在动、也没有电荷在动 —— 捕光系统内部完全不发生电荷分离。**能量跳跃又快又便宜，电子传递又慢又贵；正因如此，细胞才造两百个收集器去供养一个转换器。**",
      src: "A p.707 · B §9.1.3, p.207"
    },
    {
      link_en: "so what exactly is the light-dependent step, and what makes that one chlorophyll capable of it?",
      link_cn: "那到底哪一步才是依赖光的，而那一个叶绿素凭什么做得到？",
      en: "Strictly speaking only one reaction in photosynthesis depends on light: P, the protein-bound chlorophyll of the reaction centre, absorbs the delivered energy and becomes the excited form P*. On de-excitation P* hands an electron to the primary acceptor A1, giving P+ and A1 minus. The high quantum yield of that reaction in an intact photosynthetic system means this route of de-excitation is strongly preferred over the alternatives, fluorescence and conversion into heat, which remain available and simply lose the competition. Oxidation of P changes its absorption spectrum, so reaction-centre pigments are designated by the wavelength of their absorption maximum: P870 in bacteria, P680 and P700 in oxygenic photosynthesis. **A reaction-centre chlorophyll is chemically an ordinary chlorophyll, and its microenvironment inside the pigment-protein complex is what lets it photooxidise — give up an electron at all.**",
      cn: "严格说来，光合作用里只有一个反应依赖光：P —— 反应中心里与蛋白结合的叶绿素 —— 吸收送来的能量，变成激发态 P*。去激发时，P* 把一个电子交给初级受体 A₁，生成 P⁺ 与 A₁⁻。这个反应在完整光合系统中的高量子产额意味着，这条去激发途径远比其他途径（荧光、转化为热）更受偏好；那些途径依然存在，只是竞争不过它。P 被氧化会改变其吸收光谱，所以反应中心色素按吸收峰的波长来命名：细菌里是 P₈₇₀，产氧光合作用里是 P₆₈₀ 与 P₇₀₀。**反应中心叶绿素在化学上就是一个普通叶绿素；让它能够发生光氧化、能够交出一个电子的，是它在色素蛋白复合体里所处的微环境。**",
      src: "B §9.1.3, p.207"
    },
    {
      link_en: "a reaction centre never works alone, and the unit it belongs to has a name",
      link_cn: "反应中心从不单干，它所属的那个单元有名字",
      en: "A photosystem, abbreviated PS, is the reaction centre together with its nearest associated acceptors and donors of electrons, the corresponding binding proteins, and the light-harvesting pigments — the reaction centre plus everything immediately serving it. Photosystems are oriented: they are embedded and localised in the thylakoid membranes, penetrating the phospholipid bilayer as integral proteins, or more precisely as pigment-protein complexes. **Because a photosystem sits oriented across the membrane, the primary photochemical reaction separates charge across the membrane too, where a separation in free solution would simply recombine.**",
      cn: "光系统（缩写 PS）是反应中心连同与它关联的最近的电子受体与供体、相应的结合蛋白，以及捕光色素 —— 也就是反应中心加上一切直接为它服务的东西。光系统是定向的：它们嵌入并定位在类囊体膜中，作为整合蛋白 —— 更确切地说是色素蛋白复合体 —— 贯穿磷脂双层。**正因为光系统是跨膜定向摆着的，初级光化学反应分离出的电荷也是跨膜定向的；而自由溶液里的电荷分离只会复合掉，什么也留不下。**",
      src: "B §9.1.3, pp.207–208"
    },
    {
      link_en: "a separated charge is unstable, so both halves are moved apart at once",
      link_cn: "分开的电荷不稳定，所以两头同时被拉远",
      en: "On the acceptor side the electron moves from the primary acceptor onto a secondary acceptor, down the gradient of electrochemical potential: A1 minus plus A2 gives A1 plus A2 minus. On the donor side the electron gap in the reaction-centre chlorophyll is refilled from the preceding member of the electron transport chain, the secondary donor D2: D2 plus P+ gives D2+ plus P. The primary donor of electrons is the pigment P in the reaction centre itself, and D2 is only the secondary one — getting that round the wrong way makes the whole notation incoherent. **Both moves do one job: drag the two separated charges further apart, fast, before they can fall back together — and the whole sequence from water to NADP+ fits into that notation.**",
      cn: "在受体一侧，电子沿电化学势梯度从初级受体移到次级受体：A₁⁻ + A₂ → A₁ + A₂⁻。在供体一侧，反应中心叶绿素上的电子空缺由电子传递链前一位成员 —— 次级供体 D₂ —— 补上：D₂ + P⁺ → D₂⁺ + P。初级电子供体是反应中心里的色素 P 本身，D₂ 只是次级的 —— 这两个反过来，整套记号就不自洽了。**两个动作干的是同一件事：趁两个被分开的电荷还没重新合到一起，赶快把它们拉得更远 —— 而从水到 NADP⁺ 的整条序列，都装得进这套记号。**",
      src: "B §9.1.3, pp.207–208"
    },
    {
      link_en: "in a bacterium, one reaction centre is already a complete photosynthetic machine",
      link_cn: "在细菌里，一个反应中心就已经是一台完整的光合机器",
      en: "A photosynthetic bacterium carries one reaction centre, and there are two kinds of it. Purple bacteria run the pheophytin-quinone kind at a special pair called P870, where pheophytin is chlorophyll a with its central magnesium ion taken out; electrons go out through pheophytin and a quinone to a proton-pumping cytochrome complex and come back to P870. **That path is closed, so it reduces nothing at all and its sole product is a proton gradient across the membrane, and hence ATP.** Green sulfur bacteria run the iron-sulfur kind at P840, which can run the same closed loop or run linear — out to ferredoxin, an iron-sulfur electron-carrier protein, and on to NAD+, with the electron that left P840 replaced by oxidising hydrogen sulfide to elemental sulfur.",
      cn: "一个光合细菌只带一个反应中心，而反应中心分成两类。紫细菌用的是去镁叶绿素-醌型，特殊对叫 P870；去镁叶绿素 (pheophytin) 就是把中心镁离子拿掉的叶绿素 a。电子从这里出发，经去镁叶绿素和一个醌，交给一个会泵质子的细胞色素复合体，再绕回 P870。**这条路是闭合的，所以它什么也还原不了，唯一的产物是跨膜的质子梯度，以及由此得到的 ATP。** 绿硫细菌用的是铁硫型，特殊对叫 P840；它既能走同样的闭环，也能走线性路线 —— 出去交给铁氧还蛋白 (ferredoxin)，那是一种含铁硫的电子载体蛋白，再交给 NAD⁺；而 P840 失去的那个电子，靠把硫化氢氧化成单质硫补回来。",
      src: "A pp.707–708"
    },
    {
      link_en: "a plant has both kinds at once, and that single fact explains the shape of every diagram",
      link_cn: "植物两类同时都有 —— 而正是这一条，决定了所有示意图的形状",
      recall_en: "the two bacterial kinds from the step above, now sitting in one membrane",
      recall_cn: "上一步那两类细菌反应中心，现在装在同一张膜上",
      en: "Photosynthesizing bacteria work with one photosystem, while the oxygenic type contains two photosystems and therefore two reaction centres, and that apparatus most likely arose by combining two simpler bacterial photosystems. Photosystem II is the pheophytin-quinone kind carrying the special pair P680; photosystem I is the iron-sulfur kind carrying P700. **Two photoreactions in series are drawn as a lying letter Z, and two numbers follow from that instead of needing memorising: every electron is lifted twice, and eight photons go per O2.**",
      cn: "光合细菌只用一个光系统，而产氧型含两个光系统、因而有两个反应中心；这套装置很可能就是由两套更简单的细菌光系统合并而来的。光系统 II（PSII）是去镁叶绿素-醌型，带特殊对 P680；光系统 I（PSI）是铁硫型，带 P700。**两次光反应串联，画出来就是一个横倒的字母 Z；于是有两个数字变成了推论而不是需要死记的事实：每个电子要被抬两次，每放出一个 O₂ 要花八个光子，两个光系统各四个。**",
      src: "A pp.708–710 · B §9.1.3, pp.206–208"
    },
    {
      link_en: "and the Z can be drawn against two different axes, each answering a different question",
      link_cn: "而这个 Z 可以画在两种坐标上，各回答一个不同的问题",
      en: "Against the scale of redox potentials the oxidants sit at the bottom, with a standard potential at pH 7 of 820 millivolts for the couple of O2 and water, and the reductants at the top, at minus 320 millivolts for the couple of NADP+ and NADPH; the vertical distance between them is the work the photons have to do. Against the scale of Gibbs energy the exergonic processes, drawn as a dashed line, separate from the endergonic ones. **The endergonic steps are exactly the processes inside the reaction centres, which is the whole reason photons are needed: every other step in the chain runs downhill of its own accord.**",
      cn: "在氧化还原电位坐标上，氧化剂在下方 —— O₂/H₂O 电对在 pH 7 下的标准电位是 820 mV；还原剂在上方 —— NADP⁺/NADPH 电对是 −320 mV；两者之间的垂直距离，就是光子必须完成的功。在吉布斯能坐标上，放能过程（画作虚线）与吸能过程分得一清二楚。**吸能的那些步骤恰恰就是反应中心内部的过程 —— 这正是需要光子的全部理由：链条上其余每一步都是自己往下走的。**",
      src: "B §9.1.3, p.208"
    },
    {
      link_en: "and the two photosystems are numbered in an order that looks wrong until you read their definitions",
      link_cn: "两个光系统的编号看着不对劲，直到你读了它们的定义",
      en: "Each photosystem is defined by what it does. The one which photooxidizes water molecules and transfers electrons to plastoquinone, a small carrier soluble in the lipid of the membrane, is conventionally designated PS II; the one which transfers electrons to NADP+, and additionally takes part in cyclic electron flow between ferredoxin and the plastoquinones, is PS I. Topologically, photolysis of water takes place at the inner surface of the thylakoids, while at the outer sides NADP+ is reduced and the ATP-synthase complex protrudes. **The numbering is historical and not sequential, since PS II acts first in the linear chain — and the inner-versus-outer asymmetry is what turns a redox chain into a proton gradient.**",
      cn: "两个光系统都是按它们做什么来定义的。光氧化水分子、并把电子传给质体醌（plastoquinone，一种溶于膜脂的小载体）的那个，按惯例记作 PSII；把电子传给 NADP⁺、并且还参与铁氧还蛋白与质体醌之间循环电子流的那个，是 PSI。就拓扑而言，水的光解发生在类囊体的内表面，而在外侧还原 NADP⁺、并由 ATP 合酶复合体凸出。**编号是历史遗留而不是先后顺序 —— 在线性链里先动手的是 PSII；而「内侧对外侧」这种不对称，正是把一条氧化还原链变成一个质子梯度的原因。**",
      src: "B §9.1.3, p.208"
    },
    {
      link_en: "before following one electron through, here is the whole membrane in one reading",
      link_cn: "在跟着一个电子走完全程之前，先把整张膜一次读完",
      en: "The abbreviations on the master scheme name the pieces: Pheo is pheophytin, PC is plastocyanin, Fd is ferredoxin, A0 and A1 are the electron acceptors within PS I, FeS is a protein carrying non-haem-bound iron atoms, QA and QB and the pair Q with QH2 are oxidized and reduced molecules of plastoquinone, and CF0 together with CF1 constitutes the ATP-synthase, drawn with its CF1 knob protruding into the stroma. PS II, cytochrome b6f, PS I and CF0 are all integral pigment-protein complexes, meaning they span the bilayer rather than sitting on its surface. Beyond PS I, 2 protons and 2 NADP+ become 2 NADPH at the stroma face by way of ferredoxin and ferredoxin-NADP+ reductase. **Read as one process: two waters split at the lumen face of PS II give four protons and O2, cytochrome b6f moves eight protons across, and three protons returning through CF1 make one ATP.**",
      cn: "主图上的缩写把各个零件点了名：Pheo 是去镁叶绿素，PC 是质体蓝素，Fd 是铁氧还蛋白，A₀ 与 A₁ 是 PSI 内部的电子受体，FeS 是携带非血红素结合铁原子的蛋白，Q_A、Q_B 以及 Q 与 QH₂ 这一对是质体醌的氧化态和还原态分子，CF₀ 与 CF₁ 合起来构成 ATP 合酶 —— 图上画的是 CF₁ 那个球头朝基质凸出。PSII、细胞色素 b₆f、PSI 与 CF₀ 都是整合型色素蛋白复合体，也就是说它们贯穿双层膜，而不是贴在表面上。在 PSI 之外的基质面上，2 个质子与 2 个 NADP⁺ 经铁氧还蛋白和 Fd-NADP⁺ 还原酶变成 2 个 NADPH。**作为一个过程来读：两个水在 PSII 的腔侧被裂解，给出四个质子和 O₂；细胞色素 b₆f 复合体把八个质子搬过膜；三个质子从 CF₁ 头部回流，做出一个 ATP。**",
      src: "B §9.1.3, pp.206–207"
    },
    {
      link_en: "inside PS II there is one structural oddity, and it is the one worth keeping",
      link_cn: "PSII 内部有一处结构上的怪事，而恰恰是这一处值得记",
      en: "The core of PS II is a pair of proteins named D1 and D2. They are nearly mirror-symmetrical and each carries its own full set of electron carriers, yet electrons travel down only the D1 branch, leaving the D2 branch built, present and electronically silent. **All the wear therefore falls on one subunit: D1 carries the tyrosine residue that every electron taken from water passes through, and a plant must keep synthesising fresh copies of it.** D1 is also the subunit that takes the photo-oxidative damage and holds the binding site of several herbicides. A machine with one live branch has one part that wears out.",
      cn: "PSII 的核心是一对蛋白，叫 D1 和 D2。它们几乎镜像对称，各自带着一整套电子载体，但电子只走 D1 那一条支路 —— D2 那条造出来了、也在那里，电子学上却是哑的。**于是所有损耗都压在一个亚基上：从水拿来的每一个电子都要经过 D1 上的那个酪氨酸残基，而植物必须不停地合成新的 D1。** 承担光氧化损伤的正是 D1，好几种除草剂的结合位点也在 D1 上。只有一条支路带电的机器，就只有一个零件会磨坏。",
      src: "A p.710",
      beyond: true,
      beyondNote: "That D1 is the herbicide-binding subunit and is continuously resynthesised is standard and examinable; p.710 gives the one-branch asymmetry and the tyrosine, not the turnover."
    },
    {
      link_en: "now follow one electron out of P680, and a counting problem appears immediately",
      link_cn: "现在跟着一个电子离开 P680，一个「数目对不上」立刻冒出来",
      en: "Excited P680 gives an electron to pheophytin within picoseconds and is left as P680+. Pheophytin passes it to a tightly bound plastoquinone called PQA, and PQA passes it on to a second, loosely bound one called PQB. PQB does not leave until it has taken two electrons in two such transfers and picked up two protons from the stroma, becoming the fully reduced quinol PQBH2. **A reaction centre works one electron at a time and a mobile carrier works two, so PQB is the converter between them — and the two protons it took from the stroma go into the lumen.**",
      cn: "被激发的 P680 在皮秒内把一个电子交给去镁叶绿素，自己变成 P680⁺。去镁叶绿素把电子交给一个紧密结合的质体醌 PQ_A，PQ_A 再交给第二个、结合较松的 PQ_B。PQ_B 要等到经两次这样的传递拿满两个电子、并从基质一侧抓来两个质子、变成完全还原的醇式 PQ_BH₂，才会离开。**反应中心一次只处理一个电子，而流动载体一次运两个 —— PQ_B 就是这两种「进制」之间的转换器；而它从基质拿走的那两个质子，将被放进腔里。**",
      src: "A p.710"
    },
    {
      link_en: "PQBH2 carries the electrons to the machine that banks the energy",
      link_cn: "PQ_BH₂ 把电子送到真正把能量存下来的那台机器",
      recall_en: "the same Q cycle as mitochondrial Complex III, and for the same reason as the PQB step above",
      recall_cn: "和线粒体复合体 III 是同一个 Q 循环，理由也和上一步 PQ_B 那里一样",
      en: "Cytochrome b6f is the complex sitting between the two photosystems, and it is the chloroplast's version of mitochondrial Complex III, the proton-pumping complex of the respiratory chain: the same kind of b-type cytochrome, the same Rieske iron-sulfur protein, the same Q cycle, delivering up to four protons into the lumen per pair of electrons. It hands the electrons on to plastocyanin, which carries them one at a time to PS I. **The lumen is a tiny flattened space, so few protons shift its pH a long way: stroma at pH 8 against lumen at pH 5 is a thousandfold difference bought partly with geometry, not pumping.**",
      cn: "细胞色素 b₆f 是夹在两个光系统之间的复合体，它就是叶绿体版的线粒体复合体 III —— 呼吸链里那个泵质子的复合体：同样的 b 型细胞色素，同样的 Rieske 铁硫蛋白，同样的 Q 循环，每传一对电子最多往腔里送四个质子。它把电子交给质体蓝素，由后者一次一个地送到 PSI。**腔是一个极小的扁平空间，所以少量质子就能把它的 pH 拉开很远：基质 pH 8 对腔 pH 5，是一千倍的差距 —— 这段梯度有一部分是靠几何形状买来的，而不是靠泵出来的。**",
      src: "A pp.712–713 · B §9.1.3, pp.208–209",
      see: [{ id: "6-2-4-3", en: "the Q cycle in Complex III, where this mechanism was first set out", cn: "复合体 III 里的 Q 循环 —— 这套机制最初讲清楚的地方" }]
    },
    {
      link_en: "and at PS I the same act happens a second time",
      link_cn: "到了 PSI，同一个动作再来一遍",
      recall_en: "identical in form to the special-pair event near the top of this chain",
      recall_cn: "形式上和这条主线开头那次 special pair 事件完全一样",
      en: "Excited P700 hands an electron to A0, a chlorophyll a doing exactly the job pheophytin does in PS II, and P700+ pulls its replacement off plastocyanin. The electron then runs through phylloquinone, three clusters of four iron and four sulfur atoms, and ferredoxin, and ferredoxin-NADP+ reductase uses it to reduce NADP+ to NADPH on the stroma face. **The reason for performing the same act twice is the size of the climb: one photosystem can lift an electron off water, and only a second lift carries that electron high enough to reduce NADP+.**",
      cn: "被激发的 P700 把一个电子交给 A₀ —— 一个叶绿素 a，干的活和 PSII 里的去镁叶绿素完全一样；而 P700⁺ 从质体蓝素那里把缺的电子补回来。电子接着经叶绿醌 (phylloquinone)、三个由四个铁和四个硫组成的簇，以及铁氧还蛋白；Fd-NADP⁺ 还原酶用它在基质面上把 NADP⁺ 还原成 NADPH。**同一个动作要做两遍，原因是这段爬升太高：一个光系统能把电子从水身上抬起来，而只有第二次抬升才能把它送到足以还原 NADP⁺ 的高度。**",
      src: "A p.711"
    },
    {
      link_en: "electrons have been moving all this time, and so have protons — but not in the way the phrase suggests",
      link_cn: "这一路上电子在动，质子也在动 —— 但不是这个说法听上去的那个意思",
      en: "Electron movement is coupled to proton transfer, as in energy conservation in the respiratory chain, and two senses of that phrase have to be kept apart. The transfer is apparent when protons are merely consumed on one side of the membrane, in the reduction of NADP+, and released on the other, in the photolysis of water. It is real when protons are physically carried across, and the real transfer is provided by the hydrophobic plastoquinone molecules working with the cytochrome b6f complex inside the membrane. On illumination the proton concentration rises throughout the whole inner space of the thylakoids, the protons being delocalised so that the gradient is a bulk property of the lumen rather than a local one, while at the outer surface it falls. **Only the plastoquinones actually carry protons across the membrane; the rest of the gradient is built by consuming protons on one face and releasing them on the other, with nothing transported at all.**",
      cn: "电子的移动与质子传递相偶联，和呼吸链里的能量守恒一样；但「质子传递」这句话的两种含义必须分开。当质子只是在膜的一侧被消耗（NADP⁺ 的还原）、在另一侧被释放（水的光解）时，这种传递是表观的。当质子确实被搬过膜时才是真实的，而真实的传递由疏水的质体醌分子在膜内与细胞色素 b₆f 复合体一起完成。光照时类囊体整个内腔中的质子浓度升高 —— 质子是离域的，所以这个梯度是腔的整体性质而非局部性质 —— 而外表面的浓度反而下降。**真正把质子搬过膜的只有质体醌；梯度的其余部分只是「一面消耗质子、另一面释放质子」造成的，并没有任何东西被运走。**",
      src: "B §9.1.3, pp.208–209"
    },
    {
      link_en: "and the gradient is spent by a machine already met on the other side of the cell",
      link_cn: "而这个梯度，是被细胞另一头早已见过的一台机器花掉的",
      en: "The Gibbs energy of that difference is used either directly, for instance in active transport, or by the ATP-synthase, the last supramolecular thylakoid complex, which contains only non-pigmented proteins, equalises the difference across the two sides and synthesizes ATP from ADP and inorganic phosphate. Its composition and function are analogous to the ATP-synthase of the inner mitochondrial membrane, and its orientation is reversed: in photosynthetic redox reactions protons move from outside inwards into the thylakoids, and the knobs of the synthase protrude on the outer surface and let protons through from inside out. **A thylakoid is a mitochondrion turned inside out — the pumping direction and the knob orientation are both mirrored, and the two reversals agree with each other.** An explanation is offered for the reversal, in the evolution of membranes and their different constriction and self-enclosure, and it is offered as an explanation rather than as a demonstrated mechanism.",
      cn: "这个差值的吉布斯能，或者被直接利用（例如用于主动运输），或者被 ATP 合酶利用 —— 那是类囊体上最后一个超分子复合体，只含非色素蛋白，它拉平膜两侧的差值，并由 ADP 与无机磷酸合成 ATP。它的组成与功能都类似于线粒体内膜上的 ATP 合酶，而取向是反的：在光合氧化还原反应中质子从外向内进入类囊体，合酶的球头朝外表面凸出，让质子由内向外通过。**类囊体就是一个里外翻过来的线粒体 —— 泵送方向和球头取向同时被镜像，两处反转彼此自洽。** 教材为这个反转给了一个解释：源于膜的演化及其不同方式的缢缩与自我封闭；这只是作为一种解释提出的，而不是已证实的机制。",
      src: "B §9.1.3, pp.208–209",
      see: [{ id: "6-2-4-5", en: "Complex V — the same machine on the mitochondrial side", cn: "复合体 V —— 线粒体那一侧的同一台机器" },
            { id: "L-20-3-1", en: "why the reversed orientation is not really a reversal at all", cn: "为什么那个「反过来的取向」其实根本不算反过来" }]
    },
    {
      link_en: "the second lift can also be spent a different way, and that turns out to be a dial",
      link_cn: "第二次抬升也可以花在别处，而这恰好是一个可调的旋钮",
      en: "Some electrons arriving at ferredoxin turn back, through plastoquinone, cytochrome b6f and plastocyanin to P700, instead of continuing to NADP+. That loop is called cyclic electron flow, or cyclic photophosphorylation, and its only result is the formation of ATP: no NADPH and no O2 come out of it, while proton pumping continues. Two photoreactions in series, by contrast, are linear electron flow, otherwise called non-cyclic photophosphorylation. What the cyclic path is for is a ratio: CO2 assimilation consumes ATP and NADPH at 3 to 2, and linear flow on its own does not deliver 3 to 2. **By partitioning electrons between the linear and the cyclic path, a plant tunes what the light reactions produce to what the carbon reactions will spend.**",
      cn: "有一部分抵达铁氧还蛋白的电子会折返 —— 经质体醌、细胞色素 b₆f、质体蓝素回到 P700 —— 而不再往 NADP⁺ 去。这个回路叫循环电子流，也叫循环光合磷酸化，它唯一的结果是生成 ATP：既不出 NADPH 也不出 O₂，而质子泵送照常进行。相对地，两次光反应串联就是线性电子流，另一个名字叫非循环光合磷酸化。循环那条路是为一个比例而存在的：CO₂ 同化消耗 ATP 与 NADPH 的比例是 3 比 2，而单靠线性电子流给不出 3 比 2。**靠调节电子在线性路线和循环路线之间的分配，植物把光反应「产什么」调到与碳反应「花什么」一致。**",
      src: "A p.713 · B §9.1.3, p.208",
      see: [{ id: "L-20-4-1", en: "what that 3 to 2 is spent on — the switches that turn the carbon reactions on", cn: "那个 3:2 花在哪 —— 把碳反应打开的那些开关" },
            { id: "9-19", en: "the Calvin cycle in full, and its net yield", cn: "完整的 Calvin 循环及其净产率" }]
    },
    {
      link_en: "two photosystems in series create a problem no bacterium ever had",
      link_cn: "两个光系统串联，带来了细菌从未有过的一个问题",
      en: "P700 is excited by longer-wavelength, lower-energy light than P680, and energy always migrates downhill between pigments, so if the two photosystems sat next to each other the excitons collected by the antenna of PS II would drift into PS I and leave PS II chronically underexcited. The answer is spatial: PS II sits almost entirely in the tightly appressed granal thylakoid membranes, while PS I and the ATP synthase sit in the unstacked stromal thylakoids where they can reach ADP and NADP+ dissolved in the stroma, and LHCII, the mobile light-harvesting complex, is itself the adhesive holding those stacks together. Balance is then tuned by a switch: accumulated PQH2 activates a protein kinase that phosphorylates one critical threonine residue in LHCII, and phosphorylated LHCII loses its grip on the appressed membrane, drifts to the stromal thylakoids and feeds its excitons to PS I instead, which speeds the oxidation of PQH2 and cancels the imbalance that produced the signal. **Stacking is functional and not decorative: pressing the granal membranes together is how PS II is kept out of reach of PS I, and one phosphate on one threonine then sets the antenna distribution.**",
      cn: "激发 P700 所需的光波长更长、能量比 P680 低，而色素之间的能量永远往低处流；所以两个光系统如果挨在一起，PSII 天线收集到的激子会漂进 PSI，让 PSII 长期吃不饱。解法是空间上的：PSII 几乎全部待在紧密贴合的基粒类囊体膜上，而 PSI 和 ATP 合酶待在不堆叠的基质类囊体上，那里才够得着溶在基质中的 ADP 和 NADP⁺；而 LHCII，那个可移动的捕光复合体，本身就是把这些膜片粘在一起的胶。平衡则靠一个开关来调：积累起来的 PQH₂ 激活一个蛋白激酶，把 LHCII 上一个关键的苏氨酸残基磷酸化；磷酸化的 LHCII 抓不住贴合的膜，漂到基质类囊体上去，改把激子喂给 PSI —— 于是 PQH₂ 被氧化得更快，产生这个信号的失衡自己被抵消掉。**堆叠是功能性的，不是装饰：把基粒膜压在一起，正是让 PSII 待在 PSI 够不着的地方的办法；而一个苏氨酸上的一个磷酸基，随后决定了天线怎么分配。**",
      src: "A p.713"
    },
    {
      link_en: "and when photons arrive faster than either path can spend them",
      link_cn: "而当光子来得比两条路线花得掉的还快时",
      recall_en: "the accessory pigments that widened the absorbed spectrum now take a second job",
      recall_cn: "那些拓宽了吸收光谱的辅助色素，在这里兼了第二份差事",
      en: "When light is intense enough that PS II and PS I together cannot make ATP and NADPH as fast as photons arrive, the carotenoids carried inside LHCII absorb the excitons and quench the excited chlorophyll before it can react. What that prevents is a chemical reaction and not merely waste: an excited chlorophyll with nowhere to send its energy can hand it to O2 and generate reactive oxygen species, and O2 is exactly what PS II is busy producing. **The trigger for switching into the quenching state is a falling lumen pH, which is what a lumen whose protons are not being spent looks like, and the detailed mechanism of the switch is not known.**",
      cn: "当光强到 PSII 和 PSI 加起来也来不及把 ATP 和 NADPH 造出来、跟不上光子到达的速度时，LHCII 里携带的类胡萝卜素就吸走激子，在受激叶绿素反应之前把它淬灭掉。它拦下的是一场化学反应，而不只是浪费：一个无处可送能量的激发态叶绿素，可能把能量交给 O₂ 而生成活性氧 —— 而 O₂ 恰恰是 PSII 正在大量产出的东西。**切换到淬灭状态的触发信号是腔内 pH 下降 —— 「质子没被花掉」的腔就长这个样子；而这个切换的详细机制尚不清楚。**",
      src: "A p.713",
      see: [{ id: "9-8", en: "the same carotenoids in their first job, widening the absorbed spectrum", cn: "同一批类胡萝卜素的第一份差事 —— 拓宽吸收光谱" }]
    },
    {
      link_en: "one thing is still unfinished: P680+ is short an electron, and the source is water",
      link_cn: "还有一件事没了结：P680⁺ 还缺一个电子，而补给来源是水",
      en: "P680+ has to be given an electron back before it can absorb another photon, and the donor is water. Two obstacles stand in the way, and they are different obstacles. The first is energy: a single photon of visible light does not carry enough of it to break a bond in water, so four photons are required for the cleavage. **The second is counting: oxidising two waters to one O2 releases four electrons at once while P680+ accepts one at a time, so a device is needed turning four one-electron events into one.**",
      cn: "P680⁺ 必须先把电子补回来，才能再吸收下一个光子，而供体是水。挡在中间的有两个障碍，而且性质不同。第一个是能量：可见光的单个光子不足以打断水中的化学键，所以这次裂解需要四个光子。**第二个是数目：把两个水分子氧化成一个 O₂，一次要放出四个电子，而 P680⁺ 一次只收一个 —— 所以需要的是一台把四次单电子事件攒成一次四电子事件的装置。**",
      src: "A pp.714–715"
    },
    {
      link_en: "that device is a piece of inorganic chemistry bolted to the lumen face of PS II",
      link_cn: "这台装置是一块无机化学，挂在 PSII 面向腔的那一侧",
      en: "The oxygen-evolving centre is a cluster of four manganese ions, one calcium ion and five oxygens, written Mn4CaO5, held on the lumen face of PS II by three peripheral proteins and chair-shaped in the crystal structure. It is charged up through Tyr_Z, a tyrosine residue in D1 that gives up a proton and an electron together, becomes an electrically neutral tyrosine radical, and takes both back by oxidising the cluster. **Each photon leaves the cluster one oxidising equivalent further oxidised, and only at a charge of 4 plus does it take four electrons from two waters in one act, release O2 and reset.** It is also a proton pump that pumps nothing: the four protons are simply released on the lumen side, so choosing which face of the membrane to do the chemistry on is the whole of the mechanism.",
      cn: "放氧复合体是一个由四个锰离子、一个钙离子和五个氧组成的簇，写作 Mn₄CaO₅，由三个外周蛋白扶在 PSII 面向腔的一侧；晶体结构里它长得像一把椅子。给它充电的是 Tyr_Z，D1 上的一个酪氨酸残基：它同时交出一个质子和一个电子，变成电中性的酪氨酸自由基，再通过氧化这个簇把两者都拿回来。**每来一个光子，这个簇就被多氧化一个当量；只有当它带上 +4 电荷时，才一次性从两个水分子拿走四个电子、放出 O₂ 并回到起点状态。** 它同时还是一台什么也不泵的质子泵：那四个质子直接被放在腔的一侧 —— 所以「在膜的哪一面做这个化学反应」就是它全部的泵送机制。",
      src: "A p.715",
      openQuestion_en: "How the Mn4CaO5 cluster actually breaks the bonds in water is not settled — the structure has produced several testable hypotheses and no accepted mechanism. Describe the counting; do not narrate the bond chemistry.",
      openQuestion_cn: "Mn₄CaO₅ 簇究竟如何打断水中的键，并没有定论 —— 结构给出了几个可检验的假说，但没有公认机制。答题时讲「攒四个电子」这件事，不要把逐个成键断键的过程当成已知来讲。"
    },
    {
      link_en: "one question is left over: why water, when so many donors would do?",
      link_cn: "还剩一个问题：有那么多供体可选，为什么偏偏是水？",
      recall_en: "the green sulfur bacteria from the bacterial step, doing chemically the same move on an easier substrate",
      recall_cn: "细菌那一步里的绿硫细菌，做的是化学上同一个动作，只是底物容易得多",
      en: "In principle the electron P680+ needs could come from many organic or inorganic compounds, and photosynthetic bacteria do use a variety of donors — acetate, succinate, malate or sulfide — depending on what a particular ecological niche supplies, which ties each of those bacteria to a habitat. Primitive photosynthetic bacteria, the progenitors of modern cyanobacteria, evolved a photosystem capable of taking electrons from a donor that is always available, namely water. **The gain was independence from the niche rather than a better electron, and the price is the four photons and the manganese cluster that oxidising water needs and oxidising hydrogen sulfide does not.** The first stable products of everything in the thylakoid membrane are NADPH and ATP, in which the converted photon energy is stored, and they are spent above all on the fixation and reduction of CO2.",
      cn: "原则上，P680⁺ 所需的那个电子可以来自许多有机或无机化合物；光合细菌确实用着各式各样的供体 —— 乙酸、琥珀酸、苹果酸或硫化物 —— 取决于某个生态位里有什么，而这也就把每一种这样的细菌拴在了一个栖息地上。原始的光合细菌，也就是现代蓝细菌的祖先，演化出了一种能从「永远可得」的供体那里取电子的光系统，那就是水。**所获得的东西是「从生态位里独立出来」，而不是一个更好的电子；付出的代价，则是氧化水所需、氧化硫化氢所不需的那四个光子和那个锰簇。** 类囊体膜上这一切的最初稳定产物是 NADPH 与 ATP，被转换的光子能量就存在其中，而它们首先花在 CO₂ 的固定与还原上。",
      src: "A p.714 · B §9.1.3, pp.208–209",
      see: [{ id: "9-15", en: "where the ATP and NADPH go — CO2 fixation, and why 'dark phase' is a bad name", cn: "ATP 和 NADPH 去了哪 —— CO₂ 固定，以及「暗反应」为什么是个坏名字" },
            { id: "9-20", en: "what happens when the enzyme spending them takes O2 instead — photorespiration", cn: "花掉它们的那个酶改抓 O₂ 时会怎样 —— 光呼吸" }]
    }
  ]
};
