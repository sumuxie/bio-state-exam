window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 13,
a: {
  titleEN: "Nucleic acids. Synthesis and degradation of purine and pyrimidine nucleotides. Regulation of these pathways. Hyperuricaemia.",
  titleCN: "核酸 · 嘌呤与嘧啶核苷酸的合成与降解 · 调节 · 高尿酸血症",
  opener: "Nucleotides are **base + pentose + phosphate**; purines are built **stepwise on the ribose (de novo, starting from PRPP)**, pyrimidines are built **as a ring first and then attached to PRPP**, and the end product of purine degradation in man is **uric acid**, which is poorly soluble — hence gout.",
  openerCN: "核苷酸=碱基＋戊糖＋磷酸；嘌呤是在核糖上『逐步搭建』（从 PRPP 开始），嘧啶则是先造好环再接到 PRPP 上；人类嘌呤降解的终产物是溶解度很低的尿酸——痛风由此而来。",
  spine: [
    "核酸与核苷酸的结构（碱基、核糖、磷酸二酯键、DNA/RNA 差别）",
    "嘌呤从头合成：PRPP→IMP→AMP/GMP，及其调节",
    "嘧啶从头合成：CPS-II→乳清酸→UMP→CTP/dTMP",
    "补救途径（HGPRT、APRT）与临床意义",
    "脱氧核糖核苷酸：核糖核苷酸还原酶与胸苷酸合酶",
    "嘌呤降解→尿酸；嘧啶降解（可溶性产物）",
    "高尿酸血症与痛风：机制、分类、治疗、相关药物"
  ],
  blocks: [
    { h: "1 · Structure of nucleic acids", hcn: "核酸的结构",
      points: [
        "**Nucleoside = base + sugar (N-glycosidic bond at N9 of purines / N1 of pyrimidines); nucleotide = nucleoside + phosphate (ester at 5'-OH).** Bases: **purines adenine, guanine (bicyclic); pyrimidines cytosine, thymine (DNA), uracil (RNA)**.",
        "**DNA vs RNA: deoxyribose vs ribose (2'-OH), thymine vs uracil, double helix vs mostly single-stranded, DNA is chemically far more stable** — the 2'-OH makes RNA susceptible to alkaline hydrolysis; this is why DNA is the archive and RNA the working copy.",
        "The chain is held by **3'→5' phosphodiester bonds**, so a strand has a **5' and a 3' end** and is always written 5'→3'. **Chargaff's rules: A = T, G = C.**",
        "**Watson–Crick B-DNA: antiparallel double helix, 10 bp per turn, 3.4 nm pitch, 0.34 nm rise; A=T two hydrogen bonds, G≡C three** (hence GC-rich DNA has a higher melting temperature). Stabilised additionally by **base stacking and by the hydrophobic effect**; the backbone is negatively charged and is neutralised by **histones (rich in Lys and Arg)** in the nucleosome.",
        "RNA types: **mRNA (capped, polyadenylated, spliced), tRNA (cloverleaf, anticodon, CCA end), rRNA (the catalytic component of the ribosome), plus snRNA, miRNA, lncRNA**.",
        "Non-genetic roles of nucleotides worth mentioning: **ATP/GTP as energy currency, cAMP/cGMP as second messengers, NAD⁺/FAD/CoA as coenzymes, UDP-glucose and CDP-choline as activated intermediates, adenosine as a signalling molecule.**"
      ],
      cn: "结构要点：核苷/核苷酸的定义、DNA 与 RNA 的四点差别、3'→5' 磷酸二酯键、B-DNA 参数（10 bp/圈、0.34 nm）、A=T 双氢键 G≡C 三氢键。别忘了核苷酸的非遗传功能。" },
    { h: "2 · De-novo synthesis of purines", hcn: "嘌呤的从头合成",
      points: [
        "**The purine ring is assembled directly on the ribose.** Start: **ribose-5-P (from the pentose phosphate pathway) + ATP → PRPP (PRPP synthetase)**.",
        "**Committed and rate-limiting step: PRPP + glutamine → 5-phosphoribosylamine (glutamine-PRPP amidotransferase)** — feedback-inhibited by **AMP, GMP and IMP**, activated by PRPP.",
        "**Sources of the atoms (a classic exam question): N1 from aspartate; C2 and C8 from N10-formyl-THF; N3 and N9 from glutamine; C4, C5 and N7 from glycine; C6 from CO₂.**",
        "After **10 steps and 6 ATP → IMP (inosine monophosphate, base hypoxanthine)**, which branches: **IMP + aspartate + GTP → AMP** and **IMP + NAD⁺ + glutamine + ATP → GMP**. Note the elegance: **GTP is spent to make AMP and ATP is spent to make GMP**, which keeps the two pools balanced.",
        "**Regulation:** feedback at PRPP synthetase and at the amidotransferase; cross-regulation at the branch point (AMP inhibits its own branch, GMP its own).",
        "**Salvage pathway (much cheaper, dominant in brain and bone marrow): HGPRT — hypoxanthine or guanine + PRPP → IMP or GMP; APRT — adenine + PRPP → AMP**; also adenosine kinase. Deficiency of **HGPRT = Lesch–Nyhan syndrome** (X-linked): hyperuricaemia, gout in childhood, choreoathetosis, intellectual disability and **compulsive self-mutilation**."
      ],
      cn: "从 PRPP 开始、在核糖上逐步搭环；限速步骤是谷氨酰胺-PRPP 酰胺转移酶；原子来源那张图要背；IMP 分叉时 GTP 用于造 AMP、ATP 用于造 GMP；补救途径 HGPRT 与 Lesch–Nyhan。" },
    { h: "3 · De-novo synthesis of pyrimidines", hcn: "嘧啶的从头合成",
      points: [
        "**Here the ring is made first and only then joined to PRPP.** Step 1: **glutamine + CO₂ + 2 ATP → carbamoyl phosphate by CPS-II (cytosolic, uses glutamine, inhibited by UTP, activated by PRPP)** — do not confuse it with **CPS-I** (mitochondrial, uses ammonia, urea cycle, activated by N-acetylglutamate).",
        "**Carbamoyl phosphate + aspartate → carbamoyl aspartate (aspartate transcarbamoylase, ATCase — the regulated step in bacteria)** → dihydroorotate → **orotate (dihydroorotate dehydrogenase, the only mitochondrial step, linked to the respiratory chain — the target of leflunomide)**.",
        "**Orotate + PRPP → OMP → (decarboxylation) → UMP → UDP → UTP → CTP (CTP synthetase, uses glutamine).**",
        "**Deoxyribonucleotides: ribonucleotide reductase converts NDP → dNDP** (thioredoxin/NADPH as reductant); it is allosterically regulated at two sites to keep the four dNTPs balanced — and it is the target of **hydroxyurea**.",
        "**dTMP: dUMP + N5,N10-methylene-THF → dTMP + dihydrofolate (thymidylate synthase)**; DHF must be recycled by **dihydrofolate reductase** — the two enzymes attacked by **5-fluorouracil** and **methotrexate** respectively, the classic anticancer pair.",
        "**Orotic aciduria** — deficiency of UMP synthase: megaloblastic anaemia not responding to B12/folate, plus orotic acid in urine; treated with **uridine**. Note that **orotic aciduria also appears in urea-cycle defects (OTC deficiency)** because carbamoyl phosphate escapes from the mitochondrion — a favourite link between two topics."
      ],
      cn: "嘧啶：先造环后接 PRPP；CPS-II（胞质、谷氨酰胺、被 UTP 抑制）与 CPS-I 的区别是必考；核糖核苷酸还原酶与胸苷酸合酶＋两个抗癌药；乳清酸尿症与 OTC 缺乏的联系。" },
    { h: "4 · Degradation of purines to uric acid", hcn: "嘌呤降解为尿酸",
      points: [
        "**AMP → (deaminase) IMP → (nucleotidase) inosine → (purine nucleoside phosphorylase) hypoxanthine → (xanthine oxidase) xanthine → (xanthine oxidase) URIC ACID.** GMP → guanosine → guanine → (guanase) xanthine → uric acid.",
        "**Xanthine oxidase (a molybdenum flavoenzyme, in liver and intestine) catalyses the last two steps and produces H₂O₂ and superoxide as by-products** — it is the target of **allopurinol** (its metabolite oxypurinol is a suicide inhibitor) and of **febuxostat**.",
        "**Man and primates lack uricase**, so uric acid is the end product; other mammals convert it to soluble **allantoin** — which is why gout is essentially a human disease (and why **rasburicase**, a recombinant uricase, works so dramatically in tumour lysis syndrome).",
        "Uric acid is a **weak acid (pKa 5.75)**: at plasma pH it is **urate**, but in acid urine it is the far less soluble **uric acid** → urate stones form in acid urine (alkalinisation is therapeutic). Plasma solubility limit **~420 µmol/L (7 mg/dL)**.",
        "**Excretion: two thirds renal, one third intestinal.** In the kidney urate is filtered, then almost completely reabsorbed and secreted in the proximal tubule (**URAT1, GLUT9, ABCG2**) — the transporters targeted by **probenecid** (uricosuric) and impaired by **thiazides, low-dose aspirin, alcohol and ketoacids**.",
        "**Pyrimidine degradation is entirely different and clinically silent: the ring is opened → β-alanine or β-aminoisobutyrate + NH₃ + CO₂ — all soluble.** Hence there is no 'pyrimidine gout'. (DPD deficiency, though, causes severe 5-fluorouracil toxicity.)"
      ],
      cn: "降解链条要能一口气说完：AMP→IMP→肌苷→次黄嘌呤→黄嘌呤→尿酸；黄嘌呤氧化酶是别嘌醇靶点；人类无尿酸酶；尿酸 pKa 5.75、溶解度上限约 420 µmol/L；肾排 2/3。嘧啶降解产物可溶，所以没有『嘧啶痛风』。" },
    { h: "5 · Hyperuricaemia and gout", hcn: "高尿酸血症与痛风",
      points: [
        "**Definition: serum urate above the solubility limit, ~> 420 µmol/L in men, > 360 µmol/L in women.** Hyperuricaemia is necessary but not sufficient for gout — most hyperuricaemic people never have an attack.",
        "**Primary, ~90 % is under-excretion** (genetic variants of URAT1/GLUT9/ABCG2, obesity, insulin resistance, alcohol, diuretics, renal insufficiency, lead nephropathy); **over-production (~10 %)**: HGPRT deficiency (Lesch–Nyhan, partial = Kelley–Seegmiller), **PRPP synthetase superactivity**, **glucose-6-phosphatase deficiency (von Gierke — lactate competes for excretion and ATP depletion drives purine turnover)**, high fructose intake, psoriasis, haemolysis, myeloproliferative disease, **tumour lysis syndrome**.",
        "**Attack mechanism: monosodium urate crystals precipitate in cool, poorly perfused joints (classically the first metatarsophalangeal joint — podagra) → phagocytosis by neutrophils → activation of the NLRP3 inflammasome → caspase-1 → IL-1β → acute inflammation.** This explains why **anti-IL-1 therapy (anakinra/canakinumab) works** in refractory gout.",
        "Manifestations: acute arthritis, **tophi** (in chronic disease), **urate nephrolithiasis** (radiolucent stones, acid urine), urate nephropathy.",
        "Diagnosis: **needle-shaped, negatively birefringent crystals in synovial fluid** (contrast: calcium pyrophosphate in pseudogout is rhomboid and positively birefringent). Serum urate can be normal during an attack.",
        "**Therapy follows the biochemistry:** acute — **colchicine (inhibits microtubules and neutrophil migration), NSAIDs, glucocorticoids**; long-term — **allopurinol/febuxostat (xanthine oxidase)**, **uricosurics (probenecid, benzbromarone)**, **rasburicase** for tumour lysis, plus diet (less purine-rich meat, beer, fructose). **Never start or stop urate-lowering therapy during an acute attack without cover** — mobilising crystals can worsen it. **Allopurinol interacts with azathioprine/6-mercaptopurine** (both are metabolised by xanthine oxidase — reduce the dose)."
      ],
      cn: "定义与男女切点；90% 是排泄减少；发作机制走 NLRP3 炎症小体→IL-1β（解释抗 IL-1 有效）；负性双折射针状结晶；治疗分急性与长期两套，别嘌醇与硫唑嘌呤的相互作用是常考点。" },
    { h: "6 · Other clinically important points of nucleotide metabolism", hcn: "其他临床要点",
      points: [
        "**ADA (adenosine deaminase) deficiency → severe combined immunodeficiency (SCID)**: deoxyadenosine and dATP accumulate and poison ribonucleotide reductase in lymphocytes — the first disease treated by gene therapy. **PNP deficiency** gives a T-cell defect.",
        "**Antimetabolites** map onto the pathway: **methotrexate (DHFR), 5-fluorouracil (thymidylate synthase), 6-mercaptopurine/azathioprine (purine synthesis, via HGPRT activation), hydroxyurea (ribonucleotide reductase), mycophenolate (IMP dehydrogenase → GMP), leflunomide (dihydroorotate dehydrogenase), cytarabine and gemcitabine (DNA polymerase), acyclovir (viral thymidine kinase then DNA polymerase)**.",
        "**Tumour lysis syndrome**: massive cell death → **hyperuricaemia, hyperkalaemia, hyperphosphataemia, hypocalcaemia and acute kidney injury**; prevented with hydration, allopurinol or rasburicase.",
        "**Xanthinuria** (xanthine oxidase deficiency) — very low urate, xanthine stones; **hereditary orotic aciduria** — treated with uridine.",
        "Analytical note for the lab part of the exam: **urate is measured enzymatically with uricase; serum urate rises after a purine-rich meal, in fasting and ketosis, and with dehydration**, so a single value must be interpreted with the clinical context."
      ],
      cn: "ADA 缺乏→SCID；抗代谢药与靶酶一一对应（这是最容易被追问的一段）；肿瘤溶解综合征的四联电解质紊乱；黄嘌呤尿症与乳清酸尿症。" }
  ],
  numbers: [
    "Serum urate: men **200–420 µmol/L**, women **140–360 µmol/L**; solubility limit ~**420 µmol/L (7 mg/dL)**",
    "Uric acid pKa **5.75**; excretion **2/3 renal, 1/3 intestinal**",
    "Purine de-novo synthesis costs **~6 ATP** per IMP; B-DNA **10 bp/turn, 0.34 nm rise**",
    "A=T **2 hydrogen bonds**, G≡C **3**; Chargaff A = T, G = C",
    "Normal daily urate excretion **~600 mg (3.6 mmol)** on a normal diet"
  ],
  clinic: [
    "**Gout** — podagra, negatively birefringent needle crystals, NLRP3/IL-1β mechanism",
    "**Lesch–Nyhan syndrome** — HGPRT deficiency, self-mutilation, childhood gout",
    "**Tumour lysis syndrome** — urate, K⁺, phosphate up, calcium down, AKI; rasburicase",
    "**Allopurinol + azathioprine/6-MP** — dangerous interaction through xanthine oxidase",
    "**ADA deficiency** — SCID; **DPD deficiency** — life-threatening 5-fluorouracil toxicity"
  ],
  traps: [
    "**Purines: ring built on the ribose. Pyrimidines: ring built first, then attached** — say this contrast explicitly",
    "**CPS-I (mitochondrial, ammonia, urea cycle) vs CPS-II (cytosolic, glutamine, pyrimidines)** — the classic trap",
    "Uric acid is the end product **in humans only** because we lack uricase",
    "Hyperuricaemia alone is **not** gout; and urate may be normal during an acute attack",
    "Pyrimidine degradation products are **soluble** — there is no pyrimidine equivalent of gout"
  ],
  terms: [
    ["nucleoside / nucleotide", "核苷/核苷酸"], ["phosphodiester bond", "磷酸二酯键"], ["PRPP", "5-磷酸核糖-1-焦磷酸"],
    ["salvage pathway", "补救途径"], ["HGPRT", "次黄嘌呤鸟嘌呤磷酸核糖转移酶"], ["xanthine oxidase", "黄嘌呤氧化酶"],
    ["ribonucleotide reductase", "核糖核苷酸还原酶"], ["thymidylate synthase", "胸苷酸合酶"],
    ["hyperuricaemia", "高尿酸血症"], ["tophus", "痛风石"], ["inflammasome", "炎症小体"]
  ]
},
b: {
  titleEN: "Metabolism of erythrocytes. Haemoglobin — fetal and pathological forms. Transport of blood gases, Bohr effect, saturation curve. Haemoglobinopathies and methaemoglobinaemia.",
  titleCN: "红细胞代谢 · 血红蛋白（胎儿型与病理型）· 血气运输与 Bohr 效应 · 氧解离曲线 · 血红蛋白病与高铁血红蛋白血症",
  opener: "The erythrocyte is a **cell reduced to one function**: no nucleus, no mitochondria, no ribosomes — it lives on **anaerobic glycolysis**, and everything it does serves the **transport of O₂ and CO₂ by haemoglobin**, a tetramer whose **cooperative binding** makes it a far better carrier than myoglobin.",
  openerCN: "红细胞是被『裁剪』到只剩一个功能的细胞：无核、无线粒体、无核糖体，靠无氧糖酵解生存；它的一切都服务于血红蛋白对 O₂ 与 CO₂ 的运输——四聚体的协同结合使它远优于肌红蛋白。",
  spine: [
    "红细胞的代谢：糖酵解 90%、PPP 10%、2,3-BPG 旁路、谷胱甘肽系统",
    "血红蛋白的结构与 T/R 构象变化",
    "氧解离曲线与四个调节因素（Bohr、2,3-BPG、温度、CO₂）",
    "CO₂ 的三种运输形式与氯离子转移",
    "生理性变异体：HbA、HbA2、HbF 与胎儿的氧转运",
    "血红蛋白病：镰状细胞、地中海贫血",
    "高铁血红蛋白血症与一氧化碳中毒"
  ],
  blocks: [
    { h: "1 · Metabolism of the erythrocyte", hcn: "红细胞的代谢",
      points: [
        "No nucleus, mitochondria or ribosomes → **no oxidative phosphorylation, no protein synthesis, no fatty-acid oxidation**; lifespan **~120 days**, then removed by macrophages of the spleen.",
        "**~90 % of glucose goes through anaerobic glycolysis (2 ATP)** — needed for the **Na⁺/K⁺-ATPase, Ca²⁺-ATPase and membrane shape**; glucose enters through **GLUT1, insulin-independent**.",
        "**~10 % goes through the pentose phosphate pathway → NADPH → glutathione reductase → GSH → glutathione peroxidase** removes H₂O₂. Without it: oxidised haemoglobin precipitates as **Heinz bodies** and the cell haemolyses (**G6PD deficiency**).",
        "**Rapoport–Luebering shunt:** 1,3-bisphosphoglycerate → **2,3-BPG** (bisphosphoglycerate mutase) → 3-phosphoglycerate. It **costs one ATP** but produces the allosteric regulator of oxygen affinity; **2,3-BPG rises in hypoxia, anaemia, altitude, chronic lung disease, and falls in stored blood** (hence transfused blood initially releases oxygen poorly).",
        "**Methaemoglobin reductase (cytochrome b5 reductase, NADH-dependent)** keeps the iron in the Fe²⁺ state — about 3 % of haemoglobin is oxidised every day and must be reduced back.",
        "Energy failure = membrane failure: **pyruvate kinase deficiency** (chronic haemolysis, but paradoxically good oxygen delivery because 2,3-BPG accumulates) and **hexokinase deficiency** (opposite effect)."
      ],
      cn: "四条代谢：糖酵解 90%（供 ATP 给离子泵）、PPP 10%（NADPH→谷胱甘肽）、2,3-BPG 旁路（耗 1 ATP 换调节能力）、高铁血红蛋白还原酶。丙酮酸激酶缺乏与 G6PD 缺乏各对应一条。" },
    { h: "2 · Structure of haemoglobin and cooperativity", hcn: "血红蛋白的结构与协同效应",
      points: [
        "**HbA = α₂β₂**, four subunits each with a **haem (protoporphyrin IX + Fe²⁺)**; the iron is held by the **proximal histidine F8**, oxygen binds on the other side near the **distal histidine E7**, which also **hinders CO binding (still 200–250× stronger than O₂)**.",
        "**Only Fe²⁺ binds oxygen; the binding is oxygenation, not oxidation** — the iron stays divalent.",
        "**T (tense, deoxy) → R (relaxed, oxy) transition:** on binding O₂ the iron moves into the plane of the ring, pulls His F8 and the F helix, and breaks the salt bridges between subunits → the remaining subunits gain affinity → **positive cooperativity → sigmoidal curve (Hill coefficient ~2.8)**.",
        "**Myoglobin, being monomeric, has a hyperbolic curve and much higher affinity** — perfect for storage in muscle, useless for transport. Cooperativity is what allows haemoglobin to load fully in the lung and unload substantially in the tissue.",
        "**Allosteric effectors bind the T form and stabilise it: 2,3-BPG (in the central cavity between the β chains), H⁺, CO₂ (as carbamate), and Cl⁻** — all of them shift the curve to the right, i.e. release oxygen."
      ],
      cn: "结构（α2β2、血红素、近端/远端组氨酸）、T→R 变构机制、协同性给出 S 形曲线（Hill≈2.8）；与肌红蛋白双曲线的对比。所有别构效应物都稳定 T 型=释放氧。" },
    { h: "3 · The saturation curve and its shifts", hcn: "氧解离曲线与位移",
      points: [
        "**P₅₀ of HbA ≈ 26 mmHg (3.5 kPa)**; in the lung pO₂ ~100 mmHg → **97–98 % saturation**, in the tissue pO₂ ~40 mmHg → ~75 % saturation, so **~25 % of the load is released at rest** and much more during exercise.",
        "**Right shift = lower affinity = more oxygen released: ↑ H⁺ (lower pH), ↑ CO₂, ↑ temperature, ↑ 2,3-BPG.** Left shift = the opposite: alkalosis, hypothermia, low 2,3-BPG (stored blood), **HbF, methaemoglobin and carboxyhaemoglobin**.",
        "**Bohr effect:** in metabolically active tissue, **CO₂ and H⁺ decrease the oxygen affinity of haemoglobin** (they stabilise the T form by protonating His146 of the β chain and forming carbamates) → **oxygen is delivered where it is needed**; in the lung the reverse happens — releasing CO₂ raises the affinity for O₂.",
        "**Haldane effect (the mirror image):** **deoxygenated haemoglobin binds CO₂ and H⁺ better** — so unloading O₂ in the tissue automatically increases CO₂ uptake, and oxygenation in the lung drives CO₂ out.",
        "The plateau of the curve explains why **supplemental oxygen helps little in a patient who is already 97 % saturated**, and the steep part explains why a small fall of pO₂ in tissue releases a lot of oxygen — say both when discussing the shape."
      ],
      cn: "P50=26 mmHg；右移四因素（H⁺、CO₂、温度、2,3-BPG）与左移（HbF、CO、高铁血红蛋白、库存血）；Bohr 与 Haldane 效应是同一现象的两面，必须都能讲。" },
    { h: "4 · Transport of CO₂ and the chloride shift", hcn: "CO₂ 的运输与氯转移",
      points: [
        "**Three forms: ~70 % as bicarbonate, ~20–25 % bound to haemoglobin as carbamate (on N-terminal amino groups, NOT on the haem), ~5–10 % physically dissolved.**",
        "**In the erythrocyte carbonic anhydrase converts CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ extremely fast**; the **bicarbonate leaves in exchange for chloride (band 3 anion exchanger) — the Hamburger or chloride shift** — and the **H⁺ is buffered by haemoglobin** (the imidazole of histidine; deoxyhaemoglobin is the better buffer — again the Haldane effect).",
        "In the lung everything runs backwards: bicarbonate re-enters, is converted to CO₂ and exhaled; **carbonic anhydrase is inhibited by acetazolamide**, which is why that drug causes a mild metabolic acidosis and is used in glaucoma and altitude sickness.",
        "**Haemoglobin is the most important buffer of whole blood after bicarbonate** — it accounts for most of the non-bicarbonate buffering capacity (topic 19B).",
        "Quantities: arterial **pCO₂ 4.7–6.0 kPa (35–45 mmHg)**, venous ~6.1 kPa; arterial **pO₂ 10.6–13.3 kPa (80–100 mmHg)**, SaO₂ **95–98 %**."
      ],
      cn: "CO₂ 三种形式（碳酸氢盐 70%、氨基甲酸血红蛋白 20–25%、溶解 5–10%）；碳酸酐酶＋band 3 氯转移；脱氧血红蛋白缓冲 H⁺。记住血气正常值。" },
    { h: "5 · Physiological and pathological haemoglobins", hcn: "生理性与病理性血红蛋白",
      points: [
        "**Normal adult: HbA (α₂β₂) ~97 %, HbA₂ (α₂δ₂) ~2.5 %, HbF (α₂γ₂) < 1 %.** Embryonic: Gower, Portland. Switching: **ζ/ε → α/γ (fetal) → α/β at about 6 months after birth**.",
        "**HbF binds 2,3-BPG poorly** (the γ chain lacks the positively charged His143) → **higher oxygen affinity, P₅₀ ~19 mmHg, curve shifted left** → it extracts oxygen from maternal blood across the placenta. **HbF also resists alkali denaturation** (the basis of the Kleihauer–Betke test) and **inhibits sickling** — which is why hydroxyurea, by inducing HbF, treats sickle-cell disease.",
        "**HbA1c** — non-enzymatically glycated HbA (topic 2B), a retrospective marker of glycaemia.",
        "**Sickle-cell disease: β6 Glu → Val** — a hydrophobic patch appears; **deoxygenated HbS polymerises into fibres → sickle shape → haemolysis and vaso-occlusion**. Heterozygotes are protected against malaria. Triggers: hypoxia, acidosis, dehydration, fever, infection. Treatment: hydration, analgesia, **hydroxyurea (raises HbF)**, transfusion, new agents (voxelotor stabilises the R form).",
        "**Thalassaemias are quantitative defects: α-thalassaemia** (gene deletions; 4 genes — silent carrier → HbH disease → **Hb Bart's hydrops fetalis**) and **β-thalassaemia** (point mutations; minor = mild microcytic anaemia with **raised HbA₂**, major = transfusion-dependent from ~6 months, when the switch from γ to β occurs, with **extramedullary haematopoiesis and iron overload**).",
        "Distinguish from **iron-deficiency anaemia**: both are microcytic, but thalassaemia has **normal or high iron/ferritin, a high red-cell count, an abnormal electrophoresis/HPLC** — a standard exam differential."
      ],
      cn: "三种正常血红蛋白比例＋HbF 不结合 2,3-BPG（P50 更低）；镰状细胞是 β6 谷氨酸→缬氨酸的『质』变，地中海贫血是『量』变；与缺铁性贫血的鉴别要点。" },
    { h: "6 · Methaemoglobinaemia and carbon monoxide", hcn: "高铁血红蛋白血症与 CO 中毒",
      points: [
        "**Methaemoglobin contains Fe³⁺, which cannot bind oxygen at all**; worse, the remaining Fe²⁺ subunits bind their oxygen more tightly → **the curve shifts left** → tissue delivery falls twice over.",
        "Normally **< 1–2 %** of haemoglobin, kept low by **cytochrome b5 reductase (NADH)**. Causes: **congenital** (reductase deficiency, or HbM variants) and above all **acquired — nitrites and nitrates (well water in infants, 'blue baby'), local anaesthetics (benzocaine, prilocaine), dapsone, sulfonamides, aniline dyes, chlorates**.",
        "Clinical picture: **chocolate-brown blood that does not turn red in air, central cyanosis with a NORMAL pO₂, and a pulse oximeter stuck around 85 %** — the saturation gap is diagnostic. Symptoms above ~15 %, life-threatening above 50–70 %.",
        "**Treatment: methylene blue** — it is reduced by **NADPH-methaemoglobin reductase using NADPH from the pentose phosphate pathway** and then reduces Fe³⁺; **therefore it does not work, and is dangerous, in G6PD deficiency**, where ascorbate or exchange transfusion is used instead. (Note the neat exam link between three topics.)",
        "**Carbon monoxide**: binds Fe²⁺ **200–250× more strongly than O₂**, and additionally **shifts the curve of the remaining subunits to the left** — so the patient is severely hypoxic while **pO₂ and the ordinary pulse oximeter look normal** and the skin is classically **cherry-red**. Diagnosis: **CO-oximetry (carboxyhaemoglobin)**; treatment: **100 % oxygen, hyperbaric oxygen** in severe cases (half-life of COHb: 4–5 h in air, ~1 h on 100 % O₂, ~20 min hyperbaric).",
        "Also mention **sulfhaemoglobin** (irreversible, no treatment) and **cyanide**, which does not touch haemoglobin but blocks cytochrome oxidase — venous blood then stays bright red (topic 10A)."
      ],
      cn: "高铁血红蛋白：Fe³⁺ 不能载氧且使曲线左移；巧克力色血、发绀但 pO₂ 正常、血氧仪卡在 85%；亚甲蓝解毒但 G6PD 缺乏者禁用（联系前一题）。CO：亲和力 200–250 倍、樱桃红、需 CO-血氧定量法。" }
  ],
  numbers: [
    "Erythrocyte lifespan **120 days**; 90 % glycolysis, ~10 % pentose phosphate pathway",
    "**P₅₀ HbA 26 mmHg (3.5 kPa); HbF ~19 mmHg; myoglobin 2.8 mmHg**",
    "CO₂ transport: **70 % bicarbonate, 20–25 % carbamate, 5–10 % dissolved**",
    "Blood gases: pO₂ **10.6–13.3 kPa**, pCO₂ **4.7–6.0 kPa**, SaO₂ **95–98 %**, Hb **135–175 (M) / 120–160 (F) g/L**",
    "Methaemoglobin normally **< 1–2 %**; CO affinity **200–250×** that of O₂"
  ],
  clinic: [
    "**G6PD deficiency** — Heinz bodies, bite cells, drug-induced haemolysis; methylene blue contraindicated",
    "**Sickle-cell disease** — vaso-occlusive crises; hydroxyurea works by raising **HbF**",
    "**β-thalassaemia major** — presents at ~6 months (γ→β switch), iron overload from transfusions",
    "**Methaemoglobinaemia** — saturation gap, chocolate-brown blood, methylene blue",
    "**Carbon monoxide poisoning** — cherry-red skin, normal pO₂, treat with 100 % or hyperbaric oxygen"
  ],
  traps: [
    "Oxygen binding is **oxygenation, not oxidation** — the iron remains Fe²⁺",
    "2,3-BPG binds between the **β chains** and stabilises the **T (deoxy)** form; HbF binds it poorly",
    "CO₂ is carried on the **N-terminal amino groups**, never on the haem iron",
    "In CO poisoning and methaemoglobinaemia the **pO₂ is normal** — only the oxygen content is low",
    "Bohr effect = the effect of H⁺/CO₂ on **oxygen binding**; Haldane effect = the effect of oxygenation on **CO₂ binding**"
  ],
  terms: [
    ["cooperativity", "协同效应"], ["T / R state", "紧张态/松弛态"], ["2,3-bisphosphoglycerate", "2,3-二磷酸甘油酸"],
    ["Bohr effect", "波尔效应"], ["Haldane effect", "霍尔丹效应"], ["chloride shift", "氯离子转移"],
    ["carbamate", "氨基甲酸血红蛋白"], ["fetal haemoglobin", "胎儿血红蛋白"], ["sickle-cell disease", "镰状细胞病"],
    ["thalassaemia", "地中海贫血"], ["methaemoglobin", "高铁血红蛋白"], ["carboxyhaemoglobin", "碳氧血红蛋白"]
  ]
}
});
