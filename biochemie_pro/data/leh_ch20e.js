/* ============================================================
   Lehninger 8 — Chapter 20, section 20.5,
   Photorespiration and the C4 and CAM Pathways.
   DEPTH LAYER over the Czech chapter 9. `topicKey` is the EXISTING
   key `photorespiration-c4-cam`, which already resolves to the three
   Czech nodes 9-20, 9-21 and 9-22, so this node JOINS them.

   ⚠️ SCOPE — this section is TWO-THIRDS ALREADY COVERED and the node
   is written only over the remaining third. Measured across all ten
   Czech data files on 2026-08-10, before writing:
     photorespiration 28 · phosphoglycolate 18 · glycolate 44 ·
     peroxisome 17 · C-4 (hyphenated, real sense) 84 ·
     PEP carboxylase 6 · mesophyll 15 · bundle sheath 4 ·
     Hatch 17 · Slack 17
   Node 9-20 gives photorespiration complete, down to the three
   enzymes and the three-compartment traffic of Obr. 9.7; 9-21 gives
   the Hatch-Slack cycle; 9-22 gives why C-4 works, with the Km
   argument, the stomata, and Kranz anatomy. NONE OF THAT IS REPEATED.

   What is ZERO: CAM. Measured with care, because the obvious probe
   is worthless — a bare `CAM` search returns 86 hits across 14 Czech
   nodes and EVERY ONE is a false positive: cAMP (4-2-4-2 x45,
   7-12-2 x24, 10-18, 10-19, 10-20, 8-3-3), the English word "came"
   (9-3, 10-6, 10-11, 10-15, 8-3-3), "camps" (8-5-2-3), and the
   topicKey slug `photorespiration-c4-cam` itself (9-20, 9-21, 9-22).
   `crassulacean`, `krasulac-`, `tučnolist-` and `CAM plant` are all
   0. Likewise `C4` unhyphenated is nearly all false positive — C40
   tetraterpenes in 8-2-4-1/8-2-4-3, the C4-C5 double bond, the C4
   hydroxyl of galactose in 7-1-2-1 and of glycogen in 7-12-1. Use
   `C-4` and confirm by hand.
   Also zero or thin: the glycine decarboxylase complex by name, the
   quantitative cost of photorespiration, the ATP costs in TABLE 20-1,
   the 28-30 degree crossover, plasmodesmata, and the fact that PEP
   carboxylase's substrate is bicarbonate rather than CO2.

   ⚠️ AND THERE IS A GENUINE CONFLICT BETWEEN THE TWO BOOKS HERE,
   which is why this node carries the trace card it does. Czech node
   9-22, points[0], lists among the C-4 plants "cactus-like plants
   (succulents)". Lehninger's TABLE 20-1 lists cactus, prickly pear,
   orchid and pineapple as CAM plants, not C-4. Worse, 9-22's own
   quiz[0] offers "It allows CO2 fixation to occur at night" as a
   WRONG answer — correct as a statement about C-4, but it is exactly
   what CAM plants do, so a reader who learned 9-22 comes away with
   cacti in the wrong bucket AND with night fixation marked false.
   The node reports this as a conflict and does not silently overwrite
   the Czech layer: the Czech textbook sets the exam's scope, and per
   the project rule only Ruojin can decide what to do about a
   disagreement between the two books. The Czech nodes are NOT edited.

   Page range measured in A's own OCR: 727-732. The map agreed.
   §20.5 opens on printed 727, on the same page as SUMMARY 20.4 and
   FIGURE 20-37; SUMMARY 20.5 is on printed 732, below TABLE 20-1.
   Note that BOX 20-1, on genetic engineering of photosynthesis,
   occupies most of printed 731, so the running text of the section
   is interrupted there.

   `chapter` is LEHNINGER's chapter 20 — chapter is book-local.
   Source: Lehninger Principles of Biochemistry, 8th ed.
   ============================================================ */
window.BIOCHEM = window.BIOCHEM || { topics: [] };

window.BIOCHEM.topics.push(

  {
    id: "L-20-5-1",
    book: "lehninger",
    topicKey: "photorespiration-c4-cam",
    chapter: 20,
    section: "20.5",
    czTitle: "Fotorespirace a rostliny C-4 (9.2, 9.3) — hloubková vrstva: třetí řešení, které česká kniha nemá — CAM, kde se záchyt CO2 a činnost rubisca dělí v ČASE, ne v prostoru; a rozpor mezi oběma učebnicemi v tom, kam patří kaktus",
    enTitle: "The third solution the Czech textbook does not have: CAM plants separate CO2 capture from rubisco in TIME rather than in space, opening their stomata at night and storing the carbon as malic acid in the vacuole until morning — plus a real disagreement between the two textbooks about which pathway a cactus uses",
    cnTitle: "捷克教材没有的第三种解法：CAM 植物把「捕获 CO₂」和「rubisco 干活」分在「时间」上而不是空间上——夜里开气孔，把碳以苹果酸的形式存进液泡，等到天亮再用；外加两本教材关于「仙人掌走哪条路」的一处真实分歧",
    pages: [727, 728, 729, 730, 731, 732],
    coverage: "partial",
    coverageNote: "Read from Lehninger 8 section 20.5 end to end, A printed pp.727-732, but written to cover only what the Czech layer does not already have. Photorespiration is covered completely by Czech node 9-20, including the three enzymes and the chloroplast-peroxisome-mitochondrion traffic of Obr. 9.7, and the C-4 pathway by 9-21 and 9-22, including Hatch and Slack, the lower Km of PEP carboxylase, the stomatal argument and Kranz anatomy; none of that is repeated here, which is why `coverage` is partial rather than full. What is written here is CAM, which is a measured zero in the Czech layer, together with the quantitative material that the Czech treatment lacks: the yield losses attributed to photorespiration, the glycine decarboxylase complex by name, the ATP costs of the three pathways from TABLE 20-1, the temperature at which the C-4 pathway's extra energetic cost is repaid, plasmodesmata, and the fact that PEP carboxylase acts on bicarbonate rather than on CO2 itself. TABLE 20-1, FIGURE 20-40 and BOX 20-1 were read with the text; BOX 20-1 occupies most of printed 731 and interrupts the running text there. Page numbers were measured in A's own text layer and the A-B map agreed. One disagreement between the two textbooks was found while writing and is reported rather than resolved: Czech node 9-22 lists cactus-like succulents among the C-4 plants, whereas Lehninger's TABLE 20-1 lists cactus, prickly pear, orchid and pineapple as CAM plants; the Czech nodes have not been edited, because the Czech textbook sets the exam's scope and a disagreement between the books is Ruojin's to settle.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件（见 生物化学笔记_分卷/README.md），无法自动检索；笔记的无编号「光合作用」部分在 pp.197-203，尚未逐页读过，所以 CAM / 景天酸代谢是否出现在其中、以及笔记把仙人掌归到哪一类，需人工翻阅后再填。⚠️ 这一条特别值得翻，因为本节点记录了捷克书与 Lehninger 在「仙人掌走哪条路」上的分歧，中文笔记可能是第三个独立说法",
      status: "pending"
    },
    trace: [
      {
        term: "CAM（景天酸代谢）——以及「仙人掌到底走哪条路」这处两书分歧",
        what: "**CAM = crassulacean acid metabolism（景天酸代谢）。** 它和 C-4 要解决的是**同一个问题**——**怎样在不敞开气孔、不丢水的前提下，给 rubisco 供上足够浓的 CO₂**——**但解法不同**：**C-4 把「捕获 CO₂」和「rubisco 干活」分在「空间」上（叶肉细胞 vs 维管束鞘细胞），CAM 把它们分在「时间」上（夜里 vs 白天）。**",
        from: "**先把「为什么必须分开」想清楚，这两条路就都不用背了。** rubisco 有个毛病：**它对 CO₂ 不专一，也会拿 O₂ 当底物**，于是有了光呼吸——**而温度越高，它对 CO₂ 的亲和力越差**。热的地方，光呼吸就越费。**但「多吸 CO₂」的唯一入口是气孔，而气孔一开就跑水**——**在沙漠里，水比碳贵。** **所以问题的真正形状是：气孔必须尽量关着，可 CO₂ 还得进来。** **C-4 的答案是「用泵」**：叶肉细胞里用 **PEP carboxylase**（它的底物其实是 **HCO₃⁻ 而不是 CO₂**，而且亲和力远高于 rubisco）把 CO₂ 先固定成四碳酸，运到维管束鞘细胞再放出来——**在 rubisco 周围造出一个高 CO₂ 的小环境**。**CAM 的答案是「用仓库」**：**夜里空气凉、湿，气孔开着不太亏水**，此时用同样的 PEP carboxylase 把 CO₂ 固定成草酰乙酸、还原成**苹果酸**，**存进液泡**（存在液泡里是有理由的——**苹果酸解离产生的低 pH 会伤到胞质和质体里的酶**）。**白天气孔关死**，**再用 NADP 依赖的 malic enzyme 把苹果酸里的 CO₂ 放出来交给 rubisco**。**同一套酶、同一个逻辑，一个用空间、一个用时间。**",
        to: "考试里它回答一个很爱考的对比题：**「C-4 和 CAM 有什么区别？」** **别答「一个在热带一个在沙漠」——那是结果不是机制。** **标准答法：两者用的是同一套 PEP carboxylase 预固定的策略，区别在于把预固定与 rubisco 分开的「维度」不同——C-4 分在空间上（两种细胞），CAM 分在时间上（夜与昼）。** 再补一句代价：**每固定一个 CO₂，C-3 要 3 个 ATP，C-4 要 5 个，CAM 要 6.5 个**——**都是为了少丢水而多付的能量，而在极干旱处这笔账划得来。** ⚠️ **还要能答出「气孔为什么在夜里开」：因为夜里空气更凉更湿，同样开一会儿，蒸腾损失小得多。**",
        family: "⚠️ **这里有一处两本教材说法不一致，考前值得心里有数。** **捷克层节点 `9-22` 把「仙人掌一类的多肉植物（succulents）」列在 C-4 植物里**；而 **Lehninger 的 TABLE 20-1 把仙人掌、仙人掌果、兰花、菠萝列为 CAM 植物**。**更要注意的是**：`9-22` 自己的 quiz 里，**「让 CO₂ 在夜间固定」是被当作错误选项的**——**作为「C-4 是什么」的说法它没错，但那正是 CAM 干的事**。**所以只读捷克层的话，会同时把仙人掌放错桶、并且把「夜间固定」记成假的。** **处置：捷克书定考试范围，所以答题以它为准；但如果考官问到仙人掌或菠萝，知道 Lehninger 把它们归为 CAM 是有用的。** **本节点没有去改捷克那三个节点——两本书打架该怎么办，是 Ruojin 定，不是我定。**",
        numbers: "**几个数把这一节串起来。** 光呼吸的代价是**可测的、而且很大**：美国的**大豆平均产量因光呼吸的乙醇酸回收而估计减少约 36%、小麦约 20%**。三条路每固定一个 CO₂ 的能量账：**C-3 用 3 ATP + 2 NADPH；C-4 用 5 ATP + 2 NADPH；CAM 用 6.5 ATP + 2 NADPH**（C-4 多出的两个来自**每固定一个 CO₂ 都要再生一分子 PEP，代价是 ATP 上的两个磷酸酐键**）。**交叉点在约 28–30 ℃**：**温度升到这里以上，省掉光呼吸的收益就压过了这笔额外能量成本**——**这就是为什么夏天 C-4 的马唐草长得比大多数 C-3 快**。CAM 最适环境是**极干旱、约 35 ℃**。"
      }
    ],
    mustKnow: {
      en: "The Czech textbook gives you two of the three answers to one problem; this node supplies the third and the numbers that let you compare them. The problem: rubisco is not specific for CO2, it also uses O2, and the resulting photorespiration wastes carbon and energy — and it gets worse as temperature rises, because rubisco's affinity for CO2 falls. The obvious fix is more CO2, but the only way in is through the stomata, and open stomata lose water. In a hot dry place water is dearer than carbon. So the real shape of the problem is: keep the stomata as closed as possible and still get CO2 to rubisco. Both surviving answers use the same trick — pre-fix CO2 with PEP carboxylase, an enzyme with a much higher affinity than rubisco and whose actual substrate is bicarbonate rather than CO2 — and they differ only in the dimension along which they separate that pre-fixation from rubisco itself. C4 plants separate them in SPACE: PEP carboxylase works in mesophyll cells, the four-carbon acid travels through plasmodesmata to bundle-sheath cells, and CO2 is released there, around rubisco, at high concentration. CAM plants separate them in TIME: at night, when the air is cooler and moister so that open stomata cost less water, PEP carboxylase fixes CO2 into oxaloacetate, which is reduced to malate and stored in the vacuole — in the vacuole specifically, because the low pH from malic acid dissociation would damage cytosolic and plastid enzymes. By day the stomata shut, and NADP-linked malic enzyme releases the stored CO2 for rubisco and the Calvin cycle. The name comes from the stonecrops, family Crassulaceae, in which it was first found. The costs are worth memorising as a set, because they show these are trades rather than improvements: per CO2 fixed, C3 needs 3 ATP and 2 NADPH, C4 needs 5, CAM needs 6.5 — the extra ATP buys water, not carbon. The C4 surcharge is repaid above about 28 to 30 degrees, where eliminating photorespiration gains more than the extra ATP costs. And one warning to carry into the exam: Czech node 9-22 lists cactus-like succulents among the C4 plants and marks night-time CO2 fixation as a wrong answer, whereas Lehninger files cactus, prickly pear, orchid and pineapple as CAM plants, which do fix CO2 at night. The Czech book sets the exam's scope, but knowing that the two disagree here is worth more than knowing either alone.",
      cn: "**捷克教材给了你「同一个问题」的三个答案里的两个；本节点补上第三个，以及能让你把三者放在一起比较的那些数字。** **问题是**：**rubisco 对 CO₂ 不专一，它也会用 O₂**，由此产生的**光呼吸**既浪费碳也浪费能量——**而且温度越高越糟，因为 rubisco 对 CO₂ 的亲和力随温度下降**。**显而易见的解法是「多给 CO₂」，可唯一的入口是气孔，而气孔一开就丢水。** **在又热又干的地方，水比碳贵。** **所以问题真正的形状是：把气孔尽量关着，同时还得把 CO₂ 送到 rubisco 跟前。** **现存的两个答案用的是同一个花招**——**先用 PEP carboxylase 把 CO₂ 预固定下来**（这个酶的亲和力远高于 rubisco，而且**它真正的底物是碳酸氢根而不是 CO₂**）——**两者的差别仅仅在于「沿哪个维度」把这次预固定与 rubisco 本身分开**。**C-4 植物分在「空间」上**：PEP carboxylase 在**叶肉细胞**里干活，四碳酸经**胞间连丝**运到**维管束鞘细胞**，**在那里、在 rubisco 周围高浓度地放出 CO₂**。**CAM 植物分在「时间」上**：**夜里空气更凉更湿，开气孔的水代价小得多**，此时 **PEP carboxylase 把 CO₂ 固定成草酰乙酸，再还原成苹果酸、存进液泡**——**特意存在液泡里，因为苹果酸解离产生的低 pH 会损伤胞质和质体中的酶**。**白天气孔关闭**，**NADP 依赖的 malic enzyme 把存下的 CO₂ 放出来交给 rubisco 和 Calvin 循环**。**这个名字来自景天科（Crassulaceae）的景天属植物，它最早是在那里被发现的。** **代价值得成组背下来，因为它们表明这些是「交换」而不是「改进」**：**每固定一个 CO₂，C-3 需要 3 ATP + 2 NADPH，C-4 需要 5 个，CAM 需要 6.5 个**——**多出来的 ATP 买的是水，不是碳**。**C-4 那笔附加费在约 28–30 ℃ 以上被偿还**：**在那之上，省掉光呼吸的收益超过多花的 ATP**。**还有一条要带进考场的提醒**：**捷克节点 `9-22` 把仙人掌一类的多肉列在 C-4 植物里，并把「夜间固定 CO₂」标为错误选项**；而 **Lehninger 把仙人掌、仙人掌果、兰花、菠萝归为 CAM 植物——而 CAM 确实在夜间固定 CO₂**。**捷克书定考试范围，但「知道这两本在这里不一致」比只知道其中任何一本都更有用。**"
    },
    summary: {
      en: "Lehninger presents photorespiration as a quantitatively serious defect and then gives two evolutionary answers to it, of which the Czech textbook has one. The defect: the combined activity of rubisco's oxygenase reaction and the glycolate salvage pathway consumes O2 and produces CO2 — hence the name — and unlike mitochondrial respiration it conserves no energy and inhibits net biomass formation. The cost is measurable: average United States yields of soybean and wheat are estimated to be reduced by 36 and 20 per cent respectively by the need to recycle glycolate. Bundle-sheath mitochondria are noted to have very low concentrations of the glycine decarboxylase complex. The inefficiency has inspired attempts to engineer a better rubisco, which Box 20-1 discusses and which are not yet within reach. The first answer is the C4 pathway, spatial separation, which Czech nodes 9-21 and 9-22 already cover; what is added here is that PEP carboxylase acts on bicarbonate rather than CO2, that the four-carbon acid moves through plasmodesmata, protein-lined channels connecting adjacent plant cells, and that the pathway costs 5 ATP per CO2 against the C3 pathway's 3, because a molecule of PEP must be regenerated at the expense of two phosphoanhydride bonds — a surcharge repaid above about 28 to 30 degrees, at which point the gain from eliminating photorespiration more than compensates. The second answer is CAM, absent from the Czech layer entirely. Succulents such as cactus and pineapple, native to very hot and very dry environments, separate CO2 capture from rubisco in time rather than space. At night, when the air is cooler and moister, the stomata open, PEP carboxylase fixes CO2 into oxaloacetate, and the malate produced is stored in vacuoles to protect cytosolic and plastid enzymes from the low pH of dissociating malic acid. By day the stomata close and NADP-linked malic enzyme releases the CO2 for rubisco. The name records its discovery in stonecrops of the family Crassulaceae. Table 20-1 compares the three pathways across environment, cell type, initial acceptor, first stable product and energy cost, and CAM is the most expensive at 6.5 ATP per CO2.",
      cn: "Lehninger 把**光呼吸**呈现为一个**量上严重的缺陷**，然后给出针对它的**两个演化答案**——**而捷克教材只有其中一个**。**缺陷**：**rubisco 的加氧反应与乙醇酸回收通路合起来消耗 O₂、产生 CO₂**——**「光呼吸」这个名字就是这么来的**——而且**与线粒体呼吸不同，它不守存任何能量，还抑制净生物量的形成**。**代价是可测的**：**美国大豆和小麦的平均产量，据估计分别因回收乙醇酸的需要而减少 36% 和 20%**。书上还指出**维管束鞘细胞的线粒体中甘氨酸脱羧酶复合体浓度很低**。这种低效**激发了「改造出一个更好的 rubisco」的努力**，**BOX 20-1 讨论了这件事，而这个目标目前还达不到**。**第一个答案是 C-4 通路，即空间上的分离**——**捷克节点 `9-21`、`9-22` 已经覆盖**；**这里补上的是**：**PEP carboxylase 作用的底物是碳酸氢根而不是 CO₂**、**四碳酸经胞间连丝（连接相邻植物细胞的、内衬蛋白的通道）移动**，以及**这条通路每固定一个 CO₂ 要 5 个 ATP、而 C-3 只要 3 个**——因为**每固定一个 CO₂ 都必须再生一分子 PEP，代价是两个磷酸酐键**；**这笔附加费在约 28–30 ℃ 以上被偿还**，**那时省掉光呼吸的收益超过了它**。**第二个答案是 CAM，而捷克层里完全没有它。** **仙人掌、菠萝这类原产于极热极干环境的多肉植物，把「捕获 CO₂」与「rubisco 干活」分在时间上而不是空间上。** **夜里空气更凉更湿时气孔打开**，**PEP carboxylase 把 CO₂ 固定成草酰乙酸**，**生成的苹果酸被存进液泡**——**为的是保护胞质和质体中的酶不受苹果酸解离所产生的低 pH 之害**。**白天气孔关闭，NADP 依赖的 malic enzyme 把 CO₂ 放出来交给 rubisco。** **这个名字记录了它最早在景天科的景天属植物中被发现。** **表 20-1 从环境、细胞类型、最初受体、第一个稳定产物和能量代价五个方面比较了三条通路**，**而 CAM 最贵，每固定一个 CO₂ 要 6.5 个 ATP。**"
    },
    points: [
      {
        cz: "kolik fotorespirace opravdu stojí — čísla, která česká vrstva nemá",
        en: "THE CZECH LAYER TELLS YOU WHAT PHOTORESPIRATION IS; THIS TELLS YOU HOW MUCH IT COSTS, AND THE NUMBER IS THE REASON THE REST OF THE SECTION EXISTS. Node 9-20 gives the pathway completely — the three enzymes, the three compartments, the traffic of Obr. 9.7 — and none of that needs repeating. What it does not give is a magnitude. Lehninger supplies one: “ The average yield of soybeans and wheat in the United States is reduced by an estimated 36 ” and 20 per cent respectively by the necessity of recycling glycolate from photorespiration (A p.729). Read that as an agricultural statistic, not a biochemical one — more than a third of the American soybean crop, gone to a side reaction of one enzyme. The section is equally blunt about what the process is worth: unlike mitochondrial respiration, “ photorespiration does not conserve energy and actually inhibits net biomass formation ” . So the name is a trap. Respiration in the mitochondrial sense pays; this consumes O2 and releases CO2 and pays nothing. One detail worth carrying because it connects to the next point: bundle-sheath mitochondria “ have very low concentrations of the glycine decarboxylase complex ” — the very cells the C4 pathway delivers CO2 into are the ones least equipped to run the salvage pathway, which is consistent with their not needing it.",
        cn: "**捷克层告诉你光呼吸「是什么」；这里告诉你它「值多少钱」——而这个数字正是本节其余部分存在的理由。** 节点 `9-20` 已经把通路讲全了——**三个酶、三个区室、Obr. 9.7 的物流**——**这些一概不用重讲**。**它没给的是「量级」。** Lehninger 给了一个：**「美国大豆和小麦的平均产量，据估计分别减少了 36」%和 20%**，**原因是必须回收光呼吸产生的乙醇酸**（A 第 729 页）。**请把它当作一条农业统计而不是生化数据来读**——**美国大豆收成的三分之一以上，输给了一个酶的副反应。** 本节对**这个过程值不值**同样说得毫不客气：**与线粒体呼吸不同，「光呼吸不守存能量，而且实际上抑制净生物量的形成」**。**所以这个名字是个陷阱。** **线粒体意义上的「呼吸」是有回报的；而这件事消耗 O₂、放出 CO₂，一点回报也没有。** 有一个细节值得带上，因为它与下一条相连：**维管束鞘细胞的线粒体「甘氨酸脱羧酶复合体的浓度很低」**——**C-4 通路把 CO₂ 送进去的那些细胞，恰恰是最不具备跑回收通路装备的细胞**，**而这与「它们不需要它」是自洽的。**"
      },
      {
        cz: "C-4: dva detaily, které česká vrstva nemá — HCO3⁻ a plasmodesmata",
        en: "THE C4 PATHWAY IS COVERED BY 9-21 AND 9-22 AND IS NOT REPEATED, BUT TWO DETAILS IN LEHNINGER'S TREATMENT ARE ABSENT THERE AND BOTH ARE THE KIND EXAMINERS ASK ABOUT. The first is the substrate. “ The reaction is catalyzed by phosphoenolpyruvate (PEP) carboxylase, for which the substrate is ” HCO3 minus, not CO2 (A p.730). That is not a technicality. It means the enzyme is working on the hydrated, charged form of inorganic carbon, which is the abundant species at cytosolic pH, and it is part of why PEP carboxylase can operate at concentrations where rubisco cannot — Czech node 9-22 gives the lower Km as the reason C4 works, and this is the chemistry underneath that Km. The second is the transport. The malate or aspartate formed in the mesophyll cells passes into neighbouring bundle-sheath cells through plasmodesmata, “ protein-lined channels that connect two plant cells ” and provide a path for movement of metabolites and even small proteins between cells (A p.730). Czech 9-22 gives Kranz anatomy — the two concentric cell layers — but not the channels that make the two layers one metabolic unit. Without plasmodesmata the anatomy would just be two cells next to each other; with them it is a pump with a delivery pipe.",
        cn: "**C-4 通路由 `9-21` 和 `9-22` 覆盖，这里不重讲；但 Lehninger 的处理里有两个细节在那边是没有的，而且都是考官爱问的那一类。** **第一个是底物。** **「该反应由磷酸烯醇式丙酮酸（PEP）羧化酶催化，而它的底物是」HCO₃⁻，不是 CO₂**（A 第 730 页）。**这不是一个技术性细节。** **它意味着这个酶作用的是无机碳「水合、带电」的那一种形式**——**在胞质 pH 下，那正是丰度高的那一种**；而这**也是 PEP carboxylase 能在 rubisco 干不动的浓度下工作的部分原因**——**捷克节点 `9-22` 把「更低的 Km」作为 C-4 之所以有效的理由，而这就是那个 Km 底下的化学**。**第二个是运输。** 叶肉细胞中生成的**苹果酸或天冬氨酸**经**胞间连丝**进入相邻的维管束鞘细胞——胞间连丝是**「连接两个植物细胞的、内衬蛋白的通道」**，**为代谢物、甚至小蛋白在细胞间的移动提供通路**（A 第 730 页）。**捷克 `9-22` 给了 Kranz 解剖——那两层同心的细胞——却没有给「让这两层成为一个代谢单元」的那些通道。** **没有胞间连丝，那套解剖就只是「两个挨着的细胞」；有了它，才是一台带输送管的泵。**"
      },
      {
        cz: "CAM: stejný trik, jiná osa — místo prostoru ČAS",
        en: "HERE IS THE PART THE CZECH LAYER DOES NOT HAVE AT ALL, AND THE CLEANEST WAY TO LEARN IT IS AS ONE SENTENCE OF DIFFERENCE FROM THE C4 PATHWAY YOU ALREADY KNOW. Succulent plants such as cactus and pineapple, native to very hot, very dry environments, have another variation on photosynthetic CO2 fixation, one that reduces loss of water vapour through the stomata by which CO2 and O2 must enter leaf tissue. Instead of separating the initial trapping of CO2 and its fixation by rubisco across space, as C4 plants do, “ they separate these two events over time ” (A p.732). That is the whole idea, and everything else follows from it mechanically. The enzymes are the same ones: PEP carboxylase does the trapping, rubisco does the fixing, malate is the carrier. What changes is when each runs. So when an examiner asks for the difference between C4 and CAM, the answer is not that one lives in the tropics and the other in the desert — that is a consequence, not a mechanism. The answer is that both pre-fix CO2 with PEP carboxylase to concentrate it around rubisco, and they differ in the DIMENSION along which the pre-fixation is separated from rubisco: space for C4, time for CAM. Say that sentence and the rest of the comparison writes itself.",
        cn: "**这里是捷克层完全没有的部分；而学它最干净的方式，是把它当成「与你已经会的 C-4 之间的一句话差别」。** **仙人掌、菠萝这类原产于极热极干环境的多肉植物，对光合 CO₂ 固定还有另一种变体**——**它减少了水汽经气孔的散失，而 CO₂ 和 O₂ 又必须经气孔进入叶组织**。**它不像 C-4 植物那样把「最初捕获 CO₂」与「rubisco 固定它」分在空间上**，而是**「把这两个事件分在时间上」**（A 第 732 页）。**这就是全部的想法，其余一切都从它机械地推出来。** **酶还是那几个**：**PEP carboxylase 负责捕获，rubisco 负责固定，苹果酸是载体**。**变的只是「各自什么时候跑」。** **所以当考官问 C-4 和 CAM 有什么区别时，答案不是「一个在热带、一个在沙漠」——那是结果，不是机制。** **答案是：两者都用 PEP carboxylase 预固定 CO₂，好把它在 rubisco 周围浓缩起来；区别在于「沿哪个维度」把预固定与 rubisco 分开——C-4 用空间，CAM 用时间。** **把这句话说出来，剩下的比较就自己写出来了。**"
      },
      {
        cz: "noc: proč se otevírají průduchy zrovna tehdy",
        en: "THE TIMING IS NOT ARBITRARY AND THE REASON IS PHYSICAL RATHER THAN BIOCHEMICAL, WHICH IS WHY IT IS EASY TO STATE AND EASY TO FORGET. “ At night, when the air is cooler and moister, the stomata open to allow entry of ” CO2, which is then fixed into oxaloacetate by PEP carboxylase (A p.732). Stop on the clause about the air. Transpiration is driven by the difference in water vapour concentration between the leaf interior and the atmosphere; cool moist night air is much closer to saturation than hot dry day air, so the same stomatal aperture held open for the same time costs far less water at night. The plant is not opening its stomata at a random convenient hour — it is opening them when the exchange rate between carbon and water is at its best. Then the storage step, and it has its own reason: the oxaloacetate is reduced to malate and “ The oxaloacetate is reduced to malate and stored in the vacuoles ” , specifically “ to protect cytosolic and plastid enzymes from the low pH produced by malic acid dissociation ” . A whole night's worth of fixed carbon is a great deal of acid, and the vacuole is the compartment that can hold it without poisoning the enzymes. This is where the name comes from, too — the acid accumulates overnight, which is what crassulacean ACID metabolism records.",
        cn: "**这个时机不是随便挑的，而理由是物理上的而不是生化上的——所以它容易讲清楚，也容易被忘掉。** **「夜里，当空气更凉更湿时，气孔打开，让」CO₂「进入」**，随后由 **PEP carboxylase** 把它固定成草酰乙酸（A 第 732 页）。**请在关于空气的那半句上停一下。** **蒸腾的驱动力是叶内与大气之间的水汽浓度差**；**凉而湿的夜间空气比又热又干的白天空气更接近饱和**，所以**同样的气孔开度、同样开着的时长，夜里丢的水少得多**。**这株植物不是在随便一个方便的钟点开气孔——它是在「碳与水的汇率」最划算的时候开。** 接着是**储存**那一步，**它也有自己的理由**：**「草酰乙酸被还原成苹果酸并储存在液泡里」**，**特意如此，为的是「保护胞质和质体中的酶不受苹果酸解离所产生的低 pH 之害」**。**一整夜固定下来的碳是相当多的酸**，**而液泡正是那个能装下它、又不毒害酶的区室**。**这个名字也是从这里来的**——**酸在夜间积累起来，而「景天「酸」代谢」记录的正是这件事。**"
      },
      {
        cz: "den: průduchy zavřené, a malát vydá CO2 zpátky",
        en: "THE DAYTIME HALF IS SHORT AND IT IS WHERE THE WHOLE POINT OF THE EXERCISE BECOMES VISIBLE. “ During the day the stomata close, preventing the water loss that would result from high daytime temperatures ” , and the CO2 trapped overnight in malate “ is released as CO2 by the NADP-linked malic enzyme ” ; this CO2 is then assimilated by rubisco and the Calvin cycle enzymes (A p.732). Notice what has been achieved. The plant is photosynthesising in bright light with its stomata shut — which for a C3 plant would be impossible, since a closed leaf runs out of CO2 within minutes and the rising O2/CO2 ratio drives rubisco into its oxygenase reaction. The overnight malate store is functioning as an internal CO2 cylinder. Two consequences worth stating. The rate is capped by how much malate the vacuole held at dawn, which is why CAM plants grow slowly — the trade is not free. And photorespiration is suppressed for the same reason it is in C4 plants: rubisco is working in a locally high CO2 concentration, released right next to it. Same outcome, same enzyme doing the releasing in both pathways — NADP-linked malic enzyme, which Czech node 9-22 already mentions for C4 — reached along a different axis.",
        cn: "**白天那半截很短，而整件事的意义正是在这里变得可见。** **「白天气孔关闭，从而阻止了高温所会造成的水分散失」**；而**夜间被扣在苹果酸里的 CO₂「由 NADP 依赖的 malic enzyme 以 CO₂ 的形式释放出来」**；**这些 CO₂ 随后由 rubisco 和 Calvin 循环的酶同化**（A 第 732 页）。**注意这里做成了什么。** **这株植物在强光下、气孔却是关着的情况下进行光合作用**——**这对一株 C-3 植物来说是不可能的**，因为**一片封闭的叶子几分钟内就会耗尽 CO₂，而上升的 O₂/CO₂ 比会把 rubisco 推向它的加氧反应**。**夜里存下的苹果酸，起的是一个「内置 CO₂ 钢瓶」的作用。** **有两个后果值得说出来。** **速率被「天亮时液泡里存了多少苹果酸」封顶——这就是 CAM 植物长得慢的原因；这笔交换不是白拿的。** 另外，**光呼吸被压住的理由与 C-4 里完全相同**：**rubisco 是在一个局部高 CO₂ 的浓度下工作的，而 CO₂ 就在它旁边被放出来**。**同样的结果、两条通路里负责释放的还是同一个酶——NADP 依赖的 malic enzyme，捷克节点 `9-22` 在讲 C-4 时已经提到过它——只是沿着另一根轴到达。**"
      },
      {
        cz: "odkud se vzalo to jméno — a proč je užitečné",
        en: "THE ETYMOLOGY IS WORTH ONE LINE BECAUSE IT ENCODES THE MECHANISM, WHICH MAKES IT A MEMORY AID RATHER THAN TRIVIA. “ Because this method of CO2 fixation was first discovered in stonecrops ” , “ perennial flowering plants of the family Crassulaceae ” , it is called crassulacean acid metabolism, and the plants are called CAM plants (A p.732). Unpack the middle word. ACID is in the name because the defining observable is that these plants become measurably acidic overnight and less acidic through the day — malic acid accumulating in the vacuole by night and being decarboxylated by day. That is the phenomenon that was noticed first, long before anyone knew about PEP carboxylase or rubisco: leaves that taste sour in the morning and not in the evening. So if you can remember only one thing about CAM, remember that the acid swings on a daily cycle, and the whole mechanism can be reconstructed from it — something must be making the acid at night from something in the air, and something must be taking it apart by day for a purpose that needs light. Note also that Crassulaceae are the stonecrops, not the cacti; the family that gave the process its name is not the family most often used as the example.",
        cn: "**这个词源值得占一行，因为它把机制编码进了名字里——这让它成为一个记忆抓手，而不是冷知识。** **「因为这种 CO₂ 固定方式最早是在景天属植物中被发现的」**——**「景天科（Crassulaceae）的多年生开花植物」**——**所以它被称为「景天酸代谢」，这些植物被称为 CAM 植物**（A 第 732 页）。**把中间那个词拆开看。** **「酸」之所以在名字里，是因为最具定义性的可观察现象，就是这些植物在夜间变得可测地酸、白天又变回不那么酸**——**苹果酸夜里在液泡中积累、白天被脱羧掉**。**这正是最早被注意到的现象**，**远早于任何人知道 PEP carboxylase 或 rubisco**：**早上尝起来发酸、傍晚就不酸的叶子。** **所以如果关于 CAM 你只能记住一件事，就记住「酸度按日周期摆动」**——**整套机制都能从它重建出来**：**夜里一定有什么东西在用空气里的什么东西造酸，白天一定有什么东西在把它拆开，而且拆开是为了某件需要光的事。** 另外注意，**景天科是「景天」，不是仙人掌**；**给这个过程命名的那个科，并不是最常被拿来当例子的那个科。**"
      },
      {
        cz: "cena všech tří cest — 3, 5, 6,5 ATP a co si za to kupují",
        en: "TABLE 20-1 IS THE PIECE OF THIS SECTION MOST WORTH MEMORISING, BECAUSE IT SHOWS THAT NEITHER C4 NOR CAM IS AN IMPROVEMENT — BOTH ARE TRADES. “ The pathway of CO2 assimilation has a greater energy cost in C4 plants than in C3 plants ” , because for each CO2 assimilated in the C4 pathway “ a molecule of PEP must be regenerated at the expense of two phosphoanhydride bonds in ATP ” (A p.732). Per molecule of CO2 completely reduced, TABLE 20-1 gives 3 ATP and 2 NADPH for C3 plants, 5 ATP and 2 NADPH for C4, and 6.5 ATP and 2 NADPH for CAM. Read the extra ATP as the price of water: none of it buys more carbon, all of it buys the ability to keep the stomata shut. That reframes the whole section — these are not three levels of sophistication, they are three points on a trade between carbon gain and water loss, and which one wins depends on the climate. The book gives the crossover explicitly: as temperature rises and rubisco's affinity for CO2 falls, a point is reached at about 28 to 30 degrees at which “ the gain in efficiency from the elimination of photorespiration more than compensates for this energetic cost ” . Below that, C3 wins; above it, C4. And the section signs off with the most testable observation in the chapter: C4 plants such as crabgrass outgrow most C3 plants during the summer, “ as any experienced gardener can attest ” .",
        cn: "**表 20-1 是本节最值得背下来的一块，因为它显示：C-4 和 CAM 都不是「改进」——两者都是「交换」。** **「C-4 植物中 CO₂ 同化通路的能量代价高于 C-3 植物」**，因为在 C-4 通路里每同化一个 CO₂，**「都必须再生一分子 PEP，其代价是 ATP 上的两个磷酸酐键」**（A 第 732 页）。按**完全还原一分子 CO₂** 计，表 20-1 给出：**C-3 需 3 ATP + 2 NADPH**，**C-4 需 5 ATP + 2 NADPH**，**CAM 需 6.5 ATP + 2 NADPH**。**请把多出来的 ATP 读作「水的价钱」**：**它们没有一个是买来更多的碳的，全部买的是「能把气孔关着」这个能力。** **这句话重新框定了整节**——**这不是三个「先进程度」的档次，而是「碳收益 vs 水损失」这笔交换上的三个点**；**哪一个赢，取决于气候**。**书上明确给了交叉点**：随着温度升高、rubisco 对 CO₂ 的亲和力下降，**在约 28–30 ℃ 处会到达一个点，在那里「省掉光呼吸所得的效率收益，超过了这笔额外的能量代价」**。**在那之下 C-3 赢，在那之上 C-4 赢。** 而本节的收尾是全章最可检验的一个观察：**夏天里，马唐草这类 C-4 植物长得比大多数 C-3 植物快**——**「任何有经验的园丁都能作证」**。"
      },
      {
        cz: "⚠️ ROZPOR: kam patří kaktus — česká kniha říká C-4, Lehninger říká CAM",
        en: "THIS POINT IS NOT ABOUT LEHNINGER; IT IS ABOUT A DISAGREEMENT BETWEEN THE TWO TEXTBOOKS THAT WOULD OTHERWISE BE INVISIBLE, AND IT NEEDS HANDLING RATHER THAN CORRECTING. Czech node 9-22, in its first point, lists among the C-4 plants “ cactus-like plants (succulents) ”, alongside tropical grasses such as sugar cane. Lehninger's TABLE 20-1 lists as its CAM examples cactus, prickly pear, orchid and pineapple, and as its C4 examples maize, sugarcane and crabgrass. So sugar cane is C4 in both books, and cactus is C4 in one and CAM in the other. There is a second, sharper edge to this. Node 9-22's own quiz offers “ It allows CO2 fixation to occur at night ” as a WRONG answer to a question about the advantage of the C-4 mechanism. As a statement about C-4 that is correct — C-4 does not fix CO2 at night. But it is exactly what CAM plants do, and it is the distractor a reader is most likely to remember. A student who learns only the Czech layer therefore comes away with cacti filed under C-4 and with night-time CO2 fixation marked false. How to handle it: the Czech textbook sets the exam's scope, so answer from it; but if an examiner raises cacti, pineapple or night-time fixation, knowing that Lehninger files those under CAM is what lets you answer without contradicting yourself. The Czech nodes have deliberately NOT been edited — a disagreement between the two books is not something a depth node should quietly resolve.",
        cn: "**这一条讲的不是 Lehninger，而是两本教材之间一处「否则根本看不见」的分歧；它需要的是「处置」，不是「订正」。** **捷克节点 `9-22` 在它的第一条里，把「仙人掌一类的植物（多肉）」与甘蔗这类热带禾草一起，列在 C-4 植物之中。** 而 **Lehninger 的表 20-1 给出的 CAM 例子是仙人掌、仙人掌果、兰花、菠萝**，**C-4 的例子是玉米、甘蔗、马唐草**。**所以甘蔗在两本书里都是 C-4，而仙人掌在一本里是 C-4、在另一本里是 CAM。** **这件事还有第二条更锋利的边。** **`9-22` 自己的 quiz 里，「让 CO₂ 在夜间固定」被当作一道「C-4 机制的优势是什么」的「错误」选项。** **作为关于 C-4 的陈述，这是对的——C-4 确实不在夜间固定 CO₂。** **但那恰恰正是 CAM 植物做的事，而且它是读者最可能记住的那个干扰项。** **所以一个只学捷克层的学生，会同时把仙人掌归错桶、并把「夜间固定 CO₂」记成假的。** **怎么处置**：**捷克教材定考试范围，所以答题以它为准**；**但如果考官提到仙人掌、菠萝或夜间固定，知道 Lehninger 把它们归在 CAM 之下，才能让你答得前后不矛盾。** **捷克那几个节点是刻意「没有」被改动的——两本书之间的分歧，不该由一个深度节点悄悄替人裁决。**"
      },
      {
        cz: "co si odnést — jedna otázka, tři odpovědi, tři ceny",
        en: "CLOSE BY COMPRESSING THE SECTION, BECAUSE THE COMPRESSED FORM IS WHAT SURVIVES INTO AN EXAM. One problem: rubisco also accepts O2, photorespiration wastes carbon and energy, and it worsens as temperature rises — but the only way to get more CO2 is to open the stomata, and open stomata lose water. Three answers. C3: do nothing, pay the photorespiration, and win below about 28 degrees. C4: pre-fix with PEP carboxylase in mesophyll cells and release the CO2 around rubisco in bundle-sheath cells — separation in SPACE, 5 ATP per CO2, wins above about 28 to 30 degrees. CAM: pre-fix at night with the same enzyme, store the carbon as malate in the vacuole, release it by day behind closed stomata — separation in TIME, 6.5 ATP per CO2, wins where water is the binding constraint. The extra ATP in both cases buys water rather than carbon. One honest limit to state: this section explains the strategies and their costs, and Box 20-1's discussion of engineering a better rubisco makes clear that the underlying defect has not been fixed — a rubisco that does not react with O2, or a faster one, “ has inspired efforts to genetically engineer a ” better enzyme, but that goal “ is not, as yet, within reach ” (A p.729).",
        cn: "**以「把整节压缩」收尾，因为能活着进考场的正是压缩形式。** **一个问题**：**rubisco 也接受 O₂，光呼吸浪费碳和能量，而且温度越高越糟**——**但要拿到更多 CO₂ 就只能开气孔，而开气孔就丢水。** **三个答案。** **C-3**：**什么也不做，认下光呼吸这笔账；在约 28 ℃ 以下赢。** **C-4**：**在叶肉细胞里用 PEP carboxylase 预固定，在维管束鞘细胞里把 CO₂ 放到 rubisco 周围**——**分离在「空间」上，每个 CO₂ 5 个 ATP，在约 28–30 ℃ 以上赢。** **CAM**：**夜里用同一个酶预固定，把碳以苹果酸的形式存进液泡，白天在关着的气孔后面放出来**——**分离在「时间」上，每个 CO₂ 6.5 个 ATP，在「水是约束」的地方赢。** **两种情形里多出来的 ATP 买的都是水，不是碳。** **要说明的一条诚实边界**：**本节解释的是这些策略和它们的代价**；而 **BOX 20-1 关于「改造一个更好的 rubisco」的讨论表明，底下那个缺陷并没有被修好**——**一个不与 O₂ 反应的 rubisco、或者一个更快的 rubisco，「已经激发了对更好的酶进行基因工程改造的努力」**，**但那个目标「目前还不在触及范围之内」**（A 第 729 页）。"
      }
    ],
    terms: [
      {
        cz: "CAM — krasulacový kyselinový metabolismus",
        en: "CAM, crassulacean acid metabolism",
        cn: "CAM，景天酸代谢",
        def_en: "The third answer to rubisco's oxygenase problem, and the one the Czech layer does not have at all. Succulents such as cactus and pineapple separate the initial trapping of CO2 from its fixation by rubisco over TIME rather than over space. At night, when the air is cooler and moister so open stomata cost less water, PEP carboxylase fixes CO2 into oxaloacetate, which is reduced to malate and stored in the vacuole; by day the stomata close and NADP-linked malic enzyme releases that CO2 for rubisco. Same enzymes as the C4 pathway, different axis of separation. The name records its discovery in stonecrops of the family Crassulaceae, and ACID is in it because the vacuolar malic acid makes these plants measurably acidic by dawn and less so by dusk.",
        def_cn: "针对 rubisco 加氧问题的第三个答案，也是捷克层完全没有的那个。仙人掌、菠萝这类多肉植物，把「最初捕获 CO₂」与「rubisco 固定它」分在「时间」上而不是空间上。夜里空气更凉更湿、开气孔的水代价更小，此时 PEP carboxylase 把 CO₂ 固定成草酰乙酸，还原成苹果酸存进液泡；白天气孔关闭，NADP 依赖的 malic enzyme 把这些 CO₂ 放出来交给 rubisco。与 C-4 通路用的是同样的酶，只是分离的轴不同。这个名字记录了它在景天科景天属植物中的发现，而「酸」之所以在名字里，是因为液泡里的苹果酸让这些植物在天亮时可测地酸、到黄昏时又没那么酸。"
      },
      {
        cz: "prostorové vs časové oddělení",
        en: "spatial versus temporal separation",
        cn: "空间分离 vs 时间分离",
        def_en: "The one sentence that distinguishes C4 from CAM, and the answer an examiner is looking for. Both pathways solve the same problem the same way -- pre-fix CO2 with PEP carboxylase, whose affinity is far higher than rubisco's, so that CO2 can be released in high local concentration around rubisco while the stomata stay nearly shut. They differ only in the dimension along which the pre-fixation is separated from rubisco: C4 separates them in SPACE, PEP carboxylase in mesophyll cells and rubisco in bundle-sheath cells; CAM separates them in TIME, PEP carboxylase at night and rubisco by day. Habitat differences -- tropics versus desert -- are a consequence of this, not the distinction itself.",
        def_cn: "把 C-4 与 CAM 区分开的那一句话，也是考官要的那个答案。两条通路解决同一个问题、用的还是同一个办法——用亲和力远高于 rubisco 的 PEP carboxylase 预固定 CO₂，好在气孔基本关着的情况下，在 rubisco 周围高浓度地放出 CO₂。两者的差别仅在于「沿哪个维度」把预固定与 rubisco 分开：C-4 分在「空间」上（PEP carboxylase 在叶肉细胞、rubisco 在维管束鞘细胞）；CAM 分在「时间」上（PEP carboxylase 在夜里、rubisco 在白天）。栖息地的差别——热带 vs 沙漠——是这件事的后果，不是这个区分本身。"
      },
      {
        cz: "proč se malát ukládá do vakuoly",
        en: "why the malate is stored in the vacuole",
        cn: "苹果酸为什么存进液泡",
        def_en: "Not a detail -- a requirement. A whole night's fixed carbon accumulates as malic acid, and the book gives the reason for the compartment explicitly: the malate is stored in vacuoles to protect cytosolic and plastid enzymes from the low pH produced by malic acid dissociation. The vacuole is the only compartment that can hold that much acid without disabling the cell's enzymes. This is also where the ACID in crassulacean acid metabolism comes from -- the plants become measurably acidic overnight and less acidic through the day, which was the observation that named the process long before its mechanism was known.",
        def_cn: "这不是一个细节，而是一项要求。一整夜固定下来的碳以苹果酸的形式累积，而书上明确给了「为什么用这个区室」的理由：苹果酸被存进液泡，是为了保护胞质和质体中的酶不受苹果酸解离所产生的低 pH 之害。液泡是唯一一个能装下这么多酸、又不让细胞的酶失灵的区室。「景天酸代谢」里的那个「酸」也是从这里来的——这些植物在夜间变得可测地酸、白天又变回不那么酸，而正是这个观察在其机制被弄清之前很久就给这个过程命了名。"
      },
      {
        cz: "PEP-karboxylasa a její substrát HCO3⁻",
        en: "PEP carboxylase and its bicarbonate substrate",
        cn: "PEP 羧化酶与它的碳酸氢根底物",
        def_en: "The enzyme both C4 and CAM plants use to pre-fix carbon, and a detail the Czech layer omits: its substrate is HCO3 minus, not CO2. That matters because bicarbonate is the abundant species of inorganic carbon at cytosolic pH, and it is part of the chemistry underlying the much lower Km that Czech node 9-22 gives as the reason C4 works. The enzyme fixes carbon into the four-carbon oxaloacetate in the cytosol of mesophyll cells, and the oxaloacetate is then either reduced to malate at the expense of NADPH or transaminated to aspartate. In CAM plants the same enzyme does the same job, at night.",
        def_cn: "C-4 与 CAM 植物都用来预固定碳的那个酶；而捷克层漏掉了一个细节：它的底物是 HCO₃⁻，不是 CO₂。这一点要紧，因为在胞质 pH 下，碳酸氢根才是无机碳中丰度高的那一种；而这也是「捷克节点 `9-22` 把「更低的 Km」作为 C-4 有效之理由」背后的部分化学。这个酶在叶肉细胞的胞质里把碳固定成四碳的草酰乙酸，后者随后或被 NADPH 还原成苹果酸、或经转氨作用变成天冬氨酸。在 CAM 植物里，同一个酶在夜里干同样的事。"
      },
      {
        cz: "plasmodesmata",
        en: "plasmodesmata",
        cn: "胞间连丝",
        def_en: "Protein-lined channels that connect two plant cells and provide a path for movement of metabolites and even small proteins between them. In the C4 pathway they are what carries malate or aspartate from mesophyll cells into bundle-sheath cells. Czech node 9-22 gives Kranz anatomy -- the two concentric cell layers -- but not the channels, and without them the anatomy is just two adjacent cells rather than one metabolic unit with a delivery pipe. Worth knowing as a general plant-cell feature, not only as a C4 detail.",
        def_cn: "连接两个植物细胞的、内衬蛋白的通道，为代谢物、甚至小蛋白在细胞间的移动提供通路。在 C-4 通路里，正是它们把苹果酸或天冬氨酸从叶肉细胞送进维管束鞘细胞。捷克节点 `9-22` 给了 Kranz 解剖——那两层同心的细胞——却没有给这些通道；而没有它们，那套解剖就只是「两个挨着的细胞」，而不是一个带输送管的代谢单元。这值得当作植物细胞的一个通用特征来记，而不只是一个 C-4 的细节。"
      },
      {
        cz: "energetická cena tří cest (3 / 5 / 6,5 ATP)",
        en: "the energy cost of the three pathways",
        cn: "三条通路的能量代价",
        def_en: "Per molecule of CO2 completely reduced: C3 needs 3 ATP and 2 NADPH, C4 needs 5 ATP and 2 NADPH, CAM needs 6.5 ATP and 2 NADPH. The C4 surcharge is explicit -- for each CO2 assimilated, a molecule of PEP must be regenerated at the expense of two phosphoanhydride bonds in ATP. Read the extra ATP correctly: none of it buys more carbon, all of it buys the ability to keep the stomata shut, so these are three points on a trade between carbon gain and water loss rather than three levels of sophistication. The crossover is given as about 28 to 30 degrees, above which eliminating photorespiration more than compensates for the extra ATP.",
        def_cn: "按完全还原一分子 CO₂ 计：C-3 需 3 ATP + 2 NADPH，C-4 需 5 ATP + 2 NADPH，CAM 需 6.5 ATP + 2 NADPH。C-4 那笔附加费书上写得很明确——每同化一个 CO₂，都必须再生一分子 PEP，代价是 ATP 上的两个磷酸酐键。要把多出来的 ATP 读对：它们没有一个买来更多的碳，全部买的是「能把气孔关着」这个能力——所以这是「碳收益 vs 水损失」这笔交换上的三个点，而不是三个「先进程度」的档次。交叉点书上给的是约 28–30 ℃，在那之上，省掉光呼吸的收益超过多花的 ATP。"
      },
      {
        cz: "kvantitativní cena fotorespirace",
        en: "the quantitative cost of photorespiration",
        cn: "光呼吸的量化代价",
        def_en: "The number the Czech layer lacks and the reason the rest of the section exists: average United States yields of soybean and wheat are estimated to be reduced by 36 and 20 per cent respectively by the necessity of recycling glycolate from photorespiration. The book is equally blunt about the process itself -- unlike mitochondrial respiration, photorespiration conserves no energy and actually inhibits net biomass formation, so the name is a trap. It also notes that bundle-sheath mitochondria have very low concentrations of the glycine decarboxylase complex, which is consistent with C4 plants not needing the salvage pathway.",
        def_cn: "捷克层缺的那个数字，也是本节其余部分存在的理由：美国大豆和小麦的平均产量，据估计分别因「必须回收光呼吸产生的乙醇酸」而减少 36% 和 20%。书上对这个过程本身同样毫不客气——与线粒体呼吸不同，光呼吸不守存任何能量，而且实际上抑制净生物量的形成，所以这个名字是个陷阱。书上还指出，维管束鞘细胞的线粒体中甘氨酸脱羧酶复合体浓度很低——这与「C-4 植物不需要那条回收通路」是自洽的。"
      },
      {
        cz: "⚠️ rozpor mezi učebnicemi: kaktus jako C-4 nebo CAM",
        en: "the textbook conflict about cacti",
        cn: "两本教材关于仙人掌的分歧",
        def_en: "A real disagreement worth carrying into the exam rather than resolving. Czech node 9-22 lists cactus-like succulents among the C-4 plants; Lehninger's TABLE 20-1 lists cactus, prickly pear, orchid and pineapple as CAM plants. Sugar cane is C4 in both. Sharper still, 9-22's own quiz marks the option about CO2 fixation occurring at night as a WRONG answer -- correct about C-4, but exactly what CAM plants do. So a reader of the Czech layer alone ends up with cacti in the wrong bucket and night-time fixation marked false. Handling: the Czech textbook sets the exam's scope, so answer from it, but knowing Lehninger's classification is what lets you handle a question about cacti, pineapple or night fixation without contradicting yourself. The Czech nodes have not been edited.",
        def_cn: "一处真实的分歧，值得带进考场而不是替人裁决。捷克节点 `9-22` 把仙人掌一类的多肉列在 C-4 植物里；Lehninger 的表 20-1 把仙人掌、仙人掌果、兰花、菠萝列为 CAM 植物。甘蔗在两本书里都是 C-4。更锋利的是，`9-22` 自己的 quiz 把「CO₂ 在夜间固定」那个选项标为「错误」——作为关于 C-4 的说法没错，但那正是 CAM 植物做的事。所以只读捷克层的人，会同时把仙人掌归错桶、并把「夜间固定」记成假的。处置：捷克教材定考试范围，所以答题以它为准；但知道 Lehninger 的分类，才能在被问到仙人掌、菠萝或夜间固定时答得前后不矛盾。捷克那几个节点没有被改动。"
      }
    ],
    quiz: [
      {
        type: "mcq",
        q_en: "What is the essential difference between the C4 pathway and CAM?",
        q_cn: "C-4 通路与 CAM 的本质区别是什么？",
        options: [
          "C4 plants live in the tropics and CAM plants in deserts, and C4 uses PEP carboxylase while CAM uses rubisco alone",
          "Both pre-fix CO2 with PEP carboxylase to concentrate it around rubisco; they differ only in the dimension along which that pre-fixation is separated from rubisco -- space in C4, mesophyll versus bundle-sheath cells, and time in CAM, night versus day",
          "C4 plants store the fixed carbon as malate and CAM plants store it as aspartate, which is why CAM plants can survive longer droughts",
          "C4 plants suppress the oxygenase activity of rubisco directly, whereas CAM plants simply tolerate photorespiration and compensate by growing more slowly"
        ],
        answer: 1,
        why_en: "Both use the same trick and differ in one axis. Lehninger states it directly: instead of separating the initial trapping of CO2 and its fixation by rubisco across space as the C4 plants do, CAM plants “ they separate these two events over time ” (A p.732). Habitat is a consequence of the mechanism, not the distinction, which is why option 1 fails -- and CAM plants certainly do use PEP carboxylase, at night. Option 3 is wrong on both counts: malate is the carrier in CAM, and in C4 plants the oxaloacetate may be reduced to malate OR transaminated to aspartate. Option 4 misstates both: neither suppresses the oxygenase directly, they both concentrate CO2 around rubisco so that the carboxylase reaction outcompetes it, and photorespiration is listed in TABLE 20-1 as absent or suppressed in BOTH C4 and CAM plants.",
        why_cn: "**两者用的是同一个花招，差别只在一根轴上。** Lehninger 说得很直接：**CAM 植物不像 C-4 植物那样把「最初捕获 CO₂」与「rubisco 固定它」分在空间上，而是「把这两个事件分在时间上」**（A 第 732 页）。**栖息地是机制的后果，不是那个区分本身**——**这就是选项 1 不成立的原因**；而且**CAM 植物当然也用 PEP carboxylase，只是在夜里用**。**选项 3** 两处都错：**CAM 里的载体正是苹果酸**；而**在 C-4 植物里，草酰乙酸既可以被还原成苹果酸，也可以经转氨变成天冬氨酸**。**选项 4** 两处都说错了：**两者都不是「直接压制加氧活性」，而是把 CO₂ 在 rubisco 周围浓缩起来、让羧化反应竞争得过它**；而且**表 20-1 里，光呼吸在 C-4 和 CAM 中都被列为「不存在或被抑制」**。"
      },
      {
        type: "mcq",
        q_en: "Why do CAM plants open their stomata at night rather than during the day?",
        q_cn: "CAM 植物为什么在夜里、而不是白天打开气孔？",
        options: [
          "Because PEP carboxylase is a light-inhibited enzyme and can only work in darkness",
          "Because the air is cooler and moister at night, so the same stomatal opening costs far less water -- the exchange rate between carbon gained and water lost is at its best then",
          "Because atmospheric CO2 concentration rises at night as surrounding plants respire, so more carbon enters per unit time",
          "Because rubisco is inactivated in the dark, so opening the stomata by day would let CO2 escape before it could be fixed"
        ],
        answer: 1,
        why_en: "The reason is physical rather than biochemical. “ At night, when the air is cooler and moister, the stomata open to allow entry of ” CO2, and by contrast “ During the day the stomata close, preventing the water loss that would result from high daytime temperatures ” (A p.732). Transpiration is driven by the water vapour gradient between leaf and atmosphere, and cool moist air is much closer to saturation, so the same aperture held for the same time loses far less water. Option 1 invents light inhibition of PEP carboxylase. Option 3 describes a real but minor effect that the section does not invoke. Option 4 inverts the logic -- CO2 does not escape from a leaf that is fixing it, and the point of the night-time opening is to CAPTURE carbon for use in the light, stored as malate in the vacuole.",
        why_cn: "**理由是物理上的，不是生化上的。** **「夜里，当空气更凉更湿时，气孔打开，让」CO₂「进入」**；与之相对，**「白天气孔关闭，从而阻止了高温所会造成的水分散失」**（A 第 732 页）。**蒸腾的驱动力是叶与大气之间的水汽梯度**，而**凉而湿的空气更接近饱和**，所以**同样的开度、同样的时长，丢的水少得多**。**选项 1** 凭空发明了「PEP carboxylase 被光抑制」。**选项 3** 描述的是一个真实但次要的效应，**而本节并未援引它**。**选项 4** 把逻辑弄反了——**一片正在固定 CO₂ 的叶子不会「让 CO₂ 跑掉」**；**夜间开气孔的意义恰恰是「捕获」碳、以苹果酸的形式存进液泡，留到光下用。**"
      },
      {
        type: "mcq",
        q_en: "A CAM plant fixes CO2 into malate overnight and stores it in the vacuole rather than in the cytosol. Why the vacuole specifically?",
        q_cn: "CAM 植物夜里把 CO₂ 固定成苹果酸，存进液泡而不是胞质。为什么偏偏是液泡？",
        options: [
          "Because the vacuole contains the NADP-linked malic enzyme that will release the CO2 the next day",
          "Because a whole night's fixed carbon is a large amount of acid, and the vacuole holds it without exposing cytosolic and plastid enzymes to the low pH produced by malic acid dissociation",
          "Because malate cannot cross the chloroplast envelope, so it must be sequestered outside the cytosol to prevent it from inhibiting the Calvin cycle",
          "Because the vacuole is the only compartment large enough to hold the volume of malate, the cytosol being almost entirely occupied by rubisco"
        ],
        answer: 1,
        why_en: "The book gives the reason explicitly. “ The oxaloacetate is reduced to malate and stored in the vacuoles ” , “ to protect cytosolic and plastid enzymes from the low pH produced by malic acid dissociation ” (A p.732). A night's worth of fixed carbon is a great deal of acid, and this is also where the ACID in crassulacean acid metabolism comes from -- these plants are measurably acidic at dawn and less so at dusk. Option 1 misplaces the enzyme; the malic enzyme acts on the malate after it leaves the vacuole. Option 3 invents a permeability constraint and an inhibition that the section does not describe. Option 4 confuses this with rubisco's abundance in the CHLOROPLAST STROMA, where it is about 250 mg/mL and nearly half of soluble protein -- not the cytosol.",
        why_cn: "**书上明确给了理由。** **「草酰乙酸被还原成苹果酸并储存在液泡里」**，**「为的是保护胞质和质体中的酶不受苹果酸解离所产生的低 pH 之害」**（A 第 732 页）。**一整夜固定下来的碳是相当多的酸**；而**「景天「酸」代谢」里的那个「酸」也正是从这里来的**——**这些植物在天亮时可测地酸、到黄昏时没那么酸**。**选项 1** 把酶放错了地方：**malic enzyme 是在苹果酸离开液泡之后作用于它的**。**选项 3** 凭空发明了一个通透性约束和一种抑制，**本节并未描述**。**选项 4** 把它与 **rubisco 在「叶绿体基质」里的丰度**搞混了——**那里约 250 mg/mL、占可溶性蛋白近一半，而不是胞质。**"
      },
      {
        type: "mcq",
        q_en: "Per molecule of CO2 completely reduced, C3 plants need 3 ATP, C4 plants 5, and CAM plants 6.5. What should you conclude from that?",
        q_cn: "完全还原一分子 CO₂，C-3 需 3 个 ATP，C-4 需 5 个，CAM 需 6.5 个。你应当从中得出什么结论？",
        options: [
          "That C4 and CAM are evolutionarily more advanced, since more elaborate pathways consume more energy",
          "That the extra ATP buys water rather than carbon -- it purchases the ability to keep the stomata shut -- so these are three points on a trade between carbon gain and water loss, and which wins depends on climate",
          "That C3 plants are the most efficient under all conditions, and C4 and CAM persist only in habitats where C3 plants cannot germinate",
          "That the additional ATP is spent regenerating NADPH, which is why all three pathways need the same 2 NADPH per CO2"
        ],
        answer: 1,
        why_en: "None of the extra ATP buys carbon. “ The pathway of CO2 assimilation has a greater energy cost in C4 plants than in C3 plants ” because for each CO2 assimilated “ a molecule of PEP must be regenerated at the expense of two phosphoanhydride bonds in ATP ” (A p.732). What it buys is the ability to concentrate CO2 around rubisco while the stomata stay nearly closed, that is, water. The book gives the crossover: at about 28 to 30 degrees “ the gain in efficiency from the elimination of photorespiration more than compensates for this energetic cost ” , and above it C4 plants such as crabgrass outgrow C3 plants, “ as any experienced gardener can attest ” . Option 1 reads cost as sophistication. Option 3 contradicts the crossover. Option 4 is wrong on the chemistry -- the extra ATP regenerates PEP, and the constant 2 NADPH per CO2 across all three is precisely because the reduction of CO2 itself is unchanged.",
        why_cn: "**多出来的 ATP 没有一个是买碳的。** **「C-4 植物中 CO₂ 同化通路的能量代价高于 C-3 植物」**，因为每同化一个 CO₂，**「都必须再生一分子 PEP，代价是 ATP 上的两个磷酸酐键」**（A 第 732 页）。**它买到的是「在气孔基本关着的情况下把 CO₂ 浓缩到 rubisco 周围」的能力——也就是水。** 书上给了交叉点：**约 28–30 ℃ 时，「省掉光呼吸所得的效率收益，超过了这笔额外的能量代价」**；**在那之上，马唐草这类 C-4 植物长得比 C-3 快**——**「任何有经验的园丁都能作证」**。**选项 1** 把「代价」读成了「先进程度」。**选项 3** 与那个交叉点矛盾。**选项 4** 化学上就错——**多出来的 ATP 是用来再生 PEP 的**；而**三条路每个 CO₂ 都恒定需要 2 个 NADPH，恰恰是因为「还原 CO₂ 本身」这一步没有变。**"
      }
    ],
    oral: {
      q_en: "You have described photorespiration and the C4 pathway from Czech sections 9.2 and 9.3. The examiner asks whether those are the only adaptations plants have evolved against rubisco's oxygenase reaction, and how the alternatives compare in cost.",
      q_cn: "你已经按捷克教材 9.2、9.3 讲过光呼吸和 C-4 通路。考官问：针对 rubisco 的加氧反应，植物演化出的适应就只有这些吗？这些替代方案在代价上又怎么比较？",
      model_en: "No — there is a third, and the cleanest way to see all three is as answers to one problem. The problem is that rubisco is not specific for CO2; it also accepts O2, producing 2-phosphoglycolate that has to be salvaged in an oxygen-consuming pathway, and the cost is not small. Average United States yields of soybean and wheat are estimated to be reduced by 36 and 20 per cent respectively by the need to recycle glycolate, and unlike mitochondrial respiration, photorespiration conserves no energy and actually inhibits net biomass formation — so the name is misleading. The problem gets worse as temperature rises, because rubisco's affinity for CO2 falls. The obvious fix is more CO2, but the only entry is through the stomata, and open stomata lose water; in a hot dry place water is dearer than carbon. So the real constraint is: keep the stomata as closed as possible and still supply rubisco. Both adaptations use the same trick — pre-fix the carbon with PEP carboxylase, whose affinity is far higher than rubisco's and whose substrate is in fact bicarbonate rather than CO2 — and they differ only in the dimension along which the pre-fixation is separated from rubisco. C4 plants separate them in space: PEP carboxylase fixes CO2 into oxaloacetate in mesophyll cells, the four-carbon acid travels through plasmodesmata, which are protein-lined channels connecting adjacent plant cells, into bundle-sheath cells, and there the CO2 is released around rubisco at high concentration. CAM plants separate them in time. At night, when the air is cooler and moister so an open stoma costs far less water, PEP carboxylase fixes CO2 into oxaloacetate, which is reduced to malate and stored in the vacuole — in the vacuole specifically, because a whole night's fixed carbon is a lot of acid and the low pH from malic acid dissociation would damage cytosolic and plastid enzymes. By day the stomata close and NADP-linked malic enzyme releases that CO2 for rubisco and the Calvin cycle. The plant is then photosynthesising in bright light with its stomata shut, using the vacuolar malate as an internal CO2 cylinder. The name is crassulacean acid metabolism, from the stonecrops of the family Crassulaceae in which it was found, and the acid in the name records the observable — these plants are measurably acidic at dawn and less so at dusk. On cost: per CO2 completely reduced, C3 needs 3 ATP and 2 NADPH, C4 needs 5, CAM needs 6.5. The C4 surcharge is explicit — each assimilated CO2 requires a PEP to be regenerated at the expense of two phosphoanhydride bonds. The important reading is that none of the extra ATP buys carbon; it buys the ability to keep the stomata shut, that is, water. So these are not three levels of sophistication but three points on a trade, and which wins depends on climate: the crossover is around 28 to 30 degrees, above which the gain from eliminating photorespiration more than compensates for the extra ATP, which is why C4 plants like crabgrass outgrow C3 plants in summer. One thing I should flag: our Czech textbook lists cactus-like succulents among the C4 plants, while Lehninger classifies cactus, prickly pear, orchid and pineapple as CAM. Sugar cane is C4 in both. I would answer from the Czech book since it sets the scope, but I want to be clear that I know the two disagree here, and that CAM plants do fix CO2 at night.",
      model_cn: "**不止——还有第三种；而看清这三者最干净的方式，是把它们当作对同一个问题的回答。** **问题是 rubisco 对 CO₂ 不专一，它也接受 O₂**，产生 **2-phosphoglycolate**，**必须靠一条耗氧的通路回收掉**；**而这个代价不小**。**美国大豆和小麦的平均产量，据估计分别因回收乙醇酸的需要而减少 36% 和 20%**；而且**与线粒体呼吸不同，光呼吸不守存任何能量，还实际上抑制净生物量的形成**——**所以这个名字是有误导性的**。**温度越高问题越糟，因为 rubisco 对 CO₂ 的亲和力随温度下降。** **显而易见的解法是多给 CO₂，但唯一的入口是气孔，而开气孔就丢水**；**在又热又干的地方，水比碳贵。** **所以真正的约束是：把气孔尽量关着，同时还得给 rubisco 供货。** **两种适应用的是同一个花招**——**用 PEP carboxylase 预固定碳**（它的亲和力远高于 rubisco，**而且它真正的底物其实是碳酸氢根而不是 CO₂**）——**两者只在「沿哪个维度把预固定与 rubisco 分开」上不同**。**C-4 植物分在空间上**：**PEP carboxylase 在叶肉细胞里把 CO₂ 固定成草酰乙酸**，**四碳酸经胞间连丝**（**连接相邻植物细胞的、内衬蛋白的通道**）**进入维管束鞘细胞**，**在那里高浓度地把 CO₂ 放到 rubisco 周围**。**CAM 植物分在时间上。** **夜里空气更凉更湿、开一个气孔的水代价小得多**，此时 **PEP carboxylase 把 CO₂ 固定成草酰乙酸，还原成苹果酸存进液泡**——**特意存进液泡，因为一整夜固定的碳是相当多的酸，而苹果酸解离产生的低 pH 会损伤胞质和质体中的酶**。**白天气孔关闭，NADP 依赖的 malic enzyme 把这些 CO₂ 放出来交给 rubisco 和 Calvin 循环。** **于是这株植物是在强光下、气孔关着的情况下进行光合作用的，用液泡里的苹果酸当一个内置的 CO₂ 钢瓶。** **名字叫景天酸代谢，来自最早在其中发现它的景天科景天属植物**；**名字里的「酸」记录的是那个可观察现象——这些植物天亮时可测地酸、黄昏时没那么酸。** **说代价**：**完全还原一个 CO₂，C-3 需 3 ATP + 2 NADPH，C-4 需 5 个，CAM 需 6.5 个。** **C-4 那笔附加费书上写得很明确——每同化一个 CO₂，都要再生一分子 PEP，代价是两个磷酸酐键。** **要紧的读法是：多出来的 ATP 没有一个是买碳的，它买的是「能把气孔关着」的能力，也就是水。** **所以这不是三个先进程度的档次，而是一笔交换上的三个点；哪个赢取决于气候**：**交叉点在约 28–30 ℃，在那之上，省掉光呼吸的收益超过多花的 ATP**——**这就是为什么夏天马唐草这类 C-4 植物长得比 C-3 快。** **有一件事我要说明**：**我们的捷克教材把仙人掌一类的多肉列在 C-4 植物里，而 Lehninger 把仙人掌、仙人掌果、兰花、菠萝归为 CAM。甘蔗在两本书里都是 C-4。** **我会按捷克书作答，因为它定考试范围**；**但我想说清楚，我知道这两本在这里不一致，而且 CAM 植物确实在夜间固定 CO₂。**",
      checklist: [
        "Framed all three pathways as answers to one problem: rubisco accepts O2, and the only way to get more CO2 is to open stomata, which costs water",
        "Gave the quantitative cost of photorespiration (36 per cent soybean, 20 per cent wheat) rather than only describing the pathway",
        "Stated that photorespiration conserves no energy and inhibits net biomass formation, so the name misleads",
        "Identified the shared trick -- pre-fixation by PEP carboxylase, higher affinity than rubisco -- before distinguishing the two pathways",
        "Gave the one-sentence distinction: separation in SPACE for C4, in TIME for CAM, and did not offer habitat as the distinction",
        "Mentioned that PEP carboxylase acts on bicarbonate rather than CO2",
        "Named plasmodesmata as what makes the two C4 cell layers one metabolic unit",
        "Explained WHY the stomata open at night -- cooler moister air, so the same aperture loses far less water -- as a physical rather than biochemical reason",
        "Gave the reason for vacuolar storage: protecting cytosolic and plastid enzymes from the low pH of dissociating malic acid",
        "Named NADP-linked malic enzyme as what releases the CO2 by day, and noted the plant then photosynthesises with stomata shut",
        "Explained the ACID in the name as the daily swing in tissue acidity, and attributed the name to the Crassulaceae",
        "Gave all three ATP costs (3 / 5 / 6.5) and read them correctly: the extra ATP buys water, not carbon",
        "Gave the C4 surcharge's origin (regenerating PEP at the cost of two phosphoanhydride bonds) and the 28 to 30 degree crossover",
        "FLAGGED the textbook conflict about cacti explicitly, said which book sets the exam's scope, and did not silently adopt either classification"
      ]
    }
  }

);
