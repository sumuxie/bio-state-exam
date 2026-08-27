window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 21,
a: {
  titleEN: "Structure of acylglycerols and sphingolipids. Metabolism of acylglycerols and sphingolipids. Transport forms of triacylglycerols.",
  titleCN: "酰基甘油与鞘脂的结构 · 二者的代谢 · 三酰甘油的运输形式",
  opener: "Membrane and storage lipids are built on **two different backbones: glycerol (acylglycerols and glycerophospholipids) and sphingosine (sphingolipids)**; the glycerol family stores energy and forms most membranes, the sphingosine family builds the myelin sheath and the cell-surface recognition code.",
  openerCN: "膜脂与储存脂建立在两种骨架上：甘油（酰基甘油与甘油磷脂）与鞘氨醇（鞘脂）；甘油家族负责储能与构成大部分膜，鞘氨醇家族构成髓鞘与细胞表面的识别密码。",
  spine: [
    "酰基甘油的结构（单/双/三酰甘油）与理化性质",
    "甘油磷脂的结构与各种头基；磷脂酶 A1/A2/C/D 的切点",
    "鞘脂：鞘氨醇→神经酰胺→鞘磷脂/脑苷脂/神经节苷脂",
    "合成：磷脂酸分叉、CDP-二酰甘油与 CDP-胆碱两条路线",
    "降解：脂肪酶、磷脂酶、溶酶体鞘脂降解与鞘脂贮积病",
    "三酰甘油的运输：乳糜微粒与 VLDL、LPL",
    "临床：呼吸窘迫综合征、鞘脂贮积病、高三酰甘油血症"
  ],
  blocks: [
    { h: "1 · Acylglycerols", hcn: "酰基甘油",
      points: [
        "**Glycerol + 1, 2 or 3 fatty acids = mono-, di- and triacylglycerol.** Only the triacylglycerol is completely non-polar; **mono- and diacylglycerols are amphipathic** and act as emulsifiers (and as **second messengers — DAG activates protein kinase C**).",
        "**Stereospecific numbering (sn):** the middle carbon is chiral; natural fats have a **saturated acid at sn-1, an unsaturated at sn-2** — the position **pancreatic lipase cannot cleave**, so 2-monoacylglycerol is the absorbed form.",
        "Physical properties follow the acyl composition: **more unsaturation = lower melting point = oil rather than fat**; chemical characteristics used in analysis are the **saponification number, iodine number and acid number**.",
        "**Function: the body's energy store (38 kJ/g, anhydrous), thermal insulation and mechanical protection**; stored in adipocyte droplets coated with **perilipin**.",
        "**Synthesis:** glycerol-3-phosphate (from DHAP, or from glycerol by glycerol kinase **in the liver only**) + 2 acyl-CoA → **phosphatidate** → (phosphatidate phosphatase) → diacylglycerol → (DGAT) → **triacylglycerol**; in the enterocyte the **monoacylglycerol pathway** is used instead."
      ],
      cn: "单/双/三酰甘油的极性差别（DAG 还是第二信使）；sn 编号与胰脂肪酶不切 sn-2；理化常数；合成经磷脂酸或单酰甘油途径。" },
    { h: "2 · Glycerophospholipids", hcn: "甘油磷脂",
      points: [
        "**Structure: glycerol-3-phosphate with two fatty acids (sn-1 saturated, sn-2 usually unsaturated — often arachidonate) and a head group esterified to the phosphate.** They are the **amphipathic building blocks of every biological membrane**.",
        "**Head groups: phosphatidylcholine (lecithin — the most abundant, outer leaflet), phosphatidylethanolamine (cephalin, inner leaflet), phosphatidylserine (inner leaflet — its exposure is the 'eat-me' signal of apoptosis and the procoagulant surface of platelets), phosphatidylinositol (source of IP₃/DAG and of GPI anchors), and CARDIOLIPIN (diphosphatidylglycerol — only in the inner mitochondrial membrane).**",
        "**Plasmalogens** have an ether (vinyl-ether) bond at sn-1 — abundant in heart and myelin, made in **peroxisomes** (deficient in Zellweger syndrome). **Platelet-activating factor (PAF)** is a related ether phospholipid, an extremely potent mediator.",
        "**Phospholipases define the cleavage sites and are worth drawing: A₁ (sn-1), A₂ (sn-2 — releases ARACHIDONIC ACID, the rate-limiting step of eicosanoid synthesis; present in pancreatic juice and snake venom), C (splits off the phosphorylated head group → DAG + IP₃, the signalling enzyme), D (removes the head group alone → phosphatidate).**",
        "**Synthesis, two routes: (a) activated head group — CDP-choline/CDP-ethanolamine + DAG (the Kennedy pathway); (b) activated backbone — CDP-diacylglycerol + inositol/glycerol (for PI and cardiolipin).** Phosphatidylcholine can also be made by **methylation of phosphatidylethanolamine with 3 SAM** in the liver.",
        "**Clinical anchor: pulmonary surfactant is ~80 % phospholipid, chiefly dipalmitoyl-phosphatidylcholine, made by type II pneumocytes from about week 24 and mature by week 35; the lecithin/sphingomyelin ratio > 2 in amniotic fluid indicates maturity, and its lack causes neonatal respiratory distress syndrome** (topic 28B)."
      ],
      cn: "结构＋五种头基（含心磷脂）；磷脂酶 A1/A2/C/D 的切点必须能画；两条合成路线（CDP-胆碱 vs CDP-二酰甘油）；肺表面活性物质与 L/S 比值是最好的临床落点。" },
    { h: "3 · Sphingolipids", hcn: "鞘脂",
      points: [
        "**Backbone: SPHINGOSINE (an C18 amino alcohol) — made from SERINE + PALMITOYL-CoA.** Adding a fatty acid by an **amide bond gives CERAMIDE**, the parent of the whole family and itself a signalling molecule (apoptosis).",
        "**Ceramide + phosphocholine = SPHINGOMYELIN** — the only sphingolipid that is a phospholipid; abundant in **myelin** and in the outer leaflet of membranes.",
        "**Ceramide + one sugar = cerebroside (galactosyl- in myelin, glucosyl- elsewhere); + a short sugar chain = globoside; + sugar chain containing SIALIC ACID (N-acetylneuraminate) = GANGLIOSIDE** — concentrated in neuronal membranes and lipid rafts.",
        "**Function: structural (myelin — sphingolipids are ~20–25 % of its dry mass), and above all RECOGNITION** — glycosphingolipids carry the **ABO and Lewis blood-group determinants**, receptors for toxins (cholera toxin binds ganglioside GM1) and viruses, and they organise **lipid rafts** with cholesterol.",
        "**Degradation is LYSOSOMAL, one residue at a time by specific acid hydrolases (with activator proteins such as saposins).** A missing enzyme means the substrate accumulates — **the sphingolipidoses**, autosomal recessive except Fabry (X-linked)."
      ],
      cn: "鞘氨醇由丝氨酸＋软脂酰 CoA 生成；神经酰胺是共同母体；加磷酸胆碱=鞘磷脂、加糖=脑苷脂、加唾液酸=神经节苷脂；功能是髓鞘＋识别（血型、霍乱毒素受体、脂筏）；降解在溶酶体逐个切。" },
    { h: "4 · Sphingolipidoses — the storage diseases", hcn: "鞘脂贮积病",
      points: [
        "**Tay–Sachs disease — hexosaminidase A, GM2 ganglioside accumulates:** progressive neurodegeneration from ~6 months, **cherry-red macula, NO hepatosplenomegaly**, death in early childhood; frequent in Ashkenazi Jews.",
        "**Gaucher disease — glucocerebrosidase, glucocerebroside:** the **commonest** lysosomal storage disease; **hepatosplenomegaly, bone crises and pancytopenia, 'crumpled tissue paper' Gaucher cells**; treated by **enzyme replacement**.",
        "**Niemann–Pick A/B — sphingomyelinase:** hepatosplenomegaly plus (in type A) neurodegeneration and a cherry-red spot.",
        "**Fabry disease — α-galactosidase A, X-linked, globotriaosylceramide:** **acroparaesthesia (burning pain in hands and feet), angiokeratomas, corneal opacity, renal failure, cardiomyopathy, stroke** — the one that presents in adults.",
        "**Krabbe disease — galactocerebrosidase** (globoid cells, demyelination); **metachromatic leukodystrophy — arylsulfatase A** (sulfatide accumulation, demyelination).",
        "How to answer if asked for a system: **name the enzyme, the accumulated lipid, whether the brain is involved, and one physical sign** — that is exactly the structure examiners are listening for."
      ],
      cn: "六个病＝六个酶＋六种堆积物：Tay–Sachs(己糖胺酶 A/GM2、樱桃红斑、无肝脾大)、Gaucher(葡糖脑苷脂酶，最常见、肝脾大骨危象)、Niemann–Pick(鞘磷脂酶)、Fabry(α-半乳糖苷酶 A、X 连锁、肢端灼痛)、Krabbe、异染性脑白质营养不良。" },
    { h: "5 · Transport forms of triacylglycerols", hcn: "三酰甘油的运输形式",
      points: [
        "**Triacylglycerols are insoluble, so they travel only in lipoprotein cores: CHYLOMICRONS (apo B-48) for dietary (exogenous) fat, and VLDL (apo B-100) for endogenous fat made or repackaged by the liver.**",
        "**Chylomicron route: enterocyte → lymph (lacteals, thoracic duct) → blood — this is why fat bypasses the liver on first pass, unlike sugars and amino acids.** Short- and medium-chain fatty acids instead go directly into the **portal vein bound to albumin**.",
        "**Lipoprotein lipase (LPL) on the capillary endothelium of muscle, heart and adipose tissue, activated by apo C-II (and inhibited by apo C-III), hydrolyses the core triacylglycerols → fatty acids taken up locally, glycerol returned to the liver.** Insulin induces adipose LPL; fasting and exercise induce muscle/heart LPL.",
        "**Free fatty acids released from adipose tissue travel bound to ALBUMIN** — the third transport form, and the one that supplies most tissues between meals.",
        "**Failure of this system is visible in the laboratory: chylomicronaemia (LPL or apo C-II deficiency) gives milky serum, eruptive xanthomas and a risk of ACUTE PANCREATITIS above ~10 mmol/L of triacylglycerols; hypertriacylglycerolaemia is otherwise usually secondary (obesity, alcohol, diabetes, oestrogens).**"
      ],
      cn: "两种颗粒（乳糜微粒 apoB-48 走淋巴、VLDL apoB-100）＋白蛋白结合的游离脂肪酸；LPL 由 apoC-II 激活；乳糜微粒血症的临床（乳白血清、发疹性黄瘤、胰腺炎风险）。" },
    { h: "6 · Where these lipids meet the rest of metabolism", hcn: "与其他代谢的连接点",
      points: [
        "**Phosphatidate is the branch point** between storage (triacylglycerol) and membrane (phospholipid) lipids — regulated by the cell's growth versus storage needs.",
        "**Signalling molecules born from these lipids: DAG and IP₃ (PLC), arachidonic acid and all eicosanoids (PLA₂), ceramide and sphingosine-1-phosphate (apoptosis vs survival), PAF, phosphatidylinositol phosphates (PIP₂, PIP₃ — the insulin/PI3K pathway), and lysophosphatidic acid.** Membranes are therefore not just barriers but a **reservoir of second messengers**.",
        "**Choline** links to one-carbon metabolism (it can be oxidised to **betaine**, a methyl donor that remethylates homocysteine) and to **acetylcholine**; choline deficiency causes fatty liver because VLDL cannot be assembled.",
        "**Inositol** links to the polyol pathway and is depleted in diabetic neuropathy; **serine** links to glycine and one-carbon units.",
        "**Clinically the whole topic converges on three things: the surfactant (respiratory distress), the myelin sheath (leukodystrophies, multiple sclerosis) and the plasma triacylglycerol concentration (pancreatitis, metabolic syndrome).** Ending with that triad makes the answer look organised."
      ],
      cn: "磷脂酸是分叉点；膜脂是第二信使的储库（DAG/IP3、花生四烯酸、神经酰胺、PIP2/PIP3、PAF）；胆碱与一碳代谢及脂肪肝的关系；最后用三个临床方向（表面活性物质、髓鞘、血三酰甘油）收尾。" }
  ],
  numbers: [
    "Fat **38 kJ/g**; surfactant ~**80 % phospholipid**, mainly **dipalmitoyl-phosphatidylcholine**; **L/S ratio > 2** = lung maturity",
    "Sphingosine = **serine + palmitoyl-CoA (C18)**; sphingolipids ~**20–25 %** of myelin dry mass",
    "Triacylglycerols desirable **< 1.7 mmol/L**; pancreatitis risk **> 10 mmol/L**",
    "Cardiolipin is confined to the **inner mitochondrial membrane**",
    "Gaucher disease is the **commonest** lysosomal storage disorder; Fabry is the **X-linked** one"
  ],
  clinic: [
    "**Neonatal respiratory distress syndrome** — surfactant deficiency; antenatal corticosteroids, exogenous surfactant",
    "**Sphingolipidoses** — Tay–Sachs, Gaucher, Niemann–Pick, Fabry, Krabbe, metachromatic leukodystrophy",
    "**Familial chylomicronaemia** — milky serum, eruptive xanthomas, acute pancreatitis",
    "**Snake venom and pancreatic phospholipase A₂** — membrane destruction and arachidonate release",
    "**Multiple sclerosis** — myelin (sphingolipid-rich) as the target; oligoclonal bands in CSF"
  ],
  traps: [
    "**Sphingomyelin is both a sphingolipid and a phospholipid** — the only member of both families",
    "Phospholipase **A₂** releases arachidonate from **sn-2**; phospholipase **C** makes DAG + IP₃ — do not swap them",
    "Dietary fat reaches the blood through the **lymph**, not the portal vein (except short/medium-chain acids)",
    "The adipocyte cannot use the glycerol it releases — **no glycerol kinase**",
    "Gangliosides contain **sialic acid**; cerebrosides contain a single neutral sugar"
  ],
  terms: [
    ["acylglycerol", "酰基甘油"], ["phosphatidate", "磷脂酸"], ["phosphatidylcholine", "磷脂酰胆碱"],
    ["cardiolipin", "心磷脂"], ["plasmalogen", "缩醛磷脂"], ["sphingosine", "鞘氨醇"], ["ceramide", "神经酰胺"],
    ["sphingomyelin", "鞘磷脂"], ["cerebroside / ganglioside", "脑苷脂/神经节苷脂"],
    ["lysosomal storage disease", "溶酶体贮积病"], ["surfactant", "肺表面活性物质"]
  ]
},
b: {
  titleEN: "Metabolic pathways occurring in the kidney. Renin–angiotensin system. Urine and urinary sediment. Urine examination, physiological and pathological components. Clearance.",
  titleCN: "肾脏的代谢途径 · 肾素-血管紧张素系统 · 尿液与尿沉渣 · 尿液检查与病理成分 · 清除率",
  opener: "The kidney is not only an excretory organ: it is a **metabolically active tissue** that performs **gluconeogenesis, ammoniagenesis, the final hydroxylation of vitamin D, erythropoietin production and the whole renin–angiotensin cascade**, while filtering 180 litres a day and returning 99 % of it.",
  openerCN: "肾不仅是排泄器官，更是代谢活跃的组织：进行糖异生、生成氨、完成维生素 D 的最后羟化、分泌促红细胞生成素、启动肾素-血管紧张素级联；同时每天滤过 180 升并回收其中 99%。",
  spine: [
    "肾的能量代谢与分区差别（皮质有氧、髓质糖酵解）",
    "肾的六大代谢功能（糖异生、氨、维生素 D、EPO、肽类降解、酸碱）",
    "肾素-血管紧张素-醛固酮系统与药物靶点",
    "尿的生成：滤过、重吸收、分泌；清除率与 GFR",
    "尿液的正常成分与理化性质",
    "病理成分：蛋白、糖、酮体、血、胆红素、亚硝酸盐、白细胞酯酶",
    "尿沉渣：细胞、管型、结晶"
  ],
  blocks: [
    { h: "1 · Metabolism of the kidney", hcn: "肾的代谢特点",
      points: [
        "The kidneys are ~0.5 % of body mass but receive **20–25 % of the cardiac output** and consume **~10 % of the oxygen** — almost all of it for the **Na⁺/K⁺-ATPase** driving reabsorption.",
        "**Zonal difference: the cortex is aerobic (fatty acids, ketone bodies, lactate, glutamine — and it is the site of gluconeogenesis); the medulla works at low pO₂ and relies on ANAEROBIC GLYCOLYSIS** — which is why the medulla (and especially the thick ascending limb) is the part that dies in ischaemia and in acute tubular necrosis.",
        "**Gluconeogenesis:** the kidney contributes ~10 % of glucose production, rising to **40 % in prolonged starvation and acidosis**, using **glutamine, lactate and glycerol**; note it has **glucose-6-phosphatase** (like liver, unlike muscle).",
        "**Ammoniagenesis: glutamine → glutamate + NH₄⁺ (glutaminase) → excreted with H⁺** — the main adaptive mechanism for excreting acid, strongly induced by chronic acidosis (topics 18A, 25B).",
        "**Endocrine functions: 1α-hydroxylase → CALCITRIOL; ERYTHROPOIETIN from peritubular fibroblasts (hypoxia → HIF); renin from the juxtaglomerular apparatus; degradation of insulin, PTH, gastrin and β₂-microglobulin** (which is why insulin requirements fall in renal failure and β₂-microglobulin rises)."
      ],
      cn: "肾耗氧大部分用于钠泵；皮质有氧＋糖异生、髓质糖酵解（缺血最易坏死）；六大功能中要特别记住糖异生、产氨、1α 羟化、EPO、以及降解多肽激素。" },
    { h: "2 · The renin–angiotensin–aldosterone system", hcn: "肾素-血管紧张素-醛固酮系统",
      points: [
        "**Trigger for renin release from juxtaglomerular cells: low renal perfusion pressure, low NaCl at the macula densa, and sympathetic β₁ stimulation.**",
        "**Cascade: angiotensinogen (liver, an α₂-globulin) → (RENIN, the rate-limiting protease) → angiotensin I (10 aa) → (ANGIOTENSIN-CONVERTING ENZYME, mainly in the pulmonary endothelium) → ANGIOTENSIN II (8 aa).**",
        "**Angiotensin II via AT₁ receptors (Gq): potent vasoconstriction (efferent arteriole preferentially — maintaining GFR), aldosterone release from the zona glomerulosa, ADH release and thirst, sympathetic facilitation, Na⁺/H⁺ exchange in the proximal tubule, and growth/fibrosis of heart and vessels.**",
        "**Aldosterone (mineralocorticoid receptor in the collecting duct): more ENaC and Na⁺/K⁺-ATPase → Na⁺ and water retention, K⁺ and H⁺ secretion** — hence hyperaldosteronism gives **hypertension with hypokalaemia and metabolic alkalosis**.",
        "**ACE also degrades bradykinin** — which explains the **dry cough and angioedema of ACE inhibitors** (sartans do not have it).",
        "**Drug targets in order: β-blockers (renin release), aliskiren (renin), ACE inhibitors, ARBs/sartans, mineralocorticoid antagonists (spironolactone, eplerenone), and SGLT2 inhibitors acting on tubuloglomerular feedback.** Counter-regulation comes from **ANP/BNP, NO and prostaglandins** — the last being why NSAIDs cause acute kidney injury in hypovolaemia."
      ],
      cn: "刺激三条→肾素（限速）→血管紧张素 I→ACE→血管紧张素 II（AT1 的五个作用）→醛固酮；ACE 也降解缓激肽（干咳）；药物按级联顺序列出；NSAID 在低容量时致 AKI 的机制。" },
    { h: "3 · Clearance and glomerular filtration", hcn: "清除率与肾小球滤过率",
      points: [
        "**Clearance = the volume of plasma completely cleared of a substance per unit time: C = (U × V) / P** (U urine concentration, V urine flow in mL/min, P plasma concentration), expressed in mL/min and standardised to **1.73 m² body surface**.",
        "**An ideal GFR marker is freely filtered, neither reabsorbed nor secreted, not metabolised and physiologically inert — INULIN is the gold standard** (also iohexol, ⁵¹Cr-EDTA). **Normal GFR ~125 mL/min (1.73 m²) = 180 L/day**, of which **99 % is reabsorbed → 1–2 L of urine**.",
        "**Creatinine clearance overestimates GFR slightly (~10–15 %) because creatinine is also secreted in the proximal tubule**; nevertheless serum creatinine with an **eGFR equation (CKD-EPI, standardised to IDMS)** is the routine tool. **Cystatin C** is an alternative independent of muscle mass.",
        "**Serum creatinine is an insensitive early marker: GFR must fall by ~50 % before it leaves the reference range ('creatinine-blind range')** — say this, it shows understanding. It also depends on muscle mass, diet, age and sex.",
        "**Interpretation of other clearances: PAH clearance ≈ renal plasma flow (~600 mL/min); the filtration fraction = GFR/RPF ≈ 20 %; the fractional excretion of sodium (FENa < 1 % suggests prerenal, > 2 % renal azotaemia); free water clearance in disorders of osmolality.**",
        "**CKD stages G1–G5 by eGFR (≥ 90, 60–89, 30–59, 15–29, < 15 mL/min/1.73 m²), combined with albuminuria categories A1–A3** — the modern classification."
      ],
      cn: "清除率公式与理想标志物（菊粉）；GFR 125 mL/min=180 L/天、回收 99%；肌酐清除率略高估（有分泌）；『肌酐盲区』——GFR 降一半才升高；FENa 的用途；CKD 分期。" },
    { h: "4 · Normal urine — physical and chemical", hcn: "正常尿液的理化性质与成分",
      points: [
        "**Volume 1–2 L/day** (polyuria > 2.5–3 L, oliguria < 500 mL, anuria < 100 mL); **colour** straw-yellow from **urochrome**; clear when fresh.",
        "**pH 4.5–8 (usually ~6)** — depends on diet (meat acidifies, vegetables alkalinise); **specific gravity 1.003–1.035, osmolality 50–1200 mmol/kg** — the range that demonstrates the kidney's concentrating ability.",
        "**Normal solutes: urea (the main one, ~25–30 g/day), creatinine (~1–2 g/day), uric acid, ammonium, Na⁺, K⁺, Cl⁻, phosphate, sulfate, small amounts of protein (< 150 mg/day, of which Tamm–Horsfall/uromodulin is a large part) and urobilinogen.**",
        "**Physiologically absent or minimal: glucose (renal threshold ~10 mmol/L), ketones, bilirubin, blood, leukocytes, nitrites, bacteria, casts other than an occasional hyaline one.**",
        "**Preanalytics: the midstream morning sample, examined within 1–2 hours (or refrigerated) — otherwise bacteria multiply, casts dissolve in alkaline urine, and glucose is consumed.** For quantitative studies a 24-hour collection is used; **the albumin/creatinine ratio in a spot sample replaces it for albuminuria.**"
      ],
      cn: "量、颜色、pH、比重与渗透量的正常范围；正常溶质（尿素最多）与正常应无的成分；分析前要求（晨尿中段、2 小时内检查）与用 ACR 替代 24 小时尿。" },
    { h: "5 · Pathological components", hcn: "尿液的病理成分",
      points: [
        "**Proteinuria > 150 mg/day. Types: glomerular (albumin — from a damaged charge/size barrier; > 3.5 g/day = nephrotic), tubular (low-molecular-weight proteins such as β₂-microglobulin, retinol-binding protein — failed reabsorption), overflow (Bence-Jones light chains in myeloma, myoglobin, haemoglobin), and postrenal.** Note the dipstick detects mainly **albumin** and misses light chains — a classic exam trap. **Orthostatic and exercise proteinuria are benign.**",
        "**Glycosuria:** hyperglycaemia above the threshold (diabetes), or a normal glucose with a tubular defect (**renal glycosuria, Fanconi syndrome, pregnancy, SGLT2 inhibitors**).",
        "**Ketonuria:** starvation, ketogenic diet, vomiting in children, **diabetic ketoacidosis** — the strip detects acetoacetate, not 3-hydroxybutyrate.",
        "**Haematuria/haemoglobinuria/myoglobinuria:** the strip is positive for 'blood' in all three; **microscopy distinguishes them — erythrocytes present = haematuria, absent = haemo- or myoglobinuria.** **Dysmorphic red cells and red-cell casts mean a GLOMERULAR origin.**",
        "**Bilirubin (conjugated only) with absent urobilinogen = cholestasis; increased urobilinogen without bilirubin = haemolysis** (topic 14A). **Nitrites** (from bacterial nitrate reductase) and **leukocyte esterase** indicate infection; **porphyrins** darken the urine in porphyria; **alkaptonuria** darkens it on standing.",
        "**Also: pH pointers (persistently alkaline urine suggests urea-splitting infection or renal tubular acidosis), the osmolality response to dehydration (concentrating ability), and specific metabolic screens (amino acids, organic acids).**"
      ],
      cn: "蛋白尿四型（肾小球/肾小管/溢出/肾后，试纸只测白蛋白测不到本周蛋白）；糖尿、酮尿、血尿三种可能（靠镜检区分）、胆红素与尿胆原的组合、亚硝酸盐与白细胞酯酶。" },
    { h: "6 · Urinary sediment", hcn: "尿沉渣",
      points: [
        "**Cells: erythrocytes (< 5/µL normally; DYSMORPHIC = glomerular, isomorphic = urological), leukocytes (< 10/µL; pyuria = infection or interstitial nephritis — 'sterile pyuria' suggests tuberculosis, analgesic nephropathy or chlamydia), epithelial cells (squamous = contamination, renal tubular cells = tubular damage).**",
        "**Casts are formed in the tubular lumen from Tamm–Horsfall protein and are the only elements that PROVE a renal origin: hyaline (benign, after exercise or dehydration), granular and 'muddy brown' (acute tubular necrosis), RED-CELL (glomerulonephritis — the most important one), white-cell (pyelonephritis, interstitial nephritis), fatty (nephrotic syndrome, with 'Maltese cross' lipid droplets under polarised light), waxy and broad (chronic renal failure).**",
        "**Crystals: uric acid (acid urine, rhomboid/needle), calcium oxalate (envelope-shaped — ethylene glycol poisoning gives monohydrate needles), triple phosphate/struvite (coffin-lid, alkaline urine from urease-producing Proteus), cystine (hexagonal — always pathological, cystinuria), and drug crystals (sulfonamides, aciclovir, indinavir).**",
        "**Bacteria and yeasts**; significant bacteriuria is classically **≥ 10⁵ CFU/mL** in a properly collected midstream sample.",
        "How to use the sediment in an answer: **'the sediment tells you WHERE the problem is — dysmorphic red cells and red-cell casts mean glomerulus; muddy brown casts mean tubular necrosis; leukocytes with nitrites mean infection; crystals point to the stone or the poison.'**"
      ],
      cn: "细胞（畸形红细胞=肾小球来源）、管型（红细胞管型=肾小球肾炎、泥棕色颗粒管型=急性肾小管坏死、蜡样管型=慢性肾衰）、结晶（尿酸、草酸钙、鸟粪石、胱氨酸六角形）。最后那句『沉渣告诉你病变在哪一层』是很好的收尾。" }
  ],
  numbers: [
    "Renal blood flow **20–25 % of cardiac output**; GFR **~125 mL/min = 180 L/day**, urine **1–2 L/day**",
    "Urine pH **4.5–8**, specific gravity **1.003–1.035**, osmolality **50–1200 mmol/kg**",
    "Proteinuria **> 150 mg/day** (nephrotic **> 3.5 g/day**); albuminuria A1 < 3, A2 3–30, A3 > 30 mg/mmol creatinine",
    "Renal threshold for glucose **~10 mmol/L**; significant bacteriuria **≥ 10⁵ CFU/mL**",
    "CKD stages by eGFR: **≥90, 60–89, 30–59, 15–29, <15 mL/min/1.73 m²**"
  ],
  clinic: [
    "**Prerenal vs renal azotaemia** — FENa < 1 % vs > 2 %, urea/creatinine ratio, muddy brown casts",
    "**Nephrotic syndrome** — > 3.5 g/day proteinuria, hypoalbuminaemia, oedema, hyperlipidaemia, thrombophilia",
    "**Ethylene glycol poisoning** — calcium oxalate crystals, high anion and osmolal gap (topic 22B)",
    "**ACE inhibitor cough** (bradykinin) and **NSAID-induced AKI** (loss of prostaglandin vasodilatation)",
    "**Anaemia of chronic kidney disease** — erythropoietin deficiency; **renal osteodystrophy** — no calcitriol"
  ],
  traps: [
    "The dipstick 'protein' pad detects **albumin**, not Bence-Jones light chains — order electrophoresis/immunofixation",
    "A positive 'blood' pad with **no red cells** on microscopy means haemoglobinuria or myoglobinuria",
    "Creatinine rises only after GFR has fallen by about **half** — normal creatinine does not exclude renal disease",
    "**Casts prove renal origin**; free cells alone do not",
    "The medulla works **anaerobically** — it is the first tissue to suffer in hypotension, despite the kidney's huge blood flow"
  ],
  terms: [
    ["clearance", "清除率"], ["glomerular filtration rate", "肾小球滤过率"], ["juxtaglomerular apparatus", "球旁器"],
    ["renin–angiotensin system", "肾素-血管紧张素系统"], ["aldosterone", "醛固酮"], ["erythropoietin", "促红细胞生成素"],
    ["proteinuria", "蛋白尿"], ["Tamm–Horsfall protein", "Tamm–Horsfall 蛋白"], ["cast", "管型"],
    ["dysmorphic erythrocytes", "畸形红细胞"], ["fractional excretion of sodium", "钠排泄分数"]
  ]
}
});
