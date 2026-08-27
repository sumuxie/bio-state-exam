/* ============================================================
   Bonus topic — not on the printed list of 30, but really asked.
   2026-08-16: a classmate of Ruojin's was examined on PHOTOSYNTHESIS.
   Add further off-list topics here as they are reported, with
   n: 32, 33 ... and bonus: true.
   ============================================================ */
window.EXAM30 = window.EXAM30 || { topics: [] };
window.EXAM30.topics.push({
n: 31,
bonus: true,
a: {
  titleEN: "Photosynthesis I — the light reactions. Photosystems, the Z-scheme, photophosphorylation.",
  titleCN: "光合作用（上）· 光反应 · 光系统与 Z 图式 · 光合磷酸化",
  opener: "Photosynthesis is the reverse of respiration in bookkeeping — **6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂** — but not in mechanism: the light reactions use photon energy to **oxidise water, reduce NADP⁺ and build a proton gradient across the thylakoid membrane**, exactly the same chemiosmotic principle as the mitochondrion, only driven by light instead of by substrate oxidation.",
  openerCN: "从收支上看光合作用是呼吸的逆过程（6 CO₂ + 6 H₂O + 光 → 葡萄糖 + 6 O₂），但机制不同：光反应用光子能量氧化水、还原 NADP⁺，并在类囊体膜上建立质子梯度——与线粒体完全相同的化学渗透原理，只是驱动力是光而不是底物氧化。",
  spine: [
    "总反应式与两个阶段的分工",
    "叶绿体的结构与三个区室（对应线粒体）",
    "色素：叶绿素的结构（与血红素的亲缘关系！）与吸收光谱",
    "光系统 II：水的裂解与放氧",
    "电子传递链与 Z 图式；质体醌、细胞色素 b6f、质体蓝素",
    "光系统 I 与 NADP⁺ 的还原；循环式光合磷酸化",
    "ATP 合酶与化学渗透；与氧化磷酸化的对照表"
  ],
  blocks: [
    { h: "1 · Overall equation and the two stages", hcn: "总反应与两阶段分工",
      points: [
        "**Overall: 6 CO₂ + 12 H₂O + light → C₆H₁₂O₆ + 6 O₂ + 6 H₂O.** Written this way it shows the crucial point: **the oxygen released comes from WATER, not from CO₂** (proved with ¹⁸O-labelled water).",
        "**Stage 1 — the LIGHT reactions (thylakoid membrane): light → ATP + NADPH + O₂.** **Stage 2 — the CALVIN cycle ('dark' reactions, stroma): ATP + NADPH are spent to reduce CO₂ to carbohydrate.** The second stage does not need light directly, but it is **light-regulated**, so 'dark reactions' is a misleading name — say **'carbon-fixation reactions'**.",
        "**Energetically: photosynthesis converts light into chemical energy (ΔG°' = +2870 kJ per mole of glucose — the exact reverse of the oxidation of glucose), and it is the ultimate source of essentially all the ATP that heterotrophs, including us, ever make.**",
        "**The overall logic to state: light energy → excited electrons → an electron transport chain → a proton gradient → ATP, plus reducing power as NADPH. That is the same sentence you would use for the mitochondrion, with the direction of electron flow reversed.**",
        "**Photosynthesis also produced the oxygen in the atmosphere** — which is why aerobic respiration, and this whole syllabus, is possible at all."
      ],
      cn: "总反应式（放出的氧来自水，¹⁸O 实验）；两个阶段的分工与『暗反应』这个名字的误导；能量收支正好是葡萄糖氧化的逆过程。" },
    { h: "2 · The chloroplast — compare it with the mitochondrion", hcn: "叶绿体的结构（与线粒体对照）",
      points: [
        "**Three compartments: the intermembrane space, the STROMA (equivalent to the mitochondrial matrix — it holds the Calvin-cycle enzymes, chloroplast DNA and ribosomes) and the THYLAKOID LUMEN, an extra compartment mitochondria do not have.**",
        "**The thylakoid membrane (stacked into grana) is the energy-transducing membrane — the counterpart of the inner mitochondrial membrane.** It carries the photosystems, the electron carriers and the ATP synthase.",
        "**Direction of the gradient: protons are pumped INTO the thylakoid lumen, which becomes acidic (pH ~5 against ~8 in the stroma — about 3 pH units, a far larger ΔpH than in mitochondria); the ATP synthase then lets them back into the stroma, where ATP and NADPH are made.**",
        "**Note the mirror image: in mitochondria protons are pumped OUT of the matrix and ATP is made IN the matrix; in chloroplasts protons are pumped INTO the lumen and ATP is made in the stroma. In both cases ATP appears on the side where the biosynthetic enzymes are.**",
        "**Chloroplasts, like mitochondria, are semi-autonomous with their own circular DNA and 70S ribosomes — the endosymbiotic theory, and the reason chloramphenicol-type antibiotics affect both organelles.**"
      ],
      cn: "三个区室（多出类囊体腔）；类囊体膜＝内膜的对应物；质子被泵入腔内（ΔpH 可达 3 个单位），ATP 在基质侧生成——与线粒体正好镜像；半自主性与内共生学说。" },
    { h: "3 · Pigments — and their link to human biochemistry", hcn: "光合色素（与人体生化的联系）",
      points: [
        "**CHLOROPHYLL is a substituted tetrapyrrole (a chlorin) with a central Mg²⁺ and a long phytol tail — structurally a close relative of HAEM, which has the same porphyrin skeleton with Fe²⁺.** The biosynthetic pathways even share the first step, from **δ-aminolevulinic acid** (topic 14A) — a connection examiners love.",
        "**Chlorophyll a is the reaction-centre pigment; chlorophyll b and the CAROTENOIDS (β-carotene, xanthophylls) are ACCESSORY pigments: they widen the absorbed spectrum and, importantly, they QUENCH excess energy and singlet oxygen (photoprotection — the same antioxidant chemistry as in topic 4B).**",
        "**Absorption: chlorophylls absorb in the blue (~430–450 nm) and red (~660–680 nm) and reflect green — hence the colour of leaves; the action spectrum of photosynthesis follows the absorption spectrum (Engelmann's classic experiment).**",
        "**Organisation: a few hundred pigment molecules form a LIGHT-HARVESTING ANTENNA that funnels excitation energy by resonance transfer to a single 'special pair' of chlorophyll a molecules in the REACTION CENTRE, where charge separation actually happens — an amplification device, since only the reaction centre performs chemistry.**",
        "**The phytol tail is a C20 isoprenoid** — the same isoprene chemistry as cholesterol, ubiquinone and vitamins A, E and K (topic 11A)."
      ],
      cn: "叶绿素＝含 Mg²⁺ 的四吡咯，与含 Fe²⁺ 的血红素同源，连合成起点 δ-ALA 都相同；辅助色素扩展吸收光谱并淬灭单线态氧；天线色素把能量漏斗式传给反应中心的特殊叶绿素对。" },
    { h: "4 · Photosystem II and the splitting of water", hcn: "光系统 II 与水的裂解",
      points: [
        "**Photosystem II (P680, absorbing maximally at 680 nm) is where the light reactions begin, although its number is higher — the numbering follows the order of discovery, not the order of events. Say this; it is the classic trap.**",
        "**A photon excites P680 → P680* gives an electron to pheophytin → plastoquinone QA → QB → the electron transport chain. P680⁺ is left behind and it is the STRONGEST BIOLOGICAL OXIDANT KNOWN — strong enough to take electrons from water.**",
        "**The OXYGEN-EVOLVING COMPLEX (a Mn₄CaO₅ cluster on the lumenal side) accumulates four oxidising equivalents (the S-state cycle of Kok) and then splits two water molecules: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻.** The electrons replace those lost by P680, the **protons are released INTO THE LUMEN and add to the gradient**, and the oxygen diffuses away.",
        "**This one reaction is the source of all atmospheric oxygen and of the electrons that ultimately reduce CO₂ — and it needs Mn and Ca, plus Cl⁻ as a cofactor.**",
        "**Herbicides act exactly here: DCMU and atrazine block the QB site of photosystem II, stopping electron flow — the mechanism of most commercial herbicides, and a good example to give if asked about applications.**"
      ],
      cn: "PS II（P680）虽然编号在后却是起点；P680⁺ 是已知最强的生物氧化剂，能夺取水中的电子；放氧复合体（Mn4CaO5，Kok 循环）裂解两个水放出 O₂、4 个 H⁺（进入腔内增强梯度）与 4 个电子；除草剂正作用于 QB 位点。" },
    { h: "5 · The Z-scheme and photosystem I", hcn: "Z 图式与光系统 I",
      points: [
        "**Between the photosystems the electrons travel down a chain: PLASTOQUINONE (mobile in the membrane, carries 2 e⁻ + 2 H⁺ — the exact counterpart of ubiquinone) → CYTOCHROME b6f complex (which PUMPS PROTONS into the lumen, the counterpart of complex III, and even runs a Q-cycle) → PLASTOCYANIN (a copper protein, mobile in the lumen — the counterpart of cytochrome c).**",
        "**Photosystem I (P700) absorbs a second photon: the electron is raised to an even more negative potential → ferredoxin (an Fe-S protein) → FERREDOXIN-NADP⁺ REDUCTASE (a flavoprotein) → NADPH in the stroma.**",
        "**Plotted against redox potential the whole path looks like a letter Z — the Z-SCHEME: two photon absorptions in series are needed because one photon cannot span the gap from the potential of water (+0.82 V) to that of NADP⁺ (−0.32 V). Note this is the same span as the mitochondrial chain, traversed in the opposite direction.**",
        "**NON-CYCLIC photophosphorylation (both photosystems, water as donor) produces NADPH, ATP and O₂. CYCLIC photophosphorylation uses photosystem I alone — the electron returns from ferredoxin to the cytochrome b6f complex: protons are pumped and ATP is made, but NO NADPH and NO oxygen.** Its purpose is to **adjust the ATP:NADPH ratio**, because the Calvin cycle needs more ATP than the non-cyclic route provides.",
        "**Quantum requirement: about 8 photons per O₂ released (4 through each photosystem), giving roughly 3 ATP and 2 NADPH per O₂.**"
      ],
      cn: "两个光系统之间的链条与线粒体的对应（质体醌≈泛醌、细胞色素 b6f≈复合体 III 且有 Q 循环、质体蓝素≈细胞色素 c）；PS I（P700）→铁氧还蛋白→FNR→NADPH；Z 图式为什么需要两次吸光；循环式光合磷酸化只产 ATP 用来调整 ATP:NADPH 比例；每放 1 个 O₂ 约需 8 个光子。" },
    { h: "6 · Photophosphorylation and the comparison table", hcn: "光合磷酸化与对照表（必背）",
      points: [
        "**The proton gradient is built by three events: protons released in the lumen by water splitting, protons pumped by cytochrome b6f, and protons consumed in the stroma when NADP⁺ is reduced. The CF₀CF₁ ATP SYNTHASE — structurally and mechanistically the same rotary enzyme as the mitochondrial F₀F₁ — then makes ATP in the stroma.**",
        "**Mitchell's chemiosmotic theory therefore applies to both organelles, and the classic proof came from chloroplasts: Jagendorf's experiment, in which thylakoids kept in the DARK made ATP after an artificial acid-to-base pH jump — no light, no electron transport, just a proton gradient.** Quote this if asked for evidence.",
        "**The comparison table to have ready — MITOCHONDRION vs CHLOROPLAST: energy source substrate oxidation vs light; electrons flow from NADH to O₂ vs from H₂O to NADP⁺; the terminal acceptor is O₂ vs NADP⁺; oxygen is CONSUMED vs PRODUCED; protons are pumped out of the matrix vs into the lumen; ATP is made in the matrix vs in the stroma; the mobile carriers are ubiquinone and cytochrome c vs plastoquinone and plastocyanin; both use an F-type rotary ATP synthase and both organelles are semi-autonomous.**",
        "**Regulation: light activates the Calvin-cycle enzymes indirectly (rising stromal pH, Mg²⁺ entering the stroma as protons leave, and reduction of enzyme disulfides by the FERREDOXIN–THIOREDOXIN system) — an elegant way of coupling the 'dark' reactions to illumination.**",
        "**Photoinhibition and photoprotection: excess light damages photosystem II (the D1 protein is continuously repaired), and carotenoids plus the xanthophyll cycle dissipate the surplus as heat — otherwise singlet oxygen would destroy the membrane.**",
        "**Where this touches human medicine: chlorophyll and haem share a pathway; carotenoids are our provitamin A; the herbicides above and the photodynamic chemistry of porphyrins (topic 5B) are the same physics; and the O₂ that our whole oxidative metabolism depends on comes from photosystem II.**"
      ],
      cn: "三个建立质子梯度的事件＋CF0CF1 与线粒体同源；Jagendorf 酸碱跳跃实验是化学渗透学说的经典证据；线粒体 vs 叶绿体的九点对照表一定要能背；光调节暗反应（pH、Mg²⁺、铁氧还蛋白-硫氧还蛋白系统）；最后把它接回人体生化。" }
  ],
  numbers: [
    "**6 CO₂ + 12 H₂O + light → C₆H₁₂O₆ + 6 O₂ + 6 H₂O**; ΔG°' = **+2870 kJ/mol glucose**",
    "P680 and P700 — absorption maxima **680 nm and 700 nm**; chlorophyll absorbs ~430–450 and ~660–680 nm",
    "**~8 photons per O₂**, yielding roughly **3 ATP and 2 NADPH**",
    "Thylakoid lumen pH **~5** vs stroma **~8** — a ΔpH of about 3 units",
    "Water splitting: **2 H₂O → O₂ + 4 H⁺ + 4 e⁻** at the **Mn₄CaO₅** cluster"
  ],
  clinic: [
    "**Chlorophyll and haem** share the tetrapyrrole skeleton and the δ-aminolevulinate step",
    "**Carotenoids** are our source of provitamin A and are photoprotective antioxidants",
    "**Herbicides (DCMU, atrazine)** block the QB site of photosystem II — toxicology relevance",
    "**Photodynamic chemistry** — porphyrin + light + O₂ → singlet oxygen, the same physics as in porphyria and PDT",
    "All the **atmospheric oxygen** used by human oxidative phosphorylation comes from photosystem II"
  ],
  traps: [
    "The oxygen comes from **water**, not from CO₂",
    "**Photosystem II acts first**, before photosystem I — the numbering follows discovery, not sequence",
    "'Dark reactions' still require light **indirectly** — they are light-regulated; call them carbon-fixation reactions",
    "Protons are pumped **into** the thylakoid lumen and ATP is made in the **stroma** — the mirror image of mitochondria",
    "Cyclic photophosphorylation makes **ATP only** — no NADPH and no oxygen"
  ],
  terms: [
    ["thylakoid", "类囊体"], ["stroma", "基质"], ["chlorophyll", "叶绿素"], ["reaction centre", "反应中心"],
    ["light-harvesting antenna", "捕光天线"], ["oxygen-evolving complex", "放氧复合体"],
    ["plastoquinone / plastocyanin", "质体醌/质体蓝素"], ["ferredoxin", "铁氧还蛋白"],
    ["Z-scheme", "Z 图式"], ["photophosphorylation", "光合磷酸化"], ["photoinhibition", "光抑制"]
  ]
},
b: {
  titleEN: "Photosynthesis II — the Calvin cycle, photorespiration, C4 and CAM plants; relation to human metabolism.",
  titleCN: "光合作用（下）· 卡尔文循环 · 光呼吸 · C4 与 CAM 植物 · 与人体代谢的关系",
  opener: "The Calvin cycle **fixes CO₂ into carbohydrate at the cost of 3 ATP and 2 NADPH per CO₂**; its key enzyme **RuBisCO is the most abundant protein on Earth — and also a rather poor enzyme**, which is why photorespiration exists and why C4 and CAM plants evolved workarounds.",
  openerCN: "卡尔文循环把 CO₂ 固定成糖，每固定 1 个 CO₂ 消耗 3 ATP 与 2 NADPH；其关键酶 RuBisCO 是地球上含量最多的蛋白，却是一个效率不高的酶——这正是光呼吸存在、以及 C4 与 CAM 植物演化出变通方案的原因。",
  spine: [
    "卡尔文循环的三个阶段与化学计量",
    "RuBisCO：反应、丰度与缺陷",
    "调节：光如何间接开启暗反应",
    "光呼吸的机制与代价",
    "C4 与 CAM 的解决方案",
    "产物的去向：淀粉与蔗糖",
    "与人体代谢的对照（PPP、糖异生、共同的酶）"
  ],
  blocks: [
    { h: "1 · The Calvin cycle in three stages", hcn: "卡尔文循环的三个阶段",
      points: [
        "**Stage 1 — CARBOXYLATION: CO₂ + ribulose-1,5-bisphosphate (C5) → (RuBisCO) → two molecules of 3-phosphoglycerate (C3).** This is why it is called the C3 pathway, and 3-phosphoglycerate is the first stable product (Calvin's ¹⁴C experiments).",
        "**Stage 2 — REDUCTION: 3-phosphoglycerate → (phosphoglycerate kinase, ATP) → 1,3-bisphosphoglycerate → (glyceraldehyde-3-phosphate dehydrogenase, NADPH) → glyceraldehyde-3-phosphate.** **Note that these are exactly the glycolytic reactions run backwards, using NADPH instead of NADH — the same chemistry as gluconeogenesis.**",
        "**Stage 3 — REGENERATION: of every 6 triose phosphates made, ONE leaves as product and FIVE are rearranged back into 3 ribulose-5-phosphate by transketolase and aldolase reactions (the non-oxidative branch of the pentose phosphate pathway, in reverse), then phosphorylated by phosphoribulokinase (ATP) to ribulose-1,5-bisphosphate.**",
        "**Stoichiometry per CO₂ fixed: 3 ATP + 2 NADPH. Per glucose (6 CO₂): 18 ATP and 12 NADPH.** The cycle must turn **six times** to yield one hexose.",
        "**The cycle is in the STROMA, and the light reactions supply exactly what it needs — which is why cyclic photophosphorylation exists to top up the ATP.**"
      ],
      cn: "三阶段：羧化（RuBisCO，产物 3-磷酸甘油酸）→还原（用糖酵解的逆反应，但用 NADPH）→再生（走磷酸戊糖途径非氧化支的逆反应）；每固定 1 CO₂ 需 3 ATP＋2 NADPH，每分子葡萄糖 18 ATP＋12 NADPH。" },
    { h: "2 · RuBisCO", hcn: "RuBisCO：地球上最多的蛋白",
      points: [
        "**Ribulose-1,5-bisphosphate carboxylase/oxygenase — up to 50 % of the soluble protein of a leaf and therefore the most abundant protein on the planet, which is itself a consequence of how slow it is (a few catalytic cycles per second, compared with thousands for a typical enzyme).**",
        "**It needs activation: a CO₂ molecule (different from the substrate!) carbamylates a lysine, and Mg²⁺ then binds — the activation is promoted by high pH and high Mg²⁺ in the stroma, i.e. by LIGHT, and it is helped by the enzyme RuBisCO activase.**",
        "**Its fatal flaw: the active site cannot distinguish CO₂ from O₂ reliably, so it also catalyses an OXYGENASE reaction — ribulose-1,5-bisphosphate + O₂ → 3-phosphoglycerate + 2-phosphoglycolate.** At present atmospheric concentrations roughly **one in three or four turnovers is the wasteful oxygenase reaction**, and the proportion rises with temperature.",
        "**2-Phosphoglycolate is useless and mildly toxic, so it must be salvaged — that salvage pathway is PHOTORESPIRATION (next block).**",
        "**Explanation usually accepted: RuBisCO evolved when the atmosphere had almost no oxygen; it is now a fossil enzyme that the whole biosphere is stuck with — a good line to end this block with.**"
      ],
      cn: "RuBisCO 占叶片可溶蛋白的一半（因为它慢）；需要另一个 CO₂ 使赖氨酸氨甲酰化＋Mg²⁺ 激活（因此受光间接调节）；致命缺陷是分不清 CO₂ 与 O₂，加氧反应产生 2-磷酸乙醇酸，必须靠光呼吸回收。" },
    { h: "3 · Regulation — how light switches on the dark reactions", hcn: "光如何间接开启『暗反应』",
      points: [
        "**Three light-dependent changes in the stroma switch the cycle on: (1) pH rises to ~8 as protons are pumped into the lumen — the pH optimum of RuBisCO and of several other enzymes; (2) Mg²⁺ moves into the stroma to balance the charge, and it is a cofactor of RuBisCO and of fructose-1,6-bisphosphatase; (3) reduced FERREDOXIN reduces THIOREDOXIN, which reduces regulatory DISULFIDE bonds in five key enzymes (glyceraldehyde-3-phosphate dehydrogenase, fructose-1,6-bisphosphatase, sedoheptulose-1,7-bisphosphatase, phosphoribulokinase and RuBisCO activase), activating them.**",
        "**In the dark the reverse happens, and an inhibitor (CA1P) blocks RuBisCO — so the plant does not waste ATP running the cycle when no ATP is being made.**",
        "**This is the plant equivalent of the reciprocal regulation we know from mammalian metabolism (topic 6A) — the same principle, different messengers.**",
        "**RuBisCO activity is also controlled by the supply of CO₂ (stomatal opening, which is itself regulated by light, water status and abscisic acid) and by the demand for triose phosphate (starch and sucrose synthesis).**",
        "The compact answer to 'are the dark reactions independent of light?': **no — they are indirectly but tightly light-regulated, which is why the term 'carbon-fixation reactions' is preferred.**"
      ],
      cn: "光通过三条途径开启卡尔文循环：基质 pH 升到 8、Mg²⁺ 进入基质、铁氧还蛋白-硫氧还蛋白系统还原五个酶的二硫键；黑暗中反向关闭并由 CA1P 抑制 RuBisCO。这就是植物版的互反调节。" },
    { h: "4 · Photorespiration", hcn: "光呼吸",
      points: [
        "**Definition: the light-dependent uptake of O₂ and release of CO₂ that follows the oxygenase reaction of RuBisCO. It consumes ATP and reducing power and releases previously fixed carbon — a net loss of up to 25–30 % of photosynthetic yield.**",
        "**The salvage pathway uses THREE organelles: chloroplast (2-phosphoglycolate → glycolate), PEROXISOME (glycolate oxidase → glyoxylate + H₂O₂, destroyed by catalase; transamination → glycine) and MITOCHONDRION (2 glycine → serine + CO₂ + NH₃ by the glycine cleavage system) — then back through the peroxisome and chloroplast to 3-phosphoglycerate.** Three quarters of the carbon is recovered; one quarter is lost as CO₂, and the ammonia must be re-assimilated at further ATP cost.",
        "**Note the human connection: the glycine cleavage system and the serine–glycine interconversion are exactly the reactions of our own one-carbon metabolism (topic 17A), and the peroxisomal H₂O₂/catalase chemistry is the same as ours (topic 25A).**",
        "**Photorespiration increases with high temperature, drought (closed stomata → CO₂ falls and O₂ rises inside the leaf) and high light — precisely the conditions where it hurts most, which is the selection pressure that produced C4 and CAM.**",
        "**Is it useless? Probably not entirely — it may protect the photosystems from over-reduction when CO₂ is scarce (a safety valve), and it supplies serine and glycine.**"
      ],
      cn: "光呼吸=加氧反应之后的回收途径，跨叶绿体-过氧化物酶体-线粒体三个细胞器，损失可达 25–30% 的产量；其中的甘氨酸裂解系统与丝氨酸/甘氨酸互变正是人体一碳代谢的反应；高温干旱时更严重，因此演化出 C4/CAM。" },
    { h: "5 · C4 and CAM plants", hcn: "C4 与 CAM：两种解决方案",
      points: [
        "**C4 plants (maize, sugar cane, sorghum, many tropical grasses) separate the two carboxylations IN SPACE: in the MESOPHYLL cell, PEP CARBOXYLASE — an enzyme with NO oxygenase activity and a much higher affinity for HCO₃⁻ — fixes carbon into OXALOACETATE → malate/aspartate (C4 compounds, hence the name); these are shuttled into the BUNDLE-SHEATH cell, where they are decarboxylated, releasing CO₂ at a high local concentration around RuBisCO.**",
        "**Effect: RuBisCO works essentially as a pure carboxylase, photorespiration is suppressed, and the plant can keep its stomata more closed — better water economy and better performance in heat and bright light. Cost: 2 extra ATP per CO₂ (to regenerate PEP), so C4 is only worth it when photorespiration would otherwise be heavy.**",
        "**CAM plants (cacti, succulents, pineapple, agave) do the same separation IN TIME: at NIGHT the stomata open, PEP carboxylase fixes CO₂ into malate, which is stored in the vacuole as malic acid; by DAY the stomata close (minimising water loss) and the malate is decarboxylated to feed RuBisCO.** The leaf is measurably acidic at dawn.",
        "**Both strategies use the same trick: a CO₂-concentrating mechanism built on PEP carboxylase, whose product oxaloacetate and whose partner enzymes (malate dehydrogenase, malic enzyme, pyruvate–phosphate dikinase) are all molecules we know from human metabolism.**",
        "**Ecological/agronomic relevance: C4 crops dominate hot climates and are more water- and nitrogen-efficient; engineering C4 photosynthesis into rice is one of the big current projects in plant biotechnology.**"
      ],
      cn: "C4 在空间上分离（叶肉细胞 PEP 羧化酶固定→维管束鞘细胞脱羧富集 CO₂），代价是每个 CO₂ 多 2 个 ATP；CAM 在时间上分离（夜间开气孔固定成苹果酸储存，白天关气孔脱羧供 RuBisCO）。两者都是用 PEP 羧化酶建立的 CO₂ 浓缩机制。" },
    { h: "6 · Products, and the comparison with human metabolism", hcn: "产物去向与人体代谢的对照",
      points: [
        "**Fate of the triose phosphate: inside the chloroplast it is used to make STARCH (the plant's glycogen — amylose and amylopectin, stored in the stroma by day and mobilised at night); exported to the cytosol through the triose-phosphate/phosphate translocator it becomes SUCROSE, the transport sugar of plants — and the disaccharide we eat.**",
        "**Everything we eat therefore begins here: our dietary starch, sucrose, cellulose (fibre), the carbon skeletons of plant proteins and oils, and the essential fatty acids and essential amino acids we cannot make ourselves — all of them are products of the Calvin cycle.**",
        "**The shared enzymology to point out — it makes the answer sound integrated: glyceraldehyde-3-phosphate dehydrogenase and phosphoglycerate kinase are the glycolytic enzymes run in reverse; the regeneration phase is the non-oxidative pentose phosphate pathway (transketolase, aldolase, the same C3/C4/C5/C6/C7 shuffling); fructose-1,6-bisphosphatase is the gluconeogenic enzyme; PEP carboxylase in C4 plants is the counterpart of our pyruvate carboxylase as an anaplerotic CO₂-fixing enzyme.**",
        "**And the conceptual contrast: photosynthesis is REDUCTIVE and ENDERGONIC (energy stored, carbon reduced, NADPH consumed), respiration is OXIDATIVE and EXERGONIC (energy released, carbon oxidised, NADH produced) — but both are organised as an electron transport chain plus a chemiosmotic ATP synthase.**",
        "**Do humans fix any CO₂? Yes, but never for energy: carboxylations in our metabolism (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase — all biotin-dependent — plus carbamoyl phosphate synthetase and vitamin-K-dependent γ-carboxylation) attach CO₂ for synthetic purposes; net carbon gain is impossible for us.** This is the natural closing sentence if the examiner asks 'why can't we photosynthesise?'.",
        "**One more human echo: the herbicide-and-photodynamic chemistry above, and the fact that our mitochondria and plant chloroplasts are both descendants of bacteria — which is why both are inhibited by antibiotics that target 70S ribosomes.**"
      ],
      cn: "产物去向（叶绿体内成淀粉、输出成蔗糖）；我们吃的一切碳都来自这里；共用的酶（GAPDH/PGK 的逆反应、非氧化磷酸戊糖途径、FBP 酶、PEP 羧化酶对应丙酮酸羧化酶）；光合是还原吸能、呼吸是氧化放能，但都用电子传递链＋化学渗透。最后回答『人为什么不能光合』——我们的羧化反应只用于合成，不能净增碳。" }
  ],
  numbers: [
    "Per CO₂ fixed: **3 ATP + 2 NADPH**; per glucose **18 ATP + 12 NADPH**, six turns of the cycle",
    "RuBisCO = up to **50 % of leaf soluble protein**, the most abundant protein on Earth; only a few turnovers per second",
    "Photorespiration wastes up to **25–30 %** of fixed carbon; **1 of every 3–4** RuBisCO turnovers uses O₂",
    "C4 costs **2 extra ATP per CO₂**; CAM stores malate overnight in the vacuole",
    "First stable product of C3 fixation: **3-phosphoglycerate** (Calvin's ¹⁴C experiment)"
  ],
  clinic: [
    "**Everything we eat** — starch, sucrose, fibre, essential amino and fatty acids — comes from the Calvin cycle",
    "The **glycine cleavage system** of photorespiration is the same one whose defect causes non-ketotic hyperglycinaemia in man",
    "Peroxisomal **glycolate oxidase**: its human counterpart matters in **primary hyperoxaluria** (oxalate stones)",
    "**C4 rice engineering** — a current attempt to raise global food yield",
    "Chloroplasts and mitochondria share **70S ribosomes** — the endosymbiotic origin behind several antibiotic effects"
  ],
  traps: [
    "The first stable product of the C3 cycle is **3-phosphoglycerate**, not glucose",
    "**RuBisCO's oxygenase activity is a flaw, not a function** — photorespiration is salvage, not a purpose",
    "C4 and CAM do not replace the Calvin cycle — they **feed CO₂ into it** more efficiently",
    "The regeneration phase is the **pentose phosphate pathway chemistry**, so do not describe it as unique to plants",
    "Humans carboxylate (biotin enzymes) but can never achieve **net** CO₂ fixation"
  ],
  terms: [
    ["Calvin cycle", "卡尔文循环"], ["RuBisCO", "核酮糖二磷酸羧化酶/加氧酶"],
    ["ribulose-1,5-bisphosphate", "核酮糖-1,5-二磷酸"], ["photorespiration", "光呼吸"],
    ["glycolate", "乙醇酸"], ["PEP carboxylase", "磷酸烯醇式丙酮酸羧化酶"], ["bundle sheath cell", "维管束鞘细胞"],
    ["C4 pathway", "C4 途径"], ["CAM", "景天酸代谢"], ["thioredoxin", "硫氧还蛋白"], ["sucrose / starch", "蔗糖/淀粉"]
  ]
}
});
