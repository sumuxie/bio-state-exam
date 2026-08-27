window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 25,
a: {
  titleEN: "Cell compartments. Subcellular compartmentalisation of metabolism, organelles as sites of specific pathways. Structure and function of biological membranes.",
  titleCN: "细胞区室 · 代谢的亚细胞区隔化与各细胞器的专属途径 · 生物膜的结构与功能",
  opener: "Compartmentalisation is what makes a eukaryotic cell possible: **membranes create separate chemical environments**, so that opposing pathways (synthesis and degradation) can run at the same time, gradients can be maintained, and dangerous chemistry (acid hydrolases, H₂O₂, reactive oxygen) can be kept behind a wall.",
  openerCN: "区隔化是真核细胞存在的前提：膜制造出彼此分离的化学环境，使相反的途径（合成与分解）能同时进行、梯度得以维持、危险的化学反应（酸性水解酶、H₂O₂、活性氧）被关在墙内。",
  spine: [
    "膜的化学组成（脂、蛋白、糖）",
    "流动镶嵌模型与膜的不对称性、脂筏",
    "膜的转运：被动、易化、主动（一级/二级）、胞吞胞吐",
    "各细胞器与其专属代谢途径（表格式）",
    "线粒体：唯一的双系统与半自主性",
    "跨膜穿梭与载体（因为膜不通透而必需）",
    "临床：膜相关疾病与药物"
  ],
  blocks: [
    { h: "1 · Composition of biological membranes", hcn: "生物膜的组成",
      points: [
        "**Roughly 40–50 % lipid, 40–50 % protein (by mass; the ratio varies from 25 % protein in myelin to 75 % in the inner mitochondrial membrane) and up to 10 % carbohydrate — always on the OUTER face.**",
        "**Lipids: glycerophospholipids (phosphatidylcholine, ethanolamine, serine, inositol), sphingolipids (sphingomyelin, glycolipids), and CHOLESTEROL** — all **amphipathic**, and the two-tailed ones spontaneously form a **bilayer** because of the hydrophobic effect.",
        "**Cholesterol is the fluidity buffer: above the transition temperature it restricts the movement of the acyl chains (less fluid), below it prevents crystalline packing (more fluid).** Fluidity is also increased by **unsaturated (cis) fatty acids and short chains** and decreased by saturated ones.",
        "**Proteins: INTEGRAL (transmembrane, usually α-helical, removable only with detergents) and PERIPHERAL (electrostatically bound, removable with salt or pH change), plus lipid-anchored proteins (GPI on the outside, myristoyl/palmitoyl/prenyl on the inside).** Functions: transport, receptors, enzymes, adhesion, cytoskeletal anchoring, identity markers.",
        "**Carbohydrate: the GLYCOCALYX of glycoproteins and glycolipids on the outer surface** — recognition, blood groups, protection, adhesion; **membrane asymmetry is absolute** — phosphatidylserine and ethanolamine inside, choline lipids and glycolipids outside, maintained by **flippases/floppases and scramblases**; the exposure of **phosphatidylserine** signals apoptosis and creates the procoagulant platelet surface."
      ],
      cn: "组成三部分（脂≈蛋白，糖只在外侧）；胆固醇是流动性缓冲剂（双向作用）；蛋白分内在/外周/脂锚定；不对称性由翻转酶维持，磷脂酰丝氨酸外翻=凋亡/促凝信号。" },
    { h: "2 · The fluid-mosaic model and membrane properties", hcn: "流动镶嵌模型与膜的性质",
      points: [
        "**Singer and Nicolson (1972): a two-dimensional fluid of lipids in which proteins float** — refined today by **lipid rafts (cholesterol- and sphingolipid-rich microdomains that concentrate signalling proteins and GPI anchors)** and by the recognition that many proteins are anchored to the cytoskeleton.",
        "**Movements: lateral diffusion and rotation are fast; TRANSVERSE 'flip-flop' is extremely slow and needs enzymes** — this is what preserves asymmetry.",
        "**Permeability: freely permeable to gases (O₂, CO₂, N₂), small uncharged molecules (urea, ethanol, glycerol) and lipophilic substances; almost impermeable to IONS, sugars, amino acids and anything charged or large** — hence transporters and channels exist, and hence drugs must be lipophilic to enter cells passively.",
        "**Functions of a membrane, six to name: (1) barrier and compartmentalisation; (2) selective transport; (3) energy transduction (the proton gradient); (4) signal reception and transduction (receptors); (5) cell recognition, adhesion and junctions; (6) a platform for enzymes and for the electrical excitability of nerve and muscle.**",
        "**Specialised membranes make the point: the inner mitochondrial membrane is protein-rich and cardiolipin-containing, with cristae to enlarge its area; myelin is lipid-rich for insulation; the erythrocyte membrane is a model of the cytoskeletal scaffold (spectrin/ankyrin — defects cause hereditary spherocytosis).**"
      ],
      cn: "流动镶嵌模型＋脂筏；侧向扩散快、翻转极慢（维持不对称）；通透性规律（气体与脂溶性通过、离子与糖不通过）；膜的六大功能；三种特化膜（线粒体内膜、髓鞘、红细胞膜骨架）。" },
    { h: "3 · Transport across membranes", hcn: "跨膜转运",
      points: [
        "**Simple diffusion — down the gradient, no protein, no energy** (O₂, CO₂, steroids, urea, ethanol).",
        "**Facilitated diffusion — down the gradient, via a carrier or channel, saturable and specific, no ATP: GLUT transporters, aquaporins, ion channels (voltage-, ligand- or mechanically gated).**",
        "**Primary active transport — against the gradient, ATP hydrolysed directly: Na⁺/K⁺-ATPASE (3 Na⁺ out / 2 K⁺ in — electrogenic, the basis of the membrane potential and of all secondary transport; inhibited by digoxin), Ca²⁺-ATPases (SERCA, PMCA), H⁺/K⁺-ATPase (gastric, inhibited by omeprazole), V-ATPase (lysosome, osteoclast), and ABC transporters (P-glycoprotein/MDR, CFTR, MRP2).**",
        "**Secondary active transport — driven by the sodium gradient made by the pump: SYMPORT (SGLT1/2 for glucose, amino-acid carriers, NKCC2 — the target of furosemide, NCC — thiazides) and ANTIPORT (Na⁺/H⁺ exchanger, Na⁺/Ca²⁺ exchanger, HCO₃⁻/Cl⁻ band 3).**",
        "**Vesicular transport: endocytosis (phagocytosis, pinocytosis, receptor-mediated via clathrin-coated pits — LDL, transferrin, insulin) and exocytosis (constitutive or regulated, Ca²⁺-triggered, SNARE-mediated — the target of botulinum and tetanus toxins).**",
        "**The resting membrane potential (−70 mV in nerve) follows from the K⁺ gradient and permeability (Nernst/Goldman) maintained by the pump — the direct link between transport and excitability.**"
      ],
      cn: "五类转运＋各自代表与药物靶点（地高辛、奥美拉唑、呋塞米、噻嗪、CFTR、P-糖蛋白）；继发性主动转运依赖钠泵造出的梯度；胞吞胞吐与 SNARE（肉毒毒素）。" },
    { h: "4 · Which pathway happens where", hcn: "哪条途径在哪个区室（本题的核心表）",
      points: [
        "**CYTOSOL: glycolysis, pentose phosphate pathway, fatty-acid SYNTHESIS, cholesterol synthesis (with the ER), glycogen metabolism, most of gluconeogenesis, transamination, activation of amino acids, part of the urea cycle (steps 3–5), purine and pyrimidine synthesis.**",
        "**MITOCHONDRION: pyruvate dehydrogenase, the CITRATE CYCLE, β-OXIDATION, the respiratory chain and oxidative phosphorylation (inner membrane), ketogenesis, the first two steps of the urea cycle, part of haem synthesis (first and last steps), pyruvate carboxylase, glutamate dehydrogenase, and the steroidogenic side-chain cleavage.**",
        "**ENDOPLASMIC RETICULUM: protein synthesis on the rough ER with N-glycosylation and folding; smooth ER — phospholipid and triacylglycerol synthesis, cholesterol synthesis, desaturation and elongation of fatty acids, CYTOCHROME P450 biotransformation, glucose-6-phosphatase (lumen), calcium store.**",
        "**GOLGI: O-glycosylation, completion of N-glycans, sulfation, sorting and packaging (mannose-6-phosphate tagging for lysosomes). LYSOSOME: acid hydrolases at pH 5 — degradation of proteins, glycosaminoglycans, sphingolipids, glycogen (acid maltase). PEROXISOME: β-oxidation of very-long-chain and branched fatty acids, α-oxidation, plasmalogen synthesis, H₂O₂ production and its removal by CATALASE, bile-acid side-chain shortening.**",
        "**NUCLEUS: replication, transcription, processing; NADH from glycolysis cannot enter it or the mitochondrion without shuttles. CYTOSKELETON: transport and shape. PLASMA MEMBRANE: receptors, transport, and the eicosanoid-releasing phospholipases.**",
        "**Two organising ideas to state: (1) opposing pathways are separated (fatty-acid synthesis in cytosol vs β-oxidation in mitochondria; protein synthesis in cytosol vs degradation in lysosome/proteasome); (2) because the inner mitochondrial membrane is impermeable, SHUTTLES and CARRIERS are needed — malate–aspartate and glycerol-3-phosphate shuttles for NADH, the carnitine shuttle for fatty acids, the citrate shuttle for acetyl-CoA, ANT for ATP/ADP, and the pyruvate, phosphate and glutamate carriers.**"
      ],
      cn: "这张表是本题的得分核心：胞质、线粒体、内质网、高尔基、溶酶体、过氧化物酶体各自的途径；最后两句总结（相反途径分开＋因此需要穿梭系统）一定要说。" },
    { h: "5 · The mitochondrion in detail", hcn: "线粒体（重点细胞器）",
      points: [
        "**Two membranes, two spaces: the outer membrane is permeable up to ~5 kDa (porin/VDAC); the inner membrane is impermeable even to H⁺, rich in CARDIOLIPIN, and folded into cristae; the matrix contains the cycle enzymes, mtDNA and mitochondrial ribosomes.**",
        "**Semi-autonomous: circular mtDNA of 16.6 kb, 37 genes (13 respiratory-chain subunits, 2 rRNA, 22 tRNA), maternally inherited, no histones, high mutation rate, HETEROPLASMY with a threshold effect** — the rest of the ~1500 mitochondrial proteins are nuclear-encoded and imported with signal sequences.",
        "**Functions beyond ATP: the citrate cycle, β-oxidation, ketogenesis, part of the urea cycle and haem synthesis, steroidogenesis, calcium buffering, ROS production, and the control of APOPTOSIS (cytochrome c release, mPTP).**",
        "**Dynamics: fission and fusion, MITOPHAGY, and biogenesis driven by PGC-1α (exercise, cold, fasting)** — the reason exercise increases oxidative capacity.",
        "**Clinical: mitochondrial diseases hit muscle, nerve, heart and endocrine organs (MELAS, MERRF, LHON, Kearns–Sayre, Leigh), typically with lactic acidosis and ragged red fibres; aminoglycosides cause deafness through the mitochondrial ribosome; many drug toxicities are mitochondrial (valproate, antiretrovirals, statins).**"
      ],
      cn: "两膜两腔的通透性差别；半自主（mtDNA 16.6 kb、37 基因、母系、异质性）；六大功能（含凋亡）；动态（融合分裂、线粒体自噬、PGC-1α）；线粒体病与药物毒性。" },
    { h: "6 · Other organelles and membrane-related disease", hcn: "其他细胞器与膜相关疾病",
      points: [
        "**Lysosome: ~50 acid hydrolases, pH ~5 maintained by a V-ATPase, enzymes tagged with MANNOSE-6-PHOSPHATE in the Golgi.** Failure of that tag = **I-cell disease (mucolipidosis II)** — the enzymes are secreted instead of delivered; single-enzyme defects = the **lysosomal storage diseases (sphingolipidoses, mucopolysaccharidoses, Pompe disease, Tay–Sachs, Gaucher, Fabry)**.",
        "**Peroxisome: the H₂O₂ compartment — oxidases make it, CATALASE destroys it; also the site of plasmalogen synthesis.** Failure of biogenesis = **Zellweger syndrome**; a single transporter defect = **X-linked adrenoleukodystrophy**; α-oxidation defect = **Refsum disease**.",
        "**Endoplasmic reticulum: protein folding and quality control (chaperones, ERAD, the unfolded protein response), calcium store (SERCA, IP₃ and ryanodine receptors), and the whole CYP450 system.**",
        "**Membrane-related diseases to name: hereditary spherocytosis (spectrin/ankyrin), cystic fibrosis (CFTR — an ABC transporter), hereditary spherocytosis and elliptocytosis, channelopathies (long QT, cystic fibrosis, myotonia, malignant hyperthermia — RyR1), paroxysmal nocturnal haemoglobinuria (missing GPI anchors), and glucose-transporter defects (GLUT1 deficiency with seizures, SGLT1 glucose–galactose malabsorption).**",
        "**Drugs and toxins acting on membranes: digoxin (Na⁺/K⁺-ATPase), omeprazole (H⁺/K⁺-ATPase), amphotericin B (binds ergosterol → pores), local anaesthetics (Na⁺ channels), calcium-channel blockers, diuretics (NKCC2, NCC, ENaC), and general anaesthetics.**",
        "Closing sentence: **every metabolic map in this syllabus has an address as well as a sequence — knowing WHERE a reaction happens explains its regulation, its shuttles, and the disease that follows when the compartment fails.**"
      ],
      cn: "溶酶体（M6P 标记、I-细胞病、贮积病）、过氧化物酶体（Zellweger、X-ALD、Refsum）、内质网（折叠质控与 CYP450）；膜相关疾病与作用于膜的药物清单。最后一句总结适合收尾。" }
  ],
  numbers: [
    "Membrane ≈ **40–50 % lipid, 40–50 % protein**; myelin 75 % lipid, inner mitochondrial membrane 75 % protein",
    "Bilayer thickness **~5–7 nm**; resting membrane potential **−70 mV** (nerve)",
    "Na⁺/K⁺-ATPase: **3 Na⁺ out / 2 K⁺ in per ATP**; consumes **20–30 %** of resting ATP",
    "Lysosomal pH **~5**; mtDNA **16.6 kb, 37 genes**",
    "Shuttles: malate–aspartate **2.5 ATP/NADH**, glycerol-3-phosphate **1.5 ATP/NADH**"
  ],
  clinic: [
    "**I-cell disease** — failure of mannose-6-phosphate tagging; enzymes end up in plasma",
    "**Lysosomal storage diseases** and **peroxisomal diseases** (Zellweger, X-ALD, Refsum)",
    "**Cystic fibrosis (CFTR)**, **hereditary spherocytosis (spectrin)**, **malignant hyperthermia (RyR1)**",
    "**Digoxin, omeprazole, furosemide, thiazides, amphotericin B** — membrane transporters as drug targets",
    "**Mitochondrial diseases** — maternal inheritance, lactic acidosis, ragged red fibres"
  ],
  traps: [
    "Carbohydrate is **always on the outer surface** — never facing the cytosol",
    "**Flip-flop is slow and enzyme-dependent** — that is why asymmetry persists",
    "Facilitated diffusion is **saturable and specific but needs no ATP** — do not call it active transport",
    "The inner mitochondrial membrane's impermeability is the *reason* shuttles exist — mention them together",
    "Fatty-acid synthesis and β-oxidation are separated **by compartment as well as by regulation**"
  ],
  terms: [
    ["fluid-mosaic model", "流动镶嵌模型"], ["lipid raft", "脂筏"], ["membrane asymmetry", "膜的不对称性"],
    ["integral / peripheral protein", "内在/外周蛋白"], ["facilitated diffusion", "易化扩散"],
    ["primary / secondary active transport", "一级/二级主动转运"], ["symport / antiport", "同向/反向转运"],
    ["compartmentalisation", "区隔化"], ["mannose-6-phosphate", "甘露糖-6-磷酸"], ["heteroplasmy", "异质性"]
  ]
},
b: {
  titleEN: "Acidosis and alkalosis. Basic compensatory mechanisms. The role of lungs, kidneys and liver in acid–base regulation. Astrup.",
  titleCN: "酸中毒与碱中毒 · 基本代偿机制 · 肺、肾、肝在酸碱平衡中的作用 · Astrup 血气分析",
  opener: "The body produces about **15 000 mmol of CO₂ (volatile acid) and 50–100 mmol of fixed acid every day**, yet arterial pH stays between **7.36 and 7.44** — held there by **buffers (seconds), the lungs (minutes) and the kidneys (hours to days)**.",
  openerCN: "人体每天产生约 15 000 mmol 挥发酸（CO₂）与 50–100 mmol 固定酸，动脉血 pH 却始终维持在 7.36–7.44——靠缓冲系统（秒）、肺（分钟）与肾（小时至天）三道防线。",
  spine: [
    "基本参数与 Henderson–Hasselbalch 方程",
    "酸的来源与三道防线（缓冲、呼吸、肾）",
    "肾的机制：碳酸氢盐重吸收、可滴定酸、铵排泄",
    "肝的角色（尿素合成消耗 HCO₃⁻、乳酸代谢、谷氨酰胺）",
    "四种基本紊乱与代偿规律（含代偿公式）",
    "阴离子间隙与常见病因（MUDPILES）",
    "Astrup 分析：参数、判读五步法、典型病例"
  ],
  blocks: [
    { h: "1 · The basic equation and the three lines of defence", hcn: "基本方程与三道防线",
      points: [
        "**pH = 6.1 + log([HCO₃⁻] / (0.03 × pCO₂))** — with 24 mmol/L and 40 mmHg this gives **6.1 + log 20 = 7.4**. The **ratio 20:1**, not the absolute values, sets the pH: this is why compensation works by moving the *other* component in the same direction.",
        "**The bicarbonate system is powerful because it is OPEN: the lung blows off CO₂ and the kidney regenerates HCO₃⁻**, so both the acid and the base are under physiological control.",
        "**Acid production: ~15 000–20 000 mmol/day of CO₂ ('volatile acid', excreted by the lungs) and 50–100 mmol/day of fixed acid (sulfuric acid from Met/Cys, phosphoric acid from phospholipids, organic acids), excreted only by the kidney.**",
        "**Defence line 1 — chemical buffers (seconds): bicarbonate extracellularly, haemoglobin in blood, proteins and phosphate intracellularly, and carbonate of BONE for chronic loads** (topics 19B, 16B).",
        "**Line 2 — the lungs (minutes): chemoreceptors → ventilation changes → pCO₂. Line 3 — the kidneys (hours–days): reabsorption of filtered bicarbonate, excretion of titratable acid and of ammonium, and generation of NEW bicarbonate.** The kidney is slow but it is the only route for fixed acid — that is the sentence to remember."
      ],
      cn: "H-H 方程与 20:1 比值；开放系统的意义；每天两类酸的量；三道防线的时间尺度（秒/分/小时–天），肾是固定酸唯一出路。" },
    { h: "2 · The kidney's mechanisms", hcn: "肾的三个机制",
      points: [
        "**(1) Reabsorption of filtered bicarbonate (mainly proximal tubule, ~85 %): H⁺ is secreted by the Na⁺/H⁺ exchanger, combines with filtered HCO₃⁻ → H₂CO₃ → (luminal carbonic anhydrase IV) → CO₂ + H₂O, which diffuse in, are re-formed into HCO₃⁻ by intracellular carbonic anhydrase II and leave through the basolateral Na⁺/HCO₃⁻ cotransporter.** This only *preserves* bicarbonate, it does not make new one. **Acetazolamide blocks it → mild metabolic acidosis.**",
        "**(2) Titratable acid: secreted H⁺ (α-intercalated cells, H⁺-ATPase and H⁺/K⁺-ATPase) binds urinary buffers, chiefly PHOSPHATE (HPO₄²⁻ + H⁺ → H₂PO₄⁻)** — about **10–30 mmol/day**; for each H⁺ excreted, a **new bicarbonate** enters the blood.",
        "**(3) Ammonium excretion — the adaptable one: glutamine → (glutaminase, glutamate dehydrogenase) → 2 NH₄⁺ + α-ketoglutarate → (metabolised to) 2 HCO₃⁻; NH₄⁺ is secreted and trapped in the urine.** Baseline **30–50 mmol/day, rising several-fold in chronic acidosis** — the main long-term mechanism.",
        "**Minimum urine pH is ~4.5** — the kidney cannot excrete free H⁺ in any meaningful amount without buffers; that is why titratable acid and ammonium exist.",
        "**Renal tubular acidoses illustrate the mechanisms: type 1 (distal) — cannot secrete H⁺, urine pH stays > 5.5, hypokalaemia, stones; type 2 (proximal) — cannot reabsorb bicarbonate, bicarbonate wasting until plasma falls, hypokalaemia; type 4 — hypoaldosteronism, HYPERkalaemia. All have a NORMAL anion gap (hyperchloraemic acidosis).**"
      ],
      cn: "肾三机制：重吸收碳酸氢盐（只是保住）、可滴定酸（磷酸盐、生成新 HCO3⁻）、铵排泄（可数倍上调，慢性酸中毒主力）；尿最低 pH 4.5；三型肾小管酸中毒对应三个机制。" },
    { h: "3 · The role of the liver", hcn: "肝在酸碱平衡中的角色",
      points: [
        "**Urea synthesis CONSUMES bicarbonate** (2 NH₄⁺ + 2 HCO₃⁻ → urea + CO₂ + 3 H₂O), so it is effectively an acid-producing process; **in acidosis the liver shifts nitrogen disposal from urea toward glutamine, which the kidney then uses to excrete NH₄⁺** — an elegant inter-organ regulation ('hepatorenal partnership').",
        "**Lactate metabolism: the liver (and kidney) consume lactate through gluconeogenesis, regenerating bicarbonate — which is why LIVER FAILURE or shock leads to lactic acidosis** even without extra production.",
        "**The liver also metabolises ketone bodies' precursors, handles most organic anions (citrate, acetate — hence the alkalinising effect of citrate in transfused blood or in dialysis fluids), and synthesises plasma proteins (a buffer).**",
        "So the classic answer is **three organs, three jobs: the lung removes volatile acid, the kidney removes fixed acid and regenerates bicarbonate, and the liver decides how nitrogen and organic anions are disposed of — and can produce or consume bicarbonate accordingly.**",
        "**Clinically: massive transfusion (citrate → metabolic alkalosis once metabolised), lactate-containing infusions (Ringer's lactate — alkalinising after hepatic metabolism), and liver failure (lactic acidosis, hyperammonaemia, alkalosis from hyperventilation).**"
      ],
      cn: "肝的三点：尿素合成消耗碳酸氢盐（酸中毒时改走谷氨酰胺给肾）、乳酸清除再生碳酸氢盐（肝衰→乳酸酸中毒）、处理有机阴离子（枸橼酸、乳酸盐输液）。答『三个器官三件事』最清楚。" },
    { h: "4 · The four disorders and their compensation", hcn: "四种紊乱与代偿",
      points: [
        "**METABOLIC ACIDOSIS: primary ↓HCO₃⁻ → compensation is HYPERVENTILATION (Kussmaul breathing) lowering pCO₂. Expected pCO₂ (Winter): 1.5 × HCO₃⁻ + 8 ± 2 (mmHg).** Causes: ketoacidosis, lactic acidosis, renal failure, poisoning (methanol, ethylene glycol, salicylate), diarrhoea (bicarbonate loss), renal tubular acidosis.",
        "**METABOLIC ALKALOSIS: primary ↑HCO₃⁻ → compensation is HYPOVENTILATION (limited, because hypoxia eventually prevents it). Causes: vomiting/nasogastric loss of HCl, diuretics, hyperaldosteronism, HYPOKALAEMIA, excess alkali (milk-alkali).** Maintenance requires volume depletion or chloride/potassium deficiency — hence the classification into **chloride-responsive (urine Cl⁻ < 20 mmol/L, treat with saline) and chloride-resistant** forms.",
        "**RESPIRATORY ACIDOSIS: primary ↑pCO₂ (hypoventilation — COPD, opioids, neuromuscular disease, airway obstruction) → compensation is renal bicarbonate retention: acute +1 mmol/L HCO₃⁻ per 10 mmHg rise of pCO₂, chronic +3.5–4 mmol/L.**",
        "**RESPIRATORY ALKALOSIS: primary ↓pCO₂ (hyperventilation — anxiety, pain, fever, sepsis, salicylate, hypoxia, altitude, pregnancy) → compensation is renal bicarbonate loss: acute −2, chronic −4–5 mmol/L per 10 mmHg fall.** Symptoms: **tetany with a NORMAL total calcium** (alkalosis lowers ionised calcium), paraesthesia, dizziness.",
        "**Rules of compensation: it is always in the SAME direction as the primary change, it is never complete (pH does not fully normalise, and never overshoots), and a value outside the expected range means a SECOND, mixed disorder.** Respiratory compensation begins within minutes; renal compensation takes **3–5 days** to be complete.",
        "**Potassium moves with acid–base: acidosis drives K⁺ out of cells (hyperkalaemia), alkalosis drives it in (hypokalaemia); and hypokalaemia itself maintains a metabolic alkalosis.** Say this — it is the most clinically useful cross-link."
      ],
      cn: "四种紊乱＋各自代偿方向与公式（Winter 公式、每 10 mmHg 的 HCO3 变化）；三条代偿规律（同向、不完全、不过度）；钾与酸碱的双向关系。" },
    { h: "5 · The anion gap and the causes", hcn: "阴离子间隙与病因",
      points: [
        "**Anion gap = Na⁺ − (Cl⁻ + HCO₃⁻), normally 8–16 mmol/L** (or 10–20 if potassium is included); it represents the **unmeasured anions, mainly albumin** — so **correct it for hypoalbuminaemia (add ~2.5 mmol/L per 10 g/L fall)**.",
        "**HIGH anion-gap metabolic acidosis = an acid has been ADDED: methanol, uraemia, diabetic (and other) ketoacidosis, paraldehyde, isoniazid/iron, lactate, ethylene glycol, salicylate — the classic MUDPILES.**",
        "**NORMAL anion-gap (hyperchloraemic) acidosis = bicarbonate has been LOST or chloride gained: diarrhoea, renal tubular acidosis, carbonic-anhydrase inhibitors, ureteral diversion, large volumes of 0.9 % saline.** The **urinary anion gap** distinguishes renal (positive) from gastrointestinal (negative) causes.",
        "**The DELTA RATIO (Δanion gap/ΔHCO₃⁻) detects a mixed disorder:** ~1–2 is a pure high-gap acidosis, < 1 suggests a coexisting normal-gap acidosis, > 2 a coexisting metabolic alkalosis.",
        "**The osmolal gap complements it** (topic 22B): a high anion gap **and** a high osmolal gap points strongly to **methanol or ethylene glycol** — an answer that makes an examiner smile.",
        "**Lactate is the commonest cause in hospital: type A (hypoxia — shock, sepsis, cardiac arrest) and type B (metformin, ethanol, thiamine deficiency, liver failure, malignancy).**"
      ],
      cn: "阴离子间隙的定义、正常值、必须按白蛋白校正；高间隙（MUDPILES）与正常间隙（腹泻、RTA、大量生理盐水）；delta ratio 查混合型；阴离子间隙＋渗透间隙同时升高=甲醇/乙二醇。" },
    { h: "6 · Astrup — reading a blood gas", hcn: "Astrup 血气分析的判读",
      points: [
        "**What the analyser measures directly: pH, pCO₂ and pO₂ (electrodes — glass electrode, Severinghaus CO₂ electrode, Clark O₂ electrode); everything else — bicarbonate, base excess, saturation — is CALCULATED** (the historic Astrup/Siggaard-Andersen equilibration method gives the technique its name in Czech practice).",
        "**Reference values (arterial): pH 7.36–7.44; pCO₂ 4.7–6.0 kPa (35–45 mmHg); pO₂ 10.6–13.3 kPa (80–100 mmHg); HCO₃⁻ (actual) 22–26 mmol/L; standard bicarbonate 22–26; BASE EXCESS −2.5 to +2.5 mmol/L; SaO₂ 95–98 %; lactate 0.5–2.2 mmol/L.**",
        "**Base excess is the metabolic component 'purified' of respiratory influence** — the amount of acid or base needed to titrate blood back to pH 7.4 at pCO₂ 5.3 kPa and 37 °C. **Negative BE = metabolic acidosis (base deficit), positive BE = metabolic alkalosis.**",
        "**Five-step reading: (1) look at the pH — acidaemia or alkalaemia? (2) look at pCO₂ and HCO₃⁻/BE — which one explains the pH? that is the primary disorder; (3) is the compensation of the expected size? (4) calculate the ANION GAP (and correct for albumin); (5) if there is a high gap, apply the delta ratio and check the clinical context (glucose, ketones, lactate, urea, osmolal gap).**",
        "**Preanalytics matter enormously: arterial sample in a heparinised syringe, no air bubbles (they lower pCO₂ and raise pO₂), analyse within 15 minutes or keep on ice (cells go on producing lactate and consuming glucose), no prolonged tourniquet or clenching.** Venous blood can be used for pH and pCO₂ estimation (about 0.03–0.05 lower pH, 0.5–1 kPa higher pCO₂) but **not for oxygenation**.",
        "**Two worked patterns to have ready: DKA — pH 7.1, HCO₃⁻ 8, pCO₂ 2.7 kPa, BE −20, anion gap 28, ketones positive = high-gap metabolic acidosis with respiratory compensation; VOMITING — pH 7.52, HCO₃⁻ 34, pCO₂ 6.1 kPa, BE +10, hypokalaemia, urine Cl⁻ low = chloride-responsive metabolic alkalosis.**"
      ],
      cn: "Astrup 只直接测 pH/pCO₂/pO₂，其余是计算值；正常值表；碱剩余的定义与意义；五步判读法；采血注意事项（无气泡、15 分钟内、冰上）；两个典型病例数值。" }
  ],
  numbers: [
    "pH **7.36–7.44**; pCO₂ **4.7–6.0 kPa (35–45 mmHg)**; HCO₃⁻ **22–26 mmol/L**; BE **−2.5 to +2.5**; anion gap **8–16 mmol/L**",
    "Volatile acid **15 000–20 000 mmol CO₂/day**; fixed acid **50–100 mmol/day**",
    "Winter's formula: expected pCO₂ = **1.5 × HCO₃⁻ + 8 ± 2 (mmHg)**",
    "Respiratory compensation: acute ±1–2, chronic ±3.5–5 mmol/L HCO₃⁻ per 10 mmHg pCO₂",
    "Minimum urine pH **~4.5**; ammonium excretion **30–50 mmol/day, several-fold higher in chronic acidosis**"
  ],
  clinic: [
    "**Diabetic ketoacidosis** — high anion gap, Kussmaul breathing, total-body potassium depletion",
    "**Vomiting/pyloric stenosis** — hypochloraemic, hypokalaemic metabolic alkalosis (paradoxical aciduria)",
    "**COPD** — chronic respiratory acidosis with renal compensation; beware oxygen-induced CO₂ retention",
    "**Salicylate poisoning** — respiratory alkalosis plus high-gap metabolic acidosis (a mixed disorder)",
    "**Renal tubular acidoses 1, 2 and 4** — normal anion gap; type 4 with hyperkalaemia"
  ],
  traps: [
    "**Compensation never fully corrects the pH and never overcorrects** — if it seems to, there is a second disorder",
    "The kidney can only excrete H⁺ **bound to buffers** (phosphate, ammonia) — free H⁺ excretion is negligible",
    "**Urea synthesis consumes bicarbonate** — the liver is part of acid–base regulation, not a bystander",
    "Always **correct the anion gap for albumin**; a 'normal' gap in hypoalbuminaemia may hide an acidosis",
    "Bicarbonate and base excess are **calculated**, not measured — an air bubble or a delay invalidates them"
  ],
  terms: [
    ["acidaemia / acidosis", "酸血症/酸中毒"], ["base excess", "碱剩余"], ["standard bicarbonate", "标准碳酸氢盐"],
    ["anion gap", "阴离子间隙"], ["titratable acid", "可滴定酸"], ["ammoniagenesis", "产氨作用"],
    ["Winter's formula", "Winter 公式"], ["Kussmaul breathing", "Kussmaul 呼吸"],
    ["renal tubular acidosis", "肾小管酸中毒"], ["chloride-responsive alkalosis", "氯反应性碱中毒"]
  ]
}
});
