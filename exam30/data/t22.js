window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 22,
a: {
  titleEN: "Structure of saccharides. Main metabolic pathways of saccharides. Regulation of saccharide metabolism, key enzymes. Principles of hormonal regulation.",
  titleCN: "糖类的结构 · 糖代谢的主要途径 · 糖代谢的调节与关键酶 · 激素调节的原则",
  opener: "This is the **integrating question of carbohydrate metabolism**: seven pathways, each with **one committed, irreversible, regulated enzyme**, and one organising principle — **insulin promotes storage and use, glucagon and the stress hormones promote release**, with blood glucose held between **3.9 and 5.6 mmol/L** at all times.",
  openerCN: "这是糖代谢的整合题：七条途径，每条有一个不可逆的关键调节酶；一个组织原则——胰岛素促进储存与利用，胰高血糖素与应激激素促进释放；血糖始终维持在 3.9–5.6 mmol/L。",
  spine: [
    "结构复习：单糖—二糖—多糖、糖苷键、衍生物",
    "七条途径总览与各自的关键酶、部位、目的",
    "血糖的来源与去路（餐后 vs 空腹）",
    "调节层次：底物、别构、共价、酶量、区隔化",
    "激素调节：胰岛素 vs 胰高血糖素/肾上腺素/皮质醇/GH/甲状腺素",
    "器官分工（肝、肌、脑、脂肪、红细胞）",
    "临床整合：糖尿病、低血糖、糖原贮积病、乳糖不耐受"
  ],
  blocks: [
    { h: "1 · Structure — the short version", hcn: "结构（浓缩复习）",
      points: [
        "**Monosaccharides = polyhydroxy aldehydes/ketones**; D-configuration decided by the last chiral carbon; cyclisation gives **pyranose/furanose** rings and the **anomeric carbon (α/β)**; **epimers** differ at one carbon (glucose/galactose C4, glucose/mannose C2).",
        "**Glycosidic bond** from the anomeric carbon: **maltose α1→4, lactose Gal β1→4 Glc, sucrose Glc α1↔2β Fru (non-reducing)**.",
        "**Polysaccharides: starch (amylose α1→4 + amylopectin with α1→6), glycogen (the same but branched every 8–12 residues), cellulose (β1→4, indigestible), and the glycosaminoglycans** of the matrix.",
        "**Derivatives worth naming: phosphate esters (G6P), amino sugars (glucosamine, N-acetylneuraminate), uronic acids (glucuronate — conjugation), deoxysugars (2-deoxyribose), alditols (sorbitol), and glycoconjugates (glycoproteins, proteoglycans, glycolipids).**",
        "Digestion and absorption in one line: **α-amylase → brush-border disaccharidases → only glucose, galactose (SGLT1) and fructose (GLUT5) are absorbed → portal vein.**"
      ],
      cn: "结构部分只需快速覆盖：单糖构型与端基异构、三个二糖的键型、三种多糖、四类衍生物、以及吸收只允许三种单糖通过。" },
    { h: "2 · The seven pathways and their key enzymes", hcn: "七条途径与关键酶（本题核心表）",
      points: [
        "**1. GLYCOLYSIS** (cytosol, all cells): key enzymes **hexokinase/glucokinase, PFK-1 (the main one), pyruvate kinase**; purpose ATP ± pyruvate/lactate.",
        "**2. GLUCONEOGENESIS** (liver, kidney cortex): **pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase, glucose-6-phosphatase**; purpose blood glucose in fasting.",
        "**3. GLYCOGENESIS** (liver, muscle): **glycogen synthase** (+ branching enzyme); **4. GLYCOGENOLYSIS: glycogen phosphorylase** (+ debranching enzyme).",
        "**5. PENTOSE PHOSPHATE PATHWAY** (cytosol): **glucose-6-phosphate dehydrogenase**; purpose NADPH and ribose-5-P.",
        "**6. PYRUVATE OXIDATION AND THE CITRATE CYCLE** (mitochondrion): **pyruvate dehydrogenase complex, citrate synthase, isocitrate dehydrogenase**; purpose complete oxidation.",
        "**7. Auxiliary routes: fructose and galactose metabolism (fructokinase/aldolase B; galactokinase/GALT), the uronic acid pathway (UDP-glucuronate for conjugation), the polyol pathway (aldose reductase), and the hexosamine pathway (UDP-GlcNAc).** Being able to recite this table with **enzyme + compartment + purpose** is the whole answer to 'main metabolic pathways'."
      ],
      cn: "这张表是本题的骨架：七条途径×（关键酶＋部位＋目的）。考试时先把表说完，再展开细节，绝不会漏。" },
    { h: "3 · Sources and fates of blood glucose", hcn: "血糖的来源与去路",
      points: [
        "**Sources: (1) intestinal absorption after a meal; (2) hepatic glycogenolysis (first 8–12 hours); (3) gluconeogenesis (dominant after 12–18 h, the only source after ~24 h); (4) a small contribution from the kidney and from renal/hepatic glycerol and lactate recycling.**",
        "**Fates: (1) oxidation (glycolysis → citrate cycle) for ATP; (2) storage as glycogen; (3) conversion to fat (de-novo lipogenesis, mainly hepatic); (4) pentose phosphate pathway for NADPH/ribose; (5) synthesis of glycoconjugates, glucuronate, amino sugars; (6) excretion above the renal threshold (~10 mmol/L).**",
        "**Postprandial state:** high insulin/glucagon ratio → GLUT4 in muscle and fat, glucokinase and glycogen synthase in the liver, PFK-2 → F-2,6-BP → glycolysis; lipogenesis on; lipolysis and gluconeogenesis off.",
        "**Fasting state:** low insulin, high glucagon → hepatic glycogenolysis then gluconeogenesis, lipolysis supplying fatty acids and glycerol, muscle proteolysis supplying alanine and glutamine, ketogenesis after ~2–3 days, and the brain gradually shifting to ketone bodies (topic 27B).",
        "**Blood glucose 3.9–5.6 mmol/L fasting; the brain consumes ~120 g/day and the erythrocyte, renal medulla, lens and cornea are obligate glucose users** — these facts are the *reason* the regulation exists, and starting from them makes the answer coherent."
      ],
      cn: "来源四条、去路六条；餐后与空腹两张图；最后用『为什么必须调节』（脑 120 g/天、红细胞强制需求）把逻辑闭环。" },
    { h: "4 · Levels of regulation", hcn: "调节的层次",
      points: [
        "**(1) Substrate availability** — mass action; the concentration of glucose itself regulates glucokinase and, through **ChREBP**, gene expression.",
        "**(2) Allosteric regulation (seconds): PFK-1 (ATP, citrate, H⁺ inhibit; AMP, F-2,6-BP activate), pyruvate carboxylase (acetyl-CoA), pyruvate kinase (F-1,6-BP activates; ATP, alanine inhibit), glycogen phosphorylase (AMP in muscle, glucose in liver), G6PD (NADP⁺/NADPH).**",
        "**(3) Covalent modification (minutes): the cAMP/PKA cascade phosphorylates and thereby switches OFF glycogen synthase, pyruvate kinase and PFK-2's kinase activity, and switches ON glycogen phosphorylase (via phosphorylase kinase) and FBPase-2; insulin reverses everything through protein phosphatase 1 and inhibition of GSK-3.** **AMPK** adds the energy-deficit signal.",
        "**(4) Amount of enzyme (hours–days): insulin induces glucokinase, PFK-1, pyruvate kinase, ACC and FAS (via SREBP-1c); glucagon and cortisol induce PEPCK, G6Pase and FBPase-1.**",
        "**(5) Compartmentation:** glycolysis and the pentose pathway in the cytosol, PDH and the citrate cycle in the mitochondrion, glucose-6-phosphatase in the ER lumen — with transporters as additional control points (GLUT4 translocation is itself a regulatory mechanism).",
        "**Reciprocal regulation** prevents futile cycles: **F-2,6-BP for glycolysis/gluconeogenesis, phosphorylation state for glycogen synthesis/degradation, malonyl-CoA for lipogenesis/β-oxidation.**"
      ],
      cn: "五个层次＋互反调节；把 PFK-1、丙酮酸激酶、糖原合酶/磷酸化酶、G6PD 的具体效应物背熟，这一段就是满分。" },
    { h: "5 · Hormonal regulation", hcn: "激素调节（原则与个论）",
      points: [
        "**Principle: one hypoglycaemic hormone (INSULIN) against several hyperglycaemic ones (glucagon, adrenaline, cortisol, growth hormone, thyroid hormones) — an asymmetry that reflects the evolutionary danger of hypoglycaemia.**",
        "**Insulin (fed): membrane receptor tyrosine kinase → IRS → PI3K/Akt → GLUT4 translocation, glycogen synthase activation (GSK-3 inhibition), PFK-2 activation, PDH activation, HSL inhibition, and transcription of the glycolytic/lipogenic enzymes.**",
        "**Glucagon (fasting, liver only): GPCR → cAMP → PKA → glycogenolysis, gluconeogenesis, ketogenesis; it does NOT act on muscle.**",
        "**Adrenaline (acute stress): β receptors → cAMP in liver AND muscle (muscle glycogen → lactate → Cori cycle), lipolysis, inhibition of insulin secretion via α₂.**",
        "**Cortisol (chronic stress, permissive and slow): induces PEPCK and other gluconeogenic enzymes, mobilises amino acids from muscle, causes peripheral insulin resistance — the mechanism of steroid diabetes. Growth hormone: lipolysis and insulin resistance. Thyroid hormones: absorption of glucose from the gut, glycogenolysis, increased turnover.**",
        "**The insulin/glucagon RATIO, not either hormone alone, sets the direction of hepatic metabolism** — this is the sentence to end on. Add the **incretins (GLP-1, GIP)** and the counter-regulatory hierarchy in hypoglycaemia (**glucagon and adrenaline first at ~3.6–3.8 mmol/L, cortisol and GH later, symptoms at ~3.0, neuroglycopenia below 2.5**)."
      ],
      cn: "原则：一个降糖激素对多个升糖激素；每个激素的受体类型、作用部位与主要效应；最后强调『胰岛素/胰高血糖素比值』决定肝代谢方向，并给出低血糖时反调节激素的启动顺序与阈值。" },
    { h: "6 · Organ specialisation and clinical integration", hcn: "器官分工与临床整合",
      points: [
        "**Liver — the glucostat:** glucokinase (high Km sensor), glucose-6-phosphatase (can release glucose), glycogen for the blood, gluconeogenesis, lipogenesis; it buffers the portal glucose load.",
        "**Muscle:** GLUT4, hexokinase, glycogen **for itself only (no G6Pase)**, lactate and alanine export; **contraction activates glucose uptake independently of insulin (AMPK)**.",
        "**Brain:** GLUT1/GLUT3, obligate glucose consumer (~120 g/day), ketone bodies only after adaptation; **adipose tissue:** GLUT4, glucose → glycerol-3-P for esterification, and it has **no glycerol kinase**; **erythrocyte:** GLUT1, pure glycolysis with the 2,3-BPG shunt and the pentose pathway.",
        "**Clinical integration — the four diseases that test this topic: diabetes mellitus (topic 2B), hypoglycaemia (insulin overdose, sulfonylureas, insulinoma, alcohol, adrenal insufficiency, GSD I), glycogen storage diseases (topic 4A), and the digestion/absorption defects (lactose intolerance, galactosaemia, hereditary fructose intolerance).**",
        "**Laboratory tools that follow from the biochemistry: fasting glucose, OGTT, HbA1c, C-peptide, lactate, ketones, and the fluoride tube that stops in-vitro glycolysis.**",
        "A good closing sentence: **every regulatory device in carbohydrate metabolism exists to protect one number — the blood glucose concentration — because the brain and the erythrocyte cannot tolerate its fall, and the vessels cannot tolerate its chronic rise.**"
      ],
      cn: "五个器官的分工（肝的葡萄糖激酶与 G6P 酶、肌肉无 G6P 酶、脑强制需求、脂肪无甘油激酶、红细胞纯糖酵解）；四组疾病；最后一句总结非常适合收尾。" }
  ],
  numbers: [
    "Fasting glucose **3.9–5.6 mmol/L**; renal threshold **~10 mmol/L**; brain **~120 g glucose/day**",
    "Liver glycogen **~100 g** (exhausted in 18–24 h), muscle **~400 g**",
    "Km hexokinase **0.1 mmol/L** vs glucokinase **10 mmol/L**",
    "Glycolysis net **2 ATP** anaerobically, **30–32 ATP** aerobically; gluconeogenesis costs **6 ~P**",
    "Counter-regulation starts at **~3.6–3.8 mmol/L**; symptoms ~3.0; neuroglycopenia < 2.5 mmol/L"
  ],
  clinic: [
    "**Type 1 and type 2 diabetes** — absolute vs relative insulin deficiency; HbA1c and OGTT",
    "**Hypoglycaemia** — insulin/sulfonylurea, insulinoma (high C-peptide), alcohol (blocked gluconeogenesis), adrenal insufficiency",
    "**Glycogen storage diseases** — von Gierke (hepatic, hypoglycaemia + lactic acidosis) vs McArdle (muscular)",
    "**Lactose intolerance, galactosaemia, hereditary fructose intolerance** — the three sugar-specific defects",
    "**Metformin (AMPK), sulfonylureas (KATP), SGLT2 inhibitors, GLP-1 agonists** — each acts at a step you can name"
  ],
  traps: [
    "**Muscle has no glucose-6-phosphatase** — it cannot contribute glucose to the blood",
    "**Glucokinase is not simply 'liver hexokinase'** — different Km, no product inhibition, insulin-inducible, sigmoidal",
    "F-2,6-bisphosphate is a **regulator, not an intermediate**",
    "Glucagon acts on liver and adipose tissue, **not on muscle**",
    "Do not list pathways without their **key enzyme, compartment and purpose** — that triad is what is being examined"
  ],
  terms: [
    ["glycolysis", "糖酵解"], ["gluconeogenesis", "糖异生"], ["glycogenesis / glycogenolysis", "糖原合成/分解"],
    ["pentose phosphate pathway", "磷酸戊糖途径"], ["key (rate-limiting) enzyme", "关键酶（限速酶）"],
    ["allosteric regulation", "别构调节"], ["covalent modification", "共价修饰"], ["insulin/glucagon ratio", "胰岛素/胰高血糖素比值"],
    ["GLUT4", "葡萄糖转运体 4"], ["futile cycle", "无效循环"]
  ]
},
b: {
  titleEN: "Fundamentals of medical toxicology. The dose–effect relationship. The scale of toxicity. General mechanisms of toxicity. Organ-specific toxicity. Toxic effects of selected substances.",
  titleCN: "医学毒理学基础 · 剂量-效应关系 · 毒性分级 · 毒性的一般机制 · 器官特异性毒性 · 重要毒物的作用",
  opener: "**'The dose makes the poison' (Paracelsus)** — toxicology is the quantitative science of that statement: it describes the **dose–response relationship**, the **toxicokinetics** (what the body does to the substance) and the **toxicodynamics** (what the substance does to the body).",
  openerCN: "『剂量决定毒性』（帕拉塞尔苏斯）——毒理学正是把这句话定量化的学科：研究剂量-效应关系、毒物动力学（机体对毒物的作用）与毒物效应动力学（毒物对机体的作用）。",
  spine: [
    "基本概念与剂量-效应曲线（LD50、TD50、治疗指数）",
    "毒性分级与暴露方式；急性/亚急性/慢性",
    "毒物动力学：吸收、分布、生物转化（活化与解毒）、排泄",
    "毒性的一般机制（六类）",
    "器官特异性毒性（肝、肾、神经、血液、肺）",
    "重要毒物：乙醇、甲醇、乙二醇、CO、氰化物、有机磷、重金属、对乙酰氨基酚",
    "解毒原则与解毒剂表"
  ],
  blocks: [
    { h: "1 · Basic concepts and the dose–response relationship", hcn: "基本概念与剂量-效应关系",
      points: [
        "**Toxicity depends on: dose, route (inhalation ≈ intravenous > intraperitoneal > intramuscular > oral > dermal), duration and frequency of exposure, the chemical form, and the individual (age, sex, genetics, nutrition, pregnancy, liver and kidney function, other drugs).**",
        "**The dose–response curve is sigmoidal on a logarithmic scale.** From it: **LD₅₀ (dose lethal for 50 % of animals — the classic measure of acute toxicity), ED₅₀ (effective dose in 50 %), TD₅₀ (toxic dose), and the THERAPEUTIC INDEX TI = TD₅₀/ED₅₀ (or LD₅₀/ED₅₀) — the larger, the safer.** Digoxin, warfarin, lithium, theophylline and cytostatics have a **narrow therapeutic index** and need monitoring.",
        "**Threshold vs non-threshold effects: most toxic effects have a threshold (NOAEL — no observed adverse effect level, from which acceptable daily intake is derived with safety factors); genotoxic carcinogens and mutagens are assumed to have NO threshold — any dose carries some risk.**",
        "**Types of effect: local vs systemic; immediate vs delayed; reversible vs irreversible; and the special categories carcinogenic, mutagenic, teratogenic (thalidomide, retinoids, valproate, alcohol, warfarin, ACE inhibitors) and allergenic/idiosyncratic (dose-independent!).**",
        "**Interactions: additive, synergistic (ethanol + benzodiazepines, ethanol + paracetamol), potentiation, and antagonism (chemical, physiological, receptor, dispositional)** — the basis of antidote therapy."
      ],
      cn: "毒性的五个决定因素、S 形剂量-效应曲线与 LD50/ED50/治疗指数、阈值与无阈值（致癌物）、特殊类型（致癌/致畸/过敏性不依赖剂量）、相互作用四种。" },
    { h: "2 · Toxicokinetics — what the body does to the poison", hcn: "毒物动力学",
      points: [
        "**Absorption:** lipophilic, non-ionised substances cross membranes easily; **pH matters (weak acids such as aspirin are absorbed in the stomach; alkalinising the urine speeds their excretion — 'ion trapping')**.",
        "**Distribution:** volume of distribution, protein binding, deposition in tissues — **lead and fluoride in bone, lipophilic organochlorines and dioxins in fat, mercury in kidney and brain, arsenic in hair and nails (the forensic sample)**. Only the **free fraction** is active.",
        "**Biotransformation (topic 23B): phase I (oxidation by cytochrome P450, reduction, hydrolysis) and phase II (conjugation with glucuronate, sulfate, glutathione, acetate, glycine, methyl).** The essential toxicological insight: **phase I often BIOACTIVATES — paracetamol → NAPQI, benzo[a]pyrene → epoxide, methanol → formaldehyde/formate, parathion → paraoxon, CCl₄ → CCl₃•** — so metabolism can be the cause of toxicity, not the cure.",
        "**Elimination:** kidney (most), bile and faeces (with possible enterohepatic recirculation, which prolongs the effect and can be interrupted by activated charcoal), lungs (volatiles), plus milk, sweat and hair.",
        "**Kinetic order matters clinically: most substances follow first-order kinetics, but ethanol, phenytoin and salicylate at high doses follow ZERO-ORDER (saturation) kinetics — a constant amount per hour, so small increases in dose cause large rises in concentration.**"
      ],
      cn: "ADME 四步＋两个考点：第一相常常是『生物活化』（对乙酰氨基酚、甲醇、有机磷、CCl4）；乙醇/苯妥英/水杨酸在高浓度呈零级动力学。离子捕获与活性炭中断肠肝循环也常被问。" },
    { h: "3 · General mechanisms of toxicity", hcn: "毒性的一般机制（六类）",
      points: [
        "**(1) Interference with cellular respiration and ATP production: cyanide and CO (cytochrome oxidase / haemoglobin), rotenone, uncouplers (dinitrophenol, salicylate), fluoroacetate (aconitase).**",
        "**(2) Covalent binding to macromolecules / enzyme inhibition: organophosphates on acetylcholinesterase, heavy metals on −SH groups, NAPQI on hepatocyte proteins, alkylating agents on DNA.**",
        "**(3) Oxidative stress and lipid peroxidation: paraquat, doxorubicin, CCl₄, iron overload, radiation (topic 4B).**",
        "**(4) Disturbance of calcium homeostasis and membrane damage** (topic 17B), leading to necrosis or apoptosis.",
        "**(5) Receptor-mediated and signalling effects: opioids, atropine, nicotine, botulinum and tetanus toxin, dioxin via the Ah receptor, endocrine disruptors.**",
        "**(6) Genotoxicity and immune-mediated damage: DNA adducts and mutation (carcinogenesis in initiation–promotion–progression), and hapten-driven allergy (penicillin, nickel) or autoimmunity.**",
        "Add the special case of **teratogenesis** — timing decides the effect: the **organogenesis period (weeks 3–8) is the vulnerable window** for major malformations."
      ],
      cn: "六类机制各配 2–3 个例子；再加致畸的时间窗（第 3–8 周器官形成期）。回答时按这六条列，条理最清楚。" },
    { h: "4 · Organ-specific toxicity", hcn: "器官特异性毒性",
      points: [
        "**Liver — the commonest target (first-pass exposure and high CYP content): paracetamol (centrilobular necrosis), ethanol (steatosis → hepatitis → cirrhosis), CCl₄, amanitin from Amanita phalloides (RNA polymerase II — a delayed, biphasic course), aflatoxin (hepatocellular carcinoma), methotrexate, isoniazid, valproate, anabolic steroids (cholestasis).** Markers: ALT/AST, bilirubin, INR (topic 29B).",
        "**Kidney — high blood flow and concentration in the medulla: aminoglycosides, cisplatin, ethylene glycol (oxalate crystals), heavy metals (Cd, Pb, Hg), NSAIDs (papillary necrosis, prerenal failure), radiocontrast, myoglobin in rhabdomyolysis.**",
        "**Nervous system: ethanol and methanol (optic nerve), lead (children — cognitive impairment), mercury (Minamata — methylmercury), manganese (parkinsonism), organophosphates, botulinum and tetanus toxins, MPTP (parkinsonism), CO (delayed encephalopathy).**",
        "**Blood: CO and nitrites (carboxy- and methaemoglobin), benzene (aplastic anaemia, leukaemia), chloramphenicol, lead (blocks haem synthesis — basophilic stippling), oxidant drugs in G6PD deficiency.**",
        "**Lung: oxygen at high concentration, paraquat (selectively concentrated in pneumocytes → fibrosis), asbestos (mesothelioma), silica, tobacco smoke, irritant gases (chlorine, ammonia, nitrogen oxides).**",
        "Add **heart** (digoxin, doxorubicin cardiomyopathy, cocaine), **thyroid** (perchlorate, amiodarone), **bone marrow and gonads** (cytostatics, radiation)."
      ],
      cn: "按器官列表记忆：肝（对乙酰氨基酚、鹅膏毒肽、CCl4、黄曲霉毒素）、肾（氨基糖苷、顺铂、乙二醇、重金属）、神经（铅汞、甲醇、有机磷、MPTP）、血液（CO、亚硝酸盐、苯、铅）、肺（百草枯、石棉、高浓度氧）。" },
    { h: "5 · Selected poisons — the ones examiners choose", hcn: "重点毒物（必考清单）",
      points: [
        "**Methanol:** itself harmless; **alcohol dehydrogenase → formaldehyde → FORMIC ACID**, which inhibits cytochrome oxidase → **severe metabolic acidosis with a high anion AND osmolal gap, blindness (optic nerve), death**. **Antidote: ethanol or FOMEPIZOLE (competitive inhibition of ADH) + folate/folinic acid + bicarbonate + haemodialysis.**",
        "**Ethylene glycol (antifreeze):** ADH → glycolaldehyde → glycolic acid (acidosis) → **oxalate → calcium oxalate crystals in urine and kidneys → acute renal failure and hypocalcaemia**; same antidotes (fomepizole/ethanol, dialysis) + thiamine and pyridoxine.",
        "**Carbon monoxide:** affinity for haemoglobin **200–250×** that of oxygen plus a left shift of the curve; **cherry-red skin, normal pO₂ and a normal pulse oximeter reading, headache and confusion**; treat with **100 % or hyperbaric oxygen**. **Cyanide:** blocks cytochrome oxidase (complex IV) → cells cannot use oxygen → **lactic acidosis with a high venous oxygen saturation**; antidotes **hydroxocobalamin, nitrites (methaemoglobin traps CN⁻), thiosulfate**.",
        "**Organophosphates and carbamates:** irreversible (organophosphate, after 'ageing') inhibition of **acetylcholinesterase** → **muscarinic (DUMBELS: diarrhoea, urination, miosis, bronchorrhoea, emesis, lacrimation, salivation), nicotinic (fasciculations, paralysis) and CNS effects**; treat with **atropine + PRALIDOXIME (reactivates the enzyme if given before ageing)**.",
        "**Paracetamol:** CYP2E1 → **NAPQI**, normally conjugated with glutathione; in overdose glutathione is exhausted → covalent binding → **centrilobular hepatic necrosis at 24–72 h**; **antidote N-acetylcysteine** (replenishes glutathione), guided by the **Rumack–Matthew nomogram**. Chronic alcohol raises the risk (induced CYP2E1, low glutathione).",
        "**Heavy metals: lead** (ALA dehydratase and ferrochelatase → anaemia with basophilic stippling, abdominal colic, neuropathy, children's cognition; chelate with EDTA, DMSA, dimercaprol); **mercury** (−SH groups; Minamata); **arsenic** (binds lipoamide, blocks PDH — 'rice-water' diarrhoea, garlic breath, hair/nail deposition; antidote dimercaprol); **cadmium** (kidney, itai-itai disease); **iron** (children — deferoxamine); **copper** in Wilson disease (penicillamine).",
        "**Ethanol** is treated in topic 23B; remember **methanol/ethylene glycol/ethanol all raise the OSMOLAL GAP**, and that a **raised anion gap with acidosis** points to methanol, ethylene glycol, salicylate, lactate or ketones (the MUDPILES logic)."
      ],
      cn: "六个必背毒物：甲醇（→甲酸、失明、甲吡唑）、乙二醇（→草酸钙、肾衰）、CO（樱桃红、pO₂ 正常、高压氧）、氰化物（静脉血氧高、羟钴胺）、有机磷（DUMBELS、阿托品＋解磷定）、对乙酰氨基酚（NAPQI、NAC）。再加重金属四种与各自螯合剂。" },
    { h: "6 · Principles of treatment and the antidote table", hcn: "解毒原则与解毒剂表",
      points: [
        "**General principles in order: (1) stabilise the patient (ABC) — always first; (2) prevent further absorption (activated charcoal within 1–2 h; gastric lavage rarely; skin/eye decontamination; charcoal repeated for substances with enterohepatic recirculation); (3) enhance elimination (urine alkalinisation for salicylate and phenobarbital, haemodialysis for methanol, ethylene glycol, lithium, salicylate, metformin); (4) give the specific antidote if one exists; (5) supportive and symptomatic care.**",
        "**Antidote table worth reciting: paracetamol → N-acetylcysteine; opioids → naloxone; benzodiazepines → flumazenil; organophosphates → atropine + pralidoxime; methanol/ethylene glycol → fomepizole or ethanol; cyanide → hydroxocobalamin/nitrites/thiosulfate; CO → oxygen; methaemoglobinaemia → methylene blue; heparin → protamine; warfarin → vitamin K (+ prothrombin complex); digoxin → digoxin-specific Fab; iron → deferoxamine; lead → EDTA/DMSA; mercury and arsenic → dimercaprol/DMPS; β-blockers → glucagon; insulin/sulfonylurea → glucose (+ octreotide); botulism → antitoxin.**",
        "**Analytical toxicology:** screening immunoassays for drugs of abuse (with their false positives), confirmation by **GC-MS or LC-MS/MS**, blood ethanol by enzymatic assay or headspace GC, carboxyhaemoglobin by CO-oximetry, cholinesterase activity for organophosphates, and **therapeutic drug monitoring** for narrow-index drugs.",
        "**Three quick bedside calculations that belong to this topic: the ANION GAP (Na⁺ − Cl⁻ − HCO₃⁻, normal 8–16 mmol/L), the OSMOLAL GAP (measured − calculated osmolality, normal < 10), and the arterial blood gas pattern** — together they identify most serious poisonings before any specific analysis returns.",
        "Close with the public-health frame: **occupational exposure limits, environmental toxicology (heavy metals, dioxins, pesticides, air pollution), food toxicology (aflatoxin, acrylamide, mycotoxins) and the poison information centre** — showing that toxicology is not only about overdoses."
      ],
      cn: "处理五步（先稳定生命体征，再阻止吸收、促进排出、特效解毒、对症支持）＋解毒剂对照表（一定要能背 10 个以上）＋三个床旁计算（阴离子间隙、渗透间隙、血气）。" }
  ],
  numbers: [
    "**Therapeutic index = TD₅₀/ED₅₀**; narrow for digoxin, lithium, warfarin, theophylline, aminoglycosides",
    "Anion gap normal **8–16 mmol/L**; osmolal gap normal **< 10 mmol/kg**",
    "CO affinity for haemoglobin **200–250×** that of O₂; COHb half-life 4–5 h in air, **~1 h on 100 % O₂**",
    "Paracetamol: hepatotoxic dose usually **> 150 mg/kg**; N-acetylcysteine most effective within **8–10 h**",
    "Activated charcoal is useful within **1–2 hours** of ingestion (longer for sustained-release forms)"
  ],
  clinic: [
    "**High anion gap acidosis** — methanol, ethylene glycol, salicylate, lactate, ketones, uraemia",
    "**Raised osmolal gap** — methanol, ethylene glycol, ethanol, mannitol",
    "**Cholinergic crisis** (organophosphate) vs anticholinergic syndrome (atropine, tricyclics) — opposite toxidromes",
    "**Paracetamol** — the commonest cause of acute liver failure in many countries; NAC works best early",
    "**Occupational and environmental exposure** — lead in children, cadmium, asbestos, air pollution"
  ],
  traps: [
    "**Methanol and ethylene glycol are not toxic themselves** — their metabolites are; that is why we inhibit alcohol dehydrogenase",
    "Phase I metabolism can **bioactivate** a substance — 'detoxification' is not automatic",
    "In CO poisoning the **pO₂ and ordinary pulse oximetry are normal** — you must measure carboxyhaemoglobin",
    "Allergic/idiosyncratic reactions are **not dose-dependent** — they break the Paracelsus rule",
    "Flumazenil can precipitate **seizures** in mixed overdose — an antidote is not automatically safe"
  ],
  terms: [
    ["dose–response relationship", "剂量-效应关系"], ["LD₅₀", "半数致死量"], ["therapeutic index", "治疗指数"],
    ["NOAEL", "未观察到有害作用水平"], ["toxicokinetics", "毒物动力学"], ["bioactivation", "生物活化"],
    ["zero-order kinetics", "零级动力学"], ["anion gap", "阴离子间隙"], ["osmolal gap", "渗透间隙"],
    ["antidote", "解毒剂"], ["chelation therapy", "螯合治疗"], ["teratogen", "致畸物"]
  ]
}
});
