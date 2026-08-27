window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 19,
a: {
  titleEN: "Structure of fatty acids and triacylglycerols. Essential fatty acids. Unsaturated fatty acids. Biosynthesis of fatty acids and its relation to other pathways.",
  titleCN: "脂肪酸与三酰甘油的结构 · 必需脂肪酸 · 不饱和脂肪酸 · 脂肪酸的生物合成及其与其他途径的联系",
  opener: "Fatty acids are **carboxylic acids with a long hydrocarbon chain, almost always with an even number of carbons and, if unsaturated, with cis double bonds**; their synthesis runs in the **cytosol from acetyl-CoA and NADPH**, with **acetyl-CoA carboxylase as the rate-limiting enzyme**, and is strictly separated from their degradation in the mitochondrion.",
  openerCN: "脂肪酸是带长烃链的羧酸，几乎总是偶数碳，若不饱和则为顺式双键；其合成在胞质进行，原料是乙酰 CoA 与 NADPH，限速酶是乙酰 CoA 羧化酶，与线粒体内的分解严格分开。",
  spine: [
    "脂肪酸的结构与命名（Δ 与 ω 两套体系）",
    "饱和/不饱和/反式脂肪酸与熔点、膜流动性",
    "必需脂肪酸与 ω-3/ω-6 的意义",
    "三酰甘油的结构、性质与合成（两条途径）",
    "脂肪酸从头合成：柠檬酸穿梭、ACC、脂肪酸合酶",
    "调节：别构、共价（AMPK/胰岛素）、基因（SREBP-1c、ChREBP）",
    "与其他途径的整合与临床（脂肪肝、NAFLD、反式脂肪）"
  ],
  blocks: [
    { h: "1 · Structure and nomenclature", hcn: "结构与命名（两套体系）",
      points: [
        "**General formula CH₃−(CH₂)n−COOH**; natural fatty acids have an **even number of carbons (12–24, most often 16 and 18)** because they are built from **C2 units**.",
        "**Two numbering systems: Δ (delta) counts from the carboxyl carbon (C1); ω (omega, or n-) counts from the terminal methyl.** Example: **linoleic acid = 18:2 Δ9,12 = 18:2 ω-6**; **α-linolenic acid = 18:3 Δ9,12,15 = ω-3**; **arachidonic acid = 20:4 Δ5,8,11,14 = ω-6**; **EPA = 20:5 ω-3, DHA = 22:6 ω-3**.",
        "**Saturated: palmitic 16:0, stearic 18:0** — straight chains that pack tightly → **solid at room temperature, higher melting point**. **Unsaturated: oleic 18:1 ω-9** — a **cis** double bond puts a ~30° kink in the chain → looser packing → **liquid, lower melting point**; more double bonds means an even lower melting point.",
        "**Trans fatty acids** (from industrial partial hydrogenation, and in small amounts from ruminants) behave physically like **saturated** fatty acids and are metabolically the worst: they **raise LDL, lower HDL and raise Lp(a)** — hence the legal limits on them.",
        "This physical chemistry is the reason **membranes contain unsaturated acyl chains** (fluidity, topic 25A), depot fat is more saturated, and **cholesterol acts as the fluidity buffer**."
      ],
      cn: "Δ 与 ω 两套编号必须都会用；顺式双键的扭结→熔点低→膜流动性；反式脂肪酸物理上像饱和、代谢上最坏（LDL↑ HDL↓）。" },
    { h: "2 · Essential fatty acids and the omega families", hcn: "必需脂肪酸与 ω 家族",
      points: [
        "**Humans cannot introduce a double bond beyond C9 (we lack Δ12 and Δ15 desaturases), so LINOLEIC ACID (18:2 ω-6) and α-LINOLENIC ACID (18:3 ω-3) are ESSENTIAL** and must come from the diet (vegetable oils, nuts, fish).",
        "From them we make the rest: **linoleic → γ-linolenic → dihomo-γ-linolenic → ARACHIDONIC ACID (ω-6)**; **α-linolenic → EPA → DHA (ω-3)** — conversion in man is inefficient (a few per cent), which is why **fish is the practical source of EPA/DHA**.",
        "**Why they matter: (1) precursors of eicosanoids** — ω-6 arachidonate gives the **series-2 prostanoids and series-4 leukotrienes (pro-inflammatory, pro-aggregatory)**, ω-3 EPA gives **series-3 prostanoids and series-5 leukotrienes plus resolvins (less inflammatory)**; **(2) membrane components** — DHA is enormously enriched in **retina and brain synapses**; **(3) regulation of gene expression through PPAR**.",
        "**Deficiency** (only in fat-free parenteral nutrition or severe malabsorption): **scaly dermatitis, poor wound healing, hair loss, growth retardation, and the appearance of the abnormal 'Mead acid' 20:3 ω-9** — the laboratory marker (the triene/tetraene ratio).",
        "The **ω-6 : ω-3 ratio** of a Western diet (>10:1 instead of ~4:1) is the usual public-health argument for eating fish — mention it as the practical conclusion."
      ],
      cn: "人缺 Δ12/Δ15 去饱和酶→亚油酸(ω-6)与 α-亚麻酸(ω-3)必需；各自延伸为花生四烯酸与 EPA/DHA；三大用途（类二十烷酸前体、膜成分、PPAR 配体）；缺乏症与 Mead 酸标志。" },
    { h: "3 · Triacylglycerols", hcn: "三酰甘油",
      points: [
        "**Structure: glycerol esterified with three fatty acids** — usually a saturated acid at sn-1, an unsaturated at sn-2 (this is the position that **pancreatic lipase spares**, so 2-monoacylglycerol is what is absorbed) and a variable one at sn-3.",
        "**Completely non-polar (all three OH groups esterified) → stored anhydrously in droplets → 38 kJ/g**, the reason fat is the body's energy store (topic 7B).",
        "**Synthesis, two routes: the glycerol-3-phosphate pathway (liver and adipose tissue; glycerol-3-P from DHAP, or from glycerol via glycerol kinase in the LIVER only) and the monoacylglycerol pathway (enterocyte, after fat absorption)**; both need **fatty acyl-CoA** made by acyl-CoA synthetase (2 high-energy bonds).",
        "The intermediate **phosphatidate** is the branch point: it goes either to **triacylglycerol (after dephosphorylation by phosphatidate phosphatase, then DGAT)** or to **phospholipids** (topic 21A) — one molecule, two destinies, decided by the cell's needs.",
        "Chemistry worth knowing: **saponification** (alkaline hydrolysis → soaps and glycerol, the basis of the saponification number), **iodine number** (a measure of unsaturation), **rancidity** (hydrolytic and oxidative — the same peroxidation chemistry as in membranes)."
      ],
      cn: "结构与 sn-2 位置的意义（胰脂肪酶不切 sn-2）；无水储存 38 kJ/g；两条合成途径（甘油-3-磷酸 vs 单酰甘油）；磷脂酸是三酰甘油与磷脂的分叉点；皂化值与碘值。" },
    { h: "4 · De-novo synthesis of fatty acids", hcn: "脂肪酸的从头合成",
      points: [
        "Location: **cytosol** of **liver (mainly), adipose tissue, lactating mammary gland**; substrates **acetyl-CoA + NADPH** (from the pentose phosphate pathway and malic enzyme); it happens when carbohydrate is in excess.",
        "**Getting acetyl-CoA out of the mitochondrion — the citrate shuttle:** acetyl-CoA + oxaloacetate → citrate → tricarboxylate carrier → cytosol → **ATP-citrate lyase** → acetyl-CoA + oxaloacetate; oxaloacetate → malate → **malic enzyme → pyruvate + NADPH** (which supplies part of the reducing power) → back into the mitochondrion.",
        "**Rate-limiting step: ACETYL-CoA CARBOXYLASE (biotin, ATP, HCO₃⁻): acetyl-CoA → MALONYL-CoA.** Regulation: **allosterically activated by CITRATE (polymerisation into active filaments) and inhibited by long-chain acyl-CoA; inactivated by phosphorylation (AMPK, glucagon/adrenaline) and activated by dephosphorylation (insulin); induced by insulin and a high-carbohydrate diet.**",
        "**Fatty acid synthase — one multifunctional dimeric polypeptide with seven activities and the phosphopantetheine arm of ACP.** The cycle repeats: **condensation (with loss of the CO₂ that was added by ACC) → reduction (NADPH) → dehydration → reduction (NADPH)** — chain grows by **two carbons per cycle**, seven cycles → **palmitate (16:0)**, then the product is released by the thioesterase.",
        "**Stoichiometry: 8 acetyl-CoA (1 primer + 7 malonyl-CoA) + 14 NADPH + 7 ATP → palmitate.** Say also the two key contrasts with β-oxidation: **cytosol vs mitochondrion, ACP vs CoA, NADPH vs NAD⁺/FAD, malonyl-CoA intermediate vs none, D- vs L-hydroxyacyl intermediates.**",
        "**Beyond palmitate: elongases (in the ER, using malonyl-CoA; in mitochondria using acetyl-CoA) and desaturases (Δ9 = stearoyl-CoA desaturase → oleate, Δ6, Δ5 — mixed-function oxidases needing O₂, cytochrome b5 and NAD(P)H)**; man has **no desaturase beyond C9**, which is exactly why ω-3 and ω-6 acids are essential."
      ],
      cn: "四段：柠檬酸穿梭把乙酰 CoA 运出来（并经苹果酸酶得 NADPH）→ ACC 是限速酶（柠檬酸激活、磷酸化失活）→ 脂肪酸合酶七个活性、每轮加 2 碳、7 轮成软脂酸 → 延长酶与去饱和酶（人无 Δ9 以远）。化学计量与『与 β 氧化的五点对比』都要能说。" },
    { h: "5 · Regulation and reciprocal control with oxidation", hcn: "调节与和 β 氧化的互反控制",
      points: [
        "**Malonyl-CoA is the switch: it inhibits CPT-1, the carrier that brings fatty acids INTO the mitochondrion** — so while synthesis is running, oxidation cannot. This one sentence answers 'how are the two pathways coordinated'.",
        "**Fed state (insulin):** citrate high → ACC active → malonyl-CoA high → synthesis on, β-oxidation off; insulin also induces **ACC, FAS, ATP-citrate lyase, glucokinase and G6PD** through **SREBP-1c** (and glucose acts through **ChREBP**).",
        "**Fasting (glucagon, adrenaline) and exercise (AMPK):** ACC phosphorylated and inactive → malonyl-CoA falls → CPT-1 opens → β-oxidation and ketogenesis run.",
        "Long-chain acyl-CoA (the product) inhibits ACC — simple **feedback inhibition**; polyunsaturated fatty acids suppress SREBP-1c, another reason fish oil lowers triacylglycerols.",
        "Where the product goes: palmitate → elongation/desaturation → **esterification to triacylglycerols → packed into VLDL for export (liver) or stored (adipose tissue)**, or used for **phospholipids, sphingolipids and protein acylation (myristoylation, palmitoylation)**."
      ],
      cn: "核心开关是丙二酰 CoA 抑制 CPT-1；餐后胰岛素/SREBP-1c 开合成，空腹 AMPK/胰高血糖素关合成开氧化；产物去向（VLDL、储存、磷脂、蛋白酰化）。" },
    { h: "6 · Integration and clinical relevance", hcn: "整合与临床",
      points: [
        "**Where the carbon comes from: excess glucose → pyruvate → acetyl-CoA → fatty acids; excess fructose is even more lipogenic because it bypasses PFK-1 (topic 7A); ethanol also supplies acetyl-CoA and NADH (topic 23B).** Amino-acid carbon can join through acetyl-CoA as well.",
        "**Where the NADPH comes from: the pentose phosphate pathway (~60 %) and malic enzyme (~40 %)** — which is why the two pathways are co-induced by insulin and located in the same compartment.",
        "**Fatty liver (steatosis) results whenever input exceeds export:** more substrate (alcohol, fructose, obesity), more synthesis (hyperinsulinaemia), less oxidation, or impaired VLDL export (**protein malnutrition, choline deficiency, carbon tetrachloride, abetalipoproteinaemia**). **NAFLD/MASLD** is now the commonest liver disease; the 'second hit' of oxidative stress and inflammation turns it into steatohepatitis and fibrosis.",
        "**Trans fats and cardiovascular risk; ω-3 supplementation for hypertriacylglycerolaemia; the ketogenic diet** — all clinical consequences of the chemistry above.",
        "**Drugs and targets: metformin/AMPK, statins (a parallel pathway using the same acetyl-CoA), fibrates (PPARα → oxidation), and experimental ACC and FAS inhibitors (also in oncology, since tumours up-regulate fatty-acid synthase).**"
      ],
      cn: "碳来自过量葡萄糖/果糖/乙醇；NADPH 来自磷酸戊糖途径与苹果酸酶；脂肪肝=输入超过输出的四种情形；临床落点（NAFLD、反式脂肪、ω-3、酮饮食、以 FAS 为靶的抗肿瘤药）。" }
  ],
  numbers: [
    "Palmitate synthesis: **8 acetyl-CoA + 14 NADPH + 7 ATP**; chain grows **2 carbons per cycle, 7 cycles**",
    "Fat **38 kJ/g** vs 17 kJ/g for carbohydrate and protein",
    "Essential: **linoleic 18:2 ω-6 and α-linolenic 18:3 ω-3**; recommended ω-6:ω-3 ≈ **4:1**",
    "NADPH sources: pentose phosphate pathway **~60 %**, malic enzyme **~40 %**",
    "Human desaturases act only up to **Δ9** — none beyond it"
  ],
  clinic: [
    "**NAFLD/MASLD** — the commonest liver disease; insulin resistance, fructose and alcohol as drivers",
    "**Essential fatty-acid deficiency** in long-term fat-free parenteral nutrition — dermatitis, Mead acid",
    "**Trans fatty acids** — raise LDL and Lp(a), lower HDL; legally restricted",
    "**Fish oil (EPA/DHA)** lowers triacylglycerols and gives less inflammatory eicosanoids",
    "**Fatty acid synthase** is up-regulated in many tumours — an oncological drug target"
  ],
  traps: [
    "Synthesis is **cytosolic with NADPH and ACP**, oxidation is **mitochondrial with NAD⁺/FAD and CoA** — never blur them",
    "**Malonyl-CoA is not an intermediate of β-oxidation** — it is the inhibitor of CPT-1",
    "The CO₂ added by acetyl-CoA carboxylase is **released again** in the condensation step — it is catalytic, not incorporated",
    "Man cannot desaturate beyond C9 — so **ω-3 and ω-6 acids can never be synthesised de novo**",
    "Odd-chain fatty acids exist but are minor; the even number follows from building with **C2 units**"
  ],
  terms: [
    ["saturated / unsaturated", "饱和/不饱和"], ["cis / trans double bond", "顺式/反式双键"],
    ["essential fatty acid", "必需脂肪酸"], ["omega-3 / omega-6", "ω-3/ω-6"], ["triacylglycerol", "三酰甘油"],
    ["phosphatidate", "磷脂酸"], ["citrate shuttle", "柠檬酸穿梭"], ["acetyl-CoA carboxylase", "乙酰 CoA 羧化酶"],
    ["fatty acid synthase", "脂肪酸合酶"], ["malonyl-CoA", "丙二酰 CoA"], ["desaturase / elongase", "去饱和酶/延长酶"]
  ]
},
b: {
  titleEN: "Metabolism of water. Disperse systems and osmotic phenomena. Osmolarity and osmolality. Bicarbonate, phosphate and haemoglobin buffers. Proteins as buffers.",
  titleCN: "水代谢 · 分散系与渗透现象 · 渗透浓度与渗透量 · 碳酸氢盐、磷酸盐与血红蛋白缓冲系统 · 蛋白质缓冲",
  opener: "Water is **60 % of body mass**, distributed between an **intracellular (2/3) and an extracellular (1/3) compartment** whose volumes are set by **osmotically active particles — sodium outside, potassium inside**; the same solutions provide the **buffers** that keep pH within 0.1 of 7.4.",
  openerCN: "水占体重 60%，分布于细胞内（2/3）与细胞外（1/3）两个区室，其容量由渗透活性粒子决定——细胞外是钠、细胞内是钾；同样这些溶液又提供缓冲系统，把 pH 维持在 7.4 上下 0.1 之内。",
  spine: [
    "体液分布与组成（三个区室、主要离子）",
    "水的平衡：摄入与排出、调节（ADH、渴感、RAAS）",
    "分散系与胶体；胶体渗透压与 Starling 力（水肿的四个机制）",
    "渗透浓度 vs 渗透量；计算公式与渗透间隙",
    "张力（tonicity）与输液的选择",
    "缓冲的原理：Henderson–Hasselbalch、缓冲容量",
    "四大缓冲系统：碳酸氢盐、磷酸盐、血红蛋白、蛋白质"
  ],
  blocks: [
    { h: "1 · Body water and its compartments", hcn: "体液的分布与组成",
      points: [
        "**Total body water ≈ 60 % of body mass in men, 50–55 % in women, 75 % in newborns, less in obesity (fat contains little water).** For a 70 kg man: **42 L**.",
        "**Intracellular fluid 2/3 (~28 L); extracellular 1/3 (~14 L), of which interstitial ~3/4 (11 L) and plasma ~1/4 (3.5 L)**; plus small transcellular fluids (CSF, joint, pleural, gastrointestinal secretions).",
        "**Ionic composition — the exam answer:** **extracellular: Na⁺ 135–145, Cl⁻ 98–107, HCO₃⁻ 22–26 mmol/L**; **intracellular: K⁺ ~140, Mg²⁺, phosphate and proteins**. The difference is maintained by the **Na⁺/K⁺-ATPase**, and it is why sodium determines extracellular volume and potassium the intracellular one.",
        "**Balance: intake ~2500 mL/day (drink 1200–1500, food ~700–1000, oxidation water ~300) = output (urine 1000–1500, insensible loss through skin and lungs ~900, stool ~100).** The **obligatory urine volume is ~500 mL** — the minimum needed to excrete the daily solute load at maximal concentration.",
        "Regulation: **osmolality is regulated by ADH and thirst (sensitive to a 1–2 % change), volume by the renin–angiotensin–aldosterone system, natriuretic peptides and the sympathetic nervous system.** Osmoregulation and volume regulation can conflict — and osmoregulation usually wins, which is why hypovolaemia causes hyponatraemia."
      ],
      cn: "60% 体重、2/3 细胞内、1/3 细胞外（其中血浆 1/4）；细胞外钠氯、细胞内钾镁磷；每天出入 2500 mL、最低尿量 500 mL；渗透调节靠 ADH 与渴感，容量调节靠 RAAS。" },
    { h: "2 · Disperse systems and osmotic phenomena", hcn: "分散系与渗透现象",
      points: [
        "**Disperse systems by particle size: true solutions (< 1 nm, e.g. electrolytes, glucose), colloids (1–100 nm, e.g. proteins — they scatter light, the Tyndall effect, and do not pass a semipermeable membrane), and suspensions/emulsions (> 100 nm, e.g. blood cells, chylomicrons, milk fat).** Blood is all three at once.",
        "**Osmosis** = movement of solvent through a semipermeable membrane toward the higher solute concentration; **osmotic pressure π = i·c·R·T (van 't Hoff)** — it depends on the **NUMBER of particles, not their nature**: NaCl gives 2 osmoles per mole, glucose 1.",
        "**Colloid osmotic (oncotic) pressure** is the small part of the total osmotic pressure due to **proteins (~25 mmHg, 80 % from albumin)** — small in absolute terms but decisive across the capillary wall, because proteins are the only solutes that cannot cross it.",
        "**Starling forces: filtration = (P_capillary − P_interstitial) − σ(π_plasma − π_interstitial)**; net filtration at the arterial end, reabsorption at the venous end, and the surplus is drained by **lymph**.",
        "**Four mechanisms of oedema, straight from that equation: (1) high hydrostatic pressure (heart failure, venous obstruction); (2) low oncotic pressure (nephrotic syndrome, liver failure, malnutrition); (3) increased permeability (inflammation, sepsis, burns); (4) impaired lymphatic drainage (lymphoedema — protein-rich).** Add sodium and water retention as the amplifier."
      ],
      cn: "分散系三类＋血液同时具备；渗透压只看粒子数（van 't Hoff）；胶体渗透压 25 mmHg 主要来自白蛋白；Starling 公式推出水肿四机制——这套逻辑是本题的骨架。" },
    { h: "3 · Osmolarity, osmolality and tonicity", hcn: "渗透浓度、渗透量与张力",
      points: [
        "**Osmolarity = osmoles per LITRE of solution (mosmol/L); osmolality = osmoles per KILOGRAM of solvent (mosmol/kg)** — osmolality is temperature-independent and is what the laboratory measures (by **freezing-point depression**); in dilute body fluids the two are numerically close.",
        "**Plasma osmolality 275–295 mmol/kg.** Calculated: **2 × [Na⁺] + glucose + urea** (all in mmol/L); some use **2 × ([Na⁺] + [K⁺]) + glucose + urea**.",
        "**Osmolal gap = measured − calculated (normally < 10 mmol/kg).** A raised gap means unmeasured osmotically active substances: **ethanol, methanol, ethylene glycol, mannitol, ketones** — a genuinely useful bedside test in poisoning (topic 22B).",
        "**Tonicity (effective osmolality) counts only particles that CANNOT cross the cell membrane.** **Urea and ethanol raise osmolality but not tonicity** (they equilibrate across membranes), so they do not shift water in the steady state; **sodium, glucose (when insulin is lacking) and mannitol do**.",
        "**Practical consequences: 0.9 % NaCl (154 mmol/L, ~308 mosmol/L) is isotonic; 5 % glucose is isotonic in the bottle but behaves as free water once the glucose is metabolised; hypertonic saline and mannitol pull water out of cells (used for cerebral oedema); rapid correction of chronic hyponatraemia causes osmotic demyelination, and too-rapid correction of hypernatraemia causes cerebral oedema** — the clinical pay-off of understanding tonicity.",
        "**Hyperglycaemia lowers measured sodium (~1 mmol/L per 3–4 mmol/L of glucose above normal) — translocational hyponatraemia** with a normal or high osmolality; **pseudohyponatraemia** from severe lipaemia/paraproteinaemia is an analytical artefact instead (topic 18B)."
      ],
      cn: "osmolarity(每升) vs osmolality(每千克)；计算公式与渗透间隙>10 提示外来渗透物；张力只算不能透膜的粒子（尿素、乙醇不算）；补钠速度与渗透性脱髓鞘；高血糖导致的转移性低钠。" },
    { h: "4 · Principles of buffering", hcn: "缓冲的原理",
      points: [
        "**A buffer is a weak acid and its conjugate base**; it resists pH change because added H⁺ is consumed by the base and added OH⁻ by the acid.",
        "**Henderson–Hasselbalch: pH = pKa + log([A⁻]/[HA])**; for the bicarbonate system **pH = 6.1 + log([HCO₃⁻] / (0.03 × pCO₂ mmHg))** — with normal values 24 and 40: **pH = 6.1 + log(24/1.2) = 6.1 + log 20 = 7.4**. Be able to do this arithmetic aloud.",
        "**Buffer capacity is maximal at pH = pKa** (ratio 1:1) and useful within **pKa ± 1**; it also rises with the total concentration of the buffer.",
        "**Titration curve:** the flat region around the pKa is the buffering zone; for a polyprotic acid such as phosphoric acid there are several.",
        "**The paradox worth explaining: bicarbonate has a pKa of 6.1, far from 7.4, yet it is the most important buffer of the body — because it is an OPEN system: the lungs continuously remove CO₂ and the kidneys regenerate bicarbonate, so its components are regulated independently.** This sentence is often the whole point of the question."
      ],
      cn: "缓冲对定义、H-H 方程（会算 6.1+log20=7.4）、缓冲容量在 pKa 处最大；重点解释碳酸氢盐 pKa=6.1 却最重要的原因——开放系统，肺调 CO₂、肾调 HCO₃⁻。" },
    { h: "5 · The four buffer systems", hcn: "四大缓冲系统",
      points: [
        "**1. Bicarbonate/carbonic acid (CO₂) — the main EXTRACELLULAR buffer, ~75 % of the buffering capacity of blood plasma.** Open system, regulated by lungs (minutes) and kidney (hours–days); its concentration (22–26 mmol/L) is what we measure as the metabolic component.",
        "**2. Haemoglobin — the main buffer of whole blood after bicarbonate (~25–30 % of blood buffering)**, thanks to its **imidazole groups of histidine (pKa ~6.8) and its high concentration**; **deoxyhaemoglobin is a stronger base than oxyhaemoglobin, so it takes up H⁺ exactly where CO₂ is produced (the Haldane effect)** — an elegant coupling of transport and buffering.",
        "**3. Phosphate (H₂PO₄⁻/HPO₄²⁻, pKa 6.8) — quantitatively minor in plasma but important INTRACELLULARLY and, above all, in URINE**, where it is the main **titratable acid** (the kidney excretes H⁺ as H₂PO₄⁻ and as NH₄⁺).",
        "**4. Proteins — the main INTRACELLULAR buffer** (plus plasma albumin): they buffer through **histidine imidazole, and the terminal −NH₃⁺/−COO⁻ groups**; their capacity is large because their concentration is high. **Bone** is the long-term reservoir, exchanging H⁺ for Ca²⁺ and carbonate in chronic acidosis (with bone loss as the price).",
        "**Time course to quote: chemical buffers act in seconds; the respiratory response in minutes; the renal response in hours to days** (topic 25B).",
        "The **isohydric principle**: all buffer systems in the same solution are in equilibrium with the same [H⁺], so measuring one (bicarbonate/pCO₂) tells you about all of them — the reason a blood gas analysis is enough."
      ],
      cn: "四个系统按部位分：细胞外碳酸氢盐（75%）、血液中血红蛋白（25–30%，靠组氨酸咪唑，脱氧型更强）、尿中磷酸盐（可滴定酸）、细胞内蛋白质（还有骨作为长期储库）。加上『等氢原理』与三个时间尺度。" },
    { h: "6 · Clinical water and electrolyte disorders", hcn: "临床：水与电解质紊乱",
      points: [
        "**Dehydration in three forms: isotonic (blood loss, vomiting — Na⁺ and water lost together), hypertonic (pure water loss: fever, diabetes insipidus, insufficient intake in the elderly → thirst, high Na⁺ and osmolality, cellular shrinkage) and hypotonic (loss of salt replaced by water → cellular swelling).**",
        "**Hyponatraemia** (< 135 mmol/L) — the commonest electrolyte disorder; classify by **volume status and osmolality**: hypovolaemic (diuretics, vomiting, Addison), euvolaemic (**SIADH** — concentrated urine with low plasma osmolality; also hypothyroidism, drugs), hypervolaemic (heart failure, cirrhosis, nephrotic syndrome). Symptoms are cerebral (oedema); **correct slowly (< 8–10 mmol/L per 24 h) to avoid osmotic demyelination**.",
        "**Hypernatraemia** (> 145 mmol/L) — nearly always a **water deficit**: diabetes insipidus (central or nephrogenic), osmotic diuresis, insufficient intake; correct slowly to avoid cerebral oedema.",
        "**Potassium** — the intracellular ion: shifts (insulin, β₂-agonists and **alkalosis drive K⁺ into cells; acidosis and insulin deficiency drive it out**) matter as much as total balance. Hyperkalaemia → arrhythmia (peaked T waves); hypokalaemia → weakness, arrhythmia, and it perpetuates metabolic alkalosis.",
        "**ADH and aquaporins:** V2 receptor → cAMP → **aquaporin-2** inserted into the collecting duct → water reabsorption. This explains **central vs nephrogenic diabetes insipidus (response to desmopressin), SIADH, and the action of vaptans**.",
        "The examiner's practical question is usually: **'what is the difference between water balance and sodium balance?'** — answer: **sodium determines the extracellular VOLUME, water (relative to sodium) determines the OSMOLALITY and therefore the plasma sodium concentration.**"
      ],
      cn: "脱水三型；低钠按容量状态与渗透压分类（SIADH 的特点）、纠正速度限制；高钠几乎都是缺水；钾的转移因素（碱中毒/胰岛素入细胞）；ADH-AQP2 机制。最后那句『钠决定容量、水决定渗透压』是最常被追问的一句话。" }
  ],
  numbers: [
    "Total body water **60 %** (men) / 50–55 % (women); ICF **2/3**, ECF **1/3** (plasma ~1/4 of ECF)",
    "Plasma osmolality **275–295 mmol/kg**; osmolal gap normally **< 10**; oncotic pressure **~25 mmHg**",
    "Na⁺ **135–145**, K⁺ **3.5–5.1**, Cl⁻ **98–107**, HCO₃⁻ **22–26 mmol/L**",
    "Bicarbonate buffer: **pH = 6.1 + log(24/1.2) = 7.4**; ratio HCO₃⁻:CO₂ = **20:1**",
    "Daily water turnover **~2500 mL**; obligatory urine volume **~500 mL**; 0.9 % NaCl = **154 mmol/L**"
  ],
  clinic: [
    "**SIADH** — euvolaemic hyponatraemia with inappropriately concentrated urine; treat with fluid restriction, vaptans",
    "**Osmotic demyelination syndrome** from over-rapid correction of chronic hyponatraemia",
    "**Osmolal gap** — the fastest clue to methanol or ethylene glycol poisoning",
    "**Diabetes insipidus** — central (responds to desmopressin) vs nephrogenic (lithium, hypercalcaemia)",
    "**Oedema** — always work through the four Starling mechanisms before treating"
  ],
  traps: [
    "**Osmolality ≠ tonicity** — urea and ethanol raise osmolality but move no water",
    "Oncotic pressure is small in absolute terms but decisive **across the capillary**, because proteins cannot cross",
    "Bicarbonate works despite an unfavourable pKa because it is an **open system**",
    "Hyponatraemia is usually a **water problem**, not a salt problem",
    "Haemoglobin's buffering power comes from **histidine imidazole**, and it changes with oxygenation (Haldane)"
  ],
  terms: [
    ["intracellular / extracellular fluid", "细胞内液/细胞外液"], ["colloid osmotic pressure", "胶体渗透压"],
    ["Starling forces", "Starling 力"], ["osmolarity / osmolality", "渗透浓度/渗透量"], ["tonicity", "张力"],
    ["osmolal gap", "渗透间隙"], ["Henderson–Hasselbalch equation", "Henderson–Hasselbalch 方程"],
    ["buffer capacity", "缓冲容量"], ["titratable acid", "可滴定酸"], ["aquaporin", "水通道蛋白"],
    ["SIADH", "抗利尿激素分泌不当综合征"]
  ]
}
});
