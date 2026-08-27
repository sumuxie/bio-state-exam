window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 2,
a: {
  titleEN: "Vitamins as coenzyme precursors. Structure, function and metabolism of vitamins D, A, E, K, B9, B12, C. Vitamin deficiencies.",
  titleCN: "维生素作为辅酶前体 · 维生素 D/A/E/K/B9/B12/C 的结构、功能与代谢 · 缺乏症",
  opener: "Vitamins are organic micronutrients that the body cannot synthesise in sufficient amount; the **water-soluble B vitamins are precursors of coenzymes**, while the **fat-soluble vitamins A, D, E, K act as hormones, antioxidants or cofactors of specific modifications**.",
  openerCN: "维生素是人体不能足量合成的有机微量营养素：水溶性 B 族是辅酶前体，脂溶性 A/D/E/K 分别作为激素、抗氧化剂或特殊修饰反应的辅因子。",
  spine: [
    "分类：水溶性 vs 脂溶性；辅酶前体总表 (B1 TPP, B2 FAD, B3 NAD, B5 CoA, B6 PLP, B7 biotin, B9 THF, B12)",
    "维生素 D：合成三步、钙磷调节、佝偻病/骨软化",
    "维生素 A：视黄醇/视黄醛/视黄酸三种活性形式与三种功能",
    "维生素 E 与 K：抗氧化 vs γ-羧化",
    "叶酸 B9 与 B12：一碳单位、甲硫氨酸循环、巨幼贫的鉴别",
    "维生素 C：羟化酶辅因子、抗氧化、坏血病",
    "缺乏与过量：每个维生素一句话的临床像"
  ],
  blocks: [
    { h: "1 · Overview — which vitamin gives which coenzyme", hcn: "维生素→辅酶总表（必背）",
      points: [
        "**B1 thiamine → thiamine pyrophosphate (TPP)**: oxidative decarboxylation (PDH, α-KGDH, branched-chain KDH), transketolase of the pentose phosphate pathway. Deficiency: **beri-beri**, **Wernicke–Korsakoff** in alcoholics.",
        "**B2 riboflavin → FMN, FAD** (flavoproteins, dehydrogenases, respiratory chain complexes I and II). Deficiency: angular cheilitis, glossitis, seborrhoeic dermatitis.",
        "**B3 niacin → NAD⁺, NADP⁺**; can be made from **tryptophan (60 mg Trp = 1 mg niacin)**. Deficiency: **pellagra — dermatitis, diarrhoea, dementia** (also in Hartnup disease and carcinoid).",
        "**B5 pantothenic acid → coenzyme A** and the phosphopantetheine arm of fatty-acid synthase.",
        "**B6 pyridoxine → pyridoxal phosphate (PLP)**: all transaminations, decarboxylations of amino acids (neurotransmitters), δ-ALA synthase, glycogen phosphorylase, cystathionine synthase. **Isoniazid** causes B6 deficiency → **sideroblastic anaemia, polyneuropathy, convulsions**.",
        "**B7 biotin** → CO₂ carrier of **carboxylases** (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase); bound by **avidin** in raw egg white. **B9 folate → THF** (one-carbon units) and **B12 cobalamin** → methylcobalamin and adenosylcobalamin."
      ],
      cn: "这一段是全题得分的骨架：把 8 个 B 族对应的辅酶和一个代表性反应背熟，考官最常抽查 B1/B6/B12。" },
    { h: "2 · Vitamin D — the hormone vitamin", hcn: "维生素 D：其实是激素",
      points: [
        "Structure: a **secosteroid** — ring B of the steroid skeleton is opened. **7-dehydrocholesterol** in the skin → (UV-B, 290–315 nm) → **cholecalciferol = vitamin D₃**; plant **ergocalciferol D₂** comes from the diet.",
        "**Two hydroxylations: liver 25-hydroxylase → 25-OH-D₃ (calcidiol — the storage form and the form measured in blood)**; **kidney 1α-hydroxylase → 1,25-(OH)₂-D₃ (calcitriol — the active hormone)**.",
        "Regulation: **PTH and low phosphate activate 1α-hydroxylase**; calcitriol and FGF-23 inhibit it and switch on the inactivating **24-hydroxylase**.",
        "Action: a **nuclear receptor (VDR) with RXR** → increases **intestinal absorption of Ca²⁺ (calbindin, TRPV6) and phosphate**, works with PTH on bone resorption, increases renal Ca²⁺ reabsorption. Net effect: **calcium ↑ and phosphate ↑** (unlike PTH, which lowers phosphate).",
        "Deficiency: **rickets** in children (bowed legs, rachitic rosary), **osteomalacia** in adults; typical laboratory picture: **Ca low-normal, phosphate low, ALP high, PTH high** (secondary hyperparathyroidism). Overdose: hypercalcaemia, calcification, nephrolithiasis."
      ],
      cn: "维生素 D 是激素：皮肤 7-脱氢胆固醇→肝 25 羟化→肾 1α 羟化（受 PTH 调控）；作用是升钙升磷；缺乏=佝偻病/骨软化，ALP↑ PTH↑。" },
    { h: "3 · Vitamin A — three forms, three functions", hcn: "维生素 A：三种形式三种功能",
      points: [
        "Sources: **retinyl esters** from animal food, **β-carotene** (provitamin) from plants, cleaved by **β-carotene dioxygenase** to two retinals. Stored as retinyl esters in **hepatic stellate (Ito) cells**, transported by **retinol-binding protein (RBP) with transthyretin**.",
        "**Retinol** — transport and storage form; **retinal** — vision; **retinoic acid** — gene regulation. Oxidation retinol → retinal is reversible, retinal → **retinoic acid is irreversible**, so retinoic acid cannot support vision.",
        "**Vision: 11-cis-retinal** is the chromophore of **rhodopsin**; light isomerises it to **all-trans-retinal** (see topic 3B).",
        "**Gene regulation:** retinoic acid binds the nuclear receptors **RAR and RXR** → differentiation of epithelia, mucus-secreting cells, spermatogenesis, immunity, growth.",
        "Deficiency: **night blindness (nyctalopia)** first, then **xerophthalmia, Bitot spots, keratomalacia** (a leading cause of childhood blindness), follicular hyperkeratosis, infections. Excess: **teratogenic** (isotretinoin is contraindicated in pregnancy), acute liver damage, intracranial hypertension."
      ],
      cn: "记 3 个形式对应 3 个功能：视黄醇=运输、视黄醛=视觉、视黄酸=基因调节（不可逆，故不能救夜盲）。缺乏先夜盲后干眼；过量致畸。" },
    { h: "4 · Vitamin E and vitamin K", hcn: "维生素 E 与 K",
      points: [
        "**Vitamin E = tocopherols/tocotrienols**, most active **α-tocopherol**: the main **lipid-phase chain-breaking antioxidant** — its phenolic OH donates H to a lipid peroxyl radical and stops the chain of lipid peroxidation in membranes and LDL.",
        "The resulting tocopheryl radical is **regenerated by vitamin C**, which is in turn regenerated by glutathione/NADPH — quote this **antioxidant network** in topic 4B as well.",
        "Vitamin E deficiency is rare (fat malabsorption, abetalipoproteinaemia, premature infants): **haemolytic anaemia, neuropathy, ataxia, retinopathy**.",
        "**Vitamin K (phylloquinone K₁, menaquinone K₂ from gut bacteria)** is the cofactor of **γ-glutamyl carboxylase**, which converts Glu → **γ-carboxyglutamate (Gla)** and thereby creates the **Ca²⁺-binding sites** of coagulation factors **II, VII, IX, X, protein C and S**, and of **osteocalcin and matrix Gla protein**.",
        "Each carboxylation oxidises vitamin K to the epoxide, regenerated by **vitamin K epoxide reductase (VKOR)** — the target of **warfarin**. Deficiency: bleeding, prolonged **prothrombin time (INR)**; **haemorrhagic disease of the newborn** — hence vitamin K prophylaxis at birth."
      ],
      cn: "E=脂相断链抗氧化剂，被维生素 C 再生；K=γ-羧化酶辅因子，造 Gla 残基→凝血因子 II VII IX X＋蛋白 C/S；华法林抑制 VKOR。" },
    { h: "5 · Folate (B9) and cobalamin (B12)", hcn: "叶酸与维生素 B12：一碳单位与甲硫氨酸循环",
      points: [
        "**Folate → dihydrofolate → tetrahydrofolate (THF)** by dihydrofolate reductase (**blocked by methotrexate/trimethoprim**). THF carries **one-carbon units** at N5/N10 in several oxidation states: **N5,N10-methylene-THF → thymidylate (dTMP) synthesis**, N10-formyl-THF → purine ring, **N5-methyl-THF** → methionine.",
        "**B12 (cobalamin)** — a **corrin ring with cobalt**. Absorption is a chain: saliva **haptocorrin** → stomach **intrinsic factor (parietal cells)** → receptor **cubilin in the terminal ileum** → blood **transcobalamin II**. Liver stores last **3–5 years**.",
        "Only **two B12-dependent reactions in man**: **(1) methionine synthase** (methyl-B12): N5-methyl-THF + homocysteine → methionine + THF; **(2) methylmalonyl-CoA mutase** (adenosyl-B12): L-methylmalonyl-CoA → succinyl-CoA (propionate/odd-chain fatty acid pathway).",
        "**Methyl-folate trap:** without B12 the folate is stuck as N5-methyl-THF, so folate deficiency appears functionally → both vitamins give **megaloblastic anaemia** with hypersegmented neutrophils.",
        "**How to distinguish them:** B12 deficiency additionally raises **methylmalonic acid** and causes **neurological damage — subacute combined degeneration of the spinal cord**; folate deficiency raises only **homocysteine**, without neurological signs. Giving folate alone corrects the anaemia but lets the neuropathy progress.",
        "Causes: **pernicious anaemia** (autoantibodies against intrinsic factor/parietal cells), gastrectomy, ileal resection, strict vegan diet; folate: alcoholism, pregnancy, methotrexate. **Folate supplementation periconceptionally prevents neural tube defects**."
      ],
      cn: "这是本题最常被深挖的一段：一碳单位三个去向、B12 只有两个反应、甲基叶酸陷阱、以及 MMA vs 同型半胱氨酸如何鉴别巨幼贫。" },
    { h: "6 · Vitamin C and a deficiency summary", hcn: "维生素 C 与缺乏症总表",
      points: [
        "**Ascorbate** is a lactone of a hexonic acid; man, primates and guinea pigs lack **L-gulonolactone oxidase**, so it is a vitamin for us. It acts as a **reducing agent that keeps metal ions of hydroxylases in the Fe²⁺/Cu⁺ state**.",
        "Enzymes needing it: **prolyl and lysyl hydroxylase** (collagen — topic 6B), **dopamine β-hydroxylase** (noradrenaline), **peptidyl-glycine amidating monooxygenase**, **7α-hydroxylase** of bile-acid synthesis, degradation of tyrosine (homogentisate oxidase).",
        "Also: water-phase **antioxidant** and regenerator of vitamin E; **converts dietary Fe³⁺ to Fe²⁺ and so promotes non-haem iron absorption**.",
        "**Scurvy**: defective collagen → bleeding gums, loose teeth, perifollicular haemorrhages, poor wound healing, subperiosteal bleeding, anaemia. Appears after ~2–3 months of intake below ~10 mg/day.",
        "Quick deficiency table to recite: **B1 beri-beri/Wernicke; B2 cheilitis; B3 pellagra 3D; B6 neuropathy + sideroblastic anaemia; B7 dermatitis (raw egg white); B9/B12 megaloblastic anaemia; C scurvy; A night blindness; D rickets; E haemolysis/ataxia; K bleeding.**"
      ],
      cn: "维生素 C 的功能三条：羟化酶辅因子（胶原！）、抗氧化、促进非血红素铁吸收；缺乏=坏血病。最后那张缺乏症表要能一口气背完。" }
  ],
  numbers: [
    "25-OH-D₃ in serum: sufficiency **> 75 nmol/L (30 ng/mL)**, deficiency **< 25–30 nmol/L**",
    "Vitamin D intake **400–800 IU/day** (10–20 µg); vitamin C **~100 mg/day**, scurvy below ~10 mg/day",
    "**60 mg tryptophan = 1 mg niacin**; B12 liver store lasts **3–5 years**, folate store only **3–4 months**",
    "UV-B for D₃ synthesis: **290–315 nm**",
    "Fat-soluble = **A, D, E, K** — stored, risk of **hypervitaminosis**; water-soluble are excreted (except B12)"
  ],
  clinic: [
    "**Warfarin** = vitamin K antagonist (VKOR) → monitor **INR**; vitamin K is the antidote",
    "**Methotrexate / trimethoprim / sulfonamides** interfere with folate — rescue with folinic acid (leucovorin)",
    "**Isoniazid** → B6 deficiency; **metformin** and long-term PPI → B12 deficiency; **alcohol** → B1 and folate",
    "**Homocysteine** rises in B12, B9 and B6 deficiency and is an independent vascular risk factor",
    "Elevated **methylmalonic acid** = the specific marker of B12 deficiency"
  ],
  traps: [
    "Vitamin D is **not** a classic vitamin — it is a **prohormone**; the active form is 1,25-(OH)₂-D₃ made in the **kidney**",
    "Retinoic acid **cannot** replace retinal in vision — the oxidation is irreversible",
    "Folate alone in B12 deficiency corrects the blood picture but **worsens the neurology**",
    "B12 deficiency = raised **MMA + homocysteine**; folate deficiency = raised **homocysteine only**",
    "Vitamin K acts as a cofactor of **γ-carboxylation**, it does not 'produce' clotting factors"
  ],
  terms: [
    ["secosteroid", "开环甾体"], ["calcidiol / calcitriol", "骨化二醇/骨化三醇"], ["retinal", "视黄醛"],
    ["γ-carboxyglutamate (Gla)", "γ-羧基谷氨酸"], ["one-carbon unit", "一碳单位"], ["methyl-folate trap", "甲基叶酸陷阱"],
    ["intrinsic factor", "内因子"], ["megaloblastic anaemia", "巨幼细胞性贫血"], ["pernicious anaemia", "恶性贫血"],
    ["scurvy", "坏血病"], ["pellagra", "糙皮病"], ["xerophthalmia", "干眼症"]
  ]
},
b: {
  titleEN: "Pathobiochemistry of diabetes. Hormonal effects on blood sugar. Metabolic changes and protein glycation. Glycated haemoglobin. OGTT.",
  titleCN: "糖尿病的病理生化 · 激素对血糖的作用 · 代谢紊乱与蛋白糖化 · 糖化血红蛋白 · OGTT",
  opener: "Diabetes mellitus is a group of metabolic diseases characterised by **chronic hyperglycaemia** resulting from an **absolute (type 1) or relative (type 2) lack of insulin action**; the long-term damage is caused mainly by **non-enzymatic glycation** and related pathways.",
  openerCN: "糖尿病是以慢性高血糖为特征的一组代谢病，源于胰岛素绝对缺乏（1 型）或作用相对不足（2 型）；远期损害主要来自非酶糖化等四条通路。",
  spine: [
    "血糖的激素调控：胰岛素 vs 胰高血糖素/肾上腺素/皮质醇/GH",
    "1 型与 2 型的病因与病理生理差别",
    "无胰岛素时三大代谢的变化（糖、脂、蛋白）",
    "急性并发症：DKA 与高渗高血糖状态",
    "慢性并发症的四条分子通路（多元醇、AGE、PKC、己糖胺）",
    "蛋白糖化与 HbA1c、果糖胺",
    "诊断：空腹血糖、OGTT、HbA1c 的判读"
  ],
  blocks: [
    { h: "1 · Hormonal control of blood glucose", hcn: "血糖的激素调节",
      points: [
        "**Insulin is the only hypoglycaemic hormone.** Secreted by **β cells** when glucose enters through **GLUT2**, is phosphorylated by **glucokinase** (the glucose sensor), ATP rises → **KATP channel closes** → depolarisation → Ca²⁺ influx → exocytosis (the site of action of **sulfonylureas**). Secretion is **biphasic**.",
        "Insulin signalling: receptor **tyrosine kinase** → IRS-1 → **PI3K → Akt** → translocation of **GLUT4** in muscle and adipose tissue, activation of glycogen synthase (via inhibition of GSK-3), of PFK-2, of acetyl-CoA carboxylase, and **inhibition of hormone-sensitive lipase**. Net: **glycogenesis, glycolysis, lipogenesis, protein synthesis ↑; gluconeogenesis, glycogenolysis, lipolysis, ketogenesis ↓**.",
        "**Glucagon (α cells)** — the fasting hormone: **cAMP/PKA in the liver** → glycogenolysis, gluconeogenesis, ketogenesis; it does **not** act on muscle (no receptor).",
        "**Adrenaline** — β₂/α receptors: hepatic glycogenolysis and gluconeogenesis, **muscle glycogenolysis to lactate**, lipolysis, and it inhibits insulin secretion (α₂).",
        "**Cortisol** — permissive and slow: induces **PEPCK**, proteolysis in muscle (supplies gluconeogenic amino acids), insulin resistance. **Growth hormone** — lipolysis, insulin resistance; **thyroid hormones** — absorption of glucose from the gut and glycogenolysis.",
        "**Incretins (GLP-1, GIP)** amplify insulin secretion after oral glucose — this is why the same glucose load given orally raises insulin more than intravenously; degraded by **DPP-4** (target of gliptins)."
      ],
      cn: "把胰岛素的分泌机制（GLUT2→葡萄糖激酶→KATP→Ca²⁺）与信号通路（RTK→IRS-1→PI3K/Akt→GLUT4）背熟，其余升糖激素各一句话。" },
    { h: "2 · Type 1 versus type 2", hcn: "1 型与 2 型的对比",
      points: [
        "**Type 1: autoimmune destruction of β cells** (anti-GAD65, anti-IA-2, anti-insulin antibodies; HLA-DR3/DR4), **absolute insulin deficiency**, usually young and lean, **ketosis-prone**, must have insulin; C-peptide low or absent.",
        "**Type 2: insulin resistance + progressive β-cell failure**; obesity (especially **visceral**), strong genetic component, insulin/C-peptide often high at first, ketosis rare (residual insulin suppresses lipolysis).",
        "Molecular basis of resistance: free fatty acids and **diacylglycerol/ceramide** activate PKC and serine kinases → **serine phosphorylation of IRS-1** → the signal is broken; low-grade inflammation (**TNF-α, IL-6, resistin**) and low **adiponectin** from visceral adipose tissue.",
        "Other forms: **MODY** (monogenic, e.g. glucokinase mutation), **gestational diabetes**, secondary (pancreatitis, Cushing, acromegaly, glucocorticoids).",
        "**C-peptide** is the marker that distinguishes them and proves endogenous secretion — it is released equimolarly with insulin from proinsulin and is not present in injected insulin."
      ],
      cn: "对比表要能脱口而出：病因、体型、C 肽、酮症倾向、治疗。分子层面用 IRS-1 丝氨酸磷酸化解释胰岛素抵抗。" },
    { h: "3 · Metabolism without insulin", hcn: "胰岛素缺乏时的代谢紊乱",
      points: [
        "**Carbohydrates:** peripheral uptake falls (no GLUT4), while the liver does the opposite of what it should — **glycogenolysis and gluconeogenesis run at full speed** → hyperglycaemia. Above the renal threshold (~10 mmol/L) comes **glycosuria → osmotic diuresis → polyuria, polydipsia, dehydration**.",
        "**Lipids: hormone-sensitive lipase is disinhibited** → lipolysis → flood of free fatty acids → the liver makes **ketone bodies** (acetoacetate, 3-hydroxybutyrate, acetone) because oxaloacetate is drained into gluconeogenesis; VLDL synthesis rises → **hypertriacylglycerolaemia, low HDL, small dense LDL** (diabetic dyslipidaemia).",
        "**Proteins:** proteolysis exceeds synthesis → negative nitrogen balance, weight loss, amino acids feed gluconeogenesis → more urea.",
        "Clinical picture of decompensation: the classic **polyuria, polydipsia, polyphagia and weight loss**; the paradox worth saying aloud — *the cell starves in the middle of plenty*.",
        "**Diabetic ketoacidosis (mainly type 1):** glucose 15–40 mmol/L, **metabolic acidosis with increased anion gap**, ketonaemia/ketonuria, **Kussmaul breathing**, acetone on the breath, dehydration; potassium is **total-body depleted although serum K⁺ may be normal or high** — insulin therapy drives K⁺ into cells, so it must be replaced.",
        "**Hyperosmolar hyperglycaemic state (type 2):** glucose often > 33 mmol/L, osmolality > 320 mmol/kg, **no significant ketosis** (residual insulin), profound dehydration, high mortality."
      ],
      cn: "三大代谢一段一句：糖（利用↓生成↑→渗透性利尿）、脂（HSL 脱抑制→酮体、血脂谱恶化）、蛋白（负氮平衡）。DKA 与 HHS 的差别是必考。" },
    { h: "4 · Chronic complications — four molecular pathways", hcn: "慢性并发症的四条分子通路",
      points: [
        "**(1) Polyol pathway:** in tissues with insulin-independent uptake (lens, nerve, retina, kidney) **aldose reductase** converts glucose → **sorbitol** (using NADPH), sorbitol dehydrogenase → fructose. Sorbitol is trapped osmotically → **cataract, neuropathy**; consumption of NADPH lowers **glutathione** → oxidative stress.",
        "**(2) Non-enzymatic glycation:** glucose reacts with free **amino groups (Lys, N-terminus)** → **Schiff base → Amadori rearrangement → stable ketoamine → advanced glycation end-products (AGEs)** with cross-linking. AGEs bind the receptor **RAGE** → NF-κB → inflammation; they stiffen collagen and thicken basement membranes.",
        "**(3) PKC activation** by de-novo diacylglycerol → altered blood flow, VEGF (retinal neovascularisation), endothelin, extracellular matrix.",
        "**(4) Hexosamine pathway** → UDP-GlcNAc → **O-GlcNAcylation** of transcription factors (PAI-1, TGF-β). All four converge on **mitochondrial superoxide overproduction** (Brownlee's unifying hypothesis).",
        "Result: **microangiopathy** — retinopathy, nephropathy (Kimmelstiel–Wilson nodules, microalbuminuria first), neuropathy; **macroangiopathy** — accelerated atherosclerosis, myocardial infarction, stroke, diabetic foot.",
        "Glycation is **non-enzymatic, irreversible in its late stage, and depends only on glucose concentration and exposure time** — which is exactly why HbA1c works as a retrospective marker."
      ],
      cn: "四条通路是本题的高分点：多元醇、AGE/RAGE、PKC、己糖胺，最后都汇聚到线粒体超氧化物。并发症分微血管与大血管两大类。" },
    { h: "5 · Glycated haemoglobin and other markers", hcn: "糖化血红蛋白与其他指标",
      points: [
        "**HbA1c** = haemoglobin **A** glycated non-enzymatically on the **N-terminal valine of the β chain**; the reaction is slow, continuous and irreversible, so the value reflects **the mean glycaemia of the previous 8–12 weeks** (weighted to the last month), i.e. the lifespan of the erythrocyte.",
        "Units: **IFCC mmol/mol** (target of therapy usually **< 53 mmol/mol = 7 % DCCT**); **HbA1c ≥ 48 mmol/mol (6.5 %) is itself a diagnostic criterion**.",
        "**False values:** falsely **low** when erythrocyte survival is short (haemolysis, bleeding, pregnancy, after transfusion) and in haemoglobinopathies; falsely **high** in iron-deficiency anaemia, uraemia, splenectomy. In those cases use **fructosamine (glycated albumin, 2–3 weeks)**.",
        "The same chemistry glycates **albumin, lens crystallins, collagen, LDL and nerve myelin** — the molecular basis of the complications above.",
        "Self-monitoring and glycaemic profile; **ketones** in urine/blood (3-hydroxybutyrate) during illness; **microalbuminuria (albumin/creatinine ratio)** for early nephropathy."
      ],
      cn: "HbA1c 的三点：糖化在 β 链 N 端缬氨酸、反映 8–12 周平均血糖、≥48 mmol/mol(6.5%) 可诊断；红细胞寿命异常时改用果糖胺。" },
    { h: "6 · Diagnosis and the OGTT", hcn: "诊断标准与口服糖耐量试验",
      points: [
        "**Diagnostic criteria (any one, confirmed):** fasting plasma glucose **≥ 7.0 mmol/L**; 2-h value in OGTT **≥ 11.1 mmol/L**; **HbA1c ≥ 48 mmol/mol (6.5 %)**; or a random glucose ≥ 11.1 mmol/L with classical symptoms.",
        "**Normal:** fasting **3.9–5.6 mmol/L**. **Impaired fasting glucose 5.6–6.9 mmol/L**; **impaired glucose tolerance = 2-h OGTT 7.8–11.0 mmol/L** — together 'prediabetes'.",
        "**OGTT protocol:** at least 3 days of normal carbohydrate intake (≥ 150 g/day), **10–14 h fast**, resting, no smoking; **75 g of glucose in 250–300 mL water** drunk within 5 minutes (children 1.75 g/kg, max 75 g); venous plasma sampled at **0 and 120 min**. Fluoride/oxalate tube — **glycolysis in the tube falsely lowers glucose**.",
        "Contraindications/limits: acute illness, after surgery, during glucocorticoid therapy — the test is then not interpretable. In pregnancy the test is done at **24–28 weeks** with three samples (0, 60, 120 min) and lower cut-offs (**5.1 / 10.0 / 8.5 mmol/L**, one value is enough).",
        "Additional tests: **C-peptide** (β-cell reserve), **autoantibodies** (GAD65, IA-2) for type 1, **HOMA-IR** from fasting insulin and glucose for insulin resistance."
      ],
      cn: "诊断四条线、OGTT 的具体做法（75 g、0 和 120 min、氟化钠管）和妊娠糖尿病三点值，是最容易被追问细节的地方。" }
  ],
  numbers: [
    "Fasting plasma glucose normal **3.9–5.6 mmol/L**; diabetes **≥ 7.0 mmol/L**; OGTT 2-h **≥ 11.1 mmol/L**",
    "**HbA1c ≥ 48 mmol/mol (6.5 %)** diagnostic; therapeutic target usually **< 53 mmol/mol (7 %)**",
    "Renal threshold for glucose **≈ 10 mmol/L**",
    "OGTT load **75 g glucose**; gestational cut-offs **5.1 / 10.0 / 8.5 mmol/L**",
    "DKA: glucose 15–40 mmol/L, pH **< 7.3**, bicarbonate **< 15 mmol/L**; HHS: glucose **> 33 mmol/L**, osmolality **> 320 mmol/kg**"
  ],
  clinic: [
    "Insulin lowers serum **K⁺** — in DKA potassium must be watched and replaced although the initial value may look normal",
    "**Microalbuminuria (ACR 3–30 mg/mmol)** = earliest sign of diabetic nephropathy and a cardiovascular risk marker",
    "**Metformin** works via **AMPK** (lowers hepatic gluconeogenesis); **SGLT2 inhibitors** cause glycosuria; **GLP-1 agonists** exploit the incretin effect",
    "Diabetic **dyslipidaemia**: TAG ↑, HDL ↓, small dense LDL — the reason for statins in diabetics",
    "**Fructosamine** replaces HbA1c whenever erythrocyte lifespan is abnormal"
  ],
  traps: [
    "Glycation is **non-enzymatic**; glycosylation (with an enzyme, in the ER/Golgi) is a different thing — the examiner listens for this word",
    "HbA1c reflects **8–12 weeks**, not 3 days and not the last meal",
    "In type 2 diabetes ketoacidosis is **rare** — residual insulin still suppresses lipolysis; type 2 decompensates as **HHS**",
    "Glucagon has **no effect on muscle glycogen** — muscle lacks the receptor",
    "Do not say 'insulin lowers glucose by making the liver take it up' — the main acute effect is **GLUT4 in muscle and fat plus suppression of hepatic output**"
  ],
  terms: [
    ["insulin resistance", "胰岛素抵抗"], ["C-peptide", "C 肽"], ["incretin effect", "肠促胰素效应"],
    ["ketoacidosis", "酮症酸中毒"], ["hyperosmolar state", "高渗高血糖状态"], ["Schiff base / Amadori product", "席夫碱/Amadori 产物"],
    ["advanced glycation end-product (AGE)", "晚期糖基化终产物"], ["polyol pathway", "多元醇通路"],
    ["aldose reductase", "醛糖还原酶"], ["microalbuminuria", "微量白蛋白尿"], ["fructosamine", "果糖胺"],
    ["osmotic diuresis", "渗透性利尿"]
  ]
}
});
