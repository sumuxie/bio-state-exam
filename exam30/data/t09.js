window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 9,
a: {
  titleEN: "Gibbs energy. Bioenergetics, elementary principles of thermodynamics, role of ATP in storage and conversion of chemical energy. AMP-activated protein kinase.",
  titleCN: "吉布斯自由能 · 生物能学与热力学基本原理 · ATP 在化学能储存与转换中的作用 · AMPK",
  opener: "Bioenergetics applies the two laws of thermodynamics to the cell: **energy is conserved (first law), and every spontaneous process increases the entropy of the universe (second law)**; the practical criterion is the **Gibbs free energy — a reaction runs spontaneously only if ΔG is negative**, and the cell couples unfavourable reactions to **ATP hydrolysis**.",
  openerCN: "生物能学把热力学两大定律用于细胞：能量守恒（第一定律），自发过程使宇宙熵增（第二定律）；实用判据是吉布斯自由能——只有 ΔG 为负反应才自发；细胞通过与 ATP 水解偶联来推动不利反应。",
  spine: [
    "两条定律与开放系统、稳态",
    "ΔG = ΔH − TΔS；ΔG 与 ΔG°' 的区别；与 Keq 的关系",
    "放能与吸能反应、偶联与共同中间物",
    "ATP 的结构与为什么是高能化合物",
    "高能化合物排序与磷酸基团转移势能",
    "ATP 的产生与消耗（周转量）与其他高能分子",
    "AMPK：能量传感器的机制与作用；与 mTOR、胰岛素的关系"
  ],
  blocks: [
    { h: "1 · The two laws in a living system", hcn: "两条定律与生命系统",
      points: [
        "**First law:** energy can be neither created nor destroyed, only converted; for the organism: **energy of nutrients = work + heat + stored energy** (this is why indirect calorimetry works).",
        "**Second law:** spontaneous processes increase the **entropy** of the universe. A living organism is highly ordered (low entropy) — this is possible only because it is an **open system** that exports entropy as heat and disorder to the surroundings.",
        "The cell is not at equilibrium — **equilibrium equals death**; it maintains a **steady state** with constant concentrations and continuous flux.",
        "**Gibbs free energy G = H − TS**; the useful criterion at constant T and p is **ΔG = ΔH − TΔS**. **ΔG < 0 exergonic and spontaneous; ΔG > 0 endergonic; ΔG = 0 equilibrium.**",
        "**Enthalpy ΔH** is the heat exchanged; the **hydrophobic effect** is the classic example of a process driven by **entropy** (release of ordered water) rather than enthalpy — mention it when asked how proteins fold or how membranes form."
      ],
      cn: "第一定律→能量守恒（间接测热法的基础）；第二定律→熵增，生命靠开放系统与稳态维持有序；G = H − TS，判据是 ΔG 的符号。" },
    { h: "2 · ΔG, ΔG°' and the equilibrium constant", hcn: "ΔG、ΔG°' 与平衡常数",
      points: [
        "**ΔG°' = standard free-energy change at pH 7, 25 °C, 1 mol/L, [H₂O] = 55.5 mol/L** — the biochemical standard state (the prime means pH 7).",
        "**ΔG = ΔG°' + RT ln([products]/[substrates])** — the actual ΔG depends on **real concentrations**, which is why a reaction with a positive ΔG°' can still run in the cell if the product is removed.",
        "**ΔG°' = −RT ln K'eq**; at 37 °C, RT ≈ 2.58 kJ/mol, so a tenfold change of K corresponds to about **5.7 kJ/mol**.",
        "**ΔG says nothing about the rate** — that is kinetics (activation energy, enzymes). A reaction can be strongly exergonic and immeasurably slow (glucose in air).",
        "**ΔG is additive**: in a sequence, the sum decides. This is the formal basis of **coupling** — an endergonic step (e.g. glucose + Pi → G6P, +13.8 kJ/mol) is driven by ATP hydrolysis (−30.5) giving a net **−16.7 kJ/mol**, and the coupling is physically realised by a **common intermediate** (the phosphorylated enzyme/substrate) on one enzyme."
      ],
      cn: "四个必说：标准态定义(pH 7)、ΔG 与实际浓度的关系、ΔG°'=−RT lnK、ΔG 与速率无关。偶联的实质是共同中间物，例子用己糖激酶。" },
    { h: "3 · ATP — structure and why it is 'macroergic'", hcn: "ATP 为什么是高能化合物",
      points: [
        "Structure: **adenine + ribose (= adenosine) + three phosphates**, joined by one ester and **two phosphoanhydride bonds**; in the cell it works as the **Mg²⁺ complex**.",
        "**ΔG°' of hydrolysis: ATP → ADP + Pi = −30.5 kJ/mol; ATP → AMP + PPi = −45.6 kJ/mol** (and PPi hydrolysis gives another −33, which is how the cell makes a synthesis irreversible — nucleic acids, aminoacyl-tRNA, fatty-acid activation).",
        "Why so much energy is released: **(1) electrostatic repulsion of 3–4 negative charges is relieved; (2) the products are better solvated; (3) Pi is stabilised by resonance; (4) the equilibrium lies far to the right.** Nothing 'special' is stored in the bond itself — say it as *the products are more stable than the substrate*.",
        "In the living cell **ΔG of ATP hydrolysis is about −50 to −60 kJ/mol**, because the [ATP]/[ADP][Pi] ratio is kept far from equilibrium.",
        "**ATP is the common currency, not a store:** the body contains only **~50–100 g** of ATP but turns over **~50–75 kg per day** (each molecule recycled ~1000×). The real stores are glycogen and fat."
      ],
      cn: "结构（两个磷酸酐键）、两个 ΔG°' 数值、为什么高能（电荷排斥＋共振稳定＋溶剂化）、以及『ATP 是货币不是仓库』——每天周转 50–75 kg。" },
    { h: "4 · The scale of macroergic compounds", hcn: "高能化合物的排序（磷酸基团转移势能）",
      points: [
        "**Above ATP (they can phosphorylate ADP): phosphoenolpyruvate −61.9; carbamoyl phosphate −51.4; 1,3-bisphosphoglycerate −49.3; creatine phosphate −43.1 kJ/mol.**",
        "**ATP −30.5 kJ/mol sits in the middle** — that is exactly why it is the universal carrier: it can accept a phosphate from the high-energy donors and give it to the low-energy acceptors.",
        "**Below ATP: glucose-1-P −20.9; fructose-6-P −15.9; glucose-6-P −13.8; glycerol-3-P −9.2 kJ/mol.**",
        "Other macroergic bonds that are **not phosphates**: **thioesters (acetyl-CoA, −31 kJ/mol)**, acyl phosphates, guanidinium phosphates (creatine-P), **S-adenosylmethionine** (activated methyl), UDP-glucose (activated sugar), aminoacyl-tRNA.",
        "**Nucleotide interconversion:** **adenylate kinase 2 ADP ⇌ ATP + AMP**, and **nucleoside diphosphate kinase** makes GTP, UTP and CTP from ATP — so the whole nucleotide pool shares the same energy currency. **Energy charge = ([ATP] + ½[ADP])/([ATP]+[ADP]+[AMP])**, normally **0.85–0.95**."
      ],
      cn: "背三档：高于 ATP（PEP、氨甲酰磷酸、1,3-BPG、磷酸肌酸）、ATP、低于 ATP（各种糖磷酸酯）。再加非磷酸的高能键（硫酯、SAM）与能荷公式。" },
    { h: "5 · How ATP is made and spent", hcn: "ATP 的生成与用途",
      points: [
        "**Made by: (1) substrate-level phosphorylation** (glycolysis: PGK and PK; citrate cycle: succinyl-CoA synthetase) — small but oxygen-independent; **(2) oxidative phosphorylation** — >90 % of the total, via the proton-motive force (topic 10A); **(3) photophosphorylation** in plants.",
        "**Spent on: chemical work** (biosyntheses), **transport work** (Na⁺/K⁺-ATPase alone uses ~20–30 % of resting ATP; Ca²⁺-ATPase, H⁺/K⁺-ATPase, ABC transporters), **mechanical work** (muscle, cilia, mitosis, vesicle transport), **signalling** (cAMP, phosphorylation cascades), and **maintenance of order** (proteolysis by the proteasome even *costs* ATP).",
        "**Energy from food to ATP:** the standard chain is **oxidation of substrate → reduced coenzymes (NADH, FADH₂) → respiratory chain → proton gradient → ATP synthase**. Say this sentence — it links the whole of metabolism.",
        "Efficiency: about **40 %** of the free energy of glucose is captured as ATP, the rest appears as heat — which is not waste in a homeothermic animal.",
        "**Creatine phosphate** is the short-term ATP buffer of muscle and brain (Lohmann reaction), and the **creatine kinase shuttle** transfers energy from mitochondria to myofibrils."
      ],
      cn: "生成三条路（底物水平、氧化磷酸化、光合），消耗四类功（化学、运输、机械、信号）；效率约 40%，其余是热。" },
    { h: "6 · AMP-activated protein kinase (AMPK)", hcn: "AMPK：细胞的能量传感器",
      points: [
        "**AMPK is a heterotrimer (α catalytic, β, γ regulatory); AMP (and ADP) bind the γ subunit** → allosteric activation and, more importantly, **protection of the activating phosphorylation on Thr172** placed there by **LKB1** (or by CaMKKβ in response to Ca²⁺).",
        "It is the **fuel gauge**: it senses a rising **AMP/ATP ratio** — that is, energy deficit (exercise, hypoxia, ischaemia, glucose deprivation).",
        "**Rule: AMPK switches ON catabolism that makes ATP and switches OFF anabolism that costs ATP.** ON: **glucose uptake (GLUT4 translocation, insulin-independent), glycolysis, fatty-acid oxidation, mitochondrial biogenesis via PGC-1α, autophagy**. OFF: **fatty-acid synthesis (phosphorylates and inhibits acetyl-CoA carboxylase → malonyl-CoA falls → CPT-1 is disinhibited → more β-oxidation), cholesterol synthesis (HMG-CoA reductase), glycogen synthase, protein synthesis (inhibits mTORC1), gluconeogenic gene expression**.",
        "**Activators:** exercise/muscle contraction, **adiponectin and leptin**, **metformin** (indirectly, through mild inhibition of complex I), AICAR, salicylate. **Inhibited functionally by insulin and by a positive energy balance.**",
        "Why it matters clinically: it explains why **exercise lowers blood glucose without insulin** (contraction-induced GLUT4), the action of **metformin**, the benefit of adiponectin, and it links energy status to **mTOR, autophagy, ageing and tumour metabolism** (LKB1 is a tumour suppressor, mutated in Peutz–Jeghers syndrome).",
        "The clean summary sentence: **AMPK is the low-energy switch, mTOR the high-energy switch, and insulin/glucagon are the organism-level version of the same decision.**"
      ],
      cn: "AMPK：三聚体、AMP 结合 γ 亚基、LKB1 磷酸化 Thr172；口诀『开产 ATP 的、关耗 ATP 的』；靶点举 ACC→丙二酰 CoA→CPT-1 这一条最能得分；二甲双胍与运动是临床落点。" }
  ],
  numbers: [
    "**ATP → ADP + Pi: ΔG°' = −30.5 kJ/mol**; ATP → AMP + PPi: **−45.6 kJ/mol**; in vivo about **−50 to −60 kJ/mol**",
    "PEP **−61.9**, creatine phosphate **−43.1**, glucose-6-P **−13.8 kJ/mol**",
    "Body ATP content **~50–100 g**, daily turnover **~50–75 kg**",
    "**ΔG°' = −RT ln K'eq**; RT at 37 °C ≈ **2.58 kJ/mol**",
    "Energy charge normally **0.85–0.95**; Na⁺/K⁺-ATPase consumes **20–30 %** of resting ATP"
  ],
  clinic: [
    "**Metformin** activates AMPK — first-line in type 2 diabetes; contraindicated in renal failure (lactate)",
    "**Cyanide, CO, rotenone** stop the chain: ATP synthesis fails within seconds in the heart and brain",
    "**Creatine phosphate** and the CK shuttle; serum CK as the muscle marker",
    "**Indirect calorimetry** (respiratory quotient: 1.0 for carbohydrate, 0.7 for fat) applies the first law at the bedside",
    "**LKB1 mutations (Peutz–Jeghers)** — the AMPK kinase as a tumour suppressor"
  ],
  traps: [
    "**ΔG°' and ΔG are not the same** — the actual value depends on concentrations",
    "ΔG tells you nothing about **rate**; enzymes change the rate, never the ΔG",
    "The 'energy of the high-energy bond' is not stored in the bond — the **products are more stable**",
    "ATP is a **currency, not a store**; the stores are glycogen and triacylglycerol",
    "AMPK is activated by **AMP/ADP, not by ATP** — and it inhibits, not stimulates, mTOR"
  ],
  terms: [
    ["Gibbs free energy", "吉布斯自由能"], ["enthalpy / entropy", "焓/熵"], ["exergonic / endergonic", "放能/吸能"],
    ["standard free-energy change", "标准自由能变化"], ["steady state", "稳态"], ["coupling", "偶联"],
    ["common intermediate", "共同中间物"], ["phosphoryl transfer potential", "磷酸基团转移势能"],
    ["energy charge", "能荷"], ["AMPK", "AMP 活化蛋白激酶"], ["mTOR", "哺乳动物雷帕霉素靶蛋白"]
  ]
},
b: {
  titleEN: "Biochemistry of the digestive tract. Biochemical processes in nutrient digestion. Bile acids. Absorption of nutrients and vitamins in different parts of the digestive tract.",
  titleCN: "消化道生物化学 · 营养物质消化的生化过程 · 胆汁酸 · 各段消化道对营养素与维生素的吸收",
  opener: "Digestion is **stepwise enzymatic hydrolysis** of polymers to absorbable monomers, carried out by secretions with different pH optima — and every secretion is regulated by a **gastrointestinal hormone**; fat additionally needs **emulsification by bile acids** before it can be attacked.",
  openerCN: "消化是把聚合物逐级酶促水解成可吸收的单体，各段分泌液的 pH 最适各异，且每种分泌都由胃肠激素调节；脂肪还必须先由胆汁酸乳化才能被水解。",
  spine: [
    "口腔与胃：唾液淀粉酶、胃酸与胃蛋白酶、内因子",
    "胰腺外分泌：三大类酶与酶原激活；碳酸氢盐",
    "胆汁：胆汁酸的合成、结合、肠肝循环",
    "三大营养素的消化终产物与吸收机制（含转运体）",
    "胃肠激素：胃泌素、促胰液素、CCK、GIP/GLP-1、生长抑素",
    "各段吸收部位表（含维生素与矿物质）",
    "临床：乳糖不耐受、乳糜泻、胰功能不全、胆石、B12 吸收障碍"
  ],
  blocks: [
    { h: "1 · Mouth and stomach", hcn: "口腔与胃",
      points: [
        "**Saliva (1–1.5 L/day, pH ~6.5–7)**: **α-amylase (ptyalin)** starts starch digestion (works until gastric acid inactivates it), **lingual lipase** (important in newborns), **mucins**, **lysozyme, lactoferrin, secretory IgA**, and bicarbonate/urea buffering that protects the teeth.",
        "**Gastric juice (2–2.5 L/day, pH 1–2)**: **HCl from parietal cells** — made by **carbonic anhydrase → H⁺ pumped by the H⁺/K⁺-ATPase** (blocked by omeprazole), with the **alkaline tide** of bicarbonate into blood after a meal; Cl⁻ follows.",
        "Functions of acid: **denaturation of proteins, activation of pepsinogen (autocatalytic below pH 5), bactericidal action, release of iron and B12 from food, solubilisation of Fe³⁺ → Fe²⁺**.",
        "**Pepsin** (chief cells, an aspartate protease, optimum pH 1.5–2) cuts after **aromatic amino acids** — an endopeptidase producing large peptides; **gastric lipase** digests ~10–20 % of fat; **intrinsic factor** (parietal cells) is **the only truly indispensable gastric product** — without it, B12 deficiency.",
        "Mucosal protection: mucus–bicarbonate layer, **prostaglandin E₂** (hence NSAID ulcers), tight junctions, rapid renewal; *Helicobacter pylori* uses **urease** to survive and is the main ulcer cause."
      ],
      cn: "唾液（淀粉酶）→胃（HCl 由 H⁺/K⁺-ATP 酶泵出、胃蛋白酶原自催化、内因子）。胃唯一不可替代的产物是内因子——这是常考的判断句。" },
    { h: "2 · Pancreas and small intestine", hcn: "胰腺与小肠",
      points: [
        "**Pancreatic juice 1–2 L/day, pH ~8** thanks to **bicarbonate** secreted by duct cells under **secretin** — it neutralises chyme so that the pancreatic enzymes (optimum pH 7–8) can work.",
        "**Proteases as zymogens: trypsinogen → trypsin by enteropeptidase (enterokinase) of the duodenal brush border**; trypsin then activates **chymotrypsinogen, proelastase, procarboxypeptidases A/B** and more trypsinogen (a cascade). Specificity: **trypsin after Lys/Arg, chymotrypsin after aromatic, elastase after small residues, carboxypeptidase A/B from the C-terminus**.",
        "**Pancreatic α-amylase** → maltose, maltotriose, α-limit dextrins. **Pancreatic lipase with colipase** (colipase anchors it against bile salts) → **2-monoacylglycerol + 2 fatty acids**; plus **phospholipase A₂** (secreted as a zymogen) and **cholesterol esterase**.",
        "**Brush-border (membrane) digestion:** **lactase, sucrase-isomaltase, maltase-glucoamylase, trehalase**, and **aminopeptidases and dipeptidases**; **di- and tripeptides are absorbed intact by PepT1 (H⁺-coupled)** and hydrolysed inside the enterocyte.",
        "**Self-protection of the pancreas:** enzymes stored as zymogens, **trypsin inhibitor SPINK1**, low calcium in granules. Failure = **acute pancreatitis** (autodigestion; amylase and lipase rise); hereditary pancreatitis from PRSS1 or SPINK1 mutations."
      ],
      cn: "胰液靠促胰液素分泌碳酸氢盐把 pH 调到 8；酶原级联的起点是肠激酶激活胰蛋白酶；四种蛋白酶的切点、脂肪酶＋辅脂酶；刷状缘的双糖酶与 PepT1。" },
    { h: "3 · Bile and bile acids", hcn: "胆汁与胆汁酸",
      points: [
        "**Bile 0.5–1 L/day**: bile acids, phospholipids (**lecithin**), **cholesterol**, **bilirubin diglucuronide**, proteins, electrolytes; it is the excretory route for cholesterol, bilirubin, drugs and heavy metals, and the emulsifier for fat.",
        "**Synthesis: cholesterol → (7α-hydroxylase, CYP7A1, the rate-limiting step, inhibited by bile acids returning to the liver) → primary bile acids: cholic acid and chenodeoxycholic acid.** ~**0.5 g cholesterol/day** is disposed of this way.",
        "**Conjugation with glycine or taurine** gives **bile salts** with a much lower pKa — so they are **ionised at intestinal pH, far better detergents, and cannot be passively reabsorbed** until deconjugated.",
        "**Secondary bile acids** are made by **intestinal bacteria: 7α-dehydroxylation → cholic → deoxycholic, chenodeoxycholic → lithocholic** (the most toxic, largely excreted).",
        "**Enterohepatic circulation:** bile salts are actively reabsorbed in the **terminal ileum (ASBT transporter)** and returned by the portal vein; the pool of **2–4 g circulates 6–10 times a day**, so only ~0.5 g/day is lost in faeces and must be resynthesised. **Bile-acid sequestrants (cholestyramine) interrupt it → more cholesterol used for bile acids → lower LDL.** Ileal resection or Crohn disease → bile-acid diarrhoea plus fat and B12 malabsorption.",
        "**Their structure explains everything: amphipathic molecules with all OH groups on one face** → they form **micelles** (with phospholipids and monoacylglycerols, mixed micelles) that carry the products of lipolysis to the brush border. **Cholesterol gallstones form when cholesterol exceeds the solubilising capacity of bile salts and lecithin** (the lithogenic index)."
      ],
      cn: "胆汁酸：CYP7A1 限速→初级胆汁酸→与甘氨酸/牛磺酸结合→肠道细菌 7α-脱羟基生成次级胆汁酸；肠肝循环（回肠末端 ASBT，每天循环 6–10 次）；结构两亲、形成混合微团；胆固醇结石的机制。" },
    { h: "4 · End products and their absorption", hcn: "终产物与吸收机制",
      points: [
        "**Carbohydrates → glucose, galactose, fructose only.** **SGLT1** (Na⁺-coupled secondary active) for glucose/galactose, **GLUT5** for fructose, exit by **GLUT2**. Undigested fibre and lactose are fermented by colonic bacteria to **short-chain fatty acids (acetate, propionate, butyrate — butyrate is the fuel of colonocytes)** plus gas.",
        "**Proteins → amino acids, di- and tripeptides.** Several Na⁺-dependent carriers by side-chain class (defects: **cystinuria** — dibasic amino acids, stones; **Hartnup disease** — neutral amino acids, pellagra-like).",
        "**Fats:** emulsification (bile) → lipase/colipase → **2-MAG + fatty acids → mixed micelles → passive/facilitated uptake (CD36, FATP4)** → **re-esterification in the smooth ER (monoacylglycerol pathway)** → **chylomicrons (apo B-48) → lymph via lacteals → thoracic duct**. **Short- and medium-chain fatty acids skip all this and go directly into the portal blood** — the basis of MCT-oil therapy in malabsorption.",
        "**Water and electrolytes:** ~9 L enters the gut daily (2 L food + 7 L secretions), **~8 L absorbed in the small intestine and ~0.8 L in the colon**, only ~100–200 mL lost in stool; colonic Na⁺ absorption is aldosterone-regulated (ENaC).",
        "The stepwise logic to state: **lumen digestion → membrane digestion → transport → intracellular processing → delivery (portal blood for sugars/amino acids, lymph for fat).**"
      ],
      cn: "三大营养素终产物与转运体（SGLT1/GLUT5/GLUT2、PepT1、CD36）；脂肪走淋巴、糖与氨基酸走门静脉；中链脂肪酸直接入门静脉。水每天 9 L 进、100–200 mL 出。" },
    { h: "5 · Where each nutrient is absorbed", hcn: "各段吸收部位（表格式记忆）",
      points: [
        "**Duodenum/upper jejunum: iron (DMT1, helped by vitamin C and acid), calcium (calcitriol-dependent, TRPV6/calbindin), folate, most water-soluble vitamins (B1, B2, B6, C), monosaccharides, amino acids, and fat.**",
        "**Jejunum:** the bulk of everything — sugars, amino acids, lipids, fat-soluble vitamins **A, D, E, K (with bile salts, in micelles)**.",
        "**Ileum: the two specialities — vitamin B12 (with intrinsic factor, receptor cubilin) and bile salts (ASBT)** — remember these two as a pair, because ileal disease causes exactly this pair of deficiencies.",
        "**Colon: water, Na⁺, K⁺ secretion, short-chain fatty acids, and vitamins made by the microbiota (K₂ and some B vitamins).**",
        "Special cases: **magnesium** ileum/colon, **zinc** jejunum, **B12 needs three proteins in sequence (haptocorrin → intrinsic factor → transcobalamin II)**, **fat-soluble vitamins fail whenever fat digestion fails** (cholestasis, pancreatic insufficiency, coeliac disease, ileal resection)."
      ],
      cn: "记住三条：铁与钙在十二指肠、B12 与胆盐在回肠末端、水与短链脂肪酸在结肠。脂溶性维生素随脂肪吸收，脂肪吸收一坏就一起缺。" },
    { h: "6 · Hormonal regulation and clinical links", hcn: "胃肠激素与临床",
      points: [
        "**Gastrin** (G cells, antrum) — acid secretion and mucosal growth; stimulated by peptides and distension, inhibited by low pH and **somatostatin**. **Gastrinoma = Zollinger–Ellison syndrome** (refractory ulcers, diarrhoea).",
        "**Secretin** (S cells, duodenum) — released by **acid**; stimulates **pancreatic and biliary bicarbonate**, inhibits gastrin: the pH-control hormone.",
        "**Cholecystokinin (CCK)** (I cells) — released by **fat and protein**; **contracts the gallbladder, relaxes the sphincter of Oddi, stimulates pancreatic enzyme secretion**, and signals satiety.",
        "**GIP and GLP-1 (incretins)** — released by nutrients, amplify insulin secretion (topic 2B); **motilin** (interdigestive migrating complex), **VIP** (secretion, vasodilation; VIPoma → watery diarrhoea), **somatostatin** — the universal inhibitor; **ghrelin** — hunger.",
        "**Clinical panel:** **lactose intolerance** (H₂ breath test), **coeliac disease** (gliadin → tissue transglutaminase → autoantibodies, villous atrophy, iron/folate deficiency), **exocrine pancreatic insufficiency** (steatorrhoea, low faecal elastase, enzyme replacement), **cholestasis** (pale stools, dark urine, deficiency of A/D/E/K, itching), **pernicious anaemia** (no intrinsic factor), **short-bowel and ileal resection**, **Helicobacter/NSAID ulcer**.",
        "Useful laboratory items: **faecal elastase-1** (pancreatic function), **faecal calprotectin** (intestinal inflammation), **faecal occult blood**, **anti-tTG IgA** (coeliac), **serum amylase and lipase** (pancreatitis)."
      ],
      cn: "四个核心激素（胃泌素、促胰液素、CCK、生长抑素）＋肠促胰素；临床五件套（乳糖不耐受、乳糜泻、胰外分泌不足、胆汁淤积、恶性贫血）与相应的实验室指标。" }
  ],
  numbers: [
    "Saliva **1–1.5 L/day (pH 6.5–7)**, gastric juice **2–2.5 L (pH 1–2)**, pancreatic juice **1–2 L (pH ~8)**, bile **0.5–1 L**",
    "Bile-acid pool **2–4 g**, recycled **6–10× per day**; daily loss/synthesis **~0.5 g**",
    "Fluid balance: **~9 L** enters the gut, **~100–200 mL** leaves in stool",
    "Cholesterol converted to bile acids **~0.5 g/day** — the main route of cholesterol excretion",
    "Colonic short-chain fatty acids supply **~10 %** of daily energy; butyrate feeds the colonocyte"
  ],
  clinic: [
    "**Zollinger–Ellison syndrome** (gastrinoma), **pernicious anaemia** (intrinsic factor), **omeprazole** (H⁺/K⁺-ATPase)",
    "**Coeliac disease** — anti-transglutaminase antibodies, villous atrophy, iron and folate deficiency",
    "**Exocrine pancreatic insufficiency** — steatorrhoea, low faecal elastase; **acute pancreatitis** — amylase/lipase",
    "**Cholestasis / bile-duct obstruction** — fat and A, D, E, K malabsorption, itching, pale stools",
    "**Ileal resection or Crohn** — B12 deficiency **and** bile-acid diarrhoea, gallstones and oxalate stones"
  ],
  traps: [
    "Salivary amylase does **not** work in the stomach for long — acid inactivates it",
    "Bile does **not** contain digestive enzymes — it emulsifies; the enzymes come from the pancreas",
    "Bile salts are **reabsorbed in the terminal ileum**, not the duodenum — this is why B12 and bile salts fail together",
    "Fat leaves the enterocyte in **chylomicrons via lymph**, not through the portal vein (except short/medium-chain acids)",
    "Enteropeptidase, not trypsin, starts the cascade — trypsin only continues it"
  ],
  terms: [
    ["zymogen", "酶原"], ["enteropeptidase", "肠激酶"], ["colipase", "辅脂酶"], ["mixed micelle", "混合微团"],
    ["bile salt", "胆盐"], ["enterohepatic circulation", "肠肝循环"], ["chylomicron", "乳糜微粒"],
    ["brush border", "刷状缘"], ["secretin", "促胰液素"], ["cholecystokinin", "胆囊收缩素"],
    ["intrinsic factor", "内因子"], ["short-chain fatty acid", "短链脂肪酸"]
  ]
}
});
