window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 11,
a: {
  titleEN: "Steroid core structure. Biosynthesis and metabolism of cholesterol, regulation. Primary and secondary bile acids. Hyperlipoproteinaemia.",
  titleCN: "甾体母核结构 · 胆固醇的生物合成与代谢及其调节 · 初级与次级胆汁酸 · 高脂蛋白血症",
  opener: "All steroids share the **cyclopentanoperhydrophenanthrene (sterane) skeleton — three six-membered rings and one five-membered ring**; cholesterol is its C27 representative, made from **acetyl-CoA through the rate-limiting HMG-CoA reductase**, and its only real routes of elimination are **bile acids and biliary cholesterol**.",
  openerCN: "所有甾体共用环戊烷多氢菲（甾烷）母核——三个六元环加一个五元环；胆固醇是其 C27 代表，由乙酰 CoA 经限速酶 HMG-CoA 还原酶合成，唯一真正的排出途径是胆汁酸与胆汁中的胆固醇。",
  spine: [
    "甾体母核与编号；胆固醇的结构特征",
    "生物合成四阶段与限速步骤（乙酰 CoA→甲羟戊酸→鲨烯→胆固醇）",
    "调节：SREBP-2、磷酸化、降解、LDL 受体、PCSK9",
    "胆固醇的去向：膜、类固醇激素、维生素 D、胆汁酸",
    "初级与次级胆汁酸、结合、肠肝循环",
    "脂蛋白复习与高脂蛋白血症分型",
    "临床：他汀类、家族性高胆固醇血症、胆结石"
  ],
  blocks: [
    { h: "1 · The steroid nucleus and cholesterol", hcn: "甾体母核与胆固醇结构",
      points: [
        "**Sterane (cyclopentanoperhydrophenanthrene): rings A, B, C (six-membered) + D (five-membered), 17 carbons**, numbered by convention; the **angular methyl groups C18 and C19** and a side chain at C17 complete the various steroids.",
        "**Cholesterol = C27**: a **3β-OH group (the only polar part), a double bond between C5 and C6, and an 8-carbon side chain at C17**; it is therefore **amphipathic but overwhelmingly hydrophobic**.",
        "The **3β-OH points to the aqueous phase in membranes** while the ring system lies among the fatty-acyl chains: cholesterol **increases order/rigidity above the phase-transition temperature and prevents crystallisation below it — it is the fluidity buffer** and the building block of lipid rafts.",
        "Derived steroid families (all from cholesterol): **C21 progestagens and corticosteroids, C19 androgens, C18 oestrogens (aromatic A ring, no C19), bile acids C24, vitamin D (a secosteroid, ring B opened)**.",
        "Esterification: in plasma **~70 % of cholesterol is esterified with a fatty acid (by LCAT in HDL)**; inside cells by **ACAT** for storage in droplets. **Esters are completely non-polar → they sit in the core of lipoproteins.**"
      ],
      cn: "母核=环戊烷多氢菲（A/B/C 六元＋D 五元）；胆固醇 C27、3β-OH、Δ5 双键、C17 侧链；在膜中作为流动性缓冲剂；C21/C19/C18/C24 四大衍生家族。" },
    { h: "2 · Biosynthesis of cholesterol", hcn: "胆固醇的生物合成（四阶段）",
      points: [
        "Site: **cytosol and smooth ER, mainly liver (~50 %) and intestine**; total synthesis **~1 g/day**, dietary intake ~0.3–0.5 g/day. All 27 carbons come from **acetyl-CoA** (exported from mitochondria as citrate), the reducing power from **NADPH** (pentose phosphate pathway).",
        "**Stage 1: 2 acetyl-CoA → acetoacetyl-CoA → (+ acetyl-CoA) → HMG-CoA** (cytosolic HMG-CoA synthase — note the mitochondrial isoenzyme does ketogenesis instead).",
        "**Stage 2 — the rate-limiting step: HMG-CoA + 2 NADPH → MEVALONATE, by HMG-CoA REDUCTASE, an integral protein of the ER membrane. This is the target of statins.**",
        "**Stage 3: mevalonate → (3 ATP) → isopentenyl pyrophosphate (C5, 'active isoprene') → geranyl (C10) → farnesyl (C15) → squalene (C30)**; the branch at farnesyl-PP also gives **dolichol, ubiquinone (CoQ10), haem A and the prenyl anchors of Ras** — which explains several statin side effects.",
        "**Stage 4: squalene → (squalene epoxidase, O₂) → lanosterol → (~19 steps) → cholesterol (C27)**; three carbons are lost as CO₂.",
        "Cost: roughly **18 acetyl-CoA, 18 ATP and 16 NADPH** per cholesterol molecule — an expensive molecule that the body cannot break down."
      ],
      cn: "四阶段＋限速酶 HMG-CoA 还原酶（他汀靶点）；甲羟戊酸→异戊烯焦磷酸→鲨烯→羊毛甾醇→胆固醇；分支产物（泛醌、多萜醇、Ras 异戊烯化）解释他汀副作用。" },
    { h: "3 · Regulation", hcn: "调节（四个层次）",
      points: [
        "**Transcriptional — the main mechanism: SREBP-2** is held in the ER by **SCAP and Insig**; when membrane cholesterol falls, SCAP escorts SREBP to the Golgi, two proteases release its N-terminal domain, which enters the nucleus and induces **HMG-CoA reductase and the LDL receptor**. High cholesterol does the opposite.",
        "**Degradation of the enzyme:** sterols (and oxysterols) accelerate **ubiquitination and proteasomal degradation** of HMG-CoA reductase — a second, faster brake.",
        "**Covalent: AMPK phosphorylates and inactivates HMG-CoA reductase** in energy deficit; insulin (via phosphatase) activates it, glucagon inhibits it — the same logic as acetyl-CoA carboxylase.",
        "**Uptake side: the LDL receptor** binds apo B-100/apo E, is internalised in **clathrin-coated pits**, recycles ~150 times, and is **down-regulated by intracellular cholesterol**; **PCSK9 sends the receptor to lysosomal degradation** instead of recycling — hence PCSK9 inhibitors raise receptor numbers and lower LDL powerfully.",
        "**Storage and export:** excess cholesterol is esterified by **ACAT** and can leave the cell through **ABCA1/ABCG1 to HDL** (reverse transport); in the liver **ABCG5/G8** pumps it into bile. Intestinal uptake goes through **NPC1L1 — the target of ezetimibe**.",
        "Statins work by two combined effects: less synthesis **and**, because hepatic cholesterol falls, **more LDL receptors** — the second is the clinically decisive one."
      ],
      cn: "四个层次：SREBP-2 转录调节（SCAP/Insig）、酶的泛素化降解、AMPK 磷酸化、LDL 受体与 PCSK9。他汀降 LDL 的主要机制其实是上调 LDL 受体。" },
    { h: "4 · Fate of cholesterol and bile acids", hcn: "胆固醇的去向与胆汁酸",
      points: [
        "**Cholesterol cannot be oxidised to CO₂ in man — the ring system is indestructible for us.** Its fates: membranes, **steroid hormones (adrenal cortex, gonads, placenta)**, **vitamin D₃ (from 7-dehydrocholesterol in skin)**, and above all **bile acids**.",
        "**Elimination: ~0.5 g/day as bile acids and ~0.5 g/day as free cholesterol in bile** (partly reabsorbed, the rest converted by bacteria to **coprostanol** and excreted).",
        "**Primary bile acids — cholic acid and chenodeoxycholic acid — are made in the liver; the rate-limiting enzyme is 7α-hydroxylase (CYP7A1)**, which is **inhibited by returning bile acids through the FXR receptor**. Synthesis requires hydroxylation, saturation of the double bond, epimerisation of the 3-OH to 3α, and shortening of the side chain to C24.",
        "**Conjugation with glycine or taurine** (peptide bond) lowers the pKa → fully ionised **bile salts**, far better detergents. **Secondary bile acids are made by intestinal bacteria by 7α-dehydroxylation: deoxycholic and lithocholic acid**; ~5 % are further modified (ursodeoxycholic, used therapeutically).",
        "**Enterohepatic circulation**: pool **2–4 g**, recycled **6–10× daily** via the ileal transporter ASBT; **interruption by cholestyramine or by ileal disease forces the liver to make new bile acids from cholesterol → LDL falls (therapy) or bile becomes lithogenic (disease)**.",
        "**Cholesterol gallstones** form when the molar ratio of cholesterol to bile salts + lecithin exceeds the micellar solubilising capacity (obesity, rapid weight loss, oestrogens, female sex, ileal disease); pigment stones come from unconjugated bilirubin in haemolysis or infection."
      ],
      cn: "胆固醇不能被彻底氧化，只能经胆汁排；CYP7A1 是限速酶、被 FXR 负反馈；初级→结合→细菌 7α-脱羟基成次级；肠肝循环与胆结石的机制。" },
    { h: "5 · Hyperlipoproteinaemias", hcn: "高脂蛋白血症的分型",
      points: [
        "**Fredrickson/WHO classification (by the particle that accumulates): I chylomicrons (LPL or apo C-II deficiency — massive TAG, abdominal pain, eruptive xanthomas, no atherosclerosis); IIa LDL (familial hypercholesterolaemia); IIb LDL + VLDL (combined); III IDL/remnants (apo E2/E2 — palmar xanthomas, high risk); IV VLDL (common, obesity/diabetes/alcohol); V VLDL + chylomicrons (pancreatitis risk).**",
        "**Familial hypercholesterolaemia** — mutations in the **LDL receptor** (or apo B-100, or gain-of-function PCSK9), autosomal dominant, **1:250 heterozygotes**: LDL-C 5–10 mmol/L, **tendon xanthomas, xanthelasma, arcus corneae, myocardial infarction in the 4th–5th decade** (homozygotes in childhood).",
        "Secondary hyperlipoproteinaemias — always exclude them first: **diabetes, hypothyroidism, nephrotic syndrome, cholestasis, obesity, alcohol, drugs (thiazides, β-blockers, glucocorticoids, oestrogens, retinoids)**.",
        "Laboratory: fasting sample for triacylglycerols (**chylomicrons make the serum milky**; the refrigerator test separates a creamy top layer = chylomicrons from uniform turbidity = VLDL); calculate **LDL-C by the Friedewald formula (LDL = total − HDL − TAG/2.2 mmol/L, invalid if TAG > 4.5 mmol/L)**; measure **apo B and Lp(a)** in high-risk patients.",
        "Treatment maps onto the biochemistry: **statins (HMG-CoA reductase) → LDL −30–50 %; ezetimibe (NPC1L1); PCSK9 inhibitors; bile-acid sequestrants; fibrates (PPARα — for triacylglycerols); omega-3; and for severe familial forms, apheresis**.",
        "Risk targets: **LDL-C < 1.4 mmol/L in very high risk, < 1.8 high, < 2.6 moderate, < 3.0 low**; TAG < 1.7 mmol/L; the higher the risk, the lower the target."
      ],
      cn: "Fredrickson I–V 型按堆积的颗粒记；家族性高胆固醇血症（LDL 受体、腱黄瘤、早发心梗、1:250）；先排除继发性；Friedewald 公式与冷藏试验；治疗药物对应各自靶点。" },
    { h: "6 · Steroid hormones from cholesterol — the overview", hcn: "由胆固醇生成的类固醇激素（概览）",
      points: [
        "The **first and rate-limiting step of all steroidogenesis is the transport of cholesterol into the mitochondrion by StAR protein, followed by side-chain cleavage (CYP11A1, desmolase) → pregnenolone (C21)** — stimulated by ACTH, LH/FSH.",
        "From pregnenolone: **progesterone → 11-deoxycorticosterone → corticosterone → aldosterone** (zona glomerulosa, controlled by angiotensin II and K⁺); **17α-hydroxylation → cortisol** (zona fasciculata, ACTH); **17,20-lyase → DHEA → androstenedione → testosterone** (zona reticularis, gonads); **aromatase (CYP19) → oestrogens**.",
        "**21-hydroxylase deficiency = the commonest congenital adrenal hyperplasia**: no cortisol/aldosterone, ACTH rises, precursors are shunted to androgens → **virilisation, salt wasting, high 17-OH-progesterone** (newborn screening).",
        "Transport: **cortisol on CBG (transcortin), sex steroids on SHBG**; only the free fraction is active. Inactivation in the liver: **reduction, hydroxylation, then conjugation with glucuronate/sulfate → urine**.",
        "Mechanism: **lipophilic → cross the membrane → intracellular (nuclear) receptors → hormone response elements → transcription**; slow onset, long duration (topic 26B)."
      ],
      cn: "所有类固醇合成的限速步骤是 StAR 把胆固醇送进线粒体＋侧链裂解酶→孕烯醇酮；三条支路（盐皮质、糖皮质、性激素）；21-羟化酶缺乏是最常见先天性肾上腺增生。" }
  ],
  numbers: [
    "Endogenous synthesis **~1 g/day**, diet 0.3–0.5 g/day; elimination **~0.5 g as bile acids + ~0.5 g as cholesterol**",
    "Cost per molecule: **18 acetyl-CoA, 18 ATP, 16 NADPH**",
    "Desirable: **total cholesterol < 5.0, LDL-C < 3.0 (very high risk < 1.4), HDL-C > 1.0/1.2, TAG < 1.7 mmol/L**",
    "Familial hypercholesterolaemia heterozygotes **~1:250**; bile-acid pool **2–4 g, 6–10 cycles/day**",
    "**~70 %** of plasma cholesterol is esterified (LCAT)"
  ],
  clinic: [
    "**Statins** — myopathy/rhabdomyolysis, raised transaminases; **fibrates** for triacylglycerols; **ezetimibe, PCSK9 inhibitors**",
    "**Familial hypercholesterolaemia** — tendon xanthomas, arcus cornealis before 45, family history of early infarction",
    "**Type I/V with TAG > 10 mmol/L** — risk of **acute pancreatitis**",
    "**Cholesterol gallstones**; **cholestyramine** lowers LDL but causes fat/vitamin malabsorption",
    "**Smith–Lemli–Opitz syndrome** — 7-dehydrocholesterol reductase defect: cholesterol synthesis is essential for development"
  ],
  traps: [
    "Humans **cannot degrade the steroid ring** — cholesterol leaves only through bile",
    "The rate-limiting enzyme is **HMG-CoA reductase (cytosolic route)**; the mitochondrial HMG-CoA synthase belongs to **ketogenesis** — do not mix them",
    "Bile acids are **not** the same as bile salts — the salts are the conjugated, ionised forms",
    "Secondary bile acids are made by **bacteria in the gut**, not by the liver",
    "Statins lower LDL mainly by **up-regulating LDL receptors**, not merely by blocking synthesis"
  ],
  terms: [
    ["sterane nucleus", "甾烷母核"], ["HMG-CoA reductase", "HMG-CoA 还原酶"], ["mevalonate", "甲羟戊酸"],
    ["squalene", "鲨烯"], ["SREBP", "固醇调节元件结合蛋白"], ["LDL receptor", "低密度脂蛋白受体"],
    ["PCSK9", "前蛋白转化酶枯草溶菌素 9"], ["primary / secondary bile acid", "初级/次级胆汁酸"],
    ["enterohepatic circulation", "肠肝循环"], ["Friedewald formula", "Friedewald 公式"], ["xanthoma", "黄瘤"]
  ]
},
b: {
  titleEN: "Chemical structure of antigens. Complement cascade. Metabolism of granulocytes and thrombocytes. NADPH oxidase and respiratory burst. Composition of lymph.",
  titleCN: "抗原的化学结构 · 补体级联 · 粒细胞与血小板的代谢 · NADPH 氧化酶与呼吸爆发 · 淋巴的成分",
  opener: "Innate immunity works with **three chemical weapons**: the **complement cascade** in plasma, the **oxidative burst of the phagocyte**, and the **granule enzymes**; antigens are the molecules these systems and the antibodies recognise — and their recognisable unit is the **epitope**.",
  openerCN: "固有免疫依靠三件化学武器：血浆中的补体级联、吞噬细胞的氧化爆发、以及颗粒中的酶；抗原就是这些系统和抗体所识别的分子，其识别单位是抗原表位。",
  spine: [
    "抗原的化学本质：免疫原性与反应原性、表位、半抗原",
    "补体三条激活途径与共同末端通路",
    "补体的生物学功能与调节；缺陷的临床表现",
    "粒细胞的代谢特点（糖酵解为主）与颗粒内容",
    "NADPH 氧化酶与呼吸爆发的化学反应链",
    "血小板的代谢与活化（TXA2、致密颗粒）",
    "淋巴的成分与功能"
  ],
  blocks: [
    { h: "1 · Chemical structure of antigens", hcn: "抗原的化学结构",
      points: [
        "**Antigen = a molecule bound by an antibody or a T-cell receptor. Immunogen = an antigen that can by itself elicit an immune response.** The distinction matters because not every antigen is immunogenic.",
        "**Epitope (antigenic determinant)** — the actual binding site, typically **5–8 amino acids or 5–7 sugar residues**; **conformational (discontinuous) epitopes** are lost on denaturation, **linear** ones are not.",
        "Requirements for immunogenicity: **foreignness, sufficient size (usually > 5–10 kDa), chemical complexity, degradability/presentability, and the genetic constitution (MHC) of the host**. **Proteins are the best antigens** (complex, T-dependent, give memory and isotype switching); **polysaccharides are T-independent** — they give mainly IgM and poor memory, which is why pneumococcal and Haemophilus vaccines are **conjugated to a carrier protein** in children.",
        "**Hapten** — a small molecule (< 1 kDa) that binds antibody but is immunogenic only **after coupling to a carrier protein**; this is the mechanism of **penicillin allergy, nickel and drug allergies** and the basis of many immunoassays.",
        "Other classes: **lipids and nucleic acids are poor antigens** on their own (but become targets in autoimmunity — anti-DNA in lupus, anti-phospholipid); **glycolipids and glycoproteins carry the ABO blood-group determinants**; **superantigens** (staphylococcal TSST-1) bypass specificity by cross-linking MHC-II with the Vβ region of TCR → massive cytokine release.",
        "**Cross-reactivity** occurs when two antigens share a similar epitope — the basis of **rheumatic fever** (streptococcal M protein vs myosin) and of the ABO natural antibodies (bacterial sugars)."
      ],
      cn: "抗原 vs 免疫原、表位大小（5–8 个氨基酸）、半抗原需载体（青霉素过敏）；蛋白质是最好的抗原，多糖是 T 非依赖（所以儿童疫苗要偶联蛋白）；超抗原与交叉反应。" },
    { h: "2 · The complement cascade", hcn: "补体级联的三条途径",
      points: [
        "**~30 plasma proteins, mostly made in the liver, circulating as inactive zymogens; activation is a proteolytic cascade with amplification.** C3 is the most abundant (**~1 g/L**).",
        "**Classical pathway:** **C1q binds the Fc of antigen-bound IgM (one molecule is enough) or of two adjacent IgG** (also CRP) → C1r/C1s → cleave **C4 and C2 → C4b2a = the classical C3 convertase**.",
        "**Lectin pathway:** **MBL (mannose-binding lectin) or ficolins bind mannose patterns on microbes** → MASP-1/2 → the same **C4b2a**. No antibody needed.",
        "**Alternative pathway:** continuous spontaneous hydrolysis of C3 ('tick-over'); **C3b binds any surface that lacks regulators** → with **factor B, factor D and properdin → C3bBb = the alternative C3 convertase**; it is an **amplification loop** for the other two pathways.",
        "**Common terminal path: C3 convertase → C3a + C3b; C5 convertase → C5a + C5b; C5b + C6 + C7 + C8 + poly-C9 → the membrane attack complex (MAC), a pore that lyses the cell.**",
        "**Regulation** (to protect our own cells): **C1 inhibitor** (also of kallikrein — its deficiency = **hereditary angioedema**), **factor H and I** (degrade C3b; mutations → atypical haemolytic uraemic syndrome and age-related macular degeneration), **DAF (CD55) and CD59 (protectin)** anchored by **GPI** — lost in **paroxysmal nocturnal haemoglobinuria** (treated with **eculizumab**, an anti-C5 antibody)."
      ],
      cn: "三条途径的启动分子不同（C1q-抗体、MBL-甘露糖、自发水解），但都汇合到 C3 转化酶→C5→MAC。调节蛋白与四个疾病（遗传性血管性水肿、aHUS、PNH、AMD）是高分点。" },
    { h: "3 · Functions of complement", hcn: "补体的生物学功能",
      points: [
        "**Opsonisation — C3b** on the microbe binds **CR1 on phagocytes**: the single most important function.",
        "**Inflammation — C3a and C5a are anaphylatoxins**: mast-cell degranulation, increased permeability; **C5a is also the strongest chemoattractant** for neutrophils and activates their oxidative burst.",
        "**Lysis — MAC**, decisive above all against **Neisseria** (hence recurrent meningococcal infection in C5–C9 deficiency).",
        "**Clearance of immune complexes** (C3b + CR1 on erythrocytes → liver/spleen) and of apoptotic cells — a C1q or C4 deficiency therefore causes a **lupus-like disease**.",
        "Laboratory use: **low C3 and C4 indicate consumption** (active lupus, post-streptococcal glomerulonephritis, cryoglobulinaemia); **CH50** measures the whole classical pathway; C3 and C4 are also **acute-phase proteins**, so their levels must be interpreted with CRP."
      ],
      cn: "四大功能（调理、炎症、溶解、清除免疫复合物）；C3a/C5a 是过敏毒素，C5a 还是最强趋化因子；C3/C4 降低=消耗（狼疮、链球菌后肾炎）。" },
    { h: "4 · Metabolism of granulocytes and the respiratory burst", hcn: "粒细胞的代谢与呼吸爆发",
      points: [
        "The neutrophil is **metabolically a glycolytic cell**: few mitochondria, large glycogen store, **ATP mainly from anaerobic glycolysis** — so it works in the hypoxic, acidic environment of pus; the **pentose phosphate pathway supplies the NADPH** for the burst (activity rises many-fold on stimulation).",
        "**Granules: primary (azurophilic) — myeloperoxidase, elastase, cathepsin G, defensins, lysozyme; secondary (specific) — lactoferrin, collagenase, lysozyme, the membrane component of NADPH oxidase; tertiary — gelatinase (MMP-9).**",
        "**The respiratory burst:** on phagocytosis the **NADPH oxidase (NOX2)** assembles — membrane **cytochrome b558 (gp91phox + p22phox)** plus the cytosolic **p47, p67, p40 phox and Rac** — and catalyses **2 O₂ + NADPH → 2 O₂•⁻ + NADP⁺ + H⁺**. Oxygen consumption rises up to 100-fold (hence the name), **without any relation to mitochondrial respiration**.",
        "Downstream chemistry: **O₂•⁻ → (SOD or spontaneously) H₂O₂ → myeloperoxidase + Cl⁻ → HOCl (hypochlorite, the strongest microbicide)**; plus **•OH via Fenton**, **singlet oxygen**, and **NO from iNOS → peroxynitrite**. Killing is completed by the granule enzymes and by **NETs (neutrophil extracellular traps)**.",
        "**Chronic granulomatous disease** = a defect of NADPH oxidase (most often X-linked gp91phox): recurrent infections with **catalase-positive organisms (S. aureus, Aspergillus, Serratia, Burkholderia)**, granulomas; diagnosed by the **NBT or dihydrorhodamine test**. **Myeloperoxidase deficiency** is much milder (candida). Compare with **G6PD deficiency**, which starves the same burst of NADPH."
      ],
      cn: "中性粒细胞靠糖酵解（能在缺氧脓液中工作）＋磷酸戊糖途径供 NADPH；NADPH 氧化酶的组装与反应式必须会写；O₂•⁻→H₂O₂→（MPO）→HOCl；CGD 与 NBT/DHR 试验。" },
    { h: "5 · Metabolism and activation of platelets", hcn: "血小板的代谢与活化",
      points: [
        "Platelets are **anucleate cell fragments (7–10 days lifespan)** with mitochondria and a large glycogen store; they use **both glycolysis and oxidative phosphorylation**, and they **cannot synthesise new protein** to any significant extent — the reason aspirin's effect lasts the whole lifespan of the platelet.",
        "**Granules: dense granules — ADP, ATP, serotonin, Ca²⁺, polyphosphate; α-granules — fibrinogen, von Willebrand factor, factor V, PDGF, TGF-β, P-selectin; lysosomes.**",
        "**Activation sequence: adhesion** (GPIb–vWF to subendothelial collagen, GPVI to collagen) → **activation** (thrombin via PAR receptors, ADP via **P2Y12**, TXA₂ via TP) → **shape change and secretion** → **aggregation** through **GPIIb/IIIa (integrin αIIbβ3) bridged by fibrinogen**.",
        "**Second messengers:** activation raises **Ca²⁺** (PLC → IP₃/DAG) and lowers cAMP; **PGI₂ and NO from healthy endothelium raise cAMP/cGMP and keep platelets quiet** — the balance of **TXA₂ versus PGI₂** again.",
        "Platelets also provide the **procoagulant surface**: **phosphatidylserine flips to the outer leaflet (scramblase)** and, with Ca²⁺, assembles the tenase and prothrombinase complexes — the point where platelets and the coagulation cascade meet.",
        "Drugs from this biochemistry: **aspirin (COX-1/TXA₂), clopidogrel and ticagrelor (P2Y12), abciximab/tirofiban (GPIIb/IIIa), dipyridamole (phosphodiesterase)**; defects: **Glanzmann thrombasthenia (GPIIb/IIIa), Bernard–Soulier (GPIb), storage pool disease, von Willebrand disease**."
      ],
      cn: "血小板无核（阿司匹林效应持续 7–10 天）；两类颗粒的内容；黏附—活化—聚集三步与三个受体（GPIb、P2Y12、GPIIb/IIIa）；磷脂酰丝氨酸外翻提供凝血表面。" },
    { h: "6 · Composition of lymph", hcn: "淋巴的成分",
      points: [
        "Lymph is the **interstitial fluid that has entered lymphatic capillaries** — an ultrafiltrate of plasma modified by tissue exchange; **2–4 L/day** returns to the blood through the **thoracic duct** into the left subclavian vein.",
        "Composition: **like plasma but with less protein — peripheral lymph ~20–30 g/L, hepatic lymph up to 60 g/L** (liver sinusoids are the leakiest); electrolytes and small molecules are the same as plasma; it **clots** (contains fibrinogen and clotting factors), and it carries **lymphocytes (mainly T cells), 1–20 × 10⁹/L, but no platelets and almost no erythrocytes**.",
        "**Intestinal lymph after a meal is milky white — chyle — because it carries chylomicrons**; this is the exclusive route of dietary long-chain fat, of fat-soluble vitamins, and it is why a thoracic-duct injury causes **chylothorax** rich in TAG (> 1.1 mmol/L) and lymphocytes.",
        "Functions: **return of filtered fluid and protein (about half of the plasma protein circulates through lymph each day), absorption of fat, transport of antigens and antigen-presenting cells to the lymph nodes, and immune surveillance**.",
        "**Lymphoedema** results when the drainage fails (surgery, radiotherapy, filariasis) — a **protein-rich** oedema, unlike the protein-poor oedema of hypoalbuminaemia; the distinction is a favourite exam point."
      ],
      cn: "淋巴=组织液进入淋巴管，每天 2–4 L 经胸导管回流；蛋白含量低于血浆（肝淋巴最高）；餐后肠淋巴呈乳白色（乳糜微粒）；淋巴水肿是富蛋白性水肿。" }
  ],
  numbers: [
    "Epitope size **5–8 amino acids**; hapten **< 1 kDa**; good immunogen **> 5–10 kDa**",
    "Complement C3 **~1 g/L** — the most abundant component; MAC = C5b678 + poly-C9",
    "Respiratory burst raises oxygen consumption up to **100-fold**; reaction **2 O₂ + NADPH → 2 O₂•⁻ + NADP⁺ + H⁺**",
    "Platelet count **150–400 × 10⁹/L**, lifespan **7–10 days**; neutrophils **2–7 × 10⁹/L**",
    "Lymph flow **2–4 L/day**, protein **20–30 g/L** (hepatic up to 60 g/L)"
  ],
  clinic: [
    "**Chronic granulomatous disease** — NADPH oxidase defect, catalase-positive infections, NBT/DHR test",
    "**Hereditary angioedema** — C1-inhibitor deficiency, low C4; **PNH** — loss of CD55/CD59, treated with eculizumab",
    "**C5–C9 deficiency** — recurrent *Neisseria* infections; **C1q/C4 deficiency** — lupus-like disease",
    "**Low C3 and C4** = complement consumption in active lupus or post-streptococcal glomerulonephritis",
    "**Chylothorax / chylous ascites** — milky, TAG-rich fluid from thoracic-duct injury"
  ],
  traps: [
    "A **hapten alone is not immunogenic** — it needs a carrier protein",
    "The alternative pathway needs **no antibody**; the classical one needs antibody (or CRP)",
    "The respiratory burst has **nothing to do with mitochondrial respiration** — it is NADPH oxidase, and the NADPH comes from the pentose phosphate pathway",
    "Platelets are **anucleate**: they cannot resynthesise COX after aspirin",
    "Lymphoedema is **protein-rich** oedema; hypoalbuminaemic oedema is protein-poor"
  ],
  terms: [
    ["epitope", "抗原表位"], ["hapten", "半抗原"], ["superantigen", "超抗原"],
    ["complement", "补体"], ["membrane attack complex", "膜攻击复合物"], ["anaphylatoxin", "过敏毒素"],
    ["opsonisation", "调理作用"], ["NADPH oxidase", "NADPH 氧化酶"], ["respiratory burst", "呼吸爆发"],
    ["myeloperoxidase", "髓过氧化物酶"], ["hypochlorous acid", "次氯酸"], ["chyle", "乳糜"]
  ]
}
});
