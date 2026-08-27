window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 23,
a: {
  titleEN: "Structure, types and function of lipids. Regulation of lipid metabolism, key enzymes. Principles of hormonal regulation of lipid metabolism.",
  titleCN: "脂类的结构、分类与功能 · 脂代谢的调节与关键酶 · 脂代谢激素调节的原则",
  opener: "Lipids are defined not by a common structure but by a common property — **solubility in organic solvents** — and they fall into three functional groups: **storage lipids (triacylglycerols), membrane lipids (phospholipids, sphingolipids, cholesterol) and signalling/functional lipids (eicosanoids, steroid hormones, vitamins A, D, E, K, second messengers)**.",
  openerCN: "脂类不是按结构而是按性质定义的——溶于有机溶剂；按功能分三类：储存脂（三酰甘油）、膜脂（磷脂、鞘脂、胆固醇）与信号/功能性脂（类二十烷酸、类固醇激素、脂溶性维生素、第二信使）。",
  spine: [
    "分类：简单脂、复合脂、衍生脂（或按功能分三类）",
    "脂肪酸与三酰甘油、磷脂、鞘脂、类固醇的结构要点",
    "脂类的六大功能",
    "脂代谢的四条主线与各自关键酶",
    "调节层次：别构、共价（丙二酰 CoA/CPT-1 开关）、基因（SREBP、PPAR）",
    "激素调节：胰岛素 vs 儿茶酚胺/胰高血糖素/皮质醇/GH/甲状腺素",
    "临床整合：血脂谱、脂肪肝、酮症、药物靶点"
  ],
  blocks: [
    { h: "1 · Classification and structures", hcn: "分类与结构",
      points: [
        "**Classical chemical classification: (a) SIMPLE lipids — esters of fatty acids with an alcohol: acylglycerols (fats and oils) and waxes; (b) COMPOUND (complex) lipids — containing an additional group: phospholipids (glycerophospholipids, sphingomyelin), glycolipids (cerebrosides, gangliosides), lipoproteins; (c) DERIVED lipids — fatty acids, sterols, steroid hormones, fat-soluble vitamins, eicosanoids, ketone bodies.**",
        "**Fatty acids:** even-numbered chains, saturated (palmitic 16:0, stearic 18:0) or unsaturated (oleic 18:1 ω-9; essential **linoleic 18:2 ω-6 and α-linolenic 18:3 ω-3**); **cis double bonds bend the chain and lower the melting point**, trans acids behave like saturated ones.",
        "**Triacylglycerol** — the storage form, completely non-polar, 38 kJ/g. **Glycerophospholipids** — amphipathic, two acyl chains plus a head group (choline, ethanolamine, serine, inositol; cardiolipin in the inner mitochondrial membrane). **Sphingolipids** — built on sphingosine: ceramide → sphingomyelin, cerebrosides, gangliosides.",
        "**Cholesterol** — the sterane nucleus with a 3β-OH; **membrane fluidity buffer and the precursor of bile acids, steroid hormones and vitamin D**. **Isoprenoid derivatives**: ubiquinone, dolichol, vitamins A/E/K, prenyl anchors.",
        "**Amphipathic lipids self-assemble in water** into micelles, monolayers and, if they have two chains, **bilayers** — the physical basis of every membrane (topic 25A)."
      ],
      cn: "三分法（简单/复合/衍生）＋各自结构要点；脂肪酸的顺反与必需；胆固醇的甾核与四大去向；两条链的两亲分子自发形成双层——这是膜的物理基础。" },
    { h: "2 · Functions of lipids", hcn: "脂类的功能（六条）",
      points: [
        "**(1) Energy store and fuel** — 38 kJ/g, anhydrous, 2–3 months' reserve; **(2) structural** — every membrane, the myelin sheath, the surfactant; **(3) thermal insulation and mechanical protection** (subcutaneous and perirenal fat).",
        "**(4) Signalling** — steroid hormones, calcitriol, eicosanoids, DAG/IP₃, PIP₃, ceramide and sphingosine-1-phosphate, PAF, endocannabinoids, and fatty acids themselves as **ligands of PPAR**.",
        "**(5) Transport and solubilisation** — bile salts as detergents, lipoproteins, and the carriage of the fat-soluble vitamins; **(6) precursor function** — cholesterol → bile acids/hormones/vitamin D; arachidonate → eicosanoids.",
        "Special functions worth naming: **anchoring of proteins (GPI anchors, palmitoylation, myristoylation, prenylation), lipid rafts, and the surfactant's reduction of alveolar surface tension.**",
        "The clinical mirror image of each function: **obesity (store), respiratory distress syndrome (surfactant), demyelination (structure), inflammation (eicosanoids), atherosclerosis (transport).**"
      ],
      cn: "六大功能＋特殊功能（蛋白锚定、脂筏、表面活性物质）；每条功能对应一个疾病，这样答起来有骨架。" },
    { h: "3 · The four lines of lipid metabolism and their key enzymes", hcn: "脂代谢四条主线与关键酶",
      points: [
        "**(1) Lipolysis (adipose tissue): ATGL → HORMONE-SENSITIVE LIPASE → monoacylglycerol lipase**, with **perilipin** as the gate; product: free fatty acids + glycerol.",
        "**(2) β-oxidation (mitochondrion): the key control is CPT-1 (carnitine palmitoyltransferase 1), inhibited by malonyl-CoA**; then the four-step cycle → acetyl-CoA, NADH, FADH₂ (topic 20A).",
        "**(3) Lipogenesis (cytosol): ACETYL-CoA CARBOXYLASE (biotin) is the rate-limiting enzyme (acetyl-CoA → malonyl-CoA), then fatty acid synthase → palmitate; esterification to triacylglycerol runs through phosphatidate (with DGAT at the end).**",
        "**(4) Cholesterol synthesis (cytosol/ER): HMG-CoA REDUCTASE is the rate-limiting enzyme; disposal is via 7α-HYDROXYLASE (CYP7A1) into bile acids** (topic 11A).",
        "**Plus the plasma enzymes that move lipids between organs: LIPOPROTEIN LIPASE (apo C-II-activated, on capillary endothelium), hepatic lipase, LCAT (esterifies cholesterol in HDL), CETP and PCSK9 (receptor turnover).**",
        "**Ketogenesis** (liver mitochondria, **HMG-CoA synthase**) belongs here too as the overflow route for acetyl-CoA when oxaloacetate is drained into gluconeogenesis."
      ],
      cn: "四条主线＋各自关键酶（HSL、CPT-1、ACC、HMG-CoA 还原酶）＋血浆中的四个酶（LPL、肝脂酶、LCAT、CETP）＋酮体生成的 HMG-CoA 合酶。" },
    { h: "4 · Regulation — the switches", hcn: "调节：三个开关",
      points: [
        "**Switch 1 — malonyl-CoA/CPT-1: it is impossible to synthesise and oxidise fatty acids at the same time.** High malonyl-CoA (fed) closes CPT-1; low malonyl-CoA (fasting, AMPK) opens it.",
        "**Switch 2 — phosphorylation state: PKA (glucagon, adrenaline) phosphorylates and ACTIVATES hormone-sensitive lipase and perilipin, and phosphorylates and INACTIVATES acetyl-CoA carboxylase; insulin (via protein phosphatase and PDE3B) does the exact opposite.** AMPK reinforces the fasting side.",
        "**Switch 3 — transcription: SREBP-1c (insulin) drives lipogenic genes; SREBP-2 (low cholesterol) drives HMG-CoA reductase and the LDL receptor; ChREBP responds to glucose; PPARα (fasting, fibrates) drives oxidation and ketogenesis; PPARγ (glitazones) drives storage and adipocyte differentiation.**",
        "**Allosteric details worth quoting: citrate activates acetyl-CoA carboxylase (a signal of abundant substrate), long-chain acyl-CoA inhibits it (product inhibition); malonyl-CoA inhibits CPT-1; cholesterol and oxysterols accelerate degradation of HMG-CoA reductase.**",
        "**Substrate supply is a control in itself:** the concentration of plasma free fatty acids (set by lipolysis) largely determines hepatic ketogenesis and VLDL output — which is why insulin deficiency produces both ketoacidosis and hypertriacylglycerolaemia."
      ],
      cn: "三个开关：丙二酰 CoA/CPT-1（互斥）、磷酸化状态（PKA vs 胰岛素/PP1）、转录因子（SREBP-1c/2、ChREBP、PPARα/γ）。再加别构细节与底物供应本身即是调节。" },
    { h: "5 · Hormonal regulation", hcn: "激素调节",
      points: [
        "**Insulin — the anti-lipolytic and lipogenic hormone:** inhibits HSL (via PDE3B → cAMP falls), induces and activates LPL in adipose tissue, activates ACC and FAS, promotes esterification (glucose supplies glycerol-3-P), suppresses ketogenesis. **Its antilipolytic action is its most sensitive effect** — very little insulin is needed, which is why ketoacidosis is a type 1 phenomenon.",
        "**Glucagon** — hepatic: β-oxidation and **ketogenesis** on, lipogenesis off (through PKA and falling malonyl-CoA); little direct effect on human adipose tissue.",
        "**Catecholamines** — the fastest lipolytic signal: **β₁/β₂/β₃ receptors → cAMP → HSL**, while **α₂ receptors inhibit** (regional differences in fat mobilisation); also **β₃ → UCP1** thermogenesis in brown fat.",
        "**Cortisol** — permissive for lipolysis, promotes central/visceral fat deposition and insulin resistance (the Cushing phenotype). **Growth hormone** — lipolytic, anti-insulin. **Thyroid hormones** — increase both lipolysis and LDL-receptor expression, so **hypothyroidism raises LDL cholesterol** (always check TSH in a dyslipidaemia). **Sex hormones**: oestrogens shift fat to the gluteofemoral depot, raise HDL and triacylglycerols.",
        "**Adipokines close the loop: leptin (satiety, more oxidation), adiponectin (AMPK → oxidation, insulin sensitivity), and the inflammatory adipokines of visceral fat that cause resistance** (topic 7B)."
      ],
      cn: "胰岛素（抗脂解＋促合成，作用最敏感）、胰高血糖素（生酮）、儿茶酚胺（最快，β 促 α2 抑）、皮质醇/GH/甲状腺素/性激素各一句；再加脂肪因子。甲减升 LDL 是常考临床点。" },
    { h: "6 · Integration and clinical relevance", hcn: "整合与临床",
      points: [
        "**Fed state:** insulin high → LPL in adipose tissue captures chylomicron/VLDL fatty acids, glucose supplies glycerol-3-P, lipogenesis runs in the liver, ketogenesis is off, plasma free fatty acids are at their lowest.",
        "**Fasting/exercise:** insulin low, catecholamines and glucagon high → lipolysis → free fatty acids to muscle and liver → β-oxidation → ATP for gluconeogenesis and **ketone bodies for the brain**; the **respiratory quotient falls toward 0.7**.",
        "**Diabetes (insulin deficiency) is the pathological exaggeration of the fasting state:** uncontrolled lipolysis → ketoacidosis, and VLDL overproduction with reduced LPL activity → **hypertriacylglycerolaemia, low HDL, small dense LDL**.",
        "**Fatty liver** appears whenever input exceeds export: alcohol, fructose, obesity/insulin resistance, protein or choline deficiency, CCl₄, abetalipoproteinaemia (no MTP).",
        "**Drug targets, each at a named enzyme: statins (HMG-CoA reductase), ezetimibe (NPC1L1), PCSK9 inhibitors, fibrates (PPARα), omega-3, orlistat (pancreatic lipase), glitazones (PPARγ), metformin (AMPK), and β₃-agonists/thermogenesis as an experimental route.**",
        "Closing sentence: **lipid metabolism is governed by a single question the cell keeps asking — is there enough insulin? — and every enzyme in this topic answers it either by storing fat or by burning it.**"
      ],
      cn: "餐后/空腹两张图＋糖尿病是空腹状态的病理放大；脂肪肝四类原因；药物与靶酶一一对应。最后一句总结好用。" }
  ],
  numbers: [
    "Fat **38 kJ/g**; plasma free fatty acids **0.3–0.6 mmol/L** fed, up to **1.5–2 mmol/L** fasting",
    "Respiratory quotient: fat **0.7**, carbohydrate **1.0**",
    "Key enzymes: **ACC (synthesis), CPT-1 (oxidation), HSL/ATGL (lipolysis), HMG-CoA reductase (cholesterol), LPL (delivery)**",
    "Desirable lipids: LDL-C **< 3.0 (very high risk < 1.4)**, HDL-C **> 1.0/1.2**, TAG **< 1.7 mmol/L**",
    "Ketone bodies: normal blood 3-hydroxybutyrate **< 0.6 mmol/L**, ketoacidosis **> 3 mmol/L**"
  ],
  clinic: [
    "**Hypothyroidism raises LDL** — check TSH before treating a dyslipidaemia",
    "**Diabetic dyslipidaemia** — high TAG, low HDL, small dense LDL; and DKA as uncontrolled lipolysis",
    "**NAFLD/MASLD** — the commonest liver disease, driven by insulin resistance and fructose",
    "**Familial chylomicronaemia** — pancreatitis risk above TAG ~10 mmol/L",
    "**Statins, fibrates, ezetimibe, PCSK9 inhibitors, orlistat** — name the enzyme each one hits"
  ],
  traps: [
    "Lipids are defined by **solubility**, not by a common structural motif",
    "**Malonyl-CoA is the switch between synthesis and oxidation** — quote it whenever regulation is asked",
    "Insulin's **antilipolytic** action is more sensitive than its glucose-lowering action",
    "The adipocyte cannot re-use glycerol (**no glycerol kinase**) — it goes to the liver",
    "Ketone bodies are a **normal fuel**, not a pathological product — the pathology is their uncontrolled overproduction"
  ],
  terms: [
    ["simple / compound / derived lipids", "简单脂/复合脂/衍生脂"], ["amphipathic", "两亲的"],
    ["hormone-sensitive lipase", "激素敏感性脂肪酶"], ["acetyl-CoA carboxylase", "乙酰 CoA 羧化酶"],
    ["carnitine palmitoyltransferase 1", "肉碱棕榈酰转移酶 1"], ["SREBP", "固醇调节元件结合蛋白"],
    ["PPAR", "过氧化物酶体增殖物激活受体"], ["lipoprotein lipase", "脂蛋白脂酶"], ["ketogenesis", "酮体生成"],
    ["lipid raft", "脂筏"]
  ]
},
b: {
  titleEN: "Xenobiochemistry. Reactions of the first and second phase of biotransformation. Metabolism of ethanol. Metabolic consequences of excessive ethanol intake.",
  titleCN: "外源物生物化学 · 生物转化的第一相与第二相反应 · 乙醇代谢 · 过量饮酒的代谢后果",
  opener: "A xenobiotic is a substance **foreign to the organism's own metabolism**; biotransformation converts it in **two phases — functionalisation and conjugation — into a more polar, more excretable form**, but the same chemistry can also **activate** a harmless molecule into a toxic one.",
  openerCN: "外源物是机体自身代谢之外的物质；生物转化通过两相（功能化与结合）把它变成更极性、更易排出的形式，但同样的化学过程也可能把无害分子『活化』成毒物。",
  spine: [
    "外源物的概念、来源与命运（ADME）",
    "第一相：CYP450 的结构、循环与主要反应类型",
    "CYP 的诱导与抑制及药物相互作用",
    "第二相：六种结合反应及其供体",
    "乙醇代谢的三条途径与 NADH/NAD⁺ 的后果",
    "急性与慢性饮酒的代谢后果（肝、脑、代谢紊乱）",
    "临床与实验室：GGT/MCV/CDT、戒断、甲醇解毒"
  ],
  blocks: [
    { h: "1 · Xenobiotics and the general scheme", hcn: "外源物与总体框架",
      points: [
        "**Xenobiotics: drugs, food additives and contaminants, pesticides, industrial chemicals, pollutants, plant and bacterial toxins, cosmetics** — plus some **endogenous** substances handled by the same enzymes (bilirubin, steroids, bile acids, eicosanoids).",
        "**The aim of biotransformation is to increase POLARITY** so the substance can be excreted in urine or bile — a lipophilic molecule would otherwise be reabsorbed in the renal tubule indefinitely.",
        "**Main site: the LIVER (smooth ER = 'microsomes'), then intestine, lung, kidney, skin, placenta.** First-pass metabolism through the gut wall and liver is the reason many drugs have low oral bioavailability.",
        "**Two phases: Phase I (functionalisation) — oxidation, reduction, hydrolysis: introduces or exposes a functional group (−OH, −NH₂, −SH, −COOH); Phase II (conjugation) — couples that group to a polar endogenous molecule.** A 'phase III' of active transport (**P-glycoprotein/MRP efflux pumps**) is often added.",
        "**Crucial point: the product is usually less active, but it may be equally or MORE toxic — bioactivation** (paracetamol → NAPQI, benzo[a]pyrene → diol-epoxide, parathion → paraoxon, methanol → formate, CCl₄ → CCl₃•, and prodrugs such as codeine → morphine, enalapril → enalaprilat)."
      ],
      cn: "外源物范围（含内源性底物）、目的（增加极性）、部位（肝滑面内质网）、两相加转运第三相；以及最重要的一句：第一相常常是活化而非解毒。" },
    { h: "2 · Phase I — cytochrome P450", hcn: "第一相：细胞色素 P450",
      points: [
        "**Cytochrome P450 is a haem-thiolate mono-oxygenase superfamily** (named after the 450 nm absorption of its CO complex) in the ER membrane, working with **NADPH-cytochrome P450 reductase** (and cytochrome b5).",
        "**The reaction: RH + O₂ + NADPH + H⁺ → ROH + H₂O + NADP⁺ — one oxygen atom into the substrate, one into water (hence 'mixed-function oxidase').** The catalytic cycle: substrate binding → Fe³⁺ reduced to Fe²⁺ → O₂ binds → a second electron and protons → the reactive **compound I (Fe(IV)=O)** → hydroxylation → product release.",
        "**Main human isoforms: CYP3A4 (≈50 % of drugs), CYP2D6 (highly polymorphic — poor and ultrarapid metabolisers: codeine, tamoxifen, antidepressants), CYP2C9 (warfarin, phenytoin), CYP2C19 (clopidogrel — a prodrug), CYP1A2 (smoking-induced, caffeine, theophylline), CYP2E1 (ethanol, paracetamol, halothane, nitrosamines).**",
        "**Other phase-I reactions: alcohol/aldehyde dehydrogenase, monoamine oxidase, xanthine oxidase, flavin monooxygenases, epoxide hydrolase, esterases and amidases (procaine, aspirin), and reductions (azo, nitro — often by gut bacteria).**",
        "**Induction (days, requires protein synthesis): phenobarbital and other barbiturates, phenytoin, carbamazepine, rifampicin, St John's wort, smoking (CYP1A2), chronic ethanol (CYP2E1), dioxin (Ah receptor).** Consequences: therapeutic failure (**oral contraceptives + rifampicin**), and increased toxicity of substances that are bioactivated.",
        "**Inhibition (immediate): ketoconazole and other azoles, macrolides, ritonavir, cimetidine, amiodarone, GRAPEFRUIT JUICE (CYP3A4)** — consequences: overdose from a normal dose (statin myopathy, prolonged QT). **Genetic polymorphisms** make all of this individual — the basis of pharmacogenetics."
      ],
      cn: "P450 的本质（含血红素、单加氧酶、NADPH 依赖）与反应式；六个重要同工酶与代表底物；诱导剂与抑制剂清单及其临床后果（利福平使避孕药失效、西柚汁抑制 CYP3A4）。" },
    { h: "3 · Phase II — conjugation", hcn: "第二相：结合反应",
      points: [
        "**Glucuronidation (the most important): UDP-glucuronosyltransferase transfers glucuronate from UDP-GLUCURONATE** — bilirubin, steroids, paracetamol, morphine, many drugs; **the neonate's UGT is immature (physiological jaundice), and UGT1A1 deficiency causes Gilbert and Crigler–Najjar syndromes.**",
        "**Sulfation: sulfotransferase with PAPS (3'-phosphoadenosine-5'-phosphosulfate)** — steroids, catecholamines, paracetamol at low doses; a **high-affinity but easily saturated** route.",
        "**Glutathione conjugation: glutathione S-transferase** — electrophiles and epoxides (NAPQI, aflatoxin epoxide, alkylating agents), further processed to **mercapturic acids** in urine. This is the body's main defence against reactive metabolites.",
        "**Acetylation: N-acetyltransferase (NAT2) with acetyl-CoA** — isoniazid, sulfonamides, hydralazine; the classic **'slow' and 'fast' acetylator polymorphism** (slow acetylators get drug-induced lupus and isoniazid neuropathy more often).",
        "**Methylation (SAM)** — catecholamines by COMT, thiopurines by TPMT (a polymorphism that causes severe azathioprine toxicity); **glycine conjugation** — benzoate → hippurate (also used therapeutically as a nitrogen scavenger, topic 18A).",
        "**Note the exceptions: conjugation usually inactivates, but morphine-6-glucuronide is MORE active than morphine, and sulfate esters of some carcinogens are the ultimate carcinogens.** Conjugation also depends on the supply of cofactors — **glutathione, PAPS, UDP-glucuronate — which can be exhausted**, exactly what happens in paracetamol overdose."
      ],
      cn: "六种结合反应＋各自供体（UDP-葡萄糖醛酸、PAPS、谷胱甘肽、乙酰 CoA、SAM、甘氨酸）；新生儿 UGT 不成熟与 Gilbert；乙酰化快慢型；结合物也可能更活跃或更致癌；辅因子会被耗竭。" },
    { h: "4 · Metabolism of ethanol", hcn: "乙醇代谢的三条途径",
      points: [
        "**Absorption is fast (stomach and small intestine), distribution into total body water (Vd ≈ 0.6 L/kg in men, 0.5 in women — the reason women reach higher levels for the same dose); ~90–98 % is metabolised in the liver, the rest excreted in breath and urine.**",
        "**Route 1, the main one — alcohol dehydrogenase (cytosol): ethanol + NAD⁺ → acetaldehyde + NADH.** **Route 2 — MEOS (CYP2E1, microsomal): induced by chronic drinking, so tolerance develops; it consumes NADPH and produces ROS.** **Route 3 — catalase** (peroxisomal, minor).",
        "**Then: acetaldehyde + NAD⁺ → ACETATE (aldehyde dehydrogenase, ALDH2, mitochondrial) → acetyl-CoA (mostly in peripheral tissues).** **The ALDH2*2 variant common in East Asia is nearly inactive → acetaldehyde accumulates → the flushing reaction; disulfiram produces the same effect pharmacologically.**",
        "**Kinetics: elimination is ZERO-ORDER (the enzymes are saturated at low concentrations) — roughly 0.1–0.15 g/kg/hour, i.e. about 7–10 g (one drink) per hour, lowering blood ethanol by ~0.1–0.2 ‰ per hour.** This is why blood levels are predictable and why a small extra dose has a large effect.",
        "**The single most important metabolic consequence: a huge rise of the cytosolic and mitochondrial NADH/NAD⁺ ratio** — everything below follows from it."
      ],
      cn: "三条途径（ADH 主要、MEOS/CYP2E1 可诱导、过氧化氢酶次要）→乙醛→乙酸；ALDH2 变异与双硫仑；零级动力学每小时约 0.1–0.15 g/kg。核心后果是 NADH/NAD⁺ 比值飙升。" },
    { h: "5 · Consequences of the NADH excess and of acetaldehyde", hcn: "NADH 过剩与乙醛的后果",
      points: [
        "**Hypoglycaemia:** the high NADH pushes **pyruvate → lactate and oxaloacetate → malate**, so the substrates of **gluconeogenesis disappear** — dangerous in a fasting drinker or a child.",
        "**Lactic acidosis and hyperuricaemia:** lactate accumulates and **competes with urate for renal excretion** → gout attacks after drinking (helped by the ATP consumption of acetate activation, which raises purine turnover).",
        "**Ketoacidosis:** NADH shifts acetoacetate to **3-hydroxybutyrate** (which the urine dipstick misses) — alcoholic ketoacidosis typically with only modest hyperglycaemia.",
        "**Fatty liver (steatosis):** less β-oxidation (high NADH inhibits the cycle and β-oxidation), more glycerol-3-P and more fatty-acid synthesis from acetyl-CoA, plus impaired VLDL export → **triacylglycerols accumulate**; reversible at this stage.",
        "**Acetaldehyde is the toxic agent:** it forms **adducts with proteins and DNA** (neoantigens → immune attack; mutagenesis — ethanol is a **class 1 carcinogen** for mouth, pharynx, oesophagus, liver, colon and breast), impairs mitochondrial function and microtubules.",
        "**Oxidative stress from CYP2E1**, endotoxin from the gut activating Kupffer cells (TNF-α), and malnutrition complete the picture: **steatosis → alcoholic hepatitis → fibrosis → CIRRHOSIS**, with portal hypertension, hepatic encephalopathy and hepatocellular carcinoma."
      ],
      cn: "把五个后果都从 NADH/NAD⁺ 升高推出来：低血糖、乳酸酸中毒＋高尿酸、酮症（以 3-羟丁酸为主）、脂肪肝；再加乙醛的加合物与致癌性、CYP2E1 的氧化应激与内毒素-Kupffer 细胞通路。" },
    { h: "6 · Systemic consequences and laboratory markers", hcn: "全身后果与实验室标志",
      points: [
        "**Nervous system: acute CNS depression (GABA_A potentiation, NMDA inhibition), and chronically Wernicke–Korsakoff syndrome from THIAMINE deficiency (poor intake, impaired absorption and activation) — give thiamine BEFORE glucose, otherwise you precipitate Wernicke encephalopathy.** Also cerebellar degeneration, polyneuropathy, withdrawal syndrome/delirium tremens (glutamate rebound).",
        "**Other organs: cardiomyopathy and arrhythmia ('holiday heart'), hypertension, acute and chronic pancreatitis, myopathy, gastritis and Mallory–Weiss tears, immunosuppression, testicular atrophy and feminisation (impaired steroid metabolism), osteoporosis.**",
        "**Nutritional deficiencies: thiamine, folate, B6, B12, zinc, magnesium** — plus 'empty calories' (**29 kJ/g = 7 kcal/g**).",
        "**Fetal alcohol syndrome:** growth retardation, characteristic facies, microcephaly and intellectual disability — **no safe dose in pregnancy**.",
        "**Laboratory markers of chronic use: GGT (sensitive, induced), MCV (macrocytosis), AST/ALT ratio > 2 (De Ritis), carbohydrate-deficient transferrin (CDT — the most specific), raised triacylglycerols and urate, low potassium, magnesium and phosphate.** Acute: **blood ethanol, a raised OSMOLAL GAP**, and metabolic acidosis if ketoacidosis is present.",
        "**Therapeutic use of the same biochemistry: ethanol or fomepizole as antidotes in methanol/ethylene glycol poisoning (competition for alcohol dehydrogenase), disulfiram (ALDH inhibition) as aversion therapy, and thiamine + glucose + magnesium in the emergency department.**"
      ],
      cn: "神经系统（先补硫胺素再给葡萄糖！）、其他器官、营养缺乏、胎儿酒精综合征；实验室标志四件套（GGT、MCV、AST/ALT>2、CDT）；最后用『同一化学的治疗性应用』（乙醇/甲吡唑解甲醇毒、双硫仑）收尾。" }
  ],
  numbers: [
    "Ethanol energy **29 kJ/g (7 kcal/g)**; elimination **~0.1–0.15 g/kg/h ≈ 0.1–0.2 ‰ per hour** (zero-order)",
    "Volume of distribution **0.6 L/kg (men), 0.5 (women)**; 90–98 % metabolised in the liver",
    "**CYP3A4 metabolises ~50 % of drugs**; CYP2E1 is induced by chronic ethanol",
    "Paracetamol: glutathione is exhausted above **~150 mg/kg**; NAC best within 8–10 h",
    "De Ritis **AST/ALT > 2** suggests alcoholic liver disease; CDT is the most specific chronic marker"
  ],
  clinic: [
    "**Give thiamine before glucose** in a malnourished or alcoholic patient",
    "**Rifampicin + oral contraceptive** — induction failure; **grapefruit juice + statin** — inhibition toxicity",
    "**Disulfiram reaction** and the East Asian **ALDH2** flushing variant",
    "**Alcoholic ketoacidosis** — measure 3-hydroxybutyrate; the dipstick may be negative",
    "**Fetal alcohol syndrome** — no safe dose during pregnancy"
  ],
  traps: [
    "Phase I is **not** automatically detoxification — it frequently **bioactivates**",
    "Ethanol elimination is **zero-order**, so 'half-life' is not a meaningful term for it",
    "Alcoholic hypoglycaemia comes from **NADH blocking gluconeogenesis**, not from any direct insulin effect",
    "Chronic drinkers metabolise ethanol faster (**CYP2E1 induction**) but are MORE susceptible to paracetamol toxicity",
    "Conjugation usually inactivates, but **morphine-6-glucuronide** is more potent than morphine"
  ],
  terms: [
    ["xenobiotic", "外源性化学物"], ["biotransformation", "生物转化"], ["cytochrome P450", "细胞色素 P450"],
    ["mono-oxygenase", "单加氧酶"], ["enzyme induction / inhibition", "酶诱导/酶抑制"],
    ["glucuronidation", "葡萄糖醛酸化"], ["PAPS", "3'-磷酸腺苷-5'-磷酰硫酸"], ["glutathione S-transferase", "谷胱甘肽 S-转移酶"],
    ["acetaldehyde", "乙醛"], ["MEOS", "微粒体乙醇氧化系统"], ["carbohydrate-deficient transferrin", "糖缺失转铁蛋白"]
  ]
}
});
