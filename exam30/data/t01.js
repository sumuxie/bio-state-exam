window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 1,
a: {
  titleEN: "Structure and function of enzymes. Thermodynamics of catalysis. Regulation of enzyme activity. Kinetics and inhibition. Classification.",
  titleCN: "酶的结构与功能 · 催化的热力学 · 活性调节 · 动力学与抑制 · 分类",
  opener: "An enzyme is a biological catalyst — a protein, or exceptionally an RNA (**ribozyme**) — that accelerates a reaction by lowering its **activation energy**, is not consumed, and does **not** change the equilibrium of the reaction.",
  openerCN: "酶是生物催化剂：绝大多数是蛋白质，少数是核酶；它降低活化能，本身不被消耗，也不改变反应的平衡位置。",
  spine: [
    "定义、活性中心、辅因子、专一性 (definition, active site, cofactors, specificity)",
    "热力学：降低 Ea、稳定过渡态、不改变 ΔG 与 Keq (thermodynamics)",
    "动力学：Michaelis–Menten、Km、Vmax、kcat、Lineweaver–Burk",
    "抑制：竞争性 / 非竞争性 / 反竞争性 / 不可逆",
    "调节：别构、共价修饰、酶原激活、同工酶、酶量 (regulation)",
    "EC 六（七）大类 + 每类举例 (classification with examples)",
    "临床：诊断酶学与酶抑制剂药物 (clinical enzymology)"
  ],
  blocks: [
    { h: "1 · Enzyme, active site, cofactors", hcn: "酶的本质、活性中心与辅因子",
      points: [
        "Most enzymes are **proteins**; a few are catalytic RNAs — **ribozymes** (peptidyl transferase of the ribosome, RNase P, self-splicing introns).",
        "**Holoenzyme = apoenzyme (protein part) + cofactor.** Cofactor is either a **metal ion** (Zn²⁺ in carbonic anhydrase and alcohol dehydrogenase, Fe in catalase, Mg²⁺ for all kinases) or an organic **coenzyme** (NAD⁺, FAD, CoA, TPP, PLP, biotin, THF — nearly all derived from **vitamins**).",
        "**Prosthetic group** = firmly / covalently bound cofactor (FAD in succinate dehydrogenase, haem in catalase). **Cosubstrate** = binds and leaves each cycle (NAD⁺ → NADH) and must be regenerated elsewhere.",
        "**Active site**: a small cleft, mostly hydrophobic, built from residues far apart in the sequence but close in space; it has a **binding subsite** (specificity) and a **catalytic subsite**. Typical catalytic residues: Ser, His, Asp (the **catalytic triad** of chymotrypsin, trypsin, elastase), Cys, Lys, Glu.",
        "**Specificity**: absolute (urease → urea only), group specificity (chymotrypsin cleaves after aromatic residues), **stereospecificity** (only L-amino acids, only D-sugars) and reaction specificity.",
        "Binding models: **lock and key** (Fischer) → superseded by **induced fit** (Koshland) — hexokinase closes around glucose and thereby excludes water, which prevents ATP being hydrolysed uselessly."
      ],
      cn: "先说清楚：酶=蛋白（少数核酶）；全酶=脱辅酶+辅因子；活性中心分结合部位与催化部位；专一性四种；诱导契合优于锁钥。" },
    { h: "2 · Thermodynamic aspects", hcn: "催化的热力学",
      points: [
        "The enzyme lowers the **activation energy ΔG‡**, i.e. it lowers the energy barrier of the **transition state** — it does not change the energy of substrate or product.",
        "Key sentence for the examiner: the enzyme binds the **transition state more tightly than the substrate**; the binding energy released is what pays for catalysis (this is why transition-state analogues are the strongest inhibitors).",
        "It **does not change ΔG, ΔG°' or the equilibrium constant Keq**, and it cannot make an endergonic reaction spontaneous. It accelerates the forward and reverse directions equally — equilibrium is reached faster, not shifted.",
        "An unfavourable reaction is driven by **energetic coupling**, most often with ATP hydrolysis (**ΔG°' = −30.5 kJ/mol**); only the **sum** of the coupled ΔG must be negative.",
        "Sources of the acceleration: **proximity and orientation** effect (loss of entropy is paid by binding), **desolvation**, **strain/distortion** of the substrate, acid–base catalysis, covalent catalysis, metal-ion catalysis.",
        "Dependence on conditions: rate roughly doubles per 10 °C up to the optimum (**37–40 °C** in man), then falls steeply because of **denaturation**; each enzyme has a **pH optimum** (pepsin 1.5–2, most enzymes ≈ 7.4, alkaline phosphatase ≈ 10)."
      ],
      cn: "核心一句：只降 Ea、稳定过渡态，绝不改变 ΔG/Keq；不利反应靠与 ATP 水解偶联；温度、pH 曲线呈钟形。" },
    { h: "3 · Enzyme kinetics", hcn: "酶促反应动力学",
      points: [
        "**Michaelis–Menten equation: v = Vmax·[S] / (Km + [S])** — a rectangular hyperbola, derived under the **steady-state** assumption (Briggs–Haldane) with [S] ≫ [E].",
        "**Km = the substrate concentration at ½ Vmax**, units mol/L. **Low Km = high affinity.** Km is a property of the enzyme–substrate pair and is **independent of enzyme concentration**. Most enzymes work in vivo at [S] ≈ Km, so the rate follows substrate supply.",
        "**Vmax = kcat · [E]total**; **kcat** (turnover number, s⁻¹) is how many substrate molecules one active site converts per second. **kcat/Km = catalytic efficiency**; at 10⁸–10⁹ M⁻¹s⁻¹ the enzyme is **diffusion-limited** = catalytically perfect (carbonic anhydrase, triose-phosphate isomerase, catalase).",
        "**Lineweaver–Burk** double-reciprocal plot: 1/v against 1/[S]; y-intercept **1/Vmax**, x-intercept **−1/Km**, slope Km/Vmax — this is the plot used to recognise the type of inhibition.",
        "**Allosteric enzymes do not obey Michaelis–Menten**: sigmoidal curve, **K₀.₅** instead of Km, cooperativity described by the **Hill coefficient** (PFK-1, ATCase, glycogen phosphorylase).",
        "Textbook clinical pair: **hexokinase Km ≈ 0.1 mmol/L** (saturated always, inhibited by glucose-6-P) versus **glucokinase Km ≈ 10 mmol/L**, sigmoidal, not inhibited by G6P — the liver's glucose **sensor**."
      ],
      cn: "会写米氏方程、会解释 Km/Vmax/kcat、会画双倒数图；别忘了别构酶是 S 形曲线，用 K0.5 与 Hill 系数。" },
    { h: "4 · Inhibition", hcn: "酶的抑制",
      points: [
        "**Competitive**: inhibitor resembles the substrate and binds the **active site**; apparent **Km ↑, Vmax unchanged**; can be overcome by raising [S]. Examples: **malonate** vs succinate dehydrogenase, **ethanol as antidote** in methanol poisoning (alcohol dehydrogenase), **statins** vs HMG-CoA reductase, **methotrexate** vs dihydrofolate reductase.",
        "**Non-competitive**: binds a site other than the active site, binds both E and ES; **Vmax ↓, Km unchanged**; not overcome by more substrate. Example: heavy metals (Pb²⁺, Hg²⁺) reacting with −SH groups.",
        "**Uncompetitive**: binds **only the ES complex**; **both Vmax and Km fall** by the same factor, so Lineweaver–Burk gives **parallel lines**. Example: lithium on inositol monophosphatase.",
        "**Irreversible / suicide inhibitors** (covalent bond): organophosphates and DFP on the Ser of **acetylcholinesterase**, **aspirin** acetylating Ser530 of cyclooxygenase, **penicillin** on transpeptidase, **allopurinol → oxypurinol** on xanthine oxidase, **5-fluorouracil** on thymidylate synthase.",
        "Physiological forms: **product inhibition** and **feedback (end-product) inhibition** of the first, committed, irreversible step of a pathway.",
        "Also mention **partially competitive / mixed inhibition** if the examiner pushes — mixed inhibitor binds E and ES with different affinity, so Km and Vmax both change."
      ],
      cn: "四种抑制记『Km/Vmax 怎么动』：竞争 Km↑；非竞争 Vmax↓；反竞争两个都↓（平行线）；不可逆共价——每种都要能举出药物例子。" },
    { h: "5 · Regulation of enzyme activity", hcn: "酶活性的调节机制",
      points: [
        "**Fast, seconds–minutes:** (a) **allosteric regulation** — effectors bind a regulatory site, e.g. **PFK-1** inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate;",
        "(b) **covalent modification, reversible** — above all **phosphorylation** (protein kinase A, AMPK) / dephosphorylation (phosphatases): phosphorylation switches **glycogen phosphorylase ON and glycogen synthase OFF**; also acetylation, methylation, ADP-ribosylation, adenylylation;",
        "(c) **proteolytic activation of a zymogen — irreversible**: trypsinogen → trypsin by **enteropeptidase**, pepsinogen (autocatalytic at low pH), chymotrypsinogen, prothrombin and the clotting cascade, procaspases, proinsulin;",
        "(d) **protein–protein interaction** (calmodulin–Ca²⁺, G proteins, regulatory subunits of PKA) and (e) **compartmentation** — the same metabolite pool is separated between mitochondrion and cytosol (β-oxidation vs fatty-acid synthesis).",
        "**Slow, hours–days: change of the amount of enzyme** — induction/repression of transcription (insulin induces glucokinase and fatty-acid synthase; glucocorticoids induce PEPCK and tyrosine aminotransferase; phenobarbital and ethanol induce CYP450) and regulated degradation by the **ubiquitin–proteasome** system.",
        "**Isoenzymes**: different proteins catalysing the same reaction with different kinetics and tissue distribution — **LDH₁–₅** (H₄ heart, M₄ skeletal muscle/liver), **creatine kinase MM / MB / BB**, ALP, hexokinase I–IV. Their pattern is what makes enzyme diagnostics organ-specific.",
        "**Multienzyme complexes** (pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, fatty-acid synthase) allow **substrate channelling** and coordinated regulation."
      ],
      cn: "回答顺序：快调（别构→共价修饰→酶原激活→蛋白互作→区隔化）→ 慢调（酶量：诱导/阻遏、降解）→ 同工酶 → 多酶复合体。" },
    { h: "6 · Classification — EC classes with examples", hcn: "国际分类（EC）与举例",
      points: [
        "**EC 1 Oxidoreductases** — transfer of electrons/hydrogen: lactate dehydrogenase, alcohol dehydrogenase, catalase, cytochrome c oxidase. Systematic pattern *donor : acceptor oxidoreductase*.",
        "**EC 2 Transferases** — transfer of a group: **aminotransferases ALT/AST** (PLP), **kinases** (hexokinase, PFK-1), glycogen phosphorylase, methyltransferases (SAM).",
        "**EC 3 Hydrolases** — cleavage with water: pepsin, trypsin, lipase, **alkaline phosphatase**, acetylcholinesterase, ATPases.",
        "**EC 4 Lyases (synthases)** — non-hydrolytic, non-oxidative cleavage, usually creating or saturating a double bond: aldolase, fumarase, **carbonic anhydrase**, pyruvate decarboxylase. **No ATP.**",
        "**EC 5 Isomerases** — phosphoglucose isomerase, triose-phosphate isomerase, phosphoglycerate **mutase**, epimerases, racemases.",
        "**EC 6 Ligases (synthetases)** — form a bond **with hydrolysis of ATP**: pyruvate carboxylase, acetyl-CoA carboxylase, glutamine synthetase, DNA ligase, aminoacyl-tRNA synthetase.",
        "**EC 7 Translocases** (class added in 2018) — move ions/molecules across a membrane, e.g. Na⁺/K⁺-ATPase. **EC number has 4 digits** = class . subclass . sub-subclass . serial number; LDH = **EC 1.1.1.27**."
      ],
      cn: "六大类＋2018 新增第七类；能背出每类 2–3 个例子即可。最容易被追问：合酶(lyase, 不用 ATP) 与 合成酶(ligase, 用 ATP) 的区别。" }
  ],
  numbers: [
    "ΔG°' of ATP hydrolysis = **−30.5 kJ/mol** (−7.3 kcal/mol)",
    "Rate acceleration by enzymes **10⁶–10¹²** (up to 10¹⁷)",
    "Diffusion limit (catalytic perfection) kcat/Km = **10⁸–10⁹ M⁻¹s⁻¹**",
    "Km hexokinase **0.1 mmol/L** vs glucokinase **10 mmol/L**",
    "Optimum temperature in man **37–40 °C**; pepsin pH **1.5–2**, ALP pH ≈ **10**",
    "Catalase turnover number ≈ **4·10⁷ s⁻¹** — the fastest enzyme quoted"
  ],
  clinic: [
    "**ALT and AST** — hepatocyte damage; ALT is more liver-specific, **De Ritis ratio AST/ALT > 2** points to alcoholic liver disease",
    "**Troponin I/T** (not an enzyme, a regulatory protein) and **CK-MB** in myocardial infarction; the old **LDH₁ > LDH₂ flip**",
    "**ALP** (bone, biliary tract), **GGT** (biliary, alcohol induction), **AMS/lipase** in acute pancreatitis (lipase more specific)",
    "Drugs that are enzyme inhibitors: statins, ACE inhibitors, allopurinol, aspirin, methotrexate, neostigmine, omeprazole (irreversible H⁺/K⁺-ATPase)",
    "Enzymes used as **reagents and labels**: glucose oxidase / hexokinase glucose assay, horseradish peroxidase and ALP in ELISA"
  ],
  traps: [
    "Never say the enzyme changes ΔG or shifts the equilibrium — it changes only the **rate**",
    "The enzyme binds the **transition state** best, not the substrate",
    "Km equals the dissociation constant Ks only when k₂ ≪ k₋₁ — otherwise it is a kinetic, not a binding constant",
    "A competitive inhibitor raises the **apparent** Km; the true Km of the enzyme is unchanged",
    "Zymogen activation is **irreversible**, phosphorylation is **reversible** — do not mix the two"
  ],
  terms: [
    ["activation energy", "活化能"], ["transition state", "过渡态"], ["holoenzyme / apoenzyme", "全酶/脱辅酶"],
    ["prosthetic group", "辅基"], ["induced fit", "诱导契合"], ["turnover number", "转换数"],
    ["allosteric effector", "别构效应物"], ["zymogen / proenzyme", "酶原"], ["isoenzyme", "同工酶"],
    ["competitive inhibition", "竞争性抑制"], ["suicide inhibitor", "自杀性抑制剂"], ["substrate channelling", "底物通道效应"]
  ]
},
b: {
  titleEN: "Biochemistry of muscle contraction, contractile proteins. Myoglobin in muscle. Energy substrates for muscle activity. Rigor mortis.",
  titleCN: "肌肉收缩的生物化学 · 收缩蛋白 · 肌红蛋白 · 肌肉的能源物质 · 尸僵",
  opener: "Muscle converts the chemical energy of **ATP** into mechanical work by the cyclic interaction of **myosin heads with actin**; the switch is **Ca²⁺** acting through the **troponin–tropomyosin** system.",
  openerCN: "肌肉把 ATP 的化学能转成机械功：肌球蛋白头与肌动蛋白周期性作用，开关是 Ca²⁺ 通过肌钙蛋白-原肌球蛋白系统。",
  spine: [
    "肌节结构与滑行学说 (sarcomere, sliding-filament theory)",
    "收缩蛋白与调节蛋白 (myosin, actin, tropomyosin, troponin, titin, dystrophin)",
    "横桥循环四步 (cross-bridge cycle) — ATP 在哪一步做什么",
    "兴奋-收缩偶联与 Ca²⁺ 处理 (DHPR–RyR, SERCA); 平滑肌 MLCK 通路",
    "能源物质梯队：ATP → 磷酸肌酸 → 糖酵解 → 有氧氧化；肌纤维类型",
    "肌红蛋白的结构与功能 (myoglobin)",
    "尸僵的生化机制 (rigor mortis)",
    "临床：横纹肌溶解、CK、Duchenne、恶性高热、McArdle"
  ],
  blocks: [
    { h: "1 · Sarcomere and the sliding-filament theory", hcn: "肌节与滑行学说",
      points: [
        "The **sarcomere** is the contractile unit, **from one Z line to the next**: thick **myosin** filaments form the **A band**, thin **actin** filaments the **I band**; the **H zone** is myosin only, the **M line** is its centre.",
        "**Sliding-filament theory (Huxley):** during contraction the filaments **do not shorten** — they slide past each other. Therefore the **I band and H zone shorten, the A band stays constant**.",
        "The thin filament is anchored in the Z line by **α-actinin**; **titin** (the largest human protein, ~3 MDa) runs from Z line to M line and gives passive elasticity; **nebulin** rules the length of actin.",
        "**Dystrophin** links the cytoskeleton to the sarcolemma and extracellular matrix; its absence = **Duchenne muscular dystrophy**.",
        "Smooth muscle has no sarcomeres and no troponin — actin is anchored in **dense bodies**; cardiac muscle has sarcomeres plus **intercalated discs** and gap junctions (functional syncytium)."
      ],
      cn: "先画肌节：Z 线—I 带—A 带—H 区—M 线；强调收缩时细丝滑动，A 带宽度不变（这是必考的一句）。" },
    { h: "2 · Contractile and regulatory proteins", hcn: "收缩蛋白与调节蛋白",
      points: [
        "**Myosin II**: hexamer of **2 heavy chains + 4 light chains**; the double-headed globular part carries the **actin-binding site and ATPase activity**, the tail is a coiled coil. Trypsin/papain split it into **HMM (heads) and LMM (tail)**.",
        "**Actin**: globular **G-actin** polymerises with ATP into a double-helical filament, **F-actin**; each monomer carries the myosin-binding site.",
        "**Tropomyosin**: a rod covering **7 actin monomers**, blocking the myosin-binding sites in the resting state.",
        "**Troponin — three subunits: TnC** binds **Ca²⁺** (homologous to calmodulin), **TnI** inhibits the actin–myosin interaction, **TnT** binds tropomyosin. Cardiac isoforms of **TnI and TnT are the marker of myocardial infarction**.",
        "The regulation is therefore **actin-linked (thin filament) in skeletal and cardiac muscle**, but **myosin-linked in smooth muscle** — there, Ca²⁺–calmodulin activates **MLCK**, which phosphorylates the regulatory myosin light chain."
      ],
      cn: "肌球蛋白（2 重链 4 轻链、头部有 ATP 酶）、肌动蛋白（G→F）、原肌球蛋白（盖住 7 个位点）、肌钙蛋白 C/I/T——心肌 TnI/TnT 是心梗标志物。" },
    { h: "3 · Cross-bridge cycle — where ATP acts", hcn: "横桥循环：ATP 在哪一步",
      points: [
        "**(1) ATP binds** the myosin head → affinity for actin falls → the head **detaches** from actin. *Detachment costs ATP binding, not hydrolysis.*",
        "**(2) Hydrolysis ATP → ADP + Pi** on the head → the head is **cocked** into the high-energy (≈90°) conformation, with ADP + Pi still bound.",
        "**(3)** Ca²⁺ has moved tropomyosin aside, so the cocked head **attaches** to actin and forms the cross-bridge.",
        "**(4) Release of Pi triggers the power stroke** — the head swings to ≈45° and pulls the thin filament ~10 nm; then **ADP is released**.",
        "**(5)** The head stays bound to actin in the **rigor complex** until a **new ATP** arrives — this is exactly the state that becomes permanent in rigor mortis.",
        "Relaxation needs **two ATP-dependent things**: ATP to detach the heads, and ATP for **SERCA** to pump Ca²⁺ back into the sarcoplasmic reticulum."
      ],
      cn: "四步一定要说清 ATP 的两个角色：结合→解离；水解→上弦。Pi 释放=用力冲程，ADP 释放后进入僵直复合体。" },
    { h: "4 · Excitation–contraction coupling and calcium", hcn: "兴奋-收缩偶联与钙",
      points: [
        "Action potential → **T-tubule** → the voltage sensor **DHPR** (L-type Ca²⁺ channel) → **RyR1** of the sarcoplasmic reticulum. In **skeletal** muscle the coupling is **mechanical/direct**; in **cardiac** muscle Ca²⁺ entering through DHPR triggers **calcium-induced calcium release** through RyR2.",
        "Cytosolic Ca²⁺ rises from **10⁻⁷ to 10⁻⁵ mol/L**; Ca²⁺ binds **TnC** → conformational change → tropomyosin moves → contraction.",
        "Relaxation: **SERCA** (Ca²⁺-ATPase, consumes ATP) returns Ca²⁺ to the SR, where it is stored bound to **calsequestrin**; in the myocardium the **Na⁺/Ca²⁺ exchanger (NCX)** also removes Ca²⁺ — this is the target of digoxin (Na⁺/K⁺-ATPase inhibition → less NCX → positive inotropy).",
        "Smooth muscle: Ca²⁺–**calmodulin** → **MLCK** → phosphorylation of the myosin light chain → contraction; **myosin phosphatase** (inhibited by Rho-kinase) causes relaxation; **NO/cGMP** and β₂-agonists relax, hence the **latch state** allows long tonic contraction at low ATP cost.",
        "The neuromuscular junction transmits with **acetylcholine**, degraded by **acetylcholinesterase** — inhibited by organophosphates, blocked in myasthenia gravis by antibodies against the nicotinic receptor."
      ],
      cn: "骨骼肌 DHPR-RyR1 机械偶联；心肌 CICR；钙浓度 10⁻⁷→10⁻⁵；舒张靠 SERCA(耗 ATP)＋心肌 NCX；平滑肌走 MLCK/钙调蛋白。" },
    { h: "5 · Energy substrates of muscle", hcn: "肌肉的能源物质与梯队",
      points: [
        "**ATP itself is a tiny store — ~5 mmol/kg wet muscle, enough for 2–3 seconds.** Muscle must regenerate it continuously; ATP concentration barely falls even in maximal exercise.",
        "**Creatine phosphate (phosphagen), 20–25 mmol/kg — the first buffer, ~10 seconds.** **Creatine kinase** catalyses the reversible **Lohmann reaction: creatine-P + ADP ⇌ ATP + creatine**. Creatine is made from **glycine + arginine + SAM** (kidney and liver) and is converted **non-enzymatically to creatinine (~1.7 % of the pool per day)** — the basis of creatinine as a renal parameter proportional to muscle mass.",
        "**Adenylate kinase (myokinase): 2 ADP → ATP + AMP**; the rising AMP activates **AMPK** and glycogen phosphorylase. **AMP deaminase** (purine nucleotide cycle) → IMP + NH₃, which is why heavy exercise raises ammonia and urate.",
        "**Anaerobic glycolysis from muscle glycogen** — seconds to ~1–2 minutes at high intensity; the product **lactate** goes to the liver for the **Cori cycle**. Muscle has **no glucose-6-phosphatase**, so muscle glycogen can never raise blood glucose.",
        "**Oxidative phosphorylation** for anything longer: **fatty acids are the main fuel at rest and in endurance work**, plus blood glucose (**GLUT4**, stimulated by insulin *and* independently by contraction/AMPK), ketone bodies in starvation, and **branched-chain amino acids**, whose nitrogen leaves as **alanine → glucose–alanine cycle**.",
        "**Fibre types: type I** slow oxidative — rich in **myoglobin** and mitochondria, red, fatigue-resistant; **type IIa** fast oxidative-glycolytic; **type IIb/IIx** fast glycolytic — white, glycogen-rich, poor in myoglobin, fatigues fast."
      ],
      cn: "能源顺序背下来：ATP(2–3 s) → 磷酸肌酸(~10 s) → 无氧糖酵解(≈1–2 min) → 有氧氧化（脂肪酸为主）。肌肉无 G6P 酶——这是必考点。" },
    { h: "6 · Myoglobin in muscle", hcn: "肌红蛋白",
      points: [
        "**Monomeric** haem protein, **153 amino acids, 8 α-helices (A–H)**, one haem with Fe²⁺; **proximal His F8** binds the iron, **distal His E7** bends the O₂ and sterically hinders **CO** binding.",
        "**Hyperbolic** (not sigmoidal) saturation curve — **no cooperativity, no Bohr effect, no 2,3-BPG binding**, therefore it can only store and shuttle O₂, never transport it in blood.",
        "Very high affinity: **P₅₀ ≈ 2.8 mmHg (0.37 kPa)** versus **haemoglobin 26 mmHg (3.5 kPa)** — so myoglobin takes O₂ from haemoglobin in the capillary and gives it up only when tissue pO₂ falls very low.",
        "Function: a **short-term O₂ store** (seconds; large in diving mammals) and above all **facilitated diffusion of O₂** through the cytosol to the mitochondria.",
        "Released after muscle damage: **myoglobinuria** turns urine brown, the dipstick is positive for blood **without red cells**, and the filtered myoglobin causes **acute kidney injury**. In myocardial infarction myoglobin rises **earliest (1–3 h)** but is **not cardiospecific** — troponins are."
      ],
      cn: "肌红蛋白=单体、双曲线、高亲和力、无协同无 Bohr 效应；作用是储氧＋促进氧在胞内扩散；临床看肌红蛋白尿与急性肾损伤。" },
    { h: "7 · Rigor mortis", hcn: "尸僵的生化机制",
      points: [
        "After death there is no O₂ → **no oxidative phosphorylation**; glycogen is used anaerobically until it is exhausted, so **ATP falls to zero**.",
        "Without ATP the **SERCA pump fails** and Ca²⁺ leaks out of the sarcoplasmic reticulum into the cytosol → the troponin switch is permanently ON and the heads attach to actin.",
        "**Because detachment of the myosin head requires binding of a new ATP, and there is none, the cross-bridges stay locked** — the muscle becomes stiff. This locked state is the **rigor complex**.",
        "Time course: begins **2–4 h** after death (first in small muscles — eyelids, jaw), complete at **6–12 h**, persists **24–48 h**, then disappears as **autolysis** (lysosomal cathepsins, calpains) digests the myofilaments. Speed rises with temperature and antemortem exertion.",
        "Parallel change: anaerobic glycolysis leaves **lactate**, so muscle pH falls from 7.0 to about **5.5** — the same chemistry that determines meat quality (fast fall → PSE meat, glycogen already depleted before death → DFD meat)."
      ],
      cn: "一句话答：死后 ATP 耗尽 → SERCA 停 → 钙外漏 → 横桥形成，但没有 ATP 就无法解离 → 僵直。时间 2–4 h 起、6–12 h 全、24–48 h 缓解（自溶）。" }
  ],
  numbers: [
    "ATP in muscle **≈ 5 mmol/kg** (2–3 s of maximal work); creatine phosphate **20–25 mmol/kg** (≈ 10 s)",
    "Cytosolic Ca²⁺ **10⁻⁷ mol/L at rest → 10⁻⁵ mol/L in contraction**",
    "Myoglobin P₅₀ **2.8 mmHg (0.37 kPa)**; haemoglobin P₅₀ **26 mmHg (3.5 kPa)**",
    "Rigor mortis: onset **2–4 h**, full **6–12 h**, resolution **24–48 h**; postmortem muscle pH ≈ **5.5**",
    "Creatinine: **1.7 % of the creatine pool per day**; serum ≈ **60–110 µmol/L**",
    "Muscle ≈ **40 % of body mass**; muscle glycogen ≈ **1–2 % of muscle mass (≈ 400 g)** vs liver ≈ 100 g"
  ],
  clinic: [
    "**Rhabdomyolysis**: CK in the thousands U/L, myoglobinuria, **hyperkalaemia, hyperphosphataemia, hypocalcaemia**, acute kidney injury — causes: crush injury, seizures, statins, extreme exertion",
    "**Duchenne muscular dystrophy** — absent dystrophin, X-linked, extremely high CK from early childhood",
    "**Malignant hyperthermia** — RyR1 mutation; halothane/succinylcholine cause uncontrolled Ca²⁺ release, hypermetabolism, rigidity, acidosis; treated with **dantrolene**",
    "**McArdle disease (GSD V, myophosphorylase deficiency)** — no rise of lactate in the ischaemic exercise test, cramps, **second-wind phenomenon**",
    "**Cardiac troponin I/T** = the standard marker of myocardial infarction; **CK-MB** for reinfarction; myoglobin only as the earliest, unspecific marker"
  ],
  traps: [
    "The filaments **slide**, they do not shorten — the A band width is constant",
    "**ATP binding** detaches the head; **ATP hydrolysis** re-cocks it. Saying it the other way round is the classic error",
    "Rigor mortis is caused by **lack of ATP**, not by an excess or lack of Ca²⁺ as the primary event",
    "Muscle glycogen cannot raise blood glucose — no glucose-6-phosphatase; only lactate/alanine via the liver can",
    "Myoglobin has **no cooperativity and no Bohr effect**; do not describe it as an oxygen transporter"
  ],
  terms: [
    ["sarcomere", "肌节"], ["sliding-filament theory", "肌丝滑行学说"], ["cross-bridge", "横桥"],
    ["power stroke", "用力冲程"], ["troponin C/I/T", "肌钙蛋白 C/I/T"], ["tropomyosin", "原肌球蛋白"],
    ["sarcoplasmic reticulum", "肌浆网"], ["creatine phosphate", "磷酸肌酸"], ["Lohmann reaction", "Lohmann 反应"],
    ["rigor complex", "僵直复合体"], ["myoglobinuria", "肌红蛋白尿"], ["rhabdomyolysis", "横纹肌溶解"]
  ]
}
});
