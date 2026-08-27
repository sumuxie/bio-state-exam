window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 27,
a: {
  titleEN: "pH and acid–base balance. Biological buffers — definition, composition, buffer capacity, titration curve. The Henderson–Hasselbalch equation.",
  titleCN: "pH 与酸碱平衡 · 生物缓冲系统（定义、组成、缓冲容量、滴定曲线）· Henderson–Hasselbalch 方程",
  opener: "Life tolerates only a narrow pH: **arterial blood 7.36–7.44**, i.e. a hydrogen-ion concentration of about **40 nmol/L** — a million times lower than that of sodium; this is achieved by **buffer pairs of a weak acid and its conjugate base**, described quantitatively by the **Henderson–Hasselbalch equation**.",
  openerCN: "生命只能容忍很窄的 pH 范围：动脉血 7.36–7.44，即氢离子浓度约 40 nmol/L——比钠离子低一百万倍；实现它靠『弱酸＋共轭碱』的缓冲对，可用 Henderson–Hasselbalch 方程定量描述。",
  spine: [
    "酸碱的定义（Brønsted）、pH 与 pKa 的意义",
    "为什么 pH 必须恒定（酶、蛋白构象、钾、离子钙、血红蛋白）",
    "缓冲的定义与原理；缓冲容量与滴定曲线",
    "Henderson–Hasselbalch 方程与计算",
    "体内四大缓冲系统及其分布",
    "开放系统的意义：肺与肾如何调节碳酸氢盐系统",
    "临床与实验：血气参数、缓冲液的配制"
  ],
  blocks: [
    { h: "1 · Acids, bases and pH", hcn: "酸碱、pH 与 pKa",
      points: [
        "**Brønsted–Lowry: an acid is a proton donor, a base a proton acceptor; each acid has its conjugate base (HA ⇌ H⁺ + A⁻).** Strong acids dissociate completely, weak acids only partly — and **only weak acids can buffer**.",
        "**pH = −log[H⁺]; pKa = −log Ka.** At **pH = pKa the acid is half dissociated**, i.e. [HA] = [A⁻]. A change of one pH unit is a **tenfold** change of [H⁺].",
        "**Normal arterial pH 7.36–7.44 corresponds to [H⁺] ≈ 36–44 nmol/L; life is possible roughly between pH 6.8 and 7.8** (i.e. 160 to 16 nmol/L).",
        "**Why constancy matters: enzyme activity has a pH optimum; the ionisation of side chains determines protein CONFORMATION and function; acidosis moves K⁺ out of cells (hyperkalaemia) and lowers protein binding of calcium (ionised Ca²⁺ up), alkalosis does the opposite (tetany); pH shifts the oxygen dissociation curve (Bohr effect); and it changes the ionisation and therefore the distribution of drugs.**",
        "**Different compartments have different pH values: gastric juice 1–2, lysosome ~5, urine 4.5–8, cytosol ~7.2, mitochondrial matrix ~7.8, pancreatic juice ~8** — each maintained by pumps, and each suited to the chemistry that happens there."
      ],
      cn: "Brønsted 定义、pH 与 pKa 的关系（pH=pKa 时半解离）、正常 [H⁺]≈40 nmol/L；为什么必须恒定（酶、构象、钾、离子钙、Bohr 效应、药物分布）；各区室的 pH 各不相同。" },
    { h: "2 · Buffers — definition and principle", hcn: "缓冲系统的定义与原理",
      points: [
        "**A buffer is a solution of a weak acid and its conjugate base (or a weak base and its conjugate acid) that resists a change of pH on addition of acid or alkali, or on dilution.**",
        "**Mechanism: added H⁺ is taken up by the base component (A⁻ + H⁺ → HA); added OH⁻ is neutralised by the acid component (HA + OH⁻ → A⁻ + H₂O).** The ratio changes, the pH barely does.",
        "**Buffer capacity β = the amount of strong acid or base needed to change the pH of one litre by one unit.** It depends on **(a) the total concentration of the buffer and (b) how close the pH is to the pKa; it is MAXIMAL at pH = pKa and useful in the range pKa ± 1.**",
        "**The titration curve of a weak acid is sigmoidal, and its FLAT part around the pKa is the buffering zone**; a polyprotic acid (phosphoric, carbonic) has several such zones, one per dissociation step. The **equivalence point** is where all the acid has been converted to its base.",
        "**Amino acids and proteins have their own titration curves** with several pKa values (α-COOH ~2, α-NH₃⁺ ~9.5, side chains — **histidine ~6.0–6.8, the only side chain buffering at physiological pH**); the pH at which the net charge is zero is the **isoelectric point (pI)**."
      ],
      cn: "缓冲的定义与两个方向的机制；缓冲容量取决于浓度与 |pH−pKa|，pKa±1 范围内有效；滴定曲线的平台段就是缓冲区；氨基酸/蛋白的多个 pKa，组氨酸是生理 pH 下唯一有效的侧链。" },
    { h: "3 · The Henderson–Hasselbalch equation", hcn: "Henderson–Hasselbalch 方程",
      points: [
        "**Derivation: from Ka = [H⁺][A⁻]/[HA] take negative logarithms → pH = pKa + log([A⁻]/[HA]) = pKa + log(base/acid).**",
        "**For the bicarbonate system: pH = 6.1 + log([HCO₃⁻] / (0.03 × pCO₂ in mmHg))** — the factor 0.03 (or 0.225 with kPa) is the **solubility coefficient of CO₂**, converting a gas pressure into a concentration of dissolved CO₂ + H₂CO₃.",
        "**Worked example to say aloud: 24 / (0.03 × 40) = 24 / 1.2 = 20, log 20 = 1.3, so pH = 6.1 + 1.3 = 7.4.** Learn this arithmetic — examiners ask for it directly.",
        "**What the equation teaches: the pH depends on the RATIO 20:1, not on the absolute values — so a fall in bicarbonate can be compensated by a fall in pCO₂, and vice versa.** That is the whole logic of compensation (topic 25B).",
        "**Practical uses beyond blood: predicting the ionisation of drugs (a weak acid such as aspirin is un-ionised and absorbable in the stomach, ionised and trapped in alkaline urine — the basis of urine alkalinisation in salicylate poisoning), and preparing laboratory buffers (choose a buffer whose pKa is close to the desired pH: acetate 4.8, phosphate 6.8/7.2, Tris 8.1, bicarbonate 6.1).**"
      ],
      cn: "推导与两种写法；碳酸氢盐版本的 6.1 与 0.03 的来历；必须能口算 6.1+log20=7.4；核心结论是『比值决定 pH』；应用到药物离子化与实验室缓冲液选择。" },
    { h: "4 · The buffer systems of the body", hcn: "体内的缓冲系统",
      points: [
        "**1. Bicarbonate/CO₂ — the main EXTRACELLULAR buffer (~75 % of plasma buffering, ~50 % of whole blood).** pKa 6.1, concentration 24 mmol/L. **Its power comes not from the pKa but from being an OPEN system regulated at both ends: the lung sets pCO₂, the kidney sets [HCO₃⁻].**",
        "**2. Haemoglobin — the largest non-bicarbonate buffer of blood (~25–30 %)**, thanks to the **imidazole of histidine (pKa ~6.8)** and its high concentration; **deoxyhaemoglobin is the better base, so it takes up H⁺ exactly where CO₂ is unloaded (Haldane effect)**.",
        "**3. Phosphate (pKa 6.8) — minor in plasma (1 mmol/L) but important INTRACELLULARLY and decisive in URINE, where it forms the titratable acid.**",
        "**4. Proteins — the main INTRACELLULAR buffer (plus plasma albumin), again through histidine and terminal groups.** **Bone carbonate and phosphate** act as a slow reservoir for chronic acid loads, at the cost of demineralisation.",
        "**The isohydric principle: all buffer pairs in the same solution share the same [H⁺], so measuring one (bicarbonate and pCO₂) reports on all of them** — the theoretical justification for the blood gas analysis.",
        "**Quantitatively: whole blood buffers roughly 50 % bicarbonate, 30 % haemoglobin, 20 % plasma proteins and phosphate; the interstitium relies almost entirely on bicarbonate; the cell on proteins and phosphate.**"
      ],
      cn: "四个系统与各自的部位、pKa、占比；碳酸氢盐强在『开放系统』；血红蛋白靠组氨酸咪唑且随氧合变化；等氢原理说明为什么测一个就够。" },
    { h: "5 · Regulation of the open bicarbonate system", hcn: "开放系统的调节",
      points: [
        "**Lungs (minutes): CO₂ is the volatile acid — 15 000–20 000 mmol/day. Central and peripheral chemoreceptors respond to pCO₂ (and to pH and pO₂) by changing ventilation, which changes pCO₂ within minutes.** Doubling alveolar ventilation roughly halves pCO₂.",
        "**Kidneys (hours–days): reabsorb the filtered bicarbonate (proximal, carbonic anhydrase), excrete fixed acid as TITRATABLE ACID (mainly phosphate) and as AMMONIUM (glutamine → NH₄⁺, up-regulated several-fold in chronic acidosis), and thereby GENERATE new bicarbonate.**",
        "**Liver: urea synthesis consumes bicarbonate, and in acidosis nitrogen is diverted to glutamine for renal ammonium excretion; the liver also clears lactate (regenerating bicarbonate).**",
        "**Bone: exchanges H⁺ for calcium and carbonate in chronic acidosis — the reason chronic kidney disease and renal tubular acidosis cause bone disease.**",
        "**The three time scales together — buffers in seconds, respiration in minutes, kidney in days — are the standard answer to 'how does the body defend its pH'.**",
        "**Carbonic anhydrase is the enzyme that makes all of this fast enough** (erythrocytes, renal tubule, gastric parietal cells, osteoclasts, ciliary body, pancreas); **acetazolamide inhibits it → bicarbonate loss, mild metabolic acidosis, diuresis, lower intraocular pressure, and prophylaxis of altitude sickness.**"
      ],
      cn: "肺（分钟，管 CO₂）、肾（小时–天，管固定酸与再生碳酸氢盐）、肝（尿素/谷氨酰胺/乳酸）、骨（慢性缓冲）；三个时间尺度；碳酸酐酶是使这一切足够快的酶（乙酰唑胺的多种用途）。" },
    { h: "6 · Laboratory and clinical application", hcn: "实验室与临床应用",
      points: [
        "**Measured directly in a blood gas: pH, pCO₂, pO₂; calculated: actual and standard bicarbonate, base excess, saturation.** Reference: **pH 7.36–7.44, pCO₂ 4.7–6.0 kPa, HCO₃⁻ 22–26 mmol/L, BE ±2.5 mmol/L**.",
        "**Base excess isolates the metabolic component; the anion gap (Na⁺ − Cl⁻ − HCO₃⁻, 8–16 mmol/L) identifies added acid** (topic 25B).",
        "**Four primary disorders and their compensation — always in the same direction, never complete: metabolic acidosis (↓HCO₃⁻, hyperventilation), metabolic alkalosis (↑HCO₃⁻, hypoventilation), respiratory acidosis (↑pCO₂, renal HCO₃⁻ retention), respiratory alkalosis (↓pCO₂, renal HCO₃⁻ loss).**",
        "**Buffer chemistry in the laboratory: choose a buffer with pKa within ±1 of the working pH (phosphate for physiological assays, Tris for electrophoresis, acetate for acidic ones); remember that Tris changes pKa markedly with temperature, and that buffer capacity limits how much sample you can add.**",
        "**Two everyday clinical illustrations: (1) hyperventilation from anxiety → respiratory alkalosis → ionised calcium falls → TETANY with a normal total calcium; (2) vomiting → loss of HCl → metabolic alkalosis with hypokalaemia and paradoxical aciduria.**",
        "Closing sentence: **the body does not defend a bicarbonate concentration or a pCO₂ — it defends the RATIO between them, and every organ involved is simply adjusting one term of the Henderson–Hasselbalch equation.**"
      ],
      cn: "血气的测量值与计算值、正常范围；四种紊乱的代偿方向；实验室缓冲液的选择原则；两个日常临床例子；最后一句总结把全题串起来。" }
  ],
  numbers: [
    "Arterial pH **7.36–7.44** = [H⁺] **36–44 nmol/L**; compatible with life roughly **6.8–7.8**",
    "**pH = 6.1 + log(24 / (0.03 × 40)) = 6.1 + log 20 = 7.4**; the ratio HCO₃⁻:CO₂ is **20:1**",
    "pKa values: carbonic acid **6.1**, phosphate **6.8**, histidine imidazole **~6.8**, ammonia **9.2**, acetate 4.8, Tris 8.1",
    "Buffer share of whole blood: bicarbonate ~**50 %**, haemoglobin ~**30 %**, proteins/phosphate ~20 %",
    "Volatile acid **15 000–20 000 mmol/day**, fixed acid **50–100 mmol/day**"
  ],
  clinic: [
    "**Hyperventilation tetany** — alkalosis lowers ionised calcium with normal total calcium",
    "**Acetazolamide** — carbonic anhydrase inhibition: glaucoma, altitude sickness, mild metabolic acidosis",
    "**Urine alkalinisation** in salicylate poisoning — ion trapping predicted by Henderson–Hasselbalch",
    "**Chronic kidney disease** — retained fixed acid buffered by bone → renal osteodystrophy",
    "**Vomiting** — hypochloraemic, hypokalaemic metabolic alkalosis with paradoxical aciduria"
  ],
  traps: [
    "Only **weak** acids and their conjugate bases buffer — a strong acid has no buffering capacity",
    "Buffer capacity is maximal **at pH = pKa**, and the bicarbonate system works despite a poor pKa because it is **open**",
    "pH depends on the **ratio**, not the absolute concentrations — the key to understanding compensation",
    "**Histidine is the only amino-acid side chain that buffers at physiological pH**",
    "Bicarbonate and base excess in a blood gas are **calculated**, not measured"
  ],
  terms: [
    ["conjugate acid–base pair", "共轭酸碱对"], ["pKa", "酸解离常数负对数"], ["buffer capacity", "缓冲容量"],
    ["titration curve", "滴定曲线"], ["isoelectric point", "等电点"], ["Henderson–Hasselbalch equation", "H-H 方程"],
    ["open system", "开放系统"], ["isohydric principle", "等氢原理"], ["carbonic anhydrase", "碳酸酐酶"],
    ["base excess", "碱剩余"], ["titratable acid", "可滴定酸"]
  ]
},
b: {
  titleEN: "Interconnection of metabolic pathways in different organs; the response of the human body to fasting. Hormonal regulation. The Cori cycle.",
  titleCN: "不同器官代谢途径的相互联系 · 人体对饥饿的反应 · 激素调节 · Cori 循环",
  opener: "Metabolism is an **inter-organ economy**: the liver is the central bank, muscle and adipose tissue are the warehouses, the brain is the customer that must be served at all costs, and the currency exchanged between them is **glucose, lactate, alanine, glutamine, fatty acids and ketone bodies**.",
  openerCN: "代谢是一场器官间的经济活动：肝是中央银行，肌肉与脂肪是仓库，脑是必须无条件供应的客户；器官之间流通的『货币』是葡萄糖、乳酸、丙氨酸、谷氨酰胺、脂肪酸与酮体。",
  spine: [
    "各器官的代谢特长（肝、肌、脂肪、脑、红细胞、肾）",
    "餐后（吸收期）的物流",
    "空腹期（4–16 h）",
    "短期饥饿（1–3 天）与糖异生",
    "长期饥饿（>3 天）与酮体适应、蛋白节约",
    "Cori 循环与葡萄糖-丙氨酸循环",
    "激素与临床（低血糖、饥饿死亡、再喂养、应激）"
  ],
  blocks: [
    { h: "1 · Metabolic specialisation of organs", hcn: "各器官的代谢分工",
      points: [
        "**LIVER — the metabolic centre: glucokinase (low-affinity sensor) and glucose-6-phosphatase (can release glucose), glycogen for the blood, gluconeogenesis, ketogenesis, urea synthesis, lipoprotein synthesis, biotransformation. It works for the rest of the body, not for itself, and it uses α-ketoacids and fatty acids as its own fuel.**",
        "**MUSCLE (40 % of body mass): glycogen for its own use only (no glucose-6-phosphatase), GLUT4, creatine phosphate; it is the body's protein store, releasing ALANINE and GLUTAMINE in fasting; it prefers fatty acids at rest.**",
        "**ADIPOSE TISSUE: triacylglycerol storage (LPL in, hormone-sensitive lipase out), no glycerol kinase, and an endocrine organ (leptin, adiponectin).**",
        "**BRAIN: ~120 g glucose/day, no fuel store, cannot use fatty acids, but adapts to KETONE BODIES; consumes 20 % of the oxygen.** **ERYTHROCYTE: pure anaerobic glycolysis, obligate glucose consumer, produces lactate.** **KIDNEY: gluconeogenesis (up to 40 % in prolonged starvation), ammoniagenesis, and it also consumes glutamine.**",
        "**HEART: an omnivore preferring fatty acids and lactate, with almost no anaerobic reserve.** The specialisations are all explained by which **transporters and key enzymes** each tissue expresses — that is the sentence that ties the topic together."
      ],
      cn: "六个器官的分工要点（肝的葡萄糖激酶与 G6P 酶、肌肉无 G6P 酶、脂肪无甘油激酶、脑强制需糖但可用酮体、红细胞纯糖酵解、肾能糖异生）；分工的本质是转运体与关键酶的表达差异。" },
    { h: "2 · The fed (absorptive) state", hcn: "餐后（吸收期，0–4 h）",
      points: [
        "**Signal: high insulin, low glucagon.** Glucose from the portal blood → **liver takes up perhaps a third (glucokinase, glycogen synthesis, and de-novo lipogenesis when glycogen is full)**, the rest passes to the periphery.",
        "**Muscle: GLUT4 → glycogen and, with amino acids, protein synthesis. Adipose tissue: GLUT4 → glycerol-3-phosphate; LPL captures fatty acids from chylomicrons and VLDL → triacylglycerol storage; lipolysis is suppressed.**",
        "**Amino acids: the liver keeps and uses most non-branched ones (protein synthesis, urea when in excess); BRANCHED-CHAIN amino acids escape to muscle.**",
        "**Plasma picture: glucose 5–8 mmol/L, insulin high, free fatty acids at their lowest, ketone bodies absent, triacylglycerols rising (chylomicrons).**",
        "**The respiratory quotient approaches 1.0** — carbohydrate is the fuel being burned."
      ],
      cn: "餐后：胰岛素高→肝摄取约 1/3、肌肉存糖原与合成蛋白、脂肪组织靠 LPL 存脂并抑制脂解；支链氨基酸绕过肝；血浆游离脂肪酸最低、呼吸商≈1。" },
    { h: "3 · Postabsorptive and short-term fasting", hcn: "空腹与短期饥饿",
      points: [
        "**Postabsorptive (4–16 h): insulin falls, glucagon rises. Hepatic GLYCOGENOLYSIS supplies most of the glucose (~75 %), gluconeogenesis the rest; adipose lipolysis begins, so muscle and heart switch to fatty acids and spare glucose for the brain.**",
        "**After 16–24 h liver glycogen is essentially gone and GLUCONEOGENESIS becomes the sole source, using: lactate (Cori cycle), alanine and glutamine (from muscle proteolysis), glycerol (from lipolysis) and propionate.**",
        "**Cost of that protein loss: about 75 g of muscle protein a day at the start of starvation, i.e. ~12 g of nitrogen in urea — unsustainable, which is why the ketone adaptation exists.**",
        "**Fatty acids flood the liver → β-oxidation supplies the ATP for gluconeogenesis, acetyl-CoA activates pyruvate carboxylase, and the surplus becomes KETONE BODIES because oxaloacetate is being drained into glucose.**",
        "**Hormonal picture: insulin/glucagon ratio low; cortisol supplies amino acids (PEPCK induction); growth hormone and catecholamines support lipolysis; thyroid hormone falls slightly (low-T3 syndrome) to save energy.**"
      ],
      cn: "空腹期靠肝糖原（约 75%），16–24 小时后完全靠糖异生；蛋白丢失约 75 g/天促使机体必须转向酮体；脂肪酸进肝既供能又激活丙酮酸羧化酶并生酮。" },
    { h: "4 · Prolonged starvation and the ketone adaptation", hcn: "长期饥饿与酮体适应",
      points: [
        "**After 2–3 days ketone bodies rise (3-hydroxybutyrate and acetoacetate reach several mmol/L) and the BRAIN begins to use them; by 2–3 weeks they cover 60–70 % of the brain's energy, cutting its glucose requirement from ~120 g to ~40 g/day.**",
        "**Consequence — PROTEIN SPARING: urinary nitrogen falls from ~12 g to ~3–4 g/day, so muscle wasting slows dramatically. Survival is therefore determined by the size of the FAT store (weeks to a couple of months), and death comes when protein loss reaches ~50 % — usually from respiratory muscle failure and infection.**",
        "**The kidney takes over up to 40 % of gluconeogenesis and excretes ammonium (the ketoacids need buffering).** Mild **ketoacidosis** is normal in starvation, but insulin still restrains lipolysis enough to prevent the runaway acidosis of type 1 diabetes.",
        "**Other adaptations: basal metabolic rate falls (T3 down, sympathetic tone down), physical activity falls, and there is a loss of sodium and water in the first days (which is why the first kilograms lost are not fat).**",
        "**Contrast to state clearly: in DIABETIC ketoacidosis the same pathways run without the brake of insulin — glucose is high instead of low, ketogenesis is unlimited, and the result is a life-threatening acidosis; in starvation glucose is low-normal and ketosis is controlled.**"
      ],
      cn: "2–3 天起酮体升高、脑逐渐改用酮体（覆盖 60–70%），使脑的葡萄糖需求从 120 g 降到约 40 g；随之尿氮从 12 g 降到 3–4 g=蛋白节约；生存时间取决于脂肪储量。饥饿性酮症 vs 糖尿病酮症酸中毒的对比是必答点。" },
    { h: "5 · The Cori cycle and the glucose–alanine cycle", hcn: "Cori 循环与葡萄糖-丙氨酸循环",
      points: [
        "**CORI CYCLE: muscle (or erythrocyte) glucose → 2 lactate (anaerobic glycolysis, +2 ATP) → blood → LIVER → gluconeogenesis (−6 ATP) → glucose → back to muscle.** The net effect is that **the liver pays 6 ATP so that the muscle can gain 2** — the body shifts the metabolic burden to the organ that has oxygen.",
        "**Where it matters: sprinting and any anaerobic effort, the erythrocyte (permanently), shock and sepsis, tumours (Warburg effect — and cachexia is partly the energy cost of this cycle), and it explains the lactate that appears in blood during exercise and its rapid clearance afterwards.**",
        "**GLUCOSE–ALANINE (Cahill) CYCLE: in muscle, amino groups from amino-acid breakdown are transaminated onto pyruvate → ALANINE → blood → liver → transamination back to pyruvate (→ glucose) with the nitrogen entering the UREA cycle.** It carries **both carbon and nitrogen** and avoids releasing ammonia into the blood.",
        "**Glutamine is the other nitrogen shuttle**: from muscle to the gut (fuel), the kidney (ammoniagenesis and acid excretion) and immune cells.",
        "**Both cycles are examples of the same principle — inter-organ division of labour, where one tissue exports a partially oxidised metabolite that another tissue can finish or reconvert.** Say this and add: **neither cycle creates energy; both redistribute it.**"
      ],
      cn: "Cori 循环（肌肉赚 2 ATP、肝付 6 ATP）与葡萄糖-丙氨酸循环（同时运碳与氮）；谷氨酰胺是第二条运氮路线；两者都不产能，只是把负担转移到有氧的器官。" },
    { h: "6 · Hormones, stress and clinical situations", hcn: "激素、应激与临床",
      points: [
        "**The insulin/glucagon ratio is the master switch of hepatic metabolism; cortisol, catecholamines, growth hormone and thyroid hormones modulate it, and adipokines (leptin, adiponectin) report on the size of the store.**",
        "**Counter-regulation in hypoglycaemia has a hierarchy: insulin secretion stops (~4.5 mmol/L), glucagon and adrenaline are released (~3.6–3.8), then cortisol and growth hormone; autonomic symptoms at ~3.0 and neuroglycopenia below 2.5 mmol/L. Repeated hypoglycaemia blunts these warnings (hypoglycaemia unawareness).**",
        "**Stress, trauma and sepsis produce the opposite of starvation adaptation: cytokines and counter-regulatory hormones cause insulin resistance, hyperglycaemia, massive proteolysis and lipolysis, a strongly negative nitrogen balance — the catabolic state that nutrition can support but not stop.**",
        "**Exercise integrates the same pathways acutely: creatine phosphate → muscle glycogen → blood glucose (hepatic glycogenolysis, then gluconeogenesis) → fatty acids in prolonged effort, with AMPK and catecholamines as the signals, and the Cori and glucose–alanine cycles running at full speed.**",
        "**Clinical anchors: alcoholic hypoglycaemia (NADH blocks gluconeogenesis), ketotic hypoglycaemia in children, glycogen storage disease type I, adrenal insufficiency, insulinoma (high C-peptide) versus exogenous insulin (low C-peptide), and the REFEEDING SYNDROME when a starved patient is fed too fast (phosphate, potassium and magnesium fall as insulin drives them into cells; give thiamine first).**",
        "Closing sentence: **fasting is not a failure of metabolism but a programmed sequence — glycogen, then gluconeogenesis, then ketone bodies — and each step is designed to protect the same thing: the protein of the muscles and the glucose supply of the brain.**"
      ],
      cn: "胰岛素/胰高血糖素比值为总开关；低血糖反调节的层级与阈值；应激状态是饥饿适应的反面；运动的整合；临床五例＋再喂养综合征。最后一句总结点题。" }
  ],
  numbers: [
    "Brain **~120 g glucose/day**, falling to **~40 g** after ketoadaptation (ketones cover 60–70 %)",
    "Liver glycogen **~100 g** (gone in 18–24 h); muscle glycogen ~400 g (unavailable to blood)",
    "Protein loss **~75 g/day early in starvation → ~20 g/day** after adaptation; urinary N **12 → 3–4 g/day**",
    "Cori cycle: muscle **+2 ATP**, liver **−6 ATP**",
    "Counter-regulation begins at **~3.6–3.8 mmol/L**; fat stores allow survival of **weeks to ~2 months**"
  ],
  clinic: [
    "**Alcoholic hypoglycaemia** — NADH excess blocks gluconeogenesis; give glucose **and** thiamine",
    "**Insulinoma vs exogenous insulin** — C-peptide high vs low",
    "**Refeeding syndrome** — hypophosphataemia, hypokalaemia, hypomagnesaemia, thiamine deficiency",
    "**Diabetic ketoacidosis vs starvation ketosis** — the difference is the absence of any insulin brake",
    "**Sepsis/trauma** — catabolic hyperglycaemia and negative nitrogen balance despite feeding"
  ],
  traps: [
    "The Cori cycle **costs the body energy** — it redistributes work, it does not produce ATP",
    "Muscle protein is not a 'store' in the same sense as glycogen or fat — every gram lost is functional tissue",
    "Ketone bodies are the **normal adaptive fuel of prolonged fasting**, not a pathological product",
    "Fatty acids **cannot** be converted to glucose — only their glycerol, plus propionate from odd-chain acids",
    "Do not describe starvation as a steady state: it is a **sequence of stages** with different dominant fuels"
  ],
  terms: [
    ["absorptive / postabsorptive state", "吸收期/吸收后期"], ["Cori cycle", "Cori 循环"],
    ["glucose–alanine cycle", "葡萄糖-丙氨酸循环"], ["protein sparing", "蛋白节约效应"],
    ["ketoadaptation", "酮体适应"], ["counter-regulatory hormones", "升糖（反调节）激素"],
    ["insulin/glucagon ratio", "胰岛素/胰高血糖素比值"], ["negative nitrogen balance", "负氮平衡"],
    ["refeeding syndrome", "再喂养综合征"], ["low-T3 syndrome", "低 T3 综合征"]
  ]
}
});
