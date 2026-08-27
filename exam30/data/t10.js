window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 10,
a: {
  titleEN: "Oxidative phosphorylation, respiratory chain, Mitchell's chemiosmotic theory. Mechanism of ATP synthesis — the proton gradient. Uncoupling.",
  titleCN: "氧化磷酸化 · 呼吸链 · Mitchell 化学渗透学说 · ATP 合成机制与质子梯度 · 解偶联",
  opener: "Oxidative phosphorylation couples the **oxidation of NADH and FADH₂ by oxygen** to the **synthesis of ATP**; the coupling is not chemical but **osmotic — the energy is stored as an electrochemical proton gradient across the inner mitochondrial membrane** (Mitchell, Nobel Prize 1978).",
  openerCN: "氧化磷酸化把 NADH/FADH₂ 被氧氧化与 ATP 合成偶联起来；两者的联系不是化学中间物，而是化学渗透——能量以内膜两侧的电化学质子梯度形式储存（Mitchell，1978 年诺贝尔奖）。",
  spine: [
    "线粒体结构与两个区室；哪些膜通透",
    "四个复合体与两个流动载体的顺序（按氧化还原电位）",
    "质子泵出的化学计量与 P/O 比",
    "Mitchell 化学渗透学说的四条论点与实验证据",
    "ATP 合酶的结构与结合变构（旋转催化）机制",
    "穿梭系统与腺苷酸转位酶（ATP 如何出线粒体）",
    "抑制剂与解偶联剂；线粒体病与临床"
  ],
  blocks: [
    { h: "1 · The mitochondrion and the components of the chain", hcn: "线粒体与呼吸链的组成",
      points: [
        "**Outer membrane** — freely permeable up to ~5 kDa (**porin/VDAC**); **inner membrane** — impermeable even to H⁺, rich in **cardiolipin**, folded into cristae, and carrying the chain, ATP synthase and specific carriers. Matrix: PDH, citrate cycle, β-oxidation, mtDNA.",
        "**Complex I (NADH dehydrogenase, FMN + Fe-S)** — oxidises NADH, **pumps 4 H⁺**; **Complex II (succinate dehydrogenase, FAD + Fe-S)** — feeds electrons from succinate, **pumps no protons** (hence FADH₂ yields less ATP); other flavoproteins (ETF from β-oxidation, glycerol-3-P dehydrogenase) also enter at the same level.",
        "**Coenzyme Q (ubiquinone)** — small, lipophilic, mobile in the membrane, the **only carrier that accepts both electrons and protons**, and the junction where all inputs converge (also the site of superoxide leakage).",
        "**Complex III (cytochrome bc₁)** — the **Q cycle**, pumps **4 H⁺**; **cytochrome c** — a small peripheral haemoprotein on the outer face of the inner membrane, one-electron carrier (and the trigger of apoptosis when released).",
        "**Complex IV (cytochrome c oxidase, cytochromes a/a₃ + 2 Cu centres)** — the only step that reacts with **O₂: 4 e⁻ + 4 H⁺ + O₂ → 2 H₂O**, pumps **2 H⁺**.",
        "The electrons flow **down the redox potential gradient: NADH (E°' = −0.32 V) → ... → O₂ (+0.82 V)**; total ΔE°' = 1.14 V corresponds to **ΔG°' = −220 kJ/mol** per NADH — enough for several ATP."
      ],
      cn: "复合体 I–IV＋两个流动载体（CoQ、细胞色素 c）；II 不泵质子；电子按氧化还原电位从 −0.32 V 流向 +0.82 V，共释放约 220 kJ/mol。" },
    { h: "2 · Mitchell's chemiosmotic theory", hcn: "化学渗透学说",
      points: [
        "**The four claims:** (1) the respiratory chain **pumps protons out of the matrix**; (2) the inner membrane is **impermeable to H⁺**, so an **electrochemical gradient (proton-motive force)** builds up; (3) the **return of protons through ATP synthase** drives ATP synthesis; (4) therefore **no chemical high-energy intermediate exists** — the coupling is via the membrane.",
        "**Proton-motive force Δp = Δψ (membrane potential, the larger part, ~150–180 mV) + ΔpH (~0.5–1 unit, matrix alkaline)**; total equivalent ~**200 mV ≈ 20 kJ/mol of H⁺**.",
        "**Evidence to quote:** an **intact, closed membrane is required** (broken vesicles cannot phosphorylate); artificially imposing a pH gradient makes ATP **without any substrate oxidation**; **uncouplers that carry H⁺ across the membrane abolish ATP synthesis without touching electron flow**; ATP synthase reconstituted with bacteriorhodopsin in liposomes makes ATP in the light (the Racker–Stoeckenius experiment).",
        "**Respiratory control:** oxygen consumption is governed by the availability of **ADP** — if no ADP is phosphorylated, protons cannot return, the gradient rises, and electron transport slows. This coupling of demand to supply is the reason respiration follows work.",
        "**Stoichiometry: ~10 H⁺ pumped per NADH (4+4+2) and 6 per FADH₂**; the synthase needs about **4 H⁺ per ATP (3 for the rotation + 1 for the phosphate/ATP-ADP transport)** → **NADH ≈ 2.5 ATP, FADH₂ ≈ 1.5 ATP (P/O ratios)**."
      ],
      cn: "四条论点＋三个经典证据（完整膜、人工 pH 梯度产 ATP、解偶联剂）；Δp 由膜电位与 pH 差组成（膜电位是主要部分）；10 H⁺/NADH、约 4 H⁺/ATP → 2.5 与 1.5。" },
    { h: "3 · ATP synthase and the binding-change mechanism", hcn: "ATP 合酶与结合变构机制",
      points: [
        "**Complex V = F₁F₀-ATP synthase**, a molecular rotary motor. **F₀ (membrane): the c-ring (8–15 subunits) + subunit a** forms the proton channel; **F₁ (matrix knob): α₃β₃γδε** carries the three catalytic sites on the **β subunits**.",
        "**Proton flow turns the c-ring and with it the asymmetric γ subunit**; the stator (subunit b₂ and δ) holds α₃β₃ still, so the rotating γ forces each β subunit through **three conformations: L (loose, binds ADP + Pi) → T (tight, forms ATP spontaneously) → O (open, releases ATP)** — Boyer's **binding-change mechanism**, Walker's structure (Nobel Prize 1997).",
        "**The surprising point worth saying: forming ATP in the active site costs almost no energy — the energy of the proton gradient is used to RELEASE the ATP from the enzyme.**",
        "One full rotation (360°) produces **3 ATP**; the H⁺/ATP ratio equals the number of c subunits divided by 3, which is why P/O ratios are not whole numbers.",
        "The synthase is **fully reversible**: without a gradient it runs backwards as an ATPase (hydrolysing ATP to maintain the membrane potential) — this is prevented in vivo by the inhibitor protein **IF1** during ischaemia."
      ],
      cn: "F1F0 结构、质子驱动 c 环与 γ 亚基旋转、三个 β 亚基经 L→T→O 三种构象；关键金句：能量不是用来合成 ATP，而是用来把 ATP 从酶上释放。" },
    { h: "4 · Transport across the inner membrane", hcn: "内膜上的转运（常被追问）",
      points: [
        "**Adenine nucleotide translocase (ANT): ATP⁴⁻ out ↔ ADP³⁻ in** — electrogenic, driven by the membrane potential; inhibited by **atractyloside**. **Phosphate carrier: Pi⁻ with H⁺ in** (uses the pH part of the gradient).",
        "Because both transports consume part of the gradient, the true cost is about **4 H⁺ per exported ATP**.",
        "**NADH shuttles** (cytosolic NADH cannot cross): **malate–aspartate shuttle** (heart, liver, kidney) delivers NADH into the matrix → **2.5 ATP**; **glycerol-3-phosphate shuttle** (muscle, brain, brown fat) delivers electrons to **CoQ via FAD → 1.5 ATP**.",
        "Other essential carriers: **carnitine/acylcarnitine (CPT system) for fatty acids**, pyruvate carrier (MPC), citrate carrier, glutamate/aspartate carrier, **calcium uniporter (MCU)**.",
        "**Mitochondrial permeability transition pore (mPTP)** — opened by Ca²⁺ overload, ROS and low ATP → collapse of the gradient, swelling, **release of cytochrome c → apoptosis/necrosis** (topic 17B)."
      ],
      cn: "ANT（ATP 出/ADP 进，耗膜电位）＋磷酸载体；两种穿梭的 ATP 差别；肉碱系统；mPTP 开放导致细胞死亡。" },
    { h: "5 · Inhibitors and uncouplers", hcn: "抑制剂与解偶联剂（对比表）",
      points: [
        "**Chain inhibitors — electron flow stops, gradient collapses, O₂ consumption falls, no ATP:** **rotenone, amytal, MPP⁺ (complex I)**; **malonate, carboxin (complex II)**; **antimycin A (complex III)**; **cyanide, carbon monoxide, azide, hydrogen sulfide (complex IV)**.",
        "**ATP synthase inhibitor: oligomycin** — protons cannot return, the gradient rises, and **electron transport stops secondarily (respiratory control)**; oligomycin-blocked respiration is restored by an uncoupler — the classic demonstration experiment.",
        "**Uncouplers — the gradient is short-circuited: O₂ consumption RISES to maximum, heat is produced, ATP synthesis fails.** **2,4-dinitrophenol (a lipophilic weak acid), FCCP/CCCP, salicylate in overdose, high doses of thyroid hormone**, and the physiological **UCP1 (thermogenin) of brown fat**.",
        "**ANT inhibitor atractyloside** and the phosphate-carrier inhibitor look like ATP-synthesis inhibitors from outside — mention them if pushed.",
        "**Cyanide poisoning** as the clinical model: cytochrome oxidase blocked → cells cannot use oxygen → **venous blood stays bright red (high venous O₂), lactic acidosis, normal pO₂**; antidotes: **hydroxocobalamin, nitrites (methaemoglobin binds CN⁻), thiosulfate (rhodanese → thiocyanate)**."
      ],
      cn: "把三类物质的『耗氧、梯度、ATP』三栏差别背成表；氰化物中毒的表现（静脉血鲜红、乳酸酸中毒、pO₂ 正常）与三种解毒剂是常考。" },
    { h: "6 · ROS, mitochondrial disease and regulation", hcn: "活性氧、线粒体病与调节",
      points: [
        "**1–2 % of electrons leak (mainly complexes I and III) → superoxide**, removed by **MnSOD (SOD2)** and glutathione peroxidase — the origin of the mitochondrial theory of ageing (topic 4B).",
        "**Regulation:** ADP availability (respiratory control), substrate supply, thyroid hormones (increase the number of mitochondria and UCPs), **Ca²⁺** (activates the dehydrogenases), and **PGC-1α** which drives mitochondrial biogenesis in exercise and cold.",
        "**mtDNA: 16.6 kb, circular, ~37 genes (13 subunits of complexes I, III, IV, V + 2 rRNA + 22 tRNA), maternally inherited, no histones, poor repair, high mutation rate; heteroplasmy explains the threshold effect** and the variable phenotype.",
        "**Mitochondrial diseases** hit tissues with the highest energy demand: **MELAS, MERRF, LHON (Leber optic neuropathy), Kearns–Sayre, Leigh syndrome**; laboratory hallmark **lactic acidosis**, muscle biopsy shows **ragged red fibres**.",
        "Drugs and toxins acting here: **metformin (mild complex I inhibition)**, **statin-associated CoQ10 reduction**, **antiretrovirals (mtDNA polymerase γ)**, **MPTP → MPP⁺ (parkinsonism)**, cyanide, CO."
      ],
      cn: "漏电 1–2% 产超氧；mtDNA 的特点（16.6 kb、37 个基因、母系遗传、异质性）与四个线粒体病名字；乳酸酸中毒＋破碎红纤维是实验室线索。" }
  ],
  numbers: [
    "**NADH → 2.5 ATP, FADH₂ → 1.5 ATP** (older convention 3 and 2)",
    "H⁺ pumped: complex I **4**, complex III **4**, complex IV **2** = **10 per NADH**, 6 per FADH₂; **~4 H⁺ per exported ATP**",
    "Proton-motive force **~200 mV** (Δψ 150–180 mV + ΔpH ~1)",
    "NADH → O₂: **ΔE°' = 1.14 V, ΔG°' = −220 kJ/mol**",
    "mtDNA **16.6 kb, 37 genes**; electron leak **1–2 %**"
  ],
  clinic: [
    "**Cyanide/CO poisoning** — high venous oxygen, lactic acidosis; hydroxocobalamin, nitrites, thiosulfate",
    "**2,4-dinitrophenol** as an illegal slimming agent — fatal hyperthermia; **salicylate overdose** uncouples too",
    "**Mitochondrial myopathies** — lactic acidosis, ragged red fibres, maternal inheritance",
    "**Brown fat and UCP1** — non-shivering thermogenesis in the newborn; hypothermia risk in preterm infants",
    "**Ischaemia–reperfusion**: ATP synthase runs backwards, mPTP opens, cytochrome c leaves → cell death"
  ],
  traps: [
    "Complex **II pumps no protons** — that is why FADH₂ gives less ATP, not because FAD is 'weaker'",
    "Oxygen is consumed **only at complex IV**; the rest of the chain never touches O₂",
    "Chemiosmotic coupling means **there is no high-energy chemical intermediate** — say this explicitly",
    "Uncouplers **increase** oxygen consumption; inhibitors decrease it",
    "The energy of the gradient is used mainly to **release** ATP from the synthase, not to form the bond"
  ],
  terms: [
    ["proton-motive force", "质子动力势"], ["chemiosmotic theory", "化学渗透学说"], ["ubiquinone", "泛醌（辅酶 Q）"],
    ["cytochrome c oxidase", "细胞色素 c 氧化酶"], ["binding-change mechanism", "结合变构机制"],
    ["respiratory control", "呼吸控制"], ["uncoupler", "解偶联剂"], ["oligomycin", "寡霉素"],
    ["adenine nucleotide translocase", "腺苷酸转位酶"], ["heteroplasmy", "异质性"]
  ]
},
b: {
  titleEN: "Blood plasma proteins — function and classification. Electrophoresis of plasma proteins. Inflammation and acute-phase reactants. CRP and sedimentation.",
  titleCN: "血浆蛋白的功能与分类 · 血浆蛋白电泳 · 炎症与急性期反应物 · CRP 与血沉",
  opener: "Plasma contains **60–80 g/L of protein**; almost all of it is made in the **liver** (immunoglobulins are the exception — plasma cells), and electrophoresis separates it into **albumin and the α₁, α₂, β and γ fractions**, whose pattern is a diagnostic picture in itself.",
  openerCN: "血浆蛋白总量 60–80 g/L，几乎全部由肝合成（免疫球蛋白除外，由浆细胞产生）；电泳把它分成白蛋白与 α1、α2、β、γ 五条区带，其图形本身就有诊断意义。",
  spine: [
    "总量、来源与总体功能（六大功能）",
    "白蛋白：结构、胶体渗透压、运输、低白蛋白血症",
    "α1、α2、β、γ 各区带的代表蛋白",
    "电泳原理与五种典型异常图形",
    "急性期反应：正/负反应物与 IL-6",
    "CRP 的结构、动力学与判读",
    "血沉的原理、影响因素与 CRP 的对比"
  ],
  blocks: [
    { h: "1 · Overview and general functions", hcn: "总量、来源与功能",
      points: [
        "**Total protein 60–80 g/L**; **albumin 35–50 g/L (~60 %)**, globulins ~20–35 g/L. **Plasma contains fibrinogen; serum does not** (it was consumed by clotting) — say this whenever you are asked about the difference.",
        "Synthesis: **liver makes all of them except immunoglobulins** (plasma cells) and some hormones/enzymes released from other tissues. Half-lives differ: **albumin ~20 days, transthyretin (prealbumin) ~2 days, CRP ~19 h** — which is why prealbumin is the nutritional marker and CRP the inflammation marker.",
        "**Six functions to list:** (1) **colloid osmotic (oncotic) pressure** — 80 % from albumin, ~25 mmHg; (2) **transport** of hormones, bilirubin, fatty acids, drugs, metals; (3) **buffering** (protein buffer, topic 19B); (4) **defence** — immunoglobulins, complement; (5) **haemostasis** — fibrinogen, clotting factors, antithrombin; (6) **enzymes and their inhibitors, plus a protein/amino-acid reserve**.",
        "The concentration of any plasma protein reflects **synthesis, distribution (capillary leak), consumption and loss** — always interpret it together with the clinical situation and with CRP.",
        "Proteins bound to plasma proteins are pharmacologically inactive — **only the free fraction acts** (important for calcium, thyroxine, and drugs like warfarin and phenytoin)."
      ],
      cn: "总蛋白 60–80 g/L、白蛋白 35–50 g/L；血浆有纤维蛋白原、血清没有；六大功能背下来；不同半衰期决定不同临床用途。" },
    { h: "2 · Albumin", hcn: "白蛋白",
      points: [
        "**585 amino acids, ~66 kDa, 17 disulfide bridges, no carbohydrate, strongly negative (pI 4.7)** — hence it migrates fastest in electrophoresis.",
        "**It provides ~80 % of the colloid osmotic pressure** (small size, high concentration, negative charge holding Na⁺ — the Gibbs–Donnan effect).",
        "**Transport: unconjugated bilirubin, free fatty acids, calcium (~40 % of total calcium!), magnesium, thyroxine, cortisol, tryptophan, and drugs** (warfarin, salicylate, sulfonamides — competition for binding sites causes interactions and kernicterus in the newborn).",
        "**Hypoalbuminaemia — four mechanisms:** decreased synthesis (**liver failure, malnutrition**), increased loss (**nephrotic syndrome > 3.5 g/day, protein-losing enteropathy, burns**), redistribution/dilution (capillary leak in sepsis, pregnancy), and **catabolism/negative acute-phase behaviour** in inflammation. Consequence: **oedema, ascites**.",
        "Practical rules: **corrected calcium** (total Ca falls ~0.2 mmol/L per 10 g/L fall of albumin, ionised calcium unchanged), and albumin/creatinine ratio in urine for early nephropathy. **Analbuminaemia** is surprisingly mild — proof that other proteins compensate."
      ],
      cn: "白蛋白：66 kDa、pI 4.7、贡献 80% 胶体渗透压、运输胆红素/脂肪酸/钙/药物；低白蛋白血症四类原因；校正钙的换算是必考小题。" },
    { h: "3 · The globulin fractions", hcn: "各区带的代表蛋白",
      points: [
        "**α₁: α₁-antitrypsin (the dominant one — a serpin, protects lung elastin; deficiency = emphysema + liver disease)**, α₁-acid glycoprotein (orosomucoid), α-fetoprotein, HDL (α-lipoprotein), TBG.",
        "**α₂: haptoglobin (binds free haemoglobin — falls in intravascular haemolysis), α₂-macroglobulin (universal protease trap, large, retained in nephrotic syndrome), caeruloplasmin (copper, ferroxidase — low in Wilson disease)**.",
        "**β: transferrin (iron transport — rises in iron deficiency), LDL (β-lipoprotein), complement C3, β₂-microglobulin, fibrinogen (in plasma, appears between β and γ), haemopexin**.",
        "**γ: immunoglobulins IgG, IgA, IgM, IgD, IgE** — plus CRP, which migrates in the γ region but is present in tiny amounts normally.",
        "Memory aid: **α₁ antiprotease, α₂ the two big scavengers (haptoglobin, macroglobulin) + copper, β iron and lipids and complement, γ antibodies.**"
      ],
      cn: "四条区带的代表蛋白按口诀记：α1 抗蛋白酶；α2 结合珠蛋白/巨球蛋白/铜蓝蛋白；β 转铁蛋白/LDL/C3；γ 免疫球蛋白。" },
    { h: "4 · Electrophoresis and its typical patterns", hcn: "电泳原理与典型图形",
      points: [
        "Principle: at **pH 8.6 all plasma proteins are anions** and migrate towards the anode at different speeds according to **charge, size and shape**; on cellulose acetate or agarose gel, stained and evaluated by densitometry. **Five fractions: albumin, α₁, α₂, β, γ.**",
        "**Acute inflammation:** **α₁ and α₂ rise (α₁-antitrypsin, haptoglobin), albumin falls** — the 'acute-phase pattern'.",
        "**Chronic inflammation / chronic infection:** the same plus a **broad polyclonal rise of γ**.",
        "**Liver cirrhosis:** **albumin low, broad γ rise with β–γ bridging** (IgA); **nephrotic syndrome: albumin very low, α₂ high (α₂-macroglobulin is too big to be lost), γ low**.",
        "**Monoclonal gammopathy (myeloma): a narrow sharp 'M spike' in the γ region**, confirmed by **immunofixation** and free light chains; **Bence-Jones protein** (light chains) in urine. **Hypogammaglobulinaemia**: immunodeficiency, protein loss.",
        "**α₁ band virtually absent = α₁-antitrypsin deficiency.** These six pictures are what the examiner wants when the topic says 'electrophoresis'."
      ],
      cn: "五条区带 + 六张典型图（急性炎症、慢性炎症、肝硬化 β-γ 桥、肾病综合征、骨髓瘤 M 峰、α1 缺失）。这一段最好能在纸上画出曲线。" },
    { h: "5 · The acute-phase reaction", hcn: "急性期反应",
      points: [
        "Definition: the systemic response to tissue injury, infection or inflammation — driven mainly by **IL-6, with IL-1 and TNF-α** acting on hepatocytes; it starts within hours and includes fever, leukocytosis and changed protein synthesis.",
        "**Positive acute-phase proteins (rise): CRP (up to 1000×), serum amyloid A, fibrinogen, haptoglobin, α₁-antitrypsin, α₁-acid glycoprotein, caeruloplasmin, complement C3/C4, ferritin, hepcidin.**",
        "**Negative acute-phase proteins (fall): albumin, transferrin, transthyretin (prealbumin), retinol-binding protein.**",
        "Consequences worth naming: **hepcidin** blocks iron release → **anaemia of chronic disease** (low iron, low transferrin, high ferritin); **fibrinogen** raises the sedimentation rate; the changes are **not specific** and must be read as a pattern.",
        "The clinical use is comparing markers of different speed: **procalcitonin (rises in bacterial sepsis within 3–6 h), CRP (6–8 h, peak 48 h), ESR (days)**."
      ],
      cn: "IL-6 是主要驱动；正反应物与负反应物各列 4–5 个；铁调素解释慢性病贫血；三种标志物的时间尺度（PCT<CRP<ESR）。" },
    { h: "6 · CRP and the erythrocyte sedimentation rate", hcn: "CRP 与血沉",
      points: [
        "**CRP = C-reactive protein**, named because it binds the **C-polysaccharide of pneumococcus**; a **pentraxin — 5 identical subunits, binds phosphocholine on damaged cells and bacteria in a Ca²⁺-dependent way**, then **activates the classical complement pathway and opsonises** — a component of innate immunity, an 'antibody-like' molecule without specificity.",
        "Kinetics: synthesised in the liver on IL-6 stimulation, **rises within 6–8 h, peaks at 24–48 h, half-life 19 h**, and **falls quickly when the stimulus stops** — it therefore monitors therapy in real time.",
        "Interpretation: normal **< 5 mg/L**; **10–40 mg/L** mild inflammation or viral infection; **> 100 mg/L** strongly suggests **bacterial infection** (also major trauma, surgery, pancreatitis, active rheumatic disease, malignancy). **hsCRP 1–3 mg/L** is used for cardiovascular risk, not for infection.",
        "**ESR (Fahraeus–Westergren)** measures how far erythrocytes fall in 1 hour in a vertical tube. The mechanism is **rouleaux formation**: high **fibrinogen and immunoglobulins** reduce the negative surface charge (zeta potential) of erythrocytes → they stack → sediment faster. Normal roughly **< 15 mm/h (men), < 20 mm/h (women)**; it rises with age.",
        "**ESR versus CRP:** ESR is **indirect, slow to rise (days) and slow to fall (weeks)**, and depends on **anaemia (raises it), polycythaemia (lowers it), erythrocyte shape (sickle cells lower it), pregnancy and age**; CRP is direct, fast and unaffected by those. Very high ESR (> 100 mm/h) points to **myeloma, temporal arteritis/polymyalgia, tuberculosis, malignancy**.",
        "The sentence that scores: **CRP tells you what is happening today, the ESR tells you what has been happening for the last weeks.**"
      ],
      cn: "CRP：五聚体戊糖蛋白、结合磷酸胆碱、激活经典补体、6–8 h 上升、半衰期 19 h、>100 mg/L 提示细菌感染。血沉靠缗钱状叠连，受贫血/球蛋白影响，慢升慢降。最后一句对比金句要说。" }
  ],
  numbers: [
    "Total protein **60–80 g/L**, albumin **35–50 g/L**, colloid osmotic pressure **~25 mmHg (3.3 kPa)**",
    "Half-lives: albumin **~20 days**, transthyretin **~2 days**, **CRP 19 h**",
    "CRP normal **< 5 mg/L**; bacterial infection often **> 100 mg/L**; hsCRP risk cut-offs **1 and 3 mg/L**",
    "ESR normal **< 15 mm/h (men), < 20 mm/h (women)**",
    "Electrophoresis at **pH 8.6**, five fractions; nephrotic proteinuria **> 3.5 g/day**"
  ],
  clinic: [
    "**Nephrotic syndrome** — low albumin, high α₂, oedema, hyperlipidaemia, thrombosis (antithrombin lost)",
    "**Multiple myeloma** — M spike, Bence-Jones proteinuria, high ESR, rouleaux on the smear",
    "**α₁-antitrypsin deficiency** — absent α₁ band, emphysema, liver cirrhosis",
    "**Anaemia of chronic disease** — hepcidin-driven: low serum iron, low transferrin, **high ferritin**",
    "**Haptoglobin falls in intravascular haemolysis**; **caeruloplasmin low in Wilson disease**"
  ],
  traps: [
    "**Serum has no fibrinogen** — a plasma/serum mix-up is an easy way to lose points",
    "Ferritin is an **acute-phase protein**, so a normal or high ferritin does not exclude iron deficiency during inflammation",
    "CRP is **not an immunoglobulin**, although it opsonises and activates complement",
    "ESR is raised by **anaemia** and by age independently of inflammation",
    "Albumin is a **negative** acute-phase protein — a falling albumin in a septic patient is not necessarily malnutrition"
  ],
  terms: [
    ["colloid osmotic pressure", "胶体渗透压"], ["electrophoresis", "电泳"], ["acute-phase protein", "急性期蛋白"],
    ["C-reactive protein", "C 反应蛋白"], ["pentraxin", "戊糖蛋白"], ["erythrocyte sedimentation rate", "红细胞沉降率（血沉）"],
    ["rouleaux", "缗钱状叠连"], ["haptoglobin", "结合珠蛋白"], ["caeruloplasmin", "铜蓝蛋白"],
    ["monoclonal gammopathy", "单克隆丙种球蛋白病"], ["hepcidin", "铁调素"]
  ]
}
});
