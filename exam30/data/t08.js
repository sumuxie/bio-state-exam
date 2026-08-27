window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 8,
a: {
  titleEN: "Citrate cycle — production of reduced coenzymes for the respiratory chain. Input and output of substrates. Coenzyme A. Anaplerotic reactions.",
  titleCN: "柠檬酸循环 · 为呼吸链提供还原型辅酶 · 底物的进出 · 辅酶 A · 回补反应",
  opener: "The citrate cycle is the **common final oxidative pathway of all fuels**: it takes acetyl-CoA, oxidises both carbons to CO₂, and delivers the energy as **3 NADH, 1 FADH₂ and 1 GTP per turn** to the respiratory chain. It is **amphibolic** — catabolic and anabolic at the same time — and **strictly aerobic** although it uses no oxygen itself.",
  openerCN: "柠檬酸循环是所有燃料的共同最终氧化途径：把乙酰 CoA 的两个碳氧化成 CO₂，每转一圈产生 3 NADH、1 FADH₂ 与 1 GTP 交给呼吸链。它是两性（既分解又合成）的，且虽自身不用氧却严格需氧。",
  spine: [
    "定位、总反应式与八步（四步脱氢、两步脱羧、一步底物水平磷酸化）",
    "限速酶与调节（三个不可逆点＋NADH/ATP/Ca²⁺）",
    "辅酶 A 的结构与作用；PDH 复合体作为入口",
    "能量结算：每转一圈 10 ATP、每分子葡萄糖 20 ATP",
    "两性特征：中间物的输出（合成用途）",
    "回补反应（anaplerosis）——尤其丙酮酸羧化酶",
    "临床：硫胺素缺乏、氟乙酸、砷、乌头酸酶与铁"
  ],
  blocks: [
    { h: "1 · The eight steps", hcn: "八步反应（要能默写）",
      points: [
        "Location: **mitochondrial matrix** (except **succinate dehydrogenase, which is complex II of the inner membrane**). Overall: **acetyl-CoA + 3 NAD⁺ + FAD + GDP + Pi + 2 H₂O → 2 CO₂ + 3 NADH + FADH₂ + GTP + CoA-SH**.",
        "**1. Citrate synthase**: acetyl-CoA (C2) + oxaloacetate (C4) → **citrate (C6)**; irreversible, aldol condensation, drives the whole cycle. **2. Aconitase** (Fe-S): citrate → isocitrate (via cis-aconitate).",
        "**3. Isocitrate dehydrogenase**: → α-ketoglutarate + **CO₂ + NADH**; **the rate-limiting step**, allosterically activated by **ADP and Ca²⁺**, inhibited by ATP and NADH. **4. α-Ketoglutarate dehydrogenase complex** (the same five coenzymes as PDH: **TPP, lipoamide, CoA, FAD, NAD⁺**): → **succinyl-CoA + CO₂ + NADH**; irreversible.",
        "**5. Succinyl-CoA synthetase (succinate thiokinase)**: → succinate + **GTP** — the only **substrate-level phosphorylation** of the cycle. **6. Succinate dehydrogenase (= complex II, FAD, in the membrane)**: → fumarate + **FADH₂**.",
        "**7. Fumarase**: + H₂O → **L-malate**. **8. Malate dehydrogenase**: → **oxaloacetate + NADH**; strongly endergonic, pulled forward because citrate synthase removes oxaloacetate.",
        "Book-keeping to say aloud: **four dehydrogenations, two decarboxylations, one substrate-level phosphorylation; the two carbons leaving as CO₂ are not the two that entered as acetyl** (they come from oxaloacetate in the first turn)."
      ],
      cn: "八步按顺序：柠檬酸合酶→乌头酸酶→异柠檬酸脱氢酶(限速)→α-酮戊二酸脱氢酶→琥珀酰 CoA 合成酶(GTP)→琥珀酸脱氢酶(复合体 II)→延胡索酸酶→苹果酸脱氢酶。四脱氢、二脱羧、一底物水平磷酸化。" },
    { h: "2 · Coenzyme A and the entry of acetyl-CoA", hcn: "辅酶 A 与入口反应",
      points: [
        "**Coenzyme A = adenosine-3'-phosphate + pyrophosphate + pantothenic acid (vitamin B5) + β-mercaptoethylamine**; the working end is the **thiol −SH**, hence the abbreviation **CoA-SH**.",
        "The **thioester bond of acyl-CoA is macroergic (ΔG°' ≈ −31 kJ/mol)** — the same order as ATP; this is why acetyl-CoA can drive the condensation with oxaloacetate and why acyl groups are always activated as thioesters.",
        "CoA is the universal **acyl carrier**: acetyl-CoA (the crossroads metabolite), succinyl-CoA (haem synthesis), acyl-CoA (β-oxidation), HMG-CoA (ketogenesis/cholesterol), malonyl-CoA (fatty-acid synthesis). Its relative, the **acyl carrier protein (ACP)**, uses the same phosphopantetheine arm in fatty-acid synthase.",
        "**Entry: the pyruvate dehydrogenase complex — pyruvate + CoA + NAD⁺ → acetyl-CoA + CO₂ + NADH.** Three enzymes (E1 decarboxylase/TPP, E2 transacetylase/lipoamide, E3 dihydrolipoyl dehydrogenase/FAD+NAD⁺), five coenzymes, **irreversible**, regulated by phosphorylation (PDH kinase off, PDH phosphatase on — activated by **Ca²⁺ and insulin**).",
        "Sources of acetyl-CoA besides pyruvate: **β-oxidation of fatty acids, ketogenic amino acids, ketone bodies and ethanol** — this is exactly why the cycle is the *common final pathway*."
      ],
      cn: "辅酶 A 由泛酸(B5)构成、活性基团是 −SH、硫酯键高能；PDH 复合体是入口（5 个辅酶、不可逆、磷酸化调节）。乙酰 CoA 的四个来源要列出。" },
    { h: "3 · Regulation", hcn: "调节",
      points: [
        "The cycle is regulated at the **three irreversible steps: citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase**.",
        "**Inhibited by the products of a full tank: NADH, ATP, succinyl-CoA, citrate.** **Activated by ADP, Ca²⁺ (contraction and hormone signals) and by substrate availability (acetyl-CoA, oxaloacetate).**",
        "**The most important control is the availability of NAD⁺ and therefore of oxygen**: without O₂ the respiratory chain stops, NADH accumulates and the cycle halts. That is why we call the cycle aerobic although none of its reactions uses O₂ directly.",
        "**Ca²⁺ activates three dehydrogenases at once** (PDH phosphatase, isocitrate DH, α-KG DH) — the elegant coupling of contraction (which costs ATP) with ATP production.",
        "In the liver the cycle also depends on the **oxaloacetate pool**: in fasting oxaloacetate is drained into gluconeogenesis, acetyl-CoA cannot enter the cycle and is diverted to **ketone bodies** — the classical explanation of ketosis (*fat burns in the flame of carbohydrate*)."
      ],
      cn: "三个不可逆点＋『能量货币』抑制/激活；Ca²⁺ 同时激活三个脱氢酶；空腹时草酰乙酸被糖异生抽走→乙酰 CoA 转向酮体（这句是名句，要说）。" },
    { h: "4 · Energy balance", hcn: "能量结算",
      points: [
        "Per turn: **3 NADH (= 7.5 ATP) + 1 FADH₂ (= 1.5 ATP) + 1 GTP = 10 ATP**.",
        "Per **glucose** (2 turns) = **20 ATP**; adding glycolysis (2 ATP + 2 NADH) and PDH (2 NADH) gives the total **30–32 ATP** per glucose.",
        "Per **palmitate (C16)**: 8 acetyl-CoA → 8 × 10 = 80 ATP from the cycle, plus 7 × (NADH + FADH₂) = 28 ATP from β-oxidation, minus 2 for activation → **106 ATP** (topic 20A).",
        "The cycle itself makes only **one macroergic bond directly (GTP)** — **more than 90 % of the yield is indirect, through the reduced coenzymes and oxidative phosphorylation.**",
        "The **P/O convention matters**: NADH = 2.5 ATP and FADH₂ = 1.5 ATP in modern textbooks (older: 3 and 2, giving 12 ATP per turn) — state which you use."
      ],
      cn: "每圈 10 ATP、每葡萄糖 20 ATP；强调循环本身只直接产生 1 个 GTP，90% 以上要靠还原型辅酶经氧化磷酸化。" },
    { h: "5 · Amphibolic role — where intermediates leave", hcn: "两性作用：中间物的输出",
      points: [
        "**Citrate → cytosol (tricarboxylate carrier) → ATP-citrate lyase → acetyl-CoA for fatty-acid and cholesterol synthesis** — the only way acetyl groups leave the mitochondrion; citrate simultaneously **activates acetyl-CoA carboxylase and inhibits PFK-1**.",
        "**α-Ketoglutarate → glutamate (transamination/glutamate dehydrogenase) → glutamine, proline, arginine**, and it is the amino-group acceptor of all transaminations.",
        "**Succinyl-CoA → haem synthesis** (with glycine, δ-ALA synthase) and it is the entry point of **propionyl-CoA from odd-chain fatty acids, Val, Ile, Met and Thr**; it also activates ketone bodies in peripheral tissues (SCOT).",
        "**Oxaloacetate → aspartate** (transamination; then the urea cycle and pyrimidines) and **→ PEP (PEPCK) → gluconeogenesis**.",
        "**Malate → cytosol** for the malate–aspartate shuttle and gluconeogenesis. **Fumarate** arrives from the urea cycle and from purine synthesis (the two cycles are linked — the *aspartate–argininosuccinate shunt*).",
        "Because intermediates are withdrawn, the cycle would run down; therefore it must be refilled — **anaplerosis**."
      ],
      cn: "五个出口：柠檬酸→脂肪/胆固醇合成、α-酮戊二酸→谷氨酸族、琥珀酰 CoA→血红素、草酰乙酸→天冬氨酸/糖异生、苹果酸→穿梭。输出必须由回补补上。" },
    { h: "6 · Anaplerotic reactions", hcn: "回补反应（考试必考）",
      points: [
        "**Definition: reactions that replenish the intermediates of the cycle** (Greek *ana-plerotic* = to fill up), as opposed to **cataplerotic** reactions that drain them.",
        "**(1) Pyruvate carboxylase — the most important: pyruvate + CO₂ + ATP → oxaloacetate**; biotin; **allosterically activated by acetyl-CoA**, so an excess of acetyl-CoA automatically provides the oxaloacetate needed to burn it. Present in liver, kidney, brain, adipose tissue — **not in muscle in significant amounts**.",
        "**(2) Transamination in reverse: glutamate → α-ketoglutarate; aspartate → oxaloacetate**; also glutamate dehydrogenase.",
        "**(3) Degradation of glucogenic amino acids** — Val/Ile/Met/Thr and odd-chain fatty acids → **propionyl-CoA → (biotin, B12) → succinyl-CoA**; Phe/Tyr → fumarate; His/Pro/Arg/Gln → α-ketoglutarate.",
        "**(4) Malic enzyme (malate ⇌ pyruvate + CO₂ + NADPH)** and, in plants/bacteria, the **glyoxylate cycle** — which humans do **not** have, and this is precisely why we cannot convert fatty acids into glucose.",
        "One sentence that scores: **the cycle is catalytic — one oxaloacetate can oxidise an unlimited number of acetyl-CoA molecules — but only if anaplerosis keeps its concentration up.**"
      ],
      cn: "回补=补充中间物；最重要的是丙酮酸羧化酶（生物素、被乙酰 CoA 激活）；再加转氨、生糖氨基酸/丙酰 CoA、苹果酸酶。人类没有乙醛酸循环，所以脂肪酸不能变糖。" }
  ],
  numbers: [
    "Per turn: **3 NADH + 1 FADH₂ + 1 GTP = 10 ATP**; per glucose **20 ATP**",
    "Thioester bond of acetyl-CoA **ΔG°' ≈ −31 kJ/mol** — comparable to ATP",
    "Palmitate → **106 ATP** in total (of which 80 from the cycle)",
    "PDH and α-KGDH both need **5 coenzymes: TPP, lipoamide, CoA, FAD, NAD⁺**",
    "Complex II (succinate dehydrogenase) is the only membrane-bound enzyme of the cycle"
  ],
  clinic: [
    "**Thiamine deficiency** blocks PDH and α-KGDH → lactate rises: **Wernicke encephalopathy, wet beri-beri**",
    "**Arsenite** binds lipoamide −SH groups (PDH, α-KGDH); **fluoroacetate** (rat poison) → fluorocitrate blocks **aconitase**",
    "**Aconitase is an Fe-S protein and doubles as the cytosolic iron regulatory protein IRP1** — the link to topic 14A",
    "**Succinate dehydrogenase (SDH) and fumarase mutations** cause **paraganglioma/phaeochromocytoma and leiomyomatosis-renal cell cancer** — accumulated succinate/fumarate act as oncometabolites stabilising HIF-1α",
    "**Pyruvate carboxylase deficiency and PDH deficiency** — congenital lactic acidosis, neurological damage; PDH deficiency is treated with a ketogenic diet"
  ],
  traps: [
    "The cycle uses **no oxygen** but stops without it — because NAD⁺ is not regenerated",
    "The two CO₂ released in one turn do **not** come from the acetyl group that just entered",
    "**Succinate dehydrogenase = complex II** and is in the **membrane**, not free in the matrix; it makes **FADH₂**, worth only 1.5 ATP",
    "Acetyl-CoA is **not** an anaplerotic substrate — it cannot increase the number of cycle intermediates (that is why fat cannot make glucose)",
    "Do not call the cycle purely catabolic — it is **amphibolic**"
  ],
  terms: [
    ["citrate cycle / Krebs cycle", "柠檬酸循环/三羧酸循环"], ["amphibolic", "两性（双向）代谢途径"],
    ["anaplerotic reaction", "回补反应"], ["cataplerosis", "耗补（中间物流出）"], ["coenzyme A", "辅酶 A"],
    ["thioester bond", "硫酯键"], ["substrate-level phosphorylation", "底物水平磷酸化"],
    ["pyruvate carboxylase", "丙酮酸羧化酶"], ["oncometabolite", "致癌代谢物"], ["glyoxylate cycle", "乙醛酸循环"]
  ]
},
b: {
  titleEN: "Structure and biochemical importance of eicosanoids. Inflammation and pathobiochemistry of atherosclerosis. Lipoprotein transport and atherogenesis.",
  titleCN: "类二十烷酸的结构与生化意义 · 炎症与动脉粥样硬化的病理生化 · 脂蛋白转运与致动脉粥样硬化",
  opener: "Eicosanoids are **local hormones made from C20 polyunsaturated fatty acids, above all arachidonic acid**; they are the chemical language of inflammation, and inflammation together with **modified LDL** is what turns lipoprotein transport into **atherosclerosis**.",
  openerCN: "类二十烷酸是由二十碳多不饱和脂肪酸（主要是花生四烯酸）生成的局部激素，是炎症的化学语言；炎症与被修饰的 LDL 共同把脂蛋白转运变成动脉粥样硬化。",
  spine: [
    "结构与命名：前列腺素、血栓烷、白三烯、脂氧素",
    "生成：磷脂酶 A2→花生四烯酸→COX/LOX 两条路",
    "主要作用：炎症、血小板、血管、支气管、子宫、胃黏膜",
    "药理：阿司匹林、非甾体抗炎药、COX-2 抑制剂、糖皮质激素、白三烯拮抗剂",
    "炎症的生化：细胞因子、急性期反应",
    "脂蛋白转运复习（外源性、内源性、逆向转运）",
    "动脉粥样硬化的分子发病：内皮功能障碍→ox-LDL→泡沫细胞→斑块→破裂"
  ],
  blocks: [
    { h: "1 · Structure and nomenclature", hcn: "结构与命名",
      points: [
        "All eicosanoids come from **C20 polyunsaturated fatty acids**: **dihomo-γ-linolenic (series 1), arachidonic acid (series 2, the main one), EPA (series 3)** — the subscript gives the **number of double bonds remaining** in the product.",
        "**Prostaglandins (PG)** have a **cyclopentane ring** with two side chains; the letter (PGE, PGF, PGD, PGI) denotes the ring substituents, the number the double bonds: **PGE₂, PGI₂ (prostacyclin, a bicyclic ring)**.",
        "**Thromboxanes (TXA₂)** have an **oxane (six-membered oxygen-containing) ring**; **TXA₂ is very unstable (half-life ~30 s)** and is converted to inactive TXB₂.",
        "**Leukotrienes (LT)** are **linear, with three conjugated double bonds**; **LTC₄, LTD₄, LTE₄ carry glutathione-derived peptides = the cysteinyl leukotrienes**, formerly known as the *slow-reacting substance of anaphylaxis*. **LTB₄** is the chemotactic one.",
        "Also in the family: **lipoxins and resolvins** (pro-resolving, made from arachidonate and omega-3 acids), **prostacyclin PGI₂**, **isoprostanes** (non-enzymatic, free-radical products used as markers of oxidative stress), **endocannabinoids**.",
        "General properties: **autocrine/paracrine local hormones**, not stored, **synthesised on demand**, very short half-life, acting through **GPCR receptors (EP, DP, FP, IP, TP, BLT, CysLT)**."
      ],
      cn: "四类结构：前列腺素（五元环）、前列环素（双环）、血栓烷（含氧六元环）、白三烯（直链三个共轭双键）。下标数字=双键数，来自哪种 C20 脂肪酸。" },
    { h: "2 · Synthesis and the two branches", hcn: "合成：两条通路",
      points: [
        "**Release of the substrate is the rate-limiting step: phospholipase A₂ liberates arachidonic acid from the sn-2 position of membrane phospholipids** (mainly phosphatidylinositol/phosphatidylcholine); PLA₂ is activated by Ca²⁺ and by inflammatory stimuli, and **inhibited indirectly by glucocorticoids (via lipocortin/annexin-1)** — the reason steroids block *both* branches.",
        "**Cyclooxygenase branch (COX-1/COX-2, = prostaglandin H synthase, has cyclooxygenase and peroxidase activity): arachidonate → PGG₂ → PGH₂**, the common precursor, then tissue-specific synthases: **thromboxane synthase in platelets → TXA₂**, **prostacyclin synthase in endothelium → PGI₂**, PGE/PGD/PGF synthases elsewhere.",
        "**COX-1 is constitutive** (stomach mucosa, platelets, kidney — 'housekeeping'), **COX-2 is inducible** by cytokines in inflammation (and constitutive in kidney and brain).",
        "**Lipoxygenase branch: 5-LOX with FLAP → 5-HPETE → LTA₄ → LTB₄ (chemotaxis) or, with glutathione, LTC₄ → LTD₄ → LTE₄** (bronchoconstriction, vascular permeability). 12- and 15-LOX give HETEs and lipoxins.",
        "**Omega-3 fatty acids (EPA, DHA) compete for the same enzymes** and give series-3 prostanoids and series-5 leukotrienes, which are **less inflammatory and less thrombogenic** — the biochemical basis of the fish-oil story."
      ],
      cn: "限速步骤是磷脂酶 A2 释放花生四烯酸（糖皮质激素在此阻断）；随后 COX 支路（→PGH2→TXA2/PGI2/PG）与 LOX 支路（→LTB4/半胱氨酰白三烯）。COX-1 组成型、COX-2 诱导型。" },
    { h: "3 · Actions and pharmacology", hcn: "作用与药理（高频追问）",
      points: [
        "**TXA₂ (platelets, from COX-1): platelet aggregation + vasoconstriction. PGI₂ (endothelium): the exact opposite — inhibits aggregation, vasodilates.** Their balance controls haemostasis and is the key to antiplatelet therapy.",
        "**PGE₂:** vasodilatation, **fever** (hypothalamic set-point), **pain sensitisation**, **protection of gastric mucosa (mucus and bicarbonate, less acid)**, renal vasodilatation, uterine contraction, patency of the ductus arteriosus in the fetus.",
        "**Leukotrienes:** LTB₄ = potent **chemotaxis and adhesion of neutrophils**; **LTC₄/D₄/E₄ = bronchoconstriction (1000× more potent than histamine), mucus, oedema** — central to asthma and anaphylaxis.",
        "**Aspirin irreversibly acetylates Ser530 of COX** — platelets have no nucleus so they cannot resynthesise it: **one low dose blocks TXA₂ for the platelet's whole 7–10-day life**, while endothelium recovers PGI₂ — the rationale of low-dose aspirin. Other **NSAIDs are reversible competitive inhibitors**; **coxibs** spare COX-1 (less gastric damage but higher thrombotic risk, because TXA₂ is untouched while PGI₂ falls).",
        "**Glucocorticoids** block phospholipase A₂ (both branches) and COX-2 transcription. **Montelukast/zafirlukast** block CysLT₁ receptors, **zileuton** inhibits 5-LOX — asthma. **Misoprostol** (PGE₁ analogue) protects the stomach; **latanoprost** (PGF₂α) lowers intraocular pressure; **alprostadil** keeps the ductus open; **indomethacin** closes it.",
        "Adverse effects follow the biochemistry: NSAIDs → **gastric ulcer (no PGE₂), renal impairment (no vasodilatation, especially in hypovolaemia), aspirin-exacerbated respiratory disease** (COX blocked → substrate shunted into leukotrienes)."
      ],
      cn: "TXA2 与 PGI2 的对立是核心；PGE2 的五个作用（发热、痛觉致敏、胃黏膜保护、血管扩张、子宫）；阿司匹林不可逆乙酰化 Ser530 与血小板无核——这一段几乎每次都会被追问。" },
    { h: "4 · Biochemistry of inflammation", hcn: "炎症的生物化学",
      points: [
        "Triggers → **PAMPs/DAMPs on Toll-like receptors → NF-κB** → transcription of **TNF-α, IL-1β, IL-6**, COX-2, iNOS, adhesion molecules; the **inflammasome (NLRP3) with caspase-1** matures IL-1β.",
        "Mediators by class: **vasoactive amines** (histamine, serotonin), **eicosanoids**, **cytokines and chemokines**, **complement (C3a, C5a — anaphylatoxins, C5b-9 MAC)**, **kinins (bradykinin — pain, permeability)**, **NO**, **PAF**, and **ROS/HOCl** from the respiratory burst.",
        "**Acute-phase reaction (mainly IL-6 driven, in the liver): positive reactants CRP, fibrinogen, haptoglobin, ferritin, α₁-antitrypsin, caeruloplasmin, complement, hepcidin; negative reactants albumin, transferrin, transthyretin** (topic 10B).",
        "**Resolution is active, not passive**: a **lipid mediator class switch** from prostaglandins/leukotrienes to **lipoxins, resolvins and protectins**, plus IL-10 and TGF-β, apoptosis of neutrophils and efferocytosis by macrophages. Failure to resolve = **chronic inflammation**.",
        "**Chronic low-grade inflammation** (obesity, metabolic syndrome, smoking) is the bridge to atherosclerosis: it keeps endothelium activated and raises hsCRP, IL-6 and fibrinogen."
      ],
      cn: "从 TLR→NF-κB→细胞因子 讲起，列出五类介质，再讲急性期反应（正/负反应物）与主动消退（脂氧素/消退素）。最后把慢性低度炎症接到动脉粥样硬化。" },
    { h: "5 · Lipoprotein transport in one minute", hcn: "脂蛋白转运（复习版）",
      points: [
        "**Exogenous pathway: chylomicrons** (apo B-48) carry dietary TAG from the gut; **LPL (activated by apo C-II)** releases fatty acids; remnants are taken up by the liver via **apo E**.",
        "**Endogenous pathway: VLDL** (apo B-100) exports hepatic TAG → **IDL → LDL**, which delivers cholesterol to tissues through the **LDL receptor (apo B-100/E)**, regulated by intracellular cholesterol and **PCSK9** (which degrades the receptor — hence PCSK9 inhibitors).",
        "**Reverse cholesterol transport: HDL** (apo A-I) picks up cholesterol from cells via **ABCA1/ABCG1**, esterifies it with **LCAT**, and delivers it to the liver directly (**SR-B1**) or by exchange through **CETP**.",
        "**Atherogenic particles are those containing apo B: LDL — especially small dense LDL — remnants, and Lp(a)**; HDL is protective (though raising it pharmacologically has not proved beneficial).",
        "Targets: **LDL-cholesterol < 3.0 mmol/L in low risk, < 1.4–1.8 mmol/L in high/very high risk**; non-HDL cholesterol and apo B are the modern secondary targets."
      ],
      cn: "三条通路（外源、内源、逆向）各一句；含 apoB 的颗粒（LDL、残粒、Lp(a)）致病，HDL 保护；LDL 受体与 PCSK9 是药物靶点。" },
    { h: "6 · Pathobiochemistry of atherosclerosis", hcn: "动脉粥样硬化的分子发病机制",
      points: [
        "**Step 1 — endothelial dysfunction**: shear stress at branch points, hypertension, smoking, hyperglycaemia, oxidised LDL → **less NO** (eNOS uncoupling), more **endothelin, adhesion molecules (VCAM-1, ICAM-1) and MCP-1**.",
        "**Step 2 — retention and modification of LDL** in the intima (binding to proteoglycans) → **oxidation and glycation → ox-LDL**, which is both an antigen and a strong inflammatory stimulus.",
        "**Step 3 — foam cells**: monocytes enter, become macrophages and take up ox-LDL through **scavenger receptors (SR-A, CD36)** — these are **NOT down-regulated by cholesterol**, so uptake is unlimited → cytoplasm full of cholesteryl esters = **foam cell**; the **fatty streak** is visible even in children.",
        "**Step 4 — plaque**: cytokines (IL-1, TNF-α, IFN-γ from T cells) → migration and proliferation of **smooth muscle cells**, synthesis of collagen → **fibrous cap** over a **necrotic lipid core** (dead foam cells, cholesterol crystals — which also activate the NLRP3 inflammasome).",
        "**Step 5 — complications**: the plaque grows, calcifies, and above all can **rupture**: activated macrophages secrete **MMP-9** and degrade the cap, especially in a **thin-cap fibroatheroma with a large lipid core** → exposure of collagen and **tissue factor** → **thrombosis → myocardial infarction or stroke**. Erosion is the second mechanism.",
        "Risk markers and modifiers: **LDL-C, apo B, Lp(a), hsCRP, homocysteine, HbA1c**, smoking, hypertension. Therapy attacks the same biochemistry: **statins (HMG-CoA reductase, plus pleiotropic anti-inflammatory effect), ezetimibe (NPC1L1), PCSK9 inhibitors, aspirin (TXA₂), and now anti-IL-1β (canakinumab) — the proof that atherosclerosis is an inflammatory disease.**"
      ],
      cn: "五步走：内皮功能障碍→LDL 滞留并被氧化→清道夫受体摄取成泡沫细胞（不受胆固醇负反馈！）→平滑肌与纤维帽→MMP 降解帽子导致破裂血栓。抗 IL-1β 试验证明它是炎症病。" }
  ],
  numbers: [
    "TXA₂ half-life **~30 s**; aspirin blocks platelet COX-1 for the platelet lifespan **7–10 days**",
    "Cysteinyl leukotrienes are **~1000× more potent bronchoconstrictors than histamine**",
    "LDL-C targets: **< 3.0 mmol/L** low risk, **< 1.4 mmol/L** very high risk; HDL-C desirable **> 1.0 (men) / 1.2 (women) mmol/L**",
    "hsCRP: low risk **< 1 mg/L**, high risk **> 3 mg/L**",
    "Arachidonic acid = **20:4 (ω-6)**, released from the **sn-2** position by phospholipase A₂"
  ],
  clinic: [
    "**Low-dose aspirin** for secondary prevention — the mechanism is the nucleus-free platelet",
    "**NSAID gastropathy and NSAID nephropathy**; **aspirin-exacerbated respiratory disease** (shunting to leukotrienes)",
    "**Montelukast** in asthma; **glucocorticoids** block both branches through phospholipase A₂",
    "**Familial hypercholesterolaemia** (LDL receptor) — tendon xanthomas, early infarction; treated with statin + ezetimibe + PCSK9 inhibitor",
    "**CANTOS trial** (anti-IL-1β) reduced cardiovascular events without changing lipids — inflammation is causal"
  ],
  traps: [
    "**Phospholipase A₂ is the rate-limiting step**, not COX — that is why steroids are broader than NSAIDs",
    "Aspirin inhibits COX **irreversibly**; other NSAIDs do it reversibly",
    "Scavenger receptors are **not** regulated by cell cholesterol — that is why foam cells can form at all",
    "Eicosanoids are **not stored** and act **locally** — they are not classical circulating hormones",
    "Atherosclerosis is not just 'lipid deposition' — say **retention, modification and inflammation**"
  ],
  terms: [
    ["eicosanoid", "类二十烷酸"], ["arachidonic acid", "花生四烯酸"], ["phospholipase A₂", "磷脂酶 A2"],
    ["cyclooxygenase", "环加氧酶"], ["thromboxane A₂", "血栓烷 A2"], ["prostacyclin", "前列环素"],
    ["leukotriene", "白三烯"], ["lipoxin / resolvin", "脂氧素/消退素"], ["foam cell", "泡沫细胞"],
    ["scavenger receptor", "清道夫受体"], ["oxidised LDL", "氧化型低密度脂蛋白"], ["fibrous cap", "纤维帽"]
  ]
}
});
