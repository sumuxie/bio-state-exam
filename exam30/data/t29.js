window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 29,
a: {
  titleEN: "Metabolism of eicosanoids. Linoleic, linolenic and arachidonic acid as precursors of prostanoids and leukotrienes. Cyclooxygenase and lipoxygenase pathway.",
  titleCN: "类二十烷酸的代谢 · 亚油酸/亚麻酸/花生四烯酸作为前列腺素类与白三烯的前体 · 环加氧酶与脂加氧酶通路",
  opener: "Eicosanoids are **local hormones made on demand from a C20 polyunsaturated fatty acid released from the membrane**; the rate-limiting step is not an enzyme of synthesis but the **liberation of arachidonic acid by phospholipase A₂**, after which the substrate is split between two branches — **cyclooxygenase (prostanoids) and lipoxygenase (leukotrienes)**.",
  openerCN: "类二十烷酸是即时合成的局部激素，原料是从膜上释放的二十碳多不饱和脂肪酸；限速步骤不是合成酶，而是磷脂酶 A2 释放花生四烯酸；随后底物在两条支路间分流——环加氧酶（前列腺素类）与脂加氧酶（白三烯）。",
  spine: [
    "前体脂肪酸：从必需脂肪酸到花生四烯酸（三个系列）",
    "释放：磷脂酶 A2/C 与糖皮质激素的阻断点",
    "COX 支路：PGH2 与各组织特异合酶",
    "LOX 支路：5-LOX/FLAP → LTB4 与半胱氨酰白三烯",
    "受体、作用与失活",
    "药理学：阿司匹林、NSAID、昔布类、糖皮质激素、白三烯药物",
    "ω-3 的竞争、脂氧素/消退素与非酶产物（异前列腺素）"
  ],
  blocks: [
    { h: "1 · The precursors", hcn: "前体脂肪酸",
      points: [
        "**Essential fatty acids are the starting point: LINOLEIC acid (18:2 ω-6) → γ-linolenic → dihomo-γ-linolenic (20:3, series 1) → ARACHIDONIC ACID (20:4 ω-6, series 2); α-LINOLENIC acid (18:3 ω-3) → EPA (20:5, series 3) → DHA.** Man cannot desaturate beyond C9, so both parent acids must come from the diet (topic 19A).",
        "**The subscript of every eicosanoid gives the number of double bonds left after cyclisation: dihomo-γ-linolenic → PG₁, arachidonic → PG₂ and LT₄, EPA → PG₃ and LT₅.** Because **arachidonate is by far the most abundant C20 acid in human membranes, series-2 prostanoids and series-4 leukotrienes dominate**.",
        "**Arachidonic acid is stored esterified at the sn-2 position of membrane phospholipids** — mainly phosphatidylinositol, phosphatidylcholine and phosphatidylethanolamine — so the membrane is the reservoir of the whole system.",
        "**Eicosanoids are: made on demand (never stored), extremely short-lived (seconds to minutes), act locally as autocrine/paracrine mediators through GPCRs, and are inactivated within one passage through the LUNG** (15-hydroxy-prostaglandin dehydrogenase; leukotrienes by ω-oxidation and biliary excretion).",
        "**Dietary consequence: increasing ω-3 intake replaces some arachidonate in membranes → series-3 prostanoids and series-5 leukotrienes, which are less thrombogenic and less inflammatory — the biochemical basis of the fish-oil story.**"
      ],
      cn: "三个前体→三个系列（下标=剩余双键数）；花生四烯酸酯化在膜磷脂 sn-2 位；类二十烷酸的四个共同性质（不储存、半衰期极短、局部作用、经肺灭活）；ω-3 的竞争机制。" },
    { h: "2 · Release of the substrate — the rate-limiting step", hcn: "底物释放：真正的限速步",
      points: [
        "**PHOSPHOLIPASE A₂ hydrolyses the sn-2 ester bond and liberates arachidonic acid** — the cytosolic cPLA₂ is activated by **Ca²⁺ and by phosphorylation (MAPK)** in response to inflammatory stimuli, mechanical injury, complement, cytokines, thrombin and hypoxia.",
        "**A second route: phospholipase C → diacylglycerol → DAG lipase → arachidonate** (important in platelets and in the endocannabinoid system).",
        "**GLUCOCORTICOIDS inhibit this step indirectly, by inducing lipocortin/annexin-1 and by suppressing cPLA₂ and COX-2 transcription — which is why steroids block BOTH branches, while NSAIDs block only the cyclooxygenase branch.** This contrast is the single most examined point of the topic.",
        "**A practical corollary: when COX is blocked, the released arachidonate can be SHUNTED into the lipoxygenase branch — the mechanism of aspirin-exacerbated respiratory disease (aspirin-induced asthma).**",
        "**Free arachidonate is also the substrate of a third, cytochrome-P450 branch (EETs and 20-HETE, vascular tone and renal function) and of NON-ENZYMATIC peroxidation → ISOPROSTANES, which are the best available marker of oxidative stress in vivo** (topic 4B)."
      ],
      cn: "限速步是磷脂酶 A2（Ca²⁺ 与磷酸化激活）；糖皮质激素在此阻断两条支路，NSAID 只挡一条；COX 被阻后底物分流到 LOX→阿司匹林哮喘；此外还有 P450 支路与非酶的异前列腺素。" },
    { h: "3 · The cyclooxygenase pathway", hcn: "环加氧酶通路",
      points: [
        "**Prostaglandin H synthase (= cyclooxygenase) has two activities in one protein: a CYCLOOXYGENASE activity (2 O₂ added, ring formed → PGG₂) and a PEROXIDASE activity (PGG₂ → PGH₂).** **PGH₂ is the unstable common precursor of all prostanoids.**",
        "**Tissue-specific synthases decide the product: THROMBOXANE SYNTHASE in platelets → TXA₂; PROSTACYCLIN SYNTHASE in endothelium → PGI₂; PGE, PGD and PGF synthases elsewhere (PGD₂ mainly in mast cells and brain).**",
        "**COX-1 is CONSTITUTIVE — platelets (thromboxane), gastric mucosa (PGE₂ protection), kidney (perfusion), endothelium; COX-2 is INDUCIBLE by cytokines, endotoxin and growth factors in inflammation (and constitutive in kidney, brain and endothelium).** COX-3 is a splice variant discussed for paracetamol.",
        "**The physiological pair to memorise: TXA₂ (platelets) = aggregation + vasoconstriction; PGI₂ (endothelium) = the exact opposite. Their balance decides haemostasis** — and the two enzymes sit in cells with different capacity for resynthesis, which is what makes low-dose aspirin work (below).",
        "**Actions of PGE₂ worth listing: vasodilatation, FEVER (hypothalamic set-point via EP3), PAIN sensitisation, protection of gastric mucosa (mucus and bicarbonate up, acid down), renal vasodilatation and renin release, uterine contraction, and patency of the ductus arteriosus.** **PGF₂α: uterine and bronchial constriction, luteolysis. PGD₂: bronchoconstriction, vasodilatation, mast-cell mediator.**",
        "**Degradation: 15-hydroxyprostaglandin dehydrogenase, then ω- and β-oxidation; TXA₂ (half-life ~30 s) → inactive TXB₂, PGI₂ → 6-keto-PGF₁α — the metabolites measured in urine when the system is studied.**"
      ],
      cn: "PGH 合酶两个活性→PGH2 是共同前体→各组织合酶决定产物；COX-1 组成型 vs COX-2 诱导型；TXA2 与 PGI2 的对立；PGE2 的六大作用；灭活酶与尿中代谢物。" },
    { h: "4 · The lipoxygenase pathway", hcn: "脂加氧酶通路",
      points: [
        "**5-LIPOXYGENASE, together with the membrane protein FLAP (5-LOX-activating protein), converts arachidonate → 5-HPETE → LTA₄** in neutrophils, eosinophils, monocytes/macrophages and mast cells.",
        "**LTA₄ then goes two ways: LTA₄ hydrolase → LEUKOTRIENE B₄ (a powerful chemoattractant and activator of neutrophils — adhesion, degranulation, respiratory burst), or LTC₄ synthase adds GLUTATHIONE → LTC₄ → (loss of glutamate) LTD₄ → (loss of glycine) LTE₄ — the CYSTEINYL LEUKOTRIENES, historically the 'slow-reacting substance of anaphylaxis'.**",
        "**Cysteinyl leukotrienes are ~1000× more potent bronchoconstrictors than histamine; they also increase vascular permeability, mucus secretion and eosinophil recruitment — the core mediators of ASTHMA and anaphylaxis.**",
        "**12- and 15-lipoxygenases give 12-HETE (platelets) and 15-HETE, and — importantly — the LIPOXINS, made by transcellular biosynthesis, which STOP inflammation** (they inhibit neutrophil recruitment and promote macrophage clearance of apoptotic cells).",
        "**Resolution is active: the 'lipid mediator class switch' from prostaglandins/leukotrienes to lipoxins, and from ω-3 acids to RESOLVINS and PROTECTINS** — a modern point that impresses examiners.",
        "**Aspirin has a role here too: acetylated COX-2 no longer makes prostanoids but produces 15R-HETE, which is converted to 'aspirin-triggered lipoxins' — one explanation of its anti-inflammatory benefit beyond COX inhibition.**"
      ],
      cn: "5-LOX＋FLAP→LTA4→分两路：LTB4（趋化）与半胱氨酰白三烯 LTC4/D4/E4（支气管痉挛、比组胺强 1000 倍）；12/15-LOX 产生 HETE 与脂氧素（促消退）；阿司匹林触发的脂氧素。" },
    { h: "5 · Receptors, actions and organ effects", hcn: "受体与器官作用",
      points: [
        "**All eicosanoids act on GPCRs: EP1–4 (PGE₂), DP, FP, IP (prostacyclin), TP (thromboxane), BLT1/2 (LTB₄), CysLT1/2 (cysteinyl leukotrienes)** — different subtypes explain why one mediator can have opposite effects in different tissues (PGE₂ contracts the uterus but relaxes bronchi).",
        "**Vascular system: PGI₂ and PGE₂ dilate, TXA₂ and PGF₂α constrict; PGI₂ inhibits and TXA₂ promotes platelet aggregation; in the fetus PGE₂ keeps the DUCTUS ARTERIOSUS open (alprostadil maintains it, indometacin closes it).**",
        "**Airways: PGE₂ dilates, PGF₂α, PGD₂ and above all cysteinyl leukotrienes constrict.** **Stomach: PGE₂ and PGI₂ protect (mucus, bicarbonate, blood flow, less acid).** **Kidney: PGE₂ and PGI₂ maintain perfusion in hypovolaemia and stimulate renin — the reason NSAIDs precipitate acute kidney injury.**",
        "**Reproduction: PGE₂ and PGF₂α for uterine contraction, labour induction and menstruation (dysmenorrhoea responds to NSAIDs), luteolysis; PGE₂ in semen.** **Inflammation and immunity: vasodilatation, permeability, pain, fever, chemotaxis; PGD₂ from mast cells; leukotrienes in asthma.**",
        "**Bone (PGE₂ stimulates resorption), CNS (fever, sleep — PGD₂), and the endocannabinoid overlap** complete the list."
      ],
      cn: "受体家族（EP/DP/FP/IP/TP/BLT/CysLT）解释同一介质在不同组织作用相反；按器官系统列出作用：血管、血小板、气道、胃、肾、子宫、炎症与发热。" },
    { h: "6 · Pharmacology — the payoff of this topic", hcn: "药理学（本题的落点）",
      points: [
        "**ASPIRIN irreversibly ACETYLATES Ser530 of COX-1 (and Ser516 of COX-2). Platelets have NO NUCLEUS and cannot resynthesise the enzyme, so a single low dose suppresses TXA₂ for the platelet's whole 7–10-day life, while endothelial cells restore PGI₂ within hours — this is why LOW-dose aspirin is antithrombotic.** High doses inhibit both and lose the selectivity.",
        "**Other NSAIDs (ibuprofen, diclofenac, indometacin, naproxen) are REVERSIBLE competitive inhibitors of both isoforms** — analgesic, antipyretic, anti-inflammatory; adverse effects follow the physiology: **gastric ulceration (no PGE₂), renal impairment and sodium retention, bronchospasm in susceptible asthmatics, and reduced antiplatelet effect of aspirin if taken together (competition for the same site).**",
        "**COXIBS (celecoxib) spare COX-1 → less gastric damage, but they leave platelet TXA₂ untouched while lowering endothelial PGI₂ → increased cardiovascular risk** (rofecoxib was withdrawn for this reason).",
        "**PARACETAMOL is antipyretic and analgesic but barely anti-inflammatory — it is inactivated by peroxides at sites of inflammation; its toxicity is hepatic (NAPQI, topic 23B).**",
        "**GLUCOCORTICOIDS block phospholipase A₂ and COX-2 induction — both branches. Antileukotrienes: montelukast/zafirlukast (CysLT1 antagonists) and zileuton (5-LOX inhibitor) for asthma.** **Prostanoid drugs: misoprostol (PGE₁, gastric protection), alprostadil (ductus, erectile dysfunction), latanoprost (glaucoma), epoprostenol/iloprost (pulmonary hypertension), dinoprostone (labour induction).**",
        "Closing sentence: **almost every drug in this topic works by moving the balance between two opposing eicosanoids — TXA₂ against PGI₂, or the constrictor leukotrienes against the resolving lipoxins — which is why selectivity matters so much clinically.**"
      ],
      cn: "阿司匹林不可逆乙酰化 Ser530＋血小板无核=低剂量抗栓；其他 NSAID 可逆；昔布类的心血管风险；对乙酰氨基酚；糖皮质激素与白三烯药物；前列腺素类药物清单。最后一句总结点题。" }
  ],
  numbers: [
    "TXA₂ half-life **~30 s**; aspirin blocks platelet COX-1 for the platelet's **7–10-day** lifespan",
    "Cysteinyl leukotrienes are **~1000×** more potent bronchoconstrictors than histamine",
    "Arachidonic acid = **20:4 ω-6**, released from the **sn-2** position by phospholipase A₂",
    "Series 1/2/3 prostanoids from **20:3 / 20:4 / 20:5** precursors",
    "Eicosanoids are largely inactivated in **one passage through the lung**"
  ],
  clinic: [
    "**Low-dose aspirin** for cardiovascular prevention; **NSAID gastropathy and nephropathy**",
    "**Aspirin-exacerbated respiratory disease** — substrate shunted to leukotrienes",
    "**Montelukast** in asthma; **glucocorticoids** block both branches",
    "**Ductus arteriosus**: indometacin closes it, alprostadil (PGE₁) keeps it open",
    "**Misoprostol, latanoprost, iloprost, dinoprostone** — prostanoid analogues in daily use"
  ],
  traps: [
    "The rate-limiting step is **phospholipase A₂**, not cyclooxygenase",
    "Aspirin is **irreversible**; other NSAIDs are reversible — and that difference is why only aspirin is antiplatelet",
    "**COX-2 selective drugs do not inhibit platelet TXA₂** — hence their thrombotic risk",
    "Eicosanoids are **not stored** and act **locally** — they are not classical circulating hormones",
    "PGI₂ and TXA₂ come from the **same precursor PGH₂** in different cells — the difference is the downstream synthase"
  ],
  terms: [
    ["eicosanoid", "类二十烷酸"], ["phospholipase A₂", "磷脂酶 A2"], ["prostaglandin H synthase", "前列腺素 H 合酶"],
    ["thromboxane synthase", "血栓烷合酶"], ["prostacyclin", "前列环素"], ["5-lipoxygenase / FLAP", "5-脂加氧酶/FLAP"],
    ["cysteinyl leukotrienes", "半胱氨酰白三烯"], ["lipoxin / resolvin", "脂氧素/消退素"],
    ["isoprostane", "异前列腺素"], ["COX-1 / COX-2", "环加氧酶 1/2"]
  ]
},
b: {
  titleEN: "Biochemistry of the liver. Overview of metabolic pathways, the liver as a site of regulation. Basic biochemical markers of liver function. Bile stones.",
  titleCN: "肝脏生物化学 · 肝内代谢途径总览与肝作为调节中心 · 肝功能的基本生化标志物 · 胆结石",
  opener: "The liver is the **metabolic exchange of the body**: it receives everything absorbed from the gut through the portal vein, decides what is stored, converted or destroyed, and it is the only organ that performs **gluconeogenesis with glucose release, urea synthesis, ketogenesis, plasma-protein synthesis, bile-acid synthesis and biotransformation** — all at once.",
  openerCN: "肝是全身的代谢交换中心：门静脉把肠道吸收的一切先送到肝，由它决定储存、转化还是销毁；也只有肝同时具备糖异生并释放葡萄糖、尿素合成、生酮、血浆蛋白合成、胆汁酸合成与生物转化这些能力。",
  spine: [
    "解剖生化基础：门静脉、肝小叶分区、细胞类型",
    "糖代谢中的角色（葡萄糖稳态的缓冲器）",
    "脂代谢与脂蛋白",
    "蛋白与氮代谢（尿素、血浆蛋白、凝血）",
    "胆汁生成、胆红素与生物转化",
    "肝功能与肝损伤的标志物（四组）",
    "胆结石与常见肝胆疾病的生化"
  ],
  blocks: [
    { h: "1 · Structural basis of the liver's chemistry", hcn: "结构基础",
      points: [
        "**Dual blood supply: ~75 % from the PORTAL VEIN (nutrient-rich, everything absorbed passes here first — the 'first-pass effect') and 25 % from the hepatic artery; blood flows through sinusoids to the central vein.**",
        "**Zonation: PERIPORTAL (zone 1) cells are oxygen-rich and do gluconeogenesis, β-oxidation, urea synthesis, cholesterol and bile-acid synthesis; PERIVENOUS (zone 3) cells are relatively hypoxic and do glycolysis, lipogenesis, ketogenesis, GLUTAMINE SYNTHESIS (the ammonia scavenger) and most CYP450 biotransformation.** This explains why **zone 3 is damaged first in hypoxia and by paracetamol (centrilobular necrosis)**.",
        "**Cell types: hepatocytes (~80 %), Kupffer cells (macrophages — clear endotoxin and old erythrocytes), stellate (Ito) cells (store vitamin A; when activated they make COLLAGEN → fibrosis), endothelial cells and cholangiocytes (secrete the bicarbonate of bile).**",
        "**Regenerative capacity is enormous** (up to ~70 % can be resected), but repeated injury leads to **fibrosis → cirrhosis**, which is functionally a combination of **loss of parenchyma and portosystemic shunting**.",
        "**The liver works for the rest of the body: it exports glucose, ketone bodies, VLDL, plasma proteins, urea and bile — and burns α-keto acids and fatty acids for its own needs.**"
      ],
      cn: "双重血供与首过效应；小叶分区（1 区糖异生/尿素、3 区糖酵解/生酮/CYP450→对乙酰氨基酚坏死在 3 区）；四类细胞（星状细胞活化=纤维化）；再生能力与肝硬化的两个后果。" },
    { h: "2 · Carbohydrate, lipid and protein metabolism", hcn: "三大代谢中的角色",
      points: [
        "**Glucose homeostasis — the buffer: glucokinase (high Km) takes up glucose after a meal without saturating, glycogen synthesis stores it, and glucose-6-phosphatase releases it in fasting; the liver is the ONLY organ that can do both directions. Gluconeogenesis from lactate (Cori cycle), alanine, glycerol and propionate keeps blood glucose after 12–24 h.** It also handles **fructose and galactose** (topic 7A).",
        "**Lipids: de-novo lipogenesis from surplus carbohydrate, esterification and export as VLDL, β-oxidation, KETOGENESIS (the only organ that makes ketone bodies and, lacking SCOT, cannot use them), cholesterol synthesis and its conversion to BILE ACIDS, and the synthesis of apolipoproteins, LCAT and lipoprotein remodelling by hepatic lipase.**",
        "**Proteins and nitrogen: synthesis of ALL plasma proteins except immunoglobulins (albumin ~12–15 g/day, clotting factors, transport proteins, acute-phase proteins), transamination and deamination of amino acids, and the UREA CYCLE — the only way to eliminate nitrogen.** It also makes **creatine, glutathione, haem, purines/pyrimidines** and stores **vitamins A, D, B12, iron and copper**.",
        "**Biotransformation: phase I (CYP450) and phase II (conjugation) of drugs, hormones, bilirubin and endogenous waste, then export into bile or blood (topic 23B).**",
        "**Endocrine role: activation of vitamin D (25-hydroxylation), conversion of T4 to T3, degradation of insulin and steroid hormones, synthesis of IGF-1, angiotensinogen, thrombopoietin and hepcidin.**"
      ],
      cn: "四大块＋内分泌：糖（唯一能双向调节血糖的器官）、脂（VLDL、酮体、胆汁酸）、蛋白与氮（除免疫球蛋白外的所有血浆蛋白＋尿素循环）、生物转化；再加 25-羟化、T4→T3、降解胰岛素、合成 IGF-1/铁调素。" },
    { h: "3 · Bile and bilirubin", hcn: "胆汁与胆红素",
      points: [
        "**Bile 0.5–1 L/day: bile acids, phospholipids (lecithin), cholesterol, conjugated bilirubin, proteins and electrolytes; the ductal cells add bicarbonate under secretin.** It is both a **digestive secretion (emulsification) and the main EXCRETORY route** for cholesterol, bilirubin, copper, and many drugs.",
        "**Bile acids: cholesterol → 7α-hydroxylase (CYP7A1, rate-limiting, feedback-inhibited via FXR) → cholic and chenodeoxycholic acid → conjugated with glycine or taurine → secreted (BSEP) → 7α-dehydroxylation by gut bacteria gives deoxycholic and lithocholic acid → 95 % reabsorbed in the terminal ileum (enterohepatic circulation, 6–10 cycles/day).**",
        "**Bilirubin: haem → biliverdin + CO (haem oxygenase) → bilirubin → albumin-bound (unconjugated, water-insoluble) → hepatic uptake → UGT1A1 conjugation with 2 glucuronides → MRP2 secretion into bile (the rate-limiting step) → urobilinogen/stercobilin in the gut** (topic 14A).",
        "**Consequences of cholestasis: pale stools, dark urine (conjugated bilirubin), pruritus (bile salts), malabsorption of fat and vitamins A, D, E, K → prolonged INR that corrects with vitamin K, and raised ALP and GGT.**",
        "**The liver also handles the products of the gut: ammonia (urea), endotoxin (Kupffer cells) and drugs (first-pass) — which is why portosystemic shunting produces encephalopathy and why cirrhotic patients are sensitive to drugs.**"
      ],
      cn: "胆汁的组成与两个功能（消化＋排泄）；胆汁酸的合成-结合-细菌转化-肠肝循环；胆红素的六步；胆汁淤积的五个后果；肝处理来自肠道的氨、内毒素与药物。" },
    { h: "4 · Markers — damage, cholestasis, function, fibrosis", hcn: "标志物的四组（必须分清）",
      points: [
        "**Group 1 — HEPATOCELLULAR DAMAGE: ALT (cytosolic, relatively liver-specific) and AST (also muscle, heart, erythrocytes; with a mitochondrial isoenzyme).** Patterns: **> 10× upper limit = acute hepatitis; > 50× = ischaemic or toxic (paracetamol); De Ritis AST/ALT > 2 = alcoholic disease; AST high with normal ALT → check CK for a muscle source.** Also **LDH** (non-specific).",
        "**Group 2 — CHOLESTASIS: ALP (also bone, placenta, intestine — confirm hepatic origin with GGT or the isoenzyme) and GGT (sensitive but non-specific: alcohol and enzyme inducers raise it), plus conjugated bilirubin and bile acids.**",
        "**Group 3 — SYNTHETIC FUNCTION (the ones that matter for prognosis): ALBUMIN (half-life ~20 days, so it reflects chronic function), PROTHROMBIN TIME/INR (factors II, VII, IX, X — half-life of factor VII is ~6 h, so INR is the FASTEST indicator of acute failure), cholinesterase, cholesterol, and — for detoxification — AMMONIA and unconjugated bilirubin.**",
        "**Group 4 — FIBROSIS and aetiology: platelets (fall with portal hypertension), the APRI and FIB-4 indices, elastography, PIIINP and hyaluronan; plus viral serology, autoantibodies (AMA in primary biliary cholangitis, ANA/SMA in autoimmune hepatitis), ferritin/transferrin saturation (haemochromatosis), caeruloplasmin (Wilson), α₁-antitrypsin, and AFP for hepatocellular carcinoma.**",
        "**The sentence that separates a good answer: 'transaminases measure DAMAGE, not function; albumin, INR and bilirubin measure FUNCTION' — a patient can have normal transaminases and a failing liver, and vice versa.**",
        "**Clinical scores built on these: Child–Pugh (bilirubin, albumin, INR, ascites, encephalopathy) and MELD (bilirubin, INR, creatinine, sodium) — the practical use of the markers.**"
      ],
      cn: "四组标志物：损伤（ALT/AST 与三种模式）、胆汁淤积（ALP/GGT）、功能（白蛋白慢、INR 最快、氨、胆固醇、胆碱酯酶）、纤维化与病因学；金句『转氨酶测损伤、白蛋白/INR/胆红素测功能』；Child–Pugh 与 MELD。" },
    { h: "5 · Bile stones", hcn: "胆结石",
      points: [
        "**Cholesterol stones (~80 % in Western countries): cholesterol is insoluble in water and is kept in solution by MIXED MICELLES of bile salts and lecithin. A stone forms when the ratio shifts — too much cholesterol or too little bile salt/lecithin (the lithogenic index) — plus NUCLEATION factors (mucin, calcium bilirubinate) and GALLBLADDER HYPOMOTILITY.**",
        "**Risk factors follow directly ('the four Fs' — female, fat, forty, fertile): oestrogens (raise cholesterol secretion and lower bile-acid synthesis), obesity, RAPID weight loss and prolonged fasting or total parenteral nutrition (gallbladder stasis), high-calorie/low-fibre diet, ileal disease or resection and cholestyramine (loss of bile salts), diabetes, and genetic factors (ABCG5/G8, MDR3).**",
        "**Pigment stones: BLACK (calcium bilirubinate — chronic HAEMOLYSIS, cirrhosis, ineffective erythropoiesis: more unconjugated bilirubin in bile) and BROWN (bacterial or parasitic infection of the ducts — bacterial β-GLUCURONIDASE deconjugates bilirubin, which then precipitates with calcium).**",
        "**Consequences: biliary colic, acute cholecystitis, choledocholithiasis with obstructive jaundice (ALP and GGT up, conjugated bilirubin up, pale stools, dark urine), ascending cholangitis (Charcot's triad), and gallstone PANCREATITIS.**",
        "**Therapy and prevention in biochemical terms: ursodeoxycholic acid (makes bile less lithogenic; works only for small radiolucent cholesterol stones), avoiding rapid weight loss, and cholecystectomy as the definitive treatment; note that cholesterol stones are RADIOLUCENT (ultrasound, not X-ray) while pigment stones often contain calcium and are visible.**"
      ],
      cn: "胆固醇结石的机制（混合微团溶解能力被超过＋成核＋胆囊排空障碍）与危险因素（四个 F、快速减重、回肠切除、考来烯胺）；色素结石黑（溶血）与棕（感染，细菌 β-葡糖醛酸酶）；并发症与治疗（熊去氧胆酸只对小的透光结石）。" },
    { h: "6 · Liver failure and the classical syndromes", hcn: "肝功能衰竭与典型综合征",
      points: [
        "**Loss of synthesis: hypoalbuminaemia (oedema, ascites), coagulopathy (prolonged INR that does NOT correct with vitamin K, unlike cholestasis), low cholinesterase and cholesterol.**",
        "**Loss of detoxification: HEPATIC ENCEPHALOPATHY (ammonia → astrocytic glutamine → cerebral oedema; precipitated by gastrointestinal bleeding, infection, constipation, hypokalaemia and alkalosis, sedatives — treated with lactulose and rifaximin), JAUNDICE, and impaired drug metabolism.**",
        "**Portal hypertension: varices, splenomegaly with thrombocytopenia, ascites (portal pressure + hypoalbuminaemia + secondary hyperaldosteronism with sodium retention), and hepatorenal syndrome.**",
        "**Metabolic consequences: hypoglycaemia (no gluconeogenesis or glycogen), LACTIC ACIDOSIS (lactate not cleared), hyperammonaemia, low urea (an important clue — a 'normal' urea in a cirrhotic can hide renal failure), feminisation (oestrogens not degraded), and impaired 25-hydroxylation of vitamin D.**",
        "**The typical diseases to name with one biochemical sentence each: viral hepatitis (very high ALT), alcoholic liver disease (AST/ALT > 2, high GGT, macrocytosis), NAFLD/MASLD (insulin resistance, mildly raised ALT), haemochromatosis (transferrin saturation > 45 %, high ferritin), Wilson disease (low caeruloplasmin, high urinary copper), α₁-antitrypsin deficiency (absent α₁ band), primary biliary cholangitis (AMA, high ALP), autoimmune hepatitis (ANA/SMA, high IgG), and hepatocellular carcinoma (AFP).**",
        "Closing sentence: **every symptom of liver failure can be derived from one of four lost functions — synthesis, detoxification, excretion and regulation of the blood's composition — which is exactly how the laboratory panel is organised.**"
      ],
      cn: "肝衰的四条线（合成、解毒、排泄、门脉高压）与各自表现；代谢后果（低血糖、乳酸酸中毒、高氨、尿素反而低）；八个疾病各配一句实验室特征。最后一句总结。" }
  ],
  numbers: [
    "Portal vein supplies **~75 %** of hepatic blood flow; bile **0.5–1 L/day**; albumin synthesis **12–15 g/day**",
    "ALT/AST normal **< ~0.6–0.8 µkat/L (≈ 40 U/L)**; **> 10×** hepatitis, **> 50×** toxic/ischaemic; **De Ritis > 2** alcoholic",
    "Factor VII half-life **~6 h** (INR reacts fastest); albumin half-life **~20 days**",
    "Cholesterol stones **~80 %** of gallstones in Europe; bile-acid pool 2–4 g recycled 6–10×/day",
    "Liver converts **~0.5 g cholesterol/day** into bile acids"
  ],
  clinic: [
    "**Paracetamol overdose** — centrilobular (zone 3) necrosis; N-acetylcysteine",
    "**Cholestasis vs hepatocellular pattern** — ALP/GGT versus ALT/AST decides the next investigation",
    "**INR that does not correct with vitamin K** indicates failure of synthesis, not cholestasis",
    "**Hepatic encephalopathy** — lactulose and rifaximin; correct hypokalaemia and alkalosis",
    "**Gallstone disease** — the four Fs, rapid weight loss, ileal resection; ursodeoxycholic acid or surgery"
  ],
  traps: [
    "**Transaminases measure damage, not function** — a shrinking liver may have falling ALT and a rising INR",
    "**GGT is sensitive but not specific** — it rises with alcohol and with enzyme inducers alone",
    "ALP is not only hepatic — confirm with **GGT or the isoenzyme** (bone, placenta, intestine)",
    "In liver failure **urea is low**, so a 'normal' urea may mask renal impairment",
    "Cholesterol gallstones are **radiolucent** — a normal X-ray does not exclude them"
  ],
  terms: [
    ["portal vein / first-pass effect", "门静脉/首过效应"], ["zonation", "肝小叶分区"], ["Kupffer cell", "库普弗细胞"],
    ["stellate (Ito) cell", "肝星状细胞"], ["7α-hydroxylase", "7α-羟化酶"], ["enterohepatic circulation", "肠肝循环"],
    ["cholestasis", "胆汁淤积"], ["De Ritis ratio", "De Ritis 比值"], ["lithogenic index", "成石指数"],
    ["hepatic encephalopathy", "肝性脑病"], ["Child–Pugh / MELD", "Child–Pugh/MELD 评分"]
  ]
}
});
