window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 20,
a: {
  titleEN: "β-oxidation of fatty acids in mitochondria and peroxisomes. Energy balance and integration into metabolism. Elongases and desaturases. Disorders of β-oxidation.",
  titleCN: "线粒体与过氧化物酶体中的脂肪酸 β 氧化 · 能量结算与代谢整合 · 延长酶与去饱和酶 · β 氧化障碍",
  opener: "β-oxidation degrades fatty acids **two carbons at a time** in a repeating **oxidation–hydration–oxidation–thiolysis** cycle; the pathway is **mitochondrial**, its gatekeeper is the **carnitine shuttle (CPT-1, inhibited by malonyl-CoA)**, and its products — acetyl-CoA, NADH and FADH₂ — make fat the most energy-dense fuel we have.",
  openerCN: "β 氧化每轮切下两个碳，循环为『氧化—水化—氧化—硫解』；途径在线粒体内，门户是肉碱穿梭（CPT-1 被丙二酰 CoA 抑制）；产物乙酰 CoA、NADH 与 FADH₂ 使脂肪成为能量密度最高的燃料。",
  spine: [
    "活化与转运：酰基 CoA 合成酶与肉碱穿梭",
    "四步循环与每轮产物",
    "能量结算（软脂酸 106 ATP）与不饱和/奇数碳脂肪酸的特殊处理",
    "调节：丙二酰 CoA/CPT-1、激素、酶量",
    "过氧化物酶体的 β 氧化与 α/ω 氧化",
    "酮体的生成与利用（与 β 氧化的直接关系）",
    "β 氧化障碍：MCAD、肉碱缺乏、CPT-II、Zellweger、X-ALD"
  ],
  blocks: [
    { h: "1 · Activation and the carnitine shuttle", hcn: "活化与肉碱穿梭",
      points: [
        "**Activation (outer mitochondrial membrane / ER): fatty acid + CoA-SH + ATP → acyl-CoA + AMP + PPi (acyl-CoA synthetase, thiokinase)** — the pyrophosphate is hydrolysed, so the true cost is **2 high-energy bonds**. Activation happens in the cytosol; the fatty acid can go no further without it.",
        "**Short- and medium-chain fatty acids (< C12) cross the inner membrane freely and are activated inside; LONG-CHAIN acyl-CoA cannot cross and needs the carnitine shuttle.**",
        "**The shuttle: CPT-1 (outer membrane) transfers the acyl group from CoA to CARNITINE → acylcarnitine → translocase (CACT) exchanges it for free carnitine → CPT-2 (inner membrane) transfers it back onto mitochondrial CoA.**",
        "**CPT-1 is the rate-limiting step of the whole pathway and is INHIBITED BY MALONYL-CoA** — the reciprocal switch with fatty-acid synthesis (topic 19A). This one fact answers most regulation questions.",
        "**Carnitine** is made from **lysine and methionine (with vitamin C, in liver and kidney)** and is also taken in the diet (meat); deficiency (primary transporter defect, dialysis, valproate therapy) causes muscle weakness, hypoketotic hypoglycaemia and cardiomyopathy."
      ],
      cn: "活化耗 2 个高能键；短中链自由进入、长链必须走肉碱穿梭（CPT-1→CACT→CPT-2）；CPT-1 是限速步并被丙二酰 CoA 抑制；肉碱由赖氨酸＋甲硫氨酸合成。" },
    { h: "2 · The four steps of the cycle", hcn: "四步循环",
      points: [
        "**(1) Oxidation: acyl-CoA dehydrogenase (FAD) → trans-Δ²-enoyl-CoA + FADH₂**; electrons go through **ETF and ETF-QO to coenzyme Q** (= 1.5 ATP). There are four chain-length-specific isoenzymes: **very-long (VLCAD), long (LCAD), MEDIUM (MCAD) and short (SCAD)**.",
        "**(2) Hydration: enoyl-CoA hydratase → L-3-hydroxyacyl-CoA.** **(3) Oxidation: L-3-hydroxyacyl-CoA dehydrogenase (NAD⁺) → 3-ketoacyl-CoA + NADH** (= 2.5 ATP). **(4) Thiolysis: β-ketothiolase + CoA-SH → acetyl-CoA + an acyl-CoA shortened by two carbons.**",
        "**Per cycle: 1 acetyl-CoA + 1 NADH + 1 FADH₂**, and the shortened acyl-CoA re-enters. **A C16 acid needs 7 cycles to give 8 acetyl-CoA** (the last cycle yields two).",
        "**Unsaturated fatty acids** need two extra enzymes: an **isomerase** (converts the natural cis-Δ³ into trans-Δ², for odd-numbered double bonds) and a **2,4-dienoyl-CoA reductase (NADPH)** for even-numbered ones — so each double bond costs about **1.5–2 ATP** of yield.",
        "**Odd-chain fatty acids** end with **propionyl-CoA → (propionyl-CoA carboxylase, BIOTIN) → D-methylmalonyl-CoA → (racemase) → L-methylmalonyl-CoA → (mutase, VITAMIN B12) → succinyl-CoA** — the only part of a fatty acid that is **glucogenic**, and the reason B12 deficiency raises methylmalonic acid (topic 2A)."
      ],
      cn: "四步顺序与辅酶（FAD→水化→NAD⁺→硫解）；每轮 1 乙酰 CoA＋1 NADH＋1 FADH₂；不饱和需异构酶与还原酶；奇数碳末端丙酰 CoA 经生物素与 B12 变琥珀酰 CoA（唯一能生糖的部分）。" },
    { h: "3 · Energy balance", hcn: "能量结算",
      points: [
        "**Palmitate (C16), the standard calculation: 7 cycles → 7 FADH₂ (10.5 ATP) + 7 NADH (17.5 ATP) + 8 acetyl-CoA (8 × 10 = 80 ATP) = 108, minus 2 for activation = 106 ATP.** (With the older P/O convention: 129 − 2 = 127.)",
        "Per carbon, fat yields far more than glucose: **106 ATP from 16 carbons vs 30–32 from 6** — because fatty acids are much more **reduced** and contain almost no oxygen.",
        "**Complete oxidation of palmitate consumes 23 O₂**, giving a **respiratory quotient of 0.7** (vs 1.0 for carbohydrate) — the basis of indirect calorimetry.",
        "**Water balance detail:** oxidising fat produces relatively **more metabolic water** (~1.07 g per g of fat) — the camel's hump and the hibernating animal.",
        "Where the acetyl-CoA goes: **the citrate cycle if oxaloacetate is available; ketone bodies in the liver when it is not (fasting, diabetes); and cholesterol synthesis**. Where the ATP is used: **gluconeogenesis and urea synthesis in the fasting liver** — a neat integration point."
      ],
      cn: "软脂酸 106 ATP 的算式要能写出来（7 轮 × (1.5+2.5) + 8×10 − 2）；脂肪每碳产能远高于糖；呼吸商 0.7；乙酰 CoA 的三个去向。" },
    { h: "4 · Regulation and integration", hcn: "调节与整合",
      points: [
        "**Substrate supply is the first control: lipolysis in adipose tissue (hormone-sensitive lipase, disinhibited when insulin falls) determines how many fatty acids reach the liver and muscle.**",
        "**CPT-1 and malonyl-CoA are the gate: fed state → high malonyl-CoA → no entry; fasting/exercise → AMPK phosphorylates acetyl-CoA carboxylase → malonyl-CoA falls → β-oxidation runs.**",
        "**Product inhibition:** a high **NADH/NAD⁺ ratio and high acetyl-CoA** slow the pathway (this is also how ethanol inhibits β-oxidation and causes fatty liver, topic 23B).",
        "**Transcriptional: PPARα (ligands = fatty acids themselves) induces the whole oxidative machinery** in the fasting liver — fibrates exploit this.",
        "**Tissue differences: the heart and red muscle prefer fatty acids; the liver oxidises them to make ketone bodies and ATP for gluconeogenesis; the brain cannot use them at all (they do not cross the blood–brain barrier bound to albumin, and oxidation is too slow) — hence ketone bodies exist.**"
      ],
      cn: "调节四层（底物供应→CPT-1/丙二酰 CoA→产物抑制→PPARα 基因表达）；组织差别，特别是脑不能用脂肪酸这一点，正好引出酮体。" },
    { h: "5 · Peroxisomal β-oxidation, α- and ω-oxidation, elongases and desaturases", hcn: "过氧化物酶体氧化、α/ω 氧化、延长酶与去饱和酶",
      points: [
        "**Peroxisomal β-oxidation handles what mitochondria cannot: very-long-chain fatty acids (> C22), branched-chain acids, dicarboxylic acids and the side chain of cholesterol during bile-acid synthesis.**",
        "**Differences to state: the first dehydrogenation uses an FAD-oxidase that gives H₂O₂ (destroyed by catalase) instead of feeding the respiratory chain — so that step yields NO ATP, only heat; the chain is shortened only to about C8, and the products (octanoyl-CoA and acetyl-CoA) are transferred to mitochondria via carnitine.** Peroxisomes therefore *prepare* rather than fully oxidise.",
        "**α-oxidation** (also peroxisomal) removes **one** carbon at a time and exists because **branched acids such as phytanic acid (from chlorophyll/dairy) have a methyl group on C3 that blocks β-oxidation**; its defect = **Refsum disease** (retinitis pigmentosa, ataxia, neuropathy; treated by dietary restriction).",
        "**ω-oxidation** (ER, cytochrome P450) oxidises the terminal methyl to a carboxyl → **dicarboxylic acids** excreted in urine — normally minor, but it becomes important when β-oxidation is blocked (**dicarboxylic aciduria is the laboratory sign of MCAD deficiency**).",
        "**Elongases (ER, use malonyl-CoA and NADPH) and desaturases (Δ9, Δ6, Δ5 — mixed-function oxidases with cytochrome b5, needing O₂ and NAD(P)H)** modify the C16 product of synthesis; **man has no desaturase beyond C9**, hence the essential fatty acids. The **Δ9 (stearoyl-CoA) desaturase** making oleate is the most active one and is up-regulated by insulin."
      ],
      cn: "过氧化物酶体处理超长链/支链/胆汁酸侧链，第一步产 H₂O₂ 不产 ATP，只缩短到 C8；α 氧化对付植烷酸（Refsum 病）；ω 氧化在 β 氧化受阻时产生二羧酸尿（MCAD 的线索）；延长酶与去饱和酶（人无 Δ9 以远）。" },
    { h: "6 · Ketone bodies and disorders of β-oxidation", hcn: "酮体与 β 氧化障碍",
      points: [
        "**Ketogenesis (liver mitochondria only): 2 acetyl-CoA → acetoacetyl-CoA → (HMG-CoA synthase, the rate-limiting step, the MITOCHONDRIAL isoenzyme) → HMG-CoA → (lyase) → ACETOACETATE + acetyl-CoA; acetoacetate ⇌ 3-HYDROXYBUTYRATE (depending on the NADH/NAD⁺ ratio) or decarboxylates spontaneously to ACETONE.**",
        "**Utilisation: peripheral tissues (brain after adaptation, heart, muscle, kidney) reactivate acetoacetate with succinyl-CoA (SCOT/thiophorase) — an enzyme the LIVER LACKS, which is why the liver cannot use the ketone bodies it makes.** In prolonged starvation ketone bodies cover **60–70 % of the brain's energy**, sparing muscle protein.",
        "**Physiological ketosis (fasting, ketogenic diet) vs pathological ketoacidosis (type 1 diabetes, alcoholism)**: in diabetes there is no insulin to restrain lipolysis, so production is unlimited → **metabolic acidosis with a high anion gap**. Note that the common urine dipstick detects **acetoacetate but not 3-hydroxybutyrate**, which is the dominant ketone in severe ketoacidosis — measure blood 3-hydroxybutyrate.",
        "**MCAD deficiency — the commonest β-oxidation defect (~1:15 000, screened for in newborns):** after a longer fast or an intercurrent illness the child cannot oxidise medium-chain fatty acids → **HYPOKETOTIC HYPOGLYCAEMIA (low glucose with inappropriately low ketones — the diagnostic combination), lethargy, coma, hepatomegaly, sudden death**; laboratory: **dicarboxylic aciduria, characteristic C8/C10 acylcarnitines**. Treatment: **never fast, glucose during illness, carnitine**.",
        "**Carnitine transporter deficiency and CPT-1/CPT-2 deficiency:** CPT-2 deficiency in adults causes **exercise-induced myalgia, rhabdomyolysis and myoglobinuria after prolonged exertion or fasting**; the severe neonatal forms cause cardiomyopathy. **VLCAD and LCHAD deficiency** (the latter linked to maternal HELLP syndrome) belong to the same family.",
        "**Peroxisomal diseases: Zellweger syndrome** (no functional peroxisomes — craniofacial dysmorphism, hypotonia, seizures, death in infancy) and **X-linked adrenoleukodystrophy** (ABCD1 transporter — very-long-chain fatty acids accumulate, causing demyelination and adrenal insufficiency; the 'Lorenzo's oil' disease)."
      ],
      cn: "酮体生成三步与利用（肝缺 SCOT 所以自己不能用）；生理性酮症 vs 糖尿病酮症酸中毒（试纸测不到 3-羟丁酸）；MCAD 缺乏的核心线索是『低血糖而酮体不高』；CPT-2 缺乏的运动后横纹肌溶解；Zellweger 与 X-ALD。" }
  ],
  numbers: [
    "Palmitate → **106 ATP** (7 × 4 + 8 × 10 − 2); respiratory quotient of fat **0.7**",
    "Activation costs **2 high-energy bonds**; each cycle gives **1 acetyl-CoA + 1 NADH + 1 FADH₂**",
    "MCAD deficiency **~1:15 000** — part of newborn tandem-MS screening",
    "Ketone bodies cover **60–70 %** of brain energy in prolonged starvation; blood 3-hydroxybutyrate normally **< 0.6 mmol/L**",
    "Peroxisomes shorten chains only to about **C8**; α-oxidation removes **one** carbon"
  ],
  clinic: [
    "**MCAD deficiency** — hypoketotic hypoglycaemia during fasting/illness; never let the child fast",
    "**CPT-2 deficiency** — rhabdomyolysis after prolonged exercise; **carnitine deficiency** — valproate, dialysis",
    "**Diabetic ketoacidosis** — measure blood 3-hydroxybutyrate, not just the urine dipstick",
    "**Refsum disease** (phytanic acid, α-oxidation) and **X-linked adrenoleukodystrophy** (VLCFA, peroxisomal transport)",
    "**Vitamin B12 deficiency** raises methylmalonic acid — from the propionyl-CoA route of odd-chain fatty acids"
  ],
  traps: [
    "**β-oxidation is mitochondrial, synthesis is cytosolic**; intermediates are **L-3-hydroxy** in oxidation, **D-3-hydroxy** in synthesis",
    "**Malonyl-CoA blocks CPT-1** — the single most important regulatory fact of this topic",
    "Peroxisomal oxidation of the first step yields **H₂O₂ and heat, not ATP**",
    "The liver **cannot use ketone bodies** — it lacks SCOT",
    "Only the **propionyl-CoA** from odd-chain fatty acids (and the glycerol of a triacylglycerol) is glucogenic — even-chain fatty acids are not"
  ],
  terms: [
    ["carnitine shuttle", "肉碱穿梭"], ["CPT-1 / CPT-2", "肉碱棕榈酰转移酶 1/2"], ["acyl-CoA dehydrogenase", "酰基 CoA 脱氢酶"],
    ["thiolysis", "硫解"], ["propionyl-CoA", "丙酰 CoA"], ["methylmalonyl-CoA mutase", "甲基丙二酰 CoA 变位酶"],
    ["peroxisome", "过氧化物酶体"], ["α-oxidation / ω-oxidation", "α 氧化/ω 氧化"], ["ketone bodies", "酮体"],
    ["hypoketotic hypoglycaemia", "低酮性低血糖"], ["dicarboxylic aciduria", "二羧酸尿"]
  ]
},
b: {
  titleEN: "Types of immunoglobulins and antibody structure. Nature of the antigen–antibody interaction. Monoclonal and polyclonal antibodies. Use of the antigen–antibody interaction for analysis. Immunochemical methods.",
  titleCN: "免疫球蛋白的类型与抗体结构 · 抗原-抗体相互作用的本质 · 单克隆与多克隆抗体 · 抗原抗体反应的分析应用 · 免疫化学方法",
  opener: "An antibody is a **Y-shaped glycoprotein of two heavy and two light chains**: the **variable domains bind the antigen non-covalently and reversibly**, the **constant region decides the biological effect** — and because the binding is so specific, it has become the most widely used analytical tool in the whole of laboratory medicine.",
  openerCN: "抗体是由两条重链与两条轻链构成的 Y 形糖蛋白：可变区以非共价、可逆的方式结合抗原，恒定区决定生物学效应；正因结合高度特异，它成为整个检验医学中应用最广的分析工具。",
  spine: [
    "基本结构：重/轻链、结构域、Fab/Fc、铰链、酶切片段",
    "五类免疫球蛋白的结构与功能（IgG/A/M/E/D）",
    "抗原-抗体结合的本质与亲和力/亲合力、特异性、交叉反应",
    "多克隆 vs 单克隆抗体（杂交瘤技术）",
    "沉淀与凝集反应（免疫扩散、免疫比浊、血型）",
    "标记免疫分析：ELISA、化学发光、免疫印迹、免疫组化、流式",
    "临床应用与干扰因素（钩状效应、嗜异性抗体）"
  ],
  blocks: [
    { h: "1 · Structure of the antibody molecule", hcn: "抗体的基本结构",
      points: [
        "**Two identical HEAVY chains (~50 kDa, class-defining: γ, α, µ, ε, δ) and two identical LIGHT chains (~25 kDa, either κ or λ — never both in one molecule)**, joined by **disulfide bonds**; total ~150 kDa for IgG.",
        "**Domains of ~110 amino acids with the immunoglobulin fold (a β-sandwich stabilised by an internal disulfide): light chain VL + CL; heavy chain VH + CH1, CH2, CH3 (IgM and IgE have a fourth).**",
        "**Variable domains carry three hypervariable loops each — the complementarity-determining regions (CDR1–3)**; the six CDRs of VH + VL form **the antigen-binding site (paratope)**, which contacts the **epitope**. Diversity comes from **V(D)J recombination, junctional diversity and somatic hypermutation** — enough for >10¹¹ specificities.",
        "**Papain cuts above the hinge → 2 Fab + 1 Fc; pepsin cuts below → one F(ab')₂ (still divalent) and fragments of Fc.** Know both — it is a standard question.",
        "**Fc determines the effector functions: complement activation (C1q), binding to Fc receptors of phagocytes and NK cells (ADCC), placental transfer (FcRn, IgG only), and half-life.** The **hinge region** gives the flexibility to bind two epitopes at variable distances.",
        "Basic valency: **IgG, IgD, IgE monomeric (2 binding sites); secretory IgA dimeric (4) with the J chain and secretory component; IgM pentameric (10 sites, but ~5 usable because of steric hindrance)**."
      ],
      cn: "结构六点：两重两轻＋二硫键、结构域与 CDR、Fab/Fc、木瓜蛋白酶与胃蛋白酶的切点、Fc 的效应功能、各类的价数。" },
    { h: "2 · The five classes", hcn: "五类免疫球蛋白",
      points: [
        "**IgG (~75–80 % of serum Ig, 4 subclasses):** the **secondary response** antibody; **the only one crossing the placenta (FcRn)**, activates complement (except IgG4), opsonises, longest half-life **~21 days** — hence maternal IgG protects the newborn for months.",
        "**IgA (~15 %):** dominant in **secretions (saliva, tears, milk, mucus, colostrum) as a dimer with the secretory component**, which protects it from proteolysis; it **does not activate the classical pathway** and works by neutralisation/exclusion. **Selective IgA deficiency is the commonest immunodeficiency** — and causes anaphylactic reactions to blood products, plus false-negative coeliac serology (measure total IgA).",
        "**IgM (~10 %): the FIRST antibody of the primary response, pentameric**, the **most efficient activator of complement (a single molecule can do it)**, and the natural isohaemagglutinins of the ABO system; it does not cross the placenta — **so IgM in the newborn means intrauterine infection.**",
        "**IgE (traces):** binds with high affinity to **FcεRI on mast cells and basophils** → cross-linking by allergen → **degranulation (histamine, tryptase, leukotrienes) = type I hypersensitivity**; also defence against parasites. Specific IgE and total IgE are the allergy tests.",
        "**IgD (traces):** membrane receptor of naive B cells with IgM; little known serum function.",
        "**Class switching (isotype switching)** changes the constant region while keeping the specificity, directed by cytokines and requiring T-cell help — which is why polysaccharide (T-independent) antigens give mostly IgM."
      ],
      cn: "五类各一句：IgG（二次应答、过胎盘、半衰期 21 天）、IgA（黏膜二聚体＋分泌片，最常见的免疫缺陷）、IgM（首发、五聚体、最强激活补体、新生儿检出提示宫内感染）、IgE（肥大细胞、I 型超敏）、IgD（B 细胞受体）。" },
    { h: "3 · The antigen–antibody interaction", hcn: "抗原-抗体结合的本质",
      points: [
        "The bond is **non-covalent and reversible: hydrogen bonds, ionic interactions, van der Waals forces and, above all, the hydrophobic effect** — the fit must be **complementary in shape and charge (a 'lock and key' with induced fit)**.",
        "**Affinity = the strength of ONE paratope–epitope bond (an equilibrium constant); avidity = the total strength of a multivalent interaction** — this is why **pentameric IgM has modest affinity but enormous avidity**, and why low-avidity IgG indicates a recent infection (avidity testing in toxoplasmosis and CMV during pregnancy).",
        "**Specificity and cross-reactivity:** antibodies distinguish very small differences, but similar epitopes cross-react — the basis of **rheumatic fever, the Paul–Bunnell reaction, blood-group cross-reactivity with bacterial sugars**, and of interference in immunoassays.",
        "**The reaction has two phases: the primary (invisible) binding and the secondary, visible phase — precipitation with soluble antigens, agglutination with particulate ones**, complement activation, neutralisation.",
        "**The zone phenomenon: visible precipitation occurs only near equivalence; in antigen excess (postzone) or antibody excess (prozone) the lattice does not form and the test is FALSELY NEGATIVE — the analytical version is the HOOK EFFECT** (very high hCG or prolactin reading as normal). Always mention it."
      ],
      cn: "非共价、可逆、四种作用力；亲和力 vs 亲合力（IgM 的例子、亲合力试验判断近期感染）；等价带与前带/后带现象→钩状效应（高浓度反而阴性）是必说的坑。" },
    { h: "4 · Polyclonal and monoclonal antibodies", hcn: "多克隆与单克隆抗体",
      points: [
        "**Polyclonal antisera** come from an immunised animal: a mixture of antibodies from many B-cell clones, recognising **many epitopes** of the antigen. Advantages: cheap, robust, high avidity, tolerant of small changes in the antigen. Disadvantages: **batch-to-batch variability, limited supply, more cross-reactivity**.",
        "**Monoclonal antibodies (Köhler and Milstein, 1975 — Nobel Prize):** a B cell from an immunised mouse is fused with a **myeloma cell line → HYBRIDOMA**, immortal and antibody-secreting; selection on **HAT medium** works because the myeloma lacks **HGPRT** and therefore cannot use the salvage pathway when aminopterin blocks de-novo synthesis (a lovely link to topic 13A). Single clone → **one specificity, one epitope, unlimited identical supply**.",
        "Limitation: a monoclonal antibody may **miss a variant epitope**, and murine antibodies are immunogenic in man — hence **chimeric (-ximab), humanised (-zumab) and fully human (-umab)** engineering.",
        "**Therapeutic monoclonals to name: rituximab (anti-CD20), trastuzumab (HER2), infliximab/adalimumab (TNF-α), omalizumab (IgE), denosumab (RANKL), evolocumab (PCSK9), eculizumab (C5), checkpoint inhibitors (PD-1/PD-L1)** — each of them appears in another topic of this syllabus.",
        "In the laboratory both are used together: the classic **sandwich immunoassay uses a monoclonal capture antibody and a labelled second antibody against another epitope**."
      ],
      cn: "多克隆（多表位、变异容忍、批间差异）vs 单克隆（杂交瘤、HAT 选择靠 HGPRT 缺陷、单一表位、无限供应）；命名后缀 -ximab/-zumab/-umab 与常用治疗性单抗清单。" },
    { h: "5 · Immunochemical methods", hcn: "免疫化学方法",
      points: [
        "**Precipitation methods (soluble antigen): radial immunodiffusion, Ouchterlony double diffusion, immunoelectrophoresis and IMMUNOFIXATION (the standard for a monoclonal paraprotein), and the quantitative workhorses TURBIDIMETRY and NEPHELOMETRY** (measuring light attenuation or scatter — used for IgG/A/M, CRP, complement, transferrin, albumin).",
        "**Agglutination (particulate antigen): blood grouping and the Coombs (antiglobulin) test — direct for antibodies already on the patient's red cells (autoimmune haemolysis, haemolytic disease of the newborn), indirect for antibodies in serum (cross-matching); latex agglutination for rheumatoid factor, CRP, hCG.**",
        "**Labelled immunoassays — the modern core: ELISA (enzyme-linked, with HRP or ALP and a chromogenic substrate) in competitive or SANDWICH format; chemiluminescence and electrochemiluminescence (the routine automated platforms); fluorescence immunoassay; historically radioimmunoassay (RIA, Yalow — Nobel Prize).** Sandwich assays are used for large antigens with two epitopes, competitive assays for small ones (haptens, steroids, drugs).",
        "**Blotting and imaging: Western blot (proteins separated by SDS-PAGE, then detected with antibodies — confirmation in HIV and Lyme disease), immunohistochemistry and immunofluorescence (tissue, ANA patterns), FLOW CYTOMETRY with fluorochrome-labelled antibodies (lymphocyte subsets, CD4 count, leukaemia immunophenotyping), lateral-flow rapid tests (pregnancy test, SARS-CoV-2 antigen), and immunoaffinity chromatography for purification.**",
        "**What the methods are used for clinically:** hormones, tumour markers, cardiac troponins, infectious serology (IgM = acute, IgG = past/immunity, avidity for timing), autoantibodies, allergy (specific IgE), drug monitoring and toxicology, blood group serology, and protein quantification.",
        "**Interferences to name (and impress the examiner): the hook effect at very high analyte concentrations, heterophilic antibodies and human anti-mouse antibodies (falsely high or low results), rheumatoid factor, biotin interference in streptavidin-based assays, autoantibodies against the analyte (macroprolactin, macro-AST), and the general rule that immunoassays measure IMMUNOREACTIVITY, not biological activity.**"
      ],
      cn: "四大类方法：沉淀（免疫固定、免疫比浊/散射比浊）、凝集（血型、Coombs）、标记（ELISA/化学发光/RIA，夹心 vs 竞争）、显示与分选（Western blot、免疫组化、流式、胶体金快检）。最后列出干扰因素，尤其钩状效应与嗜异性抗体。" },
    { h: "6 · Putting it together — how to answer this half", hcn: "答题整合",
      points: [
        "Start with **structure → classes → the nature of the binding → poly/monoclonal → methods**; that order turns a list into an argument.",
        "The connecting idea to state at the end: **everything analytical follows from two properties of the antibody — extremely high specificity, and a binding that is strong but non-covalent and therefore usable as a reversible reagent.**",
        "Add the quantitative frame: **immunoassays reach 10⁻⁹–10⁻¹² mol/L sensitivity**, far beyond ordinary photometry — which is why hormones, markers and drugs are measured this way.",
        "If asked for a clinical example, use one that shows the whole chain: **hCG in pregnancy (sandwich assay, hook effect at very high levels), troponin (high-sensitivity assay, 99th percentile), specific IgE (allergy), or immunofixation for a paraprotein (topic 10B).**",
        "And close with the limitation: **a positive antibody test proves exposure or presence of an epitope, not disease or function** — interpretation always needs the clinical context."
      ],
      cn: "答题顺序与收尾金句：分析应用全部源于抗体的两个性质（极高特异性＋非共价可逆结合）；免疫分析灵敏度可到 nmol–pmol/L；最后强调抗体阳性≠疾病。" }
  ],
  numbers: [
    "IgG ~**75–80 %** of serum immunoglobulin, half-life **~21 days**; IgA ~15 %, IgM ~10 %",
    "IgG **150 kDa**, IgM pentamer **~900 kDa** with **10** binding sites",
    "Serum IgG **7–16 g/L**, IgA **0.7–4 g/L**, IgM **0.4–2.3 g/L**",
    "Immunoassay sensitivity **10⁻⁹–10⁻¹² mol/L**",
    "Hybridoma selection uses **HAT medium** — the myeloma line lacks **HGPRT**"
  ],
  clinic: [
    "**IgM positive = acute infection; IgG = past infection or immunity; avidity** dates a primary infection in pregnancy",
    "**Direct Coombs test** in autoimmune haemolysis and haemolytic disease of the newborn; **anti-D prophylaxis**",
    "**Selective IgA deficiency** — false-negative coeliac serology and reactions to blood products",
    "**Hook effect** — a very high hCG or prolactin can read as normal; dilute the sample",
    "**Therapeutic monoclonals**: rituximab, trastuzumab, anti-TNF, anti-PCSK9, anti-C5, checkpoint inhibitors"
  ],
  traps: [
    "**Affinity ≠ avidity** — IgM has low affinity but high avidity",
    "**IgM does not cross the placenta**; IgG does (FcRn) — this is the basis of neonatal serology",
    "Precipitation happens only near **equivalence** — antigen or antibody excess gives a false negative",
    "Monoclonal antibodies recognise **one epitope**, so a mutated antigen can escape detection",
    "Immunoassays measure **immunoreactivity, not biological activity** (e.g. macroprolactin)"
  ],
  terms: [
    ["heavy / light chain", "重链/轻链"], ["variable domain", "可变区"], ["complementarity-determining region", "互补决定区"],
    ["Fab / Fc fragment", "Fab/Fc 片段"], ["class switching", "类别转换"], ["affinity / avidity", "亲和力/亲合力"],
    ["prozone / hook effect", "前带现象/钩状效应"], ["hybridoma", "杂交瘤"], ["ELISA", "酶联免疫吸附试验"],
    ["nephelometry", "散射比浊法"], ["immunofixation", "免疫固定电泳"], ["flow cytometry", "流式细胞术"]
  ]
}
});
