/* Merged spine — photorespiration, C-4 and CAM. 速通简洁版, ONE spine per TOPIC.

   Four nodes, one chain. The Lehninger telling is the backbone: it owns the cost of
   the defect, the water-against-carbon trade behind it, and CAM, which the other
   account does not carry at all. The Czech material is folded in where it ADDS — the
   salvage pathway itself (three enzymes across three compartments), the named enzymes
   of the Hatch–Slack cycle, the Km argument, the two-cell-layer anatomy, and the two
   hedged answers to what photorespiration is for.

   Shape: the defect, then what the salvage actually costs, then the one enzyme both
   answers are built from, then the two anatomical solutions — C-4 in space, CAM in
   time. Every step keeps a `src`; a step read from both carries both, separated by a
   middle dot. A = Lehninger, B = the other course book.

   Keyed by topicKey, not by node. The app prefers `key:<topicKey>` and falls back to
   the per-node spine, so no per-node spine is written for the member nodes.

   House rules, unchanged: state the thing; no unbound "the"; name the actual objects;
   no commentary about a textbook; introduce every noun in the same breath; state the
   scope; reach back. And every structural claim gets its consequence.

   ONE bold span per field. 极简 mode shows only that span, so it has to read
   correctly with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ------------------------------------- 光呼吸、C-4 与 CAM ---- */
window.BIOLITE_SPINE["key:photorespiration-c4-cam"] = {
  assumed: ["ATP", "ADP", "NADPH", "NADP+", "NADH", "NAD+", "CO2", "O2", "H2O2",
            "enzyme", "substrate", "active site", "Km", "affinity", "coenzyme",
            "mitochondrion", "chloroplast", "cytosol", "vacuole", "plastid",
            "organelle", "membrane", "pH", "acid", "Calvin cycle", "photosynthesis",
            "malate", "malic acid", "oxaloacetate", "aspartate", "pyruvate",
            "phosphoenolpyruvate", "glycine", "serine", "amino acid",
            "transamination", "decarboxylation", "hydrolysis", "phosphate",
            "phosphoanhydride bond", "glycolysis", "protein", "pigment", "leaf",
            "sugar", "starch", "sucrose", "water", "water vapour", "temperature",
            "maize", "sugar cane", "sugarcane", "crabgrass", "cactus", "prickly pear",
            "orchid", "pineapple", "soybean", "wheat", "succulent", "tropics",
            "desert", "species"],
  nodeTitle_en: "Photorespiration, C-4 plants and CAM",
  nodeTitle_cn: "光呼吸、C-4 植物与 CAM",
  title_en: "One enzyme that cannot tell CO2 from O2, what cleaning up after it costs, and the two ways plants deliver CO2 to it with the door shut",
  title_cn: "一个分不清 CO₂ 和 O₂ 的酶，替它擦屁股要花多少钱，以及植物在关着门的情况下把 CO₂ 送到它跟前的两种办法",
  terms: [
    { en: "photorespiration", cn: "光呼吸",
      def_en: "What follows from rubisco accepting O2 as well as CO2 at the same active site: the two-carbon product of that side reaction has to be recovered by a route that consumes more O2 and releases CO2, which is where the name comes from. Unlike mitochondrial respiration it conserves no energy at all and lowers net biomass. The cost is measurable — average United States soybean and wheat yields are estimated to be reduced by 36 % and 20 % — and it worsens as temperature rises, because rubisco's affinity for CO2 falls.",
      def_cn: "rubisco 在同一个活性位点上既接受 CO₂ 又接受 O₂ 所导致的后果：加氧副反应产生的那个二碳产物必须由一条回收途径处理掉，而这条途径还要再耗 O₂、放 CO₂ —— 名字正是由此而来。与线粒体的呼吸不同，它一点能量也不保存，还压低净生物量。代价是可以量出来的 —— 据估计美国大豆与小麦的平均产量分别因此减少约 36% 和 20% —— 而且温度越高越严重，因为 rubisco 对 CO₂ 的亲和力随温度下降。" },
    { en: "the salvage across three compartments", cn: "跨三个区室的回收",
      def_en: "Recovering the two-carbon product takes chloroplast, peroxisome and mitochondrion at once, and the cytosol for the last step. Chloroplast: RuBP + O2 gives 3-phosphoglycerate and phosphoglycolate, and phosphoglycolate phosphatase gives glycolate. Peroxisome: glycolate + O2 gives glyoxylate and H2O2, catalase destroys the peroxide, glyoxylate is transaminated to glycine, and hydroxypyruvate reductase reduces hydroxypyruvate to glycerate on NADH. Mitochondrion: two glycines condense to serine and one CO2 leaves. Cytosol: glycerate kinase spends ATP to return the carbon. One carbon, one NADH and one ATP gone, to recover what should never have been made.",
      def_cn: "把那个二碳产物救回来，要叶绿体、过氧化物酶体和线粒体同时上，最后一步还要用到胞质。叶绿体：RuBP + O₂ 生成 3-磷酸甘油酸与磷酸乙醇酸，磷酸乙醇酸磷酸酶再给出乙醇酸。过氧化物酶体：乙醇酸 + O₂ 生成乙醛酸与 H₂O₂，过氧化氢酶把过氧化氢拆掉，乙醛酸转氨成甘氨酸，羟基丙酮酸还原酶用 NADH 把羟基丙酮酸还原成甘油酸。线粒体：两分子甘氨酸缩合成丝氨酸，放掉一个 CO₂。胞质：甘油酸激酶花掉一个 ATP 把碳送回去。一个碳、一个 NADH、一个 ATP 就这么没了，只为救回一件本来就不该做出来的东西。" },
    { en: "PEP carboxylase and bicarbonate", cn: "PEP 羧化酶与碳酸氢根",
      def_en: "The enzyme both alternative pathways are built from, attaching inorganic carbon to phosphoenolpyruvate to give the four-carbon oxaloacetate. Its Km for inorganic carbon is lower than rubisco's, so it works where rubisco cannot, and part of the chemistry behind that is its substrate: bicarbonate, HCO3−, the abundant species of inorganic carbon at cytosolic pH, made from the arriving gas by carbonic anhydrase — carbonate dehydratase under its other name. Trap carbon cheaply where it is dilute, carry it as a four-carbon acid, release it concentrated next to rubisco.",
      def_cn: "两条替代途径共同的那个酶：把无机碳接到磷酸烯醇式丙酮酸上，生成四碳的草酰乙酸。它对无机碳的 Km 比 rubisco 低，所以能在 rubisco 干不了活的地方干活；这背后有一部分化学在于它的底物 —— 碳酸氢根 HCO₃⁻，即胞质 pH 下无机碳的主要存在形式，由碳酸酐酶（另一个名字是碳酸脱水酶）从进来的气体现做。在碳稀薄的地方廉价地把它抓住，用一个四碳酸运走，再在 rubisco 旁边高浓度地放出来。" },
    { en: "the two cell layers of a C-4 leaf", cn: "C-4 叶片的两层细胞",
      def_en: "Between the epidermis at the leaf surface and the vascular tissue at the vein lie two concentric layers of different cells, and they differ precisely by which mechanism of CO2 fixation they run. Mesophyll cells are the outer layer and run C-4, with PEP carboxylase. Bundle-sheath cells are the inner layer and run C-3, with rubisco and the Calvin cycle. Plasmodesmata — protein-lined channels joining adjacent plant cells, wide enough to pass metabolites and even small proteins — carry malate or aspartate inward. Without them the two layers would be nothing but neighbouring cells; with them the pair is a pump with a delivery pipe.",
      def_cn: "在叶表的表皮细胞与叶脉处的维管组织之间，排着两层同心的、不同的细胞，而它们的差别恰恰在于跑的是哪一套 CO₂ 固定机制。叶肉细胞是外层，跑 C-4，用 PEP 羧化酶。维管束鞘细胞是内层，跑 C-3，用 rubisco 和 Calvin 循环。胞间连丝 —— 连接相邻植物细胞、内衬蛋白的孔道，宽到代谢物甚至小蛋白都能过 —— 把苹果酸或天冬氨酸向内输送。没有它，这两层不过是彼此挨着的细胞；有了它，这一对才是一台泵加一根输送管。" },
    { en: "spatial versus temporal separation", cn: "空间分离与时间分离",
      def_en: "The one sentence that tells the two alternative pathways apart. Both trap carbon with PEP carboxylase before rubisco ever sees it, so that CO2 can be released in high local concentration around rubisco while the stomata stay nearly shut; they differ only in the dimension along which the trapping is held apart from rubisco. C-4 separates them in space — PEP carboxylase in mesophyll cells, rubisco in bundle-sheath cells. CAM separates them in time — PEP carboxylase at night, rubisco by day. Where each plant lives follows from that, and is not the mechanism.",
      def_cn: "把两条替代途径区分开的那一句话。两者都是在 rubisco 见到碳之前先用 PEP 羧化酶把它抓住，好让 CO₂ 在气孔几乎关着的情况下仍能在 rubisco 周围高浓度地放出来；它们的差别只在于「抓」与「rubisco」被分在哪个维度上。C-4 分在空间上 —— PEP 羧化酶在叶肉细胞，rubisco 在维管束鞘细胞。CAM 分在时间上 —— PEP 羧化酶在夜里，rubisco 在白天。各自长在什么地方是这个差别的结果，而不是机制本身。" },
    { en: "the price list of the three routes", cn: "三条路线的价目表",
      def_en: "Per CO2 completely reduced: 3 ATP and 2 NADPH for C-3, 5 and 2 for C-4, 6.5 and 2 for CAM. The C-4 surcharge is explicit — each CO2 assimilated needs one phosphoenolpyruvate regenerated at the cost of two phosphoanhydride bonds. None of the extra ATP buys carbon; all of it buys the ability to keep the stomata shut. The C-4 crossover sits at about 28–30 °C, above which eliminating the oxygenase reaction more than covers the surcharge.",
      def_cn: "每完全还原一个 CO₂：C-3 花 3 个 ATP 加 2 个 NADPH，C-4 花 5 加 2，CAM 花 6.5 加 2。C-4 那笔附加费是写明的 —— 每同化一个 CO₂ 就得再生一分子磷酸烯醇式丙酮酸，代价是两个磷酸酐键。多出来的 ATP 一点碳也没买到；它们买的全是「气孔可以关着」这件事。C-4 的翻盘点在约 28–30 °C，越过这个温度，消除加氧反应所省下的就超过了那笔附加费。" }
  ],
  steps: [
    {
      en: "Rubisco is the enzyme that attaches CO2 to ribulose 1,5-bisphosphate, a five-carbon sugar written RuBP, and it is not specific about what it attaches. **The same active site also accepts O2, and both activities compete for the same molecule of RuBP, so the oxygen a leaf makes in the light works directly against the carbon it is trying to fix.** Its full name records both jobs: ribulose-1,5-bisphosphate carboxylase/oxygenase. The two-carbon product of the O2 reaction has to be recovered by a route that consumes more O2 and releases CO2 again, and that recovery is what the word photorespiration names. The name is a trap — mitochondrial respiration conserves energy as ATP, and this conserves none at all; it lowers net biomass instead. Everything below is a response to that one defect.",
      cn: "rubisco 是把 CO₂ 接到核酮糖-1,5-二磷酸（写作 RuBP，一种五碳糖）上的那个酶，而它对「接什么」并不专一。**同一个活性位点也接受 O₂，而这两种活性抢的是同一分子 RuBP，于是叶片在光下自己产生的氧，直接在跟它想固定的碳作对。** 它的全名把两份差事都记了下来：核酮糖-1,5-二磷酸羧化酶/加氧酶。加氧反应产生的那个二碳产物必须由一条回收途径救回来，而这条途径还要再耗 O₂、再放 CO₂ —— 这套回收正是「光呼吸（photorespiration）」这个词所指的东西。这个名字是个陷阱：线粒体的呼吸把能量存成 ATP，光呼吸一点也不存；它反而压低净生物量。下面的一切，都是对这一处缺陷的应对。",
      src: "A p.729, §20.5 · B §9.2, p.212",
      see: [{ id: "9-17", en: "rubisco itself — structure, mechanism, and the first stable product", cn: "rubisco 本身 —— 结构、机理与第一个稳定产物" },
            { id: "L-20-4-1", en: "the switches that turn rubisco and the Calvin cycle on", cn: "把 rubisco 和 Calvin 循环打开的那些开关" }]
    },
    {
      link_en: "how much does that side reaction actually cost?",
      link_cn: "这个副反应到底要花多少钱？",
      en: "Average United States yields are estimated to be reduced by 36 % for soybean and 20 % for wheat by the need to recycle that two-carbon product. **Read those as agricultural statistics rather than biochemical ones: more than a third of a national soybean crop, lost to a side reaction of one enzyme.** That is the scale that makes two whole alternative leaf anatomies worth evolving.",
      cn: "据估计，美国大豆的平均产量因需要回收这个二碳产物而减少约 36%，小麦约 20%。**把这两个数当农业统计来读，而不是当生化数据：全国三分之一以上的大豆产量，输给了一个酶的一个副反应。** 正是这个量级，才使得为它演化出两整套不同的叶片解剖结构变得划算。",
      src: "A p.729"
    },
    {
      link_en: "and recovering that two-carbon piece is not one reaction but a small pathway",
      link_cn: "而把那个二碳片段救回来，不是一个反应，是一条小途径",
      en: "Rubisco oxygenating RuBP splits it into two pieces — 3-phosphoglycerate, which the Calvin cycle can use as normal, and phosphoglycolate, a two-carbon fragment that is useless as it stands. Phosphoglycolate phosphatase hydrolyses the phosphate off it to give glycolate, and glycolate oxidase then turns glycolate into glyoxylate, which is those same two carbons oxidised one step further. **The recovery therefore takes three enzymes in all — rubisco itself, phosphoglycolate phosphatase and glycolate oxidase — and only the first of the three does anything a plant ever wanted done.**",
      cn: "rubisco 给 RuBP 加氧，把它劈成两块 —— 3-磷酸甘油酸，Calvin 循环照常能用；以及磷酸乙醇酸，一个原样放着毫无用处的二碳片段。磷酸乙醇酸磷酸酶把磷酸水解下来，给出乙醇酸；乙醇酸氧化酶再把乙醇酸变成乙醛酸。**所以这套回收一共要动用三个酶 —— rubisco 自己、磷酸乙醇酸磷酸酶、乙醇酸氧化酶 —— 而三个里只有第一个做的事是植物本来想要的。**",
      src: "B §9.2, p.212",
      see: [{ id: "9-19", en: "where that 3-phosphoglycerate rejoins the Calvin cycle", cn: "那个 3-磷酸甘油酸回到 Calvin 循环的哪一步" }]
    },
    {
      link_en: "and no single organelle can finish the job, which is most of why it is expensive",
      link_cn: "而这活儿没有任何单一细胞器能独自干完 —— 它贵，多半贵在这里",
      en: "Glycolate leaves the chloroplast for the peroxisome, an organelle whose interior is built for reactions that produce hydrogen peroxide. There glycolate plus O2 gives glyoxylate and H2O2, catalase destroys the peroxide into water and ½O2, and glyoxylate is transaminated to glycine. Glycine crosses into the mitochondrion, where two glycines condense into one serine and a CO2 is let go. That serine returns through the peroxisome as hydroxypyruvate, hydroxypyruvate reductase reduces it to glycerate on NADH, and glycerate kinase in the cytosol spends an ATP to send the carbon back to the chloroplast. **Recovery runs across chloroplast, peroxisome and mitochondrion at once, and the plant pays a lost carbon, an NADH and an ATP for it — the CO2 let go in the mitochondrion is the very gas the leaf was trying to take in.**",
      cn: "乙醇酸离开叶绿体，进入过氧化物酶体 —— 这是一个内部专为「会产生过氧化氢的反应」而建的细胞器。在那里，乙醇酸加 O₂ 生成乙醛酸和 H₂O₂，过氧化氢酶把过氧化氢拆成水和 ½O₂，乙醛酸经转氨作用变成甘氨酸。甘氨酸跨进线粒体，两分子甘氨酸在那里缩合成一分子丝氨酸，同时放掉一个 CO₂。这个丝氨酸以羟基丙酮酸的形式回到过氧化物酶体，羟基丙酮酸还原酶用 NADH 把它还原成甘油酸，胞质里的甘油酸激酶再花一个 ATP 把碳送回叶绿体。**这套回收要叶绿体、过氧化物酶体、线粒体同时上，植物为此赔进一个碳、一个 NADH 和一个 ATP —— 而线粒体里放掉的那个 CO₂，正是叶片刚才拼命想吸进来的那种气体。**",
      src: "B §9.2, pp.212–213, Obr. 9.7",
      see: [{ id: "L-19-1-1", en: "the mitochondrial respiration this is named after and does not resemble", cn: "它名字里的「呼吸」所指的线粒体呼吸 —— 两者其实并不像" }]
    },
    {
      link_en: "one enzyme name in that middle stretch is worth getting right, because the reaction settles it",
      link_cn: "中间那一段里有一个酶的名字值得弄准，因为反应本身就能定案",
      en: "The enzyme converting glycolate to glyoxylate is often called glycolate oxygenase, and the reaction decides which name is accurate: glycolate + O2 gives glyoxylate + H2O2, so both atoms of that O2 end up in the peroxide and neither of them in the product. **An enzyme that puts oxygen atoms into its own product is an oxygenase, and one that hands them to a separate peroxide or water molecule is an oxidase, so oxidase is the accurate name here.** Rubisco two steps up is the genuine oxygenase of this pathway: the O2 it consumes ends up inside the phosphoglycolate and the 3-phosphoglycerate.",
      cn: "把乙醇酸转成乙醛酸的那个酶常被称作「乙醇酸加氧酶」，而反应本身就能判定哪个名字准确：乙醇酸 + O₂ 生成乙醛酸 + H₂O₂，也就是说这个 O₂ 的两个原子都进了过氧化氢，一个也没进产物。**把氧原子装进自身产物里的酶叫加氧酶，把氧原子交给另一个过氧化氢或水分子的酶叫氧化酶 —— 所以这里准确的名字是氧化酶。** 上面两步的 rubisco 才是这条途径里真正的加氧酶：它消耗的 O₂ 最后进到了磷酸乙醇酸和 3-磷酸甘油酸里面。",
      src: "B §9.2, pp.212–213, Obr. 9.7",
      beyond: true,
      beyondNote: "The oxygenase-versus-oxidase distinction, and the name glycolate oxidase, are not on the cited pages: those pages call the enzyme glycolate oxygenase in both the text and the figure label, while drawing the peroxide-forming reaction that makes it an oxidase. Reported rather than passed through."
    },
    {
      link_en: "so is it purely a defect, or is it good for something?",
      link_cn: "那它纯粹是个缺陷，还是有点用处？",
      en: "Two possible uses are on offer for photorespiration, and both are stated with a hedge. It probably protects the photosynthetic apparatus from photooxidation when CO2 runs short — photooxidation being damage done by absorbed light to the very pigments and proteins that absorbed it. It is also a route by which a plant makes the amino acids glycine and serine, both of which the salvage visibly produces on the way through the peroxisome and the mitochondrion. **Neither use is claimed as established, so the honest position is that a pathway costing a third of a soybean crop has no agreed purpose at all.**",
      cn: "对于光呼吸有什么用，有两种可能的说法，而两种都是留有余地地提出的。它大概在 CO₂ 不足时保护光合装置免受光氧化 —— 所谓光氧化，就是被吸收的光反过来损伤吸收它的那些色素和蛋白。它同时也是植物合成甘氨酸和丝氨酸这两种氨基酸的一条途径，而这两种氨基酸正是回收过程经过过氧化物酶体和线粒体时明摆着做出来的。**这两种用途都没有被当作定论，所以老实的说法是：一条要赔掉三分之一大豆产量的途径，目前没有一个公认的用途。**",
      src: "B §9.2, p.212",
      openQuestion_en: "Why photorespiration exists at all is unsettled. The protective role is offered with an explicit 'probably', and glycine and serine can be made by other routes, so neither proposal rules the other out or closes the question.",
      openQuestion_cn: "光呼吸为什么会存在，目前没有定论。保护作用是带着一个明写的「大概」提出来的，而甘氨酸和丝氨酸也能由别的途径合成 —— 所以两种说法既不互相排除，也都没有把这个问题合上。"
    },
    {
      link_en: "and the defect gets worse exactly where a plant most needs it not to",
      link_cn: "而这处缺陷偏偏在植物最不希望它恶化的地方恶化",
      recall_en: "the same enzyme from the first step, now losing its grip on CO2 as the day heats up",
      recall_cn: "还是第一步那个酶 —— 只是天一热，它对 CO₂ 就抓不住了",
      en: "As temperature rises, rubisco's affinity for CO2 falls, so the oxygenase side reaction takes a larger share of the enzyme just when the light is strongest. The obvious fix is more CO2, and the only way into a leaf is through the stomata, which are the adjustable pores in a leaf surface; open stomata also let water vapour out. **So the real shape of the problem is this: in a hot dry place water is dearer than carbon, the stomata must stay as shut as possible, and CO2 still has to reach rubisco.** Both surviving answers are ways of delivering CO2 to rubisco without leaving the door open.",
      cn: "温度升高时，rubisco 对 CO₂ 的亲和力下降，于是恰好在光最强的时候，加氧副反应占去了这个酶更大的份额。显而易见的对策是提高 CO₂，而进入叶片的唯一入口是气孔（stomata）—— 叶片表面那些可开合的小孔；气孔一开，水蒸气也一起往外跑。**所以问题真正的形状是这样的：在又热又干的地方，水比碳贵，气孔必须尽量关着，而 CO₂ 还得送到 rubisco 跟前。** 两种现存的解法，都是「不把门敞开也能把 CO₂ 送到」的办法。",
      src: "A pp.729–732"
    },
    {
      link_en: "both answers use the same trick, and the trick is one enzyme",
      link_cn: "两种解法用的是同一招，而这一招就是一个酶",
      en: "PEP carboxylase attaches inorganic carbon to phosphoenolpyruvate — PEP, the three-carbon compound sitting one step before pyruvate in glycolysis — giving the four-carbon acid oxaloacetate, and it does so at inorganic-carbon concentrations far too low for rubisco to work at. Its Km for that carbon is lower than rubisco's, Km being the substrate concentration at which an enzyme runs at half its maximum rate, so a low Km is precisely what 'works where the substrate is dilute' means. **Part of the chemistry behind that low Km is the substrate itself: PEP carboxylase takes bicarbonate, HCO3−, the abundant form of inorganic carbon at the pH of a plant cytosol, made from the arriving gas by carbonic anhydrase.** Fix carbon cheaply where it is dilute, carry it as a four-carbon acid, release it concentrated next to rubisco: both alternative pathways are built out of that one move.",
      cn: "PEP 羧化酶把无机碳接到磷酸烯醇式丙酮酸上 —— PEP 就是糖酵解里位于丙酮酸前一步的那个三碳化合物 —— 生成四碳酸草酰乙酸；而且它在无机碳浓度低到 rubisco 根本干不了活的时候就能工作。它对这种碳的 Km 比 rubisco 低；所谓 Km，就是让一个酶跑到最大速率一半时所需的底物浓度，因此「Km 低」正是「底物稀薄也照样干活」的意思。**这个低 Km 背后有一部分化学在于底物本身：PEP 羧化酶用的是碳酸氢根 HCO₃⁻，即植物胞质 pH 下无机碳的主要存在形式，由碳酸酐酶从刚进来的气体现做出来。** 在碳稀薄的地方廉价地把它固定住，用一个四碳酸运走，再在 rubisco 旁边高浓度地放出来：两条替代途径都是由这一个动作搭起来的。",
      src: "A p.730 · B §9.3, pp.212, 214, Obr. 9.8"
    },
    {
      link_en: "the four-carbon acid then goes round a loop of its own, and every enzyme in it has a name",
      link_cn: "这个四碳酸随后自己转一个圈，而圈上每个酶都有名字",
      en: "M. Hatch and C. Slack found plants that fix CO2 into four-carbon acids rather than into the three-carbon 3-phosphoglycerate, and the loop they described is called the Hatch–Slack cycle. PEP carboxylase makes oxaloacetate; oxaloacetate is either reduced to malate by an NADPH-dependent malate dehydrogenase or transaminated to aspartate; the four-carbon acid travels, and the malic enzyme decarboxylates it back to pyruvate with the CO2 released; pyruvate phosphate dikinase then rebuilds PEP from pyruvate at the cost of ATP and closes the loop. **The CO2 released at the end is the same CO2 captured at the start, so this loop fixes no carbon on balance: it is a carbon taxi paid for in ATP, and the Calvin cycle still does the real fixing.** The label C-4 counts the carbons of the acid doing the carrying, which is why aspartate serves as well as malate does.",
      cn: "M. Hatch 与 C. Slack 发现了一类植物：它们把 CO₂ 固定成四碳酸，而不是固定成三碳的 3-磷酸甘油酸；他们描述的这个环路就叫 Hatch–Slack 循环。PEP 羧化酶生成草酰乙酸；草酰乙酸要么由一个依赖 NADPH 的苹果酸脱氢酶还原成苹果酸，要么经转氨作用变成天冬氨酸；这个四碳酸走一段路，再由苹果酸酶脱羧变回丙酮酸并放出 CO₂；丙酮酸磷酸双激酶随后消耗 ATP 把丙酮酸重新做成 PEP，环路就此闭合。**末尾放出来的那个 CO₂，就是开头抓住的那个 CO₂ —— 所以这个环路净固定的碳是零：它是一辆用 ATP 付费的碳出租车，真正固定碳的仍然是 Calvin 循环。** 「C-4」这个标签数的是负责运载的那个酸有几个碳，所以天冬氨酸和苹果酸一样能胜任。",
      src: "B §9.3, p.212, Obr. 9.8"
    },
    {
      link_en: "so where are the two events held apart? In a C-4 leaf, in space",
      link_cn: "那这两件事被分在哪里？在 C-4 叶片里，分在空间上",
      recall_en: "the glycine-to-serine step of the salvage, which is what those mitochondria are short of",
      recall_cn: "回收途径里甘氨酸变丝氨酸那一步 —— 这些线粒体缺的正是它",
      en: "Between the epidermis at a leaf's surface and the vascular tissue at its veins lie two concentric layers of different cells, and what separates them is which mechanism of CO2 fixation each runs. Mesophyll cells are the outer layer and run the C-4 mechanism, with PEP carboxylase doing the trapping; bundle-sheath cells are the inner layer, ringing the vein, and run the C-3 mechanism, meaning rubisco and the Calvin cycle. **Malate or aspartate carries the trapped carbon inward through plasmodesmata, which are protein-lined channels joining adjacent plant cells, and is decarboxylated beside rubisco in that inner layer.** One detail fits: bundle-sheath mitochondria hold very little glycine decarboxylase complex, the enzyme that performs the glycine-to-serine step, so the cells receiving concentrated CO2 are the ones least equipped to salvage and least in need of it.",
      cn: "在叶表的表皮与叶脉处的维管组织之间，排着两层同心的、不同的细胞；把它们区分开的，是各自跑哪一套 CO₂ 固定机制。叶肉细胞是外层，跑 C-4 机制，由 PEP 羧化酶负责抓碳；维管束鞘细胞是内层，围着叶脉，跑 C-3 机制，也就是 rubisco 加 Calvin 循环。**苹果酸或天冬氨酸带着抓来的碳，穿过胞间连丝（连接相邻植物细胞的、内衬蛋白的孔道）向内输送，并在内层里、就在 rubisco 旁边被脱羧。** 有一个吻合的细节：维管束鞘细胞的线粒体里，负责甘氨酸变丝氨酸那一步的甘氨酸脱羧酶复合体含量非常低 —— 收到高浓度 CO₂ 的那些细胞，恰恰是最没有回收装备、也最不需要回收的。",
      src: "A p.730 · B §9.3, pp.212, 214"
    },
    {
      link_en: "and the payoff is measured in water rather than in carbon",
      link_cn: "而赚到的东西是用水来量的，不是用碳",
      en: "Because PEP carboxylase works at inorganic-carbon concentrations rubisco cannot, a C-4 leaf takes in enough carbon with its stomata open only minimally, and the enormous evaporation of water that a wide-open pore causes does not happen. Under high solar radiation, high temperature and a limited supply of water, the rate of CO2 fixation in C-4 plants is about twice that in C-3 plants. More than 100 species run this route, in the tropics and in deserts, among them tropical grasses such as sugar cane and maize. **The C-4 mechanism amounts to concentrating CO2 around rubisco, which makes it a water-conservation strategy dressed as a carbon one: the water not lost is the larger prize.**",
      cn: "因为 PEP 羧化酶能在 rubisco 干不动的无机碳浓度下工作，一片 C-4 叶子只需把气孔微微张开就够碳用了，而孔洞大开所造成的大量水分蒸发也就不会发生。在强太阳辐射、高温和水分供应受限的条件下，C-4 植物的 CO₂ 固定速率约为 C-3 植物的两倍。走这条路线的植物已发现 100 多种，分布在热带和沙漠，其中主要是甘蔗、玉米这类热带禾草。**C-4 机制说到底就是把 CO₂ 在 rubisco 周围浓缩起来，因此它是一套披着碳策略外衣的节水策略：没蒸发掉的那些水，才是更大的收获。**",
      src: "B §9.3, pp.212, 214 · A p.732",
      see: [{ id: "L-20-6-1", en: "what the fixed carbon becomes once it is safely inside — starch and sucrose", cn: "碳一旦被安全固定下来会变成什么 —— 淀粉与蔗糖" }]
    },
    {
      link_en: "and the pump is not free",
      link_cn: "而这台泵不是白来的",
      recall_en: "the falling CO2 affinity from the temperature step is what tips this balance",
      recall_cn: "让这架天平倾斜的，正是前面温度那步说的「亲和力下降」",
      en: "Every CO2 assimilated through the C-4 route requires one molecule of PEP to be regenerated, at the cost of two phosphoanhydride bonds of ATP, so the bill per CO2 completely reduced is 5 ATP against a C-3 plant's 3, with 2 NADPH in both cases. Below about 28–30 °C the C-3 plant wins: photorespiration is tolerable and the two extra ATP are not worth paying. Above that temperature, rubisco's falling affinity for CO2 makes the oxygenase reaction expensive enough that eliminating it more than covers the surcharge. **Neither of those extra ATP buys any carbon at all — they buy the ability to keep the stomata shut — which is why crabgrass, a C-4 weed, outgrows the C-3 lawn grasses around it in midsummer.**",
      cn: "走 C-4 路线每同化一个 CO₂，就必须再生一分子 PEP，代价是 ATP 上的两个磷酸酐键；于是每完全还原一个 CO₂ 的账单是：C-4 用 5 个 ATP，C-3 用 3 个，两者都用 2 个 NADPH。约 28–30 °C 以下，C-3 植物占优：光呼吸还忍得了，那两个额外的 ATP 不值得花。越过这个温度，rubisco 对 CO₂ 亲和力的下降会让加氧反应贵到「消除它所省下的」超过那笔附加费。**多出来的那两个 ATP 一点碳也没买到 —— 它们买的是「气孔可以关着」这件事 —— 这就是为什么盛夏时马唐草（一种 C-4 杂草）长得比周围的 C-3 草坪草都快。**",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "the second answer separates the same two events along a different axis",
      link_cn: "第二种解法把同样这两件事分在另一个轴上",
      en: "Succulent plants — cactus, prickly pear, orchid, pineapple — live where it is very hot and very dry, and they hold the initial trapping of CO2 apart from its fixation by rubisco in time instead of in space. Their route is called crassulacean acid metabolism, abbreviated CAM. **Everything else follows from that one sentence: the same PEP carboxylase does the trapping, the same rubisco does the fixing, the same malate carries the carbon, and only the timetable changes.** At night the stomata open and PEP carboxylase fixes CO2 into oxaloacetate, and that hour is chosen on physics rather than biochemistry: water leaves a leaf because the vapour concentration inside is higher than outside, and cool moist night air is far closer to saturated than hot dry day air, so the same opening held for the same length of time costs far less water.",
      cn: "多肉植物 —— 仙人掌、仙人掌果、兰花、菠萝 —— 生活在极热极干的地方；它们把「先把 CO₂ 抓住」和「rubisco 固定 CO₂」这两件事分在时间上，而不是分在空间上。它们这条路线叫景天酸代谢，缩写 CAM。**其余一切都由这一句话推出来：还是那个 PEP 羧化酶负责抓，还是 rubisco 负责固定，还是苹果酸做载体，改变的只有时间表。** 夜里气孔打开，PEP 羧化酶把 CO₂ 固定成草酰乙酸；而选在这个时辰靠的是物理而不是生化：水之所以离开叶片，是因为叶内的水蒸气浓度高于叶外，而又凉又湿的夜间空气比又热又干的白天空气更接近饱和 —— 所以同样开度、同样时长的气孔，夜里付出的水少得多。",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "and a whole night's fixed carbon has to go somewhere that will not poison the cell",
      link_cn: "而一整夜固定下来的碳，得放在一个不会毒死细胞的地方",
      en: "The oxaloacetate is reduced to malate and stored in the vacuole, which is the large fluid-filled compartment of a plant cell. Storing it there is a requirement and not a housekeeping detail: a whole night's carbon amounts to a great deal of malic acid, the low pH its dissociation produces would damage the enzymes of the cytosol and the plastids, and the vacuole is the one compartment able to hold that much acid safely. **A CAM leaf is measurably acidic at dawn and much less so by evening, and crassulacean acid metabolism is named for exactly that daily swing in acidity.** Hold the swing and the mechanism can be rebuilt from it: something makes acid at night out of something in the air, and something takes that acid apart by day for a purpose that needs light. The prefix comes from the Crassulaceae, the stonecrops, where the swing was first found, and not from the cacti.",
      cn: "草酰乙酸被还原成苹果酸，存进液泡 —— 液泡就是植物细胞里那个充满液体的大区室。存在那里是一个必需条件，而不是收纳上的小节：一整夜的碳意味着大量苹果酸，它解离产生的低 pH 会损伤胞质和质体里的酶，而液泡是唯一能安全容纳这么多酸的区室。**CAM 植物的叶片在黎明时可以量出偏酸，到傍晚酸度大减；「景天酸代谢」这个名字记的正是这个每日的酸度摆动。** 抓住这个摆动，机制就能被重建出来：夜里有什么东西用空气里的什么造出了酸，白天又有什么东西为了某个需要光的目的把这些酸拆掉。前缀来自景天科（Crassulaceae），最早在那里被发现，并非来自仙人掌。",
      src: "A p.732"
    },
    {
      link_en: "and the daytime half is where the point of the whole exercise becomes visible",
      link_cn: "白天那一半，才让整件事的意义显出来",
      en: "By day the stomata close against the heat, and NADP-linked malic enzyme decarboxylates the stored malate, releasing CO2 for rubisco and the Calvin cycle. **The overnight malate store works as an internal CO2 cylinder: the plant photosynthesises in bright light with its pores shut, where a C-3 leaf sealed the same way runs out of CO2 in minutes.** Photorespiration is suppressed for the same reason as in a C-4 plant, because rubisco sits in a locally high CO2 concentration. The day's photosynthesis is also capped by how much malate the vacuole held at dawn, which is why CAM plants grow slowly. Per CO2 completely reduced, CAM spends 6.5 ATP against C-4's 5 and C-3's 3, with 2 NADPH in every case — the most expensive of the three, and the one that survives where nothing else does.",
      cn: "白天气孔关闭以躲开高温，依赖 NADP 的苹果酸酶把储存的苹果酸脱羧，把 CO₂ 放出来交给 rubisco 和 Calvin 循环。**那一夜的苹果酸库存，起的是体内 CO₂ 钢瓶的作用：这株植物在强光下、门却关着照样做光合，而一片同样封死的 C-3 叶子几分钟内就会耗尽 CO₂。** 光呼吸被压制的原因和 C-4 植物完全相同：rubisco 处在局部高 CO₂ 之中。另一方面，这一天的光合总量被黎明时液泡里存了多少苹果酸卡死，这就是 CAM 植物长得慢的原因。每完全还原一个 CO₂，CAM 花 6.5 个 ATP，C-4 花 5 个，C-3 花 3 个，三者都用 2 个 NADPH —— CAM 是三者中最贵的，也恰恰是在别的都活不下去的地方还活着的那一个。",
      src: "A p.732, table 20-1"
    },
    {
      link_en: "one grouping is easy to misfile, and a one-word test fixes it",
      link_cn: "有一组归类特别容易放错桶，而一个只需一个词的判据能把它归对",
      en: "Cactus, prickly pear, orchid and pineapple are CAM plants; maize, sugar cane and crabgrass are C-4 plants. Succulents get filed under C-4 often enough to be worth guarding against, and the two really do share their chemistry — the same PEP carboxylase, the same four-carbon carrier, the same concentrating of CO2 around rubisco. **The test that separates them is the clock: a C-4 plant fixes no CO2 at night, and a CAM plant does nearly all of its fixing then.** So a sentence about CO2 being fixed at night is false of the C-4 pathway and is the definition of CAM. All three routes work around rubisco's lack of specificity and none of them repairs it.",
      cn: "仙人掌、仙人掌果、兰花、菠萝是 CAM 植物；玉米、甘蔗、马唐草是 C-4 植物。多肉植物被归到 C-4 那一栏的情况多到值得专门提防，而这两类确实共用同一套化学 —— 同一个 PEP 羧化酶、同一种四碳载体、同样是把 CO₂ 在 rubisco 周围浓缩起来。**把它们分开的判据是时钟：C-4 植物在夜间不固定任何 CO₂，而 CAM 植物几乎全部的固定都发生在夜间。** 所以「CO₂ 在夜里被固定」这句话，用来描述 C-4 是错的，用来描述 CAM 则正是定义。三条路线都是在绕开 rubisco 的不专一，没有一条是在修它。",
      src: "A p.732, table 20-1 · A p.729, box 20-1",
      openQuestion_en: "Whether a rubisco can be engineered that keeps its carboxylase activity without the oxygenase side reaction is unsettled, and that goal is stated as not yet within reach; the trade-off between specificity and speed in this enzyme is itself an active question.",
      openQuestion_cn: "能否改造出一个保留羧化活性、却没有加氧副反应的 rubisco，目前没有定论，书上对这个目标的说法是「尚未做到」；而这个酶身上「专一性与速度之间是否必须取舍」本身就是一个尚未解决的问题。"
    }
  ]
};
