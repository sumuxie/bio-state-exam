window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 18,
a: {
  titleEN: "Ammonia — production and mechanisms of detoxication. The urea cycle and its disorders. Transport of ammonia between tissues and its excretion.",
  titleCN: "氨的产生与解毒机制 · 尿素循环及其疾病 · 氨在组织间的转运与排泄",
  opener: "Ammonia is **highly toxic to the brain**, so it is never allowed to circulate freely: it is fixed immediately as **glutamate/glutamine**, transported as **glutamine and alanine**, and finally converted in the **liver into urea** — the only quantitatively important route of nitrogen excretion.",
  openerCN: "氨对脑有高度毒性，因此绝不允许自由循环：它被立即固定为谷氨酸/谷氨酰胺，以谷氨酰胺与丙氨酸的形式运输，最后在肝内转变为尿素——这是氮排泄唯一在量上重要的途径。",
  spine: [
    "氨的来源（氨基酸脱氨、肠道细菌、肾谷氨酰胺酶、嘌呤/嘧啶）",
    "三种固定/解毒方式：谷氨酸脱氢酶、谷氨酰胺合成酶、尿素循环",
    "组织间转运：谷氨酰胺与葡萄糖-丙氨酸循环",
    "尿素循环五步：部位、酶、能量代价",
    "调节：N-乙酰谷氨酸、酶量、与三羧酸循环的联系",
    "尿素循环疾病（OTC 最常见）与高氨血症的鉴别",
    "氨的毒性机制与治疗；肾对氨的排泄与酸碱平衡"
  ],
  blocks: [
    { h: "1 · Where ammonia comes from", hcn: "氨的来源",
      points: [
        "**Amino-acid catabolism** — transamination onto glutamate, then **glutamate dehydrogenase** liberates NH₄⁺ (mainly in the liver mitochondrion).",
        "**Intestinal bacteria** — **urease** splits urea that has diffused into the gut, and bacteria deaminate amino acids; the ammonia is absorbed into the **portal vein** and normally cleared by the liver on first pass. **This is why gastrointestinal bleeding (a protein meal in the gut) precipitates hepatic encephalopathy.**",
        "**Kidney — glutaminase** hydrolyses glutamine to glutamate + NH₄⁺, which is excreted in urine (and is a major mechanism of acid excretion, see below).",
        "**Muscle** — the **purine nucleotide cycle** (AMP deaminase) during intense exercise; also degradation of **biogenic amines (MAO)** and of **purines and pyrimidines**.",
        "At physiological pH (7.4), **more than 98 % is the ionised ammonium NH₄⁺**, which crosses membranes poorly; the small amount of **free NH₃ crosses freely — and alkalosis increases it**, which is why alkalosis worsens ammonia toxicity."
      ],
      cn: "四个来源（氨基酸分解、肠道细菌尿素酶、肾谷氨酰胺酶、肌肉嘌呤核苷酸循环）；pH 7.4 时 98% 以上是 NH4⁺，碱中毒使 NH3 增多而毒性增强——这是常考的机制点。" },
    { h: "2 · Three ways of fixing ammonia", hcn: "三种固定/解毒方式",
      points: [
        "**(1) Glutamate dehydrogenase (reversible): α-ketoglutarate + NH₄⁺ + NAD(P)H ⇌ glutamate** — the first and cheapest trap, and the reaction that links nitrogen to the citrate cycle.",
        "**(2) Glutamine synthetase: glutamate + NH₄⁺ + ATP → glutamine** — irreversible, the main mechanism in **brain, muscle and the perivenous hepatocytes**; glutamine is the **non-toxic transport and storage form of nitrogen** and carries **two nitrogens**.",
        "**(3) The urea cycle in periportal hepatocytes — the only route that actually removes nitrogen from the body** (2 nitrogens per urea: one from ammonia, one from aspartate).",
        "**Zonation of the liver is elegant and examinable: periportal cells run the urea cycle (high capacity, low affinity); perivenous cells have glutamine synthetase (low capacity, HIGH affinity) and act as a 'scavenger' that catches whatever escaped** — so the blood leaving the liver is virtually ammonia-free.",
        "Minor routes: **carbamoyl phosphate → pyrimidines**, amidation of amino acids, and renal excretion of NH₄⁺."
      ],
      cn: "三个层次：谷氨酸脱氢酶（可逆、便宜）→谷氨酰胺合成酶（耗 ATP、不可逆、脑与肌肉的主力）→尿素循环（唯一真正排氮）。肝小叶分区（门静脉周尿素循环、中央静脉周谷氨酰胺合成酶）是加分点。" },
    { h: "3 · Interorgan transport of ammonia", hcn: "组织间的氨转运",
      points: [
        "**Glutamine is the main carrier** (its plasma concentration is the highest of all amino acids): made in muscle and brain, it travels to the **liver (urea), the kidney (acid excretion) and the gut/immune cells (fuel)**.",
        "**Glucose–alanine cycle (Cahill cycle):** in muscle, amino groups are transaminated onto pyruvate → **alanine → liver → transaminated back to pyruvate (gluconeogenesis) and the nitrogen enters the urea cycle**; the glucose returns to muscle. It transports **nitrogen and carbon at the same time, without any osmotic or toxic burden**.",
        "**Brain:** it has no urea cycle, so it detoxifies ammonia **only by glutamine synthetase in astrocytes** — at the cost of consuming **α-ketoglutarate and glutamate**; the accumulated glutamine is osmotically active. This single sentence explains both the **energy failure and the cerebral oedema** of hyperammonaemia.",
        "**Kidney: glutamine → glutamate + NH₄⁺ (glutaminase) → NH₄⁺ excreted in urine with a titratable acid**; production is strongly **induced by chronic acidosis** — the kidney's main long-term mechanism for excreting acid (topic 25B).",
        "Note the accounting: **the nitrogen that leaves as urinary NH₄⁺ does not pass through urea** — in acidosis the body deliberately shifts nitrogen disposal from urea (which consumes bicarbonate) to ammonium."
      ],
      cn: "谷氨酰胺是主要载体；葡萄糖-丙氨酸循环同时运氮与碳；脑只能靠星形胶质细胞谷氨酰胺合成酶（消耗 α-酮戊二酸、谷氨酰胺渗透性致脑水肿）；肾在酸中毒时增加铵排泄。" },
    { h: "4 · The urea cycle", hcn: "尿素循环（五步）",
      points: [
        "**Step 1 (mitochondrion, rate-limiting): NH₄⁺ + HCO₃⁻ + 2 ATP → carbamoyl phosphate, by CARBAMOYL PHOSPHATE SYNTHETASE I — absolutely dependent on the allosteric activator N-ACETYLGLUTAMATE (NAG)**, which is made from glutamate + acetyl-CoA by NAG synthase and is stimulated by **arginine**.",
        "**Step 2 (mitochondrion): carbamoyl phosphate + ornithine → CITRULLINE (ornithine transcarbamoylase, OTC)**; citrulline leaves to the cytosol.",
        "**Step 3 (cytosol): citrulline + ASPARTATE + ATP → argininosuccinate (argininosuccinate synthetase)** — ATP → AMP + PPi, so this step costs **two high-energy bonds**; **this is where the second nitrogen enters**.",
        "**Step 4: argininosuccinate → arginine + FUMARATE (argininosuccinate lyase)** — the fumarate links the cycle to the citrate cycle (the **aspartate–argininosuccinate shunt**: fumarate → malate → oxaloacetate → transamination → aspartate again).",
        "**Step 5: arginine + H₂O → UREA + ornithine (ARGINASE, only in the liver)**; ornithine re-enters the mitochondrion and the cycle repeats.",
        "**Balance: NH₄⁺ + HCO₃⁻ + aspartate + 3 ATP (4 high-energy bonds) → urea + fumarate + 2 ADP + AMP.** Urea is **water-soluble, neutral, non-toxic, contains 2 N, is 45 % nitrogen by mass**, and is excreted by the kidney (some diffuses into the gut). Note that the cycle **consumes bicarbonate** — a link to acid–base regulation."
      ],
      cn: "五步、两个区室、四个高能键；CPS-I 需 N-乙酰谷氨酸（精氨酸刺激其合成）；第二个氮来自天冬氨酸；产物延胡索酸把尿素循环与三羧酸循环连起来；尿素含 2 个氮、消耗碳酸氢盐。" },
    { h: "5 · Regulation and disorders", hcn: "调节与尿素循环疾病",
      points: [
        "**Short-term regulation: N-acetylglutamate** — a high-protein meal raises glutamate and arginine → more NAG → CPS-I is activated. **Long-term: induction of all five enzymes** by a high-protein diet, starvation and glucocorticoids (up to 20-fold).",
        "**Urea-cycle defects are all autosomal recessive except OTC deficiency, which is X-LINKED and the commonest.** They present as **hyperammonaemia with vomiting, lethargy, seizures and coma in the neonate**, or later with protein intolerance and episodic encephalopathy.",
        "**Laboratory logic to distinguish them: hyperammonaemia + RESPIRATORY ALKALOSIS (ammonia stimulates the respiratory centre) and NORMAL anion gap and glucose points to a urea-cycle defect;** metabolic acidosis with a high anion gap and ketosis points instead to an **organic aciduria**, and hypoglycaemia without ketones to a **fatty-acid oxidation defect**.",
        "**Then use citrulline and orotic acid: CPS-I deficiency — low citrulline, NO orotic aciduria; OTC deficiency — low citrulline, HIGH orotic acid (carbamoyl phosphate escapes to the cytosol and is used for pyrimidines); citrullinaemia (ASS) — very high citrulline; argininosuccinic aciduria (ASL) — argininosuccinate in blood/urine; arginase deficiency — high arginine, spastic diplegia.**",
        "**Treatment: stop protein intake acutely, give glucose and lipid to stop catabolism, ARGININE (or citrulline) to restart the cycle and provide an excretion route, NITROGEN SCAVENGERS — sodium benzoate (conjugates glycine → hippurate) and sodium phenylbutyrate/phenylacetate (conjugates glutamine → phenylacetylglutamine), and HAEMODIALYSIS if ammonia is very high.** Long-term: low-protein diet, scavengers, liver transplantation.",
        "**Acquired hyperammonaemia is far commoner: liver failure and portosystemic shunting (hepatic encephalopathy), Reye syndrome, valproate therapy, urease-producing urinary infection, and severe exercise.**"
      ],
      cn: "调节靠 NAG；OTC 缺乏是 X 连锁且最常见；鉴别三步走（呼吸性碱中毒＋无酸中毒→尿素循环病；再看瓜氨酸与乳清酸）；治疗五件套（停蛋白、供能、精氨酸、苯甲酸钠/苯丁酸钠、透析）。" },
    { h: "6 · Toxicity of ammonia and its clinical management", hcn: "氨的毒性机制与临床",
      points: [
        "**Mechanisms of neurotoxicity: (1) depletion of α-ketoglutarate by the glutamate dehydrogenase reaction running backwards → the citrate cycle slows → ATP deficit; (2) accumulation of glutamine in astrocytes → osmotic swelling → cerebral oedema and raised intracranial pressure; (3) disturbed neurotransmission — less glutamate and aspartate, more GABA-ergic tone, false neurotransmitters from aromatic amino acids; (4) direct effect on the pH and on potassium transport.**",
        "**Clinical picture: hepatic encephalopathy — confusion, asterixis (flapping tremor), inverted sleep pattern, coma; in the neonate, refusal to feed, hyperventilation, seizures.** Precipitants: **gastrointestinal bleeding, infection, constipation, dehydration/diuretics, hypokalaemia and alkalosis, sedatives, excess protein**.",
        "**Therapy of hepatic encephalopathy follows the biochemistry: lactulose** (acidifies the colon → NH₃ + H⁺ → NH₄⁺, which cannot be absorbed, plus a laxative effect and altered flora) and **rifaximin** (reduces urease-producing bacteria); correct hypokalaemia and alkalosis (both increase NH₃); avoid excessive protein restriction long-term (malnutrition worsens outcome).",
        "**Normal plasma ammonia is roughly 11–35 µmol/L (varies by laboratory); the sample must be taken without a tourniquet or clenching, put on ice and analysed within ~15–30 minutes**, otherwise deamination in vitro falsely raises it — a preanalytical detail examiners like.",
        "**Urea itself as a laboratory parameter: normal 2.5–8.0 mmol/L**; it rises in renal failure, dehydration, high protein intake, gastrointestinal bleeding and catabolism, and **falls in liver failure, low protein intake and pregnancy** — so urea is both a renal and a nutritional/hepatic marker, and its ratio to creatinine helps distinguish prerenal from renal azotaemia."
      ],
      cn: "毒性四机制（耗竭 α-酮戊二酸、谷氨酰胺致星形胶质细胞肿胀、递质紊乱、直接作用）；肝性脑病的诱因与乳果糖/利福昔明的机制；血氨采样的分析前要求；尿素作为检验指标的双重意义。" }
  ],
  numbers: [
    "Urea cycle costs **3 ATP = 4 high-energy bonds** per urea; urea contains **2 N (46.6 % N by mass)**",
    "Urinary nitrogen: **~85–90 % as urea (~25–30 g/day)**, the rest as ammonium, creatinine and uric acid",
    "Plasma ammonia **~11–35 µmol/L**; urea **2.5–8.0 mmol/L**",
    "Glutamine is the **most abundant plasma amino acid (~0.5–0.8 mmol/L)**",
    "OTC deficiency — the only **X-linked** urea-cycle defect and the commonest"
  ],
  clinic: [
    "**Hepatic encephalopathy** — asterixis; treat with lactulose and rifaximin; correct K⁺ and alkalosis",
    "**Neonatal hyperammonaemia** — a medical emergency: stop protein, give glucose, arginine, scavengers, dialyse",
    "**Orotic aciduria** distinguishes OTC deficiency from CPS-I deficiency",
    "**Reye syndrome** (aspirin in children with a viral illness) and **valproate** — acquired urea-cycle inhibition",
    "**Urea/creatinine ratio** — high in prerenal azotaemia and gastrointestinal bleeding"
  ],
  traps: [
    "**CPS-I (mitochondrial, ammonia, N-acetylglutamate, urea cycle) vs CPS-II (cytosolic, glutamine, pyrimidines)** — the standard trap",
    "The **second nitrogen of urea comes from aspartate**, not from a second molecule of ammonia",
    "Ammonia detoxication in the brain is by **glutamine synthetase only** — the brain has no urea cycle",
    "**Alkalosis and hypokalaemia worsen** ammonia toxicity — a practical point in encephalopathy",
    "Blood for ammonia must go **on ice and be analysed quickly**, otherwise the result is falsely high"
  ],
  terms: [
    ["glutamine synthetase", "谷氨酰胺合成酶"], ["glutamate dehydrogenase", "谷氨酸脱氢酶"],
    ["carbamoyl phosphate synthetase I", "氨甲酰磷酸合成酶 I"], ["N-acetylglutamate", "N-乙酰谷氨酸"],
    ["ornithine transcarbamoylase", "鸟氨酸氨甲酰转移酶"], ["argininosuccinate", "精氨酰琥珀酸"],
    ["arginase", "精氨酸酶"], ["glucose–alanine cycle", "葡萄糖-丙氨酸循环"],
    ["hyperammonaemia", "高氨血症"], ["hepatic encephalopathy", "肝性脑病"], ["nitrogen scavenger", "氮清除剂"]
  ]
},
b: {
  titleEN: "Elementary principles of laboratory medicine. Selected panels of biochemical tests. Preanalytical, analytical and postanalytical phases. Reference ranges, intra- and interindividual variability. Screening of genetic metabolic disorders.",
  titleCN: "检验医学基本原理 · 常用生化组合 · 分析前/分析中/分析后 · 参考范围与个体内外变异 · 遗传代谢病筛查",
  opener: "A laboratory result is only as good as the **whole process** behind it: most errors happen **before the sample reaches the analyser**, and a number without a **reference interval, a knowledge of its variability and a clinical question** cannot be interpreted at all.",
  openerCN: "一个检验结果的质量取决于整个流程：大多数错误发生在标本进入分析仪之前；而一个数字若没有参考区间、没有变异度知识、没有临床问题，就根本无法解释。",
  spine: [
    "检验全过程的三个阶段与错误分布",
    "分析前：患者准备、采血、抗凝剂、运输、干扰因素",
    "分析中：方法学、精密度与正确度、质控与质量保证",
    "分析后：参考区间、临床决定限、危急值、报告与解释",
    "变异：个体内/个体间变异、参考变化值、诊断效能（敏感性/特异性/预测值/ROC）",
    "常用检验组合（肝、肾、心、代谢等）",
    "新生儿与遗传代谢病筛查的原则"
  ],
  blocks: [
    { h: "1 · The three phases and where errors occur", hcn: "三个阶段与错误分布",
      points: [
        "**Preanalytical (~60–70 % of all errors): the request, patient preparation, identification, sampling, transport and storage.** **Analytical (~10–15 %): the measurement itself. Postanalytical (~15–20 %): reporting, transmission, interpretation and action.**",
        "The single most important message of this topic: **the analyser is the most reliable part of the chain** — quality is won or lost around it.",
        "Total testing process = the **'brain-to-brain loop'**: from the clinician's question to the clinician's decision. Every step needs its own controls (patient identification with two identifiers, barcodes, LIS, delta checks).",
        "**Indications for testing:** screening, diagnosis, monitoring of therapy, prognosis, and follow-up — and every test must have a clear question, because an unnecessary test in a healthy person has a **5 % chance of falling outside the reference interval by definition** (and 20 tests → a 64 % chance that at least one is 'abnormal').",
        "This is why **panels must be chosen, not ordered wholesale**, and why 'screening the whole profile' produces false alarms."
      ],
      cn: "三阶段与误差比例（分析前 60–70%）；『大脑到大脑的环路』；随机做 20 项检查中至少一项异常的概率是 64%——这是反对滥检的经典数字。" },
    { h: "2 · The preanalytical phase", hcn: "分析前阶段（最容易出错）",
      points: [
        "**Patient factors: fasting (12 h for triacylglycerols and glucose), time of day (cortisol, iron, testosterone have a diurnal rhythm), posture (upright raises protein-bound analytes ~5–10 %), exercise (CK, myoglobin, potassium, lactate), diet (bananas/walnuts before 5-HIAA), alcohol, smoking, drugs, menstrual cycle, pregnancy, altitude.**",
        "**Sampling: prolonged tourniquet or fist clenching raises potassium, lactate and protein-bound substances; the order of draw matters (EDTA contamination lowers calcium and raises potassium spectacularly); the correct tube must be filled to the mark (citrate 1:9 for coagulation).**",
        "**Tubes and additives: serum (no anticoagulant, clot activator), heparin (plasma, for most chemistry), EDTA (haematology, HbA1c, ammonia; chelates calcium), citrate (coagulation, ESR), fluoride/oxalate (glucose — it inhibits enolase and stops in-vitro glycolysis).**",
        "**Transport and storage: ammonia and blood gases on ice and immediately; bilirubin and vitamins protected from light; delayed centrifugation raises potassium, LDH and phosphate as they leak from cells.**",
        "**Interferences of the sample itself — the three H's: HAEMOLYSIS (raises K⁺, LDH, AST, magnesium; interferes optically), ICTERUS (bilirubin), LIPAEMIA (turbidity, and pseudohyponatraemia with indirect ion-selective electrodes).** Add **drug interference and heterophilic antibodies** in immunoassays (falsely high or low hormone results, e.g. the hook effect at very high concentrations)."
      ],
      cn: "患者因素（禁食、体位、时间、运动）、采血（止血带、采管顺序、EDTA 污染）、抗凝剂各自用途、运输条件、以及三大干扰（溶血、黄疸、脂血）——这一段几乎必被追问一个具体例子。" },
    { h: "3 · The analytical phase", hcn: "分析中阶段",
      points: [
        "**Precision (repeatability/reproducibility) = random error, expressed as the coefficient of variation CV %; trueness/accuracy = systematic error (bias) against a reference method or certified material. Total error = bias + 2 CV.**",
        "**Internal quality control:** control materials measured with every run, plotted on **Levey–Jennings charts** and judged by **Westgard rules** (1₃s, 2₂s, R₄s…) — they detect drift and shifts. **External quality assessment (proficiency testing)** compares laboratories.",
        "**Analytical sensitivity = the smallest detectable difference/limit of detection; analytical specificity = freedom from interference** — do not confuse them with the clinical sensitivity and specificity below.",
        "Methods you should be able to name (topic 30A): **photometry (Lambert–Beer), potentiometry with ion-selective electrodes (Na⁺, K⁺, Cl⁻, pH, ionised Ca²⁺), enzymatic assays with a calibration curve, immunochemical methods (ELISA, chemiluminescence), chromatography and mass spectrometry, electrophoresis, and point-of-care testing.**",
        "**Traceability and standardisation** matter clinically: creatinine methods are standardised to **IDMS**, HbA1c to the **IFCC** reference — otherwise results would not be comparable between laboratories, and eGFR equations would not work."
      ],
      cn: "精密度（随机误差、CV）与正确度（系统误差、偏倚）；室内质控（L-J 图、Westgard 规则）与室间质评；分析灵敏度≠临床敏感性；方法学清单与标准化溯源（肌酐 IDMS、HbA1c IFCC）。" },
    { h: "4 · Reference intervals, variability and diagnostic performance", hcn: "参考区间、变异与诊断效能",
      points: [
        "**A reference interval is the central 95 % of values in a defined healthy reference population (mean ± 2 SD for a Gaussian distribution)** — so **5 % of healthy people fall outside by definition**. It must be **partitioned by sex, age, pregnancy, and sometimes ethnicity** (creatinine, ALP in children, ferritin, haemoglobin).",
        "**Clinical decision limits are different and better where they exist**: they come from outcome studies, not from a healthy population — **cholesterol, glucose for diabetes, troponin 99th percentile, HbA1c 48 mmol/mol**. Say this distinction; it is a classic exam point.",
        "**Biological variation: intraindividual CVᵢ (within one person over time) and interindividual CVg (between people).** When **CVᵢ is much smaller than CVg (index of individuality < 0.6 — e.g. creatinine, TSH, iron)**, a result can be 'normal' for the population but clearly abnormal for that person — which is why **serial measurements and the reference change value (RCV = 2.77 × √(CVₐ² + CVᵢ²))** are more useful than a single value.",
        "**Diagnostic performance: sensitivity** (positives among the diseased), **specificity** (negatives among the healthy), **predictive values (which depend on PREVALENCE)**, **likelihood ratios**, and the **ROC curve with its area under the curve** for choosing a cut-off. Raising the cut-off increases specificity and lowers sensitivity — the trade-off to state explicitly.",
        "**Postanalytical duties: timely reporting with the reference interval and units, flagging of CRITICAL (life-threatening) VALUES with direct communication to the clinician (e.g. K⁺ > 6.5 or < 2.5 mmol/L, glucose < 2.5 mmol/L, calcium, troponin, blood gases), interpretative comments, and archiving.** Errors here — a result sent to the wrong patient or not acted upon — are as harmful as an analytical mistake."
      ],
      cn: "参考区间=健康人群的中间 95%（所以 5% 健康人天然『异常』）；临床决定限来自结局研究（胆固醇、糖尿病切点、肌钙蛋白 99 百分位）；个体内/间变异与参考变化值 RCV；敏感性/特异性/预测值/ROC；危急值必须直接通报。" },
    { h: "5 · Selected panels", hcn: "常用检验组合（会点菜）",
      points: [
        "**Basic metabolic panel:** Na⁺, K⁺, Cl⁻, bicarbonate/CO₂, urea, creatinine (with eGFR), glucose, calcium.",
        "**Liver panel:** ALT, AST, ALP, GGT, bilirubin (total + conjugated), albumin, total protein, INR — remember the split into **damage / cholestasis / function** (topics 17B, 29B).",
        "**Renal panel:** creatinine + eGFR, urea, cystatin C, electrolytes, acid–base, urine albumin/creatinine ratio, urine sediment (topic 21B).",
        "**Cardiac:** high-sensitivity troponin (serial), natriuretic peptides, plus CK/CK-MB if needed; **lipid panel:** total cholesterol, HDL-C, TAG, calculated LDL-C, non-HDL-C, apo B and Lp(a) when indicated.",
        "**Diabetes:** fasting glucose, HbA1c, OGTT, C-peptide, ketones, urine ACR. **Thyroid:** TSH first, then free T4 (and free T3, antibodies). **Anaemia:** blood count with indices and reticulocytes, ferritin, transferrin/saturation, sTfR, B12 and folate, haptoglobin/LDH/bilirubin if haemolysis is suspected.",
        "**Inflammation:** CRP, procalcitonin, ESR, blood count with differential; **bone:** calcium, phosphate, ALP, PTH, 25-OH-D, turnover markers; **acid–base:** arterial blood gas with lactate and anion gap.",
        "The examiner's favourite question is not the list but the logic: **which test answers which question, and in what order** — e.g. TSH before free T4, ALT/ALP pattern before imaging, ferritin plus CRP together because ferritin is an acute-phase protein."
      ],
      cn: "把常用组合按器官背下来，更重要的是说清『点菜的逻辑』：先 TSH 后 fT4、先看 ALT/ALP 模式再决定影像、铁蛋白必须与 CRP 同看。" },
    { h: "6 · Screening for inherited metabolic disorders", hcn: "遗传代谢病筛查",
      points: [
        "**Wilson–Jungner criteria for any screening programme: the disease must be an important health problem with a recognisable latent stage; there must be an accepted treatment; facilities for diagnosis and treatment must be available; the test must be acceptable, safe and sufficiently sensitive/specific; the natural history must be understood; and the whole thing must be cost-effective and continuous.**",
        "**Newborn screening:** dried blood spot from a heel prick on **day 2–3 (48–72 h after birth)**; historically the **Guthrie bacterial inhibition test for phenylketonuria** (1960s, the first), today **tandem mass spectrometry**, which detects dozens of amino-acid, organic-acid and fatty-acid oxidation defects from one spot, plus specific assays.",
        "**Typical Czech/European panel: congenital hypothyroidism (TSH), congenital adrenal hyperplasia (17-OH-progesterone), cystic fibrosis (IRT + DNA), phenylketonuria and other hyperphenylalaninaemias, MCAD and other fatty-acid oxidation defects, MSUD, homocystinuria, glutaric aciduria type I, isovaleric acidaemia, biotinidase deficiency, galactosaemia (in some countries), and SCID in newer programmes.**",
        "**Screening is not diagnosis:** a positive screen must be confirmed (repeat sample, quantitative amino acids, urinary organic acids, enzyme assay, DNA). Screening tests are deliberately set for **high sensitivity, accepting false positives**; the parents' anxiety and the need for rapid confirmation are part of the programme's ethics.",
        "**Prenatal and preconception screening** completes the picture: first-trimester combined test (**PAPP-A, free β-hCG + nuchal translucency**), second-trimester **AFP/hCG/uE3/inhibin**, **cell-free fetal DNA (NIPT)**, and invasive confirmation by chorionic villus sampling or amniocentesis; carrier screening in populations with a high frequency of a given mutation.",
        "**Why it pays: PKU treated from the first weeks gives a normal IQ, untreated causes irreversible intellectual disability — the classic demonstration that biochemistry plus a screening programme can abolish a disease's consequences without curing the gene.**"
      ],
      cn: "Wilson–Jungner 原则要能列几条；新生儿筛查：出生 48–72 小时足跟血滤纸片、串联质谱、常见项目清单；筛查≠诊断（高敏感、接受假阳性）；产前筛查手段；最后用 PKU 说明筛查的价值。" }
  ],
  numbers: [
    "Errors: **preanalytical 60–70 %**, analytical 10–15 %, postanalytical 15–20 %",
    "Reference interval = central **95 %** → 5 % of healthy people outside; 20 independent tests → **64 %** chance of one 'abnormal'",
    "**RCV = 2.77 × √(CVₐ² + CVᵢ²)**; index of individuality = CVᵢ/CVg (< 0.6 means population ranges are of limited use)",
    "Newborn screening sample at **48–72 h of life**",
    "Critical values examples: **K⁺ > 6.5 or < 2.5 mmol/L, glucose < 2.5 mmol/L, Na⁺ < 120 mmol/L, calcium < 1.6 or > 3.5 mmol/L**"
  ],
  clinic: [
    "**Pseudohyperkalaemia** from a clenched fist, haemolysis or delayed centrifugation — repeat before treating",
    "**Glucose falls ~0.5 mmol/L per hour** in a plain tube — use fluoride/oxalate",
    "**Pseudohyponatraemia** in severe hyperlipidaemia or paraproteinaemia with indirect ISE methods",
    "**Ferritin with CRP**, **calcium with albumin**, **TSH with free T4** — always interpret in pairs",
    "**A positive newborn screen is not a diagnosis** — confirm before telling the family the child is affected"
  ],
  traps: [
    "**Reference interval ≠ clinical decision limit** — cholesterol and glucose are decision limits, not population ranges",
    "Analytical sensitivity (detection limit) is **not** clinical sensitivity (detecting disease)",
    "Predictive value depends on **prevalence** — the same test performs differently in screening and in a symptomatic patient",
    "Most errors are **preanalytical** — never blame the analyser first",
    "A result inside the reference interval can still be **abnormal for that individual** (low index of individuality)"
  ],
  terms: [
    ["preanalytical phase", "分析前阶段"], ["coefficient of variation", "变异系数"], ["bias / trueness", "偏倚/正确度"],
    ["Levey–Jennings chart", "Levey–Jennings 质控图"], ["Westgard rules", "Westgard 规则"],
    ["reference interval", "参考区间"], ["clinical decision limit", "临床决定限"],
    ["reference change value", "参考变化值"], ["sensitivity / specificity", "敏感性/特异性"],
    ["ROC curve", "ROC 曲线"], ["critical value", "危急值"], ["newborn screening", "新生儿筛查"]
  ]
}
});
