window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 30,
a: {
  titleEN: "Application of analytical methods in biochemistry and medicine. Spectrophotometry, potentiometry, chromatography and electrophoresis. The calibration curve method.",
  titleCN: "分析方法在生化与医学中的应用 · 分光光度法 · 电位法 · 色谱 · 电泳 · 标准曲线法",
  opener: "Clinical chemistry rests on a small set of physical principles: **absorption of light (spectrophotometry), a measured potential (potentiometry), separation by partition (chromatography) and by charge (electrophoresis)** — and on one methodological idea that ties them together, the **calibration curve**.",
  openerCN: "临床化学建立在少数几个物理原理之上：光的吸收（分光光度法）、电位测量（电位法）、按分配系数分离（色谱）与按电荷分离（电泳）；把它们串起来的方法学核心是标准曲线。",
  spine: [
    "分光光度法：Lambert–Beer 定律与应用",
    "终点法、动力学法、酶偶联法与试剂盒设计",
    "电位法：离子选择电极、pH 与血气电极",
    "色谱：分类、原理与 HPLC/GC/MS",
    "电泳：原理、类型与临床应用",
    "标准曲线法与定量的其他方式",
    "免疫分析与 POCT；方法的选择与验证"
  ],
  blocks: [
    { h: "1 · Spectrophotometry", hcn: "分光光度法（最常用）",
      points: [
        "**Principle — the LAMBERT–BEER law: A = ε · c · l**, where **A = log(I₀/I)** is the absorbance, **ε** the molar absorption coefficient (L·mol⁻¹·cm⁻¹), **c** the concentration and **l** the path length (usually 1 cm). **Absorbance is proportional to concentration; transmittance is not (it is logarithmic).**",
        "**Instrument: light source (tungsten for visible, deuterium for UV) → monochromator (grating) → cuvette → detector (photodiode).** Quartz cuvettes are needed below 340 nm.",
        "**Limits of validity — worth stating: the law holds only for dilute solutions (roughly A < 1.5–2), monochromatic light, no chemical interaction between molecules, and no fluorescence or turbidity;** deviations come from stray light, high concentrations and **the sample itself (haemolysis, icterus, lipaemia — the three H's again).**",
        "**Key wavelengths to know: NAD(P)H absorbs at 340 nm while NAD(P)⁺ does not — this single fact underlies most enzyme assays; haemoglobin ~415 (Soret), 540 and 578 nm; bilirubin 450 nm; proteins 280 nm (Trp, Tyr) and peptide bonds 205–220 nm; nucleic acids 260 nm (the A260/A280 ratio ~1.8 shows purity).**",
        "**Related techniques: turbidimetry (attenuation) and nephelometry (scattered light) for immunocomplexes; fluorimetry (much more sensitive); atomic absorption spectrometry (metals); flame photometry (historic for Na/K).**"
      ],
      cn: "Lambert–Beer 定律与吸光度/透光率的区别；仪器组成；定律的适用限制与三大干扰；必须记住的波长（NADH 340 nm 是酶法测定的基础、蛋白 280、核酸 260）；比浊法与散射比浊法。" },
    { h: "2 · How assays are actually built", hcn: "测定方式：终点法、动力学法与酶偶联",
      points: [
        "**End-point assay: the reaction runs to completion and the final absorbance is proportional to the analyte** (e.g. total protein by the biuret reaction, cholesterol, creatinine by Jaffé).",
        "**Kinetic assay: the CHANGE of absorbance per minute (ΔA/min) is measured while the reaction is linear — this is how ENZYME ACTIVITIES are determined**, under conditions of substrate saturation so that the rate depends only on the amount of enzyme. Activity is expressed in **katal (mol/s) or U (µmol/min); 1 U = 16.67 nkat**.",
        "**Coupled (indicator) reactions: the reaction of interest produces no measurable signal, so it is coupled to one that does — usually to NAD(P)H at 340 nm.** Classic examples: **glucose by hexokinase + glucose-6-phosphate dehydrogenase; ALT coupled to lactate dehydrogenase; ammonia by glutamate dehydrogenase.**",
        "**Oxidase/peroxidase (Trinder) systems: glucose oxidase, cholesterol oxidase or uricase produce H₂O₂, which with peroxidase oxidises a chromogen to a coloured dye — cheap, robust, and the basis of most routine chemistry and of dry-chemistry strips.**",
        "**Sample handling determines the result as much as the chemistry: the correct tube (fluoride for glucose, EDTA for HbA1c), avoiding haemolysis, timely separation, and blanks (sample blank and reagent blank) to correct for intrinsic colour.**"
      ],
      cn: "三种测定方式：终点法（测终浓度）、动力学法（测 ΔA/min，用于酶活性，单位 katal/U）、偶联指示反应（多用 NADH 340 nm）；Trinder 反应（氧化酶＋过氧化物酶＋显色剂）；空白与样本处理。" },
    { h: "3 · Potentiometry", hcn: "电位法",
      points: [
        "**Principle: the potential difference between an indicator electrode and a reference electrode (usually Ag/AgCl or calomel) is measured at zero current; it follows the NERNST equation, E = E° + (RT/zF)·ln a — so the potential is proportional to the LOGARITHM of the activity of the ion.** A tenfold change in a monovalent ion changes the potential by **~59 mV at 25 °C**.",
        "**Ion-selective electrodes (ISE) are the workhorses: the glass electrode for pH (H⁺), and membrane electrodes for Na⁺, K⁺, Cl⁻, Ca²⁺ (ionised!), Li⁺ and F⁻.**",
        "**Direct versus indirect ISE — a favourite exam trap: DIRECT ISE measures the undiluted sample and therefore reports the true ACTIVITY (used in blood gas analysers); INDIRECT ISE dilutes the sample, so a large volume of lipid or protein gives PSEUDOHYPONATRAEMIA** (topic 18B).",
        "**Blood gas analysis combines three electrodes: the glass electrode for pH, the SEVERINGHAUS electrode for pCO₂ (a pH electrode behind a CO₂-permeable membrane) and the CLARK electrode for pO₂ (amperometric — it measures a current, not a potential).** Bicarbonate and base excess are then **calculated** from the Henderson–Hasselbalch equation.",
        "**Advantages: measures the physiologically active free ion (ionised calcium, free H⁺), needs no reagent, works on whole blood and in point-of-care devices; disadvantages: needs frequent calibration, is temperature-sensitive, and the electrode ages.**"
      ],
      cn: "Nernst 方程与 59 mV/十倍浓度；离子选择电极的种类；直接法 vs 间接法（假性低钠）；血气三电极（玻璃电极、Severinghaus、Clark，注意 Clark 是电流法）；优缺点。" },
    { h: "4 · Chromatography", hcn: "色谱",
      points: [
        "**Principle: separation by repeated partition between a STATIONARY and a MOBILE phase; each substance has its own distribution ratio, so it moves at its own speed and leaves after its characteristic RETENTION TIME (or Rf in planar chromatography).**",
        "**Classification by mechanism: adsorption, partition, ION-EXCHANGE (used for HbA1c and amino acids), SIZE-EXCLUSION/gel filtration (by molecular size), AFFINITY (specific biological binding — used to purify proteins and to measure glycated haemoglobin), and reversed-phase (non-polar stationary phase — the standard in HPLC).**",
        "**By arrangement: planar (paper, thin-layer TLC — cheap screening, e.g. urinary amino acids) and column (HPLC/UPLC with liquid mobile phase, GC with a gas mobile phase for volatile substances).**",
        "**Detection: UV/visible, fluorescence, electrochemical, refractive index and — decisively — MASS SPECTROMETRY. GC-MS and LC-MS/MS are the reference methods of clinical toxicology, newborn screening (acylcarnitines and amino acids from a dried blood spot), steroid profiling and vitamin D measurement.**",
        "**Clinical applications to name: HbA1c (ion-exchange HPLC is the reference), catecholamines and metanephrines, amino acids and organic acids in inherited metabolic disease, therapeutic drug monitoring and drugs of abuse (immunoassay screen, then GC-MS confirmation), vitamins A/D/E, and haemoglobin variants.**"
      ],
      cn: "分配原理与保留时间；按机制分六类（离子交换测 HbA1c、亲和、分子筛、反相）；平面与柱色谱；检测器尤其是质谱（GC-MS、LC-MS/MS 是新生儿筛查与毒物确证的金标准）；临床应用清单。" },
    { h: "5 · Electrophoresis", hcn: "电泳",
      points: [
        "**Principle: charged molecules move in an electric field; the velocity depends on the CHARGE (which depends on pH relative to the pI), the size and shape of the molecule, the field strength, and the properties of the medium (buffer, ionic strength, support).**",
        "**Serum protein electrophoresis at pH 8.6 (all proteins are anions) on agarose or cellulose acetate, then staining and densitometry → five fractions: ALBUMIN, α₁, α₂, β, γ** — with the diagnostic patterns of topic 10B (acute inflammation, cirrhosis with β–γ bridging, nephrotic syndrome, monoclonal spike, α₁-antitrypsin deficiency).",
        "**Variants: IMMUNOFIXATION and immunoelectrophoresis (identify a paraprotein and its light chain), isoelectric focusing (separates by pI in a pH gradient — used for CSF OLIGOCLONAL BANDS in multiple sclerosis and for transferrin isoforms in CDG), SDS-PAGE (by molecular mass only), two-dimensional electrophoresis (proteomics), capillary electrophoresis (fast, automated — increasingly the routine method), and agarose electrophoresis of DNA.**",
        "**Other clinical uses: haemoglobin electrophoresis (HbS, HbC, HbA₂ in thalassaemia), lipoprotein electrophoresis (α = HDL, pre-β = VLDL, β = LDL, origin = chylomicrons), isoenzymes (LDH₁–₅, CK-MB, ALP), and urine protein electrophoresis for Bence-Jones protein.**",
        "**Practical points: heat generated by the current limits the voltage, the buffer determines the pH and therefore the charge, and electro-osmotic flow causes γ-globulins to migrate slightly toward the cathode — the reason the γ fraction appears where it does.**"
      ],
      cn: "原理（电荷、大小、pH 与 pI 的关系）；血清蛋白电泳五条区带与六种典型图；变体（免疫固定、等电聚焦查寡克隆区带、SDS-PAGE、毛细管电泳）；其他应用（血红蛋白、脂蛋白、同工酶、本周蛋白）。" },
    { h: "6 · Calibration and quantification", hcn: "标准曲线与定量",
      points: [
        "**The calibration curve method: measure a series of standards of known concentration, plot signal against concentration, and read the unknown from the line.** For spectrophotometry the plot is usually linear through the origin (**A = ε·l·c**), so a **single-point calibration (a factor)** is often enough; for immunoassays the curve is **sigmoidal (4- or 5-parameter logistic)** and needs many points.",
        "**Requirements: the standards must be in the same matrix as the sample (matrix effect), the curve must cover the whole measuring range, linearity and the limits of detection/quantification must be verified, and the calibrators should be TRACEABLE to a reference material and method (e.g. creatinine to IDMS, HbA1c to IFCC).**",
        "**Alternatives when the matrix interferes: STANDARD ADDITION (add known amounts of analyte to the sample itself) and the INTERNAL STANDARD (a chemically similar compound, ideally a stable isotope, added at the start — indispensable in GC-MS/LC-MS/MS because it corrects for losses during preparation).**",
        "**Quality: internal quality control with control materials on Levey–Jennings charts judged by Westgard rules, external quality assessment, plus validation of precision (CV), trueness (bias), linearity, specificity and carry-over** (topic 18B).",
        "**Choosing a method in practice — the criteria to list: analytical (sensitivity, specificity, precision, range, interference), practical (sample volume, time, cost, automation, stability of reagents) and clinical (does the result change the decision?). Point-of-care testing trades analytical performance for speed and proximity.**",
        "Closing sentence: **every number that reaches the clinician is the product of a physical principle, a calibration and a quality-control system — and interpreting the number responsibly means knowing all three.**"
      ],
      cn: "标准曲线的做法与要求（基质效应、线性范围、溯源性）；基质干扰时用标准加入法或内标（同位素内标是质谱必需）；质控与方法验证；选择方法的三类标准；最后一句总结。" }
  ],
  numbers: [
    "**A = ε·c·l**; the law is reliable up to about **A = 1.5–2**",
    "**NADH absorbs at 340 nm**, NAD⁺ does not — the basis of most enzymatic assays",
    "Nernst: **~59 mV per tenfold change** of a monovalent ion at 25 °C",
    "Protein 280 nm, nucleic acids 260 nm (**A260/A280 ≈ 1.8** = pure DNA), haemoglobin Soret ~415 nm",
    "Enzyme activity units: **1 U = 1 µmol/min = 16.67 nkat**; serum protein electrophoresis runs at **pH 8.6**"
  ],
  clinic: [
    "**Direct vs indirect ISE** — pseudohyponatraemia in hyperlipidaemia and paraproteinaemia",
    "**Blood gas analysis** — pH, pCO₂, pO₂ measured; bicarbonate and base excess calculated",
    "**LC-MS/MS newborn screening** from one dried blood spot; **GC-MS** confirmation in toxicology",
    "**Serum protein electrophoresis and immunofixation** for monoclonal gammopathy; **oligoclonal bands** in MS",
    "**HbA1c by ion-exchange HPLC**, standardised to the IFCC reference method"
  ],
  traps: [
    "**Absorbance, not transmittance, is proportional to concentration**",
    "Potentiometry measures **activity of the free ion**, and its signal is **logarithmic**",
    "The Clark oxygen electrode is **amperometric** (measures current), not potentiometric",
    "A calibration curve is only valid within its **verified range and matrix** — never extrapolate",
    "Enzyme activity is measured under **substrate saturation**, so it reports the amount of enzyme, not its affinity"
  ],
  terms: [
    ["Lambert–Beer law", "朗伯-比尔定律"], ["absorbance / transmittance", "吸光度/透光率"],
    ["molar absorption coefficient", "摩尔吸光系数"], ["kinetic assay", "动力学法"], ["coupled reaction", "偶联反应"],
    ["ion-selective electrode", "离子选择电极"], ["Nernst equation", "能斯特方程"], ["retention time", "保留时间"],
    ["mass spectrometry", "质谱"], ["isoelectric focusing", "等电聚焦"], ["calibration curve", "标准曲线"],
    ["internal standard", "内标"]
  ]
},
b: {
  titleEN: "Structure, function and biochemistry of thyroid hormones. Principles of hormonal signalling. Biological processes regulated by thyroid hormones. Hypothyroidism and hyperthyroidism. Metabolism of iodine.",
  titleCN: "甲状腺激素的结构、功能与生化 · 激素信号原理 · 所调控的生物学过程 · 甲减与甲亢 · 碘代谢",
  opener: "Thyroid hormones are the **only iodinated molecules in the body**: two tyrosine residues coupled inside **thyroglobulin** and iodinated by **thyroid peroxidase**; they are amino-acid derivatives that behave like steroids — **lipophilic, protein-bound, with a NUCLEAR receptor — and they set the basal metabolic rate of almost every tissue**.",
  openerCN: "甲状腺激素是体内唯一含碘的分子：在甲状腺球蛋白内由两个酪氨酸残基经甲状腺过氧化物酶碘化后偶联而成；它们虽属氨基酸衍生物，行为却像类固醇——亲脂、与蛋白结合、作用于核受体，并设定几乎所有组织的基础代谢率。",
  spine: [
    "结构：T4/T3/rT3 与碘的位置",
    "合成六步（NIS→Pendrin→TPO→偶联→储存→释放）",
    "运输、外周脱碘与失活",
    "调节轴 TRH–TSH–T4/T3 与负反馈",
    "作用机制（核受体）与生物学效应",
    "甲减与甲亢的生化与实验室判读",
    "碘代谢与相关药物（胺碘酮、锂、造影剂）"
  ],
  blocks: [
    { h: "1 · Structure", hcn: "结构",
      points: [
        "**Both hormones are made of TWO TYROSINE residues joined by an ETHER bond, with iodine atoms on the rings: T4 (thyroxine, 3,5,3',5'-tetraiodothyronine) has 4 iodines, T3 (3,5,3'-triiodothyronine) has 3.**",
        "**T3 is the ACTIVE hormone — 3–8× more potent — while T4 is essentially a PROHORMONE and a circulating reservoir; about 80 % of circulating T3 is produced in the periphery by deiodination of T4, only 20 % by the gland itself.**",
        "**Removing the iodine from the INNER ring instead gives REVERSE T3 (rT3), which is inactive** — this is the switch used to down-regulate metabolism in illness (the 'low-T3 / euthyroid sick syndrome').",
        "**Precursors within thyroglobulin: monoiodotyrosine (MIT) and diiodotyrosine (DIT); DIT + DIT → T4, MIT + DIT → T3.**",
        "**Being lipophilic, they cross membranes (with transporters such as MCT8 — its defect causes Allan–Herndon–Dudley syndrome), circulate bound to proteins, and act on nuclear receptors — the exception among amino-acid-derived hormones (topic 14B).**"
      ],
      cn: "结构：两个酪氨酸经醚键连接＋碘的位置；T4 是前体激素与储库，T3 才有活性（80% 在外周脱碘生成）；内环脱碘得到无活性的 rT3；MIT/DIT 的偶联规则。" },
    { h: "2 · Synthesis in six steps", hcn: "合成的六步（必背）",
      points: [
        "**(1) UPTAKE: iodide is trapped by the SODIUM–IODIDE SYMPORTER (NIS) on the basolateral membrane, building a 20–40-fold gradient (secondary active transport, driven by the Na⁺/K⁺-ATPase); blocked by perchlorate and thiocyanate, and used therapeutically by radioiodine.**",
        "**(2) TRANSPORT to the lumen through PENDRIN** (its defect = Pendred syndrome: goitre with sensorineural deafness).",
        "**(3) OXIDATION and (4) ORGANIFICATION: THYROID PEROXIDASE (TPO), with H₂O₂ generated by DUOX2, oxidises iodide and iodinates tyrosine residues OF THYROGLOBULIN → MIT and DIT.**",
        "**(5) COUPLING (also by TPO): DIT + DIT → T4, MIT + DIT → T3, still bound within thyroglobulin, which is stored extracellularly in the COLLOID — a unique arrangement giving a reserve for 2–3 months.**",
        "**(6) RELEASE: colloid is endocytosed, lysosomal proteases hydrolyse thyroglobulin and free T4 and T3 into the blood (T4:T3 ≈ 20:1 or 10:1); the iodine of MIT and DIT is recovered by an intracellular DEIODINASE and reused.**",
        "**Pharmacology maps onto these steps: thionamides (METHIMAZOLE, propylthiouracil) inhibit TPO — the mainstay of antithyroid therapy (propylthiouracil additionally blocks peripheral D1 deiodination); high iodide transiently blocks organification (Wolff–Chaikoff — used in thyroid storm); perchlorate blocks NIS; lithium inhibits release.**"
      ],
      cn: "六步：NIS 摄碘（20–40 倍）→Pendrin→TPO 氧化与有机化→TPO 偶联→胶质中储存（够 2–3 个月）→溶酶体水解释放并回收 MIT/DIT 的碘。药物按步骤对应（甲巯咪唑抑 TPO、丙硫氧嘧啶还抑外周脱碘、高碘 Wolff–Chaikoff、锂抑制释放）。" },
    { h: "3 · Transport, peripheral conversion and inactivation", hcn: "运输、外周转化与灭活",
      points: [
        "**Transport: ~99.97 % of T4 and 99.7 % of T3 are bound — to THYROXINE-BINDING GLOBULIN (TBG, ~70 %), transthyretin (prealbumin) and albumin. ONLY THE FREE HORMONE IS ACTIVE**, which is why we measure **free T4 and free T3**.",
        "**Changes in TBG change TOTAL but not free hormone: TBG rises with OESTROGENS (pregnancy, contraceptives), in hepatitis and with tamoxifen; it falls with androgens, glucocorticoids, nephrotic syndrome and severe illness.** This is the standard exam trap.",
        "**Half-lives: T4 ~7 days (hence once-daily levothyroxine and slow equilibration — recheck TSH after 6–8 weeks), T3 ~1 day.**",
        "**DEIODINASES (selenoenzymes — the link to topic 26A): D1 (liver, kidney, thyroid) and D2 (brain, pituitary, brown fat, muscle) remove an OUTER-ring iodine → ACTIVE T3; D3 (placenta, brain, fetal tissue) removes an INNER-ring iodine → INACTIVE rT3.** D2 in the pituitary is what makes TSH sense the local T3 concentration.",
        "**In severe illness, starvation and after major surgery, D1 falls and D3 rises → low T3, high rT3, normal or low TSH — the NON-THYROIDAL ILLNESS ('euthyroid sick') syndrome, which should NOT be treated.** Also inhibited by propranolol, amiodarone, glucocorticoids and propylthiouracil.",
        "**Inactivation and excretion: deiodination, glucuronidation and sulfation in the liver → bile → enterohepatic circulation; enzyme inducers (phenytoin, rifampicin, carbamazepine) accelerate this and increase levothyroxine requirements.**"
      ],
      cn: "99.97% 与蛋白结合、只有游离有活性；TBG 变化只改变总量（雌激素升高、肾病综合征降低）；T4 半衰期 7 天（6–8 周复查 TSH）；三种脱碘酶（D1/D2 生成 T3，D3 生成 rT3，均为硒酶）；非甲状腺疾病综合征不需治疗。" },
    { h: "4 · Regulation and mechanism of action", hcn: "调节轴与作用机制",
      points: [
        "**Axis: hypothalamic TRH (a tripeptide) → pituitary TSH (a glycoprotein sharing its α subunit with LH, FSH and hCG) → thyroid: TSH acts on a GPCR → cAMP → stimulates every step from iodide uptake to release, and causes hypertrophy/hyperplasia (goitre).** **Negative feedback is exerted mainly by T3 generated locally in the pituitary by D2** — which is why **TSH is the most sensitive marker of thyroid status**.",
        "**A log-linear relationship: a small change in free T4 produces a large, opposite change in TSH** — hence TSH is the first-line test in almost every situation (except pituitary disease).",
        "**Mechanism of action: T3 enters the cell (MCT8), binds the NUCLEAR receptor TRα/TRβ, which is already bound to DNA as a heterodimer with RXR at thyroid response elements; the unliganded receptor REPRESSES transcription and the liganded one activates it.** Effects appear in hours and last days; there are also minor non-genomic effects.",
        "**Biological effects — the list to recite: (1) increases BASAL METABOLIC RATE and heat production (more Na⁺/K⁺-ATPase, more mitochondria and uncoupling proteins — calorigenic effect); (2) carbohydrate — absorption from the gut, glycogenolysis and gluconeogenesis up; (3) lipids — lipolysis up AND up-regulation of LDL receptors, so hypothyroidism RAISES LDL cholesterol; (4) protein — anabolic at physiological doses, catabolic in excess; (5) cardiovascular — more β-adrenergic receptors → tachycardia, higher output, wider pulse pressure; (6) growth and CNS DEVELOPMENT — indispensable for myelination and neuronal maturation in fetal and early postnatal life (hence cretinism); (7) permissive for growth hormone, and it increases bone turnover, gut motility and the sensitivity to catecholamines.**",
        "**Regulation of the thyroid by iodine itself: too little → goitre; too much → the Wolff–Chaikoff effect (transient block, with escape) or, in a nodular gland, Jod-Basedow hyperthyroidism.**"
      ],
      cn: "TRH→TSH→T4/T3 与负反馈（垂体内 D2 生成的 T3 起作用）；TSH 与游离 T4 呈对数-线性关系，所以 TSH 最敏感；核受体 TRα/TRβ 与 RXR 二聚；七条生物学效应（尤其甲减升 LDL、发育与髓鞘化、增加 β 受体）。" },
    { h: "5 · Hypothyroidism and hyperthyroidism", hcn: "甲减与甲亢",
      points: [
        "**HYPOTHYROIDISM — primary (thyroid): HASHIMOTO's autoimmune thyroiditis (anti-TPO and anti-thyroglobulin antibodies) in iodine-replete regions, IODINE DEFICIENCY worldwide, after thyroidectomy or radioiodine, drugs (amiodarone, lithium), congenital (dysgenesis, dyshormonogenesis).** Laboratory: **TSH HIGH with free T4 LOW** (subclinical: TSH high, fT4 normal).",
        "**Clinical picture is the metabolic rate falling: fatigue, cold intolerance, weight gain with poor appetite, bradycardia, constipation, dry skin and hair loss, hoarseness, menorrhagia, depression and slow reflexes, and characteristic laboratory findings — HIGH LDL cholesterol, raised CK, hyponatraemia, anaemia, raised prolactin.** Severe: **myxoedema** (accumulation of glycosaminoglycans) and myxoedema coma. **Congenital hypothyroidism causes CRETINISM — irreversible intellectual disability — which is why TSH is measured in newborn screening and treatment must start within the first weeks.**",
        "**HYPERTHYROIDISM — GRAVES disease (stimulating antibodies against the TSH receptor — the receptor is switched on permanently; with orbitopathy and pretibial myxoedema), toxic multinodular goitre and toxic adenoma, thyroiditis (release of stored hormone — transient), iodine- or amiodarone-induced, and factitious.** Laboratory: **TSH LOW (suppressed) with free T4 and/or free T3 HIGH.**",
        "**Clinical picture is the metabolic rate rising: weight loss with increased appetite, heat intolerance and sweating, tachycardia and atrial fibrillation, tremor, anxiety and insomnia, diarrhoea, muscle weakness, osteoporosis, and LOW cholesterol.** **Thyroid storm** is the life-threatening decompensation (fever, arrhythmia, delirium) — treated with **thionamides, then iodide (Wolff–Chaikoff), β-blockers (propranolol also blocks D1), and glucocorticoids**.",
        "**How to read the laboratory in one line: TSH first; if it is abnormal, add free T4 (and free T3); then antibodies (anti-TPO for Hashimoto, TRAb for Graves) and, if needed, scintigraphy (diffuse uptake in Graves, hot nodule in adenoma, absent uptake in thyroiditis).** Remember the exceptions: **central (pituitary) disease** breaks the TSH rule, and **non-thyroidal illness** distorts everything.",
        "**Treatment principles: levothyroxine (T4) for hypothyroidism, monitored by TSH after 6–8 weeks (and taken fasting, away from iron, calcium and PPIs); for hyperthyroidism thionamides, radioiodine or surgery, with β-blockers for symptoms.** In pregnancy, requirements for levothyroxine rise by ~25–50 % (TBG rises and the fetus depends on maternal T4 in the first trimester) — a favourite clinical question.",
        "**Goitre itself is simply the result of TSH stimulation** — it occurs in both hypo- and hyperfunction, and in iodine deficiency with normal function."
      ],
      cn: "甲减（Hashimoto/缺碘）：TSH↑ fT4↓，表现＝代谢率下降＋LDL↑、CK↑、低钠；先天性甲减必须新生儿筛查。甲亢（Graves 抗 TSH 受体抗体）：TSH↓ fT4/fT3↑；甲状腺危象的治疗顺序。判读口诀『先 TSH，再 fT4，再抗体/扫描』，并记住中枢性与非甲状腺疾病两个例外。" },
    { h: "6 · Iodine metabolism in summary", hcn: "碘代谢小结",
      points: [
        "**Requirement 150 µg/day (250 µg in pregnancy and lactation); the body contains 15–20 mg, 70–80 % of it in the thyroid; sources are iodised salt, sea fish, seaweed and dairy.**",
        "**Absorbed as iodide, distributed in the extracellular fluid, taken up by the thyroid (and by salivary glands, gastric mucosa, lactating breast and placenta — all NIS-expressing), and excreted mainly in URINE — hence urinary iodine is the epidemiological marker of iodine status.**",
        "**Deficiency: goitre → hypothyroidism → in the fetus CRETINISM (deafness, spasticity, intellectual disability); it remains the commonest preventable cause of intellectual disability in the world, and iodisation of salt is one of the most effective public-health measures in medicine.**",
        "**Excess: the Wolff–Chaikoff effect (transient block of organification, with escape in the normal gland — used deliberately before thyroid surgery and in storm) and the Jod-Basedow phenomenon (iodine-induced hyperthyroidism in a nodular gland, e.g. after CONTRAST MEDIA or AMIODARONE, which contains 37 % iodine by weight).**",
        "**Radioiodine: ¹³¹I for treatment (β radiation) and ¹²³I/⁹⁹ᵐTc for imaging; potassium iodide blocks uptake after a nuclear accident — all of it exploiting NIS.**",
        "Closing sentence: **the whole thyroid axis is a device for putting iodine onto tyrosine and releasing it in a controlled way — which is why iodine supply, TPO and the deiodinases are the three places where things go wrong.**"
      ],
      cn: "需求量与分布、尿碘作为人群指标；缺碘的三级后果与加碘盐；过量的两个效应（Wolff–Chaikoff 与 Jod-Basedow，胺碘酮含碘 37%）；放射性碘的诊疗应用。最后一句总结点题。" }
  ],
  numbers: [
    "Iodine requirement **150 µg/day** (250 in pregnancy); thyroid stores enough hormone for **2–3 months**",
    "**T4 half-life ~7 days, T3 ~1 day**; T4:T3 secretion ≈ **20:1**; ~80 % of T3 is made peripherally",
    "**99.97 % of T4 is protein-bound**, mainly to TBG; only free hormone is active",
    "TSH **0.4–4.0 mIU/L**, free T4 **~10–22 pmol/L**, free T3 **~3–6.5 pmol/L**",
    "NIS concentrates iodide **20–40-fold**; amiodarone is **37 % iodine by weight**"
  ],
  clinic: [
    "**Newborn TSH screening** — congenital hypothyroidism must be treated within weeks to prevent cretinism",
    "**Hypothyroidism raises LDL cholesterol and CK** — check TSH in any unexplained dyslipidaemia or myopathy",
    "**Graves disease** — TRAb, diffuse uptake; **thyroiditis** — raised hormones with absent uptake",
    "**Pregnancy** — levothyroxine requirement rises 25–50 %; maternal T4 is essential in the first trimester",
    "**Amiodarone** can cause both hypo- and hyperthyroidism; **lithium** blocks hormone release"
  ],
  traps: [
    "**T4 is a prohormone; T3 is the active hormone** — and most T3 is made outside the thyroid",
    "**Changes in TBG alter total but not free hormone** — always measure free T4",
    "**Reverse T3 is inactive** and rises in non-thyroidal illness, which should not be treated with hormone",
    "TSH is high in **primary** hypothyroidism but low in **central** hypothyroidism — the rule has an exception",
    "Thyroid hormones are amino-acid derivatives that act like **steroids** (nuclear receptor, slow, long-lasting)"
  ],
  terms: [
    ["thyroglobulin", "甲状腺球蛋白"], ["thyroid peroxidase", "甲状腺过氧化物酶"], ["sodium–iodide symporter", "钠碘同向转运体"],
    ["organification", "有机化"], ["deiodinase", "脱碘酶"], ["reverse T3", "反 T3"],
    ["thyroxine-binding globulin", "甲状腺素结合球蛋白"], ["Wolff–Chaikoff effect", "Wolff–Chaikoff 效应"],
    ["Jod-Basedow phenomenon", "Jod-Basedow 现象"], ["cretinism", "克汀病"], ["myxoedema", "黏液性水肿"]
  ]
}
});
