window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 28,
a: {
  titleEN: "Biochemical mechanisms of cell signalling. First and second messengers. Structure and function of membrane receptors. Structure of signalling molecules, intracellular calcium signalling.",
  titleCN: "细胞信号转导的生化机制 · 第一与第二信使 · 膜受体的结构与功能 · 信号分子的结构 · 细胞内钙信号",
  opener: "Signal transduction converts an **extracellular first messenger** into an **intracellular response**, and it does so with three properties that define it: **specificity (only cells with the receptor respond), AMPLIFICATION (one hormone → millions of product molecules) and termination (every step must be switchable off)**.",
  openerCN: "信号转导把细胞外的第一信使转换成细胞内的反应，其三个决定性特征是：特异性（只有带受体的细胞响应）、放大（一个激素分子→上百万个产物分子）与终止（每一步都必须能关掉）。",
  spine: [
    "信号分子的分类与相应受体位置",
    "受体的四大类（GPCR、酶偶联、离子通道、核受体）",
    "G 蛋白偶联受体与三条主线（Gs/Gi/Gq）",
    "第二信使：cAMP、cGMP、IP3/DAG、Ca²⁺、NO",
    "钙信号：来源、感受器、时空模式",
    "酶偶联受体：RTK、JAK-STAT、鸟苷酸环化酶、TGF-β",
    "终止、脱敏与信号异常的疾病"
  ],
  blocks: [
    { h: "1 · Signalling molecules and where their receptors are", hcn: "信号分子与受体位置",
      points: [
        "**Modes of signalling: endocrine (hormone in blood), paracrine (neighbouring cells — eicosanoids, cytokines, NO), autocrine (the cell's own product — growth factors in tumours), juxtacrine (contact), and synaptic (neurotransmitters).**",
        "**The chemistry decides the location of the receptor: HYDROPHILIC molecules (peptides, catecholamines, most neurotransmitters, cytokines) cannot cross the membrane → MEMBRANE receptors and second messengers; LIPOPHILIC molecules (steroids, thyroid hormones, calcitriol, retinoids, NO) cross it → INTRACELLULAR/NUCLEAR receptors.**",
        "**Consequences: membrane signalling is fast (seconds), amplified and reversible; nuclear signalling is slow (hours), needs protein synthesis, and lasts long.** Nitric oxide is the special case — lipophilic, but it acts on a cytosolic enzyme (guanylate cyclase) within seconds.",
        "**Structure of typical signalling molecules to name: catecholamines (catechol ring + amine), peptides (insulin, glucagon), steroids (sterane), eicosanoids (C20 fatty acid), gases (NO, CO, H₂S), purines (ATP, adenosine), and cytokines (four-helix bundles).**",
        "**Receptors are defined by SATURABILITY, HIGH AFFINITY (Kd in the nmol/L range) and SPECIFICITY**, and their number is itself regulated (**up- and down-regulation** — the basis of tolerance and of supersensitivity after denervation)."
      ],
      cn: "五种信号方式；亲水→膜受体＋第二信使，亲脂→核受体（快慢、可逆性、是否需要蛋白合成的差别）；受体的三个定义性质与受体数量的上调/下调。" },
    { h: "2 · The four families of receptors", hcn: "受体的四大家族",
      points: [
        "**(1) G-PROTEIN-COUPLED RECEPTORS (GPCR, 7 transmembrane helices)** — the largest family (~800 human genes, the target of ~30 % of drugs): adrenergic, muscarinic, glucagon, PTH, TSH, ADH, angiotensin, opioid, chemokine, rhodopsin, taste and smell receptors.",
        "**(2) ENZYME-LINKED RECEPTORS: receptor tyrosine kinases (insulin, IGF-1, EGF, PDGF, VEGF), receptors associated with kinases (JAK–STAT: growth hormone, prolactin, erythropoietin, leptin, cytokines, interferons), receptor guanylate cyclases (ANP/BNP), and serine/threonine kinases (TGF-β).**",
        "**(3) ION-CHANNEL (ionotropic) RECEPTORS: nicotinic acetylcholine receptor, GABA_A and glycine (Cl⁻), NMDA/AMPA (cations) — the fastest signalling of all, milliseconds.**",
        "**(4) INTRACELLULAR/NUCLEAR RECEPTORS: steroids, thyroid hormones, calcitriol, retinoids — transcription factors activated by ligand** (topic 26B).",
        "**Structure of a GPCR: extracellular N-terminus and ligand pocket, seven α-helices, three intracellular loops and a C-terminal tail carrying phosphorylation sites for GRKs.** Its partner, the **heterotrimeric G protein (αβγ)**, works as a **molecular timer**: GDP → GTP on activation, and the intrinsic **GTPase** switches it off."
      ],
      cn: "四大家族＋各自代表；GPCR 的结构（7 次跨膜）与 G 蛋白作为『分子计时器』（GTP 结合活化、内在 GTP 酶自动关闭）。" },
    { h: "3 · G proteins and the classical second messengers", hcn: "G 蛋白与经典第二信使",
      points: [
        "**Gs → adenylate cyclase ↑ → cAMP ↑ → PROTEIN KINASE A** (two regulatory + two catalytic subunits; cAMP binds the regulatory ones and releases the catalytic ones) → phosphorylation of enzymes (glycogen phosphorylase kinase, hormone-sensitive lipase, PFK-2) and of **CREB** for transcription. Users: **glucagon, β-adrenergic, ACTH, TSH, LH/FSH, PTH, ADH-V2, calcitonin, histamine H2.**",
        "**Gi → adenylate cyclase ↓** (α₂-adrenergic, muscarinic M2, opioid, somatostatin, dopamine D2); **βγ subunits also open K⁺ channels** — the mechanism of vagal slowing of the heart.",
        "**Gq → PHOSPHOLIPASE C-β → PIP₂ split into IP₃ + DAG. IP₃ opens the IP₃ receptor of the ER → Ca²⁺ release; DAG (with Ca²⁺) activates PROTEIN KINASE C.** Users: **α₁-adrenergic, muscarinic M1/M3, ADH-V1, angiotensin II, TRH, GnRH, oxytocin, histamine H1.**",
        "**cGMP: made by soluble guanylate cyclase (activated by NO) or by the membrane receptor for ANP/BNP → PROTEIN KINASE G → vasodilatation; destroyed by phosphodiesterases (PDE5 — sildenafil; PDE3 — in platelets and heart).**",
        "**Amplification with numbers: one activated receptor activates tens of G proteins, one adenylate cyclase makes hundreds of cAMP, one PKA phosphorylates many substrates — an overall gain of 10⁴–10⁶** (the visual cascade, topic 3B, is the extreme example).",
        "**Bacterial toxins prove the mechanism: cholera toxin ADP-ribosylates Gsα (permanently ON → massive cAMP → secretory diarrhoea); pertussis toxin ADP-ribosylates Giα (cannot be activated → cAMP stays high).**"
      ],
      cn: "三条 G 蛋白主线（Gs/Gi/Gq）与各自第二信使、激酶、代表激素；cGMP 通路与 PDE 抑制剂；放大倍数 10⁴–10⁶；霍乱毒素与百日咳毒素作为机制证据。" },
    { h: "4 · Calcium as an intracellular messenger", hcn: "钙作为细胞内信使",
      points: [
        "**Why calcium can be a messenger: its cytosolic concentration is kept at 10⁻⁷ mol/L, 10 000-fold below the extracellular 10⁻³, by the plasma-membrane Ca²⁺-ATPase, SERCA, the Na⁺/Ca²⁺ exchanger and mitochondrial uptake — so a small flux produces a large relative change.**",
        "**Two sources: influx from outside (voltage-gated L/N/T channels, ligand-gated channels such as NMDA, store-operated CRAC channels) and release from internal stores — the ER/SR through IP₃ RECEPTORS (hormonal signals) and RYANODINE RECEPTORS (excitation–contraction coupling, calcium-induced calcium release).**",
        "**Sensors: CALMODULIN (4 Ca²⁺, activates CaM kinases, MLCK, phosphodiesterase, calcineurin — the target of ciclosporin/tacrolimus), troponin C in striated muscle, synaptotagmin in exocytosis, protein kinase C (with DAG), and calpains.**",
        "**Signal patterns matter: calcium acts in SPIKES, OSCILLATIONS and WAVES, and in microdomains near the channel mouth; frequency encodes information (frequency modulation), which is why the same ion can control processes as different as contraction, secretion, transcription and apoptosis.**",
        "**Physiological uses: muscle contraction, exocytosis of transmitters and hormones, activation of PDH and the citrate-cycle dehydrogenases (coupling work to ATP production), fertilisation, cell division, and apoptosis.**",
        "**Pathology: calcium overload is a final common pathway of cell injury (proteases, phospholipases, endonucleases, mPTP — topic 17B); pharmacology: calcium-channel blockers, dantrolene (RyR1) in malignant hyperthermia, magnesium as a physiological antagonist.**"
      ],
      cn: "钙能当信使是因为静息浓度极低（10⁻⁷ vs 10⁻³）；两个来源（外流入与内质网 IP3R/RyR 释放）；四个感受器（钙调蛋白、肌钙蛋白 C、突触结合蛋白、PKC）；频率编码；生理用途与钙超载的病理。" },
    { h: "5 · Enzyme-linked receptors", hcn: "酶偶联受体",
      points: [
        "**Receptor tyrosine kinases: ligand → dimerisation → trans-AUTOPHOSPHORYLATION on tyrosines → these phosphotyrosines are docking sites (SH2 domains) for adaptors → two main branches: PI3K → Akt (metabolic, survival, GLUT4) and Ras → Raf → MEK → ERK/MAPK (growth and proliferation).**",
        "**The INSULIN receptor is a permanently disulfide-linked α₂β₂ dimer signalling through IRS-1/2** — and **serine phosphorylation of IRS-1 by inflammatory kinases is the molecular lesion of insulin resistance** (topic 2B).",
        "**JAK–STAT: the receptor has no kinase activity; it recruits JAK, which phosphorylates STAT, which dimerises and enters the nucleus.** Users: **growth hormone, prolactin, erythropoietin, leptin, interferons, most cytokines** — hence JAK inhibitors as drugs, and the **JAK2 V617F mutation in myeloproliferative disease**.",
        "**Guanylate-cyclase receptors (ANP/BNP) and serine/threonine kinase receptors (TGF-β → SMAD)** complete the family.",
        "**Why this family is the oncology family: growth-factor receptors and their downstream elements are the classic proto-oncogenes — EGFR/HER2 (trastuzumab, gefitinib), RAS (mutated in ~25 % of cancers), BRAF (vemurafenib), BCR-ABL (imatinib), PI3K/AKT/mTOR.** Mention this and the answer immediately looks clinical."
      ],
      cn: "RTK 的四步（二聚→自磷酸化→SH2 接头→PI3K/Akt 与 Ras/MAPK 两条下游）；胰岛素受体的特殊性与 IRS-1 丝氨酸磷酸化=胰岛素抵抗；JAK-STAT 的用户与 JAK2 V617F；这一家族正是癌基因家族（举出靶向药）。" },
    { h: "6 · Termination, desensitisation and disease", hcn: "终止、脱敏与疾病",
      points: [
        "**Every step has an off-switch: the GTPase of Gα (helped by RGS proteins), PHOSPHODIESTERASES for cAMP/cGMP, protein PHOSPHATASES, calcium pumps, dephosphorylation of receptors, degradation of IP₃, and internalisation/degradation of the receptor.** Without termination there is no signal, only noise.",
        "**Desensitisation: GRKs phosphorylate the occupied receptor → β-ARRESTIN binds → uncoupling from the G protein and internalisation (which can itself start a second, arrestin-dependent signal).** This is why continuous stimulation causes **tolerance** (β₂-agonists in asthma, nitrates, opioids).",
        "**Cross-talk and integration:** the same second messenger serves many receptors; PKA, PKC and Ca²⁺ pathways converge on shared substrates and on transcription factors (**CREB, NF-κB, AP-1**), so the cell integrates rather than simply adds signals.",
        "**Diseases of signalling to name: cholera and pertussis toxins (G proteins); McCune–Albright and some pituitary adenomas (constitutively active Gsα); pseudohypoparathyroidism (Gsα loss of function — high PTH with hypocalcaemia); nephrogenic diabetes insipidus (V2 receptor or aquaporin-2); testicular feminisation (androgen receptor); type 2 diabetes (post-receptor insulin resistance); myasthenia gravis and Graves disease (autoantibodies against receptors — blocking and stimulating respectively); cancer (constitutively active RTK/RAS/BRAF).**",
        "**Pharmacology built on this topic: β-blockers and β₂-agonists, muscarinic agents, opioids, angiotensin receptor blockers, PDE inhibitors (caffeine, sildenafil, milrinone), calcium-channel blockers, tyrosine-kinase inhibitors, JAK inhibitors, and glucocorticoids acting on the nuclear side.**",
        "Closing sentence: **a signal is not simply a switch but a controlled sequence — reception, transduction with amplification, integration, response and termination — and a disease can arise at any one of those five steps.**"
      ],
      cn: "终止机制清单；GRK/β-arrestin 脱敏解释耐受；信号交叉与整合（CREB/NF-κB）；信号病名单（霍乱毒素、假性甲旁减、肾性尿崩、Graves、癌症）；药物清单。最后一句总结五个步骤。" }
  ],
  numbers: [
    "GPCRs: **~800 human genes, target of ~30 % of drugs**; signal amplification **10⁴–10⁶**",
    "Cytosolic Ca²⁺ **10⁻⁷ mol/L** at rest vs **10⁻³** outside — a 10 000-fold gradient",
    "Receptor affinity Kd typically **nmol/L**; hormone concentrations 10⁻⁹–10⁻¹² mol/L",
    "Calmodulin binds **4 Ca²⁺**; the nicotinic receptor opens in **milliseconds**, steroid effects take **hours**",
    "cAMP is degraded by phosphodiesterases — inhibited by **caffeine (non-selective), sildenafil (PDE5), milrinone (PDE3)**"
  ],
  clinic: [
    "**Cholera toxin (Gs) and pertussis toxin (Gi)** — the textbook G-protein diseases",
    "**Pseudohypoparathyroidism** — Gsα defect: high PTH but hypocalcaemia",
    "**Graves disease** (stimulating anti-TSH-receptor antibodies) and **myasthenia gravis** (blocking anti-ACh-receptor antibodies)",
    "**Tyrosine-kinase inhibitors** (imatinib, gefitinib) and **JAK inhibitors** — signalling as a drug target",
    "**Tolerance to β₂-agonists, nitrates and opioids** — receptor desensitisation and down-regulation"
  ],
  traps: [
    "The hormone is the **first** messenger; cAMP, IP₃, DAG, Ca²⁺ and cGMP are the **second** messengers",
    "**IP₃ releases calcium; DAG activates PKC** — they come from the same PIP₂ but do different things",
    "G proteins are switched off by their **own GTPase**, not by removal of the hormone alone",
    "Insulin signals through its **own receptor tyrosine kinase and IRS**, not through JAK-STAT or cAMP",
    "Steroid and thyroid hormones use **no second messenger** — their receptor is a transcription factor"
  ],
  terms: [
    ["first / second messenger", "第一/第二信使"], ["G-protein-coupled receptor", "G 蛋白偶联受体"],
    ["adenylate cyclase", "腺苷酸环化酶"], ["protein kinase A", "蛋白激酶 A"], ["phospholipase C", "磷脂酶 C"],
    ["IP₃ / DAG", "三磷酸肌醇/二酰甘油"], ["calmodulin", "钙调蛋白"], ["ryanodine receptor", "兰尼碱受体"],
    ["receptor tyrosine kinase", "受体酪氨酸激酶"], ["JAK-STAT", "JAK-STAT 通路"], ["desensitisation", "脱敏"],
    ["β-arrestin", "β-抑制蛋白"]
  ]
},
b: {
  titleEN: "Biochemistry of the lung, surfactant and its function. Proteases and antiproteases. Effects of changes in oxygen concentration on tissues. Free radicals.",
  titleCN: "肺的生物化学 · 表面活性物质及其功能 · 蛋白酶与抗蛋白酶 · 氧浓度变化对组织的影响 · 自由基",
  opener: "The lung has to solve two chemical problems at once: **keeping 300 million alveoli open against surface tension (surfactant)** and **surviving the highest oxygen tension in the body (antioxidant and antiprotease defence)** — and both defences failing defines the two great lung diseases, respiratory distress syndrome and emphysema.",
  openerCN: "肺必须同时解决两个化学问题：靠表面活性物质对抗表面张力、维持三亿个肺泡开放；并在全身最高的氧分压下生存（抗氧化与抗蛋白酶防御）。这两道防线各自失守，正对应两大肺病：呼吸窘迫综合征与肺气肿。",
  spine: [
    "肺的代谢功能（不只是换气）",
    "表面活性物质：组成、合成、作用、Laplace 定律",
    "新生儿与成人呼吸窘迫综合征",
    "蛋白酶-抗蛋白酶平衡与肺气肿",
    "氧浓度变化：缺氧的分类与 HIF-1 反应",
    "高氧的毒性与自由基",
    "临床：COPD、吸烟、氧疗、高原、ARDS"
  ],
  blocks: [
    { h: "1 · Metabolic functions of the lung", hcn: "肺的代谢功能",
      points: [
        "**Gas exchange is only one job.** The lung is the site of **angiotensin-converting enzyme (ACE) — angiotensin I → II and inactivation of bradykinin**, of the inactivation of **serotonin, noradrenaline, prostaglandins E and F and leukotrienes**, and it lets **adrenaline, dopamine, angiotensin II and PGI₂ pass unchanged** — a selective metabolic filter for the whole circulation.",
        "**It synthesises: surfactant (type II pneumocytes), heparin and histamine (mast cells), prostaglandins and NO (endothelium), immunoglobulin A and defensins, mucins (goblet cells and submucosal glands).**",
        "**Defence: the mucociliary escalator (mucus + ciliary beat, ~1 cm/min — paralysed by smoking; defective in primary ciliary dyskinesia and cystic fibrosis), alveolar macrophages, secretory IgA, lysozyme, lactoferrin, and the antiprotease and antioxidant systems described below.**",
        "**Metabolically the lung is aerobic and uses glucose, and it is the only organ that receives the ENTIRE cardiac output — which is why it filters emboli and why intravenous substances reach it first.**",
        "**Blood gas values that frame everything: alveolar pO₂ ~13.3 kPa (100 mmHg), arterial pO₂ 10.6–13.3 kPa, pCO₂ 4.7–6.0 kPa, SaO₂ 95–98 %.**"
      ],
      cn: "肺的四类非呼吸功能：血管活性物质的活化与灭活（ACE 与缓激肽）、合成（表面活性物质、NO、IgA、黏蛋白）、防御（黏液纤毛清除、巨噬细胞、抗蛋白酶与抗氧化）、以及接受全部心输出量。" },
    { h: "2 · Surfactant", hcn: "肺表面活性物质",
      points: [
        "**Composition: ~90 % lipid and ~10 % protein. The lipid is ~80 % phospholipid, of which the essential component is DIPALMITOYL-PHOSPHATIDYLCHOLINE (DPPC) — saturated, so it packs tightly and lowers surface tension most effectively — plus phosphatidylglycerol, and ~10 % cholesterol.**",
        "**Proteins: SP-A and SP-D are large, hydrophilic COLLECTINS of innate immunity (opsonise bacteria and viruses); SP-B and SP-C are small and HYDROPHOBIC and are the ones that actually spread the film — a congenital SP-B deficiency is lethal.**",
        "**Made by TYPE II PNEUMOCYTES, stored in lamellar bodies, secreted by exocytosis, recycled; synthesis begins around week 24 and is mature by week 34–35; it is accelerated by CORTISOL and thyroid hormone and delayed by insulin (hence the risk in infants of diabetic mothers).**",
        "**Function, through the LAPLACE law P = 2T/r: without surfactant, small alveoli (small r) would have a higher pressure and empty into large ones. Surfactant lowers surface tension MORE when the film is compressed (small alveoli), so it stabilises alveoli of different sizes, reduces the work of breathing by ~70 %, prevents atelectasis at end-expiration, and keeps the alveoli dry by opposing the transudation of fluid.**",
        "**Assessment of maturity: the LECITHIN/SPHINGOMYELIN ratio in amniotic fluid > 2 (and the presence of phosphatidylglycerol) indicates maturity.**"
      ],
      cn: "组成（90% 脂、DPPC 是关键；SP-A/D 免疫、SP-B/C 铺展）；II 型肺泡细胞、24 周开始 34–35 周成熟、皮质醇促进胰岛素延迟；用 Laplace 定律解释为什么必需；L/S>2 判断成熟。" },
    { h: "3 · Respiratory distress syndromes", hcn: "呼吸窘迫综合征",
      points: [
        "**Neonatal RDS (hyaline membrane disease): prematurity → too little surfactant → high surface tension → ATELECTASIS, reduced compliance, right-to-left shunt, hypoxaemia, respiratory and metabolic acidosis; the exudate of plasma proteins forms hyaline membranes and further inactivates surfactant.**",
        "**Risk factors: prematurity, male sex, caesarean section without labour, and MATERNAL DIABETES (fetal hyperinsulinaemia delays surfactant maturation). Prevention: antenatal glucocorticoids (betamethasone) to the mother; treatment: exogenous surfactant instilled into the trachea plus CPAP/ventilation.**",
        "**ARDS in adults is different in cause but similar in chemistry: sepsis, aspiration, trauma, pancreatitis, transfusion → damage to the alveolar–capillary membrane by NEUTROPHILS, cytokines, proteases and ROS → protein-rich oedema that INACTIVATES surfactant → stiff lungs and refractory hypoxaemia.**",
        "**Oxygen therapy for both is itself a danger (see below) — the therapeutic dilemma of the ventilated patient.**",
        "**Complications of prematurity that belong to the same chemistry: bronchopulmonary dysplasia and retinopathy of prematurity, both driven by oxygen and free radicals in a tissue with immature antioxidant defences.**"
      ],
      cn: "新生儿 RDS 的链条（早产→表面活性物质不足→肺不张→分流→低氧酸中毒）与危险因素（母亲糖尿病！）、产前糖皮质激素预防；成人 ARDS 是中性粒细胞/蛋白酶/ROS 破坏膜后蛋白渗出使表面活性物质失活。" },
    { h: "4 · Proteases and antiproteases", hcn: "蛋白酶与抗蛋白酶的平衡",
      points: [
        "**The lung's structural protein is ELASTIN (plus collagen), and it is attacked continuously by proteases released from neutrophils and macrophages: NEUTROPHIL ELASTASE (a serine protease), cathepsin G, proteinase 3, and the matrix metalloproteinases MMP-9 and MMP-12.**",
        "**The defence is α₁-ANTITRYPSIN (α₁-antiprotease, a SERPIN made in the liver, an acute-phase protein), plus α₂-macroglobulin, secretory leukocyte protease inhibitor and TIMPs.** Elastin has a half-life of decades and essentially **no repair**, so every unopposed proteolytic episode is permanent.",
        "**Two ways to lose the balance: (1) HEREDITARY α₁-antitrypsin deficiency (PiZZ) — the mutant polymerises in the hepatocyte, so it never reaches the lung: PANACINAR, basal emphysema in a young non-smoker, plus liver cirrhosis; (2) SMOKING — oxidants in smoke OXIDISE THE CRITICAL METHIONINE (Met358) of the reactive centre of α₁-antitrypsin, inactivating it ~2000-fold, while simultaneously recruiting neutrophils and macrophages: centriacinar emphysema.**",
        "**That mechanism is the classic exam answer: 'emphysema is a protease–antiprotease imbalance; smoking creates a functional α₁-antitrypsin deficiency by oxidising its active-site methionine.'**",
        "**Therapy follows: stop smoking, α₁-antitrypsin augmentation in the hereditary form; and in cystic fibrosis the same logic applies to viscous secretions plus chronic neutrophilic proteolysis → bronchiectasis.**"
      ],
      cn: "蛋白酶（中性粒细胞弹性蛋白酶、MMP-9/12）vs 抗蛋白酶（α1-抗胰蛋白酶为主）；两条失衡途径：遗传性 PiZZ（全小叶、下叶、年轻不吸烟者＋肝硬化）与吸烟氧化 Met358 造成的功能性缺乏（小叶中央型）。这一段是本半题的核心。" },
    { h: "5 · Effects of changes in oxygen concentration", hcn: "氧浓度改变对组织的影响",
      points: [
        "**Hypoxia — four classic types: HYPOXIC (low pO₂ — altitude, hypoventilation, shunt, diffusion defect), ANAEMIC (low haemoglobin or blocked haemoglobin — anaemia, CO poisoning, methaemoglobinaemia; pO₂ normal), STAGNANT/CIRCULATORY (low flow — shock, heart failure), and HISTOTOXIC (the cell cannot use oxygen — CYANIDE; venous blood stays bright red).**",
        "**Cellular consequences: oxidative phosphorylation stops → ATP falls → anaerobic glycolysis and LACTIC ACIDOSIS → pumps fail → calcium overload and cell death (topic 17B); tissues differ in tolerance (brain 3–5 min, myocardium 20–30 min).**",
        "**The molecular sensor is HIF-1α: normally hydroxylated by PROLYL HYDROXYLASES (which need O₂, Fe²⁺, ascorbate and 2-oxoglutarate) and destroyed by the VHL ubiquitin ligase; in hypoxia hydroxylation stops, HIF-1α accumulates and switches on ERYTHROPOIETIN, VEGF, glycolytic enzymes, GLUT1 and iNOS.** Clinical echoes: **VHL disease and renal cancer, and the HIF stabilisers (roxadustat) used to treat renal anaemia.**",
        "**Adaptation to altitude: hyperventilation (respiratory alkalosis, later renal compensation), 2,3-BPG up (right shift), erythropoietin and polycythaemia over days to weeks, more capillaries and mitochondria; acute mountain sickness and pulmonary/cerebral oedema when adaptation fails (treated with descent, oxygen, acetazolamide, dexamethasone).**",
        "**HYPEROXIA is not harmless: high inspired oxygen increases ROS production, damages the alveolar epithelium (tracheobronchitis, absorption atelectasis, ARDS-like injury), causes RETINOPATHY OF PREMATURITY and BRONCHOPULMONARY DYSPLASIA in neonates, and in COPD patients with chronic hypercapnia it can worsen CO₂ retention (loss of hypoxic drive plus V/Q redistribution and the Haldane effect).**"
      ],
      cn: "缺氧四型（低张、贫血、循环、组织中毒）；细胞后果与耐受时间；HIF-1α 的分子机制（脯氨酰羟化酶需氧→VHL 降解）与临床（EPO、VEGF、罗沙司他）；高原适应；高氧的毒性（早产儿视网膜病、COPD 的 CO₂ 潴留）。" },
    { h: "6 · Free radicals in the lung", hcn: "肺内的自由基",
      points: [
        "**The lung is uniquely exposed: the highest pO₂ in the body, a huge surface area, and continuous contact with inhaled oxidants — cigarette smoke (~10¹⁴ radicals per puff), ozone, nitrogen oxides, particulate matter, asbestos and silica.**",
        "**Endogenous sources: mitochondria, and above all the RESPIRATORY BURST of recruited neutrophils and macrophages (NADPH oxidase → O₂•⁻ → H₂O₂ → myeloperoxidase → HOCl), plus xanthine oxidase in ischaemia–reperfusion.**",
        "**Defence: enzymatic (SOD, catalase, glutathione peroxidase — glutathione is present in high concentration in the epithelial lining fluid), non-enzymatic (vitamins C and E, urate, mucins themselves), and metal-binding proteins.** **Nrf2** induces all of these under stress.",
        "**Damage: lipid peroxidation of membranes and surfactant, oxidation of α₁-antitrypsin (see above), DNA damage and carcinogenesis (benzo[a]pyrene from smoke is bioactivated by CYP1A1 to a DNA-binding epoxide → p53 mutations), airway inflammation and mucus hypersecretion.**",
        "**The synthesis to state at the end: in the smoker, oxidants and proteases act together — the oxidants recruit and activate the phagocytes, inactivate the antiprotease, and damage the epithelium, while the proteases digest the elastin. Emphysema is the visible result of both defences failing.**",
        "**Other lung conditions in the same frame: paraquat (concentrated by pneumocytes → redox cycling → fibrosis), asbestos and silica (frustrated phagocytosis → chronic ROS → fibrosis and mesothelioma), oxygen therapy, and ARDS.**"
      ],
      cn: "肺暴露最重（最高 pO₂＋巨大表面积＋吸入氧化剂）；来源（吸入＋呼吸爆发）；防御（SOD/过氧化氢酶/GPx＋高浓度谷胱甘肽、维生素、Nrf2）；损伤（脂质过氧化、灭活抗蛋白酶、DNA 损伤致癌）；最后把氧化剂与蛋白酶两条线合起来解释吸烟者肺气肿。" }
  ],
  numbers: [
    "Surfactant ≈ **90 % lipid / 10 % protein**; ~80 % of the lipid is phospholipid, mainly **DPPC**; **L/S ratio > 2** = maturity",
    "Surfactant synthesis from week **24**, mature at **34–35**; reduces the work of breathing by ~**70 %**",
    "Alveolar surface **~70–100 m²**, ~300 million alveoli; the lung receives **100 % of cardiac output**",
    "Arterial pO₂ **10.6–13.3 kPa**, pCO₂ **4.7–6.0 kPa**, SaO₂ **95–98 %**",
    "Cigarette smoke delivers **~10¹⁴ radicals per puff**; smoking inactivates α₁-antitrypsin by oxidising **Met358**"
  ],
  clinic: [
    "**Neonatal RDS** — antenatal betamethasone, exogenous surfactant; risk raised by maternal diabetes",
    "**α₁-antitrypsin deficiency (PiZZ)** — early panacinar emphysema plus liver disease",
    "**COPD in smokers** — protease–antiprotease and oxidant–antioxidant imbalance together",
    "**Oxygen toxicity** — retinopathy of prematurity, bronchopulmonary dysplasia, CO₂ retention in COPD",
    "**High-altitude illness** — acetazolamide, dexamethasone, descent; HIF stabilisers for renal anaemia"
  ],
  traps: [
    "Surfactant does not merely 'lubricate' — it **lowers surface tension more as the alveolus gets smaller**, which is what stabilises alveoli of different size",
    "In anaemic and histotoxic hypoxia the **pO₂ is normal** — only oxygen content or utilisation is impaired",
    "Smoking causes a **functional, acquired** α₁-antitrypsin deficiency by oxidising its methionine",
    "Oxygen therapy is a drug with toxicity — more is not better",
    "SP-B and SP-C (small, hydrophobic) spread the film; SP-A and SP-D are **immune** proteins, not spreading agents"
  ],
  terms: [
    ["surfactant", "肺表面活性物质"], ["dipalmitoylphosphatidylcholine", "二棕榈酰磷脂酰胆碱"],
    ["type II pneumocyte", "II 型肺泡细胞"], ["Laplace law", "Laplace 定律"], ["lecithin/sphingomyelin ratio", "卵磷脂/鞘磷脂比值"],
    ["neutrophil elastase", "中性粒细胞弹性蛋白酶"], ["α₁-antitrypsin", "α1-抗胰蛋白酶"], ["serpin", "丝氨酸蛋白酶抑制剂"],
    ["emphysema", "肺气肿"], ["HIF-1α", "缺氧诱导因子 1α"], ["hyperoxia", "高氧"]
  ]
}
});
