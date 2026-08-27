window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 12,
a: {
  titleEN: "Composition of lipoprotein particles, transport of cholesterol. Electrophoresis of lipoproteins. Importance of lipoproteins for medicine.",
  titleCN: "脂蛋白颗粒的组成 · 胆固醇的转运 · 脂蛋白电泳 · 脂蛋白的医学意义",
  opener: "Lipoproteins are **spherical particles that make water-insoluble lipids transportable**: a **core of triacylglycerols and cholesteryl esters**, a **surface monolayer of phospholipids, free cholesterol and apolipoproteins**; the apolipoproteins are the address labels — they decide which enzyme and which receptor the particle meets.",
  openerCN: "脂蛋白是把不溶于水的脂类变成可运输形式的球形颗粒：核心是三酰甘油与胆固醇酯，表面是磷脂、游离胆固醇与载脂蛋白单层；载脂蛋白就是地址标签，决定颗粒遇到哪种酶和哪种受体。",
  spine: [
    "统一结构与五类颗粒的密度/大小/成分对比",
    "载脂蛋白的功能（B48/B100、A-I、C-II、C-III、E）",
    "外源性途径：乳糜微粒",
    "内源性途径：VLDL→IDL→LDL 与 LDL 受体",
    "逆向胆固醇转运：HDL、ABCA1、LCAT、CETP、SR-B1",
    "电泳与超速离心：两套命名如何对应",
    "医学意义：致动脉粥样硬化的颗粒、检验判读、药物靶点"
  ],
  blocks: [
    { h: "1 · Structure and the five classes", hcn: "结构与五类脂蛋白",
      points: [
        "**Universal structure:** a hydrophobic **core (TAG + cholesteryl esters)** wrapped in an amphipathic **monolayer (phospholipids, free cholesterol, apolipoproteins)**. **The more lipid, the lower the density and the larger the particle; the more protein, the higher the density.**",
        "**Chylomicron** — d < 0.95, largest (75–1200 nm), **~90 % TAG (exogenous)**, apo **B-48**, C-II, E; **VLDL** — 0.95–1.006, **~55 % TAG (endogenous)**, apo **B-100**, C-II, E.",
        "**IDL** (remnant) — 1.006–1.019, apo B-100 + E; **LDL** — 1.019–1.063, **~50 % cholesterol + esters, apo B-100 only** — the main cholesterol carrier to tissues; **HDL** — 1.063–1.21, smallest, **~50 % protein**, apo **A-I**, A-II, C, E.",
        "Order to memorise (density up, size down): **chylomicron → VLDL → IDL → LDL → HDL**; the corresponding electrophoretic order is **origin → pre-β → broad β → β → α**.",
        "**Lp(a)** is an LDL particle whose apo B-100 carries **apolipoprotein(a)**, structurally similar to **plasminogen** → competes with it, so it is **both atherogenic and prothrombotic**; its level is ~90 % genetically determined and is measured once in a lifetime."
      ],
      cn: "结构一句话（核心 TAG/胆固醇酯＋表面磷脂/游离胆固醇/载脂蛋白）；五类按密度排序并记住各自的主要脂质与载脂蛋白；Lp(a) 与纤溶酶原同源。" },
    { h: "2 · Apolipoproteins — the address labels", hcn: "载脂蛋白的功能",
      points: [
        "**Apo B-48** — chylomicrons only, made in the intestine by **RNA editing** of the same gene (a stop codon is created, giving 48 % of the protein); **apo B-100** — VLDL/IDL/LDL, made in the liver, **the ligand of the LDL receptor**; one particle carries exactly one apo B — hence **apo B concentration = number of atherogenic particles**.",
        "**Apo A-I** — the main HDL protein, **activates LCAT** and is the ligand for **ABCA1**; **apo A-II** — structural.",
        "**Apo C-II — the obligatory activator of lipoprotein lipase**; its deficiency mimics LPL deficiency. **Apo C-III — the inhibitor of LPL** (and of remnant uptake) — now a therapeutic target.",
        "**Apo E (isoforms E2, E3, E4)** — the ligand for the **remnant receptor (LRP) and the LDL receptor**; **E2/E2 homozygosity causes type III hyperlipoproteinaemia**, **E4 is a risk factor for Alzheimer disease** and higher cholesterol.",
        "Apolipoproteins are exchanged between particles in plasma (C and E move from HDL to chylomicrons/VLDL and back) — **HDL is the reservoir**, which is why a chylomicron cannot be metabolised without HDL."
      ],
      cn: "五个必须能说清用途：B-48/B-100（受体配体、每颗粒一个→apoB 反映颗粒数）、A-I（LCAT/ABCA1）、C-II（LPL 激活剂）、C-III（抑制剂）、E（残粒受体、E2/E2 与 E4）。" },
    { h: "3 · Exogenous and endogenous pathways", hcn: "外源性与内源性途径",
      points: [
        "**Exogenous:** dietary fat → enterocyte → **nascent chylomicron (apo B-48) → lymph → blood**, where it picks up **apo C-II and E from HDL** → **LPL on capillary endothelium of muscle and adipose tissue (activated by apo C-II, induced by insulin in fat)** releases fatty acids → the particle shrinks to a **remnant** → taken up by the **liver via apo E (LRP receptor)**.",
        "**Endogenous:** the liver packs its own TAG (from de-novo lipogenesis and returning fatty acids) with apo B-100 into **VLDL** (needs **MTP** — its defect is abetalipoproteinaemia) → LPL again → **IDL**, part taken up by the liver, part converted by **hepatic lipase → LDL**.",
        "**LDL** carries cholesterol to peripheral cells: binding of **apo B-100 to the LDL receptor → clathrin-coated pit → endosome → lysosome → free cholesterol**, which then (a) inhibits **HMG-CoA reductase**, (b) inhibits **LDL receptor synthesis** (SREBP-2), (c) activates **ACAT** for storage. The receptor recycles; **PCSK9 diverts it to degradation**.",
        "**Uptake of LDL is 2/3 receptor-mediated (mostly liver) and 1/3 by scavenger receptors of macrophages** — the latter is unregulated and produces **foam cells** when LDL is modified (oxidised, glycated).",
        "**Half-lives to quote: chylomicrons minutes (4–5 min), VLDL 1–3 h, LDL 2–3 days** — the reason a fasting sample is needed for triacylglycerols but not for cholesterol."
      ],
      cn: "两条途径的关键点：乳糜微粒需要从 HDL 借 apo C-II/E；LPL 释放脂肪酸后成残粒经 apo E 回肝；VLDL→IDL→LDL；LDL 受体通路三个后果（抑制合成、抑制受体、激活 ACAT）。" },
    { h: "4 · Reverse cholesterol transport (HDL)", hcn: "逆向胆固醇转运",
      points: [
        "**Nascent (discoidal) HDL** is secreted by liver and intestine as apo A-I with phospholipid; it accepts **free cholesterol from peripheral cells through ABCA1** (defect = **Tangier disease**: almost no HDL, orange tonsils, neuropathy) and **ABCG1**.",
        "**LCAT (lecithin–cholesterol acyltransferase, activated by apo A-I)** esterifies the cholesterol with a fatty acid from lecithin → the ester moves into the core → the disc becomes a **spherical HDL₃ → HDL₂**. This trapping keeps the gradient for further efflux.",
        "**Delivery to the liver: directly by SR-B1 (selective uptake of the esters without degrading the particle)**, or **indirectly via CETP, which exchanges HDL cholesteryl esters for triacylglycerols of VLDL/LDL** — so cholesterol returns inside apo-B particles.",
        "HDL additionally: **antioxidant (paraoxonase), anti-inflammatory, anti-thrombotic, endothelium-protective, supplies apo C-II and E to other particles**.",
        "The nuance to state: **low HDL is a strong risk marker, but drugs that only raise HDL (niacin, CETP inhibitors) have not reduced events** — what matters is functional efflux capacity, not the number."
      ],
      cn: "HDL 通路四步：新生盘状 HDL→ABCA1 吸收游离胆固醇→LCAT 酯化变球状→经 SR-B1 或 CETP 回肝。Tangier 病是 ABCA1 缺陷。最后一句关于『升 HDL 药物无效』能显示理解深度。" },
    { h: "5 · Electrophoresis and laboratory evaluation", hcn: "脂蛋白电泳与实验室判读",
      points: [
        "On agarose at pH 8.6 the particles separate by **surface charge (given by the apolipoproteins)**: **chylomicrons stay at the origin, LDL = β, VLDL = pre-β, HDL = α (the fastest)**; IDL appears as a **broad β band** — pathognomonic of **type III hyperlipoproteinaemia**.",
        "Mapping between nomenclatures: **α-lipoprotein = HDL, pre-β = VLDL, β = LDL** — this correspondence is exactly what the examiner asks.",
        "Simple bedside test: **serum left overnight at 4 °C** — a **creamy top layer = chylomicrons**, a **uniformly turbid serum = VLDL**; both together = type V.",
        "Routine panel: **total cholesterol, HDL-C, triacylglycerols, LDL-C (Friedewald: LDL = TC − HDL − TAG/2.2 in mmol/L, invalid if TAG > 4.5 mmol/L or chylomicrons present)**; modern additions **non-HDL cholesterol (= TC − HDL, valid non-fasting), apo B and Lp(a)**.",
        "Preanalytics: **12-hour fast for triacylglycerols**, no alcohol for 24 h, no acute illness or infarction in the previous 6 weeks (lipids fall after infarction), the same posture (upright raises values ~5–10 %)."
      ],
      cn: "电泳位置与超速离心命名的对应（α=HDL、pre-β=VLDL、β=LDL、原点=乳糜微粒）；冷藏试验；Friedewald 公式的限制；采血前提（禁食 12 小时、心梗后 6 周内不测）。" },
    { h: "6 · Medical importance", hcn: "医学意义",
      points: [
        "**Atherogenic = every particle containing apo B**: LDL (especially **small dense LDL**, which penetrates the intima easily and is oxidised readily), **remnants**, and **Lp(a)**. The causal role of LDL is proved by genetics (familial hypercholesterolaemia, PCSK9 variants) and by trials.",
        "**Genetic diseases to name:** **familial hypercholesterolaemia** (LDL receptor/apo B/PCSK9), **type III dysbetalipoproteinaemia** (apo E2/E2), **familial chylomicronaemia** (LPL or apo C-II — risk of pancreatitis, not of atherosclerosis), **abetalipoproteinaemia** (MTP — no chylomicrons/VLDL, fat malabsorption, vitamin E deficiency, acanthocytes), **Tangier disease** (ABCA1), **LCAT deficiency** (corneal opacity, fish-eye disease).",
        "**Secondary dyslipidaemias:** diabetes (**TAG ↑, HDL ↓, small dense LDL**), hypothyroidism (LDL ↑ — always check TSH before treating), nephrotic syndrome, cholestasis (**Lp-X**), alcohol (TAG ↑), obesity, drugs.",
        "**Therapeutic targets follow the biochemistry:** **statins** (HMG-CoA reductase → more LDL receptors), **ezetimibe** (NPC1L1), **PCSK9 inhibitors/inclisiran** (receptor recycling), **bile-acid sequestrants**, **fibrates and omega-3** (PPARα, TAG), **volanesorsen/olezarsen** (apo C-III), **evinacumab** (ANGPTL3).",
        "One-sentence summary for the examiner: **the medical importance of lipoproteins is that they determine how much cholesterol is delivered to the arterial wall (apo B particles) and how much is taken away (HDL) — and every lipid-lowering drug acts at one identified step of that traffic.**"
      ],
      cn: "医学意义三块：致病颗粒（含 apoB，尤其小而密 LDL、残粒、Lp(a)）、遗传病名单、继发性血脂异常（先查甲状腺！）、以及药物靶点。最后用那句总结收尾。" }
  ],
  numbers: [
    "Densities: chylomicron **< 0.95**, VLDL **0.95–1.006**, IDL **1.006–1.019**, LDL **1.019–1.063**, HDL **1.063–1.21 g/mL**",
    "Half-life: chylomicron **~5 min**, VLDL **1–3 h**, LDL **2–3 days**",
    "Desirable: TC **< 5.0**, LDL-C **< 3.0 (very high risk < 1.4)**, HDL-C **> 1.0 (M) / 1.2 (F)**, TAG **< 1.7 mmol/L**",
    "Friedewald invalid above TAG **4.5 mmol/L**; pancreatitis risk above TAG **10 mmol/L**",
    "One apo B-100 per LDL particle → **apo B = particle number**"
  ],
  clinic: [
    "**Familial hypercholesterolaemia** — tendon xanthomas, early infarction, 1:250",
    "**Familial chylomicronaemia** — milky serum, eruptive xanthomas, **acute pancreatitis**, no atherosclerosis",
    "**Abetalipoproteinaemia** — steatorrhoea, acanthocytes, vitamin E deficiency with ataxia and retinopathy",
    "**Check TSH, glucose, creatinine, liver tests and urine protein** before treating any dyslipidaemia",
    "**Lp(a)** — measure once; high values explain premature disease with normal LDL"
  ],
  traps: [
    "Chylomicrons carry **apo B-48**, VLDL/LDL **apo B-100** — the same gene, edited RNA",
    "**LPL needs apo C-II**; hepatic lipase and LPL are different enzymes at different sites",
    "HDL is not simply 'good cholesterol' — what matters is **cholesterol efflux**, and drugs raising HDL failed",
    "LDL is not filtered from blood into the wall by concentration alone — it is **retained by proteoglycans and then modified**",
    "Do not confuse the two nomenclatures: **pre-β is VLDL, β is LDL, α is HDL**"
  ],
  terms: [
    ["apolipoprotein", "载脂蛋白"], ["lipoprotein lipase", "脂蛋白脂酶"], ["remnant", "残粒"],
    ["LCAT", "卵磷脂胆固醇酰基转移酶"], ["CETP", "胆固醇酯转运蛋白"], ["ABCA1", "ATP 结合盒转运体 A1"],
    ["scavenger receptor", "清道夫受体"], ["reverse cholesterol transport", "胆固醇逆向转运"],
    ["small dense LDL", "小而密 LDL"], ["Lp(a)", "脂蛋白(a)"]
  ]
},
b: {
  titleEN: "Biochemistry of the heart, energy metabolism of the myocardium. Biochemical markers of hypoxic myocardial injury (ANP, BNP, troponins). Metabolism of nitric oxide.",
  titleCN: "心脏生物化学与心肌能量代谢 · 心肌缺氧损伤的生化标志物（ANP、BNP、肌钙蛋白）· 一氧化氮代谢",
  opener: "The myocardium is an **obligate aerobic organ**: it works continuously, has almost no anaerobic reserve, extracts **60–70 % of the oxygen from coronary blood at rest**, and can therefore increase supply only by **coronary vasodilatation** — which is why ischaemia translates so directly into biochemical damage.",
  openerCN: "心肌是严格需氧的器官：持续做功、几乎没有无氧储备、静息时就从冠脉血中摄取 60–70% 的氧，因此只能靠冠脉扩张来增加供应——这解释了缺血为何直接转化为生化损伤。",
  spine: [
    "心肌的能量底物谱与其可变性（脂肪酸为主）",
    "有氧代谢的结构基础：线粒体密度、肌红蛋白、磷酸肌酸穿梭",
    "缺血时的代谢改变（无氧糖酵解、酸中毒、钙超载、ATP 崩溃）",
    "坏死标志物：肌钙蛋白、CK-MB、肌红蛋白的时间曲线",
    "心衰标志物：ANP/BNP/NT-proBNP 的生成与判读",
    "一氧化氮：合成、cGMP 通路、代谢与失活",
    "临床：硝酸酯、他汀、心梗诊断标准"
  ],
  blocks: [
    { h: "1 · Energy substrates of the myocardium", hcn: "心肌的能源物质",
      points: [
        "**The heart is an omnivore but prefers fatty acids: 60–70 % of ATP comes from β-oxidation** (free fatty acids and those from VLDL/chylomicrons via LPL), the rest from **glucose and lactate (~30 %)**, plus ketone bodies in starvation and diabetes, and a little amino acid.",
        "**Lactate is a fuel, not a waste product, for the heart:** it takes up lactate produced by exercising muscle (MCT transporters, LDH₁/H₄ isoenzyme that favours lactate → pyruvate).",
        "Substrate choice shifts with the situation: **after a meal (insulin) more glucose; in fasting and exercise more fatty acids; in ischaemia the heart is forced to glucose because β-oxidation needs oxygen**; the failing heart re-expresses a fetal, more glycolytic pattern.",
        "**Randle cycle:** fatty-acid oxidation raises acetyl-CoA and citrate → **inhibits PDH and PFK-1** → glucose oxidation falls; conversely, insulin/glucose raise malonyl-CoA → **inhibit CPT-1** → less β-oxidation.",
        "Structural basis: **mitochondria occupy 30–40 % of the cardiomyocyte volume**, high **myoglobin** content, dense capillary network (one capillary per fibre), and the **creatine phosphate/creatine kinase shuttle** transferring energy from mitochondria to myofibrils (falling creatine phosphate is an early marker of ischaemia)."
      ],
      cn: "底物谱：脂肪酸 60–70%、葡萄糖与乳酸约 30%；心肌把乳酸当燃料；Randle 循环解释底物切换；线粒体占 30–40% 体积＋磷酸肌酸穿梭。" },
    { h: "2 · Ischaemia — what happens biochemically", hcn: "缺血时的代谢级联",
      points: [
        "Oxygen falls → **oxidative phosphorylation stops → ATP falls → anaerobic glycolysis is switched on** (AMP → AMPK, more GLUT4 and PFK) but yields only ~5 % of the needed ATP.",
        "**Lactate and H⁺ accumulate → intracellular acidosis → glycolysis itself is inhibited (PFK-1 is H⁺-sensitive)** — the metabolic dead end; the acid also reduces contractility (H⁺ competes with Ca²⁺ on troponin C).",
        "**Ion pumps fail: Na⁺/K⁺-ATPase and SERCA stop → Na⁺ rises → the Na⁺/Ca²⁺ exchanger reverses → cytosolic and mitochondrial Ca²⁺ overload** → activation of proteases (calpains) and phospholipases → membrane damage.",
        "**Reperfusion** adds injury: a **burst of ROS** (xanthine oxidase, mitochondria), Ca²⁺ paradox, opening of the **mPTP**, and cell death by necrosis and apoptosis. **Stunning** (reversible) and **hibernation** (chronic low-flow adaptation) are the sub-lethal states.",
        "Irreversibility appears after **~20–30 minutes** of complete ischaemia; loss of membrane integrity is what releases the markers into blood — *this is the link between the pathophysiology and the laboratory*."
      ],
      cn: "缺血级联：ATP↓→无氧糖酵解→乳酸与 H⁺→糖酵解自我抑制→离子泵失效→钠钙交换体逆转→钙超载→蛋白酶/磷脂酶→膜破坏→标志物入血（约 20–30 分钟不可逆）。" },
    { h: "3 · Markers of necrosis", hcn: "坏死标志物（时间曲线要背）",
      points: [
        "**Cardiac troponins T and I are the standard**: cardiac-specific isoforms (different genes from skeletal muscle), released from the **cytosolic pool first, then the structural pool**. **Rise 3–4 h (high-sensitivity assays 1–2 h), peak 12–48 h, remain elevated 7–14 days.** They are so sensitive that the diagnosis now requires **a rise and/or fall with at least one value above the 99th percentile**, plus clinical evidence of ischaemia.",
        "**Troponin can be elevated without infarction** — myocarditis, pulmonary embolism, heart failure, sepsis, renal failure, tachyarrhythmia, cardiotoxic chemotherapy: it marks **myocardial injury**, not necessarily infarction of atherothrombotic origin. Saying this distinguishes a good answer.",
        "**CK-MB** — rises 4–6 h, peaks 24 h, **normal by 48–72 h**: no longer needed for diagnosis but useful for **re-infarction** and for sizing; **CK-MB mass** or the CK-MB/total CK ratio (> 6 % suggests cardiac origin).",
        "**Myoglobin** — the earliest (1–3 h) but not cardiac-specific; **LDH₁ > LDH₂ 'flip'** and AST are historical.",
        "The rule to quote: **the earliest is myoglobin, the most specific and the standard is troponin, and CK-MB is the one that normalises soon enough to detect re-infarction.**"
      ],
      cn: "肌钙蛋白（3–4 h 升、12–48 h 峰、7–14 天）＋『升高不等于心梗』这句话；CK-MB 48–72 h 归正常故用于再梗；肌红蛋白最早但不特异。诊断标准是『动态变化＋超过 99 百分位』。" },
    { h: "4 · Natriuretic peptides — ANP and BNP", hcn: "利钠肽：ANP 与 BNP",
      points: [
        "**ANP** is stored in granules of the **atrial** myocytes and released on **atrial stretch (volume overload)**; **BNP** is synthesised mainly in the **ventricle** in response to **wall stress and pressure overload** — originally isolated from brain, hence the name.",
        "**BNP is made as preproBNP → proBNP(1–108), cleaved by corin/furin into the active BNP(1–32) and the inactive NT-proBNP(1–76)**. Both are measured; **NT-proBNP has a longer half-life (60–120 min vs ~20 min) and is more dependent on renal function**.",
        "Actions (all opposing the renin–angiotensin–aldosterone system): **natriuresis and diuresis, vasodilatation, inhibition of renin and aldosterone, inhibition of sympathetic tone, antifibrotic and antihypertrophic effects**. Receptors **NPR-A/NPR-B are guanylate cyclases → cGMP**; degradation by **neprilysin** and by NPR-C clearance receptors.",
        "**Clinical use: exclusion of heart failure in acute dyspnoea (a normal BNP/NT-proBNP has a very high negative predictive value)**, prognosis and monitoring. Cut-offs to quote: **BNP < 100 ng/L, NT-proBNP < 125 ng/L (chronic setting) makes heart failure unlikely**; values rise with **age, renal failure, atrial fibrillation, and fall in obesity**.",
        "Therapeutic exploitation: **sacubitril inhibits neprilysin** so that natriuretic peptides survive longer (combined with valsartan; note that BNP then rises while NT-proBNP falls — a classic exam catch)."
      ],
      cn: "ANP=心房容量负荷、BNP=心室压力/壁张力；proBNP 裂解成 BNP 与 NT-proBNP；作用是对抗 RAAS，经 NPR-A→cGMP；临床主要用于『排除』心衰；沙库巴曲抑制脑啡肽酶会让 BNP 升高而 NT-proBNP 下降。" },
    { h: "5 · Metabolism of nitric oxide", hcn: "一氧化氮的代谢",
      points: [
        "**Synthesis: L-arginine + O₂ + NADPH → citrulline + NO•, by NO synthase** with FAD, FMN, haem and **tetrahydrobiopterin (BH₄)**; isoforms **eNOS (endothelium, Ca²⁺/calmodulin-dependent, activated by shear stress, acetylcholine, bradykinin), nNOS (neurons, also gastric NANC nerves), iNOS (macrophages, induced by cytokines, Ca²⁺-independent, huge output)**.",
        "**Action: NO diffuses into the smooth-muscle cell → activates soluble guanylate cyclase (its haem binds NO) → cGMP → protein kinase G → lower intracellular Ca²⁺ and dephosphorylation of myosin light chain → vasodilatation.** cGMP is degraded by **phosphodiesterase 5** — the target of sildenafil.",
        "**Other effects:** inhibition of platelet aggregation and adhesion, inhibition of leukocyte adhesion and smooth-muscle proliferation, neurotransmission, penile erection, gastric emptying, and — through iNOS — **microbial killing**.",
        "**Inactivation and metabolism:** NO reacts with **oxyhaemoglobin → nitrate + methaemoglobin** (half-life seconds), with **superoxide → peroxynitrite** (damaging), with thiols → **S-nitrosothiols** (a transport/storage form); final products **nitrite and nitrate** are excreted in urine and are used as a laboratory index of NO production. A **nitrate–nitrite–NO reduction pathway** works in hypoxia (dietary nitrate from vegetables).",
        "**Endothelial dysfunction** = less NO available: **eNOS uncoupling when BH₄ or arginine is short (the enzyme then makes superoxide)**, oxidative destruction of NO, and the endogenous inhibitor **ADMA** (raised in renal failure). This is the earliest step of atherosclerosis and hypertension.",
        "**Pharmacology:** **nitroglycerin and other organic nitrates are NO donors** (bioactivated by mitochondrial ALDH2 — tolerance develops); **sodium nitroprusside** (also releases cyanide); **PDE5 inhibitors** (contraindicated together with nitrates — profound hypotension); **inhaled NO** in pulmonary hypertension of the newborn; **L-NMMA** as an experimental inhibitor; in sepsis massive **iNOS** activity causes refractory hypotension."
      ],
      cn: "NOS 三型→NO→可溶性鸟苷酸环化酶→cGMP→PKG→血管舒张；失活主要与氧合血红蛋白反应生成硝酸盐＋高铁血红蛋白；与超氧化物反应生成过氧亚硝酸盐；BH4 不足致 eNOS 解偶联；硝酸酯类与 PDE5 抑制剂不可合用。" },
    { h: "6 · Putting it together clinically", hcn: "临床整合",
      points: [
        "**Definition of myocardial infarction (universal definition): rise and/or fall of cardiac troponin with at least one value > 99th percentile PLUS evidence of ischaemia** (symptoms, ECG changes, imaging, or thrombus).",
        "**Type 1** infarction = plaque rupture and thrombosis; **type 2** = supply–demand mismatch (tachycardia, anaemia, hypotension, spasm) — the biochemistry is identical, the therapy is not.",
        "Metabolic therapy targets: **oxygen supply (nitrates, revascularisation), demand (β-blockers), substrate shift (trimetazidine inhibits fatty-acid oxidation and improves glucose use)**, prevention of remodelling (**ACE inhibitors, sacubitril/valsartan, aldosterone antagonists**).",
        "**Heart failure laboratory panel:** natriuretic peptides, renal function and electrolytes (**hyponatraemia is a poor prognostic sign**), liver tests (congestion), iron status (**iron deficiency is common and worth treating**), troponin for injury.",
        "The clean closing sentence: **the failing or ischaemic myocardium tells us biochemically what it lacks — troponin says the membrane has broken, BNP says the wall is stretched, and lactate says the mitochondria have stopped.**"
      ],
      cn: "心梗定义（肌钙蛋白动态变化＋缺血证据）、1 型与 2 型的区别、心衰的检验组合；最后一句总结把三个标志物的含义串起来。" }
  ],
  numbers: [
    "Myocardial oxygen extraction **60–70 %** at rest; coronary flow **~250 mL/min (5 % of cardiac output)**",
    "Fuel: fatty acids **60–70 %**, glucose + lactate **~30 %**; mitochondria **30–40 %** of cell volume",
    "Troponin: rise **3–4 h**, peak **12–48 h**, elevated **7–14 days**; CK-MB normal by **48–72 h**; myoglobin **1–3 h**",
    "**BNP < 100 ng/L, NT-proBNP < 125 ng/L** make chronic heart failure unlikely; NT-proBNP half-life **60–120 min**",
    "Irreversible myocyte injury after **~20–30 min** of complete ischaemia"
  ],
  clinic: [
    "**Troponin elevation without infarction** — myocarditis, pulmonary embolism, sepsis, renal failure",
    "**Nitrates + PDE5 inhibitors = contraindicated** (severe hypotension); nitrate tolerance via ALDH2",
    "**Sacubitril/valsartan** — neprilysin inhibition raises BNP but lowers NT-proBNP",
    "**Statins** have an NO-mediated pleiotropic effect (up-regulate eNOS) beyond lipid lowering",
    "**Sepsis** — iNOS-driven vasodilatation and hypotension; methylene blue as a rescue (inhibits guanylate cyclase)"
  ],
  traps: [
    "Lactate is a **fuel** for the heart, not merely waste",
    "Troponin marks **injury**, not automatically atherothrombotic infarction",
    "**NT-proBNP is the inactive fragment**; BNP is the hormone — and neprilysin inhibition moves them in opposite directions",
    "NO acts through **cGMP**, not cAMP; sildenafil blocks the **degradation** of cGMP, it is not an NO donor",
    "In ischaemia glycolysis is limited by **acidosis and NAD⁺**, so 'the heart just switches to anaerobic metabolism' is not an adequate answer"
  ],
  terms: [
    ["myocardial ischaemia", "心肌缺血"], ["Randle cycle", "Randle 循环"], ["creatine kinase shuttle", "肌酸激酶穿梭"],
    ["cardiac troponin", "心肌肌钙蛋白"], ["natriuretic peptide", "利钠肽"], ["NT-proBNP", "N 端 B 型利钠肽原"],
    ["neprilysin", "脑啡肽酶"], ["nitric oxide synthase", "一氧化氮合酶"], ["soluble guanylate cyclase", "可溶性鸟苷酸环化酶"],
    ["endothelial dysfunction", "内皮功能障碍"], ["stunning / hibernation", "顿抑/冬眠心肌"]
  ]
}
});
