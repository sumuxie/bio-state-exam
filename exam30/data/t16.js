window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 16,
a: {
  titleEN: "Structure and metabolism of amino acids. Glucogenic amino acids and their carbon skeletons. Conversion of amino acids into specialised products (neurotransmitters, creatine, SAM). Transaminases.",
  titleCN: "氨基酸的结构与代谢 · 生糖氨基酸碳骨架的去向 · 氨基酸转化为特殊产物（神经递质、肌酸、SAM）· 转氨酶",
  opener: "Amino acids are the only major nutrient that is **not stored**: what is not used for protein synthesis is degraded, the **nitrogen going to urea** and the **carbon skeleton entering the citrate cycle or gluconeogenesis** — which is why every amino acid is classified as glucogenic, ketogenic or both.",
  openerCN: "氨基酸是唯一没有储存形式的大营养素：未用于合成蛋白质的部分即被分解——氮变成尿素，碳骨架进入三羧酸循环或糖异生；因此每个氨基酸都被分为生糖、生酮或两者兼有。",
  spine: [
    "结构与分类（20 种、L 构型、必需/非必需、按侧链分类）",
    "氨基酸池与氮平衡",
    "脱氨基：转氨作用（ALT/AST、PLP 机制）与氧化脱氨基",
    "生糖氨基酸的七个入口（丙酮酸、α-酮戊二酸、琥珀酰 CoA、延胡索酸、草酰乙酸）",
    "生酮与兼性氨基酸",
    "特殊产物：神经递质、肌酸、SAM、谷胱甘肽、卟啉、多胺、NO、牛磺酸",
    "转氨酶的临床应用"
  ],
  blocks: [
    { h: "1 · Structure and classification", hcn: "结构与分类",
      points: [
        "**General structure: an α-carbon bearing −NH₃⁺, −COO⁻, H and a side chain R**; all protein amino acids are **L-α-amino acids** (glycine is achiral). At physiological pH they are **zwitterions**; the **isoelectric point pI** is the pH at which the net charge is zero — the basis of electrophoresis and ion-exchange chromatography.",
        "**Classification by side chain: non-polar/aliphatic (Gly, Ala, Val, Leu, Ile, Pro), aromatic (Phe, Tyr, Trp), polar uncharged (Ser, Thr, Cys, Asn, Gln, Met), acidic (Asp, Glu), basic (Lys, Arg, His)**. The special ones to name: **Pro** (an imino acid, breaks helices), **Cys** (disulfide bridges), **Gly** (smallest, found every third residue in collagen), **His** (pKa ~6, the physiological buffer).",
        "**Essential (must be in the diet): Val, Leu, Ile, Thr, Met, Lys, Phe, Trp (+ His and Arg in children)** — a common mnemonic is any list you can recall reliably; **conditionally essential: Cys (from Met), Tyr (from Phe), Arg, Gln** in illness.",
        "**Amino-acid pool ~100 g**, turning over constantly: input from diet (~80–100 g/day) and from **protein breakdown (~300–400 g/day of body protein is degraded and resynthesised)**; output to protein synthesis, to nitrogen compounds, or to degradation.",
        "**Nitrogen balance:** intake = output in health; **positive** in growth, pregnancy and convalescence; **negative** in starvation, trauma, sepsis, burns and glucocorticoid excess. **1 g of nitrogen ≈ 6.25 g of protein**."
      ],
      cn: "结构（L-α-氨基酸、两性离子、pI）、五类侧链、八种必需氨基酸、氨基酸池与氮平衡（1 g 氮=6.25 g 蛋白）。" },
    { h: "2 · Removal of the amino group — transamination", hcn: "脱氨基：转氨作用",
      points: [
        "**Transamination: amino acid + α-ketoglutarate ⇌ α-keto acid + glutamate**, catalysed by **aminotransferases (transaminases) with pyridoxal phosphate (vitamin B6)** as coenzyme. It is **freely reversible** and transfers, rather than removes, nitrogen — collecting it all onto **glutamate**.",
        "**Mechanism (ping-pong): PLP forms a Schiff base (aldimine) with a lysine of the enzyme; the amino acid displaces it → external aldimine → tautomerisation to a ketimine → hydrolysis releases the keto acid and leaves pyridoxamine phosphate; the second half runs in reverse.**",
        "**ALT (alanine aminotransferase): alanine + α-KG ⇌ pyruvate + glutamate** — the enzyme of the **glucose–alanine cycle**. **AST (aspartate aminotransferase): aspartate + α-KG ⇌ oxaloacetate + glutamate** — also part of the **malate–aspartate shuttle** and the urea cycle link.",
        "**Lysine, threonine, proline and hydroxyproline are NOT transaminated** — a small but classic exam detail.",
        "**Oxidative deamination completes the job: glutamate + NAD(P)⁺ + H₂O → α-ketoglutarate + NH₄⁺ (GLUTAMATE DEHYDROGENASE, mitochondrial, reversible, allosterically inhibited by GTP/ATP and activated by ADP/GDP)** — this is where nitrogen finally becomes free ammonia for the urea cycle. Also: **amino acid oxidases (FMN/FAD, minor) and glutaminase in the kidney and gut**."
      ],
      cn: "转氨（可逆、需 PLP、把氮集中到谷氨酸）→ 谷氨酸脱氢酶氧化脱氨（唯一真正释放氨的主要反应）。PLP 的 Schiff 碱机制与『赖氨酸、苏氨酸、脯氨酸不转氨』是细节考点。" },
    { h: "3 · Carbon skeletons of the glucogenic amino acids", hcn: "生糖氨基酸的碳骨架去向",
      points: [
        "All 20 carbon skeletons converge on **just seven products: pyruvate, acetyl-CoA, acetoacetyl-CoA, α-ketoglutarate, succinyl-CoA, fumarate and oxaloacetate.** The **glucogenic** ones give pyruvate or a citrate-cycle intermediate (which can leave as oxaloacetate → PEP).",
        "**→ Pyruvate: alanine (direct transamination), glycine, serine, cysteine, threonine, tryptophan (partly).**",
        "**→ α-Ketoglutarate: glutamate, glutamine, proline, arginine, histidine** — all funnel through glutamate ('the Glu family').",
        "**→ Succinyl-CoA: methionine, valine, isoleucine (partly), threonine (partly)** — through **propionyl-CoA → methylmalonyl-CoA (needs biotin and vitamin B12)**; odd-chain fatty acids join here.",
        "**→ Fumarate: phenylalanine and tyrosine (also partly ketogenic), aspartate** (via the argininosuccinate shunt). **→ Oxaloacetate: aspartate and asparagine** — one transamination away.",
        "**Purely ketogenic: LEUCINE and LYSINE only** (both give acetoacetyl-CoA/acetyl-CoA). **Both glucogenic and ketogenic: phenylalanine, tyrosine, tryptophan, isoleucine, threonine.** Everything else is glucogenic. **Remember: the two purely ketogenic ones both begin with L.**"
      ],
      cn: "七个汇合点＋五个入口族；纯生酮只有亮氨酸与赖氨酸（都以 L 开头，好记）；兼性五个（Phe、Tyr、Trp、Ile、Thr）。琥珀酰 CoA 那条路要提生物素与 B12。" },
    { h: "4 · Specialised products I — neurotransmitters and amines", hcn: "特殊产物（一）：神经递质与胺类",
      points: [
        "**Tyrosine → catecholamines** (dopamine, noradrenaline, adrenaline) and **→ melanin** (tyrosinase) and, with iodine, **→ thyroid hormones**.",
        "**Tryptophan → serotonin → melatonin**, and **→ niacin (NAD⁺), 60 mg Trp = 1 mg niacin**; also kynurenine derivatives.",
        "**Histidine → histamine; glutamate → GABA; serine → ethanolamine/choline (and, in the brain, D-serine as the NMDA co-agonist); cysteine → taurine (bile-acid conjugation) and → H₂S as a gasotransmitter.**",
        "All the amine syntheses use the same two coenzymes: **PLP for decarboxylation, BH₄ for hydroxylation** (topic 15B).",
        "**Arginine → nitric oxide (NO synthase) and → urea + ornithine; ornithine → polyamines (putrescine, spermidine, spermine, via ornithine decarboxylase — a marker of cell proliferation)**; arginine + glycine also start creatine synthesis (below)."
      ],
      cn: "四个母体氨基酸（酪氨酸、色氨酸、组氨酸、谷氨酸）各自的产物；半胱氨酸→牛磺酸/H₂S；精氨酸→NO 与尿素；鸟氨酸→多胺。共用 PLP 与 BH4。" },
    { h: "5 · Specialised products II — creatine, SAM, glutathione, haem", hcn: "特殊产物（二）：肌酸、SAM、谷胱甘肽、血红素",
      points: [
        "**Creatine: glycine + arginine → guanidinoacetate (kidney) → + methyl from SAM → creatine (liver) → phosphorylated in muscle to creatine phosphate.** Non-enzymatic cyclisation converts **~1.7 % of the pool per day to creatinine**, which is excreted — the basis of creatinine as a renal marker proportional to muscle mass.",
        "**S-adenosylmethionine (SAM): methionine + ATP → SAM — the universal methyl donor.** After donating the methyl it becomes **S-adenosylhomocysteine → homocysteine**, which is then either **remethylated to methionine (methionine synthase, needs B12 and N5-methyl-THF; or betaine)** or **transsulfurated to cysteine (cystathionine β-synthase, needs PLP)**.",
        "**Methylation targets to quote: noradrenaline → adrenaline (PNMT), guanidinoacetate → creatine, phosphatidylethanolamine → phosphatidylcholine, DNA and histone methylation, degradation of catecholamines by COMT, and the synthesis of carnitine and melatonin.**",
        "**Homocysteine is the clinical pivot:** it rises in **B12, folate and B6 deficiency** and in **homocystinuria (CBS deficiency — lens dislocation, marfanoid habitus, thromboembolism, intellectual disability)**; it is an independent risk factor for vascular disease.",
        "**Glutathione (γ-Glu-Cys-Gly)** — note the **unusual γ-peptide bond**; the antioxidant and conjugation tripeptide (topics 4B, 23B). **Glycine + succinyl-CoA → haem** (topic 14A). **Glutamine and aspartate donate nitrogen to purines and pyrimidines** (topic 13A). **Aspartate + carbamoyl phosphate** start pyrimidines.",
        "**Carnitine** is made from **lysine and methionine (with vitamin C)** — the shuttle for fatty acids (topic 20A)."
      ],
      cn: "肌酸（甘氨酸＋精氨酸＋SAM，每天 1.7% 变肌酐）、SAM 甲基循环与同型半胱氨酸的两条去路（再甲基化需 B12/叶酸；转硫需 PLP）、谷胱甘肽的 γ-肽键、血红素、嘌呤嘧啶的氮源、肉碱。" },
    { h: "6 · Transaminases in clinical practice", hcn: "转氨酶的临床应用",
      points: [
        "**ALT is relatively liver-specific and purely cytosolic; AST is in liver, heart, skeletal muscle, kidney, brain and erythrocytes, and exists as a cytosolic and a MITOCHONDRIAL isoenzyme** — mitochondrial AST is released only in severe/necrotic damage.",
        "**De Ritis ratio AST/ALT: < 1 in acute viral hepatitis and fatty liver; > 2 in alcoholic liver disease** (because alcohol damages mitochondria and B6 deficiency lowers ALT more); high AST with normal ALT points to **muscle or haemolysis** — check **CK**.",
        "Magnitude: **> 10× the upper limit** = acute hepatitis (viral, toxic, ischaemic 'shock liver' can exceed 50×); mild elevations = steatosis, chronic hepatitis, drugs, muscle exercise.",
        "**Preanalytics matter:** haemolysis of the sample raises AST (erythrocytes contain it), and **assays require added PLP** — in B6 deficiency the measured activity falls artefactually.",
        "Put them in the panel: **ALT/AST = hepatocellular damage; ALP/GGT = cholestasis; bilirubin, albumin and INR = liver FUNCTION.** Saying that damage markers and function markers are different things is what distinguishes a good answer (topic 29B)."
      ],
      cn: "ALT 相对肝特异且只在胞质；AST 分布广且有线粒体同工酶。De Ritis 比值（酒精性 >2）、损伤指标与功能指标的区分是必说的临床结论。" }
  ],
  numbers: [
    "Free amino-acid pool **~100 g**; body protein turnover **300–400 g/day**; dietary need **0.8 g protein/kg/day**",
    "**1 g nitrogen = 6.25 g protein**; **60 mg tryptophan = 1 mg niacin**",
    "Purely ketogenic: **leucine and lysine**; both: **Phe, Tyr, Trp, Ile, Thr**",
    "Creatine → creatinine **~1.7 % of the pool per day**; serum creatinine **60–110 µmol/L**",
    "ALT and AST normal roughly **< 0.6–0.8 µkat/L (≈ 40 U/L)**; De Ritis ratio > 2 in alcoholic disease"
  ],
  clinic: [
    "**Homocystinuria (CBS deficiency)** — thrombosis, ectopia lentis; treat with B6, betaine, folate, B12",
    "**Vitamin B6 deficiency (isoniazid)** — transaminases and decarboxylases fail: neuropathy, convulsions, sideroblastic anaemia",
    "**Maple syrup urine disease** — branched-chain α-keto acid dehydrogenase (thiamine-dependent)",
    "**Creatinine** as the renal marker; **creatine kinase** for muscle",
    "**De Ritis ratio** and the ALT/AST vs ALP/GGT pattern in liver disease"
  ],
  traps: [
    "Transamination **does not remove nitrogen from the body** — it only collects it on glutamate",
    "**Glutamate dehydrogenase** is the reaction that actually liberates ammonia",
    "Only **leucine and lysine** are purely ketogenic",
    "Even-chain fatty acids cannot make glucose, but **glucogenic amino acids can** — that is the whole point of muscle proteolysis in starvation",
    "AST is **not liver-specific** — always interpret it together with ALT and CK"
  ],
  terms: [
    ["zwitterion", "两性离子"], ["isoelectric point", "等电点"], ["essential amino acid", "必需氨基酸"],
    ["transamination", "转氨作用"], ["pyridoxal phosphate", "磷酸吡哆醛"], ["oxidative deamination", "氧化脱氨基"],
    ["glucogenic / ketogenic", "生糖/生酮"], ["S-adenosylmethionine", "S-腺苷甲硫氨酸"],
    ["homocysteine", "同型半胱氨酸"], ["polyamine", "多胺"], ["De Ritis ratio", "De Ritis 比值"]
  ]
},
b: {
  titleEN: "Chemical composition of bone and tooth. Osteoblasts and osteoclasts. Hormonal regulation of calcium metabolism. Markers of bone formation and degradation. Osteoporosis.",
  titleCN: "骨与牙的化学组成 · 成骨细胞与破骨细胞 · 钙代谢的激素调节 · 骨形成与骨吸收的标志物 · 骨质疏松",
  opener: "Bone is a **composite material — a collagen I scaffold mineralised with hydroxyapatite** — and at the same time the body's **calcium and phosphate reservoir**, continuously remodelled by the osteoblast–osteoclast pair under the control of **PTH, calcitriol and calcitonin**.",
  openerCN: "骨是一种复合材料——I 型胶原支架被羟基磷灰石矿化——同时又是体内钙磷储库，由成骨细胞与破骨细胞在 PTH、骨化三醇与降钙素调控下不断重塑。",
  spine: [
    "骨的组成：有机基质、无机相、水",
    "牙的组成与骨的差别（釉质、牙本质、牙骨质）",
    "成骨细胞、破骨细胞、骨细胞与重塑周期（RANKL/OPG）",
    "钙磷的体内分布与血中三种形式",
    "PTH、骨化三醇、降钙素、FGF-23 的作用与调节",
    "骨形成与骨吸收的生化标志物",
    "骨质疏松与其他骨代谢病、治疗药物的机制"
  ],
  blocks: [
    { h: "1 · Composition of bone", hcn: "骨的化学组成",
      points: [
        "By dry weight: **~65 % inorganic mineral, ~25 % organic matrix, ~10 % water**.",
        "**Organic matrix: 90–95 % type I collagen** plus non-collagenous proteins — **osteocalcin (a vitamin-K-dependent Gla protein, the marker of osteoblast activity), osteonectin, osteopontin, bone sialoprotein, proteoglycans, and growth factors (BMP, TGF-β, IGF) stored in the matrix**.",
        "**Mineral: hydroxyapatite Ca₁₀(PO₄)₆(OH)₂** in tiny crystals aligned along the collagen fibrils; it is not pure — it contains **carbonate, magnesium, sodium, fluoride and citrate** and readily exchanges ions (fluoride makes fluorapatite, harder and more acid-resistant; strontium and lead are also incorporated).",
        "**Mineralisation** requires: an ordered collagen template, a high local Ca × P product (**alkaline phosphatase hydrolyses pyrophosphate, the natural inhibitor of crystallisation, and liberates phosphate**), and matrix vesicles as nucleation sites. **This is why ALP is a bone-formation marker and why its deficiency (hypophosphatasia) causes rickets.**",
        "Bone types: **cortical (compact, 80 % of mass, slow turnover) and trabecular (spongy, 20 % of mass but most of the surface, fast turnover)** — which is why osteoporotic fractures happen first in the vertebrae and distal radius."
      ],
      cn: "干重 65% 无机、25% 有机、10% 水；有机相 90% 是 I 型胶原＋骨钙素等；无机相是羟基磷灰石 Ca10(PO4)6(OH)2；碱性磷酸酶通过水解焦磷酸促进矿化。皮质骨 vs 松质骨的周转差别。" },
    { h: "2 · Tooth", hcn: "牙的组成",
      points: [
        "**Enamel — the hardest tissue in the body: ~96 % mineral (large hydroxyapatite crystals), ~1 % organic (amelogenin, enameline — NOT collagen), no cells, no nerves, and NO capacity for regeneration** once formed.",
        "**Dentine — ~70 % mineral, 20 % organic (type I collagen), 10 % water**, permeated by tubules with odontoblast processes → sensitive; it can be repaired (secondary/tertiary dentine).",
        "**Cementum** resembles bone (~65 % mineral, collagen matrix) and anchors the periodontal ligament; **pulp** is loose connective tissue with vessels and nerves.",
        "**Caries biochemistry:** oral bacteria (*Streptococcus mutans*) ferment sugars → **lactic acid → local pH falls below the critical value ~5.5 → demineralisation of enamel**; saliva buffers (bicarbonate, phosphate, urea), remineralises, and **fluoride converts hydroxyapatite to fluorapatite (dissolves only below pH ~4.5)** — the whole rationale of fluoride prophylaxis. Too much fluoride during development → **fluorosis**.",
        "**Tetracyclines chelate calcium and are deposited in developing teeth and bone** (discoloration) — contraindicated in children and pregnancy."
      ],
      cn: "釉质 96% 无机、无细胞不能再生、蛋白不是胶原；牙本质像骨；龋齿=细菌产酸使 pH<5.5 脱矿，氟化物形成氟磷灰石（耐酸到 pH 4.5）。四环素沉积于发育中的牙。" },
    { h: "3 · Cells and the remodelling cycle", hcn: "骨细胞与重塑周期",
      points: [
        "**Osteoblasts** (mesenchymal origin) build: they secrete collagen and the non-collagenous proteins (osteoid), express **alkaline phosphatase**, and control mineralisation; some become **osteocytes** trapped in lacunae — the **mechanosensors** of bone, and the main source of **RANKL and sclerostin**.",
        "**Osteoclasts** (from the monocyte–macrophage lineage, multinucleated) resorb: they seal a compartment with the **ruffled border**, pump **H⁺ (V-ATPase + carbonic anhydrase II)** to dissolve the mineral at **pH ~4.5**, and secrete **cathepsin K and MMP-9** to digest the collagen; **tartrate-resistant acid phosphatase (TRAP)** is their marker.",
        "**The RANK/RANKL/OPG axis is the answer to 'how is remodelling controlled':** osteoblasts/osteocytes present **RANKL**, which binds **RANK** on osteoclast precursors → differentiation and activation; **osteoprotegerin (OPG)** is the decoy receptor that blocks it. **PTH, calcitriol, IL-1, IL-6 and glucocorticoids raise RANKL; oestrogens raise OPG** — which explains postmenopausal bone loss and the drug **denosumab (an anti-RANKL antibody)**.",
        "**Remodelling cycle: activation → resorption (2–3 weeks) → reversal → formation (3–4 months) → quiescence**; about **10 % of the skeleton is renewed each year**, and the whole skeleton every ~10 years.",
        "**Coupling** is the reason antiresorptive drugs also lower formation markers, and why bone loss accelerates whenever turnover increases (menopause, hyperthyroidism, hyperparathyroidism)."
      ],
      cn: "成骨细胞（ALP、骨钙素）、破骨细胞（V-ATP 酶产酸 pH 4.5、组织蛋白酶 K、TRAP）、骨细胞（力学感受器、RANKL/骨硬化蛋白）；RANK/RANKL/OPG 轴＋雌激素与地诺单抗；重塑周期的时间尺度。" },
    { h: "4 · Calcium and phosphate — distribution and forms", hcn: "钙与磷的分布与血中形式",
      points: [
        "**Calcium: ~1 kg in the body, 99 % in the skeleton.** Plasma total **2.2–2.6 mmol/L in three forms: ~50 % ionised (the only active form), ~40 % bound to albumin, ~10 % complexed with citrate/phosphate.**",
        "**Alkalosis lowers ionised calcium** (H⁺ leaves albumin, so more Ca²⁺ binds) → **tetany during hyperventilation with normal total calcium** — a favourite exam scenario. Correct total calcium for albumin, or measure ionised calcium directly.",
        "**Phosphate: ~85 % in bone**; plasma **0.8–1.5 mmol/L**, mostly free; it is an intracellular anion, a buffer, and part of ATP, nucleic acids and phospholipids. The **calcium × phosphate product** determines the risk of ectopic calcification.",
        "Daily balance: intake **~1000 mg Ca**, absorbed ~30 % (calcitriol-dependent, **TRPV6/calbindin transcellular in the duodenum + paracellular elsewhere**), the rest excreted; the kidney filters ~10 g/day and reabsorbs **98–99 %** (PTH acts on the distal tubule).",
        "Functions of calcium worth naming: **muscle contraction, neurotransmitter and hormone release, second messenger, coagulation (factor IV), enzyme cofactor, and bone mineral** — this is why its concentration is so tightly regulated."
      ],
      cn: "钙 99% 在骨；血钙三种形式（离子钙 50% 才有活性）；碱中毒使离子钙下降导致手足搐搦（总钙正常）；磷的分布与钙磷乘积；肠吸收 30%、肾重吸收 98–99%。" },
    { h: "5 · Hormonal regulation", hcn: "钙代谢的激素调节",
      points: [
        "**PTH (84 aa, parathyroid chief cells; secretion controlled by the calcium-sensing receptor CaSR)** — released when calcium falls. Actions: **bone resorption (indirectly, via RANKL on osteoblasts), renal Ca²⁺ reabsorption ↑, phosphate reabsorption ↓ (phosphaturic), and 1α-hydroxylase ↑ → more calcitriol.** Net: **calcium ↑, phosphate ↓.**",
        "**Calcitriol (1,25-(OH)₂-D₃)** — nuclear receptor VDR/RXR: **intestinal absorption of both calcium AND phosphate ↑**, synergy with PTH on bone, renal reabsorption ↑. Net: **calcium ↑, phosphate ↑** (this difference from PTH is what the examiner listens for).",
        "**Calcitonin (thyroid C cells)** — released by hypercalcaemia; **inhibits osteoclasts** → calcium ↓. Physiologically minor in adults (thyroidectomy causes no calcium disorder), but it is the **tumour marker of medullary thyroid carcinoma**.",
        "**FGF-23 (from osteocytes) with klotho** — the phosphate-lowering hormone: **inhibits renal phosphate reabsorption and inhibits 1α-hydroxylase**; excess causes **X-linked/tumour-induced hypophosphataemic rickets**, and it rises early in chronic kidney disease.",
        "**Secondary players:** oestrogens and androgens (restrain resorption — deficiency accelerates loss), **glucocorticoids** (inhibit osteoblasts, reduce calcium absorption → osteoporosis), **thyroid hormone** (increases turnover), GH/IGF-1 (growth).",
        "**Chronic kidney disease shows the whole system at once (CKD-MBD): less 1α-hydroxylation → low calcitriol → low calcium; phosphate retention → higher FGF-23 and PTH → secondary and finally tertiary hyperparathyroidism, renal osteodystrophy and vascular calcification.**"
      ],
      cn: "PTH（升钙降磷）、骨化三醇（升钙升磷）、降钙素（降钙、临床价值在于髓样癌标志物）、FGF-23（降磷、抑制 1α 羟化酶）。最后用慢性肾病矿物质骨病把四者串起来。" },
    { h: "6 · Markers, osteoporosis and therapy", hcn: "标志物、骨质疏松与治疗",
      points: [
        "**Formation markers: bone-specific alkaline phosphatase, osteocalcin, P1NP (and P1CP)** — all products of the osteoblast. **Resorption markers: CTX (β-CrossLaps) and NTX, pyridinoline and deoxypyridinoline, TRAP-5b**, plus historical urinary hydroxyproline.",
        "Rules of use: markers assess **turnover and response to treatment, not diagnosis**; they have **high biological variability (diurnal rhythm — take CTX fasting in the morning)**; a fall of CTX by ≥ 30–50 % after 3 months confirms that a bisphosphonate is working and that the patient is taking it.",
        "**Osteoporosis: reduced bone mass with normal mineralisation and disturbed microarchitecture → fragility fractures.** Diagnosed by **DXA: T-score ≤ −2.5** (osteopenia −1 to −2.5), or by a fragility fracture of hip/vertebra regardless of density. **Laboratory calcium, phosphate and ALP are typically NORMAL** — their role is to exclude other causes.",
        "**Compare: osteomalacia/rickets = defective mineralisation (vitamin D deficiency — low/normal calcium, low phosphate, HIGH ALP, high PTH); osteitis fibrosa cystica = hyperparathyroidism (high calcium, low phosphate, high ALP); Paget disease = disordered remodelling (isolated very high ALP with normal calcium); osteopetrosis = defective osteoclasts (carbonic anhydrase II deficiency).**",
        "Risk factors: postmenopausal oestrogen loss, age, low body weight, immobility, smoking, alcohol, **glucocorticoids**, hyperthyroidism, hypogonadism, coeliac disease, low calcium/vitamin D intake.",
        "**Therapy follows the cell biology: antiresorptive — bisphosphonates (bind hydroxyapatite, are taken up by osteoclasts and block farnesyl pyrophosphate synthase → apoptosis), denosumab (anti-RANKL), oestrogen/SERMs, calcitonin; anabolic — teriparatide (intermittent PTH stimulates formation, whereas continuous PTH resorbs — a beautiful example of pulsatile signalling), romosozumab (anti-sclerostin); plus calcium and vitamin D as the foundation.**"
      ],
      cn: "标志物两栏（形成：骨 ALP、骨钙素、P1NP；吸收：CTX/NTX、脱氧吡啶啉、TRAP-5b）；骨质疏松的诊断（T 值 ≤ −2.5，生化通常正常）与四个鉴别（骨软化、甲旁亢、Paget、骨硬化症）；药物机制，特别是间断 PTH 促进骨形成这一点。" }
  ],
  numbers: [
    "Bone: **65 % mineral, 25 % organic, 10 % water**; enamel **~96 % mineral**",
    "Plasma calcium **2.2–2.6 mmol/L** (ionised **1.1–1.3**), phosphate **0.8–1.5 mmol/L**",
    "Body calcium **~1 kg, 99 % in bone**; intestinal absorption ~30 %; renal reabsorption 98–99 %",
    "Critical pH for enamel demineralisation **~5.5** (fluorapatite ~4.5); osteoclast resorption lacuna pH **~4.5**",
    "**T-score ≤ −2.5 = osteoporosis**; ~10 % of the skeleton is remodelled per year"
  ],
  clinic: [
    "**Primary hyperparathyroidism** — high calcium, low phosphate, high PTH: 'stones, bones, abdominal groans, psychic moans'",
    "**Vitamin D deficiency** — rickets/osteomalacia: low-normal calcium, low phosphate, **high ALP and PTH**",
    "**Hyperventilation tetany** — normal total calcium, low ionised calcium (alkalosis)",
    "**CKD-MBD** — low calcitriol, high phosphate, high FGF-23 and PTH, vascular calcification",
    "**Bisphosphonates, denosumab, teriparatide** — each with a mechanism you can state in one sentence"
  ],
  traps: [
    "**PTH raises calcium and LOWERS phosphate; calcitriol raises both** — the classic discriminator",
    "Osteoclasts do not 'eat' bone directly — they **acidify** to dissolve mineral and use **cathepsin K** for collagen",
    "In osteoporosis routine calcium, phosphate and ALP are **normal** — abnormal values mean another diagnosis",
    "Enamel contains **no collagen and cannot regenerate**",
    "**Continuous PTH resorbs bone, intermittent PTH builds it** — the same hormone, opposite effects"
  ],
  terms: [
    ["hydroxyapatite", "羟基磷灰石"], ["osteoid", "类骨质"], ["osteocalcin", "骨钙素"],
    ["RANKL / OPG", "核因子κB 受体活化因子配体/骨保护素"], ["cathepsin K", "组织蛋白酶 K"],
    ["tartrate-resistant acid phosphatase", "抗酒石酸酸性磷酸酶"], ["calcium-sensing receptor", "钙敏感受体"],
    ["calcitriol", "骨化三醇"], ["FGF-23", "成纤维细胞生长因子 23"], ["bone turnover marker", "骨转换标志物"],
    ["T-score", "T 值"]
  ]
}
});
