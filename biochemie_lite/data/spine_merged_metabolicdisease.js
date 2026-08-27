/* Merged topic spines — metabolic disease. 速通简洁版.

     key:obesity-and-body-mass    L-23-4-1
     key:diabetes-mellitus        L-23-5-1

   Both nodes carry ONE member each, a Lehninger one, and there is no Czech partner
   node to fold in. So this is not a synthesis of two accounts: it is a conversion of
   one. The substance, the numbers and every `src` come from the source spine and from
   nowhere else — Lehninger chapter 23 is not extracted in this repo, so nothing here
   was checked against a second reading, and nothing was added from memory.

   Both nodes are marked 只作科普性了解 in the node list. That is the reader's own scope
   decision, so these chains stay the length the source already had — eleven steps and
   ten — and are not padded out into full treatments of obesity or of diabetes.

   `src` letter "A" is Lehninger 8, cited by its own page numbers. A step never carries
   a page it was not read from.

   House style is SPINE_SPEC.md: one claim per step, every noun introduced where it is
   first used, every structural claim followed by its consequence, and exactly ONE `**`
   run per `en` and per `cn` — the app has a compact mode that shows only the bolded
   run, so each one must read as a complete statement with everything else hidden. */
window.BIOLITE_SPINE = window.BIOLITE_SPINE || {};

/* ================================================== obesity and body mass ==== */
window.BIOLITE_SPINE["key:obesity-and-body-mass"] = {
  assumed: ["atp", "amp", "adp", "hormone", "receptor", "neuron", "brain", "hypothalamus",
            "peptide", "protein", "enzyme", "gene", "cell", "blood", "insulin",
            "adipose tissue", "adipocyte", "fatty acid", "triacylglycerol", "lipid",
            "glucose", "glycogen", "muscle", "liver", "colon", "stomach", "intestine",
            "phosphorylation", "phosphorylated", "tyrosine", "transcription",
            "protein synthesis", "sympathetic nervous system", "nervous system",
            "kinase", "protein kinase", "obesity", "overweight", "appetite", "exercise",
            "gut microbiome", "microbiome", "microorganism", "probiotic", "probiotics",
            "prebiotic", "prebiotics", "body mass index", "energy expenditure",
            "endocrine", "endocrine organ", "dimer", "monomer", "docking site",
            "neurosecretory cell", "anorexigenic", "orexigenic", "alpha-msh",
            "neuropeptide y", "prader-willi syndrome", "mtorc1", "ppar", "ppar-delta",
            "endocannabinoid", "endocannabinoids", "nutrient", "oxidation",
            "fatty acid oxidation", "fatty acid synthesis", "lipid synthesis",
            "metabolism", "energy status", "heart rate", "set point", "fuel"],
  nodeTitle_en: "Obesity and the regulation of body mass",
  nodeTitle_cn: "肥胖与体重的调节",
  title_en: "A brief orientation: adipose tissue reports how full it is, which is why body mass behaves like a defended set point rather than an accumulating balance",
  title_cn: "只作科普性了解：脂肪组织会汇报自己有多满 —— 这就是体重表现得像一个被守卫的调定点、而非一本流水账的原因",
  terms: [
    { en: "leptin", cn: "瘦素",
      def_en: "A hormone made by adipose tissue that regulates feeding behaviour and energy expenditure so as to maintain adequate fat reserves. Production and release rise with the number and size of adipocytes, so the blood level reports the size of the store. Its receptor, encoded by the db gene, sits mainly on neurons of the hypothalamic arcuate nucleus; the message it carries is that reserves are sufficient — eat less, spend more.",
      def_cn: "脂肪组织制造的一种激素，调节进食行为与能量消耗，以维持足够的脂肪储备。它的产生与释放随脂肪细胞的数量和体积而上升，所以血中的水平就是一份关于库存大小的报告。它的受体由 db 基因编码，主要位于下丘脑弓状核的神经元上；它带去的消息是「储备够了」—— 少吃，多花。" },
    { en: "arcuate nucleus", cn: "弓状核",
      def_en: "A small region at the base of the brain, in the hypothalamus, holding the two neuron populations that set appetite: anorexigenic cells releasing appetite-suppressing peptides such as alpha-MSH, and orexigenic cells releasing the appetite-stimulating peptide NPY. Each inhibits the other, so any stimulus that turns one on turns the other off.",
      def_cn: "脑底部、下丘脑里的一个小区域，里面装着决定食欲的两群神经元：厌食性细胞释放抑制食欲的肽（如 α-MSH），促食性细胞释放刺激食欲的肽 NPY。两者互相抑制，所以任何打开其中一群的刺激，同时就关掉了另一群。" },
    { en: "ghrelin and PYY3-36", cn: "胃饥饿素与 PYY3-36",
      def_en: "The two short-term signals from the digestive tract that push on the same pair of neuron populations leptin acts on. Ghrelin from the stomach activates the NPY cells and stimulates appetite; PYY3-36 from the colon inhibits them and reduces it. Blood ghrelin is raised in Prader-Willi syndrome, whose hunger is unrelenting.",
      def_cn: "来自消化道的两个短期信号，推的正是瘦素所作用的那一对神经元群。胃来的胃饥饿素激活 NPY 细胞、刺激食欲；结肠来的 PYY3-36 抑制它们、降低食欲。普拉德–威利综合征患者血中的胃饥饿素升高，而他们的饥饿感永不缓解。" },
    { en: "adiponectin", cn: "脂联素",
      def_en: "The second hormone made by adipose tissue. It stimulates fatty acid uptake and oxidation, inhibits fatty acid synthesis, and sensitises muscle and liver to insulin, acting largely through AMP-activated protein kinase. Where leptin changes how much is eaten, adiponectin changes what the tissues do with it.",
      def_cn: "脂肪组织制造的第二种激素。它促进脂肪酸的摄取与氧化、抑制脂肪酸合成，并使肌肉和肝脏对胰岛素更敏感，主要通过 AMP 激活的蛋白激酶起作用。瘦素改变的是「吃多少」，脂联素改变的是「组织拿它做什么」。" },
    { en: "AMP-activated protein kinase", cn: "AMP 激活的蛋白激酶 AMPK",
      def_en: "The cell's energy sensor. It responds to the ratio of AMP to ATP: spending ATP makes ADP and AMP, so a rising ratio states chemically that the cell is running short. When it senses that, lipid synthesis is inhibited and the use of lipid as fuel is stimulated. Exercise switches on the same sensor, and through its actions in the brain it affects the metabolism of the whole animal.",
      def_cn: "细胞的能量传感器。它对 AMP 与 ATP 的比值作出反应：花掉 ATP 会生成 ADP 和 AMP，所以比值上升就是一句化学陈述 —— 这个细胞不够用了。它感知到之后，脂质合成被抑制，把脂质当燃料用被促进。运动打开的是同一个传感器；通过它在脑内的作用，它影响的是整只动物的代谢。" }
  ],
  steps: [
    {
      en: "Obesity is measured by one number, the body mass index: weight in kilograms divided by height in metres squared. **A body mass index of 25 to 30 is overweight, over 30 is obese, over 40 is severely obese, and more than 40% of U.S. adults now sit in the obese range.** A number that simple invites the reading that body mass is an accumulating balance, what came in minus what went out. This chain is a short orientation to why it behaves instead like a quantity the body actively defends.",
      cn: "肥胖用一个数字来量，即体重指数（body mass index，BMI）：体重公斤数除以身高米数的平方。**BMI 25–30 为超重，超过 30 为肥胖，超过 40 为重度肥胖；目前美国成年人中有 40% 以上落在肥胖区间。**这么简单的一个数字，容易让人把体重读成一本流水账 —— 进来的减去出去的。这条线索只作一份简短的入门：讲它为什么反而表现得像一个被身体主动守卫的量。",
      src: "A p.867"
    },
    {
      link_en: "the mechanism starts with a hormone the fat tissue makes about itself",
      link_cn: "机制的起点，是脂肪组织为自己造的一种激素",
      recall_en: "the store being reported on is the triacylglycerol of adipose tissue, which holds more than twice the energy per gram that glycogen does",
      recall_cn: "被汇报的那份库存，就是脂肪组织里的三酰甘油 —— 每克装的能量是糖原的两倍以上",
      en: "Adipose tissue produces leptin, a hormone that regulates feeding behaviour and energy expenditure so as to keep the reserves of fat adequate. What matters is what sets how much of it is made. **Leptin production rises with the number and the size of the adipocytes, so the leptin concentration in the blood is a running report on how large the fat store is.** Adipose tissue is on that account an endocrine organ whose output states how full it is.",
      cn: "脂肪组织产生瘦素（leptin），这是一种调节进食行为与能量消耗、以维持足够脂肪储备的激素。要紧的是「造多少」由什么决定：**瘦素的产生与释放随脂肪细胞数量和体积的增加而增加，所以血中瘦素的浓度就是一份关于「脂肪库存有多大」的实时报告。**因此脂肪组织是一个内分泌器官，它的输出说明的正是自己有多满。",
      src: "A p.867, p.875",
      see: [{ id: "L-23-2-1", en: "which organ burns which fuel, at rest and on the fourth day without food", cn: "哪个器官在烧哪种燃料 —— 静息时，以及断食第四天" }]
    },
    {
      link_en: "and the message that report carries is short",
      link_cn: "而这份报告携带的消息很短",
      en: "The leptin receptor is encoded by a gene called db and is expressed mainly on neurons of the arcuate nucleus, a small region at the base of the hypothalamus. **Leptin arriving at the arcuate nucleus carries a single message — reserves are sufficient — and the answer to it is less food eaten and more energy spent.** Leptin also stimulates the sympathetic nervous system, the branch that raises heart rate and mobilises fuel, so the size of the fat store is measured, reported, and then charged to both sides of the ledger.",
      cn: "瘦素受体由一个叫 db 的基因编码，主要表达在弓状核（arcuate nucleus，下丘脑底部的一个小区域）的神经元上。**抵达那里的瘦素只带一条消息 —— 储备够了 —— 而对它的回答是：减少进食，同时增加能量消耗。**瘦素还刺激交感神经系统，即提高心率、动员燃料的那一支；于是脂肪库存的大小被测量、被汇报，随后同时记到账本的两边。",
      src: "A p.867–869"
    },
    {
      link_en: "how does a hormone level in blood become a change in appetite? This receptor works the way a growth-factor receptor does",
      link_cn: "血液里的一个激素浓度，怎么变成食欲的改变？这个受体的工作方式与生长因子受体相同",
      en: "**Leptin binds two receptor monomers, they come together as a dimer, and several of their tyrosine residues are phosphorylated into docking sites that carry the signal into the cell.** A hormone concentration in the blood becomes by that route a change in which genes a hypothalamic neuron transcribes.",
      cn: "**瘦素结合两个受体单体，两者聚成一个二聚体，它们的若干酪氨酸残基被磷酸化，成为把信号往细胞内传下去的停靠位点。**血液中的一个激素浓度，就这样变成了下丘脑神经元转录哪些基因的改变。",
      src: "A p.869",
      see: [{ id: "L-12-1-1", en: "receptor dimerisation and phosphotyrosine docking in full", cn: "受体二聚化与磷酸酪氨酸停靠的完整机制" }]
    },
    {
      link_en: "and the neurons receiving that signal are wired as a push-pull pair, which is the part with a consequence",
      link_cn: "而接收这个信号的神经元排成一对「推–拉」结构 —— 这才是有后果的那部分",
      en: "Two populations of neurosecretory cells sit in the arcuate nucleus: anorexigenic cells, which release appetite-suppressing peptides such as alpha-MSH, and orexigenic cells, which release the appetite-stimulating peptide NPY. Each population inhibits the other. **Any stimulus that switches the anorexigenic cells on switches the orexigenic cells off, so appetite moves as a single quantity rather than as two independent pushes.**",
      cn: "弓状核里坐着两群神经分泌细胞：厌食性（anorexigenic）细胞释放抑制食欲的肽，其中包括 α-MSH；促食性（orexigenic）细胞释放刺激食欲的肽 NPY。两群互相抑制。**任何让其中一群兴奋起来的刺激，同时就把另一群关掉了 —— 于是食欲是作为一个整体的量在移动，而不是两股各自独立的推力。**",
      src: "A p.869–870"
    },
    {
      link_en: "and two hormones from the digestive tract push on that same pair",
      link_cn: "而消化道来的两种激素，推的正是同一对细胞",
      recall_en: "the same two cell populations as the step above, now with the gut pushing on them",
      recall_cn: "还是上一步那两群细胞 —— 现在换成消化道在推它们",
      en: "Ghrelin, released by the stomach, activates the NPY cells and so stimulates appetite; PYY3-36, released by the colon, inhibits them and so reduces it. **Ghrelin and PYY3-36 act on the same neuron pair leptin acts on, so a long-term report on the fat store and a short-term report on the gut become one decision.** People with Prader-Willi syndrome, whose hunger is famously unrelenting, have raised blood levels of ghrelin.",
      cn: "胃释放的胃饥饿素（ghrelin）激活 NPY 细胞，从而刺激食欲；结肠释放的 PYY3-36 抑制它们，从而降低食欲。**胃饥饿素与 PYY3-36 作用的正是瘦素所作用的那一对「推–拉」细胞，于是关于脂肪库存大小的长期报告，与关于消化道里此刻有什么的短期报告，合成了一个决定。**普拉德–威利综合征（Prader-Willi syndrome）患者以饥饿感永不缓解著称，而他们血中的胃饥饿素水平是升高的。",
      src: "A p.873"
    },
    {
      link_en: "adipose tissue reports a second time, and this hormone acts on metabolism rather than on appetite",
      link_cn: "脂肪组织汇报了第二次，而这种激素作用于代谢而不是食欲",
      en: "The second hormone made by adipose tissue is adiponectin. **Adiponectin sensitises muscle and liver to insulin and promotes fatty acid oxidation: leptin sets how much is eaten, adiponectin what the tissues do with it.** It also promotes fatty acid uptake and inhibits fatty acid synthesis.",
      cn: "脂肪组织造的第二种激素是脂联素（adiponectin）。**脂联素促进脂肪酸的摄取与氧化、抑制脂肪酸合成，并使肌肉和肝脏对胰岛素更敏感 —— 瘦素决定「吃多少」，脂联素决定「送到的东西被拿来做什么」。**",
      src: "A p.870"
    },
    {
      link_en: "and it acts largely through one enzyme worth knowing in its own right",
      link_cn: "而它主要通过一个本身就值得单独认识的酶起作用",
      en: "Adiponectin acts largely through AMP-activated protein kinase, AMPK, which reads a cell's energy status off the ratio of AMP to ATP. Spending ATP produces ADP and AMP, so a rising AMP/ATP ratio is a direct chemical statement that this cell is running short. **When AMPK senses the AMP/ATP ratio rising, lipid synthesis is inhibited and the burning of lipid as fuel is stimulated, and exercise switches on the same sensor.** Through its actions in the brain, AMPK affects the metabolism of the whole animal and not only the cell it sits in.",
      cn: "脂联素主要通过 AMP 激活的蛋白激酶（AMPK）起作用；AMPK 从 AMP 与 ATP 的比值上读出一个细胞的能量状态。花掉 ATP 会产生 ADP 和 AMP，所以 AMP/ATP 比值升高，就是一句直接的化学陈述：这个细胞不够用了。**AMPK 一旦感知到这个比值在升高，脂质合成就被抑制，把脂质当燃料烧则被促进 —— 停止建造，开始燃烧；运动打开的是同一个传感器。**通过它在脑内的作用，AMPK 影响的是整只动物的代谢，不只是它所在的那个细胞。",
      src: "A p.870–871"
    },
    {
      link_en: "three further inputs, each named for what it ties body mass to",
      link_cn: "还有三个输入，每一个都以「它把体重系在什么上」得名",
      en: "Three further inputs act on the same balance. mTORC1 is a protein complex that ties protein synthesis to nutrient availability, so a cell builds protein only when the raw material is there. PPARs are transcriptional regulators of fat burning, and one of them, PPAR-delta, is a key regulator of fat oxidation that responds to changes in dietary lipid. **What is eaten alters which fat-oxidation enzymes a cell makes, and endocannabinoids — signalling lipids the body makes itself — are a further input to appetite.**",
      cn: "还有三个输入作用在同一本账上。mTORC1 是一个把蛋白质合成与营养供给绑在一起的蛋白复合物 —— 只有原料到位时，细胞才建造蛋白质。PPAR 家族是脂肪燃烧的转录调控因子，其中的 PPAR-δ 是脂肪氧化的关键调节者，并对膳食脂质的变化作出反应。**所以吃进什么会改变细胞造哪些脂肪氧化的酶；而内源性大麻素（endocannabinoids，身体自己制造的信号脂质）是食欲的又一个输入。**",
      src: "A p.872"
    },
    {
      link_en: "and one input is not the body's own tissue at all",
      link_cn: "还有一个输入，根本不属于身体自己的组织",
      en: "The gut microbiome is the population of microorganisms living in the intestine, and it influences body mass as well. **Probiotics are microbial species added directly to the gut that disfavour the laying down of fat, and prebiotics are the food supplied to encourage those species to grow.** The microbiome belongs in this chain because it is one more thing the arithmetic of calories in and calories out does not capture.",
      cn: "肠道微生物组（gut microbiome）就是生活在肠道里的那群微生物，它同样影响体重。**益生菌（probiotics）是直接加进肠道、不利于脂肪沉积的微生物种类；益生元（prebiotics）则是为鼓励这些微生物生长而供给的食物。**微生物组之所以属于这条线索，是因为它又是一件「摄入卡路里减去消耗卡路里」这道算术题算不进去的东西。",
      src: "A p.874"
    },
    {
      link_en: "so what does the whole arrangement add up to?",
      link_cn: "那么这一整套安排加起来是什么？",
      recall_en: "the set point named in the first step, now with every input in it named too",
      recall_cn: "第一步提出的那个调定点 —— 现在它的每一个输入也都有了名字",
      en: "**Body mass is defended rather than accumulated: leptin measures the store, the arcuate neurons set appetite, ghrelin and PYY3-36 correct it hourly, adiponectin acts through AMPK.** That is why losing weight by eating less is fought back against — a falling store means falling leptin, and the answer to falling leptin is more appetite and less expenditure.",
      cn: "**体重是一个被守卫的量：瘦素测量库存，弓状核的神经元控制食欲，胃饥饿素与 PYY3-36 按小时作短期修正，脂联素经 AMPK 走代谢那条支路。**身体守卫它，而不是听任它累加 —— 这就是为什么「少吃减重」会遭到反击：库存下降意味着瘦素下降，而对瘦素下降的回答是更饿、更省。",
      src: "A p.867–875"
    }
  ]
};

/* ======================================================= diabetes mellitus ==== */
window.BIOLITE_SPINE["key:diabetes-mellitus"] = {
  assumed: ["glucose", "blood glucose", "insulin", "hormone", "receptor", "protein",
            "enzyme", "cell", "blood", "urine", "hemoglobin", "haemoglobin", "pancreas",
            "beta cell", "liver", "muscle", "adipose tissue", "brain", "fatty acid",
            "acetyl-coa", "citric acid cycle", "ketone body", "ketone bodies", "ketosis",
            "carboxylic acid", "proton", "buffer", "bicarbonate", "ph", "acidosis",
            "gluconeogenesis", "obesity", "obese", "hypertension", "blood lipids",
            "amp-activated protein kinase", "protein kinase", "kinase", "ppar",
            "ppar-gamma", "potassium", "potassium channel", "ion channel", "exocytosis",
            "glut4", "kidney", "coma", "autoimmune", "antibody", "fasting", "diet",
            "metabolism", "oxidation", "sulfonylurea", "sulfonylureas", "metformin",
            "thiazolidinedione", "thiazolidinediones", "glp-1", "bariatric surgery",
            "gut", "meal", "secretion", "insulin secretion", "insulin therapy", "atp"],
  nodeTitle_en: "Diabetes mellitus",
  nodeTitle_cn: "糖尿病",
  title_en: "A brief orientation: two different diseases under one name, failing at opposite ends of the same axis, with an acid rather than the sugar as the acute danger",
  title_cn: "只作科普性了解：一个名字底下的两种不同的病 —— 在同一条轴的两端坏掉 —— 而急性危险来自一种酸，不是糖",
  terms: [
    { en: "type 1 and type 2 diabetes", cn: "1 型与 2 型糖尿病",
      def_en: "Two failures at opposite ends of one axis. Type 1 (insulin-dependent) is not enough insulin, the beta cells that make it having been lost; it requires insulin therapy plus lifelong control of intake against activity. Type 2 (non-insulin-dependent) is enough insulin that the tissues no longer answer; its hallmark is insulin resistance, and it tracks obesity — 80% of people with it are obese, though most obese people never develop it.",
      def_cn: "同一条轴两端的两种失效。1 型（胰岛素依赖型）是胰岛素不够 —— 制造它的 β 细胞没了；治疗需要外源胰岛素，外加终身把摄入与活动量对住。2 型（非胰岛素依赖型）是胰岛素够，而组织不再理它；标志是胰岛素抵抗，并随肥胖上升 —— 患者中 80% 是肥胖的，但大多数肥胖者并不会得它。" },
    { en: "insulin resistance", cn: "胰岛素抵抗",
      def_en: "A state in which more insulin is needed to produce the same effect. It is what makes type 2 diabetes look different on a blood test from type 1: insulin can be normal or high while glucose is high too.",
      def_cn: "需要更多的胰岛素才能产生同样效果的状态。它就是 2 型糖尿病在化验单上与 1 型长得不一样的原因：胰岛素可以正常甚至偏高，而血糖同时也高。" },
    { en: "HbA1c", cn: "糖化血红蛋白 HbA1c",
      def_en: "A glucose derivative of haemoglobin that forms in the blood, and the sensitive diagnostic criterion for diabetes. It accumulates, so unlike a blood glucose reading — which is a snapshot — it reflects the average blood glucose over a long period: one measurement reports on weeks.",
      def_cn: "在血液中形成的血红蛋白葡萄糖衍生物，也是糖尿病敏感的诊断指标。它会累积，所以与只是一张快照的血糖读数不同，它反映的是较长时期内血糖的平均值：一次测量报告的是好几周。" },
    { en: "glucose-tolerance test", cn: "葡萄糖耐量试验",
      def_en: "The confirming test: fast overnight, drink 100 g of glucose, then measure blood glucose every 30 minutes. A healthy person's rises to no more than about 9 to 10 mM, with little or no glucose appearing in the urine. It asks not what the blood glucose is but how fast the system can put a known load away.",
      def_cn: "用来确诊的检查：隔夜禁食，喝下 100 g 葡萄糖，然后每 30 分钟测一次血糖。健康人最高升到约 9–10 mM，尿中几乎没有或完全没有葡萄糖。它问的不是「血糖是多少」，而是「这套系统把一份已知的负荷收走要多快」。" },
    { en: "ketoacidosis", cn: "酮症酸中毒",
      def_en: "The acute danger of uncontrolled diabetes, and the link is chemical rather than merely metabolic. Ketone bodies are carboxylic acids: they ionise in the blood and release protons. When their production overwhelms the capacity of the blood's bicarbonate buffering system, the pH falls — acidosis — and together with the ketosis this is ketoacidosis, which is potentially fatal.",
      def_cn: "未控制糖尿病的急性危险，而这一环是化学的、不只是代谢的。酮体是羧酸：它们在血中电离、放出质子。当它们的产生量压垮血液碳酸氢盐缓冲体系的容量时，pH 下降 —— 这就是酸中毒 —— 与酮症合在一起即酮症酸中毒，可能致命。" },
    { en: "metabolic syndrome", cn: "代谢综合征",
      def_en: "The frequent prelude to type 2 diabetes, and a cluster rather than a single defect: obesity, hypertension, elevated blood lipids and insulin resistance together. Naming the cluster says that the four travel as a set rather than arriving independently.",
      def_cn: "常常是 2 型糖尿病的前奏，而且是一组表现、不是单一缺陷：肥胖、高血压、血脂升高、胰岛素抵抗同时出现。给这一组命名，说的就是这四样结伴而行、而不是各自独立到来。" }
  ],
  steps: [
    {
      en: "Diabetes mellitus is a disturbance of glucose metabolism, and it is common enough that the numbers are worth carrying. **About 9% of the U.S. population, and nearly 25% of those over 65, show some abnormality in the handling of glucose, indicating diabetes or a tendency towards it.** It comes in two clinical classes, and this chain is a short orientation to why those two are different diseases sharing one name.",
      cn: "糖尿病是葡萄糖代谢的紊乱，而且常见到数字本身就值得记住。**美国人口中约 9%，65 岁以上人群中将近 25%，在处理葡萄糖这件事上表现出某种异常，提示糖尿病或糖尿病倾向。**它分成两个临床类别；这条线索只作一份简短的入门：讲这两类为什么是共用一个名字的两种不同的病。",
      src: "A p.875"
    },
    {
      link_en: "and the two classes fail at opposite ends of one axis",
      link_cn: "而这两类是在同一条轴的两端坏掉的",
      en: "Type 1 is also called insulin-dependent diabetes mellitus, and type 2 non-insulin-dependent diabetes mellitus. **Type 1 diabetes is a shortage of insulin, the pancreatic beta cells that make it having been lost; type 2 diabetes is insulin in adequate supply that the tissues no longer answer.** One end of that axis is a failure of supply and the other a failure of response, which is why the two need different treatments.",
      cn: "1 型又叫胰岛素依赖型糖尿病（IDDM），2 型又叫非胰岛素依赖型糖尿病（NIDDM）。**1 型是胰岛素不够 —— 胰腺里制造它的 β 细胞没了；2 型是胰岛素够用，只是组织不再理会它。**这条轴的一端是供给失效，另一端是响应失效 —— 这正是两者治疗方式不同的原因。",
      src: "A p.875–876"
    },
    {
      link_en: "the second of those two has a name worth stating precisely",
      link_cn: "其中第二种的名称值得说得精确一些",
      en: "The hallmark of type 2 diabetes is insulin resistance. **Insulin resistance is a state in which more insulin is needed for the same effect, so a blood test can show insulin normal or high while glucose is high too — the opposite of type 1.** In the industrialised world type 2 tracks obesity, and the relationship has to be stated in both directions: 80% of people with type 2 diabetes are obese, and most obese people never develop type 2 diabetes.",
      cn: "2 型糖尿病的标志是胰岛素抵抗。**胰岛素抵抗是指需要更多的胰岛素才能产生同样的效果，所以化验单上可以看到胰岛素正常甚至偏高、而血糖同时也高 —— 这与 1 型正好相反。**在工业化国家，2 型随肥胖上升，但这个关系必须两个方向都说清楚：2 型糖尿病患者中有 80% 是肥胖的，而大多数肥胖者并不会发展成 2 型糖尿病。",
      src: "A p.876, p.878",
      see: [{ id: "L-23-4-1", en: "the fat store that type 2 tracks, and how the body defends its size", cn: "2 型跟着走的那个脂肪库存，以及身体怎样守卫它的大小" }]
    },
    {
      link_en: "and what usually comes before type 2 has its own name",
      link_cn: "而通常先于 2 型出现的那个状态，也有自己的名字",
      en: "**Metabolic syndrome is the frequent prelude to type 2 diabetes, and it is a cluster rather than one defect: obesity, hypertension, high blood lipids and insulin resistance together.** Naming that cluster matters because it says the four travel as a set instead of arriving independently.",
      cn: "**代谢综合征（metabolic syndrome）常常是 2 型糖尿病的前奏，而它是一组表现、不是单一缺陷：肥胖、高血压、血脂升高、胰岛素抵抗，四样一起出现。**给这一组命名之所以重要，是因为它说明这四样结伴而行，而不是各自独立地到来。",
      src: "A p.879"
    },
    {
      link_en: "how the diagnosis is actually made, and it is quantitative",
      link_cn: "诊断实际上是怎么做的 —— 而且是定量的",
      en: "The sensitive criterion is HbA1c, a glucose derivative of haemoglobin that forms in the blood. **A blood glucose reading is a snapshot, while HbA1c accumulates and reflects the average blood glucose over a long period: one measurement reports on weeks, not on this morning.**",
      cn: "敏感的诊断指标是 HbA1c（糖化血红蛋白），一种在血液中形成的血红蛋白葡萄糖衍生物。**一次血糖读数只是一张快照，而 HbA1c 会累积，因而反映的是较长时期内血糖的平均值：一次测量报告的是好几周，而不是今天早上。**",
      src: "A p.877"
    },
    {
      link_en: "and the confirming test is a controlled challenge",
      link_cn: "而确诊的检查，是一次受控的负荷试验",
      en: "**A glucose-tolerance test confirms the diagnosis: fast overnight, drink 100 g of glucose, then measure blood glucose every 30 minutes, peaking in a healthy person at 9 or 10 mM.** Little or no glucose appears in a healthy person's urine either. The design of that test is worth noticing: it measures how fast the system can put a known load away, rather than what the blood glucose happens to be at one moment.",
      cn: "**葡萄糖耐量试验用来确诊：隔夜禁食，喝下 100 g 葡萄糖，然后每 30 分钟测一次血糖；健康人的血糖最高只升到约 9–10 mM。**健康人的尿里也几乎没有或完全没有葡萄糖出现。这个设计值得注意：它测的是「这套系统把一份已知的负荷收走要多快」，而不是「此刻血糖是多少」。",
      src: "A p.877"
    },
    {
      link_en: "and now the part that kills, which is an acid and not the sugar",
      link_cn: "接下来是真正会致命的那部分 —— 它是一种酸，不是糖",
      recall_en: "ketone bodies as the liver's overflow route for acetyl-CoA, already met in fatty acid oxidation",
      recall_cn: "酮体是肝脏为乙酰辅酶 A 开的溢流通道 —— 在脂肪酸氧化里已经见过",
      en: "Without insulin restraining it, fat is mobilised and oxidised heavily, acetyl-CoA is produced faster than the citric acid cycle can accept it, and the liver converts the excess into ketone bodies. **Ketone bodies are carboxylic acids: they ionise in the blood and release protons, and in uncontrolled diabetes they can overwhelm the blood's bicarbonate buffering system.** The pH then falls, which is acidosis, and acidosis together with the ketosis is ketoacidosis, which is potentially fatal.",
      cn: "在没有胰岛素约束的情况下，脂肪被大量动员和氧化，乙酰辅酶 A 的产生快过柠檬酸循环所能接受的速度，肝脏把多出来的部分转成酮体。**酮体是羧酸：它们在血液中电离、放出质子；在未控制的糖尿病中，它们的产生量可以压垮血液碳酸氢盐缓冲体系的容量。**pH 随之下降，这就是酸中毒；酸中毒与酮症合在一起就是酮症酸中毒，可能致命。",
      src: "A p.876–877",
      see: [{ id: "L-17-2-1", en: "where ketone bodies come from, and what they are for", cn: "酮体从哪里来、是干什么用的" },
            { id: "8-4-4-3", en: "the fate of acetyl-CoA and the three ketone bodies", cn: "乙酰辅酶 A 的去向与三种酮体" }]
    },
    {
      link_en: "treatment for the first class follows directly from what is missing",
      link_cn: "第一类的治疗，直接由「缺什么」推出",
      en: "Type 1 requires insulin therapy, the missing hormone supplied from outside, together with careful lifelong control of the balance between what is eaten and what is done. **An outside supply of insulin cannot sense blood glucose the way a beta cell does, so the timing and the dose are matched by hand to what is eaten and to the day's activity.**",
      cn: "1 型需要胰岛素治疗，即从体外补上缺失的那个激素，并且需要终身仔细地控制「吃了什么」与「做了什么」之间的平衡。**从外面来的胰岛素无法像 β 细胞那样感知血糖，所以给药的时机和剂量要由人手动去匹配「吃了什么」与「这一天动了多少」。**",
      src: "A p.876"
    },
    {
      link_en: "and the treatments for the second class are a map of mechanisms already met",
      link_cn: "而第二类的各种治疗，是一张「前面已经出现过的机制」的地图",
      recall_en: "AMP-activated protein kinase and PPAR are the same two switches the obesity chain named",
      recall_cn: "AMP 激活的蛋白激酶与 PPAR，正是肥胖那条线索里点过名的同两个开关",
      en: "Weight loss — and in some cases bariatric surgery — comes first, because shrinking the fat store attacks the insulin resistance itself. Each drug class then acts through a mechanism already named. **Sulfonylureas close the beta cell's ATP-gated potassium channel to force insulin secretion, metformin acts through AMP-activated protein kinase, thiazolidinediones through PPAR-gamma.** A further class acts on GLP-1 — a signal released by the gut that amplifies insulin release after a meal. A sulfonylurea does by drug exactly what a rise in glucose would have done.",
      cn: "首选是减重 —— 某些情况下包括减重手术（bariatric surgery）—— 因为缩小脂肪库存正是直接针对胰岛素抵抗本身。随后每一类药物的作用机制在前面都出现过：**磺脲类关闭 β 细胞的 ATP 门控钾通道、强制胰岛素分泌；二甲双胍通过 AMP 激活的蛋白激酶起作用；噻唑烷二酮类通过 PPAR-γ 起作用。**还有一类药物作用于 GLP-1 —— 肠道释放的、在餐后放大胰岛素释放的一个信号。磺脲类用药物做的，正是血糖升高本来会做的那件事。",
      src: "A p.878–879",
      see: [{ id: "L-23-3-1", en: "the four hormones of fuel metabolism, on four timescales", cn: "燃料代谢的四种激素、四种时间尺度" }]
    },
    {
      link_en: "so what is the one thing to hold from all of this?",
      link_cn: "那么从这一切里要握住的一件事是什么？",
      recall_en: "the axis from the second step, with everything else hung on it",
      recall_cn: "第二步那条轴 —— 其余一切都挂在它上面",
      en: "**One name covers a failure of insulin supply and a failure of insulin response, and which end has broken decides the blood test, the treatment, and the part obesity plays.** The acute danger is shared by both: in either type, insulin failing to restrain the flow of fat into ketone bodies turns a fuel into an acid load.",
      cn: "**一个名字底下，一边是胰岛素供给的失效，一边是胰岛素响应的失效；哪一端坏了，就决定了化验单上看到什么、治疗是什么、以及肥胖在故事里占多少。**急性危险是两者共有的：无论哪一型，一旦胰岛素约束不住流向酮体的那股脂肪，一种燃料就变成了一份酸负荷。",
      src: "A p.875–879"
    }
  ]
};
