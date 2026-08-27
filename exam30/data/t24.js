window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 24,
a: {
  titleEN: "Structure of proteins. Proteosynthesis. Glycoproteins and mucins. Proteases and the proteasome. Protein conformational disorders.",
  titleCN: "蛋白质的结构 · 蛋白质合成 · 糖蛋白与黏蛋白 · 蛋白酶与蛋白酶体 · 蛋白构象病",
  opener: "A protein's **function is determined by its conformation, and the conformation by the amino-acid sequence** (Anfinsen); the cell therefore invests heavily in **folding it correctly (chaperones), checking it, and destroying it when it is wrong (proteasome)** — and when that quality control fails, the result is a **conformational disease**.",
  openerCN: "蛋白质的功能由构象决定，构象由氨基酸序列决定（Anfinsen 原理）；因此细胞在正确折叠（伴侣蛋白）、检查与降解错误产物（蛋白酶体）上投入巨大——一旦质控失败，就产生构象病。",
  spine: [
    "四级结构与稳定它们的作用力",
    "变性与折叠、伴侣蛋白",
    "蛋白质合成：转录后加工、翻译三阶段、翻译后修饰",
    "糖蛋白与黏蛋白：N-/O-连接、功能与临床",
    "蛋白酶的分类与调节（酶原、抑制剂）",
    "泛素-蛋白酶体系统与自噬",
    "构象病：淀粉样变、朊病毒、α1-抗胰蛋白酶、囊性纤维化"
  ],
  blocks: [
    { h: "1 · The four levels of structure", hcn: "四级结构",
      points: [
        "**Primary — the sequence of amino acids joined by PEPTIDE (amide) bonds**, written N-terminus → C-terminus. The peptide bond is **planar, has partial double-bond character, and is almost always trans** (proline is the exception that allows cis).",
        "**Secondary — local, regular arrangements stabilised by HYDROGEN BONDS OF THE BACKBONE: the α-helix (3.6 residues per turn, pitch 0.54 nm, side chains outward; broken by proline and glycine) and the β-sheet (parallel or antiparallel, pleated), plus β-turns and the collagen triple helix.**",
        "**Tertiary — the whole 3D fold of one chain, stabilised by side-chain interactions: the HYDROPHOBIC EFFECT (the dominant force — non-polar residues buried inside), hydrogen bonds, ionic bonds/salt bridges, van der Waals forces, and the only covalent one, DISULFIDE BRIDGES between cysteines (typical of secreted and extracellular proteins).**",
        "**Quaternary — the assembly of several subunits** (haemoglobin α₂β₂, immunoglobulins, LDH tetramer, allosteric enzymes) — the level at which **cooperativity and allosteric regulation** become possible.",
        "**Domains and motifs** are the working vocabulary: an immunoglobulin fold, a zinc finger, a leucine zipper, a Rossmann fold for NAD binding; **fibrous proteins (collagen, keratin, elastin) versus globular ones (enzymes, albumin, haemoglobin)** differ in shape and solubility.",
        "**Denaturation destroys the higher levels but not the primary structure**: heat, extreme pH, urea/guanidinium, detergents, heavy metals, organic solvents. It is used deliberately (sterilisation, fixation, protein precipitation in the laboratory) and it explains why fever above 42 °C is dangerous."
      ],
      cn: "一级到四级＋各自的稳定力（三级最关键的是疏水效应，唯一共价的是二硫键）；α 螺旋与 β 折叠的参数；变性只破坏高级结构。" },
    { h: "2 · Folding, chaperones and quality control", hcn: "折叠、伴侣蛋白与质量控制",
      points: [
        "**Anfinsen's principle: the native conformation is the thermodynamically most stable one, and the information for it is in the sequence** — but in the crowded cell, folding needs help.",
        "**Chaperones (HSP70, HSP90, the HSP60/chaperonin barrel, small HSPs) bind exposed hydrophobic patches and prevent aggregation, using ATP; heat and stress induce them (the heat-shock response).** In the ER: **BiP, calnexin/calreticulin, protein disulfide isomerase (shuffles disulfide bonds) and peptidyl-prolyl isomerase.**",
        "**Quality control in the ER: unfolded proteins trigger the UNFOLDED PROTEIN RESPONSE (slow translation, more chaperones, and if that fails, apoptosis) and misfolded ones are exported to the cytosol for destruction (ERAD).**",
        "Folding follows a **funnel-shaped energy landscape** with molten-globule intermediates; the danger is a competing pathway into **stable aggregates (amyloid)**.",
        "Physiological consequences worth quoting: **fever induces HSPs (protective); tumour cells depend on HSP90 (a drug target); mutations that only destabilise a protein — such as ΔF508 CFTR — cause disease by causing degradation rather than loss of catalytic function.**"
      ],
      cn: "Anfinsen 原理＋伴侣蛋白（HSP70/90/60、ER 内的 BiP、钙连蛋白、PDI）＋未折叠蛋白反应与 ERAD；折叠漏斗与淀粉样聚集这条歧路；ΔF508 是『被降解而非失活』的经典例子。" },
    { h: "3 · Proteosynthesis", hcn: "蛋白质的生物合成",
      points: [
        "**Transcription and processing (eukaryotes): RNA polymerase II → pre-mRNA → 5' cap (7-methylguanosine), 3' polyadenylation, SPLICING by the spliceosome (alternative splicing multiplies the proteome), then export.**",
        "**The genetic code: triplet, degenerate (61 sense codons for 20 amino acids), non-overlapping, almost universal, with AUG as the start (and the initiator methionine) and UAA/UAG/UGA as stop codons.** **Aminoacyl-tRNA synthetases** charge each tRNA — the actual 'translation' step, with proofreading, at the cost of **2 high-energy bonds**.",
        "**Translation in three stages: INITIATION (small subunit + initiator Met-tRNA + mRNA + initiation factors, Kozak/Shine–Dalgarno recognition, then the large subunit); ELONGATION (binding at the A site, PEPTIDYL TRANSFERASE — a RIBOZYME activity of the large rRNA, translocation with GTP hydrolysis); TERMINATION (release factors at a stop codon).** Cost: **~4 high-energy bonds per peptide bond** — protein synthesis is expensive.",
        "**Targeting: proteins with a SIGNAL PEPTIDE are recognised by SRP and translated into the ER (co-translational)** → Golgi → secretion or lysosome (via the **mannose-6-phosphate** tag); others are made on free ribosomes and imported post-translationally into mitochondria, nucleus or peroxisomes by their own signals.",
        "**Post-translational modifications: proteolytic cleavage of signal peptides and prohormones, disulfide formation, GLYCOSYLATION, phosphorylation, hydroxylation (collagen), γ-carboxylation (vitamin K), acetylation and methylation (histones), ubiquitination, lipid anchors (myristoyl, palmitoyl, prenyl, GPI).**",
        "**Antibiotics and toxins act at named steps** — a favourite question: **tetracyclines (A site, 30S), aminoglycosides (30S, misreading), chloramphenicol (peptidyl transferase, 50S), macrolides (translocation, 50S), diphtheria toxin (ADP-ribosylates eEF-2), ricin (28S rRNA), cycloheximide (eukaryotic elongation), puromycin (premature release).**"
      ],
      cn: "转录后加工→遗传密码特点→翻译三阶段（肽酰转移酶是核酶！）→信号肽与定位→翻译后修饰七种→抗生素作用位点表。这一段信息量大，按这个顺序背最稳。" },
    { h: "4 · Glycoproteins and mucins", hcn: "糖蛋白与黏蛋白",
      points: [
        "**Glycoprotein = protein with a minority of covalently attached oligosaccharide.** **N-glycosidic linkage to the amide of ASPARAGINE in the sequon Asn-X-Ser/Thr (starts in the ER from a dolichol-linked precursor, then trimmed and remodelled in the Golgi); O-glycosidic linkage to the OH of SERINE or THREONINE (built in the Golgi, sugar by sugar).**",
        "**Functions: correct folding and quality control, protection from proteolysis, longer half-life, cell–cell recognition and adhesion (selectins), receptors, and antigenic determinants — the ABO and Lewis BLOOD GROUPS are oligosaccharides.**",
        "**Examples: nearly all plasma proteins except albumin, immunoglobulins, the glycoprotein hormones (TSH, LH, FSH, hCG), clotting factors, membrane receptors, and the glycocalyx.**",
        "**Mucins: very large O-glycosylated glycoproteins in which sugar is 50–80 % of the mass**, with tandem repeats rich in **serine, threonine and proline**; they are **highly hydrated, viscous and polyanionic (sialic acid and sulfate)** — hence their role as **lubricant and protective barrier** in the gastrointestinal, respiratory and genitourinary tracts; secreted (MUC2, MUC5AC) or membrane-bound (MUC1).",
        "**Clinical links: cystic fibrosis (defective CFTR → dehydrated, viscous mucus), CA-125/CA 19-9 and other mucin-derived tumour markers, Helicobacter and mucus, and the congenital disorders of glycosylation (CDG — multisystem disease detected by transferrin isoform analysis).**",
        "**Proteoglycans are the opposite composition** (mostly glycosaminoglycan on a core protein, topic 6B) — do not confuse the two."
      ],
      cn: "N-连接（Asn-X-Ser/Thr、经多萜醇）与 O-连接（Ser/Thr、在高尔基体）；功能五条；黏蛋白的特点（糖占 50–80%、富含 Ser/Thr/Pro、高度水合、聚阴离子）与临床（囊性纤维化、肿瘤标志物、CDG）。" },
    { h: "5 · Proteases and the proteasome", hcn: "蛋白酶与蛋白酶体",
      points: [
        "**Classification by the catalytic mechanism: SERINE proteases (trypsin, chymotrypsin, elastase, thrombin, plasmin, elastase — the Ser-His-Asp catalytic triad), CYSTEINE proteases (cathepsins, caspases, calpains), ASPARTATE proteases (pepsin, renin, cathepsin D, HIV protease), METALLOPROTEASES (MMPs, ACE, carboxypeptidase A — zinc).** Also **exo- vs endopeptidases**.",
        "**Control is essential because proteolysis is irreversible: (1) synthesis as ZYMOGENS, (2) compartmentation (lysosome, ER), (3) INHIBITORS (α₁-antitrypsin, α₂-macroglobulin, antithrombin, TIMPs, SPINK1, cystatins), (4) restricted specificity and (5) limited activation cascades (digestion, coagulation, complement, apoptosis).**",
        "**Two great intracellular degradation systems: the LYSOSOME (autophagy, endocytosed material, acid hydrolases at pH 5, non-selective, ATP-independent for the proteolysis itself) and the UBIQUITIN–PROTEASOME system (selective, cytosolic and nuclear, ATP-dependent).**",
        "**Ubiquitin–proteasome: E1 activating → E2 conjugating → E3 LIGASE (which gives the specificity) attach a chain of ubiquitins (Lys48-linked) to the target → the 26S proteasome (a 20S barrel with 19S caps) unfolds it and cuts it into peptides, recycling the ubiquitin.** Signals for degradation: **misfolding, oxidation, the N-end rule, PEST sequences, cell-cycle timing (cyclins), hypoxia (HIF-1α).**",
        "**Physiological importance: turnover of ~300–400 g of protein a day, removal of damaged proteins, control of the cell cycle, of transcription factors (NF-κB, p53) and of antigen presentation on MHC class I.**",
        "**Clinical: bortezomib (proteasome inhibitor) in myeloma; α₁-antitrypsin deficiency (emphysema); protease inhibitors as drugs (ACE inhibitors, HIV protease inhibitors, aprotinin); and the muscle wasting of sepsis and cachexia, which is proteasome-driven.**"
      ],
      cn: "蛋白酶按催化残基分四类＋五种调控方式；两大降解系统（溶酶体 vs 泛素-蛋白酶体）；E1-E2-E3 与 26S 的机制、降解信号；临床（硼替佐米、α1-抗胰蛋白酶缺乏、各类蛋白酶抑制剂药物）。" },
    { h: "6 · Protein conformational disorders", hcn: "蛋白构象病",
      points: [
        "**Definition: diseases in which a protein adopts a wrong but stable conformation — usually a β-sheet-rich AMYLOID fibril — and either accumulates toxically (gain of function) or is lost from its normal site (loss of function).**",
        "**Amyloid** is defined by its properties, not by one protein: **β-pleated sheet fibrils, insoluble, protease-resistant, Congo red staining with apple-green birefringence under polarised light**. Types: **AL (immunoglobulin light chains — myeloma), AA (serum amyloid A — chronic inflammation), ATTR (transthyretin — familial and senile cardiac amyloidosis), Aβ (Alzheimer disease), IAPP/amylin (type 2 diabetes islets), β₂-microglobulin (long-term dialysis).**",
        "**Alzheimer disease: Aβ from amyloid precursor protein cleaved by β- and γ-secretase → plaques, plus intracellular tangles of hyperphosphorylated TAU; CSF shows LOW Aβ₁₋₄₂ with HIGH tau/phospho-tau.** **Parkinson disease: α-synuclein (Lewy bodies); Huntington disease: polyglutamine expansion.**",
        "**Prion diseases — the unique ones: the normal cellular PrP^C (α-helical) converts into PrP^Sc (β-sheet), which is protease-resistant and TEMPLATES the same change in other molecules — an infectious protein with no nucleic acid** (Prusiner, Nobel Prize). Forms: **Creutzfeldt–Jakob (sporadic, iatrogenic, variant from BSE), Gerstmann–Sträussler–Scheinker, fatal familial insomnia, kuru**; spongiform change, no inflammation, resistant to ordinary sterilisation.",
        "**Loss-of-function conformational diseases: α₁-antitrypsin deficiency PiZZ (the mutant polymerises in the hepatocyte ER → liver cirrhosis AND, because it never reaches the lung, emphysema — one mutation, two mechanisms) and cystic fibrosis ΔF508 (the protein folds too slowly and is degraded by ERAD before reaching the membrane — the rationale for 'corrector' drugs).**",
        "**Common principles to state at the end: ageing, oxidative damage and a failing proteasome/autophagy favour aggregation; the small oligomers are usually more toxic than the mature fibril; and therapy aims at reducing the precursor (gene silencing in ATTR), stabilising the native fold (tafamidis), or improving clearance (antibodies against Aβ).**"
      ],
      cn: "定义＋淀粉样的鉴定特征（刚果红苹果绿双折射）＋六种淀粉样蛋白；阿尔茨海默（Aβ 与 tau、脑脊液三项）、朊病毒（PrP^C→PrP^Sc 模板化、无核酸、耐常规灭菌）、α1-抗胰蛋白酶（一个突变两种机制）与 ΔF508；最后讲共同规律与治疗思路。" }
  ],
  numbers: [
    "α-helix: **3.6 residues per turn, 0.54 nm pitch**; peptide bond planar and **trans**",
    "Genetic code: **64 codons, 61 sense, 3 stop**; ~**4 high-energy bonds per peptide bond**",
    "Body protein turnover **300–400 g/day**; requirement **0.8 g/kg/day**",
    "Mucins: carbohydrate **50–80 % of mass**; N-glycosylation sequon **Asn-X-Ser/Thr**",
    "Proteasome **26S = 20S core + 19S caps**; ubiquitin chains linked through **Lys48**"
  ],
  clinic: [
    "**Bortezomib** (proteasome) in multiple myeloma; **HIV and ACE protease-targeting drugs**",
    "**α₁-antitrypsin deficiency (PiZZ)** — emphysema plus liver cirrhosis",
    "**Cystic fibrosis ΔF508** — a folding/trafficking defect corrected by CFTR modulators",
    "**Amyloidosis** — Congo red with apple-green birefringence; AL, AA, ATTR types",
    "**Prion diseases** — resistant to standard sterilisation; iatrogenic transmission risk"
  ],
  traps: [
    "**Denaturation does not break peptide bonds** — the primary structure survives",
    "The hydrophobic effect, not hydrogen bonding, is the **dominant** force of tertiary structure",
    "**Peptidyl transferase is a ribozyme** (rRNA), not a protein enzyme",
    "The proteasome degrades **selectively and with ATP**; the lysosome is the bulk, non-selective route",
    "In α₁-antitrypsin deficiency the liver disease is a **gain of toxic function** and the lung disease a **loss of function** — two mechanisms, one mutation"
  ],
  terms: [
    ["peptide bond", "肽键"], ["α-helix / β-sheet", "α 螺旋/β 折叠"], ["hydrophobic effect", "疏水效应"],
    ["chaperone", "分子伴侣"], ["unfolded protein response", "未折叠蛋白反应"], ["signal peptide", "信号肽"],
    ["glycoprotein / mucin", "糖蛋白/黏蛋白"], ["zymogen", "酶原"], ["ubiquitin–proteasome system", "泛素-蛋白酶体系统"],
    ["amyloid", "淀粉样蛋白"], ["prion", "朊病毒"], ["conformational disease", "构象病"]
  ]
},
b: {
  titleEN: "Biochemistry of nutrition and the regulation of food intake. Macronutrients and micronutrients. Use and inter-organ exchange of energy substrates (fuels).",
  titleCN: "营养的生物化学与摄食调节 · 宏量与微量营养素 · 能量底物的利用与器官间交换",
  opener: "Nutrition is **applied bioenergetics**: energy intake must match expenditure, the three macronutrients are partly interchangeable as fuel but **not** as building material, and a set of **micronutrients that supply no energy at all** is nevertheless indispensable as coenzymes and cofactors.",
  openerCN: "营养学就是应用生物能学：摄入必须与消耗平衡；三大宏量营养素作为燃料可部分互换，但作为建筑材料不可互换；而完全不提供能量的微量营养素，作为辅酶与辅因子却不可或缺。",
  spine: [
    "能量需要：BMR、活动、食物热效应；能量密度与呼吸商",
    "宏量营养素：蛋白（质量与氮平衡）、脂肪、糖类的推荐比例",
    "必需营养素清单（必需氨基酸、必需脂肪酸、维生素、矿物质）",
    "微量营养素与常见缺乏症",
    "摄食调节：下丘脑弓状核、瘦素/胃饥饿素/肠肽",
    "器官间燃料交换（餐后 / 空腹 / 运动 / 应激）",
    "临床：肥胖、营养不良、恶病质、肠内外营养、再喂养综合征"
  ],
  blocks: [
    { h: "1 · Energy requirement and balance", hcn: "能量需要与平衡",
      points: [
        "**Total energy expenditure = basal metabolic rate (60–75 %) + physical activity (15–30 %) + diet-induced thermogenesis (~10 %)**; BMR depends on lean body mass, age, sex, thyroid hormones and temperature. Typical adult intake **~2000–2500 kcal (8–10 MJ)/day**.",
        "**Energy values: carbohydrate and protein 17 kJ/g (4 kcal), fat 38 kJ/g (9 kcal), ethanol 29 kJ/g (7 kcal); dietary fibre ~8 kJ/g** from bacterial fermentation to short-chain fatty acids.",
        "**Respiratory quotient (CO₂ produced/O₂ consumed): carbohydrate 1.0, protein 0.8, fat 0.7, mixed diet ~0.85** — measured by indirect calorimetry, and the practical use of the first law of thermodynamics in the clinic.",
        "**Recommended distribution: carbohydrate 45–60 % of energy (mainly complex, added sugars < 10 %), fat 20–35 % (saturated < 10 %, trans as low as possible), protein 10–20 % (0.8 g/kg/day, more in growth, pregnancy, illness and old age), fibre 25–30 g/day.**",
        "**Balance is the arithmetic that matters: 1 kg of adipose tissue ≈ 29 MJ (7000 kcal), so a daily surplus of only 400 kJ (100 kcal) means several kilograms a year** — the biochemical reason obesity develops silently."
      ],
      cn: "能量消耗三部分（BMR 占 60–75%）、四种营养素的能量密度、呼吸商、推荐比例、以及『每天多 100 kcal 一年胖几公斤』这个直观算术。" },
    { h: "2 · Macronutrients — quality, not only quantity", hcn: "宏量营养素：质与量",
      points: [
        "**Proteins: quality = content of ESSENTIAL amino acids and digestibility. Complete (animal, soy) vs incomplete (most plant proteins — cereals lack lysine, legumes lack methionine; combining them complements).** Requirement 0.8 g/kg/day; **nitrogen balance: 1 g N = 6.25 g protein**; positive in growth and recovery, negative in trauma, sepsis, burns and immobility.",
        "**Fats: the type matters more than the amount — saturated raise LDL, monounsaturated and polyunsaturated lower it, TRANS fats are the worst (LDL up, HDL down); the essential ones are linoleic (ω-6) and α-linolenic (ω-3), with EPA/DHA from fish; cholesterol intake matters less than saturated fat.**",
        "**Carbohydrates: complex starch and fibre versus free sugars; the GLYCAEMIC INDEX describes the postprandial glucose rise; fructose in large amounts is lipogenic and raises urate (topic 7A); FIBRE (soluble — gels, lowers cholesterol and glucose; insoluble — bulk and transit) is fermented by the microbiota to short-chain fatty acids (butyrate feeds colonocytes).**",
        "**Interchangeability: carbohydrate and fat can substitute for each other as fuel; protein cannot be replaced (nitrogen and essential amino acids); and glucose cannot be made from fatty acids — hence the ~130 g/day minimum carbohydrate requirement of the brain, or ketosis instead.**",
        "**Water is a nutrient too: ~30–35 mL/kg/day**, plus the electrolytes (topic 19B)."
      ],
      cn: "蛋白质讲『质量』（必需氨基酸与互补）、脂肪讲『种类』（饱和/不饱和/反式）、糖类讲『复杂度与纤维』；三者的可替代性有限——蛋白不可替代、脂肪不能生糖。" },
    { h: "3 · Micronutrients", hcn: "微量营养素",
      points: [
        "**Vitamins (topic 2A): fat-soluble A, D, E, K (stored, risk of hypervitaminosis) and water-soluble B complex and C (mostly coenzyme precursors, excreted, except B12).**",
        "**Macroelements: Na, K, Cl, Ca, P, Mg, S. Trace elements: Fe, Zn, Cu, Se, I, Mn, Mo, Cr, F, Co (in B12).**",
        "**The ones with a clean 'enzyme + deficiency' story, which is what examiners want: IRON (haemoglobin, cytochromes → anaemia), IODINE (thyroid hormones → goitre, cretinism), ZINC (>300 enzymes, zinc fingers, carbonic anhydrase → dermatitis, poor healing, hypogonadism, impaired taste; acrodermatitis enteropathica), SELENIUM (glutathione peroxidase, deiodinases → cardiomyopathy/Keshan), COPPER (cytochrome oxidase, lysyl oxidase, caeruloplasmin, SOD1 → anaemia, connective-tissue and neurological damage; Menkes and Wilson diseases), MANGANESE, MOLYBDENUM (xanthine oxidase, sulfite oxidase), CHROMIUM (glucose tolerance), FLUORIDE (fluorapatite).**",
        "**Bioavailability matters: haem iron is absorbed better than non-haem; vitamin C improves and phytate/tannin/calcium impair non-haem iron; zinc and iron compete; calcium needs calcitriol; the fat-soluble vitamins need bile.**",
        "**Antinutrients and interactions:** phytates, oxalates (calcium and iron), avidin (biotin), goitrogens, and drug–nutrient interactions (PPI and B12/iron/magnesium, metformin and B12, isoniazid and B6, diuretics and potassium/magnesium)."
      ],
      cn: "维生素两类＋常量与微量元素清单；重点掌握六个微量元素的『酶＋缺乏症』；再加生物利用度与抗营养因子、药物-营养素相互作用。" },
    { h: "4 · Regulation of food intake", hcn: "摄食调节",
      points: [
        "**The integrating centre is the hypothalamic ARCUATE NUCLEUS, with two opposing neuron populations: NPY/AgRP (orexigenic — stimulate eating) and POMC/CART (anorexigenic — α-MSH acting on MC4 receptors).** They project to the paraventricular and lateral hypothalamus.",
        "**Long-term (adiposity) signals: LEPTIN from adipose tissue (proportional to fat mass — inhibits NPY/AgRP, stimulates POMC) and INSULIN.** In common obesity there is **leptin resistance**; congenital leptin or **MC4R mutations** cause monogenic obesity (MC4R being the commonest).",
        "**Short-term (meal-related) signals: GHRELIN from the stomach — the only orexigenic hormone, rising before meals; and the satiety signals CCK (fat and protein in the duodenum), GLP-1 and PYY (distal gut), amylin, plus gastric distension via the vagus.**",
        "**Also involved: the reward system (dopamine, endocannabinoids, opioids — the reason palatable food overrides homeostasis), stress and cortisol, sleep deprivation (ghrelin up, leptin down), and the microbiota.**",
        "**Therapeutic exploitation: GLP-1 receptor agonists (semaglutide) and GLP-1/GIP co-agonists as the current obesity drugs, bariatric surgery (which works largely by changing gut hormones, not only by restriction), setmelanotide for MC4-pathway defects.**",
        "**Energy expenditure side: thyroid hormones, brown fat and UCP1 (topic 7B), and non-exercise activity thermogenesis — the reason 'eat less' alone is a poor prescription.**"
      ],
      cn: "弓状核两群神经元（NPY/AgRP 促食 vs POMC/CART 抑食）＋长期信号（瘦素、胰岛素）＋短期信号（胃饥饿素促食，CCK/GLP-1/PYY 抑食）＋奖赏系统；治疗上 GLP-1 类药物与减重手术都作用于这套系统。" },
    { h: "5 · Inter-organ exchange of fuels", hcn: "器官间的燃料交换（四种状态）",
      points: [
        "**Fed (absorptive, 0–4 h): glucose from the gut → liver takes up ~⅓ (glycogen, then lipogenesis), the rest goes to muscle (glycogen) and adipose tissue (glycerol-3-P for esterification); chylomicron fat is captured by LPL; amino acids go to the liver and to protein synthesis. Insulin dominates.**",
        "**Postabsorptive (fasting, 4–16 h): hepatic glycogenolysis supplies glucose; adipose lipolysis supplies fatty acids for muscle, heart and liver; the brain still uses glucose. Glucagon dominates.**",
        "**Starvation (days): gluconeogenesis from alanine, glutamine, lactate and glycerol; ketone bodies rise and after 2–3 days cover 60–70 % of the brain's need, so proteolysis slows (protein sparing) — the adaptation that decides survival time. Muscle switches almost entirely to fatty acids and ketones.**",
        "**Exercise: first creatine phosphate, then muscle glycogen (anaerobic → lactate → CORI CYCLE), then blood glucose and fatty acids in prolonged work; the GLUCOSE–ALANINE CYCLE carries nitrogen from muscle to liver; the heart uses lactate as fuel.**",
        "**Stress/sepsis/trauma: catecholamines, cortisol, glucagon and cytokines create 'stress hyperglycaemia' with insulin resistance, massive proteolysis and lipolysis, negative nitrogen balance — a catabolic state that nutrition can support but not overcome.**",
        "**The two shuttles to name every time: the CORI CYCLE (lactate → liver glucose, costing the liver 6 ATP to save the muscle) and the GLUCOSE–ALANINE CYCLE (alanine carries both carbon and nitrogen).**"
      ],
      cn: "四种状态各一段（餐后、空腹、饥饿、运动/应激），每段说清『哪个器官给哪个器官送什么燃料』；两个循环（Cori 与葡萄糖-丙氨酸）必须点名。" },
    { h: "6 · Clinical nutrition", hcn: "临床营养",
      points: [
        "**Obesity: BMI ≥ 30 kg/m² (25–29.9 overweight), with waist circumference as the marker of visceral fat (> 102 cm men, > 88 cm women); it is a chronic disease driving type 2 diabetes, dyslipidaemia, hypertension, NAFLD, obstructive sleep apnoea, gout, osteoarthritis and several cancers.**",
        "**Undernutrition: marasmus (energy deficiency — wasting, no oedema) vs kwashiorkor (protein deficiency with some energy — OEDEMA from hypoalbuminaemia, fatty liver, skin and hair changes).** Assessment: weight loss %, BMI, muscle mass, **albumin and prealbumin (remembering they are negative acute-phase proteins)**, nitrogen balance.",
        "**Cachexia** (cancer, heart failure, chronic infection) is **cytokine-driven (TNF-α, IL-6) catabolism** — it is not simple starvation and is not reversed by feeding alone.",
        "**Nutritional support: enteral first ('if the gut works, use it' — it maintains mucosal integrity), parenteral when it does not.** Complications to name: **catheter sepsis, hyperglycaemia, hepatic steatosis, and above all the REFEEDING SYNDROME — on restarting feeding, insulin drives potassium, PHOSPHATE and magnesium into cells, causing a fall of serum phosphate with cardiac and neurological failure; thiamine is consumed too. Prevention: start slowly, replace electrolytes, give thiamine first.**",
        "**Special situations: pregnancy and lactation (folate, iron, iodine), infancy, old age (protein, vitamin D, B12), vegan diets (B12, iron, zinc, calcium, ω-3), sport, renal and hepatic failure (protein and electrolyte tailoring), coeliac disease and food allergies.**",
        "Closing sentence: **nutrition is where all the metabolic pathways of this syllabus become a prescription — the same biochemistry, expressed in grams per day.**"
      ],
      cn: "肥胖（BMI 与腰围）、营养不良两型（消瘦型 vs 水肿型）、恶病质是细胞因子驱动；营养支持首选肠内；再喂养综合征（磷、钾、镁下降＋硫胺素）是最常被问的临床点。" }
  ],
  numbers: [
    "Energy: carbohydrate/protein **17 kJ/g**, fat **38 kJ/g**, ethanol **29 kJ/g**; adult **8–10 MJ/day**",
    "BMR is **60–75 %** of expenditure; diet-induced thermogenesis ~10 %; RQ **1.0 / 0.8 / 0.7** for carbohydrate/protein/fat",
    "Protein requirement **0.8 g/kg/day**; **1 g N = 6.25 g protein**; fibre **25–30 g/day**",
    "1 kg adipose tissue ≈ **29 MJ (7000 kcal)**; BMI overweight **25–29.9**, obesity **≥ 30 kg/m²**",
    "Brain needs **~120–130 g glucose/day** before ketoadaptation"
  ],
  clinic: [
    "**Refeeding syndrome** — hypophosphataemia, hypokalaemia, hypomagnesaemia, thiamine deficiency",
    "**Kwashiorkor vs marasmus**; **cachexia** is cytokine-driven and not corrected by calories alone",
    "**GLP-1 receptor agonists** and bariatric surgery — gut hormones as obesity therapy",
    "**Vegan diet** — supplement B12; **pregnancy** — folate, iron, iodine",
    "**Prealbumin and albumin fall in inflammation** — do not read them as pure malnutrition markers"
  ],
  traps: [
    "Protein cannot be replaced by fat or carbohydrate — **nitrogen and essential amino acids** have no substitute",
    "**Leptin is high in common obesity** (resistance), not low",
    "**Ghrelin is the only orexigenic hormone** among the gut peptides",
    "Albumin is a poor nutritional marker in acute illness — it is a **negative acute-phase protein**",
    "Feeding a severely malnourished patient too fast is dangerous — **refeeding syndrome**"
  ],
  terms: [
    ["basal metabolic rate", "基础代谢率"], ["respiratory quotient", "呼吸商"], ["nitrogen balance", "氮平衡"],
    ["essential nutrient", "必需营养素"], ["glycaemic index", "血糖生成指数"], ["arcuate nucleus", "弓状核"],
    ["leptin / ghrelin", "瘦素/胃饥饿素"], ["incretin", "肠促胰素"], ["Cori cycle", "Cori 循环"],
    ["cachexia", "恶病质"], ["refeeding syndrome", "再喂养综合征"]
  ]
}
});
