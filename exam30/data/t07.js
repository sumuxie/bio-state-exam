window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 7,
a: {
  titleEN: "Structure of monosaccharides. Metabolism of fructose and galactose, enzymatic disorders.",
  titleCN: "单糖的结构 · 果糖与半乳糖的代谢 · 相关酶缺陷病",
  opener: "Fructose and galactose are the two other dietary hexoses; both are handled **almost exclusively by the liver** and both enter glycolysis **below the regulated steps**, which explains why their enzyme defects cause hypoglycaemia and toxic accumulation of phosphorylated intermediates.",
  openerCN: "果糖与半乳糖是膳食中另外两种己糖，几乎全部由肝脏处理，且都在受调控步骤之下进入糖酵解——这解释了它们的酶缺陷为何造成低血糖与磷酸化中间物蓄积中毒。",
  spine: [
    "单糖的结构要点（D/L、端基异构、环化、差向异构、衍生物）",
    "膳食来源与吸收（GLUT5、SGLT1、GLUT2）",
    "果糖代谢三步（果糖激酶→醛缩酶 B→丙糖激酶）",
    "果糖代谢的特点：绕过 PFK-1 → 脂肪肝与高尿酸",
    "果糖代谢病：原发性果糖尿、遗传性果糖不耐受、FBP 酶缺乏",
    "半乳糖代谢（Leloir 途径四步）",
    "半乳糖血症三型与新生儿筛查"
  ],
  blocks: [
    { h: "1 · Structure of monosaccharides — what to draw", hcn: "单糖结构：考官会让你画",
      points: [
        "**Aldoses vs ketoses**: glucose and galactose are **aldohexoses**, fructose is a **ketohexose** (carbonyl at C2), ribose an aldopentose.",
        "**D/L is decided by the last chiral carbon** (C5 in hexoses); nature uses **D-sugars** (and **L-amino acids**). **Epimers**: galactose = C4 epimer of glucose, mannose = C2 epimer.",
        "**Ring forms:** glucose → mostly **β-D-glucopyranose** (all substituents equatorial — the reason it is the most stable and most used sugar in nature); fructose → **furanose** in sucrose, pyranose when free; ribose in nucleotides is always **β-D-ribofuranose**.",
        "**Anomers α/β** at the anomeric carbon; interconversion = **mutarotation**; the anomeric OH is the reactive one — it forms **glycosidic bonds** (O-glycosides in di-/polysaccharides, **N-glycosides** in nucleotides) and it makes a sugar **reducing**.",
        "**Derivatives:** phosphate esters (G6P), **amino sugars** (glucosamine, N-acetylglucosamine, sialic acid), **uronic acids** (glucuronate), **deoxy sugars** (2-deoxyribose, L-fucose), **alditols** (sorbitol, mannitol, inositol), **glycosides**.",
        "Practical drawing tips: Fischer projection for configuration, **Haworth** for the ring, chair conformation for stability; remember **'right in Fischer = down in Haworth'** for the OH groups."
      ],
      cn: "画图三件套：Fischer（构型）→Haworth（环）→椅式。记住 β-D-吡喃葡萄糖全平伏最稳定，核糖是 β-D-呋喃核糖。" },
    { h: "2 · Dietary sources and absorption", hcn: "来源与吸收",
      points: [
        "**Fructose** — fruit, honey, **sucrose** (Glc-Fru) and above all **high-fructose corn syrup** in soft drinks; intake has risen dramatically and is linked to obesity, fatty liver and gout.",
        "**Galactose** — almost exclusively from **lactose** (Gal-Glc) in milk, cleaved by intestinal **lactase**.",
        "Absorption: **glucose and galactose share SGLT1 (secondary active, Na⁺-dependent)**; **fructose uses GLUT5 (facilitated diffusion)**; all three leave the enterocyte by **GLUT2** on the basolateral side. This explains why an oral rehydration solution needs both **glucose and sodium**, and why isolated fructose in large amounts causes osmotic diarrhoea.",
        "Both sugars are extracted by the liver on the first pass, so they hardly raise blood glucose or insulin — **fructose has a low glycaemic index but a high metabolic cost**.",
        "Small amounts of fructose are also made endogenously by the **polyol pathway** (aldose reductase + sorbitol dehydrogenase) — its physiological purpose is the **fructose in seminal fluid** as sperm fuel; its pathological effect is diabetic cataract and neuropathy."
      ],
      cn: "吸收路径三件：SGLT1（葡萄糖/半乳糖，耗钠）、GLUT5（果糖）、GLUT2（基底侧出细胞）。顺带说多元醇途径生成内源性果糖（精液果糖）。" },
    { h: "3 · Fructose metabolism", hcn: "果糖代谢（肝的三步）",
      points: [
        "**(1) Fructokinase (ketohexokinase): fructose + ATP → fructose-1-phosphate.** Liver, kidney, intestine; **very high affinity and no regulation — this is the crucial point**.",
        "**(2) Aldolase B: fructose-1-P → dihydroxyacetone phosphate + glyceraldehyde.**",
        "**(3) Triose kinase: glyceraldehyde + ATP → glyceraldehyde-3-phosphate.** Both trioses then join glycolysis.",
        "**Key consequence: fructose enters glycolysis BELOW phosphofructokinase-1**, so it **bypasses the main regulatory step**. Its metabolism is therefore fast and uncontrolled → abundant acetyl-CoA and glycerol-3-P → **de-novo lipogenesis, VLDL, hypertriacylglycerolaemia and hepatic steatosis**.",
        "**Second consequence: the rapid phosphorylation traps phosphate and consumes ATP → AMP accumulates → AMP deaminase → IMP → degradation to uric acid → hyperuricaemia and gout**, plus lactate production (competes with urate for renal excretion).",
        "In muscle and adipose tissue a minor route exists: **hexokinase phosphorylates fructose to fructose-6-P** (low affinity, inhibited by glucose), which is why the liver dominates."
      ],
      cn: "三步酶名要背；核心结论两条：绕过 PFK-1 → 脂肪合成失控；快速磷酸化耗 ATP/Pi → AMP→尿酸↑。这是果糖『代谢综合征之糖』的分子解释。" },
    { h: "4 · Disorders of fructose metabolism", hcn: "果糖代谢的酶缺陷",
      points: [
        "**Essential fructosuria — fructokinase deficiency.** Benign: fructose accumulates in blood and appears in urine as a **reducing substance that is not glucose** (positive Benedict, negative glucose-oxidase strip). **No treatment needed** — the classic 'harmless' answer.",
        "**Hereditary fructose intolerance — aldolase B deficiency (autosomal recessive).** **Fructose-1-phosphate accumulates and traps phosphate**: ATP falls, **glycogenolysis and gluconeogenesis are inhibited (F-1-P inhibits aldolase A activity and phosphorylase)** → **severe hypoglycaemia, vomiting, hepatomegaly, jaundice, coagulopathy, renal tubular damage** after fructose or sucrose.",
        "Typical history: symptoms start **when the infant is weaned onto fruit or sucrose**; these children develop a strong **aversion to sweets and have famously good teeth**. Treatment: strict exclusion of fructose, sucrose and sorbitol — **intravenous fructose/sorbitol infusions can be lethal**.",
        "**Fructose-1,6-bisphosphatase deficiency** — not a fructose disorder in the strict sense but a **gluconeogenesis defect**: fasting hypoglycaemia with **lactic acidosis and ketosis**, provoked by fasting or infection; treated by avoiding fasting.",
        "Diagnosis: reducing substances in urine plus enzyme/DNA analysis; the older fructose tolerance test is dangerous and abandoned."
      ],
      cn: "三个病对上三个酶：果糖激酶缺乏=良性果糖尿；醛缩酶 B 缺乏=遗传性果糖不耐受（低血糖、肝损、忌果糖蔗糖山梨醇）；FBP 酶缺乏=糖异生障碍（低血糖＋乳酸酸中毒）。" },
    { h: "5 · Galactose metabolism — the Leloir pathway", hcn: "半乳糖代谢（Leloir 途径）",
      points: [
        "**(1) Galactokinase: galactose + ATP → galactose-1-phosphate.**",
        "**(2) Galactose-1-phosphate uridylyltransferase (GALT): galactose-1-P + UDP-glucose → glucose-1-P + UDP-galactose.**",
        "**(3) UDP-galactose-4-epimerase: UDP-galactose ⇌ UDP-glucose** (NAD⁺ as cofactor) — this reaction is **reversible, so the body can make galactose itself**; a galactose-free diet is therefore possible without deficiency.",
        "**(4) Glucose-1-P → glucose-6-P (phosphoglucomutase) → glycolysis or glycogen.**",
        "UDP-galactose is not only an intermediate: it is the **donor of galactose for lactose synthesis in the mammary gland** (lactose synthase = galactosyltransferase + α-lactalbumin), and for **glycoproteins, glycolipids, cerebrosides and glycosaminoglycans**."
      ],
      cn: "四步反应＋每步酶名；第三步差向异构酶可逆是关键（所以无半乳糖饮食安全）。UDP-半乳糖还用于乳糖、糖脂、糖蛋白合成。" },
    { h: "6 · Galactosaemia", hcn: "半乳糖血症",
      points: [
        "**Classic galactosaemia = GALT deficiency (type I), autosomal recessive, ~1:40 000.** Galactose-1-phosphate accumulates in liver, brain, kidney and lens.",
        "Presentation in the **first days of milk feeding**: vomiting, diarrhoea, failure to thrive, **jaundice and hepatomegaly progressing to liver failure**, **renal tubular dysfunction (Fanconi)**, **cataract**, and a characteristic susceptibility to **Escherichia coli sepsis**; untreated survivors have intellectual disability.",
        "**Cataract mechanism:** excess galactose is reduced by **aldose reductase to galactitol**, which is trapped osmotically in the lens — the same chemistry as sorbitol in diabetes.",
        "**Galactokinase deficiency (type II)** — much milder, essentially **cataract only**, no liver or kidney damage (no galactose-1-P is formed — this comparison proves that **galactose-1-phosphate is the toxic metabolite**). **Epimerase deficiency (type III)** — benign peripheral form or a rare severe generalised form.",
        "**Treatment: lifelong lactose- and galactose-free diet**, started immediately; detected by **newborn screening** (Guthrie/Beutler test, or total galactose + GALT activity). Note that even with perfect treatment, ovarian failure and speech/learning problems occur — endogenous production continues.",
        "Contrast with **lactose intolerance**, which is a **digestive** problem (brush-border lactase), harmless, and shows osmotic diarrhoea and a positive **hydrogen breath test** — examiners like to see that you do not confuse the two."
      ],
      cn: "三型半乳糖血症对应三个酶；GALT 型最重（肝、肾、白内障、大肠杆菌败血症），半乳糖激酶型只白内障——由此证明毒性代谢物是 1-磷酸半乳糖。别与乳糖不耐受混淆。" }
  ],
  numbers: [
    "Classic galactosaemia incidence **~1:40 000–60 000**; hereditary fructose intolerance **~1:20 000**",
    "Fructose intake in soft drinks: a 0.5 L drink contains **~25 g** of fructose",
    "Glucose and galactose absorbed by **SGLT1 (2 Na⁺ per sugar)**, fructose by **GLUT5**",
    "Aldohexoses have **16 stereoisomers**; the anomeric carbon is **C1 in aldoses, C2 in ketoses**",
    "Fructose bypasses **PFK-1** — the reason it is lipogenic"
  ],
  clinic: [
    "**Reducing substances in the urine of an infant** = think galactosaemia or fructosuria before diabetes",
    "**Never give fructose or sorbitol infusions** to a patient with suspected hereditary fructose intolerance",
    "**Cataract** in galactokinase deficiency and in diabetes — both through aldose reductase (galactitol/sorbitol)",
    "**Neonatal screening** covers galactosaemia in most countries (topic 18B)",
    "High fructose intake → **hypertriacylglycerolaemia, fatty liver, hyperuricaemia/gout** — a modern public-health link"
  ],
  traps: [
    "Fructose is a **ketose**; its anomeric carbon is **C2**",
    "Fructose enters glycolysis **below PFK-1** — that is the whole point of the question",
    "In hereditary fructose intolerance the damage is done by **fructose-1-phosphate and phosphate trapping**, not by fructose itself",
    "Galactosaemia is **not** the same as lactose intolerance — one is a metabolic disease of the infant, the other a benign digestive condition of adults",
    "The epimerase reaction is reversible, so **galactose is not an essential nutrient**"
  ],
  terms: [
    ["aldose / ketose", "醛糖/酮糖"], ["epimer", "差向异构体"], ["furanose / pyranose", "呋喃糖/吡喃糖"],
    ["fructokinase", "果糖激酶"], ["aldolase B", "醛缩酶 B"], ["hereditary fructose intolerance", "遗传性果糖不耐受"],
    ["Leloir pathway", "Leloir 途径"], ["galactose-1-P uridylyltransferase", "半乳糖-1-磷酸尿苷酰转移酶"],
    ["galactitol", "半乳糖醇"], ["reducing substance", "还原性物质"]
  ]
},
b: {
  titleEN: "Adipose tissue in the postprandial and fasting state, hormonal regulation. Energy storage, heat production, uncouplers of oxidative phosphorylation. Hormones of adipose tissue, PPAR.",
  titleCN: "脂肪组织在餐后与空腹状态的作用 · 激素调节 · 能量储存与产热 · 氧化磷酸化解偶联剂 · 脂肪因子与 PPAR",
  opener: "Adipose tissue is not a passive store but the body's **largest energy reservoir and its largest endocrine organ**: it stores triacylglycerols after a meal under insulin, releases fatty acids in fasting under lipolytic hormones, and secretes **adipokines** that regulate appetite and insulin sensitivity.",
  openerCN: "脂肪组织不是被动仓库，而是体内最大的能量储库，同时也是最大的内分泌器官：餐后在胰岛素作用下储存三酰甘油，空腹在脂解激素作用下释放脂肪酸，并分泌调节食欲与胰岛素敏感性的脂肪因子。",
  spine: [
    "为什么以脂肪储能：能量密度与无水储存",
    "餐后：LPL、葡萄糖→甘油-3-磷酸、酯化",
    "空腹：HSL/ATGL 级联与脂肪酸的去向",
    "激素调节：胰岛素 vs 儿茶酚胺/胰高血糖素/皮质醇/GH/甲状腺素",
    "白色 vs 棕色脂肪；UCP1 与非战栗产热",
    "解偶联剂（内源性与外源性、DNP、阿司匹林）",
    "脂肪因子：瘦素、脂联素、抵抗素、TNF-α、PAI-1",
    "PPAR α/γ/δ 及其药物"
  ],
  blocks: [
    { h: "1 · Why fat is the storage form", hcn: "为什么用脂肪储能",
      points: [
        "**Energy density: 38 kJ/g (9 kcal) for fat versus 17 kJ/g (4 kcal) for carbohydrate and protein**, because fatty acids are far more reduced.",
        "**Fat is stored anhydrously**, glycogen binds ~2 g of water per gram — so a kilo of adipose tissue carries **~7 times** the usable energy of a kilo of hydrated glycogen.",
        "Typical 70 kg man: **~15 kg fat ≈ 550 000 kJ (enough for 2–3 months)**, glycogen only ~500 g ≈ 8000 kJ (one day), protein 6 kg but not a genuine store.",
        "Adipocytes contain a single large lipid droplet coated with **perilipin**, which is the physical gate for lipolysis; the tissue can expand by hypertrophy and hyperplasia.",
        "**Visceral versus subcutaneous fat** is a clinically decisive distinction: visceral fat is more lipolytic, drains into the **portal vein**, and is the fat that produces inflammatory adipokines and insulin resistance."
      ],
      cn: "能量密度 38 vs 17 kJ/g、无水储存、约 15 kg 脂肪够 2–3 个月；再点出内脏脂肪经门静脉、更易脂解、更炎症。" },
    { h: "2 · The postprandial (fed) state", hcn: "餐后状态：储存",
      points: [
        "**Insulin induces and activates lipoprotein lipase (LPL) on the capillary endothelium of adipose tissue**; LPL hydrolyses the triacylglycerols of **chylomicrons and VLDL** → fatty acids enter the adipocyte (apo C-II is the activator).",
        "Inside, fatty acids are activated to **acyl-CoA** and esterified onto **glycerol-3-phosphate**. **The adipocyte has no glycerol kinase**, so glycerol-3-P can come only **from glucose (via DHAP)** — this is why *insulin and glucose are required for fat storage*, and why lipolysis and re-esterification track glucose supply.",
        "Insulin simultaneously **inhibits hormone-sensitive lipase (via PDE3B → cAMP falls)**, stimulates **GLUT4**, and promotes **de-novo lipogenesis** (mainly hepatic in man, then exported as VLDL).",
        "The net result: **fatty acids in, no fatty acids out** — plasma free fatty acids fall to their lowest value after a meal.",
        "Note the opposite regulation of LPL in different tissues: **insulin up-regulates adipose LPL but muscle LPL is up-regulated by fasting/exercise** — the same enzyme, tissue-specifically directed."
      ],
      cn: "餐后三点：LPL 被胰岛素诱导→脂肪酸进入；甘油-3-磷酸只能来自葡萄糖（无甘油激酶）；HSL 被抑制。最后强调脂肪与肌肉 LPL 的相反调节。" },
    { h: "3 · The fasting state — lipolysis", hcn: "空腹状态：脂解",
      points: [
        "**Adipose triglyceride lipase (ATGL) → hormone-sensitive lipase (HSL) → monoacylglycerol lipase** degrade the triacylglycerol stepwise to **3 fatty acids + glycerol**.",
        "Cascade: **adrenaline/noradrenaline (β₁,β₃ receptors), glucagon, ACTH, TSH, GH → Gs → cAMP → PKA → phosphorylation of HSL and of perilipin**; phosphorylated perilipin lets the lipases reach the droplet surface. **α₂-adrenergic receptors inhibit** (Gi) — the reason for regional differences in fat mobilisation.",
        "**Fate of the products: glycerol goes to the liver** (adipose tissue cannot use it — no glycerol kinase) and is **glucogenic**; **fatty acids are carried on albumin** to muscle, heart, liver — where they are oxidised or converted to **ketone bodies**.",
        "Fatty acids from lipolysis do three further things: they **inhibit glucose uptake and use in muscle (Randle cycle)**, they **activate pyruvate carboxylase via acetyl-CoA** in the liver, and they supply the energy for **gluconeogenesis** — the biochemical basis of the whole fasting response (topic 27B).",
        "**Insulin is by far the strongest inhibitor of lipolysis** — a small amount suffices, which is why type 2 diabetics rarely develop ketoacidosis and type 1 diabetics do."
      ],
      cn: "脂解三酶（ATGL→HSL→MGL）；级联经 β 受体→cAMP→PKA→磷酸化 HSL 与 perilipin；甘油回肝生糖、脂肪酸随白蛋白运输。胰岛素是最强抑制因子。" },
    { h: "4 · Brown adipose tissue, UCP1 and uncouplers", hcn: "棕色脂肪、UCP1 与解偶联剂",
      points: [
        "**White adipose tissue** — one droplet, few mitochondria, stores energy. **Brown adipose tissue** — many small droplets, **many mitochondria with cytochromes (hence brown)**, dense sympathetic innervation and capillaries; abundant in newborns (interscapular) and demonstrable in adults by PET.",
        "**Non-shivering thermogenesis:** cold → sympathetic **noradrenaline → β₃ receptor → cAMP → lipolysis + expression of UCP1 (thermogenin)**. **UCP1 is a proton channel of the inner mitochondrial membrane: protons return to the matrix without passing ATP synthase, so the energy of the gradient is released as heat.** Respiration runs at maximal rate, ATP yield falls.",
        "General principle of **uncoupling**: electron transport and phosphorylation are separated → **O₂ consumption ↑, heat ↑, ATP ↓, and the respiratory chain is no longer inhibited by lack of ADP (respiratory control is lost)**.",
        "**Chemical uncouplers: 2,4-dinitrophenol (DNP)** — a lipophilic weak acid that carries protons across the membrane; used illegally for weight loss and **lethal by hyperthermia**; **FCCP/CCCP** in the laboratory; **salicylate in overdose** (hyperthermia, that is why aspirin poisoning causes fever and metabolic acidosis); **valinomycin/gramicidin** as ionophores; **thermogenin** as the physiological one; high-dose **thyroid hormone** increases both coupling proteins and metabolic rate.",
        "Distinguish clearly: **inhibitors of the chain** (rotenone, antimycin, cyanide, CO) stop electron flow and **stop heat production too**; **inhibitors of ATP synthase** (oligomycin) stop respiration secondarily; **uncouplers accelerate respiration while abolishing ATP synthesis**. This trio is a favourite exam question (topic 10A)."
      ],
      cn: "棕色脂肪的 UCP1 是质子漏；解偶联的三个后果（耗氧↑、产热↑、ATP↓）。DNP、水杨酸过量、甲状腺素与抑制剂/寡霉素的区别一定要能对比说清。" },
    { h: "5 · Adipose tissue as an endocrine organ — adipokines", hcn: "脂肪因子（内分泌功能）",
      points: [
        "**Leptin** — secreted in proportion to fat mass; acts on the **hypothalamic arcuate nucleus: inhibits NPY/AgRP (orexigenic) and stimulates POMC/α-MSH (anorexigenic)** → less appetite, more energy expenditure. In common obesity there is **leptin resistance, not deficiency**; true congenital leptin deficiency is rare and treatable with leptin. Leptin also permits puberty and fertility (very low body fat → amenorrhoea).",
        "**Adiponectin** — the 'good' adipokine, **falls with obesity**: activates **AMPK and PPARα** → more fatty-acid oxidation in muscle and liver, **improves insulin sensitivity**, anti-inflammatory and anti-atherogenic.",
        "**Resistin, TNF-α, IL-6** — pro-inflammatory, promote **insulin resistance** (serine phosphorylation of IRS-1); **PAI-1** promotes thrombosis; **angiotensinogen** contributes to hypertension; **aromatase** converts androgens to oestrogens (gynaecomastia in obese men).",
        "This is the biochemical explanation of the **metabolic syndrome**: visceral obesity → high free fatty acids + inflammatory adipokines + low adiponectin → insulin resistance, dyslipidaemia (TAG ↑, HDL ↓), hypertension, prothrombotic state.",
        "Also relevant: **ghrelin** (from the stomach, the only orexigenic hormone, rises before a meal), **PYY, GLP-1, CCK** (satiety) — the appetite side of topic 24B."
      ],
      cn: "瘦素（与脂肪量成正比、作用于弓状核、肥胖者是抵抗）、脂联素（唯一随肥胖下降的『好』因子、经 AMPK 改善胰岛素敏感性）、以及促炎因子群→代谢综合征。" },
    { h: "6 · PPAR — the nuclear receptors of lipid metabolism", hcn: "PPAR 核受体家族",
      points: [
        "**PPAR = peroxisome proliferator-activated receptor**, a **nuclear receptor** that **heterodimerises with RXR** and binds PPRE elements in DNA; the natural ligands are **fatty acids and eicosanoids** — that is, lipids regulate the genes of their own metabolism.",
        "**PPARα** — liver, heart, muscle, kidney: induces **fatty-acid uptake and β-oxidation, ketogenesis, apo A-I/A-II** (raises HDL) and lowers triacylglycerols. **Drugs: fibrates.** Activated in fasting.",
        "**PPARγ** — adipose tissue above all: drives **adipocyte differentiation, lipid storage, adiponectin and GLUT4 expression** → improves insulin sensitivity while promoting (subcutaneous) fat storage. **Drugs: thiazolidinediones/glitazones**, whose side effects (weight gain, oedema, fractures) follow directly from this mechanism.",
        "**PPARδ/β** — muscle: oxidative metabolism, endurance phenotype.",
        "Related transcription factors to mention: **SREBP-1c** (insulin-driven lipogenesis), **SREBP-2** (cholesterol synthesis, topic 11A), **ChREBP** (glucose-driven lipogenesis), **PGC-1α** (mitochondrial biogenesis, cold, exercise).",
        "One clean sentence for the examiner: **PPARα burns fat, PPARγ stores it safely, and both improve the lipid profile — which is why one is a fibrate target and the other a glitazone target.**"
      ],
      cn: "PPAR 与 RXR 二聚、配体是脂肪酸本身；α=燃脂（贝特类）、γ=安全储脂并改善胰岛素敏感性（格列酮类）、δ=肌肉耐力。再带出 SREBP/ChREBP/PGC-1α。" }
  ],
  numbers: [
    "Fat **38 kJ/g (9 kcal)** vs carbohydrate/protein **17 kJ/g (4 kcal)**",
    "70 kg man: fat **~15 kg ≈ 550 MJ**, glycogen **~0.5 kg ≈ 8 MJ**",
    "Brown fat: **UCP1** in the inner mitochondrial membrane; activated by **β₃ receptors**",
    "Plasma free fatty acids: **0.3–0.6 mmol/L** fed, up to **1.5–2 mmol/L** in fasting/stress",
    "Leptin correlates with fat mass; adiponectin **falls** as fat mass rises"
  ],
  clinic: [
    "**Metabolic syndrome** — waist circumference, TAG ↑, HDL ↓, blood pressure ↑, fasting glucose ↑",
    "**2,4-dinitrophenol** poisoning — hyperthermia, sweating, death; also **salicylate overdose** (uncoupling + respiratory alkalosis + metabolic acidosis)",
    "**Glitazones (PPARγ)** and **fibrates (PPARα)** — know which is which and their adverse effects",
    "**Lipodystrophy** (including HIV therapy-associated) — too little adipose tissue also causes severe insulin resistance, proving fat is needed as a safe store",
    "**Congenital leptin deficiency** — the rare obesity that responds to leptin; common obesity does not"
  ],
  traps: [
    "The adipocyte **has no glycerol kinase** — glycerol-3-P must come from glucose; the glycerol released by lipolysis goes to the **liver**",
    "Uncouplers **increase** oxygen consumption while **decreasing** ATP — do not confuse them with respiratory-chain inhibitors",
    "In obesity leptin is **high** (resistance); adiponectin is the one that is **low**",
    "Insulin's antilipolytic effect is its most sensitive action — small amounts already suppress ketogenesis",
    "White fat cannot be described as 'inactive' — it is the largest endocrine organ of the body"
  ],
  terms: [
    ["lipoprotein lipase", "脂蛋白脂酶"], ["hormone-sensitive lipase", "激素敏感性脂肪酶"], ["perilipin", "周脂素"],
    ["non-shivering thermogenesis", "非战栗产热"], ["UCP1 / thermogenin", "解偶联蛋白 1/产热素"],
    ["uncoupler", "解偶联剂"], ["2,4-dinitrophenol", "2,4-二硝基酚"], ["adipokine", "脂肪因子"],
    ["leptin", "瘦素"], ["adiponectin", "脂联素"], ["PPAR", "过氧化物酶体增殖物激活受体"], ["Randle cycle", "Randle 循环"]
  ]
}
});
