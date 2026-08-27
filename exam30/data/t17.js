window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 17,
a: {
  titleEN: "Structure and metabolism of amino acids. Ketogenic amino acids and their carbon skeletons. Selected disorders of amino-acid metabolism.",
  titleCN: "氨基酸的结构与代谢 · 生酮氨基酸的碳骨架 · 常见氨基酸代谢病",
  opener: "A **ketogenic** amino acid is one whose carbon skeleton ends as **acetyl-CoA or acetoacetyl-CoA** — and because that carbon can never return to pyruvate, it can be turned into **ketone bodies or fat, but never into glucose**; only **leucine and lysine** are purely ketogenic.",
  openerCN: "生酮氨基酸是碳骨架最终变成乙酰 CoA 或乙酰乙酰 CoA 的氨基酸——这些碳无法回到丙酮酸，因此只能生成酮体或脂肪，绝不能生成葡萄糖；纯生酮的只有亮氨酸与赖氨酸。",
  spine: [
    "生糖/生酮的判定原则（为什么乙酰 CoA 不能生糖）",
    "纯生酮：亮氨酸、赖氨酸；兼性：Phe、Tyr、Trp、Ile、Thr",
    "支链氨基酸的代谢（转氨→氧化脱羧→各自去向）与肌肉的特殊地位",
    "芳香族氨基酸的分解（苯丙氨酸→酪氨酸→延胡索酸＋乙酰乙酸）",
    "含硫氨基酸与甘氨酸/丝氨酸的代谢",
    "氨基酸代谢病：PKU、酪氨酸血症、黑尿症、MSUD、同型半胱氨酸尿症、高甘氨酸血症",
    "新生儿筛查与治疗原则"
  ],
  blocks: [
    { h: "1 · The rule that decides everything", hcn: "判定原则",
      points: [
        "A carbon skeleton is **glucogenic if it yields pyruvate or a citrate-cycle intermediate** (which can leave as oxaloacetate → PEP), and **ketogenic if it yields acetyl-CoA or acetoacetyl-CoA**.",
        "**Why acetyl-CoA cannot make glucose: pyruvate dehydrogenase is irreversible, and the two carbons entering the cycle as acetyl are matched by two leaving as CO₂ — there is no net gain of oxaloacetate.** Say this once and the whole classification follows.",
        "**Purely ketogenic: LEUCINE and LYSINE.** **Both glucogenic and ketogenic: phenylalanine, tyrosine, tryptophan, isoleucine, threonine.** **All the remaining 13 are glucogenic.**",
        "Physiological importance: in **starvation and in diabetes**, ketogenic amino acids reinforce ketone-body production, while glucogenic ones (above all **alanine and glutamine from muscle**) maintain gluconeogenesis (topic 27B).",
        "The nitrogen is dealt with separately in every case: **transamination onto glutamate → glutamate dehydrogenase → ammonia → urea cycle** (topic 18A)."
      ],
      cn: "先讲判定原则与『乙酰 CoA 为何不能生糖』，再背两组名单（纯生酮 Leu/Lys；兼性 Phe/Tyr/Trp/Ile/Thr）。这一段说清楚，后面全是细节。" },
    { h: "2 · Branched-chain amino acids", hcn: "支链氨基酸（Val、Leu、Ile）",
      points: [
        "**Special feature: they are NOT metabolised by the liver first — they escape hepatic extraction and are taken up mainly by MUSCLE**, which is why they are the substrate of choice for muscle in the fed state and a source of nitrogen for the glucose–alanine cycle.",
        "**Three shared steps: (1) transamination by branched-chain aminotransferase (PLP) → branched-chain α-keto acids; (2) OXIDATIVE DECARBOXYLATION by the branched-chain α-keto acid dehydrogenase complex — the same five coenzymes and the same architecture as PDH (TPP, lipoamide, CoA, FAD, NAD⁺) and the rate-limiting, regulated step; (3) dehydrogenation and separate pathways thereafter.**",
        "**Fates: valine → succinyl-CoA (purely glucogenic); leucine → acetyl-CoA + acetoacetate (purely ketogenic); isoleucine → succinyl-CoA + acetyl-CoA (both).**",
        "**Leucine is also a signalling molecule: it activates mTORC1** and stimulates insulin secretion — the reason BCAA supplements are used in sport and the reason raised BCAA levels correlate with insulin resistance.",
        "**Maple syrup urine disease (MSUD)** — deficiency of the branched-chain keto-acid dehydrogenase: accumulation of the amino and keto acids, **urine smelling of maple syrup/burnt sugar**, vomiting, lethargy, ketoacidosis, cerebral oedema and death in the newborn; some forms respond to **thiamine**; treatment is a diet restricted in Val/Leu/Ile and emergency management of catabolic crises."
      ],
      cn: "支链氨基酸不经肝首过、主要在肌肉代谢；三步共用（转氨→氧化脱羧限速→分道）；去向 Val→琥珀酰 CoA、Leu→纯生酮、Ile→两者；MSUD 是该复合体缺陷（枫糖尿）。" },
    { h: "3 · Aromatic amino acids", hcn: "芳香族氨基酸",
      points: [
        "**Phenylalanine → tyrosine by PHENYLALANINE HYDROXYLASE (a monooxygenase requiring tetrahydrobiopterin BH₄, O₂ and Fe)** — an irreversible step, so **tyrosine is 'conditionally essential'**: it becomes essential when this enzyme fails.",
        "**Tyrosine degradation: tyrosine → 4-hydroxyphenylpyruvate → homogentisate → (homogentisate 1,2-dioxygenase) → maleylacetoacetate → fumarylacetoacetate → FUMARATE + ACETOACETATE** — that is why tyrosine (and phenylalanine) are **both glucogenic and ketogenic**.",
        "Tyrosine's synthetic side is at least as important: **catecholamines, melanin, thyroid hormones** (topics 14B, 15B, 30B).",
        "**Tryptophan** is degraded through the **kynurenine pathway** to acetoacetyl-CoA (ketogenic) and alanine (glucogenic), and it is the precursor of **serotonin, melatonin and niacin/NAD⁺ (60 mg Trp = 1 mg niacin)** — hence pellagra in **Hartnup disease** (defective neutral amino-acid transport) and in **carcinoid** (tryptophan diverted to serotonin).",
        "**BH₄ is the shared cofactor of phenylalanine, tyrosine and tryptophan hydroxylases** — a defect of BH₄ synthesis or recycling causes 'malignant' hyperphenylalaninaemia with **neurotransmitter deficiency that diet alone cannot correct** (treated with BH₄, L-DOPA and 5-hydroxytryptophan)."
      ],
      cn: "苯丙氨酸羟化酶（需 BH4）→酪氨酸→…→延胡索酸＋乙酰乙酸（所以兼性）；酪氨酸的三条合成去向；色氨酸→犬尿氨酸途径＋5-HT/褪黑素/烟酸；BH4 是三个羟化酶的共同辅因子。" },
    { h: "4 · Sulfur-containing amino acids, glycine and serine", hcn: "含硫氨基酸与甘氨酸/丝氨酸",
      points: [
        "**Methionine → SAM (methyl donor) → SAH → homocysteine**, which has two fates: **remethylation to methionine (methionine synthase, B12 + N5-methyl-THF, or betaine)** or **transsulfuration: homocysteine + serine → cystathionine (cystathionine β-synthase, PLP) → cysteine + α-ketobutyrate → propionyl-CoA → succinyl-CoA (glucogenic)**.",
        "**Cysteine** is oxidised to **taurine** (bile salts, membrane stabiliser) or to **sulfate** (→ PAPS, the sulfate donor for conjugation and glycosaminoglycans); its sulfur can also make **H₂S**.",
        "**Glycine — the simplest amino acid but metabolically busy: it is degraded by the glycine cleavage system (a mitochondrial complex producing CO₂, NH₃ and N5,N10-methylene-THF)**, and it is a precursor of **haem (with succinyl-CoA), purines, creatine (with arginine), glutathione, bile-salt conjugates**, and it is an inhibitory neurotransmitter.",
        "**Serine ⇌ glycine (serine hydroxymethyltransferase, THF)** — the main entry of one-carbon units into the folate pool; serine is made from **3-phosphoglycerate** (link to glycolysis) and is the backbone of **sphingolipids and phosphatidylserine**.",
        "**Cystinuria** (a transport defect of dibasic amino acids **COLA — cystine, ornithine, lysine, arginine** in the kidney and gut) causes **recurrent cystine stones** (hexagonal crystals); it is a transport disease, quite different from **homocystinuria**, which is a metabolic one. **Cystinosis** (lysosomal cystine transport) is a third, distinct disease."
      ],
      cn: "甲硫氨酸→SAM→同型半胱氨酸的两条去路（再甲基化需 B12/叶酸；转硫需 PLP）；半胱氨酸→牛磺酸/硫酸根；甘氨酸切割系统与其五个合成用途；胱氨酸尿症（COLA 转运缺陷）≠ 同型半胱氨酸尿症。" },
    { h: "5 · Selected disorders — the ones examiners ask", hcn: "重点氨基酸代谢病",
      points: [
        "**Phenylketonuria (PKU) — phenylalanine hydroxylase deficiency, autosomal recessive, ~1:10 000.** Phenylalanine accumulates and is transaminated to **phenylpyruvate, phenyllactate and phenylacetate (the mousy odour)**; the brain is damaged both by phenylalanine itself and by competition for the **LAT1 transporter** (less tyrosine and tryptophan in the brain → less dopamine and serotonin). Untreated: **intellectual disability, seizures, eczema, hypopigmentation (tyrosinase substrate is missing)**. **Newborn screening; a low-phenylalanine diet with tyrosine supplementation, started in the first weeks; strict control during pregnancy (maternal PKU damages a non-affected fetus).** Some patients respond to **sapropterin (BH₄)**.",
        "**Alkaptonuria — homogentisate 1,2-dioxygenase deficiency.** Benign in childhood: **urine darkens on standing/alkalinisation**; in adults homogentisate polymerises and is deposited in cartilage → **ochronosis** (blue-black cartilage, ears, sclerae) and early **arthritis**. Historic importance: Garrod's first 'inborn error of metabolism'.",
        "**Tyrosinaemia type I — fumarylacetoacetate hydrolase deficiency:** accumulation of the toxic fumarylacetoacetate and succinylacetone → **liver failure, renal tubular disease, hepatocellular carcinoma, cabbage-like odour**; treated with **nitisinone (NTBC), which blocks the pathway further upstream**, plus diet. **Type II** (tyrosine aminotransferase) — corneal and skin lesions.",
        "**Homocystinuria — cystathionine β-synthase deficiency (PLP-dependent):** homocysteine accumulates → **dislocated lenses (downward), marfanoid habitus, osteoporosis, intellectual disability and — most dangerous — thromboembolism**. Treated with **vitamin B6 (in responders), betaine, folate and B12, plus a methionine-restricted diet**.",
        "**Maple syrup urine disease** (above) and **non-ketotic hyperglycinaemia** (glycine cleavage system — neonatal seizures, very high glycine in CSF).",
        "**Organic acidurias** from the same branchpoints — **propionic, methylmalonic (B12-responsive forms), isovaleric acidaemia ('sweaty feet' odour)**: they present as neonatal metabolic crises with **metabolic acidosis, high anion gap, hyperammonaemia and ketosis**."
      ],
      cn: "六个病＋各自的酶：PKU（苯丙氨酸羟化酶）、黑尿症（尿黑酸氧化酶）、酪氨酸血症 I 型（延胡索酰乙酰乙酸水解酶）、同型半胱氨酸尿症（CBS）、MSUD、非酮性高甘氨酸血症。每个都要能说出一个特征性体征或气味。" },
    { h: "6 · General principles of diagnosis and treatment", hcn: "诊断与治疗的通则",
      points: [
        "**When to suspect an inborn error:** a previously well newborn deteriorating after feeding starts, unexplained **metabolic acidosis with a high anion gap, hyperammonaemia, hypoglycaemia, ketosis**, unusual **odour**, or a family history/consanguinity. In older children: developmental regression, exercise intolerance, recurrent crises during infections.",
        "**Screening:** the newborn heel-prick dried blood spot on day 2–3 (**tandem mass spectrometry** detects dozens of amino-acid, organic-acid and fatty-acid oxidation defects at once) — PKU was the first, with the Guthrie test (topic 18B).",
        "**Confirmatory tests:** plasma amino acids (chromatography/MS), **urinary organic acids (GC-MS)**, acylcarnitine profile, ammonia, lactate, blood gases, plus enzyme assay or DNA.",
        "**Treatment principles are the same for the whole group: (1) restrict the substrate (diet); (2) supply what is missing downstream (tyrosine in PKU, cysteine, arginine in urea-cycle defects); (3) give the vitamin/cofactor if the enzyme is responsive (B6, B12, biotin, thiamine, BH₄); (4) remove the toxic metabolite (scavengers, dialysis in crisis); (5) block the pathway upstream (nitisinone); (6) prevent catabolism — never let the patient fast, give glucose during illness; (7) enzyme replacement, transplantation or gene therapy in selected diseases.**",
        "One sentence for the examiner: **an inborn error harms either by the accumulation of a toxic precursor, or by the deficiency of a product, or both — and every treatment listed above attacks one of those two mechanisms.**"
      ],
      cn: "何时怀疑先天代谢病（喂养后恶化、酸中毒、高氨、低血糖、特殊气味）；筛查用串联质谱；治疗七原则（限底物、补产物、试辅因子、清除毒物、上游阻断、防分解代谢、替代/移植）。最后那句总结很好用。" }
  ],
  numbers: [
    "Purely ketogenic: **leucine, lysine**; both: **Phe, Tyr, Trp, Ile, Thr**; the other 13 glucogenic",
    "PKU incidence **~1:10 000**; treat to keep phenylalanine roughly **120–360 µmol/L** in childhood",
    "MSUD, homocystinuria, tyrosinaemia each **~1:100 000–200 000**",
    "**60 mg tryptophan = 1 mg niacin**",
    "Branched-chain keto-acid dehydrogenase uses the same **5 coenzymes** as PDH"
  ],
  clinic: [
    "**PKU** — newborn screening, low-phenylalanine diet, maternal PKU syndrome",
    "**Alkaptonuria** — dark urine on standing, ochronosis, arthritis",
    "**Homocystinuria** — thromboembolism and downward lens dislocation (Marfan dislocates upward)",
    "**Isovaleric acidaemia** — 'sweaty feet' odour; **MSUD** — maple syrup odour; **tyrosinaemia** — boiled cabbage",
    "**Hartnup disease** — pellagra-like rash and ataxia from tryptophan malabsorption"
  ],
  traps: [
    "Acetyl-CoA **cannot** be converted to glucose — this is the entire basis of the ketogenic classification",
    "In PKU the brain damage is not only from phenylalanine itself but also from **competition at the LAT1 transporter**",
    "**Tyrosine is conditionally essential** — in PKU it must be supplied",
    "Branched-chain amino acids are metabolised mainly in **muscle**, not liver",
    "Cystinuria (transport, stones) and homocystinuria (metabolism, thrombosis) are **completely different diseases** despite similar names"
  ],
  terms: [
    ["ketogenic amino acid", "生酮氨基酸"], ["branched-chain amino acid", "支链氨基酸"],
    ["phenylalanine hydroxylase", "苯丙氨酸羟化酶"], ["tetrahydrobiopterin", "四氢生物蝶呤"],
    ["homogentisate", "尿黑酸"], ["ochronosis", "褐黄病"], ["transsulfuration", "转硫作用"],
    ["glycine cleavage system", "甘氨酸裂解系统"], ["organic aciduria", "有机酸尿症"],
    ["tandem mass spectrometry", "串联质谱"]
  ]
},
b: {
  titleEN: "Pathobiochemistry of cell damage and death. Reactive oxygen species, disturbance of calcium homeostasis, ATP shortage, membrane defects. Basic biochemical markers of tissue damage (liver, muscle).",
  titleCN: "细胞损伤与死亡的病理生化 · 活性氧、钙稳态失衡、ATP 不足、膜缺陷 · 组织损伤的基本生化标志物（肝、肌肉）",
  opener: "Whatever the initial insult — hypoxia, toxin, radiation, infection — cell injury converges on **four final common mechanisms: ATP depletion, calcium overload, oxidative damage and loss of membrane integrity**; whether the cell then dies by **necrosis or apoptosis** depends mainly on how much ATP is left.",
  openerCN: "无论最初打击是缺氧、毒物、辐射还是感染，细胞损伤最终都汇聚到四条共同机制：ATP 耗竭、钙超载、氧化损伤、膜完整性丧失；此后走坏死还是凋亡，主要取决于还剩多少 ATP。",
  spine: [
    "可逆与不可逆损伤的界线",
    "机制 1：ATP 缺乏及其连锁后果",
    "机制 2：钙稳态失衡",
    "机制 3：活性氧与脂质过氧化",
    "机制 4：膜缺陷（质膜、线粒体膜、溶酶体膜）",
    "死亡方式：坏死 vs 凋亡（＋自噬、焦亡、铁死亡）",
    "组织损伤标志物：肝与肌肉（如何选、如何读）"
  ],
  blocks: [
    { h: "1 · Reversible and irreversible injury", hcn: "可逆与不可逆损伤",
      points: [
        "**Reversible:** cellular swelling (failure of the Na⁺/K⁺-ATPase → water follows Na⁺), blebbing of the plasma membrane, detachment of ribosomes, mitochondrial swelling, **fatty change** in the liver — all still repairable if the cause is removed.",
        "**The two hallmarks of irreversibility: (1) severe mitochondrial dysfunction that cannot be reversed (opening of the mPTP, loss of the membrane potential) and (2) profound disturbance of membrane function** — once enzymes and proteins leak out and calcium floods in, the cell is lost.",
        "**Enzyme leakage into plasma is the laboratory expression of that second hallmark** — this is exactly why we can measure tissue damage at all, and why cytosolic enzymes (ALT, CK) appear before mitochondrial ones (mitochondrial AST) in severe damage.",
        "Hypoxia versus ischaemia: **ischaemia is worse**, because it removes substrates and lets metabolites accumulate as well as removing oxygen; anaerobic glycolysis cannot be sustained without glucose.",
        "Time scales worth quoting: **neurons tolerate 3–5 minutes, myocardium 20–30 minutes, skeletal muscle 1–2 hours, fibroblasts many hours** of complete ischaemia."
      ],
      cn: "可逆改变（细胞肿胀、脂肪变性）与不可逆的两个标志（线粒体不可逆损伤、膜功能丧失）；酶漏出正是我们能检测损伤的原因；不同组织耐受缺血的时间。" },
    { h: "2 · Mechanism 1 — ATP depletion", hcn: "机制一：ATP 耗竭",
      points: [
        "Causes: hypoxia/ischaemia, mitochondrial poisons (**cyanide, CO**), uncouplers, substrate lack (hypoglycaemia).",
        "**Consequences in sequence: (1) the Na⁺/K⁺-ATPase stops → Na⁺ and water enter → cell swelling; (2) anaerobic glycolysis → lactate and H⁺ → intracellular acidosis → chromatin clumping and inhibition of glycolysis itself; (3) Ca²⁺-ATPases stop → calcium rises; (4) protein synthesis fails, ribosomes detach; (5) misfolded proteins accumulate → the unfolded protein response.**",
        "**Ischaemia–reperfusion adds a second hit:** restored oxygen meets accumulated hypoxanthine and reduced electron carriers → **a burst of superoxide**, plus calcium overload and complement/neutrophil activation. This is why reperfusion therapy must be given early.",
        "**Preconditioning** (short repeated ischaemia before a long one) protects through **KATP channels, adenosine, NO and PKC** — an examiner's bonus question.",
        "This mechanism explains the clinical picture of **shock, myocardial infarction and stroke** — all of them are, biochemically, ATP-deficiency diseases."
      ],
      cn: "ATP 耗竭的五步连锁（钠泵→肿胀→无氧糖酵解酸中毒→钙泵停→蛋白合成障碍）；缺血再灌注的第二次打击；缺血预适应。" },
    { h: "3 · Mechanism 2 — calcium overload", hcn: "机制二：钙超载",
      points: [
        "Normally cytosolic Ca²⁺ is **10⁻⁷ mol/L, 10 000× lower than outside** — maintained by the plasma-membrane Ca²⁺-ATPase, SERCA and the Na⁺/Ca²⁺ exchanger, all directly or indirectly ATP-dependent.",
        "In injury calcium enters from outside and is released from the ER/SR; it also accumulates in **mitochondria**, where it opens the **mPTP**.",
        "**Calcium activates four destructive enzyme families: phospholipases (membrane phospholipids → membrane damage + free fatty acids and lysophospholipids that act as detergents), proteases/calpains (cytoskeleton and membrane proteins), endonucleases (DNA fragmentation) and ATPases (accelerating ATP depletion).**",
        "It also activates **NOS** (peroxynitrite) and, in muscle, causes sustained contraction (contraction bands in infarcted myocardium).",
        "Therapeutic echoes: calcium-channel blockers in some ischaemic settings, magnesium as a physiological antagonist, and the deliberate use of **dantrolene** (blocking RyR1) in malignant hyperthermia."
      ],
      cn: "钙梯度 10⁴ 倍靠 ATP 维持；钙超载激活四类酶（磷脂酶、钙蛋白酶、内切核酸酶、ATP 酶）→膜、骨架、DNA 全线破坏，并打开 mPTP。" },
    { h: "4 · Mechanisms 3 and 4 — ROS and membrane defects", hcn: "机制三、四：活性氧与膜损伤",
      points: [
        "**ROS** (topic 4B) attack **lipids (peroxidation chain → MDA, 4-HNE), proteins (−SH oxidation, carbonyls, cross-links) and DNA (8-oxo-dG, strand breaks)**; sources in injury: mitochondria, xanthine oxidase, NADPH oxidase of infiltrating neutrophils, free iron via the Fenton reaction, and drug metabolism (CYP450).",
        "**Plasma membrane damage** → loss of ionic gradients, leakage of enzymes and metabolites out, entry of calcium in — the point of no return. **Mitochondrial membrane damage** → collapse of the proton gradient, **mPTP opening, release of cytochrome c**. **Lysosomal membrane damage** → escape of **cathepsins → enzymatic digestion of the cell (autolysis)**.",
        "Direct chemical mechanisms of membrane injury: **detergent-like free fatty acids and lysophospholipids** from activated phospholipases, **complement MAC**, **perforin** from cytotoxic lymphocytes, **bacterial pore-forming toxins**, and mechanical stretch.",
        "**Two classic toxicological examples: carbon tetrachloride (CYP2E1 → CCl₃• radical → lipid peroxidation of the hepatocyte ER → no apoprotein for VLDL → fatty liver and necrosis) and paracetamol (CYP2E1 → NAPQI → glutathione depletion → covalent binding to proteins → centrilobular necrosis; antidote N-acetylcysteine).**",
        "Note that the four mechanisms **amplify each other**: less ATP → more calcium → more phospholipase → more membrane damage → less ATP. Describing this vicious circle is what makes a complete answer."
      ],
      cn: "ROS 的三个靶点；三种膜（质膜、线粒体膜、溶酶体膜）各自损伤的后果；四氯化碳与对乙酰氨基酚是两个必举的毒理学例子；最后强调四条机制互相放大形成恶性循环。" },
    { h: "5 · Necrosis, apoptosis and the other forms of death", hcn: "坏死、凋亡与其他死亡方式",
      points: [
        "**Necrosis: passive, always pathological, affects groups of cells; the cell SWELLS and ruptures, contents spill out → INFLAMMATION; no ATP needed; enzymes leak into plasma (this is what we measure).** Nuclear changes: pyknosis → karyorrhexis → karyolysis. Types: coagulative, liquefactive (brain), caseous, fat necrosis (pancreatitis — with saponification, hence hypocalcaemia), fibrinoid, gangrene.",
        "**Apoptosis: active, programmed, energy (ATP)-DEPENDENT, affects single cells; the cell SHRINKS, chromatin condenses, membrane blebs into apoptotic bodies that are phagocytosed → NO inflammation.** Physiological in development, immune selection and epithelial turnover.",
        "**Apoptotic pathways: intrinsic (mitochondrial) — DNA damage, ROS, growth-factor withdrawal → p53 → Bax/Bak vs Bcl-2 → cytochrome c → apoptosome with Apaf-1 → caspase-9; extrinsic (death receptor) — Fas/FasL, TNF → caspase-8; both converge on the executioner caspases 3, 6 and 7 → DNA fragmentation by CAD (the 'ladder' on electrophoresis), cleavage of the cytoskeleton, and exposure of phosphatidylserine as the 'eat-me' signal.**",
        "**Other regulated forms worth naming: autophagy (survival mechanism that can end in death), necroptosis (RIPK1/3, MLKL — programmed but lytic and inflammatory), pyroptosis (inflammasome, caspase-1, IL-1β), ferroptosis (iron-dependent lipid peroxidation, blocked by GPX4), and NETosis.**",
        "**The ATP rule to quote: the same insult causes apoptosis if ATP is available and necrosis if it is not** — for example moderate versus severe ischaemia."
      ],
      cn: "坏死 vs 凋亡的六点对比（主动/被动、耗不耗 ATP、肿胀/皱缩、有无炎症、单个/成片、酶是否漏出）；凋亡的内源与外源通路与执行 caspase；其他调节性死亡方式；最后那条 ATP 决定死亡方式的规则。" },
    { h: "6 · Biochemical markers of tissue damage", hcn: "组织损伤的生化标志物（怎么选、怎么读）",
      points: [
        "**Principles of a good marker: it should be present in high concentration in the tissue, absent or low in plasma, released early, cleared at a known rate, and measurable specifically.** Interpretation depends on **tissue specificity, subcellular location (cytosolic leaks early, mitochondrial only in severe damage) and molecular size** (large enzymes appear later, e.g. LDH).",
        "**Liver — damage markers: ALT (cytosolic, relatively specific) and AST (also muscle, heart, erythrocytes; mitochondrial isoenzyme in severe damage). Cholestasis markers: ALP and GGT (GGT is also induced by alcohol and drugs). Function markers: albumin, INR/prothrombin time, bilirubin, ammonia, cholinesterase.**",
        "Liver patterns: **hepatocellular (ALT/AST ≫ ALP), cholestatic (ALP/GGT ≫ ALT), mixed**; **De Ritis AST/ALT > 2 → alcoholic**; **> 50× upper limit → ischaemic or toxic (paracetamol)**; **falling transaminases with rising INR and bilirubin = liver failure, not recovery** — a crucial clinical subtlety.",
        "**Muscle — CK (total; the MM isoenzyme dominates skeletal muscle, MB the myocardium, BB brain), myoglobin (earliest, non-specific), AST, LDH, aldolase, and cardiac troponins I/T for the myocardium.** **CK in the thousands = rhabdomyolysis** → myoglobinuria, hyperkalaemia, hyperphosphataemia, hypocalcaemia, acute kidney injury.",
        "Other organ markers to mention for completeness: **amylase and lipase (pancreas), ALP bone isoenzyme (bone), LDH (haemolysis, tumour lysis, general cell turnover), CRP/procalcitonin (inflammation), creatinine and cystatin C (kidney function).**",
        "Preanalytical pitfalls that change these values: **haemolysis of the sample (raises AST, LDH, K⁺), intramuscular injection or heavy exercise (CK, myoglobin), delayed separation of serum, drugs (statins → CK; enzyme inducers → GGT)** — mention them, because the examiner is also testing laboratory thinking (topic 18B)."
      ],
      cn: "先讲好标志物的条件与判读三要素（组织特异性、亚细胞定位、分子大小）；肝的三组指标（损伤 / 胆汁淤积 / 功能）与三种模式；肌肉的 CK/肌红蛋白/肌钙蛋白；最后别忘了分析前误差。" }
  ],
  numbers: [
    "Cytosolic Ca²⁺ **10⁻⁷ mol/L** — a 10 000-fold gradient across the plasma membrane",
    "Complete ischaemia tolerated: neurons **3–5 min**, myocardium **20–30 min**, skeletal muscle **1–2 h**",
    "Rhabdomyolysis: CK often **> 5000 U/L (many thousands)**; risk of AKI rises above ~15 000–20 000 U/L",
    "ALT/AST **> 10×** upper limit = acute hepatitis; **> 50×** = ischaemic or toxic",
    "Apoptosis needs **ATP**; necrosis occurs when ATP is exhausted"
  ],
  clinic: [
    "**Paracetamol poisoning** — NAPQI, glutathione depletion, centrilobular necrosis; **N-acetylcysteine** antidote",
    "**Rhabdomyolysis** — CK, myoglobinuria, hyperkalaemia, AKI; causes include statins, crush, seizures, exertion",
    "**Ischaemia–reperfusion injury** in infarction, stroke and transplantation",
    "**Acute liver failure** — falling transaminases with rising INR and bilirubin is an ominous sign",
    "**Tumour lysis syndrome** — massive necrosis: K⁺, phosphate, urate up, calcium down"
  ],
  traps: [
    "Apoptosis is **ATP-dependent and does not cause inflammation**; necrosis is the opposite on both counts",
    "**Mitochondrial AST** appears only in severe damage — the AST/ALT ratio is informative, not decorative",
    "Enzyme levels indicate **damage, not function** — albumin, INR and bilirubin indicate function",
    "A haemolysed sample invalidates **AST, LDH, potassium** — always ask about preanalytics before believing a result",
    "'Ischaemia = hypoxia' is wrong: ischaemia also removes substrate and retains waste, so it is more damaging"
  ],
  terms: [
    ["reversible / irreversible injury", "可逆/不可逆损伤"], ["mitochondrial permeability transition pore", "线粒体通透性转换孔"],
    ["calpain", "钙蛋白酶"], ["lipid peroxidation", "脂质过氧化"], ["necrosis", "坏死"], ["apoptosis", "凋亡"],
    ["caspase", "半胱天冬酶"], ["apoptosome", "凋亡小体（复合物）"], ["ferroptosis", "铁死亡"],
    ["rhabdomyolysis", "横纹肌溶解"], ["De Ritis ratio", "De Ritis 比值"]
  ]
}
});
