window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 3,
a: {
  titleEN: "Glycolysis — aerobic and anaerobic transformation of glucose. ATP balance. Integration with other pathways, regulation.",
  titleCN: "糖酵解 · 有氧与无氧的葡萄糖分解 · ATP 平衡 · 与其他途径的整合与调节",
  opener: "Glycolysis is the **cytosolic** pathway that splits one glucose into **two pyruvate**, with a net yield of **2 ATP and 2 NADH**; it is the only pathway that can make ATP **without oxygen**, and it runs in **every cell of the body**.",
  openerCN: "糖酵解在胞质进行，把 1 分子葡萄糖裂解为 2 分子丙酮酸，净得 2 ATP 与 2 NADH；它是唯一能在无氧条件下产 ATP 的途径，存在于所有细胞。",
  spine: [
    "定位、总反应式、两个阶段（投资期与回收期）",
    "10 步反应与 3 个不可逆步骤（HK/GK, PFK-1, PK）",
    "无氧命运：乳酸与 NAD⁺ 再生；有氧命运：穿梭系统与 PDH",
    "ATP 结算：无氧 2；有氧 30–32（含穿梭差异）",
    "调节：别构、激素、酶量；F-2,6-BP 的角色",
    "与其他途径的整合：糖原、PPP、甘油、氨基酸、Cori 循环",
    "特殊组织与临床：红细胞、2,3-BPG、丙酮酸激酶缺乏、Warburg 效应"
  ],
  blocks: [
    { h: "1 · Localisation, overall equation, two phases", hcn: "定位、总反应与两个阶段",
      points: [
        "Location: **cytosol**, no membrane, no oxygen needed. Overall: **glucose + 2 NAD⁺ + 2 ADP + 2 Pi → 2 pyruvate + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O**.",
        "**Preparatory (investment) phase, C6:** glucose → glucose-6-P (**hexokinase/glucokinase, −ATP**) → fructose-6-P (isomerase) → **fructose-1,6-bisphosphate (PFK-1, −ATP)** → cleaved by **aldolase** into **glyceraldehyde-3-P + dihydroxyacetone-P**, interconverted by triose-phosphate isomerase. **2 ATP are spent.**",
        "**Pay-off phase, 2 × C3:** GAP + NAD⁺ + Pi → **1,3-bisphosphoglycerate (glyceraldehyde-3-P dehydrogenase, the only oxidation, makes NADH)** → 3-phosphoglycerate (**phosphoglycerate kinase, +ATP**) → 2-PG (mutase) → **phosphoenolpyruvate (enolase, releases H₂O)** → pyruvate (**pyruvate kinase, +ATP**). **4 ATP are made.**",
        "Both ATP-forming steps are **substrate-level phosphorylation** — the phosphate comes from a **macroergic substrate** (1,3-BPG, PEP), not from a proton gradient.",
        "Glucose enters cells through **GLUT transporters**: GLUT1 (erythrocyte, blood–brain barrier), **GLUT2** (liver, β cell, high Km sensor), GLUT3 (neurons), **GLUT4** (muscle, adipose — insulin-dependent), GLUT5 (fructose)."
      ],
      cn: "先写总反应，再分投资期（耗 2 ATP，断成两个三碳）与回收期（产 4 ATP、2 NADH）。强调底物水平磷酸化两步：PGK 与 PK。" },
    { h: "2 · The three irreversible steps", hcn: "三个不可逆步骤=三个调节点",
      points: [
        "**Hexokinase** (all tissues, **Km ≈ 0.1 mmol/L**, inhibited by its product glucose-6-P) versus **glucokinase = hexokinase IV** (liver and β cells, **Km ≈ 10 mmol/L**, sigmoidal, **not inhibited by G6P**, induced by insulin, regulated by the nuclear regulatory protein GKRP). Phosphorylation also **traps glucose in the cell**.",
        "**PFK-1 — the key rate-limiting enzyme and the committed step.** Inhibited by **ATP and citrate** (and by **H⁺**, which is why acidosis stops glycolysis), activated by **AMP, ADP and above all fructose-2,6-bisphosphate**.",
        "**Fructose-2,6-bisphosphate** is made and destroyed by the **bifunctional enzyme PFK-2/FBPase-2**: **insulin → dephosphorylated → kinase active → F-2,6-BP ↑ → glycolysis ↑**; **glucagon → PKA phosphorylates it → phosphatase active → F-2,6-BP ↓ → gluconeogenesis ↑**. It simultaneously **activates PFK-1 and inhibits fructose-1,6-bisphosphatase**.",
        "**Pyruvate kinase** — activated **feed-forward** by fructose-1,6-bisphosphate, inhibited by **ATP, acetyl-CoA, alanine and long-chain fatty acids**; the liver isoform is **inhibited by phosphorylation (glucagon/PKA)**.",
        "These same three steps are the ones **bypassed by four enzymes in gluconeogenesis** (topic 4A) — the two pathways are reciprocally regulated so they never run at full speed together (a futile cycle)."
      ],
      cn: "三个不可逆酶＝三个调节点；把 F-2,6-BP 的双功能酶机制说清楚，这是本题最高频的追问。" },
    { h: "3 · Anaerobic and aerobic fate of pyruvate", hcn: "丙酮酸的无氧与有氧去向",
      points: [
        "The real problem of anaerobic glycolysis is **NAD⁺, not ATP**: cytosolic NAD⁺ is limited, so it must be regenerated or GAPDH stops.",
        "**Anaerobic: pyruvate + NADH + H⁺ → lactate + NAD⁺ (lactate dehydrogenase)**. This is the only ATP source in **erythrocytes (no mitochondria), lens and cornea, renal medulla, white muscle fibres in maximal work, and any hypoxic tissue**. Lactate goes to the liver → **Cori cycle** (costs 6 ATP in the liver to regain 2 in muscle).",
        "**Aerobic:** pyruvate enters the mitochondrion (MPC carrier) and is oxidatively decarboxylated by the **pyruvate dehydrogenase complex** (E1 TPP, E2 lipoamide + CoA, E3 FAD/NAD⁺) → **acetyl-CoA + CO₂ + NADH**; **irreversible — this is why fatty acids cannot be converted to glucose**.",
        "Cytosolic **NADH cannot cross the inner membrane**, so it uses shuttles: the **malate–aspartate shuttle** (liver, heart, kidney) delivers **NADH → 2.5 ATP**, the **glycerol-3-phosphate shuttle** (muscle, brain, brown fat) delivers **FADH₂ → 1.5 ATP**.",
        "**Pasteur effect**: oxygen inhibits glucose consumption (ATP and citrate inhibit PFK-1). The opposite, **aerobic glycolysis despite oxygen, is the Warburg effect of tumour cells** — the basis of FDG-PET imaging."
      ],
      cn: "无氧的关键是再生 NAD⁺（乳酸脱氢酶），不是产 ATP 本身；有氧则进线粒体经 PDH（不可逆！）。两种穿梭系统的 ATP 差别要记住。" },
    { h: "4 · ATP balance", hcn: "ATP 结算（务必说清前提）",
      points: [
        "**Anaerobic glycolysis: net 2 ATP per glucose** (4 made − 2 spent); lactate carries the rest of the energy away.",
        "**Aerobic, per glucose to CO₂ + H₂O: 30–32 ATP** with the modern (P/O 2.5 and 1.5) values: glycolysis 2 ATP + 2 NADH (**3–5 ATP** depending on the shuttle), pyruvate dehydrogenase 2 NADH = **5 ATP**, citrate cycle 2 turns = **20 ATP** (6 NADH = 15, 2 FADH₂ = 3, 2 GTP = 2).",
        "The **old textbook figures 36–38 ATP** come from the older P/O ratios 3 and 2 — say which convention you are using and the examiner is satisfied.",
        "**Glycogen-derived glucose gives 1 more ATP** (3 net anaerobically), because glucose-1-P from phosphorolysis skips hexokinase.",
        "Efficiency: complete oxidation of glucose releases **ΔG°' ≈ −2870 kJ/mol**; capturing ~30 × 30.5 kJ means roughly **30–40 % efficiency**, the rest is heat."
      ],
      cn: "结算时一定要交代 P/O 假设（2.5/1.5 → 30–32；老书 3/2 → 36–38）以及使用了哪种穿梭。糖原来源多 1 个 ATP 是加分点。" },
    { h: "5 · Regulation — the three levels", hcn: "调节的三个层次",
      points: [
        "**Allosteric / immediate**: energy charge (ATP, ADP, AMP), citrate as the signal 'the cycle is full', H⁺ in acidosis; **F-2,6-BP** as the hormonal messenger.",
        "**Covalent / hormonal**: **insulin** activates (dephosphorylation of PFK-2 → F-2,6-BP ↑, dephosphorylation of pyruvate kinase, of PDH by PDH-phosphatase); **glucagon and adrenaline** inhibit hepatic glycolysis via PKA.",
        "**Amount of enzyme / transcriptional**: insulin induces **glucokinase, PFK-1 and pyruvate kinase**; the transcription factor **ChREBP** responds to glucose, **SREBP-1c** to insulin. Glucagon and glucocorticoids induce the gluconeogenic enzymes instead.",
        "**PDH regulation** is separate and important: **inhibited by phosphorylation** (PDH kinase, stimulated by ATP, acetyl-CoA and NADH — i.e. by plenty of fuel) and **activated by dephosphorylation** (PDH phosphatase, stimulated by **Ca²⁺** and insulin). Thiamine deficiency and arsenite block it.",
        "**Tissue differences:** liver glycolysis serves synthesis (acetyl-CoA → fatty acids) and is switched off in fasting; muscle glycolysis serves its own ATP; the brain uses **~120 g glucose/day** and is glucose-dependent (ketone bodies only after adaptation); the erythrocyte is obligatorily glycolytic."
      ],
      cn: "调节分即时（别构）、中期（磷酸化/激素）、长期（酶量）三层；PDH 的磷酸化调节要单独讲，Ca²⁺ 激活是常考细节。" },
    { h: "6 · Integration with other pathways and special cases", hcn: "与其他途径的整合、特殊组织与临床",
      points: [
        "Entry points: **glycogen** (glucose-1-P), **galactose and fructose** (topic 7A), **glycerol from lipolysis** (→ glycerol-3-P → DHAP), **glucogenic amino acids** (via pyruvate or the citrate cycle).",
        "Exit points: **glucose-6-P → pentose phosphate pathway** (NADPH, ribose-5-P) or **glycogen**; **DHAP → glycerol-3-P** for triacylglycerol synthesis; **1,3-BPG → 2,3-BPG** in the erythrocyte (**Rapoport–Luebering shunt**, costs 1 ATP, regulates the oxygen affinity of haemoglobin); **pyruvate → alanine (ALT), oxaloacetate (pyruvate carboxylase), lactate, acetyl-CoA**; **3-phosphoglycerate → serine → glycine, cysteine**.",
        "**Erythrocyte** — pure glycolysis: **90 % to lactate, ~10 % through the pentose phosphate pathway** for NADPH and glutathione; **2,3-BPG** shifts the dissociation curve right.",
        "**Pyruvate kinase deficiency** = the second most common cause of hereditary non-spherocytic haemolytic anaemia (ATP depletion, membrane fails, 2,3-BPG rises so oxygen delivery is surprisingly good). **Hexokinase deficiency** is rarer and has the opposite effect on 2,3-BPG.",
        "**Lactic acidosis**: type A (hypoxia — shock, sepsis, cardiac arrest), type B (metformin, ethanol, thiamine deficiency, liver failure, malignancy). Normal lactate **0.5–2.2 mmol/L**; **anion gap** rises.",
        "**Fluoride inhibits enolase** — this is why blood for glucose measurement is taken into a fluoride tube; **arsenate** uncouples GAPDH (arsenolysis: no ATP made); **iodoacetate** blocks GAPDH (−SH)."
      ],
      cn: "整合要说进出两个方向；红细胞的 2,3-BPG 旁路、丙酮酸激酶缺乏、乳酸酸中毒、氟化钠抑制烯醇化酶都是常考小细节。" }
  ],
  numbers: [
    "Net **2 ATP + 2 NADH** anaerobically; **30–32 ATP** aerobically (old convention 36–38)",
    "Malate–aspartate shuttle **2.5 ATP per NADH**; glycerol-3-P shuttle **1.5 ATP**",
    "Km hexokinase **0.1 mmol/L**, glucokinase **10 mmol/L**",
    "Complete oxidation of glucose **ΔG°' = −2870 kJ/mol**; brain uses **≈ 120 g glucose/day**",
    "Blood lactate **0.5–2.2 mmol/L**; lactic acidosis usually > 4–5 mmol/L"
  ],
  clinic: [
    "**Pyruvate kinase deficiency** — chronic haemolytic anaemia; **G6PD deficiency** is the pentose-pathway counterpart",
    "**Thiamine (B1) deficiency** blocks PDH → lactate rises (Wernicke encephalopathy, wet beri-beri)",
    "**Warburg effect** — tumours ferment glucose even in oxygen; the basis of **FDG-PET**",
    "**Metformin** raises lactate slightly by inhibiting complex I and hepatic gluconeogenesis; contraindicated in renal failure",
    "Blood tube with **NaF** stops glycolysis in vitro — without it glucose falls by ~0.5 mmol/L per hour"
  ],
  traps: [
    "Glycolysis is **cytosolic**, and it does **not** require oxygen — 'aerobic glycolysis' only means what happens to pyruvate and NADH afterwards",
    "The purpose of lactate formation is **regeneration of NAD⁺**, not production of energy",
    "**Pyruvate dehydrogenase is not part of glycolysis** and is irreversible — do not use it to argue that fat can make glucose",
    "PFK-1 is inhibited by **ATP** but activated by **AMP and F-2,6-BP**; F-2,6-BP is *not* an intermediate of the pathway",
    "Do not quote 38 ATP and 2.5 ATP/NADH in the same sentence — the two conventions do not mix"
  ],
  terms: [
    ["substrate-level phosphorylation", "底物水平磷酸化"], ["committed step", "关键（定向）步骤"],
    ["fructose-2,6-bisphosphate", "果糖-2,6-二磷酸"], ["malate–aspartate shuttle", "苹果酸-天冬氨酸穿梭"],
    ["Pasteur effect", "巴斯德效应"], ["Warburg effect", "Warburg 效应"], ["Cori cycle", "Cori 循环"],
    ["Rapoport–Luebering shunt", "Rapoport–Luebering 旁路"], ["lactate dehydrogenase", "乳酸脱氢酶"],
    ["energy charge", "能荷"]
  ]
},
b: {
  titleEN: "Biochemistry of vision — photon capture and its conversion into a chemical signal. Vitamin A and its metabolites in vision. Composition of the liquor.",
  titleCN: "视觉生物化学 · 光子捕获与信号转换 · 维生素 A 在视觉中的作用 · 脑脊液的成分",
  opener: "Vision starts with a single chemical event: a photon **isomerises 11-cis-retinal to all-trans-retinal** inside rhodopsin, and this shape change is amplified by a **G-protein cascade** into the closure of cation channels and hyperpolarisation of the photoreceptor.",
  openerCN: "视觉起始于一个化学事件：光子把视紫红质中的 11-顺-视黄醛异构成全反式，这一构象变化经 G 蛋白级联放大，最终关闭阳离子通道使感光细胞超极化。",
  spine: [
    "感光细胞与视色素：视杆 vs 视锥",
    "视紫红质的结构：视蛋白＋11-顺-视黄醛（Schiff 碱）",
    "光异构化与漂白 (bleaching)",
    "转导素级联：Gt → PDE → cGMP↓ → 通道关闭 → 超极化",
    "关闭与恢复：视紫红质激酶/阻遏蛋白、Ca²⁺ 反馈、视觉循环",
    "维生素 A 的供给与夜盲",
    "色觉与临床（色盲、视网膜色素变性、白内障）",
    "脑脊液的组成与解读"
  ],
  blocks: [
    { h: "1 · Photoreceptors and visual pigments", hcn: "感光细胞与视色素",
      points: [
        "**Rods** (~120 million) — high sensitivity, night (scotopic) vision, no colour, pigment **rhodopsin**, λmax ≈ **500 nm**. **Cones** (~6 million, fovea) — colour (photopic) vision, three **iodopsins** with λmax ≈ **420 nm (S, blue), 530 nm (M, green), 560 nm (L, red)**.",
        "The outer segment contains ~1000 stacked **membrane discs** densely packed with pigment; **rhodopsin is ~90 % of the disc protein**.",
        "All visual pigments = **opsin (a 7-transmembrane GPCR) + the same chromophore 11-cis-retinal**; the different colours come only from the protein environment of the retinal, which tunes the absorption maximum.",
        "The retinal is bound to a **lysine of opsin (Lys296) through a protonated Schiff base**.",
        "The **retinal pigment epithelium (RPE)** behind the photoreceptors regenerates the chromophore, phagocytoses shed discs and stores vitamin A — its failure is the basis of several retinal degenerations."
      ],
      cn: "视杆-视紫红质-500 nm-夜视；视锥-三种碘视紫质-颜色。所有视色素都用同一个 11-顺-视黄醛，颜色差别来自蛋白环境。" },
    { h: "2 · Photon capture — the only light-dependent step", hcn: "光子捕获：唯一需要光的一步",
      points: [
        "The photon **isomerises 11-cis-retinal to all-trans-retinal in ~200 femtoseconds** — this is the *only* photochemical step of vision; everything after it is ordinary biochemistry.",
        "The change of shape strains the opsin through a series of intermediates (bathorhodopsin → lumirhodopsin → **metarhodopsin I → metarhodopsin II = the active form**), with deprotonation of the Schiff base.",
        "**Metarhodopsin II (R*) is the active signalling species.** Afterwards the all-trans-retinal is hydrolysed off and the pigment loses its colour — **bleaching**.",
        "**Amplification, the numbers worth quoting:** one activated rhodopsin activates **~500–1000 transducin molecules**, each activating a PDE that hydrolyses **~1000–4000 cGMP per second** — a single photon can be detected.",
        "This is why a rod can respond to one photon while a cone needs many — cones are less sensitive but faster and do not saturate in bright light."
      ],
      cn: "只有一步是光化学：11-顺→全反异构。随后经 meta-I → meta-II（活化型）→ 漂白。放大倍数（1 个视紫红质→上千个转导素）是加分数字。" },
    { h: "3 · The transducin cascade and hyperpolarisation", hcn: "转导素级联与超极化",
      points: [
        "**In the dark** the photoreceptor is *depolarised*: high **cGMP** keeps **CNG cation channels open**, Na⁺ and Ca²⁺ flow in (the **dark current**), the cell continuously releases **glutamate**.",
        "**Metarhodopsin II activates transducin (Gt)** — GDP is exchanged for GTP on the α subunit; **Gtα-GTP activates cGMP phosphodiesterase (PDE6)** by removing its inhibitory γ subunits.",
        "**PDE hydrolyses cGMP → 5'-GMP; cGMP falls → the CNG channels close → Na⁺/Ca²⁺ influx stops → the cell HYPERPOLARISES → glutamate release decreases.** The signal to the bipolar cell is therefore *less* transmitter, which is the counter-intuitive point examiners like.",
        "**Switch-off:** the intrinsic GTPase of Gtα (helped by RGS9); **rhodopsin kinase (GRK1)** phosphorylates R* and **arrestin** binds and blocks it; falling Ca²⁺ activates **guanylate cyclase (via GCAP)** to rebuild cGMP and lowers the affinity of the channel — this **Ca²⁺ feedback is the basis of light adaptation**.",
        "**Visual cycle:** all-trans-retinal → (retinol dehydrogenase, NADPH) all-trans-retinol → transported to the **RPE** → esterified (LRAT) → **isomerised by RPE65 to 11-cis-retinol** → oxidised to **11-cis-retinal** → returns and recombines spontaneously with opsin. Cones have an additional faster cycle through Müller cells."
      ],
      cn: "暗电流→光照后 cGMP 下降→通道关闭→超极化→谷氨酸释放减少。关闭机制（视紫红质激酶＋arrestin、Ca²⁺ 反馈）与视觉循环（RPE65）要能讲。" },
    { h: "4 · Vitamin A in vision and its failure", hcn: "维生素 A 与夜盲",
      points: [
        "The chromophore is **vitamin A aldehyde**. Supply chain: dietary retinyl esters/β-carotene → chylomicrons → liver **stellate cells** → **retinol on RBP–transthyretin** in blood → RPE.",
        "**Retinoic acid cannot substitute** for retinal — the oxidation retinal → retinoic acid is irreversible — so a patient given retinoic acid still goes night-blind while the epithelia are maintained.",
        "**Night blindness (nyctalopia) is the earliest sign of vitamin A deficiency**: rods have less pigment, dark adaptation is slow. Progression: conjunctival xerosis → **Bitot spots** → xerophthalmia → **keratomalacia** and irreversible blindness.",
        "Other causes of impaired dark adaptation: fat malabsorption, liver disease (no RBP), zinc deficiency (**zinc is needed for retinol dehydrogenase and for RBP synthesis**).",
        "**Retinitis pigmentosa** (rhodopsin or RPE65 mutations) — first night blindness, then tunnel vision; RPE65 gene therapy exists. **Age-related macular degeneration** and **cataract** connect this topic to free-radical damage (topic 4B) and glycation (topic 2B)."
      ],
      cn: "维生素 A 是视觉的发色团来源；视黄酸不能替代（不可逆氧化）；夜盲是最早的缺乏症状；锌缺乏也会造成暗适应障碍。" },
    { h: "5 · Colour vision and photoreceptor biochemistry in brief", hcn: "色觉与其他要点",
      points: [
        "Three cone opsins: the genes for **red and green lie on the X chromosome** next to each other and recombine easily → **red–green colour blindness is X-linked and affects ~8 % of men**; the blue opsin gene is autosomal (chromosome 7).",
        "**Protanopia** = missing red, **deuteranopia** = missing green, **tritanopia** = missing blue (rare); tested with **Ishihara plates**.",
        "The retina has the **highest oxygen consumption per gram** of any tissue and a very high content of **polyunsaturated fatty acids (DHA)** — hence its extreme sensitivity to oxidative stress, and the protective role of **lutein/zeaxanthin** and vitamin E.",
        "Photoreceptors are the only neurons that **hyperpolarise** in response to their stimulus and use a **continuous (tonic) transmitter release** in the dark.",
        "Energy: the dark current makes the outer segment extremely ATP-hungry — the retina relies on both glycolysis (**aerobic glycolysis**, like a tumour) and the mitochondria of the inner segment."
      ],
      cn: "色盲的遗传学（红绿基因在 X 染色体、男性 ~8%）常被追问；视网膜富含 DHA、耗氧量最高，因此易受氧化损伤。" },
    { h: "6 · Composition of the liquor (cerebrospinal fluid)", hcn: "脑脊液的组成与判读",
      points: [
        "**Production ~500 mL/day** by the **choroid plexus** (active secretion, carbonic anhydrase and Na⁺/K⁺-ATPase — the target of acetazolamide); total volume **~150 mL**, so it is exchanged **3–4 times a day**; absorbed by the **arachnoid granulations**. It is an **ultrafiltrate modified by active transport**, not simple plasma filtrate.",
        "**Normal appearance: clear and colourless like water.** Pressure **7–20 cm H₂O (0.7–2.0 kPa)** lying.",
        "**Composition versus plasma: protein only 0.15–0.45 g/L (~1/200 of plasma), glucose 2.5–4.5 mmol/L = 50–70 % of blood glucose (always take a simultaneous blood glucose!), chloride slightly higher (120–130 mmol/L), lactate < 2.1 mmol/L, cells < 5 × 10⁶/L mononuclear, no erythrocytes.** Sodium and osmolality are the same as plasma; K⁺, Ca²⁺ and pH are slightly lower.",
        "**Diagnostic pattern — bacterial meningitis:** turbid, **neutrophils in thousands**, **protein high, glucose low (< 40 % of blood)**, **lactate > 3.5 mmol/L**. **Viral:** clear, lymphocytes tens–hundreds, protein slightly up, **glucose normal**. **Tuberculous/fungal:** lymphocytes, very high protein, low glucose, fibrin web.",
        "Other markers: **oligoclonal IgG bands** and an elevated **IgG index** in multiple sclerosis; **xanthochromia** (bilirubin from lysed erythrocytes) proves subarachnoid haemorrhage and distinguishes it from a traumatic tap; **β-amyloid₁₋₄₂ low with tau/phospho-tau high** in Alzheimer disease; **β₂-transferrin** identifies CSF in nasal fluid (liquorrhoea).",
        "**Blood–brain barrier** = tight junctions of the endothelium: lipophilic substances, gases and specific carriers (**GLUT1** for glucose, **LAT1** for large neutral amino acids, MCT for ketone bodies) pass; proteins and most drugs do not. Its damage is quantified by the **albumin quotient (CSF/serum albumin)**."
      ],
      cn: "脑脊液：每天 500 mL、总量 150 mL、脉络丛分泌；正常蛋白 0.15–0.45 g/L、糖为血糖 50–70%、细胞 <5×10⁶/L。细菌性 vs 病毒性脑膜炎三项对比（细胞、糖、乳酸）必背。" }
  ],
  numbers: [
    "Rhodopsin λmax **500 nm**; cones **420 / 530 / 560 nm**",
    "Amplification: 1 rhodopsin → **~500 transducin** → PDE hydrolyses **~10³ cGMP/s**",
    "CSF: production **~500 mL/day**, volume **~150 mL**, pressure **7–20 cm H₂O**",
    "CSF protein **0.15–0.45 g/L**, glucose **2.5–4.5 mmol/L (50–70 % of plasma)**, cells **< 5 × 10⁶/L**, lactate **< 2.1 mmol/L**",
    "Red–green colour blindness in **~8 % of men**, X-linked"
  ],
  clinic: [
    "**Night blindness** = earliest vitamin A deficiency; **Bitot spots and keratomalacia** if untreated",
    "**Retinitis pigmentosa** (rhodopsin/RPE65), **RPE65 gene therapy** as the first approved retinal gene therapy",
    "**Sildenafil** inhibits PDE5 but slightly also **PDE6** → transient blue-tinged vision — a favourite examiner question",
    "**Bacterial vs viral meningitis** is decided at the bedside by CSF cells, glucose and lactate",
    "**Xanthochromia** proves subarachnoid haemorrhage; **β₂-transferrin** proves CSF leak"
  ],
  traps: [
    "The photoreceptor **hyperpolarises** in light and releases **less** glutamate — not more",
    "cGMP **falls** in light (the channel is closed by lack of cGMP, not by cGMP)",
    "Only the **isomerisation** needs light; bleaching and regeneration are dark reactions",
    "CSF glucose must always be interpreted **against simultaneous blood glucose**",
    "CSF is **actively secreted**, not a simple plasma filtrate — that is why its composition differs systematically"
  ],
  terms: [
    ["rhodopsin", "视紫红质"], ["11-cis-retinal", "11-顺-视黄醛"], ["Schiff base", "席夫碱"],
    ["transducin", "转导素"], ["phosphodiesterase", "磷酸二酯酶"], ["hyperpolarisation", "超极化"],
    ["bleaching", "漂白"], ["arrestin", "抑制蛋白/阻遏蛋白"], ["choroid plexus", "脉络丛"],
    ["xanthochromia", "黄变（脑脊液）"], ["oligoclonal bands", "寡克隆区带"], ["blood–brain barrier", "血脑屏障"]
  ]
}
});
