window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 5,
a: {
  titleEN: "Pentose phosphate pathway. Mechanisms of saccharide conversion. Importance of the pathway for cell activity.",
  titleCN: "磷酸戊糖途径 · 糖的相互转变机制 · 对细胞活动的意义",
  opener: "The pentose phosphate pathway is a **cytosolic** alternative to glycolysis whose purpose is **not ATP** but two products: **NADPH for reductive biosynthesis and antioxidant defence, and ribose-5-phosphate for nucleotides**.",
  openerCN: "磷酸戊糖途径在胞质进行，目的不是产 ATP，而是两个产物：供还原性合成与抗氧化的 NADPH，以及合成核苷酸用的 5-磷酸核糖。",
  spine: [
    "定位、起点与两个目的产物",
    "氧化不可逆阶段三步（G6PD 是限速酶）",
    "非氧化可逆阶段：转酮酶与转醛酶（C 原子的搬运规则）",
    "四种运行模式（按细胞对 NADPH/核糖的需求）",
    "调节：NADP⁺/NADPH 比值",
    "NADPH 的六大用途与组织分布",
    "临床：G6PD 缺乏症、转酮酶与硫胺素、糖醛酸途径与多元醇途径"
  ],
  blocks: [
    { h: "1 · Overview and the oxidative branch", hcn: "总览与氧化阶段（不可逆）",
      points: [
        "Location **cytosol**; substrate **glucose-6-phosphate**; **no ATP is made or consumed**. Overall for the complete oxidative route: **3 G6P + 6 NADP⁺ → 3 CO₂ + 6 NADPH + 2 fructose-6-P + glyceraldehyde-3-P**.",
        "**Step 1 — glucose-6-phosphate dehydrogenase (G6PD): G6P + NADP⁺ → 6-phosphoglucono-δ-lactone + NADPH.** This is the **rate-limiting, irreversible and only regulated step**; its regulator is simply the **NADP⁺/NADPH ratio** (NADPH is a competitive inhibitor).",
        "**Step 2 — lactonase** hydrolyses the lactone to 6-phosphogluconate.",
        "**Step 3 — 6-phosphogluconate dehydrogenase**: oxidative **decarboxylation** → **ribulose-5-phosphate + CO₂ + a second NADPH**.",
        "So: **2 NADPH and 1 CO₂ per glucose-6-P**; the C1 of glucose is the carbon released as CO₂.",
        "Ribulose-5-P is then either **isomerised to ribose-5-phosphate** (for nucleotides) or **epimerised to xylulose-5-phosphate** (for the non-oxidative branch)."
      ],
      cn: "氧化阶段三步：G6PD（限速、产 NADPH）→内酯酶→6-磷酸葡糖酸脱氢酶（脱羧、再产 NADPH）。每分子 G6P 得 2 NADPH ＋ 1 CO₂。" },
    { h: "2 · The non-oxidative branch — transketolase and transaldolase", hcn: "非氧化阶段：转酮酶与转醛酶",
      points: [
        "All these reactions are **freely reversible**, which is what lets the cell run the pathway in whichever direction it needs — the link between C3, C4, C5, C6 and C7 sugars.",
        "**Transketolase transfers a 2-carbon unit (glycolaldehyde) and requires thiamine pyrophosphate (TPP) + Mg²⁺.**",
        "**Transaldolase transfers a 3-carbon unit (dihydroxyacetone)** via a Schiff base with a lysine; **no coenzyme**.",
        "The three reactions to memorise: **C5 + C5 → C3 + C7** (transketolase: xylulose-5-P + ribose-5-P → glyceraldehyde-3-P + sedoheptulose-7-P); **C7 + C3 → C4 + C6** (transaldolase → erythrose-4-P + fructose-6-P); **C5 + C4 → C3 + C6** (transketolase → glyceraldehyde-3-P + fructose-6-P).",
        "The exit products **fructose-6-phosphate and glyceraldehyde-3-phosphate are glycolytic intermediates**, so the pathway can hand carbon back to glycolysis — or take it from gluconeogenesis in the reverse direction.",
        "**Erythrose-4-phosphate** additionally feeds the shikimate pathway in plants and bacteria (aromatic amino acids) — a reason why we must take Phe and Trp in the diet."
      ],
      cn: "转酮酶搬 2 碳（需 TPP），转醛酶搬 3 碳（无辅酶）。三个反应式 C5+C5→C3+C7、C7+C3→C4+C6、C5+C4→C3+C6 背下来就够用。" },
    { h: "3 · Four modes of operation", hcn: "四种运行模式（按需求）",
      points: [
        "**(a) Need ribose only** (dividing cells, no NADPH demand): run the **non-oxidative branch in reverse** — from fructose-6-P and glyceraldehyde-3-P make ribose-5-P without producing NADPH.",
        "**(b) Need NADPH only** (adipose tissue, adrenal cortex, erythrocyte under oxidative stress): the oxidative branch runs and the pentoses are recycled through the non-oxidative branch back to F6P/GAP → glycolysis or gluconeogenesis.",
        "**(c) Need both equally** (most cells): the oxidative branch alone covers it — 2 NADPH + 1 ribose-5-P per G6P.",
        "**(d) Need NADPH and ATP**: oxidative branch, then F6P and GAP continue **down glycolysis to pyruvate**.",
        "This flexibility is exactly the answer to the exam phrase *importance for cell activity*: the pathway lets one substrate serve reduction, nucleotide synthesis and energy depending on demand."
      ],
      cn: "四种模式是本题的『理解分』：只要核糖→非氧化逆行；只要 NADPH→戊糖回收；两者都要→氧化支；还要 ATP→接糖酵解。" },
    { h: "4 · What NADPH is for, and where the pathway is active", hcn: "NADPH 的用途与组织分布",
      points: [
        "**NADPH ≠ NADH:** NADPH carries **reducing power for synthesis and defence**, NADH carries **electrons to the respiratory chain for ATP**; the cell keeps NADPH mostly reduced and NAD⁺ mostly oxidised.",
        "Uses: **(1) reductive biosynthesis** — fatty acids, cholesterol, steroid hormones (**liver, adipose tissue, mammary gland, adrenal cortex, gonads** have a very active pathway); **(2) regeneration of glutathione** via glutathione reductase — the erythrocyte's lifeline; **(3) NADPH oxidase respiratory burst** in phagocytes; **(4) cytochrome P450 monooxygenases** (biotransformation, steroidogenesis, vitamin D hydroxylation); **(5) NO synthase**; **(6) thioredoxin reductase, folate reductase, and the polyol pathway (aldose reductase)**.",
        "Erythrocytes route **~10 % of glucose** through the pathway (up to 90-fold more under oxidative stress) — they have no other source of NADPH.",
        "Regulation is short: **the only control point is G6PD, driven by the NADP⁺/NADPH ratio**; long-term, insulin and a high-carbohydrate diet induce G6PD together with the lipogenic enzymes.",
        "Related interconversion pathways worth naming as *mechanisms of saccharide conversion*: the **uronic acid pathway** (G6P → UDP-glucuronate for conjugation and glycosaminoglycans; in man it ends as xylulose — we cannot make ascorbate), the **polyol pathway** (glucose → sorbitol → fructose; how the seminal vesicle makes fructose for sperm and how the diabetic lens is damaged), and **fructose/galactose entry** (topic 7A)."
      ],
      cn: "NADPH 六大用途要能列全；红细胞与肾上腺/脂肪/肝的分布差别；调节只有 G6PD 一个点。顺带提糖醛酸途径与多元醇途径，正好回应『糖的转变机制』。" },
    { h: "5 · Clinical — G6PD deficiency and thiamine", hcn: "临床：G6PD 缺乏症与硫胺素",
      points: [
        "**Glucose-6-phosphate dehydrogenase deficiency is the commonest human enzymopathy (~400 million people), X-linked**, frequent where malaria is/was endemic because it **protects against Plasmodium falciparum**.",
        "Mechanism: no NADPH → glutathione cannot be regenerated → haemoglobin is oxidised and precipitates as **Heinz bodies**, the membrane is damaged → **acute haemolytic anaemia**, with **bite cells** on the smear.",
        "Triggers: **fava beans (favism)**, drugs — **primaquine, sulfonamides, nitrofurantoin, dapsone**, naphthalene, and **infection** (the commonest trigger). Also **neonatal jaundice**.",
        "**Transketolase activity in erythrocytes with and without added TPP** is the functional test of **thiamine (B1) deficiency** — a classic exam link between this pathway and vitamins.",
        "Other links: **Wernicke–Korsakoff** (transketolase + PDH + α-KGDH all TPP-dependent); tumour cells up-regulate the pathway for nucleotides and NADPH (a target of new drugs); **6-phosphogluconate dehydrogenase** is inhibited in some anti-cancer strategies."
      ],
      cn: "G6PD 缺乏症：X 连锁、最常见酶病、抗疟、诱因（蚕豆/伯氨喹/磺胺/感染）、Heinz 小体。红细胞转酮酶活性测硫胺素缺乏是常考细节。" }
  ],
  numbers: [
    "**2 NADPH + 1 CO₂ + 1 ribose-5-P** per glucose-6-phosphate through the oxidative branch",
    "Erythrocyte: **~10 %** of glucose normally, up to **90×** more under oxidative stress",
    "G6PD deficiency affects **~400 million** people worldwide — the most common enzyme defect",
    "**No ATP** is made or consumed in the pathway",
    "Adipose tissue, liver, adrenal cortex, mammary gland, gonads, erythrocyte = the tissues with high activity"
  ],
  clinic: [
    "**G6PD deficiency** — favism, drug-induced haemolysis, Heinz bodies, neonatal jaundice",
    "**Thiamine deficiency** — measured as erythrocyte transketolase activation by TPP",
    "**Diabetic cataract and neuropathy** through the polyol pathway, which also consumes NADPH",
    "Tumours: high pathway flux for nucleotide synthesis and redox defence",
    "Neonatal screening for **galactosaemia and G6PD** in some countries"
  ],
  traps: [
    "The pathway makes **NADPH, not NADH**, and produces **no ATP**",
    "Only the **oxidative** branch is irreversible — the non-oxidative branch runs both ways",
    "The pathway is **cytosolic**, in the same compartment as fatty-acid synthesis that consumes its NADPH",
    "Transketolase needs **TPP**; transaldolase needs **no coenzyme** — do not swap them",
    "Ribose-5-phosphate can also be made **without** the oxidative branch, which is why a G6PD-deficient patient still makes nucleotides"
  ],
  terms: [
    ["pentose phosphate pathway", "磷酸戊糖途径"], ["NADPH", "还原型辅酶 II"], ["transketolase", "转酮酶"],
    ["transaldolase", "转醛酶"], ["ribose-5-phosphate", "5-磷酸核糖"], ["glutathione reductase", "谷胱甘肽还原酶"],
    ["Heinz bodies", "Heinz 小体"], ["favism", "蚕豆病"], ["uronic acid pathway", "糖醛酸途径"],
    ["polyol pathway", "多元醇途径"]
  ]
},
b: {
  titleEN: "Biochemistry of skin — composition and function, sweat, melanogenesis. Porphyrin phototoxicity. Biochemical aspects of pregnancy and lactation. Composition of breast milk.",
  titleCN: "皮肤生物化学 · 汗液 · 黑色素生成 · 卟啉光毒性 · 妊娠与泌乳的生化 · 母乳成分",
  opener: "The skin is a **metabolically active barrier**: keratin and the lipid mortar of the stratum corneum make it waterproof, melanin makes it UV-proof, and it is also the site of **vitamin D synthesis** and of an active sweat-based thermoregulation.",
  openerCN: "皮肤是有代谢活性的屏障：角蛋白与角质层脂质构成防水屏障，黑色素抵御紫外线，同时也是维生素 D 合成与汗液体温调节的场所。",
  spine: [
    "皮肤的层次与组成：角蛋白、角质层脂质屏障、天然保湿因子",
    "真皮的细胞外基质（胶原、弹性蛋白、透明质酸）与维生素 D 合成",
    "汗腺与汗液成分（含囊性纤维化的氯离子试验）",
    "黑色素生成：酪氨酸酶通路、真黑素/褐黑素、调节与白化病",
    "卟啉光毒性：机制与临床（卟啉病、光动力疗法）",
    "妊娠的代谢改变与胎盘激素",
    "泌乳的激素调控与母乳成分（对比牛奶）"
  ],
  blocks: [
    { h: "1 · Composition of skin", hcn: "皮肤的组成",
      points: [
        "**Epidermis** — stratified keratinising epithelium; the keratinocyte differentiates upward and dies into a **corneocyte**: nucleus and organelles are lost, **keratin (an intermediate filament, rich in cysteine → disulfide bonds)** is cross-linked by **transglutaminase** into a cornified envelope (involucrin, loricrin, filaggrin).",
        "The **permeability barrier is lipid**: lamellar bodies release **ceramides (~50 %), cholesterol and free fatty acids** into the intercellular space — the 'brick and mortar' model. **Filaggrin** is degraded to the **natural moisturising factor** (urea, PCA, amino acids); its loss-of-function mutation causes **atopic dermatitis and ichthyosis vulgaris**.",
        "**Acid mantle: pH 4.5–5.5** from lactate, free fatty acids and urocanic acid — antimicrobial and needed by the barrier enzymes. Sebum from sebaceous glands = triacylglycerols, wax esters, **squalene**.",
        "**Dermis** — the mechanical part: **collagen I and III** (~70 % of dry weight), **elastin**, **hyaluronan** and proteoglycans holding water; degraded by **matrix metalloproteinases**, which UV strongly induces (photoageing — topic 6B).",
        "Metabolic functions: **vitamin D₃ from 7-dehydrocholesterol under UV-B**, thermoregulation, immunological surveillance (Langerhans cells), a large store of water and electrolytes, and biotransformation (skin CYPs)."
      ],
      cn: "表皮=角蛋白＋角质层脂质（神经酰胺/胆固醇/游离脂肪酸）＋天然保湿因子；真皮=胶原/弹性蛋白/透明质酸；酸性外膜 pH 4.5–5.5；别忘了维生素 D 合成。" },
    { h: "2 · Sweat and thermoregulation", hcn: "汗液与体温调节",
      points: [
        "**Eccrine glands** (all over the body, cholinergic sympathetic innervation) produce true sweat; **apocrine glands** (axilla, genital) secrete a protein/lipid-rich fluid that bacteria convert into odour.",
        "Two-step mechanism: an **isotonic primary secretion** in the coil, then **reabsorption of NaCl in the duct (ENaC and CFTR)** without water → the sweat that reaches the surface is **hypotonic**.",
        "Composition: >99 % water; **Na⁺ 10–60 mmol/L, Cl⁻ 10–60 mmol/L, K⁺ 5–15 mmol/L**, plus **lactate, urea, ammonia, amino acids** and traces of glucose; pH 4–6.5. Volume 0.5 L/day at rest, up to **1.5–2 L/hour** in heat.",
        "**Cystic fibrosis: the CFTR chloride channel fails, so chloride cannot be reabsorbed → sweat chloride > 60 mmol/L — the classic sweat test**; the child 'tastes salty'.",
        "Losses matter clinically: heavy sweating causes **hypotonic loss of water with NaCl** → hyponatraemia if replaced with pure water; evaporation of 1 L removes ~2400 kJ of heat."
      ],
      cn: "汗腺两类；两步机制（等渗初分泌→导管重吸收 NaCl→低渗汗）；囊性纤维化汗液氯>60 mmol/L 是必考。" },
    { h: "3 · Melanogenesis", hcn: "黑色素生成",
      points: [
        "Melanin is made in **melanosomes of melanocytes** (neural crest origin) and transferred to keratinocytes; **the number of melanocytes is the same in all races — the difference is the amount, type and packaging of melanin**.",
        "**Pathway: tyrosine → (tyrosinase, a copper enzyme) → DOPA → (tyrosinase) → dopaquinone**, then either spontaneous cyclisation → **eumelanin** (brown-black, photoprotective) or, **with cysteine, → cysteinyl-DOPA → pheomelanin** (red-yellow, generates radicals under UV and is therefore less protective).",
        "**Tyrosinase is the key and rate-limiting enzyme; its absence = oculocutaneous albinism type 1** (white skin and hair, nystagmus, photophobia, high skin-cancer risk). Note tyrosinase is a **different enzyme from tyrosine hydroxylase** of catecholamine synthesis, though both start from tyrosine.",
        "Regulation: **UV → DNA damage → p53 → POMC in keratinocytes → α-MSH → MC1R on melanocytes → cAMP → MITF** → more tyrosinase = tanning. **MC1R variants** give red hair and freckles; **ACTH shares the MSH sequence**, which is why **Addison disease causes hyperpigmentation**.",
        "Clinical: **vitiligo** (autoimmune loss of melanocytes), **melasma** (oestrogen/pregnancy), **hydroquinone and kojic acid** inhibit tyrosinase, and melanin protects by absorbing UV and quenching radicals — its lack raises the risk of **melanoma and non-melanoma skin cancer**."
      ],
      cn: "酪氨酸→（酪氨酸酶，含铜）→DOPA→多巴醌→真黑素/褐黑素。酪氨酸酶缺乏=白化病；α-MSH/MC1R/cAMP 调节晒黑；ACTH 与 MSH 同源解释 Addison 病色素沉着。" },
    { h: "4 · Porphyrin phototoxicity", hcn: "卟啉的光毒性",
      points: [
        "Porphyrins have a **large conjugated tetrapyrrole system** that absorbs strongly at **~400 nm (the Soret band)**; the excited porphyrin transfers energy to O₂ → **singlet oxygen ¹O₂** and other ROS → lipid peroxidation of membranes and lysosomes → **blisters, erosions, fragile skin, scarring**.",
        "This is a **type II photodynamic (photosensitising) reaction — it requires porphyrin, light and oxygen**; heme itself is not phototoxic because the iron quenches the excited state.",
        "Porphyrias with skin involvement: **porphyria cutanea tarda (uroporphyrinogen decarboxylase, the commonest — blisters on the back of the hands, hypertrichosis, associated with alcohol, HCV, iron)**, **erythropoietic protoporphyria (ferrochelatase — burning pain immediately on light exposure, no blisters)**, **congenital erythropoietic porphyria (Günther)**. The **acute hepatic porphyrias (AIP)** have neurovisceral attacks and **no photosensitivity** — the distinction the examiner wants (topic 14A).",
        "Diagnosis: **red fluorescence of urine/plasma under Wood's lamp (400 nm)**; treatment principles: avoid light and triggers, phlebotomy or low-dose chloroquine in PCT, β-carotene/afamelanotide in EPP.",
        "The same chemistry is used therapeutically: **photodynamic therapy** with 5-aminolevulinic acid (accumulates as protoporphyrin IX in tumour cells) and **phototherapy of neonatal jaundice** (bilirubin, a porphyrin-derived pigment, is isomerised by blue 450 nm light into water-soluble lumirubin)."
      ],
      cn: "光毒性=卟啉吸光(400 nm Soret 带)→能量传给氧→单线态氧→膜损伤，必须『卟啉＋光＋氧』三者同时存在。皮肤型 vs 急性型卟啉病的区别是考点；光动力疗法与新生儿蓝光治疗是同一化学的正用。" },
    { h: "5 · Biochemistry of pregnancy", hcn: "妊娠的生化改变",
      points: [
        "**Placental hormones: hCG** (maintains the corpus luteum in the first ~10 weeks, the basis of the pregnancy test, peaks at 8–10 weeks), **progesterone** (from the corpus luteum, then the placenta — uterine quiescence), **oestrogens** (made in the **feto-placental unit**: the fetal adrenal supplies DHEA-S, the fetal liver 16α-hydroxylates it, the placenta aromatises it to **oestriol** — the placenta lacks 17α-hydroxylase, the fetus lacks aromatase, so neither can do it alone), and **human placental lactogen (hPL)**.",
        "**Metabolically pregnancy is a diabetogenic state:** hPL, progesterone, cortisol and prolactin cause **insulin resistance** in the mother so that glucose is spared for the fetus; the mother switches to **fatty acids and ketone bodies ('accelerated starvation')**. When β cells cannot compensate → **gestational diabetes** (screened by OGTT at 24–28 weeks).",
        "Other changes: plasma volume rises **~40 %** → **dilutional anaemia**, higher demand for **iron (~1000 mg total)** and **folate** (neural tube defects — supplement periconceptionally); **ALP rises (placental isoenzyme)**, thyroid-binding globulin and total T4 rise (hCG has weak TSH activity), fibrinogen and clotting factors rise (hypercoagulability), GFR rises ~50 % so **creatinine and urea fall**.",
        "Fetal supply: glucose crosses by **facilitated diffusion (GLUT1)**, amino acids by **active transport**, fatty acids limited; the fetus makes **HbF (α₂γ₂)** which **does not bind 2,3-BPG** and therefore has higher oxygen affinity — the mechanism of placental oxygen transfer (topic 13B).",
        "Screening: **AFP, hCG, unconjugated oestriol, inhibin A** (the triple/quadruple test), **PAPP-A** in the first trimester, and today **cell-free fetal DNA**."
      ],
      cn: "胎盘激素四个（hCG、孕酮、雌三醇经胎儿-胎盘单位、hPL）；妊娠=生理性胰岛素抵抗（『加速饥饿』）；血容量↑、铁与叶酸需求↑、ALP↑、GFR↑肌酐↓；HbF 不结合 2,3-BPG。" },
    { h: "6 · Lactation and the composition of breast milk", hcn: "泌乳与母乳成分",
      points: [
        "Hormonal control: **prolactin makes milk (its release is tonically inhibited by dopamine; suckling removes the inhibition)**, **oxytocin ejects it** (myoepithelial contraction, the let-down reflex). During pregnancy high **oestrogen and progesterone block lactation**; their fall after delivery starts it (lactogenesis II on days 2–4).",
        "**Colostrum** (first 3–5 days): little fat and lactose, **very rich in protein, secretory IgA, lactoferrin, lysozyme, leukocytes, oligosaccharides**, vitamin A — immunological rather than nutritional.",
        "**Mature milk ≈ 280 kJ (70 kcal)/100 mL: lactose ~7 g/100 mL (the main carbohydrate, made by lactose synthase = galactosyltransferase + α-lactalbumin), fat ~4 g/100 mL (the main energy source, rich in DHA/ARA, delivered as milk fat globules), protein only ~0.9–1.1 g/100 mL.**",
        "**Human vs cow's milk — the exam comparison:** human milk has **three times less protein**, and its whey:casein ratio is **~60:40 versus 20:80** in cow's milk (so it curdles finely and is easily digested); its main whey protein is **α-lactalbumin, not β-lactoglobulin** (a common allergen); it contains far **more lactose and oligosaccharides (HMOs — prebiotic, bifidogenic)**, less calcium, phosphate and sodium (a lower renal solute load), and **more cholesterol**.",
        "Protective components: **secretory IgA**, **lactoferrin** (binds iron away from bacteria), lysozyme, complement, macrophages and lymphocytes, growth factors, **bifidus factor**. Iron content is low but its **bioavailability is high (~50 %)**.",
        "Deficient in: **vitamin K (give at birth) and vitamin D (supplement)**; also low iron after ~6 months. Maternal cost ~2000–2500 kJ/day; **drugs, alcohol and lipophilic xenobiotics pass into milk**."
      ],
      cn: "催乳素造奶（多巴胺抑制）、催产素排奶；初乳富含 sIgA/乳铁蛋白；成熟乳 70 kcal/100 mL、乳糖 7 g、脂肪 4 g、蛋白仅 ~1 g。人乳 vs 牛乳对比（蛋白少、乳清:酪蛋白 60:40、乳糖多、HMO 多）是标准追问，别忘了缺维生素 K 与 D。" }
  ],
  numbers: [
    "Skin surface pH **4.5–5.5**; stratum corneum lipids: ceramides ~50 %, cholesterol, free fatty acids",
    "Sweat: Na⁺/Cl⁻ **10–60 mmol/L**, up to **1.5–2 L/h**; **cystic fibrosis sweat chloride > 60 mmol/L**",
    "Porphyrin Soret band **~400 nm**; neonatal phototherapy uses **~450 nm blue light**",
    "Pregnancy: plasma volume **+40 %**, GFR **+50 %**, iron need **~1000 mg**, gestational OGTT at **24–28 weeks**",
    "Mature milk **~70 kcal/100 mL**: lactose **7 g**, fat **4 g**, protein **~1 g** per 100 mL; whey:casein **60:40**"
  ],
  clinic: [
    "**Sweat chloride test** for cystic fibrosis; **filaggrin mutation** in atopic dermatitis",
    "**Albinism (tyrosinase)**, **vitiligo**, **melasma**; hyperpigmentation in **Addison disease** (ACTH/MSH)",
    "**Porphyria cutanea tarda** — blisters on sun-exposed hands, dark urine fluorescing red; alcohol/HCV/iron as triggers",
    "**Gestational diabetes**; **HELLP/pre-eclampsia** with rising liver enzymes and low platelets",
    "**Vitamin K prophylaxis** and **vitamin D supplementation** for breastfed newborns"
  ],
  traps: [
    "All races have the **same number of melanocytes** — only melanin type and amount differ",
    "**Tyrosinase ≠ tyrosine hydroxylase** — different enzymes, different pathways, both starting from tyrosine",
    "Photosensitivity needs porphyrin **plus light plus oxygen**; the acute hepatic porphyrias are **not** photosensitive",
    "Sweat reaching the surface is **hypotonic** — the primary secretion is isotonic",
    "Human milk has **less protein and more lactose** than cow's milk — never say it is 'more concentrated'"
  ],
  terms: [
    ["stratum corneum", "角质层"], ["ceramide", "神经酰胺"], ["filaggrin", "聚丝蛋白"],
    ["eccrine / apocrine gland", "小汗腺/大汗腺"], ["tyrosinase", "酪氨酸酶"], ["eumelanin / pheomelanin", "真黑素/褐黑素"],
    ["singlet oxygen", "单线态氧"], ["photodynamic therapy", "光动力疗法"], ["feto-placental unit", "胎儿-胎盘单位"],
    ["human placental lactogen", "人胎盘催乳素"], ["colostrum", "初乳"], ["secretory IgA", "分泌型 IgA"]
  ]
}
});
