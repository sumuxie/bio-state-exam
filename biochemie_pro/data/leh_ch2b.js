/* ============================================================
   Lehninger 8 — Chapter 2, the two sections outside §2.2: 2.1 and 2.3.

   ⚠️ DELIBERATELY SHALLOW, AND THAT IS AN INSTRUCTION, NOT A SHORTCUT.
   Ruojin, 2026-08-10: 「这些都是浅浅带过 科普性质 must know 有就行」.
   Each node carries ONLY `summary` + `mustKnow` — no `points`, `terms`,
   `quiz`, `oral` or `trace`. `step5_check.py` requires only id/chapter/
   section/titles/coverage/summary, so this is a valid node, not a stub.
   Do NOT "finish" these later by adding drill layers unless she asks.
   Written to the pattern of `leh_ch12b.js`.

   PAGE RANGES WERE MEASURED IN A, NOT TAKEN FROM THE MAPPING, and the
   mapping was wrong at one end here:
     2.1  lehninger_only_scope.tsv says A 44-53. WRONG AT THE START.
          A's own chapter-opening contents page (A p.43) prints
          "2.1 Weak Interactions in Aqueous Systems 43 / 2.2 Ionization
          of Water... 53 / 2.3 Buffering... 59", and A p.44 is already
          mid-section (subheading "Hydrogen Bonding Gives Water Its
          Unusual Properties"). So 2.1 runs 43-53, not 44-53.
     2.3  tsv says A 59-64. CORRECT at both ends: the heading and
          "Almost every biological process is pH-dependent" are on
          A p.59, SUMMARY 2.3 is on A p.64.

   CZECH COVERAGE, measured with WORD-BOUNDARY matching before writing
   (a naive substring count is worthless here, see leh_ch12b.js's header):
     2.1  pufr 0, Henderson 0, Hasselbalch 0, dipól 0, osmó 0, solvatac 0,
          kolig 0. `vodíkov` scores 2 and both are in 6-2-1-1 (redox), not
          a treatment of the hydrogen bond. What DOES exist is scattered
          USE of these forces without the section that explains them:
          `van der Waals` 6 (2-2-2, 2-2-4), `hydrofob` 8, `hydrofil` 3,
          `entropi` 1 (2-2-2), `nekovalent` 6, `amfipat` 6 (8-2-3-x).
          The 10 `osmoti` hits are the CHEMIosmotic theory in 6-2-4-1,
          a different word in a different subject. L-2-2-1's own note
          already established that the Czech book has no section on water.
     2.3  pufr 0, Henderson 0, Hasselbalch 0, titrac 0, bikarbonát 0,
          ketoacid 0. Zero, and L-2-2-1 says so from the other side:
          its coverageNote states that buffers and Henderson-Hasselbalch
          are "section 2.3 ... named here and not developed". This node
          is the other half of that sentence.

   topicKey, decided per node rather than by rule:
     2.1 starts a NEW single-book key `water-and-weak-interactions`.
         There is no Czech node to join — the Czech book has no water
         section at all — and joining it to a protein-folding key would
         claim a link the data does not show. Expected behaviour for a
         Lehninger-only topic, not a defect.
     2.3 MERGES into `amino-acids`, where L-2-2-1 already sits next to
         Czech 2-1-2's titration curve and pI. Buffering is the same
         thread continued — the flat part of that curve — so the merge
         deepens a key that is already cross-book. Key count and
         cross-book count therefore do not move for 2.3.
   ============================================================ */
window.PRO = window.PRO || {};
window.PRO.topics = (window.PRO.topics || []).concat([
  {
    id: "L-2-1-1",
    book: "lehninger",
    topicKey: "water-and-weak-interactions",
    chapter: 2,
    section: "2.1",
    czTitle: "Žádná — slabé interakce ve vodném prostředí (2.1): jen orientačně, ale je to podklad všeho ostatního",
    enTitle: "Weak interactions in aqueous systems — a brief orientation: four forces too weak to matter one at a time, and why water decides the shape of everything",
    cnTitle: "水溶液中的弱相互作用——只作科普性了解：四种单个弱到可以忽略的作用力，以及水为什么决定了一切分子的形状",
    pages: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
    coverage: "partial",
    coverageNote: "Brief node by instruction (Ruojin 2026-08-10: 这些都是浅浅带过, 科普性质, mustKnow 有就行). Section 2.1 read end to end, A printed pp.43-53 with SUMMARY 2.1 on p.53; only a summary and a mustKnow are written -- no points, terms, quiz or oral. `lehninger_only_scope.tsv` marks 2.1 `brief` AND GIVES THE WRONG START PAGE (44); A's own chapter contents page prints 2.1 beginning on p.43, and p.44 is already inside the section. Czech coverage measured with word-boundary matching before writing: pufr 0, dipól 0, osmó 0, solvatac 0, kolig 0, and the only 2 `vodíkov` hits are in 6-2-1-1 on redox. The forces themselves are USED all over the Czech layer without ever being introduced -- van der Waals 6 hits in 2-2-2 and 2-2-4, hydrofob 8, hydrofil 3, entropi 1, nekovalent 6, amfipat 6 -- so a reader who wants the underlying section should be sent to 2-2-2 (principles of conformation), 4-3-1 (noncovalent interactions folding the peptide chain) and 8-2-3-x (amphipathic membrane lipids). ⚠️ The 10 `osmoti` hits are chemiosmotic coupling in 6-2-4-1, a different subject that shares a word fragment. topicKey is a NEW single-book key, `water-and-weak-interactions`: there is no Czech node about water to join.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；水的性质与弱相互作用是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "The four weak interactions are individually negligible and collectively decisive: a hydrogen bond in liquid water costs about 23 kJ/mol to break, against 470 kJ/mol for the covalent O—H bond in the same molecule. And the hydrophobic effect is NOT oil liking oil — it is water's entropy. Water forced to order itself around a nonpolar surface is the expensive thing, so nonpolar groups are pushed together to reduce that surface. That is why a protein has a greasy core, why a membrane is a bilayer, and why both fall apart when you heat them.",
      cn: "四种弱相互作用**单个可以忽略不计，加在一起却是决定性的**：液态水中打断**一个氢键约需 23 kJ/mol**，而同一个分子里的 **O—H 共价键要 470 kJ/mol**。⚠️ 而且**疏水效应不是「油喜欢油」——它是水的熵**。真正昂贵的是**被迫在非极性表面周围排列整齐的那些水分子**，所以非极性基团被**挤到一起以缩小那个表面**。**这就是蛋白质为什么有一个油腻的内核、膜为什么是双层，以及为什么两者一加热就散架。**"
    },
    summary: {
      en: "The section that everything later in the book quietly depends on. Water is a highly polar molecule because H and O have very different electronegativities, so it hydrogen-bonds to itself and to solutes; “Alcohols, aldehydes, ketones, and compounds containing N—H bonds all form hydrogen bonds with water and are therefore water soluble” (A p.53). Those bonds are fleeting, roughly 10% covalent and 90% electrostatic, and in ice each water molecule makes the maximum four while in liquid water at room temperature it averages 3.4 — which is why ice is less dense and floats. Ionic solids dissolve because water screens the charges and increases the entropy of the system. Nonpolar compounds do the opposite: “they cannot hydrogen-bond with the solvent, and their presence forces an energetically unfavorable ordering of water molecules at their hydrophobic surfaces”, so nonpolar and amphipathic compounds aggregate into micelles and bilayers, “an association driven by the hydrophobic effect”. van der Waals interactions arise when two nearby nuclei induce dipoles in each other, and the nearest approach of two atoms defines the van der Waals radius. Taken together, weak noncovalent interactions in large numbers decide how proteins and nucleic acids fold: maximise hydrogen bonding, bury the hydrophobic parts. The section closes on osmosis — water crosses a semipermeable membrane to equalise osmolarity, and “This tendency for water to move across a semipermeable membrane produces the osmotic pressure”. The laboratory consequence is concrete: organelles must be fractionated in isotonic solutions or they take up water, swell and burst. IN THE BOOK'S OWN WORDS: “Hydrogen bonds between water molecules provide the cohesive forces that make water a liquid at room temperature” (A p.43); “Water has a higher melting point, boiling point, and heat of vaporization than most other common solvents.” (A p.44); “Hydrogen bonds are not unique to water. They readily form between an electronegative atom” (A p.45); “Water is a polar solvent. It readily dissolves most biomolecules, which are generally charged or polar compounds” (A p.46); “Carbon dioxide forms carbonic acid (H2C03) in aqueous solution and is transported as the HC03 (bicarbonate) ion” (A p.47); “When an amphipathic compound (Table 2-1) is mixed with water, the polar, hydrophilic region interacts favorably” (A p.48); “When two uncharged atoms are brought very close together, their surrounding electron clouds influence each other.” (A p.49); “about 410 kJ is needed to break a mole of C-H bonds, but as little as 4 kJ is sufficient to disrupt” (A p.50); “Solutes of all kinds alter certain physical properties of the solvent, water: its vapor pressure, its boiling point” (A p.51); “In a hypertonic solution, one with higher osmolarity than that of the cytosol, the cell shrinks as water moves out.” (A p.52).",
      cn: "全书后面所有内容都默默依赖的一节。水是**高度极性**的分子，因为 **H 和 O 的电负性差别很大**，所以它既与自身、也与溶质形成**氢键**；「**醇、醛、酮以及含 N—H 键的化合物都能与水形成氢键，因而可溶于水**」（A p.53）。这些键**转瞬即逝**，大约 **10% 共价、90% 静电**；在**冰**里每个水分子形成**最多的四个**氢键，而**室温液态水**中平均只有 **3.4 个**——**这正是冰密度更小、能浮在水上的原因**。离子晶体能溶解，是因为水**屏蔽了电荷**并**增大了体系的熵**。非极性化合物则相反：「**它们无法与溶剂形成氢键，其存在迫使水分子在其疏水表面周围形成能量上不利的有序排列**」，所以非极性和**两亲性**化合物聚集成**微团和双层**，「**这种缔合由疏水效应驱动**」。**van der Waals 相互作用**产生于两个邻近原子核**彼此诱导出偶极**，而两个原子能靠近到的最短距离定义了各自的 **van der Waals 半径**。合起来：**大量的弱非共价相互作用决定了蛋白质和核酸怎么折叠**——**氢键最大化，疏水部分埋起来**。本节以**渗透**收尾：水穿过半透膜以拉平**渗透浓度 (osmolarity)**，而「**水穿过半透膜的这种趋势产生渗透压**」。实验室里的后果非常具体：**分离细胞器必须在等渗溶液里做**，否则它们会吸水、膨胀、破裂。"
    }
  },
  {
    id: "L-2-3-1",
    book: "lehninger",
    topicKey: "amino-acids",
    chapter: 2,
    section: "2.3",
    czTitle: "Pufry a udržování pH v biologických systémech (2.3) — jen orientačně: proč se krev nedá okyselit tak snadno",
    enTitle: "Buffering against pH changes in biological systems — a brief orientation: why a titration curve is flat in the middle, and why blood pH is partly set by breathing",
    cnTitle: "生物体系中的缓冲与 pH 的维持——只作科普性了解：滴定曲线中段为什么是平的，以及血液 pH 为什么有一半是「呼」出来的",
    pages: [59, 60, 61, 62, 63, 64],
    coverage: "partial",
    coverageNote: "Brief node by instruction (see the file header). Section 2.3 read end to end, A printed pp.59-64: the heading and its opening sentence 'Almost every biological process is pH-dependent' are on printed p.59, SUMMARY 2.3 on printed p.64. `lehninger_only_scope.tsv` marks 2.3 `brief` and its range 59-64 is correct at both ends this time. Czech coverage measured with word-boundary matching before writing and it is zero: pufr 0, Henderson 0, Hasselbalch 0, titrac 0, bikarbonát 0, ketoacid 0. The gap is confirmed from the other side too -- L-2-2-1's coverageNote states that Henderson-Hasselbalch and buffers are 'section 2.3 ... named here and not developed', so this node is the other half of that sentence and deliberately does not re-state §2.2's ion product, pH scale or Ka. topicKey MERGES into `amino-acids`, where L-2-2-1 already sits beside Czech 2-1-2's titration curve and pI: the buffering region IS the flat middle of that same curve. The key is already cross-book, so key count and cross-book count do not move. ⚠️ One real cross-book link worth following: Czech 8-4-4-3 and 10-8 teach ketone-body overproduction ending in acidosis, ketosis and coma, and A's printed p.64 is where the acid chemistry behind that clinical picture actually sits -- the same page names diabetes mellitus as the likely diagnosis when blood glucose is high and plasma pH low.",
    cnNote: {
      topic: null,
      title: "未核对——中文笔记是 230 页无文字层的手写扫描件，无法自动检索；缓冲体系与 Henderson-Hasselbalch 是否出现在笔记中，需人工翻阅后再填",
      status: "pending"
    },
    mustKnow: {
      en: "A buffer is a weak acid together with its own conjugate base, and it works ONLY near its pKa — the useful range is about one pH unit either side, which is the flat part of the titration curve. Two run the body: phosphate (pKa 6.86) inside cells, bicarbonate near pH 7.4 in blood. The bicarbonate one has a trick no chemistry-bench buffer has — its acid component is in equilibrium with the CO2 in your lungs, so you can shift blood pH by changing how fast you breathe.",
      cn: "**缓冲液 = 一个弱酸 + 它自己的共轭碱**，而且**只在它自己的 pKa 附近才有用**——**有效范围大约是 pKa 上下各 1 个 pH 单位**，也就是**滴定曲线上那段平的**。身体里主要靠两套：**细胞内是磷酸盐（pKa 6.86）**，**血液里是碳酸氢盐（在 pH 7.4 附近）**。⚠️ **碳酸氢盐这一套有一个实验台上的缓冲液没有的花招**——**它的酸组分与你肺里的 CO₂ 处于平衡**，所以**改变呼吸的快慢就能移动血液的 pH**。"
    },
    summary: {
      en: "Short and almost entirely practical. “A mixture of a weak acid (or base) and its salt resists changes in pH” caused by the addition of H+ or OH- (A p.64), and the pH of such a mixture is given by the Henderson-Hasselbalch equation. The reason is geometric rather than mysterious: a titration curve has a relatively flat zone extending about one pH unit either side of its midpoint, and in that zone a given amount of acid or base moves the pH far less than the same amount added outside it. That flat zone is the buffering region, and its midpoint — where proton donor and proton acceptor are present in equal concentration — is both the pKa and the point of maximum buffering power. Two systems do the work in a body. Phosphate, with a pKa of 6.86, resists change between roughly 5.9 and 7.9, which covers the 6.9 to 7.4 of cytoplasm and extracellular fluid. Bicarbonate holds blood plasma near 7.4, and it is the more interesting of the two because it is an open system: H2CO3 is in equilibrium with dissolved CO2, which is in equilibrium with the large reserve of CO2 gas in the lungs, so the blood's buffering capacity is continuous with breathing. Where this becomes clinical is the last paragraph: conditions that lower blood pH cause acidosis and conditions that raise it cause alkalosis, and both can be life-threatening. Uncontrolled diabetes is the book's example — a build-up of β-hydroxybutyric and acetoacetic acid drives plasma pH below 7.35, and severe acidosis produces headache, drowsiness, nausea, vomiting, then stupor, coma and convulsions, presumably because at the lower pH some enzymes no longer work optimally. IN THE BOOK'S OWN WORDS: “Almost every biological process is pH-dependent; a small change in pH produces a large change in the rate of the process.” (A p.59); “Buffering results from two reversible reaction equilibria occurring in a solution of nearly equal concentrations” (A p.60); “The intracellular and extracellular fluids of multicellular organisms have a characteristic and nearly constant pH.” (A p.61); “Blood plasma is buffered in part by the bicarbonate system, consisting of carbonic acid” (A p.62); “Hyperventilation, the rapid breathing sometimes elicited by stress or anxiety, tips the normal balance” (A p.63).",
      cn: "很短，而且几乎全是实用内容。「**弱酸（或弱碱）与其盐的混合物，能抵抗加入 H⁺ 或 OH⁻ 所引起的 pH 变化**」（A p.64），这种混合物的 pH 由 **Henderson-Hasselbalch 方程**给出。原因并不神秘，而是**几何的**：滴定曲线在其中点两侧各约 **1 个 pH 单位**的范围内有一段**相对平坦的区域**，在这段区域里，同样量的酸或碱**对 pH 的影响远小于**在区域之外加入时。这段平坦区就是**缓冲区间 (buffering region)**，它的中点——**质子供体与质子受体浓度相等**之处——**既是 pKa，也是缓冲能力最强的点**。身体里由两套体系承担这项工作。**磷酸盐**的 **pKa 是 6.86**，在大约 **5.9 到 7.9** 之间抵抗变化，正好覆盖细胞质与细胞外液的 **6.9–7.4**。**碳酸氢盐**把血浆维持在 **7.4** 附近，而它是两者中更有意思的一个，**因为它是一个开放体系**：**H₂CO₃ 与溶解的 CO₂ 平衡，溶解的 CO₂ 又与肺气腔中大量储备的 CO₂ 气体平衡**——**所以血液的缓冲能力是和呼吸连在一起的**。最后一段是它变成临床的地方：**使血 pH 降低的情况造成酸中毒 (acidosis)，使之升高的造成碱中毒 (alkalosis)**，两者都可能危及生命。书上的例子正是**未控制的糖尿病**——**β-羟丁酸和乙酰乙酸的堆积**把血浆 pH 压到 **7.35 以下**，而严重酸中毒会依次产生**头痛、嗜睡、恶心、呕吐**，继而**木僵、昏迷和惊厥**，**推测是因为在更低的 pH 下某些酶不再处于最佳工作状态**。⚠️ **这一段正是捷克书 `8-4-4-3` / `10-8` 里「酮体过量 → 酸中毒 → 昏迷」那条线背后的酸碱化学**——那两个节点讲了后果，这一节讲的是为什么。"
    }
  }
]);
