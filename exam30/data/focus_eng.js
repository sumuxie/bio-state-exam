/* ============================================================
   蛋白质工程 · topics 1–10
   focus1.js was written before protein engineering was added to the
   priority list, so these entries are APPENDED to the existing arrays
   instead of replacing them. Load this file after focus1–3.js.
   ============================================================ */
(function (F) {
  function add(key, items) { (F[key] = F[key] || []).push.apply(F[key], items); }

  add("1a", [
    "#工程 **Directed evolution (Frances Arnold, Nobel 2018) makes enzymes that nature never had**: the transaminase used to manufacture sitagliptin was evolved through ~27 mutations to accept a bulky ketone — an industrial synthesis replaced by an engineered protein. ｜ 定向进化（Frances Arnold，2018 诺奖）造出自然界没有的酶：用于生产西格列汀的转氨酶经约 27 个突变后才接受体积庞大的酮底物——一步工业合成被一个工程蛋白取代。",
    "#工程 **Immobilised enzymes are reusable reagents**: fixed on a carrier they keep working for months and are the basis of biosensors (the glucose electrode) and of continuous industrial reactors. ｜ 固定化酶是可重复使用的试剂：固定在载体上可连续工作数月，是生物传感器（血糖电极）与工业连续反应器的基础。"
  ]);
  add("1b", [
    "#工程 **Duchenne muscular dystrophy is being attacked at the protein level**: exon-skipping oligonucleotides restore the reading frame to make a shortened but functional dystrophin, and **AAV gene therapy delivers a 'micro-dystrophin' designed to fit inside a viral capsid** — a protein deliberately truncated to be deliverable. ｜ 杜氏肌营养不良正在蛋白层面被攻克：外显子跳跃寡核苷酸恢复阅读框以产生较短但有功能的抗肌萎缩蛋白；AAV 基因治疗则递送为塞进病毒衣壳而设计的『微型抗肌萎缩蛋白』——一个被有意截短以便递送的蛋白。",
    "#工程 **Botulinum toxin is a bacterial protease turned into a precision drug** — nanogram doses paralyse one muscle for months in dystonia, spasticity and cosmetics. ｜ 肉毒毒素是被改造成精密药物的细菌蛋白酶——纳克级剂量即可使单块肌肉麻痹数月，用于肌张力障碍、痉挛与美容。"
  ]);
  add("2a", [
    "#工程 **Most vitamins on the shelf are made by engineered microbes**: riboflavin by *Ashbya/Bacillus* fermentation replaced a chemical synthesis, and **vitamin B12 can only be made microbially — no chemical route is practical** (its total synthesis took Woodward 11 years and 100 chemists). ｜ 货架上的多数维生素由工程微生物生产：核黄素改由 *Ashbya*/芽孢杆菌发酵取代化学合成；**维生素 B12 只能靠微生物生产**——化学合成不可行（Woodward 的全合成动用百名化学家、历时 11 年）。",
    "#工程 **Golden rice** carries transplanted β-carotene synthesis genes to prevent vitamin A deficiency — metabolic engineering aimed at a deficiency disease. ｜ 黄金大米导入 β-胡萝卜素合成基因以预防维生素 A 缺乏——针对缺乏症的代谢工程。"
  ]);
  add("2b", [
    "#工程 **The artificial pancreas closes the loop**: a continuous glucose sensor (an implanted enzyme electrode), an algorithm and a pump delivering an engineered rapid analogue — three technologies, all resting on the biochemistry of this topic. ｜ 人工胰腺实现闭环：连续血糖传感器（植入式酶电极）＋算法＋输注工程速效类似物的泵——三项技术都建立在本题的生化之上。",
    "#工程 **Stem-cell-derived β cells are now in clinical trials for type 1 diabetes**, and glucose-responsive ('smart') insulins that release only when glycaemia rises are the next engineering step. ｜ 干细胞来源的 β 细胞已进入 1 型糖尿病临床试验；只有血糖升高时才释放的『智能』葡萄糖响应型胰岛素是下一个工程目标。"
  ]);
  add("3a", [
    "#工程 **The glucose assay in every laboratory is two engineered enzymes in series** — hexokinase plus glucose-6-phosphate dehydrogenase, read as NADPH at 340 nm — which is why enzymology is not only physiology but also methodology. ｜ 每个实验室的血糖测定都是两个工程酶串联：己糖激酶＋葡萄糖-6-磷酸脱氢酶，在 340 nm 读 NADPH——所以酶学既是生理学也是方法学。",
    "#工程 **Engineered yeast ferment glucose to bioethanol at industrial scale**, and metabolic engineers redirect the same pathway to make artemisinin precursors and other drugs in a fermenter. ｜ 工程酵母在工业规模上把葡萄糖发酵成生物乙醇；代谢工程师还把同一条途径改道，在发酵罐里生产青蒿素前体等药物。"
  ]);
  add("3b", [
    "#工程 **Voretigene neparvovec (RPE65 gene therapy) was the first approved gene therapy for an inherited disease in the USA** — an AAV vector delivering a working copy of one enzyme of the visual cycle. ｜ Voretigene neparvovec（RPE65 基因治疗）是美国首个获批用于遗传病的基因治疗——用 AAV 载体递送视觉循环中一个酶的正常拷贝。",
    "#工程 **Optogenetic vision restoration puts a microbial CHANNELRHODOPSIN into surviving retinal ganglion cells**, so a blind eye responds to light again — protein engineering replacing a lost photoreceptor. ｜ 光遗传视觉重建把微生物的**通道视紫红质**导入尚存的视网膜神经节细胞，使失明的眼睛重新感光——用蛋白质工程替代已丧失的感光细胞。"
  ]);
  add("4a", [
    "#工程 **Pompe disease is treated with recombinant acid α-glucosidase, and the newer avalglucosidase carries EXTRA mannose-6-phosphate groups** so that muscle takes it up better — the drug was improved by redesigning its sugars, not its protein sequence. ｜ 庞贝病用重组酸性 α-葡糖苷酶治疗，新一代 avalglucosidase 带有**更多甘露糖-6-磷酸**基团以提高肌肉摄取——改良靠的是重新设计糖链而非蛋白序列。",
    "#工程 **Gene therapy for glycogen storage disease type I (AAV-delivered glucose-6-phosphatase) is in trials** — replacing the one enzyme whose absence causes hypoglycaemia, lactic acidosis and hyperuricaemia. ｜ I 型糖原贮积病的基因治疗（AAV 递送葡萄糖-6-磷酸酶）正在试验中——补上那个缺失后造成低血糖、乳酸酸中毒与高尿酸的酶。"
  ]);
  add("4b", [
    "#工程 **Antioxidant enzymes have been engineered as drugs — PEGylated SOD and catalase, and small-molecule SOD mimetics** — but they mostly failed clinically, teaching the same lesson as the vitamin trials: ROS are also signals. ｜ 抗氧化酶曾被工程化为药物（PEG 化 SOD 与过氧化氢酶、小分子 SOD 模拟物），临床多告失败——与大剂量维生素试验一样的教训：活性氧同时也是信号。",
    "#工程 **N-acetylcysteine works by refilling the glutathione pool**, which is why it is the antidote in paracetamol poisoning — supporting an endogenous system rather than adding a foreign antioxidant. ｜ N-乙酰半胱氨酸的作用是补充谷胱甘肽池，因此成为对乙酰氨基酚中毒的解毒剂——支持内源系统，而不是外加一个抗氧化剂。"
  ]);
  add("5a", [
    "#工程 **Point-of-care G6PD tests are engineered enzyme assays** — mandatory before primaquine or tafenoquine for malaria, because the drug would haemolyse a deficient patient. ｜ 床旁 G6PD 检测是工程化的酶活性测定——在使用伯氨喹或他非诺喹抗疟前必须做，否则缺乏者会溶血。",
    "#工程 **Thiamine status is measured by ACTIVATING the patient's own transketolase with added TPP** — a functional enzyme assay rather than a concentration; the same principle is used for B6 with the transaminases. ｜ 硫胺素营养状况的评估是给患者自身的转酮酶**加 TPP 看激活程度**——测功能而非浓度；维生素 B6 用转氨酶同理。"
  ]);
  add("5b", [
    "#工程 **Dupilumab (anti-IL-4Rα) treats atopic dermatitis** — an engineered antibody against the cytokine receptor downstream of the barrier defect, and the proof that the filaggrin story is clinically actionable. ｜ 度普利尤单抗（抗 IL-4Rα）治疗特应性皮炎——针对屏障缺陷下游细胞因子受体的工程抗体，也证明了聚丝蛋白这条线索确实可用于治疗。",
    "#工程 **Recombinant hyaluronidase is used to make subcutaneous injection of large protein drugs possible** (it opens the matrix) — an enzyme engineered as an excipient. ｜ 重组透明质酸酶被用来让大分子蛋白药可以皮下注射（它疏松基质）——一个被当作辅料使用的工程酶。"
  ]);
  add("6a", [
    "#工程 **Conjugate vaccines are glycoprotein engineering**: a bacterial capsular POLYSACCHARIDE (T-independent, poorly immunogenic in infants) is covalently coupled to a carrier PROTEIN, which recruits T-cell help and creates memory — the reason *Haemophilus influenzae* b meningitis has almost disappeared. ｜ 结合疫苗就是糖蛋白工程：把细菌荚膜**多糖**（T 非依赖、婴儿免疫原性差）共价偶联到载体**蛋白**上，招募 T 细胞帮助并形成记忆——这正是 b 型流感嗜血杆菌脑膜炎几乎消失的原因。",
    "#工程 **Glucose isomerase, which converts glucose to fructose, is one of the largest-tonnage industrial enzymes in the world** (high-fructose corn syrup) — an engineered enzyme with a direct public-health footprint. ｜ 把葡萄糖异构成果糖的葡萄糖异构酶是全球用量最大的工业酶之一（高果糖玉米糖浆）——一个对公共卫生有直接影响的工程酶。"
  ]);
  add("6b", [
    "#工程 **Recombinant human collagen and engineered hyaluronic acid are the basis of tissue-engineering scaffolds and dermal fillers**, and **MMP inhibitors are the field's famous failure** — inhibiting a whole enzyme family caused musculoskeletal toxicity, teaching that selectivity is everything. ｜ 重组人胶原与工程化透明质酸是组织工程支架与皮肤填充剂的基础；而 **MMP 抑制剂是该领域著名的失败**——抑制整个酶家族造成肌肉骨骼毒性，说明选择性就是一切。",
    "#工程 **Collagen cross-linking with riboflavin and UV-A is used to stiffen the cornea in keratoconus** — deliberately doing to a patient what lysyl oxidase does chemically. ｜ 用核黄素加 UV-A 进行胶原交联以加固圆锥角膜——有意在患者身上完成赖氨酰氧化酶在化学上所做的事。"
  ]);
  add("7a", [
    "#工程 **Lactose-free milk is made with immobilised lactase (β-galactosidase)** — the same enzyme the patient lacks, added to the food instead of to the patient; oral lactase tablets are the other version. ｜ 无乳糖牛奶由固定化乳糖酶（β-半乳糖苷酶）制成——把患者缺的酶加进食物而不是加进人体；口服乳糖酶片是另一种做法。",
    "#工程 **Newborn screening for galactosaemia is an enzyme assay on a dried blood spot** (Beutler test for GALT activity) — protein function measured from a paper disc. ｜ 半乳糖血症的新生儿筛查是在滤纸干血片上做酶活性测定（Beutler 试验测 GALT）——用一张纸片测出蛋白功能。"
  ]);
  add("7b", [
    "#工程 **Metreleptin — recombinant leptin — is a genuine hormone-replacement therapy for lipodystrophy and congenital leptin deficiency**, and is useless in ordinary obesity because that is a resistance state. ｜ 美曲普汀（重组瘦素）是脂肪营养不良与先天性瘦素缺乏的真正激素替代治疗；对普通肥胖无效，因为那是抵抗状态。",
    "#工程 **Adipose tissue is now a source of therapy as well as a target**: adipose-derived stem cells for regenerative medicine, and β₃-agonists explored to activate brown fat. ｜ 脂肪组织如今既是靶点也是治疗来源：脂肪来源干细胞用于再生医学，β3 激动剂被研究用于激活棕色脂肪。"
  ]);
  add("8a", [
    "#工程 **Ivosidenib and enasidenib are drugs designed against a MUTANT enzyme (IDH1/IDH2)** that has acquired a new function — inhibiting the neomorphic activity rather than restoring the normal one: precision oncology built on a citrate-cycle enzyme. ｜ 艾伏尼布与恩西地平是针对**突变酶**（IDH1/IDH2）设计的药物——抑制其新获得的功能而非恢复原功能：建立在三羧酸循环酶上的精准肿瘤治疗。",
    "#工程 **Itaconate derivatives (4-octyl itaconate) are being developed as anti-inflammatory drugs** — a macrophage metabolite of the citrate cycle turned into a medicine. ｜ 衣康酸衍生物（4-辛基衣康酸）正被开发为抗炎药——一个来自三羧酸循环的巨噬细胞代谢物被做成药。"
  ]);
  add("8b", [
    "#工程 **Canakinumab (anti-IL-1β) proved atherosclerosis is inflammatory**, and **anti-PCSK9 antibodies plus inclisiran (siRNA) attack the lipid side** — two engineered modalities against the two mechanisms in this topic. ｜ 卡那单抗（抗 IL-1β）证明了动脉粥样硬化是炎症性的；抗 PCSK9 单抗与英克司兰（siRNA）则攻击脂质一侧——两种工程手段对应本题的两条机制。",
    "#工程 **Aspirin-triggered lipoxin analogues and synthetic resolvins are being developed as 'pro-resolving' drugs** — instead of blocking inflammation, they switch on its programmed ending. ｜ 阿司匹林触发的脂氧素类似物与合成消退素正被开发为『促消退』药物——不是阻断炎症，而是启动其程序性终结。"
  ]);
  add("9a", [
    "#工程 **The firefly luciferase ATP assay** turns ATP concentration into light and is used everywhere from hygiene monitoring to high-throughput screening — an enzyme borrowed from an insect as a measuring instrument. ｜ 萤火虫荧光素酶 ATP 测定把 ATP 浓度变成光信号，从卫生监测到高通量筛选无处不在——借用昆虫的酶当作测量仪器。",
    "#工程 **Mitochondrial replacement ('three-parent IVF') transfers the nucleus into a donor egg with healthy mitochondria** — the most radical engineering answer to a bioenergetic disease, and legal only in a few countries. ｜ 线粒体置换（『三亲试管婴儿』）把细胞核移入含健康线粒体的供体卵——针对能量代谢病最激进的工程方案，仅少数国家合法。"
  ]);
  add("9b", [
    "#工程 **Pancreatic enzyme replacement (pancrelipase) is enteric-coated so that gastric acid does not destroy the lipase** before it reaches the duodenum — formulation as protein protection. ｜ 胰酶替代治疗（胰脂肪酶）做成肠溶剂型，以免脂肪酶在到达十二指肠前被胃酸破坏——用剂型保护蛋白。",
    "#工程 **Faecal microbiota transplantation is a licensed therapy for recurrent *C. difficile***, and defined bacterial consortia are replacing it — a 'living drug' derived from the biochemistry of the gut. ｜ 粪菌移植已成为复发性艰难梭菌感染的正式疗法，并正被成分明确的菌群制剂取代——源自肠道生化的『活药』。"
  ]);
  add("10a", [
    "#工程 **mtDNA cannot be edited with CRISPR because guide RNA does not enter the mitochondrion — so base editors were engineered from a bacterial toxin (DdCBE) that works on double-stranded DNA without any RNA** — protein engineering solving a delivery problem. ｜ 线粒体 DNA 不能用 CRISPR 编辑，因为向导 RNA 进不去线粒体——于是人们用一种细菌毒素改造出无需 RNA 的双链 DNA 碱基编辑器（DdCBE）——用蛋白质工程解决递送难题。",
    "#工程 **Bedaquiline kills *M. tuberculosis* by inhibiting its ATP synthase** — the first genuinely new anti-TB drug in 40 years, and proof that the same universal machine can still be targeted selectively. ｜ 贝达喹啉通过抑制结核分枝杆菌的 ATP 合酶杀菌——四十年来第一个真正全新的抗结核药，也证明这台通用机器仍可被选择性靶向。"
  ]);
  add("10b", [
    "#工程 **Intravenous immunoglobulin (IVIG) is pooled human antibody used as a drug**, and **recombinant albumin now replaces the plasma-derived product** in some settings — plasma proteins manufactured rather than donated. ｜ 静脉免疫球蛋白是把混合人血抗体当药用；重组白蛋白如今在部分场合取代血浆来源产品——血浆蛋白从『捐献』走向『制造』。",
    "#工程 **hsCRP, procalcitonin and every protein on the electrophoresis report are measured with engineered antibodies** (nephelometry, immunofixation) — the diagnosis of inflammation is antibody technology. ｜ hsCRP、降钙素原以及电泳报告上的每一种蛋白，都是用工程抗体测出来的（散射比浊、免疫固定）——炎症的诊断本身就是抗体技术。"
  ]);
})(window.EXAM30_FOCUS = window.EXAM30_FOCUS || {});
