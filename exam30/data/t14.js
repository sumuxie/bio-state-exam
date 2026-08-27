window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 14,
a: {
  titleEN: "Metabolism of iron. Synthesis and degradation of haem. Porphyrias. Bilirubin and hyperbilirubinaemia — principles of differential diagnosis.",
  titleCN: "铁代谢 · 血红素的合成与降解 · 卟啉病 · 胆红素与高胆红素血症的鉴别诊断",
  opener: "Iron is **essential and toxic at the same time**, so it is never free: it is always bound (transferrin, ferritin, haem) and the body has **no regulated route of excretion — absorption is the only control point, governed by hepcidin**.",
  openerCN: "铁既必需又有毒，因此从不以游离形式存在（总是结合在转铁蛋白、铁蛋白或血红素上）；人体没有可调节的排铁途径——唯一的调控点是吸收，由铁调素掌控。",
  spine: [
    "铁的分布、吸收与调节（DMT1、铁转运蛋白、铁调素）",
    "运输与储存：转铁蛋白、铁蛋白、血清铁指标的判读",
    "血红素合成八步：起点 ALA 合酶、部位（线粒体↔胞质）、调节",
    "卟啉病：急性肝型 vs 皮肤型的区分",
    "血红素降解：胆红素的生成、结合、肠肝循环",
    "黄疸的三类鉴别（肝前、肝性、肝后）",
    "新生儿黄疸与遗传性高胆红素血症"
  ],
  blocks: [
    { h: "1 · Iron — absorption and its regulation", hcn: "铁的吸收与调节",
      points: [
        "Total body iron **3–5 g: ~65 % in haemoglobin, ~10 % in myoglobin and enzymes, ~25 % stored as ferritin/haemosiderin (liver, spleen, marrow)**; only ~0.1 % circulates on transferrin, yet that pool turns over ~10 times a day.",
        "**Losses are unregulated and small: ~1 mg/day** (desquamation, gut cells), **~2 mg/day in menstruating women**; therefore **absorption (1–2 mg/day, ~10 % of intake) must match losses**.",
        "Absorption in the **duodenum**: **haem iron** (from meat) is absorbed as an intact haem molecule (HCP1) and is far more efficient; **non-haem Fe³⁺ must first be reduced to Fe²⁺ (duodenal cytochrome b, vitamin C, gastric acid)** and enters through **DMT1**. Inhibited by phytates, tannins, calcium, PPI therapy.",
        "In the enterocyte iron is either stored in **ferritin (and lost when the cell is shed) or exported through FERROPORTIN**, then oxidised by **hephaestin/caeruloplasmin** to Fe³⁺ and loaded on transferrin.",
        "**Hepcidin is the master hormone** — made by the liver, raised by **iron stores and by inflammation (IL-6)**, lowered by **anaemia, hypoxia and erythropoietic activity (erythroferrone)**. **Hepcidin binds ferroportin and degrades it → iron is trapped in enterocytes and macrophages.** This single mechanism explains both **anaemia of chronic disease** (high hepcidin) and **hereditary haemochromatosis** (low hepcidin, HFE mutation)."
      ],
      cn: "先说分布与丢失（不可调节，每天 1–2 mg）→ 吸收（血红素铁 vs 非血红素铁、DMT1、需 Fe²⁺）→ 铁蛋白/铁转运蛋白 → 铁调素是总开关（炎症升高、缺铁降低）。" },
    { h: "2 · Transport, storage and the laboratory panel", hcn: "运输、储存与检验判读",
      points: [
        "**Transferrin** (a β-globulin) carries **2 Fe³⁺**, delivers iron by receptor-mediated endocytosis (**TfR1**, acidified endosome releases iron); normally **~30 % saturated**.",
        "**Ferritin** — 24 subunits, holds up to **4500 Fe³⁺** as ferrihydrite; **serum ferritin reflects stores but is an acute-phase protein**; **haemosiderin** is its partly degraded, insoluble aggregate seen in overload.",
        "**Iron-deficiency anaemia: ferritin ↓ (the earliest and most specific), serum iron ↓, transferrin/TIBC ↑, saturation ↓, sTfR ↑**, microcytic hypochromic red cells, **RDW ↑**.",
        "**Anaemia of chronic disease: serum iron ↓, transferrin ↓, saturation ↓ or normal, FERRITIN NORMAL OR HIGH, sTfR normal** — the pattern that distinguishes it, explained entirely by hepcidin.",
        "**Overload (haemochromatosis, repeated transfusion): saturation > 45–50 %, ferritin very high**; free iron catalyses the **Fenton reaction** → liver cirrhosis, diabetes ('bronze diabetes'), cardiomyopathy, arthropathy, hypogonadism; treated by **venesection** or chelation (deferoxamine, deferasirox).",
        "Regulation inside the cell: **IRE/IRP system** — when iron is low, IRP binds the iron-responsive elements → **ferritin mRNA is not translated and transferrin-receptor mRNA is stabilised** (and vice versa). The IRP is aconitase without its Fe-S cluster — an elegant sensor."
      ],
      cn: "三张表要能背：缺铁性贫血、慢性病贫血、铁过载的铁代谢指标组合。再加 IRE/IRP 的调控逻辑（缺铁时抑制铁蛋白翻译、稳定转铁蛋白受体 mRNA）。" },
    { h: "3 · Haem synthesis", hcn: "血红素的合成（八步、两个区室）",
      points: [
        "Site: **85 % in erythroid marrow, most of the rest in the liver** (for cytochromes P450). The pathway **starts and ends in the mitochondrion, the middle steps are cytosolic**.",
        "**Step 1, rate-limiting: succinyl-CoA + glycine → δ-aminolevulinic acid (ALA), by ALA SYNTHASE (needs pyridoxal phosphate)** in the mitochondrion. **ALAS1 (liver) is feedback-inhibited by haem** at the level of transcription, translation and mitochondrial import; **ALAS2 (erythroid) is regulated by iron via an IRE** instead.",
        "Cytosol: **2 ALA → porphobilinogen (ALA dehydratase, a zinc enzyme — inhibited by LEAD)** → 4 PBG → hydroxymethylbilane (PBG deaminase) → uroporphyrinogen III (with cosynthase) → coproporphyrinogen III (decarboxylase).",
        "Back in the mitochondrion: coproporphyrinogen oxidase → protoporphyrinogen IX → oxidase → **protoporphyrin IX**, and finally **FERROCHELATASE inserts Fe²⁺ → HAEM** (also inhibited by lead).",
        "**Lead poisoning therefore blocks two enzymes (ALA dehydratase and ferrochelatase)** → ALA and **zinc protoporphyrin** accumulate, giving microcytic anaemia with **basophilic stippling**, abdominal colic and neuropathy.",
        "Degradation of the regulation is what matters clinically: drugs that induce **cytochrome P450** (barbiturates, phenytoin, rifampicin, sulfonamides, alcohol, oestrogens) consume hepatic haem → **de-repression of ALA synthase** → attacks of acute porphyria."
      ],
      cn: "八步的关键是记住三件事：ALA 合酶是限速步（琥珀酰 CoA＋甘氨酸、需 PLP、被血红素负反馈）；铅抑制 ALA 脱水酶与亚铁螯合酶；诱导 P450 的药物会诱发急性卟啉病。" },
    { h: "4 · Porphyrias", hcn: "卟啉病（按两个问题分类）",
      points: [
        "Two questions sort them all: **(1) where — hepatic or erythropoietic; (2) how they present — acute neurovisceral attacks or photosensitivity.**",
        "**Acute hepatic porphyrias (no photosensitivity except VP/HCP): acute intermittent porphyria (PBG deaminase)** — the classic; attacks of **abdominal pain, vomiting, tachycardia, hypertension, peripheral neuropathy, psychiatric symptoms, hyponatraemia (SIADH); urine darkens on standing; ALA and PBG raised in urine**. Triggers: **drugs inducing P450, fasting/low carbohydrate, alcohol, infection, hormonal changes**. Treatment: **glucose/carbohydrate loading and haem arginate** (both suppress ALA synthase), plus new siRNA therapy (givosiran).",
        "**Variegate porphyria and hereditary coproporphyria** — acute attacks **plus** skin fragility (they accumulate porphyrins that reach the skin).",
        "**Cutaneous: porphyria cutanea tarda (uroporphyrinogen decarboxylase)** — the commonest of all; blisters and fragility on sun-exposed skin, hypertrichosis, associated with **alcohol, hepatitis C, iron overload, oestrogens**; treated with venesection or low-dose hydroxychloroquine.",
        "**Erythropoietic protoporphyria (ferrochelatase)** — immediate burning pain on light exposure without blisters; **congenital erythropoietic porphyria (Günther)** — severe mutilating photosensitivity, red teeth, haemolysis.",
        "Mechanism of the photosensitivity: **porphyrins absorb at 400 nm (Soret band) → excited state → singlet oxygen → membrane damage** (topic 5B); the acute attacks are instead attributed to the **neurotoxicity of ALA and to haem deficiency in neurons**."
      ],
      cn: "分类靠两个问题（部位＋表现）。急性间歇性卟啉病：腹痛＋神经精神症状＋尿放置变深＋ALA/PBG 升高，诱因是诱导 P450 的药与禁食，治疗用葡萄糖与血红素精氨酸。皮肤型以迟发性皮肤卟啉病最常见。" },
    { h: "5 · Haem degradation and bilirubin", hcn: "血红素降解与胆红素",
      points: [
        "**~250–350 mg of bilirubin a day, 80 % from senescent erythrocytes** (macrophages of spleen, liver, marrow), 20 % from other haemoproteins and ineffective erythropoiesis.",
        "**Haem → (haem oxygenase, the rate-limiting step, needs O₂ and NADPH) → biliverdin + Fe²⁺ + CO** — this is the **only endogenous source of carbon monoxide** (measurable as COHb in haemolysis) — **→ (biliverdin reductase) → bilirubin**.",
        "**Unconjugated bilirubin is lipophilic and toxic**: it travels **bound to albumin**, is not filtered by the kidney (**never appears in urine**), and can cross the blood–brain barrier of the newborn → **kernicterus**. Drugs that displace it from albumin (sulfonamides, ceftriaxone) are dangerous in neonates.",
        "In the hepatocyte: uptake (OATP) → **conjugation with 2 glucuronic acids by UDP-glucuronosyltransferase (UGT1A1) → bilirubin diglucuronide, water-soluble** → active secretion into bile (**MRP2 — the rate-limiting step of the whole process**).",
        "In the gut bacteria convert it to **urobilinogen**: most is oxidised to **stercobilin (brown stool)**, a small part is reabsorbed (**enterohepatic circulation**) and partly excreted by the kidney as **urobilin (yellow urine)**.",
        "**Terminology to keep straight: unconjugated = indirect; conjugated = direct.** Conjugated bilirubin is water-soluble → **appears in urine (dark urine) whenever it is raised in blood**; a fraction bound covalently to albumin (**δ-bilirubin**) explains why jaundice fades slowly after obstruction is relieved."
      ],
      cn: "降解链：血红素→（血红素加氧酶，产 CO！）→胆绿素→胆红素→与白蛋白结合运输→肝内葡萄糖醛酸化（UGT1A1）→分泌入胆（MRP2 限速）→肠道变尿胆原/粪胆素。未结合=间接、不入尿；结合=直接、入尿。" },
    { h: "6 · Differential diagnosis of hyperbilirubinaemia", hcn: "高胆红素血症的鉴别（答题模板）",
      points: [
        "**Jaundice is visible above ~40–50 µmol/L** (normal total < 17–21 µmol/L, conjugated < 5 µmol/L). First question: **unconjugated or conjugated?**",
        "**Prehepatic (unconjugated): haemolysis, ineffective erythropoiesis, resorption of a haematoma.** Findings: **unconjugated bilirubin ↑, urine has NO bilirubin but MORE urobilinogen, stools dark, LDH ↑, haptoglobin ↓, reticulocytes ↑, anaemia**.",
        "**Hepatic (mixed): hepatitis, cirrhosis, toxic damage, sepsis, and the hereditary conjugation defects.** Findings: **ALT/AST ↑↑, both fractions raised, bilirubin in urine, INR and albumin abnormal if the liver fails**.",
        "**Posthepatic / cholestatic (conjugated): gallstone, tumour of the pancreatic head, stricture, primary biliary cholangitis.** Findings: **conjugated bilirubin ↑, ALP and GGT ↑↑, dark urine, PALE (acholic) stools, pruritus (bile salts), fat and vitamin A/D/E/K malabsorption, prolonged INR that corrects with vitamin K**.",
        "**Hereditary: Gilbert syndrome** (reduced UGT1A1 promoter activity, ~5–10 % of people — mild unconjugated jaundice on fasting, stress or illness, otherwise entirely benign); **Crigler–Najjar I** (no UGT1A1, kernicterus, needs transplantation) and **II** (partial, responds to phenobarbital); **Dubin–Johnson** (MRP2 defect — conjugated, black liver) and **Rotor** (conjugated, benign).",
        "**Neonatal jaundice:** physiological because of a **high erythrocyte turnover, immature UGT1A1 and an active enterohepatic circulation** — appears after 24 h, peaks day 3–5. Pathological if it appears in the first 24 h, rises fast, or is conjugated. **Breast-milk jaundice** prolongs it. Treatment: **phototherapy at ~450 nm converts bilirubin to water-soluble lumirubin** (excreted without conjugation), exchange transfusion in extreme cases."
      ],
      cn: "鉴别模板：先分未结合/结合，再用尿胆红素、尿胆原、粪色、ALT/AST vs ALP/GGT 四项定位。遗传性五个综合征（Gilbert 最常见且良性）。新生儿黄疸的三个原因与蓝光治疗原理。" }
  ],
  numbers: [
    "Body iron **3–5 g**; daily loss/absorption **1–2 mg**; transferrin saturation **~30 %** (overload > 45–50 %)",
    "Ferritin: men **30–300 µg/L**, women **15–150 µg/L**; iron deficiency below ~15–30 µg/L",
    "Bilirubin produced **250–350 mg/day**; serum total **< 17–21 µmol/L**, conjugated **< 5 µmol/L**; jaundice visible above **~40–50 µmol/L**",
    "Haem synthesis: **85 % erythroid marrow**; ALA synthase is the rate-limiting enzyme (needs **PLP**)",
    "Phototherapy uses blue light at **~450 nm**"
  ],
  clinic: [
    "**Anaemia of chronic disease vs iron deficiency** — decided by **ferritin and sTfR** (hepcidin explains both)",
    "**Hereditary haemochromatosis (HFE C282Y)** — cirrhosis, diabetes, cardiomyopathy; treat by venesection",
    "**Lead poisoning** — basophilic stippling, raised ALA and zinc protoporphyrin",
    "**Acute intermittent porphyria** — abdominal pain + neuropsychiatric symptoms + drug trigger; glucose and haem arginate",
    "**Gilbert syndrome** — isolated unconjugated hyperbilirubinaemia during fasting or illness; no treatment needed"
  ],
  traps: [
    "**Unconjugated bilirubin never appears in urine** — it is albumin-bound; 'bilirubinuria' always means the conjugated form",
    "Haem degradation is the **only endogenous source of CO**",
    "Ferritin is an **acute-phase protein** — a normal value does not exclude iron deficiency in inflammation",
    "The body has **no regulated iron excretion** — this is why overload is so damaging",
    "In the acute porphyrias the skin is usually **not** affected (except VP and HCP) — do not lump them with PCT"
  ],
  terms: [
    ["hepcidin", "铁调素"], ["ferroportin", "膜铁转运蛋白"], ["transferrin saturation", "转铁蛋白饱和度"],
    ["ALA synthase", "δ-氨基乙酰丙酸合酶"], ["porphobilinogen", "胆色素原"], ["ferrochelatase", "亚铁螯合酶"],
    ["haem oxygenase", "血红素加氧酶"], ["unconjugated / conjugated bilirubin", "未结合/结合胆红素"],
    ["UDP-glucuronosyltransferase", "尿苷二磷酸葡萄糖醛酸转移酶"], ["kernicterus", "核黄疸"], ["cholestasis", "胆汁淤积"]
  ]
},
b: {
  titleEN: "Structure, function and biochemistry of hormones derived from amino acids and proteins. Principles of hormonal signalling. Selected hormones and their effects.",
  titleCN: "氨基酸衍生类与蛋白质类激素的结构、功能与生化 · 激素信号转导原理 · 重要激素及其作用",
  opener: "Hormones fall into three chemical classes — **peptide/protein, amino-acid derived, and steroid/lipid** — and the **chemistry decides everything else**: whether the hormone is stored, how it travels in blood, where its receptor is, and how fast it acts.",
  openerCN: "激素按化学性质分三类——肽/蛋白类、氨基酸衍生类、类固醇/脂类；化学性质决定其余一切：能否储存、如何在血中运输、受体在哪里、起效多快。",
  spine: [
    "三大化学类别与由此决定的性质对比",
    "肽类激素的生物合成（前体→加工→储存→分泌）",
    "氨基酸衍生激素：儿茶酚胺、甲状腺激素、褪黑素、组胺、5-羟色胺",
    "信号转导 1：G 蛋白偶联受体（cAMP、IP3/DAG/Ca²⁺）",
    "信号转导 2：受体酪氨酸激酶、JAK-STAT、鸟苷酸环化酶、核受体",
    "调节原理：反馈、节律、脉冲分泌、激素浓度与受体调节",
    "重点激素举例与相应的实验室诊断"
  ],
  blocks: [
    { h: "1 · Three chemical classes and what follows from them", hcn: "三大类别与由此推导的性质",
      points: [
        "**Peptide/protein hormones** (insulin, glucagon, GH, PTH, ACTH, TSH, LH/FSH, ADH, oxytocin, calcitonin, leptin, all gut hormones): **hydrophilic → stored in secretory granules, travel free in plasma, short half-life (minutes), act on membrane receptors, effects within seconds to minutes.**",
        "**Amino-acid derivatives:** from **tyrosine — catecholamines (hydrophilic, membrane receptors) and thyroid hormones (lipophilic, carrier proteins, nuclear receptors — the exception that proves the rule)**; from **tryptophan — serotonin and melatonin**; from **histidine — histamine**.",
        "**Steroids (and calcitriol, retinoids): lipophilic → NOT stored (synthesised on demand), carried on binding globulins, long half-life (hours), intracellular/nuclear receptors, effects in hours (transcription).**",
        "Consequences to state explicitly: **a hydrophilic hormone can be given only by injection; a lipophilic one can be swallowed** (thyroxine, prednisone, oral contraceptives). **Only the free fraction is active**, so changes in binding proteins (pregnancy, oestrogens, nephrotic syndrome) change the total but not the free level.",
        "Half-lives to quote: **adrenaline seconds, insulin ~5 min, most peptides minutes, thyroxine 7 days** — which is why T4 is dosed once daily and insulin is not."
      ],
      cn: "三类激素→四个推论（是否储存、运输方式、受体位置、起效速度）。甲状腺激素是『氨基酸衍生但走核受体』的例外，考官很爱问。" },
    { h: "2 · Biosynthesis and processing of peptide hormones", hcn: "肽类激素的合成与加工",
      points: [
        "**Preprohormone → (signal peptide removed in the ER) → prohormone → (cleavage by prohormone convertases in the Golgi/granule) → active hormone + fragments.**",
        "**Insulin is the standard example: preproinsulin → proinsulin → insulin (A chain + B chain, 2 interchain + 1 intrachain disulfide bond) + C-PEPTIDE**, released in equimolar amounts — hence C-peptide as the marker of endogenous secretion.",
        "**POMC (pro-opiomelanocortin) is the example of one precursor giving many hormones: ACTH, α-MSH, β-endorphin, β-lipotropin** — tissue-specific processing decides which. This is why **high ACTH causes hyperpigmentation** (Addison disease, Nelson syndrome).",
        "Other post-translational modifications: **glycosylation** (TSH, LH, FSH, hCG are glycoprotein hormones sharing a common α subunit and differing in the β subunit — the reason hCG can cause hyperthyroidism in pregnancy), **amidation** (needs vitamin C), **γ-carboxylation** (vitamin K, in osteocalcin).",
        "Secretion is by **regulated exocytosis triggered by Ca²⁺**, usually in **pulses** (GnRH, GH, ACTH) and often with a **circadian rhythm** — which is why a single measurement can be uninterpretable and dynamic tests are used."
      ],
      cn: "前体加工路线（前原激素→原激素→激素）；胰岛素与 C 肽、POMC 家族、糖蛋白激素共用 α 亚基——这三个例子足以覆盖考点。" },
    { h: "3 · Amino-acid-derived hormones", hcn: "氨基酸衍生激素",
      points: [
        "**Catecholamines (adrenal medulla, sympathetic neurons): tyrosine → (tyrosine hydroxylase, the rate-limiting step, needs BH₄) → DOPA → (DOPA decarboxylase, PLP) → dopamine → (dopamine β-hydroxylase, vitamin C, inside the vesicle) → noradrenaline → (PNMT, needs SAM and cortisol from the portal supply) → adrenaline.** Inactivated by **COMT and MAO** → **metanephrines and vanillylmandelic acid (VMA)** in urine — the diagnostic test for **phaeochromocytoma**.",
        "**Thyroid hormones:** made on **thyroglobulin** in the follicle: iodide trapped by the **Na⁺/I⁻ symporter (NIS)**, oxidised and coupled by **thyroid peroxidase (TPO)** → **MIT + DIT → T3 and T4**; released by proteolysis, transported on **TBG**, and **T4 is converted to the active T3 by 5'-deiodinase (a selenoenzyme)** in the periphery (topic 30B).",
        "**Serotonin (5-HT)**: tryptophan → 5-hydroxytryptophan (tryptophan hydroxylase, BH₄) → serotonin (decarboxylase, PLP); 90 % of it is in the **enterochromaffin cells of the gut**; degraded by **MAO → 5-HIAA in urine — the marker of carcinoid syndrome**.",
        "**Melatonin**: serotonin → N-acetylserotonin → melatonin in the **pineal gland at night** (darkness → suprachiasmatic nucleus → sympathetic drive); it sets the circadian rhythm.",
        "**Histamine**: histidine → histamine (decarboxylase, PLP), stored in **mast cells and basophils, ECL cells of the stomach**; H1 (allergy, bronchoconstriction), H2 (gastric acid — ranitidine/famotidine), H3/H4 receptors.",
        "Note how many of these need the same two cofactors: **PLP for every decarboxylation, BH₄ for every hydroxylation** — a compact fact worth saying."
      ],
      cn: "四条通路（酪氨酸→儿茶酚胺、酪氨酸→甲状腺激素、色氨酸→5-HT/褪黑素、组氨酸→组胺）＋两个共用辅因子（PLP 脱羧、BH4 羟化）＋三个尿液标志物（甲氧基肾上腺素/VMA、5-HIAA）。" },
    { h: "4 · Signalling I — G-protein-coupled receptors", hcn: "信号转导（一）：G 蛋白偶联受体",
      points: [
        "**GPCR = 7 transmembrane helices**; the ligand changes its conformation → the **heterotrimeric G protein exchanges GDP for GTP on the α subunit** → α-GTP and βγ act on effectors → the intrinsic **GTPase** switches it off. This is the largest receptor family and the target of ~30 % of drugs.",
        "**Gs → adenylate cyclase ↑ → cAMP → protein kinase A** → phosphorylation of enzymes and of **CREB** (gene expression). Users: **glucagon, adrenaline (β), ACTH, TSH, LH/FSH, PTH, ADH (V2), calcitonin**. **Cholera toxin** ADP-ribosylates Gsα so it cannot switch off → massive cAMP → secretory diarrhoea.",
        "**Gi → adenylate cyclase ↓**: somatostatin, adrenaline (α₂), dopamine D2, opioids. **Pertussis toxin** blocks Gi.",
        "**Gq → phospholipase C → PIP₂ → IP₃ (releases Ca²⁺ from the ER) + DAG (activates protein kinase C)**; Ca²⁺ then works through **calmodulin**. Users: **ADH (V1), angiotensin II, TRH, GnRH, oxytocin, adrenaline (α₁), histamine H1**.",
        "Termination and modulation: **phosphodiesterases degrade cAMP/cGMP** (caffeine, sildenafil act here), **GRKs and β-arrestin desensitise** the receptor, and **receptor down-regulation** explains tolerance and the loss of effect in continuous stimulation."
      ],
      cn: "GPCR 三条主线 Gs/Gi/Gq 及各自的第二信使与代表激素；霍乱毒素与百日咳毒素的机制；终止机制（PDE、GRK/β-arrestin、受体下调）。" },
    { h: "5 · Signalling II — enzyme-linked and nuclear receptors", hcn: "信号转导（二）：酶偶联受体与核受体",
      points: [
        "**Receptor tyrosine kinases: insulin, IGF-1, EGF, PDGF, FGF** — ligand binding → dimerisation → autophosphorylation → docking of adaptor proteins → **PI3K/Akt (metabolic) and Ras/MAPK (growth)** pathways. The insulin receptor is a special case: it is **already a dimer held by disulfide bonds** and signals through **IRS proteins**.",
        "**JAK–STAT**: receptors without their own kinase (**growth hormone, prolactin, erythropoietin, leptin, cytokines and interferons**) recruit **JAK**, which phosphorylates **STAT**, which dimerises and goes to the nucleus. (Hence JAK inhibitors in rheumatology and haematology.)",
        "**Guanylate-cyclase-linked: ANP/BNP (membrane receptor NPR-A) and NO (soluble cyclase) → cGMP → protein kinase G.**",
        "**Nuclear (intracellular) receptors: steroids, thyroid hormones, calcitriol, retinoids** — the hormone crosses the membrane, binds the receptor, and the complex binds a **hormone response element**; steroid receptors sit in the cytosol with **HSP90**, thyroid and vitamin D receptors are already on the DNA as **heterodimers with RXR**. Effect: **transcription, therefore slow onset (hours) and long duration.**",
        "**General principles worth stating: amplification** (one hormone molecule → thousands of product molecules), **specificity** (only cells with the receptor respond), **integration** of many signals on the same second messengers, **negative feedback** (hypothalamus–pituitary–target gland axes), **permissive effects** (cortisol for catecholamines, thyroid hormone for growth), and **up/down-regulation of receptors**."
      ],
      cn: "四类：RTK（胰岛素/生长因子）、JAK-STAT（GH、EPO、瘦素、细胞因子）、鸟苷酸环化酶（ANP、NO）、核受体（类固醇/甲状腺/维生素 D）。最后把『放大、特异性、反馈、允许作用、受体调节』五条原理说出来。" },
    { h: "6 · Selected hormones and their laboratory use", hcn: "重点激素与实验室诊断",
      points: [
        "**Insulin and glucagon** — topic 2B; **C-peptide** distinguishes endogenous from injected insulin (factitious hypoglycaemia).",
        "**Growth hormone** — pulsatile, acts partly through **IGF-1** from the liver; excess = **acromegaly** (diagnosed by the failure of GH to suppress in the OGTT, and by raised IGF-1); deficiency by stimulation tests.",
        "**PTH** — raises calcium (bone resorption, renal Ca reabsorption, 1α-hydroxylase) and **lowers phosphate**; **calcitonin** does the opposite and is the marker of medullary thyroid carcinoma (topic 16B).",
        "**ADH (vasopressin)** — V2 receptors → **aquaporin-2** insertion in the collecting duct; deficiency = **central diabetes insipidus** (dilute urine, high plasma osmolality), excess = **SIADH** (hyponatraemia with concentrated urine). **Oxytocin** — uterus and myoepithelium, the classic **positive** feedback.",
        "**Adrenal and thyroid axes**: measure the **pair (hormone + its tropic hormone)** — high TSH with low free T4 = primary hypothyroidism; low ACTH with low cortisol = secondary insufficiency. This 'always measure the pair' rule is the single most useful principle of endocrine laboratory diagnostics.",
        "Dynamic tests exist because of pulsatility: **suppression tests for suspected excess (dexamethasone, OGTT for GH), stimulation tests for suspected deficiency (Synacthen, insulin tolerance test)**."
      ],
      cn: "举例部分按轴来记，并强调『成对测定』原则（激素＋促激素）与动态试验（怀疑过多→抑制试验；怀疑不足→兴奋试验）。" }
  ],
  numbers: [
    "Half-lives: adrenaline **seconds**, insulin **~5 min**, ACTH minutes, **thyroxine ~7 days**, cortisol ~90 min",
    "Insulin and **C-peptide are released equimolarly**; ~50 % of insulin is extracted on first pass through the liver",
    "Glycoprotein hormones (TSH, LH, FSH, hCG) share a common **α subunit**",
    "Cytosolic Ca²⁺ signalling: **10⁻⁷ → 10⁻⁶–10⁻⁵ mol/L**",
    "~**30 %** of all drugs act on GPCRs"
  ],
  clinic: [
    "**Phaeochromocytoma** — plasma/urine **metanephrines**; **carcinoid** — urinary **5-HIAA**",
    "**Cholera toxin (Gs) and pertussis toxin (Gi)** — textbook G-protein diseases",
    "**Pseudohypoparathyroidism (Albright)** — Gsα mutation: PTH is high but the receptor pathway fails",
    "**Acromegaly** — IGF-1 and the OGTT-GH suppression test; **SIADH vs diabetes insipidus** — osmolality pairs",
    "**Levothyroxine** is effective orally because it is lipophilic; insulin is not — chemistry decides the route"
  ],
  traps: [
    "**Thyroid hormones are amino-acid derivatives but behave like steroids** (lipophilic, carrier protein, nuclear receptor)",
    "Steroid hormones are **not stored** — synthesis is the regulated step",
    "Only the **free hormone** is active — total values mislead when binding proteins change",
    "cAMP is the second messenger; **the hormone itself is the first messenger** — do not call the hormone a second messenger",
    "Insulin does **not** use JAK-STAT (that is growth hormone and leptin) — it uses its own receptor tyrosine kinase and IRS"
  ],
  terms: [
    ["preprohormone", "前原激素"], ["prohormone convertase", "激素原转化酶"], ["C-peptide", "C 肽"],
    ["POMC", "阿黑皮素原"], ["G-protein-coupled receptor", "G 蛋白偶联受体"], ["second messenger", "第二信使"],
    ["receptor tyrosine kinase", "受体酪氨酸激酶"], ["JAK-STAT", "JAK-STAT 通路"], ["nuclear receptor", "核受体"],
    ["hormone response element", "激素反应元件"], ["down-regulation", "受体下调"], ["permissive effect", "允许作用"]
  ]
}
});
