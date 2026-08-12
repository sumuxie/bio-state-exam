/* ============================================================
   Lehninger 8 — Chapter 23, sections 23.4 and 23.5. Third and fourth
   nodes from chapter 23, after L-23-2-1 (leh_ch23.js, tissue-specific
   metabolism) and L-23-3-1 (leh_ch23b.js, hormonal regulation of fuel
   metabolism).

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Only `summary` + `mustKnow`. Written to the pattern of `leh_ch12b.js`.

   ⚠️ THE OVERLAP CHECK THAT MATTERED HERE WAS AGAINST THE LEHNINGER
   LAYER, NOT THE CZECH ONE. `diabetes` scores 17 hits in L-23-3-1 and
   `obesity` and `leptin` 3 each, which looks at first like these two
   sections are already covered. They are not, and L-23-3-1 says so
   itself: its coverageNote states "this node stops where section 23.4
   begins — obesity, BMI, leptin and adiponectin are section 23.4 and
   were NOT read, so no page in that section is cited here", and
   "diabetes mellitus is named here only where section 23.3 itself
   names it, as the disease behind the sulfonylurea drugs and the
   neonatal Kir6.2 mutations — the full treatment of diabetes is
   elsewhere in the book and is not covered". A previous node declaring
   its own boundary is the cheapest coverage evidence in this repo;
   it was still confirmed by grep before writing.

   CZECH COVERAGE, word-boundary matched:
     23.4  obezit 0, leptin 0, ghrelin 0, hypotalam 0. The 13 `adipo`
           hits are adipose TISSUE in lipid nodes (8-3-5, 8-2-2-1,
           5-2, 7-12-2), never adipokine endocrinology.
     23.5  diabet 13, and every one is diabetes as a CAUSE of something
           else: 8 in 8-4-4-3 and 5 in 10-8, all naming it as a
           condition that floods the cell with acetyl-CoA and produces
           ketone bodies. cukrovk 1, same node. ketoacid 0, glykovan 0,
           inzulin 0 (the Czech text uses "inzulín" nowhere as a
           stem hit either). So the Czech layer has the ketone-body
           CONSEQUENCE of uncontrolled diabetes and nothing about the
           disease itself.

   PAGE RANGES MEASURED IN A:
     23.4  867-875. tsv correct at both ends. Confirmed twice over by
           A's own Chapter Review key-term index on printed p.880,
           which prints "body mass index (BMI) 867 / adipokines 867 /
           leptin 867 / arcuate nucleus 868 / orexigenic 868 /
           anorexigenic 868 / adiponectin 869 / AMPK 869 / mTORC1 871 /
           PPAR 871 / ghrelin 872 / endocannabinoids 873 /
           probiotics 874 / prebiotics 874".
     23.5  875-879. ⚠️ tsv says 875-880 and the END IS WRONG: printed
           p.880 is the Chapter Review page (key terms and PROBLEMS),
           not section content. SUMMARY 23.5 is on printed p.879.

   topicKey: both start NEW single-book keys, `obesity-and-body-mass`
   and `diabetes-mellitus`. ⚠️ 23.5 was NOT merged into
   `fatty-acid-oxidation`, even though that key holds Czech 8-4-4-3 and
   10-8 where diabetes is named: that key is about beta-oxidation and
   ketone bodies, and filing the disease under it would misfile the
   subject to manufacture a cross-book link. The link is made in prose
   instead, by naming those two Czech nodes in the summary.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-23-4-1",
    book: "lehninger",
    topicKey: "obesity-and-body-mass",
    chapter: 23,
    section: "23.4",
    czTitle: "Žádná — obezita a regulace tělesné hmotnosti (23.4): tuková tkáň jako endokrinní orgán",
    enTitle: "Obesity and the regulation of body mass — a brief orientation: fat is not a store, it is a gland that reports how full it is",
    cnTitle: "肥胖与体重的调节——只作科普性了解：脂肪组织不是一个仓库，而是一个会汇报自己有多满的内分泌腺",
    pages: [867, 868, 869, 870, 871, 872, 873, 874, 875],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 23.4 read end to end, A printed pp.867-875 with SUMMARY 23.4 on printed p.875; `lehninger_only_scope.tsv` marks 23.4 `brief` and its range is correct at both ends, confirmed independently by A's own Chapter Review key-term index on printed p.880 (BMI 867, adipokines 867, leptin 867, arcuate nucleus 868, orexigenic 868, anorexigenic 868, adiponectin 869, AMPK 869, mTORC1 871, PPAR 871, ghrelin 872, endocannabinoids 873, probiotics 874, prebiotics 874). Czech coverage measured with word-boundary matching before writing: obezit 0, leptin 0, ghrelin 0, hypotalam 0; the 13 `adipo` hits are adipose tissue in lipid nodes (8-3-5, 8-2-2-1, 5-2, 7-12-2), never adipokine endocrinology. ⚠️ The overlap that mattered was inside the Lehninger layer, not the Czech one: L-23-3-1 scores 3 hits each for obesity and leptin, but its own coverageNote states that it 'stops where section 23.4 begins -- obesity, BMI, leptin and adiponectin are section 23.4 and were NOT read', so those hits are forward references, not coverage. topicKey is a NEW single-book key, `obesity-and-body-mass`. NOT COVERED: the ob/ob and db/db mouse genetics beyond a sentence, the leptin-resistance literature, and the detail of PPAR isoform targets.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；肥胖、瘦素与体重调定点是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Adipose tissue is an endocrine organ, not a warehouse: it secretes leptin in proportion to how much fat it holds, and leptin's message to the hypothalamus is “reserves are sufficient” — eat less, spend more. That is why body mass behaves like a regulated set point rather than an accumulating balance. Two consequences to keep: appetite is run by a push-pull pair of neuron types in the arcuate nucleus, each inhibiting the other, so any stimulus that turns one on turns the other off; and adiponectin acts largely through AMPK, the same energy sensor that exercise and a rising AMP/ATP ratio switch on.",
      cn: "**脂肪组织是一个内分泌器官，不是仓库**：它**按自己储存了多少脂肪成比例地分泌瘦素 (leptin)**，而瘦素送到**下丘脑**的消息是「**储备够了**」——**少吃、多消耗**。⚠️ **这正是为什么体重的行为像一个被调节的「调定点」，而不是一本越记越多的流水账。** 有两个后果要记住：**食欲由弓状核 (arcuate nucleus) 里一对「推–拉」神经元管着，两者互相抑制**——**所以任何让其中一类兴奋的刺激，同时就关掉了另一类**；以及**脂联素 (adiponectin) 主要通过 AMPK 起作用**，**而 AMPK 正是运动和 AMP/ATP 比值升高所激活的那同一个能量传感器**。"
    },
    summary: {
      en: "A short section on how a body decides how much fat to carry. Obesity is defined through body mass index — weight in kg over height in m squared — with 25 to 30 overweight, over 30 obese, over 40 severely obese, and more than 40% of U.S. adults now obese. The mechanism the section is built on is leptin. “Adipose tissue produces leptin, a hormone that regulates feeding behavior and energy expenditure so as to maintain adequate reserves of fat” (A p.875), and its production and release increase with the number and size of adipocytes — so the signal reports the size of the store. The leptin receptor, encoded by the DB gene, is expressed mainly in neurons of the arcuate nucleus of the hypothalamus; leptin carries the message that reserves are sufficient, promoting reduced intake and increased expenditure, and it also stimulates the sympathetic nervous system. Two populations of neurosecretory cells do the arithmetic: anorexigenic cells release appetite-suppressing peptides including α-MSH, orexigenic cells release NPY, each type inhibits the other, and the gastric hormone ghrelin activates the NPY cells while PYY3-36 from the colon inhibits them. The second adipokine is adiponectin, which “stimulates fatty acid uptake and oxidation and inhibits fatty acid synthesis” and sensitises muscle and liver to insulin, acting largely through AMP-activated protein kinase — the sensor of the AMP/ATP ratio that exercise also activates, and which through its actions in the brain affects the metabolism of the whole animal. The section closes on further inputs: mTORC1 tying protein synthesis to nutrient availability, PPARs as transcriptional regulators of fat burning, endocannabinoids, and the gut microbiome via probiotics and prebiotics. IN THE BOOK'S OWN WORDS: “acts on receptors in the hypothalamus to curtail appetite.” (A p.867); “Leptin carries the message that fat reserves are sufficient” (A p.868); “When leptin binds to the extracellular domains of two monomers, they dimerize and undergo phosphorylation on several Tyr residues” (A p.869); “AMPK monitors the energy status of a cell through its response to increased [AMP]/[ATP]” (A p.870); “When AMPK senses depletion of ATP in an individual cell, lipid synthesis is inhibited and use of lipid as fuel is stimulated” (A p.871); “PPAR8 is a key regulator of fat oxidation, which responds to changes in dietary lipid” (A p.872); “Prader-Willi syndrome, whose blood levels of ghrelin are” (A p.873); “adding, directly to the gut, microbial species (probiotics) that disfavor adipogenesis” (A p.874).",
      cn: "一节关于**身体如何决定自己该带多少脂肪**的短内容。**肥胖**由**体重指数 (BMI)** 定义——**体重(kg) 除以身高(m) 的平方**——**25 到 30 为超重、超过 30 为肥胖、超过 40 为重度肥胖**，而**美国成年人中已有超过 40% 属于肥胖**。本节建立在**瘦素 (leptin)** 这一机制上。「**脂肪组织产生瘦素，这种激素调节摄食行为和能量消耗，以维持足够的脂肪储备**」（A p.875），而**它的产生和释放随脂肪细胞的数量和大小而增加**——**所以这个信号报告的正是仓库的大小**。瘦素受体由 **DB 基因**编码，主要表达在**下丘脑弓状核**的神经元上；瘦素传递的消息是「**储备已经足够**」，从而**减少摄入、增加消耗**，同时它还**兴奋交感神经系统**。真正做算术的是**两群神经分泌细胞**：**厌食性 (anorexigenic)** 细胞释放抑制食欲的肽，其中包括 **α-MSH**；**促食性 (orexigenic)** 细胞释放 **NPY**；**两类互相抑制**，而胃分泌的**胃饥饿素 (ghrelin)** 激活 NPY 细胞，结肠释放的 **PYY₃₋₃₆** 则抑制它们。第二个脂肪因子是**脂联素 (adiponectin)**，它「**促进脂肪酸的摄取与氧化，抑制脂肪酸合成**」，并**使肌肉和肝脏对胰岛素更敏感**，其作用**大部分通过 AMP 激活的蛋白激酶 (AMPK)** 实现——**正是感受 AMP/ATP 比值、运动同样能激活的那个传感器**，而且它**通过在脑内的作用影响整个动物的代谢**。本节以更多输入收尾：**mTORC1** 把蛋白质合成与营养供应挂钩、**PPAR** 作为「烧脂肪」基因的转录调节因子、**内源性大麻素 (endocannabinoids)**，以及经由**益生菌与益生元**起作用的**肠道菌群**。"
    }
  },
  {
    id: "L-23-5-1",
    book: "lehninger",
    topicKey: "diabetes-mellitus",
    chapter: 23,
    section: "23.5",
    czTitle: "Žádná — diabetes mellitus (23.5): dvě různé nemoci pod jedním jménem",
    enTitle: "Diabetes mellitus — a brief orientation: two different diseases under one name, and why the ketone bodies your Czech textbook already taught are the acute danger",
    cnTitle: "糖尿病——只作科普性了解：一个名字底下的两种不同的病，以及捷克书已经讲过的酮体为什么才是急性危险",
    pages: [875, 876, 877, 878, 879],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 23.5 read end to end, A printed pp.875-879: the heading and 'Diabetes mellitus is a relatively common disease' are on printed p.875, SUMMARY 23.5 on printed p.879. ⚠️ `lehninger_only_scope.tsv` marks 23.5 `brief` AND ITS RANGE IS WRONG AT THE END: it says 875-880, but printed p.880 is the Chapter Review page carrying the key-term index and PROBLEMS, not section content. Czech coverage measured with word-boundary matching before writing: ketoacid 0, glykovan 0, inzulin 0, cukrovk 1. `diabet` scores 13 and EVERY hit is diabetes as a cause of something else -- 8 in Czech 8-4-4-3 and 5 in 10-8, naming it as a condition that floods the cell with acetyl-CoA and produces ketone bodies. So the Czech layer has the consequence and nothing about the disease. ⚠️ The Lehninger layer needed checking too, because `diabetes` scores 17 in L-23-3-1: that node's own coverageNote states diabetes is named there 'only where section 23.3 itself names it, as the disease behind the sulfonylurea drugs and the neonatal Kir6.2 mutations -- the full treatment of diabetes is elsewhere in the book and is not covered'. topicKey is a NEW single-book key, `diabetes-mellitus`. It was deliberately NOT merged into `fatty-acid-oxidation`, which holds Czech 8-4-4-3 and 10-8: that key is beta-oxidation and ketone bodies, and filing a disease under it to manufacture a cross-book link would misfile the subject. The connection is made in prose instead, by naming those nodes. NOT COVERED: the autoimmune aetiology of type 1 in any depth, insulin pharmacology beyond Box 23-2's existence, and the full drug table.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；糖尿病分型、糖耐量试验与酮症酸中毒是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "Type 1 and type 2 fail at opposite ends of the same axis. Type 1 (IDDM) is not enough insulin — the β cells are gone. Type 2 (NIDDM) is enough insulin that the tissues no longer answer; its hallmark is insulin RESISTANCE, so more insulin is needed to produce the same effect. That is why the two need different treatments and why type 2 tracks obesity. The acute danger is the one the Czech book already taught you from the other side: ketone bodies are carboxylic acids, and in uncontrolled diabetes their production can overwhelm the blood's bicarbonate buffer, giving acidosis — with ketosis, ketoacidosis, which is potentially fatal.",
      cn: "**1 型和 2 型是在同一条轴的两端坏掉的。** **1 型（IDDM，胰岛素依赖型）**是**胰岛素不够**——**β 细胞没了**。**2 型（NIDDM，非胰岛素依赖型）**是**胰岛素够，但组织不再理它**；它的标志是**胰岛素抵抗 (insulin resistance)**，即**需要更多胰岛素才能产生同样的效果**。⚠️ **这就是两者治疗不同、以及 2 型为什么跟着肥胖走的原因。** 而**急性危险**正是捷克书已经从另一侧教过你的那件事：**酮体是羧酸**，在**未控制的糖尿病**中它们的产生**可以压垮血液的碳酸氢盐缓冲体系**，造成**酸中毒**——**与酮症合起来就是酮症酸中毒 (ketoacidosis)，可能致命。**"
    },
    summary: {
      en: "The chapter's closing section, and the place where several separate threads in this app finally meet. Diabetes mellitus is common — about 9% of the U.S. population, and nearly 25% of those over 65, show some abnormality of glucose metabolism indicating diabetes or a tendency to it — and it comes in two clinical classes: type 1, insulin-dependent diabetes mellitus (IDDM), and type 2, non-insulin-dependent (NIDDM), also called insulin-resistant diabetes. Diagnosis is quantitative: HbA1c, a glucose derivative of haemoglobin that forms in the blood and reflects the AVERAGE blood glucose, is the sensitive criterion, and the glucose-tolerance test confirms it — fast overnight, drink 100 g of glucose, then measure blood glucose every 30 minutes; a healthy person's rises to no more than about 9 or 10 mM with little or no glucose appearing in the urine. The acute biochemistry is the part the Czech layer already half-teaches: Czech 8-4-4-3 and 10-8 present ketone bodies as the overflow product of acetyl-CoA in diabetes, ending in acidosis and coma. This section supplies the missing link in that chain — the ketone bodies are carboxylic acids which ionise and release protons, and in uncontrolled diabetes this acid production “can overwhelm the capacity of the blood's bicarbonate buffering system”, producing acidosis or, with ketosis, ketoacidosis. Type 2 is a different failure: “The hallmark of type 2 diabetes is the development of insulin resistance”, a state in which more insulin is required for the same effect, and it is rising with obesity in the industrialised world. Metabolic syndrome — “which includes obesity, hypertension, elevated blood lipids, and insulin resistance” (A p.879) — is often the prelude. The treatment table is a good map of everything in this chapter: weight loss and bariatric surgery; sulfonylureas closing the β-cell K+ channel to force insulin secretion; metformin acting through AMPK; thiazolidinediones through PPARγ; GLP-1 modulators. IN THE BOOK'S OWN WORDS: “about 9% of the U.S. population, and nearly 25% of the U.S. population over the age of 65, show some degree” (A p.875); “Type 1 diabetes requires both insulin therapy and careful, lifelong control of the balance between dietary intake, activity” (A p.876); “A sensitive diagnostic criterion is the level of HbAlc, a glucose derivative of hemoglobin, which forms in the blood” (A p.877); “Although 80% of people with type 2 diabetes are obese, most obese individuals do not develop type 2 diabetes” (A p.878).",
      cn: "本章的收尾一节，也是这个 app 里好几条独立线索最终交汇的地方。**糖尿病很常见**——**约 9% 的美国人口**，**65 岁以上人群中近 25%**，表现出提示糖尿病或糖尿病倾向的糖代谢异常——而它分为**两个临床类型**：**1 型，胰岛素依赖型糖尿病 (IDDM)**，和 **2 型，非胰岛素依赖型 (NIDDM)**，又称**胰岛素抵抗型糖尿病**。诊断是**定量的**：**HbA1c**——**血液中形成的血红蛋白葡萄糖衍生物**，反映的是**平均血糖水平**——是敏感的判断标准；**糖耐量试验**用来确认：**过夜禁食，喝下 100 g 葡萄糖**，其后**每 30 分钟测一次血糖**；**健康人**的血糖**升高不超过约 9–10 mM**，**尿中几乎不出现葡萄糖**。急性期的生化正是捷克书已经讲了一半的那部分：捷克节点 `8-4-4-3` 和 `10-8` 把**酮体**呈现为糖尿病中**乙酰辅酶 A 泛滥的溢出产物**，终点是**酸中毒和昏迷**。⚠️ **本节补上的正是那条链条中间缺掉的一环**——**酮体是羧酸，会电离并释放质子**，在未控制的糖尿病中，这种产酸「**可以压垮血液碳酸氢盐缓冲体系的容量**」，从而造成**酸中毒**，或与**酮症**合起来成为**酮症酸中毒**。**2 型是另一种失败**：「**2 型糖尿病的标志是胰岛素抵抗的形成**」，即**需要更多胰岛素才能达到同样效果**的状态，而它在工业化国家正随**肥胖**一起上升。**代谢综合征**——「**包括肥胖、高血压、血脂升高和胰岛素抵抗**」（A p.879）——**往往是它的前奏**。那张治疗表本身就是本章内容的一张好地图：**减重**与**减重手术**；**磺脲类**通过**关闭 β 细胞的 K⁺ 通道**强制胰岛素分泌（⚠️ 正是 `L-23-3-1` 里那个通道）；**二甲双胍**经由 **AMPK**（⚠️ 正是 `L-23-4-1` 里脂联素用的那个激酶）；**噻唑烷二酮类**经由 **PPARγ**；以及 **GLP-1 调节剂**。"
    }
  }
]);
