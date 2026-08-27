window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 6,
a: {
  titleEN: "Structure of saccharides. Metabolism of glycogen — synthesis and degradation. Regulation of metabolic pathways.",
  titleCN: "糖类的结构 · 糖原的合成与分解 · 代谢途径调节的一般原理",
  opener: "Saccharides are **polyhydroxy aldehydes or ketones**; the storage form in man is **glycogen**, a branched α-1,4/α-1,6 polymer of glucose whose synthesis and degradation are **reciprocally regulated by a phosphorylation cascade** — a model example of how any metabolic pathway is controlled.",
  openerCN: "糖是多羟基醛或酮；人体的储存形式是糖原（α-1,4 主链＋α-1,6 分支）；其合成与分解由磷酸化级联互反调节，正是代谢调节的范例。",
  spine: [
    "分类与结构：单糖—二糖—多糖；D/L、差向异构、端基异构 (anomer)、变旋",
    "重要单糖及其衍生物（氨基糖、糖醛酸、脱氧糖、糖苷）",
    "二糖与多糖：麦芽糖/乳糖/蔗糖；淀粉、糖原、纤维素、糖胺聚糖",
    "糖原的结构与合成（UDP-葡萄糖→糖原合酶→分支酶）",
    "糖原分解（磷酸化酶＋脱支酶）与肝/肌的分工",
    "级联调节：PKA、磷酸化酶激酶、PP1、别构与钙",
    "代谢调节的一般原理（限速酶、区隔化、共价修饰、基因表达、激素层级）"
  ],
  blocks: [
    { h: "1 · Structure of saccharides", hcn: "糖的结构基础",
      points: [
        "Definition: **polyhydroxyaldehydes (aldoses) or polyhydroxyketones (ketoses)**, general formula (CH₂O)n. Classified by carbon number (triose, tetrose, pentose, **hexose**) and by size: **mono-, di-, oligo-, polysaccharides**.",
        "**Configuration:** the D/L assignment is made from the **chiral carbon furthest from the carbonyl** (C5 in glucose); **almost all natural sugars are D**. Number of stereoisomers **2ⁿ** (aldohexose n = 4 → 16). **Epimers** differ at one carbon only: glucose/galactose at C4, glucose/mannose at C2.",
        "**Cyclisation:** the carbonyl reacts intramolecularly with an OH → hemiacetal/hemiketal → **pyranose (6-membered) or furanose (5-membered)** ring (Haworth projection). This creates a new chiral centre, the **anomeric carbon**: **α (OH down/trans to CH₂OH) and β (OH up)** — the α/β difference is what starch and cellulose are built on. **Mutarotation** is the spontaneous interconversion through the open chain.",
        "**Reducing sugars** have a free anomeric OH (glucose, fructose, lactose, maltose) and reduce Cu²⁺ in the **Fehling/Benedict** test; **sucrose is non-reducing** because both anomeric carbons are engaged.",
        "**Derivatives to know:** **amino sugars** (glucosamine, galactosamine, N-acetyl derivatives, **N-acetylneuraminic = sialic acid**), **uronic acids** (glucuronic — conjugation and glycosaminoglycans), **deoxysugars** (2-deoxyribose, fucose), **sugar alcohols** (sorbitol, mannitol, myo-inositol), **phosphate esters** (G6P), and **glycosides** (bond through the anomeric carbon: O-, N-glycosidic — the latter in nucleotides and N-glycoproteins)."
      ],
      cn: "结构这一段要能画：D-葡萄糖的 Fischer 与 Haworth 式、α/β 端基异构、差向异构（C4→半乳糖、C2→甘露糖）、还原糖与非还原糖。" },
    { h: "2 · Di-, oligo- and polysaccharides", hcn: "二糖与多糖",
      points: [
        "**Maltose = Glc α1→4 Glc** (from starch, reducing); **lactose = Gal β1→4 Glc** (milk, reducing); **sucrose = Glc α1↔2β Fru** (non-reducing); **isomaltose α1→6**; **trehalose α1↔1α**.",
        "**Starch** = amylose (linear α1→4) + amylopectin (branched α1→6 every ~24–30 residues); **glycogen** is the same chemistry but **branched every 8–12 residues** — more branch points, faster mobilisation; **cellulose is β1→4 and we cannot digest it** (no β-glucosidase) — dietary fibre.",
        "**Glycosaminoglycans** = repeating disaccharide of a **uronic acid + amino sugar**, highly sulfated and negatively charged: **hyaluronan (not sulfated, not protein-bound), chondroitin sulfate, keratan sulfate, dermatan sulfate, heparan sulfate, heparin**; with a core protein they form **proteoglycans** (aggrecan) — the water-binding component of matrix (topic 6B).",
        "**Glycoproteins** — the sugar is a minority component, attached **N-glycosidically to Asn (in the sequon Asn-X-Ser/Thr)** or **O-glycosidically to Ser/Thr**; functions in recognition, blood groups, hormones (**FSH, TSH, hCG**), immunoglobulins.",
        "Digestion: **salivary and pancreatic α-amylase** cleave internal α1→4 bonds; the **brush-border enzymes maltase-glucoamylase, sucrase-isomaltase and lactase** finish the job. **Lactase deficiency (hypolactasia) → osmotic diarrhoea and flatulence** — the commonest enzyme deficiency of mankind."
      ],
      cn: "三个二糖的键型必须能写；淀粉/糖原/纤维素的差别；糖胺聚糖与糖蛋白的分类；乳糖酶缺乏症作为临床落点。" },
    { h: "3 · Glycogen — synthesis", hcn: "糖原合成",
      points: [
        "Glycogen granules (β-particles ~20–30 nm) contain the enzymes; the primer is the protein **glycogenin**, which glucosylates itself. Stores: **liver ~100 g (blood glucose reservoir)**, **muscle ~400 g (own fuel)**.",
        "**Glucose → G6P (hexokinase/glucokinase) → G1P (phosphoglucomutase) → UDP-glucose (UDP-glucose pyrophosphorylase + UTP; PPi hydrolysis pulls the reaction)**.",
        "**Glycogen synthase** attaches the glucose to the **non-reducing end via α1→4** — the **rate-limiting enzyme**, active when **dephosphorylated**, allosterically activated by **glucose-6-phosphate**.",
        "**Branching enzyme** transfers a block of ~7 residues from a chain of at least 11 to a C6-OH at least 4 residues from an existing branch → **α1→6**.",
        "Energy cost **2 ATP-equivalents per glucose incorporated**; osmotically ~55 000 glucose units cost nothing compared with free glucose, which is the whole point of polymerisation."
      ],
      cn: "合成三步＋引物糖原蛋白；糖原合酶去磷酸化才活跃、被 G6P 别构激活——这两点是与磷酸化酶正好相反的记忆点。" },
    { h: "4 · Glycogen — degradation", hcn: "糖原分解",
      points: [
        "**Glycogen phosphorylase (PLP as coenzyme) performs phosphorolysis → glucose-1-phosphate**, stopping **4 residues from a branch point**.",
        "**Debranching enzyme, two activities in one polypeptide:** 4:4 **transferase** moves 3 residues, **α1→6-glucosidase** releases the branch residue as **free glucose** (~10 % of the total).",
        "G1P → G6P; **liver: glucose-6-phosphatase → free glucose to the blood; muscle: straight into glycolysis** (saving one ATP).",
        "**Lysosomal degradation by acid α-glucosidase (maltase)** handles a few per cent — its defect is **Pompe disease**.",
        "Timing in fasting: hepatic glycogenolysis dominates for the **first ~8–12 h**, is exhausted at **~24 h**, and hands over to gluconeogenesis; muscle glycogen never contributes glucose to blood, only lactate and alanine."
      ],
      cn: "分解=磷酸解＋脱支酶双活性；肝有 G6P 酶、肌肉没有；空腹 8–12 小时糖原为主，之后交给糖异生。" },
    { h: "5 · Cascade regulation of glycogen metabolism", hcn: "糖原代谢的级联调节",
      points: [
        "**Glucagon (liver) / adrenaline (liver + muscle) → Gs → adenylate cyclase → cAMP → PKA**. PKA phosphorylates **phosphorylase kinase (→ active)** and **glycogen synthase (→ inactive)**; phosphorylase kinase then converts **phosphorylase b → a**. One signal, opposite effects on the two enzymes.",
        "**Insulin → PI3K/Akt → protein phosphatase 1 (PP1) activation and inhibition of GSK-3** → glycogen synthase is dephosphorylated (**active**), phosphorylase is dephosphorylated (**inactive**) → net storage.",
        "**Allosteric fine-tuning:** in **muscle AMP activates phosphorylase b**, ATP and G6P inhibit it, and **Ca²⁺–calmodulin (the δ subunit of phosphorylase kinase) couples contraction directly to glycogenolysis**; in **liver free glucose binds phosphorylase a and makes it a substrate for PP1** — the liver senses the blood it is supposed to serve.",
        "**Amplification** of the cascade is about 10⁶: one hormone molecule → millions of glucose units. This is the standard example of a **signal amplification cascade** with second messengers.",
        "Termination: phosphodiesterase degrades cAMP (inhibited by caffeine/methylxanthines), phosphatases dephosphorylate, GTPase of Gα switches the G protein off."
      ],
      cn: "把级联从受体→G 蛋白→cAMP→PKA→磷酸化酶激酶→磷酸化酶画出来，并强调同一个 PKA 同时关掉糖原合酶；胰岛素靠 PP1 与抑制 GSK-3。" },
    { h: "6 · General principles of metabolic regulation", hcn: "代谢途径调节的一般原理（本题的『理论分』）",
      points: [
        "**Regulation always acts on the irreversible, rate-limiting, committed step** — the first step unique to the pathway (PFK-1, HMG-CoA reductase, CPS-I, ALA synthase, acetyl-CoA carboxylase).",
        "**Five mechanisms, in order of speed:** (1) **substrate/product availability** (mass action, milliseconds), (2) **allosteric effectors** (seconds), (3) **covalent modification** — phosphorylation (seconds–minutes), (4) **change of enzyme amount** — induction/repression and degradation (hours–days), (5) **compartmentation** and transport between organelles.",
        "**Reciprocal regulation of opposing pathways** (glycolysis/gluconeogenesis, glycogen synthesis/degradation, lipogenesis/β-oxidation, via **malonyl-CoA and CPT-1**) prevents **futile cycles**.",
        "**Hormonal hierarchy:** insulin = the fed, anabolic signal; glucagon, adrenaline, cortisol, growth hormone and thyroxine = the fasting/stress, catabolic signals; the **insulin/glucagon ratio** decides the direction of hepatic metabolism.",
        "**Energy sensors:** **AMPK** (senses AMP/ATP — switches catabolism on, anabolism off), **mTOR** (senses amino acids and growth signals — anabolism), **sirtuins** (sense NAD⁺). Together with second messengers (cAMP, Ca²⁺, DAG/IP₃) they integrate the whole organism.",
        "**Organ specialisation** completes the picture: liver = the metabolic centre with glucokinase and G6Pase, muscle = its own consumer, adipose = store, brain = obligate glucose consumer, erythrocyte = pure glycolysis (topic 27B)."
      ],
      cn: "这一段是题面上『Regulation of metabolic pathways』的直接答案：限速步骤→五种机制→互反调节→激素层级→能量感受器(AMPK/mTOR)→器官分工。" }
  ],
  numbers: [
    "Glycogen branch every **8–12 residues** (amylopectin every 24–30)",
    "Liver glycogen **~100 g (≈10 % of liver mass)**, muscle **~400 g (1–2 %)**",
    "Debranching releases **~10 % free glucose**, ~90 % as glucose-1-P",
    "Storage cost **2 ATP-equivalents per glucose**; cascade amplification **~10⁶**",
    "Aldohexose has **2⁴ = 16 stereoisomers**"
  ],
  clinic: [
    "**Lactose intolerance** — the most common enzymopathy; hydrogen breath test",
    "**Glycogen storage diseases I, II, III, V** (see topic 4A) — liver type = hypoglycaemia, muscle type = exercise intolerance",
    "**Caffeine/theophylline** inhibit phosphodiesterase → prolong the cAMP signal",
    "**Insulin therapy** promotes glycogen storage; **β-blockers** blunt adrenaline-driven glycogenolysis and can mask hypoglycaemia",
    "Blood group antigens **A, B, 0** are oligosaccharides on glycoproteins/glycolipids — a favourite follow-up question"
  ],
  traps: [
    "Glycogen synthase is active when **dephosphorylated**; phosphorylase when **phosphorylated** — state both to show you have not mixed them",
    "Phosphorolysis, not hydrolysis — the product is **glucose-1-phosphate**",
    "Sucrose is **non-reducing**; lactose and maltose are reducing",
    "Cellulose differs from starch **only** by the β1→4 bond — that single anomeric difference is why we cannot digest it",
    "Do not answer 'regulation' with hormones only — the examiner wants the **rate-limiting step + five mechanisms**"
  ],
  terms: [
    ["anomeric carbon", "端基碳（异头碳）"], ["epimer", "差向异构体"], ["mutarotation", "变旋"],
    ["glycosidic bond", "糖苷键"], ["reducing sugar", "还原糖"], ["glycosaminoglycan", "糖胺聚糖"],
    ["glycogenin", "糖原蛋白"], ["branching enzyme", "分支酶"], ["protein phosphatase 1", "蛋白磷酸酶 1"],
    ["committed step", "关键步骤"], ["AMPK", "AMP 活化蛋白激酶"]
  ]
},
b: {
  titleEN: "Proteins of the extracellular matrix. Biosynthesis and degradation of collagen, role of vitamin C. Biochemical markers of matrix degradation. Elastin. Protease inhibitors, matrix metalloproteinases.",
  titleCN: "细胞外基质蛋白 · 胶原的合成与降解与维生素 C · 基质降解的生化标志物 · 弹性蛋白 · 蛋白酶抑制剂与基质金属蛋白酶",
  opener: "The extracellular matrix is built from four classes of molecule: **structural proteins (collagen, elastin), adhesive glycoproteins (fibronectin, laminin), proteoglycans/glycosaminoglycans, and the enzymes that remodel them (MMPs) with their inhibitors (TIMPs)**.",
  openerCN: "细胞外基质由四类分子构成：结构蛋白（胶原、弹性蛋白）、黏附糖蛋白（纤连蛋白、层粘连蛋白）、蛋白聚糖/糖胺聚糖，以及负责重塑的酶（MMP）及其抑制剂（TIMP）。",
  spine: [
    "ECM 的四类成分与功能",
    "胶原的一级结构与三股螺旋（Gly-X-Y、羟脯氨酸）",
    "胶原生物合成：细胞内 6 步＋细胞外 3 步",
    "维生素 C 的作用与坏血病",
    "胶原类型与遗传病（成骨不全、Ehlers–Danlos、Alport）",
    "弹性蛋白与锁链素；弹性纤维",
    "降解：MMP/TIMP 与蛋白酶抑制剂；骨与胶原代谢的标志物"
  ],
  blocks: [
    { h: "1 · Components of the extracellular matrix", hcn: "细胞外基质的组成",
      points: [
        "**Structural (fibrous) proteins: collagen** — the most abundant protein in the body (**~25–30 % of all protein**), tensile strength; **elastin** — reversible elasticity.",
        "**Adhesive glycoproteins: fibronectin** (binds cells via **RGD sequence → integrins**, plus collagen and heparin; important in wound healing) and **laminin** (a cross-shaped protein of the **basement membrane**, with type IV collagen, nidogen and perlecan).",
        "**Proteoglycans:** a core protein with many **glycosaminoglycan** chains (aggrecan in cartilage, decorin, syndecan, perlecan); extremely hydrophilic → they bind water and Na⁺, resist compression, act as a sieve in the glomerular basement membrane (heparan sulfate = the **charge barrier**) and store growth factors.",
        "**Hyaluronan** is the exception: not sulfated, not attached to a core protein, synthesised at the plasma membrane; huge (up to 10⁷ Da), the lubricant of joints and the vitreous body.",
        "Functions of the ECM: mechanical support, anchoring and migration of cells, a **reservoir of growth factors (TGF-β, FGF)**, signalling through **integrins → cytoskeleton (outside-in signalling)**, filtration barrier, and control of differentiation."
      ],
      cn: "四类成分先列全；纤连蛋白的 RGD-整合素、基底膜的 IV 型胶原＋层粘连蛋白、蛋白聚糖的水合与电荷屏障是三个必说细节。" },
    { h: "2 · Collagen structure", hcn: "胶原的结构",
      points: [
        "Primary structure: the repeating triplet **(Gly-X-Y)n**, where **X is often proline and Y often 4-hydroxyproline**; **glycine every third residue is obligatory** because only H fits in the centre of the triple helix — any substitution (as in osteogenesis imperfecta) distorts it.",
        "Three left-handed polyproline-II chains wind into a **right-handed triple helix (tropocollagen, ~300 nm × 1.5 nm)**, stabilised by **hydrogen bonds involving hydroxyproline** and by the absence of side chains at glycine.",
        "Molecules assemble **staggered by ~67 nm (the D-period)** into fibrils — the source of the typical banding in electron microscopy — and are locked by **covalent cross-links derived from lysine and hydroxylysine (lysyl oxidase, allysine → aldol/pyridinoline cross-links)**, which increase with age and make old collagen stiff and insoluble.",
        "Collagen is **rich in glycine (33 %) and proline, contains hydroxyproline and hydroxylysine (found almost nowhere else), and has no tryptophan or cysteine in the helix** — it is therefore a nutritionally incomplete protein (gelatin).",
        "**Types: I** (skin, bone, tendon — 90 % of body collagen), **II** (hyaline cartilage, vitreous), **III** (reticular fibres, blood vessels, granulation tissue), **IV** (basement membrane — **network, not fibrils**), **V, VII** (anchoring fibrils)."
      ],
      cn: "(Gly-X-Y)n、每三个必须是甘氨酸、羟脯氨酸稳定氢键、67 nm 错位、赖氨酸氧化酶交联；I/II/III/IV 型的分布必须能背。" },
    { h: "3 · Biosynthesis of collagen", hcn: "胶原的生物合成（细胞内外两段）",
      points: [
        "**Intracellular:** (1) synthesis of **preprocollagen** on the rough ER with a signal peptide; (2) **hydroxylation of proline and lysine** by **prolyl-4-hydroxylase and lysyl hydroxylase** — enzymes needing **Fe²⁺, α-ketoglutarate, O₂ and ascorbate**; (3) **glycosylation** of hydroxylysine (galactose, glucose); (4) association of three chains via the **C-propeptide**, formation of disulfide bonds; (5) **zipper-like formation of the triple helix → procollagen**; (6) secretion in vesicles.",
        "**Extracellular:** (7) **procollagen peptidases cleave the N- and C-propeptides → tropocollagen**; (8) **spontaneous self-assembly into fibrils**; (9) **lysyl oxidase (a copper enzyme) oxidatively deaminates lysine/hydroxylysine → allysine → covalent cross-links**.",
        "**Why the propeptides exist:** they keep procollagen soluble and prevent fibril formation inside the cell — their retention causes disease (dermatosparaxis form of Ehlers–Danlos).",
        "**Role of vitamin C:** ascorbate keeps the **Fe²⁺** of prolyl/lysyl hydroxylase reduced. Without it the helix is **under-hydroxylated, unstable at body temperature, degraded intracellularly** → **scurvy**: bleeding gums, loose teeth, perifollicular haemorrhage, poor wound healing, bone pain in children.",
        "**Copper deficiency (or Menkes disease) blocks lysyl oxidase** → no cross-links → fragile vessels and skin; **lathyrism** (β-aminopropionitrile from sweet pea) does the same chemically."
      ],
      cn: "把 9 步分成细胞内 6 步与细胞外 3 步来背；维生素 C 保持 Fe²⁺（羟化酶）、铜用于赖氨酰氧化酶——两个微量营养素对应两种病。" },
    { h: "4 · Elastin and elastic fibres", hcn: "弹性蛋白与弹性纤维",
      points: [
        "**Elastin** — an insoluble, hydrophobic protein rich in **glycine, valine, alanine and proline, but with little hydroxyproline, no hydroxylysine and no glycosylation**; it has **no regular secondary structure — the random-coil regions are what allow stretching**.",
        "Synthesised as soluble **tropoelastin**, secreted, aligned on a scaffold of **fibrillin microfibrils**, then cross-linked by the same **lysyl oxidase**: four lysine residues form the elastin-specific cross-links **desmosine and isodesmosine** — unique to elastin and therefore its **urinary marker of degradation**.",
        "Location: **elastic arteries (aorta), lung, skin, ligaments (ligamentum flavum), bladder**; elastin turnover is extremely slow (half-life decades), so damage is essentially permanent.",
        "**Marfan syndrome = fibrillin-1 (FBN1) mutation** — the microfibril scaffold fails (plus excess TGF-β signalling): aortic root dilatation and dissection, ectopia lentis, tall stature, arachnodactyly.",
        "**Elastin destruction by elastase** is the mechanism of **pulmonary emphysema**: in **α1-antitrypsin deficiency** and in smokers (oxidants inactivate the inhibitor's methionine) the protease–antiprotease balance is lost (topic 28B)."
      ],
      cn: "弹性蛋白：无羟赖氨酸、无糖基化、无规则结构；锁链素/异锁链素是唯一交联和降解标志物；Marfan 是 fibrillin-1；肺气肿是弹性蛋白酶与抗蛋白酶失衡。" },
    { h: "5 · Matrix metalloproteinases and their inhibitors", hcn: "基质金属蛋白酶与抑制剂",
      points: [
        "**MMPs are zinc- and calcium-dependent endopeptidases** secreted as **inactive zymogens (pro-MMP)** kept latent by a **cysteine-switch** with the zinc; activated by other proteases (plasmin, MT-MMP) or by oxidants.",
        "Families: **collagenases (MMP-1, -8, -13)** — the only enzymes that cut native triple-helical collagen (at a specific site ¾:¼); **gelatinases (MMP-2, -9)** — denatured collagen and type IV of the basement membrane; **stromelysins (MMP-3)**; **membrane-type MMPs**.",
        "**Inhibitors: TIMPs (tissue inhibitors of metalloproteinases, 1:1 stoichiometry)** and the general plasma scavenger **α₂-macroglobulin** (a molecular trap for proteases of all classes). The **MMP/TIMP ratio** decides whether matrix is built or destroyed.",
        "Physiology: wound healing, bone remodelling, ovulation, involution of the uterus, angiogenesis. Pathology: **tumour invasion and metastasis, rheumatoid arthritis and osteoarthritis cartilage loss, periodontitis, atherosclerotic plaque rupture (MMP-9 in the fibrous cap), aortic aneurysm, emphysema**.",
        "Other protease-inhibitor pairs to mention: **α₁-antitrypsin vs elastase** (lung), **antithrombin vs thrombin** (heparin-accelerated), **plasminogen activator inhibitor (PAI-1) vs tPA**, **cystatins vs cathepsins**, and pancreatic trypsin inhibitor (SPINK1) — a defect causes hereditary pancreatitis."
      ],
      cn: "MMP：含锌、以酶原分泌、半胱氨酸开关；四个亚家族与代表酶；抑制剂 TIMP 与 α2-巨球蛋白；MMP/TIMP 比值决定基质的合成或破坏。" },
    { h: "6 · Biochemical markers of matrix turnover", hcn: "基质代谢的标志物（考试爱问）",
      points: [
        "**Collagen degradation:** urinary/serum **CTX (C-terminal telopeptide, β-CrossLaps)** and **NTX** from type I collagen, **pyridinoline and deoxypyridinoline** cross-links (deoxypyridinoline is specific for **bone**), and **hydroxyproline** in urine (old, non-specific — also rises after a gelatin meal).",
        "**Collagen synthesis:** the propeptides cleaved off during maturation — **PINP and PICP (type I procollagen propeptides)** for bone formation, **PIIINP** for liver fibrosis and connective tissue turnover.",
        "**Bone formation** additionally: **bone-specific alkaline phosphatase** and **osteocalcin** (a vitamin-K-dependent Gla protein) — see topic 16B.",
        "**Cartilage:** COMP and type II collagen fragments (CTX-II) in osteoarthritis. **Elastin:** urinary **desmosine/isodesmosine** in emphysema and aneurysm.",
        "Interpretation rule to say aloud: **markers of formation and of resorption are usually both raised in high-turnover states** (Paget disease, hyperparathyroidism, after fracture); what matters clinically is their **ratio and the trend under therapy** (bisphosphonates lower CTX within weeks)."
      ],
      cn: "标志物分两栏：降解（CTX/NTX、吡啶啉/脱氧吡啶啉、羟脯氨酸）与合成（PINP/PICP、PIIINP、骨 ALP、骨钙素）。弹性蛋白降解看尿锁链素。" }
  ],
  numbers: [
    "Collagen = **25–30 % of body protein**; glycine every **3rd** residue (33 % of residues)",
    "Tropocollagen **300 nm long**, fibrils staggered by the **67 nm D-period**",
    "Type I ≈ **90 %** of the body's collagen",
    "Vitamin C requirement ~**100 mg/day**; scurvy below ~10 mg/day",
    "**TIMP binds MMP 1:1**; α₂-macroglobulin traps proteases of all four classes"
  ],
  clinic: [
    "**Scurvy** (vitamin C) and **Menkes / copper deficiency, lathyrism** (lysyl oxidase) — two ways to break the same fibre",
    "**Osteogenesis imperfecta** — glycine substitution in COL1A1/2, blue sclerae, fractures; **Ehlers–Danlos** — hypermobility, skin fragility, vascular type from COL3A1",
    "**Alport syndrome** — type IV collagen (α5) — haematuria and deafness; **Goodpasture** — antibodies against type IV collagen",
    "**Marfan syndrome** — fibrillin-1; aortic dissection risk",
    "**α₁-antitrypsin deficiency** — panacinar emphysema plus liver cirrhosis (PiZZ)"
  ],
  traps: [
    "Hydroxylation of proline happens **after** translation, on the growing/complete chain — hydroxyproline is **not** loaded on a tRNA",
    "Vitamin C does not 'build collagen'; it keeps the **iron of the hydroxylases reduced**",
    "Type IV collagen forms a **network**, not fibrils, and is not cleaved by classic collagenases but by **gelatinases**",
    "Elastin contains **no hydroxylysine and is not glycosylated** — do not describe it as a collagen variant",
    "MMPs are secreted as **zymogens**; simply having MMP present does not mean matrix is being destroyed — the **MMP/TIMP balance** decides"
  ],
  terms: [
    ["extracellular matrix", "细胞外基质"], ["tropocollagen", "原胶原"], ["hydroxyproline", "羟脯氨酸"],
    ["prolyl hydroxylase", "脯氨酰羟化酶"], ["lysyl oxidase", "赖氨酰氧化酶"], ["desmosine", "锁链素"],
    ["fibrillin", "原纤维蛋白"], ["integrin", "整合素"], ["matrix metalloproteinase", "基质金属蛋白酶"],
    ["TIMP", "金属蛋白酶组织抑制剂"], ["α₂-macroglobulin", "α2-巨球蛋白"], ["proteoglycan", "蛋白聚糖"]
  ]
}
});
