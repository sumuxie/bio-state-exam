window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 15,
a: {
  titleEN: "Haemoglobin and myoglobin — structure and function. Mechanism of oxygen binding. Cooperative kinetics. Haemoglobin variants.",
  titleCN: "血红蛋白与肌红蛋白的结构与功能 · 氧结合机制 · 协同动力学 · 血红蛋白变异体",
  opener: "Myoglobin and haemoglobin have almost the same fold and the same haem, yet completely different behaviour: **myoglobin is a monomer with a hyperbolic curve — a store; haemoglobin is a tetramer with a sigmoidal curve — a transporter**, and the difference is entirely due to **cooperativity between subunits**.",
  openerCN: "肌红蛋白与血红蛋白折叠方式与血红素几乎相同，行为却完全不同：肌红蛋白是单体、双曲线曲线——储氧；血红蛋白是四聚体、S 形曲线——运氧；差别完全来自亚基间的协同作用。",
  spine: [
    "血红素的化学与铁的六个配位键",
    "肌红蛋白的结构与功能",
    "血红蛋白的四级结构与 T/R 态",
    "氧结合的机制（近端组氨酸的牵引）与协同性",
    "定量描述：P50、Hill 系数、MWC 与 KNF 模型",
    "别构调节：2,3-BPG、H⁺/CO₂、Cl⁻、温度",
    "变异体：HbF、HbA2、HbS、HbC、HbM、高/低亲和力变异体"
  ],
  blocks: [
    { h: "1 · Haem and the coordination of iron", hcn: "血红素与铁的配位",
      points: [
        "**Haem = protoporphyrin IX + Fe²⁺**: four pyrrole rings joined by methine bridges, a fully conjugated (and therefore intensely coloured) system; the ring carries **4 methyl, 2 vinyl and 2 propionate** substituents.",
        "**The iron has six coordination bonds: four to the pyrrole nitrogens in the plane, the fifth to the proximal histidine (His F8) of the protein, and the sixth is the site where O₂ binds** — on the side of the **distal histidine (His E7)**.",
        "**The distal histidine has three jobs:** it sterically bends the bound CO (reducing its affinity ~200-fold, otherwise CO poisoning would be universal), it stabilises bound O₂ by a hydrogen bond, and it keeps water out.",
        "**Free haem in solution is oxidised instantly to Fe³⁺; the hydrophobic pocket of the globin is what keeps the iron divalent** — a beautiful example of protein function protecting a cofactor.",
        "Both proteins are built of the **globin fold: ~8 α-helices labelled A–H, no β-sheet**, hydrophobic residues inside, the haem in a hydrophobic crevice."
      ],
      cn: "血红素结构＋铁的六个配位键（第 5 个接近端组氨酸 F8，第 6 个结合 O₂）；远端组氨酸的三个作用（限制 CO、稳定 O₂、排水）；珠蛋白折叠保护 Fe²⁺。" },
    { h: "2 · Myoglobin", hcn: "肌红蛋白",
      points: [
        "**153 amino acids, one polypeptide, one haem, ~17 kDa**; the first protein whose structure was solved by X-ray crystallography (Kendrew, 1958).",
        "**Hyperbolic saturation curve, P₅₀ ≈ 2.8 mmHg (0.37 kPa)** — it is essentially saturated at any physiological tissue pO₂ and gives up oxygen only when pO₂ falls very low (heavy exercise, diving).",
        "**No cooperativity (only one binding site), no Bohr effect, does not bind 2,3-BPG** — therefore it cannot be a transport protein: it would never release the oxygen in the tissue.",
        "Functions: an **oxygen reserve for a few seconds** and, more importantly, **facilitated diffusion of oxygen from the sarcolemma to the mitochondria**; it is abundant in **red (type I) fibres** and in the heart, and enormous in diving mammals.",
        "Clinically: released in **rhabdomyolysis → myoglobinuria → acute kidney injury**; the earliest but least specific marker after myocardial infarction (topic 1B)."
      ],
      cn: "153 个氨基酸、单体、P50=2.8 mmHg、双曲线；无协同、无 Bohr 效应、不结合 2,3-BPG；功能=储氧＋促进氧向线粒体扩散。" },
    { h: "3 · Haemoglobin — quaternary structure and the T/R transition", hcn: "血红蛋白的四级结构与 T/R 转换",
      points: [
        "**HbA = α₂β₂**, ~64.5 kDa, 4 haems, therefore **4 O₂ per molecule**; the tetramer behaves as **a dimer of αβ dimers** that slide against each other by ~15° during the transition.",
        "**T (tense, deoxy) state**: stabilised by **8 salt bridges** between the subunits (and by 2,3-BPG in the central cavity); low oxygen affinity. **R (relaxed, oxy) state**: the salt bridges are broken, the central cavity narrows and expels 2,3-BPG; high affinity.",
        "**The molecular trigger:** in deoxyhaemoglobin the Fe²⁺ lies **~0.6 Å out of the haem plane** (it is slightly too large); on binding O₂ it becomes smaller and **moves into the plane, dragging His F8 and helix F with it** → the conformational change propagates to the subunit interface → the other subunits shift toward R.",
        "**Result: the affinity of the last subunit is ~300× that of the first** — this is positive cooperativity, and it converts a shallow response into a steep one.",
        "Physiological meaning: **the sigmoid curve is what makes efficient loading in the lung and unloading in the tissue possible in the same molecule.** Say this sentence — it is the point of the whole topic."
      ],
      cn: "α2β2、T 态 8 个盐桥、R 态盐桥断裂；触发机制是 Fe²⁺ 移入平面牵动 F8 组氨酸与 F 螺旋；最后一个亚基亲和力是第一个的约 300 倍。" },
    { h: "4 · Cooperative kinetics — how to describe it quantitatively", hcn: "协同动力学的定量描述",
      points: [
        "**P₅₀ = the partial pressure at which the protein is half saturated: HbA 26 mmHg (3.5 kPa), HbF ~19 mmHg, myoglobin 2.8 mmHg.** A higher P₅₀ means lower affinity.",
        "**Hill equation: Y = pO₂ⁿ / (P₅₀ⁿ + pO₂ⁿ)**; the **Hill coefficient n** measures cooperativity: **n = 1 no cooperativity (myoglobin), n ≈ 2.8 for haemoglobin, n = 4 would be perfect (all-or-none)**. A Hill plot gives n as the slope at half saturation.",
        "**Two classical models:** the **MWC (concerted, Monod–Wyman–Changeux) model** — all subunits switch together between T and R, and the ligand shifts the equilibrium; the **KNF (sequential, Koshland) model** — each subunit changes on binding and influences its neighbours. Reality lies between them; the examiner usually wants the names and the idea.",
        "**Allosteric definition:** haemoglobin is the textbook **allosteric protein** — a ligand binding at one site changes the affinity at another, distant site (homotropic effect for O₂ itself, heterotropic for 2,3-BPG, H⁺, CO₂).",
        "**Comparison to enzyme kinetics:** the sigmoid oxygen curve is the same mathematics as the sigmoid v/[S] curve of an allosteric enzyme such as PFK-1 or ATCase (topic 1A) — cooperativity makes both of them **sensitive switches** rather than proportional responders."
      ],
      cn: "P50 的定义与三个数值、Hill 方程与 n≈2.8、MWC 与 KNF 两个模型的名字与区别；并把这套数学与别构酶（PFK-1）联系起来。" },
    { h: "5 · Allosteric regulation of oxygen affinity", hcn: "氧亲和力的别构调节",
      points: [
        "**2,3-BPG** binds **one molecule per haemoglobin tetramer in the central cavity, to positively charged residues of both β chains (His2, Lys82, His143)** — only in the **T state**, so it stabilises deoxyhaemoglobin and **shifts the curve right**. Without it, blood would release almost no oxygen (P₅₀ would fall to ~1 mmHg).",
        "**Bohr effect:** H⁺ protonates **His146 of the β chain (and the N-terminal amino groups)**, forming a salt bridge with Asp94 that stabilises T → **acidosis and CO₂ release oxygen where metabolism is active**; in the lung the opposite. Quantitatively **~0.5 units of pH shifts P₅₀ appreciably**.",
        "**CO₂ binds directly** to N-terminal amino groups as **carbamate**, also stabilising T (and this is 20–25 % of CO₂ transport); **Cl⁻** binds the T state as well.",
        "**Temperature:** fever shifts the curve right (more oxygen to hot, working tissue); hypothermia shifts it left.",
        "Summary phrase: **anything that signals 'a working tissue' — heat, acid, CO₂, 2,3-BPG — lowers the affinity and releases oxygen.** Adaptations: chronic hypoxia, anaemia and altitude raise 2,3-BPG within a day or two."
      ],
      cn: "四个别构效应物（2,3-BPG、H⁺、CO₂、Cl⁻）都稳定 T 态；记住 2,3-BPG 结合位点在两条 β 链之间的中央腔、Bohr 效应靠 β 链 His146。一句话概括：凡是『组织在工作』的信号都降低亲和力。" },
    { h: "6 · Haemoglobin variants", hcn: "血红蛋白变异体",
      points: [
        "**Physiological: HbA (α₂β₂) 97 %, HbA₂ (α₂δ₂) ~2.5 %, HbF (α₂γ₂) < 1 % in adults.** **HbF has a higher affinity because its γ chain binds 2,3-BPG poorly** — the mechanism of placental oxygen transfer.",
        "**HbS (sickle): β6 Glu → Val.** The new hydrophobic valine fits a pocket on another deoxyHb molecule → **polymerisation of deoxyHbS into fibres** → sickling, haemolysis, vaso-occlusion. Only the **deoxy** form polymerises, so hypoxia, acidosis and dehydration precipitate crises; **HbF inhibits polymerisation → hydroxyurea therapy**; heterozygotes are malaria-resistant.",
        "**HbC: β6 Glu → Lys** — milder, crystallises; **HbSC** disease is intermediate. **HbE** (β26) is common in Southeast Asia.",
        "**HbM variants** — a mutation of the proximal or distal histidine stabilises **Fe³⁺** → congenital **methaemoglobinaemia**, cyanosis unresponsive to oxygen, autosomal dominant.",
        "**High-affinity variants (e.g. Hb Chesapeake, or 2,3-BPG-binding mutants)** → poor unloading → **secondary polycythaemia**; **low-affinity variants (Hb Kansas)** → cyanosis with normal pO₂. Both are recognised by measuring **P₅₀**.",
        "**Quantitative (not qualitative) defects are the thalassaemias** — reduced synthesis of α or β chains; **HbA₂ is raised in β-thalassaemia minor**, and **Hb Bart's (γ₄) or HbH (β₄)** appear in α-thalassaemia. Detection of all variants: **electrophoresis or HPLC, plus DNA analysis**."
      ],
      cn: "生理三种＋HbS（β6 Glu→Val，只有脱氧型聚合）＋HbC/HbE＋HbM（稳定 Fe³⁺→先天高铁血红蛋白血症）＋高/低亲和力变异体（红细胞增多/发绀）；地中海贫血是量的缺陷。" }
  ],
  numbers: [
    "**P₅₀: myoglobin 2.8 mmHg, HbA 26 mmHg (3.5 kPa), HbF ~19 mmHg**",
    "Hill coefficient **n ≈ 2.8** (1 = none, 4 = maximal); affinity of the 4th site **~300×** the first",
    "Haemoglobin **64.5 kDa, 4 haems, 4 O₂**; iron moves **~0.6 Å** into the plane on oxygenation",
    "1 g of haemoglobin binds **1.34 mL O₂**; arterial content ≈ **200 mL O₂/L** of blood",
    "Adult fractions: **HbA 97 %, HbA₂ 2.5 %, HbF < 1 %**"
  ],
  clinic: [
    "**Sickle-cell disease** — hydroxyurea raises HbF; voxelotor stabilises the R state",
    "**Congenital methaemoglobinaemia (HbM)** — cyanosis with normal pO₂, no response to oxygen",
    "**High-affinity variants** — unexplained polycythaemia with normal erythropoietin; measure P₅₀",
    "**Stored blood loses 2,3-BPG** — transfused red cells release oxygen poorly for the first hours",
    "**Pulse oximetry misleads** in CO poisoning and methaemoglobinaemia — use CO-oximetry"
  ],
  traps: [
    "Cooperativity requires **more than one subunit** — myoglobin cannot show it, whatever the conditions",
    "2,3-BPG binds the **central cavity of the T state**, not the haem",
    "The iron is **not oxidised** when oxygen binds — Fe²⁺ throughout",
    "Higher affinity is **not** better for a transporter: it means less delivery to the tissue",
    "HbF's higher affinity is due to **poor 2,3-BPG binding**, not to a different haem"
  ],
  terms: [
    ["globin fold", "珠蛋白折叠"], ["proximal / distal histidine", "近端/远端组氨酸"], ["cooperativity", "协同效应"],
    ["Hill coefficient", "Hill 系数"], ["MWC / KNF model", "MWC/KNF 模型"], ["allosteric protein", "别构蛋白"],
    ["salt bridge", "盐桥"], ["P₅₀", "半饱和氧分压"], ["haemoglobin variant", "血红蛋白变异体"],
    ["polymerisation", "聚合"]
  ]
},
b: {
  titleEN: "Metabolism of nervous tissue. Synthesis and inactivation of catecholamines and serotonin. Glutamate and glycine as mediators.",
  titleCN: "神经组织代谢 · 儿茶酚胺与 5-羟色胺的合成与灭活 · 谷氨酸与甘氨酸作为递质",
  opener: "The brain is **2 % of body mass but consumes 20 % of the oxygen and ~120 g of glucose a day**; it has almost no fuel store, cannot use fatty acids, and therefore depends absolutely on a continuous supply of **glucose (or, after adaptation, ketone bodies)**.",
  openerCN: "脑占体重 2%，却消耗 20% 的氧和每天约 120 g 葡萄糖；几乎没有燃料储备、不能利用脂肪酸，因此绝对依赖持续供应的葡萄糖（长期饥饿后可用酮体）。",
  spine: [
    "脑的能量代谢与血脑屏障的转运",
    "神经递质总览与合成部位；谷氨酸-谷氨酰胺循环",
    "儿茶酚胺：合成四步、储存、释放、灭活（MAO/COMT）与代谢产物",
    "5-羟色胺与褪黑素",
    "谷氨酸：兴奋性递质、受体、兴奋毒性",
    "GABA 与甘氨酸：抑制性递质与临床药物",
    "临床：帕金森、抑郁、嗜铬细胞瘤、类癌、苯丙酮尿症、氨中毒"
  ],
  blocks: [
    { h: "1 · Energy metabolism of the brain", hcn: "脑的能量代谢",
      points: [
        "**Glucose is the obligatory fuel** — it enters through **GLUT1** (blood–brain barrier and glia) and **GLUT3** (neurons), both insulin-independent and with a low Km, so uptake keeps working at low glycaemia. **Fatty acids cannot cross the barrier bound to albumin, and the brain has no significant glycogen** (only a little in astrocytes).",
        "**After 2–3 days of starvation ketone bodies (3-hydroxybutyrate, acetoacetate) supply up to 60–70 % of the brain's energy** via monocarboxylate transporters — the adaptation that spares muscle protein (topic 27B).",
        "Almost all the ATP is spent on **ion gradients: the Na⁺/K⁺-ATPase accounts for over half** (restoring the gradients after action potentials), plus neurotransmitter recycling and Ca²⁺ pumping.",
        "**Hypoglycaemia below ~2.5–3.0 mmol/L causes symptoms and below ~1 mmol/L coma**; the brain has an oxygen reserve of seconds and a glucose reserve of a few minutes — this is why cerebral ischaemia is catastrophic within minutes.",
        "**Astrocyte–neuron lactate shuttle:** astrocytes take up glucose, run glycolysis and export **lactate**, which neurons oxidise — one of the reasons the brain's glucose consumption exceeds its oxidative capacity in activity. Astrocytes also form the barrier's glia limitans, buffer K⁺ and recycle transmitters."
      ],
      cn: "脑的四点：只用葡萄糖（GLUT1/GLUT3，不依赖胰岛素）、饥饿后可用酮体（60–70%）、ATP 大半用于钠钾泵、星形胶质细胞-神经元乳酸穿梭。" },
    { h: "2 · Neurotransmitters — the overview and the glutamate–glutamine cycle", hcn: "递质总览与谷氨酸-谷氨酰胺循环",
      points: [
        "Classes: **amino acids (glutamate, aspartate — excitatory; GABA, glycine — inhibitory), biogenic amines (dopamine, noradrenaline, adrenaline, serotonin, histamine), acetylcholine, purines (ATP, adenosine), neuropeptides (endorphins, substance P), and gases (NO, CO)**.",
        "Common life cycle: **synthesis → storage in vesicles (VMAT for amines, VGLUT for glutamate) → Ca²⁺-dependent exocytosis → receptor binding → termination by reuptake (transporters), enzymatic degradation, or diffusion.** Termination, not release, is the usual drug target.",
        "**Glutamate–glutamine cycle:** the neuron releases glutamate; **astrocytes take it up (EAAT) and convert it with ammonia to glutamine (glutamine synthetase)**; glutamine returns to the neuron and is hydrolysed back by **glutaminase**. This both recycles the transmitter and is the brain's main way of **detoxifying ammonia** — which is why glutamine rises in the CSF in hepatic encephalopathy and why astrocytes swell (osmotic effect) causing cerebral oedema (topic 18A).",
        "**Acetylcholine:** acetyl-CoA + choline → ACh (choline acetyltransferase), degraded in the cleft by **acetylcholinesterase**; nicotinic (ionotropic) and muscarinic (GPCR) receptors; loss of cholinergic neurons in **Alzheimer disease** → cholinesterase inhibitors.",
        "The blood–brain barrier shapes pharmacology: **L-DOPA crosses (LAT1 transporter), dopamine does not**; that single fact is the basis of Parkinson therapy."
      ],
      cn: "递质分类与共同生命周期（合成→囊泡→钙依赖释放→受体→终止）；谷氨酸-谷氨酰胺循环同时负责递质再循环与氨解毒（联系肝性脑病）；L-DOPA 能过血脑屏障而多巴胺不能。" },
    { h: "3 · Catecholamines — synthesis and inactivation", hcn: "儿茶酚胺的合成与灭活",
      points: [
        "**Tyrosine → (TYROSINE HYDROXYLASE, rate-limiting, needs BH₄ and Fe²⁺) → L-DOPA → (aromatic L-amino acid decarboxylase, PLP) → DOPAMINE → (dopamine β-hydroxylase, needs vitamin C and copper, located INSIDE the vesicle) → NORADRENALINE → (PNMT, methyl from SAM, induced by cortisol) → ADRENALINE.**",
        "Where each step stops: **dopaminergic neurons** stop at dopamine, **sympathetic neurons and most of the CNS noradrenergic system** at noradrenaline, and only the **adrenal medulla** (bathed in cortisol from the cortex) makes adrenaline (**~80 % of medullary output**).",
        "Regulation: **tyrosine hydroxylase is feedback-inhibited by catecholamines and activated by phosphorylation (PKA) during sympathetic activity**; storage in vesicles by **VMAT** (blocked by reserpine); release is Ca²⁺-dependent exocytosis.",
        "**Termination is mainly REUPTAKE (NET/DAT transporters — the target of cocaine, amphetamine, tricyclic antidepressants and methylphenidate)**, then degradation by **MAO (mitochondrial, oxidative deamination) and COMT (cytosolic, methylation with SAM)**.",
        "**End products: noradrenaline/adrenaline → metanephrine and normetanephrine → vanillylmandelic acid (VMA); dopamine → homovanillic acid (HVA)** — all excreted in urine. **Plasma free metanephrines are the most sensitive test for phaeochromocytoma.**",
        "Receptors: **α₁ (Gq — vasoconstriction), α₂ (Gi — presynaptic inhibition), β₁ (Gs — heart), β₂ (Gs — bronchodilation, glycogenolysis), β₃ (lipolysis, thermogenesis); dopamine D1 (Gs) and D2 (Gi)**."
      ],
      cn: "四步合成一定要能背（限速酶=酪氨酸羟化酶，需 BH4；DβH 需维生素 C 与铜；PNMT 需皮质醇与 SAM）；灭活以再摄取为主，再经 MAO/COMT；尿中终产物 VMA/HVA/甲氧基肾上腺素。" },
    { h: "4 · Serotonin, melatonin and histamine", hcn: "5-羟色胺、褪黑素与组胺",
      points: [
        "**Tryptophan → (tryptophan hydroxylase, rate-limiting, BH₄) → 5-hydroxytryptophan → (decarboxylase, PLP) → SEROTONIN (5-HT)**; only ~1–2 % of the body's serotonin is in the brain — **90 % is in the enterochromaffin cells of the gut** and the rest in platelets (which take it up but cannot make it).",
        "Functions: mood, sleep, appetite, pain modulation, vomiting (5-HT₃ — the target of ondansetron), vasoconstriction and platelet aggregation, gut motility. **Termination by reuptake (SERT — the target of SSRIs)** and degradation by **MAO → 5-hydroxyindoleacetic acid (5-HIAA)**, the urinary marker of **carcinoid syndrome** (flushing, diarrhoea, bronchospasm, right-sided valve disease; the tumour also consumes tryptophan → **pellagra-like niacin deficiency**).",
        "**Melatonin**: serotonin → N-acetylserotonin (the rate-limiting acetyltransferase, active in darkness) → melatonin (with SAM), in the **pineal gland**; it entrains circadian rhythm; light suppresses it.",
        "**Histamine**: histidine → histamine (decarboxylase, PLP); mast cells, basophils, ECL cells and histaminergic neurons; degraded by **diamine oxidase and histamine N-methyltransferase**; H1 allergy/wakefulness, H2 gastric acid, H3 presynaptic.",
        "Note the recurring pattern for the examiner: **every one of these amines is made by hydroxylation (BH₄) and decarboxylation (PLP), stored in vesicles, terminated by reuptake, and degraded by MAO** — learn the pattern, not five separate lists."
      ],
      cn: "5-HT 合成两步（羟化＋脱羧）、90% 在肠道、经 SERT 再摄取（SSRI 靶点）、MAO 降解成 5-HIAA（类癌标志物）。褪黑素在暗处合成。共同模式：BH4 羟化＋PLP 脱羧＋囊泡储存＋再摄取＋MAO。" },
    { h: "5 · Glutamate — the excitatory transmitter", hcn: "谷氨酸：兴奋性递质",
      points: [
        "**Glutamate is the main excitatory transmitter of the CNS** (aspartate is a minor one). It is made **locally from glutamine (glutaminase) or from α-ketoglutarate by transamination** — it cannot cross the blood–brain barrier, so the brain must make its own.",
        "**Receptors: ionotropic — AMPA (fast Na⁺ current), kainate, and NMDA (Ca²⁺-permeable, requires glycine or D-serine as a co-agonist and is blocked by Mg²⁺ at rest — it opens only when the cell is already depolarised, which is why it is a coincidence detector); metabotropic mGluR (GPCR).**",
        "**NMDA receptors and long-term potentiation (LTP)** are the molecular basis of learning and memory: Ca²⁺ entry → CaMKII → more AMPA receptors in the membrane.",
        "**Excitotoxicity:** in ischaemia, hypoglycaemia, status epilepticus or trauma, ATP fails → transporters cannot clear glutamate → persistent NMDA activation → **Ca²⁺ overload → proteases, phospholipases, NO/peroxynitrite, mitochondrial damage → neuronal death** (topic 17B). Drugs: **memantine** (a low-affinity NMDA blocker in Alzheimer disease), **ketamine** (NMDA antagonist), **magnesium**.",
        "Glutamate is also the precursor of **GABA (glutamate decarboxylase, PLP, vitamin B6)** and of **glutathione**, and it accepts amino groups in transamination — the metabolic hub of the brain."
      ],
      cn: "谷氨酸受体三种离子型（AMPA、kainate、NMDA）＋代谢型；NMDA 需甘氨酸共激动、静息时被 Mg²⁺ 阻断，是长时程增强与学习记忆的基础；缺血时的兴奋毒性机制。" },
    { h: "6 · GABA and glycine — the inhibitory transmitters", hcn: "GABA 与甘氨酸：抑制性递质",
      points: [
        "**GABA is made from glutamate by glutamate decarboxylase (GAD, needs PLP)** — this is why **vitamin B6 deficiency (isoniazid!) causes convulsions**, and why anti-GAD antibodies cause stiff-person syndrome (and appear in type 1 diabetes).",
        "**GABA_A receptor = a chloride channel**: opening hyperpolarises the neuron. It is the target of **benzodiazepines (increase the frequency of opening), barbiturates (increase the duration), ethanol, propofol, and neurosteroids**; **GABA_B is a GPCR (Gi)** — baclofen. GABA is terminated by reuptake and degraded by **GABA transaminase → succinic semialdehyde → succinate** (entering the citrate cycle — the 'GABA shunt'); **vigabatrin** inhibits that transaminase.",
        "**Glycine is the main inhibitory transmitter of the SPINAL CORD and brainstem**, acting on a **chloride channel (glycine receptor)** — **blocked by strychnine**, which therefore causes convulsive muscle spasms; **tetanus toxin prevents its release** with the same result.",
        "Glycine has a **second, opposite role: it is the obligatory co-agonist of the NMDA receptor** in the forebrain — the same molecule is inhibitory in the cord and permissive-excitatory in the cortex. Examiners like this paradox.",
        "**Clinical panel for this half:** **Parkinson disease** (loss of dopaminergic neurons of the substantia nigra; L-DOPA + carbidopa, MAO-B and COMT inhibitors), **depression** (SSRIs, SNRIs, MAO inhibitors — note the **tyramine/cheese reaction** with irreversible MAO inhibitors), **phenylketonuria** (blocked phenylalanine hydroxylase → no tyrosine → less catecholamine and melanin, plus toxic phenylketones), **carcinoid**, **phaeochromocytoma**, **hepatic encephalopathy** (ammonia → glutamine in astrocytes → oedema and altered transmission)."
      ],
      cn: "GABA 由谷氨酸脱羧（GAD，需 PLP，故 B6 缺乏抽搐）；GABA_A 是氯通道（苯二氮䓬/巴比妥靶点）；甘氨酸在脊髓抑制（士的宁阻断、破伤风毒素抑制释放），却在前脑作为 NMDA 的共激动剂——这个反差是加分点。" }
  ],
  numbers: [
    "Brain: **2 % of body mass, 20 % of oxygen, ~120 g glucose/day**",
    "Ketone bodies cover **60–70 %** of brain energy after prolonged starvation",
    "Symptoms of hypoglycaemia below **~3.0 mmol/L**, coma below ~1 mmol/L",
    "**90 % of body serotonin is in the gut**, ~1–2 % in the brain",
    "Urinary markers: **VMA and metanephrines** (catecholamines), **HVA** (dopamine), **5-HIAA** (serotonin)"
  ],
  clinic: [
    "**Parkinson disease** — L-DOPA with carbidopa (peripheral decarboxylase inhibitor), MAO-B and COMT inhibitors",
    "**Phaeochromocytoma** — plasma free metanephrines; **carcinoid** — urinary 5-HIAA (avoid bananas, walnuts before the test)",
    "**MAO inhibitors + tyramine-rich food** = hypertensive crisis ('cheese effect')",
    "**Isoniazid** depletes vitamin B6 → convulsions (GAD needs PLP); give pyridoxine",
    "**Hepatic encephalopathy** — ammonia detoxified as glutamine in astrocytes → swelling and cerebral oedema"
  ],
  traps: [
    "The brain cannot use **fatty acids**, but it can use **ketone bodies** — these are not the same statement",
    "Dopamine does **not** cross the blood–brain barrier; L-DOPA does",
    "The rate-limiting enzyme of catecholamine synthesis is **tyrosine hydroxylase**, not DOPA decarboxylase",
    "Glycine is inhibitory in the **spinal cord** but a **co-agonist of NMDA** in the brain",
    "Termination of amine transmitters is mainly **reuptake**, not enzymatic destruction in the cleft (that is acetylcholine)"
  ],
  terms: [
    ["blood–brain barrier", "血脑屏障"], ["glutamate–glutamine cycle", "谷氨酸-谷氨酰胺循环"],
    ["tyrosine hydroxylase", "酪氨酸羟化酶"], ["monoamine oxidase", "单胺氧化酶"], ["COMT", "儿茶酚氧位甲基转移酶"],
    ["vanillylmandelic acid", "香草扁桃酸"], ["reuptake transporter", "再摄取转运体"], ["NMDA receptor", "NMDA 受体"],
    ["excitotoxicity", "兴奋毒性"], ["GABA", "γ-氨基丁酸"], ["long-term potentiation", "长时程增强"]
  ]
}
});
