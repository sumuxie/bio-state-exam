window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 4,
a: {
  titleEN: "Gluconeogenesis — importance for metabolism, mechanisms of regulation. Metabolism of glycogen.",
  titleCN: "糖异生 · 代谢意义与调节机制 · 糖原代谢",
  opener: "Gluconeogenesis is the synthesis of glucose from **non-carbohydrate precursors — lactate, glycerol, glucogenic amino acids and propionate** — it runs mainly in the **liver** (and renal cortex), and it is **not simply reversed glycolysis**: three irreversible steps must be bypassed by **four enzymes**.",
  openerCN: "糖异生是由非糖前体（乳酸、甘油、生糖氨基酸、丙酸）合成葡萄糖，主要在肝（和肾皮质）；它不是糖酵解的简单逆转——三个不可逆步骤要由四个酶绕过。",
  spine: [
    "为什么需要糖异生：脑与红细胞的强制需求",
    "定位（肝、肾皮质；线粒体+胞质）与前体",
    "四个旁路酶：PC、PEPCK、FBPase-1、G6Pase",
    "能量代价与与 β 氧化的偶联",
    "调节：底物、别构、激素、酶量；与糖酵解的互反调节",
    "糖原合成与分解（含分支酶与去分支酶）",
    "糖原代谢的级联调节与糖原贮积病"
  ],
  blocks: [
    { h: "1 · Why and where", hcn: "意义与定位",
      points: [
        "The **brain needs ~120 g glucose/day**, the **erythrocyte, renal medulla, lens, cornea and white muscle fibres are obligatorily glycolytic**; liver glycogen (~100 g) is exhausted after **~18–24 h of fasting**, so from then on gluconeogenesis keeps blood glucose up.",
        "Site: **liver ~90 %, renal cortex ~10 %** (rising to 40 % in prolonged starvation and acidosis, because the kidney also uses glutamine); a small contribution in the intestinal epithelium. **Muscle cannot do it** — no glucose-6-phosphatase, no PEPCK in significant amount.",
        "Precursors: **lactate** (Cori cycle), **glycerol** from lipolysis (→ glycerol-3-P → DHAP), **glucogenic amino acids** — above all **alanine** (glucose–alanine cycle) and **glutamine**, and **propionyl-CoA** from odd-chain fatty acids and some amino acids (→ methylmalonyl-CoA → succinyl-CoA).",
        "**Fatty acids with an even number of carbons can NEVER make glucose** — acetyl-CoA cannot be converted back to pyruvate (PDH is irreversible) and its two carbons are lost as CO₂ in the cycle. Only the **glycerol** part of a triacylglycerol is glucogenic.",
        "Compartmentation: the first step is **mitochondrial**, the rest **cytosolic**, and the final dephosphorylation happens in the **lumen of the endoplasmic reticulum**."
      ],
      cn: "先讲需求（脑 120 g/天、红细胞无线粒体），再讲部位（肝 90%、肾皮质），再讲四类前体，并强调偶数碳脂肪酸不能生糖——这是必考的判断题。" },
    { h: "2 · The four bypass enzymes", hcn: "四个绕过酶（必背）",
      points: [
        "**(1) Pyruvate carboxylase** (mitochondrion, **biotin**, ATP): pyruvate + CO₂ + ATP → **oxaloacetate**. Its obligatory allosteric activator is **acetyl-CoA** — the signal that fatty-acid oxidation is running, i.e. that the body is fasting.",
        "**(2) PEP carboxykinase (PEPCK)**: oxaloacetate + **GTP** → **phosphoenolpyruvate** + CO₂ + GDP. Oxaloacetate cannot cross the inner membrane, so it leaves as **malate** (using mitochondrial NADH, which also supplies the cytosolic NADH needed later) or as **aspartate**.",
        "**(3) Fructose-1,6-bisphosphatase** (cytosol) — fructose-1,6-bisP → fructose-6-P + Pi. **This is the key regulatory enzyme**: inhibited by **AMP and fructose-2,6-bisphosphate**, activated by citrate.",
        "**(4) Glucose-6-phosphatase** — only in **liver, kidney and intestine**, located in the **ER membrane** with the transporters T1–T3; glucose-6-P → **free glucose** which can leave the cell. Its absence in muscle is the reason muscle glycogen cannot serve the blood.",
        "**Cost: 6 high-energy phosphates per glucose** (2 ATP for pyruvate carboxylase, 2 GTP for PEPCK, 2 ATP for phosphoglycerate kinase) plus 2 NADH — versus 2 ATP gained in glycolysis. The energy comes from **β-oxidation of fatty acids**, which is why gluconeogenesis and ketogenesis always appear together."
      ],
      cn: "四个酶的名称、辅因子、部位要一字不差；再加一句『代价 6 个高能磷酸键，由脂肪酸 β 氧化供能』。" },
    { h: "3 · Regulation of gluconeogenesis", hcn: "糖异生的调节",
      points: [
        "**Substrate supply** is the first level: more alanine, lactate and glycerol reaching the liver means more glucose (this is the actual mechanism in fasting and after exercise).",
        "**Allosteric:** **acetyl-CoA activates pyruvate carboxylase** (and simultaneously inhibits PDH — one signal, two effects in the same direction); **AMP inhibits FBPase-1** and activates PFK-1; **fructose-2,6-bisphosphate is the master switch** — high (insulin) = glycolysis, low (glucagon) = gluconeogenesis.",
        "**Hormonal / covalent:** **glucagon → cAMP → PKA** → phosphorylates PFK-2/FBPase-2 (F-2,6-BP falls) and **inactivates pyruvate kinase**, so PEP is not consumed. **Insulin does the opposite** and is the dominant inhibitory signal.",
        "**Transcriptional (hours):** glucagon (via **CREB, PGC-1α**) and **cortisol (via the glucocorticoid receptor)** induce **PEPCK, glucose-6-phosphatase, fructose-1,6-bisphosphatase**; insulin represses them through **Akt → phosphorylation of FoxO1**. Metformin acts here, through **AMPK**.",
        "**Reciprocal regulation** — glycolysis and gluconeogenesis are never both fully on, otherwise a **futile cycle** would burn ATP as heat (which does happen deliberately in bumblebee flight muscle and, partly, in thermogenesis)."
      ],
      cn: "调节四层：底物供应→别构（乙酰 CoA、AMP、F-2,6-BP）→激素磷酸化→基因表达。最后点出互反调节与无效循环。" },
    { h: "4 · Glycogen — structure and synthesis", hcn: "糖原的结构与合成",
      points: [
        "Structure: a branched polymer of glucose, **α-1,4 in the chains and α-1,6 at the branch points every 8–12 residues**; one reducing end anchored to the protein **glycogenin**. Branching creates many non-reducing ends → fast release, and keeps osmolality low. Stores: **liver ~100 g (up to 10 % of its mass, for the blood glucose), muscle ~400 g (1–2 % of mass, for itself)**.",
        "**Synthesis:** glucose → G6P (hexokinase/glucokinase) → **glucose-1-P (phosphoglucomutase)** → **UDP-glucose (UDP-glucose pyrophosphorylase, uses UTP; the pyrophosphate is hydrolysed, which drives the reaction)**.",
        "**Glycogen synthase** transfers the glucosyl unit to the **non-reducing end, making an α-1,4 bond** — it is the **rate-limiting enzyme** and it needs a primer (glycogenin autoglucosylates itself for the first ~8 residues).",
        "**Branching enzyme (amylo-4,6-transglucosylase)** moves a block of ~7 residues to a C6-OH, creating the **α-1,6 branch**.",
        "**Cost: 2 ATP equivalents per glucose stored** (1 ATP for phosphorylation + 1 UTP); so glycogen storage is cheap and immediately available, unlike fat."
      ],
      cn: "结构（α-1,4 主链、α-1,6 分支、糖原蛋白引物）、合成三步（UDP-葡萄糖→糖原合酶→分支酶）、肝 100 g / 肌 400 g 的分工。" },
    { h: "5 · Glycogen degradation", hcn: "糖原的分解",
      points: [
        "**Glycogen phosphorylase** (coenzyme **pyridoxal phosphate**) performs **phosphorolysis, not hydrolysis**: it removes glucose units from the non-reducing end as **glucose-1-phosphate**, and stops **4 residues before a branch** (a limit dextrin).",
        "**Debranching enzyme is bifunctional**: a **4:4 transferase** moves three residues to the neighbouring chain, and an **α-1,6-glucosidase hydrolyses the last branch residue as FREE glucose**. Therefore ~**90 % of the product is glucose-1-P and ~10 % free glucose**.",
        "Glucose-1-P → glucose-6-P (phosphoglucomutase). **In the liver** glucose-6-phosphatase releases free glucose into blood; **in muscle** G6P enters glycolysis directly — and this is the energetic advantage, **no ATP is spent on the first phosphorylation (3 ATP net anaerobically instead of 2)**.",
        "A **lysosomal** route also exists: **acid α-1,4-glucosidase (acid maltase)**; its deficiency is **Pompe disease (GSD II)**, which shows that ~1–3 % of glycogen is degraded in lysosomes.",
        "In fasting, hepatic glycogenolysis covers the first hours and is **replaced smoothly by gluconeogenesis**, which is already dominant after ~12–18 h and the only source after ~24 h."
      ],
      cn: "磷酸解（不是水解）→ 产物是 G1P；去分支酶双功能→ 约 10% 是游离葡萄糖；肌肉分解糖原比用血糖多赚 1 个 ATP。" },
    { h: "6 · Cascade regulation and glycogen storage diseases", hcn: "级联调节与糖原贮积病",
      points: [
        "**Hormonal cascade:** glucagon (liver) or adrenaline (liver + muscle, β receptor) → **cAMP → PKA → phosphorylase kinase (phosphorylated = active) → glycogen phosphorylase b → a**. The same PKA **phosphorylates glycogen synthase and inactivates it** — one signal switches degradation on and synthesis off. Amplification is ~10⁶-fold.",
        "**Insulin** works through **protein phosphatase-1 (PP1)** (and by inhibiting **GSK-3**), which dephosphorylates everything: phosphorylase off, **synthase on**.",
        "**Allosteric, hormone-independent regulation:** in **muscle, AMP activates phosphorylase b** and **Ca²⁺–calmodulin activates phosphorylase kinase during contraction** (contraction alone mobilises glycogen); **ATP and glucose-6-P inhibit**. In the **liver, free glucose is the allosteric inhibitor** of phosphorylase a — the liver serves the blood, not itself.",
        "**Glycogen storage diseases to name:** **I von Gierke — glucose-6-phosphatase** (fasting hypoglycaemia, lactic acidosis, hyperuricaemia, hyperlipidaemia, hepatomegaly); **II Pompe — lysosomal acid maltase** (cardiomyopathy, the only lysosomal one); **III Cori — debranching enzyme** (limit dextrins, milder); **IV Andersen — branching enzyme** (cirrhosis); **V McArdle — muscle phosphorylase** (exercise intolerance, no lactate rise, second wind, myoglobinuria); **VI Hers — liver phosphorylase** (mild).",
        "Bedside logic to quote: **hypoglycaemia + hepatomegaly = liver type (I, III, VI); exercise intolerance with normal glycaemia = muscle type (V, VII)**."
      ],
      cn: "级联：胰高血糖素/肾上腺素→cAMP→PKA→磷酸化酶激酶→磷酸化酶；同一信号关掉糖原合酶。肌肉靠 AMP 与 Ca²⁺，肝靠游离葡萄糖。糖原贮积病 I/II/III/V 必须能对上酶。" }
  ],
  numbers: [
    "Cost of gluconeogenesis **6 ~P (4 ATP + 2 GTP) + 2 NADH per glucose**",
    "Liver glycogen **~100 g**, muscle **~400 g**; liver store exhausted in **18–24 h**",
    "Brain **~120 g glucose/day**; liver covers ~90 % of gluconeogenesis, kidney ~10 % (up to 40 % in long starvation)",
    "Branch points every **8–12 glucose residues**; debranching yields ~**10 % free glucose**",
    "Storing glucose as glycogen costs **2 ATP equivalents per residue**"
  ],
  clinic: [
    "**Von Gierke disease (GSD I)** — the classic combination of fasting hypoglycaemia, **lactic acidosis, hyperuricaemia and hypertriacylglycerolaemia**",
    "**Alcohol causes hypoglycaemia**: ethanol oxidation raises NADH/NAD⁺, pyruvate → lactate and oxaloacetate → malate, so gluconeogenesis stops",
    "**Metformin** inhibits hepatic gluconeogenesis (AMPK, complex I) — the first-line drug in type 2 diabetes",
    "**Cortisol excess (Cushing, steroid therapy)** induces PEPCK → steroid diabetes; **biotin deficiency** impairs pyruvate carboxylase",
    "**McArdle disease** — the ischaemic forearm exercise test shows **no rise of lactate but a rise of ammonia**"
  ],
  traps: [
    "Gluconeogenesis is **not** the reverse of glycolysis — say 'three irreversible steps bypassed by four enzymes'",
    "**Even-chain fatty acids cannot make glucose**; glycerol and propionate can",
    "**Muscle has no glucose-6-phosphatase** — muscle glycogen never leaves the muscle as glucose",
    "Glycogen phosphorylase does **phosphorolysis** (product glucose-1-**phosphate**), not hydrolysis",
    "Insulin does not act on the same enzymes by 'switching cAMP off' only — the key mechanism is **activation of protein phosphatase-1** and inhibition of GSK-3"
  ],
  terms: [
    ["gluconeogenesis", "糖异生"], ["pyruvate carboxylase", "丙酮酸羧化酶"], ["PEPCK", "磷酸烯醇式丙酮酸羧激酶"],
    ["futile cycle", "无效循环"], ["glycogenin", "糖原蛋白"], ["phosphorolysis", "磷酸解"],
    ["debranching enzyme", "脱支酶"], ["limit dextrin", "极限糊精"], ["glycogen storage disease", "糖原贮积病"],
    ["glucose–alanine cycle", "葡萄糖-丙氨酸循环"]
  ]
},
b: {
  titleEN: "Biochemistry of free radicals, oxidative stress and ageing. Formation and metabolism of reactive oxygen and nitrogen species. Antioxidant defence.",
  titleCN: "自由基生物化学 · 氧化应激与衰老 · 活性氧与活性氮的生成与代谢 · 机体的抗氧化防御",
  opener: "A free radical is any species with **one or more unpaired electrons**; oxidative stress is the **imbalance between the production of reactive species and the antioxidant defence**, in favour of the oxidants, with damage to lipids, proteins and DNA as the result.",
  openerCN: "自由基是含有未配对电子的物质；氧化应激是活性物质生成与抗氧化防御之间失衡（偏向氧化），后果是脂质、蛋白与 DNA 的损伤。",
  spine: [
    "定义与主要 ROS/RNS 清单",
    "内源与外源来源（线粒体漏电、NADPH 氧化酶、Fenton 反应、CYP450、辐射）",
    "一氧化氮与活性氮（NOS、过氧亚硝酸盐）",
    "损伤的三个靶点：脂质过氧化、蛋白氧化、DNA 氧化",
    "酶性抗氧化防御：SOD、过氧化氢酶、GPx/GSH 系统",
    "非酶性抗氧化剂与再生网络（C、E、尿酸、谷胱甘肽、类胡萝卜素）",
    "衰老学说与临床关联（缺血再灌注、动脉粥样硬化、神经变性）"
  ],
  blocks: [
    { h: "1 · What the species are", hcn: "活性物质清单",
      points: [
        "**Radicals:** superoxide **O₂•⁻**, hydroxyl radical **•OH** (the most reactive, reacts at the site of formation), peroxyl **ROO•**, alkoxyl RO•, nitric oxide **NO•**, nitrogen dioxide NO₂•.",
        "**Non-radical reactive species (equally important):** hydrogen peroxide **H₂O₂**, hypochlorous acid **HOCl**, singlet oxygen **¹O₂**, ozone, **peroxynitrite ONOO⁻**, lipid hydroperoxides.",
        "Oxygen itself is a **biradical** in the triplet ground state, which is why it reacts with organic molecules slowly and needs enzymes or metals — its stepwise **univalent reduction** gives O₂•⁻ → H₂O₂ → •OH → H₂O.",
        "**H₂O₂ is not very reactive itself, but it crosses membranes freely and is the precursor of •OH** — that is why it also works as a **signalling molecule** (redox signalling, inactivation of phosphatases, activation of NF-κB).",
        "Order of reactivity/half-life: •OH (10⁻⁹ s, nanometre range) ≫ ONOO⁻ > O₂•⁻ > H₂O₂ > NO• (seconds, diffuses across cells)."
      ],
      cn: "先分『自由基』与『非自由基活性物质』两栏，再说氧的分步单电子还原链 O₂→O₂•⁻→H₂O₂→•OH→H₂O。羟自由基最毒但寿命最短。" },
    { h: "2 · Where they come from", hcn: "来源：内源与外源",
      points: [
        "**Mitochondrial electron leak — the main endogenous source**: complexes I and III leak ~1–2 % of electrons to O₂ → O₂•⁻ (the reason ageing theories start in the mitochondrion).",
        "**NADPH oxidase (NOX)** of phagocytes — the deliberate **respiratory burst** (topic 11B): O₂•⁻ → H₂O₂ → **myeloperoxidase → HOCl** for killing bacteria; its defect = **chronic granulomatous disease**.",
        "**Fenton reaction: Fe²⁺ + H₂O₂ → Fe³⁺ + •OH + OH⁻**, and the **Haber–Weiss reaction** in which O₂•⁻ recycles Fe³⁺ back to Fe²⁺ — this is why **free iron and copper are dangerous** and why transferrin, ferritin and caeruloplasmin count as antioxidants.",
        "Other endogenous sources: **xanthine oxidase** (especially in ischaemia–reperfusion), **cytochrome P450** (biotransformation, topic 23B), peroxisomal oxidases (H₂O₂), monoamine oxidase, autoxidation of catecholamines and haemoglobin (→ methaemoglobin).",
        "**Exogenous:** ionising and UV radiation (radiolysis of water → •OH), **cigarette smoke**, air pollution, ozone, **hyperoxia**, xenobiotics with redox cycling (**paraquat, doxorubicin, bleomycin**), **ethanol** (CYP2E1), heavy metals, ischaemia–reperfusion."
      ],
      cn: "来源要分内源（线粒体漏电、NADPH 氧化酶、Fenton、CYP450、黄嘌呤氧化酶）与外源（辐射、烟、药物、乙醇）。Fenton 反应式必须会写。" },
    { h: "3 · Nitric oxide and reactive nitrogen species", hcn: "一氧化氮与活性氮",
      points: [
        "**NO• is made from L-arginine + O₂ + NADPH by NO synthase (cofactors FAD, FMN, haem, BH₄) → NO• + citrulline.** Isoforms: **eNOS** (endothelium, Ca²⁺-dependent, constitutive), **nNOS** (neurons), **iNOS** (macrophages, inducible by cytokines, Ca²⁺-independent, makes 1000× more).",
        "Physiological action: NO diffuses into smooth muscle → **soluble guanylate cyclase → cGMP → protein kinase G → vasodilatation** (this is how nitrates and sildenafil work, topic 12B); it also inhibits platelet aggregation and leukocyte adhesion.",
        "**Pathological branch: NO• + O₂•⁻ → peroxynitrite ONOO⁻**, an extremely strong oxidant that **nitrates tyrosine residues (3-nitrotyrosine, the marker of nitrosative stress)**, oxidises −SH groups, damages mitochondria and uncouples eNOS.",
        "**eNOS uncoupling**: when **BH₄ (tetrahydrobiopterin)** or arginine is short, eNOS produces **O₂•⁻ instead of NO** — a key mechanism of endothelial dysfunction in diabetes, hypertension and atherosclerosis.",
        "In sepsis, **iNOS** produces massive NO → refractory vasodilatation and hypotension; in the immune system NO and ONOO⁻ are used as **cytotoxic weapons** against microbes."
      ],
      cn: "NOS 三种同工酶（e/n/i）、NO→cGMP→血管舒张、NO＋O₂•⁻→过氧亚硝酸盐（3-硝基酪氨酸标志物）、以及 BH4 缺乏时 eNOS 解偶联。" },
    { h: "4 · Damage — lipids, proteins, DNA", hcn: "三大损伤靶点",
      points: [
        "**Lipid peroxidation** is a **chain reaction** with three phases (initiation, propagation, termination); the target is the **bis-allylic hydrogen of polyunsaturated fatty acids** in membranes and LDL. Products: lipid hydroperoxides → **malondialdehyde (MDA) and 4-hydroxynonenal (4-HNE)**, measured as **TBARS**; consequences: loss of membrane fluidity and integrity, **oxidised LDL → foam cells** (topic 8B). Exhaled **ethane/pentane** and **F₂-isoprostanes** are the modern markers.",
        "**Protein oxidation:** oxidation of **−SH groups (Cys) to disulfides**, of Met to sulfoxide, formation of **carbonyl groups** (the standard marker), cross-linking, fragmentation, nitration of Tyr; oxidised proteins are degraded by the **proteasome** or accumulate as **lipofuscin**, the 'age pigment'.",
        "**DNA damage:** **8-oxo-deoxyguanosine (8-OHdG)** is the classic lesion and urinary marker (mispairs with A → G:C→T:A transversion), strand breaks, apurinic sites; repaired by **base excision repair (OGG1)**. Mitochondrial DNA is hit ~10× more (close to the source, no histones, poorer repair).",
        "Cellular consequences: **calcium homeostasis fails, ATP falls, the mitochondrial permeability transition pore opens → cytochrome c release → apoptosis**, or necrosis if the damage is massive (topic 17B). **Ferroptosis** is the iron-dependent, lipid-peroxidation-driven form of cell death.",
        "**Ischaemia–reperfusion** is the textbook clinical model: during ischaemia ATP → hypoxanthine and xanthine dehydrogenase → oxidase; on reperfusion the returning O₂ is converted into a **burst of superoxide** — the reason reperfusion itself causes damage (myocardial infarction, stroke, transplantation)."
      ],
      cn: "三个靶点各记一个标志物：脂质—MDA/4-HNE/TBARS；蛋白—羰基与 3-硝基酪氨酸；DNA—8-OHdG。再加缺血再灌注这个经典模型。" },
    { h: "5 · Enzymatic antioxidant defence", hcn: "酶性抗氧化防御",
      points: [
        "**Superoxide dismutase (SOD): 2 O₂•⁻ + 2 H⁺ → H₂O₂ + O₂.** Isoforms: **SOD1 Cu/Zn (cytosol)** — mutated in familial **ALS**; **SOD2 Mn (mitochondrial matrix)**, the most important; **SOD3 extracellular**.",
        "**Catalase (haem, mainly peroxisomes): 2 H₂O₂ → 2 H₂O + O₂** — fast, works at high H₂O₂ concentrations. Its hereditary absence = acatalasaemia.",
        "**Glutathione peroxidase (selenocysteine in the active site!): H₂O₂ (or lipid hydroperoxide) + 2 GSH → 2 H₂O (or ROH) + GSSG** — the main defence at low concentrations, and the reason **selenium is an essential trace element**.",
        "**Glutathione reductase regenerates GSH from GSSG using NADPH**, and the NADPH comes from the **pentose phosphate pathway** — this closes the circle with topic 5A and explains **G6PD deficiency** (haemolysis after oxidants: primaquine, sulfonamides, fava beans; **Heinz bodies**).",
        "Also: **peroxiredoxins/thioredoxin** system, **glutathione S-transferase** (conjugation of electrophiles, topic 23B), **haem oxygenase-1** (produces the antioxidant **bilirubin** — the link to topic 14A), and the master transcription factor **Nrf2/Keap1**, which induces all of them under oxidative stress."
      ],
      cn: "三个核心酶（SOD→过氧化氢酶→谷胱甘肽过氧化物酶）＋ GSH/NADPH 再生环路。硒在 GPx、G6PD 缺乏症的联系是高频追问。" },
    { h: "6 · Non-enzymatic antioxidants, ageing, clinical relevance", hcn: "非酶抗氧化剂、衰老学说与临床",
      points: [
        "**Lipid phase: vitamin E (α-tocopherol)** — the chain breaker in membranes and LDL; **carotenoids and lycopene**; **ubiquinol (CoQ10H₂)**. **Water phase: vitamin C**, **glutathione (1–10 mmol/L intracellularly)**, **uric acid (the largest antioxidant capacity in human plasma)**, bilirubin, albumin −SH groups, flavonoids.",
        "**Regeneration network to quote:** lipid radical → tocopherol → tocopheryl radical → regenerated by **ascorbate** → ascorbyl radical → regenerated by **glutathione/NADPH**. Antioxidants therefore work as a **chain, not individually**.",
        "**Metal-binding proteins are antioxidants too:** transferrin, ferritin, lactoferrin, caeruloplasmin (ferroxidase), metallothionein, albumin — they keep iron and copper out of the Fenton reaction.",
        "**Ageing theories:** the **free-radical / mitochondrial theory** (Harman) — accumulated damage to mtDNA and proteins, lipofuscin, declining mitochondrial function; plus **telomere shortening**, **glycation and cross-linking** of long-lived proteins (collagen, crystallins), declining proteasome and autophagy, cellular senescence with a proinflammatory secretome ('**inflammageing**').",
        "**Diseases with a proven radical component:** atherosclerosis (oxidised LDL), ischaemia–reperfusion injury, neurodegeneration (Parkinson, Alzheimer, ALS), diabetes and its complications, cataract, retinopathy of prematurity and bronchopulmonary dysplasia (oxygen therapy), emphysema in smokers (topic 28B), carcinogenesis, paracetamol and paraquat poisoning.",
        "Important nuance for the discussion: **large trials of high-dose antioxidant vitamins failed** (β-carotene even increased lung cancer in smokers) — because ROS are also **necessary signalling molecules**; the defence must be balanced, not maximal."
      ],
      cn: "非酶抗氧化剂按脂相/水相分；再生链 E→C→GSH/NADPH 必说。衰老讲自由基学说＋端粒＋糖化交联。最后那句『大剂量抗氧化维生素试验失败』是很好的收尾。" }
  ],
  numbers: [
    "**1–2 %** of mitochondrial electron flow leaks to superoxide",
    "Intracellular **glutathione 1–10 mmol/L**, GSH:GSSG normally **> 100:1**",
    "Plasma **uric acid 200–420 µmol/L** — the largest single antioxidant capacity of plasma",
    "Hydroxyl radical half-life **~10⁻⁹ s**; NO• seconds",
    "Selenium requirement **~55–70 µg/day** (glutathione peroxidase, deiodinases)"
  ],
  clinic: [
    "**G6PD deficiency** — haemolysis after oxidative drugs/fava beans, **Heinz bodies**, bite cells",
    "**Chronic granulomatous disease** — NADPH oxidase defect, recurrent catalase-positive infections, **NBT/DHR test**",
    "**Paracetamol overdose** — NAPQI depletes glutathione; antidote **N-acetylcysteine** restores it",
    "**Ischaemia–reperfusion injury**, and the failure of high-dose antioxidant supplementation trials",
    "**Selenium deficiency** — Keshan cardiomyopathy; **superoxide dismutase 1 mutation** — familial ALS"
  ],
  traps: [
    "Do not call H₂O₂ a radical — it is a **non-radical reactive species** (and a signalling molecule)",
    "SOD does **not** finish the job: it makes H₂O₂, which must be removed by catalase or glutathione peroxidase",
    "The Fenton reaction needs **reduced transition metal (Fe²⁺/Cu⁺)**",
    "Glutathione peroxidase contains **selenocysteine**, not just cysteine",
    "ROS are not only harmful — they are used in **phagocytic killing, thyroid hormone synthesis and redox signalling**"
  ],
  terms: [
    ["free radical", "自由基"], ["superoxide", "超氧阴离子"], ["hydroxyl radical", "羟自由基"],
    ["Fenton reaction", "Fenton 反应"], ["lipid peroxidation", "脂质过氧化"], ["malondialdehyde", "丙二醛"],
    ["peroxynitrite", "过氧亚硝酸盐"], ["superoxide dismutase", "超氧化物歧化酶"], ["glutathione peroxidase", "谷胱甘肽过氧化物酶"],
    ["oxidative stress", "氧化应激"], ["lipofuscin", "脂褐素"], ["ischaemia–reperfusion", "缺血再灌注"]
  ]
}
});
